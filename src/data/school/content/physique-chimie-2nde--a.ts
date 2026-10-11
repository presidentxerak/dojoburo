import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-2nde',
  chapters: [
    /* ================================================================== */
    /* CORPS PURS ET MÉLANGES AU QUOTIDIEN                                  */
    /* ================================================================== */
    {
      id: 'corps-purs-melanges',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "corps-pur-melange",
          title: "Corps purs et mélanges, composition de l'air",
          minutes: 30,
          objectives: [
            "Définir une espèce chimique, un corps pur et un mélange, et citer des exemples courants de corps purs et de mélanges homogènes et hétérogènes.",
            "Distinguer un mélange homogène d'un mélange hétérogène, et des liquides miscibles de liquides non miscibles.",
            "Déterminer la composition massique d'un mélange.",
            "Citer la composition approchée de l'air et l'ordre de grandeur de la valeur de sa masse volumique.",
          ],
          course: [
            {
              heading: "Espèce chimique et corps pur",
              paragraphs: [
                "Toute matière est constituée d'espèces chimiques. Une espèce chimique est un ensemble d'entités identiques (molécules, atomes ou ions) en nombre extrêmement grand : l'eau, le saccharose (sucre de table), le chlorure de sodium (sel de cuisine), le diazote ou le dioxygène sont des espèces chimiques. Chacune est désignée par un nom et par une formule chimique, par exemple H₂O pour l'eau ou O₂ pour le dioxygène.",
                "Un corps pur est constitué d'une seule espèce chimique. L'eau distillée, le diamant (constitué uniquement de carbone), un fil de cuivre pur ou le sucre en morceaux sont, aux impuretés près, des corps purs. Un mélange contient au moins deux espèces chimiques.",
                "Attention au sens courant du mot « pur » : une eau de source dite « pure » contient de nombreuses espèces dissoutes (ions calcium, magnésium, hydrogénocarbonate...). Pour le chimiste, c'est un mélange. Un jus de fruits « 100 % pur jus » est lui aussi un mélange de centaines d'espèces chimiques : eau, sucres, acides, vitamines, arômes.",
              ],
              box: { label: "Définition", text: "Une espèce chimique est une collection d'un très grand nombre d'entités identiques. Un corps pur est constitué d'une seule espèce chimique ; un mélange en contient au moins deux." },
            },
            {
              heading: "Mélanges homogènes et hétérogènes",
              paragraphs: [
                "Un mélange est homogène lorsqu'on ne peut pas distinguer ses constituants à l'œil nu : il ne présente qu'une seule phase. L'eau salée, l'eau du robinet, le vinaigre, l'air ou un sirop dilué sont des mélanges homogènes. Un mélange est hétérogène lorsqu'on distingue au moins deux phases : eau et huile, jus d'orange avec pulpe, eau boueuse, granite (on y voit des grains de quartz, de feldspath et de mica).",
                "Deux liquides sont miscibles lorsqu'ils forment un mélange homogène (eau et éthanol, eau et vinaigre) et non miscibles lorsqu'ils forment deux phases (eau et huile, eau et cyclohexane). Dans ce dernier cas, le liquide de plus faible masse volumique se place au-dessus : l'huile surnage sur l'eau.",
                "Le caractère homogène dépend de l'échelle d'observation : le lait paraît homogène à l'œil nu, mais au microscope on y voit des gouttelettes de matière grasse en suspension. Par convention, on classe les mélanges d'après ce que l'on observe à l'œil nu.",
              ],
              box: { label: "Repère", text: "Homogène : une seule phase visible (eau salée, air). Hétérogène : au moins deux phases visibles (eau et huile). Deux liquides miscibles donnent un mélange homogène, deux liquides non miscibles un mélange hétérogène." },
            },
            {
              heading: "La composition massique d'un mélange",
              paragraphs: [
                "Pour décrire un mélange, on indique la proportion de chacun de ses constituants. Le pourcentage massique (ou fraction massique) d'une espèce A dans un mélange est le quotient de la masse de A par la masse totale du mélange : w(A) = m(A) ÷ m(mélange). On l'exprime souvent en pourcentage en multipliant par 100. Les deux masses doivent être exprimées dans la même unité, et le résultat n'a pas d'unité.",
                "Exemple : un bijou de 200 g contient 180 g d'or et 20 g de cuivre (données fictives). w(or) = 180 ÷ 200 = 0,90, soit 90 % ; w(cuivre) = 20 ÷ 200 = 0,10, soit 10 %. La somme des pourcentages massiques de tous les constituants vaut toujours 100 % : c'est une bonne vérification de vos calculs.",
              ],
              box: { label: "Formule", text: "w(A) = m(A) ÷ m(mélange), sans unité, compris entre 0 et 1 (ou entre 0 % et 100 %). La somme des pourcentages massiques des constituants d'un mélange vaut 100 %." },
            },
            {
              heading: "La composition de l'air",
              paragraphs: [
                "L'air est un mélange homogène de gaz. En volume, l'air sec contient environ 78 % de diazote N₂, 21 % de dioxygène O₂ et environ 1 % d'autres gaz, principalement l'argon (près de 0,9 %) ; le dioxyde de carbone CO₂ n'en représente qu'environ 0,04 %. On retient la composition approchée : environ 4/5 de diazote et 1/5 de dioxygène. L'air humide contient en plus de la vapeur d'eau, en proportion variable.",
                "Il s'agit d'une composition volumique : dans 100 L d'air, environ 78 L sont occupés par le diazote et 21 L par le dioxygène. Contrairement à une idée répandue, l'air n'est donc pas majoritairement constitué d'« oxygène ». Sa masse volumique, dans les conditions usuelles (20 °C, pression atmosphérique), vaut environ 1,2 g·L⁻¹, soit 1,2 kg·m⁻³ : environ 800 fois moins que celle de l'eau liquide. Elle n'est pas nulle pour autant : l'air d'une pièce a une masse de plusieurs dizaines de kilogrammes.",
              ],
              box: { label: "À retenir", text: "Air sec, en volume : environ 78 % de diazote, 21 % de dioxygène, 1 % d'autres gaz (surtout de l'argon). Masse volumique de l'air : de l'ordre de 1 g·L⁻¹ (environ 1,2 g·L⁻¹ à 20 °C)." },
            },
          ],
          keyPoints: [
            "Espèce chimique : collection d'un très grand nombre d'entités identiques, désignée par un nom et une formule.",
            "Corps pur : une seule espèce chimique. Mélange : au moins deux espèces chimiques.",
            "Mélange homogène : une seule phase visible à l'œil nu. Mélange hétérogène : au moins deux phases.",
            "Pourcentage massique : w(A) = m(A) ÷ m(mélange) ; la somme des pourcentages vaut 100 %.",
            "Air sec en volume : environ 78 % de N₂, 21 % de O₂, 1 % d'autres gaz ; masse volumique d'environ 1,2 g·L⁻¹.",
          ],
          example: {
            statement: "Une vinaigrette de 250 g est préparée avec 150 g d'huile, 75 g de vinaigre et 25 g de moutarde (données fictives). Au repos, l'huile forme une couche au-dessus du vinaigre. 1. La vinaigrette est-elle un corps pur, un mélange homogène ou un mélange hétérogène ? 2. Calculer le pourcentage massique de chaque ingrédient.",
            solution: [
              "1. La vinaigrette contient plusieurs espèces chimiques : ce n'est pas un corps pur. Au repos, on distingue deux phases (l'huile au-dessus, le vinaigre au-dessous) : c'est un mélange hétérogène.",
              "2. Masse totale : m = 150 + 75 + 25 = 250 g, ce qui est cohérent avec l'énoncé.",
              "w(huile) = 150 ÷ 250 = 0,60, soit 60 %.",
              "w(vinaigre) = 75 ÷ 250 = 0,30, soit 30 % ; w(moutarde) = 25 ÷ 250 = 0,10, soit 10 %.",
              "Vérification : 60 % + 30 % + 10 % = 100 %. Réponse : la vinaigrette contient en masse 60 % d'huile, 30 % de vinaigre et 10 % de moutarde.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chacun des échantillons suivants en corps pur, mélange homogène ou mélange hétérogène : a) l'eau distillée ; b) l'eau du robinet ; c) un jus d'orange avec pulpe ; d) le diamant, constitué uniquement de carbone ; e) l'air sec filtré ; f) de l'eau et du cyclohexane, deux liquides non miscibles, dans un même tube ; g) un morceau de granite.",
              hint: "Demandez-vous d'abord combien d'espèces chimiques contient l'échantillon, puis, s'il y en a plusieurs, combien de phases on distingue à l'œil nu.",
              solution: [
                "a) L'eau distillée ne contient qu'une espèce chimique, l'eau : corps pur.",
                "b) L'eau du robinet contient de l'eau et des espèces dissoutes (ions, gaz), en une seule phase : mélange homogène.",
                "c) On distingue la pulpe dans le liquide : mélange hétérogène.",
                "d) Le diamant n'est constitué que de carbone : corps pur.",
                "e) L'air sec est un mélange de diazote, de dioxygène, d'argon... en une seule phase gazeuse : mélange homogène.",
                "f) Les deux liquides non miscibles forment deux phases : mélange hétérogène. g) On distingue des grains de nature différente : mélange hétérogène.",
                "Bilan : corps purs a et d ; mélanges homogènes b et e ; mélanges hétérogènes c, f et g.",
              ],
            },
            {
              level: 2,
              statement: "Le laiton est un alliage de cuivre et de zinc. Un objet en laiton de masse 240 g contient 156 g de cuivre, le reste étant du zinc (données fictives). 1. Calculer la masse de zinc. 2. Calculer les pourcentages massiques de cuivre et de zinc. 3. Un autre objet, fait du même laiton, a une masse de 500 g : quelle masse de cuivre contient-il ?",
              hint: "La masse du mélange est la somme des masses de ses constituants. Pour la question 3, la composition massique est la même, quelle que soit la masse de l'objet.",
              solution: [
                "1. m(zinc) = m(laiton) - m(cuivre) = 240 - 156 = 84 g.",
                "2. w(cuivre) = 156 ÷ 240 = 0,65, soit 65 %.",
                "w(zinc) = 84 ÷ 240 = 0,35, soit 35 %. Vérification : 65 % + 35 % = 100 %.",
                "3. Le second objet a la même composition : m(cuivre) = w(cuivre) × m(objet) = 0,65 × 500 = 325 g.",
                "Réponse : 84 g de zinc ; 65 % de cuivre et 35 % de zinc en masse ; 325 g de cuivre dans l'objet de 500 g.",
              ],
            },
            {
              level: 3,
              statement: "Une salle de classe a pour dimensions 8,0 m × 6,0 m × 3,0 m. On considère que l'air de la salle est sec, de masse volumique 1,2 kg·m⁻³, et on utilise la composition volumique approchée : 78 % de diazote, 21 % de dioxygène, 1 % d'autres gaz. 1. Calculer le volume d'air de la salle. 2. Calculer les volumes de diazote et de dioxygène. 3. Calculer la masse de l'air contenu dans la salle. 4. Un élève affirme : « l'air de la salle a une masse de moins d'un kilogramme, puisque l'air ne pèse presque rien ». Commenter. 5. Peut-on obtenir la masse de dioxygène de la salle en calculant 21 % de la masse d'air ? Justifier.",
              hint: "Le volume d'un pavé est le produit de ses trois dimensions. Pour la question 5, demandez-vous si 21 % est un pourcentage en masse ou en volume.",
              solution: [
                "1. V = 8,0 × 6,0 × 3,0 = 144 m³.",
                "2. V(diazote) = 0,78 × 144 ≈ 112 m³ ; V(dioxygène) = 0,21 × 144 ≈ 30 m³.",
                "3. m = ρ × V = 1,2 × 144 ≈ 173 kg, soit environ 1,7 × 10² kg.",
                "4. L'affirmation est fausse : la masse volumique de l'air est faible, environ 800 fois plus petite que celle de l'eau, mais le volume de la salle est grand. L'air de la salle a une masse de l'ordre de 170 kg.",
                "5. Non : 21 % est un pourcentage en volume. Un litre de dioxygène n'a pas la même masse qu'un litre de diazote (le dioxygène est un peu plus dense), donc le pourcentage massique du dioxygène dans l'air est différent de 21 % (il vaut environ 23 %).",
                "Réponse : 144 m³ d'air, dont environ 112 m³ de diazote et 30 m³ de dioxygène, pour une masse d'environ 1,7 × 10² kg ; composition volumique et composition massique ne doivent pas être confondues.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation.",
            statements: [
              { text: "L'eau minérale est un corps pur.", true: false, why: "Elle contient de l'eau et de nombreux ions dissous : c'est un mélange homogène." },
              { text: "Un mélange homogène ne présente qu'une seule phase visible à l'œil nu.", true: true, why: "C'est la définition : on ne distingue pas ses constituants." },
              { text: "L'air contient environ 21 % de dioxygène en volume.", true: true, why: "L'air sec contient environ 78 % de diazote, 21 % de dioxygène et 1 % d'autres gaz." },
              { text: "L'air est principalement constitué de dioxygène.", true: false, why: "Le gaz majoritaire est le diazote, environ 78 % du volume." },
              { text: "L'eau et l'huile sont deux liquides miscibles.", true: false, why: "Elles forment deux phases : ce sont des liquides non miscibles." },
              { text: "Un corps pur peut être constitué de molécules contenant plusieurs sortes d'atomes.", true: true, why: "L'eau pure ne contient qu'une espèce chimique, formée de molécules H₂O qui contiennent deux éléments." },
              { text: "La somme des pourcentages massiques des constituants d'un mélange vaut 100 %.", true: true, why: "Les masses des constituants s'additionnent pour donner la masse totale du mélange." },
            ],
          },
          quiz: [
            {
              q: "Un corps pur est constitué :",
              options: ["de plusieurs espèces chimiques non miscibles", "d'une seule espèce chimique", "d'un seul type d'atome, obligatoirement", "d'une substance sans aucun additif ajouté"],
              answer: 1,
              why: "Un corps pur ne contient qu'une espèce chimique, qui peut être formée de molécules à plusieurs éléments, comme l'eau.",
            },
            {
              q: "Quelle est la composition volumique approchée de l'air sec ?",
              options: ["21 % de diazote et 78 % de dioxygène", "50 % de diazote et 50 % de dioxygène", "78 % de dioxygène, 1 % d'argon, le reste en vapeur d'eau", "78 % de diazote, 21 % de dioxygène, 1 % d'autres gaz"],
              answer: 3,
              why: "Le diazote est majoritaire (environ 4/5), le dioxygène représente environ 1/5 du volume.",
            },
            {
              q: "Lequel de ces mélanges est hétérogène ?",
              options: ["Un mélange d'eau et d'huile", "L'eau sucrée bien dissoute", "L'air sec et filtré d'une salle", "Le vinaigre de vin blanc"],
              answer: 0,
              why: "L'eau et l'huile ne sont pas miscibles : on distingue deux phases.",
            },
            {
              q: "Quel est l'ordre de grandeur de la masse volumique de l'air dans les conditions usuelles ?",
              options: ["1 kg·L⁻¹", "1 g·mL⁻¹", "1 g·L⁻¹", "1 mg·L⁻¹"],
              answer: 2,
              why: "La masse volumique de l'air vaut environ 1,2 g·L⁻¹ à 20 °C : un litre d'air a une masse d'environ un gramme.",
            },
            {
              q: "On mélange 30 g de sucre et 270 g d'eau. Le pourcentage massique de sucre est :",
              options: ["11 %", "10 %", "30 %", "9 %"],
              answer: 1,
              why: "La masse totale vaut 30 + 270 = 300 g, donc w = 30 ÷ 300 = 0,10, soit 10 %.",
            },
          ],
          trap: "Confondre le sens courant de « pur » (sans additif, propre) et le sens chimique (une seule espèce chimique) : une eau minérale « pure » est un mélange. Autre confusion fréquente : croire que l'air est surtout constitué de dioxygène, alors qu'il contient environ 78 % de diazote.",
          method: "Pour classer un échantillon, posez-vous deux questions dans l'ordre : combien d'espèces chimiques contient-il (une seule : corps pur) ? S'il en contient plusieurs, combien de phases distingue-t-on à l'œil nu (une : homogène ; plusieurs : hétérogène) ? Pour un pourcentage massique, vérifiez toujours que la somme fait 100 %.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "identifier-especes",
          title: "Identifier une espèce chimique : changement d'état, masse volumique, tests",
          minutes: 30,
          objectives: [
            "Identifier, à partir de valeurs de référence, une espèce chimique par ses températures de changement d'état ou sa masse volumique.",
            "Distinguer un mélange d'un corps pur à partir de données expérimentales, en particulier d'une courbe de changement d'état.",
            "Citer la valeur de la masse volumique de l'eau liquide et la comparer à celles d'autres corps purs et mélanges.",
            "Citer les tests chimiques courants de présence d'eau, de dihydrogène, de dioxygène et de dioxyde de carbone.",
          ],
          course: [
            {
              heading: "Les températures de changement d'état",
              paragraphs: [
                "Une espèce chimique pure change d'état à une température bien définie, qui dépend de la pression : c'est une caractéristique physique qui permet de l'identifier. Sous la pression atmosphérique normale, l'eau pure fond à 0 °C et bout à 100 °C ; l'éthanol bout à 78 °C ; le cyclohexane fond à 6,5 °C et bout à 81 °C. Ces valeurs de référence figurent dans des tables ou sur les fiches de données des produits.",
                "Pour un corps pur, la température reste constante pendant toute la durée du changement d'état : la courbe représentant la température en fonction du temps présente un palier horizontal. Pour un mélange, en général, la température varie pendant le changement d'état : il n'y a pas de palier. L'eau de mer, par exemple, commence à geler vers -2 °C et sa température continue de baisser pendant la solidification. L'observation d'un palier est donc un indice de pureté.",
                "Au laboratoire, la température de fusion d'un solide se mesure rapidement avec un banc Kofler : une plaque métallique chauffée dont la température croît d'une extrémité à l'autre. On déplace un peu de poudre jusqu'à l'endroit où elle fond et on lit la température correspondante, après avoir étalonné le banc avec une substance de référence.",
              ],
              box: { label: "Propriété", text: "Un corps pur change d'état à température constante (palier sur la courbe de changement d'état). Ses températures de fusion et d'ébullition, sous une pression donnée, permettent de l'identifier." },
            },
            {
              heading: "La masse volumique",
              paragraphs: [
                "La masse volumique ρ (lettre grecque rhô) d'un échantillon est le quotient de sa masse m par son volume V : ρ = m ÷ V. Son unité légale est le kg·m⁻³, mais on utilise souvent le g·mL⁻¹ (identique au g·cm⁻³) ou le kg·L⁻¹. Pour un corps pur, à température et pression données, c'est une grandeur caractéristique.",
                "Une valeur à connaître : la masse volumique de l'eau liquide vaut ρ(eau) = 1,00 g·mL⁻¹ = 1,00 kg·L⁻¹ = 1,00 × 10³ kg·m⁻³. Comparaison : éthanol 0,79 g·mL⁻¹, huile de table environ 0,92 g·mL⁻¹, aluminium 2,70 g·cm⁻³, fer 7,87 g·cm⁻³, or 19,3 g·cm⁻³, air environ 1,2 × 10⁻³ g·mL⁻¹. Un objet plein, insoluble dans un liquide, flotte s'il a une masse volumique plus faible que ce liquide : la glace (0,92 g·cm⁻³) flotte sur l'eau.",
                "Pour mesurer une masse volumique, on mesure séparément la masse (balance, après avoir taré le récipient) et le volume (éprouvette graduée, fiole jaugée, ou volume de liquide déplacé pour un solide de forme irrégulière). On compare ensuite la valeur obtenue aux valeurs de référence, en tenant compte de la précision des mesures. Un mélange n'a pas de masse volumique caractéristique : la sienne dépend de sa composition (une eau salée est d'autant plus dense qu'elle est concentrée).",
              ],
              box: { label: "Formule", text: "ρ = m ÷ V. Conversions : 1 g·mL⁻¹ = 1 g·cm⁻³ = 1 kg·L⁻¹ = 1 000 kg·m⁻³. Eau liquide : ρ = 1,00 g·mL⁻¹." },
            },
            {
              heading: "Les tests chimiques caractéristiques",
              paragraphs: [
                "Un test chimique met en évidence la présence d'une espèce grâce à une transformation chimique qui produit un effet visible. Eau : le sulfate de cuivre anhydre, une poudre blanche, devient bleu au contact de l'eau. Dioxyde de carbone : l'eau de chaux, limpide, se trouble (un précipité blanc se forme) lorsqu'on y fait barboter ce gaz.",
                "Dioxygène : une bûchette présentant un point incandescent (rougeoyant, sans flamme) se rallume vivement dans un tube contenant du dioxygène. Dihydrogène : à l'approche d'une flamme, le gaz produit une petite détonation, souvent comparée à un « aboiement ». Un test révèle la présence d'une espèce, pas sa pureté : le sulfate de cuivre anhydre bleuit au contact d'un jus de fruits, qui contient de l'eau, sans que ce jus soit de l'eau pure.",
              ],
              box: { label: "À retenir", text: "Eau : sulfate de cuivre anhydre blanc → bleu. Dioxyde de carbone : eau de chaux → trouble. Dioxygène : bûchette incandescente → se rallume. Dihydrogène : flamme → légère détonation." },
            },
          ],
          keyPoints: [
            "Un corps pur change d'état à température constante : palier sur la courbe ; un mélange, en général, n'a pas de palier.",
            "Températures de référence de l'eau sous pression normale : fusion 0 °C, ébullition 100 °C.",
            "ρ = m ÷ V ; eau liquide : 1,00 g·mL⁻¹ = 1,00 kg·L⁻¹ = 1,00 × 10³ kg·m⁻³.",
            "Tests : sulfate de cuivre anhydre (eau), eau de chaux (CO₂), bûchette incandescente (O₂), flamme et détonation (H₂).",
            "Pour identifier une espèce, on compare une ou plusieurs mesures à des valeurs de référence.",
          ],
          example: {
            statement: "Un liquide incolore inconnu est étudié. Un volume V = 20,0 mL de ce liquide a une masse m = 15,8 g. Il bout à 78 °C, sa température restant constante pendant l'ébullition. Données de référence : eau (1,00 g·mL⁻¹ ; ébullition 100 °C), éthanol (0,79 g·mL⁻¹ ; 78 °C), cyclohexane (0,78 g·mL⁻¹ ; 81 °C), acétone (0,79 g·mL⁻¹ ; 56 °C). Identifier le liquide.",
            solution: [
              "Calcul de la masse volumique : ρ = m ÷ V = 15,8 ÷ 20,0 = 0,790 g·mL⁻¹.",
              "Comparaison : l'eau (1,00 g·mL⁻¹) est exclue. L'éthanol, l'acétone et le cyclohexane ont des masses volumiques trop proches pour être départagés par cette seule mesure.",
              "La température reste constante pendant l'ébullition : le liquide est un corps pur.",
              "Sa température d'ébullition, 78 °C, correspond à l'éthanol et exclut l'acétone (56 °C) et le cyclohexane (81 °C).",
              "Réponse : le liquide est de l'éthanol, ce que confirment à la fois sa masse volumique et sa température d'ébullition.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un cube métallique de 2,00 cm d'arête a une masse de 21,6 g. 1. Calculer son volume. 2. Calculer sa masse volumique en g·cm⁻³, puis en kg·m⁻³. 3. Identifier le métal à l'aide des données : aluminium 2,70 g·cm⁻³ ; zinc 7,13 g·cm⁻³ ; fer 7,87 g·cm⁻³ ; cuivre 8,96 g·cm⁻³.",
              hint: "Le volume d'un cube d'arête a vaut a × a × a. Pour la conversion, rappelez-vous que 1 g·cm⁻³ = 1 000 kg·m⁻³.",
              solution: [
                "1. V = 2,00 × 2,00 × 2,00 = 8,00 cm³.",
                "2. ρ = m ÷ V = 21,6 ÷ 8,00 = 2,70 g·cm⁻³, soit 2,70 × 10³ kg·m⁻³.",
                "3. Cette valeur correspond à celle de l'aluminium.",
                "Réponse : le cube est en aluminium (ρ = 2,70 g·cm⁻³).",
              ],
            },
            {
              level: 2,
              statement: "On réalise quatre tests. a) Une bûchette incandescente introduite dans le tube A se rallume. b) Le gaz du tube B, que l'on fait barboter dans de l'eau de chaux, la trouble. c) Quelques gouttes du liquide C déposées sur du sulfate de cuivre anhydre le font bleuir. d) À l'approche d'une allumette enflammée, le gaz du tube D produit une petite détonation. 1. Identifier l'espèce mise en évidence dans chaque cas. 2. Le test c suffit-il à affirmer que le liquide C est de l'eau pure ? Proposer une mesure complémentaire.",
              hint: "Associez chaque observation à l'un des quatre tests du cours. Un test révèle la présence d'une espèce, pas l'absence des autres.",
              solution: [
                "1. a) Le tube A contient du dioxygène. b) Le tube B contient du dioxyde de carbone. c) Le liquide C contient de l'eau. d) Le tube D contient du dihydrogène.",
                "2. Non : le test au sulfate de cuivre anhydre montre seulement que le liquide contient de l'eau ; un mélange aqueux (eau sucrée, jus de fruits) donnerait le même résultat.",
                "Mesure complémentaire : chauffer le liquide et relever sa température d'ébullition. Si l'ébullition se fait à 100 °C (sous pression normale) avec un palier, le liquide est de l'eau pure. On peut aussi mesurer sa masse volumique et la comparer à 1,00 g·mL⁻¹.",
                "Réponse : O₂, CO₂, eau, H₂ ; le test c ne prouve pas la pureté, une mesure de température d'ébullition est nécessaire.",
              ],
            },
            {
              level: 3,
              statement: "On refroidit deux liquides A et B et on relève leur température toutes les minutes. Liquide A (en °C) : 20 ; 14 ; 9 ; 6,5 ; 6,5 ; 6,5 ; 6,5 ; 4 ; 1, des cristaux apparaissant à partir de la 3e minute. Liquide B (en °C) : 20 ; 12 ; 5 ; 0 ; -2 ; -3 ; -4,5 ; -6 ; -8, les premiers cristaux apparaissant à la 4e minute, à -2 °C, et la solidification se poursuivant ensuite. Données : cyclohexane, fusion 6,5 °C, ρ = 0,78 g·mL⁻¹ ; eau, fusion 0 °C, ρ = 1,00 g·mL⁻¹. 1. Lequel des deux liquides est un corps pur ? Justifier. 2. Un volume de 25,0 mL du liquide A a une masse de 19,5 g. Identifier A en utilisant deux arguments. 3. Le liquide B est-il de l'eau pure ? Justifier.",
              hint: "Cherchez dans chaque série de mesures plusieurs valeurs identiques successives pendant la solidification : c'est un palier.",
              solution: [
                "1. Pour A, la température reste constante à 6,5 °C pendant la solidification (de la 3e à la 6e minute) : il y a un palier, A est un corps pur. Pour B, la température continue de baisser pendant la solidification : pas de palier, B est un mélange.",
                "2. ρ(A) = 19,5 ÷ 25,0 = 0,780 g·mL⁻¹, valeur du cyclohexane. Sa température de solidification (6,5 °C) est aussi celle du cyclohexane.",
                "Les deux arguments concordent : A est du cyclohexane.",
                "3. B n'est pas de l'eau pure : il n'y a pas de palier, et la solidification commence à -2 °C et non à 0 °C. B est un mélange, par exemple une eau salée, sans que ces seules mesures permettent de connaître ses constituants.",
                "Réponse : A est un corps pur, le cyclohexane ; B est un mélange.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque observation à ce qu'elle permet de conclure.",
            pairs: [
              { left: "Le sulfate de cuivre anhydre bleuit", right: "Présence d'eau" },
              { left: "L'eau de chaux se trouble", right: "Présence de dioxyde de carbone" },
              { left: "Une bûchette incandescente se rallume", right: "Présence de dioxygène" },
              { left: "Une légère détonation à l'approche d'une flamme", right: "Présence de dihydrogène" },
              { left: "Un palier de température pendant la fusion", right: "Indice d'un corps pur" },
              { left: "ρ = 1,00 g·mL⁻¹ et ébullition à 100 °C avec palier", right: "Eau pure liquide" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la masse volumique de l'eau liquide ?",
              options: ["1,00 kg·m⁻³", "1,00 g·L⁻¹", "1,00 g·mL⁻¹", "100 g·mL⁻¹"],
              answer: 2,
              why: "ρ(eau) = 1,00 g·mL⁻¹, soit aussi 1,00 kg·L⁻¹ ou 1,00 × 10³ kg·m⁻³.",
            },
            {
              q: "Quel test met en évidence le dioxyde de carbone ?",
              options: ["L'eau de chaux se trouble", "Le sulfate de cuivre anhydre bleuit", "Une bûchette incandescente se rallume", "Une flamme provoque une détonation"],
              answer: 0,
              why: "Le dioxyde de carbone trouble l'eau de chaux en formant un précipité blanc.",
            },
            {
              q: "La courbe de solidification d'un liquide ne présente pas de palier. On peut en conclure que :",
              options: ["le liquide est de l'eau", "le liquide est un corps pur", "la mesure est forcément fausse", "le liquide est un mélange"],
              answer: 3,
              why: "Un corps pur se solidifie à température constante ; l'absence de palier indique un mélange.",
            },
            {
              q: "Un solide de volume 10,0 cm³ a une masse de 78,7 g. Sa masse volumique vaut :",
              options: ["0,127 g·cm⁻³", "7,87 g·cm⁻³", "787 g·cm⁻³", "78,7 g·cm⁻³"],
              answer: 1,
              why: "ρ = m ÷ V = 78,7 ÷ 10,0 = 7,87 g·cm⁻³ : c'est la valeur du fer.",
            },
            {
              q: "Un objet plein flotte sur l'eau sans s'y dissoudre. Que peut-on dire de sa masse volumique ?",
              options: ["Elle est supérieure à 1,00 g·mL⁻¹", "Elle est égale à 1,00 g·mL⁻¹", "Elle est inférieure à 1,00 g·mL⁻¹", "On ne peut rien en dire"],
              answer: 2,
              why: "Un objet plein flotte sur un liquide lorsque sa masse volumique est plus faible que celle du liquide.",
            },
          ],
          trap: "Croire qu'une seule mesure suffit toujours : l'éthanol et l'acétone ont presque la même masse volumique (0,79 g·mL⁻¹), il faut alors croiser deux propriétés. Autre erreur fréquente : comparer une valeur en kg·m⁻³ à une référence en g·mL⁻¹ sans convertir.",
          method: "Pour identifier une espèce, calculez la grandeur mesurée avec son unité, convertissez-la dans l'unité des références, éliminez les candidats incompatibles en tenant compte de la précision, puis départagez ceux qui restent avec une deuxième propriété (température de changement d'état ou test chimique).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "chromatographie",
          title: "La chromatographie sur couche mince",
          minutes: 25,
          objectives: [
            "Décrire le principe d'une chromatographie sur couche mince : phase fixe, éluant, migration et séparation des espèces.",
            "Réaliser et interpréter un chromatogramme pour identifier les espèces chimiques d'un mélange par comparaison avec des références.",
            "Calculer un rapport frontal et l'utiliser pour comparer des espèces chimiques.",
            "Distinguer un mélange d'un corps pur à partir d'un chromatogramme.",
          ],
          course: [
            {
              heading: "Le principe de la chromatographie",
              paragraphs: [
                "La chromatographie est une technique qui permet de séparer les espèces chimiques d'un mélange et de les identifier. Dans la chromatographie sur couche mince (CCM), on utilise une plaque recouverte d'une fine couche de silice (ou de cellulose) : c'est la phase fixe, ou phase stationnaire. Un solvant, appelé éluant ou phase mobile, monte le long de la plaque par capillarité, comme le café monte dans un morceau de sucre.",
                "Pendant sa montée, l'éluant entraîne les espèces déposées sur la plaque. Chaque espèce est plus ou moins retenue par la phase fixe et plus ou moins soluble dans l'éluant : elle migre donc à sa propre vitesse. Les espèces se séparent et forment des taches à des hauteurs différentes. Le mot vient du grec khrôma, la couleur : au début du XXe siècle, le botaniste Mikhaïl Tswett a utilisé cette méthode pour séparer les pigments colorés des feuilles.",
              ],
              box: { label: "Définition", text: "La chromatographie sur couche mince est une technique de séparation et d'identification. La phase fixe (silice sur une plaque) retient plus ou moins les espèces, la phase mobile (éluant) les entraîne ; chaque espèce migre sur une distance qui lui est propre." },
            },
            {
              heading: "Réaliser une CCM",
              paragraphs: [
                "On trace au crayon à papier (et non au stylo, dont l'encre migrerait) une ligne de dépôt à environ 1 cm du bas de la plaque. On y dépose, à l'aide d'un capillaire, une petite goutte de chaque échantillon : le mélange à analyser et des espèces de référence, en espaçant les dépôts. On verse l'éluant dans la cuve sur une hauteur inférieure à celle de la ligne de dépôt, pour que les dépôts ne se dissolvent pas directement dans l'éluant.",
                "On place la plaque dans la cuve, que l'on ferme pour que son atmosphère reste saturée en vapeur d'éluant, et on laisse l'éluant monter. On retire la plaque avant que l'éluant n'atteigne le haut et on marque aussitôt au crayon le front de l'éluant, c'est-à-dire la hauteur qu'il a atteinte. Après séchage, on révèle les taches incolores : sous une lampe ultraviolette (avec une plaque fluorescente) ou dans un flacon contenant des cristaux de diiode. Les espèces colorées sont directement visibles.",
              ],
              box: { label: "Règle", text: "Ligne de dépôt au crayon, éluant sous la ligne de dépôt, cuve fermée, front de l'éluant marqué dès la sortie de la plaque, révélation si les taches sont incolores." },
            },
            {
              heading: "Interpréter un chromatogramme",
              paragraphs: [
                "Une même espèce, éluée sur une même plaque, migre toujours à la même hauteur. Pour identifier les constituants d'un mélange, on compare donc les hauteurs de ses taches à celles des références. Si le dépôt d'un échantillon donne plusieurs taches, l'échantillon est un mélange. S'il ne donne qu'une tache, il est peut-être pur : deux espèces peuvent migrer à la même hauteur avec un éluant donné, c'est pourquoi on confirme parfois avec un autre éluant.",
                "Pour comparer des espèces, on calcule le rapport frontal Rf = h ÷ H, où h est la distance parcourue par l'espèce (de la ligne de dépôt au centre de la tache) et H la distance parcourue par l'éluant (de la ligne de dépôt au front). Rf est sans unité et compris entre 0 et 1. Pour une espèce donnée, il dépend de la phase fixe, de l'éluant et de la température, mais pas de la durée de l'élution : on peut ainsi comparer des plaques réalisées dans les mêmes conditions.",
                "Exemple : on analyse un colorant alimentaire vert. Son dépôt donne une tache jaune à la même hauteur que la référence E102 (tartrazine) et une tache bleue à la même hauteur que la référence E131 (bleu patenté V). Le colorant vert est donc un mélange d'au moins ces deux colorants.",
              ],
              box: { label: "Formule", text: "Rf = h ÷ H (h : distance parcourue par l'espèce, H : distance parcourue par l'éluant, toutes deux mesurées depuis la ligne de dépôt). Même Rf dans les mêmes conditions : très probablement la même espèce." },
            },
          ],
          keyPoints: [
            "La CCM sépare les espèces d'un mélange : phase fixe (silice), phase mobile (éluant) qui monte par capillarité.",
            "Ligne de dépôt au crayon, éluant sous la ligne de dépôt, cuve fermée, front de l'éluant marqué.",
            "Plusieurs taches pour un dépôt : mélange. Une seule tache : peut-être un corps pur.",
            "Même hauteur qu'une référence sur la même plaque : même espèce probable.",
            "Rf = h ÷ H, sans unité, entre 0 et 1, mesuré depuis la ligne de dépôt.",
          ],
          example: {
            statement: "Sur un chromatogramme, le front de l'éluant est à 6,0 cm de la ligne de dépôt. Le dépôt d'une encre noire donne trois taches, situées à 1,5 cm, 3,0 cm et 4,8 cm de la ligne de dépôt. Trois colorants de référence A, B et C donnent chacun une tache, respectivement à 3,0 cm, 4,2 cm et 1,5 cm. 1. L'encre est-elle un corps pur ? 2. Calculer les rapports frontaux. 3. Identifier les constituants de l'encre.",
            solution: [
              "1. Le dépôt de l'encre donne trois taches : l'encre est un mélange d'au moins trois espèces.",
              "2. Encre : Rf₁ = 1,5 ÷ 6,0 = 0,25 ; Rf₂ = 3,0 ÷ 6,0 = 0,50 ; Rf₃ = 4,8 ÷ 6,0 = 0,80.",
              "Références : Rf(A) = 3,0 ÷ 6,0 = 0,50 ; Rf(B) = 4,2 ÷ 6,0 = 0,70 ; Rf(C) = 1,5 ÷ 6,0 = 0,25.",
              "3. La tache de Rf 0,25 correspond à C, celle de Rf 0,50 à A. Aucune tache de l'encre n'a le Rf de B (0,70).",
              "La tache de Rf 0,80 ne correspond à aucune référence : c'est une autre espèce, non identifiée ici.",
              "Réponse : l'encre contient les colorants A et C et au moins une autre espèce ; elle ne contient pas B.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sur une plaque de CCM, une espèce a migré de 2,4 cm pendant que l'éluant parcourait 8,0 cm. 1. Calculer le rapport frontal de cette espèce. 2. Sur une autre plaque, dans les mêmes conditions, l'éluant parcourt 6,0 cm. À quelle distance de la ligne de dépôt attend-on la tache de cette espèce ?",
              hint: "Dans les mêmes conditions, le rapport frontal d'une espèce ne change pas : h = Rf × H.",
              solution: [
                "1. Rf = h ÷ H = 2,4 ÷ 8,0 = 0,30.",
                "2. Dans les mêmes conditions, Rf reste égal à 0,30 : h = Rf × H = 0,30 × 6,0 = 1,8 cm.",
                "Réponse : Rf = 0,30 ; la tache est attendue à 1,8 cm de la ligne de dépôt.",
              ],
            },
            {
              level: 2,
              statement: "Un élève réalise une CCM de la façon suivante : il trace la ligne de dépôt au stylo bille à 0,5 cm du bas de la plaque ; il verse l'éluant dans la cuve sur 1 cm de hauteur ; il laisse la cuve ouverte ; il attend que l'éluant atteigne le haut de la plaque avant de la sortir. Relever les quatre erreurs et expliquer, pour chacune, sa conséquence sur le résultat.",
              hint: "Reprenez une à une les règles de réalisation d'une CCM : nature du trait, hauteur d'éluant, cuve, repérage du front.",
              solution: [
                "Erreur 1 : le trait au stylo bille. L'encre est elle-même un mélange qui migre avec l'éluant : elle produit des taches parasites. Il faut utiliser un crayon à papier.",
                "Erreur 2 : l'éluant sur 1 cm alors que la ligne de dépôt est à 0,5 cm. Les dépôts plongent dans l'éluant et s'y dissolvent au lieu de migrer sur la plaque. L'éluant doit rester sous la ligne de dépôt.",
                "Erreur 3 : la cuve ouverte. L'éluant s'évapore de la plaque, la migration devient irrégulière et les résultats ne sont pas reproductibles. La cuve doit être fermée.",
                "Erreur 4 : attendre que l'éluant atteigne le haut. On ne peut plus repérer le front de l'éluant, donc mesurer H, et les espèces continuent de migrer : les rapports frontaux sont faux. Il faut sortir la plaque avant et marquer le front aussitôt.",
                "Bilan : quatre erreurs, qui faussent toutes l'identification des espèces.",
              ],
            },
            {
              level: 3,
              statement: "On veut savoir si une huile essentielle de menthe contient du menthol et de la menthone, deux espèces incolores. On réalise une CCM avec trois dépôts : 1, l'huile essentielle ; 2, du menthol pur ; 3, de la menthone pure. Après révélation au diiode, on mesure (données fictives) : front de l'éluant à 7,5 cm de la ligne de dépôt ; dépôt 1 : taches à 2,4 cm, 5,1 cm et 6,3 cm ; dépôt 2 : une tache à 2,4 cm ; dépôt 3 : une tache à 5,1 cm. 1. Pourquoi faut-il révéler la plaque ? 2. Calculer les rapports frontaux de toutes les taches. 3. Conclure sur la composition de l'huile essentielle. 4. Un camarade affirme que la tache située à 6,3 cm prouve la présence de limonène. Que faut-il faire pour le vérifier ?",
              hint: "Comparez les rapports frontaux des taches de l'huile essentielle à ceux des références. Une identification exige une référence déposée sur la même plaque.",
              solution: [
                "1. Le menthol et la menthone sont incolores : sans révélation, leurs taches seraient invisibles.",
                "2. Huile essentielle : 2,4 ÷ 7,5 = 0,32 ; 5,1 ÷ 7,5 = 0,68 ; 6,3 ÷ 7,5 = 0,84. Menthol : 2,4 ÷ 7,5 = 0,32. Menthone : 5,1 ÷ 7,5 = 0,68.",
                "3. L'huile essentielle donne trois taches : c'est un mélange. Ses taches de Rf 0,32 et 0,68 correspondent au menthol et à la menthone. Elle contient donc du menthol, de la menthone et au moins une troisième espèce (Rf 0,84).",
                "4. Rien ne permet d'affirmer qu'il s'agit du limonène. Il faut refaire la CCM en ajoutant un dépôt de limonène pur sur la même plaque : si sa tache a le même Rf que la tache inconnue (0,84), la présence de limonène est probable ; on peut la confirmer avec un autre éluant.",
                "Réponse : l'huile essentielle contient du menthol, de la menthone et au moins une autre espèce, dont l'identité reste à établir avec une référence.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la réalisation d'une chromatographie sur couche mince.",
            items: [
              "Tracer au crayon la ligne de dépôt à 1 cm du bas de la plaque",
              "Déposer une goutte de chaque échantillon sur la ligne avec un capillaire",
              "Placer la plaque dans la cuve, l'éluant sous la ligne de dépôt, et fermer",
              "Retirer la plaque avant que l'éluant atteigne le haut",
              "Marquer aussitôt le front de l'éluant au crayon",
              "Sécher puis révéler la plaque sous UV ou au diiode",
              "Mesurer les distances et calculer les rapports frontaux",
            ],
          },
          quiz: [
            {
              q: "Dans une CCM, l'éluant est :",
              options: ["la phase mobile qui monte par capillarité", "la plaque recouverte de silice", "la tache laissée par le mélange", "le produit chimique utilisé pour révéler les taches"],
              answer: 0,
              why: "L'éluant est le solvant qui monte le long de la plaque et entraîne les espèces : c'est la phase mobile.",
            },
            {
              q: "Pourquoi trace-t-on la ligne de dépôt au crayon à papier ?",
              options: ["Parce que le crayon est plus précis qu'une règle graduée", "Pour que le trait soit visible sous la lampe UV", "Parce que le graphite ne migre pas avec l'éluant", "Pour que l'éluant monte plus vite"],
              answer: 2,
              why: "Le graphite du crayon reste en place, alors que l'encre d'un stylo migrerait et donnerait des taches parasites.",
            },
            {
              q: "Une espèce migre de 3,6 cm pendant que l'éluant parcourt 9,0 cm. Son rapport frontal vaut :",
              options: ["2,5", "0,40", "0,25", "5,4"],
              answer: 1,
              why: "Rf = h ÷ H = 3,6 ÷ 9,0 = 0,40, une valeur bien comprise entre 0 et 1.",
            },
            {
              q: "Le dépôt d'un échantillon donne trois taches. L'échantillon :",
              options: ["est un corps pur", "contient une seule espèce qui s'est fragmentée", "a été mal déposé sur la plaque", "est un mélange d'au moins trois espèces"],
              answer: 3,
              why: "Chaque tache correspond à au moins une espèce : trois taches indiquent un mélange.",
            },
            {
              q: "Deux taches situées à la même hauteur sur une même plaque correspondent probablement :",
              options: ["à la même espèce chimique", "à deux espèces de même couleur", "à deux dépôts de même taille", "à deux espèces de même masse"],
              answer: 0,
              why: "Dans les mêmes conditions, une espèce donnée migre toujours sur la même distance.",
            },
          ],
          trap: "Mesurer les distances depuis le bas de la plaque au lieu de la ligne de dépôt, ou jusqu'au haut de la plaque au lieu du front de l'éluant : le rapport frontal se calcule toujours à partir de la ligne de dépôt, h jusqu'au centre de la tache et H jusqu'au front.",
          method: "Lisez un chromatogramme colonne par colonne : comptez les taches de chaque dépôt (une ou plusieurs), puis suivez une ligne horizontale à partir de chaque tache du mélange pour chercher une référence à la même hauteur. Concluez avec des formules prudentes : « contient », « ne contient pas », « contient au moins une autre espèce ».",
        },
      ],
    },
    /* ================================================================== */
    /* LES SOLUTIONS AQUEUSES                                               */
    /* ================================================================== */
    {
      id: 'solutions-aqueuses',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "concentration-masse",
          title: "Solvant, soluté et concentration en masse",
          minutes: 30,
          objectives: [
            "Identifier le soluté et le solvant à partir de la composition ou du mode opératoire de préparation d'une solution.",
            "Calculer une concentration en masse, et utiliser sa relation pour calculer une masse de soluté ou un volume de solution.",
            "Distinguer la masse volumique d'un échantillon et la concentration en masse d'un soluté au sein d'une solution.",
            "Définir la concentration maximale d'un soluté et reconnaître une solution saturée.",
          ],
          course: [
            {
              heading: "Solvant, soluté, solution",
              paragraphs: [
                "Une solution est un mélange homogène obtenu en dissolvant une ou plusieurs espèces chimiques, les solutés, dans une autre espèce chimique, le solvant, présente en grande quantité. Lorsque le solvant est l'eau, on parle de solution aqueuse. Le soluté peut être un solide (sel, sucre, sulfate de cuivre), un liquide (éthanol) ou un gaz (dioxyde de carbone dans une boisson gazeuse, dioxygène dissous dans l'eau des rivières).",
                "Exemples : dans l'eau sucrée, le solvant est l'eau et le soluté le saccharose ; dans le sérum physiologique, le solvant est l'eau et le soluté le chlorure de sodium ; dans la teinture d'iode, autrefois très utilisée comme antiseptique, le solvant est l'éthanol et le soluté le diiode. Une dissolution ne fait pas disparaître le soluté : sa masse se conserve, il est seulement dispersé à l'échelle microscopique au milieu des molécules de solvant.",
              ],
              box: { label: "Définition", text: "Solution = solvant (espèce majoritaire) + un ou plusieurs solutés dissous. Dans une solution aqueuse, le solvant est l'eau. Une solution est un mélange homogène." },
            },
            {
              heading: "La concentration en masse",
              paragraphs: [
                "La concentration en masse Cm d'un soluté dans une solution est le quotient de la masse m de soluté dissous par le volume V de la solution : Cm = m ÷ V. Avec m en grammes et V en litres, Cm s'exprime en grammes par litre (g·L⁻¹). Attention : V est le volume de la solution obtenue, pas le volume de solvant versé.",
                "Exemple : le sérum physiologique contient 9 g de chlorure de sodium par litre de solution : Cm = 9 g·L⁻¹. Un flacon de 250 mL, soit 0,250 L, en contient donc m = Cm × V = 9 × 0,250 = 2,25 g. La relation se transforme selon la grandeur cherchée : m = Cm × V ou V = m ÷ Cm. Pensez à convertir les millilitres en litres (1 mL = 10⁻³ L) avant de calculer.",
                "Une solution étant homogène, la concentration est la même en tout point. Si l'on prélève 10 mL d'un sérum à 9 g·L⁻¹, ce prélèvement a toujours une concentration de 9 g·L⁻¹, même s'il ne contient que 0,09 g de soluté. La concentration décrit une proportion, la masse une quantité.",
              ],
              box: { label: "Formule", text: "Cm = m ÷ V, avec m la masse de soluté dissous (en g), V le volume de la solution (en L) et Cm en g·L⁻¹. On en déduit m = Cm × V et V = m ÷ Cm." },
            },
            {
              heading: "Ne pas confondre avec la masse volumique",
              paragraphs: [
                "La masse volumique ρ d'une solution est le quotient de la masse de toute la solution (solvant et soluté) par son volume : ρ = m(solution) ÷ V(solution). La concentration en masse ne prend en compte que la masse du soluté. Les deux grandeurs peuvent s'exprimer dans la même unité (g·L⁻¹) mais ne décrivent pas la même chose : une eau sucrée peut avoir une masse volumique d'environ 1 040 g·L⁻¹ et une concentration en sucre d'environ 100 g·L⁻¹.",
                "Pour une solution aqueuse peu concentrée, la masse volumique est proche de celle de l'eau, environ 1 000 g·L⁻¹, alors que la concentration en masse du soluté peut ne valoir que quelques grammes par litre. La concentration en masse d'un soluté est toujours inférieure à la masse volumique de la solution, puisque le soluté ne représente qu'une partie de la masse de la solution.",
              ],
              box: { label: "À retenir", text: "ρ = m(solution) ÷ V(solution) : toute la masse. Cm = m(soluté) ÷ V(solution) : seulement le soluté. Pour une solution aqueuse diluée, ρ ≈ 1 000 g·L⁻¹." },
            },
            {
              heading: "La concentration maximale d'un soluté",
              paragraphs: [
                "On ne peut pas dissoudre une quantité illimitée de soluté dans un volume donné de solvant. Au-delà d'une certaine masse, le soluté ajouté ne se dissout plus et reste au fond du récipient : la solution est dite saturée. La concentration en masse de la solution saturée est la concentration maximale du soluté, appelée aussi solubilité. Elle dépend du soluté, du solvant et de la température.",
                "Pour le chlorure de sodium dans l'eau à 20 °C, la concentration maximale est de l'ordre de 3 × 10² g·L⁻¹. Pour le diiode, elle est très faible dans l'eau (de l'ordre de 0,3 g·L⁻¹) mais beaucoup plus grande dans l'éthanol, ce qui explique le choix de ce solvant pour la teinture d'iode. Pour la plupart des solides, la concentration maximale augmente avec la température : on dissout plus de sucre dans un thé chaud que dans un thé glacé.",
              ],
              box: { label: "Repère", text: "Si la masse de soluté introduite dépasse Cmax × V, une partie ne se dissout pas : la solution est saturée et sa concentration en masse est égale à Cmax." },
            },
          ],
          keyPoints: [
            "Solution = solvant majoritaire + soluté(s) dissous ; solution aqueuse : le solvant est l'eau.",
            "Cm = m(soluté) ÷ V(solution), en g·L⁻¹ ; m = Cm × V ; V = m ÷ Cm.",
            "Toujours utiliser le volume de la solution, converti en litres.",
            "Masse volumique : masse de toute la solution par litre ; concentration en masse : masse du soluté seul par litre.",
            "Concentration maximale (solubilité) : au-delà, la solution est saturée et le soluté ne se dissout plus.",
          ],
          example: {
            statement: "On dissout 5,0 g de sulfate de cuivre dans de l'eau distillée et l'on complète jusqu'à obtenir 250,0 mL de solution. 1. Identifier le soluté et le solvant. 2. Calculer la concentration en masse du sulfate de cuivre. 3. Quelle masse de sulfate de cuivre contient un prélèvement de 20,0 mL de cette solution ?",
            solution: [
              "1. Le soluté est le sulfate de cuivre (solide dissous), le solvant est l'eau : la solution est aqueuse.",
              "2. Conversion du volume : V = 250,0 mL = 0,2500 L.",
              "Cm = m ÷ V = 5,0 ÷ 0,2500 = 20 g·L⁻¹.",
              "3. Le prélèvement a la même concentration que la solution : 20 g·L⁻¹. Son volume vaut 20,0 mL = 0,0200 L.",
              "m = Cm × V = 20 × 0,0200 = 0,40 g.",
              "Réponse : Cm = 20 g·L⁻¹ ; le prélèvement de 20,0 mL contient 0,40 g de sulfate de cuivre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) On dissout 12 g de sucre dans de l'eau et l'on obtient 0,40 L de solution : calculer la concentration en masse du sucre. b) Quelle masse de sel faut-il dissoudre pour préparer 500 mL d'eau salée à 30 g·L⁻¹ ? c) Quel volume de sérum physiologique à 9,0 g·L⁻¹ contient 0,45 g de chlorure de sodium ?",
              hint: "Écrivez la relation Cm = m ÷ V, isolez la grandeur demandée et convertissez les volumes en litres.",
              solution: [
                "a) Cm = m ÷ V = 12 ÷ 0,40 = 30 g·L⁻¹.",
                "b) V = 500 mL = 0,500 L ; m = Cm × V = 30 × 0,500 = 15 g.",
                "c) V = m ÷ Cm = 0,45 ÷ 9,0 = 0,050 L, soit 50 mL.",
                "Réponses : 30 g·L⁻¹ ; 15 g ; 50 mL.",
              ],
            },
            {
              level: 2,
              statement: "Une solution S est préparée en dissolvant 20,0 g de chlorure de sodium dans de l'eau ; on obtient 200,0 mL de solution, dont la masse totale est de 214,0 g. 1. Identifier le soluté et le solvant. 2. Calculer la concentration en masse du chlorure de sodium. 3. Calculer la masse volumique de la solution en g·L⁻¹, puis en g·mL⁻¹. 4. Expliquer pourquoi ces deux grandeurs ont des valeurs différentes.",
              hint: "La concentration en masse utilise la masse du soluté, la masse volumique celle de toute la solution ; le volume est le même dans les deux cas.",
              solution: [
                "1. Le soluté est le chlorure de sodium, le solvant est l'eau.",
                "2. V = 200,0 mL = 0,2000 L ; Cm = 20,0 ÷ 0,2000 = 100 g·L⁻¹.",
                "3. ρ = m(solution) ÷ V = 214,0 ÷ 0,2000 = 1 070 g·L⁻¹, soit 1,07 g·mL⁻¹.",
                "4. La masse volumique tient compte de la masse de toute la solution (214,0 g, dont 194,0 g d'eau), la concentration en masse uniquement de celle du sel (20,0 g). Il est donc normal que ρ soit beaucoup plus grande que Cm.",
                "Réponse : Cm = 100 g·L⁻¹ et ρ = 1 070 g·L⁻¹ = 1,07 g·mL⁻¹.",
              ],
            },
            {
              level: 3,
              statement: "La concentration maximale d'un soluté X dans l'eau à 20 °C vaut 36 g·L⁻¹ (données fictives). Un élève introduit 10 g de X dans une fiole jaugée de 250 mL, complète avec de l'eau jusqu'au trait de jauge et agite longuement à 20 °C. On admet que le volume de la solution reste égal à 250 mL. 1. Quelle concentration obtiendrait-il si tout le soluté se dissolvait ? 2. Tout le soluté peut-il se dissoudre ? Justifier. 3. Quelle masse de X reste non dissoute ? 4. Quelle est la concentration en masse de la solution obtenue ? 5. Sans changer de température, que pourrait-il faire pour dissoudre tout le soluté ? Préciser le volume minimal de solution.",
              hint: "Comparez la concentration visée à la concentration maximale, puis calculez la masse maximale dissoute : m(max) = Cmax × V.",
              solution: [
                "1. Cm = 10 ÷ 0,250 = 40 g·L⁻¹.",
                "2. Non : 40 g·L⁻¹ est supérieur à la concentration maximale (36 g·L⁻¹). La solution sera saturée.",
                "3. Masse maximale dissoute dans 0,250 L : m(max) = 36 × 0,250 = 9,0 g. Il reste 10 - 9,0 = 1,0 g de X non dissous au fond de la fiole.",
                "4. La solution est saturée : sa concentration vaut la concentration maximale, 36 g·L⁻¹.",
                "5. Il faut un volume de solution plus grand : V(min) = m ÷ Cmax = 10 ÷ 36 ≈ 0,28 L, soit environ 280 mL. Il peut par exemple utiliser une fiole de 500 mL, ce qui donnerait une solution non saturée à 10 ÷ 0,500 = 20 g·L⁻¹.",
                "Réponse : 1,0 g de X reste non dissous, la solution saturée est à 36 g·L⁻¹ ; il faut au moins 280 mL environ de solution pour tout dissoudre.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre vocabulaire des solutions.",
            statements: [
              { text: "Dans l'eau salée, le solvant est le sel.", true: false, why: "Le solvant est l'espèce majoritaire, l'eau ; le sel est le soluté." },
              { text: "La concentration en masse se calcule avec le volume de la solution.", true: true, why: "Cm = m(soluté) ÷ V(solution), et non le volume de solvant versé." },
              { text: "Un prélèvement de 10 mL d'une solution à 50 g·L⁻¹ a une concentration de 5 g·L⁻¹.", true: false, why: "Une solution est homogène : le prélèvement a la même concentration, 50 g·L⁻¹." },
              { text: "La masse volumique d'une solution tient compte de la masse du solvant et de celle du soluté.", true: true, why: "ρ = m(solution) ÷ V(solution), toute la masse est prise en compte." },
              { text: "Un gaz peut être un soluté.", true: true, why: "Le dioxyde de carbone est dissous dans les boissons gazeuses." },
              { text: "On peut dissoudre autant de sel qu'on le souhaite dans un litre d'eau.", true: false, why: "Au-delà de la concentration maximale, la solution est saturée et le sel ne se dissout plus." },
              { text: "Lors d'une dissolution, le soluté disparaît et sa masse avec lui.", true: false, why: "Le soluté est dispersé dans le solvant, mais sa masse se conserve." },
            ],
          },
          quiz: [
            {
              q: "On dissout 4,0 g de soluté pour obtenir 200 mL de solution. La concentration en masse vaut :",
              options: ["0,80 g·L⁻¹", "20 g·L⁻¹", "50 g·L⁻¹", "800 g·L⁻¹"],
              answer: 1,
              why: "Cm = m ÷ V = 4,0 ÷ 0,200 = 20 g·L⁻¹, le volume étant converti en litres.",
            },
            {
              q: "Dans une boisson gazeuse, le dioxyde de carbone dissous est :",
              options: ["le solvant", "un mélange hétérogène", "la phase fixe", "un soluté"],
              answer: 3,
              why: "Le dioxyde de carbone est dissous dans l'eau, qui est le solvant : c'est un soluté.",
            },
            {
              q: "Quelle masse de glucose contient 0,50 L d'une solution à 40 g·L⁻¹ ?",
              options: ["80 g", "0,0125 g", "20 g", "40 g"],
              answer: 2,
              why: "m = Cm × V = 40 × 0,50 = 20 g.",
            },
            {
              q: "Une solution est dite saturée lorsque :",
              options: ["le soluté ajouté ne peut plus s'y dissoudre", "elle contient plus de solvant que de soluté", "sa masse volumique dépasse celle de l'eau pure", "elle a été préparée avec de l'eau distillée"],
              answer: 0,
              why: "Une solution saturée a atteint la concentration maximale du soluté : tout ajout reste non dissous.",
            },
            {
              q: "La masse volumique d'une eau salée vaut 1 070 g·L⁻¹. Sa concentration en masse de sel :",
              options: ["vaut aussi 1 070 g·L⁻¹ par définition", "vaut forcément 70 g·L⁻¹, l'eau pesant 1 000 g", "ne se déduit pas de cette seule donnée", "vaut 1,07 g·L⁻¹ après conversion"],
              answer: 2,
              why: "La masse volumique porte sur toute la solution ; sans connaître la masse d'eau contenue dans un litre de solution, on ne peut pas en déduire la masse de sel.",
            },
          ],
          trap: "Diviser la masse de soluté par le volume d'eau versé au lieu du volume final de la solution, ou oublier de convertir les millilitres en litres : 5 g dans 250 mL donnent 20 g·L⁻¹, et non 0,02 g·L⁻¹. Ne confondez pas non plus concentration en masse et masse volumique.",
          method: "Avant tout calcul, écrivez la relation littérale (Cm = m ÷ V), isolez la grandeur cherchée, convertissez les volumes en litres, puis contrôlez l'unité du résultat et son ordre de grandeur : une concentration en masse est toujours inférieure à la masse volumique de la solution.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "dissolution-dilution",
          title: "Préparer une solution par dissolution ou par dilution",
          minutes: 35,
          objectives: [
            "Choisir et utiliser la verrerie adaptée pour préparer une solution par dissolution ou par dilution.",
            "Déterminer la valeur de la concentration en masse d'un soluté à partir du mode opératoire de préparation d'une solution par dissolution ou par dilution.",
            "Calculer la masse de soluté à peser ou le volume de solution mère à prélever, ainsi que le facteur de dilution.",
          ],
          course: [
            {
              heading: "La verrerie de précision",
              paragraphs: [
                "Toutes les pièces de verrerie ne mesurent pas les volumes avec la même précision. Le bécher et l'erlenmeyer servent à contenir ou à mélanger ; leurs graduations sont très approximatives. L'éprouvette graduée donne un volume à quelques pour cent près. La fiole jaugée et la pipette jaugée sont des verreries de précision : elles portent un trait de jauge et une indication du type « 100 mL ± 0,1 mL ». Chacune ne mesure qu'un seul volume, mais avec une grande précision.",
                "Pour utiliser une verrerie jaugée, on amène le bas du ménisque (la surface incurvée du liquide) sur le trait de jauge, l'œil placé à la hauteur du trait. Une pipette jaugée s'utilise toujours avec une propipette ou un pipeteur, jamais à la bouche. On peut comparer la précision de deux verreries en pesant l'eau qu'elles délivrent : 10,0 mL d'eau ont une masse de 10,0 g puisque ρ(eau) = 1,00 g·mL⁻¹, et des pesées répétées montrent que les volumes mesurés à l'éprouvette sont plus dispersés que ceux mesurés à la pipette jaugée.",
              ],
              box: { label: "Repère", text: "Pour une solution de concentration précise : balance pour peser le soluté, pipette jaugée pour prélever la solution mère, fiole jaugée pour le volume final. Le bécher et l'éprouvette ne conviennent pas pour une mesure précise." },
            },
            {
              heading: "Préparer une solution par dissolution",
              paragraphs: [
                "Pour préparer un volume V de solution de concentration en masse Cm à partir d'un soluté solide, on calcule d'abord la masse à peser : m = Cm × V. Exemple : pour 100,0 mL de solution de sulfate de cuivre à 25,0 g·L⁻¹, m = 25,0 × 0,1000 = 2,50 g.",
                "Protocole : on pèse la masse m de soluté dans une coupelle, sur une balance tarée ; on l'introduit dans la fiole jaugée de volume V à l'aide d'un entonnoir, en rinçant la coupelle et l'entonnoir avec de l'eau distillée pour entraîner tout le solide ; on remplit la fiole aux deux tiers environ, on la bouche et on agite jusqu'à dissolution complète ; on complète avec de l'eau distillée jusqu'au trait de jauge, les dernières gouttes à la pipette simple ; on bouche et on retourne plusieurs fois la fiole pour homogénéiser.",
              ],
              box: { label: "Formule", text: "Dissolution : m(à peser) = Cm × V(fiole). On dissout d'abord le solide, on complète ensuite jusqu'au trait de jauge, puis on homogénéise." },
            },
            {
              heading: "Préparer une solution par dilution",
              paragraphs: [
                "Diluer une solution, c'est diminuer sa concentration en ajoutant du solvant. La solution de départ, plus concentrée, est la solution mère (concentration Cm0, volume prélevé V0) ; la solution obtenue est la solution fille (concentration Cm1, volume V1). Au cours de la dilution, la masse de soluté se conserve : toute la masse prélevée dans la solution mère se retrouve dans la solution fille. On a donc m = Cm0 × V0 = Cm1 × V1.",
                "Le facteur de dilution F est défini par F = Cm0 ÷ Cm1 = V1 ÷ V0. Il est sans unité et supérieur à 1. Exemple : pour préparer 100,0 mL d'une solution à 2,0 g·L⁻¹ à partir d'une solution mère à 20 g·L⁻¹, F = 20 ÷ 2,0 = 10, donc V0 = V1 ÷ F = 100,0 ÷ 10 = 10,0 mL. On prélève 10,0 mL de solution mère à la pipette jaugée et on utilise une fiole jaugée de 100,0 mL.",
                "Protocole : on verse un peu de solution mère dans un bécher propre (on ne pipette jamais directement dans le flacon, pour ne pas le polluer) ; on prélève le volume V0 avec la pipette jaugée munie d'une propipette ; on le verse dans la fiole jaugée de volume V1 ; on ajoute de l'eau distillée aux deux tiers et on agite ; on complète jusqu'au trait de jauge et on homogénéise.",
              ],
              box: { label: "Formule", text: "Conservation de la masse de soluté : Cm0 × V0 = Cm1 × V1. Facteur de dilution : F = Cm0 ÷ Cm1 = V1 ÷ V0, avec F > 1." },
            },
          ],
          keyPoints: [
            "Verrerie de précision : fiole jaugée (volume final), pipette jaugée (prélèvement), balance (masse).",
            "Dissolution : m = Cm × V ; dissoudre, compléter au trait de jauge, homogénéiser.",
            "Dilution : la masse de soluté se conserve, Cm0 × V0 = Cm1 × V1.",
            "Facteur de dilution : F = Cm0 ÷ Cm1 = V1 ÷ V0, toujours supérieur à 1.",
            "On ne pipette jamais directement dans le flacon de solution mère.",
          ],
          example: {
            statement: "On dispose d'une solution mère de glucose à 100 g·L⁻¹. On souhaite préparer 100,0 mL de solution fille à 5,0 g·L⁻¹. Matériel disponible : pipettes jaugées de 1,0 ; 5,0 ; 10,0 et 20,0 mL ; fioles jaugées de 50,0 ; 100,0 et 250,0 mL. 1. Calculer le facteur de dilution. 2. Calculer le volume de solution mère à prélever. 3. Choisir la verrerie et rédiger le protocole.",
            solution: [
              "1. F = Cm0 ÷ Cm1 = 100 ÷ 5,0 = 20.",
              "2. V0 = V1 ÷ F = 100,0 ÷ 20 = 5,0 mL. Vérification par la conservation de la masse : Cm0 × V0 = 100 × 0,0050 = 0,50 g et Cm1 × V1 = 5,0 × 0,1000 = 0,50 g.",
              "3. Verrerie : pipette jaugée de 5,0 mL munie d'une propipette, fiole jaugée de 100,0 mL, bécher, eau distillée.",
              "Protocole : verser un peu de solution mère dans un bécher ; prélever 5,0 mL avec la pipette jaugée ; les verser dans la fiole jaugée de 100,0 mL ; ajouter de l'eau distillée aux deux tiers et agiter ; compléter jusqu'au trait de jauge ; boucher et retourner plusieurs fois.",
              "Réponse : F = 20, on prélève 5,0 mL de solution mère que l'on dilue dans une fiole jaugée de 100,0 mL.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la masse de soluté à peser pour préparer : a) 250,0 mL de solution de chlorure de sodium à 9,0 g·L⁻¹ ; b) 50,0 mL de solution de saccharose à 120 g·L⁻¹ ; c) 1,00 L de solution de sulfate de cuivre à 1,6 g·L⁻¹. Préciser chaque fois la verrerie utilisée pour obtenir le volume final.",
              hint: "Utilisez m = Cm × V avec V en litres. Le volume final se mesure toujours avec une fiole jaugée du volume voulu.",
              solution: [
                "a) m = 9,0 × 0,2500 = 2,25 g, soit environ 2,3 g ; fiole jaugée de 250,0 mL.",
                "b) m = 120 × 0,0500 = 6,0 g ; fiole jaugée de 50,0 mL.",
                "c) m = 1,6 × 1,00 = 1,6 g ; fiole jaugée de 1,00 L (1 000 mL).",
                "Réponses : 2,25 g ; 6,0 g ; 1,6 g, chaque fois dissous puis complétés dans une fiole jaugée.",
              ],
            },
            {
              level: 2,
              statement: "On prélève 20,0 mL d'une solution mère de sulfate de cuivre à 40,0 g·L⁻¹, on les introduit dans une fiole jaugée de 250,0 mL et l'on complète avec de l'eau distillée jusqu'au trait de jauge. 1. Calculer le facteur de dilution. 2. En déduire la concentration en masse de la solution fille. 3. Calculer la masse de sulfate de cuivre contenue dans la solution fille et vérifier qu'elle est égale à la masse prélevée dans la solution mère.",
              hint: "F = V1 ÷ V0, puis Cm1 = Cm0 ÷ F. La masse prélevée vaut Cm0 × V0.",
              solution: [
                "1. F = V1 ÷ V0 = 250,0 ÷ 20,0 = 12,5.",
                "2. Cm1 = Cm0 ÷ F = 40,0 ÷ 12,5 = 3,20 g·L⁻¹.",
                "3. Solution fille : m = Cm1 × V1 = 3,20 × 0,2500 = 0,800 g. Masse prélevée : m = Cm0 × V0 = 40,0 × 0,0200 = 0,800 g.",
                "Les deux masses sont égales : la masse de soluté se conserve lors de la dilution.",
                "Réponse : F = 12,5 ; Cm1 = 3,20 g·L⁻¹ ; 0,800 g de soluté.",
              ],
            },
            {
              level: 3,
              statement: "Une solution commerciale de colorant alimentaire a une concentration en masse Cm0 = 4,0 g·L⁻¹ (données fictives). On veut préparer 100,0 mL de solution à 0,020 g·L⁻¹. Matériel disponible : pipettes jaugées de 5,0 ; 10,0 et 20,0 mL ; fioles jaugées de 50,0 ; 100,0 ; 200,0 et 500,0 mL. 1. Calculer le facteur de dilution nécessaire. 2. Montrer qu'une dilution en une seule étape est impossible avec ce matériel. 3. Proposer une dilution en deux étapes, en précisant la verrerie de chaque étape et la concentration de la solution intermédiaire.",
              hint: "Lors de deux dilutions successives, les facteurs de dilution se multiplient : F = F1 × F2. La seconde étape doit se faire dans la fiole de 100,0 mL.",
              solution: [
                "1. F = Cm0 ÷ Cm1 = 4,0 ÷ 0,020 = 200.",
                "2. En une étape dans la fiole de 100,0 mL, il faudrait prélever V0 = 100,0 ÷ 200 = 0,50 mL : aucune pipette jaugée ne mesure ce volume. Le plus grand facteur réalisable avec ce matériel est 500,0 ÷ 5,0 = 100, inférieur à 200.",
                "3. Il faut F1 × F2 = 200. Étape 1 : prélever 10,0 mL de solution commerciale et les diluer dans une fiole de 100,0 mL (F1 = 10). Solution intermédiaire : 4,0 ÷ 10 = 0,40 g·L⁻¹.",
                "Étape 2 : prélever 5,0 mL de solution intermédiaire et les diluer dans une fiole de 100,0 mL (F2 = 100,0 ÷ 5,0 = 20). Concentration finale : 0,40 ÷ 20 = 0,020 g·L⁻¹. Vérification : F1 × F2 = 10 × 20 = 200.",
                "D'autres choix conviennent, par exemple 5,0 mL dans 200,0 mL (F1 = 40) puis 20,0 mL dans 100,0 mL (F2 = 5).",
                "Réponse : F = 200, réalisé en deux dilutions successives, par exemple 10 puis 20, avec une solution intermédiaire à 0,40 g·L⁻¹.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du protocole de dilution.",
            items: [
              "Verser un peu de solution mère dans un bécher propre",
              "Prélever le volume V0 avec une pipette jaugée munie d'une propipette",
              "Verser le prélèvement dans la fiole jaugée",
              "Ajouter de l'eau distillée jusqu'aux deux tiers et agiter",
              "Compléter avec de l'eau distillée jusqu'au trait de jauge",
              "Boucher et retourner la fiole pour homogénéiser",
            ],
          },
          quiz: [
            {
              q: "Quelle verrerie choisir pour obtenir précisément le volume final d'une solution ?",
              options: ["Un bécher de 100 mL", "Une éprouvette graduée", "Un erlenmeyer gradué", "Une fiole jaugée"],
              answer: 3,
              why: "La fiole jaugée est conçue pour contenir un volume précis, repéré par son trait de jauge.",
            },
            {
              q: "Pour préparer 200,0 mL de solution à 15 g·L⁻¹ par dissolution, il faut peser :",
              options: ["0,075 g", "3,0 g", "13 g", "30 g"],
              answer: 1,
              why: "m = Cm × V = 15 × 0,2000 = 3,0 g.",
            },
            {
              q: "Au cours d'une dilution, quelle grandeur se conserve ?",
              options: ["La masse de soluté", "La concentration en masse", "Le volume de la solution", "La masse volumique"],
              answer: 0,
              why: "On ajoute seulement du solvant : la masse de soluté prélevée se retrouve entièrement dans la solution fille.",
            },
            {
              q: "On dilue 10,0 mL d'une solution à 30 g·L⁻¹ dans une fiole jaugée de 50,0 mL. La concentration de la solution fille vaut :",
              options: ["150 g·L⁻¹", "3,0 g·L⁻¹", "6,0 g·L⁻¹", "20 g·L⁻¹"],
              answer: 2,
              why: "F = 50,0 ÷ 10,0 = 5, donc Cm1 = 30 ÷ 5 = 6,0 g·L⁻¹.",
            },
            {
              q: "On veut diluer une solution 25 fois avec une fiole jaugée de 250,0 mL. Quel volume de solution mère faut-il prélever ?",
              options: ["25,0 mL", "10,0 mL", "6 250 mL", "2,5 mL"],
              answer: 1,
              why: "V0 = V1 ÷ F = 250,0 ÷ 25 = 10,0 mL.",
            },
          ],
          trap: "Inverser le facteur de dilution (calculer V0 ÷ V1) ou confondre les volumes dans Cm0 × V0 = Cm1 × V1 : V0 est le volume prélevé de solution mère, V1 le volume total de la solution fille, et la concentration diminue toujours lors d'une dilution.",
          method: "Après un calcul de dilution, faites deux vérifications rapides : la concentration fille doit être plus petite que la concentration mère, et le volume prélevé plus petit que celui de la fiole. Vérifiez ensuite que le volume trouvé correspond à une pipette jaugée disponible.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "dosage-etalonnage",
          title: "Déterminer une concentration par un dosage par étalonnage",
          minutes: 30,
          objectives: [
            "Définir un dosage par étalonnage et une gamme d'étalonnage.",
            "Déterminer la valeur d'une concentration en masse à l'aide d'une gamme d'étalonnage sous la forme d'une échelle de teintes.",
            "Déterminer la valeur d'une concentration en masse à partir de mesures de masse volumique et d'une courbe d'étalonnage.",
            "Tenir compte d'une dilution préalable de l'échantillon dans le calcul de sa concentration.",
          ],
          course: [
            {
              heading: "Le principe d'un dosage par étalonnage",
              paragraphs: [
                "Doser une espèce chimique dans une solution, c'est déterminer sa concentration. Dans un dosage par étalonnage, on compare une grandeur physique de la solution étudiée (sa couleur, sa masse volumique...) à celle d'une série de solutions de concentrations connues, appelées solutions étalons. Cette série constitue une gamme d'étalonnage.",
                "Les solutions étalons contiennent le même soluté que la solution à doser. On les prépare avec précision, en général par dilution d'une même solution mère, avec la verrerie jaugée étudiée dans la leçon précédente. La grandeur mesurée doit varier régulièrement avec la concentration : plus la solution est concentrée, plus elle est colorée, ou plus elle est dense. Lors d'un tel dosage, l'espèce dosée n'est pas transformée.",
              ],
              box: { label: "Définition", text: "Dosage par étalonnage : détermination d'une concentration par comparaison d'une grandeur physique de la solution étudiée avec celle de solutions étalons de concentrations connues, qui forment une gamme d'étalonnage." },
            },
            {
              heading: "L'échelle de teintes",
              paragraphs: [
                "Pour une espèce colorée (sulfate de cuivre bleu, permanganate de potassium violet, colorant alimentaire...), on prépare une échelle de teintes : une série de tubes à essais identiques contenant, sur une même hauteur, des solutions étalons de concentrations croissantes. On place le tube de la solution étudiée à côté et on l'observe dans les mêmes conditions, de préférence devant un fond blanc.",
                "La teinte de la solution étudiée est comprise entre celles de deux tubes étalons : on en déduit un encadrement de sa concentration. Exemple : si la solution est plus foncée que l'étalon à 2,0 g·L⁻¹ et plus claire que celui à 3,0 g·L⁻¹, sa concentration est comprise entre 2,0 et 3,0 g·L⁻¹. La précision dépend de l'écart entre deux étalons successifs et de l'œil de l'observateur : elle reste limitée.",
                "Si la solution étudiée est plus foncée que l'étalon le plus concentré, on ne peut pas conclure : on la dilue d'un facteur connu F, on dose la solution diluée, puis on multiplie le résultat par F pour revenir à la concentration de la solution de départ.",
              ],
              box: { label: "Règle", text: "Échelle de teintes : tubes identiques, même hauteur de liquide, même éclairage. Le résultat est un encadrement. Si l'échantillon a été dilué F fois avant le dosage, Cm(échantillon) = F × Cm(solution diluée)." },
            },
            {
              heading: "La courbe d'étalonnage par mesure de masse volumique",
              paragraphs: [
                "Pour un soluté incolore, comme le sucre d'une boisson, on peut mesurer la masse volumique : celle d'une solution aqueuse augmente avec la concentration du soluté dissous. On mesure la masse volumique ρ de chaque solution étalon, en pesant un volume précis prélevé à la pipette jaugée, puis on trace le graphique de ρ en fonction de Cm : c'est la courbe d'étalonnage. Dans le domaine étudié, les points sont pratiquement alignés sur une droite.",
                "On mesure ensuite la masse volumique de la solution étudiée et on lit sur la courbe l'abscisse Cm du point dont l'ordonnée est la valeur mesurée. On peut aussi utiliser l'équation de la droite qui modélise les points, de la forme ρ = a × Cm + b : on en déduit Cm = (ρ - b) ÷ a. Le résultat n'a de sens que s'il se trouve dans le domaine couvert par les étalons : on ne prolonge pas la droite loin des points mesurés.",
              ],
              box: { label: "À retenir", text: "Courbe d'étalonnage : grandeur mesurée en ordonnée, concentration en abscisse. On reporte la mesure de l'échantillon sur l'axe des ordonnées, on rejoint la droite, on lit la concentration sur l'axe des abscisses." },
            },
          ],
          keyPoints: [
            "Doser une espèce, c'est déterminer sa concentration dans une solution.",
            "Gamme d'étalonnage : solutions étalons du même soluté, de concentrations connues avec précision.",
            "Échelle de teintes : comparaison visuelle, résultat sous forme d'encadrement.",
            "Courbe d'étalonnage ρ = f(Cm) : on lit la concentration en abscisse à partir de la mesure en ordonnée, sans extrapoler.",
            "Échantillon dilué F fois avant le dosage : multiplier la concentration trouvée par F.",
          ],
          example: {
            statement: "On veut doser le sucre d'une boisson incolore (données fictives ; on admet que le sucre est le seul soluté qui modifie la masse volumique). Solutions étalons : Cm = 0 ; 50 ; 100 ; 150 ; 200 g·L⁻¹, de masses volumiques respectives 1 000 ; 1 019 ; 1 038 ; 1 057 ; 1 076 g·L⁻¹. Un volume de 25,0 mL de boisson a une masse de 26,05 g. 1. Montrer que ρ = 0,38 × Cm + 1 000 modélise les étalons. 2. Déterminer la concentration en sucre de la boisson. 3. En déduire la masse de sucre contenue dans une canette de 330 mL.",
            solution: [
              "1. Pour Cm = 100 g·L⁻¹ : 0,38 × 100 + 1 000 = 1 038 g·L⁻¹ ; pour Cm = 200 g·L⁻¹ : 0,38 × 200 + 1 000 = 1 076 g·L⁻¹. Les valeurs calculées sont celles du tableau (de même pour 50 et 150) : la droite modélise bien les étalons.",
              "2. Masse volumique de la boisson : ρ = 26,05 ÷ 0,0250 = 1 042 g·L⁻¹.",
              "Cm = (ρ - 1 000) ÷ 0,38 = 42 ÷ 0,38 ≈ 1,1 × 10² g·L⁻¹ (environ 111 g·L⁻¹), valeur comprise entre les étalons à 100 et à 150 g·L⁻¹ : la lecture est légitime.",
              "3. m = Cm × V = 111 × 0,330 ≈ 37 g.",
              "Réponse : la boisson contient environ 1,1 × 10² g·L⁻¹ de sucre, soit environ 37 g dans une canette de 330 mL.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On dispose d'une échelle de teintes de sulfate de cuivre à 5,0 ; 10 ; 15 ; 20 et 25 g·L⁻¹. Une solution S, placée dans un tube identique sur la même hauteur, est plus foncée que l'étalon à 15 g·L⁻¹ et plus claire que celui à 20 g·L⁻¹. 1. Encadrer la concentration en masse de S. 2. Proposer une valeur de cette concentration, accompagnée de son incertitude.",
              hint: "La concentration est comprise entre celles des deux étalons qui encadrent la teinte. Prenez le milieu de l'intervalle et la demi-largeur comme incertitude.",
              solution: [
                "1. 15 g·L⁻¹ < Cm(S) < 20 g·L⁻¹.",
                "2. Milieu de l'intervalle : (15 + 20) ÷ 2 = 17,5 g·L⁻¹ ; demi-largeur : (20 - 15) ÷ 2 = 2,5 g·L⁻¹.",
                "Réponse : Cm(S) = 17,5 ± 2,5 g·L⁻¹.",
              ],
            },
            {
              level: 2,
              statement: "Une solution commerciale S0 de colorant bleu est trop foncée pour être comparée à l'échelle de teintes disponible (0,50 ; 1,0 ; 1,5 ; 2,0 ; 2,5 mg·L⁻¹ ; données fictives). On la dilue 20 fois. La solution diluée a une teinte comprise entre celles des étalons à 1,5 et 2,0 mg·L⁻¹. 1. Proposer la verrerie pour réaliser cette dilution, parmi : pipettes jaugées de 5,0 et 10,0 mL ; fioles jaugées de 50,0 ; 100,0 et 200,0 mL. 2. Encadrer la concentration en masse de S0.",
              hint: "Il faut V1 ÷ V0 = 20. Pour revenir à la solution de départ, multipliez les bornes de l'encadrement par le facteur de dilution.",
              solution: [
                "1. Il faut V1 ÷ V0 = 20 : pipette jaugée de 5,0 mL et fiole jaugée de 100,0 mL (100,0 ÷ 5,0 = 20), ou pipette de 10,0 mL et fiole de 200,0 mL.",
                "2. Solution diluée : 1,5 mg·L⁻¹ < Cm1 < 2,0 mg·L⁻¹.",
                "S0 est 20 fois plus concentrée : 20 × 1,5 = 30 mg·L⁻¹ et 20 × 2,0 = 40 mg·L⁻¹.",
                "Réponse : 30 mg·L⁻¹ < Cm(S0) < 40 mg·L⁻¹.",
              ],
            },
            {
              level: 3,
              statement: "Pour doser le sucre d'un sirop (données fictives), on dispose de solutions étalons de sucre : Cm (en g·L⁻¹) = 20 ; 40 ; 60 ; 80 ; 100, de masses volumiques respectives (en g·L⁻¹) 1 008 ; 1 015 ; 1 023 ; 1 030 ; 1 038. Le sirop pur a une masse volumique de 1 290 g·L⁻¹. 1. Expliquer pourquoi on ne peut pas utiliser directement cet étalonnage pour le sirop pur. 2. On dilue donc le sirop 10 fois ; 10,0 mL de solution diluée ont une masse de 10,27 g. Calculer la masse volumique de la solution diluée. 3. On admet que la droite d'étalonnage a pour équation ρ = 0,375 × Cm + 1 000,4. Calculer la concentration en sucre de la solution diluée. 4. En déduire celle du sirop, puis la masse de sucre contenue dans une bouteille de 75 cL de sirop.",
              hint: "Une courbe d'étalonnage ne s'utilise qu'entre ses points extrêmes. N'oubliez pas de multiplier par le facteur de dilution, et convertissez 75 cL en litres.",
              solution: [
                "1. 1 290 g·L⁻¹ est très au-delà de la plus grande masse volumique des étalons (1 038 g·L⁻¹) : il faudrait prolonger la droite loin des points mesurés, ce qui n'est pas valable.",
                "2. ρ = 10,27 ÷ 0,0100 = 1 027 g·L⁻¹, valeur comprise entre 1 023 et 1 030 g·L⁻¹ : la mesure est dans le domaine des étalons.",
                "3. Cm = (ρ - 1 000,4) ÷ 0,375 = (1 027 - 1 000,4) ÷ 0,375 = 26,6 ÷ 0,375 ≈ 71 g·L⁻¹, valeur cohérente, comprise entre 60 et 80 g·L⁻¹.",
                "4. Le sirop a été dilué 10 fois : Cm(sirop) = 10 × 71 ≈ 7,1 × 10² g·L⁻¹.",
                "Bouteille : V = 75 cL = 0,75 L ; m = 7,1 × 10² × 0,75 ≈ 5,3 × 10² g.",
                "Réponse : le sirop contient environ 7,1 × 10² g·L⁻¹ de sucre, soit environ 530 g de sucre par bouteille de 75 cL.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme du dosage par étalonnage à sa signification.",
            pairs: [
              { left: "Solution étalon", right: "Solution de concentration connue avec précision" },
              { left: "Gamme d'étalonnage", right: "Série de solutions étalons de concentrations différentes" },
              { left: "Échelle de teintes", right: "Comparaison visuelle des couleurs, qui donne un encadrement" },
              { left: "Courbe d'étalonnage", right: "Graphique de la grandeur mesurée en fonction de la concentration" },
              { left: "Doser une espèce", right: "Déterminer sa concentration dans une solution" },
              { left: "Facteur de dilution", right: "Nombre par lequel on multiplie le résultat si l'échantillon a été dilué" },
            ],
          },
          quiz: [
            {
              q: "Une solution étalon est une solution :",
              options: ["de concentration inconnue", "toujours incolore", "de concentration connue avec précision", "plus concentrée que la solution à doser, toujours"],
              answer: 2,
              why: "Les solutions étalons servent de référence : leur concentration doit être connue avec précision.",
            },
            {
              q: "Avec une échelle de teintes, on obtient en général :",
              options: ["un encadrement de la concentration", "la valeur exacte de la concentration", "la masse volumique de la solution", "le volume de la solution"],
              answer: 0,
              why: "La teinte de la solution se situe entre celles de deux étalons : on obtient un encadrement.",
            },
            {
              q: "Sur une courbe d'étalonnage ρ = f(Cm), où reporte-t-on la valeur mesurée pour l'échantillon ?",
              options: ["Sur l'axe des abscisses", "À l'origine du repère", "Au-delà du dernier point", "Sur l'axe des ordonnées"],
              answer: 3,
              why: "La masse volumique mesurée est portée en ordonnée ; on lit ensuite la concentration en abscisse.",
            },
            {
              q: "Un échantillon dilué 5 fois a une concentration mesurée de 4,0 g·L⁻¹. La concentration de l'échantillon initial vaut :",
              options: ["0,80 g·L⁻¹", "20 g·L⁻¹", "9,0 g·L⁻¹", "4,0 g·L⁻¹"],
              answer: 1,
              why: "L'échantillon initial est 5 fois plus concentré : 5 × 4,0 = 20 g·L⁻¹.",
            },
            {
              q: "Pourquoi ne prolonge-t-on pas une courbe d'étalonnage loin des points mesurés ?",
              options: ["Parce que la droite passe toujours par l'origine", "Parce que les étalons sont trop dilués pour être lus", "Parce que la grandeur cesse alors d'être mesurable", "Rien ne garantit que la relation reste linéaire"],
              answer: 3,
              why: "La relation entre la grandeur et la concentration n'est vérifiée que dans le domaine des étalons.",
            },
          ],
          trap: "Oublier de multiplier par le facteur de dilution lorsque l'échantillon a été dilué avant le dosage : on obtient alors la concentration de la solution diluée, pas celle du produit de départ. Autre erreur : lire la courbe à l'envers, en reportant la mesure sur l'axe des abscisses.",
          method: "Sur une courbe d'étalonnage, laissez des traits de construction en pointillés (de la valeur mesurée sur l'axe des ordonnées jusqu'à la droite, puis jusqu'à l'axe des abscisses) et vérifiez que la valeur lue est encadrée par les deux étalons les plus proches.",
        },
      ],
    },
    /* ================================================================== */
    /* LE MODÈLE DE L'ATOME                                                 */
    /* ================================================================== */
    {
      id: 'atome',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "structure-atome",
          title: "Noyau et électrons : la structure de l'atome",
          minutes: 30,
          objectives: [
            "Définir une espèce chimique comme une collection d'un nombre très élevé d'entités identiques, et qualifier une entité (atome, molécule, cation, anion) à partir de sa formule.",
            "Décrire la structure de l'atome : un noyau formé de protons et de neutrons, entouré d'électrons.",
            "Citer la masse et la charge électrique d'un électron, d'un proton et d'un neutron, ainsi que la charge électrique élémentaire.",
            "Citer l'ordre de grandeur de la taille d'un atome et comparer la taille et la masse d'un atome et de son noyau.",
          ],
          course: [
            {
              heading: "De l'espèce chimique à l'entité",
              paragraphs: [
                "À l'échelle microscopique, une espèce chimique est une collection d'un nombre extrêmement élevé d'entités identiques : une seule goutte d'eau contient plus de 10²¹ molécules d'eau H₂O. Ces entités sont de trois types : les atomes (Fe dans un clou de fer, He dans le gaz d'un ballon), les molécules, assemblages d'atomes liés entre eux (H₂O, O₂, CO₂), et les ions, atomes ou groupes d'atomes qui ont perdu ou gagné un ou plusieurs électrons.",
                "Un ion chargé positivement est un cation (Na⁺, Ca²⁺) ; un ion chargé négativement est un anion (Cl⁻, SO₄²⁻). Dans une formule, le nombre écrit en indice indique combien d'atomes de chaque élément contient l'entité (CO₂ : un atome de carbone et deux atomes d'oxygène) ; l'exposant indique la charge de l'ion, en multiple de la charge élémentaire.",
                "Les espèces ioniques, comme le chlorure de sodium solide NaCl, contiennent des cations et des anions en proportions telles que l'ensemble est électriquement neutre. De façon générale, à l'échelle macroscopique, la matière est électriquement neutre.",
              ],
              box: { label: "Repère", text: "Atome : Fe, He. Molécule : H₂O, CO₂. Cation : ion positif (Na⁺, Mg²⁺). Anion : ion négatif (Cl⁻, O²⁻). Une espèce ionique est électriquement neutre (NaCl, CaCl₂)." },
            },
            {
              heading: "Le noyau et les électrons",
              paragraphs: [
                "Un atome est constitué d'un noyau central, chargé positivement, autour duquel se déplacent des électrons, chargés négativement. Le noyau est formé de deux sortes de particules, appelées nucléons : les protons, de charge positive, et les neutrons, électriquement neutres. Ce modèle s'est construit progressivement : l'électron a été mis en évidence par Joseph John Thomson en 1897, le noyau par l'équipe d'Ernest Rutherford entre 1909 et 1911, le neutron par James Chadwick en 1932.",
                "La charge d'un proton vaut e = 1,602 × 10⁻¹⁹ C (le coulomb, symbole C, est l'unité de charge électrique). Cette valeur est la charge électrique élémentaire : toutes les charges portées par les particules et les ions en sont des multiples entiers. La charge d'un électron vaut -e, celle d'un neutron est nulle. Un atome contient autant d'électrons que de protons : sa charge totale est nulle, l'atome est électriquement neutre.",
              ],
              box: { label: "À retenir", text: "Proton : charge +e, masse 1,673 × 10⁻²⁷ kg. Neutron : charge 0, masse 1,675 × 10⁻²⁷ kg. Électron : charge -e, masse 9,11 × 10⁻³¹ kg. Charge élémentaire : e = 1,602 × 10⁻¹⁹ C." },
            },
            {
              heading: "Un noyau minuscule qui porte presque toute la masse",
              paragraphs: [
                "Le proton et le neutron ont des masses presque égales, environ 1 836 fois plus grandes que celle de l'électron (1,673 × 10⁻²⁷ ÷ 9,11 × 10⁻³¹ ≈ 1,84 × 10³). La masse des électrons est donc négligeable devant celle du noyau : la masse d'un atome est pratiquement égale à celle de son noyau.",
                "Le rayon d'un atome est de l'ordre de 10⁻¹⁰ m (0,1 nm) ; celui d'un noyau est de l'ordre de 10⁻¹⁵ m. Le rayon de l'atome est donc environ 100 000 fois (10⁵ fois) plus grand que celui de son noyau. Analogie : si le noyau était une bille de 1 cm de diamètre, l'atome serait une sphère d'environ 1 km de diamètre. Entre le noyau et les électrons, il n'y a pas de matière : on dit que la matière a une structure lacunaire.",
                "C'est ce que révèle l'expérience dirigée par Rutherford : des particules alpha, chargées positivement, envoyées sur une très fine feuille d'or, la traversent presque toutes sans être déviées ; quelques-unes seulement sont fortement déviées, voire renvoyées en arrière. La plupart passent donc dans du vide ; les rares particules déviées sont passées très près d'un noyau, petit, massif et chargé positivement.",
              ],
              box: { label: "Propriété", text: "Taille d'un atome : de l'ordre de 10⁻¹⁰ m. Taille d'un noyau : de l'ordre de 10⁻¹⁵ m. Rapport : environ 10⁵. Presque toute la masse de l'atome est concentrée dans son noyau." },
            },
          ],
          keyPoints: [
            "Une espèce chimique est une collection d'un très grand nombre d'entités identiques : atomes, molécules ou ions.",
            "Cation : ion positif ; anion : ion négatif ; la matière est électriquement neutre à l'échelle macroscopique.",
            "Atome : noyau (protons +e et neutrons neutres) entouré d'électrons (-e) ; autant d'électrons que de protons.",
            "mp ≈ mn ≈ 1,67 × 10⁻²⁷ kg, environ 1 836 fois la masse de l'électron : la masse de l'atome est dans le noyau.",
            "Atome : environ 10⁻¹⁰ m ; noyau : environ 10⁻¹⁵ m ; structure lacunaire.",
          ],
          example: {
            statement: "Un atome de carbone contient 6 protons, 6 neutrons et 6 électrons. Données : mp = 1,673 × 10⁻²⁷ kg ; mn = 1,675 × 10⁻²⁷ kg ; me = 9,11 × 10⁻³¹ kg ; e = 1,602 × 10⁻¹⁹ C. 1. Calculer la masse de son noyau et celle de ses électrons. 2. Comparer ces deux masses et conclure. 3. Calculer la charge du noyau et celle de l'atome.",
            solution: [
              "1. m(noyau) = 6 × mp + 6 × mn = 6 × 1,673 × 10⁻²⁷ + 6 × 1,675 × 10⁻²⁷ = 6 × 3,348 × 10⁻²⁷ ≈ 2,009 × 10⁻²⁶ kg.",
              "m(électrons) = 6 × 9,11 × 10⁻³¹ ≈ 5,47 × 10⁻³⁰ kg.",
              "2. m(noyau) ÷ m(électrons) = 2,009 × 10⁻²⁶ ÷ 5,47 × 10⁻³⁰ ≈ 3,67 × 10³ : le noyau est environ 3 700 fois plus lourd que l'ensemble des électrons. La masse de l'atome est pratiquement celle de son noyau.",
              "3. Charge du noyau : Q = 6 × e = 6 × 1,602 × 10⁻¹⁹ ≈ 9,61 × 10⁻¹⁹ C. Charge des électrons : -9,61 × 10⁻¹⁹ C.",
              "Réponse : noyau de 2,009 × 10⁻²⁶ kg et de charge 9,61 × 10⁻¹⁹ C ; l'atome a une charge totale nulle et sa masse est concentrée dans le noyau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des formules suivantes, indiquer s'il s'agit d'un atome, d'une molécule, d'un cation ou d'un anion : a) Cu ; b) NH₃ ; c) K⁺ ; d) F⁻ ; e) CH₄ ; f) Al³⁺ ; g) Ne ; h) SO₄²⁻. Pour h, préciser le nombre d'atomes de chaque élément et la charge de l'entité.",
              hint: "Sans charge et avec un seul symbole : atome. Sans charge et avec plusieurs atomes : molécule. Avec une charge : ion, positif ou négatif.",
              solution: [
                "a) Cu : atome. b) NH₃ : molécule. c) K⁺ : cation. d) F⁻ : anion.",
                "e) CH₄ : molécule. f) Al³⁺ : cation. g) Ne : atome.",
                "h) SO₄²⁻ : anion formé d'un atome de soufre et de quatre atomes d'oxygène ; sa charge vaut -2e.",
                "Bilan : atomes a et g ; molécules b et e ; cations c et f ; anions d et h.",
              ],
            },
            {
              level: 2,
              statement: "Le rayon de l'atome d'hydrogène vaut environ 5,3 × 10⁻¹¹ m et celui de son noyau, un proton, environ 8,4 × 10⁻¹⁶ m. 1. Calculer le rapport du rayon de l'atome sur celui du noyau. 2. On représente le noyau par une balle de rayon 2,0 cm. Quel serait, à cette échelle, le rayon de l'atome ? 3. Que peut-on en déduire sur la structure de l'atome ?",
              hint: "Divisez les puissances de 10 en soustrayant les exposants. À l'échelle choisie, toutes les longueurs sont multipliées par le même nombre.",
              solution: [
                "1. Rapport : 5,3 × 10⁻¹¹ ÷ 8,4 × 10⁻¹⁶ ≈ 0,63 × 10⁵ ≈ 6,3 × 10⁴.",
                "2. Rayon de l'atome à cette échelle : 2,0 cm × 6,3 × 10⁴ ≈ 1,3 × 10⁵ cm, soit environ 1,3 km.",
                "3. Le noyau est minuscule par rapport à l'atome et, entre le noyau et l'électron, il n'y a pas de matière : l'atome est essentiellement constitué de vide, sa structure est lacunaire.",
                "Réponse : rapport d'environ 6 × 10⁴ ; une balle de 2,0 cm au centre d'une sphère d'environ 1,3 km de rayon.",
              ],
            },
            {
              level: 3,
              statement: "Un atome de fer contient 26 protons, 30 neutrons et 26 électrons. Données : mp = 1,673 × 10⁻²⁷ kg ; mn = 1,675 × 10⁻²⁷ kg ; me = 9,11 × 10⁻³¹ kg ; e = 1,602 × 10⁻¹⁹ C. 1. Calculer la charge de son noyau et vérifier que l'atome est électriquement neutre. 2. Calculer la masse de l'atome en tenant compte des électrons. 3. Calculer la part de la masse des électrons dans cette masse, en pourcentage, et conclure. 4. Un clou en fer a une masse de 2,8 g. Estimer le nombre d'atomes de fer qu'il contient.",
              hint: "Pour additionner des masses, écrivez-les avec la même puissance de 10. Pour la question 4, convertissez la masse du clou en kilogrammes puis divisez par la masse d'un atome.",
              solution: [
                "1. Q(noyau) = 26 × 1,602 × 10⁻¹⁹ ≈ 4,17 × 10⁻¹⁸ C. Les 26 électrons portent une charge de -4,17 × 10⁻¹⁸ C : la charge totale est nulle, l'atome est neutre.",
                "2. Protons : 26 × 1,673 × 10⁻²⁷ = 43,50 × 10⁻²⁷ kg. Neutrons : 30 × 1,675 × 10⁻²⁷ = 50,25 × 10⁻²⁷ kg. Électrons : 26 × 9,11 × 10⁻³¹ ≈ 0,024 × 10⁻²⁷ kg.",
                "m(atome) ≈ (43,50 + 50,25 + 0,024) × 10⁻²⁷ ≈ 93,77 × 10⁻²⁷ kg ≈ 9,38 × 10⁻²⁶ kg.",
                "3. Part des électrons : 0,024 ÷ 93,77 × 100 ≈ 0,03 %. La masse des électrons est bien négligeable : la masse de l'atome est celle de son noyau.",
                "4. N = m(clou) ÷ m(atome) = 2,8 × 10⁻³ ÷ 9,38 × 10⁻²⁶ ≈ 3,0 × 10²² atomes.",
                "Réponse : atome neutre, de masse environ 9,38 × 10⁻²⁶ kg (électrons : 0,03 %) ; le clou contient environ 3,0 × 10²² atomes de fer.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez votre modèle de l'atome.",
            statements: [
              { text: "Le noyau d'un atome contient des protons et des électrons.", true: false, why: "Le noyau contient des protons et des neutrons ; les électrons sont autour du noyau." },
              { text: "Un atome est électriquement neutre.", true: true, why: "Il contient autant d'électrons (-e) que de protons (+e)." },
              { text: "Le neutron porte une charge négative.", true: false, why: "Comme son nom l'indique, le neutron est électriquement neutre." },
              { text: "La masse d'un atome est presque entièrement concentrée dans son noyau.", true: true, why: "Un nucléon est environ 1 836 fois plus lourd qu'un électron." },
              { text: "Le rayon d'un atome est environ 10 fois plus grand que celui de son noyau.", true: false, why: "Le rapport est d'environ 100 000 (10⁵) : 10⁻¹⁰ m contre 10⁻¹⁵ m." },
              { text: "Un anion est un ion chargé négativement.", true: true, why: "Un anion a gagné un ou plusieurs électrons ; un cation, positif, en a perdu." },
              { text: "Entre le noyau et les électrons, l'atome est rempli de matière.", true: false, why: "L'atome est essentiellement vide : la matière a une structure lacunaire." },
            ],
          },
          quiz: [
            {
              q: "Quel est l'ordre de grandeur du rayon d'un atome ?",
              options: ["10⁻¹⁵ m", "10⁻¹⁰ m", "10⁻⁵ m", "10⁻³ m"],
              answer: 1,
              why: "Un atome mesure de l'ordre de 0,1 nm, soit 10⁻¹⁰ m ; 10⁻¹⁵ m est l'ordre de grandeur du noyau.",
            },
            {
              q: "Les nucléons sont :",
              options: ["les protons et les électrons", "les électrons seulement", "les protons et les neutrons", "les neutrons et les électrons"],
              answer: 2,
              why: "Les nucléons sont les particules du noyau : protons et neutrons.",
            },
            {
              q: "La charge électrique d'un électron vaut :",
              options: ["-1,6 × 10⁻¹⁹ C", "+1,6 × 10⁻¹⁹ C", "0 C", "-9,1 × 10⁻³¹ C"],
              answer: 0,
              why: "L'électron porte la charge -e ; 9,1 × 10⁻³¹ est la valeur de sa masse en kilogrammes, pas de sa charge.",
            },
            {
              q: "La formule Mg²⁺ représente :",
              options: ["un atome de magnésium", "une molécule", "un anion", "un cation"],
              answer: 3,
              why: "La charge est positive : c'est un ion positif, un cation.",
            },
            {
              q: "Le rayon d'un atome est environ combien de fois plus grand que celui de son noyau ?",
              options: ["10 fois", "1 000 fois", "100 000 fois", "10 000 000 fois"],
              answer: 2,
              why: "10⁻¹⁰ m ÷ 10⁻¹⁵ m = 10⁵, soit environ 100 000.",
            },
          ],
          trap: "Placer les électrons dans le noyau ou croire que le neutron est chargé : le noyau ne contient que des protons (positifs) et des neutrons (neutres), et les électrons (négatifs) se trouvent autour. Autre erreur : imaginer un atome « plein », alors qu'il est essentiellement constitué de vide.",
          method: "Pour retenir les ordres de grandeur, associez-les à une image : atome 10⁻¹⁰ m, noyau 10⁻¹⁵ m, soit un rapport de 10⁵ (une bille de 1 cm au centre d'une sphère de 1 km). Dans les calculs, écrivez toujours les puissances de 10 et contrôlez l'ordre de grandeur du résultat.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "noyau-isotopes",
          title: "Numéro atomique, nombre de masse et isotopes",
          minutes: 30,
          objectives: [
            "Définir le numéro atomique Z et le nombre de masse A, et établir l'écriture conventionnelle d'un noyau à partir de sa composition, et inversement.",
            "Définir un élément chimique par son numéro atomique et reconnaître des isotopes.",
            "Calculer la masse approchée d'un atome et la charge de son noyau à partir de A et de Z.",
          ],
          course: [
            {
              heading: "Numéro atomique, nombre de masse et écriture conventionnelle",
              paragraphs: [
                "Le numéro atomique Z est le nombre de protons du noyau. Le nombre de masse A est le nombre de nucléons, c'est-à-dire de protons et de neutrons. Le nombre de neutrons vaut donc N = A - Z. Dans l'écriture conventionnelle d'un noyau, on écrit A en exposant et Z en indice, à gauche du symbole de l'élément. Ainsi ¹²₆C désigne un noyau de carbone à 6 protons et 12 nucléons, donc 12 - 6 = 6 neutrons.",
                "Comme l'atome est électriquement neutre, il possède Z électrons. Son noyau porte la charge Q = Z × e. Exemple : le noyau ²³₁₁Na contient 11 protons et 23 - 11 = 12 neutrons ; l'atome de sodium possède 11 électrons ; la charge de son noyau vaut Q = 11 × 1,6 × 10⁻¹⁹ ≈ 1,8 × 10⁻¹⁸ C.",
              ],
              box: { label: "Définition", text: "Z : numéro atomique, nombre de protons (et d'électrons de l'atome). A : nombre de masse, nombre de nucléons. N = A - Z : nombre de neutrons. Écriture conventionnelle : A en exposant et Z en indice à gauche du symbole, par exemple ¹⁶₈O." },
            },
            {
              heading: "L'élément chimique",
              paragraphs: [
                "Un élément chimique est l'ensemble des entités (atomes ou ions) qui ont le même numéro atomique Z. C'est le nombre de protons du noyau qui fixe l'identité de l'élément : tout noyau à 6 protons est un noyau de carbone, tout noyau à 8 protons un noyau d'oxygène. Chaque élément est désigné par un symbole : une lettre majuscule, suivie éventuellement d'une minuscule (C, O, Na, Cl, Fe).",
                "Un élément se conserve au cours des transformations chimiques. Lorsque le cuivre métallique Cu devient l'ion cuivre Cu²⁺, l'atome perd deux électrons mais son noyau, avec ses 29 protons, est inchangé : il s'agit toujours de l'élément cuivre. Seules les transformations nucléaires, étudiées plus loin dans l'année, modifient les noyaux et donc les éléments.",
              ],
              box: { label: "À retenir", text: "Un élément chimique est caractérisé par son numéro atomique Z. Cu et Cu²⁺ sont deux entités différentes du même élément, le cuivre (Z = 29)." },
            },
            {
              heading: "Les isotopes",
              paragraphs: [
                "Des isotopes sont des atomes (ou des noyaux) qui ont le même nombre de protons Z mais des nombres de neutrons différents, donc des nombres de masse A différents. Ils appartiennent au même élément et ont les mêmes propriétés chimiques. Exemples : le carbone 12 (¹²₆C, 6 neutrons), le carbone 13 (¹³₆C, 7 neutrons) et le carbone 14 (¹⁴₆C, 8 neutrons) ; l'hydrogène ¹₁H, le deutérium ²₁H et le tritium ³₁H.",
                "Dans la nature, la plupart des éléments sont des mélanges d'isotopes : le chlore naturel contient environ 76 % de chlore 35 et 24 % de chlore 37 ; le carbone naturel est constitué à près de 99 % de carbone 12. Certains isotopes sont instables, ou radioactifs, comme le carbone 14, utilisé pour dater des restes d'êtres vivants, ou l'uranium 235, utilisé comme combustible dans les centrales nucléaires.",
              ],
              box: { label: "Définition", text: "Des isotopes ont le même numéro atomique Z et des nombres de masse A différents (des nombres de neutrons différents). Ils appartiennent au même élément chimique." },
            },
            {
              heading: "La masse d'un atome à partir de A",
              paragraphs: [
                "Les protons et les neutrons ont presque la même masse, mnucléon ≈ 1,67 × 10⁻²⁷ kg, et la masse des électrons est négligeable. La masse d'un atome est donc approximativement m(atome) ≈ A × mnucléon. Exemple : pour un atome d'oxygène 16, m ≈ 16 × 1,67 × 10⁻²⁷ ≈ 2,67 × 10⁻²⁶ kg. Deux isotopes ont donc des masses différentes : un atome de carbone 14 est environ 14 ÷ 12 ≈ 1,17 fois plus lourd qu'un atome de carbone 12.",
              ],
              box: { label: "Formule", text: "m(atome) ≈ A × mnucléon, avec mnucléon ≈ 1,67 × 10⁻²⁷ kg. Charge du noyau : Q = Z × e, avec e = 1,6 × 10⁻¹⁹ C." },
            },
          ],
          keyPoints: [
            "Z = nombre de protons ; A = nombre de nucléons ; N = A - Z neutrons ; l'atome a Z électrons.",
            "Écriture conventionnelle : A en exposant, Z en indice, à gauche du symbole (¹²₆C).",
            "Un élément chimique est défini par Z ; il se conserve lors des transformations chimiques.",
            "Isotopes : même Z, A différents ; mêmes propriétés chimiques.",
            "m(atome) ≈ A × 1,67 × 10⁻²⁷ kg ; charge du noyau Q = Z × e.",
          ],
          example: {
            statement: "Le noyau d'un atome d'aluminium contient 13 protons et 14 neutrons. Données : mnucléon = 1,67 × 10⁻²⁷ kg ; e = 1,6 × 10⁻¹⁹ C. 1. Donner Z, A et l'écriture conventionnelle de ce noyau. 2. Combien d'électrons possède l'atome ? 3. Calculer la masse approchée de l'atome et la charge de son noyau.",
            solution: [
              "1. Z = nombre de protons = 13 ; A = 13 + 14 = 27. Écriture conventionnelle : ²⁷₁₃Al.",
              "2. L'atome est neutre : il possède autant d'électrons que de protons, soit 13 électrons.",
              "3. m(atome) ≈ A × mnucléon = 27 × 1,67 × 10⁻²⁷ ≈ 4,51 × 10⁻²⁶ kg.",
              "Q = Z × e = 13 × 1,6 × 10⁻¹⁹ ≈ 2,1 × 10⁻¹⁸ C.",
              "Réponse : ²⁷₁₃Al, 13 électrons, masse d'environ 4,51 × 10⁻²⁶ kg, noyau de charge 2,1 × 10⁻¹⁸ C.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Donner la composition (protons, neutrons) du noyau ³⁵₁₇Cl et le nombre d'électrons de l'atome. b) Écrire l'écriture conventionnelle d'un noyau de calcium (symbole Ca) contenant 20 protons et 20 neutrons. c) Donner la composition du noyau ⁵⁶₂₆Fe. d) Un atome d'oxygène possède 8 électrons et son noyau contient 10 neutrons : écrire l'écriture conventionnelle de ce noyau.",
              hint: "Le nombre du bas est Z (protons), celui du haut est A (nucléons) ; N = A - Z. Dans un atome, le nombre d'électrons est égal à Z.",
              solution: [
                "a) ³⁵₁₇Cl : 17 protons, 35 - 17 = 18 neutrons ; l'atome possède 17 électrons.",
                "b) Z = 20 et A = 20 + 20 = 40 : ⁴⁰₂₀Ca.",
                "c) ⁵⁶₂₆Fe : 26 protons et 56 - 26 = 30 neutrons.",
                "d) L'atome neutre a 8 électrons, donc Z = 8 ; A = 8 + 10 = 18 : ¹⁸₈O.",
              ],
            },
            {
              level: 2,
              statement: "On considère les noyaux suivants : ¹⁴₆C ; ¹⁴₇N ; ¹²₆C ; ¹⁶₈O ; ¹⁵₇N ; ¹⁸₈O ; ¹³₆C. 1. Regrouper les noyaux isotopes et nommer l'élément correspondant à chaque groupe. 2. Les noyaux ¹⁴₆C et ¹⁴₇N sont-ils isotopes ? Justifier. 3. Combien de neutrons contiennent ¹⁶₈O et ¹⁸₈O ?",
              hint: "Des isotopes ont le même nombre du bas (Z). Avoir le même nombre du haut (A) ne suffit pas.",
              solution: [
                "1. Z = 6 (carbone) : ¹²₆C, ¹³₆C, ¹⁴₆C. Z = 7 (azote) : ¹⁴₇N, ¹⁵₇N. Z = 8 (oxygène) : ¹⁶₈O, ¹⁸₈O.",
                "2. Non : ils ont le même nombre de masse (14) mais des numéros atomiques différents (6 et 7). Ce sont des noyaux de deux éléments différents, le carbone et l'azote.",
                "3. ¹⁶₈O : 16 - 8 = 8 neutrons ; ¹⁸₈O : 18 - 8 = 10 neutrons.",
                "Réponse : trois groupes d'isotopes (carbone, azote, oxygène) ; ¹⁴₆C et ¹⁴₇N ne sont pas isotopes.",
              ],
            },
            {
              level: 3,
              statement: "Le noyau d'un atome X porte une charge Q = 2,72 × 10⁻¹⁸ C et l'atome a une masse m = 5,85 × 10⁻²⁶ kg. Données : e = 1,60 × 10⁻¹⁹ C ; mnucléon = 1,67 × 10⁻²⁷ kg ; numéros atomiques : O (8), F (9), Ne (10), Na (11), Mg (12), Al (13), Si (14), P (15), S (16), Cl (17). 1. Calculer le numéro atomique Z et identifier l'élément. 2. Calculer le nombre de masse A. 3. Écrire l'écriture conventionnelle du noyau et donner son nombre de neutrons. 4. Le même élément existe aussi sous la forme de noyaux de nombre de masse 37. Comment appelle-t-on ces deux noyaux l'un par rapport à l'autre ? Comparer leurs compositions.",
              hint: "Q = Z × e permet de trouver Z ; m ≈ A × mnucléon permet de trouver A, qui doit être un nombre entier.",
              solution: [
                "1. Z = Q ÷ e = 2,72 × 10⁻¹⁸ ÷ 1,60 × 10⁻¹⁹ = 17. L'élément de numéro atomique 17 est le chlore, Cl.",
                "2. A ≈ m ÷ mnucléon = 5,85 × 10⁻²⁶ ÷ 1,67 × 10⁻²⁷ ≈ 35,0, donc A = 35.",
                "3. Écriture conventionnelle : ³⁵₁₇Cl ; nombre de neutrons N = 35 - 17 = 18.",
                "4. ³⁵₁₇Cl et ³⁷₁₇Cl sont des isotopes : même nombre de protons (17), mais 18 neutrons pour l'un et 37 - 17 = 20 neutrons pour l'autre.",
                "Réponse : X est le chlore, de noyau ³⁵₁₇Cl (17 protons, 18 neutrons), isotope du chlore 37.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notation ou chaque terme à sa signification.",
            pairs: [
              { left: "Z", right: "Nombre de protons du noyau" },
              { left: "A", right: "Nombre de nucléons du noyau" },
              { left: "A - Z", right: "Nombre de neutrons du noyau" },
              { left: "Isotopes", right: "Même Z, nombres de neutrons différents" },
              { left: "Élément chimique", right: "Ensemble des entités de même numéro atomique" },
              { left: "¹⁴₆C", right: "6 protons et 8 neutrons" },
            ],
          },
          quiz: [
            {
              q: "Combien de neutrons contient le noyau ²⁷₁₃Al ?",
              options: ["14", "13", "27", "40"],
              answer: 0,
              why: "N = A - Z = 27 - 13 = 14.",
            },
            {
              q: "Deux isotopes ont :",
              options: ["le même nombre de masse", "le même nombre de neutrons", "des numéros atomiques différents", "le même nombre de protons"],
              answer: 3,
              why: "Des isotopes ont le même Z (nombre de protons) et des nombres de neutrons différents.",
            },
            {
              q: "Ce qui caractérise un élément chimique, c'est :",
              options: ["son nombre de neutrons", "son numéro atomique Z", "son nombre de masse A", "sa masse en kilogrammes"],
              answer: 1,
              why: "Tous les atomes et ions d'un même élément ont le même nombre de protons, Z.",
            },
            {
              q: "Combien d'électrons possède l'atome de chlore ³⁵₁₇Cl ?",
              options: ["35", "18", "17", "52"],
              answer: 2,
              why: "L'atome est neutre : il a autant d'électrons que de protons, Z = 17.",
            },
            {
              q: "La masse approchée d'un atome de carbone 12 est :",
              options: ["2,0 × 10⁻²⁶ kg", "1,0 × 10⁻²⁶ kg", "9,1 × 10⁻³¹ kg", "1,2 × 10⁻²⁶ kg"],
              answer: 0,
              why: "m ≈ A × mnucléon = 12 × 1,67 × 10⁻²⁷ ≈ 2,0 × 10⁻²⁶ kg.",
            },
          ],
          trap: "Inverser A et Z dans l'écriture conventionnelle, ou prendre A pour le nombre de neutrons : A compte tous les nucléons, le nombre de neutrons est A - Z. Deux noyaux de même A mais de Z différents (¹⁴₆C et ¹⁴₇N) ne sont pas des isotopes.",
          method: "Devant une écriture conventionnelle, lisez toujours dans le même ordre : Z en bas (protons, et électrons de l'atome neutre), A en haut (nucléons), puis calculez N = A - Z. Vérifiez que A est supérieur ou égal à Z et que le symbole correspond bien à Z dans le tableau périodique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "configuration-tableau",
          title: "Configuration électronique et tableau périodique",
          minutes: 35,
          objectives: [
            "Établir la configuration électronique d'un atome à l'état fondamental (Z ≤ 18) à l'aide des sous-couches 1s, 2s, 2p, 3s et 3p.",
            "Déterminer la position d'un élément dans le tableau périodique (période, bloc, colonne) à partir de la configuration électronique de l'atome à l'état fondamental, et inversement.",
            "Déterminer les électrons de valence d'un atome (Z ≤ 18) à partir de sa configuration électronique ou de sa position dans le tableau périodique.",
            "Associer la notion de famille chimique à l'existence de propriétés communes et identifier la famille des gaz nobles.",
          ],
          course: [
            {
              heading: "Couches et sous-couches électroniques",
              paragraphs: [
                "Les électrons d'un atome se répartissent en couches, numérotées n = 1, 2, 3..., de plus en plus éloignées du noyau en moyenne. Chaque couche se subdivise en sous-couches. La couche n = 1 ne comporte qu'une sous-couche, 1s ; la couche n = 2 comporte les sous-couches 2s et 2p ; pour la couche n = 3, on n'utilise en seconde que 3s et 3p. Une sous-couche s peut contenir au plus 2 électrons, une sous-couche p au plus 6.",
                "À l'état fondamental (l'état de plus basse énergie de l'atome), les électrons occupent les sous-couches dans l'ordre 1s, 2s, 2p, 3s, 3p, en remplissant complètement une sous-couche avant de passer à la suivante. La configuration électronique s'écrit en indiquant en exposant le nombre d'électrons de chaque sous-couche. Exemples : hydrogène (Z = 1) 1s¹ ; carbone (Z = 6) 1s² 2s² 2p² ; sodium (Z = 11) 1s² 2s² 2p⁶ 3s¹ ; chlore (Z = 17) 1s² 2s² 2p⁶ 3s² 3p⁵.",
              ],
              box: { label: "Règle", text: "Ordre de remplissage : 1s, 2s, 2p, 3s, 3p. Au plus 2 électrons dans une sous-couche s, 6 dans une sous-couche p. Pour un atome, la somme des exposants est égale à Z." },
            },
            {
              heading: "Les électrons de valence",
              paragraphs: [
                "La couche de valence est la dernière couche occupée, celle dont le numéro n est le plus grand. Les électrons qu'elle contient sont les électrons de valence ; les autres sont des électrons de cœur. Ce sont les électrons de valence qui interviennent dans les transformations chimiques.",
                "Exemples : oxygène (Z = 8), 1s² 2s² 2p⁴ : la couche de valence est n = 2, elle contient 2 + 4 = 6 électrons de valence. Magnésium (Z = 12), 1s² 2s² 2p⁶ 3s² : la couche de valence est n = 3, avec 2 électrons de valence (3s²) ; les 10 autres électrons sont des électrons de cœur.",
              ],
              box: { label: "Définition", text: "Électrons de valence : électrons de la couche occupée de plus grand numéro n. Exemple : chlore 1s² 2s² 2p⁶ 3s² 3p⁵, 7 électrons de valence (3s² 3p⁵)." },
            },
            {
              heading: "Le tableau périodique",
              paragraphs: [
                "Le tableau périodique, dont le chimiste russe Dmitri Mendeleïev a proposé une première version en 1869, classe les éléments par numéro atomique croissant. Dans sa forme actuelle, il compte 18 colonnes. Chaque ligne, ou période, correspond au remplissage d'une couche : la période d'un élément est le numéro n de sa couche de valence. Les éléments de Z = 1 à 18 occupent les trois premières périodes : 2 éléments (H, He), puis 8 (de Li à Ne), puis 8 (de Na à Ar).",
                "Le bloc indique la sous-couche en cours de remplissage : bloc s pour les colonnes 1 et 2 (et l'hélium), bloc p pour les colonnes 13 à 18. Un élément du bloc s a 1 ou 2 électrons de valence et se trouve dans la colonne 1 ou 2 ; un élément du bloc p se trouve dans la colonne 10 + (nombre d'électrons de valence). Exemple : le soufre (Z = 16), 1s² 2s² 2p⁶ 3s² 3p⁴, est dans la période 3, le bloc p, et possède 6 électrons de valence : colonne 16.",
                "Inversement, la position donne la configuration : un élément de la période 2 et de la colonne 15 a pour couche de valence 2s² 2p³, donc pour configuration 1s² 2s² 2p³ : c'est l'azote (Z = 7). L'hélium (1s²) fait exception : il appartient au bloc s mais il est placé dans la colonne 18, avec les autres gaz nobles, car il partage leurs propriétés.",
              ],
              box: { label: "Repère", text: "Période = numéro n de la couche de valence. Colonnes 1 et 2 : ns¹ et ns². Colonnes 13 à 18 : ns² np¹ à ns² np⁶ (colonne = 10 + nombre d'électrons de valence). Hélium : 1s², colonne 18." },
            },
            {
              heading: "Les familles chimiques",
              paragraphs: [
                "Les éléments d'une même colonne ont le même nombre d'électrons de valence et des propriétés chimiques voisines : ils forment une famille chimique. Les métaux alcalins (colonne 1 sauf l'hydrogène : Li, Na, K...) réagissent vivement avec l'eau. Les halogènes (colonne 17 : F, Cl, Br, I) forment des molécules diatomiques, comme Cl₂, et des ions de charge -e. Les gaz nobles (colonne 18 : He, Ne, Ar, Kr, Xe, Rn) sont très peu réactifs : on les trouve à l'état d'atomes isolés.",
                "Cette inertie chimique des gaz nobles s'explique par leur couche de valence saturée : 1s² pour l'hélium, ns² np⁶ (huit électrons de valence) pour les autres. On utilise ainsi l'argon dans les ampoules à incandescence et pour protéger les métaux chauds lors de certaines soudures, et l'hélium pour gonfler les ballons sans risque d'inflammation, contrairement au dihydrogène. La leçon sur les ions montre comment les autres atomes tendent vers cette configuration.",
              ],
              box: { label: "À retenir", text: "Une famille chimique est une colonne : même nombre d'électrons de valence, propriétés chimiques voisines. Gaz nobles (colonne 18) : couche de valence saturée, très grande stabilité chimique." },
            },
          ],
          keyPoints: [
            "Remplissage à l'état fondamental : 1s, 2s, 2p, 3s, 3p ; au plus 2 électrons pour s et 6 pour p.",
            "Électrons de valence : ceux de la couche de plus grand numéro n.",
            "Période = numéro de la couche de valence ; bloc s (colonnes 1 et 2), bloc p (colonnes 13 à 18).",
            "Bloc p : colonne = 10 + nombre d'électrons de valence ; l'hélium est dans la colonne 18.",
            "Famille chimique = colonne ; gaz nobles très stables grâce à leur couche de valence saturée.",
          ],
          example: {
            statement: "Le phosphore a pour numéro atomique Z = 15. 1. Écrire sa configuration électronique à l'état fondamental. 2. Combien possède-t-il d'électrons de valence ? 3. Situer le phosphore dans le tableau périodique. 4. Quel élément de la période 2 appartient à la même famille ? Écrire sa configuration.",
            solution: [
              "1. On répartit 15 électrons dans l'ordre 1s, 2s, 2p, 3s, 3p : 1s² 2s² 2p⁶ 3s² 3p³ (vérification : 2 + 2 + 6 + 2 + 3 = 15).",
              "2. La couche de plus grand numéro est n = 3 : 3s² 3p³, soit 5 électrons de valence.",
              "3. Période 3 (couche de valence n = 3) ; la sous-couche en cours de remplissage est 3p : bloc p ; colonne 10 + 5 = 15.",
              "4. L'élément de la période 2 et de la colonne 15 a pour couche de valence 2s² 2p³ : configuration 1s² 2s² 2p³, soit Z = 7, l'azote.",
              "Réponse : 1s² 2s² 2p⁶ 3s² 3p³, 5 électrons de valence, période 3, colonne 15 ; l'azote est de la même famille.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire la configuration électronique à l'état fondamental des atomes suivants et indiquer pour chacun le nombre d'électrons de valence : a) lithium (Z = 3) ; b) azote (Z = 7) ; c) néon (Z = 10) ; d) aluminium (Z = 13) ; e) argon (Z = 18).",
              hint: "Remplissez dans l'ordre 1s, 2s, 2p, 3s, 3p sans dépasser 2 électrons pour s et 6 pour p, puis comptez les électrons de la dernière couche.",
              solution: [
                "a) Li : 1s² 2s¹, 1 électron de valence.",
                "b) N : 1s² 2s² 2p³, 5 électrons de valence.",
                "c) Ne : 1s² 2s² 2p⁶, 8 électrons de valence.",
                "d) Al : 1s² 2s² 2p⁶ 3s² 3p¹, 3 électrons de valence.",
                "e) Ar : 1s² 2s² 2p⁶ 3s² 3p⁶, 8 électrons de valence.",
              ],
            },
            {
              level: 2,
              statement: "Un élément X se trouve dans la 3e période et la 2e colonne du tableau périodique ; un élément Y se trouve dans la 2e période et la 17e colonne. 1. Écrire leurs configurations électroniques. 2. En déduire leurs numéros atomiques et les identifier, à l'aide des données : F (Z = 9) ; Mg (Z = 12) ; Cl (Z = 17) ; Ca (Z = 20). 3. Nommer la famille de Y et citer un autre élément de cette famille.",
              hint: "La période donne la couche de valence, la colonne le nombre d'électrons de valence (colonne 17 : 7 électrons de valence).",
              solution: [
                "1. X : couche de valence n = 3 avec 2 électrons, 3s² ; configuration 1s² 2s² 2p⁶ 3s². Y : couche de valence n = 2 avec 17 - 10 = 7 électrons, 2s² 2p⁵ ; configuration 1s² 2s² 2p⁵.",
                "2. X : 2 + 2 + 6 + 2 = 12 électrons, Z = 12 : magnésium. Y : 2 + 2 + 5 = 9 électrons, Z = 9 : fluor.",
                "3. Le fluor appartient à la famille des halogènes, comme le chlore (Z = 17), situé juste en dessous.",
                "Réponse : X est le magnésium, Y le fluor, de la famille des halogènes.",
              ],
            },
            {
              level: 3,
              statement: "Un élève propose les configurations électroniques suivantes : a) silicium (Z = 14) : 1s² 2s² 2p⁸ 3s² ; b) soufre (Z = 16) : 1s² 2s² 2p⁶ 3p⁶ ; c) argon (Z = 18) : 1s² 2s² 2p⁶ 3s² 3p⁶. 1. Repérer les erreurs et corriger les configurations fausses. 2. Pour chaque élément, donner la période, la colonne et le nombre d'électrons de valence. 3. Lequel de ces éléments appartient à la famille des gaz nobles ? Justifier sa très faible réactivité.",
              hint: "Vérifiez trois règles : la somme des exposants vaut Z, une sous-couche p contient au plus 6 électrons, l'ordre 1s, 2s, 2p, 3s, 3p est respecté.",
              solution: [
                "1. a) Faux : une sous-couche p contient au plus 6 électrons. Correction : 1s² 2s² 2p⁶ 3s² 3p² (total 14).",
                "b) Faux : le total vaut bien 16, mais la sous-couche 3s doit être remplie avant 3p. Correction : 1s² 2s² 2p⁶ 3s² 3p⁴. c) Correct (total 18).",
                "2. Silicium : période 3, 4 électrons de valence (3s² 3p²), colonne 14. Soufre : période 3, 6 électrons de valence, colonne 16. Argon : période 3, 8 électrons de valence, colonne 18.",
                "3. L'argon, dans la colonne 18, est un gaz noble. Sa couche de valence 3s² 3p⁶ est saturée (huit électrons) : cette configuration très stable explique qu'il ne participe pratiquement à aucune transformation chimique.",
                "Réponse : Si 1s² 2s² 2p⁶ 3s² 3p² et S 1s² 2s² 2p⁶ 3s² 3p⁴ ; l'argon est le gaz noble.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Configurations et tableau périodique.",
            statements: [
              { text: "Une sous-couche p peut contenir jusqu'à 6 électrons.", true: true, why: "Une sous-couche s contient au plus 2 électrons, une sous-couche p au plus 6." },
              { text: "La configuration 1s² 2s² 2p⁶ 3s¹ est celle du sodium (Z = 11).", true: true, why: "2 + 2 + 6 + 1 = 11 électrons, répartis dans le bon ordre." },
              { text: "La période d'un élément est égale à son nombre d'électrons de valence.", true: false, why: "La période est le numéro n de la couche de valence ; le nombre d'électrons de valence est lié à la colonne." },
              { text: "Le chlore (1s² 2s² 2p⁶ 3s² 3p⁵) possède 5 électrons de valence.", true: false, why: "Il en possède 7 : les 2 électrons 3s et les 5 électrons 3p." },
              { text: "Les éléments d'une même colonne ont le même nombre d'électrons de valence.", true: true, why: "C'est ce qui leur donne des propriétés chimiques voisines : ils forment une famille." },
              { text: "L'hélium, de configuration 1s², est placé dans la colonne 2.", true: false, why: "Il est placé dans la colonne 18, avec les gaz nobles, dont il partage la stabilité." },
              { text: "Les gaz nobles sont des éléments très réactifs.", true: false, why: "Leur couche de valence saturée les rend au contraire très peu réactifs." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la configuration électronique de l'oxygène (Z = 8) à l'état fondamental ?",
              options: ["1s² 2s² 2p⁶", "1s² 2s⁶", "1s² 2p⁶", "1s² 2s² 2p⁴"],
              answer: 3,
              why: "On répartit 8 électrons : 2 en 1s, 2 en 2s, puis les 4 restants en 2p.",
            },
            {
              q: "Combien d'électrons de valence possède l'atome de configuration 1s² 2s² 2p⁶ 3s² 3p³ ?",
              options: ["3", "5", "15", "10"],
              answer: 1,
              why: "La couche de valence est n = 3 : 3s² 3p³, soit 2 + 3 = 5 électrons.",
            },
            {
              q: "Un élément de configuration 1s² 2s² 2p⁶ 3s² 3p⁵ est situé :",
              options: ["période 2, colonne 17", "période 3, colonne 15", "période 3, colonne 17", "période 5, colonne 3"],
              answer: 2,
              why: "Couche de valence n = 3 (période 3) avec 7 électrons de valence, dans le bloc p : colonne 10 + 7 = 17.",
            },
            {
              q: "Les éléments d'une même famille chimique :",
              options: ["ont autant d'électrons de valence", "ont tous le même numéro atomique Z", "appartiennent tous à la même période", "ont tous la même masse et la même taille"],
              answer: 0,
              why: "Une famille est une colonne : même nombre d'électrons de valence, donc propriétés chimiques voisines.",
            },
            {
              q: "Pourquoi les gaz nobles sont-ils très peu réactifs ?",
              options: ["Parce que leur noyau ne contient pas de neutrons", "Leur couche de valence est saturée", "Parce qu'ils sont tous gazeux et légers", "Parce qu'ils n'ont pas d'électrons"],
              answer: 1,
              why: "Leur couche de valence complète (1s² ou ns² np⁶) constitue une configuration particulièrement stable.",
            },
          ],
          trap: "Confondre période et colonne, ou compter tous les électrons comme électrons de valence : seuls ceux de la couche de plus grand numéro n le sont (le sodium, 1s² 2s² 2p⁶ 3s¹, n'en a qu'un). Autre erreur : remplir 3p avant d'avoir complété 3s, ou placer plus de 6 électrons dans une sous-couche p.",
          method: "Après avoir écrit une configuration, faites trois vérifications : la somme des exposants vaut Z, aucune sous-couche s ne dépasse 2 électrons et aucune sous-couche p ne dépasse 6, l'ordre 1s, 2s, 2p, 3s, 3p est respecté. Lisez ensuite la période (dernier n) et comptez les électrons de valence sur cette seule couche.",
        },
      ],
    },
    /* ================================================================== */
    /* DES ENTITÉS CHIMIQUES PLUS STABLES, ET LES COMPTER                   */
    /* ================================================================== */
    {
      id: 'entites-stables',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "ions-monoatomiques",
          title: "Les ions monoatomiques et la stabilité des gaz nobles",
          minutes: 30,
          objectives: [
            "Établir le lien entre stabilité chimique et configuration électronique de valence d'un gaz noble.",
            "Déterminer la charge électrique d'ions monoatomiques courants à partir du tableau périodique.",
            "Nommer les ions H⁺, Na⁺, K⁺, Ca²⁺, Mg²⁺, Cl⁻ et F⁻, et écrire leur formule à partir de leur nom.",
            "Écrire la formule d'un solide ionique électriquement neutre à partir des ions qui le constituent.",
          ],
          course: [
            {
              heading: "La stabilité des gaz nobles",
              paragraphs: [
                "Les gaz nobles (hélium, néon, argon...) existent à l'état d'atomes isolés et ne participent presque à aucune transformation chimique. Leur couche de valence est saturée : deux électrons pour l'hélium (1s²), huit pour les autres (ns² np⁶). Cette configuration électronique est particulièrement stable.",
                "Les autres atomes, au cours des transformations chimiques, tendent à acquérir la configuration électronique de valence du gaz noble le plus proche dans le tableau périodique. Ils y parviennent soit en perdant ou en gagnant des électrons (ils deviennent alors des ions), soit en mettant des électrons en commun avec d'autres atomes (ils forment des molécules, voir la leçon suivante). On parle de règle du duet pour les atomes proches de l'hélium (deux électrons sur la couche de valence) et de règle de l'octet pour les autres (huit électrons).",
              ],
              box: { label: "Règle", text: "Au cours des transformations chimiques, les atomes tendent à acquérir la configuration électronique de valence du gaz noble le plus proche : un duet (1s², comme l'hélium) ou un octet (ns² np⁶, huit électrons de valence)." },
            },
            {
              heading: "Former un ion monoatomique",
              paragraphs: [
                "Un ion monoatomique provient d'un seul atome qui a perdu ou gagné un ou plusieurs électrons ; son noyau n'est pas modifié. Le sodium (Z = 11) a pour configuration 1s² 2s² 2p⁶ 3s¹ : en perdant son unique électron de valence, il prend la configuration 1s² 2s² 2p⁶ du néon et devient l'ion Na⁺, qui possède 11 protons et 10 électrons, d'où une charge +e. Le chlore (Z = 17), 1s² 2s² 2p⁶ 3s² 3p⁵, gagne un électron pour acquérir la configuration de l'argon : il devient l'ion chlorure Cl⁻ (17 protons, 18 électrons).",
                "Le tableau périodique permet de prévoir la charge des ions courants. Les atomes des colonnes 1, 2 et 13, qui ont 1, 2 ou 3 électrons de valence, les perdent : ils forment des cations de charge +e, +2e ou +3e (Li⁺, Na⁺ ; Mg²⁺ ; Al³⁺). Les atomes des colonnes 16 et 17, auxquels il manque 2 ou 1 électron pour avoir huit électrons de valence, en gagnent : ils forment des anions de charge -2e ou -e (O²⁻, S²⁻ ; F⁻, Cl⁻). Le lithium, en perdant son électron 2s¹, prend la configuration 1s² de l'hélium : c'est la règle du duet.",
                "L'hydrogène (1s¹) forme souvent l'ion H⁺ en perdant son unique électron : cet ion ne possède plus aucun électron, c'est un simple proton. Il ne prend donc pas la configuration d'un gaz noble : c'est une exception à la règle.",
              ],
              box: { label: "Repère", text: "Colonne 1 : ion X⁺ ; colonne 2 : X²⁺ ; colonne 13 : X³⁺ ; colonne 16 : X²⁻ ; colonne 17 : X⁻. Un cation a perdu des électrons, un anion en a gagné ; le nombre de protons ne change jamais." },
            },
            {
              heading: "Nommer les ions et écrire la formule d'un solide ionique",
              paragraphs: [
                "Les cations monoatomiques portent le nom de l'élément : ion hydrogène H⁺, ion sodium Na⁺, ion potassium K⁺, ion calcium Ca²⁺, ion magnésium Mg²⁺. Les anions monoatomiques portent en général un nom en « -ure » : ion chlorure Cl⁻, ion fluorure F⁻, ion sulfure S²⁻ ; l'ion O²⁻ fait exception et se nomme ion oxyde. Le potassium (Z = 19) et le calcium (Z = 20), placés dans la période 4, colonnes 1 et 2, forment les ions K⁺ et Ca²⁺, comme les autres éléments de leur famille.",
                "Un solide ionique est constitué de cations et d'anions en proportions telles que l'ensemble est électriquement neutre. Sa formule indique ces proportions, le cation étant écrit en premier et les charges n'étant pas notées. Chlorure de sodium : Na⁺ et Cl⁻, une charge positive pour une charge négative, formule NaCl. Chlorure de calcium : Ca²⁺ et Cl⁻, il faut deux ions chlorure pour un ion calcium, formule CaCl₂. Fluorure de magnésium : MgF₂. Oxyde d'aluminium : Al³⁺ et O²⁻, formule Al₂O₃, car 2 × (+3) + 3 × (-2) = 0.",
              ],
              box: { label: "À retenir", text: "H⁺ hydrogène, Na⁺ sodium, K⁺ potassium, Ca²⁺ calcium, Mg²⁺ magnésium, Cl⁻ chlorure, F⁻ fluorure. Un solide ionique est électriquement neutre : NaCl, CaCl₂, MgF₂, Al₂O₃." },
            },
          ],
          keyPoints: [
            "Gaz nobles : couche de valence saturée (duet 1s² ou octet ns² np⁶), très grande stabilité.",
            "Les atomes tendent à acquérir la configuration de valence du gaz noble le plus proche.",
            "Colonnes 1, 2, 13 : cations +e, +2e, +3e ; colonnes 16, 17 : anions -2e, -e.",
            "H⁺, Na⁺, K⁺, Ca²⁺, Mg²⁺ portent le nom de l'élément ; Cl⁻ chlorure, F⁻ fluorure.",
            "Un solide ionique est neutre : la somme des charges de ses ions est nulle (CaCl₂).",
          ],
          example: {
            statement: "Le magnésium a pour numéro atomique Z = 12. 1. Écrire sa configuration électronique. 2. Quel ion monoatomique forme-t-il ? Justifier. 3. Donner le nombre de protons et d'électrons de cet ion, ainsi que sa configuration électronique. 4. Écrire la formule du chlorure de magnésium.",
            solution: [
              "1. Mg : 1s² 2s² 2p⁶ 3s², avec 2 électrons de valence.",
              "2. Le gaz noble le plus proche est le néon (1s² 2s² 2p⁶). En perdant ses 2 électrons de valence, l'atome de magnésium acquiert cette configuration : il forme l'ion Mg²⁺, ce que confirme sa place dans la colonne 2.",
              "3. Mg²⁺ possède 12 protons (le noyau ne change pas) et 12 - 2 = 10 électrons ; sa configuration est 1s² 2s² 2p⁶, celle du néon.",
              "4. Le chlorure de magnésium contient des ions Mg²⁺ et Cl⁻. Pour la neutralité, il faut deux ions Cl⁻ pour un ion Mg²⁺ : (+2) + 2 × (-1) = 0.",
              "Réponse : l'ion Mg²⁺ (12 protons, 10 électrons) ; formule du chlorure de magnésium : MgCl₂.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire la formule de chacun des ions suivants, puis les classer en cations et en anions : ion potassium, ion fluorure, ion calcium, ion hydrogène, ion chlorure, ion magnésium, ion sodium.",
              hint: "Les noms en « -ure » désignent des anions ; les ions qui portent simplement le nom de l'élément sont des cations.",
              solution: [
                "Ion potassium K⁺ ; ion fluorure F⁻ ; ion calcium Ca²⁺ ; ion hydrogène H⁺ ; ion chlorure Cl⁻ ; ion magnésium Mg²⁺ ; ion sodium Na⁺.",
                "Cations : K⁺, Ca²⁺, H⁺, Mg²⁺, Na⁺.",
                "Anions : F⁻, Cl⁻.",
              ],
            },
            {
              level: 2,
              statement: "On considère l'oxygène (Z = 8) et l'aluminium (Z = 13). 1. Écrire leurs configurations électroniques. 2. Prévoir l'ion monoatomique formé par chacun, en justifiant à l'aide de la règle de l'octet. 3. Donner le nombre d'électrons et la configuration électronique de chaque ion. À quel gaz noble correspondent-elles ? 4. Écrire la formule de l'oxyde d'aluminium.",
              hint: "Cherchez le chemin le plus court vers huit électrons de valence : gagner 2 électrons pour l'oxygène, perdre 3 électrons pour l'aluminium.",
              solution: [
                "1. O : 1s² 2s² 2p⁴ (6 électrons de valence). Al : 1s² 2s² 2p⁶ 3s² 3p¹ (3 électrons de valence).",
                "2. L'oxygène gagne 2 électrons pour compléter son octet : ion O²⁻. L'aluminium perd ses 3 électrons de valence, ce qui laisse la couche n = 2 complète (huit électrons) : ion Al³⁺.",
                "3. O²⁻ : 8 + 2 = 10 électrons, 1s² 2s² 2p⁶. Al³⁺ : 13 - 3 = 10 électrons, 1s² 2s² 2p⁶. Les deux ions ont la configuration du néon.",
                "4. Neutralité : il faut autant de charges positives que de charges négatives. 2 ions Al³⁺ apportent +6, 3 ions O²⁻ apportent -6.",
                "Réponse : O²⁻ et Al³⁺, de configuration 1s² 2s² 2p⁶ (néon) ; oxyde d'aluminium Al₂O₃.",
              ],
            },
            {
              level: 3,
              statement: "Un ion monoatomique X possède 18 électrons et porte une charge q = -3,2 × 10⁻¹⁹ C. Données : e = 1,6 × 10⁻¹⁹ C ; numéros atomiques : S (16), Cl (17), Ar (18), K (19), Ca (20). 1. Exprimer la charge de l'ion en fonction de e. 2. Combien d'électrons l'atome correspondant a-t-il gagnés ou perdus ? En déduire son numéro atomique et identifier l'élément. 3. Écrire la configuration électronique de l'atome puis celle de l'ion. À quel gaz noble correspond celle de l'ion ? 4. Un ion Y²⁺ possède lui aussi 18 électrons : identifier l'élément Y. 5. Écrire la formule du solide ionique formé par ces deux ions.",
              hint: "Une charge -2e signifie que l'atome a gagné 2 électrons. Pour Y²⁺, l'atome a au contraire perdu 2 électrons.",
              solution: [
                "1. q ÷ e = -3,2 × 10⁻¹⁹ ÷ 1,6 × 10⁻¹⁹ = -2 : la charge vaut -2e, l'ion est un anion.",
                "2. L'atome a gagné 2 électrons. L'atome neutre possédait donc 18 - 2 = 16 électrons, soit 16 protons : Z = 16, c'est le soufre. L'ion est l'ion sulfure S²⁻.",
                "3. Atome S : 1s² 2s² 2p⁶ 3s² 3p⁴. Ion S²⁻ : 1s² 2s² 2p⁶ 3s² 3p⁶, configuration de l'argon.",
                "4. Y²⁺ a perdu 2 électrons : l'atome Y en possédait 18 + 2 = 20, donc Z = 20 : c'est le calcium, et l'ion est Ca²⁺.",
                "5. Les charges +2e et -2e se compensent avec un ion de chaque sorte : formule CaS (sulfure de calcium).",
                "Réponse : X est l'ion sulfure S²⁻, Y l'ion calcium Ca²⁺, et le solide ionique a pour formule CaS.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque nom d'ion à sa formule.",
            pairs: [
              { left: "Ion sodium", right: "Na⁺" },
              { left: "Ion chlorure", right: "Cl⁻" },
              { left: "Ion calcium", right: "Ca²⁺" },
              { left: "Ion fluorure", right: "F⁻" },
              { left: "Ion magnésium", right: "Mg²⁺" },
              { left: "Ion potassium", right: "K⁺" },
            ],
          },
          quiz: [
            {
              q: "L'atome de potassium, situé dans la colonne 1, forme l'ion :",
              options: ["K⁻", "K²⁺", "K⁺", "K²⁻"],
              answer: 2,
              why: "Les atomes de la colonne 1 perdent leur unique électron de valence : ils forment des ions de charge +e.",
            },
            {
              q: "Quel est le nom de l'ion F⁻ ?",
              options: ["Ion fluorure", "Ion fluor", "Ion fluorate", "Ion fluorium"],
              answer: 0,
              why: "Les anions monoatomiques portent un nom en « -ure » : F⁻ est l'ion fluorure.",
            },
            {
              q: "L'ion Mg²⁺ (Z = 12) possède :",
              options: ["12 protons et 12 électrons", "12 protons et 10 électrons", "10 protons et 12 électrons", "14 protons et 12 électrons"],
              answer: 1,
              why: "Le noyau ne change pas (12 protons) ; l'atome a perdu 2 électrons : 12 - 2 = 10.",
            },
            {
              q: "Quelle est la formule du chlorure de calcium ?",
              options: ["CaCl", "Ca₂Cl", "Ca₂Cl₃", "CaCl₂"],
              answer: 3,
              why: "Il faut deux ions Cl⁻ pour compenser la charge d'un ion Ca²⁺ : CaCl₂.",
            },
            {
              q: "En devenant l'ion Cl⁻, l'atome de chlore acquiert la configuration électronique :",
              options: ["de l'argon", "du néon", "de l'hélium", "du sodium"],
              answer: 0,
              why: "Cl⁻ possède 18 électrons, 1s² 2s² 2p⁶ 3s² 3p⁶ : c'est la configuration de l'argon.",
            },
          ],
          trap: "Se tromper de signe : un atome qui perd des électrons devient un ion positif (cation), car il garde tous ses protons. Autre erreur fréquente : écrire NaCl₂ ou CaCl en oubliant que la somme des charges d'un solide ionique doit être nulle.",
          method: "Pour trouver la charge d'un ion, écrivez la configuration de l'atome, comptez ses électrons de valence et cherchez le chemin le plus court vers le gaz noble le plus proche : perdre 1, 2 ou 3 électrons, ou en gagner 1 ou 2. Vérifiez ensuite que l'ion obtenu a le même nombre d'électrons que ce gaz noble.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "molecules-lewis",
          title: "Molécules, schéma de Lewis et énergie de liaison",
          minutes: 35,
          objectives: [
            "Décrire le modèle de Lewis de la liaison de valence : une liaison covalente est un doublet d'électrons mis en commun.",
            "Établir et exploiter le schéma de Lewis d'une molécule (Z ≤ 18) pour justifier sa stabilité par référence aux gaz nobles, en distinguant doublets liants et non liants.",
            "Associer qualitativement l'énergie d'une liaison entre deux atomes à l'énergie nécessaire pour rompre cette liaison.",
          ],
          course: [
            {
              heading: "La liaison covalente",
              paragraphs: [
                "Une molécule est un assemblage électriquement neutre d'atomes liés entre eux. Dans le modèle proposé par le chimiste américain Gilbert Lewis en 1916, une liaison covalente entre deux atomes correspond à la mise en commun de deux électrons, chaque atome en apportant un. Ces deux électrons forment un doublet liant, représenté par un trait entre les symboles des deux atomes : H-H.",
                "En partageant des électrons, chaque atome complète sa couche de valence et acquiert la configuration du gaz noble le plus proche : un duet pour l'hydrogène (deux électrons, comme l'hélium), un octet pour le carbone, l'azote, l'oxygène, le chlore... Dans la molécule de dihydrogène H₂, chaque atome d'hydrogène bénéficie des deux électrons du doublet liant : la molécule est plus stable que deux atomes d'hydrogène séparés. Deux atomes peuvent aussi partager deux doublets (liaison double, notée =) ou trois doublets (liaison triple, notée ≡).",
              ],
              box: { label: "Définition", text: "Liaison covalente : mise en commun d'un doublet d'électrons (doublet liant) entre deux atomes. Liaison double : deux doublets partagés (=). Liaison triple : trois doublets partagés (≡)." },
            },
            {
              heading: "Doublets liants et doublets non liants",
              paragraphs: [
                "Les électrons de valence qui ne participent pas à une liaison se regroupent par paires : ce sont les doublets non liants, représentés par un trait placé autour du symbole de l'atome. Le nombre de liaisons qu'établit un atome est égal au nombre d'électrons qui lui manquent pour satisfaire la règle du duet ou de l'octet.",
                "Hydrogène (1 électron de valence) : 1 liaison, aucun doublet non liant. Carbone (4 électrons de valence) : 4 liaisons, aucun doublet non liant. Azote (5) : 3 liaisons et 1 doublet non liant. Oxygène (6) : 2 liaisons et 2 doublets non liants. Chlore (7) : 1 liaison et 3 doublets non liants. Vérification : autour d'un atome qui respecte l'octet, on compte toujours 4 doublets au total, liants et non liants, soit 8 électrons.",
              ],
              box: { label: "Repère", text: "H : 1 liaison, 0 doublet non liant. C : 4 liaisons, 0. N : 3 liaisons, 1. O : 2 liaisons, 2. Cl : 1 liaison, 3. Autour de chaque atome autre que H : 4 doublets au total." },
            },
            {
              heading: "Établir un schéma de Lewis",
              paragraphs: [
                "Méthode : 1) écrire la configuration électronique de chaque atome et compter ses électrons de valence ; 2) calculer le nombre total de doublets de la molécule, égal à la somme des électrons de valence divisée par 2 ; 3) placer les atomes, celui qui forme le plus de liaisons étant en général au centre, et tracer les liaisons ; 4) répartir les doublets restants en doublets non liants ; 5) vérifier le duet de chaque hydrogène et l'octet de chaque autre atome.",
                "Exemples, décrits en mots : dans l'eau H₂O, l'oxygène est au centre, lié par deux liaisons simples à deux hydrogènes, et porte deux doublets non liants (H-O-H). Dans l'ammoniac NH₃, l'azote est lié à trois hydrogènes et porte un doublet non liant. Dans le méthane CH₄, le carbone est lié à quatre hydrogènes. Dans le dioxyde de carbone, O=C=O, chaque oxygène est lié au carbone par une double liaison et porte deux doublets non liants. Dans le diazote, N≡N, chaque azote porte un doublet non liant.",
              ],
              box: { label: "Règle", text: "Nombre total de doublets = (somme des électrons de valence) ÷ 2. Chaque H forme 1 liaison (duet) ; chaque C, N, O ou Cl est entouré de 4 doublets (octet)." },
            },
            {
              heading: "L'énergie de liaison",
              paragraphs: [
                "Une molécule est plus stable que les atomes isolés qui la composent : pour la dissocier, il faut lui fournir de l'énergie. L'énergie de liaison est l'énergie qu'il faut fournir pour rompre une liaison entre deux atomes, à l'état gazeux. Plus elle est grande, plus la liaison est difficile à rompre. On la donne souvent pour une mole de liaisons (la mole est définie dans la leçon suivante), en kilojoules par mole (kJ·mol⁻¹).",
                "Valeurs moyennes : H-H 436 kJ·mol⁻¹ ; Cl-Cl 243 kJ·mol⁻¹ ; O-H 463 kJ·mol⁻¹ ; O=O 498 kJ·mol⁻¹ ; N≡N 945 kJ·mol⁻¹. Entre deux mêmes atomes, une liaison triple est plus forte qu'une liaison double, elle-même plus forte qu'une liaison simple. La très grande énergie de la liaison triple du diazote explique que ce gaz, majoritaire dans l'air, soit très peu réactif. À l'échelle d'une seule liaison, ces énergies sont minuscules : rompre une liaison H-H demande environ 7,2 × 10⁻¹⁹ J.",
              ],
              box: { label: "Définition", text: "Énergie de liaison : énergie à fournir pour rompre une liaison entre deux atomes (à l'état gazeux). Plus elle est élevée, plus la liaison est solide. La formation de cette liaison libère la même énergie." },
            },
          ],
          keyPoints: [
            "Liaison covalente : un doublet d'électrons mis en commun entre deux atomes (doublet liant).",
            "Doublets non liants : paires d'électrons de valence qui ne participent à aucune liaison.",
            "H : 1 liaison ; C : 4 ; N : 3 et 1 doublet non liant ; O : 2 et 2 ; Cl : 1 et 3.",
            "Duet pour H, octet pour les autres : 4 doublets autour de C, N, O, Cl.",
            "Énergie de liaison : énergie à fournir pour rompre la liaison ; triple > double > simple entre deux mêmes atomes.",
          ],
          example: {
            statement: "Établir le schéma de Lewis du chlorure d'hydrogène HCl, puis celui du méthanal CH₂O, dans lequel le carbone est l'atome central. Données : H (Z = 1), C (Z = 6), O (Z = 8), Cl (Z = 17).",
            solution: [
              "HCl : H (1s¹) a 1 électron de valence, Cl (1s² 2s² 2p⁶ 3s² 3p⁵) en a 7. Total : 8 électrons, soit 4 doublets.",
              "Un doublet liant H-Cl, et les 3 doublets restants sont non liants sur le chlore. Vérification : H a son duet, Cl est entouré de 4 doublets (octet).",
              "CH₂O : C (1s² 2s² 2p²) a 4 électrons de valence, chaque H en a 1, O (1s² 2s² 2p⁴) en a 6. Total : 4 + 2 + 6 = 12 électrons, soit 6 doublets.",
              "Le carbone, au centre, forme 4 liaisons : une liaison simple avec chaque H et une liaison double avec O (4 doublets liants). L'oxygène, qui forme 2 liaisons, porte les 2 doublets restants en doublets non liants.",
              "Vérification : 4 + 2 = 6 doublets ; chaque H a son duet, C et O sont entourés de 4 doublets.",
              "Réponse : H-Cl avec trois doublets non liants sur Cl ; méthanal : C lié à deux H et doublement lié à O, qui porte deux doublets non liants.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun des atomes H (Z = 1), C (Z = 6), N (Z = 7), O (Z = 8) et Cl (Z = 17) : écrire la configuration électronique, indiquer le nombre d'électrons de valence, puis en déduire le nombre de liaisons covalentes et de doublets non liants qu'il possède dans une molécule.",
              hint: "Le nombre de liaisons est le nombre d'électrons qui manquent pour atteindre 2 (hydrogène) ou 8 (autres atomes) ; les électrons de valence restants forment des doublets non liants.",
              solution: [
                "H : 1s¹, 1 électron de valence ; il lui en manque 1 pour le duet : 1 liaison, 0 doublet non liant.",
                "C : 1s² 2s² 2p², 4 électrons de valence ; il en manque 4 : 4 liaisons, 0 doublet non liant.",
                "N : 1s² 2s² 2p³, 5 électrons de valence ; il en manque 3 : 3 liaisons, les 2 électrons restants forment 1 doublet non liant.",
                "O : 1s² 2s² 2p⁴, 6 électrons de valence ; il en manque 2 : 2 liaisons, 2 doublets non liants.",
                "Cl : 1s² 2s² 2p⁶ 3s² 3p⁵, 7 électrons de valence ; il en manque 1 : 1 liaison, 3 doublets non liants.",
              ],
            },
            {
              level: 2,
              statement: "1. Établir le schéma de Lewis de la molécule de dichlore Cl₂. 2. Établir celui de la molécule de sulfure d'hydrogène H₂S (soufre : Z = 16 ; l'atome de soufre est au centre). 3. Pour chaque molécule, vérifier que chaque atome respecte la règle du duet ou de l'octet. 4. Quelle molécule déjà étudiée a un schéma de Lewis de même forme que H₂S ? Expliquer pourquoi.",
              hint: "Comptez le nombre total de doublets, tracez les liaisons, puis complétez avec des doublets non liants. Le soufre est dans la même colonne que l'oxygène.",
              solution: [
                "1. Cl₂ : 2 × 7 = 14 électrons de valence, soit 7 doublets. Une liaison simple Cl-Cl (1 doublet liant) et 3 doublets non liants sur chaque atome de chlore (6 doublets) : 1 + 6 = 7.",
                "2. H₂S : S (1s² 2s² 2p⁶ 3s² 3p⁴) a 6 électrons de valence ; total 1 + 1 + 6 = 8 électrons, soit 4 doublets. Deux liaisons simples S-H et 2 doublets non liants sur le soufre.",
                "3. Dans Cl₂, chaque chlore est entouré de 4 doublets (1 liant, 3 non liants) : octet. Dans H₂S, chaque H a un doublet (duet) et le soufre est entouré de 4 doublets (2 liants, 2 non liants) : octet.",
                "4. L'eau H₂O : le soufre et l'oxygène sont dans la même colonne (16) et ont 6 électrons de valence ; ils forment donc 2 liaisons et portent 2 doublets non liants.",
                "Réponse : Cl₂ avec une liaison simple et trois doublets non liants par atome ; H₂S de même structure que H₂O.",
              ],
            },
            {
              level: 3,
              statement: "1. Établir le schéma de Lewis de la molécule de dioxygène O₂ et justifier qu'elle comporte une liaison double. 2. Établir celui de la molécule de cyanure d'hydrogène HCN, dont les atomes sont enchaînés dans l'ordre H, C, N. 3. Données : énergies de liaison H-H 436 kJ·mol⁻¹, O=O 498 kJ·mol⁻¹, N≡N 945 kJ·mol⁻¹. Classer les molécules H₂, O₂ et N₂ de la plus facile à la plus difficile à dissocier, et expliquer pourquoi le diazote de l'air réagit si peu. 4. Avec O-H = 463 kJ·mol⁻¹, calculer l'énergie à fournir pour rompre toutes les liaisons d'une mole de molécules d'eau à l'état gazeux.",
              hint: "Pour O₂, essayez une liaison simple puis comptez les électrons autour de chaque oxygène. Pour HCN, le carbone doit former 4 liaisons et l'azote 3.",
              solution: [
                "1. O₂ : 2 × 6 = 12 électrons de valence, soit 6 doublets. Avec une liaison simple et les 5 doublets restants, l'un des oxygènes n'aurait que 3 doublets autour de lui. Avec une liaison double O=O (2 doublets liants) et 2 doublets non liants sur chaque oxygène, on utilise bien 6 doublets et chaque atome est entouré de 4 doublets : octet respecté.",
                "2. HCN : 1 + 4 + 5 = 10 électrons de valence, soit 5 doublets. H-C (1 doublet), C≡N (3 doublets) et 1 doublet non liant sur l'azote. Vérification : H a son duet ; C a 4 doublets liants ; N a 3 doublets liants et 1 non liant.",
                "3. Classement par énergie de liaison croissante : H₂ (436), O₂ (498), N₂ (945 kJ·mol⁻¹). Le diazote, dont la liaison triple est très solide, est le plus difficile à dissocier : c'est pourquoi il réagit très peu.",
                "4. Une molécule d'eau H-O-H contient 2 liaisons O-H. Pour une mole de molécules : E = 2 × 463 = 926 kJ.",
                "Réponse : O=O et H-C≡N ; ordre H₂ < O₂ < N₂ ; 926 kJ pour une mole d'eau gazeuse.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la construction d'un schéma de Lewis.",
            items: [
              "Écrire la configuration électronique de chaque atome",
              "Compter les électrons de valence de chaque atome",
              "Calculer le nombre total de doublets de la molécule",
              "Placer les atomes, le plus lié au centre, et tracer les liaisons",
              "Répartir les doublets restants en doublets non liants",
              "Vérifier le duet de chaque H et l'octet des autres atomes",
            ],
          },
          quiz: [
            {
              q: "Une liaison covalente simple correspond à :",
              options: ["un électron transféré d'un atome à l'autre", "un doublet d'électrons mis en commun", "deux protons partagés par deux noyaux", "l'attraction entre un cation et un anion"],
              answer: 1,
              why: "Dans le modèle de Lewis, chaque atome apporte un électron et le doublet ainsi formé est partagé.",
            },
            {
              q: "Combien de doublets non liants porte l'atome d'oxygène dans la molécule d'eau ?",
              options: ["0", "1", "3", "2"],
              answer: 3,
              why: "L'oxygène a 6 électrons de valence : 2 sont engagés dans les liaisons O-H, les 4 autres forment 2 doublets non liants.",
            },
            {
              q: "Combien de liaisons covalentes l'atome de carbone établit-il dans une molécule ?",
              options: ["4", "2", "3", "6"],
              answer: 0,
              why: "Le carbone a 4 électrons de valence : il lui en manque 4 pour l'octet, il forme donc 4 liaisons.",
            },
            {
              q: "Dans la molécule de diazote N₂, les deux atomes sont liés par :",
              options: ["une liaison simple", "une liaison double", "une liaison triple", "une liaison ionique"],
              answer: 2,
              why: "Chaque azote a 5 électrons de valence ; en partageant 3 doublets (N≡N) et en gardant un doublet non liant, chacun respecte l'octet.",
            },
            {
              q: "L'énergie de liaison est :",
              options: ["l'énergie libérée quand on chauffe une molécule", "la masse des électrons partagés", "l'énergie des électrons de cœur", "l'énergie à fournir pour rompre la liaison"],
              answer: 3,
              why: "C'est l'énergie nécessaire pour séparer les deux atomes liés ; plus elle est grande, plus la liaison est solide.",
            },
          ],
          trap: "Oublier les doublets non liants ou ne pas vérifier l'octet : dessiner H-O-H sans les deux doublets non liants de l'oxygène, ou O-C-O avec des liaisons simples pour le dioxyde de carbone, laisse des atomes qui ne respectent pas la règle de l'octet.",
          method: "Calculez toujours le nombre total de doublets (somme des électrons de valence divisée par 2) avant de dessiner. Une fois le schéma tracé, recomptez : chaque trait vaut un doublet et le total doit correspondre. Vérifiez enfin, atome par atome, le duet ou l'octet.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "mole-avogadro",
          title: "Compter les entités : la mole et la constante d'Avogadro",
          minutes: 30,
          objectives: [
            "Déterminer la masse d'une entité à partir de sa formule brute et de la masse des atomes qui la composent.",
            "Déterminer le nombre d'entités d'une espèce chimique dans une masse d'échantillon.",
            "Définir la mole et la constante d'Avogadro, et déterminer la quantité de matière (en mol) d'une espèce dans une masse d'échantillon.",
          ],
          course: [
            {
              heading: "La masse d'une entité",
              paragraphs: [
                "La masse d'une molécule est la somme des masses des atomes qui la composent, la masse des électrons étant négligeable. On lit la composition dans la formule brute : C₆H₁₂O₆ (glucose) contient 6 atomes de carbone, 12 atomes d'hydrogène et 6 atomes d'oxygène. Ainsi m(C₆H₁₂O₆) = 6 × m(C) + 12 × m(H) + 6 × m(O).",
                "Avec m(C) = 1,99 × 10⁻²⁶ kg, m(H) = 1,67 × 10⁻²⁷ kg et m(O) = 2,66 × 10⁻²⁶ kg : m(H₂O) = 2 × 1,67 × 10⁻²⁷ + 2,66 × 10⁻²⁶ = 0,334 × 10⁻²⁶ + 2,66 × 10⁻²⁶ ≈ 2,99 × 10⁻²⁶ kg. Pour additionner, il est commode d'écrire toutes les masses avec la même puissance de 10. La masse d'un ion monoatomique est pratiquement égale à celle de l'atome correspondant, puisque la masse des électrons gagnés ou perdus est négligeable.",
              ],
              box: { label: "Formule", text: "m(entité) = somme des masses des atomes indiqués par sa formule brute. Exemple : m(CO₂) = m(C) + 2 × m(O) ≈ 7,31 × 10⁻²⁶ kg." },
            },
            {
              heading: "Compter les entités dans un échantillon",
              paragraphs: [
                "Un échantillon d'une espèce chimique contient un nombre N d'entités identiques. Si l'on connaît la masse m de l'échantillon et la masse m(entité) d'une entité, on obtient N par une simple division : N = m ÷ m(entité), les deux masses étant exprimées dans la même unité. Exemple : un verre contenant 180 g d'eau, soit 0,180 kg, contient N = 0,180 ÷ 2,99 × 10⁻²⁶ ≈ 6,02 × 10²⁴ molécules d'eau.",
                "Ces nombres sont gigantesques et peu pratiques à manipuler. Les chimistes regroupent donc les entités par paquets, comme on compte les œufs par douzaines ou les feuilles de papier par ramettes de 500 : le paquet du chimiste s'appelle la mole.",
              ],
              box: { label: "À retenir", text: "N = m(échantillon) ÷ m(entité), avec les deux masses dans la même unité (le kilogramme en général). N est un nombre sans unité, souvent très grand." },
            },
            {
              heading: "La mole et la constante d'Avogadro",
              paragraphs: [
                "La mole (symbole mol) est l'unité de quantité de matière du Système international. Depuis 2019, elle est définie ainsi : une mole contient exactement 6,022 140 76 × 10²³ entités élémentaires. Ce nombre, rapporté à une mole, est la constante d'Avogadro : NA = 6,022 140 76 × 10²³ mol⁻¹, que l'on arrondit en général à 6,02 × 10²³ mol⁻¹. Son nom honore le physicien italien Amedeo Avogadro (1776-1856).",
                "La quantité de matière n d'un échantillon est le nombre de moles d'entités qu'il contient : n = N ÷ NA, avec n en mol, N sans unité et NA en mol⁻¹. Pour le verre d'eau précédent : n = 6,02 × 10²⁴ ÷ 6,02 × 10²³ = 10,0 mol. Inversement, N = n × NA : 0,50 mol de fer contient 0,50 × 6,02 × 10²³ ≈ 3,0 × 10²³ atomes de fer.",
                "Pour passer de la masse d'un échantillon à sa quantité de matière, on enchaîne donc deux étapes : N = m ÷ m(entité), puis n = N ÷ NA. Une mole de molécules d'eau a une masse d'environ 18 g, une mole d'atomes de carbone une masse d'environ 12 g : la mole relie l'échelle microscopique des entités à l'échelle macroscopique des grammes, mesurables à la balance.",
              ],
              box: { label: "Définition", text: "Une mole contient exactement 6,022 140 76 × 10²³ entités. Constante d'Avogadro : NA ≈ 6,02 × 10²³ mol⁻¹. Quantité de matière : n = N ÷ NA, en mol." },
            },
          ],
          keyPoints: [
            "La masse d'une molécule est la somme des masses de ses atomes, lue dans la formule brute.",
            "Nombre d'entités : N = m(échantillon) ÷ m(entité), les deux masses dans la même unité.",
            "Une mole contient exactement 6,022 140 76 × 10²³ entités ; NA ≈ 6,02 × 10²³ mol⁻¹.",
            "Quantité de matière : n = N ÷ NA, en mol ; inversement N = n × NA.",
            "Une mole d'eau a une masse d'environ 18 g, une mole de carbone d'environ 12 g.",
          ],
          example: {
            statement: "Un morceau de sucre de masse 5,70 g est constitué de saccharose, de formule brute C₁₂H₂₂O₁₁. Données : m(C) = 1,99 × 10⁻²⁶ kg ; m(H) = 1,67 × 10⁻²⁷ kg ; m(O) = 2,66 × 10⁻²⁶ kg ; NA = 6,02 × 10²³ mol⁻¹. 1. Calculer la masse d'une molécule de saccharose. 2. Calculer le nombre de molécules contenues dans le morceau de sucre. 3. En déduire la quantité de matière de saccharose.",
            solution: [
              "1. m(C₁₂H₂₂O₁₁) = 12 × 1,99 × 10⁻²⁶ + 22 × 1,67 × 10⁻²⁷ + 11 × 2,66 × 10⁻²⁶.",
              "En écrivant tout avec 10⁻²⁶ : 23,88 × 10⁻²⁶ + 3,674 × 10⁻²⁶ + 29,26 × 10⁻²⁶ ≈ 56,81 × 10⁻²⁶ kg ≈ 5,68 × 10⁻²⁵ kg.",
              "2. Conversion : m = 5,70 g = 5,70 × 10⁻³ kg. N = 5,70 × 10⁻³ ÷ 5,68 × 10⁻²⁵ ≈ 1,003 × 10²², soit environ 1,00 × 10²² molécules.",
              "3. n = N ÷ NA = 1,003 × 10²² ÷ 6,02 × 10²³ ≈ 1,67 × 10⁻² mol.",
              "Réponse : une molécule de saccharose a une masse d'environ 5,68 × 10⁻²⁵ kg ; le morceau de sucre en contient environ 1,00 × 10²², soit environ 1,67 × 10⁻² mol.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la masse d'une molécule de : a) dioxyde de carbone CO₂ ; b) ammoniac NH₃ ; c) méthane CH₄. Données : m(C) = 1,99 × 10⁻²⁶ kg ; m(H) = 1,67 × 10⁻²⁷ kg ; m(O) = 2,66 × 10⁻²⁶ kg ; m(N) = 2,33 × 10⁻²⁶ kg.",
              hint: "Écrivez m(H) = 0,167 × 10⁻²⁶ kg pour additionner facilement toutes les masses avec la puissance 10⁻²⁶.",
              solution: [
                "a) m(CO₂) = 1,99 × 10⁻²⁶ + 2 × 2,66 × 10⁻²⁶ = (1,99 + 5,32) × 10⁻²⁶ = 7,31 × 10⁻²⁶ kg.",
                "b) m(NH₃) = 2,33 × 10⁻²⁶ + 3 × 0,167 × 10⁻²⁶ = (2,33 + 0,501) × 10⁻²⁶ ≈ 2,83 × 10⁻²⁶ kg.",
                "c) m(CH₄) = 1,99 × 10⁻²⁶ + 4 × 0,167 × 10⁻²⁶ = (1,99 + 0,668) × 10⁻²⁶ ≈ 2,66 × 10⁻²⁶ kg.",
                "Réponses : 7,31 × 10⁻²⁶ kg ; 2,83 × 10⁻²⁶ kg ; 2,66 × 10⁻²⁶ kg.",
              ],
            },
            {
              level: 2,
              statement: "Une bague en or pur a une masse de 3,94 g. Données : masse d'un atome d'or m(Au) = 3,27 × 10⁻²⁵ kg ; NA = 6,02 × 10²³ mol⁻¹. 1. Calculer le nombre d'atomes d'or contenus dans la bague. 2. En déduire la quantité de matière d'or. 3. Quelle est la masse d'une mole d'atomes d'or ?",
              hint: "Convertissez la masse de la bague en kilogrammes avant de diviser. Pour la question 3, une mole contient NA atomes.",
              solution: [
                "1. m = 3,94 g = 3,94 × 10⁻³ kg. N = 3,94 × 10⁻³ ÷ 3,27 × 10⁻²⁵ ≈ 1,20 × 10²² atomes.",
                "2. n = N ÷ NA = 1,20 × 10²² ÷ 6,02 × 10²³ ≈ 2,00 × 10⁻² mol.",
                "3. Une mole contient 6,02 × 10²³ atomes : m = 6,02 × 10²³ × 3,27 × 10⁻²⁵ ≈ 0,197 kg, soit environ 197 g.",
                "Réponse : environ 1,20 × 10²² atomes, soit 2,00 × 10⁻² mol ; une mole d'or a une masse d'environ 197 g.",
              ],
            },
            {
              level: 3,
              statement: "On dispose de 10,0 g d'eau H₂O et de 10,0 g d'éthanol C₂H₆O. Données : m(C) = 1,99 × 10⁻²⁶ kg ; m(H) = 1,67 × 10⁻²⁷ kg ; m(O) = 2,66 × 10⁻²⁶ kg ; m(H₂O) = 2,99 × 10⁻²⁶ kg ; NA = 6,02 × 10²³ mol⁻¹ ; ρ(eau) = 1,00 g·mL⁻¹. 1. Calculer la masse d'une molécule d'éthanol. 2. Sans calcul, prévoir lequel des deux échantillons contient le plus de molécules. Justifier. 3. Calculer le nombre de molécules et la quantité de matière de chaque échantillon, et vérifier la prévision. 4. Quel volume d'eau faut-il mesurer pour disposer de 1,00 mol de molécules d'eau ?",
              hint: "À masse égale, plus les entités sont légères, plus elles sont nombreuses. Pour la question 4, calculez d'abord la masse d'une mole de molécules d'eau, puis utilisez la masse volumique.",
              solution: [
                "1. m(C₂H₆O) = 2 × 1,99 × 10⁻²⁶ + 6 × 0,167 × 10⁻²⁶ + 2,66 × 10⁻²⁶ = (3,98 + 1,002 + 2,66) × 10⁻²⁶ ≈ 7,64 × 10⁻²⁶ kg.",
                "2. Les deux échantillons ont la même masse, et une molécule d'eau est plus légère qu'une molécule d'éthanol : l'échantillon d'eau contient donc davantage de molécules.",
                "3. Eau : N = 1,00 × 10⁻² ÷ 2,99 × 10⁻²⁶ ≈ 3,34 × 10²³ molécules ; n = N ÷ NA ≈ 0,556 mol.",
                "Éthanol : N = 1,00 × 10⁻² ÷ 7,64 × 10⁻²⁶ ≈ 1,31 × 10²³ molécules ; n = N ÷ NA ≈ 0,217 mol. La prévision est vérifiée.",
                "4. Masse d'une mole de molécules d'eau : 6,02 × 10²³ × 2,99 × 10⁻²⁶ ≈ 1,80 × 10⁻² kg = 18,0 g. Volume : V = m ÷ ρ = 18,0 ÷ 1,00 = 18,0 mL.",
                "Réponse : 7,64 × 10⁻²⁶ kg ; environ 0,556 mol d'eau contre 0,217 mol d'éthanol ; 18,0 mL d'eau contiennent 1,00 mol de molécules.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Mole, entités et quantité de matière.",
            statements: [
              { text: "Une mole contient exactement 6,022 140 76 × 10²³ entités.", true: true, why: "C'est la définition de la mole depuis 2019." },
              { text: "La quantité de matière s'exprime en grammes.", true: false, why: "Elle s'exprime en moles (mol) ; le gramme est une unité de masse." },
              { text: "Une mole d'atomes de carbone et une mole de molécules d'eau ont la même masse.", true: false, why: "Elles contiennent autant d'entités, mais une molécule d'eau est plus lourde : environ 18 g contre 12 g." },
              { text: "Une mole d'atomes de carbone et une mole de molécules d'eau contiennent le même nombre d'entités.", true: true, why: "Toute mole contient NA entités, quelle que soit leur nature." },
              { text: "La masse d'une molécule est la somme des masses des atomes qui la composent.", true: true, why: "La masse des électrons étant négligeable, on additionne les masses des atomes de la formule brute." },
              { text: "Pour calculer N = m ÷ m(entité), il n'est pas utile de convertir les masses dans la même unité.", true: false, why: "Les deux masses doivent être dans la même unité, sinon le résultat est faux d'un facteur 1 000 ou plus." },
              { text: "Plus une entité est lourde, plus un échantillon de 1 g en contient.", true: false, why: "C'est l'inverse : à masse égale, les entités lourdes sont moins nombreuses." },
            ],
          },
          quiz: [
            {
              q: "La valeur arrondie de la constante d'Avogadro est :",
              options: ["6,02 × 10⁻²³ mol⁻¹", "1,60 × 10⁻¹⁹ mol⁻¹", "6,02 × 10²³ mol⁻¹", "6,02 × 10²³ mol"],
              answer: 2,
              why: "NA ≈ 6,02 × 10²³ mol⁻¹ : c'est un nombre d'entités par mole, d'où l'unité mol⁻¹.",
            },
            {
              q: "Un échantillon contient 1,204 × 10²⁴ molécules. Sa quantité de matière vaut :",
              options: ["0,50 mol", "2,00 mol", "7,25 × 10⁴⁷ mol", "1,204 mol"],
              answer: 1,
              why: "n = N ÷ NA = 1,204 × 10²⁴ ÷ 6,02 × 10²³ = 2,00 mol.",
            },
            {
              q: "La masse d'une molécule de dioxygène O₂, avec m(O) = 2,66 × 10⁻²⁶ kg, vaut :",
              options: ["2,66 × 10⁻²⁶ kg", "1,33 × 10⁻²⁶ kg", "2,66 × 10⁻⁵² kg", "5,32 × 10⁻²⁶ kg"],
              answer: 3,
              why: "La molécule contient deux atomes d'oxygène : m = 2 × 2,66 × 10⁻²⁶ = 5,32 × 10⁻²⁶ kg.",
            },
            {
              q: "L'unité de la quantité de matière est :",
              options: ["la mole", "le gramme", "le kilogramme par mole", "le nombre d'entités"],
              answer: 0,
              why: "La quantité de matière n s'exprime en moles (symbole mol), unité du Système international.",
            },
            {
              q: "Combien d'atomes contient un échantillon de 0,10 mol de cuivre ?",
              options: ["6,02 × 10²⁴", "6,02 × 10²²", "1,66 × 10⁻²⁴", "0,10 × 10²²"],
              answer: 1,
              why: "N = n × NA = 0,10 × 6,02 × 10²³ = 6,02 × 10²² atomes.",
            },
          ],
          trap: "Mélanger les unités dans N = m ÷ m(entité), par exemple la masse de l'échantillon en grammes et celle de l'entité en kilogrammes, ce qui fausse le résultat d'un facteur 1 000 ; ou confondre le nombre d'entités N, sans unité, et la quantité de matière n, en mol.",
          method: "Dans un calcul de quantité de matière, écrivez la chaîne m → N → n avec ses relations littérales, convertissez d'abord toutes les masses en kilogrammes, puis contrôlez l'ordre de grandeur : un échantillon de quelques grammes contient de l'ordre de 10²² à 10²³ entités, soit une fraction de mole.",
        },
      ],
    },
  ],
}
