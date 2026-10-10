import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'philosophie-tle',
  chapters: [
    /* ==================================================================== */
    /* TRANSFORMER LE MONDE : NATURE, TRAVAIL, TECHNIQUE                      */
    /* ==================================================================== */
    {
      id: 'agir-sur-le-monde',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'la-nature',
          title: 'La nature : l\'être humain est-il un être naturel ?',
          minutes: 30,
          objectives: [
            "Distinguer les principaux sens du mot nature : l'ensemble des êtres, l'essence d'une chose, ce qui est inné.",
            "Analyser l'opposition entre nature et culture à partir d'exemples précis.",
            "Construire le problème : l'être humain est-il un être naturel, ou se définit-il par ce qu'il ajoute à la nature ?",
            "Mobiliser des auteurs (Aristote, Rousseau, Pic de la Mirandole, Sartre, Merleau-Ponty) pour argumenter.",
          ],
          course: [
            {
              heading: "Les sens du mot nature",
              paragraphs: [
                "Le mot nature vient du latin natura, formé sur le verbe nasci, naître ; il traduit le grec phusis, qui renvoie à l'idée de croissance. Est naturel, au départ, ce qui naît et se développe de lui-même, sans intervention extérieure. Aristote, dans la Physique, définit ainsi les êtres naturels comme ceux qui ont en eux-mêmes le principe de leur mouvement et de leur repos : la plante pousse d'elle-même, alors que le lit ne se fabrique pas tout seul.",
                "On peut distinguer trois sens principaux. Premier sens : la nature est l'ensemble des êtres et des phénomènes qui existent indépendamment de l'action humaine, avec les lois qui les régissent (on parle des lois de la nature). Deuxième sens : la nature d'une chose est son essence, ce qui la définit (« la nature humaine », « c'est dans sa nature »). Troisième sens : est naturel ce qui est inné, donné à la naissance, spontané, par opposition à ce qui est acquis, appris ou fabriqué.",
                "Il faut ajouter un usage normatif, plus glissant : on dit d'un comportement qu'il est « naturel » pour signifier qu'il est normal ou bon, et « contre nature » pour le condamner. Ce glissement du fait (ce qui est) à la norme (ce qui doit être) est souvent un piège : qu'une chose soit naturelle ne prouve pas qu'elle soit bonne. Les maladies, les séismes ou la loi du plus fort sont naturels, et personne n'en conclut qu'il faut les approuver.",
              ],
              box: { label: "Définition", text: "Nature : 1) l'ensemble des êtres et des phénomènes qui existent sans l'intervention humaine ; 2) l'essence d'un être, ce qui le définit ; 3) ce qui est inné, spontané, par opposition à l'acquis et à l'artifice." },
            },
            {
              heading: "Nature et culture : une frontière difficile à tracer",
              paragraphs: [
                "La culture, au sens large que lui donne l'anthropologie, désigne tout ce que les êtres humains ajoutent à la nature et se transmettent par l'apprentissage, et non par l'hérédité biologique : langues, techniques, règles, croyances, arts, manières de vivre. Manger est un besoin naturel ; manger à heures fixes, avec des couverts ou des baguettes, en respectant des interdits alimentaires, relève de la culture.",
                "Claude Lévi-Strauss, dans Les Structures élémentaires de la parenté (1949), propose un critère : ce qui est universel dans l'espèce humaine relève de la nature, ce qui est soumis à une règle variable selon les sociétés relève de la culture. Or la prohibition de l'inceste est à la fois universelle et une règle : elle se situe à la charnière, comme le moment où la nature se dépasse elle-même en culture. Le passage de l'une à l'autre n'est donc pas une ligne nette.",
                "Les cas d'enfants dits sauvages montrent à quel point l'humain dépend de la culture. Victor, découvert dans l'Aveyron à la fin du XVIIIe siècle et suivi par le médecin Jean Itard au début du XIXe siècle, n'a jamais réellement appris à parler. L'aptitude au langage est naturelle, mais elle ne se réalise que dans un milieu humain : sans éducation, les capacités proprement humaines restent en sommeil.",
              ],
              box: { label: "Repère", text: "Critère de Lévi-Strauss : l'universel relève de la nature, la règle (variable d'une société à l'autre) relève de la culture. La prohibition de l'inceste, universelle et pourtant règle, marque la charnière entre les deux." },
            },
            {
              heading: "L'être humain, un être sans nature fixe ?",
              paragraphs: [
                "Rousseau, dans le Discours sur l'origine et les fondements de l'inégalité parmi les hommes (1755), cherche ce qui distingue l'homme de l'animal. Il le trouve dans la liberté et dans la perfectibilité, c'est-à-dire la faculté de se perfectionner et de se transformer au cours de l'histoire. L'animal est, au bout de quelques mois, à peu près ce qu'il sera toute sa vie, et son espèce reste la même au fil des siècles ; l'être humain, lui, se modifie sans cesse, pour le meilleur comme pour le pire.",
                "Pic de la Mirandole, humaniste italien, l'avait déjà affirmé dans son Discours sur la dignité de l'homme (1486) : à la différence des autres créatures, l'homme n'aurait reçu aucune place fixe, et il lui revient de se façonner lui-même. Au XXe siècle, Sartre radicalise cette idée dans L'existentialisme est un humanisme (1946) : chez l'homme, « l'existence précède l'essence ». Il n'existe pas de nature humaine définie à l'avance ; l'homme n'est rien d'autre que ce qu'il se fait par ses choix et ses actes.",
                "Selon cette ligne de pensée, l'être humain ne serait pas un être naturel au sens où l'est l'animal : sa marque propre est de pouvoir s'arracher à ce qui est simplement donné. Mais il faut rester prudent : l'homme demeure un vivant, soumis aux besoins, à la maladie, au vieillissement et à la mort. Sa liberté s'exerce toujours à partir d'un corps et d'un milieu qu'il n'a pas choisis.",
              ],
              box: { label: "À retenir", text: "Rousseau : la perfectibilité distingue l'homme de l'animal. Pic de la Mirandole : l'homme se façonne lui-même. Sartre : l'existence précède l'essence, il n'y a pas de nature humaine fixée d'avance." },
            },
            {
              heading: "Dépasser l'opposition entre nature et culture",
              paragraphs: [
                "Aristote, dans la Politique, affirme que l'homme est par nature un animal politique : il est fait pour vivre dans une cité, et c'est parce qu'il possède le langage (logos) qu'il peut discuter du juste et de l'injuste. La vie sociale et culturelle n'est donc pas ajoutée de l'extérieur à la nature humaine : elle en est l'accomplissement. Chez l'homme, la culture est naturelle.",
                "Merleau-Ponty, dans la Phénoménologie de la perception (1945), montre qu'on ne peut pas séparer chez l'homme une couche de comportements naturels et une couche culturelle posée par-dessus : même nos gestes les plus élémentaires (sourire, marcher, exprimer la colère) sont à la fois biologiques et appris. Il résume cette idée en disant que chez l'homme tout est fabriqué et tout est naturel.",
                "On peut alors répondre au sujet avec nuance. L'être humain est un être naturel par son corps et par son appartenance au monde vivant, ce que l'écologie rappelle aujourd'hui avec force ; mais sa nature propre est de ne pas en rester à la nature, de la transformer par le travail et la technique et de se transformer lui-même par la culture. La question devient moins « nature ou culture ? » que « comment la culture prolonge-t-elle ou contrarie-t-elle notre nature ? ».",
              ],
            },
          ],
          keyPoints: [
            "Nature : l'ensemble des êtres indépendants de l'action humaine, l'essence d'une chose, ou ce qui est inné.",
            "Culture : tout ce que l'humain ajoute à la nature et transmet par l'apprentissage, non par l'hérédité.",
            "Lévi-Strauss : universel = nature, règle = culture ; la prohibition de l'inceste est à la charnière.",
            "Rousseau (1755) : la perfectibilité ; Sartre (1946) : l'existence précède l'essence.",
            "Aristote : l'homme est par nature un animal politique ; Merleau-Ponty : chez l'homme tout est fabriqué et tout est naturel.",
            "Attention au glissement du naturel (ce qui est) au normal ou au bon (ce qui doit être).",
          ],
          example: {
            statement: "Un camarade affirme : « Il est naturel que le plus fort domine le plus faible, donc c'est juste. » Analysez ce raisonnement et montrez où il pèche.",
            solution: [
              "Repérer la structure : le raisonnement part d'un constat (le plus fort domine dans la nature) et en tire une conclusion morale (c'est juste).",
              "Identifier le sens du mot naturel : il est employé au premier sens (ce qui se produit dans la nature, sans intervention humaine), puis glisse vers un sens normatif (ce qui est bien).",
              "Nommer l'erreur : on passe de ce qui est à ce qui doit être. Or un fait ne suffit pas à fonder une norme : la maladie est naturelle, et l'on cherche pourtant à la soigner.",
              "Mobiliser une référence : pour Rousseau, dans le Contrat social, la force ne fait pas le droit ; céder à la force est une nécessité, non un devoir.",
              "Ajouter l'argument de la culture : le propre des sociétés humaines est justement d'instituer des lois qui protègent le faible contre le fort.",
              "Conclusion : le raisonnement est fautif, car il confond le naturel au sens du fait et le naturel au sens de la norme ; ce qui est naturel n'est pas pour autant juste.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, indiquez dans quel sens est employé le mot nature ou naturel (A : l'ensemble des êtres et phénomènes indépendants de l'homme ; B : l'essence d'un être ; C : l'inné, par opposition à l'acquis). 1) « Les tempêtes sont des phénomènes de la nature. » 2) « Le doute est-il dans la nature de l'esprit humain ? » 3) « Sa facilité à nager n'est pas naturelle : il s'entraîne depuis l'enfance. » 4) « Les lois de la nature s'appliquent aussi à notre corps. »",
              hint: "Demandez-vous à chaque fois à quoi le mot s'oppose : à l'action humaine, à l'accidentel, ou à l'apprentissage ?",
              solution: [
                "Phrase 1 : sens A. Les tempêtes se produisent sans intervention humaine ; la nature désigne ici l'ensemble des phénomènes physiques.",
                "Phrase 2 : sens B. On se demande si le doute fait partie de l'essence de l'esprit, de ce qui le définit.",
                "Phrase 3 : sens C. Naturel s'oppose ici à acquis : la facilité vient de l'entraînement, non de la naissance.",
                "Phrase 4 : sens A. Les lois de la nature sont les lois qui régissent l'ensemble des phénomènes physiques et biologiques.",
                "Résultat : 1-A, 2-B, 3-C, 4-A.",
              ],
            },
            {
              level: 2,
              statement: "À l'aide du critère de Lévi-Strauss (l'universel relève de la nature, la règle relève de la culture), classez les comportements suivants en naturel, culturel ou mixte, en justifiant brièvement : respirer ; serrer la main pour saluer ; se nourrir ; manger avec des baguettes ; pleurer ; porter le deuil en noir ; parler.",
              hint: "Un comportement est mixte quand un besoin ou une aptitude universels prennent des formes réglées qui varient selon les sociétés.",
              solution: [
                "Respirer : naturel. C'est universel et ne dépend d'aucune règle sociale.",
                "Serrer la main : culturel. C'est une règle de politesse qui varie selon les sociétés (on s'incline, on s'embrasse ailleurs).",
                "Se nourrir : naturel en tant que besoin universel, mais toujours réalisé selon des règles (heures, interdits, recettes) : il est donc mixte dans sa réalisation.",
                "Manger avec des baguettes : culturel. C'est une technique apprise, propre à certaines sociétés.",
                "Pleurer : naturel comme réaction physiologique, mais les occasions où il est permis de pleurer en public sont réglées par la culture : mixte.",
                "Porter le deuil en noir : culturel. Dans d'autres traditions, la couleur du deuil est le blanc.",
                "Parler : mixte. L'aptitude au langage est universelle (nature), mais chaque langue est apprise et varie selon les sociétés (culture). L'exemple de Victor de l'Aveyron montre que l'aptitude ne se réalise pas sans milieu humain.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « L'être humain est-il un être naturel ? » Rédigez l'introduction complète (définitions, problème, annonce du plan), puis proposez un plan détaillé en trois parties, avec pour chaque partie une idée directrice, un argument et une référence.",
              hint: "Faites jouer les différents sens de « naturel » : être naturel, est-ce être un vivant comme les autres, avoir une nature fixe, ou réaliser sa nature par la culture ?",
              solution: [
                "Introduction, définitions : être naturel peut signifier appartenir à la nature, comme tout vivant soumis à des lois biologiques, ou posséder une nature fixe, donnée d'avance, qui détermine ce que l'on est. L'être humain, lui, parle, travaille, invente des règles et des techniques : il semble ajouter à la nature quelque chose qui n'y était pas.",
                "Introduction, problème : si l'homme est un vivant comme les autres, d'où vient sa capacité à transformer le monde et à se transformer lui-même ? Mais s'il échappe à la nature, comment comprendre qu'il reste soumis au corps, aux besoins et à la mort ? Le problème est de savoir si la culture éloigne l'homme de la nature ou si elle est sa manière propre d'être naturel.",
                "Introduction, annonce : nous verrons d'abord que l'homme est un être naturel par son corps, puis qu'il se distingue des autres vivants par l'absence de nature fixe, avant de montrer que la culture est, chez lui, l'accomplissement de sa nature.",
                "Partie 1 : l'homme est un vivant soumis à la nature. Argument : besoins, instincts de survie, vieillissement et mort s'imposent à tous. Référence : la biologie de l'évolution inscrit l'espèce humaine dans l'histoire du vivant ; exemple des besoins vitaux.",
                "Partie 2 : mais l'homme n'a pas de nature fixe. Argument : il se transforme par l'histoire et l'éducation ; sans culture, ses aptitudes restent en sommeil (Victor de l'Aveyron). Références : la perfectibilité chez Rousseau (1755), l'existence qui précède l'essence chez Sartre (1946).",
                "Partie 3 : la culture est la nature de l'homme. Argument : l'opposition est abstraite, car nos gestes les plus élémentaires sont à la fois biologiques et appris. Références : Aristote (l'homme est par nature un animal politique), Merleau-Ponty (chez l'homme tout est fabriqué et tout est naturel).",
                "Conclusion attendue : l'être humain est un être naturel, mais d'une manière singulière, puisque sa nature consiste à se dépasser par la culture.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque auteur à l'idée qu'il défend sur la nature humaine.",
            pairs: [
              { left: "Aristote", right: "L'homme est par nature un animal politique." },
              { left: "Rousseau", right: "La perfectibilité distingue l'homme de l'animal." },
              { left: "Pic de la Mirandole", right: "L'homme n'a pas de place fixe et se façonne lui-même." },
              { left: "Sartre", right: "L'existence précède l'essence." },
              { left: "Lévi-Strauss", right: "La prohibition de l'inceste marque la charnière entre nature et culture." },
              { left: "Merleau-Ponty", right: "Chez l'homme, tout est fabriqué et tout est naturel." },
            ],
          },
          quiz: [
            {
              q: "D'où vient le mot nature ?",
              options: ["Du latin natura, formé sur nasci (naître)", "Du grec logos, qui désigne à la fois la parole et la raison", "Du latin cultura (le soin des champs)", "Du grec technè (l'art de fabriquer)"],
              answer: 0,
              why: "Natura vient de nasci, naître ; il traduit le grec phusis, qui évoque la croissance.",
            },
            {
              q: "Selon le critère de Lévi-Strauss, qu'est-ce qui relève de la culture ?",
              options: ["Ce qui est universel dans l'espèce humaine", "Ce qui est soumis à une règle variable selon les sociétés", "Ce qui est transmis de génération en génération par l'hérédité biologique", "Ce qui est commun aux humains et aux animaux"],
              answer: 1,
              why: "L'universel relève de la nature, la règle relève de la culture : c'est le critère proposé dans Les Structures élémentaires de la parenté.",
            },
            {
              q: "Que désigne la perfectibilité chez Rousseau ?",
              options: ["La perfection morale atteinte par les sages", "La capacité de l'animal à s'adapter à son milieu", "La faculté humaine de se perfectionner et de se transformer", "Le progrès inévitable et continu des sciences, des arts et des mœurs au fil des siècles"],
              answer: 2,
              why: "La perfectibilité est la faculté de se transformer ; elle peut conduire au meilleur comme au pire, elle ne garantit aucun progrès.",
            },
            {
              q: "Que signifie la formule de Sartre « l'existence précède l'essence » ?",
              options: ["L'homme possède une essence éternelle qu'il découvre peu à peu au cours de sa vie", "L'homme existe d'abord et se définit ensuite par ses actes", "Les objets techniques existent avant d'être pensés", "La nature humaine est fixée dès la naissance"],
              answer: 1,
              why: "Pour Sartre, il n'y a pas de nature humaine donnée d'avance : l'homme n'est rien d'autre que ce qu'il se fait.",
            },
            {
              q: "Pourquoi l'argument « c'est naturel, donc c'est bien » est-il fragile ?",
              options: ["Parce que rien n'est vraiment naturel", "Parce que la nature est toujours mauvaise", "Parce que seule la science peut dire ce qui est naturel", "Parce qu'il passe d'un fait à une norme sans justification"],
              answer: 3,
              why: "Qu'une chose existe dans la nature ne prouve pas qu'elle soit bonne : la maladie est naturelle et l'on cherche à la soigner.",
            },
          ],
          trap: "Employer le mot nature dans un seul sens sans le dire, ou glisser sans le voir du naturel comme fait (ce qui se produit) au naturel comme norme (ce qui est bon).",
          method: "Dès l'analyse du sujet, écrivez au brouillon les trois sens du mot nature (le monde, l'essence, l'inné) et demandez-vous lequel le sujet mobilise : c'est souvent leur confrontation qui fait apparaître le problème.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'le-travail',
          title: 'Le travail : travailler, est-ce seulement produire ?',
          minutes: 30,
          objectives: [
            "Définir le travail comme activité consciente de transformation de la nature et le distinguer de l'activité animale.",
            "Expliquer le rôle formateur du travail (Hegel, Marx) et le concept d'aliénation.",
            "Distinguer, avec Arendt, le travail, l'œuvre et l'action.",
            "Construire une réponse nuancée à la question : travailler, est-ce seulement produire ?",
          ],
          course: [
            {
              heading: "Qu'est-ce que travailler ?",
              paragraphs: [
                "Le travail est une activité consciente, volontaire et souvent pénible, par laquelle l'être humain transforme la nature pour produire des biens ou des services utiles à la satisfaction de ses besoins. Il se distingue du jeu, qui a sa fin en lui-même, et du loisir, qui est un temps libéré de la nécessité. Dans les sociétés modernes, le mot désigne aussi l'emploi, c'est-à-dire une activité rémunérée et socialement organisée.",
                "La pénibilité est inscrite dans l'histoire du mot. On rattache souvent le mot travail au latin populaire tripalium, nom d'un instrument à trois pieux, mais cette étymologie est aujourd'hui discutée par les linguistes. Le récit biblique de la Genèse présente le travail de la terre comme une peine imposée à l'homme après la faute. Dans la cité grecque, Aristote considérait que le travail servile, attaché à la nécessité, empêchait de mener la vie libre du citoyen.",
                "Pourtant le travail n'est pas seulement une malédiction. Il est aussi ce par quoi l'homme assure son indépendance, se rend utile aux autres et s'insère dans la société. La question du sujet est donc de savoir si le travail se réduit à sa fonction économique (produire) ou s'il a une valeur pour celui qui travaille.",
              ],
              box: { label: "Définition", text: "Travail : activité consciente et volontaire, souvent pénible, par laquelle l'être humain transforme la nature pour produire des biens ou des services répondant à des besoins." },
            },
            {
              heading: "Le travail humain : transformer la nature et se transformer",
              paragraphs: [
                "Marx, dans Le Capital (livre I, 1867), distingue le travail humain de l'activité animale. L'abeille construit des cellules de cire d'une perfection qui ferait honte à bien des architectes ; mais ce qui distingue le plus mauvais architecte de la meilleure abeille, c'est qu'il a construit la cellule dans sa tête avant de la construire réellement. Le travail humain suppose un projet conscient : le résultat existe d'abord en idée, et le travailleur y soumet sa volonté.",
                "Pour Marx, en agissant sur la nature extérieure et en la transformant, l'homme transforme en même temps sa propre nature : il développe ses facultés, son habileté, son intelligence. Le travail est donc un rapport entre l'homme et la nature où l'homme se produit lui-même.",
                "Hegel l'avait montré dans la Phénoménologie de l'esprit (1807) avec la dialectique du maître et de l'esclave. Le maître, qui a risqué sa vie pour être reconnu, jouit des choses sans les produire ; l'esclave, contraint de travailler, met en forme la matière. En façonnant la chose, il se façonne lui-même et prend conscience de sa propre valeur, tandis que le maître devient dépendant du travail de l'autre. Le travail est formateur : il libère celui qui l'accomplit.",
              ],
              box: { label: "Repère", text: "Marx : l'architecte a construit la cellule dans sa tête avant de la bâtir, ce que l'abeille ne fait pas. Hegel : en formant la chose, l'esclave se forme lui-même." },
            },
            {
              heading: "Quand le travail aliène",
              paragraphs: [
                "Le travail peut aussi déposséder l'homme de lui-même. Dans les Manuscrits de 1844, Marx décrit le travail aliéné de l'ouvrier sous le capitalisme : le produit de son travail ne lui appartient pas, son activité lui est imposée de l'extérieur, et il ne se sent lui-même qu'en dehors du travail. Le travail, qui devrait être l'expression de l'homme, devient un simple moyen de survivre.",
                "Adam Smith, dans la Richesse des nations (1776), avait vanté la division du travail à partir de l'exemple de la manufacture d'épingles : en décomposant la fabrication en opérations simples, on multiplie la production. Mais la parcellisation des tâches, poussée au XXe siècle par l'organisation scientifique du travail (taylorisme) et le travail à la chaîne, réduit le travailleur à des gestes répétitifs. Simone Weil, qui a travaillé en usine en 1934 et 1935, en témoigne dans les textes réunis sous le titre La Condition ouvrière.",
                "Hannah Arendt, dans Condition de l'homme moderne (1958), propose une distinction utile. Le travail répond aux nécessités de la vie et produit ce qui est aussitôt consommé (se nourrir, entretenir) ; l'œuvre fabrique des objets durables qui composent un monde commun (une table, une maison, un livre) ; l'action est l'activité qui se déroule directement entre les hommes, comme la parole et l'engagement politique. Arendt s'inquiète d'une société où tout devient travail et consommation.",
              ],
              box: { label: "À retenir", text: "Arendt distingue le travail (entretenir la vie, produire du consommable), l'œuvre (fabriquer des objets durables) et l'action (agir et parler avec les autres dans l'espace public)." },
            },
            {
              heading: "Travailler, plus que produire",
              paragraphs: [
                "Si travailler n'était que produire, des machines suffisamment perfectionnées pourraient nous en dispenser entièrement, et nous ne perdrions rien. Or le travail a d'autres dimensions : il structure le temps, apporte la reconnaissance des autres, donne le sentiment d'être utile et de participer à une œuvre commune. Les personnes privées d'emploi le disent souvent : elles perdent non seulement un revenu, mais aussi une place dans la société.",
                "Kant, dans ses Réflexions sur l'éducation, souligne que l'homme est le seul animal qui doit travailler : la nature ne lui a pas tout donné, et c'est par l'effort qu'il cultive ses talents. Le travail est alors une école de discipline et de développement de soi.",
                "On peut conclure que travailler n'est pas seulement produire : c'est aussi se former, se relier aux autres et transformer le monde commun. Mais cette valeur dépend des conditions dans lesquelles le travail s'exerce : un travail aliéné peut se réduire à la production, voire détruire celui qui l'accomplit. La question devient alors politique : comment organiser le travail pour qu'il reste humain ?",
              ],
            },
          ],
          keyPoints: [
            "Travail : activité consciente de transformation de la nature pour répondre à des besoins.",
            "Marx : l'architecte conçoit avant de construire ; en transformant la nature, l'homme se transforme.",
            "Hegel (1807) : l'esclave se forme en formant la chose ; le travail libère.",
            "Aliénation (Marx, 1844) : l'ouvrier est dépossédé de son produit et de son activité.",
            "Arendt (1958) : travail, œuvre et action sont trois activités distinctes.",
            "Travailler, c'est aussi se former et obtenir une reconnaissance sociale, si les conditions le permettent.",
          ],
          example: {
            statement: "Expliquez en quoi l'exemple de l'abeille et de l'architecte, chez Marx, permet de définir le propre du travail humain.",
            solution: [
              "Présenter l'exemple : Marx compare l'abeille, qui construit des cellules de cire très régulières, et l'architecte humain, même médiocre.",
              "Relever le paradoxe : du point de vue du résultat, l'abeille peut être plus habile que l'architecte. Ce n'est donc pas la qualité du produit qui distingue le travail humain.",
              "Dégager le critère : l'architecte a construit la cellule dans sa tête avant de la construire réellement. Le résultat existe d'abord sous forme de projet conscient.",
              "En tirer la définition : le travail humain est une activité finalisée par un but que l'on se représente, et à laquelle on soumet sa volonté ; l'activité de l'abeille, elle, est instinctive et invariable.",
              "Ajouter la conséquence : parce qu'il est conscient, le travail humain peut changer, s'améliorer et se transmettre ; en transformant la nature, l'homme se transforme.",
              "Conclusion : le propre du travail humain est d'être la réalisation d'un projet conscient, non le simple déploiement d'un instinct.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les activités suivantes selon la distinction d'Arendt entre travail, œuvre et action : 1) faire la vaisselle ; 2) construire une table ; 3) prendre la parole dans une assemblée ; 4) cultiver des légumes pour se nourrir ; 5) écrire un roman ; 6) organiser une pétition avec ses voisins.",
              hint: "Demandez-vous si l'activité entretient la vie (consommé aussitôt), fabrique un objet durable, ou se déroule directement entre les personnes.",
              solution: [
                "1) Faire la vaisselle : travail. L'activité entretient la vie quotidienne et doit être recommencée sans cesse.",
                "2) Construire une table : œuvre. On fabrique un objet durable qui s'ajoute au monde.",
                "3) Prendre la parole dans une assemblée : action. L'activité se déroule entre les hommes, dans l'espace public.",
                "4) Cultiver des légumes pour se nourrir : travail. Le produit est destiné à être consommé.",
                "5) Écrire un roman : œuvre. Le livre est un objet durable qui demeure après son auteur.",
                "6) Organiser une pétition : action. Il s'agit d'agir ensemble et de prendre position publiquement.",
                "Résultat : travail (1, 4), œuvre (2, 5), action (3, 6).",
              ],
            },
            {
              level: 2,
              statement: "Un élève écrit : « Le travail est toujours une contrainte, la preuve : si l'on gagnait au loto, on arrêterait de travailler. » Discutez cet argument en une quinzaine de lignes, en vous appuyant sur au moins deux références du cours.",
              hint: "L'argument confond-il le travail en général et une certaine forme de travail ? Que perdrait-on vraiment en cessant toute activité ?",
              solution: [
                "Reformuler l'argument : il part d'une hypothèse (on cesserait de travailler si l'on n'en avait plus besoin) pour conclure que le travail n'a aucune valeur en lui-même.",
                "Reconnaître sa part de vérité : beaucoup de travaux sont pénibles et subis ; Marx décrit le travail aliéné, où l'ouvrier ne se sent lui-même qu'en dehors du travail.",
                "Montrer sa limite : l'argument vise l'emploi contraint, pas le travail en général. Beaucoup de personnes qui n'ont plus besoin de revenu continuent à exercer une activité, bénévole, artistique ou créatrice.",
                "Mobiliser Hegel : en formant la chose, l'esclave se forme lui-même et prend conscience de sa valeur ; le travail a donc un effet formateur.",
                "Mobiliser Arendt : arrêter de travailler pour gagner sa vie ne signifie pas cesser d'œuvrer ou d'agir ; l'argument confond plusieurs activités.",
                "Conclusion : l'argument montre que certaines formes de travail sont des contraintes, mais il ne prouve pas que tout travail en soit une ; il invite plutôt à se demander à quelles conditions le travail peut être libérateur.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Le travail n'est-il qu'une contrainte ? » Proposez une problématique, puis un plan détaillé en trois parties, avec dans chaque partie un argument, un exemple et une référence.",
              hint: "Le mot « que » est décisif : il ne s'agit pas de nier la contrainte, mais de se demander si le travail s'y réduit.",
              solution: [
                "Problématique : le travail s'impose à nous par la nécessité de vivre et prend souvent la forme d'une peine ; mais s'il n'était que contrainte, comment comprendre qu'il soit aussi une source de fierté, de formation et de reconnaissance ? Le travail est-il ce qui nous asservit ou ce par quoi nous nous libérons ?",
                "Partie 1 : le travail est d'abord une contrainte. Argument : il est imposé par les besoins vitaux et s'accompagne d'effort et de fatigue. Exemple : les travaux agricoles ou les emplois pénibles. Référence : le récit de la Genèse qui fait du travail une peine, et la dévalorisation du travail servile chez Aristote.",
                "Partie 2 : mais le travail est aussi formateur et libérateur. Argument : en transformant la nature, l'homme développe ses facultés et prend conscience de lui-même. Exemple : l'apprentissage d'un métier qui rend autonome. Références : Hegel (le maître et l'esclave, 1807), Marx (l'architecte et l'abeille).",
                "Partie 3 : la valeur du travail dépend de ses conditions. Argument : la division extrême du travail et l'exploitation transforment une activité formatrice en aliénation. Exemple : le travail à la chaîne. Références : Marx (Manuscrits de 1844), Simone Weil (La Condition ouvrière), Arendt (travail, œuvre, action).",
                "Conclusion : le travail n'est pas seulement une contrainte ; il le devient lorsque ses conditions privent le travailleur du sens de ce qu'il fait. La vraie question est donc celle de l'organisation humaine du travail.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le travail.",
            statements: [
              { text: "Pour Marx, ce qui distingue l'architecte de l'abeille est la qualité du résultat.", true: false, why: "C'est le projet conscient : l'architecte a construit la cellule dans sa tête avant de la construire." },
              { text: "Chez Hegel, c'est l'esclave, et non le maître, qui se forme par le travail.", true: true, why: "En façonnant la chose, l'esclave se façonne lui-même, tandis que le maître devient dépendant." },
              { text: "Pour Arendt, écrire un livre relève de l'œuvre.", true: true, why: "L'œuvre fabrique des objets durables qui composent le monde commun." },
              { text: "L'aliénation désigne chez Marx le plaisir de travailler pour soi.", true: false, why: "C'est au contraire la dépossession : l'ouvrier ne possède ni son produit ni son activité." },
              { text: "Adam Smith illustre la division du travail par l'exemple de la manufacture d'épingles.", true: true, why: "C'est l'exemple célèbre de la Richesse des nations (1776)." },
              { text: "L'étymologie de travail par tripalium est certaine et admise par tous les linguistes.", true: false, why: "Elle est souvent citée, mais aujourd'hui discutée : mieux vaut la présenter avec prudence." },
            ],
          },
          quiz: [
            {
              q: "Selon Marx, qu'est-ce qui distingue le plus mauvais architecte de la meilleure abeille ?",
              options: ["La rapidité de son travail", "L'usage d'outils perfectionnés", "La régularité et la précision géométrique des formes qu'il parvient à produire", "Le fait d'avoir conçu son ouvrage avant de le réaliser"],
              answer: 3,
              why: "Le travail humain réalise un projet conscient : le résultat existe d'abord en idée.",
            },
            {
              q: "Dans la dialectique du maître et de l'esclave, qui devient dépendant ?",
              options: ["L'esclave, qui obéit aux ordres et n'a jamais rien à lui", "Le maître, qui jouit sans produire", "Les deux de manière égale", "Aucun des deux"],
              answer: 1,
              why: "Le maître ne fait que consommer ce que l'esclave produit ; l'esclave, lui, acquiert une maîtrise par le travail.",
            },
            {
              q: "Laquelle de ces activités relève de l'action selon Arendt ?",
              options: ["Préparer un repas", "Fabriquer un meuble destiné à durer plusieurs générations", "Débattre d'une loi dans une assemblée", "Réparer une machine"],
              answer: 2,
              why: "L'action se déroule directement entre les hommes, par la parole et l'engagement dans l'espace public.",
            },
            {
              q: "Que désigne le travail aliéné chez Marx ?",
              options: ["Un travail où l'ouvrier est dépossédé de son produit et de son activité", "Un travail effectué dans un pays étranger", "Un travail intellectuel et non manuel", "Un travail réalisé sans outil ni machine"],
              answer: 0,
              why: "Aliéner signifie rendre étranger : le travailleur devient étranger à ce qu'il produit et à lui-même.",
            },
            {
              q: "Quelle idée Kant défend-il dans ses Réflexions sur l'éducation ?",
              options: ["Le travail est indigne d'un homme libre", "L'homme est le seul animal qui doit travailler", "Le travail doit être réservé aux esclaves", "Les machines finiront par supprimer tout travail"],
              answer: 1,
              why: "La nature n'ayant pas tout donné à l'homme, c'est par le travail qu'il cultive ses talents.",
            },
          ],
          trap: "Réduire le travail à l'emploi salarié, ou au contraire en faire un pur épanouissement : la dissertation doit tenir ensemble la contrainte, la dimension formatrice et le risque d'aliénation.",
          method: "Pour tout sujet sur le travail, utilisez la distinction d'Arendt (travail, œuvre, action) comme outil d'analyse : elle permet de montrer que le mot travail recouvre des activités différentes et d'éviter un plan trop simple.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'la-technique',
          title: 'La technique : nous libère-t-elle ?',
          minutes: 30,
          objectives: [
            "Définir la technique et distinguer outil, machine et technologie.",
            "Expliquer le mythe de Prométhée et le projet cartésien de maîtrise de la nature.",
            "Analyser les critiques de la technique moderne (Heidegger, Jonas).",
            "Rédiger une explication de texte sur la question de la liberté et de la technique.",
          ],
          course: [
            {
              heading: "Définir la technique",
              paragraphs: [
                "La technique (du grec technè, art de faire) désigne l'ensemble des procédés réglés, transmissibles et efficaces par lesquels l'être humain produit un effet voulu, en utilisant des outils ou des machines. L'outil prolonge le corps et dépend de l'énergie de celui qui l'utilise (le marteau, l'aiguille) ; la machine fonctionne avec une énergie qui n'est pas celle de l'homme (le moulin, le moteur) et peut accomplir seule des opérations. Le mot technologie désigne au sens strict le discours sur les techniques, et au sens courant la technique moderne fondée sur les sciences.",
                "Platon rapporte dans le Protagoras le mythe de Prométhée. Épiméthée, chargé de distribuer les qualités aux animaux (griffes, fourrure, rapidité), a tout donné et oublié l'homme, resté nu et sans défense. Pour le sauver, Prométhée vole aux dieux le feu et le savoir technique. Le mythe signifie que l'homme compense par la technique un dénuement naturel : il n'a pas d'instinct spécialisé, mais il peut tout inventer.",
                "Aristote, dans Les Parties des animaux, répond à Anaxagore : ce n'est pas parce qu'il a des mains que l'homme est le plus intelligent des animaux, c'est parce qu'il est le plus intelligent qu'il a des mains. La main est l'outil des outils, capable de devenir griffe, pince ou marteau. Bergson, dans L'Évolution créatrice (1907), propose de nommer l'homme homo faber : l'intelligence est d'abord la faculté de fabriquer des objets artificiels, en particulier des outils à faire des outils.",
              ],
              box: { label: "Définition", text: "Technique : ensemble de procédés réglés et transmissibles pour produire un effet voulu. Outil : prolonge le corps, mû par l'énergie humaine. Machine : fonctionne avec une autre énergie. Technologie : technique moderne appuyée sur les sciences." },
            },
            {
              heading: "La technique comme libération",
              paragraphs: [
                "Au XVIIe siècle, Descartes, dans la sixième partie du Discours de la méthode (1637), annonce un projet nouveau : au lieu d'une philosophie seulement spéculative, une connaissance pratique de la nature (du feu, de l'eau, de l'air, des astres) qui nous permettrait de nous rendre « comme maîtres et possesseurs de la nature ». Le but est de jouir sans peine des fruits de la terre et surtout de conserver la santé.",
                "Ce projet s'est largement réalisé. La technique nous libère de nombreuses nécessités naturelles : la faim (agriculture, conservation des aliments), la maladie (vaccins, chirurgie), la distance (transports, télécommunications), les tâches pénibles (machines agricoles, appareils ménagers). En libérant du temps et des forces, elle rend possibles d'autres activités : l'étude, l'art, la vie politique.",
                "La technique élargit aussi le champ des possibles : elle ne fait pas seulement ce que nous voulions faire plus vite, elle nous permet de faire ce qui était impossible (voler, communiquer à distance, voir l'infiniment petit). En ce sens, elle est une condition de la liberté entendue comme pouvoir d'agir.",
              ],
              box: { label: "Repère", text: "Descartes, Discours de la méthode (1637), VIe partie : la connaissance de la nature doit nous rendre « comme maîtres et possesseurs de la nature ». Le « comme » signale une analogie : l'homme n'est pas le créateur de la nature." },
            },
            {
              heading: "La technique comme nouvelle dépendance",
              paragraphs: [
                "Rousseau, dans le Discours sur l'origine de l'inégalité (1755), remarque que les commodités inventées par les hommes finissent par devenir des besoins : on souffre de les perdre sans être plus heureux de les posséder. La technique crée des dépendances nouvelles ; qui sait encore vivre sans électricité ni téléphone ?",
                "Heidegger, dans La Question de la technique (1953), soutient que la technique moderne n'est pas un simple moyen neutre au service de fins humaines. Elle est une manière de dévoiler le monde qui le réduit à un fonds disponible, à une réserve d'énergie à exploiter : le fleuve n'est plus vu que comme fournisseur d'énergie pour la centrale. Il nomme Gestell (traduit par arraisonnement ou dispositif) ce mode de pensée qui somme toute chose, l'homme compris, d'être disponible.",
                "Hans Jonas, dans Le Principe responsabilité (1979), constate que la puissance technique moderne a des effets lointains, cumulatifs et parfois irréversibles (nucléaire, modification du climat, manipulations génétiques). L'éthique traditionnelle, pensée pour des actions proches dans le temps et l'espace, ne suffit plus. Il propose un nouvel impératif : agir de telle sorte que les effets de notre action soient compatibles avec la permanence d'une vie authentiquement humaine sur Terre, et une heuristique de la peur qui invite à envisager le pire pour agir avec prudence.",
              ],
              box: { label: "À retenir", text: "Rousseau : les commodités deviennent des besoins. Heidegger (1953) : la technique moderne réduit le monde à un fonds disponible. Jonas (1979) : notre puissance exige une éthique de la responsabilité envers les générations futures." },
            },
            {
              heading: "La technique est-elle neutre ?",
              paragraphs: [
                "On dit souvent qu'un objet technique n'est ni bon ni mauvais, et que tout dépend de l'usage : un couteau sert à couper le pain ou à blesser. Cette thèse de la neutralité a sa part de vérité, car la responsabilité morale revient bien à ceux qui utilisent la technique.",
                "Mais elle est insuffisante. Une technique transforme celui qui l'utilise et la société qui l'adopte : l'automobile a redessiné les villes, les réseaux sociaux modifient notre attention et nos échanges, les systèmes d'intelligence artificielle changent la manière dont nous cherchons l'information. Les techniques portent en elles des possibilités et des contraintes qui orientent nos choix avant même que nous les fassions.",
                "On peut donc répondre que la technique nous libère de la nécessité naturelle, mais qu'elle ne nous rend pas libres par elle-même : elle accroît notre puissance, pas notre sagesse. Elle devient libératrice lorsqu'elle est pensée, discutée et maîtrisée collectivement, ce qui fait de la technique une question morale et politique, et non seulement une affaire d'ingénieurs.",
              ],
            },
          ],
          keyPoints: [
            "Outil : prolonge le corps ; machine : fonctionne avec une autre énergie ; technologie : technique fondée sur les sciences.",
            "Mythe de Prométhée (Platon, Protagoras) : la technique compense le dénuement naturel de l'homme.",
            "Descartes (1637) : se rendre « comme maîtres et possesseurs de la nature ».",
            "Heidegger (1953) : la technique moderne réduit le monde à un fonds disponible.",
            "Jonas (1979) : une éthique de la responsabilité à l'égard des générations futures.",
            "La technique accroît notre puissance, pas notre sagesse : elle libère si elle est maîtrisée collectivement.",
          ],
          example: {
            statement: "Expliquez le sens du mythe de Prométhée, tel que Platon le rapporte dans le Protagoras, et montrez ce qu'il nous apprend sur le rapport de l'homme à la technique.",
            solution: [
              "Résumer le récit : Épiméthée distribue aux animaux des qualités qui leur permettent de survivre (griffes, fourrure, vitesse), mais il oublie l'homme, qui reste nu et désarmé.",
              "Relever le geste de Prométhée : il vole aux dieux le feu et le savoir technique pour les donner aux hommes.",
              "Dégager le sens : l'homme est naturellement démuni ; il n'a pas d'instinct spécialisé. La technique est sa manière propre de survivre.",
              "Tirer une conséquence : la technique n'est pas un ajout accessoire mais une nécessité vitale ; elle fait partie de la condition humaine.",
              "Nuancer : dans le mythe, le savoir technique ne suffit pas à faire vivre les hommes ensemble ; il leur faut aussi le sens de la justice et la pudeur, que Zeus leur donne ensuite.",
              "Conclusion : le mythe montre que la technique compense le dénuement naturel de l'homme, mais qu'elle doit être complétée par une sagesse politique pour être bénéfique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les objets suivants en outils ou machines, en justifiant : un marteau, une éolienne, une aiguille à coudre, un lave-linge, une pelle, une imprimante.",
              hint: "Demandez-vous quelle énergie fait fonctionner l'objet : celle de l'utilisateur, ou une autre ?",
              solution: [
                "Marteau : outil. Il prolonge le bras et fonctionne grâce à la force de celui qui frappe.",
                "Éolienne : machine. Elle utilise l'énergie du vent pour produire de l'électricité.",
                "Aiguille à coudre : outil. Elle est guidée et poussée par la main.",
                "Lave-linge : machine. Il fonctionne à l'électricité et effectue seul une série d'opérations.",
                "Pelle : outil. Elle dépend entièrement de la force de l'utilisateur.",
                "Imprimante : machine. Elle fonctionne à l'électricité et exécute des opérations programmées.",
                "Résultat : outils (marteau, aiguille, pelle) ; machines (éolienne, lave-linge, imprimante).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi l'affirmation « La technique est neutre : tout dépend de l'usage qu'on en fait » est à la fois juste et insuffisante. Appuyez-vous sur deux exemples.",
              hint: "La thèse de la neutralité regarde l'objet isolé ; demandez-vous ce que la technique change dans nos habitudes, nos villes, notre manière de penser.",
              solution: [
                "Ce qui est juste : la responsabilité morale revient aux utilisateurs. Un couteau peut servir à cuisiner ou à blesser ; l'objet ne décide pas.",
                "Ce qui est insuffisant : une technique transforme le monde dans lequel nous faisons nos choix. Elle ouvre certaines possibilités et en ferme d'autres.",
                "Premier exemple : l'automobile a modifié l'organisation des villes (routes, zones commerciales éloignées), si bien que, dans certains territoires, on ne peut plus vivre sans voiture.",
                "Second exemple : les réseaux sociaux, conçus pour retenir l'attention, modifient nos habitudes de lecture et d'échange, indépendamment de nos intentions.",
                "Référence possible : Heidegger, pour qui la technique moderne n'est pas un simple moyen, mais une manière de considérer le monde comme un fonds disponible.",
                "Conclusion : la technique n'est pas neutre au sens où elle serait sans effet sur nous ; elle demande donc une réflexion collective sur ses usages.",
              ],
            },
            {
              level: 3,
              statement: "Explication de texte (type bac). Texte d'entraînement, rédigé pour l'exercice : « Chaque invention se présente comme une délivrance : la machine nous épargne une peine, l'appareil nous fait gagner du temps. Mais le temps gagné ne nous est pas rendu ; il est aussitôt occupé par de nouvelles tâches que l'invention elle-même rend possibles. Celui qui écrivait une lettre par semaine reçoit désormais cent messages par jour. Ainsi la technique ne supprime pas la nécessité : elle la déplace. Nous ne sommes libres à l'égard de nos instruments que si nous savons décider de ce que nous voulons en faire, et cette décision, aucune machine ne peut la prendre à notre place. » Dégagez la thèse, le problème et la structure du texte, puis rédigez l'explication de la troisième et de la quatrième phrase.",
              hint: "Repérez le connecteur « Mais » et le connecteur « Ainsi » : ils découpent le texte en moments.",
              solution: [
                "Thèse : la technique ne nous libère pas par elle-même de la nécessité, elle la déplace ; la liberté dépend de notre capacité à décider des fins auxquelles nous soumettons nos instruments.",
                "Problème : la technique, qui se présente comme un moyen de gagner du temps et de s'épargner de la peine, accroît-elle vraiment notre liberté, ou nous soumet-elle à de nouvelles contraintes ?",
                "Structure : 1) première phrase, l'apparence de la délivrance ; 2) de « Mais » à « par jour », l'objection, illustrée par un exemple ; 3) de « Ainsi » à la fin, la conclusion et la condition d'une vraie liberté.",
                "Explication de la troisième phrase : l'exemple de la lettre hebdomadaire devenue cent messages quotidiens rend concrète l'idée précédente. La facilité d'envoi (moins de peine par message) a multiplié le nombre de messages, si bien que le temps consacré à la correspondance a augmenté. L'exemple montre que l'efficacité technique change aussi les attentes sociales : on attend désormais une réponse rapide.",
                "Explication de la quatrième phrase : le connecteur « Ainsi » introduit une conclusion générale. Déplacer la nécessité signifie que l'on échappe à une contrainte ancienne (écrire à la main, attendre le courrier) pour tomber sous une contrainte nouvelle (la sollicitation permanente). L'auteur ne nie pas le progrès technique, mais refuse de l'identifier à un progrès de la liberté.",
                "Mise en perspective : on peut rapprocher cette idée de Rousseau, pour qui les commodités deviennent des besoins, et l'opposer à l'optimisme de Descartes. La dernière phrase rappelle que la liberté relève de la volonté et du jugement, que la machine ne remplace pas.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces auteurs et leurs idées sur la technique dans l'ordre chronologique.",
            items: [
              "Platon rapporte le mythe de Prométhée dans le Protagoras (IVe siècle av. J.-C.).",
              "Aristote fait de la main l'outil des outils (IVe siècle av. J.-C.).",
              "Descartes veut nous rendre comme maîtres et possesseurs de la nature (1637).",
              "Rousseau observe que les commodités deviennent des besoins (1755).",
              "Bergson définit l'homme comme homo faber (1907).",
              "Heidegger publie La Question de la technique (1953).",
              "Jonas propose le principe responsabilité (1979).",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qui distingue une machine d'un outil ?",
              options: ["La machine est toujours plus grande", "La machine fonctionne avec une énergie qui n'est pas celle de l'utilisateur", "L'outil est fabriqué à la main", "La machine est toujours plus grande et plus coûteuse, et elle est réservée à l'industrie"],
              answer: 1,
              why: "L'outil prolonge le corps et dépend de sa force ; la machine utilise une autre énergie (vent, eau, électricité).",
            },
            {
              q: "Que signifie le mythe de Prométhée dans le Protagoras ?",
              options: ["Les dieux ont donné à l'homme des griffes et une fourrure", "La technique est un crime qu'il faut abandonner", "L'homme est naturellement le plus fort des animaux", "La technique compense le dénuement naturel de l'homme"],
              answer: 3,
              why: "Oublié par Épiméthée, l'homme survit grâce au feu et aux arts volés aux dieux par Prométhée.",
            },
            {
              q: "Dans quelle œuvre Descartes parle-t-il de nous rendre « comme maîtres et possesseurs de la nature » ?",
              options: ["Le Discours de la méthode", "Les Méditations métaphysiques", "Les Passions de l'âme", "Les Principes de la philosophie"],
              answer: 0,
              why: "C'est dans la sixième partie du Discours de la méthode, publié en 1637.",
            },
            {
              q: "Que reproche Heidegger à la technique moderne ?",
              options: ["D'être trop lente et coûteuse", "De réduire le monde à un fonds disponible, à exploiter", "D'être inutile à la science", "De ne concerner que les ingénieurs et d'échapper ainsi au débat public"],
              answer: 1,
              why: "Pour Heidegger, la technique moderne est une manière de dévoiler le monde comme réserve d'énergie et de ressources.",
            },
            {
              q: "Pourquoi Hans Jonas estime-t-il qu'une nouvelle éthique est nécessaire ?",
              options: ["Parce que la morale ancienne interdisait la technique", "Parce que les machines doivent avoir des droits", "Parce que la puissance technique a des effets lointains et parfois irréversibles", "Parce que la science a démontré que la morale est inutile"],
              answer: 2,
              why: "Nos actions engagent désormais l'avenir de l'humanité ; il faut une responsabilité envers les générations futures.",
            },
          ],
          trap: "Traiter le sujet comme un débat pour ou contre la technique, en alignant avantages et inconvénients : la question porte sur la liberté, qu'il faut définir (pouvoir d'agir, indépendance, capacité de choisir ses fins).",
          method: "Pour un sujet « La technique nous libère-t-elle ? », définissez d'abord ce dont elle pourrait nous libérer (la nécessité, l'effort, la maladie) puis ce à quoi elle pourrait nous soumettre : le plan naît de cette double question.",
        },
      ],
    },
    /* ==================================================================== */
    /* CONNAÎTRE : RAISON, SCIENCE, VÉRITÉ                                    */
    /* ==================================================================== */
    {
      id: 'connaitre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'la-raison',
          title: 'La raison : peut-on tout démontrer ?',
          minutes: 30,
          objectives: [
            "Définir la raison et la démonstration, et distinguer la validité d'un raisonnement de la vérité de sa conclusion.",
            "Expliquer pourquoi toute démonstration repose sur des principes indémontrés (Aristote, Pascal).",
            "Identifier ce qui échappe à la démonstration : les faits, les principes, les valeurs.",
            "Distinguer démontrer, prouver par l'expérience et argumenter.",
          ],
          course: [
            {
              heading: "La raison et la démonstration",
              paragraphs: [
                "La raison est d'abord la faculté de juger, c'est-à-dire de distinguer le vrai du faux et le bien du mal. Descartes ouvre le Discours de la méthode (1637) en affirmant que le bon sens, ou raison, est la chose du monde la mieux partagée : tous les hommes la possèdent, mais tous ne l'appliquent pas avec méthode. La raison est aussi la faculté de raisonner, c'est-à-dire d'enchaîner des propositions de façon ordonnée (le latin ratio signifie à la fois calcul et raison, le grec logos à la fois parole et raison).",
                "Le mot raison désigne enfin une cause ou une justification : avoir une raison d'agir, donner la raison d'un phénomène. Leibniz formule le principe de raison suffisante : rien n'arrive sans qu'il y ait une raison pour laquelle cela est ainsi plutôt qu'autrement. Exiger des raisons, c'est refuser de se contenter de l'opinion ou de l'autorité.",
                "Démontrer, c'est établir la vérité d'une proposition en la déduisant nécessairement d'autres propositions déjà admises, selon des règles logiques. Le modèle en est le syllogisme décrit par Aristote : « Tous les hommes sont mortels ; or Socrate est un homme ; donc Socrate est mortel. » Si les prémisses sont vraies et le raisonnement valide, la conclusion est nécessairement vraie.",
              ],
              box: { label: "Définition", text: "Démontrer : établir la vérité d'une proposition en la déduisant nécessairement de propositions admises (prémisses), selon des règles logiques. Un raisonnement valide dont les prémisses sont vraies donne une conclusion vraie." },
            },
            {
              heading: "Validité et vérité",
              paragraphs: [
                "Il faut distinguer la validité d'un raisonnement, qui concerne sa forme, et la vérité de ses propositions, qui concerne leur contenu. Le raisonnement « Tous les oiseaux volent ; or l'autruche est un oiseau ; donc l'autruche vole » est valide (la conclusion découle bien des prémisses) mais sa conclusion est fausse, parce que la première prémisse est fausse.",
                "Inversement, un raisonnement peut aboutir à une conclusion vraie tout en étant invalide : « Certains animaux nagent ; or le dauphin est un animal ; donc le dauphin nage. » La conclusion est vraie, mais elle ne découle pas des prémisses : avec la même forme, on pourrait conclure que la girafe nage. La démonstration garantit seulement que la vérité se transmet des prémisses à la conclusion ; elle ne crée pas de vérité à partir de rien.",
                "Cette distinction montre déjà une limite : une démonstration ne vaut que ce que valent ses points de départ. Pour démontrer, il faut donc se demander d'où viennent les prémisses, et si elles peuvent elles-mêmes être démontrées.",
              ],
              box: { label: "Règle", text: "Validité : la conclusion découle nécessairement des prémisses (question de forme). Vérité : la proposition est conforme à ce qui est (question de contenu). Un raisonnement valide à partir de prémisses fausses peut aboutir à une conclusion fausse." },
            },
            {
              heading: "On ne peut pas tout démontrer",
              paragraphs: [
                "Aristote, dans les Seconds Analytiques, montre que si toute proposition devait être démontrée, il faudrait démontrer les prémisses, puis les prémisses des prémisses, et ainsi de suite à l'infini : aucune démonstration ne pourrait jamais commencer. Il faut donc des principes premiers indémontrables, connus autrement que par démonstration, comme le principe de non-contradiction (une chose ne peut pas à la fois être et ne pas être, sous le même rapport).",
                "Pascal, dans De l'esprit géométrique, décrit la méthode idéale qui consisterait à définir tous les termes et à prouver toutes les propositions ; mais il la juge impossible, car on arrive à des mots primitifs qu'on ne peut plus définir (espace, temps, mouvement, nombre) et à des principes qu'on ne peut plus prouver. La géométrie part de ce qui est clair à tous. Dans les Pensées, il ajoute que nous connaissons les premiers principes par le cœur, c'est-à-dire par une intuition immédiate, et non par le raisonnement.",
                "L'histoire des mathématiques a précisé cette limite. Au XIXe siècle, Lobatchevski, Bolyai puis Riemann construisent des géométries cohérentes en remplaçant le postulat des parallèles d'Euclide : les axiomes apparaissent alors comme des hypothèses de départ choisies, non comme des évidences absolues. En 1931, Kurt Gödel démontre que, dans tout système formel cohérent assez riche pour contenir l'arithmétique, il existe des énoncés que l'on ne peut ni démontrer ni réfuter à l'intérieur de ce système.",
              ],
              box: { label: "À retenir", text: "Toute démonstration repose sur des principes indémontrés (Aristote). Il est impossible de tout définir et de tout prouver (Pascal). Les axiomes sont des points de départ choisis (géométries non euclidiennes). Gödel (1931) : certains énoncés sont indécidables dans un système donné." },
            },
            {
              heading: "Ce qui échappe à la démonstration",
              paragraphs: [
                "Les faits ne se démontrent pas, ils se constatent ou se prouvent par l'expérience. On ne démontre pas que l'eau pure bout à 100 °C sous la pression atmosphérique normale : on le mesure. Les sciences expérimentales combinent la démonstration (le calcul) et la preuve expérimentale, qui reste toujours liée à l'observation.",
                "Kant, dans la Critique de la raison pure (1781), montre que la raison, lorsqu'elle prétend dépasser toute expérience possible pour démontrer l'existence de Dieu, l'immortalité de l'âme ou les limites du monde, tombe dans des contradictions : elle peut démontrer avec la même force une thèse et son contraire (les antinomies). Certaines questions dépassent ce que la raison peut démontrer, même si elle ne cesse de se les poser.",
                "Enfin, dans le domaine des valeurs et de l'action (morale, politique, droit), on ne démontre pas : on argumente. Argumenter, c'est donner des raisons pour convaincre, sans atteindre la nécessité d'une démonstration. Cela ne signifie pas que tout se vaut : il existe des arguments plus solides que d'autres, et le refus de tout démontrer n'est pas un renoncement à la raison, mais la reconnaissance de ses usages différents.",
              ],
            },
          ],
          keyPoints: [
            "Raison : faculté de juger et de raisonner ; aussi cause ou justification (principe de raison suffisante).",
            "Démontrer : déduire nécessairement une conclusion de prémisses admises.",
            "Valide (forme) n'est pas vrai (contenu) : une démonstration ne vaut que par ses prémisses.",
            "Aristote et Pascal : impossible de tout démontrer, il faut des principes premiers.",
            "Gödel (1931) : dans un système formel assez riche, certains énoncés sont indécidables.",
            "Les faits se prouvent par l'expérience, les valeurs se défendent par l'argumentation.",
          ],
          example: {
            statement: "Le raisonnement suivant est-il valide ? Sa conclusion est-elle vraie ? « Tous les métaux conduisent l'électricité ; or le cuivre est un métal ; donc le cuivre conduit l'électricité. » Comparez avec : « Tous les poissons vivent dans l'eau ; or la baleine vit dans l'eau ; donc la baleine est un poisson. »",
            solution: [
              "Premier raisonnement : la forme est celle du syllogisme classique (tous les A sont B ; C est un A ; donc C est B). Elle est valide.",
              "Les prémisses sont vraies (les métaux conduisent l'électricité, le cuivre est un métal), donc la conclusion est vraie : c'est une démonstration correcte.",
              "Second raisonnement : la forme est différente (tous les A sont B ; C est B ; donc C est A). Elle n'est pas valide : être B ne suffit pas pour être A.",
              "Vérification par un contre-exemple de même forme : « Tous les chats sont mortels ; or Socrate est mortel ; donc Socrate est un chat » est absurde.",
              "Contenu : la conclusion est d'ailleurs fausse, puisque la baleine est un mammifère.",
              "Conclusion : le premier raisonnement est valide avec une conclusion vraie ; le second est invalide, et sa conclusion est fausse. La validité dépend de la forme, non du contenu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque énoncé, indiquez s'il se démontre, se prouve par l'expérience ou se défend par l'argumentation : 1) La somme des angles d'un triangle vaut 180° en géométrie euclidienne. 2) Le fer rouille au contact de l'eau et de l'air. 3) La peine de mort doit être abolie. 4) Si x + 3 = 7, alors x = 4. 5) La Terre tourne autour du Soleil.",
              hint: "Demandez-vous si la vérité de l'énoncé se tire d'axiomes et de règles, de l'observation, ou d'un jugement de valeur.",
              solution: [
                "1) Se démontre : c'est un théorème déduit des axiomes de la géométrie euclidienne.",
                "2) Se prouve par l'expérience : on l'observe et on le vérifie en laboratoire.",
                "3) Se défend par l'argumentation : c'est un jugement de valeur (moral et politique) ; on donne des raisons, mais on ne démontre pas.",
                "4) Se démontre : on soustrait 3 aux deux membres, x = 7 - 3 = 4. C'est une déduction nécessaire.",
                "5) Se prouve par l'expérience, appuyée sur des calculs : observations astronomiques, mesures, et théorie qui les explique.",
                "Résultat : démonstration (1, 4), preuve expérimentale (2, 5), argumentation (3).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en une quinzaine de lignes pourquoi, selon Aristote et Pascal, il est impossible de tout démontrer. Montrez ensuite pourquoi cela ne rend pas les démonstrations douteuses.",
              hint: "Imaginez que l'on exige la démonstration de chaque prémisse : que se passe-t-il ? Puis demandez-vous comment nous connaissons les principes.",
              solution: [
                "Point de départ : une démonstration déduit une conclusion de prémisses. Si celles-ci devaient être démontrées à leur tour, il faudrait d'autres prémisses, et ainsi de suite.",
                "Aristote : cette régression à l'infini rendrait toute démonstration impossible ; il faut donc des principes premiers indémontrables, comme le principe de non-contradiction.",
                "Pascal : la méthode parfaite consisterait à tout définir et à tout prouver, mais on rencontre des mots primitifs (espace, temps, nombre) et des principes qu'on ne peut plus prouver.",
                "Pourquoi cela ne rend pas les démonstrations douteuses : les principes sont connus autrement, par une évidence ou une intuition (le cœur, chez Pascal). Ils ne sont pas arbitraires.",
                "Nuance moderne : les géométries non euclidiennes montrent que certains axiomes sont des choix ; mais, ces choix faits, la démonstration reste rigoureuse à l'intérieur du système.",
                "Conclusion : l'impossibilité de tout démontrer n'est pas un échec de la raison, mais la condition même de toute démonstration.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Peut-on tout démontrer ? » Rédigez l'introduction et un plan détaillé en trois parties, avec une référence et un exemple dans chaque partie.",
              hint: "Interrogez les deux sens de « peut-on » : en est-on capable, et a-t-on raison de vouloir tout démontrer ?",
              solution: [
                "Introduction : démontrer, c'est établir une vérité de façon nécessaire, par déduction à partir de prémisses. La démonstration semble être la forme la plus haute de la connaissance, car elle ne laisse aucune place au doute. Mais si tout devait être démontré, sur quoi reposeraient les premières démonstrations ? Et peut-on démontrer ce qui relève des faits ou des valeurs ? Le problème est de savoir si la démonstration peut s'étendre à tout le savoir, ou si elle trouve des limites qui obligent la raison à d'autres usages.",
                "Annonce : nous verrons que la démonstration est le modèle de la connaissance rationnelle, puis qu'elle repose nécessairement sur de l'indémontrable, avant de montrer que bien des vérités relèvent d'autres formes de justification.",
                "Partie 1 : la démonstration, modèle de la connaissance certaine. Argument : elle transmet nécessairement la vérité des prémisses à la conclusion. Exemple : le théorème de Pythagore, démontré une fois pour toutes. Référence : le syllogisme d'Aristote, la méthode de Descartes.",
                "Partie 2 : mais toute démonstration repose sur des principes indémontrés. Argument : la régression à l'infini interdit de tout démontrer. Exemple : les axiomes d'Euclide et les géométries non euclidiennes. Références : Aristote (Seconds Analytiques), Pascal (De l'esprit géométrique), Gödel (1931).",
                "Partie 3 : ce qui ne se démontre pas n'est pas pour autant irrationnel. Argument : les faits se prouvent par l'expérience, les valeurs se défendent par l'argumentation. Exemple : l'abolition de la peine de mort s'argumente, elle ne se démontre pas. Références : Kant (les antinomies de la raison), Pascal (le cœur connaît les principes).",
                "Conclusion : on ne peut pas tout démontrer, et il ne faut pas le vouloir ; la raison exige de savoir quel type de justification convient à chaque domaine.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Raison et démonstration.",
            statements: [
              { text: "Un raisonnement valide a toujours une conclusion vraie.", true: false, why: "Seulement si ses prémisses sont vraies : la validité concerne la forme, non le contenu." },
              { text: "Pour Aristote, toute démonstration repose sur des principes indémontrables.", true: true, why: "Sinon on remonterait à l'infini et aucune démonstration ne commencerait." },
              { text: "Pascal pense qu'il est possible de tout définir et de tout prouver.", true: false, why: "Il décrit cette méthode comme idéale mais impossible : il y a des mots primitifs et des principes premiers." },
              { text: "Les géométries non euclidiennes sont cohérentes bien qu'elles modifient un postulat d'Euclide.", true: true, why: "Elles montrent que les axiomes sont des hypothèses de départ, non des évidences absolues." },
              { text: "On démontre qu'un métal se dilate quand on le chauffe.", true: false, why: "C'est un fait constaté et prouvé par l'expérience, non déduit d'axiomes." },
              { text: "Ne pas pouvoir démontrer une valeur morale ne signifie pas que tous les avis se valent.", true: true, why: "On peut argumenter, et certaines raisons sont plus solides que d'autres." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que le principe de raison suffisante, formulé par Leibniz ?",
              options: ["Il suffit d'avoir raison pour convaincre", "La raison suffit à tout connaître", "Rien n'arrive sans une raison pour laquelle c'est ainsi plutôt qu'autrement", "Une seule raison suffit pour juger"],
              answer: 2,
              why: "Le principe affirme que tout ce qui est ou arrive a une raison, même si nous ne la connaissons pas toujours.",
            },
            {
              q: "Le raisonnement « Tous les oiseaux volent ; l'autruche est un oiseau ; donc l'autruche vole » est :",
              options: ["Valide, mais sa conclusion est fausse", "Invalide, et sa conclusion est vraie", "Valide, et sa conclusion est vraie", "Invalide, et sa conclusion est fausse"],
              answer: 0,
              why: "La forme est correcte, mais la première prémisse est fausse, donc la conclusion l'est aussi.",
            },
            {
              q: "Pourquoi, selon Aristote, ne peut-on pas tout démontrer ?",
              options: ["Parce que les hommes manquent de temps", "Parce que la logique est toujours incertaine et que ses règles changent selon les époques", "Parce que seuls les dieux démontrent", "Parce qu'il faudrait remonter à l'infini de prémisse en prémisse"],
              answer: 3,
              why: "La régression à l'infini empêcherait toute démonstration de commencer : il faut des principes premiers.",
            },
            {
              q: "Qu'ont montré les géométries non euclidiennes au XIXe siècle ?",
              options: ["Que la géométrie d'Euclide était fausse et qu'il fallait cesser de l'enseigner dans les écoles", "Que les axiomes sont des points de départ choisis, et non des évidences absolues", "Que l'on ne peut rien démontrer en mathématiques", "Que l'espace réel n'a aucune forme"],
              answer: 1,
              why: "En changeant le postulat des parallèles, on obtient d'autres géométries cohérentes ; la géométrie euclidienne reste valable dans son domaine.",
            },
            {
              q: "Dans quel domaine argumente-t-on plutôt que l'on ne démontre ?",
              options: ["En arithmétique", "En logique formelle et dans le calcul des propositions", "En morale et en politique", "En géométrie"],
              answer: 2,
              why: "Les questions de valeur ne se tranchent pas par déduction nécessaire, mais par des raisons plus ou moins solides.",
            },
          ],
          trap: "Confondre démontrer et montrer, ou démontrer et prouver par l'expérience ; et croire qu'une conclusion fausse prouve forcément un raisonnement invalide, alors qu'elle peut venir d'une prémisse fausse.",
          method: "Dans un sujet sur la démonstration, construisez toujours un exemple de syllogisme valide et un exemple invalide au brouillon : ils vous obligent à préciser ce que vous entendez par démontrer et nourrissent l'introduction.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'la-science',
          title: 'La science : que vaut une connaissance scientifique ?',
          minutes: 35,
          objectives: [
            "Distinguer la connaissance scientifique de l'opinion (Platon, Bachelard).",
            "Décrire la démarche expérimentale et le rôle de l'hypothèse.",
            "Expliquer le problème de l'induction (Hume) et le critère de falsifiabilité (Popper).",
            "Évaluer la valeur et les limites d'une connaissance scientifique, en évitant le dogmatisme comme le relativisme.",
          ],
          course: [
            {
              heading: "La science contre l'opinion",
              paragraphs: [
                "Platon oppose l'opinion (doxa), qui peut être vraie par hasard mais ne sait pas rendre raison d'elle-même, et la science (épistémè), connaissance fondée sur des raisons. Une opinion vraie ressemble à un chemin trouvé par chance : on ne sait pas pourquoi il mène au but. La science, elle, sait pourquoi ce qu'elle affirme est vrai.",
                "Gaston Bachelard, dans La Formation de l'esprit scientifique (1938), radicalise cette opposition : l'opinion pense mal, elle traduit des besoins en connaissances. La science ne prolonge pas le sens commun, elle se construit contre lui, en surmontant des obstacles épistémologiques (la première impression, les images familières, la généralisation trop rapide). Pour l'esprit scientifique, rien ne va de soi, rien n'est donné, tout est construit.",
                "Une connaissance scientifique se caractérise par sa méthode (des procédures explicites), son objectivité (elle ne dépend pas des préférences du chercheur), son universalité (elle vaut pour tous) et sa vérifiabilité (elle peut être contrôlée par d'autres). Galilée, dans L'Essayeur (1623), affirme que le livre de la nature est écrit en langue mathématique : la science moderne mesure et calcule.",
              ],
              box: { label: "Repère", text: "Bachelard (1938) : la science se construit contre l'opinion en surmontant des obstacles épistémologiques. Le fait scientifique n'est pas donné, il est construit par la théorie et la mesure." },
            },
            {
              heading: "La démarche expérimentale",
              paragraphs: [
                "Claude Bernard, dans l'Introduction à l'étude de la médecine expérimentale (1865), décrit la démarche des sciences expérimentales. Une observation fait naître une question ; le savant imagine une hypothèse, c'est-à-dire une explication possible ; il en déduit des conséquences vérifiables ; il conçoit une expérience pour les tester ; il interprète les résultats et conclut, en confirmant ou en rejetant l'hypothèse.",
                "L'hypothèse est décisive : sans idée préalable, l'expérience ne dit rien. Mais Claude Bernard insiste aussi sur le doute : le savant doit soumettre son idée à l'expérience et être prêt à l'abandonner si les faits la contredisent. L'expérience n'est pas une simple observation passive ; c'est une question posée à la nature dans des conditions contrôlées.",
                "Un exemple célèbre est celui d'Ignace Semmelweis, médecin à l'hôpital général de Vienne dans les années 1840. Il constate que la fièvre puerpérale tue beaucoup plus de femmes dans le service où accouchent les étudiants en médecine, qui pratiquent aussi des dissections, que dans celui des sages-femmes. Il fait l'hypothèse d'une contamination par des matières venues des cadavres, impose le lavage des mains dans une solution chlorée, et la mortalité chute fortement.",
              ],
              box: { label: "À retenir", text: "Démarche expérimentale : observation, question, hypothèse, déduction des conséquences, expérience, interprétation, conclusion. L'hypothèse guide l'expérience ; l'expérience juge l'hypothèse." },
            },
            {
              heading: "Le problème de l'induction et le critère de Popper",
              paragraphs: [
                "Une loi scientifique énonce une régularité générale (« tous les métaux se dilatent quand on les chauffe ») à partir d'un nombre limité d'observations. Ce passage du particulier au général s'appelle l'induction. David Hume, dans l'Enquête sur l'entendement humain (1748), montre qu'il n'est pas logiquement nécessaire : que le soleil se soit toujours levé ne démontre pas qu'il se lèvera demain. Nous inférons par habitude, non par démonstration.",
                "L'exemple classique est celui des cygnes : des milliers d'observations de cygnes blancs ne prouvent pas que tous les cygnes sont blancs, et des cygnes noirs ont effectivement été observés par des Européens en Australie à la fin du XVIIe siècle. Une seule observation contraire suffit à réfuter une généralisation, alors qu'aucun nombre d'observations favorables ne suffit à la vérifier définitivement.",
                "Karl Popper, dans La Logique de la découverte scientifique (1934), tire la leçon de cette asymétrie. Une théorie est scientifique si elle est falsifiable (réfutable), c'est-à-dire si elle prend le risque d'être contredite par une expérience possible. La relativité générale d'Einstein prédisait une déviation précise de la lumière des étoiles par le Soleil : l'observation de l'éclipse de 1919 pouvait la réfuter, elle l'a corroborée. À l'inverse, Popper juge non scientifiques des théories qui expliquent tout et ne peuvent jamais être prises en défaut, comme il le reproche à la psychanalyse.",
              ],
              box: { label: "Définition", text: "Falsifiabilité (Popper) : une théorie est scientifique si une expérience possible pourrait la réfuter. Une théorie qui résiste aux tests est corroborée, jamais définitivement vérifiée." },
            },
            {
              heading: "Que vaut alors la connaissance scientifique ?",
              paragraphs: [
                "Thomas Kuhn, dans La Structure des révolutions scientifiques (1962), montre que la science progresse aussi par ruptures. Une communauté de savants travaille dans un paradigme (un ensemble de théories, de méthodes et d'exemples admis) ; lorsque les anomalies s'accumulent, une révolution scientifique impose un nouveau paradigme. Le passage du géocentrisme à l'héliocentrisme (Copernic, 1543) ou de la mécanique de Newton à la relativité d'Einstein en sont des exemples.",
                "Faut-il en conclure que la science ne vaut pas plus qu'une opinion ? Non. Si ses théories sont provisoires, c'est parce qu'elle soumet ses affirmations à des tests et corrige ses erreurs ; c'est justement ce qui fait sa supériorité sur l'opinion. Les anciennes théories ne sont d'ailleurs pas toujours effacées : la mécanique de Newton reste exacte dans son domaine de validité, aux vitesses faibles devant celle de la lumière.",
                "Il faut aussi éviter l'excès inverse, le scientisme, qui prétend que la science peut répondre à toutes les questions. La science dit ce qui est et ce qui est possible, non ce qui doit être : elle peut nous apprendre comment fonctionne un vaccin ou un réacteur nucléaire, pas décider seule de la manière juste de s'en servir. La valeur de la connaissance scientifique est donc grande, mais elle est celle d'un savoir rigoureux, révisable et limité à son domaine.",
              ],
            },
          ],
          keyPoints: [
            "Platon : l'opinion ne sait pas rendre raison d'elle-même, la science le peut.",
            "Bachelard (1938) : la science se construit contre l'opinion ; rien n'est donné, tout est construit.",
            "Démarche expérimentale (Claude Bernard, 1865) : l'hypothèse guide l'expérience, l'expérience juge l'hypothèse.",
            "Hume (1748) : l'induction n'est pas logiquement nécessaire.",
            "Popper (1934) : une théorie scientifique est falsifiable ; elle est corroborée, jamais vérifiée définitivement.",
            "Kuhn (1962) : paradigmes et révolutions scientifiques ; une science révisable n'est pas une opinion.",
          ],
          example: {
            statement: "La phrase « Tous les cygnes sont blancs » est-elle scientifique selon Popper ? Que se passe-t-il si l'on observe un cygne noir ?",
            solution: [
              "Rappeler le critère : selon Popper, une théorie est scientifique si elle est falsifiable, c'est-à-dire si une observation possible pourrait la contredire.",
              "Appliquer : on peut imaginer l'observation d'un cygne qui ne serait pas blanc. L'énoncé prend donc un risque : il est falsifiable, donc scientifique au sens de Popper.",
              "Remarquer l'asymétrie : mille cygnes blancs observés ne vérifient pas l'énoncé de façon définitive, car il porte sur tous les cygnes, y compris ceux qu'on n'a pas vus.",
              "Observation d'un cygne noir : une seule observation contraire suffit à réfuter l'énoncé général, par un raisonnement logiquement valide.",
              "Conclusion : l'énoncé était scientifique (falsifiable), et il a été réfuté ; c'est précisément ainsi que la science progresse, en éliminant les hypothèses fausses.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Selon le critère de Popper, indiquez si chaque énoncé est falsifiable, en justifiant : 1) « Demain, il pleuvra ou il ne pleuvra pas. » 2) « Tous les métaux se dilatent quand on les chauffe. » 3) « Tout ce qui arrive était écrit d'avance par le destin. » 4) « L'eau pure bout à 100 °C sous la pression atmosphérique normale. »",
              hint: "Cherchez pour chaque énoncé une observation possible qui le contredirait. Si aucune n'est concevable, il n'est pas falsifiable.",
              solution: [
                "1) Non falsifiable : quoi qu'il arrive, l'énoncé est vrai. Il ne dit rien sur le monde (c'est une tautologie).",
                "2) Falsifiable : on peut concevoir un métal qui ne se dilaterait pas en étant chauffé ; l'énoncé prend un risque.",
                "3) Non falsifiable : n'importe quel événement peut être interprété comme écrit d'avance ; aucune observation ne peut le contredire.",
                "4) Falsifiable : une mesure précise pourrait montrer une autre température d'ébullition dans ces conditions.",
                "Résultat : énoncés falsifiables (2, 4) ; non falsifiables (1, 3).",
              ],
            },
            {
              level: 2,
              statement: "Dans les années 1840, à l'hôpital général de Vienne, le médecin Ignace Semmelweis constate que la fièvre puerpérale tue beaucoup plus de femmes dans le service où exercent les étudiants en médecine, qui pratiquent aussi des dissections, que dans le service des sages-femmes. Il suppose qu'une matière venue des cadavres est transportée par les mains des étudiants. Il impose alors le lavage des mains dans une solution chlorée avant les examens, et la mortalité baisse fortement. Identifiez dans ce récit chaque étape de la démarche expérimentale.",
              hint: "Reprenez la suite : observation, question, hypothèse, conséquence à tester, expérience, résultat, conclusion.",
              solution: [
                "Observation : la mortalité est plus élevée dans le service des étudiants que dans celui des sages-femmes.",
                "Question : qu'est-ce qui explique cette différence entre les deux services ?",
                "Hypothèse : une matière issue des cadavres, transportée par les mains des étudiants après les dissections, provoque la maladie.",
                "Conséquence déduite : si l'hypothèse est juste, supprimer cette matière des mains doit faire baisser la mortalité.",
                "Expérience : le lavage des mains dans une solution chlorée est imposé avant les examens.",
                "Résultat et conclusion : la mortalité chute fortement, ce qui corrobore l'hypothèse. Au sens de Popper, elle n'est pas prouvée définitivement, mais elle a résisté à un test qui aurait pu la réfuter.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « La science peut-elle tout expliquer ? » Proposez une problématique et un plan détaillé en trois parties, chaque partie comportant un argument, un exemple et une référence.",
              hint: "Distinguez ce que la science explique (les causes, les lois) et ce qui pourrait lui échapper : les fins, les valeurs, le vécu, ses propres fondements.",
              solution: [
                "Problématique : la science a étendu ses explications à des domaines toujours plus vastes, de la matière au vivant et à la société. Mais expliquer, c'est rendre raison par des causes et des lois ; tout se laisse-t-il ramener à des causes ? Le problème est de savoir si les limites actuelles de la science sont provisoires ou si certaines réalités échappent par principe à l'explication scientifique.",
                "Partie 1 : la science étend sans cesse son pouvoir d'explication. Argument : elle a expliqué des phénomènes autrefois attribués aux dieux ou au hasard. Exemple : la foudre, les maladies infectieuses (Semmelweis, puis Pasteur). Référence : Galilée (la nature écrite en langue mathématique), Bachelard (la science contre l'opinion).",
                "Partie 2 : mais ses explications sont toujours provisoires et limitées par sa méthode. Argument : une théorie n'est jamais vérifiée définitivement ; elle peut être remplacée. Exemple : la mécanique de Newton prolongée par la relativité. Références : Hume (problème de l'induction), Popper (falsifiabilité), Kuhn (révolutions scientifiques).",
                "Partie 3 : certaines questions ne relèvent pas de l'explication scientifique. Argument : la science dit ce qui est, non ce qui doit être ; elle explique les causes, non le sens. Exemple : la science explique la fission nucléaire, mais ne décide pas s'il est juste de l'utiliser comme arme. Référence : critique du scientisme ; distinction entre expliquer et comprendre.",
                "Conclusion : la science peut expliquer tout ce qui se laisse ramener à des causes observables et mesurables, et ce domaine s'étend ; mais elle ne peut répondre seule aux questions de valeur et de sens.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la démarche expérimentale.",
            items: [
              "Observer un phénomène",
              "Formuler une question",
              "Proposer une hypothèse explicative",
              "Déduire une conséquence vérifiable",
              "Réaliser une expérience contrôlée",
              "Interpréter les résultats",
              "Conclure : l'hypothèse est corroborée ou réfutée",
            ],
          },
          quiz: [
            {
              q: "Que signifie, chez Bachelard, l'expression « obstacle épistémologique » ?",
              options: ["Un instrument de mesure défectueux", "Un manque de crédits pour la recherche", "Une habitude de pensée qui empêche la connaissance scientifique de se constituer", "Une loi votée par l'État pour interdire certaines expériences jugées dangereuses ou immorales"],
              answer: 2,
              why: "Les obstacles sont internes à l'esprit : première impression, images familières, généralisation hâtive.",
            },
            {
              q: "Pourquoi l'induction pose-t-elle problème selon Hume ?",
              options: ["Parce que les observations sont toujours fausses", "Parce que la généralisation à partir de cas observés n'est pas logiquement nécessaire", "Parce que les mathématiques ne s'appliquent pas à la nature et que toute mesure est donc impossible", "Parce que la nature change à chaque instant"],
              answer: 1,
              why: "Que le soleil se soit toujours levé ne démontre pas qu'il se lèvera demain : nous concluons par habitude.",
            },
            {
              q: "Selon Popper, une théorie est scientifique si :",
              options: ["Elle a été vérifiée par un grand nombre d'expériences", "Elle explique absolument tous les faits possibles", "Elle est admise par la majorité des savants", "Une observation possible pourrait la réfuter"],
              answer: 3,
              why: "La falsifiabilité est le critère de démarcation ; une théorie qui explique tout ne prend aucun risque.",
            },
            {
              q: "Qu'est-ce qu'un paradigme selon Kuhn ?",
              options: ["Un ensemble de théories, de méthodes et d'exemples partagés par une communauté de savants", "Une expérience décisive qui prouve une théorie", "Une erreur scientifique célèbre", "Un instrument d'observation"],
              answer: 0,
              why: "La science normale travaille dans un paradigme, jusqu'à ce qu'une révolution en impose un nouveau.",
            },
            {
              q: "Qu'est-ce que le scientisme ?",
              options: ["Le refus de toute science", "La croyance que la science peut répondre à toutes les questions, y compris de valeur", "L'histoire des sciences", "La méthode expérimentale décrite par Claude Bernard dans son Introduction à l'étude de la médecine expérimentale"],
              answer: 1,
              why: "Le scientisme oublie que la science dit ce qui est, non ce qui doit être.",
            },
          ],
          trap: "Conclure du caractère provisoire des théories scientifiques que la science « n'est qu'une opinion parmi d'autres » : la révisabilité est au contraire la marque de sa rigueur.",
          method: "Retenez trois exemples précis et datés (Semmelweis dans les années 1840, l'éclipse de 1919, la révolution copernicienne de 1543) : ils permettent d'illustrer la démarche expérimentale, la falsifiabilité et les révolutions scientifiques.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'la-verite',
          title: 'La vérité : existe-t-il des vérités définitives ?',
          minutes: 30,
          objectives: [
            "Définir la vérité et la distinguer de la réalité, de la certitude et de l'opinion.",
            "Distinguer les critères de la vérité : correspondance, évidence, cohérence, efficacité.",
            "Distinguer vérités de raison et vérités de fait (Leibniz), et situer les vérités scientifiques.",
            "Discuter le relativisme (Protagoras, Nietzsche) et ses limites.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la vérité ?",
              paragraphs: [
                "La vérité est une propriété des jugements, non des choses. Une chose est réelle ou non ; c'est ce que nous en disons qui est vrai ou faux. « Il pleut à Lyon » est vrai s'il pleut effectivement à Lyon. La définition classique, formulée au Moyen Âge et reprise par Thomas d'Aquin, fait de la vérité l'adéquation de l'intellect et de la chose : un jugement est vrai quand il est conforme à ce qui est.",
                "Il faut distinguer la vérité de la certitude, qui est un état subjectif : on peut être certain et se tromper, comme on peut dire vrai sans en être sûr. Il faut aussi la distinguer de l'opinion, qui peut être vraie par hasard mais ne sait pas justifier ce qu'elle affirme, et de la sincérité, qui concerne l'accord entre ce que l'on dit et ce que l'on pense.",
                "La définition par la correspondance pose une difficulté : comment comparer notre jugement à la réalité, alors que nous n'accédons à celle-ci que par nos perceptions et nos jugements ? D'où la recherche de critères qui permettent de reconnaître le vrai.",
              ],
              box: { label: "Définition", text: "Vérité : propriété d'un jugement conforme à ce qui est (adéquation de l'intellect et de la chose). À distinguer de la réalité (ce qui existe), de la certitude (état d'esprit) et de la sincérité (accord entre ce qu'on dit et ce qu'on pense)." },
            },
            {
              heading: "Les critères du vrai",
              paragraphs: [
                "Pour Descartes, le critère est l'évidence : est vrai ce que l'esprit conçoit clairement et distinctement, sans aucune occasion de le mettre en doute. Le doute méthodique conduit, dans le Discours de la méthode (1637) puis les Méditations métaphysiques (1641), à une première vérité indubitable : je pense, donc je suis. Spinoza, dans l'Éthique (1677), affirme de même que le vrai est la norme de lui-même et du faux : qui a une idée vraie sait en même temps qu'il a une idée vraie.",
                "Un autre critère est la cohérence : un ensemble de propositions est vrai s'il ne contient aucune contradiction et si ses éléments s'accordent entre eux. C'est le critère des mathématiques, où une proposition est vraie si elle se déduit sans contradiction des axiomes. Mais la cohérence ne suffit pas toujours : un roman bien construit est cohérent sans être vrai.",
                "Le pragmatisme, défendu par William James (Le Pragmatisme, 1907), propose un critère d'efficacité : une idée vraie est une idée qui se vérifie dans l'expérience, qui fonctionne et nous guide avec succès. Ce critère a le mérite de lier la vérité à l'action, mais il risque de confondre le vrai et l'utile : une illusion peut être utile sans être vraie.",
              ],
              box: { label: "À retenir", text: "Quatre critères : correspondance (adéquation à la chose), évidence (Descartes, Spinoza), cohérence (absence de contradiction), efficacité (pragmatisme de James). Aucun ne suffit seul." },
            },
            {
              heading: "Des vérités définitives ?",
              paragraphs: [
                "Leibniz distingue les vérités de raison et les vérités de fait. Les vérités de raison sont nécessaires : leur contraire est impossible, car il serait contradictoire (deux et deux font quatre, un triangle a trois côtés). Les vérités de fait sont contingentes : leur contraire est possible, même s'il n'a pas eu lieu (César a franchi le Rubicon). Les premières se connaissent par démonstration, les secondes par l'expérience et le témoignage.",
                "Ces deux sortes de vérités peuvent être définitives. Une vérité de raison l'est à l'intérieur du système d'axiomes qui la fonde. Une vérité de fait historique bien établie l'est aussi : qu'il soit vrai que Napoléon est mort à Sainte-Hélène en 1821 ne cessera jamais de l'être, même si notre connaissance de l'événement peut s'enrichir.",
                "Les vérités scientifiques ont un statut différent. Elles portent sur des lois générales, établies par induction et confirmées par l'expérience ; selon Popper, elles sont corroborées mais jamais vérifiées définitivement. Elles sont donc révisables. Il faut toutefois être précis : ce qui est provisoire, ce n'est pas la vérité elle-même, c'est notre connaissance, qui s'en approche et la corrige.",
              ],
              box: { label: "Repère", text: "Leibniz : vérités de raison (nécessaires, leur contraire est contradictoire) et vérités de fait (contingentes, leur contraire est possible). Une vérité de fait établie reste vraie ; une théorie scientifique reste révisable." },
            },
            {
              heading: "Le défi du relativisme",
              paragraphs: [
                "Le relativisme soutient qu'il n'existe pas de vérité universelle : tout dépendrait du point de vue de chacun ou de chaque culture. Platon, dans le Théétète, examine la thèse du sophiste Protagoras selon laquelle l'homme est la mesure de toutes choses : chaque chose serait pour moi telle qu'elle m'apparaît, et pour un autre telle qu'elle lui apparaît. Nietzsche, à la fin du XIXe siècle, développe un perspectivisme selon lequel il n'y a pas de faits purs, seulement des interprétations liées à des points de vue.",
                "Le relativisme a raison sur un point : nos perceptions, nos goûts et nos valeurs varient, et beaucoup de prétendues vérités ne sont que des opinions de notre temps. Mais il se heurte à une objection logique déjà formulée par Platon : si toute vérité est relative, la thèse « toute vérité est relative » l'est aussi, et l'adversaire qui la juge fausse a raison pour lui. Le relativisme absolu se contredit lui-même.",
                "Hannah Arendt, dans « Vérité et politique » (1967), montre l'enjeu concret de la question : les vérités de fait sont fragiles, car elles peuvent être effacées par le mensonge organisé. Défendre l'existence de vérités établies, c'est protéger un monde commun sur lequel on peut discuter. On peut donc conclure qu'il existe des vérités définitives (logiques et factuelles), même si notre connaissance du vrai reste une recherche, et que l'idée de vérité sert de guide à cette recherche.",
              ],
            },
          ],
          keyPoints: [
            "La vérité est une propriété des jugements ; la réalité est ce qui existe.",
            "Correspondance (adéquation à la chose), évidence (Descartes), cohérence, efficacité (James) : quatre critères.",
            "Leibniz : vérités de raison nécessaires, vérités de fait contingentes.",
            "Les vérités scientifiques sont corroborées et révisables ; c'est notre connaissance qui progresse.",
            "Le relativisme absolu se contredit lui-même (objection de Platon à Protagoras).",
            "Arendt (1967) : les vérités de fait sont fragiles et fondent un monde commun.",
          ],
          example: {
            statement: "Un élève affirme : « Chacun sa vérité. » Montrez ce que cette affirmation a de juste et ce qu'elle a d'intenable.",
            solution: [
              "Clarifier : l'affirmation signifie que la vérité dépend de chacun, qu'il n'y a pas de vérité commune.",
              "Ce qui est juste : dans le domaine des goûts et des préférences, les jugements varient légitimement (aimer ou non un plat). Nos perceptions dépendent aussi de notre point de vue.",
              "Distinguer : un goût n'est pas une vérité ; « j'aime ce plat » est vrai de moi, mais cela ne dit rien du plat lui-même.",
              "Objection logique : si chacun a sa vérité, celui qui pense que « chacun sa vérité » est faux a raison pour lui ; la thèse se contredit (objection de Platon à Protagoras).",
              "Objection concrète : sur un fait (la date d'un événement, le résultat d'un calcul), il n'y a pas de vérité propre à chacun ; sans vérités de fait communes, aucun débat n'est possible (Arendt).",
              "Conclusion : « chacun sa vérité » vaut pour les goûts, non pour les jugements de fait et de raison ; il vaudrait mieux dire « chacun son opinion ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque énoncé : vérité de raison, vérité de fait, énoncé scientifique révisable, ou simple opinion (goût). 1) « Un carré a quatre côtés égaux. » 2) « La Bastille a été prise le 14 juillet 1789. » 3) « Le chocolat noir est meilleur que le chocolat au lait. » 4) « L'univers est en expansion. » 5) « Si A est plus grand que B et B plus grand que C, alors A est plus grand que C. »",
              hint: "Demandez-vous si le contraire est contradictoire (raison), possible mais non réalisé (fait), établi par une théorie testée (science), ou affaire de préférence (opinion).",
              solution: [
                "1) Vérité de raison : elle découle de la définition du carré ; le contraire est contradictoire.",
                "2) Vérité de fait : l'événement aurait pu ne pas avoir lieu, mais il est établi par les sources historiques.",
                "3) Opinion, affaire de goût : elle exprime une préférence personnelle, non une vérité sur le chocolat.",
                "4) Énoncé scientifique révisable : il est solidement corroboré par les observations, mais reste soumis aux tests.",
                "5) Vérité de raison : c'est une propriété logique de la relation « plus grand que » (transitivité).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en une quinzaine de lignes pourquoi la thèse « toute vérité est relative » se contredit elle-même, puis montrez ce que le relativisme peut garder de légitime.",
              hint: "Appliquez la thèse à elle-même : est-elle vraie absolument, ou seulement relativement ?",
              solution: [
                "Énoncer la thèse : aucune vérité ne vaudrait pour tous ; tout dépendrait d'un point de vue.",
                "Appliquer la thèse à elle-même : soit elle est vraie absolument, et il existe au moins une vérité non relative, ce qui la contredit ; soit elle n'est vraie que relativement, et elle peut être fausse pour quelqu'un d'autre.",
                "Dans le second cas, l'adversaire qui affirme qu'il existe des vérités absolues a raison pour lui, et le relativiste n'a aucun argument à lui opposer : c'est l'objection de Platon à Protagoras dans le Théétète.",
                "Ce que le relativisme peut garder : nos perceptions, nos goûts, nos croyances culturelles varient, et beaucoup de prétendues évidences sont des préjugés de notre temps.",
                "Il garde aussi une leçon de prudence : nos connaissances sont situées et révisables, comme le montre l'histoire des sciences.",
                "Conclusion : le relativisme est intenable comme thèse absolue, mais utile comme vigilance critique contre le dogmatisme.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « La vérité dépend-elle de nous ? » Rédigez l'introduction (définitions, problème, annonce) et un plan détaillé en trois parties.",
              hint: "Distinguez la vérité elle-même et notre accès à la vérité : ce qui dépend de nous est peut-être la recherche, non le vrai.",
              solution: [
                "Introduction, définitions : la vérité est la conformité d'un jugement à ce qui est. Dépendre de nous peut signifier être produit par nous (par nos goûts, nos décisions, nos conventions), ou être relatif à nos facultés de connaître.",
                "Introduction, problème : il semble que la vérité soit indépendante de nous, puisque c'est la réalité qui rend nos jugements vrais ou faux. Mais nous n'accédons à cette réalité que par nos sens, nos concepts et nos théories, qui varient. La vérité est-elle découverte ou construite ?",
                "Annonce : nous verrons d'abord que la vérité semble s'imposer à nous, puis que notre accès au vrai dépend de nos points de vue et de nos méthodes, avant de montrer que ce qui dépend de nous est la recherche de la vérité, non la vérité elle-même.",
                "Partie 1 : la vérité ne dépend pas de nous. Arguments : une vérité de raison s'impose à tout esprit (deux et deux font quatre) ; une vérité de fait reste vraie même si personne ne la reconnaît. Références : la définition par l'adéquation, Leibniz, Spinoza (le vrai est norme de lui-même).",
                "Partie 2 : mais notre accès au vrai dépend de nous. Arguments : la perception varie selon le point de vue ; les théories scientifiques sont des constructions révisables. Références : Protagoras dans le Théétète, le perspectivisme de Nietzsche, Bachelard (le fait scientifique est construit), Popper.",
                "Partie 3 : la vérité dépend de nous comme une tâche, non comme une création. Arguments : le relativisme absolu se contredit ; c'est à nous de chercher, de vérifier, de défendre les vérités de fait. Références : l'objection de Platon, Arendt (« Vérité et politique », 1967).",
                "Conclusion : la vérité ne dépend pas de nous dans son contenu, mais sa connaissance et sa défense dépendent de notre effort et de notre honnêteté intellectuelle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion ou auteur à sa définition.",
            pairs: [
              { left: "Vérité-correspondance", right: "Adéquation entre le jugement et la chose." },
              { left: "Évidence (Descartes)", right: "Ce que l'esprit conçoit clairement et distinctement." },
              { left: "Pragmatisme (James)", right: "Est vraie l'idée qui se vérifie et réussit dans l'expérience." },
              { left: "Vérité de raison (Leibniz)", right: "Vérité nécessaire, dont le contraire est contradictoire." },
              { left: "Vérité de fait (Leibniz)", right: "Vérité contingente, dont le contraire est possible." },
              { left: "Relativisme (Protagoras)", right: "L'homme est la mesure de toutes choses." },
            ],
          },
          quiz: [
            {
              q: "La vérité est une propriété :",
              options: ["Des choses elles-mêmes", "Des sentiments sincères", "Des jugements que nous formons", "Des objets matériels seulement"],
              answer: 2,
              why: "Une chose est réelle ou non ; c'est le jugement qui est vrai ou faux.",
            },
            {
              q: "Quelle est la différence entre vérité et certitude ?",
              options: ["Aucune, les deux mots sont synonymes", "La certitude est un état d'esprit qui peut se tromper", "La certitude est toujours plus fiable que la vérité, car elle est vécue de l'intérieur", "La vérité n'existe qu'en mathématiques"],
              answer: 1,
              why: "On peut être certain et avoir tort : la certitude est subjective, la vérité dépend de ce qui est.",
            },
            {
              q: "Pour Leibniz, « César a franchi le Rubicon » est :",
              options: ["Une vérité de fait, car le contraire était possible", "Une vérité de raison, car l'événement est démontré par les historiens", "Une simple opinion", "Une erreur historique"],
              answer: 0,
              why: "L'événement aurait pu ne pas se produire : son contraire n'est pas contradictoire.",
            },
            {
              q: "Quelle objection Platon adresse-t-il au relativisme de Protagoras ?",
              options: ["Il est trop difficile à comprendre", "Il est contraire à la religion", "Il est impossible à enseigner aux jeunes gens", "Il se contredit, car il doit admettre que la thèse adverse est vraie pour qui la soutient"],
              answer: 3,
              why: "Si tout est vrai pour chacun, l'adversaire du relativisme a raison pour lui : la thèse se réfute elle-même.",
            },
            {
              q: "Que reproche-t-on au critère pragmatiste de la vérité ?",
              options: ["De lier la vérité à l'action", "De risquer de confondre le vrai et l'utile", "D'être réservé aux mathématiques et de ne rien dire des sciences de la nature", "D'avoir été inventé par Descartes"],
              answer: 1,
              why: "Une croyance peut être utile, rassurante ou efficace sans être vraie.",
            },
          ],
          trap: "Confondre la vérité et notre connaissance de la vérité : dire qu'une théorie scientifique est provisoire ne signifie pas que la vérité change, mais que notre savoir progresse.",
          method: "Dans tout sujet sur la vérité, distinguez au brouillon trois domaines (raison, faits, sciences) et un quatrième, celui des goûts : la réponse change selon le domaine, et cette distinction fournit souvent le plan.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA MORALE : LIBERTÉ, DEVOIR, BONHEUR                                   */
    /* ==================================================================== */
    {
      id: 'la-morale',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'la-liberte',
          title: 'La liberté : être libre, est-ce faire ce que l\'on veut ?',
          minutes: 35,
          objectives: [
            "Distinguer liberté d'action, libre arbitre, liberté politique et autonomie.",
            "Analyser la conception commune de la liberté comme absence de contrainte et ses limites (Platon).",
            "Expliquer l'objection déterministe (Spinoza) et la thèse sartrienne de la liberté.",
            "Construire une réponse argumentée : être libre, est-ce faire ce que l'on veut ou vouloir ce que l'on fait ?",
          ],
          course: [
            {
              heading: "Les sens du mot liberté",
              paragraphs: [
                "Au sens le plus courant, être libre, c'est ne pas être empêché d'agir : le prisonnier n'est pas libre, l'oiseau sorti de sa cage l'est. C'est la liberté d'action, entendue comme absence de contrainte extérieure. Au sens politique, la liberté désigne les droits garantis par la loi (liberté d'expression, de conscience, de circulation). Montesquieu, dans De l'esprit des lois (1748), la définit comme le droit de faire tout ce que les lois permettent.",
                "Au sens métaphysique, on parle de libre arbitre : le pouvoir de se déterminer soi-même, de choisir sans être entièrement déterminé par des causes extérieures. C'est ce libre arbitre qui fonde la responsabilité : on ne blâme pas une pierre qui tombe, mais une personne qui aurait pu agir autrement.",
                "Enfin, la liberté peut être pensée comme autonomie : être libre, c'est se donner à soi-même sa propre loi (du grec autos, soi-même, et nomos, la loi), par opposition à l'hétéronomie, qui consiste à recevoir sa loi de l'extérieur, que ce soit d'un maître ou de ses propres penchants.",
              ],
              box: { label: "Définition", text: "Liberté d'action : absence de contrainte extérieure. Libre arbitre : pouvoir de se déterminer soi-même. Liberté politique : droits garantis par la loi. Autonomie : fait de se donner à soi-même sa propre loi." },
            },
            {
              heading: "Faire ce que l'on veut : une liberté illusoire ?",
              paragraphs: [
                "L'opinion commune identifie la liberté au fait de faire ce que l'on veut, sans obstacle ni limite. Dans le Gorgias de Platon, Calliclès défend cette thèse : l'homme vraiment libre et heureux laisse ses désirs grandir autant que possible et a la force de les satisfaire. Socrate lui répond par l'image des tonneaux percés : l'homme livré à des désirs sans mesure passe sa vie à remplir un tonneau qui fuit, sans jamais être satisfait.",
                "L'objection est profonde : celui qui fait tout ce que ses désirs lui dictent n'est pas maître de lui-même, il est gouverné par ses désirs. Le tyran qui peut tout se permettre est, selon Platon, le plus esclave des hommes. Faire ce que l'on veut peut donc être une forme de servitude, si ce que l'on veut nous est imposé par nos passions, nos habitudes ou la publicité.",
                "On comprend alors la formule de Rousseau dans Du contrat social (1762) : l'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté. La liberté n'est pas l'absence de toute loi, mais le fait de n'obéir qu'à une loi que l'on reconnaît comme sienne.",
              ],
              box: { label: "Repère", text: "Rousseau, Du contrat social (1762), livre I, chapitre 8 : « l'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté »." },
            },
            {
              heading: "Le libre arbitre en question",
              paragraphs: [
                "Descartes, dans la quatrième des Méditations métaphysiques (1641), affirme que la volonté est en l'homme la faculté la plus étendue, qui le rend en quelque sorte semblable à Dieu. Mais il distingue deux degrés : la liberté d'indifférence, quand rien ne nous pousse d'un côté plutôt que de l'autre, est le plus bas degré de la liberté ; la plus haute liberté consiste à suivre de soi-même ce que l'on connaît clairement comme vrai et bon.",
                "Spinoza conteste l'existence du libre arbitre. Dans l'Éthique (1677) et dans une lettre de 1674, il compare l'homme à une pierre mise en mouvement par une cause extérieure qui, si elle était consciente, croirait continuer son mouvement par sa seule volonté. Les hommes se croient libres parce qu'ils ont conscience de leurs désirs mais ignorent les causes qui les déterminent. Pour Spinoza, est libre ce qui agit par la seule nécessité de sa nature : la liberté n'est pas l'absence de causes, mais la connaissance des causes qui nous font agir.",
                "Sartre défend au contraire une liberté radicale. Dans L'existentialisme est un humanisme (1946), il affirme que l'homme est condamné à être libre : il ne s'est pas créé lui-même, mais une fois jeté dans le monde, il est responsable de tout ce qu'il fait. Même ne pas choisir est encore un choix. Celui qui invoque sa nature, son passé ou les circonstances pour se décharger de sa responsabilité est, selon Sartre, de mauvaise foi (L'Être et le Néant, 1943).",
              ],
              box: { label: "À retenir", text: "Descartes : la liberté d'indifférence est le plus bas degré de la liberté. Spinoza : le libre arbitre est une illusion née de l'ignorance des causes. Sartre : l'homme est condamné à être libre et responsable de ses choix." },
            },
            {
              heading: "Vouloir ce que l'on fait",
              paragraphs: [
                "Ces analyses permettent de répondre au sujet. Faire ce que l'on veut ne suffit pas à être libre : encore faut-il que ce vouloir soit vraiment le nôtre, et non l'effet de passions, de pressions ou d'influences que nous ignorons. La liberté suppose donc la réflexion, la connaissance de soi et des causes qui nous déterminent.",
                "Kant, dans les Fondements de la métaphysique des mœurs (1785), fait de l'autonomie de la volonté le principe de la morale : la volonté est libre quand elle obéit à la loi qu'elle se donne par la raison, et non à ses inclinations. La liberté se manifeste alors moins dans l'absence de règles que dans la capacité d'agir par des principes que l'on reconnaît comme justes.",
                "Il ne faut pas pour autant oublier la liberté politique : la liberté intérieure ne suffit pas si l'on est privé de droits. Être libre, c'est à la fois ne pas être entravé, ne pas être le jouet de ses désirs et vivre sous des lois que l'on peut reconnaître comme siennes. On peut résumer : être libre, ce n'est pas seulement faire ce que l'on veut, c'est vouloir ce que l'on fait.",
              ],
            },
          ],
          keyPoints: [
            "Quatre sens : liberté d'action, libre arbitre, liberté politique, autonomie.",
            "Platon (Gorgias) : l'homme livré à ses désirs illimités ressemble à celui qui remplit un tonneau percé.",
            "Rousseau (1762) : l'obéissance à la loi qu'on s'est prescrite est liberté.",
            "Spinoza : les hommes se croient libres parce qu'ils ignorent les causes de leurs désirs.",
            "Sartre (1946) : l'homme est condamné à être libre ; invoquer sa nature est de la mauvaise foi.",
            "Être libre, c'est aussi vouloir ce que l'on fait, en connaissance de cause.",
          ],
          example: {
            statement: "Expliquez l'exemple de la pierre chez Spinoza et montrez ce qu'il remet en cause dans notre idée de la liberté.",
            solution: [
              "Présenter l'exemple : une pierre reçoit d'une cause extérieure une impulsion qui la met en mouvement. Imaginons qu'elle prenne conscience de son mouvement.",
              "Dégager l'illusion : la pierre, consciente de son effort pour continuer à se mouvoir mais ignorante de la cause qui l'a lancée, croirait se mouvoir librement, par sa seule volonté.",
              "Appliquer à l'homme : nous avons conscience de nos désirs et de nos actions, mais nous ignorons le plus souvent les causes (physiques, sociales, affectives) qui les déterminent.",
              "Ce qui est remis en cause : le libre arbitre, entendu comme pouvoir de choisir sans être déterminé. Le sentiment d'être libre n'est pas une preuve de liberté.",
              "Ce que Spinoza propose à la place : la liberté consiste à agir selon la nécessité de sa propre nature, en connaissant les causes qui nous font agir, plutôt qu'à être poussé par des causes ignorées.",
              "Conclusion : l'exemple ne supprime pas toute liberté ; il la redéfinit comme connaissance de la nécessité, et non comme absence de causes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quel sens du mot liberté est en jeu dans chaque phrase (liberté d'action, libre arbitre, liberté politique, autonomie) : 1) « La loi garantit la liberté de la presse. » 2) « Après sa sortie de l'hôpital, il est enfin libre de marcher seul. » 3) « Le tribunal cherche à savoir si l'accusé a agi librement ou sous l'effet d'une contrainte. » 4) « Elle s'est fixé ses propres règles de travail et s'y tient sans surveillance. »",
              hint: "Repérez si la phrase parle de droits, d'obstacle physique, de responsabilité dans un choix, ou de règle que l'on se donne.",
              solution: [
                "1) Liberté politique : un droit garanti par la loi.",
                "2) Liberté d'action : il n'y a plus d'obstacle physique au mouvement.",
                "3) Libre arbitre : il s'agit de savoir si l'accusé s'est déterminé lui-même, ce qui fonde sa responsabilité.",
                "4) Autonomie : elle se donne à elle-même sa propre loi et s'y conforme.",
                "Résultat : 1-liberté politique, 2-liberté d'action, 3-libre arbitre, 4-autonomie.",
              ],
            },
            {
              level: 2,
              statement: "« Je suis libre puisque je fais ce que je veux : ce soir, j'ai décidé de regarder des vidéos jusqu'à deux heures du matin. » Discutez cette affirmation en une quinzaine de lignes, en mobilisant au moins deux auteurs.",
              hint: "Interrogez l'origine du « je veux » : ce désir vient-il vraiment de moi ? Et suis-je maître de l'arrêter ?",
              solution: [
                "Reconnaître ce qui est juste : personne n'empêche l'élève d'agir ; il dispose de sa liberté d'action.",
                "Interroger l'origine du désir : les plateformes sont conçues pour retenir l'attention ; ce que l'élève croit vouloir est peut-être l'effet de mécanismes qu'il ignore. Spinoza : on se croit libre parce qu'on ignore les causes de ses désirs.",
                "Interroger la maîtrise : s'il ne parvient pas à s'arrêter alors qu'il sait devoir dormir, il est gouverné par son appétit plutôt que par sa volonté. Rousseau : l'impulsion du seul appétit est esclavage.",
                "Ajouter Platon : comme dans l'image des tonneaux percés, le désir de vidéos se renouvelle sans fin et ne procure pas de satisfaction durable.",
                "Nuancer : si l'élève a réellement choisi, en connaissance de cause, de veiller pour une raison qu'il approuve, son acte peut être libre ; ce n'est pas le contenu de l'acte, mais son rapport à la volonté réfléchie qui compte.",
                "Conclusion : faire ce que l'on veut ne suffit pas à prouver la liberté ; il faut encore que ce vouloir soit réfléchi et assumé.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Être libre, est-ce n'obéir à personne ? » Rédigez l'introduction et proposez un plan détaillé en trois parties avec références et exemples.",
              hint: "Distinguez obéir à quelqu'un (un maître) et obéir à une loi ; puis demandez-vous si l'on peut obéir à soi-même.",
              solution: [
                "Introduction : la liberté semble d'abord s'opposer à l'obéissance ; l'esclave obéit, l'homme libre décide. Pourtant, une vie sans aucune règle ne nous livre-t-elle pas à nos désirs ou à la loi du plus fort ? Le problème est de savoir si la liberté exclut toute obéissance ou si elle consiste à obéir d'une certaine manière, à une loi que l'on reconnaît comme sienne.",
                "Annonce : nous verrons d'abord que la liberté semble être l'absence de maître, puis que refuser toute obéissance nous soumet à nos désirs et aux plus forts, enfin que la liberté véritable est l'obéissance à une loi que l'on se donne.",
                "Partie 1 : être libre, c'est ne dépendre de personne. Argument : obéir à un maître, c'est soumettre sa volonté à celle d'un autre. Exemples : l'esclavage, la tyrannie. Référence : La Boétie et la servitude volontaire, ou la liberté d'action comme absence de contrainte.",
                "Partie 2 : mais n'obéir à personne peut être une servitude. Argument : sans règle, on obéit à ses désirs ou on subit la force des autres. Exemple : la loi du plus fort là où aucun droit ne protège. Références : Platon (Calliclès et les tonneaux percés), Rousseau (l'impulsion du seul appétit est esclavage).",
                "Partie 3 : la liberté consiste à obéir à la loi que l'on se donne. Argument : l'autonomie, individuelle et politique, réconcilie obéissance et liberté. Exemple : le citoyen qui obéit à la loi votée par ses représentants. Références : Rousseau (la loi qu'on s'est prescrite), Kant (autonomie de la volonté), Montesquieu (faire ce que les lois permettent).",
                "Conclusion : être libre, ce n'est pas n'obéir à personne, c'est n'obéir qu'à des lois que l'on peut reconnaître comme siennes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Liberté et libre arbitre.",
            statements: [
              { text: "Pour Descartes, la liberté d'indifférence est la forme la plus haute de la liberté.", true: false, why: "Il en fait le plus bas degré : la plus haute liberté suit ce qu'on connaît clairement comme vrai et bon." },
              { text: "Pour Spinoza, les hommes se croient libres parce qu'ils ignorent les causes de leurs désirs.", true: true, why: "C'est le sens de l'exemple de la pierre consciente de son mouvement." },
              { text: "Selon Sartre, invoquer son caractère pour excuser ses actes est de la mauvaise foi.", true: true, why: "L'homme est responsable de ce qu'il fait ; il ne peut se réfugier derrière une prétendue nature." },
              { text: "Pour Rousseau, obéir à une loi est toujours le contraire de la liberté.", true: false, why: "L'obéissance à la loi qu'on s'est prescrite est liberté." },
              { text: "Dans le Gorgias, Calliclès défend une liberté qui consiste à satisfaire tous ses désirs.", true: true, why: "Socrate lui oppose l'image des tonneaux percés." },
              { text: "L'autonomie signifie recevoir sa loi de l'extérieur.", true: false, why: "C'est l'hétéronomie ; l'autonomie consiste à se donner sa propre loi." },
            ],
          },
          quiz: [
            {
              q: "Que signifie étymologiquement « autonomie » ?",
              options: ["Se donner à soi-même sa propre loi", "Vivre seul, sans les autres", "Agir sans réfléchir", "Être indépendant financièrement et ne dépendre de personne pour vivre"],
              answer: 0,
              why: "Autos signifie soi-même et nomos la loi : l'autonomie est le fait de se donner sa propre loi.",
            },
            {
              q: "Quelle image Socrate oppose-t-il à Calliclès dans le Gorgias ?",
              options: ["La caverne", "L'anneau de Gygès", "Les tonneaux percés", "Le navire et son pilote"],
              answer: 2,
              why: "Celui qui veut satisfaire des désirs sans mesure ressemble à celui qui remplit sans fin des tonneaux qui fuient.",
            },
            {
              q: "Pour Spinoza, qu'est-ce qu'être libre ?",
              options: ["Pouvoir choisir sans aucune cause", "Agir par la seule nécessité de sa nature, en connaissant les causes", "Faire tout ce que l'on désire", "Obéir aveuglément aux lois de l'État"],
              answer: 1,
              why: "La liberté n'est pas l'absence de causes, mais l'action qui découle de notre nature comprise.",
            },
            {
              q: "Que signifie la formule de Sartre « l'homme est condamné à être libre » ?",
              options: ["Les juges punissent les hommes trop libres", "La liberté est une peine imposée par la société à ceux qui ont commis une faute", "L'homme ne peut jamais choisir", "L'homme ne peut pas échapper à la responsabilité de ses choix"],
              answer: 3,
              why: "L'homme ne s'est pas créé, mais il est responsable de tout ce qu'il fait ; même ne pas choisir est un choix.",
            },
            {
              q: "Comment Montesquieu définit-il la liberté politique ?",
              options: ["Le pouvoir de faire tout ce que l'on veut, tant qu'on n'est pas surpris par la police", "Le droit de faire tout ce que les lois permettent", "L'absence de gouvernement", "L'obéissance absolue au souverain"],
              answer: 1,
              why: "Dans De l'esprit des lois, la liberté politique se définit dans le cadre des lois, non contre elles.",
            },
          ],
          trap: "Opposer simplement liberté et contrainte, comme si toute règle était une atteinte à la liberté : la plupart des philosophes montrent au contraire que la liberté suppose des lois, intérieures ou politiques.",
          method: "Avant de rédiger, demandez-vous de quelle liberté parle le sujet (action, libre arbitre, politique, autonomie) : préciser le sens en introduction évite les contresens et permet de construire une progression d'un sens à l'autre.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'le-devoir',
          title: 'Le devoir : d\'où vient l\'obligation morale ?',
          minutes: 35,
          objectives: [
            "Distinguer l'obligation de la contrainte, et le devoir moral du devoir juridique.",
            "Identifier les sources possibles de l'obligation : la religion, la société, la conscience, la raison.",
            "Expliquer la morale kantienne : agir par devoir, impératif catégorique, universalisation.",
            "Analyser les critiques et les conflits de devoirs (Nietzsche, utilitarisme, Antigone).",
          ],
          course: [
            {
              heading: "Obligation et contrainte",
              paragraphs: [
                "Le devoir est ce que l'on doit faire, indépendamment de ce que l'on désire. Il s'exprime par une obligation. Il faut distinguer l'obligation de la contrainte : la contrainte est une force extérieure à laquelle on ne peut pas se soustraire (on est contraint de tomber si l'on saute dans le vide) ; l'obligation s'adresse à une liberté, qui peut désobéir mais reconnaît qu'elle doit obéir. On ne peut pas violer une contrainte ; on peut manquer à une obligation.",
                "Rousseau le montre dans Du contrat social (1762), à propos du prétendu droit du plus fort : céder à la force est un acte de nécessité, non de volonté ; c'est tout au plus un acte de prudence. La force ne crée aucun devoir : si l'on obéit au voleur qui menace, on n'est pas obligé de lui obéir dès qu'on peut lui échapper. Le devoir suppose qu'on reconnaisse la légitimité de ce qu'on doit faire.",
                "On distingue aussi les devoirs juridiques, fixés par la loi et sanctionnés par l'État (payer ses impôts), et les devoirs moraux, qui relèvent de la conscience et dont la seule sanction est souvent le remords (ne pas mentir à un ami). La question est alors de savoir d'où vient l'obligation morale, puisqu'elle ne repose pas sur la force.",
              ],
              box: { label: "Définition", text: "Contrainte : force extérieure qui s'impose sans qu'on puisse s'y soustraire. Obligation : exigence adressée à une liberté, qui peut désobéir mais reconnaît qu'elle doit obéir. Le devoir relève de l'obligation." },
            },
            {
              heading: "D'où vient le devoir ? Religion, société, conscience",
              paragraphs: [
                "Une première réponse fait venir le devoir de Dieu : la loi morale serait un commandement divin, comme les dix commandements de la Bible. Cette réponse pose une difficulté déjà soulevée par Platon dans l'Euthyphron : une chose est-elle bonne parce que les dieux l'ordonnent, ou les dieux l'ordonnent-ils parce qu'elle est bonne ? Dans le second cas, le bien a une valeur indépendante du commandement.",
                "Une deuxième réponse fait venir le devoir de la société. Pour le sociologue Émile Durkheim (L'Éducation morale, cours publiés en 1925), la morale est un ensemble de règles produites par la société et intériorisées par l'éducation : se sentir obligé, c'est ressentir en soi l'autorité du groupe. Cette thèse explique la diversité des morales selon les époques, mais elle a du mal à rendre compte du réformateur qui s'oppose à la morale de son temps au nom d'un devoir plus haut.",
                "Une troisième réponse place la source du devoir dans la conscience. Rousseau, dans l'Émile (1762), fait parler le vicaire savoyard, pour qui la conscience est un instinct divin, une voix intérieure qui juge infailliblement du bien et du mal lorsque nous l'écoutons. Le devoir ne viendrait pas d'une autorité extérieure, mais d'un sentiment inné du juste.",
              ],
            },
            {
              heading: "Kant : le devoir fondé sur la raison",
              paragraphs: [
                "Kant, dans les Fondements de la métaphysique des mœurs (1785), fonde le devoir sur la raison. Il commence par affirmer que la seule chose bonne sans restriction est une bonne volonté. Il distingue alors agir conformément au devoir et agir par devoir : le marchand qui ne trompe pas un enfant client, parce que l'honnêteté est bonne pour son commerce, agit conformément au devoir, mais par intérêt ; seule l'action accomplie par respect pour la loi morale a une valeur morale.",
                "Kant distingue deux sortes d'impératifs. L'impératif hypothétique commande une action comme moyen en vue d'une fin : si vous voulez réussir l'examen, travaillez. L'impératif catégorique commande sans condition : il ne faut pas mentir, quelle que soit la fin poursuivie. Seul l'impératif catégorique est moral. Sa première formule demande d'agir seulement d'après une maxime (une règle personnelle d'action) dont on puisse vouloir en même temps qu'elle devienne une loi universelle.",
                "Kant applique ce test à la promesse mensongère : si chacun promettait sans intention de tenir, plus personne ne croirait aux promesses, et la promesse elle-même deviendrait impossible ; la maxime se détruit en s'universalisant. Une autre formule demande de traiter l'humanité, en sa propre personne comme en celle d'autrui, toujours en même temps comme une fin et jamais simplement comme un moyen. Le devoir vient donc de la raison elle-même : c'est l'autonomie de la volonté.",
              ],
              box: { label: "Règle", text: "Impératif hypothétique : « si vous voulez telle fin, faites ceci ». Impératif catégorique : commandement sans condition. Test d'universalisation : une maxime est morale si l'on peut vouloir qu'elle devienne une loi universelle." },
            },
            {
              heading: "Critiques et conflits de devoirs",
              paragraphs: [
                "La morale de Kant a été vivement discutée. En 1797, Benjamin Constant lui objecte que dire toujours la vérité rendrait toute société impossible : faut-il dire à un assassin où se cache notre ami ? Kant maintient, dans sa réponse, qu'il n'existe pas de droit de mentir par humanité. L'utilitarisme de Jeremy Bentham et de John Stuart Mill (L'Utilitarisme, 1861) propose un autre critère : est moral ce qui produit le plus grand bonheur du plus grand nombre ; ce sont les conséquences, et non l'intention, qui comptent.",
                "Nietzsche, dans la Généalogie de la morale (1887), cherche l'origine historique et psychologique du devoir. Il rapproche la faute de la dette (en allemand, le même mot, Schuld, signifie les deux) et voit dans la morale du devoir une invention des faibles, née du ressentiment contre les forts. Le devoir n'aurait pas une origine pure, mais une histoire faite de rapports de force.",
                "Enfin, les devoirs peuvent entrer en conflit. Dans la tragédie de Sophocle, Antigone enterre son frère Polynice malgré l'interdiction du roi Créon : elle place les lois non écrites des dieux au-dessus des lois de la cité. Sartre, dans L'existentialisme est un humanisme, rapporte le cas d'un élève qui hésitait entre rejoindre la France libre et rester auprès de sa mère, qui n'avait que lui : aucune morale toute faite ne pouvait trancher à sa place. Le devoir exige alors un jugement et un engagement personnels.",
              ],
              box: { label: "À retenir", text: "Sources du devoir : Dieu, la société (Durkheim), la conscience (Rousseau), la raison (Kant). Critiques : Constant (le mensonge), l'utilitarisme (les conséquences), Nietzsche (une généalogie du devoir). Conflits : Antigone, l'élève de Sartre." },
            },
          ],
          keyPoints: [
            "Contrainte : on ne peut pas s'y soustraire ; obligation : on peut désobéir mais on doit obéir.",
            "Rousseau : céder à la force est un acte de nécessité, non de volonté ; la force ne fait pas le devoir.",
            "Durkheim : le devoir vient de la société ; Rousseau (Émile) : de la conscience ; Kant : de la raison.",
            "Kant (1785) : agir par devoir, non seulement conformément au devoir.",
            "Impératif catégorique : agir d'après une maxime que l'on peut vouloir voir devenir loi universelle.",
            "Utilitarisme : juger les actes par leurs conséquences ; Nietzsche : une généalogie du devoir.",
          ],
          example: {
            statement: "Un commerçant rend toujours la monnaie exacte, même aux clients distraits, parce qu'il craint de perdre sa clientèle s'il était découvert. Son action a-t-elle une valeur morale selon Kant ?",
            solution: [
              "Rappeler la distinction : Kant oppose l'action conforme au devoir (elle respecte extérieurement la règle) et l'action faite par devoir (elle est accomplie par respect pour la loi morale).",
              "Analyser l'action : le commerçant respecte bien la règle d'honnêteté ; son action est conforme au devoir.",
              "Analyser le motif : il agit par intérêt, par crainte de perdre ses clients. Sa maxime est : être honnête tant que c'est profitable.",
              "Conséquence : si l'honnêteté cessait d'être profitable, il cesserait d'être honnête. Son action n'a donc pas de valeur morale au sens strict.",
              "Préciser : Kant ne dit pas que le commerçant agit mal ; il dit que la valeur morale réside dans l'intention, et non dans le résultat extérieur.",
              "Conclusion : l'action est conforme au devoir mais n'est pas faite par devoir ; elle est légale et utile, mais sans valeur morale selon Kant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez s'il s'agit d'une contrainte ou d'une obligation, et justifiez : 1) Un passager est projeté vers l'avant lors d'un freinage brutal. 2) Un élève doit rendre son devoir à la date fixée. 3) Un témoin doit dire la vérité devant le tribunal. 4) Un prisonnier ne peut pas sortir de sa cellule fermée à clé.",
              hint: "Demandez-vous si la personne pourrait matériellement faire autrement.",
              solution: [
                "1) Contrainte : la force physique s'impose, le passager ne peut pas s'y soustraire.",
                "2) Obligation : l'élève peut ne pas rendre son devoir, mais il reconnaît qu'il doit le faire.",
                "3) Obligation : le témoin peut mentir, mais il est obligé de dire la vérité (et s'expose à une sanction s'il ment).",
                "4) Contrainte : la porte fermée l'empêche matériellement de sortir.",
                "Résultat : contraintes (1, 4), obligations (2, 3).",
              ],
            },
            {
              level: 2,
              statement: "Appliquez le test kantien d'universalisation aux deux maximes suivantes et dites si elles sont morales : 1) « Quand j'ai besoin d'argent, j'emprunte en promettant de rembourser, même si je sais que je ne le pourrai pas. » 2) « Je prends les transports en commun sans payer quand je suis pressé. »",
              hint: "Imaginez un monde où tout le monde suivrait la maxime : l'action resterait-elle possible ?",
              solution: [
                "Maxime 1, universalisation : si chacun promettait sans intention de tenir, plus personne ne croirait aux promesses.",
                "Maxime 1, conclusion : la promesse deviendrait impossible, et la maxime se détruit elle-même en s'universalisant. Elle n'est pas morale.",
                "Maxime 2, universalisation : si chacun voyageait sans payer quand cela l'arrange, les transports ne pourraient plus être financés.",
                "Maxime 2, conclusion : la maxime suppose que les autres paient ; celui qui la suit fait pour lui-même une exception qu'il ne peut pas vouloir pour tous. Elle n'est pas morale.",
                "Bilan : dans les deux cas, l'agent traite les autres simplement comme des moyens (le prêteur, les usagers qui paient), ce que condamne aussi la seconde formule de l'impératif catégorique.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Faire son devoir, est-ce renoncer à sa liberté ? » Proposez une problématique et un plan détaillé en trois parties, avec dans chaque partie un argument, un exemple et une référence.",
              hint: "Le devoir semble limiter la liberté ; mais une liberté sans devoir est-elle encore une liberté ? Pensez à l'autonomie.",
              solution: [
                "Problématique : le devoir s'impose à nous et nous commande parfois d'agir contre nos désirs ; il paraît donc limiter notre liberté. Mais si l'obligation s'adresse justement à une liberté, et si le devoir vient de notre propre raison, ne peut-on pas y voir la forme la plus haute de la liberté ?",
                "Partie 1 : le devoir semble s'opposer à la liberté. Argument : il nous commande de renoncer à nos désirs. Exemple : tenir une promesse qui nous coûte. Référence : la liberté comme faire ce que l'on veut (Calliclès), et la critique de Nietzsche qui voit dans le devoir une morale imposée.",
                "Partie 2 : mais il n'y a de devoir que pour un être libre. Argument : l'obligation, à la différence de la contrainte, suppose qu'on puisse désobéir ; la pierre n'a pas de devoir. Exemple : le témoin qui choisit de dire la vérité. Référence : Rousseau (céder à la force n'est pas un devoir).",
                "Partie 3 : faire son devoir, c'est être autonome. Argument : quand la loi morale vient de notre raison, lui obéir, c'est obéir à soi-même. Exemple : Antigone, qui reste fidèle à ce qu'elle juge juste malgré l'interdiction de Créon. Références : Kant (autonomie de la volonté), Rousseau (la loi qu'on s'est prescrite est liberté).",
                "Conclusion : faire son devoir n'est pas renoncer à sa liberté mais la réaliser, à condition que le devoir soit reconnu par la raison et non simplement subi.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion de la morale kantienne à sa définition.",
            pairs: [
              { left: "Bonne volonté", right: "La seule chose bonne sans restriction." },
              { left: "Maxime", right: "La règle personnelle d'après laquelle on agit." },
              { left: "Impératif hypothétique", right: "Commande un moyen en vue d'une fin que l'on veut." },
              { left: "Impératif catégorique", right: "Commande sans condition, quelle que soit la fin." },
              { left: "Autonomie", right: "La volonté se donne à elle-même sa loi par la raison." },
              { left: "Hétéronomie", right: "La volonté reçoit sa loi de l'extérieur ou des inclinations." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence entre une contrainte et une obligation ?",
              options: ["On peut manquer à une obligation, pas à une contrainte", "Une obligation est toujours écrite dans la loi, alors qu'une contrainte ne l'est jamais", "Une contrainte est toujours morale", "Il n'y a aucune différence"],
              answer: 0,
              why: "L'obligation s'adresse à une liberté qui peut désobéir ; la contrainte s'impose par la force.",
            },
            {
              q: "Selon Kant, le marchand honnête par intérêt agit :",
              options: ["Par devoir", "Contre le devoir", "Conformément au devoir, mais non par devoir", "Selon l'impératif catégorique, puisque son action est honnête"],
              answer: 2,
              why: "Son action respecte la règle, mais son motif est l'intérêt : elle n'a pas de valeur morale.",
            },
            {
              q: "« Si vous voulez être en bonne santé, faites du sport » est un impératif :",
              options: ["Catégorique, car il commande une action", "Moral", "Universel", "Hypothétique"],
              answer: 3,
              why: "Il commande un moyen en vue d'une fin que l'on peut vouloir ou non.",
            },
            {
              q: "Pour Durkheim, d'où vient l'obligation morale ?",
              options: ["D'un instinct divin", "De la société, intériorisée par l'éducation", "De la seule raison individuelle", "Du calcul des plaisirs et des peines que chaque individu fait pour lui-même"],
              answer: 1,
              why: "La morale est un ensemble de règles sociales ; se sentir obligé, c'est sentir en soi l'autorité du groupe.",
            },
            {
              q: "Pourquoi Antigone illustre-t-elle un conflit de devoirs ?",
              options: ["Elle hésite entre deux métiers", "Elle doit choisir entre la loi de la cité et les lois non écrites des dieux", "Elle refuse d'obéir à sa mère", "Elle veut devenir reine à la place de Créon"],
              answer: 1,
              why: "Elle enterre Polynice malgré l'interdiction de Créon, au nom d'un devoir qu'elle juge supérieur.",
            },
          ],
          trap: "Confondre agir conformément au devoir et agir par devoir, ou présenter l'impératif catégorique comme une règle d'intérêt (« ne mentez pas, sinon on ne vous croira plus ») : c'est alors un impératif hypothétique.",
          method: "Pour réviser Kant, retenez un exemple par idée : le marchand (conforme au devoir ou par devoir), la promesse mensongère (universalisation), l'usage d'autrui comme simple moyen (seconde formule). Un exemple bien expliqué vaut mieux qu'une formule récitée.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'le-bonheur',
          title: 'Le bonheur : est-il le but de l\'existence ?',
          minutes: 30,
          objectives: [
            "Définir le bonheur et le distinguer du plaisir, de la joie et de la satisfaction.",
            "Expliquer la conception d'Aristote (le bonheur comme fin ultime) et les sagesses antiques (Épicure, les stoïciens).",
            "Analyser les critiques du bonheur comme but de l'existence (Kant, Schopenhauer).",
            "Rédiger une argumentation sur le rapport entre bonheur, morale et liberté.",
          ],
          course: [
            {
              heading: "Qu'est-ce que le bonheur ?",
              paragraphs: [
                "Le bonheur est un état de satisfaction complète et durable, qui concerne l'existence dans son ensemble. Il se distingue du plaisir, qui est passager et partiel (le plaisir d'un bon repas), et de la joie, qui est un sentiment vif mais momentané. On peut éprouver du plaisir sans être heureux, et être heureux malgré des moments de douleur.",
                "Le mot français vient de « bon heur », c'est-à-dire bonne chance (heur vient du latin augurium, présage). Le bonheur semble donc d'abord dépendre de la fortune, de ce qui nous arrive. Le grec eudaimonia, que l'on traduit par bonheur, signifie littéralement le fait d'avoir un bon démon, un bon génie protecteur. La philosophie se demande si le bonheur dépend du hasard ou de nous.",
                "Pascal, dans les Pensées, affirme que tous les hommes recherchent d'être heureux, sans exception, même celui qui va se pendre : chacun agit en vue de ce qu'il croit être son bien. Si le bonheur est universellement désiré, est-il pour autant le but de l'existence, ce qui donne sens à toute une vie ?",
              ],
              box: { label: "Définition", text: "Bonheur : état de satisfaction complète et durable. Plaisir : satisfaction passagère et partielle d'un désir. Joie : sentiment vif et momentané. Le bonheur concerne la vie entière." },
            },
            {
              heading: "Aristote : le bonheur, fin ultime de l'action",
              paragraphs: [
                "Aristote, dans l'Éthique à Nicomaque, observe que toute action vise une fin, un bien. Mais certaines fins sont des moyens pour d'autres : on gagne de l'argent pour se nourrir, on se soigne pour être en bonne santé. Il doit y avoir une fin ultime, recherchée pour elle-même et jamais en vue d'autre chose : c'est le bonheur. Tout le monde s'accorde sur le mot, mais non sur son contenu (plaisir, richesse, honneurs).",
                "Pour Aristote, le bonheur consiste dans l'activité propre de l'être humain, accomplie avec excellence : une activité de l'âme conforme à la vertu. Puisque le propre de l'homme est la raison, le bonheur le plus élevé réside dans la vie selon la raison, et même dans la contemplation. Il faut aussi une vie complète : une hirondelle ne fait pas le printemps, ni un seul jour heureux une vie heureuse. Aristote reconnaît enfin que des biens extérieurs (santé, amis, ressources) sont nécessaires.",
                "Le bonheur n'est donc pas un simple état que l'on reçoit, mais une manière d'agir et de vivre. Il dépend en partie de nous, par l'exercice des vertus, et en partie de la fortune.",
              ],
              box: { label: "Repère", text: "Aristote, Éthique à Nicomaque : le bonheur est la fin ultime, recherchée pour elle-même ; il consiste dans une activité de l'âme conforme à la vertu, dans une vie complète." },
            },
            {
              heading: "Les sagesses antiques : Épicure et les stoïciens",
              paragraphs: [
                "Épicure, dans la Lettre à Ménécée, fait du plaisir le principe et la fin de la vie heureuse. Mais il ne s'agit pas de rechercher tous les plaisirs : il faut classer les désirs. Certains sont naturels et nécessaires (manger quand on a faim, boire quand on a soif, s'abriter), d'autres naturels mais non nécessaires (manger des mets raffinés), d'autres ni naturels ni nécessaires, donc vains (la gloire, la richesse sans limite). Le sage satisfait les premiers, use avec mesure des seconds et rejette les troisièmes.",
                "Le bonheur épicurien est l'ataraxie, absence de trouble de l'âme, jointe à l'aponie, absence de douleur du corps. Il faut pour cela se délivrer des craintes : la tradition a résumé l'enseignement d'Épicure en un quadruple remède (ne pas craindre les dieux, ne pas craindre la mort, savoir que le bien est facile à obtenir et que la douleur est supportable). La mort n'est rien pour nous, dit Épicure, puisque quand elle est là, nous ne sommes plus.",
                "Les stoïciens, comme Épictète dans le Manuel, enseignent qu'il faut distinguer ce qui dépend de nous (nos jugements, nos désirs, nos aversions) et ce qui n'en dépend pas (le corps, les biens, la réputation, les charges). Le malheur vient de ce que nous désirons ce qui ne dépend pas de nous. Descartes reprend cette idée dans la troisième maxime de sa morale par provision (Discours de la méthode, 1637) : tâcher plutôt de se vaincre que la fortune, et de changer ses désirs plutôt que l'ordre du monde.",
              ],
              box: { label: "À retenir", text: "Épicure : classer les désirs (naturels et nécessaires, naturels non nécessaires, vains) pour atteindre l'ataraxie. Épictète : distinguer ce qui dépend de nous et ce qui n'en dépend pas." },
            },
            {
              heading: "Le bonheur est-il vraiment le but de l'existence ?",
              paragraphs: [
                "Kant, dans les Fondements de la métaphysique des mœurs (1785), remarque que le bonheur est un idéal non de la raison mais de l'imagination : chacun le désire, mais personne ne peut dire exactement ce qu'il veut, car le bonheur dépend de l'expérience et de désirs changeants. Il ne peut donc pas fonder la morale. Dans la Critique de la raison pratique (1788), il précise que la morale n'enseigne pas comment nous rendre heureux, mais comment nous rendre dignes du bonheur.",
                "Schopenhauer, dans Le Monde comme volonté et comme représentation (1819), est plus pessimiste : la vie oscille comme un pendule de droite à gauche, de la souffrance (quand le désir est insatisfait) à l'ennui (quand il est satisfait). Le bonheur durable serait une illusion. Et l'on peut ajouter une objection politique : un pouvoir qui prétendrait imposer le bonheur aux citoyens deviendrait despotique, comme le montre le roman d'Aldous Huxley, Le Meilleur des mondes (1932), où le bonheur est obtenu au prix de la liberté et de la vérité.",
                "John Stuart Mill, pourtant défenseur du bonheur comme critère moral, affirme dans L'Utilitarisme (1861) qu'il vaut mieux être un être humain insatisfait qu'un porc satisfait, Socrate insatisfait qu'un imbécile satisfait : tous les bonheurs ne se valent pas. On peut alors conclure que le bonheur est bien la fin que tous recherchent, mais qu'il ne peut être le but de l'existence que s'il est accordé à d'autres valeurs (la vérité, la liberté, la justice) et non recherché à n'importe quel prix.",
              ],
            },
          ],
          keyPoints: [
            "Bonheur : satisfaction complète et durable ; plaisir : passager ; joie : vive et momentanée.",
            "Aristote : le bonheur est la fin ultime, une activité de l'âme conforme à la vertu.",
            "Épicure : classer les désirs pour atteindre l'ataraxie et l'aponie.",
            "Épictète : distinguer ce qui dépend de nous et ce qui n'en dépend pas.",
            "Kant : le bonheur est un idéal de l'imagination ; la morale rend digne du bonheur.",
            "Schopenhauer : la vie oscille entre souffrance et ennui ; Mill : tous les bonheurs ne se valent pas.",
          ],
          example: {
            statement: "Classez, selon Épicure, les désirs suivants, et dites lesquels le sage doit satisfaire : boire de l'eau quand on a soif ; boire un grand cru ; devenir célèbre ; dormir ; posséder une collection de voitures de luxe.",
            solution: [
              "Rappeler la classification : désirs naturels et nécessaires, désirs naturels non nécessaires, désirs ni naturels ni nécessaires (vains).",
              "Boire de l'eau quand on a soif : naturel et nécessaire, il répond à un besoin vital.",
              "Dormir : naturel et nécessaire, sans sommeil le corps souffre.",
              "Boire un grand cru : naturel (boire) mais non nécessaire (la soif est apaisée par l'eau) ; c'est une variation du plaisir.",
              "Devenir célèbre et posséder une collection de voitures de luxe : ni naturels ni nécessaires ; ce sont des désirs vains, sans limite, sources de trouble.",
              "Conclusion : le sage satisfait les désirs naturels et nécessaires, peut goûter avec mesure aux désirs naturels non nécessaires et écarte les désirs vains, afin d'atteindre l'ataraxie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Selon la distinction d'Épictète, indiquez pour chaque élément s'il dépend de nous ou non : 1) le résultat officiel de mon examen ; 2) le sérieux de mes révisions ; 3) la météo le jour de l'examen ; 4) l'opinion que les autres ont de moi ; 5) la manière dont je juge un échec.",
              hint: "Ce qui dépend de nous, selon Épictète, ce sont nos jugements, nos désirs et nos actions intérieures, non les événements ni l'opinion d'autrui.",
              solution: [
                "1) Ne dépend pas de nous : le résultat dépend aussi des correcteurs, du sujet et des circonstances.",
                "2) Dépend de nous : le sérieux de mon travail relève de ma volonté.",
                "3) Ne dépend pas de nous : c'est un événement extérieur.",
                "4) Ne dépend pas de nous : l'opinion d'autrui appartient à autrui.",
                "5) Dépend de nous : mon jugement sur l'événement m'appartient.",
                "Résultat : dépendent de nous (2, 5) ; ne dépendent pas de nous (1, 3, 4).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en une quinzaine de lignes pourquoi Kant affirme que le bonheur est un idéal de l'imagination et non de la raison. Montrez ensuite la conséquence qu'il en tire pour la morale.",
              hint: "Demandez-vous si l'on peut dire avec certitude ce qui nous rendra heureux : richesse, savoir, longue vie ?",
              solution: [
                "Constat : tout le monde désire être heureux, mais personne ne sait dire de façon précise et cohérente ce qu'il veut vraiment.",
                "Exemples dans l'esprit de Kant : la richesse peut attirer soucis et jalousies ; le savoir peut montrer des maux que l'on ignorait ; une longue vie peut être une longue souffrance.",
                "Raison de cette indétermination : le bonheur rassemble une totalité de satisfactions qui dépendent de l'expérience et de désirs changeants ; aucune règle universelle ne peut le définir.",
                "Conclusion sur le bonheur : c'est un idéal construit par l'imagination à partir de nos expériences, non un concept déterminé par la raison.",
                "Conséquence pour la morale : le bonheur ne peut fonder des devoirs valables pour tous ; la morale doit reposer sur la raison (l'impératif catégorique).",
                "Formule à retenir : la morale n'enseigne pas comment nous rendre heureux, mais comment nous rendre dignes du bonheur.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Le bonheur dépend-il de nous ? » Rédigez l'introduction et proposez un plan détaillé en trois parties, avec références et exemples.",
              hint: "Partez de l'étymologie (bon heur, la chance) et confrontez-la aux sagesses antiques qui font du bonheur l'œuvre du sage.",
              solution: [
                "Introduction : le mot bonheur vient de « bon heur », la bonne chance ; il semble donc que le bonheur nous arrive plutôt que nous le construisions. Pourtant, les sagesses antiques promettent un bonheur accessible à qui sait régler ses désirs. Le problème est de savoir si le bonheur est un don de la fortune ou le fruit de notre manière de vivre.",
                "Annonce : nous verrons que le bonheur semble dépendre des circonstances, puis que les sagesses antiques en font l'œuvre de notre jugement, avant de montrer qu'il dépend de nous en partie seulement et qu'il ne peut être recherché à n'importe quel prix.",
                "Partie 1 : le bonheur semble ne pas dépendre de nous. Argument : santé, rencontres, naissance, événements échappent à notre contrôle. Exemple : une maladie grave ou un deuil. Références : l'étymologie du mot, Aristote qui reconnaît le rôle des biens extérieurs, Schopenhauer.",
                "Partie 2 : mais le bonheur dépend de notre rapport aux désirs. Argument : ce n'est pas l'événement qui nous trouble, mais le jugement que nous portons sur lui. Exemple : deux personnes vivant la même épreuve de façon très différente. Références : Épictète (ce qui dépend de nous), Épicure (classement des désirs), Descartes (changer ses désirs plutôt que l'ordre du monde).",
                "Partie 3 : le bonheur dépend de nous en partie, et n'est pas la seule fin de l'existence. Argument : nous pouvons agir sur nos dispositions et nos vertus, mais le bonheur reste indéterminé et ne doit pas l'emporter sur la dignité. Références : Aristote (activité conforme à la vertu), Kant (se rendre digne du bonheur), Mill (Socrate insatisfait).",
                "Conclusion : le bonheur ne dépend pas entièrement de nous, mais il dépend de nous de nous en rendre capables et dignes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces penseurs du bonheur dans l'ordre chronologique.",
            items: [
              "Aristote : le bonheur comme fin ultime (Éthique à Nicomaque, IVe siècle av. J.-C.)",
              "Épicure : la Lettre à Ménécée (fin du IVe ou début du IIIe siècle av. J.-C.)",
              "Épictète : le Manuel, recueilli par son disciple Arrien (IIe siècle)",
              "Pascal : tous les hommes recherchent d'être heureux (Pensées, publiées en 1670)",
              "Kant : le bonheur, idéal de l'imagination (1785)",
              "Schopenhauer : le pendule de la souffrance et de l'ennui (1819)",
              "Mill : Socrate insatisfait plutôt qu'imbécile satisfait (1861)",
            ],
          },
          quiz: [
            {
              q: "Que signifie étymologiquement le mot « bonheur » ?",
              options: ["La vertu accomplie", "La bonne chance", "Le plaisir des sens", "La paix de l'âme"],
              answer: 1,
              why: "Heur vient du latin augurium, présage : le bonheur est d'abord la bonne fortune.",
            },
            {
              q: "Pour Aristote, pourquoi le bonheur est-il la fin ultime ?",
              options: ["Parce qu'il procure le plus de plaisir immédiat", "Parce que les dieux l'ont ordonné", "Parce qu'il est recherché pour lui-même et jamais en vue d'autre chose", "Parce qu'il s'obtient sans effort"],
              answer: 2,
              why: "Les autres biens sont des moyens ; le bonheur est la fin à laquelle tous les autres se rapportent.",
            },
            {
              q: "Selon Épicure, le désir de célébrité est :",
              options: ["Naturel et nécessaire", "Naturel mais non nécessaire", "Indispensable à la vie heureuse", "Ni naturel ni nécessaire"],
              answer: 3,
              why: "C'est un désir vain, sans limite naturelle, qui trouble l'âme au lieu de l'apaiser.",
            },
            {
              q: "Que désigne l'ataraxie ?",
              options: ["L'absence de trouble de l'âme", "L'absence de douleur du corps", "La recherche de tous les plaisirs", "L'indifférence aux autres"],
              answer: 0,
              why: "L'ataraxie est la paix de l'âme ; l'absence de douleur du corps se nomme aponie.",
            },
            {
              q: "Selon Kant, que nous enseigne la morale ?",
              options: ["Comment devenir heureux le plus vite possible", "Comment nous rendre dignes du bonheur", "Comment satisfaire tous nos désirs", "Comment éviter toute souffrance"],
              answer: 1,
              why: "Le bonheur est indéterminé ; la morale ne dit pas comment être heureux, mais comment mériter de l'être.",
            },
          ],
          trap: "Présenter Épicure comme un partisan de tous les plaisirs (le sens courant d'« épicurien ») : il prône au contraire la modération des désirs et la recherche de l'ataraxie.",
          method: "Dans un sujet sur le bonheur, distinguez toujours bonheur, plaisir et joie dès l'introduction : beaucoup de copies perdent des points en traitant le plaisir comme s'il était le bonheur.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA POLITIQUE : L'ÉTAT ET LA JUSTICE                                    */
    /* ==================================================================== */
    {
      id: 'la-politique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'l-etat',
          title: 'L\'État : pourquoi obéir à l\'État ?',
          minutes: 35,
          objectives: [
            "Définir l'État et le distinguer de la nation, du gouvernement et de la société.",
            "Expliquer les théories du contrat social (Hobbes, Locke, Rousseau) et ce qu'elles disent du fondement de l'obéissance.",
            "Distinguer obéir par force, par habitude et par consentement, à l'aide du repère légal et légitime.",
            "Analyser les limites de l'obéissance : critique marxiste, désobéissance civile, responsabilité individuelle.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'État ?",
              paragraphs: [
                "L'État est l'institution qui exerce un pouvoir souverain sur un territoire et une population, au moyen de lois, d'une administration et d'une force publique. Il se distingue du gouvernement, qui exerce le pouvoir pour un temps (les gouvernants passent, l'État demeure), de la nation, communauté humaine unie par une histoire et une volonté de vivre ensemble, et de la société civile, ensemble des relations économiques et sociales entre les individus.",
                "Jean Bodin, dans Les Six Livres de la République (1576), définit la souveraineté comme la puissance absolue et perpétuelle d'une république : c'est le pouvoir de faire la loi et de la casser, sans être soumis à un pouvoir supérieur. Max Weber, dans une conférence de 1919 publiée dans Le Savant et le politique, définit l'État moderne comme la communauté humaine qui revendique avec succès, sur un territoire donné, le monopole de la violence physique légitime.",
                "La définition de Weber est précieuse : l'État n'est pas le seul à pouvoir user de violence, mais il est le seul à pouvoir le faire légitimement. Cela pose la question du sujet : pourquoi reconnaissons-nous à l'État ce droit, et pourquoi lui obéissons-nous ? Est-ce par peur, par habitude, ou parce que nous y consentons ?",
              ],
              box: { label: "Définition", text: "État : institution qui exerce un pouvoir souverain sur un territoire et une population. Weber (1919) : la communauté humaine qui revendique avec succès le monopole de la violence physique légitime sur un territoire." },
            },
            {
              heading: "Le contrat social : obéir pour être protégé, obéir pour être libre",
              paragraphs: [
                "Hobbes, dans le Léviathan (1651), imagine un état de nature sans pouvoir commun. Les hommes, égaux en force et en désirs, s'y méfient les uns des autres : c'est une guerre de chacun contre chacun, où la vie est solitaire, misérable, brutale et brève. Pour en sortir, chacun renonce par un contrat à son droit de tout faire, et le transfère à un souverain chargé d'assurer la paix. On obéit à l'État parce qu'il garantit la sécurité ; en échange, le pouvoir du souverain est absolu.",
                "Locke, dans le Second Traité du gouvernement civil (1690), décrit un état de nature déjà réglé par une loi naturelle : les hommes y ont des droits naturels, la vie, la liberté et les biens. L'État est institué pour mieux protéger ces droits, et non pour les abolir. S'il les viole, il perd sa légitimité, et le peuple a un droit de résistance. L'obéissance est donc conditionnelle.",
                "Rousseau, dans Du contrat social (1762), cherche une forme d'association où chacun, s'unissant à tous, n'obéisse pourtant qu'à lui-même et reste aussi libre qu'auparavant. La solution est que chacun se soumette à la volonté générale, qui vise l'intérêt commun, et dont le peuple souverain est l'auteur. Obéir à la loi, c'est alors obéir à une loi que l'on s'est donnée : l'obéissance devient une forme de liberté.",
              ],
              box: { label: "À retenir", text: "Hobbes (1651) : on obéit pour la sécurité ; le souverain est absolu. Locke (1690) : on obéit pour la protection des droits naturels ; droit de résistance. Rousseau (1762) : on obéit à la volonté générale, donc à soi-même." },
            },
            {
              heading: "Force, habitude ou consentement ?",
              paragraphs: [
                "Rousseau rappelle que la force ne fait pas le droit : le plus fort n'est jamais assez fort pour être toujours le maître, s'il ne transforme sa force en droit et l'obéissance en devoir. Un pouvoir qui ne repose que sur la peur est fragile et n'oblige personne. La question est donc celle de la légitimité, c'est-à-dire du fondement qui rend un pouvoir juste et digne d'être obéi, à distinguer de la légalité, simple conformité aux lois en vigueur.",
                "Étienne de La Boétie, dans le Discours de la servitude volontaire, rédigé au milieu du XVIe siècle, s'étonne que tant d'hommes obéissent à un seul tyran qui n'a de pouvoir que celui qu'ils lui donnent. Il explique cette servitude par l'habitude, qui fait paraître naturelle la soumission, et par la chaîne des intérêts qui relie le tyran à ceux qui profitent de lui. Il suffirait de cesser de servir pour que le tyran s'effondre.",
                "Weber distingue trois types de domination légitime : traditionnelle (on obéit parce qu'il en a toujours été ainsi), charismatique (on obéit aux qualités exceptionnelles d'un chef), et légale-rationnelle (on obéit à des règles impersonnelles et à des fonctions, comme dans l'État moderne). Dans une démocratie, l'obéissance repose en principe sur le consentement des citoyens, exprimé par le vote et le respect de règles connues de tous.",
              ],
              box: { label: "Repère", text: "Légal : conforme aux lois en vigueur. Légitime : fondé en droit ou en raison, digne d'être reconnu. Un pouvoir peut être légal sans être légitime, et la légitimité est ce qui fonde l'obligation d'obéir." },
            },
            {
              heading: "Les limites de l'obéissance",
              paragraphs: [
                "Pour Spinoza, dans le Traité théologico-politique (1670), la fin de l'État n'est pas de dominer les hommes par la crainte, mais en réalité la liberté : l'État doit permettre à chacun d'user de sa raison et de s'exprimer. Un État qui opprime manque à sa raison d'être. Marx et Engels, dans le Manifeste du parti communiste (1848), vont plus loin : l'État serait l'instrument de domination d'une classe sur une autre, et l'obéissance qu'il réclame servirait les intérêts des classes dominantes.",
                "Lorsque la loi est injuste, la désobéissance peut devenir un devoir. Henry David Thoreau, dans La Désobéissance civile (1849), justifie son refus de payer un impôt qui finance l'esclavage et la guerre contre le Mexique. Gandhi en Inde et Martin Luther King aux États-Unis ont pratiqué une désobéissance civile publique et non violente, en acceptant les sanctions pour montrer l'injustice des lois.",
                "Hannah Arendt, dans Eichmann à Jérusalem (1963), analyse le procès d'un haut fonctionnaire nazi qui affirmait n'avoir fait qu'obéir aux ordres. Elle parle de banalité du mal : le mal extrême peut être commis par des individus ordinaires qui renoncent à penser et à juger. Obéir à l'État ne dispense jamais de juger ce qu'il commande. On obéit à l'État parce qu'il protège nos droits et rend possible la vie commune ; c'est aussi pour cette raison que l'obéissance n'est jamais aveugle.",
              ],
            },
          ],
          keyPoints: [
            "État : pouvoir souverain sur un territoire ; Weber : monopole de la violence physique légitime.",
            "Hobbes : obéir pour la sécurité ; Locke : pour protéger les droits naturels ; Rousseau : à la volonté générale.",
            "La force ne fait pas le droit (Rousseau) ; l'obéissance doit reposer sur la légitimité.",
            "La Boétie : la servitude est volontaire, entretenue par l'habitude et les intérêts.",
            "Spinoza (1670) : la fin de l'État est la liberté.",
            "Thoreau, Gandhi, King : la désobéissance civile ; Arendt : obéir ne dispense pas de juger.",
          ],
          example: {
            statement: "Comparez les réponses de Hobbes et de Locke à la question : jusqu'où doit-on obéir à l'État ?",
            solution: [
              "Point commun : pour les deux, l'État naît d'un contrat par lequel les hommes sortent de l'état de nature pour vivre en sécurité.",
              "Hobbes : l'état de nature est une guerre de chacun contre chacun ; le pire des maux est le retour à cette guerre. Le souverain doit donc avoir un pouvoir absolu, et l'obéissance est très étendue.",
              "Limite chez Hobbes : le sujet garde le droit de défendre sa vie, puisque c'est pour la préserver qu'il a passé le contrat.",
              "Locke : l'état de nature connaît déjà des droits naturels (vie, liberté, biens). L'État est institué pour les protéger, non pour les supprimer.",
              "Conséquence chez Locke : si le pouvoir viole ces droits, il perd sa légitimité, et le peuple dispose d'un droit de résistance.",
              "Conclusion : chez Hobbes, on doit obéir presque absolument au nom de la paix ; chez Locke, l'obéissance est conditionnée au respect des droits naturels.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque phrase parle de l'État, du gouvernement, de la nation ou de la société civile : 1) « Après les élections, une nouvelle équipe ministérielle est nommée. » 2) « Les entreprises et les associations forment un réseau d'échanges entre les individus. » 3) « La justice, la police et l'administration fiscale continuent de fonctionner malgré le changement de majorité. » 4) « Les habitants partagent une histoire, une langue et une volonté de vivre ensemble. »",
              hint: "L'État dure ; le gouvernement passe ; la nation est une communauté ; la société civile est le réseau des relations privées.",
              solution: [
                "1) Gouvernement : il s'agit de ceux qui exercent le pouvoir pour un temps.",
                "2) Société civile : les relations économiques et sociales entre individus et groupes.",
                "3) État : les institutions permanentes qui demeurent quand les gouvernants changent.",
                "4) Nation : une communauté humaine unie par une histoire et une volonté commune.",
              ],
            },
            {
              level: 2,
              statement: "Complétez un tableau comparatif de Hobbes, Locke et Rousseau selon quatre critères : l'état de nature, la raison du contrat, le titulaire de la souveraineté, la possibilité de résister au pouvoir. Rédigez ensuite une phrase de synthèse.",
              hint: "Pour chaque auteur, demandez-vous ce que les hommes craignent ou veulent garantir en entrant dans l'État.",
              solution: [
                "Hobbes : état de nature = guerre de chacun contre chacun ; contrat = sortir de la peur et assurer la paix ; souveraineté = le souverain (monarque ou assemblée), au pouvoir absolu ; résistance = seulement pour défendre sa propre vie.",
                "Locke : état de nature = régi par une loi naturelle, avec des droits (vie, liberté, biens), mais sans juge impartial ; contrat = mieux protéger ces droits ; souveraineté = le pouvoir législatif, confié par le peuple ; résistance = droit de résistance si le pouvoir viole les droits naturels.",
                "Rousseau : état de nature = l'homme isolé et indépendant, guidé par l'amour de soi et la pitié, sans relations morales ; contrat = trouver une association où chacun reste libre ; souveraineté = le peuple, par la volonté générale, inaliénable ; résistance = le peuple souverain peut toujours changer ses lois et son gouvernement.",
                "Synthèse : plus l'état de nature est pensé comme dangereux, plus le pouvoir accordé à l'État est grand (Hobbes) ; plus on reconnaît des droits antérieurs à l'État, plus l'obéissance devient conditionnelle (Locke, Rousseau).",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « L'État est-il l'ennemi de la liberté ? » Proposez une problématique et un plan détaillé en trois parties, avec un argument, un exemple et une référence par partie.",
              hint: "Distinguez la liberté naturelle (faire ce que l'on veut) et la liberté civile ou politique (droits garantis) : l'État ne s'oppose pas de la même manière aux deux.",
              solution: [
                "Problématique : l'État impose des lois, prélève des impôts et dispose de la force ; il semble limiter notre liberté. Mais sans État, qui garantirait nos droits contre la violence des autres ? Le problème est de savoir si l'État restreint la liberté ou s'il en est la condition, et à quelles conditions il peut devenir son ennemi.",
                "Partie 1 : l'État limite la liberté naturelle. Argument : toute loi interdit ou oblige ; l'État dispose du monopole de la violence. Exemple : la limitation de vitesse, l'impôt obligatoire. Références : Weber (monopole de la violence physique légitime), La Boétie (la servitude).",
                "Partie 2 : mais l'État est la condition de la liberté civile. Argument : sans pouvoir commun, la liberté de chacun est menacée par la force des autres. Exemple : la protection des droits par les tribunaux. Références : Hobbes (sortir de la guerre de chacun contre chacun), Locke (protéger les droits naturels), Rousseau (obéir à la volonté générale, c'est obéir à soi-même), Spinoza (la fin de l'État est la liberté).",
                "Partie 3 : l'État devient ennemi de la liberté lorsqu'il perd sa légitimité. Argument : un État qui viole les droits qu'il doit protéger trahit sa raison d'être. Exemple : les régimes totalitaires, les lois ségrégationnistes. Références : Locke (droit de résistance), Thoreau (désobéissance civile), Arendt (obéir ne dispense pas de juger).",
                "Conclusion : l'État n'est pas par nature l'ennemi de la liberté ; il en est la garantie quand il est légitime et contrôlé, et il peut en devenir l'ennemi quand il échappe à ce contrôle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque auteur à sa thèse sur l'État et l'obéissance.",
            pairs: [
              { left: "Hobbes", right: "On sort de la guerre de chacun contre chacun en confiant un pouvoir absolu au souverain." },
              { left: "Locke", right: "Le peuple a un droit de résistance si le pouvoir viole les droits naturels." },
              { left: "Rousseau", right: "Obéir à la volonté générale, c'est n'obéir qu'à soi-même." },
              { left: "La Boétie", right: "Le tyran n'a de pouvoir que celui qu'on lui donne : la servitude est volontaire." },
              { left: "Weber", right: "L'État revendique le monopole de la violence physique légitime." },
              { left: "Spinoza", right: "La fin de l'État est en réalité la liberté." },
            ],
          },
          quiz: [
            {
              q: "Selon Weber, qu'est-ce qui caractérise l'État moderne ?",
              options: ["Le monopole de la violence physique légitime sur un territoire", "La possession d'une armée nombreuse", "L'existence d'une religion officielle", "L'élection du chef de l'État au suffrage universel direct, tous les cinq ou sept ans"],
              answer: 0,
              why: "L'État n'est pas seul à pouvoir user de violence, mais il est seul à pouvoir le faire légitimement.",
            },
            {
              q: "Pour Hobbes, pourquoi les hommes acceptent-ils d'obéir au souverain ?",
              options: ["Parce que le souverain est désigné par Dieu et tient de lui un droit divin à gouverner", "Pour sortir de la guerre de chacun contre chacun et vivre en sécurité", "Parce qu'il est le plus savant", "Pour devenir riches"],
              answer: 1,
              why: "Le contrat est motivé par la peur de la mort violente et le désir de paix.",
            },
            {
              q: "Qu'est-ce qui distingue la théorie de Locke de celle de Hobbes ?",
              options: ["Locke refuse toute idée de contrat", "Locke donne au souverain un pouvoir absolu", "Locke pense que l'état de nature est une guerre permanente", "Locke reconnaît un droit de résistance quand le pouvoir viole les droits naturels"],
              answer: 3,
              why: "Chez Locke, l'État est institué pour protéger des droits antérieurs ; s'il les viole, il perd sa légitimité.",
            },
            {
              q: "Que veut montrer La Boétie dans le Discours de la servitude volontaire ?",
              options: ["Que la tyrannie est le meilleur des régimes", "Que les peuples sont naturellement esclaves", "Que le tyran ne tient son pouvoir que de l'obéissance de ceux qu'il domine", "Que la révolte armée et violente est toujours nécessaire pour renverser un tyran, quel qu'il soit"],
              answer: 2,
              why: "Il suffirait de cesser de servir pour que le tyran perde sa puissance.",
            },
            {
              q: "Qu'entend Arendt par « banalité du mal » ?",
              options: ["Le mal est rare et toujours spectaculaire", "Le mal extrême peut être commis par des individus ordinaires qui renoncent à penser", "Le mal n'existe pas vraiment", "Seuls les monstres commettent des crimes"],
              answer: 1,
              why: "Eichmann n'était pas un monstre hors du commun, mais un fonctionnaire qui obéissait sans juger.",
            },
          ],
          trap: "Confondre l'État avec le gouvernement du moment (on peut critiquer un gouvernement sans contester l'État), ou réduire l'obéissance à la peur de la sanction en oubliant la question de la légitimité.",
          method: "Pour les sujets sur l'État, mémorisez la comparaison Hobbes, Locke, Rousseau sous forme de tableau (état de nature, raison du contrat, souveraineté, résistance) : elle fournit souvent l'ossature d'une partie entière.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'la-justice',
          title: 'La justice : le juste se confond-il avec le légal ?',
          minutes: 30,
          objectives: [
            "Distinguer la justice comme vertu, comme institution et comme idéal, et utiliser le repère légal et légitime.",
            "Distinguer droit positif et droit naturel.",
            "Analyser les arguments pour et contre l'identification du juste et du légal (Hobbes, Pascal, Antigone).",
            "Expliquer le rôle de l'équité selon Aristote.",
          ],
          course: [
            {
              heading: "Définir le juste et le légal",
              paragraphs: [
                "Le mot justice a plusieurs sens. C'est une vertu, la disposition à rendre à chacun ce qui lui est dû ; c'est une institution, l'ensemble des tribunaux chargés d'appliquer la loi ; c'est enfin un idéal, ce que devrait être une société bien ordonnée. Le légal est ce qui est conforme aux lois en vigueur dans un pays à un moment donné. Le légitime est ce qui est fondé en droit, en raison ou en morale, et mérite d'être reconnu comme juste.",
                "On appelle droit positif l'ensemble des lois effectivement posées par une autorité dans une société (le Code civil, le Code pénal). On appelle droit naturel l'ensemble des droits et des principes que l'on estime valables pour tout être humain, indépendamment des lois écrites, parce qu'ils découleraient de la nature humaine ou de la raison. La Déclaration des droits de l'homme et du citoyen de 1789 parle ainsi, dans son article 2, de droits naturels et imprescriptibles : la liberté, la propriété, la sûreté et la résistance à l'oppression.",
                "La question du sujet est donc de savoir si le juste se réduit au droit positif, ou s'il existe une justice supérieure aux lois, au nom de laquelle on peut les juger.",
              ],
              box: { label: "Définition", text: "Légal : conforme aux lois en vigueur (droit positif). Légitime : fondé en droit, en raison ou en morale. Droit naturel : principes valables pour tout homme, indépendamment des lois écrites." },
            },
            {
              heading: "Le juste, c'est le légal",
              paragraphs: [
                "Une première thèse identifie le juste au légal. Hobbes, dans le Léviathan (1651), soutient que dans l'état de nature, où règne la guerre de chacun contre chacun, les notions de juste et d'injuste n'ont pas de place : là où il n'y a pas de pouvoir commun, il n'y a pas de loi, et là où il n'y a pas de loi, il n'y a pas d'injustice. Est juste ce que la loi du souverain prescrit.",
                "Cette thèse a des avantages : elle assure la sécurité et la prévisibilité. Chacun sait ce qu'il peut faire, et l'on évite que chacun impose sa propre idée de la justice par la force. Dans le Criton de Platon, Socrate, condamné à mort injustement, refuse de s'évader : il fait parler les Lois d'Athènes, qui lui rappellent qu'il leur doit tout et qu'en les violant il détruirait la cité.",
                "Pascal, dans les Pensées, constate la variété des lois selon les pays : plaisante justice qu'une rivière borne, vérité en deçà des Pyrénées, erreur au-delà. Il en tire une conclusion sceptique : faute de connaître la vraie justice, les hommes suivent la coutume, et ne pouvant faire que ce qui est juste soit fort, ils ont fait que ce qui est fort soit juste. Obéir aux lois établies est alors une sagesse prudente, même si l'on sait qu'elles ne sont pas la justice elle-même.",
              ],
              box: { label: "Repère", text: "Pascal, Pensées : « Plaisante justice qu'une rivière borne ! » La diversité des lois montre que le légal varie selon les lieux ; on suit la coutume faute de connaître la justice véritable." },
            },
            {
              heading: "Des lois injustes",
              paragraphs: [
                "Pourtant, l'histoire montre que des lois peuvent être profondément injustes. Le Code noir de 1685 réglementait l'esclavage dans les colonies françaises ; les lois de Nuremberg de 1935 privaient les Juifs allemands de leurs droits ; les lois de ségrégation raciale aux États-Unis imposaient des places séparées dans les bus. Le 1er décembre 1955, à Montgomery, Rosa Parks refuse de céder sa place à un passager blanc : son geste est illégal, mais nous le jugeons juste.",
                "Dans la tragédie de Sophocle, Antigone enterre son frère Polynice malgré l'interdiction du roi Créon, au nom des lois non écrites des dieux, qu'elle juge supérieures aux décrets humains. Le conflit d'Antigone et de Créon met en scène l'opposition entre le légal et un juste plus haut.",
                "Il faut aussi se méfier de la thèse inverse, qui ferait de la loi l'expression de la force. Dans la République de Platon, Thrasymaque soutient que le juste n'est rien d'autre que l'intérêt du plus fort ; dans le Gorgias, Calliclès affirme que les lois sont faites par les faibles pour contenir les forts. Si la loi n'est que l'œuvre des puissants, alors le légal ne peut pas être le critère du juste : il faut un critère qui permette de juger les lois elles-mêmes.",
              ],
            },
            {
              heading: "L'équité : corriger la loi par la justice",
              paragraphs: [
                "Aristote, au livre V de l'Éthique à Nicomaque, apporte une solution précieuse. La loi est nécessairement générale : elle vise la plupart des cas, et ne peut pas prévoir toutes les situations particulières. Il arrive donc qu'appliquer la loi à la lettre produise une injustice. L'équité corrige la loi là où elle est en défaut en raison de sa généralité : l'équitable est un juste supérieur à une certaine forme de juste, non au juste lui-même.",
                "Aristote compare l'équité à la règle de plomb des constructeurs de Lesbos, qui épouse la forme de la pierre au lieu de rester rigide. Le juge équitable se demande ce que le législateur aurait décidé s'il avait connu ce cas. Notre droit pratique l'équité, par exemple lorsque le juge tient compte des circonstances dans le choix d'une peine.",
                "On peut alors répondre au sujet : le juste ne se confond pas avec le légal, car les lois peuvent être injustes ou mal adaptées à un cas. Mais le légal n'est pas sans valeur : il est la forme que prend la justice dans une société, et il assure la sécurité de tous. L'idéal est que la loi tende vers le juste, et que l'on puisse la réformer, par des voies légitimes, lorsqu'elle s'en écarte.",
              ],
              box: { label: "À retenir", text: "Aristote : la loi est générale et ne peut prévoir tous les cas ; l'équité la corrige dans les cas particuliers, comme la règle de plomb de Lesbos épouse la forme de la pierre." },
            },
          ],
          keyPoints: [
            "Justice : vertu, institution, idéal ; légal : conforme aux lois ; légitime : fondé en droit ou en raison.",
            "Droit positif (lois posées) et droit naturel (principes valables pour tous).",
            "Hobbes : sans loi, ni juste ni injuste ; Pascal : la diversité des lois et la force de la coutume.",
            "Des lois injustes ont existé : Code noir (1685), lois de Nuremberg (1935), ségrégation (Rosa Parks, 1955).",
            "Antigone oppose les lois non écrites aux décrets de Créon.",
            "Aristote : l'équité corrige la généralité de la loi (la règle de plomb de Lesbos).",
          ],
          example: {
            statement: "Expliquez la pensée de Pascal : « Plaisante justice qu'une rivière borne ! Vérité au-deçà des Pyrénées, erreur au-delà. »",
            solution: [
              "Situer : la phrase est tirée des Pensées de Pascal, au XVIIe siècle ; elle porte sur la diversité des lois et des coutumes.",
              "Expliquer l'image : une rivière ou une montagne marque une frontière ; de part et d'autre, les lois diffèrent. Ce qui est permis d'un côté est interdit de l'autre.",
              "Dégager l'ironie : le mot « plaisante » est ironique ; une justice véritable devrait être universelle, et non dépendre d'un accident géographique.",
              "Conséquence : ce que nous appelons justice dans nos lois est souvent l'effet de la coutume, non de la raison. Le légal varie, ce qui montre qu'il ne se confond pas avec le juste.",
              "Nuance : Pascal n'en conclut pas qu'il faut désobéir ; il pense que les hommes, ne connaissant pas la vraie justice, ont intérêt à suivre les lois établies pour préserver la paix.",
              "Conclusion : la pensée de Pascal montre que le légal ne coïncide pas avec le juste, tout en invitant à respecter les lois par prudence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites si l'acte est légal, légitime, les deux, ou ni l'un ni l'autre, en justifiant : 1) Rosa Parks refuse de céder sa place dans un bus de Montgomery en 1955. 2) Un citoyen paie ses impôts selon la loi. 3) Un individu vole le portefeuille d'un passant. 4) Un fonctionnaire applique en 1942 une loi qui exclut des personnes en raison de leur origine.",
              hint: "Le légal se juge par rapport aux lois en vigueur à l'époque ; le légitime, par rapport à ce qui est juste en raison.",
              solution: [
                "1) Illégal à l'époque (violation de la loi de ségrégation), mais légitime : elle conteste une loi injuste au nom de l'égale dignité.",
                "2) Légal et légitime : la loi fiscale est respectée, et la contribution aux dépenses communes est juste dans son principe.",
                "3) Ni légal ni légitime : le vol est interdit par la loi et injuste.",
                "4) Légal à l'époque, mais illégitime : la loi elle-même viole l'égalité des droits ; l'obéissance n'en fait pas un acte juste.",
              ],
            },
            {
              level: 2,
              statement: "Un règlement de parc interdit « l'entrée de tout véhicule ». Une ambulance veut entrer pour secourir une personne blessée. Que doit décider le gardien ? Expliquez votre réponse à l'aide de la notion d'équité selon Aristote.",
              hint: "Demandez-vous ce que voulait empêcher l'auteur du règlement, et s'il avait pensé à ce cas.",
              solution: [
                "Application littérale : l'ambulance est un véhicule, donc la lettre du règlement interdit son entrée.",
                "Intention du législateur : le règlement vise à protéger la tranquillité et la sécurité des promeneurs, non à empêcher qu'on les secoure.",
                "Diagnostic : la règle est générale ; son auteur n'a pas prévu ce cas particulier. L'appliquer à la lettre produirait une injustice et un danger.",
                "Équité selon Aristote : elle corrige la loi là où elle est en défaut à cause de sa généralité, en se demandant ce que le législateur aurait décidé s'il avait connu ce cas.",
                "Décision : le gardien doit laisser entrer l'ambulance ; il respecte ainsi l'esprit du règlement plutôt que sa lettre.",
              ],
            },
            {
              level: 3,
              statement: "Explication de texte (type bac). Texte d'entraînement, rédigé pour l'exercice : « On croit souvent qu'il suffit d'obéir aux lois pour être juste. Mais les lois sont l'œuvre d'hommes qui ne pouvaient tout prévoir, et parfois d'hommes qui ne cherchaient que leur propre avantage. Celui qui se contente d'appliquer la loi peut donc devenir l'instrument d'une injustice. Faut-il pour autant que chacun suive sa seule conscience ? Ce serait livrer la cité à autant de justices qu'il y a d'opinions. Le juste n'est ni la loi seule ni la conscience seule : c'est l'effort par lequel une société soumet ses lois au jugement de la raison et les corrige ouvertement. » Dégagez la thèse, le problème et la structure, puis expliquez les deux dernières phrases.",
              hint: "Le texte écarte deux réponses opposées avant de proposer la sienne : repérez-les.",
              solution: [
                "Thèse : le juste ne se réduit ni au respect de la loi, ni au jugement de la conscience individuelle ; il consiste dans la correction publique et rationnelle des lois.",
                "Problème : si la loi peut être injuste, faut-il se fier à sa conscience ? Mais si chacun juge seul, comment éviter le désordre ? Où trouver un critère du juste ?",
                "Structure : 1) les trois premières phrases critiquent l'identification du juste et du légal ; 2) la quatrième et la cinquième phrase écartent la solution inverse, celle de la conscience seule ; 3) la dernière phrase propose une troisième voie.",
                "Explication de la cinquième phrase : suivre sa seule conscience multiplierait les justices selon les opinions. Chacun se ferait juge de tout, et le droit perdrait sa fonction : assurer des règles communes. On peut rapprocher cet argument de Hobbes, pour qui l'absence de loi commune ramène à la guerre de chacun contre chacun.",
                "Explication de la dernière phrase : l'auteur refuse les deux extrêmes. Le juste est défini comme un effort, un processus et non un état ; il est collectif (une société), rationnel (le jugement de la raison) et public (corriger ouvertement). Cela rappelle l'équité d'Aristote, qui corrige la loi, et la démarche des réformes législatives ou de la désobéissance civile publique.",
                "Intérêt : le texte permet de dépasser l'opposition entre légalisme et subjectivisme, en faisant de la justice une tâche politique.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le juste et le légal.",
            statements: [
              { text: "Une loi peut être légale sans être légitime.", true: true, why: "Les lois de Nuremberg étaient légales en Allemagne, mais profondément injustes." },
              { text: "Pour Hobbes, il existe une justice parfaite dans l'état de nature.", true: false, why: "Sans pouvoir commun et sans loi, il n'y a ni juste ni injuste." },
              { text: "Dans le Criton, Socrate s'évade de prison pour échapper à une condamnation injuste.", true: false, why: "Il refuse de s'évader par respect pour les Lois d'Athènes." },
              { text: "L'équité, selon Aristote, corrige la loi là où sa généralité la met en défaut.", true: true, why: "La loi vise la plupart des cas ; l'équité s'adapte au cas particulier." },
              { text: "Thrasymaque affirme dans la République que le juste est l'intérêt du plus fort.", true: true, why: "C'est la thèse que Socrate discute au livre I de la République." },
              { text: "Le droit naturel désigne les lois écrites d'un pays.", true: false, why: "Ce sont les lois écrites qui forment le droit positif ; le droit naturel les précède et sert à les juger." },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on droit positif ?",
              options: ["Les droits que l'on juge bons", "Les principes valables pour tout homme, en tout temps et en tout lieu, indépendamment des lois", "L'ensemble des lois effectivement posées dans une société", "Le droit d'être optimiste"],
              answer: 2,
              why: "Le droit positif est le droit écrit et en vigueur, posé par une autorité.",
            },
            {
              q: "Quel personnage tragique illustre l'opposition entre lois non écrites et lois de la cité ?",
              options: ["Œdipe", "Antigone", "Médée", "Iphigénie"],
              answer: 1,
              why: "Antigone enterre Polynice malgré l'interdiction de Créon, au nom des lois non écrites des dieux.",
            },
            {
              q: "Que veut montrer Pascal avec la formule « Plaisante justice qu'une rivière borne » ?",
              options: ["Que les fleuves sont des frontières naturelles", "Que la justice est universelle", "Que la géographie et le climat déterminent entièrement la morale et les mœurs de chaque peuple", "Que les lois varient selon les lieux et ne se confondent pas avec la justice"],
              answer: 3,
              why: "L'ironie souligne qu'une vraie justice ne devrait pas changer d'un côté à l'autre d'une frontière.",
            },
            {
              q: "À quoi Aristote compare-t-il l'équité ?",
              options: ["À la règle de plomb des constructeurs de Lesbos", "À la balance que tient la déesse de la justice, les yeux bandés", "Au glaive du juge", "À un fleuve qui suit son cours"],
              answer: 0,
              why: "La règle de plomb épouse la forme de la pierre, comme l'équité s'adapte au cas particulier.",
            },
            {
              q: "Que proclame l'article 2 de la Déclaration de 1789 ?",
              options: ["L'égalité des fortunes", "Les droits naturels et imprescriptibles : liberté, propriété, sûreté, résistance à l'oppression", "La souveraineté du roi", "L'obligation d'obéir à toute loi"],
              answer: 1,
              why: "L'article 2 fonde le droit positif sur des droits naturels qui le précèdent.",
            },
          ],
          trap: "Traiter le sujet uniquement par des exemples de lois injustes et conclure qu'il faut désobéir à toute loi jugée injuste : il faut aussi examiner la valeur du légal (sécurité, règles communes) et le risque de livrer la justice aux opinions de chacun.",
          method: "Utilisez le repère légal et légitime dès l'introduction, puis construisez la dissertation sur trois moments : le légal comme forme du juste, l'injustice possible des lois, l'équité ou la réforme qui rapproche la loi du juste.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'justice-et-egalite',
          title: 'Justice et égalité : donner à chacun ce qui lui revient',
          minutes: 35,
          objectives: [
            "Expliquer la formule « rendre à chacun le sien » et ses difficultés.",
            "Distinguer, avec Aristote, la justice distributive et la justice corrective.",
            "Distinguer égalité en droits, égalité des chances et égalité réelle, ainsi qu'égalité et équité.",
            "Analyser la théorie de la justice de Rawls et ses critiques (Nozick, Marx).",
          ],
          course: [
            {
              heading: "Rendre à chacun le sien",
              paragraphs: [
                "Une définition traditionnelle de la justice, reprise par le juriste romain Ulpien et conservée dans le Digeste, consiste à rendre à chacun le sien (suum cuique tribuere). Elle est simple, mais elle laisse ouverte la question décisive : qu'est-ce qui revient à chacun ? La même part pour tous, une part selon le mérite, selon le travail, selon les besoins ?",
                "L'égalité n'est pas l'identité. Deux personnes peuvent être égales en droits tout en étant différentes par leurs talents, leurs goûts ou leur situation. Et traiter tout le monde de manière identique n'est pas toujours juste : donner la même ration de nourriture à un enfant et à un adulte qui travaille physiquement serait égal, mais peu juste.",
                "La question de la justice comme égalité est donc celle du critère de répartition. Selon le critère choisi, la même distribution paraîtra juste ou injuste.",
              ],
              box: { label: "Définition", text: "Égalité : rapport entre des personnes ou des choses qui ont la même valeur sous un certain rapport. À distinguer de l'identité (être en tout semblables). Équité : justice adaptée aux situations particulières." },
            },
            {
              heading: "Aristote : deux formes de justice",
              paragraphs: [
                "Aristote, au livre V de l'Éthique à Nicomaque, distingue deux formes de justice particulière. La justice distributive concerne la répartition des biens communs (honneurs, richesses, charges) entre les membres de la cité. Elle repose sur une égalité proportionnelle, dite géométrique : chacun reçoit en proportion de son mérite. Il est injuste que des égaux reçoivent des parts inégales, ou que des inégaux reçoivent des parts égales.",
                "La justice corrective, ou commutative, concerne les échanges et la réparation des torts entre individus. Elle repose sur une égalité arithmétique : on ne tient pas compte de la valeur des personnes, mais seulement de ce qui est échangé ou du dommage causé. Que le voleur soit riche ou pauvre, il doit restituer ce qu'il a pris ; dans une vente juste, le prix correspond à la valeur de la chose.",
                "Prenons un exemple de justice distributive : une prime de 1 200 € doit être partagée entre deux membres d'une équipe, l'un ayant travaillé 30 heures, l'autre 10 heures, soit 40 heures en tout. Le partage proportionnel donne 1 200 × 30 ÷ 40 = 900 € au premier et 1 200 × 10 ÷ 40 = 300 € au second. Un partage de 600 € chacun serait égal, mais injuste selon le critère du travail fourni.",
              ],
              box: { label: "Repère", text: "Justice distributive : répartition selon le mérite, égalité proportionnelle (géométrique). Justice corrective ou commutative : échanges et réparations, égalité arithmétique, sans considération des personnes." },
            },
            {
              heading: "Égalité en droits, égalité réelle",
              paragraphs: [
                "La Déclaration des droits de l'homme et du citoyen de 1789 affirme, dans son article 1er, que les hommes naissent et demeurent libres et égaux en droits, et que les distinctions sociales ne peuvent être fondées que sur l'utilité commune. L'article 6 précise que tous les citoyens sont également admissibles à toutes les dignités, places et emplois publics, selon leur capacité, et sans autre distinction que celle de leurs vertus et de leurs talents.",
                "Cette égalité en droits est une conquête essentielle, mais elle peut rester formelle. Marx a critiqué ces droits proclamés pour tous, qui laissent subsister de grandes inégalités de fait : le droit d'accéder à toutes les professions ne vaut pas grand-chose pour qui n'a pas pu étudier. Tocqueville, dans De la démocratie en Amérique (1835 et 1840), montre que les sociétés démocratiques sont animées par une passion de l'égalité des conditions, qui rend les inégalités restantes de plus en plus insupportables.",
                "On distingue donc l'égalité en droits (les mêmes droits pour tous), l'égalité des chances (les mêmes possibilités de départ pour réussir) et l'égalité réelle ou des résultats (des conditions de vie comparables). On distingue aussi égalité et équité : accorder un temps supplémentaire à un candidat en situation de handicap n'est pas lui donner un avantage, c'est compenser un désavantage pour rétablir des chances équivalentes.",
              ],
            },
            {
              heading: "Rawls et ses critiques",
              paragraphs: [
                "John Rawls, dans Théorie de la justice (1971), propose une expérience de pensée : imaginer des personnes qui choisiraient les principes de leur société dans une position originelle, sous un voile d'ignorance, c'est-à-dire sans savoir quelle place elles y occuperaient (riche ou pauvre, talentueux ou non). Ne pouvant favoriser leur propre situation, elles choisiraient des principes impartiaux.",
                "Rawls pense qu'elles adopteraient deux principes. Premier principe : chacun doit avoir un droit égal aux libertés de base les plus étendues compatibles avec les mêmes libertés pour tous. Second principe : les inégalités sociales et économiques ne sont acceptables que si elles sont attachées à des positions ouvertes à tous dans des conditions d'égalité équitable des chances, et si elles profitent le plus aux membres les plus désavantagés de la société (principe de différence). Le premier principe a priorité sur le second.",
                "Robert Nozick, dans Anarchie, État et utopie (1974), objecte qu'une répartition est juste si les biens ont été acquis et transmis de manière juste, quel que soit le résultat final ; redistribuer serait porter atteinte aux droits des individus. Marx, dans la Critique du programme de Gotha (1875), envisage au contraire une société où l'on irait de chacun selon ses capacités à chacun selon ses besoins. Le débat montre que donner à chacun ce qui lui revient suppose toujours un choix entre mérite, droits et besoins.",
              ],
              box: { label: "À retenir", text: "Rawls (1971) : voile d'ignorance ; 1) libertés de base égales pour tous ; 2) inégalités acceptables seulement avec égalité équitable des chances et si elles profitent le plus aux plus désavantagés (principe de différence)." },
            },
          ],
          keyPoints: [
            "Rendre à chacun le sien (Ulpien) : reste à savoir ce qui revient à chacun.",
            "Aristote : justice distributive (proportionnelle, selon le mérite) et corrective (arithmétique).",
            "1789 : égaux en droits ; distinctions sociales fondées seulement sur l'utilité commune.",
            "Égalité en droits, égalité des chances, égalité réelle ; égalité et équité.",
            "Rawls (1971) : voile d'ignorance et principe de différence.",
            "Nozick (1974) : justice des acquisitions ; Marx (1875) : à chacun selon ses besoins.",
          ],
          example: {
            statement: "Trois élèves se partagent 90 points de bonus pour un exposé. Anna a préparé 50 % du travail, Basile 30 % et Chloé 20 %. Calculez le partage égal et le partage proportionnel, puis dites lequel correspond à la justice distributive d'Aristote.",
            solution: [
              "Partage égal : 90 ÷ 3 = 30 points chacun.",
              "Partage proportionnel : Anna reçoit 90 × 50 ÷ 100 = 45 points ; Basile 90 × 30 ÷ 100 = 27 points ; Chloé 90 × 20 ÷ 100 = 18 points.",
              "Vérification : 45 + 27 + 18 = 90 points, le total est respecté.",
              "Analyse : le partage égal traite de la même façon des contributions inégales ; selon Aristote, donner des parts égales à des inégaux est injuste.",
              "La justice distributive repose sur une égalité proportionnelle : chacun reçoit selon son mérite, ici sa part de travail.",
              "Conclusion : c'est le partage proportionnel (45, 27, 18) qui correspond à la justice distributive d'Aristote, à condition d'admettre que le travail fourni est le bon critère.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque situation relève de la justice distributive ou de la justice corrective (commutative) selon Aristote : 1) Un tribunal condamne un automobiliste à réparer les dégâts qu'il a causés. 2) Une municipalité attribue des logements selon des critères de priorité. 3) Un client paie le prix convenu pour une voiture d'occasion. 4) Un jury décerne des prix aux meilleurs projets d'un concours.",
              hint: "La justice distributive répartit des biens communs entre des personnes ; la justice corrective règle les échanges et répare les torts entre individus.",
              solution: [
                "1) Corrective : il s'agit de réparer un tort ; le dommage est compensé sans considération de la valeur des personnes.",
                "2) Distributive : on répartit un bien commun (les logements) selon des critères.",
                "3) Corrective (commutative) : c'est un échange, où le prix doit correspondre à la valeur de la chose.",
                "4) Distributive : on répartit des honneurs selon le mérite.",
                "Résultat : distributive (2, 4) ; corrective (1, 3).",
              ],
            },
            {
              level: 2,
              statement: "Trois sociétés se composent chacune de trois groupes de même taille : les plus défavorisés, les intermédiaires, les plus favorisés. Les revenus annuels moyens (en milliers d'euros) y sont : société A : 10, 10, 10 ; société B : 5, 20, 50 ; société C : 12, 18, 25. Placé sous le voile d'ignorance, quelle société choisiriez-vous en appliquant le principe de différence de Rawls ? Comparez avec le choix qui maximiserait la somme totale des revenus, et avec celui de l'égalité stricte.",
              hint: "Le principe de différence regarde d'abord la situation du groupe le plus défavorisé.",
              solution: [
                "Revenus des plus défavorisés : A = 10 ; B = 5 ; C = 12.",
                "Principe de différence : on choisit la société où les plus désavantagés sont le mieux lotis, donc C (12 > 10 > 5).",
                "Justification : dans C, les inégalités existent, mais elles profitent aux plus défavorisés, qui gagnent plus que dans la société égalitaire A (12 contre 10).",
                "Somme des revenus : A = 10 + 10 + 10 = 30 ; B = 5 + 20 + 50 = 75 ; C = 12 + 18 + 25 = 55. Maximiser la somme conduirait à B, au détriment des plus pauvres.",
                "Égalité stricte : seule A est parfaitement égale, mais tout le monde, y compris les plus défavorisés, y est moins bien loti que les plus défavorisés de C.",
                "Conclusion : le principe de différence choisit C ; il refuse à la fois de sacrifier les plus faibles au total (B) et d'imposer une égalité qui nuit à tous (A).",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « L'égalité est-elle toujours juste ? » Proposez une problématique et un plan détaillé en trois parties, avec dans chaque partie un argument, un exemple et une référence.",
              hint: "Distinguez l'égalité en droits, l'égalité arithmétique des parts et l'égalité proportionnelle ; puis interrogez l'équité.",
              solution: [
                "Problématique : la justice semble exiger l'égalité ; les inégalités de droits ou de conditions nous paraissent injustes. Mais traiter tout le monde de façon identique, sans tenir compte du mérite ni des besoins, est-il juste ? Le problème est de savoir quelle égalité la justice exige, et si une certaine inégalité peut être juste.",
                "Partie 1 : l'égalité est la condition de la justice. Argument : une société où certains ont plus de droits que d'autres est injuste. Exemple : l'abolition des privilèges en 1789, la conquête du suffrage universel. Référence : Déclaration de 1789 (article 1er), Tocqueville et la passion de l'égalité.",
                "Partie 2 : mais l'égalité arithmétique peut être injuste. Argument : donner des parts égales à des personnes inégales en mérite ou en besoins est injuste. Exemple : partager une prime également entre ceux qui ont beaucoup ou peu travaillé. Référence : Aristote (justice distributive et égalité proportionnelle).",
                "Partie 3 : la justice exige une égalité réfléchie, c'est-à-dire l'équité. Argument : certaines inégalités sont justes si elles compensent des désavantages ou profitent aux plus défavorisés. Exemple : le tiers-temps pour les candidats en situation de handicap, les bourses sur critères sociaux. Références : Rawls (principe de différence), critique de Nozick, Marx (à chacun selon ses besoins).",
                "Conclusion : l'égalité en droits est toujours juste, mais l'égalité des parts ne l'est pas toujours ; la justice consiste à choisir le bon critère d'égalité selon ce que l'on répartit.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le raisonnement de Rawls dans Théorie de la justice.",
            items: [
              "Imaginer une position originelle où l'on choisit les principes de la société",
              "Placer les participants sous un voile d'ignorance : ils ignorent leur future place",
              "Constater qu'ils ne peuvent plus favoriser leur propre situation",
              "Adopter d'abord l'égalité des libertés de base pour tous",
              "Exiger ensuite l'égalité équitable des chances pour l'accès aux positions",
              "N'accepter enfin que les inégalités qui profitent le plus aux plus désavantagés",
            ],
          },
          quiz: [
            {
              q: "Sur quel type d'égalité repose la justice distributive selon Aristote ?",
              options: ["Une égalité arithmétique, identique pour tous", "Une égalité tirée au sort", "Une égalité fixée par le plus fort", "Une égalité proportionnelle au mérite"],
              answer: 3,
              why: "Dans la répartition des biens communs, chacun reçoit en proportion de sa valeur ou de son mérite.",
            },
            {
              q: "Que signifie le voile d'ignorance chez Rawls ?",
              options: ["Les citoyens ne connaissent pas les lois", "On choisit les principes de justice sans savoir quelle place on occupera dans la société", "Les gouvernants cachent volontairement au peuple la vérité sur la répartition des richesses du pays", "Les plus pauvres ignorent leurs droits"],
              answer: 1,
              why: "Ne connaissant pas sa future situation, chacun choisit des principes impartiaux.",
            },
            {
              q: "Que dit le principe de différence ?",
              options: ["Les inégalités ne sont acceptables que si elles profitent le plus aux plus désavantagés", "Toutes les différences doivent être supprimées", "Chacun doit recevoir exactement la même part", "Les plus talentueux doivent recevoir davantage, sans condition"],
              answer: 0,
              why: "Rawls accepte certaines inégalités, à condition qu'elles améliorent la situation des plus défavorisés.",
            },
            {
              q: "Quelle différence y a-t-il entre égalité et équité ?",
              options: ["Aucune, ce sont deux synonymes", "L'équité tient compte des situations particulières pour rétablir des chances justes", "L'équité impose des parts strictement identiques à chacun, sans jamais tenir compte des situations", "L'égalité concerne seulement l'argent"],
              answer: 1,
              why: "Le tiers-temps d'un candidat en situation de handicap est inégal en apparence, mais équitable.",
            },
            {
              q: "Quelle objection Nozick adresse-t-il aux théories redistributives ?",
              options: ["Elles ne vont pas assez loin dans l'égalité et laissent subsister trop d'écarts de revenus entre les citoyens", "Elles oublient les besoins des plus pauvres", "Elles portent atteinte aux droits des individus sur ce qu'ils ont acquis justement", "Elles sont trop favorables aux riches"],
              answer: 2,
              why: "Pour Nozick, une répartition est juste si les acquisitions et les transferts l'ont été, quel que soit le résultat.",
            },
          ],
          trap: "Confondre égalité et identité de traitement, et croire que toute inégalité est injuste : Aristote et Rawls montrent que certaines inégalités peuvent être justes, selon le critère adopté.",
          method: "Face à un sujet sur la justice et l'égalité, posez au brouillon la question « égalité de quoi, et selon quel critère ? » (droits, chances, résultats ; mérite, besoins, travail) : c'est elle qui fait apparaître le problème.",
        },
      ],
    },
    /* ==================================================================== */
    /* PRÉPARER L'ÉPREUVE DU BAC                                              */
    /* ==================================================================== */
    {
      id: 'bac-philosophie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'la-dissertation',
          title: 'La dissertation : de l\'analyse du sujet au plan',
          minutes: 35,
          objectives: [
            "Analyser un sujet de dissertation : définir les termes, repérer la formulation et les présupposés.",
            "Formuler un problème philosophique à partir d'une tension entre deux réponses plausibles.",
            "Construire un plan progressif, dialectique ou analytique, sans plan catalogue.",
            "Rédiger une introduction complète et une conclusion qui répond à la question.",
          ],
          course: [
            {
              heading: "Ce qu'attend une dissertation de philosophie",
              paragraphs: [
                "L'épreuve écrite de philosophie du baccalauréat dure quatre heures. Le candidat choisit un sujet parmi trois : deux sujets de dissertation et une explication de texte. La dissertation consiste à traiter une question de manière argumentée, rigoureuse et progressive : il ne s'agit ni de réciter le cours, ni de donner son avis, mais de mener une réflexion qui examine plusieurs réponses possibles et justifie celle que l'on retient.",
                "Une bonne dissertation se reconnaît à trois qualités. Elle pose un vrai problème, c'est-à-dire qu'elle montre pourquoi la question n'a pas de réponse évidente. Elle progresse, chaque partie s'appuyant sur les limites de la précédente pour aller plus loin. Elle s'appuie sur des analyses précises de notions, d'exemples et de références, toujours expliquées et mises au service de l'argument.",
                "Le correcteur évalue la compréhension du sujet, la qualité du problème, la cohérence de l'argumentation, la précision des concepts et la clarté de l'expression. Une copie modeste mais centrée sur le sujet vaut mieux qu'une copie savante qui traite une autre question.",
              ],
              box: { label: "À retenir", text: "Épreuve de quatre heures, trois sujets au choix (deux dissertations, une explication de texte). La dissertation traite une question par une argumentation progressive : ni récitation de cours, ni simple opinion." },
            },
            {
              heading: "Analyser le sujet",
              paragraphs: [
                "Commencez par définir chaque terme du sujet, en distinguant ses différents sens. Dans « Le travail rend-il libre ? », il faut préciser ce qu'on entend par travail (activité contrainte, emploi, transformation de la nature) et par libre (indépendant, autonome, affranchi de la nécessité). Les sens que vous dégagez seront les instruments de votre réflexion.",
                "Examinez ensuite la formulation, car les mots outils changent la question. « Peut-on » interroge la possibilité (en est-on capable ?) et souvent la légitimité (en a-t-on le droit ?). « Faut-il » ou « doit-on » interrogent la nécessité ou l'obligation. « Est-ce seulement », « n'est-ce que » invitent à montrer qu'une chose ne se réduit pas à une autre. « Tout », « toujours », « jamais » appellent une discussion sur les limites.",
                "Repérez enfin les présupposés, c'est-à-dire ce que la question admet sans le dire. « Pourquoi obéir à l'État ? » présuppose que l'on obéit à l'État et que cette obéissance demande une justification. Mettre au jour un présupposé est souvent le moyen de découvrir le problème.",
              ],
              box: { label: "Règle", text: "Analyser un sujet : 1) définir chaque terme et ses sens ; 2) interpréter la formulation (peut-on, faut-il, seulement, tout) ; 3) dégager les présupposés ; 4) noter les notions du programme concernées." },
            },
            {
              heading: "Problématiser",
              paragraphs: [
                "Le problème naît d'une tension : deux réponses à la question semblent chacune justifiées, et pourtant elles s'opposent. Pour « Le travail rend-il libre ? » : d'un côté, le travail est contraint, imposé par la nécessité de vivre ; de l'autre, il permet de transformer la nature, de se former et de gagner son indépendance. Comment une même activité peut-elle être à la fois contrainte et libératrice ?",
                "La problématique se formule en une ou deux questions précises qui font apparaître cette tension et l'enjeu du sujet, c'est-à-dire ce qui dépend de la réponse. L'enjeu peut être moral, politique ou existentiel : si le travail n'était qu'une contrainte, faudrait-il chercher à en libérer les hommes, ou à le rendre plus humain ?",
                "Un problème n'est pas une simple reformulation du sujet ni une série de questions sans lien. Il doit montrer pourquoi la question mérite d'être posée et indiquer la direction de la recherche.",
              ],
            },
            {
              heading: "Construire le plan et rédiger l'introduction",
              paragraphs: [
                "Le plan le plus courant est progressif, souvent en trois parties : une première réponse, appuyée sur de bons arguments ; l'examen de ses limites, qui conduit à une réponse différente ; un dépassement, qui précise à quelles conditions et en quel sens on peut répondre. Ce n'est pas un plan « oui, non, peut-être » mécanique : chaque partie doit naître des difficultés de la précédente. On peut aussi construire un plan analytique qui examine successivement plusieurs sens d'un terme.",
                "Chaque partie comprend une idée directrice, deux ou trois arguments développés, des exemples analysés et des références expliquées. Les transitions font le bilan de la partie qui s'achève et montrent pourquoi il faut passer à la suivante. Évitez le plan catalogue, qui juxtapose des auteurs ou des exemples sans les faire dialoguer.",
                "L'introduction comporte quatre moments : une amorce qui conduit à la question (un exemple, un paradoxe, une opinion courante), l'analyse des termes, la formulation du problème, et l'annonce du plan. La conclusion fait le bilan du parcours et répond clairement à la question posée ; elle peut ouvrir sur une question voisine, sans relancer un nouveau sujet.",
              ],
              box: { label: "Repère", text: "Introduction : amorce, définitions, problème, annonce du plan. Développement : deux ou trois parties progressives, avec transitions. Conclusion : bilan et réponse nette à la question." },
            },
          ],
          keyPoints: [
            "Trois sujets au choix en quatre heures : deux dissertations, une explication de texte.",
            "Définir chaque terme, interpréter la formulation, dégager les présupposés.",
            "« Peut-on » : possibilité et droit ; « faut-il » : nécessité ou devoir ; « seulement » : réduction à discuter.",
            "Le problème naît de la tension entre deux réponses plausibles.",
            "Plan progressif : chaque partie naît des limites de la précédente ; pas de plan catalogue.",
            "Introduction : amorce, définitions, problème, annonce ; conclusion : réponse nette.",
          ],
          example: {
            statement: "Analysez le sujet « Peut-on désobéir aux lois ? » et formulez un problème.",
            solution: [
              "Définir les termes : désobéir, c'est refuser d'accomplir ce qu'une autorité commande ; les lois sont des règles générales posées par l'autorité publique (droit positif), mais on peut aussi penser aux lois morales.",
              "Interpréter « peut-on » : en est-on capable ? Oui, en fait, puisqu'il existe des délinquants et des résistants. La vraie question est donc celle du droit : est-il légitime de désobéir ?",
              "Dégager le présupposé : le sujet suppose que l'obéissance aux lois est la règle et que la désobéissance doit se justifier.",
              "Faire apparaître la tension : d'un côté, désobéir aux lois menace la paix civile et l'égalité de tous devant la loi ; de l'autre, certaines lois sont injustes, et leur obéir revient à participer à l'injustice.",
              "Formuler le problème : si la loi est la condition de la vie commune, comment pourrait-on avoir le droit de lui désobéir ? Mais si une loi peut être injuste, l'obéissance inconditionnelle n'est-elle pas une faute ?",
              "Indiquer le repère utile : légal et légitime ; et la direction possible : une désobéissance au nom de la justice, publique et assumée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque sujet, indiquez ce que demande la formulation : 1) « Peut-on tout démontrer ? » 2) « Faut-il préférer le bonheur à la vérité ? » 3) « Travailler, est-ce seulement produire ? » 4) « Doit-on toujours obéir à sa conscience ? »",
              hint: "Repérez le mot outil (peut-on, faut-il, seulement, doit-on, toujours) et ce qu'il fait varier.",
              solution: [
                "1) « Peut-on » : est-il possible de tout démontrer ? et est-il légitime de l'exiger ? Le mot « tout » invite à chercher les limites de la démonstration.",
                "2) « Faut-il préférer » : la question porte sur une valeur et un choix ; elle présuppose que bonheur et vérité peuvent entrer en conflit.",
                "3) « Seulement » : il s'agit de savoir si le travail se réduit à la production ou s'il a d'autres dimensions (formation de soi, reconnaissance).",
                "4) « Doit-on toujours » : la question porte sur une obligation et ses limites ; « toujours » demande d'examiner les cas où la conscience pourrait se tromper.",
              ],
            },
            {
              level: 2,
              statement: "Pour le sujet « Le travail rend-il libre ? », rédigez au brouillon : 1) deux sens de travail et deux sens de libre ; 2) la tension entre deux réponses plausibles ; 3) la problématique en une ou deux phrases.",
              hint: "Associez un sens du travail à un sens de la liberté pour obtenir une réponse positive, puis un autre couple pour une réponse négative.",
              solution: [
                "Sens de travail : a) activité contrainte, imposée par la nécessité de vivre ; b) activité consciente de transformation de la nature, par laquelle l'homme se forme.",
                "Sens de libre : a) affranchi de la nécessité et de la contrainte ; b) autonome, maître de soi et capable de réaliser ses projets.",
                "Réponse négative : si le travail est une contrainte (a) et la liberté une absence de contrainte (a), le travail s'oppose à la liberté ; Marx décrit le travail aliéné.",
                "Réponse positive : si le travail est formation de soi (b) et la liberté une autonomie (b), le travail rend libre ; Hegel montre que l'esclave se forme en formant la chose.",
                "Problématique : comment une activité imposée par la nécessité peut-elle être aussi ce par quoi l'homme conquiert son autonomie ? À quelles conditions le travail libère-t-il au lieu d'asservir ?",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Est-il raisonnable de vouloir être heureux ? » Rédigez l'introduction complète et un plan détaillé en trois parties, avec transitions.",
              hint: "Le mot « raisonnable » peut signifier conforme à la raison, mais aussi mesuré, prudent. Le bonheur est-il un but que la raison peut fixer ?",
              solution: [
                "Amorce : tout le monde veut être heureux, disait Pascal ; ce désir paraît si naturel qu'on ne songe pas à l'interroger.",
                "Définitions : vouloir, c'est viser un but de manière réfléchie ; être heureux, c'est connaître une satisfaction complète et durable ; raisonnable signifie à la fois conforme à la raison et mesuré, sage.",
                "Problème : si le bonheur est la fin que nous visons tous, il semble raisonnable de le vouloir ; mais si nous ne savons pas en quoi il consiste, et s'il dépend en partie du hasard, le vouloir n'est-il pas déraisonnable, source de frustration ? La raison doit-elle viser le bonheur, ou autre chose ?",
                "Annonce et partie 1 : il est raisonnable de vouloir être heureux, car le bonheur est la fin ultime de toute action (Aristote) et la raison nous aide à l'atteindre en réglant nos désirs (Épicure). Transition : encore faut-il savoir ce que l'on veut quand on veut le bonheur.",
                "Partie 2 : vouloir le bonheur peut être déraisonnable, car il est un idéal de l'imagination, indéterminé (Kant), et la poursuite du bonheur peut conduire à l'insatisfaction permanente (Schopenhauer, le pendule de la souffrance et de l'ennui). Transition : faut-il alors renoncer au bonheur, ou le vouloir autrement ?",
                "Partie 3 : il est raisonnable de vouloir le bonheur à condition de le vouloir avec mesure et de ne pas lui sacrifier tout le reste. Arguments : distinguer ce qui dépend de nous (Épictète), se rendre digne du bonheur (Kant), préférer un bonheur exigeant à une satisfaction médiocre (Mill).",
                "Conclusion : vouloir être heureux n'est raisonnable que si la raison éclaire ce vouloir, en le réglant sur ce qui dépend de nous et en le subordonnant à la dignité.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du travail d'une dissertation.",
            items: [
              "Lire les trois sujets et choisir le sien",
              "Définir les termes et repérer les présupposés",
              "Formuler le problème à partir d'une tension",
              "Construire un plan progressif avec arguments, exemples et références",
              "Rédiger l'introduction au brouillon",
              "Rédiger le développement et la conclusion au propre",
              "Relire la copie",
            ],
          },
          quiz: [
            {
              q: "Combien de sujets sont proposés à l'épreuve de philosophie, et de quelle nature ?",
              options: ["Deux dissertations seulement", "Deux dissertations et une explication de texte", "Une dissertation et deux explications de texte", "Trois explications de texte"],
              answer: 1,
              why: "Le candidat choisit un sujet parmi trois : deux dissertations et une explication de texte.",
            },
            {
              q: "Que signifie le plus souvent la formule « Peut-on... ? » dans un sujet ?",
              options: ["Uniquement la capacité physique ou matérielle d'accomplir l'action dont parle le sujet", "Que la réponse est forcément non", "La possibilité de fait et la légitimité, en droit", "Qu'il faut donner son avis personnel"],
              answer: 2,
              why: "« Peut-on » interroge à la fois la possibilité et le droit ; la distinction est souvent au cœur du problème.",
            },
            {
              q: "Qu'est-ce qu'un plan catalogue ?",
              options: ["Un plan qui juxtapose des auteurs ou des exemples sans les faire dialoguer", "Un plan en trois parties", "Un plan qui commence par définir les termes", "Un plan qui répond à la question"],
              answer: 0,
              why: "Il énumère au lieu d'argumenter ; la dissertation demande une progression.",
            },
            {
              q: "Quels sont les moments d'une introduction de dissertation ?",
              options: ["Une citation, un résumé du cours, une conclusion", "Une biographie détaillée de l'auteur le plus célèbre sur la question, puis l'annonce du plan", "La réponse à la question, puis les arguments", "Une amorce, l'analyse des termes, le problème, l'annonce du plan"],
              answer: 3,
              why: "L'introduction conduit du sujet au problème, puis annonce le parcours.",
            },
            {
              q: "Que doit faire la conclusion ?",
              options: ["Poser un sujet entièrement nouveau", "Répéter mot pour mot l'introduction", "Faire le bilan et répondre clairement à la question", "Ajouter les nouveaux arguments et les exemples que l'on a oublié de placer dans le développement"],
              answer: 2,
              why: "La conclusion récapitule le parcours et donne une réponse argumentée ; l'ouverture reste facultative et brève.",
            },
          ],
          trap: "Commencer à rédiger sans avoir défini les termes ni formulé de problème : la copie récite alors le cours sur la notion au lieu de traiter la question posée (hors-sujet partiel).",
          method: "Consacrez au moins une heure au brouillon : une colonne pour les sens des termes, une pour les réponses possibles et leurs arguments, une pour les exemples et références. Le plan se lit ensuite presque de lui-même.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'l-explication-de-texte',
          title: 'L\'explication de texte : thèse, structure, enjeux',
          minutes: 35,
          objectives: [
            "Dégager la thèse d'un texte philosophique, la thèse qu'il conteste et le problème qu'il traite.",
            "Identifier la structure argumentative d'un texte (moments, connecteurs, fonction des exemples).",
            "Expliquer un texte de manière précise, sans paraphrase ni hors-texte.",
            "Rédiger l'introduction et la conclusion d'une explication de texte.",
          ],
          course: [
            {
              heading: "Ce qu'est une explication de texte",
              paragraphs: [
                "Le sujet d'explication propose un extrait d'une quinzaine à une vingtaine de lignes d'un auteur du programme, avec la consigne d'expliquer le texte. Le sujet précise que la connaissance de la doctrine de l'auteur n'est pas requise : ce qui est attendu, c'est une compréhension précise du texte et du problème dont il traite. Il ne faut donc pas réciter ce que l'on sait de l'auteur, mais lire ce qui est écrit.",
                "Expliquer, étymologiquement, c'est déplier : rendre explicite ce que le texte contient de manière condensée. On définit les concepts, on reconstitue les étapes du raisonnement, on montre pourquoi l'auteur avance chaque idée et ce qu'elle apporte à sa thèse, on éclaire les exemples. L'explication doit rester au service du texte : le texte est l'objet, non un prétexte pour exposer ses connaissances.",
                "Trois défauts sont à éviter. La paraphrase répète le texte avec d'autres mots, sans l'expliquer. Le hors-texte part dans une dissertation générale sur le thème. Le catalogue relève des procédés ou des figures de style sans en montrer la fonction argumentative.",
              ],
              box: { label: "Règle", text: "Expliquer, c'est déplier le texte : définir ses concepts, reconstituer son argumentation, justifier chaque étape. Trois défauts : la paraphrase, le hors-texte, le catalogue de procédés." },
            },
            {
              heading: "Préparer : thèse, problème, structure",
              paragraphs: [
                "Lisez le texte plusieurs fois, crayon en main. Repérez la thèse, c'est-à-dire ce que l'auteur affirme et cherche à établir ; elle se trouve souvent au début ou à la fin, mais pas toujours. Cherchez la thèse adverse, l'opinion que l'auteur conteste, parfois annoncée par des formules comme « on croit souvent », « certains disent ». Formulez ensuite le problème : à quelle question le texte répond-il, et pourquoi cette question est-elle difficile ?",
                "Dégagez la structure : le texte se divise en moments (en général deux à quatre), chacun ayant une fonction (poser une thèse, réfuter une objection, donner un exemple, tirer une conséquence). Les connecteurs logiques sont des indices précieux : « mais », « or », « donc », « ainsi », « en effet », « car ». Donnez à chaque moment un titre qui dit ce qu'il fait, pas seulement de quoi il parle.",
                "Repérez enfin les concepts clés, à définir précisément, et les exemples, dont il faut montrer le rôle : illustrer une idée, servir de preuve, ou au contraire constituer un contre-exemple.",
              ],
              box: { label: "À retenir", text: "Avant de rédiger : la thèse (ce que l'auteur soutient), la thèse adverse (ce qu'il conteste), le problème (la question et sa difficulté), la structure (les moments et leur fonction), les concepts clés." },
            },
            {
              heading: "Rédiger l'explication",
              paragraphs: [
                "L'introduction présente le thème, formule le problème, énonce la thèse de l'auteur, indique l'enjeu, puis annonce la structure du texte, moment par moment. Elle n'a pas besoin de biographie de l'auteur.",
                "Le développement suit en général l'ordre du texte (explication linéaire), moment par moment. Pour chaque phrase importante, on cite brièvement le passage, on explique les termes, on reconstitue le raisonnement, on illustre par un exemple personnel si cela éclaire, et l'on montre comment la phrase prépare la suivante. On peut confronter le texte à d'autres auteurs, à condition que cela éclaire ce qu'il dit.",
                "Une réflexion sur l'intérêt du texte peut être intégrée au fil de l'explication ou placée en fin de développement : en quoi la thèse est-elle forte, quelles questions laisse-t-elle ouvertes, à quelle objection s'expose-t-elle ? La conclusion rappelle la thèse et la manière dont l'auteur l'a établie, et dit ce que le texte apporte à la compréhension du problème.",
              ],
              box: { label: "Repère", text: "Introduction : thème, problème, thèse, enjeu, structure. Développement : explication linéaire, moment par moment, citer et expliquer. Conclusion : rappel de la thèse et de l'intérêt du texte." },
            },
          ],
          keyPoints: [
            "La connaissance de la doctrine de l'auteur n'est pas requise : il faut comprendre le texte et son problème.",
            "Expliquer, c'est déplier : définir, reconstituer le raisonnement, justifier chaque étape.",
            "Thèse, thèse adverse, problème, structure : quatre repérages avant de rédiger.",
            "Les connecteurs (mais, or, donc, ainsi) révèlent les moments du texte.",
            "Explication linéaire : citer brièvement, expliquer, illustrer, enchaîner.",
            "Éviter la paraphrase, le hors-texte et le catalogue de procédés.",
          ],
          example: {
            statement: "Texte d'entraînement, rédigé pour l'exercice : « On dit volontiers que l'habitude nous enchaîne : à force de répéter les mêmes gestes, nous cesserions de choisir. Pourtant, celui qui doit réfléchir à chaque mouvement de ses doigts ne jouera jamais d'un instrument, et celui qui cherche chaque mot ne pourra rien dire de neuf. L'habitude libère l'esprit des tâches qu'elle prend en charge ; elle lui rend disponible l'attention que réclame l'imprévu. Elle ne devient une chaîne que lorsque nous oublions qu'elle a été acquise et que nous pourrions la défaire. » Dégagez la thèse, la thèse adverse, le problème et la structure.",
            solution: [
              "Thèse adverse : l'habitude nous enchaîne et supprime le choix (première phrase, introduite par « On dit volontiers »).",
              "Thèse de l'auteur : l'habitude est d'abord une condition de liberté, car elle libère l'attention ; elle ne devient une servitude que si l'on oublie qu'elle est acquise et révisable.",
              "Problème : l'habitude, qui automatise nos actes, nous prive-t-elle de liberté, ou au contraire la rend-elle possible ?",
              "Moment 1 (première phrase) : exposé de l'opinion commune sur l'habitude comme chaîne.",
              "Moment 2 (« Pourtant » jusqu'à « l'imprévu ») : réfutation par deux exemples (le musicien, la parole), puis généralisation : l'habitude libère l'esprit.",
              "Moment 3 (dernière phrase) : concession et condition ; l'habitude devient une chaîne quand on oublie qu'on pourrait la défaire. Le texte ne nie donc pas le danger de l'habitude, il le situe.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Texte d'entraînement : « Beaucoup pensent que la politesse n'est qu'hypocrisie, puisqu'elle oblige à sourire à ceux qu'on n'aime pas. Mais la politesse ne prétend pas exprimer nos sentiments : elle règle nos rapports avant que les sentiments s'en mêlent. » Quelle est la thèse adverse, et quelle est la thèse de l'auteur ?",
              hint: "Repérez la formule qui introduit l'opinion contestée, puis le connecteur qui marque le retournement.",
              solution: [
                "Thèse adverse, introduite par « Beaucoup pensent que » : la politesse n'est qu'hypocrisie, car elle fait mentir sur nos sentiments.",
                "Retournement : le connecteur « Mais » introduit la position de l'auteur.",
                "Thèse de l'auteur : la politesse n'a pas pour fonction d'exprimer les sentiments, mais de régler les relations entre les personnes ; on ne peut donc pas l'accuser de mentir sur ce qu'elle ne prétend pas dire.",
              ],
            },
            {
              level: 2,
              statement: "Reprenez le texte d'entraînement sur l'habitude (exemple corrigé de la leçon). Expliquez la phrase : « L'habitude libère l'esprit des tâches qu'elle prend en charge ; elle lui rend disponible l'attention que réclame l'imprévu. » Votre explication doit définir les termes, reconstituer le raisonnement et proposer un exemple personnel.",
              hint: "Demandez-vous ce qui se passerait si aucune de vos actions n'était habituelle : où irait votre attention ?",
              solution: [
                "Situer la phrase : elle généralise les deux exemples précédents (le musicien, la parole) et énonce la thèse positive du texte.",
                "Définir : l'habitude est une manière d'agir acquise par la répétition, qui finit par s'accomplir sans attention consciente ; l'attention est la capacité de l'esprit à se concentrer sur un objet.",
                "Reconstituer le raisonnement : notre attention est limitée ; si chaque geste exigeait une réflexion, elle serait entièrement absorbée par les tâches élémentaires. L'habitude prend en charge ces tâches et libère l'attention.",
                "Montrer le sens de « l'imprévu » : l'attention ainsi libérée peut se porter sur ce qui est nouveau, sur ce qui demande un vrai choix. L'habitude n'empêche donc pas la liberté, elle la rend possible.",
                "Exemple personnel : un conducteur expérimenté n'a plus à penser à l'embrayage ; il peut porter toute son attention sur un enfant qui traverse soudain la rue.",
                "Transition : la dernière phrase du texte nuance cette thèse, en montrant à quelle condition l'habitude devient une chaîne.",
              ],
            },
            {
              level: 3,
              statement: "Rédigez l'introduction complète d'une explication du texte sur l'habitude (exemple corrigé de la leçon), puis sa conclusion. L'introduction doit comporter le thème, le problème, la thèse, l'enjeu et l'annonce de la structure.",
              hint: "L'enjeu est ce qui dépend de la réponse : faut-il se méfier de toutes nos habitudes, ou apprendre à les cultiver ?",
              solution: [
                "Thème : le texte porte sur l'habitude, c'est-à-dire les manières d'agir que la répétition rend automatiques, et sur son rapport à la liberté.",
                "Problème : l'habitude semble nous enfermer dans la répétition et nous priver du choix ; mais sans habitudes, pourrions-nous seulement agir ? L'habitude est-elle une chaîne ou une condition de la liberté ?",
                "Thèse : l'auteur soutient que l'habitude libère l'esprit en prenant en charge les tâches répétitives, et qu'elle ne devient une servitude que lorsque nous oublions qu'elle est acquise et révisable.",
                "Enjeu : si l'habitude était toujours une chaîne, il faudrait s'en défaire ; si elle est une condition de liberté, il faut au contraire apprendre à former de bonnes habitudes et rester capable de les modifier. C'est notre rapport à l'éducation et à l'apprentissage qui est en jeu.",
                "Annonce de la structure : l'auteur expose d'abord l'opinion commune selon laquelle l'habitude nous enchaîne ; il la réfute ensuite par deux exemples, le musicien et la parole, avant de généraliser ; il indique enfin à quelle condition l'habitude devient une chaîne.",
                "Conclusion : par un renversement de l'opinion commune, l'auteur a montré que l'habitude, loin de s'opposer à la liberté, libère l'attention pour l'imprévu. Sa dernière phrase évite toutefois l'éloge naïf : la liberté consiste moins à refuser les habitudes qu'à garder conscience de leur caractère acquis. Le texte invite ainsi à penser la liberté comme une maîtrise de nos automatismes plutôt que comme leur absence.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? L'explication de texte.",
            statements: [
              { text: "Il faut connaître toute la doctrine de l'auteur pour réussir une explication de texte.", true: false, why: "Le sujet précise que cette connaissance n'est pas requise : il faut comprendre le texte et son problème." },
              { text: "Paraphraser, c'est répéter le texte avec d'autres mots sans l'expliquer.", true: true, why: "La paraphrase ne déplie pas le raisonnement et n'apporte rien au lecteur." },
              { text: "Les connecteurs logiques aident à repérer la structure du texte.", true: true, why: "« Mais », « or », « donc », « ainsi » marquent souvent le passage d'un moment à un autre." },
              { text: "L'introduction d'une explication commence par une biographie détaillée de l'auteur.", true: false, why: "Elle présente le thème, le problème, la thèse, l'enjeu et la structure ; la biographie n'est pas attendue." },
              { text: "Un exemple personnel peut éclairer une phrase du texte.", true: true, why: "Il est bienvenu s'il sert à faire comprendre l'idée expliquée." },
              { text: "Une explication réussie relève toutes les figures de style du texte.", true: false, why: "Un relevé de procédés sans fonction argumentative est un catalogue ; seule leur fonction compte." },
            ],
          },
          quiz: [
            {
              q: "Que signifie expliquer un texte ?",
              options: ["Le résumer en quelques lignes", "Le reformuler phrase par phrase avec d'autres mots, sans rien y ajouter", "Le déplier en rendant explicite son raisonnement", "Donner son avis sur le thème"],
              answer: 2,
              why: "Expliquer, c'est rendre explicite ce que le texte contient de manière condensée.",
            },
            {
              q: "Qu'appelle-t-on la thèse adverse ?",
              options: ["L'opinion que l'auteur conteste", "La thèse de l'auteur le plus célèbre", "La conclusion du texte", "La question posée par le sujet"],
              answer: 0,
              why: "Le texte s'oppose souvent à une opinion courante, qu'il faut identifier pour comprendre sa thèse.",
            },
            {
              q: "Quel connecteur annonce le plus souvent un retournement dans l'argumentation ?",
              options: ["Donc", "En effet", "Par exemple", "Mais"],
              answer: 3,
              why: "« Mais » ou « pourtant » introduisent une objection ou la position de l'auteur contre une opinion.",
            },
            {
              q: "Qu'est-ce que le hors-texte ?",
              options: ["Une citation trop courte", "Un développement général sur le thème qui s'éloigne du texte à expliquer", "Une référence à un autre auteur qui éclaire le texte", "La conclusion de l'explication"],
              answer: 1,
              why: "Le texte devient un prétexte ; la référence à un autre auteur est utile si elle éclaire le texte.",
            },
            {
              q: "Comment est généralement organisé le développement d'une explication ?",
              options: ["En trois parties thèse, antithèse, synthèse", "Par ordre alphabétique des concepts", "En suivant l'ordre du texte, moment par moment", "Par une liste d'objections adressées à l'auteur, classées de la plus faible à la plus forte"],
              answer: 2,
              why: "L'explication linéaire suit les moments du texte pour en reconstituer la progression.",
            },
          ],
          trap: "Paraphraser le texte phrase après phrase (« l'auteur dit que... puis il dit que... ») sans jamais définir les termes ni montrer pourquoi l'auteur avance chaque idée.",
          method: "Pour chaque phrase importante, posez-vous trois questions : que veut dire ce mot ? pourquoi l'auteur dit-il cela ici ? qu'est-ce que cela prépare ? Les réponses forment l'explication.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'mobiliser-ses-references',
          title: 'Mobiliser auteurs, exemples et repères à bon escient',
          minutes: 30,
          objectives: [
            "Utiliser une référence philosophique au service d'un argument, en l'expliquant.",
            "Choisir et analyser des exemples variés, en distinguant exemple et preuve.",
            "Mobiliser les repères du programme pour préciser une analyse.",
            "Constituer un carnet de références organisé par notions.",
          ],
          course: [
            {
              heading: "Une référence sert un argument",
              paragraphs: [
                "Une référence à un auteur n'est pas un argument d'autorité : ce n'est pas parce que Kant l'a dit que c'est vrai. Elle sert à appuyer, préciser ou discuter une idée que vous développez. Une référence mal utilisée se réduit à un nom posé dans la copie (« comme l'a dit Descartes ») sans explication ; le correcteur n'y voit qu'un étalage de connaissances.",
                "Une référence bien utilisée suit trois temps. On l'introduit au moment où elle est utile (l'auteur, l'œuvre si possible, l'idée) ; on l'explique avec ses propres mots, en définissant les concepts ; on montre ce qu'elle apporte à l'argument et, le cas échéant, ses limites. Une seule référence bien exploitée vaut mieux que cinq noms cités.",
                "Les citations exactes ne sont pas obligatoires. Si vous n'êtes pas sûr des mots, reformulez l'idée en nommant l'auteur : une paraphrase fidèle est préférable à une citation déformée.",
              ],
              box: { label: "Règle", text: "Une référence en trois temps : 1) l'introduire au bon moment (auteur, œuvre, idée) ; 2) l'expliquer avec ses mots ; 3) montrer ce qu'elle apporte à l'argument. Mieux vaut paraphraser fidèlement que citer de travers." },
            },
            {
              heading: "Choisir et analyser des exemples",
              paragraphs: [
                "Un exemple n'est pas une preuve : un cas particulier peut illustrer une idée générale, mais il ne suffit pas à l'établir. En revanche, un seul contre-exemple suffit à réfuter une affirmation universelle. Distinguer exemple et preuve, l'un des repères du programme, permet d'utiliser les exemples avec rigueur.",
                "On distingue l'exemple illustratif, qui rend une idée concrète, et l'exemple d'analyse, que l'on examine pour en tirer une idée ou faire apparaître un problème. Le second est plus précieux : partir de la situation d'un élève qui hésite entre deux devoirs, comme le fait Sartre, permet de construire la réflexion au lieu de la décorer.",
                "Variez les sources : la vie quotidienne, l'histoire (Rosa Parks en 1955, l'abolition de l'esclavage), les sciences (Semmelweis, l'éclipse de 1919), la littérature et les arts (Antigone, Le Meilleur des mondes). Un exemple doit toujours être analysé : dites précisément ce qu'il montre et en quoi il fait avancer l'argument.",
              ],
              box: { label: "Repère", text: "Exemple et preuve : un exemple illustre sans démontrer ; un contre-exemple suffit à réfuter une affirmation universelle." },
            },
            {
              heading: "Mobiliser les repères",
              paragraphs: [
                "Le programme fixe une liste de repères, c'est-à-dire de couples de concepts qui permettent de distinguer pour penser : absolu et relatif, croire et savoir, en fait et en droit, légal et légitime, obligation et contrainte, origine et fondement, persuader et convaincre, universel, général, particulier et singulier, entre autres. Ils ne s'apprennent pas comme une liste de définitions, mais comme des outils d'analyse.",
                "Un repère bien employé fait souvent apparaître un problème. Distinguer en fait et en droit permet de répondre à l'argument « tout le monde le fait » : que beaucoup trichent ne prouve pas qu'on ait le droit de tricher. Distinguer origine et fondement permet de montrer que l'histoire de la naissance d'une institution ne dit pas ce qui la rend légitime. Distinguer persuader (agir sur les sentiments) et convaincre (s'adresser à la raison) éclaire la différence entre la publicité et la démonstration.",
                "Au brouillon, demandez-vous systématiquement quels repères concernent le sujet. Dans « Peut-on désobéir aux lois ? », légal et légitime, obligation et contrainte, en fait et en droit sont immédiatement utiles.",
              ],
            },
            {
              heading: "Constituer son carnet de références",
              paragraphs: [
                "Pour chaque notion du programme, préparez une fiche qui rassemble deux ou trois auteurs avec leur thèse résumée en une phrase, l'œuvre et sa date, un ou deux exemples analysés, et les repères utiles. Par exemple, pour la liberté : Spinoza (illusion du libre arbitre, Éthique, 1677), Rousseau (obéissance à la loi qu'on s'est prescrite, Du contrat social, 1762), Sartre (condamné à être libre, 1946), et l'exemple du choix de l'élève de Sartre.",
                "Reliez les notions entre elles : la liberté rejoint le devoir (autonomie chez Kant), l'État (liberté civile chez Rousseau), le travail (libération par le travail chez Hegel). Un même auteur peut servir dans plusieurs dissertations si on l'a bien compris.",
                "Révisez activement : reformulez chaque thèse sans regarder la fiche, inventez un exemple nouveau pour chaque idée, entraînez-vous à rédiger un paragraphe argumentatif en dix minutes avec une référence et un exemple.",
              ],
              box: { label: "À retenir", text: "Fiche par notion : deux ou trois auteurs (thèse, œuvre, date), un ou deux exemples analysés, les repères utiles, et les liens vers les autres notions." },
            },
          ],
          keyPoints: [
            "Une référence n'est pas un argument d'autorité : elle doit être expliquée et servir l'argument.",
            "Introduire, expliquer, exploiter : les trois temps d'une référence.",
            "Mieux vaut une paraphrase fidèle qu'une citation inexacte.",
            "Un exemple illustre sans prouver ; un contre-exemple suffit à réfuter une thèse universelle.",
            "Les repères (en fait et en droit, origine et fondement...) font apparaître les problèmes.",
            "Un carnet par notion : auteurs, œuvres, dates, exemples, repères, liens entre notions.",
          ],
          example: {
            statement: "Améliorez ce passage de copie : « Le bonheur n'est pas facile à atteindre. Comme le dit Kant, le bonheur est un idéal de l'imagination. Donc on ne peut pas être heureux. »",
            solution: [
              "Diagnostic : la référence est posée sans explication, et la conclusion dépasse ce que dit Kant (il ne dit pas qu'on ne peut pas être heureux).",
              "Introduire la référence au bon moment : « Kant, dans les Fondements de la métaphysique des mœurs (1785), propose une explication de cette difficulté. »",
              "L'expliquer : « Il affirme que le bonheur est un idéal non de la raison mais de l'imagination : chacun le désire, mais personne ne peut dire avec certitude ce qu'il veut, car le bonheur dépend de désirs changeants et de l'expérience. »",
              "L'illustrer : « Celui qui souhaite la richesse peut y trouver des soucis et des jalousies qu'il n'avait pas prévus. »",
              "L'exploiter avec justesse : « Il ne s'ensuit pas qu'on ne puisse être heureux, mais que le bonheur ne peut pas être défini par une règle universelle ; c'est pourquoi Kant refuse d'en faire le fondement de la morale. »",
              "Résultat : la référence n'est plus un nom, mais un argument expliqué, illustré et correctement interprété.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez quel repère du programme permet de répondre à chaque affirmation : 1) « Tout le monde ment un peu, donc mentir est permis. » 2) « Cette publicité m'a convaincu, elle était très émouvante. » 3) « Cet État est né d'une conquête, donc il ne sera jamais légitime. » 4) « J'ai vu trois chats noirs porter malheur, c'est bien la preuve qu'ils portent malheur. »",
              hint: "Cherchez chaque fois la confusion : entre un fait et un droit, entre émouvoir et raisonner, entre naissance et légitimité, entre cas et démonstration.",
              solution: [
                "1) En fait et en droit : que beaucoup mentent est un fait ; cela ne prouve pas qu'on en ait le droit.",
                "2) Persuader et convaincre : la publicité a persuadé, en agissant sur les émotions ; convaincre supposerait des raisons s'adressant à l'intelligence.",
                "3) Origine et fondement : l'origine historique d'un État ne dit pas ce qui fonde sa légitimité aujourd'hui (le consentement, le respect des droits).",
                "4) Exemple et preuve : quelques cas ne prouvent pas une loi générale ; en outre, on oublie tous les cas où rien ne s'est produit.",
              ],
            },
            {
              level: 2,
              statement: "Transformez cette phrase de copie en un paragraphe argumentatif d'une dizaine de lignes, avec une référence expliquée et un exemple analysé : « La technique nous rend dépendants, comme le dit Rousseau. »",
              hint: "Introduisez l'œuvre et l'idée exacte de Rousseau, expliquez-la, puis trouvez un exemple actuel qui la vérifie et que vous analysez.",
              solution: [
                "Idée directrice : la technique, qui devait nous libérer de la nécessité, crée de nouvelles dépendances.",
                "Référence introduite : Rousseau, dans le Discours sur l'origine de l'inégalité (1755), observe que les commodités inventées par les hommes deviennent peu à peu des besoins.",
                "Explication : une commodité est d'abord un confort supplémentaire ; mais, à force d'habitude, on ne sait plus s'en passer. On souffre alors de la perdre sans être plus heureux de la posséder.",
                "Exemple analysé : le téléphone portable était un confort il y a trente ans ; il est devenu indispensable pour s'informer, payer, voyager. Une panne de batterie suffit à provoquer de l'inquiétude, ce qui montre que la commodité est devenue un besoin.",
                "Exploitation : la technique accroît notre puissance, mais elle multiplie aussi nos besoins ; elle ne libère donc pas automatiquement. Ce constat invite à examiner à quelles conditions elle peut rester un moyen au service de nos fins.",
              ],
            },
            {
              level: 3,
              statement: "Pour le sujet de dissertation « Avons-nous le devoir de désobéir aux lois injustes ? », rédigez au brouillon la liste des références et des exemples que vous mobiliseriez, en indiquant pour chacun la partie et l'idée qu'il sert, puis les repères utiles.",
              hint: "Classez vos ressources selon un plan progressif : la valeur de la loi, les lois injustes, les conditions d'une désobéissance légitime.",
              solution: [
                "Repères utiles : légal et légitime, obligation et contrainte, en fait et en droit.",
                "Partie 1, valeur de l'obéissance aux lois : Socrate dans le Criton (respect des Lois d'Athènes) ; Hobbes (sans loi commune, retour à la guerre de chacun contre chacun) ; exemple de la sécurité que garantissent les règles du code de la route.",
                "Partie 2, une loi peut être injuste : Antigone (les lois non écrites contre le décret de Créon) ; Pascal (« Plaisante justice qu'une rivière borne ») ; exemples du Code noir (1685), des lois de Nuremberg (1935) et de la ségrégation aux États-Unis.",
                "Partie 2, idée d'un devoir de désobéir : Arendt (Eichmann à Jérusalem, 1963 : obéir ne dispense pas de juger) ; Locke (droit de résistance quand le pouvoir viole les droits naturels).",
                "Partie 3, conditions d'une désobéissance légitime : Thoreau (La Désobéissance civile, 1849), Gandhi et Martin Luther King (désobéissance publique, non violente, sanction acceptée) ; exemple de Rosa Parks (1955) ; Aristote (l'équité corrige la loi).",
                "Bilan : chaque référence est rattachée à une idée précise ; on évite ainsi le catalogue et l'on sait où chaque exemple sera analysé.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque repère du programme à l'exemple qui l'illustre.",
            pairs: [
              { left: "En fait / en droit", right: "Beaucoup trichent, mais cela ne donne à personne le droit de tricher." },
              { left: "Origine / fondement", right: "Un État né d'une conquête peut tirer sa légitimité actuelle du consentement des citoyens." },
              { left: "Persuader / convaincre", right: "Une publicité émeut ; une démonstration s'adresse à la raison." },
              { left: "Exemple / preuve", right: "Un cygne blanc illustre une généralisation sans l'établir." },
              { left: "Obligation / contrainte", right: "On peut manquer à une promesse, pas échapper à la pesanteur." },
              { left: "Légal / légitime", right: "Rosa Parks enfreint une loi de ségrégation au nom de l'égale dignité." },
            ],
          },
          quiz: [
            {
              q: "Pourquoi une référence ne doit-elle pas être un argument d'autorité ?",
              options: ["Parce que les auteurs se trompent toujours", "Parce que les correcteurs n'aiment pas voir de noms propres dans une copie de philosophie", "Parce qu'une idée n'est pas vraie du seul fait qu'un auteur l'a soutenue", "Parce qu'il est interdit de citer au bac"],
              answer: 2,
              why: "La référence doit être expliquée et discutée : c'est l'argument qui convainc, non le nom de l'auteur.",
            },
            {
              q: "Que faire si l'on n'est pas sûr des mots exacts d'une citation ?",
              options: ["Reformuler fidèlement l'idée en nommant l'auteur", "La reconstituer approximativement et la placer quand même entre guillemets", "Renoncer à la référence", "L'attribuer à un autre auteur"],
              answer: 0,
              why: "Une paraphrase fidèle et attribuée vaut mieux qu'une citation inexacte.",
            },
            {
              q: "Que montre un contre-exemple face à une affirmation universelle ?",
              options: ["Rien, car un seul cas ne compte pas", "Qu'il faut chercher d'autres exemples favorables pour compenser ce cas isolé et sans importance", "Qu'elle est vraie dans la plupart des cas", "Qu'elle est fausse, au moins sous cette forme universelle"],
              answer: 3,
              why: "Un seul cas contraire suffit à réfuter « tous les A sont B ».",
            },
            {
              q: "Quel repère permet de répondre à « Ce pouvoir est né par la force, il ne sera donc jamais légitime » ?",
              options: ["Abstrait et concret", "Origine et fondement", "Intuitif et discursif", "Médiat et immédiat"],
              answer: 1,
              why: "L'origine historique d'une institution ne dit pas ce qui la fonde en droit.",
            },
            {
              q: "Qu'est-ce qu'un exemple d'analyse ?",
              options: ["Un exemple placé en conclusion", "Un exemple qui sert seulement à décorer la copie", "Un exemple que l'on examine pour en tirer une idée ou faire apparaître un problème", "Un exemple tiré obligatoirement de l'histoire"],
              answer: 2,
              why: "Il fait avancer la réflexion au lieu de simplement l'illustrer.",
            },
          ],
          trap: "Accumuler des noms d'auteurs (« comme le disent Platon, Kant et Sartre ») sans expliquer ce qu'ils pensent ni pourquoi cela répond au sujet : c'est le name dropping, sanctionné comme un catalogue.",
          method: "Après chaque référence ou exemple, écrivez une phrase qui commence par « Cela montre que... » et relie explicitement l'idée au sujet : si vous ne pouvez pas l'écrire, la référence est mal choisie.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'gerer-les-quatre-heures',
          title: 'Gérer les quatre heures de l\'épreuve',
          minutes: 25,
          objectives: [
            "Choisir son sujet de manière réfléchie parmi les trois proposés.",
            "Planifier les quatre heures de l'épreuve entre brouillon, rédaction et relecture.",
            "Adapter sa stratégie en cas de retard pour rendre une copie complète.",
            "Relire efficacement sa copie (sens, transitions, langue).",
          ],
          course: [
            {
              heading: "Choisir son sujet",
              paragraphs: [
                "L'épreuve de philosophie dure quatre heures ; dans la voie générale, elle est affectée d'un coefficient 8. Les trois sujets sont distribués en même temps : lisez-les tous attentivement avant de choisir. Prenez dix à quinze minutes pour cela : un mauvais choix fait perdre bien plus de temps qu'il n'en fait gagner.",
                "Pour chaque sujet de dissertation, notez rapidement les notions concernées, les sens des termes, une tension possible, et les références et exemples qui vous viennent. Pour l'explication de texte, vérifiez que vous comprenez la thèse et la structure. Choisissez le sujet pour lequel vous voyez un problème et un parcours, et non celui sur lequel vous avez le plus de cours à réciter : c'est le meilleur moyen d'éviter le hors-sujet.",
                "Une fois le choix fait, ne revenez pas en arrière, sauf si, dans le premier quart d'heure de travail, vous constatez que vous ne comprenez pas le sujet. Changer de sujet après une heure est presque toujours une erreur.",
              ],
              box: { label: "Règle", text: "Lire les trois sujets, noter pour chacun un problème possible et quelques ressources, choisir celui où l'on voit un parcours argumenté, puis s'y tenir." },
            },
            {
              heading: "Répartir le temps",
              paragraphs: [
                "Une répartition équilibrée, pour une épreuve de 240 minutes, peut être la suivante : 15 minutes pour lire les sujets et choisir ; 1 h 15 (75 minutes) pour le travail au brouillon (analyse, problème, plan détaillé avec arguments, exemples et références) ; 15 minutes pour rédiger l'introduction au brouillon ; 1 h 55 (115 minutes) pour rédiger la copie au propre ; 20 minutes pour relire. Le total fait bien 15 + 75 + 15 + 115 + 20 = 240 minutes.",
                "Ne rédigez pas tout le développement au brouillon : vous n'auriez pas le temps de le recopier. Rédigez au brouillon l'introduction, qui est décisive, et éventuellement les grandes lignes de la conclusion ; pour le reste, un plan détaillé suffit.",
                "Pendant la rédaction, surveillez l'heure à des moments fixés à l'avance : par exemple, la première partie doit être terminée vers le milieu du temps de rédaction, la deuxième partie aux deux tiers environ. Prévoyez des parties de longueur comparable : une première partie trop longue se paie toujours à la fin.",
              ],
              box: { label: "Repère", text: "15 min de choix, 1 h 15 de brouillon, 15 min d'introduction, 1 h 55 de rédaction, 20 min de relecture : 240 minutes au total." },
            },
            {
              heading: "En cas de retard, et la relecture",
              paragraphs: [
                "Si vous prenez du retard, ne sacrifiez ni la dernière partie ni la conclusion : une copie complète, même avec une troisième partie plus brève, vaut mieux qu'une copie inachevée. Resserrez les développements restants autour de l'idée directrice, d'un argument et d'un exemple. La conclusion, même courte, doit répondre à la question.",
                "Écrivez lisiblement, sautez une ligne entre l'introduction, les parties et la conclusion, et faites un alinéa à chaque paragraphe. Le correcteur doit voir la structure de votre argumentation d'un coup d'œil.",
                "La relecture vise trois choses : la cohérence (le plan annoncé est-il bien celui suivi ? la conclusion répond-elle au problème ?), les transitions (chaque passage d'une partie à l'autre est-il justifié ?) et la langue (accords, conjugaisons, mots oubliés, ponctuation). Relisez en vous mettant à la place du correcteur.",
              ],
              box: { label: "À retenir", text: "En cas de retard : terminer toutes les parties, même brièvement, et toujours conclure. Relecture : cohérence du plan, transitions, langue." },
            },
          ],
          keyPoints: [
            "Quatre heures, coefficient 8 dans la voie générale, trois sujets au choix.",
            "Lire les trois sujets et choisir celui où l'on voit un problème, puis s'y tenir.",
            "Repère : 15 min de choix, 1 h 15 de brouillon, 15 min d'introduction, 1 h 55 de rédaction, 20 min de relecture.",
            "Rédiger l'introduction au brouillon ; le reste en plan détaillé.",
            "En cas de retard : toutes les parties, même brèves, et une conclusion.",
            "Relire : cohérence du plan, transitions, orthographe.",
          ],
          example: {
            statement: "L'épreuve commence à 8 h 00 et se termine à 12 h 00. En suivant la répartition du cours (15 min, 1 h 15, 15 min, 1 h 55, 20 min), indiquez l'heure à laquelle chaque étape doit être terminée.",
            solution: [
              "Choix du sujet : 8 h 00 + 15 min = 8 h 15.",
              "Travail au brouillon : 8 h 15 + 1 h 15 = 9 h 30.",
              "Introduction au brouillon : 9 h 30 + 15 min = 9 h 45.",
              "Rédaction au propre : 9 h 45 + 1 h 55 = 11 h 40.",
              "Relecture : 11 h 40 + 20 min = 12 h 00.",
              "Vérification : 15 + 75 + 15 + 115 + 20 = 240 minutes, soit exactement 4 heures.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une épreuve dure 4 heures. Un candidat prévoit 10 minutes pour choisir son sujet, 1 h 20 de brouillon, 20 minutes pour l'introduction et 15 minutes de relecture. Combien de temps lui reste-t-il pour rédiger au propre ? Ce temps vous paraît-il suffisant ?",
              hint: "Convertissez tout en minutes : 4 heures font 240 minutes.",
              solution: [
                "Conversion : 4 h = 240 min ; 1 h 20 = 80 min.",
                "Temps déjà prévu : 10 + 80 + 20 + 15 = 125 min.",
                "Temps de rédaction : 240 - 125 = 115 min, soit 1 h 55.",
                "Appréciation : c'est la même durée que dans la répartition du cours ; elle est suffisante pour rédiger une introduction, trois parties et une conclusion, à condition que le plan détaillé soit prêt.",
                "Résultat : il reste 1 h 55 de rédaction.",
              ],
            },
            {
              level: 2,
              statement: "Il est 10 h 50, l'épreuve se termine à 12 h 00. Un candidat vient de terminer sa première partie ; il lui reste deux parties et la conclusion à rédiger. Il veut garder 10 minutes de relecture et consacrer 10 minutes à la conclusion. Combien de temps peut-il consacrer à chacune des deux parties restantes ? Que doit-il faire pour les tenir ?",
              hint: "Calculez le temps total restant, retirez la relecture et la conclusion, puis partagez le reste.",
              solution: [
                "Temps restant : de 10 h 50 à 12 h 00, il reste 70 minutes.",
                "On retire la relecture et la conclusion : 70 - 10 - 10 = 50 minutes.",
                "Partage entre deux parties : 50 ÷ 2 = 25 minutes par partie.",
                "Stratégie : pour chaque partie, rédiger l'idée directrice, un ou deux arguments et un exemple analysé, sans chercher à tout développer.",
                "Repères horaires : deuxième partie terminée à 11 h 15, troisième à 11 h 40, conclusion à 11 h 50, relecture jusqu'à 12 h 00.",
                "Résultat : 25 minutes par partie ; la copie sera complète et se terminera par une conclusion qui répond à la question.",
              ],
            },
            {
              level: 3,
              statement: "Simulation d'épreuve (type bac). Trois sujets sont proposés : 1) « La technique peut-elle nous rendre plus humains ? » 2) « Faut-il toujours dire la vérité ? » 3) une explication d'un texte sur la justice. En 15 minutes, notez pour les deux dissertations un problème possible et deux ressources (auteur ou exemple), choisissez un sujet en justifiant votre choix, puis rédigez en 1 h 15 le plan détaillé du sujet 2.",
              hint: "Pour le sujet 2, « faut-il » interroge le devoir, et « toujours » appelle l'examen des exceptions possibles.",
              solution: [
                "Sujet 1 : problème possible, la technique semble nous éloigner de la nature et de nous-mêmes, mais n'est-elle pas ce qui distingue l'homme ? Ressources : le mythe de Prométhée dans le Protagoras, Heidegger (La Question de la technique, 1953).",
                "Sujet 2 : problème possible, la sincérité paraît un devoir absolu, mais dire la vérité peut parfois nuire gravement à autrui ; le devoir de vérité admet-il des exceptions ? Ressources : Kant et la controverse avec Benjamin Constant (1797), l'utilitarisme de Mill.",
                "Choix justifié : le sujet 2, car la tension entre devoir et conséquences est nette et les références sont précises.",
                "Partie 1 : dire la vérité est un devoir. Argument : le mensonge ne peut être universalisé sans détruire la confiance ; il traite autrui comme un simple moyen. Exemple : la promesse mensongère. Référence : Kant (Fondements de la métaphysique des mœurs, 1785).",
                "Partie 2 : mais dire toujours la vérité peut être cruel ou dangereux. Argument : les conséquences d'une vérité peuvent être désastreuses. Exemple : le cas de l'assassin qui demande où se cache un ami, objecté par Constant à Kant. Référence : l'utilitarisme (le plus grand bonheur du plus grand nombre).",
                "Partie 3 : le devoir de vérité ne se confond pas avec l'obligation de tout dire. Argument : on peut ne pas mentir sans tout révéler (le silence, la discrétion) ; la vérité doit être due à ceux qui y ont droit. Exemple : le secret médical, la délicatesse dans l'annonce d'une mauvaise nouvelle. Repère : obligation et contrainte, en fait et en droit.",
                "Conclusion prévue : il faut toujours refuser le mensonge qui manipule autrui, mais dire la vérité n'oblige pas à tout dire à n'importe qui ; la vérité est un devoir envers la personne, non une contrainte mécanique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'épreuve, de 8 h 00 à 12 h 00.",
            items: [
              "8 h 00 : lire les trois sujets",
              "8 h 15 : sujet choisi, début de l'analyse au brouillon",
              "9 h 30 : plan détaillé terminé",
              "9 h 45 : introduction rédigée au brouillon",
              "11 h 40 : rédaction au propre terminée",
              "12 h 00 : relecture achevée, copie rendue",
            ],
          },
          quiz: [
            {
              q: "Quelle est la durée de l'épreuve écrite de philosophie ?",
              options: ["Deux heures", "Trois heures", "Quatre heures", "Cinq heures et demie"],
              answer: 2,
              why: "L'épreuve dure quatre heures ; il faut répartir ce temps entre brouillon, rédaction et relecture.",
            },
            {
              q: "Sur quel critère choisir son sujet ?",
              options: ["Celui sur lequel on a le plus de cours à réciter", "Celui pour lequel on voit un problème et un parcours argumenté", "Toujours l'explication de texte", "Le premier sujet de la liste"],
              answer: 1,
              why: "Avoir beaucoup de cours sur une notion expose au hors-sujet ; voir un problème garantit une vraie réflexion.",
            },
            {
              q: "Que faut-il rédiger entièrement au brouillon ?",
              options: ["L'introduction", "Toute la copie", "Rien du tout", "Seulement la troisième partie"],
              answer: 0,
              why: "L'introduction est décisive ; le reste peut se contenter d'un plan détaillé, faute de temps pour tout recopier.",
            },
            {
              q: "Que faire en cas de retard important pendant la rédaction ?",
              options: ["Abandonner la troisième partie et la conclusion pour soigner davantage les deux premières", "Changer de sujet", "Recopier le brouillon tel quel", "Resserrer les parties restantes et toujours rédiger une conclusion"],
              answer: 3,
              why: "Une copie complète, même avec des parties plus brèves, vaut mieux qu'une copie inachevée.",
            },
            {
              q: "Que vérifie-t-on en priorité lors de la relecture ?",
              options: ["Uniquement l'écriture", "La cohérence du plan, les transitions et la langue", "Le nombre de pages", "Le nombre de citations et de noms d'auteurs présents dans chaque partie de la copie"],
              answer: 1,
              why: "La relecture vérifie que le plan annoncé est suivi, que les parties s'enchaînent et que la langue est correcte.",
            },
          ],
          trap: "Passer trop de temps sur la première partie, puis bâcler ou abandonner la troisième et la conclusion : le correcteur sanctionne une copie inachevée bien plus qu'une copie équilibrée et plus brève.",
          method: "Avant le jour de l'épreuve, faites au moins une simulation complète de quatre heures en notant l'heure réelle de fin de chaque étape : vous saurez ainsi où vous perdez du temps et vous ajusterez votre répartition.",
        },
      ],
    },
  ],
}
