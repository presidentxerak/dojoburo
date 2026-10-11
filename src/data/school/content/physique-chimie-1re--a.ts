import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-1re',
  chapters: [
    /* ================================================================== */
    /* LA COMPOSITION D'UN SYSTÈME CHIMIQUE                                 */
    /* ================================================================== */
    {
      id: 'composition-systeme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "quantite-de-matiere",
          title: "Quantité de matière, masse molaire et volume molaire d’un gaz",
          minutes: 30,
          objectives: [
            "Déterminer la masse molaire d'une espèce chimique à partir des masses molaires atomiques des éléments qui la composent.",
            "Calculer une quantité de matière à partir d'une masse, ou d'un volume de liquide et de sa masse volumique.",
            "Utiliser le volume molaire d'un gaz pour déterminer une quantité de matière.",
            "Déterminer la quantité de matière de chaque espèce dans un mélange à partir de sa composition.",
          ],
          course: [
            {
              heading: "La mole, unité de quantité de matière",
              paragraphs: [
                "Un échantillon de matière, même minuscule, contient un nombre gigantesque d'entités (atomes, molécules ou ions) : une seule goutte d'eau contient plus de 10²¹ molécules. Pour compter ces entités, le chimiste les regroupe par paquets. Un paquet s'appelle une mole et contient NA = 6,02 × 10²³ entités. NA est la constante d'Avogadro, elle s'exprime en mol⁻¹.",
                "La quantité de matière n d'un échantillon est le nombre de moles d'entités qu'il contient. Elle s'exprime en mole (symbole mol) et elle est reliée au nombre N d'entités par N = n × NA, soit n = N ÷ NA. L'idée est la même que pour une douzaine d'œufs ou une rame de 500 feuilles de papier : on compte par lots, mais le lot du chimiste est immense.",
                "En pratique, on ne compte jamais les entités une à une. On mesure une masse avec une balance ou un volume avec une éprouvette, une pipette ou une seringue, puis on calcule la quantité de matière. Toute cette leçon consiste à passer d'une grandeur mesurable (masse, volume) à la quantité de matière, et inversement.",
              ],
              box: { label: "Définition", text: "La quantité de matière n est le nombre de moles d'entités d'un échantillon, en mol. Une mole contient NA = 6,02 × 10²³ entités. Relation : N = n × NA." },
            },
            {
              heading: "Masse molaire atomique et masse molaire moléculaire",
              paragraphs: [
                "La masse molaire atomique d'un élément est la masse d'une mole d'atomes de cet élément. Elle s'exprime en g·mol⁻¹ et figure dans la classification périodique : M(H) = 1,0 g·mol⁻¹, M(C) = 12,0 g·mol⁻¹, M(O) = 16,0 g·mol⁻¹, M(Na) = 23,0 g·mol⁻¹, M(Cl) = 35,5 g·mol⁻¹. La masse des électrons étant négligeable, un ion a la même masse molaire que l'atome correspondant : M(Na⁺) = M(Na).",
                "La masse molaire moléculaire d'une espèce est la masse d'une mole de ses entités. On l'obtient en additionnant les masses molaires atomiques de tous les atomes de la formule, chacun compté autant de fois qu'il apparaît. Pour l'eau H₂O : M = 2 × 1,0 + 16,0 = 18,0 g·mol⁻¹. Pour le glucose C₆H₁₂O₆ : M = 6 × 12,0 + 12 × 1,0 + 6 × 16,0 = 72,0 + 12,0 + 96,0 = 180,0 g·mol⁻¹.",
                "La même méthode s'applique aux solides ioniques, à partir de leur formule statistique : M(NaCl) = 23,0 + 35,5 = 58,5 g·mol⁻¹. Pour un solide hydraté comme le sulfate de cuivre pentahydraté CuSO₄,5H₂O, on n'oublie pas les cinq molécules d'eau : M = 63,5 + 32,1 + 4 × 16,0 + 5 × 18,0 = 249,6 g·mol⁻¹.",
              ],
              box: { label: "Formule", text: "Masse molaire moléculaire : somme des masses molaires atomiques, par exemple M(C₆H₁₂O₆) = 6 × M(C) + 12 × M(H) + 6 × M(O), en g·mol⁻¹. Puis, pour un échantillon de masse m : n = m ÷ M, avec m en g, M en g·mol⁻¹ et n en mol." },
            },
            {
              heading: "Quantité de matière d'un solide ou d'un liquide",
              paragraphs: [
                "Pour un échantillon de masse m d'une espèce de masse molaire M, la quantité de matière vaut n = m ÷ M. Exemple : 9,0 g d'eau contiennent n = 9,0 ÷ 18,0 = 0,50 mol de molécules d'eau. Inversement, pour prélever 0,20 mol de chlorure de sodium, on pèse m = n × M = 0,20 × 58,5 = 11,7 g.",
                "Pour un liquide, il est plus commode de mesurer un volume. On utilise alors la masse volumique ρ = m ÷ V : la masse du prélèvement vaut m = ρ × V, donc n = ρ × V ÷ M. Exemple : 10,0 mL d'éthanol C₂H₆O, de masse volumique 0,789 g·mL⁻¹, ont une masse m = 0,789 × 10,0 = 7,89 g ; avec M = 2 × 12,0 + 6 × 1,0 + 16,0 = 46,0 g·mol⁻¹, on obtient n = 7,89 ÷ 46,0 ≈ 0,172 mol. Si l'on donne la densité d du liquide par rapport à l'eau, on retrouve ρ = d × ρ(eau), avec ρ(eau) = 1,00 g·mL⁻¹.",
                "Pour un mélange dont on connaît la composition massique, on calcule d'abord la masse de chaque constituant, puis sa quantité de matière. Exemple : 50,0 g d'un mélange contiennent 20 % en masse de saccharose C₁₂H₂₂O₁₁ (M = 342,0 g·mol⁻¹) et 80 % de chlorure de sodium. La masse de saccharose vaut 0,20 × 50,0 = 10,0 g, soit n = 10,0 ÷ 342,0 ≈ 2,92 × 10⁻² mol ; la masse de sel vaut 40,0 g, soit n = 40,0 ÷ 58,5 ≈ 0,684 mol.",
              ],
              box: { label: "Repère", text: "Solide : n = m ÷ M. Liquide de volume V : m = ρ × V puis n = ρ × V ÷ M. Veillez à la cohérence des unités : si ρ est en g·mL⁻¹, V doit être en mL pour obtenir m en g." },
            },
            {
              heading: "Le volume molaire d'un gaz",
              paragraphs: [
                "Le volume molaire Vm d'un gaz est le volume occupé par une mole de ce gaz. Il s'exprime en L·mol⁻¹. Fait remarquable, établi par Avogadro et Ampère au début du XIXe siècle : à température et pression données, le volume molaire est le même pour tous les gaz (dans le modèle du gaz parfait, valable aux pressions usuelles). Un litre de dioxygène et un litre de dioxyde de carbone, pris dans les mêmes conditions, contiennent donc le même nombre de molécules, même s'ils n'ont pas la même masse.",
                "Le volume molaire dépend de la température et de la pression. Il vaut environ 22,4 L·mol⁻¹ à 0 °C sous 1,013 bar, environ 24,0 L·mol⁻¹ à 20 °C sous 1,013 bar et environ 24,5 L·mol⁻¹ à 25 °C. Il augmente quand la température augmente et diminue quand la pression augmente. Sa valeur est toujours donnée dans l'énoncé : ne la devinez pas.",
                "Pour un volume V de gaz, la quantité de matière vaut n = V ÷ Vm. Exemple : un flacon contient 1,2 L de dioxyde de carbone à 20 °C sous 1,013 bar. n = 1,2 ÷ 24,0 = 0,050 mol. Sa masse vaut m = n × M = 0,050 × 44,0 = 2,2 g. Pour un liquide, en revanche, il n'existe pas de volume molaire commun : chaque liquide a sa propre masse volumique.",
              ],
              box: { label: "Formule", text: "n = V ÷ Vm, avec V et Vm dans la même unité de volume (L et L·mol⁻¹). À température et pression données, Vm est le même pour tous les gaz : environ 24,0 L·mol⁻¹ à 20 °C sous 1,013 bar." },
            },
          ],
          keyPoints: [
            "Une mole contient NA = 6,02 × 10²³ entités ; N = n × NA.",
            "Masse molaire moléculaire : somme des masses molaires atomiques de tous les atomes de la formule, en g·mol⁻¹.",
            "Solide ou liquide pesé : n = m ÷ M.",
            "Liquide mesuré en volume : m = ρ × V, donc n = ρ × V ÷ M.",
            "Gaz : n = V ÷ Vm ; à T et P données, Vm est le même pour tous les gaz (environ 24,0 L·mol⁻¹ à 20 °C sous 1,013 bar).",
          ],
          example: {
            statement: "Un flacon contient 25,0 mL de cyclohexane C₆H₁₂, liquide de masse volumique ρ = 0,779 g·mL⁻¹. Données : M(H) = 1,0 g·mol⁻¹ ; M(C) = 12,0 g·mol⁻¹ ; NA = 6,02 × 10²³ mol⁻¹. Calculer la masse molaire du cyclohexane, la masse de liquide, sa quantité de matière et le nombre de molécules contenues dans le flacon.",
            solution: [
              "Masse molaire : M(C₆H₁₂) = 6 × 12,0 + 12 × 1,0 = 72,0 + 12,0 = 84,0 g·mol⁻¹.",
              "Masse de liquide : m = ρ × V = 0,779 × 25,0 ≈ 19,5 g (le volume est en mL car ρ est en g·mL⁻¹).",
              "Quantité de matière : n = m ÷ M = 19,475 ÷ 84,0 ≈ 0,232 mol (on garde la valeur non arrondie de m dans le calcul).",
              "Nombre de molécules : N = n × NA = 0,232 × 6,02 × 10²³ ≈ 1,40 × 10²³ molécules.",
              "Réponse : M = 84,0 g·mol⁻¹ ; m ≈ 19,5 g ; n ≈ 0,232 mol ; N ≈ 1,40 × 10²³ molécules.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données : M(H) = 1,0 g·mol⁻¹ ; M(C) = 12,0 g·mol⁻¹ ; M(N) = 14,0 g·mol⁻¹ ; M(O) = 16,0 g·mol⁻¹. 1. Calculer les masses molaires du dioxyde de carbone CO₂, de l'ammoniac NH₃ et du glucose C₆H₁₂O₆. 2. Calculer la quantité de matière contenue dans 8,8 g de dioxyde de carbone, dans 3,4 g d'ammoniac et dans 9,0 g de glucose.",
              hint: "Additionnez les masses molaires atomiques en multipliant chacune par l'indice de l'atome, puis appliquez n = m ÷ M.",
              solution: [
                "1. M(CO₂) = 12,0 + 2 × 16,0 = 44,0 g·mol⁻¹.",
                "M(NH₃) = 14,0 + 3 × 1,0 = 17,0 g·mol⁻¹.",
                "M(C₆H₁₂O₆) = 6 × 12,0 + 12 × 1,0 + 6 × 16,0 = 180,0 g·mol⁻¹.",
                "2. n(CO₂) = 8,8 ÷ 44,0 = 0,20 mol ; n(NH₃) = 3,4 ÷ 17,0 = 0,20 mol ; n(glucose) = 9,0 ÷ 180,0 = 0,050 mol.",
                "Réponse : 44,0 ; 17,0 et 180,0 g·mol⁻¹ ; 0,20 mol de CO₂, 0,20 mol de NH₃ et 0,050 mol de glucose.",
              ],
            },
            {
              level: 2,
              statement: "Un ballon de baudruche contient 3,6 L d'hélium He à 20 °C sous 1,013 bar. Données : M(He) = 4,0 g·mol⁻¹ ; M(CO₂) = 44,0 g·mol⁻¹ ; volume molaire à 20 °C sous 1,013 bar : 24,0 L·mol⁻¹ ; à 0 °C sous 1,013 bar : 22,4 L·mol⁻¹. 1. Calculer la quantité de matière d'hélium dans le ballon, puis sa masse. 2. Un second ballon contient 3,6 L de dioxyde de carbone dans les mêmes conditions. Quelle est sa quantité de matière ? Sa masse ? 3. On place le ballon d'hélium au réfrigérateur à 0 °C, la pression restant égale à 1,013 bar. Quel est son nouveau volume ?",
              hint: "Dans les mêmes conditions de température et de pression, deux gaz qui occupent le même volume contiennent la même quantité de matière. Au réfrigérateur, la quantité de matière ne change pas, mais le volume molaire change.",
              solution: [
                "1. n(He) = V ÷ Vm = 3,6 ÷ 24,0 = 0,15 mol ; m(He) = n × M = 0,15 × 4,0 = 0,60 g.",
                "2. Même volume, même température, même pression : même quantité de matière, n(CO₂) = 0,15 mol.",
                "m(CO₂) = 0,15 × 44,0 = 6,6 g : onze fois plus que l'hélium, car la molécule de CO₂ est beaucoup plus lourde.",
                "3. La quantité de matière reste 0,15 mol ; V = n × Vm = 0,15 × 22,4 ≈ 3,4 L.",
                "Réponse : 0,15 mol et 0,60 g d'hélium ; 0,15 mol et 6,6 g de CO₂ ; environ 3,4 L à 0 °C : le ballon se dégonfle légèrement.",
              ],
            },
            {
              level: 3,
              statement: "Une cartouche de camping contient 190 g de gaz liquéfié sous pression. On suppose qu'il s'agit uniquement de butane C₄H₁₀. Données : M(H) = 1,0 g·mol⁻¹ ; M(C) = 12,0 g·mol⁻¹ ; masse volumique du butane liquide dans la cartouche : 0,58 g·mL⁻¹ (valeur simplifiée) ; volume molaire à 20 °C sous 1,013 bar : 24,0 L·mol⁻¹. 1. Calculer la masse molaire du butane puis la quantité de butane contenue dans la cartouche. 2. Calculer le volume occupé par ce butane à l'état liquide dans la cartouche. 3. Calculer le volume qu'occuperait ce butane à l'état gazeux à 20 °C sous 1,013 bar. 4. Comparer les deux volumes et expliquer pourquoi le butane est stocké à l'état liquide.",
              hint: "Pour le liquide, utilisez la masse volumique (V = m ÷ ρ) ; pour le gaz, utilisez le volume molaire (V = n × Vm). Exprimez les deux volumes dans la même unité avant de les comparer.",
              solution: [
                "1. M(C₄H₁₀) = 4 × 12,0 + 10 × 1,0 = 58,0 g·mol⁻¹ ; n = m ÷ M = 190 ÷ 58,0 ≈ 3,28 mol.",
                "2. V(liquide) = m ÷ ρ = 190 ÷ 0,58 ≈ 328 mL, soit environ 0,33 L.",
                "3. V(gaz) = n × Vm = 3,276 × 24,0 ≈ 78,6 L.",
                "4. Rapport : 78,6 ÷ 0,328 ≈ 2,4 × 10². À l'état gazeux, le butane occupe environ 240 fois plus de place qu'à l'état liquide : dans un gaz, les molécules sont très éloignées les unes des autres, alors qu'elles sont au contact dans un liquide.",
                "Réponse : 3,28 mol de butane, environ 0,33 L de liquide contre environ 79 L de gaz. Le stockage à l'état liquide, sous pression, permet de transporter une grande quantité de combustible dans un petit volume.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque grandeur à son unité ou à sa valeur.",
            pairs: [
              { left: "Quantité de matière n", right: "mol" },
              { left: "Masse molaire M", right: "g·mol⁻¹" },
              { left: "Volume molaire Vm", right: "L·mol⁻¹" },
              { left: "Constante d'Avogadro NA", right: "6,02 × 10²³ mol⁻¹" },
              { left: "Masse volumique ρ", right: "g·mL⁻¹ ou kg·m⁻³" },
              { left: "Densité d d'un liquide", right: "sans unité" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la masse molaire du dioxyde de carbone CO₂ ? (M(C) = 12,0 g·mol⁻¹ ; M(O) = 16,0 g·mol⁻¹)",
              options: ["28,0 g·mol⁻¹", "40,0 g·mol⁻¹", "44,0 g·mol⁻¹", "56,0 g·mol⁻¹"],
              answer: 2,
              why: "M(CO₂) = 12,0 + 2 × 16,0 = 44,0 g·mol⁻¹ : l'atome d'oxygène compte deux fois.",
            },
            {
              q: "Quelle relation donne la quantité de matière d'un volume V de liquide de masse volumique ρ ?",
              options: ["n = ρ × V ÷ M", "n = V ÷ Vm", "n = M ÷ (ρ × V)", "n = ρ ÷ (V × M)"],
              answer: 0,
              why: "La masse du liquide vaut m = ρ × V, et n = m ÷ M. Le volume molaire ne concerne que les gaz.",
            },
            {
              q: "À 20 °C sous 1,013 bar, 1,0 L de dioxygène et 1,0 L de diazote contiennent :",
              options: ["le même nombre d'atomes mais pas de molécules", "le même nombre de molécules et la même masse", "des nombres de molécules qui dépendent du gaz", "le même nombre de molécules"],
              answer: 3,
              why: "À T et P données, le volume molaire est le même pour tous les gaz : même volume, même quantité de matière. Les masses diffèrent car M(O₂) ≠ M(N₂).",
            },
            {
              q: "Combien de moles contiennent 4,8 L de gaz à 20 °C sous 1,013 bar (Vm = 24,0 L·mol⁻¹) ?",
              options: ["5,0 mol", "0,20 mol", "115,2 mol", "2,0 mol"],
              answer: 1,
              why: "n = V ÷ Vm = 4,8 ÷ 24,0 = 0,20 mol.",
            },
            {
              q: "Le volume molaire d'un gaz, à pression constante :",
              options: ["augmente quand la température augmente", "dépend de la nature du gaz", "vaut toujours 22,4 L·mol⁻¹", "diminue lorsque la température s'élève"],
              answer: 0,
              why: "Un gaz chauffé à pression constante se dilate : le volume molaire passe d'environ 22,4 L·mol⁻¹ à 0 °C à environ 24,0 L·mol⁻¹ à 20 °C.",
            },
          ],
          trap: "Utiliser le volume molaire pour un liquide ou un solide (n = V ÷ Vm ne vaut que pour un gaz), ou mélanger les unités dans m = ρ × V, par exemple ρ en g·mL⁻¹ avec un volume en L.",
          method: "Avant tout calcul, repérez l'état physique de l'espèce : solide (on pèse, n = m ÷ M), liquide (on mesure un volume, m = ρ × V puis n = m ÷ M) ou gaz (n = V ÷ Vm). Écrivez la relation littérale, vérifiez les unités, puis seulement remplacez par les valeurs.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "concentration-absorbance",
          title: "Concentration et absorbance : la loi de Beer-Lambert",
          minutes: 30,
          objectives: [
            "Calculer une concentration en quantité de matière et la relier à la concentration en masse.",
            "Expliquer ou prévoir la couleur d'une espèce en solution à partir de son spectre d'absorption.",
            "Connaître et exploiter la loi de Beer-Lambert pour relier l'absorbance d'une solution à sa concentration.",
          ],
          course: [
            {
              heading: "La concentration en quantité de matière",
              paragraphs: [
                "Une solution est obtenue en dissolvant un soluté dans un solvant ; lorsque le solvant est l'eau, la solution est dite aqueuse. La concentration en quantité de matière d'un soluté (on dit aussi concentration molaire) est le quotient de la quantité de matière de soluté dissous par le volume de la solution : C = n ÷ V. Elle s'exprime en mol·L⁻¹. Attention : V est le volume de la solution, et non celui du solvant ajouté.",
                "En classe de seconde, vous avez utilisé la concentration en masse Cm = m ÷ V, en g·L⁻¹. Les deux grandeurs sont reliées par la masse molaire du soluté : puisque m = n × M, on obtient Cm = C × M. Exemple : le sérum physiologique contient 9,0 g de chlorure de sodium par litre. Sa concentration en quantité de matière vaut C = Cm ÷ M = 9,0 ÷ 58,5 ≈ 0,154 mol·L⁻¹.",
                "Pour une espèce dissoute X, on note souvent sa concentration entre crochets : [X]. Pour préparer une solution de concentration donnée, on calcule n = C × V, puis la masse à peser m = n × M, que l'on dissout dans une fiole jaugée complétée jusqu'au trait de jauge.",
              ],
              box: { label: "Formule", text: "C = n ÷ V, en mol·L⁻¹ (V : volume de la solution, en L). Cm = m ÷ V, en g·L⁻¹. Relation entre les deux : Cm = C × M." },
            },
            {
              heading: "Couleur d'une solution et spectre d'absorption",
              paragraphs: [
                "La lumière blanche contient toutes les radiations visibles, de longueurs d'onde comprises entre 400 nm (violet) et 800 nm environ (rouge). Une solution colorée absorbe une partie de ces radiations et transmet les autres. La couleur perçue est celle de la lumière transmise : c'est, en première approximation, la couleur complémentaire de la couleur absorbée.",
                "Sur le cercle chromatique (ou étoile des couleurs), deux couleurs complémentaires sont diamétralement opposées : rouge et cyan, vert et magenta, bleu et jaune. Une solution de sulfate de cuivre absorbe surtout dans le rouge et l'orange : elle paraît bleue. Une solution de permanganate de potassium absorbe surtout dans le vert, vers 525 nm : elle paraît magenta (violet rosé).",
                "Le spectre d'absorption d'une espèce est la courbe représentant son absorbance A en fonction de la longueur d'onde λ. Il présente un ou plusieurs maximums ; on note λmax la longueur d'onde du maximum d'absorption. Le spectre est caractéristique de l'espèce : il permet de prévoir sa couleur et de choisir la longueur d'onde de travail pour un dosage.",
              ],
              box: { label: "Règle", text: "Une solution qui absorbe dans un seul domaine de longueurs d'onde a la couleur complémentaire de celle qu'elle absorbe. Couples complémentaires : rouge et cyan, vert et magenta, bleu et jaune." },
            },
            {
              heading: "L'absorbance, mesurée au spectrophotomètre",
              paragraphs: [
                "Un spectrophotomètre envoie à travers une cuve contenant la solution une radiation de longueur d'onde λ choisie, d'intensité I₀, et mesure l'intensité I de la lumière transmise. Il affiche l'absorbance A = log(I₀ ÷ I), grandeur sans unité. Si la solution n'absorbe pas, I = I₀ et A = 0 ; plus la solution absorbe, plus A est grand. Pour A = 1, seulement 10 % de la lumière est transmise.",
                "Avant toute mesure, on fait le « blanc » : on place dans l'appareil une cuve remplie de solvant seul et on règle l'absorbance à zéro. Ainsi, l'absorbance mesurée ensuite est due uniquement à l'espèce dissoute, et non au solvant ni aux parois de la cuve. L'absorbance dépend de la nature de l'espèce, de sa concentration, de la longueur d'onde, de l'épaisseur de solution traversée et de la température.",
              ],
            },
            {
              heading: "La loi de Beer-Lambert",
              paragraphs: [
                "Pour une espèce colorée donnée, à une longueur d'onde donnée, l'absorbance d'une solution diluée est proportionnelle à la concentration de l'espèce : A = k × C. Le coefficient k dépend de l'espèce, du solvant, de la longueur d'onde, de la température et de l'épaisseur ℓ de solution traversée. Sous forme développée, A = ε × ℓ × C, où ε est le coefficient d'absorption molaire (en L·mol⁻¹·cm⁻¹) et ℓ la longueur de la cuve (en cm).",
                "Cette loi n'est valable que pour des solutions suffisamment diluées : en pratique, tant que l'absorbance ne dépasse pas 1,5 à 2 environ, selon l'appareil. Au-delà, la courbe A = f(C) s'infléchit et la proportionnalité est perdue. Si une solution absorbe trop, on la dilue d'un facteur connu avant la mesure.",
                "On travaille de préférence à λmax : à cette longueur d'onde, l'absorbance est la plus grande pour une concentration donnée, ce qui rend la mesure plus sensible et moins affectée par une petite erreur de réglage de λ. Exemple : une solution de permanganate de potassium a une absorbance A = 0,46 à 525 nm dans une cuve de 1,0 cm, avec ε = 2,3 × 10³ L·mol⁻¹·cm⁻¹ (données de l'exemple). Sa concentration vaut C = A ÷ (ε × ℓ) = 0,46 ÷ (2,3 × 10³ × 1,0) = 2,0 × 10⁻⁴ mol·L⁻¹.",
              ],
              box: { label: "Formule", text: "Loi de Beer-Lambert, pour une solution diluée, à λ fixée : A = k × C = ε × ℓ × C. A est sans unité, C en mol·L⁻¹, ℓ en cm, ε en L·mol⁻¹·cm⁻¹. L'absorbance est proportionnelle à la concentration." },
            },
          ],
          keyPoints: [
            "Concentration en quantité de matière : C = n ÷ V en mol·L⁻¹ ; concentration en masse : Cm = C × M en g·L⁻¹.",
            "Une solution colorée a la couleur complémentaire de la couleur qu'elle absorbe (rouge et cyan, vert et magenta, bleu et jaune).",
            "Spectre d'absorption : A en fonction de λ ; on repère λmax, longueur d'onde du maximum d'absorption.",
            "L'absorbance est sans unité ; on fait le blanc avec le solvant avant de mesurer.",
            "Loi de Beer-Lambert : A = k × C = ε × ℓ × C, valable pour des solutions diluées, à λ fixée, de préférence à λmax.",
          ],
          example: {
            statement: "On dissout 0,316 g de permanganate de potassium KMnO₄ dans une fiole jaugée de 1,000 L, puis on dilue cette solution 50 fois. Données : M(KMnO₄) = 158,0 g·mol⁻¹ ; à 525 nm, ε = 2,3 × 10³ L·mol⁻¹·cm⁻¹ (données de l'exercice) ; cuve de longueur ℓ = 1,0 cm. 1. Calculer la concentration C₀ de la solution préparée. 2. En déduire la concentration C de la solution diluée. 3. Prévoir l'absorbance de la solution diluée à 525 nm. 4. Pourquoi n'a-t-on pas mesuré directement l'absorbance de la première solution ?",
            solution: [
              "1. n = m ÷ M = 0,316 ÷ 158,0 = 2,00 × 10⁻³ mol ; C₀ = n ÷ V = 2,00 × 10⁻³ ÷ 1,000 = 2,00 × 10⁻³ mol·L⁻¹.",
              "2. Une dilution d'un facteur 50 divise la concentration par 50 : C = 2,00 × 10⁻³ ÷ 50 = 4,00 × 10⁻⁵ mol·L⁻¹.",
              "3. Loi de Beer-Lambert : A = ε × ℓ × C = 2,3 × 10³ × 1,0 × 4,00 × 10⁻⁵ ≈ 0,092.",
              "4. Pour la solution initiale, on prévoirait A = 2,3 × 10³ × 1,0 × 2,00 × 10⁻³ = 4,6 : cette valeur dépasse largement le domaine de validité de la loi (A inférieure à 1,5 ou 2 environ). La mesure ne serait pas exploitable, d'où la dilution.",
              "Réponse : C₀ = 2,00 × 10⁻³ mol·L⁻¹ ; C = 4,00 × 10⁻⁵ mol·L⁻¹ ; A ≈ 0,092 ; la solution mère est trop concentrée pour appliquer la loi de Beer-Lambert.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On dissout 2,50 g de sulfate de cuivre pentahydraté CuSO₄,5H₂O dans de l'eau et on complète à 100,0 mL dans une fiole jaugée. Donnée : M(CuSO₄,5H₂O) = 249,6 g·mol⁻¹. 1. Calculer la concentration en masse Cm puis la concentration en quantité de matière C de la solution. 2. La solution obtenue est bleue. Dans quel domaine de couleurs absorbe-t-elle principalement ?",
              hint: "Convertissez le volume en litres. Pour la couleur, cherchez la couleur complémentaire du bleu (cyan) sur le cercle chromatique.",
              solution: [
                "1. Cm = m ÷ V = 2,50 ÷ 0,1000 = 25,0 g·L⁻¹.",
                "C = Cm ÷ M = 25,0 ÷ 249,6 ≈ 0,100 mol·L⁻¹ (ou n = 2,50 ÷ 249,6 ≈ 1,00 × 10⁻² mol, puis C = n ÷ V = 1,00 × 10⁻² ÷ 0,1000 = 0,100 mol·L⁻¹).",
                "2. La solution paraît bleue (cyan) : elle absorbe la couleur complémentaire, c'est-à-dire principalement le rouge et l'orange.",
                "Réponse : Cm = 25,0 g·L⁻¹ ; C ≈ 0,100 mol·L⁻¹ ; la solution absorbe surtout dans le rouge et l'orange.",
              ],
            },
            {
              level: 2,
              statement: "Une solution S₁ d'un colorant, de concentration C₁ = 4,0 × 10⁻⁴ mol·L⁻¹, a une absorbance A₁ = 0,52 à λmax, dans une cuve de 1,0 cm. Une solution S₂ du même colorant a, dans les mêmes conditions, une absorbance A₂ = 0,39. 1. Calculer la concentration C₂ de S₂. 2. Calculer le coefficient d'absorption molaire ε du colorant à cette longueur d'onde. 3. Quelle serait l'absorbance de S₁ mesurée dans une cuve de 2,0 cm ?",
              hint: "À longueur d'onde et cuve fixées, A est proportionnelle à C : le rapport A ÷ C est le même pour les deux solutions. Dans A = ε × ℓ × C, l'absorbance est aussi proportionnelle à ℓ.",
              solution: [
                "1. A₁ ÷ C₁ = A₂ ÷ C₂, donc C₂ = C₁ × A₂ ÷ A₁ = 4,0 × 10⁻⁴ × 0,39 ÷ 0,52 = 3,0 × 10⁻⁴ mol·L⁻¹.",
                "2. ε = A₁ ÷ (ℓ × C₁) = 0,52 ÷ (1,0 × 4,0 × 10⁻⁴) = 1,3 × 10³ L·mol⁻¹·cm⁻¹.",
                "3. L'absorbance est proportionnelle à ℓ : A = 1,3 × 10³ × 2,0 × 4,0 × 10⁻⁴ = 1,04, soit le double de A₁.",
                "Réponse : C₂ = 3,0 × 10⁻⁴ mol·L⁻¹ ; ε = 1,3 × 10³ L·mol⁻¹·cm⁻¹ ; A ≈ 1,04 dans une cuve de 2,0 cm.",
              ],
            },
            {
              level: 3,
              statement: "Une boisson est colorée par un colorant bleu dont le spectre d'absorption présente un seul maximum, à λmax = 630 nm. Données (fictives) : coefficient d'absorption molaire à 630 nm, ε = 1,3 × 10⁵ L·mol⁻¹·cm⁻¹ ; masse molaire du colorant, M = 793 g·mol⁻¹ ; longueur de la cuve, ℓ = 1,0 cm ; domaine de validité de la loi de Beer-Lambert pour l'appareil utilisé : A ≤ 1,5. 1. À quelle couleur correspond la radiation de 630 nm ? La couleur bleue de la boisson est-elle cohérente avec ce spectre ? 2. Justifier le choix de la longueur d'onde de 630 nm pour les mesures. 3. La boisson, diluée 10 fois, a une absorbance A = 0,65 à 630 nm. Calculer la concentration en quantité de matière du colorant dans la solution diluée, puis dans la boisson. 4. En déduire la concentration en masse du colorant dans la boisson, en mg·L⁻¹. 5. Justifier la dilution préalable de la boisson.",
              hint: "630 nm se situe dans l'orange et le rouge. Utilisez A = ε × ℓ × C pour la solution diluée, puis multipliez par le facteur de dilution. Pour la question 5, calculez l'absorbance qu'aurait la boisson non diluée.",
              solution: [
                "1. Une radiation de 630 nm est orangée à rouge. Le colorant absorbe donc l'orange et le rouge ; la couleur perçue est la couleur complémentaire, le bleu (cyan) : c'est cohérent.",
                "2. À λmax, l'absorbance est maximale pour une concentration donnée : la mesure est plus sensible et moins sensible à une petite erreur sur le réglage de la longueur d'onde.",
                "3. Solution diluée : C(dil) = A ÷ (ε × ℓ) = 0,65 ÷ (1,3 × 10⁵ × 1,0) = 5,0 × 10⁻⁶ mol·L⁻¹. Boisson : C = 10 × C(dil) = 5,0 × 10⁻⁵ mol·L⁻¹.",
                "4. Cm = C × M = 5,0 × 10⁻⁵ × 793 ≈ 4,0 × 10⁻² g·L⁻¹, soit environ 40 mg·L⁻¹.",
                "5. Sans dilution, l'absorbance serait A = 10 × 0,65 = 6,5, très supérieure à 1,5 : la loi de Beer-Lambert ne s'appliquerait plus et l'appareil ne mesurerait pas correctement une lumière transmise aussi faible.",
                "Réponse : le spectre est cohérent avec la couleur bleue ; C ≈ 5,0 × 10⁻⁵ mol·L⁻¹ et Cm ≈ 40 mg·L⁻¹ dans la boisson ; la dilution ramène l'absorbance dans le domaine de validité de la loi.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation sur la couleur et l'absorbance.",
            statements: [
              { text: "Une solution qui paraît bleue absorbe surtout la lumière bleue.", true: false, why: "Elle transmet le bleu et absorbe la couleur complémentaire, surtout le rouge et l'orange." },
              { text: "L'absorbance s'exprime sans unité.", true: true, why: "A = log(I₀ ÷ I) est le logarithme d'un rapport de deux intensités : elle n'a pas d'unité." },
              { text: "La loi de Beer-Lambert s'applique quelle que soit la concentration.", true: false, why: "Elle n'est valable que pour des solutions diluées ; au-delà, A n'est plus proportionnelle à C." },
              { text: "Si l'on double la concentration d'une solution diluée, son absorbance double.", true: true, why: "Dans le domaine de validité, A = k × C : A est proportionnelle à C." },
              { text: "Le blanc se fait avec une cuve remplie de solvant seul.", true: true, why: "On règle ainsi A = 0 pour que l'absorbance mesurée ne soit due qu'à l'espèce dissoute." },
              { text: "Le coefficient k de la loi A = k × C est le même à toutes les longueurs d'onde.", true: false, why: "k dépend de la longueur d'onde : il est maximal à λmax, là où l'espèce absorbe le plus." },
              { text: "Cm = C × M relie la concentration en masse à la concentration en quantité de matière.", true: true, why: "Puisque m = n × M, en divisant par V on obtient Cm = C × M." },
            ],
          },
          quiz: [
            {
              q: "On dissout 0,050 mol de soluté pour obtenir 250 mL de solution. La concentration vaut :",
              options: ["12,5 mol·L⁻¹", "0,20 mol·L⁻¹", "0,0125 mol·L⁻¹", "5,0 mol·L⁻¹"],
              answer: 1,
              why: "C = n ÷ V = 0,050 ÷ 0,250 = 0,20 mol·L⁻¹ : le volume doit être converti en litres.",
            },
            {
              q: "Une solution absorbe principalement dans le vert. Elle paraît :",
              options: ["verte", "jaune orangé", "bleu foncé", "magenta"],
              answer: 3,
              why: "Le magenta est la couleur complémentaire du vert : c'est la couleur de la lumière transmise.",
            },
            {
              q: "Dans la loi A = ε × ℓ × C, la grandeur ℓ représente :",
              options: ["la longueur d'onde de la radiation", "la concentration en masse du soluté", "l'épaisseur de solution traversée", "l'intensité de la lumière transmise"],
              answer: 2,
              why: "ℓ est la longueur de la cuve, c'est-à-dire l'épaisseur de solution traversée par la lumière, en cm.",
            },
            {
              q: "Pour quelle raison principale travaille-t-on à λmax ?",
              options: ["La mesure y est la plus sensible", "La loi de Beer-Lambert n'est valable qu'à λmax", "Le solvant n'absorbe qu'à cette longueur d'onde", "L'absorbance y vaut toujours 1"],
              answer: 0,
              why: "À λmax, l'absorbance est la plus grande pour une concentration donnée : la mesure est plus précise. La loi reste valable à d'autres longueurs d'onde.",
            },
            {
              q: "Une solution a une absorbance de 0,30. Diluée deux fois, dans les mêmes conditions, son absorbance vaut :",
              options: ["0,60", "0,30", "0,09", "0,15"],
              answer: 3,
              why: "La concentration est divisée par 2, donc l'absorbance aussi : 0,30 ÷ 2 = 0,15.",
            },
          ],
          trap: "Croire qu'une solution a la couleur qu'elle absorbe : une solution bleue absorbe le rouge et l'orange. Autre erreur fréquente : appliquer A = k × C à une solution trop concentrée, en dehors du domaine de validité de la loi.",
          method: "Pour exploiter la loi de Beer-Lambert, écrivez d'abord la relation littérale (A = k × C ou A = ε × ℓ × C), isolez la grandeur cherchée, vérifiez que l'absorbance est dans le domaine de validité, puis calculez. Pour une couleur, raisonnez toujours avec le cercle chromatique : couleur perçue et couleur absorbée sont opposées.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "spectrophotometrie",
          title: "Doser par étalonnage avec un spectrophotomètre",
          minutes: 30,
          objectives: [
            "Proposer et mettre en œuvre un protocole pour réaliser une gamme de solutions étalons par dilution.",
            "Déterminer la concentration d'une espèce colorée en solution à partir de mesures d'absorbance de solutions de concentrations connues.",
            "Tester les limites d'utilisation d'un protocole de dosage par étalonnage.",
          ],
          course: [
            {
              heading: "Le principe du dosage par étalonnage",
              paragraphs: [
                "Doser une espèce chimique dans une solution, c'est déterminer sa concentration (ou sa quantité de matière). Dans un dosage par étalonnage, on compare une grandeur physique mesurée pour la solution inconnue à celle de solutions étalons, de concentrations connues, contenant la même espèce. Aucune réaction chimique n'est nécessaire : la solution dosée n'est pas consommée, le dosage est non destructif.",
                "La grandeur mesurée doit dépendre de la concentration de façon simple. Pour une espèce colorée, on utilise l'absorbance, proportionnelle à la concentration d'après la loi de Beer-Lambert. On peut aussi doser par étalonnage avec d'autres grandeurs, comme la conductivité d'une solution ionique ou la masse volumique d'une boisson sucrée. L'idée est toujours la même : construire une courbe d'étalonnage, puis y placer la solution inconnue.",
              ],
              box: { label: "Définition", text: "Un dosage par étalonnage détermine la concentration d'une espèce en comparant une grandeur physique mesurée pour la solution inconnue (ici l'absorbance) à celles de solutions étalons de concentrations connues." },
            },
            {
              heading: "Préparer une gamme de solutions étalons",
              paragraphs: [
                "On prépare les solutions étalons par dilution d'une solution mère de concentration C₀ connue. Lors d'une dilution, la quantité de matière de soluté prélevée se retrouve entièrement dans la solution fille : C₀ × V₀ = C₁ × V₁, où V₀ est le volume de solution mère prélevé et V₁ le volume de solution fille préparée. Le facteur de dilution vaut F = C₀ ÷ C₁ = V₁ ÷ V₀.",
                "Exemple : à partir d'une solution mère à C₀ = 1,0 × 10⁻³ mol·L⁻¹, on veut préparer V₁ = 50,0 mL de solution à C₁ = 2,0 × 10⁻⁴ mol·L⁻¹. F = 1,0 × 10⁻³ ÷ 2,0 × 10⁻⁴ = 5, donc V₀ = V₁ ÷ F = 50,0 ÷ 5 = 10,0 mL.",
                "Protocole : on prélève V₀ avec une pipette jaugée (après l'avoir rincée avec la solution mère), on l'introduit dans une fiole jaugée de volume V₁, on complète avec de l'eau distillée jusqu'aux deux tiers, on agite, on complète jusqu'au trait de jauge (bas du ménisque), puis on bouche et on homogénéise. La verrerie jaugée est indispensable : les concentrations des étalons doivent être connues avec précision.",
              ],
              box: { label: "Formule", text: "Dilution : la quantité de soluté se conserve, C₀ × V₀ = C₁ × V₁. Facteur de dilution : F = C₀ ÷ C₁ = V₁ ÷ V₀. Matériel : pipette jaugée et fiole jaugée." },
            },
            {
              heading: "Mesurer les absorbances",
              paragraphs: [
                "On trace d'abord le spectre d'absorption d'une des solutions pour repérer λmax, puis on règle le spectrophotomètre à cette longueur d'onde. On fait le blanc avec le solvant. On mesure ensuite l'absorbance de chaque solution étalon, puis celle de la solution inconnue, avec la même cuve (ou des cuves identiques), à la même longueur d'onde et à la même température.",
                "Il est commode de mesurer les étalons du moins concentré au plus concentré et de rincer la cuve avec la solution suivante avant de la remplir. Les cuves se manipulent par leurs faces dépolies, et on essuie les faces transparentes traversées par le faisceau. Une trace de doigt ou une bulle d'air fausse la mesure.",
              ],
            },
            {
              heading: "Exploiter la courbe d'étalonnage",
              paragraphs: [
                "On trace la courbe A = f(C) à partir des étalons. Si les points sont alignés sur une droite passant par l'origine, la loi de Beer-Lambert est vérifiée dans ce domaine de concentrations, et l'on modélise la courbe par A = k × C (le coefficient directeur k s'obtient avec un tableur ou une calculatrice). On mesure l'absorbance Aₓ de la solution inconnue, puis on lit graphiquement sa concentration, ou on la calcule : Cₓ = Aₓ ÷ k.",
                "Limites du protocole : la lecture n'est fiable que si Aₓ est comprise dans le domaine des étalons (on interpole, on n'extrapole pas). Si Aₓ dépasse l'absorbance de l'étalon le plus concentré, on dilue la solution inconnue d'un facteur F connu, on mesure, puis on multiplie la concentration trouvée par F. Il faut aussi que l'espèce dosée soit la seule à absorber à la longueur d'onde choisie.",
                "Exemple : pour des étalons de concentrations 0,50 ; 1,0 ; 1,5 ; 2,0 et 2,5 mmol·L⁻¹, on mesure A = 0,12 ; 0,24 ; 0,36 ; 0,48 et 0,60 (données fictives). Les points sont alignés avec l'origine et k = 0,24 L·mmol⁻¹. Une solution inconnue d'absorbance 0,42 a pour concentration Cₓ = 0,42 ÷ 0,24 = 1,75 mmol·L⁻¹, valeur bien comprise dans la gamme.",
              ],
              box: { label: "À retenir", text: "Courbe d'étalonnage A = f(C) : droite passant par l'origine si la loi de Beer-Lambert est vérifiée. Cₓ = Aₓ ÷ k, à condition que Aₓ soit dans la gamme des étalons ; sinon, on dilue la solution inconnue." },
            },
          ],
          keyPoints: [
            "Dosage par étalonnage : on compare l'absorbance de la solution inconnue à celle d'étalons ; il est non destructif.",
            "Dilution : C₀ × V₀ = C₁ × V₁ ; F = C₀ ÷ C₁ = V₁ ÷ V₀ ; pipette jaugée et fiole jaugée.",
            "Mesures à λmax, après le blanc, dans les mêmes conditions pour tous les échantillons.",
            "Courbe A = f(C) : droite passant par l'origine, A = k × C, puis Cₓ = Aₓ ÷ k.",
            "On interpole, on n'extrapole pas : une solution trop absorbante est diluée d'un facteur connu.",
          ],
          example: {
            statement: "On dose le colorant bleu d'un sirop de menthe. Ce sirop contient aussi un colorant jaune, qui n'absorbe pas au-delà de 500 nm ; le colorant bleu absorbe au maximum vers 640 nm. Gamme étalon du colorant bleu (données fictives), concentrations en masse en mg·L⁻¹ : 1,0 ; 2,0 ; 3,0 ; 4,0 ; 5,0 ; absorbances à 640 nm : 0,20 ; 0,40 ; 0,61 ; 0,80 ; 1,01. Le sirop, dilué 20 fois, a une absorbance de 0,66 à 640 nm. Déterminer la concentration en masse du colorant bleu dans le sirop.",
            solution: [
              "Choix de la longueur d'onde : à 640 nm, seul le colorant bleu absorbe (le jaune n'absorbe pas au-delà de 500 nm), et l'on est au maximum d'absorption du bleu.",
              "Courbe d'étalonnage : les points (Cm ; A) sont alignés sur une droite passant par l'origine ; la modélisation donne A = 0,20 × Cm, avec Cm en mg·L⁻¹. La loi de Beer-Lambert est vérifiée.",
              "Solution diluée : Cm(dil) = A ÷ 0,20 = 0,66 ÷ 0,20 = 3,3 mg·L⁻¹, valeur comprise entre 1,0 et 5,0 mg·L⁻¹ : la lecture est fiable.",
              "Sirop : on multiplie par le facteur de dilution, Cm = 20 × 3,3 = 66 mg·L⁻¹.",
              "Réponse : le sirop contient environ 66 mg de colorant bleu par litre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On dispose d'une solution mère de sulfate de cuivre de concentration C₀ = 0,100 mol·L⁻¹ et de fioles jaugées de 50,0 mL. On veut préparer quatre solutions étalons de concentrations 0,020 ; 0,040 ; 0,060 et 0,080 mol·L⁻¹. 1. Calculer, pour chacune, le volume V₀ de solution mère à prélever. 2. Quelle verrerie utiliser pour le prélèvement ?",
              hint: "Utilisez la conservation de la quantité de soluté : C₀ × V₀ = C₁ × V₁, donc V₀ = C₁ × V₁ ÷ C₀.",
              solution: [
                "1. V₀ = C₁ × V₁ ÷ C₀ avec V₁ = 50,0 mL et C₀ = 0,100 mol·L⁻¹.",
                "Pour C₁ = 0,020 mol·L⁻¹ : V₀ = 0,020 × 50,0 ÷ 0,100 = 10,0 mL. Pour 0,040 mol·L⁻¹ : V₀ = 20,0 mL.",
                "Pour 0,060 mol·L⁻¹ : V₀ = 30,0 mL. Pour 0,080 mol·L⁻¹ : V₀ = 40,0 mL.",
                "2. On prélève avec des pipettes jaugées (10,0 mL, 20,0 mL...) ou une burette graduée pour les volumes sans pipette adaptée, puis on complète dans la fiole jaugée de 50,0 mL.",
                "Réponse : 10,0 ; 20,0 ; 30,0 et 40,0 mL de solution mère, prélevés avec une verrerie précise.",
              ],
            },
            {
              level: 2,
              statement: "Pour doser une solution S de diiode, on mesure à 450 nm l'absorbance de solutions étalons (données fictives). C (en mmol·L⁻¹) : 0,20 ; 0,40 ; 0,60 ; 0,80 ; 1,00. A : 0,15 ; 0,30 ; 0,45 ; 0,60 ; 0,75. 1. Montrer que ces mesures vérifient la loi de Beer-Lambert et déterminer le coefficient k. 2. La solution S a une absorbance de 0,54. Déterminer sa concentration. 3. Une solution S' a une absorbance de 1,9. Peut-on déterminer sa concentration de la même façon ? Proposer une démarche.",
              hint: "Calculez le rapport A ÷ C pour chaque étalon : s'il est constant, A est proportionnelle à C. Pour S', comparez son absorbance à celle de l'étalon le plus concentré.",
              solution: [
                "1. A ÷ C = 0,15 ÷ 0,20 = 0,75 ; 0,30 ÷ 0,40 = 0,75 ; et de même pour les autres étalons : le rapport est constant, A est proportionnelle à C. La loi de Beer-Lambert est vérifiée avec k = 0,75 L·mmol⁻¹.",
                "2. C(S) = A ÷ k = 0,54 ÷ 0,75 = 0,72 mmol·L⁻¹, valeur comprise dans la gamme (0,20 à 1,00 mmol·L⁻¹).",
                "3. Non : 1,9 dépasse l'absorbance de l'étalon le plus concentré (0,75), et l'on sortirait probablement du domaine de validité de la loi. Il faut extrapoler, ce qui n'est pas fiable.",
                "Démarche : diluer S' d'un facteur connu, par exemple 4 (10,0 mL complétés à 40,0 mL, ou 25,0 mL complétés à 100,0 mL), mesurer l'absorbance de la solution diluée, calculer sa concentration avec k, puis multiplier par 4.",
                "Réponse : k = 0,75 L·mmol⁻¹ ; C(S) = 0,72 mmol·L⁻¹ ; S' doit être diluée avant d'être dosée.",
              ],
            },
            {
              level: 3,
              statement: "Un engrais liquide contient des ions fer(III) Fe³⁺, peu colorés. Pour les doser, on les fait réagir avec un excès d'ions thiocyanate SCN⁻ : chaque ion Fe³⁺ donne un ion FeSCN²⁺, rouge sang, qui absorbe au maximum à 470 nm. Les étalons sont traités de la même façon. Données (fictives) : concentrations en Fe³⁺ des étalons, en mmol·L⁻¹ : 0,050 ; 0,10 ; 0,15 ; 0,20 ; 0,25 ; absorbances à 470 nm : 0,14 ; 0,28 ; 0,43 ; 0,56 ; 0,70. On dilue l'engrais 100 fois, puis on traite la solution diluée : son absorbance vaut 0,49. Donnée : M(Fe) = 55,8 g·mol⁻¹. 1. Pourquoi faut-il transformer les ions Fe³⁺ en ions FeSCN²⁺ avant la mesure, et pourquoi utilise-t-on un excès d'ions SCN⁻ ? 2. Déterminer le coefficient k de la droite d'étalonnage (on prendra la valeur moyenne des rapports A ÷ C). 3. Déterminer la concentration en ions Fe³⁺ de l'engrais. 4. L'étiquette annonce 1,0 g de fer par litre. Calculer l'écart relatif entre la valeur mesurée et la valeur annoncée, et conclure.",
              hint: "Le dosage par spectrophotométrie exige une espèce qui absorbe nettement. Avec un excès de SCN⁻, tous les ions Fe³⁺ sont transformés, donc [FeSCN²⁺] = [Fe³⁺]. N'oubliez pas le facteur de dilution, puis convertissez en masse avec M(Fe).",
              solution: [
                "1. Les ions Fe³⁺ absorbent trop peu pour une mesure précise ; les ions FeSCN²⁺, intensément colorés, permettent des mesures sensibles. L'excès de SCN⁻ garantit que chaque ion Fe³⁺ est transformé : la concentration en FeSCN²⁺ est alors égale à la concentration initiale en Fe³⁺.",
                "2. Rapports A ÷ C : 0,14 ÷ 0,050 = 2,8 ; 0,28 ÷ 0,10 = 2,8 ; 0,43 ÷ 0,15 ≈ 2,87 ; 0,56 ÷ 0,20 = 2,8 ; 0,70 ÷ 0,25 = 2,8. Moyenne : k ≈ 2,8 L·mmol⁻¹ ; la loi de Beer-Lambert est vérifiée.",
                "3. Solution diluée : C(dil) = 0,49 ÷ 2,8 = 0,175 mmol·L⁻¹, valeur comprise dans la gamme. Engrais : C = 100 × 0,175 = 17,5 mmol·L⁻¹ = 1,75 × 10⁻² mol·L⁻¹.",
                "4. Concentration en masse de fer : Cm = C × M = 1,75 × 10⁻² × 55,8 ≈ 0,98 g·L⁻¹. Écart relatif : |0,98 - 1,0| ÷ 1,0 = 0,02, soit environ 2 %.",
                "Réponse : l'engrais contient environ 0,98 g de fer par litre ; l'écart de 2 % avec l'étiquette est faible, compatible avec les incertitudes de mesure : l'indication de l'étiquette est vérifiée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un dosage par étalonnage au spectrophotomètre.",
            items: [
              "Préparer une gamme de solutions étalons par dilution d'une solution mère",
              "Tracer le spectre d'absorption d'une solution étalon et relever λmax",
              "Régler le spectrophotomètre à λmax et faire le blanc avec le solvant",
              "Mesurer l'absorbance de chaque étalon, puis celle de la solution inconnue",
              "Tracer la courbe A = f(C) et la modéliser par une droite passant par l'origine",
              "En déduire la concentration de la solution inconnue avec Cₓ = Aₓ ÷ k",
            ],
          },
          quiz: [
            {
              q: "On veut préparer 100,0 mL d'une solution dix fois moins concentrée que la solution mère. Quel volume de solution mère prélève-t-on ?",
              options: ["1,0 mL", "90,0 mL", "10,0 mL", "100,0 mL"],
              answer: 2,
              why: "F = V₁ ÷ V₀ = 10, donc V₀ = 100,0 ÷ 10 = 10,0 mL, prélevés à la pipette jaugée.",
            },
            {
              q: "Un dosage par étalonnage est dit non destructif car :",
              options: ["la solution dosée n'est pas consommée", "il ne nécessite aucune verrerie jaugée", "il s'applique à toutes les espèces", "les étalons sont réutilisables"],
              answer: 0,
              why: "Aucune réaction chimique ne consomme l'espèce dosée : on mesure seulement une grandeur physique.",
            },
            {
              q: "La courbe d'étalonnage A = f(C) est une droite passant par l'origine. Cela montre que :",
              options: ["la solution inconnue est diluée", "la loi de Beer-Lambert est vérifiée", "l'espèce absorbe à toutes les longueurs d'onde", "le blanc a été mal fait"],
              answer: 1,
              why: "Une droite passant par l'origine traduit la proportionnalité A = k × C, c'est-à-dire la loi de Beer-Lambert.",
            },
            {
              q: "L'absorbance de la solution inconnue dépasse celle de l'étalon le plus concentré. Que faire ?",
              options: ["Prolonger la droite et lire la valeur", "Changer de longueur d'onde au hasard", "Recommencer le blanc avec la solution inconnue", "Diluer la solution inconnue d'un facteur connu"],
              answer: 3,
              why: "On n'extrapole pas : on dilue la solution inconnue pour ramener son absorbance dans la gamme, puis on multiplie le résultat par le facteur de dilution.",
            },
            {
              q: "Avec k = 0,50 L·mmol⁻¹, une solution d'absorbance 0,35 a pour concentration :",
              options: ["0,175 mmol·L⁻¹", "0,70 mmol·L⁻¹", "1,43 mmol·L⁻¹", "0,85 mmol·L⁻¹"],
              answer: 1,
              why: "Cₓ = Aₓ ÷ k = 0,35 ÷ 0,50 = 0,70 mmol·L⁻¹.",
            },
          ],
          trap: "Oublier de multiplier par le facteur de dilution lorsque la solution inconnue a été diluée avant la mesure, ou lire une concentration en prolongeant la droite au-delà de la gamme des étalons.",
          method: "Rédigez un dosage par étalonnage en quatre temps : choix de λ (λmax, une seule espèce absorbante), vérification de la loi de Beer-Lambert (droite par l'origine), calcul de Cₓ = Aₓ ÷ k avec contrôle que Aₓ est dans la gamme, puis retour à la solution initiale en multipliant par le facteur de dilution.",
        },
      ],
    },
    /* ================================================================== */
    /* SUIVRE ET DOSER UNE TRANSFORMATION CHIMIQUE                          */
    /* ================================================================== */
    {
      id: 'evolution-systeme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "oxydoreduction",
          title: "Oxydants, réducteurs et demi-équations électroniques",
          minutes: 35,
          objectives: [
            "Identifier, à partir de données expérimentales, des espèces chimiques oxydantes et réductrices, une oxydation et une réduction.",
            "Établir une demi-équation électronique, en milieu acide si nécessaire.",
            "Écrire l'équation d'une réaction d'oxydoréduction à partir des demi-équations électroniques des deux couples mis en jeu.",
            "Citer des oxydants et des réducteurs usuels.",
          ],
          course: [
            {
              heading: "Oxydant, réducteur et couple oxydant/réducteur",
              paragraphs: [
                "Un oxydant est une espèce chimique capable de capter un ou plusieurs électrons. Un réducteur est une espèce chimique capable de céder un ou plusieurs électrons. Lorsqu'un oxydant capte des électrons, il se transforme en un réducteur, appelé réducteur conjugué : les deux espèces forment un couple oxydant/réducteur, noté Ox/Red (l'oxydant est toujours écrit en premier).",
                "Le passage d'une espèce à l'autre est modélisé par une demi-équation électronique : Ox + n e⁻ = Red. Le signe = indique que l'échange peut se faire dans un sens ou dans l'autre, selon le partenaire de réaction. Exemples : Cu²⁺ + 2 e⁻ = Cu pour le couple Cu²⁺/Cu ; Fe³⁺ + e⁻ = Fe²⁺ pour le couple Fe³⁺/Fe²⁺ ; I₂ + 2 e⁻ = 2 I⁻ pour le couple I₂/I⁻ ; 2 H⁺ + 2 e⁻ = H₂ pour le couple H⁺/H₂.",
                "Une demi-équation n'est pas une réaction : des électrons libres n'existent pas en solution. Elle décrit seulement ce qu'une espèce peut gagner ou perdre lorsqu'elle rencontre un partenaire adapté. Une même espèce peut appartenir à deux couples : le peroxyde d'hydrogène H₂O₂ (eau oxygénée) est l'oxydant du couple H₂O₂/H₂O et le réducteur du couple O₂/H₂O₂.",
              ],
              box: { label: "Définition", text: "Oxydant : espèce capable de capter des électrons. Réducteur : espèce capable de céder des électrons. Un couple Ox/Red est décrit par la demi-équation électronique Ox + n e⁻ = Red." },
            },
            {
              heading: "Oxydation et réduction",
              paragraphs: [
                "Une oxydation est une perte d'électrons ; elle est subie par un réducteur, qui se transforme en son oxydant conjugué. Une réduction est un gain d'électrons ; elle est subie par un oxydant, qui se transforme en son réducteur conjugué. Retenez la formule : l'oxydant est réduit, le réducteur est oxydé.",
                "Exemple : une lame de zinc plongée dans une solution bleue de sulfate de cuivre se couvre d'un dépôt rouge de cuivre, et la solution se décolore. Le zinc a cédé des électrons (oxydation : Zn = Zn²⁺ + 2 e⁻) aux ions cuivre(II), qui les ont captés (réduction : Cu²⁺ + 2 e⁻ = Cu). L'observation (disparition de la couleur bleue des ions Cu²⁺, apparition du métal cuivre) permet d'identifier les espèces formées et consommées.",
              ],
              box: { label: "À retenir", text: "Oxydation : perte d'électrons par un réducteur. Réduction : gain d'électrons par un oxydant. L'oxydant est réduit, le réducteur est oxydé." },
            },
            {
              heading: "Ajuster une demi-équation en milieu acide",
              paragraphs: [
                "Pour les couples dont les espèces contiennent de l'oxygène, l'ajustement fait intervenir l'eau et les ions hydrogène H⁺ du milieu acide. Méthode : 1) écrire l'oxydant et le réducteur de part et d'autre du signe = ; 2) ajuster les éléments autres que O et H ; 3) ajuster l'oxygène avec des molécules H₂O ; 4) ajuster l'hydrogène avec des ions H⁺ ; 5) ajuster les charges avec des électrons e⁻, du côté de l'oxydant.",
                "Exemple du couple MnO₄⁻/Mn²⁺ : on écrit MnO₄⁻ = Mn²⁺ ; le manganèse est ajusté ; quatre atomes O à gauche, donc on ajoute 4 H₂O à droite : MnO₄⁻ = Mn²⁺ + 4 H₂O ; huit atomes H à droite, donc 8 H⁺ à gauche : MnO₄⁻ + 8 H⁺ = Mn²⁺ + 4 H₂O ; charges : +7 à gauche, +2 à droite, on ajoute 5 e⁻ à gauche. Résultat : MnO₄⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H₂O. Vérification : charge totale +2 de chaque côté.",
                "De la même façon, pour le couple Cr₂O₇²⁻/Cr³⁺ : Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ = 2 Cr³⁺ + 7 H₂O (charge +6 de chaque côté). Pour le couple H₂O₂/H₂O : H₂O₂ + 2 H⁺ + 2 e⁻ = 2 H₂O. Pour le couple ion hypochlorite/ion chlorure, présent dans l'eau de Javel : ClO⁻ + 2 H⁺ + 2 e⁻ = Cl⁻ + H₂O.",
              ],
              box: { label: "Règle", text: "Ordre d'ajustement en milieu acide : éléments autres que O et H, puis O avec H₂O, puis H avec H⁺, puis charges avec e⁻. Les électrons sont toujours du côté de l'oxydant. Vérifiez à la fin éléments et charges." },
            },
            {
              heading: "L'équation d'une réaction d'oxydoréduction",
              paragraphs: [
                "Une réaction d'oxydoréduction est un transfert d'électrons du réducteur d'un couple vers l'oxydant d'un autre couple. Les électrons cédés par l'un sont tous captés par l'autre : ils n'apparaissent donc jamais dans l'équation de la réaction. Méthode : écrire les deux demi-équations dans le sens où elles se produisent (oxydant 1 qui capte, réducteur 2 qui cède), les multiplier pour que le nombre d'électrons échangés soit le même, puis les additionner et simplifier.",
                "Exemple : les ions permanganate oxydent les ions fer(II) en milieu acide. Réduction : MnO₄⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H₂O. Oxydation, multipliée par 5 : 5 Fe²⁺ = 5 Fe³⁺ + 5 e⁻. Somme : MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O. Vérification : charge +17 de chaque côté, éléments conservés.",
              ],
              box: { label: "Méthode", text: "Écrire les deux demi-équations dans le sens de la réaction, multiplier pour égaliser les électrons, additionner, simplifier (H⁺, H₂O), vérifier éléments et charges. Aucun électron dans l'équation finale." },
            },
            {
              heading: "Oxydants et réducteurs usuels",
              paragraphs: [
                "Oxydants usuels : le dioxygène O₂ de l'air (couple O₂/H₂O), responsable de la rouille du fer ; le dichlore Cl₂ (couple Cl₂/Cl⁻) et l'eau de Javel, qui contient des ions hypochlorite ClO⁻ (couple ClO⁻/Cl⁻), utilisés pour désinfecter ; l'ion permanganate MnO₄⁻, violet, très utilisé au laboratoire ; le peroxyde d'hydrogène H₂O₂, antiseptique.",
                "Réducteurs usuels : les métaux (fer, zinc, aluminium...), qui s'oxydent en cations métalliques ; le dihydrogène H₂ (couple H⁺/H₂), utilisé dans les piles à combustible ; l'acide ascorbique C₆H₈O₆ ou vitamine C (couple C₆H₆O₆/C₆H₈O₆), ajouté aux aliments comme antioxydant : il réagit avec le dioxygène à la place des espèces que l'on veut protéger.",
              ],
            },
          ],
          keyPoints: [
            "Oxydant : capte des électrons ; réducteur : cède des électrons ; couple Ox/Red : Ox + n e⁻ = Red.",
            "Oxydation : perte d'électrons par le réducteur ; réduction : gain d'électrons par l'oxydant.",
            "Milieu acide : ajuster les éléments, puis O avec H₂O, H avec H⁺, charges avec e⁻.",
            "Équation de réaction : égaliser les électrons des deux demi-équations, additionner ; aucun électron dans le bilan.",
            "Oxydants usuels : O₂, Cl₂, eau de Javel (ClO⁻), MnO₄⁻. Réducteurs usuels : métaux, H₂, acide ascorbique.",
          ],
          example: {
            statement: "En milieu acide, le peroxyde d'hydrogène H₂O₂ oxyde les ions iodure I⁻ en diiode I₂, ce qui colore la solution en jaune-brun. Couples : H₂O₂/H₂O et I₂/I⁻. 1. Écrire les deux demi-équations électroniques. 2. Identifier l'oxydant et le réducteur qui réagissent. 3. Écrire l'équation de la réaction.",
            solution: [
              "1. Couple H₂O₂/H₂O : H₂O₂ = 2 H₂O (oxygène ajusté) ; on ajoute 2 H⁺ à gauche pour ajuster l'hydrogène, puis 2 e⁻ pour les charges : H₂O₂ + 2 H⁺ + 2 e⁻ = 2 H₂O.",
              "Couple I₂/I⁻ : I₂ + 2 e⁻ = 2 I⁻.",
              "2. L'oxydant qui réagit est H₂O₂ (il est réduit en H₂O) ; le réducteur qui réagit est l'ion I⁻ (il est oxydé en I₂, ce qui explique la coloration).",
              "3. Les ions iodure cèdent 2 électrons (2 I⁻ = I₂ + 2 e⁻) et H₂O₂ en capte 2 : les nombres d'électrons sont déjà égaux.",
              "Somme : H₂O₂ + 2 I⁻ + 2 H⁺ → I₂ + 2 H₂O. Vérification : charge 0 de chaque côté ; 2 O, 4 H et 2 I de chaque côté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Écrire les demi-équations électroniques des couples Ag⁺/Ag, Al³⁺/Al, Fe³⁺/Fe²⁺ et Cl₂/Cl⁻. 2. Un fil de cuivre plongé dans une solution incolore de nitrate d'argent se couvre de cristaux d'argent, et la solution bleuit (formation d'ions Cu²⁺). L'équation de la réaction est 2 Ag⁺ + Cu → 2 Ag + Cu²⁺. Quelle espèce est oxydée ? Quelle espèce est réduite ? Quel est l'oxydant ?",
              hint: "Dans chaque couple, l'oxydant est écrit en premier et capte les électrons. Pour la question 2, cherchez quelle espèce perd des électrons (son nombre de charges positives augmente).",
              solution: [
                "1. Ag⁺ + e⁻ = Ag ; Al³⁺ + 3 e⁻ = Al ; Fe³⁺ + e⁻ = Fe²⁺ ; Cl₂ + 2 e⁻ = 2 Cl⁻.",
                "2. Le cuivre Cu devient Cu²⁺ : il perd 2 électrons (Cu = Cu²⁺ + 2 e⁻), il est oxydé ; c'est le réducteur.",
                "Les ions Ag⁺ deviennent Ag : chacun gagne un électron (Ag⁺ + e⁻ = Ag), ils sont réduits ; l'ion Ag⁺ est l'oxydant.",
                "Réponse : le cuivre est oxydé, les ions argent sont réduits ; l'oxydant est Ag⁺ et le réducteur Cu.",
              ],
            },
            {
              level: 2,
              statement: "Ajuster en milieu acide les demi-équations électroniques des couples suivants, en détaillant les étapes pour le premier : a) Cr₂O₇²⁻/Cr³⁺ (ion dichromate, orange ; ion chrome(III), vert) ; b) SO₄²⁻/SO₂ ; c) NO₃⁻/NO.",
              hint: "Suivez l'ordre : éléments autres que O et H, puis O avec H₂O, puis H avec H⁺, puis charges avec e⁻. Vérifiez à la fin que la charge totale est la même des deux côtés.",
              solution: [
                "a) Cr₂O₇²⁻ = 2 Cr³⁺ (chrome ajusté) ; 7 O à gauche : Cr₂O₇²⁻ = 2 Cr³⁺ + 7 H₂O ; 14 H à droite : Cr₂O₇²⁻ + 14 H⁺ = 2 Cr³⁺ + 7 H₂O.",
                "Charges : -2 + 14 = +12 à gauche, 2 × (+3) = +6 à droite ; on ajoute 6 e⁻ à gauche : Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ = 2 Cr³⁺ + 7 H₂O.",
                "b) SO₄²⁻ + 4 H⁺ + 2 e⁻ = SO₂ + 2 H₂O (charge 0 de chaque côté).",
                "c) NO₃⁻ + 4 H⁺ + 3 e⁻ = NO + 2 H₂O (charge 0 de chaque côté).",
                "Réponse : 6, 2 et 3 électrons sont échangés respectivement, toujours du côté de l'oxydant.",
              ],
            },
            {
              level: 3,
              statement: "On verse goutte à goutte une solution violette de permanganate de potassium, acidifiée, dans une solution incolore d'acide oxalique H₂C₂O₄. Tant que l'acide oxalique est présent, la teinte violette disparaît dès que les gouttes se mélangent, et de fines bulles de gaz se forment. Couples : MnO₄⁻/Mn²⁺ et CO₂/H₂C₂O₄. Les ions Mn²⁺ sont pratiquement incolores en solution diluée. 1. Écrire les deux demi-équations électroniques. 2. Identifier l'oxydant et le réducteur qui réagissent, et préciser l'espèce oxydée. 3. Écrire l'équation de la réaction. 4. Interpréter les deux observations. 5. Pourquoi la solution de permanganate doit-elle être acidifiée ?",
              hint: "Pour le couple CO₂/H₂C₂O₄, ajustez d'abord le carbone (2 CO₂). Pour égaliser les électrons, cherchez le plus petit multiple commun de 5 et de 2.",
              solution: [
                "1. MnO₄⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H₂O ; 2 CO₂ + 2 H⁺ + 2 e⁻ = H₂C₂O₄.",
                "2. L'oxydant qui réagit est l'ion permanganate MnO₄⁻ ; le réducteur est l'acide oxalique H₂C₂O₄, qui est oxydé en dioxyde de carbone.",
                "3. On multiplie la première demi-équation par 2 et la seconde, écrite dans le sens de l'oxydation (H₂C₂O₄ = 2 CO₂ + 2 H⁺ + 2 e⁻), par 5 : 10 électrons de part et d'autre.",
                "Somme : 2 MnO₄⁻ + 16 H⁺ + 5 H₂C₂O₄ → 2 Mn²⁺ + 8 H₂O + 10 CO₂ + 10 H⁺, soit après simplification : 2 MnO₄⁻ + 5 H₂C₂O₄ + 6 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O. Vérification : charge +4 de chaque côté ; 16 H, 28 O, 10 C et 2 Mn de chaque côté.",
                "4. La teinte violette disparaît car les ions MnO₄⁻ sont consommés et transformés en ions Mn²⁺ presque incolores ; les bulles sont du dioxyde de carbone, produit de l'oxydation de l'acide oxalique.",
                "5. Les ions H⁺ sont des réactifs : sans milieu acide, la réduction de MnO₄⁻ en Mn²⁺ ne peut pas se faire selon cette équation.",
                "Réponse : 2 MnO₄⁻ + 5 H₂C₂O₄ + 6 H⁺ → 2 Mn²⁺ + 10 CO₂ + 8 H₂O ; l'acide oxalique est oxydé, le permanganate est réduit.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque espèce usuelle à son rôle et à son couple.",
            pairs: [
              { left: "Dioxygène O₂", right: "oxydant du couple O₂/H₂O" },
              { left: "Ion hypochlorite ClO⁻ (eau de Javel)", right: "oxydant du couple ClO⁻/Cl⁻" },
              { left: "Ion permanganate MnO₄⁻", right: "oxydant du couple MnO₄⁻/Mn²⁺" },
              { left: "Acide ascorbique C₆H₈O₆", right: "réducteur du couple C₆H₆O₆/C₆H₈O₆" },
              { left: "Zinc Zn", right: "réducteur du couple Zn²⁺/Zn" },
              { left: "Dihydrogène H₂", right: "réducteur du couple H⁺/H₂" },
            ],
          },
          quiz: [
            {
              q: "Un réducteur est une espèce capable de :",
              options: ["capter des électrons", "capter des ions H⁺", "céder des protons", "céder des électrons"],
              answer: 3,
              why: "Le réducteur cède des électrons ; c'est l'oxydant qui en capte.",
            },
            {
              q: "Lors d'une oxydation, l'espèce qui réagit :",
              options: ["gagne des électrons", "perd des électrons", "gagne des atomes d'oxygène dans tous les cas", "reste inchangée"],
              answer: 1,
              why: "Une oxydation est une perte d'électrons, subie par un réducteur. Elle ne fait pas toujours intervenir l'oxygène.",
            },
            {
              q: "Quelle est la demi-équation correcte du couple Fe³⁺/Fe²⁺ ?",
              options: ["Fe²⁺ + e⁻ = Fe³⁺", "Fe³⁺ = Fe²⁺ + e⁻", "Fe³⁺ + e⁻ = Fe²⁺", "Fe³⁺ + 2 e⁻ = Fe²⁺"],
              answer: 2,
              why: "L'oxydant Fe³⁺ capte un électron pour donner Fe²⁺ : la charge passe de +3 à +2.",
            },
            {
              q: "Dans l'équation d'une réaction d'oxydoréduction correctement écrite, les électrons :",
              options: ["n'apparaissent pas", "apparaissent du côté des réactifs", "apparaissent des deux côtés", "apparaissent du côté des produits"],
              answer: 0,
              why: "Tous les électrons cédés par le réducteur sont captés par l'oxydant : ils se simplifient et n'apparaissent pas dans le bilan.",
            },
            {
              q: "Combien d'électrons faut-il dans la demi-équation du couple MnO₄⁻/Mn²⁺ ?",
              options: ["2", "5", "7", "8"],
              answer: 1,
              why: "MnO₄⁻ + 8 H⁺ + 5 e⁻ = Mn²⁺ + 4 H₂O : la charge vaut +2 de chaque côté.",
            },
          ],
          trap: "Placer les électrons du mauvais côté de la demi-équation (ils sont toujours du côté de l'oxydant), ou laisser des électrons dans l'équation de la réaction faute d'avoir égalisé leur nombre dans les deux demi-équations.",
          method: "Après chaque demi-équation et chaque équation, faites systématiquement deux vérifications : comptez chaque élément de part et d'autre, puis calculez la charge totale de chaque côté. Si les charges diffèrent, l'erreur porte presque toujours sur le nombre d'électrons ou d'ions H⁺.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "tableau-avancement",
          title: "Tableau d’avancement, réactif limitant et état final",
          minutes: 35,
          objectives: [
            "Décrire qualitativement l'évolution des quantités de matière des espèces chimiques lors d'une transformation.",
            "Établir le tableau d'avancement d'une transformation chimique à partir de l'équation de la réaction et des quantités de matière initiales.",
            "Déterminer l'avancement maximal, le réactif limitant et la composition du système à l'état final.",
            "Identifier un mélange stœchiométrique et relier le caractère total ou non total d'une transformation aux avancements final et maximal.",
          ],
          course: [
            {
              heading: "L'avancement d'une réaction",
              paragraphs: [
                "Au cours d'une transformation chimique, les quantités de matière des réactifs diminuent et celles des produits augmentent, toujours dans les proportions fixées par les nombres stœchiométriques de l'équation. Pour décrire cette évolution avec une seule variable, on introduit l'avancement x, exprimé en mol.",
                "Pour une réaction d'équation a A + b B → c C + d D, lorsque l'avancement vaut x, il a disparu a × x mol de A et b × x mol de B, et il s'est formé c × x mol de C et d × x mol de D. Ainsi n(A) = n₀(A) - a x et n(C) = n₀(C) + c x, où n₀ désigne la quantité initiale. Exemple : pour 2 H₂ + O₂ → 2 H₂O, quand x = 0,10 mol, il a disparu 0,20 mol de H₂ et 0,10 mol de O₂, et il s'est formé 0,20 mol d'eau.",
              ],
              box: { label: "Définition", text: "Pour a A + b B → c C + d D, à l'avancement x (en mol) : n(A) = n₀(A) - a x ; n(B) = n₀(B) - b x ; n(C) = n₀(C) + c x ; n(D) = n₀(D) + d x." },
            },
            {
              heading: "Le tableau d'avancement",
              paragraphs: [
                "Le tableau d'avancement présente, sous l'équation de la réaction, une ligne pour l'état initial (x = 0), une ligne pour un état intermédiaire (x quelconque) et une ligne pour l'état final (x = xf). Chaque colonne correspond à une espèce. Le solvant, lorsqu'il est aussi réactif ou produit (l'eau d'une solution aqueuse), est noté « excès » ; les ions spectateurs n'y figurent pas.",
                "Exemple : combustion du méthane, CH₄ + 2 O₂ → CO₂ + 2 H₂O, avec 0,10 mol de méthane et 0,30 mol de dioxygène. État initial : 0,10 ; 0,30 ; 0 ; 0. État intermédiaire : 0,10 - x ; 0,30 - 2x ; x ; 2x. État final, si la transformation est totale : on remplace x par l'avancement maximal xmax, calculé ci-dessous.",
              ],
            },
            {
              heading: "Avancement maximal et réactif limitant",
              paragraphs: [
                "Dans une transformation totale, la réaction s'arrête quand l'un des réactifs est entièrement consommé : c'est le réactif limitant. L'avancement atteint alors sa valeur maximale xmax. Pour la trouver, on fait l'hypothèse que chaque réactif est limitant et l'on calcule la valeur de x qui annule sa quantité : xmax est la plus petite de ces valeurs.",
                "Pour le méthane : 0,10 - x = 0 donne x = 0,10 mol ; pour le dioxygène : 0,30 - 2x = 0 donne x = 0,15 mol. Donc xmax = 0,10 mol et le méthane est le réactif limitant. État final : n(CH₄) = 0 ; n(O₂) = 0,30 - 0,20 = 0,10 mol ; n(CO₂) = 0,10 mol ; n(H₂O) = 0,20 mol. Le dioxygène, en excès, reste en partie.",
                "Lorsque les réactifs sont introduits dans les proportions des nombres stœchiométriques, c'est-à-dire lorsque n₀(A) ÷ a = n₀(B) ÷ b, ils sont tous entièrement consommés à l'état final : on dit que le mélange initial est stœchiométrique. Exemple : 0,10 mol de méthane et 0,20 mol de dioxygène.",
              ],
              box: { label: "Méthode", text: "Pour chaque réactif, résoudre n₀ - a x = 0. La plus petite valeur obtenue est xmax, et le réactif correspondant est limitant. Mélange stœchiométrique : n₀(A) ÷ a = n₀(B) ÷ b, tous les réactifs disparaissent." },
            },
            {
              heading: "Transformation totale ou non totale",
              paragraphs: [
                "L'avancement final xf est l'avancement réellement atteint quand le système n'évolue plus ; il se détermine par une mesure (masse de produit, volume de gaz, absorbance...). Si xf = xmax, la transformation est totale : le réactif limitant a entièrement disparu. Si xf < xmax, la transformation est non totale : à l'état final, tous les réactifs sont encore présents, en même temps que les produits.",
                "Exemple : la réaction entre 1,0 mol d'acide éthanoïque et 1,0 mol d'éthanol, qui forme un ester et de l'eau, s'arrête lorsqu'environ 0,67 mol d'ester s'est formé, alors que xmax = 1,0 mol. La transformation est non totale. Les combustions et la plupart des réactions d'oxydoréduction étudiées cette année sont, elles, considérées comme totales.",
              ],
              box: { label: "À retenir", text: "xf = xmax : transformation totale. xf < xmax : transformation non totale, les réactifs et les produits coexistent à l'état final." },
            },
          ],
          keyPoints: [
            "L'avancement x (en mol) décrit l'évolution : n(réactif) = n₀ - a x ; n(produit) = n₀ + c x.",
            "Tableau d'avancement : état initial, état intermédiaire, état final ; solvant noté « excès ».",
            "xmax : plus petite valeur de x qui annule la quantité d'un réactif ; ce réactif est limitant.",
            "Mélange stœchiométrique : n₀(A) ÷ a = n₀(B) ÷ b ; tous les réactifs sont consommés.",
            "Transformation totale si xf = xmax, non totale si xf < xmax.",
          ],
          example: {
            statement: "On introduit 1,31 g de poudre de zinc dans 50,0 mL d'une solution d'acide chlorhydrique où [H⁺] = 0,50 mol·L⁻¹. Il se produit la réaction totale Zn(s) + 2 H⁺(aq) → Zn²⁺(aq) + H₂(g). Données : M(Zn) = 65,4 g·mol⁻¹ ; volume molaire des gaz à 20 °C sous 1,013 bar : 24,0 L·mol⁻¹. Déterminer le réactif limitant, la composition du système à l'état final et le volume de dihydrogène dégagé à 20 °C sous 1,013 bar.",
            solution: [
              "Quantités initiales : n₀(Zn) = 1,31 ÷ 65,4 ≈ 2,00 × 10⁻² mol ; n₀(H⁺) = C × V = 0,50 × 0,0500 = 2,5 × 10⁻² mol.",
              "Tableau, état intermédiaire : n(Zn) = 2,00 × 10⁻² - x ; n(H⁺) = 2,5 × 10⁻² - 2x ; n(Zn²⁺) = x ; n(H₂) = x.",
              "Hypothèses : zinc limitant si x = 2,00 × 10⁻² mol ; H⁺ limitant si 2,5 × 10⁻² - 2x = 0, soit x = 1,25 × 10⁻² mol. La plus petite valeur l'emporte : xmax = 1,25 × 10⁻² mol, les ions H⁺ sont limitants.",
              "État final : n(Zn) = 2,00 × 10⁻² - 1,25 × 10⁻² = 7,5 × 10⁻³ mol (soit 0,49 g de zinc restant) ; n(H⁺) = 0 ; n(Zn²⁺) = 1,25 × 10⁻² mol ; n(H₂) = 1,25 × 10⁻² mol.",
              "Volume de dihydrogène : V = n × Vm = 1,25 × 10⁻² × 24,0 = 0,30 L.",
              "Réponse : les ions H⁺ sont limitants ; il reste 7,5 × 10⁻³ mol de zinc et il se forme 1,25 × 10⁻² mol d'ions Zn²⁺ et 0,30 L de dihydrogène.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère la réaction de synthèse de l'ammoniac N₂ + 3 H₂ → 2 NH₃, supposée totale, à partir de 2,0 mol de diazote et de 3,0 mol de dihydrogène. 1. Établir le tableau d'avancement (état initial et état intermédiaire). 2. Déterminer l'avancement maximal et le réactif limitant. 3. Donner la composition du système à l'état final. 4. Le mélange initial est-il stœchiométrique ?",
              hint: "Résolvez 2,0 - x = 0 puis 3,0 - 3x = 0, et retenez la plus petite valeur. Pour la question 4, comparez n₀(N₂) ÷ 1 et n₀(H₂) ÷ 3.",
              solution: [
                "1. État initial : n(N₂) = 2,0 mol ; n(H₂) = 3,0 mol ; n(NH₃) = 0. État intermédiaire : 2,0 - x ; 3,0 - 3x ; 2x.",
                "2. Si N₂ est limitant : x = 2,0 mol ; si H₂ est limitant : x = 1,0 mol. Donc xmax = 1,0 mol et H₂ est le réactif limitant.",
                "3. État final : n(N₂) = 2,0 - 1,0 = 1,0 mol ; n(H₂) = 0 ; n(NH₃) = 2 × 1,0 = 2,0 mol.",
                "4. n₀(N₂) ÷ 1 = 2,0 et n₀(H₂) ÷ 3 = 1,0 : ces rapports sont différents, le mélange n'est pas stœchiométrique (il faudrait 6,0 mol de H₂ pour 2,0 mol de N₂).",
                "Réponse : xmax = 1,0 mol ; H₂ limitant ; état final : 1,0 mol de N₂ et 2,0 mol de NH₃ ; mélange non stœchiométrique.",
              ],
            },
            {
              level: 2,
              statement: "On plonge 0,56 g de limaille de fer dans 100,0 mL d'une solution bleue de sulfate de cuivre où [Cu²⁺] = 5,0 × 10⁻² mol·L⁻¹. La réaction, totale, a pour équation Fe(s) + Cu²⁺(aq) → Fe²⁺(aq) + Cu(s). Données : M(Fe) = 55,8 g·mol⁻¹ ; M(Cu) = 63,5 g·mol⁻¹. 1. Calculer les quantités de matière initiales des réactifs. 2. Déterminer xmax et le réactif limitant. 3. Calculer la masse de cuivre formé et la masse de fer restant. 4. Calculer la concentration des ions Fe²⁺ à l'état final, puis prévoir la couleur finale de la solution, sachant que les ions Fe²⁺ sont vert très pâle.",
              hint: "n(Cu²⁺) = C × V avec V en litres. Le volume de la solution ne change pas au cours de la réaction.",
              solution: [
                "1. n₀(Fe) = 0,56 ÷ 55,8 ≈ 1,0 × 10⁻² mol ; n₀(Cu²⁺) = 5,0 × 10⁻² × 0,1000 = 5,0 × 10⁻³ mol.",
                "2. Fe limitant si x = 1,0 × 10⁻² mol ; Cu²⁺ limitant si x = 5,0 × 10⁻³ mol. Donc xmax = 5,0 × 10⁻³ mol et les ions Cu²⁺ sont limitants.",
                "3. m(Cu) = xmax × M(Cu) = 5,0 × 10⁻³ × 63,5 ≈ 0,32 g. n(Fe) restant = 1,0 × 10⁻² - 5,0 × 10⁻³ = 5,0 × 10⁻³ mol, soit m(Fe) = 5,0 × 10⁻³ × 55,8 ≈ 0,28 g.",
                "4. [Fe²⁺] = xmax ÷ V = 5,0 × 10⁻³ ÷ 0,1000 = 5,0 × 10⁻² mol·L⁻¹. Les ions Cu²⁺ ont disparu : la couleur bleue disparaît et la solution devient vert très pâle.",
                "Réponse : xmax = 5,0 × 10⁻³ mol, Cu²⁺ limitant ; 0,32 g de cuivre formé, 0,28 g de fer restant ; [Fe²⁺] = 5,0 × 10⁻² mol·L⁻¹ et la solution se décolore.",
              ],
            },
            {
              level: 3,
              statement: "Partie A. Un réchaud brûle du propane selon la réaction totale C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Données : M(C₃H₈) = 44,0 g·mol⁻¹ ; volume molaire à 20 °C sous 1,013 bar : 24,0 L·mol⁻¹ ; l'air contient 21 % de dioxygène en volume. 1. Quel volume de dioxygène, puis d'air, faut-il pour que la combustion de 4,4 g de propane se fasse en mélange stœchiométrique ? 2. On ne dispose que de 9,6 L de dioxygène pour brûler ces 4,4 g de propane. Déterminer le réactif limitant et la composition de l'état final. Partie B. On mélange 0,20 mol d'acide éthanoïque et 0,20 mol d'éthanol, qui réagissent selon acide + alcool → ester + eau. À l'état final, on mesure 0,13 mol d'ester (données fictives). 3. Calculer xmax et xf, puis conclure sur le caractère total ou non de la transformation. 4. Donner la composition de l'état final.",
              hint: "Un mélange stœchiométrique vérifie n₀(C₃H₈) ÷ 1 = n₀(O₂) ÷ 5. Dans la partie B, l'avancement final se lit directement sur la quantité d'ester formée, car son nombre stœchiométrique vaut 1.",
              solution: [
                "1. n₀(C₃H₈) = 4,4 ÷ 44,0 = 0,10 mol. Mélange stœchiométrique : n(O₂) = 5 × 0,10 = 0,50 mol, soit V(O₂) = 0,50 × 24,0 = 12 L. Volume d'air : 12 ÷ 0,21 ≈ 57 L.",
                "2. n₀(O₂) = 9,6 ÷ 24,0 = 0,40 mol. Propane limitant si x = 0,10 mol ; O₂ limitant si 0,40 - 5x = 0, soit x = 0,080 mol. Donc xmax = 0,080 mol et le dioxygène est limitant.",
                "État final : n(C₃H₈) = 0,10 - 0,080 = 0,020 mol ; n(O₂) = 0 ; n(CO₂) = 3 × 0,080 = 0,24 mol ; n(H₂O) = 4 × 0,080 = 0,32 mol. (En réalité, un manque de dioxygène favorise une combustion incomplète, qui produit du monoxyde de carbone, gaz toxique.)",
                "3. Mélange équimolaire avec des nombres stœchiométriques égaux à 1 : xmax = 0,20 mol. L'ester formé donne xf = 0,13 mol. Comme xf < xmax, la transformation est non totale.",
                "4. État final : n(acide) = n(alcool) = 0,20 - 0,13 = 0,07 mol ; n(ester) = n(eau formée) = 0,13 mol. Réactifs et produits coexistent.",
                "Réponse : 12 L de dioxygène, soit environ 57 L d'air ; avec 9,6 L de O₂, le dioxygène est limitant (xmax = 0,080 mol) ; l'estérification est non totale (xf = 0,13 mol < xmax = 0,20 mol).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur l'avancement.",
            statements: [
              { text: "Le réactif limitant est toujours celui dont la quantité initiale est la plus petite.", true: false, why: "Il faut tenir compte des nombres stœchiométriques : on compare n₀ ÷ a, pas n₀ seul." },
              { text: "L'avancement s'exprime en mol.", true: true, why: "x est homogène à une quantité de matière : il s'exprime en mol, comme les quantités du tableau." },
              { text: "Dans un mélange stœchiométrique, tous les réactifs sont consommés si la transformation est totale.", true: true, why: "Les réactifs sont dans les proportions de l'équation : ils disparaissent ensemble." },
              { text: "Pour 2 H₂ + O₂ → 2 H₂O, quand x = 1 mol, il s'est formé 1 mol d'eau.", true: false, why: "Le nombre stœchiométrique de l'eau vaut 2 : il s'est formé 2 × 1 = 2 mol d'eau." },
              { text: "Si xf < xmax, il reste du réactif limitant à l'état final.", true: true, why: "La transformation est non totale : aucun réactif n'a entièrement disparu." },
              { text: "xmax est la plus grande des valeurs de x qui annulent la quantité d'un réactif.", true: false, why: "C'est la plus petite : dès qu'un réactif est épuisé, la réaction s'arrête." },
            ],
          },
          quiz: [
            {
              q: "Pour la réaction A + 2 B → C, on part de 3 mol de A et 4 mol de B. L'avancement maximal vaut :",
              options: ["2 mol", "3 mol", "4 mol", "7 mol"],
              answer: 0,
              why: "A limitant si x = 3 mol ; B limitant si 4 - 2x = 0, soit x = 2 mol. La plus petite valeur est xmax = 2 mol, B est limitant.",
            },
            {
              q: "Pour 2 H₂ + O₂ → 2 H₂O, quel mélange initial est stœchiométrique ?",
              options: ["2 mol de H₂ et 2 mol de O₂", "1 mol de H₂ et 2 mol de O₂", "4 mol de H₂ et 2 mol de O₂", "3 mol de H₂ et 3 mol de O₂"],
              answer: 2,
              why: "Il faut n₀(H₂) ÷ 2 = n₀(O₂) ÷ 1 : 4 ÷ 2 = 2 ÷ 1.",
            },
            {
              q: "Dans le tableau d'avancement de a A + b B → c C, la quantité de C à l'avancement x s'écrit :",
              options: ["n₀(C) - c x", "n₀(C) + x ÷ c", "c - x", "n₀(C) + c x"],
              answer: 3,
              why: "Un produit se forme : sa quantité augmente de c × x à partir de sa quantité initiale.",
            },
            {
              q: "Une transformation est non totale lorsque :",
              options: ["xf = xmax", "xf < xmax", "xmax = 0", "le réactif limitant a disparu"],
              answer: 1,
              why: "Si l'avancement final reste inférieur à l'avancement maximal, la réaction s'arrête avant l'épuisement du réactif limitant.",
            },
            {
              q: "On brûle 0,10 mol de méthane (CH₄ + 2 O₂ → CO₂ + 2 H₂O) avec 0,50 mol de dioxygène. À l'état final, il reste :",
              options: ["0,40 mol de O₂", "0,10 mol de O₂", "0,30 mol de O₂", "0,50 mol de O₂"],
              answer: 2,
              why: "Le méthane est limitant (xmax = 0,10 mol) ; il a disparu 2 × 0,10 = 0,20 mol de O₂, il en reste 0,50 - 0,20 = 0,30 mol.",
            },
          ],
          trap: "Désigner comme réactif limitant celui dont la quantité initiale est la plus faible, sans diviser par les nombres stœchiométriques ; ou oublier de multiplier x par le nombre stœchiométrique dans les lignes du tableau.",
          method: "Rédigez toujours dans le même ordre : quantités initiales (en mol, jamais en g), ligne intermédiaire avec les nombres stœchiométriques, une hypothèse par réactif pour trouver xmax, puis état final. Vérifiez qu'aucune quantité finale n'est négative et que le réactif limitant vaut bien 0.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "titrage-equivalence",
          title: "Le titrage : équivalence et repérage par changement de couleur",
          minutes: 35,
          objectives: [
            "Relier qualitativement l'évolution des quantités de matière de réactifs au changement de réactif limitant au cours d'un titrage.",
            "Définir l'équivalence d'un titrage et la repérer par un changement de couleur.",
            "Établir la relation entre les quantités de matière de réactifs introduites à l'équivalence et en déduire une concentration.",
            "Mettre en œuvre le protocole d'un titrage avec suivi colorimétrique.",
          ],
          course: [
            {
              heading: "Le principe d'un titrage",
              paragraphs: [
                "Titrer une espèce chimique en solution, c'est déterminer sa quantité de matière (ou sa concentration) au moyen d'une réaction chimique avec un autre réactif, de concentration connue. Contrairement au dosage par étalonnage, le titrage est destructif : l'espèce titrée est consommée.",
                "On prélève un volume précis V₁ de la solution à titrer, appelé prise d'essai, avec une pipette jaugée, et on le place dans un bécher (ou un erlenmeyer) sur un agitateur magnétique. La solution titrante, de concentration C₂ connue, est placée dans une burette graduée et versée progressivement. On note le volume versé.",
                "La réaction support du titrage doit être totale (le réactif limitant disparaît entièrement), rapide (l'état final est atteint dès que les réactifs se mélangent) et unique (le réactif titrant ne réagit qu'avec l'espèce titrée). Cette année, ce sont des réactions d'oxydoréduction.",
              ],
              box: { label: "Définition", text: "Titrage : détermination de la quantité d'une espèce par une réaction chimique totale, rapide et unique avec un réactif titrant de concentration connue, versé à la burette. Le titrage est destructif." },
            },
            {
              heading: "L'équivalence, un changement de réactif limitant",
              paragraphs: [
                "Avant l'équivalence, le réactif titrant versé est entièrement consommé dès son arrivée : il est limitant, et l'espèce titrée est en excès. Après l'équivalence, l'espèce titrée a entièrement disparu : c'est elle qui est limitante, et le réactif titrant versé s'accumule. L'équivalence est l'état du système où l'on passe de l'un à l'autre : les deux réactifs ont été introduits dans les proportions stœchiométriques et ont entièrement réagi.",
                "Pour une réaction d'équation a A + b B → produits, où A est l'espèce titrée et B le réactif titrant, la condition d'équivalence s'écrit n₀(A) ÷ a = nE(B) ÷ b, où nE(B) = C₂ × VE est la quantité de réactif titrant versée à l'équivalence et VE le volume équivalent. Avec n₀(A) = C₁ × V₁, on obtient C₁ × V₁ ÷ a = C₂ × VE ÷ b, d'où C₁ = a × C₂ × VE ÷ (b × V₁).",
              ],
              box: { label: "Formule", text: "À l'équivalence, pour a A (titré) + b B (titrant) : n₀(A) ÷ a = nE(B) ÷ b, soit C₁ × V₁ ÷ a = C₂ × VE ÷ b, donc C₁ = a × C₂ × VE ÷ (b × V₁)." },
            },
            {
              heading: "Repérer l'équivalence par un changement de couleur",
              paragraphs: [
                "Lorsque le réactif titrant est la seule espèce colorée, comme l'ion permanganate MnO₄⁻ (violet) titrant des ions fer(II) presque incolores, la couleur violette disparaît à chaque goutte avant l'équivalence, car MnO₄⁻ est consommé et transformé en Mn²⁺ presque incolore. Juste après l'équivalence, MnO₄⁻ n'est plus consommé : une teinte rose violacé persiste. L'équivalence est repérée à la première goutte qui donne une teinte persistante.",
                "Lorsque l'espèce titrée est la seule colorée, comme le diiode I₂ (jaune-brun) titré par les ions thiosulfate S₂O₃²⁻ incolores, la couleur pâlit au fil des ajouts et disparaît à l'équivalence. Pour mieux voir la fin, on ajoute près de l'équivalence quelques gouttes d'empois d'amidon (ou de thiodène), qui donne avec le diiode une teinte bleu foncé : sa disparition marque l'équivalence.",
                "Si aucune espèce n'est colorée, on ajoute un indicateur coloré de fin de réaction, choisi pour changer de teinte à l'équivalence. Dans tous les cas, on note VE au moment précis du changement de couleur, la lecture se faisant au bas du ménisque, l'œil à sa hauteur.",
              ],
              box: { label: "Repère", text: "Titrant coloré : la couleur persiste après l'équivalence. Titré coloré : la couleur disparaît à l'équivalence. Sinon : indicateur coloré. On relève VE à la goutte du changement de couleur." },
            },
            {
              heading: "Le protocole et l'exploitation",
              paragraphs: [
                "On rince la burette avec la solution titrante, on la remplit et on ajuste le zéro (sans bulle d'air sous le robinet). On réalise d'abord un titrage rapide, millilitre par millilitre, pour encadrer VE, puis un titrage précis sur une nouvelle prise d'essai, en versant goutte à goutte à l'approche du volume trouvé.",
                "Exemple : V₁ = 20,0 mL d'une solution d'ions Fe²⁺ sont titrés par des ions MnO₄⁻ à C₂ = 2,00 × 10⁻² mol·L⁻¹ ; la teinte violette persiste pour VE = 12,4 mL. Réaction : MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O. À l'équivalence, n₀(Fe²⁺) ÷ 5 = nE(MnO₄⁻) ÷ 1 = 2,00 × 10⁻² × 12,4 × 10⁻³ = 2,48 × 10⁻⁴ mol. Donc n₀(Fe²⁺) = 1,24 × 10⁻³ mol et C₁ = 1,24 × 10⁻³ ÷ 0,0200 = 6,20 × 10⁻² mol·L⁻¹.",
              ],
            },
          ],
          keyPoints: [
            "Titrage : réaction support totale, rapide et unique ; espèce titrée dans le bécher, réactif titrant dans la burette.",
            "Avant l'équivalence, le titrant est limitant ; après, c'est l'espèce titrée : l'équivalence est un changement de réactif limitant.",
            "À l'équivalence, les réactifs ont été introduits dans les proportions stœchiométriques : n₀(A) ÷ a = nE(B) ÷ b.",
            "Repérage : persistance de la couleur du titrant, ou disparition de celle de l'espèce titrée, ou indicateur coloré.",
            "Titrage rapide pour encadrer VE, puis titrage précis goutte à goutte.",
          ],
          example: {
            statement: "On titre V₁ = 10,0 mL d'une solution de diiode I₂ par une solution de thiosulfate de sodium à C₂ = 0,100 mol·L⁻¹. La solution, d'abord jaune-brun, pâlit ; on ajoute de l'empois d'amidon, puis la teinte bleue disparaît pour VE = 8,0 mL. Réaction support : I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻. 1. Justifier le repérage de l'équivalence. 2. Établir la relation à l'équivalence. 3. Calculer la concentration C₁ en diiode.",
            solution: [
              "1. Le diiode est la seule espèce colorée. Avant l'équivalence, il est en excès et la solution reste colorée ; à l'équivalence, il a entièrement disparu : la teinte bleue due à l'empois d'amidon disparaît.",
              "2. À l'équivalence, les réactifs ont été introduits dans les proportions stœchiométriques : n₀(I₂) ÷ 1 = nE(S₂O₃²⁻) ÷ 2.",
              "3. nE(S₂O₃²⁻) = C₂ × VE = 0,100 × 8,0 × 10⁻³ = 8,0 × 10⁻⁴ mol, donc n₀(I₂) = 8,0 × 10⁻⁴ ÷ 2 = 4,0 × 10⁻⁴ mol.",
              "C₁ = n₀(I₂) ÷ V₁ = 4,0 × 10⁻⁴ ÷ 10,0 × 10⁻³ = 4,0 × 10⁻² mol·L⁻¹.",
              "Réponse : la concentration en diiode vaut 4,0 × 10⁻² mol·L⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On titre V₁ = 20,0 mL d'une solution d'ions Fe²⁺ par une solution de permanganate de potassium à C₂ = 1,00 × 10⁻² mol·L⁻¹, en milieu acide. L'équivalence est obtenue pour VE = 16,0 mL. Réaction : MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O. 1. Comment l'équivalence est-elle repérée ? 2. Calculer la concentration C₁ des ions Fe²⁺.",
              hint: "Écrivez la relation à l'équivalence en divisant chaque quantité par son nombre stœchiométrique : n₀(Fe²⁺) ÷ 5 = nE(MnO₄⁻) ÷ 1.",
              solution: [
                "1. L'ion permanganate est la seule espèce colorée (violet) : l'équivalence est repérée par la persistance d'une teinte rose violacé dans le bécher.",
                "2. nE(MnO₄⁻) = C₂ × VE = 1,00 × 10⁻² × 16,0 × 10⁻³ = 1,60 × 10⁻⁴ mol.",
                "n₀(Fe²⁺) = 5 × nE(MnO₄⁻) = 5 × 1,60 × 10⁻⁴ = 8,00 × 10⁻⁴ mol.",
                "C₁ = n₀(Fe²⁺) ÷ V₁ = 8,00 × 10⁻⁴ ÷ 0,0200 = 4,00 × 10⁻² mol·L⁻¹.",
                "Réponse : C₁ = 4,00 × 10⁻² mol·L⁻¹.",
              ],
            },
            {
              level: 2,
              statement: "On titre V₁ = 10,0 mL d'une solution d'ions Fe²⁺ à C₁ = 5,00 × 10⁻² mol·L⁻¹ par une solution de permanganate à C₂ = 1,00 × 10⁻² mol·L⁻¹ (réaction : MnO₄⁻ + 5 Fe²⁺ + 8 H⁺ → Mn²⁺ + 5 Fe³⁺ + 4 H₂O ; les ions H⁺ sont en excès). 1. Prévoir le volume équivalent. 2. Pour un volume versé V = 5,0 mL, déterminer le réactif limitant, les quantités de Fe²⁺ et de MnO₄⁻ présentes dans le bécher et la couleur du mélange. 3. Même question pour V = 15,0 mL.",
              hint: "Pour chaque volume versé, calculez la quantité de MnO₄⁻ introduite, puis faites un mini tableau d'avancement : xmax est la plus petite des valeurs n(MnO₄⁻) ÷ 1 et n₀(Fe²⁺) ÷ 5.",
              solution: [
                "1. n₀(Fe²⁺) = 5,00 × 10⁻² × 0,0100 = 5,00 × 10⁻⁴ mol ; à l'équivalence, nE(MnO₄⁻) = n₀(Fe²⁺) ÷ 5 = 1,00 × 10⁻⁴ mol, donc VE = 1,00 × 10⁻⁴ ÷ 1,00 × 10⁻² = 1,00 × 10⁻² L = 10,0 mL.",
                "2. V = 5,0 mL : n(MnO₄⁻) versé = 5,0 × 10⁻⁵ mol. xmax = min(5,0 × 10⁻⁵ ; 5,00 × 10⁻⁴ ÷ 5 = 1,00 × 10⁻⁴) = 5,0 × 10⁻⁵ mol : MnO₄⁻ est limitant.",
                "Il reste 0 mol de MnO₄⁻ et 5,00 × 10⁻⁴ - 5 × 5,0 × 10⁻⁵ = 2,5 × 10⁻⁴ mol de Fe²⁺. Le mélange n'est pas violet (pratiquement incolore ou jaune très pâle à cause des ions Fe³⁺).",
                "3. V = 15,0 mL : n(MnO₄⁻) versé = 1,50 × 10⁻⁴ mol. xmax = min(1,50 × 10⁻⁴ ; 1,00 × 10⁻⁴) = 1,00 × 10⁻⁴ mol : Fe²⁺ est limitant.",
                "Il reste 0 mol de Fe²⁺ et 1,50 × 10⁻⁴ - 1,00 × 10⁻⁴ = 5,0 × 10⁻⁵ mol de MnO₄⁻ en excès : le mélange est violet.",
                "Réponse : VE = 10,0 mL ; avant l'équivalence, MnO₄⁻ est limitant et le mélange reste incolore ; après, Fe²⁺ est limitant et l'excès de MnO₄⁻ colore le mélange en violet.",
              ],
            },
            {
              level: 3,
              statement: "On veut vérifier l'indication d'un comprimé de « vitamine C 500 », censé contenir 500 mg d'acide ascorbique C₆H₈O₆. On dissout le comprimé dans de l'eau et on complète à 200,0 mL dans une fiole jaugée (solution S). On titre une prise d'essai V₁ = 10,0 mL de S par une solution de diiode à C₂ = 1,00 × 10⁻² mol·L⁻¹, en présence d'empois d'amidon. L'équivalence est obtenue pour VE = 14,0 mL (données fictives). Couples : I₂/I⁻ et C₆H₆O₆/C₆H₈O₆. Donnée : M(C₆H₈O₆) = 176,0 g·mol⁻¹. 1. Écrire les demi-équations, puis l'équation de la réaction support du titrage. 2. Expliquer comment l'équivalence est repérée. 3. Calculer la quantité d'acide ascorbique dans la prise d'essai, puis dans le comprimé. 4. En déduire la masse d'acide ascorbique du comprimé et calculer l'écart relatif avec la valeur annoncée. Conclure.",
              hint: "Ici, c'est le réactif titrant (le diiode) qui est coloré : il s'accumule après l'équivalence. Attention : la prise d'essai ne représente que 10,0 mL des 200,0 mL de la solution S.",
              solution: [
                "1. I₂ + 2 e⁻ = 2 I⁻ ; C₆H₆O₆ + 2 H⁺ + 2 e⁻ = C₆H₈O₆. Équation : C₆H₈O₆ + I₂ → C₆H₆O₆ + 2 I⁻ + 2 H⁺ (charge 0 de chaque côté).",
                "2. Avant l'équivalence, le diiode versé est consommé par l'acide ascorbique : la solution reste incolore. Après l'équivalence, le diiode en excès forme avec l'empois d'amidon une teinte bleu foncé : l'équivalence est repérée par l'apparition d'une teinte bleue persistante.",
                "3. À l'équivalence : n₀(C₆H₈O₆) ÷ 1 = nE(I₂) ÷ 1 = C₂ × VE = 1,00 × 10⁻² × 14,0 × 10⁻³ = 1,40 × 10⁻⁴ mol dans la prise d'essai.",
                "Le comprimé est dissous dans 200,0 mL, soit 20 fois le volume de la prise d'essai : n(comprimé) = 20 × 1,40 × 10⁻⁴ = 2,80 × 10⁻³ mol.",
                "4. m = n × M = 2,80 × 10⁻³ × 176,0 ≈ 0,493 g, soit 493 mg. Écart relatif : |493 - 500| ÷ 500 ≈ 0,014, soit 1,4 %.",
                "Réponse : le comprimé contient environ 493 mg d'acide ascorbique ; l'écart de 1,4 % avec la valeur annoncée est faible : l'indication « 500 mg » est vérifiée, aux incertitudes de mesure près.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un titrage avec suivi colorimétrique.",
            items: [
              "Rincer la burette avec la solution titrante, la remplir et ajuster le zéro",
              "Prélever la prise d'essai à la pipette jaugée et la verser dans le bécher",
              "Placer le bécher sous la burette et lancer l'agitation magnétique",
              "Faire un titrage rapide, millilitre par millilitre, pour encadrer VE",
              "Refaire un titrage précis, goutte à goutte à l'approche de l'équivalence",
              "Relever VE à la goutte qui provoque le changement de couleur",
              "Calculer la quantité titrée avec la relation à l'équivalence",
            ],
          },
          quiz: [
            {
              q: "Avant l'équivalence d'un titrage, le réactif limitant est :",
              options: ["l'espèce titrée placée dans le bécher", "le réactif titrant versé", "le solvant de la solution titrée", "aucun des deux réactifs"],
              answer: 1,
              why: "Le réactif titrant est consommé dès qu'il est versé : il est limitant jusqu'à l'équivalence, puis l'espèce titrée le devient.",
            },
            {
              q: "Pour la réaction 2 A + B → produits (A titré, B titrant), la relation à l'équivalence est :",
              options: ["n₀(A) = nE(B)", "2 n₀(A) = nE(B)", "n₀(A) ÷ 2 = nE(B)", "n₀(A) = nE(B) ÷ 2"],
              answer: 2,
              why: "On divise chaque quantité par son nombre stœchiométrique : n₀(A) ÷ 2 = nE(B) ÷ 1.",
            },
            {
              q: "On titre des ions Fe²⁺ incolores par des ions MnO₄⁻ violets. L'équivalence est repérée par :",
              options: ["la persistance d'une teinte violette", "la disparition de la teinte violette", "un dégagement gazeux", "l'apparition d'un précipité blanc"],
              answer: 0,
              why: "Après l'équivalence, les ions MnO₄⁻ ne sont plus consommés : leur couleur persiste dans le bécher.",
            },
            {
              q: "Quelle qualité n'est pas exigée de la réaction support d'un titrage ?",
              options: ["Être totale", "Être rapide", "Être unique (sans réaction parasite)", "Être exothermique"],
              answer: 3,
              why: "La réaction doit être totale, rapide et unique ; dégager de la chaleur n'est pas une condition.",
            },
            {
              q: "On titre 10,0 mL de diiode par du thiosulfate à 0,20 mol·L⁻¹ (I₂ + 2 S₂O₃²⁻ → 2 I⁻ + S₄O₆²⁻) ; VE = 5,0 mL. La concentration en diiode vaut :",
              options: ["0,20 mol·L⁻¹", "0,100 mol·L⁻¹", "0,400 mol·L⁻¹", "0,050 mol·L⁻¹"],
              answer: 3,
              why: "nE = 0,20 × 5,0 × 10⁻³ = 1,0 × 10⁻³ mol ; n(I₂) = nE ÷ 2 = 5,0 × 10⁻⁴ mol ; C = 5,0 × 10⁻⁴ ÷ 0,0100 = 0,050 mol·L⁻¹.",
            },
          ],
          trap: "Écrire n₀(A) = nE(B) sans tenir compte des nombres stœchiométriques, ou les placer à l'envers : à l'équivalence, chaque quantité est divisée par son propre nombre stœchiométrique.",
          method: "Pour exploiter un titrage, écrivez dans l'ordre : l'équation support, la relation à l'équivalence avec les nombres stœchiométriques, nE = C₂ × VE, puis la quantité ou la concentration cherchée. Vérifiez la vraisemblance : un VE de quelques millilitres à une vingtaine de millilitres est habituel pour une burette de 25 mL.",
        },
      ],
    },
    /* ================================================================== */
    /* DE LA STRUCTURE DES ENTITÉS AUX PROPRIÉTÉS DE LA MATIÈRE             */
    /* ================================================================== */
    {
      id: 'structure-entites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "schema-de-lewis",
          title: "Schéma de Lewis d’une molécule ou d’un ion",
          minutes: 35,
          objectives: [
            "Déterminer le nombre d'électrons de valence d'un atome à partir de sa position dans le tableau périodique.",
            "Établir le schéma de Lewis de molécules et d'ions mono ou polyatomiques (O₂, H₂, N₂, H₂O, CO₂, NH₃, CH₄, HCl, H⁺, H₃O⁺, Na⁺, NH₄⁺, Cl⁻, OH⁻, O²⁻).",
            "Interpréter un schéma de Lewis à l'aide des règles du duet et de l'octet, et repérer une lacune électronique.",
          ],
          course: [
            {
              heading: "Électrons de valence et règles de stabilité",
              paragraphs: [
                "Les électrons de valence d'un atome sont les électrons de sa couche externe, celle de plus grand numéro dans sa configuration électronique. Ce sont eux qui participent aux liaisons chimiques. Pour les éléments des trois premières périodes, leur nombre se lit dans le tableau périodique : 1 pour la colonne 1, 2 pour la colonne 2, puis 3, 4, 5, 6, 7 et 8 pour les colonnes 13 à 18. Ainsi H en a 1, C en a 4, N en a 5, O en a 6 (configuration 1s² 2s² 2p⁴), Cl en a 7.",
                "Les gaz nobles (colonne 18) sont chimiquement très stables : l'hélium a 2 électrons sur sa couche externe (un duet), les autres en ont 8 (un octet). Les autres atomes tendent à acquérir cette structure, soit en formant des ions (Na donne Na⁺, Cl donne Cl⁻, O donne O²⁻), soit en mettant des électrons en commun dans des liaisons covalentes.",
              ],
              box: { label: "Règle", text: "Règle du duet : l'atome d'hydrogène s'entoure de 2 électrons. Règle de l'octet : les atomes C, N, O, F, Cl... s'entourent de 8 électrons, soit 4 doublets (liants ou non liants)." },
            },
            {
              heading: "Liaisons covalentes et doublets non liants",
              paragraphs: [
                "Une liaison covalente est la mise en commun de deux électrons, un doublet liant, entre deux atomes ; on la représente par un trait entre les symboles. Deux atomes peuvent partager deux doublets (double liaison, notée =) ou trois doublets (triple liaison, notée ≡). Les doublets d'électrons de valence qui n'appartiennent qu'à un seul atome sont des doublets non liants ; on les représente par un trait placé autour du symbole.",
                "Pour respecter le duet ou l'octet dans une molécule neutre, un atome forme habituellement autant de liaisons qu'il lui manque d'électrons : H forme 1 liaison, O en forme 2, N en forme 3, C en forme 4, Cl en forme 1. Exemples : la molécule d'eau H-O-H, avec deux doublets non liants sur l'oxygène ; l'ammoniac NH₃, avec trois liaisons N-H et un doublet non liant sur l'azote ; le méthane CH₄, avec quatre liaisons C-H et aucun doublet non liant.",
                "Pour un ion monoatomique, le schéma de Lewis montre les doublets de valence et la charge : l'ion chlorure Cl⁻ porte quatre doublets non liants (octet) et la charge -, l'ion oxyde O²⁻ quatre doublets non liants et la charge 2-, l'ion sodium Na⁺ a perdu son unique électron de valence : il a la structure électronique du néon (1s² 2s² 2p⁶) et son schéma de Lewis se réduit au symbole Na portant la charge +.",
              ],
            },
            {
              heading: "La méthode pour établir un schéma de Lewis",
              paragraphs: [
                "1) Compter le nombre total d'électrons de valence de l'entité, en ajoutant un électron par charge négative et en retirant un électron par charge positive. 2) En déduire le nombre de doublets (division par 2). 3) Disposer les atomes : l'hydrogène est toujours en bout de chaîne, l'atome central est souvent celui qui forme le plus de liaisons. 4) Placer les doublets liants, puis répartir les doublets restants en doublets non liants pour compléter les octets. 5) Si un atome n'a pas son octet, transformer un doublet non liant voisin en doublet liant (liaison multiple). 6) Vérifier le nombre total de doublets et les règles du duet et de l'octet.",
                "Exemple du diazote N₂ : 2 × 5 = 10 électrons, soit 5 doublets. Avec une simple liaison, chaque N devrait porter 3 doublets non liants, ce qui ferait 7 doublets : trop. La solution est une triple liaison N≡N, avec un doublet non liant sur chaque atome : 3 + 2 = 5 doublets, et chaque azote est bien entouré de 4 doublets. De même, O₂ (12 électrons, 6 doublets) s'écrit O=O avec deux doublets non liants sur chaque oxygène.",
              ],
              box: { label: "Méthode", text: "Total des électrons de valence (± charge), nombre de doublets, squelette (H en bout de chaîne), doublets liants, doublets non liants, liaisons multiples si un octet manque, vérification finale." },
            },
            {
              heading: "Ions polyatomiques et charge portée par un atome",
              paragraphs: [
                "Dans un ion polyatomique, la charge est attribuée à un atome. Pour la localiser, on compare le nombre d'électrons de valence de l'atome isolé au nombre d'électrons qui lui reviennent dans l'entité (tous les électrons de ses doublets non liants, plus un électron par liaison). S'il lui en revient un de moins, il porte la charge + ; un de plus, la charge -.",
                "Ion oxonium H₃O⁺ : 6 + 3 × 1 - 1 = 8 électrons, soit 4 doublets : trois liaisons O-H et un doublet non liant sur O. Il revient à l'oxygène 2 + 3 = 5 électrons au lieu de 6 : il porte la charge +. Ion ammonium NH₄⁺ : 5 + 4 - 1 = 8 électrons, quatre liaisons N-H, la charge + sur l'azote. Ion hydroxyde OH⁻ : 6 + 1 + 1 = 8 électrons, une liaison O-H et trois doublets non liants sur O, qui porte la charge -.",
              ],
              box: { label: "Repère", text: "Charge d'un atome dans l'entité = électrons de valence de l'atome isolé - (électrons des doublets non liants + nombre de liaisons). La somme des charges des atomes est égale à la charge de l'ion." },
            },
            {
              heading: "La lacune électronique",
              paragraphs: [
                "Certains atomes, dans une entité, sont entourés de moins de 8 électrons (ou de moins de 2 pour l'hydrogène) : il leur manque un ou plusieurs doublets. On dit qu'ils présentent une lacune électronique, représentée par un petit rectangle vide à côté du symbole. Exemple : dans le borane BH₃, le bore (3 électrons de valence) forme trois liaisons B-H et n'est entouré que de 6 électrons : il présente une lacune. L'ion H⁺, qui n'a aucun électron, présente aussi une lacune.",
                "Une lacune explique une réactivité : l'entité lacunaire peut accepter un doublet d'électrons venant d'une autre entité. Ainsi, un doublet non liant de l'oxygène de l'eau comble la lacune de l'ion H⁺ : H₂O + H⁺ → H₃O⁺. De même, NH₃ + H⁺ → NH₄⁺. Ce type de mécanisme sera très utile en chimie organique.",
              ],
              box: { label: "Définition", text: "Lacune électronique : absence d'un doublet autour d'un atome qui n'a pas son octet (ou son duet). On la représente par un rectangle vide. L'entité peut alors accepter un doublet d'électrons." },
            },
          ],
          keyPoints: [
            "Électrons de valence (périodes 1 à 3) : 1 ou 2 pour les colonnes 1 et 2, de 3 à 8 pour les colonnes 13 à 18.",
            "Duet pour H, octet pour C, N, O, Cl... : H forme 1 liaison, O 2, N 3, C 4, Cl 1.",
            "Nombre de doublets = (total des électrons de valence ± charge) ÷ 2.",
            "Liaisons multiples quand l'octet ne peut pas être atteint autrement : O=C=O, N≡N, O=O.",
            "Dans un ion polyatomique, la charge est portée par l'atome qui a un électron de moins ou de plus que l'atome isolé.",
            "Lacune électronique : doublet manquant (rectangle vide), comme dans BH₃ ou H⁺.",
          ],
          example: {
            statement: "Établir le schéma de Lewis de la molécule de dioxyde de carbone CO₂, dont l'atome de carbone est central. Données : C (Z = 6) et O (Z = 8).",
            solution: [
              "Configurations : C : 1s² 2s² 2p², soit 4 électrons de valence ; O : 1s² 2s² 2p⁴, soit 6 électrons de valence.",
              "Total : 4 + 2 × 6 = 16 électrons, soit 8 doublets.",
              "Squelette O-C-O avec deux simples liaisons (2 doublets liants) ; on complète les octets des oxygènes avec 3 doublets non liants chacun : 2 + 6 = 8 doublets. Mais le carbone n'est alors entouré que de 4 électrons.",
              "On transforme un doublet non liant de chaque oxygène en doublet liant : O=C=O. Chaque oxygène porte 2 doublets non liants.",
              "Vérification : 4 doublets liants + 4 doublets non liants = 8 doublets ; C est entouré de 4 doublets (8 électrons), chaque O de 2 doublets liants et 2 non liants (8 électrons).",
              "Réponse : O=C=O, avec deux doublets non liants sur chaque atome d'oxygène et aucun sur le carbone.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données : H (Z = 1), C (Z = 6), N (Z = 7), O (Z = 8), Cl (Z = 17). 1. Donner le nombre d'électrons de valence de chaque atome et le nombre de liaisons covalentes qu'il forme habituellement. 2. Établir les schémas de Lewis des molécules CH₄, NH₃, H₂O et HCl, en indiquant pour chacune le nombre de doublets liants et non liants.",
              hint: "Écrivez la configuration électronique de chaque atome et comptez les électrons de la dernière couche. Il manque à chaque atome autant d'électrons qu'il forme de liaisons pour atteindre le duet ou l'octet.",
              solution: [
                "1. H : 1s¹, 1 électron de valence, 1 liaison. C : 1s² 2s² 2p², 4 électrons, 4 liaisons. N : 1s² 2s² 2p³, 5 électrons, 3 liaisons. O : 1s² 2s² 2p⁴, 6 électrons, 2 liaisons. Cl : 1s² 2s² 2p⁶ 3s² 3p⁵, 7 électrons, 1 liaison.",
                "2. CH₄ : 4 + 4 = 8 électrons, 4 doublets : quatre liaisons C-H, aucun doublet non liant.",
                "NH₃ : 5 + 3 = 8 électrons, 4 doublets : trois liaisons N-H et un doublet non liant sur N.",
                "H₂O : 6 + 2 = 8 électrons, 4 doublets : deux liaisons O-H et deux doublets non liants sur O.",
                "HCl : 1 + 7 = 8 électrons, 4 doublets : une liaison H-Cl et trois doublets non liants sur Cl.",
                "Réponse : dans les quatre molécules, l'atome autre que H est entouré de 4 doublets (octet) et chaque H d'un doublet (duet).",
              ],
            },
            {
              level: 2,
              statement: "Établir le schéma de Lewis des molécules suivantes, en justifiant la présence éventuelle de liaisons multiples : a) le dioxygène O₂ ; b) le cyanure d'hydrogène HCN (enchaînement H, C, N) ; c) le méthanal CH₂O (le carbone est central, lié aux deux H et à O).",
              hint: "Commencez par compter les doublets. Si, après avoir placé des liaisons simples et complété les octets des atomes extérieurs, un atome central n'a pas son octet, utilisez des doublets non liants voisins pour former des liaisons multiples.",
              solution: [
                "a) O₂ : 12 électrons, 6 doublets. Avec une liaison simple, il faudrait 1 + 3 + 3 = 7 doublets pour donner l'octet aux deux O : trop. On forme une double liaison O=O avec deux doublets non liants sur chaque O : 2 + 4 = 6 doublets.",
                "b) HCN : 1 + 4 + 5 = 10 électrons, 5 doublets. H-C≡N : une liaison C-H, une triple liaison C≡N et un doublet non liant sur N, soit 1 + 3 + 1 = 5 doublets. C est entouré de 4 doublets liants, N de 3 liants et 1 non liant.",
                "c) CH₂O : 2 + 4 + 6 = 12 électrons, 6 doublets. Deux liaisons C-H, une double liaison C=O et deux doublets non liants sur O : 2 + 2 + 2 = 6 doublets. C a son octet (4 doublets liants), O aussi (2 liants, 2 non liants).",
                "Réponse : O=O ; H-C≡N ; méthanal avec C=O et deux liaisons C-H. Les liaisons multiples sont imposées par le nombre limité de doublets et la règle de l'octet.",
              ],
            },
            {
              level: 3,
              statement: "Données : H (Z = 1), B (Z = 5), N (Z = 7), O (Z = 8), F (Z = 9). 1. Établir le schéma de Lewis de l'ion oxonium H₃O⁺, de l'ion ammonium NH₄⁺ et de l'ion hydroxyde OH⁻, en précisant sur quel atome se trouve la charge. 2. Établir le schéma de Lewis du trifluorure de bore BF₃ (bore central). Le bore respecte-t-il la règle de l'octet ? Comment le représente-t-on ? 3. Le trifluorure de bore réagit avec l'ammoniac NH₃ pour former une seule entité, de formule H₃NBF₃, dans laquelle l'azote est lié au bore. Proposer une interprétation à l'aide des schémas de Lewis.",
              hint: "Pour un cation, retirez un électron par charge positive ; pour un anion, ajoutez-en un par charge négative. Pour localiser la charge, comptez les électrons qui reviennent à l'atome (doublets non liants entiers plus un électron par liaison).",
              solution: [
                "1. H₃O⁺ : 6 + 3 - 1 = 8 électrons, 4 doublets : trois liaisons O-H et un doublet non liant sur O. Il revient à O 2 + 3 = 5 électrons (6 pour l'atome isolé) : la charge + est sur l'oxygène.",
                "NH₄⁺ : 5 + 4 - 1 = 8 électrons, 4 doublets : quatre liaisons N-H, aucun doublet non liant. Il revient à N 4 électrons (5 pour l'atome isolé) : la charge + est sur l'azote.",
                "OH⁻ : 6 + 1 + 1 = 8 électrons, 4 doublets : une liaison O-H et trois doublets non liants sur O. Il revient à O 6 + 1 = 7 électrons : la charge - est sur l'oxygène.",
                "2. BF₃ : 3 + 3 × 7 = 24 électrons, 12 doublets : trois liaisons B-F et trois doublets non liants sur chaque F (3 + 9 = 12). Le bore n'est entouré que de 3 doublets, soit 6 électrons : il ne respecte pas l'octet et présente une lacune électronique, représentée par un rectangle vide.",
                "3. L'azote de NH₃ possède un doublet non liant ; le bore de BF₃ possède une lacune. Le doublet non liant de l'azote vient combler la lacune du bore en formant une liaison N-B : on obtient H₃N-BF₃, où le bore est désormais entouré de 4 doublets.",
                "Réponse : charge + sur O dans H₃O⁺ et sur N dans NH₄⁺, charge - sur O dans OH⁻ ; BF₃ présente une lacune sur le bore, comblée par le doublet non liant de l'azote de NH₃.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque entité à la description de son schéma de Lewis.",
            pairs: [
              { left: "H₂O", right: "2 doublets liants, 2 doublets non liants sur l'oxygène" },
              { left: "NH₃", right: "3 doublets liants, 1 doublet non liant sur l'azote" },
              { left: "CO₂", right: "2 doubles liaisons, 2 doublets non liants sur chaque oxygène" },
              { left: "N₂", right: "1 triple liaison, 1 doublet non liant sur chaque azote" },
              { left: "CH₄", right: "4 doublets liants, aucun doublet non liant" },
              { left: "OH⁻", right: "1 doublet liant, 3 doublets non liants et la charge - sur l'oxygène" },
            ],
          },
          quiz: [
            {
              q: "Combien d'électrons de valence possède l'atome d'azote N (Z = 7) ?",
              options: ["3", "5", "7", "2"],
              answer: 1,
              why: "Configuration 1s² 2s² 2p³ : la couche externe (n = 2) contient 2 + 3 = 5 électrons.",
            },
            {
              q: "Combien de doublets compte le schéma de Lewis de l'ion ammonium NH₄⁺ ?",
              options: ["5", "4,5", "3", "4"],
              answer: 3,
              why: "5 + 4 - 1 = 8 électrons, soit 4 doublets : les quatre liaisons N-H.",
            },
            {
              q: "Dans la molécule de diazote, les deux atomes sont liés par :",
              options: ["une triple liaison", "une simple liaison", "une double liaison", "aucune liaison covalente"],
              answer: 0,
              why: "N₂ compte 5 doublets : seule la triple liaison N≡N, avec un doublet non liant sur chaque N, donne l'octet aux deux atomes.",
            },
            {
              q: "Quelle entité présente une lacune électronique ?",
              options: ["H₂O", "NH₃", "BH₃", "CH₄"],
              answer: 2,
              why: "Dans BH₃, le bore n'est entouré que de 3 doublets liants, soit 6 électrons : il lui manque un doublet.",
            },
            {
              q: "Dans l'ion oxonium H₃O⁺, l'oxygène porte :",
              options: ["deux doublets non liants", "un doublet non liant et la charge +", "trois doublets non liants", "un doublet non liant et la charge -"],
              answer: 1,
              why: "H₃O⁺ compte 4 doublets : trois liaisons O-H et un doublet non liant ; il revient 5 électrons à O au lieu de 6, d'où la charge +.",
            },
          ],
          trap: "Oublier de tenir compte de la charge d'un ion dans le décompte des électrons (retirer un électron par charge +, en ajouter un par charge -), ou compter les doublets non liants comme des électrons isolés, ce qui fausse le total.",
          method: "Commencez toujours par écrire le nombre total de doublets disponibles : c'est votre budget. À la fin, recomptez les doublets du schéma (liants et non liants) et vérifiez que chaque atome autre que H est entouré de 4 doublets, sauf lacune clairement signalée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "geometrie-polarite",
          title: "Géométrie des entités, électronégativité et polarité",
          minutes: 35,
          objectives: [
            "Interpréter la géométrie d'une entité à partir de son schéma de Lewis.",
            "Situer l'électronégativité d'un atome à l'aide du tableau périodique et déterminer le caractère polarisé d'une liaison.",
            "Déterminer le caractère polaire ou apolaire d'une entité moléculaire à partir de sa géométrie et de la polarisation de ses liaisons.",
          ],
          course: [
            {
              heading: "Prévoir la géométrie à partir du schéma de Lewis",
              paragraphs: [
                "Les doublets d'électrons qui entourent un atome central, liants ou non liants, portent des charges négatives : ils se repoussent et s'orientent dans l'espace de façon à être le plus éloignés possible les uns des autres. Une liaison double ou triple compte comme une seule direction. La géométrie de l'entité est décrite par la position des atomes (et non des doublets non liants, qui sont pourtant pris en compte dans la répulsion).",
                "Quatre directions autour de l'atome central : elles pointent vers les sommets d'un tétraèdre. Si les quatre doublets sont liants, l'entité est tétraédrique, avec des angles de 109,5° (CH₄, NH₄⁺). Avec trois doublets liants et un non liant, elle est pyramidale (pyramide à base triangulaire, NH₃, angle d'environ 107°). Avec deux doublets liants et deux non liants, elle est coudée (H₂O, angle d'environ 104,5°) : les doublets non liants, plus encombrants, resserrent les angles.",
                "Trois directions : l'entité est plane triangulaire, avec des angles d'environ 120°, comme le méthanal H₂C=O. Deux directions : l'entité est linéaire, angle de 180°, comme le dioxyde de carbone O=C=O ou le cyanure d'hydrogène H-C≡N. On vérifie ces géométries avec des modèles moléculaires ou un logiciel de visualisation.",
              ],
              box: { label: "À retenir", text: "4 doublets liants : tétraédrique (CH₄). 3 liants + 1 non liant : pyramidale (NH₃). 2 liants + 2 non liants : coudée (H₂O). 3 directions : plane triangulaire (H₂C=O). 2 directions : linéaire (CO₂)." },
            },
            {
              heading: "L'électronégativité",
              paragraphs: [
                "L'électronégativité χ d'un élément traduit l'aptitude de son atome à attirer vers lui les électrons d'une liaison covalente qu'il partage avec un autre atome. L'échelle la plus utilisée a été proposée par Linus Pauling ; elle est sans unité. Quelques valeurs : H 2,20 ; C 2,55 ; N 3,04 ; O 3,44 ; F 3,98 ; Cl 3,16 ; Na 0,93.",
                "Dans le tableau périodique, l'électronégativité augmente de la gauche vers la droite le long d'une période, et du bas vers le haut dans une colonne (les gaz nobles mis à part). Le fluor, en haut à droite, est l'élément le plus électronégatif ; les métaux alcalins, à gauche, sont très peu électronégatifs.",
              ],
              box: { label: "Repère", text: "L'électronégativité augmente vers la droite d'une période et vers le haut d'une colonne. Ordre à connaître : F > O > Cl > N > C > H." },
            },
            {
              heading: "Liaison polarisée",
              paragraphs: [
                "Si deux atomes liés ont des électronégativités différentes, le doublet liant est plus proche de l'atome le plus électronégatif : la liaison est polarisée. L'atome le plus électronégatif porte une charge partielle négative δ-, l'autre une charge partielle positive δ+. Exemple : dans la liaison O-H, χ(O) - χ(H) = 3,44 - 2,20 = 1,24 : la liaison est polarisée, avec δ- sur O et δ+ sur H.",
                "Par convention, on considère qu'une liaison est polarisée lorsque la différence d'électronégativité entre les deux atomes est supérieure ou égale à 0,4. La liaison C-H (2,55 - 2,20 = 0,35) est ainsi considérée comme non polarisée, tout comme une liaison entre deux atomes identiques (H-H, C-C, Cl-Cl). Lorsque la différence devient très grande, comme entre Na et Cl, on passe à une liaison ionique : l'électron est complètement transféré.",
              ],
              box: { label: "Règle", text: "Liaison A-B polarisée si |χ(A) - χ(B)| ≥ 0,4 : charge partielle δ- sur l'atome le plus électronégatif, δ+ sur l'autre. C-H et les liaisons entre atomes identiques sont non polarisées." },
            },
            {
              heading: "Entité polaire ou apolaire",
              paragraphs: [
                "Une entité est polaire si le barycentre G+ des charges partielles positives ne coïncide pas avec le barycentre G- des charges partielles négatives. Sinon, elle est apolaire. Une entité sans liaison polarisée est forcément apolaire (H₂, CH₄). Une entité qui possède des liaisons polarisées peut être apolaire si sa géométrie est symétrique : les effets des liaisons se compensent.",
                "Le dioxyde de carbone a deux liaisons C=O polarisées, mais il est linéaire : G- est au milieu des deux oxygènes, c'est-à-dire sur le carbone, confondu avec G+. CO₂ est apolaire. L'eau a deux liaisons O-H polarisées et elle est coudée : G- est sur l'oxygène, G+ entre les deux hydrogènes. H₂O est polaire. De même, NH₃ (pyramidale) et HCl sont polaires, alors que le tétrachlorométhane CCl₄, tétraédrique et symétrique, est apolaire.",
                "Expérience classique : un mince filet d'eau est dévié lorsqu'on en approche une règle électrisée par frottement, alors qu'un filet de cyclohexane C₆H₁₂, apolaire, ne l'est pratiquement pas. La polarité des molécules explique aussi, comme vous le verrez, la cohésion des liquides et des solides et la solubilité des espèces.",
              ],
              box: { label: "Méthode", text: "1) Schéma de Lewis. 2) Géométrie. 3) Liaisons polarisées (Δχ ≥ 0,4) et charges partielles. 4) Comparer G+ et G- : distincts, l'entité est polaire ; confondus, elle est apolaire." },
            },
          ],
          keyPoints: [
            "Les doublets autour d'un atome central se repoussent ; les liaisons multiples comptent pour une direction.",
            "Tétraédrique (CH₄, 109,5°), pyramidale (NH₃), coudée (H₂O), plane triangulaire (H₂C=O), linéaire (CO₂).",
            "Électronégativité : aptitude à attirer les électrons d'une liaison ; elle augmente vers la droite et vers le haut du tableau.",
            "Liaison polarisée si Δχ ≥ 0,4 : δ- sur l'atome le plus électronégatif.",
            "Entité polaire si G+ et G- ne coïncident pas : H₂O, NH₃, HCl sont polaires ; CO₂, CH₄, CCl₄ sont apolaires.",
          ],
          example: {
            statement: "Données : χ(H) = 2,20 ; χ(N) = 3,04 ; χ(C) = 2,55 ; χ(O) = 3,44. Déterminer la géométrie et le caractère polaire ou apolaire de l'ammoniac NH₃ et du dioxyde de carbone CO₂.",
            solution: [
              "NH₃, schéma de Lewis : trois liaisons N-H et un doublet non liant sur N, soit 4 directions autour de N. Géométrie : pyramidale à base triangulaire (l'azote au sommet).",
              "Liaison N-H : Δχ = 3,04 - 2,20 = 0,84 ≥ 0,4, liaison polarisée, δ- sur N et δ+ sur chaque H.",
              "G- est sur l'azote, G+ au centre du triangle formé par les trois H : ils ne coïncident pas. NH₃ est polaire.",
              "CO₂, schéma de Lewis : O=C=O, deux directions autour de C. Géométrie : linéaire. Liaison C=O : Δχ = 3,44 - 2,55 = 0,89, polarisée, δ- sur chaque O et δ+ sur C.",
              "G- est au milieu des deux O, donc sur C, où se trouve aussi G+ : ils coïncident. CO₂ est apolaire.",
              "Réponse : NH₃ est pyramidale et polaire ; CO₂ est linéaire et apolaire, bien que ses liaisons soient polarisées.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données : χ(H) = 2,20 ; χ(C) = 2,55 ; χ(N) = 3,04 ; χ(O) = 3,44 ; χ(Cl) = 3,16. Pour chacune des liaisons suivantes, dire si elle est polarisée et, si oui, placer les charges partielles : O-H, C-H, C-O, C-Cl, N-H, C-C, H-Cl.",
              hint: "Calculez la différence d'électronégativité et comparez-la à 0,4. La charge δ- va sur l'atome le plus électronégatif.",
              solution: [
                "O-H : Δχ = 1,24, polarisée, δ- sur O, δ+ sur H. C-H : Δχ = 0,35 < 0,4, non polarisée.",
                "C-O : Δχ = 0,89, polarisée, δ- sur O, δ+ sur C. C-Cl : Δχ = 0,61, polarisée, δ- sur Cl, δ+ sur C.",
                "N-H : Δχ = 0,84, polarisée, δ- sur N, δ+ sur H. C-C : Δχ = 0, non polarisée.",
                "H-Cl : Δχ = 0,96, polarisée, δ- sur Cl, δ+ sur H.",
                "Réponse : seules C-H et C-C ne sont pas polarisées ; dans toutes les autres, δ- est porté par O, N ou Cl.",
              ],
            },
            {
              level: 2,
              statement: "À l'aide de leurs schémas de Lewis, prévoir la géométrie des entités suivantes et indiquer la valeur approximative des angles : CH₄, H₂O, NH₃, CO₂, HCN (H-C≡N) et CH₂O (méthanal, carbone central).",
              hint: "Comptez les directions autour de l'atome central (doublets liants et non liants, une liaison multiple comptant pour une seule direction), puis nommez la figure formée par les atomes seulement.",
              solution: [
                "CH₄ : 4 doublets liants autour de C, géométrie tétraédrique, angles de 109,5°.",
                "H₂O : 2 doublets liants et 2 non liants autour de O, géométrie coudée, angle d'environ 104,5°. NH₃ : 3 liants et 1 non liant autour de N, géométrie pyramidale, angles d'environ 107°.",
                "CO₂ : 2 directions (deux doubles liaisons) autour de C, géométrie linéaire, 180°. HCN : 2 directions (une simple et une triple liaison) autour de C, géométrie linéaire, 180°.",
                "CH₂O : 3 directions (deux liaisons C-H et une double liaison C=O) autour de C, géométrie plane triangulaire, angles d'environ 120°.",
                "Réponse : tétraédrique, coudée, pyramidale, linéaire, linéaire et plane triangulaire.",
              ],
            },
            {
              level: 3,
              statement: "Le dichlorométhane CH₂Cl₂ et le tétrachlorométhane CCl₄ sont deux solvants dont l'atome de carbone est central. Données : χ(H) = 2,20 ; χ(C) = 2,55 ; χ(Cl) = 3,16. 1. Établir le schéma de Lewis de chaque molécule et en déduire leur géométrie. 2. Les liaisons C-H et C-Cl sont-elles polarisées ? 3. Montrer que l'une des molécules est polaire et l'autre apolaire. 4. On approche une règle électrisée d'un mince filet de chacun des deux liquides. Prévoir les observations. 5. Un élève affirme : « une molécule qui contient des liaisons polarisées est toujours polaire ». Discuter cette affirmation.",
              hint: "Les deux molécules ont la même géométrie autour du carbone. La différence vient de la répartition des atomes de chlore : demandez-vous où se trouve le barycentre des charges négatives dans chaque cas.",
              solution: [
                "1. CCl₄ : 4 + 4 × 7 = 32 électrons, 16 doublets : quatre liaisons C-Cl et trois doublets non liants sur chaque Cl. CH₂Cl₂ : 4 + 2 + 2 × 7 = 20 électrons, 10 doublets : deux liaisons C-H, deux liaisons C-Cl, trois doublets non liants sur chaque Cl. Dans les deux cas, 4 doublets liants autour de C : géométrie tétraédrique.",
                "2. C-H : Δχ = 0,35 < 0,4, non polarisée. C-Cl : Δχ = 0,61 ≥ 0,4, polarisée, δ- sur Cl et δ+ sur C.",
                "3. CCl₄ : les quatre Cl, porteurs de δ-, occupent les quatre sommets du tétraèdre ; leur barycentre G- est au centre, sur le carbone, où se trouve G+. CCl₄ est apolaire.",
                "CH₂Cl₂ : seuls deux sommets portent des charges δ- ; G- est situé au milieu des deux Cl, hors du carbone, alors que G+ est sur le carbone. G+ et G- sont distincts : CH₂Cl₂ est polaire.",
                "4. Le filet de dichlorométhane, polaire, est dévié par la règle électrisée ; celui de tétrachlorométhane, apolaire, ne l'est pratiquement pas.",
                "5. L'affirmation est fausse : CCl₄ et CO₂ ont des liaisons polarisées mais sont apolaires, car leur géométrie symétrique fait coïncider G+ et G-. La polarité dépend à la fois des liaisons et de la géométrie.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Géométrie, électronégativité et polarité.",
            statements: [
              { text: "La molécule d'eau est linéaire.", true: false, why: "L'oxygène porte deux doublets non liants en plus des deux liaisons : la molécule est coudée, angle d'environ 104,5°." },
              { text: "Une molécule qui possède des liaisons polarisées peut être apolaire.", true: true, why: "C'est le cas de CO₂ et de CCl₄ : leur géométrie symétrique fait coïncider G+ et G-." },
              { text: "L'électronégativité augmente du haut vers le bas d'une colonne.", true: false, why: "C'est l'inverse : elle augmente du bas vers le haut d'une colonne et de la gauche vers la droite d'une période." },
              { text: "La liaison C-H est considérée comme non polarisée.", true: true, why: "Δχ = 2,55 - 2,20 = 0,35, inférieur au seuil conventionnel de 0,4." },
              { text: "Les doublets non liants n'interviennent pas dans la géométrie d'une molécule.", true: false, why: "Ils repoussent les autres doublets : c'est pourquoi NH₃ est pyramidale et H₂O coudée." },
              { text: "Dans une liaison polarisée, l'atome le plus électronégatif porte une charge partielle δ-.", true: true, why: "Il attire davantage le doublet liant vers lui." },
              { text: "Le méthane CH₄ est une molécule polaire.", true: false, why: "Ses liaisons C-H ne sont pas polarisées et sa géométrie est symétrique : il est apolaire." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la géométrie de la molécule d'ammoniac NH₃ ?",
              options: ["Plane triangulaire", "Coudée", "Pyramidale", "Tétraédrique régulière"],
              answer: 2,
              why: "Trois doublets liants et un doublet non liant autour de N : les atomes forment une pyramide à base triangulaire.",
            },
            {
              q: "Quel est l'élément le plus électronégatif ?",
              options: ["Le fluor", "Le chlore", "L'oxygène", "Le sodium"],
              answer: 0,
              why: "Le fluor, en haut à droite du tableau périodique (gaz nobles exclus), a la plus grande électronégativité (3,98).",
            },
            {
              q: "Une liaison A-B est considérée comme polarisée lorsque :",
              options: ["A et B sont identiques", "A et B sont deux non-métaux", "la liaison est double", "|χ(A) - χ(B)| ≥ 0,4"],
              answer: 3,
              why: "Par convention, une différence d'électronégativité d'au moins 0,4 rend la liaison polarisée.",
            },
            {
              q: "Pourquoi le dioxyde de carbone est-il apolaire ?",
              options: ["Ses liaisons ne sont pas polarisées", "Il est linéaire et ses deux liaisons se compensent", "Il ne contient pas d'hydrogène", "Le carbone est plus électronégatif que l'oxygène"],
              answer: 1,
              why: "Les liaisons C=O sont polarisées, mais la molécule linéaire place G- sur le carbone, confondu avec G+.",
            },
            {
              q: "Laquelle de ces molécules est polaire ?",
              options: ["CH₄", "CO₂", "CCl₄", "H₂O"],
              answer: 3,
              why: "L'eau est coudée : G- est sur l'oxygène et G+ entre les deux hydrogènes, ils ne coïncident pas.",
            },
          ],
          trap: "Conclure qu'une molécule est polaire dès qu'elle contient une liaison polarisée, sans examiner sa géométrie (CO₂ et CCl₄ sont apolaires), ou oublier les doublets non liants en prévoyant la géométrie (H₂O n'est pas linéaire).",
          method: "Pour la polarité, suivez toujours la chaîne : Lewis, géométrie, liaisons polarisées, barycentres G+ et G-. Faites un schéma de la molécule dans l'espace en plaçant les charges partielles : la symétrie, ou son absence, saute alors aux yeux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "cohesion-solides",
          title: "Cohésion des solides ioniques et moléculaires",
          minutes: 35,
          objectives: [
            "Expliquer la cohésion au sein de composés solides ioniques et moléculaires par l'analyse des interactions entre entités.",
            "Identifier les interactions de Van der Waals et les ponts hydrogène qui s'établissent entre des entités moléculaires.",
            "Relier les températures de changement d'état d'espèces chimiques à l'intensité des interactions entre leurs entités.",
          ],
          course: [
            {
              heading: "Qu'est-ce qui fait tenir un solide ?",
              paragraphs: [
                "Un solide est un ensemble d'entités (ions ou molécules) qui restent en contact et gardent des positions à peu près fixes. Lorsque ces entités sont rangées de façon régulière, le solide est cristallin ; sinon, il est amorphe, comme le verre. La cohésion du solide est assurée par des interactions attractives entre ses entités. Toutes ces interactions sont d'origine électrique : elles résultent de l'attraction entre des charges, entières ou partielles, de signes opposés.",
                "Plus ces interactions sont intenses, plus il faut fournir d'énergie pour séparer les entités : la température de fusion (passage solide → liquide) et la température d'ébullition (passage liquide → gaz) sont alors élevées. Comparer des températures de changement d'état permet donc de comparer l'intensité des interactions entre entités.",
                "Il faut bien distinguer deux niveaux. À l'intérieur d'une molécule, les atomes sont unis par des liaisons covalentes, très solides. Entre les molécules s'exercent des interactions intermoléculaires, beaucoup plus faibles. Quand la glace fond ou quand l'eau bout, ce sont les interactions entre molécules qui sont rompues : les molécules H₂O restent intactes, aucune liaison O-H n'est cassée.",
              ],
              box: { label: "Définition", text: "La cohésion d'un solide est assurée par des interactions attractives, d'origine électrique, entre ses entités. Plus elles sont intenses, plus les températures de fusion et d'ébullition de l'espèce sont élevées." },
            },
            {
              heading: "Les solides ioniques",
              paragraphs: [
                "Un solide ionique (ou cristal ionique) est un empilement régulier de cations et d'anions. Il est électriquement neutre : sa formule statistique indique les proportions des ions qui assurent cette neutralité, sans mentionner les charges. Le chlorure de sodium NaCl contient autant d'ions Na⁺ que d'ions Cl⁻ ; le chlorure de calcium CaCl₂ contient deux ions Cl⁻ pour un ion Ca²⁺ ; l'oxyde d'aluminium Al₂O₃ contient deux ions Al³⁺ pour trois ions O²⁻ (2 × 3 = 3 × 2 charges).",
                "La cohésion d'un cristal ionique est due à l'interaction électrostatique entre ions : deux ions de charges opposées s'attirent, deux ions de même signe se repoussent. Dans le cristal, chaque ion est entouré d'ions de signe opposé, plus proches que les ions de même signe : dans le chlorure de sodium, chaque ion Na⁺ a six ions Cl⁻ pour plus proches voisins, et inversement. L'attraction l'emporte sur la répulsion et l'édifice est stable.",
                "Cette interaction est intense : le chlorure de sodium fond à 801 °C. Elle l'est d'autant plus que les charges des ions sont grandes et que les ions sont proches (vous l'étudierez avec la loi de Coulomb) : l'oxyde de magnésium MgO, formé d'ions Mg²⁺ et O²⁻, fond à plus de 2 800 °C. Les solides ioniques sont durs mais cassants, et ne conduisent pas le courant électrique à l'état solide ; fondus ou dissous dans l'eau, ils deviennent conducteurs, car les ions peuvent alors se déplacer.",
              ],
              box: { label: "Propriété", text: "Dans un solide ionique, la cohésion est assurée par l'interaction électrostatique attractive entre cations et anions voisins. Elle est d'autant plus intense que les charges des ions sont élevées et que les ions sont proches." },
            },
            {
              heading: "Les solides moléculaires : les interactions de Van der Waals",
              paragraphs: [
                "Un solide moléculaire est formé de molécules électriquement neutres : le diiode I₂, la glace H₂O, le saccharose ou la carboglace (CO₂ solide). Leur cohésion vient de la répartition des charges dans les molécules. Entre deux molécules polaires, la charge partielle δ+ de l'une attire la charge partielle δ- de l'autre. Entre molécules apolaires, le nuage électronique se déforme sans cesse : il apparaît des dipôles instantanés, qui en font apparaître dans les molécules voisines, et ces dipôles s'attirent.",
                "Ces interactions entre entités polaires ou apolaires sont appelées interactions de Van der Waals. Elles existent entre toutes les molécules, mais elles sont faibles : de l'ordre de quelques kJ·mol⁻¹, contre plusieurs centaines de kJ·mol⁻¹ pour une liaison covalente. C'est pourquoi beaucoup d'espèces moléculaires sont liquides ou gazeuses à température ambiante. Leur intensité augmente avec la taille des molécules (plus d'électrons, une plus grande surface de contact) et avec leur polarité.",
                "Les dihalogènes, tous apolaires, illustrent l'effet de la taille. À 20 °C sous 1 bar, le difluor F₂ et le dichlore Cl₂ sont gazeux, le dibrome Br₂ est liquide et le diiode I₂, la plus grosse de ces molécules, est un solide (cristaux gris-noir à reflets violets). De même, chez les alcanes, la température d'ébullition s'élève avec la longueur de la chaîne : environ -162 °C pour le méthane CH₄, -42 °C pour le propane C₃H₈, -0,5 °C pour le butane C₄H₁₀ et 69 °C pour l'hexane C₆H₁₄.",
              ],
              box: { label: "Définition", text: "Les interactions de Van der Waals sont des interactions attractives faibles entre molécules, polaires ou apolaires, dues à l'attraction entre charges partielles (permanentes ou instantanées). Elles sont d'autant plus intenses que les molécules sont grosses et polaires." },
            },
            {
              heading: "Le pont hydrogène",
              paragraphs: [
                "Lorsqu'un atome d'hydrogène est lié à un atome très électronégatif (azote N, oxygène O ou fluor F), il porte une charge partielle δ+ importante. Il peut alors être attiré par un doublet non liant d'un atome N, O ou F d'une molécule voisine : cette interaction s'appelle un pont hydrogène (on dit aussi liaison hydrogène). On la représente par des pointillés entre H et l'atome qui porte le doublet, les trois atomes concernés étant à peu près alignés.",
                "Le pont hydrogène est plus intense qu'une interaction de Van der Waals (de l'ordre de la dizaine de kJ·mol⁻¹), mais beaucoup moins qu'une liaison covalente. Une molécule d'eau peut en former jusqu'à quatre : deux par ses atomes d'hydrogène, deux par les doublets non liants de son oxygène. Cela explique que l'eau bout à 100 °C, alors que le sulfure d'hydrogène H₂S, de même géométrie mais dont le soufre n'est pas assez électronégatif pour former des ponts hydrogène, bout vers -60 °C.",
                "Autre exemple : l'éthanol CH₃-CH₂-OH et le méthoxyméthane CH₃-O-CH₃ ont la même formule brute C₂H₆O. L'éthanol, qui possède une liaison O-H, forme des ponts hydrogène et bout à 78 °C ; le méthoxyméthane, dont tous les H sont liés à des atomes de carbone, n'en forme pas entre ses molécules et bout vers -24 °C. Dans la glace, les ponts hydrogène imposent un arrangement ouvert des molécules : la glace est moins dense que l'eau liquide, c'est pourquoi elle flotte.",
              ],
              box: { label: "Règle", text: "Un pont hydrogène s'établit entre un atome H lié à N, O ou F (porteur de δ+) et un doublet non liant d'un atome N, O ou F d'une autre entité. Intensité croissante : interaction de Van der Waals < pont hydrogène < liaison covalente." },
            },
          ],
          keyPoints: [
            "Toutes les interactions de cohésion sont d'origine électrique ; plus elles sont intenses, plus les températures de fusion et d'ébullition sont élevées.",
            "Solide ionique : cations et anions alternés, liés par l'interaction électrostatique ; formule statistique neutre (NaCl, CaCl₂, Al₂O₃).",
            "Solide moléculaire : interactions de Van der Waals entre toutes les molécules, plus fortes pour les molécules grosses et polaires.",
            "Pont hydrogène : H lié à N, O ou F attiré par un doublet non liant de N, O ou F d'une autre molécule.",
            "Lors d'un changement d'état d'une espèce moléculaire, seules les interactions entre molécules sont rompues, pas les liaisons covalentes.",
          ],
          example: {
            statement: "L'éthanol CH₃-CH₂-OH et le méthoxyméthane CH₃-O-CH₃ ont la même formule brute C₂H₆O et des molécules de tailles voisines. Sous 1 bar, l'éthanol bout à 78 °C et le méthoxyméthane vers -24 °C. Données : χ(H) = 2,20 ; χ(C) = 2,55 ; χ(O) = 3,44. Expliquer cette différence.",
            solution: [
              "Les deux espèces sont moléculaires : à l'ébullition, on rompt les interactions entre molécules, et non les liaisons covalentes internes.",
              "Les molécules ont la même formule brute et des tailles voisines : leurs interactions de Van der Waals sont comparables. Elles ne suffisent pas à expliquer un écart d'environ 100 °C.",
              "Dans l'éthanol, l'atome H du groupe OH est lié à un oxygène très électronégatif (Δχ = 3,44 - 2,20 = 1,24) : il porte une charge δ+ marquée et peut former un pont hydrogène avec un doublet non liant de l'oxygène d'une molécule voisine.",
              "Dans le méthoxyméthane, tous les atomes H sont liés à des carbones (liaisons C-H non polarisées) : aucun pont hydrogène ne peut s'établir entre deux de ses molécules.",
              "Il faut donc fournir davantage d'énergie pour séparer les molécules d'éthanol.",
              "Réponse : les ponts hydrogène, présents entre molécules d'éthanol et absents entre molécules de méthoxyméthane, expliquent la température d'ébullition bien plus élevée de l'éthanol.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Pour chacun des solides suivants, indiquer s'il est ionique ou moléculaire et nommer le type d'interaction qui assure principalement sa cohésion : le chlorure de potassium KCl, la glace H₂O, le diiode I₂, la carboglace CO₂, le fluorure de calcium. 2. Le fluorure de calcium est formé d'ions calcium Ca²⁺ et d'ions fluorure F⁻ ; l'oxyde d'aluminium est formé d'ions Al³⁺ et O²⁻. Écrire leurs formules statistiques.",
              hint: "Un solide formé à partir d'un métal et d'un non-métal est généralement ionique. Pour les solides moléculaires, cherchez si les molécules possèdent un atome H lié à N, O ou F. Pour la formule statistique, l'ensemble doit être électriquement neutre.",
              solution: [
                "1. KCl : solide ionique (ions K⁺ et Cl⁻), cohésion par interaction électrostatique entre ions.",
                "Glace : solide moléculaire ; les molécules H₂O sont liées par des ponts hydrogène (et par des interactions de Van der Waals).",
                "Diiode et carboglace : solides moléculaires formés de molécules apolaires (I₂ et O=C=O, linéaire) ; cohésion par interactions de Van der Waals.",
                "Fluorure de calcium : solide ionique, cohésion par interaction électrostatique entre ions Ca²⁺ et F⁻.",
                "2. Pour un ion Ca²⁺ (charge +2), il faut deux ions F⁻ : CaF₂. Pour l'oxyde d'aluminium, le plus petit multiple commun de 3 et de 2 est 6 : deux ions Al³⁺ (+6) pour trois ions O²⁻ (-6), soit Al₂O₃.",
                "Réponse : KCl et CaF₂ sont ioniques ; la glace (ponts hydrogène), I₂ et CO₂ (Van der Waals) sont moléculaires ; formules CaF₂ et Al₂O₃.",
              ],
            },
            {
              level: 2,
              statement: "On considère les espèces suivantes : l'eau H₂O, l'ammoniac NH₃, le méthane CH₄, le méthanol CH₃-OH, le méthoxyméthane CH₃-O-CH₃, le fluorure d'hydrogène HF et le chlorométhane CH₃Cl. 1. Lesquelles peuvent former des ponts hydrogène entre deux de leurs molécules ? Justifier. 2. Représenter un pont hydrogène entre deux molécules d'eau, en indiquant les charges partielles. 3. Le méthoxyméthane peut-il former un pont hydrogène avec une molécule d'eau ? Expliquer.",
              hint: "Il faut, d'un côté, un atome H lié à N, O ou F et, de l'autre, un doublet non liant porté par un atome N, O ou F. Les deux conditions peuvent être remplies par deux molécules différentes.",
              solution: [
                "1. H₂O (liaisons O-H, doublets non liants sur O), NH₃ (liaisons N-H, doublet non liant sur N), CH₃-OH (liaison O-H, doublets non liants sur O) et HF (liaison H-F, doublets non liants sur F) peuvent former des ponts hydrogène entre leurs molécules.",
                "CH₄ ne le peut pas : ses H sont liés au carbone et il n'a aucun doublet non liant. CH₃Cl non plus : ses H sont liés au carbone, et le chlore ne fait pas partie des atomes N, O, F. CH₃-O-CH₃ non plus entre ses propres molécules : il a des doublets non liants sur O, mais aucun H lié à O.",
                "2. On dessine deux molécules coudées H-O-H : un atome H (δ+) de la première est relié par des pointillés à un doublet non liant de l'oxygène (δ-) de la seconde, les atomes O-H···O étant alignés.",
                "3. Oui : l'atome d'oxygène du méthoxyméthane porte deux doublets non liants, qui peuvent attirer un atome H (δ+) d'une molécule d'eau. Le pont hydrogène s'établit entre un H de l'eau et l'oxygène du méthoxyméthane.",
                "Réponse : H₂O, NH₃, CH₃OH et HF forment des ponts hydrogène entre leurs molécules ; CH₄, CH₃Cl et CH₃OCH₃ n'en forment pas entre elles, mais CH₃OCH₃ peut en former avec l'eau.",
              ],
            },
            {
              level: 3,
              statement: "Le tableau ci-dessous donne les températures d'ébullition, sous 1 bar, de quelques alcanes et alcools (valeurs arrondies). Alcanes : méthane CH₄ : -162 °C ; éthane C₂H₆ : -89 °C ; propane C₃H₈ : -42 °C ; butane C₄H₁₀ : -0,5 °C. Alcools : méthanol CH₃OH : 65 °C ; éthanol C₂H₅OH : 78 °C ; propan-1-ol C₃H₇OH : 97 °C ; butan-1-ol C₄H₉OH : 118 °C. 1. Décrire l'évolution de la température d'ébullition dans chaque famille quand le nombre d'atomes de carbone augmente, et l'interpréter. 2. Comparer un alcane et l'alcool qui a le même nombre d'atomes de carbone. Interpréter. 3. Préciser l'état physique du butane et de l'éthanol à 20 °C sous 1 bar. Pourquoi le butane des briquets est-il conservé sous pression ? 4. Le pentane C₅H₁₂ bout à 36 °C. Que peut-on prévoir pour la température d'ébullition du pentan-1-ol C₅H₁₁OH ?",
              hint: "Dans une même famille, seule la taille des molécules change : pensez aux interactions de Van der Waals. Entre les deux familles, cherchez quelle interaction supplémentaire permet le groupe OH. Une espèce est gazeuse à 20 °C si sa température d'ébullition est inférieure à 20 °C.",
              solution: [
                "1. Dans chaque famille, la température d'ébullition augmente avec le nombre d'atomes de carbone. Les molécules sont plus grosses (plus d'électrons, surface de contact plus grande) : les interactions de Van der Waals entre elles sont plus intenses, et il faut plus d'énergie pour les séparer.",
                "2. À nombre d'atomes de carbone égal, l'alcool bout à une température beaucoup plus élevée : par exemple 78 °C pour l'éthanol contre -89 °C pour l'éthane. Les molécules d'alcool possèdent un groupe O-H et forment entre elles des ponts hydrogène, plus intenses que les interactions de Van der Waals, alors que les alcanes n'ont que des liaisons C-H et C-C non polarisées.",
                "3. Le butane bout à -0,5 °C, température inférieure à 20 °C : il est gazeux à 20 °C sous 1 bar. L'éthanol bout à 78 °C : il est liquide. Sous pression, le butane peut être maintenu à l'état liquide à température ambiante ; on stocke ainsi beaucoup plus de matière dans un petit volume.",
                "4. Le pentan-1-ol a un atome de carbone de plus que le butan-1-ol : sa température d'ébullition doit être supérieure à 118 °C. Elle doit aussi être bien supérieure à celle du pentane (36 °C) grâce aux ponts hydrogène.",
                "Réponse : les interactions de Van der Waals expliquent la hausse avec la taille, les ponts hydrogène l'écart entre alcools et alcanes ; on prévoit pour le pentan-1-ol une température d'ébullition supérieure à 118 °C.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces espèces de la température d'ébullition la plus basse à la plus élevée, sous 1 bar.",
            items: [
              "Dihydrogène H₂ (petite molécule apolaire)",
              "Méthane CH₄ (molécule apolaire)",
              "Sulfure d'hydrogène H₂S (faiblement polaire, sans pont hydrogène)",
              "Éthanol C₂H₅OH (ponts hydrogène, un seul H lié à O)",
              "Eau H₂O (jusqu'à quatre ponts hydrogène par molécule)",
              "Chlorure de sodium NaCl (solide ionique)",
            ],
          },
          quiz: [
            {
              q: "Quelle interaction assure la cohésion du chlorure de sodium solide ?",
              options: ["Des ponts hydrogène entre ions", "L'interaction électrostatique entre ions", "Des liaisons covalentes entre molécules NaCl", "Des interactions de Van der Waals"],
              answer: 1,
              why: "Le chlorure de sodium est un cristal ionique : les ions Na⁺ et Cl⁻ voisins s'attirent par interaction électrostatique. Il n'existe pas de molécule NaCl.",
            },
            {
              q: "Un pont hydrogène peut s'établir entre :",
              options: ["un H lié à O et un doublet non liant d'un O voisin", "un H lié à C et un doublet non liant d'un Cl voisin", "deux atomes de carbone de molécules voisines", "deux ions de même charge"],
              answer: 0,
              why: "Il faut un atome H lié à N, O ou F, porteur d'une charge δ+ marquée, et un doublet non liant d'un atome N, O ou F d'une autre entité.",
            },
            {
              q: "Lors de la fusion de la glace :",
              options: ["des liaisons covalentes O-H sont rompues", "des ions H⁺ et OH⁻ se forment", "des ponts hydrogène entre molécules sont rompus", "les molécules d'eau se décomposent en H₂ et en O₂"],
              answer: 2,
              why: "Un changement d'état ne rompt que des interactions entre molécules ; les molécules H₂O restent intactes.",
            },
            {
              q: "À 20 °C, le diiode I₂ est solide alors que le dichlore Cl₂ est gazeux. Pourquoi ?",
              options: ["La molécule I₂ est polaire alors que Cl₂ est apolaire", "Le diiode forme des ponts hydrogène entre ses molécules", "Le dichlore est en réalité un composé ionique", "Ses molécules, plus grosses, s'attirent davantage"],
              answer: 3,
              why: "Les deux molécules sont apolaires ; I₂, plus grosse et plus riche en électrons, subit des interactions de Van der Waals plus intenses.",
            },
            {
              q: "Pourquoi l'eau bout-elle à une température bien plus élevée que le sulfure d'hydrogène H₂S ?",
              options: ["La molécule H₂O est plus volumineuse que H₂S", "L'eau forme des ponts hydrogène", "H₂S forme un cristal ionique à basse température", "L'eau est une molécule apolaire"],
              answer: 1,
              why: "L'oxygène, très électronégatif, permet les ponts hydrogène ; le soufre ne le permet pas. H₂S est d'ailleurs plus volumineuse que H₂O.",
            },
          ],
          trap: "Croire qu'un changement d'état d'une espèce moléculaire casse les liaisons covalentes (l'eau qui bout ne se décompose pas en H₂ et O₂), ou attribuer un pont hydrogène à tout atome H, même lié à un carbone.",
          method: "Pour comparer des températures de changement d'état, procédez par étapes : l'espèce est-elle ionique ou moléculaire ? Si elle est moléculaire, peut-elle former des ponts hydrogène (H lié à N, O ou F) ? Sinon, comparez la taille et la polarité des molécules. Concluez toujours en reliant l'intensité des interactions à l'énergie à fournir.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "dissolution-extraction",
          title: "Dissolution, solubilité, miscibilité et extraction",
          minutes: 35,
          objectives: [
            "Expliquer la capacité de l'eau à dissocier une espèce ionique et à solvater les ions, puis modéliser la dissolution par une équation de réaction avec les notations (s) et (aq).",
            "Calculer la concentration des ions dans la solution obtenue par dissolution d'un solide ionique.",
            "Expliquer ou prévoir la solubilité d'une espèce dans un solvant et la miscibilité de deux liquides par l'analyse des interactions entre entités.",
            "Choisir un solvant et interpréter un protocole d'extraction liquide-liquide ; expliquer le caractère amphiphile et les propriétés lavantes d'un savon.",
          ],
          course: [
            {
              heading: "La dissolution d'un solide ionique dans l'eau",
              paragraphs: [
                "L'eau est un solvant polaire : dans chaque molécule coudée, l'oxygène porte une charge partielle δ- et les atomes d'hydrogène une charge partielle δ+. C'est cette polarité qui permet à l'eau de dissoudre de nombreux solides ioniques, comme le chlorure de sodium. La dissolution se déroule en trois étapes, qui ont lieu simultanément.",
                "1) La dissociation : les molécules d'eau s'orientent autour des ions situés à la surface du cristal et affaiblissent l'interaction électrostatique qui les retient ; les ions se détachent du cristal. 2) La solvatation : chaque ion libéré s'entoure de molécules d'eau orientées, l'oxygène (δ-) tourné vers les cations, les hydrogènes (δ+) tournés vers les anions ; lorsque le solvant est l'eau, on parle d'hydratation. 3) La dispersion : les ions hydratés se répartissent dans toute la solution, ce que l'agitation accélère.",
                "Au niveau macroscopique, on modélise la dissolution par une équation de réaction, en précisant l'état physique : (s) pour le solide, (aq) pour les ions hydratés. Pour le chlorure de sodium : NaCl(s) → Na⁺(aq) + Cl⁻(aq). L'eau n'apparaît pas dans l'équation : elle est le solvant. Une espèce moléculaire polaire comme le saccharose se dissout aussi dans l'eau, grâce à des ponts hydrogène avec les molécules d'eau, mais sans dissociation : C₁₂H₂₂O₁₁(s) → C₁₂H₂₂O₁₁(aq).",
              ],
              box: { label: "À retenir", text: "Dissolution d'un solide ionique dans l'eau : dissociation des ions, solvatation (hydratation) par les molécules d'eau polaires, dispersion. Équation : NaCl(s) → Na⁺(aq) + Cl⁻(aq), l'eau solvant n'y figure pas." },
            },
            {
              heading: "Équation de dissolution et concentration des ions",
              paragraphs: [
                "L'équation de dissolution conserve les éléments et les charges ; elle se lit sur la formule statistique du solide. Exemples : CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq) ; Na₂SO₄(s) → 2 Na⁺(aq) + SO₄²⁻(aq) ; Al₂(SO₄)₃(s) → 2 Al³⁺(aq) + 3 SO₄²⁻(aq). Les ions polyatomiques, comme l'ion sulfate SO₄²⁻, restent entiers.",
                "On appelle concentration en soluté apporté C la quantité de solide dissous divisée par le volume de la solution : C = n(solide) ÷ V. Les concentrations des ions s'en déduisent grâce aux nombres stœchiométriques de l'équation. Pour le chlorure de calcium, une mole de solide libère une mole d'ions Ca²⁺ et deux moles d'ions Cl⁻ : [Ca²⁺] = C et [Cl⁻] = 2C.",
                "Exemple : on dissout 2,22 g de chlorure de calcium (M = 111,1 g·mol⁻¹) dans de l'eau pour obtenir 200,0 mL de solution. n = 2,22 ÷ 111,1 ≈ 2,00 × 10⁻² mol, donc C = 2,00 × 10⁻² ÷ 0,2000 = 0,100 mol·L⁻¹. On en déduit [Ca²⁺] = 0,100 mol·L⁻¹ et [Cl⁻] = 0,200 mol·L⁻¹. Vérification : la solution est neutre, car 2 × [Ca²⁺] = 1 × [Cl⁻].",
              ],
              box: { label: "Formule", text: "Concentration en soluté apporté : C = n(solide) ÷ V. Si une mole de solide libère a moles de cations et b moles d'anions, alors [cation] = a × C et [anion] = b × C. Exemple : CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq), donc [Ca²⁺] = C et [Cl⁻] = 2C." },
            },
            {
              heading: "Solubilité et miscibilité",
              paragraphs: [
                "La solubilité s d'une espèce dans un solvant est la masse maximale de cette espèce que l'on peut dissoudre dans un litre de solvant, à une température donnée ; elle s'exprime en g·L⁻¹. Au-delà, le solide ne se dissout plus : la solution est saturée. Le chlorure de sodium a une solubilité d'environ 360 g par litre d'eau à 20 °C ; le diiode, seulement d'environ 0,3 g·L⁻¹ dans l'eau, alors qu'il est très soluble dans le cyclohexane, auquel il donne une teinte violette.",
                "Une espèce se dissout bien dans un solvant lorsque les interactions entre ses entités et celles du solvant sont de même nature et d'intensité comparable : c'est la règle « qui se ressemble s'assemble ». Les espèces ioniques ou polaires se dissolvent bien dans les solvants polaires (eau, éthanol), surtout si elles forment des ponts hydrogène avec eux, comme le sucre ; les espèces apolaires (diiode, graisses) se dissolvent bien dans les solvants apolaires (cyclohexane, heptane).",
                "Deux liquides sont miscibles s'ils forment un mélange homogène, une seule phase. L'eau et l'éthanol, qui forment des ponts hydrogène entre eux, sont miscibles en toutes proportions. L'eau et le cyclohexane ne le sont pas : les molécules d'eau, liées entre elles par des ponts hydrogène, restent ensemble et l'on observe deux phases. Le liquide le moins dense surnage : le cyclohexane (d = 0,78) se place au-dessus de l'eau, le dichlorométhane (d = 1,33) en dessous.",
              ],
              box: { label: "Règle", text: "« Qui se ressemble s'assemble » : une espèce ionique ou polaire est soluble dans un solvant polaire, une espèce apolaire dans un solvant apolaire. Deux liquides non miscibles forment deux phases ; le moins dense est au-dessus." },
            },
            {
              heading: "L'extraction liquide-liquide",
              paragraphs: [
                "Une extraction liquide-liquide consiste à faire passer une espèce dissoute d'un solvant (souvent l'eau) dans un autre solvant, appelé solvant extracteur, dans lequel elle est plus soluble. Le solvant extracteur doit être non miscible avec le solvant initial, et l'espèce à extraire doit y être beaucoup plus soluble. On le choisit aussi, si possible, peu dangereux et facile à évaporer, pour récupérer ensuite l'espèce extraite. L'éthanol, miscible à l'eau, ne convient jamais pour extraire une espèce d'une solution aqueuse.",
                "Protocole avec une ampoule à décanter (robinet fermé) : verser la solution aqueuse puis le solvant extracteur ; boucher, retourner l'ampoule et agiter ; dégazer régulièrement en ouvrant le robinet, ampoule retournée et dirigée vers le fond de la hotte ; replacer l'ampoule sur son support, ôter le bouchon et laisser décanter ; identifier les phases grâce aux densités ; recueillir séparément la phase inférieure, puis la phase supérieure.",
                "Exemple : pour extraire le diiode d'une eau iodée, on utilise le cyclohexane, non miscible à l'eau et dans lequel le diiode est très soluble. Après agitation et décantation, la phase supérieure (le cyclohexane, moins dense que l'eau) est violette : elle contient la quasi-totalité du diiode ; la phase aqueuse inférieure s'est presque décolorée. On évapore ensuite le cyclohexane pour récupérer le diiode.",
              ],
              box: { label: "Méthode", text: "Choix du solvant extracteur : non miscible avec le solvant initial, espèce à extraire beaucoup plus soluble dedans, faible danger, facile à évaporer. Ampoule à décanter : agiter, dégazer, décanter, repérer les phases par leur densité, séparer." },
            },
            {
              heading: "Hydrophile, lipophile, amphiphile : les savons",
              paragraphs: [
                "Une espèce ou une partie d'entité est hydrophile si elle a de l'affinité pour l'eau (partie ionique, polaire, ou capable de former des ponts hydrogène) ; elle est lipophile (ou hydrophobe) si elle a de l'affinité pour les graisses, ce qui est le cas des longues chaînes carbonées apolaires. Une entité qui possède à la fois une partie hydrophile et une partie lipophile est dite amphiphile.",
                "Un savon est un carboxylate de sodium ou de potassium. L'ion carboxylate R-COO⁻ comporte une longue chaîne carbonée R (de 11 à 17 atomes de carbone), lipophile, et un groupe -COO⁻, chargé et hydrophile : il est amphiphile. Exemple : l'ion stéarate C₁₇H₃₅-COO⁻. Dans l'eau, ces ions se placent à la surface, tête dans l'eau et queue dans l'air, et forment des micelles : des amas sphériques où les chaînes se regroupent au centre, les têtes tournées vers l'eau.",
                "Propriété lavante : au contact d'une tache de graisse, les chaînes lipophiles pénètrent dans la graisse, tandis que les têtes hydrophiles restent dans l'eau. La graisse est fragmentée en gouttelettes entourées d'ions carboxylate, dispersées dans l'eau et éliminées au rinçage. Les espèces amphiphiles sont des tensioactifs, présents dans les savons, shampooings, liquides vaisselle et lessives, et dans l'alimentation comme émulsifiants (la lécithine du jaune d'œuf stabilise la mayonnaise).",
              ],
              box: { label: "Définition", text: "Une entité amphiphile possède une partie hydrophile (affinité pour l'eau) et une partie lipophile (affinité pour les graisses). L'ion carboxylate d'un savon, R-COO⁻, a une tête -COO⁻ hydrophile et une longue chaîne R lipophile." },
            },
          ],
          keyPoints: [
            "Dissolution d'un solide ionique : dissociation, solvatation (hydratation) par l'eau polaire, dispersion ; NaCl(s) → Na⁺(aq) + Cl⁻(aq).",
            "Concentration des ions : [ion] = nombre stœchiométrique × C, avec C la concentration en soluté apporté.",
            "Solubilité : masse maximale dissoute par litre de solvant, à une température donnée ; au-delà, la solution est saturée.",
            "« Qui se ressemble s'assemble » : ionique ou polaire dans un solvant polaire, apolaire dans un solvant apolaire.",
            "Liquides non miscibles : deux phases, la moins dense au-dessus.",
            "Solvant extracteur : non miscible avec le solvant initial, espèce beaucoup plus soluble dedans, peu dangereux.",
            "Savon : ion carboxylate amphiphile (tête -COO⁻ hydrophile, chaîne lipophile) ; il disperse les graisses dans l'eau.",
          ],
          example: {
            statement: "On prépare 250,0 mL d'une solution S en dissolvant 3,55 g de sulfate de sodium Na₂SO₄ dans de l'eau distillée. Données : M(Na) = 23,0 g·mol⁻¹ ; M(S) = 32,1 g·mol⁻¹ ; M(O) = 16,0 g·mol⁻¹. 1. Écrire l'équation de dissolution. 2. Calculer la concentration en soluté apporté. 3. En déduire la concentration de chaque ion dans S. 4. Décrire ce qui arrive à un ion Na⁺ du cristal lors de la dissolution.",
            solution: [
              "1. Le solide contient deux ions Na⁺ pour un ion SO₄²⁻ : Na₂SO₄(s) → 2 Na⁺(aq) + SO₄²⁻(aq).",
              "2. M(Na₂SO₄) = 2 × 23,0 + 32,1 + 4 × 16,0 = 142,1 g·mol⁻¹ ; n = m ÷ M = 3,55 ÷ 142,1 ≈ 2,50 × 10⁻² mol ; C = n ÷ V = 2,50 × 10⁻² ÷ 0,2500 = 0,100 mol·L⁻¹.",
              "3. D'après les nombres stœchiométriques : [Na⁺] = 2C = 0,200 mol·L⁻¹ et [SO₄²⁻] = C = 0,100 mol·L⁻¹.",
              "Vérification de la neutralité : 1 × [Na⁺] = 0,200 mol·L⁻¹ et 2 × [SO₄²⁻] = 0,200 mol·L⁻¹, les charges positives et négatives se compensent.",
              "4. Des molécules d'eau orientent leur atome d'oxygène (δ-) vers l'ion Na⁺ et affaiblissent son attraction par les ions sulfate voisins : l'ion se détache (dissociation), reste entouré de molécules d'eau (hydratation), puis se disperse dans la solution.",
              "Réponse : C = 0,100 mol·L⁻¹ ; [Na⁺] = 0,200 mol·L⁻¹ et [SO₄²⁻] = 0,100 mol·L⁻¹.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Écrire l'équation de dissolution dans l'eau des solides ioniques suivants : le chlorure de potassium KCl, le chlorure de magnésium MgCl₂, le phosphate de sodium Na₃PO₄ (ion phosphate PO₄³⁻) et le sulfate de fer(III) Fe₂(SO₄)₃. 2. On prépare une solution de chlorure de magnésium de concentration en soluté apporté C = 5,0 × 10⁻² mol·L⁻¹. Calculer les concentrations des ions Mg²⁺ et Cl⁻.",
              hint: "Lisez la formule statistique : les indices donnent les nombres stœchiométriques des ions. Vérifiez que la charge totale des ions formés est nulle.",
              solution: [
                "1. KCl(s) → K⁺(aq) + Cl⁻(aq).",
                "MgCl₂(s) → Mg²⁺(aq) + 2 Cl⁻(aq).",
                "Na₃PO₄(s) → 3 Na⁺(aq) + PO₄³⁻(aq).",
                "Fe₂(SO₄)₃(s) → 2 Fe³⁺(aq) + 3 SO₄²⁻(aq) (charges : 2 × (+3) + 3 × (-2) = 0).",
                "2. Une mole de MgCl₂ libère une mole d'ions Mg²⁺ et deux moles d'ions Cl⁻ : [Mg²⁺] = C = 5,0 × 10⁻² mol·L⁻¹ et [Cl⁻] = 2C = 1,0 × 10⁻¹ mol·L⁻¹.",
                "Réponse : [Mg²⁺] = 5,0 × 10⁻² mol·L⁻¹ et [Cl⁻] = 0,10 mol·L⁻¹.",
              ],
            },
            {
              level: 2,
              statement: "Dans un tube à essais, on verse 5 mL d'eau et 5 mL de cyclohexane C₆H₁₂ (densité d = 0,78, molécule apolaire). On ajoute un petit cristal de diiode I₂ et un petit cristal de sulfate de cuivre CuSO₄ (solide ionique dont les ions Cu²⁺ hydratés sont bleus), puis on bouche, on agite et on laisse reposer. 1. Combien de phases observe-t-on ? Préciser la nature et la position de chacune. 2. Dans quelle phase se trouve majoritairement le diiode ? le sulfate de cuivre ? Justifier et prévoir la couleur de chaque phase. 3. On recommence en remplaçant le cyclohexane par de l'éthanol. Qu'observe-t-on ? Expliquer.",
              hint: "Appliquez la règle « qui se ressemble s'assemble » à chaque soluté, et comparez les densités pour placer les phases. Pour la question 3, demandez-vous si l'éthanol est miscible à l'eau.",
              solution: [
                "1. L'eau, polaire, et le cyclohexane, apolaire, ne sont pas miscibles : on observe deux phases. Le cyclohexane, moins dense que l'eau (0,78 < 1,00), forme la phase supérieure ; la phase aqueuse est en dessous.",
                "2. Le diiode, apolaire, est très peu soluble dans l'eau et très soluble dans le cyclohexane apolaire : il se trouve majoritairement dans la phase supérieure, qui devient violette.",
                "Le sulfate de cuivre, ionique, se dissout dans l'eau polaire (dissociation et hydratation des ions) et pas dans le cyclohexane : la phase inférieure devient bleue.",
                "3. L'éthanol est miscible à l'eau (ponts hydrogène entre les deux espèces) : on n'observe qu'une seule phase, qui contient à la fois le diiode et les ions du sulfate de cuivre. Les deux solutés ne sont plus séparés.",
                "Réponse : deux phases, cyclohexane violet au-dessus et eau bleue en dessous ; avec l'éthanol, une seule phase. L'éthanol ne permet donc pas de séparer les deux espèces.",
              ],
            },
            {
              level: 3,
              statement: "On souhaite extraire le diiode contenu dans V = 50,0 mL d'une eau iodée de concentration en masse Cm = 0,25 g·L⁻¹. Données (indications simplifiées) : solubilité du diiode dans l'eau : environ 0,3 g·L⁻¹. Éthanol : d = 0,79 ; miscible à l'eau ; diiode très soluble ; inflammable. Cyclohexane : d = 0,78 ; non miscible à l'eau ; diiode très soluble ; inflammable, nocif. Dichlorométhane : d = 1,33 ; non miscible à l'eau ; diiode très soluble ; susceptible de provoquer le cancer. 1. Expliquer pourquoi l'éthanol ne convient pas comme solvant extracteur. 2. Choisir entre le cyclohexane et le dichlorométhane, en justifiant. 3. Décrire le protocole d'extraction avec une ampoule à décanter, puis faire un schéma légendé de l'ampoule après décantation (position et couleur des phases). 4. On utilise 20,0 mL de solvant extracteur et l'on admet que 95 % du diiode passe dans la phase organique (données fictives). Calculer la masse de diiode extraite et sa concentration en masse dans la phase organique. Commenter.",
              hint: "Un solvant extracteur doit d'abord être non miscible au solvant initial. Entre deux solvants qui conviennent, la sécurité départage. La masse initiale de diiode vaut m = Cm × V, avec V en litres.",
              solution: [
                "1. L'éthanol est miscible à l'eau : il formerait une seule phase avec l'eau iodée, et il serait impossible de séparer le diiode de l'eau, même s'il y est très soluble.",
                "2. Le cyclohexane et le dichlorométhane sont tous deux non miscibles à l'eau et le diiode y est très soluble : ils conviennent chimiquement. On choisit le cyclohexane, moins dangereux (le dichlorométhane est susceptible de provoquer le cancer), en travaillant sous la hotte et loin de toute flamme.",
                "3. Robinet fermé, on verse l'eau iodée puis 20,0 mL de cyclohexane dans l'ampoule ; on bouche, on retourne et on agite en dégazant régulièrement (robinet ouvert, ampoule retournée et dirigée vers le fond de la hotte) ; on replace l'ampoule sur son support, on ôte le bouchon et on laisse décanter ; on recueille la phase aqueuse inférieure, puis la phase organique.",
                "Schéma : phase supérieure, le cyclohexane (d = 0,78 < 1), violette car elle contient le diiode ; phase inférieure, aqueuse, presque incolore.",
                "4. Masse initiale : m = Cm × V = 0,25 × 0,0500 = 1,25 × 10⁻² g = 12,5 mg. Masse extraite : 0,95 × 12,5 ≈ 11,9 mg. Concentration en masse dans le cyclohexane : 11,9 × 10⁻³ ÷ 0,0200 ≈ 0,59 g·L⁻¹.",
                "Commentaire : le diiode est plus concentré dans la phase organique (0,59 g·L⁻¹) qu'il ne l'était dans l'eau (0,25 g·L⁻¹), et cette valeur dépasse même sa solubilité dans l'eau : seul un solvant où il est très soluble permet cela. L'extraction a donc transféré et concentré le diiode.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme à sa définition.",
            pairs: [
              { left: "Solvatation", right: "Les ions dissociés s'entourent de molécules de solvant orientées" },
              { left: "Solubilité", right: "Masse maximale d'espèce dissoute par litre de solvant, à une température donnée" },
              { left: "Solution saturée", right: "Solution dans laquelle le soluté ne peut plus se dissoudre" },
              { left: "Liquides miscibles", right: "Liquides qui forment une seule phase quand on les mélange" },
              { left: "Solvant extracteur", right: "Solvant non miscible au solvant initial, où l'espèce est plus soluble" },
              { left: "Entité amphiphile", right: "Entité qui possède une partie hydrophile et une partie lipophile" },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'équation de dissolution du chlorure de calcium CaCl₂ dans l'eau ?",
              options: ["CaCl₂(s) → Ca²⁺(aq) + Cl⁻(aq)", "CaCl₂(s) → Ca²⁺(aq) + 2 Cl²⁻(aq)", "CaCl₂(s) → Ca²⁺(aq) + 2 Cl⁻(aq)", "CaCl₂(s) → Ca⁺(aq) + 2 Cl⁻(aq)"],
              answer: 2,
              why: "Le solide contient deux ions Cl⁻ pour un ion Ca²⁺ : les éléments et les charges sont conservés (+2 - 2 = 0).",
            },
            {
              q: "Une solution de sulfate de sodium Na₂SO₄ a une concentration en soluté apporté de 0,10 mol·L⁻¹. Que vaut [Na⁺] ?",
              options: ["0,10 mol·L⁻¹", "0,050 mol·L⁻¹", "0,30 mol·L⁻¹", "0,20 mol·L⁻¹"],
              answer: 3,
              why: "Na₂SO₄(s) → 2 Na⁺(aq) + SO₄²⁻(aq) : chaque mole de solide libère deux moles d'ions Na⁺, donc [Na⁺] = 2 × 0,10 = 0,20 mol·L⁻¹.",
            },
            {
              q: "Lors de l'hydratation d'un cation, les molécules d'eau tournent vers lui :",
              options: ["leurs atomes d'hydrogène, porteurs de δ+", "leur atome d'oxygène, porteur de δ-", "leurs liaisons O-H, de façon aléatoire"],
              answer: 1,
              why: "Le cation, chargé positivement, attire la charge partielle négative δ- portée par l'oxygène des molécules d'eau.",
            },
            {
              q: "Pour extraire le diiode d'une solution aqueuse, on ne peut pas utiliser l'éthanol car :",
              options: ["il est miscible à l'eau", "le diiode y est insoluble", "il est plus dense que l'eau", "il est totalement apolaire"],
              answer: 0,
              why: "Un solvant extracteur doit former une phase distincte de la solution aqueuse ; l'éthanol se mélange à l'eau en toutes proportions.",
            },
            {
              q: "Dans l'ion carboxylate R-COO⁻ d'un savon, la partie hydrophile est :",
              options: ["la longue chaîne carbonée R", "le groupe carboxylate -COO⁻", "l'ion sodium associé, et lui seul", "aucune, l'ion entier est lipophile"],
              answer: 1,
              why: "Le groupe -COO⁻, chargé, interagit avec l'eau ; la chaîne carbonée apolaire est lipophile. C'est ce double caractère qui rend l'ion amphiphile.",
            },
          ],
          trap: "Choisir comme solvant extracteur un solvant miscible à l'eau, comme l'éthanol, sous prétexte que l'espèce y est très soluble ; ou oublier les nombres stœchiométriques en calculant la concentration des ions ([Cl⁻] = 2C pour CaCl₂, et non C).",
          method: "Pour un choix de solvant, vérifiez les critères dans l'ordre : non-miscibilité avec le solvant initial, solubilité de l'espèce, sécurité. Pour placer les phases, comparez les densités à celle de l'eau (1,00) et faites toujours un schéma légendé de l'ampoule à décanter.",
        },
      ],
    },
  ],
}
