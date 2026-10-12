import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-emc-5e',
  chapters: [
    {
      id: 'byzance-carolingiens',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'empire-byzantin',
          title: 'L\'Empire byzantin, héritier de Rome',
          minutes: 25,
          objectives: [
            "Situer dans le temps et dans l'espace l'Empire byzantin et sa capitale, Constantinople.",
            "Expliquer en quoi l'Empire byzantin est l'héritier de l'Empire romain.",
            "Décrire le pouvoir de l'empereur byzantin, le basileus, et ses liens avec l'Église.",
            "Identifier les grandes réalisations du règne de Justinien.",
          ],
          course: [
            {
              heading: "De Rome à Constantinople",
              paragraphs: [
                "Au IVe siècle, l'Empire romain est immense et difficile à défendre. En 330, l'empereur Constantin, le premier empereur à se convertir au christianisme, inaugure une nouvelle capitale sur le site de l'ancienne cité grecque de Byzance, au bord du détroit du Bosphore. Il lui donne son nom : Constantinople, « la ville de Constantin ». C'est aujourd'hui Istanbul, en Turquie.",
                "En 395, à la mort de l'empereur Théodose, l'Empire est partagé entre ses deux fils : l'Empire romain d'Occident, à l'ouest, et l'Empire romain d'Orient, autour de Constantinople. L'Empire d'Occident disparaît en 476, sous les coups des peuples germaniques. L'Empire d'Orient, lui, survit pendant près de mille ans encore, jusqu'à la prise de Constantinople par les Turcs ottomans en 1453.",
                "Les historiens l'appellent « Empire byzantin », d'après l'ancien nom de la ville, mais ses habitants se disaient « Romains ». Ils gardent le droit romain, l'organisation de l'État et le titre d'empereur. La langue, elle, est différente : à l'est, on parle surtout grec, et le grec remplace peu à peu le latin dans l'administration au VIIe siècle.",
              ],
              box: { label: "Repère", text: "330 : inauguration de Constantinople. 395 : partage de l'Empire romain. 476 : fin de l'Empire romain d'Occident. 527-565 : règne de Justinien. 1453 : prise de Constantinople par les Turcs ottomans, fin de l'Empire byzantin." },
            },
            {
              heading: "Constantinople, une capitale protégée et ouverte",
              paragraphs: [
                "Constantinople est bâtie sur une presqu'île, entre la mer de Marmara, la Corne d'Or (un port naturel très abrité) et le Bosphore. La mer la protège sur deux côtés. Du côté de la terre, de puissantes murailles construites au Ve siècle, précédées d'un fossé, la défendent. Pendant des siècles, elles résistent à de nombreux sièges.",
                "La ville est aussi un carrefour entre l'Europe et l'Asie, entre la mer Noire et la Méditerranée. Des marchands y apportent la soie, les épices, les fourrures ou le blé. Avec son Grand Palais, ses églises, ses marchés et son hippodrome où se déroulent les courses de chars, elle est pendant longtemps la plus grande et la plus riche ville du monde chrétien.",
              ],
              box: { label: "Définition", text: "Byzantin : qui appartient à l'Empire romain d'Orient (de 395 à 1453) ou à sa capitale, Constantinople. Ce nom a été donné par les historiens ; les habitants, eux, se disaient Romains." },
            },
            {
              heading: "Le basileus, un empereur choisi par Dieu",
              paragraphs: [
                "L'empereur byzantin porte le titre grec de basileus, qui signifie « roi ». Il a tous les pouvoirs : il fait les lois, commande l'armée, dirige l'administration et rend la justice. Il vit au Grand Palais, entouré d'une cour nombreuse et d'un cérémonial très solennel : ceux qui l'approchent se prosternent devant lui.",
                "Les Byzantins pensent que l'empereur est choisi par Dieu et qu'il est son représentant sur Terre. Il est couronné par le patriarche de Constantinople, le chef de l'Église d'Orient. En retour, il protège l'Église, réunit les évêques en concile et intervient dans les questions religieuses. Le pouvoir politique et la religion sont donc très étroitement liés.",
              ],
              box: { label: "À retenir", text: "Le basileus est à la fois le chef de l'État, le chef de l'armée et le protecteur de l'Église. Pour les Byzantins, son pouvoir vient de Dieu." },
            },
            {
              heading: "Justinien, le rêve de restaurer l'Empire romain",
              paragraphs: [
                "Justinien règne de 527 à 565, avec à ses côtés l'impératrice Théodora. Il veut reconstituer l'ancien Empire romain. Ses généraux, comme Bélisaire, reprennent l'Afrique du Nord aux Vandales, l'Italie aux Ostrogoths et une partie du sud de l'Espagne aux Wisigoths. La Méditerranée redevient presque entièrement romaine, mais ces guerres coûtent très cher et une grande partie des conquêtes est perdue après sa mort.",
                "Justinien fait rassembler et mettre en ordre les lois romaines dans un grand recueil, appelé plus tard le Code de Justinien. Ce droit romain a inspiré, bien des siècles plus tard, le droit de nombreux pays d'Europe, dont la France. Il fait aussi reconstruire à Constantinople la basilique Sainte-Sophie (532-537), dont l'immense coupole impressionne encore aujourd'hui.",
                "L'art byzantin est célèbre pour ses mosaïques à fond d'or et pour ses icônes, des images peintes du Christ, de la Vierge Marie et des saints. À Ravenne, en Italie, l'église Saint-Vital montre en mosaïque Justinien et Théodora entourés de leur cour : une image qui affirme à la fois la puissance de l'empereur et le caractère sacré de son pouvoir.",
              ],
            },
          ],
          keyPoints: [
            "En 330, Constantin inaugure Constantinople, sur le site de Byzance, au bord du Bosphore.",
            "En 395, l'Empire romain est partagé ; l'Empire d'Orient, dit byzantin, dure jusqu'en 1453.",
            "Les Byzantins se disent Romains : ils gardent le droit, l'État et le titre d'empereur, mais parlent grec.",
            "Le basileus a tous les pouvoirs ; il est vu comme choisi par Dieu et protège l'Église.",
            "Justinien (527-565) reconquiert une partie de l'Occident, fait rassembler le droit romain et reconstruit Sainte-Sophie.",
          ],
          example: {
            statement: "Expliquez en quoi l'Empire byzantin est l'héritier de l'Empire romain, en donnant deux ressemblances et une différence.",
            solution: [
              "On rappelle d'abord l'origine : l'Empire byzantin est la partie orientale de l'Empire romain, séparée en 395. Il continue d'exister après la chute de l'Empire d'Occident en 476.",
              "Première ressemblance : il garde le titre d'empereur et une organisation de l'État héritée de Rome (lois, administration, armée).",
              "Deuxième ressemblance : il conserve le droit romain, que Justinien fait rassembler dans un grand recueil au VIe siècle. Ses habitants se disent d'ailleurs « Romains ».",
              "Une différence : on y parle grec et non latin ; le grec devient la langue de l'administration au VIIe siècle. Et l'empire est chrétien, alors que Rome a longtemps été païenne.",
              "Réponse : l'Empire byzantin est l'héritier de Rome par son empereur, son État et son droit, mais il s'en distingue par sa langue grecque et sa religion chrétienne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Donnez la date de l'inauguration de Constantinople, celle du partage de l'Empire romain et celle de la prise de Constantinople par les Turcs ottomans. b) À quel siècle appartient chacune de ces dates ? c) Combien de temps l'Empire romain d'Orient a-t-il duré, de 395 à 1453 ?",
              hint: "Pour le siècle, enlevez les deux derniers chiffres et ajoutez 1. Pour la durée, les deux dates sont après J.-C. : on soustrait.",
              solution: [
                "a) Inauguration de Constantinople : 330. Partage de l'Empire romain : 395. Prise de Constantinople : 1453.",
                "b) 330 : 3 + 1 = 4, donc IVe siècle. 395 : 3 + 1 = 4, donc IVe siècle aussi. 1453 : 14 + 1 = 15, donc XVe siècle.",
                "c) 1453 - 395 = 1 058 ans.",
                "Résultat : l'Empire romain d'Orient a duré un peu plus de mille ans (1 058 ans), du IVe au XVe siècle.",
              ],
            },
            {
              level: 2,
              statement: "Voici la description d'une mosaïque de l'église Saint-Vital de Ravenne (VIe siècle). Au centre, Justinien porte une couronne et un grand manteau pourpre ; sa tête est entourée d'un cercle de lumière, une auréole. Il tient un plat en or qu'il offre à l'église. À sa gauche se tient un évêque avec des prêtres ; à sa droite, des soldats, dont l'un porte un bouclier marqué du monogramme du Christ. a) Quels éléments montrent la puissance de l'empereur ? b) Quels éléments montrent le lien entre l'empereur et la religion ? c) Quel message cette image veut-elle faire passer ?",
              hint: "Classez les détails en deux colonnes : ceux qui parlent de pouvoir (vêtements, soldats) et ceux qui parlent de religion (auréole, évêque, offrande).",
              solution: [
                "a) La puissance : Justinien est au centre de l'image, il porte une couronne et un manteau pourpre, couleur réservée à l'empereur, et il est entouré de soldats qui montrent qu'il commande l'armée.",
                "b) Le lien avec la religion : l'auréole autour de sa tête, habituellement réservée au Christ et aux saints, l'évêque et les prêtres à ses côtés, l'offrande d'un plat en or à l'église, le monogramme du Christ sur le bouclier.",
                "c) Le message : l'empereur est à la fois le chef de l'État et de l'armée et le protecteur de l'Église ; son pouvoir est sacré, il vient de Dieu.",
                "Conclusion : cette mosaïque est une image de propagande qui présente Justinien comme un souverain tout-puissant choisi par Dieu.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe de 6 à 8 lignes pour montrer que Constantinople est une capitale à la fois bien protégée, riche et prestigieuse. Utilisez au moins quatre de ces mots : Bosphore, murailles, carrefour, soie, Sainte-Sophie, Grand Palais, hippodrome.",
              hint: "Organisez votre paragraphe en trois idées (protection, richesse, prestige), avec un exemple précis pour chacune, puis une phrase de conclusion.",
              solution: [
                "Introduction : Constantinople, inaugurée par Constantin en 330 au bord du Bosphore, est la capitale de l'Empire byzantin jusqu'en 1453.",
                "Protection : bâtie sur une presqu'île, elle est entourée par la mer sur deux côtés et défendue du côté de la terre par de puissantes murailles construites au Ve siècle.",
                "Richesse : c'est un carrefour entre l'Europe et l'Asie, entre la mer Noire et la Méditerranée ; les marchands y échangent la soie, les épices, les fourrures et le blé.",
                "Prestige : l'empereur y vit au Grand Palais, la foule se rassemble à l'hippodrome, et Justinien y fait reconstruire Sainte-Sophie et son immense coupole.",
                "Conclusion : Constantinople est donc une ville difficile à prendre, enrichie par le commerce et embellie par ses monuments, la plus grande ville du monde chrétien pendant des siècles.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de l'histoire byzantine dans l'ordre chronologique.",
            items: [
              "Constantin inaugure Constantinople (330)",
              "L'Empire romain est partagé en deux à la mort de Théodose (395)",
              "L'Empire romain d'Occident disparaît (476)",
              "Justinien devient empereur (527)",
              "La nouvelle basilique Sainte-Sophie est achevée (537)",
              "Les Turcs ottomans prennent Constantinople (1453)",
            ],
          },
          quiz: [
            {
              q: "Quel est l'ancien nom de la ville où Constantin inaugure sa capitale en 330 ?",
              options: ["Ravenne", "Byzance", "Antioche", "Alexandrie"],
              answer: 1,
              why: "Constantinople est fondée sur le site de l'ancienne cité grecque de Byzance, d'où le nom d'Empire byzantin donné par les historiens.",
            },
            {
              q: "Quelle langue domine dans l'Empire byzantin ?",
              options: ["Le latin", "L'arabe", "Le grec", "Le germanique"],
              answer: 2,
              why: "Dans la partie orientale de l'Empire, on parle surtout grec ; le grec remplace le latin dans l'administration au VIIe siècle.",
            },
            {
              q: "Que signifie le titre de basileus porté par l'empereur byzantin ?",
              options: ["Roi", "Évêque", "Général en chef", "Grand juge de l'empire"],
              answer: 0,
              why: "Basileus est un mot grec qui signifie « roi » ; c'est le titre de l'empereur byzantin.",
            },
            {
              q: "Laquelle de ces réalisations est due à Justinien ?",
              options: ["La fondation de la ville de Constantinople", "Le partage de l'Empire en 395", "La prise de Rome en 476", "La reconstruction de Sainte-Sophie"],
              answer: 3,
              why: "Justinien fait reconstruire la basilique Sainte-Sophie entre 532 et 537 ; il fait aussi rassembler le droit romain.",
            },
            {
              q: "En quelle année l'Empire byzantin prend-il fin ?",
              options: ["En 476", "En 1054", "En 1453", "En 1204"],
              answer: 2,
              why: "L'Empire byzantin disparaît en 1453, quand les Turcs ottomans prennent Constantinople. En 476, c'est l'Empire d'Occident qui disparaît.",
            },
          ],
          trap: "Confondre les deux dates de fin : 476 marque la fin de l'Empire romain d'Occident, alors que l'Empire romain d'Orient, l'Empire byzantin, dure jusqu'en 1453.",
          method: "Pour retenir l'histoire byzantine, tracez une frise de 300 à 1500 et placez-y seulement cinq repères (330, 395, 476, 527-565, 1453) : chaque repère doit pouvoir être expliqué en une phrase.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'charlemagne-empire',
          title: 'Charlemagne et l\'Empire carolingien',
          minutes: 30,
          objectives: [
            "Situer l'Empire carolingien dans le temps et dans l'espace.",
            "Expliquer la signification du couronnement impérial de l'an 800.",
            "Décrire les moyens utilisés par Charlemagne pour gouverner son empire.",
            "Expliquer pourquoi l'Empire est partagé en 843.",
          ],
          course: [
            {
              heading: "Des Mérovingiens aux Carolingiens",
              paragraphs: [
                "Après la fin de l'Empire romain d'Occident, plusieurs royaumes germaniques se forment en Europe de l'Ouest. Le royaume des Francs devient le plus puissant. Son roi Clovis se fait baptiser vers l'an 500 : il est le premier grand roi franc chrétien. Ses descendants, les Mérovingiens, gouvernent le royaume pendant plus de deux siècles.",
                "Peu à peu, les rois mérovingiens perdent leur pouvoir au profit de leurs principaux serviteurs, les maires du palais. L'un d'eux, Charles Martel, arrête près de Poitiers, en 732, une armée musulmane venue d'Espagne. Son fils, Pépin le Bref, devient roi des Francs en 751 et reçoit le sacre : on l'oint d'huile sainte, comme les rois de la Bible. En 754, le pape le sacre à nouveau.",
                "Une nouvelle dynastie commence : les Carolingiens, du nom latin de Charles (Carolus). Le sacre montre que le roi est choisi par Dieu. Il crée aussi une alliance entre les rois francs et le pape, qui compte sur eux pour le protéger.",
              ],
              box: { label: "Définition", text: "Sacre : cérémonie religieuse au cours de laquelle un évêque ou le pape oint le roi d'huile sainte. Elle montre que le roi est choisi par Dieu. Dynastie : suite de souverains d'une même famille." },
            },
            {
              heading: "Charlemagne, un roi conquérant",
              paragraphs: [
                "Charles, fils de Pépin, devient roi des Francs en 768. On l'appellera plus tard Charlemagne, c'est-à-dire « Charles le Grand ». Il passe une grande partie de son règne à faire la guerre. En 774, il conquiert le royaume des Lombards, en Italie du Nord. Contre les Saxons, au nord-est, il mène plus de trente ans de guerres très violentes et les oblige à se convertir au christianisme.",
                "Il soumet aussi la Bavière et lance des expéditions au-delà des Pyrénées. En 778, au retour d'Espagne, l'arrière-garde de son armée est attaquée par des montagnards basques à Roncevaux : cet épisode inspirera, trois siècles plus tard, la Chanson de Roland. Charlemagne crée au sud des Pyrénées une zone frontière, la marche d'Espagne.",
                "À la fin de son règne, son royaume s'étend de la mer du Nord au centre de l'Italie et des Pyrénées à l'Elbe. Il réunit une grande partie de la chrétienté d'Occident : la France, la Belgique, les Pays-Bas, la Suisse et une partie de l'Allemagne et de l'Italie actuelles.",
              ],
            },
            {
              heading: "Le couronnement de l'an 800",
              paragraphs: [
                "Le 25 décembre 800, jour de Noël, dans la basilique Saint-Pierre de Rome, le pape Léon III pose une couronne sur la tête de Charlemagne : il est proclamé empereur. Depuis la disparition de l'Empire romain d'Occident en 476, il n'y avait plus d'empereur en Occident.",
                "Ce couronnement scelle l'alliance entre le roi franc et le pape. Charlemagne s'engage à protéger l'Église et à répandre le christianisme ; le pape, en couronnant l'empereur, affirme que c'est l'Église qui donne ce titre. Les Byzantins, qui ont déjà leur propre empereur à Constantinople, refusent d'abord de reconnaître ce nouvel empereur.",
              ],
              box: { label: "Repère", text: "751 : Pépin le Bref devient roi. 768 : Charlemagne devient roi des Francs. 25 décembre 800 : couronnement impérial à Rome. 814 : mort de Charlemagne. 843 : traité de Verdun." },
            },
            {
              heading: "Gouverner un immense empire",
              paragraphs: [
                "Charlemagne n'a pas une capitale fixe au début de son règne : il se déplace avec sa cour. À partir des années 790, il s'installe surtout à Aix-la-Chapelle, où il fait construire un palais et une chapelle. L'empire est divisé en comtés. Dans chacun, un comte nommé par l'empereur rend la justice, lève les soldats et fait appliquer les ordres. Aux frontières, des zones militaires, les marches, protègent l'empire.",
                "Pour contrôler les comtes, Charlemagne envoie chaque année dans les provinces des inspecteurs, les missi dominici (« les envoyés du maître »). Ils voyagent par deux, un laïc et un homme d'Église. Les ordres de l'empereur sont mis par écrit dans des textes appelés capitulaires. Tous les hommes libres doivent aussi prêter à l'empereur un serment de fidélité.",
                "Charlemagne s'appuie enfin sur des hommes qui lui sont liés personnellement, ses vassaux. Ils lui jurent fidélité et le servent à la guerre ; en échange, il leur donne des terres. Ces liens personnels sont une force, mais ils annoncent aussi le pouvoir grandissant des grands seigneurs après lui.",
              ],
              box: { label: "À retenir", text: "Comtes, marches, missi dominici, capitulaires et serment de fidélité : ce sont les outils de Charlemagne pour gouverner un empire où l'on voyage lentement, à cheval ou à pied." },
            },
            {
              heading: "La renaissance carolingienne et le partage de l'Empire",
              paragraphs: [
                "Charlemagne veut des prêtres instruits, capables de lire la Bible et de bien célébrer la messe. Il demande que des écoles soient ouvertes auprès des monastères et des cathédrales. Il réunit à sa cour des savants, comme le moine anglo-saxon Alcuin. Dans les monastères, des moines copient de nombreux manuscrits, chrétiens mais aussi latins de l'Antiquité, avec une nouvelle écriture claire, la minuscule caroline, ancêtre de nos lettres minuscules. Les historiens appellent ce mouvement la renaissance carolingienne.",
                "Charlemagne meurt en 814. Son fils Louis le Pieux lui succède, mais à sa mort ses trois fils se disputent l'empire. En 843, le traité de Verdun le partage en trois : à l'ouest, la Francie occidentale de Charles le Chauve ; au centre, la Francie médiane de Lothaire, qui garde le titre d'empereur ; à l'est, la Francie orientale de Louis le Germanique. L'unité de l'empire n'a pas duré.",
              ],
            },
          ],
          keyPoints: [
            "Les Carolingiens remplacent les Mérovingiens : Pépin le Bref devient roi en 751 et est sacré.",
            "Charlemagne, roi des Francs en 768, conquiert un vaste territoire (Lombards, Saxons, Bavière, marche d'Espagne).",
            "Le 25 décembre 800, le pape Léon III le couronne empereur à Rome : alliance entre le roi franc et l'Église.",
            "Il gouverne avec des comtes, contrôlés par les missi dominici, et des ordres écrits, les capitulaires.",
            "La renaissance carolingienne développe les écoles et la copie de manuscrits (minuscule caroline).",
            "Après sa mort (814), le traité de Verdun (843) partage l'empire entre ses trois petits-fils.",
          ],
          example: {
            statement: "Comment Charlemagne parvient-il à gouverner un empire aussi vaste ? Donnez trois moyens et expliquez à quoi sert chacun.",
            solution: [
              "On rappelle la difficulté : l'empire s'étend de la mer du Nord à l'Italie, et on ne voyage qu'à cheval ou à pied. L'empereur ne peut pas être partout.",
              "Premier moyen : les comtes. Dans chaque comté, un comte représente l'empereur ; il rend la justice, lève les soldats et fait appliquer les ordres.",
              "Deuxième moyen : les missi dominici. Ces envoyés vont par deux (un laïc, un homme d'Église) contrôler les comtes et rapporter à l'empereur ce qui se passe.",
              "Troisième moyen : les capitulaires et le serment. Les ordres sont écrits dans des capitulaires et tous les hommes libres jurent fidélité à l'empereur.",
              "Réponse : Charlemagne gouverne grâce à des représentants locaux (les comtes), des contrôleurs (les missi dominici) et des ordres écrits (les capitulaires), renforcés par le serment de fidélité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec le bon mot ou la bonne date : capitulaires, 800, Aix-la-Chapelle, missi dominici, Léon III, comte. a) Charlemagne est couronné empereur le 25 décembre ... par le pape ... b) Dans chaque comté, un ... représente l'empereur. c) Les ... contrôlent les comtes. d) Les ordres de l'empereur sont écrits dans des ... e) Charlemagne réside surtout à ...",
              hint: "Relisez la partie « Gouverner un immense empire » : chaque mot de la liste y est expliqué.",
              solution: [
                "a) Charlemagne est couronné empereur le 25 décembre 800 par le pape Léon III.",
                "b) Dans chaque comté, un comte représente l'empereur.",
                "c) Les missi dominici contrôlent les comtes.",
                "d) Les ordres de l'empereur sont écrits dans des capitulaires.",
                "e) Charlemagne réside surtout à Aix-la-Chapelle.",
              ],
            },
            {
              level: 2,
              statement: "Voici, résumé et simplifié, le contenu d'un capitulaire de 802 adressé aux missi dominici. L'empereur leur demande de faire prêter à tous les hommes libres de plus de douze ans un serment de fidélité à l'empereur ; de veiller à ce que la justice soit rendue de façon équitable, pour les riches comme pour les pauvres ; de protéger les églises, les veuves et les orphelins. a) Qui donne ces ordres, et à qui ? b) Relevez une mesure qui renforce l'autorité de l'empereur. c) Relevez une mesure qui montre que l'empereur se veut un souverain chrétien. d) Pourquoi ce texte est-il écrit ?",
              hint: "Pensez au rôle de l'empereur après le couronnement de 800 : il doit être obéi, mais il doit aussi protéger l'Église et les plus faibles.",
              solution: [
                "a) C'est Charlemagne, l'empereur, qui donne ces ordres aux missi dominici, ses envoyés chargés de contrôler l'empire.",
                "b) Le serment de fidélité que doivent prêter tous les hommes libres de plus de douze ans renforce l'autorité de l'empereur : chacun lui est lié personnellement.",
                "c) La protection des églises, des veuves et des orphelins montre que Charlemagne se veut un empereur chrétien, protecteur de l'Église et des faibles.",
                "d) Le texte est écrit pour que les ordres soient les mêmes partout et pour que les missi sachent exactement ce qu'ils doivent contrôler.",
                "Conclusion : ce capitulaire montre un empereur qui veut être obéi partout et qui gouverne au nom de valeurs chrétiennes.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Charlemagne règne comme roi de 768 à 814, dont combien d'années comme empereur ? b) Combien d'années séparent la fin de l'Empire romain d'Occident (476) du couronnement de Charlemagne ? c) Rédigez un paragraphe de 6 à 8 lignes pour montrer que Charlemagne est à la fois un chef de guerre, un administrateur et un empereur chrétien.",
              hint: "Pour a) et b), soustrayez les dates. Pour c), donnez un exemple précis pour chacun des trois rôles, dans cet ordre.",
              solution: [
                "a) Règne comme roi : 814 - 768 = 46 ans. Comme empereur : 814 - 800 = 14 ans.",
                "b) 800 - 476 = 324 ans sans empereur en Occident.",
                "c) Chef de guerre : roi des Francs à partir de 768, Charlemagne conquiert le royaume des Lombards en 774, soumet les Saxons après plus de trente ans de guerre et crée la marche d'Espagne.",
                "Administrateur : il divise l'empire en comtés confiés à des comtes, les fait contrôler par les missi dominici et donne ses ordres par écrit dans les capitulaires.",
                "Empereur chrétien : couronné par le pape Léon III à Rome le 25 décembre 800, il protège l'Église, impose le christianisme aux Saxons et développe les écoles pour former des prêtres instruits.",
                "Conclusion : Charlemagne s'appuie à la fois sur la guerre, sur une administration contrôlée et sur l'Église pour tenir un empire immense, qui sera pourtant partagé en 843.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot de l'Empire carolingien à sa définition.",
            pairs: [
              { left: "Missi dominici", right: "Envoyés de l'empereur qui contrôlent les comtes" },
              { left: "Capitulaire", right: "Texte où sont écrits les ordres de l'empereur" },
              { left: "Comte", right: "Représentant de l'empereur dans une circonscription" },
              { left: "Marche", right: "Zone frontière protégée militairement" },
              { left: "Sacre", right: "Cérémonie où le roi est oint d'huile sainte" },
              { left: "Minuscule caroline", right: "Écriture claire, ancêtre de nos lettres minuscules" },
            ],
          },
          quiz: [
            {
              q: "Qui couronne Charlemagne empereur le 25 décembre 800 ?",
              options: ["L'empereur byzantin", "L'évêque de Reims", "Le pape Léon III", "Son père Pépin le Bref"],
              answer: 2,
              why: "Le pape Léon III couronne Charlemagne dans la basilique Saint-Pierre de Rome, le jour de Noël 800.",
            },
            {
              q: "À quoi servent les missi dominici ?",
              options: ["À contrôler les comtes", "À copier les manuscrits", "À élire l'empereur", "À commander la flotte"],
              answer: 0,
              why: "Les missi dominici, « envoyés du maître », vont par deux contrôler les comtes au nom de l'empereur.",
            },
            {
              q: "Quel peuple Charlemagne combat-il pendant plus de trente ans et oblige-t-il à se convertir ?",
              options: ["Les Lombards", "Les Byzantins", "Les Basques", "Les Saxons"],
              answer: 3,
              why: "Les guerres contre les Saxons, au nord-est, durent plus de trente ans ; ils sont convertis de force au christianisme.",
            },
            {
              q: "Où Charlemagne réside-t-il surtout à partir des années 790 ?",
              options: ["À Paris", "À Aix-la-Chapelle", "À Rome, près du pape", "À Constantinople"],
              answer: 1,
              why: "Charlemagne fait construire un palais et une chapelle à Aix-la-Chapelle, où il réside surtout et où il meurt en 814.",
            },
            {
              q: "Que décide le traité de Verdun en 843 ?",
              options: ["Le sacre de Pépin le Bref", "Le couronnement de Charlemagne", "La conquête définitive de la Saxe", "Le partage de l'empire en trois"],
              answer: 3,
              why: "En 843, les trois petits-fils de Charlemagne se partagent l'empire : Francie occidentale, Francie médiane et Francie orientale.",
            },
          ],
          trap: "Croire que Charlemagne a été couronné empereur dès 768 : il devient roi des Francs en 768 et n'est couronné empereur qu'en 800, à Rome, par le pape.",
          method: "Pour réviser le gouvernement de Charlemagne, dessinez un petit schéma : l'empereur en haut, les comtes en dessous, les missi dominici sur le côté avec une flèche « contrôlent », et les capitulaires avec une flèche « ordres écrits ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'deux-chretientes',
          title: 'Deux chrétientés qui se séparent',
          minutes: 25,
          objectives: [
            "Identifier les deux chrétientés, latine et grecque, et leurs centres, Rome et Constantinople.",
            "Expliquer les causes de leur séparation en 1054.",
            "Comparer les pratiques des catholiques et des orthodoxes.",
            "Décrire l'expansion de chaque chrétienté en Europe.",
          ],
          course: [
            {
              heading: "Une même religion, deux mondes",
              paragraphs: [
                "Au Moyen Âge, les chrétiens d'Occident et ceux de l'Empire byzantin croient au même Dieu, lisent la même Bible et célèbrent la même fête de Pâques. On parle de chrétienté pour désigner l'ensemble des pays et des peuples chrétiens. Mais peu à peu, deux chrétientés se distinguent.",
                "À l'ouest, la chrétienté latine célèbre la messe en latin. Son chef est le pape, l'évêque de Rome, qui se considère comme le successeur de saint Pierre et veut diriger toute l'Église. À l'est, la chrétienté grecque célèbre la messe en grec. Elle est dirigée par le patriarche de Constantinople, aux côtés d'autres patriarches, et l'empereur byzantin y joue un grand rôle.",
                "Avec le temps, Latins et Grecs ne parlent plus la même langue et se comprennent de moins en moins. Le couronnement de Charlemagne en 800 irrite aussi les Byzantins : pour eux, il n'y a qu'un seul empereur, celui de Constantinople.",
              ],
              box: { label: "Définition", text: "Chrétienté : ensemble des pays et des peuples chrétiens. Patriarche : évêque d'une très grande ville, chef d'une Église d'Orient. Pape : évêque de Rome, chef de l'Église d'Occident." },
            },
            {
              heading: "Des désaccords qui s'accumulent",
              paragraphs: [
                "Le premier désaccord porte sur l'autorité. Le pape affirme qu'il est le chef de tous les chrétiens. Le patriarche de Constantinople et les autres Églises d'Orient refusent : pour eux, les grands évêques doivent décider ensemble, réunis en concile.",
                "Il existe aussi des désaccords sur la foi et sur les pratiques. Les Latins ont ajouté au texte du Credo, la prière qui résume la foi, une formule disant que le Saint-Esprit vient « du Père et du Fils » ; les Grecs la refusent. Pour la messe, les Latins utilisent du pain sans levain, les Grecs du pain levé. En Orient, un homme marié peut devenir prêtre ; en Occident, l'Église exige de plus en plus que les prêtres ne soient pas mariés.",
                "Les images posent aussi question. Aux VIIIe et IXe siècles, dans l'Empire byzantin, certains empereurs font détruire les icônes, accusées d'être adorées comme des idoles : c'est la querelle des images. En 843, le culte des icônes est définitivement rétabli et elles deviennent un trait essentiel de la chrétienté grecque.",
              ],
            },
            {
              heading: "1054 : la rupture",
              paragraphs: [
                "En 1054, des envoyés du pape Léon IX se rendent à Constantinople pour discuter avec le patriarche Michel Cérulaire. Les discussions échouent. Les envoyés du pape déposent sur l'autel de Sainte-Sophie une bulle d'excommunication contre le patriarche, qui excommunie à son tour les envoyés du pape. C'est ce qu'on appelle le schisme de 1054.",
                "Sur le moment, beaucoup ne voient pas là une rupture définitive. Mais la séparation s'aggrave, surtout en 1204, quand des croisés venus d'Occident pillent Constantinople. Désormais, on distingue l'Église catholique (« universelle »), à l'ouest, et l'Église orthodoxe (« de la juste foi »), à l'est. En 1965, le pape Paul VI et le patriarche Athénagoras lèvent les excommunications de 1054, mais les deux Églises restent séparées.",
              ],
              box: { label: "À retenir", text: "Schisme : séparation entre des fidèles d'une même religion. Excommunication : exclusion d'un chrétien de l'Église. En 1054, le schisme sépare l'Église catholique (Rome) et l'Église orthodoxe (Constantinople)." },
            },
            {
              heading: "Deux chrétientés qui s'étendent en Europe",
              paragraphs: [
                "Chaque chrétienté cherche à convertir de nouveaux peuples. Au IXe siècle, deux frères partis de l'Empire byzantin, Cyrille et Méthode, vont prêcher chez les Slaves. Ils traduisent des textes religieux dans la langue de ces peuples ; l'alphabet cyrillique, qui porte le nom de Cyrille, est encore utilisé aujourd'hui en Russie, en Ukraine, en Serbie ou en Bulgarie. Vers 988, le prince Vladimir, qui règne à Kiev, se fait baptiser selon le rite grec.",
                "De son côté, l'Église de Rome convertit les peuples du nord et du centre de l'Europe : Scandinaves, Polonais, Hongrois. C'est pour cela que, aujourd'hui encore, la Pologne est majoritairement catholique, alors que la Russie, la Grèce ou la Serbie sont majoritairement orthodoxes.",
              ],
            },
          ],
          keyPoints: [
            "Deux chrétientés : latine (Rome, le pape, le latin) et grecque (Constantinople, le patriarche, le grec).",
            "Désaccords : autorité du pape, formule du Credo, pain de la messe, mariage des prêtres, place des icônes.",
            "En 1054, envoyés du pape et patriarche s'excommunient : c'est le schisme.",
            "On distingue désormais l'Église catholique (Occident) et l'Église orthodoxe (Orient).",
            "Le pillage de Constantinople par les croisés en 1204 aggrave la séparation.",
            "Les Byzantins convertissent les Slaves (Cyrille et Méthode, alphabet cyrillique) ; Rome convertit le nord et le centre de l'Europe.",
          ],
          example: {
            statement: "Pourquoi les chrétiens d'Occident et ceux de l'Empire byzantin se séparent-ils en 1054 ? Donnez deux causes anciennes et l'événement déclencheur.",
            solution: [
              "On rappelle la situation : les deux chrétientés partagent la même foi, mais l'une est centrée sur Rome, l'autre sur Constantinople.",
              "Première cause ancienne : l'autorité. Le pape veut être le chef de toute l'Église ; le patriarche de Constantinople et les Églises d'Orient refusent.",
              "Deuxième cause ancienne : les différences de langue (latin, grec) et de pratiques (pain de la messe, mariage des prêtres, formule du Credo), qui éloignent les deux mondes.",
              "Événement déclencheur : en 1054, les envoyés du pape excommunient le patriarche Michel Cérulaire, qui les excommunie à son tour.",
              "Réponse : le schisme de 1054 est l'aboutissement de désaccords anciens sur l'autorité et sur les pratiques ; les excommunications réciproques de 1054 en sont l'occasion.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque élément dans la colonne « chrétienté latine » ou « chrétienté grecque » : le pape ; le patriarche ; Rome ; Constantinople ; la messe en latin ; la messe en grec ; le pain sans levain ; le pain levé ; Église catholique ; Église orthodoxe.",
              hint: "Associez chaque élément à l'une des deux villes : Rome ou Constantinople.",
              solution: [
                "Chrétienté latine : le pape, Rome, la messe en latin, le pain sans levain, Église catholique.",
                "Chrétienté grecque : le patriarche, Constantinople, la messe en grec, le pain levé, Église orthodoxe.",
                "Résultat : cinq éléments dans chaque colonne.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce court récit, rédigé pour l'exercice : « En juillet 1054, à Constantinople, les envoyés du pape entrent dans Sainte-Sophie pendant l'office. Ils déposent sur l'autel un document qui excommunie le patriarche Michel Cérulaire, puis quittent la ville. Quelques jours plus tard, le patriarche réunit des évêques et excommunie à son tour les envoyés du pape. » a) Où et quand se déroule la scène ? b) Qui sont les deux camps opposés ? c) Que signifie « excommunier » ? d) Pourquoi parle-t-on de schisme ?",
              hint: "Pour d), repartez de la définition du schisme : une séparation entre fidèles d'une même religion.",
              solution: [
                "a) La scène se déroule à Constantinople, dans la basilique Sainte-Sophie, en juillet 1054.",
                "b) D'un côté, les envoyés du pape, qui représentent l'Église de Rome ; de l'autre, le patriarche de Constantinople, chef de l'Église d'Orient.",
                "c) Excommunier, c'est exclure quelqu'un de l'Église : il ne peut plus recevoir les sacrements.",
                "d) On parle de schisme parce que les deux Églises, qui partagent la même foi chrétienne, se séparent en s'excluant mutuellement.",
                "Conclusion : 1054 marque la séparation entre l'Église catholique et l'Église orthodoxe.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Placez ces dates sur une frise de 300 à 1300, puis rédigez un paragraphe de 6 à 8 lignes pour montrer que la rupture de 1054 est l'aboutissement d'un long éloignement : 330 (Constantinople), 395 (partage de l'Empire), 800 (couronnement de Charlemagne), 843 (rétablissement des icônes), 1054 (schisme), 1204 (pillage de Constantinople par les croisés).",
              hint: "Choisissez une échelle simple (par exemple 1 cm pour 100 ans), puis montrez dans le paragraphe que chaque date ajoute une raison de s'éloigner.",
              solution: [
                "Frise : avec 1 cm pour 100 ans, 330 se place à 0,3 cm du début, 395 à environ 1 cm, 800 à 5 cm, 843 à environ 5,4 cm, 1054 à environ 7,5 cm et 1204 à environ 9 cm.",
                "Dès 395, l'Empire romain est partagé : l'Occident parle latin, l'Orient grec, et les deux mondes s'éloignent.",
                "En 800, le couronnement de Charlemagne par le pape choque les Byzantins, qui n'admettent qu'un seul empereur, celui de Constantinople.",
                "Au IXe siècle, la querelle des images s'achève en 843 par le retour des icônes, qui deviennent un trait propre à l'Orient ; s'y ajoutent les désaccords sur l'autorité du pape, le Credo et les pratiques.",
                "En 1054, ces tensions aboutissent aux excommunications réciproques, puis le pillage de Constantinople par les croisés en 1204 rend la séparation durable.",
                "Conclusion : le schisme n'est pas un coup de tonnerre soudain, mais le résultat de plusieurs siècles d'éloignement politique, culturel et religieux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : catholiques et orthodoxes au Moyen Âge.",
            statements: [
              { text: "Avant 1054, chrétiens latins et chrétiens grecs n'avaient pas la même Bible.", true: false, why: "Ils partagent la même Bible et la même foi ; ils diffèrent par la langue, l'autorité et certaines pratiques." },
              { text: "Le pape est l'évêque de Rome.", true: true, why: "Le pape est l'évêque de Rome ; il se considère comme le successeur de saint Pierre." },
              { text: "En Orient, un homme marié peut devenir prêtre.", true: true, why: "C'est l'une des différences de pratique avec l'Occident, où l'Église exige de plus en plus le célibat des prêtres." },
              { text: "En 1054, c'est l'empereur byzantin qui excommunie le pape.", true: false, why: "Ce sont les envoyés du pape et le patriarche Michel Cérulaire qui s'excommunient l'un l'autre." },
              { text: "L'alphabet cyrillique porte le nom d'un missionnaire byzantin.", true: true, why: "Il doit son nom à Cyrille, qui alla prêcher chez les Slaves au IXe siècle avec son frère Méthode." },
              { text: "Les excommunications de 1054 ont été levées en 1965, et les deux Églises se sont alors réunies.", true: false, why: "Les excommunications ont bien été levées en 1965, mais les deux Églises restent séparées aujourd'hui." },
            ],
          },
          quiz: [
            {
              q: "Qui dirige l'Église d'Orient à Constantinople ?",
              options: ["Le pape", "Le patriarche", "Le calife", "L'empereur d'Occident"],
              answer: 1,
              why: "Le patriarche de Constantinople est le chef de l'Église d'Orient ; le pape est l'évêque de Rome.",
            },
            {
              q: "En quelle année a lieu le schisme entre Rome et Constantinople ?",
              options: ["800", "843", "1054", "1453"],
              answer: 2,
              why: "En 1054, les envoyés du pape et le patriarche s'excommunient mutuellement : c'est le schisme.",
            },
            {
              q: "Que signifie « excommunier » ?",
              options: ["Exclure de l'Église", "Couronner un empereur", "Traduire la Bible", "Bénir un roi"],
              answer: 0,
              why: "Excommunier, c'est exclure un chrétien de la communauté de l'Église.",
            },
            {
              q: "Quel événement de 1204 aggrave la séparation des deux Églises ?",
              options: ["La mort du patriarche Michel Cérulaire", "Le partage de l'Empire", "La conversion des Slaves", "Le pillage de Constantinople"],
              answer: 3,
              why: "En 1204, des croisés venus d'Occident pillent Constantinople, ce qui rend la rupture profonde et durable.",
            },
            {
              q: "Aujourd'hui, quel pays est majoritairement orthodoxe ?",
              options: ["La Pologne", "L'Italie", "La Grèce", "L'Espagne"],
              answer: 2,
              why: "La Grèce, héritière du monde byzantin, est majoritairement orthodoxe ; la Pologne, l'Italie et l'Espagne sont majoritairement catholiques.",
            },
          ],
          trap: "Croire que catholiques et orthodoxes ont deux religions différentes : ce sont deux Églises chrétiennes qui partagent l'essentiel de la foi, mais se séparent sur l'autorité du pape et sur certaines pratiques.",
          method: "Pour comparer les deux chrétientés, faites un tableau à deux colonnes (latine, grecque) et cinq lignes : centre, chef, langue, pratiques, nom actuel de l'Église. Si une case reste vide, relisez la partie du cours correspondante.",
        },
      ],
    },
    {
      id: 'naissance-islam',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'naissance-islam',
          title: 'Muhammad et la naissance de l\'islam',
          minutes: 30,
          objectives: [
            "Situer la naissance de l'islam dans le temps et dans l'espace : l'Arabie du VIIe siècle.",
            "Raconter les grandes étapes de la vie de Muhammad selon la tradition musulmane.",
            "Identifier les croyances et les pratiques fondamentales de l'islam : le Coran et les cinq piliers.",
            "Distinguer le récit de la tradition religieuse et ce que l'historien peut établir.",
          ],
          course: [
            {
              heading: "L'Arabie au début du VIIe siècle",
              paragraphs: [
                "L'Arabie est une vaste péninsule, en grande partie désertique, située entre la mer Rouge et le golfe Persique. Certaines tribus sont nomades : ce sont les Bédouins, éleveurs de chameaux et de moutons. D'autres vivent dans les oasis et dans quelques villes, où l'on cultive le palmier dattier et où l'on pratique le commerce.",
                "Des caravanes traversent la péninsule, du Yémen au sud jusqu'à la Syrie au nord, chargées d'encens, d'épices ou de tissus. La Mecque est une étape de ce commerce. C'est aussi un sanctuaire : on y vénère, autour d'un bâtiment en forme de cube, la Kaaba, de nombreuses divinités. La plupart des Arabes sont alors polythéistes, mais des juifs et des chrétiens vivent aussi en Arabie.",
                "Au nord, deux grands empires se font la guerre depuis longtemps : l'Empire byzantin et l'Empire perse des Sassanides. Ces guerres les ont tous les deux beaucoup affaiblis au début du VIIe siècle.",
              ],
              box: { label: "Définition", text: "Polythéisme : croyance en plusieurs dieux. Monothéisme : croyance en un dieu unique (judaïsme, christianisme, islam)." },
            },
            {
              heading: "Muhammad, le prophète de l'islam",
              paragraphs: [
                "Selon les récits de la tradition musulmane, Muhammad naît vers 570 à La Mecque, dans la tribu des Quraych. Orphelin très jeune, il est élevé par son grand-père puis par son oncle. Il devient marchand caravanier et épouse une riche veuve, Khadija. Vers 610, alors qu'il médite dans une grotte près de La Mecque, il reçoit, selon la croyance musulmane, de l'ange Gabriel (Jibril en arabe) les premières révélations de Dieu, Allah en arabe.",
                "Muhammad prêche alors un Dieu unique, appelle à abandonner les idoles, annonce le Jugement dernier et demande d'aider les pauvres. Une partie des habitants de La Mecque, notamment les plus riches, s'oppose à lui. En 622, il quitte La Mecque avec ses fidèles pour l'oasis de Yathrib, qui deviendra Médine, « la ville du Prophète ». Ce départ s'appelle l'Hégire, ce qui signifie « émigration ».",
                "À Médine, Muhammad est à la fois le chef religieux et le chef politique de la communauté des croyants, l'oumma. Il combat les Mecquois, puis entre dans La Mecque en 630 : les idoles de la Kaaba sont détruites et la Kaaba devient le sanctuaire de l'islam. Quand il meurt à Médine en 632, une grande partie de l'Arabie s'est ralliée à lui.",
              ],
              box: { label: "Repère", text: "Vers 570 : naissance de Muhammad. Vers 610 : premières révélations, selon la tradition. 622 : l'Hégire, an 1 du calendrier musulman. 630 : retour à La Mecque. 632 : mort de Muhammad à Médine." },
            },
            {
              heading: "Le Coran et les cinq piliers de l'islam",
              paragraphs: [
                "Le mot islam signifie « soumission » à Dieu ; un musulman est « celui qui se soumet » à Dieu. Le livre sacré des musulmans est le Coran. Pour eux, c'est la parole de Dieu révélée à Muhammad, en langue arabe. Il est divisé en 114 chapitres, les sourates. Selon la tradition, il est mis par écrit dans une version unique sous le calife Othman, vers 650. Les paroles et les actes attribués au Prophète, les hadiths, sont rassemblés plus tard et guident aussi la vie des croyants.",
                "Les musulmans doivent respecter cinq obligations, appelées les cinq piliers de l'islam : la profession de foi (affirmer qu'il n'y a de dieu que Dieu et que Muhammad est son prophète) ; la prière, cinq fois par jour, en direction de La Mecque ; l'aumône aux pauvres ; le jeûne du mois de ramadan, du lever au coucher du soleil ; le pèlerinage à La Mecque, au moins une fois dans sa vie si on en a les moyens.",
                "Les musulmans prient dans une mosquée. Le mur de la salle de prière est tourné vers La Mecque : c'est la direction de la qibla, indiquée par une niche, le mihrab. Du haut d'une tour, le minaret, le muezzin appelle à la prière. Le vendredi midi, la prière se fait en commun.",
              ],
              box: { label: "À retenir", text: "Les cinq piliers : la profession de foi, la prière, l'aumône, le jeûne du ramadan, le pèlerinage à La Mecque." },
            },
            {
              heading: "Une religion monothéiste ; tradition et histoire",
              paragraphs: [
                "L'islam est un monothéisme, comme le judaïsme et le christianisme. Il reconnaît des prophètes de la Bible, comme Abraham, Moïse ou Jésus, mais pour les musulmans, Muhammad est le dernier des prophètes. Le Coran appelle les juifs et les chrétiens les « gens du Livre », car ils ont reçu eux aussi des Écritures.",
                "L'historien doit distinguer deux choses. La tradition religieuse raconte ce que croient les fidèles : par exemple, que l'ange Gabriel a transmis la parole de Dieu. L'historien, lui, ne juge pas la foi ; il cherche ce qu'il peut établir à partir de sources variées et confrontées. Or la plupart des récits sur la vie de Muhammad ont été écrits par des musulmans plus d'un siècle après sa mort. Quelques textes chrétiens du VIIe siècle et des inscriptions confirment cependant l'existence d'un prophète arabe et d'une communauté nouvelle à cette époque.",
              ],
            },
          ],
          keyPoints: [
            "Au début du VIIe siècle, l'Arabie est surtout polythéiste ; La Mecque est une ville de commerce et un sanctuaire (la Kaaba).",
            "Selon la tradition, Muhammad reçoit les révélations de Dieu vers 610 ; il prêche un Dieu unique.",
            "622 : l'Hégire, départ de La Mecque pour Médine, an 1 du calendrier musulman.",
            "Muhammad revient à La Mecque en 630 et meurt à Médine en 632.",
            "Le Coran est le livre sacré des musulmans ; les cinq piliers sont la profession de foi, la prière, l'aumône, le jeûne et le pèlerinage.",
            "L'historien distingue les croyances de la tradition religieuse et les faits établis par des sources variées.",
          ],
          example: {
            statement: "Pourquoi l'année 622 est-elle une date essentielle pour les musulmans ? Expliquez ce qui se passe et quelles en sont les conséquences.",
            solution: [
              "On rappelle le contexte : Muhammad prêche un Dieu unique à La Mecque depuis environ 610, mais une partie des habitants, surtout les plus riches, s'oppose à lui.",
              "L'événement : en 622, Muhammad quitte La Mecque avec ses fidèles pour l'oasis de Yathrib, qui devient Médine. Ce départ s'appelle l'Hégire.",
              "Première conséquence : à Médine, Muhammad devient le chef religieux et politique de la première communauté musulmane, l'oumma.",
              "Deuxième conséquence : plus tard, les musulmans choisissent 622 comme année 1 de leur calendrier.",
              "Réponse : 622 est l'année de l'Hégire, qui marque la naissance de la communauté musulmane organisée et le point de départ du calendrier musulman.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Reliez chaque pilier de l'islam à sa description. Piliers : a) la profession de foi ; b) la prière ; c) l'aumône ; d) le jeûne ; e) le pèlerinage. Descriptions : 1) aller à La Mecque au moins une fois dans sa vie si on le peut ; 2) donner une partie de ses biens aux pauvres ; 3) affirmer qu'il n'y a de dieu que Dieu et que Muhammad est son prophète ; 4) ne pas manger ni boire du lever au coucher du soleil pendant le mois de ramadan ; 5) prier cinq fois par jour tourné vers La Mecque.",
              hint: "Cherchez dans chaque description un mot-clé qui rappelle le nom du pilier : « La Mecque une fois dans sa vie », « pauvres », « ramadan »...",
              solution: [
                "a) La profession de foi : 3.",
                "b) La prière : 5.",
                "c) L'aumône : 2.",
                "d) Le jeûne : 4.",
                "e) Le pèlerinage : 1.",
              ],
            },
            {
              level: 2,
              statement: "Voici le plan d'une mosquée, décrit pour l'exercice. On entre dans une grande cour à ciel ouvert, au centre de laquelle se trouve une fontaine. Au fond de la cour s'ouvre une vaste salle couverte, soutenue par de nombreuses colonnes. Le mur du fond de cette salle est orienté vers La Mecque ; au milieu de ce mur se creuse une petite niche décorée. À droite de la niche se dresse une chaire en bois, avec un escalier. Dans un angle de la cour s'élève une haute tour. a) Nommez la salle couverte, la niche, la chaire et la tour. b) À quoi sert la fontaine ? c) Pourquoi le mur du fond est-il orienté vers La Mecque ?",
              hint: "Rappelez-vous que les musulmans prient tournés vers La Mecque et qu'ils se purifient avant de prier.",
              solution: [
                "a) La salle couverte est la salle de prière. La niche est le mihrab ; la chaire est le minbar, d'où l'imam prononce le sermon du vendredi ; la tour est le minaret.",
                "b) La fontaine sert aux ablutions : les fidèles se lavent le visage, les mains et les pieds pour se purifier avant la prière.",
                "c) Le mur du fond indique la qibla, la direction de La Mecque, vers laquelle les musulmans doivent se tourner pour prier ; le mihrab la montre clairement.",
                "Conclusion : chaque partie de la mosquée correspond à une pratique de la prière : se purifier, être appelé, se tourner vers La Mecque, écouter le sermon.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Classez chaque affirmation dans la colonne « croyance de la tradition religieuse » ou « fait que l'historien peut établir », puis justifiez en une phrase. a) L'ange Gabriel a transmis la parole de Dieu à Muhammad. b) Au début du VIIe siècle, l'Arabie se trouve entre l'Empire byzantin et l'Empire perse. c) Le Coran est la parole de Dieu. d) Les musulmans comptent les années à partir de 622. e) Des textes chrétiens du VIIe siècle mentionnent un prophète apparu chez les Arabes.",
              hint: "Demandez-vous pour chaque phrase : peut-on la vérifier avec des sources variées (textes de différentes origines, inscriptions, archéologie), ou relève-t-elle de la foi ?",
              solution: [
                "a) Croyance de la tradition religieuse : c'est un récit de foi, que l'historien ne peut ni prouver ni réfuter.",
                "b) Fait établi : de nombreuses sources byzantines, perses et arabes décrivent ces deux empires et leurs guerres.",
                "c) Croyance : c'est ce que pensent les musulmans ; l'historien étudie le texte, sa langue et son histoire, sans juger de son origine divine.",
                "d) Fait établi : le calendrier musulman, compté à partir de l'Hégire, est attesté par de nombreux documents datés.",
                "e) Fait établi : ces textes existent et peuvent être étudiés ; ils confirment, de l'extérieur, l'apparition d'une religion nouvelle chez les Arabes.",
                "Conclusion : a et c relèvent de la croyance, b, d et e de l'histoire. L'historien respecte la foi mais travaille seulement à partir de sources qu'il peut confronter.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la naissance de l'islam.",
            items: [
              "Naissance de Muhammad à La Mecque (vers 570)",
              "Premières révélations, selon la tradition (vers 610)",
              "L'Hégire : départ pour Médine (622)",
              "Retour de Muhammad à La Mecque (630)",
              "Mort de Muhammad à Médine (632)",
              "Mise par écrit du Coran sous le calife Othman, selon la tradition (vers 650)",
            ],
          },
          quiz: [
            {
              q: "Comment s'appelle le départ de Muhammad de La Mecque pour Médine en 622 ?",
              options: ["Le ramadan", "La Kaaba", "Le pèlerinage", "L'Hégire"],
              answer: 3,
              why: "L'Hégire, « émigration », désigne le départ pour Médine en 622 ; c'est l'an 1 du calendrier musulman.",
            },
            {
              q: "Que trouve-t-on à La Mecque avant même la naissance de l'islam ?",
              options: ["La Kaaba, un sanctuaire", "La première mosquée", "Le palais des califes omeyyades", "La tombe de Muhammad"],
              answer: 0,
              why: "La Kaaba est un sanctuaire où les Arabes polythéistes vénéraient de nombreuses divinités ; elle devient le sanctuaire de l'islam en 630.",
            },
            {
              q: "Lequel de ces éléments n'est pas l'un des cinq piliers de l'islam ?",
              options: ["Le jeûne du ramadan", "L'aumône", "La construction d'une mosquée", "Le pèlerinage à La Mecque une fois dans sa vie"],
              answer: 2,
              why: "Les cinq piliers sont la profession de foi, la prière, l'aumône, le jeûne et le pèlerinage ; construire une mosquée n'en fait pas partie.",
            },
            {
              q: "Comment s'appelle la niche qui indique la direction de La Mecque dans une mosquée ?",
              options: ["Le minaret", "Le mihrab", "Le minbar", "La sourate"],
              answer: 1,
              why: "Le mihrab est creusé dans le mur de la qibla ; le minaret est la tour de l'appel à la prière et le minbar la chaire.",
            },
            {
              q: "Pourquoi le Coran appelle-t-il les juifs et les chrétiens les « gens du Livre » ?",
              options: ["Parce qu'ils sont arabes", "Parce qu'ils ont reçu des Écritures", "Parce qu'ils sont marchands", "Parce qu'ils savent tous lire et écrire"],
              answer: 1,
              why: "Pour l'islam, juifs et chrétiens ont eux aussi reçu une révélation écrite de Dieu, comme la Torah et les Évangiles.",
            },
          ],
          trap: "Mélanger ce que dit la tradition religieuse et ce que l'historien établit, par exemple écrire « l'ange Gabriel apparut à Muhammad » sans préciser « selon la tradition musulmane ».",
          method: "Dans une réponse d'histoire sur une religion, signalez toujours les croyances par une formule comme « selon la tradition » ou « pour les musulmans » : c'est la marque d'un travail d'historien, qui respecte la foi sans la confondre avec les faits.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'empires-musulmans',
          title: 'Les califats : un empire qui s\'étend',
          minutes: 30,
          objectives: [
            "Décrire l'expansion de l'empire musulman du VIIe au VIIIe siècle et la situer sur une carte.",
            "Définir le calife et identifier les grandes dynasties califales : Omeyyades, Abbassides, Fatimides.",
            "Expliquer l'origine de la division entre sunnites et chiites.",
            "Décrire la situation des populations des territoires conquis.",
          ],
          course: [
            {
              heading: "Les premiers califes et les grandes conquêtes",
              paragraphs: [
                "Quand Muhammad meurt en 632, ses compagnons choisissent un successeur, en arabe khalifa, d'où le mot calife. Le calife dirige la communauté des croyants : il est à la fois chef politique, chef de guerre et chef religieux, mais il n'est pas un prophète. Les quatre premiers califes sont Abou Bakr, Omar, Othman et Ali.",
                "En quelques années, les armées arabes conquièrent la Syrie et la Palestine (Jérusalem vers 638), l'Égypte (vers 642) puis l'Empire perse, qui disparaît en 651. Leurs adversaires, Byzantins et Perses, sont épuisés par les guerres qu'ils se sont livrées. Les cavaliers arabes sont rapides, et beaucoup de combattants sont motivés à la fois par la foi et par le butin.",
                "Au début du VIIIe siècle, l'expansion atteint l'Afrique du Nord, puis l'Espagne à partir de 711, et vers l'est la vallée de l'Indus. Elle s'arrête devant Constantinople, qui résiste notamment au grand siège de 717-718, et en Occident, où les Francs de Charles Martel arrêtent une armée venue d'Espagne près de Poitiers en 732. En un siècle environ, un immense empire s'est formé, de l'océan Atlantique à l'Indus.",
              ],
              box: { label: "Définition", text: "Calife : successeur de Muhammad à la tête de la communauté des musulmans. Il est chef politique et religieux, mais n'est pas prophète. Califat : territoire gouverné par un calife, ou dynastie de califes." },
            },
            {
              heading: "Sunnites et chiites",
              paragraphs: [
                "Très tôt, les musulmans se divisent sur la question de la succession. Ali, cousin de Muhammad et époux de sa fille Fatima, devient le quatrième calife en 656, mais il est assassiné en 661. Ses partisans, les chiites (de shi'at Ali, « le parti d'Ali »), pensent que seuls Ali et ses descendants devaient diriger les musulmans.",
                "La majorité des musulmans, les sunnites (de sunna, « la tradition du Prophète »), acceptent au contraire les califes choisis dans la communauté, même s'ils ne descendent pas d'Ali. Cette division existe encore aujourd'hui : les sunnites forment la grande majorité des musulmans dans le monde, les chiites sont majoritaires notamment en Iran.",
              ],
              box: { label: "À retenir", text: "Sunnites et chiites partagent le Coran et les cinq piliers. Ils se sont d'abord séparés sur une question politique : qui doit succéder à Muhammad à la tête des croyants ?" },
            },
            {
              heading: "Des Omeyyades aux Abbassides",
              paragraphs: [
                "En 661, la famille des Omeyyades prend le pouvoir et fait de Damas, en Syrie, sa capitale. Le calife Abd al-Malik fait de l'arabe la langue de l'administration, frappe des pièces de monnaie en or, les dinars, et fait construire à Jérusalem le Dôme du Rocher, achevé vers 691-692. La Grande Mosquée de Damas est édifiée au début du VIIIe siècle.",
                "En 750, une autre famille, les Abbassides, renverse les Omeyyades et s'installe plus à l'est. Le calife al-Mansour fonde en 762 une nouvelle capitale au bord du Tigre : Bagdad. L'empire est alors très riche, mais il est de plus en plus difficile à tenir.",
                "Peu à peu, l'unité se brise. En Espagne, un prince omeyyade qui a échappé au massacre de sa famille fonde à Cordoue un émirat indépendant en 756 ; ses descendants prennent le titre de calife en 929. Une dynastie chiite, les Fatimides, proclame un autre califat en Afrique du Nord en 909, puis conquiert l'Égypte et y fonde Le Caire en 969. Au milieu du XIe siècle, des Turcs, les Seldjoukides, prennent le pouvoir à Bagdad avec le titre de sultan, et le calife abbasside ne garde plus qu'un rôle religieux.",
              ],
              box: { label: "Repère", text: "632 : premiers califes. 661-750 : Omeyyades à Damas. 711 : début de la conquête de l'Espagne. 750 : les Abbassides prennent le pouvoir. 762 : fondation de Bagdad. 929 : califat de Cordoue. 1258 : les Mongols prennent Bagdad." },
            },
            {
              heading: "Vivre dans l'empire et la fin du califat de Bagdad",
              paragraphs: [
                "L'empire réunit des peuples très divers : Arabes, Persans, Berbères, Égyptiens, Syriens, Espagnols... Les conquérants n'imposent pas leur religion par la force à tous. Les juifs et les chrétiens, « gens du Livre », reçoivent le statut de dhimmi, de « protégé » : ils peuvent garder leur religion et leurs lieux de culte, mais ils paient un impôt spécial et ont moins de droits que les musulmans (par exemple, ils ne peuvent pas porter les armes).",
                "La conversion à l'islam se fait lentement, sur plusieurs siècles, et l'arabe devient peu à peu la langue de la religion, de l'administration et de la culture. En 1258, les Mongols, venus d'Asie centrale, prennent et pillent Bagdad ; le dernier calife abbasside de Bagdad est mis à mort. C'est la fin d'une période ouverte six siècles plus tôt.",
              ],
            },
          ],
          keyPoints: [
            "Le calife est le successeur de Muhammad : chef politique et religieux de la communauté, il n'est pas prophète.",
            "En un siècle environ, les conquêtes arabes s'étendent de l'Espagne (711) à l'Indus.",
            "Sunnites et chiites se séparent sur la succession de Muhammad ; les chiites sont les partisans d'Ali.",
            "Omeyyades à Damas (661-750), puis Abbassides à Bagdad, fondée en 762.",
            "L'unité se brise : califat de Cordoue (929), Fatimides au Caire (969).",
            "Juifs et chrétiens sont des dhimmis : protégés mais soumis à un impôt spécial. En 1258, les Mongols prennent Bagdad.",
          ],
          example: {
            statement: "Comment expliquer que l'empire musulman se soit étendu aussi vite au VIIe siècle ? Donnez trois raisons.",
            solution: [
              "On rappelle les faits : entre 632 et 651, les armées arabes conquièrent la Syrie, l'Égypte et l'Empire perse ; un siècle après la mort de Muhammad, l'empire va de l'Espagne à l'Indus.",
              "Première raison : les adversaires sont affaiblis. Les Byzantins et les Perses se sont épuisés dans de longues guerres les uns contre les autres.",
              "Deuxième raison : les armées arabes sont mobiles, avec des cavaliers rapides habitués aux déserts.",
              "Troisième raison : les combattants sont motivés par la foi nouvelle et par l'espoir du butin ; de plus, les populations conquises gardent souvent leur religion, ce qui limite les révoltes.",
              "Réponse : l'expansion rapide s'explique par la faiblesse des empires voisins, la mobilité des armées arabes et la motivation des combattants, dans un empire qui tolère les religions des gens du Livre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque dynastie à sa capitale et à sa période. Dynasties : Omeyyades, Abbassides, Fatimides. Capitales : Bagdad, Damas, Le Caire. Périodes : 661-750 ; à partir de 750 (Bagdad fondée en 762) ; à partir du Xe siècle (Le Caire fondé en 969).",
              hint: "Les Omeyyades sont les premiers ; les Abbassides fondent une nouvelle capitale ; les Fatimides s'installent en Égypte.",
              solution: [
                "Omeyyades : Damas, de 661 à 750.",
                "Abbassides : Bagdad, à partir de 750 (la ville est fondée en 762).",
                "Fatimides : Le Caire, fondé en 969.",
              ],
            },
            {
              level: 2,
              statement: "Calculez les durées suivantes. a) Combien de temps la dynastie des Omeyyades règne-t-elle à Damas (661-750) ? b) Combien d'années séparent la mort de Muhammad (632) de la bataille de Poitiers (732) ? c) Combien de temps s'écoule entre la fondation de Bagdad (762) et sa prise par les Mongols (1258) ? d) À quel siècle appartient chacune de ces quatre dates : 661, 762, 969, 1258 ?",
              hint: "Toutes les dates sont après J.-C. : on soustrait la plus petite à la plus grande. Pour le siècle, enlevez les deux derniers chiffres et ajoutez 1.",
              solution: [
                "a) 750 - 661 = 89 ans.",
                "b) 732 - 632 = 100 ans, soit exactement un siècle.",
                "c) 1258 - 762 = 496 ans, presque cinq siècles.",
                "d) 661 : VIIe siècle ; 762 : VIIIe siècle ; 969 : Xe siècle ; 1258 : XIIIe siècle.",
                "Résultat : 89 ans, 100 ans et 496 ans ; les dates appartiennent aux VIIe, VIIIe, Xe et XIIIe siècles.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe de 8 à 10 lignes pour raconter l'histoire des califats, de 632 à 1258, en montrant d'abord l'expansion, puis la division de l'empire. Utilisez au moins six de ces mots : calife, conquêtes, Omeyyades, Damas, Abbassides, Bagdad, Cordoue, Fatimides, sunnites, chiites, Mongols.",
              hint: "Suivez l'ordre chronologique et utilisez des connecteurs de temps : « d'abord », « puis », « en 750 », « à partir du Xe siècle », « enfin ».",
              solution: [
                "D'abord, après la mort de Muhammad en 632, un calife, son successeur, dirige la communauté des musulmans.",
                "En un siècle environ, les conquêtes arabes étendent l'empire de l'Espagne, atteinte en 711, jusqu'à l'Indus.",
                "Dès le VIIe siècle, une division apparaît entre sunnites et chiites, partisans d'Ali, sur la question de la succession.",
                "De 661 à 750, les Omeyyades gouvernent depuis Damas ; en 750, les Abbassides les remplacent et fondent Bagdad en 762.",
                "Puis l'unité se brise : un califat omeyyade est proclamé à Cordoue en 929, et les Fatimides, chiites, fondent Le Caire en 969.",
                "Enfin, en 1258, les Mongols prennent Bagdad et tuent le dernier calife abbasside de la ville.",
                "Conclusion : en six siècles, l'empire des califes passe d'une expansion fulgurante à une division en plusieurs pouvoirs rivaux.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot au sens qui lui correspond.",
            pairs: [
              { left: "Calife", right: "Successeur de Muhammad à la tête des croyants" },
              { left: "Chiites", right: "Musulmans partisans d'Ali et de ses descendants" },
              { left: "Sunnites", right: "Musulmans majoritaires, attachés à la tradition du Prophète" },
              { left: "Omeyyades", right: "Dynastie de califes installée à Damas" },
              { left: "Abbassides", right: "Dynastie de califes qui fonde Bagdad" },
              { left: "Dhimmi", right: "Juif ou chrétien protégé, soumis à un impôt spécial" },
            ],
          },
          quiz: [
            {
              q: "Que signifie le mot arabe khalifa, qui a donné « calife » ?",
              options: ["Prophète", "Successeur", "Chef de guerre", "Marchand"],
              answer: 1,
              why: "Le calife est le successeur de Muhammad à la tête de la communauté, mais il n'est pas lui-même prophète.",
            },
            {
              q: "Quelle ville est la capitale des Omeyyades ?",
              options: ["Bagdad", "Le Caire", "Damas", "Médine"],
              answer: 2,
              why: "Les Omeyyades gouvernent depuis Damas, en Syrie, de 661 à 750 ; Bagdad est la capitale des Abbassides.",
            },
            {
              q: "Qui sont les chiites à l'origine ?",
              options: ["Les partisans d'Ali", "Les habitants de La Mecque", "Les califes de Damas", "Les Turcs seldjoukides"],
              answer: 0,
              why: "Les chiites, « le parti d'Ali », pensent que seuls Ali et ses descendants devaient diriger les musulmans.",
            },
            {
              q: "À partir de quelle année les conquérants arabes entrent-ils en Espagne ?",
              options: ["632", "750", "1258", "711"],
              answer: 3,
              why: "La conquête de l'Espagne commence en 711 ; elle forme al-Andalus, dont Cordoue devient la capitale.",
            },
            {
              q: "Que doivent payer les dhimmis, juifs et chrétiens de l'empire ?",
              options: ["Rien du tout", "La dîme à l'Église", "Un impôt spécial", "Le pèlerinage"],
              answer: 2,
              why: "Les dhimmis gardent leur religion mais paient un impôt spécial et ont moins de droits que les musulmans.",
            },
          ],
          trap: "Croire que les populations conquises ont toutes été converties de force et tout de suite : juifs et chrétiens gardent leur religion comme dhimmis, et l'islamisation se fait lentement, sur plusieurs siècles.",
          method: "Pour ne pas mélanger les dynasties, associez chacune à une ville et à une couleur sur une carte : Omeyyades et Damas, Abbassides et Bagdad, Omeyyades de Cordoue, Fatimides et Le Caire. Une carte coloriée se retient mieux qu'une liste.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'contacts-mediterranee',
          title: 'Bagdad, Cordoue et les contacts en Méditerranée',
          minutes: 30,
          objectives: [
            "Décrire Bagdad et Cordoue, deux grandes capitales du monde musulman.",
            "Identifier des apports des savants du monde musulman et la transmission des savoirs.",
            "Caractériser les contacts entre chrétientés et islam : guerres, échanges commerciaux, échanges culturels.",
          ],
          course: [
            {
              heading: "Bagdad, la capitale des Abbassides",
              paragraphs: [
                "Bagdad est fondée en 762 par le calife abbasside al-Mansour, au bord du Tigre, en Irak actuel. La ville primitive est ronde, entourée de murailles, avec en son centre le palais du calife et la grande mosquée. Elle grandit très vite et devient au IXe siècle l'une des plus grandes villes du monde, avec ses marchés, ses canaux, ses palais et ses mosquées.",
                "Bagdad est un carrefour commercial : on y trouve la soie et le papier venus de Chine, les épices d'Inde, l'or d'Afrique, les fourrures du Nord. Le calife Haroun al-Rachid, qui règne de 786 à 809, entretient des relations avec Charlemagne, à qui il envoie notamment un éléphant, arrivé à Aix-la-Chapelle en 802.",
                "Au IXe siècle, sous le calife al-Mamoun, Bagdad est un grand centre de savoir. Selon les sources, une institution appelée la Maison de la sagesse réunit des savants qui traduisent en arabe des ouvrages grecs, perses et indiens : la philosophie d'Aristote, la médecine de Galien, l'astronomie de Ptolémée.",
              ],
            },
            {
              heading: "Cordoue, capitale d'al-Andalus",
              paragraphs: [
                "Al-Andalus désigne la partie de l'Espagne gouvernée par les musulmans. Sa capitale, Cordoue, devient le siège d'un émirat indépendant en 756, puis d'un califat en 929. Au Xe siècle, elle est l'une des plus grandes villes d'Europe, avec de nombreuses mosquées, des bains publics, des marchés et des bibliothèques.",
                "Sa Grande Mosquée, commencée en 785, est agrandie plusieurs fois ; sa forêt de colonnes et ses arcs bicolores, rouges et blancs, sont célèbres. Après la prise de Cordoue par les chrétiens en 1236, elle est transformée en cathédrale.",
                "À Cordoue vivent des musulmans, des juifs et des chrétiens. Ils n'ont pas les mêmes droits, mais ils se côtoient et échangent. Deux grands penseurs y naissent au XIIe siècle : le musulman Averroès (Ibn Rushd), célèbre pour ses commentaires d'Aristote, et le juif Maïmonide, médecin et philosophe.",
              ],
              box: { label: "Définition", text: "Al-Andalus : nom arabe des territoires de la péninsule Ibérique gouvernés par des musulmans, de 711 à 1492 (prise de Grenade). Ils se réduisent peu à peu sous l'effet de la Reconquista chrétienne." },
            },
            {
              heading: "Des savants qui transmettent et inventent",
              paragraphs: [
                "Les savants du monde musulman ne se contentent pas de traduire : ils inventent aussi. Au IXe siècle, à Bagdad, le mathématicien al-Khwarizmi écrit un traité sur l'al-jabr, qui a donné notre mot « algèbre » ; son nom lui-même a donné le mot « algorithme ». Il fait connaître les chiffres venus d'Inde, avec le zéro : ce sont les chiffres que nous appelons « arabes ».",
                "Le médecin et philosophe persan Avicenne (Ibn Sina, 980-1037) écrit le Canon de la médecine, utilisé dans les universités européennes pendant des siècles. Les astronomes perfectionnent l'astrolabe, un instrument qui sert à mesurer la position des astres et à calculer l'heure.",
                "Au XIIe siècle, à Tolède, ville reprise par les chrétiens en 1085, des traducteurs mettent en latin des livres arabes, dont les traductions d'auteurs grecs. Ainsi, une partie du savoir antique revient en Occident en passant par le monde musulman.",
              ],
              box: { label: "À retenir", text: "Mots venus de l'arabe : algèbre, algorithme, chiffre, zéro, sucre, coton, magasin, douane, amiral. Ils témoignent des échanges entre l'islam et l'Occident chrétien." },
            },
            {
              heading: "La Méditerranée : guerres et échanges",
              paragraphs: [
                "Les contacts sont d'abord guerriers. En Espagne, les royaumes chrétiens du nord mènent la Reconquista : ils prennent Tolède en 1085 et remportent la bataille de Las Navas de Tolosa en 1212. En 1095, à Clermont, le pape Urbain II appelle à la croisade pour délivrer Jérusalem ; les croisés prennent la ville en 1099 et fondent des États latins d'Orient. En 1187, le sultan Saladin reprend Jérusalem.",
                "Mais la guerre n'empêche pas le commerce. Les marchands de Venise et de Gênes fréquentent les ports d'Alexandrie, d'Acre ou de Constantinople. Ils achètent des épices, de la soie, du sucre, du coton et de l'alun, et vendent du bois, des métaux et des draps de laine. Les idées et les techniques circulent avec les marchandises : le papier, les chiffres, de nouvelles cultures.",
              ],
              box: { label: "Repère", text: "762 : fondation de Bagdad. 929 : califat de Cordoue. 1085 : prise de Tolède par les chrétiens. 1095 : appel à la croisade. 1099 : prise de Jérusalem par les croisés. 1187 : Saladin reprend Jérusalem. 1258 : prise de Bagdad par les Mongols." },
            },
          ],
          keyPoints: [
            "Bagdad, fondée en 762, est la capitale des Abbassides, un grand carrefour commercial et un centre de savoir.",
            "Cordoue, capitale d'al-Andalus, devient un califat en 929 ; sa Grande Mosquée devient cathédrale en 1236.",
            "Les savants traduisent les œuvres grecques et inventent : al-Khwarizmi (algèbre), Avicenne (médecine), Averroès (philosophie).",
            "Au XIIe siècle, à Tolède, des livres arabes sont traduits en latin : le savoir antique revient en Occident.",
            "Les contacts sont guerriers (Reconquista, croisades), commerciaux (Venise, Gênes) et culturels (chiffres, mots, savoirs).",
          ],
          example: {
            statement: "Montrez que les contacts entre chrétientés et islam en Méditerranée ne sont pas seulement guerriers. Donnez un exemple de chaque type de contact.",
            solution: [
              "On définit d'abord les types de contacts : guerriers, commerciaux et culturels.",
              "Contacts guerriers : les croisades, lancées par le pape Urbain II en 1095, aboutissent à la prise de Jérusalem en 1099 ; en Espagne, la Reconquista permet aux chrétiens de prendre Tolède en 1085.",
              "Contacts commerciaux : les marchands de Venise et de Gênes achètent épices, soie et sucre dans les ports d'Alexandrie ou d'Acre.",
              "Contacts culturels : à Tolède, au XIIe siècle, des livres arabes sont traduits en latin, et l'Occident adopte les chiffres dits arabes, avec le zéro.",
              "Réponse : malgré les guerres, chrétiens et musulmans commercent et échangent des savoirs ; la Méditerranée est à la fois une frontière et un lieu de rencontre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque événement ou situation dans la bonne catégorie de contact (guerrier, commercial ou culturel) : a) la prise de Jérusalem par les croisés en 1099 ; b) des marchands vénitiens achètent du poivre à Alexandrie ; c) des traducteurs de Tolède mettent en latin un livre d'al-Khwarizmi ; d) la prise de Tolède par le roi de Castille en 1085 ; e) l'arrivée en Europe du mot « sucre » et du produit qu'il désigne.",
              hint: "Demandez-vous ce qui circule : des armées (guerrier), des marchandises (commercial) ou des idées et des savoirs (culturel).",
              solution: [
                "a) Contact guerrier : c'est une conquête militaire.",
                "b) Contact commercial : on achète une marchandise.",
                "c) Contact culturel : un savoir passe d'une langue à l'autre.",
                "d) Contact guerrier : c'est une étape de la Reconquista.",
                "e) Contact commercial et culturel à la fois : le produit est acheté et vendu, et le mot entre dans la langue.",
              ],
            },
            {
              level: 2,
              statement: "Comparez Bagdad et Cordoue en complétant ce tableau pour chaque ville : a) la dynastie qui la gouverne ; b) la date d'un événement important ; c) un monument ou une institution célèbre ; d) un savant lié à la ville ou à son monde. Concluez par une phrase sur ce qu'elles ont en commun.",
              hint: "Bagdad est liée aux Abbassides, Cordoue aux Omeyyades d'Espagne. Relisez les deux premières parties du cours.",
              solution: [
                "Bagdad : a) les Abbassides ; b) fondation en 762 par al-Mansour ; c) la ville ronde, ou la Maison de la sagesse ; d) al-Khwarizmi, mathématicien du IXe siècle.",
                "Cordoue : a) les Omeyyades d'Espagne ; b) proclamation du califat en 929 ; c) la Grande Mosquée commencée en 785 ; d) Averroès, philosophe né à Cordoue au XIIe siècle.",
                "Point commun : ce sont deux capitales de califat, très peuplées et riches, et deux grands centres de savoir où l'on étudie les auteurs grecs.",
                "Conclusion : Bagdad à l'est et Cordoue à l'ouest sont les deux pôles brillants du monde musulman médiéval.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe de 8 à 10 lignes pour répondre à la question : « La Méditerranée, entre le VIIIe et le XIIIe siècle, est-elle seulement un lieu d'affrontement entre chrétiens et musulmans ? ». Votre paragraphe doit contenir au moins trois dates, trois lieux et deux noms de personnes.",
              hint: "Commencez par les affrontements, puis nuancez avec « pourtant » ou « mais » en présentant les échanges commerciaux puis culturels, et terminez par une conclusion qui répond à la question.",
              solution: [
                "Introduction : du VIIIe au XIIIe siècle, chrétiens et musulmans se partagent les rives de la Méditerranée.",
                "Affrontements : en Espagne, les royaumes chrétiens mènent la Reconquista et prennent Tolède en 1085 ; en Orient, après l'appel du pape Urbain II en 1095, les croisés prennent Jérusalem en 1099, que Saladin reprend en 1187.",
                "Pourtant, les échanges commerciaux continuent : les marchands de Venise et de Gênes achètent épices, soie et sucre à Alexandrie ou à Acre.",
                "Les échanges culturels sont aussi très importants : à Tolède, des traducteurs mettent en latin les livres arabes, et l'Occident découvre les chiffres dits arabes, l'algèbre d'al-Khwarizmi et la médecine d'Avicenne.",
                "Conclusion : la Méditerranée n'est donc pas seulement un lieu d'affrontement ; c'est aussi un espace de commerce et de transmission des savoirs entre les deux mondes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : Bagdad, Cordoue et les échanges en Méditerranée.",
            statements: [
              { text: "Les chiffres que nous appelons « arabes » sont d'origine indienne.", true: true, why: "Ils viennent d'Inde ; les savants du monde musulman les ont transmis à l'Occident, avec le zéro." },
              { text: "Bagdad est la capitale des Omeyyades.", true: false, why: "Bagdad, fondée en 762, est la capitale des Abbassides ; les Omeyyades gouvernaient depuis Damas." },
              { text: "Pendant les croisades, tout commerce s'arrête entre chrétiens et musulmans.", true: false, why: "Le commerce continue : Vénitiens et Génois fréquentent les ports d'Alexandrie ou d'Acre." },
              { text: "Le mot « algorithme » vient du nom du mathématicien al-Khwarizmi.", true: true, why: "Le nom latinisé d'al-Khwarizmi a donné le mot « algorithme »." },
              { text: "La Grande Mosquée de Cordoue a été transformée en cathédrale après la prise de la ville par les chrétiens.", true: true, why: "Après la prise de Cordoue en 1236, elle devient une cathédrale." },
              { text: "Les savants du monde musulman ont seulement recopié les livres grecs, sans rien inventer.", true: false, why: "Ils traduisent mais aussi innovent : algèbre, médecine d'Avicenne, perfectionnement de l'astrolabe." },
            ],
          },
          quiz: [
            {
              q: "Qui fonde Bagdad en 762 ?",
              options: ["Haroun al-Rachid", "Saladin", "Al-Mansour", "Muhammad"],
              answer: 2,
              why: "Bagdad est fondée en 762 par le calife abbasside al-Mansour, au bord du Tigre.",
            },
            {
              q: "Quel mot français vient du titre d'un livre d'al-Khwarizmi ?",
              options: ["Algèbre", "Astrolabe", "Croisade", "Mosquée"],
              answer: 0,
              why: "Le traité d'al-Khwarizmi sur l'al-jabr a donné notre mot « algèbre ».",
            },
            {
              q: "Dans quelle ville, reprise par les chrétiens en 1085, traduit-on des livres arabes en latin au XIIe siècle ?",
              options: ["Bagdad", "Tolède", "Damas", "Alexandrie"],
              answer: 1,
              why: "À Tolède, au XIIe siècle, des traducteurs mettent en latin des ouvrages arabes, dont des traductions d'auteurs grecs.",
            },
            {
              q: "Quel pape appelle à la croisade en 1095 ?",
              options: ["Léon III", "Léon IX", "Grégoire VII", "Urbain II"],
              answer: 3,
              why: "Le pape Urbain II lance l'appel à la croisade à Clermont en 1095 ; les croisés prennent Jérusalem en 1099.",
            },
            {
              q: "Quelles villes italiennes dominent le commerce avec les ports musulmans ?",
              options: ["Rome et Naples", "Milan et Turin", "Venise et Gênes", "Florence et Pise"],
              answer: 2,
              why: "Les marchands de Venise et de Gênes fréquentent Alexandrie, Acre ou Constantinople pour acheter épices, soie et sucre.",
            },
          ],
          trap: "Réduire les relations entre chrétiens et musulmans aux seules croisades : il faut toujours citer aussi les échanges commerciaux et culturels, qui continuent pendant les guerres.",
          method: "Pour répondre à une question sur des « contacts », faites trois paragraphes, guerriers, commerciaux, culturels, avec pour chacun une date, un lieu et un exemple : la réponse est complète et facile à relire.",
        },
      ],
    },
    {
      id: 'croissance-demographique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'croissance-population',
          title: 'La croissance démographique et ses effets',
          minutes: 30,
          objectives: [
            "Décrire l'évolution de la population mondiale depuis 1800.",
            "Calculer un taux de natalité, un taux de mortalité et un accroissement naturel.",
            "Expliquer les étapes de la transition démographique.",
            "Identifier les effets de la croissance démographique selon les pays.",
          ],
          course: [
            {
              heading: "Une croissance très rapide depuis deux siècles",
              paragraphs: [
                "Pendant des milliers d'années, la population humaine augmente très lentement. Vers 1800, la Terre compte environ 1 milliard d'habitants. Ensuite, la croissance s'accélère : 2 milliards en 1927, 4 milliards en 1974, et 8 milliards en novembre 2022, selon l'ONU. En 2025, nous sommes environ 8,2 milliards.",
                "La population est très inégalement répartie. Plus de la moitié de l'humanité vit en Asie. Depuis 2023, l'Inde, avec plus de 1,4 milliard d'habitants, est le pays le plus peuplé du monde, devant la Chine. L'Afrique compte environ 1,5 milliard d'habitants et c'est le continent où la population augmente le plus vite.",
                "Aujourd'hui, la croissance ralentit : la population mondiale augmente de moins de 1 % par an. Selon les projections de l'ONU publiées en 2024, elle pourrait atteindre un maximum d'environ 10,3 milliards d'habitants dans les années 2080, puis diminuer légèrement. Ce sont des projections, pas des certitudes.",
              ],
              box: { label: "Repère", text: "Population mondiale : environ 1 milliard vers 1800, 2 milliards en 1927, 4 milliards en 1974, 8 milliards en 2022 (ONU)." },
            },
            {
              heading: "Comprendre les chiffres de la population",
              paragraphs: [
                "La population d'un territoire change à cause des naissances, des décès et des migrations. Le taux de natalité est le nombre de naissances dans l'année pour 1 000 habitants ; le taux de mortalité est le nombre de décès dans l'année pour 1 000 habitants. On les écrit en pour mille (‰).",
                "L'accroissement naturel est la différence entre les naissances et les décès. S'il est positif, la population augmente ; s'il est négatif, elle diminue (sans compter les migrations). Exemple, avec des données fictives : une ville de 10 000 habitants compte 150 naissances et 80 décès dans l'année. Sa natalité est de 15 ‰, sa mortalité de 8 ‰, et son accroissement naturel de 150 - 80 = 70 personnes, soit 7 ‰.",
                "On utilise aussi la fécondité, le nombre moyen d'enfants par femme. Il faut environ 2,1 enfants par femme pour que les générations se remplacent : c'est le seuil de renouvellement des générations. Dans le monde, la fécondité est d'environ 2,2 enfants par femme, mais elle est d'environ 6 au Niger et tombe sous 1 en Corée du Sud. L'espérance de vie, enfin, est le nombre moyen d'années que peut espérer vivre un nouveau-né : environ 73 ans dans le monde.",
              ],
              box: { label: "Formule", text: "Taux de natalité = nombre de naissances ÷ population × 1 000. Taux de mortalité = nombre de décès ÷ population × 1 000. Accroissement naturel = naissances - décès (ou taux de natalité - taux de mortalité)." },
            },
            {
              heading: "La transition démographique",
              paragraphs: [
                "Les démographes ont observé que les pays passent par plusieurs étapes, appelées la transition démographique. Au départ, la natalité et la mortalité sont toutes les deux très élevées : la population augmente peu. C'était le cas de la France avant le XVIIIe siècle.",
                "Ensuite, la mortalité baisse grâce aux progrès de l'alimentation, de l'hygiène et de la médecine (vaccins, eau potable), mais la natalité reste forte : la population augmente très vite. Puis la natalité baisse à son tour, car les enfants survivent mieux, les filles vont plus longtemps à l'école, les femmes travaillent, la contraception se diffuse et les familles vivent en ville : la croissance ralentit.",
                "À la fin, natalité et mortalité sont toutes les deux basses : la population augmente peu, ou même diminue. L'Europe a fait cette transition aux XIXe et XXe siècles. Beaucoup de pays d'Afrique subsaharienne sont encore au milieu de la transition, avec une mortalité qui a baissé et une natalité encore élevée.",
              ],
              box: { label: "À retenir", text: "Transition démographique : 1) natalité et mortalité fortes ; 2) la mortalité baisse, la population augmente très vite ; 3) la natalité baisse, la croissance ralentit ; 4) natalité et mortalité basses." },
            },
            {
              heading: "Des situations contrastées et leurs effets",
              paragraphs: [
                "Dans les pays à forte croissance, comme le Niger ou le Nigeria, la population est très jeune. Il faut chaque année construire des écoles, former des enseignants, créer des emplois, des logements, produire plus de nourriture. Les villes grandissent très vite, parfois avec des quartiers pauvres construits sans autorisation. Mais cette jeunesse est aussi une chance : une population active nombreuse dans les années à venir.",
                "Dans d'autres pays, la fécondité est très basse : environ 1,6 enfant par femme en France, environ 1,2 en Italie ou au Japon. La population vieillit : il y a de plus en plus de retraités et de personnes âgées à soigner, et de moins en moins d'actifs pour payer les retraites. La population du Japon diminue depuis le début des années 2010, celle de la Chine depuis 2022.",
                "La croissance démographique pose donc des défis différents selon les pays : nourrir, scolariser et employer une population jeune et nombreuse dans les uns, prendre en charge une population âgée dans les autres. Elle augmente aussi les besoins en ressources (eau, énergie, nourriture), que nous étudierons dans un autre thème.",
              ],
            },
          ],
          keyPoints: [
            "La population mondiale est passée d'environ 1 milliard vers 1800 à 8 milliards en 2022 ; sa croissance ralentit.",
            "Depuis 2023, l'Inde est le pays le plus peuplé ; l'Afrique est le continent qui croît le plus vite.",
            "Taux de natalité et de mortalité : nombre de naissances ou de décès pour 1 000 habitants (‰).",
            "Accroissement naturel = naissances - décès ; seuil de renouvellement : environ 2,1 enfants par femme.",
            "Transition démographique : la mortalité baisse d'abord, puis la natalité ; entre les deux, la population augmente très vite.",
            "Pays jeunes : besoins en écoles, emplois, nourriture. Pays vieillissants : retraites, soins, baisse des actifs.",
          ],
          example: {
            statement: "Un pays fictif compte 20 millions d'habitants. Dans l'année, il y a 600 000 naissances et 200 000 décès (données fictives). Calculez son taux de natalité, son taux de mortalité et son accroissement naturel. Sa population augmente-t-elle vite ?",
            solution: [
              "Taux de natalité : 600 000 ÷ 20 000 000 × 1 000 = 30 ‰.",
              "Taux de mortalité : 200 000 ÷ 20 000 000 × 1 000 = 10 ‰.",
              "Accroissement naturel : 600 000 - 200 000 = 400 000 personnes, soit 30 - 10 = 20 ‰.",
              "20 ‰, c'est 2 % : la population augmente de 2 % en un an, ce qui est rapide (la moyenne mondiale est inférieure à 1 %).",
              "Réponse : natalité 30 ‰, mortalité 10 ‰, accroissement naturel de 400 000 personnes (20 ‰) : la population de ce pays augmente vite ; il est au milieu de sa transition démographique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une ville fictive de 50 000 habitants a compté, en une année, 600 naissances et 450 décès (données fictives). a) Calculez son taux de natalité. b) Calculez son taux de mortalité. c) Calculez son accroissement naturel, en nombre de personnes puis en ‰.",
              hint: "Divisez le nombre de naissances (ou de décès) par la population, puis multipliez par 1 000.",
              solution: [
                "a) Natalité : 600 ÷ 50 000 × 1 000 = 12 ‰.",
                "b) Mortalité : 450 ÷ 50 000 × 1 000 = 9 ‰.",
                "c) Accroissement naturel : 600 - 450 = 150 personnes, soit 12 - 9 = 3 ‰.",
                "Résultat : natalité 12 ‰, mortalité 9 ‰, accroissement naturel de 150 personnes (3 ‰).",
              ],
            },
            {
              level: 2,
              statement: "Voici les taux de quatre pays fictifs (données fictives). Pays A : natalité 45 ‰, mortalité 35 ‰. Pays B : natalité 40 ‰, mortalité 12 ‰. Pays C : natalité 20 ‰, mortalité 8 ‰. Pays D : natalité 9 ‰, mortalité 11 ‰. a) Calculez l'accroissement naturel de chaque pays. b) Associez chaque pays à une étape de la transition démographique (1, 2, 3 ou 4). c) Quel pays perd des habitants si l'on ne compte pas les migrations ?",
              hint: "Accroissement naturel = natalité - mortalité. Regardez ensuite si chaque taux est élevé ou bas, et lequel a commencé à baisser.",
              solution: [
                "a) A : 45 - 35 = 10 ‰. B : 40 - 12 = 28 ‰. C : 20 - 8 = 12 ‰. D : 9 - 11 = -2 ‰.",
                "b) A : étape 1, natalité et mortalité très élevées, croissance faible. B : étape 2, la mortalité a baissé mais la natalité reste forte, croissance très rapide. C : étape 3, la natalité baisse à son tour, la croissance ralentit. D : étape 4, natalité et mortalité basses.",
                "c) Le pays D a un accroissement naturel négatif (-2 ‰) : sans migrations, sa population diminue.",
                "Résultat : la croissance la plus forte est au milieu de la transition (pays B), pas au début ni à la fin.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux pays fictifs ont chacun 40 millions d'habitants (données fictives). Pays Jeune : natalité 38 ‰, mortalité 8 ‰. Pays Âgé : natalité 8 ‰, mortalité 11 ‰. a) Calculez pour chacun le nombre de naissances, de décès et l'accroissement naturel en un an. b) Si tous les enfants nés dans l'année du Pays Jeune vont à l'école six ans plus tard, combien de classes de 30 élèves faudra-t-il ouvrir pour eux ? c) Citez deux défis pour chaque pays.",
              hint: "Nombre de naissances = population × natalité ÷ 1 000. Pour b), divisez le nombre de naissances par 30 et arrondissez.",
              solution: [
                "a) Pays Jeune : naissances 40 000 000 × 38 ÷ 1 000 = 1 520 000 ; décès 40 000 000 × 8 ÷ 1 000 = 320 000 ; accroissement naturel 1 200 000 personnes en un an.",
                "Pays Âgé : naissances 40 000 000 × 8 ÷ 1 000 = 320 000 ; décès 40 000 000 × 11 ÷ 1 000 = 440 000 ; accroissement naturel 320 000 - 440 000 = -120 000 personnes.",
                "b) 1 520 000 ÷ 30 ≈ 50 667 : il faudrait ouvrir environ 50 700 classes, et donc recruter autant d'enseignants (en supposant que tous les enfants survivent jusqu'à six ans).",
                "c) Pays Jeune : construire des écoles et former des enseignants ; créer assez d'emplois et produire assez de nourriture pour une population qui augmente de 1,2 million par an.",
                "Pays Âgé : financer les retraites et les soins d'une population vieillissante ; faire face au manque de jeunes actifs, par exemple en accueillant des travailleurs étrangers.",
                "Conclusion : les deux pays ont la même population, mais des défis opposés, liés à leur place dans la transition démographique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la croissance de la population mondiale.",
            items: [
              "1 milliard d'habitants (vers 1800)",
              "2 milliards d'habitants (1927)",
              "3 milliards d'habitants (1960)",
              "4 milliards d'habitants (1974)",
              "6 milliards d'habitants (1999)",
              "8 milliards d'habitants (2022)",
            ],
          },
          quiz: [
            {
              q: "Combien d'habitants la Terre compte-t-elle environ en 2025 ?",
              options: ["6 milliards", "8,2 milliards", "10,3 milliards", "1,4 milliard"],
              answer: 1,
              why: "La Terre a dépassé 8 milliards d'habitants en 2022 ; elle en compte environ 8,2 milliards en 2025.",
            },
            {
              q: "Qu'est-ce que l'accroissement naturel ?",
              options: ["Les naissances moins les décès", "Le nombre d'enfants par femme", "Les arrivées moins les départs", "Les naissances plus les décès"],
              answer: 0,
              why: "L'accroissement naturel est la différence entre les naissances et les décès ; les arrivées et les départs forment le solde migratoire.",
            },
            {
              q: "Quel est le pays le plus peuplé du monde depuis 2023 ?",
              options: ["La Chine", "Les États-Unis", "Le Nigeria", "L'Inde"],
              answer: 3,
              why: "Selon l'ONU, l'Inde a dépassé la Chine en 2023, avec plus de 1,4 milliard d'habitants.",
            },
            {
              q: "Pendant la transition démographique, qu'est-ce qui baisse en premier ?",
              options: ["La natalité", "La population", "La mortalité", "La fécondité"],
              answer: 2,
              why: "La mortalité baisse d'abord grâce aux progrès de l'hygiène et de la médecine ; la natalité ne baisse que plus tard.",
            },
            {
              q: "Combien d'enfants par femme faut-il environ pour que les générations se remplacent ?",
              options: ["1,2", "3,5", "6", "2,1"],
              answer: 3,
              why: "Le seuil de renouvellement des générations est d'environ 2,1 enfants par femme.",
            },
          ],
          trap: "Confondre le taux de natalité, en naissances pour 1 000 habitants, et la fécondité, en enfants par femme : 15 ‰ de natalité ne veut pas dire 15 enfants par femme.",
          method: "Pour chaque calcul de taux, vérifiez l'ordre de grandeur : une natalité ou une mortalité réelle se situe presque toujours entre 5 et 50 ‰. Si vous trouvez 300 ‰ ou 0,03 ‰, vous avez oublié de multiplier ou de diviser.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'richesse-pauvrete',
          title: 'La répartition de la richesse et de la pauvreté dans le monde',
          minutes: 30,
          objectives: [
            "Définir la richesse et la pauvreté et les indicateurs qui les mesurent : PIB, PIB par habitant, seuil de pauvreté.",
            "Décrire la répartition inégale de la richesse dans le monde.",
            "Montrer que les inégalités existent aussi à l'intérieur des pays et des villes.",
          ],
          course: [
            {
              heading: "Mesurer la richesse",
              paragraphs: [
                "Pour mesurer la richesse d'un pays, on utilise le PIB, le produit intérieur brut : c'est la valeur de tous les biens (voitures, blé, vêtements...) et de tous les services (soins, transports, enseignement...) produits dans le pays en une année. On l'exprime souvent en dollars pour comparer les pays.",
                "Un pays très peuplé peut avoir un gros PIB sans que ses habitants soient riches. On calcule donc le PIB par habitant : PIB ÷ population. Exemple avec des données fictives : un pays qui produit 300 milliards de dollars par an et compte 10 millions d'habitants a un PIB par habitant de 30 000 dollars.",
                "Le PIB par habitant est une moyenne : il ne dit pas comment la richesse est partagée. Dans un pays où le PIB par habitant est élevé, une partie de la population peut quand même vivre dans la pauvreté.",
              ],
              box: { label: "Formule", text: "PIB par habitant = PIB ÷ nombre d'habitants. C'est une moyenne, qui ne montre pas les inégalités entre les habitants." },
            },
            {
              heading: "Un monde inégal",
              paragraphs: [
                "Les pays les plus riches se trouvent en Amérique du Nord, en Europe de l'Ouest, au Japon, en Corée du Sud ou en Australie. Dans ces pays développés, un habitant produit en moyenne des dizaines, voire des centaines de fois plus de richesse qu'un habitant des pays les plus pauvres.",
                "Certains pays connaissent depuis quelques décennies une croissance économique très rapide : on les appelle les pays émergents. C'est le cas de la Chine, de l'Inde ou du Brésil. Ils sont devenus de grandes puissances économiques, mais une partie importante de leur population reste pauvre.",
                "À l'opposé, l'ONU a établi une liste d'une quarantaine de pays les moins avancés (PMA), en majorité en Afrique subsaharienne, mais aussi Haïti, l'Afghanistan ou le Yémen. Depuis 2025, la Banque mondiale considère qu'une personne vit dans l'extrême pauvreté si elle dispose de moins de 3 dollars par jour. Les personnes dans cette situation vivent en majorité en Afrique subsaharienne.",
              ],
              box: { label: "Définition", text: "Pays émergent : pays à forte croissance économique qui s'intègre à l'économie mondiale (Chine, Inde, Brésil). PMA, pays les moins avancés : pays les plus pauvres et les plus fragiles, selon une liste établie par l'ONU." },
            },
            {
              heading: "Des inégalités à l'intérieur des pays et des villes",
              paragraphs: [
                "Les inégalités existent aussi entre les régions d'un même pays. En Chine, les régions côtières, ouvertes sur le commerce mondial, sont beaucoup plus riches que l'intérieur du pays. Au Brésil, le Sud-Est, autour de São Paulo et de Rio de Janeiro, est plus riche que le Nordeste.",
                "Dans les grandes villes, quartiers riches et quartiers pauvres se côtoient. À Rio de Janeiro, des favelas, quartiers d'habitat précaire construits sur les collines, dominent des quartiers d'immeubles luxueux au bord de la mer. Ailleurs, on parle de bidonvilles : des quartiers de maisons construites avec des matériaux de récupération, souvent sans eau courante ni égouts. Les plus riches vivent parfois dans des quartiers fermés, protégés par des murs et des gardiens.",
                "Les pays riches ont aussi leurs pauvres. En France, on considère comme pauvre une personne qui vit avec moins de 60 % du revenu médian ; selon l'Insee, c'est le cas d'environ 15 % de la population ces dernières années. Les associations comme les Restos du cœur ou le Secours populaire viennent en aide aux plus démunis.",
              ],
            },
            {
              heading: "La pauvreté, plus qu'un manque d'argent",
              paragraphs: [
                "Être pauvre, ce n'est pas seulement avoir peu d'argent. C'est aussi avoir du mal à se nourrir, à se soigner, à se loger, à aller à l'école ou à avoir accès à l'eau potable et à l'électricité. Ces difficultés s'entretiennent : un enfant malade ou qui doit travailler va moins à l'école, et aura plus tard moins de chances de trouver un emploi bien payé.",
                "Les causes de la pauvreté sont multiples : guerres, catastrophes naturelles, mauvaise gouvernance, dépendance à l'exportation d'un seul produit, manque d'infrastructures. Mais la pauvreté n'est pas une fatalité : la part de la population mondiale vivant dans l'extrême pauvreté a fortement baissé depuis 1990, surtout grâce au développement de la Chine et de l'Inde. Elle recule en revanche beaucoup plus lentement en Afrique subsaharienne.",
              ],
              box: { label: "À retenir", text: "La richesse est très inégalement répartie : entre pays développés, pays émergents et PMA, mais aussi entre les régions d'un même pays et entre les quartiers d'une même ville." },
            },
          ],
          keyPoints: [
            "Le PIB mesure la valeur de tout ce qui est produit dans un pays en un an ; le PIB par habitant = PIB ÷ population.",
            "Le PIB par habitant est une moyenne qui cache les inégalités.",
            "Pays développés, pays émergents (Chine, Inde, Brésil) et pays les moins avancés (PMA, surtout en Afrique subsaharienne).",
            "Extrême pauvreté : moins de 3 dollars par jour selon la Banque mondiale (depuis 2025).",
            "Les inégalités existent aussi entre régions et entre quartiers : favelas, bidonvilles, quartiers fermés.",
            "La pauvreté, c'est aussi le manque d'accès à la nourriture, aux soins, à l'école, à l'eau et au logement.",
          ],
          example: {
            statement: "Pourquoi le PIB par habitant ne suffit-il pas pour savoir si les habitants d'un pays vivent bien ? Expliquez avec un exemple.",
            solution: [
              "On rappelle la définition : le PIB par habitant est le PIB divisé par le nombre d'habitants, c'est-à-dire une moyenne.",
              "Premier problème : une moyenne cache les inégalités. Si quelques personnes sont très riches et la majorité très pauvre, la moyenne peut être élevée alors que la plupart des habitants vivent mal.",
              "Exemple : au Brésil, les quartiers riches de Rio de Janeiro côtoient des favelas ; le PIB par habitant du pays ne montre pas cet écart.",
              "Deuxième problème : le PIB mesure la production, pas l'accès à l'école, aux soins ou à l'eau potable, qui comptent aussi pour bien vivre.",
              "Réponse : le PIB par habitant donne une idée de la richesse moyenne d'un pays, mais il ne montre ni le partage de cette richesse, ni les conditions de vie réelles ; il faut le compléter par d'autres indicateurs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez le PIB par habitant de trois pays fictifs (données fictives). Pays A : PIB de 450 milliards de dollars, 9 millions d'habitants. Pays B : PIB de 900 milliards de dollars, 300 millions d'habitants. Pays C : PIB de 12 milliards de dollars, 20 millions d'habitants. Quel pays a le plus gros PIB ? Quel pays a les habitants les plus riches en moyenne ?",
              hint: "Divisez le PIB par le nombre d'habitants. Attention aux unités : 450 milliards ÷ 9 millions revient à calculer 450 000 ÷ 9.",
              solution: [
                "Pays A : 450 000 000 000 ÷ 9 000 000 = 50 000 dollars par habitant.",
                "Pays B : 900 000 000 000 ÷ 300 000 000 = 3 000 dollars par habitant.",
                "Pays C : 12 000 000 000 ÷ 20 000 000 = 600 dollars par habitant.",
                "Le pays B a le plus gros PIB (900 milliards), mais c'est le pays A qui a le PIB par habitant le plus élevé (50 000 dollars).",
                "Résultat : un gros PIB ne signifie pas des habitants riches ; il faut tenir compte de la population.",
              ],
            },
            {
              level: 2,
              statement: "Voici une photographie décrite pour l'exercice. À Rio de Janeiro, au Brésil, une colline est couverte de petites maisons en briques, serrées les unes contre les autres, reliées par des escaliers étroits ; des fils électriques s'entremêlent au-dessus des ruelles. Au pied de la colline, on voit de grands immeubles modernes avec des piscines sur les toits, et une plage. a) Nommez les deux types d'espaces visibles. b) Relevez deux indices de pauvreté et deux indices de richesse. c) Que montre cette photographie ?",
              hint: "Le quartier sur la colline porte un nom particulier au Brésil. Pour c), pensez à l'échelle : on est à l'intérieur d'une seule ville.",
              solution: [
                "a) Sur la colline, une favela, quartier d'habitat précaire ; en bas, un quartier aisé d'immeubles de luxe au bord de la mer.",
                "b) Pauvreté : maisons petites et serrées, construites en briques, accès par des escaliers étroits, branchements électriques désordonnés. Richesse : grands immeubles modernes, piscines sur les toits, proximité de la plage.",
                "c) Cette photographie montre que les inégalités de richesse existent à l'intérieur d'une même ville : riches et pauvres vivent très près les uns des autres, mais dans des conditions très différentes.",
                "Conclusion : à Rio, comme dans beaucoup de grandes villes, la pauvreté et la richesse se côtoient.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans un village fictif de 10 habitants, voici les revenus annuels (données fictives) : 1 habitant gagne 200 000 euros, 2 habitants gagnent 30 000 euros chacun et 7 habitants gagnent 5 000 euros chacun. a) Calculez le revenu total du village. b) Calculez le revenu moyen par habitant. c) Combien d'habitants gagnent moins que la moyenne ? d) Quelle part du revenu total l'habitant le plus riche gagne-t-il, en pourcentage ? e) Que montre cet exemple sur les moyennes comme le PIB par habitant ?",
              hint: "Le revenu moyen est le total divisé par le nombre d'habitants. Pour d), divisez 200 000 par le total, puis multipliez par 100.",
              solution: [
                "a) Revenu total : 200 000 + 2 × 30 000 + 7 × 5 000 = 200 000 + 60 000 + 35 000 = 295 000 euros.",
                "b) Revenu moyen : 295 000 ÷ 10 = 29 500 euros par habitant.",
                "c) Les 7 habitants qui gagnent 5 000 euros gagnent moins que la moyenne : 7 habitants sur 10.",
                "d) 200 000 ÷ 295 000 × 100 ≈ 68 % : un seul habitant gagne plus des deux tiers du revenu du village.",
                "e) La moyenne (29 500 euros) laisse croire que les habitants sont assez aisés, alors que la plupart gagnent six fois moins. Comme le PIB par habitant, une moyenne peut cacher de très fortes inégalités.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "PIB", right: "Valeur de tout ce qui est produit dans un pays en un an" },
              { left: "PIB par habitant", right: "PIB divisé par le nombre d'habitants" },
              { left: "Pays émergent", right: "Pays à forte croissance qui s'intègre à l'économie mondiale" },
              { left: "PMA", right: "Pays parmi les plus pauvres, selon une liste de l'ONU" },
              { left: "Favela", right: "Quartier d'habitat précaire au Brésil" },
              { left: "Extrême pauvreté", right: "Vivre avec moins de 3 dollars par jour" },
            ],
          },
          quiz: [
            {
              q: "Que mesure le PIB ?",
              options: ["Le nombre d'habitants d'un pays", "La valeur de la production d'un pays en un an", "L'argent que possèdent toutes les banques du pays", "Le niveau d'éducation"],
              answer: 1,
              why: "Le PIB est la valeur de tous les biens et services produits dans un pays en une année.",
            },
            {
              q: "Lequel de ces pays est un pays émergent ?",
              options: ["Le Brésil", "Le Japon", "Haïti", "La France"],
              answer: 0,
              why: "Le Brésil, comme la Chine et l'Inde, connaît une forte croissance économique : c'est un pays émergent.",
            },
            {
              q: "Où vivent la majorité des personnes en situation d'extrême pauvreté ?",
              options: ["En Europe de l'Ouest et du Nord", "En Amérique du Nord", "En Océanie", "En Afrique subsaharienne"],
              answer: 3,
              why: "La majorité des personnes vivant avec moins de 3 dollars par jour se trouvent en Afrique subsaharienne.",
            },
            {
              q: "Pourquoi le PIB par habitant peut-il être trompeur ?",
              options: ["Il est calculé tous les dix ans", "Il ne compte pas les services", "C'est une moyenne qui cache les inégalités", "Il ne concerne que les habitants des grandes villes"],
              answer: 2,
              why: "Le PIB par habitant est une moyenne : quelques très riches peuvent faire monter la moyenne alors que la majorité vit pauvrement.",
            },
            {
              q: "Comment appelle-t-on les quartiers riches entourés de murs et surveillés par des gardiens ?",
              options: ["Des bidonvilles", "Des quartiers fermés", "Des favelas", "Des villages de campagne"],
              answer: 1,
              why: "Les quartiers fermés sont réservés à des habitants aisés, protégés par des murs et des gardiens.",
            },
          ],
          trap: "Croire que le pays au plus gros PIB est forcément celui dont les habitants sont les plus riches : il faut diviser par la population, et même le PIB par habitant reste une moyenne qui cache des inégalités.",
          method: "Pour décrire des inégalités, changez d'échelle : comparez d'abord des pays (échelle mondiale), puis des régions d'un même pays, puis des quartiers d'une même ville. Une réponse qui utilise les trois échelles est complète.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mesurer-developpement',
          title: 'Mesurer le développement : indicateurs et cartes',
          minutes: 30,
          objectives: [
            "Définir le développement et le distinguer de la croissance économique.",
            "Expliquer comment est construit l'indice de développement humain (IDH).",
            "Lire et compléter une carte du développement à partir d'un indicateur.",
            "Identifier les limites d'un indicateur.",
          ],
          course: [
            {
              heading: "Croissance et développement",
              paragraphs: [
                "La croissance économique, c'est l'augmentation de la production de richesses d'un pays, mesurée par le PIB. Le développement, c'est l'amélioration des conditions de vie de l'ensemble de la population : mieux se nourrir, se soigner, s'instruire, se loger, vivre en sécurité et librement.",
                "Les deux sont liés, mais ne vont pas toujours ensemble. Un pays peut avoir une forte croissance grâce au pétrole ou aux mines, sans que la majorité de sa population en profite, si les richesses sont captées par une minorité. À l'inverse, un pays aux ressources modestes peut obtenir de bons résultats en matière de santé et d'éducation.",
              ],
              box: { label: "Définition", text: "Développement : amélioration des conditions de vie de toute la population (santé, éducation, revenu, logement, libertés). Croissance : augmentation de la production de richesses." },
            },
            {
              heading: "L'IDH, un indicateur qui combine trois dimensions",
              paragraphs: [
                "Pour mesurer le développement, le Programme des Nations unies pour le développement (PNUD) a créé en 1990 l'indice de développement humain, l'IDH. Il s'inspire des travaux des économistes Mahbub ul Haq et Amartya Sen. L'IDH combine trois dimensions : la santé, mesurée par l'espérance de vie à la naissance ; l'éducation, mesurée par la durée de scolarisation (moyenne des adultes et attendue pour les enfants) ; le niveau de vie, mesuré par le revenu par habitant.",
                "L'IDH est compris entre 0 et 1 : plus il est proche de 1, plus le pays est développé. Dans le rapport du PNUD publié en 2025, l'Islande, la Norvège ou la Suisse dépassent 0,95, la France est à environ 0,92, alors que le Soudan du Sud, la Somalie ou le Niger sont autour de 0,4.",
              ],
              box: { label: "Repère", text: "Catégories de l'IDH : très élevé (0,800 et plus), élevé (de 0,700 à 0,799), moyen (de 0,550 à 0,699), faible (moins de 0,550)." },
            },
            {
              heading: "D'autres indicateurs et les limites des moyennes",
              paragraphs: [
                "On utilise aussi d'autres indicateurs, plus simples : l'espérance de vie, le taux de mortalité infantile (nombre d'enfants qui meurent avant un an pour 1 000 naissances), le taux d'alphabétisation (part des adultes qui savent lire et écrire), l'accès à l'eau potable, le nombre de médecins pour 10 000 habitants ou l'accès à Internet.",
                "Tout indicateur a des limites. L'IDH est une moyenne nationale : il ne montre pas les inégalités entre riches et pauvres, entre villes et campagnes, entre femmes et hommes. Il ne mesure pas non plus l'état de l'environnement ni les libertés. C'est pourquoi le PNUD calcule aussi un IDH ajusté aux inégalités, et pourquoi il faut toujours croiser plusieurs indicateurs.",
              ],
            },
            {
              heading: "Représenter le développement sur une carte",
              paragraphs: [
                "Pour représenter un indicateur comme l'IDH, on utilise une carte par plages de couleurs, appelée carte choroplèthe. On découpe les valeurs en classes (par exemple les quatre catégories de l'IDH), puis on donne à chaque classe une nuance d'une même couleur, du plus clair pour les valeurs faibles au plus foncé pour les valeurs fortes. Chaque pays est colorié selon sa classe.",
                "Pour représenter une quantité, comme une population ou un PIB, on utilise plutôt des cercles proportionnels : plus la quantité est grande, plus le cercle est grand. Une carte complète a toujours un titre, une légende, une orientation, une échelle et la source des données.",
                "Sur la carte mondiale de l'IDH, on observe que les pays au développement très élevé se trouvent surtout en Europe, en Amérique du Nord, au Japon, en Corée du Sud et en Australie. Les pays au développement faible sont surtout en Afrique subsaharienne. Entre les deux, de nombreux pays d'Amérique latine, d'Asie et d'Afrique du Nord ont un développement élevé ou moyen.",
              ],
              box: { label: "Règle", text: "Un taux ou un indice (IDH, espérance de vie) : plages de couleurs, du clair au foncé. Une quantité (population, PIB) : cercles proportionnels. Toujours : titre, légende, orientation, échelle, source." },
            },
          ],
          keyPoints: [
            "La croissance est l'augmentation de la production ; le développement est l'amélioration des conditions de vie de tous.",
            "L'IDH, créé en 1990 par le PNUD, combine santé (espérance de vie), éducation (scolarisation) et niveau de vie (revenu).",
            "L'IDH va de 0 à 1 ; au-dessus de 0,800 il est très élevé, en dessous de 0,550 il est faible.",
            "Autres indicateurs : mortalité infantile, alphabétisation, accès à l'eau potable, nombre de médecins.",
            "Carte choroplèthe : plages d'une même couleur, du clair (valeurs faibles) au foncé (valeurs fortes).",
            "Un indicateur national est une moyenne : il cache les inégalités internes.",
          ],
          example: {
            statement: "Pourquoi l'IDH est-il souvent préféré au PIB par habitant pour mesurer le développement ? Donnez aussi une limite de l'IDH.",
            solution: [
              "On rappelle ce que mesure le PIB par habitant : la richesse produite en moyenne par habitant, c'est-à-dire seulement le niveau économique.",
              "L'IDH, lui, combine trois dimensions : la santé (espérance de vie), l'éducation (durée de scolarisation) et le niveau de vie (revenu par habitant).",
              "Il mesure donc mieux les conditions de vie réelles : un pays riche où l'on vit peu longtemps et où l'on va peu à l'école aura un IDH plus faible que son PIB par habitant ne le laisserait penser.",
              "Limite : l'IDH reste une moyenne nationale ; il ne montre pas les inégalités entre les habitants, ni l'état de l'environnement ou des libertés.",
              "Réponse : l'IDH est préféré parce qu'il prend en compte la santé et l'éducation en plus du revenu, mais, comme toute moyenne, il cache les inégalités internes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces pays fictifs dans les quatre catégories de l'IDH (très élevé, élevé, moyen, faible) : A : 0,95 ; B : 0,75 ; C : 0,62 ; D : 0,42 ; E : 0,80 ; F : 0,55.",
              hint: "Rappelez-vous les seuils : 0,800, 0,700 et 0,550. Une valeur égale à un seuil appartient à la catégorie qui commence à ce seuil.",
              solution: [
                "A (0,95) et E (0,80) : IDH très élevé, car 0,80 = 0,800.",
                "B (0,75) : IDH élevé, entre 0,700 et 0,799.",
                "C (0,62) et F (0,55) : IDH moyen, entre 0,550 et 0,699.",
                "D (0,42) : IDH faible, moins de 0,550.",
              ],
            },
            {
              level: 2,
              statement: "Vous devez réaliser une carte choroplèthe de l'espérance de vie dans six pays fictifs (données fictives) : A : 52 ans ; B : 64 ans ; C : 71 ans ; D : 83 ans ; E : 79 ans ; F : 58 ans. La légende comporte quatre classes : moins de 60 ans ; de 60 à moins de 70 ans ; de 70 à moins de 80 ans ; 80 ans et plus. a) Placez chaque pays dans sa classe. b) Quelle couleur donnez-vous à chaque classe ? c) Quels éléments ne doivent pas manquer sur la carte ?",
              hint: "Choisissez une seule couleur en quatre nuances : la plus claire pour les valeurs les plus faibles.",
              solution: [
                "a) Moins de 60 ans : A (52) et F (58). De 60 à moins de 70 ans : B (64). De 70 à moins de 80 ans : C (71) et E (79). 80 ans et plus : D (83).",
                "b) Par exemple quatre nuances de vert : vert très clair pour moins de 60 ans, vert clair pour 60 à 70, vert moyen pour 70 à 80, vert foncé pour 80 ans et plus.",
                "c) La carte doit avoir un titre (« L'espérance de vie dans six pays »), une légende, une orientation, une échelle et la source des données (ici, des données fictives).",
                "Résultat : la nuance la plus foncée correspond au pays où l'on vit le plus longtemps, ce qui se lit d'un coup d'œil.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux pays fictifs ont le même PIB par habitant, 15 000 dollars (données fictives). Pays X : espérance de vie 76 ans, durée moyenne de scolarisation des adultes 12 ans, IDH 0,80. Pays Y : espérance de vie 62 ans, durée moyenne de scolarisation des adultes 6 ans, IDH 0,62 ; ses revenus viennent surtout du pétrole et sont captés par une petite minorité. a) Dans quelle catégorie d'IDH se trouve chaque pays ? b) Pourquoi leurs IDH sont-ils si différents alors que leur PIB par habitant est le même ? c) Le pays Y connaît-il la croissance, le développement, ou les deux ? d) Citez une information que ni le PIB ni l'IDH ne donnent.",
              hint: "Comparez les deux autres dimensions de l'IDH (santé et éducation), puis reprenez la différence entre croissance et développement.",
              solution: [
                "a) Pays X : IDH très élevé (0,80 atteint le seuil de 0,800). Pays Y : IDH moyen (entre 0,550 et 0,699).",
                "b) Le revenu par habitant est le même, mais les deux autres dimensions sont très différentes : on vit 14 ans de plus (76 - 62) et on va deux fois plus longtemps à l'école (12 ans contre 6) dans le pays X. Cela fait monter son IDH.",
                "c) Le pays Y a de la croissance, grâce au pétrole, mais peu de développement : la richesse n'est pas utilisée pour améliorer la santé et l'éducation de toute la population.",
                "d) Ni le PIB ni l'IDH ne montrent, par exemple, les inégalités entre habitants, l'état de l'environnement ou le respect des libertés.",
                "Conclusion : la richesse ne suffit pas à mesurer le développement ; il faut regarder comment elle est partagée et utilisée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : mesurer le développement.",
            statements: [
              { text: "Un IDH proche de 1 indique un développement très élevé.", true: true, why: "L'IDH va de 0 à 1 : plus il est proche de 1, plus le pays est développé." },
              { text: "L'IDH ne prend en compte que la richesse des habitants.", true: false, why: "Il combine trois dimensions : santé, éducation et niveau de vie." },
              { text: "Croissance et développement veulent dire exactement la même chose.", true: false, why: "La croissance est l'augmentation de la production ; le développement est l'amélioration des conditions de vie de tous." },
              { text: "Sur une carte choroplèthe, les valeurs les plus fortes sont en général représentées par les couleurs les plus foncées.", true: true, why: "On utilise une même couleur, du clair pour les valeurs faibles au foncé pour les valeurs fortes." },
              { text: "Pour représenter la population de chaque pays, on utilise de préférence des cercles proportionnels.", true: true, why: "La population est une quantité : on la représente par des cercles dont la taille varie avec cette quantité." },
              { text: "Un pays à l'IDH très élevé n'a plus aucun habitant pauvre.", true: false, why: "L'IDH est une moyenne nationale : il cache les inégalités, et les pays développés ont aussi des pauvres." },
              { text: "Le taux de mortalité infantile compte les enfants qui meurent avant l'âge d'un an.", true: true, why: "C'est le nombre de décès d'enfants de moins d'un an pour 1 000 naissances." },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les trois dimensions de l'IDH ?",
              options: ["Population, superficie, PIB", "Santé, éducation, niveau de vie", "Eau, énergie, nourriture", "Industrie, commerce, agriculture"],
              answer: 1,
              why: "L'IDH combine la santé (espérance de vie), l'éducation (durée de scolarisation) et le niveau de vie (revenu par habitant).",
            },
            {
              q: "Quel organisme calcule l'IDH ?",
              options: ["Le FMI", "L'Insee", "L'Union européenne", "Le PNUD"],
              answer: 3,
              why: "Le Programme des Nations unies pour le développement (PNUD) a créé l'IDH en 1990 et le publie chaque année ou presque.",
            },
            {
              q: "Un pays a un IDH de 0,48. Dans quelle catégorie se trouve-t-il ?",
              options: ["Faible", "Moyen", "Élevé", "Très élevé"],
              answer: 0,
              why: "En dessous de 0,550, l'IDH est considéré comme faible.",
            },
            {
              q: "Quel figuré utilise-t-on pour représenter la population de chaque pays sur une carte ?",
              options: ["Des flèches", "Des hachures plus ou moins serrées", "Des cercles proportionnels", "Des pointillés"],
              answer: 2,
              why: "La population est une quantité : on la représente par des cercles dont la surface augmente avec le nombre d'habitants.",
            },
            {
              q: "Dans quelle région du monde trouve-t-on surtout les pays à l'IDH faible ?",
              options: ["En Europe du Nord et de l'Ouest", "En Amérique du Nord", "En Afrique subsaharienne", "En Océanie"],
              answer: 2,
              why: "La plupart des pays à l'IDH faible se trouvent en Afrique subsaharienne, comme le Niger, le Tchad ou la Somalie.",
            },
          ],
          trap: "Croire qu'un pays riche est forcément un pays développé : un PIB par habitant élevé ne garantit ni une longue espérance de vie, ni une bonne scolarisation, ni le partage des richesses.",
          method: "Devant une carte, lisez d'abord le titre puis la légende, avant de regarder les couleurs. Ensuite, décrivez du général au particulier : les grandes zones (continents), puis les exceptions, en citant toujours deux ou trois pays en exemple.",
        },
      ],
    },
    {
      id: 'seigneurs-paysans-villes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ordre-seigneurial',
          title: 'L\'ordre seigneurial : seigneurs et paysans',
          minutes: 30,
          objectives: [
            "Décrire une seigneurie et ses différentes parties.",
            "Expliquer les relations entre seigneurs et paysans : redevances, corvées, banalités, justice.",
            "Expliquer les liens entre seigneurs : la vassalité et le fief.",
            "Décrire les progrès agricoles et la croissance des campagnes du XIe au XIIIe siècle.",
          ],
          course: [
            {
              heading: "Une société de seigneurs",
              paragraphs: [
                "Après la fin de l'Empire carolingien, aux Xe et XIe siècles, le pouvoir du roi devient très faible. Partout en Occident, des seigneurs, maîtres d'un château, imposent leur autorité aux habitants des environs. Ils commandent, rendent la justice, punissent et lèvent des taxes : c'est ce que les historiens appellent l'ordre seigneurial.",
                "Vers 1030, l'évêque Adalbéron de Laon décrit la société comme divisée en trois ordres : ceux qui prient (les clercs), ceux qui combattent (les nobles, les chevaliers) et ceux qui travaillent (les paysans). Chaque ordre aurait besoin des deux autres. C'est une image idéale, voulue par des hommes d'Église : en réalité, les paysans, qui représentent environ neuf habitants sur dix, travaillent pour nourrir les deux autres ordres.",
              ],
              box: { label: "Définition", text: "Seigneur : noble ou homme d'Église qui possède une seigneurie et exerce son pouvoir sur les paysans qui y vivent. Seigneurie : domaine d'un seigneur, avec ses terres, ses villages et ses habitants." },
            },
            {
              heading: "La seigneurie et le château",
              paragraphs: [
                "Le château est le centre de la seigneurie. Les premiers châteaux, aux Xe et XIe siècles, sont souvent des tours en bois construites sur une butte de terre, la motte. À partir du XIe et surtout du XIIe siècle, les plus puissants seigneurs construisent des châteaux en pierre, avec un donjon, des murailles et des fossés. Le château protège, mais il sert aussi à surveiller et à dominer.",
                "Les terres de la seigneurie se divisent en deux parties. La réserve est exploitée directement par le seigneur : les paysans doivent y travailler gratuitement quelques jours par an, ce sont les corvées. Les tenures sont des parcelles confiées à des familles paysannes ; en échange, elles versent au seigneur des redevances : le cens, en argent, et le champart, une partie de la récolte.",
                "Le seigneur possède aussi le moulin, le four et le pressoir. Les paysans sont obligés de les utiliser et de payer pour cela : ce sont les banalités. Enfin, le seigneur rend la justice et punit ceux qui ne respectent pas ses règles, en touchant les amendes.",
              ],
              box: { label: "À retenir", text: "Ce que le paysan doit au seigneur : les corvées (travail gratuit sur la réserve), le cens (en argent), le champart (une part de la récolte), les banalités (pour le moulin, le four, le pressoir). Il doit aussi la dîme, mais à l'Église." },
            },
            {
              heading: "Les paysans : vilains et serfs",
              paragraphs: [
                "La plupart des paysans sont des vilains : ils sont libres, peuvent quitter la seigneurie et se marier comme ils le veulent, mais ils doivent les redevances et les corvées. Les serfs, eux, ne sont pas libres : ils appartiennent à la seigneurie et ne peuvent pas la quitter. Ils paient des taxes particulières : le chevage, une taxe par tête ; le formariage, pour épouser quelqu'un d'une autre seigneurie ; la mainmorte, pour transmettre leurs biens à leurs enfants.",
                "Aux XIIe et XIIIe siècles, beaucoup de serfs obtiennent leur liberté, souvent en la payant : c'est l'affranchissement. La vie des paysans suit le rythme des saisons et des travaux des champs. Ils vivent au village, autour de l'église paroissiale, et forment une communauté qui s'entraide pour les gros travaux.",
              ],
            },
            {
              heading: "Seigneurs et vassaux",
              paragraphs: [
                "Les seigneurs sont liés entre eux par la vassalité. Un seigneur puissant, le suzerain, donne à un autre noble, le vassal, un fief, le plus souvent une terre. En échange, le vassal lui doit l'aide (surtout le service militaire, à cheval) et le conseil. Le suzerain, lui, doit protéger son vassal.",
                "Ce lien se noue lors d'une cérémonie. Le vassal, à genoux, place ses mains dans celles de son seigneur et se déclare son homme : c'est l'hommage. Puis il jure fidélité sur la Bible ou sur des reliques. Le seigneur lui remet enfin un objet qui symbolise le fief, comme une motte de terre ou une branche : c'est l'investiture. Les jeunes nobles deviennent chevaliers lors de l'adoubement, où ils reçoivent leurs armes.",
              ],
              box: { label: "Définition", text: "Fief : bien, le plus souvent une terre, donné par un suzerain à un vassal en échange de sa fidélité et de ses services. Vassal : noble qui a reçu un fief et doit aide et conseil à son seigneur." },
            },
            {
              heading: "Des campagnes qui se transforment (XIe-XIIIe siècle)",
              paragraphs: [
                "Du XIe au XIIIe siècle, les campagnes d'Occident connaissent de grands progrès. Les paysans défrichent des forêts et assèchent des marais pour créer de nouvelles terres, et de nouveaux villages apparaissent. La charrue, munie d'un soc en fer et d'un versoir qui retourne la terre, laboure plus profondément ; le collier d'épaule permet aux chevaux de tirer plus fort sans s'étouffer. Les moulins à eau, puis à vent, se multiplient.",
                "L'assolement triennal se diffuse : on divise les terres en trois parties, l'une semée de céréales d'hiver, la deuxième de céréales de printemps ou de légumes secs, la troisième laissée au repos, en jachère. Chaque année, on fait tourner les cultures. On ne laisse ainsi qu'un tiers des terres au repos, au lieu de la moitié. Les récoltes augmentent, les famines reculent et la population de l'Occident s'accroît fortement, ce qui favorise aussi l'essor des villes.",
              ],
            },
          ],
          keyPoints: [
            "Aux XIe-XIIIe siècles, le seigneur domine la seigneurie depuis son château : il commande, juge et taxe.",
            "La seigneurie comprend la réserve (exploitée grâce aux corvées) et les tenures (confiées aux paysans contre des redevances).",
            "Les paysans paient le cens, le champart et les banalités, et doivent la dîme à l'Église.",
            "Vilains libres et serfs non libres (chevage, formariage, mainmorte) ; beaucoup de serfs sont affranchis aux XIIe-XIIIe siècles.",
            "Vassalité : le suzerain donne un fief au vassal, qui lui doit aide et conseil (hommage, serment, investiture).",
            "Défrichements, charrue, collier d'épaule, moulins et assolement triennal font augmenter les récoltes et la population.",
          ],
          example: {
            statement: "Décrivez les obligations d'un paysan envers son seigneur au XIIe siècle, en classant ce qu'il doit en travail, en argent et en nature.",
            solution: [
              "On rappelle le cadre : le paysan vit dans une seigneurie, sur une tenure que le seigneur lui a confiée.",
              "En travail : il doit les corvées, c'est-à-dire quelques jours de travail gratuit sur la réserve du seigneur (labourer, moissonner, réparer les chemins).",
              "En argent : il paie le cens pour sa tenure, ainsi que les amendes de la justice seigneuriale et les banalités, quand il utilise le moulin, le four ou le pressoir du seigneur.",
              "En nature : il verse le champart, une partie de sa récolte ; les banalités peuvent aussi être payées en grain. Il doit en outre la dîme, environ un dixième de sa récolte, mais à l'Église.",
              "Réponse : le paysan doit au seigneur du travail (corvées), de l'argent (cens, amendes) et une part de ses récoltes (champart, banalités), en plus de la dîme due à l'Église.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le mot qui correspond à chaque définition : a) partie de la seigneurie exploitée directement par le seigneur ; b) parcelle confiée à une famille paysanne ; c) travail gratuit dû au seigneur ; d) taxe payée pour utiliser le moulin, le four ou le pressoir ; e) paysan qui n'est pas libre ; f) terre donnée par un suzerain à son vassal.",
              hint: "Les mots à trouver sont dans les encadrés du cours : réserve, tenure, corvée, banalité, serf, fief.",
              solution: [
                "a) La réserve.",
                "b) La tenure.",
                "c) La corvée.",
                "d) La banalité.",
                "e) Le serf.",
                "f) Le fief.",
              ],
            },
            {
              level: 2,
              statement: "Un paysan récolte 1 200 kg de blé dans l'année (données fictives). Il doit verser la dîme (un dixième de la récolte) à l'Église et le champart (un huitième de la récolte) à son seigneur ; il doit garder 250 kg de grains pour les semailles de l'année suivante. Il doit aussi au seigneur 3 jours de corvée par mois. a) Calculez la dîme et le champart. b) Combien de kilos de blé lui reste-t-il pour nourrir sa famille ? c) Quelle part de sa récolte cela représente-t-il, en pourcentage arrondi ? d) Combien de jours de corvée doit-il dans l'année ?",
              hint: "Un dixième, c'est diviser par 10 ; un huitième, diviser par 8. Pour le pourcentage, divisez ce qui reste par 1 200 puis multipliez par 100.",
              solution: [
                "a) Dîme : 1 200 ÷ 10 = 120 kg. Champart : 1 200 ÷ 8 = 150 kg.",
                "b) Il lui reste 1 200 - 120 - 150 - 250 = 680 kg de blé.",
                "c) 680 ÷ 1 200 × 100 ≈ 57 % de la récolte. Et il devra encore payer la banalité du moulin pour moudre ce grain.",
                "d) 3 × 12 = 36 jours de corvée par an, autant de jours où il ne travaille pas sur sa propre tenure.",
                "Résultat : il ne garde qu'un peu plus de la moitié de sa récolte pour nourrir sa famille, ce qui montre le poids des prélèvements du seigneur et de l'Église.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici la description d'une enluminure imaginaire, inspirée des calendriers des livres d'heures de la fin du Moyen Âge. Au premier plan, un paysan sème le blé à la volée pendant qu'un autre guide un cheval qui tire une herse. Au second plan, un moulin tourne au bord d'une rivière. À l'arrière-plan, sur une colline, se dresse un château fort avec un donjon et des tours. a) Identifiez les trois plans et ce que chacun représente. b) Quels éléments rappellent le pouvoir du seigneur ? c) Rédigez un paragraphe de 6 à 8 lignes qui explique, à partir de cette image, les relations entre les seigneurs et les paysans.",
              hint: "Le moulin et le château ne sont pas là par hasard : rappelez-vous à qui appartient le moulin et ce que les paysans doivent payer pour l'utiliser.",
              solution: [
                "a) Premier plan : le travail des paysans (semailles, hersage avec un cheval). Second plan : le moulin. Arrière-plan : le château du seigneur.",
                "b) Le château, qui domine le paysage depuis la colline, montre la puissance du seigneur ; le moulin rappelle les banalités, que les paysans paient pour moudre leur grain.",
                "c) Paragraphe : cette image montre l'ordre seigneurial. Les paysans travaillent la terre, ici avec un cheval et une herse, signes des progrès agricoles. Ils cultivent leurs tenures mais doivent aussi des corvées sur la réserve du seigneur.",
                "Une partie de leur récolte part en redevances, comme le champart, et ils doivent payer pour utiliser le moulin, qui appartient au seigneur.",
                "Le château, au loin, rappelle que le seigneur protège les paysans mais surtout qu'il les commande, les juge et les taxe.",
                "Conclusion : l'image oppose le monde du travail, au premier plan, et le monde du pouvoir, qui domine le paysage.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot de la seigneurie à sa définition.",
            pairs: [
              { left: "Réserve", right: "Terres exploitées directement par le seigneur" },
              { left: "Tenure", right: "Parcelle confiée à une famille paysanne" },
              { left: "Corvée", right: "Travail gratuit dû au seigneur" },
              { left: "Banalités", right: "Taxes pour utiliser le moulin, le four ou le pressoir" },
              { left: "Champart", right: "Part de la récolte versée au seigneur" },
              { left: "Hommage", right: "Cérémonie où le vassal se déclare l'homme de son seigneur" },
            ],
          },
          quiz: [
            {
              q: "Comment s'appelle la partie de la seigneurie exploitée directement par le seigneur ?",
              options: ["La réserve", "La tenure", "Le fief", "La paroisse"],
              answer: 0,
              why: "La réserve est exploitée par le seigneur grâce aux corvées des paysans ; les tenures sont confiées aux familles paysannes.",
            },
            {
              q: "Que doit payer un paysan pour utiliser le four du seigneur ?",
              options: ["La dîme due à l'Église", "Le cens", "Le chevage", "Une banalité"],
              answer: 3,
              why: "Les banalités sont les taxes payées pour utiliser le moulin, le four ou le pressoir du seigneur.",
            },
            {
              q: "Qu'est-ce qui distingue un serf d'un vilain ?",
              options: ["Le serf est un noble", "Le serf n'est pas libre", "Le serf vit toujours en ville", "Le serf ne paie rien"],
              answer: 1,
              why: "Le serf n'est pas libre : il ne peut pas quitter la seigneurie et paie des taxes particulières (chevage, formariage, mainmorte).",
            },
            {
              q: "Que doit le vassal à son suzerain en échange du fief ?",
              options: ["L'aide et le conseil", "La dîme et le cens", "Les corvées sur la réserve", "Une partie de ses terres"],
              answer: 0,
              why: "Le vassal doit l'aide, surtout militaire, et le conseil ; le suzerain lui doit protection.",
            },
            {
              q: "Quel est l'avantage de l'assolement triennal ?",
              options: ["Il supprime la jachère", "Il remplace les chevaux", "Il permet aux paysans d'éviter toutes les corvées", "Il réduit la part des terres en jachère"],
              answer: 3,
              why: "Avec trois parties au lieu de deux, on ne laisse plus qu'un tiers des terres au repos au lieu de la moitié : on produit davantage.",
            },
          ],
          trap: "Confondre la dîme et les redevances seigneuriales : la dîme est versée à l'Église, alors que le cens, le champart, les corvées et les banalités sont dus au seigneur.",
          method: "Pour retenir les obligations paysannes, rangez-les dans un tableau à trois colonnes : en travail (corvées), en argent (cens, amendes), en nature (champart, dîme). Puis indiquez à côté de chacune qui la reçoit : le seigneur ou l'Église.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'eglise-medievale',
          title: 'L\'Église au cœur de la société médiévale',
          minutes: 30,
          objectives: [
            "Expliquer le rôle de l'Église dans la vie des fidèles, de la naissance à la mort.",
            "Distinguer le clergé séculier et le clergé régulier.",
            "Montrer la puissance de l'Église et du pape dans l'Occident médiéval.",
            "Identifier les caractéristiques des églises romanes et gothiques.",
          ],
          course: [
            {
              heading: "Encadrer la vie des chrétiens",
              paragraphs: [
                "Au Moyen Âge, presque tous les habitants de l'Occident sont chrétiens ; les juifs forment une petite minorité. L'Église encadre la vie de chacun, de la naissance à la mort. Chaque village forme une paroisse, avec son église et son curé. Au XIIe siècle, les théologiens fixent à sept le nombre des sacrements : le baptême, la confirmation, l'eucharistie (la communion), la pénitence (la confession), le mariage, l'ordre (pour devenir prêtre) et l'extrême-onction, donnée aux mourants.",
                "Le temps lui-même est chrétien. Les cloches rythment la journée, le dimanche est jour de repos et de messe, et l'année suit les grandes fêtes religieuses comme Noël et Pâques. Les fidèles craignent l'enfer et espèrent le paradis : sur le tympan de l'abbatiale de Conques, sculpté au XIIe siècle, le Jugement dernier sépare les élus et les damnés.",
                "Pour obtenir le pardon de leurs péchés ou une guérison, beaucoup de fidèles partent en pèlerinage vers des lieux saints : Rome, Jérusalem, ou Saint-Jacques-de-Compostelle en Espagne. Ils vénèrent les reliques des saints, c'est-à-dire des restes de leur corps ou des objets qui leur ont appartenu.",
              ],
              box: { label: "Définition", text: "Sacrement : rite de l'Église qui, pour les chrétiens, apporte la grâce de Dieu (il y en a sept, du baptême à l'extrême-onction). Paroisse : territoire d'une communauté de fidèles, avec son église et son curé." },
            },
            {
              heading: "Les hommes et les femmes d'Église",
              paragraphs: [
                "Le clergé séculier vit au milieu des fidèles, « dans le siècle », c'est-à-dire dans le monde. Il est organisé de façon hiérarchique : le pape, évêque de Rome, dirige l'Église ; les évêques dirigent chacun un diocèse depuis leur cathédrale ; les curés s'occupent des paroisses.",
                "Le clergé régulier vit à l'écart du monde, dans des monastères, en suivant une règle (en latin regula), comme celle de saint Benoît, écrite au VIe siècle. Les moines et les moniales partagent leur temps entre la prière, le travail et l'étude ; ils obéissent à un abbé ou à une abbesse. L'abbaye de Cluny, fondée en 910, devient très puissante. En réaction contre sa richesse, l'ordre de Cîteaux, fondé en 1098 et rendu célèbre par Bernard de Clairvaux, prône une vie plus simple.",
                "Au XIIIe siècle apparaissent les ordres mendiants : les franciscains, disciples de François d'Assise, et les dominicains, fondés par Dominique. Ils vivent pauvrement, de dons, et vont prêcher dans les villes.",
              ],
              box: { label: "À retenir", text: "Clergé séculier : pape, évêques, curés, qui vivent parmi les fidèles. Clergé régulier : moines et moniales, qui vivent selon une règle dans un monastère ou une abbaye." },
            },
            {
              heading: "Une Église riche et puissante",
              paragraphs: [
                "L'Église est très riche. Les fidèles lui versent la dîme, environ un dixième de leurs récoltes, et les seigneurs lui donnent des terres pour le salut de leur âme. Les évêques et les abbés sont souvent de grands seigneurs, avec leurs propres paysans. L'Église prend aussi en charge les pauvres et les malades, dans les hôtels-Dieu, et elle s'occupe de l'enseignement : les premières universités naissent autour de 1200, comme celle de Paris.",
                "À partir de la fin du Xe siècle, l'Église cherche à limiter la violence des chevaliers : par la paix de Dieu, elle interdit d'attaquer les clercs, les paysans et les pauvres. Au XIe siècle, le pape Grégoire VII (1073-1085) veut rendre l'Église indépendante des seigneurs et des rois et affirmer l'autorité du pape sur tous les chrétiens : c'est la réforme grégorienne. Le pape peut excommunier les rois, et c'est lui qui appelle à la croisade en 1095.",
                "L'Église combat aussi ceux qu'elle considère comme des hérétiques, des chrétiens qui ne suivent pas sa doctrine. Contre les cathares du sud de la France, le pape lance en 1209 une croisade, appelée croisade des Albigeois ; puis l'Inquisition, un tribunal de l'Église, est créée pour les poursuivre.",
              ],
            },
            {
              heading: "Bâtir pour Dieu : art roman et art gothique",
              paragraphs: [
                "Aux XIe et XIIe siècles, on construit de nombreuses églises dans le style roman. Leurs murs sont épais et percés de petites fenêtres, car ils doivent porter le poids d'une voûte en pierre ; les arcs sont en plein cintre, c'est-à-dire en demi-cercle. L'intérieur est assez sombre. Les sculptures des chapiteaux et des tympans racontent la Bible aux fidèles, dont la plupart ne savent pas lire.",
                "Vers 1140, à l'abbatiale de Saint-Denis, près de Paris, l'abbé Suger fait construire un chœur dans un style nouveau, que l'on appellera plus tard gothique. Grâce à la croisée d'ogives, des arcs croisés qui portent la voûte, et aux arcs-boutants, qui soutiennent les murs de l'extérieur, les murs peuvent être plus hauts et plus minces. On y ouvre de grands vitraux qui laissent entrer la lumière.",
                "Les cathédrales gothiques, comme Notre-Dame de Paris (commencée en 1163), Chartres ou Reims, sont des chantiers immenses qui durent des dizaines d'années. Elles font la fierté des villes et montrent la puissance de l'Église.",
              ],
              box: { label: "Repère", text: "Art roman (XIe-XIIe siècles) : murs épais, petites fenêtres, arcs en plein cintre, intérieur sombre. Art gothique (à partir du milieu du XIIe siècle) : croisée d'ogives, arcs brisés, arcs-boutants, hauteur, grands vitraux, lumière." },
            },
          ],
          keyPoints: [
            "L'Église encadre la vie des fidèles de la naissance à la mort : paroisse, sept sacrements, fêtes, pèlerinages.",
            "Clergé séculier (pape, évêques, curés) et clergé régulier (moines et moniales qui suivent une règle).",
            "Cluny (910), Cîteaux (1098), puis au XIIIe siècle les ordres mendiants : franciscains et dominicains.",
            "L'Église est riche (dîme, terres) et puissante : réforme grégorienne, croisades, lutte contre les hérésies.",
            "Elle s'occupe aussi des pauvres et des malades (hôtels-Dieu) et de l'enseignement (universités).",
            "Art roman : murs épais, petites fenêtres. Art gothique : croisée d'ogives, arcs-boutants, hauteur et vitraux.",
          ],
          example: {
            statement: "Comment les architectes gothiques ont-ils pu construire des églises plus hautes et plus lumineuses que les églises romanes ?",
            solution: [
              "On rappelle le problème des églises romanes : la voûte de pierre est très lourde, et elle pousse sur les murs. Il faut donc des murs épais, avec peu d'ouvertures.",
              "Première solution gothique : la croisée d'ogives. Des arcs de pierre croisés portent la voûte et concentrent son poids sur quelques piliers, au lieu de tout le mur.",
              "Deuxième solution : les arcs-boutants. Placés à l'extérieur, ils soutiennent les murs et les empêchent de s'écarter sous la poussée de la voûte.",
              "Conséquence : les murs n'ont plus à tout porter ; ils peuvent être plus hauts, plus minces et percés de grands vitraux.",
              "Réponse : grâce à la croisée d'ogives et aux arcs-boutants, les églises gothiques gagnent en hauteur et en lumière, ce que les murs épais des églises romanes ne permettaient pas.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque personne dans le clergé séculier ou le clergé régulier : a) le pape ; b) un moine de Cluny ; c) le curé d'un village ; d) l'évêque de Chartres ; e) une moniale ; f) l'abbé de Cîteaux.",
              hint: "Demandez-vous si la personne vit parmi les fidèles (séculier) ou dans un monastère selon une règle (régulier).",
              solution: [
                "Clergé séculier : a) le pape, c) le curé, d) l'évêque de Chartres.",
                "Clergé régulier : b) le moine de Cluny, e) la moniale, f) l'abbé de Cîteaux.",
                "Résultat : trois personnes dans chaque catégorie.",
              ],
            },
            {
              level: 2,
              statement: "Voici la description de deux églises, rédigée pour l'exercice. Église A : ses murs sont très épais, ses fenêtres petites, ses arcs en demi-cercle ; à l'intérieur, il fait assez sombre ; au-dessus de la porte, un tympan sculpté représente le Jugement dernier. Église B : elle est très haute ; de grands arcs de pierre s'appuient sur ses murs depuis l'extérieur ; ses arcs sont brisés, en pointe ; d'immenses vitraux colorés éclairent l'intérieur. a) Quel est le style de chaque église ? b) Relevez pour chacune trois caractéristiques de son style. c) Pourquoi l'église B peut-elle avoir d'aussi grands vitraux ?",
              hint: "Les « grands arcs de pierre qui s'appuient sur les murs depuis l'extérieur » ont un nom précis.",
              solution: [
                "a) L'église A est romane ; l'église B est gothique.",
                "b) Église A : murs épais, petites fenêtres, arcs en plein cintre (et intérieur sombre). Église B : grande hauteur, arcs-boutants, arcs brisés (et grands vitraux).",
                "c) Les arcs-boutants soutiennent les murs de l'extérieur et la croisée d'ogives porte la voûte : les murs n'ont plus à supporter tout le poids et peuvent être percés de grands vitraux.",
                "Conclusion : on reconnaît le style d'une église à l'épaisseur de ses murs, à la forme de ses arcs et à la taille de ses fenêtres.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe de 8 à 10 lignes pour montrer que l'Église encadre la vie des hommes et des femmes du Moyen Âge. Votre paragraphe doit aborder la vie religieuse (sacrements, fêtes), la place de l'Église dans la société (dîme, aide aux pauvres, enseignement) et la puissance du pape.",
              hint: "Construisez trois parties en suivant les trois thèmes demandés, avec au moins un exemple précis (un nom, une date ou un lieu) pour chacun.",
              solution: [
                "Introduction : au Moyen Âge, presque tous les habitants de l'Occident sont chrétiens, et l'Église est présente à chaque moment de leur vie.",
                "Vie religieuse : le chrétien est baptisé à sa naissance, se marie à l'église et reçoit l'extrême-onction avant de mourir ; il reçoit ainsi plusieurs des sept sacrements. Les cloches, le repos du dimanche et les fêtes comme Noël et Pâques rythment le temps.",
                "Société : les paysans versent la dîme, environ un dixième de leurs récoltes. En retour, l'Église soigne les pauvres et les malades dans les hôtels-Dieu et enseigne, dans les écoles puis dans les universités, comme celle de Paris vers 1200.",
                "Puissance du pape : avec la réforme grégorienne, Grégoire VII affirme l'autorité du pape sur tous les chrétiens ; le pape peut excommunier les rois et appelle à la croisade en 1095.",
                "Conclusion : l'Église encadre donc la foi, le temps, la vie sociale et même la politique ; c'est la grande puissance de l'Occident médiéval, comme le montrent ses immenses cathédrales.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'Église au Moyen Âge.",
            statements: [
              { text: "Un curé appartient au clergé régulier.", true: false, why: "Le curé vit parmi les fidèles : il appartient au clergé séculier. Le clergé régulier regroupe les moines et les moniales." },
              { text: "La dîme est versée à l'Église, et non au seigneur.", true: true, why: "La dîme, environ un dixième des récoltes, revient à l'Église ; le seigneur reçoit le cens, le champart et les banalités." },
              { text: "Les églises romanes sont célèbres pour leurs immenses vitraux.", true: false, why: "Les églises romanes ont des murs épais et de petites fenêtres ; les grands vitraux sont typiques du gothique." },
              { text: "L'abbaye de Cluny a été fondée en 910.", true: true, why: "Fondée en 910, Cluny devient l'une des abbayes les plus puissantes de l'Occident." },
              { text: "Les arcs-boutants soutiennent les murs des églises gothiques depuis l'extérieur.", true: true, why: "Ils reçoivent la poussée de la voûte, ce qui permet d'élever des murs plus hauts et plus minces." },
              { text: "Les franciscains et les dominicains vivent retirés à la campagne, loin des villes.", true: false, why: "Ces ordres mendiants, apparus au XIIIe siècle, vivent pauvrement et vont prêcher dans les villes." },
            ],
          },
          quiz: [
            {
              q: "Combien de sacrements l'Église compte-t-elle au Moyen Âge ?",
              options: ["Trois", "Cinq", "Dix", "Sept"],
              answer: 3,
              why: "Il y en a sept : baptême, confirmation, eucharistie, pénitence, mariage, ordre et extrême-onction.",
            },
            {
              q: "Qui fait partie du clergé régulier ?",
              options: ["Un moine", "Un curé", "Un évêque", "Le pape"],
              answer: 0,
              why: "Les moines vivent selon une règle dans un monastère : ils forment le clergé régulier.",
            },
            {
              q: "Quel pape mène au XIe siècle une réforme pour rendre l'Église indépendante des seigneurs et des rois ?",
              options: ["Léon III", "Urbain II", "Grégoire VII", "Innocent III"],
              answer: 2,
              why: "Grégoire VII (1073-1085) donne son nom à la réforme grégorienne, qui affirme l'autorité du pape.",
            },
            {
              q: "Quelle technique permet aux églises gothiques d'avoir de grands vitraux ?",
              options: ["Les murs très épais", "La croisée d'ogives", "Les arcs en plein cintre", "Les toits en bois"],
              answer: 1,
              why: "La croisée d'ogives, avec les arcs-boutants, reporte le poids de la voûte sur des piliers : les murs peuvent être percés de grandes fenêtres.",
            },
            {
              q: "Que sont les hôtels-Dieu ?",
              options: ["Des hôpitaux tenus par l'Église", "Des palais d'évêques", "Des auberges pour les marchands", "Des écoles de moines"],
              answer: 0,
              why: "Les hôtels-Dieu accueillent les pauvres, les pèlerins et les malades ; ils sont tenus par l'Église.",
            },
          ],
          trap: "Confondre clergé séculier et clergé régulier : « régulier » vient de regula, la règle que suivent les moines, et non du fait d'aller régulièrement à la messe.",
          method: "Pour reconnaître un style d'église sur une photographie, regardez trois indices dans cet ordre : la forme des arcs (demi-cercle ou pointe), la taille des fenêtres, et la présence d'arcs-boutants à l'extérieur. Deux indices concordants suffisent pour conclure.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'societe-urbaine',
          title: 'L\'essor des villes et des marchands',
          minutes: 30,
          objectives: [
            "Expliquer les causes de l'essor des villes à partir du XIe siècle.",
            "Expliquer comment les bourgeois obtiennent des libertés : chartes de franchises et communes.",
            "Décrire l'organisation des métiers et les activités des artisans.",
            "Identifier les grands espaces du commerce européen et les outils des marchands.",
          ],
          course: [
            {
              heading: "Pourquoi les villes grandissent",
              paragraphs: [
                "À partir du XIe siècle, les villes de l'Occident grandissent. Grâce aux progrès agricoles, les campagnes produisent plus qu'elles ne consomment : elles peuvent nourrir des citadins. La population augmente et des paysans partent s'installer en ville pour y trouver du travail. Le commerce reprend, sur les routes, les fleuves et les mers.",
                "Les anciennes villes romaines s'agrandissent et de nouvelles villes sont fondées, comme les bastides du sud-ouest de la France au XIIIe siècle. Paris devient la plus grande ville d'Occident, avec peut-être 200 000 habitants vers 1300 selon les estimations des historiens. Mais la plupart des villes restent petites, avec quelques milliers d'habitants, et les paysans forment toujours l'immense majorité de la population.",
                "La ville médiévale est entourée de remparts qui la protègent. À l'intérieur, les rues sont étroites, souvent boueuses, bordées de maisons en bois et en torchis, à colombages. Les incendies et les épidémies sont fréquents. Mais la ville a aussi ses marchés, ses églises, sa cathédrale, ses hôpitaux et, dans les plus grandes, son université.",
              ],
            },
            {
              heading: "Les bourgeois et les libertés urbaines",
              paragraphs: [
                "Les habitants des villes s'appellent les bourgeois, des habitants du bourg. Au départ, la ville se trouve sur la terre d'un seigneur, laïc ou évêque, qui la taxe et la juge. Les bourgeois, enrichis par l'artisanat et le commerce, veulent gérer eux-mêmes leurs affaires.",
                "Ils obtiennent du seigneur une charte de franchises, un texte qui leur accorde des libertés : être libres, se réunir, lever leurs propres impôts, rendre une partie de la justice. Le plus souvent, ils achètent ces libertés à prix d'argent ; parfois, ils se révoltent, comme à Laon, où l'évêque est tué en 1112 lors d'une révolte des habitants.",
                "Les bourgeois forment alors une commune. Ils élisent des représentants, appelés échevins dans le nord de la France et consuls dans le sud, souvent dirigés par un maire. Ils se réunissent à l'hôtel de ville. Dans le nord, le beffroi, une haute tour avec une cloche, symbolise les libertés de la ville. En réalité, ce sont surtout les bourgeois les plus riches qui gouvernent.",
              ],
              box: { label: "Définition", text: "Bourgeois : habitant d'une ville qui jouit de ses libertés. Charte de franchises : texte par lequel un seigneur accorde des libertés aux habitants d'une ville. Commune : ville qui s'administre elle-même." },
            },
            {
              heading: "Les artisans et leurs métiers",
              paragraphs: [
                "En ville, les artisans d'une même activité se regroupent en métiers, qu'on appellera plus tard corporations. Souvent, ils travaillent dans la même rue : de nombreuses villes ont encore une rue des Tanneurs ou une rue des Orfèvres. Chaque métier a ses règles : la qualité des produits, les prix, les horaires de travail, l'interdiction de travailler la nuit. Vers 1268, le prévôt de Paris, Étienne Boileau, fait mettre par écrit les règlements d'une centaine de métiers parisiens.",
                "Les métiers sont organisés de façon hiérarchique. L'apprenti, souvent un jeune garçon, apprend le métier chez un maître pendant plusieurs années. Il devient ensuite compagnon, ouvrier payé par un maître. Pour devenir maître à son tour et ouvrir son propre atelier, il doit souvent réaliser un chef-d'œuvre, examiné par les maîtres du métier, et payer un droit d'entrée.",
              ],
              box: { label: "À retenir", text: "Apprenti, compagnon, maître : les trois degrés d'un métier. Le chef-d'œuvre permet au compagnon de prouver qu'il maîtrise son métier pour devenir maître." },
            },
            {
              heading: "Marchands, foires et banques",
              paragraphs: [
                "Le commerce relie toute l'Europe. Au sud, les marchands de Venise et de Gênes rapportent d'Orient les épices et la soie. Au nord, les villes de Flandre, comme Bruges et Gand, fabriquent des draps de laine, et les villes allemandes de la Hanse, autour de Lübeck, commercent sur la mer du Nord et la mer Baltique.",
                "Aux XIIe et XIIIe siècles, ces marchands se retrouvent aux foires de Champagne, qui se tiennent tour à tour à Troyes, Provins, Lagny et Bar-sur-Aube. Les comtes de Champagne protègent les marchands sur les routes en échange de taxes. On y vend des draps, des épices, des cuirs, des chevaux.",
                "Pour faciliter les échanges, des changeurs convertissent les nombreuses monnaies, installés sur un banc, d'où le mot « banque ». Les marchands italiens développent la lettre de change : un papier qui permet de payer dans une autre ville sans transporter de pièces, ce qui évite les vols. L'Église se méfie pourtant de l'argent : elle condamne le prêt à intérêt, qu'elle appelle l'usure.",
              ],
              box: { label: "Repère", text: "XIe siècle : début de l'essor urbain. 1112 : commune de Laon. XIIe-XIIIe siècles : apogée des foires de Champagne. Vers 1268 : Livre des métiers d'Étienne Boileau. Vers 1300 : Paris compte peut-être 200 000 habitants." },
            },
          ],
          keyPoints: [
            "À partir du XIe siècle, les villes grandissent grâce aux progrès agricoles, à la croissance de la population et au commerce.",
            "Les bourgeois obtiennent des chartes de franchises et forment des communes dirigées par des échevins ou des consuls.",
            "Le beffroi, l'hôtel de ville et les remparts sont les symboles de la ville et de ses libertés.",
            "Les artisans s'organisent en métiers : apprenti, compagnon, maître (après un chef-d'œuvre).",
            "Grands espaces du commerce : Italie (Venise, Gênes), Flandre (Bruges), Hanse (Lübeck), foires de Champagne.",
            "Changeurs et lettre de change facilitent les échanges ; l'Église condamne l'usure.",
          ],
          example: {
            statement: "Comment les habitants d'une ville médiévale obtiennent-ils le droit de gérer eux-mêmes leurs affaires ?",
            solution: [
              "On rappelle la situation de départ : la ville est sur la terre d'un seigneur, qui la taxe et la juge.",
              "Les bourgeois, enrichis par l'artisanat et le commerce, veulent être libres et décider eux-mêmes.",
              "Ils négocient avec le seigneur et, le plus souvent, lui achètent une charte de franchises, qui leur accorde des libertés : se réunir, lever des impôts, rendre une partie de la justice. Parfois, ils se révoltent, comme à Laon en 1112.",
              "La ville devient alors une commune : les bourgeois élisent des échevins ou des consuls, se réunissent à l'hôtel de ville et affichent leurs libertés avec le beffroi.",
              "Réponse : les bourgeois obtiennent leurs libertés par une charte de franchises, souvent achetée au seigneur, et s'organisent ensuite en commune dirigée par des représentants élus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec le bon mot : beffroi, compagnon, foires, bourgeois, charte de franchises, lettre de change. a) Les habitants des villes s'appellent les ... b) Le texte qui accorde des libertés à une ville est une ... c) Dans le nord, la haute tour qui symbolise les libertés de la ville est le ... d) Après son apprentissage, un jeune artisan devient ... e) Les marchands se retrouvent aux ... de Champagne. f) La ... permet de payer dans une autre ville sans transporter de pièces.",
              hint: "Chaque mot est expliqué dans le cours ; commencez par ceux dont vous êtes sûr, puis complétez les autres.",
              solution: [
                "a) bourgeois.",
                "b) charte de franchises.",
                "c) beffroi.",
                "d) compagnon.",
                "e) foires.",
                "f) lettre de change.",
              ],
            },
            {
              level: 2,
              statement: "Voici une charte de franchises imaginaire, rédigée pour l'exercice et inspirée des chartes du XIIe siècle. « Moi, seigneur de la ville, j'accorde aux bourgeois : qu'ils soient libres, eux et leurs enfants ; qu'ils élisent chaque année douze échevins pour gouverner la ville ; que ces échevins jugent les petits délits ; que nul ne leur demande d'autre taxe que celle fixée dans cette charte. En échange, les bourgeois m'ont versé 500 livres et me paieront chaque année 40 livres. » a) Qui accorde la charte, et à qui ? b) Relevez trois libertés accordées. c) Que gagne le seigneur ? d) Combien le seigneur aura-t-il reçu en tout au bout de dix ans ?",
              hint: "Pour d), additionnez le versement unique et dix paiements annuels.",
              solution: [
                "a) La charte est accordée par le seigneur de la ville aux bourgeois, les habitants de la ville.",
                "b) Les bourgeois sont libres ; ils élisent douze échevins qui gouvernent la ville et jugent les petits délits ; ils ne paient pas d'autres taxes que celles de la charte.",
                "c) Le seigneur reçoit de l'argent : 500 livres tout de suite, puis 40 livres chaque année. Il perd une partie de son pouvoir, mais gagne des revenus sûrs.",
                "d) 500 + 10 × 40 = 500 + 400 = 900 livres au bout de dix ans.",
                "Conclusion : la charte est un accord : les bourgeois achètent leurs libertés, et le seigneur échange une partie de son pouvoir contre de l'argent.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un marchand de Florence se rend à la foire de Provins (données fictives). Il y achète 20 draps de laine de Flandre à 15 livres l'un. Le voyage de retour, les péages et la nourriture lui coûtent 60 livres. À Florence, il revend les draps 22 livres l'un. a) Combien a-t-il dépensé en tout ? b) Combien gagne-t-il en vendant les draps ? c) Quel est son bénéfice ? d) Pourquoi préfère-t-il payer avec une lettre de change plutôt qu'avec un sac de pièces ? e) En une phrase, expliquez pourquoi les foires de Champagne sont un lieu de rencontre idéal pour les marchands d'Italie et de Flandre.",
              hint: "Dépenses = achat des draps + frais de voyage. Bénéfice = recettes - dépenses. Pour e), regardez où se trouve la Champagne entre l'Italie et la Flandre.",
              solution: [
                "a) Achat : 20 × 15 = 300 livres. Dépenses totales : 300 + 60 = 360 livres.",
                "b) Recettes : 20 × 22 = 440 livres.",
                "c) Bénéfice : 440 - 360 = 80 livres.",
                "d) La lettre de change lui évite de transporter de grosses sommes en pièces sur des routes peu sûres, où il risquerait d'être volé ; elle évite aussi de changer les monnaies.",
                "e) La Champagne se trouve à mi-chemin entre l'Italie et la Flandre, les deux grandes régions marchandes de l'Occident, et ses comtes protègent les marchands qui s'y rendent.",
                "Résultat : le marchand réalise un bénéfice de 80 livres, grâce à des foires bien situées et à des outils commerciaux nouveaux.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la carrière d'un artisan au Moyen Âge.",
            items: [
              "Entrer en apprentissage chez un maître",
              "Apprendre le métier pendant plusieurs années",
              "Devenir compagnon, ouvrier payé par un maître",
              "Réaliser un chef-d'œuvre jugé par les maîtres du métier",
              "Devenir maître et ouvrir son propre atelier",
            ],
          },
          quiz: [
            {
              q: "Que désigne le mot « bourgeois » au Moyen Âge ?",
              options: ["Un habitant d'une ville", "Un noble très riche", "Un paysan libre", "Un seigneur qui possède un château"],
              answer: 0,
              why: "Le bourgeois est l'habitant du bourg, c'est-à-dire de la ville, qui jouit des libertés de celle-ci.",
            },
            {
              q: "Que symbolise le beffroi dans les villes du nord ?",
              options: ["La puissance du roi de France", "La foi chrétienne", "La richesse des moines", "Les libertés de la ville"],
              answer: 3,
              why: "Le beffroi, haute tour avec une cloche, est le symbole des libertés obtenues par la commune.",
            },
            {
              q: "Que doit réaliser un compagnon pour devenir maître ?",
              options: ["Un pèlerinage", "Un chef-d'œuvre", "Un voyage en Orient", "Une charte"],
              answer: 1,
              why: "Le compagnon doit souvent réaliser un chef-d'œuvre, examiné par les maîtres du métier, et payer un droit d'entrée.",
            },
            {
              q: "Dans quelle région se tiennent les grandes foires des XIIe et XIIIe siècles ?",
              options: ["En Bretagne", "En Provence", "En Normandie", "En Champagne"],
              answer: 3,
              why: "Les foires de Champagne se tiennent à Troyes, Provins, Lagny et Bar-sur-Aube, entre l'Italie et la Flandre.",
            },
            {
              q: "À quoi sert une lettre de change ?",
              options: ["À devenir bourgeois", "À obtenir une charte", "À payer sans transporter de pièces", "À devenir maître dans le métier des changeurs"],
              answer: 2,
              why: "La lettre de change permet de payer dans une autre ville sans transporter de monnaie, ce qui évite les vols et les changes.",
            },
          ],
          trap: "Croire que « bourgeois » désigne déjà au Moyen Âge une personne riche : le mot désigne d'abord l'habitant d'une ville qui jouit de ses libertés, qu'il soit riche ou modeste.",
          method: "Pour expliquer l'essor des villes, pensez à l'enchaînement « campagnes, population, commerce, villes » : chaque étape entraîne la suivante. Récitez cet enchaînement à voix haute avec un exemple pour chaque étape.",
        },
      ],
    },
  ],
}
