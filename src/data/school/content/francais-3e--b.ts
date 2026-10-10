import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-3e',
  chapters: [
    /* ==================================================================== */
    /* VISIONS POÉTIQUES DU MONDE                                             */
    /* ==================================================================== */
    {
      id: 'visions-poetiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'poesie-regard',
          title: "La poésie, une autre façon de voir le monde",
          minutes: 30,
          objectives: [
            "Identifier les grandes fonctions de la poésie : célébrer, exprimer une émotion, interroger et renouveler notre regard sur le monde.",
            "Repérer les marques du lyrisme et la manière dont un poète transforme le réel.",
            "Expliquer, en citant le texte, ce qu'un poème fait voir autrement.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la poésie ?",
              paragraphs: [
                "Le mot « poésie » vient du grec poiein, qui signifie « faire, fabriquer, créer ». Le poète est donc d'abord un artisan : il travaille la langue comme un sculpteur travaille la pierre. Il choisit chaque mot pour son sens, mais aussi pour son son, sa longueur, sa place dans la ligne.",
                "Dans la vie courante, la langue sert surtout à transmettre une information : « Il pleut, prends un parapluie. » Une fois le message compris, on oublie les mots. La poésie, au contraire, attire l'attention sur les mots eux-mêmes : leurs sonorités, leur rythme, les images qu'ils font naître. Un poème se relit, se dit à voix haute, se garde en mémoire.",
                "Un poème peut être écrit en vers, avec ou sans rimes, mais aussi en prose. Ce qui fait la poésie n'est donc pas la rime : c'est un travail particulier de la langue qui nous oblige à regarder le monde avec des yeux neufs, un peu comme un enfant qui découvre une chose pour la première fois.",
              ],
              box: { label: "Définition", text: "La poésie est un genre littéraire qui exploite toutes les ressources de la langue (sons, rythmes, images, disposition sur la page) pour exprimer une émotion, célébrer le monde ou en proposer une vision nouvelle." },
            },
            {
              heading: "Célébrer le monde et dire les émotions : le lyrisme",
              paragraphs: [
                "Le mot « lyrisme » vient de la lyre, l'instrument dont jouait Orphée dans la mythologie grecque. Un poème lyrique exprime les sentiments d'un « je », le plus souvent celui du poète : l'amour, le deuil, la joie, la nostalgie, la fuite du temps. Ses marques sont la première personne, les exclamations, les apostrophes (on s'adresse à quelqu'un ou à quelque chose) et le vocabulaire des sentiments.",
                "Par exemple, dans « Demain, dès l'aube », publié dans Les Contemplations (1856), Victor Hugo s'adresse à sa fille Léopoldine, morte noyée en 1843. Le poème décrit une marche à travers la campagne, mais le marcheur ne voit rien du paysage : toute la nature s'efface derrière la douleur du père, qui va déposer des fleurs sur une tombe.",
                "La poésie peut aussi célébrer les choses les plus ordinaires. Dans Le Parti pris des choses (1942), Francis Ponge décrit une huître, un cageot, une bougie ou un morceau de pain comme s'il les voyait pour la première fois. Il joue avec les mots et les sons pour que le lecteur redécouvre des objets qu'il ne regardait plus.",
              ],
            },
            {
              heading: "Le poète voyant : voir au-delà des apparences",
              paragraphs: [
                "Pour certains poètes, le monde visible cache un sens plus profond que la poésie doit déchiffrer. Dans « Correspondances » (Les Fleurs du mal, 1857), Charles Baudelaire présente la Nature comme « un temple » dont les arbres, ces « vivants piliers », laissent échapper des paroles obscures. Les arbres deviennent les colonnes d'un temple qui parle à l'homme, et le poète affirme que les parfums, les couleurs et les sons se répondent.",
                "En 1871, dans une lettre à son ami Paul Demeny, Arthur Rimbaud affirme que le poète doit « se faire voyant ». Selon lui, le poète doit bousculer ses habitudes de perception pour atteindre l'inconnu.",
                "Au XXe siècle, les surréalistes rapprochent des réalités très éloignées pour provoquer un choc. Paul Eluard écrit ainsi : « La terre est bleue comme une orange » (1929). L'image semble absurde, mais elle invite à voir la Terre autrement : ronde comme un fruit, bleue comme on la verra plus tard depuis l'espace, précieuse et pleine de vie.",
              ],
              box: { label: "Repère", text: "Baudelaire, Les Fleurs du mal (1857) ; Hugo, Les Contemplations (1856) ; Rimbaud, lettre dite « du voyant » (1871) ; Eluard, L'Amour la poésie (1929) ; Ponge, Le Parti pris des choses (1942) ; Prévert, Paroles (1946)." },
            },
            {
              heading: "Interroger notre rapport au monde",
              paragraphs: [
                "La poésie ne se contente pas de décrire. Elle questionne notre place dans le monde : que voyons-nous vraiment ? Qu'oublions-nous de regarder ? Jacques Prévert, dans Paroles (1946), utilise une langue simple, proche de l'oral, pour montrer la beauté et la cruauté de la vie quotidienne, la ville, l'enfance, la guerre.",
                "Lire un poème, c'est donc se demander : qu'est-ce que le poète me fait voir, entendre ou ressentir que je n'aurais pas remarqué seul ? Et par quels moyens (images, sons, rythme, disposition) y parvient-il ? Ces deux questions guident toute analyse de poème au brevet.",
              ],
              box: { label: "À retenir", text: "Un poème transforme le regard : il célèbre, exprime une émotion, révèle un sens caché ou interroge. Pour l'analyser, on relie toujours ce qu'il dit (le sens) à la façon dont il le dit (les procédés)." },
            },
          ],
          keyPoints: [
            "« Poésie » vient du grec poiein, « faire, créer » : le poète travaille la langue comme une matière.",
            "La poésie attire l'attention sur les mots eux-mêmes : sons, rythme, images, disposition.",
            "Un poème peut être en vers ou en prose : la rime n'est pas obligatoire.",
            "Le lyrisme exprime les émotions d'un « je » : première personne, exclamations, apostrophes.",
            "Le poète peut célébrer l'ordinaire (Ponge), déchiffrer un sens caché (Baudelaire, Rimbaud) ou créer des images surprenantes (Eluard).",
            "Analyser un poème : relier ce qu'il fait voir aux procédés qui le font voir.",
          ],
          example: {
            statement: "Expliquez en quoi le vers de Paul Eluard « La terre est bleue comme une orange » propose une vision nouvelle du monde.",
            solution: [
              "Étape 1 · Identifier la figure : il s'agit d'une comparaison, avec l'outil « comme ». Le comparé est « la terre », le comparant est « une orange », et le point commun annoncé est la couleur « bleue ».",
              "Étape 2 · Relever ce qui surprend : une orange n'est pas bleue. Le rapprochement paraît d'abord illogique ; c'est un procédé typique des surréalistes, qui associent des réalités éloignées.",
              "Étape 3 · Chercher ce que l'image fait voir : la Terre est ronde comme le fruit, elle est bleue par ses océans et son ciel, elle semble à la fois petite, précieuse et pleine de vie, comme un fruit que l'on tient dans la main.",
              "Étape 4 · Conclure : le poète ne décrit pas la Terre de façon scientifique ; il nous oblige à la regarder autrement, avec étonnement et tendresse. Réponse : la comparaison inattendue renouvelle notre regard sur une réalité si familière que nous ne la voyions plus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque poème à sa fonction principale (célébrer la beauté et inviter à profiter de la vie ; exprimer un deuil ; renouveler le regard sur un objet banal ; défendre une valeur) : A. Ronsard, « Mignonne, allons voir si la rose » ; B. Hugo, « Demain, dès l'aube » ; C. Ponge, « Le Cageot » ; D. Eluard, « Liberté ».",
              hint: "Demandez-vous de quoi parle chaque poème : une jeune femme et une rose, une tombe, une caisse à fruits, une valeur pour laquelle on se bat.",
              solution: [
                "A. Ronsard compare la jeune femme à une rose qui fane en un jour : il célèbre la beauté et invite à profiter de la jeunesse avant qu'elle ne passe.",
                "B. Hugo marche vers la tombe de sa fille : le poème exprime un deuil.",
                "C. Ponge décrit une simple caisse à fruits : il renouvelle le regard sur un objet banal.",
                "D. Eluard répète « J'écris ton nom » jusqu'au dernier mot, « Liberté » : il défend une valeur.",
                "Réponse : A, célébrer la beauté ; B, exprimer un deuil ; C, renouveler le regard ; D, défendre une valeur.",
              ],
            },
            {
              level: 2,
              statement: "Voici ce que dit, résumé, le premier quatrain de « Correspondances » de Baudelaire : la Nature « est un temple » ; de « vivants piliers » y laissent parfois échapper des paroles confuses ; l'homme y traverse des « forêts de symboles » qui le regardent d'un air familier. a) À quoi la Nature est-elle assimilée ? b) Que désignent les « vivants piliers » ? c) Quelle vision du monde ce quatrain propose-t-il ?",
              hint: "Un temple est un lieu sacré. Pensez à ce qui, dans une forêt, ressemble à des colonnes, et remarquez que la nature « parle » et « regarde ».",
              solution: [
                "a) La Nature est assimilée à un temple, c'est-à-dire à un lieu sacré, sans outil de comparaison : c'est une métaphore.",
                "b) Les « vivants piliers » désignent les arbres : leurs troncs dressés ressemblent aux colonnes d'un temple, mais ils sont vivants.",
                "c) La nature laisse échapper des paroles et les symboles regardent l'homme : elle est personnifiée. Le monde visible est plein de signes qui parlent à l'homme, mais de façon obscure (« confuses »).",
                "Réponse : Baudelaire présente la nature comme un monde sacré et mystérieux, rempli de messages que le poète a pour mission de déchiffrer.",
              ],
            },
            {
              level: 3,
              statement: "Sujet d'écriture (type brevet) : à la manière de Francis Ponge, décrivez en une quinzaine de lignes un objet ordinaire de votre quotidien (une gomme, un parapluie, une clé...) de façon à le faire voir autrement. Votre texte, en prose, comportera au moins deux images (comparaison, métaphore ou personnification) et un jeu sur les sonorités.",
              hint: "Observez l'objet comme si vous ne l'aviez jamais vu : forme, matière, couleur, usage, ce qu'il subit. Puis cherchez à quoi il ressemble et ce qu'il « vivrait » s'il était vivant.",
              solution: [
                "Étape 1 · Choisir l'objet et l'observer : par exemple une gomme. Noter sa matière (souple, tendre), sa forme (un petit pavé), son usage (elle efface), ce qu'elle devient (elle s'use, rétrécit, noircit).",
                "Étape 2 · Trouver des images : la gomme peut être personnifiée en servante dévouée qui se sacrifie, ou comparée à un savon qui lave la page.",
                "Étape 3 · Travailler les sons : répéter des sonorités douces, par exemple « elle efface, s'efface, s'affaisse », pour imiter le frottement.",
                "Étape 4 · Rédiger. Exemple de début : « La gomme est une petite servante blanche qui vit au fond de la trousse. On ne l'appelle qu'en cas de faute. Alors elle accourt, frotte, efface, s'efface. Chaque erreur réparée lui coûte un peu de son corps : elle maigrit, comme un savon qui aurait lavé trop de pages... »",
                "Étape 5 · Se relire : vérifier la présence d'au moins deux images, d'un jeu sonore, et l'absence de fautes. Réponse attendue : un texte en prose qui fait redécouvrir l'objet par des images et des sonorités choisies.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : que savez-vous de la poésie ?",
            statements: [
              { text: "Un poème doit forcément rimer.", true: false, why: "Il existe des poèmes en vers libres sans rimes et des poèmes en prose." },
              { text: "Le mot « poésie » vient d'un verbe grec qui signifie « faire, créer ».", true: true, why: "Poiein signifie « faire, fabriquer » : le poète est un créateur." },
              { text: "Le lyrisme est l'expression des sentiments d'un « je ».", true: true, why: "Le mot vient de la lyre d'Orphée ; le poème lyrique dit l'amour, le deuil, la joie." },
              { text: "Francis Ponge a surtout écrit des poèmes sur des batailles célèbres.", true: false, why: "Dans Le Parti pris des choses, il décrit des objets ordinaires : huître, cageot, bougie, pain." },
              { text: "Une image poétique qui semble absurde peut renouveler notre regard.", true: true, why: "« La terre est bleue comme une orange » surprend, mais fait voir la Terre autrement." },
              { text: "Analyser un poème, c'est raconter son contenu avec d'autres mots.", true: false, why: "Il faut relier le sens aux procédés : images, sons, rythme, disposition." },
            ],
          },
          quiz: [
            { q: "Que signifie le verbe grec poiein, à l'origine du mot « poésie » ?", options: ["Chanter", "Faire, créer", "Rêver", "Aimer"], answer: 1, why: "Poiein signifie « faire, fabriquer » : le poète est un artisan de la langue." },
            { q: "Quelle est une marque du lyrisme ?", options: ["L'emploi exclusif de la troisième personne", "L'absence de sentiments", "Le vocabulaire technique", "La première personne et les exclamations"], answer: 3, why: "Le lyrisme exprime les émotions d'un « je », souvent avec exclamations et apostrophes." },
            { q: "Quel poète compare la Nature à « un temple » dans « Correspondances » ?", options: ["Baudelaire", "Ponge", "Eluard", "Prévert"], answer: 0, why: "« Correspondances » est un sonnet des Fleurs du mal (1857) de Baudelaire." },
            { q: "Que fait Francis Ponge dans Le Parti pris des choses ?", options: ["Il raconte sa vie", "Il chante la guerre", "Il décrit des objets ordinaires", "Il imite les fables"], answer: 2, why: "Il fait redécouvrir l'huître, le cageot ou la bougie par un travail sur les mots." },
            { q: "Pour Rimbaud, en 1871, le poète doit se faire...", options: ["savant", "voyant", "juge", "conteur"], answer: 1, why: "Dans sa lettre à Paul Demeny, il affirme que le poète doit « se faire voyant »." },
          ],
          trap: "Croire qu'un poème se reconnaît à ses rimes, ou se contenter de paraphraser le poème (le redire avec d'autres mots) au lieu d'expliquer comment il le dit.",
          method: "Lisez le poème deux fois à voix haute, puis posez-vous deux questions : qu'est-ce que le poème me fait voir ou ressentir, et par quel procédé précis ? Notez chaque idée avec une citation courte entre guillemets.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'images-poetiques',
          title: "Les images poétiques : comparaison, métaphore, personnification",
          minutes: 30,
          objectives: [
            "Identifier une comparaison, une métaphore, une métaphore filée et une personnification.",
            "Nommer le comparé, le comparant, l'outil de comparaison et le point commun.",
            "Analyser l'effet d'une image poétique dans un texte en rédigeant une réponse justifiée.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une image poétique ?",
              paragraphs: [
                "Une image poétique rapproche deux réalités différentes pour en faire apparaître un point commun inattendu. Elle repose sur une analogie, c'est-à-dire une ressemblance que l'auteur perçoit et qu'il nous fait voir. Elle n'est pas réservée aux poèmes : on dit couramment « il est malin comme un singe » ou « le pied de la table ».",
                "Pour analyser une image, on identifie le comparé (ce dont on parle réellement), le comparant (ce à quoi on le rapproche) et, s'il est exprimé, le point commun (aussi appelé motif). Le plus important est ensuite d'expliquer l'effet produit : ce que l'image fait voir ou ressentir.",
              ],
            },
            {
              heading: "La comparaison",
              paragraphs: [
                "La comparaison rapproche le comparé et le comparant à l'aide d'un outil de comparaison : comme, tel, ainsi que, de même que, pareil à, semblable à, ressembler à, sembler, avoir l'air de...",
                "Exemple : à la fin de « L'Albatros », Baudelaire déclare le Poète « semblable au prince des nuées ». Le comparé est « le Poète », le comparant « le prince des nuées » (l'albatros, oiseau marin aux immenses ailes), l'outil « semblable à ». Le poète, comme l'oiseau, est majestueux dans le ciel mais maladroit et moqué sur terre : ses ailes immenses, explique le poème, l'empêchent de marcher parmi les hommes.",
                "Attention : toute phrase avec « comme » n'est pas une comparaison. Dans « Comme il pleuvait, je suis resté », « comme » exprime la cause. Et « Paul est aussi grand que Marc » compare deux êtres de même nature sans créer d'image.",
              ],
              box: { label: "Définition", text: "La comparaison rapproche un comparé et un comparant grâce à un outil de comparaison (comme, tel, pareil à, semblable à, ressembler à...). Exemple : « La terre est bleue comme une orange » (Eluard)." },
            },
            {
              heading: "La métaphore et la métaphore filée",
              paragraphs: [
                "La métaphore rapproche deux réalités sans outil de comparaison : le comparé est directement identifié au comparant. « La Nature est un temple » (Baudelaire) : la nature n'est pas « comme » un temple, elle « est » un temple. La métaphore est donc plus forte et plus surprenante que la comparaison.",
                "Le comparé n'est pas toujours exprimé. Dans « un océan de larmes », seul le comparant « océan » apparaît, pour dire l'immense quantité de larmes. Quand Rimbaud décrit, dans « Le Dormeur du val », un vallon qui « mousse de rayons », la lumière est vue comme une mousse qui déborde.",
                "Quand une métaphore se prolonge sur plusieurs mots ou plusieurs vers, on parle de métaphore filée. Au début de « Zone », Apollinaire interpelle la tour Eiffel en l'appelant « Bergère », puis évoque « le troupeau des ponts » qui bêle. La tour Eiffel devient une bergère, les ponts de Paris son troupeau, et leurs bruits un bêlement : toute la ville moderne est vue comme un paysage de campagne.",
              ],
              box: { label: "Définition", text: "La métaphore rapproche un comparé et un comparant sans outil de comparaison. Prolongée par plusieurs termes du même champ lexical, elle devient une métaphore filée." },
            },
            {
              heading: "La personnification (et l'allégorie)",
              paragraphs: [
                "La personnification attribue des caractéristiques humaines (actions, sentiments, paroles) à un animal, un objet, une idée ou un élément naturel. « Le vent hurlait » ; « une rivière chante » (Rimbaud). Dans « Le Lac » (1820), Lamartine supplie : « Ô temps ! suspends ton vol » : le temps devient un être à qui l'on parle, et même un oiseau qui vole.",
                "Proche de la personnification, l'allégorie représente une idée abstraite sous une forme concrète et souvent humaine : la Mort en squelette avec une faux, la Liberté en femme guidant le peuple (le tableau de Delacroix, 1830). Une majuscule signale souvent l'allégorie.",
                "Ces images donnent vie au monde : la nature semble partager les émotions humaines, les objets deviennent des personnages. C'est l'un des moyens par lesquels la poésie rend le monde plus présent et plus intense.",
              ],
              box: { label: "À retenir", text: "Comparaison : un outil relie comparé et comparant. Métaphore : aucun outil. Métaphore filée : la métaphore se prolonge. Personnification : une chose, un animal ou une idée reçoit des traits humains." },
            },
          ],
          keyPoints: [
            "Une image rapproche deux réalités différentes : un comparé et un comparant, parfois avec un point commun.",
            "Comparaison : présence d'un outil (comme, tel, pareil à, semblable à, ressembler à, sembler).",
            "Métaphore : pas d'outil ; « La Nature est un temple » (Baudelaire).",
            "Métaphore filée : la même image se prolonge sur plusieurs mots ou vers (la tour Eiffel « bergère » d'un troupeau de ponts, Apollinaire).",
            "Personnification : des traits humains donnés à une chose, un animal ou une idée ; allégorie : une idée représentée concrètement.",
            "Toujours expliquer l'effet de l'image : ce qu'elle fait voir ou ressentir.",
          ],
          example: {
            statement: "Au début de « Zone » (Alcools, 1913), Apollinaire s'adresse à la tour Eiffel en l'appelant « Bergère » et écrit que « le troupeau des ponts » bêle ce matin-là. Identifiez et analysez cette image.",
            solution: [
              "Étape 1 · Repérer l'absence d'outil de comparaison : la tour Eiffel est directement appelée « Bergère ». C'est une métaphore.",
              "Étape 2 · Repérer le prolongement : « troupeau » et « bêle » appartiennent au même champ lexical que « bergère », celui de la vie pastorale. La métaphore est donc filée.",
              "Étape 3 · Nommer les éléments : comparés, la tour Eiffel, les ponts de Paris et leur bruit ; comparants, la bergère, le troupeau, le bêlement.",
              "Étape 4 · Expliquer l'effet : la tour domine les ponts comme une bergère veille sur ses moutons, et le bruit de la circulation devient un bêlement. Le poète transforme la ville moderne en un paysage familier et tendre.",
              "Réponse : une métaphore filée qui fait voir Paris avec un regard neuf, en mêlant la modernité (la tour Eiffel, monument de fer) et la tradition poétique de la pastorale.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Identifiez la figure dans chaque phrase (comparaison, métaphore ou personnification) : a) « Il est fort comme un lion. » b) « Ses yeux sont deux lacs tranquilles. » c) « Le vent hurlait dans la cheminée. » d) « La lune, pareille à une pièce d'argent, brillait sur la mer. »",
              hint: "Cherchez d'abord un outil de comparaison (comme, pareil à...). S'il n'y en a pas, demandez-vous si l'on identifie deux réalités ou si l'on donne un trait humain à une chose.",
              solution: [
                "a) Comparaison : outil « comme », comparé « il », comparant « un lion », point commun « fort ».",
                "b) Métaphore : les yeux sont identifiés à des lacs sans outil de comparaison.",
                "c) Personnification : le vent « hurle » comme un être vivant.",
                "d) Comparaison : outil « pareille à », comparé « la lune », comparant « une pièce d'argent ».",
                "Réponse : a) comparaison ; b) métaphore ; c) personnification ; d) comparaison.",
              ],
            },
            {
              level: 2,
              statement: "Transformez chaque comparaison en métaphore, puis expliquez la différence d'effet : a) « La mer est comme un miroir. » b) « Les nuages ressemblent à des moutons qui paissent dans le ciel. »",
              hint: "Supprimez l'outil de comparaison et identifiez directement le comparé au comparant.",
              solution: [
                "a) « La mer est un miroir. » ou « le miroir de la mer ».",
                "b) « Les moutons du ciel paissent lentement. » ou « Un troupeau de nuages paît dans le ciel. »",
                "Différence d'effet : sans l'outil, le rapprochement est présenté comme une évidence. L'image est plus rapide, plus forte et plus surprenante, et oblige le lecteur à faire lui-même le lien.",
                "Réponse : la métaphore identifie au lieu de rapprocher ; elle intensifie l'image.",
              ],
            },
            {
              level: 3,
              statement: "Question de brevet : le premier quatrain du « Dormeur du val » de Rimbaud (1870) décrit un « trou de verdure » où « chante une rivière » ; l'eau accroche aux herbes des « haillons d'argent », le soleil brille depuis « la montagne fière », et le petit vallon « mousse de rayons ». À partir de ces expressions du poème, nommez deux images poétiques et montrez comment elles construisent un décor paisible et vivant.",
              hint: "Cherchez des éléments naturels qui agissent comme des humains, et une image qui transforme la lumière en matière.",
              solution: [
                "Première image : « où chante une rivière ». C'est une personnification : la rivière chante comme une personne. Elle rend le lieu joyeux et sonore.",
                "Deuxième image : le val qui « mousse de rayons ». C'est une métaphore : la lumière du soleil devient une mousse qui déborde, comme l'écume. Elle suggère l'abondance et la douceur de la lumière.",
                "On peut ajouter « des haillons d'argent » : les reflets de l'eau sur les herbes deviennent des lambeaux de tissu brillant (métaphore), et « la montagne fière » est personnifiée.",
                "Conclusion : ces images donnent vie à toute la nature, qui semble chanter et rayonner. Le décor est paisible, lumineux, presque idyllique. Ce cadre heureux prépare le contraste de la fin du poème, où l'on découvre que le jeune soldat endormi est mort.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque exemple à la figure qu'il illustre.",
            pairs: [
              { left: "« La terre est bleue comme une orange »", right: "Comparaison" },
              { left: "« La Nature est un temple »", right: "Métaphore" },
              { left: "La tour Eiffel « bergère » d'un « troupeau » de ponts qui bêle", right: "Métaphore filée" },
              { left: "« Où chante une rivière »", right: "Personnification" },
              { left: "La Mort représentée en squelette armé d'une faux", right: "Allégorie" },
            ],
          },
          quiz: [
            { q: "Qu'est-ce qui distingue la comparaison de la métaphore ?", options: ["La rime", "La longueur de la phrase", "La présence d'un outil de comparaison", "Le temps du verbe"], answer: 2, why: "La comparaison utilise un outil (comme, tel, pareil à...) ; la métaphore n'en a pas." },
            { q: "Dans « Ses yeux sont deux lacs », quel est le comparant ?", options: ["deux lacs", "ses yeux", "sont", "il n'y en a pas"], answer: 0, why: "Le comparant est ce à quoi l'on rapproche le comparé (les yeux) : les lacs." },
            { q: "« Le vent hurlait » contient...", options: ["une comparaison", "une métaphore filée", "une allégorie", "une personnification"], answer: 3, why: "Hurler est une action humaine (ou animale) prêtée au vent." },
            { q: "Laquelle de ces phrases n'est pas une comparaison ?", options: ["Il nage comme un poisson.", "Comme il pleuvait, je suis resté.", "Elle est pareille à une fleur.", "Il ressemble à un ours."], answer: 1, why: "Ici, « comme » exprime la cause : il n'y a ni comparé ni comparant." },
            { q: "Une métaphore prolongée sur plusieurs vers s'appelle...", options: ["une allégorie", "une comparaison", "une métaphore filée", "une anaphore"], answer: 2, why: "La métaphore filée développe la même image avec des mots d'un même champ lexical." },
          ],
          trap: "Appeler « comparaison » toute phrase contenant « comme » (il peut exprimer la cause), ou se contenter de nommer la figure sans expliquer l'effet qu'elle produit.",
          method: "Pour chaque image, rédigez en trois temps : je nomme la figure, je cite et j'identifie comparé et comparant, puis j'explique ce que l'image fait voir ou ressentir (« Cette image suggère... »).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'versification',
          title: "Lire un poème : vers, strophes, rythmes et sonorités",
          minutes: 35,
          objectives: [
            "Compter les syllabes d'un vers en appliquant les règles du e muet, et nommer le vers.",
            "Identifier les strophes, la disposition des rimes et la forme du sonnet.",
            "Repérer enjambement, rejet, allitération et assonance, et en expliquer l'effet.",
          ],
          course: [
            {
              heading: "Le vers et le compte des syllabes",
              paragraphs: [
                "Un vers est une ligne de poème qui commence généralement par une majuscule. On le mesure en syllabes prononcées (le mot savant est « pied », mais on dit plutôt « syllabe »). Les vers les plus fréquents sont l'alexandrin (12 syllabes), le décasyllabe (10) et l'octosyllabe (8).",
                "Le e muet (ou e caduc) obéit à trois règles. Prenons un vers écrit pour l'exemple : « Les arbres de la place attendent le printemps ». Devant une consonne, le e muet se prononce et compte : « ar-bres de », « at-ten-dent le » (la terminaison -ent du verbe se comporte comme un e muet). Devant une voyelle ou un h muet, il s'élide et ne compte pas : « pla-c(e) at-ten-dent » se dit « pla-ca-ten-dent ». En fin de vers, il ne compte jamais. Ce vers compte donc 12 syllabes.",
                "Parfois, deux voyelles qui se suivent dans un mot sont prononcées en deux syllabes : c'est la diérèse (« vi-o-lons » chez Verlaine). Le contraire, en une seule syllabe, s'appelle la synérèse (« viè » dans « ri-viè-re »).",
              ],
              box: { label: "Règle", text: "Le e muet compte devant une consonne, s'élide devant une voyelle ou un h muet, et ne compte jamais en fin de vers. Alexandrin : 12 syllabes ; décasyllabe : 10 ; octosyllabe : 8." },
            },
            {
              heading: "Le rythme : césure, enjambement, rejet",
              paragraphs: [
                "L'alexandrin classique est coupé en deux moitiés de 6 syllabes, les hémistiches, séparées par une pause appelée césure : « Les arbres de la place // attendent le printemps ». La césure met en valeur les mots placés juste avant elle et en fin de vers.",
                "Quand la phrase déborde d'un vers sur le suivant sans pause, on parle d'enjambement. Si le débordement est court et isole un ou deux mots au début du vers suivant, c'est un rejet : « des haillons / D'argent » ou « de la montagne fière, / Luit » (Rimbaud). Le mot rejeté est mis en relief. Le contre-rejet est l'inverse : un mot court, à la fin d'un vers, annonce une phrase qui continue au vers suivant.",
              ],
            },
            {
              heading: "Rimes et strophes",
              paragraphs: [
                "La rime est le retour d'un même son en fin de vers. Selon leur disposition, les rimes sont plates ou suivies (AABB), croisées (ABAB) ou embrassées (ABBA). Une rime est féminine si le vers se termine par un e muet (« rivière », « fière »), masculine sinon (« haillons », « rayons »). Selon le nombre de sons communs, la rime est pauvre (un son), suffisante (deux) ou riche (trois et plus).",
                "Une strophe est un groupe de vers séparé par un blanc. On distingue le distique (2 vers), le tercet (3), le quatrain (4), le quintil (5) et le sizain (6). Le sonnet est une forme fixe de 14 vers : deux quatrains suivis de deux tercets, le dernier vers (la chute) étant souvent frappant. « Le Dormeur du val » de Rimbaud et « Correspondances » de Baudelaire sont des sonnets.",
              ],
              box: { label: "Repère", text: "Rimes plates AABB, croisées ABAB, embrassées ABBA. Sonnet : 14 vers, deux quatrains et deux tercets. Les quatrains de « Correspondances » riment en ABBA (piliers, paroles, symboles, familiers)." },
            },
            {
              heading: "Les sonorités : allitération et assonance",
              paragraphs: [
                "L'allitération est la répétition d'un même son consonne ; l'assonance, la répétition d'un même son voyelle. Un exemple célèbre se trouve dans Andromaque de Racine (1667) : Oreste, devenu fou, croit voir des serpents siffler au-dessus des têtes des Furies, et le vers multiplie les [s] pour faire entendre ce sifflement.",
                "Dans « Chanson d'automne » (Poèmes saturniens, 1866), Verlaine évoque « les sanglots longs » des violons de l'automne qui blessent son cœur. L'assonance en [ɔ̃] et les sons nasals créent une musique lente et plaintive, et les vers très courts (de 4 et 3 syllabes) imitent des sanglots entrecoupés.",
                "Attention : une sonorité n'a pas de sens en elle-même. Le [s] n'est pas toujours un sifflement. C'est le sens du vers qui permet d'interpréter l'effet sonore.",
              ],
              box: { label: "À retenir", text: "Allitération : répétition d'une consonne. Assonance : répétition d'une voyelle. On n'interprète une sonorité qu'en lien avec le sens du vers." },
            },
          ],
          keyPoints: [
            "Alexandrin : 12 syllabes, deux hémistiches de 6 séparés par la césure ; décasyllabe : 10 ; octosyllabe : 8.",
            "Le e muet compte devant une consonne, s'élide devant une voyelle, ne compte pas en fin de vers.",
            "Rimes plates AABB, croisées ABAB, embrassées ABBA ; féminines si elles finissent par un e muet.",
            "Sonnet : 14 vers, deux quatrains et deux tercets.",
            "Enjambement : la phrase déborde sur le vers suivant ; rejet : un mot court est isolé au vers suivant.",
            "Allitération (consonne), assonance (voyelle) : toujours reliées au sens.",
          ],
          example: {
            statement: "Comptez les syllabes de ce vers, écrit pour l'exercice, et expliquez l'effet de ses sonorités : « Sous le saule, sans cesse, un souffle sourd soupire. »",
            solution: [
              "Étape 1 · Appliquer les règles du e muet : le e de « saule » est suivi de la consonne « s » de « sans », il compte ; le e de « cesse » est suivi de la voyelle de « un », il s'élide ; le e de « souffle » est suivi de la consonne « s » de « sourd », il compte ; le e final de « soupire » ne compte pas.",
              "Étape 2 · Découper en syllabes prononcées : Sous (1) le (2) sau (3) le (4) sans (5) ces (6) // s'un (7) souf (8) fle (9) sourd (10) sou (11) pi (12) re.",
              "Étape 3 · Conclure sur le mètre : 12 syllabes, c'est un alexandrin, avec une césure après « cesse » (dont le e s'élide).",
              "Étape 4 · Repérer les sonorités : le son [s] revient dans « sous, saule, sans, cesse, souffle, sourd, soupire ». C'est une allitération.",
              "Réponse : un alexandrin dont l'allitération en [s] imite le murmure léger et continu du vent dans le feuillage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Comptez les syllabes et nommez chacun de ces vers, écrits pour l'exercice : a) « Une étoile écoute la mer » ; b) « Le vent du soir emporte une odeur de forêt » ; c) « Au bord de l'eau, je regarde passer ».",
              hint: "Pensez à élider le e muet devant une voyelle (« Un(e) étoil(e) écoute », « emport(e) une », « un(e) odeur »), à le compter devant une consonne (« écoute la », « regarde passer ») et à ne pas compter le e final.",
              solution: [
                "a) U (1) n'é (2) toi (3) l'é (4) cou (5) te (6) la (7) mer (8) : le e de « Une » et celui de « étoile » s'élident devant une voyelle ; celui de « écoute » compte devant la consonne « l ». 8 syllabes : octosyllabe.",
                "b) Le (1) vent (2) du (3) soir (4) em (5) por (6) // t'u (7) n'o (8) deur (9) de (10) fo (11) rêt (12) : les e de « emporte » et de « une » s'élident devant une voyelle. 12 syllabes : alexandrin, césure après « emporte ».",
                "c) Au (1) bord (2) de (3) l'eau (4) je (5) re (6) gar (7) de (8) pas (9) ser (10) : le e de « regarde » compte devant la consonne « p ». 10 syllabes : décasyllabe.",
                "Réponse : a) octosyllabe ; b) alexandrin ; c) décasyllabe.",
              ],
            },
            {
              level: 2,
              statement: "Les quatre vers du premier quatrain de « Correspondances » (Baudelaire, Les Fleurs du mal) se terminent, dans l'ordre, par les mots : piliers, paroles, symboles, familiers. a) Donnez la disposition des rimes. b) Dites si chaque rime est masculine ou féminine. c) Ce poème compte 14 vers répartis en deux quatrains et deux tercets : comment s'appelle cette forme ?",
              hint: "Notez A pour la première rime, B pour la deuxième, puis observez si le dernier mot se termine par un e muet.",
              solution: [
                "a) piliers (A), paroles (B), symboles (B), familiers (A) : rimes embrassées, ABBA.",
                "b) « piliers / familiers » : rime masculine (pas de e muet final). « paroles / symboles » : rime féminine (terminaison en e muet, même suivie d'un s).",
                "c) Quatorze vers, deux quatrains et deux tercets : c'est un sonnet.",
                "Réponse : rimes embrassées ABBA, alternance d'une rime masculine et d'une rime féminine, dans un sonnet.",
              ],
            },
            {
              level: 3,
              statement: "Question de brevet, sur une strophe écrite pour l'exercice : « Le vent d'hiver / Gémit sans fin / Sur les toits gris ; / Et sur la mer / Le jour éteint / Pleure à grands cris. » a) Comptez les syllabes de chaque vers. b) Donnez la disposition des rimes. c) Relevez une assonance et montrez comment le rythme et les sonorités expriment la tristesse.",
              hint: "Le e de « Pleure » s'élide devant « à ». Pour les rimes, notez A, B, C au fil des vers et regardez quand chaque son revient.",
              solution: [
                "a) Le-vent-d'hi-ver : 4 ; Gé-mit-sans-fin : 4 ; Sur-les-toits-gris : 4 ; Et-sur-la-mer : 4 ; Le-jour-é-teint : 4 ; Pleu-r(e) à-grands-cris, soit Pleu-rà-grands-cris : 4. Tous les vers comptent 4 syllabes : ce sont des vers très courts.",
                "b) hiver (A), fin (B), gris (C), mer (A), éteint (B), cris (C) : les trois rimes reviennent dans le même ordre, ABC ABC. Toutes sont masculines (aucun e muet final).",
                "c) Assonance nasale en [ɑ̃] et [ɛ̃] : « vent », « sans », « fin », « éteint », « grands ». Ces sons longs et sourds font entendre une plainte. Les vers de 4 syllabes, brefs et réguliers, imitent des sanglots répétés, et les personnifications (« gémit », « pleure ») prêtent au paysage la tristesse humaine.",
                "Réponse : vers de 4 syllabes, rimes ABC ABC, assonance nasale : le rythme haché et la répétition des sons expriment une tristesse monotone, comme dans « Chanson d'automne » de Verlaine.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour analyser la forme d'un vers.",
            items: [
              "Lire le vers à voix haute, lentement.",
              "Découper le vers en syllabes prononcées.",
              "Traiter les e muets : compter devant une consonne, élider devant une voyelle, ignorer en fin de vers.",
              "Vérifier les diérèses et synérèses possibles.",
              "Compter le total et nommer le vers (octosyllabe, décasyllabe, alexandrin).",
              "Repérer la césure, les enjambements et les sonorités, puis les relier au sens.",
            ],
          },
          quiz: [
            { q: "Combien de syllabes compte un alexandrin ?", options: ["12", "10", "8", "14"], answer: 0, why: "L'alexandrin compte 12 syllabes, souvent réparties en deux hémistiches de 6." },
            { q: "Quelle est la disposition ABBA ?", options: ["Rimes plates", "Rimes croisées", "Rimes embrassées", "Rimes riches"], answer: 2, why: "Dans les rimes embrassées, la rime B est « embrassée » par deux rimes A." },
            { q: "Dans « Mignonne, allons », le e de « Mignonne »...", options: ["compte", "s'élide", "est une diérèse", "forme une rime"], answer: 1, why: "Devant une voyelle (« allons »), le e muet s'élide et ne compte pas." },
            { q: "Comment s'appelle la répétition d'un même son consonne ?", options: ["Assonance", "Anaphore", "Césure", "Allitération"], answer: 3, why: "L'allitération répète une consonne, l'assonance une voyelle." },
            { q: "Un sonnet est composé de...", options: ["deux quatrains et deux tercets", "quatre quatrains", "trois tercets et un distique", "quatorze strophes"], answer: 0, why: "Le sonnet est une forme fixe de 14 vers : 4 + 4 + 3 + 3." },
          ],
          trap: "Compter les syllabes comme à l'écrit, en oubliant d'élider le e muet devant une voyelle, ou en comptant le e final du vers.",
          method: "Écrivez le vers au brouillon et tracez une barre entre chaque syllabe prononcée ; barrez les e élidés et le e final, puis numérotez. Vérifiez en relisant le vers à voix haute.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'poeme-en-prose',
          title: "Du vers libre au poème en prose",
          minutes: 30,
          objectives: [
            "Distinguer le vers régulier, le vers libre et le poème en prose.",
            "Identifier les caractéristiques d'un poème en prose : brièveté, unité, travail des images et du rythme.",
            "Situer les grandes étapes de la libération des formes poétiques aux XIXe et XXe siècles.",
            "Rédiger un court poème en prose.",
          ],
          course: [
            {
              heading: "Pourquoi libérer le poème ?",
              paragraphs: [
                "Pendant des siècles, la poésie française s'écrit en vers réguliers : nombre fixe de syllabes, rimes, strophes. Au XIXe siècle, des poètes trouvent ces règles trop étroites pour exprimer la vie moderne, la ville, la rêverie ou les mouvements de la conscience. Ils inventent alors des formes plus libres, sans renoncer au travail de la langue qui fait la poésie.",
                "Baudelaire résume ce rêve dans la dédicace de ses petits poèmes en prose : il rêve du « miracle d'une prose poétique », une prose qui serait musicale sans avoir besoin du rythme régulier ni de la rime. La libération se fait par deux chemins : le vers libre, qui garde le retour à la ligne, et le poème en prose, qui l'abandonne.",
              ],
            },
            {
              heading: "Le vers libre",
              paragraphs: [
                "Le vers libre n'a ni nombre de syllabes fixe, ni rimes régulières, ni strophes identiques. Il garde pourtant le retour à la ligne, qui crée des pauses et met des mots en valeur. Il apparaît à la fin du XIXe siècle, chez Rimbaud (deux textes des Illuminations), Jules Laforgue ou Gustave Kahn.",
                "Au XXe siècle, il devient la forme la plus courante. Dans Alcools (1913), Apollinaire supprime toute ponctuation : le rythme du vers remplace les virgules. Dans « Barbara » (Paroles, 1946), Jacques Prévert s'adresse à une jeune femme croisée un jour de pluie à Brest, avant que la guerre ne détruise la ville. Les vers ont des longueurs très différentes et ne riment pas régulièrement, mais l'appel « Rappelle-toi Barbara », repris comme un refrain, et la musique de la phrase font un poème.",
                "Ne confondez pas avec les « vers libres » des Fables de La Fontaine : ce sont des vers mêlés, de longueurs variées, mais toujours mesurés et rimés. On rencontre aussi le verset (Paul Claudel, Saint-John Perse), long vers proche du paragraphe, à la manière des versets de la Bible.",
              ],
              box: { label: "Définition", text: "Le vers libre est un vers sans mètre fixe ni rime régulière. Il conserve le retour à la ligne, qui crée le rythme et met des mots en relief." },
            },
            {
              heading: "Le poème en prose",
              paragraphs: [
                "Le poème en prose est un texte court, écrit en paragraphes, sans vers, mais qui forme un tout et travaille la langue comme un poème : images, rythme, répétitions, sonorités. Il ne cherche ni à raconter une longue histoire ni à démontrer quelque chose : il vaut pour lui-même.",
                "Aloysius Bertrand en est considéré comme l'inventeur avec Gaspard de la Nuit (1842). Baudelaire, qui dit l'avoir lu au moins vingt fois, publie ses Petits poèmes en prose, réunis après sa mort sous le titre Le Spleen de Paris (1869). Le premier, « L'Étranger », est un court dialogue : un homme mystérieux n'aime ni sa famille, ni sa patrie, ni l'or, mais seulement « les merveilleux nuages ». Viennent ensuite les Illuminations de Rimbaud (1886) et, au XXe siècle, Francis Ponge, Henri Michaux ou René Char.",
                "On retient souvent trois critères : la brièveté (le texte est court et dense), l'unité (il forme un ensemble autonome, souvent avec une chute) et la gratuité (il ne sert pas à informer ni à raconter, mais à faire éprouver).",
              ],
              box: { label: "À retenir", text: "Poème en prose : un texte bref, en paragraphes, qui forme un tout et travaille images, rythme et sonorités. Repères : Bertrand, Gaspard de la Nuit (1842) ; Baudelaire, Le Spleen de Paris (1869) ; Rimbaud, Illuminations (1886)." },
            },
            {
              heading: "Jouer avec la page : le calligramme",
              paragraphs: [
                "Certains poètes vont plus loin et font de la disposition du texte une image. Dans Calligrammes (1918), Apollinaire dessine avec les lettres : dans « Il pleut », les vers tombent en lignes verticales, comme des filets de pluie. Le poème se lit et se regarde à la fois.",
                "Toutes ces formes montrent la même chose : la poésie ne tient pas à une règle extérieure (la rime, le nombre de syllabes), mais à un travail de la langue qui renouvelle notre regard. Pour reconnaître un poème en prose, ne cherchez donc pas des vers : cherchez la densité des images, le rythme des phrases et l'unité du texte.",
              ],
            },
          ],
          keyPoints: [
            "Vers régulier : mètre fixe, rimes, strophes. Vers libre : ni mètre fixe ni rime régulière, mais retour à la ligne.",
            "Le vers libre apparaît à la fin du XIXe siècle et domine au XXe (Apollinaire, Prévert).",
            "Poème en prose : bref, en paragraphes, formant un tout, travaillant images, rythme et sons.",
            "Repères : Bertrand (1842), Baudelaire, Le Spleen de Paris (1869), Rimbaud, Illuminations (1886), Ponge (1942).",
            "Calligramme : poème dont la disposition dessine une image (Apollinaire, 1918).",
            "Les « vers libres » de La Fontaine sont des vers mêlés, mesurés et rimés.",
          ],
          example: {
            statement: "Montrez que ce début de poème, écrit pour l'exercice à la manière de Prévert, est en vers libres : « Souviens-toi de la gare / Le train partait sous la neige d'un matin de décembre / Et tu riais ».",
            solution: [
              "Étape 1 · Observer la longueur des vers : « Souviens-toi de la gare » compte 6 syllabes, « Le train partait sous la neige d'un matin de décembre » en compte 14, et « Et tu riais » seulement 4. Le nombre de syllabes varie : il n'y a pas de mètre fixe.",
              "Étape 2 · Observer les rimes : « gare », « décembre » et « riais » ne riment pas entre eux : il n'y a pas de système de rimes.",
              "Étape 3 · Observer la ponctuation : il n'y en a pas, c'est le retour à la ligne qui crée les pauses et isole « Et tu riais ».",
              "Étape 4 · Repérer ce qui fait poème : l'adresse à un « tu » (« Souviens-toi »), qui pourrait revenir comme un refrain, l'opposition entre la neige froide et le rire, et le rythme qui suit le souvenir.",
              "Réponse : ce sont des vers libres, car ils n'ont ni mètre fixe ni rimes régulières, mais gardent le retour à la ligne et une musique propre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque description, indiquez s'il s'agit de vers réguliers, de vers libres ou d'un poème en prose : a) Quatorze alexandrins rimés en deux quatrains et deux tercets. b) Un texte de trois paragraphes, sans retour à la ligne, plein d'images et terminé par une phrase surprenante. c) Des lignes de longueurs très inégales, sans rimes régulières ni ponctuation.",
              hint: "Posez-vous deux questions : y a-t-il des retours à la ligne qui ne correspondent pas à la fin d'un paragraphe ? Si oui, le nombre de syllabes est-il fixe ?",
              solution: [
                "a) Mètre fixe (12 syllabes), rimes, forme fixe : vers réguliers (c'est un sonnet).",
                "b) Paragraphes sans vers, mais images, unité et chute : poème en prose.",
                "c) Retours à la ligne sans mètre fixe ni rimes régulières : vers libres.",
                "Réponse : a) vers réguliers ; b) poème en prose ; c) vers libres.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce court poème en prose, écrit pour l'exercice : « Le matin, la ville ouvre un œil. Les volets claquent comme des paupières lourdes, les rues bâillent, et la première rame de métro passe en grondant sous les trottoirs, vieille bête qui se réveille. Puis la lumière arrive, tranquille, et efface la nuit d'un seul coup d'éponge. » Relevez trois éléments qui en font un poème et non un simple récit.",
              hint: "Cherchez des images (personnification, comparaison, métaphore), un travail du rythme et un effet de fin.",
              solution: [
                "Les images : la ville est personnifiée (« ouvre un œil », « les rues bâillent ») ; comparaison des volets à des « paupières lourdes » ; métaphore du métro, « vieille bête qui se réveille », et de la lumière qui « efface la nuit d'un seul coup d'éponge ».",
                "Le rythme : une énumération de propositions courtes (« Les volets claquent..., les rues bâillent, et la première rame... ») imite le réveil progressif ; la virgule autour de « tranquille » ralentit la dernière phrase.",
                "L'unité et la brièveté : le texte est court, centré sur un seul moment (le réveil de la ville), et se termine par une image finale qui le referme.",
                "Réponse : ce texte ne raconte pas une histoire, il fait voir la ville autrement grâce aux images, au rythme et à son unité.",
              ],
            },
            {
              level: 3,
              statement: "Sujet d'écriture (type brevet) : rédigez un poème en prose d'une dizaine de lignes intitulé « La pluie sur le collège ». Vous respecterez les caractéristiques du genre : brièveté, unité, au moins trois images poétiques variées, un travail sur le rythme ou les sonorités, et une phrase finale qui frappe.",
              hint: "Choisissez un seul moment, observez-le avec les cinq sens, trouvez des images, puis gardez pour la fin une image ou une idée surprenante.",
              solution: [
                "Étape 1 · Délimiter le moment : une averse pendant un cours, vue par la fenêtre.",
                "Étape 2 · Chercher des images : la pluie personnifiée qui frappe aux vitres comme un élève en retard ; la cour transformée en lac ; les parapluies comme des champignons.",
                "Étape 3 · Travailler les sons : allitération en [p] et [t] pour imiter les gouttes (« la pluie picore, tapote, piétine »).",
                "Étape 4 · Rédiger. Exemple : « La pluie arrive en retard, comme toujours. Elle frappe aux vitres, picore, tapote, piétine, mais personne ne lui ouvre. Alors elle s'installe dans la cour, qui devient un lac gris où flottent des feuilles mortes. À midi, les parapluies poussent d'un coup, champignons noirs et rouges. Et quand la sonnerie retentit, la pluie s'en va, sans avoir rien appris. »",
                "Étape 5 · Vérifier : texte bref et centré sur un moment, images variées (personnification, métaphore, comparaison), allitération, chute humoristique. Réponse attendue : un poème en prose complet et relu.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion ou œuvre à sa description.",
            pairs: [
              { left: "Vers libre", right: "Sans mètre fixe ni rime régulière, mais avec retour à la ligne" },
              { left: "Poème en prose", right: "Texte bref en paragraphes, qui forme un tout" },
              { left: "Gaspard de la Nuit", right: "Aloysius Bertrand, 1842" },
              { left: "Le Spleen de Paris", right: "Baudelaire, publié en 1869" },
              { left: "Calligramme", right: "Poème dont la disposition dessine une image" },
              { left: "Verset", right: "Long vers proche du paragraphe (Claudel, Saint-John Perse)" },
            ],
          },
          quiz: [
            { q: "Qu'est-ce qui distingue le vers libre du poème en prose ?", options: ["La présence de rimes", "Le nombre de syllabes", "Les images", "Le retour à la ligne"], answer: 3, why: "Le vers libre garde le retour à la ligne ; le poème en prose s'écrit en paragraphes." },
            { q: "Qui est considéré comme l'inventeur du poème en prose en France ?", options: ["Ronsard", "Aloysius Bertrand", "Prévert", "La Fontaine"], answer: 1, why: "Gaspard de la Nuit (1842) d'Aloysius Bertrand est le modèle revendiqué par Baudelaire." },
            { q: "Quel critère ne caractérise pas le poème en prose ?", options: ["La brièveté", "L'unité", "Le mètre fixe", "La gratuité"], answer: 2, why: "Le poème en prose n'a pas de vers, donc pas de mètre ; il est bref, unifié et gratuit." },
            { q: "Dans quel recueil Apollinaire supprime-t-il toute ponctuation ?", options: ["Alcools", "Paroles", "Les Fleurs du mal", "Les Contemplations"], answer: 0, why: "Dans Alcools (1913), c'est le rythme du vers qui remplace la ponctuation." },
            { q: "Les « vers libres » des Fables de La Fontaine sont...", options: ["des vers sans rimes", "des vers sans mètre", "des vers mêlés, mesurés et rimés", "des poèmes en prose"], answer: 2, why: "La Fontaine varie la longueur de ses vers, mais chacun est mesuré et rimé." },
          ],
          trap: "Croire qu'un texte sans rimes ni vers n'est pas un poème : le poème en prose est un poème à part entière, qui se reconnaît à ses images, à son rythme et à son unité.",
          method: "Face à un texte, posez trois questions dans l'ordre : y a-t-il des retours à la ligne ? Le nombre de syllabes est-il fixe ? Y a-t-il des rimes ? Les réponses suffisent à classer le texte, avant d'analyser images et rythme.",
        },
      ],
    },
    /* ==================================================================== */
    /* ORTHOGRAPHE ET LEXIQUE                                                 */
    /* ==================================================================== */
    {
      id: 'orthographe-lexique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'accord-participe-passe',
          title: "L'accord du participe passé",
          minutes: 35,
          objectives: [
            "Accorder le participe passé employé seul, avec l'auxiliaire être et avec l'auxiliaire avoir.",
            "Identifier le COD et sa place pour accorder le participe passé employé avec avoir.",
            "Appliquer les règles d'accord aux verbes pronominaux les plus courants.",
            "Justifier un accord dans une dictée ou une réécriture du brevet.",
          ],
          course: [
            {
              heading: "Reconnaître le participe passé et sa terminaison",
              paragraphs: [
                "Le participe passé est une forme du verbe qui sert à former les temps composés (« j'ai chanté », « elle est venue ») et la voix passive (« il a été félicité »). Il peut aussi être employé seul, comme un adjectif (« une porte fermée »).",
                "Sa terminaison au masculin singulier dépend du verbe : -é pour les verbes en -er (chanté), -i (fini, parti), -u (vu, venu), -s (pris, mis, assis), -t (fait, dit, peint). Pour trouver la bonne lettre muette finale, mettez le participe au féminin : « prise » donne « pris », « faite » donne « fait », « mise » donne « mis ».",
                "Pour distinguer le participe passé en -é de l'infinitif en -er, remplacez le verbe par un verbe du 3e groupe comme « vendre » : « il a mangé » devient « il a vendu » (participe), « il va manger » devient « il va vendre » (infinitif).",
              ],
            },
            {
              heading: "Employé seul ou avec l'auxiliaire être",
              paragraphs: [
                "Employé seul, le participe passé s'accorde comme un adjectif, en genre et en nombre avec le nom auquel il se rapporte : « des fleurs fanées », « une lettre écrite à la main », « Arrivées en retard, elles ont manqué le début. »",
                "Employé avec l'auxiliaire être, il s'accorde avec le sujet du verbe : « Elles sont parties. » ; « Les vacances sont terminées. » C'est aussi le cas à la voix passive : « Les élèves ont été félicités par le principal. » Attention : le participe « été » est toujours invariable.",
              ],
              box: { label: "Règle", text: "Le participe passé employé seul s'accorde avec le nom auquel il se rapporte. Employé avec être, il s'accorde en genre et en nombre avec le sujet. « Été » est toujours invariable." },
            },
            {
              heading: "Employé avec l'auxiliaire avoir",
              paragraphs: [
                "Employé avec avoir, le participe passé ne s'accorde jamais avec le sujet. Il s'accorde avec le complément d'objet direct (COD) seulement si celui-ci est placé avant le verbe. Pour trouver le COD, posez la question « qui ? » ou « quoi ? » après le verbe.",
                "Comparez : « J'ai cueilli des fleurs » (cueilli quoi ? des fleurs, placé après : pas d'accord). « Les fleurs que j'ai cueillies » (le COD est « que », mis pour « les fleurs », placé avant : accord au féminin pluriel). « Ces fleurs, je les ai cueillies » (« les », placé avant). « Quelles fleurs avez-vous cueillies ? » (COD placé avant dans une interrogation).",
                "S'il n'y a pas de COD, le participe reste invariable : « Elles ont couru. » ; « Ils ont dormi. » Avec le pronom « en », il reste aussi invariable : « Des fleurs, j'en ai cueilli. » Enfin, « fait » suivi d'un infinitif ne s'accorde jamais : « Elle s'est fait couper les cheveux. »",
              ],
              box: { label: "Règle", text: "Avec avoir, le participe passé s'accorde avec le COD si celui-ci est placé avant le verbe (pronom « que », pronoms le, la, l', les, me, nous, vous, ou interrogation). Sinon, il reste invariable." },
            },
            {
              heading: "Le cas des verbes pronominaux",
              paragraphs: [
                "Un verbe pronominal se conjugue avec un pronom réfléchi (me, se, nous, vous) et l'auxiliaire être aux temps composés. Les verbes qui n'existent qu'à la forme pronominale (s'enfuir, se souvenir, s'évanouir, s'absenter) s'accordent avec le sujet : « Elles se sont enfuies. » ; « Elle s'est souvenue de tout. »",
                "Pour les autres, une astuce : remplacez mentalement être par avoir et cherchez le COD. « Elle s'est lavée » : elle a lavé qui ? « se », c'est-à-dire elle-même, placé avant : accord. « Elle s'est lavé les mains » : elle a lavé quoi ? « les mains », placé après : pas d'accord. « Ils se sont parlé » : on parle « à » quelqu'un, « se » n'est pas COD : pas d'accord.",
              ],
              box: { label: "À retenir", text: "Verbes seulement pronominaux : accord avec le sujet. Autres verbes pronominaux : remplacer être par avoir et accorder avec le COD s'il est placé avant (« elle s'est lavée », mais « elle s'est lavé les mains »)." },
            },
          ],
          keyPoints: [
            "Mettre le participe au féminin pour trouver sa lettre finale : prise, pris ; faite, fait.",
            "Employé seul : accord avec le nom (des portes fermées).",
            "Avec être : accord avec le sujet (elles sont parties) ; « été » reste invariable.",
            "Avec avoir : jamais avec le sujet ; accord avec le COD seulement s'il est placé avant (les fleurs que j'ai cueillies).",
            "Pas de COD, ou pronom « en » : participe invariable (elles ont couru ; j'en ai cueilli).",
            "Verbes pronominaux : remplacer être par avoir et chercher le COD (elle s'est lavée, elle s'est lavé les mains).",
          ],
          example: {
            statement: "Corrigez et justifiez : « Les lettres que vous avez écrit sont arrivé hier. »",
            solution: [
              "Étape 1 · Repérer les participes passés : « écrit » (avec avoir) et « arrivé » (avec être).",
              "Étape 2 · « avez écrit » : auxiliaire avoir. On cherche le COD : vous avez écrit quoi ? « que », mis pour « les lettres », féminin pluriel. Il est placé avant le verbe, donc on accorde : « écrites ».",
              "Étape 3 · « sont arrivé » : auxiliaire être. On cherche le sujet : qu'est-ce qui est arrivé ? « Les lettres », féminin pluriel. On accorde : « arrivées ».",
              "Réponse : « Les lettres que vous avez écrites sont arrivées hier. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez correctement le participe passé du verbe entre parenthèses : a) Les vacances sont (terminer). b) Ils ont (prendre) le train. c) La chanson que nous avons (entendre) était belle. d) Cette robe, je l'ai (acheter) en solde. e) Des fleurs (cueillir) le matin.",
              hint: "Repérez d'abord l'auxiliaire : être, avoir, ou aucun. Avec avoir, cherchez le COD et sa place.",
              solution: [
                "a) Auxiliaire être, sujet « les vacances » (féminin pluriel) : terminées.",
                "b) Auxiliaire avoir, COD « le train » placé après : pris (invariable).",
                "c) Auxiliaire avoir, COD « que » mis pour « la chanson » (féminin singulier), placé avant : entendue.",
                "d) Auxiliaire avoir, COD « l' » mis pour « cette robe », placé avant : achetée.",
                "e) Employé seul, il s'accorde avec « fleurs » : cueillies.",
                "Réponse : terminées, pris, entendue, achetée, cueillies.",
              ],
            },
            {
              level: 2,
              statement: "Accordez les participes passés et justifiez chaque accord : « Mes cousines sont (venir) dimanche. Elles nous ont (apporter) des gâteaux ; nous en avons (manger) beaucoup. Les photos qu'elles ont (prendre) ont (être) (publier) sur le site de la famille. »",
              hint: "Attention à trois pièges : le pronom « en », le participe « été », et le COD placé après le verbe.",
              solution: [
                "« sont venues » : auxiliaire être, accord avec le sujet « mes cousines » (féminin pluriel).",
                "« ont apporté » : auxiliaire avoir, COD « des gâteaux » placé après (« nous » est COI : apporter à nous) : invariable.",
                "« en avons mangé » : avec le pronom « en », le participe reste invariable.",
                "« qu'elles ont prises » : COD « que », mis pour « les photos » (féminin pluriel), placé avant : accord.",
                "« ont été publiées » : « été » est invariable ; « publiées » est à la voix passive, il s'accorde avec le sujet « les photos ».",
                "Réponse : venues, apporté, mangé, prises, été, publiées.",
              ],
            },
            {
              level: 3,
              statement: "Réécriture (type brevet) : réécrivez le passage en remplaçant « il » par « elles » et faites toutes les modifications nécessaires. « Il est arrivé tôt. Il s'est assis près de la fenêtre et il a sorti le livre qu'on lui avait offert. Puis il s'est rappelé la lettre qu'il avait reçue. »",
              hint: "Repérez chaque participe passé et son auxiliaire. Pour les verbes pronominaux, remplacez être par avoir et cherchez le COD : est-il placé avant ou après ?",
              solution: [
                "« Il est arrivé » : être, accord avec le nouveau sujet « elles » : « Elles sont arrivées ».",
                "« Il s'est assis » : s'asseoir, « se » est COD placé avant (elles ont assis elles-mêmes) : « Elles se sont assises ».",
                "« il a sorti le livre » : avoir, COD placé après : « elles ont sorti » (invariable). « qu'on lui avait offert » : le COD « que » reprend « le livre » (masculin singulier), qui ne change pas ; seul « lui » devient « leur » : « qu'on leur avait offert ».",
                "« il s'est rappelé la lettre » : elles ont rappelé quoi ? « la lettre », COD placé après : « elles se sont rappelé la lettre » (invariable). « qu'il avait reçue » : le COD reste « la lettre » : « qu'elles avaient reçue ».",
                "Réponse : « Elles sont arrivées tôt. Elles se sont assises près de la fenêtre et elles ont sorti le livre qu'on leur avait offert. Puis elles se sont rappelé la lettre qu'elles avaient reçue. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la méthode pour accorder un participe passé employé avec avoir.",
            items: [
              "Repérer le participe passé et vérifier que l'auxiliaire est avoir.",
              "Poser la question « qui ? » ou « quoi ? » après le verbe pour trouver le COD.",
              "Vérifier qu'il existe un COD (sinon, le participe reste invariable).",
              "Regarder si le COD est placé avant ou après le verbe.",
              "S'il est placé avant, trouver son genre et son nombre (antécédent de « que », nom repris par le pronom).",
              "Écrire la terminaison accordée et vérifier la lettre finale en mettant au féminin.",
            ],
          },
          quiz: [
            { q: "« Elles sont ... » (partir)", options: ["parti", "parties", "partis", "partit"], answer: 1, why: "Avec être, le participe s'accorde avec le sujet « elles » (féminin pluriel)." },
            { q: "« Les pommes que j'ai ... » (manger)", options: ["mangées", "mangé", "mangés", "manger"], answer: 0, why: "Le COD « que » (les pommes, féminin pluriel) est placé avant l'auxiliaire avoir : accord." },
            { q: "« Des histoires, j'en ai ... » (lire)", options: ["lues", "lus", "lu", "lue"], answer: 2, why: "Avec le pronom « en », le participe passé employé avec avoir reste invariable." },
            { q: "Quelle phrase est correcte ?", options: ["Elle s'est lavée les mains.", "Elles ont parties.", "Ils se sont parlés.", "Elle s'est lavé les mains."], answer: 3, why: "Le COD « les mains » est placé après le verbe : le participe reste invariable." },
            { q: "« Les élèves ont ... récompensés. » (être)", options: ["étés", "été", "était", "êtes"], answer: 1, why: "Le participe passé « été » est toujours invariable." },
          ],
          trap: "Accorder le participe passé employé avec avoir avec le sujet (« elles ont mangées »), ou oublier l'accord quand le COD est placé avant (« la lettre que j'ai écrit »).",
          method: "Devant chaque participe passé, entourez l'auxiliaire. Avec être, fléchez vers le sujet ; avec avoir, posez « qui ? » ou « quoi ? » et fléchez vers le COD : n'accordez que si la flèche remonte vers la gauche.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'homophones-grammaticaux',
          title: "Les homophones grammaticaux",
          minutes: 30,
          objectives: [
            "Distinguer les principaux homophones grammaticaux par leur classe grammaticale.",
            "Utiliser un test de substitution pour choisir la bonne orthographe.",
            "Distinguer les terminaisons verbales homophones en [e] : -é, -er, -ez, -ait.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un homophone grammatical ?",
              paragraphs: [
                "Des homophones sont des mots qui se prononcent de la même façon mais s'écrivent différemment et n'ont pas le même sens. Les homophones grammaticaux sont de petits mots très fréquents (a et à, et et est, son et sont...) qui n'appartiennent pas à la même classe grammaticale : verbe, préposition, déterminant, pronom, conjonction.",
                "À l'oral, rien ne les distingue. À l'écrit, la bonne orthographe dépend du rôle du mot dans la phrase. La méthode la plus sûre est le test de substitution : on remplace le mot par un autre qui ne se prononce pas de la même façon. Si la phrase garde son sens, on a trouvé la bonne forme.",
              ],
              box: { label: "Méthode", text: "Pour choisir entre deux homophones, remplacez le mot par un équivalent qui s'entend différemment (avait, était, avaient, mon, il, cela...). Si la phrase reste correcte, l'orthographe est la bonne." },
            },
            {
              heading: "Les homophones liés aux verbes avoir et être",
              paragraphs: [
                "a / à : « a » est le verbe avoir, remplaçable par « avait » (« Il a faim », « Il avait faim ») ; « à » est une préposition (« Il va à Paris »). et / est : « et » est une conjonction de coordination, remplaçable par « et puis » ; « est » est le verbe être, remplaçable par « était ».",
                "son / sont : « son » est un déterminant possessif, remplaçable par « mon » (« son livre ») ; « sont » est le verbe être, remplaçable par « étaient ». on / ont : « on » est un pronom sujet, remplaçable par « il » (« On chante ») ; « ont » est le verbe avoir, remplaçable par « avaient » (« Ils ont chanté »).",
                "ou / où : « ou » marque le choix, remplaçable par « ou bien » (« du thé ou du café ») ; « où » indique le lieu ou le temps (« la ville où je suis né », « le jour où il est venu ») et ne peut pas être remplacé par « ou bien ».",
              ],
            },
            {
              heading: "Déterminants et pronoms",
              paragraphs: [
                "ce / se : « ce » est un déterminant devant un nom (« ce livre ») ou un pronom (« ce que je veux », « c'est ») ; « se » est un pronom réfléchi placé devant un verbe, remplaçable par « me » en changeant de personne (« il se lave », « je me lave »).",
                "ces / ses / c'est / s'est : « ces » est un démonstratif (« ces livres-là ») ; « ses » est un possessif (« les siens » : « ses livres ») ; « c'est » signifie « cela est » ; « s'est » est le pronom « se » suivi de l'auxiliaire être, devant un participe passé (« il s'est levé », « je me suis levé »).",
                "la / l'a / là : « la » est un article ou un pronom (« la porte », « je la vois ») ; « l'a » se remplace par « l'avait » (« il l'a vue ») ; « là » indique le lieu (« là-bas »). sa / ça : « sa » se remplace par « ma », « ça » par « cela ». quel(le)(s) / qu'elle(s) : « qu'elle » se remplace par « qu'il » (« Je crois qu'elle viendra »).",
                "leur / leurs : devant un verbe, « leur » est un pronom personnel, pluriel de « lui », toujours invariable (« Je leur parle ») ; devant un nom, c'est un déterminant possessif qui s'accorde (« leurs cahiers », « leur maison »).",
              ],
            },
            {
              heading: "Les terminaisons en [e] et autres pièges",
              paragraphs: [
                "Après un verbe, une préposition (à, de, pour, sans) ou un auxiliaire, le son [e] pose problème. Remplacez par un verbe du 3e groupe comme « vendre » : si l'on dit « vendre », c'est l'infinitif en -er (« il faut manger », « il faut vendre ») ; si l'on dit « vendu », c'est le participe passé en -é (« il a mangé », « il a vendu »). La terminaison -ez correspond à « vous » (« vous mangez »), et -ait à l'imparfait (« il mangeait »).",
                "peu / peut / peux : « peu » est un adverbe, contraire de « beaucoup » ; « peut » et « peux » sont le verbe pouvoir, remplaçables par « pouvait ». ni / n'y : « n'y » se remplace par « ne... pas là » (« Il n'y va pas »). quand / quant / qu'en : « quand » signifie « lorsque », « quant à » signifie « en ce qui concerne », « qu'en » est « que » suivi de « en ». sans / s'en : « sans » est une préposition, « s'en » se remplace par « m'en » (« il s'en va », « je m'en vais »).",
              ],
              box: { label: "À retenir", text: "a : avait ; et : et puis ; est : était ; son : mon ; sont : étaient ; on : il ; ont : avaient ; ou : ou bien ; se : me ; c'est : cela est ; s'est : me suis ; leur pronom invariable devant un verbe ; -er : vendre ; -é : vendu." },
            },
          ],
          keyPoints: [
            "Les homophones grammaticaux se prononcent pareil mais n'ont pas la même classe grammaticale.",
            "Test de substitution : a/avait, est/était, sont/étaient, ont/avaient, son/mon, on/il, ou/ou bien.",
            "se/me devant un verbe ; c'est = cela est ; s'est devant un participe passé ; ces/ses : ces livres-là, les siens.",
            "« leur » devant un verbe est un pronom invariable ; devant un nom, il s'accorde (leurs cahiers).",
            "-er ou -é : remplacer par vendre (infinitif) ou vendu (participe passé).",
            "quand = lorsque ; quant à = en ce qui concerne ; peu = contraire de beaucoup ; peut = pouvait.",
          ],
          example: {
            statement: "Choisissez la bonne forme et justifiez : « Ils (on / ont) décidé de (leur / leurs) offrir un cadeau (quand / quant) ils (son / sont) arrivés. »",
            solution: [
              "Étape 1 · « on / ont » : on peut dire « Ils avaient décidé ». C'est le verbe avoir : « ont ».",
              "Étape 2 · « leur / leurs » : le mot est placé devant le verbe « offrir » ; c'est le pronom personnel, pluriel de « lui » (« offrir à eux »). Il est invariable : « leur ».",
              "Étape 3 · « quand / quant » : on peut dire « lorsqu'ils sont arrivés ». C'est la conjonction « quand ».",
              "Étape 4 · « son / sont » : on peut dire « ils étaient arrivés ». C'est le verbe être : « sont ».",
              "Réponse : « Ils ont décidé de leur offrir un cadeau quand ils sont arrivés. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec l'homophone qui convient : a) Il (a / à) offert un livre (a / à) sa sœur. b) Le ciel (et / est) gris (et / est) le vent souffle. c) (On / Ont) dit qu'ils (on / ont) gagné. d) Ses amis (son / sont) venus avec (son / sont) frère.",
              hint: "Remplacez par avait, était, il, avaient ou mon, et voyez si la phrase garde un sens.",
              solution: [
                "a) « Il avait offert » : a. « avait sa sœur » est impossible : préposition à. Il a offert un livre à sa sœur.",
                "b) « Le ciel était gris » : est. « et puis le vent souffle » : et. Le ciel est gris et le vent souffle.",
                "c) « Il dit » : On. « qu'ils avaient gagné » : ont. On dit qu'ils ont gagné.",
                "d) « Ses amis étaient venus » : sont. « avec mon frère » : son. Ses amis sont venus avec son frère.",
                "Réponse : a, à ; est, et ; On, ont ; sont, son.",
              ],
            },
            {
              level: 2,
              statement: "Complétez et justifiez : a) Il (c'est / s'est) souvenu de (ces / ses) propres grands-parents en relisant (ces / ses) lettres-là. b) Je (leur / leurs) ai rendu (leur / leurs) cahiers. c) (Quelle / Qu'elle) chance (quelle / qu'elle) soit venue ! d) Il (ce / se) demande si (ce / se) film est bon.",
              hint: "Pour s'est, essayez « je me suis » ; pour ces, ajoutez « -là » ; pour leur devant un verbe, essayez « lui » ; pour qu'elle, essayez « qu'il ».",
              solution: [
                "a) « je me suis souvenu » : s'est. « ses propres grands-parents » (les siens) : ses. « ces lettres-là » (démonstratif) : ces.",
                "b) « Je lui ai rendu » : leur, pronom invariable. « leurs cahiers » : déterminant possessif devant un nom pluriel, accordé.",
                "c) « Quelle chance » : déterminant exclamatif accordé avec « chance ». « qu'il soit venu » est possible : qu'elle.",
                "d) « je me demande » : se. « ce film » : déterminant devant un nom.",
                "Réponse : s'est, ses, ces ; leur, leurs ; Quelle, qu'elle ; se, ce.",
              ],
            },
            {
              level: 3,
              statement: "Dictée corrigée (type brevet) : ce texte contient sept erreurs d'homophones ou de terminaisons. Retrouvez-les et corrigez-les en justifiant. « Quand il sait levé, il a voulu manger, mais il n'y avait plus rien a manger. Ces parents lui ont dit qu'il pouvait allé à la boulangerie ou se trouve son ami. Il est partit sans parapluie, et il c'est fait tremper. »",
              hint: "Vérifiez chaque petit mot avec un test de substitution, et chaque terminaison en [e] avec « vendre / vendu ». Pensez aussi aux participes passés en -i ou -is.",
              solution: [
                "1. « il sait levé » : verbe pronominal se lever au passé composé (« je me suis levé ») : « il s'est levé ».",
                "2. « rien a manger » : on ne peut pas dire « rien avait manger » ; préposition : « rien à manger ».",
                "3. « Ces parents » : il s'agit de ses parents à lui (les siens) : « Ses parents ».",
                "4. « pouvait allé » : après « pouvait », on dirait « pouvait vendre » : infinitif « aller ».",
                "5. « ou se trouve son ami » : on ne peut pas dire « ou bien se trouve » ; il s'agit du lieu : « où ».",
                "6. « Il est partit » : participe passé de partir, avec être, sujet masculin singulier : « parti » (féminin « partie », donc pas de t).",
                "7. « il c'est fait tremper » : verbe pronominal (« je me suis fait tremper ») : « il s'est fait tremper » (« fait » suivi d'un infinitif reste invariable).",
                "Réponse : « Quand il s'est levé, il a voulu manger, mais il n'y avait plus rien à manger. Ses parents lui ont dit qu'il pouvait aller à la boulangerie où se trouve son ami. Il est parti sans parapluie, et il s'est fait tremper. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : maîtrisez-vous les homophones ?",
            statements: [
              { text: "Dans « Je leur ai parlé », « leur » pourrait prendre un s.", true: false, why: "Devant un verbe, « leur » est un pronom personnel, toujours invariable." },
              { text: "« Il a mangé » : on peut remplacer « a » par « avait », c'est donc le verbe avoir.", true: true, why: "« Il avait mangé » est correct : le test de substitution confirme le verbe avoir." },
              { text: "Dans « la ville ou je suis né », il faut écrire « ou » sans accent.", true: false, why: "Il s'agit du lieu, on ne peut pas dire « ou bien » : il faut « où »." },
              { text: "« Il s'est levé » s'écrit avec s', car on peut dire « je me suis levé ».", true: true, why: "C'est le pronom réfléchi se suivi de l'auxiliaire être." },
              { text: "« Il faut mangé » est correct, car on entend [e].", true: false, why: "On dirait « il faut vendre » : c'est l'infinitif, « il faut manger »." },
              { text: "« Quant à moi » s'écrit avec un t, car il signifie « en ce qui me concerne ».", true: true, why: "« Quant à » signifie « en ce qui concerne » ; « quand » signifie « lorsque »." },
              { text: "« Son » et « sont » appartiennent à la même classe grammaticale.", true: false, why: "« Son » est un déterminant possessif, « sont » est le verbe être." },
            ],
          },
          quiz: [
            { q: "« Il ... allé à la plage. » Quelle forme convient ?", options: ["c'est", "ses", "s'est", "est"], answer: 3, why: "On peut dire « il était allé » : c'est le verbe être, « est ». « S'est » exigerait un verbe pronominal." },
            { q: "« Elles ... pris le bus. »", options: ["on", "ont", "son", "sont"], answer: 1, why: "« Elles avaient pris le bus » : c'est le verbe avoir, « ont »." },
            { q: "« Je ... ai donné rendez-vous. »", options: ["leur", "leurs", "l'heure"], answer: 0, why: "Devant le verbe, « leur » est le pronom personnel (pluriel de « lui ») et reste invariable." },
            { q: "« Il a fini de ... »", options: ["mangé", "manger", "mangez", "mangeait"], answer: 1, why: "Après la préposition « de », on dirait « de vendre » : c'est l'infinitif." },
            { q: "« ... à lui, il refuse. »", options: ["Quant", "Quand", "Qu'en", "Camp"], answer: 0, why: "« Quant à lui » signifie « en ce qui le concerne »." },
          ],
          trap: "Choisir l'orthographe « au son » ou à l'intuition au lieu de faire le test de substitution, surtout pour -é / -er et pour « leur » devant un verbe.",
          method: "En relisant une dictée, faites une passe spéciale « homophones » : soulignez chaque petit mot piège (a, et, son, on, ou, ce, ces, leur) et chaque terminaison en [e], puis appliquez à chacun son test de substitution.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'formation-mots-etymologie',
          title: "La formation des mots et l'étymologie",
          minutes: 30,
          objectives: [
            "Identifier le radical, les préfixes et les suffixes d'un mot dérivé.",
            "Distinguer dérivation et composition, et regrouper des mots en familles.",
            "Utiliser l'étymologie latine et grecque pour comprendre le sens d'un mot inconnu et justifier son orthographe.",
          ],
          course: [
            {
              heading: "La dérivation : radical, préfixe, suffixe",
              paragraphs: [
                "Beaucoup de mots sont construits à partir d'un autre. Le radical porte le sens principal ; on peut lui ajouter un préfixe (avant le radical) ou un suffixe (après). Ce procédé s'appelle la dérivation. Par exemple, « imprévisible » se décompose en im- (contraire) + pré- (avant) + vis (voir) + -ible (qui peut être) : « qui ne peut pas être vu à l'avance ».",
                "Le préfixe modifie le sens sans changer la classe du mot : in-, im-, il-, ir- (contraire : inutile, illisible, irréel), re-, ré- (répétition : refaire), dé-, dés- (contraire ou séparation : défaire), pré- (avant), anti- (contre), sur- (au-dessus, excès), mal-, mé- (mal : malhonnête, mécontent), co-, con-, com- (avec), inter- (entre), trans- (à travers).",
                "Le suffixe, lui, change souvent la classe du mot : -ment forme des adverbes (lentement), -tion et -age des noms (création, lavage), -able et -ible des adjectifs (lavable), -eur des noms d'agent (chanteur). Certains suffixes apportent une nuance : -ette, -et (diminutif : maisonnette), -âtre (péjoratif ou approximatif : rougeâtre).",
              ],
              box: { label: "Définition", text: "Dérivation : formation d'un mot nouveau par l'ajout d'un préfixe et/ou d'un suffixe à un radical. Tous les mots formés sur un même radical constituent une famille de mots (terre, terrien, terrestre, atterrir, enterrer, territoire)." },
            },
            {
              heading: "La composition et les autres procédés",
              paragraphs: [
                "La composition assemble deux mots ou plus pour en former un nouveau : « porte-monnaie », « arc-en-ciel », « pomme de terre », « portefeuille ». La composition savante assemble des racines grecques ou latines : « thermomètre » (chaleur + mesure), « biologie » (vie + science).",
                "D'autres procédés enrichissent le lexique : le mot-valise fusionne deux mots (« courriel », de courrier et électronique) ; la troncation raccourcit un mot (« télé », « prof », « vélo ») ; le sigle est formé d'initiales (SNCF) ; l'emprunt vient d'une autre langue (« week-end » de l'anglais, « balcon » de l'italien, « algèbre » de l'arabe). Enfin, le néologisme est un mot nouvellement créé.",
              ],
            },
            {
              heading: "L'étymologie : l'histoire des mots",
              paragraphs: [
                "L'étymologie étudie l'origine des mots. La plupart des mots français viennent du latin parlé, qui s'est transformé lentement pendant des siècles : c'est la formation populaire. Le latin « aqua » est ainsi devenu « eau ». D'autres mots ont été empruntés plus tard directement au latin écrit par les savants : c'est la formation savante. « Aquatique » vient du même mot « aqua », mais il est resté très proche de sa forme latine.",
                "Ces deux voies ont parfois produit deux mots différents à partir d'un même mot latin : on les appelle des doublets. « Hôtel » (populaire) et « hôpital » (savant) viennent de « hospitale » ; « frêle » et « fragile » de « fragilis » ; « écouter » et « ausculter » de « auscultare » ; « poison » et « potion » de « potio ». Le mot savant est souvent plus technique.",
                "Le français a aussi emprunté au grec ancien, surtout pour les sciences, et à de nombreuses autres langues : au francique, langue des Francs (« guerre »), à l'arabe, à l'italien, à l'anglais.",
              ],
              box: { label: "Repère", text: "Racines grecques : bio (vie), graphie (écrire), logie (étude, discours), chrono (temps), géo (terre), hydro (eau), phobie (peur), poly (plusieurs), démo (peuple), cratie (pouvoir). Racines latines : aqua (eau), omni (tout), -vore (qui mange), -cide (qui tue)." },
            },
            {
              heading: "Utiliser l'étymologie pour comprendre et pour écrire",
              paragraphs: [
                "Connaître les racines permet de deviner le sens d'un mot inconnu : « hippopotame » vient du grec hippos (cheval) et potamos (fleuve) : le « cheval du fleuve » ; « démocratie », de dêmos (peuple) et kratos (pouvoir) : le pouvoir du peuple ; « carnivore », du latin caro, carnis (chair) et vorare (dévorer) : qui mange de la viande.",
                "L'étymologie aide aussi l'orthographe. Les mots d'origine grecque gardent souvent th, ph, rh ou y : « théâtre », « photographie », « rythme ». La famille de mots explique les lettres muettes ou doubles : « terre » donne « atterrir » et « enterrer » avec deux r ; on écrit « temps » avec un p, comme « temporel », et « corps » comme « corporel ».",
              ],
              box: { label: "À retenir", text: "Pour comprendre un mot inconnu : décomposez-le (préfixe, radical, suffixe), cherchez des mots de la même famille, et pensez aux racines grecques et latines." },
            },
          ],
          keyPoints: [
            "Dérivation : préfixe + radical + suffixe ; le préfixe change le sens, le suffixe souvent la classe du mot.",
            "Une famille de mots regroupe les mots formés sur un même radical (terre, terrestre, atterrir).",
            "Composition : assemblage de mots (porte-monnaie) ou de racines savantes (thermomètre).",
            "Formation populaire (aqua devenu eau) et formation savante (aquatique) ; doublets : hôtel et hôpital, frêle et fragile.",
            "Racines grecques utiles : bio, graphie, logie, chrono, géo, hydro, phobie, poly, démo, cratie.",
            "La famille de mots aide à l'orthographe : temps et temporel, corps et corporel.",
          ],
          example: {
            statement: "Expliquez la formation et le sens du mot « chronologie », puis donnez deux autres mots formés sur l'une de ses racines.",
            solution: [
              "Étape 1 · Décomposer : « chrono- » vient du grec khronos, le temps ; « -logie » vient du grec logos, la parole, le discours, l'étude.",
              "Étape 2 · Reconstituer le sens : la chronologie est l'étude ou le classement des événements dans l'ordre du temps.",
              "Étape 3 · Chercher d'autres mots : « chronomètre » (instrument qui mesure le temps) et « anachronisme » (erreur de date, ce qui n'est pas à sa place dans le temps) ; avec « -logie » : « biologie », « géologie ».",
              "Réponse : « chronologie » est un mot de composition savante formé de deux racines grecques, signifiant « étude de l'ordre du temps ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez chaque mot en préfixe(s), radical et suffixe, et donnez son sens : a) inoubliable ; b) maladroitement ; c) redécouvrir ; d) antidérapant.",
              hint: "Repérez d'abord le mot de base, puis ce qui a été ajouté avant et après.",
              solution: [
                "a) in- (contraire) + oubli + -able (qui peut être) : qu'on ne peut pas oublier.",
                "b) mal- (mal) + adroit + -ment (suffixe d'adverbe) : d'une manière maladroite, sans habileté.",
                "c) re- (de nouveau) + dé- + couvrir (« découvrir » est déjà un dérivé) : découvrir de nouveau.",
                "d) anti- (contre) + dérap(er) + -ant (suffixe d'adjectif) : qui empêche de déraper.",
                "Réponse : chaque préfixe modifie le sens, chaque suffixe donne la classe grammaticale du mot.",
              ],
            },
            {
              level: 2,
              statement: "À l'aide des racines grecques et latines, expliquez le sens des mots suivants : a) hydrophobe ; b) polyglotte ; c) géographie ; d) omnivore ; e) insecticide.",
              hint: "hydro : eau ; phobie : peur ; poly : plusieurs ; glotte : langue ; géo : terre ; graphie : écrire ; omni : tout ; -vore : qui mange ; -cide : qui tue.",
              solution: [
                "a) hydrophobe : hydro (eau) + phobe (qui craint) : qui a peur de l'eau, ou qui repousse l'eau.",
                "b) polyglotte : poly (plusieurs) + glotte (langue) : qui parle plusieurs langues.",
                "c) géographie : géo (terre) + graphie (écrire, décrire) : la description de la Terre.",
                "d) omnivore : omni (tout) + vore (qui mange) : qui mange de tout.",
                "e) insecticide : insecte + cide (qui tue) : produit qui tue les insectes.",
                "Réponse : connaître une dizaine de racines permet de comprendre des centaines de mots.",
              ],
            },
            {
              level: 3,
              statement: "Questions de lexique (type brevet) : a) Dans l'expression « une colère irrépressible », expliquez la formation de l'adjectif et proposez un synonyme. b) Les mots « hôtel » et « hôpital » viennent du même mot latin, « hospitale ». Comment appelle-t-on de tels mots ? Expliquez pourquoi ils ont une forme différente. c) Donnez trois mots de la famille de « terre » et justifiez l'orthographe de « atterrir ».",
              hint: "Pour a), cherchez le verbe caché dans l'adjectif. Pour b), pensez aux deux voies de formation des mots, populaire et savante.",
              solution: [
                "a) « irrépressible » : ir- (contraire, forme de in- devant r) + répress (de réprimer, retenir) + -ible (qui peut être) : qu'on ne peut pas retenir. Synonymes : incontrôlable, irrésistible.",
                "b) Ce sont des doublets. « Hôtel » est de formation populaire : le mot latin s'est transformé à l'oral pendant des siècles. « Hôpital » est de formation savante : il a été repris plus tard au latin écrit et reste plus proche de « hospitale ». L'accent circonflexe des deux mots rappelle le s disparu (on le retrouve dans « hospitalier »).",
                "c) Mots de la famille : terrestre, terrien, territoire, enterrer, atterrir, terrain. « Atterrir » prend deux r, car il est formé sur le radical « terr- » de « terre », précédé du préfixe a-.",
                "Réponse : irrépressible signifie « qu'on ne peut retenir » ; hôtel et hôpital sont des doublets ; la famille de « terre » explique le double r d'« atterrir ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque racine à son sens.",
            pairs: [
              { left: "chrono", right: "le temps" },
              { left: "hydro", right: "l'eau" },
              { left: "poly", right: "plusieurs" },
              { left: "-cratie", right: "le pouvoir" },
              { left: "-vore", right: "qui mange" },
              { left: "-phobie", right: "la peur" },
            ],
          },
          quiz: [
            { q: "Dans « illisible », quel est le préfixe ?", options: ["il-", "lis", "-ible", "-isible"], answer: 0, why: "« il- » est une forme du préfixe in- (contraire) devant un l." },
            { q: "Comment appelle-t-on « hôtel » et « hôpital », issus du même mot latin ?", options: ["Des synonymes", "Des doublets", "Des homophones", "Des antonymes"], answer: 1, why: "Ce sont des doublets : l'un de formation populaire, l'autre de formation savante." },
            { q: "Que signifie l'élément grec « logie » ?", options: ["la terre", "la vie", "le temps", "l'étude, le discours"], answer: 3, why: "Du grec logos, « parole, discours » : biologie, géologie, chronologie." },
            { q: "« Porte-monnaie » est formé par...", options: ["dérivation", "troncation", "composition", "emprunt"], answer: 2, why: "Deux mots existants sont assemblés : c'est une composition." },
            { q: "Quel suffixe forme un adverbe à partir d'un adjectif ?", options: ["-tion", "-able", "-eur", "-ment"], answer: 3, why: "Lent donne lentement : -ment forme des adverbes." },
          ],
          trap: "Confondre préfixe et début du radical : dans « réalité », « ré- » n'est pas un préfixe de répétition. Un préfixe n'existe que si le mot sans lui existe et garde un sens proche.",
          method: "Pour comprendre un mot inconnu, cachez le préfixe puis le suffixe avec le doigt : le radical restant vous rappelle-t-il un mot connu ? Notez dans un carnet les racines grecques et latines rencontrées, avec deux exemples chacune.",
        },
      ],
    },
    /* ==================================================================== */
    /* AGIR DANS LA CITÉ : INDIVIDU ET POUVOIR                               */
    /* ==================================================================== */
    {
      id: 'individu-pouvoir',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'litterature-engagee',
          title: "La littérature engagée au XXe siècle",
          minutes: 30,
          objectives: [
            "Définir la notion d'engagement et situer les grands écrivains engagés du XXe siècle et leurs précurseurs.",
            "Identifier les formes et les registres d'un texte engagé : polémique, pathétique, satirique, lyrique, épique.",
            "Analyser les procédés par lesquels un texte cherche à convaincre et à persuader.",
            "Rédiger une réflexion argumentée sur le pouvoir de l'écrivain.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un écrivain engagé ?",
              paragraphs: [
                "Un écrivain engagé met son œuvre au service d'une cause : il prend position dans les débats politiques, sociaux ou moraux de son temps et cherche à agir sur ses lecteurs. Il ne se contente pas de raconter ou de décrire : il dénonce une injustice, défend des valeurs (la liberté, la justice, la dignité humaine) et invite le lecteur à réfléchir, voire à agir.",
                "Le mot « engagement » s'impose après la Seconde Guerre mondiale grâce au philosophe et écrivain Jean-Paul Sartre. Dans Qu'est-ce que la littérature ? (1948), il défend l'idée que parler, c'est déjà agir : en nommant une injustice, l'écrivain la rend visible, et le lecteur ne peut plus faire comme s'il l'ignorait. Pour Sartre, l'écrivain est responsable de ce qu'il écrit, mais aussi de ce qu'il passe sous silence.",
                "L'engagement est pourtant plus ancien que le mot. Au XVIIIe siècle, Voltaire défend la mémoire de Jean Calas, un protestant injustement exécuté en 1762, dans son Traité sur la tolérance (1763). Au XIXe siècle, Victor Hugo, exilé après le coup d'État de Louis-Napoléon Bonaparte (2 décembre 1851), attaque le nouvel empereur dans Les Châtiments (1853). En 1898, Émile Zola publie « J'accuse...! » dans le journal L'Aurore pour défendre le capitaine Dreyfus, officier juif condamné à tort pour trahison.",
              ],
              box: { label: "Définition", text: "L'engagement est l'attitude de l'écrivain qui met sa plume au service d'une cause et prend position dans les combats de son époque. Le mot est popularisé par Jean-Paul Sartre (Qu'est-ce que la littérature ?, 1948), mais Voltaire, Hugo et Zola en sont les grands précurseurs." },
            },
            {
              heading: "Les combats du XXe siècle",
              paragraphs: [
                "Le XXe siècle est marqué par des violences d'une ampleur inédite : deux guerres mondiales, les régimes totalitaires (fascisme italien, nazisme, stalinisme), la Shoah, la colonisation puis les guerres de décolonisation. Face à ces événements, de nombreux écrivains estiment qu'ils ne peuvent pas rester neutres.",
                "Pendant l'Occupation (1940-1944), des poètes comme Paul Eluard, Louis Aragon, Robert Desnos ou René Char entrent en Résistance et publient des textes clandestins. Après la guerre, Albert Camus publie La Peste (1947) : l'épidémie qui frappe la ville d'Oran peut se lire comme une image de l'occupation nazie et de tout mal qui s'abat sur les hommes, et les personnages qui luttent contre elle incarnent la solidarité. Prix Nobel de littérature en 1957, Camus explique dans son discours de réception que l'écrivain doit se tenir aux côtés de ceux qui subissent l'histoire plutôt que de ceux qui la font.",
                "D'autres combats mobilisent les écrivains. Aimé Césaire, poète martiniquais, publie Cahier d'un retour au pays natal (1939) et fonde avec Léopold Sédar Senghor et Léon-Gontran Damas le mouvement de la négritude, qui revendique la fierté des cultures noires face au racisme colonial. En Angleterre, George Orwell dénonce les totalitarismes dans La Ferme des animaux (1945) et 1984 (1949).",
              ],
              box: { label: "Repère", text: "Voltaire, Traité sur la tolérance (1763) ; Hugo, Les Châtiments (1853) ; Zola, « J'accuse...! » (1898) ; Césaire, Cahier d'un retour au pays natal (1939) ; Vercors, Le Silence de la mer (1942) ; Camus, La Peste (1947) ; Ionesco, Rhinocéros (1959)." },
            },
            {
              heading: "Les formes et les registres de l'engagement",
              paragraphs: [
                "L'engagement emprunte tous les genres. La poésie touche par l'émotion et se retient facilement. Le théâtre fait entendre des conflits devant un public : dans Rhinocéros (1959) d'Eugène Ionesco, les habitants d'une ville se transforment un à un en rhinocéros, image du conformisme et de la contagion des idées totalitaires. Le roman fait vivre une situation de l'intérieur ; l'essai, l'article de presse et le pamphlet attaquent directement ; la chanson diffuse un message auprès d'un large public.",
                "Le texte engagé utilise plusieurs registres. Le registre polémique attaque un adversaire avec violence (accusations, interpellations, vocabulaire péjoratif). Le registre pathétique émeut en montrant la souffrance des victimes. Le registre satirique ou ironique ridiculise l'adversaire pour le discréditer. Le registre lyrique exprime l'indignation ou l'espoir d'un « je », et le registre épique grandit le combat et ses héros.",
                "Pour convaincre (s'adresser à la raison) et persuader (toucher les émotions), l'écrivain engagé utilise des procédés reconnaissables : l'apostrophe (on interpelle directement quelqu'un), les questions rhétoriques, l'anaphore (répétition d'un mot en début de phrase ou de vers), l'énumération, la gradation, l'antithèse, les phrases exclamatives, l'impératif, et les pronoms « nous » ou « vous » qui impliquent le lecteur. Dans « J'accuse...! », Zola reprend la formule « J'accuse » en tête de plusieurs paragraphes : cette anaphore martèle ses accusations contre les responsables de l'injustice.",
              ],
              box: { label: "À retenir", text: "Convaincre, c'est s'adresser à la raison (arguments, exemples) ; persuader, c'est toucher les émotions (registre pathétique, images, exclamations). Le texte engagé fait souvent les deux." },
            },
            {
              heading: "Écrire pour agir : un débat",
              paragraphs: [
                "Tous les artistes ne partagent pas cette conception. Au XIXe siècle, Théophile Gautier, dans la préface de son roman Mademoiselle de Maupin (1835), défend l'idée, souvent résumée par la formule « l'art pour l'art », qu'une œuvre doit viser la beauté et non l'utilité. Certains reprochent aussi à l'engagement de transformer la littérature en propagande. Les écrivains engagés répondent que se taire face à l'injustice est aussi une manière de prendre parti.",
                "Au brevet, on peut vous demander si la littérature peut changer le monde. Les exemples ne manquent pas : l'intervention de Zola a contribué à la révision du procès de Dreyfus, réhabilité en 1906 ; les poèmes de la Résistance ont soutenu le courage de milliers de personnes. Mais un texte agit lentement, sur les consciences plutôt que sur les événements : il éveille, alerte et transmet la mémoire.",
              ],
            },
          ],
          keyPoints: [
            "Un écrivain engagé met son œuvre au service d'une cause et prend position dans les débats de son temps.",
            "Le mot est popularisé par Sartre (Qu'est-ce que la littérature ?, 1948) ; précurseurs : Voltaire (1763), Hugo (1853), Zola (1898).",
            "XXe siècle : guerres mondiales, totalitarismes, Shoah, colonisation ; écrivains : Eluard, Aragon, Camus, Césaire, Orwell, Ionesco.",
            "Tous les genres servent l'engagement : poésie, théâtre, roman, essai, article de presse, chanson.",
            "Registres : polémique, pathétique, satirique ou ironique, lyrique, épique.",
            "Convaincre s'adresse à la raison, persuader aux émotions. Procédés : apostrophe, anaphore, question rhétorique, énumération, impératif.",
          ],
          example: {
            statement: "Lisez ce court texte, écrit pour l'exercice, puis montrez qu'il s'agit d'un texte engagé : « Combien de temps détournerez-vous les yeux ? Chaque jour, des enfants travaillent dans des mines au lieu d'aller à l'école. Chaque jour, des mains de dix ans fabriquent ce que nous achetons sans y penser. Vous, lecteurs, qui lisez ces lignes au chaud, ne dites pas que vous ne saviez pas. »",
            solution: [
              "Étape 1 · Identifier la cause défendue : le texte dénonce le travail des enfants et défend leur droit à l'éducation. Il prend clairement position.",
              "Étape 2 · Repérer l'implication du lecteur : l'apostrophe « Vous, lecteurs » et la question rhétorique initiale interpellent directement le lecteur ; le pronom « nous » (« ce que nous achetons ») le rend complice de la situation.",
              "Étape 3 · Repérer les procédés : l'anaphore « Chaque jour » martèle la permanence de l'injustice ; la périphrase « des mains de dix ans » rend les victimes concrètes et émouvantes ; l'antithèse entre les enfants au travail et le lecteur « au chaud » souligne le contraste.",
              "Étape 4 · Nommer les registres : le texte cherche à émouvoir (registre pathétique) et à bousculer le lecteur (registre polémique de la dernière phrase, à l'impératif négatif).",
              "Réponse : c'est un texte engagé, car il dénonce une injustice, prend position et cherche à faire réagir le lecteur par l'apostrophe, l'anaphore, l'antithèse et l'impératif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque écrivain à son œuvre et à la cause qu'il défend. Écrivains : Zola, Hugo, Césaire, Vercors. Œuvres : Les Châtiments (1853), « J'accuse...! » (1898), Cahier d'un retour au pays natal (1939), Le Silence de la mer (1942). Causes : la résistance à l'occupant nazi ; la défense d'un officier condamné à tort ; la lutte contre un empereur jugé tyrannique ; la fierté des peuples noirs face au racisme colonial.",
              hint: "Aidez-vous des dates : 1853 correspond au Second Empire, 1898 à l'affaire Dreyfus, 1942 à l'Occupation.",
              solution: [
                "Zola : « J'accuse...! » (1898), la défense du capitaine Dreyfus, officier condamné à tort.",
                "Hugo : Les Châtiments (1853), écrits en exil contre Napoléon III, empereur jugé tyrannique.",
                "Césaire : Cahier d'un retour au pays natal (1939), la fierté des peuples noirs face au racisme colonial (la négritude).",
                "Vercors : Le Silence de la mer (1942), publié clandestinement, la résistance à l'occupant nazi.",
                "Réponse : Zola, Dreyfus ; Hugo, l'empereur ; Césaire, la négritude ; Vercors, la Résistance.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce passage, écrit pour l'exercice : « On vous dira que la forêt est trop loin pour qu'on la pleure. On vous dira que les arbres repousseront, que l'argent n'attend pas, que le progrès a un prix. Mais qui paiera ce prix ? Les oiseaux qui n'auront plus de branches ? Les enfants qui hériteront d'un désert ? Levez-vous, écrivez, refusez ! » a) Quelle cause l'auteur défend-il ? b) Relevez et nommez trois procédés. c) Le texte cherche-t-il plutôt à convaincre ou à persuader ? Justifiez.",
              hint: "Repérez les répétitions en début de phrase, les questions qui n'attendent pas de réponse et les verbes à l'impératif.",
              solution: [
                "a) L'auteur défend la protection des forêts contre une destruction justifiée par le profit (« l'argent n'attend pas »).",
                "b) L'anaphore « On vous dira » reprend les arguments des adversaires pour mieux les réfuter ensuite. Les questions rhétoriques (« qui paiera ce prix ? ») obligent le lecteur à trouver lui-même la réponse. L'accumulation de verbes à l'impératif (« Levez-vous, écrivez, refusez ! ») forme une gradation qui appelle à l'action.",
                "c) Le texte persuade surtout : il touche les émotions par des images (les oiseaux sans branches, les enfants héritiers d'un désert), l'exclamation et l'impératif. Mais il cherche aussi à convaincre, puisqu'il réfute un argument précis (« le progrès a un prix »).",
                "Réponse : un texte engagé pour la défense des forêts, qui associe anaphore, questions rhétoriques et impératifs, et persuade plus qu'il ne démontre.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de réflexion (type brevet) : « Selon vous, la littérature peut-elle changer le monde ? » Vous répondrez dans un développement argumenté et organisé, en vous appuyant sur des exemples précis tirés de vos lectures et de votre culture.",
              hint: "Envisagez d'abord ce que la littérature a réellement obtenu, puis ses limites, avant de conclure de façon nuancée. Chaque argument doit être illustré par un exemple précis (auteur, œuvre, date).",
              solution: [
                "Étape 1 · Analyser le sujet : « changer le monde » peut signifier modifier des événements (une décision, une loi) ou transformer les consciences. La question appelle une réponse nuancée.",
                "Étape 2 · Introduction : partir d'un fait (la publication de « J'accuse...! » en 1898), poser la question, annoncer un plan en deux parties.",
                "Étape 3 · Première partie, la littérature peut agir : elle dénonce les injustices et fait bouger les choses (la campagne de Voltaire aboutit en 1765 à la réhabilitation de Calas ; l'intervention de Zola contribue à celle de Dreyfus en 1906) ; elle soutient le courage dans les périodes sombres (les poèmes clandestins de la Résistance, comme « Liberté » d'Eluard, lâché par des avions au-dessus de la France occupée).",
                "Étape 4 · Deuxième partie, mais son pouvoir est limité et indirect : un livre n'arrête pas une armée ; les romans d'Orwell n'ont pas fait tomber les dictatures ; les textes peuvent être censurés ou peu lus. La littérature agit surtout lentement, sur les consciences : elle fait réfléchir, transmet la mémoire (les témoignages des déportés) et forme des citoyens.",
                "Étape 5 · Conclusion : la littérature ne change pas le monde à elle seule, mais elle change ceux qui le font. Ouverture possible : les réseaux sociaux donnent-ils aujourd'hui plus de pouvoir aux mots ?",
                "Réponse : un développement en deux parties (le pouvoir réel de la littérature, puis ses limites), chaque argument appuyé sur un exemple précis, et une conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces textes engagés dans l'ordre chronologique de leur publication.",
            items: [
              "Voltaire défend la mémoire de Calas : Traité sur la tolérance",
              "Hugo attaque Napoléon III depuis l'exil : Les Châtiments",
              "Zola défend Dreyfus : « J'accuse...! »",
              "Césaire écrit le Cahier d'un retour au pays natal",
              "Vercors publie clandestinement Le Silence de la mer",
              "Sartre théorise l'engagement : Qu'est-ce que la littérature ?",
              "Ionesco fait jouer Rhinocéros",
            ],
          },
          quiz: [
            { q: "Qui a popularisé la notion d'engagement après 1945 ?", options: ["Victor Hugo", "Jean-Paul Sartre", "Théophile Gautier", "Voltaire"], answer: 1, why: "Sartre théorise l'engagement de l'écrivain, notamment dans Qu'est-ce que la littérature ? (1948)." },
            { q: "Dans quel journal Zola publie-t-il « J'accuse...! » en 1898 ?", options: ["Le Figaro", "Combat", "L'Aurore", "Le Monde"], answer: 2, why: "La lettre ouverte au président de la République paraît dans L'Aurore le 13 janvier 1898." },
            { q: "Quel registre cherche à émouvoir en montrant la souffrance des victimes ?", options: ["Le registre pathétique", "Le registre fantastique", "Le registre polémique", "Le registre épique"], answer: 0, why: "Le registre pathétique suscite la pitié et l'émotion du lecteur." },
            { q: "Dans Rhinocéros de Ionesco, que symbolise la transformation des habitants ?", options: ["Le progrès des sciences et des techniques", "La contagion des idées totalitaires", "La peur des animaux sauvages", "L'amour de la nature"], answer: 1, why: "Les habitants qui deviennent rhinocéros figurent le conformisme et la propagation des idéologies totalitaires." },
            { q: "Persuader, c'est...", options: ["s'adresser à la raison par des arguments logiques", "raconter une histoire vraie", "toucher les émotions du destinataire", "citer ses sources"], answer: 2, why: "Persuader vise les émotions ; convaincre vise la raison." },
          ],
          trap: "Croire qu'un texte est engagé dès qu'il parle de guerre ou de politique : il faut une prise de position et une volonté d'agir sur le lecteur, que l'on repère dans l'énonciation et les procédés.",
          method: "Pour analyser un texte engagé, répondez à trois questions dans l'ordre : quelle cause défend-il ou quelle injustice dénonce-t-il ? À qui s'adresse-t-il ? Par quels procédés cherche-t-il à convaincre ou à persuader ? Retenez aussi quatre écrivains engagés avec une œuvre et une date : ils serviront d'exemples au brevet.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-guerre',
          title: "Écrire la guerre et témoigner",
          minutes: 35,
          objectives: [
            "Situer les grands témoignages littéraires des deux guerres mondiales.",
            "Identifier les caractéristiques d'un récit de témoignage : énonciation, pacte de vérité, réalisme.",
            "Analyser les procédés par lesquels un texte ou une image dénonce la violence de la guerre.",
            "Rédiger un récit à la première personne qui témoigne d'une expérience.",
          ],
          course: [
            {
              heading: "Témoigner : dire ce que l'on a vécu",
              paragraphs: [
                "Un témoin est une personne qui a vu ou vécu un événement et qui le raconte. Le témoignage littéraire est un récit, le plus souvent à la première personne, dans lequel l'auteur rapporte une expérience réelle. Il repose sur un pacte de vérité : le lecteur croit que les faits rapportés ont réellement eu lieu, même si l'écriture les met en forme.",
                "Le témoignage prend des formes variées : lettres écrites du front, journal intime (comme le Journal d'Anne Frank, tenu par une adolescente juive cachée à Amsterdam de 1942 à 1944), carnets, mémoires, récits autobiographiques. Certains écrivains choisissent aussi le roman : les personnages sont inventés, mais l'auteur s'appuie sur ce qu'il a vécu. On parle alors de fiction nourrie par le témoignage.",
                "Pourquoi témoigner ? Pour garder la mémoire des disparus, pour faire comprendre à ceux qui n'y étaient pas ce qu'a été la guerre, et pour dénoncer : en montrant la réalité sans l'embellir, le témoin s'oppose aux discours officiels qui célèbrent l'héroïsme.",
              ],
              box: { label: "Définition", text: "Le témoignage est le récit, généralement à la première personne, d'événements réellement vécus par l'auteur. Il repose sur un pacte de vérité avec le lecteur et répond souvent à un devoir de mémoire." },
            },
            {
              heading: "La Grande Guerre (1914-1918) : écrire depuis les tranchées",
              paragraphs: [
                "La Première Guerre mondiale coûte la vie à près de dix millions de soldats. Sur le front de l'Ouest, les combattants (en France, on les surnomme les « poilus ») vivent des mois dans les tranchées, au milieu de la boue, des rats, du froid et des bombardements. À l'arrière, la propagande présente une guerre glorieuse : les soldats parlent avec amertume de « bourrage de crâne ».",
                "Plusieurs écrivains-combattants racontent la réalité du front. Henri Barbusse publie Le Feu dès 1916 (prix Goncourt la même année) : il y décrit, d'après son expérience, la vie d'une escouade de soldats. Roland Dorgelès publie Les Croix de bois (1919) ; Maurice Genevoix rassemble ses récits de guerre dans Ceux de 14 (1949) et entre au Panthéon en 2020. En Allemagne, Erich Maria Remarque raconte la même souffrance, du côté adverse, dans À l'Ouest rien de nouveau (1929).",
                "Les poètes témoignent aussi. Guillaume Apollinaire, engagé volontaire et blessé à la tête en 1916, publie Calligrammes en 1918 : certains poèmes mêlent l'horreur des combats et une étrange fascination pour le spectacle des obus. Dans leurs lettres, enfin, des milliers de soldats ordinaires ont laissé un témoignage précieux sur leur quotidien.",
              ],
              box: { label: "Repère", text: "Barbusse, Le Feu (1916) ; Apollinaire, Calligrammes (1918) ; Dorgelès, Les Croix de bois (1919) ; Remarque, À l'Ouest rien de nouveau (1929) ; Genevoix, Ceux de 14 (1949)." },
            },
            {
              heading: "La Seconde Guerre mondiale et la Shoah : témoigner de l'indicible",
              paragraphs: [
                "La Seconde Guerre mondiale (1939-1945) est marquée par l'extermination des Juifs d'Europe par les nazis, la Shoah, qui fait près de six millions de victimes. Les rescapés des camps se heurtent à une double difficulté : comment dire une expérience si extrême qu'elle semble indicible, et comment être cru ?",
                "Primo Levi, chimiste italien déporté à Auschwitz, publie Si c'est un homme (1947) : il y décrit avec précision et sobriété le système qui cherche à détruire l'humanité des prisonniers. La même année, Robert Antelme publie L'Espèce humaine. Charlotte Delbo, résistante déportée à Auschwitz, écrit Aucun de nous ne reviendra (publié en 1965), et Elie Wiesel raconte sa déportation, adolescent, dans La Nuit (1958).",
                "Ces textes ont souvent un style dépouillé : phrases courtes, refus des effets, précision des faits. Le témoin ne cherche pas à faire de la belle littérature, mais à transmettre la vérité. C'est pourquoi on parle de devoir de mémoire : lire et transmettre ces témoignages, c'est empêcher l'oubli.",
              ],
            },
            {
              heading: "Les procédés du témoignage et de la dénonciation",
              paragraphs: [
                "Pour faire voir la guerre, le témoin utilise des procédés reconnaissables : la première personne et souvent le présent de narration, qui rend la scène plus vivante ; la focalisation interne, qui fait partager les sensations (le bruit, le froid, la peur) ; des détails concrets et parfois crus, qui relèvent du réalisme ; des champs lexicaux de la violence, de la souffrance et de la mort.",
                "Le registre est souvent pathétique (il émeut en montrant la souffrance) et s'oppose au registre épique, qui glorifie les combats et les héros. Montrer le soldat sale, épuisé et terrifié, c'est détruire l'image héroïque de la guerre : la dénonciation est souvent implicite, car les faits parlent d'eux-mêmes.",
                "Les peintres témoignent aussi. Otto Dix, ancien soldat allemand, peint le triptyque La Guerre (1929-1932), où des corps mutilés gisent dans un paysage dévasté. Pablo Picasso peint Guernica (1937) après le bombardement de cette ville basque, le 26 avril 1937, pendant la guerre d'Espagne : en noir, blanc et gris, des corps disloqués, une mère hurlant avec son enfant mort et un cheval agonisant expriment la terreur des civils.",
              ],
              box: { label: "À retenir", text: "Repérer un témoignage : première personne, pacte de vérité, détails concrets, focalisation interne, registre pathétique. Il dénonce souvent la guerre de façon implicite, en montrant sa réalité sans l'embellir." },
            },
          ],
          keyPoints: [
            "Le témoignage raconte des faits réellement vécus, à la première personne, avec un pacte de vérité.",
            "Formes : lettres, journal, carnets, mémoires, récits autobiographiques, romans nourris de l'expérience de l'auteur.",
            "1914-1918 : Barbusse, Le Feu (1916) ; Dorgelès, Les Croix de bois (1919) ; Remarque (1929) ; Genevoix, Ceux de 14.",
            "Shoah : Primo Levi, Si c'est un homme (1947) ; Antelme, L'Espèce humaine (1947) ; Wiesel, La Nuit (1958) ; Delbo.",
            "Procédés : présent de narration, focalisation interne, détails réalistes, champs lexicaux de la violence, registre pathétique.",
            "Images : Otto Dix, La Guerre (1929-1932) ; Picasso, Guernica (1937).",
          ],
          example: {
            statement: "Lisez cet extrait, écrit pour l'exercice à la manière d'un carnet de soldat de 1916, puis montrez qu'il s'agit d'un témoignage qui dénonce la guerre : « Nous montons en ligne à la nuit tombée. La boue nous prend jusqu'aux genoux et chaque pas arrache un soupir. Devant moi, Martin trébuche ; je le relève, il ne dit rien. Puis les obus arrivent, avec ce sifflement qu'on n'oublie plus. Je me colle à la terre, je ne pense plus, je suis une bête qui tremble. Au matin, Martin n'est plus là. Les journaux de Paris parleront, je suppose, de notre courage. »",
            solution: [
              "Étape 1 · L'énonciation : le récit est à la première personne (« je », « nous ») et au présent de narration (« Nous montons », « je le relève ») : le narrateur rapporte ce qu'il vit comme s'il le revivait.",
              "Étape 2 · Le réalisme : les détails concrets (la boue « jusqu'aux genoux », le « sifflement » des obus) font percevoir la réalité physique du front. La focalisation interne fait partager les sensations et la peur.",
              "Étape 3 · La déshumanisation : la métaphore « je suis une bête qui tremble » montre que la guerre réduit l'homme à l'instinct de survie. La disparition de Martin est dite sobrement (« Martin n'est plus là ») : cet euphémisme suggère sa mort et la rend plus poignante.",
              "Étape 4 · La dénonciation : la dernière phrase est ironique. Les journaux parleront de « courage », alors que le soldat vient de décrire sa terreur et la mort d'un camarade. Le texte oppose la vérité du témoin au « bourrage de crâne ».",
              "Réponse : c'est un témoignage (première personne, présent, détails vécus) qui dénonce implicitement la guerre en montrant sa réalité et en opposant l'expérience du soldat aux discours officiels.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces œuvres selon la guerre dont elles témoignent (Première ou Seconde Guerre mondiale) et précisez leur forme : a) Le Feu, Henri Barbusse ; b) Si c'est un homme, Primo Levi ; c) le Journal d'Anne Frank ; d) Les Croix de bois, Roland Dorgelès ; e) Calligrammes, Guillaume Apollinaire.",
              hint: "Aidez-vous des dates de publication : avant 1930, il s'agit de la Grande Guerre ; les textes sur les camps et la persécution des Juifs concernent la Seconde.",
              solution: [
                "a) Le Feu (1916) : Première Guerre mondiale ; roman nourri de l'expérience de l'auteur au front.",
                "b) Si c'est un homme (1947) : Seconde Guerre mondiale ; récit autobiographique de la déportation à Auschwitz.",
                "c) Le Journal d'Anne Frank (tenu de 1942 à 1944) : Seconde Guerre mondiale ; journal intime d'une adolescente juive cachée.",
                "d) Les Croix de bois (1919) : Première Guerre mondiale ; roman inspiré du vécu de l'auteur.",
                "e) Calligrammes (1918) : Première Guerre mondiale ; recueil de poèmes.",
                "Réponse : Première Guerre mondiale, a, d, e ; Seconde Guerre mondiale, b, c.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cette lettre, écrite pour l'exercice : « Ma chère maman, je t'écris à la lueur d'une bougie, dans un abri qui sent la terre mouillée. On nous a dit que l'attaque était pour demain. Les camarades jouent aux cartes, mais personne ne rit vraiment. Je pense à notre cuisine, à l'odeur du pain, à la fenêtre qui donne sur le jardin. Ici, il n'y a plus d'arbres, seulement des troncs noircis, comme des allumettes brûlées. Embrasse ma petite sœur. Je reviendrai, je te le promets. Ton fils, Paul. Le 12 mars 1916. » a) Relevez trois marques qui font de ce texte un témoignage. b) Relevez une comparaison et expliquez son effet. c) Quels deux mondes le soldat oppose-t-il, et quel sentiment cette opposition fait-elle naître chez le lecteur ?",
              hint: "Pensez à l'énonciation, à la date et à la signature ; cherchez un outil de comparaison ; opposez les lieux évoqués par l'abri et par la cuisine.",
              solution: [
                "a) La lettre est datée (12 mars 1916) et signée ; elle est écrite à la première personne ; elle donne des détails concrets du front (l'abri, la bougie, l'attaque annoncée).",
                "b) « des troncs noircis, comme des allumettes brûlées » : comparaison avec l'outil « comme ». Les arbres, réduits à de minuscules restes fragiles, font mesurer l'ampleur de la destruction.",
                "c) Le soldat oppose le front (terre mouillée, troncs noircis, attaque, rires absents) et le foyer (cuisine, odeur du pain, jardin). Cette antithèse rend le souvenir heureux encore plus douloureux. La promesse finale « Je reviendrai » émeut le lecteur, qui sait que beaucoup de soldats ne sont pas revenus : le registre est pathétique.",
                "Réponse : un témoignage daté et signé, une comparaison qui dit la destruction, et une antithèse entre le front et le foyer qui suscite la pitié et l'inquiétude.",
              ],
            },
            {
              level: 3,
              statement: "Sujet d'imagination (type brevet) : en 1916, un soldat revient du front pour une courte permission. Dans son village, on lui parle d'une guerre glorieuse. Racontez cette scène à la première personne, en une quarantaine de lignes au moins. Vous ferez apparaître le décalage entre ce que le soldat a vécu et ce que l'on imagine à l'arrière, ainsi que ses sentiments.",
              hint: "Alternez récit, dialogue et pensées du narrateur. Insérez des souvenirs du front (détails concrets, sensations) pour contraster avec les paroles des villageois.",
              solution: [
                "Étape 1 · Analyser le sujet : narrateur à la première personne (le soldat), époque (1916), situation (une permission), enjeu (le décalage entre le front et l'arrière), et l'expression des sentiments.",
                "Étape 2 · Construire un plan : l'arrivée au village et le choc du calme retrouvé ; une scène de dialogue où l'on célèbre les « héros » ; des souvenirs du front en retour en arrière ; la réaction intérieure du soldat (colère, solitude, impossibilité de parler) ; la fin de la permission.",
                "Étape 3 · Choisir les outils : passé composé ou passé simple et imparfait pour le récit, plus-que-parfait pour les souvenirs, dialogue ponctué correctement, focalisation interne, champ lexical de la souffrance, registre pathétique et touche d'ironie.",
                "Étape 4 · Rédiger. Exemple de passage : Au café, le père Lucas a levé son verre en criant : « À nos héros ! » Tout le monde a applaudi. J'ai souri, parce qu'il fallait sourire. Je revoyais la tranchée de février, l'eau glacée qui montait jusqu'aux cuisses, et le visage de Martin, si jeune, que je n'avais pas pu ramener. Comment leur dire ? Les mots restaient dans ma gorge comme une pierre.",
                "Étape 5 · Se relire : cohérence des temps, ponctuation du dialogue, accords des participes passés, présence du décalage et des sentiments.",
                "Réponse attendue : un récit à la première personne, organisé, mêlant dialogue et souvenirs, qui fait sentir le fossé entre la réalité du front et l'image glorieuse de la guerre.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : écrire la guerre et témoigner.",
            statements: [
              { text: "Un témoignage raconte des faits réellement vécus par son auteur.", true: true, why: "C'est le pacte de vérité qui le distingue de la pure fiction." },
              { text: "Le Feu de Barbusse a été publié après la fin de la guerre, en 1919.", true: false, why: "Il paraît dès 1916, en pleine guerre, et reçoit le prix Goncourt la même année." },
              { text: "Le registre épique est le plus utilisé pour dénoncer l'horreur de la guerre.", true: false, why: "L'épique glorifie les combats ; la dénonciation passe plutôt par le réalisme et le registre pathétique." },
              { text: "Guernica de Picasso représente le bombardement d'une ville basque en 1937.", true: true, why: "La ville est bombardée le 26 avril 1937, pendant la guerre d'Espagne." },
              { text: "Un roman ne peut jamais témoigner, car ses personnages sont inventés.", true: false, why: "Dorgelès ou Remarque s'appuient sur leur expérience : c'est une fiction nourrie par le témoignage." },
              { text: "Primo Levi a écrit Si c'est un homme après sa déportation à Auschwitz.", true: true, why: "Ce récit paraît en 1947, peu après son retour." },
              { text: "Les témoignages sur les camps sont souvent écrits dans un style sobre et précis.", true: true, why: "Le témoin cherche avant tout à transmettre la vérité, sans effets." },
            ],
          },
          quiz: [
            { q: "Quel écrivain a publié Le Feu, prix Goncourt 1916 ?", options: ["Roland Dorgelès", "Maurice Genevoix", "Henri Barbusse", "Guillaume Apollinaire"], answer: 2, why: "Henri Barbusse y décrit la vie d'une escouade de poilus, d'après son expérience." },
            { q: "Qu'appelle-t-on le « pacte de vérité » ?", options: ["Un traité de paix signé à la fin d'une guerre mondiale", "L'engagement à raconter des faits réels", "Une règle qui fixe le nombre de syllabes", "Une promesse de fidélité faite entre soldats"], answer: 1, why: "L'auteur d'un témoignage s'engage auprès du lecteur à rapporter des faits réellement vécus." },
            { q: "Quel peintre, ancien soldat, a représenté la Grande Guerre dans le triptyque La Guerre ?", options: ["Otto Dix", "Pablo Picasso", "Eugène Delacroix", "Claude Monet"], answer: 0, why: "Otto Dix peint La Guerre entre 1929 et 1932, d'après son expérience du front." },
            { q: "À quoi sert le présent de narration dans un témoignage ?", options: ["Exprimer une vérité valable en tout temps", "Annoncer un événement futur", "Exprimer un ordre ou un conseil", "Rendre la scène vivante et proche"], answer: 3, why: "Il donne l'impression que la scène se déroule sous les yeux du lecteur." },
            { q: "Qui raconte sa déportation, adolescent, dans La Nuit (1958) ?", options: ["Robert Antelme", "Elie Wiesel", "Anne Frank", "Primo Levi"], answer: 1, why: "Elie Wiesel, déporté à quinze ans, témoigne dans La Nuit." },
          ],
          trap: "Croire qu'un texte ne dénonce la guerre que s'il dit explicitement qu'elle est horrible : la dénonciation est souvent implicite, portée par les détails réalistes, les contrastes et l'ironie.",
          method: "Devant un témoignage, relevez trois séries d'indices : l'énonciation (qui parle, quand, à qui ?), les sensations (vue, ouïe, toucher, peur) et les contrastes (front et arrière, avant et après, discours officiel et réalité). Chaque série fournit une partie de votre réponse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'resister-par-les-mots',
          title: "Résister par les mots : poèmes et textes de la Résistance",
          minutes: 30,
          objectives: [
            "Situer la poésie et les textes de la Résistance dans leur contexte historique (1940-1944).",
            "Identifier les procédés de la poésie engagée : anaphore, refrain, énumération, apostrophe, symboles.",
            "Expliquer comment un texte littéraire a pu être une arme contre l'occupant.",
            "Rédiger une réponse argumentée sur le rôle des mots dans un combat.",
          ],
          course: [
            {
              heading: "Le contexte : la France occupée",
              paragraphs: [
                "En juin 1940, l'armée française est vaincue par l'Allemagne nazie. L'armistice est signé le 22 juin 1940 : le nord et l'ouest de la France sont occupés, et le maréchal Pétain dirige depuis Vichy un régime autoritaire qui collabore avec l'occupant. En novembre 1942, toute la France est occupée. La presse et l'édition sont censurées, les opposants pourchassés, les Juifs persécutés et déportés.",
                "Dès le 18 juin 1940, le général de Gaulle appelle depuis Londres, à la radio de la BBC, à poursuivre le combat. Peu à peu se forment des mouvements de Résistance : ils sabotent, renseignent les Alliés, cachent des personnes pourchassées, mais aussi impriment et diffusent des journaux et des tracts clandestins (Combat, Libération, Défense de la France...). Les mots deviennent une arme : informer, dénoncer les mensonges de la propagande et redonner espoir.",
              ],
              box: { label: "Repère", text: "18 juin 1940 : appel du général de Gaulle. 22 juin 1940 : armistice. 1941 : création des Éditions de Minuit clandestines. 1942 : Le Silence de la mer (Vercors) et « Liberté » (Eluard). 1943 : L'Honneur des poètes. Août 1944 : libération de Paris." },
            },
            {
              heading: "Écrire dans la clandestinité",
              paragraphs: [
                "Écrire contre l'occupant est dangereux. Les auteurs utilisent des pseudonymes : Jean Bruller signe Vercors ; Paul Eluard publie sous le nom de Jean du Haut ; le poète René Char devient le « capitaine Alexandre » dans un maquis des Basses-Alpes. En 1941, Vercors et Pierre de Lescure fondent les Éditions de Minuit, une maison d'édition clandestine. Son premier livre, Le Silence de la mer (1942), raconte comment un vieil homme et sa nièce résistent à l'officier allemand logé chez eux avec la seule arme dont ils disposent : un silence obstiné.",
                "En 1943, les Éditions de Minuit publient L'Honneur des poètes, un recueil clandestin réuni notamment par Paul Eluard, où de nombreux poètes, presque tous sous un faux nom, disent leur refus de l'occupation. D'autres textes passent la censure grâce à la « poésie de contrebande », dont Louis Aragon est le maître : sous l'apparence de poèmes d'amour ou de chansons anciennes, aux formes traditionnelles, se cache un message patriotique que les lecteurs savent déchiffrer.",
                "Les chansons jouent aussi un rôle : Le Chant des partisans (1943), dont Joseph Kessel et Maurice Druon ont écrit les paroles sur une musique d'Anna Marly, est diffusé par la radio de Londres et devient l'hymne de la Résistance. René Char, lui, publie après la guerre Feuillets d'Hypnos (1946), des notes brèves écrites dans le maquis.",
              ],
            },
            {
              heading: "Des poèmes devenus des symboles",
              paragraphs: [
                "« Liberté » de Paul Eluard, publié en 1942, est le plus célèbre de ces poèmes. Presque toutes ses strophes suivent le même modèle : des vers commençant par « Sur » énumèrent les supports possibles de l'écriture (les cahiers d'écolier, le sable, les arbres, les murs, les nuages...), puis revient la formule « J'écris ton nom ». Le lecteur ne découvre qu'au dernier mot quel est ce nom : « Liberté ». Des avions britanniques en ont lâché des milliers d'exemplaires au-dessus de la France occupée.",
                "Louis Aragon, dans « La Rose et le Réséda » (1943), célèbre l'union de ceux qui croient au ciel et de ceux qui n'y croient pas, c'est-à-dire des chrétiens et des communistes, unis dans le même combat et dans la même mort. Le poème est dédié à quatre résistants fusillés, parmi lesquels Gabriel Péri et Guy Môquet.",
                "Après la guerre, Aragon rend hommage, dans « Strophes pour se souvenir » (1955), aux résistants étrangers du groupe de Missak Manouchian : vingt-deux d'entre eux sont fusillés au Mont-Valérien le 21 février 1944, après que la propagande nazie les a présentés comme des criminels sur une affiche rouge placardée dans toute la France. Missak Manouchian est entré au Panthéon en 2024.",
                "Les résistants écrivent aussi en prose. La dernière lettre de Guy Môquet, fusillé à 17 ans à Châteaubriant en octobre 1941, est devenue un symbole. Robert Desnos, poète engagé dans la Résistance, est arrêté en 1944 et meurt en déportation, au camp de Terezín, en juin 1945.",
              ],
            },
            {
              heading: "Les procédés de la poésie de la Résistance",
              paragraphs: [
                "Les poèmes de la Résistance doivent être compris par tous, retenus facilement et récités. Ils utilisent donc souvent des formes simples ou traditionnelles (rimes, refrains, vers réguliers), ainsi que la répétition : l'anaphore (le même mot en tête de plusieurs vers) et le refrain martèlent le message et lui donnent la force d'un chant collectif.",
                "On y retrouve aussi l'énumération, qui donne une impression d'ampleur ; l'apostrophe, qui s'adresse à la France, à la liberté ou aux camarades ; l'impératif, qui appelle à l'action ; les antithèses entre la nuit (l'occupation, la mort) et le jour, l'aube ou la lumière (la libération, l'espoir). Le registre est tour à tour lyrique (un « je » exprime son amour de la liberté), épique (le combat collectif est grandi) et pathétique (les victimes sont pleurées).",
              ],
              box: { label: "À retenir", text: "Pour analyser un poème de la Résistance : situez-le (date, auteur, conditions de publication), repérez les répétitions (anaphore, refrain), les apostrophes et les symboles (nuit et lumière), puis expliquez comment le poème console, dénonce ou appelle au combat." },
            },
          ],
          keyPoints: [
            "1940-1944 : la France occupée et censurée ; les mots deviennent une arme (tracts, journaux, poèmes clandestins).",
            "Pseudonymes : Vercors (Jean Bruller), Jean du Haut (Eluard), capitaine Alexandre (René Char).",
            "Éditions de Minuit clandestines (1941) : Le Silence de la mer (1942), L'Honneur des poètes (1943).",
            "Eluard, « Liberté » (1942) : énumération, refrain « J'écris ton nom », révélation finale du mot « Liberté ».",
            "Aragon : poésie de contrebande ; « La Rose et le Réséda » (1943) ; « Strophes pour se souvenir » (1955).",
            "Procédés : anaphore, refrain, énumération, apostrophe, impératif, antithèse de la nuit et de la lumière.",
          ],
          example: {
            statement: "Expliquez comment est construit le poème « Liberté » de Paul Eluard (1942) et quel est l'effet de cette construction.",
            solution: [
              "Étape 1 · Décrire la structure : presque toutes les strophes suivent le même modèle. Plusieurs vers commencent par la préposition « Sur » et nomment un lieu ou un objet (cahiers d'écolier, sable, arbres, murs, nuages...), puis revient la formule « J'écris ton nom ».",
              "Étape 2 · Nommer les procédés : l'anaphore de « Sur », le refrain « J'écris ton nom » et l'énumération des supports, qui va des objets de l'enfance aux paysages et au ciel.",
              "Étape 3 · Expliquer l'effet de l'énumération : le nom est écrit partout, dans tous les lieux et à tous les âges de la vie ; il semble qu'aucune force ne puisse l'effacer.",
              "Étape 4 · Expliquer l'effet du suspense : le pronom « ton » ne désigne d'abord personne, et l'on peut croire à un poème d'amour. Le mot « Liberté », placé tout à la fin, éclaire tout le poème : c'est à la liberté, confisquée par l'occupant, que s'adresse le poète.",
              "Réponse : par l'anaphore, le refrain et l'énumération, le poème s'amplifie jusqu'à la révélation finale du mot « Liberté » ; il devient un chant d'amour pour la liberté et un appel à la résistance, facile à retenir et à transmettre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque auteur à une indication et à une œuvre. Auteurs : Vercors, René Char, Paul Eluard, Louis Aragon. Indications : a) cofondateur des Éditions de Minuit ; b) « capitaine Alexandre » dans un maquis ; c) maître de la « poésie de contrebande » ; d) a publié sous le nom de Jean du Haut. Œuvres : Feuillets d'Hypnos ; « Liberté » ; Le Silence de la mer ; « La Rose et le Réséda ».",
              hint: "Vercors est le pseudonyme d'un auteur de prose ; René Char a combattu les armes à la main ; Aragon savait faire passer un message sous l'apparence d'un poème d'amour.",
              solution: [
                "Vercors : a) cofondateur des Éditions de Minuit ; Le Silence de la mer (1942).",
                "René Char : b) « capitaine Alexandre » ; Feuillets d'Hypnos (1946), notes écrites dans le maquis.",
                "Paul Eluard : d) Jean du Haut ; « Liberté » (1942).",
                "Louis Aragon : c) poésie de contrebande ; « La Rose et le Réséda » (1943).",
                "Réponse : Vercors, a ; Char, b ; Eluard, d ; Aragon, c.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce poème, écrit pour l'exercice à la manière des poètes de la Résistance : « Ils ont fermé les écoles et les ponts / Ils ont fermé les fenêtres des maisons / Ils ont fermé nos bouches et nos chansons / Mais ils n'ont pas fermé l'espoir // Camarade, garde les yeux ouverts / Même la plus longue nuit s'achève / Demain l'aube se lèvera sur nos rêves / Et le printemps chassera l'hiver ». a) Relevez l'anaphore et expliquez son effet. b) Relevez une apostrophe et un impératif : à qui s'adresse le poème, et que demande-t-il ? c) Montrez que la seconde strophe repose sur des antithèses, et dites quel message elle transmet.",
              hint: "Observez le début des trois premiers vers, puis le mot qui ouvre le quatrième. Dans la seconde strophe, cherchez des couples de mots opposés liés au temps qui passe.",
              solution: [
                "a) L'anaphore « Ils ont fermé » ouvre les trois premiers vers. Elle martèle les privations imposées par l'occupant, désigné seulement par « ils », sans être nommé. La conjonction « Mais » et la négation du quatrième vers (« ils n'ont pas fermé l'espoir ») créent une rupture : l'espoir échappe à l'oppression.",
                "b) L'apostrophe « Camarade » s'adresse à un compagnon de lutte ; l'impératif « garde les yeux ouverts » lui demande de rester vigilant et de ne pas renoncer.",
                "c) La seconde strophe oppose la nuit et l'aube, l'hiver et le printemps : la nuit et l'hiver figurent l'occupation, l'aube et le printemps la libération. Le message est un message d'espoir : l'oppression aura une fin.",
                "Réponse : anaphore de l'oppression, rupture par « Mais », apostrophe et impératif adressés à un camarade, antithèses qui annoncent la libération.",
              ],
            },
            {
              level: 3,
              statement: "Question de réflexion (type brevet) : « Pendant l'Occupation, pourquoi la poésie a-t-elle pu être une arme ? » Répondez en un paragraphe argumenté d'une quinzaine de lignes, en vous appuyant sur au moins deux exemples précis.",
              hint: "Pensez à ce qu'un poème permet de faire : circuler, se retenir par cœur, émouvoir, déjouer la censure, unir. Pour chaque idée, donnez un auteur et une œuvre.",
              solution: [
                "Étape 1 · Formuler la thèse : la poésie a été une arme, non pour tuer, mais pour résister moralement à l'occupant.",
                "Étape 2 · Premier argument : un poème est court et se retient facilement, il peut circuler partout. Exemple : « Liberté » d'Eluard (1942), construit sur un refrain, a été lâché à des milliers d'exemplaires par des avions britanniques.",
                "Étape 3 · Deuxième argument : la poésie peut déjouer la censure. Exemples : la poésie de contrebande d'Aragon, qui cache un message patriotique sous des poèmes d'amour ; les pseudonymes et les Éditions de Minuit clandestines (L'Honneur des poètes, 1943).",
                "Étape 4 · Troisième argument : elle unit et redonne espoir. Exemple : « La Rose et le Réséda » (1943) célèbre l'union de croyants et de non-croyants dans le même combat.",
                "Étape 5 · Rédiger. Exemple de paragraphe : Pendant l'Occupation, la poésie a été une véritable arme. D'abord, un poème est bref et se retient par cœur : il circule de main en main et ne peut être confisqué une fois appris. Ainsi, « Liberté » de Paul Eluard, rythmé par le refrain « J'écris ton nom », a été lâché à des milliers d'exemplaires au-dessus de la France occupée. Ensuite, la poésie sait tromper la censure : Louis Aragon dissimule des messages patriotiques sous l'apparence de poèmes d'amour, et les Éditions de Minuit publient clandestinement des poètes cachés sous de faux noms. Enfin, elle unit les résistants et entretient l'espoir, comme « La Rose et le Réséda », qui rassemble dans un même chant ceux qui croient au ciel et ceux qui n'y croient pas. Les mots n'ont pas vaincu l'armée allemande, mais ils ont empêché les esprits de se soumettre.",
                "Réponse attendue : un paragraphe organisé (thèse, arguments reliés par des connecteurs, exemples précis, conclusion).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Anaphore", right: "Même mot repris en tête de plusieurs vers" },
              { left: "Refrain", right: "Formule qui revient régulièrement, comme « J'écris ton nom »" },
              { left: "Apostrophe", right: "Adresse directe à quelqu'un ou à quelque chose (« Camarade »)" },
              { left: "Poésie de contrebande", right: "Message patriotique caché sous un poème d'amour" },
              { left: "Pseudonyme", right: "Faux nom qui protège l'auteur clandestin" },
              { left: "Antithèse de la nuit et de l'aube", right: "Opposition entre l'occupation et la libération" },
            ],
          },
          quiz: [
            { q: "Quel est le premier livre publié par les Éditions de Minuit clandestines ?", options: ["La Peste", "Le Parti pris des choses", "Le Silence de la mer", "Si c'est un homme"], answer: 2, why: "Le Silence de la mer de Vercors paraît clandestinement en 1942." },
            { q: "Dans « Liberté », quelle formule revient de strophe en strophe ?", options: ["J'écris ton nom", "Je me souviens", "Rappelle-toi", "Ô ma patrie"], answer: 0, why: "Le refrain « J'écris ton nom » prépare la révélation finale du mot « Liberté »." },
            { q: "Qu'appelle-t-on la « poésie de contrebande » ?", options: ["Des recueils vendus en secret au marché noir pendant la guerre", "Des poèmes traduits de l'allemand", "Des chansons de marins et de contrebandiers", "Un message résistant caché sous un poème d'amour"], answer: 3, why: "Aragon cache des messages patriotiques sous des formes traditionnelles pour déjouer la censure." },
            { q: "Quel nom René Char portait-il dans le maquis ?", options: ["Vercors", "Capitaine Alexandre", "Jean du Haut", "Le capitaine Fracasse"], answer: 1, why: "Le poète commandait un groupe de résistants sous le nom de capitaine Alexandre." },
            { q: "Que représente souvent l'aube dans les poèmes de la Résistance ?", options: ["La fatigue des combattants après la nuit", "L'occupation", "La libération et l'espoir", "Le travail des champs"], answer: 2, why: "L'aube s'oppose à la nuit de l'occupation : elle annonce la libération." },
          ],
          trap: "Analyser « Liberté » comme un simple poème d'amour, ou oublier le contexte : un poème de la Résistance ne se comprend qu'en le situant (date, occupation, censure, clandestinité).",
          method: "Construisez une fiche « Résistance » en trois colonnes : l'auteur et son pseudonyme, l'œuvre et sa date, le procédé principal (refrain, contrebande, énumération). Lisez à voix haute un poème étudié en classe : vous sentirez le rôle du rythme et des répétitions.",
        },
      ],
    },
    /* ==================================================================== */
    /* PROGRÈS ET RÊVES SCIENTIFIQUES                                         */
    /* ==================================================================== */
    {
      id: 'progres-reves-scientifiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'science-fiction-anticipation',
          title: "Science-fiction et récit d'anticipation",
          minutes: 30,
          objectives: [
            "Définir la science-fiction et le récit d'anticipation, et en situer les grandes œuvres.",
            "Identifier les caractéristiques d'un récit de science-fiction : cadre, lexique scientifique, néologismes, vraisemblance.",
            "Analyser comment un récit d'anticipation fait rêver et fait réfléchir sur le présent.",
            "Rédiger le début d'un récit d'anticipation.",
          ],
          course: [
            {
              heading: "Définir la science-fiction",
              paragraphs: [
                "La science-fiction est un genre narratif qui imagine des mondes transformés par la science et la technique : voyages dans l'espace ou dans le temps, robots, intelligences artificielles, rencontres avec des extraterrestres, sociétés futures. Elle part d'un élément nouveau, qui n'existe pas (ou pas encore) dans notre réalité, et en tire les conséquences de façon logique.",
                "C'est ce qui la distingue du merveilleux et du fantastique. Dans un conte merveilleux, la magie est acceptée sans explication ; dans le fantastique, un événement inexplicable fait hésiter le personnage entre une explication rationnelle et une explication surnaturelle. En science-fiction, l'élément étrange est présenté comme le résultat possible des progrès de la science : il se veut rationnel et vraisemblable, même s'il est imaginaire.",
                "Le récit d'anticipation est une forme de science-fiction qui se situe dans un futur plus ou moins proche et imagine ce que deviendra notre monde si certaines tendances du présent se prolongent : progrès technique, pollution, surveillance, dérèglement du climat. Il pose la question : « Et si... ? »",
              ],
              box: { label: "Définition", text: "Science-fiction : récit qui imagine, de façon rationnelle et vraisemblable, les conséquences d'une invention scientifique ou d'un changement du monde. Anticipation : récit situé dans un futur qui prolonge les tendances du présent." },
            },
            {
              heading: "Une brève histoire du genre",
              paragraphs: [
                "Les écrivains rêvent depuis longtemps de mondes impossibles. Au XVIIe siècle, Cyrano de Bergerac imagine un voyage dans la Lune (L'Autre Monde, publié en 1657) ; au XVIIIe, Voltaire fait visiter la Terre à un géant venu de l'étoile Sirius dans Micromégas (1752). Ces récits se servent de l'imaginaire pour critiquer la société de leur temps.",
                "Le genre moderne naît au XIXe siècle, quand la science transforme la vie quotidienne. En 1818, Mary Shelley publie Frankenstein : un savant donne vie à une créature qu'il ne sait pas maîtriser. Jules Verne, dans ses Voyages extraordinaires, s'appuie sur les connaissances de son époque pour imaginer De la Terre à la Lune (1865) ou Vingt mille lieues sous les mers (1869-1870), avec le sous-marin Nautilus du capitaine Nemo. L'Anglais H. G. Wells écrit La Machine à explorer le temps (1895) et La Guerre des mondes (1898).",
                "Le mot « science-fiction » est popularisé aux États-Unis à la fin des années 1920 par l'éditeur Hugo Gernsback. Au XXe siècle, le genre se développe : René Barjavel imagine dans Ravage (1943) une France soudain privée d'électricité ; Isaac Asimov formule les « trois lois de la robotique » dans les nouvelles réunies dans Les Robots (1950) ; Ray Bradbury écrit Chroniques martiennes (1950) ; Pierre Boulle publie La Planète des singes (1963).",
              ],
              box: { label: "Repère", text: "Cyrano de Bergerac, L'Autre Monde (1657) ; Voltaire, Micromégas (1752) ; Shelley, Frankenstein (1818) ; Verne, De la Terre à la Lune (1865) ; Wells, La Machine à explorer le temps (1895) ; Barjavel, Ravage (1943) ; Asimov, Les Robots (1950)." },
            },
            {
              heading: "Les caractéristiques du récit de science-fiction",
              paragraphs: [
                "Le récit de science-fiction construit un monde cohérent. On y repère : un cadre spatio-temporel décalé (le futur, une autre planète, un vaisseau spatial) ; un lexique scientifique et technique ; des néologismes, c'est-à-dire des mots inventés pour désigner des objets ou des réalités qui n'existent pas encore (le mot « robot » lui-même apparaît en 1920 dans une pièce de théâtre de l'écrivain tchèque Karel Čapek) ; des explications qui rendent ce monde vraisemblable.",
                "Les grands thèmes du genre sont le voyage dans l'espace (le space opera, ou épopée spatiale), le voyage dans le temps, la rencontre avec l'autre (extraterrestre, mutant, robot), la catastrophe et le monde d'après (récit post-apocalyptique), l'uchronie (l'histoire réécrite à partir d'un événement qui aurait tourné autrement) et la société future, idéale ou cauchemardesque.",
                "La science-fiction a souvent une double fonction. Elle fait rêver : elle émerveille par ses inventions et ses mondes lointains. Mais elle fait aussi réfléchir : en grossissant les tendances du présent, elle interroge les promesses et les dangers du progrès. Frankenstein pose déjà la question de la responsabilité du savant ; aujourd'hui, de nombreux récits interrogent l'intelligence artificielle, le clonage ou le réchauffement climatique.",
              ],
              box: { label: "À retenir", text: "Indices d'un récit de science-fiction : cadre futur ou lointain, lexique scientifique, néologismes, explications rationnelles. Fonctions : faire rêver (émerveillement) et faire réfléchir (avertissement, critique du présent)." },
            },
          ],
          keyPoints: [
            "La science-fiction imagine, de façon rationnelle, les conséquences d'une invention ou d'un changement du monde.",
            "Différence avec le merveilleux (magie acceptée) et le fantastique (hésitation devant l'inexplicable).",
            "Anticipation : récit situé dans le futur, qui prolonge les tendances du présent (« Et si... ? »).",
            "Repères : Cyrano (1657), Voltaire (1752), Shelley (1818), Verne (1865), Wells (1895), Barjavel (1943), Asimov (1950).",
            "Indices : cadre futur ou lointain, lexique scientifique, néologismes, vraisemblance.",
            "Double fonction : faire rêver et faire réfléchir sur le progrès.",
          ],
          example: {
            statement: "Lisez cet extrait, écrit pour l'exercice, puis relevez les indices qui en font un récit d'anticipation et dites quelle inquiétude il suggère : « En 2147, Léa se réveilla avant que son assistant domestique ne lui annonce la météo de Mars. Par le hublot de la station Hélios, la Terre n'était plus qu'une bille grise voilée de poussière. Elle enfila sa combinaison thermorégulée, avala sa capsule nutritive et vérifia son bracelet-mémoire : il lui restait trois jours d'oxygène réglementaire avant le prochain ravitaillement. »",
            solution: [
              "Étape 1 · Le cadre spatio-temporel : la date (2147) situe le récit dans le futur ; la « station Hélios », la « météo de Mars » et le « hublot » placent l'action dans l'espace.",
              "Étape 2 · Les objets techniques et les néologismes : « assistant domestique », « combinaison thermorégulée », « capsule nutritive », « bracelet-mémoire » désignent des technologies imaginaires, nommées par des mots composés inventés.",
              "Étape 3 · La vraisemblance : le récit ne s'étonne pas de ces objets ; ils font partie du quotidien de Léa, ce qui rend le monde cohérent.",
              "Étape 4 · L'inquiétude suggérée : la Terre, « bille grise voilée de poussière », semble polluée ou dévastée ; l'oxygène est rationné. Le texte prolonge des inquiétudes de notre époque : la pollution et l'épuisement des ressources.",
              "Réponse : la date future, le cadre spatial, les objets techniques et les néologismes en font un récit d'anticipation, qui fait rêver par ses inventions mais alerte sur l'avenir de la Terre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites pour chaque situation s'il s'agit de merveilleux, de fantastique ou de science-fiction, et justifiez : a) Une fée transforme une citrouille en carrosse. b) Un ingénieur met au point une machine qui permet de revenir en 1789. c) La nuit, un homme entend des pas dans son grenier vide et ne sait pas s'il rêve ou si un fantôme le visite. d) Des colons terriens découvrent sur une planète lointaine une forme de vie qui communique par la lumière.",
              hint: "Demandez-vous comment le récit explique l'événement étrange : par une magie acceptée sans question, par une hésitation, ou par la science et la technique.",
              solution: [
                "a) Merveilleux : la magie de la fée est acceptée sans explication.",
                "b) Science-fiction : le voyage dans le temps est rendu possible par une machine, c'est-à-dire par la technique.",
                "c) Fantastique : le personnage hésite entre une explication rationnelle (le rêve) et une explication surnaturelle (le fantôme).",
                "d) Science-fiction : colonisation de l'espace et rencontre avec une forme de vie extraterrestre.",
                "Réponse : a) merveilleux ; b) science-fiction ; c) fantastique ; d) science-fiction.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet extrait, écrit pour l'exercice : « Depuis la Grande Panne de 2061, plus aucune machine ne fonctionnait. Les tours de verre de la ville s'étaient vidées ; on cultivait des pommes de terre sur les anciens parkings. Mon grand-père racontait qu'autrefois, on parlait à des écrans qui répondaient. Je ne le croyais qu'à moitié. » a) À quel type de récit de science-fiction cet extrait appartient-il ? b) Relevez deux indices qui opposent le monde d'avant et le monde d'après. c) Quelle réflexion sur notre époque ce texte propose-t-il ?",
              hint: "Une catastrophe a eu lieu : comment appelle-t-on les récits qui racontent le monde d'après ? Cherchez les marques du passé (plus-que-parfait, « autrefois »).",
              solution: [
                "a) C'est un récit post-apocalyptique : il raconte le monde après une catastrophe, comme Ravage de Barjavel (1943), où l'électricité disparaît.",
                "b) Les « tours de verre » de la ville moderne se sont vidées, alors qu'on cultive désormais des pommes de terre « sur les anciens parkings » ; autrefois, on « parlait à des écrans qui répondaient », aujourd'hui « plus aucune machine ne fonctionnait ».",
                "c) Le texte nous interroge sur notre dépendance aux machines et à l'énergie : que deviendrions-nous sans elles ? Le narrateur qui ne croit « qu'à moitié » son grand-père montre que notre quotidien pourrait sembler un jour incroyable.",
                "Réponse : un récit post-apocalyptique qui oppose la ville technologique d'hier à un monde redevenu agricole, et qui fait réfléchir à notre dépendance à la technique.",
              ],
            },
            {
              level: 3,
              statement: "Sujet d'imagination (type brevet) : « Nous sommes en 2090. Un collégien découvre dans un grenier un vieux smartphone du début du siècle. » Rédigez la suite de ce récit d'anticipation, en une quarantaine de lignes au moins. Vous ferez apparaître le monde de 2090 (objets, mode de vie, lieux) grâce à des détails précis et à au moins deux néologismes, et vous amènerez le lecteur à réfléchir sur notre époque.",
              hint: "Imaginez d'abord le monde de 2090 en trois points (objets, vie quotidienne, problème de société), puis faites réagir le personnage devant l'objet ancien : son étonnement révèle à la fois son monde et le nôtre.",
              solution: [
                "Étape 1 · Analyser le sujet : récit à la première ou à la troisième personne, cadre en 2090, objet déclencheur (le smartphone), consignes (détails, deux néologismes, réflexion sur notre époque).",
                "Étape 2 · Imaginer le monde : des objets (holo-murs, capteurs de pensée), un mode de vie (cours à distance, villes végétalisées), un problème (l'eau rationnée, ou au contraire une vie sans écrans portatifs).",
                "Étape 3 · Construire le récit : la découverte dans le grenier ; l'examen de l'objet incompréhensible ; l'explication d'un adulte ; la réflexion finale du personnage sur la vie des gens du début du siècle.",
                "Étape 4 · Rédiger, au passé simple et à l'imparfait. Exemple de passage : Dans la poussière du grenier, Noé trouva un rectangle noir, lourd et froid. Il le tourna dans tous les sens : pas de projecteur, pas de capteur de pensée. « Grand-mère, qu'est-ce que c'est ? » Elle sourit : « Un téléphone. Autrefois, on le regardait toute la journée. » Noé n'en revenait pas : qui pouvait avoir envie de fixer un si petit écran, alors que les holo-murs de sa chambre affichaient le monde entier ?",
                "Étape 5 · Se relire : présence d'au moins deux néologismes (holo-murs, capteur de pensée), cohérence du monde imaginé, ponctuation du dialogue, réflexion finale sur notre rapport aux écrans.",
                "Réponse attendue : un récit d'anticipation cohérent, riche en détails, qui utilise le regard étonné du personnage pour faire réfléchir le lecteur sur son propre présent.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces œuvres dans l'ordre chronologique de leur publication.",
            items: [
              "Cyrano de Bergerac imagine un voyage dans la Lune (L'Autre Monde)",
              "Voltaire fait voyager un géant venu de Sirius (Micromégas)",
              "Mary Shelley publie Frankenstein",
              "Jules Verne publie De la Terre à la Lune",
              "H. G. Wells publie La Machine à explorer le temps",
              "René Barjavel publie Ravage",
              "Pierre Boulle publie La Planète des singes",
            ],
          },
          quiz: [
            { q: "Qu'est-ce qui distingue la science-fiction du merveilleux ?", options: ["Elle se passe toujours sur une autre planète que la Terre", "Elle justifie l'étrange par la science", "Elle met en scène des fées et des sorciers", "Elle ne contient jamais de personnages humains"], answer: 1, why: "En science-fiction, l'élément étrange est présenté comme rationnel, fruit possible de la science." },
            { q: "Qui a écrit Vingt mille lieues sous les mers ?", options: ["H. G. Wells", "René Barjavel", "Mary Shelley", "Jules Verne"], answer: 3, why: "Ce roman de Jules Verne (1869-1870) met en scène le Nautilus du capitaine Nemo." },
            { q: "Qu'est-ce qu'un néologisme ?", options: ["Un mot ancien qui n'est plus employé", "Un mot nouvellement créé", "Un mot emprunté au latin", "Une figure de style fondée sur la répétition"], answer: 1, why: "La science-fiction invente des mots pour nommer des réalités qui n'existent pas encore." },
            { q: "Dans quel roman Barjavel imagine-t-il une France soudain privée d'électricité ?", options: ["Ravage", "La Nuit des temps", "Micromégas", "Chroniques martiennes"], answer: 0, why: "Ravage (1943) est un récit post-apocalyptique." },
            { q: "À quoi sert la question « Et si... ? » dans un récit d'anticipation ?", options: ["À démontrer qu'un événement historique n'a jamais eu lieu", "À introduire un dialogue entre deux savants", "À imaginer où mènerait une tendance actuelle", "À annoncer une fin heureuse"], answer: 2, why: "L'anticipation prolonge une tendance du présent pour en imaginer les conséquences." },
          ],
          trap: "Classer en science-fiction tout récit qui contient de l'étrange : un fantôme relève du fantastique et une fée du merveilleux. La science-fiction exige une explication rationnelle, scientifique ou technique, même imaginaire.",
          method: "Pour repérer un récit de science-fiction, soulignez de trois couleurs les indices de temps et de lieu, le vocabulaire scientifique et les néologismes. Demandez-vous ensuite de quel rêve ou de quelle inquiétude de notre époque ce texte est le miroir grossissant.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dystopie',
          title: "La dystopie : quand le progrès inquiète",
          minutes: 30,
          objectives: [
            "Définir l'utopie et la dystopie, et situer les grandes dystopies du XXe siècle.",
            "Identifier les caractéristiques d'une société dystopique : pouvoir total, surveillance, uniformisation.",
            "Analyser la fonction critique d'un récit dystopique, qui met en garde contre certains usages du progrès.",
            "Rédiger un développement argumenté sur l'intérêt de ces récits.",
          ],
          course: [
            {
              heading: "De l'utopie à la dystopie",
              paragraphs: [
                "Le mot « utopie » a été inventé par l'humaniste anglais Thomas More, qui publie en 1516, en latin, un livre intitulé Utopia. Il y décrit une île imaginaire où règne une société parfaitement organisée et juste. Le mot est formé sur le grec ou (non) et topos (lieu) : l'utopie est le lieu qui n'existe nulle part. On peut aussi y entendre eu (bien) : c'est le lieu du bonheur.",
                "La dystopie, ou contre-utopie, en est l'inverse : elle décrit une société imaginaire, souvent future, présentée par ses dirigeants comme idéale, mais qui se révèle oppressive et cauchemardesque pour les individus. Le préfixe grec dys- exprime la difficulté, le mauvais état (comme dans « dysfonctionnement »). Souvent, la dystopie naît d'une utopie qui a mal tourné : vouloir le bonheur de tous à tout prix conduit à supprimer la liberté de chacun.",
              ],
              box: { label: "Définition", text: "Utopie (Thomas More, 1516) : description d'une société idéale imaginaire. Dystopie ou contre-utopie : société imaginaire présentée comme parfaite, mais qui écrase l'individu ; elle met en garde le lecteur contre une évolution possible de son propre monde." },
            },
            {
              heading: "Les grandes dystopies",
              paragraphs: [
                "Le genre se développe au XXe siècle, au moment où apparaissent les régimes totalitaires et où le progrès technique montre son pouvoir de destruction. Dans Nous (aussi traduit Nous autres), écrit en 1920, le Russe Ievgueni Zamiatine imagine un État où chacun vit dans des maisons de verre, sous l'œil des gardiens. Dans Le Meilleur des mondes (1932), l'Anglais Aldous Huxley décrit une société où les êtres humains sont fabriqués en laboratoire et conditionnés avant même leur naissance pour appartenir à une caste, des Alphas aux Epsilons ; une drogue, le soma, maintient chacun dans un bonheur artificiel.",
                "Dans 1984 (1949), George Orwell imagine un État totalitaire, l'Océania, dirigé par un parti unique dont le chef, Big Brother, semble partout présent. Des « télécrans » surveillent chaque foyer, la Police de la Pensée traque les opinions interdites, le ministère de la Vérité réécrit le passé, et la « novlangue » supprime peu à peu les mots qui permettraient de penser contre le régime. Le héros, Winston Smith, tente de se révolter, mais il finit par être brisé.",
                "Dans Fahrenheit 451 (1953), Ray Bradbury imagine une société où les pompiers ne combattent plus le feu : ils brûlent les livres, jugés dangereux parce qu'ils font penser. Le titre désigne, selon l'auteur, la température à laquelle le papier s'enflamme (451 degrés Fahrenheit, environ 233 °C). Le pompier Guy Montag finit par rejoindre des « hommes-livres » qui apprennent les œuvres par cœur pour les sauver. Plus récemment, Margaret Atwood (La Servante écarlate, 1985) ou Suzanne Collins (Hunger Games, 2008) ont renouvelé le genre.",
              ],
              box: { label: "Repère", text: "Zamiatine, Nous (écrit en 1920) ; Huxley, Le Meilleur des mondes (1932) ; Orwell, 1984 (1949) ; Bradbury, Fahrenheit 451 (1953) ; Atwood, La Servante écarlate (1985) ; Collins, Hunger Games (2008)." },
            },
            {
              heading: "Les caractéristiques d'une société dystopique",
              paragraphs: [
                "Les dystopies se ressemblent. Le pouvoir y est total et souvent incarné par une figure lointaine et omniprésente. Les citoyens sont surveillés en permanence, uniformisés (mêmes vêtements, mêmes horaires, numéros à la place des noms) et privés de vie privée. Le passé est effacé ou réécrit, les livres sont interdits, la langue appauvrie, les émotions contrôlées. La science et la technique, au lieu de libérer l'homme, servent à le dominer : conditionnement, manipulation génétique, écrans de surveillance, drogues.",
                "Le récit suit souvent le même schéma : un personnage qui vivait comme les autres prend conscience de l'oppression, grâce à une rencontre, à un livre ou à un amour interdit. Il commence à douter, puis à désobéir. Sa révolte échoue parfois (Winston Smith dans 1984) ou ouvre un espoir fragile (Montag dans Fahrenheit 451). Le lecteur découvre le système en même temps que lui.",
              ],
              box: { label: "À retenir", text: "Une dystopie : pouvoir total, surveillance, uniformisation, mémoire et langue contrôlées, science au service de la domination ; un héros qui prend conscience et se révolte." },
            },
            {
              heading: "Pourquoi lire des dystopies ?",
              paragraphs: [
                "La dystopie est un récit d'avertissement. En grossissant des tendances de son époque, l'auteur alerte le lecteur sur ce que pourrait devenir sa société. Huxley interroge la société de consommation et les manipulations du vivant ; Orwell s'inspire des régimes totalitaires de son temps, en particulier du stalinisme et du nazisme ; Bradbury s'inquiète d'une société de divertissement qui ne lit plus, et se souvient des autodafés, ces livres brûlés en public par les nazis en 1933.",
                "Aujourd'hui, les dystopies continuent d'interroger notre monde : surveillance par les caméras et les données numériques, notation des individus, intelligences artificielles, crise climatique. Le vocabulaire de ces romans est même entré dans la langue courante : on parle d'une situation « orwellienne » ou de « Big Brother » pour désigner une surveillance généralisée. Lire une dystopie, c'est apprendre à garder un esprit critique face aux promesses du progrès.",
              ],
            },
          ],
          keyPoints: [
            "Utopie : société idéale imaginaire (Thomas More, Utopia, 1516) ; du grec ou (non) et topos (lieu) : le lieu de nulle part.",
            "Dystopie ou contre-utopie : société présentée comme parfaite, mais oppressive pour l'individu.",
            "Repères : Huxley, Le Meilleur des mondes (1932) ; Orwell, 1984 (1949) ; Bradbury, Fahrenheit 451 (1953).",
            "Traits : pouvoir total, surveillance, uniformisation, passé réécrit, livres interdits, langue appauvrie.",
            "Schéma : un héros prend conscience, doute, se révolte ; échec ou espoir fragile.",
            "Fonction : avertir le lecteur et le faire réfléchir aux dangers du pouvoir et de certains usages du progrès.",
          ],
          example: {
            statement: "Lisez cet extrait, écrit pour l'exercice, puis montrez qu'il décrit une société dystopique et que sa dernière phrase annonce un tournant : « Au Secteur 7, la journée commençait à 6 heures précises, quand le Haut-Parleur Central diffusait l'Hymne du Bonheur. Chacun revêtait sa tunique grise, avalait sa ration et rejoignait son poste. Les caméras des couloirs souriaient doucement. Le citoyen K-412 ne se souvenait pas d'avoir jamais été malheureux. Ce matin-là pourtant, dans la poche de sa tunique, il trouva un objet inconnu : un petit livre de papier. »",
            solution: [
              "Étape 1 · Le contrôle de la vie : l'horaire est imposé (« à 6 heures précises ») et tous accomplissent les mêmes gestes (« Chacun revêtait..., avalait..., rejoignait... ») : l'existence est réglée par le pouvoir.",
              "Étape 2 · L'uniformisation : la « tunique grise » et le matricule « K-412 », qui remplace le nom, effacent l'individu.",
              "Étape 3 · La surveillance et la propagande : les « caméras des couloirs » surveillent ; le « Haut-Parleur Central » et l'« Hymne du Bonheur » (avec leurs majuscules) imposent un bonheur officiel. L'image des caméras qui « souriaient doucement » est ironique : la surveillance se déguise en bienveillance.",
              "Étape 4 · Le bonheur artificiel : K-412 « ne se souvenait pas d'avoir jamais été malheureux », ce qui suggère une mémoire contrôlée plutôt qu'un vrai bonheur.",
              "Étape 5 · Le tournant : la découverte d'un « petit livre de papier », objet « inconnu », introduit l'élément perturbateur. Comme dans Fahrenheit 451, le livre peut éveiller la conscience du héros.",
              "Réponse : contrôle du temps, uniformisation, surveillance et bonheur imposé caractérisent une dystopie ; le livre trouvé annonce la prise de conscience, et peut-être la révolte, du personnage.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Utopie ou dystopie ? Justifiez votre réponse. a) Une île où tous les biens sont mis en commun et où chacun travaille six heures par jour, décrite comme un modèle à imiter. b) Une ville où des écrans enregistrent chaque parole et où les citoyens qui doutent disparaissent. c) Un État qui fabrique les enfants en laboratoire et les conditionne pour qu'ils aiment le métier qu'on leur impose. d) Un monde où les pompiers brûlent les livres pour que chacun reste tranquille.",
              hint: "Demandez-vous si la société est proposée comme un modèle à imiter, ou si elle écrase la liberté des individus sous couvert de bonheur ou de sécurité.",
              solution: [
                "a) Utopie : c'est la société idéale décrite par Thomas More dans Utopia (1516), présentée comme un modèle.",
                "b) Dystopie : surveillance totale et élimination des opposants, comme dans 1984 d'Orwell.",
                "c) Dystopie : conditionnement et castes imposées, comme dans Le Meilleur des mondes de Huxley.",
                "d) Dystopie : la pensée est supprimée au nom de la tranquillité, comme dans Fahrenheit 451 de Bradbury.",
                "Réponse : a) utopie ; b), c) et d) dystopies.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cet extrait, écrit pour l'exercice : « Le Ministère avait encore supprimé des mots. Cette semaine, c'étaient les mots colère, pourquoi et ensemble. Les dictionnaires des écoles avaient été remplacés pendant la nuit. Lina essaya de dire à son frère ce qu'elle ressentait, mais il lui manquait un mot, et la phrase resta suspendue entre eux, inutile. » a) Quel moyen de contrôle cette société utilise-t-elle ? À quelle œuvre fait-il penser ? b) Pourquoi le pouvoir a-t-il choisi de supprimer ces trois mots en particulier ? c) Quelle est la fonction de la dernière phrase ?",
              hint: "Pensez à la « novlangue ». Pour chaque mot supprimé, demandez-vous quelle attitude il permettait d'exprimer face au pouvoir.",
              solution: [
                "a) Le pouvoir contrôle la langue en supprimant des mots, en secret (les dictionnaires sont remplacés « pendant la nuit »). Cela fait penser à la novlangue de 1984 d'Orwell.",
                "b) « Colère » permet d'exprimer la révolte, « pourquoi » de poser des questions et donc d'exercer son esprit critique, « ensemble » de penser l'action collective et la solidarité. Le pouvoir supprime les mots qui permettraient de penser contre lui et de s'unir.",
                "c) La dernière phrase montre concrètement les effets de cette censure : sans le mot, Lina ne peut plus exprimer ce qu'elle ressent. La phrase « suspendue », « inutile », figure l'isolement des individus. Le lecteur comprend que la langue est une condition de la liberté.",
                "Réponse : un contrôle de la langue inspiré de la novlangue, qui vise la révolte, l'esprit critique et la solidarité, et isole les individus.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de réflexion (type brevet) : « Selon vous, les récits de dystopie sont-ils seulement des divertissements, ou peuvent-ils nous aider à réfléchir sur notre propre monde ? » Vous présenterez votre réflexion dans un développement argumenté et organisé, en vous appuyant sur vos lectures, sur les films ou séries que vous connaissez et sur votre culture personnelle.",
              hint: "Reconnaissez d'abord ce qui est vrai dans l'idée de divertissement (suspense, aventure, univers spectaculaire), puis montrez ce que ces récits apprennent, avec des exemples précis (titre, auteur, élément du récit).",
              solution: [
                "Étape 1 · Analyser le sujet : l'alternative « seulement des divertissements » ou « aider à réfléchir » invite à un plan en deux parties qui conduit à une réponse nuancée.",
                "Étape 2 · Introduction : rappeler ce qu'est une dystopie (une société présentée comme parfaite mais oppressive), poser la question, annoncer le plan.",
                "Étape 3 · Première partie, des récits qui divertissent : ils offrent du suspense, des héros auxquels on s'identifie et des univers spectaculaires ; Hunger Games de Suzanne Collins, par exemple, est d'abord un récit d'aventure et de survie, adapté au cinéma avec un grand succès.",
                "Étape 4 · Deuxième partie, des récits qui font réfléchir : 1984 d'Orwell montre les dangers de la surveillance et de la manipulation de l'information, au point que l'on parle aujourd'hui de « Big Brother » ; Fahrenheit 451 de Bradbury rappelle le rôle des livres dans la liberté de penser ; Le Meilleur des mondes de Huxley interroge un bonheur artificiel fondé sur la consommation. Ces avertissements éclairent des questions actuelles : données personnelles, écrans, intelligence artificielle.",
                "Étape 5 · Conclusion : le divertissement n'empêche pas la réflexion, il la rend même accessible à un large public ; une dystopie réussie divertit pour mieux alerter. Ouverture possible : quelle dystopie pourrait-on écrire à partir de notre époque ?",
                "Réponse : un développement en deux parties (le plaisir du récit, puis sa portée critique), appuyé sur des exemples précis, et une conclusion qui montre que divertir et faire réfléchir vont ensemble.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque auteur à son œuvre et à l'un de ses éléments.",
            pairs: [
              { left: "Thomas More", right: "Utopia (1516) : l'île de la société idéale" },
              { left: "Aldous Huxley", right: "Le Meilleur des mondes : les castes et le soma" },
              { left: "George Orwell", right: "1984 : Big Brother et la novlangue" },
              { left: "Ray Bradbury", right: "Fahrenheit 451 : les livres brûlés" },
              { left: "Ievgueni Zamiatine", right: "Nous : des maisons de verre sous surveillance" },
              { left: "Margaret Atwood", right: "La Servante écarlate (1985)" },
            ],
          },
          quiz: [
            { q: "Que signifie, d'après son étymologie grecque, le mot « utopie » ?", options: ["Le pays où vivent les machines intelligentes", "Le lieu qui n'existe nulle part", "La ville de demain", "Le lieu du malheur"], answer: 1, why: "Ou signifie « non » et topos « lieu » : l'utopie est un lieu de nulle part." },
            { q: "Dans 1984, comment s'appelle la langue qui supprime les mots dangereux pour le régime ?", options: ["La novlangue", "Le soma", "Le télécran", "L'espéranto"], answer: 0, why: "La novlangue appauvrit le vocabulaire pour rendre impossible la pensée contre le régime." },
            { q: "Dans Fahrenheit 451, que font les pompiers ?", options: ["Ils éteignent les incendies de forêt", "Ils surveillent les écrans", "Ils fabriquent des robots", "Ils brûlent les livres"], answer: 3, why: "Les livres, qui font penser, sont jugés dangereux et brûlés." },
            { q: "Qu'est-ce qui caractérise une dystopie ?", options: ["Une société idéale où chacun est libre et heureux", "Un récit historique qui se déroule au Moyen Âge", "Un bonheur imposé qui écrase l'individu", "Un conte où des fées exaucent les vœux"], answer: 2, why: "La dystopie se présente comme parfaite, mais elle supprime la liberté de l'individu." },
            { q: "Dans Le Meilleur des mondes, à quoi sert le soma ?", options: ["À surveiller les citoyens grâce à des écrans", "À rendre artificiellement heureux", "À brûler les livres interdits", "À voyager dans le temps"], answer: 1, why: "Cette drogue maintient la population dans un bonheur artificiel et docile." },
          ],
          trap: "Confondre utopie et dystopie, ou croire que la dystopie parle seulement du futur : elle décrit un monde imaginaire, mais c'est toujours notre présent qu'elle critique en le grossissant.",
          method: "Pour analyser une dystopie, cherchez la promesse officielle de la société (bonheur, sécurité, égalité), puis ce qu'elle coûte à l'individu (liberté, mémoire, langue, amour). L'écart entre les deux est le cœur de la critique ; reliez-le enfin à une inquiétude de notre époque.",
        },
      ],
    },
  ],
}
