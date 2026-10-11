import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-2nde',
  chapters: [
    /* ==================================================================== */
    /* LE ROMAN AUX XVIIIe ET XIXe SIÈCLES : UN GENRE MODERNE                */
    /* ==================================================================== */
    {
      id: 'roman-xviiie-xixe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'roman-genre-moderne',
          title: 'Le roman, un genre en liberté : formes et ambitions',
          minutes: 30,
          objectives: [
            "Définir le roman comme un récit de fiction en prose, longtemps dépourvu de règles fixes.",
            "Situer les principales formes du roman au XVIIIe siècle : roman-mémoires, roman épistolaire, conte philosophique.",
            "Identifier les ambitions du roman au XIXe siècle : peindre la société, rivaliser avec l'histoire, toucher un large public.",
            "Relier la forme choisie par un romancier à l'effet qu'il cherche à produire sur le lecteur.",
          ],
          course: [
            {
              heading: "Un genre né sans règles",
              paragraphs: [
                "Au Moyen Âge, « mettre en roman » signifie traduire un texte du latin, langue des savants, vers la langue romane, c'est-à-dire la langue parlée par le peuple. Le mot désigne d'abord des récits en vers, comme ceux de Chrétien de Troyes au XIIe siècle (Lancelot ou le Chevalier de la charrette, Perceval ou le Conte du Graal), puis, peu à peu, de longs récits d'aventures en prose.",
                "Le roman a une particularité décisive : aucune poétique ancienne ne le codifie. Aristote, dans sa Poétique, fixe des principes pour la tragédie et l'épopée, mais le roman n'a ni modèle antique prestigieux ni règles comparables aux trois unités du théâtre classique. Au XVIIe siècle, on le juge souvent frivole, voire dangereux pour les mœurs, parce qu'il parle d'amour et qu'il est lu pour le plaisir. L'évêque Pierre-Daniel Huet, dans son Traité de l'origine des romans (1670), le définit comme une fiction d'aventures amoureuses écrite en prose, pour le plaisir et l'instruction des lecteurs.",
                "Ce manque de règles est en réalité une liberté. Le roman peut tout accueillir : l'aventure, l'analyse des sentiments, la satire, l'histoire, la description de la société. Au XVIIe siècle déjà, deux voies s'opposent : le long roman pastoral et héroïque, comme L'Astrée d'Honoré d'Urfé (1607-1627), et le roman bref d'analyse psychologique, comme La Princesse de Clèves de Madame de Lafayette (1678), qui scrute le combat entre la passion et le devoir.",
              ],
              box: { label: "Définition", text: "Le roman est un récit de fiction en prose, d'une certaine longueur, qui raconte les aventures de personnages présentés comme vivants. Aucune règle fixe ne lui impose un sujet, une forme ou un style : c'est un genre ouvert, qui se réinvente sans cesse." },
            },
            {
              heading: "Au XVIIIe siècle : faire croire au vrai",
              paragraphs: [
                "Pour échapper au reproche de frivolité, les romanciers du XVIIIe siècle font comme si leurs récits étaient authentiques. Le roman-mémoires donne la parole à un personnage qui raconte sa propre vie, à la première personne et après coup : l'abbé Prévost fait raconter au chevalier Des Grieux sa passion ruineuse pour Manon dans Manon Lescaut (1731) ; Marivaux confie à une héroïne âgée le récit de sa jeunesse dans La Vie de Marianne (1731-1742).",
                "Le roman épistolaire est composé de lettres échangées par les personnages, sans narrateur qui les relie. Montesquieu l'utilise pour faire la satire de la société française vue par deux voyageurs persans dans les Lettres persanes (1721) ; Rousseau en fait le roman de la passion et de la vertu dans Julie ou la Nouvelle Héloïse (1761) ; Laclos, dans Les Liaisons dangereuses (1782), montre deux libertins, Valmont et la marquise de Merteuil, qui manipulent leur entourage. La lettre multiplie les points de vue et laisse au lecteur le soin de démêler le vrai du mensonge.",
                "Ces romans sont souvent précédés de préfaces où un prétendu éditeur affirme avoir trouvé ou classé des papiers réels. Le lecteur n'est pas forcément dupe, mais le jeu donne au récit un air de document vrai. D'autres auteurs choisissent au contraire d'afficher la fiction : Voltaire, dans le conte philosophique Candide (1759), invente un héros naïf et des aventures invraisemblables pour critiquer l'optimisme et les abus de son temps ; Diderot, dans Jacques le fataliste (publié en volume en 1796), interrompt sans cesse son récit pour dialoguer avec le lecteur sur la manière de raconter.",
              ],
              box: { label: "Repère", text: "Roman-mémoires : un personnage raconte sa vie après coup, à la première personne (Prévost, Marivaux). Roman épistolaire : des lettres sans narrateur unique (Montesquieu, Rousseau, Laclos). Conte philosophique : un récit bref et souvent invraisemblable au service d'une idée (Voltaire)." },
            },
            {
              heading: "Au XIXe siècle : le roman veut tout dire",
              paragraphs: [
                "Au début du XIXe siècle, le roman historique, venu d'Écosse avec Walter Scott (Ivanhoé, 1819), fait revivre le passé à travers des personnages inventés mêlés à de grands événements. Victor Hugo publie Notre-Dame de Paris (1831), qui ressuscite le Paris du XVe siècle, et Alexandre Dumas Les Trois Mousquetaires (1844). Le roman devient capable de rivaliser avec les historiens.",
                "Balzac pousse cette ambition jusqu'à vouloir représenter toute la société de son temps. Il réunit ses œuvres sous le titre de La Comédie humaine et, dans l'Avant-propos de 1842, explique qu'il veut être le « secrétaire » de la société française, qui serait elle-même l'historien. À partir du Père Goriot (1835), il fait revenir les mêmes personnages d'un roman à l'autre, comme Rastignac, ce qui donne l'impression d'un monde complet et cohérent. Stendhal, dans Le Rouge et le Noir (1830), compare le roman à un miroir que l'on promène le long d'un chemin : il reflète ce qui est beau comme ce qui est laid.",
              ],
              box: { label: "À retenir", text: "Le XIXe siècle donne au roman de grandes ambitions : faire revivre l'histoire (Scott, Hugo, Dumas), peindre toute une société (Balzac, La Comédie humaine), refléter le réel comme un miroir (Stendhal). Le roman devient le genre dominant du siècle." },
            },
            {
              heading: "Un genre populaire : le roman-feuilleton",
              paragraphs: [
                "En 1836, Émile de Girardin fonde le quotidien La Presse et divise par deux le prix de l'abonnement, en finançant son journal par la publicité. Pour attirer et retenir les lecteurs, il publie des romans par épisodes, au bas de la page : c'est le roman-feuilleton. Balzac y fait paraître La Vieille Fille dès 1836. Les Mystères de Paris d'Eugène Sue (1842-1843) et Le Comte de Monte-Cristo d'Alexandre Dumas (1844-1846), publiés dans le Journal des débats, connaissent un succès immense.",
                "Le feuilleton impose ses techniques : rebondissements, personnages contrastés, secrets dévoilés peu à peu, et surtout interruption au moment le plus palpitant, pour que le lecteur achète le numéro suivant. Certains critiques, comme Sainte-Beuve dans son article « De la littérature industrielle » (1839), dénoncent une littérature écrite pour l'argent. Mais le feuilleton a aussi élargi considérablement le public du roman, et de grands romanciers, de Balzac à Zola, ont publié leurs œuvres d'abord dans la presse.",
              ],
            },
          ],
          keyPoints: [
            "Le roman est un récit de fiction en prose, sans règles fixes : cette liberté explique sa capacité à se renouveler.",
            "Au XVIIe siècle, il est jugé frivole ; La Princesse de Clèves (1678) ouvre la voie du roman d'analyse.",
            "XVIIIe siècle : roman-mémoires (Manon Lescaut, 1731), roman épistolaire (Les Liaisons dangereuses, 1782), conte philosophique (Candide, 1759).",
            "Les préfaces d'éditeur et les lettres « trouvées » donnent au récit l'apparence d'un document authentique.",
            "XIXe siècle : roman historique (Notre-Dame de Paris, 1831), projet de Balzac de peindre toute la société (La Comédie humaine).",
            "Le roman-feuilleton (à partir de 1836, La Presse) élargit le public et impose le suspense de l'épisode.",
          ],
          example: {
            statement: "Un camarade affirme : « Le roman n'a pas de règles, donc il n'a pas vraiment d'histoire. » Montrez, à l'aide de trois exemples précis pris dans des siècles différents, que l'absence de règles a au contraire permis au roman de se transformer.",
            solution: [
              "Analyser l'affirmation : elle confond absence de règles et absence d'évolution. Il faut montrer que le roman a changé de forme et d'ambition selon les époques, justement parce que rien ne le figeait.",
              "XVIIe siècle : face aux longs romans d'aventures comme L'Astrée, Madame de Lafayette écrit avec La Princesse de Clèves (1678) un roman bref, centré sur l'analyse d'une passion. Le genre change de dimension et de sujet.",
              "XVIIIe siècle : pour paraître vrai, le roman adopte la forme des lettres. Dans Les Liaisons dangereuses (1782), Laclos supprime le narrateur et laisse le lecteur confronter les points de vue : c'est une innovation de forme.",
              "XIXe siècle : avec La Comédie humaine, Balzac veut représenter toute la société et fait revenir ses personnages d'un roman à l'autre. Le roman prend une ambition quasi scientifique et historique.",
              "Conclusion : chaque époque a inventé un roman nouveau. L'absence de règles n'empêche pas l'histoire du genre ; elle la rend possible, car le roman peut s'adapter aux attentes de chaque siècle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des œuvres suivantes, donnez la forme romanesque qu'elle illustre (roman-mémoires, roman épistolaire, conte philosophique, roman historique, roman-feuilleton) : a) Manon Lescaut, Prévost (1731) ; b) Les Liaisons dangereuses, Laclos (1782) ; c) Candide, Voltaire (1759) ; d) Notre-Dame de Paris, Hugo (1831) ; e) Les Mystères de Paris, Sue (1842-1843).",
              hint: "Demandez-vous à chaque fois qui raconte (un personnage, des lettres, un narrateur extérieur) et dans quel support ou dans quel but le récit est écrit.",
              solution: [
                "a) Manon Lescaut : roman-mémoires. Le chevalier Des Grieux raconte lui-même, après coup, sa passion pour Manon.",
                "b) Les Liaisons dangereuses : roman épistolaire. L'histoire est connue uniquement par les lettres des personnages.",
                "c) Candide : conte philosophique. Les aventures invraisemblables du héros servent une critique de l'optimisme.",
                "d) Notre-Dame de Paris : roman historique. Le récit fait revivre le Paris du XVe siècle.",
                "e) Les Mystères de Paris : roman-feuilleton. Il a paru par épisodes dans le Journal des débats.",
              ],
            },
            {
              level: 2,
              statement: "Voici une préface écrite pour l'exercice, à la manière du XVIIIe siècle : « Ces lettres ont été trouvées dans le tiroir d'un vieux secrétaire acheté dans une vente. Je n'y ai rien changé, sinon quelques noms qu'il fallait taire. Le lecteur jugera si elles méritaient d'être publiées. » Relevez trois procédés qui donnent l'illusion de l'authenticité, puis expliquez pourquoi un romancier du XVIIIe siècle a intérêt à les employer.",
              hint: "Cherchez ce qui présente le texte comme un objet réel et ce qui fait de l'auteur un simple intermédiaire.",
              solution: [
                "Premier procédé : l'origine matérielle des lettres (« trouvées dans le tiroir d'un vieux secrétaire ») fait du texte un objet réel, découvert par hasard.",
                "Deuxième procédé : le prétendu éditeur affirme n'avoir « rien changé » : il se présente comme un simple transmetteur et non comme un inventeur.",
                "Troisième procédé : les noms tus suggèrent que les personnes existent et qu'il faut protéger leur réputation.",
                "Intérêt : au XVIIIe siècle, le roman est soupçonné d'être frivole et mensonger. En se présentant comme un document vrai, il gagne en crédibilité, émeut davantage le lecteur et peut se défendre contre le reproche d'immoralité, puisque l'auteur ne ferait que rapporter des faits.",
                "Conclusion : la préface fait partie de la fiction ; elle installe un pacte de lecture qui donne au récit l'apparence de la vérité.",
              ],
            },
            {
              level: 3,
              statement: "Vers la dissertation. Sujet : « Le roman des XVIIIe et XIXe siècles cherche-t-il seulement à divertir ? » Proposez une problématique et un plan en deux parties, chacune avec deux arguments appuyés sur des œuvres citées dans le cours, puis rédigez le premier paragraphe de la deuxième partie.",
              hint: "Une première partie peut reconnaître le plaisir du récit ; la seconde montrera d'autres ambitions : critiquer, analyser, représenter la société.",
              solution: [
                "Problématique : le roman, genre du plaisir par excellence, n'est-il qu'un divertissement, ou se sert-il du plaisir du récit pour faire réfléchir et représenter le monde ?",
                "Partie 1, le roman divertit : a) il captive par l'aventure et les rebondissements (Les Trois Mousquetaires, le roman-feuilleton et son suspense) ; b) il émeut par la peinture des passions (Manon Lescaut, Julie ou la Nouvelle Héloïse).",
                "Partie 2, le divertissement est au service d'autres ambitions : a) critiquer la société et ses idées (Lettres persanes, Candide) ; b) représenter et comprendre toute une société (La Comédie humaine de Balzac, le miroir de Stendhal).",
                "Paragraphe rédigé (2a) : « Le plaisir du récit sert souvent une intention critique. Dans les Lettres persanes (1721), Montesquieu fait découvrir la France par les yeux de deux voyageurs étrangers : leur étonnement amusant devant les usages parisiens rend visibles l'absurdité de certaines coutumes et l'arbitraire du pouvoir. De même, Voltaire entraîne Candide dans des aventures invraisemblables et comiques, mais chaque catastrophe dément la philosophie optimiste de Pangloss. Le lecteur rit, mais il est conduit à juger. Le divertissement n'est donc pas une fin : il rend la critique plus efficace. »",
                "Conclusion attendue : le roman divertit, mais ce divertissement est aussi un moyen de connaissance et de critique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces romans dans l'ordre chronologique de leur publication.",
            items: [
              "La Princesse de Clèves, Madame de Lafayette (1678)",
              "Manon Lescaut, Prévost (1731)",
              "Candide, Voltaire (1759)",
              "Les Liaisons dangereuses, Laclos (1782)",
              "Le Rouge et le Noir, Stendhal (1830)",
              "Le Père Goriot, Balzac (1835)",
              "Madame Bovary, Flaubert (1857)",
            ],
          },
          quiz: [
            {
              q: "Que signifie, au Moyen Âge, l'expression « mettre en roman » ?",
              options: ["Raconter en prose une histoire d'amour inventée", "Traduire un texte du latin en langue romane", "Mettre un récit en vers réguliers", "Publier un texte par épisodes"],
              answer: 1,
              why: "Le roman est d'abord défini par sa langue : la langue romane, parlée par le peuple, par opposition au latin des savants.",
            },
            {
              q: "Quelle forme caractérise Les Liaisons dangereuses de Laclos ?",
              options: ["Le roman-mémoires", "Le conte philosophique", "Le roman épistolaire", "Le roman historique"],
              answer: 2,
              why: "Le roman est entièrement composé des lettres des personnages, sans narrateur qui les relie.",
            },
            {
              q: "Pourquoi les romanciers du XVIIIe siècle présentent-ils souvent leur récit comme des lettres ou des mémoires authentiques ?",
              options: ["Pour donner au récit l'apparence d'un document vrai", "Parce que la censure royale interdisait toute œuvre de fiction", "Pour pouvoir écrire en vers", "Pour éviter de payer un éditeur"],
              answer: 0,
              why: "Le roman étant soupçonné de frivolité et de mensonge, l'illusion d'authenticité lui donne crédibilité et force émotionnelle.",
            },
            {
              q: "Quel romancier réunit ses œuvres sous le titre de La Comédie humaine ?",
              options: ["Victor Hugo", "Stendhal", "Gustave Flaubert", "Honoré de Balzac"],
              answer: 3,
              why: "Balzac présente ce projet dans l'Avant-propos de 1842 : représenter toute la société française de son temps.",
            },
            {
              q: "Quel est le principal effet du roman-feuilleton, né dans la presse en 1836 ?",
              options: ["Il réserve désormais la lecture des romans aux seuls lecteurs savants", "Il élargit le public et impose le suspense de l'épisode", "Il remplace le roman par la poésie"],
              answer: 1,
              why: "Publié par épisodes dans des journaux moins chers, le roman touche un large public ; chaque épisode s'interrompt sur une attente.",
            },
          ],
          trap: "Croire que le roman, faute de règles, serait un genre informe ou mineur, ou confondre les formes : un roman épistolaire n'a pas de narrateur unique, alors qu'un roman-mémoires est raconté par un seul personnage, après coup.",
          method: "Construisez une frise chronologique personnelle avec, pour chaque siècle, deux romans, leur date et leur forme (mémoires, lettres, conte, roman historique, feuilleton) : en dissertation, ces repères datés fournissent des exemples précis et immédiatement utilisables.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'narrateur-point-de-vue',
          title: 'Qui raconte ? Narrateur, focalisation et point de vue',
          minutes: 35,
          objectives: [
            "Distinguer l'auteur, le narrateur et le personnage.",
            "Identifier le statut du narrateur et le type de focalisation d'un extrait, à partir d'indices précis.",
            "Reconnaître le discours direct, indirect et indirect libre, et en analyser les effets.",
            "Interpréter le choix d'un point de vue dans un commentaire.",
          ],
          course: [
            {
              heading: "Auteur, narrateur, personnage",
              paragraphs: [
                "L'auteur est la personne réelle qui a écrit le livre : Flaubert, Balzac, Prévost. Le narrateur est la voix qui raconte l'histoire à l'intérieur du texte : c'est une création de l'auteur, même quand il dit « je ». Confondre les deux est une erreur fréquente : le chevalier Des Grieux, qui raconte sa vie dans Manon Lescaut, n'est pas l'abbé Prévost.",
                "Le narrateur peut être un personnage de l'histoire. Il raconte alors à la première personne : soit il est le héros de son récit (on parle de narrateur-personnage principal, comme Des Grieux), soit il est un témoin qui raconte l'histoire d'un autre. On dit qu'il est interne à l'histoire, ou homodiégétique.",
                "Le narrateur peut aussi être absent de l'histoire qu'il raconte : il emploie la troisième personne et ne participe pas aux événements, comme dans la plupart des romans de Balzac ou de Zola. On dit qu'il est externe à l'histoire, ou hétérodiégétique. La personne grammaticale est un premier indice, mais il faut toujours vérifier si celui qui dit « je » participe ou non aux faits.",
              ],
              box: { label: "Définition", text: "Le narrateur est l'instance qui raconte l'histoire dans le texte. Il est soit personnage de l'histoire (récit à la première personne, narrateur homodiégétique), soit extérieur à elle (récit à la troisième personne, narrateur hétérodiégétique). Il ne se confond jamais avec l'auteur." },
            },
            {
              heading: "Les trois focalisations",
              paragraphs: [
                "La focalisation répond à la question : à travers quel regard l'histoire est-elle perçue ? Elle indique ce que le lecteur peut savoir. En focalisation zéro, ou point de vue omniscient, le narrateur en sait plus que les personnages : il connaît leur passé, leurs pensées secrètes, l'avenir, et passe librement d'un lieu à l'autre. C'est le choix fréquent de Balzac, qui explique les origines et les motivations de chacun.",
                "En focalisation interne, le récit adopte le point de vue d'un personnage : le lecteur ne voit, n'entend et ne sait que ce que ce personnage perçoit et pense. Les indices sont les verbes de perception (voir, apercevoir, entendre), les verbes de pensée, les modalisateurs (sans doute, peut-être, il lui semblait) et les limites du savoir. Flaubert, dans Madame Bovary, pratique une focalisation interne variable : le récit passe du regard de Charles à celui d'Emma, puis à celui d'autres personnages.",
                "En focalisation externe, le narrateur en sait moins que les personnages : il décrit de l'extérieur, comme une caméra, les gestes, les paroles et les apparences, sans révéler les pensées. Les personnages sont parfois désignés de manière vague (un homme, l'inconnu). Ce choix crée du mystère ; il est fréquent au début des romans et dans certains récits du XXe siècle.",
              ],
              box: { label: "Repère", text: "Focalisation zéro (omniscient) : le narrateur sait tout, pensées, passé, avenir. Focalisation interne : tout est perçu par un personnage, ses perceptions et ses pensées. Focalisation externe : on voit de l'extérieur, sans accès aux pensées, comme au cinéma." },
            },
            {
              heading: "Le narrateur qui juge et qui commente",
              paragraphs: [
                "Le point de vue ne concerne pas seulement ce que l'on voit, mais aussi la manière dont le narrateur juge ce qu'il raconte. Un narrateur peut intervenir dans son récit pour commenter, généraliser ou s'adresser au lecteur : on parle d'intrusions du narrateur. Balzac interrompt souvent l'action pour énoncer des vérités générales au présent sur la société ou les passions ; Stendhal commente avec ironie les illusions de ses personnages.",
                "Diderot, dans Jacques le fataliste, pousse le jeu plus loin : le narrateur interpelle sans cesse le lecteur, imagine ses objections et lui rappelle qu'il pourrait raconter l'histoire tout autrement. À l'inverse, Flaubert cherche à effacer le narrateur : il évite les jugements explicites et laisse les faits, les détails et les paroles des personnages parler d'eux-mêmes, ce qui oblige le lecteur à interpréter.",
              ],
            },
            {
              heading: "Faire entendre les personnages : les paroles rapportées",
              paragraphs: [
                "Le discours direct reproduit les paroles telles qu'elles ont été prononcées, avec des guillemets ou des tirets de dialogue et un verbe introducteur : Il dit : « Je partirai demain. » Il donne de la vivacité et un effet de réel. Le discours indirect intègre les paroles dans une proposition subordonnée, avec changement de personnes et de temps : Il dit qu'il partirait le lendemain. Le narrateur reste maître du récit.",
                "Le discours indirect libre mêle les deux : il garde les temps et les personnes du récit, comme le discours indirect, mais supprime le verbe introducteur et la subordination, et conserve l'expressivité de la parole ou de la pensée (exclamations, questions, mots familiers) : Il partirait demain, enfin ! Flaubert en a fait un instrument majeur : on ne sait plus très bien si l'on entend la voix du narrateur ou celle du personnage, ce qui permet à la fois d'épouser ses rêves et de les regarder avec ironie.",
              ],
              box: { label: "Règle", text: "Direct : Il dit : « Je suis heureux. » Indirect : Il dit qu'il était heureux. Indirect libre : Il était heureux, si heureux ! Au passage au discours indirect, après un verbe introducteur au passé, les pronoms, les temps (présent devient imparfait, futur devient conditionnel) et les indicateurs de temps (demain devient le lendemain) changent." },
            },
          ],
          keyPoints: [
            "L'auteur est une personne réelle ; le narrateur est une voix du texte, même quand il dit « je ».",
            "Narrateur personnage (première personne) ou narrateur extérieur à l'histoire (troisième personne).",
            "Focalisation zéro : le narrateur sait tout ; interne : on perçoit par un personnage ; externe : on voit de l'extérieur.",
            "Indices de la focalisation interne : verbes de perception et de pensée, modalisateurs, savoir limité.",
            "Les intrusions du narrateur (commentaires, vérités générales, adresses au lecteur) révèlent son jugement.",
            "Le discours indirect libre fond la voix du narrateur et celle du personnage, sans verbe introducteur.",
          ],
          example: {
            statement: "Voici un passage écrit pour l'exercice : « Lucie poussa la porte du salon. Il lui sembla que la pièce avait rétréci ; les fauteuils, autrefois immenses, lui parurent ridicules. Où était passé le piano ? Elle entendit un pas dans le couloir et, sans savoir pourquoi, eut peur. » Identifiez le statut du narrateur et la focalisation, en justifiant par des indices précis.",
            solution: [
              "Statut du narrateur : le récit est à la troisième personne (« Lucie », « elle ») et le narrateur ne participe pas à l'action. C'est un narrateur extérieur à l'histoire.",
              "Indices de perception : « Il lui sembla », « lui parurent », « Elle entendit » : la scène est perçue à travers les sens de Lucie.",
              "Indices de pensée et de savoir limité : la question « Où était passé le piano ? » traduit ses pensées, au discours indirect libre ; « sans savoir pourquoi » montre que le récit ne dépasse pas ce que le personnage sait.",
              "Le narrateur ne donne aucune information que Lucie ignore : on ne sait pas qui marche dans le couloir.",
              "Réponse : narrateur extérieur à l'histoire, focalisation interne sur Lucie. Ce choix fait partager au lecteur son trouble et sa peur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez la focalisation de chacun de ces passages écrits pour l'exercice : a) « Un homme entra dans le café, s'assit près de la fenêtre et commanda un verre d'eau. Il regardait la rue. » b) « Paul ignorait encore que cette lettre allait bouleverser sa vie ; quant à sa sœur, elle n'avait jamais pardonné à leur père. » c) « Je vis la mer pour la première fois ; elle me sembla plus grise que dans mes rêves. » d) « Marie observait la foule ; ces visages inconnus l'inquiétaient, et elle se demandait si son frère viendrait. »",
              hint: "Demandez-vous à chaque fois si le narrateur révèle des pensées, et de combien de personnages, ou s'il connaît l'avenir.",
              solution: [
                "a) Focalisation externe : l'homme est désigné vaguement (« Un homme ») et seuls ses gestes sont décrits, sans aucune pensée.",
                "b) Focalisation zéro : le narrateur connaît l'avenir de Paul (« allait bouleverser sa vie ») et les sentiments d'un second personnage, la sœur.",
                "c) Focalisation interne, avec un narrateur personnage : le « je » rapporte ses perceptions (« Je vis ») et ses impressions (« elle me sembla »).",
                "d) Focalisation interne sur Marie : verbe de perception (« observait »), sentiments (« l'inquiétaient ») et interrogation sur un fait qu'elle ignore.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez le passage suivant (écrit pour l'exercice) en focalisation externe, puis expliquez en deux phrases ce que le texte perd et ce qu'il gagne : « Antoine attendait sur le quai, furieux contre lui-même. Il savait qu'elle ne viendrait pas ; il le savait depuis hier, depuis ce silence au téléphone. Il regarda sa montre pour la dixième fois. »",
              hint: "Supprimez tout ce qui relève des pensées, des sentiments et du savoir intérieur ; ne gardez que ce qu'une caméra pourrait enregistrer.",
              solution: [
                "Repérage de ce qui doit disparaître : « furieux contre lui-même » (sentiment), « Il savait qu'elle ne viendrait pas ; il le savait depuis hier, depuis ce silence au téléphone » (pensées et savoir intérieur).",
                "Réécriture possible : « Un homme attendait sur le quai. Il faisait les cent pas, les mains dans les poches, et s'arrêtait parfois pour fixer l'entrée de la gare. Il regarda sa montre, puis encore une fois. »",
                "Le prénom peut être remplacé par une désignation vague (« Un homme ») et l'émotion est suggérée seulement par des gestes (faire les cent pas, regarder sa montre).",
                "Ce que le texte perd : l'accès direct aux sentiments et à la cause de l'attente, donc une partie de l'émotion partagée.",
                "Ce qu'il gagne : du mystère et de la tension, car le lecteur doit interpréter les gestes et se demander qui l'homme attend.",
              ],
            },
            {
              level: 3,
              statement: "Vers le commentaire. Voici un passage écrit pour l'exercice : « Clémence referma le livre. Elle aussi aurait voulu des bals, des voyages, une passion ! Au lieu de cela, il y avait cette cuisine, ces assiettes, cette pendule qui ne s'arrêtait jamais. Était-ce donc cela, la vie ? » Rédigez un paragraphe de commentaire qui analyse le point de vue et le discours rapporté, et dégage l'effet produit sur le lecteur.",
              hint: "Repérez le passage du récit aux pensées de Clémence sans verbe introducteur, puis demandez-vous si le narrateur partage son rêve ou s'en distancie.",
              solution: [
                "Identifier le point de vue : narrateur extérieur à l'histoire (troisième personne), focalisation interne sur Clémence.",
                "Identifier le discours rapporté : à partir de « Elle aussi aurait voulu », on entend les pensées du personnage sans verbe introducteur ni subordination, mais avec les temps du récit et la troisième personne : c'est du discours indirect libre. L'exclamation et la question finale en sont les marques expressives.",
                "Analyser les procédés : opposition entre l'énumération rêvée (« des bals, des voyages, une passion ») et l'énumération du quotidien introduite par les démonstratifs (« cette cuisine, ces assiettes, cette pendule ») ; la pendule « qui ne s'arrêtait jamais » symbolise l'ennui répétitif.",
                "Interpréter : le lecteur épouse le désir de Clémence, mais la juxtaposition de rêves vagues et convenus, inspirés par un livre, laisse percer une ironie discrète du narrateur.",
                "Paragraphe rédigé : « Le passage plonge le lecteur dans la conscience de Clémence grâce au discours indirect libre. Sans verbe introducteur, ses pensées surgissent dans le récit, portées par l'exclamation (« une passion ! ») et la question finale. L'opposition entre l'énumération des rêves et celle des objets ménagers, soulignée par les démonstratifs, rend sensible l'étouffement du quotidien, que la pendule inlassable symbolise. Pourtant, ces rêves empruntés à un livre restent flous et convenus : la voix du narrateur, mêlée à celle du personnage, invite à la fois à compatir et à sourire de ces illusions. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Focalisation zéro", right: "Le narrateur en sait plus que les personnages" },
              { left: "Focalisation interne", right: "Le récit passe par les perceptions et les pensées d'un personnage" },
              { left: "Focalisation externe", right: "Le récit montre de l'extérieur, sans accès aux pensées" },
              { left: "Narrateur homodiégétique", right: "Narrateur qui est aussi un personnage de l'histoire" },
              { left: "Intrusion du narrateur", right: "Commentaire ou jugement qui interrompt le récit" },
              { left: "Discours indirect libre", right: "Pensées rapportées sans verbe introducteur, aux temps du récit" },
            ],
          },
          quiz: [
            {
              q: "Dans Manon Lescaut, le chevalier Des Grieux raconte sa propre histoire. Il est :",
              options: ["l'auteur du roman", "un narrateur personnage", "un narrateur omniscient extérieur à l'histoire", "un simple destinataire"],
              answer: 1,
              why: "Des Grieux participe aux événements qu'il raconte : c'est un narrateur personnage. L'auteur est l'abbé Prévost.",
            },
            {
              q: "Quel indice signale le plus sûrement une focalisation interne ?",
              options: ["Un récit au passé simple", "La présence de nombreux personnages réunis dans une même scène", "Des verbes de perception rapportés à un personnage", "Une description de paysage"],
              answer: 2,
              why: "Les verbes de perception et de pensée rattachés à un personnage montrent que le récit passe par son regard.",
            },
            {
              q: "Un narrateur annonce : « Il ne savait pas encore que ce jour serait le dernier de sa jeunesse. » Quelle focalisation ?",
              options: ["Focalisation zéro", "Focalisation interne", "Focalisation externe"],
              answer: 0,
              why: "Le narrateur connaît l'avenir, que le personnage ignore : il en sait plus que lui, c'est la focalisation zéro.",
            },
            {
              q: "Quelle phrase est au discours indirect libre ?",
              options: ["Elle dit : « Je partirai demain. »", "Elle dit qu'elle partirait le lendemain.", "Elle déclara son départ.", "Elle partirait demain, enfin libre !"],
              answer: 3,
              why: "Pas de verbe introducteur ni de subordonnée, mais les temps du récit (conditionnel) et l'expressivité de la pensée (exclamation).",
            },
            {
              q: "Quel effet produit le plus souvent la focalisation externe ?",
              options: ["Elle explique en détail les motivations de tous les personnages", "Elle crée du mystère et oblige à interpréter", "Elle permet de connaître l'avenir"],
              answer: 1,
              why: "Privé d'accès aux pensées, le lecteur doit déduire les sentiments des gestes et des paroles, ce qui crée une attente.",
            },
          ],
          trap: "Confondre le narrateur avec l'auteur, ou déduire la focalisation de la seule personne grammaticale : un récit à la troisième personne peut être en focalisation interne, et un « je » peut raconter avec le recul de celui qui sait la suite.",
          method: "Pour identifier une focalisation, posez trois questions au texte : qui voit (verbes de perception) ? qui pense (accès aux pensées, et de combien de personnages) ? que sait le narrateur (passé, avenir, secrets) ? Puis interprétez toujours l'effet produit sur le lecteur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'realisme-naturalisme',
          title: 'Réalisme et naturalisme : représenter le réel au XIXe siècle',
          minutes: 35,
          objectives: [
            "Situer le réalisme et le naturalisme dans l'histoire littéraire et artistique du XIXe siècle.",
            "Identifier les principes et les procédés du roman réaliste et du roman naturaliste.",
            "Distinguer l'art de l'illusion revendiqué par Flaubert et Maupassant de la méthode expérimentale revendiquée par Zola.",
            "Analyser les fonctions d'une description dans un extrait de roman.",
          ],
          course: [
            {
              heading: "Le réalisme : représenter le réel sans l'embellir",
              paragraphs: [
                "Le mot « réalisme » s'impose dans les années 1850, d'abord en peinture. En 1855, le peintre Gustave Courbet, dont plusieurs toiles ont été refusées à l'Exposition universelle, organise sa propre exposition dans un pavillon qu'il intitule « Du Réalisme ». Il peint des paysans, des casseurs de pierres, un enterrement de village, avec la gravité réservée jusque-là aux sujets historiques ou mythologiques. L'écrivain Champfleury défend le même programme en littérature dans un recueil d'articles, Le Réalisme (1857).",
                "Le réalisme refuse l'idéalisation et l'exotisme romantiques. Il veut représenter la société contemporaine telle qu'elle est, avec ses milieux ordinaires, ses métiers, son argent, ses objets, et des personnages moyens plutôt que des héros exceptionnels. Balzac et Stendhal, dans la première moitié du siècle, sont considérés comme ses précurseurs : Balzac par son projet de peindre toute la société, Stendhal par son image du roman comme miroir.",
                "Pour produire cette impression de vérité, le roman réaliste s'appuie sur la documentation, la vraisemblance des faits, l'exactitude des lieux, souvent réels ou proches du réel, et de longues descriptions. Il préfère un narrateur discret, qui semble montrer plutôt que juger.",
              ],
              box: { label: "Définition", text: "Le réalisme est un mouvement littéraire et artistique du milieu du XIXe siècle qui cherche à représenter fidèlement la réalité contemporaine, y compris dans ce qu'elle a d'ordinaire, de banal ou de laid, sans l'idéaliser." },
            },
            {
              heading: "Flaubert et Maupassant : l'art de l'illusion",
              paragraphs: [
                "Madame Bovary de Gustave Flaubert, sous-titré « Mœurs de province », paraît en revue en 1856, puis en volume en 1857, après un procès pour outrage à la morale publique et religieuse qui se termine par un acquittement. Le roman raconte la vie d'Emma, épouse d'un médecin de campagne, qui étouffe dans l'ennui et rêve de la passion des romans qu'elle a lus. Flaubert refuse pourtant l'étiquette de « réaliste » : il veut surtout atteindre la beauté par le style, travaille chaque phrase pendant des heures et défend l'impersonnalité de l'auteur, qui ne doit pas juger ses personnages.",
                "Guy de Maupassant, disciple de Flaubert, précise cette conception dans « Le Roman », préface de Pierre et Jean (1888). Selon lui, l'écrivain ne copie pas le réel : il choisit, ordonne et compose les faits pour donner « l'illusion complète du vrai ». Il conclut que les réalistes de talent devraient plutôt s'appeler des « Illusionnistes ». Le réalisme n'est donc pas une photographie, mais un art de produire l'impression du réel.",
              ],
              box: { label: "À retenir", text: "Pour Flaubert et Maupassant, le réalisme est une construction : l'écrivain sélectionne et compose les faits, travaille le style et efface ses jugements, afin de donner au lecteur l'illusion de la réalité." },
            },
            {
              heading: "Le naturalisme : le roman comme expérience",
              paragraphs: [
                "Le naturalisme prolonge le réalisme en lui donnant une ambition scientifique. Son chef de file, Émile Zola, s'inspire de deux penseurs : l'historien Hippolyte Taine, qui explique les œuvres et les hommes par la race, le milieu et le moment, et le médecin Claude Bernard, auteur de l'Introduction à l'étude de la médecine expérimentale (1865). Dans Le Roman expérimental (1880), Zola affirme que le romancier doit procéder comme un savant : placer des personnages dans un milieu donné et observer comment leur tempérament et les circonstances déterminent leurs actes.",
                "Dans la préface de la deuxième édition de Thérèse Raquin (1868), Zola explique qu'il a voulu étudier des tempéraments et non des caractères. Son grand cycle, Les Rougon-Macquart, compte vingt romans publiés de 1871 à 1893, sous le sous-titre « Histoire naturelle et sociale d'une famille sous le Second Empire ». Il suit les descendants d'une même famille, marqués par une hérédité de névroses et d'alcoolisme, dans tous les milieux : les Halles (Le Ventre de Paris), l'alcoolisme ouvrier (L'Assommoir, 1877), les grands magasins (Au Bonheur des Dames, 1883), la mine (Germinal, 1885).",
                "Avant lui, les frères Edmond et Jules de Goncourt avaient fait entrer le peuple dans le roman avec Germinie Lacerteux (1865), histoire d'une servante. En 1880, Zola et cinq jeunes écrivains, dont Maupassant et Huysmans, publient un recueil collectif de nouvelles, Les Soirées de Médan, qui affiche l'unité du groupe. Mais celui-ci se disperse vite : Huysmans rompt avec le naturalisme dès À rebours (1884).",
              ],
              box: { label: "Repère", text: "1857 : Madame Bovary. 1865 : Germinie Lacerteux (Goncourt). 1871 à 1893 : Les Rougon-Macquart (Zola, vingt romans). 1877 : L'Assommoir. 1880 : Le Roman expérimental et Les Soirées de Médan. 1885 : Germinal. 1888 : préface de Pierre et Jean (Maupassant)." },
            },
            {
              heading: "Les procédés, et ce qui dépasse le programme",
              paragraphs: [
                "Le romancier naturaliste enquête avant d'écrire. Zola remplit des carnets de notes, visite les lieux, interroge des spécialistes : pour Germinal, il se rend en 1884 dans les mines d'Anzin, dans le Nord, pendant une grève. Le roman emploie le vocabulaire technique des métiers et, dans L'Assommoir, Zola fait entendre la langue populaire des personnages jusque dans la narration, grâce au discours indirect libre.",
                "La description occupe une place centrale. Elle informe sur un milieu, elle explique les personnages par leur cadre de vie, et elle produit ce que le critique Roland Barthes a appelé un « effet de réel » : des détails sans utilité pour l'intrigue, qui n'ont pour fonction que de faire croire à la réalité du monde décrit. Elle peut aussi devenir symbolique.",
                "Car le naturalisme ne se réduit pas à une méthode scientifique. Zola transforme la mine de Germinal en monstre qui dévore les hommes, et les grands magasins en machine vivante : sa vision est souvent épique et symbolique. Le mouvement fut aussi violemment critiqué : on lui reprocha de s'attarder sur la misère et la laideur, au point qu'en 1887, cinq jeunes écrivains publient dans Le Figaro un manifeste contre La Terre de Zola.",
              ],
            },
          ],
          keyPoints: [
            "Réalisme (années 1850) : représenter la société contemporaine sans l'idéaliser, avec des personnages ordinaires.",
            "Courbet en peinture (1855), Champfleury en théorie, Flaubert (Madame Bovary, 1857) en littérature.",
            "Maupassant (préface de Pierre et Jean, 1888) : l'écrivain choisit et compose pour donner « l'illusion complète du vrai ».",
            "Naturalisme : Zola applique au roman la méthode expérimentale (Le Roman expérimental, 1880) ; hérédité et milieu déterminent les personnages.",
            "Les Rougon-Macquart : vingt romans (1871-1893), dont L'Assommoir (1877) et Germinal (1885).",
            "Procédés : enquête et documentation, lexique technique, langue populaire, descriptions qui informent, expliquent et symbolisent.",
          ],
          example: {
            statement: "Voici une description écrite pour l'exercice, à la manière naturaliste : « La chambre donnait sur une cour où séchait du linge gris. Un lit de fer, une table boiteuse, deux chaises dépaillées ; au mur, un calendrier de l'année précédente, jamais décroché. Sur le poêle éteint, une casserole gardait encore l'odeur de la soupe de la veille. » Dégagez les fonctions de cette description.",
            solution: [
              "Fonction informative : la description renseigne sur le milieu social. Le mobilier réduit et abîmé (« lit de fer », « table boiteuse », « chaises dépaillées ») indique la pauvreté d'une famille ouvrière.",
              "Fonction explicative : le cadre éclaire la vie des personnages. Le poêle éteint et la soupe de la veille suggèrent le froid, la faim et l'économie forcée ; le milieu pèse sur ceux qui y vivent, selon la logique naturaliste.",
              "Effet de réel : le calendrier « de l'année précédente, jamais décroché » n'a aucune utilité pour une intrigue ; ce détail concret fait croire à l'existence de la pièce.",
              "Fonction symbolique : ce calendrier arrêté et le linge « gris » évoquent une vie immobile et sans couleur, comme si le temps ne passait plus pour ces habitants.",
              "Réponse : la description informe sur un milieu pauvre, explique la condition des personnages, produit un effet de réel et suggère symboliquement une existence figée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque titre à son auteur et à sa date, puis dites s'il s'agit d'un roman ou d'un texte théorique : Madame Bovary ; Le Roman expérimental ; Germinal ; « Le Roman », préface de Pierre et Jean ; Germinie Lacerteux. Auteurs à placer : Zola (deux fois), Flaubert, Maupassant, les frères Goncourt. Dates à placer : 1857, 1865, 1880, 1885, 1888.",
              hint: "Les deux textes théoriques sont ceux où un écrivain explique sa conception du roman ; Zola en a signé un, Maupassant l'autre.",
              solution: [
                "Madame Bovary : Flaubert, 1857, roman.",
                "Germinie Lacerteux : les frères Goncourt, 1865, roman.",
                "Le Roman expérimental : Zola, 1880, texte théorique.",
                "Germinal : Zola, 1885, roman.",
                "« Le Roman », préface de Pierre et Jean : Maupassant, 1888, texte théorique.",
              ],
            },
            {
              level: 2,
              statement: "Voici un passage écrit pour l'exercice : « À six heures, la sirène de la filature hurla. Jeanne, qui avait les mains crevassées par l'eau des cuves, sentit ses jambes se dérober. Elle buvait, comme sa mère avant elle, un petit verre en rentrant, histoire de tenir le coup, quoi ! Les bobineuses, les fileuses, les rattacheuses sortaient en rangs, pâles sous le gaz. » Relevez quatre procédés caractéristiques du roman naturaliste, en expliquant chacun.",
              hint: "Pensez au milieu, au vocabulaire du métier, à l'hérédité et à la manière dont la langue du personnage entre dans le récit.",
              solution: [
                "Le milieu ouvrier et le travail : la filature, la sirène, les cuves, les horaires. Le roman naturaliste représente le monde du travail industriel.",
                "Le lexique technique : « bobineuses, fileuses, rattacheuses » nomment précisément les métiers, signe d'une documentation.",
                "L'hérédité : Jeanne boit « comme sa mère avant elle » ; le vice se transmet, comme chez les Rougon-Macquart, et le milieu (l'épuisement) l'y pousse.",
                "La langue populaire au discours indirect libre : « histoire de tenir le coup, quoi ! » fait entendre la voix du personnage dans la narration, comme dans L'Assommoir.",
                "On peut ajouter les effets du corps : les « mains crevassées » et les visages « pâles » montrent l'usure physique causée par le travail.",
              ],
            },
            {
              level: 3,
              statement: "Vers la dissertation. Maupassant affirme que les réalistes de talent devraient plutôt s'appeler des « Illusionnistes ». Expliquez cette formule, puis montrez, dans un développement en deux paragraphes, que le roman réaliste et naturaliste reproduit le réel et en même temps le transforme.",
              hint: "Un premier paragraphe peut porter sur la fidélité au réel (documentation, détails), le second sur le travail de sélection, de composition et de symbolisation.",
              solution: [
                "Explication : pour Maupassant, l'écrivain ne peut pas tout dire ; il choisit, ordonne et compose les faits. Il ne reproduit donc pas le réel, il crée l'illusion du réel : c'est un art, comme celui de l'illusionniste qui fait croire à ce qui n'est pas.",
                "Paragraphe 1, reproduire le réel : « Le roman réaliste et naturaliste se fonde sur une observation précise du monde. Zola prépare Germinal par une enquête dans les mines d'Anzin, en 1884, et emploie le vocabulaire technique des mineurs ; Flaubert sous-titre Madame Bovary « Mœurs de province » et décrit minutieusement les objets du quotidien. Ces détails concrets, parfois inutiles à l'intrigue, produisent un effet de réel : le lecteur croit au monde représenté. »",
                "Paragraphe 2, transformer le réel : « Pourtant, cette fidélité est le fruit d'une construction. L'écrivain sélectionne les faits significatifs et les organise en intrigue : la vie d'Emma Bovary est resserrée autour de ses rêves et de leurs déceptions. Zola, surtout, dépasse l'observation : la mine de Germinal devient un monstre qui dévore les hommes. Le réel est ainsi chargé de symboles qui lui donnent un sens. »",
                "Conclusion : le réalisme reproduit le réel pour le rendre crédible, mais il le transforme pour le rendre lisible et significatif ; la formule de Maupassant rappelle que le vrai, en littérature, est toujours un effet de l'art.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le réalisme et le naturalisme.",
            statements: [
              { text: "Le mot « réalisme » s'impose d'abord en peinture, avec Courbet, dans les années 1850.", true: true, why: "En 1855, Courbet expose ses toiles dans son pavillon « Du Réalisme »." },
              { text: "Flaubert revendiquait avec fierté le titre de chef de l'école réaliste.", true: false, why: "Flaubert refusait cette étiquette : il cherchait avant tout la beauté du style et l'impersonnalité." },
              { text: "Pour Maupassant, l'écrivain réaliste doit tout dire, sans rien choisir.", true: false, why: "Au contraire, il choisit et compose les faits pour donner l'illusion du vrai." },
              { text: "Zola s'inspire de la médecine expérimentale de Claude Bernard.", true: true, why: "Dans Le Roman expérimental (1880), il transpose au roman la démarche du savant." },
              { text: "Les Rougon-Macquart racontent l'histoire d'une famille sous le Second Empire.", true: true, why: "Le sous-titre du cycle est « Histoire naturelle et sociale d'une famille sous le Second Empire »." },
              { text: "Le naturalisme s'interdit toute image ou tout symbole.", true: false, why: "Zola donne souvent une dimension épique et symbolique au réel, comme la mine-monstre de Germinal." },
              { text: "Les Goncourt ont fait d'une servante l'héroïne d'un roman, Germinie Lacerteux.", true: true, why: "Publié en 1865, ce roman fait entrer le peuple dans la littérature romanesque." },
            ],
          },
          quiz: [
            {
              q: "Quel peintre est associé à la naissance du mot « réalisme » en 1855 ?",
              options: ["Eugène Delacroix", "Claude Monet", "Jacques-Louis David", "Gustave Courbet"],
              answer: 3,
              why: "Courbet organise en 1855 son exposition « Du Réalisme », en marge de l'Exposition universelle.",
            },
            {
              q: "Selon Maupassant, le romancier réaliste cherche à donner :",
              options: ["l'illusion complète du vrai", "une copie exacte et intégrale du réel", "une image idéale de la société", "une leçon de morale explicite"],
              answer: 0,
              why: "Dans la préface de Pierre et Jean (1888), il explique que l'écrivain choisit et compose les faits pour produire l'illusion du réel.",
            },
            {
              q: "Quelle œuvre expose la théorie du naturalisme ?",
              options: ["L'Éducation sentimentale", "Germinie Lacerteux", "Le Roman expérimental", "Les Soirées de Médan"],
              answer: 2,
              why: "Zola y présente en 1880 le romancier comme un expérimentateur qui observe l'action du milieu et de l'hérédité.",
            },
            {
              q: "Quels deux facteurs déterminent les personnages selon le naturalisme ?",
              options: ["Le hasard et la providence divine", "L'hérédité et le milieu", "L'éducation religieuse et la volonté personnelle"],
              answer: 1,
              why: "Zola, inspiré de Taine et de la science de son temps, explique les comportements par l'hérédité et le milieu.",
            },
            {
              q: "Qu'appelle-t-on « effet de réel » dans une description ?",
              options: ["Un détail inutile à l'intrigue qui fait croire au monde décrit", "Une scène inspirée d'un fait divers authentique relaté par la presse", "Un passage rédigé au présent de vérité générale par le narrateur", "Un portrait flatteur du héros"],
              answer: 0,
              why: "Roland Barthes désigne ainsi les détails concrets dont la seule fonction est de signifier « ceci est réel ».",
            },
          ],
          trap: "Croire que le roman réaliste est une copie fidèle et neutre de la réalité : il sélectionne, compose et symbolise. Autre erreur fréquente : confondre réalisme et naturalisme, alors que seul le second revendique une méthode scientifique fondée sur l'hérédité et le milieu.",
          method: "Face à une description réaliste, posez quatre questions : que m'apprend-elle sur le milieu ? qu'explique-t-elle des personnages ? quel détail produit un effet de réel ? quel élément prend une valeur symbolique ? Vous obtenez ainsi les axes d'un paragraphe de commentaire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'personnage-roman',
          title: 'Le personnage de roman : héros, antihéros et parcours',
          minutes: 30,
          objectives: [
            "Analyser les procédés de caractérisation d'un personnage : nom, portrait, actions, paroles, regard des autres.",
            "Distinguer le héros, le personnage principal et l'antihéros.",
            "Identifier le parcours d'un personnage : apprentissage, ascension, désillusion, déchéance.",
            "Utiliser le schéma actantiel pour décrire les forces qui organisent un récit.",
          ],
          course: [
            {
              heading: "Un être de papier qui paraît vivant",
              paragraphs: [
                "Un personnage de roman n'existe que par les mots du texte : on parle parfois d'« être de papier ». Pourtant, il donne l'illusion d'une personne réelle, au point que le lecteur l'aime, le juge ou s'identifie à lui. Analyser un personnage, c'est donc repérer les procédés par lesquels le romancier le construit.",
                "Le nom est souvent significatif : Voltaire appelle Candide un héros d'une grande candeur et Pangloss, dont le nom signifie en grec « toute langue », un bavard qui parle de tout. Le portrait physique et moral, souvent placé lors de la première apparition, renseigne sur l'âge, l'origine sociale, le caractère. Balzac, influencé par les théories de son temps qui lisaient le caractère sur le visage, fait du physique le reflet du moral.",
                "Le personnage se construit aussi par ses actions, ses paroles (son niveau de langue, ses tics, ce qu'il tait), ses pensées quand le narrateur y donne accès, et le regard des autres personnages sur lui. Les désignations comptent : appeler un personnage « le jeune homme », « l'ambitieux » ou « le malheureux » oriente le jugement du lecteur.",
              ],
              box: { label: "Repère", text: "Procédés de caractérisation : le nom, le portrait physique et moral, les actions, les paroles, les pensées, le regard des autres personnages, les désignations choisies par le narrateur, et l'évolution au fil du récit." },
            },
            {
              heading: "Héros, personnage principal, antihéros",
              paragraphs: [
                "Le mot « héros » vient de l'épopée, où il désigne un être aux qualités exceptionnelles : courage, force, noblesse. Dans le roman, il désigne d'abord le personnage principal, celui qui est au centre de l'intrigue, qu'il soit admirable ou non. Julien Sorel, dans Le Rouge et le Noir (1830), est ambitieux et souvent hypocrite, mais il fascine par son énergie et la force de ses passions.",
                "L'antihéros est un personnage principal qui ne possède pas les qualités traditionnelles du héros : il est médiocre, passif, faible ou en échec. Frédéric Moreau, dans L'Éducation sentimentale de Flaubert (1869), rêve d'amour et de gloire mais laisse passer toutes les occasions. Le roman réaliste et naturaliste multiplie ces figures ordinaires, parce qu'il veut représenter des êtres moyens ; au XXe siècle, Bardamu (Voyage au bout de la nuit, Céline) ou Meursault (L'Étranger, Camus) prolongent ce type.",
              ],
              box: { label: "Définition", text: "Héros : au sens strict, personnage aux qualités exceptionnelles ; au sens large, personnage principal d'un récit. Antihéros : personnage principal dépourvu des qualités héroïques, ordinaire, passif ou en échec, qui suscite parfois la pitié, l'ironie ou le malaise." },
            },
            {
              heading: "Le parcours du personnage",
              paragraphs: [
                "Beaucoup de romans du XIXe siècle sont des romans d'apprentissage, ou romans de formation : un jeune homme, souvent venu de province, découvre la société, ses codes et ses désillusions. Le modèle allemand est Les Années d'apprentissage de Wilhelm Meister de Goethe (1795-1796). Dans Le Père Goriot de Balzac (1835), Eugène de Rastignac apprend à Paris que l'argent gouverne tout ; à la fin du roman, du haut du cimetière du Père-Lachaise, il lance à la ville : « À nous deux maintenant ! »",
                "Le parcours peut être une ascension : Georges Duroy, dans Bel-Ami de Maupassant (1885), gravit l'échelle sociale grâce au journalisme et aux femmes, sans scrupule. Il peut être une ascension suivie d'une chute : Julien Sorel s'élève jusqu'à approcher la noblesse avant d'être condamné à mort. Il peut être une désillusion, comme celui de Frédéric Moreau, ou une déchéance : Emma Bovary s'endette et se suicide, Gervaise, dans L'Assommoir de Zola (1877), sombre dans la misère et l'alcool.",
              ],
              box: { label: "À retenir", text: "Quatre grands parcours : l'apprentissage (Rastignac), l'ascension (Georges Duroy), l'ascension suivie d'une chute (Julien Sorel), la désillusion ou la déchéance (Frédéric Moreau, Emma Bovary, Gervaise). Le parcours révèle souvent la vision de la société propre au romancier." },
            },
            {
              heading: "Le schéma actantiel : les forces du récit",
              paragraphs: [
                "Le linguiste Algirdas Julien Greimas (Sémantique structurale, 1966) a proposé de décrire tout récit à l'aide de six rôles, appelés actants. Le sujet poursuit une quête ; l'objet est ce qu'il recherche ; le destinateur est ce qui le pousse à agir ; le destinataire est celui qui bénéficie de la quête ; l'adjuvant l'aide ; l'opposant lui fait obstacle.",
                "Un actant n'est pas forcément une personne : ce peut être un sentiment, une idée, un objet ou une institution. Pour Rastignac, par exemple, le sujet est Rastignac ; l'objet, la réussite dans le monde parisien ; le destinateur, son ambition et les sacrifices de sa famille ; le destinataire, lui-même et les siens ; les adjuvants, sa cousine Madame de Beauséant, qui lui enseigne les codes du monde, et Delphine de Nucingen ; l'opposant, son manque d'argent. Un même personnage peut changer de rôle : Vautrin, qui lui propose un chemin criminel, est un adjuvant dangereux.",
              ],
            },
          ],
          keyPoints: [
            "Le personnage est un « être de papier » construit par le nom, le portrait, les actions, les paroles, les pensées et le regard des autres.",
            "Au sens large, le héros est le personnage principal, admirable ou non.",
            "L'antihéros est ordinaire, passif ou en échec : Frédéric Moreau (L'Éducation sentimentale, 1869).",
            "Roman d'apprentissage : un jeune homme découvre la société et ses codes (Rastignac, Le Père Goriot, 1835).",
            "Parcours : ascension (Bel-Ami), ascension puis chute (Julien Sorel), désillusion ou déchéance (Emma Bovary, Gervaise).",
            "Schéma actantiel (Greimas) : sujet, objet, destinateur, destinataire, adjuvant, opposant.",
          ],
          example: {
            statement: "Voici un portrait écrit pour l'exercice : « Monsieur Granger avait soixante ans, un ventre rond serré dans un gilet de soie et de petits yeux gris qui ne regardaient jamais en face. Il parlait peu, comptait beaucoup, et les ouvriers de sa fabrique se taisaient sur son passage. On disait qu'il avait commencé avec rien. » Analysez les procédés de caractérisation et le jugement suggéré au lecteur.",
            solution: [
              "Portrait physique : l'âge (« soixante ans »), le ventre « rond » et le « gilet de soie » signalent l'aisance et un certain embourgeoisement.",
              "Lien entre physique et moral : les « petits yeux gris qui ne regardaient jamais en face » suggèrent la méfiance ou la dissimulation, à la manière de Balzac.",
              "Actions et paroles : le parallélisme « Il parlait peu, comptait beaucoup » résume un caractère avare et calculateur.",
              "Regard des autres : le silence des ouvriers traduit la crainte qu'il inspire ; la rumeur (« On disait qu'il avait commencé avec rien ») évoque une ascension sociale dont on ignore les moyens.",
              "Réponse : le portrait construit un patron riche, avare et inquiétant ; sans jugement explicite du narrateur, le lecteur est conduit à se méfier de lui.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque personnage, indiquez le roman, l'auteur et le type de parcours (apprentissage, ascension, ascension puis chute, désillusion, déchéance) : a) Georges Duroy ; b) Gervaise ; c) Julien Sorel ; d) Frédéric Moreau.",
              hint: "Reportez-vous aux exemples du cours et demandez-vous comment se termine l'histoire de chacun.",
              solution: [
                "a) Georges Duroy : Bel-Ami, Maupassant (1885). Ascension sociale sans scrupule, grâce au journalisme et aux femmes.",
                "b) Gervaise : L'Assommoir, Zola (1877). Déchéance dans la misère et l'alcool.",
                "c) Julien Sorel : Le Rouge et le Noir, Stendhal (1830). Ascension puis chute : il est condamné à mort.",
                "d) Frédéric Moreau : L'Éducation sentimentale, Flaubert (1869). Désillusion : il laisse passer l'amour et l'ambition.",
              ],
            },
            {
              level: 2,
              statement: "Voici le résumé d'un roman imaginé pour l'exercice : « Lise, fille de paysans, veut devenir médecin dans la France de 1900. Son institutrice la pousse à étudier et lui prête des livres ; son père refuse de payer ses études ; un vieux docteur l'engage comme aide et la recommande à l'université ; les préjugés contre les femmes lui ferment pourtant bien des portes. Elle rêve de soigner les plus pauvres de son village. » Établissez le schéma actantiel de ce récit.",
              hint: "Commencez par le sujet et l'objet de la quête, puis cherchez ce qui pousse Lise à agir, pour qui elle agit, qui l'aide et ce qui l'empêche.",
              solution: [
                "Sujet : Lise. Objet : devenir médecin.",
                "Destinateur : son désir d'apprendre et de soigner, encouragé par son institutrice.",
                "Destinataire : les pauvres de son village, et Lise elle-même.",
                "Adjuvants : l'institutrice (livres, encouragements) et le vieux docteur (emploi, recommandation).",
                "Opposants : le père, qui refuse de payer, et les préjugés contre les femmes, opposant abstrait.",
                "Remarque : l'institutrice joue deux rôles (destinateur et adjuvant), ce qui montre qu'un personnage peut occuper plusieurs fonctions.",
              ],
            },
            {
              level: 3,
              statement: "Vers la dissertation. Sujet : « Un personnage de roman doit-il être admirable pour intéresser le lecteur ? » Formulez une problématique, proposez un plan en deux parties avec deux arguments et des exemples précis pour chacune, puis rédigez le premier paragraphe de la deuxième partie.",
              hint: "Distinguez l'admiration d'autres émotions qu'un personnage peut susciter : la pitié, la fascination, l'ironie, la reconnaissance de soi.",
              solution: [
                "Problématique : l'intérêt que nous portons à un personnage naît-il de l'admiration, ou d'autres liens comme la fascination, la pitié ou la reconnaissance de nos propres faiblesses ?",
                "Partie 1, l'admiration suscite l'intérêt : a) le héros exceptionnel captive par son énergie et sa volonté (Julien Sorel, Rastignac défiant Paris) ; b) il offre un modèle ou un rêve d'identification, hérité de l'épopée.",
                "Partie 2, un personnage non admirable peut intéresser davantage : a) l'antihéros nous ressemble et nous fait réfléchir (Frédéric Moreau, Emma Bovary) ; b) le personnage immoral fascine et permet de comprendre une société (Georges Duroy dans Bel-Ami, la marquise de Merteuil).",
                "Paragraphe rédigé (2a) : « Un personnage médiocre peut retenir le lecteur parce qu'il lui tend un miroir. Frédéric Moreau, dans L'Éducation sentimentale, rêve d'un grand amour et d'une grande carrière, mais il hésite, renonce et laisse passer sa vie. Loin d'ennuyer, cet antihéros touche le lecteur, qui reconnaît en lui ses propres rêves inaccomplis. Flaubert fait ainsi de la médiocrité un objet de réflexion sur le temps et les illusions de la jeunesse. »",
                "Conclusion attendue : l'admiration n'est qu'une des sources de l'intérêt ; le roman moderne attache souvent le lecteur à des êtres faillibles, qui lui ressemblent ou le dérangent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque personnage au roman où il apparaît.",
            pairs: [
              { left: "Eugène de Rastignac", right: "Le Père Goriot, Balzac (1835)" },
              { left: "Julien Sorel", right: "Le Rouge et le Noir, Stendhal (1830)" },
              { left: "Emma Bovary", right: "Madame Bovary, Flaubert (1857)" },
              { left: "Frédéric Moreau", right: "L'Éducation sentimentale, Flaubert (1869)" },
              { left: "Georges Duroy", right: "Bel-Ami, Maupassant (1885)" },
              { left: "Gervaise", right: "L'Assommoir, Zola (1877)" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un antihéros ?",
              options: ["Le personnage qui s'oppose au héros et cherche à le faire échouer", "Un personnage secondaire comique", "Un personnage principal dépourvu des qualités héroïques", "Le narrateur d'un roman à la première personne"],
              answer: 2,
              why: "L'antihéros occupe la place du héros mais il est ordinaire, passif ou en échec. Celui qui s'oppose au héros est un opposant.",
            },
            {
              q: "Quel personnage lance « À nous deux maintenant ! » à la ville de Paris ?",
              options: ["Julien Sorel", "Georges Duroy", "Frédéric Moreau", "Rastignac"],
              answer: 3,
              why: "Rastignac prononce ce défi à la fin du Père Goriot de Balzac (1835), du haut du cimetière du Père-Lachaise.",
            },
            {
              q: "Dans le schéma actantiel, comment nomme-t-on ce qui aide le sujet dans sa quête ?",
              options: ["Le destinataire", "L'adjuvant", "Le destinateur", "L'objet"],
              answer: 1,
              why: "L'adjuvant aide le sujet ; l'opposant lui fait obstacle. Le destinateur pousse à agir, le destinataire bénéficie de la quête.",
            },
            {
              q: "Que raconte, en général, un roman d'apprentissage ?",
              options: ["La formation d'un jeune personnage qui découvre le monde", "La vie d'un saint", "Une enquête policière menée par un détective jusqu'à la découverte du coupable", "Un voyage dans un monde imaginaire"],
              answer: 0,
              why: "Le roman d'apprentissage suit l'éducation d'un jeune héros par l'expérience de la société et de ses désillusions.",
            },
            {
              q: "Pourquoi le nom de Candide est-il significatif ?",
              options: ["Il désigne une ville d'Allemagne", "Il rappelle la candeur, la naïveté du héros", "C'est le nom de l'éditeur qui publia l'œuvre de Voltaire"],
              answer: 1,
              why: "Le nom annonce le caractère du héros : sa candeur le rend crédule devant les leçons de Pangloss.",
            },
          ],
          trap: "Confondre antihéros et opposant (l'antihéros est le personnage principal, pas son adversaire), ou analyser un personnage comme une personne réelle en oubliant les procédés d'écriture qui le construisent.",
          method: "Pour étudier un personnage, construisez un tableau à trois colonnes : ce que dit le texte (citations courtes), le procédé (portrait, action, parole, regard d'autrui, désignation) et ce que cela révèle. Ajoutez une ligne pour son évolution entre le début et la fin du roman.",
        },
      ],
    },
    /* ==================================================================== */
    /* GRAMMAIRE : LES ACCORDS ET LE VERBE                                   */
    /* ==================================================================== */
    {
      id: 'langue-accords-verbe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'accords-groupe-nominal',
          title: 'Les accords dans le groupe nominal',
          minutes: 30,
          objectives: [
            "Identifier les constituants du groupe nominal : déterminant, nom noyau, expansions.",
            "Accorder en genre et en nombre les déterminants et les adjectifs, y compris avec plusieurs noms.",
            "Appliquer les règles d'accord des adjectifs de couleur et des adjectifs numéraux.",
            "Distinguer les emplois variables et invariables de tout, même, quelque et leur.",
          ],
          course: [
            {
              heading: "Le groupe nominal et la règle générale",
              paragraphs: [
                "Le groupe nominal s'organise autour d'un nom, appelé nom noyau, le plus souvent précédé d'un déterminant et parfois complété par des expansions : un adjectif épithète (une rue étroite), un complément du nom (une rue de Paris) ou une proposition subordonnée relative (une rue qui monte). Le nom noyau impose son genre et son nombre au déterminant et aux adjectifs qui s'y rapportent, qu'ils soient épithètes, apposés (Épuisées, les coureuses s'arrêtèrent) ou attributs (Ces rues sont étroites).",
                "Quand un adjectif se rapporte à plusieurs noms, il se met au pluriel : un frère et un cousin bavards. Si les noms sont de genres différents, l'adjectif se met au masculin pluriel : une veste et un pantalon noirs. Pour que la phrase sonne bien, on place de préférence le nom masculin le plus près de l'adjectif. Quand des noms sont reliés par ou, l'accord dépend du sens : un homme ou une femme âgée (seule la femme est âgée), mais un homme ou une femme âgés si l'adjectif concerne les deux.",
                "Après un complément du nom, c'est encore le sens qui décide : un pull de laine bleu (le pull est bleu) ou un pull de laine bleue (la laine est bleue). Pour trouver le nom auquel se rapporte l'adjectif, demandez-vous qu'est-ce qui est bleu, âgé, étroit.",
              ],
              box: { label: "Règle", text: "Le déterminant et l'adjectif s'accordent en genre et en nombre avec le nom auquel ils se rapportent. Avec plusieurs noms, l'adjectif se met au pluriel ; si les noms sont de genres différents, au masculin pluriel : une jupe et un manteau neufs." },
            },
            {
              heading: "Les adjectifs de couleur",
              paragraphs: [
                "Les adjectifs de couleur simples s'accordent normalement : des robes vertes, des yeux noirs, des cheveux châtains. En revanche, les noms employés pour désigner une couleur (fruits, fleurs, pierres, objets) restent invariables : des chaussures marron, des rubans orange, des yeux noisette, des vestes kaki, des robes crème. On sous-entend « de la couleur de » : des rubans (de la couleur de l')orange.",
                "Quelques noms de couleur sont devenus de véritables adjectifs et s'accordent : rose, mauve, fauve, pourpre, écarlate, incarnat. On écrit donc des joues roses, des fleurs mauves, des manteaux pourpres. Enfin, les adjectifs de couleur composés, formés de deux mots, restent invariables : des chemises bleu clair, des robes vert pomme, des yeux bleu-vert, des chaussettes bleu marine.",
              ],
              box: { label: "Règle", text: "Adjectif de couleur simple : accord (des robes vertes). Nom employé comme couleur : invariable (des yeux marron, des rubans orange), sauf rose, mauve, fauve, pourpre, écarlate, incarnat. Couleur composée : invariable (des robes bleu clair)." },
            },
            {
              heading: "Les numéraux, demi et nu",
              paragraphs: [
                "Les adjectifs numéraux cardinaux sont invariables : les quatre saisons, deux mille euros (mille ne prend jamais de s). Deux exceptions : vingt et cent prennent un s quand ils sont multipliés et qu'ils terminent le nombre : quatre-vingts ans, deux cents pages ; mais quatre-vingt-trois ans, deux cent dix pages. Employés à la place d'un ordinal, ils restent invariables : la page quatre-vingt, l'an deux cent. Million et milliard sont des noms et prennent la marque du pluriel : trois millions d'habitants. Les ordinaux, eux, s'accordent : les premières pages.",
                "Les rectifications orthographiques de 1990 permettent de relier par des traits d'union tous les éléments d'un nombre complexe (deux-cent-trois), sans changer les règles d'accord de vingt et de cent. Demi, placé devant le nom et relié par un trait d'union, est invariable : une demi-heure. Placé après le nom, il s'accorde en genre seulement : deux heures et demie, un kilo et demi. De même, nu est invariable devant le nom (nu-pieds, nu-tête), mais s'accorde après (pieds nus).",
              ],
              box: { label: "Repère", text: "Quatre-vingts mais quatre-vingt-deux ; deux cents mais deux cent un ; deux mille (jamais de s) ; trois millions (nom). Une demi-heure, mais une heure et demie. Nu-pieds, mais pieds nus." },
            },
            {
              heading: "Tout, même, quelque, leur",
              paragraphs: [
                "Tout est variable quand il est déterminant ou pronom : tous les jours, toutes les filles, ils sont tous venus. Employé comme adverbe, au sens de « tout à fait, entièrement », il est invariable : ils sont tout contents, elles sont tout étonnées. Exception à retenir : devant un adjectif féminin commençant par une consonne ou un h aspiré, l'adverbe tout s'accorde pour des raisons de prononciation : elle est toute petite, elles sont toutes honteuses.",
                "Même s'accorde quand il est adjectif, c'est-à-dire quand il signifie « identique » ou qu'il renforce un pronom : les mêmes erreurs, eux-mêmes, elles-mêmes. Il est invariable quand il est adverbe, au sens de « aussi, y compris » : même les meilleurs se trompent. Quelque s'accorde quand il est déterminant (quelques amis) et reste invariable quand il est adverbe au sens d'« environ » : quelque deux cents personnes.",
                "Leur placé devant un nom est un déterminant possessif et s'accorde en nombre : leur maison, leurs enfants. Placé devant un verbe, c'est un pronom personnel, pluriel de lui, et il est toujours invariable : je leur parle, je leur ai donné leurs cahiers. Pour vérifier, remplacez par un singulier : je lui parle (pronom invariable), son cahier (déterminant).",
              ],
              box: { label: "À retenir", text: "Tout adverbe (entièrement) est invariable, sauf devant un adjectif féminin commençant par une consonne ou un h aspiré : tout étonnées, toutes petites. Même adverbe (y compris) et quelque adverbe (environ) sont invariables. Leur devant un verbe est un pronom invariable." },
            },
          ],
          keyPoints: [
            "Le nom noyau impose son genre et son nombre au déterminant et aux adjectifs, épithètes, apposés ou attributs.",
            "Plusieurs noms de genres différents : adjectif au masculin pluriel (une veste et un pantalon noirs).",
            "Couleurs : vertes, mais marron, orange (noms invariables) ; roses, mauves (exceptions) ; bleu clair (composé invariable).",
            "Vingt et cent prennent un s s'ils sont multipliés et terminent le nombre ; mille est toujours invariable.",
            "Demi et nu sont invariables devant le nom, variables après : une demi-heure, une heure et demie.",
            "Tout adverbe est invariable sauf devant un féminin à consonne ; leur devant un verbe est invariable.",
          ],
          example: {
            statement: "Corrigez les éventuelles erreurs d'accord de cette phrase et justifiez chaque choix : « Elle portait une veste et un pantalon noir, des chaussures marrons et deux cent cinquante perles roses. »",
            solution: [
              "« noir » se rapporte à deux noms, veste (féminin) et pantalon (masculin) : l'adjectif se met au masculin pluriel. Il faut écrire « noirs ».",
              "« marrons » est fautif : marron est un nom (le fruit) employé pour désigner une couleur, donc invariable. Il faut écrire « des chaussures marron ».",
              "« deux cent cinquante » est correct : cent est multiplié par deux, mais il est suivi d'un autre nombre, il ne prend donc pas de s.",
              "« roses » est correct : rose fait partie des noms de couleur devenus adjectifs, qui s'accordent.",
              "Phrase corrigée : « Elle portait une veste et un pantalon noirs, des chaussures marron et deux cent cinquante perles roses. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Accordez les mots entre parenthèses : a) une robe et un chapeau (blanc) ; b) des yeux (noisette) ; c) des joues (rose) ; d) des chemises (bleu clair) ; e) les (premier) pages du roman ; f) une (demi) heure ; g) trois heures et (demi).",
              hint: "Demandez-vous à chaque fois s'il s'agit d'un vrai adjectif, d'un nom employé comme couleur, d'une couleur composée, ou de demi placé avant ou après le nom.",
              solution: [
                "a) une robe et un chapeau blancs : deux noms de genres différents, masculin pluriel.",
                "b) des yeux noisette : nom employé comme couleur, invariable.",
                "c) des joues roses : rose est une exception, il s'accorde.",
                "d) des chemises bleu clair : couleur composée, invariable.",
                "e) les premières pages : l'ordinal s'accorde avec pages, féminin pluriel.",
                "f) une demi-heure : demi placé devant le nom, invariable et suivi d'un trait d'union.",
                "g) trois heures et demie : demi placé après le nom s'accorde en genre (heure est féminin) mais reste au singulier.",
              ],
            },
            {
              level: 2,
              statement: "1) Écrivez en lettres : 80 ans ; 280 euros ; 300 pages ; 2 000 kilomètres ; 91 élèves ; la page 200. 2) Complétez en accordant si nécessaire : a) Elles sont (tout) heureuses. b) Elles sont (tout) surprises. c) (Même) les plus prudents se sont trompés. d) Ils ont refait les (même) erreurs. e) Je (leur) ai rendu (leur) copies. f) Il y avait (quelque) trois cents spectateurs.",
              hint: "Pour les nombres, vérifiez si vingt et cent sont multipliés et terminent le nombre. Pour tout, regardez la première lettre de l'adjectif féminin qui suit.",
              solution: [
                "1) quatre-vingts ans (vingt multiplié et final) ; deux cent quatre-vingts euros (cent suivi d'un nombre, vingt final) ; trois cents pages ; deux mille kilomètres (mille invariable) ; quatre-vingt-onze élèves (vingt suivi d'un nombre) ; la page deux cent (valeur d'ordinal, invariable).",
                "a) Elles sont tout heureuses : adverbe devant un adjectif féminin commençant par un h muet, invariable.",
                "b) Elles sont toutes surprises : adverbe devant un adjectif féminin commençant par une consonne, il s'accorde.",
                "c) Même les plus prudents se sont trompés : adverbe au sens de « y compris », invariable.",
                "d) Ils ont refait les mêmes erreurs : adjectif au sens d'« identiques », il s'accorde.",
                "e) Je leur ai rendu leurs copies : le premier leur, devant le verbe, est un pronom invariable ; le second, devant le nom pluriel copies, est un déterminant qui s'accorde.",
                "f) Il y avait quelque trois cents spectateurs : quelque signifie « environ », adverbe invariable ; trois cents prend un s.",
              ],
            },
            {
              level: 3,
              statement: "Réécriture. Réécrivez le passage suivant (écrit pour l'exercice) en remplaçant « Le jeune homme » par « Les jeunes filles », et faites toutes les modifications nécessaires : « Le jeune homme, tout étonné, entra dans le salon. Grand et mince, vêtu de gris foncé, il tenait des gants orange à la main. Il paraissait lui-même surpris de sa propre audace : même ses amis les plus proches ne l'avaient jamais vu si élégant. » Justifiez ensuite trois de vos choix.",
              hint: "Repérez tous les mots qui renvoient au jeune homme (adjectifs, participes, pronoms, possessifs) et vérifiez ceux qui ne changent pas : tout devant une voyelle, les couleurs.",
              solution: [
                "Réécriture : « Les jeunes filles, tout étonnées, entrèrent dans le salon. Grandes et minces, vêtues de gris foncé, elles tenaient des gants orange à la main. Elles paraissaient elles-mêmes surprises de leur propre audace : même leurs amis les plus proches ne les avaient jamais vues si élégantes. »",
                "Justification 1 : « tout étonnées » : tout est adverbe (entièrement) devant un adjectif féminin commençant par une voyelle, il reste invariable ; étonnées s'accorde au féminin pluriel.",
                "Justification 2 : « elles-mêmes » : même renforce un pronom, il est adjectif et s'accorde ; en revanche, « même leurs amis » est l'adverbe (y compris), invariable.",
                "Justification 3 : « les avaient jamais vues » : participe passé employé avec avoir, accordé avec le COD les, mis pour les jeunes filles et placé avant le verbe.",
                "Mots inchangés : « gris foncé » (couleur composée) et « orange » (nom employé comme couleur) restent invariables ; « leur propre audace » reste au singulier, l'audace étant commune.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos réflexes d'accord.",
            statements: [
              { text: "On écrit « des chaussures marron », sans s.", true: true, why: "Marron est un nom employé comme couleur : il reste invariable." },
              { text: "On écrit « des joues roses », avec un s.", true: true, why: "Rose fait partie des noms de couleur devenus adjectifs, qui s'accordent." },
              { text: "Dans « des robes bleues claires », les deux mots s'accordent.", true: false, why: "Une couleur composée reste invariable : des robes bleu clair." },
              { text: "On écrit « quatre-vingts euros » mais « quatre-vingt-cinq euros ».", true: true, why: "Vingt prend un s quand il est multiplié et termine le nombre." },
              { text: "On écrit « deux milles kilomètres ».", true: false, why: "Mille, adjectif numéral, est toujours invariable : deux mille kilomètres." },
              { text: "Dans « elles sont tout heureuses », tout reste invariable.", true: true, why: "Adverbe devant un adjectif féminin commençant par un h muet : pas d'accord." },
              { text: "Dans « je leur ai parlé », leur prend un s si l'on parle à plusieurs personnes.", true: false, why: "Leur devant un verbe est un pronom personnel, toujours invariable." },
              { text: "On écrit « une demi-heure » mais « deux heures et demie ».", true: true, why: "Demi est invariable devant le nom et s'accorde en genre après." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la bonne orthographe ?",
              options: ["Une jupe et un manteau neufs", "Une jupe et un manteau neuves", "Une jupe et un manteau neuf", "Une jupe et un manteau neuve"],
              answer: 0,
              why: "L'adjectif qui se rapporte à des noms de genres différents se met au masculin pluriel.",
            },
            {
              q: "Laquelle de ces expressions est correctement orthographiée ?",
              options: ["Des rubans oranges", "Des yeux bleus clairs", "Des fleurs mauves", "Des vestes kakis"],
              answer: 2,
              why: "Mauve fait partie des exceptions qui s'accordent. Orange et kaki, noms employés comme couleurs, et bleu clair, couleur composée, restent invariables.",
            },
            {
              q: "Quelle écriture est correcte ?",
              options: ["deux milles euros", "quatre-vingts-trois ans", "trois cents pages", "deux cents dix pages"],
              answer: 2,
              why: "Cent, multiplié et placé en fin de nombre, prend un s. Mille est invariable, et vingt ou cent suivis d'un autre nombre ne prennent pas de s.",
            },
            {
              q: "Dans « elles sont toutes petites », pourquoi tout s'accorde-t-il ?",
              options: ["Parce qu'il est déterminant", "Parce que petites commence par une consonne", "Parce que le sujet elles est au féminin pluriel et l'entraîne", "Parce qu'il signifie « chacune »"],
              answer: 1,
              why: "L'adverbe tout s'accorde devant un adjectif féminin commençant par une consonne ou un h aspiré.",
            },
            {
              q: "Dans « Je leur ai prêté leurs livres », quels sont les deux emplois de leur ?",
              options: ["Deux déterminants possessifs", "Deux pronoms personnels", "Un déterminant, puis un pronom", "Un pronom, puis un déterminant"],
              answer: 3,
              why: "Le premier leur, devant le verbe, est un pronom invariable ; le second, devant le nom livres, est un déterminant qui s'accorde.",
            },
          ],
          trap: "Mettre un s à tous les mots de couleur (des chaussures « marrons », des robes « bleues claires ») ou à mille, et accorder le pronom leur placé devant un verbe (« je leurs ai dit »).",
          method: "Avant d'accorder, demandez-vous quelle est la nature du mot : vrai adjectif ou nom de couleur, adverbe ou déterminant, pronom ou déterminant. Un test simple aide souvent : mettez au singulier (leur devient lui ou son) ou remplacez tout par « entièrement ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'accord-verbe-participe',
          title: "L'accord du verbe avec son sujet et du participe passé",
          minutes: 35,
          objectives: [
            "Identifier le sujet du verbe, même inversé, éloigné ou repris par un pronom relatif.",
            "Accorder le verbe avec plusieurs sujets ou avec un sujet collectif.",
            "Accorder le participe passé employé avec être, avec avoir et dans les verbes pronominaux.",
            "Justifier un accord par une analyse grammaticale précise, à l'écrit comme à l'oral.",
          ],
          course: [
            {
              heading: "Trouver le vrai sujet",
              paragraphs: [
                "Le verbe s'accorde en personne et en nombre avec son sujet. La difficulté est de trouver ce sujet, qui n'est pas toujours le mot placé juste avant le verbe. Le sujet peut être inversé : Au fond de la vallée coulent deux rivières. Il peut être éloigné du verbe par un complément : Le bruit des voitures empêche les riverains de dormir (c'est le bruit qui empêche). Un pronom complément peut faire écran : Ces lettres, je les relis souvent (le sujet est je, pas les).",
                "Pour identifier le sujet, utilisez l'encadrement par « c'est... qui » : C'est le bruit qui empêche. Quand le sujet est le pronom relatif qui, le verbe s'accorde avec l'antécédent de ce pronom : C'est moi qui ai raison ; C'est vous qui partirez ; Les élèves qui sont arrivés en retard attendent dehors.",
              ],
              box: { label: "Règle", text: "Le verbe s'accorde en personne et en nombre avec son sujet. Pour le trouver, encadrez-le par « c'est... qui ». Avec le pronom relatif qui, le verbe s'accorde avec l'antécédent : C'est moi qui suis responsable." },
            },
            {
              heading: "Plusieurs sujets, sujets collectifs",
              paragraphs: [
                "Plusieurs sujets coordonnés ou juxtaposés entraînent le pluriel : Le vent et la pluie redoublent. Si ces sujets sont de personnes différentes, la première personne l'emporte sur la deuxième, et la deuxième sur la troisième : Ma sœur et moi partirons (nous) ; Ton frère et toi viendrez (vous). Avec ou et ni, on met le pluriel si l'action concerne tous les sujets, le singulier si l'un exclut l'autre : Paul ou Marc sera élu délégué (un seul le sera).",
                "Un nom collectif au singulier (la foule, le groupe) entraîne le singulier : La foule applaudit. Suivi d'un complément au pluriel, il permet les deux accords selon ce que l'on veut souligner : Une foule de curieux envahit la place (l'ensemble) ou envahissent la place (les individus). Après les adverbes de quantité (beaucoup de, peu de, trop de, combien de) et après la plupart, le verbe s'accorde avec le complément ou se met au pluriel : Beaucoup d'élèves sont venus ; La plupart des invités sont partis. Enfin, plus d'un entraîne le singulier (Plus d'un candidat a hésité) et moins de deux le pluriel.",
              ],
              box: { label: "Repère", text: "Moi et lui : nous. Toi et lui : vous. La plupart des élèves sont venus (pluriel). Plus d'un élève est venu (singulier). Une foule de curieux envahit ou envahissent la place (les deux accords sont admis)." },
            },
            {
              heading: "Le participe passé avec être et avec avoir",
              paragraphs: [
                "Employé avec l'auxiliaire être (verbes non pronominaux, voix passive), le participe passé s'accorde en genre et en nombre avec le sujet : Elles sont arrivées hier ; Les lettres ont été envoyées. Dans ce dernier exemple, été reste toujours invariable et envoyées s'accorde avec le sujet lettres.",
                "Employé avec l'auxiliaire avoir, le participe passé ne s'accorde jamais avec le sujet. Il s'accorde avec le complément d'objet direct (COD) seulement si celui-ci est placé avant le verbe : J'ai écrit une lettre (COD après, pas d'accord) ; La lettre que j'ai écrite (COD que, mis pour lettre, placé avant) ; Ces lettres, je les ai relues ; Quelles villes avez-vous visitées ? Combien de pages avez-vous lues ?",
                "Le participe reste invariable s'il n'y a pas de COD (Elles ont dormi), si le COD est placé après, si le complément placé avant est le pronom en (Des fautes, j'en ai fait) ou si le verbe est impersonnel (Les chaleurs qu'il a fait cet été ; Les efforts qu'il a fallu).",
              ],
              box: { label: "Règle", text: "Avec être : accord avec le sujet. Avec avoir : jamais d'accord avec le sujet ; accord avec le COD s'il est placé avant le verbe (que, la, les, l', quels, combien de). Invariable avec en et avec les verbes impersonnels." },
            },
            {
              heading: "Les cas délicats : pronominaux et participe suivi d'un infinitif",
              paragraphs: [
                "Les verbes essentiellement pronominaux, qui n'existent qu'à la forme pronominale (s'évanouir, s'enfuir, se souvenir, se moquer, s'écrier), s'accordent avec le sujet : Elles se sont évanouies ; Ils se sont souvenus. Pour les autres verbes pronominaux, remplacez mentalement être par avoir et appliquez la règle du COD : Elles se sont lavées (elles ont lavé qui ? se, mis pour elles, placé avant : accord) ; Elles se sont lavé les mains (le COD les mains est placé après : pas d'accord) ; Les mains qu'elles se sont lavées (COD que, placé avant).",
                "Quand le pronom se est complément d'objet indirect, il n'y a pas d'accord : Ils se sont parlé (parler à quelqu'un), Elles se sont téléphoné, Ils se sont souri, Elles se sont succédé. Attention à se rendre compte : Elles se sont rendu compte de leur erreur, car le COD est compte, placé après le participe.",
                "Le participe passé fait suivi d'un infinitif est toujours invariable : La maison qu'il a fait construire ; Elle s'est fait couper les cheveux. Les rectifications de 1990 rendent aussi laissé invariable dans ce cas (Elle s'est laissé convaincre). Avec les verbes de perception (vu, entendu, senti), on accorde si le COD placé avant fait l'action exprimée par l'infinitif : La chanteuse que j'ai entendue chanter (c'est elle qui chante), mais La chanson que j'ai entendu chanter (la chanson ne chante pas, elle est chantée).",
              ],
              box: { label: "À retenir", text: "Verbe essentiellement pronominal : accord avec le sujet. Autres pronominaux : remplacer être par avoir et chercher le COD placé avant. Se COI (se parler, se téléphoner, se sourire) : invariable. Fait suivi d'un infinitif : invariable." },
            },
          ],
          keyPoints: [
            "Le verbe s'accorde avec son sujet : cherchez-le avec « c'est... qui », même s'il est inversé ou éloigné.",
            "Avec qui, le verbe s'accorde avec l'antécédent : c'est moi qui ai, c'est vous qui avez.",
            "Plusieurs sujets : pluriel ; moi et lui donnent nous, toi et lui donnent vous ; plus d'un : singulier.",
            "Participe avec être : accord avec le sujet. Avec avoir : accord avec le COD seulement s'il est placé avant.",
            "Invariable avec en, avec un verbe impersonnel, et pour fait suivi d'un infinitif.",
            "Pronominaux : elles se sont lavées, mais elles se sont lavé les mains, ils se sont parlé, elles se sont rendu compte.",
          ],
          example: {
            statement: "Justifiez l'accord de chaque participe passé : « Les photos que Léa a prises pendant le voyage, elle les a montrées à ses parents ; puis elle s'est souvenue qu'elle en avait oublié quelques-unes. »",
            solution: [
              "« prises » : participe employé avec avoir. Le COD est que, mis pour les photos (féminin pluriel), placé avant le verbe : accord au féminin pluriel.",
              "« montrées » : participe employé avec avoir. Le COD est les, mis pour les photos, placé avant : accord au féminin pluriel. « à ses parents » est un COI, qui ne compte pas pour l'accord.",
              "« souvenue » : se souvenir est un verbe essentiellement pronominal : le participe s'accorde avec le sujet elle (Léa), au féminin singulier.",
              "« oublié » : participe employé avec avoir ; le pronom en placé avant n'entraîne pas d'accord, et « quelques-unes », placé après, ne compte pas : participe invariable.",
              "Réponse : prises et montrées s'accordent avec un COD placé avant, souvenue avec le sujet, oublié reste invariable.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe entre parenthèses au présent de l'indicatif : a) Au fond du jardin (pousser) des rosiers. b) C'est moi qui (avoir) les clés. c) Ma sœur et moi (partir) demain. d) La plupart des spectateurs (applaudir). e) Plus d'un candidat (hésiter). f) Le bruit des voitures (gêner) les riverains. g) Ces fleurs, je les (cueillir) le matin.",
              hint: "Pour chaque phrase, encadrez le sujet par « c'est... qui » ; méfiez-vous des sujets inversés et des pronoms placés juste avant le verbe.",
              solution: [
                "a) poussent : le sujet inversé est des rosiers (troisième personne du pluriel).",
                "b) ai : qui reprend moi, le verbe se met à la première personne du singulier.",
                "c) partons : ma sœur et moi équivaut à nous.",
                "d) applaudissent : après la plupart, le verbe se met au pluriel.",
                "e) hésite : plus d'un entraîne le singulier.",
                "f) gêne : le noyau du sujet est le bruit, au singulier ; des voitures est un complément du nom.",
                "g) cueille : le sujet est je ; les est un pronom COD qui fait écran.",
              ],
            },
            {
              level: 2,
              statement: "Accordez les participes passés et justifiez : a) Les lettres que j'ai (écrire). b) Elles sont (partir) tôt. c) Des pommes, j'en ai (manger). d) Elles se sont (laver) les mains. e) Les mains qu'elles se sont (laver). f) Ils se sont (parler) longtemps. g) Elles se sont (rendre) compte de leur erreur. h) La maison qu'il a (faire) construire. i) Les orages qu'il y a (avoir) cet été.",
              hint: "Identifiez d'abord l'auxiliaire ; pour les pronominaux, remplacez être par avoir et cherchez le COD : où est-il placé ?",
              solution: [
                "a) écrites : avoir, COD que (les lettres) placé avant, féminin pluriel.",
                "b) parties : être, accord avec le sujet elles.",
                "c) mangé : le pronom en ne provoque pas d'accord.",
                "d) lavé : le COD les mains est placé après le participe ; se est COI.",
                "e) lavées : le COD que, mis pour les mains, est placé avant.",
                "f) parlé : on parle à quelqu'un ; se est COI, pas d'accord.",
                "g) rendu : le COD est compte, placé après le participe.",
                "h) fait : fait suivi d'un infinitif est invariable.",
                "i) eu : la tournure il y a est impersonnelle, le participe est invariable.",
              ],
            },
            {
              level: 3,
              statement: "Vers la question de grammaire de l'oral du bac. Analysez les accords des participes passés dans la phrase suivante (écrite pour l'exercice) : « Les deux sœurs, qu'on avait crues perdues, se sont souvenues du chemin que leur grand-père leur avait montré, et elles se sont aidées l'une l'autre. »",
              hint: "Traitez chaque participe dans l'ordre : auxiliaire, type de verbe (pronominal ou non), COD et place du COD. Attention aux deux leur.",
              solution: [
                "« crues » : participe de croire employé avec avoir. Le COD est le pronom relatif qu', mis pour les deux sœurs, placé avant : accord au féminin pluriel. « perdues », attribut de ce COD, s'accorde aussi.",
                "« souvenues » : se souvenir est essentiellement pronominal : le participe s'accorde avec le sujet les deux sœurs, au féminin pluriel.",
                "« montré » : participe employé avec avoir. Son COD est que, mis pour le chemin (masculin singulier), placé avant : accord au masculin singulier, donc aucune marque visible. Le second leur est un pronom COI (montrer à quelqu'un), invariable ; le premier leur est un déterminant possessif singulier (un seul grand-père).",
                "« aidées » : aider quelqu'un ; en remplaçant être par avoir, elles ont aidé qui ? se, mis pour elles, COD placé avant : accord au féminin pluriel.",
                "Conclusion orale : la phrase illustre trois règles : l'accord avec un COD antéposé (crues, montré), l'accord des essentiellement pronominaux avec le sujet (souvenues), et celui des pronominaux réciproques dont le pronom est COD (aidées).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour accorder un participe passé employé avec avoir.",
            items: [
              "Repérer le participe passé et vérifier que l'auxiliaire est avoir",
              "Poser la question « qui ? » ou « quoi ? » après le verbe pour trouver le COD",
              "Identifier le nom que représente ce COD s'il s'agit d'un pronom (que, la, les)",
              "Vérifier si ce COD est placé avant le participe",
              "Accorder en genre et en nombre avec le COD placé avant, sinon laisser invariable",
            ],
          },
          quiz: [
            {
              q: "Quelle phrase est correctement accordée ?",
              options: ["Elles se sont lavées les mains.", "Elles se sont lavés les mains.", "Elles se sont lavé les mains."],
              answer: 2,
              why: "Le COD les mains est placé après le participe ; se est COI : le participe reste invariable.",
            },
            {
              q: "Complétez : « C'est vous qui ___ raison. »",
              options: ["avez", "a", "ont", "aient"],
              answer: 0,
              why: "Le pronom relatif qui reprend vous : le verbe se met à la deuxième personne du pluriel.",
            },
            {
              q: "Pourquoi écrit-on « Elles se sont rendu compte » sans accord ?",
              options: ["Parce que le sujet est au féminin pluriel", "Parce que son COD, compte, est placé après", "Parce que le verbe est essentiellement pronominal", "Parce que se rendre est un verbe impersonnel"],
              answer: 1,
              why: "Le COD de rendre est compte, placé après le participe ; se est COI : pas d'accord.",
            },
            {
              q: "Complétez : « Plus d'un spectateur ___ quitté la salle avant la fin. »",
              options: ["ont", "avaient", "auront", "a"],
              answer: 3,
              why: "Plus d'un est suivi d'un nom singulier et entraîne le singulier, malgré l'idée de pluralité.",
            },
            {
              q: "Dans « Les fleurs que j'ai cueillies », avec quoi s'accorde le participe ?",
              options: ["Avec le sujet je", "Avec l'auxiliaire avoir", "Avec le COD que, mis pour les fleurs", "Avec rien, il devrait rester invariable"],
              answer: 2,
              why: "Avec avoir, le participe s'accorde avec le COD placé avant : que, qui reprend les fleurs.",
            },
          ],
          trap: "Accorder le participe passé employé avec avoir avec le sujet (« elles ont mangées »), ou accorder systématiquement les verbes pronominaux avec le sujet, alors que « elles se sont parlé » et « elles se sont rendu compte » restent invariables.",
          method: "Pour chaque participe, suivez toujours le même chemin à voix basse : auxiliaire ? verbe pronominal ? COD ? place du COD ? En cas de doute sur un pronominal, remplacez être par avoir : « elles se sont lavé les mains » devient « elles ont lavé les mains à elles ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'temps-modes-valeurs',
          title: 'Le verbe : temps, modes et valeurs',
          minutes: 35,
          objectives: [
            "Distinguer les modes personnels et non personnels, les temps simples et les temps composés.",
            "Identifier la valeur d'un temps de l'indicatif dans son contexte : présent, imparfait, passé simple, passé composé, futur, conditionnel.",
            "Analyser l'opposition entre premier plan et arrière-plan dans un récit au passé.",
            "Justifier l'emploi du subjonctif et de l'impératif.",
          ],
          course: [
            {
              heading: "Modes, temps et aspect : les repères",
              paragraphs: [
                "Le mode indique la manière dont le locuteur envisage l'action. Les modes personnels se conjuguent avec des personnes : l'indicatif présente l'action comme réelle et la situe dans le temps ; le subjonctif la présente comme envisagée, souhaitée ou douteuse ; l'impératif exprime un ordre, un conseil ou une prière. Les formes non personnelles ne se conjuguent pas avec des personnes : l'infinitif (chanter), le participe (chantant, chanté) et le gérondif (en chantant).",
                "Le conditionnel était autrefois présenté comme un mode. La terminologie grammaticale aujourd'hui en usage dans l'enseignement le range parmi les temps de l'indicatif, parce qu'il situe souvent l'action dans le temps, comme un futur vu depuis le passé ; vous le trouverez encore classé comme mode dans certains ouvrages. Chaque temps simple (je chante) a un temps composé correspondant, formé avec un auxiliaire (j'ai chanté), qui exprime l'accompli ou l'antériorité.",
                "L'aspect indique comment l'action est envisagée dans son déroulement, indépendamment de sa date. Le passé simple présente l'action dans sa globalité, avec un début et une fin (aspect global, ou limité) ; l'imparfait la saisit en cours de déroulement, sans en marquer les limites (aspect sécant, ou non limité). Les temps simples expriment le non-accompli, les temps composés l'accompli.",
              ],
              box: { label: "Repère", text: "Modes personnels : indicatif (dont le conditionnel, selon la terminologie actuelle), subjonctif, impératif. Formes non personnelles : infinitif, participe, gérondif. Aspect : global (passé simple) ou sécant (imparfait) ; accompli (temps composés) ou non accompli (temps simples)." },
            },
            {
              heading: "Les valeurs du présent et du futur",
              paragraphs: [
                "Le présent n'exprime pas seulement le moment où l'on parle. Le présent d'énonciation décrit une action contemporaine de la parole (En ce moment, je lis). Le présent d'habitude, ou itératif, exprime une action répétée (Chaque matin, elle court). Le présent de vérité générale énonce une vérité valable en tout temps (L'eau bout à cent degrés), comme dans les proverbes et les morales. Le présent de narration, ou historique, raconte des faits passés pour les rendre plus vivants (En 1789, le peuple prend la Bastille). Enfin, le présent peut exprimer un futur proche (Je pars demain) ou un passé récent (Il sort d'ici).",
                "Le futur simple situe l'action dans l'avenir. Il peut aussi exprimer un ordre (Vous rangerez vos affaires avant de sortir), une atténuation polie (Je vous demanderai de patienter) ou, dans un récit historique, un événement postérieur aux faits racontés (Il ne reviendra jamais dans sa ville natale). Le futur antérieur marque une action accomplie avant une autre action future (Quand vous aurez fini, vous sortirez) ou une supposition sur le passé (Il aura oublié notre rendez-vous).",
              ],
              box: { label: "À retenir", text: "Présent : d'énonciation, d'habitude, de vérité générale, de narration, à valeur de futur proche ou de passé récent. Futur : avenir, ordre, politesse. Futur antérieur : antériorité dans le futur ou supposition." },
            },
            {
              heading: "Raconter au passé : imparfait, passé simple, passé composé",
              paragraphs: [
                "Dans un récit au passé, le passé simple et l'imparfait se partagent le travail. Le passé simple exprime les actions de premier plan, qui font avancer l'histoire : actions ponctuelles, successives, souvent introduites par soudain ou alors. L'imparfait exprime l'arrière-plan : le décor, les descriptions, les portraits, les actions en cours (La pluie tombait quand il sortit), les actions répétées (Chaque dimanche, il allait au marché). L'imparfait a aussi d'autres valeurs : atténuation polie (Je voulais vous demander un service), hypothèse après si (Si j'étais riche).",
                "Le passé composé exprime une action passée considérée comme accomplie au moment où l'on parle, et dont les conséquences touchent encore le présent (J'ai perdu mes clés : je ne peux pas rentrer). C'est le temps du récit à l'oral. Certains romanciers en font le temps du récit écrit, comme Camus dans L'Étranger (1942), où il donne à la narration de Meursault un ton de constat détaché. Le plus-que-parfait marque une action antérieure à un repère passé (Il avait déjà dîné quand elle arriva), le passé antérieur une action immédiatement antérieure à une action au passé simple (Dès qu'il eut fini, il sortit).",
                "On distingue ainsi deux systèmes de temps. Le système du discours est ancré dans la situation d'énonciation : présent, passé composé, futur. Le système du récit est coupé de cette situation : passé simple, imparfait, plus-que-parfait, et conditionnel pour exprimer un futur vu du passé.",
              ],
              box: { label: "Règle", text: "Premier plan, actions qui font avancer le récit : passé simple. Arrière-plan, description, action en cours, habitude : imparfait. Action passée liée au présent : passé composé. Antériorité par rapport à un repère passé : plus-que-parfait." },
            },
            {
              heading: "Le conditionnel, le subjonctif et l'impératif",
              paragraphs: [
                "Le conditionnel a deux grandes familles de valeurs. Une valeur temporelle : il exprime un futur vu depuis le passé (Il promit qu'il reviendrait). Des valeurs modales : l'hypothèse, avec si suivi de l'imparfait pour le potentiel ou l'irréel du présent (Si j'avais le temps, je viendrais), avec si suivi du plus-que-parfait pour l'irréel du passé (Si j'avais su, je serais venu) ; l'information non confirmée, fréquente dans la presse (Le ministre aurait démissionné) ; l'atténuation polie (Je voudrais un renseignement) ; l'imaginaire, dans les jeux d'enfants (On serait des explorateurs).",
                "Le subjonctif présente l'action comme envisagée, sans affirmer sa réalité. On l'emploie après les verbes de volonté, de souhait, de crainte, de sentiment ou de doute (Je veux qu'il vienne ; Je crains qu'il ne soit en retard ; Je doute qu'il réussisse), après certaines conjonctions (pour que, afin que, bien que, avant que, à condition que) et dans des phrases indépendantes exprimant un ordre ou un souhait (Qu'il entre ! Vive la liberté !). Après que, en revanche, est suivi de l'indicatif, car l'action est présentée comme réalisée. Dans l'usage courant, on emploie le subjonctif présent même après un verbe au passé ; la langue littéraire utilise encore le subjonctif imparfait (qu'il vînt).",
                "L'impératif, qui ne possède que trois personnes et pas de sujet exprimé, sert à donner un ordre (Sortez !), un conseil (Relisez votre copie), une prière (Aidez-moi) ou une interdiction (Ne courez pas).",
              ],
              box: { label: "Repère", text: "Conditionnel : futur dans le passé, hypothèse (si + imparfait, si + plus-que-parfait), information non confirmée, politesse, imaginaire. Subjonctif : volonté, sentiment, doute, but, concession, ordre ou souhait indépendant. Après que + indicatif." },
            },
          ],
          keyPoints: [
            "Modes personnels : indicatif, subjonctif, impératif ; formes non personnelles : infinitif, participe, gérondif.",
            "Présent : énonciation, habitude, vérité générale, narration, futur proche ou passé récent.",
            "Passé simple : premier plan, aspect global ; imparfait : arrière-plan, description, habitude, aspect sécant.",
            "Passé composé : action accomplie liée au présent, temps du récit à l'oral et de L'Étranger de Camus.",
            "Conditionnel : futur dans le passé, hypothèse, information non confirmée, politesse.",
            "Subjonctif : action envisagée (volonté, sentiment, doute, but, concession) ; après que est suivi de l'indicatif.",
          ],
          example: {
            statement: "Identifiez le temps et la valeur de chaque verbe conjugué dans ce passage écrit pour l'exercice : « Ce matin-là, la ville dormait encore. Pierre ouvrit la fenêtre : la neige tombait. Chaque hiver, il guettait ce moment. La neige transforme tout, pensa-t-il. »",
            solution: [
              "« dormait » : imparfait, valeur descriptive d'arrière-plan ; il installe le décor.",
              "« ouvrit » : passé simple, action de premier plan, ponctuelle, qui fait avancer le récit.",
              "« tombait » : imparfait, action en cours au moment où Pierre ouvre la fenêtre (aspect sécant).",
              "« guettait » : imparfait d'habitude, souligné par l'indicateur « Chaque hiver ».",
              "« transforme » : présent de vérité générale, dans la pensée rapportée de Pierre ; « pensa » : passé simple, action ponctuelle de premier plan.",
              "Réponse : l'imparfait construit l'arrière-plan (décor, action en cours, habitude), le passé simple les actions de premier plan, et le présent exprime une vérité générale aux yeux du personnage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la valeur du présent dans chaque phrase : a) La Terre tourne autour du Soleil. b) Je pars demain pour Lyon. c) Le 14 juillet 1789, le peuple de Paris prend la Bastille. d) Chaque matin, elle court une heure. e) En ce moment, je lis un roman de Zola. f) Il sort à l'instant du bureau.",
              hint: "Cherchez les indicateurs de temps (demain, chaque matin, en ce moment, à l'instant, une date) et demandez-vous si la phrase est vraie en tout temps.",
              solution: [
                "a) Présent de vérité générale : un fait valable en tout temps.",
                "b) Présent à valeur de futur proche, indiqué par « demain ».",
                "c) Présent de narration (ou historique) : un fait passé raconté au présent pour le rendre vivant.",
                "d) Présent d'habitude (itératif), signalé par « Chaque matin ».",
                "e) Présent d'énonciation : l'action se déroule au moment où l'on parle.",
                "f) Présent à valeur de passé récent, signalé par « à l'instant ».",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez les verbes à l'imparfait ou au passé simple et justifiez chaque choix (texte écrit pour l'exercice) : « Le soleil (se coucher) quand le train (entrer) en gare. Sur le quai, des voyageurs (attendre), immobiles. Soudain, une femme (crier), (lâcher) sa valise et (courir) vers la locomotive. »",
              hint: "Distinguez le décor et les actions en cours (arrière-plan) des actions brèves et successives qui font avancer l'histoire (premier plan).",
              solution: [
                "« se couchait » : imparfait, action en cours au moment où survient l'arrivée du train (arrière-plan).",
                "« entra » : passé simple, action ponctuelle de premier plan.",
                "« attendaient » : imparfait descriptif, qui peint la scène (arrière-plan).",
                "« cria », « lâcha », « courut » : passés simples, actions brèves et successives de premier plan, introduites par « Soudain ».",
                "Texte : « Le soleil se couchait quand le train entra en gare. Sur le quai, des voyageurs attendaient, immobiles. Soudain, une femme cria, lâcha sa valise et courut vers la locomotive. »",
              ],
            },
            {
              level: 3,
              statement: "Vers la question de grammaire de l'oral du bac. Identifiez le temps, le mode et la valeur des verbes conjugués de ce passage écrit pour l'exercice : « Si j'avais su, je serais resté. Mais il fallait que je parte : mon père voulait que je trouve du travail. On disait d'ailleurs que l'usine embaucherait au printemps. »",
              hint: "Repérez la structure hypothétique en si, les verbes qui imposent le subjonctif et le verbe introducteur au passé qui transforme un futur en conditionnel.",
              solution: [
                "« avais su » : plus-que-parfait de l'indicatif, après si : il exprime une condition non réalisée dans le passé.",
                "« serais resté » : conditionnel passé, irréel du passé : le narrateur n'est pas resté.",
                "« fallait » et « voulait » : imparfaits de l'indicatif, valeur d'arrière-plan et de durée (une contrainte et une volonté qui s'étendent dans le temps).",
                "« parte » et « trouve » : subjonctifs présents, imposés par « il fallait que » (obligation) et « voulait que » (volonté) ; l'action est envisagée, non affirmée. La langue littéraire aurait pu employer le subjonctif imparfait (que je partisse, que je trouvasse).",
                "« disait » : imparfait d'habitude ou de durée (une rumeur répétée) ; « embaucherait » : conditionnel présent à valeur de futur dans le passé, dans un discours rapporté introduit par un verbe au passé.",
                "Conclusion : le passage combine l'irréel du passé (regret), le subjonctif de la contrainte et le conditionnel temporel, ce qui traduit une vie décidée par d'autres.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase à la valeur du verbe.",
            pairs: [
              { left: "L'eau bout à cent degrés.", right: "Présent de vérité générale" },
              { left: "Je voudrais un renseignement.", right: "Conditionnel d'atténuation polie" },
              { left: "Le ministre aurait démissionné.", right: "Conditionnel d'information non confirmée" },
              { left: "Il promit qu'il reviendrait.", right: "Conditionnel à valeur de futur dans le passé" },
              { left: "Chaque soir, il lisait près du feu.", right: "Imparfait d'habitude" },
              { left: "Il aura oublié notre rendez-vous.", right: "Futur antérieur de supposition" },
            ],
          },
          quiz: [
            {
              q: "Dans « Les chiens aboient, la caravane passe », quelle est la valeur du présent ?",
              options: ["Présent d'énonciation", "Présent de narration", "Présent de vérité générale", "Présent à valeur de futur proche"],
              answer: 2,
              why: "Ce proverbe énonce une vérité présentée comme valable en tout temps.",
            },
            {
              q: "Dans un récit au passé, quel temps exprime le plus souvent les actions de premier plan ?",
              options: ["Le passé simple", "L'imparfait", "Le plus-que-parfait"],
              answer: 0,
              why: "Le passé simple présente les actions dans leur globalité et fait avancer l'intrigue ; l'imparfait construit l'arrière-plan.",
            },
            {
              q: "Dans « Selon nos informations, le joueur serait blessé », quelle est la valeur du conditionnel ?",
              options: ["Futur vu depuis un moment du passé", "Information non confirmée", "Irréel du passé", "Ordre atténué"],
              answer: 1,
              why: "Le conditionnel signale une information que le locuteur rapporte sans la garantir, comme souvent dans la presse.",
            },
            {
              q: "Quelle phrase est correcte dans la langue soignée ?",
              options: ["Bien qu'il est fatigué, il continue.", "Après qu'il soit parti, elle pleura.", "Je veux qu'il vient demain.", "Avant qu'il parte, elle lui parla."],
              answer: 3,
              why: "Avant que impose le subjonctif (parte). Bien que et vouloir que demandent aussi le subjonctif, mais après que se construit avec l'indicatif (après qu'il fut parti).",
            },
            {
              q: "Dans « Si j'avais su, je serais venu », le conditionnel passé exprime :",
              options: ["un potentiel", "un futur dans le passé", "une politesse", "un irréel du passé"],
              answer: 3,
              why: "La condition, au plus-que-parfait, ne s'est pas réalisée dans le passé : c'est l'irréel du passé.",
            },
          ],
          trap: "Croire que le présent exprime toujours le moment où l'on parle, ou confondre l'imparfait et le passé simple en se fiant à la durée réelle de l'action : un événement long peut être au passé simple (Il régna trente ans) s'il est vu dans sa globalité.",
          method: "Pour donner la valeur d'un temps, ne vous contentez jamais de le nommer : appuyez-vous sur un indice du contexte (indicateur de temps, conjonction, verbe introducteur, structure en si) et reformulez l'effet produit en une phrase.",
        },
      ],
    },
    /* ==================================================================== */
    /* LE RÉCIT AUX XXe ET XXIe SIÈCLES : RENOUVELLEMENTS                    */
    /* ==================================================================== */
    {
      id: 'recit-xxe-xxie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'roman-xxe-ruptures',
          title: 'Les remises en cause du roman au XXe siècle',
          minutes: 35,
          objectives: [
            "Situer les grandes remises en cause du roman au XXe siècle, de Proust au Nouveau Roman.",
            "Identifier les éléments du roman traditionnel contestés : personnage, intrigue, chronologie, narrateur omniscient.",
            "Caractériser les principales expériences : monologue intérieur, mise en abyme, écriture de l'oralité, contrainte oulipienne.",
            "Relier ces innovations aux formes du récit contemporain : autofiction, récit de soi, récit inspiré du réel.",
          ],
          course: [
            {
              heading: "Le modèle du XIXe siècle mis en question",
              paragraphs: [
                "Au début du XXe siècle, le roman hérité de Balzac et de Zola, avec son narrateur omniscient, son intrigue chronologique et ses personnages au caractère bien dessiné, paraît à certains écrivains usé et artificiel. Dans le Manifeste du surréalisme (1924), André Breton se moque des descriptions interminables et rapporte que Paul Valéry refusait d'écrire une phrase aussi convenue que « La marquise sortit à cinq heures ».",
                "André Gide présente Les Faux-Monnayeurs (1925) comme son premier roman. Il y multiplie les intrigues et les points de vue, refuse de tout expliquer et place au centre du livre un romancier, Édouard, qui projette d'écrire un roman intitulé lui aussi Les Faux-Monnayeurs. Ce procédé, par lequel une œuvre se reflète en elle-même, s'appelle la mise en abyme, expression empruntée au vocabulaire des blasons. Gide publie en outre le Journal des Faux-Monnayeurs (1926), où il raconte la fabrication de son livre : le roman devient une réflexion sur le roman.",
              ],
              box: { label: "Définition", text: "La mise en abyme est le procédé par lequel une œuvre contient, en réduction, une image d'elle-même : un roman dans le roman, une pièce dans la pièce. Elle invite le lecteur à réfléchir à la création de l'œuvre qu'il lit." },
            },
            {
              heading: "Explorer la conscience et faire entendre une voix",
              paragraphs: [
                "Marcel Proust publie de 1913 à 1927 les sept volumes d'À la recherche du temps perdu, dont le premier est Du côté de chez Swann (1913) et le dernier, posthume, Le Temps retrouvé (1927). Le narrateur, qui dit « je », explore sa mémoire : une sensation, comme le goût d'une madeleine trempée dans du thé, fait resurgir tout un passé oublié. C'est la mémoire involontaire. L'ordre du récit suit les détours du souvenir plutôt que la chronologie, et de longues phrases épousent les mouvements de la pensée.",
                "D'autres écrivains cherchent à saisir la pensée à l'état brut. Le monologue intérieur, utilisé par Édouard Dujardin dès 1887, puis par l'Irlandais James Joyce dans Ulysse (1922), fait entendre le flux des pensées d'un personnage sans narrateur intermédiaire, avec ses associations d'idées et ses phrases inachevées.",
                "Louis-Ferdinand Céline, dans Voyage au bout de la nuit (1932), fait entrer la langue parlée et l'argot dans la narration : Bardamu raconte la guerre, les colonies, l'Amérique et la misère des banlieues avec une violence verbale inédite. Albert Camus, dans L'Étranger (1942), choisit au contraire une écriture blanche : phrases courtes, passé composé, absence de commentaire. Meursault, qui commence par annoncer la mort de sa mère sans émotion apparente, déconcerte le lecteur habitué à comprendre les personnages de l'intérieur.",
              ],
            },
            {
              heading: "L'ère du soupçon : le Nouveau Roman",
              paragraphs: [
                "Dans les années 1950, un groupe d'écrivains souvent publiés par les Éditions de Minuit, que la critique réunit sous le nom de Nouveau Roman, remet en cause toutes les conventions. Dans L'Ère du soupçon (1956), Nathalie Sarraute explique que le lecteur ne croit plus au personnage traditionnel, avec son nom, son portrait et son caractère : elle préfère saisir des mouvements intérieurs à peine conscients, qu'elle appelle des tropismes.",
                "Alain Robbe-Grillet, dans Pour un nouveau roman (1963), qualifie de « notions périmées » le personnage, l'histoire, l'engagement et la séparation entre forme et contenu. Dans La Jalousie (1957), un mari jaloux n'est jamais nommé et ne dit jamais « je » : le lecteur devine sa présence par des descriptions minutieuses, presque géométriques, de la maison et de sa femme. Michel Butor, dans La Modification (1957), raconte à la deuxième personne du pluriel (« vous ») le trajet en train d'un homme entre Paris et Rome. Claude Simon, autre figure du mouvement, reçoit le prix Nobel de littérature en 1985.",
              ],
              box: { label: "À retenir", text: "Le Nouveau Roman (années 1950 et 1960 : Sarraute, Robbe-Grillet, Butor, Simon) conteste le personnage, l'intrigue, la chronologie et le narrateur omniscient. Le lecteur doit reconstruire lui-même le sens." },
            },
            {
              heading: "Jeux de contraintes et retour du récit",
              paragraphs: [
                "En 1960, Raymond Queneau et François Le Lionnais fondent l'Oulipo (Ouvroir de littérature potentielle), qui explore les possibilités créatrices de la contrainte. Queneau avait déjà raconté une même anecdote banale de quatre-vingt-dix-neuf façons dans Exercices de style (1947). Georges Perec écrit La Disparition (1969), un roman entier sans la lettre e, puis La Vie mode d'emploi (1978), construit selon des règles mathématiques. La contrainte n'est pas un simple jeu : dans La Disparition, l'absence du e fait écho, de manière détournée, aux disparus de l'histoire de Perec, dont les parents sont morts pendant la Seconde Guerre mondiale.",
                "À partir des années 1980, le récit, le personnage et l'histoire reviennent, mais transformés par ces expériences. En 1977, Serge Doubrovsky invente le mot autofiction pour désigner son livre Fils, qui raconte des faits réels de sa vie avec les moyens du roman. Annie Ernaux, prix Nobel de littérature en 2022, mêle récit de soi et histoire collective (La Place, 1983 ; Les Années, 2008). Emmanuel Carrère, dans L'Adversaire (2000), enquête sur un fait divers réel. Le récit contemporain brouille ainsi la frontière entre fiction et réalité.",
              ],
              box: { label: "Repère", text: "1913 : Du côté de chez Swann. 1925 : Les Faux-Monnayeurs. 1932 : Voyage au bout de la nuit. 1942 : L'Étranger. 1956 : L'Ère du soupçon. 1957 : La Jalousie, La Modification. 1960 : fondation de l'Oulipo. 1969 : La Disparition. 1977 : Fils, naissance du mot autofiction." },
            },
          ],
          keyPoints: [
            "Le XXe siècle conteste le roman balzacien : narrateur omniscient, intrigue linéaire, personnage au caractère bien dessiné.",
            "Gide, Les Faux-Monnayeurs (1925) : mise en abyme et réflexion sur le roman.",
            "Proust explore la mémoire involontaire ; le monologue intérieur saisit le flux de la pensée.",
            "Céline fait entrer la langue parlée dans le récit (1932) ; Camus choisit une écriture blanche (1942).",
            "Nouveau Roman : Sarraute (L'Ère du soupçon, 1956), Robbe-Grillet, Butor ; le personnage et l'histoire sont mis en doute.",
            "Oulipo (1960) : la contrainte comme moteur créatif (Perec, La Disparition, 1969).",
            "Depuis les années 1980 : retour du récit, autofiction (Doubrovsky, 1977), récit de soi et récits inspirés du réel.",
          ],
          example: {
            statement: "Comparez ces deux débuts de roman écrits pour l'exercice et montrez ce que le second remet en cause. A : « Monsieur Delorme, notaire à Tours depuis vingt ans, était un homme de cinquante ans, gros, rusé et avare, que ses clients craignaient autant qu'ils le respectaient. » B : « La table est rectangulaire. Sur la nappe, à gauche, un verre. L'ombre du pilier coupe la terrasse en deux parties inégales. Quelqu'un a déplacé la chaise. »",
            solution: [
              "Texte A : un début de type balzacien. Le personnage est nommé, situé socialement (notaire à Tours), daté (vingt ans de métier, cinquante ans), et son caractère est donné d'emblée (« rusé et avare »). Le narrateur, omniscient, juge et explique.",
              "Texte B : aucun personnage n'est nommé ; il n'y a qu'un « Quelqu'un » indéterminé. Le récit décrit des objets avec une précision presque géométrique (« rectangulaire », « à gauche », « deux parties inégales »).",
              "Absence d'intrigue explicite : le seul événement suggéré (la chaise déplacée) est minime et énigmatique. Le présent de l'indicatif remplace le passé simple du récit traditionnel.",
              "Absence de narrateur qui commente : aucun jugement, aucune pensée. Le lecteur doit chercher lui-même le sens, peut-être une présence ou une tension cachée.",
              "Réponse : le texte B, à la manière du Nouveau Roman, conteste le personnage, l'intrigue et le narrateur omniscient, et fait de la description l'essentiel du récit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque œuvre à son auteur et à l'innovation qu'elle illustre. Œuvres : Les Faux-Monnayeurs ; Voyage au bout de la nuit ; La Modification ; La Disparition ; Fils. Auteurs : Perec, Butor, Gide, Doubrovsky, Céline. Innovations : la langue parlée dans la narration ; un récit à la deuxième personne ; la mise en abyme ; l'autofiction ; le lipogramme (texte sans une lettre).",
              hint: "Appuyez-vous sur les dates : 1925, 1932, 1957, 1969, 1977, et sur ce que chaque livre refuse ou invente.",
              solution: [
                "Les Faux-Monnayeurs : Gide (1925), la mise en abyme.",
                "Voyage au bout de la nuit : Céline (1932), la langue parlée dans la narration.",
                "La Modification : Butor (1957), un récit à la deuxième personne (« vous »).",
                "La Disparition : Perec (1969), le lipogramme, sans la lettre e.",
                "Fils : Doubrovsky (1977), l'autofiction.",
              ],
            },
            {
              level: 2,
              statement: "Voici un passage écrit pour l'exercice : « Vous descendez du train à Lyon. Vous ne savez plus pourquoi vous êtes venu. Le quai, la pendule, un kiosque fermé. Il faudrait appeler, dire que vous êtes arrivé, mais à qui ? Vous restez là. » Relevez quatre écarts par rapport au roman traditionnel du XIXe siècle et nommez, pour chacun, l'auteur ou le mouvement du XXe siècle qu'il rappelle.",
              hint: "Observez la personne grammaticale, le temps, la construction des phrases, et ce que l'on sait (ou ne sait pas) du personnage.",
              solution: [
                "Le récit à la deuxième personne (« Vous descendez ») : il rappelle La Modification de Michel Butor (1957).",
                "Le présent de l'indicatif au lieu du passé simple : l'action est saisie au moment où elle se vit, sans le recul d'un narrateur.",
                "La phrase nominale (« Le quai, la pendule, un kiosque fermé ») : une perception brute d'objets, qui rappelle les descriptions du Nouveau Roman.",
                "Un personnage sans nom, sans passé ni motif connu (« Vous ne savez plus pourquoi ») : le soupçon sur le personnage dont parle Nathalie Sarraute.",
                "On peut ajouter l'absence d'intrigue : le passage se termine sur l'immobilité (« Vous restez là »), sans événement.",
              ],
            },
            {
              level: 3,
              statement: "Vers la dissertation. Sujet : « Le roman du XXe siècle a-t-il renoncé au personnage ? » Formulez une problématique, proposez un plan en deux ou trois parties avec des exemples précis, puis rédigez le paragraphe qui ouvre la partie consacrée à la remise en cause du personnage.",
              hint: "Distinguez la contestation du personnage traditionnel (nom, portrait, caractère) et la disparition pure et simple du personnage, qui n'a presque jamais lieu.",
              solution: [
                "Problématique : le roman du XXe siècle a-t-il vraiment abandonné le personnage, ou a-t-il seulement rejeté le personnage traditionnel pour en inventer de nouvelles formes ?",
                "Partie 1, une contestation réelle : a) le soupçon sur le personnage (Sarraute, L'Ère du soupçon, 1956) ; b) des figures sans nom ni portrait (le mari de La Jalousie, le « vous » de La Modification).",
                "Partie 2, une transformation plutôt qu'un renoncement : a) un personnage saisi de l'intérieur, par la mémoire ou la conscience (le narrateur de Proust) ; b) des personnages déroutants mais inoubliables (Bardamu, Meursault).",
                "Partie 3, un retour du personnage renouvelé : autofiction et récit de soi (Doubrovsky, Ernaux), où le personnage devient l'auteur lui-même.",
                "Paragraphe rédigé (1a) : « Le XXe siècle a d'abord fait du personnage traditionnel un objet de méfiance. Dans L'Ère du soupçon (1956), Nathalie Sarraute affirme que le lecteur ne croit plus à ces êtres pourvus d'un nom, d'un portrait et d'un caractère, construits sur le modèle balzacien. Elle s'attache plutôt aux tropismes, mouvements intérieurs à peine perceptibles, qui échappent à toute étiquette. Robbe-Grillet va plus loin dans La Jalousie (1957), où le personnage central n'est ni nommé ni décrit et n'existe que par son regard. Le personnage n'est donc plus une évidence : il devient une question posée au lecteur. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces œuvres dans l'ordre chronologique de leur publication.",
            items: [
              "Du côté de chez Swann, Proust (1913)",
              "Les Faux-Monnayeurs, Gide (1925)",
              "Voyage au bout de la nuit, Céline (1932)",
              "L'Étranger, Camus (1942)",
              "L'Ère du soupçon, Sarraute (1956)",
              "La Disparition, Perec (1969)",
              "Fils, Doubrovsky (1977)",
            ],
          },
          quiz: [
            {
              q: "Quel romancier fait de la mémoire involontaire le ressort de son œuvre ?",
              options: ["Céline", "Gide", "Proust", "Robbe-Grillet"],
              answer: 2,
              why: "Dans À la recherche du temps perdu, une sensation comme le goût de la madeleine fait resurgir le passé du narrateur.",
            },
            {
              q: "Qu'est-ce qu'une mise en abyme ?",
              options: ["Une œuvre qui contient une image d'elle-même", "Une chute brutale qui précipite le héros dans le vide à la fin du récit", "Un retour en arrière dans la chronologie", "Une description très longue d'un paysage"],
              answer: 0,
              why: "Dans Les Faux-Monnayeurs, le romancier Édouard écrit un roman du même titre : l'œuvre se reflète en elle-même.",
            },
            {
              q: "Quel essai de Nathalie Sarraute (1956) exprime la méfiance envers le personnage traditionnel ?",
              options: ["Pour un nouveau roman", "Le Degré zéro de l'écriture", "L'Ère du soupçon"],
              answer: 2,
              why: "Dans L'Ère du soupçon, Sarraute explique que le lecteur ne croit plus au personnage construit sur le modèle balzacien.",
            },
            {
              q: "Quelle contrainte Georges Perec s'impose-t-il dans La Disparition (1969) ?",
              options: ["Écrire uniquement en alexandrins", "Écrire sans aucun verbe conjugué", "Raconter la même histoire de 99 façons", "Écrire sans la lettre e"],
              answer: 3,
              why: "La Disparition est un lipogramme : le roman entier est écrit sans la lettre e. Les 99 façons de raconter sont celles des Exercices de style de Queneau.",
            },
            {
              q: "Quel mot Serge Doubrovsky invente-t-il en 1977 pour présenter son livre Fils ?",
              options: ["Autobiographie", "Autofiction", "Biographie romancée", "Roman à clés"],
              answer: 1,
              why: "L'autofiction raconte des faits réels de la vie de l'auteur avec les moyens et les libertés du roman.",
            },
          ],
          trap: "Croire que le XXe siècle a « tué » le roman ou le personnage : il conteste surtout le modèle balzacien (narrateur omniscient, intrigue linéaire, caractère fixé) et invente d'autres manières de raconter. Autre confusion fréquente : attribuer Exercices de style à Perec, alors qu'il est de Queneau.",
          method: "Pour retenir ce siècle foisonnant, associez chaque œuvre à un seul mot clé (Proust : mémoire ; Gide : mise en abyme ; Céline : oralité ; Camus : écriture blanche ; Sarraute : soupçon ; Perec : contrainte ; Doubrovsky : autofiction) et à sa date. Ces couples fournissent des exemples prêts pour la dissertation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ordre-rythme-recit',
          title: "L'ordre et le rythme du récit : ellipse, retour en arrière, sommaire",
          minutes: 30,
          objectives: [
            "Distinguer le temps de l'histoire et le temps du récit.",
            "Identifier l'ordre du récit : récit chronologique, retour en arrière (analepse), anticipation (prolepse), début in medias res.",
            "Analyser le rythme du récit : scène, sommaire, ellipse, pause.",
            "Interpréter les effets de ces choix dans un paragraphe de commentaire.",
          ],
          course: [
            {
              heading: "Temps de l'histoire, temps du récit",
              paragraphs: [
                "Tout récit fait se rencontrer deux temps. Le temps de l'histoire est celui des événements racontés, dans leur ordre chronologique et leur durée réelle : une journée, dix ans, une vie entière. Le temps du récit est celui du texte qui les raconte, mesuré en lignes ou en pages, et l'ordre dans lequel il les présente. Ces deux temps coïncident rarement : un roman peut raconter vingt ans en trois cents pages, ou une seule journée en plusieurs centaines de pages, comme Ulysse de James Joyce (1922), qui suit ses personnages dans Dublin pendant la journée du 16 juin 1904.",
                "Le théoricien Gérard Genette, dans Figures III (1972), a proposé d'étudier les rapports entre ces deux temps selon trois questions : l'ordre (dans quel ordre les événements sont-ils racontés ?), la vitesse (combien de pages pour combien de temps ?) et la fréquence (combien de fois un événement est-il raconté ?). Ces outils permettent de décrire précisément la construction d'un récit et d'en interpréter les effets.",
              ],
              box: { label: "Définition", text: "Temps de l'histoire : la chronologie et la durée des événements racontés. Temps du récit : l'ordre dans lequel le texte les présente et l'espace (lignes, pages) qu'il leur consacre. L'écart entre les deux crée l'ordre et le rythme du récit." },
            },
            {
              heading: "L'ordre du récit : analepse, prolepse, in medias res",
              paragraphs: [
                "Le récit peut suivre l'ordre chronologique, mais il peut aussi le bouleverser. L'analepse, ou retour en arrière, raconte un événement antérieur au moment où l'on se trouve dans l'histoire. Elle explique souvent le passé d'un personnage : dans Madame Bovary, peu après le récit du mariage, Flaubert revient sur l'éducation d'Emma au couvent et sur les lectures qui ont nourri ses rêves. Elle est souvent signalée par le plus-que-parfait et par des indicateurs comme « dix ans plus tôt ».",
                "La prolepse, ou anticipation, annonce un événement qui se produira plus tard (Il ne savait pas encore qu'il ne reverrait jamais sa mère). Elle crée un effet de fatalité et déplace l'intérêt du lecteur : on ne se demande plus ce qui va arriver, mais comment cela arrivera. Dans Chronique d'une mort annoncée de Gabriel García Márquez (1981), la mort du personnage principal est annoncée dès la première phrase.",
                "Commencer in medias res (expression latine signifiant « au milieu des choses ») consiste à plonger le lecteur au cœur de l'action, sans présentation préalable : les circonstances seront expliquées plus tard, souvent par une analepse. Ce procédé, recommandé par le poète latin Horace pour l'épopée, crée un effet de surprise et une attente immédiate.",
              ],
              box: { label: "Repère", text: "Analepse : retour en arrière (souvent au plus-que-parfait). Prolepse : anticipation d'un événement futur (futur, conditionnel, « il ne savait pas encore »). In medias res : début au cœur de l'action." },
            },
            {
              heading: "Le rythme : scène, sommaire, ellipse, pause",
              paragraphs: [
                "La vitesse du récit compare la durée de l'histoire à la longueur du texte. Dans la scène, le temps du récit est à peu près égal au temps de l'histoire : c'est le cas des dialogues au discours direct, que le lecteur suit au rythme où ils se déroulent. Dans le sommaire, le récit résume en quelques lignes une longue période : le temps du récit est plus court que le temps de l'histoire (Pendant trois ans, il travailla sans relâche).",
                "L'ellipse passe sous silence une période de l'histoire : le temps du récit est nul. Elle peut être signalée (Deux ans plus tard) ou implicite, marquée seulement par un blanc typographique ou un changement de chapitre. À l'inverse, la pause interrompt l'histoire pour une description ou un commentaire du narrateur : le temps de l'histoire est arrêté pendant que le récit continue.",
                "Flaubert est un maître de ces variations. Dans L'Éducation sentimentale (1869), après de longues scènes, deux mots, « Il voyagea », précédés d'un blanc, ouvrent un sommaire de quelques lignes qui résume des années de la vie du héros. Marcel Proust admirait cette accélération soudaine, qui fait sentir au lecteur la fuite du temps.",
              ],
              box: { label: "Règle", text: "Scène : temps du récit ≈ temps de l'histoire (dialogue). Sommaire : temps du récit < temps de l'histoire (résumé). Ellipse : temps du récit = 0 (période passée sous silence). Pause : temps de l'histoire = 0 (description, commentaire)." },
            },
            {
              heading: "La fréquence et l'interprétation des effets",
              paragraphs: [
                "La fréquence indique combien de fois un événement est raconté. Le récit singulatif raconte une fois ce qui s'est passé une fois : c'est le cas le plus courant. Le récit itératif raconte une seule fois ce qui s'est produit plusieurs fois, souvent à l'imparfait d'habitude (Chaque dimanche, ils allaient au bord de la rivière) : la célèbre première phrase de Proust, « Longtemps, je me suis couché de bonne heure », en est un exemple. Le récit répétitif raconte plusieurs fois le même événement, par exemple selon le point de vue de plusieurs personnages.",
                "Analyser l'ordre et le rythme n'a de sens que si l'on en tire une interprétation. Une scène met en valeur un moment décisif ; un sommaire accélère et montre l'usure du temps ou la monotonie d'une vie ; une ellipse peut cacher un événement pour créer un mystère ou suggérer ce qui est trop douloureux pour être dit ; une pause installe une atmosphère ou fait attendre ; une analepse explique ou éclaire ; une prolepse installe un sentiment de destin.",
              ],
            },
          ],
          keyPoints: [
            "Temps de l'histoire : la chronologie et la durée des faits ; temps du récit : leur ordre et leur place dans le texte.",
            "Analepse : retour en arrière ; prolepse : anticipation ; in medias res : début au cœur de l'action.",
            "Scène (dialogue, temps égaux), sommaire (résumé), ellipse (période omise), pause (description, commentaire).",
            "Fréquence : singulatif, itératif (une fois pour plusieurs fois), répétitif (plusieurs fois pour une fois).",
            "Toujours interpréter : la scène met en valeur, le sommaire accélère, l'ellipse cache ou suggère, la prolepse installe une fatalité.",
          ],
          example: {
            statement: "Voici un passage écrit pour l'exercice : « Le 3 mai, Hélène reçut la lettre. Elle la lut debout dans l'entrée, deux fois. Vingt ans plus tôt, dans cette même maison, son père lui avait interdit de revoir Marc. Elle plia la lettre. Les semaines suivantes, elle travailla, dormit mal, ne parla à personne. Un matin de juin, elle prit le train. » Analysez l'ordre et le rythme de ce passage.",
            solution: [
              "Début du récit, au premier plan : « Le 3 mai, Hélène reçut la lettre. Elle la lut debout dans l'entrée, deux fois. » Le récit suit l'action de près, presque au rythme de la scène.",
              "Analepse : « Vingt ans plus tôt [...] son père lui avait interdit de revoir Marc. » L'indicateur temporel et le plus-que-parfait signalent un retour en arrière, qui éclaire l'émotion d'Hélène.",
              "Retour au présent de l'histoire : « Elle plia la lettre. »",
              "Sommaire : « Les semaines suivantes, elle travailla, dormit mal, ne parla à personne. » Plusieurs semaines tiennent en une phrase ; l'énumération de verbes traduit une attente monotone.",
              "Ellipse : on passe directement à « Un matin de juin », sans raconter ce qui a décidé Hélène. Ce silence crée du mystère.",
              "Interprétation : le passage alterne précision et accélération ; l'analepse donne le poids du passé, le sommaire et l'ellipse font sentir une attente silencieuse qui aboutit à une décision soudaine.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez le procédé (scène, sommaire, ellipse, pause, analepse, prolepse) illustré par chacune de ces phrases écrites pour l'exercice : a) « Trois ans plus tard, il revint au village. » b) « Pendant tout l'hiver, il coupa du bois, répara les clôtures et soigna les bêtes. » c) « « Vous venez ? » demanda-t-elle. « Non », répondit-il. » d) « La pièce était vaste ; trois hautes fenêtres donnaient sur un parc où l'herbe n'était plus coupée. » e) « Il ne savait pas encore qu'il ne reverrait jamais sa mère. » f) « Enfant, il avait vécu dans cette ferme avec ses grands-parents. »",
              hint: "Comparez la durée des événements et la longueur du texte, puis cherchez les indices de temps : plus tard, plus tôt, plus-que-parfait, ne savait pas encore.",
              solution: [
                "a) Ellipse : trois années sont passées sous silence, signalées par « Trois ans plus tard ».",
                "b) Sommaire : tout un hiver est résumé en une phrase.",
                "c) Scène : le dialogue au discours direct se lit à peu près au rythme où il se déroule.",
                "d) Pause : la description arrête le cours de l'histoire.",
                "e) Prolepse : un événement futur est annoncé.",
                "f) Analepse : le plus-que-parfait et « Enfant » marquent un retour en arrière.",
              ],
            },
            {
              level: 2,
              statement: "Un roman imaginé pour l'exercice (données fictives) compte 200 pages : les pages 1 à 150 racontent une seule journée, celle d'un mariage ; les pages 151 à 190 racontent les dix années qui suivent ; les pages 191 à 200 racontent une heure, celle d'une rencontre fortuite entre les anciens mariés devenus étrangers l'un à l'autre. 1) Calculez la part du texte consacrée à chaque période. 2) Caractérisez le rythme de chaque partie. 3) Proposez une interprétation de cette construction.",
              hint: "Divisez le nombre de pages de chaque partie par 200, puis comparez la durée de l'histoire et la place qu'elle occupe dans le texte.",
              solution: [
                "1) Journée du mariage : 150 pages sur 200, soit 150 ÷ 200 = 0,75, donc 75 % du texte. Dix années : 40 pages (151 à 190), soit 40 ÷ 200 = 0,2, donc 20 %. Dernière heure : 10 pages (191 à 200), soit 10 ÷ 200 = 0,05, donc 5 %. Vérification : 75 + 20 + 5 = 100.",
                "2) Première partie : rythme très lent, dominé par les scènes et les pauses (une journée en 150 pages). Deuxième partie : sommaire rapide (dix ans en 40 pages, soit quatre pages par an), sans doute avec des ellipses. Troisième partie : retour à la scène (une heure en 10 pages).",
                "3) Interprétation : le roman s'attarde sur le jour où tout semblait possible et expédie les années de vie commune, comme si elles s'étaient écoulées sans que les personnages les vivent vraiment. La scène finale, à nouveau lente, met en valeur le contraste entre l'espérance du début et la distance de la fin.",
                "Résultat : 75 %, 20 % et 5 % du texte ; un rythme lent, puis rapide, puis lent, qui fait sentir la fuite du temps et l'usure d'un couple.",
              ],
            },
            {
              level: 3,
              statement: "Vers le commentaire. Voici un passage écrit pour l'exercice : « Ils se dirent adieu sur le quai. Elle ne pleura pas ; il essaya de sourire. Le train partit. L'été passa, puis l'automne. Il écrivit souvent, elle répondit moins. Un soir de février, il trouva la boîte aux lettres vide, et le lendemain aussi. » Rédigez un paragraphe de commentaire qui analyse le rythme du passage et son effet.",
              hint: "Repérez où le récit ralentit et où il accélère, puis demandez-vous ce que le texte ne dit pas.",
              solution: [
                "Repérage : les trois premières phrases forment une courte scène d'adieu (gestes précis, passé simple). « L'été passa, puis l'automne » est un sommaire extrême : deux saisons en cinq mots. « Il écrivit souvent, elle répondit moins » est un sommaire itératif. La dernière phrase revient à un moment précis (« Un soir de février »).",
                "Ce que le texte tait : la fin de l'histoire d'amour n'est jamais racontée ; elle est suggérée par la boîte aux lettres vide. C'est une ellipse de l'essentiel.",
                "Effet : l'accélération imite l'éloignement progressif ; le parallélisme déséquilibré (« souvent » et « moins ») fait sentir la rupture sans la nommer.",
                "Paragraphe rédigé : « Le passage fait éprouver l'éloignement des amants par le rythme même du récit. Après une brève scène d'adieu, faite de gestes retenus, le sommaire « L'été passa, puis l'automne » expédie deux saisons en cinq mots, comme si le temps s'accélérait dès qu'ils sont séparés. Le parallélisme « Il écrivit souvent, elle répondit moins » condense des mois de correspondance et laisse deviner le désamour. Enfin, la rupture elle-même n'est jamais racontée : seule la boîte aux lettres vide, « et le lendemain aussi », la signale. Cette ellipse de l'essentiel rend le silence plus douloureux que n'importe quelle explication. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque procédé à sa définition.",
            pairs: [
              { left: "Ellipse", right: "Une période de l'histoire est passée sous silence" },
              { left: "Sommaire", right: "Une longue période est résumée en quelques lignes" },
              { left: "Scène", right: "Le récit suit l'action à son rythme, comme dans un dialogue" },
              { left: "Pause", right: "L'histoire s'arrête le temps d'une description" },
              { left: "Analepse", right: "Retour en arrière sur un événement antérieur" },
              { left: "Prolepse", right: "Anticipation d'un événement futur" },
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on un retour en arrière dans un récit ?",
              options: ["Une prolepse", "Une analepse", "Une ellipse", "Une pause"],
              answer: 1,
              why: "L'analepse revient sur un événement antérieur au moment de l'histoire où l'on se trouve ; la prolepse anticipe.",
            },
            {
              q: "« Trois ans plus tard, il revint au village. » Quel procédé ?",
              options: ["Une scène", "Un sommaire", "Une pause", "Une ellipse"],
              answer: 3,
              why: "Trois années sont passées sous silence : le temps du récit est nul pour cette période.",
            },
            {
              q: "Un dialogue rapporté au discours direct correspond le plus souvent à :",
              options: ["une scène", "un sommaire", "une ellipse"],
              answer: 0,
              why: "Dans la scène, le temps du récit est à peu près égal au temps de l'histoire, comme dans un dialogue.",
            },
            {
              q: "Que signifie commencer un récit in medias res ?",
              options: ["Commencer par la fin de l'histoire", "Commencer par une longue description", "Commencer au milieu de l'action", "Commencer par la naissance du héros"],
              answer: 2,
              why: "L'expression latine signifie « au milieu des choses » : le lecteur est plongé dans l'action sans présentation préalable.",
            },
            {
              q: "« Chaque été, nous allions chez notre grand-mère. » Ce récit est :",
              options: ["singulatif", "répétitif", "itératif", "proleptique"],
              answer: 2,
              why: "Le récit itératif raconte une seule fois ce qui s'est produit plusieurs fois, ici à l'imparfait d'habitude.",
            },
          ],
          trap: "Confondre l'ellipse et le sommaire : l'ellipse ne raconte rien de la période omise, alors que le sommaire la résume. Autre erreur : se contenter de nommer les procédés sans dire quel effet ils produisent sur le lecteur.",
          method: "Pour étudier le rythme d'un passage, tracez une ligne du temps de l'histoire et placez-y les phrases du texte : les zones où beaucoup de lignes couvrent peu de temps sont des scènes ou des pauses, celles où peu de lignes couvrent beaucoup de temps sont des sommaires, les trous sont des ellipses.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nouvelle-recit-bref',
          title: 'La nouvelle et le récit bref',
          minutes: 30,
          objectives: [
            "Définir la nouvelle et la distinguer du roman et du conte.",
            "Situer les grandes étapes de l'histoire de la nouvelle, de la Renaissance au XXIe siècle.",
            "Analyser les effets de la brièveté : resserrement, intensité, chute.",
            "Distinguer la nouvelle réaliste et la nouvelle fantastique.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une nouvelle ?",
              paragraphs: [
                "La nouvelle est un récit de fiction en prose, bref, que l'on peut lire d'une seule traite. Le mot vient de l'italien novella, qui désignait le récit d'un événement récent et surprenant, une « nouvelle » au sens d'une information. La brièveté entraîne des choix : peu de personnages, souvent esquissés ; une action principale, sans intrigues secondaires ; un cadre resserré dans l'espace et dans le temps ; un début rapide et une fin marquante.",
                "La nouvelle se distingue du roman par sa longueur et sa concentration : le roman peut développer plusieurs intrigues et suivre une vie entière, la nouvelle se concentre sur un moment décisif. Elle se distingue du conte par son rapport au réel : le conte se situe souvent dans un monde merveilleux et hors du temps (Il était une fois), alors que la nouvelle se veut le plus souvent vraisemblable et ancrée dans un lieu et une époque précis. L'écrivain américain Edgar Allan Poe, que Baudelaire a traduit en français (Histoires extraordinaires, 1856), défendait l'idée qu'un récit bref doit viser une seule impression forte sur le lecteur.",
              ],
              box: { label: "Définition", text: "La nouvelle est un récit de fiction en prose, bref et dense : peu de personnages, une action unique, un cadre resserré, un effet concentré, souvent une chute. Elle se veut généralement vraisemblable, contrairement au conte merveilleux." },
            },
            {
              heading: "Une histoire de la nouvelle",
              paragraphs: [
                "Au milieu du XIVe siècle, l'Italien Boccace compose le Décaméron : pour fuir la peste qui frappe Florence en 1348, dix jeunes gens se retirent à la campagne et se racontent cent nouvelles en dix jours. Ce modèle d'un recueil encadré par un récit est repris en France par Marguerite de Navarre, sœur de François Ier, dans L'Heptaméron, publié après sa mort (1558-1559). Au XVIIe siècle, Madame de Lafayette écrit des nouvelles historiques, comme La Princesse de Montpensier (1662).",
                "Le XIXe siècle est l'âge d'or de la nouvelle, grâce à l'essor de la presse, qui publie des récits courts. Prosper Mérimée écrit Mateo Falcone (1829), La Vénus d'Ille (1837) et Carmen (1845) ; Flaubert publie Trois Contes (1877). Guy de Maupassant compose environ trois cents contes et nouvelles, d'abord parus dans des journaux comme Le Gaulois ou Gil Blas, après le succès de Boule de suif, publié en 1880 dans le recueil collectif Les Soirées de Médan.",
                "Au XXe siècle, la nouvelle reste vivante : Sartre (Le Mur, 1939), Marcel Aymé (Le Passe-muraille, 1943), Camus (L'Exil et le royaume, 1957), Le Clézio (Mondo et autres histoires, 1978). Les formes brèves se multiplient : dès 1906, des faits divers condensés en trois lignes, attribués à Félix Fénéon, paraissent dans le journal Le Matin ; aujourd'hui, la microfiction et les récits très courts publiés sur les réseaux prolongent ce goût de la brièveté.",
              ],
              box: { label: "Repère", text: "XIVe siècle : Boccace, Décaméron. 1558-1559 : L'Heptaméron. 1829 : Mateo Falcone (Mérimée). 1880 : Boule de suif (Maupassant). 1884 : La Parure. 1887 : Le Horla (version définitive). 1943 : Le Passe-muraille (Aymé)." },
            },
            {
              heading: "L'art de la brièveté et de la chute",
              paragraphs: [
                "Pour être efficace en peu de pages, la nouvelle commence souvent in medias res ou par une présentation rapide, use de l'ellipse et du sommaire, et choisit des détails significatifs plutôt que de longues descriptions. Sa structure suit souvent le schéma narratif : situation initiale, élément perturbateur, péripéties, dénouement, situation finale. Tout y est orienté vers la fin.",
                "La chute est une fin inattendue qui surprend le lecteur et l'oblige à relire autrement toute l'histoire. Dans La Parure de Maupassant (1884), Mathilde Loisel, femme d'un modeste employé, emprunte une rivière de diamants à une amie pour briller à un bal, la perd, et passe dix ans dans la misère pour rembourser le bijou qu'elle a racheté ; elle apprend alors que la parure prêtée était fausse et ne valait presque rien. La chute transforme l'anecdote en leçon cruelle sur la vanité et le poids des apparences sociales.",
              ],
              box: { label: "À retenir", text: "La chute est une fin brève et surprenante, préparée par des indices discrets, qui change le sens de tout le récit. Une bonne chute est à la fois inattendue et logique : à la relecture, le lecteur s'aperçoit qu'elle était annoncée." },
            },
            {
              heading: "Nouvelle réaliste, nouvelle fantastique",
              paragraphs: [
                "La nouvelle réaliste représente le monde ordinaire : la vie des paysans normands, des employés de bureau, de la petite bourgeoisie, la guerre de 1870 chez Maupassant. Elle s'inspire souvent de faits divers et dévoile, en peu de mots, la cruauté ou la médiocrité des rapports humains.",
                "La nouvelle fantastique installe un événement inexplicable dans un cadre réaliste. Selon le théoricien Tzvetan Todorov (Introduction à la littérature fantastique, 1970), le fantastique repose sur l'hésitation du personnage et du lecteur entre une explication rationnelle (rêve, folie, hasard) et une explication surnaturelle. Dans La Vénus d'Ille de Mérimée, une statue de bronze semble causer la mort d'un jeune marié ; dans Le Horla de Maupassant, le narrateur, qui tient son journal, croit qu'un être invisible le hante, et le lecteur ne sait s'il faut le croire ou le juger fou. Si le surnaturel est accepté sans surprise, on passe au merveilleux ; s'il reçoit une explication rationnelle, on parle d'étrange.",
              ],
              box: { label: "Définition", text: "Fantastique : irruption d'un phénomène inexplicable dans un monde réaliste, qui fait hésiter le personnage et le lecteur entre une explication rationnelle et une explication surnaturelle. Merveilleux : surnaturel accepté comme normal, comme dans les contes de fées." },
            },
          ],
          keyPoints: [
            "La nouvelle est un récit de fiction bref et dense : peu de personnages, une action, un cadre resserré, souvent une chute.",
            "Elle se distingue du roman par sa concentration, du conte par sa vraisemblance.",
            "Boccace (Décaméron, XIVe siècle) et Marguerite de Navarre (L'Heptaméron) fondent la tradition du recueil.",
            "XIXe siècle, âge d'or grâce à la presse : Mérimée, Flaubert, Maupassant (environ trois cents contes et nouvelles).",
            "La chute, inattendue mais préparée, oblige à relire autrement le récit (La Parure, 1884).",
            "Fantastique : hésitation entre explication rationnelle et surnaturelle (Todorov, 1970 ; Le Horla, La Vénus d'Ille).",
          ],
          example: {
            statement: "Voici un récit bref écrit pour l'exercice : « Chaque soir, à sept heures, le vieux Martin posait deux couverts sur la table de la cuisine. Il servait la soupe dans les deux assiettes et parlait de la pluie, du prix du pain, des voisins. Il riait parfois. Au village, on le disait un peu fou depuis la mort de sa femme. Un soir de décembre, le facteur, qui passait tard, vit par la fenêtre la deuxième assiette se vider lentement. » Montrez que ce texte possède les caractéristiques d'une nouvelle et analysez sa chute.",
            solution: [
              "Brièveté et resserrement : un seul personnage principal, un lieu unique (la cuisine), une action répétée ; aucune description inutile.",
              "Situation initiale itérative : l'imparfait d'habitude (« posait », « servait », « parlait ») installe un rituel quotidien, soutenu par l'indicateur « Chaque soir ».",
              "Explication rationnelle proposée : le regard du village (« on le disait un peu fou depuis la mort de sa femme ») invite à voir dans ce rituel le signe d'un deuil et d'une folie douce.",
              "Rupture : le passage au passé simple (« vit ») et l'indicateur précis (« Un soir de décembre ») introduisent un événement unique, vu par un témoin extérieur, le facteur, qui n'a aucune raison de délirer.",
              "Chute : l'assiette qui se vide contredit l'explication rationnelle ; le lecteur hésite entre l'illusion du facteur et la présence surnaturelle de la morte. C'est le principe du fantastique.",
              "Réponse : ce texte est une nouvelle fantastique à chute ; sa fin bascule le sens du récit, du portrait d'un homme en deuil à une histoire de présence invisible.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chacun de ces résumés (imaginés pour l'exercice) : conte merveilleux, nouvelle réaliste, nouvelle fantastique ou roman. a) Une fée transforme un pauvre bûcheron en roi pour récompenser sa bonté. b) Un employé de banque, humilié par son chef, démissionne un matin sur un coup de tête ; le récit, de dix pages, se termine le soir même. c) Sur cinq cents pages, on suit trois générations d'une famille de commerçants, de 1850 à 1914. d) Une jeune femme entend chaque nuit, dans sa maison neuve, un piano qui joue seul ; elle se demande si elle devient folle.",
              hint: "Regardez la longueur, le nombre de personnages et la durée, puis la place du surnaturel : absent, accepté sans surprise, ou source de doute.",
              solution: [
                "a) Conte merveilleux : le surnaturel (une fée) est accepté comme normal, dans un monde hors du temps.",
                "b) Nouvelle réaliste : récit bref, un personnage, une action resserrée sur une journée, un monde ordinaire.",
                "c) Roman : grande longueur, plusieurs générations, longue durée.",
                "d) Nouvelle fantastique : un phénomène inexplicable dans un cadre réaliste, et l'hésitation du personnage entre folie et surnaturel.",
              ],
            },
            {
              level: 2,
              statement: "Voici le résumé de La Parure de Maupassant (1884) : Mathilde Loisel, épouse d'un modeste employé de ministère, rêve de luxe. Invitée à un bal, elle emprunte une rivière de diamants à son amie Madame Forestier. Elle triomphe au bal, puis s'aperçoit en rentrant qu'elle a perdu le bijou. Le couple s'endette pour en acheter un semblable et le rend sans rien dire. Pendant dix ans, ils vivent dans la misère pour rembourser. Mathilde retrouve alors son amie, qui lui apprend que la parure prêtée était fausse. 1) Retrouvez les étapes du schéma narratif. 2) Expliquez le rôle de la chute.",
              hint: "Cherchez l'événement qui déclenche l'histoire, puis demandez-vous comment la dernière révélation change le sens des dix années de sacrifices.",
              solution: [
                "Situation initiale : Mathilde, épouse d'un modeste employé, rêve d'une vie luxueuse.",
                "Élément perturbateur : l'invitation au bal, qui la pousse à emprunter la parure.",
                "Péripéties : le triomphe au bal, la perte du bijou, l'achat d'une parure semblable grâce à des emprunts.",
                "Dénouement et situation finale : dix ans de misère pour rembourser ; Mathilde a vieilli, usée par le travail.",
                "Rôle de la chute : la révélation finale (la parure était fausse) rend absurdes et tragiques dix années de sacrifices. Elle transforme une histoire de malchance en critique cruelle de la vanité et des apparences : Mathilde a tout perdu pour un objet qui n'était qu'une illusion de richesse, à l'image de ses rêves.",
              ],
            },
            {
              level: 3,
              statement: "Écriture d'invention. À partir de ce fait divers imaginé pour l'exercice : « Un chien retrouve seul le chemin de sa maison, à 300 kilomètres, après trois mois d'absence », rédigez une nouvelle à chute d'une vingtaine de lignes. Contraintes : début in medias res, deux personnages au plus, alternance de l'imparfait et du passé simple, au moins une ellipse, une chute qui change le sens de l'histoire.",
              hint: "Décidez d'abord de la chute, puis semez dans le texte un ou deux indices discrets qui la rendront logique à la relecture.",
              solution: [
                "Étape 1, choisir la chute : le chien rentre, mais la famille a déménagé ; c'est le vieil homme qui a racheté la maison, et qui vit seul, qui l'accueille. La chute fera du retour une rencontre.",
                "Étape 2, semer des indices : un nom inconnu sur la boîte aux lettres, des rideaux d'une autre couleur, que le lecteur remarque sans les comprendre.",
                "Étape 3, construire le récit : début in medias res (le chien gratte à la porte), ellipse sur les trois mois de voyage, alternance de l'imparfait (description, arrière-plan) et du passé simple (actions).",
                "Proposition de texte (début) : « Le chien gratta à la porte vers minuit. Il avait les pattes en sang et le poil collé de boue. Trois mois plus tôt, il avait sauté de la voiture sur une aire d'autoroute, et personne ne l'avait retrouvé. Il connaissait cette porte, ce perron, cette odeur de buis. Pourtant, les rideaux étaient bleus, et un autre nom brillait sur la boîte aux lettres. »",
                "Proposition de texte (fin) : « La porte s'ouvrit. Un vieil homme en robe de chambre se pencha, surpris, puis s'accroupit lentement. Le chien hésita, flaira la main tendue. L'homme sourit pour la première fois depuis des mois. La famille était partie en juin, le jour même où le chien s'était perdu ; lui, veuf depuis l'hiver, s'était installé là en août. Il ouvrit la porte en grand. Le chien était rentré chez lui ; c'était seulement quelqu'un d'autre qui l'attendait. »",
                "Vérification des contraintes : début in medias res (« Le chien gratta »), deux personnages (le chien et le vieil homme), ellipse des trois mois, imparfait et passé simple alternés, chute qui transforme le retour attendu en rencontre de deux solitudes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La nouvelle et le récit bref.",
            statements: [
              { text: "Le mot « nouvelle » vient de l'italien novella, qui désignait le récit d'un fait récent.", true: true, why: "Le genre est lié à l'idée d'un événement nouveau, surprenant, que l'on rapporte." },
              { text: "Une nouvelle développe toujours plusieurs intrigues parallèles.", true: false, why: "C'est le propre du roman : la nouvelle se concentre en général sur une seule action." },
              { text: "Maupassant a publié beaucoup de ses nouvelles d'abord dans la presse.", true: true, why: "Des journaux comme Le Gaulois ou Gil Blas ont accueilli une grande partie de ses quelque trois cents contes et nouvelles." },
              { text: "Dans le Décaméron, dix jeunes gens fuient la peste et se racontent cent nouvelles.", true: true, why: "Boccace encadre ainsi les récits par une histoire, au milieu du XIVe siècle." },
              { text: "Dans le fantastique, le surnaturel est accepté par tous comme une chose normale.", true: false, why: "C'est le merveilleux. Le fantastique repose sur l'hésitation entre explication rationnelle et surnaturelle." },
              { text: "Une chute réussie est à la fois inattendue et préparée par des indices.", true: true, why: "À la relecture, le lecteur découvre que la fin était discrètement annoncée." },
              { text: "Une nouvelle doit obligatoirement se terminer par une chute.", true: false, why: "La chute est fréquente mais pas obligatoire : beaucoup de nouvelles s'achèvent sur une fin ouverte ou attendue." },
            ],
          },
          quiz: [
            {
              q: "Quel écrivain a composé environ trois cents contes et nouvelles, souvent publiés dans la presse ?",
              options: ["Alphonse Daudet", "Mérimée", "Flaubert", "Maupassant"],
              answer: 3,
              why: "Maupassant publie l'essentiel de ses récits courts dans des journaux comme Le Gaulois ou Gil Blas, à partir des années 1880.",
            },
            {
              q: "Qu'est-ce que la chute d'une nouvelle ?",
              options: ["L'élément perturbateur qui lance l'intrigue au début du récit", "Une fin surprenante qui éclaire tout le récit", "Une description du décor placée au début"],
              answer: 1,
              why: "La chute est une fin inattendue, mais préparée, qui oblige le lecteur à relire autrement l'histoire.",
            },
            {
              q: "Selon Todorov, sur quoi repose le fantastique ?",
              options: ["L'hésitation entre une explication rationnelle et une explication surnaturelle", "Un monde merveilleux accepté sans aucune surprise par tous les personnages du récit", "La présence obligatoire de fantômes", "Un futur imaginé à partir des sciences"],
              answer: 0,
              why: "Le fantastique dure tant que le personnage et le lecteur hésitent entre le rationnel et le surnaturel.",
            },
            {
              q: "Quel recueil réunit cent nouvelles racontées par dix jeunes gens fuyant la peste ?",
              options: ["L'Heptaméron", "Trois Contes", "Le Décaméron", "Les Soirées de Médan"],
              answer: 2,
              why: "Le Décaméron de Boccace, composé au milieu du XIVe siècle, est le modèle des recueils de nouvelles encadrés.",
            },
            {
              q: "Quel trait appartient au conte merveilleux plutôt qu'à la nouvelle ?",
              options: ["Un cadre vraisemblable et daté", "Un nombre réduit de personnages", "Un monde merveilleux hors du temps", "Une action resserrée sur un moment décisif"],
              answer: 2,
              why: "Le conte se situe souvent dans un temps indéterminé où le surnaturel est normal ; la nouvelle se veut le plus souvent vraisemblable et ancrée dans le réel.",
            },
          ],
          trap: "Confondre nouvelle et conte, ou croire qu'une nouvelle se définit seulement par sa brièveté et doit toujours finir par une chute. Autre confusion fréquente : appeler fantastique un récit où le surnaturel est accepté comme normal, qui relève en réalité du merveilleux.",
          method: "Pour analyser une nouvelle, relisez-la en partant de la fin : repérez la chute, puis cherchez en remontant les indices qui la préparaient. Notez aussi tout ce que la brièveté oblige à supprimer (descriptions, personnages secondaires, années omises) : ces absences sont des choix à interpréter.",
        },
      ],
    },
  ],
}
