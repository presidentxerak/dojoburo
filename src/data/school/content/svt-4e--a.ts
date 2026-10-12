import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-4e',
  chapters: [
    /* ==================================================================== */
    /* L'ACTIVITÉ INTERNE DE LA TERRE                                       */
    /* ==================================================================== */
    {
      id: 'activite-interne-terre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'seismes',
          title: 'Les séismes et leur origine',
          minutes: 30,
          objectives: [
            "Expliquer qu'un séisme est dû à la rupture brutale de roches en profondeur, le long d'une faille.",
            "Situer le foyer et l'épicentre d'un séisme et décrire la propagation des ondes sismiques.",
            "Distinguer la magnitude d'un séisme de son intensité.",
            "Relier la répartition des séismes à la surface du globe à des zones actives précises.",
          ],
          course: [
            {
              heading: "Un séisme, c'est une rupture de roches",
              paragraphs: [
                "Un séisme (ou tremblement de terre) est une série de secousses du sol, parfois très violentes, qui durent de quelques secondes à quelques minutes. Ces secousses ne viennent pas de la surface : elles naissent en profondeur, dans les roches du sous-sol.",
                "En profondeur, les roches sont soumises à des forces énormes qui les poussent, les étirent ou les font glisser. On appelle ces forces des contraintes. Pendant des années, voire des siècles, les roches se déforment lentement et accumulent de l'énergie, sans que l'on ressente quoi que ce soit en surface.",
                "Quand les contraintes deviennent trop fortes, les roches cassent brusquement. Les deux blocs de part et d'autre de la cassure se déplacent l'un par rapport à l'autre : cette cassure s'appelle une faille. L'énergie accumulée est alors libérée d'un coup, sous forme de vibrations. C'est comme une règle en plastique que l'on plie de plus en plus : elle se courbe d'abord, puis elle casse d'un coup en faisant vibrer vos mains.",
              ],
              box: { label: "Définition", text: "Un séisme est une libération brutale d'énergie due à la rupture de roches soumises à des contraintes. La rupture se produit le long d'une faille, une cassure de part et d'autre de laquelle les blocs de roches se déplacent." },
            },
            {
              heading: "Foyer, épicentre et ondes sismiques",
              paragraphs: [
                "Le point en profondeur où la rupture commence s'appelle le foyer (ou hypocentre). Selon les séismes, il se trouve entre quelques kilomètres et environ 700 kilomètres de profondeur. Le point de la surface situé juste à la verticale du foyer s'appelle l'épicentre : c'est généralement là que les secousses sont les plus fortes.",
                "À partir du foyer, l'énergie se propage dans toutes les directions sous forme d'ondes sismiques, un peu comme les ronds qui s'élargissent à la surface de l'eau quand on y jette un caillou. En s'éloignant du foyer, ces ondes perdent de l'énergie : les secousses sont donc en général plus faibles loin de l'épicentre.",
                "Les ondes sismiques sont enregistrées par des sismomètres (on dit aussi sismographes), installés dans des stations partout dans le monde. L'enregistrement obtenu s'appelle un sismogramme. Les premières ondes qui arrivent sont les ondes P, les plus rapides, suivies des ondes S, plus lentes. En comparant les sismogrammes de plusieurs stations (au moins trois), les scientifiques retrouvent la position de l'épicentre.",
              ],
              box: { label: "Repère", text: "Foyer : point en profondeur où commence la rupture. Épicentre : point de la surface à la verticale du foyer. Ondes sismiques : vibrations qui partent du foyer dans toutes les directions. Sismogramme : enregistrement de ces ondes par un sismomètre." },
            },
            {
              heading: "Magnitude et intensité : deux mesures différentes",
              paragraphs: [
                "La magnitude mesure l'énergie libérée au foyer. Elle est calculée à partir des sismogrammes, et chaque séisme a une seule magnitude. L'échelle la plus connue a été proposée par Charles Richter en 1935. Elle n'a pas de maximum théorique, mais le séisme le plus puissant jamais enregistré, au Chili en 1960, avait une magnitude de 9,5.",
                "Attention : quand la magnitude augmente de 1, l'énergie libérée est multipliée par environ 30. Un séisme de magnitude 7 libère donc environ 30 fois plus d'énergie qu'un séisme de magnitude 6, et environ 1 000 fois plus (30 × 30, arrondi) qu'un séisme de magnitude 5.",
                "L'intensité, elle, décrit les effets du séisme en un lieu donné : ce que les gens ressentent et les dégâts observés. On l'exprime en chiffres romains, de I (secousse non ressentie) à XII (destruction presque totale), avec l'échelle EMS-98 en Europe. Un même séisme a donc plusieurs intensités : forte près de l'épicentre, plus faible loin de lui. Sur une carte, on relie les lieux de même intensité par des courbes appelées isoséistes.",
              ],
              box: { label: "À retenir", text: "Magnitude : énergie libérée au foyer, une seule valeur par séisme, calculée avec les sismogrammes. Intensité : effets observés en un lieu (de I à XII), plusieurs valeurs pour un même séisme, en général de plus en plus faibles quand on s'éloigne de l'épicentre." },
            },
            {
              heading: "Où se produisent les séismes ?",
              paragraphs: [
                "Si l'on place sur une carte du monde tous les séismes enregistrés pendant quelques années, on constate qu'ils ne sont pas répartis au hasard. Ils sont concentrés dans des zones étroites, longues de milliers de kilomètres : autour de l'océan Pacifique (on parle de la « ceinture de feu »), au milieu des océans le long des grandes chaînes de montagnes sous-marines, et dans une bande qui va de la Méditerranée à l'Himalaya.",
                "Ailleurs, les séismes sont rares. Ces zones actives dessinent les limites de grands morceaux de la surface terrestre, les plaques, que vous étudierez dans la leçon sur la tectonique des plaques. En France, les régions les plus exposées sont les Antilles, puis les Pyrénées et les Alpes.",
              ],
            },
          ],
          keyPoints: [
            "Un séisme est dû à la rupture brutale de roches en profondeur, soumises à des contraintes, le long d'une faille.",
            "Le foyer est le point de rupture en profondeur ; l'épicentre est le point de la surface à sa verticale.",
            "Les ondes sismiques partent du foyer dans toutes les directions et sont enregistrées par des sismomètres.",
            "La magnitude mesure l'énergie libérée : une seule valeur par séisme ; +1 de magnitude, c'est environ 30 fois plus d'énergie.",
            "L'intensité (de I à XII) décrit les effets en un lieu ; elle diminue en général avec la distance à l'épicentre.",
            "Les séismes sont concentrés dans des zones étroites du globe, qui marquent les limites des plaques.",
          ],
          example: {
            statement: "Données fictives. Lors d'un séisme, une station sismique enregistre l'arrivée des premières ondes (ondes P) 40 secondes après la rupture au foyer. On admet que ces ondes se déplacent à 6 km par seconde dans les roches traversées. À quelle distance du foyer se trouve la station ?",
            solution: [
              "Je relève les données : durée du trajet des ondes P = 40 s ; vitesse des ondes P = 6 km/s.",
              "Je rappelle la relation : distance = vitesse × durée.",
              "Je calcule : distance = 6 × 40 = 240 km.",
              "Je vérifie l'ordre de grandeur : en 10 s, les ondes parcourent 60 km ; en 40 s, quatre fois plus, soit 240 km. Le résultat est cohérent.",
              "Conclusion : la station se trouve à 240 km du foyer du séisme.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez les phrases avec les mots suivants : épicentre, faille, foyer, magnitude, intensité. a) Les roches cassent le long d'une .... b) Le point en profondeur où commence la rupture est le .... c) Le point de la surface situé à la verticale de ce point est l'.... d) La ... mesure l'énergie libérée par le séisme. e) L'... décrit les effets du séisme en un lieu.",
              hint: "Deux mots désignent des points, deux autres des mesures : l'une concerne l'énergie, l'autre les dégâts.",
              solution: [
                "a) Les roches cassent le long d'une faille.",
                "b) Le point en profondeur où commence la rupture est le foyer.",
                "c) Le point de la surface situé à la verticale de ce point est l'épicentre.",
                "d) La magnitude mesure l'énergie libérée par le séisme.",
                "e) L'intensité décrit les effets du séisme en un lieu.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Après un séisme de magnitude 6,1, des enquêteurs ont relevé l'intensité dans cinq villages : Arles-Haut : VII ; Belcastel : V ; Cornas : VIII ; Dieulefit : IV ; Esparron : VI. 1) Dans quel village l'épicentre se trouve-t-il probablement, ou très près duquel ? Justifiez. 2) Pourquoi y a-t-il cinq intensités différentes, mais une seule magnitude ? 3) Classez les villages du plus proche au plus éloigné de l'épicentre, en supposant que les sols et les constructions sont comparables partout.",
              hint: "L'intensité diminue en général quand on s'éloigne de l'épicentre. La magnitude, elle, ne dépend pas du lieu d'observation.",
              solution: [
                "1) L'intensité la plus forte (VIII) est relevée à Cornas. Comme les secousses sont en général les plus fortes près de l'épicentre, celui-ci se trouve probablement à Cornas ou tout près.",
                "2) La magnitude mesure l'énergie libérée au foyer : il n'y a eu qu'un seul séisme, donc une seule magnitude (6,1). L'intensité décrit les effets dans chaque lieu : elle change d'un village à l'autre selon la distance à l'épicentre.",
                "3) En classant les intensités de la plus forte à la plus faible : Cornas (VIII), Arles-Haut (VII), Esparron (VI), Belcastel (V), Dieulefit (IV).",
                "Résultat : du plus proche au plus éloigné de l'épicentre : Cornas, Arles-Haut, Esparron, Belcastel, Dieulefit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives et simplifiées. Les ondes P se déplacent à 6 km/s et les ondes S à 3 km/s. Une station enregistre l'arrivée des ondes S 25 secondes après celle des ondes P. 1) Pour une distance d, exprimez la durée du trajet des ondes P, puis celle des ondes S. 2) Déduisez-en la distance entre la station et le foyer. 3) Vérifiez votre résultat. 4) Ce séisme a une magnitude de 5. Un autre séisme a une magnitude de 7. Combien de fois plus d'énergie le second libère-t-il, environ ?",
              hint: "Durée = distance ÷ vitesse. Les ondes S mettent deux fois plus de temps que les ondes P, puisqu'elles vont deux fois moins vite.",
              solution: [
                "1) Durée du trajet des ondes P : d ÷ 6. Durée du trajet des ondes S : d ÷ 3, c'est-à-dire deux fois plus longue.",
                "2) Le retard des ondes S est donc égal à la durée du trajet des ondes P : d ÷ 3 - d ÷ 6 = d ÷ 6. Ce retard vaut 25 s, donc d ÷ 6 = 25 et d = 6 × 25 = 150 km.",
                "3) Vérification : les ondes P mettent 150 ÷ 6 = 25 s ; les ondes S mettent 150 ÷ 3 = 50 s. Le retard est bien de 50 - 25 = 25 s.",
                "4) De la magnitude 5 à la magnitude 7, la magnitude augmente de 2. L'énergie est multipliée par environ 30 pour chaque point, donc par environ 30 × 30 = 900, soit de l'ordre de 1 000.",
                "Résultat : la station est à 150 km du foyer, et le séisme de magnitude 7 libère environ 1 000 fois plus d'énergie que celui de magnitude 5.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un séisme, de son origine à son enregistrement.",
            items: [
              "En profondeur, des forces (contraintes) s'exercent sur les roches.",
              "Les roches se déforment lentement et accumulent de l'énergie.",
              "Les roches cassent brutalement au foyer, le long d'une faille.",
              "Des ondes sismiques partent du foyer dans toutes les directions.",
              "Les ondes atteignent la surface, d'abord à l'épicentre.",
              "Une station sismique lointaine enregistre les ondes sur un sismogramme.",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'origine d'un séisme ?",
              options: ["Une explosion de gaz dans une grande cavité souterraine", "La rupture brutale de roches en profondeur", "Le passage d'un orage violent au-dessus de la région", "L'effondrement des grottes de calcaire"],
              answer: 1,
              why: "Un séisme est dû à la rupture brutale de roches soumises à des contraintes, le long d'une faille.",
            },
            {
              q: "Comment appelle-t-on le point de la surface situé à la verticale du foyer ?",
              options: ["L'hypocentre", "La faille", "L'épicentre"],
              answer: 2,
              why: "L'épicentre est à la surface, juste au-dessus du foyer (aussi appelé hypocentre).",
            },
            {
              q: "Un séisme a une magnitude de 6. Que peut-on dire ?",
              options: ["Il a une seule magnitude, mais plusieurs intensités", "Son intensité vaut VI dans toutes les villes touchées", "Il a été ressenti au maximum à 6 km de l'épicentre", "Il a duré 6 minutes"],
              answer: 0,
              why: "La magnitude mesure l'énergie libérée : une seule valeur. L'intensité dépend du lieu et varie d'un endroit à l'autre.",
            },
            {
              q: "Par combien l'énergie libérée est-elle environ multipliée quand la magnitude augmente de 1 ?",
              options: ["Par 2", "Par 10", "Par 1 000", "Par 30"],
              answer: 3,
              why: "Chaque point de magnitude correspond à environ 30 fois plus d'énergie libérée.",
            },
            {
              q: "Comment les séismes sont-ils répartis à la surface du globe ?",
              options: ["Au hasard, partout", "Seulement au centre des continents", "Dans des zones étroites et actives", "Uniquement près des pôles"],
              answer: 2,
              why: "Les séismes se concentrent dans des zones étroites (autour du Pacifique, au milieu des océans, de la Méditerranée à l'Himalaya) qui marquent les limites des plaques.",
            },
          ],
          trap: "Confondre magnitude et intensité. La magnitude mesure l'énergie libérée au foyer (une seule valeur par séisme), alors que l'intensité, écrite en chiffres romains, décrit les effets en un lieu et change d'un endroit à l'autre.",
          method: "Pour ne plus confondre les deux mesures, associez « magnitude » à « moteur » (l'énergie du séisme, au foyer) et « intensité » à « impact » (ce que l'on observe en un lieu). Dans un exercice, demandez-vous toujours : la valeur dépend-elle du lieu ? Si oui, c'est une intensité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'volcanisme',
          title: 'Le volcanisme : éruptions effusives et explosives',
          minutes: 30,
          objectives: [
            "Expliquer qu'une éruption volcanique correspond à l'arrivée en surface d'un magma venu des profondeurs.",
            "Décrire et distinguer une éruption effusive et une éruption explosive.",
            "Relier le type d'éruption à la viscosité du magma et à sa richesse en gaz.",
            "Identifier quelques produits volcaniques : coulée de lave, cendres, bombes, nuée ardente.",
          ],
          course: [
            {
              heading: "D'où vient le magma ?",
              paragraphs: [
                "Un volcan est un relief formé par l'accumulation des produits émis lors des éruptions : laves, cendres, blocs. Il est relié aux profondeurs par une cheminée. Au sommet, ou sur ses flancs, une ouverture appelée cratère laisse sortir les produits de l'éruption.",
                "Contrairement à une idée répandue, l'intérieur de la Terre n'est pas une mer de roches fondues. À plusieurs dizaines de kilomètres de profondeur, dans certaines régions, une petite partie des roches du manteau fond : elle forme le magma, un mélange de roche fondue, de gaz dissous et de petits cristaux.",
                "Le magma, plus léger que les roches qui l'entourent, monte lentement. Il s'accumule souvent dans un réservoir situé à quelques kilomètres sous le volcan : la chambre magmatique. Lorsque la pression y devient trop forte, le magma remonte par la cheminée : c'est l'éruption. Une fois arrivé en surface et dégazé, le magma s'appelle la lave.",
              ],
              box: { label: "Définition", text: "Le magma est un mélange de roche fondue, de gaz dissous et de cristaux, formé en profondeur. Une éruption volcanique est l'arrivée en surface de ce magma. En surface, le magma qui s'écoule s'appelle la lave." },
            },
            {
              heading: "Les éruptions effusives : des coulées de lave fluide",
              paragraphs: [
                "Lors d'une éruption effusive, la lave est fluide : elle coule facilement, un peu comme du sirop chaud. Les gaz qu'elle contient s'échappent sans difficulté, en formant parfois des fontaines de lave spectaculaires. La lave s'écoule ensuite en longues coulées qui peuvent parcourir plusieurs kilomètres.",
                "Ces éruptions sont peu dangereuses pour les personnes, car les coulées avancent assez lentement pour que l'on puisse s'en éloigner, mais elles détruisent tout sur leur passage : routes, champs, maisons. Les volcans effusifs ont souvent des pentes douces, formées par l'empilement des coulées. Le Piton de la Fournaise, à La Réunion, et les volcans d'Hawaï sont des exemples de volcans effusifs.",
                "En refroidissant, ces laves fluides donnent une roche sombre très répandue : le basalte. Comme la lave refroidit vite à l'air libre, les cristaux n'ont pas le temps de grandir : on y trouve de tout petits cristaux et du verre.",
              ],
            },
            {
              heading: "Les éruptions explosives : cendres et nuées ardentes",
              paragraphs: [
                "Lors d'une éruption explosive, le magma est visqueux : il est épais et colle, comme de la pâte. Les gaz ne peuvent pas s'en échapper facilement. Ils restent piégés et leur pression augmente, jusqu'à ce que le magma soit pulvérisé en une violente explosion. C'est ce qui se passe quand on ouvre brutalement une bouteille de soda secouée.",
                "L'explosion projette des cendres et des blocs de toutes tailles (les plus gros, projetés en partie fondus, s'appellent des bombes volcaniques). Les cendres peuvent monter à plusieurs kilomètres d'altitude en formant un panache. Le magma trop épais peut aussi former au sommet un dôme qui bouche le cratère.",
                "Le phénomène le plus dangereux est la nuée ardente : un nuage brûlant de gaz, de cendres et de blocs qui dévale les pentes du volcan à plus de 100 km/h. Le 8 mai 1902, une nuée ardente de la montagne Pelée, en Martinique, a détruit la ville de Saint-Pierre et fait environ 28 000 victimes. Les volcans explosifs ont souvent la forme de cônes aux pentes raides.",
              ],
              box: { label: "À retenir", text: "Éruption effusive : magma fluide, gaz qui s'échappent facilement, coulées de lave. Éruption explosive : magma visqueux, gaz piégés, explosions, cendres, bombes et nuées ardentes, bien plus dangereuses pour les populations." },
            },
            {
              heading: "Pourquoi deux types d'éruptions ?",
              paragraphs: [
                "Le type d'éruption dépend surtout de deux propriétés du magma : sa viscosité (sa capacité à couler plus ou moins facilement) et sa richesse en gaz. Un magma fluide laisse partir ses gaz : l'éruption est effusive. Un magma visqueux et riche en gaz les retient : l'éruption est explosive.",
                "On peut le modéliser en classe : si l'on souffle de l'air avec une seringue dans de la purée très liquide, les bulles s'échappent doucement ; dans une purée très épaisse, l'air reste bloqué puis sort d'un coup en projetant de la purée. Un modèle a des limites : la purée n'est ni chaude ni faite de roche, mais elle permet de tester l'effet de la viscosité. Un même volcan peut d'ailleurs changer de comportement d'une éruption à l'autre.",
              ],
            },
          ],
          keyPoints: [
            "Le magma (roche fondue, gaz, cristaux) se forme en profondeur, puis s'accumule dans une chambre magmatique.",
            "Une éruption est l'arrivée du magma en surface ; en surface, il s'appelle la lave.",
            "Éruption effusive : lave fluide, gaz qui s'échappent facilement, coulées de lave (ex. Piton de la Fournaise).",
            "Éruption explosive : magma visqueux, gaz piégés, explosions, cendres, bombes et nuées ardentes (ex. montagne Pelée, 1902).",
            "Le type d'éruption dépend de la viscosité du magma et de sa richesse en gaz.",
            "Les nuées ardentes sont le danger volcanique le plus meurtrier.",
          ],
          example: {
            statement: "Lors d'une éruption, des témoins décrivent un énorme panache de cendres montant à plusieurs kilomètres d'altitude, puis un nuage brûlant qui dévale les pentes du volcan à grande vitesse. Aucune coulée de lave n'est observée. De quel type d'éruption s'agit-il ? Que peut-on dire du magma ?",
            solution: [
              "Je relève les indices : un panache de cendres et un nuage brûlant qui dévale les pentes, c'est-à-dire une nuée ardente ; pas de coulée de lave.",
              "Je rappelle le cours : les cendres et les nuées ardentes sont caractéristiques des éruptions explosives ; les coulées de lave, des éruptions effusives.",
              "J'en déduis le type d'éruption : il s'agit d'une éruption explosive.",
              "J'explique la cause : dans une éruption explosive, le magma est visqueux ; les gaz restent piégés, leur pression augmente et le magma est pulvérisé en explosant.",
              "Conclusion : c'est une éruption explosive, due à un magma visqueux et riche en gaz.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque observation dans la bonne colonne (éruption effusive ou éruption explosive) : a) fontaines de lave ; b) nuée ardente ; c) longue coulée de lave fluide ; d) panache de cendres ; e) dôme de lave qui bouche le cratère ; f) gaz qui s'échappent facilement.",
              hint: "Demandez-vous à chaque fois si le magma est fluide (il coule) ou visqueux (il retient les gaz).",
              solution: [
                "Éruption effusive : a) fontaines de lave ; c) longue coulée de lave fluide ; f) gaz qui s'échappent facilement.",
                "Éruption explosive : b) nuée ardente ; d) panache de cendres ; e) dôme de lave qui bouche le cratère.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On mesure le temps mis par deux laves pour s'écouler sur une même pente de 10 mètres. Lave A : 20 secondes. Lave B : 25 minutes. 1) Calculez la vitesse de chaque lave en mètres par minute. 2) Quelle lave est la plus visqueuse ? 3) Quel type d'éruption chaque lave donne-t-elle probablement ? Justifiez.",
              hint: "Convertissez 20 secondes en minutes avant de calculer : 60 secondes font 1 minute. Une lave visqueuse coule lentement.",
              solution: [
                "1) Lave A : 20 s = 20 ÷ 60 min, soit 1/3 de minute. Vitesse = 10 ÷ (1/3) = 10 × 3 = 30 m/min.",
                "Lave B : vitesse = 10 ÷ 25 = 0,4 m/min.",
                "2) La lave B est la plus lente (0,4 m/min contre 30 m/min) : c'est la plus visqueuse.",
                "3) La lave A, fluide, laisse partir ses gaz : elle donne probablement une éruption effusive, avec des coulées.",
                "La lave B, visqueuse, retient ses gaz : elle donne probablement une éruption explosive.",
                "Résultat : A, 30 m/min, fluide, effusive ; B, 0,4 m/min, visqueuse, explosive.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une classe réalise la modélisation suivante. Dans le bocal 1, on met de la purée très liquide ; dans le bocal 2, la même quantité de purée très épaisse. Dans chaque bocal, on injecte par le fond le même volume d'air, à la même vitesse, avec une seringue reliée à un tuyau. Bocal 1 : les bulles d'air remontent et crèvent doucement en surface. Bocal 2 : l'air reste bloqué, puis sort d'un coup en projetant de la purée hors du bocal. 1) Que représentent la purée et l'air injecté ? 2) Quel est le seul paramètre qui change entre les deux bocaux ? Pourquoi est-ce important ? 3) Quelle conclusion peut-on tirer ? 4) Donnez une limite de ce modèle.",
              hint: "Dans une expérience bien menée, un seul paramètre varie à la fois. Un modèle ressemble à la réalité sur certains points, mais pas sur tous.",
              solution: [
                "1) La purée représente le magma et l'air injecté représente les gaz du magma.",
                "2) Seule l'épaisseur de la purée, c'est-à-dire sa viscosité, change : la quantité, le volume d'air et la vitesse d'injection sont les mêmes. Comme un seul paramètre varie, on sait que la différence de résultat est due à lui.",
                "3) Dans un magma fluide, les gaz s'échappent facilement (éruption effusive) ; dans un magma visqueux, ils restent piégés puis s'échappent brutalement en projetant du magma (éruption explosive). La viscosité du magma détermine donc le type d'éruption.",
                "4) Limites possibles : la purée est froide alors que le magma est très chaud ; elle n'est pas faite de roche ; l'air est injecté par l'expérimentateur, alors que les gaz sont dissous dans le vrai magma ; les échelles de taille et de temps sont très différentes.",
                "Conclusion : le modèle montre que plus le magma est visqueux, plus l'éruption a de chances d'être explosive.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du volcanisme à sa définition.",
            pairs: [
              { left: "Magma", right: "Mélange de roche fondue, de gaz et de cristaux, formé en profondeur" },
              { left: "Chambre magmatique", right: "Réservoir où le magma s'accumule sous le volcan" },
              { left: "Coulée de lave", right: "Lave fluide qui s'écoule sur les pentes" },
              { left: "Nuée ardente", right: "Nuage brûlant de gaz, de cendres et de blocs qui dévale les pentes" },
              { left: "Viscosité", right: "Capacité d'un liquide à couler plus ou moins difficilement" },
              { left: "Cratère", right: "Ouverture au sommet du volcan par où sortent les produits" },
            ],
          },
          quiz: [
            {
              q: "Sous les volcans, l'intérieur de la Terre est-il une mer de roches fondues ?",
              options: ["Oui, une couche de roches fondues entoure toute la Terre", "Non, le magma ne se forme qu'à certains endroits", "Oui, mais seulement sous les océans"],
              answer: 1,
              why: "Le manteau est solide ; le magma ne se forme que localement, par la fusion d'une petite partie des roches.",
            },
            {
              q: "Quel phénomène est typique d'une éruption effusive ?",
              options: ["Une nuée ardente qui dévale les pentes", "Un panache de cendres à plusieurs kilomètres d'altitude", "Un dôme de lave", "Une coulée de lave fluide"],
              answer: 3,
              why: "Dans une éruption effusive, la lave fluide s'écoule en coulées et les gaz s'échappent facilement.",
            },
            {
              q: "Pourquoi une éruption est-elle explosive ?",
              options: ["Les gaz restent piégés dans un magma visqueux", "Le magma est très fluide et coule sur de longues distances", "Il pleut abondamment sur le sommet du volcan", "Le volcan est très ancien"],
              answer: 0,
              why: "Un magma visqueux retient ses gaz ; leur pression augmente jusqu'à l'explosion.",
            },
            {
              q: "Quel est le danger volcanique le plus meurtrier ?",
              options: ["Les coulées de lave", "Les fontaines de lave", "Les nuées ardentes", "Les fumées blanches"],
              answer: 2,
              why: "Les nuées ardentes dévalent les pentes à plus de 100 km/h et sont brûlantes : on ne peut pas les fuir à pied.",
            },
            {
              q: "Le Piton de la Fournaise produit surtout des coulées de lave fluide. Son magma est donc plutôt :",
              options: ["Fluide et pauvre en gaz retenus", "Visqueux et riche en gaz piégés", "Solide et froid", "Formé de cendres"],
              answer: 0,
              why: "Les coulées de lave fluide signalent un magma peu visqueux, qui laisse partir ses gaz : l'éruption est effusive.",
            },
          ],
          trap: "Penser que toutes les éruptions se ressemblent, ou que les plus dangereuses sont celles qui produisent des coulées de lave. Ce sont les éruptions explosives, avec leurs nuées ardentes, qui sont les plus meurtrières.",
          method: "Pour classer une éruption, cherchez un indice dans le document (coulée, cendres, panache, nuée ardente), reliez-le au type d'éruption, puis expliquez la cause avec deux mots clés : viscosité du magma et gaz piégés ou libérés.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tectonique-plaques',
          title: 'La tectonique des plaques',
          minutes: 35,
          objectives: [
            "Décrire la surface de la Terre comme un ensemble de plaques lithosphériques rigides en mouvement.",
            "Identifier les limites de plaques à partir de la répartition des séismes et des volcans.",
            "Distinguer les zones de divergence, de convergence (subduction et collision) et de coulissage.",
            "Calculer une vitesse de déplacement de plaque à partir de données.",
          ],
          course: [
            {
              heading: "Une surface découpée en plaques",
              paragraphs: [
                "La Terre est formée de couches successives : la croûte en surface, le manteau en dessous, puis le noyau au centre. La croûte et la partie la plus haute du manteau forment ensemble une couche rigide, épaisse d'environ 100 kilomètres en moyenne : la lithosphère.",
                "La lithosphère n'est pas d'un seul morceau. Elle est découpée en une douzaine de grandes plaques, et plusieurs plus petites, qui s'emboîtent comme les pièces d'un puzzle : plaque eurasienne, plaque africaine, plaque pacifique, plaque nord-américaine... Une plaque peut porter un continent, un océan, ou les deux à la fois.",
                "Sous la lithosphère se trouve l'asthénosphère, une partie du manteau qui reste solide mais se déforme très lentement, un peu comme de la pâte à modeler tiède. Les plaques rigides se déplacent sur cette couche plus déformable. C'est l'énergie de la chaleur interne de la Terre qui met tout cela en mouvement.",
              ],
              box: { label: "Définition", text: "La lithosphère est la couche rigide externe de la Terre (croûte et partie supérieure du manteau). Elle est découpée en plaques lithosphériques qui se déplacent les unes par rapport aux autres de quelques centimètres par an." },
            },
            {
              heading: "Des plaques qui bougent : les preuves",
              paragraphs: [
                "Au début du XXe siècle, le scientifique allemand Alfred Wegener remarque que les côtes de l'Afrique et de l'Amérique du Sud s'emboîtent comme deux pièces d'un puzzle, et que l'on trouve les mêmes fossiles et les mêmes roches de part et d'autre de l'Atlantique. Il propose en 1912 que les continents se déplacent : c'est la théorie de la dérive des continents. Elle est d'abord rejetée, car il ne peut pas expliquer ce qui ferait bouger les continents.",
                "Dans les années 1960, l'exploration des fonds océaniques apporte de nouvelles preuves. Les roches du fond des océans sont d'autant plus âgées qu'on s'éloigne des dorsales, de façon symétrique de chaque côté. Les plus vieilles n'ont pas plus de 200 millions d'années environ, bien moins que certaines roches des continents. La théorie de la tectonique des plaques naît alors.",
                "Aujourd'hui, on mesure directement les mouvements avec des stations GPS fixées au sol : leur position change de quelques centimètres par an, à peu près la vitesse à laquelle poussent vos ongles. C'est lent, mais sur des millions d'années, cela représente des milliers de kilomètres.",
              ],
            },
            {
              heading: "Trois types de limites entre les plaques",
              paragraphs: [
                "Les limites des plaques sont repérées par les séismes et les volcans, qui s'y concentrent. Il en existe trois types. Dans les zones de divergence, deux plaques s'écartent. Au fond des océans, du magma remonte entre elles et forme une nouvelle lithosphère océanique : c'est une dorsale, une chaîne de montagnes sous-marine parcourue de volcans. L'océan Atlantique s'élargit ainsi de quelques centimètres par an. L'Islande est un morceau de dorsale qui dépasse de l'océan.",
                "Dans les zones de convergence, deux plaques se rapprochent. Si l'une porte un océan, elle plonge sous l'autre et s'enfonce dans le manteau : c'est la subduction, marquée par une fosse océanique profonde, de nombreux séismes et des volcans explosifs (Japon, Andes, Antilles). Si deux continents se rencontrent, aucun ne s'enfonce vraiment : les roches se plissent et s'empilent, c'est la collision, qui forme de hautes chaînes de montagnes comme l'Himalaya ou les Alpes.",
                "Enfin, dans les zones de coulissage, deux plaques glissent l'une à côté de l'autre, sans s'écarter ni se rapprocher. Il s'y produit des séismes, mais pas de volcans. La faille de San Andreas, en Californie, en est l'exemple le plus connu.",
              ],
              box: { label: "À retenir", text: "Divergence : les plaques s'écartent, une dorsale fabrique de la lithosphère océanique. Convergence : les plaques se rapprochent, par subduction (une plaque océanique plonge) ou par collision (formation de montagnes). Coulissage : les plaques glissent côte à côte." },
            },
            {
              heading: "Un seul modèle pour tout expliquer",
              paragraphs: [
                "La tectonique des plaques est un modèle scientifique : elle relie entre eux des phénomènes qui semblaient séparés. Les séismes se produisent là où les plaques frottent, se tordent ou cassent. Les volcans apparaissent là où du magma se forme : aux dorsales et au-dessus des zones de subduction. Les grandes chaînes de montagnes naissent là où les plaques se rapprochent.",
                "Ce modèle permet aussi de calculer des vitesses : si une roche du fond océanique s'est formée à la dorsale il y a 3 millions d'années et se trouve aujourd'hui à 60 km de celle-ci, elle s'est éloignée de 60 km en 3 millions d'années, soit 2 cm par an en moyenne.",
              ],
              box: { label: "Formule", text: "vitesse = distance ÷ durée. Pensez aux conversions : 1 km = 1 000 m = 100 000 cm ; 1 million d'années = 1 000 000 ans." },
            },
          ],
          keyPoints: [
            "La lithosphère, rigide, est découpée en plaques qui se déplacent sur l'asthénosphère, solide mais déformable.",
            "Les plaques se déplacent de quelques centimètres par an, mesurés aujourd'hui par GPS.",
            "Les limites des plaques sont marquées par la concentration des séismes et des volcans.",
            "Divergence : écartement des plaques au niveau des dorsales, où se forme la lithosphère océanique.",
            "Convergence : subduction (une plaque océanique plonge dans le manteau) ou collision (formation de montagnes).",
            "Coulissage : deux plaques glissent côte à côte, avec des séismes mais sans volcans.",
          ],
          example: {
            statement: "Données simplifiées. Deux points des côtes de l'Afrique et de l'Amérique du Sud, autrefois collés, sont aujourd'hui séparés de 4 200 km. On admet que l'Atlantique sud s'est ouvert à une vitesse moyenne constante de 3 cm par an. Depuis combien de temps l'ouverture a-t-elle commencé ?",
            solution: [
              "Je relève les données : distance = 4 200 km ; vitesse = 3 cm par an.",
              "Je convertis la distance dans la même unité que la vitesse : 1 km = 100 000 cm, donc 4 200 km = 4 200 × 100 000 = 420 000 000 cm.",
              "J'utilise la relation durée = distance ÷ vitesse : 420 000 000 ÷ 3 = 140 000 000 ans.",
              "Je vérifie : 140 000 000 × 3 = 420 000 000 cm, soit bien 4 200 km.",
              "Conclusion : avec ces données, l'ouverture a commencé il y a environ 140 millions d'années, ce qui montre qu'un déplacement de quelques centimètres par an suffit, en un temps très long, à créer un océan.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque lieu, indiquez le type de limite de plaques : divergence, subduction, collision ou coulissage. a) L'Islande, traversée par une dorsale. b) Le Japon, avec une fosse océanique profonde et des volcans explosifs. c) L'Himalaya, où l'Inde s'enfonce dans l'Asie en formant de très hautes montagnes. d) La Californie, le long de la faille de San Andreas, où les plaques glissent côte à côte.",
              hint: "Demandez-vous si les plaques s'écartent, se rapprochent ou glissent ; puis, si elles se rapprochent, si une plaque océanique plonge ou si deux continents se rencontrent.",
              solution: [
                "a) L'Islande : divergence (les plaques s'écartent de part et d'autre de la dorsale).",
                "b) Le Japon : convergence par subduction (une plaque océanique plonge sous une autre, d'où la fosse et les volcans explosifs).",
                "c) L'Himalaya : convergence par collision (deux continents se rencontrent et les roches se plissent).",
                "d) La Californie : coulissage (les plaques glissent l'une contre l'autre).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Au fond d'un océan, on a daté des roches à différentes distances d'une dorsale, du même côté. À 0 km : 0 million d'années. À 40 km : 2 millions d'années. À 80 km : 4 millions d'années. À 120 km : 6 millions d'années. 1) Comment l'âge des roches varie-t-il avec la distance à la dorsale ? 2) Calculez la vitesse moyenne d'éloignement de la plaque, en km par million d'années, puis en cm par an. 3) De l'autre côté de la dorsale, l'autre plaque s'éloigne à la même vitesse. De combien l'océan s'élargit-il chaque année ?",
              hint: "1 km par million d'années = 100 000 cm en 1 000 000 ans, soit 0,1 cm par an.",
              solution: [
                "1) Plus on s'éloigne de la dorsale, plus les roches sont âgées : elles se sont formées à la dorsale, puis ont été éloignées par le mouvement de la plaque.",
                "2) Vitesse = distance ÷ durée = 120 ÷ 6 = 20 km par million d'années (on trouve la même valeur avec 40 ÷ 2 ou 80 ÷ 4).",
                "Conversion : 20 km = 2 000 000 cm, parcourus en 1 000 000 ans, donc 2 000 000 ÷ 1 000 000 = 2 cm par an.",
                "3) Chaque plaque s'éloigne de la dorsale de 2 cm par an, dans des sens opposés : l'océan s'élargit de 2 + 2 = 4 cm par an.",
                "Résultat : 20 km par million d'années, soit 2 cm par an pour chaque plaque, et un océan qui s'élargit de 4 cm par an.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un élève affirme : « Sous les plaques, il y a une couche de lave liquide sur laquelle elles flottent, et c'est cette lave qui sort par tous les volcans. » 1) Relevez deux erreurs dans cette affirmation. 2) Rédigez une réponse correcte en trois ou quatre phrases. 3) Expliquez pourquoi les séismes et les volcans ne se répartissent pas au hasard à la surface du globe.",
              hint: "Pensez à l'état de l'asthénosphère, à la façon dont le magma se forme, et à l'endroit où se produisent les mouvements entre plaques.",
              solution: [
                "1) Première erreur : sous la lithosphère, l'asthénosphère n'est pas liquide ; elle est solide mais se déforme très lentement. Deuxième erreur : il n'existe pas de réservoir de lave sous toute la planète ; le magma se forme seulement à certains endroits, par la fusion d'une petite partie des roches.",
                "2) Réponse correcte : la lithosphère, rigide, est découpée en plaques qui se déplacent de quelques centimètres par an sur l'asthénosphère, une partie du manteau solide mais déformable. Le magma ne se forme que localement, surtout au niveau des dorsales et au-dessus des zones de subduction. Il s'accumule dans des chambres magmatiques avant de sortir lors des éruptions.",
                "3) Les séismes et les volcans se concentrent aux limites des plaques, là où elles s'écartent, se rapprochent ou glissent l'une contre l'autre : c'est là que les roches subissent des contraintes et cassent, et là que du magma se forme. À l'intérieur des plaques, il y a beaucoup moins de mouvements, donc beaucoup moins de séismes et de volcans.",
                "Conclusion : la répartition des séismes et des volcans dessine les limites des plaques lithosphériques.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la tectonique des plaques.",
            statements: [
              { text: "Les plaques flottent sur une couche de lave liquide.", true: false, why: "L'asthénosphère est solide ; elle se déforme lentement, mais n'est pas liquide." },
              { text: "Les plaques se déplacent de quelques centimètres par an.", true: true, why: "C'est l'ordre de grandeur mesuré par les stations GPS, comparable à la pousse des ongles." },
              { text: "Une plaque porte toujours un seul continent.", true: false, why: "Une plaque peut porter un continent, un océan, ou les deux à la fois." },
              { text: "Au niveau d'une dorsale, de la nouvelle lithosphère océanique se forme.", true: true, why: "Du magma remonte entre les deux plaques qui s'écartent et forme une nouvelle lithosphère." },
              { text: "La collision de deux continents forme des chaînes de montagnes.", true: true, why: "Les roches se plissent et s'empilent : c'est ainsi que se sont formés l'Himalaya et les Alpes." },
              { text: "Le long d'une zone de coulissage, on trouve de nombreux volcans.", true: false, why: "Les plaques glissent côte à côte : il y a des séismes, mais pas de formation de magma, donc pas de volcans." },
              { text: "Wegener a mesuré le déplacement des continents avec des GPS.", true: false, why: "Wegener a proposé sa théorie en 1912 à partir d'indices (forme des côtes, fossiles, roches) ; le GPS n'existait pas." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que la lithosphère ?",
              options: ["La couche rigide externe, formée de la croûte et du haut du manteau", "Le noyau métallique situé au centre de la Terre", "Une couche de magma liquide qui recouvre tout le manteau terrestre", "L'atmosphère de la Terre"],
              answer: 0,
              why: "La lithosphère est rigide ; elle comprend la croûte et la partie supérieure du manteau, et elle est découpée en plaques.",
            },
            {
              q: "Que se passe-t-il au niveau d'une zone de subduction ?",
              options: ["Deux plaques s'écartent de part et d'autre d'une dorsale", "Une plaque océanique plonge sous une autre plaque", "Deux plaques glissent côte à côte", "Aucun séisme ne se produit"],
              answer: 1,
              why: "Dans une subduction, la plaque océanique s'enfonce dans le manteau, ce qui provoque séismes et volcans explosifs.",
            },
            {
              q: "Quel relief se forme lorsque deux continents entrent en collision ?",
              options: ["Une dorsale parcourue de volcans", "Une fosse océanique très profonde", "Une plaine", "Une chaîne de montagnes"],
              answer: 3,
              why: "Lors d'une collision, les roches se plissent et s'empilent, formant des montagnes comme l'Himalaya.",
            },
            {
              q: "Une roche formée à une dorsale il y a 5 millions d'années se trouve à 50 km de celle-ci. Quelle est la vitesse de la plaque ?",
              options: ["1 cm par an", "10 cm par an", "5 cm par an"],
              answer: 0,
              why: "50 km en 5 millions d'années, c'est 10 km par million d'années, soit 1 000 000 cm en 1 000 000 ans : 1 cm par an.",
            },
            {
              q: "Comment repère-t-on les limites des plaques sur une carte ?",
              options: ["Par le tracé des frontières entre les pays du monde", "Par le dessin des côtes de tous les continents", "Par la concentration des séismes et des volcans", "Par les grands fleuves"],
              answer: 2,
              why: "Les séismes et les volcans se concentrent là où les plaques interagissent, c'est-à-dire à leurs limites.",
            },
          ],
          trap: "Confondre plaque et continent, ou croire que les plaques flottent sur une couche liquide. Une plaque peut porter un océan et un continent, et elle se déplace sur l'asthénosphère, qui est solide mais déformable.",
          method: "Pour identifier une limite de plaques, posez-vous deux questions dans l'ordre : les plaques s'écartent-elles, se rapprochent-elles ou glissent-elles ? Puis, si elles se rapprochent, y a-t-il un océan qui plonge (subduction) ou deux continents qui se heurtent (collision) ? Pour un calcul de vitesse, convertissez toujours les unités avant de diviser.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES RISQUES NATURELS                                                 */
    /* ==================================================================== */
    {
      id: 'risques-naturels',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'alea-enjeux-risque',
          title: 'Aléa, enjeux et risque',
          minutes: 25,
          objectives: [
            "Définir les notions d'aléa, d'enjeux, de vulnérabilité et de risque naturel.",
            "Expliquer qu'un risque naturel naît de la rencontre d'un aléa et d'enjeux vulnérables.",
            "Comparer le niveau de risque de deux territoires à partir de documents.",
            "Citer les principaux risques naturels auxquels la France est exposée.",
          ],
          course: [
            {
              heading: "L'aléa : un phénomène naturel possible",
              paragraphs: [
                "Les séismes, les éruptions volcaniques, les inondations, les tempêtes ou les glissements de terrain sont des phénomènes naturels. Ils existaient bien avant l'apparition des êtres humains, et ils se produiraient même si personne ne vivait sur Terre.",
                "On appelle aléa la possibilité qu'un phénomène naturel, d'une certaine intensité, se produise dans un lieu donné. L'aléa se décrit par deux questions : à quelle fréquence le phénomène se produit-il (est-il probable ou rare ?) et avec quelle force ? Par exemple, l'aléa sismique est fort aux Antilles, situées près d'une limite de plaques, et très faible dans le Bassin parisien.",
              ],
              box: { label: "Définition", text: "L'aléa est la possibilité qu'un phénomène naturel d'une intensité donnée se produise en un lieu donné. Il dépend de la probabilité du phénomène et de sa force." },
            },
            {
              heading: "Les enjeux et leur vulnérabilité",
              paragraphs: [
                "Les enjeux sont tout ce qui peut être touché par le phénomène naturel : les personnes, les habitations, les écoles, les hôpitaux, les routes, les usines, les champs, mais aussi le patrimoine et l'environnement. Une grande ville compte beaucoup plus d'enjeux qu'une vallée de montagne inhabitée.",
                "Tous les enjeux ne sont pas aussi fragiles. La vulnérabilité mesure à quel point ils risquent d'être endommagés. Elle dépend de la qualité des constructions, de la préparation des habitants, de l'organisation des secours, de l'information et des moyens dont dispose le pays. Une maison construite selon les règles parasismiques est beaucoup moins vulnérable qu'une maison mal bâtie.",
              ],
              box: { label: "Définition", text: "Les enjeux sont les personnes, les biens, les activités et l'environnement exposés à un phénomène naturel. Leur vulnérabilité mesure à quel point ils peuvent être endommagés." },
            },
            {
              heading: "Le risque : la rencontre d'un aléa et d'enjeux",
              paragraphs: [
                "Il y a risque naturel lorsqu'un aléa menace des enjeux. Sans enjeux, pas de risque : un très fort séisme dans un désert inhabité est un phénomène naturel spectaculaire, mais il ne fait ni victime ni dégât. Sans aléa, pas de risque non plus : une ville située loin de toute zone sismique ne court pas de risque sismique important.",
                "Le niveau du risque dépend donc à la fois de l'aléa et de la vulnérabilité des enjeux. On le résume souvent par l'écriture : risque = aléa × vulnérabilité des enjeux. Ce n'est pas un vrai calcul, mais une façon de retenir que si l'un des deux termes est nul, le risque l'est aussi, et que si les deux sont forts, le risque est très élevé.",
                "Un exemple montre l'importance de la vulnérabilité. Le 12 janvier 2010, un séisme de magnitude 7,0 frappe Haïti, près de la capitale Port-au-Prince : il fait plus de 100 000 morts. Le 27 février 2010, un séisme de magnitude 8,8, bien plus puissant, frappe le Chili : il fait quelques centaines de victimes. Le Chili applique depuis longtemps des règles de construction parasismique et prépare sa population ; en Haïti, beaucoup de bâtiments n'étaient pas conçus pour résister aux secousses.",
              ],
              box: { label: "À retenir", text: "Risque = aléa × vulnérabilité des enjeux. On parle de risque majeur lorsqu'un phénomène est peu fréquent mais peut être très grave : nombreuses victimes, dégâts importants, société dépassée." },
            },
            {
              heading: "Les risques naturels en France",
              paragraphs: [
                "La France, en métropole comme en outre-mer, est exposée à plusieurs risques naturels. Les inondations sont le risque naturel le plus répandu dans le pays. On trouve aussi les tempêtes, les mouvements de terrain (glissements, éboulements), les avalanches en montagne, les feux de forêt, et les cyclones dans les territoires d'outre-mer tropicaux.",
                "Pour le risque sismique, le territoire est découpé depuis 2011 en cinq zones, de la zone 1 (sismicité très faible) à la zone 5 (sismicité forte) : la Guadeloupe et la Martinique sont en zone 5. Pour le risque volcanique, trois volcans actifs sont surveillés en permanence : la montagne Pelée en Martinique, la Soufrière en Guadeloupe et le Piton de la Fournaise à La Réunion.",
              ],
            },
          ],
          keyPoints: [
            "L'aléa est la possibilité qu'un phénomène naturel d'une certaine intensité se produise en un lieu donné.",
            "Les enjeux sont les personnes, les biens, les activités et l'environnement exposés.",
            "La vulnérabilité mesure la fragilité des enjeux : constructions, préparation, secours, moyens du pays.",
            "Risque = aléa × vulnérabilité des enjeux : sans aléa ou sans enjeux, il n'y a pas de risque.",
            "Un même aléa peut faire des bilans très différents selon la vulnérabilité (Haïti et Chili, 2010).",
            "En France : inondations, tempêtes, mouvements de terrain, séismes (Antilles en zone 5), volcans d'outre-mer.",
          ],
          example: {
            statement: "Un séisme de magnitude 6,5 se produit dans une région désertique, sans habitant, à 200 km de toute ville. Un autre séisme, de magnitude 6,0, se produit sous une ville de 500 000 habitants aux constructions fragiles. Lequel de ces deux événements représente le risque le plus élevé ? Justifiez avec le vocabulaire du cours.",
            solution: [
              "J'identifie l'aléa : dans les deux cas, c'est un séisme ; il est un peu plus fort dans le désert (magnitude 6,5 contre 6,0).",
              "J'identifie les enjeux : dans le désert, il n'y a ni habitant ni construction, donc presque aucun enjeu ; sous la ville, il y a 500 000 habitants, des logements, des routes, des écoles.",
              "J'évalue la vulnérabilité : les constructions de la ville sont fragiles, donc les enjeux sont très vulnérables.",
              "J'applique la relation risque = aléa × vulnérabilité des enjeux : dans le désert, les enjeux sont presque nuls, donc le risque aussi ; dans la ville, aléa et vulnérabilité sont forts.",
              "Conclusion : le séisme sous la ville représente le risque le plus élevé, même s'il est un peu moins puissant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque élément dans la bonne catégorie (aléa, enjeux ou vulnérabilité) : a) une crue possible de la rivière tous les dix ans ; b) les 3 000 habitants du village ; c) des maisons construites sans fondations solides ; d) l'école et la mairie ; e) un séisme possible de magnitude 6 dans la région ; f) l'absence de plan d'évacuation.",
              hint: "L'aléa est le phénomène naturel ; les enjeux sont ce qui peut être touché ; la vulnérabilité dit à quel point c'est fragile.",
              solution: [
                "Aléa : a) une crue possible de la rivière tous les dix ans ; e) un séisme possible de magnitude 6 dans la région.",
                "Enjeux : b) les 3 000 habitants du village ; d) l'école et la mairie.",
                "Vulnérabilité : c) des maisons construites sans fondations solides ; f) l'absence de plan d'évacuation (ces éléments augmentent la fragilité des enjeux).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Deux villes, Montval et Rivebelle, sont situées dans la même zone sismique : elles ont le même aléa. Montval compte 20 000 habitants ; 80 % de ses bâtiments respectent les règles parasismiques et un exercice d'évacuation a lieu chaque année dans les écoles. Rivebelle compte 20 000 habitants ; 15 % de ses bâtiments respectent les règles parasismiques et il n'y a jamais d'exercice. 1) Calculez le nombre de bâtiments parasismiques dans chaque ville, sachant que chacune compte 6 000 bâtiments. 2) Quelle ville est la plus vulnérable ? Justifiez. 3) Dans quelle ville le risque sismique est-il le plus élevé ?",
              hint: "Pour calculer 80 % de 6 000, multipliez 6 000 par 80 puis divisez par 100. Ensuite, comparez la vulnérabilité, puisque l'aléa est le même.",
              solution: [
                "1) Montval : 6 000 × 80 ÷ 100 = 4 800 bâtiments parasismiques. Rivebelle : 6 000 × 15 ÷ 100 = 900 bâtiments parasismiques.",
                "2) Rivebelle est la plus vulnérable : elle a beaucoup moins de bâtiments parasismiques (900 contre 4 800) et sa population n'est pas entraînée à évacuer.",
                "3) Les deux villes ont le même aléa et le même nombre d'habitants, mais les enjeux de Rivebelle sont plus vulnérables.",
                "Résultat : le risque sismique est plus élevé à Rivebelle, car risque = aléa × vulnérabilité des enjeux.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Une préfecture note quatre sites de 1 (faible) à 3 (fort) pour l'aléa et pour la vulnérabilité des enjeux. Site A, une vallée inhabitée au pied d'un volcan : aléa 3, vulnérabilité des enjeux 1. Site B, une petite ville près d'une faille : aléa 2, vulnérabilité 3. Site C, une ville côtière en zone sismique forte, aux constructions anciennes : aléa 3, vulnérabilité 3. Site D, une grande ville très peuplée mais loin de toute faille : aléa 1, vulnérabilité 3. 1) Calculez un score de risque pour chaque site en multipliant les deux notes. 2) Classez les sites du risque le plus fort au plus faible. 3) Les sites A et D ont le même score : expliquez pourquoi, pour des raisons différentes. 4) Pour le site C, peut-on diminuer l'aléa ? Proposez deux mesures pour réduire le risque.",
              hint: "On ne peut pas empêcher un séisme ou une éruption : pour réduire le risque, il faut agir sur la vulnérabilité des enjeux.",
              solution: [
                "1) Site A : 3 × 1 = 3. Site B : 2 × 3 = 6. Site C : 3 × 3 = 9. Site D : 1 × 3 = 3.",
                "2) Classement : C (9), puis B (6), puis A et D à égalité (3).",
                "3) Au site A, l'aléa est fort, mais il n'y a presque pas d'enjeux exposés. Au site D, les enjeux sont nombreux et vulnérables, mais l'aléa est faible. Le résultat est le même, mais pour des raisons opposées.",
                "4) On ne peut pas diminuer l'aléa : les séismes ne se commandent pas. On peut en revanche réduire la vulnérabilité, par exemple en renforçant ou en reconstruisant les bâtiments anciens selon les règles parasismiques, et en informant la population et en organisant des exercices d'évacuation.",
                "Conclusion : le site C est prioritaire, et l'on y réduit le risque en agissant sur la vulnérabilité des enjeux.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Aléa, enjeux et risque.",
            statements: [
              { text: "Un séisme très puissant dans un désert inhabité représente un risque majeur.", true: false, why: "Sans enjeux exposés, il n'y a pas de risque, même si l'aléa est fort." },
              { text: "Deux séismes de même magnitude peuvent faire des bilans très différents.", true: true, why: "Le bilan dépend aussi de la vulnérabilité des enjeux : constructions, préparation, secours." },
              { text: "On peut empêcher un séisme de se produire.", true: false, why: "L'aléa sismique est naturel : on ne peut pas l'empêcher, seulement réduire la vulnérabilité." },
              { text: "Construire des bâtiments parasismiques réduit la vulnérabilité.", true: true, why: "Des bâtiments qui résistent aux secousses rendent les enjeux moins fragiles, donc le risque plus faible." },
              { text: "Les inondations sont le risque naturel le plus répandu en France.", true: true, why: "De nombreuses communes sont situées près de cours d'eau ou sur des côtes exposées." },
              { text: "Le mot « aléa » désigne les dégâts causés par une catastrophe.", true: false, why: "L'aléa est le phénomène naturel possible ; les dégâts dépendent des enjeux et de leur vulnérabilité." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un aléa ?",
              options: ["Le nombre total de victimes et de blessés après une catastrophe", "La possibilité qu'un phénomène naturel se produise en un lieu", "Le prix des réparations après un séisme", "Un bâtiment construit pour résister"],
              answer: 1,
              why: "L'aléa est la possibilité qu'un phénomène naturel d'une certaine intensité se produise en un lieu donné.",
            },
            {
              q: "Lequel de ces éléments est un enjeu ?",
              options: ["Une coulée de lave qui descend les pentes", "La magnitude mesurée d'un séisme lointain", "Un hôpital situé près d'un volcan"],
              answer: 2,
              why: "Les enjeux sont les personnes, les biens et les activités exposés, comme un hôpital.",
            },
            {
              q: "Dans quel cas le risque est-il le plus élevé ?",
              options: ["Aléa fort et enjeux très vulnérables", "Aléa fort et aucun enjeu", "Aléa nul et enjeux très vulnérables", "Aléa faible et enjeux bien protégés par des digues"],
              answer: 0,
              why: "Risque = aléa × vulnérabilité des enjeux : il est maximal quand les deux sont forts.",
            },
            {
              q: "En 2010, pourquoi le séisme d'Haïti (magnitude 7,0) a-t-il fait bien plus de victimes que celui du Chili (magnitude 8,8) ?",
              options: ["Parce qu'il était plus puissant", "Parce qu'il s'est produit au fond de l'océan Atlantique", "Parce qu'il n'y avait pas de faille", "Parce que ses enjeux étaient plus vulnérables"],
              answer: 3,
              why: "Le séisme d'Haïti était moins puissant, mais beaucoup de bâtiments n'étaient pas conçus pour résister aux secousses.",
            },
            {
              q: "Quels territoires français sont classés en zone de sismicité forte (zone 5) ?",
              options: ["La Bretagne, la Normandie et les Hauts-de-France", "Le Bassin parisien", "La Guadeloupe et la Martinique", "La Corse"],
              answer: 2,
              why: "Les Antilles sont situées près d'une limite de plaques, où les séismes sont fréquents et peuvent être forts.",
            },
          ],
          trap: "Confondre l'aléa et le risque, en pensant qu'un phénomène naturel puissant est forcément un risque majeur. Il n'y a risque que si des enjeux sont exposés, et le risque dépend autant de leur vulnérabilité que de la force du phénomène.",
          method: "Face à un document sur une catastrophe, faites trois colonnes au brouillon : aléa (quel phénomène, quelle force ?), enjeux (qui et quoi est exposé ?), vulnérabilité (est-ce fragile ou protégé ?). Votre réponse se construit ensuite en reliant ces trois colonnes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'prevention-protection',
          title: 'Prévenir et se protéger des séismes et des éruptions',
          minutes: 30,
          objectives: [
            "Expliquer comment la surveillance d'un volcan permet d'anticiper une éruption, et pourquoi on ne sait pas prévoir la date d'un séisme.",
            "Identifier des mesures de prévention : information, éducation, règles d'urbanisme.",
            "Décrire des mesures de protection, comme la construction parasismique.",
            "Appliquer les consignes de sécurité avant, pendant et après un séisme ou une éruption.",
          ],
          course: [
            {
              heading: "Prévoir : surveiller les volcans et les zones sismiques",
              paragraphs: [
                "Prévoir, c'est essayer d'annoncer à l'avance où et quand un phénomène va se produire. Pour les volcans, c'est souvent possible : avant une éruption, le magma qui monte provoque des signes, appelés signes précurseurs. Les volcans actifs sont donc surveillés jour et nuit par des observatoires. En France, la montagne Pelée, la Soufrière et le Piton de la Fournaise ont chacun leur observatoire.",
                "Les scientifiques suivent plusieurs indices. Le nombre de petits séismes sous le volcan augmente, car le magma fracture les roches en montant. Le volcan gonfle de quelques centimètres, ce que mesurent des GPS et des inclinomètres. La quantité et la composition des gaz qui s'échappent changent, et la température du sol peut augmenter. Quand ces signes s'accumulent, les autorités peuvent alerter et faire évacuer la population à temps.",
                "Pour les séismes, en revanche, on ne sait pas prévoir la date ni l'heure. On sait seulement où ils sont probables, grâce aux cartes de l'aléa sismique et à l'étude des séismes passés. La prévention et la protection sont donc essentielles.",
              ],
              box: { label: "Repère", text: "Signes précurseurs d'une éruption : multiplication des petits séismes sous le volcan, gonflement du volcan, modification des gaz émis, hausse de la température. Pour un séisme, on connaît les zones à risque, mais pas la date." },
            },
            {
              heading: "Prévenir : informer, éduquer, organiser",
              paragraphs: [
                "Prévenir, c'est agir avant la catastrophe pour réduire la vulnérabilité. La première mesure est l'information. Dans chaque commune exposée, la mairie publie un document qui présente les risques et les bons réflexes : le DICRIM (document d'information communal sur les risques majeurs). Les habitants peuvent aussi être alertés par des sirènes ou, depuis 2022, par des messages FR-Alert envoyés sur les téléphones portables.",
                "La deuxième mesure est l'éducation. Dans les écoles, les collèges et les lycées, un plan particulier de mise en sûreté (PPMS) prévoit l'organisation en cas d'accident majeur, et des exercices permettent d'apprendre les bons gestes. Chaque famille peut aussi préparer un kit d'urgence : eau, lampe, radio à piles, trousse de secours, copies des papiers importants.",
                "La troisième mesure est l'urbanisme. Des plans de prévention des risques interdisent ou limitent les constructions dans les zones les plus dangereuses : au pied d'un volcan dans les vallées où s'écoulent les nuées ardentes, sur une faille active ou sur un terrain instable.",
              ],
            },
            {
              heading: "Se protéger : construire parasismique et adopter les bons gestes",
              paragraphs: [
                "La plupart des victimes d'un séisme sont tuées par l'effondrement des bâtiments, pas par les secousses elles-mêmes. Dans les zones sismiques, la loi impose donc des règles de construction parasismique. Les fondations sont solides et ancrées dans le sol. Les murs, les planchers et le toit sont reliés entre eux par des chaînages en béton armé, pour que le bâtiment bouge d'un seul bloc sans se disloquer. On préfère des formes simples et symétriques, et l'on sépare les bâtiments voisins par des joints pour qu'ils ne se cognent pas. Certains bâtiments reposent même sur des appuis en caoutchouc qui absorbent une partie des secousses.",
                "Pendant un séisme, à l'intérieur, abritez-vous sous un meuble solide (une table, un bureau), loin des fenêtres, et protégez votre tête. Ne sortez pas pendant les secousses. À l'extérieur, éloignez-vous des bâtiments, des arbres et des fils électriques. Après les secousses, évacuez calmement par les escaliers (jamais par l'ascenseur), coupez le gaz et l'électricité si vous le pouvez, n'allumez pas de flamme, et suivez les consignes des autorités. Près de la mer, gagnez les hauteurs : un séisme peut provoquer un tsunami.",
                "Lors d'une éruption, la meilleure protection est de respecter les ordres d'évacuation et de ne jamais s'approcher des zones interdites. Contre les cendres, il faut se protéger le nez, la bouche et les yeux (masque, lunettes) et rester à l'abri.",
              ],
              box: { label: "Règle", text: "Séisme. Pendant : s'abriter sous un meuble solide, loin des fenêtres, sans sortir. Après : évacuer par les escaliers, couper gaz et électricité, ne pas allumer de flamme, s'éloigner des côtes, écouter les consignes. Éruption : respecter l'évacuation et se protéger des cendres." },
            },
          ],
          keyPoints: [
            "Prévoir : les volcans actifs sont surveillés en permanence ; les signes précurseurs permettent souvent d'anticiper une éruption.",
            "On sait où les séismes sont probables, mais on ne sait pas prévoir leur date.",
            "Prévenir : informer (DICRIM, alertes), éduquer (PPMS, exercices), limiter les constructions dans les zones dangereuses.",
            "Se protéger : construire parasismique (fondations, chaînages, formes simples, joints).",
            "Pendant un séisme : s'abriter sous un meuble solide, loin des fenêtres ; après : évacuer sans ascenseur.",
            "Pendant une éruption : respecter l'évacuation et se protéger des cendres.",
          ],
          example: {
            statement: "Vous êtes en classe, au deuxième étage du collège, quand le sol se met à trembler fortement. Que devez-vous faire pendant puis après les secousses ? Justifiez chaque geste.",
            solution: [
              "Pendant les secousses, je m'abrite sous ma table et je protège ma tête avec mes bras : la table me protège des objets et des débris qui peuvent tomber.",
              "Je reste loin des fenêtres, car les vitres peuvent se briser.",
              "Je ne sors pas en courant pendant les secousses : c'est en sortant que l'on risque d'être blessé par des chutes de débris ou dans les escaliers.",
              "Quand les secousses s'arrêtent, j'évacue calmement avec la classe, par les escaliers et jamais par l'ascenseur, qui peut se bloquer.",
              "Je rejoins le point de rassemblement, loin des bâtiments, et j'écoute les consignes des adultes et des autorités, car d'autres secousses (des répliques) peuvent suivre.",
              "Conclusion : pendant, je m'abrite ; après, j'évacue calmement et je suis les consignes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque mesure, indiquez s'il s'agit de prévision, de prévention ou de protection : a) installer des GPS sur les pentes d'un volcan pour mesurer son gonflement ; b) distribuer le DICRIM aux habitants ; c) relier les murs d'une maison par des chaînages en béton armé ; d) organiser un exercice d'évacuation au collège ; e) compter chaque jour les petits séismes sous un volcan ; f) poser un bâtiment sur des appuis en caoutchouc.",
              hint: "La prévision cherche à annoncer le phénomène ; la prévention informe et organise ; la protection rend les constructions et les personnes moins exposées aux dégâts.",
              solution: [
                "Prévision : a) GPS sur les pentes du volcan ; e) comptage des petits séismes. Ces mesures servent à repérer les signes précurseurs.",
                "Prévention : b) distribution du DICRIM ; d) exercice d'évacuation. Ces mesures informent et préparent la population.",
                "Protection : c) chaînages en béton armé ; f) appuis en caoutchouc. Ces mesures permettent aux bâtiments de résister aux secousses.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Un observatoire surveille un volcan. Nombre de petits séismes enregistrés sous le volcan : lundi 6, mardi 14, mercredi 45, jeudi 160. Entre lundi et jeudi, un GPS placé sur le flanc du volcan s'est soulevé de 3 cm. 1) Décrivez l'évolution du nombre de séismes. Par combien a-t-il été multiplié entre mardi et jeudi, environ ? 2) Que signifient ces deux observations ? 3) Quelle décision les autorités peuvent-elles prendre ? Justifiez.",
              hint: "Pour savoir par combien un nombre a été multiplié, divisez la valeur finale par la valeur de départ.",
              solution: [
                "1) Le nombre de petits séismes augmente de plus en plus vite : 6, puis 14, puis 45, puis 160. Entre mardi et jeudi : 160 ÷ 14 ≈ 11,4. Il a été multiplié par environ 11.",
                "2) Ces séismes montrent que le magma monte et fracture les roches ; le soulèvement du GPS montre que le volcan gonfle sous la poussée du magma. Ce sont deux signes précurseurs d'une éruption.",
                "3) Les autorités, informées par l'observatoire, peuvent déclencher l'alerte et faire évacuer les zones les plus exposées, car une éruption semble proche.",
                "Résultat : les signes précurseurs s'accumulent, une évacuation préventive est justifiée.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Une commune des Antilles, en zone de sismicité 5 et proche d'un volcan actif, doit construire une nouvelle école. Trois terrains sont possibles. Terrain A : au fond d'une vallée qui descend du volcan, où d'anciennes nuées ardentes ont laissé des dépôts. Terrain B : sur un plateau rocheux stable, à 8 km du volcan et loin de toute vallée venant de celui-ci, à 2 km de la côte et à 60 m d'altitude. Terrain C : en bord de mer, au niveau de l'eau, sur un sol de sable. 1) Quel terrain choisissez-vous ? Justifiez en éliminant les deux autres. 2) Citez trois règles de construction que l'école devra respecter. 3) Proposez deux mesures de prévention à mettre en place une fois l'école ouverte.",
              hint: "Examinez pour chaque terrain les dangers liés au volcan, aux séismes et à la mer (tsunami). Puis pensez aux règles parasismiques et à la préparation des élèves.",
              solution: [
                "1) Le terrain A est exclu : les nuées ardentes suivent les vallées, et des dépôts montrent qu'elles y sont déjà passées. Le terrain C est exclu : au niveau de la mer, il serait exposé à un tsunami après un séisme, et un sol de sable amplifie les secousses et peut s'affaisser.",
                "Le terrain B est le meilleur choix : le sol rocheux est stable, il est loin des vallées venant du volcan, et son altitude de 60 m le met à l'abri d'un tsunami.",
                "2) Règles de construction parasismique : des fondations solides ancrées dans la roche ; des chaînages en béton armé reliant murs, planchers et toit ; une forme simple et symétrique ; des joints entre les différents bâtiments.",
                "3) Mesures de prévention : rédiger un plan particulier de mise en sûreté (PPMS) et organiser des exercices réguliers de mise à l'abri et d'évacuation ; informer les familles des risques et des consignes, par exemple avec le DICRIM.",
                "Conclusion : le terrain B, une construction parasismique et une communauté scolaire entraînée réduisent fortement la vulnérabilité de l'école.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la gestion d'une crise volcanique.",
            items: [
              "Les instruments enregistrent de plus en plus de petits séismes sous le volcan.",
              "Les scientifiques de l'observatoire analysent les données et préviennent les autorités.",
              "Les autorités déclenchent l'alerte.",
              "Les habitants quittent la zone menacée en suivant le plan d'évacuation.",
              "L'éruption commence.",
              "Une fois le danger écarté, les autorités autorisent le retour des habitants.",
            ],
          },
          quiz: [
            {
              q: "Quel signe peut annoncer une éruption volcanique ?",
              options: ["Une forte pluie sur le volcan", "La multiplication des petits séismes sous le volcan", "Une baisse de la température de l'air autour du sommet", "L'arrivée d'oiseaux migrateurs"],
              answer: 1,
              why: "Le magma qui monte fracture les roches et provoque de nombreux petits séismes : c'est un signe précurseur.",
            },
            {
              q: "Peut-on prévoir la date et l'heure d'un séisme ?",
              options: ["Oui, à la minute près", "Oui, avec une semaine d'avance grâce aux satellites", "Non, on sait seulement où ils sont probables"],
              answer: 2,
              why: "On connaît les zones où les séismes sont probables, mais on ne sait pas annoncer leur date.",
            },
            {
              q: "Pendant un séisme, en classe, que faut-il faire ?",
              options: ["S'abriter sous une table solide, loin des fenêtres", "Sortir en courant dans la cour pour rejoindre ses amis", "Prendre l'ascenseur pour descendre", "Se placer contre une grande fenêtre"],
              answer: 0,
              why: "Pendant les secousses, il faut s'abriter et protéger sa tête ; on évacue seulement quand les secousses sont terminées.",
            },
            {
              q: "À quoi servent les chaînages en béton armé dans un bâtiment parasismique ?",
              options: ["À décorer la façade", "À isoler la maison du froid en hiver", "À rendre la maison plus légère et moins chère", "À relier murs, planchers et toit entre eux"],
              answer: 3,
              why: "Les chaînages font bouger le bâtiment d'un seul bloc pendant les secousses, ce qui évite son effondrement.",
            },
            {
              q: "Qu'est-ce que le DICRIM ?",
              options: ["Un instrument qui mesure la force des séismes en continu", "Un document de la mairie qui informe sur les risques", "Un type de volcan explosif", "Une règle de construction"],
              answer: 1,
              why: "Le DICRIM (document d'information communal sur les risques majeurs) présente les risques de la commune et les bons réflexes.",
            },
          ],
          trap: "Sortir en courant dès les premières secousses d'un séisme. C'est dangereux : on risque d'être blessé par des chutes d'objets, de vitres ou de débris. Il faut s'abriter pendant les secousses, puis évacuer calmement une fois qu'elles sont terminées.",
          method: "Pour retenir les mesures, rangez-les selon le moment : avant la catastrophe (prévoir, prévenir, construire parasismique), pendant (s'abriter, respecter l'évacuation), après (évacuer sans ascenseur, couper gaz et électricité, suivre les consignes). Dans une réponse, justifiez toujours chaque mesure par le danger qu'elle évite.",
        },
      ],
    },
    /* ==================================================================== */
    /* MÉTÉOROLOGIE ET CLIMAT                                               */
    /* ==================================================================== */
    {
      id: 'meteo-climat',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'phenomenes-meteo',
          title: 'L\'atmosphère et les phénomènes météorologiques',
          minutes: 30,
          objectives: [
            "Décrire la composition de l'atmosphère et situer la couche où se produisent les phénomènes météorologiques.",
            "Identifier les paramètres météorologiques, leurs unités et les instruments qui les mesurent.",
            "Expliquer la formation des nuages et des précipitations.",
            "Relier les vents aux différences de pression atmosphérique.",
          ],
          course: [
            {
              heading: "L'atmosphère, une fine enveloppe de gaz",
              paragraphs: [
                "L'atmosphère est la couche de gaz qui entoure la Terre, retenue par la gravité. L'air sec contient environ 78 % de diazote, 21 % de dioxygène, un peu moins de 1 % d'argon et environ 0,04 % de dioxyde de carbone. Il contient aussi de la vapeur d'eau, un gaz invisible, en quantité très variable selon les lieux et les jours.",
                "La couche la plus basse de l'atmosphère s'appelle la troposphère. Elle s'étend du sol jusqu'à environ 8 km d'altitude au-dessus des pôles et 16 km au-dessus de l'équateur. Elle contient la plus grande partie de l'air et presque toute la vapeur d'eau : c'est là que se forment les nuages, la pluie, les vents et les orages. On appelle ces phénomènes les phénomènes météorologiques.",
                "Dans la troposphère, la température diminue quand on monte : en moyenne, d'environ 6,5 °C tous les 1 000 mètres. C'est pour cela qu'il fait plus froid en haut d'une montagne que dans la vallée, et que les sommets restent enneigés plus longtemps.",
              ],
              box: { label: "Repère", text: "Air sec : environ 78 % de diazote, 21 % de dioxygène, moins de 1 % d'argon, 0,04 % de dioxyde de carbone, plus de la vapeur d'eau en quantité variable. Les phénomènes météorologiques se produisent dans la troposphère, où la température baisse d'environ 6,5 °C par 1 000 m." },
            },
            {
              heading: "Mesurer le temps qu'il fait",
              paragraphs: [
                "Pour décrire le temps qu'il fait, les météorologues mesurent plusieurs paramètres. La température de l'air se mesure avec un thermomètre, à l'ombre, en degrés Celsius (°C). La pression atmosphérique se mesure avec un baromètre, en hectopascals (hPa) : au niveau de la mer, elle vaut en moyenne 1 013 hPa. L'humidité de l'air se mesure avec un hygromètre, en pourcentage.",
                "Le vent est décrit par sa vitesse, mesurée avec un anémomètre (en km/h), et par sa direction, indiquée par une girouette. Attention : un vent porte le nom de la direction d'où il vient ; un vent d'ouest souffle de l'ouest vers l'est. Les précipitations se mesurent avec un pluviomètre, en millimètres : 1 mm de pluie correspond à 1 litre d'eau tombé sur 1 m² de sol.",
                "Ces mesures sont faites dans des milliers de stations météorologiques, complétées par des ballons-sondes, des radars et des satellites. En France, Météo-France utilise ces données dans des modèles informatiques pour établir les prévisions.",
              ],
              box: { label: "Formule", text: "Hauteur de pluie et volume d'eau : 1 mm de pluie = 1 litre d'eau par m². Volume tombé (en L) = hauteur de pluie (en mm) × surface (en m²)." },
            },
            {
              heading: "Comment se forment les nuages et la pluie ?",
              paragraphs: [
                "Le Soleil chauffe le sol et les océans : de l'eau s'évapore et passe dans l'air sous forme de vapeur d'eau. L'air chaud et humide, plus léger que l'air froid qui l'entoure, s'élève. En montant, il se refroidit. Or un air froid peut contenir moins de vapeur d'eau qu'un air chaud.",
                "Quand l'air s'est suffisamment refroidi, une partie de la vapeur d'eau se condense : elle redevient liquide sous forme de minuscules gouttelettes, ou se transforme en petits cristaux de glace, autour de fines poussières en suspension. Des milliards de ces gouttelettes forment un nuage. C'est le même phénomène que la buée qui apparaît sur le miroir de la salle de bains après une douche chaude.",
                "Dans le nuage, les gouttelettes se rassemblent et grossissent. Quand elles deviennent trop lourdes pour rester en suspension, elles tombent : ce sont les précipitations, sous forme de pluie, de neige ou de grêle. Les gros nuages très hauts, les cumulonimbus, provoquent les orages, avec éclairs, tonnerre, fortes averses et parfois grêle.",
              ],
              box: { label: "À retenir", text: "Évaporation, puis élévation et refroidissement de l'air humide, puis condensation de la vapeur d'eau en gouttelettes (nuage), puis grossissement des gouttes et précipitations." },
            },
            {
              heading: "Pression atmosphérique et vents",
              paragraphs: [
                "L'air a une masse : la colonne d'air au-dessus de nous exerce une force sur le sol, c'est la pression atmosphérique. Elle n'est pas la même partout. Une zone de hautes pressions s'appelle un anticyclone : l'air y descend, les nuages se forment difficilement et le temps est souvent sec et ensoleillé. Une zone de basses pressions s'appelle une dépression : l'air y monte, se refroidit et forme des nuages, ce qui apporte souvent de la pluie.",
                "Le vent est un déplacement d'air des hautes pressions vers les basses pressions, un peu comme l'air qui s'échappe d'un ballon gonflé vers l'extérieur. Plus la différence de pression entre deux lieux proches est grande, plus le vent est fort.",
                "Ces différences de pression viennent souvent de différences de température. Au bord de la mer, par une journée ensoleillée, la terre se réchauffe plus vite que la mer : l'air chauffé au-dessus de la terre monte, et l'air plus frais venu de la mer le remplace. C'est la brise de mer, qui souffle de la mer vers la terre l'après-midi.",
              ],
            },
          ],
          keyPoints: [
            "Les phénomènes météorologiques se produisent dans la troposphère, la couche basse de l'atmosphère.",
            "La température baisse d'environ 6,5 °C quand on monte de 1 000 m dans la troposphère.",
            "Thermomètre (°C), baromètre (hPa), hygromètre (%), anémomètre (km/h), girouette, pluviomètre (mm).",
            "1 mm de pluie = 1 litre d'eau par m².",
            "Nuage : l'air humide monte, se refroidit, et la vapeur d'eau se condense en gouttelettes.",
            "Le vent va des hautes pressions (anticyclone) vers les basses pressions (dépression).",
          ],
          example: {
            statement: "Données fictives. Sur une plage, au niveau de la mer (0 m d'altitude), le thermomètre indique 15 °C. Quelle température peut-on prévoir au sommet d'une montagne voisine, à 2 000 m d'altitude, en utilisant la baisse moyenne de température dans la troposphère ?",
            solution: [
              "Je rappelle la règle : dans la troposphère, la température baisse en moyenne d'environ 6,5 °C tous les 1 000 m.",
              "Je calcule la différence d'altitude : 2 000 - 0 = 2 000 m, soit 2 fois 1 000 m.",
              "Je calcule la baisse de température : 2 × 6,5 = 13 °C.",
              "Je calcule la température au sommet : 15 - 13 = 2 °C.",
              "Conclusion : on peut prévoir environ 2 °C au sommet. C'est une estimation moyenne : la valeur réelle dépend du vent, de l'ensoleillement et de l'humidité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque paramètre météorologique à son instrument de mesure et à son unité. Paramètres : a) température ; b) pression atmosphérique ; c) vitesse du vent ; d) précipitations ; e) humidité de l'air. Instruments : anémomètre, baromètre, hygromètre, pluviomètre, thermomètre. Unités : %, °C, hPa, km/h, mm.",
              hint: "« Baro » évoque la pression et « pluvio » la pluie ; l'anémomètre tourne avec le vent.",
              solution: [
                "a) Température : thermomètre, en °C.",
                "b) Pression atmosphérique : baromètre, en hPa.",
                "c) Vitesse du vent : anémomètre, en km/h.",
                "d) Précipitations : pluviomètre, en mm.",
                "e) Humidité de l'air : hygromètre, en %.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Le pluviomètre du collège a relevé, du lundi au dimanche : 4 mm, 0 mm, 12 mm, 7 mm, 0 mm, 3 mm et 9 mm. 1) Calculez la hauteur totale de pluie tombée dans la semaine. 2) Quel volume d'eau, en litres, est tombé sur le potager du collège, qui mesure 40 m² ? 3) Le récupérateur d'eau du collège collecte la pluie tombée sur un toit de 25 m². Contient-il assez d'eau pour remplir un réservoir de 1 000 litres ?",
              hint: "Additionnez d'abord les hauteurs de pluie, puis utilisez : volume (en L) = hauteur (en mm) × surface (en m²).",
              solution: [
                "1) Hauteur totale : 4 + 0 + 12 + 7 + 0 + 3 + 9 = 35 mm.",
                "2) Volume sur le potager : 35 × 40 = 1 400 litres.",
                "3) Volume collecté sur le toit : 35 × 25 = 875 litres.",
                "875 litres est inférieur à 1 000 litres : le récupérateur ne contient pas assez d'eau pour remplir le réservoir (il manque 1 000 - 875 = 125 litres).",
                "Résultat : 35 mm de pluie, 1 400 L sur le potager, et 875 L collectés, ce qui ne suffit pas.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Un matin d'été, dans une vallée à 500 m d'altitude, il fait 20 °C et l'air est humide. Le vent pousse cet air à remonter la pente d'une montagne jusqu'au sommet, à 3 000 m. 1) Estimez la température de l'air au sommet. 2) En montant, cet air finit par former un nuage accroché au sommet. Expliquez pourquoi. 3) L'après-midi, sur la côte voisine, un vent souffle de la mer vers la terre. Nommez-le et expliquez son origine.",
              hint: "Calculez d'abord la différence d'altitude, puis la baisse de température (6,5 °C par 1 000 m). Pour la question 3, comparez la vitesse à laquelle la terre et la mer se réchauffent.",
              solution: [
                "1) Différence d'altitude : 3 000 - 500 = 2 500 m, soit 2,5 fois 1 000 m. Baisse de température : 2,5 × 6,5 = 16,25 °C. Température au sommet : 20 - 16,25 = 3,75 °C, soit environ 4 °C.",
                "2) En montant, l'air humide se refroidit. Un air froid peut contenir moins de vapeur d'eau : une partie de la vapeur se condense en minuscules gouttelettes autour de poussières, ce qui forme un nuage au sommet.",
                "3) C'est la brise de mer. Au soleil, la terre se réchauffe plus vite que la mer. L'air chauffé au-dessus de la terre s'élève, la pression y baisse, et l'air plus frais de la mer, où la pression est plus haute, se déplace vers la terre pour le remplacer.",
                "Conclusion : environ 4 °C au sommet, un nuage formé par condensation de la vapeur d'eau, et une brise de mer due à la différence de réchauffement entre la terre et la mer.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la formation de la pluie.",
            items: [
              "Le Soleil chauffe la surface des océans et du sol.",
              "De l'eau s'évapore et passe dans l'air sous forme de vapeur.",
              "L'air chaud et humide s'élève dans l'atmosphère.",
              "En montant, l'air se refroidit.",
              "La vapeur d'eau se condense en gouttelettes : un nuage se forme.",
              "Les gouttelettes grossissent et tombent en pluie.",
            ],
          },
          quiz: [
            {
              q: "Dans quelle couche de l'atmosphère se produisent les phénomènes météorologiques ?",
              options: ["Dans la stratosphère, au-dessus de la couche d'ozone", "Dans la troposphère", "Dans la lithosphère, sous les océans", "Au-delà de 100 km d'altitude"],
              answer: 1,
              why: "La troposphère, la couche la plus basse, contient presque toute la vapeur d'eau : c'est là que se forment nuages, pluie et vents.",
            },
            {
              q: "Quel instrument mesure la pression atmosphérique ?",
              options: ["Le pluviomètre placé dans le jardin", "L'anémomètre en haut d'un mât", "Le baromètre", "La girouette sur le toit"],
              answer: 2,
              why: "Le baromètre mesure la pression atmosphérique, en hectopascals (hPa).",
            },
            {
              q: "Il est tombé 10 mm de pluie sur une cour de 50 m². Quel volume d'eau cela représente-t-il ?",
              options: ["500 litres", "60 litres", "5 litres", "50 000 litres"],
              answer: 0,
              why: "1 mm = 1 L par m², donc 10 × 50 = 500 litres.",
            },
            {
              q: "Comment se forme un nuage ?",
              options: ["Par la fumée des usines qui s'accumule dans le ciel au fil des jours", "Par l'évaporation de l'eau dans un air très chaud", "Par la condensation de la vapeur d'eau dans un air qui se refroidit", "Par le vent qui soulève la poussière du sol"],
              answer: 2,
              why: "L'air humide qui monte se refroidit, et la vapeur d'eau se condense en minuscules gouttelettes : c'est le nuage.",
            },
            {
              q: "Dans quel sens souffle le vent ?",
              options: ["Toujours du nord vers le sud", "Des basses pressions vers les hautes pressions", "Uniquement de la terre vers la mer", "Des hautes pressions vers les basses pressions"],
              answer: 3,
              why: "L'air se déplace des zones de hautes pressions (anticyclones) vers les zones de basses pressions (dépressions).",
            },
          ],
          trap: "Croire qu'un nuage est fait de vapeur d'eau. La vapeur d'eau est un gaz invisible : un nuage est formé de minuscules gouttelettes d'eau liquide ou de cristaux de glace, apparus par condensation quand l'air se refroidit.",
          method: "Pour expliquer un phénomène météorologique, suivez toujours la même chaîne : ce qui chauffe ou refroidit l'air, puis ce que fait l'air (il monte ou il descend, la pression baisse ou monte), puis la conséquence (nuages, pluie, vent). Pour les calculs, écrivez la règle utilisée avant de poser l'opération.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'circulation-air-eau',
          title: 'Les mouvements de l\'air et de l\'eau à l\'échelle du globe',
          minutes: 35,
          objectives: [
            "Expliquer que l'énergie solaire reçue par la Terre est inégalement répartie selon la latitude.",
            "Relier ce déséquilibre aux grands mouvements de l'atmosphère et des océans.",
            "Décrire la circulation atmosphérique entre l'équateur et les tropiques, et les courants océaniques de surface et profonds.",
            "Expliquer le rôle des courants océaniques dans la répartition des climats.",
          ],
          course: [
            {
              heading: "Le Soleil chauffe la Terre de façon inégale",
              paragraphs: [
                "La Terre reçoit son énergie du Soleil. Mais comme elle est ronde, elle ne reçoit pas cette énergie de la même façon partout. Près de l'équateur, les rayons du Soleil arrivent presque à la verticale : l'énergie est concentrée sur une petite surface. Près des pôles, les rayons arrivent de façon très inclinée, rasante : la même quantité d'énergie s'étale sur une surface beaucoup plus grande.",
                "Vous pouvez le vérifier avec une lampe de poche. Éclairez une feuille à la verticale : vous obtenez une petite tache très lumineuse. Inclinez la lampe : la tache devient plus grande et moins lumineuse, car la même lumière est répartie sur une plus grande surface. Chaque centimètre carré reçoit donc moins d'énergie.",
                "Résultat : les régions proches de l'équateur reçoivent plus d'énergie qu'elles n'en perdent, et les régions polaires en perdent plus qu'elles n'en reçoivent. Pourtant, l'équateur ne devient pas de plus en plus chaud, ni les pôles de plus en plus froids. C'est parce que l'atmosphère et les océans transportent en permanence de la chaleur de l'équateur vers les pôles.",
              ],
              box: { label: "À retenir", text: "L'énergie solaire reçue par unité de surface est maximale près de l'équateur et minimale près des pôles. Les mouvements de l'atmosphère et des océans transportent la chaleur des régions excédentaires vers les régions déficitaires." },
            },
            {
              heading: "Les grands mouvements de l'atmosphère",
              paragraphs: [
                "Près de l'équateur, l'air fortement chauffé devient plus léger et monte : il se forme une zone de basses pressions. En montant, l'air se refroidit et sa vapeur d'eau se condense : de gros nuages se forment, et il pleut presque tous les jours. C'est le domaine des forêts équatoriales.",
                "En altitude, cet air se dirige vers les tropiques. Vers 30° de latitude nord et sud, refroidi et devenu sec, il redescend : il se forme une zone de hautes pressions, où le ciel est souvent sans nuage et où il pleut très peu. C'est là que se trouvent les grands déserts chauds, comme le Sahara. Près du sol, l'air repart ensuite vers l'équateur : ce sont les alizés, des vents réguliers.",
                "L'air forme ainsi une grande boucle, appelée cellule de convection : il monte là où il est chaud, et descend là où il est plus froid. À cause de la rotation de la Terre, les vents sont déviés : les alizés soufflent du nord-est dans l'hémisphère Nord et du sud-est dans l'hémisphère Sud. Aux latitudes de la France, ce sont surtout des vents d'ouest qui dominent, apportant les perturbations venues de l'Atlantique.",
              ],
              box: { label: "Repère", text: "Équateur : l'air chaud monte, basses pressions, fortes pluies. Vers 30° de latitude : l'air redescend, hautes pressions, déserts. Près du sol, les alizés ramènent l'air vers l'équateur." },
            },
            {
              heading: "Les courants océaniques de surface",
              paragraphs: [
                "Les océans bougent eux aussi. En surface, les vents dominants entraînent l'eau et créent de grands courants qui parcourent des milliers de kilomètres. Certains transportent de l'eau chaude des régions tropicales vers les hautes latitudes ; d'autres ramènent de l'eau froide des régions polaires vers l'équateur.",
                "Le plus célèbre est le Gulf Stream. Il emporte les eaux chaudes du golfe du Mexique à travers l'Atlantique Nord, en direction de l'Europe. Ces eaux réchauffent l'air qui arrive sur les côtes de l'Europe de l'Ouest et contribuent à y adoucir les hivers. À la même latitude que la Bretagne, les côtes de l'est du Canada, longées par un courant froid venu de l'Arctique (le courant du Labrador), ont des hivers beaucoup plus froids.",
              ],
            },
            {
              heading: "La circulation profonde des océans",
              paragraphs: [
                "Dans l'Atlantique Nord, près du Groenland, l'eau de surface se refroidit fortement au contact de l'air glacé. Elle devient aussi plus salée, car lorsque la glace de mer se forme, le sel reste dans l'eau. Or une eau froide et salée est plus dense, c'est-à-dire plus lourde pour un même volume : elle plonge alors vers le fond de l'océan.",
                "Cette eau profonde circule ensuite très lentement dans tous les océans du globe, avant de remonter peu à peu vers la surface, dans d'autres régions. Cette immense circulation, que l'on compare à un tapis roulant, met de l'ordre de mille ans pour faire le tour du globe. Elle participe, avec les courants de surface et les vents, au transport de la chaleur et à la répartition des climats sur la Terre.",
              ],
              box: { label: "À retenir", text: "Les courants de surface sont entraînés par les vents. La circulation profonde naît de la plongée d'eaux froides et salées, plus denses. Ensemble, atmosphère et océans redistribuent la chaleur entre l'équateur et les pôles." },
            },
          ],
          keyPoints: [
            "La Terre étant ronde, l'énergie solaire reçue par m² est plus forte à l'équateur qu'aux pôles.",
            "L'atmosphère et les océans transportent la chaleur de l'équateur vers les pôles.",
            "À l'équateur, l'air chaud monte (pluies) ; vers 30° de latitude, il redescend (déserts) ; les alizés le ramènent vers l'équateur.",
            "Les courants de surface sont entraînés par les vents ; le Gulf Stream contribue à adoucir l'hiver en Europe de l'Ouest.",
            "Les eaux froides et salées, plus denses, plongent dans l'Atlantique Nord et circulent en profondeur.",
          ],
          example: {
            statement: "Données fictives. Une lampe envoie la même quantité de lumière, 600 unités d'énergie, sur une feuille. Tenue à la verticale, elle éclaire une surface de 100 cm². Inclinée, elle éclaire une surface de 300 cm². Calculez l'énergie reçue par cm² dans chaque cas, puis reliez ce résultat à la différence entre l'équateur et les pôles.",
            solution: [
              "Je rappelle la relation : énergie reçue par cm² = énergie totale ÷ surface éclairée.",
              "Lampe verticale : 600 ÷ 100 = 6 unités par cm².",
              "Lampe inclinée : 600 ÷ 300 = 2 unités par cm².",
              "Je compare : avec la lampe inclinée, chaque cm² reçoit 6 ÷ 2 = 3 fois moins d'énergie.",
              "Je relie à la Terre : à l'équateur, les rayons arrivent presque à la verticale, comme la lampe droite ; près des pôles, ils arrivent inclinés, comme la lampe penchée.",
              "Conclusion : chaque m² reçoit plus d'énergie à l'équateur qu'aux pôles, ce qui explique que les régions équatoriales soient plus chaudes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez le texte avec les mots suivants : alizés, descend, déserts, monte, pluies. « À l'équateur, l'air chauffé ... et provoque de fortes .... Vers 30° de latitude, l'air ... : il y pleut très peu, d'où la présence de grands .... Près du sol, des vents réguliers, les ..., ramènent l'air vers l'équateur. »",
              hint: "Un air qui monte se refroidit et forme des nuages ; un air qui descend est sec.",
              solution: [
                "À l'équateur, l'air chauffé monte et provoque de fortes pluies.",
                "Vers 30° de latitude, l'air descend : il y pleut très peu, d'où la présence de grands déserts.",
                "Près du sol, des vents réguliers, les alizés, ramènent l'air vers l'équateur.",
              ],
            },
            {
              level: 2,
              statement: "Une classe remplit un aquarium d'eau tiède. Avec précaution, elle verse dans un coin de l'eau froide et salée, colorée en bleu, et dans l'autre coin de l'eau chaude et douce, colorée en rouge. L'eau bleue descend et s'étale au fond ; l'eau rouge reste en surface. 1) Décrivez les résultats. 2) Expliquez-les avec la notion de densité. 3) Quel phénomène réel cette expérience modélise-t-elle ? Où se produit-il ?",
              hint: "Une eau plus dense est plus lourde, pour un même volume, que l'eau qui l'entoure.",
              solution: [
                "1) L'eau froide et salée (bleue) coule et s'étale au fond de l'aquarium ; l'eau chaude et douce (rouge) reste en surface.",
                "2) L'eau froide et salée est plus dense que l'eau tiède : elle plonge. L'eau chaude et douce est moins dense : elle reste au-dessus.",
                "3) L'expérience modélise la circulation profonde des océans : dans l'Atlantique Nord, près du Groenland, l'eau de surface refroidie et plus salée devient plus dense et plonge vers le fond, puis circule lentement dans tous les océans.",
                "Résultat : la température et la salinité de l'eau, qui modifient sa densité, sont le moteur de la circulation océanique profonde.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Deux villes portuaires, X et Y, sont à la même latitude, 48° nord. X est sur la côte ouest d'un continent, longée par un courant chaud ; Y est sur la côte est d'un autre continent, longée par un courant froid venu des régions polaires. Température moyenne de janvier : X : 7 °C ; Y : -6 °C. 1) Calculez l'écart de température entre X et Y en janvier. 2) Les deux villes reçoivent-elles la même énergie du Soleil ? Justifiez. 3) Expliquez alors la différence de température. 4) Quel exemple réel du cours ressemble à cette situation ?",
              hint: "Deux lieux à la même latitude reçoivent en moyenne la même énergie solaire. Cherchez donc un autre facteur.",
              solution: [
                "1) Écart : 7 - (-6) = 7 + 6 = 13 °C. En janvier, X est en moyenne 13 °C plus chaude que Y.",
                "2) Oui : elles sont à la même latitude, donc les rayons du Soleil y arrivent avec la même inclinaison. Elles reçoivent en moyenne la même énergie solaire.",
                "3) La différence vient des courants océaniques. Le courant chaud qui longe X transporte de la chaleur venue des régions tropicales et réchauffe l'air de la côte ; le courant froid qui longe Y apporte des eaux polaires qui refroidissent l'air.",
                "4) C'est la situation de l'Europe de l'Ouest, adoucie par le Gulf Stream, comparée aux côtes de l'est du Canada, longées par le courant froid du Labrador.",
                "Conclusion : à latitude égale, les courants océaniques peuvent créer de grandes différences de climat, car ils transportent la chaleur à l'échelle du globe.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les grands mouvements de l'air et de l'eau.",
            statements: [
              { text: "Il fait plus chaud à l'équateur parce qu'il est plus proche du Soleil.", true: false, why: "La différence de distance est négligeable : c'est l'inclinaison des rayons qui change l'énergie reçue par m²." },
              { text: "Les rayons du Soleil arrivent presque à la verticale près de l'équateur.", true: true, why: "L'énergie y est donc concentrée sur une petite surface." },
              { text: "L'air chaud monte et l'air froid descend.", true: true, why: "L'air chaud est moins dense que l'air froid qui l'entoure." },
              { text: "Les grands déserts chauds se trouvent sous l'équateur.", true: false, why: "Ils sont vers 30° de latitude, là où l'air sec redescend. À l'équateur, il pleut beaucoup." },
              { text: "Le Gulf Stream transporte des eaux chaudes vers l'Europe.", true: true, why: "Il part du golfe du Mexique et traverse l'Atlantique Nord, ce qui contribue à adoucir les hivers en Europe de l'Ouest." },
              { text: "Une eau froide et salée remonte vers la surface.", true: false, why: "Elle est plus dense : elle plonge vers le fond, ce qui alimente la circulation profonde." },
              { text: "Les courants de surface sont surtout entraînés par les vents.", true: true, why: "Les vents dominants poussent l'eau de surface et créent les grands courants." },
            ],
          },
          quiz: [
            {
              q: "Pourquoi l'équateur reçoit-il plus d'énergie solaire par m² que les pôles ?",
              options: ["Parce qu'il est beaucoup plus proche du Soleil", "Parce que les rayons y arrivent presque à la verticale", "Parce qu'il y a moins de nuages", "Parce que la Terre y tourne plus lentement sur elle-même"],
              answer: 1,
              why: "Des rayons presque verticaux concentrent l'énergie sur une petite surface ; aux pôles, les rayons rasants l'étalent.",
            },
            {
              q: "Que se passe-t-il vers 30° de latitude ?",
              options: ["L'air chaud monte et provoque des orages quotidiens", "Des glaces se forment à la surface de la mer", "L'air sec redescend, ce qui explique les déserts", "Il n'y a jamais de vent"],
              answer: 2,
              why: "L'air monté à l'équateur redescend vers 30° de latitude : hautes pressions, ciel clair, très peu de pluie.",
            },
            {
              q: "Comment s'appellent les vents réguliers qui soufflent vers l'équateur ?",
              options: ["Les alizés", "Les brises de mer de l'après-midi", "Les tempêtes d'ouest de l'Atlantique"],
              answer: 0,
              why: "Les alizés ramènent l'air vers l'équateur près du sol, en fermant la boucle de la cellule de convection.",
            },
            {
              q: "Quel est l'effet principal du Gulf Stream sur l'Europe de l'Ouest ?",
              options: ["Il provoque des séismes sur les côtes", "Il refroidit fortement les étés de la région", "Il apporte de l'eau douce dans les rivières", "Il contribue à adoucir les hivers"],
              answer: 3,
              why: "Il transporte des eaux chaudes venues des régions tropicales, qui réchauffent l'air arrivant sur l'Europe.",
            },
            {
              q: "Pourquoi l'eau plonge-t-elle vers le fond près du Groenland ?",
              options: ["Parce qu'elle devient froide et salée, donc plus dense", "Parce qu'elle est chauffée par le Soleil de minuit pendant l'été polaire", "Parce que les vents l'aspirent vers le bas", "Parce qu'elle s'évapore entièrement"],
              answer: 0,
              why: "Une eau froide et salée est plus dense que l'eau qui l'entoure : elle plonge et alimente la circulation profonde.",
            },
          ],
          trap: "Expliquer que l'équateur est plus chaud parce qu'il est « plus près du Soleil ». La vraie raison est l'inclinaison des rayons : à l'équateur, ils arrivent presque à la verticale et concentrent l'énergie sur une petite surface.",
          method: "Pour expliquer un mouvement d'air ou d'eau, cherchez toujours la différence qui le provoque : une différence de température (l'air chaud monte, l'air froid descend) ou de densité (l'eau froide et salée plonge). Faites un schéma simple avec des flèches : il vaut souvent mieux qu'un long texte.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'meteo-ou-climat',
          title: 'Distinguer la météo et le climat',
          minutes: 30,
          objectives: [
            "Distinguer la météorologie, état de l'atmosphère à un moment donné, du climat, moyenne sur une longue période.",
            "Calculer une température moyenne annuelle, une amplitude thermique et un total de précipitations.",
            "Lire et interpréter un diagramme climatique.",
            "Identifier les grandes zones climatiques du globe et les climats de la France.",
          ],
          course: [
            {
              heading: "La météo : le temps qu'il fait aujourd'hui",
              paragraphs: [
                "La météorologie (ou météo) décrit l'état de l'atmosphère en un lieu et à un moment précis : la température, les précipitations, le vent, les nuages, la pression. Elle change d'heure en heure et d'un jour à l'autre : il peut pleuvoir le matin et faire beau l'après-midi.",
                "Les prévisions météorologiques annoncent le temps des prochains jours. Elles sont assez fiables pour quelques jours, mais leur fiabilité diminue rapidement au-delà d'une semaine environ, car l'atmosphère évolue de façon très difficile à prévoir dans le détail.",
              ],
              box: { label: "Définition", text: "La météorologie décrit l'état de l'atmosphère (température, précipitations, vent, nuages...) en un lieu donné et à un moment donné, sur une courte durée : quelques heures ou quelques jours." },
            },
            {
              heading: "Le climat : le temps habituel, sur au moins 30 ans",
              paragraphs: [
                "Le climat d'une région décrit le temps qu'il y fait habituellement. Il est calculé à partir des mesures météorologiques faites pendant une longue période : au moins 30 ans. On obtient ainsi des moyennes appelées normales climatiques, par exemple la température moyenne de chaque mois ou la quantité moyenne de pluie par an. Les normales utilisées aujourd'hui sont calculées sur la période 1991-2020.",
                "Une image aide à retenir la différence : la météo ressemble à l'humeur d'une personne un jour donné, le climat à son caractère. Une personne d'un caractère calme peut avoir un jour de colère ; de même, une région au climat doux peut connaître une journée glaciale. Une seule journée, ou même un seul hiver très froid, ne suffit donc pas à dire que le climat a changé : il faut comparer des moyennes sur des dizaines d'années.",
              ],
              box: { label: "Définition", text: "Le climat d'une région est l'ensemble des conditions météorologiques moyennes (températures, précipitations, vents...) calculées sur une longue période, d'au moins 30 ans." },
            },
            {
              heading: "Lire un diagramme climatique",
              paragraphs: [
                "Le climat d'une ville se représente par un diagramme climatique (ou diagramme ombrothermique). Les mois sont en abscisse. Des barres indiquent les précipitations moyennes de chaque mois, en millimètres. Une courbe indique la température moyenne de chaque mois, en degrés Celsius.",
                "À partir des données, on calcule trois valeurs utiles. La température moyenne annuelle est la somme des 12 températures mensuelles divisée par 12. L'amplitude thermique annuelle est l'écart entre le mois le plus chaud et le mois le plus froid. Le total annuel des précipitations est la somme des précipitations des 12 mois.",
                "On peut aussi repérer les mois secs : un mois est considéré comme sec lorsque ses précipitations, en millimètres, sont inférieures ou égales au double de sa température, en degrés Celsius (P ≤ 2T). Sur un diagramme dont l'échelle des précipitations est le double de celle des températures, ce sont les mois où la barre passe sous la courbe.",
              ],
              box: { label: "Formule", text: "Température moyenne annuelle = somme des 12 températures mensuelles ÷ 12. Amplitude thermique = température du mois le plus chaud - température du mois le plus froid. Mois sec : P ≤ 2T." },
            },
            {
              heading: "Les grandes zones climatiques",
              paragraphs: [
                "Comme l'énergie solaire reçue dépend de la latitude, les climats se répartissent en grandes bandes autour du globe. Dans la zone chaude, entre les tropiques, on trouve le climat équatorial (chaud et pluvieux toute l'année), le climat tropical (chaud, avec une saison sèche et une saison des pluies) et le climat désertique (très peu de précipitations).",
                "Dans les zones tempérées, les saisons sont bien marquées. Le climat océanique a des hivers doux, des étés frais et des pluies réparties toute l'année. Le climat continental a des hivers froids et des étés chauds, donc une forte amplitude thermique. Le climat méditerranéen a des étés chauds et secs et des hivers doux. Dans les zones froides, près des pôles, règne le climat polaire. En montagne, il fait plus froid qu'en plaine à la même latitude, car la température baisse avec l'altitude.",
                "La France métropolitaine connaît plusieurs climats : océanique à l'ouest (Brest), à tendance continentale à l'est (Strasbourg), méditerranéen au sud-est (Marseille) et montagnard dans les Alpes et les Pyrénées. Les territoires d'outre-mer comme les Antilles ou La Réunion ont un climat tropical.",
              ],
            },
          ],
          keyPoints: [
            "Météo : état de l'atmosphère en un lieu et à un moment donnés, sur quelques heures ou quelques jours.",
            "Climat : conditions météorologiques moyennes d'une région, calculées sur au moins 30 ans.",
            "Une journée ou un hiver inhabituel ne suffit pas à montrer un changement de climat.",
            "Moyenne annuelle = somme des 12 mois ÷ 12 ; amplitude = mois le plus chaud - mois le plus froid.",
            "Un mois est sec si P ≤ 2T (précipitations en mm, température en °C).",
            "Grandes zones : chaude (équatoriale, tropicale, désertique), tempérées (océanique, continentale, méditerranéenne), froides (polaire).",
          ],
          example: {
            statement: "Pour chaque phrase, dites s'il s'agit de météo ou de climat, et justifiez. a) « Demain, il pleuvra sur la Bretagne. » b) « À Marseille, les étés sont chauds et secs. » c) « Il a neigé à Lyon le 3 février. » d) « Il tombe en moyenne 1 200 mm de pluie par an à Brest. »",
            solution: [
              "Je rappelle la différence : la météo concerne un moment précis et une courte durée ; le climat décrit une moyenne ou une habitude sur de nombreuses années.",
              "a) Météo : la phrase annonce le temps d'un jour précis, demain.",
              "b) Climat : la phrase décrit ce qui se passe habituellement chaque été, d'année en année.",
              "c) Météo : la phrase décrit un événement d'une seule journée.",
              "d) Climat : il s'agit d'une moyenne annuelle, calculée sur de nombreuses années.",
              "Conclusion : les phrases a) et c) relèvent de la météo, les phrases b) et d) du climat.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces informations en deux colonnes, météo ou climat : a) « Orages violents attendus ce soir dans le Sud-Ouest. » b) « En Sibérie, les hivers sont très froids. » c) « La température moyenne de juillet à Paris, calculée sur 1991-2020. » d) « Vent fort de 80 km/h relevé ce matin à Brest. » e) « Le Sahara reçoit très peu de pluie chaque année. »",
              hint: "Cherchez les mots qui indiquent un moment précis (ce soir, ce matin) ou une habitude sur de longues années (les hivers, chaque année, moyenne sur 30 ans).",
              solution: [
                "Météo : a) les orages attendus ce soir ; d) le vent relevé ce matin. Ces informations concernent un moment précis.",
                "Climat : b) les hivers de Sibérie ; c) la moyenne de juillet sur 1991-2020 ; e) les faibles pluies du Sahara chaque année. Ces informations décrivent ce qui se passe habituellement, sur une longue période.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Voici les normales climatiques de la ville A. Températures moyennes mensuelles (°C), de janvier à décembre : 6, 7, 9, 11, 14, 17, 19, 19, 16, 13, 9, 7. Précipitations moyennes mensuelles (mm) : 110, 90, 85, 70, 65, 55, 50, 55, 75, 100, 115, 120. 1) Calculez la température moyenne annuelle. 2) Calculez l'amplitude thermique annuelle. 3) Calculez le total annuel des précipitations. 4) Y a-t-il des mois secs ? 5) Quel est le type de climat de la ville A ?",
              hint: "Pour les mois secs, comparez pour chaque mois P et 2T, en commençant par les mois les moins pluvieux de l'été.",
              solution: [
                "1) Somme des températures : 6 + 7 + 9 + 11 + 14 + 17 + 19 + 19 + 16 + 13 + 9 + 7 = 147. Moyenne : 147 ÷ 12 = 12,25, soit environ 12,3 °C.",
                "2) Mois le plus chaud : 19 °C (juillet et août) ; mois le plus froid : 6 °C (janvier). Amplitude : 19 - 6 = 13 °C.",
                "3) Total : 110 + 90 + 85 + 70 + 65 + 55 + 50 + 55 + 75 + 100 + 115 + 120 = 990 mm.",
                "4) Le mois le plus sec est juillet : P = 50 mm et 2T = 2 × 19 = 38. Comme 50 est supérieur à 38, juillet n'est pas sec. En août, 55 est supérieur à 38 ; en juin, 55 est supérieur à 2 × 17 = 34. Aucun mois n'est sec.",
                "5) Hivers doux (6 à 7 °C), étés frais (19 °C), amplitude modérée et pluies abondantes réparties toute l'année : c'est un climat océanique.",
                "Résultat : environ 12,3 °C de moyenne, 13 °C d'amplitude, 990 mm de pluie par an, aucun mois sec : climat océanique.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Normales climatiques de la ville B. Températures (°C), de janvier à décembre : 8, 9, 11, 14, 18, 22, 25, 25, 21, 17, 12, 9. Précipitations (mm) : 50, 45, 40, 55, 45, 25, 10, 20, 60, 85, 70, 55. 1) Calculez la température moyenne annuelle (arrondie au dixième), l'amplitude thermique et le total annuel des précipitations. 2) Déterminez les mois secs. 3) Identifiez le climat de la ville B. 4) Un habitant affirme : « En juillet dernier, il est tombé 40 mm de pluie chez nous : notre climat n'est plus le même. » Que lui répondez-vous ?",
              hint: "Testez P ≤ 2T pour chaque mois de mai à septembre. Pour la question 4, rappelez sur quelle durée se définit un climat.",
              solution: [
                "1) Somme des températures : 8 + 9 + 11 + 14 + 18 + 22 + 25 + 25 + 21 + 17 + 12 + 9 = 191. Moyenne : 191 ÷ 12 ≈ 15,9 °C. Amplitude : 25 - 8 = 17 °C. Total des précipitations : 50 + 45 + 40 + 55 + 45 + 25 + 10 + 20 + 60 + 85 + 70 + 55 = 560 mm.",
                "2) Mai : 45 > 2 × 18 = 36, pas sec. Juin : 25 ≤ 2 × 22 = 44, sec. Juillet : 10 ≤ 50, sec. Août : 20 ≤ 50, sec. Septembre : 60 > 42, pas sec. Les mois secs sont juin, juillet et août.",
                "3) Des étés chauds (25 °C) et secs, des hivers doux (8 à 9 °C) et des pluies surtout en automne et en hiver : c'est un climat méditerranéen.",
                "4) Un mois de juillet plus pluvieux que d'habitude est un événement météorologique. Le climat se définit par des moyennes sur au moins 30 ans : une seule valeur inhabituelle ne permet pas de conclure qu'il a changé. Il faudrait comparer les moyennes de plusieurs décennies.",
                "Conclusion : moyenne d'environ 15,9 °C, amplitude de 17 °C, 560 mm par an, trois mois secs en été : la ville B a un climat méditerranéen, et un seul mois inhabituel ne change pas ce climat.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque climat à sa description.",
            pairs: [
              { left: "Climat océanique", right: "Hivers doux, étés frais, pluies réparties toute l'année" },
              { left: "Climat méditerranéen", right: "Étés chauds et secs, hivers doux" },
              { left: "Climat continental", right: "Hivers froids, étés chauds, forte amplitude thermique" },
              { left: "Climat équatorial", right: "Chaud et pluvieux toute l'année" },
              { left: "Climat désertique", right: "Très peu de précipitations dans l'année" },
              { left: "Climat polaire", right: "Froid toute l'année, près des pôles" },
            ],
          },
          quiz: [
            {
              q: "Sur quelle durée minimale calcule-t-on le climat d'une région ?",
              options: ["Une semaine", "Un an", "30 ans", "Une saison"],
              answer: 2,
              why: "Le climat est défini par des moyennes calculées sur au moins 30 ans : ce sont les normales climatiques.",
            },
            {
              q: "Laquelle de ces phrases décrit la météo ?",
              options: ["Ce matin, il fait 12 °C à Lille", "À Brest, il pleut souvent en hiver", "Le Sahara est un désert chaud", "Les étés sont secs à Nice"],
              answer: 0,
              why: "Elle décrit l'état de l'atmosphère en un lieu et à un moment précis : ce matin, à Lille.",
            },
            {
              q: "Les températures d'une ville vont de 2 °C en janvier à 21 °C en juillet. Quelle est l'amplitude thermique ?",
              options: ["23 °C", "11,5 °C", "10 °C", "19 °C"],
              answer: 3,
              why: "Amplitude = mois le plus chaud - mois le plus froid = 21 - 2 = 19 °C.",
            },
            {
              q: "En juillet, une ville a une température de 24 °C et reçoit 30 mm de pluie. Ce mois est-il sec ?",
              options: ["Non, car il a plu", "Oui, car 30 est inférieur à 2 × 24 = 48", "Non, car 30 mm est supérieur à 24 °C, la température du mois"],
              answer: 1,
              why: "Un mois est sec si P ≤ 2T : ici 30 ≤ 48, donc juillet est un mois sec.",
            },
            {
              q: "Un hiver très froid en France prouve-t-il que le climat se refroidit ?",
              options: ["Oui, un seul hiver très froid suffit à le montrer clairement", "Oui, si la neige tombe à Paris", "Non, il faut comparer des moyennes sur des décennies", "Non, car l'hiver ne compte jamais"],
              answer: 2,
              why: "Un hiver est un événement météorologique ; le climat se juge sur des moyennes calculées sur au moins 30 ans.",
            },
          ],
          trap: "Utiliser la météo d'un jour, d'une semaine ou d'une saison pour parler du climat. Le climat se définit par des moyennes calculées sur au moins 30 ans : un événement isolé, même spectaculaire, relève de la météo.",
          method: "Avant de répondre, cherchez l'indice de durée : un moment précis (aujourd'hui, ce matin, demain) signale la météo ; une habitude ou une moyenne sur des années signale le climat. Pour les calculs sur un diagramme, recopiez les 12 valeurs, additionnez-les deux fois pour vérifier, puis divisez par 12.",
        },
      ],
    },
    /* ==================================================================== */
    /* RESSOURCES NATURELLES ET ACTION HUMAINE                              */
    /* ==================================================================== */
    {
      id: 'ressources-action-humaine',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ressources-naturelles',
          title: 'Les ressources naturelles et leur exploitation',
          minutes: 30,
          objectives: [
            "Définir une ressource naturelle et distinguer les ressources renouvelables et non renouvelables à l'échelle humaine.",
            "Expliquer la formation des combustibles fossiles sur des millions d'années.",
            "Identifier les bénéfices et les impacts de l'exploitation d'une ressource.",
            "Expliquer des choix de gestion durable : économiser, recycler, remplacer, réglementer.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une ressource naturelle ?",
              paragraphs: [
                "Une ressource naturelle est un élément de la nature que les êtres humains utilisent pour vivre et pour leurs activités. L'eau, les sols cultivables, le bois des forêts, les poissons, les roches (sable, graviers, calcaire), les minerais dont on extrait les métaux (fer, cuivre, aluminium), le pétrole, le gaz naturel, le charbon, mais aussi l'énergie du Soleil ou du vent sont des ressources naturelles.",
                "Un gisement est un endroit où une ressource est assez concentrée pour être exploitée : un gisement de pétrole, une carrière de calcaire, une mine de cuivre. L'eau douce souterraine est stockée dans les roches du sous-sol, dans des réserves appelées nappes. Ce que nous utilisons chaque jour (votre téléphone, l'essence d'une voiture, le béton d'un immeuble, le papier d'un cahier) provient de ces ressources.",
              ],
              box: { label: "Définition", text: "Une ressource naturelle est un élément de la nature utilisé par les êtres humains : eau, sols, êtres vivants, roches et minerais, combustibles fossiles, énergie du Soleil ou du vent. Un gisement est un lieu où une ressource est assez concentrée pour être exploitée." },
            },
            {
              heading: "Renouvelable ou non renouvelable ?",
              paragraphs: [
                "Le pétrole et le gaz naturel se sont formés à partir de restes d'êtres vivants microscopiques, le plancton, accumulés au fond des mers et enfouis sous des couches de sédiments. Sous l'effet de la chaleur et de la pression, cette matière organique s'est transformée très lentement, pendant des millions d'années. Le charbon s'est formé de la même façon à partir de végétaux enfouis, en grande partie il y a environ 300 millions d'années. Ce sont les combustibles fossiles.",
                "L'humanité consomme en quelques siècles des réserves qui ont mis des millions d'années à se former : à l'échelle humaine, ces ressources ne se renouvellent pas. On dit qu'elles sont non renouvelables. C'est aussi le cas des minerais : un gisement de cuivre exploité ne se reconstitue pas.",
                "D'autres ressources se renouvellent à l'échelle humaine : le bois repousse, les poissons se reproduisent, les pluies rechargent les nappes d'eau. Mais elles ne restent renouvelables que si on les prélève moins vite qu'elles ne se reconstituent. Si l'on pêche plus de poissons qu'il n'en naît, ou si l'on pompe plus d'eau qu'il n'en arrive dans la nappe, la ressource s'épuise. L'énergie du Soleil et celle du vent, elles, sont inépuisables à l'échelle humaine.",
              ],
              box: { label: "Règle", text: "Une ressource est non renouvelable si elle se forme beaucoup plus lentement qu'on ne la consomme (combustibles fossiles, minerais). Une ressource renouvelable ne le reste que si on la prélève moins vite qu'elle ne se reconstitue." },
            },
            {
              heading: "Exploiter une ressource : des bénéfices et des impacts",
              paragraphs: [
                "Exploiter les ressources apporte de nombreux bénéfices : de l'énergie pour se chauffer et se déplacer, des matériaux pour construire, de la nourriture, des emplois. Mais cette exploitation a aussi des impacts sur l'environnement.",
                "Les mines et les carrières transforment les paysages et détruisent les milieux de vie qui s'y trouvaient. Le pompage excessif fait baisser le niveau des nappes, ce qui peut assécher des rivières et des zones humides. L'extraction de sable dans les rivières ou sur les côtes peut accélérer l'érosion des plages. Enfin, la combustion du pétrole, du gaz et du charbon rejette du dioxyde de carbone, un gaz à effet de serre responsable du changement climatique actuel, ainsi que des polluants de l'air.",
              ],
            },
            {
              heading: "Gérer les ressources de façon durable",
              paragraphs: [
                "Gérer une ressource de façon durable, c'est l'utiliser pour répondre à nos besoins sans empêcher les générations futures de répondre aux leurs. Plusieurs choix sont possibles. On peut économiser : mieux isoler les bâtiments, réparer les fuites d'eau, éviter le gaspillage. On peut recycler : l'aluminium, l'acier, le verre ou le papier se recyclent, ce qui évite d'extraire de nouvelles matières premières et consomme en général moins d'énergie.",
                "On peut aussi remplacer une ressource non renouvelable par une ressource renouvelable, par exemple produire de l'électricité avec l'énergie solaire ou éolienne plutôt qu'avec du charbon. Enfin, on peut réglementer : l'Union européenne fixe des quotas de pêche, les forêts gérées durablement sont replantées, les captages d'eau potable sont protégés, et en France une carrière doit être remise en état à la fin de son exploitation.",
              ],
              box: { label: "À retenir", text: "Gérer durablement les ressources : économiser, recycler, remplacer les ressources non renouvelables par des ressources renouvelables, réglementer les prélèvements (quotas, replantation, protection des nappes)." },
            },
          ],
          keyPoints: [
            "Une ressource naturelle est un élément de la nature utilisé par les êtres humains.",
            "Les combustibles fossiles (pétrole, gaz, charbon) se sont formés en millions d'années : ils sont non renouvelables.",
            "Les minerais sont aussi non renouvelables, mais les métaux peuvent être recyclés.",
            "Bois, poissons, eau des nappes : renouvelables seulement si on les prélève moins vite qu'ils ne se reconstituent.",
            "L'exploitation apporte des bénéfices, mais a des impacts : paysages, milieux de vie, nappes, climat.",
            "Gestion durable : économiser, recycler, remplacer, réglementer.",
          ],
          example: {
            statement: "Données fictives. Une nappe d'eau souterraine contient une réserve de 60 millions de m³. Chaque année, les pluies qui s'infiltrent la rechargent de 12 millions de m³, et les agriculteurs et la ville y pompent 15 millions de m³. 1) La nappe est-elle exploitée de façon durable ? 2) Si rien ne change, dans combien d'années sera-t-elle vide ?",
            solution: [
              "Je compare les entrées et les sorties : la nappe reçoit 12 millions de m³ par an, mais on en prélève 15 millions.",
              "Je calcule le bilan annuel : 12 - 15 = -3. La nappe perd 3 millions de m³ chaque année.",
              "1) On prélève plus vite que la ressource ne se reconstitue : l'exploitation n'est pas durable.",
              "2) Je calcule la durée : 60 ÷ 3 = 20 ans.",
              "Je vérifie : 20 × 3 = 60 millions de m³, soit toute la réserve.",
              "Conclusion : si rien ne change, la nappe sera vide dans 20 ans. Pour une gestion durable, il faudrait ramener les prélèvements à 12 millions de m³ par an au maximum.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces ressources en deux groupes, renouvelables ou non renouvelables à l'échelle humaine : pétrole, bois, charbon, énergie solaire, minerai de fer, poissons, énergie du vent, gaz naturel.",
              hint: "Demandez-vous si la ressource se reconstitue en quelques années ou s'il lui faut des millions d'années.",
              solution: [
                "Renouvelables : bois, énergie solaire, poissons, énergie du vent. Le bois et les poissons ne le restent que si on les prélève moins vite qu'ils ne se reconstituent.",
                "Non renouvelables : pétrole, charbon, minerai de fer, gaz naturel. Ils se sont formés en des millions d'années et ne se reconstituent pas à l'échelle humaine.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une forêt communale couvre 2 000 hectares. Chaque année, le bois des arbres augmente de 5 m³ par hectare. La commune coupe 12 000 m³ de bois par an. 1) Calculez le volume de bois produit chaque année par la croissance de toute la forêt. 2) La forêt est-elle exploitée de façon durable ? Justifiez par un calcul. 3) Quel volume maximal la commune peut-elle couper chaque année sans réduire sa forêt ?",
              hint: "Comparez ce que la forêt produit en un an avec ce que la commune prélève.",
              solution: [
                "1) Volume produit : 5 × 2 000 = 10 000 m³ par an.",
                "2) La commune coupe 12 000 m³, soit plus que les 10 000 m³ produits. Le volume de bois diminue de 12 000 - 10 000 = 2 000 m³ chaque année : l'exploitation n'est pas durable.",
                "3) Pour ne pas réduire la forêt, la commune ne doit pas couper plus que la croissance annuelle, soit 10 000 m³ par an au maximum.",
                "Résultat : la forêt produit 10 000 m³ par an ; en coupant 12 000 m³, la commune l'appauvrit ; la coupe durable maximale est de 10 000 m³ par an.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Pour fabriquer 1 tonne d'aluminium neuf, il faut extraire 4 tonnes de minerai (la bauxite) et dépenser 100 unités d'énergie. Pour fabriquer 1 tonne d'aluminium à partir de canettes recyclées, il faut 5 unités d'énergie et aucun minerai. Une ville collecte 30 tonnes de canettes par an. 1) Quelle masse de minerai le recyclage permet-il d'économiser chaque année ? 2) Calculez l'énergie nécessaire pour produire 30 tonnes d'aluminium neuf, puis 30 tonnes d'aluminium recyclé. 3) Quel pourcentage d'énergie le recyclage fait-il économiser ? 4) Citez deux autres choix de gestion qui permettraient d'économiser la bauxite.",
              hint: "Pour le pourcentage, divisez l'énergie économisée par l'énergie de départ, puis multipliez par 100.",
              solution: [
                "1) Minerai économisé : 30 × 4 = 120 tonnes de bauxite par an.",
                "2) Aluminium neuf : 30 × 100 = 3 000 unités d'énergie. Aluminium recyclé : 30 × 5 = 150 unités d'énergie.",
                "3) Énergie économisée : 3 000 - 150 = 2 850 unités. Pourcentage : 2 850 ÷ 3 000 × 100 = 95 %.",
                "4) Réduire la consommation d'emballages (gourdes réutilisables, achats en vrac) ; allonger la durée de vie des objets en aluminium en les réparant ou en les réutilisant ; mieux trier pour augmenter la quantité collectée.",
                "Conclusion : le recyclage des 30 tonnes de canettes évite d'extraire 120 tonnes de minerai et économise 95 % de l'énergie.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque ressource à sa description.",
            pairs: [
              { left: "Pétrole", right: "Combustible fossile formé à partir de plancton enfoui pendant des millions d'années" },
              { left: "Charbon", right: "Roche combustible formée à partir de végétaux enfouis" },
              { left: "Bois", right: "Ressource renouvelable si l'on ne coupe pas plus que ce qui repousse" },
              { left: "Sable et graviers", right: "Roches extraites des carrières pour fabriquer le béton et les routes" },
              { left: "Eau d'une nappe", right: "Ressource souterraine rechargée par les pluies qui s'infiltrent" },
              { left: "Énergie solaire", right: "Ressource inépuisable à l'échelle humaine" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi le pétrole est-il une ressource non renouvelable ?",
              options: ["Parce qu'il est liquide et difficile à stocker longtemps", "Parce qu'il a mis des millions d'années à se former", "Parce qu'il se trouve sous la mer", "Parce qu'il coûte cher à transporter"],
              answer: 1,
              why: "Il se forme beaucoup plus lentement qu'on ne le consomme : à l'échelle humaine, il ne se renouvelle pas.",
            },
            {
              q: "À quelle condition une ressource renouvelable, comme les poissons, le reste-t-elle ?",
              options: ["Si on la consomme surtout en été et en automne", "Si on l'exploite avec des machines modernes et rapides", "Si on la transporte sur de courtes distances", "Si on la prélève moins vite qu'elle ne se reconstitue"],
              answer: 3,
              why: "Prélever plus que ce qui se reconstitue fait diminuer la ressource, jusqu'à l'épuiser.",
            },
            {
              q: "Laquelle de ces actions est un recyclage ?",
              options: ["Refondre des canettes pour fabriquer de l'aluminium", "Remplacer une centrale à charbon par des éoliennes en mer", "Fixer des quotas de pêche", "Isoler le toit d'une maison"],
              answer: 0,
              why: "Recycler, c'est réutiliser la matière d'objets usagés pour en fabriquer de nouveaux, ce qui évite d'extraire du minerai.",
            },
            {
              q: "Quel impact la combustion du pétrole, du gaz et du charbon a-t-elle sur le climat ?",
              options: ["Elle refroidit l'atmosphère en hiver", "Elle n'a aucun effet mesurable sur les températures de la planète", "Elle rejette du dioxyde de carbone, un gaz à effet de serre"],
              answer: 2,
              why: "Le dioxyde de carbone rejeté renforce l'effet de serre, ce qui est responsable du changement climatique actuel.",
            },
            {
              q: "Une nappe reçoit 8 millions de m³ d'eau par an et l'on y pompe 10 millions de m³. Que se passe-t-il ?",
              options: ["Elle se remplit de 2 millions de m³ par an", "Elle perd 2 millions de m³ par an", "Elle reste stable grâce aux pluies d'hiver", "Elle perd 18 millions de m³ par an"],
              answer: 1,
              why: "Bilan : 8 - 10 = -2 millions de m³ par an. La nappe se vide peu à peu : l'exploitation n'est pas durable.",
            },
          ],
          trap: "Croire qu'une ressource renouvelable est inépuisable. Le bois, les poissons ou l'eau des nappes ne restent renouvelables que si on les prélève moins vite qu'ils ne se reconstituent ; sinon, ils s'épuisent comme une ressource fossile.",
          method: "Pour juger si une exploitation est durable, faites un bilan comme pour un porte-monnaie : ce qui entre (la reconstitution de la ressource) moins ce qui sort (les prélèvements). Si le résultat est négatif, la ressource diminue : l'exploitation n'est pas durable.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'impacts-ecosystemes',
          title: 'Les impacts des activités humaines sur les écosystèmes',
          minutes: 30,
          objectives: [
            "Définir un écosystème et citer des services qu'il rend aux êtres humains.",
            "Identifier les principaux impacts des activités humaines sur les écosystèmes.",
            "Expliquer un mécanisme d'impact : l'eutrophisation d'un cours d'eau ou l'accumulation d'un polluant dans une chaîne alimentaire.",
            "Argumenter des choix pour limiter ces impacts, en tenant compte des bénéfices et des risques.",
          ],
          course: [
            {
              heading: "Les écosystèmes et les services qu'ils rendent",
              paragraphs: [
                "Un écosystème est formé d'un milieu de vie (le sol, l'eau, l'air, le climat), des êtres vivants qui l'habitent et de toutes les relations qui les unissent : qui mange qui, qui pollinise quoi, qui abrite qui. Une forêt, une mare, une prairie, un récif de corail ou une rivière sont des écosystèmes.",
                "Les écosystèmes rendent de nombreux services aux êtres humains. Les insectes pollinisateurs permettent la production de nombreux fruits et légumes. Les sols fertiles nourrissent les cultures. Les zones humides filtrent l'eau et absorbent une partie des crues, comme une éponge. Les forêts fournissent du bois et stockent du carbone. Abîmer un écosystème, c'est donc aussi perdre ces services.",
              ],
              box: { label: "Définition", text: "Un écosystème est l'ensemble formé par un milieu de vie, les êtres vivants qui l'habitent et les relations qu'ils établissent entre eux et avec ce milieu." },
            },
            {
              heading: "Détruire, morceler, surexploiter",
              paragraphs: [
                "La première menace pour les écosystèmes est la destruction des milieux de vie. Pour construire des villes, des routes ou des zones commerciales, on recouvre les sols de béton et de bitume : c'est l'artificialisation des sols. Pour cultiver, on a arraché beaucoup de haies et asséché de nombreuses zones humides. Les forêts tropicales reculent sous l'effet de la déforestation.",
                "Même quand un milieu n'est pas détruit, il peut être morcelé. Une autoroute qui traverse une forêt coupe en deux les populations d'animaux : crapauds, hérissons ou chevreuils ne peuvent plus se déplacer pour se nourrir ou se reproduire, et beaucoup meurent en traversant.",
                "Les êtres humains prélèvent aussi trop de certains êtres vivants : c'est la surexploitation. Au large de Terre-Neuve, au Canada, la pêche intensive de la morue a tellement réduit les populations que leur pêche a dû être interdite en 1992. Enfin, des espèces transportées par les humains loin de leur région d'origine peuvent devenir envahissantes : le frelon asiatique, arrivé en France au milieu des années 2000, s'attaque aux abeilles.",
              ],
            },
            {
              heading: "Les pollutions : deux mécanismes à connaître",
              paragraphs: [
                "Les engrais apportent aux cultures des nitrates et des phosphates. Lorsqu'ils sont utilisés en excès, la pluie en entraîne une partie vers les rivières et la mer. Ces substances nourrissent alors les algues, qui prolifèrent. Quand les algues meurent, des bactéries les décomposent en consommant beaucoup de dioxygène dissous. L'eau s'appauvrit en dioxygène, et les poissons meurent asphyxiés. Ce phénomène s'appelle l'eutrophisation. Les marées d'algues vertes sur certaines plages de Bretagne sont liées à un excès de nitrates.",
                "Certains polluants, comme le mercure ou certains anciens pesticides, ne sont presque pas éliminés par les êtres vivants : ils s'accumulent dans leurs tissus. Chaque animal mange de nombreuses proies contaminées, si bien que la concentration du polluant augmente à chaque maillon de la chaîne alimentaire. Les grands prédateurs, en bout de chaîne, sont les plus touchés. C'est ainsi que l'insecticide DDT, aujourd'hui interdit dans de nombreux pays, a fragilisé les œufs de rapaces au milieu du XXe siècle.",
                "Les déchets plastiques, enfin, s'accumulent dans les océans : des animaux s'y emmêlent ou les avalent, et ils se fragmentent en microplastiques qui se retrouvent dans toute la chaîne alimentaire.",
              ],
              box: { label: "À retenir", text: "Eutrophisation : excès d'engrais, prolifération d'algues, décomposition qui consomme le dioxygène, mort des poissons. Accumulation : un polluant non éliminé se concentre à chaque maillon de la chaîne alimentaire, et les prédateurs en bout de chaîne sont les plus touchés." },
            },
            {
              heading: "Agir pour limiter les impacts",
              paragraphs: [
                "On peut protéger des milieux en créant des parcs nationaux, des réserves naturelles ou des aires marines protégées, où les activités humaines sont limitées. On peut reconnecter les milieux morcelés : passages à faune au-dessus ou sous les routes, haies replantées, cours d'eau rendus franchissables pour les poissons. En France, cette démarche s'appelle la trame verte et bleue.",
                "On peut réduire les pollutions : utiliser moins d'engrais et de pesticides, épurer les eaux usées dans des stations d'épuration, limiter les plastiques à usage unique. On peut aussi restaurer des milieux abîmés, par exemple en recréant une zone humide. Chaque décision se prend en comparant les bénéfices d'une activité (emplois, logements, nourriture) et ses risques pour les écosystèmes : c'est un choix de société, éclairé par la science.",
              ],
            },
          ],
          keyPoints: [
            "Un écosystème : un milieu de vie, des êtres vivants et leurs relations ; il rend des services (pollinisation, eau filtrée, sols fertiles).",
            "Impacts majeurs : destruction et morcellement des milieux, surexploitation, pollutions, espèces envahissantes, changement climatique.",
            "Eutrophisation : excès d'engrais, prolifération d'algues, manque de dioxygène, mort des poissons.",
            "Certains polluants se concentrent à chaque maillon de la chaîne alimentaire.",
            "Agir : protéger, reconnecter (trame verte et bleue), réduire les pollutions, restaurer, en pesant bénéfices et risques.",
          ],
          example: {
            statement: "Données fictives. On mesure le dioxygène dissous dans une rivière, en été. En amont d'un champ très fertilisé : 9 mg/L, eau claire, nombreux poissons. En aval du champ : 3 mg/L, eau verte remplie d'algues, poissons morts. Expliquez ces observations.",
            solution: [
              "Je compare les deux stations : en aval du champ, le dioxygène dissous passe de 9 à 3 mg/L, il a été divisé par 3 ; les algues sont abondantes et des poissons sont morts.",
              "J'identifie la cause probable : la pluie a entraîné vers la rivière une partie des engrais (nitrates, phosphates) répandus en excès sur le champ.",
              "J'explique le mécanisme : ces engrais nourrissent les algues, qui prolifèrent ; en mourant, elles sont décomposées par des bactéries qui consomment beaucoup de dioxygène.",
              "J'en déduis la conséquence : l'eau manque de dioxygène et les poissons meurent asphyxiés.",
              "Conclusion : la rivière subit une eutrophisation, provoquée par l'excès d'engrais venu du champ.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque situation au type d'impact correspondant (destruction d'un milieu, morcellement, surexploitation, pollution, espèce envahissante) : a) une zone humide est asséchée pour construire un parking ; b) une nouvelle route coupe une forêt en deux ; c) on pêche plus de thons qu'il n'en naît ; d) des pesticides atteignent une rivière ; e) le frelon asiatique s'attaque aux ruches.",
              hint: "Demandez-vous si le milieu disparaît, s'il est coupé en morceaux, si l'on prélève trop d'êtres vivants, si une substance est ajoutée, ou si une espèce venue d'ailleurs s'installe.",
              solution: [
                "a) Destruction d'un milieu : la zone humide disparaît sous le parking.",
                "b) Morcellement : la route sépare les populations d'animaux de la forêt.",
                "c) Surexploitation : on prélève les thons plus vite qu'ils ne se reproduisent.",
                "d) Pollution : une substance toxique est ajoutée au milieu.",
                "e) Espèce envahissante : le frelon asiatique a été introduit loin de sa région d'origine.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On mesure la concentration d'un pesticide dans une chaîne alimentaire d'un lac, en mg par kg. Eau : 0,001. Plancton : 0,04. Petits poissons : 0,5. Brochets : 2. Balbuzards (oiseaux qui mangent des poissons) : 25. 1) Comment la concentration évolue-t-elle le long de la chaîne alimentaire ? 2) Combien de fois la concentration est-elle plus forte chez le balbuzard que dans le plancton ? 3) Expliquez pourquoi le balbuzard est le plus contaminé, alors que le pesticide n'a été déversé que dans l'eau.",
              hint: "Pour savoir combien de fois une valeur est plus grande qu'une autre, divisez la plus grande par la plus petite.",
              solution: [
                "1) La concentration augmente à chaque maillon : 0,001 dans l'eau, 0,04 dans le plancton, 0,5 dans les petits poissons, 2 dans les brochets, 25 dans les balbuzards.",
                "2) 25 ÷ 0,04 = 625. La concentration est 625 fois plus forte chez le balbuzard que dans le plancton. Vérification : 0,04 × 625 = 25.",
                "3) Le pesticide n'est presque pas éliminé : il s'accumule dans les tissus. Chaque petit poisson mange beaucoup de plancton, chaque brochet beaucoup de petits poissons, et chaque balbuzard beaucoup de brochets et d'autres poissons. À chaque maillon, le polluant se concentre.",
                "Résultat : le balbuzard, en bout de chaîne, est le plus contaminé ; le pesticide est 625 fois plus concentré chez lui que dans le plancton.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Dans une région agricole, on comptait 120 km de haies en 1990 et 45 km en 2020. Sur la même période, le nombre d'espèces d'oiseaux observées est passé de 38 à 22. 1) Calculez le pourcentage de haies disparues. 2) Calculez le pourcentage d'espèces d'oiseaux disparues de la région, arrondi à l'unité. 3) Un élève conclut : « C'est prouvé, la disparition des haies est la seule cause de la baisse des oiseaux. » Que pensez-vous de cette conclusion ? 4) Proposez deux mesures pour aider les oiseaux à revenir, en tenant compte des besoins des agriculteurs.",
              hint: "Pourcentage de baisse = (valeur de départ - valeur d'arrivée) ÷ valeur de départ × 100. Pour la question 3, demandez-vous si d'autres changements ont pu se produire en trente ans.",
              solution: [
                "1) Haies disparues : 120 - 45 = 75 km. Pourcentage : 75 ÷ 120 × 100 = 62,5 %.",
                "2) Espèces disparues de la région : 38 - 22 = 16. Pourcentage : 16 ÷ 38 × 100 ≈ 42,1 %, soit environ 42 %.",
                "3) La conclusion va trop loin. Les deux baisses se produisent en même temps, et il est logique de les relier, car les haies offrent aux oiseaux des abris, des lieux de nidification et de la nourriture. Mais d'autres causes ont pu jouer en trente ans : pesticides qui réduisent les insectes, changement climatique, urbanisation. Les données montrent un lien possible, pas une cause unique prouvée.",
                "4) Replanter des haies en bordure des champs, avec l'aide de financements publics : elles abritent aussi des insectes qui mangent les ravageurs des cultures et protègent les sols du vent. Réduire l'usage des pesticides, ou laisser des bandes enherbées non traitées, pour que les oiseaux trouvent des insectes à manger.",
                "Conclusion : 62,5 % des haies et environ 42 % des espèces d'oiseaux ont disparu ; la perte des haies est une cause probable, mais pas forcément la seule, et des mesures peuvent concilier agriculture et biodiversité.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les activités humaines et les écosystèmes.",
            statements: [
              { text: "Un écosystème, c'est seulement l'ensemble des animaux d'un lieu.", true: false, why: "C'est un milieu de vie, tous les êtres vivants qui l'habitent (végétaux, animaux, champignons, micro-organismes) et leurs relations." },
              { text: "Les zones humides aident à limiter les crues.", true: true, why: "Elles absorbent une partie de l'eau comme une éponge, puis la relâchent lentement." },
              { text: "Plus on ajoute d'engrais dans une rivière, plus les poissons se portent bien.", true: false, why: "L'excès d'engrais provoque l'eutrophisation : les algues prolifèrent et le dioxygène vient à manquer." },
              { text: "Une route peut nuire à une forêt sans détruire un seul arbre de plus.", true: true, why: "Elle morcelle le milieu et empêche les animaux de se déplacer pour se nourrir et se reproduire." },
              { text: "Un polluant qui s'accumule touche surtout les prédateurs en bout de chaîne alimentaire.", true: true, why: "Sa concentration augmente à chaque maillon de la chaîne." },
              { text: "Une espèce venue d'un autre continent est toujours sans danger.", true: false, why: "Certaines deviennent envahissantes, comme le frelon asiatique, qui s'attaque aux abeilles." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un écosystème ?",
              options: ["Un milieu de vie, les êtres vivants qui l'habitent et leurs relations", "L'ensemble des plantes d'une région, sans tenir compte des animaux qui y vivent", "Une réserve où il est interdit d'entrer", "Un appareil qui mesure la pollution de l'eau"],
              answer: 0,
              why: "Un écosystème réunit un milieu de vie, ses êtres vivants et toutes les relations qui les unissent.",
            },
            {
              q: "Quelle est la cause de la mort des poissons lors d'une eutrophisation ?",
              options: ["L'eau devient trop salée pour eux", "Les algues mangent les poissons", "Le manque de dioxygène dans l'eau", "La température de l'eau gèle la rivière"],
              answer: 2,
              why: "Les bactéries qui décomposent les algues mortes consomment le dioxygène : les poissons meurent asphyxiés.",
            },
            {
              q: "Dans une chaîne alimentaire contaminée, quel être vivant a la plus forte concentration de polluant ?",
              options: ["Le plancton, au début de la chaîne", "Les petits poissons qui mangent le plancton", "L'eau du lac où vit la chaîne", "Le prédateur en bout de chaîne"],
              answer: 3,
              why: "Le polluant se concentre à chaque maillon : le prédateur final accumule celui de toutes ses proies.",
            },
            {
              q: "À quoi sert un passage à faune au-dessus d'une autoroute ?",
              options: ["À relier les deux parties d'un milieu morcelé", "À ralentir les voitures dans les virages", "À observer les animaux depuis la route", "À stocker le matériel d'entretien des routes en hiver"],
              answer: 0,
              why: "Il permet aux animaux de traverser sans danger et reconnecte les populations séparées par la route.",
            },
            {
              q: "Quelle mesure réduit directement le risque d'eutrophisation ?",
              options: ["Construire une nouvelle route le long de la rivière", "Limiter l'usage des engrais près des cours d'eau", "Introduire une nouvelle espèce de poisson dans la rivière"],
              answer: 1,
              why: "Moins d'engrais dans l'eau signifie moins de prolifération d'algues, donc moins de manque de dioxygène.",
            },
          ],
          trap: "Croire qu'une pollution ne touche que l'endroit où elle a été déversée, ou que les êtres vivants sont contaminés autant les uns que les autres. Certains polluants se concentrent le long de la chaîne alimentaire et touchent surtout les prédateurs, loin parfois du lieu de pollution.",
          method: "Pour expliquer un impact, rédigez une chaîne de causes et de conséquences reliées par « donc » ou « ce qui entraîne » : activité humaine, modification du milieu, effet sur les êtres vivants. Pour proposer une solution, agissez sur le premier maillon de cette chaîne, et pensez à citer un bénéfice et un risque.",
        },
      ],
    },
  ],
}
