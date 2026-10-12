import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-5e',
  chapters: [
    /* ================================================================== */
    /* DES HISTOIRES POUR PLAIRE ET INSTRUIRE                               */
    /* ================================================================== */
    {
      id: 'plaire-et-instruire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'la-fable',
          title: 'La fable : un récit bref qui porte une morale',
          minutes: 30,
          objectives: [
            "Identifier les caractéristiques de la fable : un récit bref, des personnages souvent animaux, une morale.",
            "Distinguer le récit et la morale, et repérer la place de la morale dans la fable.",
            "Situer les grands fabulistes : Ésope, Phèdre et Jean de La Fontaine.",
            "Expliquer ce que signifie l'expression « plaire et instruire ».",
          ],
          course: [
            {
              heading: "Un récit bref au service d'une leçon",
              paragraphs: [
                "Une fable est un récit court, en vers ou en prose, qui raconte une petite histoire pour transmettre une leçon de sagesse. Cette leçon s'appelle la morale. Une fable se compose donc de deux parties : le récit, qui raconte ce qui arrive aux personnages, et la morale, qui tire la leçon de l'histoire.",
                "Prenons « Le Lion et le Rat » de Jean de La Fontaine. Un lion épargne un rat qui s'est jeté entre ses pattes. Plus tard, le lion est pris dans un filet de chasseurs ; il rugit, se débat, mais rien n'y fait. Le petit rat arrive alors et ronge une maille du filet, puis une autre, jusqu'à libérer le roi des animaux. La morale annonce la leçon : on a souvent besoin d'un plus petit que soi.",
                "La fable appartient à une grande famille de textes : l'apologue. Un apologue est un court récit inventé qui sert à illustrer une leçon. Le conte avec moralité, la parabole ou le conte philosophique sont d'autres formes d'apologue, que vous étudierez dans la leçon suivante.",
              ],
              box: { label: "Définition", text: "La fable est un apologue : un récit bref, en vers ou en prose, qui illustre une leçon de sagesse. Elle comprend deux parties : le récit (l'histoire racontée) et la morale (la leçon que l'on en tire)." },
            },
            {
              heading: "Des personnages qui nous ressemblent",
              paragraphs: [
                "Les personnages des fables sont souvent des animaux qui parlent, pensent et agissent comme des êtres humains : on dit qu'ils sont personnifiés. Chacun représente un trait de caractère que tout le monde reconnaît : le renard est rusé, le lion est puissant (c'est le roi des animaux), le loup est cruel et affamé, l'agneau est innocent, la fourmi est travailleuse et prévoyante.",
                "Derrière ces animaux, ce sont les hommes que la fable décrit. Le renard qui flatte le corbeau pour lui voler son fromage ressemble à ces flatteurs qui disent des compliments pour obtenir quelque chose. Utiliser des animaux permet de parler des défauts humains sans viser personne directement, et de rendre la leçon amusante.",
                "Les personnages ne sont pas toujours des animaux. On trouve aussi des êtres humains, comme dans « La Laitière et le Pot au lait », et même des objets, comme dans « Le Pot de terre et le Pot de fer ». Le principe reste le même : chaque personnage incarne une attitude face à la vie.",
              ],
            },
            {
              heading: "La morale : où la trouver, comment la reconnaître",
              paragraphs: [
                "La morale est une phrase générale, qui vaut pour tout le monde et pour toutes les époques. Elle est souvent écrite au présent de vérité générale, le présent qui exprime ce qui est toujours vrai. Elle est courte et facile à retenir, si bien que certaines morales sont devenues des proverbes : « Rien ne sert de courir ; il faut partir à point » (« Le Lièvre et la Tortue »).",
                "La morale peut se placer à la fin du récit, comme dans « Le Corbeau et le Renard », où le renard explique lui-même que tout flatteur vit aux dépens de celui qui l'écoute. Elle peut aussi se placer au début : « Le Loup et l'Agneau » commence par sa morale (« La raison du plus fort est toujours la meilleure »), puis l'histoire la démontre.",
                "Parfois, la morale n'est pas écrite : elle est implicite. Le lecteur doit la deviner à partir de l'histoire. « La Cigale et la Fourmi » se termine sur la réponse moqueuse de la fourmi, sans morale formulée : c'est à vous de comprendre qu'il faut penser à l'avenir, ou de vous demander si la fourmi n'est pas un peu dure.",
              ],
              box: { label: "À retenir", text: "Une morale explicite est écrite dans le texte, au début ou à la fin, souvent au présent de vérité générale. Une morale implicite n'est pas écrite : le lecteur la déduit de l'histoire, en observant qui réussit, qui échoue et pourquoi." },
            },
            {
              heading: "D'Ésope à La Fontaine : plaire et instruire",
              paragraphs: [
                "La fable est un genre très ancien. Le Grec Ésope, qui aurait vécu au VIe siècle avant J.-C., est considéré comme le père de la fable ; ses fables, en prose, ont d'abord circulé oralement. Au Ier siècle après J.-C., le poète latin Phèdre a repris et mis en vers beaucoup de ces histoires.",
                "Au XVIIe siècle, Jean de La Fontaine (1621-1695) s'inspire de ces modèles anciens et les réécrit en vers français, avec humour et vivacité. Ses Fables, réparties en douze livres, paraissent en trois recueils : en 1668, en 1678-1679 et en 1694. Il dédie le premier au Dauphin, le jeune fils du roi Louis XIV.",
                "La Fontaine reprend une idée du poète latin Horace : un bon texte doit à la fois plaire et instruire. La fable plaît grâce à son histoire vivante, à ses dialogues et à son humour ; elle instruit grâce à sa leçon. Elle fonctionne un peu comme un médicament enrobé de sucre : le plaisir du récit fait passer la leçon.",
              ],
              box: { label: "Repère", text: "Ésope : Grèce antique, VIe siècle av. J.-C., fables en prose. Phèdre : Rome, Ier siècle apr. J.-C., fables en vers latins. Jean de La Fontaine : France, XVIIe siècle, Fables en vers publiées de 1668 à 1694." },
            },
          ],
          keyPoints: [
            "La fable est un apologue : un récit bref, en vers ou en prose, qui illustre une leçon.",
            "Elle comprend deux parties : le récit et la morale.",
            "Les personnages sont souvent des animaux personnifiés qui représentent des défauts ou des qualités humaines.",
            "La morale est explicite (au début ou à la fin) ou implicite (à deviner) ; elle est souvent au présent de vérité générale.",
            "Grands fabulistes : Ésope (Grèce), Phèdre (Rome), La Fontaine (France, XVIIe siècle).",
            "La fable veut plaire (une histoire amusante) et instruire (une leçon).",
          ],
          example: {
            statement: "Lisez cette fable, écrite pour l'exercice : « Un Paon faisait la roue au milieu de la basse-cour. Une Mésange, perchée sur la clôture, l'avertit : un renard rôdait près du poulailler. Le Paon haussa ses belles plumes : “Les bêtes grises s'inquiètent de tout.” La Mésange prévint les poules, qui se mirent à l'abri. Quand le renard bondit, la lourde traîne du Paon l'empêcha de s'envoler ; il y laissa la moitié de ses plumes. Mieux vaut écouter un petit conseil que d'admirer son grand plumage. » Identifiez le récit, la morale et le rôle des personnages.",
            solution: [
              "Repérer le récit : de « Un Paon faisait la roue » à « la moitié de ses plumes ». Il raconte une courte histoire au passé (imparfait et passé simple), avec un dialogue.",
              "Repérer la morale : la dernière phrase, « Mieux vaut écouter un petit conseil que d'admirer son grand plumage ». Elle est au présent, elle vaut pour tout le monde : c'est une vérité générale.",
              "Place de la morale : elle est à la fin, après le récit. Elle est explicite, car elle est écrite dans le texte.",
              "Rôle des personnages : le Paon représente l'orgueilleux qui méprise les autres et ne pense qu'à son apparence ; la Mésange représente la personne modeste et attentive.",
              "Lien entre récit et morale : le Paon, qui n'a pas écouté, est puni ; les poules, qui ont écouté la Mésange, sont sauvées. Le dénouement prouve la morale.",
              "Réponse : un récit au passé suivi d'une morale explicite placée à la fin ; le Paon incarne l'orgueil, la Mésange la sagesse modeste.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lisez ce texte, écrit pour l'exercice : « Une Tortue voulait voir le monde. Deux Canards lui proposèrent de l'emporter, accrochée par la bouche à un bâton qu'ils tiendraient chacun par un bout. “Surtout, ne parlez pas pendant le voyage !” Au-dessus d'un village, des passants crièrent : “Regardez, la reine des tortues !” La Tortue, flattée, voulut répondre ; elle ouvrit la bouche et tomba. Le bavardage et la vanité perdent bien des gens. » a) Qui sont les personnages ? b) Délimitez le récit et la morale. c) La morale est-elle explicite ou implicite ? Où est-elle placée ?",
              hint: "La morale est une phrase générale, au présent, qui ne raconte plus l'histoire mais en tire une leçon pour tout le monde.",
              solution: [
                "a) Les personnages sont une Tortue, deux Canards et des passants. Les animaux parlent : ils sont personnifiés.",
                "b) Le récit va de « Une Tortue voulait voir le monde » à « elle ouvrit la bouche et tomba ». La morale est la dernière phrase : « Le bavardage et la vanité perdent bien des gens. »",
                "c) La morale est explicite, puisqu'elle est écrite. Elle est placée à la fin du récit.",
                "Remarque : La Fontaine a écrit une fable sur cette histoire, « La Tortue et les deux Canards » ; le texte ci-dessus est une version courte inventée pour l'exercice.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cette fable sans morale, écrite pour l'exercice : « Un Écureuil avait caché ses noisettes dans dix cachettes différentes. Une Pie, qui l'observait, lui dit : “Pourquoi te fatiguer ? Mets-les toutes dans le même trou !” L'Écureuil ne répondit rien et continua. En hiver, un sanglier fouilla le sol et dévora les provisions d'une cachette. Il en restait neuf. » a) Quel trait de caractère représente chaque animal ? b) Formulez la morale implicite en une phrase au présent de vérité générale. c) Proposez une place pour cette morale et dites pourquoi.",
              hint: "Demandez-vous ce qui serait arrivé si l'Écureuil avait suivi le conseil de la Pie. Une morale est une phrase générale, valable pour tout le monde, pas seulement pour l'écureuil.",
              solution: [
                "a) L'Écureuil représente la prudence et la prévoyance : il répartit ses réserves. La Pie représente le donneur de conseils irréfléchis, qui parle beaucoup sans réfléchir aux risques.",
                "b) Si tout avait été dans un seul trou, le sanglier aurait tout dévoré. Morale possible : « Il ne faut pas mettre tous ses œufs dans le même panier », ou « Qui partage ses réserves ne perd jamais tout. »",
                "c) On peut placer la morale à la fin, pour que le lecteur la comprenne après avoir vu le dénouement. On peut aussi la placer au début : l'histoire sert alors de preuve à ce qui vient d'être annoncé.",
                "Toute réponse est juste si la morale est générale, au présent, et si le dénouement de l'histoire la prouve.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici une fable écrite pour l'exercice : « La Fortune n'aime pas les paresseux. Un jeune Loir dormait sous un chêne pendant que ses frères ramassaient des glands. “J'en ramasserai demain”, disait-il chaque soir. Un matin, la première neige recouvrit la forêt. Ses frères, à l'abri dans leur terrier plein, l'invitèrent à partager leur repas, mais lui firent promettre de travailler au printemps. » a) Où est placée la morale ? À quel temps est-elle écrite et pourquoi ? b) La fin de l'histoire illustre-t-elle exactement la morale ? Expliquez. c) Réécrivez la fin pour que la morale soit implicite : supprimez la première phrase et terminez par une réplique d'un personnage qui fait comprendre la leçon.",
              hint: "Une morale implicite n'est pas écrite par le narrateur : on la devine grâce au dénouement ou à la dernière réplique. Pour la question b, demandez-vous si le Loir est vraiment puni.",
              solution: [
                "a) La morale est placée au début : « La Fortune n'aime pas les paresseux. » Elle est au présent de vérité générale, parce qu'elle exprime une leçon valable pour tous et en tout temps.",
                "b) Pas exactement. La morale annonce que le paresseux sera puni ; or le Loir est sauvé par ses frères, qui partagent avec lui. La fin ajoute une deuxième idée : la générosité de la famille, à condition que le paresseux change.",
                "c) Exemple de réécriture : « [...] Un matin, la première neige recouvrit la forêt. Le Loir, grelottant, frappa au terrier de ses frères. L'aîné entrouvrit la porte : “Entre pour cet hiver, petit frère. Mais au printemps, c'est toi qui porteras les glands.” »",
                "Explication : la morale n'est plus écrite, mais la réplique de l'aîné fait comprendre qu'il faut travailler pour préparer l'avenir, et que l'aide des autres a une limite.",
                "Résultat : morale placée au début, au présent de vérité générale ; une fin légèrement différente de la morale ; une réécriture où la leçon est portée par la dernière réplique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les fabulistes et leurs œuvres dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Ésope, fabuliste grec (VIe siècle av. J.-C.)",
              "Phèdre, fabuliste latin (Ier siècle apr. J.-C.)",
              "Premier recueil des Fables de La Fontaine (1668)",
              "Dernier recueil des Fables de La Fontaine (1694)",
              "Fables de Florian (1792)",
            ],
          },
          quiz: [
            { q: "Comment appelle-t-on la leçon que l'on tire d'une fable ?", options: ["Le titre", "La morale", "Le refrain", "La strophe"], answer: 1, why: "La morale est la leçon de sagesse que la fable veut transmettre ; elle peut être écrite ou à deviner." },
            { q: "Qui est considéré comme le père de la fable ?", options: ["Ésope", "La Fontaine", "Phèdre", "Florian"], answer: 0, why: "Ésope, en Grèce au VIe siècle avant J.-C., est le plus ancien fabuliste connu ; Phèdre et La Fontaine l'ont imité." },
            { q: "À quel temps la morale est-elle souvent écrite ?", options: ["À l'imparfait de description", "Au passé simple, temps du récit", "Au futur de l'indicatif", "Au présent de vérité générale"], answer: 3, why: "La morale exprime une leçon valable pour tous et pour toujours : on emploie le présent de vérité générale." },
            { q: "Dans « La Cigale et la Fourmi », la morale est :", options: ["placée au début", "implicite", "placée au milieu"], answer: 1, why: "La fable se termine sur la réplique de la fourmi : la leçon n'est pas formulée, le lecteur doit la déduire." },
            { q: "Que signifie « plaire et instruire » ?", options: ["Distraire sans rien apprendre au lecteur", "Faire peur pour obliger à obéir", "Amuser et donner une leçon", "Raconter seulement des histoires vraies"], answer: 2, why: "La fable plaît par son histoire vivante et instruit par sa morale : le plaisir aide à retenir la leçon." },
          ],
          trap: "Confondre le résumé de l'histoire et la morale : « le renard vole le fromage du corbeau » raconte le récit, alors que la morale est une phrase générale, valable pour tout le monde (par exemple : il faut se méfier des flatteurs).",
          method: "Pour trouver une morale implicite, posez trois questions : qui réussit, qui échoue, et pourquoi ? Puis transformez la réponse en une phrase générale au présent, sans nommer les personnages de la fable.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'recit-qui-fait-reflechir',
          title: 'Un récit qui fait réfléchir : imaginer pour raisonner',
          minutes: 30,
          objectives: [
            "Comprendre qu'un récit de fiction peut servir à faire réfléchir le lecteur et à défendre une idée.",
            "Reconnaître différentes formes d'apologue : fable, conte avec moralité, conte philosophique, parabole.",
            "Identifier la leçon d'un récit, qu'elle soit explicite ou implicite.",
            "Interpréter les choix de l'auteur : personnages, situation, dénouement.",
          ],
          course: [
            {
              heading: "Pourquoi raconter une histoire pour faire réfléchir ?",
              paragraphs: [
                "Pour convaincre quelqu'un, on peut lui donner directement une règle : « Ne mentez pas. » Mais une règle seule est vite oubliée. Une histoire, elle, se retient : on s'attache aux personnages, on a peur pour eux, on rit de leurs erreurs. L'émotion prépare la réflexion.",
                "Pensez à l'histoire du jeune berger qui criait au loup pour s'amuser, une fable attribuée à Ésope. Les villageois accourent plusieurs fois pour rien. Le jour où le loup arrive vraiment, plus personne ne le croit. Sans jamais dire « ne mentez pas », le récit fait comprendre que le menteur perd la confiance des autres.",
                "C'est le principe de l'apologue : l'auteur imagine une situation simple, presque comme une expérience, pour que le lecteur raisonne. Le récit devient une sorte de démonstration : voici ce qui arrive à celui qui agit de telle façon.",
              ],
              box: { label: "Définition", text: "Un apologue est un court récit de fiction qui illustre une leçon ou une idée. Il cherche à la fois à plaire (par l'histoire) et à instruire (par la leçon). La fable, le conte avec moralité, le conte philosophique et la parabole sont des apologues." },
            },
            {
              heading: "Les formes de l'apologue",
              paragraphs: [
                "La fable est la forme la plus connue : un récit bref, souvent avec des animaux, suivi ou précédé d'une morale. Le conte avec moralité ressemble au conte merveilleux, mais se termine par une leçon : en 1697, Charles Perrault publie Histoires ou contes du temps passé, et chaque conte s'achève par une « moralité » en vers. Celle du Petit Chaperon rouge met en garde les jeunes filles contre les « loups » qui les flattent.",
                "Le conte philosophique est né au XVIIIe siècle, avec Voltaire. Dans Zadig (1747), un jeune homme sage traverse des aventures surprenantes. Dans un épisode célèbre, il décrit avec précision la chienne de la reine et le cheval du roi, qu'il n'a jamais vus, simplement en observant leurs traces ; on l'accuse alors de les avoir volés. Le lecteur sourit, puis réfléchit à l'injustice et à la bêtise des juges.",
                "La parabole est un récit symbolique, souvent religieux, qui enseigne une leçon morale : les Évangiles en contiennent beaucoup, comme celle du bon Samaritain, un voyageur qui secourt un blessé que d'autres ont laissé au bord du chemin. Enfin, des récits modernes fonctionnent aussi comme des apologues : dans Le Petit Prince (1943), Antoine de Saint-Exupéry fait rencontrer à son héros un roi, un vaniteux ou un businessman, pour faire réfléchir aux travers des grandes personnes.",
              ],
              box: { label: "Repère", text: "Fable : Ésope, La Fontaine (XVIIe siècle). Conte avec moralité : Charles Perrault (1697). Conte philosophique : Voltaire, Zadig (1747). Parabole : récit symbolique, souvent religieux. Récit moderne : Saint-Exupéry, Le Petit Prince (1943)." },
            },
            {
              heading: "Une leçon explicite ou implicite",
              paragraphs: [
                "La leçon est explicite quand elle est écrite dans le texte : c'est le cas de la morale d'une fable ou de la moralité d'un conte de Perrault. Le lecteur n'a pas à la chercher, mais il peut se demander si elle est juste, ou si l'histoire ne dit pas autre chose.",
                "La leçon est implicite quand l'auteur ne la formule pas. Le lecteur doit alors la construire en observant plusieurs indices : qui est récompensé, qui est puni ; quel personnage change ; comment le narrateur décrit les personnages (avec admiration, avec ironie) ; quelles oppositions le texte met en scène (le fort et le faible, le sage et le sot).",
                "Dans un apologue, rien n'est laissé au hasard. Si un personnage puissant échoue face à un personnage modeste, ce n'est pas un accident : l'auteur veut peut-être montrer que la force ne suffit pas. Interpréter, c'est se demander pourquoi l'auteur a fait ces choix.",
              ],
              box: { label: "Méthode", text: "Pour trouver une leçon implicite : 1) repérez qui réussit et qui échoue ; 2) cherchez la cause de cette réussite ou de cet échec ; 3) observez le regard du narrateur ; 4) formulez une phrase générale au présent, sans nommer les personnages." },
            },
            {
              heading: "Plaire pour instruire : les moyens du récit",
              paragraphs: [
                "Pour plaire, l'apologue utilise tous les moyens du récit : le suspense (que va-t-il arriver ?), l'humour, le merveilleux (des animaux qui parlent, des voyages imaginaires), les dialogues vivants, les décors lointains. Ces moyens rendent la lecture agréable et retiennent l'attention.",
                "Pour instruire, il simplifie le monde. Les personnages sont des types (le vaniteux, le flatteur, le généreux) plutôt que des individus complexes. La situation est réduite à l'essentiel, comme dans une expérience de sciences où l'on ne fait varier qu'une chose à la fois. Le dénouement joue le rôle d'une conclusion : il montre les conséquences d'un comportement.",
                "Cette simplicité permet aussi de critiquer sans danger. En parlant d'un lion ou d'un roi imaginaire sur une petite planète, un auteur peut faire réfléchir à la vanité ou à l'abus de pouvoir sans viser une personne réelle.",
              ],
            },
          ],
          keyPoints: [
            "Un apologue est un récit de fiction qui illustre une leçon : il veut plaire et instruire.",
            "Formes : fable, conte avec moralité (Perrault, 1697), conte philosophique (Voltaire, Zadig, 1747), parabole.",
            "La leçon est explicite (écrite) ou implicite (à déduire du récit).",
            "Indices d'une leçon implicite : qui réussit ou échoue, pourquoi, regard du narrateur, oppositions entre personnages.",
            "L'apologue simplifie : personnages types, situation réduite, dénouement qui montre les conséquences.",
          ],
          example: {
            statement: "Lisez ce récit, écrit pour l'exercice : « Deux voisins avaient chacun un pommier. Le premier construisit une haute clôture pour que personne ne touche à ses fruits ; il passait ses journées à surveiller. Le second laissait les enfants du village cueillir quelques pommes ; en échange, ils l'aidaient à tailler les branches et à ramasser la récolte. À l'automne, le premier, épuisé, vit la moitié de ses fruits pourrir au sol. Le second remplit vingt paniers. » Quelle est la leçon de ce récit ? Est-elle explicite ou implicite ? Comment le récit la fait-il comprendre ?",
            solution: [
              "Chercher une phrase de leçon dans le texte : il n'y en a pas. Le récit s'arrête sur le résultat de la récolte. La leçon est donc implicite.",
              "Repérer qui réussit et qui échoue : le premier voisin échoue (fruits pourris, fatigue) ; le second réussit (vingt paniers).",
              "Chercher la cause : le premier garde tout pour lui et travaille seul ; le second partage un peu et reçoit de l'aide en retour.",
              "Observer les oppositions : clôture contre ouverture, méfiance contre confiance, solitude contre entraide. Les deux personnages sont des types simples, construits pour être comparés.",
              "Formuler la leçon en phrase générale : « Celui qui partage reçoit plus qu'il ne donne », ou « L'avarice appauvrit, la générosité enrichit. »",
              "Réponse : une leçon implicite sur la générosité et l'entraide, que le récit fait comprendre par l'opposition des deux voisins et par le dénouement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque description à la forme d'apologue qui convient (fable, conte avec moralité, conte philosophique, parabole). a) Un récit merveilleux, avec une fée ou un ogre, suivi d'une leçon en vers, publié par Charles Perrault. b) Un récit bref où un renard et un bouc tombent dans un puits, suivi d'une morale. c) Un récit symbolique tiré d'un texte religieux, qui enseigne l'amour du prochain. d) Un récit de Voltaire où un jeune homme sage voyage et rencontre l'injustice.",
              hint: "Repérez les indices : l'auteur cité, la présence d'animaux, le caractère religieux, le siècle.",
              solution: [
                "a) Conte avec moralité : Perrault termine chacun de ses contes par une « moralité » en vers.",
                "b) Fable : un récit bref avec des animaux personnifiés et une morale. La Fontaine a écrit « Le Renard et le Bouc ».",
                "c) Parabole : un récit symbolique, religieux, qui transmet une leçon morale.",
                "d) Conte philosophique : c'est la forme inventée au XVIIIe siècle par Voltaire, par exemple avec Zadig.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce récit, écrit pour l'exercice : « Un roi voulut savoir lequel de ses trois conseillers était le plus sage. Il donna à chacun une graine et dit : “Revenez dans un an avec ce qu'elle sera devenue.” Le premier revint avec un arbre magnifique, acheté au marché. Le deuxième en apporta un plus grand encore. Le troisième revint avec un pot vide : malgré tous ses soins, rien n'avait poussé. Le roi sourit et le nomma premier ministre : les graines avaient été bouillies. » a) Qui réussit, qui échoue ? b) Pourquoi le troisième conseiller est-il récompensé ? c) Formulez la leçon implicite. d) Relevez un élément qui plaît au lecteur.",
              hint: "La dernière phrase donne la clé : une graine bouillie peut-elle germer ? Demandez-vous alors ce que les deux premiers conseillers ont fait.",
              solution: [
                "a) Le troisième conseiller réussit : il est nommé premier ministre. Les deux premiers échouent, même si leurs arbres sont splendides.",
                "b) Les graines étaient bouillies : rien ne pouvait pousser. Les deux premiers ont donc triché en achetant un arbre ; le troisième a dit la vérité, même si son pot vide semblait un échec.",
                "c) Leçon possible : « L'honnêteté vaut mieux qu'une belle apparence », ou « Mieux vaut avouer un échec que tricher pour paraître réussir. »",
                "d) Le suspense (que va devenir la graine ?), la surprise finale (les graines bouillies) et le cadre de conte (un roi, une épreuve) rendent le récit agréable.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici le début d'un récit, écrit pour l'exercice : « Deux grenouilles tombèrent dans un seau de crème. Les parois étaient lisses, impossible d'en sortir. La première se dit : “À quoi bon lutter ?” La seconde décida de nager, encore et encore. » a) Écrivez deux fins différentes (2 ou 3 phrases chacune) : dans la fin A, la seconde grenouille s'en sort ; dans la fin B, les deux grenouilles se noient. b) Formulez la leçon de chaque version. c) Expliquez en deux phrases comment le dénouement change la leçon de l'apologue.",
              hint: "Pour la fin A, pensez à ce que devient la crème quand on la bat longtemps. Pour la fin B, la leçon peut porter sur autre chose que le courage, par exemple sur la prudence avant d'agir.",
              solution: [
                "a) Fin A : « La première grenouille cessa de bouger et coula. La seconde nagea toute la nuit ; à force d'être battue, la crème se changea en beurre. Au matin, elle prit appui sur ce bloc solide et sauta hors du seau. »",
                "a) Fin B : « La seconde grenouille nagea jusqu'à l'épuisement, puis coula à son tour, à côté de la première. Le fermier, en vidant le seau, haussa les épaules : “Elles n'avaient qu'à regarder où elles sautaient.” »",
                "b) Leçon de la version A : « Celui qui persévère trouve souvent une issue là où les autres renoncent. » Leçon de la version B : « Il faut réfléchir avant d'agir, car l'effort ne répare pas toujours une imprudence. »",
                "c) Le dénouement fonctionne comme la conclusion d'un raisonnement : il montre les conséquences d'un comportement. En changeant la fin, on change ce que le récit démontre, donc la leçon que le lecteur en tire.",
                "Toute réponse est juste si chaque leçon est une phrase générale et si elle découle clairement de la fin écrite.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les récits qui font réfléchir.",
            statements: [
              { text: "Un apologue est toujours une histoire vraie.", true: false, why: "L'apologue est un récit de fiction : l'auteur invente une situation pour illustrer une leçon." },
              { text: "Les contes de Perrault se terminent par une moralité en vers.", true: true, why: "Dans Histoires ou contes du temps passé (1697), chaque conte s'achève par une ou deux moralités." },
              { text: "Une leçon implicite est écrite à la fin du texte.", true: false, why: "Implicite signifie non écrite : le lecteur la déduit du récit." },
              { text: "Voltaire a écrit des contes philosophiques au XVIIIe siècle.", true: true, why: "Zadig (1747) est l'un de ses contes philosophiques." },
              { text: "Dans un apologue, les personnages sont souvent des types simples.", true: true, why: "Le vaniteux, le flatteur ou le généreux sont simplifiés pour que la leçon soit claire." },
              { text: "Changer la fin d'un apologue ne modifie jamais sa leçon.", true: false, why: "Le dénouement montre les conséquences d'un comportement : une autre fin peut prouver une autre leçon." },
            ],
          },
          quiz: [
            { q: "Qu'est-ce qu'un apologue ?", options: ["Un long poème lyrique, sans histoire racontée", "Un récit de fiction qui illustre une leçon", "Le résumé objectif d'un roman d'aventures", "Une pièce de théâtre comique"], answer: 1, why: "L'apologue raconte une histoire inventée pour transmettre une leçon ; la fable en est la forme la plus connue." },
            { q: "Qui a écrit Zadig, un conte philosophique ?", options: ["Charles Perrault", "Jean de La Fontaine", "Antoine de Saint-Exupéry", "Voltaire"], answer: 3, why: "Voltaire a publié Zadig en 1747 ; c'est un exemple de conte philosophique." },
            { q: "Quel indice aide le plus à trouver une leçon implicite ?", options: ["La longueur du texte", "Le nombre de dialogues dans le récit", "Le dénouement de l'histoire", "Le titre du recueil où il paraît"], answer: 2, why: "Le dénouement montre qui est récompensé ou puni, et donc ce que l'auteur veut faire comprendre." },
            { q: "Comment s'appelle la leçon en vers qui termine un conte de Perrault ?", options: ["Une moralité", "Une parabole", "Un refrain"], answer: 0, why: "Perrault conclut ses contes par une « moralité », souvent en vers." },
            { q: "Pourquoi un apologue utilise-t-il des personnages simplifiés ?", options: ["Parce que l'auteur manque d'imagination", "Pour rendre la leçon claire", "Pour allonger le récit", "Pour éviter tout dialogue"], answer: 1, why: "Des personnages types (le vaniteux, le sage) permettent de comparer les comportements et de comprendre vite la leçon." },
          ],
          trap: "Croire qu'un récit qui ne contient pas de morale écrite n'a pas de leçon. Dans un apologue, la leçon peut être implicite : il faut la déduire du dénouement et des choix de l'auteur.",
          method: "Après la lecture, complétez cette phrase : « Ce récit montre que celui qui... finit par... ». Puis reformulez-la en une phrase générale au présent, sans nom de personnage : vous tenez la leçon.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-un-apologue',
          title: 'Écrire une histoire qui défend une leçon',
          minutes: 35,
          objectives: [
            "Rédiger un court récit de fiction qui illustre une leçon.",
            "Choisir des personnages et une situation adaptés à la leçon à défendre.",
            "Formuler une morale explicite ou construire une leçon implicite.",
            "Améliorer son texte à l'aide d'une grille de relecture.",
          ],
          course: [
            {
              heading: "Partir de la leçon",
              paragraphs: [
                "Pour écrire un apologue, on ne commence pas par l'histoire, mais par la leçon. Choisissez une idée simple que vous voulez défendre, et formulez-la en une phrase générale au présent : « Il ne faut pas juger les autres sur leur apparence », « L'union fait la force », « La patience vient à bout de tout ».",
                "Ensuite, imaginez une situation qui va prouver cette leçon. Le principe est celui d'une démonstration : un personnage qui respecte la leçon réussit, un personnage qui l'ignore échoue. Le lecteur doit pouvoir dire, à la fin : « C'est logique, l'histoire montre bien que... ».",
              ],
              box: { label: "À retenir", text: "Écrire un apologue, c'est construire une histoire au service d'une idée. On choisit d'abord la leçon, puis on invente une situation dont le dénouement la prouve." },
            },
            {
              heading: "Choisir des personnages et une situation",
              paragraphs: [
                "Choisissez peu de personnages, souvent deux, qui s'opposent : le fort et le faible, le vaniteux et le modeste, le pressé et le patient. Vous pouvez utiliser des animaux, en vous appuyant sur leurs traits connus (le renard rusé, la fourmi travailleuse), ou au contraire surprendre le lecteur avec un animal inattendu. Vous pouvez aussi prendre des êtres humains ou des objets.",
                "La situation doit être simple et concrète : un défi, une course, un partage, un danger. Un seul problème suffit. Le cadre se décrit en une phrase : une basse-cour, une forêt en hiver, une cour de récréation. Plus l'histoire est simple, plus la leçon est claire.",
                "Pensez au retournement : c'est souvent lui qui rend l'apologue efficace. Le lion puissant a besoin du petit rat ; le lièvre rapide perd la course. Le lecteur est surpris, et cette surprise l'aide à retenir la leçon.",
              ],
            },
            {
              heading: "Construire et rédiger le récit",
              paragraphs: [
                "Votre récit suit le schéma narratif : une situation initiale (qui sont les personnages, où sont-ils ?), un élément déclencheur (le problème), une ou deux péripéties, puis un dénouement qui montre les conséquences des choix des personnages.",
                "Racontez au passé, avec l'imparfait pour le décor et les habitudes, et le passé simple pour les actions principales. Ajoutez un court dialogue pour rendre la scène vivante : il permet aussi de montrer le caractère des personnages. N'oubliez pas les guillemets et les tirets ou les deux-points qui introduisent les paroles.",
                "Restez bref : un apologue efficace tient souvent en dix à vingt lignes. Chaque phrase doit servir l'histoire ou la leçon.",
              ],
              box: { label: "Repère", text: "Schéma de l'apologue : situation initiale, élément déclencheur, péripéties, dénouement, puis morale. Temps : imparfait et passé simple pour le récit ; présent de vérité générale pour la morale." },
            },
            {
              heading: "Formuler la morale et relire",
              paragraphs: [
                "Si vous choisissez une morale explicite, écrivez une phrase courte, générale et frappante, au présent de vérité générale. Les oppositions et les images aident à la retenir : « Le bruit ne fait pas la force », « Qui veut tout garder perd tout ». Placez-la au début (l'histoire la démontre) ou à la fin (elle conclut l'histoire).",
                "Si vous préférez une leçon implicite, terminez sur un dénouement très clair ou sur une réplique qui fait comprendre la leçon sans la dire. Le lecteur aura le plaisir de la trouver lui-même.",
                "Relisez enfin avec une grille : la leçon est-elle claire ? Le dénouement la prouve-t-il ? Les personnages s'opposent-ils nettement ? Les temps sont-ils cohérents ? Le dialogue est-il bien ponctué ? Les accords sont-ils vérifiés ?",
              ],
              box: { label: "Méthode", text: "Grille de relecture : 1) la leçon est-elle compréhensible ? 2) le dénouement la prouve-t-il ? 3) les personnages s'opposent-ils ? 4) imparfait et passé simple sont-ils bien employés ? 5) le dialogue est-il ponctué ? 6) l'orthographe est-elle vérifiée ?" },
            },
          ],
          keyPoints: [
            "On part de la leçon, formulée en une phrase générale au présent.",
            "On choisit deux personnages qui s'opposent et une situation simple, avec si possible un retournement.",
            "Le récit suit le schéma narratif ; le dénouement prouve la leçon.",
            "Temps du récit : imparfait et passé simple ; morale au présent de vérité générale.",
            "La morale est explicite (au début ou à la fin) ou implicite (une fin ou une réplique qui la fait comprendre).",
            "On relit avec une grille : leçon, dénouement, personnages, temps, dialogue, orthographe.",
          ],
          example: {
            statement: "Préparez puis rédigez un court apologue qui défend la leçon : « Il ne faut pas se moquer de plus petit que soi. »",
            solution: [
              "Reformuler la leçon en phrase générale au présent : « Celui qui se moque des petits a souvent besoin d'eux. »",
              "Choisir deux personnages qui s'opposent : un Cheval fier de sa taille et une Fourmi minuscule.",
              "Imaginer la situation et le retournement : le Cheval se moque de la Fourmi ; plus tard, une épine se plante sous son sabot, et seule la Fourmi peut la retirer.",
              "Rédiger le récit au passé : « Un Cheval, fier de ses grandes jambes, faillit écraser une Fourmi. “Écarte-toi, poussière !” lui lança-t-il en riant. Le lendemain, une épine se planta sous son sabot. Il eut beau ruer et hennir, aucun animal n'était assez petit pour la saisir. La Fourmi passa par là, se glissa sous le sabot et tira l'épine de toutes ses forces. Le Cheval baissa la tête et la remercia. »",
              "Ajouter la morale à la fin, au présent de vérité générale : « Celui qui se moque des petits a souvent besoin d'eux. »",
              "Relire avec la grille : la leçon est claire, le dénouement la prouve (le grand dépend du petit), les personnages s'opposent, les temps sont cohérents (imparfait et passé simple), le dialogue est ponctué.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune de ces leçons, proposez deux personnages qui s'opposent et une situation simple qui pourrait la prouver (une ou deux phrases par leçon). a) L'union fait la force. b) Il ne faut pas se fier aux apparences. c) Qui va doucement va loin.",
              hint: "Pour chaque leçon, imaginez un personnage qui la respecte et un personnage qui l'ignore, puis une situation où l'on voit la différence.",
              solution: [
                "a) Des fourmis qui travaillent ensemble et un scarabée qui travaille seul : un orage menace, les fourmis transportent toutes leurs provisions à l'abri en se relayant, le scarabée n'en sauve qu'une petite partie.",
                "b) Un beau champignon rouge et un champignon gris et terne : un jeune écureuil choisit le plus beau et tombe malade, alors que le champignon gris était bon à manger.",
                "c) Un cheval qui part au galop et un âne qui marche à son rythme : le cheval s'épuise dans la montée et doit s'arrêter, l'âne arrive au sommet le premier.",
                "D'autres propositions sont justes si les deux personnages s'opposent et si la situation prouve la leçon.",
              ],
            },
            {
              level: 2,
              statement: "Voici le début d'un apologue, écrit pour l'exercice : « Un Chat paresseux vivait dans une ferme. Chaque jour, il laissait les souris grignoter le grain, car il préférait dormir au soleil. Le fermier lui dit : “Si tu ne fais pas ton travail, tu chercheras un autre toit.” Le Chat bâilla et se rendormit. » Rédigez la suite (5 à 8 lignes) : un dénouement au passé simple, puis une morale explicite au présent de vérité générale.",
              hint: "Le dénouement doit montrer la conséquence de la paresse du Chat. Pensez à ce qu'a annoncé le fermier, puis faites de la conséquence une phrase générale.",
              solution: [
                "Choisir la conséquence : le fermier tient parole et adopte un autre chat, plus travailleur.",
                "Proposition de suite : « Quelques semaines plus tard, les sacs de grain étaient percés de toutes parts. Le fermier se fâcha et ramena du marché une jeune chatte vive et maigre. En deux nuits, elle chassa toutes les souris. Le Chat paresseux trouva la porte de la grange fermée et dut passer l'hiver dehors, sous la pluie. »",
                "Morale : « Qui néglige son travail finit par perdre sa place. »",
                "Vérification : le dénouement est au passé simple (se fâcha, ramena, chassa, trouva, dut), le décor à l'imparfait (étaient), la morale au présent de vérité générale, et la fin prouve la leçon.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez un apologue complet de 12 à 20 lignes qui défend la leçon suivante : « Le mensonge finit toujours par se retourner contre le menteur. » Contraintes : deux personnages au moins, dont un animal ; un court dialogue ; un retournement de situation ; une morale implicite (non écrite), que le lecteur doit comprendre grâce au dénouement ou à une dernière réplique. Relisez ensuite votre texte avec la grille de relecture du cours.",
              hint: "Faites mentir un personnage pour obtenir un avantage, puis imaginez une situation où ce mensonge l'empêche d'être cru ou aidé au moment où il en a besoin.",
              solution: [
                "Préparer : leçon choisie ; personnages : une Pie menteuse et des Merles ; situation : la Pie fait croire qu'un chat approche pour voler les graines des autres ; retournement : un jour, le chat vient vraiment.",
                "Exemple de texte : « Dans un grand jardin vivait une Pie qui aimait les graines des autres. Chaque fois que les Merles mangeaient, elle criait : “Le chat ! Le chat arrive !” Les Merles s'envolaient, et la Pie se régalait seule. Le jeu dura tout le printemps. Un matin, la Pie, occupée à picorer, vit le chat ramper derrière la haie. “Le chat ! Au secours !” cria-t-elle. Les Merles ne levèrent même pas la tête. Le chat bondit ; la Pie ne s'échappa qu'en laissant trois plumes de sa queue. Le soir, un vieux Merle lui dit simplement : “Nous t'avons crue dix fois. La onzième, tu ne méritais plus qu'on t'écoute.” »",
                "Vérification des contraintes : des animaux (la Pie, les Merles, le chat), un dialogue, un retournement (la menteuse est victime du danger qu'elle inventait), une morale implicite portée par la dernière réplique.",
                "Relecture : la leçon est claire, le dénouement la prouve, l'imparfait sert au décor (vivait, aimait, mangeaient) et le passé simple aux actions (vit, cria, bondit), le dialogue est ponctué avec des guillemets.",
                "Votre texte est réussi s'il respecte toutes les contraintes et si un lecteur peut formuler la leçon sans la lire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la méthode du cours pour écrire un apologue.",
            items: [
              "Formuler la leçon en une phrase générale au présent",
              "Choisir deux personnages qui s'opposent",
              "Imaginer une situation et un retournement qui prouvent la leçon",
              "Rédiger le récit au passé, avec un court dialogue",
              "Écrire la morale ou une dernière réplique qui la fait comprendre",
              "Relire le texte avec la grille de relecture",
            ],
          },
          quiz: [
            { q: "Par quoi commence-t-on pour écrire un apologue ?", options: ["Par le titre", "Par la leçon à défendre", "Par le dialogue", "Par la description du décor"], answer: 1, why: "L'histoire est construite au service d'une idée : il faut d'abord savoir ce que l'on veut prouver." },
            { q: "À quel temps écrit-on la morale ?", options: ["Au passé simple, comme le récit", "À l'imparfait, comme le décor", "Au présent de vérité générale"], answer: 2, why: "La morale exprime une leçon valable pour tous et pour toujours : on emploie le présent de vérité générale." },
            { q: "Quel rôle joue le dénouement dans un apologue ?", options: ["Il prouve la leçon", "Il présente les personnages", "Il décrit le décor", "Il annonce le titre"], answer: 0, why: "Le dénouement montre les conséquences des choix des personnages : il sert de preuve à la leçon." },
            { q: "Pourquoi choisir deux personnages qui s'opposent ?", options: ["Pour que le texte soit plus long", "Pour éviter d'écrire une morale", "Pour supprimer le dialogue", "Pour comparer deux comportements"], answer: 3, why: "L'opposition (le sage et le sot, le fort et le faible) permet de voir quel comportement réussit et lequel échoue." },
            { q: "Comment rendre une morale implicite ?", options: ["En l'écrivant en majuscules", "Par une dernière réplique", "En la plaçant au milieu du récit", "En la mettant dans le titre"], answer: 1, why: "Une morale implicite n'est pas écrite : une fin claire ou une dernière réplique la fait comprendre au lecteur." },
          ],
          trap: "Écrire une histoire amusante dont la fin ne prouve pas la leçon annoncée, par exemple un menteur qui s'en sort très bien. Le dénouement doit toujours démontrer la morale.",
          method: "Avant de rédiger, notez en trois lignes : la leçon, les deux personnages, le retournement. Si vous ne pouvez pas résumer le dénouement en une phrase qui prouve la leçon, changez la situation avant d'écrire.",
        },
      ],
    },

    /* ================================================================== */
    /* LES MODES ET LES VOIX DU VERBE                                       */
    /* ================================================================== */
    {
      id: 'modes-et-voix',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'imperatif',
          title: 'L\'impératif : donner un ordre ou un conseil',
          minutes: 25,
          objectives: [
            "Conjuguer un verbe à l'impératif présent, y compris les verbes irréguliers être, avoir, savoir et vouloir.",
            "Placer correctement les pronoms compléments avec un verbe à l'impératif, à la forme affirmative et à la forme négative.",
            "Identifier la valeur d'un impératif : ordre, interdiction, conseil, prière, invitation.",
          ],
          course: [
            {
              heading: "Former l'impératif présent",
              paragraphs: [
                "L'impératif est un mode qui sert à s'adresser directement à quelqu'un pour lui demander d'agir. Il n'a que trois personnes : la 2e personne du singulier, la 1re et la 2e personne du pluriel. Le sujet n'est jamais exprimé : on dit « Range ta chambre », et non « Tu ranges ta chambre ».",
                "Pour les verbes en -er (1er groupe) et pour « aller », la 2e personne du singulier se termine par -e, sans s : chante, range, mange ; aller donne « va ». Les autres verbes prennent un -s : finis, prends, fais, viens, dis. Aux deux personnes du pluriel, on retrouve les terminaisons -ons et -ez du présent : chantons, chantez ; finissons, finissez.",
                "Quelques verbes du 3e groupe se conjuguent comme les verbes en -er au présent : ouvrir, offrir, cueillir, souffrir. Ils n'ont donc pas de s non plus : ouvre, offre, cueille. Une astuce : si le présent de l'indicatif s'écrit « tu ouvres », l'impératif enlève le s (ouvre) ; si c'est « tu finis », l'impératif garde le s (finis).",
              ],
              box: { label: "Règle", text: "Impératif présent : trois personnes, sans sujet. Verbes en -er, aller, et verbes comme ouvrir ou cueillir : -e, -ons, -ez (chante, chantons, chantez ; va, allons, allez). Autres verbes : -s, -ons, -ez (finis, finissons, finissez ; prends, prenons, prenez)." },
            },
            {
              heading: "Les verbes irréguliers à connaître par cœur",
              paragraphs: [
                "Quatre verbes très fréquents ont une forme particulière à l'impératif. Être : sois, soyons, soyez. Avoir : aie, ayons, ayez. Savoir : sache, sachons, sachez. Vouloir : veuille, veuillons, veuillez ; on le rencontre surtout dans les formules de politesse, comme « Veuillez patienter ».",
                "Attention à l'orthographe : « sois » s'écrit avec un s final, à ne pas confondre avec « soit » ; « aie » se termine par -ie, comme « que j'aie ». Ces formes ressemblent au subjonctif présent, que vous étudierez dans la leçon suivante : « Sois sage » et « Il faut que tu sois sage ».",
              ],
              box: { label: "À retenir", text: "Être : sois, soyons, soyez. Avoir : aie, ayons, ayez. Savoir : sache, sachons, sachez. Vouloir : veuille, veuillons, veuillez. Aller : va, allons, allez." },
            },
            {
              heading: "L'impératif et les pronoms",
              paragraphs: [
                "À la forme affirmative, le pronom complément se place après le verbe et s'y rattache par un trait d'union : « Regarde-le », « Parlez-lui », « Prends-en ». Les pronoms « me » et « te » deviennent « moi » et « toi » : « Donne-moi la main », « Lève-toi ». Avec deux pronoms, on met deux traits d'union : « Donne-le-moi ».",
                "À la forme négative, tout change : le pronom revient avant le verbe, sans trait d'union, et la négation encadre l'ensemble : « Ne le regarde pas », « Ne lui parlez pas », « N'en prends pas », « Ne me le donne pas ».",
                "Devant les pronoms « en » et « y », les verbes en -er et le verbe « aller » reprennent un s à la 2e personne du singulier, pour faciliter la prononciation : « Manges-en », « Penses-y », « Vas-y ». Ce s n'apparaît que si « en » ou « y » suit directement le verbe : on écrit « Va chercher du pain », sans s.",
              ],
              box: { label: "Règle", text: "Forme affirmative : verbe + trait d'union + pronom (Regarde-le, Donne-le-moi). Forme négative : ne + pronom + verbe + pas (Ne le regarde pas). Devant en et y : manges-en, vas-y, penses-y." },
            },
            {
              heading: "Les valeurs de l'impératif",
              paragraphs: [
                "L'impératif ne sert pas seulement à donner des ordres. Selon la situation et le ton, il exprime un ordre (« Range ta chambre »), une interdiction à la forme négative (« Ne cours pas dans le couloir »), un conseil (« Couvre-toi bien, il fait froid »), une prière ou une demande polie (« Aidez-moi, s'il vous plaît »), ou une invitation (« Entrez donc, asseyez-vous »).",
                "D'autres tournures permettent aussi de demander à quelqu'un d'agir : l'infinitif dans les recettes et les consignes (« Battre les œufs »), le futur (« Vous rendrez ce devoir lundi »), une question polie (« Pourriez-vous fermer la porte ? ») ou le subjonctif à la 3e personne (« Qu'il entre ! »), qui remplace l'impératif là où celui-ci n'existe pas.",
              ],
            },
          ],
          keyPoints: [
            "L'impératif a trois personnes (2e du singulier, 1re et 2e du pluriel) et pas de sujet exprimé.",
            "Verbes en -er et aller : pas de s à la 2e personne du singulier (chante, va). Autres verbes : -s (finis, prends).",
            "Irréguliers : sois, aie, sache, veuille (et leurs pluriels soyons, ayons, sachons, veuillons...).",
            "Affirmatif : pronom après le verbe avec trait d'union (Dis-le-moi). Négatif : pronom avant le verbe (Ne le dis pas).",
            "Devant en et y : manges-en, vas-y, penses-y.",
            "Valeurs : ordre, interdiction, conseil, prière, invitation.",
          ],
          example: {
            statement: "Réécrivez ces conseils à l'impératif, à la 2e personne du singulier, en remplaçant le groupe souligné (entre crochets) par un pronom : a) Tu dois finir [ton exercice]. b) Tu dois être prudent. c) Tu dois aller [à la bibliothèque]. d) Tu ne dois pas donner [ce secret] [à Paul].",
            solution: [
              "a) « finir » est un verbe du 2e groupe : la 2e personne du singulier prend un s (finis). « ton exercice » est un COD masculin singulier, remplacé par « le », placé après le verbe : « Finis-le. »",
              "b) « être » est irrégulier : la 2e personne du singulier est « sois ». « Sois prudent. »",
              "c) « aller » donne « va », mais « à la bibliothèque » est remplacé par « y » : on ajoute un s devant y. « Vas-y. »",
              "d) La phrase est négative : les pronoms se placent avant le verbe, sans trait d'union. « ce secret » devient « le » et « à Paul » devient « lui ». « donner » est en -er : pas de s. « Ne le lui donne pas. »",
              "Réponse : a) Finis-le. b) Sois prudent. c) Vas-y. d) Ne le lui donne pas.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez chaque verbe à l'impératif présent, aux trois personnes : a) écouter ; b) choisir ; c) prendre ; d) ouvrir ; e) avoir ; f) aller.",
              hint: "Les verbes en -er, aller et ouvrir n'ont pas de s à la 2e personne du singulier. Avoir est irrégulier.",
              solution: [
                "a) écoute, écoutons, écoutez.",
                "b) choisis, choisissons, choisissez.",
                "c) prends, prenons, prenez.",
                "d) ouvre, ouvrons, ouvrez (ouvrir se conjugue comme un verbe en -er au présent : pas de s).",
                "e) aie, ayons, ayez.",
                "f) va, allons, allez.",
              ],
            },
            {
              level: 2,
              statement: "Remplacez le groupe entre crochets par un pronom, puis mettez la phrase à la forme négative. a) Mange [des bonbons]. b) Écoute [ta sœur]. c) Va [au parc]. d) Donne [les clés] [à tes parents]. e) Réveillez [vos camarades].",
              hint: "À la forme affirmative, le pronom suit le verbe avec un trait d'union ; à la forme négative, il se place avant le verbe. Pensez au s devant en et y.",
              solution: [
                "a) des bonbons → en : « Manges-en. » ; forme négative : « N'en mange pas. » (le s disparaît, car en n'est plus après le verbe).",
                "b) ta sœur → la : « Écoute-la. » ; forme négative : « Ne l'écoute pas. »",
                "c) au parc → y : « Vas-y. » ; forme négative : « N'y va pas. »",
                "d) les clés → les, à tes parents → leur : « Donne-les-leur. » ; forme négative : « Ne les leur donne pas. »",
                "e) vos camarades → les : « Réveillez-les. » ; forme négative : « Ne les réveillez pas. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce message laissé sur la table contient sept verbes à l'impératif. Certains sont mal écrits, d'autres sont corrects. « Prend ton manteau et va-s-y vite. Soit prudent sur le vélo. N'oublies pas tes clés. Achète du pain et rapportes-en deux. Sache que je rentre tard. » a) Relevez les sept verbes à l'impératif et dites, pour chacun, s'il est correct. b) Corrigez les erreurs en justifiant. c) Donnez la valeur de l'impératif dans la phrase sur le vélo, une fois corrigée.",
              hint: "Vérifiez le groupe du verbe (en -er ou non), les verbes irréguliers (être, savoir), et la règle du s devant en et y. Regardez aussi le nombre de traits d'union.",
              solution: [
                "a) Les sept verbes : Prend, va-s-y, Soit, N'oublies, Achète, rapportes-en, Sache. Quatre sont faux, trois sont corrects.",
                "b) « Prend » est faux : prendre n'est pas un verbe en -er, il prend un s. Correction : « Prends ».",
                "b) « va-s-y » est faux : le s fait partie du verbe, il n'y a qu'un trait d'union. Correction : « vas-y ».",
                "b) « Soit » est faux : l'impératif d'être est « sois ». Correction : « Sois prudent ».",
                "b) « N'oublies » est faux : oublier est en -er, pas de s à l'impératif. Correction : « N'oublie pas ».",
                "Formes correctes : « rapportes-en » (rapporter est en -er, mais il est suivi de « en », donc il reprend un s), « Achète » (verbe en -er, sans s) et « Sache » (impératif irrégulier de savoir).",
                "c) « Sois prudent » exprime un conseil (ou une mise en garde) : on s'adresse à quelqu'un pour sa sécurité.",
                "Résultat : « Prends ton manteau et vas-y vite. Sois prudent sur le vélo. N'oublie pas tes clés. Achète du pain et rapportes-en deux. Sache que je rentre tard. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque verbe à sa 2e personne du singulier de l'impératif présent.",
            pairs: [
              { left: "être", right: "sois" },
              { left: "avoir", right: "aie" },
              { left: "savoir", right: "sache" },
              { left: "aller", right: "va" },
              { left: "ouvrir", right: "ouvre" },
              { left: "finir", right: "finis" },
            ],
          },
          quiz: [
            { q: "Quelle est la forme correcte de l'impératif de « jouer » à la 2e personne du singulier ?", options: ["joues", "joue", "jouez", "jouer"], answer: 1, why: "Les verbes en -er ne prennent pas de s à la 2e personne du singulier de l'impératif." },
            { q: "Quelle phrase est correctement écrite ?", options: ["Ne le dis pas.", "Ne dis-le pas.", "Dis-le pas.", "Le dis pas."], answer: 0, why: "À la forme négative, le pronom se place avant le verbe, sans trait d'union, et la négation est complète." },
            { q: "Quelle est la 2e personne du singulier de l'impératif d'« avoir » ?", options: ["ai", "as", "aie", "aies"], answer: 2, why: "Avoir est irrégulier à l'impératif : aie, ayons, ayez." },
            { q: "Pourquoi écrit-on « Vas-y » avec un s ?", options: ["Parce que aller est du 3e groupe", "Parce que le sujet est sous-entendu", "Parce que c'est une question", "Parce que le verbe est suivi de y"], answer: 3, why: "Devant les pronoms en et y, les verbes en -er et aller reprennent un s pour faciliter la prononciation." },
            { q: "Dans « Couvre-toi bien, il fait froid », l'impératif exprime :", options: ["un ordre militaire", "une interdiction", "un conseil", "une question"], answer: 2, why: "On recommande quelque chose pour le bien de la personne : c'est un conseil." },
          ],
          trap: "Ajouter un s aux verbes en -er à la 2e personne du singulier (« Ranges ta chambre », « N'oublies pas »), ou au contraire l'oublier devant en et y (« Mange-en » au lieu de « Manges-en »).",
          method: "Pour vérifier la 2e personne du singulier, conjuguez d'abord le verbe au présent de l'indicatif, à cette même personne : si la forme se termine par -es (chantes, ouvres), l'impératif perd le s (chante, ouvre) ; sinon, il le garde (finis, prends). Exceptions à apprendre : sois, aie, sache, veuille, va.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subjonctif-present',
          title: 'Le subjonctif présent et ses emplois',
          minutes: 30,
          objectives: [
            "Distinguer le mode indicatif, qui présente un fait comme réel, et le mode subjonctif, qui présente une action envisagée.",
            "Conjuguer un verbe au subjonctif présent, y compris les verbes irréguliers les plus fréquents.",
            "Employer le subjonctif après les verbes et les conjonctions qui l'exigent.",
          ],
          course: [
            {
              heading: "Le subjonctif, mode de l'action envisagée",
              paragraphs: [
                "Comparez « Je sais que Léa vient » et « Je veux que Léa vienne ». Dans la première phrase, la venue de Léa est présentée comme un fait réel : on emploie l'indicatif. Dans la seconde, elle est seulement souhaitée, elle existe dans l'esprit de celui qui parle : on emploie le subjonctif.",
                "Le subjonctif est le mode de l'action envisagée : souhaitée, exigée, redoutée, possible ou mise en doute. Il apparaît le plus souvent dans une proposition subordonnée introduite par « que ». C'est pourquoi on le conjugue d'habitude précédé de « que » : que je chante, que tu chantes, qu'il chante.",
              ],
              box: { label: "Définition", text: "L'indicatif présente un fait comme réel (Je sais qu'il vient). Le subjonctif présente une action envisagée par la pensée : souhait, ordre, crainte, doute, possibilité (Je veux qu'il vienne)." },
            },
            {
              heading: "Former le subjonctif présent",
              paragraphs: [
                "Pour la plupart des verbes, on part de la 3e personne du pluriel du présent de l'indicatif. On enlève la terminaison -ent pour obtenir le radical, puis on ajoute les terminaisons du subjonctif : -e, -es, -e, -ions, -iez, -ent. Par exemple : ils finissent → radical finiss- → que je finisse, que tu finisses, qu'il finisse, que nous finissions, que vous finissiez, qu'ils finissent.",
                "Pour « nous » et « vous », certains verbes reprennent le radical de « nous » au présent de l'indicatif. Ils prennent → que je prenne, mais nous prenons → que nous prenions. De même : venir (que je vienne, que nous venions), boire (que je boive, que nous buvions), voir (que je voie, que nous voyions).",
                "Attention aux verbes dont le radical se termine par i ou y : on écrit deux lettres à la suite. Que nous criions, que vous criiez ; que nous voyions, que vous voyiez. Pour les verbes en -er, les trois personnes du singulier et la 3e du pluriel se prononcent comme au présent de l'indicatif : seuls « nous » et « vous » s'entendent différemment (nous chantons / que nous chantions).",
              ],
              box: { label: "Règle", text: "Radical de « ils » au présent de l'indicatif + -e, -es, -e, -ions, -iez, -ent. Ils finissent → que je finisse. Pour nous et vous, certains verbes reprennent le radical de « nous » : que nous prenions, que nous venions, que nous voyions." },
            },
            {
              heading: "Les verbes irréguliers à connaître",
              paragraphs: [
                "Être : que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient. Avoir : que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient. Remarquez qu'il n'y a pas de i après le y : on écrit « soyons » et « ayons ».",
                "Aller : que j'aille, que nous allions. Faire : que je fasse, que nous fassions. Pouvoir : que je puisse, que nous puissions. Savoir : que je sache, que nous sachions. Vouloir : que je veuille, que nous voulions, qu'ils veuillent. Ces formes sont à apprendre par cœur, comme on apprend les tables de multiplication : elles reviennent sans cesse.",
              ],
              box: { label: "À retenir", text: "Que je sois, qu'il soit, que nous soyons. Que j'aie, qu'il ait, que nous ayons. Que j'aille, que je fasse, que je puisse, que je sache, que je veuille." },
            },
            {
              heading: "Quand employer le subjonctif ?",
              paragraphs: [
                "On emploie le subjonctif après les verbes qui expriment une volonté ou une obligation (vouloir que, souhaiter que, exiger que, il faut que), un sentiment (aimer que, être content que, avoir peur que, regretter que) ou un doute (douter que). Exemples : « Il faut que tu sois à l'heure », « J'ai peur qu'il pleuve ».",
                "On l'emploie aussi après certaines conjonctions de subordination : pour que, afin que, avant que, bien que, sans que, jusqu'à ce que. Exemples : « Parle plus fort pour qu'on t'entende », « Rentrons avant qu'il fasse nuit », « Bien qu'il soit fatigué, il continue ».",
                "Dans une proposition indépendante, le subjonctif exprime un ordre ou un souhait à la 3e personne, là où l'impératif n'existe pas : « Qu'il entre ! », « Qu'ils se taisent ! ». En revanche, l'indicatif s'emploie après « espérer que », « penser que » à la forme affirmative, « parce que », « pendant que », « quand » et « après que » : on écrit « J'espère qu'il viendra » et « Nous dînons après qu'il est parti ».",
              ],
              box: { label: "Repère", text: "Subjonctif après : il faut que, vouloir que, souhaiter que, avoir peur que, douter que, pour que, afin que, avant que, bien que, sans que, jusqu'à ce que. Indicatif après : espérer que, penser que, parce que, pendant que, quand, après que." },
            },
          ],
          keyPoints: [
            "L'indicatif présente un fait réel ; le subjonctif présente une action envisagée (souhait, ordre, crainte, doute).",
            "Formation : radical de « ils » au présent + -e, -es, -e, -ions, -iez, -ent.",
            "Pour nous et vous, certains verbes reprennent le radical de « nous » : que nous prenions, que nous voyions.",
            "Irréguliers : que je sois, que j'aie, que j'aille, que je fasse, que je puisse, que je sache, que je veuille.",
            "Subjonctif après il faut que, vouloir que, avoir peur que, pour que, avant que, bien que ; indicatif après espérer que, parce que, après que.",
          ],
          example: {
            statement: "Complétez avec le verbe entre parenthèses au mode qui convient (indicatif ou subjonctif présent), puis justifiez : a) Il faut que vous (prendre) le bus de 8 heures. b) Je sais que tu (être) courageux. c) Ma mère souhaite que nous (faire) la vaisselle. d) Nous restons à l'intérieur parce qu'il (pleuvoir).",
            solution: [
              "a) « il faut que » exprime une obligation : subjonctif. Ils prennent → radical prenn-, mais pour vous on reprend le radical de « nous prenons » : « que vous preniez ».",
              "b) « je sais que » présente un fait réel : indicatif. « Je sais que tu es courageux. »",
              "c) « souhaiter que » exprime un souhait : subjonctif. Faire est irrégulier : « que nous fassions ».",
              "d) « parce que » introduit une cause réelle : indicatif. « parce qu'il pleut ».",
              "Réponse : a) preniez (subjonctif) ; b) es (indicatif) ; c) fassions (subjonctif) ; d) pleut (indicatif).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au subjonctif présent : a) que je (finir) ; b) que nous (prendre) ; c) qu'ils (venir) ; d) que tu (être) ; e) que vous (avoir) ; f) qu'elle (faire) ; g) que nous (crier) ; h) que j'(aller).",
              hint: "Partez de la 3e personne du pluriel du présent (ils finissent, ils prennent...). Pour nous et vous, pensez au radical de « nous ». Être, avoir, faire et aller sont irréguliers.",
              solution: [
                "a) ils finissent → que je finisse.",
                "b) nous prenons → que nous prenions.",
                "c) ils viennent → qu'ils viennent.",
                "d) que tu sois (irrégulier).",
                "e) que vous ayez (irrégulier, sans i après le y).",
                "f) qu'elle fasse (irrégulier).",
                "g) nous crions → radical cri- + -ions : que nous criions (deux i).",
                "h) que j'aille (irrégulier).",
              ],
            },
            {
              level: 2,
              statement: "Indicatif ou subjonctif ? Conjuguez le verbe entre parenthèses au présent du mode qui convient et justifiez. a) Je veux que tu (venir) avec moi. b) J'espère que vous (aller) bien. c) Elle a peur que son chien (se perdre). d) Bien qu'il (savoir) la réponse, il se tait. e) Je pense que nous (pouvoir) gagner. f) Le professeur répète la consigne pour que nous la (comprendre).",
              hint: "Demandez-vous si l'action est présentée comme réelle ou seulement souhaitée, crainte, ou envisagée. Attention : « espérer que » et « penser que » à la forme affirmative sont suivis de l'indicatif.",
              solution: [
                "a) « vouloir que » : volonté, subjonctif. « que tu viennes ».",
                "b) « espérer que » : indicatif. « que vous allez bien ».",
                "c) « avoir peur que » : crainte, subjonctif. « que son chien se perde ».",
                "d) « bien que » : toujours suivi du subjonctif. « Bien qu'il sache la réponse » (savoir est irrégulier).",
                "e) « penser que » à la forme affirmative : indicatif. « que nous pouvons gagner ».",
                "f) « pour que » : but, subjonctif. « pour que nous la comprenions ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un règlement de camp de vacances écrit avec des infinitifs : « Être à l'heure au petit-déjeuner. Avoir toujours sa gourde. Faire son lit chaque matin. Prévenir un animateur avant de s'éloigner. Ne pas boire l'eau de la rivière. » a) Réécrivez chaque règle en commençant par « Il faut que vous » (ou « Il ne faut pas que vous »). b) Réécrivez ensuite la première et la troisième règle en commençant par « Il faut que chaque enfant ». c) Expliquez pourquoi on emploie le subjonctif après « il faut que ».",
              hint: "Être, avoir et faire sont irréguliers. Pour « prévenir » et « boire », partez de « vous prévenez » et « vous buvez ». Pour « chaque enfant », le verbe est à la 3e personne du singulier.",
              solution: [
                "a) « Il faut que vous soyez à l'heure au petit-déjeuner. »",
                "a) « Il faut que vous ayez toujours votre gourde. »",
                "a) « Il faut que vous fassiez votre lit chaque matin. »",
                "a) « Il faut que vous préveniez un animateur avant de vous éloigner. » (vous prévenez → que vous préveniez).",
                "a) « Il ne faut pas que vous buviez l'eau de la rivière. » (vous buvez → que vous buviez).",
                "b) « Il faut que chaque enfant soit à l'heure au petit-déjeuner. » ; « Il faut que chaque enfant fasse son lit chaque matin. »",
                "c) « Il faut que » exprime une obligation : l'action n'est pas encore réalisée, elle est exigée. C'est une action envisagée, d'où le subjonctif.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le subjonctif présent.",
            statements: [
              { text: "On écrit « Il faut que nous soyons prêts ».", true: true, why: "Le subjonctif d'être à la 1re personne du pluriel est « soyons », sans i." },
              { text: "On écrit « Nous dînons après qu'il soit parti ».", true: false, why: "« Après que » est suivi de l'indicatif, car l'action est réelle : « Nous dînons après qu'il est parti »." },
              { text: "« Que nous voyions » s'écrit avec un y et un i.", true: true, why: "Radical voy- + terminaison -ions : que nous voyions." },
              { text: "« J'espère qu'il vienne » est correct.", true: false, why: "« Espérer que » est suivi de l'indicatif : « J'espère qu'il viendra »." },
              { text: "« Bien que » est toujours suivi du subjonctif.", true: true, why: "« Bien qu'il pleuve, nous sortons » : la conjonction exige le subjonctif." },
              { text: "Le subjonctif de « faire » est « que je faise ».", true: false, why: "Faire est irrégulier : que je fasse, que nous fassions." },
              { text: "Le subjonctif présente souvent une action souhaitée ou redoutée.", true: true, why: "C'est le mode de l'action envisagée par la pensée, et non présentée comme réelle." },
            ],
          },
          quiz: [
            { q: "Quelle est la bonne forme : « Il faut que tu ... à l'heure » ?", options: ["soit", "es", "sois", "est"], answer: 2, why: "Il faut que impose le subjonctif ; à la 2e personne du singulier, être donne « que tu sois »." },
            { q: "À partir de quelle forme construit-on le subjonctif de la plupart des verbes ?", options: ["L'infinitif du verbe", "Le présent avec « ils »", "Le participe passé du verbe", "Le futur simple de l'indicatif"], answer: 1, why: "On enlève -ent à « ils finissent » pour obtenir le radical, puis on ajoute -e, -es, -e, -ions, -iez, -ent." },
            { q: "Quelle phrase contient un subjonctif ?", options: ["Je sais qu'il part.", "Il dit qu'il part.", "Je crois qu'il part.", "Je veux qu'il parte."], answer: 3, why: "« Vouloir que » exprime une volonté et impose le subjonctif : qu'il parte." },
            { q: "Quel est le subjonctif présent de « avoir » à la 1re personne du singulier ?", options: ["que j'aie", "que j'ai", "que j'aies"], answer: 0, why: "Avoir est irrégulier : que j'aie, que tu aies, qu'il ait." },
            { q: "Quelle conjonction est suivie de l'indicatif ?", options: ["pour que", "parce que", "avant que", "bien que"], answer: 1, why: "« Parce que » introduit une cause présentée comme réelle : on emploie l'indicatif." },
          ],
          trap: "Écrire « que j'ai » au lieu de « que j'aie », confondre « sois » (2e personne du singulier) et « soit » (3e personne), ou employer le subjonctif après « après que » et « espérer que », qui demandent l'indicatif.",
          method: "Quand vous hésitez entre indicatif et subjonctif, remplacez le verbe par « faire » ou « être », dont les deux formes s'entendent bien (il fait / qu'il fasse ; il est / qu'il soit). L'oreille vous dit alors quel mode est attendu.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'voix-active-passive',
          title: 'La voix active et la voix passive',
          minutes: 30,
          objectives: [
            "Distinguer la voix active et la voix passive.",
            "Transformer une phrase active en phrase passive, et inversement, en conservant le temps du verbe.",
            "Identifier le complément d'agent et expliquer l'effet du choix de la voix passive.",
            "Distinguer un verbe au passif d'un verbe conjugué avec l'auxiliaire être à la voix active.",
          ],
          course: [
            {
              heading: "Qui fait l'action ?",
              paragraphs: [
                "Comparez « Le chat attrape la souris » et « La souris est attrapée par le chat ». Les deux phrases racontent le même événement, mais elles ne le présentent pas de la même façon. C'est ce qu'on appelle la voix du verbe.",
                "À la voix active, le sujet fait l'action : c'est le chat qui attrape. À la voix passive, le sujet subit l'action : la souris ne fait rien, c'est elle qui est attrapée. Celui qui fait l'action devient alors le complément d'agent, introduit le plus souvent par la préposition « par » : « par le chat ».",
              ],
              box: { label: "Définition", text: "Voix active : le sujet fait l'action (Le chat attrape la souris). Voix passive : le sujet subit l'action (La souris est attrapée par le chat). Le complément d'agent désigne celui qui fait l'action ; il est introduit par « par », parfois par « de »." },
            },
            {
              heading: "Former la voix passive",
              paragraphs: [
                "Un verbe au passif se forme avec l'auxiliaire « être », conjugué au temps du verbe actif, suivi du participe passé du verbe. Ce participe passé s'accorde en genre et en nombre avec le sujet : « Les souris sont attrapées », « La porte est fermée par le gardien ».",
                "C'est l'auxiliaire « être » qui porte le temps. Au présent : la souris est attrapée. À l'imparfait : elle était attrapée. Au passé simple : elle fut attrapée. Au futur : elle sera attrapée. Au passé composé : elle a été attrapée. Au plus-que-parfait : elle avait été attrapée. Pour trouver le temps d'un verbe passif, regardez donc le temps de « être ».",
              ],
              box: { label: "Règle", text: "Voix passive = être (au temps du verbe actif) + participe passé accordé avec le sujet. Le chat attrapa la souris (passé simple) → La souris fut attrapée par le chat (être au passé simple)." },
            },
            {
              heading: "Passer de l'actif au passif",
              paragraphs: [
                "Seul un verbe qui a un complément d'objet direct (COD) peut se mettre au passif. La transformation se fait en trois étapes. Le COD de la phrase active devient le sujet de la phrase passive. Le verbe se met au passif, au même temps. Le sujet de la phrase active devient le complément d'agent.",
                "Exemple : « Les pompiers ont éteint l'incendie. » Le COD « l'incendie » devient sujet ; « ont éteint » est au passé composé, donc être se met au passé composé (a été) ; « les pompiers » devient complément d'agent : « L'incendie a été éteint par les pompiers. »",
                "Le complément d'agent peut être absent. Quand le sujet de la phrase active est « on », il disparaît au passif : « On a volé mon vélo » devient « Mon vélo a été volé ». Avec certains verbes de sentiment, le complément d'agent est introduit par « de » : « Cette chanteuse est aimée de tous ».",
              ],
            },
            {
              heading: "Ne pas confondre, et pourquoi choisir le passif",
              paragraphs: [
                "Certains verbes forment leur passé composé avec « être » à la voix active : « Il est parti », « Elle est tombée ». Ce ne sont pas des passifs : le sujet fait l'action, et le verbe est au passé composé. Pour vérifier, demandez-vous si l'on peut ajouter un complément d'agent : « Il est puni par son père » a du sens (passif, au présent), « Il est parti par son père » n'en a pas (actif, au passé composé).",
                "On choisit le passif pour mettre en valeur celui qui subit l'action, en le plaçant en tête de phrase : « Le record du monde a été battu ! ». On l'emploie aussi quand on ne connaît pas l'auteur de l'action, ou qu'on ne veut pas le nommer : les journaux écrivent ainsi « Un tableau a été volé au musée ».",
              ],
              box: { label: "À retenir", text: "« Il est parti » : voix active, passé composé (le sujet agit). « Il est puni » : voix passive, présent (le sujet subit). Test : si l'on peut ajouter « par quelqu'un », le verbe est au passif." },
            },
          ],
          keyPoints: [
            "Voix active : le sujet fait l'action. Voix passive : le sujet subit l'action.",
            "Passif = être au temps du verbe actif + participe passé accordé avec le sujet.",
            "Le COD actif devient sujet passif ; le sujet actif devient complément d'agent (par, parfois de).",
            "Seuls les verbes qui ont un COD peuvent se mettre au passif ; avec « on », le complément d'agent disparaît.",
            "« Il est parti » est un passé composé actif, pas un passif : testez l'ajout de « par quelqu'un ».",
          ],
          example: {
            statement: "Mettez cette phrase à la voix passive en conservant le temps : « Le jardinier taillera les rosiers. » Puis indiquez le temps du verbe passif.",
            solution: [
              "Repérer le COD : « les rosiers » (le jardinier taillera quoi ? les rosiers). Il deviendra le sujet.",
              "Repérer le temps du verbe actif : « taillera » est au futur simple. L'auxiliaire être se mettra donc au futur : « seront » (sujet au pluriel).",
              "Former le participe passé et l'accorder avec le nouveau sujet « les rosiers » (masculin pluriel) : « taillés ».",
              "Transformer le sujet actif « le jardinier » en complément d'agent : « par le jardinier ».",
              "Réponse : « Les rosiers seront taillés par le jardinier. » Le verbe passif est au futur simple, comme le verbe actif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, dites si le verbe est à la voix active ou à la voix passive, et relevez le complément d'agent s'il y en a un. a) Le gâteau est découpé par Lina. b) Lina découpe le gâteau. c) La route a été bloquée par la neige. d) Mes cousins sont arrivés hier. e) Le directeur est respecté de tous les élèves.",
              hint: "Demandez-vous si le sujet fait l'action ou la subit. Pour la phrase d, essayez d'ajouter « par quelqu'un ».",
              solution: [
                "a) Voix passive : le gâteau subit l'action. Complément d'agent : « par Lina ».",
                "b) Voix active : Lina fait l'action. Pas de complément d'agent.",
                "c) Voix passive, au passé composé (a été bloquée). Complément d'agent : « par la neige ».",
                "d) Voix active : « sont arrivés » est le passé composé du verbe arriver, qui se conjugue avec être. Les cousins font l'action ; « arrivés par quelqu'un » n'a pas de sens.",
                "e) Voix passive : le directeur subit l'action de respecter. Complément d'agent introduit par « de » : « de tous les élèves ».",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces phrases à la voix passive, au même temps. a) Le vent arrache les feuilles. b) Les élèves préparaient une exposition. c) Un chevalier délivra la princesse. d) La mairie a rénové la piscine. e) On fermera le musée lundi.",
              hint: "Repérez d'abord le temps du verbe actif, puis conjuguez être à ce temps. Accordez le participe passé avec le nouveau sujet. Avec « on », il n'y a pas de complément d'agent.",
              solution: [
                "a) Présent : « Les feuilles sont arrachées par le vent. »",
                "b) Imparfait : « Une exposition était préparée par les élèves. »",
                "c) Passé simple : « La princesse fut délivrée par un chevalier. »",
                "d) Passé composé : « La piscine a été rénovée par la mairie. »",
                "e) Futur simple, sujet « on » : « Le musée sera fermé lundi. » (pas de complément d'agent).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un court article de journal, écrit pour l'exercice (données fictives) : « (1) Le pont de la Garenne a été inauguré samedi. (2) Il avait été construit en dix-huit mois par une entreprise de la région. (3) Le ruban fut coupé par la maire. (4) Les habitants sont venus nombreux. » a) Pour chaque phrase, dites si le verbe est actif ou passif et donnez son temps. b) Mettez les phrases 2 et 3 à la voix active. c) Pourquoi le journaliste a-t-il choisi le passif sans complément d'agent dans la phrase 1 ?",
              hint: "Pour le temps d'un verbe passif, regardez le temps de l'auxiliaire être. Pour la phrase 4, testez l'ajout de « par quelqu'un ».",
              solution: [
                "a) Phrase 1 : passif ; « a été » est être au passé composé, donc le verbe est au passé composé passif. Phrase 2 : passif ; « avait été » est le plus-que-parfait d'être, donc plus-que-parfait passif. Phrase 3 : passif ; « fut » est le passé simple d'être, donc passé simple passif. Phrase 4 : actif ; « sont venus » est le passé composé de venir, conjugué avec être (on ne peut pas dire « venus par quelqu'un »).",
                "b) Phrase 2 : « Une entreprise de la région l'avait construit en dix-huit mois. » (le sujet passif « il » devient le COD « l' », le verbe reste au plus-que-parfait).",
                "b) Phrase 3 : « La maire coupa le ruban. » (passé simple actif).",
                "c) Le journaliste met en valeur ce qui intéresse le lecteur, le pont, en le plaçant en tête de phrase. Il ne précise pas qui l'a inauguré, soit parce que ce n'est pas l'essentiel, soit parce que l'information vient ensuite (phrase 3).",
                "Résultat : trois verbes passifs (passé composé, plus-que-parfait, passé simple) et un verbe actif au passé composé.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase active à sa transformation passive, au même temps.",
            pairs: [
              { left: "Le chien garde la maison.", right: "La maison est gardée par le chien." },
              { left: "Le chien gardait la maison.", right: "La maison était gardée par le chien." },
              { left: "Le chien garda la maison.", right: "La maison fut gardée par le chien." },
              { left: "Le chien gardera la maison.", right: "La maison sera gardée par le chien." },
              { left: "Le chien a gardé la maison.", right: "La maison a été gardée par le chien." },
            ],
          },
          quiz: [
            { q: "Dans « Le ballon est lancé par Hugo », qui fait l'action ?", options: ["Le ballon", "Hugo", "Personne"], answer: 1, why: "Hugo est le complément d'agent : c'est lui qui lance. Le sujet « le ballon » subit l'action." },
            { q: "Quel auxiliaire sert à former la voix passive ?", options: ["avoir", "aller", "faire", "être"], answer: 3, why: "Le passif se forme avec être, conjugué au temps du verbe actif, et le participe passé." },
            { q: "« Les lettres ont été envoyées. » À quel temps est ce verbe passif ?", options: ["Passé composé", "Présent", "Plus-que-parfait", "Imparfait"], answer: 0, why: "« ont été » est le passé composé d'être : le verbe est au passé composé passif." },
            { q: "Quelle phrase est à la voix passive ?", options: ["Elle est partie de bonne heure ce matin.", "Elle est sortie du cinéma vers minuit.", "Elle est applaudie par le public.", "Elle est restée chez elle tout l'été."], answer: 2, why: "Le sujet subit l'action et l'on trouve un complément d'agent ; les autres phrases sont des passés composés actifs." },
            { q: "Que devient le COD d'une phrase active quand on la met au passif ?", options: ["Le complément d'agent", "Le sujet", "Un complément circonstanciel", "Il disparaît"], answer: 1, why: "Le COD actif devient le sujet du verbe passif : il subit l'action." },
          ],
          trap: "Prendre un passé composé conjugué avec être (« Ils sont partis ») pour un passif, ou oublier de garder le temps du verbe actif : « Le chat a mangé la souris » devient « La souris a été mangée », et non « La souris est mangée ».",
          method: "Pour transformer une phrase, procédez toujours dans le même ordre : repérez le COD, repérez le temps du verbe actif, conjuguez être à ce temps avec le nouveau sujet, accordez le participe passé, puis ajoutez « par » devant l'ancien sujet.",
        },
      ],
    },

    /* ================================================================== */
    /* L'ORTHOGRAPHE GRAMMATICALE                                           */
    /* ================================================================== */
    {
      id: 'orthographe-accords',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'accord-sujet-verbe',
          title: 'L\'accord du verbe avec son sujet',
          minutes: 30,
          objectives: [
            "Identifier le sujet d'un verbe, même lorsqu'il est inversé ou éloigné du verbe.",
            "Accorder le verbe en personne et en nombre avec son sujet.",
            "Appliquer les règles d'accord dans les cas particuliers : sujets multiples, pronom relatif « qui », « on », « chacun ».",
            "Vérifier les accords sujet-verbe lors de la relecture d'un texte.",
          ],
          course: [
            {
              heading: "La règle et la méthode",
              paragraphs: [
                "Le verbe s'accorde en personne (1re, 2e ou 3e) et en nombre (singulier ou pluriel) avec son sujet. « Le chien aboie », « Les chiens aboient » : le sujet passe au pluriel, le verbe aussi. À l'oral, on n'entend souvent pas la différence ; c'est à l'écrit qu'il faut être vigilant, car la terminaison -ent de la 3e personne du pluriel ne se prononce pas.",
                "Pour trouver le sujet, posez la question « Qui est-ce qui ? » ou « Qu'est-ce qui ? » devant le verbe, ou encadrez le groupe par « C'est... qui » : « Les enfants de ma voisine jouent » → « Ce sont les enfants de ma voisine qui jouent ». Le sujet est « les enfants de ma voisine », et son noyau, « enfants », est au pluriel.",
              ],
              box: { label: "Règle", text: "Le verbe s'accorde en personne et en nombre avec son sujet. Pour trouver le sujet, encadrez-le par « C'est... qui » (ou « Ce sont... qui »), puis repérez le mot principal de ce groupe : c'est lui qui commande l'accord." },
            },
            {
              heading: "Les sujets difficiles à repérer",
              paragraphs: [
                "Le sujet peut être placé après le verbe : on dit qu'il est inversé. C'est fréquent après un complément de lieu ou de temps et dans les questions : « Dans la forêt vivaient des loups » (ce sont des loups qui vivaient), « Que disent les élèves ? ». Ne vous fiez pas au mot placé juste avant le verbe.",
                "Le sujet peut être éloigné du verbe par un complément : « Les fleurs du jardin de ma grand-mère poussent vite ». Le verbe s'accorde avec « fleurs », et non avec « jardin » ou « grand-mère », qui sont plus proches. Un pronom complément peut aussi faire écran entre le sujet et le verbe : « Mon père les appelle » ; « les » est un COD, le sujet est « mon père », donc le verbe est au singulier.",
                "Quand le verbe a plusieurs sujets, il se met au pluriel : « Le chien et le chat dorment ». Si l'un des sujets est un pronom de la 1re ou de la 2e personne, on cherche le pronom qui peut les remplacer : « Toi et moi partirons » (= nous), « Ton frère et toi êtes invités » (= vous).",
              ],
              box: { label: "À retenir", text: "Sujet inversé : Dans la forêt vivaient des loups. Sujet éloigné : Les fleurs du jardin poussent. Pronom écran : Mon père les appelle. Sujets multiples : Toi et moi partirons (nous) ; Lina et toi êtes (vous)." },
            },
            {
              heading: "Les cas particuliers",
              paragraphs: [
                "Le pronom relatif « qui » sujet a la personne et le nombre de son antécédent, le mot qu'il remplace : « C'est moi qui ai raison » (qui = moi, 1re personne du singulier), « C'est vous qui êtes en retard », « Les élèves qui chantent ».",
                "Certains sujets sont toujours au singulier : le pronom « on » (« On part demain »), les pronoms « chacun », « personne », « tout le monde » (« Chacun prend son sac », « Tout le monde est là »), et les noms collectifs au singulier comme « la foule », « le groupe », « la classe » (« La foule applaudit »).",
                "À l'inverse, après « la plupart des... » ou « beaucoup de... », le verbe se met au pluriel : « La plupart des élèves aiment le sport », « Beaucoup de gens pensent que... ».",
              ],
            },
            {
              heading: "Vérifier les terminaisons",
              paragraphs: [
                "Une fois le sujet trouvé, vérifiez la terminaison qui correspond à sa personne. Au présent des verbes en -er : -e, -es, -e, -ons, -ez, -ent (il joue, ils jouent). À l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient (il jouait, ils jouaient). Au futur : -ai, -as, -a, -ons, -ez, -ont (il jouera, ils joueront).",
                "Une astuce pour les verbes dont la terminaison ne s'entend pas : remplacez le verbe par un verbe du 3e groupe dont on entend la différence, comme « prendre » ou « venir ». « Les enfants (jouer) » → « Les enfants prennent » : on entend le pluriel, donc on écrit « jouent ».",
              ],
            },
          ],
          keyPoints: [
            "Le verbe s'accorde en personne et en nombre avec son sujet.",
            "Pour trouver le sujet : « C'est... qui » ou « Qui est-ce qui ? » ; le mot principal du groupe commande l'accord.",
            "Attention au sujet inversé, au sujet éloigné et au pronom écran (Mon père les appelle).",
            "Plusieurs sujets : pluriel ; toi et moi = nous, Lina et toi = vous.",
            "« Qui » prend la personne de son antécédent (C'est moi qui ai) ; « on », « chacun », « tout le monde » : singulier.",
          ],
          example: {
            statement: "Conjuguez le verbe entre parenthèses au présent et justifiez : a) Dans le grenier de mes grands-parents (dormir) de vieux jouets. b) Le professeur nous (donner) un exercice. c) C'est toi qui (choisir) le film. d) Ma cousine et moi (aller) au cinéma.",
            solution: [
              "a) « Ce sont de vieux jouets qui dorment » : le sujet est inversé, c'est « de vieux jouets », au pluriel. « Dans le grenier de mes grands-parents dorment de vieux jouets. »",
              "b) « C'est le professeur qui donne » : le sujet est « le professeur », singulier ; « nous » est un pronom complément (COI) qui fait écran. « Le professeur nous donne un exercice. »",
              "c) « qui » a pour antécédent « toi », 2e personne du singulier. « C'est toi qui choisis le film. »",
              "d) « Ma cousine et moi » peut être remplacé par « nous », 1re personne du pluriel. « Ma cousine et moi allons au cinéma. »",
              "Réponse : a) dorment ; b) donne ; c) choisis ; d) allons.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soulignez le sujet de chaque verbe entre parenthèses, puis conjuguez le verbe au présent. a) Les oiseaux (chanter) dès l'aube. b) Mon frère et ma sœur (finir) leurs devoirs. c) On (partir) en vacances samedi. d) Les feuilles de cet arbre (tomber) en octobre. e) Tout le monde (applaudir).",
              hint: "Encadrez par « C'est... qui » ou « Ce sont... qui » pour trouver le sujet. Dans la phrase d, le verbe s'accorde avec le mot principal du groupe, pas avec le mot le plus proche.",
              solution: [
                "a) Sujet : « Les oiseaux » (pluriel). « chantent ».",
                "b) Sujet : « Mon frère et ma sœur » (deux sujets = ils). « finissent ».",
                "c) Sujet : « On » (toujours singulier). « part ».",
                "d) Sujet : « Les feuilles de cet arbre », noyau « feuilles » (pluriel). « tombent ».",
                "e) Sujet : « Tout le monde » (singulier). « applaudit ».",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez au présent les verbes entre parenthèses. a) C'est moi qui (être) le gardien de but. b) Que (penser) tes parents de ce projet ? c) Ma mère les (attendre) à la gare. d) Toi et ton ami (pouvoir) venir. e) La foule des supporters (crier). f) La plupart des élèves (prendre) le car.",
              hint: "Cherchez l'antécédent de « qui », le sujet inversé dans la question, le pronom écran, le pronom qui remplace deux sujets, et le mot principal des groupes nominaux.",
              solution: [
                "a) « qui » reprend « moi » (1re personne du singulier) : « C'est moi qui suis le gardien de but. »",
                "b) Sujet inversé « tes parents » (pluriel) : « Que pensent tes parents de ce projet ? »",
                "c) « les » est un COD qui fait écran ; le sujet est « Ma mère » : « Ma mère les attend à la gare. »",
                "d) « Toi et ton ami » = vous : « Toi et ton ami pouvez venir. »",
                "e) Le noyau est « foule », nom collectif au singulier : « La foule des supporters crie. »",
                "f) Après « la plupart des », le verbe se met au pluriel : « La plupart des élèves prennent le car. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce texte, écrit pour l'exercice, contient cinq erreurs d'accord entre le sujet et le verbe. Retrouvez-les, corrigez-les et justifiez chaque correction. « Chaque matin, les élèves de la classe de Mme Roux arrive en courant. Leur professeur les attends devant la porte. Dans le couloir résonne les rires des enfants. Toi et moi entrons les premiers. C'est nous qui ouvre les fenêtres. Personne ne parlent. On sort les cahiers. »",
              hint: "Pour chaque verbe conjugué, trouvez le sujet avec « C'est... qui ». Méfiez-vous du sujet éloigné, du pronom écran, du sujet inversé et de l'antécédent de « qui ». Deux phrases sont correctes.",
              solution: [
                "1) « arrive » → « arrivent » : le sujet est « les élèves de la classe de Mme Roux », dont le noyau « élèves » est au pluriel.",
                "2) « attends » → « attend » : le sujet est « Leur professeur » (3e personne du singulier) ; « les » est un pronom COD qui fait écran.",
                "3) « résonne » → « résonnent » : le sujet est inversé, « les rires des enfants », au pluriel.",
                "4) « ouvre » → « ouvrons » : « qui » reprend « nous », 1re personne du pluriel.",
                "5) « parlent » → « parle » : « personne » est un pronom toujours suivi du singulier.",
                "Phrases correctes : « Toi et moi entrons » (toi et moi = nous) et « On sort » (on = singulier).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour accorder un verbe avec son sujet.",
            items: [
              "Repérer le verbe conjugué",
              "Trouver son sujet en l'encadrant par « C'est... qui »",
              "Repérer le mot principal du groupe sujet",
              "Déterminer la personne et le nombre de ce mot",
              "Écrire la terminaison qui correspond",
            ],
          },
          quiz: [
            { q: "« Les enfants de mon voisin ... dans le parc. » Quelle forme convient ?", options: ["joue", "jouent", "joues", "jouons"], answer: 1, why: "Le noyau du sujet est « enfants », au pluriel : le verbe prend -ent." },
            { q: "« C'est toi qui ... raison. » Quelle forme convient ?", options: ["a", "ont", "as", "avez"], answer: 2, why: "« qui » reprend « toi », 2e personne du singulier : tu as, donc « qui as »." },
            { q: "Dans « Sur la colline se dressent trois moulins », quel est le sujet ?", options: ["la colline", "se", "Sur la colline", "trois moulins"], answer: 3, why: "Le sujet est inversé : ce sont trois moulins qui se dressent." },
            { q: "« Ton cousin et toi ... prêts. » Quelle forme convient ?", options: ["êtes", "sont", "es", "sommes"], answer: 0, why: "« Ton cousin et toi » peut être remplacé par « vous » : vous êtes." },
            { q: "Quel sujet est suivi d'un verbe au singulier ?", options: ["La plupart des élèves", "Beaucoup de gens", "Tout le monde", "Mes amis et moi"], answer: 2, why: "« Tout le monde » est un pronom singulier : « tout le monde est là »." },
          ],
          trap: "Accorder le verbe avec le mot placé juste avant lui au lieu du vrai sujet : « Les fleurs du jardin pousse », « Mon père les appellent ». Le mot le plus proche n'est pas toujours le sujet.",
          method: "À la relecture, tracez une flèche de chaque verbe conjugué vers son sujet, trouvé avec « C'est... qui ». Si la flèche passe par-dessus d'autres mots, redoublez d'attention : c'est là que se cachent les erreurs.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'accord-participe-passe',
          title: 'L\'accord du participe passé avec être et avoir',
          minutes: 30,
          objectives: [
            "Identifier un participe passé et trouver sa terminaison.",
            "Accorder le participe passé employé avec l'auxiliaire être et le participe passé employé sans auxiliaire.",
            "Appliquer la règle du participe passé employé avec avoir, dans les cas simples où le COD est placé avant le verbe.",
          ],
          course: [
            {
              heading: "Reconnaître le participe passé et sa terminaison",
              paragraphs: [
                "Le participe passé est une forme du verbe qui sert à former les temps composés (« j'ai mangé », « elle est partie ») et la voix passive (« la porte est fermée »). Il peut aussi s'employer seul, comme un adjectif : « une fenêtre ouverte ».",
                "Sa terminaison dépend du verbe : -é pour les verbes en -er (chanté, allé), -i pour les verbes comme finir (fini), -u (vendu, venu, lu), -is (pris, mis), -it (dit, écrit, fait), -ert (ouvert, offert). Pour trouver la consonne finale muette, mettez le participe au féminin : « une lettre écrite » → écrit ; « une chose prise » → pris ; « une tarte faite » → fait.",
                "Pour ne pas confondre le participe passé en -é et l'infinitif en -er, remplacez le verbe par « vendre » : si l'on peut dire « vendu », c'est un participe passé (-é) ; si l'on dit « vendre », c'est un infinitif (-er). « Il a (mangé / manger) » → « il a vendu » : on écrit « mangé ».",
              ],
              box: { label: "Repère", text: "Terminaison du participe passé : mettez-le au féminin pour entendre la consonne finale (prise → pris, dite → dit). Participe en -é ou infinitif en -er ? Remplacez par « vendu » ou « vendre »." },
            },
            {
              heading: "Avec l'auxiliaire être : l'accord avec le sujet",
              paragraphs: [
                "Employé avec l'auxiliaire « être », le participe passé s'accorde en genre et en nombre avec le sujet du verbe, comme un adjectif attribut. « Léa est partie », « Mes frères sont venus », « Les fenêtres sont fermées ». Cette règle vaut pour les temps composés des verbes conjugués avec être (aller, venir, partir, arriver, tomber, naître, mourir...) et pour la voix passive.",
                "Attention au sujet « nous » ou « vous » : il faut savoir qui il désigne. « Nous sommes arrivées » si ce sont plusieurs filles, « nous sommes arrivés » si le groupe est masculin ou mixte. « Vous êtes partie » si l'on vouvoie une seule femme.",
                "Employé sans auxiliaire, le participe passé s'accorde comme un adjectif avec le nom auquel il se rapporte : « des cahiers déchirés », « Fatiguées, les joueuses rentrent au vestiaire ».",
              ],
              box: { label: "Règle", text: "Avec être, le participe passé s'accorde en genre et en nombre avec le sujet : Elles sont parties. Sans auxiliaire, il s'accorde avec le nom auquel il se rapporte : des portes fermées." },
            },
            {
              heading: "Avec l'auxiliaire avoir : jamais avec le sujet",
              paragraphs: [
                "Employé avec l'auxiliaire « avoir », le participe passé ne s'accorde jamais avec le sujet : « Elles ont mangé », « Mes cousins ont couru ». C'est l'erreur la plus fréquente : le sujet est au pluriel, on a envie d'ajouter un s, mais avec avoir, on ne regarde pas le sujet.",
                "Le participe passé employé avec avoir s'accorde seulement avec le COD, et seulement si ce COD est placé avant le verbe. Pour le trouver, posez la question « quoi ? » ou « qui ? » après le verbe. « J'ai cueilli des fleurs » : j'ai cueilli quoi ? des fleurs, placé après : pas d'accord. « Les fleurs que j'ai cueillies » : le COD est « que », mis pour « les fleurs », placé avant : accord au féminin pluriel.",
                "Le COD se trouve avant le verbe dans deux cas simples : quand c'est un pronom personnel (« Ces fleurs, je les ai cueillies » ; « Ta sœur, je l'ai vue ») et quand c'est le pronom relatif « que » (« La robe que j'ai choisie »).",
              ],
              box: { label: "Règle", text: "Avec avoir, le participe passé ne s'accorde jamais avec le sujet. Il s'accorde avec le COD seulement si celui-ci est placé avant le verbe (pronom le, la, les, l' ou relatif que) : Les fleurs que j'ai cueillies." },
            },
          ],
          keyPoints: [
            "Mettez le participe au féminin pour trouver sa consonne finale (prise → pris).",
            "-é ou -er ? Remplacez par vendu / vendre.",
            "Avec être : accord avec le sujet (Elles sont parties).",
            "Sans auxiliaire : accord comme un adjectif (des portes fermées).",
            "Avec avoir : jamais d'accord avec le sujet ; accord avec le COD seulement s'il est placé avant (les fleurs que j'ai cueillies).",
          ],
          example: {
            statement: "Accordez les participes passés et justifiez : « Les lettres que Paul a (écrire) sont (arriver) hier. Ma grand-mère les a (lire) avec émotion. »",
            solution: [
              "« a (écrire) » : auxiliaire avoir. Paul a écrit quoi ? « que », mis pour « les lettres » (féminin pluriel), placé avant le verbe. Accord : « écrites ».",
              "« sont (arriver) » : auxiliaire être, accord avec le sujet « les lettres » (féminin pluriel) : « arrivées ».",
              "« a (lire) » : auxiliaire avoir. Ma grand-mère a lu quoi ? « les », mis pour « les lettres », placé avant. Accord : « lues ».",
              "Vérification des terminaisons : écrite (féminin, on entend le t), arrivée, lue.",
              "Réponse : « Les lettres que Paul a écrites sont arrivées hier. Ma grand-mère les a lues avec émotion. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Accordez les participes passés employés avec être ou sans auxiliaire. a) Mes sœurs sont (partir) ce matin. b) La fenêtre a été (ouvrir) par le vent. c) Les gâteaux sont (cuire). d) (Fatiguer), Léa et Inès se reposent. e) Nous sommes (aller) au marché (nous = Hugo et Lina). f) Des feuilles (tomber) couvrent le sol.",
              hint: "Avec être, cherchez le sujet et son genre. Pour la phrase b, l'auxiliaire qui précède directement le participe est « été », forme du verbe être. Sans auxiliaire, accordez avec le nom.",
              solution: [
                "a) Sujet « Mes sœurs » (féminin pluriel) : « parties ».",
                "b) Voix passive (a été + participe) : accord avec le sujet « La fenêtre » (féminin singulier) : « ouverte ».",
                "c) Sujet « Les gâteaux » (masculin pluriel) : « cuits ».",
                "d) Sans auxiliaire, le participe se rapporte à « Léa et Inès » (féminin pluriel) : « Fatiguées ».",
                "e) « nous » désigne un garçon et une fille : masculin pluriel : « allés ».",
                "f) Sans auxiliaire, il se rapporte à « feuilles » (féminin pluriel) : « tombées ».",
              ],
            },
            {
              level: 2,
              statement: "Accordez les participes passés employés avec avoir, si nécessaire, et justifiez. a) Elles ont (manger) des crêpes. b) Les crêpes qu'elles ont (manger) étaient délicieuses. c) Ces chansons, je les ai (apprendre) par cœur. d) Mes amies ont (rire) toute la soirée. e) La robe que tu as (choisir) te va bien. f) Nous avons (finir) nos devoirs.",
              hint: "Avec avoir, ne regardez jamais le sujet. Posez la question « quoi ? » après le verbe pour trouver le COD, puis regardez s'il est placé avant ou après.",
              solution: [
                "a) COD « des crêpes » placé après : pas d'accord. « mangé ».",
                "b) COD « qu' », mis pour « les crêpes », placé avant : accord au féminin pluriel. « mangées ».",
                "c) COD « les », mis pour « ces chansons », placé avant : accord au féminin pluriel. « apprises ».",
                "d) Pas de COD (rire n'en a pas) et jamais d'accord avec le sujet : « ri ».",
                "e) COD « que », mis pour « la robe », placé avant : accord au féminin singulier. « choisie ».",
                "f) COD « nos devoirs » placé après : pas d'accord. « fini ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Accordez les participes passés de ce texte, écrit pour l'exercice, et justifiez chaque accord : « Hier, mes cousines sont (arriver) à la gare. Nous les avons (attendre) longtemps, car le train avait (prendre) du retard. Les valises qu'elles avaient (préparer) étaient très lourdes. (Épuiser), elles ont (dormir) tout l'après-midi. »",
              hint: "Pour chaque participe, demandez-vous d'abord : être, avoir ou aucun auxiliaire ? Avec avoir, cherchez un COD placé avant le verbe (les, que).",
              solution: [
                "« sont (arriver) » : être, accord avec le sujet « mes cousines » (féminin pluriel) : « arrivées ».",
                "« avons (attendre) » : avoir ; COD « les », mis pour « mes cousines », placé avant : « attendues ».",
                "« avait (prendre) » : avoir ; COD « du retard » placé après : pas d'accord : « pris ».",
                "« avaient (préparer) » : avoir ; COD « qu' », mis pour « les valises », placé avant : « préparées ».",
                "« (Épuiser) » : sans auxiliaire, il se rapporte à « elles » (les cousines, féminin pluriel) : « Épuisées ».",
                "« ont (dormir) » : avoir, pas de COD : « dormi ».",
                "Résultat : arrivées, attendues, pris, préparées, Épuisées, dormi.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? L'accord du participe passé.",
            statements: [
              { text: "On écrit « Elles sont venues ».", true: true, why: "Avec être, le participe s'accorde avec le sujet « elles », féminin pluriel." },
              { text: "On écrit « Mes amies ont chantées ».", true: false, why: "Avec avoir, jamais d'accord avec le sujet : « Mes amies ont chanté »." },
              { text: "On écrit « La tarte que j'ai faite ».", true: true, why: "Le COD « que », mis pour « la tarte », est placé avant : accord au féminin singulier." },
              { text: "On écrit « J'ai acheté des pommes ».", true: true, why: "Le COD « des pommes » est placé après le verbe : pas d'accord." },
              { text: "Le participe passé de « prendre » au masculin singulier s'écrit « prit ».", true: false, why: "Au féminin, on dit « prise » : le masculin est donc « pris »." },
              { text: "Dans « des volets fermés », le participe s'accorde avec le nom.", true: true, why: "Employé sans auxiliaire, le participe passé s'accorde comme un adjectif." },
              { text: "Avec avoir, on accorde le participe quand le sujet est au pluriel.", true: false, why: "Avec avoir, on ne regarde jamais le sujet, seulement le COD placé avant." },
            ],
          },
          quiz: [
            { q: "« Elles sont ... dans l'escalier. » Quelle forme convient ?", options: ["tombé", "tombées", "tomber", "tombèrent"], answer: 1, why: "Avec être, accord avec le sujet « elles », féminin pluriel : tombées." },
            { q: "Avec l'auxiliaire avoir, le participe passé s'accorde :", options: ["toujours avec le sujet", "jamais", "avec le COD placé avant le verbe", "avec le COD placé après le verbe"], answer: 2, why: "Avec avoir, l'accord se fait avec le COD seulement s'il est placé avant le verbe." },
            { q: "« Les gâteaux que nous avons ... » Quelle forme convient ?", options: ["préparés", "préparé", "préparées", "préparer"], answer: 0, why: "Le COD « que » remplace « les gâteaux » (masculin pluriel) et il est placé avant le verbe." },
            { q: "Comment trouver la consonne finale de « il a (écrire) une lettre » ?", options: ["On met le verbe au futur simple", "On remplace le verbe par vendre", "On cherche le sujet du verbe", "On met le participe au féminin"], answer: 3, why: "Au féminin, on dit « écrite » : on entend le t, donc on écrit « écrit »." },
            { q: "« Elle a (manger / mangé) sa soupe. » Quel test permet de choisir ?", options: ["Remplacer par « vendu » ou « vendre »", "Mettre le sujet et le verbe au pluriel", "Chercher le sujet et le mettre au féminin"], answer: 0, why: "« Elle a vendu » est correct : c'est donc un participe passé, « mangé »." },
          ],
          trap: "Accorder le participe passé employé avec avoir avec le sujet (« Les filles ont chantées ») ; avec avoir, on ne regarde jamais le sujet, seulement un éventuel COD placé avant le verbe.",
          method: "Devant chaque participe passé, posez-vous toujours la même première question : quel est l'auxiliaire ? Être : cherchez le sujet. Avoir : cherchez un COD placé avant. Aucun : cherchez le nom auquel il se rapporte.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'homophones-dictee',
          title: 'Les homophones grammaticaux et la relecture d\'une dictée',
          minutes: 35,
          objectives: [
            "Distinguer les principaux homophones grammaticaux à l'aide d'un test de remplacement.",
            "Justifier le choix d'un homophone par la classe grammaticale du mot.",
            "Relire une dictée de manière méthodique, en plusieurs passages ciblés.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un homophone grammatical ?",
              paragraphs: [
                "Des homophones sont des mots qui se prononcent de la même façon mais qui s'écrivent différemment et n'ont pas le même sens : « vert », « verre », « ver », « vers ». Les homophones grammaticaux sont de petits mots très fréquents (a / à, et / est, son / sont...) qui n'appartiennent pas à la même classe grammaticale : l'un est un verbe, l'autre une préposition, un déterminant ou une conjonction.",
                "Comme l'oreille ne peut pas les distinguer, on utilise un test de remplacement : on remplace le mot par un autre qui, lui, s'entend différemment. Si la phrase garde son sens, le test est réussi. C'est un peu comme essayer une clé dans une serrure : seule la bonne clé ouvre la porte.",
              ],
              box: { label: "Définition", text: "Les homophones grammaticaux se prononcent de la même façon mais appartiennent à des classes grammaticales différentes (verbe, préposition, déterminant, pronom, conjonction). On les distingue par un test de remplacement." },
            },
            {
              heading: "a / à, et / est, on / ont, son / sont",
              paragraphs: [
                "« a » est le verbe avoir (ou l'auxiliaire) : on peut le remplacer par « avait ». « à » est une préposition : on ne peut pas le remplacer par « avait ». « Il a faim » → il avait faim ; « Il va à Paris » → « il va avait Paris » est impossible.",
                "« est » est le verbe être : on peut le remplacer par « était ». « et » est une conjonction de coordination : on peut le remplacer par « et puis ». « Le ciel est bleu et le soleil brille » → le ciel était bleu, et puis le soleil brille.",
                "« ont » est le verbe avoir : on peut le remplacer par « avaient ». « on » est un pronom sujet : on peut le remplacer par « il ». « sont » est le verbe être : on peut le remplacer par « étaient ». « son » est un déterminant possessif : on peut le remplacer par « mon ». « Ils ont vu son chien » → ils avaient vu mon chien.",
              ],
              box: { label: "Repère", text: "a → avait ; à : impossible. est → était ; et → et puis. ont → avaient ; on → il. sont → étaient ; son → mon." },
            },
            {
              heading: "ou / où, ce / se, ces / ses, c'est / s'est, la / l'a / là",
              paragraphs: [
                "« ou » marque un choix : on peut le remplacer par « ou bien ». « où » indique le lieu ou le moment : « la ville où j'habite », « le jour où il est venu ». « ce » est un déterminant démonstratif devant un nom (ce livre) ou un pronom (ce que je veux) ; « se » est un pronom réfléchi placé devant un verbe : on peut le remplacer par « me » en changeant la personne (il se lave → je me lave).",
                "« ces » est un déterminant démonstratif : on peut ajouter « -là » après le nom (ces livres-là). « ses » est un possessif : on peut le remplacer par « mes » ou dire « les siens » (ses livres = les livres à lui). « c'est » signifie « cela est » ; « s'est » est suivi d'un participe passé et devient « je me suis » à la 1re personne (il s'est levé → je me suis levé).",
                "« la » est un article ou un pronom : on peut le remplacer par « le » ou « une ». « l'a » est le pronom l' suivi du verbe avoir : on peut le remplacer par « l'avait ». « là » indique un lieu : on peut le remplacer par « ici » ou « là-bas ». « Il l'a posée là, sur la table. »",
              ],
            },
            {
              heading: "Relire une dictée : une méthode en plusieurs passages",
              paragraphs: [
                "On ne peut pas tout vérifier en une seule lecture : l'œil glisse sur les erreurs. Relisez donc votre texte plusieurs fois, avec un seul objectif à chaque passage, comme un contrôleur qui vérifie d'abord les billets, puis les bagages.",
                "Premier passage : le sens et les mots oubliés. Deuxième passage : les accords sujet-verbe (tracez une flèche du verbe vers son sujet). Troisième passage : les accords dans le groupe nominal (déterminant, nom, adjectif). Quatrième passage : les participes passés (être, avoir ou sans auxiliaire). Cinquième passage : les homophones, avec les tests de remplacement. Dernier passage : les accents, les majuscules et la ponctuation.",
              ],
              box: { label: "Méthode", text: "Relecture en passages : 1) le sens ; 2) sujet-verbe ; 3) groupe nominal ; 4) participes passés ; 5) homophones ; 6) accents, majuscules, ponctuation. Un objectif par passage, en suivant le texte avec le doigt ou le crayon." },
            },
          ],
          keyPoints: [
            "Les homophones grammaticaux se prononcent pareil mais n'ont pas la même classe grammaticale.",
            "a → avait ; est → était ; ont → avaient ; sont → étaient ; on → il ; son → mon ; et → et puis.",
            "ou → ou bien ; où : lieu ou temps ; se → me ; ses → mes ; c'est → cela est ; l'a → l'avait ; là → ici.",
            "Le test de remplacement permet de choisir sans hésiter.",
            "Relisez une dictée en plusieurs passages, avec un seul objectif à chaque fois.",
          ],
          example: {
            statement: "Choisissez le bon homophone et justifiez par un test : « Mon frère (a / à) oublié (son / sont) sac (a / à) la piscine (et / est) il (ce / se) demande (ou / où) il (la / l'a / là) laissé. »",
            solution: [
              "« Mon frère avait oublié » est possible : verbe avoir, on écrit « a ».",
              "« mon sac » est possible : déterminant possessif, on écrit « son ».",
              "« avait la piscine » est impossible : préposition, on écrit « à ».",
              "« et puis il se demande » est possible : conjonction, on écrit « et ».",
              "« je me demande » est possible : pronom réfléchi devant un verbe, on écrit « se ».",
              "Le mot indique le lieu, on ne peut pas dire « ou bien » : on écrit « où ». « il l'avait laissé » est possible : on écrit « l'a ».",
              "Réponse : « Mon frère a oublié son sac à la piscine et il se demande où il l'a laissé. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec a / à, et / est, on / ont, son / sont. a) Lina ... un chat ... un chien. b) Le chat ... noir, ... collier ... rouge. c) Mes parents ... acheté des billets ; ... part ... Lyon samedi. d) Les élèves ... dans la cour.",
              hint: "Remplacez chaque mot : a par avait, est par était, ont par avaient, sont par étaient, on par il, son par mon, et par et puis.",
              solution: [
                "a) « Lina a un chat et un chien » : Lina avait (verbe) ; et puis (conjonction).",
                "b) « Le chat est noir, son collier est rouge » : était (verbe) ; mon collier (possessif) ; était (verbe).",
                "c) « Mes parents ont acheté des billets ; on part à Lyon samedi » : avaient (verbe) ; il part (pronom) ; « avait Lyon » est impossible (préposition).",
                "d) « Les élèves sont dans la cour » : étaient (verbe).",
              ],
            },
            {
              level: 2,
              statement: "Choisissez le bon homophone et justifiez. a) Veux-tu du jus (ou / où) de l'eau ? b) Voici la maison (ou / où) je suis né. c) Il (ce / se) lève tôt. d) (Ces / Ses) chaussures-là sont à moi. e) Paul a rangé (ces / ses) affaires dans (sa / ça) chambre. f) (C'est / S'est) Marie qui (c'est / s'est) trompée. g) Sa veste ? Il (la / l'a / là) oubliée (la / l'a / là), sur le banc.",
              hint: "Utilisez les tests : ou bien, se → me, ces...-là, ses → mes, c'est → cela est, s'est → je me suis, l'a → l'avait, là → ici. Pour sa / ça, essayez « ma » ou « cela ».",
              solution: [
                "a) « ou bien de l'eau » : choix, on écrit « ou ».",
                "b) Le lieu : on écrit « où ».",
                "c) « je me lève » : pronom réfléchi, on écrit « se ».",
                "d) « Ces chaussures-là » : démonstratif, on écrit « Ces ».",
                "e) « ses affaires » (les siennes, mes affaires) et « sa chambre » (ma chambre) : possessifs, « ses » et « sa ».",
                "f) « Cela est Marie qui... » : « C'est » ; « je me suis trompée » : « s'est ».",
                "g) « Il l'avait oubliée » : « l'a » ; « ici, sur le banc » : « là ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce texte de dictée, écrit pour l'exercice, contient huit erreurs d'homophones. Relisez-le avec la méthode des passages, retrouvez les erreurs et corrigez-les en justifiant. « Hier soir, mon voisin c'est aperçu que son chat avait disparu. Il la cherché partout, dans le jardin et dans la cave. Ses enfants, qui son inquiets, on fouillé le grenier ou le chat aime dormir. Personne ne savait ou il était. Ce matin, le chat est revenu devant la porte et à miaulé. Tout le monde et content. »",
              hint: "Faites un passage uniquement pour les homophones et testez chaque petit mot : c'est / s'est, la / l'a, son / sont, on / ont, ou / où, a / à, et / est. Certains mots du texte sont corrects.",
              solution: [
                "1) « c'est aperçu » → « s'est aperçu » : on peut dire « je me suis aperçu », et non « cela est aperçu ».",
                "2) « Il la cherché » → « Il l'a cherché » : « il l'avait cherché ».",
                "3) « qui son inquiets » → « qui sont inquiets » : « qui étaient inquiets ».",
                "4) « on fouillé » → « ont fouillé » : « ils avaient fouillé ».",
                "5) « le grenier ou le chat aime dormir » → « où » : c'est un lieu, on ne peut pas dire « ou bien ».",
                "6) « ne savait ou il était » → « où » : on parle du lieu où se trouve le chat.",
                "7) « et à miaulé » → « et a miaulé » : « il avait miaulé ». 8) « Tout le monde et content » → « est content » : « était content ».",
                "Mots corrects à garder : « son chat », « Ses enfants », « devant la porte », « Ce matin », « est revenu ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque homophone au mot qui permet de le vérifier par remplacement.",
            pairs: [
              { left: "a", right: "avait" },
              { left: "est", right: "était" },
              { left: "sont", right: "étaient" },
              { left: "ont", right: "avaient" },
              { left: "on", right: "il" },
              { left: "son", right: "mon" },
            ],
          },
          quiz: [
            { q: "« Il ... froid. » Quel mot convient ?", options: ["à", "a", "as"], answer: 1, why: "On peut dire « il avait froid » : c'est le verbe avoir." },
            { q: "« Les enfants ... partis. » Quel mot convient ?", options: ["son", "sont", "sons", "sonts"], answer: 1, why: "On peut dire « les enfants étaient partis » : c'est le verbe être." },
            { q: "Quel test permet de distinguer « ces » et « ses » ?", options: ["Remplacer le mot par « avait »", "Remplacer le mot par le pronom « il »", "Ajouter -là ou dire « mes »", "Mettre le nom qui suit au féminin"], answer: 2, why: "« ces...-là » marque le démonstratif ; « mes » ou « les siens » marque le possessif." },
            { q: "« Elle ... levée tôt. » Quel mot convient ?", options: ["c'est", "ses", "ces", "s'est"], answer: 3, why: "On peut dire « je me suis levée » : c'est le pronom réfléchi suivi de l'auxiliaire être." },
            { q: "Pourquoi relire une dictée en plusieurs passages ?", options: ["Pour vérifier une seule chose à la fois", "Pour être sûr de finir avant tout le monde", "Pour recopier le texte", "Pour changer les mots"], answer: 0, why: "L'attention se concentre sur un seul type d'erreur à chaque fois : on en repère beaucoup plus." },
          ],
          trap: "Choisir un homophone « à l'oreille » ou au hasard, sans faire le test de remplacement, et relire le texte une seule fois en espérant tout voir.",
          method: "Pendant la relecture, entourez chaque petit mot homophone (a, est, son, on, ou, ce, ces, la) et écrivez au-dessus, au crayon, le mot de remplacement que vous avez testé (avait, était, mon, il...). Effacez ensuite.",
        },
      ],
    },

    /* ================================================================== */
    /* LE LEXIQUE : FORMER ET COMPRENDRE LES MOTS                           */
    /* ================================================================== */
    {
      id: 'lexique-etymologie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'formation-des-mots',
          title: 'Radical, préfixes et suffixes : la formation des mots',
          minutes: 30,
          objectives: [
            "Identifier le radical, le préfixe et le suffixe d'un mot dérivé.",
            "Constituer une famille de mots à partir d'un radical.",
            "Expliquer le sens d'un mot inconnu en le décomposant.",
            "Distinguer un mot dérivé et un mot composé.",
          ],
          course: [
            {
              heading: "Le radical et la famille de mots",
              paragraphs: [
                "Beaucoup de mots français sont construits comme des jeux de construction : on assemble des morceaux autour d'une pièce centrale. Cette pièce centrale s'appelle le radical : c'est la partie du mot qui porte son sens principal. Dans « dent », « dentiste », « dentifrice », « édenté », le radical est « dent ».",
                "Tous les mots construits sur le même radical forment une famille de mots : terre, terrain, terrasse, terrestre, territoire, enterrer, atterrir, souterrain. Le radical peut parfois changer légèrement de forme, parce que certains mots viennent directement du latin : mer, marin, maritime ; pied, piéton.",
                "Attention aux ressemblances trompeuses : deux mots qui commencent par les mêmes lettres n'appartiennent pas forcément à la même famille. Il faut que leur sens soit lié. « Terrible » ne vient pas de « terre » : il vient d'un mot latin qui signifie « effrayer ».",
              ],
              box: { label: "Définition", text: "Le radical est la partie du mot qui porte son sens principal. Une famille de mots regroupe tous les mots formés sur le même radical et dont le sens est lié : terre, terrain, atterrir, souterrain." },
            },
            {
              heading: "Les préfixes",
              paragraphs: [
                "Un préfixe est un élément placé avant le radical. Il modifie le sens du mot mais ne change pas sa classe grammaticale : « faire » et « refaire » sont deux verbes ; « possible » et « impossible » sont deux adjectifs.",
                "Quelques préfixes fréquents : re- ou ré- (de nouveau : refaire, réécrire) ; dé- ou dés- (le contraire : défaire, désobéir) ; in-, im-, il-, ir- (le contraire, la négation : inutile, impossible, illisible, irréel) ; mal- ou mé- (mal : malheureux, mécontent) ; pré- (avant : préhistoire) ; sur- (au-dessus, en excès : survoler, surcharger) ; sous- (en dessous : sous-marin) ; anti- (contre : antivol) ; co- (avec : copilote).",
                "Le préfixe in- devient im- devant b, m et p (imbuvable, immobile, impossible), il- devant l (illisible) et ir- devant r (irréel). Ce changement facilite la prononciation.",
              ],
              box: { label: "À retenir", text: "Le préfixe se place avant le radical et modifie le sens sans changer la classe du mot. in- devient im- devant b, m, p, il- devant l, ir- devant r : inutile, impossible, illisible, irréel." },
            },
            {
              heading: "Les suffixes",
              paragraphs: [
                "Un suffixe est un élément placé après le radical. Il modifie le sens et, souvent, il change la classe grammaticale du mot. À partir du verbe « laver », on forme le nom « lavage » (l'action de laver) et l'adjectif « lavable » (qui peut être lavé).",
                "Quelques suffixes fréquents : -eur ou -euse (celui ou celle qui fait l'action : chanteur, danseuse) ; -age et -ment (l'action : lavage, changement) ; -able ou -ible (qui peut être : mangeable, lisible) ; -ette (petit : maisonnette, fillette) ; -ier (l'arbre qui porte le fruit ou le métier : pommier, pâtissier) ; -âtre (une nuance ou un sens péjoratif : rougeâtre) ; -ité (la qualité : rapidité).",
                "Le suffixe -ment sert aussi à former des adverbes à partir du féminin des adjectifs : lente → lentement, douce → doucement, heureuse → heureusement. Un même mot peut avoir à la fois un préfixe et un suffixe : im + pardonn + able = impardonnable.",
              ],
              box: { label: "Règle", text: "Le suffixe se place après le radical ; il change souvent la classe du mot : laver (verbe) → lavage (nom), lavable (adjectif). Adverbe en -ment : féminin de l'adjectif + -ment (lente → lentement)." },
            },
            {
              heading: "Mots dérivés et mots composés",
              paragraphs: [
                "Un mot dérivé est formé d'un radical auquel on ajoute un préfixe, un suffixe ou les deux : relire, chanteur, incroyable. Un mot composé est formé de deux mots (ou plus) qui existent séparément : « chou-fleur », « arc-en-ciel », « portefeuille », « pomme de terre », « machine à laver ». Ses éléments peuvent être soudés, reliés par un trait d'union ou séparés par une préposition.",
                "Connaître ces mécanismes permet de comprendre un mot inconnu sans dictionnaire : on le découpe en morceaux et on additionne leurs sens. « Inoxydable » = in (ne pas) + oxyd (rouiller) + able (qui peut) : qui ne peut pas rouiller.",
              ],
            },
          ],
          keyPoints: [
            "Le radical porte le sens principal ; les mots formés sur le même radical forment une famille.",
            "Le préfixe se place avant le radical et ne change pas la classe du mot (faire → refaire).",
            "Le suffixe se place après le radical et change souvent la classe du mot (laver → lavage).",
            "in- devient im-, il-, ir- devant b, m, p, l, r : impossible, illisible, irréel.",
            "Mot dérivé : radical + affixes. Mot composé : deux mots assemblés (chou-fleur, pomme de terre).",
          ],
          example: {
            statement: "Décomposez le mot « impardonnable » : donnez son préfixe, son radical et son suffixe, puis expliquez son sens et sa classe grammaticale.",
            solution: [
              "Repérer le radical : « pardonn », que l'on retrouve dans « pardonner » et « pardon ».",
              "Repérer le préfixe : « im- », forme de « in- » devant p, qui exprime la négation.",
              "Repérer le suffixe : « -able », qui signifie « qui peut être ».",
              "Additionner les sens : ne pas + pardonner + qui peut être = qui ne peut pas être pardonné.",
              "Classe grammaticale : le suffixe -able forme un adjectif (« une faute impardonnable »).",
              "Réponse : im- (préfixe) + pardonn (radical) + -able (suffixe) ; adjectif qui signifie « qui ne peut pas être pardonné ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez chaque mot en préfixe, radical et suffixe (certains n'ont pas de préfixe ou pas de suffixe), puis donnez son sens. a) refaire ; b) illisible ; c) maisonnette ; d) chanteur ; e) déplacement ; f) malheureux.",
              hint: "Cherchez d'abord le mot simple caché à l'intérieur (faire, lire, maison...), puis regardez ce qui est ajouté avant et après.",
              solution: [
                "a) re- (préfixe) + faire (radical) : faire de nouveau.",
                "b) il- (préfixe, forme de in- devant l) + lis (radical de lire) + -ible (suffixe) : qui ne peut pas être lu.",
                "c) maison (radical) + -ette (suffixe) : une petite maison.",
                "d) chant (radical) + -eur (suffixe) : celui qui chante.",
                "e) dé- (préfixe) + plac (radical de place) + -ment (suffixe) : l'action de se déplacer, de changer de place.",
                "f) mal- (préfixe) + heureux (radical) : qui n'est pas heureux.",
              ],
            },
            {
              level: 2,
              statement: "a) Formez le contraire de ces mots à l'aide d'un préfixe : possible, régulier, lisible, faire, honnête, obéir. b) Formez l'adverbe en -ment de ces adjectifs : lent, doux, heureux, rapide. c) Trouvez un nom et un adjectif de la famille de « laver ».",
              hint: "Pour le contraire, pensez à in- et à ses variantes (im-, il-, ir-), à dé- (dés-) et à mal-. Pour l'adverbe, partez du féminin de l'adjectif.",
              solution: [
                "a) impossible (im- devant p), irrégulier (ir- devant r), illisible (il- devant l), défaire, malhonnête, désobéir (dés- devant une voyelle).",
                "b) lente → lentement ; douce → doucement ; heureuse → heureusement ; rapide → rapidement.",
                "c) Noms : lavage, lavoir, lavabo. Adjectif : lavable. Tous contiennent le radical « lav » et l'idée de laver.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Dans chaque liste, un mot est un intrus : il ressemble aux autres mais n'appartient pas à la même famille. Trouvez-le et justifiez. Liste 1 : terre, terrain, terrible, atterrir. Liste 2 : chanter, chanteur, chantier, enchanté. Liste 3 : mer, marin, mari, maritime. b) Classez ces mots en mots dérivés et mots composés : chou-fleur, lavage, pomme de terre, incroyable, porte-monnaie, refaire.",
              hint: "Pour trouver l'intrus, ne vous fiez pas aux lettres : vérifiez si le sens est lié au radical. Un chantier n'est pas un lieu où l'on chante, et un mari n'a rien à voir avec la mer.",
              solution: [
                "a) Liste 1 : l'intrus est « terrible ». Il signifie « qui fait peur » et vient d'un mot latin qui veut dire « effrayer » ; les autres mots sont liés à la terre (atterrir : se poser sur la terre).",
                "a) Liste 2 : l'intrus est « chantier ». Un chantier est un lieu de construction ; le mot n'a aucun lien de sens avec le chant, alors que chanteur et enchanté en ont un.",
                "a) Liste 3 : l'intrus est « mari ». Le mot vient d'un mot latin qui désigne l'époux ; marin et maritime viennent du latin « mare », la mer.",
                "b) Mots dérivés (radical + préfixe ou suffixe) : lavage (lav + -age), incroyable (in- + croy + -able), refaire (re- + faire).",
                "b) Mots composés (plusieurs mots assemblés) : chou-fleur, pomme de terre, porte-monnaie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La formation des mots.",
            statements: [
              { text: "Un préfixe se place après le radical.", true: false, why: "Le préfixe se place avant le radical (re-faire) ; c'est le suffixe qui se place après." },
              { text: "Le suffixe -able signifie « qui peut être ».", true: true, why: "Lavable : qui peut être lavé ; mangeable : qui peut être mangé." },
              { text: "« Terrible » appartient à la famille de « terre ».", true: false, why: "Il vient d'un mot latin signifiant « effrayer » : le sens n'a rien à voir avec la terre." },
              { text: "On écrit « illisible » avec deux l.", true: true, why: "Le préfixe in- devient il- devant un l : il + lisible." },
              { text: "« Pomme de terre » est un mot composé.", true: true, why: "Il est formé de plusieurs mots qui existent séparément, reliés par une préposition." },
              { text: "Un préfixe change toujours la classe grammaticale du mot.", true: false, why: "« faire » et « refaire » sont deux verbes : le préfixe modifie le sens, pas la classe." },
            ],
          },
          quiz: [
            { q: "Quel est le radical de « dentiste » ?", options: ["-iste", "dent", "dentis", "den"], answer: 1, why: "« dent » porte le sens principal et se retrouve dans dentaire, dentifrice, édenté." },
            { q: "Quel mot contient un suffixe qui signifie « petit » ?", options: ["fillette", "relire", "chanteuse", "impoli"], answer: 0, why: "Le suffixe -ette exprime la petite taille : fillette, maisonnette." },
            { q: "Quel est le contraire de « régulier » formé avec un préfixe ?", options: ["inrégulier", "dérégulier", "malrégulier", "irrégulier"], answer: 3, why: "Le préfixe in- devient ir- devant un r : irrégulier." },
            { q: "Quel mot est un mot composé ?", options: ["chanteur", "défaire", "arc-en-ciel", "malheureusement"], answer: 2, why: "Arc-en-ciel assemble trois mots ; les autres sont des mots dérivés." },
            { q: "Comment forme-t-on l'adverbe de « doux » ?", options: ["doux + ment", "douce + ment", "doucer + ment"], answer: 1, why: "On ajoute -ment au féminin de l'adjectif : douce → doucement." },
          ],
          trap: "Ranger dans la même famille des mots qui se ressemblent seulement par leurs lettres (terre et terrible, chanter et chantier) : deux mots de la même famille doivent aussi avoir un sens lié.",
          method: "Devant un mot inconnu, découpez-le au crayon en trois parties (préfixe, radical, suffixe), écrivez le sens de chaque partie sous le mot, puis additionnez ces sens. Vérifiez enfin que votre définition a du sens dans la phrase.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etymologie',
          title: 'Les racines latines et grecques',
          minutes: 30,
          objectives: [
            "Connaître l'origine latine de la plus grande partie du vocabulaire français.",
            "Identifier des racines latines et grecques courantes et en donner le sens.",
            "Expliquer le sens d'un mot savant à partir de ses racines.",
            "Utiliser l'étymologie donnée par le dictionnaire.",
          ],
          course: [
            {
              heading: "D'où viennent les mots français ?",
              paragraphs: [
                "L'étymologie est l'étude de l'origine des mots. La plus grande partie du vocabulaire français vient du latin, la langue des Romains. Après la conquête de la Gaule par Jules César, au Ier siècle avant J.-C., les Gaulois ont peu à peu adopté le latin parlé. Pendant des siècles, ce latin s'est transformé dans la bouche des habitants, jusqu'à devenir l'ancien français, puis le français moderne.",
                "Le français a aussi gardé quelques mots gaulois (chêne, mouton, alouette) et reçu des mots des Francs, un peuple germanique (guerre, blanc). Au fil des siècles, il a emprunté des mots à d'autres langues : à l'arabe (algèbre, chiffre), à l'italien (balcon), à l'anglais (week-end, football).",
                "Le grec ancien a fourni beaucoup de mots savants, surtout dans les sciences et les techniques : biologie, géographie, téléphone, thermomètre. Ces mots ont souvent été fabriqués bien après l'Antiquité, en assemblant des racines grecques, comme on assemble des briques.",
              ],
              box: { label: "Définition", text: "L'étymologie est l'étude de l'origine d'un mot. Le français vient surtout du latin parlé en Gaule ; il a aussi emprunté des mots au gaulois, au francique, à l'arabe, à l'italien, à l'anglais, et forme ses mots savants avec des racines grecques et latines." },
            },
            {
              heading: "Quelques racines latines",
              paragraphs: [
                "Connaître quelques racines latines permet de comprendre des familles entières de mots. « aqua » (l'eau) : aquarium, aquatique. « terra » (la terre) : terrestre, territoire. « manus » (la main) : manuel, manuscrit (écrit à la main). « pes, pedis » (le pied) : pédestre, pédale. « scribere » (écrire) : scribe, inscrire.",
                "D'autres racines latines servent de préfixe ou de suffixe. « omnis » (tout) et « vorare » (avaler, dévorer) donnent omnivore, qui mange de tout ; avec « caro, carnis » (la chair), on obtient carnivore, et avec « herba », herbivore. « -cide » (qui tue) donne insecticide. « multi » (nombreux) donne multicolore.",
              ],
              box: { label: "Repère", text: "Racines latines : aqua (eau), terra (terre), manus (main), pes, pedis (pied), scribere (écrire), omnis (tout), vorare (dévorer), -cide (qui tue), multi (nombreux)." },
            },
            {
              heading: "Quelques racines grecques",
              paragraphs: [
                "Les racines grecques se combinent souvent deux par deux. « bios » (la vie) + « logos » (la parole, l'étude) donne biologie, l'étude de la vie. « gê » ou « géo » (la terre) + « graphein » (écrire, décrire) donne géographie, la description de la terre. « tele » (loin) + « phônê » (la voix, le son) donne téléphone, la voix qui vient de loin.",
                "Autres racines utiles : « micro » (petit) et « skopein » (observer) : microscope, télescope. « chronos » (le temps) et « metron » (la mesure) : chronomètre. « hydro » (l'eau) : hydravion. « polys » (nombreux) et « gônia » (l'angle) : polygone. « autos » (soi-même) : autobiographie. « phobos » (la peur) : hydrophobe, qui a peur de l'eau. « hippos » (le cheval) : hippodrome.",
                "Attention aux racines qui se ressemblent. « ped- » peut venir du latin « pes, pedis » (le pied : pédestre, pédale) ou du grec « pais, paidos » (l'enfant : pédiatre, le médecin des enfants). Seul le sens permet de trancher.",
              ],
              box: { label: "Repère", text: "Racines grecques : bios (vie), logos (parole, étude), géo (terre), graphein (écrire), tele (loin), phônê (voix, son), micro (petit), skopein (observer), chronos (temps), metron (mesure), hydro (eau), polys (nombreux), autos (soi-même), phobos (peur)." },
            },
            {
              heading: "Mots populaires, mots savants et dictionnaire",
              paragraphs: [
                "Un même mot latin a parfois donné deux mots français. Le premier, transformé par l'usage oral pendant des siècles, est un mot populaire ; le second, emprunté plus tard au latin écrit par des savants, a gardé une forme proche du latin. Ainsi « fragilis » a donné « frêle » et « fragile », « potio » a donné « poison » et « potion », « hospitale » a donné « hôtel » et « hôpital ». Ces paires s'appellent des doublets.",
                "Pour connaître l'origine d'un mot, consultez un dictionnaire : l'étymologie est indiquée au début de l'article, souvent entre crochets ou après l'abréviation « lat. » (latin) ou « gr. » (grec). C'est un bon réflexe pour comprendre un mot et retenir son orthographe : on écrit « chronomètre » avec un h parce que la racine grecque « chronos » en a un.",
              ],
            },
          ],
          keyPoints: [
            "L'étymologie est l'étude de l'origine des mots ; le français vient surtout du latin.",
            "Racines latines : aqua (eau), manus (main), pes (pied), omnis (tout), vorare (dévorer).",
            "Racines grecques : bios (vie), logos (étude), géo (terre), graphein (écrire), tele (loin), chronos (temps).",
            "Attention : ped- signifie « pied » en latin, mais « enfant » en grec (pédiatre).",
            "Doublets : un mot populaire et un mot savant issus du même mot latin (frêle / fragile, poison / potion).",
          ],
          example: {
            statement: "Expliquez le sens du mot « chronologie » à partir de ses racines, puis donnez deux autres mots formés sur l'une de ces racines.",
            solution: [
              "Découper le mot : « chrono » + « logie ».",
              "Donner le sens de chaque racine : « chronos » signifie « le temps » en grec ; « logos » signifie « la parole, l'étude, le discours ».",
              "Additionner les sens : la chronologie est l'étude du temps, c'est-à-dire l'ordre dans lequel les événements se sont succédé.",
              "Trouver d'autres mots avec « chrono » : chronomètre (instrument qui mesure le temps), chronologique (qui suit l'ordre du temps).",
              "Trouver d'autres mots avec « logie » : biologie (étude de la vie), géologie (étude de la terre).",
              "Réponse : la chronologie est l'étude de l'ordre des événements dans le temps ; on retrouve ses racines dans chronomètre et dans biologie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À l'aide des racines du cours, expliquez le sens de ces mots. a) aquatique ; b) manuscrit ; c) téléphone ; d) biographie ; e) hydrophobe ; f) multicolore.",
              hint: "Repérez la ou les racines connues dans chaque mot, puis additionnez leurs sens.",
              solution: [
                "a) aqua (eau) : qui vit dans l'eau ou qui concerne l'eau.",
                "b) manus (main) + scribere (écrire) : un texte écrit à la main.",
                "c) tele (loin) + phônê (voix, son) : appareil qui transmet la voix à distance.",
                "d) bios (vie) + graphein (écrire) : le récit écrit de la vie d'une personne.",
                "e) hydro (eau) + phobos (peur) : qui a peur de l'eau (ou, pour une matière, qui repousse l'eau).",
                "f) multi (nombreux) + couleur : qui a plusieurs couleurs.",
              ],
            },
            {
              level: 2,
              statement: "Retrouvez le mot savant qui correspond à chaque définition, en combinant des racines du cours. a) Qui mange de tout. b) Instrument qui sert à observer ce qui est très petit. c) Instrument qui mesure le temps. d) Figure qui a plusieurs angles. e) Produit qui tue les insectes. f) Récit qu'une personne écrit sur sa propre vie.",
              hint: "Cherchez dans le cours la racine de chaque idée : tout, petit, observer, temps, mesure, nombreux, angle, qui tue, soi-même, vie, écrire.",
              solution: [
                "a) omnis (tout) + vorare (dévorer) : omnivore.",
                "b) micro (petit) + skopein (observer) : microscope.",
                "c) chronos (temps) + metron (mesure) : chronomètre.",
                "d) polys (nombreux) + gônia (angle) : polygone.",
                "e) insecte + -cide (qui tue) : insecticide.",
                "f) autos (soi-même) + bios (vie) + graphein (écrire) : autobiographie.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Expliquez pourquoi « pédestre » et « pédiatre » commencent par les mêmes lettres sans appartenir à la même famille. b) « Fragile » et « frêle » viennent tous deux du latin « fragilis ». Lequel est le mot populaire, lequel est le mot savant ? Justifiez. c) Un inventeur imaginaire crée un appareil qui permet de voir de très loin le passé. Fabriquez-lui un nom avec des racines grecques du cours et expliquez votre choix.",
              hint: "Pour a, pensez à la différence entre le latin et le grec. Pour b, demandez-vous quel mot ressemble le plus au latin. Pour c, combinez des racines qui signifient « loin », « temps » et « observer ».",
              solution: [
                "a) « pédestre » vient du latin « pes, pedis » (le pied) : une randonnée pédestre se fait à pied. « pédiatre » vient du grec « pais, paidos » (l'enfant) : le pédiatre soigne les enfants. Même début, mais deux racines différentes, de deux langues différentes.",
                "b) « fragile » est le mot savant : sa forme est restée très proche du latin « fragilis ». « frêle » est le mot populaire : il s'est transformé pendant des siècles dans la langue parlée. Ces deux mots forment un doublet.",
                "c) Exemple : « téléchronoscope », formé de tele (loin), chronos (temps) et skopein (observer) : un instrument pour observer le temps de loin. D'autres noms sont acceptables, comme « chronoscope », si les racines sont justifiées.",
                "Remarque : ce mot est inventé pour l'exercice ; il n'existe pas dans le dictionnaire, mais il est compréhensible grâce à ses racines.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque racine latine ou grecque à son sens.",
            pairs: [
              { left: "aqua (latin)", right: "l'eau" },
              { left: "manus (latin)", right: "la main" },
              { left: "bios (grec)", right: "la vie" },
              { left: "graphein (grec)", right: "écrire" },
              { left: "tele (grec)", right: "loin" },
              { left: "chronos (grec)", right: "le temps" },
            ],
          },
          quiz: [
            { q: "De quelle langue vient la plus grande partie du vocabulaire français ?", options: ["Du grec", "Du gaulois", "Du latin", "De l'anglais"], answer: 2, why: "Le français est issu du latin parlé en Gaule après la conquête romaine." },
            { q: "Que signifie la racine grecque « bios » ?", options: ["La vie", "La terre", "Le livre", "La lumière"], answer: 0, why: "« bios » signifie « la vie » : biologie, biographie." },
            { q: "Que soigne un pédiatre ?", options: ["Les pieds", "Les dents", "Les oreilles", "Les enfants"], answer: 3, why: "« ped- » vient ici du grec « pais, paidos », l'enfant, et non du latin « pes », le pied." },
            { q: "Quel mot signifie « qui mange de la viande » ?", options: ["herbivore", "carnivore", "omnivore"], answer: 1, why: "« caro, carnis » (la chair) + « vorare » (dévorer) : carnivore." },
            { q: "Quelle paire forme un doublet ?", options: ["poison et potion", "terre et terrible", "mer et mari", "chant et chantier"], answer: 0, why: "« poison » et « potion » viennent tous deux du latin « potio » : l'un est populaire, l'autre savant." },
          ],
          trap: "Se fier à la ressemblance de deux racines sans vérifier leur sens : « ped- » ne signifie pas toujours « pied » (pédiatre), et « hydro- » ou « aqua- » parlent d'eau alors que « hippo- » parle de cheval (hippopotame : cheval du fleuve).",
          method: "Constituez-vous une fiche de racines : une ligne par racine, avec la langue (latin ou grec), le sens et deux mots exemples. Relisez-la régulièrement et ajoutez-y chaque racine rencontrée dans le dictionnaire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sens-propre-figure',
          title: 'Sens propre, sens figuré et niveaux de langue',
          minutes: 30,
          objectives: [
            "Distinguer le sens propre et le sens figuré d'un mot selon le contexte.",
            "Comprendre et employer des expressions imagées.",
            "Identifier les niveaux de langue (familier, courant, soutenu) et adapter son expression à la situation.",
          ],
          course: [
            {
              heading: "Un mot, plusieurs sens",
              paragraphs: [
                "La plupart des mots ont plusieurs sens : on dit qu'ils sont polysémiques. Le mot « feuille » désigne la feuille d'un arbre et la feuille de papier ; le mot « bouton » désigne le bouton d'une chemise, le bouton d'une fleur, un bouton sur la peau ou le bouton d'un ascenseur.",
                "C'est le contexte, c'est-à-dire les mots et la situation qui entourent le mot, qui permet de savoir quel sens est employé. Dans un dictionnaire, les différents sens d'un mot sont numérotés, avec un exemple pour chacun.",
              ],
              box: { label: "Définition", text: "Un mot polysémique a plusieurs sens. Le contexte (la phrase, la situation) indique quel sens est employé. Dans le dictionnaire, chaque sens est numéroté." },
            },
            {
              heading: "Sens propre et sens figuré",
              paragraphs: [
                "Le sens propre est le sens premier d'un mot, le plus concret : « Le lion dévore sa proie » (il la mange avec avidité). Le sens figuré est un sens dérivé, construit à partir d'une image : « Ma sœur dévore les romans » (elle les lit avec passion, avidement, comme on mange quand on a très faim).",
                "Le sens figuré repose souvent sur une comparaison implicite. « Avoir un cœur de pierre », c'est avoir un cœur aussi dur et froid qu'une pierre, donc être insensible. « Le pied de la montagne » désigne le bas de la montagne, comme le pied est le bas du corps. Beaucoup de ces images sont si habituelles qu'on ne les remarque plus.",
              ],
              box: { label: "À retenir", text: "Sens propre : le sens premier, concret (une pierre dure). Sens figuré : un sens imagé, construit à partir du sens propre (un cœur de pierre, insensible). Pour trouver le sens figuré, cherchez l'image qui relie les deux sens." },
            },
            {
              heading: "Les expressions imagées",
              paragraphs: [
                "Une expression imagée est un groupe de mots dont le sens ne se devine pas mot à mot. « Il pleut des cordes » signifie qu'il pleut très fort ; « avoir un chat dans la gorge », c'est être enroué ; « avoir la tête dans les nuages », c'est être distrait ; « poser un lapin », c'est ne pas venir à un rendez-vous.",
                "Ces expressions rendent la langue vivante et colorée, mais il faut les comprendre comme un tout. Si on les prenait au sens propre, elles deviendraient absurdes : personne n'a jamais vraiment de chat dans la gorge. Elles sont souvent difficiles à traduire, car chaque langue a ses propres images.",
              ],
            },
            {
              heading: "Les niveaux de langue",
              paragraphs: [
                "On ne parle pas de la même manière à un ami, à un professeur ou dans une lettre officielle. On distingue trois niveaux de langue. Le niveau familier s'emploie à l'oral, entre proches : « T'as pas vu mon bouquin ? ». Le niveau courant convient à la plupart des situations, à l'oral comme à l'écrit : « Tu n'as pas vu mon livre ? ». Le niveau soutenu s'emploie surtout à l'écrit, dans les situations officielles ou en littérature : « N'auriez-vous pas aperçu mon ouvrage ? ».",
                "Le niveau de langue se reconnaît au vocabulaire (bouquin, livre, ouvrage) et à la construction des phrases. À l'oral familier, on supprime souvent le « ne » de la négation (« j'sais pas ») ; à l'écrit, la négation est complète. Le niveau soutenu utilise volontiers l'inversion du sujet dans les questions (« Avez-vous... ? ») et des mots plus rares.",
                "Aucun niveau n'est « mauvais » en lui-même : l'essentiel est de choisir celui qui convient à la situation. Dans une rédaction ou une lettre au collège, on utilise le niveau courant ou soutenu.",
              ],
              box: { label: "Repère", text: "Familier : bouquin, boulot, bouffer, se grouiller. Courant : livre, travail, manger, se dépêcher. Soutenu : ouvrage, labeur, se restaurer, se hâter. On adapte son niveau de langue à la situation et à l'interlocuteur." },
            },
          ],
          keyPoints: [
            "Un mot polysémique a plusieurs sens ; le contexte indique lequel est employé.",
            "Sens propre : sens premier et concret. Sens figuré : sens imagé construit à partir du sens propre.",
            "Une expression imagée se comprend comme un tout (il pleut des cordes : il pleut très fort).",
            "Trois niveaux de langue : familier, courant, soutenu.",
            "On adapte le niveau de langue à la situation ; à l'écrit scolaire : courant ou soutenu.",
          ],
          example: {
            statement: "Dans les phrases suivantes, le mot « éteindre » est-il employé au sens propre ou au sens figuré ? Expliquez le sens figuré. a) Les pompiers ont éteint l'incendie. b) Cette mauvaise nouvelle a éteint sa joie.",
            solution: [
              "Trouver le sens premier du verbe : « éteindre », c'est faire cesser un feu ou une lumière.",
              "a) Les pompiers font réellement cesser un feu : c'est le sens propre, concret.",
              "b) La joie n'est pas un feu : le verbe est employé au sens figuré.",
              "Chercher l'image : la joie est comparée à une flamme qui brille ; la mauvaise nouvelle la fait disparaître, comme on souffle une flamme.",
              "Réponse : a) sens propre ; b) sens figuré : la mauvaise nouvelle a fait disparaître sa joie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si le mot placé entre crochets est employé au sens propre ou au sens figuré. a) Il a un cœur de [pierre]. b) Ce mur est en [pierre]. c) Une [tempête] a arraché les arbres. d) La chanteuse a reçu une [tempête] d'applaudissements. e) Elle a la tête dans les [nuages]. f) Les [nuages] cachent le soleil.",
              hint: "Demandez-vous si le mot désigne la chose concrète (une vraie pierre, une vraie tempête) ou s'il crée une image.",
              solution: [
                "a) Sens figuré : le cœur n'est pas fait de pierre ; il est dur et insensible comme une pierre.",
                "b) Sens propre : le mur est réellement construit en pierre.",
                "c) Sens propre : une vraie tempête, avec un vent violent.",
                "d) Sens figuré : les applaudissements sont si nombreux et bruyants qu'on les compare à une tempête.",
                "e) Sens figuré : elle est distraite, elle rêve.",
                "f) Sens propre : de vrais nuages dans le ciel.",
              ],
            },
            {
              level: 2,
              statement: "a) Classez ces mots par niveau de langue (familier, courant, soutenu) en formant quatre séries de trois : bouquin, se hâter, travail, bouffer, ouvrage, labeur, manger, se grouiller, livre, boulot, se restaurer, se dépêcher. b) Expliquez le sens de ces expressions imagées : « poser un lapin », « avoir un chat dans la gorge », « coûter les yeux de la tête ».",
              hint: "Regroupez d'abord les mots qui ont le même sens, puis classez chaque série du plus familier au plus soutenu.",
              solution: [
                "a) Série 1 : bouquin (familier), livre (courant), ouvrage (soutenu).",
                "a) Série 2 : boulot (familier), travail (courant), labeur (soutenu).",
                "a) Série 3 : bouffer (familier), manger (courant), se restaurer (soutenu).",
                "a) Série 4 : se grouiller (familier), se dépêcher (courant), se hâter (soutenu).",
                "b) « poser un lapin » : ne pas venir à un rendez-vous. « avoir un chat dans la gorge » : être enroué, avoir du mal à parler. « coûter les yeux de la tête » : coûter très cher.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lucas a écrit ce message à un ami : « Salut ! J'ai pas pu venir au foot, j'étais crevé, j'ai bossé comme un malade sur mon exposé. T'inquiète, je me grouille de le finir et on se capte samedi. » a) Relevez quatre mots ou tournures familiers. b) Réécrivez le message en niveau courant. c) Réécrivez-le en niveau soutenu, comme si Lucas s'adressait par écrit à son entraîneur. d) Dans « j'étais crevé », le mot « crevé » est-il employé au sens propre ? Expliquez.",
              hint: "Cherchez les négations incomplètes, les mots d'argot et les expressions de l'oral. En niveau soutenu, utilisez le vouvoiement et des mots plus rares.",
              solution: [
                "a) Éléments familiers : « J'ai pas pu » (négation sans « ne »), « crevé » (fatigué), « bossé » (travaillé), « comme un malade » (énormément), « T'inquiète » (ne t'inquiète pas), « se grouiller » (se dépêcher), « se capter » (se retrouver).",
                "b) Niveau courant : « Bonjour ! Je n'ai pas pu venir au football, j'étais très fatigué : j'ai beaucoup travaillé sur mon exposé. Ne t'inquiète pas, je me dépêche de le terminer et nous nous retrouvons samedi. »",
                "c) Niveau soutenu : « Monsieur, je vous prie de m'excuser de mon absence à l'entraînement. J'étais épuisé, car j'avais consacré de longues heures à mon exposé. Je m'efforce de l'achever au plus vite et serai présent samedi. »",
                "d) Non : au sens propre, « crevé » se dit d'un pneu ou d'un ballon percé. Au sens figuré et familier, il signifie « très fatigué », comme un ballon qui s'est vidé de son air.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Sens des mots et niveaux de langue.",
            statements: [
              { text: "Dans « dévorer un roman », le verbe est au sens figuré.", true: true, why: "On ne mange pas le livre : on le lit avec passion, comme on mange avec appétit." },
              { text: "Le sens propre est le sens imagé d'un mot.", true: false, why: "Le sens propre est le sens premier et concret ; le sens imagé est le sens figuré." },
              { text: "« Il pleut des cordes » signifie qu'il pleut très fort.", true: true, why: "C'est une expression imagée : la pluie tombe si fort qu'elle semble former des cordes." },
              { text: "Le niveau familier est toujours une faute.", true: false, why: "Il convient entre proches, à l'oral ; il est déplacé seulement dans une situation qui demande un autre niveau." },
              { text: "« Ouvrage » appartient au niveau soutenu, « bouquin » au niveau familier.", true: true, why: "Livre est le mot courant ; ouvrage est soutenu, bouquin familier." },
              { text: "Un mot polysémique n'a qu'un seul sens.", true: false, why: "Polysémique signifie au contraire « qui a plusieurs sens », comme feuille ou bouton." },
            ],
          },
          quiz: [
            { q: "Dans quelle phrase le mot « pied » est-il au sens figuré ?", options: ["Je me suis tordu le pied.", "Il a un pied plus grand que l'autre.", "Nous campons au pied de la montagne.", "Le bébé remue les pieds."], answer: 2, why: "La montagne n'a pas de pied : l'expression désigne son bas, par comparaison avec le corps." },
            { q: "Que signifie « avoir la tête dans les nuages » ?", options: ["Être distrait", "Être très grand", "Avoir mal à la tête", "Aimer l'avion"], answer: 0, why: "C'est une expression imagée : la personne rêve au lieu de faire attention." },
            { q: "Quel mot appartient au niveau familier ?", options: ["travail", "labeur", "boulot"], answer: 2, why: "Boulot est familier ; travail est courant et labeur soutenu." },
            { q: "Quelle question est au niveau soutenu ?", options: ["T'as faim ?", "Tu as faim ?", "Est-ce que tu as faim ?", "Avez-vous faim ?"], answer: 3, why: "L'inversion du sujet et le vouvoiement caractérisent le niveau soutenu." },
            { q: "Qu'est-ce qui permet de savoir dans quel sens un mot est employé ?", options: ["Sa longueur", "Le contexte", "Sa première lettre", "Son genre"], answer: 1, why: "La phrase et la situation qui entourent le mot indiquent quel sens est employé." },
          ],
          trap: "Prendre une expression imagée au pied de la lettre, ou employer à l'écrit scolaire des mots familiers (bosser, crevé, bouquin) et des négations incomplètes (« j'ai pas »).",
          method: "Pour trouver un sens figuré, écrivez d'abord le sens propre du mot, puis cherchez le point commun entre ce sens et la situation décrite : ce point commun est l'image qui explique le sens figuré.",
        },
      ],
    },
  ],
}
