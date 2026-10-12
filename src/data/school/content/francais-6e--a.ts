import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-6e',
  chapters: [
    {
      id: 'lire-ecrire-dire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'comprendre-un-texte',
          title: 'Lire et comprendre un texte : les bonnes questions à se poser',
          minutes: 25,
          objectives: [
            "Identifier les informations essentielles d'un texte : qui, quoi, où, quand, pourquoi.",
            "Comprendre un mot inconnu grâce au contexte et à sa famille de mots.",
            "Formuler des inférences à partir des indices donnés par le texte.",
            "Reformuler un texte avec vos propres mots et justifier une réponse en citant le texte.",
          ],
          course: [
            {
              heading: "Avant de lire : observer le texte",
              paragraphs: [
                "Comprendre un texte commence avant même la première ligne. Regardez d'abord le titre, le nom de l'auteur, la date, la source et les éventuelles illustrations. Demandez-vous aussi de quel genre de texte il s'agit : un récit qui raconte une histoire, un poème écrit en vers, une scène de théâtre avec des répliques, ou un texte documentaire qui donne des informations.",
                "Ces indices vous permettent de faire des hypothèses : de quoi le texte va-t-il parler ? Un titre comme « La tempête » annonce sans doute une scène agitée en mer ou dans la nature. Pendant la lecture, vous vérifiez si vos hypothèses étaient justes ou si le texte vous surprend.",
              ],
            },
            {
              heading: "Pendant la lecture : les cinq questions essentielles",
              paragraphs: [
                "Pour suivre une histoire, posez-vous cinq questions simples. Qui ? (les personnages : qui parle, qui agit). Quoi ? (ce qui se passe : les actions, les événements). Où ? (le lieu). Quand ? (le moment : l'époque, la saison, l'heure). Pourquoi ou comment ? (les causes, les intentions des personnages, la manière dont les choses arrivent).",
                "Si vous ne pouvez pas répondre à l'une de ces questions, relisez le passage concerné, lentement. Lire, ce n'est pas avancer le plus vite possible : un bon lecteur revient en arrière dès qu'il sent qu'il a perdu le fil. Il est aussi utile de repérer qui raconte l'histoire : un personnage qui dit « je », ou un narrateur extérieur qui dit « il » ou « elle ».",
              ],
              box: { label: "Repère", text: "Qui ? Quoi ? Où ? Quand ? Pourquoi ou comment ? Ces cinq questions permettent de vérifier que vous avez compris l'essentiel d'un récit. Si une réponse vous manque, relisez le passage." },
            },
            {
              heading: "Comprendre un mot inconnu",
              paragraphs: [
                "Quand un mot vous arrête, ne sautez pas tout de suite au dictionnaire. Observez d'abord le contexte, c'est-à-dire les mots et les phrases qui l'entourent. Dans la phrase « Le chevalier brandit son épée au-dessus de sa tête et cria », on devine que « brandir » signifie lever une arme en l'agitant, pour menacer ou pour montrer sa force.",
                "Vous pouvez aussi chercher un mot de la même famille que vous connaissez déjà. « Inoubliable » contient « oublier » : c'est ce qu'on ne peut pas oublier. Si le sens reste obscur, ouvrez le dictionnaire et choisissez, parmi les sens proposés, celui qui convient à la phrase du texte.",
              ],
            },
            {
              heading: "Lire entre les lignes : l'inférence",
              paragraphs: [
                "Un texte ne dit pas tout. L'auteur laisse au lecteur des indices, et c'est à lui de les relier pour comprendre ce qui n'est pas écrit. On appelle cela faire une inférence. Par exemple : « Léa referma son parapluie ruisselant et secoua ses bottes couvertes de boue. » Le texte ne dit pas qu'il pleut, ni que Léa rentre de dehors, mais les indices le montrent clairement.",
                "Une inférence doit toujours s'appuyer sur le texte. Ce n'est pas une invention : vous devez pouvoir montrer les mots qui vous ont mis sur la piste. On ne peut pas déduire de cette phrase que Léa est en colère, car aucun indice ne le suggère.",
              ],
              box: { label: "Définition", text: "Faire une inférence, c'est comprendre une information qui n'est pas écrite directement, en reliant des indices présents dans le texte à ce que l'on sait déjà." },
            },
            {
              heading: "Après la lecture : reformuler et justifier",
              paragraphs: [
                "Pour vérifier que vous avez compris, essayez de raconter le texte en deux ou trois phrases, avec vos propres mots, sans le regarder. Si vous y arrivez, l'essentiel est compris. Si vous bloquez, c'est le signe qu'un passage vous a échappé.",
                "Quand on vous pose une question sur un texte, justifiez toujours votre réponse : donnez votre idée, puis citez les mots du texte qui la prouvent, entre guillemets. Par exemple : « Léa vient de l'extérieur, car son parapluie est ‹ ruisselant › et ses bottes sont ‹ couvertes de boue ›. »",
              ],
            },
          ],
          keyPoints: [
            "Avant de lire : observer le titre, l'auteur, le genre et les illustrations pour faire des hypothèses.",
            "Pendant la lecture : se demander qui, quoi, où, quand, pourquoi ou comment.",
            "Un mot inconnu s'éclaire souvent par le contexte ou par un mot de sa famille ; sinon, le dictionnaire.",
            "Faire une inférence : comprendre ce qui n'est pas écrit en reliant des indices du texte.",
            "Reformuler le texte avec ses propres mots permet de vérifier sa compréhension.",
            "Une réponse se justifie toujours par une citation du texte, entre guillemets.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « Ce soir-là, Malik attendait devant la fenêtre depuis une heure. Chaque fois qu'une voiture ralentissait dans la rue, il collait son nez à la vitre. Sur la table, le gâteau au chocolat portait onze bougies encore éteintes. » Répondez aux cinq questions essentielles, puis dites ce qu'attend Malik, en justifiant.",
            solution: [
              "Qui ? Le personnage principal est Malik.",
              "Quoi ? Il attend devant la fenêtre et guette les voitures.",
              "Où ? Dans une maison ou un appartement, devant une fenêtre qui donne sur la rue.",
              "Quand ? Le soir (« Ce soir-là »), depuis une heure.",
              "Inférence : on peut comprendre que c'est l'anniversaire de Malik, car il y a un gâteau avec « onze bougies », et qu'il attend l'arrivée de quelqu'un en voiture, car il colle son nez à la vitre « chaque fois qu'une voiture ralentissait ».",
              "Réponse : Malik attend sans doute un invité (un proche) pour fêter ses onze ans. Le texte ne le dit pas directement : ce sont les indices du gâteau, des bougies éteintes et des voitures qui le montrent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Texte écrit pour l'exercice : « En juillet, Inès et son grand-père partirent pêcher sur le lac, très tôt, avant le lever du soleil. Ils voulaient attraper une carpe pour le repas du soir. » Répondez aux questions : Qui ? Quoi ? Où ? Quand ? Pourquoi ?",
              hint: "Cherchez chaque réponse dans le texte et soulignez-la avant de l'écrire. Une même phrase peut répondre à plusieurs questions.",
              solution: [
                "Qui ? Inès et son grand-père.",
                "Quoi ? Ils partent pêcher.",
                "Où ? Sur le lac.",
                "Quand ? En juillet, très tôt le matin, avant le lever du soleil.",
                "Pourquoi ? Pour attraper une carpe qu'ils mangeront au repas du soir.",
              ],
            },
            {
              level: 2,
              statement: "Texte écrit pour l'exercice : « Le vieux marin scruta l'horizon pendant de longues minutes, la main au-dessus des yeux. Puis il se tourna vers l'équipage, le visage grave : il fallait rentrer au port avant la nuit. » a) Que signifie le verbe « scruter » ? Expliquez comment vous l'avez deviné. b) Pourquoi, d'après vous, le marin veut-il rentrer au port ? Justifiez votre réponse.",
              hint: "Pour a), observez le geste qui accompagne le verbe et la durée de l'action. Pour b), demandez-vous ce que le marin a pu voir à l'horizon et ce que montre son visage.",
              solution: [
                "a) « Scruter » signifie regarder très attentivement, examiner en détail. Le contexte le montre : le marin regarde « pendant de longues minutes », avec « la main au-dessus des yeux », comme quelqu'un qui cherche à voir loin.",
                "b) On peut supposer que le marin a vu un danger à l'horizon, par exemple une tempête qui approche. Le texte ne le dit pas, mais deux indices le suggèrent : son « visage grave », qui montre l'inquiétude, et sa décision de rentrer « avant la nuit ».",
                "Remarque : votre réponse b) est une inférence. Elle est acceptable parce qu'elle s'appuie sur des mots précis du texte ; « il a faim » ou « il est fatigué » ne seraient pas justifiés par le texte.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Texte écrit pour l'exercice : « Quand Zoé entra dans la cuisine, sa mère fit disparaître un paquet derrière son dos. Son père, lui, se mit à siffler en regardant le plafond. Sur le calendrier, une date était entourée en rouge : celle du lendemain. Zoé haussa les épaules et alla se coucher en souriant. » a) Formulez deux inférences sur la situation. b) Pour chacune, citez au moins deux indices du texte. c) Que comprend Zoé, à votre avis ? Justifiez.",
              hint: "Relevez d'abord tous les gestes étranges des parents. Pourquoi cache-t-on un paquet ? Que signifie une date entourée en rouge ? Observez enfin la réaction de Zoé.",
              solution: [
                "a) Première inférence : les parents préparent une surprise pour Zoé. Deuxième inférence : le lendemain est un jour important, sans doute l'anniversaire de Zoé ou une fête.",
                "b) Indices de la surprise : la mère « fit disparaître un paquet derrière son dos » (elle cache un cadeau) ; le père « se mit à siffler en regardant le plafond » (il fait semblant de rien, pour ne pas se trahir). Indices du jour important : la date « entourée en rouge » sur le calendrier, et le fait que ce soit « celle du lendemain ».",
                "c) Zoé a sans doute compris qu'on lui prépare une surprise : elle ne pose pas de question (« haussa les épaules ») mais elle va se coucher « en souriant », ce qui montre qu'elle est contente et qu'elle a deviné.",
                "Bilan : aucun de ces éléments n'est écrit directement. Ils sont compris grâce aux indices, et chaque réponse est appuyée sur une citation : c'est cela, lire entre les lignes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : bien lire un texte.",
            statements: [
              { text: "Un bon lecteur lit toujours le plus vite possible, sans revenir en arrière.", true: false, why: "Revenir en arrière quand on a perdu le fil est au contraire une habitude de bon lecteur." },
              { text: "Le titre d'un texte permet souvent de faire une hypothèse sur son sujet.", true: true, why: "Le titre, l'auteur et le genre donnent des indices avant même la lecture." },
              { text: "Faire une inférence, c'est inventer ce que l'on veut sur l'histoire.", true: false, why: "Une inférence s'appuie toujours sur des indices précis du texte." },
              { text: "Le contexte peut aider à comprendre un mot inconnu.", true: true, why: "Les mots et les phrases autour d'un mot inconnu éclairent souvent son sens." },
              { text: "Pour justifier une réponse, il suffit de donner son avis.", true: false, why: "Il faut aussi citer les mots du texte qui prouvent ce que l'on affirme." },
              { text: "Raconter le texte avec ses propres mots permet de vérifier qu'on l'a compris.", true: true, why: "Si l'on n'arrive pas à reformuler, c'est qu'un passage a échappé." },
            ],
          },
          quiz: [
            { q: "Laquelle de ces questions sert à trouver le lieu d'une histoire ?", options: ["Qui ?", "Où ?", "Quand ?", "Pourquoi ?"], answer: 1, why: "La question « Où ? » porte sur le lieu ; « Quand ? » porte sur le moment." },
            { q: "« Il retira son manteau trempé et posa son parapluie dans l'entrée. » Que peut-on en déduire ?", options: ["Il fait très chaud dehors", "Il pleut dehors", "Il part en vacances"], answer: 1, why: "Le manteau trempé et le parapluie sont des indices de pluie : c'est une inférence." },
            { q: "Quel est le meilleur premier réflexe devant un mot inconnu ?", options: ["Arrêter de lire le texte", "Ignorer le mot sans chercher", "Observer les mots qui l'entourent", "Demander tout de suite à quelqu'un d'autre"], answer: 2, why: "Le contexte permet souvent de deviner le sens ; le dictionnaire vient ensuite, si besoin." },
            { q: "Comment justifier correctement une réponse sur un texte ?", options: ["En répétant la question posée", "En donnant son avis personnel seul", "En recopiant tout le texte", "En citant les mots du texte"], answer: 3, why: "On donne son idée, puis on la prouve par une citation entre guillemets." },
            { q: "Le mot « inoubliable » appartient à la même famille que :", options: ["oublier", "ouvrir", "inonder", "obliger"], answer: 0, why: "« Inoubliable » est formé sur « oublier » : ce qu'on ne peut pas oublier." },
          ],
          trap: "Confondre inférence et invention : on ne peut affirmer ce qui n'est pas écrit que si l'on peut montrer les indices du texte qui le prouvent.",
          method: "Après chaque paragraphe, arrêtez-vous quelques secondes et résumez-le dans votre tête en une phrase. Si vous n'y arrivez pas, relisez-le avant de continuer.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rediger-reviser',
          title: 'Écrire un texte, puis le relire et l\'améliorer',
          minutes: 30,
          objectives: [
            "Planifier un texte avant de l'écrire : comprendre la consigne, chercher des idées, les mettre en ordre.",
            "Rédiger un texte organisé en paragraphes, en utilisant des connecteurs.",
            "Éviter les répétitions grâce aux reprises : pronoms, synonymes, groupes nominaux.",
            "Réviser votre texte à l'aide d'une grille de relecture : sens, phrases, orthographe.",
          ],
          course: [
            {
              heading: "Avant d'écrire : préparer",
              paragraphs: [
                "Écrire un bon texte ne se fait pas d'un seul jet. Tout commence par la lecture attentive de la consigne. Soulignez ce qu'elle demande : le type de texte (récit, description, lettre), la personne à employer (« je » ou « il »), le temps (présent ou passé), la longueur attendue et les éléments obligatoires.",
                "Ensuite, cherchez des idées sans vous censurer : notez-les en liste ou sous forme de carte mentale, avec des mots-clés. Enfin, mettez ces idées en ordre. Pour un récit, prévoyez un début (la situation de départ), un milieu (ce qui arrive) et une fin (comment cela se termine).",
              ],
            },
            {
              heading: "Rédiger le brouillon",
              paragraphs: [
                "Au brouillon, écrivez une ligne sur deux : vous aurez de la place pour corriger. Organisez votre texte en paragraphes. Un paragraphe correspond à une étape de l'histoire ou à une idée ; il commence par un retour à la ligne et un léger retrait, appelé alinéa.",
                "Pour relier vos phrases et vos paragraphes, utilisez des connecteurs. Dans un récit, les connecteurs de temps indiquent l'ordre des événements : d'abord, puis, ensuite, soudain, alors, le lendemain, enfin. Ils guident le lecteur et rendent le texte plus clair.",
              ],
              box: { label: "À retenir", text: "Une étape ou une idée = un paragraphe, qui commence par un alinéa. Les connecteurs (d'abord, puis, soudain, enfin...) relient les étapes entre elles." },
            },
            {
              heading: "Éviter les répétitions : les reprises",
              paragraphs: [
                "Répéter le même nom à chaque phrase alourdit un texte. Comparez : « Le chat entra. Le chat vit une souris. Le chat bondit. » et « Le chat entra. Il vit une souris. Le matou bondit. » Dans la seconde version, le chat est repris par un pronom (il) puis par un autre nom (le matou).",
                "On peut reprendre un nom par un pronom personnel (il, elle, le, la, lui, eux), par un synonyme (la maison, la demeure), ou par un groupe nominal qui apporte une information nouvelle (Ulysse, le héros grec, le roi d'Ithaque). Attention cependant : le lecteur doit toujours savoir de qui l'on parle. Si deux personnages sont du même genre, un pronom peut créer une confusion.",
              ],
              box: { label: "Règle", text: "Pour éviter une répétition, reprenez le nom par un pronom, un synonyme ou un groupe nominal. Vérifiez toujours que l'on sait à qui ou à quoi renvoie la reprise." },
            },
            {
              heading: "Relire et améliorer : la révision",
              paragraphs: [
                "Relire, ce n'est pas seulement chercher les fautes d'orthographe. Faites plusieurs relectures, chacune avec un objectif. Première relecture, le sens : la consigne est-elle respectée ? L'histoire se comprend-elle ? Deuxième relecture, les phrases : chaque phrase commence-t-elle par une majuscule et se termine-t-elle par un point ? Y a-t-il des répétitions ?",
                "Troisième relecture, l'orthographe : vérifiez l'accord de chaque verbe avec son sujet, les accords dans les groupes nominaux (le déterminant, le nom et l'adjectif), et les homophones fréquents comme a et à, et et est, son et sont, on et ont. Une astuce : remplacez « a » par « avait » ; si la phrase a encore un sens, c'est le verbe avoir, sans accent.",
              ],
              box: { label: "Repère", text: "Grille de relecture : 1. Le sens (consigne, clarté). 2. Les phrases (majuscules, ponctuation, répétitions). 3. L'orthographe (accords sujet-verbe, accords dans le groupe nominal, homophones)." },
            },
          ],
          keyPoints: [
            "Lire et souligner la consigne : type de texte, personne, temps, longueur, éléments imposés.",
            "Chercher des idées, puis les mettre en ordre : début, milieu, fin.",
            "Au brouillon, écrire une ligne sur deux et organiser le texte en paragraphes.",
            "Relier les étapes avec des connecteurs de temps : d'abord, puis, soudain, enfin.",
            "Éviter les répétitions par des reprises : pronom, synonyme, groupe nominal.",
            "Relire plusieurs fois : le sens, puis les phrases, puis l'orthographe.",
          ],
          example: {
            statement: "Améliorez ce passage écrit par un élève : « Le renard avait faim. Le renard vit un corbeau. Le corbeau tenait un fromage. Le renard voulait le fromage. »",
            solution: [
              "Repérer les répétitions : « le renard » apparaît trois fois, « le corbeau » et « le fromage » deux fois.",
              "Choisir des reprises : le renard peut devenir « il » ou « l'animal rusé » ; le corbeau peut devenir « l'oiseau » ; le fromage peut être repris par « le » (pronom).",
              "Relier les phrases avec des connecteurs et des liens logiques pour éviter une suite de phrases trop courtes.",
              "Vérifier que chaque reprise est claire : « il » doit renvoyer sans hésitation au renard.",
              "Version améliorée : « Le renard avait faim. Soudain, il aperçut un corbeau perché sur une branche. L'oiseau tenait dans son bec un beau fromage, et l'animal rusé décida de s'en emparer. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remplacez le mot en double par une reprise (pronom, synonyme ou groupe nominal) : a) La princesse ouvrit la porte. La princesse découvrit un jardin. b) Mon frère a un vélo. Mon frère prête son vélo à ses amis. c) Le dragon dormait. Le dragon gardait un trésor.",
              hint: "Pour chaque phrase, demandez-vous si un pronom (il, elle, le) suffit, ou si un groupe nominal apporterait une information nouvelle.",
              solution: [
                "a) La princesse ouvrit la porte. Elle découvrit un jardin. (Ou : La jeune fille découvrit un jardin.)",
                "b) Mon frère a un vélo. Il le prête à ses amis. (« Il » reprend « mon frère », « le » reprend « son vélo ».)",
                "c) Le dragon dormait. Le monstre gardait un trésor. (Ou : Il gardait un trésor.)",
              ],
            },
            {
              level: 2,
              statement: "Relisez ce texte et corrigez les cinq erreurs (une de ponctuation et quatre d'orthographe) : « Hier, mes cousins sont arrivé chez nous. Ils on apporté des jeux et des ballon. Nous somme allés au parc et nous avons joué jusqu'au soir il faisait beau. »",
              hint: "Faites trois relectures : les phrases (majuscule et point), les accords (verbes avec leur sujet, noms avec leur déterminant), puis les homophones (on et ont).",
              solution: [
                "« sont arrivé » devient « sont arrivés » : avec l'auxiliaire être, le participe passé s'accorde avec le sujet « mes cousins » (masculin pluriel).",
                "« Ils on apporté » devient « Ils ont apporté » : on peut dire « ils avaient apporté », c'est donc le verbe avoir, « ont ».",
                "« des ballon » devient « des ballons » : le déterminant « des » est au pluriel, le nom prend donc un s.",
                "« Nous somme allés » devient « Nous sommes allés » : avec « nous », le verbe être s'écrit « sommes ».",
                "« jusqu'au soir il faisait beau » : il manque un point entre les deux phrases. On écrit : « jusqu'au soir. Il faisait beau. »",
                "Texte corrigé : « Hier, mes cousins sont arrivés chez nous. Ils ont apporté des jeux et des ballons. Nous sommes allés au parc et nous avons joué jusqu'au soir. Il faisait beau. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Consigne : « Racontez au passé, en un paragraphe de cinq à six phrases, la découverte d'un objet mystérieux dans un grenier, en utilisant au moins trois connecteurs de temps. » Un élève a écrit : « Je monte au grenier. Je vois une boîte. La boîte est vieille. J'ouvre la boîte. Il y a une clé. » Expliquez ce qui ne respecte pas la consigne, puis réécrivez le texte.",
              hint: "Vérifiez trois points de la consigne : le temps demandé, la présence des connecteurs, la longueur. Puis cherchez les répétitions.",
              solution: [
                "Problème 1, le temps : le texte est au présent, alors que la consigne demande le passé. Il faut employer l'imparfait et le passé simple (ou le passé composé).",
                "Problème 2, les connecteurs : il n'y en a aucun, alors qu'il en faut au moins trois.",
                "Problème 3, les répétitions : « la boîte » revient trois fois ; les phrases sont toutes construites de la même façon et sont trop pauvres pour un texte de cinq à six phrases.",
                "Réécriture possible : « Un après-midi de pluie, je montai au grenier pour chercher un vieux jeu. D'abord, je ne vis que des cartons poussiéreux. Puis, derrière une malle, j'aperçus une petite boîte en bois sculpté. Elle semblait très ancienne et personne ne l'avait ouverte depuis longtemps. Avec précaution, je soulevai le couvercle. Soudain, je découvris une clé dorée qui brillait dans la pénombre. »",
                "Vérification : le texte est au passé (montai, vis, aperçus), contient quatre connecteurs (D'abord, Puis, Soudain, et l'indicateur « Un après-midi de pluie »), compte six phrases et reprend « la boîte » par « Elle » et « l' ». La consigne est respectée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'écriture d'un texte.",
            items: [
              "Lire et souligner la consigne",
              "Chercher des idées au brouillon",
              "Mettre les idées en ordre (début, milieu, fin)",
              "Rédiger le brouillon en paragraphes",
              "Relire pour le sens et les phrases",
              "Relire pour l'orthographe",
              "Recopier le texte au propre",
            ],
          },
          quiz: [
            { q: "Que faut-il faire en premier quand on doit écrire un texte ?", options: ["Recopier au propre", "Lire la consigne attentivement", "Corriger l'orthographe", "Choisir un titre"], answer: 1, why: "La consigne indique ce qu'on attend de vous : tout le reste en dépend." },
            { q: "Dans « Ulysse partit. Le héros grec navigua longtemps », « le héros grec » est :", options: ["une répétition maladroite", "un connecteur de temps", "une reprise par un groupe nominal"], answer: 2, why: "« Le héros grec » reprend « Ulysse » en apportant une information nouvelle." },
            { q: "Lequel de ces mots est un connecteur de temps ?", options: ["Ensuite", "Pourtant", "Maison", "Grand"], answer: 0, why: "« Ensuite » indique l'ordre des événements dans le temps." },
            { q: "Pourquoi écrire une ligne sur deux au brouillon ?", options: ["Pour que le texte paraisse plus long", "Parce que la consigne l'exige toujours", "Pour garder de la place pour corriger", "Pour aller plus vite"], answer: 2, why: "Les lignes vides permettent d'ajouter, de rayer et de corriger proprement." },
            { q: "« Il … faim. » Quel mot complète la phrase ?", options: ["à", "as", "ah", "a"], answer: 3, why: "On peut dire « il avait faim » : c'est le verbe avoir, qui s'écrit « a » sans accent." },
          ],
          trap: "Se contenter d'une seule relecture rapide en cherchant seulement les fautes d'orthographe, sans vérifier que la consigne est respectée et que le texte se comprend.",
          method: "Relisez votre texte à voix basse, en articulant chaque mot : l'oreille repère les phrases trop longues, les répétitions et les mots oubliés que l'œil laisse passer.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'prendre-la-parole',
          title: 'Prendre la parole devant la classe',
          minutes: 25,
          objectives: [
            "Préparer une prise de parole à l'aide de notes sous forme de mots-clés.",
            "Parler de manière audible et compréhensible : volume, débit, articulation.",
            "Mobiliser le regard, la posture et les gestes pour capter l'attention de l'auditoire.",
            "Écouter les autres et respecter les règles d'un échange en classe.",
          ],
          course: [
            {
              heading: "Préparer son intervention",
              paragraphs: [
                "Une bonne prise de parole se prépare. Commencez par bien comprendre le sujet et le temps dont vous disposez (deux minutes, cinq minutes). Puis organisez vos idées en trois temps : une introduction qui annonce le sujet, un développement avec deux ou trois idées principales, et une conclusion qui résume ou donne votre avis.",
                "Ne rédigez pas tout votre texte pour le lire : votre voix deviendrait monotone et vous ne regarderiez plus votre public. Notez plutôt des mots-clés sur une fiche, dans l'ordre de votre plan. Vous pouvez en revanche écrire entièrement votre première et votre dernière phrase, pour bien démarrer et bien finir.",
              ],
              box: { label: "À retenir", text: "Une fiche de préparation contient des mots-clés, pas des phrases complètes. Seules la phrase d'ouverture et la phrase de conclusion peuvent être écrites en entier." },
            },
            {
              heading: "La voix : être entendu et compris",
              paragraphs: [
                "Le volume doit permettre à l'élève du fond de la classe de vous entendre sans effort. Le débit, c'est la vitesse à laquelle vous parlez : quand on est stressé, on parle souvent trop vite. Ralentissez volontairement. L'articulation consiste à bien prononcer chaque syllabe, en ouvrant la bouche : on dit « il y a » et non « y'a ».",
                "Pensez aussi aux pauses : un court silence après une idée importante laisse au public le temps de la comprendre. Enfin, variez l'intonation, c'est-à-dire la mélodie de votre voix : une voix qui monte et qui descend est plus vivante qu'une voix toujours sur le même ton.",
              ],
            },
            {
              heading: "Le corps : regard, posture et gestes",
              paragraphs: [
                "Le regard est essentiel : posez les yeux sur différentes personnes de la classe, à gauche, au centre et à droite. Votre public se sent ainsi concerné. Évitez de fixer vos notes, le plafond ou une seule personne.",
                "Tenez-vous droit, les deux pieds bien posés au sol, sans vous balancer ni croiser les bras. Vos gestes peuvent accompagner vos paroles, par exemple pour compter vos idées sur les doigts, mais évitez de jouer avec un stylo ou vos cheveux. Le trac est normal : respirer profondément avant de commencer et bien connaître son début aident à le maîtriser.",
              ],
              box: { label: "Repère", text: "Les cinq clés de l'oral : le volume (être entendu), le débit (ni trop vite ni trop lent), l'articulation (bien prononcer), le regard (vers tout le public), la posture (droit et stable)." },
            },
            {
              heading: "Échanger : écouter et répondre",
              paragraphs: [
                "Prendre la parole, c'est aussi savoir écouter. Dans un débat ou une discussion, on lève la main pour demander la parole, on ne coupe pas la personne qui parle, et l'on tient compte de ce qu'elle a dit pour répondre.",
                "Pour réagir à une idée, vous pouvez la reformuler avant de donner votre avis : « Si j'ai bien compris, tu penses que... ». Pour exprimer un désaccord, critiquez l'idée et jamais la personne, et justifiez votre position : « Je ne suis pas d'accord, parce que... ». Ces règles permettent à chacun de s'exprimer dans le respect.",
              ],
            },
          ],
          keyPoints: [
            "Préparer un plan en trois temps : introduction, deux ou trois idées, conclusion.",
            "Utiliser une fiche de mots-clés et ne pas lire un texte entièrement rédigé.",
            "Soigner la voix : volume suffisant, débit calme, articulation nette, pauses, intonation variée.",
            "Regarder l'ensemble du public, se tenir droit, faire des gestes utiles.",
            "Dans un échange : lever la main, écouter sans couper, reformuler, justifier son avis.",
          ],
          example: {
            statement: "Vous devez présenter en deux minutes à la classe un livre que vous avez aimé. Préparez votre fiche de mots-clés.",
            solution: [
              "Phrase d'ouverture, écrite en entier : « Je vais vous présenter un livre qui m'a tenu en haleine jusqu'à la dernière page. »",
              "Idée 1, présenter le livre : titre, auteur, genre (roman, bande dessinée, recueil de contes...).",
              "Idée 2, résumer le début de l'histoire, sans dévoiler la fin : personnage principal, lieu, problème à résoudre.",
              "Idée 3, donner son avis avec deux raisons : par exemple « suspense », « personnage attachant ».",
              "Phrase de conclusion, écrite en entier : « Si vous aimez les aventures pleines de rebondissements, je vous conseille ce livre. »",
              "Résultat : une fiche courte, lisible d'un coup d'œil, qui permet de parler en regardant la classe au lieu de lire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Transformez cette phrase rédigée en trois ou quatre mots-clés pour une fiche d'oral : « Le hérisson est un petit mammifère qui vit dans les jardins et les haies ; il se nourrit surtout d'insectes et de vers, et il hiberne pendant l'hiver. »",
              hint: "Gardez seulement les mots qui portent l'information : ceux sans lesquels on ne pourrait plus retrouver l'idée.",
              solution: [
                "Repérer les informations : ce qu'est le hérisson, où il vit, ce qu'il mange, ce qu'il fait l'hiver.",
                "Mots-clés possibles : « petit mammifère » ; « jardins, haies » ; « insectes, vers » ; « hiberne en hiver ».",
                "À l'oral, ces mots-clés suffisent pour reformuler la phrase avec vos propres mots.",
              ],
            },
            {
              level: 2,
              statement: "Voici la description d'un exposé : « Paul lit sa feuille sans lever les yeux. Il parle très vite et à voix basse. Il se balance d'un pied sur l'autre et tient un stylo qu'il fait tourner. » Relevez quatre problèmes et proposez un conseil pour chacun.",
              hint: "Reprenez les cinq clés de l'oral (volume, débit, articulation, regard, posture) et cherchez celles qui ne sont pas respectées.",
              solution: [
                "Problème 1 : il lit sa feuille. Conseil : préparer une fiche de mots-clés pour parler au lieu de lire.",
                "Problème 2 : il ne lève pas les yeux. Conseil : regarder tour à tour différentes parties de la classe.",
                "Problème 3 : il parle très vite et à voix basse. Conseil : ralentir, faire des pauses et parler assez fort pour le fond de la classe.",
                "Problème 4 : il se balance et fait tourner un stylo. Conseil : se tenir droit, les deux pieds au sol, et poser le stylo pour ne pas distraire le public.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lors d'un débat sur la question « Faut-il des devoirs à la maison en 6e ? », votre camarade déclare : « Les devoirs, ça ne sert à rien, on travaille déjà assez en classe. » Vous n'êtes pas d'accord. Rédigez votre réponse orale en trois phrases : une reformulation de son idée, votre désaccord avec un argument, un exemple.",
              hint: "Commencez par une formule de reformulation (« Si j'ai bien compris... »), puis une formule de désaccord respectueuse suivie de « parce que ». Critiquez l'idée, pas la personne.",
              solution: [
                "Reformulation : « Si j'ai bien compris, tu penses que les devoirs sont inutiles parce que nous travaillons déjà beaucoup au collège. »",
                "Désaccord argumenté : « Je ne suis pas tout à fait d'accord, parce que refaire seul un exercice à la maison permet de vérifier qu'on a vraiment compris la leçon. »",
                "Exemple : « Par exemple, en relisant ma leçon de conjugaison le soir, je me suis rendu compte que je confondais deux terminaisons, et j'ai pu poser la question au professeur le lendemain. »",
                "Bilan : la réponse montre que vous avez écouté (reformulation), elle exprime le désaccord poliment, et elle s'appuie sur un argument et un exemple concret.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément de l'oral à sa définition.",
            pairs: [
              { left: "Le volume", right: "La force de la voix, pour être entendu de tous" },
              { left: "Le débit", right: "La vitesse à laquelle on parle" },
              { left: "L'articulation", right: "La netteté avec laquelle on prononce chaque syllabe" },
              { left: "L'intonation", right: "La mélodie de la voix, qui monte et qui descend" },
              { left: "La posture", right: "La façon de se tenir debout face au public" },
            ],
          },
          quiz: [
            { q: "Que doit contenir une fiche pour un exposé oral ?", options: ["Le texte entier, rédigé mot à mot", "Des mots-clés dans l'ordre du plan", "Uniquement le titre", "Rien, il vaut mieux improviser"], answer: 1, why: "Les mots-clés guident la mémoire tout en permettant de parler en regardant le public." },
            { q: "Le débit désigne :", options: ["la vitesse de parole", "la force de la voix", "la posture du corps"], answer: 0, why: "Le débit est la vitesse à laquelle on parle ; sous le stress, il a tendance à s'accélérer." },
            { q: "Pendant un exposé, où faut-il regarder ?", options: ["Ses notes en permanence", "Le plafond", "Une seule personne", "Différentes personnes de la classe"], answer: 3, why: "En regardant tour à tour tout le public, chacun se sent concerné par ce que vous dites." },
            { q: "Dans un débat, quelle formule exprime un désaccord respectueux ?", options: ["« Tu dis n'importe quoi. »", "« C'est nul. »", "« Je ne suis pas d'accord, parce que... »", "« Tais-toi. »"], answer: 2, why: "On critique l'idée et non la personne, et l'on justifie son point de vue." },
            { q: "Pourquoi faire une courte pause après une idée importante ?", options: ["Pour laisser au public le temps de comprendre", "Pour reprendre son souffle seulement", "Pour retrouver sa feuille"], answer: 0, why: "Le silence met l'idée en valeur et donne au public le temps de l'assimiler." },
          ],
          trap: "Rédiger tout son exposé et le lire : la voix devient monotone, le regard reste sur la feuille et le public décroche.",
          method: "Entraînez-vous à voix haute au moins deux fois chez vous, en vous chronométrant, devant un miroir ou un proche. Vous saurez ainsi si vous tenez dans le temps et si votre débit est assez calme.",
        },
      ],
    },
    {
      id: 'recits-origines',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mythe-definition',
          title: 'Qu\'est-ce qu\'un mythe ?',
          minutes: 30,
          objectives: [
            "Définir le mythe et en reconnaître les caractéristiques.",
            "Distinguer le mythe du conte et de la légende.",
            "Situer quelques grands textes fondateurs : la Bible, la Théogonie d'Hésiode, les Métamorphoses d'Ovide.",
          ],
          course: [
            {
              heading: "Un récit venu de très loin",
              paragraphs: [
                "Le mot « mythe » vient du grec muthos, qui signifie « parole » ou « récit ». Un mythe est un récit très ancien, d'abord transmis oralement, de génération en génération, bien avant d'être écrit. Personne ne sait qui l'a inventé : il appartient à tout un peuple. C'est pourquoi il en existe souvent plusieurs versions.",
                "Les mythes racontent des événements qui se sont passés « au commencement », dans un temps très lointain, avant l'histoire des hommes. Leurs personnages sont des dieux, des héros aux pouvoirs extraordinaires et des créatures fabuleuses. Le surnaturel y est partout : les dieux parlent aux hommes, les êtres se transforment, la nature obéit à des forces divines.",
              ],
              box: { label: "Définition", text: "Un mythe est un récit traditionnel, très ancien et d'abord oral, qui met en scène des dieux, des héros ou des créatures surnaturelles, et qui cherche à expliquer l'origine du monde, des hommes, des phénomènes naturels ou des règles de la société." },
            },
            {
              heading: "À quoi servent les mythes ?",
              paragraphs: [
                "Les mythes répondent aux grandes questions que les hommes se posent depuis toujours : comment le monde est-il né ? D'où viennent les êtres humains ? Pourquoi le soleil se lève-t-il chaque matin ? Pourquoi existe-t-il des saisons, la maladie ou la mort ? À une époque où la science ne pouvait pas encore répondre, les mythes donnaient une explication.",
                "Pour les peuples qui les racontaient, ces récits étaient souvent liés à la religion : ils parlaient des dieux que l'on honorait. Ils transmettaient aussi des valeurs, en montrant par exemple que l'orgueil ou la désobéissance envers les dieux sont punis. Aujourd'hui, nous ne les lisons plus comme des vérités, mais comme des œuvres qui nourrissent la littérature, la peinture et le cinéma.",
              ],
            },
            {
              heading: "Quelques grands textes fondateurs",
              paragraphs: [
                "Chaque civilisation a ses mythes. En Grèce antique, le poète Hésiode, vers 700 avant J.-C., raconte dans la Théogonie la naissance du monde et des dieux. Le poète latin Ovide, au début du Ier siècle après J.-C., rassemble dans les Métamorphoses de nombreux récits où des êtres sont transformés en animaux, en plantes ou en pierres.",
                "La Bible, texte sacré du judaïsme et du christianisme, s'ouvre sur la Genèse, qui raconte la création du monde par un Dieu unique. D'autres peuples ont leurs propres récits : l'Épopée de Gilgamesh en Mésopotamie, l'un des plus anciens textes écrits connus, ou le Popol Vuh des Mayas d'Amérique centrale.",
              ],
              box: { label: "Repère", text: "Théogonie d'Hésiode (Grèce, vers 700 av. J.-C.). Genèse, premier livre de la Bible. Métamorphoses d'Ovide (Rome, début du Ier siècle ap. J.-C.). Épopée de Gilgamesh (Mésopotamie). Popol Vuh (Mayas)." },
            },
            {
              heading: "Mythe, conte ou légende ?",
              paragraphs: [
                "Le conte se reconnaît à sa formule d'ouverture, « Il était une fois ». Il se déroule dans un lieu et un temps indéterminés, et personne ne croit qu'il est vrai : il sert à divertir et souvent à donner une leçon. Le mythe, lui, a été cru par les peuples qui le racontaient, et il prétend expliquer comment le monde est devenu ce qu'il est.",
                "La légende part souvent d'un lieu, d'un personnage ou d'un événement présenté comme réel, puis l'embellit avec du merveilleux. La fondation de Rome par Romulus et Rémus, datée par la tradition de 753 avant J.-C., en est un exemple. Attention enfin au sens courant : dire « c'est un mythe » signifie « c'est une croyance fausse », ce qui n'est pas le sens littéraire du mot.",
              ],
              box: { label: "À retenir", text: "Conte : « Il était une fois », temps et lieu indéterminés, on n'y croit pas. Mythe : temps des origines, dieux et héros, il explique le monde et a été cru. Légende : part d'un fait ou d'un personnage présenté comme réel, embelli par le merveilleux." },
            },
          ],
          keyPoints: [
            "Mythe vient du grec muthos, « parole, récit ».",
            "Un mythe est un récit très ancien, anonyme, d'abord transmis oralement, qui existe souvent en plusieurs versions.",
            "Il met en scène des dieux, des héros et des créatures surnaturelles, au temps des origines.",
            "Il cherche à expliquer le monde, les hommes, les phénomènes naturels et les règles de la société.",
            "Grands textes : Théogonie d'Hésiode, Genèse, Métamorphoses d'Ovide.",
            "Ne pas confondre avec le conte (« Il était une fois ») et la légende (fait réel embelli).",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « Au temps où les dieux habitaient encore la terre, la déesse du ciel pleura si longtemps la perte de son fils que ses larmes formèrent la mer. Depuis ce jour, l'eau de la mer est salée comme les larmes. » Montrez que ce texte a les caractéristiques d'un mythe.",
            solution: [
              "Le temps : « Au temps où les dieux habitaient encore la terre » renvoie à une époque très lointaine, celle des origines.",
              "Les personnages : une « déesse du ciel » et son fils, c'est-à-dire des êtres divins.",
              "Le surnaturel : des larmes qui forment une mer entière, ce qui est impossible dans la réalité.",
              "L'explication : le texte explique l'origine de la mer et le fait qu'elle soit salée (« Depuis ce jour, l'eau de la mer est salée »).",
              "Conclusion : ce texte présente bien les caractéristiques d'un mythe, car il raconte, au temps des origines et avec des personnages divins, l'origine d'un élément de la nature.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque début de récit dans la bonne catégorie (mythe, conte ou légende) : a) « Il était une fois un meunier qui avait trois fils. » b) « Au commencement, le Ciel et la Terre étaient unis. » c) « Dans cette forêt de Bretagne, dit-on, vécut autrefois l'enchanteur Merlin. »",
              hint: "Cherchez les indices : une formule connue, une époque des origines, un lieu précis présenté comme réel.",
              solution: [
                "a) Un conte : la formule « Il était une fois » et l'absence de lieu et de date précis sont typiques du conte.",
                "b) Un mythe : « Au commencement » renvoie au temps des origines, et le Ciel et la Terre sont présentés comme des puissances qui forment le monde.",
                "c) Une légende : le récit s'attache à un lieu précis présenté comme réel (« cette forêt de Bretagne ») et rapporte une tradition (« dit-on ») sur un personnage merveilleux.",
              ],
            },
            {
              level: 2,
              statement: "Répondez aux questions. a) De quelle langue vient le mot « mythe » et que signifie-t-il ? b) Pourquoi existe-t-il souvent plusieurs versions d'un même mythe ? c) Citez deux œuvres antiques qui rassemblent des mythes, avec leur auteur.",
              hint: "Pensez à la manière dont les mythes ont été transmis avant d'être écrits. Pour c), revoyez l'encadré « Repère ».",
              solution: [
                "a) Le mot « mythe » vient du grec muthos, qui signifie « parole » ou « récit ».",
                "b) Les mythes ont d'abord été transmis oralement, pendant des siècles. Chaque conteur, chaque région, chaque époque a pu modifier un détail, ajouter ou retirer un épisode : c'est pourquoi plusieurs versions existent.",
                "c) Par exemple : la Théogonie du poète grec Hésiode (vers 700 avant J.-C.) et les Métamorphoses du poète latin Ovide (début du Ier siècle après J.-C.).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un camarade affirme : « Un mythe, c'est juste une histoire fausse, ça ne sert à rien de l'étudier. » Rédigez une réponse de cinq à six phrases pour lui montrer qu'il confond deux sens du mot et pour expliquer l'intérêt des mythes.",
              hint: "Distinguez le sens courant (« c'est un mythe ») et le sens littéraire. Puis donnez deux raisons de lire les mythes aujourd'hui : ce qu'ils disaient aux Anciens, ce qu'ils nous apportent encore.",
              solution: [
                "Étape 1, distinguer les deux sens : dans la langue courante, « c'est un mythe » veut dire « c'est faux » ; mais en littérature, un mythe est un récit traditionnel qui explique l'origine du monde.",
                "Étape 2, rappeler leur rôle autrefois : pour les peuples anciens, ces récits répondaient à de grandes questions et étaient liés à leur religion.",
                "Étape 3, montrer leur intérêt aujourd'hui : ils nous font connaître des civilisations et nourrissent encore les livres, les films et la langue.",
                "Réponse rédigée possible : « Tu confonds deux sens du mot mythe. Dans la vie courante, dire ‹ c'est un mythe › signifie que c'est faux, mais en littérature, un mythe est un récit très ancien qui explique l'origine du monde ou des hommes. Pour les Grecs ou les Romains, ces récits répondaient à de grandes questions et étaient liés à leurs dieux. Les étudier nous fait donc découvrir la façon de penser de civilisations anciennes. De plus, les mythes sont partout autour de nous : dans les films, les romans et même dans notre vocabulaire. Ce ne sont pas des histoires inutiles, mais des récits qui ont fondé notre culture. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le mythe.",
            statements: [
              { text: "Le mot « mythe » vient du grec muthos, qui signifie « récit ».", true: true, why: "Muthos signifie « parole » ou « récit » en grec ancien." },
              { text: "On connaît toujours le nom de l'inventeur d'un mythe.", true: false, why: "Les mythes sont anonymes : ils appartiennent à tout un peuple et ont d'abord circulé oralement." },
              { text: "Un mythe commence toujours par « Il était une fois ».", true: false, why: "Cette formule est celle du conte ; le mythe renvoie plutôt au temps des origines." },
              { text: "Les mythes cherchent à expliquer l'origine du monde ou de phénomènes naturels.", true: true, why: "Expliquer le monde est l'une de leurs fonctions principales." },
              { text: "Un même mythe peut exister en plusieurs versions.", true: true, why: "La transmission orale, pendant des siècles, a fait naître des variantes." },
              { text: "La Théogonie a été écrite par le poète latin Ovide.", true: false, why: "La Théogonie est l'œuvre du poète grec Hésiode ; Ovide a écrit les Métamorphoses." },
            ],
          },
          quiz: [
            { q: "Que signifie le mot grec muthos ?", options: ["Dieu", "Mensonge", "Récit, parole", "Monstre"], answer: 2, why: "Muthos signifie « parole » ou « récit » : un mythe est d'abord une histoire que l'on raconte." },
            { q: "Comment les mythes ont-ils d'abord été transmis ?", options: ["Oralement", "Par des livres imprimés", "Par des films", "Par des lettres"], answer: 0, why: "Les mythes ont circulé de bouche à oreille pendant des siècles avant d'être écrits." },
            { q: "Quel texte s'ouvre sur la création du monde par un Dieu unique ?", options: ["Les Métamorphoses", "La Genèse", "La Théogonie"], answer: 1, why: "La Genèse, premier livre de la Bible, raconte la création du monde par un Dieu unique." },
            { q: "Quelle est la différence principale entre un mythe et un conte ?", options: ["Le conte n'a jamais de personnages", "Le mythe est toujours très court", "Le mythe a été cru et explique le monde", "Le conte se passe toujours en Grèce"], answer: 2, why: "Le conte divertit et personne n'y croit ; le mythe a été cru et propose une explication du monde." },
            { q: "Qui a écrit les Métamorphoses ?", options: ["Hésiode", "Homère", "Romulus", "Ovide"], answer: 3, why: "Les Métamorphoses sont l'œuvre du poète latin Ovide, au début du Ier siècle après J.-C." },
          ],
          trap: "Prendre le mot « mythe » dans son sens courant de « chose fausse » : en cours de français, un mythe est un récit traditionnel qui explique le monde, et il a été cru par ceux qui le racontaient.",
          method: "Pour reconnaître un mythe, cherchez quatre indices : un temps des origines, des personnages divins ou héroïques, du surnaturel, et une explication (« depuis ce jour... »). Plus il y en a, plus vous êtes sûr de vous.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'creation-du-monde',
          title: 'Raconter la création du monde',
          minutes: 35,
          objectives: [
            "Lire et comprendre des récits de création du monde issus de cultures différentes.",
            "Comparer ces récits : le point de départ, le ou les créateurs, la naissance de l'homme.",
            "Identifier ce qu'ils ont en commun : le passage du désordre à l'ordre.",
          ],
          course: [
            {
              heading: "Au commencement : du désordre à l'ordre",
              paragraphs: [
                "Presque tous les récits de création commencent par décrire ce qui existait avant le monde : un vide, une masse confuse, des eaux sans limites ou une obscurité totale. Les Grecs appelaient cet état le Chaos. À l'opposé, le monde organisé, où chaque chose est à sa place, se dit en grec kosmos, qui signifie « ordre » et a donné notre mot « cosmos ».",
                "Créer le monde, dans ces récits, c'est donc d'abord séparer et ordonner : la lumière et les ténèbres, le ciel et la terre, la terre et les eaux. Une fois ce cadre installé, apparaissent les plantes, les animaux, et enfin les êtres humains.",
              ],
              box: { label: "Repère", text: "Chaos : le désordre, la masse confuse ou le vide d'avant le monde. Cosmos (du grec kosmos, « ordre ») : le monde organisé. La création fait passer du chaos au cosmos." },
            },
            {
              heading: "La Genèse : un Dieu unique qui crée par la parole",
              paragraphs: [
                "Dans la Bible, le livre de la Genèse raconte que Dieu crée le monde en six jours. Au début, la terre est informe et vide, et les ténèbres couvrent les eaux. Dieu crée par sa parole : il dit « Que la lumière soit ! », et la lumière apparaît. Chaque jour, il ajoute un élément et constate que cela est bon.",
                "Le premier jour, il sépare la lumière des ténèbres ; le deuxième, il fait le firmament, le ciel ; le troisième, il rassemble les eaux pour faire apparaître la terre ferme, puis fait pousser les plantes ; le quatrième, il crée le soleil, la lune et les étoiles ; le cinquième, les poissons et les oiseaux ; le sixième, les animaux terrestres, puis l'homme et la femme, à son image. Le septième jour, il se repose. Un second récit raconte comment Dieu façonne Adam avec de la poussière du sol et lui donne le souffle de vie.",
              ],
            },
            {
              heading: "La Théogonie d'Hésiode : des dieux qui naissent les uns des autres",
              paragraphs: [
                "Chez le Grec Hésiode, il n'y a pas un créateur unique. Au commencement est Chaos ; puis apparaissent Gaïa, la Terre, et Éros, la force qui pousse les êtres à s'unir. Gaïa donne naissance à Ouranos, le Ciel étoilé, qui devient son époux. De leur union naissent les Titans, les Cyclopes et d'autres créatures puissantes.",
                "Ouranos enferme ses enfants dans le sein de Gaïa. Le plus jeune des Titans, Cronos, le renverse avec une faucille. Devenu roi, Cronos dévore à leur naissance ses propres enfants, par peur d'être renversé à son tour. Mais Rhéa, son épouse, cache le petit Zeus en Crète et donne à Cronos une pierre emmaillotée à avaler. Devenu adulte, Zeus délivre ses frères et sœurs, vainc les Titans et devient le roi des dieux, sur l'Olympe.",
              ],
            },
            {
              heading: "Ovide et le Popol Vuh : d'autres façons de créer",
              paragraphs: [
                "Au livre I des Métamorphoses, le poète latin Ovide décrit le chaos comme une masse informe où tous les éléments sont mêlés. Un dieu, ou une nature bienveillante, met fin à ce désordre en séparant le ciel de la terre, la terre des eaux, et en plaçant chaque élément à sa place. Viennent ensuite les animaux, puis l'homme. Ovide rapporte que Prométhée l'aurait modelé avec de la terre mêlée d'eau, à l'image des dieux, et lui aurait donné un visage tourné vers le ciel.",
                "Le Popol Vuh, livre sacré des Mayas, raconte que les dieux essaient plusieurs fois de créer des êtres humains capables de les honorer. Les hommes de boue se défont dans l'eau ; les hommes de bois n'ont ni cœur ni mémoire et sont détruits. Ce n'est qu'avec une pâte de maïs que les dieux réussissent enfin à façonner les premiers humains.",
              ],
              box: { label: "À retenir", text: "Genèse : un Dieu unique crée par la parole, en six jours. Hésiode : les dieux naissent les uns des autres, du Chaos jusqu'au règne de Zeus. Ovide : un dieu sépare les éléments mêlés. Popol Vuh : l'homme est façonné, après plusieurs essais, avec du maïs." },
            },
          ],
          keyPoints: [
            "Les récits de création font passer du chaos (désordre) au cosmos (monde ordonné).",
            "Créer, c'est séparer et ordonner : lumière et ténèbres, ciel et terre, terre et eaux.",
            "Genèse : un Dieu unique crée le monde par la parole en six jours et se repose le septième.",
            "Hésiode : Chaos, puis Gaïa et Ouranos, les Titans, Cronos, et enfin le règne de Zeus.",
            "Ovide : un dieu sépare les éléments ; Prométhée modèle l'homme avec de la terre et de l'eau.",
            "Dans beaucoup de récits, l'homme est façonné dans une matière : poussière, terre, maïs.",
          ],
          example: {
            statement: "Comparez la création de l'homme dans la Genèse et dans les Métamorphoses d'Ovide : quelle matière est utilisée, et qui façonne l'homme ?",
            solution: [
              "Genèse : dans le second récit, Dieu façonne Adam avec de la poussière du sol, puis lui donne le souffle de vie.",
              "Métamorphoses : Ovide rapporte que Prométhée modèle l'homme avec de la terre mêlée d'eau, à l'image des dieux.",
              "Point commun : dans les deux cas, l'homme est façonné à partir de la terre, comme un potier façonne un objet en argile, puis reçoit quelque chose de divin (le souffle de vie, la ressemblance avec les dieux).",
              "Différence : dans la Genèse, c'est le Dieu unique lui-même qui crée l'homme ; chez Ovide, c'est Prométhée, un Titan, qui le façonne.",
              "Conclusion : les deux récits partagent l'image de l'homme modelé dans la terre, mais ils diffèrent par l'identité du créateur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "D'après la Genèse, indiquez ce que Dieu crée : a) le premier jour ; b) le quatrième jour ; c) le sixième jour. d) Que fait-il le septième jour ?",
              hint: "Relisez le deuxième paragraphe de la partie consacrée à la Genèse : les jours y sont donnés dans l'ordre.",
              solution: [
                "a) Le premier jour : la lumière, qu'il sépare des ténèbres.",
                "b) Le quatrième jour : le soleil, la lune et les étoiles.",
                "c) Le sixième jour : les animaux terrestres, puis l'homme et la femme.",
                "d) Le septième jour, Dieu se repose.",
              ],
            },
            {
              level: 2,
              statement: "Remettez dans l'ordre ces étapes de la Théogonie d'Hésiode, puis expliquez pourquoi Cronos dévore ses enfants : a) Zeus devient roi des dieux. b) Chaos existe seul. c) Cronos renverse Ouranos. d) Gaïa donne naissance à Ouranos. e) Rhéa cache Zeus en Crète.",
              hint: "Partez du tout début (le désordre initial) et suivez les générations de dieux : les parents, puis les enfants, puis les petits-enfants.",
              solution: [
                "Ordre : b) Chaos existe seul ; d) Gaïa donne naissance à Ouranos ; c) Cronos renverse Ouranos ; e) Rhéa cache Zeus en Crète ; a) Zeus devient roi des dieux.",
                "Explication : Cronos dévore ses enfants parce qu'il a peur que l'un d'eux le renverse, comme lui-même a renversé son père Ouranos.",
                "Remarque : Rhéa le trompe en lui faisant avaler une pierre emmaillotée à la place de Zeus, qui grandit en secret et accomplit ce que Cronos redoutait.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe de six à huit phrases qui compare deux récits de création étudiés (au choix : la Genèse, la Théogonie, les Métamorphoses ou le Popol Vuh). Vous indiquerez au moins un point commun et deux différences, en utilisant des connecteurs de comparaison (comme, de même, au contraire, alors que, tandis que).",
              hint: "Choisissez trois critères avant d'écrire : ce qui existait au départ, qui crée, comment naît l'homme. Comparez les deux récits critère par critère.",
              solution: [
                "Préparation : choisir par exemple la Genèse et la Théogonie, et trois critères : le point de départ, le créateur, la façon de créer.",
                "Point commun : les deux récits partent d'un état de désordre ou de vide (la terre informe et vide, les ténèbres, d'un côté ; le Chaos, de l'autre).",
                "Différence 1 : la Genèse présente un Dieu unique, alors que la Théogonie présente de nombreux dieux qui naissent les uns des autres.",
                "Différence 2 : dans la Genèse, Dieu crée par sa parole, dans le calme et en six jours ; au contraire, chez Hésiode, le monde divin se met en place par des naissances, des ruses et des combats, jusqu'à la victoire de Zeus.",
                "Paragraphe rédigé possible : « La Genèse et la Théogonie d'Hésiode racontent toutes deux la naissance du monde. Dans les deux récits, tout commence par le désordre : la terre est informe et vide dans la Genèse, comme le Chaos chez Hésiode. Pourtant, ces textes sont très différents. La Genèse présente un Dieu unique, tandis que la Théogonie met en scène de nombreux dieux. De plus, dans la Bible, Dieu crée le monde par sa parole, en six jours. Au contraire, chez Hésiode, le monde divin naît de générations successives qui s'affrontent. Cronos renverse son père Ouranos, avant d'être vaincu à son tour par son fils Zeus. Ainsi, si ces deux récits expliquent l'origine du monde, ils ne l'imaginent pas de la même manière. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les sept jours de la création selon la Genèse.",
            items: [
              "La lumière, séparée des ténèbres",
              "Le firmament, c'est-à-dire le ciel",
              "La terre ferme, les mers et les plantes",
              "Le soleil, la lune et les étoiles",
              "Les poissons et les oiseaux",
              "Les animaux terrestres, l'homme et la femme",
              "Le repos de Dieu",
            ],
          },
          quiz: [
            { q: "Que signifie le mot grec kosmos ?", options: ["Le vide", "L'ordre", "Le ciel étoilé", "La terre"], answer: 1, why: "Kosmos signifie « ordre » : c'est le monde organisé, par opposition au chaos." },
            { q: "Dans la Genèse, comment Dieu crée-t-il le monde ?", options: ["En combattant les Titans", "Par sa parole", "En séparant ses enfants"], answer: 1, why: "Dieu dit « Que la lumière soit ! » et la lumière apparaît : il crée par la parole." },
            { q: "Chez Hésiode, qui est Ouranos ?", options: ["Le Ciel", "La Terre", "Le roi des Enfers", "Le fils de Zeus"], answer: 0, why: "Ouranos, le Ciel étoilé, est né de Gaïa, la Terre, et devient son époux." },
            { q: "Pourquoi Cronos dévore-t-il ses enfants ?", options: ["Parce qu'il a faim", "Sur l'ordre de Gaïa", "Pour punir Rhéa", "Par peur d'être renversé"], answer: 3, why: "Cronos a renversé son père et craint qu'un de ses enfants lui fasse subir le même sort." },
            { q: "Dans le Popol Vuh, avec quoi les dieux réussissent-ils à créer l'homme ?", options: ["De la boue", "Du bois", "Du maïs", "De la pierre"], answer: 2, why: "Après l'échec des hommes de boue et de bois, les dieux façonnent les humains avec une pâte de maïs." },
          ],
          trap: "Mélanger les récits : attribuer à la Genèse les dieux grecs, ou à Hésiode un Dieu unique qui crée par la parole. Chaque récit a son créateur et sa logique.",
          method: "Pour comparer deux récits de création, faites un tableau à trois lignes (au départ, qui crée, comment naît l'homme) et deux colonnes (un récit par colonne). Les points communs et les différences apparaissent d'un coup d'œil.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'recits-etiologiques',
          title: 'Expliquer le monde : les récits du « pourquoi »',
          minutes: 30,
          objectives: [
            "Définir un récit étiologique et repérer ce qu'il explique.",
            "Identifier les étapes d'un récit du « pourquoi » : situation de départ, faute ou événement, transformation, explication finale.",
            "Connaître quelques récits étiologiques de la mythologie et les mots qu'ils ont laissés dans la langue.",
          ],
          course: [
            {
              heading: "Un récit qui explique une cause",
              paragraphs: [
                "Certains mythes ne racontent pas la création du monde entier, mais l'origine d'un élément précis : un animal, une plante, un phénomène naturel, une coutume. On les appelle récits étiologiques, du grec aitia, « la cause », et logos, « le discours ». Ce sont les récits du « pourquoi » : pourquoi l'araignée tisse-t-elle sa toile ? Pourquoi y a-t-il des saisons ?",
                "Ces récits imaginent qu'autrefois le monde était différent, puis qu'un événement l'a transformé pour toujours. Ils se terminent souvent par une formule qui fait le lien avec le présent du lecteur : « Depuis ce jour... », « C'est pourquoi, aujourd'hui encore... ».",
              ],
              box: { label: "Définition", text: "Un récit étiologique (du grec aitia, « cause ») explique l'origine d'un élément du monde : un animal, une plante, un phénomène naturel, un nom ou une coutume." },
            },
            {
              heading: "Des métamorphoses qui expliquent la nature",
              paragraphs: [
                "Dans les Métamorphoses d'Ovide, Arachné est une jeune fille qui tisse si bien qu'elle ose défier la déesse Minerve (Athéna chez les Grecs). Sa tapisserie, parfaite, montre les fautes des dieux. Furieuse, la déesse la frappe ; Arachné veut mourir, mais Minerve la transforme en araignée, condamnée à tisser pour toujours. Le récit explique pourquoi l'araignée tisse sa toile.",
                "Toujours chez Ovide, la nymphe Écho, punie par Junon, ne peut plus que répéter les derniers mots qu'elle entend. Amoureuse du beau Narcisse, qui la repousse, elle dépérit jusqu'à ne plus être qu'une voix. Narcisse, lui, tombe amoureux de son propre reflet dans l'eau d'une source et meurt de ne pouvoir l'atteindre ; à sa place pousse une fleur, le narcisse. La nymphe Daphné, poursuivie par Apollon, est quant à elle changée en laurier, qui devient l'arbre du dieu.",
              ],
            },
            {
              heading: "Expliquer les saisons, les maux et les langues",
              paragraphs: [
                "Le mythe de Perséphone explique les saisons. Hadès, dieu des Enfers, enlève Perséphone, fille de Déméter, déesse des moissons. Désespérée, Déméter cesse de faire pousser les récoltes. Zeus obtient que Perséphone revienne, mais comme elle a mangé des grains de grenade aux Enfers, elle doit y retourner une partie de l'année. Pendant son absence, sa mère est triste et la nature dort : c'est l'hiver.",
                "D'autres récits expliquent des réalités humaines. Chez Hésiode, Pandore, la première femme, ouvre une jarre que les dieux lui ont confiée : tous les maux s'en échappent et se répandent sur le monde, seule l'Espérance reste à l'intérieur. Dans la Genèse, l'épisode de la tour de Babel explique pourquoi les hommes parlent des langues différentes.",
              ],
            },
            {
              heading: "La structure et l'héritage des récits du « pourquoi »",
              paragraphs: [
                "Un récit étiologique suit souvent quatre étapes : une situation de départ où le monde est différent (Arachné est une jeune fille) ; une faute ou un événement (elle défie une déesse) ; une transformation, souvent une métamorphose ou une punition (elle devient araignée) ; une explication finale qui rejoint le monde d'aujourd'hui (depuis, l'araignée tisse).",
                "Ces récits ont inspiré des auteurs modernes. Dans ses Histoires comme ça (1902), l'écrivain anglais Rudyard Kipling invente avec humour des récits du pourquoi : dans L'Enfant d'éléphant, un crocodile tire si fort sur le nez court d'un jeune éléphant qu'il devient une trompe. Les mythes ont aussi laissé des mots dans notre langue : un écho, une arachnide, un narcisse.",
              ],
              box: { label: "À retenir", text: "Les quatre étapes du récit du « pourquoi » : 1. le monde est différent ; 2. une faute ou un événement ; 3. une transformation ; 4. l'explication finale (« depuis ce jour... »)." },
            },
          ],
          keyPoints: [
            "Étiologique vient du grec aitia, « la cause » : le récit explique l'origine d'un élément du monde.",
            "Il se termine souvent par une formule comme « depuis ce jour » ou « c'est pourquoi ».",
            "Quatre étapes : monde différent, faute ou événement, transformation, explication finale.",
            "Arachné (l'araignée), Écho (l'écho), Narcisse (la fleur), Daphné (le laurier) : métamorphoses chez Ovide.",
            "Perséphone explique les saisons ; Pandore, les maux ; Babel, la diversité des langues.",
            "Kipling, Histoires comme ça (1902) : des récits du pourquoi modernes et humoristiques.",
          ],
          example: {
            statement: "Montrez que le mythe d'Arachné est un récit étiologique en retrouvant ses quatre étapes.",
            solution: [
              "Situation de départ : Arachné est une jeune fille, célèbre pour son talent de tisseuse. L'araignée, telle que nous la connaissons, n'existe pas encore dans le récit.",
              "Faute : par orgueil, Arachné défie la déesse Minerve dans un concours de tissage et représente les fautes des dieux.",
              "Transformation : la déesse la change en araignée, condamnée à tisser pour toujours.",
              "Explication finale : le récit explique pourquoi l'araignée tisse sa toile, et le nom grec d'Arachné se retrouve dans le mot « arachnide ».",
              "Conclusion : le mythe d'Arachné est bien un récit étiologique, car il explique l'origine d'un élément de la nature (l'araignée et sa toile) par une métamorphose.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites ce qu'explique chacun de ces récits : a) le mythe de Perséphone ; b) la tour de Babel ; c) le mythe de Daphné ; d) le mythe de Pandore.",
              hint: "Demandez-vous à chaque fois : à la fin du récit, quel élément de notre monde existe désormais ?",
              solution: [
                "a) Le mythe de Perséphone explique l'alternance des saisons, et en particulier l'hiver.",
                "b) La tour de Babel explique pourquoi les hommes parlent des langues différentes.",
                "c) Le mythe de Daphné explique l'origine du laurier, l'arbre consacré à Apollon.",
                "d) Le mythe de Pandore explique la présence des maux dans le monde (et pourquoi l'espérance demeure).",
              ],
            },
            {
              level: 2,
              statement: "Retrouvez les quatre étapes du mythe d'Écho : situation de départ, faute ou événement, transformation, explication finale. Indiquez ensuite quel mot de la langue courante vient de ce mythe.",
              hint: "La punition de Junon et l'amour malheureux pour Narcisse sont deux moments différents. Demandez-vous ce qui reste d'Écho à la fin.",
              solution: [
                "Situation de départ : Écho est une nymphe qui parle librement.",
                "Faute ou événement : elle est punie par Junon et ne peut plus que répéter les derniers mots qu'elle entend ; puis elle tombe amoureuse de Narcisse, qui la repousse.",
                "Transformation : elle dépérit de chagrin, son corps disparaît, seule sa voix demeure.",
                "Explication finale : c'est sa voix que l'on entend encore répéter nos dernières paroles dans les montagnes ou les grottes.",
                "Mot de la langue courante : « écho », le son qui se répète en revenant vers nous.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un récit écrit pour l'exercice : « Autrefois, la tortue courait plus vite que tous les animaux, et elle s'en vantait sans cesse. Un jour, elle se moqua du dieu des forêts qui marchait lentement. Le dieu, vexé, posa sur son dos une lourde pierre ronde. » a) Ce récit est-il complet ? Justifiez en vous appuyant sur les quatre étapes. b) Rédigez la dernière étape qui manque, en une ou deux phrases, avec une formule de clôture.",
              hint: "Repérez les étapes présentes : le monde différent, la faute, la transformation. Que manque-t-il pour rejoindre le monde d'aujourd'hui ?",
              solution: [
                "a) Étape 1, monde différent : « Autrefois, la tortue courait plus vite que tous les animaux ». Étape 2, faute : elle se vante et « se moqua du dieu des forêts ». Étape 3, transformation : le dieu pose une « lourde pierre ronde » sur son dos.",
                "Il manque l'étape 4, l'explication finale qui relie le récit au monde actuel : on ne sait pas encore ce que la pierre est devenue ni pourquoi la tortue est lente aujourd'hui.",
                "b) Fin possible : « La pierre se colla à son dos et devint sa carapace. Depuis ce jour, la tortue avance lentement, courbée sous sa maison de pierre, et elle ne se moque plus de personne. »",
                "Vérification : la fin explique deux réalités (la carapace et la lenteur de la tortue), elle utilise une formule de clôture (« Depuis ce jour ») et elle rappelle la faute punie (l'orgueil), comme dans les mythes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque personnage à ce que son histoire explique.",
            pairs: [
              { left: "Arachné", right: "L'araignée qui tisse sa toile" },
              { left: "Écho", right: "Le son qui se répète dans les montagnes" },
              { left: "Narcisse", right: "Une fleur qui pousse au bord de l'eau" },
              { left: "Perséphone", right: "L'alternance des saisons" },
              { left: "Daphné", right: "Le laurier, arbre d'Apollon" },
              { left: "Pandore", right: "Les maux répandus dans le monde" },
            ],
          },
          quiz: [
            { q: "Que signifie le mot grec aitia, à l'origine de « étiologique » ?", options: ["Le temps", "La cause", "L'animal", "La fin"], answer: 1, why: "Aitia signifie « la cause » : un récit étiologique explique la cause, l'origine d'un élément du monde." },
            { q: "En quoi Arachné est-elle transformée ?", options: ["En araignée", "En laurier", "En fleur"], answer: 0, why: "Pour la punir de son orgueil, Minerve la change en araignée, condamnée à tisser." },
            { q: "Quel mythe explique l'alternance des saisons ?", options: ["Celui de Narcisse", "Celui de Pandore", "Celui de Babel", "Celui de Perséphone"], answer: 3, why: "Quand Perséphone séjourne aux Enfers, sa mère Déméter est triste et la nature cesse de produire : c'est l'hiver." },
            { q: "Quelle formule termine souvent un récit du « pourquoi » ?", options: ["« Il était une fois »", "« Au secours ! »", "« Depuis ce jour... »", "« Bonjour à tous »"], answer: 2, why: "Cette formule relie l'histoire au monde d'aujourd'hui et souligne ce qui a changé pour toujours." },
            { q: "Qui a écrit les Histoires comme ça (1902) ?", options: ["Ovide", "Hésiode", "Rudyard Kipling", "Homère"], answer: 2, why: "L'écrivain anglais Rudyard Kipling y invente avec humour des récits du pourquoi." },
          ],
          trap: "Oublier l'étape finale : un récit du « pourquoi » doit expliquer clairement ce qui existe aujourd'hui grâce à la transformation, sinon ce n'est qu'une histoire de punition.",
          method: "Pour analyser un récit étiologique, posez une seule question en premier : « À la fin, quel élément de notre monde est expliqué ? » Puis remontez le récit pour retrouver la faute et la transformation qui y mènent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-recit-origines',
          title: 'Écrire à votre tour un récit des origines',
          minutes: 35,
          objectives: [
            "Choisir un phénomène à expliquer et imaginer des personnages merveilleux.",
            "Construire un récit en cinq étapes selon le schéma narratif.",
            "Rédiger au passé en employant l'imparfait et le passé simple, et des formules propres aux mythes.",
            "Relire et améliorer votre texte à l'aide d'une grille de critères.",
          ],
          course: [
            {
              heading: "Choisir ce que l'on explique",
              paragraphs: [
                "Pour écrire un récit des origines, partez d'une question en « pourquoi » sur le monde qui vous entoure : pourquoi la lune change-t-elle de forme ? Pourquoi le chat ronronne-t-il ? Pourquoi la mer a-t-elle des vagues ? Choisissez un phénomène précis, que tout le monde connaît.",
                "Imaginez ensuite vos personnages. Comme dans les mythes, ils peuvent être des dieux (que vous inventez, avec un nom et un pouvoir), des animaux qui parlent ou des héros. Votre récit doit se dérouler dans un temps très ancien, quand le monde n'était pas encore tel que nous le connaissons.",
              ],
            },
            {
              heading: "Construire le récit : le schéma narratif",
              paragraphs: [
                "Un récit bien construit suit cinq étapes, que l'on appelle le schéma narratif. La situation initiale présente le monde d'avant, les personnages et le lieu. L'élément perturbateur est l'événement qui vient tout bouleverser : une faute, une dispute, un défi. Les péripéties sont les actions et les rebondissements qui suivent.",
                "L'élément de résolution met fin aux péripéties : c'est souvent la décision d'un dieu, une métamorphose ou une punition. Enfin, la situation finale présente le monde transformé, tel que nous le connaissons. Dans un récit des origines, c'est là que se place l'explication, avec une formule comme « Depuis ce jour... ».",
              ],
              box: { label: "Repère", text: "Schéma narratif : 1. situation initiale ; 2. élément perturbateur ; 3. péripéties ; 4. élément de résolution ; 5. situation finale. Dans un récit des origines, la situation finale explique le monde d'aujourd'hui." },
            },
            {
              heading: "Écrire comme un conteur des origines",
              paragraphs: [
                "Racontez au passé. Employez l'imparfait pour décrire le décor et les habitudes, ce qui sert d'arrière-plan : « Autrefois, le soleil brillait jour et nuit. » Employez le passé simple pour les actions principales, qui font avancer l'histoire : « Un jour, la déesse se fâcha. » Le passé simple, avec la troisième personne, donne au récit le ton solennel des vieux récits.",
                "Utilisez les formules qui ouvrent et ferment les mythes : « Au commencement », « En ce temps-là », « Il y a bien longtemps » pour commencer ; « Depuis ce jour », « C'est pourquoi, aujourd'hui encore » pour finir. Ajoutez du merveilleux (pouvoirs, transformations) et quelques détails précis qui rendent la scène vivante : une couleur, un son, une sensation.",
              ],
              box: { label: "Règle", text: "Imparfait : le décor, les descriptions, les habitudes (arrière-plan). Passé simple : les actions principales, qui font avancer le récit (premier plan)." },
            },
            {
              heading: "Relire avec une grille de critères",
              paragraphs: [
                "Une fois votre brouillon terminé, relisez-le à l'aide de questions précises. Le phénomène expliqué est-il clair dès la fin du texte ? Les cinq étapes sont-elles présentes et séparées en paragraphes ? Le récit se passe-t-il bien dans un temps des origines, avec du merveilleux ?",
                "Vérifiez ensuite la langue : l'imparfait et le passé simple sont-ils bien employés et bien conjugués ? Avez-vous évité les répétitions grâce aux reprises ? Chaque phrase commence-t-elle par une majuscule et se termine-t-elle par un point ? Corrigez, puis recopiez votre texte au propre.",
              ],
            },
          ],
          keyPoints: [
            "Partir d'une question en « pourquoi » sur un phénomène connu de tous.",
            "Inventer des personnages merveilleux : dieux, animaux qui parlent, héros.",
            "Suivre le schéma narratif : situation initiale, élément perturbateur, péripéties, résolution, situation finale.",
            "Imparfait pour le décor et les habitudes, passé simple pour les actions principales.",
            "Ouvrir par « Au commencement » ou « En ce temps-là », fermer par « Depuis ce jour ».",
            "Relire avec une grille : explication claire, cinq étapes, temps du passé, reprises, ponctuation.",
          ],
          example: {
            statement: "Préparez le plan d'un récit qui explique pourquoi la girafe a un long cou.",
            solution: [
              "Situation initiale : il y a bien longtemps, la girafe avait un cou court, comme celui d'un cheval, et vivait dans la savane avec les autres animaux.",
              "Élément perturbateur : une terrible sécheresse fit disparaître toute l'herbe ; seules les feuilles tout en haut des arbres restaient vertes.",
              "Péripéties : la girafe essaya de sauter, de grimper, de secouer les troncs, sans succès ; elle supplia le dieu du vent de l'aider.",
              "Élément de résolution : touché par sa persévérance, le dieu du vent souffla sur elle chaque matin, et son cou s'allongea un peu plus chaque jour.",
              "Situation finale : depuis ce jour, la girafe a un long cou et peut manger les feuilles que les autres animaux ne peuvent pas atteindre.",
              "Vérification : les cinq étapes sont présentes, le récit se passe dans un temps des origines, il contient du merveilleux et l'explication finale répond à la question de départ.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque phrase à son étape du schéma narratif : a) « Depuis ce jour, la lune change de forme chaque nuit. » b) « Autrefois, la lune était toujours ronde et pleine. » c) « Un soir, un loup affamé croqua un morceau de la lune. » d) « La déesse de la nuit décida que la lune se reconstruirait chaque mois. » e) « La lune appela au secours les étoiles, qui chassèrent le loup. »",
              hint: "Repérez d'abord le début (« Autrefois ») et la fin (« Depuis ce jour »), puis l'événement qui déclenche l'histoire.",
              solution: [
                "b) Situation initiale : « Autrefois, la lune était toujours ronde et pleine. »",
                "c) Élément perturbateur : le loup croque un morceau de la lune.",
                "e) Péripéties : la lune appelle les étoiles, qui chassent le loup.",
                "d) Élément de résolution : la déesse décide que la lune se reconstruira chaque mois.",
                "a) Situation finale : « Depuis ce jour, la lune change de forme chaque nuit. »",
              ],
            },
            {
              level: 2,
              statement: "Mettez les verbes entre parenthèses à l'imparfait ou au passé simple, selon qu'il s'agit du décor ou d'une action principale : « Au commencement, la mer (être) calme et silencieuse. Les poissons y (nager) en paix. Un jour, le dieu des tempêtes (plonger) sa main dans l'eau et la (remuer) de toutes ses forces. »",
              hint: "Le décor et ce qui dure sont à l'imparfait. Ce qui arrive soudainement, « un jour », est au passé simple.",
              solution: [
                "« la mer était calme » : imparfait, car c'est la description du décor.",
                "« Les poissons y nageaient » : imparfait, car c'est une habitude, une action qui dure en arrière-plan.",
                "« le dieu des tempêtes plongea » : passé simple, car c'est une action principale, qui survient « un jour ».",
                "« et la remua » : passé simple, car c'est l'action suivante, au premier plan.",
                "Texte complété : « Au commencement, la mer était calme et silencieuse. Les poissons y nageaient en paix. Un jour, le dieu des tempêtes plongea sa main dans l'eau et la remua de toutes ses forces. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un récit des origines d'une quinzaine de lignes qui explique pourquoi le chat ronronne. Votre texte doit respecter les cinq étapes du schéma narratif, être écrit au passé (imparfait et passé simple), contenir au moins un personnage divin inventé et se terminer par une formule d'explication.",
              hint: "Commencez par le plan en cinq étapes au brouillon. Demandez-vous ce que le ronronnement pourrait être à l'origine : un cadeau, une punition, un souvenir ?",
              solution: [
                "Plan : 1. autrefois, le chat était silencieux ; 2. la déesse du foyer perdit sa voix douce, volée par un vent jaloux ; 3. le chat partit la chercher et affronta le vent ; 4. pour le remercier, la déesse lui offrit un peu de cette voix ; 5. depuis, le chat ronronne quand il est heureux.",
                "Récit rédigé possible : « En ce temps-là, les chats ne faisaient aucun bruit. Ils marchaient sans un son et dormaient sans un souffle. La déesse Foyla, gardienne des maisons, chantait chaque soir une berceuse si douce que les enfants s'endormaient aussitôt. »",
                "« Une nuit, le vent du Nord, jaloux de ce chant, entra par la cheminée et vola la voix de la déesse. Les enfants ne dormirent plus et les maisons devinrent tristes. »",
                "« Un petit chat gris décida de retrouver la voix perdue. Il grimpa sur les toits, traversa les forêts et parvint enfin à la caverne du vent. Profitant de son sommeil, il saisit la voix entre ses dents et revint en courant. »",
                "« Foyla retrouva son chant. Pour remercier le petit chat, elle lui laissa garder un peu de sa berceuse au fond de la gorge. C'est pourquoi, aujourd'hui encore, le chat ronronne doucement quand il se blottit contre nous, comme pour nous endormir. »",
                "Vérification : cinq étapes (paragraphes), imparfait pour le décor (faisaient, marchaient, chantait), passé simple pour les actions (entra, vola, grimpa, retrouva), une déesse inventée (Foyla), du merveilleux, et une formule d'explication finale (« C'est pourquoi, aujourd'hui encore »).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : écrire un récit des origines.",
            statements: [
              { text: "La situation finale d'un récit des origines présente le monde tel que nous le connaissons.", true: true, why: "C'est là que se trouve l'explication du phénomène, souvent introduite par « Depuis ce jour »." },
              { text: "Le décor d'un récit au passé s'écrit au passé simple.", true: false, why: "Le décor et les descriptions s'écrivent à l'imparfait ; le passé simple est réservé aux actions principales." },
              { text: "« En ce temps-là » est une formule qui convient pour ouvrir un récit des origines.", true: true, why: "Elle situe l'histoire dans un passé très lointain, comme les mythes." },
              { text: "L'élément perturbateur est la dernière étape du schéma narratif.", true: false, why: "C'est la deuxième étape : il vient bouleverser la situation initiale." },
              { text: "On peut inventer ses propres dieux pour écrire un récit des origines.", true: true, why: "C'est même conseillé : un nom et un pouvoir suffisent à créer un personnage divin." },
              { text: "Un récit des origines n'a pas besoin d'expliquer quoi que ce soit.", true: false, why: "Son but est justement d'expliquer l'origine d'un phénomène ou d'un élément du monde." },
            ],
          },
          quiz: [
            { q: "Combien d'étapes compte le schéma narratif ?", options: ["Trois", "Quatre", "Cinq", "Six"], answer: 2, why: "Situation initiale, élément perturbateur, péripéties, élément de résolution, situation finale : cinq étapes." },
            { q: "Quel temps convient pour décrire le décor dans un récit au passé ?", options: ["L'imparfait", "Le passé simple", "Le futur"], answer: 0, why: "L'imparfait sert à l'arrière-plan : décor, descriptions, habitudes." },
            { q: "« Un jour, la déesse ... sa colère. » Quelle forme complète la phrase ?", options: ["montrait", "montrera", "montre", "montra"], answer: 3, why: "Il s'agit d'une action principale, soudaine (« Un jour ») : on emploie le passé simple, « montra »." },
            { q: "Dans quelle étape se place l'explication du phénomène ?", options: ["La situation initiale", "La situation finale", "L'élément perturbateur", "Les péripéties"], answer: 1, why: "La situation finale montre le monde transformé et explique ce qui existe aujourd'hui." },
            { q: "Laquelle de ces formules ouvre bien un récit des origines ?", options: ["« Pour conclure »", "« Au commencement »", "« Depuis ce jour »", "« Demain matin »"], answer: 1, why: "« Au commencement » situe le récit au temps des origines ; « Depuis ce jour » sert plutôt à finir." },
          ],
          trap: "Écrire tout le récit au passé simple, y compris les descriptions, ou tout à l'imparfait, y compris les actions soudaines : chaque temps a son rôle, l'arrière-plan pour l'imparfait, le premier plan pour le passé simple.",
          method: "Avant de rédiger, écrivez votre plan en cinq lignes, une par étape du schéma narratif. Si une ligne reste vide, votre histoire n'est pas prête : complétez-la avant de commencer.",
        },
      ],
    },
    {
      id: 'phrase',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'phrase-ponctuation',
          title: 'Reconnaître une phrase et bien la ponctuer',
          minutes: 25,
          objectives: [
            "Identifier une phrase : majuscule, ponctuation finale, sens.",
            "Distinguer la phrase verbale et la phrase non verbale.",
            "Employer les signes de ponctuation de fin de phrase et à l'intérieur de la phrase.",
            "Ponctuer correctement des paroles rapportées dans un dialogue.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une phrase ?",
              paragraphs: [
                "Une phrase est une suite de mots ordonnés qui a un sens complet. À l'écrit, elle commence par une majuscule et se termine par un signe de ponctuation forte : un point, un point d'interrogation, un point d'exclamation ou des points de suspension. « Chien le jardin dans court le » n'est pas une phrase, car les mots ne sont pas dans un ordre qui a du sens ; « Le chien court dans le jardin. » en est une.",
                "La plupart des phrases sont construites autour d'un verbe conjugué : ce sont des phrases verbales (« Le chien court. »). Mais certaines phrases n'ont pas de verbe conjugué et ont pourtant un sens complet : ce sont des phrases non verbales, fréquentes dans les titres, les panneaux et les exclamations (« Quelle belle journée ! », « Attention, chien méchant. », « Silence ! »).",
              ],
              box: { label: "Définition", text: "Une phrase est une suite de mots ordonnés qui a un sens. Elle commence par une majuscule et se termine par un point (. ? ! ...). La phrase verbale contient un verbe conjugué ; la phrase non verbale n'en contient pas." },
            },
            {
              heading: "La ponctuation de fin de phrase",
              paragraphs: [
                "Le point (.) termine une phrase qui donne une information ou un avis. Le point d'interrogation (?) termine une question : « Où vas-tu ? ». Le point d'exclamation (!) exprime une émotion forte (joie, surprise, colère) ou renforce un ordre : « Comme il fait chaud ! », « Viens ici ! ». Les points de suspension (...) indiquent qu'une phrase est inachevée, ou marquent une hésitation, un sous-entendu : « Je voulais te dire que... ».",
                "Après un signe de ponctuation forte, la phrase suivante commence par une majuscule. En français, on laisse une espace avant le point d'interrogation, le point d'exclamation, le point-virgule et les deux-points, mais pas avant le point ni la virgule.",
              ],
            },
            {
              heading: "La ponctuation à l'intérieur de la phrase",
              paragraphs: [
                "La virgule marque une petite pause. Elle sépare les éléments d'une énumération (« J'ai acheté du pain, du lait et des œufs. » : pas de virgule avant le « et » final). Elle isole un complément placé en tête de phrase (« Ce matin, il a neigé. ») et le nom de la personne à qui l'on s'adresse (« Paul, ferme la porte. »).",
                "Le point-virgule sépare deux parties de phrase étroitement liées : « Le soleil se couche ; les oiseaux se taisent. » Les deux-points annoncent une explication, une énumération ou des paroles : « Il est en retard : son bus est tombé en panne. » Les parenthèses encadrent une information secondaire : « Mon oncle (le frère de ma mère) vit à Lyon. »",
              ],
              box: { label: "Règle", text: "La virgule sépare les éléments d'une énumération (pas avant le « et » final), isole un complément en tête de phrase et le nom de la personne à qui l'on parle." },
            },
            {
              heading: "Ponctuer les paroles rapportées",
              paragraphs: [
                "Quand on rapporte les paroles exactes d'un personnage, on les annonce souvent par les deux-points et on les place entre guillemets (« »). Exemple : Le professeur demanda : « Qui a fini ? » Les paroles commencent par une majuscule et gardent leur propre ponctuation à l'intérieur des guillemets.",
                "Dans un dialogue, on va à la ligne à chaque changement de personnage qui parle, et l'on place un tiret au début de chaque nouvelle réplique. Le verbe de parole (dit-il, répondit-elle) peut être placé au milieu ou à la fin des paroles, entre virgules : on parle alors de proposition incise, avec le sujet placé après le verbe (« Je viens, répondit Léo. »).",
              ],
            },
          ],
          keyPoints: [
            "Une phrase a un sens, commence par une majuscule et finit par un point (. ? ! ...).",
            "Phrase verbale : avec un verbe conjugué. Phrase non verbale : sans verbe conjugué (« Silence ! »).",
            "Point : information ; point d'interrogation : question ; point d'exclamation : émotion ou ordre ; points de suspension : phrase inachevée.",
            "La virgule sépare une énumération (pas avant « et »), isole un complément en tête et le nom de la personne interpellée.",
            "Les deux-points annoncent une explication, une énumération ou des paroles.",
            "Paroles rapportées : deux-points et guillemets ; dans un dialogue, un tiret à chaque changement de personnage.",
          ],
          example: {
            statement: "Ajoutez les majuscules et les points nécessaires pour former trois phrases : « hier soir nous sommes allés au cinéma le film était très drôle mon petit frère a ri pendant toute la séance »",
            solution: [
              "Repérer les verbes conjugués et ce qui va avec : « nous sommes allés au cinéma », « le film était très drôle », « mon petit frère a ri pendant toute la séance ». Chaque groupe a un sens complet.",
              "Placer un point à la fin de chaque idée complète.",
              "Mettre une majuscule au début de chaque phrase.",
              "Ajouter la virgule après le complément placé en tête : « Hier soir, ».",
              "Résultat : « Hier soir, nous sommes allés au cinéma. Le film était très drôle. Mon petit frère a ri pendant toute la séance. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ajoutez le signe de ponctuation qui convient à la fin de chaque phrase (. ? ou !) : a) Quelle heure est-il b) Le train part à huit heures c) Quel magnifique coucher de soleil d) As-tu pris ton billet e) Nous arriverons ce soir",
              hint: "Lisez chaque phrase à voix haute : une question fait monter la voix, une émotion la rend plus forte, une information reste neutre.",
              solution: [
                "a) Quelle heure est-il ? (une question)",
                "b) Le train part à huit heures. (une information)",
                "c) Quel magnifique coucher de soleil ! (une émotion, l'admiration ; c'est aussi une phrase non verbale)",
                "d) As-tu pris ton billet ? (une question)",
                "e) Nous arriverons ce soir. (une information)",
              ],
            },
            {
              level: 2,
              statement: "Ajoutez les virgules nécessaires et justifiez chacune : a) Dans mon sac j'ai un cahier une trousse un livre et une gourde. b) Ce matin avant le petit déjeuner je suis allé courir. c) Léa viens voir ce que j'ai trouvé !",
              hint: "Cherchez trois cas : une énumération, un complément placé au début de la phrase, une personne à qui l'on parle. Attention au « et » final d'une énumération.",
              solution: [
                "a) « Dans mon sac, j'ai un cahier, une trousse, un livre et une gourde. » La première virgule isole le complément placé en tête (« Dans mon sac ») ; les autres séparent les éléments de l'énumération. Pas de virgule avant « et une gourde ».",
                "b) « Ce matin, avant le petit déjeuner, je suis allé courir. » Les deux compléments placés en tête de phrase sont isolés par des virgules.",
                "c) « Léa, viens voir ce que j'ai trouvé ! » La virgule isole le nom de la personne à qui l'on s'adresse.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Expliquez la différence de sens entre « On mange, les enfants ! » et « On mange les enfants ! ». b) Ponctuez ce passage en ajoutant les majuscules, les deux-points, les guillemets et la ponctuation finale : « le guide se retourna et demanda qui veut monter jusqu'au sommet moi s'écria Hugo »",
              hint: "Pour a), demandez-vous à qui l'on parle et ce que l'on mange dans chaque phrase. Pour b), repérez qui parle et quels sont les mots exacts prononcés.",
              solution: [
                "a) Dans « On mange, les enfants ! », la virgule isole « les enfants » : ce sont les personnes à qui l'on parle, on les appelle à table. Dans « On mange les enfants ! », sans virgule, « les enfants » devient ce que l'on mange : la phrase devient absurde et effrayante. Une simple virgule change le sens.",
                "b) Repérer les paroles : le guide dit « Qui veut monter jusqu'au sommet ? », puis Hugo dit « Moi ! ».",
                "Placer les deux-points avant les paroles annoncées par « demanda », les guillemets autour des paroles, la majuscule au début des paroles et la ponctuation propre à chaque réplique (une question, puis une exclamation).",
                "Pour la réponse d'Hugo, le verbe de parole est placé après les paroles, en incise, avec le sujet inversé (« s'écria Hugo »).",
                "Résultat : « Le guide se retourna et demanda : ‹ Qui veut monter jusqu'au sommet ? › ‹ Moi ! › s'écria Hugo. » (Dans un dialogue présenté ligne par ligne, chaque réplique irait à la ligne, précédée d'un tiret.)",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque signe de ponctuation à son rôle.",
            pairs: [
              { left: "Le point d'interrogation", right: "Termine une question" },
              { left: "Le point d'exclamation", right: "Exprime une émotion forte ou renforce un ordre" },
              { left: "Les points de suspension", right: "Marquent une phrase inachevée ou une hésitation" },
              { left: "Les deux-points", right: "Annoncent une explication, une énumération ou des paroles" },
              { left: "Les guillemets", right: "Encadrent les paroles exactes d'un personnage" },
              { left: "La virgule", right: "Sépare les éléments d'une énumération" },
            ],
          },
          quiz: [
            { q: "Laquelle de ces phrases est une phrase non verbale ?", options: ["Le chat dort.", "Il pleut.", "Viens vite !", "Quelle surprise !"], answer: 3, why: "« Quelle surprise ! » n'a pas de verbe conjugué ; les trois autres en ont un (dort, pleut, viens)." },
            { q: "Par quoi commence toujours une phrase à l'écrit ?", options: ["Une majuscule", "Un verbe", "Un nom propre", "Un sujet"], answer: 0, why: "Toute phrase commence par une majuscule, quel que soit le premier mot." },
            { q: "Où manque-t-il une virgule ? « Demain matin nous partirons en vacances. »", options: ["Après « nous »", "Après « partirons »", "Après « matin »"], answer: 2, why: "« Demain matin » est un complément placé en tête de phrase : on l'isole par une virgule." },
            { q: "Quel signe annonce une explication ou des paroles ?", options: ["Le point-virgule", "Les deux-points", "Les points de suspension", "Les parenthèses"], answer: 1, why: "Les deux-points annoncent une explication, une énumération ou des paroles rapportées." },
            { q: "« J'ai vu des lions, des zèbres ... des girafes. » Que faut-il écrire à la place des points ?", options: ["« , et »", "« ; et »", "« : »", "« et »"], answer: 3, why: "Dans une énumération, on ne met pas de virgule avant le « et » qui introduit le dernier élément." },
          ],
          trap: "Oublier la ponctuation et les majuscules et écrire de longues suites sans point, ou au contraire mettre une virgule avant le « et » final d'une énumération.",
          method: "Relisez votre texte à voix haute : là où vous reprenez votre souffle en fin d'idée, il faut un point ; là où vous faites une petite pause à l'intérieur d'une phrase, souvent une virgule.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'types-formes-phrase',
          title: 'Les types de phrases et la forme négative',
          minutes: 30,
          objectives: [
            "Identifier les types de phrases : déclarative, interrogative, impérative (ou injonctive), exclamative.",
            "Construire une phrase interrogative de trois façons, selon le niveau de langue.",
            "Transformer une phrase affirmative en phrase négative en employant correctement les deux mots de la négation.",
          ],
          course: [
            {
              heading: "Quatre types de phrases",
              paragraphs: [
                "Le type d'une phrase dépend de l'intention de celui qui parle. La phrase déclarative donne une information, raconte ou exprime un avis ; elle se termine par un point : « Le musée ouvre à dix heures. » La phrase interrogative pose une question ; elle se termine par un point d'interrogation : « À quelle heure ouvre le musée ? »",
                "La phrase impérative, aussi appelée injonctive, sert à donner un ordre, un conseil, une consigne ou une interdiction ; elle se termine par un point ou un point d'exclamation : « Fermez la porte. », « Ne touchez pas ! ». Son verbe est souvent à l'impératif, sans sujet exprimé, mais on trouve aussi l'infinitif dans les recettes et les consignes (« Battre les œufs. »).",
                "La phrase exclamative exprime une émotion ou un sentiment fort : la joie, la surprise, l'admiration, la colère. Elle se termine par un point d'exclamation et contient souvent un mot exclamatif comme « quel », « que » ou « comme » : « Comme ce tableau est beau ! », « Quelle chance tu as ! ».",
              ],
              box: { label: "À retenir", text: "Déclarative : informer (.). Interrogative : questionner (?). Impérative ou injonctive : ordonner, conseiller, interdire (. ou !). Exclamative : exprimer une émotion (!)." },
            },
            {
              heading: "Poser une question de trois façons",
              paragraphs: [
                "On peut construire une phrase interrogative de trois manières, qui correspondent à des niveaux de langue différents. Avec la seule intonation, la voix qui monte à l'oral : « Tu viens ? » (langage familier). Avec « est-ce que » : « Est-ce que tu viens ? » (langage courant). Avec l'inversion du sujet, placé après le verbe et relié par un trait d'union : « Viens-tu ? » (langage soutenu).",
                "Quand le sujet est un nom, on le garde avant le verbe et on le reprend par un pronom après le verbe : « Le musée est-il ouvert ? ». Si le verbe se termine par une voyelle et que le pronom commence par une voyelle, on ajoute un « t » entre traits d'union, pour la prononciation : « Va-t-il pleuvoir ? », « Léa a-t-elle fini ? ». Une question peut aussi commencer par un mot interrogatif : qui, que, quand, où, comment, pourquoi, combien.",
              ],
            },
            {
              heading: "La forme négative",
              paragraphs: [
                "Toute phrase est soit à la forme affirmative, soit à la forme négative. La forme négative se construit avec deux mots qui encadrent le verbe conjugué : « ne » (ou « n' » devant une voyelle) et un second mot : pas, plus, jamais, rien, personne. « Je mange » devient « Je ne mange pas ». Au passé composé, les deux mots encadrent l'auxiliaire : « Je n'ai pas mangé ».",
                "Le second mot précise le sens : « ne... plus » marque l'arrêt de ce qui existait avant, « ne... jamais » s'oppose à toujours ou souvent, « ne... rien » à quelque chose, « ne... personne » à quelqu'un. Attention : à l'oral, on oublie souvent le « ne » (« J'ai pas faim »), mais à l'écrit il est obligatoire. Après une négation, « un », « une », « du » et « des » deviennent souvent « de » : « J'ai des billes » devient « Je n'ai pas de billes ».",
              ],
              box: { label: "Règle", text: "La négation a deux mots qui encadrent le verbe conjugué (ou l'auxiliaire) : ne... pas, ne... plus, ne... jamais, ne... rien, ne... personne. À l'écrit, le « ne » est obligatoire." },
            },
            {
              heading: "Combiner le type et la forme",
              paragraphs: [
                "Chaque phrase a un seul type, mais elle peut être affirmative ou négative : les deux se combinent. « Tu ne viens pas ? » est une phrase interrogative à la forme négative ; « Ne cours pas dans le couloir. » est une phrase impérative à la forme négative ; « Il ne pleut plus. » est une phrase déclarative à la forme négative.",
                "Attention : le point d'exclamation ne suffit pas à reconnaître une phrase exclamative. « Sortez immédiatement ! » se termine par un point d'exclamation, mais c'est un ordre : c'est une phrase impérative. Pour trouver le type, demandez-vous toujours quelle est l'intention de celui qui parle.",
              ],
            },
          ],
          keyPoints: [
            "Le type de phrase dépend de l'intention : informer, questionner, ordonner, s'exclamer.",
            "Déclarative (.), interrogative (?), impérative ou injonctive (. ou !), exclamative (!).",
            "Trois façons d'interroger : l'intonation (familier), « est-ce que » (courant), l'inversion du sujet (soutenu).",
            "La négation encadre le verbe conjugué ou l'auxiliaire : ne... pas, plus, jamais, rien, personne.",
            "À l'écrit, le « ne » de la négation est obligatoire.",
            "Type et forme se combinent : une question peut être négative (« Ne viens-tu pas ? »).",
          ],
          example: {
            statement: "Donnez le type et la forme de la phrase « Ne mangez pas ce champignon ! », puis réécrivez-la à la forme affirmative.",
            solution: [
              "Chercher l'intention : la phrase donne un ordre, une interdiction, à quelqu'un.",
              "Observer le verbe : « mangez » est à l'impératif, sans sujet exprimé. Le point d'exclamation renforce l'ordre mais ne fait pas de la phrase une exclamative.",
              "Type : phrase impérative (ou injonctive).",
              "Forme : négative, car le verbe est encadré par « ne... pas ».",
              "Forme affirmative : on supprime les deux mots de la négation : « Mangez ce champignon ! »",
              "Réponse : phrase impérative à la forme négative ; à la forme affirmative, « Mangez ce champignon ! ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez le type de chaque phrase : a) Range ta chambre. b) Le collège est fermé le dimanche. c) Que ce gâteau est bon ! d) Pourquoi le ciel est-il bleu ? e) Préchauffer le four à 180 °C.",
              hint: "Pour chaque phrase, demandez-vous : celui qui parle veut-il informer, poser une question, donner un ordre ou une consigne, ou exprimer une émotion ?",
              solution: [
                "a) Phrase impérative : c'est un ordre, avec un verbe à l'impératif.",
                "b) Phrase déclarative : elle donne une information.",
                "c) Phrase exclamative : elle exprime le plaisir, avec le mot exclamatif « que ».",
                "d) Phrase interrogative : elle pose une question et commence par le mot interrogatif « pourquoi ».",
                "e) Phrase impérative (injonctive) : c'est une consigne de recette, avec un verbe à l'infinitif.",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces phrases à la forme négative en utilisant la négation indiquée : a) Il fait toujours ses devoirs. (ne... jamais) b) Quelqu'un a sonné à la porte. (ne... personne, avec « personne » comme sujet) c) Je vois quelque chose au loin. (ne... rien) d) Nous avons des questions. (ne... pas) e) Elle habite encore à Paris. (ne... plus)",
              hint: "Encadrez le verbe conjugué, ou l'auxiliaire au passé composé. Pensez à supprimer le mot qui s'oppose à la négation (toujours, quelque chose, encore) et à transformer « des » en « de ».",
              solution: [
                "a) « Il ne fait jamais ses devoirs. » « Toujours » disparaît, remplacé par « jamais ».",
                "b) « Personne n'a sonné à la porte. » Quand « personne » est sujet, il se place en tête et le « ne » (ici « n' ») reste devant le verbe.",
                "c) « Je ne vois rien au loin. » « Quelque chose » est remplacé par « rien ».",
                "d) « Nous n'avons pas de questions. » « Des » devient « de » après la négation, et « ne » devient « n' » devant la voyelle.",
                "e) « Elle n'habite plus à Paris. » « Encore » est remplacé par « plus ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. À partir de la phrase déclarative « Léa a fini ses devoirs. », écrivez : a) trois phrases interrogatives, du niveau de langue familier au niveau soutenu ; b) la phrase déclarative à la forme négative ; c) la phrase interrogative à la forme négative, avec inversion du sujet.",
              hint: "Avec un sujet nom (Léa), l'inversion se fait en reprenant le sujet par un pronom après l'auxiliaire. Le verbe « a » se termine par une voyelle : pensez au « t » entre traits d'union.",
              solution: [
                "a) Familier, par l'intonation : « Léa a fini ses devoirs ? » Courant, avec « est-ce que » : « Est-ce que Léa a fini ses devoirs ? » Soutenu, par l'inversion : « Léa a-t-elle fini ses devoirs ? »",
                "Explication de l'inversion : le sujet « Léa » reste en tête et il est repris par le pronom « elle » placé après l'auxiliaire « a » ; on ajoute « -t- » entre les deux voyelles pour la prononciation.",
                "b) Forme négative : « Léa n'a pas fini ses devoirs. » Au passé composé, « ne... pas » encadre l'auxiliaire « a », et « ne » s'élide en « n' ».",
                "c) Interrogative négative avec inversion : « Léa n'a-t-elle pas fini ses devoirs ? » La négation encadre le groupe formé par l'auxiliaire et le pronom inversé (« a-t-elle »).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : types de phrases et négation.",
            statements: [
              { text: "Une phrase qui se termine par un point d'exclamation est toujours exclamative.", true: false, why: "« Sortez ! » se termine par un point d'exclamation mais donne un ordre : c'est une phrase impérative." },
              { text: "« Est-ce que tu viens ? » appartient au langage courant.", true: true, why: "La question par l'intonation est familière, « est-ce que » est courant, l'inversion est soutenue." },
              { text: "À l'écrit, on peut supprimer le « ne » de la négation.", true: false, why: "À l'écrit, les deux mots de la négation sont obligatoires : « Je n'ai pas faim »." },
              { text: "Une phrase interrogative peut être à la forme négative.", true: true, why: "Le type et la forme se combinent : « Ne viens-tu pas ? » est interrogative et négative." },
              { text: "Au passé composé, la négation encadre l'auxiliaire.", true: true, why: "On écrit « Je n'ai pas mangé » : « ne... pas » entoure l'auxiliaire « ai »." },
              { text: "Une recette écrite à l'infinitif contient des phrases déclaratives.", true: false, why: "« Battre les œufs. » donne une consigne : c'est une phrase impérative (injonctive), même avec un infinitif." },
              { text: "Le contraire de « Il a toujours faim » est « Il n'a jamais faim ».", true: true, why: "« Ne... jamais » s'oppose à « toujours » ou « souvent »." },
            ],
          },
          quiz: [
            { q: "« Quel beau château ! » est une phrase :", options: ["exclamative", "interrogative", "impérative", "déclarative"], answer: 0, why: "Elle exprime l'admiration, avec le mot exclamatif « quel » et un point d'exclamation." },
            { q: "Quelle question appartient au langage soutenu ?", options: ["Tu as faim ?", "Est-ce que tu as faim ?", "As-tu faim ?"], answer: 2, why: "L'inversion du sujet (« As-tu ») appartient au langage soutenu." },
            { q: "Quelle est la forme négative de « Je vois quelqu'un » ?", options: ["Je vois personne.", "Je ne vois personne.", "Je ne vois pas quelqu'un.", "Je vois pas quelqu'un."], answer: 1, why: "« Quelqu'un » devient « personne », et le « ne » est obligatoire à l'écrit." },
            { q: "« Ne courez pas dans les escaliers. » Cette phrase est :", options: ["déclarative et affirmative", "exclamative et négative", "interrogative et négative", "impérative et négative"], answer: 3, why: "Elle donne une interdiction (impérative), et « ne... pas » encadre le verbe (négative)." },
            { q: "Quelle phrase est correctement écrite ?", options: ["Va-il pleuvoir ?", "Va-t-il pleuvoir ?", "Va t'il pleuvoir ?", "Va-t'il pleuvoir ?"], answer: 1, why: "Entre deux voyelles, on ajoute un « t » entouré de traits d'union, sans apostrophe : « Va-t-il »." },
          ],
          trap: "Croire qu'une phrase terminée par un point d'exclamation est forcément exclamative : un ordre comme « Taisez-vous ! » est une phrase impérative. Autre erreur fréquente : oublier le « ne » de la négation à l'écrit.",
          method: "Pour trouver le type d'une phrase, ne regardez pas d'abord la ponctuation : demandez-vous ce que veut celui qui parle (informer, questionner, ordonner, s'exclamer). Vérifiez ensuite que la ponctuation correspond.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'phrase-simple-complexe',
          title: 'Phrase simple et phrase complexe',
          minutes: 30,
          objectives: [
            "Identifier les verbes conjugués d'une phrase pour en compter les propositions.",
            "Distinguer la phrase simple et la phrase complexe.",
            "Reconnaître des propositions juxtaposées et coordonnées.",
            "Relier deux phrases simples pour former une phrase complexe.",
          ],
          course: [
            {
              heading: "Le verbe conjugué, cœur de la proposition",
              paragraphs: [
                "Une proposition est un ensemble de mots organisé autour d'un verbe conjugué. Pour savoir combien une phrase contient de propositions, il suffit donc de compter ses verbes conjugués : un verbe conjugué, une proposition ; deux verbes conjugués, deux propositions ; et ainsi de suite.",
                "Attention aux pièges. Un verbe à l'infinitif n'est pas conjugué : dans « Je veux partir », seul « veux » est conjugué. Un verbe à un temps composé, comme le passé composé, forme un seul verbe conjugué, même s'il s'écrit en deux mots : dans « Elle est arrivée hier », « est arrivée » compte pour un seul verbe.",
              ],
              box: { label: "Définition", text: "Une proposition est un groupe de mots organisé autour d'un verbe conjugué. Nombre de verbes conjugués = nombre de propositions. Un infinitif ne compte pas ; un temps composé (auxiliaire + participe) compte pour un seul verbe." },
            },
            {
              heading: "Phrase simple, phrase complexe",
              paragraphs: [
                "Une phrase simple contient un seul verbe conjugué, donc une seule proposition : « Le chat dort sur le canapé. » Une phrase complexe contient au moins deux verbes conjugués, donc au moins deux propositions : « Le chat dort sur le canapé et le chien garde la maison. »",
                "Pour bien voir les propositions, on peut les encadrer par des crochets : [Le chat dort sur le canapé] et [le chien garde la maison]. Chaque proposition contient son verbe conjugué et les mots qui s'organisent autour de lui.",
              ],
            },
            {
              heading: "Relier les propositions : juxtaposition et coordination",
              paragraphs: [
                "Les propositions juxtaposées sont simplement placées l'une à côté de l'autre et séparées par un signe de ponctuation : une virgule, un point-virgule ou deux-points. Exemple : [Le vent soufflait], [la pluie tombait]. Ou encore : [Il est resté chez lui] : [il était malade].",
                "Les propositions coordonnées sont reliées par une conjonction de coordination : mais, ou, et, donc, or, ni, car. Exemple : [Il pleuvait] mais [nous sommes sortis]. Le choix de la conjonction change le sens : « car » introduit une cause, « donc » une conséquence, « mais » une opposition. Certaines grammaires récentes classent « donc » parmi les adverbes, mais il relie lui aussi deux propositions.",
              ],
              box: { label: "Repère", text: "Juxtaposition : les propositions sont séparées par une virgule, un point-virgule ou deux-points. Coordination : elles sont reliées par mais, ou, et, donc, or, ni, car." },
            },
            {
              heading: "Un troisième lien : la subordination",
              paragraphs: [
                "Une proposition peut aussi dépendre d'une autre : elle est alors introduite par un mot subordonnant, comme « qui », « que », « quand », « parce que » ou « si ». Dans « [Le chien aboie] [quand le facteur arrive] », la seconde proposition ne pourrait pas former une phrase seule : elle dépend de la première. On parle de proposition subordonnée.",
                "Pour l'instant, retenez surtout que cette phrase est complexe, puisqu'elle contient deux verbes conjugués (aboie, arrive). L'étude détaillée des propositions subordonnées se poursuit dans les classes suivantes.",
              ],
            },
          ],
          keyPoints: [
            "Une proposition s'organise autour d'un verbe conjugué.",
            "Phrase simple : un seul verbe conjugué. Phrase complexe : au moins deux verbes conjugués.",
            "Un infinitif n'est pas un verbe conjugué ; un temps composé compte pour un seul verbe.",
            "Juxtaposition : propositions séparées par une virgule, un point-virgule ou deux-points.",
            "Coordination : propositions reliées par mais, ou, et, donc, or, ni, car.",
            "Subordination : une proposition dépend d'une autre, introduite par qui, que, quand, parce que, si...",
          ],
          example: {
            statement: "Analysez la phrase : « Le vent soufflait, la pluie tombait et les enfants restaient à la maison. » Est-elle simple ou complexe ? Délimitez les propositions et indiquez comment elles sont reliées.",
            solution: [
              "Repérer les verbes conjugués : « soufflait », « tombait », « restaient ». Il y en a trois.",
              "Conclure sur la nature de la phrase : trois verbes conjugués, donc trois propositions ; la phrase est complexe.",
              "Délimiter les propositions : [Le vent soufflait], [la pluie tombait] et [les enfants restaient à la maison].",
              "Identifier les liens : les deux premières propositions sont séparées par une virgule, elles sont juxtaposées ; la troisième est reliée à la deuxième par « et », elle est coordonnée.",
              "Réponse : phrase complexe de trois propositions, les deux premières juxtaposées, la dernière coordonnée par « et ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soulignez les verbes conjugués et dites si chaque phrase est simple ou complexe : a) Les élèves entrent dans la classe. b) Le professeur ouvre la fenêtre et les élèves s'assoient. c) Nous aimons beaucoup lire. d) Il a fini son repas, il est sorti jouer.",
              hint: "Ne comptez ni les infinitifs (lire, jouer) ni chaque mot d'un temps composé séparément : « a fini » est un seul verbe conjugué.",
              solution: [
                "a) Verbe conjugué : « entrent ». Un seul verbe : phrase simple.",
                "b) Verbes conjugués : « ouvre », « s'assoient ». Deux verbes : phrase complexe.",
                "c) Verbe conjugué : « aimons » (« lire » est à l'infinitif). Phrase simple.",
                "d) Verbes conjugués : « a fini », « est sorti » (deux verbes au passé composé ; « jouer » est un infinitif). Phrase complexe.",
              ],
            },
            {
              level: 2,
              statement: "Délimitez les propositions entre crochets et dites si elles sont juxtaposées ou coordonnées : a) Je voulais venir mais j'étais malade. b) Le soleil se lève ; les oiseaux chantent. c) Range ta chambre ou tu ne sortiras pas. d) Elle court vite : elle s'entraîne chaque jour.",
              hint: "Cherchez entre les propositions soit un signe de ponctuation (juxtaposition), soit l'une des conjonctions mais, ou, et, donc, or, ni, car (coordination).",
              solution: [
                "a) [Je voulais venir] mais [j'étais malade] : propositions coordonnées par « mais » (opposition).",
                "b) [Le soleil se lève] ; [les oiseaux chantent] : propositions juxtaposées par un point-virgule.",
                "c) [Range ta chambre] ou [tu ne sortiras pas] : propositions coordonnées par « ou ».",
                "d) [Elle court vite] : [elle s'entraîne chaque jour] : propositions juxtaposées par deux-points, qui annoncent ici une explication.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Reliez les deux phrases simples « Il pleuvait. Nous sommes restés à la maison. » de trois façons : par juxtaposition avec deux-points, par coordination avec « donc », puis avec « car » en inversant l'ordre des propositions. b) Expliquez pourquoi « Le soir venu, Tom a éteint la lumière pour dormir. » est une phrase simple.",
              hint: "Pour a), demandez-vous quelle proposition exprime la cause et laquelle la conséquence : « car » introduit la cause, « donc » la conséquence. Pour b), cherchez les verbes qui ne sont pas conjugués.",
              solution: [
                "a) Juxtaposition : « Nous sommes restés à la maison : il pleuvait. » Les deux-points annoncent l'explication, c'est-à-dire la cause.",
                "Coordination avec « donc » : « Il pleuvait, donc nous sommes restés à la maison. » « Donc » introduit la conséquence.",
                "Coordination avec « car » : « Nous sommes restés à la maison car il pleuvait. » « Car » introduit la cause, qui doit donc venir en second.",
                "b) Le seul verbe conjugué est « a éteint » (passé composé, qui compte pour un seul verbe). « Venu » est un participe passé employé seul, sans auxiliaire, et « dormir » est un infinitif : ni l'un ni l'autre n'est conjugué.",
                "Conclusion : un seul verbe conjugué, donc une seule proposition ; c'est une phrase simple, même si elle est longue.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase à sa construction.",
            pairs: [
              { left: "Le chien aboie.", right: "Phrase simple : un seul verbe conjugué" },
              { left: "Le chien aboie, le chat s'enfuit.", right: "Phrase complexe : propositions juxtaposées" },
              { left: "Le chien aboie mais le chat reste calme.", right: "Phrase complexe : propositions coordonnées" },
              { left: "Le chien aboie quand le facteur arrive.", right: "Phrase complexe : une proposition subordonnée" },
              { left: "Quel vacarme !", right: "Phrase non verbale : aucun verbe conjugué" },
            ],
          },
          quiz: [
            { q: "Combien de propositions la phrase « Je veux apprendre à nager » contient-elle ?", options: ["Une", "Deux", "Trois"], answer: 0, why: "Seul « veux » est conjugué ; « apprendre » et « nager » sont des infinitifs : une seule proposition." },
            { q: "Laquelle de ces phrases est complexe ?", options: ["Elle est partie très tôt.", "Nous allons nager.", "Le matin, il court.", "Il chante, elle danse."], answer: 3, why: "« Il chante, elle danse » contient deux verbes conjugués (chante, danse) : c'est une phrase complexe." },
            { q: "Dans « Il était fatigué, il s'est couché », les propositions sont :", options: ["coordonnées", "subordonnées", "juxtaposées", "non verbales"], answer: 2, why: "Elles sont séparées par une virgule, sans conjonction : elles sont juxtaposées." },
            { q: "Lequel de ces mots n'est pas une conjonction de coordination ?", options: ["mais", "car", "ni", "quand"], answer: 3, why: "« Quand » est un mot subordonnant ; mais, ou, et, donc, or, ni, car relient des propositions coordonnées." },
            { q: "« Nous sommes restés au chaud ... il neigeait. » Quel mot introduit la cause ?", options: ["donc", "car", "or", "ni"], answer: 1, why: "« Car » introduit la cause ; « donc » introduirait une conséquence." },
          ],
          trap: "Compter un infinitif comme un verbe conjugué, ou compter deux verbes pour un temps composé (« a mangé ») : seuls les verbes conjugués comptent, et un temps composé n'en fait qu'un.",
          method: "Pour analyser une phrase, procédez toujours dans le même ordre : soulignez les verbes conjugués, comptez-les, encadrez chaque proposition entre crochets, puis regardez ce qui se trouve entre les crochets (ponctuation, conjonction ou mot subordonnant).",
        },
      ],
    },
  ],
}
