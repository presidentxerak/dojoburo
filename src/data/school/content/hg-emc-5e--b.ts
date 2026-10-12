import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-emc-5e',
  chapters: [
    {
      id: 'etat-monarchique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'rois-capetiens',
          title: 'Les Capétiens renforcent le pouvoir royal',
          minutes: 30,
          objectives: [
            "Distinguer le domaine royal et le royaume de France.",
            "Expliquer comment les rois capétiens agrandissent le domaine royal entre le Xe et le XIVe siècle.",
            "Identifier les instruments du pouvoir royal : le sacre, la justice, les agents du roi, la monnaie et l'impôt.",
            "Situer sur une frise les règnes d'Hugues Capet, de Philippe Auguste, de Saint Louis et de Philippe le Bel.",
          ],
          course: [
            {
              heading: "987 : un roi élu et encore faible",
              paragraphs: [
                "En 987, le dernier roi carolingien, Louis V, meurt sans enfant. Les grands seigneurs du royaume (ducs, comtes et évêques) se réunissent et élisent l'un d'entre eux : Hugues Capet, duc des Francs. Il donne son nom à une nouvelle famille de rois, les Capétiens, qui va régner sur la France pendant plusieurs siècles.",
                "Au début, ce roi est peu puissant. Il ne gouverne directement qu'un petit territoire autour de Paris et d'Orléans : le domaine royal. Le reste du royaume est partagé entre de grands seigneurs, comme le duc de Normandie ou le comte de Flandre. Ce sont ses vassaux : ils lui doivent l'hommage, car il est leur suzerain. Mais ils sont souvent plus riches et mieux armés que lui, et ils lui obéissent peu.",
                "Pour garder la couronne dans leur famille, les premiers Capétiens font sacrer leur fils aîné de leur vivant : Hugues Capet fait ainsi sacrer son fils Robert dès 987. De 987 à 1316, chaque roi capétien a un fils pour lui succéder. Peu à peu, la royauté, d'abord élective, devient héréditaire.",
              ],
              box: { label: "Définition", text: "Le domaine royal est l'ensemble des terres que le roi possède et gouverne directement. Le royaume est bien plus vaste : c'est l'ensemble des territoires dont le roi est le suzerain, même quand ils sont tenus par de grands vassaux." },
            },
            {
              heading: "Le sacre : un roi choisi par Dieu",
              paragraphs: [
                "Le roi n'est pas un seigneur comme les autres, car il est sacré. Au cours d'une grande cérémonie religieuse, le plus souvent dans la cathédrale de Reims, l'archevêque l'oint, c'est-à-dire qu'il le marque d'une huile sainte. Selon la tradition, cette huile est conservée dans la Sainte Ampoule depuis le baptême de Clovis. Le roi reçoit ensuite les insignes de son pouvoir : la couronne, le sceptre et l'épée.",
                "Le sacre montre que le roi tient son pouvoir de Dieu. Lors de la cérémonie, il prête serment de protéger l'Église et de faire régner la paix et la justice. On croit même qu'il peut guérir par le toucher une maladie de la peau, les écrouelles : on dit qu'il est thaumaturge, c'est-à-dire faiseur de miracles. Ce caractère sacré place le roi au-dessus de tous les seigneurs du royaume.",
              ],
              box: { label: "Repère", text: "Sacre : cérémonie religieuse au cours de laquelle le roi reçoit l'onction d'une huile sainte. Il apparaît alors comme l'élu de Dieu. Presque tous les rois de France sont sacrés à Reims." },
            },
            {
              heading: "Agrandir le domaine royal",
              paragraphs: [
                "Les rois capétiens agrandissent peu à peu leur domaine par tous les moyens : la guerre, les mariages, les héritages, les achats et la confiscation des fiefs des vassaux qui leur désobéissent. Le grand bâtisseur du domaine est Philippe II, dit Philippe Auguste, qui règne de 1180 à 1223.",
                "Le roi d'Angleterre, de la famille des Plantagenêts, est aussi duc de Normandie et seigneur d'immenses terres dans l'ouest du royaume de France : pour ces terres, il est le vassal du roi de France. En 1202, Philippe Auguste confisque les fiefs de son vassal Jean sans Terre, qui a refusé de se présenter devant sa cour. Il conquiert la Normandie en 1204, puis l'Anjou et le Maine.",
                "En 1214, Philippe Auguste remporte la bataille de Bouvines, près de Lille, contre une coalition qui réunit l'empereur germanique Otton IV, le comte de Flandre et des alliés de Jean sans Terre. Cette victoire renforce beaucoup son prestige. Il commence aussi à se faire appeler « roi de France », et non plus seulement « roi des Francs ». Au XIIIe siècle, le domaine royal s'étend encore, notamment vers le Languedoc, dans le sud.",
              ],
              box: { label: "À retenir", text: "987 : élection d'Hugues Capet. 1204 : Philippe Auguste prend la Normandie. 1214 : victoire de Bouvines. Le domaine royal grandit par la guerre, les mariages, les héritages, les achats et les confiscations." },
            },
            {
              heading: "Gouverner : des agents, une justice, une monnaie",
              paragraphs: [
                "Pour gouverner un territoire plus vaste, le roi a besoin d'hommes qui lui obéissent. Philippe Auguste crée les baillis, dans le nord, et les sénéchaux, dans le sud. Ils rendent la justice, lèvent les revenus du roi et commandent les troupes en son nom. Payés par le roi, ils peuvent être déplacés ou renvoyés : ce ne sont pas des vassaux. Paris devient la capitale, où le roi garde ses archives et fait construire la forteresse du Louvre.",
                "Louis IX, dit Saint Louis, qui règne de 1226 à 1270, renforce la justice royale. Un sujet peut faire appel au roi d'un jugement rendu par un seigneur : la justice du roi devient supérieure à celle des seigneurs. Le Parlement de Paris, une cour de justice, juge en son nom. Saint Louis interdit dans son domaine les guerres privées entre seigneurs et le duel judiciaire, et il décide que la monnaie royale doit être acceptée dans tout le royaume. Très pieux, il part deux fois en croisade et meurt devant Tunis en 1270 ; l'Église en fait un saint en 1297.",
                "Philippe IV le Bel, qui règne de 1285 à 1314, s'entoure de légistes, des spécialistes du droit. Ils affirment que le roi est « empereur en son royaume » : il ne dépend d'aucune autorité extérieure, ni de l'empereur ni du pape. Philippe le Bel entre d'ailleurs en conflit avec le pape Boniface VIII. Pour trouver de l'argent, il lève des impôts et réunit des assemblées de représentants du clergé, de la noblesse et des villes.",
              ],
              box: { label: "Définition", text: "Bailli (ou sénéchal dans le sud) : agent du roi, payé par lui, chargé de rendre la justice, de lever les revenus et de faire appliquer les décisions royales dans une région. Légiste : spécialiste du droit au service du roi." },
            },
          ],
          keyPoints: [
            "987 : Hugues Capet est élu roi ; ses descendants, les Capétiens, rendent peu à peu la couronne héréditaire.",
            "Domaine royal : terres gouvernées directement par le roi. Royaume : ensemble des terres dont il est le suzerain.",
            "Le sacre, le plus souvent à Reims, fait du roi l'élu de Dieu et le place au-dessus des seigneurs.",
            "Philippe Auguste (1180-1223) prend la Normandie (1204), gagne à Bouvines (1214) et crée les baillis et les sénéchaux.",
            "Saint Louis (1226-1270) développe la justice royale (appel au roi, Parlement) et impose la monnaie royale.",
            "Philippe le Bel (1285-1314) s'appuie sur des légistes et affirme son indépendance face au pape.",
          ],
          example: {
            statement: "Montrez, en trois arguments appuyés sur des exemples précis, que le pouvoir des rois capétiens se renforce entre 987 et 1314.",
            solution: [
              "Point de départ : en 987, Hugues Capet est élu par les grands seigneurs. Il ne gouverne qu'un petit domaine autour de Paris et d'Orléans, et ses vassaux lui obéissent peu.",
              "Argument 1, le domaine s'agrandit : Philippe Auguste confisque les fiefs de son vassal Jean sans Terre et conquiert la Normandie en 1204 ; sa victoire de Bouvines, en 1214, renforce son prestige.",
              "Argument 2, le roi gouverne grâce à des agents : les baillis et les sénéchaux, payés par le roi, rendent la justice et lèvent les revenus en son nom ; les légistes de Philippe le Bel affirment que le roi ne dépend de personne.",
              "Argument 3, la justice et la monnaie royales s'imposent : sous Saint Louis, on peut faire appel au roi, le Parlement juge en son nom et la monnaie royale doit être acceptée partout.",
              "Conclusion : en un peu plus de trois siècles, le roi, d'abord simple suzerain mal obéi, devient le chef d'un État qui s'appuie sur un territoire, des agents, une justice et une monnaie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque roi à l'une de ses actions. Rois : Hugues Capet, Philippe Auguste, Saint Louis, Philippe le Bel. Actions : a) il remporte la bataille de Bouvines ; b) il est élu roi par les grands seigneurs ; c) il s'entoure de légistes et s'oppose au pape Boniface VIII ; d) il permet aux sujets de faire appel au roi d'un jugement seigneurial.",
              hint: "Rangez d'abord les quatre rois dans l'ordre chronologique : 987, 1180-1223, 1226-1270, 1285-1314.",
              solution: [
                "Hugues Capet : b), il est élu roi par les grands seigneurs en 987.",
                "Philippe Auguste : a), il remporte la bataille de Bouvines en 1214.",
                "Saint Louis : d), il développe la justice royale et permet l'appel au roi.",
                "Philippe le Bel : c), il s'appuie sur des légistes et s'oppose au pape Boniface VIII.",
                "Réponse : Hugues Capet b, Philippe Auguste a, Saint Louis d, Philippe le Bel c.",
              ],
            },
            {
              level: 2,
              statement: "1) Expliquez en deux phrases la différence entre le domaine royal et le royaume. 2) Pour chacune des situations suivantes, indiquez par quel moyen le domaine royal s'agrandit : a) le roi confisque les terres d'un vassal qui lui a désobéi ; b) le roi épouse l'héritière d'une riche région ; c) le roi verse une grosse somme à un comte pour lui racheter son comté ; d) le roi reçoit les terres d'un parent mort sans enfant ; e) le roi s'empare d'une région après une victoire militaire.",
              hint: "Le cours cite cinq moyens : la guerre, le mariage, l'héritage, l'achat et la confiscation.",
              solution: [
                "1) Le domaine royal est l'ensemble des terres que le roi gouverne directement. Le royaume est beaucoup plus vaste : il comprend aussi les terres des grands vassaux, dont le roi est seulement le suzerain.",
                "2) a) La confiscation, comme Philippe Auguste avec les fiefs de Jean sans Terre en 1202.",
                "b) Le mariage.",
                "c) L'achat.",
                "d) L'héritage.",
                "e) La guerre, ou conquête militaire, comme la Normandie conquise en 1204.",
                "Réponse : confiscation, mariage, achat, héritage, guerre.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un camarade affirme : « Au Moyen Âge, le roi de France était tout-puissant dès Hugues Capet. » 1) Montrez, avec deux arguments, que cette affirmation est fausse pour l'année 987. 2) Rédigez ensuite un paragraphe de cinq ou six phrases qui explique ce qui change jusqu'en 1314. Utilisez au moins quatre de ces mots : suzerain, vassal, domaine royal, sacre, bailli, légiste, Parlement.",
              hint: "Pour 1), pensez à la taille du domaine royal en 987 et à la puissance des grands vassaux. Pour 2), suivez l'ordre chronologique des rois et donnez une date par idée.",
              solution: [
                "1) Premier argument : en 987, Hugues Capet est élu par les grands seigneurs, il n'a donc pas pris le pouvoir par sa propre force. Second argument : il ne gouverne directement qu'un petit domaine royal autour de Paris et d'Orléans, et ses grands vassaux, comme le duc de Normandie, sont souvent plus puissants que lui.",
                "2) Paragraphe possible : « En 987, le roi n'est que le suzerain des grands seigneurs, et son domaine royal est petit. Le sacre lui donne pourtant un prestige que n'ont pas ses vassaux. Philippe Auguste agrandit le domaine en conquérant la Normandie en 1204 et triomphe à Bouvines en 1214. Il crée les baillis, des agents payés par le roi qui rendent la justice en son nom. Saint Louis permet de faire appel au roi, et le Parlement de Paris juge en son nom. Enfin, les légistes de Philippe le Bel affirment que le roi ne dépend ni de l'empereur ni du pape. »",
                "Vérification : le paragraphe utilise suzerain, domaine royal, sacre, vassaux, baillis, Parlement et légistes, soit plus de quatre mots demandés.",
                "Conclusion : l'affirmation est fausse ; le roi devient puissant progressivement, entre 987 et 1314, en agrandissant son domaine et en construisant un État.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Hugues Capet est élu roi par les grands seigneurs.",
              "Philippe Auguste devient roi.",
              "Philippe Auguste conquiert la Normandie.",
              "Victoire de Philippe Auguste à Bouvines.",
              "Saint Louis meurt devant Tunis, pendant une croisade.",
              "Philippe le Bel devient roi.",
            ],
          },
          quiz: [
            {
              q: "En quelle année Hugues Capet est-il élu roi ?",
              options: ["800", "987", "1214", "1328"],
              answer: 1,
              why: "En 987, après la mort du dernier Carolingien, Louis V, les grands seigneurs élisent Hugues Capet, qui fonde la dynastie des Capétiens.",
            },
            {
              q: "Qu'est-ce que le domaine royal ?",
              options: ["Les terres que le roi gouverne directement", "L'ensemble des terres de tous les seigneurs du royaume de France", "Le palais où le roi est sacré", "Les terres données à l'Église par le roi pour fonder des abbayes"],
              answer: 0,
              why: "Le domaine royal, ce sont les terres que le roi possède et administre lui-même ; le royaume est bien plus vaste.",
            },
            {
              q: "Où les rois de France sont-ils le plus souvent sacrés ?",
              options: ["À Paris, dans le palais de la Cité", "À Rome, par le pape lui-même", "À Reims", "À Orléans, au cœur du domaine royal"],
              answer: 2,
              why: "Presque tous les rois de France sont sacrés dans la cathédrale de Reims, où l'archevêque les oint avec une huile sainte.",
            },
            {
              q: "Quel roi remporte la bataille de Bouvines en 1214 ?",
              options: ["Hugues Capet", "Saint Louis", "Philippe IV le Bel", "Philippe Auguste"],
              answer: 3,
              why: "Philippe Auguste bat à Bouvines l'empereur Otton IV et ses alliés, ce qui renforce le prestige du roi de France.",
            },
            {
              q: "Quel est le rôle d'un bailli ?",
              options: ["Il prie pour le roi dans une abbaye royale", "Il représente le roi dans une région", "Il cultive les terres du domaine royal pour nourrir la cour", "Il prête hommage au roi en échange d'un fief"],
              answer: 1,
              why: "Le bailli est un agent payé par le roi, qui rend la justice et lève les revenus en son nom ; ce n'est pas un vassal.",
            },
          ],
          trap: "Confondre le domaine royal et le royaume : en 987, le roi est le suzerain de tout le royaume, mais il ne gouverne directement qu'un petit domaine autour de Paris et d'Orléans.",
          method: "Construisez une frise de 987 à 1314 et notez pour chaque roi une date et une action : Hugues Capet (987, élection), Philippe Auguste (1214, Bouvines), Saint Louis (la justice royale), Philippe le Bel (les légistes). Récitez-la ensuite de mémoire, puis vérifiez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'guerre-de-cent-ans',
          title: 'La guerre de Cent Ans et l\'affirmation de l\'État',
          minutes: 30,
          objectives: [
            "Raconter les grandes étapes de la guerre de Cent Ans (1337-1453).",
            "Expliquer le rôle de Jeanne d'Arc dans le redressement du roi Charles VII.",
            "Décrire les malheurs des populations : la guerre, la peste noire et les famines.",
            "Montrer que la guerre renforce l'État monarchique : impôt permanent et armée permanente.",
          ],
          course: [
            {
              heading: "Les causes : une couronne disputée",
              paragraphs: [
                "En 1328, le roi Charles IV le Bel meurt sans fils : les trois fils de Philippe le Bel sont tous morts sans laisser d'héritier mâle. Deux hommes réclament la couronne. Philippe de Valois, cousin du roi défunt, est choisi par les grands du royaume et devient Philippe VI : c'est le début de la dynastie des Valois. Mais le roi d'Angleterre, Édouard III, est le petit-fils de Philippe le Bel par sa mère, Isabelle : il se considère comme l'héritier légitime.",
                "Les grands du royaume refusent qu'un roi étranger, héritier par une femme, monte sur le trône de France. On prend alors l'habitude d'exclure les femmes et leurs descendants de la succession au trône. D'autres rivalités opposent les deux rois : le roi d'Angleterre possède encore la Guyenne, autour de Bordeaux, pour laquelle il est le vassal du roi de France, et les deux royaumes se disputent l'influence sur la riche Flandre. En 1337, Philippe VI confisque la Guyenne : la guerre commence.",
              ],
              box: { label: "Repère", text: "La guerre de Cent Ans oppose les rois de France et d'Angleterre de 1337 à 1453, soit 116 ans. Ce n'est pas une guerre continue : les batailles alternent avec de longues trêves." },
            },
            {
              heading: "Une guerre en trois temps",
              paragraphs: [
                "D'abord, les Anglais remportent de grandes victoires. À Crécy en 1346, puis à Poitiers en 1356, leurs archers, armés d'un arc long qui tire loin et vite, écrasent la chevalerie française. À Poitiers, le roi Jean II le Bon est fait prisonnier. Par le traité de Brétigny, en 1360, la France doit céder au roi d'Angleterre un vaste territoire dans le sud-ouest et payer une énorme rançon pour libérer son roi.",
                "Ensuite, le roi Charles V (1364-1380) et son connétable, Bertrand du Guesclin, reprennent presque toutes ces terres en évitant les grandes batailles. Mais sous Charles VI, atteint de folie, deux partis de princes, les Armagnacs et les Bourguignons, se font la guerre. Les Anglais en profitent et écrasent les Français à Azincourt en 1415. Par le traité de Troyes, en 1420, le roi d'Angleterre Henri V devient l'héritier du royaume de France, et le fils de Charles VI, le futur Charles VII, est déshérité.",
                "Enfin, la France se redresse. Charles VII ne contrôle plus que le centre et le sud du royaume ; ses ennemis l'appellent par moquerie le « roi de Bourges ». En 1428, les Anglais assiègent Orléans. Mais à partir de 1429, Charles VII reprend l'avantage : il se réconcilie avec le duc de Bourgogne en 1435, reprend Paris, puis la Normandie, et remporte la dernière bataille à Castillon, en Guyenne, en 1453. Les Anglais ne gardent que Calais.",
              ],
              box: { label: "À retenir", text: "Crécy (1346), Poitiers (1356) et Azincourt (1415) : défaites françaises. Traité de Troyes (1420) : le roi d'Angleterre devient héritier de la France. 1429 : Orléans délivrée, sacre de Charles VII. 1453 : victoire française à Castillon, fin de la guerre." },
            },
            {
              heading: "Jeanne d'Arc",
              paragraphs: [
                "Jeanne d'Arc est une jeune paysanne de Domrémy, un village situé aux limites de la Lorraine. Elle affirme entendre des voix de saints qui lui demandent de libérer le royaume. Au début de 1429, elle rencontre Charles VII à Chinon et le convainc de lui confier des troupes. Le 8 mai 1429, elle contribue à délivrer Orléans. Le 17 juillet 1429, elle conduit Charles VII jusqu'à Reims, où il est sacré : il devient alors pleinement roi aux yeux de ses sujets.",
                "En 1430, Jeanne est capturée par les Bourguignons à Compiègne, puis livrée aux Anglais. Elle est jugée à Rouen par un tribunal d'Église présidé par l'évêque Pierre Cauchon, condamnée pour hérésie et brûlée vive le 30 mai 1431. En 1456, un second procès l'innocente ; l'Église catholique en fait une sainte en 1920. Son action militaire a été courte, mais elle a redonné confiance au camp de Charles VII et rendu possible son sacre.",
              ],
            },
            {
              heading: "Des populations dans le malheur",
              paragraphs: [
                "La guerre frappe durement les populations. Les armées pillent les campagnes. Pendant les trêves, des soldats sans emploi, regroupés en « grandes compagnies », rançonnent les villages. Les impôts augmentent. En 1358, des paysans révoltés des environs de Paris, qu'on surnomme les « Jacques », attaquent des châteaux : c'est la Grande Jacquerie, très durement réprimée.",
                "À ces malheurs s'ajoute une terrible épidémie : la peste noire. Venue d'Asie par les routes du commerce, elle arrive à Marseille à la fin de 1347 et ravage toute l'Europe jusqu'en 1352. Elle tue entre le tiers et la moitié des Européens, puis revient régulièrement. Entre la guerre, la peste et les famines, la population du royaume diminue fortement entre le milieu du XIVe siècle et le milieu du XVe siècle.",
              ],
              box: { label: "Définition", text: "Peste noire : épidémie de peste qui frappe l'Europe de 1347 à 1352. Elle se transmet par les puces des rats et, entre humains, par la toux. Elle tue entre le tiers et la moitié des Européens." },
            },
            {
              heading: "Un État plus fort à la sortie de la guerre",
              paragraphs: [
                "Pour payer la guerre, le roi lève des impôts de plus en plus souvent. Dès le XIVe siècle, il impose la gabelle, un impôt sur le sel. En 1439, Charles VII obtient de lever chaque année la taille, un impôt direct payé surtout par les paysans : c'est le premier impôt permanent. La noblesse et le clergé en sont exemptés.",
                "Avec cet argent, Charles VII crée en 1445 une armée permanente, payée par le roi : les compagnies d'ordonnance. Il les complète par des francs-archers et par une artillerie moderne, dont les canons décident de la victoire à Castillon en 1453. Le roi n'a plus besoin de compter sur ses vassaux pour faire la guerre.",
                "La guerre fait aussi naître un sentiment d'appartenance commune : beaucoup d'habitants du royaume se sentent unis contre les Anglais. Après la guerre, Louis XI (1461-1483) agrandit encore le domaine : à la mort du duc de Bourgogne, Charles le Téméraire, en 1477, il s'empare de la Bourgogne, puis il hérite de l'Anjou et de la Provence. À la fin du XVe siècle, le roi de France gouverne presque tout son royaume.",
              ],
              box: { label: "Définition", text: "Impôt permanent : impôt levé chaque année, sans demander à chaque fois l'accord des sujets. Armée permanente : armée de soldats payés par le roi, présente même en temps de paix. Ce sont deux piliers de l'État monarchique." },
            },
          ],
          keyPoints: [
            "1328 : les Valois succèdent aux Capétiens directs ; le roi d'Angleterre Édouard III réclame la couronne.",
            "La guerre de Cent Ans dure de 1337 à 1453 (116 ans), avec de longues trêves.",
            "Défaites françaises à Crécy (1346), Poitiers (1356) et Azincourt (1415) ; traité de Troyes en 1420.",
            "1429 : Jeanne d'Arc contribue à délivrer Orléans et fait sacrer Charles VII à Reims ; elle est brûlée à Rouen en 1431.",
            "Les populations souffrent de la guerre, des pillages et de la peste noire (1347-1352).",
            "La guerre renforce l'État : taille permanente (1439), armée permanente (1445), sentiment national naissant.",
          ],
          example: {
            statement: "Pourquoi peut-on dire que la guerre de Cent Ans renforce le pouvoir du roi de France ? Répondez en trois étapes.",
            solution: [
              "Étape 1, le roi a de nouveaux revenus : pour payer la guerre, il lève la gabelle sur le sel puis, à partir de 1439, la taille chaque année. C'est le premier impôt permanent.",
              "Étape 2, le roi a sa propre armée : en 1445, Charles VII crée les compagnies d'ordonnance, une armée permanente payée par lui, complétée par une artillerie moderne. Il ne dépend plus de ses vassaux.",
              "Étape 3, le roi gagne en prestige et en territoire : après le sacre de 1429, Charles VII reconquiert le royaume jusqu'à la victoire de Castillon en 1453, et les habitants se sentent unis contre les Anglais.",
              "Conclusion : en sortant vainqueur d'une longue guerre, le roi dispose d'un impôt permanent, d'une armée permanente et d'un royaume plus uni ; l'État monarchique est renforcé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Rangez ces événements dans l'ordre chronologique et donnez la date de chacun : la bataille de Castillon ; le début de la guerre ; le sacre de Charles VII à Reims ; la bataille de Crécy ; le traité de Troyes ; la bataille d'Azincourt.",
              hint: "La guerre commence en 1337 et se termine en 1453. Les trois autres dates se trouvent dans la partie « Une guerre en trois temps ».",
              solution: [
                "1) Début de la guerre : 1337.",
                "2) Bataille de Crécy : 1346.",
                "3) Bataille d'Azincourt : 1415.",
                "4) Traité de Troyes : 1420.",
                "5) Sacre de Charles VII à Reims : 1429.",
                "6) Bataille de Castillon : 1453.",
              ],
            },
            {
              level: 2,
              statement: "a) Calculez la durée de la guerre de Cent Ans. Pourquoi porte-t-elle ce nom alors que le résultat n'est pas exactement 100 ? b) Jeanne d'Arc est née vers 1412 et meurt en 1431 : quel âge a-t-elle environ à sa mort ? c) Combien d'années séparent la mort de Jeanne d'Arc de la fin de la guerre ? d) Que pouvez-vous en conclure sur son rôle ?",
              hint: "Soustrayez la date la plus ancienne à la plus récente. Pour d), comparez la durée de son action avec la durée de la guerre.",
              solution: [
                "a) 1453 - 1337 = 116 ans. On parle de guerre de « Cent Ans » pour dire qu'elle a duré plus d'un siècle ; c'est un nom donné après coup par les historiens, et la guerre a connu de longues trêves.",
                "b) 1431 - 1412 = 19 : Jeanne d'Arc meurt à environ 19 ans.",
                "c) 1453 - 1431 = 22 ans.",
                "d) Jeanne d'Arc n'a pas gagné seule la guerre : son action dure de 1429 à 1430, et la guerre continue 22 ans après sa mort. Son rôle est surtout d'avoir redonné confiance au camp de Charles VII et permis son sacre à Reims.",
                "Résultat : 116 ans de guerre ; Jeanne meurt vers 19 ans, 22 ans avant la fin de la guerre.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Un village du royaume compte 600 habitants en 1340. La peste noire de 1348 tue le tiers de ses habitants. Puis, avant 1360, des pillages et une famine font encore 100 morts. a) Combien d'habitants meurent de la peste ? b) Combien reste-t-il d'habitants en 1360 ? c) Quelle part de la population de 1340 a disparu en 1360 ? Exprimez-la par une fraction simple. d) Citez les trois malheurs qui frappent les populations pendant la guerre de Cent Ans. e) Expliquez pourquoi, dans la même période, le pouvoir du roi se renforce malgré ces malheurs.",
              hint: "Pour a), divisez 600 par 3. Pour c), comparez le nombre de morts avec 600. Pour e), pensez à l'impôt et à l'armée.",
              solution: [
                "a) 600 ÷ 3 = 200 habitants meurent de la peste.",
                "b) 600 - 200 - 100 = 300 habitants en 1360.",
                "c) 200 + 100 = 300 morts sur 600 habitants, soit 300/600 = 1/2 : la moitié de la population a disparu.",
                "d) La guerre (pillages des armées et des grandes compagnies), la peste noire et les famines.",
                "e) Pour faire face à la guerre, le roi lève des impôts de plus en plus réguliers jusqu'à la taille permanente de 1439, puis crée une armée permanente en 1445. Il en sort plus puissant, car il ne dépend plus de ses vassaux.",
                "Résultat : 200 morts de la peste, 300 survivants, la moitié du village disparue ; mais l'État royal, lui, se renforce.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque date à l'événement de la guerre de Cent Ans qui lui correspond.",
            pairs: [
              { left: "1337", right: "Début de la guerre" },
              { left: "1346", right: "Défaite française à Crécy" },
              { left: "1420", right: "Traité de Troyes" },
              { left: "1429", right: "Sacre de Charles VII à Reims" },
              { left: "1431", right: "Jeanne d'Arc brûlée à Rouen" },
              { left: "1453", right: "Victoire française à Castillon" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi le roi d'Angleterre Édouard III réclame-t-il la couronne de France en 1328 ?",
              options: ["Parce qu'il a conquis Paris par les armes", "Parce qu'il est le petit-fils de Philippe le Bel", "Parce que le pape l'a désigné comme roi de France", "Parce que les grands seigneurs français l'ont élu"],
              answer: 1,
              why: "Sa mère, Isabelle, est la fille de Philippe le Bel : Édouard III se considère donc comme l'héritier, mais les grands du royaume choisissent Philippe de Valois.",
            },
            {
              q: "Que se passe-t-il à Reims le 17 juillet 1429 ?",
              options: ["Charles VII y est sacré", "Jeanne d'Arc y est jugée par un tribunal d'Église", "Les Anglais y signent la paix avec la France", "Le roi Jean II le Bon y est fait prisonnier"],
              answer: 0,
              why: "Après la délivrance d'Orléans, Jeanne d'Arc conduit Charles VII à Reims, où il est sacré : il devient pleinement roi aux yeux de ses sujets.",
            },
            {
              q: "Qui remporte la bataille d'Azincourt en 1415 ?",
              options: ["Les Français, grâce à Jeanne d'Arc", "Les Bourguignons, alliés au roi de France", "Les Anglais"],
              answer: 2,
              why: "À Azincourt, les Anglais du roi Henri V écrasent la chevalerie française, alors que le royaume est divisé entre Armagnacs et Bourguignons.",
            },
            {
              q: "Quel impôt devient permanent en 1439 ?",
              options: ["La dîme, versée à l'Église", "Le cens, payé au seigneur", "La corvée, travail gratuit dû au seigneur", "La taille"],
              answer: 3,
              why: "En 1439, Charles VII obtient de lever chaque année la taille pour payer l'armée : c'est le premier impôt permanent.",
            },
            {
              q: "Quelle est la conséquence de la peste noire en Europe ?",
              options: ["Elle épargne les villes grâce à leurs remparts", "Elle met fin à la guerre de Cent Ans en 1348", "Elle tue le tiers à la moitié des Européens", "Elle ne touche que l'Angleterre et la Flandre"],
              answer: 2,
              why: "Entre 1347 et 1352, la peste noire tue entre le tiers et la moitié de la population européenne, dans les villes comme dans les campagnes.",
            },
          ],
          trap: "Croire que la guerre de Cent Ans a duré exactement cent ans sans interruption : elle dure 116 ans (1337-1453) et alterne batailles et longues trêves. Autre erreur : penser que Jeanne d'Arc a gagné seule la guerre, alors qu'elle meurt en 1431, vingt-deux ans avant la fin.",
          method: "Pour raconter une guerre longue, découpez-la en trois temps avec un titre chacun (les victoires anglaises, le royaume divisé, la reconquête française) et retenez une date clé par temps : 1346, 1420, 1453. Ajoutez ensuite les conséquences pour l'État et pour les populations.",
        },
      ],
    },
    {
      id: 'egalite-discriminations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'egalite-femmes-hommes',
          title: 'L\'égalité entre les femmes et les hommes',
          minutes: 25,
          objectives: [
            "Identifier les grandes étapes de la conquête de l'égalité des droits entre les femmes et les hommes en France.",
            "Distinguer l'égalité en droits et l'égalité réelle.",
            "Reconnaître un stéréotype de genre et expliquer ses effets.",
            "Proposer des actions pour faire progresser l'égalité au collège et dans la vie quotidienne.",
          ],
          course: [
            {
              heading: "L'égalité, un principe de la République",
              paragraphs: [
                "La devise de la République française est « Liberté, Égalité, Fraternité ». Dès 1789, l'article 1er de la Déclaration des droits de l'homme et du citoyen affirme que les hommes naissent et demeurent libres et égaux en droits. Pourtant, à l'époque, ce texte ne s'applique pas vraiment aux femmes : elles ne peuvent pas voter et restent soumises à l'autorité de leur père, puis de leur mari.",
                "En 1791, Olympe de Gouges rédige la Déclaration des droits de la femme et de la citoyenne pour réclamer les mêmes droits que les hommes. Elle est guillotinée en 1793 pour ses écrits politiques. Aujourd'hui, l'égalité est inscrite dans nos textes les plus importants : le préambule de la Constitution de 1946, toujours en vigueur, précise que « la loi garantit à la femme, dans tous les domaines, des droits égaux à ceux de l'homme ».",
              ],
              box: { label: "Définition", text: "Égalité en droits : les femmes et les hommes ont les mêmes droits et les mêmes devoirs devant la loi. Égalité réelle : ils ont, dans les faits, les mêmes chances (salaire, emploi, responsabilités, partage des tâches)." },
            },
            {
              heading: "Une conquête progressive des droits",
              paragraphs: [
                "Les droits des femmes ont été obtenus pas à pas, grâce au combat de nombreuses femmes et de nombreux hommes. En 1944, une ordonnance accorde aux femmes le droit de vote et le droit d'être élues ; elles votent pour la première fois en 1945. En 1965, une loi permet aux femmes mariées d'exercer un métier et d'ouvrir un compte en banque sans l'autorisation de leur mari.",
                "En 1972, la loi impose l'égalité de rémunération entre les femmes et les hommes pour un même travail ou un travail de valeur égale. En 1975, la mixité devient obligatoire dans les établissements scolaires publics. En 2000, la loi sur la parité oblige les partis politiques à présenter autant de femmes que d'hommes à de nombreuses élections, sous peine de sanctions.",
              ],
              box: { label: "Repère", text: "1944 : droit de vote et d'éligibilité des femmes. 1965 : les femmes mariées peuvent travailler et ouvrir un compte sans l'accord de leur mari. 1972 : égalité des salaires inscrite dans la loi. 2000 : loi sur la parité en politique." },
            },
            {
              heading: "Des inégalités qui persistent",
              paragraphs: [
                "Les droits sont égaux, mais l'égalité réelle n'est pas encore atteinte. En France, les femmes gagnent en moyenne moins que les hommes. Une partie de cet écart s'explique parce qu'elles travaillent plus souvent à temps partiel et dans des métiers moins bien payés. Une autre partie existe même à poste égal : elle reste inexpliquée et peut relever de discriminations.",
                "Les femmes sont aussi moins nombreuses aux postes de direction des entreprises et parmi les élus, même si leur place progresse. À la maison, elles assurent encore la plus grande partie des tâches ménagères et des soins aux enfants. Enfin, elles sont beaucoup plus souvent victimes de violences sexistes et sexuelles.",
              ],
            },
            {
              heading: "Les stéréotypes de genre",
              paragraphs: [
                "Un stéréotype est une idée toute faite et simpliste que l'on applique à tout un groupe de personnes, sans tenir compte de chacun. Les stéréotypes de genre attribuent des goûts, des qualités ou des métiers aux filles ou aux garçons : « les filles sont nulles en maths », « les garçons ne pleurent pas », « le rose, c'est pour les filles ».",
                "Ces idées semblent anodines, mais elles ont des effets réels : elles influencent les choix d'orientation et de métier, limitent la liberté de chacun et peuvent entraîner des moqueries. Ainsi, peu de filles choisissent les métiers du numérique et peu de garçons ceux de la petite enfance, alors que rien ne les en empêche. Le sexisme consiste à penser ou à agir comme si un sexe était supérieur à l'autre.",
              ],
              box: { label: "Définition", text: "Stéréotype : idée toute faite et réductrice sur un groupe de personnes. Sexisme : attitude, propos ou comportement qui considère un sexe comme inférieur à l'autre." },
            },
            {
              heading: "Agir pour l'égalité",
              paragraphs: [
                "L'État agit. Depuis 2008, la Constitution prévoit que la loi favorise l'égal accès des femmes et des hommes aux mandats électoraux et aux responsabilités professionnelles et sociales. Les entreprises d'au moins 50 salariés doivent publier chaque année un « index de l'égalité professionnelle ». Et une discrimination fondée sur le sexe est un délit puni par la loi.",
                "Au collège, chacun peut agir : refuser les remarques sexistes, ne pas rire d'une moquerie, partager les responsabilités (délégués, sport, clubs) entre filles et garçons, choisir son orientation selon ses goûts et non selon les stéréotypes. Des femmes pionnières montrent que tout est possible : Marie Curie a reçu deux prix Nobel (1903 et 1911) ; Simone Veil est devenue en 1979 la première présidente du Parlement européen élu au suffrage universel.",
              ],
            },
          ],
          keyPoints: [
            "L'égalité en droits est inscrite dans la Déclaration de 1789, le préambule de 1946 et la Constitution de 1958.",
            "Étapes : 1944 (droit de vote), 1965 (travailler sans l'accord du mari), 1972 (égalité des salaires), 2000 (parité).",
            "L'égalité réelle n'est pas atteinte : écarts de salaire, moins de femmes dirigeantes, tâches ménagères inégales.",
            "Un stéréotype de genre est une idée toute faite sur les filles ou les garçons ; il limite les choix de chacun.",
            "Le sexisme considère un sexe comme inférieur à l'autre ; la discrimination fondée sur le sexe est un délit.",
          ],
          example: {
            statement: "Expliquez pourquoi on peut dire que l'égalité entre les femmes et les hommes est acquise dans le droit, mais pas encore complètement dans les faits.",
            solution: [
              "Étape 1, définir : l'égalité en droits signifie que la loi donne les mêmes droits à tous ; l'égalité réelle signifie que chacun a, dans les faits, les mêmes chances.",
              "Étape 2, montrer l'égalité en droits avec des dates : droit de vote en 1944, liberté de travailler sans l'accord du mari en 1965, égalité des salaires en 1972, parité en 2000.",
              "Étape 3, montrer les inégalités réelles avec des exemples : en moyenne, les femmes gagnent moins que les hommes, elles sont moins nombreuses à diriger des entreprises et assurent la plus grande partie des tâches ménagères.",
              "Étape 4, expliquer : ces inégalités viennent en partie des stéréotypes de genre, qui orientent les choix de métier, et parfois de discriminations.",
              "Conclusion : la loi a établi l'égalité, mais il faut encore agir (lois, contrôles, éducation, comportements quotidiens) pour qu'elle devienne réelle.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec la bonne date : 1944, 1965, 1972 ou 2000. a) Une loi impose l'égalité de salaire pour un travail de valeur égale en … b) Les femmes obtiennent le droit de vote en … c) La loi sur la parité en politique est votée en … d) Les femmes mariées peuvent ouvrir un compte en banque sans l'accord de leur mari en …",
              hint: "Relisez l'encadré « Repère » de la partie sur la conquête des droits.",
              solution: [
                "a) 1972 : égalité de rémunération pour un même travail ou un travail de valeur égale.",
                "b) 1944 : droit de vote et d'éligibilité, exercé pour la première fois en 1945.",
                "c) 2000 : loi sur la parité.",
                "d) 1965 : les femmes mariées peuvent travailler et ouvrir un compte sans l'autorisation de leur mari.",
              ],
            },
            {
              level: 2,
              statement: "Parmi ces phrases, lesquelles expriment un stéréotype de genre ? Justifiez chaque réponse. a) « Les garçons sont forcément meilleurs en sport. » b) « Dans notre classe, 14 élèves sur 28 sont des filles. » c) « Infirmier, ce n'est pas un métier d'homme. » d) « La loi impose un salaire égal pour un travail de même valeur. » e) « Les filles sont naturellement plus calmes. »",
              hint: "Un stéréotype attribue une qualité, un goût ou un métier à tout un groupe. Une donnée chiffrée ou une règle de loi n'en est pas un.",
              solution: [
                "a) Stéréotype : la phrase attribue à tous les garçons une qualité, sans tenir compte de chacun.",
                "b) Pas un stéréotype : c'est un simple constat chiffré.",
                "c) Stéréotype : elle réserve un métier à un sexe, alors que les hommes peuvent être infirmiers.",
                "d) Pas un stéréotype : c'est le contenu d'une loi de 1972.",
                "e) Stéréotype : le caractère dépend de chaque personne, pas de son sexe.",
                "Réponse : les phrases a), c) et e) expriment des stéréotypes de genre.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Dans une entreprise, des femmes et des hommes occupent exactement le même poste. Chaque femme gagne 2 000 euros par mois et chaque homme 2 400 euros par mois. a) Calculez l'écart de salaire mensuel entre une femme et un homme. b) Exprimez cet écart en pourcentage du salaire des hommes (arrondi à l'unité). c) Sur une année de 12 mois, combien une femme gagne-t-elle de moins qu'un homme ? d) Cette situation est-elle légale ? Justifiez à l'aide du cours. e) Proposez deux actions pour corriger la situation.",
              hint: "Pour b), divisez l'écart par 2 400 puis multipliez par 100. Pour d), cherchez la loi de 1972.",
              solution: [
                "a) 2 400 - 2 000 = 400 euros par mois.",
                "b) 400 ÷ 2 400 = 0,1666…, soit environ 17 % du salaire des hommes.",
                "c) 400 × 12 = 4 800 euros de moins par an.",
                "d) Non : depuis 1972, la loi impose un salaire égal pour un même travail. Payer moins une femme à poste égal parce qu'elle est une femme est une discrimination fondée sur le sexe, punie par la loi.",
                "e) Par exemple : augmenter les salaires des femmes pour les aligner sur ceux des hommes ; publier l'index de l'égalité professionnelle et le faire contrôler ; les salariées peuvent aussi saisir le Défenseur des droits ou la justice.",
                "Résultat : écart de 400 euros par mois (environ 17 %), soit 4 800 euros par an ; c'est illégal.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces étapes vers l'égalité entre les femmes et les hommes.",
            items: [
              "La Déclaration des droits de l'homme et du citoyen proclame l'égalité en droits.",
              "Olympe de Gouges écrit la Déclaration des droits de la femme et de la citoyenne.",
              "Les femmes obtiennent le droit de vote.",
              "Les femmes mariées peuvent travailler sans l'autorisation de leur mari.",
              "La loi impose l'égalité des salaires pour un travail de valeur égale.",
              "La loi sur la parité est votée.",
            ],
          },
          quiz: [
            {
              q: "Que signifie « égalité en droits » ?",
              options: ["Tout le monde gagne exactement le même salaire", "Les femmes et les hommes ont les mêmes droits devant la loi", "Les filles et les garçons doivent obligatoirement aimer les mêmes activités", "Chacun peut choisir les lois qu'il veut respecter"],
              answer: 1,
              why: "L'égalité en droits signifie que la loi est la même pour tous ; elle ne garantit pas à elle seule l'égalité réelle.",
            },
            {
              q: "En quelle année les femmes votent-elles pour la première fois en France ?",
              options: ["1789", "1848", "1945", "1972"],
              answer: 2,
              why: "L'ordonnance de 1944 leur donne le droit de vote ; elles l'exercent pour la première fois lors des élections municipales de 1945.",
            },
            {
              q: "Qui écrit la Déclaration des droits de la femme et de la citoyenne en 1791 ?",
              options: ["Olympe de Gouges", "Marie Curie, la physicienne", "Simone Veil, la future ministre", "George Sand, la romancière"],
              answer: 0,
              why: "Olympe de Gouges réclame en 1791 les mêmes droits pour les femmes que pour les hommes ; elle est guillotinée en 1793.",
            },
            {
              q: "Lequel de ces exemples est un stéréotype de genre ?",
              options: ["La loi de 1972 sur l'égalité des salaires", "Le droit de vote accordé aux femmes en 1944", "La mixité dans les établissements scolaires", "« Les filles sont nulles en maths »"],
              answer: 3,
              why: "C'est une idée toute faite appliquée à toutes les filles, sans aucun fondement ; les autres propositions sont des lois ou des règles.",
            },
            {
              q: "Que doivent publier chaque année les entreprises d'au moins 50 salariés ?",
              options: ["La liste de leurs salariés avec leur adresse", "Un classement des meilleurs salariés de l'année", "Un index de l'égalité professionnelle", "Le montant de tous leurs bénéfices au Journal officiel"],
              answer: 2,
              why: "L'index de l'égalité professionnelle mesure les écarts entre femmes et hommes dans l'entreprise, pour pousser à les réduire.",
            },
          ],
          trap: "Confondre l'égalité en droits, inscrite dans la loi, et l'égalité réelle : depuis 1972, la loi interdit les écarts de salaire pour un même travail, mais des inégalités existent encore dans les faits.",
          method: "En EMC, appuyez chaque idée sur un exemple précis : une date et une loi (1944, 1972, 2000) pour parler des droits, une situation concrète de la vie quotidienne pour parler des inégalités ou des stéréotypes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reconnaitre-discriminations',
          title: 'Reconnaître une discrimination et ce que dit la loi',
          minutes: 25,
          objectives: [
            "Définir une discrimination et la distinguer d'un préjugé ou d'un stéréotype.",
            "Identifier les critères et les situations de discrimination interdits par la loi.",
            "Distinguer une discrimination d'une différence de traitement autorisée par la loi.",
            "Connaître les sanctions prévues et les recours possibles pour une victime ou un témoin.",
          ],
          course: [
            {
              heading: "Du préjugé à la discrimination",
              paragraphs: [
                "Un préjugé est une opinion que l'on se fait sur quelqu'un avant de le connaître, souvent à partir d'un stéréotype : « il habite tel quartier, il doit être violent ». Un préjugé est une idée : il est injuste et blessant, mais il reste dans la tête de celui qui le pense.",
                "Une discrimination, c'est un acte. C'est le fait de traiter une personne moins bien qu'une autre placée dans la même situation, à cause d'un critère interdit par la loi, comme son origine, son sexe ou son handicap. Par exemple, refuser de louer un appartement à quelqu'un à cause de son nom de famille est une discrimination. Le préjugé peut conduire à la discrimination quand il se transforme en acte.",
              ],
              box: { label: "Définition", text: "Discrimination : traitement défavorable d'une personne, par rapport à une autre placée dans une situation comparable, fondé sur un critère interdit par la loi et dans un domaine prévu par la loi (emploi, logement, accès à un bien ou à un service, éducation...)." },
            },
            {
              heading: "Ce que dit la loi",
              paragraphs: [
                "L'article 1er de la Constitution de 1958 affirme que la République « assure l'égalité devant la loi de tous les citoyens sans distinction d'origine, de race ou de religion ». Le Code pénal dresse la liste de plus de vingt critères de discrimination interdits, parmi lesquels l'origine, le sexe, l'âge, le handicap, l'état de santé, l'apparence physique, le nom de famille, le lieu de résidence, l'orientation sexuelle, les opinions politiques ou l'appartenance, vraie ou supposée, à une religion.",
                "La loi punit la discrimination dans des situations précises : refuser de vendre un bien ou de fournir un service, refuser d'embaucher, sanctionner ou licencier quelqu'un, refuser un stage. L'auteur risque jusqu'à 3 ans de prison et 45 000 euros d'amende, et jusqu'à 5 ans et 75 000 euros si la discrimination consiste à refuser l'accès à un lieu accueillant du public, comme un magasin ou une salle de sport.",
              ],
              box: { label: "Règle", text: "Discriminer est un délit : jusqu'à 3 ans d'emprisonnement et 45 000 euros d'amende (Code pénal, articles 225-1 et 225-2), davantage si l'accès à un lieu accueillant du public est refusé." },
            },
            {
              heading: "Toutes les différences de traitement ne sont pas des discriminations",
              paragraphs: [
                "Certaines différences de traitement sont permises, car elles sont prévues par la loi et justifiées. Exiger d'avoir 18 ans pour voter n'est pas une discrimination liée à l'âge : c'est une règle qui s'applique à tous de la même façon. Refuser un candidat parce qu'il n'a pas le diplôme demandé pour un poste n'est pas non plus une discrimination, car le diplôme n'est pas un critère interdit.",
                "La loi prévoit même parfois des mesures pour rétablir l'égalité des chances : aménager un examen pour un élève en situation de handicap (plus de temps, un ordinateur), rendre les bâtiments publics accessibles aux fauteuils roulants. Ce n'est pas un privilège : c'est un moyen de donner à chacun les mêmes chances de réussir.",
              ],
            },
            {
              heading: "Réagir face à une discrimination",
              paragraphs: [
                "Une victime de discrimination peut porter plainte auprès de la police, de la gendarmerie ou du procureur de la République. Elle peut aussi saisir gratuitement le Défenseur des droits, une autorité indépendante prévue par la Constitution et en place depuis 2011. Il est chargé notamment de lutter contre les discriminations et de défendre les droits des enfants : il peut enquêter, proposer un règlement à l'amiable ou aider la victime devant la justice.",
                "Prouver une discrimination n'est pas toujours facile. Il faut garder des traces : messages, courriels, témoignages. La justice accepte aussi le « testing » : on envoie deux candidatures identiques qui ne diffèrent que par un seul critère, par exemple le nom, et on compare les réponses. Un témoin peut agir lui aussi : soutenir la victime, témoigner, en parler à un adulte de confiance. Des associations aident également les victimes.",
              ],
              box: { label: "À retenir", text: "Recours : porter plainte (police, gendarmerie, procureur), saisir gratuitement le Défenseur des droits, s'appuyer sur des associations. Garder des preuves et ne pas rester seul." },
            },
          ],
          keyPoints: [
            "Un préjugé est une idée ; une discrimination est un acte qui traite une personne moins bien qu'une autre.",
            "Il y a discrimination quand trois éléments sont réunis : un traitement défavorable, un critère interdit, un domaine prévu par la loi.",
            "Le Code pénal interdit plus de vingt critères : origine, sexe, âge, handicap, religion, apparence, lieu de résidence...",
            "Sanction : jusqu'à 3 ans de prison et 45 000 euros d'amende (5 ans et 75 000 euros dans certains cas).",
            "Une différence de traitement prévue par la loi et justifiée (âge pour voter, diplôme exigé) n'est pas une discrimination.",
            "Recours : plainte, Défenseur des droits (gratuit), associations ; garder des preuves.",
          ],
          example: {
            statement: "Situation inventée pour l'exercice. Samia et Lucas, deux élèves de 3e, demandent le même jour un stage d'observation dans la même agence. Leurs lettres sont identiques, seuls leurs noms diffèrent. L'agence répond à Lucas que le stage est possible et à Samia qu'il n'y a plus de place. S'agit-il d'une discrimination ?",
            solution: [
              "Question 1 : y a-t-il un traitement moins favorable ? Oui, Samia reçoit un refus alors que Lucas, dans la même situation, reçoit une acceptation.",
              "Question 2 : sur quel critère ? Les candidatures ne diffèrent que par le nom, qui peut révéler le sexe ou une origine supposée : ce sont des critères interdits par la loi.",
              "Question 3 : dans quel domaine ? Le refus d'un stage fait partie des situations expressément prévues par le Code pénal.",
              "Conclusion : si ce refus est bien dû au nom, c'est une discrimination. Samia peut garder les réponses écrites comme preuves, en parler à ses parents et au collège, et saisir le Défenseur des droits.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites s'il s'agit d'une idée (stéréotype ou préjugé) ou d'un acte de discrimination. a) Penser que les personnes âgées ne savent pas se servir d'un ordinateur. b) Un propriétaire refuse de louer son appartement à une famille parce que l'un des enfants est handicapé. c) Dire « les Bretons sont têtus ». d) Une entreprise refuse d'embaucher une femme parce qu'elle est enceinte.",
              hint: "Demandez-vous si la personne pense ou dit quelque chose, ou si elle prend une décision qui désavantage quelqu'un.",
              solution: [
                "a) Une idée : c'est un préjugé fondé sur un stéréotype lié à l'âge, mais aucune décision n'est prise.",
                "b) Une discrimination : refus d'un logement fondé sur le handicap, un critère interdit.",
                "c) Une idée : c'est un stéréotype sur les habitants d'une région.",
                "d) Une discrimination : refus d'embauche fondé sur la grossesse, un critère interdit par la loi.",
                "Réponse : a) et c) sont des idées ; b) et d) sont des discriminations.",
              ],
            },
            {
              level: 2,
              statement: "Discrimination ou différence de traitement autorisée ? Justifiez. a) Un cinéma refuse l'entrée d'un film interdit aux moins de 12 ans à un enfant de 10 ans. b) Un club de football refuse l'inscription d'un joueur à cause de sa religion. c) Le collège accorde du temps supplémentaire à un élève dyslexique pendant les contrôles. d) Un restaurant refuse de servir des clients à cause de leur couleur de peau. e) Une entreprise refuse un candidat sans permis de conduire pour un poste de chauffeur.",
              hint: "Cherchez si le critère utilisé figure dans la liste des critères interdits et si la différence est justifiée par une règle ou par le poste.",
              solution: [
                "a) Autorisée : l'interdiction aux moins de 12 ans protège les enfants et s'applique à tous de la même façon.",
                "b) Discrimination : la religion est un critère interdit, et l'accès à une activité est refusé.",
                "c) Autorisée : c'est un aménagement qui rétablit l'égalité des chances pour un élève en difficulté de santé ou de handicap.",
                "d) Discrimination : refus d'un service fondé sur l'origine, un critère interdit, dans un lieu accueillant du public ; la peine peut aller jusqu'à 5 ans de prison et 75 000 euros d'amende.",
                "e) Autorisée : le permis est indispensable pour ce poste, ce n'est pas un critère interdit.",
                "Réponse : b) et d) sont des discriminations ; a), c) et e) sont des différences de traitement autorisées.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Une association réalise un testing : elle répond à 100 offres d'emploi avec deux candidatures identiques (mêmes diplômes, même expérience), l'une au nom de « Julien Martin », l'autre au nom de « Karim Benali ». Julien reçoit 30 réponses positives, Karim 18. a) Quelle est la seule différence entre les deux candidatures ? b) Calculez le taux de réponses positives de chaque candidat. c) Calculez l'écart, puis dites combien de fois plus de réponses positives Julien a reçues (arrondi au dixième). d) Que suggère ce résultat ? Quel critère interdit est en jeu ? e) Que peut faire l'association, et que risquent les employeurs concernés ?",
              hint: "Un taux sur 100 offres se lit directement en pourcentage. Pour le « combien de fois », divisez 30 par 18.",
              solution: [
                "a) Seul le nom diffère, ce qui peut suggérer une origine différente.",
                "b) Julien : 30 ÷ 100 = 30 %. Karim : 18 ÷ 100 = 18 %.",
                "c) Écart : 30 - 18 = 12 points. 30 ÷ 18 ≈ 1,7 : Julien reçoit environ 1,7 fois plus de réponses positives.",
                "d) Les candidatures étant identiques, l'écart suggère que certains employeurs écartent des candidats à cause de leur origine supposée, révélée par le nom : c'est une discrimination à l'embauche.",
                "e) L'association peut transmettre les résultats au Défenseur des droits et à la justice, car le testing est accepté comme preuve. Les employeurs risquent jusqu'à 3 ans de prison et 45 000 euros d'amende.",
                "Résultat : 30 % contre 18 %, soit environ 1,7 fois plus de réponses pour Julien ; cela révèle une discrimination liée à l'origine.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Stéréotype", right: "Idée toute faite sur un groupe de personnes" },
              { left: "Préjugé", right: "Opinion sur quelqu'un formée avant de le connaître" },
              { left: "Discrimination", right: "Acte qui défavorise une personne selon un critère interdit" },
              { left: "Défenseur des droits", right: "Autorité indépendante saisie gratuitement par les victimes" },
              { left: "Testing", right: "Comparaison de deux candidatures qui ne diffèrent que par un critère" },
              { left: "Code pénal", right: "Texte qui fixe les délits et leurs peines" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la différence entre un préjugé et une discrimination ?",
              options: ["Le préjugé est une idée, la discrimination est un acte", "Il n'y a aucune différence entre les deux mots", "Le préjugé est puni de prison ferme, mais pas la discrimination", "La discrimination concerne seulement les adultes au travail"],
              answer: 0,
              why: "Le préjugé reste une opinion ; la discrimination est une décision ou un comportement qui défavorise réellement une personne.",
            },
            {
              q: "Laquelle de ces situations est une discrimination ?",
              options: ["Refuser un candidat qui n'a pas le diplôme exigé pour le poste", "Interdire un film violent aux enfants de moins de 12 ans", "Refuser un client dans un magasin à cause de son origine", "Exiger d'avoir 18 ans pour voter aux élections"],
              answer: 2,
              why: "L'origine est un critère interdit par la loi ; les autres différences de traitement sont prévues par la loi ou justifiées.",
            },
            {
              q: "Quelle peine maximale prévoit le Code pénal pour une discrimination, dans le cas général ?",
              options: ["Un simple avertissement écrit", "3 ans de prison et 45 000 euros d'amende", "10 ans de prison et un million d'euros d'amende", "Aucune, c'est seulement interdit par la morale"],
              answer: 1,
              why: "Les articles 225-1 et 225-2 du Code pénal punissent la discrimination de 3 ans de prison et 45 000 euros d'amende.",
            },
            {
              q: "Qui peut-on saisir gratuitement en cas de discrimination ?",
              options: ["Le maire de la commune voisine uniquement", "Le président de la République en personne", "Le directeur de l'entreprise qui a discriminé", "Le Défenseur des droits"],
              answer: 3,
              why: "Le Défenseur des droits est une autorité indépendante qui peut enquêter et aider gratuitement les victimes de discrimination.",
            },
            {
              q: "Qu'est-ce qu'un testing ?",
              options: ["Une interrogation écrite pour vérifier que l'on connaît bien les lois", "L'envoi de deux candidatures identiques sauf sur un critère", "Un examen médical passé avant une embauche", "Un sondage d'opinion réalisé auprès des habitants"],
              answer: 1,
              why: "Le testing compare les réponses faites à deux candidatures qui ne diffèrent que par un critère ; la justice l'accepte comme preuve.",
            },
          ],
          trap: "Croire que toute différence de traitement est une discrimination, ou au contraire qu'une discrimination n'est qu'une opinion : il faut un acte défavorable, fondé sur un critère interdit, dans une situation prévue par la loi.",
          method: "Pour analyser une situation, posez trois questions dans l'ordre : 1) une personne est-elle traitée moins bien qu'une autre dans la même situation ? 2) quel critère explique ce traitement, et est-il interdit par la loi ? 3) dans quel domaine (emploi, logement, service, école) ? Si les trois réponses vont dans ce sens, c'est une discrimination.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'harcelement-haine-en-ligne',
          title: 'Lutter contre le harcèlement et la haine en ligne',
          minutes: 25,
          objectives: [
            "Définir le harcèlement et le cyberharcèlement et reconnaître leurs trois caractéristiques.",
            "Expliquer les limites de la liberté d'expression en ligne fixées par la loi.",
            "Identifier les sanctions encourues et les recours possibles (adultes de confiance, 3018, signalement).",
            "Adopter une attitude responsable de témoin face au harcèlement.",
          ],
          course: [
            {
              heading: "Qu'est-ce que le harcèlement ?",
              paragraphs: [
                "Le harcèlement est une violence répétée, verbale, physique ou psychologique, exercée par une ou plusieurs personnes contre une victime qui ne parvient pas à se défendre. Une bagarre isolée ou une dispute entre amis n'est pas du harcèlement. En revanche, des moqueries, des insultes, des bousculades, des rumeurs ou une mise à l'écart qui se répètent jour après jour en sont.",
                "On reconnaît le harcèlement à trois caractéristiques : la violence, la répétition dans le temps et l'isolement de la victime face à un ou plusieurs agresseurs, souvent encouragés par des spectateurs qui rient ou se taisent. Les conséquences peuvent être graves : peur d'aller en cours, baisse des résultats, perte de confiance en soi, tristesse profonde, et parfois des gestes désespérés.",
              ],
              box: { label: "Définition", text: "Harcèlement : violence répétée (verbale, physique ou psychologique) qui dégrade les conditions de vie d'une victime isolée. Cyberharcèlement : harcèlement exercé par internet, les réseaux sociaux, les messageries ou les jeux en ligne." },
            },
            {
              heading: "Le cyberharcèlement",
              paragraphs: [
                "Avec les téléphones et les réseaux sociaux, le harcèlement peut continuer après les cours, le soir et le week-end, jusque dans la chambre de la victime. Il prend des formes variées : messages insultants, photos ou vidéos diffusées sans accord, faux comptes, rumeurs, exclusion d'un groupe de discussion, montages humiliants.",
                "En ligne, les messages se diffusent très vite, devant un public immense, et ils sont difficiles à effacer. Certains se croient protégés par un pseudonyme, mais la justice peut identifier les auteurs. La loi punit aussi le harcèlement « en meute » : plusieurs personnes qui envoient chacune un seul message humiliant à la même victime, en sachant qu'elles participent à une attaque collective, commettent ensemble un harcèlement.",
              ],
            },
            {
              heading: "La liberté d'expression et ses limites",
              paragraphs: [
                "La liberté d'expression est un droit fondamental. L'article 11 de la Déclaration des droits de l'homme et du citoyen de 1789 affirme que chacun peut parler, écrire et imprimer librement, mais qu'il doit répondre de l'abus de cette liberté dans les cas prévus par la loi. Internet n'est pas une zone de non-droit : ce qui est interdit dans la rue l'est aussi en ligne.",
                "La loi du 29 juillet 1881 sur la liberté de la presse, qui s'applique aussi aux réseaux sociaux, punit notamment l'injure (une insulte), la diffamation (accuser quelqu'un d'un fait précis qui porte atteinte à son honneur) et la provocation à la haine ou à la violence contre une personne ou un groupe à cause de son origine, de sa religion, de son sexe, de son orientation sexuelle ou de son handicap. Ces propos haineux sont plus sévèrement punis qu'une simple insulte.",
              ],
              box: { label: "Règle", text: "Ce qui est interdit hors ligne l'est aussi en ligne. Injure, diffamation, menace, harcèlement et provocation à la haine sont punis par la loi, même sous un pseudonyme." },
            },
            {
              heading: "Ce que dit la loi sur le harcèlement",
              paragraphs: [
                "Depuis la loi du 2 mars 2022, le harcèlement scolaire est un délit à part entière. Son auteur risque jusqu'à 3 ans de prison et 45 000 euros d'amende ; les peines sont plus lourdes si la victime a été gravement atteinte, et vont jusqu'à 10 ans de prison et 150 000 euros d'amende si elle s'est suicidée ou a tenté de le faire.",
                "Un mineur est jugé selon des règles adaptées à son âge, mais il peut être sanctionné. Au collège, le harcèlement entraîne aussi des sanctions disciplinaires, qui peuvent aller jusqu'à l'exclusion. Les parents de l'auteur peuvent devoir réparer le dommage causé à la victime.",
              ],
              box: { label: "Repère", text: "Loi du 2 mars 2022 : le harcèlement scolaire devient un délit. Jusqu'à 3 ans de prison et 45 000 euros d'amende, et jusqu'à 10 ans et 150 000 euros en cas de suicide ou de tentative de suicide de la victime." },
            },
            {
              heading: "Agir, que l'on soit victime ou témoin",
              paragraphs: [
                "Une victime ne doit pas rester seule : elle doit en parler à un adulte de confiance (parent, professeur, CPE, infirmière scolaire). Elle peut appeler le 3018, numéro national gratuit, anonyme et confidentiel contre le harcèlement et les violences numériques, qui peut aussi faire supprimer des contenus. Il faut conserver des preuves (captures d'écran), bloquer et signaler l'agresseur sur la plateforme, et si besoin porter plainte.",
                "Le témoin a un rôle décisif, car le harcèlement se nourrit du silence et des rires. Il ne faut pas aimer, commenter ou partager un contenu humiliant, mais soutenir la victime et prévenir un adulte. Ce n'est pas « balancer » : c'est protéger quelqu'un. Dans les collèges, le programme pHARe forme des élèves et des adultes pour repérer et traiter le harcèlement. Les contenus haineux illégaux peuvent aussi être signalés sur la plateforme officielle Pharos.",
              ],
              box: { label: "À retenir", text: "Victime : en parler, garder les preuves, bloquer et signaler, appeler le 3018 (gratuit et confidentiel). Témoin : ne pas relayer, soutenir la victime, alerter un adulte." },
            },
          ],
          keyPoints: [
            "Le harcèlement réunit trois caractéristiques : la violence, la répétition et l'isolement de la victime.",
            "Le cyberharcèlement suit la victime partout, se diffuse vite et devant un large public ; le harcèlement « en meute » est puni.",
            "La liberté d'expression a des limites : injure, diffamation et provocation à la haine sont punies, en ligne comme ailleurs.",
            "Depuis 2022, le harcèlement scolaire est un délit : jusqu'à 3 ans de prison et 45 000 euros d'amende, plus en cas de conséquences graves.",
            "Recours : adulte de confiance, 3018, captures d'écran, blocage, signalement, plainte.",
            "Le témoin ne relaie pas, soutient la victime et prévient un adulte.",
          ],
          example: {
            statement: "Situation inventée pour l'exercice. Depuis trois semaines, plusieurs élèves de 5e publient chaque soir des montages moqueurs sur Léa dans le groupe de discussion de la classe. Les autres membres du groupe envoient des rires ou ne disent rien. Léa ne veut plus aller au collège. Est-ce du harcèlement ? Que risquent les auteurs ? Que doivent faire Léa et les témoins ?",
            solution: [
              "Étape 1, vérifier les trois caractéristiques : il y a violence (montages moqueurs), répétition (chaque soir depuis trois semaines) et isolement de Léa face à un groupe. C'est donc du harcèlement, et plus précisément du cyberharcèlement.",
              "Étape 2, la loi : depuis 2022, le harcèlement scolaire est un délit, puni jusqu'à 3 ans de prison et 45 000 euros d'amende. Les auteurs, mineurs, seront jugés selon des règles adaptées, et le collège peut les sanctionner.",
              "Étape 3, la victime : Léa doit en parler à un adulte de confiance, faire des captures d'écran, signaler les messages et peut appeler le 3018.",
              "Étape 4, les témoins : ceux qui envoient des rires encouragent le harcèlement. Ils doivent arrêter, soutenir Léa et prévenir un adulte.",
              "Conclusion : c'est du cyberharcèlement, un délit ; la parole de la victime et l'action des témoins permettent de l'arrêter.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Harcèlement ou non ? Justifiez avec les trois caractéristiques. a) Deux amis se disputent une fois à la récréation puis se réconcilient. b) Chaque jour depuis un mois, un groupe cache le sac de Noé et se moque de lui. c) Un élève reçoit chaque soir des messages insultants d'un faux compte. d) Une élève fait une blague à une camarade, qui en rit avec elle.",
              hint: "Cherchez à chaque fois la violence, la répétition et l'isolement de la victime.",
              solution: [
                "a) Non : la dispute est unique, il n'y a pas de répétition ni de victime isolée.",
                "b) Oui : violence (vol du sac, moqueries), répétition (chaque jour depuis un mois), Noé est seul face à un groupe.",
                "c) Oui : c'est du cyberharcèlement, avec des insultes répétées chaque soir contre une même victime.",
                "d) Non : la blague est partagée et ne blesse pas ; il n'y a ni violence ni répétition.",
                "Réponse : b) et c) sont du harcèlement.",
              ],
            },
            {
              level: 2,
              statement: "Voici trois messages publiés sur un réseau social (décrits pour l'exercice). Nommez l'infraction correspondant à chacun : injure, diffamation ou provocation à la haine. a) Un message qui traite un camarade d'un mot grossier. b) Un message qui affirme, sans aucune preuve, qu'une élève a volé le téléphone d'un professeur. c) Un message qui appelle à s'en prendre aux personnes d'une religion. Expliquez ensuite pourquoi ces messages sont encore plus graves sur un réseau social que dans une conversation privée.",
              hint: "L'injure est une insulte ; la diffamation accuse quelqu'un d'un fait précis ; la provocation à la haine vise un groupe pour ce qu'il est.",
              solution: [
                "a) Une injure : c'est une insulte qui ne reproche aucun fait précis.",
                "b) Une diffamation : le message accuse l'élève d'un fait précis (un vol) qui porte atteinte à son honneur.",
                "c) Une provocation à la haine et à la violence : le message vise un groupe de personnes à cause de leur religion ; c'est puni plus sévèrement.",
                "Sur un réseau social, le message est public : il peut être vu par des centaines de personnes, partagé très vite et il est difficile à effacer. Le mal fait à la victime est donc beaucoup plus grand, et la loi punit plus durement les propos publics.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Une vidéo humiliante d'un élève est publiée à 18 h. À 19 h, 3 personnes l'ont reçue. Ensuite, chaque heure, chaque personne qui vient de la recevoir la transfère à 3 nouvelles personnes. a) Combien de nouvelles personnes la reçoivent à 20 h, à 21 h et à 22 h ? b) Combien de personnes au total l'ont reçue à 22 h ? c) Qu'est-ce que ce calcul montre sur le cyberharcèlement ? d) Qu'aurait dû faire la première personne qui a reçu la vidéo ? e) Ceux qui la partagent sans l'avoir tournée sont-ils innocents ? Justifiez.",
              hint: "Chaque heure, le nombre de nouvelles personnes est multiplié par 3. Pour le total, additionnez toutes les heures depuis 19 h.",
              solution: [
                "a) 20 h : 3 × 3 = 9 ; 21 h : 9 × 3 = 27 ; 22 h : 27 × 3 = 81 nouvelles personnes.",
                "b) 3 + 9 + 27 + 81 = 120 personnes en trois heures.",
                "c) Un contenu humiliant se diffuse de plus en plus vite et devant un public de plus en plus large : la victime ne peut plus le contrôler, d'où la gravité du cyberharcèlement.",
                "d) Ne pas la partager, la signaler sur la plateforme, soutenir la victime et prévenir un adulte de confiance ou appeler le 3018.",
                "e) Non : en relayant la vidéo, ils participent au harcèlement. La loi punit le harcèlement « en meute », même quand chacun n'a agi qu'une fois.",
                "Résultat : 9, 27 puis 81 nouvelles personnes, soit 120 en tout à 22 h ; chaque partage aggrave le harcèlement.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le harcèlement et la haine en ligne.",
            statements: [
              { text: "Une seule dispute entre deux élèves est du harcèlement.", true: false, why: "Le harcèlement suppose une répétition dans le temps ; une dispute isolée est un conflit." },
              { text: "Le harcèlement peut se poursuivre en dehors du collège, sur les réseaux sociaux.", true: true, why: "Le cyberharcèlement suit la victime partout, le soir et le week-end." },
              { text: "Partager une vidéo humiliante qu'on n'a pas tournée soi-même est sans conséquence.", true: false, why: "Relayer un contenu humiliant, c'est participer au harcèlement ; la loi punit le harcèlement « en meute »." },
              { text: "Sous un pseudonyme, personne ne peut être retrouvé par la justice.", true: false, why: "La justice peut demander aux plateformes l'identité des auteurs de messages illégaux." },
              { text: "Depuis 2022, le harcèlement scolaire est un délit.", true: true, why: "La loi du 2 mars 2022 en a fait un délit puni jusqu'à 3 ans de prison, et plus en cas de conséquences graves." },
              { text: "Prévenir un adulte quand on est témoin, c'est « balancer ».", true: false, why: "C'est protéger la victime : le harcèlement se nourrit du silence." },
              { text: "La liberté d'expression permet d'insulter quelqu'un en ligne.", true: false, why: "L'injure, la diffamation et la provocation à la haine sont punies, en ligne comme ailleurs." },
              { text: "Le 3018 est un numéro gratuit et confidentiel pour les victimes de cyberharcèlement.", true: true, why: "Il conseille les victimes et peut faire supprimer des contenus." },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les trois caractéristiques du harcèlement ?",
              options: ["Violence, répétition, isolement de la victime", "Une dispute, une réconciliation, puis une punition", "Des insultes uniquement écrites et publiées en ligne", "Une bagarre unique devant des témoins"],
              answer: 0,
              why: "Le harcèlement est une violence répétée contre une victime isolée, qui n'arrive pas à se défendre.",
            },
            {
              q: "Quel numéro gratuit peut-on appeler en cas de cyberharcèlement ?",
              options: ["Le 15, le SAMU", "Le 3018", "Le 18, les pompiers", "Le 17, police secours"],
              answer: 1,
              why: "Le 3018 est le numéro national, gratuit et confidentiel, contre le harcèlement et les violences numériques.",
            },
            {
              q: "Que dit l'article 11 de la Déclaration de 1789 sur la liberté d'expression ?",
              options: ["Elle est totale, sans aucune limite possible", "Elle est réservée aux journalistes, aux écrivains et aux élus", "On répond de ses abus dans les cas prévus par la loi", "Elle ne s'applique pas aux mineurs"],
              answer: 2,
              why: "Chacun peut parler et écrire librement, mais doit répondre de l'abus de cette liberté dans les cas fixés par la loi.",
            },
            {
              q: "Comment appelle-t-on le fait d'accuser publiquement quelqu'un d'un fait précis qui porte atteinte à son honneur ?",
              options: ["Une injure, c'est-à-dire une insulte", "Une simple opinion personnelle", "Un droit garanti par la Constitution", "Une diffamation"],
              answer: 3,
              why: "La diffamation reproche un fait précis ; l'injure est une insulte qui ne reproche aucun fait.",
            },
            {
              q: "Vous êtes témoin d'un message humiliant visant un camarade dans un groupe de classe. Que faites-vous ?",
              options: ["Vous le partagez pour prévenir les autres élèves", "Vous répondez par un rire pour détendre l'ambiance", "Vous soutenez la victime et prévenez un adulte", "Vous quittez le groupe sans rien dire à personne"],
              answer: 2,
              why: "Le témoin peut arrêter le harcèlement en refusant de le relayer, en soutenant la victime et en alertant un adulte.",
            },
          ],
          trap: "Confondre conflit et harcèlement : une dispute ponctuelle n'est pas du harcèlement, ce sont la violence, la répétition et l'isolement de la victime qui le caractérisent. Autre erreur : croire que partager ou « aimer » un contenu humiliant est sans conséquence.",
          method: "Retenez la conduite à tenir en quatre verbes : parler (à un adulte de confiance), garder (les preuves par captures d'écran), bloquer et signaler (sur la plateforme), appeler (le 3018). Dans une réponse écrite, citez toujours les trois caractéristiques du harcèlement.",
        },
      ],
    },
    {
      id: 'ressources-limitees',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'energie-ressource',
          title: 'L\'énergie : une ressource à ménager',
          minutes: 30,
          objectives: [
            "Distinguer les énergies renouvelables et les énergies non renouvelables.",
            "Décrire l'inégale répartition de la production et de la consommation d'énergie dans le monde.",
            "Expliquer les problèmes posés par l'usage des énergies fossiles.",
            "Identifier des solutions pour ménager l'énergie : sobriété, efficacité énergétique et énergies renouvelables.",
          ],
          course: [
            {
              heading: "Une ressource indispensable",
              paragraphs: [
                "Une ressource est un élément de la nature que les sociétés humaines utilisent pour satisfaire leurs besoins. L'énergie est l'une des plus importantes : elle sert à se chauffer, à s'éclairer, à cuire les aliments, à se déplacer, à faire tourner les usines et à faire fonctionner les appareils numériques. Sans énergie, il n'y a pas de développement.",
                "On distingue deux grandes familles. Les énergies non renouvelables existent en quantité limitée, car leurs stocks ne se reconstituent pas à l'échelle humaine : ce sont les énergies fossiles (charbon, pétrole, gaz naturel), formées en des millions d'années à partir d'êtres vivants enfouis, et l'uranium, utilisé dans les centrales nucléaires. Les énergies renouvelables se renouvellent en permanence : le soleil (solaire), le vent (éolien), l'eau des fleuves (hydraulique), la chaleur du sous-sol (géothermie) et le bois ou les déchets végétaux (biomasse).",
              ],
              box: { label: "Définition", text: "Énergie renouvelable : source d'énergie qui se renouvelle assez vite pour ne pas s'épuiser (soleil, vent, eau, géothermie, biomasse). Énergie fossile : charbon, pétrole et gaz, issus de la transformation très lente d'êtres vivants enfouis ; leurs stocks sont limités." },
            },
            {
              heading: "Un monde qui dépend des énergies fossiles",
              paragraphs: [
                "Aujourd'hui encore, environ 80 % de l'énergie consommée dans le monde provient des énergies fossiles. Le pétrole fait rouler les voitures et les camions et fait avancer les avions et les navires ; le charbon produit une grande partie de l'électricité, notamment en Chine et en Inde ; le gaz chauffe les logements et alimente des centrales électriques.",
                "La production est inégalement répartie. Les plus grands producteurs de pétrole sont les États-Unis, l'Arabie saoudite et la Russie, et les pays du golfe Persique, au Moyen-Orient, possèdent une grande partie des réserves. Le pétrole et le gaz voyagent ensuite par oléoducs, gazoducs et navires pétroliers vers les pays consommateurs. Les pays qui en ont peu, comme la France, dépendent des importations.",
              ],
            },
            {
              heading: "Une consommation très inégale",
              paragraphs: [
                "La Chine est aujourd'hui le premier consommateur d'énergie du monde, devant les États-Unis. Mais si l'on compare la consommation par habitant, les écarts sont immenses : un habitant des États-Unis ou du Canada consomme en moyenne plusieurs fois plus d'énergie qu'un habitant de l'Inde, et beaucoup plus encore qu'un habitant d'Afrique subsaharienne.",
                "Des centaines de millions de personnes, surtout en Afrique subsaharienne, n'ont toujours pas accès à l'électricité. Beaucoup cuisinent au bois ou au charbon de bois, ce qui pollue l'air des maisons et contribue à la déforestation. À l'inverse, dans les pays riches, l'énergie est souvent gaspillée : bâtiments mal isolés, appareils laissés en veille, éclairage inutile.",
              ],
            },
            {
              heading: "Les problèmes posés par les énergies fossiles",
              paragraphs: [
                "Les réserves de charbon, de pétrole et de gaz ne sont pas infinies : un jour, elles deviendront trop rares ou trop coûteuses à extraire. Surtout, leur combustion rejette du dioxyde de carbone (CO₂), un gaz à effet de serre qui est la principale cause du réchauffement climatique actuel. Elle pollue aussi l'air des villes. Leur extraction et leur transport peuvent provoquer des marées noires et abîmer les paysages.",
                "L'énergie est aussi un enjeu de pouvoir. Les pays importateurs dépendent de leurs fournisseurs : en 2022, après l'invasion de l'Ukraine par la Russie, les prix du gaz et de l'électricité ont fortement augmenté en Europe, qui achetait beaucoup de gaz russe. Les autres énergies ont aussi leurs limites : les barrages inondent des vallées, les éoliennes et les panneaux solaires dépendent du vent et du soleil, et le nucléaire produit des déchets radioactifs dangereux pendant très longtemps.",
              ],
              box: { label: "Définition", text: "Gaz à effet de serre : gaz, comme le dioxyde de carbone (CO₂), qui retient la chaleur dans l'atmosphère. Brûler du charbon, du pétrole ou du gaz en rejette beaucoup et réchauffe le climat." },
            },
            {
              heading: "Ménager l'énergie : la transition énergétique",
              paragraphs: [
                "La transition énergétique consiste à passer progressivement des énergies fossiles à des énergies qui rejettent peu de gaz à effet de serre. Certains pays avancent vite : en Islande, presque toute l'électricité vient des barrages et de la géothermie ; le Danemark produit une grande partie de son électricité grâce aux éoliennes. En France, l'essentiel de l'électricité provient des centrales nucléaires, complétées par les barrages, l'éolien et le solaire.",
                "Deux autres leviers existent. L'efficacité énergétique consiste à obtenir le même service avec moins d'énergie : isoler une maison, utiliser des ampoules à LED, des moteurs plus économes. La sobriété consiste à consommer moins en changeant ses habitudes : baisser le chauffage d'un degré, éteindre les appareils en veille, préférer la marche, le vélo ou les transports en commun.",
              ],
              box: { label: "À retenir", text: "Ménager l'énergie, c'est produire autrement (énergies renouvelables), consommer mieux (efficacité énergétique) et consommer moins (sobriété)." },
            },
          ],
          keyPoints: [
            "Énergies non renouvelables : charbon, pétrole, gaz (fossiles) et uranium. Renouvelables : soleil, vent, eau, géothermie, biomasse.",
            "Environ 80 % de l'énergie consommée dans le monde vient encore des énergies fossiles.",
            "Production et consommation sont inégales : un habitant d'Amérique du Nord consomme bien plus qu'un habitant d'Afrique subsaharienne.",
            "Les énergies fossiles s'épuisent, polluent et rejettent du CO₂, principale cause du réchauffement climatique.",
            "Solutions : énergies renouvelables, efficacité énergétique (isoler, LED) et sobriété (consommer moins).",
          ],
          example: {
            statement: "Classez les sources d'énergie suivantes en renouvelables et non renouvelables : pétrole, éolien, uranium, solaire, charbon, hydraulique, gaz naturel, biomasse. Indiquez ensuite lesquelles rejettent beaucoup de CO₂ quand on les utilise.",
            solution: [
              "Étape 1, se demander si la source se reconstitue rapidement : le vent, le soleil, l'eau des fleuves et les végétaux se renouvellent ; le pétrole, le charbon, le gaz et l'uranium sont en quantité limitée.",
              "Étape 2, classer : renouvelables : éolien, solaire, hydraulique, biomasse. Non renouvelables : pétrole, charbon, gaz naturel, uranium.",
              "Étape 3, repérer celles qui rejettent beaucoup de CO₂ : ce sont les énergies fossiles qu'on brûle, le pétrole, le charbon et le gaz naturel.",
              "Remarque : l'uranium n'est pas renouvelable mais les centrales nucléaires rejettent très peu de CO₂ ; la biomasse rejette du CO₂ en brûlant, mais les plantes replantées en absorbent en poussant.",
              "Réponse : 4 renouvelables (éolien, solaire, hydraulique, biomasse), 4 non renouvelables (pétrole, charbon, gaz, uranium) ; les trois énergies fossiles sont les grandes émettrices de CO₂.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Renouvelable ou non renouvelable ? a) le charbon ; b) le vent ; c) l'uranium ; d) la chaleur du sous-sol ; e) le gaz naturel ; f) le bois des forêts gérées.",
              hint: "Une énergie est renouvelable si sa source se reconstitue à l'échelle d'une vie humaine.",
              solution: [
                "a) Le charbon : non renouvelable (énergie fossile).",
                "b) Le vent : renouvelable (éolien).",
                "c) L'uranium : non renouvelable (stocks limités dans le sous-sol).",
                "d) La chaleur du sous-sol : renouvelable (géothermie).",
                "e) Le gaz naturel : non renouvelable (énergie fossile).",
                "f) Le bois : renouvelable (biomasse), à condition de replanter les arbres coupés.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque action, dites s'il s'agit de sobriété, d'efficacité énergétique ou d'énergie renouvelable. a) Installer des panneaux solaires sur le toit du collège. b) Éteindre l'ordinateur au lieu de le laisser en veille. c) Remplacer les vieilles fenêtres par des fenêtres isolantes. d) Aller au collège à vélo plutôt qu'en voiture. e) Construire un parc éolien en mer. f) Remplacer les anciennes ampoules par des ampoules à LED.",
              hint: "Sobriété : on change ses habitudes pour consommer moins. Efficacité : on garde le même service avec un équipement qui consomme moins. Renouvelable : on change de source d'énergie.",
              solution: [
                "a) Énergie renouvelable (solaire).",
                "b) Sobriété : on renonce à un usage inutile.",
                "c) Efficacité énergétique : la maison reste aussi chaude en consommant moins.",
                "d) Sobriété : on change d'habitude de déplacement.",
                "e) Énergie renouvelable (éolien).",
                "f) Efficacité énergétique : la même lumière avec moins d'électricité.",
                "Réponse : renouvelable a et e ; sobriété b et d ; efficacité c et f.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives et arrondies). Une famille consomme 12 000 kWh par an pour se chauffer. a) En baissant le chauffage de 20 °C à 19 °C, elle économise 7 % de cette consommation. Combien de kWh économise-t-elle, et quelle est sa nouvelle consommation ? b) Elle fait ensuite isoler son toit, ce qui réduit encore de 25 % sa nouvelle consommation. Calculez sa consommation finale. c) Quelle part de la consommation de départ a-t-elle économisée au total (arrondie à l'unité) ? d) Lequel des deux gestes relève de la sobriété, lequel de l'efficacité énergétique ?",
              hint: "Calculez 7 % de 12 000, puis 25 % du nouveau résultat. Attention : les deux pourcentages ne s'additionnent pas, car le second s'applique à une consommation déjà réduite.",
              solution: [
                "a) 12 000 × 7 ÷ 100 = 840 kWh économisés. Nouvelle consommation : 12 000 - 840 = 11 160 kWh.",
                "b) 11 160 × 25 ÷ 100 = 2 790 kWh économisés. Consommation finale : 11 160 - 2 790 = 8 370 kWh.",
                "c) Économie totale : 12 000 - 8 370 = 3 630 kWh. 3 630 ÷ 12 000 = 0,3025, soit environ 30 %. On remarque que ce n'est pas 7 + 25 = 32 %.",
                "d) Baisser le chauffage est un geste de sobriété (on change ses habitudes) ; isoler le toit relève de l'efficacité énergétique (le même confort avec moins d'énergie).",
                "Résultat : la famille passe de 12 000 à 8 370 kWh par an, soit environ 30 % d'économie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez ce que vous savez sur l'énergie.",
            statements: [
              { text: "Le pétrole est une énergie renouvelable, car on en trouve encore beaucoup.", true: false, why: "Il s'est formé en des millions d'années : ses stocks sont limités, même s'ils sont encore importants." },
              { text: "Environ 80 % de l'énergie consommée dans le monde vient des énergies fossiles.", true: true, why: "Le charbon, le pétrole et le gaz dominent encore très largement la consommation mondiale." },
              { text: "L'uranium des centrales nucléaires est une énergie renouvelable.", true: false, why: "L'uranium est extrait du sous-sol en quantité limitée ; le nucléaire rejette peu de CO₂, mais il n'est pas renouvelable." },
              { text: "En France, la plus grande partie de l'électricité vient des centrales nucléaires.", true: true, why: "Le nucléaire produit l'essentiel de l'électricité française, complété par l'hydraulique, l'éolien et le solaire." },
              { text: "Brûler du charbon rejette du dioxyde de carbone, un gaz à effet de serre.", true: true, why: "La combustion des énergies fossiles est la principale source de CO₂ d'origine humaine." },
              { text: "Tous les habitants de la planète ont aujourd'hui accès à l'électricité.", true: false, why: "Des centaines de millions de personnes, surtout en Afrique subsaharienne, en sont encore privées." },
              { text: "Isoler une maison est un geste d'efficacité énergétique.", true: true, why: "On garde le même confort en consommant moins d'énergie." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces énergies est renouvelable ?",
              options: ["Le charbon, extrait des mines", "Le pétrole, pompé dans le sous-sol", "Le vent", "L'uranium des centrales nucléaires"],
              answer: 2,
              why: "Le vent se renouvelle en permanence ; le charbon, le pétrole et l'uranium existent en quantité limitée.",
            },
            {
              q: "Quelle part de l'énergie consommée dans le monde vient des énergies fossiles ?",
              options: ["Environ 80 %", "Environ 10 %", "Environ 50 %", "100 %"],
              answer: 0,
              why: "Environ 80 % de l'énergie mondiale vient encore du charbon, du pétrole et du gaz.",
            },
            {
              q: "Quel pays est aujourd'hui le premier consommateur d'énergie du monde ?",
              options: ["Les États-Unis", "La Chine", "La France", "La Russie"],
              answer: 1,
              why: "La Chine, très peuplée et très industrielle, consomme le plus d'énergie, devant les États-Unis ; par habitant, ce sont les Américains qui consomment le plus.",
            },
            {
              q: "Qu'est-ce que la sobriété énergétique ?",
              options: ["Produire de l'électricité uniquement avec du charbon", "Obtenir le même service avec un appareil plus performant", "Importer davantage de gaz depuis d'autres pays", "Consommer moins en changeant ses habitudes"],
              answer: 3,
              why: "La sobriété, c'est réduire ses besoins (éteindre, baisser le chauffage, marcher) ; obtenir le même service avec moins d'énergie, c'est l'efficacité.",
            },
            {
              q: "Pourquoi les énergies fossiles posent-elles un problème pour le climat ?",
              options: ["Elles rejettent du CO₂ en brûlant", "Elles sont trop faciles à extraire du sous-sol partout", "Elles ne produisent pas assez de chaleur pour se chauffer", "Elles sont interdites par la loi française depuis 2000"],
              answer: 0,
              why: "En brûlant, le charbon, le pétrole et le gaz rejettent du CO₂, un gaz à effet de serre qui réchauffe le climat.",
            },
          ],
          trap: "Croire que le nucléaire est une énergie renouvelable parce qu'il rejette peu de CO₂ : l'uranium est une ressource limitée. Autre piège : penser que « renouvelable » veut dire « sans aucun inconvénient ».",
          method: "Face à une carte de l'énergie, posez trois questions : où produit-on (les gisements) ? où consomme-t-on (les pays riches et émergents) ? comment l'énergie circule-t-elle de l'un à l'autre (oléoducs, gazoducs, pétroliers) ? Concluez ensuite sur les inégalités.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'eau-ressource',
          title: 'L\'eau : une ressource inégalement répartie',
          minutes: 30,
          objectives: [
            "Décrire la répartition inégale de l'eau douce sur la planète.",
            "Expliquer les usages de l'eau et les tensions qu'ils provoquent.",
            "Distinguer le manque d'eau dû au climat et le manque d'accès à l'eau potable dû à la pauvreté.",
            "Présenter des solutions pour mieux gérer la ressource en eau.",
          ],
          course: [
            {
              heading: "Une ressource abondante mais peu disponible",
              paragraphs: [
                "On appelle la Terre la « planète bleue », car l'eau couvre environ 70 % de sa surface. Mais environ 97 % de cette eau est salée : c'est l'eau des mers et des océans. L'eau douce ne représente qu'environ 2,5 % du total, et la plus grande partie est gelée dans les glaciers et les calottes polaires ou cachée dans le sous-sol. L'eau facilement utilisable, celle des fleuves, des lacs et des nappes proches de la surface, n'est qu'une toute petite partie de l'eau de la planète.",
                "L'eau douce se renouvelle grâce au cycle de l'eau : elle s'évapore, forme des nuages, retombe en pluie et alimente les rivières et les nappes souterraines, appelées nappes phréatiques. Mais si l'on prélève l'eau plus vite qu'elle ne se renouvelle, ou si on la pollue, elle peut venir à manquer.",
              ],
              box: { label: "Définition", text: "Nappe phréatique : réserve d'eau souterraine alimentée par les pluies qui s'infiltrent dans le sol. Stress hydrique : situation d'un territoire où les besoins en eau dépassent, ou presque, l'eau disponible." },
            },
            {
              heading: "Une ressource inégalement répartie",
              paragraphs: [
                "Les pluies ne tombent pas partout de la même façon. Certains pays disposent de beaucoup d'eau douce, comme le Brésil (avec l'Amazone), la Russie ou le Canada. D'autres en manquent à cause de leur climat sec : c'est le cas des régions désertiques d'Afrique du Nord, du Moyen-Orient ou de l'intérieur de l'Australie.",
                "Le manque d'eau n'est pas seulement une question de climat. Selon l'Organisation mondiale de la santé (OMS) et l'UNICEF, environ 2 milliards de personnes n'ont pas accès à une eau potable sûre chez elles, surtout en Afrique subsaharienne et en Asie du Sud. Dans certaines régions où il pleut beaucoup, les habitants pauvres n'ont ni réseau de distribution ni station de traitement de l'eau. Or l'eau sale transmet des maladies, comme le choléra, qui tuent encore beaucoup d'enfants.",
              ],
              box: { label: "Repère", text: "Depuis 2010, l'ONU reconnaît l'accès à une eau potable et à l'assainissement comme un droit humain." },
            },
            {
              heading: "Des usages qui augmentent et entrent en concurrence",
              paragraphs: [
                "Dans le monde, environ 70 % de l'eau prélevée sert à l'agriculture, surtout pour irriguer les champs. L'industrie et les centrales électriques en utilisent environ 20 %, et les usages domestiques (boire, cuisiner, se laver) environ 10 %. En France, un habitant consomme en moyenne près de 150 litres d'eau par jour à la maison.",
                "Avec la croissance de la population, des villes et des besoins agricoles, les prélèvements augmentent. Des conflits d'usage apparaissent entre agriculteurs, industriels, habitants et touristes, surtout lors des sécheresses. Des tensions existent aussi entre pays qui partagent un même fleuve : sur le Nil, l'Égypte, qui dépend presque entièrement du fleuve, s'inquiète du grand barrage construit en amont par l'Éthiopie.",
              ],
              box: { label: "Définition", text: "Irrigation : apport artificiel d'eau aux cultures. Conflit d'usage : opposition entre plusieurs utilisateurs (agriculteurs, industriels, habitants, pays) qui veulent la même ressource." },
            },
            {
              heading: "Quand l'eau est mal gérée : la mer d'Aral",
              paragraphs: [
                "La mer d'Aral, en Asie centrale, était l'un des plus grands lacs du monde. À partir des années 1960, l'Union soviétique a détourné l'eau des deux fleuves qui l'alimentaient pour irriguer d'immenses champs de coton. Privée d'eau, la mer d'Aral a perdu la plus grande partie de sa surface et s'est divisée en plusieurs lacs.",
                "Les conséquences sont lourdes : les anciens ports se retrouvent loin de l'eau, la pêche a presque disparu, et le sel et les pesticides restés sur le fond asséché sont soulevés par le vent et rendent les habitants malades. Depuis 2005, une digue construite par le Kazakhstan a permis de faire remonter le niveau de la petite partie nord, mais la partie sud reste très réduite.",
              ],
            },
            {
              heading: "Mieux gérer l'eau",
              paragraphs: [
                "Pour augmenter l'eau disponible, certains pays construisent des barrages, transfèrent l'eau d'une région à une autre ou dessalent l'eau de mer, comme l'Arabie saoudite ou Israël. Le dessalement coûte cher, consomme beaucoup d'énergie et rejette dans la mer une eau très salée. On peut aussi réutiliser les eaux usées après les avoir traitées : Israël réutilise ainsi la majorité de ses eaux usées pour irriguer.",
                "La meilleure solution reste souvent d'économiser l'eau : irrigation au goutte-à-goutte, qui apporte l'eau au pied de chaque plante, réparation des fuites des réseaux, choix de cultures moins gourmandes, gestes quotidiens (douche plutôt que bain, robinet fermé pendant le brossage des dents). Il faut aussi protéger la qualité de l'eau en limitant les pollutions agricoles et industrielles et en construisant des stations d'épuration.",
              ],
              box: { label: "À retenir", text: "Gérer durablement l'eau, c'est augmenter l'eau disponible (barrages, dessalement, réutilisation), l'économiser (goutte-à-goutte, réparation des fuites, gestes quotidiens) et protéger sa qualité (stations d'épuration, moins de pollutions)." },
            },
          ],
          keyPoints: [
            "L'eau douce ne représente qu'environ 2,5 % de l'eau de la planète, et la plus grande partie est gelée ou souterraine.",
            "L'eau est inégalement répartie selon les climats (Brésil, Canada et Russie riches en eau ; déserts pauvres en eau).",
            "Environ 2 milliards de personnes n'ont pas accès à une eau potable sûre, souvent à cause de la pauvreté.",
            "Environ 70 % de l'eau prélevée dans le monde sert à l'agriculture ; les usages entrent en concurrence.",
            "Exemple de mauvaise gestion : la mer d'Aral, asséchée par l'irrigation du coton.",
            "Solutions : barrages, dessalement, réutilisation des eaux usées, goutte-à-goutte, économies et stations d'épuration.",
          ],
          example: {
            statement: "Montrez, à l'aide de deux exemples, que le manque d'eau peut avoir des causes naturelles et des causes humaines.",
            solution: [
              "Étape 1, définir le problème : manquer d'eau, c'est ne pas disposer d'assez d'eau douce, ou ne pas pouvoir accéder à une eau potable sûre.",
              "Étape 2, une cause naturelle : dans les régions désertiques, comme en Afrique du Nord ou au Moyen-Orient, il pleut très peu ; le climat sec limite l'eau disponible.",
              "Étape 3, une cause humaine : la mer d'Aral s'est asséchée parce que l'eau de ses fleuves a été détournée pour irriguer le coton. Ailleurs, des régions pluvieuses manquent d'eau potable faute de réseaux et de stations de traitement, à cause de la pauvreté.",
              "Conclusion : le manque d'eau dépend à la fois du climat et des choix des sociétés (prélèvements, pollutions, investissements) ; on peut donc agir sur une partie de ses causes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez à chaque question par une phrase. a) Quelle part de l'eau de la planète est salée ? b) Quelle activité prélève le plus d'eau dans le monde ? c) Comment appelle-t-on une réserve d'eau souterraine ? d) Depuis quelle année l'ONU reconnaît-elle l'accès à l'eau potable comme un droit humain ? e) Citez trois pays très riches en eau douce.",
              hint: "Toutes les réponses se trouvent dans les encadrés et dans la partie sur la répartition de l'eau.",
              solution: [
                "a) Environ 97 % de l'eau de la planète est salée.",
                "b) L'agriculture, qui prélève environ 70 % de l'eau, surtout pour irriguer.",
                "c) Une nappe phréatique.",
                "d) Depuis 2010.",
                "e) Par exemple le Brésil, la Russie et le Canada.",
              ],
            },
            {
              level: 2,
              statement: "Des spécialistes parlent de stress hydrique lorsqu'un pays dispose de moins de 1 700 m³ d'eau douce renouvelable par habitant et par an, et de pénurie d'eau en dessous de 1 000 m³. Données fictives : le pays A dispose de 50 milliards de m³ d'eau par an pour 10 millions d'habitants ; le pays B de 6 milliards de m³ pour 5 millions d'habitants ; le pays C de 8 milliards de m³ pour 20 millions d'habitants. a) Calculez l'eau disponible par habitant dans chaque pays. b) Classez chaque pays : sans stress, en stress hydrique ou en pénurie. c) Si la population du pays B double sans que l'eau disponible change, que se passe-t-il ?",
              hint: "Divisez l'eau disponible par le nombre d'habitants. Astuce : 1 milliard divisé par 1 million donne 1 000.",
              solution: [
                "a) Pays A : 50 000 000 000 ÷ 10 000 000 = 5 000 m³ par habitant. Pays B : 6 000 000 000 ÷ 5 000 000 = 1 200 m³. Pays C : 8 000 000 000 ÷ 20 000 000 = 400 m³.",
                "b) A : 5 000 m³, plus de 1 700, donc pas de stress. B : 1 200 m³, entre 1 000 et 1 700, donc stress hydrique. C : 400 m³, moins de 1 000, donc pénurie.",
                "c) 6 000 000 000 ÷ 10 000 000 = 600 m³ par habitant : le pays B passerait en situation de pénurie.",
                "Résultat : A 5 000 m³ (sans stress), B 1 200 m³ (stress hydrique), C 400 m³ (pénurie) ; la croissance démographique peut faire basculer un pays dans la pénurie.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives et arrondies). Un agriculteur irrigue 10 hectares de maïs par aspersion, ce qui consomme 5 000 m³ d'eau par hectare et par saison. Le goutte-à-goutte consomme 40 % d'eau en moins. a) Calculez sa consommation actuelle pour toute l'exploitation. b) Calculez sa consommation avec le goutte-à-goutte. c) Quelle quantité d'eau économiserait-il par saison ? d) En France, un habitant utilise environ 150 litres d'eau par jour à la maison. Combien d'habitants pourraient être alimentés pendant un an avec l'eau économisée (arrondi à l'unité) ? e) Pourquoi tous les agriculteurs n'adoptent-ils pas le goutte-à-goutte ?",
              hint: "1 m³ = 1 000 litres. Calculez d'abord ce qu'un habitant consomme en un an (365 jours), puis convertissez en m³.",
              solution: [
                "a) 5 000 × 10 = 50 000 m³ par saison.",
                "b) 40 % de 5 000 = 2 000 ; 5 000 - 2 000 = 3 000 m³ par hectare, soit 3 000 × 10 = 30 000 m³.",
                "c) 50 000 - 30 000 = 20 000 m³ économisés.",
                "d) Un habitant : 150 × 365 = 54 750 litres par an, soit 54,75 m³. 20 000 ÷ 54,75 ≈ 365,3, soit environ 365 habitants.",
                "e) L'installation coûte cher, demande de l'entretien (tuyaux qui se bouchent) et ne convient pas à toutes les cultures ; beaucoup de petits paysans n'ont pas les moyens de l'acheter.",
                "Résultat : 20 000 m³ économisés par saison, de quoi fournir l'eau domestique d'environ 365 habitants pendant un an.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Nappe phréatique", right: "Réserve d'eau souterraine alimentée par les pluies" },
              { left: "Irrigation", right: "Apport artificiel d'eau aux cultures" },
              { left: "Dessalement", right: "Transformation de l'eau de mer en eau douce" },
              { left: "Stress hydrique", right: "Besoins en eau proches ou supérieurs à l'eau disponible" },
              { left: "Station d'épuration", right: "Installation qui nettoie les eaux usées" },
              { left: "Mer d'Aral", right: "Lac d'Asie centrale asséché par l'irrigation du coton" },
            ],
          },
          quiz: [
            {
              q: "Quelle part de l'eau de la Terre est de l'eau douce ?",
              options: ["Environ 2,5 %", "Environ la moitié", "Environ les trois quarts", "Presque toute l'eau"],
              answer: 0,
              why: "Environ 97 % de l'eau est salée ; l'eau douce n'en représente qu'environ 2,5 %, surtout gelée ou souterraine.",
            },
            {
              q: "Quelle activité prélève le plus d'eau dans le monde ?",
              options: ["L'industrie et les centrales électriques", "Les usages domestiques des habitants", "L'agriculture", "Le tourisme et les piscines"],
              answer: 2,
              why: "L'agriculture prélève environ 70 % de l'eau dans le monde, principalement pour irriguer les cultures.",
            },
            {
              q: "Pourquoi la mer d'Aral s'est-elle en grande partie asséchée ?",
              options: ["À cause d'un tremblement de terre", "L'eau de ses fleuves a irrigué le coton", "Parce que le climat de la région est devenu glacial", "À cause des touristes trop nombreux sur ses plages"],
              answer: 1,
              why: "À partir des années 1960, l'eau des fleuves qui l'alimentaient a été détournée pour irriguer d'immenses champs de coton.",
            },
            {
              q: "Quel est un inconvénient du dessalement de l'eau de mer ?",
              options: ["Il rend l'eau impropre à la consommation humaine", "Il n'est possible que dans les pays froids", "Il assèche les nappes phréatiques des régions voisines", "Il consomme beaucoup d'énergie"],
              answer: 3,
              why: "Le dessalement fournit de l'eau potable, mais il coûte cher, consomme beaucoup d'énergie et rejette une eau très salée.",
            },
            {
              q: "Depuis quand l'ONU reconnaît-elle l'accès à l'eau potable comme un droit humain ?",
              options: ["1789", "1945", "1968", "2010"],
              answer: 3,
              why: "C'est en 2010 que l'Assemblée générale des Nations unies a reconnu le droit à l'eau potable et à l'assainissement.",
            },
          ],
          trap: "Croire que le manque d'eau ne dépend que du climat : beaucoup de personnes manquent d'eau potable dans des régions pluvieuses, faute de réseaux de distribution et de traitement de l'eau, c'est-à-dire à cause de la pauvreté.",
          method: "Pour expliquer un problème d'eau, distinguez toujours trois questions : la quantité (combien d'eau le climat apporte-t-il ?), l'accès (les habitants ont-ils des réseaux et une eau potable ?) et l'usage (qui prélève l'eau, et pour quoi faire ?).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nourrir-humanite',
          title: 'Nourrir une humanité en croissance',
          minutes: 30,
          objectives: [
            "Décrire les inégalités alimentaires dans le monde : sous-nutrition et malnutrition.",
            "Expliquer les causes de l'insécurité alimentaire.",
            "Comparer différents types d'agriculture : vivrière, productiviste et durable.",
            "Identifier les défis pour nourrir près de 10 milliards d'habitants vers 2050.",
          ],
          course: [
            {
              heading: "Un monde où tous ne mangent pas à leur faim",
              paragraphs: [
                "La population mondiale a dépassé 8 milliards d'habitants en 2022 et devrait approcher 10 milliards vers 2050, selon les projections de l'ONU. Il faudra donc produire davantage de nourriture. Pourtant, aujourd'hui déjà, tout le monde ne mange pas à sa faim.",
                "Selon la FAO, l'organisation des Nations unies pour l'alimentation et l'agriculture, environ 700 millions de personnes souffrent de la faim ces dernières années : c'est la sous-nutrition, une alimentation insuffisante en quantité. Elles vivent surtout en Afrique subsaharienne et en Asie du Sud. D'autres souffrent de malnutrition : leur alimentation est déséquilibrée, par manque de vitamines ou au contraire par excès de sucres et de graisses, ce qui favorise l'obésité, en forte hausse dans le monde, y compris dans les pays riches.",
              ],
              box: { label: "Définition", text: "Sous-nutrition : alimentation insuffisante en quantité (la faim). Malnutrition : alimentation déséquilibrée, par manque ou par excès de certains aliments. Sécurité alimentaire : situation où chacun a accès, à tout moment, à une nourriture suffisante, saine et nutritive." },
            },
            {
              heading: "Pourquoi la faim existe-t-elle encore ?",
              paragraphs: [
                "Selon la FAO, la planète produit aujourd'hui assez de nourriture pour nourrir tous ses habitants. La faim vient d'abord de la pauvreté : les plus pauvres ne peuvent pas acheter de quoi manger, ni produire assez sur de petites parcelles, sans eau, sans engrais et sans outils.",
                "Les guerres sont aujourd'hui une cause majeure des famines : elles détruisent les récoltes, chassent les paysans de leurs terres et bloquent l'arrivée de l'aide, comme au Soudan, en guerre depuis 2023. Les catastrophes climatiques (sécheresses, inondations) aggravent la situation. Enfin, selon la FAO, près d'un tiers de la nourriture produite est perdu ou gaspillé : dans les pays pauvres, surtout après la récolte, faute de bons moyens de stockage ; dans les pays riches, surtout dans les magasins et les foyers.",
              ],
            },
            {
              heading: "Des agricultures très différentes",
              paragraphs: [
                "L'agriculture vivrière produit d'abord pour nourrir la famille de l'agriculteur et la communauté locale. Elle est pratiquée par des centaines de millions de petits paysans, souvent avec peu de moyens, en Afrique et en Asie. Elle est fragile face aux sécheresses et aux mauvaises récoltes.",
                "L'agriculture productiviste cherche à produire le plus possible grâce aux machines, aux engrais, aux pesticides, à l'irrigation et à des semences sélectionnées. On la trouve aux États-Unis, en Europe, au Brésil ou en Argentine, souvent sur de très grandes exploitations, et une grande partie de sa production est vendue ou exportée : c'est une agriculture commerciale. Le Brésil, par exemple, est le premier exportateur mondial de soja, qui sert surtout à nourrir des animaux d'élevage en Chine et en Europe.",
              ],
              box: { label: "Définition", text: "Agriculture vivrière : agriculture qui produit pour nourrir la famille et le marché local. Agriculture productiviste : agriculture qui utilise beaucoup de machines, d'engrais et de pesticides pour obtenir les plus hauts rendements. Rendement : quantité produite sur une surface donnée (en tonnes par hectare)." },
            },
            {
              heading: "La révolution verte : des progrès et des limites",
              paragraphs: [
                "À partir des années 1960, l'Inde et d'autres pays d'Asie et d'Amérique latine lancent la « révolution verte » : ils adoptent des variétés de blé et de riz à haut rendement, l'irrigation et les engrais. Les récoltes augmentent fortement, et l'Inde, qui avait connu de terribles famines, devient capable de nourrir sa population en forte croissance.",
                "Mais ce modèle a des limites. Il consomme beaucoup d'eau, ce qui fait baisser les nappes souterraines ; les engrais et les pesticides polluent les sols et les rivières ; et les paysans les plus pauvres, qui ne peuvent pas acheter les semences et les engrais, s'endettent ou abandonnent leurs terres. Dans d'autres régions, l'extension des cultures et de l'élevage se fait au détriment des forêts, comme en Amazonie.",
              ],
            },
            {
              heading: "Nourrir l'humanité durablement",
              paragraphs: [
                "Le défi est de produire plus, mais aussi de produire mieux, sans épuiser les sols, l'eau et la biodiversité. L'agriculture biologique n'utilise ni engrais ni pesticides de synthèse. L'agroécologie s'appuie sur le fonctionnement de la nature : rotation des cultures, haies, association de plantes, lutte contre les insectes nuisibles grâce à leurs prédateurs. Ces méthodes protègent l'environnement, mais donnent souvent des rendements un peu plus faibles.",
                "D'autres solutions portent sur la consommation et la répartition : réduire le gaspillage ; aider les petits paysans (irrigation, stockage, crédit) ; manger moins de viande dans les pays riches, car produire de la viande demande beaucoup plus de terres et d'eau que produire des céréales ou des légumes ; et apporter une aide alimentaire d'urgence lors des crises, comme le fait le Programme alimentaire mondial (PAM) des Nations unies.",
              ],
              box: { label: "À retenir", text: "Nourrir l'humanité, c'est produire plus (meilleurs rendements), produire mieux (agriculture durable) et mieux répartir (lutte contre la pauvreté et le gaspillage, paix, aide alimentaire)." },
            },
          ],
          keyPoints: [
            "Plus de 8 milliards d'habitants depuis 2022, près de 10 milliards attendus vers 2050.",
            "Sous-nutrition : manger trop peu (environ 700 millions de personnes selon la FAO). Malnutrition : manger de façon déséquilibrée.",
            "La faim vient surtout de la pauvreté, des guerres, des aléas climatiques et des pertes, pas d'un manque de production mondiale.",
            "Agriculture vivrière (nourrir sa famille) et agriculture productiviste et commerciale (rendements élevés, exportation).",
            "La révolution verte a augmenté les récoltes, mais elle consomme beaucoup d'eau, pollue et a laissé de côté les plus pauvres.",
            "Solutions : agriculture durable, aide aux petits paysans, moins de gaspillage, aide alimentaire d'urgence.",
          ],
          example: {
            statement: "Comparez l'agriculture vivrière et l'agriculture productiviste : qui produit, comment, pour qui, avec quels avantages et quels inconvénients ?",
            solution: [
              "Qui et où : l'agriculture vivrière est pratiquée par de petits paysans, surtout en Afrique et en Asie ; l'agriculture productiviste par de grandes exploitations aux États-Unis, en Europe, au Brésil ou en Argentine.",
              "Comment : la première utilise peu de moyens (outils manuels, peu d'engrais) ; la seconde des machines, des engrais, des pesticides, l'irrigation et des semences sélectionnées.",
              "Pour qui : la première produit pour la famille et le marché local ; la seconde pour la vente et l'exportation, comme le soja du Brésil.",
              "Avantages et inconvénients : l'agriculture vivrière nourrit directement les familles mais elle est fragile face aux sécheresses ; l'agriculture productiviste obtient de hauts rendements mais elle pollue, consomme beaucoup d'eau et peut entraîner la déforestation.",
              "Conclusion : les deux modèles ont des limites ; le défi est d'inventer une agriculture qui produise assez tout en préservant l'environnement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sous-nutrition, malnutrition ou sécurité alimentaire ? a) Un enfant qui ne mange qu'un petit repas par jour. b) Un adolescent qui boit beaucoup de sodas, mange beaucoup de chips et devient obèse. c) Une famille qui a toujours accès à des repas variés et suffisants. d) Une population qui mange assez de riz pour ne pas avoir faim, mais manque de vitamines.",
              hint: "La sous-nutrition, c'est « pas assez » ; la malnutrition, c'est « mal équilibré », par manque ou par excès.",
              solution: [
                "a) Sous-nutrition : l'enfant ne mange pas assez.",
                "b) Malnutrition par excès de sucres et de graisses.",
                "c) Sécurité alimentaire : accès permanent à une nourriture suffisante et équilibrée.",
                "d) Malnutrition par carence : la quantité suffit, mais l'alimentation est déséquilibrée.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives et arrondies. Avant la révolution verte, un paysan indien récolte 1,5 tonne de blé par hectare sur ses 4 hectares. Avec de nouvelles semences, l'irrigation et des engrais, son rendement passe à 4,5 tonnes par hectare. a) Calculez sa production avant et après. b) Par combien sa production a-t-elle été multipliée ? c) Citez deux limites de la révolution verte.",
              hint: "Production = rendement × surface. Pour b), divisez la production après par la production avant.",
              solution: [
                "a) Avant : 1,5 × 4 = 6 tonnes. Après : 4,5 × 4 = 18 tonnes.",
                "b) 18 ÷ 6 = 3 : la production a été multipliée par 3.",
                "c) Par exemple : elle consomme beaucoup d'eau, ce qui fait baisser les nappes ; les engrais et les pesticides polluent ; les paysans les plus pauvres s'endettent pour acheter semences et engrais.",
                "Résultat : la production passe de 6 à 18 tonnes, soit 3 fois plus, mais avec des coûts pour l'environnement et pour les plus pauvres.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives et arrondies). Un pays de 20 millions d'habitants produit 4 millions de tonnes de céréales par an. Chaque habitant a besoin d'environ 200 kg de céréales par an. a) Calculez les besoins totaux du pays en tonnes. b) Faute de silos, 30 % des récoltes sont perdues avant d'être consommées. Quelle quantité est réellement disponible ? Le pays manque-t-il de céréales ? De combien ? c) Si les pertes tombaient à 10 % grâce à de meilleurs silos, quelle quantité serait disponible, et quel serait le manque ? d) En 2050, le pays devrait compter 30 millions d'habitants : quels seront ses besoins ? e) Proposez trois solutions pour que ce pays puisse nourrir sa population.",
              hint: "1 tonne = 1 000 kg. Pour les pertes, calculez d'abord ce qui est perdu, puis retirez-le de la production.",
              solution: [
                "a) 20 000 000 × 200 kg = 4 000 000 000 kg, soit 4 millions de tonnes.",
                "b) Pertes : 30 % de 4 millions = 1,2 million de tonnes. Disponible : 4 - 1,2 = 2,8 millions de tonnes. Le pays manque de 4 - 2,8 = 1,2 million de tonnes, alors qu'il produit autant que ses besoins.",
                "c) Pertes : 10 % de 4 millions = 0,4 million de tonnes. Disponible : 3,6 millions de tonnes. Manque : 4 - 3,6 = 0,4 million de tonnes seulement.",
                "d) 30 000 000 × 200 kg = 6 000 000 000 kg, soit 6 millions de tonnes.",
                "e) Par exemple : construire des silos pour réduire les pertes ; augmenter les rendements de façon durable (irrigation au goutte-à-goutte, semences adaptées, agroécologie) ; aider les petits paysans par le crédit ; maintenir la paix ; importer ou recevoir une aide alimentaire en cas de crise.",
                "Résultat : besoins de 4 millions de tonnes, manque de 1,2 million à cause des pertes, réduit à 0,4 million avec de meilleurs silos ; en 2050, il faudra 6 millions de tonnes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur l'alimentation dans le monde.",
            statements: [
              { text: "Selon la FAO, la planète produit assez de nourriture pour nourrir tous ses habitants.", true: true, why: "Le problème principal est l'accès à la nourriture (pauvreté, guerres, pertes), pas la quantité produite." },
              { text: "La faim s'explique seulement par le manque de pluie.", true: false, why: "La pauvreté et les guerres sont des causes majeures ; le climat aggrave les difficultés." },
              { text: "Une personne obèse peut souffrir de malnutrition.", true: true, why: "La malnutrition est une alimentation déséquilibrée, qui peut venir d'un excès de sucres et de graisses." },
              { text: "Les guerres sont une cause majeure des famines actuelles.", true: true, why: "Elles détruisent les récoltes, chassent les paysans et bloquent l'aide, comme au Soudan." },
              { text: "L'agriculture vivrière produit surtout pour l'exportation.", true: false, why: "Elle produit d'abord pour nourrir la famille et le marché local ; c'est l'agriculture commerciale qui exporte." },
              { text: "La révolution verte n'a eu que des effets positifs.", true: false, why: "Elle a augmenté les récoltes, mais elle a pollué, épuisé des nappes d'eau et endetté des paysans pauvres." },
              { text: "Produire un kilo de viande demande plus de terres et d'eau que produire un kilo de céréales.", true: true, why: "Il faut nourrir les animaux pendant longtemps, souvent avec des céréales ou du soja." },
            ],
          },
          quiz: [
            {
              q: "Combien d'habitants la Terre compte-t-elle depuis 2022 ?",
              options: ["Plus de 8 milliards", "Environ 3 milliards", "Environ 5 milliards", "Plus de 12 milliards"],
              answer: 0,
              why: "La population mondiale a dépassé 8 milliards d'habitants en novembre 2022, selon l'ONU.",
            },
            {
              q: "Qu'est-ce que la sous-nutrition ?",
              options: ["Une alimentation trop riche en sucres et en graisses", "Une alimentation insuffisante en quantité", "Une alimentation composée uniquement de produits biologiques", "Un régime choisi pour perdre du poids rapidement"],
              answer: 1,
              why: "La sous-nutrition, c'est la faim : on ne mange pas assez pour vivre en bonne santé.",
            },
            {
              q: "Quelle est aujourd'hui une cause majeure des famines ?",
              options: ["L'excès de pluie dans les déserts du monde", "Le trop grand nombre d'agriculteurs dans les pays riches", "L'interdiction de cultiver le blé en Afrique", "Les guerres"],
              answer: 3,
              why: "Les guerres détruisent les récoltes, chassent les paysans de leurs terres et empêchent l'aide alimentaire d'arriver.",
            },
            {
              q: "Qu'est-ce que la révolution verte ?",
              options: ["Un mouvement politique écologiste apparu en Europe au début des années 2000", "La plantation d'arbres pour reboiser les déserts", "La hausse des rendements par les semences, les engrais et l'irrigation", "Le passage de toutes les fermes à l'agriculture biologique"],
              answer: 2,
              why: "Lancée à partir des années 1960, notamment en Inde, elle a fortement augmenté les récoltes de blé et de riz.",
            },
            {
              q: "Quelle part de la nourriture produite est perdue ou gaspillée dans le monde, selon la FAO ?",
              options: ["Moins de 1 %", "Près d'un tiers", "Les trois quarts", "La moitié"],
              answer: 1,
              why: "Près d'un tiers de la nourriture est perdu après la récolte ou gaspillé dans les magasins et les foyers.",
            },
          ],
          trap: "Croire que la faim vient d'un manque de nourriture sur la planète : selon la FAO, la production mondiale suffirait ; la faim est surtout liée à la pauvreté, aux guerres et aux pertes. Ne confondez pas non plus sous-nutrition (pas assez) et malnutrition (déséquilibre).",
          method: "Pour un sujet sur l'alimentation, organisez votre réponse en trois temps : le constat (qui a faim, et où ?), les causes (pauvreté, guerres, climat, pertes), les solutions (produire plus, produire mieux, mieux répartir). Donnez au moins un exemple localisé dans chaque partie.",
        },
      ],
    },
    {
      id: 'monde-xvie-siecle',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'grandes-decouvertes',
          title: 'Les grandes découvertes et les empires européens',
          minutes: 35,
          objectives: [
            "Expliquer pourquoi et comment les Européens partent explorer le monde à la fin du XVe siècle.",
            "Situer dans le temps et dans l'espace les grands voyages de découverte (Dias, Colomb, Vasco de Gama, Magellan).",
            "Décrire la conquête de l'Amérique et ses conséquences pour les populations amérindiennes.",
            "Expliquer la formation des empires coloniaux espagnol et portugais.",
          ],
          course: [
            {
              heading: "Pourquoi partir ?",
              paragraphs: [
                "À la fin du XVe siècle, les Européens veulent se procurer directement les produits d'Asie : les épices (poivre, cannelle, clou de girofle), la soie et les pierres précieuses. Jusque-là, ces produits arrivent par des routes contrôlées par des marchands musulmans, puis sont revendus en Europe par les Vénitiens : à chaque étape, leur prix augmente. La prise de Constantinople par les Turcs ottomans, en 1453, renforce le contrôle ottoman sur la Méditerranée orientale. Trouver une route maritime vers l'Inde permettrait de s'enrichir.",
                "Les explorateurs cherchent aussi de l'or, veulent répandre le christianisme et sont poussés par la curiosité. Les savants savent depuis l'Antiquité que la Terre est ronde : on pense donc pouvoir atteindre l'Asie en naviguant vers l'ouest. Enfin, le Portugal et l'Espagne, tournés vers l'océan Atlantique, veulent devancer leurs rivaux.",
              ],
            },
            {
              heading: "De nouveaux outils pour naviguer",
              paragraphs: [
                "Les marins disposent de nouveaux moyens. La caravelle, un navire léger et maniable perfectionné par les Portugais, porte des voiles triangulaires, parfois associées à des voiles carrées, qui permettent de naviguer même quand le vent n'est pas favorable ; son gouvernail, fixé à l'arrière, la rend facile à diriger. La boussole, venue de Chine, indique le nord. L'astrolabe permet de calculer la latitude grâce à la hauteur du soleil ou des étoiles. Les portulans sont des cartes marines qui représentent les côtes et les ports.",
              ],
              box: { label: "Définition", text: "Caravelle : navire léger, rapide et maniable, utilisé par les explorateurs portugais et espagnols. Astrolabe : instrument qui mesure la hauteur des astres pour connaître la latitude." },
            },
            {
              heading: "Les grands voyages",
              paragraphs: [
                "Les Portugais longent les côtes de l'Afrique tout au long du XVe siècle. En 1488, Bartolomeu Dias franchit le cap de Bonne-Espérance, à la pointe sud de l'Afrique. En 1498, Vasco de Gama atteint Calicut, en Inde : la route maritime des épices est ouverte. En 1500, Pedro Álvares Cabral aborde les côtes du Brésil.",
                "Christophe Colomb, un navigateur génois, veut rejoindre l'Asie par l'ouest. Financé par les souverains espagnols, Isabelle de Castille et Ferdinand d'Aragon, il part en août 1492 avec trois navires et atteint, le 12 octobre 1492, une île des Bahamas. Il croit être arrivé aux Indes, d'où le nom d'« Indiens » donné aux habitants. Le continent sera nommé « Amérique » en l'honneur du navigateur Amerigo Vespucci, qui a compris qu'il s'agissait d'un nouveau continent.",
                "De 1519 à 1522, l'expédition de Fernand de Magellan, au service de l'Espagne, réalise le premier tour du monde. Magellan est tué aux Philippines en 1521 ; un seul navire, commandé par Juan Sebastián Elcano, revient en Espagne avec dix-huit survivants. Ce voyage montre que tous les océans communiquent et que la Terre est bien plus grande qu'on ne le pensait.",
              ],
              box: { label: "Repère", text: "1488 : Dias passe le cap de Bonne-Espérance. 1492 : Colomb atteint l'Amérique. 1498 : Vasco de Gama arrive en Inde. 1519-1522 : premier tour du monde, par l'expédition de Magellan." },
            },
            {
              heading: "La conquête de l'Amérique",
              paragraphs: [
                "Pour éviter les conflits, l'Espagne et le Portugal se partagent le monde à découvrir par le traité de Tordesillas, en 1494 : les terres situées à l'ouest d'une ligne tracée dans l'océan Atlantique reviennent à l'Espagne, celles situées à l'est au Portugal. C'est pourquoi on parle aujourd'hui portugais au Brésil et espagnol dans la plus grande partie du reste de l'Amérique latine.",
                "Les conquistadors, des aventuriers espagnols, soumettent les grands empires amérindiens. Hernán Cortés conquiert l'Empire aztèque, au Mexique, entre 1519 et 1521 ; Francisco Pizarro s'empare de l'Empire inca, au Pérou, à partir de 1532. Peu nombreux, ils profitent de leurs armes en acier, de leurs chevaux et de leurs canons, mais aussi de l'alliance de peuples ennemis des Aztèques et des divisions entre les Incas. Les maladies venues d'Europe affaiblissent aussi les Amérindiens.",
              ],
              box: { label: "Définition", text: "Conquistador : conquérant espagnol de l'Amérique au XVIe siècle. Empire colonial : ensemble de territoires conquis et dominés par un pays européen, qui les exploite à son profit." },
            },
            {
              heading: "Un monde transformé",
              paragraphs: [
                "Pour les Amérindiens, la conquête est une catastrophe. Les maladies apportées par les Européens, comme la variole, contre lesquelles ils ne sont pas immunisés, les violences et le travail forcé dans les plantations et les mines, comme la mine d'argent de Potosí, provoquent un effondrement de leur population au XVIe siècle. Le moine dominicain Bartolomé de Las Casas dénonce ces abus ; en 1550-1551, lors de la controverse de Valladolid, il défend les Amérindiens face à Juan Ginés de Sepúlveda.",
                "Pour remplacer la main-d'œuvre amérindienne, les Européens font venir de force des Africains réduits en esclavage : c'est le début de la traite atlantique. De nouveaux produits traversent l'océan : de l'Amérique vers l'Europe arrivent le maïs, la pomme de terre, la tomate et le cacao ; les Européens apportent en Amérique le cheval, le bœuf, le blé et la canne à sucre. L'or et l'argent d'Amérique enrichissent l'Espagne, et Séville et Lisbonne deviennent de grands ports. Les empires coloniaux espagnol et portugais sont nés.",
              ],
            },
          ],
          keyPoints: [
            "Causes : chercher une route maritime vers les épices d'Asie, de l'or, répandre le christianisme ; outils : caravelle, boussole, astrolabe.",
            "1488 Dias (cap de Bonne-Espérance), 1492 Colomb (Amérique), 1498 Vasco de Gama (Inde), 1519-1522 premier tour du monde.",
            "Traité de Tordesillas (1494) : partage du monde à découvrir entre l'Espagne et le Portugal.",
            "Cortés conquiert l'Empire aztèque (1519-1521), Pizarro l'Empire inca (à partir de 1532).",
            "Conséquences : effondrement de la population amérindienne, début de la traite atlantique, échanges de plantes et d'animaux, enrichissement de l'Espagne.",
          ],
          example: {
            statement: "Présentez le premier voyage de Christophe Colomb en répondant aux questions : qui, quand, pourquoi, où, avec quelles conséquences ?",
            solution: [
              "Qui : Christophe Colomb, navigateur génois, financé par les souverains espagnols Isabelle de Castille et Ferdinand d'Aragon.",
              "Quand : il part en août 1492 et atteint une île des Bahamas le 12 octobre 1492.",
              "Pourquoi : il veut rejoindre l'Asie et ses épices en naviguant vers l'ouest, car il sait que la Terre est ronde.",
              "Où : il arrive en réalité sur un continent inconnu des Européens, qu'on appellera plus tard l'Amérique ; il croit être aux Indes.",
              "Conséquences : l'Espagne conquiert une grande partie de l'Amérique et s'enrichit, tandis que les populations amérindiennes s'effondrent sous l'effet des maladies, des violences et du travail forcé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque navigateur à sa date et à son exploit. Navigateurs : Bartolomeu Dias, Christophe Colomb, Vasco de Gama, l'expédition de Magellan. Dates : 1488, 1492, 1498, 1519-1522. Exploits : premier tour du monde ; arrivée en Inde par la mer ; passage du cap de Bonne-Espérance ; arrivée en Amérique.",
              hint: "Les Portugais (Dias, Vasco de Gama) vont vers le sud et l'est, les expéditions espagnoles (Colomb, Magellan) vers l'ouest.",
              solution: [
                "Bartolomeu Dias : 1488, passage du cap de Bonne-Espérance.",
                "Christophe Colomb : 1492, arrivée en Amérique.",
                "Vasco de Gama : 1498, arrivée en Inde par la mer.",
                "Expédition de Magellan : 1519-1522, premier tour du monde.",
              ],
            },
            {
              level: 2,
              statement: "a) Combien d'années séparent la prise de Constantinople (1453) de l'arrivée de Colomb en Amérique ? b) À quel siècle appartiennent les années 1492 et 1522 ? c) Combien de temps dure l'expédition de Magellan, partie en septembre 1519 et revenue en septembre 1522 ? d) Combien d'années séparent l'arrivée de Colomb de la prise de Tenochtitlan, la capitale aztèque, en 1521 ? e) Expliquez pourquoi on parle portugais au Brésil.",
              hint: "Pour le siècle, enlevez les deux derniers chiffres et ajoutez 1. Pour e), pensez au traité de 1494.",
              solution: [
                "a) 1492 - 1453 = 39 ans.",
                "b) 1492 : 14 + 1 = 15, donc XVe siècle. 1522 : 15 + 1 = 16, donc XVIe siècle.",
                "c) De septembre 1519 à septembre 1522 : 3 ans.",
                "d) 1521 - 1492 = 29 ans.",
                "e) Par le traité de Tordesillas (1494), les terres situées à l'est de la ligne de partage reviennent au Portugal. Le Brésil, atteint par Cabral en 1500, se trouve de ce côté : il devient une colonie portugaise.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe argumenté de six à huit phrases pour répondre à la question : « Les grandes découvertes ont-elles eu les mêmes conséquences pour les Européens et pour les Amérindiens ? » Utilisez au moins quatre de ces mots : conquistador, empire colonial, variole, travail forcé, traite atlantique, Las Casas.",
              hint: "Organisez votre paragraphe en deux temps : d'abord ce que les Européens y gagnent, puis ce que les Amérindiens subissent. Terminez par une phrase de conclusion qui répond à la question.",
              solution: [
                "Introduction : « Les grandes découvertes n'ont pas eu les mêmes conséquences pour tous. »",
                "Pour les Européens : « Les Espagnols et les Portugais se constituent de vastes empires coloniaux. Les conquistadors, comme Cortés et Pizarro, soumettent les Aztèques et les Incas. L'or et l'argent d'Amérique enrichissent l'Espagne, et de nouveaux produits, comme le maïs, la pomme de terre ou le cacao, arrivent en Europe. »",
                "Pour les Amérindiens : « La conquête est une catastrophe : la variole et d'autres maladies, les violences et le travail forcé dans les mines provoquent l'effondrement de leur population. Le moine Las Casas dénonce ces abus. Pour remplacer cette main-d'œuvre, les Européens organisent la traite atlantique d'Africains réduits en esclavage. »",
                "Conclusion : « Les grandes découvertes enrichissent les Européens, mais elles détruisent les sociétés amérindiennes et entraînent la traite des Africains. »",
                "Vérification : le paragraphe emploie empire colonial, conquistador, variole, travail forcé, Las Casas et traite atlantique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Les Turcs ottomans prennent Constantinople.",
              "Dias franchit le cap de Bonne-Espérance.",
              "Colomb atteint une île des Bahamas.",
              "L'Espagne et le Portugal signent le traité de Tordesillas.",
              "Vasco de Gama arrive à Calicut, en Inde.",
              "Cortés prend Tenochtitlan, la capitale aztèque.",
              "Le dernier navire de l'expédition de Magellan rentre en Espagne.",
            ],
          },
          quiz: [
            {
              q: "Que recherchent d'abord les navigateurs européens à la fin du XVe siècle ?",
              options: ["De nouvelles terres pour installer leurs paysans trop nombreux", "Une route maritime vers les épices d'Asie", "Un passage vers le pôle Nord pour chasser la baleine", "Des alliés en Afrique contre le roi de France"],
              answer: 1,
              why: "Les épices et la soie d'Asie coûtent très cher à cause des intermédiaires ; une route maritime directe permettrait de s'enrichir.",
            },
            {
              q: "Qui atteint l'Inde par la mer en 1498 ?",
              options: ["Christophe Colomb", "Hernán Cortés", "Vasco de Gama", "Fernand de Magellan"],
              answer: 2,
              why: "Le Portugais Vasco de Gama contourne l'Afrique et atteint Calicut, en Inde, en 1498.",
            },
            {
              q: "Que décide le traité de Tordesillas en 1494 ?",
              options: ["Le partage du monde à découvrir entre l'Espagne et le Portugal", "L'interdiction de l'esclavage dans toutes les colonies espagnoles d'Amérique", "La fin de la guerre entre la France et l'Angleterre", "La création d'une route commerciale vers la Chine par la Russie"],
              answer: 0,
              why: "Une ligne tracée dans l'Atlantique attribue les terres de l'ouest à l'Espagne et celles de l'est au Portugal.",
            },
            {
              q: "Quelle est la principale cause de l'effondrement de la population amérindienne au XVIe siècle ?",
              options: ["Une grande famine provoquée par un hiver glacial", "Les guerres entre Aztèques et Incas", "Le départ des Amérindiens vers l'Europe", "Les maladies venues d'Europe"],
              answer: 3,
              why: "La variole et d'autres maladies, contre lesquelles les Amérindiens n'étaient pas immunisés, ont fait le plus de victimes, avec les violences et le travail forcé.",
            },
            {
              q: "D'où viennent la pomme de terre, la tomate et le maïs ?",
              options: ["D'Asie, par la route de la soie", "D'Afrique, par les caravanes du Sahara", "D'Amérique", "D'Europe du Nord, par la mer Baltique"],
              answer: 2,
              why: "Ces plantes sont cultivées en Amérique ; les Européens les découvrent et les rapportent après 1492.",
            },
          ],
          trap: "Croire que Christophe Colomb voulait découvrir un nouveau continent ou qu'il a prouvé que la Terre était ronde : il cherchait une route vers l'Asie par l'ouest, et la rotondité de la Terre était connue des savants depuis l'Antiquité.",
          method: "Sur une carte des grands voyages, repérez pour chaque navigateur le pays qui le finance (Portugal ou Espagne), le point de départ, la direction (sud et est pour les Portugais, ouest pour les Espagnols) et le point d'arrivée. Associez ensuite une date à chaque trajet.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'charles-quint-soliman',
          title: 'Le monde au temps de Charles Quint et Soliman le Magnifique',
          minutes: 30,
          objectives: [
            "Présenter l'empire de Charles Quint et expliquer comment il s'est formé.",
            "Décrire la puissance de l'Empire ottoman sous Soliman le Magnifique.",
            "Expliquer les rivalités et les alliances entre Charles Quint, François Ier et Soliman.",
            "Situer d'autres grands empires du monde au XVIe siècle.",
          ],
          course: [
            {
              heading: "Charles Quint, à la tête d'un immense empire",
              paragraphs: [
                "Charles de Habsbourg naît en 1500 à Gand, dans les Pays-Bas. Par une série d'héritages, il réunit des territoires immenses. De ses grands-parents paternels, l'empereur Maximilien de Habsbourg et Marie de Bourgogne, il reçoit les Pays-Bas, la Franche-Comté et les terres des Habsbourg en Autriche. De ses grands-parents maternels, Isabelle de Castille et Ferdinand d'Aragon, il hérite en 1516 de l'Espagne, des royaumes de Naples et de Sicile et des colonies d'Amérique.",
                "En 1519, il est élu empereur du Saint-Empire romain germanique, face au roi de France François Ier : il devient Charles Quint, c'est-à-dire Charles V. Avec la conquête de l'Amérique, son empire s'étend sur plusieurs continents, au point qu'on a dit que le soleil ne s'y couchait jamais. Mais il est difficile à gouverner : ses territoires sont dispersés, ont des langues et des lois différentes, et Charles Quint passe sa vie à voyager de l'un à l'autre.",
              ],
              box: { label: "Repère", text: "1500 : naissance de Charles Quint. 1516 : il devient roi d'Espagne. 1519 : il est élu empereur. 1555-1556 : il abdique et partage son empire. 1558 : il meurt dans un monastère espagnol." },
            },
            {
              heading: "Un empereur face à de nombreux adversaires",
              paragraphs: [
                "Charles Quint se veut le défenseur de la chrétienté catholique. Mais il affronte d'abord le roi de France François Ier, qui se sent encerclé par les terres des Habsbourg. Les deux souverains se font la guerre, surtout en Italie : en 1525, à la bataille de Pavie, François Ier est fait prisonnier et emmené à Madrid. Dans l'Empire, Charles Quint doit aussi faire face aux princes allemands passés au protestantisme à la suite de Martin Luther.",
                "Épuisé, Charles Quint abdique en 1555-1556 et partage son empire : son fils Philippe II reçoit l'Espagne, les colonies d'Amérique, les Pays-Bas et les possessions italiennes ; son frère Ferdinand garde les terres d'Autriche et lui succède comme empereur. Charles Quint se retire dans un monastère espagnol, où il meurt en 1558.",
              ],
            },
            {
              heading: "Soliman le Magnifique et l'Empire ottoman",
              paragraphs: [
                "Au même moment règne Soliman, sultan de l'Empire ottoman de 1520 à 1566. Les Européens l'appellent « le Magnifique » ; les Ottomans le surnomment « le Législateur », car il fait rédiger de nombreuses lois. Sa capitale, Istanbul, l'ancienne Constantinople prise par les Ottomans en 1453, est l'une des plus grandes villes du monde. L'architecte Sinan y construit pour lui la mosquée Süleymaniye.",
                "Soliman agrandit encore son empire, qui s'étend sur trois continents : l'Europe, l'Asie et l'Afrique. Il prend Belgrade en 1521, écrase les Hongrois à Mohács en 1526 et assiège Vienne, la grande ville des Habsbourg, en 1529, sans parvenir à la prendre. Il conquiert Bagdad en 1534, et sa flotte domine une grande partie de la Méditerranée.",
                "L'Empire ottoman est un empire musulman, mais il compte aussi de nombreux chrétiens et juifs. Ils peuvent pratiquer leur religion, à condition de payer un impôt particulier et de se soumettre à l'autorité du sultan. L'armée ottomane, avec ses janissaires, des soldats d'élite, est l'une des plus puissantes de son temps.",
              ],
              box: { label: "Définition", text: "Sultan : souverain de l'Empire ottoman, à la fois chef politique et chef de guerre. Janissaires : soldats d'élite de l'infanterie ottomane, au service direct du sultan." },
            },
            {
              heading: "Rivalités et alliances",
              paragraphs: [
                "Charles Quint et Soliman s'affrontent sur deux fronts : en Europe centrale, autour de la Hongrie et de Vienne, et en Méditerranée, où les flottes ottomanes et espagnoles se disputent les côtes de l'Afrique du Nord. En 1535, Charles Quint s'empare ainsi de Tunis.",
                "Pour affaiblir Charles Quint, leur ennemi commun, François Ier s'allie avec Soliman à partir des années 1530. Cette alliance entre un roi chrétien et un sultan musulman choque beaucoup de contemporains. En 1543, une flotte ottomane aide les Français à assiéger Nice, puis passe l'hiver à Toulon. Au XVIe siècle, les intérêts des États comptent donc parfois davantage que les différences de religion.",
              ],
              box: { label: "À retenir", text: "François Ier, roi chrétien, et Soliman, sultan musulman, s'allient contre Charles Quint : les intérêts des États l'emportent parfois sur les différences de religion." },
            },
            {
              heading: "Les autres grands empires du monde",
              paragraphs: [
                "Le XVIe siècle n'est pas seulement européen et ottoman. En Iran, les Safavides fondent un empire musulman chiite, rival des Ottomans sunnites. En Inde, Babur fonde en 1526 l'Empire moghol, qui devient très riche et puissant. En Chine, la dynastie Ming gouverne le pays le plus peuplé du monde ; elle limite le commerce avec les Européens, même si les Portugais obtiennent de s'installer à Macao.",
                "Ces empires sont reliés par les échanges : l'argent d'Amérique, extrait par les Espagnols, sert à acheter en Asie la soie, la porcelaine et les épices. Pour la première fois, le commerce relie tous les continents : les historiens parlent d'une première mondialisation.",
              ],
            },
          ],
          keyPoints: [
            "Charles Quint (né en 1500) hérite de l'Espagne, des Pays-Bas, de l'Autriche, de l'Italie du Sud et des colonies d'Amérique ; il est élu empereur en 1519.",
            "Son empire est immense mais dispersé ; il abdique en 1555-1556 et le partage entre son fils Philippe II et son frère Ferdinand.",
            "Soliman le Magnifique (1520-1566) agrandit l'Empire ottoman : Belgrade (1521), Mohács (1526), siège de Vienne (1529).",
            "François Ier, rival de Charles Quint (Pavie, 1525), s'allie avec Soliman : les intérêts des États priment sur la religion.",
            "Au XVIe siècle existent aussi les empires safavide (Iran), moghol (Inde) et Ming (Chine), reliés par une première mondialisation.",
          ],
          example: {
            statement: "Expliquez pourquoi l'empire de Charles Quint est à la fois très puissant et difficile à gouverner.",
            solution: [
              "Étape 1, la formation : Charles Quint réunit par héritage les Pays-Bas, la Franche-Comté, l'Autriche, l'Espagne, le sud de l'Italie et les colonies d'Amérique, puis il est élu empereur en 1519.",
              "Étape 2, la puissance : son empire s'étend sur plusieurs continents et l'argent d'Amérique l'enrichit ; il est le souverain le plus puissant d'Europe.",
              "Étape 3, les difficultés : ses territoires sont dispersés, parlent des langues différentes et ont leurs propres lois ; il doit combattre François Ier, Soliman et les princes protestants en même temps.",
              "Conclusion : trop vaste et trop menacé, l'empire épuise Charles Quint, qui abdique en 1555-1556 et le partage entre son fils et son frère.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez à chaque question. a) En quelle année Charles Quint est-il élu empereur ? b) De qui hérite-t-il l'Espagne ? c) Quelle est la capitale de l'Empire ottoman ? d) Quelle ville Soliman assiège-t-il sans succès en 1529 ? e) Quel roi de France est fait prisonnier à Pavie en 1525 ?",
              hint: "Relisez les deux premières parties du cours et la partie consacrée à Soliman.",
              solution: [
                "a) En 1519.",
                "b) De ses grands-parents maternels, Isabelle de Castille et Ferdinand d'Aragon.",
                "c) Istanbul, l'ancienne Constantinople.",
                "d) Vienne.",
                "e) François Ier.",
              ],
            },
            {
              level: 2,
              statement: "a) Combien d'années dure le règne de Soliman (1520-1566) ? b) Quel âge a Charles Quint lorsqu'il est élu empereur ? c) Combien d'années séparent la prise de Constantinople par les Ottomans (1453) du siège de Vienne (1529) ? d) Charles Quint abdique en 1556 : combien d'années a-t-il été empereur ? e) En vous aidant de ces calculs, montrez que Soliman et Charles Quint sont bien des contemporains.",
              hint: "Soustrayez la date la plus ancienne à la plus récente. Deux personnes sont contemporaines si elles vivent et règnent à la même époque.",
              solution: [
                "a) 1566 - 1520 = 46 ans.",
                "b) 1519 - 1500 = 19 ans.",
                "c) 1529 - 1453 = 76 ans.",
                "d) 1556 - 1519 = 37 ans.",
                "e) Soliman règne de 1520 à 1566 et Charles Quint est empereur de 1519 à 1556 : leurs règnes se recouvrent pendant plus de trente ans (de 1520 à 1556), ce sont donc des contemporains et des rivaux.",
              ],
            },
            {
              level: 3,
              statement: "Défi. En un paragraphe organisé de six à huit phrases, expliquez pourquoi l'alliance entre François Ier et Soliman le Magnifique est à la fois surprenante et logique pour les gens du XVIe siècle.",
              hint: "Organisez votre réponse en deux temps : pourquoi elle surprend (la religion), puis pourquoi elle est logique (l'ennemi commun et la géographie). Terminez par une phrase de conclusion.",
              solution: [
                "Introduction : « À partir des années 1530, le roi de France François Ier s'allie avec le sultan ottoman Soliman le Magnifique. »",
                "Une alliance surprenante : « François Ier est un roi chrétien, sacré à Reims, alors que Soliman est un sultan musulman dont les armées menacent l'Europe chrétienne : il a pris Belgrade, battu les Hongrois à Mohács et assiégé Vienne en 1529. Beaucoup de contemporains sont donc choqués. »",
                "Une alliance logique : « Les deux souverains ont un ennemi commun, Charles Quint. François Ier se sent encerclé par les terres des Habsbourg et a été fait prisonnier à Pavie en 1525 ; Soliman affronte Charles Quint en Hongrie et en Méditerranée. En s'alliant, ils l'obligent à combattre sur plusieurs fronts. En 1543, une flotte ottomane aide ainsi les Français à assiéger Nice et passe l'hiver à Toulon. »",
                "Conclusion : « Cette alliance montre qu'au XVIe siècle, les intérêts des États peuvent compter davantage que les différences de religion. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque personnage à sa description.",
            pairs: [
              { left: "Charles Quint", right: "Héritier des Habsbourg, élu empereur en 1519" },
              { left: "Soliman le Magnifique", right: "Sultan ottoman de 1520 à 1566" },
              { left: "François Ier", right: "Roi de France fait prisonnier à Pavie" },
              { left: "Philippe II", right: "Fils de Charles Quint, qui reçoit l'Espagne en 1556" },
              { left: "Babur", right: "Fondateur de l'Empire moghol en Inde" },
              { left: "Sinan", right: "Architecte de la mosquée Süleymaniye d'Istanbul" },
            ],
          },
          quiz: [
            {
              q: "En quelle année Charles Quint est-il élu empereur ?",
              options: ["1492", "1515", "1519", "1566"],
              answer: 2,
              why: "En 1519, les princes électeurs choisissent Charles de Habsbourg plutôt que François Ier : il devient l'empereur Charles Quint.",
            },
            {
              q: "Quelle est la capitale de l'Empire ottoman sous Soliman ?",
              options: ["Bagdad", "Istanbul", "Vienne", "Le Caire"],
              answer: 1,
              why: "Istanbul, l'ancienne Constantinople prise en 1453, est la capitale des sultans ottomans.",
            },
            {
              q: "Avec qui François Ier s'allie-t-il contre Charles Quint ?",
              options: ["Avec le roi d'Angleterre Henri VIII, pour toujours", "Avec le pape, qui lui promet l'Espagne", "Avec l'empereur moghol Babur", "Avec Soliman le Magnifique"],
              answer: 3,
              why: "À partir des années 1530, François Ier s'allie avec le sultan Soliman contre leur ennemi commun, Charles Quint.",
            },
            {
              q: "Quelle ville Soliman assiège-t-il sans succès en 1529 ?",
              options: ["Vienne", "Paris", "Rome", "Madrid"],
              answer: 0,
              why: "Après sa victoire de Mohács en 1526, Soliman assiège Vienne, ville des Habsbourg, en 1529, mais il échoue.",
            },
            {
              q: "Pourquoi l'empire de Charles Quint est-il difficile à gouverner ?",
              options: ["Il est trop petit pour entretenir une armée permanente", "Il ne comprend aucune ville importante ni aucun port", "Ses territoires sont dispersés et très variés", "Charles Quint refuse de quitter la ville de Gand"],
              answer: 2,
              why: "Ses territoires sont éloignés les uns des autres, avec des langues et des lois différentes, et il doit combattre sur plusieurs fronts.",
            },
          ],
          trap: "Confondre Charles Quint avec Charles V, roi de France de 1364 à 1380 : « Quint » signifie « cinquième », car il est le cinquième empereur de ce nom ; il est roi d'Espagne et empereur, jamais roi de France. Autre piège : croire qu'un roi chrétien ne s'alliait jamais avec un sultan musulman.",
          method: "Pour présenter un souverain, faites une fiche en cinq lignes : qui (nom, dates de règne), quoi (son territoire), comment (héritages, conquêtes), contre qui (ses rivaux), avec qui (ses alliés). Comparez ensuite les fiches de Charles Quint et de Soliman.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'humanisme-renaissance',
          title: 'L\'humanisme et la Renaissance',
          minutes: 30,
          objectives: [
            "Définir l'humanisme et présenter quelques humanistes (Érasme, Thomas More, Rabelais).",
            "Expliquer le rôle de l'imprimerie dans la diffusion des idées.",
            "Décrire les caractéristiques de l'art de la Renaissance à partir d'exemples.",
            "Identifier des nouveautés scientifiques du XVIe siècle (Copernic, Vésale).",
          ],
          course: [
            {
              heading: "L'humanisme : l'être humain au centre",
              paragraphs: [
                "Aux XVe et XVIe siècles, des savants européens, qu'on appelle les humanistes, redécouvrent les textes de l'Antiquité grecque et romaine. Ils les étudient dans leur langue d'origine, le latin, le grec et l'hébreu, pour mieux les comprendre. Ils veulent retrouver la sagesse des Anciens et la mettre au service de leur époque.",
                "Les humanistes placent l'être humain au centre de leur réflexion : ils pensent que chacun peut progresser grâce à l'éducation et à son esprit critique. Ils restent chrétiens, mais veulent relire la Bible dans ses textes originaux. Érasme, né à Rotterdam et surnommé le « prince des humanistes », publie en 1511 l'Éloge de la folie, où il se moque des abus de son temps. L'Anglais Thomas More imagine dans Utopie (1516) une société idéale. En France, Rabelais décrit dans Gargantua (1534) une éducation qui forme à la fois le corps et l'esprit.",
              ],
              box: { label: "Définition", text: "Humanisme : mouvement intellectuel européen des XVe et XVIe siècles qui redécouvre les textes antiques, fait confiance à l'éducation et à l'esprit critique et place l'être humain au centre de la réflexion." },
            },
            {
              heading: "L'imprimerie, une révolution",
              paragraphs: [
                "Vers 1450, à Mayence, en Allemagne, Gutenberg met au point l'imprimerie à caractères mobiles en métal. Chaque lettre est un petit bloc que l'on assemble pour composer une page ; on encre la page, puis on la presse sur le papier. Les mêmes lettres peuvent ensuite resservir pour d'autres pages. Le premier grand livre imprimé est une Bible, vers 1455. Des procédés d'impression existaient déjà en Chine et en Corée, mais c'est l'invention de Gutenberg qui se répand en Europe.",
                "Avant l'imprimerie, les livres étaient des manuscrits copiés à la main, souvent par des moines : il fallait des mois pour en réaliser un seul, et ils coûtaient très cher. Désormais, on peut produire rapidement des centaines d'exemplaires identiques. À la fin du XVe siècle, des ateliers d'imprimerie existent dans plus de deux cents villes d'Europe, comme Venise, Paris ou Lyon. Les idées des humanistes, puis celles de Luther, circulent beaucoup plus vite et plus loin.",
              ],
              box: { label: "Repère", text: "Vers 1450 : Gutenberg invente l'imprimerie à caractères mobiles à Mayence. Vers 1455 : impression de la Bible de Gutenberg." },
            },
            {
              heading: "La Renaissance artistique, née en Italie",
              paragraphs: [
                "On appelle Renaissance le renouveau des arts et des lettres qui commence en Italie au XVe siècle, notamment à Florence, puis gagne toute l'Europe au XVIe siècle. Les artistes s'inspirent de l'Antiquité : colonnes, coupoles, statues aux proportions harmonieuses. Ils utilisent la perspective, qui donne l'illusion de la profondeur sur une surface plane, et la peinture à l'huile, qui permet des couleurs nuancées.",
                "Les artistes travaillent pour des mécènes, des personnes riches et puissantes qui les protègent et leur commandent des œuvres : les Médicis à Florence, les papes à Rome, puis des rois comme François Ier. Léonard de Vinci, peintre de La Joconde, est aussi ingénieur et savant ; invité par François Ier, il finit sa vie en France, à Amboise, en 1519. Michel-Ange sculpte le David et peint le plafond de la chapelle Sixtine, à Rome. Raphaël peint L'École d'Athènes, qui réunit les grands philosophes grecs.",
                "En France, la Renaissance se voit dans les châteaux de la Loire, comme Chambord, commencé en 1519 sous François Ier, et au château de Fontainebleau, décoré par des artistes italiens. Les grands artistes ne sont plus considérés comme de simples artisans : ils deviennent célèbres et recherchés par les princes.",
              ],
              box: { label: "Définition", text: "Mécène : personne riche et puissante qui protège des artistes et leur commande des œuvres. Perspective : technique qui donne l'illusion de la profondeur sur une surface plane." },
            },
            {
              heading: "Un nouveau regard sur le monde et sur le corps",
              paragraphs: [
                "L'esprit critique des humanistes touche aussi les sciences. En 1543, l'astronome polonais Nicolas Copernic affirme que la Terre tourne autour du Soleil, et non l'inverse : c'est l'héliocentrisme. Cette idée contredit ce que les savants enseignaient depuis l'Antiquité. Au début du XVIIe siècle, Galilée la défend grâce à ses observations au télescope, ce qui lui vaut d'être condamné par l'Église en 1633.",
                "La même année 1543, le médecin André Vésale publie un grand livre d'anatomie illustré, fondé sur la dissection de corps humains. Le chirurgien français Ambroise Paré améliore les soins aux blessés de guerre, par exemple en ligaturant (en nouant) les vaisseaux sanguins au lieu de les brûler. L'observation et l'expérience prennent une place plus grande dans la recherche du savoir.",
              ],
              box: { label: "À retenir", text: "Humanisme et Renaissance : redécouverte de l'Antiquité, confiance dans l'être humain et l'éducation, diffusion des idées par l'imprimerie, art de la perspective, observation scientifique (Copernic, Vésale)." },
            },
          ],
          keyPoints: [
            "Les humanistes (Érasme, Thomas More, Rabelais) redécouvrent les textes antiques et font confiance à l'éducation et à l'esprit critique.",
            "Vers 1450, Gutenberg invente l'imprimerie à caractères mobiles : les livres et les idées se diffusent vite.",
            "La Renaissance artistique naît en Italie (Florence) au XVe siècle : perspective, modèles antiques, mécénat.",
            "Grands artistes : Léonard de Vinci, Michel-Ange, Raphaël ; en France, les châteaux de la Loire (Chambord).",
            "Sciences : Copernic (la Terre tourne autour du Soleil, 1543), Vésale (anatomie, 1543), Ambroise Paré.",
          ],
          example: {
            statement: "Montrez que l'humanisme, l'imprimerie et la Renaissance artistique sont liés.",
            solution: [
              "Étape 1, l'humanisme fournit les idées : les humanistes redécouvrent les textes antiques et placent l'être humain au centre.",
              "Étape 2, l'imprimerie diffuse ces idées : grâce à l'invention de Gutenberg, vers 1450, les œuvres antiques et les livres d'Érasme ou de Rabelais sont imprimés en grand nombre et lus dans toute l'Europe.",
              "Étape 3, les artistes s'inspirent des mêmes modèles : comme les humanistes, les peintres et les sculpteurs de la Renaissance imitent l'Antiquité et mettent en valeur le corps humain, comme Michel-Ange avec le David.",
              "Conclusion : l'humanisme, l'imprimerie et la Renaissance s'appuient les uns sur les autres et transforment ensemble la culture européenne aux XVe et XVIe siècles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque personnage à son œuvre ou à sa découverte. Personnages : Gutenberg, Érasme, Léonard de Vinci, Copernic, Michel-Ange, Rabelais. Œuvres ou découvertes : a) La Joconde ; b) l'Éloge de la folie ; c) l'imprimerie à caractères mobiles ; d) Gargantua ; e) le plafond de la chapelle Sixtine ; f) la Terre tourne autour du Soleil.",
              hint: "Distinguez les écrivains humanistes, les artistes et les savants ou inventeurs.",
              solution: [
                "Gutenberg : c), l'imprimerie à caractères mobiles.",
                "Érasme : b), l'Éloge de la folie.",
                "Léonard de Vinci : a), La Joconde.",
                "Copernic : f), la Terre tourne autour du Soleil.",
                "Michel-Ange : e), le plafond de la chapelle Sixtine.",
                "Rabelais : d), Gargantua.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives et arrondies. Un moine copiste met un an pour recopier une Bible à la main. Un atelier d'imprimerie produit 180 Bibles en 2 ans. a) Combien d'années faudrait-il à un seul copiste pour produire 180 Bibles ? b) Combien de copistes faudrait-il pour produire 180 Bibles en 2 ans ? c) Expliquez deux conséquences de l'imprimerie sur la diffusion des idées.",
              hint: "Pour b), demandez-vous combien de Bibles un copiste fait en 2 ans, puis divisez 180 par ce nombre.",
              solution: [
                "a) 180 Bibles à raison d'une par an : 180 ans.",
                "b) En 2 ans, un copiste fait 2 Bibles. 180 ÷ 2 = 90 copistes.",
                "c) Les livres deviennent beaucoup plus nombreux et moins chers, donc plus de personnes peuvent lire. Les idées nouvelles (humanistes, puis protestantes) se répandent très vite dans toute l'Europe, et les textes sont identiques d'un exemplaire à l'autre.",
                "Résultat : il faudrait 180 ans à un copiste, ou 90 copistes travaillant ensemble, pour faire ce qu'un atelier d'imprimerie réalise en 2 ans.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un texte écrit pour l'exercice, qui résume librement l'éducation de Gargantua racontée par Rabelais : « Avec son nouveau maître, Ponocrates, Gargantua se lève très tôt. Il écoute la lecture de passages de la Bible, observe le ciel et les astres, étudie de nombreux livres et en discute avec son maître. Il apprend l'arithmétique en jouant, pratique la musique, monte à cheval, nage et s'entraîne à la lutte. En promenade, il observe les plantes et les arbres. Auparavant, d'anciens maîtres lui avaient fait apprendre des livres par cœur pendant des années, sans qu'il comprenne rien. » a) Relevez les matières intellectuelles et les activités physiques. b) Quelle idée humaniste ce programme illustre-t-il ? c) Que critique Rabelais à travers les anciens maîtres ? d) Retrouvez dans le texte une place donnée à l'observation.",
              hint: "Rappelez-vous ce que pensent les humanistes de l'éducation et de l'esprit critique.",
              solution: [
                "a) Matières intellectuelles : la Bible, l'astronomie (les astres), la lecture de livres, l'arithmétique, la musique, l'étude des plantes. Activités physiques : l'équitation, la natation, la lutte.",
                "b) L'idée humaniste que l'éducation doit former à la fois l'esprit et le corps, et faire de l'élève un être humain complet et libre de réfléchir.",
                "c) Il critique un enseignement fondé sur la répétition par cœur, sans compréhension, qui ne développe pas l'esprit critique.",
                "d) Gargantua observe le ciel et les astres, et il observe les plantes et les arbres en promenade : il apprend aussi par l'observation de la nature, pas seulement dans les livres.",
                "Conclusion : ce programme résume l'idéal humaniste d'une éducation complète, active et fondée sur la compréhension.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur l'humanisme et la Renaissance.",
            statements: [
              { text: "Les humanistes redécouvrent les textes de l'Antiquité grecque et romaine.", true: true, why: "Ils les étudient dans leur langue d'origine, le latin, le grec et l'hébreu." },
              { text: "Les humanistes rejettent la religion chrétienne.", true: false, why: "Ils restent chrétiens et veulent relire la Bible dans ses textes originaux." },
              { text: "Gutenberg met au point l'imprimerie à caractères mobiles vers 1450.", true: true, why: "Il l'invente à Mayence ; la Bible de Gutenberg est imprimée vers 1455." },
              { text: "Avant l'imprimerie, il n'existait aucun livre en Europe.", true: false, why: "Il existait des manuscrits copiés à la main, rares et très chers." },
              { text: "La Renaissance artistique commence en Italie.", true: true, why: "Elle naît au XVe siècle, notamment à Florence, puis gagne toute l'Europe." },
              { text: "Un mécène est un peintre spécialiste des fresques.", true: false, why: "Un mécène est une personne riche qui protège les artistes et leur commande des œuvres." },
              { text: "Copernic affirme que la Terre tourne autour du Soleil.", true: true, why: "Il présente cette idée, l'héliocentrisme, dans un livre publié en 1543." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un humaniste au XVIe siècle ?",
              options: ["Un médecin qui soigne gratuitement les pauvres", "Un savant qui étudie les textes antiques", "Un moine qui copie des manuscrits dans son abbaye", "Un soldat qui protège les villes italiennes"],
              answer: 1,
              why: "Les humanistes étudient les textes de l'Antiquité et font confiance à l'éducation et à l'esprit critique.",
            },
            {
              q: "Qui met au point l'imprimerie à caractères mobiles en Europe ?",
              options: ["Gutenberg", "Léonard de Vinci", "Érasme", "Copernic"],
              answer: 0,
              why: "Gutenberg invente l'imprimerie à caractères mobiles en métal vers 1450, à Mayence.",
            },
            {
              q: "Dans quel pays la Renaissance artistique commence-t-elle ?",
              options: ["En France", "En Espagne", "En Angleterre", "En Italie"],
              answer: 3,
              why: "Elle naît en Italie au XVe siècle, notamment à Florence, avant de gagner le reste de l'Europe.",
            },
            {
              q: "Qu'est-ce que la perspective en peinture ?",
              options: ["L'art de peindre uniquement des portraits", "Une technique qui donne l'illusion de profondeur", "Le fait de peindre seulement des scènes religieuses", "Un vernis qui protège les tableaux"],
              answer: 1,
              why: "La perspective permet de représenter la profondeur sur une surface plane, comme si l'on regardait par une fenêtre.",
            },
            {
              q: "Que montre Copernic dans son livre publié en 1543 ?",
              options: ["Que la Terre est plate et immobile au centre", "Que le Soleil tourne autour de la Terre chaque jour", "Que la Terre tourne autour du Soleil", "Que la Lune est plus grande que la Terre"],
              answer: 2,
              why: "Copernic défend l'héliocentrisme : c'est la Terre qui tourne autour du Soleil, et non l'inverse.",
            },
          ],
          trap: "Croire que les humanistes rejettent la religion : ils restent chrétiens et veulent au contraire relire la Bible dans ses textes d'origine. Ne confondez pas non plus l'humanisme (un mouvement d'idées) et la Renaissance (un renouveau des arts et des lettres).",
          method: "Pour décrire une œuvre de la Renaissance, procédez en trois étapes : présenter (artiste, titre, date, commanditaire), décrire (sujet, composition, perspective), puis interpréter (en quoi l'œuvre s'inspire de l'Antiquité et met l'être humain en valeur).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reformes-guerres-religion',
          title: 'Les réformes religieuses et les guerres de Religion',
          minutes: 35,
          objectives: [
            "Expliquer les causes de la Réforme protestante et les idées de Luther et de Calvin.",
            "Distinguer catholiques et protestants par leurs croyances et leurs pratiques.",
            "Décrire la réponse de l'Église catholique : le concile de Trente.",
            "Raconter les guerres de Religion en France, du massacre de Wassy à l'édit de Nantes.",
          ],
          course: [
            {
              heading: "Une Église critiquée",
              paragraphs: [
                "Au début du XVIe siècle, de nombreux chrétiens critiquent l'Église catholique. Certains prêtres connaissent mal la religion, certains évêques vivent dans le luxe et ne résident pas dans leur diocèse. Surtout, l'Église vend des indulgences : en échange d'argent, elle promet aux fidèles de réduire les peines dues pour leurs péchés après la mort. Une partie de cet argent sert à reconstruire la basilique Saint-Pierre de Rome. Les humanistes, qui relisent la Bible, constatent aussi que certaines pratiques n'y figurent pas.",
              ],
              box: { label: "Définition", text: "Indulgence : remise, accordée par l'Église, d'une partie de la peine due pour les péchés. Au début du XVIe siècle, on peut l'obtenir en versant de l'argent, ce qui choque beaucoup de chrétiens." },
            },
            {
              heading: "Luther et Calvin : la Réforme protestante",
              paragraphs: [
                "En 1517, Martin Luther, un moine allemand professeur à Wittenberg, rend publiques 95 thèses qui dénoncent la vente des indulgences. Pour lui, l'être humain est sauvé par sa seule foi en Dieu, et non par l'argent ou par ses bonnes actions. La seule autorité est la Bible, que chacun doit pouvoir lire : il la traduit en allemand. Excommunié par le pape en 1521, il est protégé par des princes allemands. Grâce à l'imprimerie, ses idées se diffusent très vite.",
                "Ses partisans sont bientôt appelés protestants. Le Français Jean Calvin, un humaniste, adopte ces idées et s'installe à Genève, en Suisse, où il organise une Église réformée très stricte. Ses fidèles français sont appelés huguenots. En Angleterre, le roi Henri VIII rompt avec le pape en 1534 et devient le chef de l'Église d'Angleterre : c'est la naissance de l'anglicanisme.",
              ],
            },
            {
              heading: "Deux façons d'être chrétien",
              paragraphs: [
                "Catholiques et protestants sont tous chrétiens, mais leurs croyances diffèrent. Les catholiques reconnaissent l'autorité du pape et gardent sept sacrements, comme le baptême, l'eucharistie (au cœur de la messe) ou le mariage ; ils honorent la Vierge Marie et prient les saints. Les protestants ne reconnaissent pas l'autorité du pape et ne gardent que deux sacrements, le baptême et la cène ; ils ne prient pas les saints.",
                "Les lieux de culte sont aussi différents. Les églises catholiques sont richement décorées de statues, de tableaux et de vitraux, et la messe est dite en latin par un prêtre, qui ne se marie pas. Les temples protestants sont sobres, sans images, avec au centre la chaire d'où le pasteur explique la Bible, lue dans la langue du peuple. Les pasteurs peuvent se marier.",
              ],
              box: { label: "À retenir", text: "Catholiques : pape, prêtres non mariés, sept sacrements, culte de la Vierge et des saints, messe en latin, églises décorées. Protestants : pas de pape, pasteurs pouvant se marier, deux sacrements, Bible seule autorité lue en langue courante, temples sobres." },
            },
            {
              heading: "La réponse catholique : le concile de Trente",
              paragraphs: [
                "L'Église catholique réagit : c'est la Réforme catholique, parfois appelée Contre-Réforme. De 1545 à 1563, le pape réunit les évêques au concile de Trente, dans le nord de l'Italie actuelle. Le concile réaffirme les croyances catholiques : l'autorité du pape, les sept sacrements, le culte de la Vierge et des saints. Mais il corrige aussi les abus : les évêques doivent résider dans leur diocèse, et des séminaires sont créés pour mieux former les prêtres.",
                "De nouveaux ordres religieux, comme les jésuites (la Compagnie de Jésus, fondée par Ignace de Loyola et approuvée par le pape en 1540), ouvrent des collèges et partent en mission jusqu'en Asie et en Amérique. L'art baroque, avec ses églises très décorées, cherche à émouvoir les fidèles et à montrer la gloire de l'Église catholique.",
              ],
              box: { label: "Définition", text: "Concile : assemblée d'évêques réunie pour décider des croyances et des règles de l'Église. Le concile de Trente (1545-1563) réaffirme la doctrine catholique et réforme le clergé." },
            },
            {
              heading: "Les guerres de Religion en France (1562-1598)",
              paragraphs: [
                "En France, les protestants deviennent nombreux, surtout dans le sud et dans l'ouest, et dans une partie de la noblesse. Les rois veulent maintenir l'unité religieuse du royaume, selon la formule « une foi, une loi, un roi ». En 1562, le massacre de protestants réunis pour leur culte à Wassy, en Champagne, par les troupes du duc de Guise, déclenche une série de huit guerres de Religion.",
                "Le moment le plus sanglant est le massacre de la Saint-Barthélemy, le 24 août 1572. À Paris, quelques jours après le mariage du protestant Henri de Navarre avec la sœur du roi Charles IX, les chefs protestants venus pour la fête sont assassinés. La tuerie gagne ensuite toute la ville, puis plusieurs villes de province : il y a plusieurs milliers de morts.",
                "Henri de Navarre devient roi en 1589 sous le nom d'Henri IV. Pour être accepté par la majorité catholique, il se convertit au catholicisme en 1593. En 1598, il signe l'édit de Nantes : le catholicisme reste la religion du royaume, mais les protestants obtiennent la liberté de conscience, le droit de célébrer leur culte dans certains lieux et des places fortes pour leur sécurité. Les guerres de Religion prennent fin.",
              ],
              box: { label: "Repère", text: "1517 : 95 thèses de Luther. 1545-1563 : concile de Trente. 1562 : massacre de Wassy. 24 août 1572 : massacre de la Saint-Barthélemy. 1598 : édit de Nantes." },
            },
          ],
          keyPoints: [
            "1517 : Luther dénonce la vente des indulgences ; pour lui, la foi seule sauve et la Bible est la seule autorité.",
            "Calvin organise une Église réformée à Genève ; ses fidèles français sont les huguenots. Henri VIII fonde l'anglicanisme (1534).",
            "Catholiques et protestants sont chrétiens, mais diffèrent sur le pape, les sacrements (7 ou 2), les saints et le culte.",
            "Le concile de Trente (1545-1563) réaffirme la doctrine catholique et réforme le clergé ; les jésuites enseignent et partent en mission.",
            "Guerres de Religion en France : Wassy (1562), Saint-Barthélemy (24 août 1572), édit de Nantes (1598).",
          ],
          example: {
            statement: "Expliquez pourquoi Luther s'oppose à l'Église catholique et ce qu'il propose.",
            solution: [
              "Étape 1, le contexte : au début du XVIe siècle, l'Église est critiquée pour les abus de certains clercs et surtout pour la vente des indulgences.",
              "Étape 2, la protestation : en 1517, Luther rend publiques 95 thèses qui dénoncent les indulgences ; selon lui, on ne peut pas acheter son salut.",
              "Étape 3, ses idées : l'être humain est sauvé par sa seule foi ; la Bible est la seule autorité, et chacun doit pouvoir la lire dans sa langue (il la traduit en allemand) ; il rejette l'autorité du pape et ne garde que deux sacrements.",
              "Étape 4, les suites : excommunié en 1521, il est protégé par des princes allemands, et l'imprimerie diffuse ses idées dans toute l'Europe.",
              "Conclusion : Luther veut revenir à ce qu'il pense être le vrai message de la Bible ; il fonde sans le vouloir une nouvelle branche du christianisme, le protestantisme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Catholique ou protestant ? a) Reconnaît l'autorité du pape. b) Ne garde que deux sacrements. c) Se rassemble dans un temple sobre, autour d'une chaire. d) Assiste à la messe en latin. e) Son pasteur peut se marier. f) Prie la Vierge Marie et les saints.",
              hint: "Aidez-vous de l'encadré « À retenir » de la partie « Deux façons d'être chrétien ».",
              solution: [
                "a) Catholique.",
                "b) Protestant (le baptême et la cène).",
                "c) Protestant.",
                "d) Catholique.",
                "e) Protestant.",
                "f) Catholique.",
              ],
            },
            {
              level: 2,
              statement: "a) Combien d'années durent les guerres de Religion en France (1562-1598) ? b) Combien d'années séparent les 95 thèses de Luther (1517) de l'édit de Nantes (1598) ? c) Combien d'années dure le concile de Trente (1545-1563) ? d) Rangez dans l'ordre chronologique : la Saint-Barthélemy, l'édit de Nantes, le massacre de Wassy, la conversion d'Henri IV au catholicisme.",
              hint: "Soustrayez la date la plus ancienne à la plus récente. Pour d), retrouvez d'abord la date de chaque événement.",
              solution: [
                "a) 1598 - 1562 = 36 ans.",
                "b) 1598 - 1517 = 81 ans.",
                "c) 1563 - 1545 = 18 ans.",
                "d) Massacre de Wassy (1562), Saint-Barthélemy (1572), conversion d'Henri IV (1593), édit de Nantes (1598).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe de six à huit phrases pour expliquer comment la France passe de la guerre à la paix religieuse entre 1562 et 1598. Utilisez au moins cinq de ces mots : huguenots, Wassy, Saint-Barthélemy, Henri IV, conversion, édit de Nantes, liberté de conscience.",
              hint: "Suivez l'ordre chronologique : le début des guerres, le moment le plus violent, puis le retour de la paix. Donnez une date pour chaque étape.",
              solution: [
                "Début : « Au XVIe siècle, une partie des Français devient protestante : on les appelle les huguenots. Les rois veulent garder l'unité religieuse du royaume. En 1562, le massacre de protestants à Wassy par les troupes du duc de Guise déclenche les guerres de Religion. »",
                "Le moment le plus violent : « Le 24 août 1572, lors du massacre de la Saint-Barthélemy, des milliers de protestants sont tués à Paris puis en province. »",
                "La paix : « Le protestant Henri de Navarre devient roi en 1589 sous le nom d'Henri IV. Sa conversion au catholicisme, en 1593, lui permet d'être accepté par la majorité catholique. En 1598, il signe l'édit de Nantes, qui accorde aux protestants la liberté de conscience et le droit de célébrer leur culte dans certains lieux. »",
                "Conclusion : « Après trente-six ans de guerre, l'édit de Nantes ramène la paix en organisant la coexistence de deux religions dans le royaume. »",
                "Vérification : le paragraphe emploie huguenots, Wassy, Saint-Barthélemy, Henri IV, conversion, édit de Nantes et liberté de conscience.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Luther rend publiques ses 95 thèses.",
              "Henri VIII rompt avec le pape et devient chef de l'Église d'Angleterre.",
              "Ouverture du concile de Trente.",
              "Massacre de protestants à Wassy.",
              "Massacre de la Saint-Barthélemy.",
              "Henri IV se convertit au catholicisme.",
              "Henri IV signe l'édit de Nantes.",
            ],
          },
          quiz: [
            {
              q: "Que dénonce Luther dans ses 95 thèses en 1517 ?",
              options: ["La traduction de la Bible en allemand par les moines", "La vente des indulgences", "Le mariage des prêtres catholiques en Allemagne", "L'invention de l'imprimerie"],
              answer: 1,
              why: "Luther refuse qu'on puisse obtenir, contre de l'argent, la remise des peines dues aux péchés : pour lui, seule la foi sauve.",
            },
            {
              q: "Combien de sacrements les protestants conservent-ils ?",
              options: ["Deux", "Sept", "Cinq", "Aucun"],
              answer: 0,
              why: "Les protestants ne gardent que le baptême et la cène, alors que les catholiques en conservent sept.",
            },
            {
              q: "Quel est le but principal du concile de Trente (1545-1563) ?",
              options: ["Reconnaître Luther comme nouveau chef de toute la chrétienté", "Partager le Nouveau Monde entre l'Espagne et le Portugal", "Réaffirmer la doctrine catholique et réformer l'Église", "Organiser une croisade vers Jérusalem"],
              answer: 2,
              why: "Le concile réaffirme les croyances catholiques (pape, sept sacrements, saints) et corrige les abus du clergé.",
            },
            {
              q: "Que se passe-t-il le 24 août 1572 ?",
              options: ["L'édit de Nantes est signé à Paris", "Le massacre de la Saint-Barthélemy", "Henri IV se convertit au catholicisme", "Luther est excommunié par le pape"],
              answer: 1,
              why: "Ce jour-là, les chefs protestants sont assassinés à Paris, puis la tuerie s'étend : plusieurs milliers de protestants sont tués.",
            },
            {
              q: "Que garantit l'édit de Nantes aux protestants en 1598 ?",
              options: ["Le droit de devenir la seule religion officielle du royaume", "L'interdiction totale de leur culte dans tout le royaume", "L'obligation de s'exiler en Suisse ou en Angleterre", "La liberté de conscience et un culte limité"],
              answer: 3,
              why: "Le catholicisme reste la religion du royaume, mais les protestants peuvent croire librement et célébrer leur culte dans certains lieux.",
            },
          ],
          trap: "Croire que les protestants ne sont pas chrétiens : catholiques et protestants sont tous chrétiens, ils se séparent sur l'autorité du pape, le nombre de sacrements et le rôle de la Bible. Ne confondez pas non plus le temple protestant et l'église catholique.",
          method: "Pour réviser, faites un tableau à deux colonnes (catholiques, protestants) et cinq lignes : chef de l'Église, clergé, sacrements, lieu de culte, langue du culte. Apprenez ensuite une frise de cinq dates, de 1517 à 1598, et récitez-la de mémoire.",
        },
      ],
    },
  ],
}
