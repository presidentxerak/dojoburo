import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-4e',
  chapters: [
    /* ================================================================== */
    /* CORPS PURS, MÉLANGES ET MASSE VOLUMIQUE                             */
    /* ================================================================== */
    {
      id: 'corps-purs-melanges',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'corps-purs-melanges',
          title: 'Corps purs et mélanges',
          minutes: 30,
          objectives: [
            "Distinguer un corps pur d'un mélange.",
            "Distinguer un mélange homogène d'un mélange hétérogène.",
            "Utiliser une température de changement d'état ou une masse volumique pour reconnaître un corps pur.",
            "Citer la composition de l'air.",
          ],
          course: [
            {
              heading: "Espèce chimique, corps pur et mélange",
              paragraphs: [
                "Toute la matière qui nous entoure est formée d'une ou de plusieurs espèces chimiques. Une espèce chimique est une substance bien précise, qui a toujours les mêmes propriétés : l'eau, le sel (son nom chimique est le chlorure de sodium), le sucre (le saccharose), le dioxygène, le cuivre...",
                "Lorsqu'un échantillon de matière ne contient qu'une seule espèce chimique, on dit que c'est un corps pur. L'eau distillée, le cuivre d'un fil électrique ou le dioxygène d'une bouteille médicale sont des corps purs. Lorsqu'il contient au moins deux espèces chimiques, c'est un mélange : l'eau du robinet (qui contient des sels minéraux dissous), l'air, le jus d'orange ou la vinaigrette sont des mélanges.",
                "Attention au sens du mot « pur » dans la vie courante. Un « pur jus d'orange » est un jus sans sucre ajouté, et une « eau de source pure » est une eau non polluée. Pour le chimiste, ce sont pourtant des mélanges, car ils contiennent de nombreuses espèces chimiques.",
              ],
              box: { label: "Définition", text: "Un corps pur est constitué d'une seule espèce chimique. Un mélange est constitué d'au moins deux espèces chimiques." },
            },
            {
              heading: "Mélanges homogènes et mélanges hétérogènes",
              paragraphs: [
                "Un mélange est homogène lorsqu'on ne peut pas distinguer ses constituants à l'œil nu : l'eau salée, l'eau sucrée, l'eau minérale ou l'air sont des mélanges homogènes. Un mélange est hétérogène lorsqu'on distingue au moins deux constituants : l'eau boueuse, l'eau et l'huile, le jus d'orange avec sa pulpe ou le sable mélangé à du gravier.",
                "Un mélange homogène peut ressembler à un corps pur. Un verre d'eau salée et un verre d'eau distillée ont exactement le même aspect : transparents et incolores. Pour les distinguer, on peut faire évaporer un peu de liquide dans une coupelle. L'eau distillée ne laisse aucune trace, alors que l'eau salée laisse un dépôt blanc de sel.",
              ],
              box: { label: "À retenir", text: "Homogène : un seul aspect à l'œil nu (eau salée, air). Hétérogène : plusieurs constituants visibles (eau et huile, eau boueuse). Un mélange homogène n'est pas un corps pur." },
            },
            {
              heading: "Reconnaître un corps pur",
              paragraphs: [
                "Chaque corps pur possède des propriétés qui lui sont propres, qu'on appelle des constantes physiques : sa température de fusion, sa température d'ébullition et sa masse volumique. Pour l'eau pure, à la pression atmosphérique normale : la fusion a lieu à 0 °C, l'ébullition à 100 °C, et la masse volumique vaut 1,0 g/cm³. Pour l'éthanol (l'alcool), l'ébullition a lieu à 78 °C.",
                "Pendant le changement d'état d'un corps pur, la température reste constante : sur un graphique de la température en fonction du temps, on observe un palier horizontal. Pour un mélange, il n'y a pas de palier net. Par exemple, l'eau de mer commence à geler vers -2 °C, et sa température continue de baisser pendant la solidification.",
                "Pour savoir si un liquide inconnu est un corps pur, on mesure donc une constante physique (température d'ébullition, masse volumique) et on la compare aux valeurs d'un tableau. Si l'on observe un palier et que la valeur correspond à celle d'une espèce connue, on peut conclure.",
              ],
              box: { label: "Propriété", text: "Pendant un changement d'état, la température d'un corps pur reste constante (palier). Les températures de changement d'état et la masse volumique permettent d'identifier un corps pur." },
            },
            {
              heading: "L'air, un mélange de gaz",
              paragraphs: [
                "L'air est un mélange homogène de plusieurs gaz. En volume, il contient environ 78 % de diazote, environ 21 % de dioxygène et environ 1 % d'autres gaz (surtout de l'argon, mais aussi un peu de dioxyde de carbone et de la vapeur d'eau en quantité variable).",
                "Pour retenir ces valeurs, on peut dire que l'air contient environ 4/5 de diazote et 1/5 de dioxygène. Ainsi, dans 100 L d'air, il y a environ 78 L de diazote et 21 L de dioxygène. C'est le dioxygène que nous utilisons pour respirer, et qui permet aux combustions d'avoir lieu.",
              ],
              box: { label: "À retenir", text: "Composition de l'air en volume : environ 78 % de diazote, 21 % de dioxygène et 1 % d'autres gaz." },
            },
          ],
          keyPoints: [
            "Corps pur : une seule espèce chimique. Mélange : au moins deux espèces chimiques.",
            "Mélange homogène : on ne distingue pas ses constituants à l'œil nu. Mélange hétérogène : on les distingue.",
            "Un corps pur a des constantes physiques : températures de fusion et d'ébullition, masse volumique.",
            "Eau pure : fusion à 0 °C, ébullition à 100 °C, masse volumique 1,0 g/cm³.",
            "Pendant un changement d'état, la température d'un corps pur reste constante (palier).",
            "Air : environ 78 % de diazote, 21 % de dioxygène, 1 % d'autres gaz.",
          ],
          example: {
            statement: "On chauffe deux liquides transparents et incolores, A et B, et on relève leur température pendant l'ébullition. Pour A, la température reste égale à 100 °C du début à la fin de l'ébullition. Pour B, la température passe de 101 °C à 104 °C pendant l'ébullition. Lequel de ces liquides peut être de l'eau pure ? Que peut-on dire de l'autre ?",
            solution: [
              "Un corps pur bout à température constante : sa courbe présente un palier.",
              "Pour A, la température reste constante à 100 °C pendant l'ébullition : A se comporte comme un corps pur, et 100 °C est la température d'ébullition de l'eau pure.",
              "Pour B, la température augmente pendant l'ébullition : il n'y a pas de palier, B n'est donc pas un corps pur.",
              "B est un mélange homogène, puisqu'il est transparent et qu'on ne distingue pas ses constituants (ce peut être de l'eau salée, par exemple).",
              "Réponse : A peut être de l'eau pure ; B est un mélange homogène.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque échantillon en trois catégories (corps pur, mélange homogène, mélange hétérogène) : a) de l'eau distillée ; b) de l'eau salée ; c) une vinaigrette (huile et vinaigre) ; d) l'air d'une pièce ; e) un fil de cuivre ; f) de l'eau boueuse.",
              hint: "Demandez-vous d'abord combien d'espèces chimiques contient l'échantillon, puis, s'il y en a plusieurs, si on les distingue à l'œil nu.",
              solution: [
                "a) L'eau distillée ne contient que de l'eau : corps pur.",
                "b) L'eau salée contient de l'eau et du sel qu'on ne voit pas : mélange homogène.",
                "c) Dans la vinaigrette, on voit des gouttes d'huile séparées du vinaigre : mélange hétérogène.",
                "d) L'air contient du diazote, du dioxygène et d'autres gaz, invisibles : mélange homogène.",
                "e) Le fil de cuivre ne contient que du cuivre : corps pur.",
                "f) Dans l'eau boueuse, on voit des particules de terre : mélange hétérogène.",
                "Réponse : corps purs : a et e ; mélanges homogènes : b et d ; mélanges hétérogènes : c et f.",
              ],
            },
            {
              level: 2,
              statement: "Une salle de classe mesure 8 m de long, 6 m de large et 3 m de haut. 1) Calculez le volume d'air qu'elle contient. 2) Calculez le volume de diazote et le volume de dioxygène contenus dans cet air, en utilisant les pourcentages du cours (78 % et 21 %). 3) Quel volume d'air contient 42 L de dioxygène ?",
              hint: "Le volume d'un pavé droit est longueur × largeur × hauteur. Prendre 78 % d'une quantité revient à la multiplier par 0,78. Pour la question 3, le dioxygène représente 21 % de l'air : divisez par 0,21.",
              solution: [
                "1) V = 8 × 6 × 3 = 144 m³.",
                "2) Volume de diazote : 144 × 0,78 = 112,32 m³, soit environ 112 m³.",
                "Volume de dioxygène : 144 × 0,21 = 30,24 m³, soit environ 30 m³.",
                "3) Si V est le volume d'air, alors 0,21 × V = 42 L, donc V = 42 ÷ 0,21 = 200 L.",
                "Réponse : la salle contient 144 m³ d'air, dont environ 112 m³ de diazote et 30 m³ de dioxygène ; 42 L de dioxygène sont contenus dans 200 L d'air.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On dispose de trois liquides transparents et incolores X, Y et Z (données fictives). Pendant l'ébullition, la température de X reste égale à 78 °C ; celle de Y passe de 100 °C à 103 °C ; celle de Z reste égale à 100 °C. On mesure aussi la masse de 50 mL de chaque liquide : X : 39,5 g ; Z : 50,0 g. Tableau de référence : eau, ébullition à 100 °C, 1,00 g/mL ; éthanol, ébullition à 78 °C, 0,79 g/mL. 1) Calculez la masse volumique de X et de Z. 2) Identifiez X et Z. 3) Y est-il un corps pur ? Proposez une expérience simple pour montrer qu'il contient un solide dissous. 4) Lina affirme : « Z est transparent et incolore, donc c'est de l'eau pure. » Son raisonnement est-il suffisant ?",
              hint: "La masse volumique se calcule avec ρ = m ÷ V. Un corps pur doit avoir à la fois un palier et des constantes qui correspondent au tableau.",
              solution: [
                "1) Pour X : ρ = 39,5 ÷ 50 = 0,79 g/mL. Pour Z : ρ = 50,0 ÷ 50 = 1,00 g/mL.",
                "2) X présente un palier à 78 °C et a une masse volumique de 0,79 g/mL : ce sont les constantes de l'éthanol, X est de l'éthanol. Z présente un palier à 100 °C et a une masse volumique de 1,00 g/mL : Z est de l'eau pure.",
                "3) La température de Y augmente pendant l'ébullition : il n'y a pas de palier, Y n'est pas un corps pur, c'est un mélange. On peut faire évaporer quelques gouttes de Y dans une coupelle : s'il reste un dépôt solide, Y contenait un solide dissous.",
                "4) Non : l'aspect ne suffit pas, car un mélange homogène comme l'eau salée est aussi transparent et incolore. Ce sont le palier à 100 °C et la masse volumique de 1,00 g/mL qui permettent de conclure que Z est de l'eau pure.",
                "Réponse : X est de l'éthanol, Z est de l'eau pure, Y est un mélange ; l'aspect seul ne prouve pas qu'un liquide est un corps pur.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Corps purs et mélanges.",
            statements: [
              { text: "Une eau minérale est un corps pur.", true: false, why: "Elle contient de l'eau et des sels minéraux dissous : c'est un mélange homogène." },
              { text: "Un mélange homogène peut contenir plusieurs espèces chimiques.", true: true, why: "Homogène veut seulement dire qu'on ne distingue pas ses constituants à l'œil nu." },
              { text: "Un « pur jus d'orange » est un corps pur au sens du chimiste.", true: false, why: "« Pur » signifie ici sans ajout ; le jus contient de l'eau, des sucres, des acides... c'est un mélange." },
              { text: "Pendant l'ébullition de l'eau pure, la température reste constante.", true: true, why: "Un corps pur change d'état à température constante : on observe un palier à 100 °C." },
              { text: "L'air est composé principalement de dioxygène.", true: false, why: "L'air contient surtout du diazote (environ 78 %) ; le dioxygène n'en représente qu'environ 21 %." },
              { text: "Si l'on ne voit qu'un seul constituant, c'est forcément un corps pur.", true: false, why: "Un mélange homogène, comme l'eau salée, n'a qu'un seul aspect à l'œil nu." },
              { text: "La masse volumique permet d'aider à identifier un corps pur.", true: true, why: "C'est une constante physique propre à chaque espèce chimique, comme ses températures de changement d'état." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces échantillons est un corps pur ?",
              options: ["L'eau du robinet", "L'eau distillée", "L'air", "Le lait"],
              answer: 1,
              why: "L'eau distillée ne contient qu'une seule espèce chimique, l'eau. Les autres échantillons contiennent plusieurs espèces chimiques.",
            },
            {
              q: "Quel est le gaz le plus abondant dans l'air ?",
              options: ["Le dioxyde de carbone", "Le dioxygène", "L'argon", "Le diazote"],
              answer: 3,
              why: "L'air contient environ 78 % de diazote en volume, contre environ 21 % de dioxygène.",
            },
            {
              q: "De l'eau et de l'huile versées dans un verre forment :",
              options: ["un mélange hétérogène", "un mélange homogène et transparent", "un corps pur"],
              answer: 0,
              why: "On distingue nettement deux couches, l'huile au-dessus de l'eau : le mélange est hétérogène.",
            },
            {
              q: "Pendant l'ébullition d'un liquide, la température augmente de 100 °C à 104 °C. Ce liquide est :",
              options: ["de l'eau pure", "un corps pur quelconque", "un mélange", "de l'éthanol"],
              answer: 2,
              why: "Un corps pur bout à température constante. Sans palier, le liquide est un mélange.",
            },
            {
              q: "Quel pourcentage de dioxygène l'air contient-il environ ?",
              options: ["78 %", "50 %", "1 %", "21 %"],
              answer: 3,
              why: "L'air contient environ 21 % de dioxygène, soit à peu près 1/5 de son volume.",
            },
          ],
          trap: "Croire qu'un liquide transparent et incolore est forcément un corps pur : l'eau salée ou l'eau minérale ont le même aspect que l'eau distillée, mais ce sont des mélanges homogènes.",
          method: "Pour classer un échantillon, posez deux questions dans l'ordre : combien contient-il d'espèces chimiques (une seule : corps pur) ? S'il y en a plusieurs, les voit-on à l'œil nu (oui : hétérogène, non : homogène) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'masse-volumique',
          title: 'La masse volumique',
          minutes: 35,
          objectives: [
            "Définir la masse volumique et utiliser la relation m = ρ × V.",
            "Mettre en œuvre un protocole expérimental pour déterminer la masse volumique d'un liquide ou d'un solide.",
            "Exploiter des mesures de masse volumique pour différencier des espèces chimiques.",
            "Convertir une masse volumique d'une unité dans une autre.",
          ],
          course: [
            {
              heading: "Une grandeur propre à chaque substance",
              paragraphs: [
                "Une bouteille de 1 L remplie d'eau a une masse d'environ 1 kg. Remplie d'huile, elle n'a plus qu'une masse de 0,92 kg environ. Le même volume ne contient donc pas la même masse selon la substance. Pour comparer des substances, on calcule la masse contenue dans une unité de volume : c'est la masse volumique, notée ρ (la lettre grecque « rhô »).",
                "La masse volumique ne dépend pas de la taille de l'échantillon. Un clou et une poutre en fer ont la même masse volumique : la poutre est plus lourde parce qu'elle a un plus grand volume, pas parce que le fer y est « plus lourd ». La masse volumique dépend seulement de la substance (et un peu de la température).",
              ],
              box: { label: "Définition", text: "La masse volumique ρ d'une substance est le quotient de la masse m d'un échantillon par son volume V : ρ = m ÷ V. Elle est caractéristique de la substance." },
            },
            {
              heading: "La relation et les unités",
              paragraphs: [
                "La relation ρ = m ÷ V peut s'écrire de deux autres façons : m = ρ × V, pour calculer une masse, et V = m ÷ ρ, pour calculer un volume. Avant tout calcul, vérifiez que les unités sont cohérentes : si ρ est en g/cm³, la masse doit être en g et le volume en cm³.",
                "Rappels de conversion : 1 mL = 1 cm³ ; 1 L = 1 000 mL = 1 dm³ ; 1 m³ = 1 000 L ; 1 kg = 1 000 g. On en déduit, pour l'eau : ρ = 1 g/cm³ = 1 g/mL = 1 kg/L = 1 000 g/L = 1 000 kg/m³.",
                "Pour passer d'une valeur en g/cm³ à une valeur en kg/m³, on multiplie par 1 000. Le fer a une masse volumique de 7,9 g/cm³, soit 7 900 kg/m³ : un mètre cube de fer a une masse de 7,9 tonnes.",
              ],
              box: { label: "Formule", text: "ρ = m ÷ V ; m = ρ × V ; V = m ÷ ρ. Pour l'eau : ρ = 1 g/cm³ = 1 kg/L = 1 000 kg/m³. De g/cm³ vers kg/m³ : on multiplie par 1 000." },
            },
            {
              heading: "Mesurer une masse volumique",
              paragraphs: [
                "Pour un liquide : on pose une éprouvette graduée vide sur une balance et on appuie sur « tare » pour afficher 0. On verse le liquide jusqu'à un volume précis, lu au bas du ménisque, l'œil à la hauteur du liquide. La balance donne directement la masse du liquide. On calcule ensuite ρ = m ÷ V.",
                "Pour un solide : on mesure sa masse avec la balance. Si sa forme est simple (cube, pavé), on calcule son volume avec les dimensions. Sinon, on utilise le déplacement d'eau : on lit le volume d'eau V₁ dans une éprouvette, on y plonge entièrement l'objet, on lit le nouveau volume V₂. Le volume de l'objet est V = V₂ - V₁.",
              ],
              box: { label: "Repère", text: "Volume d'un solide par déplacement d'eau : V = V₂ - V₁. On lit toujours un volume au bas du ménisque, l'œil à la hauteur de la surface du liquide." },
            },
            {
              heading: "Identifier une substance, prévoir si elle flotte",
              paragraphs: [
                "On compare la valeur mesurée à un tableau (en g/cm³) : éthanol 0,79 ; huile 0,92 ; glace 0,92 ; eau 1,0 ; aluminium 2,7 ; zinc 7,1 ; fer 7,9 ; cuivre 8,9 ; argent 10,5 ; plomb 11,3 ; or 19,3. L'air, à 20 °C, a une masse volumique d'environ 1,2 g/L. Deux substances de masses volumiques différentes sont forcément des espèces différentes.",
                "Un objet plein flotte sur un liquide si sa masse volumique est plus petite que celle du liquide, et il coule si elle est plus grande. Deux liquides qui ne se mélangent pas se superposent : le liquide de plus faible masse volumique se place au-dessus. C'est pour cela que l'huile flotte sur l'eau et que la glace flotte sur l'eau liquide.",
              ],
              box: { label: "Règle", text: "Un objet plein flotte sur un liquide si sa masse volumique est inférieure à celle du liquide ; il coule si elle est supérieure." },
            },
          ],
          keyPoints: [
            "Masse volumique : ρ = m ÷ V ; on en déduit m = ρ × V et V = m ÷ ρ.",
            "Unités : g/cm³, g/mL, g/L, kg/L, kg/m³ ; 1 mL = 1 cm³ et 1 m³ = 1 000 L.",
            "Eau : ρ = 1 g/cm³ = 1 kg/L = 1 000 kg/m³ ; de g/cm³ vers kg/m³, on multiplie par 1 000.",
            "Volume d'un solide par déplacement d'eau : V = V₂ - V₁.",
            "La masse volumique est caractéristique d'une espèce chimique : elle permet de l'identifier.",
            "Un objet plein flotte si sa masse volumique est inférieure à celle du liquide.",
          ],
          example: {
            statement: "Pour identifier un liquide, un élève pèse un bécher vide : 52,0 g. Il y verse 40,0 mL du liquide et pèse l'ensemble : 88,8 g. Calculez la masse volumique du liquide et identifiez-le : eau 1,0 g/mL ; huile 0,92 g/mL ; éthanol 0,79 g/mL.",
            solution: [
              "Masse du liquide : m = 88,8 - 52,0 = 36,8 g.",
              "Volume du liquide : V = 40,0 mL.",
              "Masse volumique : ρ = m ÷ V = 36,8 ÷ 40,0 = 0,92 g/mL.",
              "Cette valeur correspond à celle de l'huile dans le tableau.",
              "Réponse : ρ = 0,92 g/mL, le liquide est de l'huile.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Un bloc de glace a un volume de 2 000 cm³. La masse volumique de la glace est 0,92 g/cm³. Calculez sa masse en g puis en kg. 2) Une pièce d'aluminium a une masse de 540 g. La masse volumique de l'aluminium est 2,7 g/cm³. Calculez son volume.",
              hint: "Pour une masse, utilisez m = ρ × V ; pour un volume, utilisez V = m ÷ ρ. Gardez des g et des cm³.",
              solution: [
                "1) m = ρ × V = 0,92 × 2 000 = 1 840 g, soit 1,84 kg.",
                "2) V = m ÷ ρ = 540 ÷ 2,7 = 200 cm³.",
                "Réponse : le bloc de glace a une masse de 1,84 kg ; la pièce d'aluminium a un volume de 200 cm³.",
              ],
            },
            {
              level: 2,
              statement: "Une bague a une masse de 21,0 g. On verse 30,0 mL d'eau dans une éprouvette graduée, puis on y plonge entièrement la bague : le niveau monte à 32,0 mL. Tableau : argent 10,5 g/cm³ ; plomb 11,3 g/cm³ ; or 19,3 g/cm³. 1) Calculez le volume de la bague en cm³. 2) Calculez sa masse volumique. 3) La bague est-elle en or ? En quel métal est-elle ? 4) Exprimez sa masse volumique en kg/m³.",
              hint: "Le volume de la bague est la différence des deux volumes lus, et 1 mL = 1 cm³. Pour passer en kg/m³, multipliez par 1 000.",
              solution: [
                "1) V = V₂ - V₁ = 32,0 - 30,0 = 2,0 mL = 2,0 cm³.",
                "2) ρ = m ÷ V = 21,0 ÷ 2,0 = 10,5 g/cm³.",
                "3) La masse volumique de l'or est 19,3 g/cm³, la bague n'est donc pas en or. La valeur 10,5 g/cm³ correspond à l'argent.",
                "4) ρ = 10,5 × 1 000 = 10 500 kg/m³.",
                "Réponse : la bague a un volume de 2,0 cm³ et une masse volumique de 10,5 g/cm³ (10 500 kg/m³) : elle est en argent, pas en or.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un vendeur propose un lingot présenté comme de l'or pur (données fictives). Le lingot est un pavé droit de 8 cm de long, 4 cm de large et 2 cm d'épaisseur, et sa masse est de 1 000 g. La masse volumique de l'or est 19,3 g/cm³. 1) Calculez le volume du lingot. 2) Calculez sa masse volumique, arrondie au dixième. 3) Le lingot est-il en or pur ? 4) Quelle masse aurait un lingot d'or pur de mêmes dimensions ? 5) Le lingot coulerait-il dans un bain de mercure, de masse volumique 13,6 g/cm³ ?",
              hint: "Calculez d'abord le volume du pavé, puis appliquez ρ = m ÷ V et comparez au tableau. Pour la question 4, utilisez m = ρ × V avec la masse volumique de l'or.",
              solution: [
                "1) V = 8 × 4 × 2 = 64 cm³.",
                "2) ρ = m ÷ V = 1 000 ÷ 64 = 15,625 g/cm³, soit environ 15,6 g/cm³.",
                "3) 15,6 g/cm³ est différent de 19,3 g/cm³ : le lingot n'est pas en or pur. Il contient sans doute un autre métal, moins dense, mélangé à l'or ou caché à l'intérieur.",
                "4) m = ρ × V = 19,3 × 64 = 1 235,2 g, soit environ 1,24 kg.",
                "5) La masse volumique du lingot (15,6 g/cm³) est supérieure à celle du mercure (13,6 g/cm³) : le lingot coulerait.",
                "Réponse : le lingot a un volume de 64 cm³ et une masse volumique d'environ 15,6 g/cm³ ; ce n'est pas de l'or pur, qui aurait une masse d'environ 1 235 g pour ce volume ; il coulerait dans le mercure.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour mesurer la masse volumique d'un caillou.",
            items: [
              "Commencer par peser le caillou encore sec sur la balance et noter sa masse m.",
              "Verser de l'eau dans une éprouvette graduée et lire le volume V₁.",
              "Plonger délicatement le caillou dans l'éprouvette, sans éclabousser.",
              "Lire le nouveau volume V₂ au bas du ménisque.",
              "Calculer le volume du caillou : V = V₂ - V₁.",
              "Calculer la masse volumique : ρ = m ÷ V.",
            ],
          },
          quiz: [
            {
              q: "Quelle relation permet de calculer une masse à partir de la masse volumique ?",
              options: ["m = ρ ÷ V", "m = ρ × V", "m = V ÷ ρ", "m = ρ + V"],
              answer: 1,
              why: "De ρ = m ÷ V, on déduit m = ρ × V.",
            },
            {
              q: "Un liquide a une masse de 46 g pour un volume de 50 mL. Sa masse volumique vaut :",
              options: ["0,92 g/mL", "1,09 g/mL", "2 300 g/mL", "96 g/mL"],
              answer: 0,
              why: "ρ = m ÷ V = 46 ÷ 50 = 0,92 g/mL.",
            },
            {
              q: "Combien vaut 2,7 g/cm³ en kg/m³ ?",
              options: ["0,0027 kg/m³", "27 kg/m³", "270 kg/m³", "2 700 kg/m³"],
              answer: 3,
              why: "Pour passer de g/cm³ à kg/m³, on multiplie par 1 000 : 2,7 × 1 000 = 2 700 kg/m³.",
            },
            {
              q: "On lit 50 mL dans une éprouvette, puis 58 mL après y avoir plongé un objet. Le volume de l'objet est :",
              options: ["58 cm³", "108 cm³", "8 cm³", "50 cm³"],
              answer: 2,
              why: "V = V₂ - V₁ = 58 - 50 = 8 mL, et 1 mL = 1 cm³.",
            },
            {
              q: "Un objet plein de masse volumique 0,6 g/cm³ est posé sur l'eau. Il :",
              options: ["coule", "flotte", "se dissout"],
              answer: 1,
              why: "Sa masse volumique est inférieure à celle de l'eau (1,0 g/cm³) : il flotte.",
            },
          ],
          trap: "Confondre masse et masse volumique : un gros objet en bois est plus lourd qu'un petit clou, mais le fer a une masse volumique bien plus grande que le bois. C'est la masse volumique, et non la masse, qui décide si un objet plein flotte.",
          method: "Écrivez toujours la formule, puis les valeurs avec leurs unités, avant de calculer. Vérifiez ensuite la vraisemblance : un liquide courant a une masse volumique proche de 1 g/cm³, un métal de plusieurs g/cm³, un gaz d'environ 1 g/L.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'solubilite-miscibilite',
          title: 'Solubilité et miscibilité',
          minutes: 30,
          objectives: [
            "Utiliser le vocabulaire de la dissolution : soluté, solvant, solution.",
            "Définir la solubilité et estimer expérimentalement une valeur de solubilité dans l'eau.",
            "Distinguer deux liquides miscibles de deux liquides non miscibles.",
          ],
          course: [
            {
              heading: "Dissoudre : soluté, solvant, solution",
              paragraphs: [
                "Quand on verse du sel dans de l'eau et qu'on agite, le sel semble disparaître : il se dissout. On obtient un mélange homogène appelé solution. L'espèce qui se dissout (ici le sel) est le soluté ; le liquide dans lequel elle se dissout (ici l'eau) est le solvant. Lorsque le solvant est l'eau, on parle de solution aqueuse.",
                "Le sel n'a pas disparu : on le retrouve en faisant évaporer l'eau, et l'eau salée a toujours le goût du sel. La masse se conserve lors d'une dissolution : la masse de la solution est égale à la masse du solvant plus la masse du soluté. Si l'on dissout 10 g de sel dans 200 g d'eau, on obtient 210 g d'eau salée.",
              ],
              box: { label: "Définition", text: "Soluté : espèce qui se dissout. Solvant : liquide dans lequel on dissout. Solution : mélange homogène obtenu. Lors d'une dissolution, m(solution) = m(solvant) + m(soluté)." },
            },
            {
              heading: "La solubilité, une limite",
              paragraphs: [
                "On ne peut pas dissoudre une quantité illimitée de soluté dans un solvant. Si l'on ajoute du sel dans l'eau petit à petit en agitant, il arrive un moment où le sel ne se dissout plus et reste au fond du récipient : la solution est saturée.",
                "La solubilité d'une espèce dans un solvant est la masse maximale de cette espèce que l'on peut dissoudre dans un litre de solvant, à une température donnée. Elle s'exprime en g/L. Dans l'eau à 20 °C, la solubilité du sel est d'environ 360 g/L et celle du sucre d'environ 2 000 g/L. Le sable, lui, ne se dissout pas : il est insoluble dans l'eau.",
                "La solubilité dépend de la température : le sucre se dissout bien davantage dans l'eau chaude que dans l'eau froide. Elle dépend aussi du solvant : le vernis à ongles ne se dissout pas dans l'eau, mais il se dissout dans l'acétone. Les gaz peuvent aussi se dissoudre dans l'eau : le dioxyde de carbone dans les boissons gazeuses, le dioxygène que respirent les poissons.",
              ],
              box: { label: "Définition", text: "La solubilité d'une espèce est la masse maximale de cette espèce que l'on peut dissoudre dans 1 L de solvant, à une température donnée. Au-delà, la solution est saturée et le solide en excès reste au fond." },
            },
            {
              heading: "Estimer une solubilité par l'expérience",
              paragraphs: [
                "On verse 50 mL d'eau dans un bécher. On ajoute le sel par petites portions pesées (par exemple 2 g à la fois), en agitant bien après chaque ajout. On s'arrête dès qu'un peu de sel reste au fond malgré l'agitation : la solution est saturée. On additionne les masses qui se sont dissoutes.",
                "Si 18 g de sel se sont dissous dans 50 mL d'eau, on ramène ce résultat à 1 L : comme 1 L = 1 000 mL = 20 × 50 mL, on multiplie par 20. La solubilité estimée vaut 18 × 20 = 360 g/L. C'est une estimation, car on ajoute le sel par portions et la dernière portion n'est pas entièrement dissoute.",
              ],
              box: { label: "Repère", text: "Pour ramener un résultat à 1 L : on multiplie par 1 000 et on divise par le volume en mL. Pour 50 mL, on multiplie par 20 ; pour 100 mL, par 10 ; pour 250 mL, par 4." },
            },
            {
              heading: "Liquides miscibles et non miscibles",
              paragraphs: [
                "Deux liquides sont miscibles lorsque leur mélange est homogène : l'eau et l'éthanol, l'eau et le sirop de menthe, l'eau et le vinaigre se mélangent parfaitement. Deux liquides sont non miscibles lorsque leur mélange est hétérogène : l'eau et l'huile forment deux couches séparées, même après une forte agitation.",
                "Dans un mélange de liquides non miscibles, le liquide de plus faible masse volumique se place au-dessus : l'huile (0,92 g/mL) flotte sur l'eau (1,0 g/mL). Pour séparer deux liquides non miscibles, on utilise une ampoule à décanter : on laisse reposer, puis on ouvre le robinet pour faire couler le liquide du bas, qu'on recueille à part.",
              ],
              box: { label: "Définition", text: "Deux liquides miscibles forment un mélange homogène. Deux liquides non miscibles forment un mélange hétérogène : le moins dense se place au-dessus." },
            },
          ],
          keyPoints: [
            "Dissolution : le soluté se dissout dans le solvant pour former une solution (homogène).",
            "La masse se conserve : m(solution) = m(solvant) + m(soluté).",
            "Solubilité : masse maximale de soluté dissoute dans 1 L de solvant, en g/L, à une température donnée.",
            "Une solution saturée ne peut plus dissoudre de soluté : l'excès reste au fond.",
            "Dans l'eau à 20 °C : sel environ 360 g/L, sucre environ 2 000 g/L.",
            "Liquides miscibles : mélange homogène. Non miscibles : deux couches, la moins dense au-dessus.",
          ],
          example: {
            statement: "À 20 °C, on dissout du sucre par petites portions dans 20 mL d'eau. Au total, 40 g de sucre se dissolvent ; au-delà, le sucre reste au fond. Estimez la solubilité du sucre dans l'eau à cette température.",
            solution: [
              "La solution est saturée quand le sucre ne se dissout plus : 40 g est donc la masse maximale de sucre dissoute dans 20 mL d'eau.",
              "On ramène ce résultat à 1 L, soit 1 000 mL : 1 000 ÷ 20 = 50, il faut donc multiplier par 50.",
              "Solubilité : 40 × 50 = 2 000 g/L.",
              "Réponse : la solubilité du sucre dans l'eau à 20 °C est d'environ 2 000 g/L.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Léo dissout 5 g de sel dans 150 g d'eau et agite : tout le sel disparaît. 1) Quel est le soluté ? Quel est le solvant ? 2) Quel nom donne-t-on au mélange obtenu ? Est-il homogène ou hétérogène ? 3) Quelle est la masse de ce mélange ?",
              hint: "Le soluté est ce qui se dissout, le solvant est ce dans quoi on dissout. La masse se conserve pendant la dissolution.",
              solution: [
                "1) Le soluté est le sel ; le solvant est l'eau.",
                "2) C'est une solution (aqueuse, car le solvant est l'eau). Elle est homogène : on ne voit plus le sel.",
                "3) m(solution) = m(eau) + m(sel) = 150 + 5 = 155 g.",
                "Réponse : soluté : sel ; solvant : eau ; on obtient 155 g d'une solution aqueuse homogène.",
              ],
            },
            {
              level: 2,
              statement: "La solubilité du sel dans l'eau à 20 °C est de 360 g/L. 1) Quelle masse maximale de sel peut-on dissoudre dans 100 mL d'eau ? 2) On verse 30 g de sel dans 100 mL d'eau. La solution est-elle saturée ? 3) On verse 50 g de sel dans 100 mL d'eau. Qu'observe-t-on ? Quelle masse de sel reste au fond ? 4) Quelle masse maximale de sel peut-on dissoudre dans 250 mL d'eau ?",
              hint: "100 mL, c'est le dixième d'un litre ; 250 mL, c'est le quart d'un litre. Comparez ensuite la masse versée à la masse maximale.",
              solution: [
                "1) 100 mL = 0,1 L, donc la masse maximale est 360 × 0,1 = 36 g.",
                "2) 30 g est inférieur à 36 g : tout le sel se dissout, la solution n'est pas saturée.",
                "3) 50 g est supérieur à 36 g : seulement 36 g se dissolvent, la solution est saturée et il reste 50 - 36 = 14 g de sel au fond.",
                "4) 250 mL = 0,25 L, donc la masse maximale est 360 × 0,25 = 90 g.",
                "Réponse : 36 g dans 100 mL ; avec 30 g, la solution n'est pas saturée ; avec 50 g, elle est saturée et 14 g restent au fond ; 90 g au maximum dans 250 mL.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans un tube à essais, on verse 5 mL d'eau (1,0 g/mL) puis 5 mL de cyclohexane (0,78 g/mL), un liquide incolore non miscible avec l'eau. On ajoute ensuite quelques cristaux de sulfate de cuivre, une espèce bleue soluble dans l'eau et insoluble dans le cyclohexane, et on agite. 1) Le mélange eau et cyclohexane est-il homogène ou hétérogène ? 2) Quel liquide se trouve au-dessus ? Justifiez. 3) Après agitation et repos, quelle couche devient bleue ? 4) On verse le contenu dans une ampoule à décanter. Quel liquide sort en premier quand on ouvre le robinet ? 5) Comment récupérer ensuite le sulfate de cuivre solide ?",
              hint: "Comparez les masses volumiques pour savoir quel liquide flotte. Le sulfate de cuivre ne se dissout que dans l'un des deux liquides. Le robinet d'une ampoule à décanter est en bas.",
              solution: [
                "1) L'eau et le cyclohexane sont non miscibles : le mélange est hétérogène, avec deux couches.",
                "2) Le cyclohexane (0,78 g/mL) a une masse volumique plus faible que l'eau (1,0 g/mL) : il se place au-dessus.",
                "3) Le sulfate de cuivre se dissout seulement dans l'eau : c'est la couche du bas, l'eau, qui devient bleue. Le cyclohexane, au-dessus, reste incolore.",
                "4) Le robinet est en bas de l'ampoule : c'est la solution aqueuse bleue (la couche du bas) qui sort en premier.",
                "5) On fait évaporer l'eau de la solution bleue : le sulfate de cuivre reste au fond du récipient sous forme solide.",
                "Réponse : mélange hétérogène ; le cyclohexane est au-dessus ; la couche d'eau du bas devient bleue et sort en premier de l'ampoule ; on récupère le sulfate de cuivre par évaporation de l'eau.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Soluté", right: "Espèce qui se dissout, comme le sel dans l'eau salée" },
              { left: "Solvant", right: "Liquide dans lequel on dissout une espèce" },
              { left: "Solution saturée", right: "Solution qui ne peut plus dissoudre de soluté" },
              { left: "Solubilité", right: "Masse maximale de soluté dissoute dans 1 L de solvant" },
              { left: "Liquides miscibles", right: "Liquides qui forment un mélange homogène" },
              { left: "Liquides non miscibles", right: "Liquides qui se séparent en deux couches" },
            ],
          },
          quiz: [
            {
              q: "Dans de l'eau sucrée, le sucre est :",
              options: ["le solvant", "le soluté", "la solution"],
              answer: 1,
              why: "Le sucre est l'espèce qui se dissout : c'est le soluté. L'eau est le solvant.",
            },
            {
              q: "On dissout 20 g de sucre dans 250 g d'eau. La masse de la solution est :",
              options: ["250 g", "230 g", "270 g", "20 g"],
              answer: 2,
              why: "La masse se conserve lors d'une dissolution : 250 + 20 = 270 g.",
            },
            {
              q: "Une solution est saturée lorsque :",
              options: ["le soluté ne peut plus s'y dissoudre", "elle est colorée", "elle contient deux solvants différents", "elle est très chaude"],
              answer: 0,
              why: "Une solution saturée contient la masse maximale de soluté : le soluté ajouté en plus reste au fond.",
            },
            {
              q: "On estime que 9 g de sel se dissolvent au maximum dans 25 mL d'eau. La solubilité vaut :",
              options: ["225 g/L", "36 g/L", "900 g/L", "360 g/L"],
              answer: 3,
              why: "1 000 mL = 40 × 25 mL, donc la solubilité vaut 9 × 40 = 360 g/L.",
            },
            {
              q: "Quels liquides sont non miscibles ?",
              options: ["L'eau et l'éthanol", "L'eau et le sirop", "L'eau et l'huile", "L'eau et le vinaigre"],
              answer: 2,
              why: "L'eau et l'huile forment deux couches séparées : le mélange est hétérogène.",
            },
          ],
          trap: "Croire que le soluté disparaît lors d'une dissolution et que la masse diminue : le soluté est toujours là, dispersé dans le solvant, et la masse de la solution est la somme des masses du solvant et du soluté.",
          method: "Pour estimer une solubilité, ramenez toujours le résultat à 1 L : cherchez par combien il faut multiplier le volume utilisé pour obtenir 1 000 mL, puis multipliez la masse dissoute par ce même nombre.",
        },
      ],
    },
    /* ================================================================== */
    /* ATOMES ET MOLÉCULES                                                 */
    /* ================================================================== */
    {
      id: 'atomes-molecules',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'atome',
          title: "L'atome, constituant de la matière",
          minutes: 30,
          objectives: [
            "Décrire la matière comme constituée d'atomes.",
            "Associer leurs symboles aux éléments à l'aide de la classification périodique.",
            "Utiliser un modèle (des sphères de couleur) pour représenter des atomes.",
            "Estimer l'ordre de grandeur de la taille d'un atome.",
          ],
          course: [
            {
              heading: "Une idée ancienne, confirmée par la science",
              paragraphs: [
                "Si l'on coupait un morceau de cuivre en deux, puis encore en deux, et ainsi de suite, pourrait-on continuer sans fin ? Dans la Grèce antique, vers le Ve siècle avant J.-C., le philosophe Démocrite imagine que non : la matière serait faite de grains minuscules qu'on ne peut plus couper, qu'il appelle « atomes » (du grec atomos, « insécable »).",
                "Cette idée reste longtemps une hypothèse. Au début du XIXe siècle, le chimiste anglais John Dalton s'en sert pour expliquer les transformations chimiques. Aujourd'hui, l'existence des atomes ne fait plus de doute : depuis les années 1980, des microscopes très particuliers (comme le microscope à effet tunnel) permettent d'obtenir des images où l'on distingue les atomes un par un.",
              ],
              box: { label: "À retenir", text: "Toute la matière (solide, liquide ou gaz, vivante ou non) est constituée d'atomes." },
            },
            {
              heading: "Un atome, c'est minuscule",
              paragraphs: [
                "Un atome a un diamètre d'environ 0,1 nanomètre, c'est-à-dire 0,000 000 000 1 m, ou encore 0,000 000 1 mm. Il faudrait aligner environ 10 millions d'atomes côte à côte pour obtenir une longueur de 1 mm. C'est pourquoi on ne peut pas voir un atome, même avec le microscope optique du collège.",
                "Pour se faire une idée : si l'on agrandissait une pomme jusqu'à la taille de la Terre, ses atomes deviendraient à peine aussi gros que de petites billes de 1 ou 2 cm. Un simple grain de sel contient déjà des milliards de milliards d'atomes.",
              ],
              box: { label: "Repère", text: "Diamètre d'un atome : environ 0,1 nm = 0,000 000 000 1 m = 10⁻¹⁰ m. Environ 10 millions d'atomes alignés mesurent 1 mm." },
            },
            {
              heading: "Les éléments et leurs symboles",
              paragraphs: [
                "Il n'existe pas une infinité de sortes d'atomes : on connaît aujourd'hui 118 éléments chimiques, dont environ 90 existent dans la nature. Tous les objets du monde sont construits avec ce petit nombre de sortes d'atomes, un peu comme tous les mots sont écrits avec les 26 lettres de l'alphabet.",
                "Chaque élément est désigné par un symbole : une lettre majuscule, parfois suivie d'une lettre minuscule. Exemples : H (hydrogène), C (carbone), O (oxygène), N (azote), S (soufre), Fe (fer), Cu (cuivre), Zn (zinc), Al (aluminium), Na (sodium), Cl (chlore), Au (or). Certains symboles viennent du nom latin ou international : Fe vient de ferrum, Au de aurum, N de nitrogen.",
                "Tous les éléments sont rangés, avec leur symbole, dans la classification périodique des éléments, proposée par le chimiste russe Dmitri Mendeleïev en 1869 et complétée depuis. On s'en sert comme d'un dictionnaire pour retrouver le nom d'un élément à partir de son symbole, et inversement.",
              ],
              box: { label: "Règle", text: "Le symbole d'un élément commence toujours par une majuscule, suivie éventuellement d'une minuscule : Co (cobalt) et CO (un atome de carbone et un atome d'oxygène) ne désignent pas du tout la même chose." },
            },
            {
              heading: "Représenter les atomes",
              paragraphs: [
                "Comme on ne peut pas voir les atomes, on les représente par un modèle : chaque atome est dessiné comme une sphère (une boule). Par convention, on utilise les mêmes couleurs dans le monde entier : hydrogène en blanc, carbone en noir, oxygène en rouge, azote en bleu, chlore en vert. Attention, ce sont des couleurs choisies pour s'y retrouver : les atomes réels n'ont pas de couleur.",
                "Un métal comme le cuivre est un empilement régulier d'atomes de cuivre, tous identiques. En 3e, vous découvrirez que l'atome lui-même possède une structure intérieure. En 4e, le modèle de la sphère suffit pour comprendre comment les atomes s'assemblent et se réorganisent.",
              ],
            },
          ],
          keyPoints: [
            "La matière est constituée d'atomes, invisibles même au microscope optique.",
            "Un atome a un diamètre d'environ 0,1 nm, soit 0,000 000 1 mm.",
            "On connaît 118 éléments ; chacun a un symbole : une majuscule, parfois suivie d'une minuscule.",
            "H hydrogène, C carbone, O oxygène, N azote, Fe fer, Cu cuivre, Al aluminium, Zn zinc.",
            "La classification périodique (Mendeleïev, 1869) range tous les éléments avec leur symbole.",
            "Modèle : sphères de couleur conventionnelle (H blanc, C noir, O rouge, N bleu).",
          ],
          example: {
            statement: "Une feuille d'aluminium ménager a une épaisseur d'environ 0,02 mm. En prenant pour le diamètre d'un atome la valeur 0,000 000 1 mm, estimez le nombre d'atomes empilés dans l'épaisseur de la feuille.",
            solution: [
              "Les atomes sont empilés les uns sur les autres : leur nombre est l'épaisseur divisée par le diamètre d'un atome.",
              "N = 0,02 ÷ 0,000 000 1.",
              "Diviser par 0,000 000 1 revient à multiplier par 10 000 000 : N = 0,02 × 10 000 000 = 200 000.",
              "Réponse : il y a environ 200 000 atomes empilés dans l'épaisseur d'une feuille d'aluminium.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Écrivez le symbole des éléments suivants : carbone, oxygène, hydrogène, azote, fer, cuivre. 2) Un élève a écrit les symboles suivants avec des erreurs : « AL » pour l'aluminium, « cl » pour le chlore, « zN » pour le zinc. Corrigez-les.",
              hint: "Un symbole commence par une majuscule ; si une deuxième lettre est nécessaire, elle s'écrit en minuscule.",
              solution: [
                "1) Carbone : C ; oxygène : O ; hydrogène : H ; azote : N ; fer : Fe ; cuivre : Cu.",
                "2) Aluminium : Al (la deuxième lettre est une minuscule) ; chlore : Cl (la première lettre est une majuscule) ; zinc : Zn (majuscule puis minuscule).",
                "Réponse : C, O, H, N, Fe, Cu ; les symboles corrigés sont Al, Cl et Zn.",
              ],
            },
            {
              level: 2,
              statement: "On prend 0,000 000 1 mm pour le diamètre d'un atome. 1) Un cheveu a un diamètre d'environ 0,07 mm. Combien d'atomes faudrait-il aligner pour couvrir ce diamètre ? 2) Quelle longueur, en mm, mesure une rangée d'un million d'atomes alignés ? 3) Peut-on voir un atome au microscope optique, qui permet de distinguer des détails d'environ 0,000 2 mm ? Justifiez.",
              hint: "Pour la question 1, divisez la longueur par le diamètre d'un atome. Pour la question 2, multipliez le nombre d'atomes par le diamètre d'un atome.",
              solution: [
                "1) N = 0,07 ÷ 0,000 000 1 = 0,07 × 10 000 000 = 700 000 atomes.",
                "2) L = 1 000 000 × 0,000 000 1 = 0,1 mm.",
                "3) 0,000 2 mm est 2 000 fois plus grand que 0,000 000 1 mm (car 0,000 2 ÷ 0,000 000 1 = 2 000) : le microscope optique ne distingue pas des détails aussi petits qu'un atome.",
                "Réponse : environ 700 000 atomes dans le diamètre d'un cheveu ; un million d'atomes alignés mesurent 0,1 mm ; un atome est bien trop petit pour être vu au microscope optique.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour une exposition, on veut construire une maquette où chaque atome (diamètre 0,000 000 1 mm) est représenté par une bille de 1 cm de diamètre. 1) Exprimez 1 cm en mm. 2) Par quel nombre a-t-on multiplié la taille réelle de l'atome ? 3) Avec le même agrandissement, quelle serait la taille d'un cheveu de 0,07 mm de diamètre ? Donnez la réponse en km. 4) Et celle d'un grain de sable de 0,5 mm ?",
              hint: "Le coefficient d'agrandissement est la taille sur la maquette divisée par la taille réelle, les deux dans la même unité. Rappel : 1 km = 1 000 m = 1 000 000 mm.",
              solution: [
                "1) 1 cm = 10 mm.",
                "2) Coefficient : 10 ÷ 0,000 000 1 = 10 × 10 000 000 = 100 000 000. On a multiplié par cent millions.",
                "3) Cheveu : 0,07 × 100 000 000 = 7 000 000 mm. Or 1 km = 1 000 000 mm, donc 7 000 000 mm = 7 km.",
                "4) Grain de sable : 0,5 × 100 000 000 = 50 000 000 mm = 50 km.",
                "Réponse : l'agrandissement est de cent millions ; à cette échelle, un cheveu aurait un diamètre de 7 km et un grain de sable de 50 km.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les atomes.",
            statements: [
              { text: "On peut voir un atome avec le microscope optique du collège.", true: false, why: "Un atome mesure environ 0,1 nm : il est des milliers de fois trop petit pour un microscope optique." },
              { text: "Tous les objets qui nous entourent sont faits d'atomes.", true: true, why: "Toute la matière, vivante ou non, solide, liquide ou gazeuse, est constituée d'atomes." },
              { text: "Le symbole d'un élément commence toujours par une majuscule.", true: true, why: "C'est la règle d'écriture : une majuscule, parfois suivie d'une minuscule (Fe, Cu, Al)." },
              { text: "Les atomes d'oxygène sont rouges.", true: false, why: "Le rouge est une couleur conventionnelle des modèles ; les atomes réels n'ont pas de couleur." },
              { text: "Il existe des millions de sortes d'atomes différents.", true: false, why: "On connaît 118 éléments : toute la matière est construite avec ce petit nombre de sortes d'atomes." },
              { text: "Le symbole de l'azote est N.", true: true, why: "N vient du nom international de l'azote, nitrogen." },
              { text: "Co et CO désignent la même chose.", true: false, why: "Co est le symbole du cobalt ; CO indique un atome de carbone et un atome d'oxygène." },
            ],
          },
          quiz: [
            {
              q: "Quel est l'ordre de grandeur du diamètre d'un atome ?",
              options: ["0,1 mm", "0,1 nm", "1 µm", "1 cm"],
              answer: 1,
              why: "Un atome mesure environ 0,1 nanomètre, soit 0,000 000 000 1 m.",
            },
            {
              q: "Quel est le symbole du cuivre ?",
              options: ["Cu", "C", "Co", "Cr"],
              answer: 0,
              why: "Le cuivre a pour symbole Cu. C est le carbone, Co le cobalt et Cr le chrome.",
            },
            {
              q: "Quel élément a pour symbole O ?",
              options: ["L'or", "L'oxyde", "Le zinc", "L'oxygène"],
              answer: 3,
              why: "O est le symbole de l'oxygène ; l'or a pour symbole Au.",
            },
            {
              q: "Combien d'éléments chimiques connaît-on aujourd'hui ?",
              options: ["12", "1 000", "118", "Des millions"],
              answer: 2,
              why: "La classification périodique compte 118 éléments, dont environ 90 présents dans la nature.",
            },
            {
              q: "Dans les modèles, quelle couleur représente le carbone ?",
              options: ["Rouge", "Noir", "Blanc", "Bleu"],
              answer: 1,
              why: "Par convention, le carbone est noir, l'oxygène rouge, l'hydrogène blanc et l'azote bleu.",
            },
          ],
          trap: "Mal écrire les symboles : oublier la majuscule (« cl »), mettre deux majuscules (« AL »), ou confondre Co (le cobalt) avec CO (un carbone et un oxygène liés). La casse des lettres change le sens.",
          method: "Apprenez les symboles par petits groupes, avec une astuce pour ceux qui ne ressemblent pas au nom français : Fe (ferrum, le fer), Au (aurum, l'or), N (nitrogen, l'azote). Vérifiez dans la classification périodique en cas de doute.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'molecules-formules',
          title: 'Les molécules et leurs formules chimiques',
          minutes: 30,
          objectives: [
            "Définir une molécule comme un assemblage d'atomes liés.",
            "Interpréter une formule chimique en termes atomiques : dioxygène, dihydrogène, diazote, eau, dioxyde de carbone.",
            "Écrire la formule chimique d'une molécule à partir de sa composition ou de son modèle.",
            "Distinguer l'indice d'une formule du nombre de molécules placé devant.",
          ],
          course: [
            {
              heading: "Des atomes liés : les molécules",
              paragraphs: [
                "Dans beaucoup de substances, les atomes ne sont pas isolés : ils sont attachés les uns aux autres par petits groupes. Un tel groupe d'atomes liés s'appelle une molécule. Une molécule d'eau, par exemple, est formée de deux atomes d'hydrogène liés à un atome d'oxygène.",
                "Dans un corps pur moléculaire, toutes les molécules sont identiques : l'eau pure ne contient que des molécules d'eau. Ces molécules sont extraordinairement nombreuses : une seule goutte d'eau en contient environ mille milliards de milliards.",
              ],
              box: { label: "Définition", text: "Une molécule est un assemblage d'atomes liés entre eux. Les molécules d'un même corps pur sont toutes identiques." },
            },
            {
              heading: "Lire et écrire une formule chimique",
              paragraphs: [
                "Une molécule est représentée par sa formule chimique. On écrit le symbole de chaque élément présent, suivi en bas à droite d'un petit nombre, l'indice, qui indique le nombre d'atomes de cet élément dans la molécule. Quand il n'y a qu'un atome, on n'écrit pas l'indice 1.",
                "Exemples : la formule de l'eau est H₂O : 2 atomes d'hydrogène et 1 atome d'oxygène, soit 3 atomes. La formule du dioxyde de carbone est CO₂ : 1 atome de carbone et 2 atomes d'oxygène. La formule du méthane est CH₄ : 1 atome de carbone et 4 atomes d'hydrogène, soit 5 atomes.",
              ],
              box: { label: "Règle", text: "Dans une formule, l'indice écrit en bas à droite d'un symbole donne le nombre d'atomes de cet élément. L'indice 1 ne s'écrit pas : H₂O contient 2 H et 1 O." },
            },
            {
              heading: "Les molécules à connaître",
              paragraphs: [
                "Le dioxygène O₂ (2 atomes d'oxygène), le dihydrogène H₂ (2 atomes d'hydrogène) et le diazote N₂ (2 atomes d'azote) sont formés d'un seul élément. L'eau H₂O, le dioxyde de carbone CO₂, le méthane CH₄ et le monoxyde de carbone CO sont formés de plusieurs éléments.",
                "Le nom aide souvent à retrouver la formule : « di » signifie deux et « mono » signifie un. Le dioxyde de carbone contient deux atomes d'oxygène (CO₂), le monoxyde de carbone n'en contient qu'un (CO).",
              ],
              box: { label: "À retenir", text: "Dioxygène O₂ ; dihydrogène H₂ ; diazote N₂ ; eau H₂O ; dioxyde de carbone CO₂ ; monoxyde de carbone CO ; méthane CH₄." },
            },
            {
              heading: "Indice ou nombre de molécules ?",
              paragraphs: [
                "Un nombre écrit devant une formule, en grand, indique un nombre de molécules. 3 H₂O représente trois molécules d'eau : elles contiennent en tout 3 × 2 = 6 atomes d'hydrogène et 3 × 1 = 3 atomes d'oxygène. De même, 2 O représente deux atomes d'oxygène séparés, alors que O₂ représente une molécule formée de deux atomes d'oxygène liés.",
                "On ne peut jamais modifier un indice sans changer de substance. H₂O est l'eau, mais H₂O₂ est l'eau oxygénée, une tout autre espèce chimique, utilisée comme désinfectant. Pour compter plusieurs molécules, on change le nombre placé devant, jamais l'indice.",
              ],
              box: { label: "Règle", text: "Le nombre placé devant une formule multiplie toute la molécule. Pour compter les atomes de « n » molécules, on multiplie chaque indice par n : 2 CO₂ contient 2 C et 4 O." },
            },
          ],
          keyPoints: [
            "Une molécule est un groupe d'atomes liés ; elle est représentée par une formule chimique.",
            "L'indice, en bas à droite d'un symbole, donne le nombre d'atomes de cet élément ; l'indice 1 ne s'écrit pas.",
            "O₂ dioxygène, H₂ dihydrogène, N₂ diazote, H₂O eau, CO₂ dioxyde de carbone, CH₄ méthane.",
            "« di » signifie deux, « mono » signifie un.",
            "Un nombre devant la formule compte les molécules : 3 H₂O contient 6 H et 3 O.",
            "Changer un indice change la substance : H₂O (eau) et H₂O₂ (eau oxygénée) sont différentes.",
          ],
          example: {
            statement: "Que représente l'écriture 2 CO₂ ? Combien d'atomes de chaque sorte, et combien d'atomes au total, cela représente-t-il ?",
            solution: [
              "CO₂ est la formule de la molécule de dioxyde de carbone : 1 atome de carbone et 2 atomes d'oxygène.",
              "Le nombre 2 placé devant indique deux molécules de dioxyde de carbone.",
              "Atomes de carbone : 2 × 1 = 2. Atomes d'oxygène : 2 × 2 = 4.",
              "Total : 2 + 4 = 6 atomes.",
              "Réponse : 2 CO₂ représente deux molécules de dioxyde de carbone, soit 2 atomes de carbone et 4 atomes d'oxygène, 6 atomes au total.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque formule, donnez le nom de la molécule, le nombre d'atomes de chaque élément et le nombre total d'atomes : a) N₂ ; b) H₂O ; c) CO₂ ; d) CH₄.",
              hint: "Lisez chaque symbole suivi de son indice ; s'il n'y a pas d'indice, il y a un seul atome.",
              solution: [
                "a) N₂ : diazote ; 2 atomes d'azote ; 2 atomes au total.",
                "b) H₂O : eau ; 2 atomes d'hydrogène et 1 atome d'oxygène ; 3 atomes au total.",
                "c) CO₂ : dioxyde de carbone ; 1 atome de carbone et 2 atomes d'oxygène ; 3 atomes au total.",
                "d) CH₄ : méthane ; 1 atome de carbone et 4 atomes d'hydrogène ; 5 atomes au total.",
              ],
            },
            {
              level: 2,
              statement: "1) Écrivez la formule de chaque molécule : a) l'ammoniac, formé de 1 atome d'azote et 3 atomes d'hydrogène ; b) l'ozone, formé de 3 atomes d'oxygène ; c) le dioxyde de soufre, formé de 1 atome de soufre (S) et 2 atomes d'oxygène ; d) l'éthane, formé de 2 atomes de carbone et 6 atomes d'hydrogène. 2) Combien d'atomes de chaque sorte y a-t-il dans 4 molécules d'ammoniac ?",
              hint: "Écrivez les symboles dans l'ordre de l'énoncé et placez chaque nombre d'atomes en indice, sauf s'il vaut 1. Pour plusieurs molécules, multipliez chaque indice.",
              solution: [
                "1) a) Ammoniac : NH₃. b) Ozone : O₃. c) Dioxyde de soufre : SO₂. d) Éthane : C₂H₆.",
                "2) 4 NH₃ : atomes d'azote : 4 × 1 = 4 ; atomes d'hydrogène : 4 × 3 = 12 ; soit 16 atomes au total.",
                "Réponse : NH₃, O₃, SO₂, C₂H₆ ; 4 molécules d'ammoniac contiennent 4 atomes d'azote et 12 atomes d'hydrogène.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Le glucose, un sucre présent dans le raisin, a pour formule C₆H₁₂O₆. Combien d'atomes de chaque sorte contient une molécule ? Combien d'atomes au total ? 2) Combien d'atomes de chaque sorte contiennent 5 molécules de glucose ? 3) Le sucre de table (saccharose) a pour formule C₁₂H₂₂O₁₁. Combien d'atomes contient une molécule ? 4) Eva affirme : « 2 H₂O contient 2 atomes d'hydrogène. » Max affirme : « Pour écrire deux molécules d'eau, on peut écrire H₄O₂. » Corrigez leurs erreurs.",
              hint: "Additionnez les indices pour obtenir le nombre total d'atomes. Le nombre devant la formule multiplie chaque indice ; un indice, lui, ne doit jamais être modifié.",
              solution: [
                "1) C₆H₁₂O₆ : 6 atomes de carbone, 12 atomes d'hydrogène, 6 atomes d'oxygène, soit 6 + 12 + 6 = 24 atomes.",
                "2) 5 C₆H₁₂O₆ : 5 × 6 = 30 atomes de carbone, 5 × 12 = 60 atomes d'hydrogène, 5 × 6 = 30 atomes d'oxygène (120 atomes au total).",
                "3) C₁₂H₂₂O₁₁ : 12 + 22 + 11 = 45 atomes.",
                "4) Eva se trompe : 2 H₂O représente deux molécules d'eau, qui contiennent 2 × 2 = 4 atomes d'hydrogène (et 2 atomes d'oxygène).",
                "Max se trompe aussi : H₄O₂ serait une seule molécule, qui n'est pas l'eau. Deux molécules d'eau s'écrivent 2 H₂O : on change le nombre devant, pas les indices.",
                "Réponse : 24 atomes par molécule de glucose ; 30 C, 60 H et 30 O dans 5 molécules ; 45 atomes par molécule de saccharose ; 2 H₂O contient 4 atomes d'hydrogène et s'écrit ainsi, et non H₄O₂.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque formule chimique au nom de la molécule.",
            pairs: [
              { left: "O₂", right: "Dioxygène" },
              { left: "H₂", right: "Dihydrogène" },
              { left: "N₂", right: "Diazote" },
              { left: "H₂O", right: "Eau" },
              { left: "CO₂", right: "Dioxyde de carbone" },
              { left: "CH₄", right: "Méthane" },
            ],
          },
          quiz: [
            {
              q: "Combien d'atomes contient une molécule d'eau H₂O ?",
              options: ["2", "3", "1", "4"],
              answer: 1,
              why: "H₂O contient 2 atomes d'hydrogène et 1 atome d'oxygène, soit 3 atomes.",
            },
            {
              q: "Quelle est la formule du dioxyde de carbone ?",
              options: ["CO", "C₂O", "CO₂", "Co₂"],
              answer: 2,
              why: "« Di » signifie deux : le dioxyde de carbone contient 1 atome de carbone et 2 atomes d'oxygène, CO₂.",
            },
            {
              q: "Combien d'atomes d'hydrogène y a-t-il dans 3 CH₄ ?",
              options: ["4", "7", "3", "12"],
              answer: 3,
              why: "Chaque molécule CH₄ contient 4 atomes d'hydrogène : 3 × 4 = 12.",
            },
            {
              q: "Quelle différence y a-t-il entre 2 O et O₂ ?",
              options: ["2 O : deux atomes séparés ; O₂ : une molécule", "Aucune : les deux écritures désignent la même chose", "2 O est une molécule ; O₂ deux atomes"],
              answer: 0,
              why: "Le nombre devant compte des atomes ou des molécules séparés ; l'indice indique des atomes liés dans une même molécule.",
            },
            {
              q: "Quelle molécule est formée d'un seul élément ?",
              options: ["H₂O", "CH₄", "N₂", "CO"],
              answer: 2,
              why: "Le diazote N₂ ne contient que des atomes d'azote ; les autres molécules contiennent deux éléments.",
            },
          ],
          trap: "Confondre l'indice et le nombre placé devant la formule : 3 H₂O contient 6 atomes d'hydrogène (et non 2 ou 5), et l'on ne peut pas écrire H₆O₃ pour trois molécules d'eau.",
          method: "Pour compter les atomes, faites un petit tableau avec une colonne par élément : lisez chaque indice (1 s'il n'est pas écrit), puis multipliez-le par le nombre placé devant la formule.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'modele-particulaire',
          title: 'Les états de la matière expliqués par les molécules',
          minutes: 30,
          objectives: [
            "Décrire les trois états de la matière à l'échelle des molécules.",
            "Interpréter les changements d'état au niveau microscopique.",
            "Expliquer la conservation de la masse et la variation du volume lors d'un changement d'état.",
          ],
          course: [
            {
              heading: "Un modèle pour voir l'invisible",
              paragraphs: [
                "Les molécules sont bien trop petites pour être observées. Pour expliquer ce que l'on voit à notre échelle (l'échelle macroscopique), on utilise un modèle à l'échelle des molécules (l'échelle microscopique) : chaque molécule est représentée par un petit disque, tous identiques pour un même corps pur.",
                "Ce modèle repose sur une idée importante : les molécules ne sont jamais complètement immobiles. Elles sont toujours agitées, et cette agitation est d'autant plus grande que la température est élevée. Un morceau de glace froid contient des molécules qui vibrent un peu ; la vapeur d'eau très chaude contient des molécules qui se déplacent très vite.",
              ],
              box: { label: "Repère", text: "Échelle macroscopique : ce que l'on observe à l'œil nu. Échelle microscopique : celle des molécules, que l'on décrit avec un modèle. Plus la température est élevée, plus les molécules sont agitées." },
            },
            {
              heading: "Solide, liquide et gaz à l'échelle des molécules",
              paragraphs: [
                "Dans un solide, les molécules sont très proches les unes des autres (elles se touchent) et elles sont souvent rangées de façon ordonnée. Chacune vibre sur place sans quitter sa position. C'est pourquoi un solide a une forme propre et un volume propre.",
                "Dans un liquide, les molécules sont aussi très proches, mais en désordre : elles glissent les unes sur les autres. Le liquide prend donc la forme du récipient, mais garde son volume ; on ne peut presque pas le comprimer, puisque les molécules se touchent déjà.",
                "Dans un gaz, les molécules sont très éloignées les unes des autres, en désordre, et se déplacent rapidement dans toutes les directions. Un gaz occupe tout l'espace qui lui est offert, et on peut le comprimer en rapprochant ses molécules, car il y a beaucoup de vide entre elles.",
              ],
              box: { label: "À retenir", text: "Solide : molécules proches et ordonnées, qui vibrent sur place. Liquide : molécules proches et désordonnées, qui glissent. Gaz : molécules éloignées et désordonnées, très agitées." },
            },
            {
              heading: "Interpréter les changements d'état",
              paragraphs: [
                "Lors d'un changement d'état, les molécules ne sont pas transformées : ce sont les mêmes molécules H₂O dans la glace, dans l'eau liquide et dans la vapeur d'eau. Seuls changent leur agitation, leur disposition et la distance qui les sépare. Pendant la fusion, les molécules quittent leur rangement ordonné ; pendant la vaporisation, elles s'échappent du liquide et s'éloignent les unes des autres.",
                "Comme le nombre de molécules ne change pas, la masse se conserve : 10 g de glace donnent 10 g d'eau liquide. En revanche, le volume peut varier, car l'espace entre les molécules change. La vaporisation augmente énormément le volume. L'eau est un cas particulier : en se solidifiant, ses molécules s'organisent en laissant plus d'espace, et le volume augmente d'environ 9 %. C'est pour cela qu'une bouteille pleine d'eau peut éclater au congélateur.",
              ],
              box: { label: "Propriété", text: "Lors d'un changement d'état, le nombre de molécules et donc la masse se conservent ; le volume peut varier, car la distance entre les molécules change." },
            },
            {
              heading: "Expliquer des phénomènes du quotidien",
              paragraphs: [
                "Quand on ouvre un flacon de parfum dans un coin de la pièce, l'odeur se répand peu à peu : les molécules de parfum, à l'état gazeux, se déplacent sans cesse et se dispersent parmi les molécules de l'air. Quand on dissout du sucre dans l'eau, les molécules de sucre se dispersent entre les molécules d'eau : elles deviennent invisibles mais sont toujours là, d'où le goût sucré.",
                "Attention à une erreur fréquente : la vapeur d'eau est un gaz invisible. Le petit nuage blanc qui s'échappe d'une casserole d'eau bouillante n'est pas de la vapeur, mais de minuscules gouttelettes d'eau liquide, formées quand la vapeur se refroidit au contact de l'air (c'est une liquéfaction).",
              ],
            },
          ],
          keyPoints: [
            "Les molécules sont toujours agitées, et d'autant plus que la température est élevée.",
            "Solide : molécules proches et ordonnées ; liquide : proches et désordonnées ; gaz : éloignées et désordonnées.",
            "Un gaz se comprime facilement, car ses molécules sont éloignées ; un liquide presque pas.",
            "Lors d'un changement d'état, les molécules ne changent pas : la masse se conserve.",
            "Le volume peut varier ; l'eau est une exception : la glace occupe environ 9 % de volume en plus.",
            "La vapeur d'eau est invisible ; le « nuage » au-dessus de l'eau bouillante est fait de gouttelettes.",
          ],
          example: {
            statement: "On bouche l'extrémité de deux seringues : l'une contient de l'air, l'autre de l'eau liquide. On appuie sur les pistons. Le piston de la seringue d'air s'enfonce, celui de la seringue d'eau ne bouge presque pas. Expliquez ces observations à l'échelle des molécules.",
            solution: [
              "Dans l'air (un gaz), les molécules sont très éloignées les unes des autres : il y a beaucoup d'espace vide entre elles.",
              "En appuyant sur le piston, on rapproche les molécules d'air : le volume diminue, le gaz est comprimé.",
              "Dans l'eau liquide, les molécules sont déjà en contact : on ne peut presque pas les rapprocher davantage.",
              "Réponse : l'air est compressible car ses molécules sont éloignées ; l'eau liquide est presque incompressible car ses molécules se touchent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On décrit trois modèles d'un même corps pur. Modèle 1 : des disques qui se touchent, rangés en lignes régulières. Modèle 2 : quelques disques très espacés, répartis au hasard dans tout le récipient. Modèle 3 : des disques qui se touchent, disposés en désordre, au fond du récipient. Associez chaque modèle à un état de la matière, en justifiant.",
              hint: "Regardez deux critères : les molécules sont-elles proches ou éloignées ? Sont-elles ordonnées ou en désordre ?",
              solution: [
                "Modèle 1 : molécules proches et ordonnées : c'est l'état solide.",
                "Modèle 2 : molécules éloignées, en désordre, qui occupent tout le récipient : c'est l'état gazeux.",
                "Modèle 3 : molécules proches mais en désordre, qui occupent le fond du récipient : c'est l'état liquide.",
                "Réponse : 1 solide, 2 gaz, 3 liquide.",
              ],
            },
            {
              level: 2,
              statement: "Un glaçon a une masse de 18 g et un volume de 20 cm³. On le laisse fondre entièrement dans un récipient fermé. La masse volumique de l'eau liquide est 1 g/cm³. 1) Quelle est la masse de l'eau liquide obtenue ? Justifiez à l'échelle des molécules. 2) Calculez le volume de l'eau liquide obtenue. 3) Le volume a-t-il augmenté ou diminué ? Pourquoi ?",
              hint: "Pendant un changement d'état, les molécules sont les mêmes et en même nombre. Pour le volume, utilisez V = m ÷ ρ.",
              solution: [
                "1) Pendant la fusion, les molécules d'eau ne sont ni créées ni détruites : il y a autant de molécules avant et après. La masse se conserve : m = 18 g.",
                "2) V = m ÷ ρ = 18 ÷ 1 = 18 cm³.",
                "3) Le volume a diminué, de 20 cm³ à 18 cm³. Dans la glace, les molécules d'eau sont rangées en laissant plus d'espace entre elles que dans l'eau liquide.",
                "Réponse : on obtient 18 g d'eau liquide, qui occupent 18 cm³ : le volume diminue lors de la fusion de la glace, mais la masse se conserve.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Expliquez chacune des observations suivantes à l'échelle des molécules, en une ou deux phrases. 1) Une bouteille en verre remplie d'eau et bien fermée éclate dans le congélateur. 2) Un ballon de baudruche bien fermé, posé au soleil, gonfle un peu. 3) Une flaque d'eau disparaît par une journée chaude, sans qu'on voie de vapeur. 4) Tom affirme : « Quand l'eau bout, les molécules d'eau grossissent, c'est pour cela que la vapeur prend plus de place. » A-t-il raison ?",
              hint: "Pensez à trois idées du modèle : la disposition des molécules dans chaque état, leur agitation qui augmente avec la température, et le fait qu'elles ne changent pas de taille.",
              solution: [
                "1) En se solidifiant, les molécules d'eau se rangent en laissant plus d'espace entre elles : la glace occupe environ 9 % de volume en plus que l'eau liquide. Le verre ne peut pas s'étirer, il éclate.",
                "2) Au soleil, l'air du ballon se réchauffe : ses molécules s'agitent davantage et frappent plus fort et plus souvent la paroi du ballon, qui se tend et gonfle un peu.",
                "3) À la surface de la flaque, des molécules d'eau s'échappent du liquide et passent dans l'air à l'état gazeux (évaporation). La vapeur d'eau est invisible, car ses molécules sont isolées et éloignées.",
                "4) Non : les molécules gardent la même taille. Lors de l'ébullition, ce sont les distances entre les molécules qui deviennent beaucoup plus grandes : c'est pour cela que le gaz occupe plus de place.",
                "Réponse : la glace prend plus de place que l'eau liquide ; la chaleur augmente l'agitation des molécules ; l'évaporation disperse les molécules dans l'air ; ce n'est pas la taille des molécules mais l'espace entre elles qui change.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La matière à l'échelle des molécules.",
            statements: [
              { text: "Dans un solide, les molécules sont totalement immobiles.", true: false, why: "Elles restent à leur place, mais elles vibrent sans cesse." },
              { text: "Dans un gaz, les molécules sont très éloignées les unes des autres.", true: true, why: "C'est pour cela qu'un gaz occupe tout l'espace disponible et qu'on peut le comprimer." },
              { text: "Lors de la fusion de la glace, les molécules d'eau se transforment en d'autres molécules.", true: false, why: "Ce sont les mêmes molécules H₂O : seules leur disposition et leur agitation changent." },
              { text: "Le nombre de molécules ne change pas lors d'un changement d'état.", true: true, why: "C'est pour cela que la masse se conserve." },
              { text: "Le nuage blanc au-dessus d'une casserole d'eau bouillante est de la vapeur d'eau.", true: false, why: "La vapeur d'eau est invisible ; ce nuage est formé de fines gouttelettes d'eau liquide." },
              { text: "Plus la température est élevée, plus les molécules sont agitées.", true: true, why: "L'agitation des molécules augmente avec la température." },
              { text: "Les molécules d'un gaz sont plus grosses que celles du liquide correspondant.", true: false, why: "Les molécules gardent la même taille : c'est l'espace entre elles qui augmente." },
            ],
          },
          quiz: [
            {
              q: "Dans un liquide, les molécules sont :",
              options: ["éloignées et en désordre", "proches et ordonnées", "proches et en désordre", "immobiles"],
              answer: 2,
              why: "Dans un liquide, les molécules se touchent mais glissent les unes sur les autres, en désordre.",
            },
            {
              q: "Pourquoi peut-on comprimer un gaz ?",
              options: ["Ses molécules sont éloignées", "Ses molécules rétrécissent quand on appuie", "Il est léger", "Il est chaud"],
              answer: 0,
              why: "Il y a beaucoup d'espace entre les molécules d'un gaz : on peut les rapprocher.",
            },
            {
              q: "200 g d'eau liquide se transforment entièrement en glace. La masse de glace obtenue est :",
              options: ["plus de 200 g", "moins de 200 g", "nulle", "200 g"],
              answer: 3,
              why: "Le nombre de molécules ne change pas lors d'un changement d'état : la masse se conserve.",
            },
            {
              q: "Lors de l'ébullition de l'eau, qu'est-ce qui change à l'échelle des molécules ?",
              options: ["La taille des molécules", "La distance entre les molécules", "La formule chimique des molécules d'eau", "Le nombre de molécules"],
              answer: 1,
              why: "Les molécules restent les mêmes et en même nombre ; elles s'éloignent beaucoup les unes des autres.",
            },
            {
              q: "Le nuage blanc au-dessus d'une bouilloire est formé :",
              options: ["de vapeur d'eau", "de fumée produite par la chaleur", "de gouttelettes d'eau liquide"],
              answer: 2,
              why: "La vapeur d'eau, invisible, se refroidit au contact de l'air et se liquéfie en fines gouttelettes visibles.",
            },
          ],
          trap: "Croire que les molécules changent lors d'un changement d'état (qu'elles grossissent, fondent ou disparaissent) : ce sont toujours les mêmes molécules, seuls leur agitation et l'espace entre elles changent.",
          method: "Pour expliquer un phénomène à l'échelle des molécules, répondez à trois questions : les molécules sont-elles proches ou éloignées ? ordonnées ou en désordre ? plus ou moins agitées ? Puis reliez ces réponses à ce que l'on observe.",
        },
      ],
    },
    /* ================================================================== */
    /* LES TRANSFORMATIONS CHIMIQUES                                       */
    /* ================================================================== */
    {
      id: 'transformations-chimiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'physique-ou-chimique',
          title: 'Transformation physique ou transformation chimique ?',
          minutes: 30,
          objectives: [
            "Identifier expérimentalement une transformation chimique.",
            "Distinguer transformation chimique et transformation physique, transformation chimique et mélange.",
            "Mettre en œuvre des tests caractéristiques d'espèces chimiques à partir d'une banque fournie.",
          ],
          course: [
            {
              heading: "Deux sortes de transformations",
              paragraphs: [
                "Lors d'une transformation physique, les espèces chimiques restent les mêmes : seul leur état ou leur aspect change. La fusion d'un glaçon, l'évaporation d'une flaque, la dissolution du sucre dans l'eau ou le broyage d'un morceau de craie sont des transformations physiques. Après la fusion, c'est toujours de l'eau ; après la dissolution, le sucre est toujours là.",
                "Lors d'une transformation chimique, certaines espèces chimiques disparaissent et de nouvelles espèces chimiques apparaissent. La combustion du bois, la rouille du fer, la cuisson d'un œuf ou la réaction du vinaigre sur le bicarbonate de soude sont des transformations chimiques : on obtient des substances qui n'existaient pas au départ.",
              ],
              box: { label: "Définition", text: "Transformation physique : les espèces chimiques sont conservées (changement d'état, dissolution, mélange). Transformation chimique : des espèces disparaissent et de nouvelles espèces apparaissent." },
            },
            {
              heading: "Les indices d'une transformation chimique",
              paragraphs: [
                "Plusieurs observations peuvent faire penser à une transformation chimique : un dégagement de gaz (une effervescence, des bulles), un changement de couleur, l'apparition d'un solide dans un liquide, une variation de température (le mélange chauffe ou refroidit), l'apparition d'une flamme ou d'une odeur.",
                "Ces observations sont des indices, pas des preuves. L'eau qui bout dégage aussi des bulles de gaz, et pourtant c'est une transformation physique : les bulles sont de la vapeur d'eau, la même espèce chimique que l'eau liquide. Pour prouver qu'une transformation est chimique, il faut montrer qu'une espèce chimique nouvelle, absente au départ, s'est formée.",
              ],
              box: { label: "À retenir", text: "Une effervescence, un changement de couleur ou de température sont des indices. La preuve d'une transformation chimique est l'identification d'une espèce nouvelle, absente au départ." },
            },
            {
              heading: "Les tests caractéristiques",
              paragraphs: [
                "Pour identifier une espèce chimique, on utilise un test caractéristique : une expérience simple dont le résultat n'est observé qu'avec cette espèce. Le dioxyde de carbone trouble l'eau de chaux (qui devient blanchâtre). L'eau fait passer le sulfate de cuivre anhydre du blanc au bleu.",
                "Le dioxygène ravive une bûchette incandescente (un bout de bois qui rougit sans flamme) : elle se rallume avec une flamme vive. Le dihydrogène produit une petite détonation, comme un aboiement, quand on approche une flamme de l'ouverture du tube qui le contient.",
              ],
              box: { label: "Repère", text: "Eau de chaux qui se trouble : dioxyde de carbone. Sulfate de cuivre anhydre qui bleuit : eau. Bûchette incandescente qui se rallume : dioxygène. Petite détonation à l'approche d'une flamme : dihydrogène." },
            },
            {
              heading: "Mélange ou transformation chimique ?",
              paragraphs: [
                "Mélanger du sel et de l'eau ne crée aucune espèce nouvelle : l'eau salée a le goût du sel, et l'on retrouve le sel en faisant évaporer l'eau. C'est un simple mélange. Au contraire, si l'on verse du vinaigre sur du bicarbonate de soude, une effervescence apparaît ; le gaz recueilli trouble l'eau de chaux : c'est du dioxyde de carbone, qui n'était pas présent au départ. Il s'agit d'une transformation chimique.",
              ],
            },
          ],
          keyPoints: [
            "Transformation physique : les espèces chimiques sont les mêmes avant et après.",
            "Transformation chimique : des espèces disparaissent, de nouvelles espèces apparaissent.",
            "Indices : gaz, changement de couleur ou de température, solide qui apparaît, flamme.",
            "Preuve : un test caractéristique montre qu'une espèce nouvelle s'est formée.",
            "Eau de chaux troublée : CO₂. Sulfate de cuivre anhydre bleui : eau.",
            "Bûchette incandescente rallumée : O₂. Petite détonation : H₂.",
          ],
          example: {
            statement: "Dans un verre de vinaigre, on ajoute une cuillère de bicarbonate de soude : une forte effervescence se produit. On recueille le gaz formé et on le fait barboter dans de l'eau de chaux, qui se trouble. S'agit-il d'une transformation physique ou chimique ? Justifiez.",
            solution: [
              "L'effervescence est un indice : un gaz se forme.",
              "Le gaz trouble l'eau de chaux : c'est le test caractéristique du dioxyde de carbone.",
              "Ni le vinaigre ni le bicarbonate de soude (un solide) ne contenaient ce gaz au départ : une espèce chimique nouvelle est apparue.",
              "Réponse : c'est une transformation chimique, qui produit notamment du dioxyde de carbone.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque transformation (physique ou chimique) : a) la fonte d'un glaçon ; b) la combustion d'une bûche ; c) la dissolution du sucre dans le café ; d) la formation de rouille sur un vélo ; e) la cuisson d'un œuf ; f) l'évaporation de l'eau d'une flaque ; g) le mélange de sel et de poivre.",
              hint: "Demandez-vous si l'on obtient une substance nouvelle, ou si l'on retrouve les mêmes substances sous une autre forme.",
              solution: [
                "a) Physique : la glace devient de l'eau liquide, c'est la même espèce.",
                "b) Chimique : le bois disparaît, des fumées, des gaz et des cendres apparaissent.",
                "c) Physique : le sucre est toujours là, dispersé dans le café (qui a un goût sucré).",
                "d) Chimique : le fer se transforme en rouille, une espèce différente.",
                "e) Chimique : le blanc d'œuf change d'aspect de façon définitive, de nouvelles substances se sont formées.",
                "f) Physique : l'eau liquide devient de la vapeur d'eau.",
                "g) Physique : c'est un simple mélange, on pourrait trier les grains.",
                "Réponse : physiques : a, c, f, g ; chimiques : b, d, e.",
              ],
            },
            {
              level: 2,
              statement: "Banque de tests : eau de chaux (se trouble avec le dioxyde de carbone) ; sulfate de cuivre anhydre (bleuit avec l'eau) ; bûchette incandescente (se rallume avec le dioxygène) ; flamme (petite détonation avec le dihydrogène). 1) Un gaz inconnu ne trouble pas l'eau de chaux, mais une bûchette incandescente s'y rallume vivement. Quel est ce gaz ? 2) Quelques gouttes d'un liquide incolore font bleuir le sulfate de cuivre anhydre. Peut-on affirmer que ce liquide est de l'eau pure ? 3) Quel test faut-il réaliser pour savoir si un gaz contient du dihydrogène ?",
              hint: "Un test positif indique la présence d'une espèce, mais ne dit pas si elle est seule.",
              solution: [
                "1) La bûchette incandescente se rallume : le gaz est du dioxygène (ce n'est pas du dioxyde de carbone, puisque l'eau de chaux ne se trouble pas).",
                "2) Non : le test montre que le liquide contient de l'eau, mais il pourrait s'agir d'un mélange, comme de l'eau salée. Pour savoir si c'est de l'eau pure, il faudrait mesurer une constante physique (par exemple la température d'ébullition).",
                "3) On approche une flamme de l'ouverture du tube contenant le gaz : une petite détonation indique la présence de dihydrogène.",
                "Réponse : le gaz est du dioxygène ; le liquide contient de l'eau, sans être forcément de l'eau pure ; le dihydrogène se reconnaît à la petite détonation au contact d'une flamme.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Expérience 1 : on place un comprimé effervescent dans un verre d'eau ; des bulles se forment. Le comprimé sec ne contient aucun gaz ; il contient un acide et du bicarbonate de sodium, qui ne réagissent pas tant qu'ils sont secs. Expérience 2 : on secoue une bouteille de soda puis on l'ouvre ; des bulles se forment. Le soda contient du dioxyde de carbone dissous. Dans les deux cas, le gaz recueilli trouble l'eau de chaux. 1) Quel gaz se dégage dans les deux expériences ? 2) Pour chaque expérience, dites s'il s'agit d'une transformation physique ou chimique, et justifiez. 3) Que montre cette comparaison sur les indices d'une transformation chimique ?",
              hint: "Le même gaz apparaît dans les deux cas. Demandez-vous s'il était déjà présent avant l'expérience, sous une autre forme, ou s'il a été fabriqué.",
              solution: [
                "1) Dans les deux cas, le gaz trouble l'eau de chaux : c'est du dioxyde de carbone.",
                "2) Expérience 1 : le comprimé sec ne contenait pas de dioxyde de carbone ; ce gaz s'est formé quand l'acide et le bicarbonate ont réagi au contact de l'eau. Une espèce nouvelle apparaît : c'est une transformation chimique.",
                "Expérience 2 : le dioxyde de carbone était déjà présent, dissous dans le soda ; en ouvrant la bouteille, il s'échappe sous forme de bulles. Aucune espèce nouvelle n'apparaît : c'est une transformation physique.",
                "3) Un dégagement de gaz n'est qu'un indice : il ne suffit pas pour conclure. Il faut savoir si l'espèce identifiée est nouvelle ou si elle était déjà présente au départ.",
                "Réponse : du dioxyde de carbone se dégage dans les deux cas ; l'expérience 1 est une transformation chimique, l'expérience 2 une transformation physique ; un indice ne remplace pas la preuve qu'une espèce nouvelle s'est formée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque observation à ce qu'elle permet de conclure.",
            pairs: [
              { left: "Eau de chaux qui se trouble", right: "Présence de dioxyde de carbone" },
              { left: "Sulfate de cuivre anhydre qui bleuit", right: "Présence d'eau" },
              { left: "Bûchette incandescente qui se rallume", right: "Présence de dioxygène" },
              { left: "Petite détonation à l'approche d'une flamme", right: "Présence de dihydrogène" },
              { left: "Une espèce nouvelle est apparue", right: "Transformation chimique" },
              { left: "Seul l'état de l'espèce a changé", right: "Transformation physique" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces transformations est chimique ?",
              options: ["La fonte du beurre", "La rouille d'un clou", "L'ébullition de l'eau", "La dissolution du sel"],
              answer: 1,
              why: "La rouille est une espèce nouvelle, formée à partir du fer : c'est une transformation chimique.",
            },
            {
              q: "Quel test permet de mettre en évidence le dioxyde de carbone ?",
              options: ["La bûchette incandescente", "Le sulfate de cuivre anhydre", "L'eau de chaux", "La flamme"],
              answer: 2,
              why: "Le dioxyde de carbone trouble l'eau de chaux.",
            },
            {
              q: "Le sulfate de cuivre anhydre devient bleu. Cela montre la présence :",
              options: ["d'eau", "de dioxygène", "de dioxyde de carbone", "de sel"],
              answer: 0,
              why: "Le sulfate de cuivre anhydre, blanc, devient bleu au contact de l'eau.",
            },
            {
              q: "La dissolution du sucre dans l'eau est :",
              options: ["une transformation chimique", "une combustion", "une transformation physique"],
              answer: 2,
              why: "Le sucre est toujours présent, dispersé dans l'eau : aucune espèce nouvelle n'apparaît.",
            },
            {
              q: "Un dégagement de gaz prouve-t-il une transformation chimique ?",
              options: ["Oui, toujours", "Non, c'est seulement un indice", "Oui, si le gaz est incolore", "Oui, si le liquide chauffe en même temps"],
              answer: 1,
              why: "L'eau qui bout dégage un gaz sans transformation chimique : il faut montrer qu'une espèce nouvelle s'est formée.",
            },
          ],
          trap: "Prendre un indice pour une preuve : des bulles, un changement de couleur ou de température ne suffisent pas. Une transformation est chimique seulement si une espèce nouvelle, absente au départ, est apparue.",
          method: "Face à une transformation, posez-vous la question : « Est-ce que je retrouve les mêmes substances à la fin ? » Si oui, elle est physique ; si une substance nouvelle apparaît (prouvée par un test), elle est chimique. Apprenez les quatre tests sous forme de fiche : test, résultat, espèce.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reactifs-produits',
          title: 'Réactifs, produits et équation de réaction',
          minutes: 30,
          objectives: [
            "Identifier les réactifs et les produits d'une transformation chimique.",
            "Écrire le bilan d'une transformation chimique en mots.",
            "Utiliser une équation de réaction chimique fournie pour décrire une transformation chimique observée.",
            "Interpréter une transformation chimique comme une redistribution des atomes.",
          ],
          course: [
            {
              heading: "Réactifs et produits",
              paragraphs: [
                "Au cours d'une transformation chimique, certaines espèces sont consommées : ce sont les réactifs. D'autres espèces sont formées : ce sont les produits. Lorsque du charbon brûle, le carbone et le dioxygène de l'air sont les réactifs ; le dioxyde de carbone formé est le produit.",
                "La transformation s'arrête lorsque l'un des réactifs a été entièrement consommé. Par exemple, une bougie placée sous un bocal fermé finit par s'éteindre : il ne reste plus assez de dioxygène, alors qu'il reste de la cire. Une espèce présente qui ne participe pas à la transformation n'est ni un réactif ni un produit : c'est le cas du diazote de l'air lors d'une combustion.",
              ],
              box: { label: "Définition", text: "Les réactifs sont les espèces chimiques consommées lors d'une transformation chimique. Les produits sont les espèces chimiques formées." },
            },
            {
              heading: "Le bilan en mots",
              paragraphs: [
                "On résume une transformation chimique par un bilan : on écrit les noms des réactifs à gauche, puis une flèche, puis les noms des produits à droite. Exemple : carbone + dioxygène → dioxyde de carbone. Autre exemple : fer + dioxygène → oxyde de fer.",
                "La flèche se lit « donne » ou « se transforme en » ; le signe « + » se lit « et ». Attention, la flèche n'est pas un signe égal : elle indique le sens de la transformation, des réactifs vers les produits.",
              ],
              box: { label: "Règle", text: "Bilan : réactif 1 + réactif 2 → produit 1 + produit 2. La flèche se lit « donne » ; elle va des réactifs vers les produits." },
            },
            {
              heading: "L'équation de réaction",
              paragraphs: [
                "En remplaçant les noms par les formules chimiques, on obtient l'équation de réaction. Pour la combustion du carbone : C + O₂ → CO₂. Pour la combustion du dihydrogène dans le dioxygène : 2 H₂ + O₂ → 2 H₂O.",
                "Les nombres placés devant les formules indiquent dans quelles proportions les molécules réagissent et se forment. L'équation 2 H₂ + O₂ → 2 H₂O se lit : « deux molécules de dihydrogène réagissent avec une molécule de dioxygène pour donner deux molécules d'eau ». Le diazote de l'air, qui ne réagit pas, n'apparaît pas dans l'équation.",
              ],
              box: { label: "À retenir", text: "Une équation de réaction s'écrit avec les formules des réactifs (à gauche) et des produits (à droite). Les nombres devant les formules indiquent les proportions de molécules qui réagissent et se forment." },
            },
            {
              heading: "Les atomes se réorganisent",
              paragraphs: [
                "À l'échelle des atomes, une transformation chimique est une réorganisation : les molécules des réactifs se cassent, et leurs atomes s'assemblent autrement pour former les molécules des produits. Lors de la combustion du carbone, chaque atome de carbone s'associe aux deux atomes d'oxygène d'une molécule de dioxygène pour former une molécule de dioxyde de carbone.",
                "On peut comparer cela à des briques de construction : on démonte une maquette et on en construit une autre, différente, avec exactement les mêmes briques. Aucune brique n'est ajoutée ou perdue. C'est pourquoi, dans une équation correcte, on retrouve les mêmes atomes, en même nombre, de chaque côté de la flèche.",
              ],
            },
          ],
          keyPoints: [
            "Réactifs : espèces consommées. Produits : espèces formées.",
            "Bilan en mots : réactifs → produits ; la flèche se lit « donne », le « + » se lit « et ».",
            "Équation de réaction : on remplace les noms par les formules, par exemple C + O₂ → CO₂.",
            "Les nombres devant les formules donnent les proportions de molécules.",
            "Une transformation chimique est une redistribution des atomes : les mêmes atomes s'assemblent autrement.",
            "La transformation s'arrête quand un réactif est entièrement consommé.",
          ],
          example: {
            statement: "On donne l'équation de la combustion du dihydrogène : 2 H₂ + O₂ → 2 H₂O. 1) Nommez les réactifs et le produit. 2) Écrivez le bilan en mots. 3) Traduisez l'équation par une phrase avec des molécules.",
            solution: [
              "1) À gauche de la flèche, les réactifs : H₂, le dihydrogène, et O₂, le dioxygène. À droite, le produit : H₂O, l'eau.",
              "2) Bilan : dihydrogène + dioxygène → eau.",
              "3) Deux molécules de dihydrogène réagissent avec une molécule de dioxygène pour donner deux molécules d'eau.",
              "Réponse : réactifs dihydrogène et dioxygène, produit eau ; dihydrogène + dioxygène → eau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lorsqu'on chauffe du soufre (S) et qu'on le plonge dans un flacon de dioxygène, il brûle avec une flamme bleue et il se forme un gaz à l'odeur piquante, le dioxyde de soufre (SO₂). 1) Quels sont les réactifs ? Quel est le produit ? 2) Écrivez le bilan en mots. 3) L'équation de réaction est S + O₂ → SO₂. Traduisez-la par une phrase.",
              hint: "Les réactifs sont les espèces présentes au départ et consommées ; le produit est l'espèce qui apparaît.",
              solution: [
                "1) Réactifs : le soufre et le dioxygène. Produit : le dioxyde de soufre.",
                "2) Bilan : soufre + dioxygène → dioxyde de soufre.",
                "3) Un atome de soufre réagit avec une molécule de dioxygène pour donner une molécule de dioxyde de soufre.",
                "Réponse : soufre + dioxygène → dioxyde de soufre.",
              ],
            },
            {
              level: 2,
              statement: "On donne l'équation de la combustion du méthane dans l'air : CH₄ + 2 O₂ → CO₂ + 2 H₂O. 1) Nommez les réactifs et les produits. 2) Écrivez le bilan en mots. 3) Traduisez l'équation par une phrase avec des molécules. 4) L'air contient aussi du diazote. Pourquoi n'apparaît-il pas dans l'équation ?",
              hint: "CH₄ est le méthane, O₂ le dioxygène, CO₂ le dioxyde de carbone et H₂O l'eau. Une espèce qui ne réagit pas n'est pas écrite dans l'équation.",
              solution: [
                "1) Réactifs : le méthane (CH₄) et le dioxygène (O₂). Produits : le dioxyde de carbone (CO₂) et l'eau (H₂O).",
                "2) Bilan : méthane + dioxygène → dioxyde de carbone + eau.",
                "3) Une molécule de méthane réagit avec deux molécules de dioxygène pour donner une molécule de dioxyde de carbone et deux molécules d'eau.",
                "4) Le diazote est présent mais il ne réagit pas : il n'est ni consommé ni formé, ce n'est ni un réactif ni un produit.",
                "Réponse : méthane + dioxygène → dioxyde de carbone + eau ; le diazote ne participe pas à la transformation.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On chauffe de la paille de fer et on la plonge dans un flacon contenant du dioxygène. Elle brûle en projetant des étincelles, puis la combustion s'arrête alors qu'il reste un peu de fer. Une poudre noire d'oxyde de fer s'est formée. L'équation de réaction est : 3 Fe + 2 O₂ → Fe₃O₄. 1) Nommez les réactifs et le produit, puis écrivez le bilan en mots. 2) Traduisez l'équation par une phrase. 3) Comptez les atomes de fer et d'oxygène de chaque côté de la flèche. Que constatez-vous ? 4) Pourquoi la combustion s'est-elle arrêtée ? 5) Quel test permettrait de vérifier votre réponse à la question 4 ?",
              hint: "Le nombre devant une formule multiplie tous ses indices. La transformation s'arrête quand un réactif est épuisé : lequel reste-t-il à la fin ?",
              solution: [
                "1) Réactifs : le fer et le dioxygène ; produit : l'oxyde de fer (Fe₃O₄). Bilan : fer + dioxygène → oxyde de fer.",
                "2) Trois atomes de fer réagissent avec deux molécules de dioxygène pour donner une molécule d'oxyde de fer.",
                "3) À gauche : 3 atomes de fer et 2 × 2 = 4 atomes d'oxygène. À droite : 3 atomes de fer et 4 atomes d'oxygène. On retrouve les mêmes atomes, en même nombre, de chaque côté : ils se sont seulement réorganisés.",
                "4) Il reste du fer : c'est donc le dioxygène qui a été entièrement consommé, et la transformation s'arrête faute de dioxygène.",
                "5) On introduit une bûchette incandescente dans le flacon : si elle ne se rallume pas, il n'y a plus (ou presque plus) de dioxygène.",
                "Réponse : fer + dioxygène → oxyde de fer ; 3 Fe et 4 O de chaque côté ; la combustion s'arrête car le dioxygène est épuisé, ce que confirme la bûchette incandescente qui ne se rallume pas.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour passer d'une expérience à l'équation de réaction.",
            items: [
              "Réaliser l'expérience et noter les observations (gaz, couleur, chaleur).",
              "Identifier les espèces formées à l'aide de tests caractéristiques.",
              "Nommer les réactifs et les produits, puis écrire le bilan en mots.",
              "Remplacer chaque nom par la formule chimique de l'espèce.",
              "Vérifier que chaque sorte d'atome est en même nombre de chaque côté de la flèche.",
            ],
          },
          quiz: [
            {
              q: "Lors d'une transformation chimique, les réactifs sont :",
              options: ["les espèces formées", "les espèces consommées", "les espèces qui ne réagissent pas"],
              answer: 1,
              why: "Les réactifs disparaissent (au moins en partie) au cours de la transformation ; les produits sont formés.",
            },
            {
              q: "Dans le bilan carbone + dioxygène → dioxyde de carbone, comment se lit la flèche ?",
              options: ["« donne »", "« égale »", "« plus »", "« moins »"],
              answer: 0,
              why: "La flèche indique le sens de la transformation : les réactifs donnent les produits.",
            },
            {
              q: "Dans l'équation 2 H₂ + O₂ → 2 H₂O, quel est le produit ?",
              options: ["Le dihydrogène", "Le dioxygène", "L'eau", "Le diazote"],
              answer: 2,
              why: "Le produit est écrit à droite de la flèche : H₂O, l'eau.",
            },
            {
              q: "Que se passe-t-il pour les atomes lors d'une transformation chimique ?",
              options: ["Ils disparaissent", "Ils changent de nature", "Ils se multiplient", "Ils se réorganisent"],
              answer: 3,
              why: "Les atomes des réactifs s'assemblent autrement pour former les produits ; ils ne sont ni créés ni détruits.",
            },
            {
              q: "Une bougie s'éteint sous un bocal fermé alors qu'il reste de la cire. Pourquoi ?",
              options: ["La cire est épuisée", "Le dioxygène est épuisé", "Le bocal a refroidi"],
              answer: 1,
              why: "La transformation s'arrête quand un réactif est entièrement consommé : ici le dioxygène, puisqu'il reste de la cire.",
            },
          ],
          trap: "Lire la flèche comme un signe égal, ou placer un réactif du mauvais côté : les réactifs sont toujours à gauche, les produits à droite, et une espèce qui ne réagit pas (comme le diazote de l'air) n'apparaît pas dans le bilan.",
          method: "Pour trouver les réactifs et les produits, faites deux listes : « ce qui disparaît » et « ce qui apparaît ». Écrivez ensuite le bilan en mots avant de passer aux formules, puis relisez l'équation à voix haute en phrase avec des molécules.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conservation-masse',
          title: 'La conservation de la masse et des atomes',
          minutes: 35,
          objectives: [
            "Interpréter une transformation chimique comme une redistribution des atomes.",
            "Utiliser la conservation de la masse lors d'une transformation chimique pour calculer une masse.",
            "Vérifier la conservation des atomes dans une équation de réaction fournie.",
          ],
          course: [
            {
              heading: "Lavoisier et la conservation de la masse",
              paragraphs: [
                "Au XVIIIe siècle, le chimiste français Antoine Lavoisier (1743-1794) réalise des transformations chimiques dans des récipients fermés et pèse avec beaucoup de soin les substances avant et après. Il constate que la masse totale ne change pas : la matière ne se crée pas et ne disparaît pas, elle se transforme. On résume souvent cette découverte par la formule « Rien ne se perd, rien ne se crée, tout se transforme ».",
                "Concrètement, la masse des réactifs consommés est égale à la masse des produits formés. Par exemple, 12 g de carbone réagissent avec 32 g de dioxygène pour former 12 + 32 = 44 g de dioxyde de carbone.",
              ],
              box: { label: "Loi", text: "Lors d'une transformation chimique, la masse totale se conserve : la masse des réactifs consommés est égale à la masse des produits formés." },
            },
            {
              heading: "Système ouvert, système fermé",
              paragraphs: [
                "Versez du vinaigre sur du bicarbonate de soude dans un bécher posé sur une balance : la masse affichée diminue. Ce n'est pas que la matière disparaît : le dioxyde de carbone formé est un gaz qui s'échappe dans l'air, et la balance ne le pèse plus. Recommencez dans une bouteille fermée par un ballon de baudruche : le ballon gonfle, mais la masse affichée reste la même.",
                "À l'inverse, un réactif gazeux qui vient de l'air peut faire augmenter la masse. Quand on brûle de la paille de fer, le produit obtenu est plus lourd que le fer de départ, car des atomes d'oxygène venus de l'air se sont fixés au fer. Et quand le bois brûle, les cendres sont plus légères que la bûche, car le dioxyde de carbone et la vapeur d'eau formés partent dans l'air.",
              ],
              box: { label: "Attention", text: "Si la masse semble varier, c'est qu'un gaz est entré dans le système ou en est sorti. Dans un récipient fermé, la masse ne change pas." },
            },
            {
              heading: "Pourquoi la masse se conserve : les atomes",
              paragraphs: [
                "Lors d'une transformation chimique, les atomes ne sont ni créés ni détruits : ils se réorganisent seulement en de nouvelles molécules. Comme on retrouve exactement les mêmes atomes avant et après, la masse totale ne change pas. Les molécules, elles, ne sont pas conservées : ce sont de nouvelles molécules qui se forment.",
                "C'est pourquoi une équation de réaction doit contenir, pour chaque élément, le même nombre d'atomes à gauche et à droite de la flèche. On dit qu'elle est ajustée. Pour C + O₂ → CO₂ : à gauche, 1 C et 2 O ; à droite, 1 C et 2 O. L'équation est ajustée.",
                "Pour compter, n'oubliez pas les nombres placés devant les formules : dans 2 H₂ + O₂ → 2 H₂O, il y a à gauche 2 × 2 = 4 H et 2 O ; à droite, 2 × 2 = 4 H et 2 × 1 = 2 O. L'équation est ajustée. En revanche, H₂ + O₂ → H₂O n'est pas ajustée : il y a 2 O à gauche et 1 seul à droite.",
              ],
              box: { label: "Propriété", text: "Lors d'une transformation chimique, les atomes se conservent : chaque élément a le même nombre d'atomes dans les réactifs et dans les produits. Une équation qui respecte cette règle est ajustée." },
            },
            {
              heading: "Calculer avec la conservation de la masse",
              paragraphs: [
                "La conservation de la masse permet de calculer une masse inconnue. Si 16 g de méthane réagissent avec 64 g de dioxygène et qu'il se forme 44 g de dioxyde de carbone, la masse d'eau formée vaut (16 + 64) - 44 = 36 g. La somme des masses des réactifs consommés (80 g) est égale à la somme des masses des produits (44 + 36 = 80 g).",
              ],
            },
          ],
          keyPoints: [
            "Lavoisier (XVIIIe siècle) : la masse totale se conserve lors d'une transformation chimique.",
            "Masse des réactifs consommés = masse des produits formés.",
            "Si la masse semble varier, un gaz est entré ou sorti ; en récipient fermé, elle reste constante.",
            "Les atomes se conservent (ni créés ni détruits) ; les molécules, elles, changent.",
            "Une équation ajustée a, pour chaque élément, le même nombre d'atomes de chaque côté.",
            "Pour compter, multipliez les indices par le nombre placé devant la formule.",
          ],
          example: {
            statement: "On considère l'équation 2 H₂ + O₂ → 2 H₂O. 1) Vérifiez qu'elle est ajustée. 2) 4 g de dihydrogène réagissent entièrement avec 32 g de dioxygène. Quelle masse d'eau se forme ?",
            solution: [
              "1) À gauche : hydrogène 2 × 2 = 4 atomes ; oxygène 2 atomes.",
              "À droite : hydrogène 2 × 2 = 4 atomes ; oxygène 2 × 1 = 2 atomes.",
              "Il y a le même nombre d'atomes de chaque élément des deux côtés : l'équation est ajustée.",
              "2) La masse se conserve : m(eau) = m(dihydrogène) + m(dioxygène) = 4 + 32 = 36 g.",
              "Réponse : l'équation est ajustée et il se forme 36 g d'eau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) 3 g de carbone brûlent entièrement en consommant 8 g de dioxygène. Le seul produit est du dioxyde de carbone. Quelle masse de dioxyde de carbone se forme ? 2) 16 g de méthane brûlent en consommant 64 g de dioxygène ; il se forme 44 g de dioxyde de carbone et de l'eau. Quelle masse d'eau se forme ?",
              hint: "La masse totale des réactifs consommés est égale à la masse totale des produits formés.",
              solution: [
                "1) m(dioxyde de carbone) = 3 + 8 = 11 g.",
                "2) Masse des réactifs : 16 + 64 = 80 g. Masse d'eau : 80 - 44 = 36 g.",
                "Réponse : il se forme 11 g de dioxyde de carbone, puis 36 g d'eau.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque équation, comptez les atomes de chaque élément de chaque côté et dites si elle est ajustée : a) C + O₂ → CO₂ ; b) H₂ + O₂ → H₂O ; c) CH₄ + 2 O₂ → CO₂ + 2 H₂O ; d) 2 CO + O₂ → 2 CO₂. Pour l'équation qui n'est pas ajustée, proposez une écriture correcte en changeant seulement les nombres placés devant les formules.",
              hint: "Faites un tableau : une ligne par élément, une colonne pour les réactifs, une pour les produits. Multipliez chaque indice par le nombre placé devant la formule.",
              solution: [
                "a) À gauche : 1 C, 2 O. À droite : 1 C, 2 O. Ajustée.",
                "b) À gauche : 2 H, 2 O. À droite : 2 H, 1 O. Non ajustée : il manque un atome d'oxygène à droite.",
                "c) À gauche : 1 C, 4 H, 2 × 2 = 4 O. À droite : 1 C, 2 × 2 = 4 H, 2 + 2 × 1 = 4 O. Ajustée.",
                "d) À gauche : 2 C, 2 + 2 = 4 O. À droite : 2 C, 2 × 2 = 4 O. Ajustée.",
                "Correction de b : on écrit 2 H₂O pour avoir 2 O à droite ; il y a alors 4 H à droite, on écrit donc 2 H₂ à gauche : 2 H₂ + O₂ → 2 H₂O (4 H et 2 O de chaque côté).",
                "Réponse : a, c et d sont ajustées ; b s'écrit correctement 2 H₂ + O₂ → 2 H₂O.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Expérience 1 : un bécher contenant du vinaigre et un verre de montre contenant du bicarbonate de soude sont posés ensemble sur une balance : elle indique 215,4 g. On verse le bicarbonate dans le vinaigre : une effervescence se produit. À la fin, la balance indique 213,2 g. Expérience 2 : on brûle 5,6 g de paille de fer ; on obtient 7,7 g d'oxyde de fer. 1) De combien la masse a-t-elle varié dans l'expérience 1 ? Expliquez cette variation. 2) Que montrerait la balance si l'on refaisait l'expérience 1 dans une bouteille fermée par un ballon ? 3) Dans l'expérience 2, la masse a augmenté. Expliquez pourquoi, puis calculez la masse de dioxygène qui a réagi.",
              hint: "Repérez le gaz qui sort du système dans l'expérience 1 et celui qui y entre dans l'expérience 2. La loi de conservation s'applique à tous les réactifs et produits, gaz compris.",
              solution: [
                "1) Variation : 215,4 - 213,2 = 2,2 g. La masse a diminué de 2,2 g parce que du dioxyde de carbone s'est formé et s'est échappé dans l'air : la balance ne le pèse plus. La matière n'a pas disparu.",
                "2) Dans une bouteille fermée par un ballon, le gaz reste dans le système : la balance indiquerait la même masse avant et après la transformation (le ballon étant pesé dès le début avec le reste).",
                "3) Le fer a réagi avec le dioxygène de l'air : des atomes d'oxygène se sont fixés au fer, ce qui augmente la masse du solide. Par conservation de la masse : m(fer) + m(dioxygène) = m(oxyde de fer), donc m(dioxygène) = 7,7 - 5,6 = 2,1 g.",
                "Réponse : 2,2 g de dioxyde de carbone se sont échappés ; en système fermé, la masse resterait constante ; 2,1 g de dioxygène ont réagi avec la paille de fer.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La conservation de la masse et des atomes.",
            statements: [
              { text: "Lors d'une transformation chimique, la masse totale se conserve.", true: true, why: "C'est la loi mise en évidence par Lavoisier : masse des réactifs consommés = masse des produits formés." },
              { text: "Quand du bois brûle, de la matière disparaît, puisque les cendres sont plus légères.", true: false, why: "Les gaz formés (dioxyde de carbone, vapeur d'eau) s'échappent dans l'air : la matière n'a pas disparu." },
              { text: "La paille de fer est plus lourde après avoir brûlé.", true: true, why: "Des atomes d'oxygène venus de l'air se sont fixés aux atomes de fer." },
              { text: "Les atomes sont détruits lors d'une combustion.", true: false, why: "Les atomes ne sont ni créés ni détruits : ils se réorganisent en nouvelles molécules." },
              { text: "Les molécules sont conservées lors d'une transformation chimique.", true: false, why: "Ce sont les atomes qui se conservent ; les molécules des réactifs disparaissent et de nouvelles se forment." },
              { text: "Dans une équation ajustée, chaque élément a le même nombre d'atomes de chaque côté.", true: true, why: "C'est la traduction de la conservation des atomes." },
              { text: "2 H₂O contient 4 atomes d'hydrogène.", true: true, why: "Deux molécules d'eau, chacune avec 2 atomes d'hydrogène : 2 × 2 = 4." },
            ],
          },
          quiz: [
            {
              q: "10 g de réactifs sont entièrement consommés. Quelle est la masse totale des produits formés ?",
              options: ["Moins de 10 g", "10 g", "Plus de 10 g", "On ne peut pas savoir"],
              answer: 1,
              why: "La masse totale se conserve : les produits ont la même masse que les réactifs consommés.",
            },
            {
              q: "Quel savant a montré la conservation de la masse au XVIIIe siècle ?",
              options: ["Mendeleïev", "Démocrite", "Dalton", "Lavoisier"],
              answer: 3,
              why: "Antoine Lavoisier a montré, par des pesées soigneuses en récipient fermé, que la masse totale se conserve.",
            },
            {
              q: "Lors d'une transformation chimique, qu'est-ce qui se conserve toujours ?",
              options: ["Les atomes", "Les molécules", "Le volume", "La couleur"],
              answer: 0,
              why: "Les atomes se réorganisent sans être créés ni détruits ; les molécules, elles, changent.",
            },
            {
              q: "Quelle équation n'est pas ajustée ?",
              options: ["C + O₂ → CO₂", "2 H₂ + O₂ → 2 H₂O", "H₂ + O₂ → H₂O", "2 CO + O₂ → 2 CO₂"],
              answer: 2,
              why: "Dans H₂ + O₂ → H₂O, il y a 2 atomes d'oxygène à gauche et un seul à droite.",
            },
            {
              q: "Dans un bécher ouvert, du vinaigre réagit avec du bicarbonate : la masse affichée diminue. Pourquoi ?",
              options: ["Des atomes sont détruits", "Le liquide refroidit", "Un gaz s'échappe dans l'air", "Le vinaigre s'évapore entièrement"],
              answer: 2,
              why: "Le dioxyde de carbone formé quitte le bécher : la balance ne le pèse plus, mais il n'a pas disparu.",
            },
          ],
          trap: "Conclure que la masse n'est pas conservée parce que la balance indique une valeur différente : il faut toujours chercher le gaz qui est sorti du récipient (ou qui y est entré, comme le dioxygène de l'air).",
          method: "Pour vérifier une équation, faites un tableau avec une ligne par élément et deux colonnes (réactifs, produits). Pour chaque formule, multipliez l'indice par le nombre placé devant, puis comparez les deux colonnes ligne par ligne.",
        },
      ],
    },
    /* ================================================================== */
    /* LES COMBUSTIONS                                                     */
    /* ================================================================== */
    {
      id: 'combustions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'combustion-carbone',
          title: 'La combustion du carbone',
          minutes: 30,
          objectives: [
            "Citer les trois conditions nécessaires à une combustion (le triangle du feu).",
            "Décrire la combustion du carbone et identifier ses réactifs et son produit.",
            "Mettre en évidence le dioxyde de carbone formé par le test à l'eau de chaux.",
            "Utiliser l'équation C + O₂ → CO₂ pour décrire la transformation et calculer une masse.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une combustion ?",
              paragraphs: [
                "Une combustion est une transformation chimique au cours de laquelle une substance, le combustible, réagit avec un autre réactif, le comburant, en libérant de l'énergie sous forme de chaleur et souvent de lumière. Le comburant le plus courant est le dioxygène de l'air. Le bois, le charbon, le gaz, l'essence ou la cire d'une bougie sont des combustibles.",
                "Pour qu'une combustion démarre, il faut réunir trois conditions : un combustible, un comburant et une source de chaleur pour l'allumer (une flamme, une étincelle, une surface très chaude). On les représente par le triangle du feu. Si l'un des trois côtés manque, la combustion ne démarre pas ; si on en supprime un, elle s'arrête.",
              ],
              box: { label: "Définition", text: "Une combustion est une transformation chimique entre un combustible et un comburant (le plus souvent le dioxygène), qui libère de la chaleur. Triangle du feu : combustible, comburant, source de chaleur." },
            },
            {
              heading: "L'expérience de la combustion du carbone",
              paragraphs: [
                "Le charbon de bois est presque entièrement constitué de carbone. On le chauffe jusqu'à ce qu'il rougisse, puis on le plonge, posé sur un têt à combustion, dans un flacon rempli de dioxygène. Il devient très lumineux (on parle de vive incandescence), sans flamme, et il diminue de taille : le carbone est consommé.",
                "Quand la combustion s'arrête, on retire le têt, on verse un peu d'eau de chaux dans le flacon et on agite : l'eau de chaux se trouble. Un gaz nouveau s'est donc formé : le dioxyde de carbone. Dans l'air, qui ne contient qu'environ 21 % de dioxygène, la même combustion est beaucoup plus lente : c'est pour cela qu'un barbecue rougeoie doucement, et qu'il s'active quand on souffle dessus.",
              ],
              box: { label: "Repère", text: "Dans le dioxygène pur, le carbone brûle avec une vive incandescence et sans flamme. L'eau de chaux qui se trouble prouve la formation de dioxyde de carbone." },
            },
            {
              heading: "Bilan et équation de réaction",
              paragraphs: [
                "Les réactifs sont le carbone (le combustible) et le dioxygène (le comburant) ; le produit est le dioxyde de carbone. Le bilan s'écrit : carbone + dioxygène → dioxyde de carbone. L'équation de réaction s'écrit : C + O₂ → CO₂.",
                "À l'échelle des atomes, chaque atome de carbone s'associe aux deux atomes d'oxygène d'une molécule de dioxygène pour former une molécule de dioxyde de carbone. On compte 1 atome de carbone et 2 atomes d'oxygène de chaque côté de la flèche : l'équation est ajustée. En masse, 12 g de carbone réagissent avec 32 g de dioxygène pour donner 44 g de dioxyde de carbone.",
              ],
              box: { label: "Équation", text: "Combustion du carbone : C + O₂ → CO₂. En masse : 12 g de carbone + 32 g de dioxygène → 44 g de dioxyde de carbone." },
            },
            {
              heading: "Le carbone, présent dans de nombreux combustibles",
              paragraphs: [
                "Le bois, le papier, le charbon, la cire, l'essence ou le gaz naturel contiennent tous des atomes de carbone : leur combustion produit donc du dioxyde de carbone. Ce gaz n'est pas toxique aux faibles doses présentes dans l'air, mais c'est un gaz à effet de serre : l'augmentation de sa quantité dans l'atmosphère, due en grande partie aux combustions, contribue au réchauffement climatique.",
              ],
            },
          ],
          keyPoints: [
            "Combustion : transformation chimique entre un combustible et un comburant (souvent le dioxygène), qui libère de la chaleur.",
            "Triangle du feu : combustible, comburant, source de chaleur.",
            "Combustion du carbone : carbone + dioxygène → dioxyde de carbone.",
            "Équation : C + O₂ → CO₂ ; 12 g de carbone + 32 g de dioxygène → 44 g de CO₂.",
            "Le dioxyde de carbone formé trouble l'eau de chaux.",
            "Dans le dioxygène pur, la combustion est plus vive que dans l'air (21 % de dioxygène).",
          ],
          example: {
            statement: "On fait brûler entièrement 6 g de charbon de bois, considéré comme du carbone pur. On sait que 12 g de carbone réagissent avec 32 g de dioxygène. Quelle masse de dioxygène est consommée ? Quelle masse de dioxyde de carbone se forme ?",
            solution: [
              "6 g est la moitié de 12 g : les masses sont proportionnelles, la masse de dioxygène consommée est donc la moitié de 32 g.",
              "m(dioxygène) = 32 ÷ 2 = 16 g.",
              "Par conservation de la masse : m(dioxyde de carbone) = m(carbone) + m(dioxygène) = 6 + 16 = 22 g.",
              "Réponse : 16 g de dioxygène sont consommés et 22 g de dioxyde de carbone sont formés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On plonge un morceau de charbon de bois incandescent dans un flacon de dioxygène. 1) Quel est le combustible ? Quel est le comburant ? 2) Quel est le produit de cette combustion ? 3) Quel test permet de l'identifier ? Décrivez le résultat. 4) Écrivez le bilan en mots, puis l'équation de réaction.",
              hint: "Le combustible est ce qui brûle, le comburant est ce qui permet de brûler. Le charbon de bois est presque du carbone pur.",
              solution: [
                "1) Le combustible est le carbone (le charbon de bois) ; le comburant est le dioxygène.",
                "2) Le produit est le dioxyde de carbone.",
                "3) On verse de l'eau de chaux dans le flacon et on agite : elle se trouble, ce qui montre la présence de dioxyde de carbone.",
                "4) Bilan : carbone + dioxygène → dioxyde de carbone. Équation : C + O₂ → CO₂.",
              ],
            },
            {
              level: 2,
              statement: "On sait que 12 g de carbone réagissent avec 32 g de dioxygène pour former 44 g de dioxyde de carbone. 1) On brûle entièrement 36 g de carbone. Quelle masse de dioxygène est consommée ? Quelle masse de dioxyde de carbone se forme ? 2) Quelle masse de carbone faut-il brûler pour obtenir 22 g de dioxyde de carbone ? 3) Vérifiez que l'équation C + O₂ → CO₂ est ajustée.",
              hint: "Les masses qui réagissent sont proportionnelles : cherchez par combien on multiplie (ou divise) la situation de référence.",
              solution: [
                "1) 36 g = 3 × 12 g. Dioxygène : 3 × 32 = 96 g. Dioxyde de carbone : 3 × 44 = 132 g (on vérifie : 36 + 96 = 132 g).",
                "2) 22 g = 44 g ÷ 2. Il faut donc 12 ÷ 2 = 6 g de carbone.",
                "3) À gauche : 1 atome de carbone et 2 atomes d'oxygène. À droite : 1 atome de carbone et 2 atomes d'oxygène. L'équation est ajustée.",
                "Réponse : 96 g de dioxygène et 132 g de dioxyde de carbone ; 6 g de carbone pour 22 g de dioxyde de carbone ; l'équation est ajustée.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives). Pour brûler entièrement un morceau de charbon, il faut 6 L de dioxygène. 1) L'air contient 21 % de dioxygène. Quel volume d'air faut-il au minimum pour fournir ces 6 L ? Arrondissez au dixième. 2) Pourquoi les braises d'un barbecue rougissent-elles davantage quand on souffle dessus ? 3) À la fin du repas, on recouvre le barbecue d'un couvercle métallique fermé : les braises s'éteignent. Expliquez à l'aide du triangle du feu. 4) Pourquoi faut-il ne jamais allumer un barbecue au charbon dans une pièce fermée ? (Pensez à ce qui se passe quand le dioxygène vient à manquer.)",
              hint: "Si 21 % de l'air correspond à 6 L, divisez 6 par 0,21. Pour les questions suivantes, demandez-vous quel côté du triangle du feu est renforcé ou supprimé.",
              solution: [
                "1) V(air) × 0,21 = 6 L, donc V(air) = 6 ÷ 0,21 ≈ 28,6 L.",
                "2) En soufflant, on apporte de l'air neuf, donc davantage de dioxygène (le comburant) aux braises : la combustion est plus vive.",
                "3) Le couvercle empêche l'air d'arriver : une fois le dioxygène restant consommé, il n'y a plus de comburant. Un côté du triangle du feu est supprimé, la combustion s'arrête.",
                "4) Dans une pièce fermée, le dioxygène s'épuise peu à peu ; la combustion devient incomplète et produit du monoxyde de carbone, un gaz toxique et invisible (ce danger est étudié dans une prochaine leçon). De plus, le dioxyde de carbone formé s'accumule.",
                "Réponse : environ 28,6 L d'air ; souffler apporte du comburant ; le couvercle supprime le comburant ; dans une pièce fermée, le manque de dioxygène produit un gaz toxique.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'expérience de la combustion du carbone.",
            items: [
              "Chauffer un morceau de charbon de bois jusqu'à ce qu'il rougisse.",
              "Le plonger, sur un têt à combustion, dans un flacon rempli de dioxygène.",
              "Observer la vive incandescence et la diminution du morceau de charbon.",
              "Retirer le têt quand la combustion s'arrête.",
              "Verser de l'eau de chaux dans le flacon et agiter.",
              "Observer le trouble de l'eau de chaux : du dioxyde de carbone s'est formé.",
            ],
          },
          quiz: [
            {
              q: "Lors de la combustion du charbon de bois, quel est le comburant ?",
              options: ["Le carbone", "Le dioxyde de carbone", "Le dioxygène", "L'eau de chaux"],
              answer: 2,
              why: "Le comburant est le réactif qui permet au combustible de brûler : ici, le dioxygène.",
            },
            {
              q: "Quelle est l'équation de la combustion du carbone ?",
              options: ["C + O → CO₂", "C + O₂ → CO₂", "C + CO₂ → O₂", "CO₂ → C + O₂"],
              answer: 1,
              why: "Le carbone C réagit avec le dioxygène O₂ pour former le dioxyde de carbone CO₂.",
            },
            {
              q: "Quels sont les trois côtés du triangle du feu ?",
              options: ["Combustible, comburant, chaleur", "Bois, eau, air", "Carbone, eau, lumière", "Flamme, fumée, cendre"],
              answer: 0,
              why: "Une combustion a besoin d'un combustible, d'un comburant et d'une source de chaleur pour démarrer.",
            },
            {
              q: "12 g de carbone brûlent avec 32 g de dioxygène. Quelle masse de CO₂ se forme ?",
              options: ["20 g", "12 g", "32 g", "44 g"],
              answer: 3,
              why: "La masse se conserve : 12 + 32 = 44 g de dioxyde de carbone.",
            },
            {
              q: "Pourquoi le charbon brûle-t-il plus vivement dans le dioxygène pur que dans l'air ?",
              options: ["L'air est trop froid", "L'air ne contient qu'environ 21 % de dioxygène", "Le dioxygène pur est un combustible"],
              answer: 1,
              why: "Dans le dioxygène pur, le comburant est bien plus abondant que dans l'air : la combustion est plus vive.",
            },
          ],
          trap: "Confondre combustible et comburant : le combustible est ce qui brûle (le carbone), le comburant est ce qui fait brûler (le dioxygène). Le dioxygène ne brûle pas lui-même.",
          method: "Pour décrire une combustion, rédigez toujours dans le même ordre : le combustible, le comburant, les produits (avec le test qui les identifie), le bilan en mots, puis l'équation. Vérifiez enfin le nombre d'atomes de chaque côté.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'combustion-methane',
          title: 'La combustion du méthane',
          minutes: 30,
          objectives: [
            "Identifier les réactifs et les produits de la combustion du méthane.",
            "Mettre en œuvre les tests caractéristiques de l'eau et du dioxyde de carbone.",
            "Utiliser l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O et vérifier la conservation des atomes.",
          ],
          course: [
            {
              heading: "Le méthane, un combustible courant",
              paragraphs: [
                "Le gaz naturel, utilisé dans les gazinières et les chaudières, est constitué en grande partie de méthane. Le méthane se forme aussi lors de la décomposition de matières végétales ou animales : c'est le principal constituant du biogaz. Sa molécule, de formule CH₄, contient 1 atome de carbone et 4 atomes d'hydrogène.",
                "Le méthane est un gaz incolore et inodore. L'odeur caractéristique du « gaz » de cuisine est celle d'une substance ajoutée volontairement par les distributeurs, pour que l'on puisse repérer une fuite. Le méthane est un hydrocarbure : une espèce dont les molécules ne contiennent que des atomes de carbone et d'hydrogène.",
              ],
              box: { label: "Repère", text: "Méthane : CH₄, principal constituant du gaz naturel. Les hydrocarbures sont des espèces dont les molécules ne contiennent que des atomes de carbone (C) et d'hydrogène (H)." },
            },
            {
              heading: "Identifier les produits de la combustion",
              paragraphs: [
                "Au-dessus de la flamme bleue d'un bec de gaz, on tient un bécher froid et sec, ouverture vers le bas. Très vite, de la buée apparaît sur les parois : de fines gouttelettes d'un liquide. Si on les dépose sur du sulfate de cuivre anhydre, il passe du blanc au bleu : ces gouttelettes sont de l'eau.",
                "On retourne ensuite le bécher, on y verse de l'eau de chaux et on agite : l'eau de chaux se trouble. Du dioxyde de carbone s'est donc aussi formé. Ces deux produits sont nouveaux : ni l'eau ni le dioxyde de carbone n'étaient présents dans le méthane.",
              ],
              box: { label: "À retenir", text: "La combustion du méthane produit de l'eau (le sulfate de cuivre anhydre bleuit) et du dioxyde de carbone (l'eau de chaux se trouble)." },
            },
            {
              heading: "Bilan et équation de réaction",
              paragraphs: [
                "Le bilan s'écrit : méthane + dioxygène → dioxyde de carbone + eau. L'équation de réaction s'écrit : CH₄ + 2 O₂ → CO₂ + 2 H₂O. Elle se lit : une molécule de méthane réagit avec deux molécules de dioxygène pour donner une molécule de dioxyde de carbone et deux molécules d'eau.",
                "Vérifions la conservation des atomes. À gauche : 1 C, 4 H et 2 × 2 = 4 O. À droite : 1 C, 2 × 2 = 4 H et 2 + 2 × 1 = 4 O. L'équation est ajustée. En masse, 16 g de méthane réagissent avec 64 g de dioxygène pour donner 44 g de dioxyde de carbone et 36 g d'eau (16 + 64 = 44 + 36 = 80 g).",
              ],
              box: { label: "Équation", text: "Combustion du méthane : CH₄ + 2 O₂ → CO₂ + 2 H₂O. En masse : 16 g de méthane + 64 g de dioxygène → 44 g de dioxyde de carbone + 36 g d'eau." },
            },
            {
              heading: "Les autres hydrocarbures",
              paragraphs: [
                "Le butane (C₄H₁₀) et le propane (C₃H₈) des bouteilles de gaz, ou l'essence des voitures, sont aussi des hydrocarbures. Lorsqu'ils brûlent avec suffisamment de dioxygène, leur combustion donne les mêmes produits que celle du méthane : du dioxyde de carbone et de l'eau. On parle alors de combustion complète ; elle se reconnaît à une flamme bleue, qui ne noircit pas les objets.",
              ],
            },
          ],
          keyPoints: [
            "Le méthane CH₄ est le principal constituant du gaz naturel ; c'est un hydrocarbure.",
            "Combustion du méthane : méthane + dioxygène → dioxyde de carbone + eau.",
            "Équation : CH₄ + 2 O₂ → CO₂ + 2 H₂O, ajustée (1 C, 4 H, 4 O de chaque côté).",
            "L'eau formée bleuit le sulfate de cuivre anhydre ; le dioxyde de carbone trouble l'eau de chaux.",
            "16 g de méthane + 64 g de dioxygène → 44 g de CO₂ + 36 g d'eau.",
            "La combustion complète d'un hydrocarbure donne du CO₂ et de l'eau, avec une flamme bleue.",
          ],
          example: {
            statement: "On fait brûler complètement 8 g de méthane. On sait que 16 g de méthane réagissent avec 64 g de dioxygène pour donner 44 g de dioxyde de carbone et 36 g d'eau. Calculez les masses de dioxygène consommé, de dioxyde de carbone et d'eau formés.",
            solution: [
              "8 g est la moitié de 16 g : toutes les masses sont divisées par 2.",
              "Dioxygène consommé : 64 ÷ 2 = 32 g.",
              "Dioxyde de carbone formé : 44 ÷ 2 = 22 g ; eau formée : 36 ÷ 2 = 18 g.",
              "Vérification : 8 + 32 = 40 g de réactifs et 22 + 18 = 40 g de produits, la masse est conservée.",
              "Réponse : 32 g de dioxygène consommé, 22 g de dioxyde de carbone et 18 g d'eau formés.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On place un bécher froid et sec, retourné, au-dessus de la flamme bleue d'un bec de gaz alimenté en méthane. 1) De la buée apparaît sur la paroi. Quelle espèce peut-on soupçonner ? Quel test permet de le confirmer ? 2) Quel test faut-il réaliser pour mettre en évidence l'autre produit ? 3) Écrivez le bilan en mots de la combustion.",
              hint: "Deux produits sont formés : l'un se dépose en gouttelettes, l'autre est un gaz incolore.",
              solution: [
                "1) La buée fait penser à de l'eau. On dépose ces gouttelettes sur du sulfate de cuivre anhydre : s'il passe du blanc au bleu, c'est de l'eau.",
                "2) On verse de l'eau de chaux dans le bécher et on agite : si elle se trouble, du dioxyde de carbone s'est formé.",
                "3) Bilan : méthane + dioxygène → dioxyde de carbone + eau.",
              ],
            },
            {
              level: 2,
              statement: "1) Recopiez l'équation CH₄ + 2 O₂ → CO₂ + 2 H₂O et comptez, de chaque côté, les atomes de carbone, d'hydrogène et d'oxygène. Est-elle ajustée ? 2) On fait brûler complètement 48 g de méthane. Sachant que 16 g de méthane réagissent avec 64 g de dioxygène pour donner 44 g de dioxyde de carbone et 36 g d'eau, calculez la masse de dioxygène consommée et les masses des produits formés. 3) Vérifiez la conservation de la masse.",
              hint: "N'oubliez pas de multiplier les indices par le nombre placé devant chaque formule. Pour les masses, cherchez par combien il faut multiplier 16 g pour obtenir 48 g.",
              solution: [
                "1) À gauche : C : 1 ; H : 4 ; O : 2 × 2 = 4. À droite : C : 1 ; H : 2 × 2 = 4 ; O : 2 + 2 × 1 = 4. L'équation est ajustée.",
                "2) 48 g = 3 × 16 g. Dioxygène : 3 × 64 = 192 g. Dioxyde de carbone : 3 × 44 = 132 g. Eau : 3 × 36 = 108 g.",
                "3) Réactifs : 48 + 192 = 240 g. Produits : 132 + 108 = 240 g. La masse est bien conservée.",
                "Réponse : l'équation est ajustée ; 192 g de dioxygène consommés, 132 g de dioxyde de carbone et 108 g d'eau formés.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le propane (C₃H₈) et le butane (C₄H₁₀) sont les gaz des bouteilles de camping. 1) Ce sont des hydrocarbures : pourquoi ? 2) La combustion complète du propane s'écrit C₃H₈ + 5 O₂ → 3 CO₂ + … H₂O. Trouvez le nombre manquant devant H₂O, puis vérifiez que l'équation est ajustée. 3) Vérifiez que l'équation de la combustion complète du butane, 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O, est ajustée. 4) Quels produits ces deux combustions ont-elles en commun avec celle du méthane ? Comment les identifier ?",
              hint: "Pour le nombre manquant, comptez les atomes d'hydrogène à gauche : chaque molécule d'eau en contient 2. Pour le butane, multipliez chaque indice par le nombre placé devant la formule.",
              solution: [
                "1) Leurs molécules ne contiennent que des atomes de carbone et d'hydrogène : ce sont des hydrocarbures.",
                "2) À gauche, il y a 8 atomes d'hydrogène ; chaque molécule d'eau en contient 2, il faut donc 8 ÷ 2 = 4 molécules d'eau : C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. Vérification : à gauche, 3 C, 8 H, 5 × 2 = 10 O ; à droite, 3 C, 4 × 2 = 8 H, 3 × 2 + 4 × 1 = 10 O. L'équation est ajustée.",
                "3) À gauche : C : 2 × 4 = 8 ; H : 2 × 10 = 20 ; O : 13 × 2 = 26. À droite : C : 8 ; H : 10 × 2 = 20 ; O : 8 × 2 + 10 × 1 = 26. L'équation est ajustée.",
                "4) Les trois combustions complètes produisent du dioxyde de carbone (qui trouble l'eau de chaux) et de l'eau (qui bleuit le sulfate de cuivre anhydre).",
                "Réponse : il faut 4 H₂O pour le propane ; les deux équations sont ajustées ; les produits sont toujours le dioxyde de carbone et l'eau.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément de la combustion du méthane à son rôle ou à sa propriété.",
            pairs: [
              { left: "CH₄", right: "Le combustible : le méthane" },
              { left: "O₂", right: "Le comburant : le dioxygène" },
              { left: "CO₂", right: "Produit qui trouble l'eau de chaux" },
              { left: "H₂O", right: "Produit qui bleuit le sulfate de cuivre anhydre" },
              { left: "Flamme bleue", right: "Signe d'une combustion complète" },
              { left: "Buée sur un bécher froid", right: "Indice de la formation d'eau" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la formule du méthane ?",
              options: ["CO₂", "C₄H₁₀", "H₂O", "CH₄"],
              answer: 3,
              why: "La molécule de méthane contient 1 atome de carbone et 4 atomes d'hydrogène : CH₄.",
            },
            {
              q: "Quels sont les produits de la combustion complète du méthane ?",
              options: ["Du dioxygène et de la vapeur d'eau", "Du dioxyde de carbone et de l'eau", "Du carbone seul", "Du dihydrogène"],
              answer: 1,
              why: "La combustion complète du méthane donne du dioxyde de carbone et de l'eau.",
            },
            {
              q: "Dans CH₄ + 2 O₂ → CO₂ + 2 H₂O, combien d'atomes d'oxygène y a-t-il à droite ?",
              options: ["4", "2", "3", "6"],
              answer: 0,
              why: "CO₂ apporte 2 atomes d'oxygène et 2 H₂O en apportent 2 : 2 + 2 = 4.",
            },
            {
              q: "La buée formée au-dessus de la flamme fait bleuir le sulfate de cuivre anhydre. C'est :",
              options: ["du méthane", "du dioxyde de carbone", "de l'eau", "du dioxygène"],
              answer: 2,
              why: "Le sulfate de cuivre anhydre bleuit au contact de l'eau.",
            },
            {
              q: "16 g de méthane réagissent avec 64 g de dioxygène et donnent 44 g de CO₂. Quelle masse d'eau se forme ?",
              options: ["80 g", "20 g", "36 g", "64 g"],
              answer: 2,
              why: "Conservation de la masse : 16 + 64 - 44 = 36 g d'eau.",
            },
          ],
          trap: "Oublier l'eau parmi les produits de la combustion du méthane, ou mal compter les atomes d'oxygène à droite : CO₂ en apporte 2 et 2 H₂O en apportent 2, soit 4 au total.",
          method: "Retenez que l'hydrogène d'un hydrocarbure devient de l'eau et que son carbone devient du dioxyde de carbone : vous saurez ainsi trouver les produits de n'importe quelle combustion complète d'hydrocarbure.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dangers-combustions',
          title: 'Les dangers des combustions et la sécurité',
          minutes: 30,
          objectives: [
            "Distinguer une combustion complète d'une combustion incomplète.",
            "Identifier les dangers des combustions : incendie, monoxyde de carbone, pollution.",
            "Expliquer les gestes de prévention et d'extinction à l'aide du triangle du feu.",
          ],
          course: [
            {
              heading: "Combustion complète, combustion incomplète",
              paragraphs: [
                "Quand le dioxygène est en quantité suffisante, la combustion d'un combustible contenant du carbone est complète : elle produit du dioxyde de carbone (et de l'eau pour un hydrocarbure), avec une flamme bleue qui ne noircit pas les objets.",
                "Quand le dioxygène manque, la combustion est incomplète. La flamme devient jaune ou orangée et elle dépose de la suie noire (de fines particules de carbone) sur une assiette froide qu'on y présente. Surtout, il se forme un gaz très dangereux : le monoxyde de carbone, de formule CO. Pour le carbone, on peut écrire : 2 C + O₂ → 2 CO.",
              ],
              box: { label: "Définition", text: "Combustion complète : assez de dioxygène, flamme bleue, produits CO₂ (et H₂O). Combustion incomplète : manque de dioxygène, flamme jaune, suie et monoxyde de carbone CO." },
            },
            {
              heading: "Le monoxyde de carbone, un gaz toxique",
              paragraphs: [
                "Le monoxyde de carbone est incolore, inodore et non irritant : nos sens ne peuvent pas le détecter. Une fois respiré, il passe dans le sang et empêche celui-ci de transporter correctement le dioxygène vers les organes. Il provoque des maux de tête, des nausées, des vertiges, puis une perte de connaissance ; il peut être mortel.",
                "Il est produit par des appareils à combustion mal réglés, mal entretenus ou utilisés dans un lieu mal aéré : chaudière, chauffe-eau, poêle, cheminée, brasero ou barbecue utilisé à l'intérieur, groupe électrogène dans un garage. Pour s'en protéger : aérer chaque jour, ne jamais boucher les grilles d'aération, faire vérifier les appareils chaque année par un professionnel, et installer un détecteur de monoxyde de carbone.",
                "En cas de doute (maux de tête de plusieurs personnes dans une même pièce, par exemple) : aérer immédiatement, arrêter les appareils à combustion, sortir du logement et appeler les secours : le 18 (pompiers), le 15 (Samu) ou le 112 (numéro d'urgence européen).",
              ],
              box: { label: "À retenir", text: "Le monoxyde de carbone (CO) est invisible, sans odeur et toxique. Prévention : aérer, faire entretenir les appareils, installer un détecteur. En cas de doute : aérer, sortir, appeler le 18, le 15 ou le 112." },
            },
            {
              heading: "Prévenir et éteindre un incendie",
              paragraphs: [
                "Pour éteindre un feu, on supprime l'un des côtés du triangle du feu. On peut priver le feu de comburant en l'étouffant (un couvercle sur une poêle, une couverture anti-feu), le priver de combustible (fermer le robinet de gaz, couper la végétation autour d'un feu de forêt) ou le refroidir (l'eau sur un feu de bois).",
                "Certains gestes sont dangereux : il ne faut jamais jeter d'eau sur de l'huile en feu, car l'eau se vaporise brutalement et projette l'huile enflammée ; on pose un couvercle et on coupe le feu. Sur un appareil électrique, on coupe d'abord le courant. Les produits inflammables portent un pictogramme de danger représentant une flamme et se rangent loin de toute source de chaleur. Dans les logements, un détecteur de fumée est obligatoire en France depuis 2015.",
              ],
              box: { label: "Règle", text: "Pour éteindre un feu, on supprime un côté du triangle du feu : on étouffe (comburant), on coupe l'arrivée du combustible, ou on refroidit (chaleur). Jamais d'eau sur de l'huile en feu." },
            },
            {
              heading: "Combustions et environnement",
              paragraphs: [
                "Même complètes, les combustions de charbon, de pétrole, de gaz ou de bois rejettent du dioxyde de carbone, un gaz à effet de serre qui contribue au réchauffement climatique. Les fumées contiennent aussi de fines particules qui polluent l'air et irritent les poumons. Économiser l'énergie (chauffer moins, isoler, préférer la marche, le vélo ou les transports en commun) permet de limiter ces combustions.",
              ],
            },
          ],
          keyPoints: [
            "Combustion complète : flamme bleue, produits CO₂ et H₂O.",
            "Combustion incomplète (manque de dioxygène) : flamme jaune, suie et monoxyde de carbone CO.",
            "Le monoxyde de carbone est invisible, inodore et toxique, parfois mortel.",
            "Prévention : aérer, faire entretenir les appareils, installer un détecteur de CO et un détecteur de fumée.",
            "Éteindre un feu : supprimer un côté du triangle du feu ; jamais d'eau sur de l'huile en feu.",
            "Numéros d'urgence : 18 (pompiers), 15 (Samu), 112 (urgence européen).",
          ],
          example: {
            statement: "Sur une gazinière mal réglée, la flamme est jaune et le fond de la casserole noircit. Interprétez ces observations, nommez le danger et indiquez ce qu'il faut faire.",
            solution: [
              "Une flamme jaune qui dépose du noir (de la suie, c'est-à-dire du carbone) est le signe d'une combustion incomplète : le dioxygène n'arrive pas en quantité suffisante.",
              "Une combustion incomplète produit du monoxyde de carbone, un gaz toxique qu'on ne peut ni voir ni sentir.",
              "Il faut aérer la pièce, éteindre la gazinière et la faire régler ou vérifier par un professionnel avant de l'utiliser à nouveau.",
              "Réponse : la combustion est incomplète, elle peut produire du monoxyde de carbone ; on aère, on arrête l'appareil et on le fait régler.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si chaque observation correspond à une combustion complète ou incomplète : a) la flamme d'un bec de gaz bien réglé est bleue ; b) une bougie dégage une petite fumée noire ; c) une assiette froide présentée au-dessus d'une flamme se couvre de noir ; d) une chaudière bien entretenue rejette du dioxyde de carbone et de la vapeur d'eau.",
              hint: "Flamme bleue sans dépôt : assez de dioxygène. Flamme jaune, fumée noire ou suie : pas assez de dioxygène.",
              solution: [
                "a) Flamme bleue : combustion complète.",
                "b) Fumée noire (particules de carbone) : combustion incomplète.",
                "c) Dépôt noir de suie : combustion incomplète.",
                "d) Produits CO₂ et H₂O seulement : combustion complète.",
                "Réponse : complètes : a et d ; incomplètes : b et c.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque geste, indiquez quel côté du triangle du feu est supprimé (combustible, comburant ou chaleur) : a) poser un couvercle sur une poêle dont l'huile s'enflamme ; b) arroser un feu de bois avec de l'eau ; c) fermer le robinet d'une bouteille de gaz ; d) couper les arbres et les broussailles devant un incendie de forêt ; e) envelopper une personne dont les vêtements brûlent dans une couverture. Puis expliquez pourquoi on ne doit pas jeter d'eau sur de l'huile en feu.",
              hint: "Le comburant est le dioxygène de l'air ; le combustible est ce qui brûle ; l'eau, elle, refroidit.",
              solution: [
                "a) Le couvercle empêche l'air d'arriver : on supprime le comburant.",
                "b) L'eau refroidit le bois : on supprime la chaleur.",
                "c) Le gaz n'arrive plus : on supprime le combustible.",
                "d) Il n'y a plus de végétation à brûler : on supprime le combustible.",
                "e) La couverture étouffe les flammes : on supprime le comburant.",
                "L'huile en feu est bien plus chaude que 100 °C : l'eau qu'on y jette se vaporise d'un coup et projette des gouttes d'huile enflammée tout autour, ce qui étend l'incendie.",
              ],
            },
            {
              level: 3,
              statement: "Défi (situation fictive). Un soir d'hiver, une famille installe un brasero au charbon de bois dans son garage fermé pour se réchauffer. Au bout d'une heure, plusieurs personnes ont mal à la tête et se sentent nauséeuses. 1) Quel gaz est probablement responsable ? Pourquoi s'est-il formé ? 2) Pourquoi personne ne l'a-t-il remarqué ? 3) Quels gestes faut-il faire immédiatement ? 4) Vérifiez que l'équation 2 C + O₂ → 2 CO est ajustée, puis comparez-la avec C + O₂ → CO₂ : pour 2 atomes de carbone, combien de molécules de dioxygène faut-il dans chaque cas ? Expliquez ainsi pourquoi le monoxyde de carbone apparaît quand le dioxygène manque. 5) Proposez deux mesures de prévention.",
              hint: "Pensez à ce qui manque dans un local fermé où brûle du charbon. Pour la question 4, écrivez deux fois l'équation C + O₂ → CO₂ pour avoir 2 atomes de carbone.",
              solution: [
                "1) Le monoxyde de carbone. Dans le garage fermé, le dioxygène de l'air s'est peu à peu épuisé : la combustion du charbon est devenue incomplète.",
                "2) Le monoxyde de carbone est incolore, inodore et non irritant : nos sens ne le détectent pas. Les maux de tête et les nausées sont les premiers signes d'intoxication.",
                "3) Ouvrir portes et fenêtres, éteindre ou sortir le brasero si c'est possible sans danger, faire sortir tout le monde à l'air libre, et appeler les secours (18, 15 ou 112).",
                "4) À gauche : 2 C et 2 O ; à droite : 2 × 1 = 2 C et 2 × 1 = 2 O : l'équation est ajustée. Pour 2 atomes de carbone, la combustion complète (2 C + 2 O₂ → 2 CO₂) demande 2 molécules de dioxygène, la combustion incomplète une seule. Quand le dioxygène manque, chaque atome de carbone ne trouve qu'un atome d'oxygène : il se forme du CO au lieu du CO₂.",
                "5) Ne jamais utiliser de brasero ou de barbecue dans un local fermé ; installer un détecteur de monoxyde de carbone ; faire entretenir chaque année les appareils de chauffage.",
                "Réponse : c'est le monoxyde de carbone, formé par une combustion incomplète, indétectable par nos sens ; il faut aérer, sortir et appeler les secours ; la combustion incomplète demande moins de dioxygène, d'où la formation de CO quand il manque.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les dangers des combustions.",
            statements: [
              { text: "Une flamme bleue est le signe d'une combustion complète.", true: true, why: "Avec assez de dioxygène, la flamme est bleue et ne dépose pas de suie." },
              { text: "Le monoxyde de carbone a une odeur qui alerte.", true: false, why: "Il est incolore et inodore : seul un détecteur peut le repérer." },
              { text: "Pour éteindre de l'huile en feu dans une poêle, on jette de l'eau dessus.", true: false, why: "L'eau se vaporise brutalement et projette l'huile enflammée ; on pose un couvercle et on coupe le feu." },
              { text: "Fermer le robinet de gaz supprime le combustible.", true: true, why: "Sans combustible, un côté du triangle du feu manque : la combustion s'arrête." },
              { text: "Une combustion incomplète peut produire de la suie.", true: true, why: "Quand le dioxygène manque, une partie du carbone ne réagit pas et forme des particules noires." },
              { text: "On peut utiliser un barbecue au charbon dans une pièce fermée si l'on reste éveillé.", true: false, why: "Le monoxyde de carbone produit est indétectable et peut faire perdre connaissance : jamais de barbecue à l'intérieur." },
              { text: "Le dioxyde de carbone rejeté par les combustions contribue au réchauffement climatique.", true: true, why: "C'est un gaz à effet de serre." },
            ],
          },
          quiz: [
            {
              q: "Une combustion incomplète se produit quand :",
              options: ["il fait trop chaud", "le combustible manque", "le dioxygène manque", "la flamme est bleue"],
              answer: 2,
              why: "Sans assez de dioxygène, la combustion produit de la suie et du monoxyde de carbone.",
            },
            {
              q: "Quelle est la formule du monoxyde de carbone ?",
              options: ["CO", "CO₂", "Co", "O₂"],
              answer: 0,
              why: "« Mono » signifie un : un atome de carbone et un atome d'oxygène, CO.",
            },
            {
              q: "Pourquoi le monoxyde de carbone est-il si dangereux ?",
              options: ["Il est explosif", "Il est invisible, inodore et toxique", "Il brûle la peau et les yeux au contact", "Il est très lourd"],
              answer: 1,
              why: "On ne peut pas le détecter avec nos sens, et il empêche le sang de transporter le dioxygène.",
            },
            {
              q: "Poser un couvercle sur une poêle en feu supprime :",
              options: ["le combustible", "la chaleur", "l'huile", "le comburant"],
              answer: 3,
              why: "Le couvercle empêche l'air, et donc le dioxygène (le comburant), d'arriver aux flammes.",
            },
            {
              q: "Quel numéro d'urgence européen peut-on appeler partout dans l'Union européenne ?",
              options: ["Le 17", "Le 112", "Le 3615"],
              answer: 1,
              why: "Le 112 est le numéro d'urgence européen ; en France, on peut aussi appeler le 18 (pompiers) ou le 15 (Samu).",
            },
          ],
          trap: "Penser qu'on sentirait le danger : le monoxyde de carbone n'a ni couleur ni odeur. Autre erreur grave : jeter de l'eau sur de l'huile en feu, alors qu'il faut l'étouffer avec un couvercle.",
          method: "Pour toute question de sécurité, raisonnez avec le triangle du feu : quel côté faut-il supprimer pour arrêter le feu (combustible, comburant, chaleur) ? Pour le monoxyde de carbone, retenez la suite : manque de dioxygène, combustion incomplète, gaz toxique, donc aérer et entretenir.",
        },
      ],
    },
  ],
}
