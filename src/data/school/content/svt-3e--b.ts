import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-3e',
  chapters: [
    /* ==================================================================== */
    /* LES DÉFENSES DE L'ORGANISME                                            */
    /* ==================================================================== */
    {
      id: 'defenses-organisme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reaction-inflammatoire',
          title: 'La réaction immunitaire rapide : inflammation et phagocytose',
          minutes: 25,
          objectives: [
            "Identifier les barrières naturelles qui empêchent la pénétration des micro-organismes.",
            "Décrire les signes de la réaction inflammatoire et expliquer leur origine.",
            "Expliquer les étapes de la phagocytose et le rôle des phagocytes.",
          ],
          course: [
            {
              heading: "Les barrières naturelles de l'organisme",
              paragraphs: [
                "Notre environnement contient d'innombrables micro-organismes. La plupart ne pénètrent pas dans notre corps, car il est protégé par des barrières naturelles. La peau, intacte, forme une barrière physique très efficace : ses couches superficielles de cellules mortes empêchent le passage des microbes. Les muqueuses (bouche, nez, voies respiratoires, tube digestif) sont protégées par le mucus, qui piège les particules, et par des cils qui les évacuent.",
                "Certaines sécrétions sont aussi des barrières chimiques : les larmes et la salive contiennent une enzyme qui attaque la paroi de certaines bactéries, et le suc gastrique de l'estomac est très acide. Enfin, le microbiote (les bactéries qui vivent normalement sur la peau et dans l'intestin) occupe la place et limite l'installation des micro-organismes pathogènes.",
                "Quand une barrière est franchie, par exemple lors d'une coupure, d'une piqûre ou d'une brûlure, des micro-organismes pénètrent dans le milieu intérieur : c'est la contamination. Le système immunitaire réagit alors en quelques minutes.",
              ],
              box: { label: "À retenir", text: "Peau, muqueuses, mucus, larmes, acidité de l'estomac et microbiote forment les barrières naturelles. Une plaie permet aux microbes de les franchir : c'est la contamination." },
            },
            {
              heading: "La réaction inflammatoire",
              paragraphs: [
                "Quelques minutes à quelques heures après une blessure infectée, la zone touchée présente quatre signes caractéristiques : une rougeur, une chaleur, un gonflement et une douleur. Ces quatre signes forment la réaction inflammatoire. Elle n'est pas une maladie : c'est le signe que l'organisme se défend.",
                "Chacun de ces signes a une explication. Les vaisseaux sanguins proches de la plaie se dilatent : plus de sang arrive, ce qui explique la rougeur et la chaleur. Du plasma sort des vaisseaux vers les tissus, ce qui provoque le gonflement, et ce gonflement comprime les terminaisons nerveuses, d'où la douleur. Surtout, des globules blancs (ou leucocytes) traversent la paroi des vaisseaux et se rassemblent sur le lieu de l'infection.",
                "Cette réaction est rapide et elle est la même quel que soit le micro-organisme : on dit qu'elle est innée et non spécifique. Elle est présente dès la naissance et ne nécessite aucun apprentissage.",
              ],
              box: { label: "Définition", text: "La réaction inflammatoire est la réaction locale, rapide et non spécifique de l'organisme à une infection. Elle se manifeste par quatre signes : rougeur, chaleur, gonflement, douleur." },
            },
            {
              heading: "La phagocytose",
              paragraphs: [
                "Parmi les globules blancs qui arrivent sur le lieu de l'infection, certains sont capables d'englober et de digérer les micro-organismes : ce sont les phagocytes (par exemple les macrophages et certains granulocytes, appelés aussi polynucléaires). Ce mécanisme s'appelle la phagocytose, du grec phagein, manger, et kutos, cellule.",
                "La phagocytose se déroule en quatre étapes. 1) L'adhésion : le phagocyte reconnaît le micro-organisme et s'y colle. 2) L'ingestion : il l'entoure avec des prolongements de sa membrane et l'enferme dans une vésicule à l'intérieur de sa cellule. 3) La digestion : des enzymes détruisent le micro-organisme dans la vésicule. 4) Le rejet : les déchets de la digestion sont expulsés hors de la cellule.",
                "Le pus qui se forme parfois dans une plaie est un mélange de phagocytes morts, de micro-organismes et de débris de cellules : c'est une trace du combat qui a eu lieu.",
              ],
              box: { label: "Repère", text: "Phagocytose : adhésion, ingestion, digestion, rejet des déchets. Elle est réalisée par les phagocytes (macrophages, granulocytes)." },
            },
            {
              heading: "Quand la réaction rapide ne suffit pas",
              paragraphs: [
                "Dans la plupart des cas, la réaction inflammatoire et la phagocytose suffisent à éliminer les micro-organismes en quelques jours. Mais si les microbes sont trop nombreux, se multiplient trop vite ou résistent à la phagocytose (comme beaucoup de virus, qui se cachent dans nos cellules), l'infection se propage.",
                "Les phagocytes jouent alors un second rôle : après avoir digéré un micro-organisme, ils présentent des fragments de celui-ci aux lymphocytes, ce qui déclenche une deuxième ligne de défense, plus lente mais spécifique : la réaction immunitaire adaptative, étudiée dans la leçon suivante.",
              ],
            },
          ],
          keyPoints: [
            "La peau, les muqueuses, les sécrétions (larmes, mucus, suc gastrique) et le microbiote forment des barrières naturelles.",
            "Une plaie permet la contamination : les micro-organismes entrent dans le milieu intérieur.",
            "Réaction inflammatoire : rougeur, chaleur, gonflement, douleur. Elle est rapide, innée et non spécifique.",
            "Les phagocytes (macrophages, granulocytes) éliminent les microbes par phagocytose.",
            "Phagocytose : adhésion, ingestion, digestion, rejet des déchets.",
            "Si la réaction rapide ne suffit pas, les lymphocytes prennent le relais.",
          ],
          example: {
            statement: "Léa s'est enfoncé une écharde dans le doigt. Le lendemain, la zone est rouge, chaude, gonflée et douloureuse. Expliquez ce qui se passe dans son doigt.",
            solution: [
              "L'écharde a percé la peau, qui est une barrière naturelle : des micro-organismes ont pu pénétrer dans les tissus. C'est une contamination.",
              "L'organisme réagit par une réaction inflammatoire. Les vaisseaux sanguins se dilatent : plus de sang arrive, d'où la rougeur et la chaleur.",
              "Du plasma sort des vaisseaux, ce qui fait gonfler le doigt, et ce gonflement appuie sur les nerfs, ce qui provoque la douleur.",
              "Des globules blancs, les phagocytes, quittent les vaisseaux et se rendent sur place pour éliminer les micro-organismes par phagocytose.",
              "Conclusion : les quatre signes observés sont ceux de la réaction inflammatoire, une défense rapide et non spécifique de l'organisme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants en deux colonnes, barrière physique ou barrière chimique : la peau, l'acidité du suc gastrique, le mucus des voies respiratoires, l'enzyme des larmes, les cils des voies respiratoires.",
              hint: "Une barrière physique bloque ou évacue les microbes mécaniquement ; une barrière chimique les attaque grâce à une substance.",
              solution: [
                "Barrières physiques : la peau (elle bloque le passage), le mucus (il piège les particules) et les cils des voies respiratoires (ils évacuent le mucus et ce qu'il contient).",
                "Barrières chimiques : l'acidité du suc gastrique (elle détruit de nombreux microbes avalés) et l'enzyme des larmes (elle attaque la paroi de certaines bactéries).",
              ],
            },
            {
              level: 2,
              statement: "On observe au microscope un phagocyte à quatre moments, notés A, B, C et D. En A, une bactérie se trouve dans une vésicule à l'intérieur du phagocyte et commence à être détruite. En B, la bactérie est collée à la membrane du phagocyte. En C, des débris sont expulsés hors de la cellule. En D, le phagocyte entoure la bactérie avec des prolongements de sa membrane. Remettez les images dans l'ordre et nommez chaque étape.",
              hint: "Rappelez-vous l'ordre des quatre étapes : le phagocyte doit d'abord toucher la bactérie avant de pouvoir l'avaler.",
              solution: [
                "B : la bactérie est collée à la membrane, c'est l'adhésion.",
                "D : le phagocyte entoure la bactérie avec sa membrane, c'est l'ingestion.",
                "A : la bactérie est détruite dans une vésicule, c'est la digestion.",
                "C : les débris sont expulsés, c'est le rejet des déchets.",
                "Ordre : B, D, A, C.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un document indique le nombre de phagocytes par millimètre cube de tissu au niveau d'une plaie infectée : 50 au moment de la blessure, 400 après 6 heures, 1 200 après 24 heures, 300 après 4 jours, 60 après 7 jours. Le nombre de bactéries, très élevé au départ, devient nul au septième jour. a) Calculez par combien le nombre de phagocytes a été multiplié entre la blessure et 24 heures. b) Mettez en relation l'évolution des phagocytes et celle des bactéries. c) Concluez sur le rôle des phagocytes.",
              hint: "Pour a), divisez la valeur à 24 heures par la valeur de départ. Pour b), décrivez les deux évolutions puis cherchez un lien de cause à effet.",
              solution: [
                "a) 1 200 ÷ 50 = 24. Le nombre de phagocytes a été multiplié par 24 en 24 heures.",
                "b) Les phagocytes affluent très vite vers la plaie (de 50 à 1 200 par mm³ en 24 heures) pendant que les bactéries sont nombreuses. Puis, quand les bactéries disparaissent, le nombre de phagocytes revient presque à sa valeur de départ (60 au septième jour).",
                "c) Les phagocytes se rassemblent sur le lieu de l'infection et éliminent les bactéries par phagocytose. Une fois les bactéries détruites, leur présence n'est plus nécessaire.",
                "Conclusion : les phagocytes participent à la réaction immunitaire rapide en éliminant les bactéries qui ont pénétré par la plaie.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les événements qui suivent une blessure infectée.",
            items: [
              "La peau est coupée et des bactéries pénètrent dans les tissus.",
              "Les vaisseaux sanguins proches de la plaie se dilatent.",
              "Des phagocytes sortent des vaisseaux et arrivent sur la plaie.",
              "Un phagocyte adhère à une bactérie.",
              "Le phagocyte ingère la bactérie dans une vésicule.",
              "La bactérie est digérée par des enzymes.",
              "Les déchets sont rejetés hors du phagocyte.",
            ],
          },
          quiz: [
            {
              q: "Lequel de ces éléments n'est pas une barrière naturelle contre les microbes ?",
              options: ["La peau intacte", "Le sang", "Le mucus des voies respiratoires", "L'acidité de l'estomac"],
              answer: 1,
              why: "Le sang fait partie du milieu intérieur : quand des microbes y arrivent, la barrière a déjà été franchie.",
            },
            {
              q: "Quels sont les quatre signes de la réaction inflammatoire ?",
              options: ["Fièvre, toux, fatigue, frissons", "Pâleur, froid, gonflement, démangeaison", "Rougeur, froid, douleur, saignement", "Rougeur, chaleur, gonflement, douleur"],
              answer: 3,
              why: "Ces quatre signes locaux s'expliquent par la dilatation des vaisseaux et la sortie de plasma et de globules blancs.",
            },
            {
              q: "La réaction inflammatoire est dite non spécifique, car :",
              options: ["elle se déroule de la même façon quel que soit le micro-organisme", "elle ne concerne que les bactéries, jamais les virus ni les champignons microscopiques", "elle n'apparaît qu'après une vaccination", "elle dure plusieurs semaines"],
              answer: 0,
              why: "Elle ne dépend pas de l'identité du microbe : c'est une défense innée, prête dès la naissance.",
            },
            {
              q: "Quelle est l'étape de la phagocytose où le microbe est détruit par des enzymes ?",
              options: ["L'adhésion", "L'ingestion", "La digestion", "Le rejet des déchets"],
              answer: 2,
              why: "Pendant la digestion, des enzymes détruisent le micro-organisme enfermé dans une vésicule du phagocyte.",
            },
            {
              q: "Le pus d'une plaie infectée contient surtout :",
              options: ["des anticorps et des globules rouges", "des phagocytes morts, des microbes et des débris", "du plasma pur", "des cellules de peau neuves qui referment peu à peu la plaie"],
              answer: 1,
              why: "Le pus est le reste du combat entre les phagocytes et les micro-organismes.",
            },
          ],
          trap: "Croire que l'inflammation est une maladie ou un signe que l'infection gagne : c'est au contraire la réaction de défense normale de l'organisme. Autre confusion fréquente : appeler la phagocytose « la digestion » alors que la digestion n'en est qu'une étape.",
          method: "Pour expliquer les quatre signes de l'inflammation, partez toujours de la même cause, la dilatation des vaisseaux, puis déroulez la chaîne : plus de sang (rougeur, chaleur), sortie de plasma (gonflement), compression des nerfs (douleur).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'lymphocytes-anticorps',
          title: 'Les lymphocytes et les anticorps',
          minutes: 30,
          objectives: [
            "Définir un antigène et expliquer la spécificité de la reconnaissance par les lymphocytes.",
            "Expliquer le rôle des lymphocytes B et des anticorps.",
            "Expliquer le rôle des lymphocytes T dans la destruction des cellules infectées.",
            "Interpréter un test de séropositivité.",
          ],
          course: [
            {
              heading: "Antigènes et lymphocytes",
              paragraphs: [
                "Lorsque la réaction rapide ne suffit pas, une deuxième défense se met en place : la réaction immunitaire adaptative. Elle repose sur des globules blancs particuliers, les lymphocytes. Ils sont produits dans la moelle osseuse, circulent dans le sang et la lymphe et se concentrent dans les ganglions lymphatiques, la rate et les amygdales.",
                "Un lymphocyte reconnaît une molécule étrangère précise, appelée antigène, présente par exemple à la surface d'une bactérie ou d'un virus. Chaque lymphocyte ne reconnaît qu'un seul antigène : on dit que la reconnaissance est spécifique. L'organisme possède des millions de lymphocytes différents, si bien que presque tout antigène est reconnu par quelques-uns d'entre eux.",
                "Quand un lymphocyte rencontre l'antigène qu'il reconnaît, il est sélectionné et se multiplie : il forme un grand nombre de lymphocytes identiques, tous capables de reconnaître ce même antigène. Cette étape demande plusieurs jours, ce qui explique que la réaction adaptative soit plus lente que l'inflammation.",
              ],
              box: { label: "Définition", text: "Un antigène est une molécule reconnue comme étrangère par le système immunitaire et capable de déclencher une réaction immunitaire adaptative. Chaque lymphocyte reconnaît un seul antigène : la reconnaissance est spécifique." },
            },
            {
              heading: "Les lymphocytes B et les anticorps",
              paragraphs: [
                "Après leur multiplication, les lymphocytes B se transforment en cellules sécrétrices, les plasmocytes, qui libèrent dans le sang des molécules appelées anticorps. Un plasmocyte peut fabriquer plusieurs milliers d'anticorps par seconde. Chaque anticorps est spécifique : il ne se fixe que sur l'antigène qui a déclenché sa production, comme une clé dans sa serrure.",
                "En se fixant sur l'antigène, l'anticorps forme un complexe antigène-anticorps (appelé aussi complexe immun). Ce complexe neutralise le micro-organisme ou la toxine : un virus recouvert d'anticorps ne peut plus entrer dans les cellules, et les bactéries agglomérées ne peuvent plus se multiplier normalement. Les complexes immuns sont ensuite éliminés par phagocytose, qui est facilitée par la présence des anticorps.",
                "Les anticorps agissent dans le sang et les liquides du corps, c'est-à-dire contre les micro-organismes et les toxines qui circulent hors des cellules.",
              ],
              box: { label: "À retenir", text: "Lymphocyte B → multiplication → plasmocytes → anticorps spécifiques → complexe antigène-anticorps → neutralisation puis phagocytose." },
            },
            {
              heading: "Les lymphocytes T et les cellules infectées",
              paragraphs: [
                "Un virus se multiplie à l'intérieur de nos cellules, où les anticorps ne peuvent pas l'atteindre. Une cellule infectée présente cependant à sa surface des fragments du virus. Certains lymphocytes T, appelés lymphocytes T cytotoxiques (ou T tueurs), reconnaissent spécifiquement ces cellules infectées.",
                "Après sélection et multiplication, les lymphocytes T cytotoxiques se fixent sur les cellules infectées et les détruisent, ce qui empêche le virus de continuer à se multiplier. Les débris sont ensuite éliminés par phagocytose. D'autres lymphocytes T, les T4 (ou T auxiliaires), coordonnent la réponse : ils stimulent la multiplication des lymphocytes B et des lymphocytes T cytotoxiques.",
              ],
              box: { label: "Repère", text: "Lymphocytes B : anticorps, contre les microbes et toxines hors des cellules. Lymphocytes T cytotoxiques : destruction des cellules infectées. Lymphocytes T4 : coordination de la réponse." },
            },
            {
              heading: "La séropositivité et l'exemple du VIH",
              paragraphs: [
                "Une personne est dite séropositive pour un micro-organisme lorsque son sang contient des anticorps dirigés contre lui : cela prouve que son système immunitaire l'a rencontré. Les tests de dépistage de nombreuses infections recherchent ces anticorps. Il faut quelques semaines après la contamination pour qu'ils soient détectables.",
                "Le virus de l'immunodéficience humaine (VIH) infecte et détruit les lymphocytes T4. Après plusieurs années sans traitement, le nombre de T4 s'effondre, la coordination de la réponse immunitaire n'est plus assurée et des maladies dites opportunistes, normalement bénignes, deviennent graves : c'est le sida. Les traitements actuels empêchent cette évolution, et le préservatif protège de la contamination lors des rapports sexuels.",
              ],
            },
          ],
          keyPoints: [
            "Un antigène est une molécule étrangère reconnue par le système immunitaire.",
            "Chaque lymphocyte reconnaît un seul antigène : la réaction adaptative est spécifique et prend plusieurs jours.",
            "Les lymphocytes B deviennent des plasmocytes qui sécrètent des anticorps spécifiques.",
            "Anticorps + antigène = complexe immun, qui neutralise le microbe et facilite sa phagocytose.",
            "Les lymphocytes T cytotoxiques détruisent les cellules infectées par un virus.",
            "Être séropositif, c'est avoir dans le sang des anticorps contre un micro-organisme donné.",
          ],
          example: {
            statement: "Une expérience classique : on place du sérum (la partie liquide du sang, qui contient les anticorps) d'une personne guérie de la diphtérie dans un tube avec la toxine diphtérique, et dans un autre tube avec la toxine du tétanos. Dans le premier tube, la toxine est neutralisée ; dans le second, elle ne l'est pas. Expliquez ces résultats.",
            solution: [
              "Le sérum de la personne guérie contient des anticorps produits par ses plasmocytes lors de la diphtérie.",
              "Ces anticorps sont dirigés contre la toxine diphtérique, qui a joué le rôle d'antigène.",
              "Dans le premier tube, les anticorps se fixent sur la toxine diphtérique et forment des complexes antigène-anticorps : la toxine est neutralisée.",
              "Dans le second tube, la toxine du tétanos est un antigène différent : les anticorps antidiphtériques ne peuvent pas s'y fixer.",
              "Conclusion : les anticorps sont spécifiques, ils n'agissent que contre l'antigène qui a provoqué leur production.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec les mots qui conviennent (antigène, plasmocytes, anticorps, lymphocytes T cytotoxiques, spécifique) : « Un lymphocyte B reconnaît un seul ... : la reconnaissance est ... . Après sa multiplication, il donne des ... qui sécrètent des ... . Les cellules infectées par un virus sont détruites par les ... . »",
              hint: "Suivez la chaîne de la réponse : reconnaissance, multiplication, production, puis destruction des cellules infectées.",
              solution: [
                "Un lymphocyte B reconnaît un seul antigène : la reconnaissance est spécifique.",
                "Après sa multiplication, il donne des plasmocytes qui sécrètent des anticorps.",
                "Les cellules infectées par un virus sont détruites par les lymphocytes T cytotoxiques.",
              ],
            },
            {
              level: 2,
              statement: "On mesure la quantité d'anticorps anti-rougeole dans le sang d'un enfant contaminé au jour 0. Jour 0 : 0 unité ; jour 4 : 0 unité ; jour 8 : 20 unités ; jour 14 : 120 unités ; jour 21 : 100 unités. a) Décrivez l'évolution. b) Expliquez pourquoi aucun anticorps n'est présent pendant les premiers jours.",
              hint: "Pour b), rappelez-vous ce qui doit se passer avant que des anticorps soient sécrétés : reconnaissance, multiplication, transformation.",
              solution: [
                "a) Aucun anticorps n'est détecté jusqu'au jour 4. Ils apparaissent ensuite et augmentent fortement jusqu'à un maximum de 120 unités au jour 14, puis diminuent légèrement (100 unités au jour 21).",
                "b) Avant de produire des anticorps, les quelques lymphocytes B capables de reconnaître le virus de la rougeole doivent être sélectionnés, se multiplier puis se transformer en plasmocytes. Ces étapes prennent plusieurs jours.",
                "Conclusion : la réaction immunitaire adaptative est spécifique mais lente, ce qui explique le délai d'apparition des anticorps.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Le test de dépistage du VIH recherche dans le sang des anticorps anti-VIH. Trois personnes font un test : Paul a un résultat positif ; Inès a un résultat négatif, mais elle a pris un risque il y a 5 jours ; Marc a un résultat négatif et n'a pris aucun risque depuis plus de trois mois. a) Que signifie un résultat positif pour Paul ? b) Peut-on conclure qu'Inès n'est pas contaminée ? Justifiez. c) Expliquez pourquoi le VIH affaiblit tout le système immunitaire.",
              hint: "Rappelez-vous que les anticorps ne sont pas produits immédiatement après la contamination, et pensez au type de cellules que le VIH infecte.",
              solution: [
                "a) Paul est séropositif : son sang contient des anticorps anti-VIH, ce qui prouve que son système immunitaire a rencontré le virus. Il est donc porteur du VIH.",
                "b) Non. Il faut quelques semaines après la contamination pour que les anticorps deviennent détectables. Un test réalisé 5 jours après un risque peut être négatif même si Inès est contaminée : elle devra refaire un test plus tard (et un médecin peut lui proposer un traitement préventif rapidement après le risque).",
                "c) Le VIH infecte et détruit les lymphocytes T4, qui coordonnent la réponse immunitaire en stimulant les lymphocytes B et les lymphocytes T cytotoxiques. Quand leur nombre s'effondre, toute la réponse adaptative est affaiblie et des maladies opportunistes apparaissent : c'est le sida.",
                "Conclusion : un test négatif n'a de valeur qu'après le délai d'apparition des anticorps, et le VIH est dangereux parce qu'il s'attaque aux cellules qui organisent la défense.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque acteur de l'immunité à son rôle.",
            pairs: [
              { left: "Antigène", right: "Molécule étrangère qui déclenche la réaction" },
              { left: "Lymphocyte B", right: "Se transforme en plasmocyte après multiplication" },
              { left: "Plasmocyte", right: "Sécrète des anticorps dans le sang" },
              { left: "Anticorps", right: "Se fixe sur un antigène précis et le neutralise" },
              { left: "Lymphocyte T cytotoxique", right: "Détruit les cellules infectées par un virus" },
              { left: "Lymphocyte T4", right: "Coordonne la réponse, cible du VIH" },
            ],
          },
          quiz: [
            {
              q: "Où les lymphocytes sont-ils produits ?",
              options: ["Dans le cœur", "Dans le foie", "Dans la moelle osseuse", "Dans les glandes salivaires"],
              answer: 2,
              why: "Les lymphocytes, comme tous les globules blancs, sont produits dans la moelle osseuse, puis circulent dans le sang et la lymphe.",
            },
            {
              q: "Quelles cellules sécrètent les anticorps ?",
              options: ["Les plasmocytes", "Les lymphocytes T cytotoxiques", "Les globules rouges", "Les macrophages"],
              answer: 0,
              why: "Les plasmocytes sont issus de la transformation des lymphocytes B après leur multiplication.",
            },
            {
              q: "Un anticorps anti-tétanos peut-il neutraliser le virus de la grippe ?",
              options: ["Oui, tous les anticorps agissent sur tous les microbes", "Oui, si la quantité d'anticorps est suffisante", "Seulement chez l'enfant", "Non, car un anticorps est spécifique d'un antigène"],
              answer: 3,
              why: "Un anticorps ne se fixe que sur l'antigène qui a déclenché sa production.",
            },
            {
              q: "Comment l'organisme élimine-t-il une cellule déjà infectée par un virus ?",
              options: ["Les anticorps entrent dans la cellule", "Des lymphocytes T cytotoxiques la détruisent", "Les globules rouges l'entourent et la privent de dioxygène", "Elle guérit seule en quelques minutes"],
              answer: 1,
              why: "Les anticorps agissent hors des cellules ; les cellules infectées sont détruites par les lymphocytes T cytotoxiques.",
            },
            {
              q: "Une personne séropositive pour un virus est une personne :",
              options: ["dont le sang contient des anticorps contre ce virus", "qui a reçu tous les vaccins obligatoires et ne peut plus tomber malade", "qui ne peut pas transmettre le virus", "dont les lymphocytes ont disparu"],
              answer: 0,
              why: "La séropositivité est la présence dans le sang (le sérum) d'anticorps dirigés contre un micro-organisme.",
            },
          ],
          trap: "Confondre antigène et anticorps : l'antigène est la molécule étrangère, portée par le microbe ; l'anticorps est la molécule fabriquée par l'organisme pour s'y fixer. Autre erreur : dire que les anticorps « tuent » les microbes, alors qu'ils les neutralisent et que la destruction finale est faite par phagocytose.",
          method: "Pour ne plus confondre les acteurs, construisez un schéma en deux branches à partir du mot « antigène » : branche B (plasmocytes, anticorps, microbes hors des cellules) et branche T (T cytotoxiques, cellules infectées). Refaites-le de mémoire jusqu'à ce qu'il soit juste.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'vaccination',
          title: 'La vaccination et la mémoire immunitaire',
          minutes: 30,
          objectives: [
            "Comparer la réponse immunitaire lors d'un premier et d'un second contact avec un antigène.",
            "Expliquer le principe de la vaccination à partir de la mémoire immunitaire.",
            "Argumenter l'intérêt individuel et collectif de la vaccination.",
          ],
          course: [
            {
              heading: "La mémoire immunitaire",
              paragraphs: [
                "Lors d'un premier contact avec un antigène, la réponse adaptative est lente et peu intense : les anticorps apparaissent après plusieurs jours et en quantité modérée. C'est la réponse primaire. Pendant ce délai, la maladie a le temps de se développer.",
                "Lors de cette première réponse, une partie des lymphocytes sélectionnés ne participe pas au combat : ils deviennent des lymphocytes mémoire, qui vivent très longtemps (parfois toute la vie). Ils sont plus nombreux que les lymphocytes de départ et réagissent plus vite.",
                "Lors d'un second contact avec le même antigène, les lymphocytes mémoire se multiplient immédiatement : la réponse secondaire est plus rapide, plus intense (beaucoup plus d'anticorps) et plus durable. Le micro-organisme est souvent éliminé avant que la maladie n'apparaisse. C'est pourquoi on n'attrape en général qu'une fois la rougeole ou la varicelle.",
              ],
              box: { label: "À retenir", text: "Réponse primaire (premier contact) : lente, faible. Réponse secondaire (second contact avec le même antigène) : rapide, intense, durable, grâce aux lymphocytes mémoire." },
            },
            {
              heading: "Le principe de la vaccination",
              paragraphs: [
                "Vacciner, c'est provoquer volontairement une réponse primaire sans provoquer la maladie. Le vaccin contient l'antigène d'un micro-organisme rendu inoffensif : micro-organisme tué ou atténué, toxine inactivée, fragment du microbe, ou encore molécule d'ARN messager qui fait fabriquer temporairement par nos cellules une protéine du virus.",
                "L'organisme réagit à ce vaccin comme à une première infection : il produit des anticorps et surtout des lymphocytes mémoire. Si, plus tard, la personne est contaminée par le vrai micro-organisme, la réponse secondaire se déclenche aussitôt et la protège. La vaccination est donc préventive : elle agit avant la maladie.",
                "Pour certains vaccins, une seule injection ne suffit pas à produire assez de lymphocytes mémoire, ou cette mémoire diminue avec le temps : on pratique alors des injections de rappel, qui provoquent chacune une réponse secondaire.",
              ],
              box: { label: "Définition", text: "La vaccination consiste à introduire dans l'organisme un antigène rendu inoffensif afin de déclencher une réponse immunitaire et la formation de lymphocytes mémoire, qui protégeront lors d'une contamination ultérieure." },
            },
            {
              heading: "Une histoire de la vaccination",
              paragraphs: [
                "En 1796, le médecin anglais Edward Jenner observe que les personnes qui ont contracté la vaccine (une maladie bénigne de la vache) ne développent pas la variole, une maladie souvent mortelle. Il inocule la vaccine à un enfant, qui se révèle ensuite protégé contre la variole. Le mot vaccin vient de là (du latin vacca, la vache).",
                "En 1885, Louis Pasteur applique pour la première fois à un humain son vaccin contre la rage, sur le jeune Joseph Meister, mordu par un chien enragé, qui survit. Grâce à une vaccination massive organisée dans le monde entier, l'Organisation mondiale de la santé a déclaré la variole éradiquée en 1980 : c'est la seule maladie humaine éradiquée à ce jour.",
              ],
            },
            {
              heading: "Vaccin et sérum, protection individuelle et collective",
              paragraphs: [
                "Il ne faut pas confondre vaccination et sérothérapie. Le sérum contient des anticorps déjà fabriqués (par un autre organisme) : il protège immédiatement mais pendant peu de temps, et il ne crée pas de mémoire. On l'utilise en urgence, par exemple après une morsure de serpent venimeux. Le vaccin, lui, met quelques semaines à agir, mais la protection dure longtemps car l'organisme l'a construite lui-même.",
                "La vaccination protège la personne vaccinée, mais aussi les autres. Quand une grande partie de la population est vaccinée, le micro-organisme circule beaucoup moins : les personnes qui ne peuvent pas être vaccinées (nourrissons trop jeunes, personnes malades ou dont l'immunité est affaiblie) sont alors protégées indirectement. C'est l'immunité collective. En France, plusieurs vaccins sont obligatoires pour les jeunes enfants, comme ceux contre la diphtérie, le tétanos et la poliomyélite.",
              ],
              box: { label: "Repère", text: "Vaccin : préventif, protection lente à s'installer mais durable, mémoire immunitaire. Sérum : curatif, protection immédiate mais brève, sans mémoire." },
            },
          ],
          keyPoints: [
            "Réponse primaire : lente et faible. Réponse secondaire : rapide, intense et durable.",
            "Les lymphocytes mémoire, formés lors du premier contact, expliquent la réponse secondaire.",
            "Un vaccin contient un antigène inoffensif : il provoque une réponse primaire sans maladie.",
            "Les rappels entretiennent la mémoire immunitaire.",
            "Sérum = anticorps tout faits, effet immédiat et bref. Vaccin = effet durable, préventif.",
            "L'immunité collective protège aussi les personnes qui ne peuvent pas être vaccinées.",
          ],
          example: {
            statement: "Un enfant reçoit une première injection d'un vaccin au jour 0, puis un rappel au jour 60. Ses anticorps atteignent 10 unités au jour 14 après la première injection, puis presque 0 au jour 50. Après le rappel, ils atteignent 150 unités dès le jour 65 et restent élevés plusieurs mois. Comparez les deux réponses et expliquez la différence.",
            solution: [
              "Après la première injection, les anticorps mettent 14 jours à atteindre leur maximum et ne dépassent pas 10 unités : c'est une réponse primaire, lente et faible.",
              "Après le rappel, le maximum est atteint en 5 jours seulement (jour 65) et vaut 150 unités, soit 15 fois plus (150 ÷ 10 = 15). La réponse dure plusieurs mois : c'est une réponse secondaire.",
              "La différence s'explique par les lymphocytes mémoire formés après la première injection : plus nombreux et plus réactifs, ils se multiplient immédiatement lors du rappel.",
              "Conclusion : le rappel déclenche une réponse secondaire plus rapide, plus intense et plus durable, ce qui renforce la protection de l'enfant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez s'il faut utiliser un vaccin ou un sérum, et justifiez : a) un randonneur vient d'être mordu par une vipère ; b) un nourrisson doit être protégé contre la coqueluche ; c) une personne non vaccinée s'est blessée profondément avec un outil rouillé et risque le tétanos dans les heures qui viennent.",
              hint: "Demandez-vous si la protection doit être immédiate (urgence) ou durable (prévention).",
              solution: [
                "a) Sérum : il faut neutraliser le venin immédiatement, et le sérum apporte des anticorps déjà fabriqués.",
                "b) Vaccin : il s'agit de prévenir une maladie future, la protection doit être durable et le vaccin crée une mémoire immunitaire.",
                "c) Sérum pour la protection immédiate, car un vaccin mettrait plusieurs semaines à agir. On réalise d'ailleurs souvent en même temps une vaccination, pour protéger la personne durablement.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez pourquoi une personne qui a eu la varicelle étant enfant ne la développe généralement plus, même si elle est en contact avec un enfant malade.",
              hint: "Pensez à ce qui reste dans l'organisme après la guérison d'une première infection.",
              solution: [
                "Lors de la première infection, le système immunitaire a mis en place une réponse primaire contre le virus de la varicelle, et des lymphocytes mémoire spécifiques de ce virus ont été formés.",
                "Lors d'un nouveau contact avec le virus, ces lymphocytes mémoire déclenchent une réponse secondaire rapide et intense.",
                "Le virus est éliminé avant d'avoir pu se multiplier suffisamment pour provoquer la maladie.",
                "Conclusion : la personne est immunisée grâce à sa mémoire immunitaire.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Dans une école de 400 élèves, 380 sont vaccinés contre la rougeole et 20 ne le sont pas (dont 5 pour raison médicale). Un élève non vacciné contracte la rougeole. a) Calculez le pourcentage d'élèves vaccinés. b) Expliquez pourquoi le virus a peu de chances de se répandre dans l'école. c) Rédigez un argument expliquant à une famille hésitante pourquoi la vaccination de son enfant protège aussi les 5 élèves qui ne peuvent pas être vaccinés.",
              hint: "Pour a), utilisez (nombre de vaccinés ÷ effectif total) × 100. Pour c), utilisez la notion d'immunité collective.",
              solution: [
                "a) (380 ÷ 400) × 100 = 95 %. 95 % des élèves sont vaccinés.",
                "b) Les élèves vaccinés possèdent des lymphocytes mémoire spécifiques du virus de la rougeole : s'ils sont contaminés, une réponse secondaire rapide élimine le virus avant qu'ils ne tombent malades et ne le transmettent. Le malade rencontre donc surtout des élèves protégés, et la chaîne de transmission s'interrompt.",
                "c) Argument : en se faisant vacciner, votre enfant ne pourra pas, s'il est contaminé, développer la maladie ni transmettre le virus. Plus les élèves vaccinés sont nombreux, moins le virus circule, et les 5 élèves qui ne peuvent pas être vaccinés pour raison médicale ont alors très peu de risques de le rencontrer : c'est l'immunité collective.",
                "Conclusion : la vaccination est à la fois une protection individuelle et une protection collective.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la vaccination et la mémoire immunitaire.",
            statements: [
              { text: "Un vaccin contient un antigène rendu inoffensif.", true: true, why: "Il déclenche une réponse immunitaire sans provoquer la maladie." },
              { text: "Un vaccin agit immédiatement après l'injection.", true: false, why: "Il faut plusieurs jours à plusieurs semaines pour que la réponse primaire se mette en place." },
              { text: "Les lymphocytes mémoire expliquent l'efficacité de la vaccination.", true: true, why: "Ils déclenchent une réponse secondaire rapide lors d'une contamination ultérieure." },
              { text: "Le sérum crée une mémoire immunitaire durable.", true: false, why: "Le sérum apporte des anticorps déjà fabriqués, qui disparaissent en quelques semaines sans créer de mémoire." },
              { text: "La réponse secondaire produit plus d'anticorps que la réponse primaire.", true: true, why: "Elle est plus intense, plus rapide et plus durable." },
              { text: "Se faire vacciner ne protège que soi-même.", true: false, why: "En limitant la circulation du microbe, on protège aussi les personnes non vaccinées : c'est l'immunité collective." },
              { text: "Un vaccin contre la rougeole protège aussi contre la grippe.", true: false, why: "La réponse immunitaire est spécifique : un vaccin ne protège que contre l'antigène qu'il contient." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la caractéristique de la réponse primaire ?",
              options: ["Elle est très rapide", "Elle produit beaucoup d'anticorps", "Elle n'existe que chez l'adulte", "Elle est lente et peu intense"],
              answer: 3,
              why: "Lors du premier contact, peu de lymphocytes reconnaissent l'antigène : il faut du temps pour qu'ils se multiplient.",
            },
            {
              q: "Qui a réalisé en 1796 la première vaccination contre la variole ?",
              options: ["Louis Pasteur", "Edward Jenner", "Alexander Fleming", "Marie Curie"],
              answer: 1,
              why: "Edward Jenner a utilisé la vaccine, une maladie bénigne de la vache, d'où le mot vaccin.",
            },
            {
              q: "Pourquoi fait-on des injections de rappel ?",
              options: ["Pour soigner une maladie déjà déclarée en apportant des anticorps tout faits", "Pour éliminer les lymphocytes mémoire", "Pour déclencher une réponse secondaire et entretenir la mémoire", "Pour remplacer les globules rouges"],
              answer: 2,
              why: "Chaque rappel provoque une réponse secondaire qui renforce et prolonge la protection.",
            },
            {
              q: "Un sérum est utilisé :",
              options: ["en urgence, pour une protection immédiate", "pour une protection qui dure plusieurs années après l'injection", "pour créer des lymphocytes mémoire", "uniquement contre les virus"],
              answer: 0,
              why: "Il contient des anticorps déjà fabriqués : il agit tout de suite, mais peu de temps.",
            },
            {
              q: "Quelle maladie a été déclarée éradiquée par l'OMS en 1980 grâce à la vaccination ?",
              options: ["La rougeole", "La grippe", "La variole", "La tuberculose"],
              answer: 2,
              why: "La variole est la seule maladie humaine éradiquée à ce jour, grâce à une vaccination mondiale.",
            },
          ],
          trap: "Croire que le vaccin soigne une maladie déjà déclarée : il est préventif et agit par la mémoire immunitaire. Confondre aussi vaccin (antigène inoffensif, l'organisme fabrique lui-même ses défenses) et sérum (anticorps tout faits).",
          method: "Devant un graphique d'anticorps avec deux injections, comparez toujours trois critères chiffrés : le délai avant l'apparition des anticorps, la quantité maximale et la durée. Ces trois mots (plus rapide, plus intense, plus durable) font la réponse attendue.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'antibiotiques-resistance',
          title: 'Les antibiotiques et la résistance bactérienne',
          minutes: 25,
          objectives: [
            "Expliquer l'action des antibiotiques sur les bactéries et leur inefficacité contre les virus.",
            "Interpréter un antibiogramme.",
            "Expliquer l'apparition de bactéries résistantes par la sélection naturelle.",
            "Argumenter en faveur d'un usage raisonné des antibiotiques.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un antibiotique ?",
              paragraphs: [
                "Un antibiotique est une substance qui tue les bactéries ou qui bloque leur multiplication. Les premiers antibiotiques étaient produits par des champignons microscopiques ou des bactéries ; aujourd'hui, beaucoup sont fabriqués par l'industrie. Ils aident le système immunitaire à éliminer une infection bactérienne qu'il ne parvient pas à contrôler seul.",
                "En 1928, le chercheur écossais Alexander Fleming remarque qu'une moisissure, Penicillium, a contaminé une de ses boîtes de culture et que les bactéries ne poussent plus autour d'elle. Il en tire la pénicilline, le premier antibiotique, produit en grande quantité à partir des années 1940. Les antibiotiques ont permis de soigner des maladies autrefois souvent mortelles, comme la pneumonie bactérienne ou la tuberculose.",
              ],
              box: { label: "Définition", text: "Un antibiotique est une substance qui détruit les bactéries ou empêche leur multiplication. Il est sans effet sur les virus." },
            },
            {
              heading: "Pourquoi les antibiotiques sont inefficaces contre les virus",
              paragraphs: [
                "Les antibiotiques agissent sur des structures propres aux bactéries, comme leur paroi ou la machinerie qui leur permet de fabriquer leurs protéines. Les virus ne possèdent pas ces structures : ce ne sont pas des cellules, et ils se multiplient à l'intérieur de nos propres cellules. Un antibiotique n'a donc aucun effet sur un rhume, une grippe ou la plupart des angines d'origine virale.",
                "Prendre un antibiotique contre une infection virale ne soigne rien, mais expose à des effets indésirables (troubles digestifs, déséquilibre du microbiote) et favorise l'apparition de bactéries résistantes. C'est le sens du slogan de l'Assurance maladie : « Les antibiotiques, c'est pas automatique ».",
              ],
            },
            {
              heading: "L'antibiogramme",
              paragraphs: [
                "Toutes les bactéries ne sont pas sensibles aux mêmes antibiotiques. Pour choisir le bon traitement, on réalise un antibiogramme : on étale les bactéries prélevées chez le malade sur une boîte de culture, puis on dépose des pastilles imprégnées de différents antibiotiques. Après une nuit à 37 °C, les bactéries ont formé un tapis, sauf autour de certaines pastilles.",
                "Une zone claire sans bactéries autour d'une pastille, appelée halo ou zone d'inhibition, montre que l'antibiotique empêche la multiplication de cette bactérie : la bactérie est sensible. Plus le halo est grand, plus l'antibiotique est efficace. Si les bactéries poussent jusqu'au contact de la pastille, elles sont résistantes à cet antibiotique.",
              ],
              box: { label: "Repère", text: "Antibiogramme : halo large autour de la pastille = bactérie sensible ; pas de halo = bactérie résistante. On choisit l'antibiotique qui donne le plus grand halo." },
            },
            {
              heading: "L'apparition des bactéries résistantes",
              paragraphs: [
                "Dans une population de milliards de bactéries, des mutations se produisent au hasard lors des divisions. Certaines mutations rendent par hasard une bactérie résistante à un antibiotique. Ce n'est pas l'antibiotique qui provoque ces mutations : les bactéries résistantes existaient, en très petit nombre, avant le traitement.",
                "Quand on utilise l'antibiotique, les bactéries sensibles sont détruites, mais les rares bactéries résistantes survivent et se multiplient sans concurrence : elles deviennent majoritaires. C'est un exemple de sélection naturelle, que l'on observe à l'échelle de quelques jours car une bactérie peut se diviser toutes les vingt minutes dans de bonnes conditions. Plus on utilise les antibiotiques, plus on sélectionne de bactéries résistantes.",
                "Pour préserver l'efficacité des antibiotiques, il faut les prendre uniquement sur prescription médicale, respecter la dose et la durée du traitement, ne jamais réutiliser les restes d'une boîte, et limiter leur usage dans l'élevage. L'hygiène et la vaccination, en évitant les infections, réduisent aussi le besoin d'antibiotiques.",
              ],
              box: { label: "À retenir", text: "Les mutations qui rendent une bactérie résistante apparaissent au hasard. L'antibiotique ne les crée pas : il élimine les bactéries sensibles et sélectionne les résistantes." },
            },
          ],
          keyPoints: [
            "Un antibiotique tue les bactéries ou bloque leur multiplication ; il est inefficace contre les virus.",
            "Fleming découvre la pénicilline en 1928.",
            "Antibiogramme : un halo autour de la pastille indique que la bactérie est sensible à l'antibiotique.",
            "Les bactéries résistantes apparaissent par mutation, au hasard, avant tout traitement.",
            "L'antibiotique sélectionne les bactéries résistantes : c'est la sélection naturelle.",
            "Usage raisonné : sur prescription, dose et durée respectées, jamais contre un virus.",
          ],
          example: {
            statement: "Un antibiogramme est réalisé sur une bactérie prélevée chez un malade. Diamètre du halo autour de chaque pastille : antibiotique A, 0 mm (les bactéries touchent la pastille) ; antibiotique B, 25 mm ; antibiotique C, 12 mm. Quel antibiotique le médecin doit-il prescrire ? Justifiez.",
            solution: [
              "Un halo est une zone où les bactéries ne se sont pas multipliées : il montre que l'antibiotique agit sur elles.",
              "Antibiotique A : aucun halo, la bactérie est résistante, A est inefficace.",
              "Antibiotique B : halo de 25 mm, la bactérie est très sensible. Antibiotique C : halo de 12 mm, la bactérie est sensible mais moins.",
              "Le plus grand halo est obtenu avec B (25 mm > 12 mm > 0 mm).",
              "Conclusion : le médecin doit prescrire l'antibiotique B, le plus efficace contre cette bactérie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque maladie, indiquez si un antibiotique peut être utile, en justifiant : a) une grippe (due à un virus) ; b) une infection urinaire due à la bactérie Escherichia coli ; c) un rhume (dû à un virus) ; d) une angine à streptocoque (une bactérie).",
              hint: "Un antibiotique n'agit que sur les bactéries.",
              solution: [
                "a) Grippe : non, c'est une maladie virale et les antibiotiques n'agissent pas sur les virus.",
                "b) Infection urinaire à Escherichia coli : oui, c'est une bactérie, un antibiotique peut être prescrit.",
                "c) Rhume : non, c'est une maladie virale.",
                "d) Angine à streptocoque : oui, c'est une infection bactérienne (le médecin peut le vérifier par un test rapide).",
              ],
            },
            {
              level: 2,
              statement: "Une bactérie se divise en deux toutes les 20 minutes dans de bonnes conditions. On part d'une seule bactérie résistante à un antibiotique, dans un milieu où cet antibiotique a éliminé toutes les bactéries sensibles. a) Combien de divisions successives se produisent en 3 heures ? b) Combien de bactéries résistantes obtient-on au bout de 3 heures ? c) Que montre ce calcul ?",
              hint: "3 heures = 180 minutes. À chaque division, le nombre de bactéries est multiplié par 2.",
              solution: [
                "a) 180 ÷ 20 = 9 divisions successives en 3 heures.",
                "b) Le nombre de bactéries double 9 fois : 2⁹ = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 512 bactéries résistantes.",
                "c) Ce calcul montre qu'une seule bactérie résistante, sans concurrence, peut très vite donner une population nombreuse : la résistance se répand rapidement quand l'antibiotique a éliminé les bactéries sensibles.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un élève affirme : « Quand on prend trop d'antibiotiques, les bactéries s'habituent et deviennent résistantes. » À l'aide de vos connaissances, montrez que cette phrase contient une erreur, puis expliquez correctement l'augmentation du nombre de bactéries résistantes. Proposez enfin deux comportements responsables.",
              hint: "Demandez-vous si une bactérie peut changer parce qu'elle « s'habitue », ou si les bactéries résistantes étaient déjà là avant le traitement.",
              solution: [
                "L'erreur : les bactéries ne « s'habituent » pas à l'antibiotique, et l'antibiotique ne les transforme pas. La résistance est due à des mutations qui apparaissent au hasard lors des divisions, avant même le traitement.",
                "Explication : dans une population de bactéries, quelques-unes sont résistantes par hasard. L'antibiotique détruit les bactéries sensibles ; les résistantes survivent, se multiplient sans concurrence et deviennent majoritaires. C'est une sélection naturelle.",
                "Plus on utilise d'antibiotiques, plus souvent cette sélection a lieu, et plus les bactéries résistantes se répandent.",
                "Comportements responsables : ne prendre des antibiotiques que sur prescription médicale (jamais contre un rhume ou une grippe) ; respecter la dose et la durée du traitement, sans réutiliser les restes d'une boîte.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui conduisent à une population de bactéries résistantes.",
            items: [
              "Une population de bactéries se multiplie dans l'organisme.",
              "Au hasard des divisions, une mutation rend quelques bactéries résistantes.",
              "Un antibiotique est utilisé contre l'infection.",
              "Les bactéries sensibles sont détruites.",
              "Les bactéries résistantes survivent et se multiplient sans concurrence.",
              "La population est désormais composée surtout de bactéries résistantes.",
            ],
          },
          quiz: [
            {
              q: "Contre lequel de ces micro-organismes un antibiotique est-il efficace ?",
              options: ["Une bactérie", "Le virus de la grippe", "Le virus du rhume", "Tous les micro-organismes"],
              answer: 0,
              why: "Les antibiotiques agissent sur des structures propres aux bactéries, que les virus ne possèdent pas.",
            },
            {
              q: "Qui a découvert la pénicilline en 1928 ?",
              options: ["Louis Pasteur", "Edward Jenner", "Alexander Fleming", "Antoni van Leeuwenhoek"],
              answer: 2,
              why: "Fleming a observé qu'une moisissure, Penicillium, empêchait la croissance des bactéries.",
            },
            {
              q: "Sur un antibiogramme, l'absence de halo autour d'une pastille signifie que :",
              options: ["l'antibiotique est le plus efficace de tous ceux qui ont été testés", "la bactérie est résistante à cet antibiotique", "la bactérie est un virus", "l'expérience a échoué"],
              answer: 1,
              why: "Les bactéries poussent jusqu'à la pastille : l'antibiotique n'empêche pas leur multiplication.",
            },
            {
              q: "D'où viennent les bactéries résistantes ?",
              options: ["L'antibiotique les transforme", "Elles s'habituent progressivement au médicament à force d'être en contact avec lui", "Le système immunitaire les fabrique", "De mutations apparues au hasard, puis sélectionnées par l'antibiotique"],
              answer: 3,
              why: "Les mutations existent avant le traitement ; l'antibiotique élimine les sensibles et laisse les résistantes se multiplier.",
            },
            {
              q: "Lequel de ces comportements favorise la résistance aux antibiotiques ?",
              options: ["Respecter la durée prescrite", "Prendre un antibiotique contre un rhume", "Se laver les mains régulièrement à l'eau et au savon", "Être à jour de ses vaccinations"],
              answer: 1,
              why: "Un antibiotique est inutile contre un virus, mais il sélectionne quand même des bactéries résistantes dans l'organisme.",
            },
          ],
          trap: "Écrire que l'antibiotique « rend les bactéries résistantes » ou que les bactéries « s'habituent » : la mutation de résistance apparaît au hasard, et l'antibiotique ne fait que sélectionner les bactéries qui la portent.",
          method: "Pour expliquer une résistance, utilisez toujours les trois mots de la sélection naturelle, dans l'ordre : variation (mutation au hasard), sélection (l'antibiotique élimine les sensibles), multiplication (les résistantes deviennent majoritaires).",
        },
      ],
    },

    /* ==================================================================== */
    /* SANTÉ ET COMPORTEMENTS RESPONSABLES                                    */
    /* ==================================================================== */
    {
      id: 'sante-comportements',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'alimentation-microbiote',
          title: 'Alimentation, microbiote et santé',
          minutes: 25,
          objectives: [
            "Décrire le microbiote intestinal et ses rôles dans le fonctionnement de l'organisme.",
            "Relier l'alimentation à l'équilibre du microbiote et à la santé.",
            "Expliquer les règles de conservation des aliments à partir de la multiplication des micro-organismes.",
            "Argumenter en faveur de comportements alimentaires favorables à la santé.",
          ],
          course: [
            {
              heading: "Le microbiote intestinal, un organe vivant",
              paragraphs: [
                "Notre intestin, surtout le gros intestin (le côlon), abrite un ensemble immense de micro-organismes : principalement des bactéries, mais aussi des levures et des virus. Cet ensemble s'appelle le microbiote intestinal. Il compte plusieurs dizaines de milliers de milliards de bactéries, appartenant à plusieurs centaines d'espèces différentes.",
                "Le microbiote se met en place dès la naissance (au moment de l'accouchement, puis par l'allaitement, l'alimentation et le contact avec l'environnement) et se stabilise au cours des premières années de la vie. Chaque personne possède un microbiote qui lui est propre, un peu comme une empreinte.",
                "La relation entre nous et ces bactéries est une symbiose, c'est-à-dire une association à bénéfice réciproque : nous leur offrons un milieu de vie chaud et de la nourriture, et elles nous rendent de nombreux services.",
              ],
              box: { label: "Définition", text: "Le microbiote intestinal est l'ensemble des micro-organismes, surtout des bactéries, qui vivent normalement dans notre intestin, en symbiose avec nous." },
            },
            {
              heading: "Les rôles du microbiote",
              paragraphs: [
                "Le microbiote participe à la digestion : nos propres enzymes ne savent pas digérer les fibres alimentaires (présentes dans les fruits, les légumes, les légumineuses et les céréales complètes), mais certaines bactéries intestinales les dégradent et produisent des substances utiles à l'organisme, notamment pour les cellules de la paroi de l'intestin. Certaines bactéries fabriquent aussi des vitamines, comme la vitamine K.",
                "Le microbiote joue aussi un rôle de protection : en occupant la place et en consommant les nutriments disponibles, il empêche les bactéries pathogènes de s'installer. Enfin, il participe au bon fonctionnement du système immunitaire, qui apprend à son contact à distinguer ce qui est dangereux de ce qui ne l'est pas.",
              ],
              box: { label: "À retenir", text: "Rôles du microbiote : digestion des fibres, production de certaines vitamines, protection contre les micro-organismes pathogènes, contribution au bon fonctionnement du système immunitaire." },
            },
            {
              heading: "L'alimentation, le microbiote et la santé",
              paragraphs: [
                "Ce que nous mangeons nourrit aussi notre microbiote. Une alimentation variée et riche en fibres favorise un microbiote diversifié, c'est-à-dire composé de nombreuses espèces, ce qui est associé à une bonne santé. À l'inverse, une alimentation pauvre en fibres et riche en produits sucrés, gras et très transformés tend à appauvrir le microbiote. Un déséquilibre durable du microbiote, appelé dysbiose, est observé dans plusieurs maladies, comme l'obésité ou certaines maladies inflammatoires de l'intestin.",
                "Les antibiotiques ne détruisent pas seulement les bactéries responsables d'une infection : ils touchent aussi les bactéries du microbiote, ce qui explique les troubles digestifs qu'ils provoquent parfois. Le microbiote se reconstitue en général en quelques semaines, mais pas toujours complètement : c'est une raison de plus de ne pas prendre d'antibiotiques sans nécessité.",
                "Les recommandations nutritionnelles de santé publique en France conseillent notamment de manger au moins cinq portions de fruits et légumes par jour, des légumineuses (lentilles, pois chiches, haricots secs) au moins deux fois par semaine, de privilégier les féculents complets, de limiter les produits sucrés, salés et gras, et de pratiquer une activité physique régulière.",
              ],
            },
            {
              heading: "Conserver les aliments pour éviter les intoxications",
              paragraphs: [
                "Les aliments sont aussi un milieu de vie pour des micro-organismes, dont certains sont pathogènes ou produisent des toxines. Leur multiplication dépend de la température : elle est rapide entre environ 20 °C et 40 °C, ralentie au réfrigérateur (vers 4 °C) et stoppée au congélateur (vers -18 °C). La congélation ne tue pas la plupart des micro-organismes : ils reprennent leur multiplication à la décongélation. La cuisson, en revanche, en tue la majorité.",
                "D'où quelques règles simples : respecter la chaîne du froid (ranger rapidement les produits frais au réfrigérateur), ne jamais recongeler un aliment décongelé, respecter les dates limites de consommation, bien cuire les viandes hachées et les volailles, se laver les mains avant de cuisiner et ne pas mélanger les ustensiles utilisés pour les aliments crus et cuits.",
              ],
              box: { label: "Repère", text: "Froid (4 °C) : multiplication ralentie. Congélation (-18 °C) : multiplication stoppée, mais microbes non tués. Cuisson : la plupart des microbes sont tués." },
            },
          ],
          keyPoints: [
            "Le microbiote intestinal regroupe des milliers de milliards de micro-organismes vivant en symbiose avec nous.",
            "Il digère les fibres, produit des vitamines, protège contre les pathogènes et aide le système immunitaire.",
            "Une alimentation variée et riche en fibres favorise un microbiote diversifié.",
            "Les antibiotiques perturbent aussi le microbiote.",
            "Le froid ralentit ou stoppe la multiplication des microbes ; la cuisson en tue la plupart.",
          ],
          example: {
            statement: "Tom mange tous les jours des produits très transformés, peu de fruits et de légumes, et boit beaucoup de sodas. Expliquez en quoi ce régime peut agir sur son microbiote et proposez deux changements.",
            solution: [
              "Le régime de Tom est pauvre en fibres, car les fibres se trouvent surtout dans les fruits, les légumes, les légumineuses et les céréales complètes.",
              "Or les fibres nourrissent une partie des bactéries de son microbiote : privées de fibres, ces bactéries régressent et le microbiote devient moins diversifié.",
              "Un microbiote appauvri remplit moins bien ses rôles (digestion des fibres, protection contre les pathogènes, aide au système immunitaire), et un tel déséquilibre est associé à plusieurs maladies.",
              "Changements possibles : manger au moins cinq portions de fruits et légumes par jour ; remplacer les sodas par de l'eau et intégrer des légumineuses au moins deux fois par semaine.",
              "Conclusion : en modifiant son alimentation, Tom favorise un microbiote plus diversifié, favorable à sa santé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez si chaque affirmation est vraie ou fausse, et corrigez celles qui sont fausses : a) toutes les bactéries de notre corps sont dangereuses ; b) le microbiote aide à digérer les fibres ; c) la congélation tue tous les microbes d'un aliment ; d) chaque personne a un microbiote qui lui est propre.",
              hint: "Relisez les rôles du microbiote et le paragraphe sur la conservation des aliments.",
              solution: [
                "a) Faux : la grande majorité des bactéries de notre microbiote sont utiles et vivent en symbiose avec nous.",
                "b) Vrai : nos enzymes ne digèrent pas les fibres, mais certaines bactéries intestinales le font.",
                "c) Faux : la congélation stoppe la multiplication des microbes mais ne tue pas la plupart d'entre eux.",
                "d) Vrai : le microbiote dépend de la naissance, de l'alimentation et de l'environnement de chacun.",
              ],
            },
            {
              level: 2,
              statement: "Dans cet exercice, on considère qu'un adolescent devrait consommer environ 30 g de fibres par jour et on utilise les valeurs suivantes : une pomme, 3 g ; une portion de lentilles cuites, 8 g ; deux tranches de pain complet, 4 g ; deux tranches de pain blanc, 1,5 g ; une portion de haricots verts, 4 g ; un paquet de chips, 1 g. Le menu de Sami est : deux tranches de pain blanc, un paquet de chips, une portion de haricots verts. a) Calculez sa consommation de fibres. b) Proposez des remplacements pour se rapprocher de 30 g, en calculant le nouveau total.",
              hint: "Additionnez les valeurs du menu, puis remplacez les aliments les plus pauvres en fibres par des aliments plus riches.",
              solution: [
                "a) 1,5 + 1 + 4 = 6,5 g de fibres, très loin des 30 g recommandés.",
                "b) Exemple de menu amélioré : deux tranches de pain complet (4 g) au lieu du pain blanc, une portion de lentilles (8 g) au lieu des chips, la portion de haricots verts (4 g), et deux pommes (2 × 3 = 6 g).",
                "Nouveau total : 4 + 8 + 4 + 6 = 22 g. En ajoutant au cours de la journée une deuxième portion de légumes et des fruits au petit-déjeuner, Sami peut atteindre 30 g.",
                "Conclusion : remplacer les produits raffinés et transformés par des aliments complets, des légumineuses, des fruits et des légumes augmente fortement l'apport en fibres.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. On mesure la diversité du microbiote (nombre d'espèces de bactéries détectées dans les selles) chez un adulte en bonne santé avant, pendant et après un traitement antibiotique de 7 jours : avant, 300 espèces ; à la fin du traitement, 180 espèces ; 1 mois après, 260 espèces ; 3 mois après, 290 espèces. a) Calculez le pourcentage d'espèces perdues à la fin du traitement. b) Décrivez l'évolution après le traitement. c) Utilisez ces résultats pour justifier un comportement responsable.",
              hint: "Pour a), calculez la perte (300 - 180), puis divisez par 300 et multipliez par 100.",
              solution: [
                "a) Perte : 300 - 180 = 120 espèces. (120 ÷ 300) × 100 = 40 %. Le microbiote a perdu 40 % de ses espèces à la fin du traitement.",
                "b) Après le traitement, la diversité remonte : 260 espèces après 1 mois, puis 290 après 3 mois. Elle se rapproche de la valeur de départ sans tout à fait l'atteindre (290 < 300).",
                "c) L'antibiotique détruit aussi des bactéries utiles du microbiote, et celui-ci met plusieurs mois à se reconstituer, parfois incomplètement. Il faut donc ne prendre des antibiotiques que lorsqu'un médecin les prescrit contre une infection bactérienne.",
                "Conclusion : un antibiotique a un coût pour le microbiote, ce qui justifie un usage raisonné.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition ou à son effet.",
            pairs: [
              { left: "Microbiote intestinal", right: "Micro-organismes qui vivent normalement dans l'intestin" },
              { left: "Symbiose", right: "Association à bénéfice réciproque entre deux êtres vivants" },
              { left: "Fibres alimentaires", right: "Nourriture d'une partie des bactéries intestinales" },
              { left: "Dysbiose", right: "Déséquilibre durable du microbiote" },
              { left: "Réfrigération", right: "Ralentit la multiplication des micro-organismes" },
              { left: "Cuisson", right: "Tue la plupart des micro-organismes" },
            ],
          },
          quiz: [
            {
              q: "Où se trouve la plus grande partie du microbiote intestinal ?",
              options: ["Dans l'estomac", "Dans l'œsophage", "Dans le gros intestin (côlon)", "Dans le foie et la vésicule biliaire"],
              answer: 2,
              why: "Le côlon abrite la plus grande partie des bactéries du microbiote intestinal.",
            },
            {
              q: "Lequel de ces rôles n'est pas assuré par le microbiote ?",
              options: ["Digérer une partie des fibres", "Produire certaines vitamines", "Protéger contre des bactéries pathogènes", "Transporter le dioxygène dans le sang"],
              answer: 3,
              why: "Le transport du dioxygène est assuré par les globules rouges, pas par le microbiote.",
            },
            {
              q: "Quel aliment est le plus riche en fibres ?",
              options: ["Des lentilles", "Un soda", "Du pain blanc", "Du beurre"],
              answer: 0,
              why: "Les légumineuses comme les lentilles sont parmi les aliments les plus riches en fibres.",
            },
            {
              q: "Que se passe-t-il pour les microbes d'un aliment congelé ?",
              options: ["Ils sont tous tués", "Ils arrêtent de se multiplier mais restent vivants", "Ils se multiplient plus vite, car le froid stimule leur division", "Ils se transforment en vitamines"],
              answer: 1,
              why: "À -18 °C, la multiplication est stoppée, mais elle reprend à la décongélation.",
            },
            {
              q: "Pourquoi un traitement antibiotique provoque-t-il parfois des troubles digestifs ?",
              options: ["Parce qu'il contient du sucre", "Parce qu'il détruit les virus de l'intestin", "Parce qu'il bloque la production de salive et de suc gastrique", "Parce qu'il détruit aussi des bactéries du microbiote"],
              answer: 3,
              why: "Un antibiotique ne fait pas la différence entre bactéries pathogènes et bactéries utiles du microbiote.",
            },
          ],
          trap: "Penser que toutes les bactéries sont nuisibles : l'immense majorité des bactéries de notre microbiote nous est utile. Autre erreur fréquente : croire que la congélation stérilise un aliment, alors qu'elle ne fait que stopper la multiplication des microbes.",
          method: "Pour une question sur l'alimentation, construisez votre réponse en chaîne de causes : aliment (riche ou pauvre en fibres) → effet sur le microbiote (diversifié ou appauvri) → effet sur la santé. Chaque flèche doit être justifiée par une connaissance du cours.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'sante-publique',
          title: 'Santé individuelle et santé publique : prévenir les épidémies',
          minutes: 30,
          objectives: [
            "Définir épidémie, pandémie et endémie.",
            "Identifier les modes de transmission d'une maladie infectieuse et les moyens de rompre la chaîne de transmission.",
            "Expliquer l'évolution d'une épidémie à partir du nombre moyen de personnes contaminées par un malade.",
            "Argumenter le lien entre comportements individuels et santé collective.",
          ],
          course: [
            {
              heading: "Épidémie, pandémie, endémie",
              paragraphs: [
                "Une maladie infectieuse est causée par un micro-organisme pathogène (bactérie, virus, champignon ou parasite) qui peut se transmettre d'un être vivant à un autre. Quand le nombre de malades augmente fortement et rapidement dans une région donnée, on parle d'épidémie, comme pour la grippe saisonnière chaque hiver en France.",
                "Quand une épidémie s'étend à plusieurs continents, voire au monde entier, c'est une pandémie : la grippe dite espagnole de 1918-1919, le sida ou la covid-19, déclarée pandémie par l'Organisation mondiale de la santé (OMS) en mars 2020. Une maladie présente en permanence dans une région, avec un nombre de cas assez stable, est dite endémique : c'est le cas du paludisme dans de nombreuses régions tropicales.",
              ],
              box: { label: "Définition", text: "Épidémie : augmentation rapide du nombre de cas dans une région. Pandémie : épidémie étendue à plusieurs continents. Endémie : maladie présente en permanence dans une région." },
            },
            {
              heading: "La chaîne de transmission",
              paragraphs: [
                "Une maladie infectieuse se transmet selon une chaîne : une source (une personne ou un animal infecté, de l'eau ou un aliment contaminé), un mode de transmission, puis une personne réceptive, c'est-à-dire non protégée. Si l'un des maillons est rompu, la maladie ne se transmet plus.",
                "Les principaux modes de transmission sont : par l'air (gouttelettes et fines particules émises en toussant, en éternuant ou en parlant, comme pour la grippe) ; par contact direct ou par les mains et les objets ; par le sang ou lors de rapports sexuels (VIH, hépatite B) ; par l'eau ou les aliments contaminés (choléra, salmonellose) ; par un animal vecteur, comme le moustique qui transmet le paludisme ou la dengue.",
              ],
              box: { label: "Repère", text: "Source → mode de transmission (air, contact, sang et rapports sexuels, eau et aliments, vecteur) → personne réceptive. Rompre un maillon arrête la transmission." },
            },
            {
              heading: "Comment une épidémie se propage",
              paragraphs: [
                "Les épidémiologistes utilisent le nombre de reproduction, noté R : c'est le nombre moyen de personnes contaminées par un malade. Si R vaut 3, un malade contamine en moyenne 3 personnes, qui en contaminent chacune 3, soit 9 nouveaux cas, puis 27, puis 81 : le nombre de cas augmente très vite, l'épidémie progresse.",
                "Si R est inférieur à 1, chaque malade contamine en moyenne moins d'une personne et le nombre de nouveaux cas diminue : l'épidémie recule. Toutes les mesures de prévention ont donc le même but : faire baisser R en dessous de 1. Il diminue quand les contacts sont moins nombreux, quand la transmission à chaque contact est moins probable (gestes barrières) ou quand la part de personnes protégées augmente (vaccination).",
              ],
              box: { label: "Règle", text: "R > 1 : l'épidémie progresse. R < 1 : l'épidémie recule. La prévention cherche à faire passer R sous 1." },
            },
            {
              heading: "Agir pour soi et pour les autres",
              paragraphs: [
                "Chacun peut agir : se laver les mains régulièrement à l'eau et au savon, tousser ou éternuer dans son coude, porter un masque quand on est malade, rester chez soi en cas de maladie contagieuse, utiliser un préservatif pour se protéger des infections sexuellement transmissibles et être à jour de ses vaccinations. Ces gestes protègent la personne qui les adopte, mais aussi son entourage, en particulier les personnes fragiles.",
                "La société agit aussi de façon collective : surveillance des maladies par des organismes de santé publique (Santé publique France, OMS), campagnes de vaccination, accès à l'eau potable et traitement des eaux usées, contrôle sanitaire des aliments, isolement des malades et lutte contre les moustiques vecteurs. La santé de chacun dépend ainsi des comportements de tous : c'est le sens de l'expression santé publique.",
              ],
            },
          ],
          keyPoints: [
            "Épidémie : forte hausse des cas dans une région ; pandémie : plusieurs continents ; endémie : présence permanente.",
            "Chaîne de transmission : source, mode de transmission, personne réceptive.",
            "R = nombre moyen de personnes contaminées par un malade : si R > 1 l'épidémie progresse, si R < 1 elle recule.",
            "Gestes barrières, préservatif et vaccination rompent la chaîne de transmission.",
            "La santé publique repose sur des actions individuelles et collectives.",
          ],
          example: {
            statement: "Pour une maladie, on suppose que chaque malade contamine en moyenne 2 personnes (R = 2) et qu'il faut 5 jours entre deux générations de malades. On part d'un seul malade. Combien y a-t-il de nouveaux cas lors de la cinquième génération, 25 jours plus tard ? Que se passerait-il si R valait 0,5 ?",
            solution: [
              "Chaque génération, le nombre de nouveaux cas est multiplié par R = 2.",
              "Génération 1 : 2 ; génération 2 : 4 ; génération 3 : 8 ; génération 4 : 16 ; génération 5 : 32 nouveaux cas (2⁵ = 32).",
              "25 jours correspondent bien à 5 générations (25 ÷ 5 = 5).",
              "Si R valait 0,5, il faudrait en moyenne deux malades pour contaminer une seule personne : le nombre de nouveaux cas serait divisé par 2 à chaque génération et la chaîne s'éteindrait rapidement.",
              "Conclusion : avec R = 2, on compte 32 nouveaux cas à la cinquième génération et l'épidémie progresse ; avec R = 0,5, elle reculerait.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque maladie à son mode de transmission principal (air, sang et rapports sexuels, eau ou aliments, moustique vecteur) : a) la grippe ; b) le paludisme ; c) le VIH ; d) le choléra.",
              hint: "Rappelez-vous les exemples donnés pour chaque mode de transmission dans le cours.",
              solution: [
                "a) La grippe se transmet par l'air (gouttelettes émises en toussant, en éternuant, en parlant).",
                "b) Le paludisme est transmis par un moustique vecteur.",
                "c) Le VIH se transmet par le sang et lors de rapports sexuels non protégés.",
                "d) Le choléra se transmet par l'eau ou les aliments contaminés.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune des mesures suivantes, indiquez quel maillon de la chaîne de transmission elle rompt (source, mode de transmission ou personne réceptive) : a) se faire vacciner ; b) se laver les mains ; c) isoler un malade contagieux ; d) installer une moustiquaire ; e) traiter l'eau pour la rendre potable.",
              hint: "Demandez-vous si la mesure agit sur la personne qui transmet, sur le chemin du microbe, ou sur la personne qui pourrait être contaminée.",
              solution: [
                "a) Se faire vacciner : la personne n'est plus réceptive, elle est protégée.",
                "b) Se laver les mains : on agit sur le mode de transmission (contact par les mains).",
                "c) Isoler un malade : on agit sur la source, qui ne peut plus transmettre aux autres.",
                "d) Installer une moustiquaire : on agit sur le mode de transmission (le vecteur ne peut plus piquer).",
                "e) Traiter l'eau : on agit sur la source et le mode de transmission (l'eau ne contient plus de microbes).",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Dans un modèle simplifié, une maladie a un nombre de reproduction R₀ = 4 dans une population où personne n'est protégé. Si une proportion p de la population est vaccinée (et protégée), le nombre de reproduction devient R = 4 × (1 - p). a) Calculez R si 50 % de la population est vaccinée (p = 0,5). b) Calculez R si 80 % est vaccinée (p = 0,8). c) Dans chaque cas, dites si l'épidémie progresse ou recule. d) Expliquez pourquoi la vaccination d'une large part de la population protège aussi les personnes non vaccinées.",
              hint: "Remplacez p par sa valeur dans la formule, puis comparez R à 1.",
              solution: [
                "a) R = 4 × (1 - 0,5) = 4 × 0,5 = 2.",
                "b) R = 4 × (1 - 0,8) = 4 × 0,2 = 0,8.",
                "c) Avec 50 % de vaccinés, R = 2 > 1 : l'épidémie progresse. Avec 80 % de vaccinés, R = 0,8 < 1 : l'épidémie recule.",
                "d) Quand la plupart des personnes rencontrées par un malade sont protégées, il contamine en moyenne moins d'une personne et la chaîne de transmission s'interrompt. Le microbe circule peu, et les personnes non vaccinées ont donc peu de chances d'être contaminées : c'est l'immunité collective.",
                "Conclusion : dans ce modèle, il faut vacciner plus de 75 % de la population (car 4 × (1 - 0,75) = 1) pour que l'épidémie recule.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : prévenir les épidémies.",
            statements: [
              { text: "Une pandémie est une épidémie qui touche plusieurs continents.", true: true, why: "C'est la différence entre une épidémie (une région) et une pandémie (plusieurs continents, voire le monde)." },
              { text: "Si chaque malade contamine en moyenne moins d'une personne, l'épidémie progresse.", true: false, why: "Si R < 1, le nombre de nouveaux cas diminue : l'épidémie recule." },
              { text: "Se laver les mains protège aussi son entourage.", true: true, why: "On évite de transmettre des microbes par les mains et les objets touchés." },
              { text: "Le paludisme se transmet directement d'une personne à l'autre par la toux.", true: false, why: "Il est transmis par un moustique vecteur." },
              { text: "Une maladie endémique est présente en permanence dans une région.", true: true, why: "Le nombre de cas y reste assez stable au fil du temps." },
              { text: "Les gestes barrières ne servent à rien si l'on n'est pas malade.", true: false, why: "On peut être contagieux avant d'avoir des symptômes, et ces gestes évitent aussi d'être contaminé." },
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on une maladie présente en permanence dans une région ?",
              options: ["Une maladie endémique", "Une pandémie", "Une épidémie", "Une maladie génétique"],
              answer: 0,
              why: "Une endémie correspond à une présence permanente et assez stable d'une maladie dans une région.",
            },
            {
              q: "Que représente le nombre de reproduction R ?",
              options: ["Le nombre de morts d'une épidémie", "Le nombre moyen de personnes contaminées par un malade", "La durée de la maladie en jours", "Le nombre total de vaccins disponibles dans le pays pendant l'épidémie"],
              answer: 1,
              why: "Si R > 1, l'épidémie progresse ; si R < 1, elle recule.",
            },
            {
              q: "Quelle mesure rompt la chaîne de transmission au niveau de la personne réceptive ?",
              options: ["Isoler le malade", "Tousser dans son coude", "Se faire vacciner", "Désinfecter les surfaces"],
              answer: 2,
              why: "Une personne vaccinée est protégée : elle n'est plus réceptive au microbe.",
            },
            {
              q: "Avec R = 3, combien de nouveaux cas compte la troisième génération à partir d'un seul malade ?",
              options: ["3", "6", "9", "27"],
              answer: 3,
              why: "3 à la première génération, 9 à la deuxième, 27 à la troisième (3 × 3 × 3 = 27).",
            },
            {
              q: "Quel est l'objectif commun de toutes les mesures de prévention d'une épidémie ?",
              options: ["Faire passer R en dessous de 1", "Augmenter le nombre de contacts", "Supprimer tous les microbes de la planète", "Remplacer la vaccination par les antibiotiques"],
              answer: 0,
              why: "Quand R < 1, chaque malade contamine moins d'une personne en moyenne et l'épidémie s'éteint.",
            },
          ],
          trap: "Confondre épidémie et pandémie, ou croire qu'une épidémie recule dès que le nombre de cas augmente moins vite : elle ne recule que lorsque le nombre de nouveaux cas diminue, c'est-à-dire quand R passe sous 1.",
          method: "Pour justifier une mesure de prévention, nommez toujours le maillon de la chaîne qu'elle rompt (source, mode de transmission ou personne réceptive) et dites si elle protège seulement l'individu ou aussi la collectivité.",
        },
      ],
    },

    /* ==================================================================== */
    /* MÉTÉOROLOGIE ET CLIMAT                                                 */
    /* ==================================================================== */
    {
      id: 'climat-meteo',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'meteo-climat',
          title: 'Distinguer météorologie et climat',
          minutes: 25,
          objectives: [
            "Distinguer la météorologie du climat, en particulier par leurs échelles de temps.",
            "Lire et exploiter un diagramme climatique (climatogramme).",
            "Expliquer quelques phénomènes météorologiques par la répartition inégale de l'énergie solaire et les mouvements de l'atmosphère.",
          ],
          course: [
            {
              heading: "La météorologie : le temps qu'il fait",
              paragraphs: [
                "La météorologie étudie l'état de l'atmosphère en un lieu et à un moment donnés : la température de l'air, les précipitations (pluie, neige, grêle), la pression atmosphérique, la direction et la vitesse du vent, l'humidité et la couverture nuageuse. Ces paramètres changent d'une heure à l'autre et d'un jour à l'autre.",
                "Chaque paramètre se mesure avec un instrument : le thermomètre pour la température, le pluviomètre pour les précipitations (en millimètres), le baromètre pour la pression (en hectopascals, hPa), l'anémomètre pour la vitesse du vent, la girouette pour sa direction et l'hygromètre pour l'humidité. Des stations au sol, des ballons-sondes et des satellites collectent ces mesures partout sur la planète.",
                "À partir de ces mesures, des ordinateurs calculent l'évolution probable de l'atmosphère : ce sont les prévisions météorologiques. Elles sont fiables pour quelques jours ; au-delà d'une semaine environ, elles deviennent beaucoup plus incertaines, car l'atmosphère est un système très sensible aux petites variations.",
              ],
              box: { label: "Définition", text: "La météorologie étudie le temps qu'il fait : l'état de l'atmosphère (température, précipitations, pression, vent, humidité, nuages) en un lieu et à un moment donnés, sur des durées de quelques heures à quelques jours." },
            },
            {
              heading: "Le climat : des moyennes sur au moins trente ans",
              paragraphs: [
                "Le climat d'une région est l'ensemble des conditions météorologiques qui la caractérisent en moyenne, calculées sur une longue période : au moins trente ans selon l'usage international. On parle par exemple du climat océanique de la Bretagne, doux et humide, ou du climat méditerranéen, aux étés chauds et secs.",
                "Pour représenter le climat d'un lieu, on utilise un climatogramme (ou diagramme ombrothermique) : les précipitations moyennes de chaque mois sont représentées par des barres et les températures moyennes mensuelles par une courbe. On peut y lire la saison la plus chaude, la saison la plus pluvieuse, et calculer l'amplitude thermique (différence entre la température moyenne du mois le plus chaud et celle du mois le plus froid).",
                "Il ne faut donc pas confondre les deux échelles : un hiver particulièrement froid ou un mois d'août pluvieux relèvent de la météorologie et ne suffisent pas à dire que le climat a changé. Seule l'évolution des moyennes sur plusieurs décennies renseigne sur le climat.",
              ],
              box: { label: "À retenir", text: "Météorologie : le temps d'un jour, en un lieu, quelques jours de prévision. Climat : moyennes sur au moins 30 ans, à l'échelle d'une région ou de la planète." },
            },
            {
              heading: "Le Soleil chauffe la Terre de façon inégale",
              paragraphs: [
                "Le moteur des phénomènes météorologiques et climatiques est l'énergie reçue du Soleil. À l'équateur, les rayons arrivent presque perpendiculairement au sol : l'énergie est concentrée sur une petite surface. Près des pôles, les rayons arrivent de façon rasante : la même énergie se répartit sur une surface beaucoup plus grande. C'est pourquoi les régions équatoriales sont chaudes et les régions polaires froides.",
                "Cette répartition inégale explique les grandes zones climatiques : une zone chaude de part et d'autre de l'équateur, deux zones tempérées aux latitudes moyennes et deux zones froides autour des pôles. Les saisons s'expliquent, elles, par l'inclinaison de l'axe de rotation de la Terre, qui fait varier au cours de l'année l'inclinaison des rayons et la durée du jour.",
              ],
            },
            {
              heading: "L'atmosphère et l'océan redistribuent la chaleur",
              paragraphs: [
                "L'air chauffé au sol devient moins dense et s'élève : au sol, la pression diminue, c'est une zone de basse pression (dépression), souvent associée aux nuages et à la pluie, car l'air qui monte se refroidit et sa vapeur d'eau se condense. À l'inverse, l'air froid et dense descend et crée une zone de haute pression (anticyclone), souvent associée au beau temps. Le vent est un déplacement d'air qui va des hautes pressions vers les basses pressions.",
                "Les courants océaniques transportent aussi de la chaleur des tropiques vers les hautes latitudes. Le Gulf Stream, prolongé par la dérive nord-atlantique, contribue ainsi à la douceur des hivers en Europe de l'Ouest. Enfin, le cycle de l'eau (évaporation, condensation en nuages, précipitations) joue un rôle majeur dans les phénomènes météorologiques.",
              ],
              box: { label: "Repère", text: "Air chaud qui monte : basse pression, nuages, pluie. Air froid qui descend : haute pression, beau temps. Le vent souffle des hautes vers les basses pressions." },
            },
          ],
          keyPoints: [
            "La météorologie décrit le temps qu'il fait en un lieu et un moment donnés, sur quelques heures à quelques jours.",
            "Le climat est la moyenne des conditions météorologiques sur au moins 30 ans.",
            "Un climatogramme associe des barres (précipitations) et une courbe (températures).",
            "Les régions équatoriales reçoivent plus d'énergie solaire par unité de surface que les régions polaires.",
            "Le vent souffle des hautes pressions vers les basses pressions ; atmosphère et océans redistribuent la chaleur.",
          ],
          example: {
            statement: "Classez chaque phrase dans la météorologie ou dans le climat : a) « Demain, il pleuvra sur Lille l'après-midi. » b) « En moyenne, il tombe moins de pluie à Marseille qu'à Brest. » c) « Il a neigé à Paris le 15 janvier. » d) « Les étés méditerranéens sont chauds et secs. »",
            solution: [
              "On se demande pour chaque phrase si elle décrit un moment précis ou une moyenne sur une longue durée.",
              "a) Un lieu et un moment précis (demain après-midi) : météorologie.",
              "b) Une moyenne sur une longue période : climat.",
              "c) Un événement daté : météorologie.",
              "d) Une caractéristique moyenne d'une région : climat.",
              "Conclusion : a et c relèvent de la météorologie, b et d du climat.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque instrument au paramètre qu'il mesure : thermomètre, pluviomètre, baromètre, anémomètre, girouette. Paramètres : direction du vent, pression atmosphérique, température, vitesse du vent, quantité de précipitations.",
              hint: "Le suffixe « -mètre » signifie mesure : cherchez le sens du début du mot (thermo : chaleur ; baro : pression ; anémo : vent).",
              solution: [
                "Thermomètre : température.",
                "Pluviomètre : quantité de précipitations (en mm).",
                "Baromètre : pression atmosphérique (en hPa).",
                "Anémomètre : vitesse du vent.",
                "Girouette : direction du vent.",
              ],
            },
            {
              level: 2,
              statement: "Voici des données climatiques moyennes (calculées sur 30 ans) d'une ville A. Températures moyennes : janvier 6 °C, avril 12 °C, juillet 24 °C, octobre 16 °C. Précipitations : janvier 70 mm, avril 55 mm, juillet 10 mm, octobre 90 mm. a) Calculez l'amplitude thermique entre le mois le plus froid et le mois le plus chaud de ces données. b) Quelle est la saison la plus sèche ? c) À quel type de climat ces données font-elles penser : océanique, méditerranéen ou polaire ? Justifiez.",
              hint: "L'amplitude thermique est la différence entre la plus haute et la plus basse température moyenne. Pour c), regardez l'été.",
              solution: [
                "a) Amplitude : 24 - 6 = 18 °C.",
                "b) La saison la plus sèche est l'été : 10 mm seulement en juillet.",
                "c) Des étés chauds (24 °C) et très secs (10 mm), des hivers doux (6 °C) et des pluies concentrées en automne et en hiver : ces caractéristiques sont celles d'un climat méditerranéen.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. En décembre, un élève déclare : « Cette semaine, il a fait -5 °C chez moi, c'est bien la preuve que le climat ne se réchauffe pas. » a) À quelle échelle (météorologique ou climatique) appartient l'observation de l'élève ? b) Expliquez pourquoi son raisonnement n'est pas valable. c) Quelles données faudrait-il utiliser pour savoir si le climat de sa région se réchauffe ?",
              hint: "Rappelez-vous sur quelle durée on calcule un climat.",
              solution: [
                "a) Une semaine froide en un lieu précis relève de la météorologie.",
                "b) Le climat est une moyenne sur au moins trente ans. Une semaine froide est une variation météorologique normale, qui peut exister même dans un climat qui se réchauffe en moyenne : un seul événement ne permet pas de conclure sur une tendance climatique.",
                "c) Il faudrait comparer les températures moyennes de sa région sur de longues périodes, par exemple la moyenne de 1961-1990 avec celle de 1991-2020, ou étudier l'évolution des températures moyennes annuelles sur plusieurs décennies.",
                "Conclusion : on ne peut pas tirer de conclusion sur le climat à partir d'une observation météorologique ponctuelle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Météorologie", right: "Étude du temps qu'il fait sur quelques jours" },
              { left: "Climat", right: "Conditions moyennes sur au moins 30 ans" },
              { left: "Anticyclone", right: "Zone de haute pression, souvent beau temps" },
              { left: "Dépression", right: "Zone de basse pression, souvent nuages et pluie" },
              { left: "Climatogramme", right: "Graphique des températures et précipitations moyennes" },
              { left: "Amplitude thermique", right: "Écart entre le mois le plus chaud et le plus froid" },
            ],
          },
          quiz: [
            {
              q: "Sur quelle durée minimale calcule-t-on habituellement un climat ?",
              options: ["Une semaine", "Un an", "Dix ans", "Trente ans"],
              answer: 3,
              why: "Les normales climatiques sont des moyennes calculées sur au moins trente ans.",
            },
            {
              q: "Quel instrument mesure la pression atmosphérique ?",
              options: ["Le thermomètre", "L'anémomètre", "Le baromètre", "Le pluviomètre"],
              answer: 2,
              why: "Le baromètre mesure la pression atmosphérique, exprimée en hectopascals.",
            },
            {
              q: "Pourquoi les régions polaires sont-elles plus froides que les régions équatoriales ?",
              options: ["Parce qu'elles sont plus éloignées du Soleil de plusieurs millions de kilomètres que les régions situées sur l'équateur", "Parce que les rayons du Soleil y arrivent de façon rasante et se répartissent sur une plus grande surface", "Parce qu'il n'y a pas d'atmosphère aux pôles", "Parce que la Terre ne tourne pas aux pôles"],
              answer: 1,
              why: "Avec des rayons rasants, la même énergie se répartit sur une plus grande surface : chaque mètre carré reçoit moins d'énergie.",
            },
            {
              q: "Dans quel sens souffle le vent ?",
              options: ["Des hautes pressions vers les basses pressions", "Des basses pressions vers les hautes pressions", "Toujours d'ouest en est", "Toujours de la mer vers la terre"],
              answer: 0,
              why: "L'air se déplace des zones où la pression est forte vers celles où elle est faible.",
            },
            {
              q: "« Il fera 30 °C à Lyon samedi » est une information :",
              options: ["climatique", "géologique", "météorologique", "astronomique"],
              answer: 2,
              why: "Elle concerne un lieu et un moment précis : c'est une prévision météorologique.",
            },
          ],
          trap: "Utiliser un événement météorologique (une vague de froid, un été pluvieux) pour conclure sur le climat, ou l'inverse. Autre erreur : expliquer que les pôles sont froids parce qu'ils sont plus loin du Soleil, alors que c'est l'inclinaison des rayons qui compte.",
          method: "Pour classer une information, cherchez deux indices : la durée (un moment précis ou une moyenne sur des décennies) et l'espace (un lieu précis ou une région entière). Le mot « moyenne » ou une période de 30 ans signalent presque toujours le climat.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'climats-passes',
          title: 'Les changements climatiques du passé',
          minutes: 30,
          objectives: [
            "Identifier des indices qui permettent de reconstituer les climats du passé.",
            "Décrire l'alternance des périodes glaciaires et interglaciaires.",
            "Expliquer quelques causes naturelles des variations climatiques passées.",
            "Comparer la vitesse des changements climatiques passés et actuels.",
          ],
          course: [
            {
              heading: "Des indices pour reconstituer les climats anciens",
              paragraphs: [
                "Personne n'a mesuré la température il y a 20 000 ans : pour connaître les climats du passé, les scientifiques utilisent des indices conservés dans les roches, les sédiments ou la glace. Ils appliquent le principe d'actualisme : les phénomènes qui se produisent aujourd'hui se produisaient de la même façon dans le passé. Par exemple, si un fossile appartient à une espèce qui ne vit aujourd'hui que dans les régions froides, le climat était sans doute froid à l'époque où il vivait.",
                "Les pollens sont un indice précieux : très résistants, ils se conservent dans les sédiments des lacs et des tourbières. En identifiant les plantes auxquelles ils appartiennent, on reconstitue la végétation passée, donc le climat. Des pollens de bouleaux et de pins indiquent un climat frais, des pollens de chênes un climat tempéré plus doux.",
                "Les glaciers laissent aussi des traces : des moraines (amas de débris rocheux déposés par un glacier), des blocs erratiques (gros rochers transportés loin de leur lieu d'origine), des roches polies et striées et des vallées en forme de U. Trouvées loin des glaciers actuels, ces traces prouvent que les glaciers étaient autrefois beaucoup plus étendus.",
              ],
              box: { label: "Repère", text: "Indices des climats passés : fossiles, pollens, traces glaciaires (moraines, blocs erratiques, roches striées, vallées en U), carottes de glace. Principe d'actualisme : le présent permet de comprendre le passé." },
            },
            {
              heading: "Les archives des glaces",
              paragraphs: [
                "Aux pôles, la neige s'accumule année après année sans fondre et se transforme en glace, en emprisonnant de petites bulles d'air. En forant la calotte glaciaire, on extrait des carottes de glace : plus la glace est profonde, plus elle est ancienne. La carotte forée au Dôme C, en Antarctique, dans le cadre du projet européen EPICA, couvre environ 800 000 ans.",
                "Les bulles d'air sont des échantillons de l'atmosphère du passé : on y mesure la teneur en dioxyde de carbone (CO₂) et en méthane. La composition de la glace elle-même (la proportion de différents isotopes de l'oxygène et de l'hydrogène) renseigne sur la température qu'il faisait au moment où la neige est tombée. Ces mesures montrent que la température et la teneur en CO₂ ont varié ensemble : environ 180 ppm (parties par million) pendant les périodes glaciaires et environ 280 ppm pendant les périodes chaudes, avant l'ère industrielle.",
              ],
            },
            {
              heading: "L'alternance des périodes glaciaires et interglaciaires",
              paragraphs: [
                "Depuis environ 800 000 ans, le climat de la Terre alterne entre des périodes glaciaires longues et froides et des périodes interglaciaires plus courtes et plus chaudes, selon un cycle d'environ 100 000 ans. Nous vivons actuellement dans une période interglaciaire, qui a commencé il y a environ 11 700 ans.",
                "Lors du dernier maximum glaciaire, il y a environ 20 000 ans, d'immenses calottes de glace recouvraient le nord de l'Europe et de l'Amérique du Nord, les glaciers des Alpes descendaient jusque dans les plaines et la température moyenne de la planète était inférieure de plusieurs degrés (de l'ordre de 5 °C) à celle d'avant l'ère industrielle. Tant d'eau était stockée dans les glaces que le niveau de la mer était environ 120 m plus bas qu'aujourd'hui : on pouvait aller à pied de France en Angleterre.",
                "La grotte Cosquer, près de Marseille, en témoigne : ses parois ont été ornées par des humains du Paléolithique à une époque où le niveau de la mer était bas. Son entrée se trouve aujourd'hui sous la mer, à environ 37 m de profondeur.",
              ],
              box: { label: "À retenir", text: "Depuis 800 000 ans : alternance glaciaire / interglaciaire tous les 100 000 ans environ. Dernier maximum glaciaire : il y a environ 20 000 ans, niveau marin environ 120 m plus bas. Période interglaciaire actuelle depuis environ 11 700 ans." },
            },
            {
              heading: "Les causes naturelles des changements passés",
              paragraphs: [
                "L'alternance glaciaire et interglaciaire s'explique d'abord par des variations lentes et régulières de l'orbite de la Terre autour du Soleil et de l'inclinaison de son axe, qui modifient la quantité d'énergie solaire reçue par chaque région au cours des saisons. Ces variations sont amplifiées par la teneur en gaz à effet de serre et par la glace elle-même, qui renvoie une grande partie du rayonnement solaire vers l'espace.",
                "Sur des durées encore plus longues, le climat a aussi changé à cause du déplacement des continents (tectonique des plaques), d'épisodes de volcanisme intense ou de la chute de météorites, comme celle d'il y a 66 millions d'années, liée à la disparition des dinosaures non aviens. Ces changements naturels se sont produits en général sur des milliers à des millions d'années : c'est une différence essentielle avec le changement climatique actuel, beaucoup plus rapide.",
              ],
            },
          ],
          keyPoints: [
            "Fossiles, pollens, traces glaciaires et carottes de glace permettent de reconstituer les climats passés.",
            "Les bulles d'air des carottes de glace gardent la composition de l'atmosphère passée.",
            "Depuis 800 000 ans, périodes glaciaires et interglaciaires alternent selon un cycle d'environ 100 000 ans.",
            "Il y a environ 20 000 ans, le niveau de la mer était environ 120 m plus bas qu'aujourd'hui.",
            "Causes naturelles : variations de l'orbite terrestre, volcanisme, tectonique, météorites.",
            "Les changements passés ont été lents (milliers d'années) par rapport au changement actuel.",
          ],
          example: {
            statement: "Dans les sédiments d'un lac du Jura, on trouve, de bas en haut : une couche A contenant surtout des pollens de plantes herbacées des milieux froids et quelques bouleaux, puis une couche B contenant surtout des pollens de chênes et de noisetiers. Reconstituez l'évolution du climat.",
            solution: [
              "Dans des sédiments non déformés, les couches les plus basses sont les plus anciennes : la couche A est plus ancienne que la couche B.",
              "D'après le principe d'actualisme, une végétation d'herbacées de milieux froids avec quelques bouleaux correspond aujourd'hui à un climat froid : le climat était froid lors du dépôt de A.",
              "Les chênes et les noisetiers vivent aujourd'hui sous un climat tempéré : le climat était plus doux lors du dépôt de B.",
              "Conclusion : le climat de la région s'est réchauffé entre le dépôt de la couche A et celui de la couche B.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque indice, indiquez ce qu'il permet de connaître : a) des blocs erratiques dans une plaine ; b) des bulles d'air dans une carotte de glace ; c) des pollens de chênes dans un sédiment ; d) l'entrée de la grotte Cosquer située sous la mer.",
              hint: "Demandez-vous à chaque fois quel phénomène a pu produire l'indice.",
              solution: [
                "a) Des blocs erratiques ont été transportés par un glacier : un glacier s'étendait autrefois jusqu'à cette plaine, le climat était plus froid.",
                "b) Les bulles d'air renseignent sur la composition de l'atmosphère passée, par exemple sa teneur en CO₂.",
                "c) Les pollens de chênes indiquent une forêt de climat tempéré à l'époque du dépôt.",
                "d) La grotte a été ornée quand on pouvait y entrer à pied : le niveau de la mer était plus bas, car une grande quantité d'eau était stockée dans les glaces pendant la période glaciaire.",
              ],
            },
            {
              level: 2,
              statement: "Le niveau de la mer était environ 120 m plus bas il y a 20 000 ans qu'aujourd'hui, et il est remonté jusqu'à un niveau proche de l'actuel il y a environ 7 000 ans. a) Sur combien d'années cette remontée s'est-elle produite ? b) Calculez la vitesse moyenne de remontée en mètres par siècle, puis en millimètres par an. c) Expliquez la cause de cette remontée.",
              hint: "Calculez la durée (20 000 - 7 000), puis divisez la hauteur par le nombre de siècles. 1 m = 1 000 mm.",
              solution: [
                "a) 20 000 - 7 000 = 13 000 ans.",
                "b) 13 000 ans = 130 siècles. 120 ÷ 130 ≈ 0,92 m par siècle, soit environ 0,9 m par siècle. En millimètres par an : 120 000 mm ÷ 13 000 ans ≈ 9,2 mm par an.",
                "c) À la fin de la période glaciaire, le climat s'est réchauffé : les grandes calottes glaciaires de l'Europe du Nord et de l'Amérique du Nord ont fondu, et l'eau libérée a rejoint les océans, ce qui a fait monter leur niveau.",
                "Conclusion : la mer est remontée de 120 m en 13 000 ans environ, en moyenne d'un peu moins d'un mètre par siècle, à cause de la fonte des glaces.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. L'analyse d'une carotte de glace de l'Antarctique donne les valeurs suivantes (arrondies, température locale). Il y a 140 000 ans : température inférieure de 8 °C à l'actuelle, CO₂ 190 ppm. Il y a 125 000 ans : température supérieure de 1 °C, CO₂ 280 ppm. Il y a 20 000 ans : température inférieure de 8 °C, CO₂ 185 ppm. Avant l'ère industrielle : température de référence, CO₂ 280 ppm. a) Identifiez les périodes glaciaires et interglaciaires. b) Quelle relation pouvez-vous établir entre température et teneur en CO₂ ? c) Sachant que la teneur actuelle en CO₂ dépasse 420 ppm, que pouvez-vous en dire ?",
              hint: "Une température nettement inférieure à l'actuelle signale une période glaciaire. Pour b), regardez si les deux grandeurs augmentent et diminuent en même temps.",
              solution: [
                "a) Périodes glaciaires : il y a 140 000 ans et il y a 20 000 ans (8 °C de moins). Périodes interglaciaires : il y a 125 000 ans et l'époque préindustrielle.",
                "b) Quand la température est basse, la teneur en CO₂ est basse (185 à 190 ppm) ; quand elle est haute, la teneur en CO₂ est haute (280 ppm). Les deux grandeurs varient ensemble : elles sont corrélées. Le CO₂ étant un gaz à effet de serre, une teneur élevée contribue à un climat plus chaud.",
                "c) Avec plus de 420 ppm, la teneur actuelle dépasse largement les valeurs des périodes chaudes enregistrées dans ces glaces (280 ppm), de plus de 140 ppm. Cette valeur n'a jamais été atteinte dans les 800 000 ans couverts par les carottes de glace.",
                "Conclusion : température et CO₂ ont varié ensemble dans le passé, et la teneur actuelle en CO₂ est exceptionnelle par rapport à ces archives.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes qui permettent de connaître un climat passé grâce à une carotte de glace.",
            items: [
              "La neige tombe sur la calotte et ne fond pas.",
              "En se tassant, elle devient de la glace qui emprisonne des bulles d'air.",
              "Des couches de glace s'accumulent pendant des milliers d'années.",
              "Les scientifiques forent la calotte et extraient une carotte de glace.",
              "Ils déterminent l'âge de la glace selon sa profondeur.",
              "Ils mesurent la teneur en CO₂ des bulles et la composition de la glace.",
              "Ils reconstituent l'évolution de la température et de l'atmosphère.",
            ],
          },
          quiz: [
            {
              q: "Que contiennent les bulles d'air piégées dans une carotte de glace ?",
              options: ["De l'air de l'atmosphère de l'époque où la glace s'est formée", "De l'air actuel entré dans la glace pendant le forage et le transport de la carotte", "Uniquement de la vapeur d'eau", "Des pollens fossiles"],
              answer: 0,
              why: "Les bulles sont des échantillons de l'atmosphère passée, où l'on mesure par exemple le CO₂ et le méthane.",
            },
            {
              q: "Quelle est la durée approximative d'un cycle glaciaire-interglaciaire depuis 800 000 ans ?",
              options: ["10 ans", "100 000 ans", "1 000 ans", "100 millions d'années"],
              answer: 1,
              why: "Les périodes glaciaires et interglaciaires alternent selon un cycle d'environ 100 000 ans.",
            },
            {
              q: "Il y a environ 20 000 ans, le niveau de la mer était :",
              options: ["identique à aujourd'hui", "environ 120 m plus haut", "environ 1 m plus bas", "environ 120 m plus bas"],
              answer: 3,
              why: "Une grande quantité d'eau était stockée dans les calottes glaciaires, ce qui abaissait le niveau des océans.",
            },
            {
              q: "Un bloc erratique est :",
              options: ["une météorite tombée récemment", "un rocher transporté par un glacier loin de son lieu d'origine", "un fossile de végétal", "une couche de sédiments déposée au fond d'un lac pendant une période chaude"],
              answer: 1,
              why: "Sa présence loin de tout glacier actuel prouve que les glaciers étaient autrefois plus étendus.",
            },
            {
              q: "Quelle est la principale cause de l'alternance des périodes glaciaires et interglaciaires ?",
              options: ["Les activités humaines", "La chute régulière de météorites", "Les variations de l'orbite de la Terre et de l'inclinaison de son axe", "Les éruptions volcaniques de l'année précédente"],
              answer: 2,
              why: "Ces variations astronomiques modifient l'énergie solaire reçue, et leurs effets sont amplifiés par les gaz à effet de serre et les glaces.",
            },
          ],
          trap: "Croire que les changements climatiques passés étaient aussi rapides que l'actuel : ils se sont étalés sur des milliers d'années. Autre erreur : oublier le principe d'actualisme et interpréter un indice sans le comparer à ce que l'on observe aujourd'hui.",
          method: "Face à un indice paléoclimatique, rédigez toujours en trois temps : ce que l'on observe (l'indice), ce que l'on sait aujourd'hui de cet indice (principe d'actualisme), ce que l'on en déduit sur le climat passé.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'changement-climatique',
          title: 'Le changement climatique actuel et ses causes',
          minutes: 35,
          objectives: [
            "Décrire les manifestations du réchauffement climatique actuel à partir de données.",
            "Expliquer le mécanisme de l'effet de serre.",
            "Relier l'augmentation de la teneur en gaz à effet de serre aux activités humaines.",
            "Identifier des conséquences du changement climatique et des solutions d'atténuation et d'adaptation.",
          ],
          course: [
            {
              heading: "Un réchauffement mesuré",
              paragraphs: [
                "Depuis le milieu du XIXe siècle, des milliers de stations mesurent la température de l'air et de l'océan. Ces mesures montrent que la température moyenne à la surface de la Terre a augmenté d'environ 1,1 °C entre la période 1850-1900 et la décennie 2011-2020, selon le rapport du GIEC publié en 2021. Les années les plus récentes figurent parmi les plus chaudes jamais mesurées.",
                "D'autres observations confirment ce réchauffement : la plupart des glaciers de montagne reculent (la Mer de Glace, dans le massif du Mont-Blanc, a perdu une grande partie de son épaisseur), la surface de la banquise arctique en été diminue, le niveau moyen des mers s'est élevé d'environ 20 cm entre 1901 et 2018, et les vagues de chaleur sont plus fréquentes et plus intenses. En France, le record absolu de température, 46,0 °C, a été mesuré le 28 juin 2019 dans l'Hérault.",
              ],
              box: { label: "Repère", text: "Réchauffement d'environ 1,1 °C entre 1850-1900 et 2011-2020 (GIEC, 2021). Hausse du niveau des mers d'environ 20 cm entre 1901 et 2018. Recul des glaciers et de la banquise arctique." },
            },
            {
              heading: "L'effet de serre",
              paragraphs: [
                "Le Soleil envoie vers la Terre un rayonnement, en grande partie de la lumière visible, qui traverse l'atmosphère. Environ un tiers est réfléchi vers l'espace (par les nuages, la glace, les surfaces claires) ; le reste est absorbé par le sol et l'océan, qui se réchauffent. La surface de la Terre émet à son tour un rayonnement invisible, l'infrarouge.",
                "Certains gaz de l'atmosphère, appelés gaz à effet de serre, absorbent une partie de ce rayonnement infrarouge et en renvoient une partie vers le sol, qui se réchauffe davantage. Les principaux sont la vapeur d'eau, le dioxyde de carbone (CO₂), le méthane (CH₄) et le protoxyde d'azote (N₂O). Cet effet de serre est d'abord naturel et indispensable : sans lui, la température moyenne de la Terre serait d'environ -18 °C, au lieu d'environ 15 °C.",
                "Le problème vient de son renforcement : plus il y a de gaz à effet de serre, plus l'atmosphère retient d'énergie, et plus la température moyenne augmente.",
              ],
              box: { label: "Définition", text: "L'effet de serre est le réchauffement de la surface de la Terre dû à des gaz de l'atmosphère (vapeur d'eau, CO₂, CH₄, N₂O) qui absorbent une partie du rayonnement infrarouge émis par le sol et en renvoient une partie vers lui." },
            },
            {
              heading: "Des causes humaines",
              paragraphs: [
                "Avant l'ère industrielle, l'atmosphère contenait environ 280 ppm de CO₂. Cette teneur dépasse aujourd'hui 420 ppm, une valeur jamais atteinte depuis au moins 800 000 ans. Cette hausse est due principalement à la combustion des combustibles fossiles (charbon, pétrole, gaz naturel) pour produire de l'électricité, se chauffer, se déplacer et faire fonctionner l'industrie, ainsi qu'à la déforestation : les arbres coupés ou brûlés ne stockent plus de carbone et libèrent celui qu'ils contenaient.",
                "La teneur en méthane a aussi fortement augmenté, à cause de l'élevage des ruminants, des rizières, des décharges et des fuites lors de l'extraction du gaz et du charbon ; le protoxyde d'azote provient surtout des engrais azotés utilisés en agriculture. Les causes naturelles (activité du Soleil, éruptions volcaniques) ne suffisent pas à expliquer le réchauffement observé depuis le milieu du XXe siècle. Le GIEC a conclu en 2021 que l'influence humaine sur le réchauffement de l'atmosphère, de l'océan et des terres est sans équivoque.",
                "Une partie du CO₂ émis, environ la moitié, est absorbée par les océans et la végétation, qu'on appelle des puits de carbone. Mais le CO₂ qui se dissout dans l'océan le rend plus acide, ce qui menace les coraux et les animaux à coquille.",
              ],
              box: { label: "À retenir", text: "CO₂ : environ 280 ppm avant l'ère industrielle, plus de 420 ppm aujourd'hui. Causes principales : combustion des énergies fossiles et déforestation (CO₂), élevage et rizières (CH₄), engrais (N₂O)." },
            },
            {
              heading: "Conséquences et réponses",
              paragraphs: [
                "Le réchauffement a des conséquences sur les êtres vivants et les sociétés : élévation du niveau des mers qui menace les littoraux, sécheresses et vagues de chaleur plus fréquentes, pluies intenses dans certaines régions, déplacement d'espèces vers les pôles ou en altitude, risques pour l'agriculture et la santé. En France, les vendanges ont lieu en moyenne bien plus tôt qu'il y a quelques décennies.",
                "Deux types de réponses se complètent. L'atténuation consiste à réduire les émissions de gaz à effet de serre : économiser l'énergie, développer les énergies renouvelables et bas carbone, isoler les bâtiments, privilégier les transports en commun et le vélo, limiter le gaspillage, protéger et replanter les forêts. L'adaptation consiste à se préparer aux changements devenus inévitables : végétaliser les villes, adapter les cultures, protéger les côtes.",
                "Au niveau international, le GIEC (Groupe d'experts intergouvernemental sur l'évolution du climat), créé en 1988, fait la synthèse des connaissances scientifiques. En 2015, l'accord de Paris a fixé l'objectif de contenir le réchauffement nettement en dessous de 2 °C par rapport à l'époque préindustrielle, en poursuivant les efforts pour le limiter à 1,5 °C.",
              ],
            },
          ],
          keyPoints: [
            "La température moyenne mondiale a augmenté d'environ 1,1 °C entre 1850-1900 et 2011-2020.",
            "L'effet de serre naturel maintient une température moyenne d'environ 15 °C au lieu de -18 °C.",
            "Les gaz à effet de serre (vapeur d'eau, CO₂, CH₄, N₂O) absorbent une partie du rayonnement infrarouge émis par le sol.",
            "Le CO₂ est passé d'environ 280 ppm à plus de 420 ppm, surtout à cause des énergies fossiles et de la déforestation.",
            "Atténuation : réduire les émissions. Adaptation : se préparer aux effets inévitables.",
            "Accord de Paris (2015) : rester nettement sous 2 °C de réchauffement, viser 1,5 °C.",
          ],
          example: {
            statement: "La teneur de l'atmosphère en CO₂ est passée d'environ 280 ppm avant l'ère industrielle à environ 420 ppm aujourd'hui. Calculez le pourcentage d'augmentation et expliquez la conséquence de cette hausse sur la température.",
            solution: [
              "Augmentation : 420 - 280 = 140 ppm.",
              "Pourcentage : (140 ÷ 280) × 100 = 50 %. La teneur en CO₂ a augmenté d'environ 50 %.",
              "Le CO₂ est un gaz à effet de serre : il absorbe une partie du rayonnement infrarouge émis par la surface de la Terre et en renvoie une partie vers elle.",
              "Plus sa teneur augmente, plus l'effet de serre est renforcé et plus la température moyenne de la surface s'élève.",
              "Conclusion : la teneur en CO₂ a augmenté d'environ 50 %, ce qui renforce l'effet de serre et contribue au réchauffement climatique actuel.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque activité selon le gaz à effet de serre qu'elle émet principalement (CO₂, CH₄ ou N₂O) : a) rouler dans une voiture à essence ; b) élever des vaches ; c) utiliser des engrais azotés ; d) brûler une forêt ; e) produire de l'électricité dans une centrale à charbon ; f) cultiver du riz dans des rizières inondées.",
              hint: "La combustion émet du CO₂ ; les fermentations sans dioxygène (dans l'estomac des ruminants, dans l'eau des rizières) produisent du méthane.",
              solution: [
                "CO₂ : a) voiture à essence, d) forêt brûlée, e) centrale à charbon (combustion).",
                "CH₄ : b) élevage de vaches, f) rizières.",
                "N₂O : c) engrais azotés.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez, en quatre étapes, comment une augmentation de la teneur en CO₂ de l'atmosphère conduit à une hausse de la température moyenne de la Terre. Utilisez les mots : rayonnement solaire, sol, infrarouge, gaz à effet de serre.",
              hint: "Suivez le trajet de l'énergie : du Soleil vers le sol, puis du sol vers l'atmosphère.",
              solution: [
                "1) Le rayonnement solaire traverse l'atmosphère et une partie est absorbée par le sol et les océans, qui se réchauffent.",
                "2) Le sol réchauffé émet un rayonnement infrarouge vers l'atmosphère.",
                "3) Les gaz à effet de serre, dont le CO₂, absorbent une partie de cet infrarouge et en renvoient une partie vers le sol.",
                "4) Si la teneur en CO₂ augmente, une plus grande partie de l'infrarouge est retenue : le sol reçoit plus d'énergie et la température moyenne s'élève.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Un camarade affirme : « Le réchauffement climatique, c'est à cause du trou dans la couche d'ozone, et de toute façon le climat a toujours changé, donc ce n'est pas l'Homme. » À l'aide de vos connaissances, répondez-lui de façon argumentée en corrigeant ses deux erreurs.",
              hint: "Distinguez deux phénomènes différents (couche d'ozone et effet de serre), puis comparez la vitesse et les causes des changements passés et actuels.",
              solution: [
                "Première erreur : le trou dans la couche d'ozone n'est pas la cause du réchauffement. La couche d'ozone filtre les rayons ultraviolets du Soleil ; sa dégradation augmente les risques pour la peau et les yeux. Le réchauffement climatique est dû au renforcement de l'effet de serre par l'augmentation des gaz à effet de serre (CO₂, CH₄, N₂O). Ce sont deux problèmes distincts.",
                "Deuxième erreur : il est vrai que le climat a changé dans le passé, mais pour des causes naturelles (variations de l'orbite terrestre, volcanisme) et généralement sur des milliers d'années. Le réchauffement actuel, d'environ 1,1 °C en un peu plus d'un siècle, est beaucoup plus rapide.",
                "Ce réchauffement coïncide avec la hausse du CO₂ de 280 ppm à plus de 420 ppm, due à la combustion des énergies fossiles et à la déforestation. Les causes naturelles ne suffisent pas à l'expliquer, et le GIEC a conclu en 2021 que l'influence humaine est sans équivoque.",
                "Conclusion : le réchauffement actuel n'est pas dû à la couche d'ozone, et même si le climat a toujours varié, le changement actuel a bien une origine humaine.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le changement climatique actuel.",
            statements: [
              { text: "Sans effet de serre, la Terre serait beaucoup plus froide.", true: true, why: "La température moyenne serait d'environ -18 °C au lieu d'environ 15 °C." },
              { text: "Le trou dans la couche d'ozone est la cause principale du réchauffement climatique.", true: false, why: "L'ozone filtre les ultraviolets ; le réchauffement vient du renforcement de l'effet de serre." },
              { text: "La combustion du charbon, du pétrole et du gaz libère du CO₂.", true: true, why: "Ces combustibles fossiles contiennent du carbone qui se combine au dioxygène lors de la combustion." },
              { text: "La vapeur d'eau est un gaz à effet de serre.", true: true, why: "C'est même le principal gaz à effet de serre naturel." },
              { text: "Un hiver très froid prouve que le climat ne se réchauffe pas.", true: false, why: "Un hiver relève de la météorologie ; le climat s'étudie sur des moyennes de plusieurs décennies." },
              { text: "L'élevage des ruminants émet du méthane.", true: true, why: "La digestion des ruminants produit du méthane, un puissant gaz à effet de serre." },
              { text: "Planter des arbres n'a aucun effet sur le CO₂ de l'atmosphère.", true: false, why: "En grandissant, les arbres absorbent du CO₂ par la photosynthèse et stockent du carbone." },
            ],
          },
          quiz: [
            {
              q: "Quelle était la teneur approximative en CO₂ de l'atmosphère avant l'ère industrielle ?",
              options: ["420 ppm", "180 ppm", "280 ppm", "1 000 ppm"],
              answer: 2,
              why: "Elle était d'environ 280 ppm ; elle dépasse aujourd'hui 420 ppm.",
            },
            {
              q: "Quel rayonnement les gaz à effet de serre absorbent-ils en partie ?",
              options: ["Le rayonnement infrarouge émis par la surface de la Terre", "La lumière visible du Soleil uniquement, avant qu'elle n'atteigne le sol", "Les ondes radio", "Les rayons X"],
              answer: 0,
              why: "La surface terrestre réchauffée émet de l'infrarouge, dont une partie est absorbée puis renvoyée vers le sol par ces gaz.",
            },
            {
              q: "Quelle activité humaine est la principale source de CO₂ ?",
              options: ["L'utilisation des réfrigérateurs et des congélateurs", "La respiration humaine", "La culture du riz", "La combustion des énergies fossiles"],
              answer: 3,
              why: "Charbon, pétrole et gaz naturel libèrent, en brûlant, du carbone stocké depuis des millions d'années.",
            },
            {
              q: "Réduire ses déplacements en voiture est une mesure :",
              options: ["d'adaptation", "d'atténuation", "sans lien avec le climat", "de prévision météorologique"],
              answer: 1,
              why: "Elle réduit les émissions de gaz à effet de serre : c'est de l'atténuation.",
            },
            {
              q: "Quel est l'objectif principal de l'accord de Paris (2015) ?",
              options: ["Interdire toutes les voitures", "Supprimer l'effet de serre", "Contenir le réchauffement nettement sous 2 °C", "Refroidir la Terre de 2 °C"],
              answer: 2,
              why: "L'accord vise à rester nettement sous 2 °C par rapport à l'époque préindustrielle, en visant 1,5 °C.",
            },
          ],
          trap: "Confondre l'effet de serre et la couche d'ozone, deux phénomènes distincts. Ou présenter l'effet de serre comme mauvais en soi, alors qu'il est naturel et indispensable : c'est son renforcement par les activités humaines qui pose problème.",
          method: "Pour expliquer l'effet de serre, faites un schéma simple avec trois flèches : rayonnement solaire qui arrive, infrarouge émis par le sol, infrarouge renvoyé vers le sol par les gaz à effet de serre. Récitez-le à voix haute en suivant les flèches.",
        },
      ],
    },

    /* ==================================================================== */
    /* ACTIVITÉS HUMAINES ET ENVIRONNEMENT                                    */
    /* ==================================================================== */
    {
      id: 'activites-humaines',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ressources-naturelles',
          title: 'L\'exploitation des ressources naturelles',
          minutes: 30,
          objectives: [
            "Distinguer ressources renouvelables et ressources non renouvelables.",
            "Expliquer la formation des combustibles fossiles et pourquoi leurs stocks sont limités.",
            "Identifier les bénéfices et les risques de l'exploitation d'une ressource naturelle.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une ressource naturelle ?",
              paragraphs: [
                "Une ressource naturelle est un élément de la nature que les êtres humains utilisent pour satisfaire leurs besoins : l'eau, l'air, les sols, les roches et les minerais (dont on extrait les métaux), les combustibles fossiles (charbon, pétrole, gaz naturel), les êtres vivants (bois, poissons, plantes cultivées) et les sources d'énergie comme le rayonnement solaire ou le vent.",
                "On distingue deux catégories. Une ressource renouvelable se reconstitue naturellement à l'échelle d'une vie humaine : l'eau douce grâce au cycle de l'eau, le bois grâce à la croissance des arbres, les poissons grâce à leur reproduction. Une ressource non renouvelable existe en quantité limitée, car elle s'est formée sur des millions d'années : le pétrole, le charbon, le gaz naturel, les minerais métalliques ou l'uranium.",
                "Attention : une ressource renouvelable ne le reste que si on l'exploite moins vite qu'elle ne se reconstitue. Une forêt coupée plus vite qu'elle ne repousse ou un stock de poissons pêché plus vite qu'il ne se reproduit peuvent disparaître. Ainsi, au début des années 1990, la surpêche a provoqué l'effondrement des stocks de morue au large de Terre-Neuve, au Canada, et la pêche a dû être interdite.",
              ],
              box: { label: "Définition", text: "Ressource renouvelable : elle se reconstitue à l'échelle d'une vie humaine, si on ne l'exploite pas plus vite qu'elle ne se renouvelle. Ressource non renouvelable : stock limité, formé sur des millions d'années." },
            },
            {
              heading: "Les combustibles fossiles",
              paragraphs: [
                "Le pétrole et le gaz naturel proviennent de la matière organique d'êtres vivants microscopiques, surtout du plancton, accumulée au fond de mers ou de lacs pauvres en dioxygène. Recouverte de sédiments et enfouie en profondeur, cette matière s'est transformée lentement, sous l'effet de la température et de la pression, pendant des millions d'années. Le charbon provient de l'accumulation de débris de végétaux dans des marécages, par exemple il y a environ 300 millions d'années, à une période appelée Carbonifère.",
                "Ces combustibles fournissent encore la plus grande partie de l'énergie utilisée dans le monde. Comme ils se forment beaucoup plus lentement que nous ne les consommons, leurs stocks diminuent. De plus, leur combustion libère du CO₂, principal responsable du réchauffement climatique actuel.",
              ],
              box: { label: "À retenir", text: "Pétrole et gaz : matière organique du plancton transformée pendant des millions d'années. Charbon : débris de végétaux des marécages. Ce sont des ressources non renouvelables, dont la combustion émet du CO₂." },
            },
            {
              heading: "L'eau et les sols, des ressources fragiles",
              paragraphs: [
                "L'eau couvre environ 70 % de la surface de la Terre, mais environ 97 % de cette eau est salée. L'eau douce est surtout stockée dans les glaces et dans les nappes souterraines, et seule une petite partie est facilement accessible. À l'échelle mondiale, l'agriculture est de loin la première utilisatrice d'eau douce. Une nappe phréatique pompée plus vite qu'elle n'est rechargée par les pluies s'épuise, et elle peut être polluée par les nitrates et les pesticides.",
                "Le sol, couche superficielle meuble qui permet la croissance des plantes, se forme très lentement par l'altération des roches et la décomposition de la matière organique, qui produit l'humus : il faut souvent plusieurs siècles pour former quelques centimètres de sol. À l'échelle humaine, le sol est donc une ressource quasiment non renouvelable, menacée par l'érosion, la pollution et l'artificialisation (construction de routes, de parkings et de bâtiments).",
              ],
            },
            {
              heading: "Bénéfices et risques de l'exploitation",
              paragraphs: [
                "L'exploitation des ressources apporte des bénéfices majeurs : énergie, alimentation, matériaux de construction, métaux pour les objets électroniques, emplois. Mais elle présente aussi des risques : épuisement des stocks, destruction de milieux naturels (mines à ciel ouvert, déforestation), pollution des eaux et des sols, émissions de gaz à effet de serre.",
                "Un téléphone portable contient par exemple plusieurs dizaines de métaux différents, extraits de mines parfois très éloignées et souvent difficiles à recycler. Utiliser plus longtemps ses appareils, les faire réparer et les déposer dans un point de collecte permet de réduire l'extraction de nouvelles ressources.",
              ],
              box: { label: "Méthode", text: "Pour étudier l'exploitation d'une ressource : la nommer, dire si elle est renouvelable, identifier les bénéfices (pour qui ?) et les risques (pour quel milieu, quelles populations ?), puis proposer une gestion plus durable." },
            },
          ],
          keyPoints: [
            "Une ressource naturelle est un élément de la nature utilisé par l'être humain.",
            "Renouvelable : se reconstitue à l'échelle humaine (eau, bois, poissons), à condition de ne pas la surexploiter.",
            "Non renouvelable : stock limité, formé en millions d'années (pétrole, gaz, charbon, minerais).",
            "Le sol se forme très lentement : c'est une ressource fragile.",
            "L'exploitation des ressources a des bénéfices (énergie, alimentation, matériaux) et des risques (épuisement, pollution, destruction des milieux).",
          ],
          example: {
            statement: "Dans cet exercice, on considère qu'un stock de poissons compte 100 000 tonnes et qu'il se reconstitue naturellement de 15 000 tonnes par an grâce à la reproduction. Que se passe-t-il si l'on pêche 10 000 tonnes par an ? Et 25 000 tonnes par an ?",
            solution: [
              "Si l'on pêche 10 000 tonnes par an, on prélève moins que ce que le stock produit (10 000 < 15 000) : le stock peut se maintenir, voire augmenter de 15 000 - 10 000 = 5 000 tonnes par an.",
              "Si l'on pêche 25 000 tonnes par an, on prélève plus que ce que le stock produit : il diminue de 25 000 - 15 000 = 10 000 tonnes par an.",
              "À ce rythme, le stock perd 10 % de sa valeur initiale chaque année (10 000 ÷ 100 000 = 0,1) et pourrait s'effondrer en une dizaine d'années, d'autant que moins de poissons donnent moins de jeunes.",
              "Conclusion : une ressource renouvelable ne le reste que si le prélèvement est inférieur au renouvellement ; ici, une pêche de 10 000 tonnes par an est durable, une pêche de 25 000 tonnes par an ne l'est pas.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les ressources suivantes en renouvelables ou non renouvelables : le pétrole, le bois, le vent, le cuivre, l'eau douce, le charbon, les poissons, le gaz naturel.",
              hint: "Demandez-vous si la ressource peut se reconstituer en quelques années ou s'il a fallu des millions d'années pour la former.",
              solution: [
                "Renouvelables : le bois, le vent, l'eau douce, les poissons (à condition de ne pas les surexploiter pour le bois, l'eau et les poissons).",
                "Non renouvelables : le pétrole, le cuivre, le charbon, le gaz naturel (stocks limités, formés sur des millions d'années).",
              ],
            },
            {
              level: 2,
              statement: "On utilise ici des ordres de grandeur. Les réserves mondiales connues d'une ressource fossile sont estimées à 1 700 milliards d'unités, et l'humanité en consomme 34 milliards d'unités par an. a) Calculez pendant combien d'années ces réserves suffiraient au rythme actuel. b) Citez deux raisons pour lesquelles ce résultat n'est qu'une estimation. c) Pourquoi cette ressource est-elle dite non renouvelable ?",
              hint: "Divisez les réserves par la consommation annuelle. Pour b), pensez à l'évolution de la consommation et des découvertes.",
              solution: [
                "a) 1 700 ÷ 34 = 50. Au rythme actuel, les réserves suffiraient environ 50 ans.",
                "b) La consommation peut augmenter ou diminuer dans les années à venir, et de nouveaux gisements peuvent être découverts ou devenir exploitables grâce à de nouvelles techniques.",
                "c) Elle s'est formée sur des millions d'années, beaucoup plus lentement que nous ne la consommons : à l'échelle humaine, son stock ne se reconstitue pas.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Dans une région agricole, le niveau de la nappe phréatique a baissé de 6 m en 20 ans. Pendant cette période, la surface de cultures irriguées a doublé et les pluies sont restées à peu près stables. a) Calculez la baisse moyenne du niveau de la nappe par an. b) Proposez une explication à cette baisse. c) Montrez que l'eau, ressource renouvelable, peut s'épuiser localement. d) Proposez deux solutions pour une gestion plus durable.",
              hint: "Comparez ce qui entre dans la nappe (les pluies) et ce qui en sort (les pompages).",
              solution: [
                "a) 6 ÷ 20 = 0,3 m par an, soit 30 cm par an en moyenne.",
                "b) Les pluies, qui rechargent la nappe, sont restées stables, alors que les pompages pour l'irrigation ont fortement augmenté avec le doublement des surfaces irriguées. On prélève plus d'eau que la pluie n'en apporte.",
                "c) L'eau est renouvelable grâce au cycle de l'eau, mais seulement si les prélèvements restent inférieurs à la recharge. Ici, les prélèvements dépassent la recharge depuis 20 ans : la nappe s'épuise localement.",
                "d) Solutions : utiliser l'irrigation au goutte-à-goutte, qui apporte l'eau au pied des plantes avec moins de pertes ; choisir des cultures moins gourmandes en eau ; limiter les volumes pompés par des règles communes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque ressource à la description qui lui correspond.",
            pairs: [
              { left: "Pétrole", right: "Formé en millions d'années à partir de plancton" },
              { left: "Charbon", right: "Formé à partir de débris de végétaux des marécages" },
              { left: "Eau douce", right: "Renouvelée par le cycle de l'eau, mais inégalement répartie" },
              { left: "Sol", right: "Se forme en plusieurs siècles par altération des roches et humus" },
              { left: "Poissons", right: "Renouvelables si la pêche ne dépasse pas leur reproduction" },
              { left: "Minerais métalliques", right: "Stock limité qu'il est utile de recycler" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces ressources est non renouvelable ?",
              options: ["Le vent", "Le gaz naturel", "Le bois", "Le rayonnement solaire"],
              answer: 1,
              why: "Le gaz naturel s'est formé sur des millions d'années : son stock est limité.",
            },
            {
              q: "À partir de quoi le charbon s'est-il formé ?",
              options: ["De laves volcaniques refroidies", "De sel marin", "De coquilles d'animaux marins accumulées au fond des océans", "De débris de végétaux accumulés dans des marécages"],
              answer: 3,
              why: "Le charbon provient de végétaux enfouis et transformés pendant des millions d'années.",
            },
            {
              q: "Environ quelle proportion de l'eau de la Terre est salée ?",
              options: ["30 %", "50 %", "97 %", "10 %"],
              answer: 2,
              why: "Environ 97 % de l'eau terrestre est salée ; l'eau douce, surtout stockée dans les glaces et les nappes, est rare.",
            },
            {
              q: "Une ressource renouvelable peut-elle disparaître ?",
              options: ["Oui, si on l'exploite plus vite qu'elle ne se reconstitue", "Non, jamais", "Seulement si c'est un minerai", "Seulement en cas d'éruption volcanique"],
              answer: 0,
              why: "La surpêche ou la surexploitation d'une forêt peuvent faire disparaître une ressource pourtant renouvelable.",
            },
            {
              q: "Pourquoi le sol est-il considéré comme une ressource fragile ?",
              options: ["Parce qu'il est entièrement fait de pétrole", "Parce qu'il ne contient aucun être vivant capable de le régénérer", "Parce qu'il se reforme en quelques jours", "Parce qu'il se forme très lentement, en plusieurs siècles"],
              answer: 3,
              why: "Quelques centimètres de sol demandent souvent plusieurs siècles pour se former : une perte par érosion ou artificialisation est presque définitive à l'échelle humaine.",
            },
          ],
          trap: "Croire qu'une ressource renouvelable est inépuisable : elle ne se renouvelle que si on la prélève moins vite qu'elle ne se reconstitue. Inversement, oublier que le sol, bien qu'il se forme naturellement, est presque non renouvelable à l'échelle humaine.",
          method: "Pour savoir si une ressource est renouvelable, comparez deux vitesses : la vitesse à laquelle elle se forme ou se reconstitue, et la vitesse à laquelle on l'utilise. Si la première est bien plus lente, la ressource se comporte comme non renouvelable.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'ecosystemes-impacts',
          title: 'Les écosystèmes face aux activités humaines',
          minutes: 30,
          objectives: [
            "Définir un écosystème et identifier les services qu'il rend aux sociétés humaines.",
            "Identifier les principales causes de l'érosion de la biodiversité liées aux activités humaines.",
            "Expliquer l'accumulation d'un polluant le long d'une chaîne alimentaire.",
          ],
          course: [
            {
              heading: "Les écosystèmes et les services qu'ils rendent",
              paragraphs: [
                "Un écosystème est formé d'un milieu de vie (le biotope : sol, eau, climat) et de l'ensemble des êtres vivants qui l'habitent (la biocénose), reliés par de nombreuses interactions : relations alimentaires, pollinisation, décomposition de la matière organique. Une forêt, une mare, une prairie ou un récif corallien sont des écosystèmes.",
                "Les écosystèmes rendent aux sociétés humaines des services essentiels, appelés services écosystémiques : production de nourriture, de bois et de médicaments, pollinisation des cultures par les insectes, purification de l'eau par les zones humides et les sols, fertilité des sols grâce aux décomposeurs, stockage du carbone par les forêts et les océans, protection contre les inondations, mais aussi loisirs et paysages.",
              ],
              box: { label: "Définition", text: "Un écosystème est l'ensemble formé par un milieu de vie (biotope) et les êtres vivants qui l'habitent (biocénose), ainsi que les interactions qui les relient." },
            },
            {
              heading: "Une biodiversité en déclin",
              paragraphs: [
                "En 2019, la Plateforme intergouvernementale sur la biodiversité et les services écosystémiques (IPBES) a estimé qu'environ un million d'espèces animales et végétales sont menacées d'extinction. Elle a identifié cinq grandes causes de cette érosion de la biodiversité, toutes liées aux activités humaines.",
                "1) La destruction et la fragmentation des milieux : déforestation (par exemple en Amazonie pour l'élevage et les cultures), assèchement des zones humides, arrachage des haies, artificialisation des sols. Les routes et les zones urbaines découpent les milieux en petits morceaux isolés, ce qui empêche les animaux de se déplacer. 2) La surexploitation des espèces : surpêche, chasse excessive, braconnage. 3) Le changement climatique, qui modifie les milieux plus vite que certaines espèces ne peuvent s'adapter ou se déplacer. 4) Les pollutions. 5) Les espèces exotiques envahissantes.",
              ],
              box: { label: "À retenir", text: "Cinq causes principales de l'érosion de la biodiversité : destruction et fragmentation des milieux, surexploitation, changement climatique, pollutions, espèces exotiques envahissantes." },
            },
            {
              heading: "Pollutions et accumulation dans les chaînes alimentaires",
              paragraphs: [
                "Les excès d'engrais (nitrates, phosphates) entraînés par les pluies vers les rivières et la mer favorisent la prolifération d'algues : c'est l'eutrophisation. En se décomposant, ces algues consomment le dioxygène de l'eau, ce qui peut asphyxier poissons et autres animaux. Les marées vertes de certaines plages de Bretagne en sont un exemple. Les plastiques, eux, se fragmentent en microplastiques que l'on retrouve dans tous les océans et jusque dans les organismes.",
                "Certains polluants ne sont ni dégradés ni éliminés par les êtres vivants : ils s'accumulent dans leurs tissus. C'est le cas du mercure ou d'anciens pesticides comme le DDT. Chaque consommateur mange un grand nombre de proies et accumule les polluants qu'elles contenaient : la concentration augmente à chaque maillon de la chaîne alimentaire. C'est la bioaccumulation. Les grands prédateurs, en bout de chaîne, sont les plus touchés : c'est pourquoi on recommande de limiter la consommation de certains grands poissons prédateurs, comme l'espadon, chez les jeunes enfants et les femmes enceintes.",
              ],
              box: { label: "Définition", text: "La bioaccumulation est l'augmentation de la concentration d'un polluant non dégradable dans les êtres vivants, de maillon en maillon le long d'une chaîne alimentaire." },
            },
            {
              heading: "Les espèces exotiques envahissantes",
              paragraphs: [
                "Une espèce exotique envahissante est une espèce introduite par l'être humain, volontairement ou non, hors de son aire d'origine, et qui prolifère au détriment des espèces locales. Sans prédateurs naturels dans son nouveau milieu, elle se multiplie rapidement et peut entrer en concurrence avec les espèces locales ou les consommer.",
                "Le frelon asiatique, arrivé accidentellement en France dans les années 2000, s'attaque aux abeilles domestiques. La jussie, plante aquatique d'ornement venue d'Amérique du Sud, envahit les étangs et les cours d'eau et étouffe la végétation locale. Pour limiter ces invasions, il faut contrôler les échanges de plantes et d'animaux, ne jamais relâcher un animal de compagnie dans la nature, et intervenir tôt quand une espèce envahissante est repérée.",
              ],
            },
          ],
          keyPoints: [
            "Un écosystème = un biotope + une biocénose + leurs interactions.",
            "Les écosystèmes rendent des services : nourriture, pollinisation, eau pure, sols fertiles, stockage du carbone.",
            "Environ un million d'espèces sont menacées d'extinction selon l'IPBES (2019).",
            "Cinq causes : destruction des milieux, surexploitation, changement climatique, pollutions, espèces envahissantes.",
            "Bioaccumulation : un polluant non dégradable se concentre de maillon en maillon ; les prédateurs finaux sont les plus touchés.",
          ],
          example: {
            statement: "Dans une région de bocage, on a arraché la plupart des haies pour agrandir les champs. Les agriculteurs constatent ensuite davantage de pucerons sur leurs cultures et moins d'oiseaux. Proposez une explication.",
            solution: [
              "Les haies sont un milieu de vie (abri, lieu de nidification, nourriture) pour de nombreux oiseaux et insectes.",
              "En arrachant les haies, on détruit ce milieu : les oiseaux, privés d'abri et de lieux de nidification, deviennent moins nombreux.",
              "Or beaucoup de ces oiseaux, ainsi que certains insectes des haies comme les coccinelles, mangent des pucerons.",
              "Avec moins de prédateurs, les pucerons se multiplient davantage sur les cultures.",
              "Conclusion : la destruction des haies a réduit la biodiversité et supprimé un service écosystémique, la régulation naturelle des ravageurs des cultures.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquez laquelle des cinq causes d'érosion de la biodiversité est en jeu : a) une zone humide est asséchée pour construire un centre commercial ; b) un stock de thons est pêché plus vite qu'il ne se reproduit ; c) le frelon asiatique attaque les ruches ; d) des nitrates provoquent une prolifération d'algues dans une rivière ; e) une espèce de montagne voit son habitat remonter en altitude avec la hausse des températures.",
              hint: "Les cinq causes sont : destruction des milieux, surexploitation, changement climatique, pollutions, espèces exotiques envahissantes.",
              solution: [
                "a) Destruction des milieux (artificialisation d'une zone humide).",
                "b) Surexploitation (surpêche).",
                "c) Espèce exotique envahissante.",
                "d) Pollution (eutrophisation due aux engrais).",
                "e) Changement climatique.",
              ],
            },
            {
              level: 2,
              statement: "Dans un lac pollué par un pesticide non dégradable, on mesure les concentrations suivantes (valeurs simplifiées, en mg par kg) : eau 0,00005 ; plancton 0,04 ; petits poissons 0,5 ; grands poissons carnivores 2 ; oiseaux pêcheurs 25. a) Écrivez la chaîne alimentaire. b) Par combien la concentration est-elle multipliée entre les grands poissons et les oiseaux ? c) Expliquez pourquoi les oiseaux sont les plus contaminés.",
              hint: "Chaque être vivant est mangé par le suivant. Pour b), divisez la concentration chez les oiseaux par celle chez les grands poissons.",
              solution: [
                "a) Plancton → petits poissons → grands poissons carnivores → oiseaux pêcheurs (la flèche signifie « est mangé par »).",
                "b) 25 ÷ 2 = 12,5. La concentration est multipliée par 12,5 entre les grands poissons et les oiseaux.",
                "c) Le pesticide n'est ni dégradé ni éliminé : il s'accumule dans les tissus. Chaque oiseau mange de très nombreux poissons au cours de sa vie et accumule le pesticide qu'ils contenaient. Situés en bout de chaîne, les oiseaux concentrent le polluant accumulé à tous les maillons précédents : c'est la bioaccumulation.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Une commune veut construire une route qui traversera une forêt et coupera en deux le territoire d'une population de cerfs, de blaireaux et d'amphibiens qui se rendent chaque printemps dans une mare située de l'autre côté. a) Identifiez les conséquences possibles de ce projet sur la biodiversité. b) Expliquez pourquoi une population isolée en petits groupes est plus fragile. c) Proposez deux aménagements qui limiteraient l'impact de la route.",
              hint: "Pensez à la fragmentation des milieux et aux déplacements des animaux.",
              solution: [
                "a) La route détruit une partie de la forêt et fragmente le milieu en deux morceaux. Les animaux qui la traversent risquent d'être écrasés (en particulier les amphibiens qui rejoignent la mare pour se reproduire), et beaucoup ne pourront plus atteindre la mare ou une partie de leur territoire.",
                "b) Une population coupée en petits groupes isolés a moins de partenaires de reproduction, perd de la diversité génétique, et un événement défavorable (maladie, hiver rigoureux) peut faire disparaître un petit groupe entier sans qu'il soit remplacé par des individus venus d'ailleurs.",
                "c) Construire des passages à faune (pont végétalisé au-dessus de la route ou tunnels sous la route, notamment des crapauducs pour les amphibiens) et installer des clôtures qui guident les animaux vers ces passages. On peut aussi choisir un tracé qui contourne la forêt.",
                "Conclusion : la fragmentation des milieux menace la biodiversité, mais des aménagements permettent de rétablir une continuité écologique.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les écosystèmes et les activités humaines.",
            statements: [
              { text: "Les insectes pollinisateurs rendent un service écosystémique à l'agriculture.", true: true, why: "La pollinisation est indispensable à la production de nombreux fruits et légumes." },
              { text: "Les grands prédateurs sont les moins touchés par les polluants non dégradables.", true: false, why: "C'est l'inverse : la bioaccumulation les rend les plus contaminés, en bout de chaîne." },
              { text: "Une espèce envahissante est forcément venue seule, sans intervention humaine.", true: false, why: "Elle a été introduite par l'être humain, volontairement ou accidentellement." },
              { text: "L'excès d'engrais dans l'eau peut provoquer une prolifération d'algues.", true: true, why: "C'est l'eutrophisation, qui peut asphyxier les animaux aquatiques." },
              { text: "Une route qui traverse une forêt peut nuire à la biodiversité même sans détruire beaucoup d'arbres.", true: true, why: "Elle fragmente le milieu et empêche les déplacements des animaux." },
              { text: "Relâcher sa tortue de compagnie dans un étang aide la biodiversité locale.", true: false, why: "Une espèce exotique relâchée peut devenir envahissante et nuire aux espèces locales." },
            ],
          },
          quiz: [
            {
              q: "Un écosystème est formé :",
              options: ["d'un biotope, d'une biocénose et de leurs interactions", "uniquement des animaux qui vivent dans un même milieu, sans les plantes", "uniquement des plantes d'un milieu", "du climat d'une région seulement"],
              answer: 0,
              why: "Un écosystème associe le milieu de vie, les êtres vivants et les relations qui les unissent.",
            },
            {
              q: "Selon l'IPBES (2019), environ combien d'espèces sont menacées d'extinction ?",
              options: ["Une centaine", "Mille", "Un million", "Un milliard"],
              answer: 2,
              why: "L'IPBES estime qu'environ un million d'espèces animales et végétales sont menacées d'extinction.",
            },
            {
              q: "Comment appelle-t-on la concentration croissante d'un polluant le long d'une chaîne alimentaire ?",
              options: ["L'eutrophisation", "La photosynthèse des algues", "La fragmentation", "La bioaccumulation"],
              answer: 3,
              why: "Un polluant non dégradable se concentre de maillon en maillon, jusqu'aux prédateurs finaux.",
            },
            {
              q: "Lequel de ces exemples est une espèce exotique envahissante en France ?",
              options: ["Le frelon asiatique", "Le chêne pédonculé", "Le renard roux", "L'abeille domestique"],
              answer: 0,
              why: "Arrivé accidentellement dans les années 2000, le frelon asiatique s'attaque aux abeilles.",
            },
            {
              q: "Quelle est la cause de l'eutrophisation d'une rivière ?",
              options: ["Un manque de lumière", "Un excès de nitrates et de phosphates", "La présence de poissons carnivores", "Une eau trop froide"],
              answer: 1,
              why: "Ces engrais favorisent la prolifération d'algues dont la décomposition consomme le dioxygène de l'eau.",
            },
          ],
          trap: "Penser que seule la pollution menace la biodiversité, alors que la destruction et la fragmentation des milieux en sont une cause majeure. Autre erreur : croire que la concentration d'un polluant diminue le long d'une chaîne alimentaire, alors qu'elle augmente.",
          method: "Pour analyser l'impact d'une activité humaine sur un écosystème, posez-vous trois questions dans l'ordre : quel milieu ou quelle espèce est touché ? Par quel mécanisme (destruction, surexploitation, climat, pollution, espèce envahissante) ? Quel service écosystémique est perdu ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'risques-naturels',
          title: 'Les risques naturels et leur prévention',
          minutes: 30,
          objectives: [
            "Distinguer aléa, enjeux et risque.",
            "Identifier l'origine de quelques aléas naturels.",
            "Distinguer prévision et prévention, et identifier des mesures de chacune.",
            "Adopter les comportements adaptés face à un risque naturel.",
          ],
          course: [
            {
              heading: "Aléa, enjeux et risque",
              paragraphs: [
                "Un aléa est un phénomène naturel potentiellement dangereux, caractérisé par sa probabilité (la fréquence à laquelle il se produit) et son intensité : un séisme, une éruption volcanique, une inondation, une tempête, un cyclone, un glissement de terrain, une avalanche. Les enjeux sont les personnes, les biens, les activités et l'environnement qui peuvent être touchés.",
                "Le risque naît de la rencontre entre un aléa et des enjeux. Un séisme violent dans un désert inhabité est un aléa sans grand risque ; le même séisme sous une ville très peuplée représente un risque majeur. Le risque dépend aussi de la vulnérabilité des enjeux, c'est-à-dire de leur capacité à résister : une maison construite selon des normes parasismiques est moins vulnérable qu'une maison ordinaire.",
              ],
              box: { label: "Définition", text: "Aléa : phénomène naturel potentiellement dangereux. Enjeux : personnes, biens et activités exposés. Risque : possibilité de dommages, résultant de la rencontre d'un aléa et d'enjeux plus ou moins vulnérables." },
            },
            {
              heading: "D'où viennent les aléas ?",
              paragraphs: [
                "Certains aléas ont une origine interne à la Terre : les séismes et les éruptions volcaniques sont liés au mouvement des plaques lithosphériques. En France, le risque volcanique concerne surtout les territoires d'outre-mer, comme la Martinique, la Guadeloupe ou La Réunion. En 1902, l'éruption de la montagne Pelée a détruit la ville de Saint-Pierre, en Martinique, et tué la quasi-totalité de ses habitants.",
                "D'autres aléas ont une origine externe, liée à l'atmosphère et au climat : les inondations, les tempêtes, les cyclones, les sécheresses ou les canicules. D'autres encore sont liés à la gravité, comme les glissements de terrain, les chutes de blocs et les avalanches. Le changement climatique rend certains aléas plus fréquents ou plus intenses, comme les fortes pluies, les sécheresses et les incendies de forêt.",
              ],
            },
            {
              heading: "Prévoir : surveiller pour alerter",
              paragraphs: [
                "La prévision consiste à surveiller les phénomènes pour annoncer un événement et alerter la population à temps. Les observatoires volcanologiques mesurent en permanence les petits séismes, la déformation du sol et les gaz émis par les volcans actifs. Météo-France publie une carte de vigilance à quatre couleurs (vert, jaune, orange, rouge) pour les orages, les vents violents, les canicules ou les fortes pluies, et le service Vigicrues surveille les crues des cours d'eau. Le système FR-Alert permet d'envoyer une alerte sur les téléphones portables des personnes situées dans une zone menacée.",
                "Tous les aléas ne sont pas prévisibles de la même façon : on peut suivre un cyclone plusieurs jours à l'avance grâce aux satellites, mais on ne sait pas prévoir le jour et l'heure d'un séisme. Pour les séismes, on connaît seulement les zones où ils sont probables.",
              ],
              box: { label: "Repère", text: "Prévision = surveiller et alerter (observatoires, vigilance Météo-France, Vigicrues, FR-Alert). Les séismes ne se prévoient pas à la date près." },
            },
            {
              heading: "Prévenir : réduire la vulnérabilité",
              paragraphs: [
                "La prévention consiste à réduire la vulnérabilité des enjeux avant que l'aléa ne se produise. Les plans de prévention des risques (PPR) délimitent les zones exposées et y interdisent ou y réglementent les constructions, par exemple dans les zones inondables. La France est découpée en cinq zones de sismicité, de très faible à forte (la zone forte correspond aux Antilles), et des règles de construction parasismique s'appliquent selon la zone. On construit aussi des ouvrages de protection : digues, bassins de rétention des eaux, filets et paravalanches.",
                "L'information et l'éducation font partie de la prévention : chaque commune exposée met à disposition un document d'information sur les risques majeurs (DICRIM), et les établissements scolaires préparent et entraînent élèves et personnels grâce à un plan particulier de mise en sûreté (PPMS). Face à un séisme, on s'abrite sous un meuble solide, loin des fenêtres, puis on sort après les secousses sans prendre l'ascenseur. En cas d'inondation, on monte dans les étages, on ne prend pas sa voiture et on ne va pas chercher ses enfants à l'école, où ils sont pris en charge.",
              ],
              box: { label: "À retenir", text: "Prévention = agir avant pour réduire la vulnérabilité : PPR, normes parasismiques, digues et bassins, information (DICRIM), exercices (PPMS), bons comportements." },
            },
          ],
          keyPoints: [
            "Aléa : phénomène naturel dangereux. Enjeux : ce qui peut être touché. Risque : rencontre de l'aléa et des enjeux.",
            "Le risque augmente avec l'intensité de l'aléa, le nombre d'enjeux et leur vulnérabilité.",
            "Aléas d'origine interne (séismes, volcans) ou externe (inondations, tempêtes, cyclones).",
            "Prévision : surveiller et alerter. Prévention : réduire la vulnérabilité avant l'événement.",
            "On ne sait pas prévoir la date d'un séisme : la prévention par la construction parasismique est essentielle.",
          ],
          example: {
            statement: "Deux villages sont situés au bord de la même rivière, qui déborde en moyenne tous les dix ans. Le village A n'a aucune construction dans la zone inondable ; le village B a construit une école et un lotissement dans cette zone. Comparez l'aléa et le risque dans les deux villages.",
            solution: [
              "L'aléa est le même pour les deux villages : la même rivière déborde avec la même fréquence, en moyenne tous les dix ans.",
              "Dans le village A, il n'y a pas d'enjeux dans la zone inondable : le risque est faible.",
              "Dans le village B, l'école et le lotissement sont des enjeux importants (des personnes et des biens) situés dans la zone inondable : le risque est élevé.",
              "Conclusion : à aléa égal, le risque est plus fort dans le village B parce que les enjeux exposés y sont plus nombreux. Un plan de prévention des risques aurait interdit ces constructions.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les mesures suivantes en prévision ou prévention : a) construire une digue ; b) surveiller les gaz émis par un volcan ; c) publier une carte de vigilance orange orages ; d) interdire les constructions en zone inondable ; e) construire selon des normes parasismiques ; f) suivre un cyclone par satellite.",
              hint: "La prévision annonce l'événement ; la prévention réduit les dégâts qu'il pourrait causer.",
              solution: [
                "Prévision : b) surveiller les gaz d'un volcan, c) carte de vigilance orange, f) suivre un cyclone par satellite.",
                "Prévention : a) construire une digue, d) interdire les constructions en zone inondable, e) normes parasismiques.",
              ],
            },
            {
              level: 2,
              statement: "Un séisme de même intensité frappe deux villes. Dans la ville X, les bâtiments sont construits selon des normes parasismiques et la population s'entraîne régulièrement aux consignes. Dans la ville Y, les bâtiments sont anciens et non renforcés, et la population ne connaît pas les consignes. a) L'aléa est-il le même dans les deux villes ? b) Dans quelle ville le risque est-il le plus élevé ? Justifiez avec le mot vulnérabilité. c) Que peut faire la ville Y pour réduire son risque ?",
              hint: "L'aléa dépend du phénomène naturel ; le risque dépend aussi des enjeux et de leur vulnérabilité.",
              solution: [
                "a) Oui, l'aléa est le même : un séisme de même intensité.",
                "b) Le risque est plus élevé dans la ville Y, car ses enjeux sont plus vulnérables : des bâtiments non renforcés risquent de s'effondrer et une population qui ne connaît pas les consignes se met plus en danger.",
                "c) La ville Y peut renforcer ses bâtiments et appliquer les normes parasismiques aux nouvelles constructions, informer la population et organiser des exercices réguliers.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Une commune de montagne veut construire un nouveau quartier au pied d'une pente où des chutes de blocs se sont produites trois fois en cinquante ans. a) Identifiez l'aléa et les enjeux. b) Expliquez en quoi ce projet augmenterait le risque. c) Le maire propose de construire quand même, mais avec un filet de protection. Présentez un argument pour et un argument contre cette solution. d) Quelle mesure de prévention serait la plus sûre ?",
              hint: "Rappelez-vous que le risque augmente quand on ajoute des enjeux dans une zone exposée à un aléa.",
              solution: [
                "a) Aléa : les chutes de blocs (trois en cinquante ans). Enjeux : les futurs habitants, leurs maisons, les routes et les activités du quartier.",
                "b) Aujourd'hui, la zone ne compte pas d'enjeux, donc peu de risque. En y construisant un quartier, on ajoute des enjeux dans une zone exposée à l'aléa : le risque augmente fortement.",
                "c) Pour : un filet de protection réduit la vulnérabilité en arrêtant une partie des blocs, et il permet de loger des habitants. Contre : un filet peut être dépassé par un bloc très gros ou céder s'il est mal entretenu, et il rassure faussement les habitants.",
                "d) La mesure la plus sûre est de ne pas construire dans cette zone (c'est le rôle d'un plan de prévention des risques) et de choisir un terrain non exposé.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche de gestion d'un risque d'inondation dans une commune.",
            items: [
              "Étudier l'aléa : fréquence et hauteur des crues passées.",
              "Recenser les enjeux situés près de la rivière.",
              "Cartographier les zones à risque.",
              "Réglementer les constructions grâce à un plan de prévention des risques.",
              "Surveiller la rivière et alerter la population en cas de crue.",
              "Secourir les habitants et évaluer les dégâts après la crue.",
            ],
          },
          quiz: [
            {
              q: "Un séisme dans une région totalement inhabitée représente :",
              options: ["un risque majeur", "un risque moyen", "une catastrophe certaine et immédiate", "un aléa sans grand risque"],
              answer: 3,
              why: "Sans enjeux exposés, l'aléa ne se traduit pas en risque important.",
            },
            {
              q: "Laquelle de ces mesures relève de la prévision ?",
              options: ["Construire une digue", "La carte de vigilance de Météo-France", "Interdire de construire en zone inondable", "Les normes parasismiques"],
              answer: 1,
              why: "La carte de vigilance annonce un phénomène à venir pour alerter la population : c'est de la prévision.",
            },
            {
              q: "Peut-on prévoir le jour et l'heure d'un séisme ?",
              options: ["Non, on connaît seulement les zones où il est probable", "Oui, grâce aux satellites", "Oui, quelques semaines à l'avance grâce aux sismographes des observatoires", "Oui, grâce à la carte de vigilance"],
              answer: 0,
              why: "On sait où les séismes sont probables, mais pas quand ils se produiront.",
            },
            {
              q: "En cas d'inondation, quel comportement est adapté ?",
              options: ["Prendre sa voiture pour partir vite", "Aller chercher ses enfants à l'école", "Monter dans les étages", "Descendre à la cave pour se protéger"],
              answer: 2,
              why: "Il faut se mettre en hauteur ; les enfants sont pris en charge par l'école, et la voiture peut être emportée par l'eau.",
            },
            {
              q: "Que signifie réduire la vulnérabilité ?",
              options: ["Diminuer la fréquence de l'aléa", "Rendre les enjeux plus résistants aux dommages", "Supprimer les phénomènes naturels", "Augmenter le nombre d'habitants"],
              answer: 1,
              why: "On ne peut pas empêcher l'aléa, mais on peut rendre les bâtiments et les populations moins sensibles à ses effets.",
            },
          ],
          trap: "Confondre aléa et risque : l'aléa est le phénomène naturel, le risque n'existe que s'il menace des enjeux. Confondre aussi prévision (annoncer l'événement) et prévention (réduire à l'avance les dommages possibles).",
          method: "Dans une question sur un risque naturel, faites trois colonnes au brouillon : aléa (quel phénomène, à quelle fréquence ?), enjeux (qui et quoi est exposé ?), vulnérabilité (les enjeux sont-ils protégés ?). Votre réponse doit utiliser ces trois mots.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'gestion-durable',
          title: 'Agir pour une gestion durable de l\'environnement',
          minutes: 30,
          objectives: [
            "Définir le développement durable et ses trois dimensions.",
            "Identifier des solutions de gestion durable des ressources et de la biodiversité, à différentes échelles.",
            "Argumenter un choix en pesant les bénéfices et les risques d'une solution.",
          ],
          course: [
            {
              heading: "Le développement durable",
              paragraphs: [
                "En 1987, un rapport des Nations unies, appelé rapport Brundtland, a défini le développement durable comme un développement qui répond aux besoins des générations actuelles sans compromettre la capacité des générations futures à répondre aux leurs. Il ne s'agit pas d'arrêter toute activité, mais de gérer les ressources et les milieux pour qu'ils restent disponibles.",
                "Le développement durable associe trois dimensions : environnementale (préserver les ressources, les milieux et la biodiversité), sociale (répondre aux besoins de tous, santé, alimentation, accès à l'eau) et économique (permettre des activités et des emplois). Une solution vraiment durable cherche un équilibre entre ces trois dimensions.",
              ],
              box: { label: "Définition", text: "Le développement durable est un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre aux leurs. Il associe trois dimensions : environnementale, sociale et économique." },
            },
            {
              heading: "Gérer durablement les ressources",
              paragraphs: [
                "Pour l'énergie, il s'agit d'abord de consommer moins (isolation des bâtiments, appareils économes, sobriété), puis de remplacer progressivement les énergies fossiles par des énergies renouvelables : solaire, éolien, hydraulique, biomasse, géothermie. Pour l'eau, on peut irriguer au goutte-à-goutte, récupérer l'eau de pluie, réparer les fuites et traiter les eaux usées dans des stations d'épuration avant de les rejeter.",
                "Pour les matières premières et les déchets, on applique la règle des trois R, dans l'ordre : réduire (acheter moins et mieux, éviter les emballages), réutiliser (réparer, donner, acheter d'occasion), recycler (trier pour que les matériaux soient transformés en nouveaux objets). Les déchets alimentaires et de jardin peuvent être compostés. Pour la pêche, on fixe des quotas (quantités maximales de capture), des tailles minimales et des périodes d'interdiction, pour laisser les stocks se reconstituer.",
              ],
              box: { label: "Règle", text: "Les trois R, dans l'ordre de priorité : réduire, réutiliser, recycler. Le meilleur déchet est celui que l'on ne produit pas." },
            },
            {
              heading: "Préserver la biodiversité",
              paragraphs: [
                "On peut protéger des espaces naturels : parcs nationaux, réserves naturelles, aires marines protégées. En 2022, lors de la conférence des Nations unies sur la biodiversité (COP15), les États ont adopté l'objectif de protéger au moins 30 % des terres et des mers d'ici 2030. En France, la trame verte et bleue vise à relier les milieux naturels par des corridors écologiques (haies, bandes boisées, cours d'eau) pour que les espèces puissent se déplacer.",
                "En agriculture, l'agroécologie cherche à produire en s'appuyant sur le fonctionnement des écosystèmes : rotation des cultures, plantation de haies, réduction des pesticides et lutte biologique, qui consiste à utiliser un être vivant pour limiter un ravageur. Les coccinelles, par exemple, dévorent les pucerons : favoriser leur présence permet de réduire l'usage d'insecticides.",
              ],
            },
            {
              heading: "Agir à toutes les échelles, en pesant bénéfices et risques",
              paragraphs: [
                "Les actions se situent à plusieurs échelles. Individuelle : trier ses déchets, éviter le gaspillage alimentaire, privilégier la marche, le vélo et les transports en commun, éteindre les appareils en veille. Locale : une commune peut installer des pistes cyclables, une cantine qui limite le gaspillage, un composteur collectif. Nationale et internationale : lois, accords comme l'accord de Paris sur le climat.",
                "Aucune solution n'est parfaite : il faut en peser les bénéfices et les risques. Un barrage hydroélectrique produit de l'électricité renouvelable, mais il noie une vallée et bloque la migration des poissons (d'où la construction de passes à poissons). Une éolienne ne rejette pas de CO₂ en fonctionnant, mais elle modifie le paysage et peut tuer des oiseaux et des chauves-souris si elle est mal implantée. Argumenter, c'est présenter ces deux faces avant de conclure.",
              ],
              box: { label: "Méthode", text: "Pour juger une solution : quel problème résout-elle ? Quels bénéfices (environnement, société, économie) ? Quels risques ou inconvénients ? Comment les limiter ? Puis conclure." },
            },
          ],
          keyPoints: [
            "Développement durable : répondre aux besoins du présent sans compromettre ceux des générations futures (rapport Brundtland, 1987).",
            "Trois dimensions : environnementale, sociale, économique.",
            "Énergie : sobriété, efficacité, énergies renouvelables. Déchets : réduire, réutiliser, recycler.",
            "Biodiversité : aires protégées, corridors écologiques, agroécologie, lutte biologique, quotas de pêche.",
            "Toute solution a des bénéfices et des risques qu'il faut peser pour argumenter.",
          ],
          example: {
            statement: "Une famille produit 300 kg d'ordures ménagères par an. Dans cet exercice, on considère qu'un tiers de ces ordures sont des déchets alimentaires et de jardin compostables. Quelle masse de déchets la famille évite-t-elle de jeter chaque année en compostant, et quels sont les bénéfices de ce geste ?",
            solution: [
              "Masse compostable : 300 ÷ 3 = 100 kg par an.",
              "En compostant, la famille évite donc de jeter 100 kg de déchets par an ; il lui reste 300 - 100 = 200 kg d'ordures ménagères.",
              "Bénéfices environnementaux : moins de déchets à transporter, à incinérer ou à enfouir, et un compost qui enrichit le sol du jardin en matière organique, à la place d'engrais.",
              "Bénéfice économique pour la collectivité : moins de déchets à traiter.",
              "Conclusion : le compostage réduit d'un tiers les ordures ménagères de cette famille, soit 100 kg par an, et rend au sol une partie de la matière organique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les gestes suivants selon la règle des trois R (réduire, réutiliser ou recycler) : a) déposer une bouteille en verre dans le conteneur de tri ; b) acheter des produits en vrac, sans emballage ; c) faire réparer son téléphone ; d) donner ses vêtements trop petits ; e) trier le papier pour qu'il soit transformé.",
              hint: "Réduire : ne pas produire le déchet. Réutiliser : redonner une vie à l'objet. Recycler : transformer la matière.",
              solution: [
                "Réduire : b) acheter en vrac.",
                "Réutiliser : c) faire réparer son téléphone, d) donner ses vêtements.",
                "Recycler : a) la bouteille en verre au conteneur, e) le tri du papier.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque problème, proposez une solution de gestion durable et dites à quelle échelle elle s'applique (individuelle, locale, nationale ou internationale) : a) un stock de poissons s'effondre ; b) les pucerons envahissent un champ ; c) une espèce de crapaud est écrasée sur une route en allant vers sa mare ; d) les émissions mondiales de CO₂ augmentent.",
              hint: "Reprenez les solutions vues dans le cours : quotas, lutte biologique, passages à faune, accords internationaux.",
              solution: [
                "a) Fixer des quotas de pêche, des tailles minimales et des périodes d'interdiction : échelle nationale ou internationale (les poissons ne connaissent pas les frontières).",
                "b) Lutte biologique avec des coccinelles et plantation de haies qui les abritent : échelle locale, celle de l'exploitation agricole.",
                "c) Installer un passage à faune sous la route (crapauduc) avec des barrières de guidage : échelle locale, celle de la commune.",
                "d) Réduire l'usage des énergies fossiles grâce à des accords comme l'accord de Paris : échelle internationale, complétée par des gestes individuels (moins de déplacements en voiture, économies d'énergie).",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Une commune hésite à installer un parc de cinq éoliennes sur une colline. Les partisans du projet rappellent que les éoliennes produisent de l'électricité sans émettre de CO₂ en fonctionnant et rapportent de l'argent à la commune. Les opposants craignent pour le paysage et pour une colonie de chauves-souris qui chasse sur la colline. Rédigez un avis argumenté : présentez les bénéfices et les risques du projet selon les trois dimensions du développement durable, proposez des moyens de limiter les risques, puis concluez.",
              hint: "Organisez votre réponse en trois temps : bénéfices, risques, solutions, puis une conclusion personnelle justifiée.",
              solution: [
                "Bénéfices : sur le plan environnemental, les éoliennes produisent une électricité renouvelable qui ne rejette pas de CO₂ en fonctionnement et peut remplacer une électricité issue de combustibles fossiles, ce qui limite le réchauffement climatique. Sur le plan économique, le projet rapporte des revenus à la commune.",
                "Risques : sur le plan environnemental, les pales peuvent tuer des chauves-souris et des oiseaux. Sur le plan social, le paysage est modifié, ce qui peut gêner les habitants.",
                "Solutions : réaliser une étude des déplacements des chauves-souris, éloigner les éoliennes de leurs zones de chasse et arrêter les machines aux heures et aux saisons où elles sont les plus actives ; consulter les habitants sur l'emplacement.",
                "Conclusion : le projet est acceptable s'il est accompagné de ces mesures, car il contribue à réduire les émissions de gaz à effet de serre tout en limitant son impact sur la biodiversité locale. (D'autres conclusions sont possibles si elles sont justifiées.)",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque problème environnemental à une solution de gestion durable.",
            pairs: [
              { left: "Surpêche", right: "Quotas et tailles minimales de capture" },
              { left: "Pucerons dans les cultures", right: "Lutte biologique avec des coccinelles" },
              { left: "Milieux fragmentés par les routes", right: "Corridors écologiques et passages à faune" },
              { left: "Excès de déchets ménagers", right: "Réduire, réutiliser, recycler, composter" },
              { left: "Émissions de CO₂ de l'électricité", right: "Sobriété et énergies renouvelables" },
              { left: "Nappe phréatique surexploitée", right: "Irrigation au goutte-à-goutte" },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les trois dimensions du développement durable ?",
              options: ["Terre, air, eau", "Passé, présent, futur", "Environnementale, sociale, économique", "Locale, nationale, européenne et mondiale"],
              answer: 2,
              why: "Une solution durable cherche l'équilibre entre l'environnement, la société et l'économie.",
            },
            {
              q: "Dans la règle des trois R, quelle action est prioritaire ?",
              options: ["Réduire", "Recycler", "Réutiliser", "Elles se valent toutes"],
              answer: 0,
              why: "Le meilleur déchet est celui que l'on ne produit pas : on réduit d'abord, puis on réutilise, et on recycle en dernier.",
            },
            {
              q: "Qu'est-ce que la lutte biologique ?",
              options: ["L'usage exclusif de pesticides d'origine naturelle sur toutes les cultures", "L'utilisation d'un être vivant pour limiter un ravageur", "La destruction des espèces invasives par le feu", "Le labour profond des champs"],
              answer: 1,
              why: "Par exemple, les coccinelles mangent les pucerons et permettent de réduire les insecticides.",
            },
            {
              q: "À quoi sert un corridor écologique ?",
              options: ["À accélérer la circulation routière", "À stocker les déchets", "À produire de l'électricité", "À permettre aux espèces de se déplacer entre des milieux"],
              answer: 3,
              why: "Haies, bandes boisées et cours d'eau relient les milieux isolés et limitent la fragmentation.",
            },
            {
              q: "Quel inconvénient peut présenter un barrage hydroélectrique ?",
              options: ["Il émet beaucoup de CO₂ en fonctionnant", "Il bloque la migration des poissons", "Il consomme du pétrole", "Il assèche les océans"],
              answer: 1,
              why: "Le barrage coupe le cours d'eau ; des passes à poissons permettent de limiter cet impact.",
            },
          ],
          trap: "Présenter une solution comme parfaite, sans inconvénient : au brevet, on attend que vous pesiez les bénéfices et les risques. Autre erreur : mettre le recyclage au premier rang, alors que réduire et réutiliser passent avant.",
          method: "Pour une question d'argumentation, utilisez un tableau à deux colonnes (bénéfices, risques) rempli selon les trois dimensions (environnement, société, économie), puis rédigez à partir du tableau : un paragraphe par colonne et une conclusion qui tranche.",
        },
      ],
    },

    /* ==================================================================== */
    /* PRÉPARER LE BREVET                                                     */
    /* ==================================================================== */
    {
      id: 'preparer-brevet',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'exploiter-documents-svt',
          title: 'Exploiter des documents scientifiques : graphiques, tableaux, schémas',
          minutes: 30,
          objectives: [
            "Extraire des informations pertinentes d'un graphique, d'un tableau ou d'un schéma.",
            "Décrire une évolution avec des valeurs chiffrées et leurs unités.",
            "Distinguer décrire et interpréter, en mobilisant ses connaissances.",
            "Construire un graphique à partir d'un tableau de données.",
          ],
          course: [
            {
              heading: "Identifier le document avant de le lire",
              paragraphs: [
                "À l'épreuve de sciences du brevet, l'exercice de SVT s'appuie presque toujours sur des documents : graphiques, tableaux de résultats, schémas, photographies d'observations au microscope, textes courts. Avant de chercher une réponse, prenez quelques secondes pour identifier le document : son titre (de quoi parle-t-il ?), sa nature (courbe, histogramme, tableau, schéma), sa source et, s'il s'agit d'une expérience, ce qui a été testé.",
                "Pour un graphique, lisez ensuite les axes : quelle grandeur est en abscisse (axe horizontal, souvent le temps ou la variable que l'on fait varier), quelle grandeur est en ordonnée (axe vertical, la grandeur mesurée), avec quelles unités. Pour un tableau, lisez les intitulés des lignes et des colonnes. Pour un schéma ou une photographie, lisez la légende et l'échelle ou le grossissement.",
              ],
              box: { label: "Méthode", text: "Identifier : titre, nature du document, axes ou intitulés, unités, légende, échelle. Ne lisez les valeurs qu'après." },
            },
            {
              heading: "Décrire avec précision",
              paragraphs: [
                "Décrire un graphique, c'est dire ce que l'on voit sans encore l'expliquer. On donne d'abord la tendance générale (augmentation, diminution, stabilité, présence d'un pic), puis les valeurs remarquables avec leurs unités : valeur de départ, maximum, minimum, valeur finale, et les moments où elles sont atteintes. Par exemple : « La quantité d'anticorps est nulle jusqu'au jour 5, puis elle augmente jusqu'à un maximum de 120 unités au jour 14, avant de diminuer. »",
                "Pour lire une valeur sur une courbe, partez de l'abscisse choisie, montez verticalement jusqu'à la courbe, puis tracez horizontalement jusqu'à l'axe des ordonnées. Pour comparer deux valeurs, calculez une différence (augmentation de 30 unités) ou un rapport (multiplié par 4) : un chiffre vaut mieux qu'un adjectif comme « beaucoup ».",
              ],
              box: { label: "Règle", text: "Une description sans valeur chiffrée ni unité est incomplète. Utilisez des verbes précis : augmente, diminue, reste stable, atteint un maximum, double." },
            },
            {
              heading: "Interpréter et exploiter",
              paragraphs: [
                "Interpréter, c'est expliquer ce que l'on a décrit à l'aide de ses connaissances. Une bonne formule est le couple « Je vois que... / J'en déduis que... » : je vois que les phagocytes deviennent très nombreux autour de la plaie pendant que les bactéries disparaissent ; j'en déduis que les phagocytes éliminent les bactéries par phagocytose. Sans la seconde partie, vous avez seulement recopié le document.",
                "Pour un résultat d'expérience, repérez l'expérience témoin : elle est identique à l'expérience testée, sauf pour un seul facteur. La comparaison entre les deux permet de conclure sur l'effet de ce facteur. Si plusieurs facteurs changent en même temps, on ne peut pas savoir lequel est responsable du résultat.",
              ],
            },
            {
              heading: "Construire un graphique et utiliser une échelle",
              paragraphs: [
                "Pour transformer un tableau en graphique : 1) placer en abscisse la grandeur que l'on fait varier (souvent le temps) et en ordonnée la grandeur mesurée ; 2) choisir une échelle régulière adaptée aux valeurs ; 3) nommer chaque axe avec son unité ; 4) placer les points avec précision ; 5) relier les points par une courbe si la grandeur varie de façon continue, ou utiliser des barres (histogramme) pour des catégories ; 6) donner un titre au graphique.",
                "Pour une observation au microscope, la taille réelle se calcule en divisant la taille mesurée sur l'image par le grossissement. Par exemple, une cellule qui mesure 2 cm sur une photographie grossie 400 fois mesure en réalité 2 ÷ 400 = 0,005 cm, soit 0,05 mm ou 50 µm (micromètres).",
              ],
              box: { label: "Formule", text: "Taille réelle = taille mesurée sur l'image ÷ grossissement. Rappel : 1 mm = 1 000 µm." },
            },
          ],
          keyPoints: [
            "Identifier d'abord : titre, nature du document, axes, unités, légende.",
            "Décrire : tendance générale puis valeurs remarquables chiffrées avec leurs unités.",
            "Interpréter : « Je vois que... / J'en déduis que... », en mobilisant ses connaissances.",
            "Une expérience ne diffère de son témoin que par un seul facteur.",
            "Un graphique a un titre, des axes nommés avec leurs unités et une échelle régulière.",
            "Taille réelle = taille mesurée ÷ grossissement.",
          ],
          example: {
            statement: "Un tableau donne le nombre de bactéries dans un bouillon de culture à 37 °C : 0 h, 1 000 ; 2 h, 8 000 ; 4 h, 64 000 ; 6 h, 512 000 ; 8 h, 512 000. Décrivez puis interprétez ces résultats.",
            solution: [
              "Identification : le tableau présente l'évolution du nombre de bactéries (grandeur mesurée) en fonction du temps (en heures), à 37 °C.",
              "Description : entre 0 h et 6 h, le nombre de bactéries augmente fortement, de 1 000 à 512 000. Il est multiplié par 8 toutes les 2 heures (8 000 ÷ 1 000 = 8 ; 64 000 ÷ 8 000 = 8). Entre 6 h et 8 h, il reste stable à 512 000.",
              "Interprétation : je vois que la population est multipliée par 8 en 2 heures, soit 3 doublements (2 × 2 × 2 = 8) ; j'en déduis que les bactéries se divisent environ toutes les 40 minutes à 37 °C.",
              "La stabilisation après 6 h peut s'expliquer par l'épuisement des nutriments du bouillon ou l'accumulation de déchets.",
              "Conclusion : à 37 °C, les bactéries se multiplient très rapidement tant que le milieu le permet, puis leur nombre se stabilise.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un graphique représente la température moyenne mondiale par rapport à la moyenne 1850-1900. On y lit : 1900, 0 °C ; 1940, +0,2 °C ; 1980, +0,4 °C ; 2020, +1,2 °C. a) Quelle grandeur est en abscisse ? en ordonnée ? b) Décrivez l'évolution en utilisant des valeurs chiffrées. c) Pendant quelle période l'augmentation est-elle la plus rapide ?",
              hint: "Calculez l'augmentation pour chaque période de 40 ans et comparez-les.",
              solution: [
                "a) En abscisse : le temps (les années). En ordonnée : l'écart de température moyenne mondiale par rapport à 1850-1900, en °C.",
                "b) La température augmente sur toute la période : elle passe de 0 °C en 1900 à +1,2 °C en 2020 par rapport à la référence, soit une hausse de 1,2 °C en 120 ans.",
                "c) Hausses par période : 1900-1940, +0,2 °C ; 1940-1980, +0,2 °C ; 1980-2020, +0,8 °C (1,2 - 0,4). L'augmentation est la plus rapide entre 1980 et 2020, quatre fois plus forte que pendant chacune des périodes précédentes.",
              ],
            },
            {
              level: 2,
              statement: "Une photographie de cellules sanguines est prise au microscope avec un grossissement de 1 000. Sur l'image, un globule rouge mesure 7 mm et un lymphocyte mesure 9 mm. a) Calculez la taille réelle de chaque cellule en millimètres, puis en micromètres. b) Laquelle est la plus grande ?",
              hint: "Taille réelle = taille mesurée ÷ grossissement, et 1 mm = 1 000 µm.",
              solution: [
                "a) Globule rouge : 7 ÷ 1 000 = 0,007 mm, soit 0,007 × 1 000 = 7 µm.",
                "Lymphocyte : 9 ÷ 1 000 = 0,009 mm, soit 9 µm.",
                "b) Le lymphocyte est plus grand que le globule rouge (9 µm > 7 µm).",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Pour savoir si la lumière est nécessaire à la germination de graines de radis, un élève place 20 graines sur du coton humide à la lumière à 20 °C (lot A) et 20 graines sur du coton sec à l'obscurité à 20 °C (lot B). Au bout de 5 jours, 18 graines ont germé dans le lot A et aucune dans le lot B. Il conclut : « La lumière est nécessaire à la germination. » a) Calculez le pourcentage de graines germées dans chaque lot. b) Expliquez pourquoi sa conclusion n'est pas valable. c) Proposez une expérience correcte.",
              hint: "Comptez combien de facteurs diffèrent entre les lots A et B.",
              solution: [
                "a) Lot A : (18 ÷ 20) × 100 = 90 %. Lot B : (0 ÷ 20) × 100 = 0 %.",
                "b) Deux facteurs diffèrent entre les lots : la lumière et l'humidité du coton. On ne peut donc pas savoir si l'absence de germination dans le lot B est due à l'obscurité ou au manque d'eau. La conclusion n'est pas valable.",
                "c) Il faut ne faire varier qu'un seul facteur : lot A, 20 graines sur coton humide à la lumière à 20 °C (témoin) ; lot B, 20 graines sur coton humide à l'obscurité à 20 °C. Si les deux lots germent de la même façon, la lumière n'est pas nécessaire à la germination ; si seul le lot A germe, elle l'est.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'exploitation d'un graphique.",
            items: [
              "Lire le titre et identifier la nature du document.",
              "Repérer les grandeurs en abscisse et en ordonnée, avec leurs unités.",
              "Dégager la tendance générale de la courbe.",
              "Relever les valeurs remarquables (départ, maximum, fin).",
              "Interpréter avec ses connaissances : « J'en déduis que... ».",
              "Rédiger une réponse qui répond exactement à la question.",
            ],
          },
          quiz: [
            {
              q: "Sur un graphique qui montre l'évolution d'une grandeur au cours du temps, où place-t-on le temps ?",
              options: ["En ordonnée", "En abscisse", "Dans le titre", "Dans la légende uniquement"],
              answer: 1,
              why: "Le temps, ou la grandeur que l'on fait varier, se place en abscisse, sur l'axe horizontal.",
            },
            {
              q: "Laquelle de ces phrases est une description et non une interprétation ?",
              options: ["Les phagocytes éliminent les bactéries", "Les anticorps neutralisent le virus", "Le nombre de bactéries passe de 1 000 à 64 000 en 4 heures", "Le vaccin provoque la formation de lymphocytes mémoire spécifiques"],
              answer: 2,
              why: "Elle dit ce que montre le document, avec des valeurs, sans l'expliquer.",
            },
            {
              q: "Une image au microscope est grossie 500 fois. Un objet y mesure 10 mm. Quelle est sa taille réelle ?",
              options: ["5 000 mm", "50 mm", "0,5 mm", "0,02 mm"],
              answer: 3,
              why: "Taille réelle = 10 ÷ 500 = 0,02 mm, soit 20 µm.",
            },
            {
              q: "Dans une expérience bien construite, l'expérience témoin diffère de l'expérience testée par :",
              options: ["un seul facteur", "tous les facteurs", "aucun facteur", "au moins trois facteurs"],
              answer: 0,
              why: "Ainsi, toute différence de résultat peut être attribuée à ce seul facteur.",
            },
            {
              q: "Que manque-t-il dans la description « La courbe monte beaucoup » ?",
              options: ["Un titre", "Une hypothèse", "Des valeurs chiffrées avec leurs unités", "Une couleur"],
              answer: 2,
              why: "Une description précise donne les valeurs de départ, d'arrivée et les moments correspondants, avec les unités.",
            },
          ],
          trap: "Paraphraser le document (« la courbe monte puis descend ») sans valeurs ni unités, ou s'arrêter à la description alors que la question demande une interprétation. Autre erreur fréquente : oublier de diviser par le grossissement pour obtenir la taille réelle.",
          method: "Entraînez-vous avec deux surligneurs : l'un pour ce que vous lisez dans le document (valeurs, tendances), l'autre pour la connaissance du cours qui l'explique. Une bonne réponse contient toujours les deux couleurs.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'reponse-argumentee',
          title: 'Construire une réponse argumentée',
          minutes: 30,
          objectives: [
            "Rédiger une réponse argumentée qui associe informations tirées des documents et connaissances.",
            "Utiliser des connecteurs logiques pour enchaîner un raisonnement.",
            "Mettre en œuvre une démarche scientifique : problème, hypothèse, expérience, résultats, conclusion.",
          ],
          course: [
            {
              heading: "Ce qu'on attend d'une réponse argumentée",
              paragraphs: [
                "Au brevet, beaucoup de questions demandent de montrer, de justifier ou d'expliquer. On attend alors une réponse argumentée : une affirmation qui répond à la question, appuyée par des arguments. Ces arguments sont de deux types : des informations relevées dans les documents (si possible chiffrées) et des connaissances du cours. Une affirmation sans argument, ou des arguments sans conclusion, ne suffisent pas.",
                "La structure la plus sûre est en trois temps. J'observe (ou je constate) : une information précise tirée d'un document, citée avec ses valeurs. Or je sais que : la connaissance qui permet de l'interpréter. Donc : la conclusion, qui répond à la question posée. Pour une question qui demande plusieurs arguments, on répète cette structure avec chaque document.",
              ],
              box: { label: "Méthode", text: "J'observe que... (document, valeurs) / Or je sais que... (connaissance) / Donc... (conclusion qui répond à la question)." },
            },
            {
              heading: "Les connecteurs logiques",
              paragraphs: [
                "Les connecteurs logiques montrent au correcteur comment vos idées s'enchaînent. Pour ajouter un argument : de plus, en outre, par ailleurs. Pour donner une cause : car, parce que, en effet. Pour introduire une connaissance qui éclaire une observation : or. Pour conclure ou donner une conséquence : donc, ainsi, par conséquent. Pour nuancer ou opposer : cependant, mais, toutefois.",
                "Évitez les listes de phrases sans lien. Comparez : « Les anticorps augmentent. Le vaccin protège. » et « Après le rappel, les anticorps atteignent 150 unités en 5 jours ; or une réponse aussi rapide et intense est due aux lymphocytes mémoire ; donc le vaccin a bien créé une mémoire immunitaire qui protège l'enfant. » La seconde version est un raisonnement.",
              ],
              box: { label: "Repère", text: "Ajouter : de plus. Cause : car, en effet. Connaissance : or. Conséquence : donc, ainsi. Nuance : cependant." },
            },
            {
              heading: "La démarche scientifique",
              paragraphs: [
                "Certaines questions portent sur une démarche expérimentale. Elle suit des étapes : on part d'une observation qui pose un problème (une question scientifique) ; on propose une hypothèse, c'est-à-dire une explication possible que l'on peut tester ; on conçoit une expérience où un seul facteur varie par rapport à un témoin ; on recueille les résultats ; on les interprète, et on conclut en disant si l'hypothèse est validée ou invalidée.",
                "Une hypothèse se formule comme une affirmation et non comme une question : « Les antibiotiques n'ont pas d'effet sur les virus » est une hypothèse ; « Les antibiotiques agissent-ils sur les virus ? » est le problème. Quand une hypothèse est invalidée, ce n'est pas un échec : on en propose une autre et on la teste.",
              ],
            },
            {
              heading: "Corrélation n'est pas causalité",
              paragraphs: [
                "Deux grandeurs qui varient en même temps sont corrélées, mais cela ne prouve pas que l'une est la cause de l'autre. Par exemple, les ventes de glaces et les noyades augmentent toutes deux en été : ce n'est pas la glace qui provoque les noyades, c'est la chaleur qui fait à la fois manger des glaces et se baigner davantage.",
                "Pour affirmer un lien de cause à effet, il faut une expérience qui ne fait varier qu'un facteur, ou un mécanisme connu qui l'explique. C'est pourquoi le lien entre CO₂ et réchauffement climatique ne repose pas seulement sur la corrélation des courbes, mais aussi sur le mécanisme de l'effet de serre, compris et mesuré.",
              ],
              box: { label: "À retenir", text: "Corrélation : deux grandeurs varient ensemble. Causalité : l'une provoque l'autre. Pour passer de l'une à l'autre, il faut une expérience avec témoin ou un mécanisme explicatif." },
            },
          ],
          keyPoints: [
            "Une réponse argumentée associe des informations des documents et des connaissances.",
            "Structure : J'observe que... Or je sais que... Donc...",
            "Les connecteurs (de plus, car, or, donc, cependant) montrent l'enchaînement du raisonnement.",
            "Démarche scientifique : problème, hypothèse, expérience avec témoin, résultats, conclusion.",
            "Une corrélation ne suffit pas à prouver une causalité.",
          ],
          example: {
            statement: "Document : avant l'introduction d'un vaccin contre une maladie, on comptait environ 10 000 cas par an dans un pays. Dix ans après le début de la vaccination, alors que 95 % des enfants sont vaccinés, on compte environ 100 cas par an. Montrez que la vaccination a permis de lutter contre cette maladie.",
            solution: [
              "J'observe que le nombre de cas est passé d'environ 10 000 par an avant la vaccination à environ 100 par an dix ans après, soit 100 fois moins (10 000 ÷ 100 = 100), alors que 95 % des enfants sont vaccinés.",
              "Or je sais qu'un vaccin contient un antigène inoffensif qui provoque la formation de lymphocytes mémoire : en cas de contamination, une réponse secondaire rapide élimine le microbe avant l'apparition de la maladie.",
              "De plus, quand la grande majorité de la population est vaccinée, le microbe circule peu : c'est l'immunité collective, qui protège aussi les personnes non vaccinées.",
              "Donc la vaccination de 95 % des enfants a permis de diviser par 100 le nombre de cas de cette maladie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez le raisonnement avec les connecteurs qui conviennent (or, donc, car, de plus) : « J'observe que le nombre de bactéries diminue fortement après la prise de l'antibiotique A. ... je sais qu'un antibiotique tue les bactéries ou bloque leur multiplication. ... l'antibiotique A est efficace contre cette bactérie. Il serait en revanche inutile contre la grippe, ... la grippe est due à un virus. ... , une prise inutile favoriserait l'apparition de bactéries résistantes. »",
              hint: "« Or » introduit une connaissance, « donc » une conclusion, « car » une cause, « de plus » un argument supplémentaire.",
              solution: [
                "J'observe que le nombre de bactéries diminue fortement après la prise de l'antibiotique A. Or je sais qu'un antibiotique tue les bactéries ou bloque leur multiplication. Donc l'antibiotique A est efficace contre cette bactérie.",
                "Il serait en revanche inutile contre la grippe, car la grippe est due à un virus.",
                "De plus, une prise inutile favoriserait l'apparition de bactéries résistantes.",
              ],
            },
            {
              level: 2,
              statement: "Un élève observe que des tranches de pain laissées dans une boîte fermée moisissent plus vite dans la cuisine (25 °C) qu'au réfrigérateur (4 °C). a) Formulez le problème. b) Formulez une hypothèse. c) Décrivez une expérience pour la tester, en précisant le témoin. d) Indiquez les résultats qui valideraient l'hypothèse.",
              hint: "Le problème est une question ; l'hypothèse est une réponse possible sous forme d'affirmation ; l'expérience ne fait varier qu'un facteur.",
              solution: [
                "a) Problème : la température influence-t-elle le développement des moisissures sur le pain ?",
                "b) Hypothèse : une température plus élevée accélère le développement des moisissures.",
                "c) Expérience : deux tranches du même pain, de même taille, dans deux boîtes fermées identiques, avec la même humidité ; l'une est placée à 25 °C (témoin, conditions habituelles de la cuisine), l'autre à 4 °C. Seule la température change. On observe chaque jour la surface couverte de moisissures.",
                "d) Si les moisissures apparaissent plus tôt et couvrent une plus grande surface sur la tranche à 25 °C, l'hypothèse est validée.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet. Document 1 : dans un pays, la quantité d'antibiotiques consommée a augmenté de 2000 à 2010, puis diminué de 2010 à 2020 grâce à des campagnes d'information. Document 2 : sur la même période, le pourcentage de bactéries d'une espèce résistantes à cet antibiotique est passé de 10 % (2000) à 30 % (2010), puis à 20 % (2020). En utilisant les documents et vos connaissances, montrez que l'usage des antibiotiques favorise la résistance bactérienne, puis expliquez pourquoi la corrélation seule ne suffirait pas à le prouver.",
              hint: "Construisez deux blocs « J'observe / Or je sais / Donc », puis rappelez ce qu'il faut pour prouver une causalité.",
              solution: [
                "J'observe que de 2000 à 2010, la consommation d'antibiotiques augmente et le pourcentage de bactéries résistantes triple, passant de 10 % à 30 %. De 2010 à 2020, la consommation diminue et ce pourcentage baisse à 20 %. Les deux grandeurs varient dans le même sens : elles sont corrélées.",
                "Or je sais que des mutations rendent au hasard certaines bactéries résistantes, et que l'antibiotique élimine les bactéries sensibles en laissant les résistantes se multiplier : c'est une sélection naturelle.",
                "Donc plus on utilise d'antibiotiques, plus on sélectionne de bactéries résistantes, ce qui explique la hausse de 2000 à 2010 ; quand l'usage diminue, les bactéries sensibles regagnent du terrain, ce qui explique la baisse après 2010.",
                "Cependant, la corrélation entre deux courbes ne prouve pas à elle seule une causalité : d'autres facteurs auraient pu varier en même temps. C'est le mécanisme connu de la sélection naturelle, confirmé par des expériences en laboratoire, qui permet d'affirmer le lien de cause à effet.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la réponse argumentée et la démarche scientifique.",
            statements: [
              { text: "Une réponse argumentée doit s'appuyer sur les documents et sur les connaissances.", true: true, why: "Les documents fournissent les faits, les connaissances permettent de les interpréter." },
              { text: "Une hypothèse se formule sous forme de question.", true: false, why: "Le problème est une question ; l'hypothèse est une réponse possible, formulée comme une affirmation." },
              { text: "Le connecteur « or » sert à introduire une connaissance qui éclaire une observation.", true: true, why: "C'est le lien entre « J'observe que » et « Donc »." },
              { text: "Deux courbes qui évoluent ensemble prouvent toujours que l'une est la cause de l'autre.", true: false, why: "Une corrélation n'est pas une causalité : il faut une expérience avec témoin ou un mécanisme explicatif." },
              { text: "Dans une expérience, on peut changer plusieurs facteurs à la fois pour gagner du temps.", true: false, why: "Si plusieurs facteurs changent, on ne sait pas lequel est responsable du résultat." },
              { text: "Une hypothèse invalidée est un résultat utile.", true: true, why: "Elle élimine une explication et oriente vers une nouvelle hypothèse." },
              { text: "Recopier les valeurs du document suffit à répondre à « Expliquez ».", true: false, why: "Expliquer demande d'interpréter ces valeurs à l'aide des connaissances." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la structure conseillée pour une réponse argumentée ?",
              options: ["J'observe que... Or je sais que... Donc...", "Donc... Or... J'observe...", "Une seule phrase qui donne la réponse, sans aucune justification", "Une liste de mots-clés"],
              answer: 0,
              why: "On part d'une information du document, on l'interprète avec une connaissance, puis on conclut.",
            },
            {
              q: "Quel connecteur introduit une conséquence ?",
              options: ["Car", "Cependant", "Or", "Donc"],
              answer: 3,
              why: "« Donc » introduit la conséquence ou la conclusion du raisonnement.",
            },
            {
              q: "Laquelle de ces phrases est une hypothèse ?",
              options: ["La lumière est-elle nécessaire à la germination ?", "La lumière est nécessaire à la germination", "J'ai placé des graines à l'obscurité", "18 graines ont germé"],
              answer: 1,
              why: "Une hypothèse est une affirmation que l'on peut tester ; la question est le problème.",
            },
            {
              q: "Les ventes de glaces et les coups de soleil augmentent en même temps en été. On peut en conclure que :",
              options: ["les glaces provoquent les coups de soleil", "les coups de soleil donnent envie de glaces", "les deux grandeurs sont corrélées, sans doute à cause d'un troisième facteur, le soleil", "il n'y a aucun lien entre ces grandeurs"],
              answer: 2,
              why: "Une corrélation peut s'expliquer par une cause commune : ici, le temps ensoleillé.",
            },
            {
              q: "À quoi sert l'expérience témoin ?",
              options: ["À remplacer l'hypothèse", "À obtenir plus de résultats", "À vérifier que le matériel fonctionne avant de commencer", "À comparer pour isoler l'effet d'un seul facteur"],
              answer: 3,
              why: "Le témoin ne diffère de l'expérience testée que par le facteur étudié : toute différence de résultat lui est due.",
            },
          ],
          trap: "Écrire une conclusion qui ne répond pas à la question posée, ou aligner des observations sans jamais les relier à une connaissance par « or ». Autre piège : conclure à une cause à partir d'une simple corrélation.",
          method: "Avant de rédiger, soulignez dans la question le verbe (montrez, justifiez, expliquez) et l'idée à démontrer. Rédigez ensuite votre phrase « Donc... » en premier au brouillon : vous saurez exactement où votre raisonnement doit arriver.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'temps-limite-svt',
          title: 'Résoudre un exercice de sciences en temps limité',
          minutes: 35,
          objectives: [
            "Organiser son temps pour traiter la partie SVT de l'épreuve de sciences en 30 minutes.",
            "Identifier ce qu'attend chaque verbe de consigne.",
            "Rédiger des réponses complètes et concises, avec le vocabulaire scientifique adapté.",
          ],
          course: [
            {
              heading: "Le format de l'épreuve",
              paragraphs: [
                "L'épreuve de sciences du brevet dure 1 heure et porte sur deux disciplines parmi les trois du cycle 4 : physique-chimie, SVT et technologie. Chaque discipline dispose d'environ 30 minutes. La partie SVT est généralement construite autour d'un thème du programme et d'un petit dossier de documents, avec plusieurs questions qui progressent de la lecture de documents vers le raisonnement.",
                "Trente minutes passent très vite : on ne peut pas tout relire trois fois ni rédiger un brouillon complet. Il faut donc une organisation fixe, travaillée à l'avance, qui évite de perdre du temps sur une seule question et garantit de traiter toutes les questions.",
              ],
              box: { label: "Repère", text: "Épreuve de sciences : 1 heure, deux disciplines parmi physique-chimie, SVT et technologie, environ 30 minutes chacune." },
            },
            {
              heading: "Un plan de 30 minutes",
              paragraphs: [
                "Minutes 0 à 4 : lire le titre, toutes les questions puis tous les documents. Repérer à quelle question sert chaque document et noter dans la marge le thème du cours concerné (immunité, génétique, climat...). Minutes 4 à 26 : répondre aux questions dans l'ordre, en consacrant plus de temps à celles qui rapportent le plus de points ou qui demandent une réponse rédigée. Minutes 26 à 30 : relire, vérifier les unités, les calculs et l'orthographe des mots scientifiques.",
                "Si une question bloque, passez à la suivante après deux ou trois minutes et notez-la pour y revenir : les questions sont souvent en partie indépendantes, et une question suivante peut même vous donner un indice. Une réponse partielle mais juste rapporte des points ; une page blanche n'en rapporte aucun.",
              ],
              box: { label: "Méthode", text: "4 minutes de lecture complète, 22 minutes de réponses, 4 minutes de relecture. Ne restez jamais plus de 3 minutes bloqué sur une question." },
            },
            {
              heading: "Comprendre les verbes de consigne",
              paragraphs: [
                "Chaque verbe appelle un type de réponse. Relever ou identifier : extraire une information du document, sans l'expliquer. Décrire : dire ce que montre le document, avec des valeurs et des unités. Comparer : dégager ressemblances et différences, chiffres à l'appui. Calculer : poser le calcul, donner le résultat avec son unité.",
                "Expliquer : donner la cause d'un phénomène à l'aide de ses connaissances. Justifier ou montrer : prouver une affirmation avec des arguments tirés des documents et du cours. Déduire ou conclure : tirer une conséquence logique de ce qui précède. Schématiser : faire un schéma simple, avec un titre et une légende. Répondre « à côté » du verbe, par exemple décrire quand on demande d'expliquer, fait perdre des points même si tout est juste.",
              ],
            },
            {
              heading: "Rédiger juste et vite",
              paragraphs: [
                "Écrivez des phrases complètes, mais courtes, qui commencent par reprendre les mots de la question : « Le nombre de phagocytes augmente car... ». Utilisez le vocabulaire scientifique exact (phagocytose, anticorps, lymphocytes mémoire, effet de serre, aléa) : c'est souvent lui que le correcteur cherche. Citez les documents (« d'après le document 2 ») et donnez toujours les valeurs avec leurs unités.",
                "Pour un calcul, écrivez l'opération, le résultat et l'unité, puis vérifiez l'ordre de grandeur : une bactérie de 3 mm ou une hausse de température de 50 °C doivent vous alerter. Enfin, gardez une copie lisible et numérotez clairement vos réponses.",
              ],
              box: { label: "À retenir", text: "Phrase complète qui reprend la question, vocabulaire exact, document cité, valeur avec unité, ordre de grandeur vérifié." },
            },
          ],
          keyPoints: [
            "La partie SVT de l'épreuve de sciences dure environ 30 minutes.",
            "Plan : 4 minutes de lecture complète, 22 minutes de réponses, 4 minutes de relecture.",
            "Ne restez pas bloqué plus de 3 minutes : passez à la suite et revenez-y.",
            "Chaque verbe de consigne (décrire, expliquer, justifier, comparer...) attend un type de réponse précis.",
            "Phrases complètes, vocabulaire exact, documents cités, valeurs avec unités.",
          ],
          example: {
            statement: "Mini-sujet (30 minutes). Document : quantité d'anticorps contre le tétanos chez une personne vaccinée. Première injection au jour 0 : maximum de 20 unités au jour 15. Rappel au jour 120 : maximum de 400 unités au jour 125. Question 1 : relevez la quantité maximale d'anticorps après chaque injection. Question 2 : calculez par combien elle est multipliée. Question 3 : expliquez la différence entre les deux réponses. Organisez votre temps et rédigez les réponses.",
            solution: [
              "Organisation : 4 minutes pour tout lire et repérer que le thème est la mémoire immunitaire ; environ 3 minutes pour la question 1, 4 minutes pour la question 2, 12 minutes pour la question 3, qui demande une explication ; 4 minutes de relecture.",
              "Question 1 (relever) : d'après le document, la quantité maximale d'anticorps est de 20 unités après la première injection et de 400 unités après le rappel.",
              "Question 2 (calculer) : 400 ÷ 20 = 20. La quantité maximale d'anticorps est multipliée par 20 après le rappel.",
              "Question 3 (expliquer) : après le rappel, la réponse est plus rapide (maximum en 5 jours au lieu de 15) et plus intense (20 fois plus d'anticorps). Or je sais que la première injection a provoqué la formation de lymphocytes mémoire, plus nombreux et plus réactifs. Donc, lors du rappel, ces lymphocytes mémoire déclenchent une réponse secondaire rapide et intense.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque consigne, indiquez ce qui est attendu : a) « Relevez la température maximale atteinte. » b) « Décrivez l'évolution de la concentration en CO₂. » c) « Expliquez pourquoi le nombre de bactéries diminue. » d) « Comparez les deux climatogrammes. »",
              hint: "Distinguez extraire une information, la décrire, l'expliquer avec le cours et confronter deux documents.",
              solution: [
                "a) Extraire une seule valeur du document, avec son unité, sans explication.",
                "b) Donner la tendance (augmentation, diminution) et les valeurs remarquables avec leurs unités et les dates correspondantes.",
                "c) Donner la cause de la diminution en utilisant ses connaissances (par exemple l'action d'un antibiotique ou la phagocytose), en s'appuyant sur le document.",
                "d) Indiquer les ressemblances et les différences entre les deux documents (températures, précipitations), avec des valeurs chiffrées pour chacun.",
              ],
            },
            {
              level: 2,
              statement: "Un sujet de SVT comporte quatre questions : question 1 (relever, 2 points), question 2 (calculer, 3 points), question 3 (expliquer, 5 points), question 4 (justifier à l'aide de deux documents, 5 points). Vous disposez de 22 minutes pour répondre, après 4 minutes de lecture. a) Répartissez ces 22 minutes proportionnellement aux points. b) Bloqué depuis 4 minutes sur la question 2, que faites-vous ?",
              hint: "Total des points : 2 + 3 + 5 + 5 = 15. Calculez la durée par point, puis multipliez par les points de chaque question.",
              solution: [
                "a) Total : 15 points. Durée par point : 22 ÷ 15 ≈ 1,5 minute. Question 1 : 2 × 1,5 ≈ 3 minutes ; question 2 : 3 × 1,5 ≈ 4 minutes ; question 3 : 5 × 1,5 ≈ 7 minutes ; question 4 : 5 × 1,5 ≈ 7 à 8 minutes. Vérification : 3 + 4 + 7 + 8 = 22 minutes.",
                "b) Je laisse un espace sur ma copie, je note le numéro de la question au brouillon et je passe aux questions 3 et 4, qui rapportent davantage. J'y reviendrai pendant le temps de relecture s'il me reste quelques minutes.",
              ],
            },
            {
              level: 3,
              statement: "Type brevet, à traiter en 15 minutes. Document 1 : la carte de vigilance de Météo-France est passée au rouge « pluie-inondation » pour un département. Document 2 : dans la commune C, une école et 200 maisons sont situées en zone inondable ; dans la commune D, la zone inondable ne contient que des prés. Question 1 : identifiez l'aléa. Question 2 : comparez le risque dans les communes C et D. Question 3 : la carte de vigilance relève-t-elle de la prévision ou de la prévention ? Justifiez. Question 4 : proposez une mesure de prévention pour la commune C.",
              hint: "Utilisez les mots aléa, enjeux, vulnérabilité, prévision et prévention, en reprenant chaque fois les termes de la question.",
              solution: [
                "Question 1 : l'aléa est l'inondation provoquée par de fortes pluies (vigilance rouge pluie-inondation, document 1).",
                "Question 2 : l'aléa est le même dans les deux communes, situées dans le même département. Mais d'après le document 2, la commune C compte de nombreux enjeux en zone inondable (une école et 200 maisons), alors que la commune D n'y a que des prés. Le risque est donc beaucoup plus élevé dans la commune C.",
                "Question 3 : la carte de vigilance relève de la prévision, car elle annonce un phénomène à venir afin d'alerter la population à temps ; elle ne réduit pas à l'avance la vulnérabilité des enjeux.",
                "Question 4 : la commune C peut appliquer un plan de prévention des risques interdisant toute nouvelle construction en zone inondable, construire des bassins de rétention ou des digues, et entraîner l'école avec son plan particulier de mise en sûreté.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque verbe de consigne à ce qu'il attend.",
            pairs: [
              { left: "Relever", right: "Extraire une information du document, sans l'expliquer" },
              { left: "Décrire", right: "Dire ce que montre le document, avec valeurs et unités" },
              { left: "Comparer", right: "Dégager ressemblances et différences, chiffres à l'appui" },
              { left: "Expliquer", right: "Donner la cause d'un phénomène avec ses connaissances" },
              { left: "Justifier", right: "Prouver une affirmation avec des arguments" },
              { left: "Calculer", right: "Poser l'opération, donner le résultat et son unité" },
            ],
          },
          quiz: [
            {
              q: "Combien de temps dure environ la partie SVT de l'épreuve de sciences du brevet, si elle fait partie des deux disciplines tirées ?",
              options: ["2 heures", "1 heure", "10 minutes", "30 minutes"],
              answer: 3,
              why: "L'épreuve de sciences dure 1 heure pour deux disciplines, soit environ 30 minutes chacune.",
            },
            {
              q: "Que faire en premier en découvrant le sujet ?",
              options: ["Répondre tout de suite à la première question", "Lire toutes les questions et tous les documents", "Recopier entièrement les documents sur la copie pour les avoir sous les yeux", "Commencer par la dernière question"],
              answer: 1,
              why: "Une lecture complète permet de savoir à quoi sert chaque document et d'organiser son temps.",
            },
            {
              q: "La consigne « Expliquez » attend :",
              options: ["la cause du phénomène, à l'aide de ses connaissances", "une simple valeur relevée", "un dessin sans légende", "une liste des mots importants recopiés tels quels depuis le document"],
              answer: 0,
              why: "Expliquer, c'est dire pourquoi, en mobilisant le cours pour interpréter le document.",
            },
            {
              q: "Vous êtes bloqué depuis 3 minutes sur une question. Que faites-vous ?",
              options: ["Vous restez dessus jusqu'à trouver, même si cela prend dix minutes", "Vous rendez la copie", "Vous passez à la suite et y revenez à la fin", "Vous recommencez tout le sujet"],
              answer: 2,
              why: "Les questions sont souvent en partie indépendantes : mieux vaut traiter les suivantes et revenir ensuite.",
            },
            {
              q: "Un élève trouve qu'une bactérie mesure 3 mm de long. Que doit-il faire ?",
              options: ["Garder ce résultat, car un calcul posé correctement est forcément juste", "Vérifier son calcul, car l'ordre de grandeur est faux", "Arrondir à 3 cm", "Supprimer l'unité"],
              answer: 1,
              why: "Une bactérie mesure quelques micromètres : un résultat en millimètres signale une erreur, souvent un grossissement oublié.",
            },
          ],
          trap: "Passer trop de temps sur la première question ou sur un calcul, puis bâcler les questions rédigées qui rapportent le plus. Autre erreur : répondre à côté du verbe de consigne, par exemple décrire quand il faut expliquer.",
          method: "Faites au moins deux sujets de brevet complets en conditions réelles, chronomètre en main, en respectant le plan 4 / 22 / 4. Notez ensuite où vous avez perdu du temps : c'est ce point que vous travaillerez en priorité.",
        },
      ],
    },
  ],
}
