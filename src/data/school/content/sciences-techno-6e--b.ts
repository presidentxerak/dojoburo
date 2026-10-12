import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'sciences-techno-6e',
  chapters: [
    /* ================================================================== */
    /* DÉCRIRE UN MOUVEMENT                                                 */
    /* ================================================================== */
    {
      id: 'mouvement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'trajectoire',
          title: 'Trajectoire et point de vue de l\'observateur',
          minutes: 25,
          objectives: [
            "Décrire le mouvement d'un objet en précisant l'objet de référence choisi pour l'observer.",
            "Expliquer qu'un même objet peut être immobile pour un observateur et en mouvement pour un autre.",
            "Identifier une trajectoire rectiligne, circulaire ou curviligne.",
            "Exploiter une chronophotographie pour tracer une trajectoire.",
          ],
          course: [
            {
              heading: "Immobile ou en mouvement ?",
              paragraphs: [
                "Un objet est en mouvement quand sa position change au cours du temps. Un objet est immobile quand sa position ne change pas. Mais cette position, on la repère toujours par rapport à un autre objet, que l'on appelle l'objet de référence.",
                "Prenons un exemple. Vous êtes assis dans un train qui roule. Par rapport à votre siège, vous ne bougez pas : vous êtes immobile. Par rapport au quai de la gare ou aux arbres que vous voyez défiler, votre position change : vous êtes en mouvement. Les deux affirmations sont vraies en même temps.",
                "Dire simplement « cet objet bouge » ne suffit donc pas. Pour décrire un mouvement correctement, il faut toujours préciser par rapport à quoi on l'observe : « le passager est immobile par rapport au wagon », « le passager est en mouvement par rapport au quai ».",
              ],
              box: { label: "Définition", text: "Un objet est en mouvement par rapport à un objet de référence si sa position par rapport à cet objet change au cours du temps. Sinon, il est immobile par rapport à cet objet." },
            },
            {
              heading: "Le point de vue de l'observateur",
              paragraphs: [
                "Chaque observateur décrit le mouvement depuis l'endroit où il se trouve : on parle de point de vue de l'observateur. Deux observateurs différents peuvent donc décrire le même mouvement de deux façons différentes, et avoir raison tous les deux.",
                "Exemple : un cycliste roule sur une route droite. Il regarde la valve de sa roue avant : pour lui, la valve tourne en rond autour du centre de la roue. Une personne immobile sur le trottoir voit la même valve faire une suite de bonds en forme d'arches, car la roue tourne et avance en même temps.",
                "Ce phénomène explique aussi une illusion connue. Depuis la Terre, nous voyons le Soleil se lever à l'est, traverser le ciel puis se coucher à l'ouest. Pourtant, c'est la Terre qui tourne sur elle-même : le Soleil ne fait pas le tour de la Terre. Nous observons le ciel depuis une planète en mouvement.",
              ],
              box: { label: "À retenir", text: "Le mouvement est relatif : sa description dépend de l'objet de référence choisi par l'observateur. Un même objet peut être immobile pour l'un et en mouvement pour l'autre." },
            },
            {
              heading: "La trajectoire d'un point",
              paragraphs: [
                "Pour décrire un mouvement, on suit un point précis de l'objet, par exemple le centre d'un ballon ou la pointe d'une aiguille. La trajectoire de ce point est la ligne formée par toutes les positions qu'il occupe successivement au cours du mouvement.",
                "On distingue trois types de trajectoires. Une trajectoire rectiligne est une portion de droite : une pomme qui tombe de l'arbre, une voiture sur une route bien droite. Une trajectoire circulaire est un cercle ou un morceau de cercle : un enfant assis sur un manège, la pointe de l'aiguille d'une horloge. Une trajectoire curviligne est une ligne courbe qui n'est pas un cercle : un ballon de basket lancé vers le panier, une feuille qui tombe en tourbillonnant.",
                "Attention : deux points d'un même objet n'ont pas toujours la même trajectoire. Sur un manège qui tourne, le cheval de bois placé au bord décrit un grand cercle, celui placé près du centre décrit un petit cercle, et le point situé exactement sur l'axe ne bouge pas.",
              ],
              box: { label: "Définition", text: "La trajectoire d'un point est l'ensemble des positions successives occupées par ce point au cours de son mouvement. Elle peut être rectiligne (droite), circulaire (cercle) ou curviligne (autre courbe)." },
            },
            {
              heading: "Enregistrer un mouvement : la chronophotographie",
              paragraphs: [
                "Une chronophotographie est une image qui superpose plusieurs photographies d'un même objet prises à intervalles de temps réguliers, par exemple toutes les 0,1 seconde. On voit sur une seule image les positions successives de l'objet.",
                "En reliant les positions successives d'un même point (le centre d'une balle, par exemple), on trace sa trajectoire. Cette technique a été mise au point à la fin du XIXe siècle par le physiologiste français Étienne-Jules Marey, qui étudiait le vol des oiseaux et la marche des êtres humains. Aujourd'hui, une simple vidéo filmée avec un téléphone permet de faire la même chose.",
              ],
            },
          ],
          keyPoints: [
            "Un objet est en mouvement ou immobile toujours par rapport à un objet de référence, qu'il faut préciser.",
            "Le mouvement est relatif : deux observateurs peuvent décrire différemment le même mouvement.",
            "La trajectoire d'un point est l'ensemble de ses positions successives au cours du mouvement.",
            "Trajectoire rectiligne : une droite. Circulaire : un cercle. Curviligne : une autre courbe.",
            "Une chronophotographie montre les positions d'un objet à intervalles de temps réguliers.",
          ],
          example: {
            statement: "Julie est assise dans un bus qui roule sur une avenue toute droite. Son ami Hugo attend, immobile, sur le trottoir. a) Julie est-elle immobile ou en mouvement ? b) Quelle est la trajectoire de Julie pour Hugo ?",
            solution: [
              "a) La question est incomplète : il faut choisir un objet de référence.",
              "Par rapport au bus (ou à son siège), la position de Julie ne change pas : Julie est immobile par rapport au bus.",
              "Par rapport au trottoir (ou à Hugo), la position de Julie change : Julie est en mouvement par rapport à Hugo.",
              "b) Pour Hugo, Julie avance le long d'une avenue droite : ses positions successives forment une droite.",
              "Réponse : Julie est immobile par rapport au bus, en mouvement par rapport à Hugo, et sa trajectoire vue par Hugo est rectiligne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le type de trajectoire (rectiligne, circulaire ou curviligne) du point indiqué, observé par une personne immobile au sol : a) le centre d'une pomme qui tombe de l'arbre ; b) la pointe de l'aiguille des minutes d'une horloge ; c) le centre d'un ballon de basket lancé vers le panier ; d) un enfant assis sur un manège qui tourne ; e) une voiture sur une portion d'autoroute toute droite.",
              hint: "Imaginez la ligne que dessinerait le point s'il laissait une trace derrière lui : est-ce une droite, un cercle ou une autre courbe ?",
              solution: [
                "a) La pomme tombe verticalement, en ligne droite : trajectoire rectiligne.",
                "b) La pointe de l'aiguille tourne autour du centre de l'horloge en restant toujours à la même distance : trajectoire circulaire.",
                "c) Le ballon monte puis redescend en dessinant une courbe en forme d'arche, qui n'est pas un cercle : trajectoire curviligne.",
                "d) L'enfant tourne autour de l'axe du manège : trajectoire circulaire.",
                "e) La voiture suit une route droite : trajectoire rectiligne.",
              ],
            },
            {
              level: 2,
              statement: "Léa est assise dans un train qui roule. Son sac est posé sur le porte-bagages au-dessus d'elle. Le contrôleur marche dans le couloir du wagon. Tom attend, immobile, sur le quai. Répondez en justifiant : a) Le sac est-il en mouvement par rapport à Léa ? b) Le sac est-il en mouvement par rapport à Tom ? c) Léa est-elle en mouvement par rapport au contrôleur ? d) Existe-t-il un objet de référence par rapport auquel le contrôleur est immobile ?",
              hint: "Pour chaque question, demandez-vous si la distance et la position entre les deux personnes ou objets changent au cours du temps.",
              solution: [
                "a) Le sac et Léa sont tous les deux emportés par le train, et le sac reste au même endroit au-dessus de Léa : le sac est immobile par rapport à Léa.",
                "b) Le train s'éloigne de Tom, et le sac avec lui : le sac est en mouvement par rapport à Tom.",
                "c) Le contrôleur marche dans le couloir : sa position par rapport à Léa change, donc Léa est en mouvement par rapport au contrôleur (et le contrôleur par rapport à Léa).",
                "d) Oui : le contrôleur est immobile par rapport à tout objet qui se déplace exactement comme lui, par exemple le carnet qu'il tient à la main ou la casquette qu'il porte.",
                "Conclusion : on ne peut pas dire qu'un objet bouge ou ne bouge pas sans préciser l'objet de référence.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Arthur roule à vélo sur une route droite et plate. On s'intéresse à deux points de sa roue avant : la valve, fixée sur le bord de la roue, et le centre de la roue (le moyeu). Sa sœur Nora le regarde passer, immobile sur le trottoir. a) Quelle est la trajectoire de la valve pour Arthur, qui regarde sa roue en pédalant ? b) Quelle est la trajectoire du centre de la roue pour Nora ? c) Pour Nora, la trajectoire de la valve est-elle circulaire ? Justifiez. d) Quelle est la trajectoire du centre de la roue pour Arthur ? e) Que montre cet exemple ?",
              hint: "Pour Arthur, la roue reste toujours au même endroit sous lui : elle ne fait que tourner. Pour Nora, la roue tourne et avance en même temps.",
              solution: [
                "a) Pour Arthur, la roue tourne sur place autour de son centre : la valve reste toujours à la même distance du centre, sa trajectoire est circulaire.",
                "b) Pour Nora, le centre de la roue avance avec le vélo, toujours à la même hauteur au-dessus de la route droite : sa trajectoire est rectiligne.",
                "c) Non. Pour Nora, la valve tourne autour du centre de la roue, mais ce centre avance en même temps. La valve touche la route, remonte en haut de la roue, redescend, et ainsi de suite : elle dessine une suite d'arches. C'est une trajectoire curviligne, pas un cercle.",
                "d) Pour Arthur, le centre de la roue ne bouge pas : il est immobile par rapport à Arthur. Il n'a donc pas de trajectoire (ou bien sa « trajectoire » se réduit à un point).",
                "e) Un même point peut avoir des trajectoires différentes selon l'observateur : la description d'un mouvement dépend toujours de l'objet de référence choisi. Le mouvement est relatif.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Pensez toujours à l'objet de référence.",
            statements: [
              { text: "Un passager assis dans un avion en vol est immobile par rapport à son siège.", true: true, why: "Le passager et son siège se déplacent ensemble : la position du passager par rapport au siège ne change pas." },
              { text: "Un objet est soit immobile, soit en mouvement, quel que soit l'observateur.", true: false, why: "C'est l'erreur à éviter : le mouvement est relatif, il dépend de l'objet de référence choisi." },
              { text: "Le Soleil tourne autour de la Terre, puisqu'on le voit traverser le ciel chaque jour.", true: false, why: "Le Soleil semble bouger dans le ciel parce que la Terre tourne sur elle-même : c'est un mouvement apparent." },
              { text: "La trajectoire d'une balle de tennis lancée en hauteur vers un camarade est curviligne.", true: true, why: "La balle monte puis redescend en dessinant une courbe qui n'est ni une droite ni un cercle." },
              { text: "Tous les points d'un manège qui tourne ont la même trajectoire.", true: false, why: "Un point au bord décrit un grand cercle, un point près du centre un petit cercle, et l'axe reste immobile." },
              { text: "Sur une chronophotographie, les images sont prises à intervalles de temps réguliers.", true: true, why: "C'est le principe de la chronophotographie : la durée entre deux images est toujours la même." },
              { text: "La trajectoire d'un point dépend de l'observateur qui le regarde.", true: true, why: "La valve d'une roue de vélo décrit un cercle pour le cycliste et une suite d'arches pour un piéton." },
            ],
          },
          quiz: [
            { q: "Un passager est assis dans un avion en vol. Par rapport à quoi est-il immobile ?", options: ["Le sol", "Son siège", "Les nuages", "Une montagne"], answer: 1, why: "Le passager et son siège se déplacent ensemble : sa position par rapport au siège ne change pas." },
            { q: "Quelle est la trajectoire de la pointe de l'aiguille d'une horloge ?", options: ["Rectiligne", "Curviligne, mais pas un cercle", "Circulaire"], answer: 2, why: "La pointe tourne autour du centre de l'horloge en restant à la même distance : elle décrit un cercle." },
            { q: "Qu'appelle-t-on la trajectoire d'un point ?", options: ["La vitesse moyenne de ce point", "L'ensemble de ses positions successives", "La distance entre son départ et son arrivée", "La durée totale de son mouvement"], answer: 1, why: "La trajectoire est la ligne formée par toutes les positions occupées successivement par le point." },
            { q: "Une bille lâchée sans élan tombe verticalement. Pour une personne immobile, sa trajectoire est :", options: ["rectiligne", "circulaire", "curviligne"], answer: 0, why: "La bille tombe tout droit vers le sol : ses positions successives forment une droite." },
            { q: "Pourquoi dit-on que le mouvement est relatif ?", options: ["Parce qu'il dépend de la masse de l'objet", "Parce qu'on ne peut jamais le mesurer exactement", "Parce que les objets bougent toujours un petit peu", "Parce qu'il dépend de l'objet de référence"], answer: 3, why: "Un même objet peut être immobile par rapport à un objet et en mouvement par rapport à un autre." },
          ],
          trap: "Affirmer qu'un objet « bouge » ou « ne bouge pas » sans préciser par rapport à quoi : un passager de train est à la fois immobile par rapport à son siège et en mouvement par rapport au quai.",
          method: "Avant de répondre à une question sur un mouvement, écrivez d'abord la phrase « par rapport à... » en nommant l'objet de référence. Pour trouver une trajectoire, imaginez que le point laisse une trace derrière lui, puis nommez la forme obtenue.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse',
          title: 'La vitesse : mouvement uniforme, accéléré ou ralenti',
          minutes: 30,
          objectives: [
            "Calculer la valeur d'une vitesse moyenne à partir d'une distance parcourue et d'une durée.",
            "Utiliser les unités de vitesse (km/h et m/s) et connaître quelques ordres de grandeur.",
            "Reconnaître un mouvement uniforme, accéléré ou ralenti à partir d'un enregistrement.",
            "Décrire complètement un mouvement par sa trajectoire et l'évolution de sa vitesse.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la vitesse ?",
              paragraphs: [
                "La vitesse indique si un objet se déplace vite ou lentement, c'est-à-dire quelle distance il parcourt pendant une certaine durée. Plus un objet parcourt une grande distance en peu de temps, plus sa vitesse est grande.",
                "Pour calculer une vitesse, on divise la distance parcourue par la durée du parcours. Par exemple, un cycliste qui parcourt 30 km en 2 h a une vitesse de 30 ÷ 2 = 15 km/h. Cela veut dire qu'en roulant ainsi, il parcourt 15 km en une heure.",
                "Pendant un trajet, la vitesse change souvent : le cycliste ralentit dans les montées, accélère dans les descentes, s'arrête à un feu. Le calcul « distance ÷ durée » donne donc une vitesse moyenne, celle qu'il aurait eue s'il avait roulé tout le temps à la même allure.",
              ],
              box: { label: "Formule", text: "Vitesse moyenne = distance parcourue ÷ durée du parcours, que l'on écrit v = d ÷ t. Si la distance est en kilomètres (km) et la durée en heures (h), la vitesse est en kilomètres par heure (km/h). Si la distance est en mètres (m) et la durée en secondes (s), la vitesse est en mètres par seconde (m/s)." },
            },
            {
              heading: "Les unités et les ordres de grandeur",
              paragraphs: [
                "Deux unités de vitesse sont très utilisées. Le kilomètre par heure (km/h) sert pour les véhicules : il est écrit sur les panneaux routiers et sur le compteur des voitures. Le mètre par seconde (m/s) est l'unité utilisée par les scientifiques, et elle convient bien aux mouvements courts, comme une course de 100 m.",
                "Un objet qui avance de 1 m chaque seconde parcourt 3 600 m, soit 3,6 km, en une heure (car une heure compte 3 600 secondes). Ainsi, 1 m/s correspond à 3,6 km/h, et 10 m/s correspondent à 36 km/h.",
                "Quelques ordres de grandeur : un escargot avance d'environ 1 millimètre par seconde ; une personne qui marche, d'environ 5 km/h ; un cycliste roule souvent entre 15 et 20 km/h ; en ville, la vitesse des voitures est limitée à 50 km/h, et parfois à 30 km/h ; un TGV peut atteindre 320 km/h. Le son se déplace dans l'air à environ 340 m/s, et la lumière à environ 300 000 km par seconde.",
              ],
              box: { label: "Repère", text: "1 m/s = 3,6 km/h. Une heure = 60 minutes = 3 600 secondes. Une demi-heure = 30 minutes." },
            },
            {
              heading: "Mouvement uniforme, accéléré ou ralenti",
              paragraphs: [
                "Sur une chronophotographie, les images sont prises à intervalles de temps réguliers. L'écart entre deux positions successives montre donc la distance parcourue pendant une même durée. Cet écart renseigne sur la vitesse.",
                "Si les positions sont également espacées, l'objet parcourt la même distance pendant chaque intervalle : sa vitesse est constante, le mouvement est uniforme. Exemple : une voiture qui roule toujours à 110 km/h sur une autoroute.",
                "Si les écarts augmentent, l'objet parcourt de plus en plus de distance pendant chaque intervalle : sa vitesse augmente, le mouvement est accéléré. Exemple : une voiture qui démarre au feu vert, une bille qui tombe. Si les écarts diminuent, la vitesse diminue : le mouvement est ralenti (on dit aussi décéléré). Exemple : un vélo qui freine avant un stop.",
              ],
              box: { label: "À retenir", text: "Écarts égaux entre les positions : mouvement uniforme (vitesse constante). Écarts de plus en plus grands : mouvement accéléré. Écarts de plus en plus petits : mouvement ralenti." },
            },
            {
              heading: "Décrire complètement un mouvement",
              paragraphs: [
                "Pour décrire complètement un mouvement, on donne deux informations : la forme de la trajectoire et l'évolution de la vitesse. On dit par exemple qu'une voiture qui démarre sur une route droite a un mouvement rectiligne accéléré, et qu'un enfant sur un manège qui tourne régulièrement a un mouvement circulaire uniforme.",
                "Un même trajet se découpe souvent en plusieurs phases. Un train qui quitte une gare a d'abord un mouvement accéléré, puis il roule à vitesse constante (mouvement uniforme), enfin il freine avant la gare suivante (mouvement ralenti). Sa vitesse moyenne sur tout le trajet ne dit rien de ces différentes phases.",
              ],
            },
          ],
          keyPoints: [
            "Vitesse moyenne = distance parcourue ÷ durée du parcours (v = d ÷ t).",
            "Unités : km/h si la distance est en km et la durée en h ; m/s si la distance est en m et la durée en s.",
            "1 m/s = 3,6 km/h. Ordres de grandeur : marche environ 5 km/h, son dans l'air environ 340 m/s.",
            "Mouvement uniforme : vitesse constante ; accéléré : vitesse qui augmente ; ralenti : vitesse qui diminue.",
            "Sur une chronophotographie, on compare les écarts entre les positions successives.",
            "Décrire un mouvement, c'est donner sa trajectoire et l'évolution de sa vitesse (exemple : rectiligne accéléré).",
          ],
          example: {
            statement: "Au stade, Inès parcourt 400 m en 80 secondes. Paul parcourt 300 m en 75 secondes. a) Calculez la vitesse moyenne de chacun en m/s. b) Qui est le plus rapide ?",
            solution: [
              "On utilise la formule v = d ÷ t, avec la distance en mètres et la durée en secondes : la vitesse sera en m/s.",
              "a) Inès : v = 400 ÷ 80 = 5. Sa vitesse moyenne est de 5 m/s.",
              "Paul : v = 300 ÷ 75 = 4. Sa vitesse moyenne est de 4 m/s.",
              "Vérification : 5 × 80 = 400 et 4 × 75 = 300.",
              "b) 5 m/s est plus grand que 4 m/s : Inès est la plus rapide, même si les deux élèves n'ont pas couru la même distance.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculez la vitesse moyenne dans chaque cas, en précisant l'unité : a) une voiture parcourt 150 km en 2 h ; b) un cycliste parcourt 45 km en 3 h ; c) un coureur parcourt 100 m en 20 s ; d) un randonneur parcourt 12 km en 3 h.",
              hint: "Divisez la distance par la durée. L'unité dépend des unités de la distance et de la durée.",
              solution: [
                "a) v = 150 ÷ 2 = 75. La voiture roule à 75 km/h en moyenne.",
                "b) v = 45 ÷ 3 = 15. Le cycliste roule à 15 km/h en moyenne.",
                "c) v = 100 ÷ 20 = 5. Le coureur court à 5 m/s en moyenne.",
                "d) v = 12 ÷ 3 = 4. Le randonneur marche à 4 km/h en moyenne.",
              ],
            },
            {
              level: 2,
              statement: "On a filmé trois balles qui roulent en ligne droite, et l'on a mesuré la distance parcourue par chacune pendant chaque seconde (données fictives). Balle A : 3 m, puis 3 m, puis 3 m, puis 3 m. Balle B : 1 m, puis 3 m, puis 5 m, puis 7 m. Balle C : 8 m, puis 6 m, puis 4 m, puis 2 m. a) Pour chaque balle, dites si le mouvement est uniforme, accéléré ou ralenti. b) Calculez la vitesse moyenne de chaque balle sur les 4 secondes. c) Laquelle de ces balles pourrait rouler sur un sol de plus en plus en pente, vers le bas ?",
              hint: "Comparez les distances parcourues pendant chaque seconde. Pour la vitesse moyenne, additionnez d'abord les quatre distances.",
              solution: [
                "a) Balle A : la distance parcourue est la même chaque seconde, le mouvement est uniforme. Balle B : la distance augmente chaque seconde, le mouvement est accéléré. Balle C : la distance diminue chaque seconde, le mouvement est ralenti.",
                "b) Balle A : 3 + 3 + 3 + 3 = 12 m en 4 s, donc v = 12 ÷ 4 = 3 m/s.",
                "Balle B : 1 + 3 + 5 + 7 = 16 m en 4 s, donc v = 16 ÷ 4 = 4 m/s.",
                "Balle C : 8 + 6 + 4 + 2 = 20 m en 4 s, donc v = 20 ÷ 4 = 5 m/s.",
                "Remarque : la balle C a la plus grande vitesse moyenne, alors que c'est elle qui ralentit. La vitesse moyenne ne dit pas si un mouvement est accéléré ou ralenti.",
                "c) Une balle qui descend une pente prend de plus en plus de vitesse : c'est la balle B, dont le mouvement est accéléré.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux villes sont séparées par 400 km (données fictives). Le train relie les deux villes en 2 h. Une voiture fait le même trajet en roulant à 100 km/h en moyenne. a) Calculez la vitesse moyenne du train. b) Combien de temps la voiture met-elle ? c) Un cycliste roule à 20 km/h en moyenne : combien d'heures de route lui faudrait-il ? d) Pendant le trajet, le train quitte la gare, roule longtemps à vitesse constante, puis s'arrête à la gare d'arrivée. Décrivez les trois phases de son mouvement. e) Le train a-t-il roulé à 200 km/h pendant tout le trajet ? Expliquez.",
              hint: "Pour les questions b et c, raisonnez avec la proportionnalité : à 100 km/h, la voiture parcourt 100 km en une heure. Combien de fois 100 km faut-il pour faire 400 km ?",
              solution: [
                "a) v = d ÷ t = 400 ÷ 2 = 200. La vitesse moyenne du train est de 200 km/h.",
                "b) À 100 km/h, la voiture parcourt 100 km en 1 h. Or 400 km = 4 × 100 km : il lui faut 4 × 1 h = 4 h.",
                "c) À 20 km/h, le cycliste parcourt 20 km en 1 h. Or 400 ÷ 20 = 20 : il lui faudrait 20 h de route (sans compter les pauses).",
                "Vérification : 20 km/h × 20 h = 400 km et 100 km/h × 4 h = 400 km.",
                "d) Au départ, la vitesse du train augmente : mouvement accéléré. Ensuite, sa vitesse reste la même : mouvement uniforme. À l'arrivée, sa vitesse diminue jusqu'à l'arrêt : mouvement ralenti.",
                "e) Non. 200 km/h est une vitesse moyenne. Au départ et à l'arrivée, le train roule moins vite que 200 km/h ; pour compenser, il a forcément roulé plus vite que 200 km/h pendant une partie du trajet.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces mouvements du plus lent au plus rapide.",
            items: [
              "Un escargot qui avance (environ 1 mm par seconde)",
              "Une personne qui marche (environ 5 km/h)",
              "Un cycliste en promenade (environ 15 km/h)",
              "Une voiture en ville (50 km/h au maximum)",
              "Un TGV lancé à pleine vitesse (environ 320 km/h)",
              "Le son dans l'air (environ 340 m/s)",
              "La lumière (environ 300 000 km par seconde)",
            ],
          },
          quiz: [
            { q: "Un automobiliste parcourt 240 km en 3 h. Quelle est sa vitesse moyenne ?", options: ["720 km/h", "80 km/h", "60 km/h", "243 km/h"], answer: 1, why: "v = d ÷ t = 240 ÷ 3 = 80 km/h." },
            { q: "Sur une chronophotographie, les positions d'une balle sont de plus en plus écartées. Le mouvement est :", options: ["ralenti", "uniforme", "accéléré"], answer: 2, why: "Pendant chaque intervalle de temps, la balle parcourt une distance de plus en plus grande : sa vitesse augmente." },
            { q: "Quelle est l'unité de vitesse si la distance est en mètres et la durée en secondes ?", options: ["m/s", "km/h", "s/m", "m × s"], answer: 0, why: "On divise des mètres par des secondes : la vitesse s'exprime en mètres par seconde (m/s)." },
            { q: "Une voiture roule sur une autoroute droite, toujours à 110 km/h. Son mouvement est :", options: ["circulaire uniforme", "rectiligne accéléré", "rectiligne ralenti", "rectiligne uniforme"], answer: 3, why: "La trajectoire est une droite (rectiligne) et la vitesse ne change pas (uniforme)." },
            { q: "À quelle vitesse correspond 1 m/s ?", options: ["1 km/h", "3,6 km/h", "60 km/h", "36 km/h"], answer: 1, why: "En une heure (3 600 s), on parcourt 3 600 m, soit 3,6 km : 1 m/s = 3,6 km/h." },
          ],
          trap: "Croire que la vitesse moyenne décrit tout le trajet : un train à 200 km/h de moyenne a roulé moins vite au départ et à l'arrivée, et plus vite à d'autres moments. Autre erreur fréquente : oublier l'unité, ou diviser la durée par la distance au lieu de la distance par la durée.",
          method: "Pour calculer une vitesse, écrivez toujours la formule v = d ÷ t, puis remplacez d et t par leurs valeurs, et terminez par l'unité (km/h ou m/s). Vérifiez ensuite par une multiplication : vitesse × durée doit redonner la distance.",
        },
      ],
    },

    /* ================================================================== */
    /* LES SOURCES ET LES FORMES D'ÉNERGIE                                  */
    /* ================================================================== */
    {
      id: 'energie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sources-energie',
          title: 'Les sources d\'énergie utilisées par les êtres humains',
          minutes: 25,
          objectives: [
            "Identifier des sources d'énergie utilisées par les êtres humains.",
            "Relier un besoin de la vie courante (se chauffer, se déplacer, s'éclairer, vivre) à une source d'énergie.",
            "Reconnaître les situations où l'énergie est stockée, transportée ou utilisée.",
          ],
          course: [
            {
              heading: "Nous avons besoin d'énergie",
              paragraphs: [
                "Chaque jour, les êtres humains ont besoin d'énergie : pour se déplacer (voiture, bus, vélo), pour se chauffer, pour s'éclairer, pour cuisiner, pour faire fonctionner les ordinateurs, les téléphones et les machines des usines. Notre propre corps a aussi besoin d'énergie pour vivre, grandir, bouger et rester à la bonne température.",
                "L'énergie, c'est ce qui permet de produire un changement : mettre un objet en mouvement, le chauffer, l'éclairer, faire fonctionner un appareil. On ne voit pas l'énergie elle-même, mais on voit ses effets : la voiture avance, l'eau de la casserole chauffe, la lampe éclaire.",
              ],
              box: { label: "Définition", text: "Une source d'énergie est ce qui fournit l'énergie que l'on utilise : le Soleil, le vent, l'eau en mouvement, le bois, le pétrole, le charbon, le gaz naturel, l'uranium, la chaleur de la Terre, ou encore les aliments pour les êtres vivants." },
            },
            {
              heading: "Les principales sources d'énergie",
              paragraphs: [
                "Le Soleil nous envoie de la lumière et de la chaleur : elles font pousser les plantes, sèchent le linge, chauffent l'eau des chauffe-eau solaires et produisent de l'électricité avec des panneaux solaires. Le vent fait avancer les voiliers et tourner les éoliennes. L'eau en mouvement (rivières, chutes d'eau, marées) fait tourner les moulins et les turbines des barrages.",
                "Les combustibles sont des matières que l'on brûle pour obtenir de la chaleur : le bois, mais aussi le charbon, le pétrole (qui donne l'essence et le gazole) et le gaz naturel. Le charbon, le pétrole et le gaz naturel sont appelés combustibles fossiles, car ils se sont formés dans le sous-sol, pendant des millions d'années, à partir de restes d'êtres vivants.",
                "L'uranium est un métal extrait de certaines roches : il est utilisé dans les centrales nucléaires pour produire de l'électricité. Enfin, la chaleur qui vient de l'intérieur de la Terre (la géothermie) permet de chauffer des bâtiments, par exemple en pompant de l'eau chaude située en profondeur.",
              ],
            },
            {
              heading: "L'énergie de notre corps",
              paragraphs: [
                "Pour nous, la source d'énergie, ce sont les aliments. Comme une voiture a besoin de carburant, notre corps a besoin de nourriture : l'énergie contenue dans les aliments permet à nos muscles de travailler, à notre cœur de battre, à notre cerveau de fonctionner et à notre corps de rester à environ 37 °C.",
                "Un sportif qui court un marathon a donc besoin de plus d'énergie qu'une personne qui reste assise toute la journée. Les animaux aussi tirent leur énergie de leur nourriture. Les plantes vertes, elles, utilisent directement la lumière du Soleil.",
              ],
            },
            {
              heading: "Stocker, transporter et utiliser l'énergie",
              paragraphs: [
                "L'énergie peut être mise en réserve : on dit qu'elle est stockée. Elle est stockée dans une pile ou une batterie, dans le réservoir d'essence d'une voiture, dans une bûche de bois, dans l'eau retenue en hauteur derrière un barrage, et dans les aliments.",
                "L'énergie est souvent transportée loin de l'endroit où on la trouve : le pétrole voyage dans des navires pétroliers et des oléoducs, le gaz dans des gazoducs, l'électricité dans les lignes électriques. Elle est ensuite utilisée par un appareil ou par un être vivant.",
                "Attention : l'électricité n'est pas une source d'énergie que l'on trouve telle quelle dans la nature. On la produit dans des centrales (nucléaires, hydrauliques, à charbon, à gaz), avec des éoliennes ou des panneaux solaires, c'est-à-dire à partir d'autres sources d'énergie.",
              ],
              box: { label: "À retenir", text: "L'énergie peut être stockée (pile, réservoir, bûche, aliments, barrage), transportée (lignes électriques, gazoducs, camions) puis utilisée. L'électricité est produite à partir d'autres sources d'énergie." },
            },
          ],
          keyPoints: [
            "L'énergie permet de mettre en mouvement, de chauffer, d'éclairer, de faire fonctionner des appareils et de vivre.",
            "Sources d'énergie : Soleil, vent, eau en mouvement, bois, charbon, pétrole, gaz naturel, uranium, chaleur de la Terre, aliments.",
            "Charbon, pétrole et gaz naturel sont des combustibles fossiles, formés en millions d'années à partir de restes d'êtres vivants.",
            "La source d'énergie de notre corps, ce sont les aliments.",
            "L'énergie peut être stockée (pile, réservoir, aliments...), transportée puis utilisée.",
            "L'électricité n'est pas une source naturelle : on la produit à partir d'autres sources.",
          ],
          example: {
            statement: "Pour chaque situation, nommez la source d'énergie utilisée et le besoin satisfait : a) un voilier traverse la baie ; b) une famille chauffe sa maison avec un poêle à bois ; c) une joueuse de tennis court après la balle.",
            solution: [
              "a) Le voilier est poussé par le vent : la source d'énergie est le vent, et le besoin satisfait est de se déplacer.",
              "b) Le poêle brûle du bois : la source d'énergie est le bois (un combustible), et le besoin satisfait est de se chauffer.",
              "c) La joueuse bouge grâce à ses muscles, qui utilisent l'énergie de ce qu'elle a mangé : la source d'énergie est l'alimentation, et le besoin satisfait est de se mouvoir.",
              "Réponse : le vent pour se déplacer, le bois pour se chauffer, les aliments pour bouger.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez la source d'énergie utilisée dans chaque situation : a) une cuisinière au gaz ; b) un moulin à eau ; c) un cycliste qui monte une côte ; d) un chauffe-eau solaire sur un toit ; e) une voiture qui roule à l'essence ; f) une éolienne.",
              hint: "Demandez-vous ce qui fournit l'énergie au départ : ce que l'on brûle, ce qui pousse, ce qui éclaire ou ce que l'on mange.",
              solution: [
                "a) Le gaz naturel, que l'on brûle pour chauffer les casseroles.",
                "b) L'eau en mouvement de la rivière, qui fait tourner la roue du moulin.",
                "c) Les aliments que le cycliste a mangés, qui fournissent l'énergie à ses muscles.",
                "d) Le Soleil, dont la lumière chauffe l'eau.",
                "e) Le pétrole, dont on tire l'essence.",
                "f) Le vent, qui fait tourner les pales.",
              ],
            },
            {
              level: 2,
              statement: "Voici des objets dans lesquels de l'énergie est stockée : la pile d'une télécommande, une bûche, le réservoir d'une voiture, l'eau retenue derrière un barrage, une tartine de pain, la batterie d'un téléphone. a) Pour chacun, dites quel besoin cette énergie permet de satisfaire. b) Lequel de ces stocks d'énergie fonctionne aussi pour votre corps ? c) Comment l'énergie produite par le barrage arrive-t-elle jusqu'aux maisons ?",
              hint: "Pour chaque objet, pensez à ce qui se passe quand on utilise l'énergie qu'il contient : qu'est-ce qui bouge, chauffe, éclaire ou fonctionne ?",
              solution: [
                "a) La pile permet de faire fonctionner la télécommande. La bûche, une fois brûlée, permet de se chauffer ou de cuisiner. Le réservoir d'essence permet à la voiture de rouler, donc de se déplacer.",
                "L'eau du barrage, en descendant, fait tourner des turbines et permet de produire de l'électricité. La tartine fournit de l'énergie au corps pour vivre et bouger. La batterie permet au téléphone de fonctionner.",
                "b) La tartine de pain : les aliments sont la source d'énergie de notre corps.",
                "c) Le barrage produit de l'électricité, qui est transportée par les lignes électriques jusqu'aux maisons.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Margot fait du vélo après avoir mangé une tartine de pain. Son père part en voiture à essence. a) Montrez que l'énergie utilisée par Margot vient, à l'origine, du Soleil. b) Montrez que l'énergie utilisée par la voiture vient, elle aussi, à l'origine, du Soleil. c) Citez deux sources d'énergie qui ne viennent pas du Soleil.",
              hint: "Remontez le chemin à l'envers : de quoi est fait le pain ? Comment cette plante a-t-elle poussé ? Pour l'essence, rappelez-vous comment se sont formés les combustibles fossiles.",
              solution: [
                "a) Le pain est fabriqué avec de la farine de blé. Le blé est une plante verte : il a poussé en utilisant la lumière du Soleil. L'énergie stockée dans le grain de blé, puis dans le pain, vient donc du Soleil. En mangeant le pain, Margot récupère cette énergie pour faire travailler ses muscles.",
                "Chemin de l'énergie : Soleil → blé → farine → pain → Margot → mouvement du vélo.",
                "b) L'essence est tirée du pétrole. Le pétrole s'est formé pendant des millions d'années à partir de restes de minuscules êtres vivants marins, dont beaucoup d'algues microscopiques, qui vivaient grâce à la lumière du Soleil. L'énergie de l'essence est donc une énergie du Soleil stockée il y a très longtemps.",
                "Chemin de l'énergie : Soleil → êtres vivants marins → pétrole → essence → moteur → mouvement de la voiture.",
                "c) L'uranium, utilisé dans les centrales nucléaires, et la chaleur de l'intérieur de la Terre (géothermie) ne viennent pas du Soleil. On peut aussi citer les marées, dues surtout à l'attraction de la Lune.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque besoin à la source d'énergie utilisée.",
            pairs: [
              { left: "Faire avancer un voilier", right: "Le vent" },
              { left: "Faire rouler une voiture à essence", right: "Le pétrole" },
              { left: "Chauffer l'eau d'un chauffe-eau solaire", right: "Le Soleil" },
              { left: "Chauffer une maison avec une cheminée", right: "Le bois" },
              { left: "Faire courir un athlète", right: "Les aliments" },
              { left: "Faire fonctionner une centrale nucléaire", right: "L'uranium" },
            ],
          },
          quiz: [
            { q: "Laquelle de ces sources d'énergie est un combustible fossile ?", options: ["Le vent", "Le bois", "Le charbon", "Le Soleil"], answer: 2, why: "Le charbon s'est formé dans le sous-sol pendant des millions d'années à partir de restes de végétaux : c'est un combustible fossile." },
            { q: "D'où vient l'énergie qui permet à notre corps de bouger ?", options: ["Des aliments que nous mangeons", "De l'eau que nous buvons", "De la lumière du Soleil sur la peau"], answer: 0, why: "Les aliments sont la source d'énergie de notre corps : ils fournissent l'énergie utilisée par les muscles." },
            { q: "Pourquoi dit-on que l'électricité n'est pas une source d'énergie naturelle ?", options: ["Parce qu'elle ne peut servir qu'à éclairer les maisons", "Parce qu'on la produit à partir d'autres sources", "Parce qu'elle est invisible", "Parce qu'elle est trop dangereuse"], answer: 1, why: "On produit l'électricité dans des centrales, des éoliennes ou des panneaux solaires, à partir d'autres sources d'énergie." },
            { q: "Où l'énergie est-elle stockée dans une lampe de poche ?", options: ["Dans l'ampoule", "Dans l'interrupteur", "Dans les fils", "Dans la pile"], answer: 3, why: "La pile est la réserve d'énergie de la lampe ; l'ampoule l'utilise pour éclairer." },
            { q: "Une éolienne utilise l'énergie :", options: ["de l'eau des rivières", "du vent", "du pétrole", "de l'uranium"], answer: 1, why: "Le vent fait tourner les pales de l'éolienne, qui produit de l'électricité." },
          ],
          trap: "Considérer l'électricité comme une source d'énergie naturelle, au même titre que le vent ou le Soleil : l'électricité est toujours produite à partir d'une autre source d'énergie.",
          method: "Pour trouver la source d'énergie d'une situation, remontez le chemin à l'envers en vous demandant à chaque étape « d'où vient l'énergie ? », jusqu'à arriver à quelque chose que l'on trouve dans la nature (Soleil, vent, eau, bois, pétrole, uranium...).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'formes-conversions',
          title: 'Formes d\'énergie et chaînes de conversion',
          minutes: 30,
          objectives: [
            "Identifier différentes formes d'énergie : énergie de mouvement, thermique, lumineuse, électrique, chimique.",
            "Identifier le convertisseur d'un appareil et les formes d'énergie qu'il reçoit et qu'il produit.",
            "Représenter une chaîne d'énergie simple de la vie courante.",
          ],
          course: [
            {
              heading: "Les différentes formes de l'énergie",
              paragraphs: [
                "L'énergie existe sous plusieurs formes. Un objet en mouvement possède de l'énergie de mouvement (on l'appelle aussi énergie cinétique) : une boule de bowling qui roule peut renverser les quilles. La chaleur est une forme d'énergie appelée énergie thermique : c'est elle qui fait bouillir l'eau. La lumière transporte de l'énergie lumineuse : c'est elle qui fait chauffer une voiture garée au soleil.",
                "L'énergie électrique est celle que transporte le courant électrique, dans les fils et les câbles. L'énergie chimique est l'énergie stockée dans la matière : dans les aliments, dans les combustibles (bois, essence, gaz) et dans les piles. Elle est libérée quand on brûle un combustible, quand une pile fonctionne ou quand notre corps utilise ses aliments. Enfin, l'énergie nucléaire est stockée au cœur de la matière de l'uranium et libérée dans les centrales nucléaires.",
              ],
              box: { label: "Repère", text: "Formes d'énergie : énergie de mouvement (cinétique), énergie thermique (chaleur), énergie lumineuse, énergie électrique, énergie chimique (aliments, combustibles, piles), énergie nucléaire." },
            },
            {
              heading: "Les convertisseurs d'énergie",
              paragraphs: [
                "Un convertisseur est un objet, une machine ou un être vivant qui transforme une forme d'énergie en une autre. On ne fabrique pas d'énergie à partir de rien : on la transforme.",
                "Exemples : une lampe convertit l'énergie électrique en énergie lumineuse. Un moteur électrique convertit l'énergie électrique en énergie de mouvement. Un radiateur électrique convertit l'énergie électrique en énergie thermique. Un panneau solaire photovoltaïque convertit l'énergie lumineuse en énergie électrique. Une éolienne ou une dynamo de vélo convertit l'énergie de mouvement en énergie électrique. Nos muscles convertissent l'énergie chimique des aliments en énergie de mouvement.",
              ],
              box: { label: "Définition", text: "Un convertisseur d'énergie reçoit de l'énergie sous une forme et la restitue sous une ou plusieurs autres formes. Exemple : la lampe reçoit de l'énergie électrique et produit de l'énergie lumineuse et de l'énergie thermique." },
            },
            {
              heading: "Représenter une chaîne d'énergie",
              paragraphs: [
                "Une chaîne d'énergie montre, étape par étape, le chemin de l'énergie depuis sa réserve jusqu'à l'effet recherché. On la représente avec des cases pour les réservoirs et les convertisseurs, reliées par des flèches sur lesquelles on écrit la forme d'énergie transférée.",
                "Exemple de la lampe de poche : la pile (réservoir d'énergie chimique) fournit de l'énergie électrique → la lampe → énergie lumineuse (utile) et énergie thermique. Exemple de la dynamo de vélo : les muscles du cycliste font tourner la roue (énergie de mouvement) → la dynamo → énergie électrique → la lampe du vélo → énergie lumineuse.",
                "Une chaîne peut comporter plusieurs convertisseurs les uns après les autres. Dans une centrale hydraulique, l'eau qui descend met en mouvement une turbine, qui entraîne un alternateur : celui-ci produit de l'énergie électrique, transportée jusqu'aux maisons où elle est convertie en lumière, en chaleur ou en mouvement.",
              ],
            },
            {
              heading: "Énergie utile et énergie perdue",
              paragraphs: [
                "Un convertisseur ne transforme jamais toute l'énergie qu'il reçoit en énergie utile. Une partie est presque toujours transformée en chaleur, qui n'est pas recherchée : on dit qu'elle est perdue, car elle se disperse dans l'air autour de l'appareil. C'est pour cela qu'un moteur, un téléphone qui se recharge ou un ordinateur chauffent.",
                "Les anciennes ampoules à incandescence chauffaient beaucoup : la plus grande partie de l'énergie électrique qu'elles recevaient devenait de la chaleur, et seulement une petite partie devenait de la lumière. Les lampes à LED chauffent beaucoup moins : pour éclairer autant, elles ont besoin de bien moins d'énergie électrique. Choisir des convertisseurs qui perdent peu d'énergie permet de faire des économies.",
              ],
              box: { label: "À retenir", text: "L'énergie ne disparaît pas : elle se transforme. Une partie de l'énergie reçue par un convertisseur est presque toujours transformée en chaleur non utile." },
            },
          ],
          keyPoints: [
            "Formes d'énergie : de mouvement, thermique, lumineuse, électrique, chimique, nucléaire.",
            "L'énergie chimique est stockée dans les aliments, les combustibles et les piles.",
            "Un convertisseur transforme une forme d'énergie en une autre (lampe, moteur, panneau solaire, éolienne, muscles).",
            "Une chaîne d'énergie relie la réserve, les convertisseurs et l'effet obtenu par des flèches.",
            "Une partie de l'énergie est presque toujours transformée en chaleur non utile, dite perdue.",
          ],
          example: {
            statement: "Une lampe de jardin possède un petit panneau solaire. Le jour, le panneau recharge une batterie ; la nuit, la batterie fait briller la lampe. Décrivez la chaîne d'énergie de cette lampe.",
            solution: [
              "Le jour, le Soleil envoie de l'énergie lumineuse au panneau solaire.",
              "Le panneau solaire est un convertisseur : il transforme l'énergie lumineuse en énergie électrique.",
              "L'énergie électrique recharge la batterie, où elle est stockée sous forme d'énergie chimique.",
              "La nuit, la batterie fournit de l'énergie électrique à la lampe.",
              "La lampe est un second convertisseur : elle transforme l'énergie électrique en énergie lumineuse (utile) et en un peu d'énergie thermique (perdue).",
              "Chaîne : Soleil → énergie lumineuse → panneau solaire → énergie électrique → batterie → énergie électrique → lampe → énergie lumineuse et thermique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque convertisseur, indiquez la forme d'énergie reçue et la forme d'énergie utile produite : a) un radiateur électrique ; b) le moteur électrique d'un ventilateur ; c) un panneau solaire photovoltaïque ; d) une éolienne ; e) les muscles d'un coureur ; f) une lampe.",
              hint: "Demandez-vous d'abord ce que l'appareil « mange » (ce qui le fait fonctionner), puis ce qu'il fait d'utile : chauffer, bouger, éclairer ou produire de l'électricité.",
              solution: [
                "a) Radiateur : il reçoit de l'énergie électrique et produit de l'énergie thermique.",
                "b) Moteur du ventilateur : il reçoit de l'énergie électrique et produit de l'énergie de mouvement (les pales tournent).",
                "c) Panneau solaire : il reçoit de l'énergie lumineuse et produit de l'énergie électrique.",
                "d) Éolienne : elle reçoit l'énergie de mouvement du vent et produit de l'énergie électrique.",
                "e) Muscles : ils reçoivent l'énergie chimique des aliments et produisent de l'énergie de mouvement.",
                "f) Lampe : elle reçoit de l'énergie électrique et produit de l'énergie lumineuse.",
              ],
            },
            {
              level: 2,
              statement: "Sami se déplace avec une trottinette électrique. Une batterie alimente un moteur électrique qui fait tourner la roue arrière. a) Quel est le réservoir d'énergie ? Sous quelle forme l'énergie y est-elle stockée ? b) Quel est le convertisseur ? c) Représentez la chaîne d'énergie de la trottinette. d) Après un long trajet, le moteur est chaud. Expliquez pourquoi.",
              hint: "Suivez l'énergie depuis l'endroit où elle est stockée jusqu'à l'effet recherché (le mouvement), puis pensez à l'énergie qui n'est pas utile.",
              solution: [
                "a) Le réservoir d'énergie est la batterie. L'énergie y est stockée sous forme d'énergie chimique.",
                "b) Le convertisseur est le moteur électrique : il transforme l'énergie électrique en énergie de mouvement.",
                "c) Chaîne : batterie → énergie électrique → moteur → énergie de mouvement (utile, la roue tourne) et énergie thermique (perdue).",
                "d) Le moteur ne transforme pas toute l'énergie électrique reçue en mouvement : une partie est transformée en chaleur. C'est pourquoi il chauffe ; cette énergie thermique est perdue pour le déplacement.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On compare deux lampes qui éclairent autant l'une que l'autre (données fictives). Chaque seconde, la lampe à incandescence reçoit 60 unités d'énergie électrique et en transforme seulement 3 en énergie lumineuse. La lampe à LED reçoit 10 unités d'énergie électrique chaque seconde pour produire la même lumière. a) Représentez la chaîne d'énergie de la lampe à incandescence. b) Combien d'unités d'énergie deviennent de la chaleur chaque seconde dans la lampe à incandescence ? c) Combien de fois moins d'énergie électrique la lampe à LED reçoit-elle ? d) Combien d'unités d'énergie électrique chaque lampe reçoit-elle si on la laisse allumée 100 secondes ? e) Quelle lampe conseilleriez-vous ? Justifiez.",
              hint: "L'énergie ne disparaît pas : l'énergie reçue par la lampe est égale à l'énergie lumineuse plus l'énergie thermique.",
              solution: [
                "a) Chaîne : énergie électrique → lampe à incandescence → énergie lumineuse (utile) et énergie thermique (perdue).",
                "b) La lampe reçoit 60 unités et en transforme 3 en lumière. Le reste devient de la chaleur : 60 - 3 = 57 unités d'énergie thermique chaque seconde.",
                "c) 60 ÷ 10 = 6 : la lampe à LED reçoit 6 fois moins d'énergie électrique pour éclairer autant.",
                "d) Lampe à incandescence : 60 × 100 = 6 000 unités. Lampe à LED : 10 × 100 = 1 000 unités.",
                "e) On conseille la lampe à LED : elle éclaire autant en recevant 6 fois moins d'énergie électrique, car elle perd beaucoup moins d'énergie sous forme de chaleur. Elle permet d'économiser l'énergie (et de l'argent sur la facture).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le chemin de l'énergie, du barrage jusqu'à la lampe de votre chambre.",
            items: [
              "L'eau est retenue en hauteur derrière le barrage.",
              "L'eau descend dans une conduite et prend de la vitesse.",
              "L'eau en mouvement fait tourner la turbine.",
              "L'alternateur, entraîné par la turbine, produit de l'énergie électrique.",
              "Les lignes électriques transportent l'électricité jusqu'aux maisons.",
              "La lampe convertit l'énergie électrique en énergie lumineuse.",
            ],
          },
          quiz: [
            { q: "Quel est le rôle d'un convertisseur d'énergie ?", options: ["Stocker l'énergie pour plus tard", "Transformer une forme d'énergie en une autre", "Fabriquer de l'énergie à partir de rien du tout", "Détruire l'énergie qui ne sert pas"], answer: 1, why: "Un convertisseur reçoit de l'énergie sous une forme et la restitue sous une autre forme : il ne la crée pas." },
            { q: "Un panneau solaire photovoltaïque convertit l'énergie lumineuse en énergie :", options: ["thermique", "chimique", "électrique", "nucléaire"], answer: 2, why: "Le panneau photovoltaïque produit du courant électrique à partir de la lumière du Soleil." },
            { q: "Sous quelle forme l'énergie est-elle stockée dans une pile ?", options: ["Énergie chimique", "Énergie lumineuse", "Énergie de mouvement"], answer: 0, why: "Une pile contient des substances chimiques : quand elle fonctionne, son énergie chimique devient de l'énergie électrique." },
            { q: "Quelle forme d'énergie un convertisseur produit-il presque toujours, sans que ce soit utile ?", options: ["L'énergie lumineuse", "L'énergie électrique", "L'énergie chimique", "L'énergie thermique"], answer: 3, why: "Une partie de l'énergie reçue est presque toujours transformée en chaleur, qui se disperse : c'est l'énergie perdue." },
            { q: "Dans une éolienne, l'énergie de mouvement du vent est convertie en énergie :", options: ["chimique", "électrique", "lumineuse"], answer: 1, why: "Les pales entraînent un alternateur qui produit de l'énergie électrique." },
          ],
          trap: "Confondre la source (ou le réservoir) et le convertisseur : dans une lampe de poche, la pile stocke l'énergie, mais c'est la lampe qui la convertit en lumière. Autre oubli fréquent : ne pas indiquer l'énergie thermique perdue.",
          method: "Pour construire une chaîne d'énergie, partez de l'effet recherché (éclairer, chauffer, faire bouger) et remontez jusqu'à la réserve. Dessinez ensuite les cases (réservoir, convertisseurs) et écrivez sur chaque flèche la forme d'énergie transférée, sans oublier la chaleur perdue.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'energies-renouvelables',
          title: 'Énergies renouvelables et non renouvelables',
          minutes: 25,
          objectives: [
            "Distinguer les sources d'énergie renouvelables et non renouvelables.",
            "Citer des avantages et des inconvénients de différentes sources d'énergie.",
            "Identifier des gestes et des choix qui permettent d'économiser l'énergie.",
          ],
          course: [
            {
              heading: "Renouvelable ou non renouvelable ?",
              paragraphs: [
                "Une source d'énergie est renouvelable quand elle se reconstitue naturellement et rapidement, à l'échelle d'une vie humaine : le Soleil brille chaque jour, le vent souffle à nouveau, la pluie remplit les rivières. On peut l'utiliser sans l'épuiser.",
                "Une source d'énergie est non renouvelable quand ses réserves se sont formées en un temps extrêmement long (des millions d'années) et que nous les utilisons beaucoup plus vite qu'elles ne se forment. Ses réserves finiront donc par s'épuiser. C'est le cas du pétrole, du charbon, du gaz naturel et de l'uranium.",
              ],
              box: { label: "Définition", text: "Renouvelables : Soleil, vent, eau en mouvement (hydraulique), chaleur de la Terre (géothermie), biomasse (bois, déchets végétaux). Non renouvelables : pétrole, charbon, gaz naturel (combustibles fossiles) et uranium." },
            },
            {
              heading: "Les sources non renouvelables",
              paragraphs: [
                "Les combustibles fossiles (pétrole, charbon, gaz naturel) fournissent beaucoup d'énergie et sont faciles à transporter et à stocker. Mais quand on les brûle, ils rejettent dans l'air du dioxyde de carbone, un gaz à effet de serre qui contribue au réchauffement climatique. Leur combustion produit aussi des fumées qui polluent l'air des villes.",
                "L'uranium est utilisé dans les centrales nucléaires, qui produisent la plus grande partie de l'électricité en France. Une centrale nucléaire ne rejette presque pas de dioxyde de carbone quand elle fonctionne, mais elle produit des déchets radioactifs, dangereux pendant très longtemps, qu'il faut stocker avec beaucoup de précautions. Et l'uranium est une ressource limitée : l'énergie nucléaire n'est pas renouvelable.",
              ],
            },
            {
              heading: "Les sources renouvelables",
              paragraphs: [
                "L'énergie solaire est captée par des panneaux photovoltaïques, qui produisent de l'électricité, ou par des capteurs thermiques, qui chauffent de l'eau. L'énergie éolienne est captée par les éoliennes, sur terre ou en mer. L'énergie hydraulique est celle de l'eau en mouvement : barrages sur les rivières, usines marémotrices qui utilisent les marées. La géothermie utilise la chaleur du sous-sol. La biomasse regroupe le bois et les déchets végétaux ou agricoles, que l'on brûle ou que l'on transforme en gaz.",
                "Le bois n'est renouvelable que si l'on replante autant d'arbres que l'on en coupe : une forêt détruite sans être replantée ne se reconstitue pas.",
                "Les énergies renouvelables ne s'épuisent pas et rejettent peu de gaz à effet de serre, mais elles ont aussi des inconvénients. Le Soleil ne brille pas la nuit et le vent ne souffle pas tout le temps : la production dépend du temps qu'il fait. Les éoliennes et les panneaux occupent de la place et modifient les paysages, les barrages noient des vallées. Il faut aussi des matériaux et de l'énergie pour les fabriquer.",
              ],
              box: { label: "À retenir", text: "Aucune source d'énergie n'est parfaite : on compare leurs avantages et leurs inconvénients (épuisement des réserves, pollution, gaz à effet de serre, déchets, dépendance au temps qu'il fait, place occupée)." },
            },
            {
              heading: "Économiser l'énergie",
              paragraphs: [
                "L'énergie la moins polluante est celle que l'on ne consomme pas. Chacun peut agir : éteindre la lumière en quittant une pièce, ne pas laisser les appareils en veille, baisser un peu le chauffage, prendre une douche plutôt qu'un bain, marcher, prendre le vélo ou les transports en commun pour les petits trajets.",
                "On peut aussi faire des choix techniques : isoler les murs et les toits pour garder la chaleur, choisir des lampes à LED et des appareils qui consomment peu. Ces économies réduisent à la fois la pollution, la facture d'énergie et l'épuisement des ressources.",
              ],
            },
          ],
          keyPoints: [
            "Renouvelable : se reconstitue rapidement (Soleil, vent, eau, géothermie, biomasse).",
            "Non renouvelable : réserves formées en millions d'années, qui s'épuisent (pétrole, charbon, gaz naturel, uranium).",
            "Brûler des combustibles fossiles rejette du dioxyde de carbone, qui contribue au réchauffement climatique.",
            "Le nucléaire rejette peu de dioxyde de carbone mais n'est pas renouvelable et produit des déchets radioactifs.",
            "Les énergies renouvelables dépendent souvent du temps qu'il fait et occupent de la place.",
            "Économiser l'énergie : éteindre, ne pas laisser en veille, isoler, se déplacer à pied ou à vélo.",
          ],
          example: {
            statement: "Classez ces sources d'énergie en renouvelables et non renouvelables, en justifiant : le gaz naturel, le vent, l'uranium, l'eau d'une rivière, le charbon, le Soleil.",
            solution: [
              "Une source est renouvelable si elle se reconstitue rapidement, non renouvelable si ses réserves ont mis des millions d'années à se former et s'épuisent.",
              "Le vent souffle à nouveau, l'eau de la rivière est renouvelée par la pluie, le Soleil brille chaque jour : ce sont des sources renouvelables.",
              "Le gaz naturel et le charbon sont des combustibles fossiles formés en millions d'années : ils sont non renouvelables.",
              "L'uranium est extrait de roches dont les réserves sont limitées : il est non renouvelable.",
              "Réponse : renouvelables : le vent, l'eau d'une rivière, le Soleil ; non renouvelables : le gaz naturel, l'uranium, le charbon.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Recopiez le tableau à deux colonnes « renouvelable » et « non renouvelable » et placez-y : le pétrole, la géothermie, le bois d'une forêt replantée, le charbon, les marées, le gaz naturel, le Soleil, l'uranium.",
              hint: "Demandez-vous si la source se reconstitue rapidement ou si ses réserves vont s'épuiser.",
              solution: [
                "Renouvelable : la géothermie, le bois d'une forêt replantée, les marées, le Soleil.",
                "Non renouvelable : le pétrole, le charbon, le gaz naturel, l'uranium.",
                "Le bois est renouvelable ici parce que la forêt est replantée : sans replantation, il ne le serait pas.",
              ],
            },
            {
              level: 2,
              statement: "Comparez une centrale électrique au charbon et un champ de panneaux solaires. Pour chacun, donnez : a) la source d'énergie et son caractère renouvelable ou non ; b) un avantage ; c) un inconvénient. d) Pourquoi ne peut-on pas compter uniquement sur des panneaux solaires pour éclairer les rues la nuit, sans aucun stockage ?",
              hint: "Pensez aux réserves, aux rejets dans l'air, et à ce qui se passe quand le temps change ou quand la nuit tombe.",
              solution: [
                "a) Centrale au charbon : source charbon, non renouvelable. Panneaux solaires : source Soleil, renouvelable.",
                "b) Avantage de la centrale au charbon : elle peut produire de l'électricité jour et nuit, quand on en a besoin. Avantage des panneaux solaires : le Soleil ne s'épuise pas, et ils ne rejettent pas de dioxyde de carbone en fonctionnant.",
                "c) Inconvénient de la centrale au charbon : elle rejette beaucoup de dioxyde de carbone, qui contribue au réchauffement climatique, et des fumées polluantes ; ses réserves s'épuisent. Inconvénient des panneaux solaires : ils produisent peu par temps couvert et rien la nuit ; ils occupent de la place.",
                "d) La nuit, il n'y a pas de lumière du Soleil : les panneaux ne produisent rien. Il faut donc stocker pendant la journée l'énergie produite (dans des batteries) ou utiliser une autre source la nuit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un village de montagne veut produire une partie de son énergie lui-même (situation fictive). Il est très ensoleillé, traversé par un torrent au courant fort toute l'année, entouré d'une grande forêt exploitée et replantée, mais il y a rarement du vent. a) Quelles sources d'énergie renouvelables le village peut-il utiliser ? Justifiez. b) Laquelle n'est pas adaptée ? Pourquoi ? c) Laquelle peut produire de l'électricité la nuit ? d) Proposez deux gestes que les habitants peuvent faire pour avoir besoin de moins d'énergie.",
              hint: "Associez chaque caractéristique du village à une source d'énergie. Pour la nuit, éliminez la source qui a besoin de lumière.",
              solution: [
                "a) Le Soleil, grâce au fort ensoleillement : panneaux photovoltaïques pour l'électricité, capteurs thermiques pour l'eau chaude. L'eau du torrent, qui coule fort toute l'année : une petite centrale hydraulique. Le bois de la forêt replantée (biomasse) : chaufferie au bois pour chauffer les maisons.",
                "b) L'énergie éolienne n'est pas adaptée : il y a rarement du vent, les éoliennes produiraient très peu.",
                "c) La petite centrale hydraulique : le torrent coule jour et nuit, alors que les panneaux solaires ne produisent rien la nuit.",
                "d) Par exemple : isoler les maisons pour garder la chaleur, éteindre les lumières inutiles, ne pas laisser les appareils en veille, choisir des lampes à LED.",
                "Conclusion : le village peut combiner plusieurs sources renouvelables adaptées à son territoire, et réduire sa consommation.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Méfiez-vous des idées reçues sur l'énergie.",
            statements: [
              { text: "Le Soleil est une source d'énergie renouvelable.", true: true, why: "Le Soleil brille chaque jour : il ne s'épuisera pas à l'échelle de l'humanité." },
              { text: "L'énergie nucléaire est une énergie renouvelable.", true: false, why: "Elle utilise l'uranium, une ressource extraite du sous-sol dont les réserves sont limitées." },
              { text: "Le pétrole se reforme en quelques années dans le sous-sol.", true: false, why: "Le pétrole met des millions d'années à se former : c'est pour cela qu'il est non renouvelable." },
              { text: "Le bois est une énergie renouvelable si l'on replante les arbres coupés.", true: true, why: "Une forêt gérée et replantée se reconstitue en plusieurs dizaines d'années." },
              { text: "Une éolienne produit de l'électricité même quand il n'y a pas de vent.", true: false, why: "Sans vent, les pales ne tournent pas et l'éolienne ne produit rien." },
              { text: "Brûler du charbon rejette du dioxyde de carbone dans l'air.", true: true, why: "La combustion des combustibles fossiles rejette du dioxyde de carbone, un gaz à effet de serre." },
              { text: "Les énergies renouvelables n'ont aucun inconvénient.", true: false, why: "Elles dépendent souvent du temps qu'il fait, occupent de la place et modifient les paysages." },
            ],
          },
          quiz: [
            { q: "Laquelle de ces sources d'énergie est renouvelable ?", options: ["Le gaz naturel", "L'uranium", "Le vent", "Le charbon"], answer: 2, why: "Le vent se reconstitue sans cesse ; les trois autres sources ont des réserves limitées." },
            { q: "Pourquoi le pétrole est-il une énergie non renouvelable ?", options: ["Parce qu'il est liquide et très difficile à transporter", "Parce qu'il met des millions d'années à se former", "Parce qu'on ne sait pas encore l'extraire du sol"], answer: 1, why: "Nous utilisons le pétrole beaucoup plus vite qu'il ne se forme : ses réserves s'épuisent." },
            { q: "Quel gaz, rejeté quand on brûle des combustibles fossiles, contribue au réchauffement climatique ?", options: ["Le dioxyde de carbone", "Le dioxygène de l'air", "Le diazote de l'air"], answer: 0, why: "Le dioxyde de carbone est un gaz à effet de serre : il retient la chaleur autour de la Terre." },
            { q: "Quel inconvénient ont en commun l'énergie solaire et l'énergie éolienne ?", options: ["Elles rejettent beaucoup de fumées noires", "Elles s'épuiseront dans quelques années", "Elles dépendent du temps qu'il fait", "Elles produisent des déchets radioactifs"], answer: 2, why: "Les panneaux ne produisent pas la nuit et les éoliennes s'arrêtent sans vent : leur production varie avec la météo." },
            { q: "L'uranium utilisé dans les centrales nucléaires est une source d'énergie :", options: ["renouvelable, comme le vent", "non renouvelable", "fossile, comme le charbon"], answer: 1, why: "L'uranium est extrait de roches dont les réserves sont limitées ; ce n'est pas un combustible fossile, car il ne vient pas de restes d'êtres vivants." },
          ],
          trap: "Ranger l'énergie nucléaire parmi les énergies renouvelables parce qu'elle rejette peu de dioxyde de carbone : rejeter peu de gaz à effet de serre et être renouvelable sont deux choses différentes.",
          method: "Pour classer une source d'énergie, posez-vous une seule question : « est-ce qu'elle se reconstitue rapidement, ou est-ce que ses réserves vont s'épuiser ? ». Pour comparer des sources, faites un tableau avec une colonne avantages et une colonne inconvénients.",
        },
      ],
    },

    /* ================================================================== */
    /* SIGNAL ET INFORMATION                                                */
    /* ================================================================== */
    {
      id: 'signal-information',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'types-signaux',
          title: 'Signaux sonores, lumineux et radio',
          minutes: 25,
          objectives: [
            "Identifier un signal et l'information qu'il transporte dans une situation de la vie courante.",
            "Distinguer des signaux sonores, lumineux et radio.",
            "Repérer l'émetteur et le récepteur d'un signal.",
          ],
          course: [
            {
              heading: "Signal et information : deux mots à ne pas confondre",
              paragraphs: [
                "Une information est un message que l'on veut faire connaître : « arrêtez-vous », « le cours est terminé », « attention, danger », « la batterie est presque vide ». Pour qu'une information voyage d'un endroit à un autre, il faut un support : c'est le signal.",
                "Un signal est un phénomène physique, comme un son, une lumière ou une onde radio, qui transporte une information. Il est produit par un émetteur et capté par un récepteur. Au feu tricolore, la lumière rouge est le signal ; l'information est « les véhicules doivent s'arrêter » ; l'émetteur est le feu, et le récepteur est l'œil du conducteur.",
              ],
              box: { label: "Définition", text: "Information : le message transmis. Signal : le phénomène physique (son, lumière, onde radio) qui transporte l'information. Émetteur : ce qui produit le signal. Récepteur : ce qui capte le signal." },
            },
            {
              heading: "Les signaux sonores",
              paragraphs: [
                "Un signal sonore est un son produit volontairement pour transmettre une information. Exemples : la sonnerie du collège (« le cours commence »), le sifflet de l'arbitre (« faute » ou « fin du match »), la sirène des pompiers (« laissez passer un véhicule d'urgence »), l'alarme incendie (« évacuez le bâtiment »), le klaxon d'une voiture.",
                "Le son est produit par un objet qui vibre (la membrane d'un haut-parleur, nos cordes vocales). Il se propage dans l'air tout autour de l'émetteur et peut contourner les obstacles : on entend une sirène même sans la voir. C'est pourquoi les signaux sonores sont utiles quand on ne voit pas l'émetteur, la nuit ou dans le brouillard. Le récepteur est l'oreille, ou un microphone.",
              ],
            },
            {
              heading: "Les signaux lumineux",
              paragraphs: [
                "Un signal lumineux utilise la lumière. Exemples : les feux de circulation, le clignotant d'une voiture (« je vais tourner »), le gyrophare bleu des secours, la lumière d'un phare qui signale une côte dangereuse aux bateaux, le petit voyant d'un appareil (allumé : l'appareil est en marche ; rouge : la batterie est faible).",
                "La lumière se propage en ligne droite : le récepteur doit pouvoir « voir » l'émetteur, sans obstacle opaque entre les deux. Le récepteur est l'œil, ou un capteur de lumière. Certaines lumières sont invisibles pour nos yeux : la télécommande d'un téléviseur envoie une lumière invisible, appelée infrarouge, que seul le capteur du téléviseur reçoit.",
              ],
            },
            {
              heading: "Les signaux radio",
              paragraphs: [
                "Les signaux radio sont des ondes que nos sens ne perçoivent pas : on ne peut ni les voir ni les entendre. Ils sont émis et reçus par des antennes. Ils traversent l'air, l'espace et même beaucoup de murs, et peuvent aller très loin.",
                "On les utilise partout : la radio et la télévision, les téléphones portables qui communiquent avec les antennes relais, le Wi-Fi qui relie une tablette à la box internet, le Bluetooth d'un casque sans fil, les talkies-walkies, le GPS, la télécommande d'un portail. Pour les capter, il faut toujours un appareil récepteur muni d'une antenne.",
              ],
              box: { label: "Repère", text: "La lumière et les ondes radio vont à environ 300 000 km par seconde. Le son va beaucoup moins vite : environ 340 m par seconde dans l'air. C'est pourquoi, pendant un orage, on voit l'éclair avant d'entendre le tonnerre." },
            },
          ],
          keyPoints: [
            "L'information est le message ; le signal est le phénomène physique qui le transporte.",
            "Un émetteur produit le signal, un récepteur le capte.",
            "Signal sonore : un son (sirène, sifflet, sonnerie), capté par l'oreille ou un microphone ; il contourne les obstacles.",
            "Signal lumineux : une lumière (feu, phare, voyant), captée par l'œil ou un capteur ; il se propage en ligne droite.",
            "Signal radio : une onde invisible et inaudible, émise et captée par des antennes (téléphone, Wi-Fi, radio).",
            "La lumière et les ondes radio vont beaucoup plus vite que le son.",
          ],
          example: {
            statement: "À 10 h, la sonnerie du collège retentit et les élèves sortent en récréation. Identifiez l'information, le signal et son type, l'émetteur et le récepteur.",
            solution: [
              "L'information est le message transmis : « la récréation commence ».",
              "Le signal est le son de la sonnerie : c'est un signal sonore.",
              "L'émetteur est la sonnerie, qui produit le son.",
              "Les récepteurs sont les oreilles des élèves et des professeurs, qui captent le son.",
              "Réponse : information « récréation » ; signal sonore ; émetteur : la sonnerie ; récepteur : les oreilles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, donnez le type de signal (sonore, lumineux ou radio) et l'information transmise : a) un feu piéton passe au vert ; b) l'arbitre siffle la fin d'un match de football ; c) le téléphone de Lina reçoit un message écrit envoyé par son frère ; d) un phare éclaire la mer pendant la nuit ; e) la sirène des pompiers retentit dans la rue ; f) le voyant rouge d'une tablette s'allume.",
              hint: "Demandez-vous par quel sens (ou par quel appareil) le signal est capté : l'oreille, l'œil, ou une antenne.",
              solution: [
                "a) Signal lumineux ; information : « les piétons peuvent traverser ».",
                "b) Signal sonore ; information : « le match est terminé ».",
                "c) Signal radio (entre le téléphone et l'antenne relais) ; information : le contenu du message.",
                "d) Signal lumineux ; information : « attention, une côte dangereuse est proche ».",
                "e) Signal sonore ; information : « laissez passer un véhicule d'urgence ».",
                "f) Signal lumineux ; information : « la batterie est presque vide » (ou « l'appareil est en charge », selon le code du fabricant).",
              ],
            },
            {
              level: 2,
              statement: "Malo veut changer de chaîne avec la télécommande du téléviseur. Sa sœur a posé un gros livre devant le capteur du téléviseur : la télécommande ne fonctionne plus. Pourtant, quand Malo téléphone à un ami depuis sa chambre, porte fermée, la communication passe. a) Quels sont l'émetteur et le récepteur du signal de la télécommande ? b) De quel type de signal s'agit-il ? c) Expliquez pourquoi le livre empêche la télécommande de fonctionner. d) Quel type de signal le téléphone utilise-t-il ? Pourquoi passe-t-il à travers la porte fermée ?",
              hint: "Rappelez-vous comment se propage la lumière, et ce que peuvent traverser les ondes radio.",
              solution: [
                "a) L'émetteur est la télécommande ; le récepteur est le capteur placé sur le téléviseur.",
                "b) C'est un signal lumineux : une lumière infrarouge, invisible pour nos yeux.",
                "c) La lumière se propage en ligne droite et ne traverse pas les objets opaques. Le livre arrête le signal lumineux, qui n'atteint plus le capteur : l'information « change de chaîne » n'est pas reçue.",
                "d) Le téléphone portable utilise un signal radio. Les ondes radio traversent beaucoup de matériaux, comme une porte en bois ou des murs, et arrivent jusqu'à l'antenne relais.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pendant un orage, Zoé voit un éclair, puis entend le tonnerre 6 secondes plus tard. On considère que la lumière de l'éclair arrive presque instantanément, et que le son parcourt environ 340 m chaque seconde. a) Pourquoi Zoé voit-elle l'éclair avant d'entendre le tonnerre, alors qu'ils se produisent au même moment ? b) Calculez à quelle distance environ de Zoé l'éclair est tombé. c) On dit souvent qu'il faut compter environ 3 secondes par kilomètre. Vérifiez cette règle. d) Un peu plus tard, Zoé compte 15 secondes entre un éclair et le tonnerre. À quelle distance est cet éclair ? L'orage s'approche-t-il ou s'éloigne-t-il ?",
              hint: "Le son parcourt 340 m en 1 seconde : combien de mètres parcourt-il en 6 secondes ? Pour la question d, utilisez la règle des 3 secondes.",
              solution: [
                "a) La lumière va beaucoup plus vite que le son (environ 300 000 km par seconde contre environ 340 m par seconde). La lumière de l'éclair arrive presque tout de suite, alors que le son du tonnerre met plusieurs secondes à parcourir la même distance.",
                "b) En 6 secondes, le son parcourt 6 × 340 = 2 040 m. L'éclair est tombé à environ 2 040 m, soit environ 2 km.",
                "c) En 3 secondes, le son parcourt 3 × 340 = 1 020 m, soit environ 1 km. La règle est donc correcte : 3 secondes correspondent à environ 1 km.",
                "d) 15 ÷ 3 = 5 : l'éclair est à environ 5 km (calcul précis : 15 × 340 = 5 100 m).",
                "L'éclair est plus loin qu'avant (5 km au lieu de 2 km) : l'orage s'éloigne.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque signal à l'information qu'il transmet.",
            pairs: [
              { left: "Le feu tricolore passe au rouge", right: "Les véhicules doivent s'arrêter" },
              { left: "Le sifflet final de l'arbitre", right: "Le match est terminé" },
              { left: "La sirène des pompiers", right: "Laissez passer un véhicule d'urgence" },
              { left: "Le voyant rouge de batterie", right: "Il faut recharger l'appareil" },
              { left: "Le clignotant droit d'une voiture", right: "La voiture va tourner à droite" },
              { left: "La lumière d'un phare dans la nuit", right: "Une côte dangereuse est proche" },
            ],
          },
          quiz: [
            { q: "Au feu tricolore, quel est le signal ?", options: ["L'obligation de s'arrêter", "La lumière rouge", "Le conducteur", "Le poteau du feu"], answer: 1, why: "Le signal est le phénomène physique, ici la lumière rouge ; l'obligation de s'arrêter est l'information." },
            { q: "Quel type de signal un téléphone portable utilise-t-il pour communiquer avec l'antenne relais ?", options: ["Un signal sonore", "Un signal lumineux", "Un signal radio"], answer: 2, why: "Le téléphone émet et reçoit des ondes radio grâce à son antenne." },
            { q: "Pendant un orage, pourquoi voit-on l'éclair avant d'entendre le tonnerre ?", options: ["La lumière va bien plus vite que le son", "Le tonnerre se produit après l'éclair", "Les yeux sont plus sensibles que les oreilles"], answer: 0, why: "L'éclair et le tonnerre se produisent en même temps, mais la lumière arrive presque instantanément alors que le son met plusieurs secondes." },
            { q: "Quel est le récepteur du signal envoyé par la télécommande d'un téléviseur ?", options: ["La télécommande elle-même", "Le capteur du téléviseur", "La personne qui appuie", "La prise électrique"], answer: 1, why: "La télécommande émet une lumière infrarouge, captée par le capteur placé sur le téléviseur." },
            { q: "Qu'est-ce qu'une information ?", options: ["L'appareil qui produit le signal", "Le son ou la lumière qui se propage", "L'organe qui perçoit le signal", "Le message à faire connaître"], answer: 3, why: "L'information est le message ; le son ou la lumière qui le transporte est le signal." },
          ],
          trap: "Confondre le signal et l'information : au feu tricolore, le signal est la lumière rouge, et l'information est « il faut s'arrêter ». Le signal est ce qui voyage, l'information est ce que l'on comprend.",
          method: "Face à une situation, répondez toujours à quatre questions dans l'ordre : quel est le message (information) ? Qu'est-ce qui voyage (signal) ? Qui le produit (émetteur) ? Qui le capte (récepteur) ? Le type de signal se trouve en se demandant si on l'entend, si on le voit, ou s'il faut une antenne.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'transmettre-information',
          title: 'Transmettre une information avec un signal',
          minutes: 30,
          objectives: [
            "Décrire la chaîne de transmission d'une information : émetteur, signal, récepteur.",
            "Utiliser un code simple pour coder et décoder une information.",
            "Expliquer pourquoi une information peut être mal reçue et proposer des solutions.",
          ],
          course: [
            {
              heading: "La chaîne de transmission d'une information",
              paragraphs: [
                "Transmettre une information, c'est la faire passer d'une personne (ou d'un appareil) à une autre. Cela se fait toujours en plusieurs étapes, qui forment la chaîne de transmission : l'émetteur transforme l'information en signal ; le signal se propage (dans l'air, dans un câble, dans l'espace) ; le récepteur capte le signal ; l'information est retrouvée et comprise.",
                "Exemple d'un appel téléphonique : Léo parle dans son téléphone. Le microphone transforme le son de sa voix en signal électrique ; le téléphone l'envoie sous forme de signal radio vers une antenne relais ; le réseau le transmet jusqu'au téléphone de Jade ; le haut-parleur de celui-ci le transforme à nouveau en son, que Jade entend. Un même message peut donc changer plusieurs fois de type de signal en chemin.",
              ],
              box: { label: "Définition", text: "Chaîne de transmission : information → émetteur → signal → récepteur → information reçue. L'émetteur produit le signal, le récepteur le capte." },
            },
            {
              heading: "Coder et décoder",
              paragraphs: [
                "Pour qu'un signal transporte une information, l'émetteur et le récepteur doivent être d'accord sur sa signification : ils utilisent un même code. Coder, c'est transformer l'information en signal selon ce code ; décoder, c'est retrouver l'information à partir du signal. Le code de la route en est un exemple : tout le monde sait que le rouge signifie « arrêtez-vous ».",
                "Le code Morse, mis au point au XIXe siècle par l'Américain Samuel Morse et ses collaborateurs, code chaque lettre par une suite de signaux courts et de signaux longs (on les écrit avec des points et des traits). Il peut être transmis par le son, par la lumière ou par un courant électrique. Par exemple, E s'écrit « court », T « long », S « court court court » et O « long long long ». Le message de détresse SOS s'écrit donc : court court court, long long long, court court court.",
                "Les ordinateurs, eux, codent toutes les informations (textes, images, sons) avec seulement deux signaux différents, notés 0 et 1, un peu comme le Morse utilise deux signaux, court et long.",
              ],
              box: { label: "Règle", text: "Pour qu'une information soit comprise, l'émetteur et le récepteur doivent connaître le même code. Un signal reçu sans connaître son code ne transmet aucune information." },
            },
            {
              heading: "Transmettre de loin : un peu d'histoire",
              paragraphs: [
                "Pendant longtemps, pour envoyer un message loin, il fallait un messager à pied ou à cheval. À la fin du XVIIIe siècle, en France, Claude Chappe met au point le télégraphe optique : des tours placées en hauteur, à quelques kilomètres les unes des autres, portent des bras articulés dont les positions forment un code. Chaque tour observe la précédente à la longue-vue et répète le signal. La première ligne, entre Paris et Lille, fonctionne en 1794.",
                "Au XIXe siècle, le télégraphe électrique transmet des messages en code Morse par des fils. Au XXe siècle, la radio permet de transmettre sans fil. Aujourd'hui, les informations voyagent par ondes radio (téléphones portables, satellites) et par la lumière qui circule dans des fibres optiques, de fins fils de verre posés sous terre et au fond des océans.",
              ],
            },
            {
              heading: "Quand l'information passe mal",
              paragraphs: [
                "Une information peut arriver déformée ou ne pas arriver du tout. Le signal peut être arrêté par un obstacle (un mur arrête la lumière), s'affaiblir avec la distance (un cri ne s'entend plus au-delà d'une certaine distance), ou être brouillé par d'autres signaux (dans une cantine bruyante, on comprend mal son voisin). Le télégraphe de Chappe ne fonctionnait ni la nuit ni par temps de brouillard.",
                "Pour transmettre une information de façon fiable, on peut renforcer le signal (parler plus fort, une lumière plus puissante), placer des relais qui répètent le signal (antennes relais, tours de Chappe), répéter le message, ou demander au récepteur de confirmer qu'il a bien reçu (« bien reçu » au talkie-walkie).",
              ],
              box: { label: "À retenir", text: "Un signal peut être arrêté, affaibli ou brouillé. Relais, répétition et confirmation de réception rendent la transmission plus fiable." },
            },
          ],
          keyPoints: [
            "Chaîne de transmission : information → émetteur → signal → récepteur → information reçue.",
            "Un message peut changer de type de signal en chemin (son, signal électrique, onde radio, puis à nouveau son).",
            "Coder : transformer l'information en signal ; décoder : retrouver l'information. Émetteur et récepteur doivent connaître le même code.",
            "En Morse, chaque lettre est codée par des signaux courts et longs ; SOS = court court court, long long long, court court court.",
            "Un signal peut être arrêté par un obstacle, affaibli par la distance ou brouillé.",
            "Relais, répétition et confirmation rendent une transmission plus fiable.",
          ],
          example: {
            statement: "Pendant un camp, Emma et Noé inventent un code avec une lampe de poche : un éclat court signifie « oui », deux éclats courts « non », un éclat long « viens me voir ». Le soir, Noé voit un éclat long venant de la tente d'Emma. Décrivez la chaîne de transmission.",
            solution: [
              "L'information à transmettre est « viens me voir ».",
              "Emma la code selon le code convenu : un éclat long. Son émetteur est la lampe de poche.",
              "Le signal est lumineux : il se propage en ligne droite de la lampe jusqu'à Noé.",
              "Le récepteur est l'œil de Noé, qui capte l'éclat de lumière.",
              "Noé décode le signal grâce au code qu'il connaît : un éclat long signifie « viens me voir ».",
              "Chaîne : « viens me voir » → lampe (émetteur) → éclat long (signal lumineux) → œil de Noé (récepteur) → « viens me voir » (information comprise).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, identifiez l'information, l'émetteur, le signal (et son type) et le récepteur : a) l'arbitre siffle une faute ; b) la box internet envoie une vidéo à une tablette par Wi-Fi ; c) un automobiliste met son clignotant gauche.",
              hint: "L'émetteur produit le signal, le récepteur le capte. Le type du signal se trouve en vous demandant si on l'entend, si on le voit, ou s'il faut une antenne.",
              solution: [
                "a) Information : « il y a faute ». Émetteur : le sifflet de l'arbitre. Signal : le son du sifflet (signal sonore). Récepteur : les oreilles des joueurs.",
                "b) Information : la vidéo. Émetteur : la box internet. Signal : des ondes radio (Wi-Fi). Récepteur : l'antenne de la tablette.",
                "c) Information : « je vais tourner à gauche ». Émetteur : le clignotant de la voiture. Signal : une lumière orange qui clignote (signal lumineux). Récepteur : les yeux des autres conducteurs et des piétons.",
              ],
            },
            {
              level: 2,
              statement: "Voici une partie du code Morse : E = court ; I = court court ; S = court court court ; T = long ; M = long long ; O = long long long ; A = court long ; N = long court. a) Décodez le mot suivant (les barres séparent les lettres) : long long / long long long / long. b) Codez le mot SON. c) Un élève reçoit « court court court » sans aucune pause entre les signaux. Montrez qu'il ne peut pas savoir avec certitude quel message a été envoyé. Que faut-il ajouter au code ?",
              hint: "Pour la question c, cherchez toutes les façons de découper trois signaux courts en lettres du tableau.",
              solution: [
                "a) long long = M ; long long long = O ; long = T. Le mot est MOT.",
                "b) S = court court court ; O = long long long ; N = long court. SON s'écrit : court court court / long long long / long court.",
                "c) « court court court » peut se découper de plusieurs façons : S (court court court), ou E puis I (court / court court), ou I puis E (court court / court), ou E, E, E. Le message peut donc être S, EI, IE ou EEE.",
                "Il faut ajouter au code une pause (un silence plus long) entre deux lettres, pour savoir où une lettre se termine. C'est ce que fait le vrai code Morse.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une ligne de télégraphe optique relie deux villes séparées par 200 km, avec une tour tous les 10 km, y compris une tour dans chacune des deux villes (données fictives). Chaque tour met 20 secondes pour observer le signal de la tour précédente et le reproduire. a) Combien y a-t-il de tours en tout ? b) Combien de fois le signal est-il transmis d'une tour à la suivante ? c) Combien de temps faut-il pour qu'un signal aille d'une ville à l'autre ? d) Un cavalier va à 20 km/h en moyenne : combien de temps lui faut-il pour porter le même message ? e) Citez deux situations où ce télégraphe ne peut pas fonctionner. Pourquoi les moyens actuels n'ont-ils pas ce problème ?",
              hint: "Faites un petit schéma : une tour à 0 km, une à 10 km, une à 20 km... jusqu'à 200 km. Comptez les tours, puis les intervalles entre deux tours.",
              solution: [
                "a) Il y a une tour à 0 km, 10 km, 20 km... jusqu'à 200 km. Cela fait 200 ÷ 10 = 20 intervalles, donc 20 + 1 = 21 tours.",
                "b) Le signal passe d'une tour à la suivante une fois par intervalle : 20 transmissions.",
                "c) 20 × 20 = 400 secondes. Or 400 s = 6 × 60 s + 40 s : il faut 6 minutes et 40 secondes.",
                "d) À 20 km/h, le cavalier parcourt 20 km en 1 h. Pour 200 km, il lui faut 200 ÷ 20 = 10 heures, sans compter les pauses. Le télégraphe est environ 90 fois plus rapide (10 h = 36 000 s, et 36 000 ÷ 400 = 90).",
                "e) La nuit et par temps de brouillard (ou de forte pluie), on ne voit pas les bras de la tour précédente : le signal lumineux ne parvient pas au récepteur.",
                "Aujourd'hui, les signaux électriques circulent dans des câbles, la lumière circule à l'intérieur des fibres optiques, et les ondes radio traversent le brouillard : la transmission ne dépend plus de la visibilité.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le trajet d'une phrase, de Léo jusqu'à Jade, pendant un appel téléphonique.",
            items: [
              "Léo prononce une phrase dans son téléphone.",
              "Le microphone transforme le son de sa voix en signal électrique.",
              "Le téléphone de Léo émet un signal radio vers une antenne relais.",
              "Le réseau achemine le signal jusqu'au téléphone de Jade.",
              "Le haut-parleur du téléphone de Jade transforme le signal en son.",
              "Jade entend la phrase et la comprend.",
            ],
          },
          quiz: [
            { q: "Dans une chaîne de transmission, quel élément produit le signal ?", options: ["Le récepteur", "L'émetteur", "L'information"], answer: 1, why: "L'émetteur transforme l'information en signal ; le récepteur capte ce signal." },
            { q: "Pourquoi l'émetteur et le récepteur doivent-ils utiliser le même code ?", options: ["Pour que le signal aille beaucoup plus vite", "Pour économiser de l'énergie", "Pour que le récepteur comprenne le message", "Pour que le signal soit plus fort et plus net"], answer: 2, why: "Sans le même code, le récepteur capte bien le signal mais ne peut pas retrouver l'information." },
            { q: "En code Morse, le message SOS s'écrit :", options: ["trois courts, trois longs, trois courts", "trois longs, trois courts, trois longs", "un court, un long, un court"], answer: 0, why: "S = court court court et O = long long long : SOS donne trois courts, trois longs, trois courts." },
            { q: "Dans une cour très bruyante, un élève n'entend pas son camarade qui l'appelle. Pourquoi ?", options: ["Le camarade n'a pas émis de signal du tout", "Le son ne se propage pas dans une cour", "L'oreille n'est pas un récepteur", "Le signal est brouillé par le bruit"], answer: 3, why: "Le signal sonore est bien émis, mais d'autres sons le brouillent : le récepteur ne le distingue plus." },
            { q: "Le télégraphe de Chappe, à la fin du XVIIIe siècle, transmettait des messages grâce à :", options: ["des ondes radio", "des bras articulés visibles de loin", "des câbles électriques enterrés sous les routes", "des pigeons voyageurs"], answer: 1, why: "Les positions des bras articulés des tours formaient un code, observé de tour en tour à la longue-vue." },
          ],
          trap: "Penser qu'il suffit que le signal arrive pour que l'information passe : si le récepteur ne connaît pas le code, ou si le signal est brouillé, l'information n'est pas comprise.",
          method: "Pour décrire une transmission, dessinez une chaîne de cases reliées par des flèches : information, émetteur, signal, récepteur, information reçue. Si le signal change de type en chemin (son, électrique, radio), ajoutez une case pour chaque appareil qui le transforme.",
        },
      ],
    },

    /* ================================================================== */
    /* SE NOURRIR : D'OÙ VIENT LA MATIÈRE DES ÊTRES VIVANTS ?               */
    /* ================================================================== */
    {
      id: 'nutrition',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'besoins-vegetaux',
          title: 'Les besoins des végétaux chlorophylliens',
          minutes: 30,
          objectives: [
            "Identifier les besoins des végétaux chlorophylliens : lumière, eau, sels minéraux et dioxyde de carbone.",
            "Expliquer qu'une plante verte fabrique sa propre matière à partir de matière minérale.",
            "Exploiter les résultats d'une expérience en la comparant à un témoin.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un végétal chlorophyllien ?",
              paragraphs: [
                "Les végétaux chlorophylliens sont les plantes et les algues qui possèdent des parties vertes. Leur couleur verte vient d'un pigment, la chlorophylle, présent surtout dans les feuilles et dans les tiges jeunes. Les arbres, l'herbe, les fleurs des champs, les mousses et les algues sont des végétaux chlorophylliens.",
                "Ces êtres vivants ont une particularité extraordinaire : ils ne mangent pas d'autres êtres vivants. Ils fabriquent eux-mêmes leur matière à partir de ce qu'ils prélèvent dans leur milieu. Les champignons, qui n'ont pas de chlorophylle, ne sont pas des végétaux et ne fonctionnent pas de cette façon.",
              ],
            },
            {
              heading: "Les besoins d'une plante verte",
              paragraphs: [
                "Pour connaître les besoins d'une plante, on réalise des expériences. On cultive plusieurs plants identiques dans les mêmes conditions, et on ne change qu'un seul facteur à la fois. Le plant qui reçoit tout ce dont il a besoin s'appelle le témoin : on compare les autres plants à ce témoin.",
                "Un plant placé dans l'obscurité devient pâle, jaunâtre, avec une tige longue et fragile, puis il meurt : la plante a besoin de lumière. Un plant qui n'est pas arrosé se fane : elle a besoin d'eau. Un plant arrosé avec de l'eau pure, sans sels minéraux, pousse beaucoup moins bien qu'un plant arrosé avec de l'eau contenant des sels minéraux (comme ceux du sol ou d'un engrais) : elle a besoin de sels minéraux.",
                "Enfin, la plante a besoin d'un gaz présent dans l'air : le dioxyde de carbone (on dit aussi gaz carbonique). Privée de ce gaz, elle ne peut pas fabriquer sa matière et ne grandit pas.",
              ],
              box: { label: "À retenir", text: "Pour vivre et grandir, un végétal chlorophyllien a besoin de lumière, d'eau, de sels minéraux et de dioxyde de carbone. Comme tous les êtres vivants, il a aussi besoin de dioxygène pour respirer." },
            },
            {
              heading: "Où la plante prélève-t-elle ce dont elle a besoin ?",
              paragraphs: [
                "Les racines puisent dans le sol l'eau et les sels minéraux qui y sont dissous. Près de leur extrémité, elles portent une multitude de poils absorbants, très fins, qui augmentent la surface en contact avec le sol. L'eau et les sels minéraux montent ensuite jusqu'aux feuilles par de fins vaisseaux qui parcourent la tige.",
                "Les feuilles, larges et minces, captent la lumière du Soleil. Elles prélèvent le dioxyde de carbone de l'air par de minuscules orifices situés surtout sur leur face inférieure, les stomates. C'est dans les parties vertes, surtout les feuilles, que la plante fabrique sa matière.",
              ],
            },
            {
              heading: "La plante fabrique sa propre matière",
              paragraphs: [
                "Au XVIIe siècle, le savant flamand Jan Baptist van Helmont plante un jeune saule dans un pot de terre dont il a mesuré la masse. Pendant cinq ans, il ne l'arrose qu'avec de l'eau de pluie. À la fin, le saule a gagné plusieurs dizaines de kilogrammes, alors que la terre du pot n'a presque pas perdu de masse. La matière de l'arbre ne vient donc pas de la terre.",
                "On sait aujourd'hui que la plante fabrique sa matière à partir de l'eau et du dioxyde de carbone de l'air, en utilisant l'énergie de la lumière, avec un peu de sels minéraux. Eau, sels minéraux et dioxyde de carbone forment la matière minérale. Bois, feuilles, sucres, amidon des graines forment la matière organique, celle qui est fabriquée par les êtres vivants. Cette fabrication s'appelle la photosynthèse ; vous l'étudierez plus en détail dans les classes suivantes. Pendant ce temps, la plante rejette du dioxygène dans l'air.",
                "Comme les végétaux chlorophylliens produisent de la matière organique à partir de matière minérale, on les appelle des producteurs primaires. Tous les autres êtres vivants dépendent d'eux pour se nourrir.",
              ],
              box: { label: "Définition", text: "Producteur primaire : être vivant qui fabrique sa propre matière organique à partir de matière minérale (eau, sels minéraux, dioxyde de carbone) grâce à la lumière. Les végétaux chlorophylliens sont des producteurs primaires." },
            },
          ],
          keyPoints: [
            "Un végétal chlorophyllien possède des parties vertes, colorées par la chlorophylle.",
            "Ses besoins : lumière, eau, sels minéraux, dioxyde de carbone (et dioxygène pour respirer).",
            "Les racines absorbent l'eau et les sels minéraux ; les feuilles captent la lumière et le dioxyde de carbone.",
            "La plante fabrique sa matière organique à partir de matière minérale : c'est un producteur primaire.",
            "Dans une expérience, on ne change qu'un facteur à la fois et on compare au témoin.",
          ],
          example: {
            statement: "Trois pots contiennent de jeunes plants de haricot identiques, dans le même terreau (données fictives). Pot A : à la lumière, arrosé. Pot B : dans un placard obscur, arrosé. Pot C : à la lumière, jamais arrosé. Après deux semaines, le plant A est vert et a grandi ; le plant B est jaune pâle, avec une tige longue et molle ; le plant C est fané. Que peut-on conclure ?",
            solution: [
              "Le pot A reçoit tout ce dont la plante a besoin : c'est le témoin.",
              "Le pot B ne diffère du témoin que par l'absence de lumière. Le plant B se développe mal : la plante a besoin de lumière.",
              "Le pot C ne diffère du témoin que par l'absence d'eau. Le plant C se fane : la plante a besoin d'eau.",
              "Conclusion : un plant de haricot a besoin de lumière et d'eau pour se développer normalement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Recopiez et complétez : « Une plante verte a besoin de ......, d'......, de ...... ...... et de ...... de ....... Les ...... absorbent l'eau et les sels minéraux grâce aux poils ....... Les ...... captent la lumière et le dioxyde de carbone de l'air. »",
              hint: "Il y a quatre besoins à citer, puis deux organes de la plante et le nom des petits poils des racines.",
              solution: [
                "« Une plante verte a besoin de lumière, d'eau, de sels minéraux et de dioxyde de carbone.",
                "Les racines absorbent l'eau et les sels minéraux grâce aux poils absorbants.",
                "Les feuilles captent la lumière et le dioxyde de carbone de l'air. »",
              ],
            },
            {
              level: 2,
              statement: "Des élèves cultivent des plants de blé identiques, à la lumière, pendant trois semaines (données fictives). Lot 1 : arrosé avec de l'eau contenant des sels minéraux ; les plants mesurent en moyenne 24 cm et sont bien verts. Lot 2 : arrosé avec de l'eau pure (sans sels minéraux) ; les plants mesurent en moyenne 8 cm et sont jaunâtres. a) Quel facteur varie entre les deux lots ? b) Quel lot est le témoin ? c) Combien de fois les plants du lot 1 sont-ils plus grands que ceux du lot 2 ? d) Quelle conclusion peut-on tirer ? e) Pourquoi faut-il que tous les autres facteurs (lumière, température, variété de blé) soient les mêmes ?",
              hint: "Cherchez la seule différence entre les deux lots : c'est elle qui explique la différence de résultats.",
              solution: [
                "a) Le seul facteur qui varie est la présence de sels minéraux dans l'eau d'arrosage.",
                "b) Le lot 1, qui reçoit tout ce dont la plante a besoin, est le témoin.",
                "c) 24 ÷ 8 = 3 : les plants du lot 1 sont en moyenne 3 fois plus grands.",
                "d) Sans sels minéraux, le blé pousse beaucoup moins bien : la plante a besoin de sels minéraux pour se développer.",
                "e) Si un autre facteur changeait aussi, on ne pourrait pas savoir lequel des deux facteurs explique la différence de croissance. On ne change qu'un facteur à la fois.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On reprend l'expérience de van Helmont avec des données simplifiées (données fictives). On plante un saule de 2 kg dans un pot contenant 90 kg de terre sèche. On l'arrose uniquement avec de l'eau de pluie pendant cinq ans. À la fin, le saule pèse 77 kg et la terre sèche pèse 89,94 kg. a) Calculez la masse gagnée par le saule. b) Calculez la masse perdue par la terre, en kilogrammes puis en grammes. c) La terre peut-elle expliquer la croissance du saule ? Justifiez. d) D'où vient alors la matière du saule ? e) Que représente probablement la petite masse perdue par la terre ?",
              hint: "Masse gagnée = masse finale - masse de départ. Pour passer des kilogrammes aux grammes, multipliez par 1 000.",
              solution: [
                "a) Masse gagnée par le saule : 77 - 2 = 75 kg.",
                "b) Masse perdue par la terre : 90 - 89,94 = 0,06 kg, soit 0,06 × 1 000 = 60 g.",
                "c) Non : le saule a gagné 75 kg alors que la terre n'a perdu que 60 g. La terre ne peut expliquer qu'une toute petite partie de la matière du saule.",
                "d) La matière du saule vient de l'eau d'arrosage et du dioxyde de carbone de l'air : avec l'énergie de la lumière, la plante transforme cette matière minérale en sa propre matière organique.",
                "e) Les 60 g perdus par la terre correspondent surtout aux sels minéraux absorbés par les racines : la plante en a besoin, mais en petite quantité.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur la nutrition des plantes.",
            statements: [
              { text: "Une plante verte se nourrit de terre.", true: false, why: "La plante prélève dans le sol de l'eau et un peu de sels minéraux, mais sa matière vient surtout de l'eau et du dioxyde de carbone de l'air." },
              { text: "Une plante placée longtemps dans l'obscurité devient pâle et finit par mourir.", true: true, why: "Sans lumière, elle ne peut plus fabriquer sa matière." },
              { text: "Les racines absorbent l'eau et les sels minéraux du sol.", true: true, why: "Elles le font grâce à leurs poils absorbants, très fins et très nombreux." },
              { text: "Les plantes ne respirent pas.", true: false, why: "Comme tous les êtres vivants, les plantes respirent : elles consomment du dioxygène, jour et nuit." },
              { text: "Le dioxyde de carbone de l'air entre dans les feuilles par les stomates.", true: true, why: "Les stomates sont de minuscules orifices situés surtout sous les feuilles." },
              { text: "Les champignons sont des végétaux chlorophylliens.", true: false, why: "Les champignons n'ont pas de chlorophylle et ne fabriquent pas leur matière à partir de matière minérale." },
              { text: "Une plante verte est un producteur primaire.", true: true, why: "Elle produit sa matière organique à partir de matière minérale, grâce à la lumière." },
            ],
          },
          quiz: [
            { q: "Laquelle de ces substances n'est pas un besoin d'une plante verte pour fabriquer sa matière ?", options: ["Le sucre", "L'eau", "La lumière", "Le dioxyde de carbone"], answer: 0, why: "La plante ne prélève pas de sucre : elle le fabrique elle-même à partir d'eau et de dioxyde de carbone, grâce à la lumière." },
            { q: "Par quel organe une plante absorbe-t-elle l'eau et les sels minéraux du sol ?", options: ["Les feuilles", "Les fleurs", "La tige", "Les racines"], answer: 3, why: "Les racines, grâce à leurs poils absorbants, puisent l'eau et les sels minéraux dans le sol." },
            { q: "Un plant de haricot laissé plusieurs jours dans l'obscurité devient :", options: ["vert foncé et très vigoureux", "rouge, avec beaucoup de feuilles", "pâle, jaunâtre et fragile"], answer: 2, why: "Privé de lumière, il ne peut pas fabriquer sa matière : il pâlit, s'affaiblit, puis meurt." },
            { q: "Comment appelle-t-on les êtres vivants qui fabriquent leur matière organique à partir de matière minérale ?", options: ["Des producteurs", "Des consommateurs", "Des décomposeurs", "Des prédateurs"], answer: 0, why: "Les végétaux chlorophylliens sont des producteurs primaires : ils produisent leur matière eux-mêmes." },
            { q: "D'où vient l'essentiel de la matière d'un arbre ?", options: ["De la terre dans laquelle ses racines poussent", "Des petits animaux du sol qu'il absorbe", "De l'eau et du dioxyde de carbone de l'air"], answer: 2, why: "L'expérience de van Helmont l'a montré : la terre ne perd presque pas de masse. La matière vient de l'eau et du dioxyde de carbone." },
          ],
          trap: "Croire que les plantes « mangent » la terre ou que l'engrais est leur nourriture : la terre ne fournit que de l'eau et un peu de sels minéraux, et la matière de la plante vient surtout de l'eau et du dioxyde de carbone de l'air.",
          method: "Pour exploiter une expérience, cherchez d'abord le témoin, puis la seule différence entre chaque essai et le témoin. Rédigez ensuite votre conclusion avec la phrase : « Sans ..., la plante ... : elle a donc besoin de ... ».",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'besoins-animaux',
          title: 'Les besoins alimentaires des animaux',
          minutes: 30,
          objectives: [
            "Identifier l'origine de la nourriture des animaux : d'autres êtres vivants ou leurs produits.",
            "Classer des animaux selon leur régime alimentaire : herbivore, carnivore, omnivore.",
            "Construire une chaîne alimentaire et expliquer le sens des flèches.",
            "Relier les besoins des plantes vertes à leur place au début des chaînes alimentaires.",
          ],
          course: [
            {
              heading: "Les animaux doivent se nourrir d'autres êtres vivants",
              paragraphs: [
                "Contrairement aux plantes vertes, les animaux ne peuvent pas fabriquer leur matière à partir d'eau, de sels minéraux et de dioxyde de carbone. Pour grandir, réparer leur corps et trouver l'énergie dont ils ont besoin, ils doivent manger de la matière organique produite par d'autres êtres vivants : des végétaux, des animaux, ou ce qu'ils produisent (fruits, graines, nectar, lait).",
                "Les aliments apportent donc à la fois la matière qui permet de grandir et l'énergie qui permet de bouger et de vivre. Un animal a aussi besoin d'eau et de dioxygène pour respirer. Comme ils consomment de la matière produite par d'autres, les animaux sont appelés des consommateurs.",
              ],
              box: { label: "À retenir", text: "Tout animal se nourrit de matière organique produite par d'autres êtres vivants. Les animaux sont des consommateurs." },
            },
            {
              heading: "Les régimes alimentaires",
              paragraphs: [
                "Le régime alimentaire d'un animal est l'ensemble de ce qu'il mange. Un herbivore ne mange que des végétaux : la vache, le lapin, la chenille, l'escargot. Un carnivore mange des animaux : la chouette (qui chasse des petits rongeurs), l'araignée (qui capture des insectes), la coccinelle (qui dévore des pucerons). Un omnivore mange à la fois des végétaux et des animaux : le sanglier, l'ours brun, l'être humain.",
                "Le régime alimentaire peut changer selon les saisons. La mésange charbonnière mange surtout des insectes au printemps et en été, et surtout des graines en hiver, quand les insectes se font rares. Il peut aussi changer au cours de la vie : le têtard se nourrit surtout d'algues, alors que la grenouille adulte chasse des insectes.",
                "Pour connaître le régime d'un animal, on peut l'observer, examiner ses traces (restes de repas, excréments) ou étudier ses pelotes de réjection. La chouette avale ses proies entières, puis recrache une petite boule contenant les os et les poils qu'elle ne digère pas : la pelote de réjection. En la décortiquant, on retrouve les crânes de ses proies.",
              ],
              box: { label: "Définition", text: "Herbivore : se nourrit de végétaux. Carnivore : se nourrit d'animaux. Omnivore : se nourrit de végétaux et d'animaux." },
            },
            {
              heading: "Les chaînes alimentaires",
              paragraphs: [
                "Une chaîne alimentaire est une suite d'êtres vivants dans laquelle chacun est mangé par le suivant. On l'écrit avec des flèches : herbe → lapin → renard. La flèche se lit « est mangé par » : l'herbe est mangée par le lapin, qui est mangé par le renard. Elle montre aussi le chemin de la matière : la matière de l'herbe devient matière du lapin, puis matière du renard.",
                "Une chaîne alimentaire commence toujours par un végétal chlorophyllien : c'est le producteur primaire, le seul qui fabrique sa matière sans manger d'autres êtres vivants. Viennent ensuite les consommateurs : l'herbivore qui mange le végétal, puis le carnivore qui mange l'herbivore, et ainsi de suite.",
              ],
              box: { label: "Règle", text: "Dans une chaîne alimentaire, la flèche part de l'être vivant mangé et pointe vers celui qui le mange : elle signifie « est mangé par ». Le premier maillon est toujours un végétal chlorophyllien." },
            },
            {
              heading: "Les réseaux alimentaires",
              paragraphs: [
                "Dans la nature, un animal mange souvent plusieurs sortes d'aliments, et il peut être mangé par plusieurs prédateurs. Les chaînes alimentaires se croisent donc et forment un réseau alimentaire.",
                "Dans un réseau, tous les êtres vivants dépendent les uns des autres. Si une espèce disparaît, les autres sont touchées. Par exemple, si un jardinier tue les coccinelles avec un insecticide, les pucerons, qui ne sont plus mangés, se multiplient et abîment les rosiers.",
              ],
            },
          ],
          keyPoints: [
            "Les animaux ne fabriquent pas leur matière : ils mangent d'autres êtres vivants ou leurs produits. Ce sont des consommateurs.",
            "Herbivore : végétaux. Carnivore : animaux. Omnivore : végétaux et animaux.",
            "Le régime alimentaire peut varier selon les saisons et selon l'âge.",
            "Dans une chaîne alimentaire, la flèche signifie « est mangé par ».",
            "Une chaîne alimentaire commence toujours par un végétal chlorophyllien (producteur primaire).",
            "Les chaînes se croisent en réseaux alimentaires : la disparition d'une espèce touche les autres.",
          ],
          example: {
            statement: "Dans un champ, le mulot mange des grains de blé, et la chouette chasse les mulots. Construisez la chaîne alimentaire et indiquez le rôle de chaque être vivant.",
            solution: [
              "On cherche d'abord le végétal chlorophyllien, qui commence la chaîne : le blé.",
              "Le blé est mangé par le mulot : blé → mulot.",
              "Le mulot est mangé par la chouette : mulot → chouette.",
              "Chaîne alimentaire : blé → mulot → chouette.",
              "Le blé est le producteur primaire ; le mulot est un consommateur qui mange des végétaux ; la chouette est un consommateur carnivore.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le régime alimentaire (herbivore, carnivore ou omnivore) de chaque animal : a) la vache, qui broute l'herbe ; b) le loup, qui chasse des cerfs et des lièvres ; c) le sanglier, qui mange des glands, des racines et des vers de terre ; d) la coccinelle, qui mange des pucerons ; e) le puceron, qui se nourrit de la sève des plantes ; f) l'être humain.",
              hint: "Cherchez si l'animal mange seulement des végétaux, seulement des animaux, ou les deux.",
              solution: [
                "a) La vache mange seulement des végétaux : herbivore.",
                "b) Le loup mange des animaux : carnivore.",
                "c) Le sanglier mange des végétaux (glands, racines) et des animaux (vers de terre) : omnivore.",
                "d) La coccinelle mange des pucerons, qui sont des animaux : carnivore.",
                "e) Le puceron se nourrit de sève, qui vient des végétaux : herbivore.",
                "f) L'être humain mange des végétaux et des animaux : omnivore.",
              ],
            },
            {
              level: 2,
              statement: "Dans un jardin : le puceron se nourrit de la sève du rosier ; la coccinelle mange des pucerons ; la mésange mange des pucerons ; l'épervier chasse les mésanges. a) Écrivez deux chaînes alimentaires avec ces êtres vivants. b) Quel est le producteur primaire ? c) Un jardinier tue toutes les coccinelles avec un insecticide. Que risque-t-il d'arriver aux pucerons, puis aux rosiers ? d) Pourquoi dit-on que ces chaînes forment un réseau ?",
              hint: "Commencez chaque chaîne par le végétal, puis suivez « est mangé par ». Pour la question c, demandez-vous qui mange les pucerons.",
              solution: [
                "a) Chaîne 1 : rosier → puceron → coccinelle. Chaîne 2 : rosier → puceron → mésange → épervier.",
                "b) Le producteur primaire est le rosier, le seul végétal chlorophyllien : il commence les deux chaînes.",
                "c) Sans coccinelles, les pucerons sont moins mangés : ils se multiplient. Plus nombreux, ils prélèvent davantage de sève et abîment les rosiers. (Les mésanges en mangent toujours, mais pas assez pour compenser.)",
                "d) Les deux chaînes ont des maillons communs (le rosier et le puceron) : elles se croisent et forment un réseau alimentaire.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Des élèves décortiquent une pelote de réjection de chouette effraie (données fictives). Ils y trouvent 4 crânes de campagnols, 2 crânes de mulots et 1 crâne de musaraigne. On sait que le campagnol mange de l'herbe et des racines, que le mulot mange surtout des graines, et que la musaraigne chasse des insectes, comme les criquets, qui mangent de l'herbe. a) Qu'est-ce qu'une pelote de réjection ? b) Quel est le régime alimentaire de la chouette ? c) Combien de proies la chouette a-t-elle mangées ? Quelle est la proie la plus fréquente ? d) Écrivez la chaîne alimentaire la plus longue possible, avec la chouette au bout. e) Une maladie fait disparaître presque tous les campagnols de la région. Quelles conséquences possibles pour la chouette ?",
              hint: "Pour la chaîne la plus longue, partez de l'herbe et passez par l'insecte avant d'arriver à la chouette.",
              solution: [
                "a) La chouette avale ses proies entières. Elle recrache ensuite, par le bec, une petite boule contenant ce qu'elle ne digère pas : les os et les poils. C'est la pelote de réjection.",
                "b) La chouette ne mange que des animaux (campagnols, mulots, musaraignes) : elle est carnivore.",
                "c) 4 + 2 + 1 = 7 proies. La plus fréquente est le campagnol (4 sur 7, soit plus de la moitié).",
                "d) La chaîne la plus longue : herbe → criquet → musaraigne → chouette (quatre maillons). Les autres chaînes sont plus courtes : herbe → campagnol → chouette, graines → mulot → chouette.",
                "e) La chouette perd sa proie principale. Elle devra chasser davantage de mulots et de musaraignes ; si elle ne trouve pas assez de nourriture, elle pourra quitter la région ou élever moins de petits.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque animal à ce qu'il mange.",
            pairs: [
              { left: "La vache", right: "Herbivore : elle broute l'herbe" },
              { left: "La chouette effraie", right: "Carnivore : elle chasse des petits rongeurs" },
              { left: "Le sanglier", right: "Omnivore : glands, racines et vers de terre" },
              { left: "La coccinelle", right: "Carnivore : elle dévore des pucerons" },
              { left: "La mésange charbonnière", right: "Insectes en été, graines en hiver" },
              { left: "Le puceron", right: "Herbivore : il aspire la sève des plantes" },
            ],
          },
          quiz: [
            { q: "Quel est le régime alimentaire d'un animal qui mange des végétaux et des animaux ?", options: ["Herbivore", "Carnivore", "Granivore", "Omnivore"], answer: 3, why: "Omnivore signifie « qui mange de tout » : végétaux et animaux." },
            { q: "Dans la chaîne alimentaire « herbe → lapin → renard », que signifie la flèche ?", options: ["« est mangé par »", "« mange »", "« vit avec »", "« est plus gros que »"], answer: 0, why: "La flèche part de l'être vivant mangé vers celui qui le mange : l'herbe est mangée par le lapin." },
            { q: "Par quoi commence toujours une chaîne alimentaire ?", options: ["Un herbivore", "Le plus gros prédateur", "Une plante verte", "Un décomposeur"], answer: 2, why: "Le premier maillon est un végétal chlorophyllien, le seul qui fabrique sa matière sans manger d'autres êtres vivants." },
            { q: "Que trouve-t-on dans une pelote de réjection de chouette ?", options: ["Des graines et des feuilles", "Des os et des poils de proies", "Des œufs de chouette non éclos"], answer: 1, why: "La pelote contient les parties des proies que la chouette ne digère pas : os et poils." },
            { q: "La mésange charbonnière mange surtout des insectes en été et des graines en hiver. On en déduit que :", options: ["son régime change selon les saisons", "elle est strictement herbivore toute l'année", "elle ne mange jamais de graines en été"], answer: 0, why: "Elle mange ce qu'elle trouve : beaucoup d'insectes à la belle saison, des graines quand les insectes sont rares." },
          ],
          trap: "Mettre les flèches à l'envers (renard → lapin → herbe) en lisant « mange » : la flèche signifie « est mangé par » et va de l'être vivant mangé vers celui qui le mange. Autre oubli : ne pas commencer la chaîne par un végétal.",
          method: "Pour construire une chaîne alimentaire, cherchez d'abord le végétal, écrivez-le à gauche, puis ajoutez à chaque fois l'animal qui mange le précédent. Relisez ensuite chaque flèche à voix haute en disant « est mangé par » : la phrase doit être vraie.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'decomposeurs',
          title: 'Le devenir de la matière : le rôle des décomposeurs',
          minutes: 30,
          objectives: [
            "Identifier les décomposeurs du sol et leur rôle.",
            "Décrire le devenir de la matière organique qui n'appartient plus à un être vivant (feuilles mortes, cadavres, excréments).",
            "Expliquer comment la matière circule entre les êtres vivants et le sol.",
          ],
          course: [
            {
              heading: "Que deviennent les feuilles mortes ?",
              paragraphs: [
                "Chaque automne, les arbres d'une forêt perdent leurs feuilles. Si elles restaient intactes, le sol serait recouvert d'une couche de plus en plus épaisse année après année. Or ce n'est pas ce que l'on observe : sous la couche de feuilles de l'année, on trouve des feuilles abîmées, puis des petits débris, puis une terre sombre.",
                "Les feuilles mortes, les branches tombées, les cadavres d'animaux et leurs excréments forment la matière organique morte : c'est de la matière fabriquée par des êtres vivants, mais qui n'appartient plus à un être vivant. Sur le sol d'une forêt, la couche de feuilles et de débris s'appelle la litière.",
              ],
            },
            {
              heading: "Les décomposeurs du sol",
              paragraphs: [
                "Le sol abrite une foule d'êtres vivants qui se nourrissent de cette matière organique morte. De petits animaux la découpent et la mangent : vers de terre (lombrics), cloportes, iules (des mille-pattes), collemboles, acariens, larves d'insectes. Ils réduisent les feuilles en fragments de plus en plus petits.",
                "Des êtres vivants beaucoup plus petits terminent le travail : les champignons, dont on voit parfois les filaments blancs sous les feuilles, et les bactéries, visibles seulement au microscope. Ils transforment les débris en matière minérale, en particulier en sels minéraux.",
                "Tous ces êtres vivants qui transforment la matière organique morte sont appelés décomposeurs. On peut les observer en installant un échantillon de litière sous une lampe : les petits animaux fuient la chaleur et la lumière, descendent et tombent dans un récipient placé dessous.",
              ],
              box: { label: "Définition", text: "Les décomposeurs sont les êtres vivants du sol (petits animaux, champignons, bactéries) qui se nourrissent de matière organique morte et la transforment peu à peu en matière minérale." },
            },
            {
              heading: "De la matière organique à la matière minérale",
              paragraphs: [
                "La décomposition se fait par étapes. Les feuilles sont d'abord découpées et mangées par les petits animaux. Leurs débris et les excréments de ces animaux forment l'humus, une matière sombre qui donne sa couleur à la terre des forêts et des jardins. Enfin, les champignons et les bactéries transforment l'humus en sels minéraux.",
                "Ces sels minéraux se dissolvent dans l'eau du sol, et les racines des plantes les absorbent. Avec la lumière, l'eau et le dioxyde de carbone, les plantes fabriquent à nouveau de la matière organique : de nouvelles feuilles, du bois, des fruits. Cette matière sera mangée par des animaux, et tout finira un jour par retourner au sol.",
                "La matière circule donc sans cesse entre les êtres vivants et le sol : on parle du cycle de la matière. Sans les décomposeurs, les sels minéraux du sol s'épuiseraient, les plantes pousseraient mal et les restes des êtres vivants s'accumuleraient.",
              ],
              box: { label: "À retenir", text: "Cycle de la matière : les végétaux fabriquent de la matière organique, les animaux la consomment, les décomposeurs transforment la matière morte en sels minéraux, que les végétaux absorbent à nouveau." },
            },
            {
              heading: "Ce qui favorise la décomposition",
              paragraphs: [
                "Les décomposeurs travaillent plus vite quand il fait doux et humide, et qu'il y a de l'air. Dans le froid ou la sécheresse, la décomposition est très lente. C'est pourquoi la litière est épaisse dans les forêts froides, et mince dans les forêts chaudes et humides.",
                "Les jardiniers utilisent les décomposeurs pour fabriquer du compost : ils rassemblent des épluchures de légumes, des feuilles et des tontes de gazon dans un composteur, en gardant le tas humide et aéré. Au bout de plusieurs mois, ils obtiennent un terreau riche qui nourrit leurs plantes. En revanche, la plupart des plastiques ne sont presque pas décomposés par les êtres vivants du sol : abandonnés dans la nature, ils y restent très longtemps.",
              ],
            },
          ],
          keyPoints: [
            "La matière organique morte : feuilles mortes, branches, cadavres et excréments.",
            "Les décomposeurs (petits animaux du sol, champignons, bactéries) se nourrissent de cette matière et la transforment.",
            "Les petits animaux découpent la matière ; les champignons et les bactéries la transforment en sels minéraux.",
            "Les sels minéraux sont absorbés par les racines : la matière circule entre le sol et les êtres vivants (cycle de la matière).",
            "La décomposition est plus rapide quand il fait doux, humide et aéré.",
            "Le compost est fabriqué par les décomposeurs ; la plupart des plastiques ne se décomposent presque pas.",
          ],
          example: {
            statement: "Une feuille de chêne tombe sur le sol en automne. Expliquez comment la matière de cette feuille peut, quelques années plus tard, se retrouver dans une nouvelle feuille de chêne.",
            solution: [
              "La feuille tombée devient de la matière organique morte et rejoint la litière.",
              "Les petits animaux du sol (cloportes, vers de terre, collemboles) la découpent et la mangent : elle est réduite en débris.",
              "Les débris et les excréments de ces animaux forment l'humus.",
              "Les champignons et les bactéries transforment l'humus en sels minéraux, qui se dissolvent dans l'eau du sol.",
              "Les racines du chêne absorbent ces sels minéraux avec l'eau. Le chêne les utilise, avec la lumière et le dioxyde de carbone, pour fabriquer de nouvelles feuilles.",
              "Conclusion : grâce aux décomposeurs, la matière de la feuille morte retourne au sol puis à l'arbre : c'est le cycle de la matière.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces êtres vivants, lesquels sont des décomposeurs du sol ? Le lombric, le renard, le cloporte, les champignons du sol, le chêne, les bactéries du sol, le collembole, la buse. Pour ceux qui ne sont pas des décomposeurs, dites ce qu'ils sont (producteur ou consommateur).",
              hint: "Un décomposeur se nourrit de matière organique morte : feuilles mortes, cadavres, excréments.",
              solution: [
                "Décomposeurs : le lombric, le cloporte, les champignons du sol, les bactéries du sol, le collembole. Ils se nourrissent de matière organique morte.",
                "Le chêne est un végétal chlorophyllien : c'est un producteur primaire.",
                "Le renard et la buse mangent d'autres êtres vivants : ce sont des consommateurs.",
              ],
            },
            {
              level: 2,
              statement: "Des élèves enterrent dans la litière trois sachets contenant chacun 10 g de feuilles mortes (données fictives). Sachet A : filet à grosses mailles, que les petits animaux du sol peuvent traverser. Sachet B : filet à mailles très fines, que seuls les champignons et les bactéries peuvent traverser. Sachet C : sac en plastique fermé, qui ne laisse rien passer, et dont les feuilles ont été stérilisées (débarrassées de tout être vivant). Six mois plus tard, il reste 3 g de feuilles dans A, 7 g dans B et 10 g dans C. a) Calculez la masse de feuilles décomposée dans chaque sachet. b) Que montre le sachet C ? c) Comparez A et B : quel est le rôle des petits animaux du sol ? d) Que montre le sachet B ?",
              hint: "Masse décomposée = masse de départ - masse restante. Comparez ensuite les sachets deux par deux en cherchant ce qui change.",
              solution: [
                "a) Sachet A : 10 - 3 = 7 g décomposés. Sachet B : 10 - 7 = 3 g. Sachet C : 10 - 10 = 0 g.",
                "b) Dans le sachet C, aucun être vivant ne peut agir et rien ne se décompose : la décomposition est due aux êtres vivants.",
                "c) Les petits animaux n'entrent que dans le sachet A, où la décomposition est plus importante (7 g au lieu de 3 g) : les petits animaux du sol accélèrent beaucoup la décomposition en découpant et en mangeant les feuilles.",
                "d) Dans le sachet B, seuls les champignons et les bactéries agissent : 3 g sont tout de même décomposés. Les champignons et les bactéries décomposent eux aussi la matière organique morte, mais plus lentement quand ils sont seuls.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On place 10 g de feuilles mortes, avec un peu de terre de forêt, dans trois boîtes aérées, pendant trois mois (données fictives). Boîte 1 : à 20 °C, terre humide ; il reste 4 g de feuilles. Boîte 2 : à 5 °C, terre humide ; il reste 8 g. Boîte 3 : à 20 °C, terre très sèche ; il reste 9 g. a) Calculez la masse décomposée dans chaque boîte. b) Combien de fois plus de feuilles ont été décomposées dans la boîte 1 que dans la boîte 2 ? c) Quelles conditions favorisent la décomposition ? d) Dans une forêt de montagne froide, la litière est très épaisse ; dans une forêt tropicale chaude et humide, elle est très mince. Expliquez. e) Imaginez que tous les décomposeurs d'une forêt disparaissent : que se passerait-il au bout de quelques années ?",
              hint: "Comparez seulement deux boîtes qui ne diffèrent que par un facteur : la boîte 1 et la boîte 2 pour la température, la boîte 1 et la boîte 3 pour l'humidité.",
              solution: [
                "a) Boîte 1 : 10 - 4 = 6 g décomposés. Boîte 2 : 10 - 8 = 2 g. Boîte 3 : 10 - 9 = 1 g.",
                "b) 6 ÷ 2 = 3 : dans la boîte 1, trois fois plus de feuilles ont été décomposées que dans la boîte 2.",
                "c) Les boîtes 1 et 2 ne diffèrent que par la température : la décomposition est plus rapide à 20 °C qu'à 5 °C. Les boîtes 1 et 3 ne diffèrent que par l'humidité : elle est plus rapide dans la terre humide. La chaleur douce et l'humidité favorisent la décomposition.",
                "d) Dans la forêt froide, les décomposeurs travaillent lentement : les feuilles s'accumulent plus vite qu'elles ne disparaissent, la litière est épaisse. Dans la forêt tropicale, la chaleur et l'humidité les rendent très actifs : les feuilles disparaissent vite, la litière reste mince.",
                "e) Les feuilles mortes, les cadavres et les excréments s'accumuleraient sur le sol. Les sels minéraux ne seraient plus renouvelés : le sol s'appauvrirait, les plantes pousseraient de plus en plus mal, et les animaux qui les mangent manqueraient de nourriture.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le voyage de la matière d'une feuille morte jusqu'à une nouvelle plante.",
            items: [
              "La feuille tombe de l'arbre en automne.",
              "Elle se dépose sur le sol, dans la litière.",
              "Les petits animaux du sol la découpent et la mangent.",
              "Les débris et les excréments de ces animaux forment l'humus.",
              "Les champignons et les bactéries transforment l'humus en sels minéraux.",
              "Les racines d'une plante absorbent ces sels minéraux avec l'eau du sol.",
            ],
          },
          quiz: [
            { q: "Lequel de ces êtres vivants est un décomposeur du sol ?", options: ["Le chêne", "Le renard", "Le cloporte", "La mésange"], answer: 2, why: "Le cloporte se nourrit de feuilles mortes et participe à leur décomposition." },
            { q: "En quoi les décomposeurs transforment-ils la matière organique morte ?", options: ["En pétrole", "En plastique", "En roches très dures", "En sels minéraux"], answer: 3, why: "Champignons et bactéries transforment les débris en sels minéraux, qui retournent dans le sol." },
            { q: "Que deviennent les sels minéraux produits par les décomposeurs ?", options: ["Les racines des plantes les absorbent", "Ils s'envolent dans l'atmosphère et disparaissent", "Les renards les mangent avec leurs proies"], answer: 0, why: "Dissous dans l'eau du sol, ils sont absorbés par les racines et servent aux plantes à fabriquer leur matière." },
            { q: "Dans quelles conditions les feuilles mortes se décomposent-elles le plus vite ?", options: ["Au froid et au sec", "Au chaud et à l'humidité", "Dans un sac en plastique fermé"], answer: 1, why: "Les décomposeurs sont plus actifs quand il fait doux et humide, avec de l'air." },
            { q: "Une bouteille en plastique abandonnée en forêt reste très longtemps dans la nature, car :", options: ["elle est bien trop lourde pour être emportée par le vent", "les feuilles mortes la protègent de la pluie et du soleil", "les décomposeurs ne la dégradent presque pas"], answer: 2, why: "Les êtres vivants du sol décomposent la matière organique morte, mais presque pas la plupart des plastiques." },
          ],
          trap: "Croire que les feuilles mortes « disparaissent toutes seules » ou se transforment en terre sans aide : ce sont des êtres vivants, les décomposeurs, qui les mangent et les transforment en sels minéraux.",
          method: "Pour expliquer le devenir de la matière, racontez son voyage dans l'ordre en nommant à chaque étape qui agit : la plante fabrique, l'animal mange, les petits animaux du sol découpent, les champignons et les bactéries transforment, les racines absorbent. Vérifiez que votre cycle revient bien à son point de départ.",
        },
      ],
    },
  ],
}
