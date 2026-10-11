import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ens-sci-1re',
  chapters: [
    /* ==================================================================== */
    /* THÈME 1 · UNE LONGUE HISTOIRE DE LA MATIÈRE                            */
    /* ==================================================================== */
    {
      id: 'histoire-matiere',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'elements-chimiques',
          title: 'Les éléments chimiques : nucléosynthèse et radioactivité',
          minutes: 35,
          objectives: [
            "Expliquer l'origine des noyaux des éléments chimiques par les réactions nucléaires du Big Bang et des étoiles.",
            "Comparer l'abondance des éléments chimiques dans l'Univers, dans la Terre et dans les êtres vivants.",
            "Reconnaître si une réaction nucléaire relève d'une fusion ou d'une fission.",
            "Calculer le nombre de noyaux restants au bout de n demi-vies et utiliser une décroissance radioactive pour une datation.",
          ],
          course: [
            {
              heading: "Atomes, noyaux, éléments et isotopes",
              paragraphs: [
                "Un atome est formé d'un noyau, chargé positivement, et d'électrons, chargés négativement, qui se déplacent autour de lui. Le noyau contient deux sortes de nucléons : des protons (charge positive) et des neutrons (charge nulle). Le noyau est environ 100 000 fois plus petit que l'atome (de l'ordre de 10⁻¹⁵ m contre 10⁻¹⁰ m), mais il concentre presque toute sa masse.",
                "Pour noter un noyau, on écrit devant le symbole X de l'élément le nombre de masse A (nombre de nucléons) en haut et le numéro atomique Z (nombre de protons) en bas. Le nombre de neutrons vaut N = A - Z. Par exemple, le noyau de carbone 12, noté ¹²₆C, contient 6 protons et 12 - 6 = 6 neutrons.",
                "Un élément chimique est défini par son numéro atomique Z : tous les atomes et ions qui ont 6 protons sont du carbone, quel que soit leur nombre de neutrons. Des noyaux qui ont le même Z mais des nombres de neutrons différents sont des isotopes du même élément : le carbone 12 (¹²₆C, 6 neutrons) et le carbone 14 (¹⁴₆C, 8 neutrons) sont deux isotopes du carbone. On connaît aujourd'hui un peu plus d'une centaine d'éléments, dont environ 80 possèdent au moins un isotope stable.",
              ],
              box: { label: "Définition", text: "Un élément chimique est caractérisé par son numéro atomique Z, nombre de protons du noyau. Des isotopes sont des noyaux de même Z (même élément) qui diffèrent par leur nombre de neutrons, donc par leur nombre de masse A." },
            },
            {
              heading: "La nucléosynthèse : des noyaux fabriqués par l'Univers et les étoiles",
              paragraphs: [
                "Les noyaux des éléments n'ont pas toujours existé : ils ont été fabriqués par des réactions nucléaires, c'est la nucléosynthèse. Dans les premières minutes qui ont suivi le Big Bang, il y a environ 13,8 milliards d'années, l'Univers très chaud et très dense a formé les noyaux les plus légers : surtout de l'hydrogène et de l'hélium, avec des traces de lithium.",
                "Les autres éléments ont été formés plus tard, au cœur des étoiles, à partir de cet hydrogène initial. Une étoile comme le Soleil fusionne l'hydrogène en hélium (bilan : 4 ¹₁H → ⁴₂He + 2 ⁰₁e). En fin de vie, les étoiles fusionnent l'hélium en carbone et en oxygène (3 ⁴₂He → ¹²₆C) ; les étoiles massives poursuivent jusqu'au fer. Les éléments plus lourds que le fer se forment surtout par captures de neutrons, notamment lors de l'explosion d'étoiles massives (supernovas) ou de la fusion d'étoiles à neutrons. Les atomes de notre corps ont donc été fabriqués dans des étoiles disparues.",
                "Une réaction nucléaire est une fusion lorsque deux noyaux légers s'unissent pour former un noyau plus lourd : c'est le cas dans les étoiles. C'est une fission lorsqu'un noyau lourd (uranium 235, plutonium 239), frappé par un neutron, se scinde en deux noyaux plus légers en libérant plusieurs neutrons : c'est la réaction des centrales nucléaires. Dans toute réaction nucléaire, le nombre total de nucléons et la charge électrique totale se conservent.",
              ],
              box: { label: "Règle", text: "Dans une réaction nucléaire, il y a conservation du nombre de masse A et du numéro atomique Z (lois de Soddy). Fusion : deux noyaux légers donnent un noyau plus lourd. Fission : un noyau lourd, frappé par un neutron, donne deux noyaux plus légers et des neutrons." },
            },
            {
              heading: "L'abondance des éléments : Univers, Terre, êtres vivants",
              paragraphs: [
                "La matière connue de l'Univers est formée principalement d'hydrogène et d'hélium : en masse, environ 74 % d'hydrogène et 24 % d'hélium ; tous les autres éléments réunis ne représentent qu'environ 2 %. En nombre d'atomes, l'hydrogène dépasse même 90 %. C'est la trace directe de la nucléosynthèse primordiale.",
                "La Terre a une composition très différente : en masse, elle est surtout constituée de fer (environ un tiers, concentré dans le noyau), d'oxygène, de silicium et de magnésium, qui forment les roches du manteau et de la croûte. Les éléments légers et volatils comme l'hydrogène et l'hélium ont été en grande partie perdus lors de la formation des planètes proches du Soleil. Les êtres vivants, enfin, sont surtout faits de carbone, d'hydrogène, d'oxygène et d'azote (C, H, O, N) : le corps humain contient en masse environ 65 % d'oxygène, 18 % de carbone, 10 % d'hydrogène et 3 % d'azote, car il est composé d'eau et de molécules organiques.",
                "Pour comparer ces compositions, on utilise des diagrammes circulaires ou en barres des proportions (en masse ou en nombre d'atomes). Attention à toujours préciser laquelle : en nombre d'atomes, l'hydrogène est le premier élément du corps humain (environ 6 atomes sur 10), alors qu'en masse c'est l'oxygène, car un atome d'oxygène est 16 fois plus lourd qu'un atome d'hydrogène.",
              ],
              box: { label: "À retenir", text: "Univers : surtout H et He. Terre : surtout Fe, O, Si, Mg. Êtres vivants : surtout C, H, O, N. Une proportion se donne toujours en précisant si elle est exprimée en masse ou en nombre d'atomes." },
            },
            {
              heading: "La radioactivité et la demi-vie",
              paragraphs: [
                "Certains noyaux sont instables : ils se désintègrent spontanément en un autre noyau en émettant un rayonnement ou une particule, c'est la radioactivité. Par exemple, le carbone 14 se désintègre en azote 14 en émettant un électron : ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (radioactivité β⁻). L'uranium 238 émet un noyau d'hélium (radioactivité α).",
                "L'instant où un noyau donné va se désintégrer est aléatoire : on ne peut pas le prévoir. Mais un échantillon macroscopique contient un nombre immense de noyaux, et leur évolution collective suit une loi statistique très régulière. La demi-vie t½ d'un noyau radioactif est la durée nécessaire pour que la moitié des noyaux initialement présents dans un échantillon se soit désintégrée. Elle est caractéristique du noyau : 8,0 jours pour l'iode 131, 5 730 ans pour le carbone 14, 4,47 milliards d'années pour l'uranium 238. Elle ne dépend ni de la température ni de la quantité de noyaux.",
                "Si N₀ est le nombre de noyaux au départ, il en reste N₀ ÷ 2 au bout d'une demi-vie, N₀ ÷ 4 au bout de deux, N₀ ÷ 8 au bout de trois : au bout de n demi-vies, il reste N = N₀ ÷ 2ⁿ. Sur la courbe de décroissance N(t), on lit la demi-vie comme l'abscisse du point d'ordonnée N₀ ÷ 2. Pour estimer la durée nécessaire pour atteindre une proportion donnée, on cherche le nombre de demi-vies n tel que 1 ÷ 2ⁿ soit égal à cette proportion, par essais successifs ou sur le graphique.",
              ],
              box: { label: "Formule", text: "Au bout de n demi-vies (durée t = n × t½), le nombre de noyaux restants est N = N₀ ÷ 2ⁿ. Proportion restante : 50 % après 1 demi-vie, 25 % après 2, 12,5 % après 3, environ 6,25 % après 4." },
            },
            {
              heading: "Dater grâce au carbone 14",
              paragraphs: [
                "Le carbone 14 est produit en permanence dans la haute atmosphère, puis incorporé au CO₂. Tant qu'un être vivant échange du carbone avec son milieu (photosynthèse, alimentation), la proportion de carbone 14 dans son carbone reste constante, la même que dans l'atmosphère. À sa mort, les échanges cessent : le carbone 14 n'est plus renouvelé et décroît avec une demi-vie de 5 730 ans.",
                "En mesurant la proportion de carbone 14 restant dans un échantillon (bois, os, charbon de bois, tissu) par rapport à un organisme vivant, on en déduit le nombre de demi-vies écoulées, donc la date de la mort. Si un os ne contient plus que le quart de son carbone 14 initial, deux demi-vies se sont écoulées : il a environ 2 × 5 730 = 11 460 ans. La méthode ne fonctionne que jusqu'à environ 50 000 ans : au-delà, il reste trop peu de carbone 14 pour le mesurer. Pour les roches et les âges géologiques, on utilise d'autres noyaux de demi-vie plus longue, comme l'uranium 238 ou le potassium 40.",
              ],
            },
          ],
          keyPoints: [
            "Un élément est défini par son numéro atomique Z ; des isotopes ont le même Z et des nombres de neutrons différents.",
            "H et He viennent du Big Bang ; les autres noyaux sont formés dans les étoiles (fusion), les plus lourds que le fer lors d'événements explosifs.",
            "Fusion : noyaux légers qui s'unissent. Fission : noyau lourd qui se scinde sous l'impact d'un neutron. A et Z se conservent.",
            "Univers : H, He. Terre : Fe, O, Si, Mg. Vivant : C, H, O, N. Toujours préciser « en masse » ou « en nombre d'atomes ».",
            "La désintégration d'un noyau est aléatoire ; la demi-vie t½ est la durée au bout de laquelle la moitié des noyaux d'un échantillon s'est désintégrée.",
            "Au bout de n demi-vies : N = N₀ ÷ 2ⁿ.",
            "Carbone 14 : t½ = 5 730 ans, datation des restes d'êtres vivants jusqu'à environ 50 000 ans.",
          ],
          example: {
            statement: "Un échantillon contient au départ N₀ = 8,0 × 10¹² noyaux d'iode 131, de demi-vie t½ = 8,0 jours. a) Combien de noyaux d'iode 131 restent-ils au bout de 24 jours ? b) Au bout de combien de demi-vies reste-t-il moins de 1 % des noyaux initiaux ? Quelle durée cela représente-t-il ?",
            solution: [
              "a) Nombre de demi-vies écoulées : n = 24 ÷ 8,0 = 3.",
              "Noyaux restants : N = N₀ ÷ 2³ = 8,0 × 10¹² ÷ 8 = 1,0 × 10¹² noyaux.",
              "b) Il reste moins de 1 % des noyaux lorsque 1 ÷ 2ⁿ < 1 ÷ 100, c'est-à-dire lorsque 2ⁿ > 100.",
              "On teste les puissances de 2 : 2⁶ = 64 (il reste 1 ÷ 64 ≈ 1,6 %, encore trop) et 2⁷ = 128 (il reste 1 ÷ 128 ≈ 0,8 %).",
              "Il faut donc 7 demi-vies, soit 7 × 8,0 = 56 jours. Réponse : 1,0 × 10¹² noyaux restent au bout de 24 jours, et il reste moins de 1 % des noyaux au bout de 7 demi-vies, soit 56 jours (le seuil de 1 % est franchi entre 48 et 56 jours).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des réactions nucléaires suivantes, vérifier la conservation du nombre de masse A et du numéro atomique Z, puis dire s'il s'agit d'une fusion ou d'une fission. a) ²₁H + ³₁H → ⁴₂He + ¹₀n. b) ¹₀n + ²³⁵₉₂U → ¹⁴⁰₅₄Xe + ⁹⁴₃₈Sr + 2 ¹₀n. c) ¹²₆C + ⁴₂He → ¹⁶₈O.",
              hint: "Additionnez les nombres du haut (A) de chaque côté de la flèche, puis ceux du bas (Z). Regardez ensuite si les réactifs sont des noyaux légers qui s'unissent ou un noyau lourd qui se scinde.",
              solution: [
                "a) A : 2 + 3 = 5 à gauche et 4 + 1 = 5 à droite. Z : 1 + 1 = 2 à gauche et 2 + 0 = 2 à droite. Deux noyaux légers (deux isotopes de l'hydrogène) s'unissent en un noyau plus lourd : c'est une fusion.",
                "b) A : 1 + 235 = 236 à gauche et 140 + 94 + 2 × 1 = 236 à droite. Z : 0 + 92 = 92 à gauche et 54 + 38 + 0 = 92 à droite. Un noyau lourd, frappé par un neutron, se scinde en deux noyaux plus légers en libérant des neutrons : c'est une fission.",
                "c) A : 12 + 4 = 16 et 16. Z : 6 + 2 = 8 et 8. Deux noyaux légers forment un noyau plus lourd : c'est une fusion, qui se produit dans les étoiles en fin de vie.",
                "Résultat : a et c sont des fusions, b est une fission ; A et Z sont conservés dans les trois cas.",
              ],
            },
            {
              level: 2,
              statement: "On suit le nombre de noyaux radioactifs d'un échantillon (données fictives) : à t = 0 h, N = 1 000 ; à t = 2 h, N = 707 ; à t = 4 h, N = 500 ; à t = 6 h, N = 354 ; à t = 8 h, N = 250. a) Déterminer la demi-vie de ce noyau. b) Prévoir le nombre de noyaux restants à t = 16 h. c) Peut-on prévoir l'instant où un noyau précis de l'échantillon va se désintégrer ? Justifier.",
              hint: "Cherchez la date à laquelle il reste la moitié des noyaux de départ. Pour la question b, comptez combien de demi-vies contient la durée de 16 h.",
              solution: [
                "a) Il reste 500 noyaux, soit la moitié des 1 000 noyaux initiaux, à t = 4 h. La demi-vie vaut donc t½ = 4 h. Vérification : de 4 h à 8 h, on passe de 500 à 250, encore une division par 2.",
                "b) 16 h correspondent à n = 16 ÷ 4 = 4 demi-vies. N = 1 000 ÷ 2⁴ = 1 000 ÷ 16 = 62,5, soit environ 62 ou 63 noyaux.",
                "c) Non : la désintégration d'un noyau individuel est aléatoire. La demi-vie décrit le comportement statistique d'un grand nombre de noyaux ; avec si peu de noyaux, le résultat réel peut d'ailleurs s'écarter un peu de la prévision.",
                "Résultat : t½ = 4 h, environ 62 noyaux restants à 16 h, et l'instant de désintégration d'un noyau donné est imprévisible.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 : le carbone 14 a une demi-vie de 5 730 ans ; un organisme vivant maintient une proportion constante de carbone 14, qui décroît après sa mort. Document 2 (données fictives) : dans un site archéologique, un charbon de bois contient 12,5 % du carbone 14 d'un bois vivant ; un fragment d'os en contient 30 %. Document 3 : un fossile de dinosaure est daté par d'autres méthodes d'environ 70 millions d'années. a) Dater le charbon de bois. b) Encadrer l'âge de l'os par deux multiples de la demi-vie, puis l'estimer sachant que 2 à la puissance 1,74 vaut environ 3,34. c) Expliquer pourquoi le carbone 14 ne permet pas de dater le fossile de dinosaure.",
              hint: "12,5 % s'écrit 1 ÷ 8 et 8 = 2³. Pour l'os, 30 % se situe entre 50 % et 25 % ; or 1 ÷ 0,30 ≈ 3,33.",
              solution: [
                "a) 12,5 % = 1 ÷ 8 = 1 ÷ 2³ : trois demi-vies se sont écoulées. Âge : 3 × 5 730 = 17 190 ans, soit environ 17 000 ans.",
                "b) Il reste 30 %, entre 50 % (1 demi-vie) et 25 % (2 demi-vies) : l'âge est compris entre 5 730 ans et 11 460 ans.",
                "On cherche n tel que 1 ÷ 2ⁿ = 0,30, c'est-à-dire 2ⁿ = 1 ÷ 0,30 ≈ 3,33. D'après la donnée (2 à la puissance 1,74 ≈ 3,34), n ≈ 1,74. Âge : 1,74 × 5 730 ≈ 9 970 ans, soit environ 10 000 ans.",
                "c) 70 millions d'années représentent 70 000 000 ÷ 5 730 ≈ 12 000 demi-vies. Le carbone 14 est divisé par 2 environ 12 000 fois : il n'en reste plus rien de mesurable. D'ailleurs, au-delà d'environ 50 000 ans (moins de 9 demi-vies), la quantité restante devient trop faible.",
                "Résultat : charbon de bois d'environ 17 000 ans, os d'environ 10 000 ans ; le dinosaure doit être daté avec des noyaux de demi-vie beaucoup plus longue, comme l'uranium 238 ou le potassium 40.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Isotopes", right: "Noyaux de même numéro atomique Z, avec des nombres de neutrons différents" },
              { left: "Nucléosynthèse", right: "Formation des noyaux des éléments par des réactions nucléaires" },
              { left: "Fusion", right: "Deux noyaux légers s'unissent en un noyau plus lourd" },
              { left: "Fission", right: "Un noyau lourd frappé par un neutron se scinde en deux noyaux plus légers" },
              { left: "Radioactivité", right: "Désintégration spontanée d'un noyau instable" },
              { left: "Demi-vie", right: "Durée au bout de laquelle la moitié des noyaux d'un échantillon s'est désintégrée" },
            ],
          },
          quiz: [
            {
              q: "Les noyaux ¹²₆C et ¹⁴₆C sont :",
              options: ["Deux éléments chimiques différents, car leurs nombres de masse diffèrent", "Deux noyaux qui ont le même nombre de neutrons", "Deux isotopes du carbone", "Deux noyaux tous deux instables"],
              answer: 2,
              why: "Ils ont le même numéro atomique Z = 6 (même élément) mais 6 et 8 neutrons : ce sont des isotopes. Seul le carbone 14 est radioactif.",
            },
            {
              q: "Où l'essentiel du carbone et de l'oxygène de l'Univers a-t-il été formé ?",
              options: ["Au cœur des étoiles", "Dans les premières minutes après le Big Bang, avec l'hélium", "Dans le noyau de fer de la Terre"],
              answer: 0,
              why: "Le Big Bang n'a formé que les noyaux les plus légers (H, He, traces de Li). Le carbone et l'oxygène sont produits par la fusion de l'hélium dans les étoiles.",
            },
            {
              q: "Quels sont les éléments les plus abondants, en masse, dans les êtres vivants ?",
              options: ["Fer, oxygène, silicium et magnésium, comme la Terre", "Hydrogène et hélium", "Uranium, carbone, sodium", "Oxygène, carbone, hydrogène, azote"],
              answer: 3,
              why: "Les êtres vivants sont formés d'eau et de molécules organiques : en masse, O, C, H et N dominent. Fe, O, Si et Mg caractérisent la Terre ; H et He l'Univers.",
            },
            {
              q: "Un échantillon contient 4 000 noyaux radioactifs. Combien en reste-t-il au bout de trois demi-vies ?",
              options: ["1 000", "500", "Aucun, car trois demi-vies font 150 %", "2 000"],
              answer: 1,
              why: "Le nombre de noyaux est divisé par 2 à chaque demi-vie : 4 000 → 2 000 → 1 000 → 500.",
            },
            {
              q: "Un bois ne contient plus que 25 % du carbone 14 d'un bois vivant (t½ = 5 730 ans). Son âge est d'environ :",
              options: ["4 300 ans", "22 920 ans", "11 460 ans", "1 430 ans"],
              answer: 2,
              why: "25 % = 1 ÷ 4 = 1 ÷ 2² : deux demi-vies se sont écoulées, soit 2 × 5 730 = 11 460 ans.",
            },
          ],
          trap: "Croire qu'au bout de deux demi-vies il ne reste plus aucun noyau (deux fois 50 %) : la quantité est divisée par 2 à chaque demi-vie, il reste donc un quart des noyaux, puis un huitième, et ainsi de suite.",
          method: "Pour tout calcul de décroissance, dressez un petit tableau à trois lignes : durée écoulée (0, t½, 2 t½, 3 t½...), nombre n de demi-vies, noyaux restants (N₀, N₀ ÷ 2, N₀ ÷ 4...). Vous y lirez directement le nombre de noyaux restants ou la durée cherchée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cristaux',
          title: 'Des édifices ordonnés : les cristaux',
          minutes: 35,
          objectives: [
            "Décrire l'état cristallin du chlorure de sodium et distinguer, en termes d'échelle et d'organisation, maille, cristal, minéral et roche.",
            "Représenter les mailles cubique simple et cubique à faces centrées et dénombrer les entités qu'elles contiennent.",
            "Calculer la compacité et la masse volumique d'un cristal à partir de sa maille.",
            "Mettre en relation la structure cristalline ou amorphe d'une roche et les conditions de son refroidissement.",
          ],
          course: [
            {
              heading: "L'état cristallin : l'exemple du sel",
              paragraphs: [
                "Le chlorure de sodium solide se trouve dans certaines roches (le sel gemme, ou halite) ou s'obtient par évaporation de l'eau de mer dans les marais salants. Observés à la loupe, ses grains ont souvent la forme de petits cubes. Cette forme régulière visible à notre échelle traduit un ordre invisible à l'échelle des ions : le chlorure de sodium est un empilement régulier d'ions sodium Na⁺ et d'ions chlorure Cl⁻, en nombres égaux, ce qui rend le solide électriquement neutre.",
                "Un solide dont les entités (atomes, ions ou molécules) sont empilées de façon régulière et périodique est dans l'état cristallin : c'est un cristal. On le décrit par une maille élémentaire, le plus petit motif dont la répétition, par translation dans les trois directions de l'espace, reconstitue tout le cristal, comme un motif de papier peint reproduit à l'infini, mais en trois dimensions.",
                "Un type cristallin est défini par la forme géométrique de la maille, la nature des entités qui la constituent et leur position dans la maille. Les cristaux les plus simples sont décrits par une maille cubique, d'arête notée a, de l'ordre de quelques centaines de picomètres (1 pm = 10⁻¹² m).",
              ],
              box: { label: "Définition", text: "Un cristal est un solide formé d'un empilement régulier et périodique d'entités. La maille est le plus petit volume qui, répété par translation dans les trois directions, reconstitue le cristal." },
            },
            {
              heading: "Deux mailles cubiques : cubique simple et cubique à faces centrées",
              paragraphs: [
                "Dans la maille cubique simple (CS), une entité occupe chacun des 8 sommets du cube. Dans la maille cubique à faces centrées (CFC), une entité occupe chaque sommet et le centre de chacune des 6 faces. Pour les représenter, on utilise la perspective cavalière : la face avant est dessinée en vraie grandeur, les arêtes fuyantes sont tracées à 45° et raccourcies (souvent de moitié), et les arêtes cachées sont en pointillés.",
                "Une entité placée sur un sommet est partagée entre les 8 mailles qui se touchent en ce sommet : elle ne compte que pour 1/8 dans une maille. Une entité au centre d'une face est partagée entre 2 mailles (elle compte pour ½), une entité au milieu d'une arête est partagée entre 4 mailles (elle compte pour ¼), et une entité au centre du cube appartient entièrement à la maille.",
                "Maille CS : 8 × 1/8 = 1 entité par maille. Maille CFC : 8 × 1/8 + 6 × ½ = 1 + 3 = 4 entités par maille. Dans le chlorure de sodium, les ions Cl⁻ forment un réseau CFC (4 ions par maille) et les ions Na⁺ occupent les milieux des 12 arêtes et le centre du cube : 12 × ¼ + 1 = 4 ions Na⁺. La maille contient donc 4 Na⁺ et 4 Cl⁻, ce qui correspond bien à la formule NaCl.",
              ],
              box: { label: "Règle", text: "Contribution d'une entité à une maille cubique : sommet 1/8, centre d'une face ½, milieu d'une arête ¼, centre du cube 1. Maille cubique simple : 1 entité ; maille cubique à faces centrées : 4 entités." },
            },
            {
              heading: "Compacité et masse volumique",
              paragraphs: [
                "On modélise les atomes par des sphères dures de rayon r qui se touchent. La compacité C est le rapport du volume occupé par les sphères au volume de la maille : C = N × (4/3)πr³ ÷ a³, où N est le nombre d'entités par maille. Elle est toujours inférieure à 1, puisqu'il reste des vides entre les sphères.",
                "Dans la maille CS, les sphères se touchent le long d'une arête : a = 2r. Alors C = (4/3)πr³ ÷ (2r)³ = π/6 ≈ 0,52 : 52 % du volume est occupé. Dans la maille CFC, les sphères se touchent le long de la diagonale d'une face, de longueur a√2 : a√2 = 4r, donc a = 2√2 r. Alors C = 4 × (4/3)πr³ ÷ (2√2 r)³ = π√2/6 ≈ 0,74 : c'est l'empilement le plus compact possible de sphères identiques.",
                "La structure microscopique conditionne des propriétés macroscopiques, comme la masse volumique : ρ = masse de la maille ÷ volume de la maille = N × m ÷ a³, où m = M ÷ N_A est la masse d'une entité (M masse molaire, N_A = 6,02 × 10²³ mol⁻¹ constante d'Avogadro). Par exemple, pour le cuivre (CFC, a = 361 pm, M = 63,5 g/mol), on trouve ρ ≈ 8,97 g/cm³, en accord avec la valeur mesurée.",
              ],
              box: { label: "Formule", text: "Compacité : C = N × (4/3)πr³ ÷ a³ (CS : a = 2r et C ≈ 0,52 ; CFC : a√2 = 4r et C ≈ 0,74). Masse volumique : ρ = N × M ÷ (N_A × a³). Attention aux unités : a en cm donne ρ en g/cm³." },
            },
            {
              heading: "Minéraux, roches et solides amorphes",
              paragraphs: [
                "Un minéral est caractérisé par sa composition chimique et par son organisation cristalline. Un même composé peut cristalliser selon des structures différentes, aux propriétés macroscopiques différentes : le carbone forme le diamant (très dur, transparent, isolant, ρ ≈ 3,5 g/cm³) et le graphite (tendre, noir, conducteur, ρ ≈ 2,2 g/cm³) ; le carbonate de calcium CaCO₃ forme la calcite et l'aragonite. Une roche est une association de cristaux d'un même minéral ou de plusieurs minéraux : le granite associe du quartz, des feldspaths et des micas.",
                "Il faut distinguer les échelles : la maille mesure quelques dixièmes de nanomètre, un cristal de quelques micromètres à plusieurs centimètres, un échantillon de roche se tient dans la main et un massif rocheux s'étend sur des kilomètres. Des structures cristallines existent aussi chez les êtres vivants : coquilles et squelettes calcaires (calcite ou aragonite), os et dents (phosphate de calcium, l'hydroxyapatite), ou encore calculs rénaux.",
                "Dans un solide amorphe, les entités sont empilées sans ordre géométrique à grande distance : c'est le cas du verre. Les roches magmatiques montrent le lien entre structure et refroidissement. Un magma qui refroidit lentement en profondeur, sur des milliers d'années ou plus, laisse aux cristaux le temps de grandir : le granite est entièrement cristallisé, à gros cristaux visibles à l'œil nu. Une lave refroidie rapidement en surface donne un basalte, formé de petits cristaux (microlithes) dans du verre, voire une obsidienne, presque entièrement vitreuse.",
              ],
              box: { label: "À retenir", text: "Maille (échelle de l'atome) → cristal → minéral (composition + structure) → roche (association de minéraux). Refroidissement lent : roche entièrement cristallisée à gros cristaux ; refroidissement rapide : petits cristaux et verre." },
            },
          ],
          keyPoints: [
            "Un cristal est un empilement régulier et périodique d'entités, décrit par une maille répétée par translation.",
            "Contributions : sommet 1/8, face ½, arête ¼, centre 1. CS : 1 entité par maille ; CFC : 4 entités par maille.",
            "Compacité : CS, a = 2r et C ≈ 0,52 ; CFC, a√2 = 4r et C ≈ 0,74.",
            "Masse volumique : ρ = N × M ÷ (N_A × a³).",
            "Un minéral = une composition chimique + une structure cristalline ; une roche = une association de minéraux.",
            "Un même composé peut avoir plusieurs structures (diamant et graphite) aux propriétés différentes.",
            "Verre = solide amorphe. Refroidissement lent : gros cristaux (granite) ; rapide : microlithes et verre (basalte).",
          ],
          example: {
            statement: "Le chlorure de sodium cristallise dans une maille cubique d'arête a = 564 pm contenant 4 ions Na⁺ et 4 ions Cl⁻. Calculer sa masse volumique en g/cm³. Données : M(Na) = 23,0 g/mol ; M(Cl) = 35,5 g/mol ; N_A = 6,02 × 10²³ mol⁻¹ ; 1 pm = 10⁻¹⁰ cm.",
            solution: [
              "La maille contient 4 unités NaCl. Masse molaire : M(NaCl) = 23,0 + 35,5 = 58,5 g/mol.",
              "Masse d'une unité NaCl : m = M ÷ N_A = 58,5 ÷ (6,02 × 10²³) ≈ 9,72 × 10⁻²³ g. Masse de la maille : 4 × 9,72 × 10⁻²³ ≈ 3,89 × 10⁻²² g.",
              "Arête : a = 564 pm = 564 × 10⁻¹⁰ cm = 5,64 × 10⁻⁸ cm. Volume : a³ = (5,64 × 10⁻⁸)³ ≈ 1,79 × 10⁻²² cm³ (car 5,64³ ≈ 179,4).",
              "Masse volumique : ρ = 3,89 × 10⁻²² ÷ 1,79 × 10⁻²² ≈ 2,17 g/cm³.",
              "Réponse : ρ ≈ 2,17 g/cm³, très proche de la valeur mesurée pour le sel (environ 2,16 g/cm³) ; le modèle de la maille rend bien compte de cette propriété macroscopique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Combien d'entités contient une maille cubique simple ? b) Et une maille cubique à faces centrées ? c) Dans le chlorure de césium CsCl, les ions Cl⁻ occupent les 8 sommets d'une maille cubique et un ion Cs⁺ occupe le centre du cube. Dénombrer chaque type d'ion dans la maille et vérifier que la maille est électriquement neutre.",
              hint: "Appliquez les contributions : 1/8 pour un sommet, ½ pour une face, 1 pour le centre du cube.",
              solution: [
                "a) Cubique simple : 8 sommets × 1/8 = 1 entité par maille.",
                "b) Cubique à faces centrées : 8 × 1/8 + 6 × ½ = 1 + 3 = 4 entités par maille.",
                "c) Ions Cl⁻ : 8 × 1/8 = 1. Ion Cs⁺ : 1 au centre, qui compte entièrement. La maille contient 1 Cs⁺ et 1 Cl⁻ : les charges + 1 et - 1 se compensent.",
                "Résultat : 1 entité (CS), 4 entités (CFC) ; la maille de CsCl contient 1 Cs⁺ et 1 Cl⁻, elle est neutre, en accord avec la formule CsCl.",
              ],
            },
            {
              level: 2,
              statement: "Le cuivre cristallise dans une maille cubique à faces centrées d'arête a = 361 pm. Données : M(Cu) = 63,5 g/mol ; N_A = 6,02 × 10²³ mol⁻¹ ; √2 ≈ 1,414. a) Calculer la masse d'une maille. b) Calculer la masse volumique du cuivre en g/cm³. c) Les atomes se touchent le long de la diagonale d'une face : calculer le rayon r d'un atome de cuivre. d) Quelle est la compacité de ce cristal ?",
              hint: "Une maille CFC contient 4 atomes. Convertissez a en centimètres (361 pm = 3,61 × 10⁻⁸ cm). Pour le rayon, la diagonale d'une face mesure a√2 et contient 4 rayons.",
              solution: [
                "a) Masse d'un atome : 63,5 ÷ (6,02 × 10²³) ≈ 1,055 × 10⁻²² g. Masse de la maille : 4 × 1,055 × 10⁻²² ≈ 4,22 × 10⁻²² g.",
                "b) a³ = (3,61 × 10⁻⁸ cm)³ ≈ 4,70 × 10⁻²³ cm³ (car 3,61³ ≈ 47,0). ρ = 4,22 × 10⁻²² ÷ 4,70 × 10⁻²³ ≈ 8,97 g/cm³.",
                "c) a√2 = 4r, donc r = a√2 ÷ 4 = 361 × 1,414 ÷ 4 ≈ 128 pm.",
                "d) Pour une maille CFC dont les atomes se touchent selon la diagonale d'une face, la compacité vaut π√2/6 ≈ 0,74.",
                "Résultat : maille de 4,22 × 10⁻²² g, ρ ≈ 8,97 g/cm³ (valeur mesurée : 8,96 g/cm³), r ≈ 128 pm, compacité de 74 %.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 : le granite, formé dans la croûte continentale à plusieurs kilomètres de profondeur, est entièrement constitué de cristaux de quartz, de feldspaths et de micas, de quelques millimètres. Document 2 : le basalte, issu de coulées de lave, montre au microscope quelques cristaux, de nombreux microlithes et du verre. Document 3 : l'obsidienne, issue d'une lave refroidie très vite, est presque entièrement vitreuse. Document 4 : la maille du diamant est cubique, d'arête a = 357 pm, et contient 8 atomes de carbone ; le graphite, formé de feuillets d'atomes de carbone, a une masse volumique de 2,2 g/cm³. Données : M(C) = 12,0 g/mol ; N_A = 6,02 × 10²³ mol⁻¹. a) Classer du plus petit au plus grand : un échantillon de granite, la maille du quartz, un cristal de quartz. Le quartz est-il un minéral ou une roche ? b) Expliquer les différences de structure entre les trois roches. c) Calculer la masse volumique du diamant et la comparer à celle du graphite. Conclure.",
              hint: "Reliez la taille des cristaux à la durée du refroidissement. Pour le diamant, appliquez ρ = N × M ÷ (N_A × a³) avec a en centimètres.",
              solution: [
                "a) Maille du quartz (quelques dixièmes de nanomètre) < cristal de quartz (quelques millimètres) < échantillon de granite (plusieurs centimètres). Le quartz est un minéral : une composition chimique (SiO₂) et une structure cristalline. Le granite, association de plusieurs minéraux, est une roche.",
                "b) Le granite a refroidi lentement en profondeur : les cristaux ont eu le temps de croître jusqu'à remplir toute la roche. Le basalte a refroidi rapidement en surface : seuls de petits cristaux ont pu se former et le reste du liquide s'est figé en verre. L'obsidienne a refroidi si vite que les entités n'ont pas eu le temps de s'ordonner : c'est un solide amorphe.",
                "c) Masse de la maille : 8 × 12,0 ÷ (6,02 × 10²³) ≈ 1,59 × 10⁻²² g. Volume : (3,57 × 10⁻⁸ cm)³ ≈ 4,55 × 10⁻²³ cm³ (car 3,57³ ≈ 45,5). ρ ≈ 1,59 × 10⁻²² ÷ 4,55 × 10⁻²³ ≈ 3,5 g/cm³.",
                "Le diamant (3,5 g/cm³) est nettement plus dense que le graphite (2,2 g/cm³), alors que tous deux ne contiennent que du carbone : la structure cristalline, et non la seule composition, détermine les propriétés macroscopiques.",
                "Conclusion : la structure d'une roche (cristallisée ou vitreuse) témoigne de la vitesse de son refroidissement, et un même élément peut former des minéraux différents selon son organisation cristalline.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces objets du plus petit au plus grand.",
            items: [
              "Un ion chlorure Cl⁻ (environ 0,36 nm de diamètre)",
              "La maille du chlorure de sodium (arête de 0,56 nm)",
              "Un grain de sel de cuisine (environ 0,5 mm)",
              "Un échantillon de granite tenu dans la main (environ 10 cm)",
              "Un massif granitique (plusieurs kilomètres)",
            ],
          },
          quiz: [
            {
              q: "Combien d'entités contient une maille cubique à faces centrées ?",
              options: ["14", "4", "8", "1"],
              answer: 1,
              why: "8 sommets comptés pour 1/8 et 6 faces comptées pour ½ : 1 + 3 = 4. Le nombre 14 compte les positions sans tenir compte du partage entre mailles.",
            },
            {
              q: "Dans une maille cubique simple, les sphères se touchent le long :",
              options: ["De la diagonale d'une face", "De la grande diagonale du cube", "D'une diagonale quelconque", "D'une arête"],
              answer: 3,
              why: "Dans la maille CS, deux sphères voisines occupent deux sommets d'une même arête : a = 2r. La diagonale d'une face concerne la maille CFC.",
            },
            {
              q: "Le diamant et le graphite sont tous deux faits de carbone. Pourquoi ont-ils des propriétés différentes ?",
              options: ["Parce que leurs structures cristallines sont différentes", "Parce que le graphite contient des impuretés qui le rendent noir et tendre", "Parce que le diamant contient plus de protons par atome"],
              answer: 0,
              why: "Un même composé peut cristalliser selon plusieurs structures : l'organisation des atomes, et non leur nature, explique ici les différences de dureté, de couleur et de masse volumique.",
            },
            {
              q: "Une roche volcanique contient de nombreux microlithes et du verre. Qu'en déduit-on ?",
              options: ["Elle a refroidi lentement, en profondeur", "Elle est d'origine biologique", "Elle a refroidi rapidement, en surface", "Elle ne contient aucun minéral"],
              answer: 2,
              why: "Un refroidissement rapide ne laisse pas aux cristaux le temps de grandir : il se forme de petits cristaux et le reste du liquide se fige en verre.",
            },
            {
              q: "Quelle formule donne la masse volumique d'un cristal à partir de sa maille cubique ?",
              options: ["ρ = a³ ÷ (N × M)", "ρ = N × M ÷ (N_A × a³)", "ρ = (N_A × a³) ÷ (N × M)", "ρ = M × a³"],
              answer: 1,
              why: "La masse de la maille vaut N × M ÷ N_A ; on la divise par le volume de la maille a³.",
            },
          ],
          trap: "Compter toutes les entités dessinées sur la maille (8 sommets + 6 faces = 14) au lieu de tenir compte du partage entre mailles voisines : une entité sur un sommet ne compte que pour 1/8 et une entité sur une face pour ½.",
          method: "Pour un calcul de masse volumique, avancez en quatre lignes : nombre N d'entités par maille, masse de la maille (N × M ÷ N_A), volume a³ après conversion de a en cm, puis quotient. Vérifiez enfin que le résultat a un ordre de grandeur plausible (quelques g/cm³ pour un solide).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cellule-vivante',
          title: 'Une structure complexe : la cellule vivante',
          minutes: 30,
          objectives: [
            "Analyser et interpréter des documents historiques relatifs à la construction de la théorie cellulaire.",
            "Situer les ordres de grandeur de taille : atome, molécule, organite, cellule, organisme.",
            "Relier l'échelle de la cellule à celle de l'atome par des ordres de grandeur.",
            "Décrire la membrane plasmique comme une bicouche lipidique associée à des protéines, stabilisée par le caractère hydrophile ou lipophile de ses molécules.",
          ],
          course: [
            {
              heading: "Du microscope à la théorie cellulaire",
              paragraphs: [
                "La cellule est invisible à l'œil nu : sa découverte est liée à l'invention du microscope, à la fin du XVIe siècle. En 1665, l'Anglais Robert Hooke publie Micrographia : en observant une fine tranche de liège, il voit de petites logettes qu'il nomme « cells » (cellules, petites chambres). Il n'observe en fait que les parois de cellules mortes. Dans les années 1670, le Hollandais Antoni van Leeuwenhoek, avec des microscopes à une seule lentille très grossissants, découvre des êtres unicellulaires dans l'eau, qu'il appelle « animalcules », ainsi que des globules rouges et des spermatozoïdes.",
                "Au XIXe siècle, les microscopes s'améliorent et les observations se multiplient. En 1838, le botaniste Matthias Schleiden affirme que tous les végétaux sont formés de cellules ; en 1839, Theodor Schwann étend cette idée aux animaux. L'observation de structures semblables dans de très nombreux organismes conduit à un concept général : la cellule est l'unité commune de tous les êtres vivants. En 1855, Rudolf Virchow ajoute que toute cellule provient d'une autre cellule (« omnis cellula e cellula ») : les cellules naissent par division, et non par génération spontanée.",
                "La théorie cellulaire illustre la construction d'un savoir scientifique : elle résulte de la généralisation d'observations nombreuses, faites par des chercheurs différents, et elle dépend des progrès techniques. Elle n'est pas l'œuvre d'un seul savant ni d'une seule observation.",
              ],
              box: { label: "À retenir", text: "Théorie cellulaire (XIXe siècle) : tout être vivant est formé d'une ou de plusieurs cellules ; la cellule est l'unité de structure et de fonctionnement du vivant ; toute cellule provient d'une cellule préexistante, par division." },
            },
            {
              heading: "Le microscope électronique : explorer l'intérieur de la cellule",
              paragraphs: [
                "Le microscope optique ne permet pas de distinguer deux points distants de moins d'environ 0,2 µm : cette limite, appelée limite de résolution, est liée à la longueur d'onde de la lumière visible. On y voit les cellules, leur noyau, parfois les chloroplastes, mais pas les détails de leurs structures internes.",
                "Le microscope électronique, dont le premier prototype est construit en 1931 par Ernst Ruska et Max Knoll, utilise un faisceau d'électrons au lieu de la lumière. Sa résolution atteint aujourd'hui moins d'un nanomètre. Il a révélé les organites (mitochondries, réticulum, appareil de Golgi, ribosomes), l'aspect de la membrane plasmique et la différence entre cellules eucaryotes (avec noyau) et procaryotes comme les bactéries (sans noyau). Il a ainsi permis de relier l'échelle moléculaire à l'échelle cellulaire.",
              ],
            },
            {
              heading: "De l'atome à l'organisme : les ordres de grandeur",
              paragraphs: [
                "Un ordre de grandeur est la puissance de 10 la plus proche d'une valeur. Atome : environ 10⁻¹⁰ m (0,1 nm). Petite molécule comme le glucose : environ 10⁻⁹ m (1 nm). Protéine : environ 10⁻⁸ m (10 nm), comme l'épaisseur de la membrane plasmique (environ 7,5 nm). Organite comme une mitochondrie : environ 10⁻⁶ m (1 µm), comme une bactérie. Cellule animale : environ 10⁻⁵ m (10 à 30 µm). Organisme humain : environ 1 m.",
                "Une cellule de 10 µm est donc environ 10⁻⁵ ÷ 10⁻¹⁰ = 10⁵ fois plus grande qu'un atome : si un atome avait la taille d'une bille de 1 cm, la cellule mesurerait environ 1 km. Le corps humain contient de l'ordre de 30 000 milliards de cellules (3 × 10¹³).",
                "La cellule est faite de la matière étudiée dans les leçons précédentes : elle contient surtout de l'eau (environ 70 % de sa masse) et des molécules organiques (glucides, lipides, protéines, acides nucléiques), bâties principalement à partir des éléments C, H, O et N. C'est un niveau d'organisation complexe : des atomes forment des molécules, qui s'assemblent en structures (membranes, organites), qui forment la cellule.",
              ],
              box: { label: "Repère", text: "Atome 10⁻¹⁰ m ; molécule 10⁻⁹ m ; protéine et épaisseur de membrane 10⁻⁸ m ; organite et bactérie 10⁻⁶ m ; cellule animale 10⁻⁵ m ; organisme 1 m. 1 µm = 10⁻⁶ m ; 1 nm = 10⁻⁹ m." },
            },
            {
              heading: "La membrane plasmique : une bicouche lipidique",
              paragraphs: [
                "La cellule est un espace séparé du milieu extérieur par une membrane plasmique. Celle-ci est constituée d'une bicouche de lipides, principalement des phospholipides, dans laquelle sont insérées des protéines. Au microscope électronique, elle apparaît comme deux lignes sombres séparées par une ligne claire, sur une épaisseur d'environ 7,5 nm.",
                "Un phospholipide possède une tête polaire, hydrophile (qui a de l'affinité pour l'eau), contenant un groupe phosphate, et deux longues queues formées de chaînes d'acides gras, hydrophobes, c'est-à-dire lipophiles (qui ont de l'affinité pour les corps gras et fuient l'eau). Dans l'eau, ces molécules s'organisent spontanément en deux couches : les têtes hydrophiles sont tournées vers l'eau du milieu extérieur et vers l'eau du cytoplasme, les queues lipophiles se regroupent au centre, à l'abri de l'eau. C'est ce caractère hydrophile ou lipophile des différentes parties des molécules qui stabilise la membrane, un peu comme des gouttes d'huile qui se rassemblent dans l'eau.",
                "Les protéines membranaires traversent la bicouche ou sont fixées à sa surface : elles assurent par exemple le passage de certaines substances (ions, glucose) ou la reconnaissance de signaux. Les molécules de la membrane peuvent se déplacer latéralement : on parle de modèle de la mosaïque fluide, proposé par Singer et Nicolson en 1972.",
              ],
              box: { label: "Définition", text: "Hydrophile : qui a de l'affinité pour l'eau. Lipophile (ou hydrophobe) : qui a de l'affinité pour les lipides et fuit l'eau. Un phospholipide a une tête hydrophile et deux queues lipophiles : dans l'eau, il forme spontanément une bicouche." },
            },
          ],
          keyPoints: [
            "La découverte de la cellule est liée au microscope : Hooke (1665), Leeuwenhoek (années 1670).",
            "Théorie cellulaire au XIXe siècle : Schleiden (1838), Schwann (1839), Virchow (1855, toute cellule provient d'une cellule).",
            "Le microscope électronique (1931) a révélé l'intérieur de la cellule et la structure de la membrane.",
            "Ordres de grandeur : atome 10⁻¹⁰ m, molécule 10⁻⁹ m, organite 10⁻⁶ m, cellule 10⁻⁵ m, organisme 1 m.",
            "La membrane plasmique est une bicouche de phospholipides avec des protéines, épaisse d'environ 7,5 nm.",
            "Têtes hydrophiles vers l'eau, queues lipophiles au centre : cette organisation stabilise la membrane.",
          ],
          example: {
            statement: "Une cellule de levure mesure 5 µm et un atome de carbone environ 0,15 nm. a) Exprimer ces deux tailles en mètres, en écriture scientifique. b) Combien de fois la levure est-elle plus grande que l'atome ? c) La levure est observée au microscope optique avec un grossissement de × 400 : quelle taille a-t-elle sur l'image ? Pourrait-on y voir la membrane plasmique, épaisse de 7,5 nm ?",
            solution: [
              "a) 5 µm = 5 × 10⁻⁶ m. 0,15 nm = 0,15 × 10⁻⁹ m = 1,5 × 10⁻¹⁰ m.",
              "b) Rapport : 5 × 10⁻⁶ ÷ (1,5 × 10⁻¹⁰) ≈ 3,3 × 10⁴. La levure est environ 33 000 fois plus grande qu'un atome de carbone, soit un rapport d'ordre de grandeur 10⁴ à 10⁵.",
              "c) Taille sur l'image : 5 µm × 400 = 2 000 µm = 2 mm.",
              "L'épaisseur de la membrane (7,5 nm = 0,0075 µm) est bien inférieure à la limite de résolution du microscope optique (environ 0,2 µm) : on ne peut pas distinguer ses deux feuillets, quel que soit le grossissement.",
              "Réponse : 5 × 10⁻⁶ m et 1,5 × 10⁻¹⁰ m, rapport d'environ 3 × 10⁴, image de 2 mm ; la structure de la membrane exige un microscope électronique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Exprimer en mètres, en écriture scientifique, puis classer de la plus petite à la plus grande : une protéine (10 nm), un globule rouge (7 µm), un atome d'hydrogène (0,1 nm), une bactérie (2 µm), un ovocyte humain (0,1 mm), une molécule de glucose (1 nm).",
              hint: "1 mm = 10⁻³ m, 1 µm = 10⁻⁶ m, 1 nm = 10⁻⁹ m.",
              solution: [
                "Atome d'hydrogène : 0,1 nm = 1 × 10⁻¹⁰ m.",
                "Molécule de glucose : 1 nm = 1 × 10⁻⁹ m. Protéine : 10 nm = 1 × 10⁻⁸ m.",
                "Bactérie : 2 µm = 2 × 10⁻⁶ m. Globule rouge : 7 µm = 7 × 10⁻⁶ m. Ovocyte : 0,1 mm = 1 × 10⁻⁴ m.",
                "Classement : atome d'hydrogène < glucose < protéine < bactérie < globule rouge < ovocyte.",
              ],
            },
            {
              level: 2,
              statement: "Voici quatre documents historiques résumés. Document 1 (Hooke, 1665) : une tranche de liège montre de petites logettes vides, nommées « cells ». Document 2 (Schleiden, 1838) : toutes les parties des plantes étudiées sont formées de cellules. Document 3 (Schwann, 1839) : les tissus animaux, malgré leur diversité, sont eux aussi formés de cellules. Document 4 (Virchow, 1855) : toute cellule provient d'une cellule. a) Pourquoi Hooke n'a-t-il pas découvert la cellule vivante au sens actuel ? b) Quel apport commun ont les documents 2 et 3 ? c) Quelle idée le document 4 rejette-t-il ? d) Rédiger les trois propositions de la théorie cellulaire.",
              hint: "Le liège est un tissu mort. Pour la question c, pensez à l'idée ancienne selon laquelle des êtres vivants pourraient apparaître à partir de matière inerte.",
              solution: [
                "a) Le liège est formé de cellules mortes : Hooke n'a vu que leurs parois, vides de contenu. Il a nommé la structure, mais sans connaître le contenu vivant ni le rôle universel de la cellule.",
                "b) Schleiden pour les végétaux, puis Schwann pour les animaux, généralisent l'observation : tous les êtres vivants, végétaux comme animaux, sont formés de cellules. C'est la généralisation d'observations nombreuses qui fonde le concept de cellule.",
                "c) Le document 4 rejette l'idée que des cellules puissent apparaître spontanément à partir de matière non vivante : une cellule naît toujours de la division d'une cellule préexistante.",
                "d) Tout être vivant est constitué d'une ou de plusieurs cellules ; la cellule est l'unité de structure et de fonctionnement du vivant ; toute cellule provient d'une autre cellule.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 : des phospholipides agités dans l'eau forment spontanément de petites vésicules sphériques, limitées par une bicouche (les liposomes). Document 2 : au microscope électronique, à un grossissement de × 100 000, la membrane plasmique apparaît comme deux lignes sombres séparées par une ligne claire. Document 3 : le dioxygène traverse facilement une bicouche lipidique pure, mais les ions Na⁺ et le glucose ne la traversent pratiquement pas. a) Expliquer l'organisation spontanée des phospholipides dans l'eau. b) La membrane mesure 7,5 nm d'épaisseur : quelle épaisseur a-t-elle sur l'image du document 2 ? Pourquoi faut-il un microscope électronique ? c) Pourtant, les cellules absorbent du glucose : à l'aide du cours, proposer une explication.",
              hint: "Pensez aux parties hydrophiles et lipophiles de la molécule. Pour b, multipliez l'épaisseur réelle par le grossissement et comparez-la à la limite de résolution du microscope optique (0,2 µm).",
              solution: [
                "a) Un phospholipide a une tête hydrophile et deux queues lipophiles. Dans l'eau, les queues se regroupent à l'abri de l'eau et les têtes se tournent vers l'eau, des deux côtés : il se forme une bicouche, qui se referme sur elle-même en vésicule. Cette organisation est stable, car elle évite le contact entre les queues lipophiles et l'eau.",
                "b) Épaisseur sur l'image : 7,5 nm × 100 000 = 750 000 nm = 0,75 mm. L'épaisseur réelle (7,5 nm) est environ 27 fois plus petite que la limite de résolution du microscope optique (0,2 µm = 200 nm) : seul le microscope électronique, de résolution inférieure au nanomètre, distingue les deux feuillets.",
                "c) Le centre de la bicouche est lipophile : les petites molécules non chargées comme O₂ le traversent, mais pas les ions ni les molécules hydrophiles comme le glucose. Leur passage est assuré par des protéines insérées dans la membrane, qui forment des transporteurs ou des canaux.",
                "Conclusion : la membrane est une bicouche lipidique stabilisée par le caractère hydrophile ou lipophile de ses molécules, et ses protéines contrôlent les échanges de la cellule avec son milieu.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque savant à son apport dans l'histoire de la cellule.",
            pairs: [
              { left: "Robert Hooke (1665)", right: "Nomme « cellules » les logettes observées dans le liège" },
              { left: "Antoni van Leeuwenhoek (années 1670)", right: "Observe des êtres unicellulaires, les « animalcules »" },
              { left: "Matthias Schleiden (1838)", right: "Affirme que tous les végétaux sont formés de cellules" },
              { left: "Theodor Schwann (1839)", right: "Étend le concept de cellule aux animaux" },
              { left: "Rudolf Virchow (1855)", right: "Toute cellule provient d'une autre cellule" },
              { left: "Ernst Ruska et Max Knoll (1931)", right: "Construisent le premier microscope électronique" },
            ],
          },
          quiz: [
            {
              q: "Quel est l'ordre de grandeur de la taille d'une cellule animale ?",
              options: ["10⁻⁵ m", "10⁻¹⁰ m", "10⁻² m", "10⁻⁸ m"],
              answer: 0,
              why: "Une cellule animale mesure de 10 à 30 µm environ, soit de l'ordre de 10⁻⁵ m. 10⁻¹⁰ m est la taille d'un atome, 10⁻⁸ m celle d'une protéine.",
            },
            {
              q: "Pourquoi le microscope électronique a-t-il été nécessaire pour décrire la membrane plasmique ?",
              options: ["Parce que la membrane est transparente à la lumière de toutes les couleurs", "Parce que son épaisseur est inférieure à la limite de résolution du microscope optique", "Parce que la membrane n'existe que dans les cellules mortes, invisibles au microscope optique"],
              answer: 1,
              why: "La membrane mesure environ 7,5 nm, bien moins que la limite de résolution du microscope optique (environ 0,2 µm).",
            },
            {
              q: "Dans la bicouche lipidique, où se trouvent les queues des phospholipides ?",
              options: ["Tournées vers le milieu extérieur, pour capter l'eau qui entoure la cellule", "Tournées vers le cytoplasme", "Regroupées au centre de la bicouche, à l'abri de l'eau", "Dispersées au hasard"],
              answer: 2,
              why: "Les queues sont lipophiles (hydrophobes) : elles se regroupent au centre, tandis que les têtes hydrophiles sont au contact de l'eau des deux côtés.",
            },
            {
              q: "Qu'apporte Rudolf Virchow à la théorie cellulaire en 1855 ?",
              options: ["L'invention du microscope", "La découverte des cellules végétales dans toutes les parties des plantes", "Le mot « cellule »", "L'idée que toute cellule provient d'une cellule"],
              answer: 3,
              why: "Virchow affirme que les cellules naissent par division d'une cellule préexistante. Le mot « cellule » vient de Hooke, les cellules végétales de Schleiden.",
            },
            {
              q: "Une cellule de 10 µm est environ combien de fois plus grande qu'un atome de 0,1 nm ?",
              options: ["100 fois", "100 000 fois", "1 000 fois", "10 000 000 fois"],
              answer: 1,
              why: "10 µm = 10⁻⁵ m et 0,1 nm = 10⁻¹⁰ m : le rapport vaut 10⁻⁵ ÷ 10⁻¹⁰ = 10⁵.",
            },
          ],
          trap: "Confondre les unités micromètre (µm, 10⁻⁶ m) et nanomètre (nm, 10⁻⁹ m), ce qui fausse les ordres de grandeur d'un facteur 1 000 : une cellule se mesure en micromètres, une molécule ou une membrane en nanomètres.",
          method: "Pour comparer deux tailles, convertissez-les d'abord toutes les deux en mètres en écriture scientifique, puis divisez les puissances de 10 en soustrayant les exposants : 10⁻⁵ ÷ 10⁻¹⁰ = 10⁻⁵⁻⁽⁻¹⁰⁾ = 10⁵.",
        },
      ],
    },
    /* ==================================================================== */
    /* THÈME 2 · LE SOLEIL, NOTRE SOURCE D'ÉNERGIE                            */
    /* ==================================================================== */
    {
      id: 'soleil-energie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'rayonnement-solaire',
          title: 'Le rayonnement solaire',
          minutes: 35,
          objectives: [
            "Expliquer que la fusion de l'hydrogène fournit l'énergie du Soleil et déterminer la masse solaire transformée chaque seconde en énergie à partir de la puissance rayonnée.",
            "Déterminer la longueur d'onde d'émission maximale sur le spectre d'un corps noir et appliquer la loi de Wien.",
            "Expliquer qualitativement l'influence de l'heure, de la saison et de la latitude sur la puissance solaire reçue par unité de surface terrestre.",
          ],
          course: [
            {
              heading: "La fusion de l'hydrogène, moteur du Soleil",
              paragraphs: [
                "Au cœur du Soleil, la température atteint environ 15 millions de kelvins et la densité est très élevée. Dans ces conditions, des noyaux d'hydrogène fusionnent pour former des noyaux d'hélium. Le bilan de cette chaîne de réactions s'écrit : 4 ¹₁H → ⁴₂He + 2 ⁰₁e (des neutrinos sont aussi émis). L'énergie libérée maintient l'étoile à très haute température et s'oppose à son effondrement sous son propre poids.",
                "La masse des produits est légèrement inférieure à celle des réactifs : environ 0,7 % de la masse de l'hydrogène consommé disparaît. D'après la relation d'Einstein, cette masse perdue Δm correspond à une énergie libérée E = Δm × c², où c = 3,00 × 10⁸ m/s est la vitesse de la lumière dans le vide. Comme c² est immense (9,0 × 10¹⁶ m²/s²), une très petite masse libère une énorme énergie.",
                "Le Soleil rayonne une puissance P ≈ 3,8 × 10²⁶ W, c'est-à-dire 3,8 × 10²⁶ joules par seconde. Il perd donc chaque seconde une masse Δm = P × Δt ÷ c² = 3,8 × 10²⁶ ÷ (9,0 × 10¹⁶) ≈ 4,2 × 10⁹ kg, soit environ 4 millions de tonnes. C'est considérable à notre échelle mais négligeable devant la masse du Soleil (2,0 × 10³⁰ kg) : depuis sa formation il y a 4,6 milliards d'années, il n'a perdu ainsi qu'environ 0,03 % de sa masse.",
              ],
              box: { label: "Formule", text: "Relation d'Einstein : E = Δm × c², avec E en joules (J), Δm en kilogrammes (kg) et c = 3,00 × 10⁸ m/s. Masse transformée par seconde : Δm = P × Δt ÷ c² avec Δt = 1 s." },
            },
            {
              heading: "Le spectre du corps noir et la loi de Wien",
              paragraphs: [
                "Tous les corps matériels émettent des ondes électromagnétiques, d'autant plus intensément qu'ils sont chauds : les étoiles perdent ainsi de l'énergie par rayonnement. On modélise le rayonnement émis par la surface d'une étoile par celui d'un corps noir, objet idéal qui absorbe tout rayonnement reçu. Le spectre d'un corps noir (intensité émise en fonction de la longueur d'onde λ) a la forme d'une courbe en cloche dissymétrique, qui ne dépend que de sa température.",
                "Quand la température augmente, la courbe s'élève (le corps émet beaucoup plus d'énergie) et son maximum se déplace vers les courtes longueurs d'onde. La longueur d'onde d'émission maximale λmax est inversement proportionnelle à la température absolue T de la surface : c'est la loi de Wien, λmax × T = 2,90 × 10⁻³ m·K. La température absolue s'exprime en kelvins : T (K) = θ (°C) + 273,15.",
                "La surface du Soleil, à environ 5 800 K, émet avec un maximum vers λmax = 2,90 × 10⁻³ ÷ 5 800 = 5,0 × 10⁻⁷ m, soit 500 nm, au milieu du domaine visible (400 à 800 nm). Une étoile plus froide, vers 3 500 K, a son maximum dans l'infrarouge proche et paraît rouge ; une étoile vers 12 000 K paraît bleutée. Le corps humain, vers 310 K, émet surtout dans l'infrarouge, vers 9 à 10 µm : c'est ce que détectent les caméras thermiques.",
              ],
              box: { label: "Formule", text: "Loi de Wien : λmax × T = 2,90 × 10⁻³ m·K, avec λmax en mètres et T en kelvins. Plus un corps est chaud, plus λmax est petite." },
            },
            {
              heading: "La puissance reçue dépend de l'inclinaison des rayons",
              paragraphs: [
                "Au sommet de l'atmosphère, à la distance moyenne Terre-Soleil, une surface de 1 m² placée perpendiculairement aux rayons du Soleil reçoit environ 1 360 W : c'est la constante solaire. La puissance radiative reçue par une surface plane est proportionnelle à son aire S, et elle dépend de l'angle θ entre la normale à la surface (la droite perpendiculaire à la surface) et la direction du Soleil : P = 1 360 × S × cos θ au sommet de l'atmosphère.",
                "Une analogie aide à le comprendre : une lampe torche dirigée perpendiculairement vers une table éclaire un petit disque très lumineux ; si on l'incline, la même lumière s'étale sur une tache plus grande, chaque centimètre carré reçoit moins. Plus les rayons arrivent rasants (θ proche de 90°), plus la puissance reçue par mètre carré est faible.",
              ],
              box: { label: "Propriété", text: "La puissance solaire reçue par une surface est maximale quand les rayons lui sont perpendiculaires (θ = 0°, cos θ = 1) ; elle diminue quand les rayons deviennent rasants (cos θ diminue vers 0)." },
            },
            {
              heading: "Le jour, les saisons et la latitude",
              paragraphs: [
                "Variation diurne : au cours d'une journée, le Soleil monte puis redescend dans le ciel. À midi solaire, il est au plus haut, ses rayons sont les moins inclinés : la puissance reçue par le sol est maximale. Le matin et le soir, les rayons rasants apportent peu d'énergie.",
                "Variation saisonnière : l'axe de rotation de la Terre est incliné d'environ 23,4° par rapport à la perpendiculaire au plan de son orbite et garde une direction fixe dans l'espace. Au cours de l'année, en un lieu donné, la hauteur du Soleil à midi et la durée du jour varient : en été, le Soleil monte plus haut et reste plus longtemps au-dessus de l'horizon. Les saisons ne sont pas dues à la distance au Soleil : la Terre en est même au plus près début janvier, en plein hiver de l'hémisphère Nord.",
                "Influence de la latitude : à midi, le jour d'un équinoxe, l'angle entre les rayons et la verticale du lieu est égal à la latitude. À l'équateur, les rayons arrivent à la verticale (cos 0° = 1) ; à 49° de latitude nord (Paris), cos 49° ≈ 0,66 ; près des pôles, ils sont rasants. La puissance moyenne reçue par unité de surface diminue donc de l'équateur vers les pôles, ce qui explique le zonage climatique : zone chaude intertropicale, zones tempérées, zones polaires.",
              ],
              box: { label: "À retenir", text: "La puissance solaire reçue par mètre carré de sol dépend de l'heure (variation diurne), du moment de l'année (variation saisonnière, liée à l'inclinaison de l'axe de la Terre) et de la latitude (zonage climatique)." },
            },
          ],
          keyPoints: [
            "Le Soleil tire son énergie de la fusion de l'hydrogène en hélium : 4 ¹₁H → ⁴₂He + 2 ⁰₁e.",
            "Relation d'Einstein E = Δm × c² : le Soleil perd environ 4 × 10⁹ kg par seconde.",
            "Le spectre d'un corps noir ne dépend que de sa température ; loi de Wien : λmax × T = 2,90 × 10⁻³ m·K.",
            "Soleil : surface vers 5 800 K, λmax ≈ 500 nm (visible). Corps humain : λmax ≈ 10 µm (infrarouge).",
            "Constante solaire : environ 1 360 W/m² ; la puissance reçue est proportionnelle à l'aire et diminue quand les rayons sont inclinés.",
            "Puissance reçue au sol : variations diurne, saisonnière (inclinaison de l'axe, pas la distance) et selon la latitude.",
          ],
          example: {
            statement: "Le Soleil rayonne une puissance P = 3,8 × 10²⁶ W. a) Calculer la masse que le Soleil transforme en énergie chaque seconde. b) En déduire la masse perdue en un an (1 an ≈ 3,15 × 10⁷ s). c) Comparer à la masse du Soleil, M = 2,0 × 10³⁰ kg. Donnée : c = 3,00 × 10⁸ m/s.",
            solution: [
              "a) En une seconde, le Soleil rayonne E = P × Δt = 3,8 × 10²⁶ × 1 = 3,8 × 10²⁶ J.",
              "D'après la relation d'Einstein, Δm = E ÷ c² = 3,8 × 10²⁶ ÷ (3,00 × 10⁸)² = 3,8 × 10²⁶ ÷ (9,0 × 10¹⁶) ≈ 4,2 × 10⁹ kg.",
              "b) En un an : 4,2 × 10⁹ × 3,15 × 10⁷ ≈ 1,3 × 10¹⁷ kg.",
              "c) Rapport : 1,3 × 10¹⁷ ÷ (2,0 × 10³⁰) ≈ 6,5 × 10⁻¹⁴. Le Soleil perd chaque année moins d'un dix-millième de milliardième de sa masse.",
              "Réponse : environ 4,2 × 10⁹ kg par seconde et 1,3 × 10¹⁷ kg par an, une fraction négligeable de la masse du Soleil, ce qui lui permet de briller pendant des milliards d'années.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On utilise la loi de Wien : λmax × T = 2,90 × 10⁻³ m·K. a) Le spectre du Soleil présente un maximum à λmax = 500 nm : calculer la température de sa surface. b) Calculer λmax pour la peau humaine à 37 °C ; dans quel domaine se situe ce rayonnement ? c) L'étoile Bételgeuse a une température de surface d'environ 3 500 K : calculer λmax et expliquer sa couleur rougeâtre.",
              hint: "Convertissez les nanomètres en mètres (1 nm = 10⁻⁹ m) et les degrés Celsius en kelvins (ajoutez 273).",
              solution: [
                "a) T = 2,90 × 10⁻³ ÷ (500 × 10⁻⁹) = 2,90 × 10⁻³ ÷ (5,00 × 10⁻⁷) = 5 800 K.",
                "b) T = 37 + 273 = 310 K. λmax = 2,90 × 10⁻³ ÷ 310 ≈ 9,4 × 10⁻⁶ m = 9,4 µm : c'est de l'infrarouge.",
                "c) λmax = 2,90 × 10⁻³ ÷ 3 500 ≈ 8,3 × 10⁻⁷ m = 830 nm, dans l'infrarouge proche. Dans le visible, l'étoile émet davantage dans le rouge que dans le bleu : elle paraît rougeâtre.",
                "Résultat : 5 800 K pour le Soleil, 9,4 µm (infrarouge) pour la peau, 830 nm pour Bételgeuse.",
              ],
            },
            {
              level: 2,
              statement: "Par temps clair, au niveau du sol, on considère qu'une surface perpendiculaire aux rayons du Soleil reçoit 1 000 W/m² (valeur simplifiée). On néglige les différences d'épaisseur d'atmosphère traversée. a) À midi, un jour d'équinoxe, l'angle entre les rayons et la verticale est égal à la latitude. Calculer la puissance reçue par 1 m² de sol horizontal à l'équateur (latitude 0°), à 45° N et à 60° N. b) Un panneau solaire de 2,0 m² est orienté perpendiculairement aux rayons : quelle puissance reçoit-il ? Et s'il est incliné de 60° par rapport à cette position ? c) Expliquer le zonage climatique. Données : cos 45° ≈ 0,71 ; cos 60° = 0,50.",
              hint: "Utilisez P = 1 000 × S × cos θ, où θ est l'angle entre la normale à la surface et la direction des rayons. Pour un sol horizontal, la normale est la verticale.",
              solution: [
                "a) Équateur : θ = 0°, P = 1 000 × 1 × 1 = 1 000 W. À 45° N : P = 1 000 × 0,71 ≈ 710 W. À 60° N : P = 1 000 × 0,50 = 500 W.",
                "b) Panneau perpendiculaire aux rayons : θ = 0°, P = 1 000 × 2,0 × 1 = 2 000 W. Incliné de 60° : P = 1 000 × 2,0 × 0,50 = 1 000 W, deux fois moins.",
                "c) Plus la latitude est élevée, plus les rayons arrivent inclinés sur le sol et plus la puissance reçue par mètre carré est faible : la même énergie s'étale sur une plus grande surface. Les régions proches de l'équateur reçoivent donc en moyenne plus d'énergie que les régions polaires, d'où les zones climatiques chaude, tempérées et froides.",
                "Résultat : 1 000 W, environ 710 W et 500 W ; 2 000 W puis 1 000 W pour le panneau.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 : le Soleil rayonne une puissance P = 3,83 × 10²⁶ W ; sa masse est M = 1,99 × 10³⁰ kg ; son âge est d'environ 4,6 milliards d'années. Document 2 : lors de la fusion de l'hydrogène en hélium, environ 0,7 % de la masse de l'hydrogène consommé est transformée en énergie. Document 3 : le spectre de la lumière solaire, mesuré hors de l'atmosphère, présente un maximum vers 500 nm. Données : c = 3,00 × 10⁸ m/s ; 1 an ≈ 3,16 × 10⁷ s ; loi de Wien λmax × T = 2,90 × 10⁻³ m·K. a) Calculer la masse transformée en énergie chaque seconde. b) En déduire la masse d'hydrogène consommée chaque seconde. c) En supposant la puissance constante, calculer la fraction de sa masse que le Soleil a perdue depuis sa formation. d) Déterminer la température de surface du Soleil. e) Le maximum du spectre est dans le vert : pourquoi le Soleil ne nous paraît-il pas vert ?",
              hint: "Pour b, la masse transformée ne représente que 0,7 % de l'hydrogène consommé : divisez par 0,007. Pour e, regardez la largeur du spectre dans le domaine visible.",
              solution: [
                "a) Δm = P × Δt ÷ c² = 3,83 × 10²⁶ ÷ (9,00 × 10¹⁶) ≈ 4,26 × 10⁹ kg chaque seconde.",
                "b) Masse d'hydrogène consommée : 4,26 × 10⁹ ÷ 0,007 ≈ 6,1 × 10¹¹ kg par seconde, soit environ 600 millions de tonnes.",
                "c) Durée : 4,6 × 10⁹ × 3,16 × 10⁷ ≈ 1,45 × 10¹⁷ s. Masse perdue : 4,26 × 10⁹ × 1,45 × 10¹⁷ ≈ 6,2 × 10²⁶ kg. Fraction : 6,2 × 10²⁶ ÷ 1,99 × 10³⁰ ≈ 3 × 10⁻⁴, soit environ 0,03 %.",
                "d) T = 2,90 × 10⁻³ ÷ (500 × 10⁻⁹) = 5 800 K.",
                "e) Le spectre d'un corps noir est très large : le Soleil émet des quantités comparables de toutes les couleurs du visible, du violet au rouge. Notre œil perçoit ce mélange comme une lumière blanche (légèrement jaunâtre à travers l'atmosphère), et non comme du vert.",
                "Conclusion : la fusion transforme environ 4 × 10⁹ kg de matière en énergie par seconde, mais la masse du Soleil n'a presque pas varié depuis sa naissance.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur le rayonnement solaire.",
            statements: [
              { text: "C'est l'été dans l'hémisphère Nord parce que la Terre est alors plus proche du Soleil.", true: false, why: "La Terre est au plus près du Soleil début janvier. Les saisons sont dues à l'inclinaison de l'axe de rotation, qui modifie la hauteur du Soleil et la durée du jour." },
              { text: "Le Soleil perd de la masse chaque seconde.", true: true, why: "La fusion transforme de la masse en énergie (E = Δm × c²) : environ 4 × 10⁹ kg par seconde." },
              { text: "Plus une étoile est chaude, plus sa longueur d'onde d'émission maximale est grande.", true: false, why: "C'est l'inverse : d'après la loi de Wien, λmax est inversement proportionnelle à la température." },
              { text: "Le corps humain émet un rayonnement électromagnétique.", true: true, why: "Tout corps émet un rayonnement lié à sa température ; vers 310 K, il se situe dans l'infrarouge, vers 10 µm." },
              { text: "Dans la loi de Wien, la température peut s'exprimer en degrés Celsius.", true: false, why: "Il faut utiliser la température absolue, en kelvins : T (K) = θ (°C) + 273,15." },
              { text: "Un mètre carré de sol reçoit plus de puissance solaire quand les rayons sont perpendiculaires au sol.", true: true, why: "La puissance reçue est maximale pour des rayons perpendiculaires (cos θ = 1) ; des rayons inclinés s'étalent sur une plus grande surface." },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'origine de l'énergie rayonnée par le Soleil ?",
              options: ["La combustion du carbone avec le dioxygène", "La fission de noyaux d'uranium", "La fusion de noyaux d'hydrogène en hélium", "Le refroidissement lent d'un astre initialement chaud"],
              answer: 2,
              why: "Au cœur du Soleil, la fusion de l'hydrogène en hélium libère de l'énergie : une partie de la masse est transformée selon E = Δm × c².",
            },
            {
              q: "Une étoile a une température de surface de 10 000 K. D'après la loi de Wien, λmax vaut :",
              options: ["290 nm", "2,9 µm", "29 nm", "2 900 nm"],
              answer: 0,
              why: "λmax = 2,90 × 10⁻³ ÷ 10 000 = 2,9 × 10⁻⁷ m = 290 nm, dans l'ultraviolet.",
            },
            {
              q: "Si l'on double la température absolue d'un corps noir, sa longueur d'onde d'émission maximale :",
              options: ["Double", "Ne change pas, car elle ne dépend que de la nature du corps", "Est divisée par 4", "Est divisée par 2"],
              answer: 3,
              why: "λmax est inversement proportionnelle à T : si T est multipliée par 2, λmax est divisée par 2.",
            },
            {
              q: "Pourquoi les régions polaires reçoivent-elles moins de puissance solaire par mètre carré que l'équateur ?",
              options: ["Parce qu'elles sont plus éloignées du Soleil de plusieurs milliers de kilomètres", "Parce que les rayons y arrivent plus inclinés", "Parce que la glace empêche le rayonnement d'arriver jusqu'au sol"],
              answer: 1,
              why: "Aux hautes latitudes, les rayons sont rasants et la même puissance s'étale sur une surface plus grande. La différence de distance au Soleil est négligeable.",
            },
            {
              q: "Le Soleil rayonne 3,8 × 10²⁶ W. Quelle masse transforme-t-il en énergie chaque seconde (c = 3,0 × 10⁸ m/s) ?",
              options: ["1,3 × 10¹⁸ kg", "4,2 × 10⁹ kg", "3,8 × 10²⁶ kg", "1,1 × 10³⁵ kg"],
              answer: 1,
              why: "Δm = P × Δt ÷ c² = 3,8 × 10²⁶ ÷ 9,0 × 10¹⁶ ≈ 4,2 × 10⁹ kg. Diviser seulement par c (et non c²) donne la valeur fausse 1,3 × 10¹⁸.",
            },
          ],
          trap: "Expliquer les saisons par la distance de la Terre au Soleil : elle varie peu au cours de l'année et la Terre en est au plus près en janvier. Les saisons viennent de l'inclinaison de l'axe de rotation, qui modifie la hauteur du Soleil et la durée du jour.",
          method: "Avant d'appliquer la loi de Wien, écrivez les unités à côté de chaque valeur : λmax en mètres, T en kelvins. Convertissez d'abord (nm en m, °C en K), calculez, puis vérifiez l'ordre de grandeur : quelques milliers de kelvins pour une étoile, quelques centaines de nanomètres pour la lumière visible.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'bilan-radiatif',
          title: 'Le bilan radiatif terrestre et l’effet de serre',
          minutes: 35,
          objectives: [
            "Calculer la fraction de la puissance émise par le Soleil qui atteint la Terre, à partir de son rayon et de sa distance au Soleil.",
            "Expliquer que la puissance solaire moyenne reçue par unité de surface terrestre est égale au quart de la constante solaire, et définir l'albédo.",
            "Expliquer l'effet de serre par l'absorption et la réémission du rayonnement infrarouge par l'atmosphère.",
            "Établir un bilan radiatif et caractériser l'équilibre dynamique de la température moyenne du sol.",
          ],
          course: [
            {
              heading: "La part de l'énergie solaire interceptée par la Terre",
              paragraphs: [
                "Le Soleil rayonne sa puissance P ≈ 3,8 × 10²⁶ W dans toutes les directions. À la distance d du Soleil, cette puissance est répartie sur une sphère de surface 4πd². La Terre, de rayon R, n'en intercepte que la partie qui traverse un disque de surface πR², celui de son ombre. La fraction reçue par la Terre est donc πR² ÷ 4πd² = R² ÷ (4d²).",
                "Avec R = 6 370 km et d = 1,50 × 10⁸ km, on trouve R² ÷ (4d²) ≈ 4,5 × 10⁻¹⁰ : la Terre reçoit moins d'un milliardième de la puissance solaire, soit environ 1,7 × 10¹⁷ W. Cette fraction dépend seulement du rayon de la Terre et de sa distance au Soleil. Divisée par l'aire 4πd², la puissance du Soleil donne la constante solaire, C ≈ 1 360 W/m², puissance reçue par 1 m² perpendiculaire aux rayons au sommet de l'atmosphère.",
              ],
              box: { label: "Formule", text: "Fraction de la puissance solaire interceptée par la Terre : πR² ÷ (4πd²) = R² ÷ (4d²). Puissance interceptée : C × πR², où C ≈ 1 360 W/m² est la constante solaire." },
            },
            {
              heading: "En moyenne, un quart de la constante solaire",
              paragraphs: [
                "La puissance interceptée, C × πR², ne se concentre pas sur un disque : la Terre tourne sur elle-même, et cette puissance se répartit, en moyenne sur une journée et sur toutes les latitudes, sur toute la surface de la sphère terrestre, d'aire 4πR², c'est-à-dire quatre fois l'aire du disque. La nuit, un lieu ne reçoit rien ; aux hautes latitudes, les rayons sont rasants.",
                "La puissance solaire moyenne reçue par mètre carré de surface terrestre vaut donc C × πR² ÷ 4πR² = C ÷ 4 ≈ 340 W/m². C'est une moyenne : à midi sous les tropiques, la puissance reçue est bien plus grande ; aux pôles en hiver, elle est nulle.",
              ],
              box: { label: "Propriété", text: "Puissance solaire moyenne reçue par unité de surface terrestre : C ÷ 4 ≈ 1 360 ÷ 4 ≈ 340 W/m², car la puissance interceptée par un disque d'aire πR² se répartit sur une sphère d'aire 4πR²." },
            },
            {
              heading: "L'albédo : la part renvoyée vers l'espace",
              paragraphs: [
                "Une partie du rayonnement solaire reçu est diffusée ou réfléchie vers l'espace sans être absorbée, par les nuages, les aérosols, l'air et les surfaces claires. L'albédo A est le rapport entre la puissance renvoyée et la puissance reçue ; c'est un nombre sans unité, compris entre 0 (tout est absorbé) et 1 (tout est renvoyé). L'albédo terrestre moyen vaut environ 0,30.",
                "L'albédo dépend fortement de la surface : environ 0,8 à 0,9 pour la neige fraîche, 0,3 à 0,4 pour un désert de sable, 0,1 à 0,2 pour une forêt et moins de 0,1 pour l'océan. Les nuages ont un albédo élevé et variable. Ainsi, la puissance moyenne réellement absorbée par la Terre (atmosphère, continents et océans) vaut (1 - A) × C ÷ 4 = 0,70 × 340 ≈ 240 W/m².",
                "L'albédo peut amplifier un changement de température : si la glace fond, la surface sombre découverte (océan, roche) absorbe davantage d'énergie, ce qui accentue le réchauffement. On parle de rétroaction positive.",
              ],
              box: { label: "Définition", text: "Albédo : A = puissance diffusée ou réfléchie ÷ puissance reçue, entre 0 et 1. Albédo terrestre moyen : environ 0,30. Puissance absorbée par m² de surface terrestre : (1 - A) × C ÷ 4 ≈ 240 W/m²." },
            },
            {
              heading: "Le sol rayonne dans l'infrarouge : l'effet de serre",
              paragraphs: [
                "Chauffé, le sol émet à son tour un rayonnement électromagnétique. Vers 288 K (15 °C), la loi de Wien place son maximum vers 2,90 × 10⁻³ ÷ 288 ≈ 1,0 × 10⁻⁵ m, soit 10 µm, dans l'infrarouge. La puissance émise par unité de surface augmente fortement avec la température (selon la loi de Stefan-Boltzmann, P/S = σT⁴, avec σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴, relation donnée lorsqu'on en a besoin). À 288 K, le sol émet environ 390 W/m².",
                "Sans atmosphère, la Terre atteindrait l'équilibre en émettant autant qu'elle absorbe, 240 W/m², ce qui correspond à une température d'environ 255 K, soit -18 °C. Or la température moyenne du sol est d'environ 15 °C. La différence s'explique par l'atmosphère : presque transparente à la lumière visible du Soleil, elle absorbe en revanche une grande partie du rayonnement infrarouge émis par le sol, grâce à certains gaz (vapeur d'eau, dioxyde de carbone, méthane...). L'atmosphère ainsi chauffée émet à son tour un rayonnement infrarouge, dans toutes les directions : vers l'espace et vers le sol. C'est l'effet de serre.",
                "La puissance reçue par le sol en un lieu est donc la somme de la puissance reçue du Soleil et de celle reçue de l'atmosphère, et ces deux contributions sont du même ordre de grandeur. En moyenne mondiale (valeurs arrondies), le sol absorbe environ 160 W/m² venant du Soleil et environ 340 W/m² venant de l'atmosphère.",
              ],
            },
            {
              heading: "Un équilibre dynamique",
              paragraphs: [
                "En moyenne, le sol reçoit environ 160 + 340 = 500 W/m² ; il en perd autant : environ 400 W/m² par rayonnement infrarouge et environ 100 W/m² par d'autres transferts (convection de l'air chaud et évaporation de l'eau). Lorsque le sol reçoit au total une puissance moyenne égale à celle qu'il émet, sa température moyenne reste constante. Cet équilibre est dit dynamique : les échanges d'énergie ne cessent jamais, mais ils se compensent.",
                "Si l'atmosphère contient davantage de gaz à effet de serre, elle renvoie davantage de rayonnement vers le sol : le sol reçoit alors plus qu'il ne perd, sa température augmente, il émet davantage, jusqu'à atteindre un nouvel équilibre, à une température plus élevée. C'est le mécanisme du réchauffement climatique actuel.",
              ],
              box: { label: "À retenir", text: "Équilibre dynamique : puissance reçue par le sol (Soleil + atmosphère) = puissance perdue par le sol. Si l'effet de serre augmente, le sol se réchauffe jusqu'à un nouvel équilibre." },
            },
          ],
          keyPoints: [
            "La Terre intercepte la fraction R² ÷ (4d²) ≈ 4,5 × 10⁻¹⁰ de la puissance du Soleil.",
            "Constante solaire C ≈ 1 360 W/m² ; puissance moyenne reçue par m² de surface terrestre : C ÷ 4 ≈ 340 W/m².",
            "Albédo = puissance renvoyée ÷ puissance reçue ; albédo terrestre moyen ≈ 0,30 ; puissance absorbée ≈ 240 W/m².",
            "Le sol émet dans l'infrarouge (vers 10 µm) une puissance qui augmente avec sa température.",
            "Effet de serre : l'atmosphère absorbe l'infrarouge du sol et en réémet une partie vers le sol (sans lui : environ -18 °C au lieu de 15 °C).",
            "Le sol reçoit du Soleil et de l'atmosphère des puissances du même ordre de grandeur.",
            "Équilibre dynamique : puissance reçue = puissance émise, température moyenne constante.",
          ],
          example: {
            statement: "La constante solaire vaut C = 1 361 W/m² et l'albédo terrestre moyen A = 0,30. a) Calculer la puissance solaire moyenne reçue par mètre carré de surface terrestre. b) Calculer la puissance moyenne absorbée par mètre carré. c) Sans effet de serre, la surface émettrait cette puissance absorbée. À l'aide de la loi de Stefan-Boltzmann, P/S = σT⁴ avec σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴, calculer la température correspondante et la comparer à la température moyenne réelle, 15 °C.",
            solution: [
              "a) Puissance moyenne reçue : C ÷ 4 = 1 361 ÷ 4 ≈ 340 W/m².",
              "b) Puissance absorbée : (1 - A) × C ÷ 4 = 0,70 × 340 ≈ 238 W/m².",
              "c) À l'équilibre sans effet de serre : σT⁴ = 238, donc T⁴ = 238 ÷ (5,67 × 10⁻⁸) ≈ 4,20 × 10⁹ K⁴.",
              "T = racine quatrième de 4,20 × 10⁹ : on prend deux fois la racine carrée, √(4,20 × 10⁹) ≈ 64 800, puis √64 800 ≈ 255 K, soit 255 - 273 = -18 °C.",
              "Réponse : 340 W/m² reçus, 238 W/m² absorbés, et une température d'environ -18 °C sans effet de serre, contre 15 °C en réalité : l'effet de serre naturel réchauffe la surface d'environ 33 °C.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Une surface reçoit 340 W/m² et en renvoie 102 W/m² vers l'espace : calculer son albédo. b) Un champ de neige fraîche (albédo 0,85) reçoit 200 W/m² : calculer la puissance renvoyée et la puissance absorbée. c) Même question pour l'océan (albédo 0,06). d) Expliquer pourquoi la fonte de la banquise accélère le réchauffement.",
              hint: "Albédo = puissance renvoyée ÷ puissance reçue. La puissance absorbée est la puissance reçue moins la puissance renvoyée.",
              solution: [
                "a) A = 102 ÷ 340 = 0,30.",
                "b) Renvoyée : 0,85 × 200 = 170 W/m². Absorbée : 200 - 170 = 30 W/m².",
                "c) Renvoyée : 0,06 × 200 = 12 W/m². Absorbée : 200 - 12 = 188 W/m², plus de six fois plus que la neige.",
                "d) Quand la glace fond, elle est remplacée par l'océan sombre qui absorbe beaucoup plus d'énergie : la région se réchauffe davantage, ce qui fait fondre encore plus de glace. C'est une rétroaction positive.",
              ],
            },
            {
              level: 2,
              statement: "Données : puissance rayonnée par le Soleil P = 3,8 × 10²⁶ W ; rayon de la Terre R = 6 370 km = 6,37 × 10⁶ m ; distance Terre-Soleil d = 1,50 × 10¹¹ m. a) Calculer la fraction de la puissance solaire interceptée par la Terre. b) En déduire la puissance interceptée par la Terre. c) Calculer l'aire de la surface terrestre, puis la puissance moyenne reçue par mètre carré. Comparer à la constante solaire.",
              hint: "La Terre intercepte la puissance qui traverse un disque de surface πR², alors que la puissance du Soleil se répartit sur une sphère de surface 4πd².",
              solution: [
                "a) Fraction : R² ÷ (4d²) = (6,37 × 10⁶)² ÷ (4 × (1,50 × 10¹¹)²) = 4,06 × 10¹³ ÷ 9,00 × 10²² ≈ 4,5 × 10⁻¹⁰.",
                "b) Puissance interceptée : 3,8 × 10²⁶ × 4,5 × 10⁻¹⁰ ≈ 1,7 × 10¹⁷ W.",
                "c) Aire de la Terre : 4πR² = 4 × π × 4,06 × 10¹³ ≈ 5,1 × 10¹⁴ m². Puissance moyenne : 1,7 × 10¹⁷ ÷ 5,1 × 10¹⁴ ≈ 330 W/m² (340 W/m² avec des valeurs plus précises).",
                "Cette valeur est environ le quart de la constante solaire (1 360 ÷ 4 = 340 W/m²) : la puissance interceptée par un disque se répartit sur une sphère dont l'aire est quatre fois plus grande.",
                "Résultat : fraction de 4,5 × 10⁻¹⁰, puissance de 1,7 × 10¹⁷ W, soit environ un quart de la constante solaire par mètre carré.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Le document présente un bilan moyen des échanges d'énergie du sol terrestre (valeurs arrondies, en W/m²). Le sol reçoit : 160 du rayonnement solaire et 340 du rayonnement infrarouge de l'atmosphère. Le sol perd : 400 par rayonnement infrarouge, 20 par convection (air chaud qui s'élève) et 80 par évaporation de l'eau. a) Montrer que la température moyenne du sol est constante. Comment qualifier cet équilibre ? b) Comparer les deux contributions reçues par le sol. c) L'augmentation de la concentration en CO₂ accroît de 4 W/m² le rayonnement que l'atmosphère renvoie vers le sol. Décrire l'évolution de la température du sol. d) Avec la loi de Stefan-Boltzmann (P/S = σT⁴, σ = 5,67 × 10⁻⁸ W·m⁻²·K⁻⁴), vérifier qu'un sol à 288 K émet environ 390 W/m², puis estimer la hausse de température nécessaire pour qu'il émette 4 W/m² de plus, toutes choses égales par ailleurs.",
              hint: "Additionnez séparément ce que le sol reçoit et ce qu'il perd. Pour d, calculez T⁴ = 394 ÷ σ, puis prenez deux fois la racine carrée.",
              solution: [
                "a) Reçu : 160 + 340 = 500 W/m². Perdu : 400 + 20 + 80 = 500 W/m². Le sol reçoit autant qu'il perd : sa température moyenne reste constante. C'est un équilibre dynamique, car les échanges continuent en permanence tout en se compensant.",
                "b) Le sol reçoit plus de l'atmosphère (340 W/m²) que du Soleil (160 W/m²) ; ces deux contributions sont du même ordre de grandeur. C'est la manifestation de l'effet de serre.",
                "c) Le sol reçoit désormais 504 W/m² et ne perd encore que 500 W/m² : il gagne de l'énergie et sa température augmente. Il émet alors davantage, jusqu'à ce que les pertes compensent de nouveau les gains : un nouvel équilibre s'établit à une température plus élevée.",
                "d) 288⁴ ≈ 6,88 × 10⁹, donc σT⁴ ≈ 5,67 × 10⁻⁸ × 6,88 × 10⁹ ≈ 390 W/m². Pour 394 W/m² : T⁴ = 394 ÷ (5,67 × 10⁻⁸) ≈ 6,95 × 10⁹, d'où T ≈ 288,7 K. La hausse serait d'environ 0,7 °C.",
                "Remarque : ce calcul simplifié ignore les rétroactions (vapeur d'eau, glaces, nuages), qui amplifient fortement le réchauffement réel. Conclusion : un léger renforcement de l'effet de serre déplace l'équilibre vers une température plus élevée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion du bilan radiatif à sa définition.",
            pairs: [
              { left: "Constante solaire", right: "Puissance reçue par 1 m² perpendiculaire aux rayons, au sommet de l'atmosphère (environ 1 360 W)" },
              { left: "C ÷ 4", right: "Puissance solaire moyenne reçue par mètre carré de surface terrestre" },
              { left: "Albédo", right: "Rapport entre la puissance renvoyée vers l'espace et la puissance reçue" },
              { left: "Rayonnement du sol", right: "Rayonnement infrarouge, vers 10 µm, d'autant plus intense que le sol est chaud" },
              { left: "Effet de serre", right: "Absorption de l'infrarouge du sol par l'atmosphère, qui en réémet une partie vers le sol" },
              { left: "Équilibre dynamique", right: "Le sol reçoit autant de puissance qu'il en perd : sa température moyenne est constante" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi la puissance solaire moyenne reçue par mètre carré de surface terrestre vaut-elle le quart de la constante solaire ?",
              options: ["Parce que l'atmosphère absorbe en moyenne les trois quarts du rayonnement solaire avant qu'il n'atteigne le sol", "Parce que la puissance captée par un disque se répartit sur une sphère d'aire 4 fois plus grande", "Parce que l'albédo terrestre vaut 0,25", "Parce que la Terre est éclairée six heures par jour en moyenne"],
              answer: 1,
              why: "La Terre intercepte la puissance qui traverse un disque d'aire πR², répartie en moyenne sur toute sa surface d'aire 4πR².",
            },
            {
              q: "Une surface reçoit 200 W/m² et en renvoie 60 W/m². Son albédo vaut :",
              options: ["0,70", "140", "0,30", "3,3"],
              answer: 2,
              why: "Albédo = 60 ÷ 200 = 0,30. Un albédo est toujours compris entre 0 et 1.",
            },
            {
              q: "Dans quel domaine se situe principalement le rayonnement émis par le sol terrestre ?",
              options: ["L'infrarouge", "L'ultraviolet", "Le visible", "Les rayons X"],
              answer: 0,
              why: "Vers 288 K, la loi de Wien donne λmax ≈ 10 µm, dans l'infrarouge.",
            },
            {
              q: "Que se passe-t-il si le sol reçoit plus de puissance qu'il n'en perd ?",
              options: ["Sa température reste constante grâce à l'effet de serre", "Il se refroidit, car il rayonne plus", "Son albédo devient nul", "Il se réchauffe jusqu'à un nouvel équilibre"],
              answer: 3,
              why: "Le sol accumule de l'énergie et se réchauffe ; il émet alors davantage, jusqu'à ce que pertes et gains se compensent de nouveau.",
            },
            {
              q: "Quelle affirmation sur l'effet de serre est exacte ?",
              options: ["Il est entièrement dû aux activités humaines", "Les gaz à effet de serre absorbent surtout la lumière visible du Soleil", "Sans lui, la température moyenne du sol serait d'environ -18 °C", "Il renvoie vers l'espace la lumière du Soleil"],
              answer: 2,
              why: "L'effet de serre naturel porte la température moyenne de -18 °C environ à 15 °C. Les activités humaines le renforcent ; les gaz à effet de serre absorbent surtout l'infrarouge émis par le sol.",
            },
          ],
          trap: "Croire que les gaz à effet de serre « piègent » ou absorbent la lumière du Soleil : l'atmosphère est presque transparente au visible ; ces gaz absorbent le rayonnement infrarouge émis par le sol et en réémettent une partie vers lui.",
          method: "Pour un bilan radiatif, faites un schéma avec trois étages (espace, atmosphère, sol) et une flèche par échange, avec sa valeur. Pour chaque étage, additionnez les flèches entrantes et les flèches sortantes : si les deux sommes sont égales, l'étage est à l'équilibre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'photosynthese',
          title: 'La photosynthèse : convertir l’énergie solaire',
          minutes: 30,
          objectives: [
            "Expliquer que la photosynthèse convertit une partie de l'énergie solaire en énergie chimique stockée dans la matière organique.",
            "Comparer le spectre d'absorption des pigments chlorophylliens et le spectre d'action de la photosynthèse.",
            "Recenser, extraire et organiser des informations pour mesurer l'importance planétaire de la photosynthèse et son faible rendement.",
            "Expliquer le devenir de la matière organique : respiration, fermentation et formation des combustibles fossiles.",
          ],
          course: [
            {
              heading: "Une conversion d'énergie lumineuse en énergie chimique",
              paragraphs: [
                "Sur Terre, une partie du rayonnement solaire est absorbée par les organismes chlorophylliens : végétaux, algues et cyanobactéries. Ils l'utilisent pour réaliser la photosynthèse, dans les chloroplastes des cellules des feuilles chez les plantes. À partir de matière minérale (dioxyde de carbone de l'air, eau et sels minéraux du sol), ils produisent de la matière organique, d'abord des glucides comme le glucose, et libèrent du dioxygène.",
                "Le bilan s'écrit : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, en présence de lumière. L'énergie lumineuse absorbée est convertie en énergie chimique, stockée dans les molécules organiques. Par exemple, la combustion d'une mole de glucose libère environ 2 800 kJ : c'est l'énergie que la photosynthèse a dû stocker pour la produire.",
                "Avec les glucides et les sels minéraux (azote, phosphore, potassium...), la plante fabrique toutes ses molécules : cellulose, amidon, protéines, lipides. Cette matière, la biomasse, constitue la nourriture des animaux et des autres êtres vivants : la photosynthèse est la porte d'entrée de la matière et de l'énergie dans la biosphère.",
              ],
              box: { label: "Formule", text: "Bilan de la photosynthèse : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (énergie lumineuse). Matière minérale + énergie lumineuse → matière organique (énergie chimique) + dioxygène." },
            },
            {
              heading: "Spectre d'absorption et spectre d'action",
              paragraphs: [
                "Les feuilles contiennent des pigments, surtout les chlorophylles a et b, accompagnées de caroténoïdes. Le spectre d'absorption d'une solution de chlorophylle montre deux bandes : une forte absorption dans le bleu-violet (environ 400 à 500 nm) et dans le rouge (environ 600 à 700 nm), et une faible absorption dans le vert (environ 500 à 570 nm). La lumière verte, peu absorbée, est diffusée ou transmise : c'est pourquoi les feuilles nous paraissent vertes.",
                "Le spectre d'action mesure l'intensité de la photosynthèse (par exemple le dégagement de dioxygène) en fonction de la longueur d'onde de la lumière reçue. Il a la même allure que le spectre d'absorption : la photosynthèse est intense dans le bleu et le rouge, faible dans le vert. On en déduit que ce sont les radiations absorbées par les pigments qui sont utilisées. En 1882, Theodor Engelmann l'a montré en éclairant une algue filamenteuse avec une lumière décomposée par un prisme : des bactéries attirées par le dioxygène se rassemblaient surtout dans les zones éclairées en bleu et en rouge.",
              ],
              box: { label: "À retenir", text: "Les pigments chlorophylliens absorbent surtout le bleu et le rouge ; le spectre d'action de la photosynthèse a la même allure : les radiations absorbées sont celles qui sont utilisées. Le vert, peu absorbé, donne leur couleur aux feuilles." },
            },
            {
              heading: "Un rendement faible, une importance planétaire",
              paragraphs: [
                "À l'échelle de la planète, les organismes chlorophylliens n'utilisent qu'environ 0,1 % de la puissance solaire reçue par la Terre pour réaliser la photosynthèse. Plusieurs raisons l'expliquent : seule une partie du spectre solaire est utilisable par les pigments ; une partie de la lumière est réfléchie ou traverse la feuille ; de vastes surfaces portent peu de végétaux (déserts, glaces, régions froides en hiver, océans pauvres en sels minéraux) ; enfin, la plante consomme elle-même une partie de ses produits pour respirer. Même une culture bien alimentée en eau ne convertit en biomasse que de l'ordre de 1 % de l'énergie lumineuse qu'elle reçoit.",
                "Pourtant, la photosynthèse a une importance planétaire : elle produit chaque année environ 100 milliards de tonnes de carbone organique, à peu près pour moitié sur les continents et pour moitié dans les océans. Elle fournit la nourriture de presque tous les écosystèmes, le bois, les fibres, et elle est à l'origine du dioxygène de l'atmosphère.",
              ],
            },
            {
              heading: "Le devenir de la matière organique",
              paragraphs: [
                "La matière organique produite peut ensuite être transformée. Par la respiration, les cellules (des plantes comme des animaux et des décomposeurs) oxydent les molécules organiques par le dioxygène : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. Cette réaction libère l'énergie stockée, utilisée par les êtres vivants pour leurs activités, et rend à l'atmosphère le CO₂ fixé. En l'absence de dioxygène, certaines cellules réalisent une fermentation, qui libère moins d'énergie : par exemple, la fermentation alcoolique des levures, C₆H₁₂O₆ → 2 C₂H₆O + 2 CO₂.",
                "À l'échelle des temps géologiques, une petite partie de la matière organique échappe à la décomposition : dans des milieux pauvres en dioxygène, elle s'accumule dans les sédiments, puis, enfouie et soumise à l'augmentation de la température et de la pression pendant des millions d'années, elle se transforme en combustibles fossiles. Le charbon provient surtout de végétaux continentaux, le pétrole et le gaz naturel surtout du plancton marin. Brûler ces combustibles, c'est libérer une énergie solaire stockée par la photosynthèse il y a des millions d'années.",
              ],
              box: { label: "À retenir", text: "Photosynthèse : énergie lumineuse → énergie chimique. Respiration et fermentation : libèrent cette énergie pour les êtres vivants. Combustibles fossiles : matière organique enfouie et transformée en millions d'années, une énergie solaire « fossile »." },
            },
          ],
          keyPoints: [
            "Photosynthèse : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, grâce à l'énergie lumineuse, dans les chloroplastes.",
            "L'énergie lumineuse est convertie en énergie chimique stockée dans la matière organique (biomasse).",
            "Chlorophylles : absorption forte dans le bleu et le rouge, faible dans le vert, d'où la couleur des feuilles.",
            "Le spectre d'action a la même allure que le spectre d'absorption : les radiations absorbées sont utilisées.",
            "Environ 0,1 % de la puissance solaire reçue par la Terre est utilisé par la photosynthèse.",
            "Respiration et fermentation libèrent l'énergie de la matière organique.",
            "Combustibles fossiles : matière organique enfouie dans des milieux pauvres en O₂, transformée en millions d'années.",
          ],
          example: {
            statement: "Une plante produit 90 g de glucose par photosynthèse. a) Calculer la quantité de matière de glucose produite. b) Calculer les masses de dioxyde de carbone consommé et de dioxygène libéré. c) Calculer l'énergie chimique stockée. Données : M(C₆H₁₂O₆) = 180 g/mol ; M(CO₂) = 44 g/mol ; M(O₂) = 32 g/mol ; M(H₂O) = 18 g/mol ; énergie libérée par l'oxydation complète d'une mole de glucose : 2 800 kJ.",
            solution: [
              "a) n(glucose) = m ÷ M = 90 ÷ 180 = 0,50 mol.",
              "b) D'après l'équation 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂, il faut 6 mol de CO₂ par mole de glucose : n(CO₂) = 6 × 0,50 = 3,0 mol, soit m(CO₂) = 3,0 × 44 = 132 g.",
              "De même, n(O₂) = 3,0 mol, soit m(O₂) = 3,0 × 32 = 96 g.",
              "Vérification par la conservation de la masse : 132 g de CO₂ + 54 g d'eau (3,0 × 18) = 186 g de réactifs, et 90 g + 96 g = 186 g de produits.",
              "c) Énergie stockée : 0,50 × 2 800 = 1 400 kJ. Réponse : 0,50 mol de glucose, 132 g de CO₂ consommé, 96 g de O₂ libéré et 1 400 kJ d'énergie chimique stockée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Écrire l'équation bilan de la photosynthèse et nommer les réactifs et les produits. b) D'où provient l'énergie nécessaire à cette réaction ? Sous quelle forme est-elle stockée ? c) Écrire l'équation de la respiration et la comparer à celle de la photosynthèse.",
              hint: "La photosynthèse fabrique du glucose à partir de matière minérale ; la respiration fait l'inverse en libérant de l'énergie.",
              solution: [
                "a) 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂. Réactifs : dioxyde de carbone et eau. Produits : glucose et dioxygène.",
                "b) L'énergie provient de la lumière du Soleil, absorbée par les pigments chlorophylliens. Elle est stockée sous forme d'énergie chimique dans les molécules organiques, comme le glucose.",
                "c) Respiration : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. C'est le bilan inverse : elle consomme la matière organique et le dioxygène, rejette CO₂ et eau, et libère l'énergie stockée, utilisable par les cellules.",
              ],
            },
            {
              level: 2,
              statement: "On étudie un extrait de chlorophylle et une plante aquatique (données simplifiées, fictives). Absorbance de l'extrait : 0,90 à 430 nm (bleu) ; 0,05 à 550 nm (vert) ; 0,75 à 660 nm (rouge). Volume de dioxygène dégagé par la plante en 10 minutes sous une même puissance lumineuse : 4,5 mL en lumière bleue ; 0,4 mL en lumière verte ; 4,0 mL en lumière rouge. a) Quelles radiations la chlorophylle absorbe-t-elle le plus ? b) Comparer les deux séries de mesures et conclure. c) Expliquer la couleur des feuilles. d) Un jardinier éclaire ses plantes d'intérieur avec une lampe verte : est-ce un bon choix ?",
              hint: "Le volume de dioxygène dégagé mesure l'intensité de la photosynthèse : comparez-le, longueur d'onde par longueur d'onde, à l'absorbance.",
              solution: [
                "a) La chlorophylle absorbe surtout le bleu (absorbance 0,90) et le rouge (0,75) ; elle absorbe très peu le vert (0,05).",
                "b) Le dégagement de dioxygène est fort en lumière bleue et rouge, très faible en lumière verte : il varie comme l'absorbance. La photosynthèse utilise donc les radiations absorbées par la chlorophylle.",
                "c) La lumière verte, peu absorbée, est diffusée par la feuille et parvient à notre œil : la feuille paraît verte.",
                "d) Non : la lumière verte est peu absorbée, la photosynthèse serait très faible. Il vaut mieux une lumière riche en bleu et en rouge.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 (données fictives) : un champ de blé de 1 ha (10 000 m²) reçoit, pendant les 120 jours de sa croissance, une puissance lumineuse moyenne de 150 W/m². Il produit 15 tonnes de matière sèche ; 1 g de matière sèche végétale contient une énergie chimique d'environ 17 kJ. Document 2 : à l'échelle de la planète, la photosynthèse n'utilise qu'environ 0,1 % de la puissance solaire reçue par la Terre. Document 3 : le charbon s'est formé à partir de végétaux accumulés dans des marécages, il y a des centaines de millions d'années. Donnée : 1 jour = 86 400 s. a) Calculer l'énergie lumineuse reçue par le champ. b) Calculer l'énergie stockée dans la biomasse et le rendement de la photosynthèse. c) Proposer des raisons pour lesquelles le rendement planétaire est encore bien plus faible. d) Expliquer en quoi l'énergie libérée par la combustion du charbon est d'origine solaire.",
              hint: "Énergie (J) = puissance (W) × durée (s). Le rendement est le rapport énergie stockée ÷ énergie reçue. Convertissez les tonnes en grammes.",
              solution: [
                "a) Puissance reçue par le champ : 150 × 10 000 = 1,5 × 10⁶ W. Durée : 120 × 86 400 ≈ 1,04 × 10⁷ s. Énergie reçue : 1,5 × 10⁶ × 1,04 × 10⁷ ≈ 1,56 × 10¹³ J.",
                "b) 15 t = 1,5 × 10⁷ g. Énergie stockée : 1,5 × 10⁷ × 17 = 2,55 × 10⁸ kJ = 2,55 × 10¹¹ J. Rendement : 2,55 × 10¹¹ ÷ 1,56 × 10¹³ ≈ 0,016, soit environ 1,6 %.",
                "c) À l'échelle de la planète, une grande partie de la surface est peu ou pas couverte de végétaux : océans pauvres en sels minéraux, déserts, glaces, régions froides en hiver. De plus, une partie du rayonnement est réfléchie (albédo) ou absorbée par l'atmosphère, et les plantes consomment une partie de leur production en respirant.",
                "d) Le charbon provient de végétaux qui ont stocké de l'énergie lumineuse sous forme chimique par photosynthèse. Enfouie et transformée sans être décomposée, cette matière a conservé son énergie : la brûler libère une énergie solaire captée il y a des centaines de millions d'années.",
                "Conclusion : la photosynthèse a un faible rendement (environ 1,6 % pour ce champ, 0,1 % à l'échelle planétaire) mais elle est la source de l'énergie de la biosphère et des combustibles fossiles.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le trajet de l'énergie solaire jusqu'à la combustion du charbon.",
            items: [
              "Le Soleil émet de la lumière",
              "Les pigments chlorophylliens d'une plante absorbent surtout le bleu et le rouge",
              "La plante produit du glucose et rejette du dioxygène",
              "Après la mort de la plante, sa matière organique est enfouie dans des sédiments pauvres en dioxygène",
              "Pendant des millions d'années, cette matière se transforme en charbon",
              "La combustion du charbon libère de l'énergie et du dioxyde de carbone",
            ],
          },
          quiz: [
            {
              q: "Quelle conversion d'énergie la photosynthèse réalise-t-elle ?",
              options: ["Énergie chimique en énergie lumineuse", "Énergie lumineuse en énergie chimique", "Énergie thermique en énergie électrique"],
              answer: 1,
              why: "L'énergie lumineuse absorbée par les pigments est stockée sous forme chimique dans les molécules organiques.",
            },
            {
              q: "Pourquoi les feuilles sont-elles vertes ?",
              options: ["Parce que la chlorophylle absorbe peu le vert, qui est diffusé", "Parce que la chlorophylle absorbe surtout la lumière verte", "Parce que la photosynthèse produit un gaz vert", "Parce qu'elles émettent la nuit la lumière verte accumulée pendant la journée"],
              answer: 0,
              why: "La chlorophylle absorbe surtout le bleu et le rouge ; le vert, peu absorbé, est renvoyé vers notre œil.",
            },
            {
              q: "Quelle part de la puissance solaire reçue par la Terre est utilisée par la photosynthèse ?",
              options: ["Environ 25 à 30 %", "Environ 50 %", "Environ 10 %", "Environ 0,1 %"],
              answer: 3,
              why: "À l'échelle de la planète, la photosynthèse n'utilise qu'environ 0,1 % de la puissance solaire reçue.",
            },
            {
              q: "Que montre la ressemblance entre le spectre d'absorption de la chlorophylle et le spectre d'action de la photosynthèse ?",
              options: ["Que la photosynthèse utilise surtout la lumière verte", "Que la plante réémet sous forme de lumière verte toute l'énergie lumineuse qu'elle absorbe", "Que les radiations absorbées par les pigments sont celles qui sont utilisées"],
              answer: 2,
              why: "La photosynthèse est intense pour les longueurs d'onde fortement absorbées (bleu, rouge) et faible pour le vert, peu absorbé.",
            },
            {
              q: "Dans quelles conditions la matière organique peut-elle devenir un combustible fossile ?",
              options: ["Exposée à l'air libre et au soleil pendant quelques années, jusqu'à ce qu'elle sèche complètement", "Enfouie dans un milieu pauvre en dioxygène, puis transformée pendant des millions d'années", "Consommée par des décomposeurs", "Brûlée lors d'un incendie de forêt"],
              answer: 1,
              why: "Seule la matière qui échappe à la décomposition, dans un milieu pauvre en dioxygène, puis subit enfouissement, chaleur et pression pendant des millions d'années, devient charbon, pétrole ou gaz.",
            },
          ],
          trap: "Croire que la plante tire sa matière du sol : l'essentiel de sa masse sèche vient du carbone du CO₂ de l'air, fixé par la photosynthèse ; le sol ne fournit que l'eau et les sels minéraux.",
          method: "Pour interpréter deux spectres, comparez-les longueur d'onde par longueur d'onde : relevez les maximums et les minimums de chacun, puis rédigez une phrase du type « là où l'absorption est forte, la photosynthèse est forte ; là où elle est faible, la photosynthèse est faible ; donc... ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'bilan-thermique-corps',
          title: 'Le bilan thermique du corps humain',
          minutes: 30,
          objectives: [
            "Expliquer que la température du corps reste stable parce que l'énergie qu'il libère est compensée par l'énergie qu'il perd.",
            "Identifier les transferts thermiques entre le corps et son environnement : conduction, convection, rayonnement, évaporation.",
            "Relier l'énergie libérée par le corps à la respiration cellulaire et effectuer un bilan quantitatif d'énergie ou de puissance.",
          ],
          course: [
            {
              heading: "Un corps à température constante",
              paragraphs: [
                "La température interne du corps humain reste voisine de 37 °C, que l'air soit froid ou chaud : l'être humain est homéotherme. Cette stabilité ne signifie pas que le corps n'échange pas d'énergie : il en libère en permanence et en perd en permanence vers son environnement. Sa température reste stable parce que l'énergie qu'il libère est compensée par l'énergie qu'il perd.",
                "Au repos, le corps humain dissipe une puissance de l'ordre de 100 W, comparable à celle d'une ancienne ampoule à incandescence. Sur une journée, cela représente E = P × Δt = 100 × 86 400 ≈ 8,6 × 10⁶ J, soit environ 8,6 MJ (environ 2 000 kcal, avec 1 kcal = 4,18 kJ). Lors d'un effort physique intense, la puissance libérée peut atteindre plusieurs centaines de watts.",
              ],
              box: { label: "Propriété", text: "Température du corps constante ⇔ puissance libérée par l'organisme = puissance perdue vers l'environnement. Au repos, cette puissance est de l'ordre de 100 W." },
            },
            {
              heading: "La respiration cellulaire, source de l'énergie",
              paragraphs: [
                "L'énergie libérée par le corps provient de la respiration cellulaire : dans les cellules, notamment dans les mitochondries, les nutriments issus de la digestion (glucose, acides gras, acides aminés) sont oxydés par le dioxygène apporté par la respiration pulmonaire. Pour le glucose : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O. L'énergie chimique de ces nutriments vient, en dernier lieu, de la photosynthèse.",
                "Une partie de l'énergie libérée sert au fonctionnement des cellules (contraction musculaire, synthèse de molécules, transport), mais elle finit presque entièrement sous forme de chaleur. Lors d'un effort, les muscles ne transforment en travail mécanique qu'environ 20 à 25 % de l'énergie consommée : le reste chauffe le corps. Les aliments fournissent environ 17 kJ par gramme de glucides ou de protides, et environ 38 kJ par gramme de lipides.",
              ],
              box: { label: "Repère", text: "Valeurs énergétiques moyennes : glucides 17 kJ/g, protides 17 kJ/g, lipides 38 kJ/g. Énergie (J) = puissance (W) × durée (s)." },
            },
            {
              heading: "Quatre transferts thermiques avec l'environnement",
              paragraphs: [
                "La conduction est un transfert d'énergie par contact direct, du corps le plus chaud vers le plus froid, sans déplacement de matière : on se refroidit en s'asseyant sur un banc de pierre froide. L'eau conduit beaucoup mieux que l'air, ce qui explique le refroidissement rapide dans une eau froide. La convection est un transfert par un fluide en mouvement : l'air (ou l'eau) réchauffé au contact de la peau est remplacé par de l'air plus frais. Le vent l'accentue.",
                "Le rayonnement est l'émission d'ondes électromagnétiques : la peau, vers 34 °C, émet dans l'infrarouge, vers 9 à 10 µm, et reçoit aussi le rayonnement des objets environnants et du Soleil. Ce transfert ne nécessite aucun milieu matériel. L'évaporation de la sueur (et de l'eau dans les poumons) absorbe beaucoup d'énergie : environ 2,4 MJ par kilogramme d'eau évaporée à la température de la peau.",
                "La conduction, la convection et le rayonnement transfèrent l'énergie du plus chaud vers le plus froid : quand l'air et les objets environnants sont plus chauds que la peau, ces transferts apportent de l'énergie au corps au lieu de lui en retirer. L'évaporation reste alors le seul moyen de perdre de l'énergie ; dans un air très humide, elle devient difficile, ce qui rend les canicules humides particulièrement dangereuses.",
              ],
              box: { label: "À retenir", text: "Conduction : contact. Convection : fluide en mouvement. Rayonnement : ondes infrarouges, même dans le vide. Évaporation : la sueur qui s'évapore emporte environ 2,4 MJ par kg d'eau." },
            },
            {
              heading: "La thermorégulation",
              paragraphs: [
                "Le corps ajuste en permanence sa production et ses pertes d'énergie grâce à un centre de régulation situé dans le cerveau (l'hypothalamus). Quand il fait chaud ou pendant un effort, les vaisseaux sanguins de la peau se dilatent (vasodilatation : la peau rougit et perd plus d'énergie) et les glandes sudoripares produisent de la sueur. Quand il fait froid, les vaisseaux de la peau se resserrent (vasoconstriction), ce qui limite les pertes, et des frissons, contractions musculaires involontaires, produisent de la chaleur.",
                "Le comportement complète cette régulation : se couvrir de vêtements, qui emprisonnent une couche d'air isolante, chercher l'ombre, boire pour compenser l'eau perdue par la sueur. Si les pertes l'emportent durablement, la température interne baisse : en dessous de 35 °C, on parle d'hypothermie. Si l'énergie ne peut plus être évacuée, elle s'élève : c'est l'hyperthermie, comme lors d'un coup de chaleur.",
              ],
            },
          ],
          keyPoints: [
            "La température du corps (environ 37 °C) est stable car l'énergie libérée compense l'énergie perdue.",
            "Au repos, le corps dissipe une puissance de l'ordre de 100 W, soit environ 8,6 MJ par jour.",
            "L'énergie vient de la respiration cellulaire : oxydation des nutriments par le dioxygène.",
            "Quatre transferts : conduction (contact), convection (fluide en mouvement), rayonnement (infrarouge), évaporation (sueur).",
            "Quand l'air est plus chaud que la peau, seule l'évaporation permet encore de perdre de l'énergie.",
            "Thermorégulation : vasodilatation et sudation au chaud ; vasoconstriction et frissons au froid.",
          ],
          example: {
            statement: "Au repos, un adolescent dissipe une puissance moyenne de 100 W. a) Calculer l'énergie dissipée en une journée, en joules puis en kilocalories (1 kcal = 4,18 kJ). b) Quelle masse de glucides faudrait-il pour fournir cette énergie, si les glucides étaient la seule source d'énergie ? Donnée : 1 g de glucides fournit 17 kJ.",
            solution: [
              "a) Durée d'une journée : 24 × 3 600 = 86 400 s. Énergie : E = P × Δt = 100 × 86 400 = 8,64 × 10⁶ J = 8 640 kJ.",
              "En kilocalories : 8 640 ÷ 4,18 ≈ 2 070 kcal.",
              "b) Masse de glucides : 8 640 ÷ 17 ≈ 508 g.",
              "Ce besoin réel augmente avec l'activité physique et il est couvert en pratique par un mélange de glucides, de lipides et de protides.",
              "Réponse : environ 8,6 MJ, soit environ 2 070 kcal par jour, ce qui correspondrait à environ 510 g de glucides.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommer le transfert thermique principal dans chaque situation. a) On s'assoit sur un banc de pierre froide. b) Le vent souffle sur la peau mouillée d'un nageur sortant de l'eau (deux transferts). c) On sent la chaleur d'un feu de camp sur son visage, à deux mètres. d) Une caméra thermique filme une personne dans le noir. e) La sueur sèche sur le front d'un coureur.",
              hint: "Demandez-vous s'il y a contact direct, un fluide en mouvement, une émission d'ondes ou un changement d'état de l'eau.",
              solution: [
                "a) Conduction : contact direct entre la peau et la pierre, plus froide.",
                "b) Convection, car l'air en mouvement emporte l'énergie, et évaporation, car l'eau sur la peau s'évapore d'autant plus vite qu'il y a du vent.",
                "c) Rayonnement : l'énergie du feu arrive sous forme d'ondes électromagnétiques (infrarouge), sans contact.",
                "d) Rayonnement : la caméra détecte l'infrarouge émis par la peau.",
                "e) Évaporation : l'eau de la sueur passe à l'état gazeux en emportant de l'énergie.",
              ],
            },
            {
              level: 2,
              statement: "Pendant une course d'une heure, un coureur libère une puissance totale de 800 W. Ses muscles en transforment 20 % en travail mécanique ; le reste est de la chaleur à évacuer. a) Calculer la puissance thermique à évacuer. b) Calculer l'énergie thermique produite en une heure. c) Si toute cette énergie était évacuée par évaporation de la sueur, quelle masse d'eau le coureur perdrait-il ? Donnée : l'évaporation d'1 kg d'eau sur la peau absorbe 2,4 MJ. d) Quelle masse de glucides couvrirait la dépense totale de la course (17 kJ/g) ?",
              hint: "La chaleur représente 80 % de la puissance totale. Énergie = puissance × durée, avec la durée en secondes.",
              solution: [
                "a) Puissance thermique : 800 × 0,80 = 640 W.",
                "b) Énergie thermique : 640 × 3 600 ≈ 2,30 × 10⁶ J = 2,30 MJ.",
                "c) Masse d'eau évaporée : 2,30 ÷ 2,4 ≈ 0,96 kg, soit près d'un litre de sueur en une heure : il faut boire pendant l'effort.",
                "d) Dépense totale : 800 × 3 600 = 2,88 × 10⁶ J = 2 880 kJ. Masse de glucides : 2 880 ÷ 17 ≈ 170 g.",
                "Résultat : 640 W, 2,3 MJ, environ 1 kg de sueur et environ 170 g de glucides.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 : lors d'une canicule, l'air atteint 40 °C, alors que la température de la peau est d'environ 35 °C. Document 2 (données fictives) : au repos, à l'ombre, une personne libère 100 W et reçoit en plus 50 W de son environnement par convection et rayonnement. Document 3 : dans un air très humide, la sueur s'évapore mal et ruisselle sur la peau. Donnée : l'évaporation d'1 kg d'eau sur la peau absorbe 2,4 MJ. a) Expliquer pourquoi, dans ces conditions, la convection et le rayonnement réchauffent le corps au lieu de le refroidir. b) Quelle puissance la personne doit-elle évacuer par évaporation pour garder une température constante ? c) Calculer la masse d'eau à évaporer en une heure, puis en dix heures. d) À l'aide du document 3, expliquer pourquoi les canicules humides sont particulièrement dangereuses et proposer deux conseils.",
              hint: "Les transferts thermiques vont toujours du plus chaud vers le plus froid. Faites le bilan : tout ce que le corps libère et reçoit doit être évacué.",
              solution: [
                "a) La conduction, la convection et le rayonnement transfèrent l'énergie du corps le plus chaud vers le plus froid. L'air (40 °C) étant plus chaud que la peau (35 °C), l'énergie va de l'air vers le corps : ces transferts réchauffent le corps.",
                "b) Pour une température constante, la puissance perdue doit égaler la puissance libérée et reçue : 100 + 50 = 150 W, à évacuer par évaporation, seul transfert qui fonctionne encore.",
                "c) En une heure : E = 150 × 3 600 = 5,4 × 10⁵ J. Masse d'eau : 5,4 × 10⁵ ÷ 2,4 × 10⁶ = 0,225 kg, soit environ 0,23 L. En dix heures : environ 2,25 L.",
                "d) Si l'air est très humide, la sueur s'évapore mal : la puissance évacuée devient inférieure à 150 W, le corps accumule de l'énergie et sa température s'élève (risque de coup de chaleur). Conseils : boire régulièrement pour compenser l'eau perdue, éviter les efforts, rester dans un lieu frais, se rafraîchir la peau avec de l'eau.",
                "Conclusion : le bilan thermique impose que toute l'énergie libérée et reçue soit évacuée ; lors d'une canicule humide, ce bilan ne peut plus être équilibré.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mécanisme à sa description.",
            pairs: [
              { left: "Conduction", right: "Transfert d'énergie par contact direct avec un objet plus froid" },
              { left: "Convection", right: "Transfert par un fluide en mouvement, comme le vent sur la peau" },
              { left: "Rayonnement", right: "Émission d'ondes infrarouges, possible même dans le vide" },
              { left: "Évaporation", right: "La sueur qui passe à l'état gazeux emporte de l'énergie" },
              { left: "Vasoconstriction", right: "Resserrement des vaisseaux de la peau qui limite les pertes au froid" },
              { left: "Frissons", right: "Contractions musculaires involontaires qui produisent de la chaleur" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi la température du corps reste-t-elle constante ?",
              options: ["Parce que le corps n'échange pas d'énergie avec l'extérieur", "Parce que le corps ne produit de l'énergie qu'en cas d'effort", "Parce que l'énergie libérée par le corps compense celle qu'il perd", "Parce que la peau empêche tout transfert thermique entre l'intérieur du corps et l'air extérieur"],
              answer: 2,
              why: "Le corps libère et perd de l'énergie en permanence ; sa température est stable quand ces deux puissances sont égales.",
            },
            {
              q: "Quel est l'ordre de grandeur de la puissance dissipée par le corps humain au repos ?",
              options: ["10 kW", "100 W", "1 W", "1 MW"],
              answer: 1,
              why: "Au repos, le corps dissipe une puissance de l'ordre de 100 W, soit environ 8,6 MJ par jour.",
            },
            {
              q: "D'où provient l'énergie libérée par le corps humain ?",
              options: ["De l'oxydation des nutriments par la respiration cellulaire", "De la lumière du Soleil, absorbée par la peau et stockée dans les cellules sous forme de chaleur", "De la fusion nucléaire dans les cellules"],
              answer: 0,
              why: "Les cellules oxydent les nutriments (glucose, acides gras) par le dioxygène ; cette énergie chimique vient elle-même de la photosynthèse.",
            },
            {
              q: "Lorsque l'air est à 40 °C et la peau à 35 °C, quel transfert permet encore au corps de perdre de l'énergie ?",
              options: ["La convection de l'air autour du corps", "La conduction par contact avec les objets", "Le rayonnement", "L'évaporation de la sueur"],
              answer: 3,
              why: "Les trois autres transferts vont alors de l'air chaud vers le corps ; seule l'évaporation de la sueur retire encore de l'énergie au corps.",
            },
            {
              q: "Quelle réaction de l'organisme limite les pertes d'énergie quand il fait froid ?",
              options: ["La sudation abondante", "La vasodilatation des vaisseaux de la peau", "La vasoconstriction des vaisseaux de la peau", "L'arrêt de la respiration cellulaire pour économiser l'énergie"],
              answer: 2,
              why: "Les vaisseaux de la peau se resserrent : moins de sang chaud circule près de la surface et les pertes diminuent.",
            },
          ],
          trap: "Croire qu'un vêtement « produit » de la chaleur : il ne fait que limiter les pertes, en emprisonnant une couche d'air peu conductrice ; l'énergie vient toujours de la respiration cellulaire du corps.",
          method: "Pour un bilan thermique, écrivez deux colonnes : ce que le corps libère ou reçoit, ce qu'il perd. Exprimez tout en watts (ou tout en joules sur la même durée), puis écrivez l'égalité qui traduit une température constante : total reçu = total perdu.",
        },
      ],
    },
    /* ==================================================================== */
    /* THÈME 3 · LA TERRE, UN ASTRE SINGULIER                                 */
    /* ==================================================================== */
    {
      id: 'terre-astre',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'forme-de-la-terre',
          title: 'La forme de la Terre : d’Ératosthène à la géodésie',
          minutes: 35,
          objectives: [
            "Citer des observations qui ont permis, dès l'Antiquité, de conclure que la Terre est sphérique.",
            "Calculer la longueur du méridien terrestre par la méthode d'Ératosthène, puis le rayon de la Terre.",
            "Calculer une longueur par la méthode de triangulation utilisée par Delambre et Méchain.",
            "Repérer un point par sa latitude et sa longitude, calculer la longueur d'un arc de méridien et d'un arc de parallèle, et identifier le plus court chemin entre deux points.",
          ],
          course: [
            {
              heading: "Une Terre sphérique, dès l'Antiquité",
              paragraphs: [
                "Localement, la Terre paraît plane dans la plupart des expériences quotidiennes, parce que son rayon est immense par rapport à nos déplacements. Pourtant, dès l'Antiquité, des observations de natures différentes ont permis de conclure qu'elle est sphérique. Au IVe siècle avant notre ère, Aristote remarque que, lors des éclipses de Lune, l'ombre de la Terre sur la Lune a toujours un bord circulaire, quelle que soit la position de la Lune : seule une sphère projette toujours une ombre ronde.",
                "Aristote note aussi que les étoiles visibles changent quand on voyage du nord au sud : certaines étoiles, visibles depuis l'Égypte, ne le sont pas depuis la Grèce. Les marins observent qu'un navire qui s'éloigne disparaît à l'horizon par la coque avant le haut du mât. Contrairement à une idée reçue, les savants du Moyen Âge savaient que la Terre est ronde ; le premier tour du monde, l'expédition de Magellan (1519-1522), en a apporté une confirmation spectaculaire.",
              ],
            },
            {
              heading: "La méthode d'Ératosthène",
              paragraphs: [
                "Au IIIe siècle avant notre ère, Ératosthène, directeur de la bibliothèque d'Alexandrie, mesure la circonférence de la Terre. Il sait qu'à Syène (l'actuelle Assouan), le jour du solstice d'été à midi, le Soleil est à la verticale : ses rayons éclairent le fond des puits. Au même moment, à Alexandrie, située à peu près au nord de Syène, l'ombre d'un bâton vertical (un gnomon) indique que les rayons font avec la verticale un angle d'environ 7,2°, soit 1/50 de tour complet.",
                "Ératosthène suppose que les rayons du Soleil arrivent parallèles sur la Terre, car le Soleil est très éloigné. Les verticales de Syène et d'Alexandrie se coupent au centre de la Terre ; par une propriété des angles alternes-internes, l'angle au centre entre les deux villes est égal à l'angle mesuré à Alexandrie : 7,2°. La longueur d'un arc étant proportionnelle à son angle au centre, la circonférence vaut 50 fois la distance Syène-Alexandrie, estimée à 5 000 stades : 250 000 stades.",
                "La valeur du stade utilisé par Ératosthène est discutée par les historiens (entre environ 157 m et 185 m), d'où un résultat compris entre environ 39 000 et 46 000 km. Avec la distance actuelle d'environ 800 km entre les deux villes, la méthode donne 800 × 50 = 40 000 km. Sa force est d'obtenir la taille de la Terre par un raisonnement géométrique, sans en faire le tour. Ses hypothèses sont approximatives : les deux villes ne sont pas exactement sur le même méridien et Syène n'est pas exactement sur le tropique.",
              ],
              box: { label: "Formule", text: "Proportionnalité entre arc et angle au centre : L ÷ 360° = d ÷ α, donc L = d × 360 ÷ α (L : longueur du méridien, d : distance entre les deux lieux, α en degrés). Rayon : R = L ÷ (2π)." },
            },
            {
              heading: "La triangulation de Delambre et Méchain",
              paragraphs: [
                "En 1791, l'Assemblée nationale décide de définir une nouvelle unité de longueur universelle, le mètre, comme la dix-millionième partie de la distance du pôle Nord à l'équateur le long d'un méridien. Entre 1792 et 1798, les astronomes Jean-Baptiste Delambre et Pierre Méchain mesurent l'arc de méridien entre Dunkerque et Barcelone, long d'environ 1 000 km, par triangulation.",
                "La triangulation consiste à couvrir le terrain d'une chaîne de triangles dont les sommets sont des points visibles de loin (clochers, sommets de collines). On mesure très précisément une seule longueur au sol, la base (Delambre et Méchain en mesurent deux, d'environ 12 km, près de Melun et près de Perpignan), puis tous les angles des triangles avec un instrument de visée, le cercle répétiteur de Borda. La loi des sinus permet alors de calculer, de proche en proche, toutes les longueurs. Des observations astronomiques des étoiles donnent la différence de latitude entre les extrémités, d'où la longueur de tout le méridien.",
                "Leurs mesures conduisent en 1799 à la fabrication d'un mètre étalon en platine. Elles montrent aussi que la Terre n'est pas une sphère parfaite, ce que l'on savait déjà depuis le XVIIIe siècle (voir plus loin).",
              ],
              box: { label: "Propriété", text: "Loi des sinus : dans un triangle ABC, en notant a, b, c les longueurs des côtés opposés aux sommets A, B, C, on a a ÷ sin A = b ÷ sin B = c ÷ sin C. La somme des angles vaut 180°." },
            },
            {
              heading: "Latitude, longitude, arcs et grand cercle",
              paragraphs: [
                "On repère un point à la surface de la Terre par deux coordonnées angulaires. Sa latitude φ est l'angle entre le plan de l'équateur et la droite qui joint le centre de la Terre à ce point : de 0° à l'équateur à 90° aux pôles, nord ou sud. Sa longitude λ est l'angle entre le plan du méridien de Greenwich (méridien de référence) et le plan du méridien du point : de 0° à 180°, est ou ouest. Un méridien est un demi-cercle qui joint les deux pôles ; un parallèle est un cercle formé des points de même latitude.",
                "Tous les méridiens ont pour rayon le rayon R de la Terre. Un arc de méridien entre deux latitudes qui diffèrent de Δφ mesure L = 2πR × Δφ ÷ 360. Un parallèle de latitude φ est un cercle plus petit, de rayon r = R × cos φ : un arc de parallèle entre deux longitudes qui diffèrent de Δλ mesure L = 2πR cos φ × Δλ ÷ 360. Par exemple, avec R = 6 371 km, 1° de méridien mesure environ 111 km ; 1° de parallèle mesure 111 km à l'équateur mais environ 79 km à 45° de latitude.",
                "Un grand cercle est un cercle tracé sur la sphère et dont le centre est celui de la Terre : l'équateur et les cercles formés par deux méridiens opposés en sont. Le plus court chemin entre deux points de la surface de la Terre est l'arc du grand cercle qui les relie. Les parallèles, sauf l'équateur, ne sont pas des grands cercles : entre deux villes de même latitude, suivre le parallèle est plus long que suivre le grand cercle. C'est pourquoi les avions qui relient l'Europe à l'ouest de l'Amérique du Nord passent près du Groenland. Un système d'information géographique (SIG) permet de comparer ces chemins.",
              ],
              box: { label: "Formule", text: "Arc de méridien : L = 2πR × Δφ ÷ 360. Arc de parallèle à la latitude φ : L = 2πR × cos φ × Δλ ÷ 360 (angles en degrés). Plus court chemin : l'arc de grand cercle." },
            },
            {
              heading: "De la sphère à l'ellipsoïde : la géodésie",
              paragraphs: [
                "La géodésie est la science de la forme et des dimensions de la Terre. En 1687, Isaac Newton prédit que la Terre, en tournant sur elle-même, doit être légèrement aplatie aux pôles. Pour le vérifier, l'Académie des sciences envoie deux expéditions mesurer la longueur d'un degré de méridien : l'une au Pérou (1735-1744, avec Bouguer et La Condamine), l'autre en Laponie (1736-1737, avec Maupertuis). Le degré mesuré près du pôle est plus long qu'en France et à l'équateur : la Terre est bien aplatie aux pôles.",
                "On la modélise aujourd'hui par un ellipsoïde de rayon équatorial 6 378 km et de rayon polaire 6 357 km, soit une différence d'environ 21 km seulement. La forme réelle, définie par le niveau moyen des mers prolongé sous les continents, est appelée géoïde. Les satellites, notamment ceux des systèmes de positionnement comme le GPS ou Galileo, permettent désormais de mesurer positions et altitudes à quelques centimètres près.",
              ],
              box: { label: "Repère", text: "Longueur d'un méridien : environ 40 000 km (d'où la définition historique du mètre). Rayon moyen de la Terre : environ 6 371 km. Rayon équatorial 6 378 km, rayon polaire 6 357 km." },
            },
          ],
          keyPoints: [
            "Arguments antiques de la sphéricité : ombre circulaire de la Terre sur la Lune, étoiles visibles qui changent avec la latitude.",
            "Ératosthène : angle de 7,2° et distance Syène-Alexandrie, d'où L = d × 360 ÷ α, environ 40 000 km.",
            "Triangulation (Delambre et Méchain, 1792-1798) : une base mesurée, des angles, la loi des sinus a ÷ sin A = b ÷ sin B = c ÷ sin C.",
            "Latitude : angle depuis l'équateur ; longitude : angle depuis le méridien de Greenwich.",
            "Arc de méridien : 2πR × Δφ ÷ 360 ; arc de parallèle : 2πR cos φ × Δλ ÷ 360.",
            "Le plus court chemin entre deux points est l'arc de grand cercle (pas le parallèle, sauf à l'équateur).",
            "La Terre est un ellipsoïde légèrement aplati aux pôles (6 378 km contre 6 357 km).",
          ],
          example: {
            statement: "Le jour du solstice d'été à midi, le Soleil est à la verticale de Syène, tandis qu'à Alexandrie les rayons font un angle de 7,2° avec la verticale. Les deux villes sont distantes d'environ 800 km et l'on suppose qu'elles sont sur le même méridien. a) Justifier que l'angle au centre de la Terre entre les deux villes vaut 7,2°. b) Calculer la longueur du méridien terrestre. c) En déduire le rayon de la Terre.",
            solution: [
              "a) Les rayons du Soleil sont supposés parallèles. La verticale de Syène est parallèle aux rayons et passe par le centre de la Terre ; la verticale d'Alexandrie passe aussi par le centre. L'angle au centre et l'angle mesuré à Alexandrie sont alternes-internes, formés par deux droites parallèles et une sécante : ils sont égaux, 7,2°.",
              "b) La longueur d'un arc est proportionnelle à l'angle au centre : L ÷ 360 = 800 ÷ 7,2.",
              "L = 800 × 360 ÷ 7,2 = 800 × 50 = 40 000 km.",
              "c) Le méridien est un cercle de rayon R : L = 2πR, donc R = L ÷ (2π) = 40 000 ÷ (2π) ≈ 6 370 km.",
              "Réponse : le méridien mesure environ 40 000 km et le rayon de la Terre environ 6 370 km, très proche de la valeur actuelle (6 371 km en moyenne).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On prend R = 6 371 km, d'où 2πR ≈ 40 030 km. a) Les points A (42,0° N ; 2,0° E) et B (51,0° N ; 2,0° E) sont sur le même méridien : calculer la longueur de l'arc de méridien AB. b) Les points C (45,0° N ; 0,0°) et D (45,0° N ; 10,0° E) sont sur le même parallèle : calculer la longueur de l'arc de parallèle CD. c) Calculer la longueur d'un arc d'équateur entre les longitudes 0° et 10° E. Donnée : cos 45° ≈ 0,707.",
              hint: "Sur un même méridien, seule la latitude change ; sur un même parallèle, seule la longitude change, et le rayon du parallèle vaut R × cos φ.",
              solution: [
                "a) Δφ = 51,0 - 42,0 = 9,0°. L = 40 030 × 9,0 ÷ 360 ≈ 1 001 km, soit environ 1 000 km.",
                "b) Δλ = 10,0°. L = 40 030 × cos 45° × 10 ÷ 360 = 40 030 × 0,707 × 10 ÷ 360 ≈ 786 km.",
                "c) À l'équateur, cos 0° = 1 : L = 40 030 × 10 ÷ 360 ≈ 1 112 km.",
                "Résultat : environ 1 001 km, 786 km et 1 112 km. Le même écart de 10° de longitude représente une distance plus courte à 45° de latitude qu'à l'équateur.",
              ],
            },
            {
              level: 2,
              statement: "Lors d'une triangulation (données fictives), on a mesuré au sol une base AB = 12,0 km. Depuis A et depuis B, on vise un clocher C : on mesure l'angle en A, BAC = 62°, et l'angle en B, ABC = 54°. a) Calculer l'angle en C. b) À l'aide de la loi des sinus, calculer les distances AC et BC. Données : sin 54° ≈ 0,809 ; sin 62° ≈ 0,883 ; sin 64° ≈ 0,899.",
              hint: "La somme des angles d'un triangle vaut 180°. Dans la loi des sinus, chaque côté est associé à l'angle qui lui est opposé : AC est opposé à B, BC est opposé à A, AB est opposé à C.",
              solution: [
                "a) Angle en C : 180 - 62 - 54 = 64°.",
                "b) Loi des sinus : AB ÷ sin C = AC ÷ sin B = BC ÷ sin A.",
                "AC = AB × sin B ÷ sin C = 12,0 × 0,809 ÷ 0,899 ≈ 10,8 km.",
                "BC = AB × sin A ÷ sin C = 12,0 × 0,883 ÷ 0,899 ≈ 11,8 km.",
                "Résultat : l'angle en C vaut 64°, AC ≈ 10,8 km et BC ≈ 11,8 km. Ces côtés servent à leur tour de bases aux triangles suivants : c'est le principe de la chaîne de triangulation.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 : selon les auteurs anciens, Ératosthène mesure à Alexandrie un angle de 1/50 de cercle entre les rayons du Soleil et la verticale, au moment où le Soleil est au zénith à Syène, et il estime la distance entre les deux villes à 5 000 stades. Document 2 : la valeur du stade d'Ératosthène est incertaine ; deux valeurs souvent proposées sont 157,5 m et 185 m. Document 3 : la longueur actuelle d'un méridien est d'environ 40 008 km. Document 4 : deux villes fictives P et Q sont toutes deux à la latitude 48,9° N, et leurs longitudes diffèrent de 120° ; un SIG indique que le plus court chemin entre elles mesure environ 7 720 km. a) Calculer la circonférence de la Terre en stades selon Ératosthène. b) La convertir en kilomètres pour chacune des deux valeurs du stade, et calculer l'écart relatif à la valeur actuelle. c) Énoncer les hypothèses de la méthode. d) Calculer la longueur du trajet de P à Q le long du parallèle (2πR ≈ 40 030 km, cos 48,9° ≈ 0,657) et la comparer à la donnée du SIG. Expliquer la différence.",
              hint: "1/50 de cercle signifie que la circonférence vaut 50 fois la distance. Écart relatif = |valeur calculée - valeur de référence| ÷ valeur de référence. Pour d, utilisez la formule de l'arc de parallèle.",
              solution: [
                "a) La circonférence vaut 50 fois la distance : 50 × 5 000 = 250 000 stades.",
                "b) Avec 157,5 m : 250 000 × 157,5 = 39 375 000 m ≈ 39 400 km ; écart relatif : (40 008 - 39 375) ÷ 40 008 ≈ 1,6 %. Avec 185 m : 250 000 × 185 = 46 250 000 m ≈ 46 300 km ; écart relatif : (46 250 - 40 008) ÷ 40 008 ≈ 16 %. La précision attribuée à Ératosthène dépend donc beaucoup de la valeur du stade.",
                "c) Hypothèses : la Terre est sphérique ; les rayons du Soleil arrivent parallèles (Soleil très éloigné) ; Syène et Alexandrie sont sur le même méridien ; le Soleil est exactement au zénith à Syène ; la distance entre les villes est connue. Plusieurs ne sont qu'approximativement vérifiées.",
                "d) Arc de parallèle : L = 40 030 × 0,657 × 120 ÷ 360 ≈ 8 770 km. Le trajet le long du parallèle est plus long d'environ 1 050 km que le chemin indiqué par le SIG (7 720 km).",
                "Explication : le parallèle n'est pas un grand cercle (son centre n'est pas celui de la Terre) ; le plus court chemin est l'arc de grand cercle, qui s'incurve vers le pôle Nord. Conclusion : la méthode d'Ératosthène donne le bon ordre de grandeur de la Terre, et la géométrie de la sphère explique les trajets des avions.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ce que l'on sait de la forme de la Terre.",
            statements: [
              { text: "Au Moyen Âge, les savants européens croyaient que la Terre était plate.", true: false, why: "C'est une idée reçue : les savants du Moyen Âge, héritiers d'Aristote et de Ptolémée, savaient que la Terre est sphérique." },
              { text: "Ératosthène a estimé la circonférence de la Terre sans en faire le tour.", true: true, why: "Il a combiné un angle mesuré à Alexandrie et la distance Syène-Alexandrie, par un raisonnement de proportionnalité." },
              { text: "Entre deux villes de même latitude, le plus court chemin suit leur parallèle.", true: false, why: "Sauf à l'équateur, le parallèle n'est pas un grand cercle : le plus court chemin est l'arc de grand cercle, qui s'écarte vers le pôle." },
              { text: "La Terre est légèrement aplatie aux pôles.", true: true, why: "Le rayon polaire (6 357 km) est plus petit que le rayon équatorial (6 378 km), comme Newton l'avait prédit." },
              { text: "La longitude d'un point se mesure à partir de l'équateur.", true: false, why: "C'est la latitude qui se mesure à partir de l'équateur ; la longitude se mesure à partir du méridien de Greenwich." },
              { text: "Le mètre a été défini à l'origine à partir de la longueur du méridien terrestre.", true: true, why: "Le mètre était la dix-millionième partie de la distance du pôle Nord à l'équateur, d'où un méridien d'environ 40 000 km." },
              { text: "Un degré de longitude représente la même distance à toutes les latitudes.", true: false, why: "Le rayon d'un parallèle vaut R × cos φ : un degré de longitude mesure environ 111 km à l'équateur et de moins en moins vers les pôles." },
            ],
          },
          quiz: [
            {
              q: "Quel argument Aristote donne-t-il en faveur d'une Terre sphérique ?",
              options: ["Les photographies prises depuis les montagnes", "Le premier tour du monde par bateau", "La mesure de l'aplatissement des pôles par les satellites artificiels en orbite autour de la Terre", "L'ombre toujours circulaire de la Terre sur la Lune lors des éclipses"],
              answer: 3,
              why: "Lors d'une éclipse de Lune, l'ombre de la Terre a toujours un bord circulaire : seule une sphère donne cette ombre dans toutes les positions.",
            },
            {
              q: "Deux lieux d'un même méridien sont séparés de 400 km et l'angle entre les rayons solaires et la verticale diffère de 3,6° entre eux. La longueur du méridien est :",
              options: ["40 000 km", "1 440 km", "4 000 km", "144 000 km"],
              answer: 0,
              why: "L = d × 360 ÷ α = 400 × 360 ÷ 3,6 = 400 × 100 = 40 000 km.",
            },
            {
              q: "Dans la triangulation de Delambre et Méchain, qu'est-ce qui est mesuré directement au sol ?",
              options: ["Toutes les longueurs des côtés des triangles", "La longueur totale du méridien", "Une base, ainsi que les angles des triangles", "Uniquement les altitudes des clochers"],
              answer: 2,
              why: "On mesure une seule longueur (la base) et tous les angles ; la loi des sinus donne ensuite les autres longueurs de proche en proche.",
            },
            {
              q: "Quelle est la longueur d'un arc de parallèle de 10° de longitude à la latitude 60° (2πR ≈ 40 030 km, cos 60° = 0,5) ?",
              options: ["Environ 556 km", "Environ 1 112 km", "Environ 2 224 km"],
              answer: 0,
              why: "L = 40 030 × 0,5 × 10 ÷ 360 ≈ 556 km, deux fois moins qu'à l'équateur.",
            },
            {
              q: "Quel est le plus court chemin entre deux points de la surface terrestre ?",
              options: ["Le parallèle qui passe par le point le plus au nord", "Une ligne droite à travers la Terre, que l'on peut suivre en avion", "Le méridien qui passe par le premier point", "L'arc du grand cercle qui les relie"],
              answer: 3,
              why: "À la surface d'une sphère, le plus court chemin est l'arc du grand cercle, cercle dont le centre est celui de la Terre.",
            },
          ],
          trap: "Utiliser le rayon de la Terre R pour calculer un arc de parallèle : le parallèle de latitude φ a un rayon plus petit, R × cos φ. Seuls les méridiens et l'équateur ont pour rayon R.",
          method: "Pour tout calcul d'arc, écrivez d'abord la proportion « arc ÷ circonférence = angle ÷ 360° », puis identifiez la bonne circonférence : 2πR pour un méridien ou l'équateur, 2πR cos φ pour un parallèle. Vérifiez enfin l'ordre de grandeur : environ 111 km par degré de méridien.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'age-de-la-terre',
          title: 'L’histoire de l’âge de la Terre',
          minutes: 30,
          objectives: [
            "Identifier les arguments utilisés au cours de l'histoire pour estimer l'âge de la Terre : temps de refroidissement, temps de sédimentation, empilement des strates, évolution biologique, radioactivité.",
            "Interpréter des documents présentant des arguments historiques et identifier les théories impliquées dans la controverse scientifique de l'âge de la Terre.",
            "Connaître l'âge de la Terre aujourd'hui précisément déterminé, 4,57 milliards d'années, et le principe de sa mesure par la radioactivité.",
          ],
          course: [
            {
              heading: "Des chronologies fondées sur les textes aux premières expériences",
              paragraphs: [
                "Pendant longtemps, en Europe, l'âge de la Terre a été estimé à partir des textes religieux. En 1650, l'archevêque irlandais James Ussher, en additionnant les générations de la Bible, situe la création du monde en 4004 avant notre ère : la Terre aurait environ 6 000 ans.",
                "Au XVIIIe siècle, Buffon propose une approche expérimentale. Il suppose que la Terre était à l'origine une boule en fusion, qui s'est refroidie. Il chauffe des boulets de fer de tailles différentes et mesure leur temps de refroidissement, puis extrapole à une sphère de la taille de la Terre. Dans Les Époques de la nature (1778), il publie un âge d'environ 75 000 ans. Même si cette valeur est fausse, elle marque un tournant : l'âge de la Terre devient une question scientifique, abordée par l'expérience et le calcul.",
              ],
            },
            {
              heading: "Le temps des géologues : strates, sédimentation, évolution",
              paragraphs: [
                "Dès 1669, Nicolas Sténon énonce le principe de superposition : dans une série de couches sédimentaires non déformées, une couche est plus récente que celle qu'elle recouvre. L'empilement des strates est donc un enregistrement du temps. À la fin du XVIIIe siècle, James Hutton, puis au XIXe siècle Charles Lyell, défendent l'actualisme : les phénomènes géologiques du passé (érosion, sédimentation) étaient les mêmes qu'aujourd'hui et agissaient aussi lentement. Expliquer l'épaisseur des séries de roches demande alors des durées immenses.",
                "Au XIXe siècle, des géologues estiment l'âge de la Terre en divisant l'épaisseur totale des couches sédimentaires par une vitesse de sédimentation mesurée aujourd'hui. Les résultats, très variables, se chiffrent en dizaines à centaines de millions d'années. La méthode est imprécise : la vitesse de sédimentation varie selon les lieux et les époques, des couches ont été érodées et des périodes n'ont laissé aucun dépôt.",
                "L'évolution biologique apporte un autre argument. En 1859, dans De l'origine des espèces, Charles Darwin explique la diversité du vivant par la sélection naturelle, un processus très lent qui exige des durées considérables. Il estime d'ailleurs à environ 300 millions d'années le temps nécessaire à l'érosion d'une région du sud de l'Angleterre, le Weald.",
              ],
              box: { label: "Définition", text: "Principe de superposition (Sténon, 1669) : une couche sédimentaire non déformée est plus récente que celle qu'elle recouvre. Actualisme : les processus géologiques passés sont les mêmes que ceux observés aujourd'hui." },
            },
            {
              heading: "Kelvin et la controverse du refroidissement",
              paragraphs: [
                "En 1862, le physicien William Thomson, futur Lord Kelvin, reprend l'idée du refroidissement avec les outils de la physique. Il suppose la Terre initialement en fusion, refroidie par conduction de la chaleur. À partir de l'augmentation de la température avec la profondeur, mesurée dans les mines, il calcule un âge compris entre 20 et 400 millions d'années, puis, à la fin du siècle, entre 20 et 40 millions d'années.",
                "Ces valeurs, trop courtes pour la sélection naturelle et pour les géologues, ouvrent une controverse scientifique : physiciens et naturalistes s'opposent, chacun avec des méthodes rigoureuses mais des hypothèses différentes. Le prestige de la physique donne longtemps l'avantage à Kelvin. Son calcul était pourtant juste, mais ses hypothèses étaient incomplètes : il ignorait la chaleur produite par la radioactivité, alors inconnue, et il supposait un transfert de chaleur par conduction seule, alors que le manteau, animé de mouvements de convection, transporte la chaleur bien plus efficacement.",
              ],
              box: { label: "À retenir", text: "Une controverse scientifique oppose des explications fondées sur des arguments différents ; elle se résout par de nouvelles données. Un calcul juste donne un résultat faux si ses hypothèses sont fausses ou incomplètes." },
            },
            {
              heading: "La radioactivité tranche : 4,57 milliards d'années",
              paragraphs: [
                "En 1896, Henri Becquerel découvre la radioactivité ; en 1903, Pierre Curie et Albert Laborde montrent que le radium dégage de la chaleur. La Terre possède donc une source interne d'énergie qui ruine le calcul de Kelvin. Surtout, la radioactivité fournit un chronomètre : un noyau radioactif se désintègre en un noyau fils avec une demi-vie connue, et la proportion de noyaux pères restants dans une roche indique le temps écoulé depuis sa formation.",
                "Ernest Rutherford propose cette méthode dès les premières années du XXe siècle. En 1907, Bertram Boltwood date des minéraux d'uranium à plusieurs centaines de millions d'années, et jusqu'à environ 2 milliards d'années. En 1913, Arthur Holmes estime que la Terre a au moins 1,6 milliard d'années. En 1956, Clair Patterson, en analysant les isotopes du plomb de météorites, formées en même temps que la Terre, obtient 4,55 milliards d'années.",
                "L'âge de la Terre est aujourd'hui précisément déterminé : 4,57 milliards d'années (4,57 × 10⁹ ans), à partir des plus anciens matériaux du système solaire contenus dans les météorites. Sur Terre, les plus vieux minéraux connus, des zircons d'Australie, ont environ 4,4 milliards d'années, et les plus vieilles roches environ 4 milliards d'années : la surface terrestre, sans cesse remodelée, a effacé les toutes premières roches.",
              ],
              box: { label: "Repère", text: "Âge de la Terre : 4,57 × 10⁹ ans. Il est mesuré par radiochronologie, à l'aide de noyaux radioactifs de très longue demi-vie (par exemple l'uranium 238, de demi-vie 4,47 milliards d'années, qui donne du plomb 206)." },
            },
          ],
          keyPoints: [
            "Ussher (1650) : environ 6 000 ans, d'après les textes.",
            "Buffon (1778) : refroidissement de boulets de fer, environ 75 000 ans ; première approche expérimentale.",
            "Strates (Sténon, superposition), actualisme (Hutton, Lyell), sédimentation : des dizaines à centaines de millions d'années.",
            "Darwin (1859) : l'évolution par sélection naturelle exige des durées immenses.",
            "Kelvin (1862 à 1897) : refroidissement par conduction, 20 à 40 millions d'années ; il ignorait la radioactivité et la convection du manteau.",
            "Radioactivité : Boltwood (1907), Holmes (1913), Patterson (1956, météorites, 4,55 milliards d'années).",
            "Âge actuel de la Terre : 4,57 × 10⁹ ans.",
          ],
          example: {
            statement: "Un géologue du XIXe siècle estime l'épaisseur cumulée de toutes les couches sédimentaires connues à 100 km, et la vitesse moyenne de sédimentation actuelle à 0,3 mm par an (données fictives). a) Calculer l'âge qu'il en déduit. b) Citer trois raisons pour lesquelles cette estimation n'est pas fiable. c) Comparer avec l'âge actuellement admis.",
            solution: [
              "a) On convertit dans la même unité : 100 km = 100 000 m = 100 000 000 mm = 1 × 10⁸ mm.",
              "Durée : 1 × 10⁸ ÷ 0,3 ≈ 3,3 × 10⁸ ans, soit environ 330 millions d'années.",
              "b) La vitesse de sédimentation n'est pas constante : elle varie selon les milieux et les époques. Certaines couches ont été érodées et ont disparu. Pendant certaines périodes, aucun sédiment ne s'est déposé (lacunes). Les sédiments se tassent en s'enfouissant, ce qui réduit leur épaisseur.",
              "c) L'âge actuel est de 4,57 × 10⁹ ans, environ 14 fois plus.",
              "Réponse : environ 330 millions d'années, une estimation qui montre surtout que la Terre est très ancienne, mais qui sous-estime nettement son âge réel.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associer chaque auteur à son argument et à son estimation de l'âge de la Terre, puis les classer par ordre chronologique. Auteurs : Buffon, Kelvin, Ussher, Patterson. Arguments : radioactivité des météorites ; refroidissement de boulets de fer ; refroidissement de la Terre par conduction et température des mines ; généalogies de la Bible. Estimations : environ 6 000 ans ; environ 75 000 ans ; 20 à 40 millions d'années ; 4,55 milliards d'années.",
              hint: "Repérez d'abord l'argument le plus récent : la radioactivité n'est découverte qu'en 1896.",
              solution: [
                "Ussher (1650) : généalogies de la Bible, environ 6 000 ans.",
                "Buffon (1778) : refroidissement de boulets de fer extrapolé à la Terre, environ 75 000 ans.",
                "Kelvin (1862, puis 1897) : refroidissement par conduction et température des mines, 20 à 40 millions d'années (fourchette finale).",
                "Patterson (1956) : radioactivité, isotopes du plomb des météorites, 4,55 milliards d'années.",
                "Ordre chronologique : Ussher, Buffon, Kelvin, Patterson.",
              ],
            },
            {
              level: 2,
              statement: "On utilise la radioactivité pour dater des roches. Données : demi-vie du potassium 40, 1,25 milliard d'années ; demi-vie de l'uranium 238, 4,47 milliards d'années ; demi-vie du carbone 14, 5 730 ans. a) Une roche contient le huitième du potassium 40 qu'elle contenait à sa formation : calculer son âge. b) Dans une météorite, il reste environ la moitié de l'uranium 238 initial : quel âge en déduit-on ? Est-ce cohérent avec l'âge de la Terre ? c) Pourquoi le carbone 14 ne convient-il pas pour dater la Terre ?",
              hint: "1/8 = 1/2³. Au bout de n demi-vies, il reste 1/2ⁿ des noyaux initiaux.",
              solution: [
                "a) 1/8 = 1/2³ : trois demi-vies se sont écoulées. Âge : 3 × 1,25 = 3,75 milliards d'années.",
                "b) Il reste la moitié : une demi-vie s'est écoulée, soit environ 4,47 milliards d'années. C'est cohérent avec l'âge de la Terre (4,57 milliards d'années) : les météorites se sont formées en même temps que la Terre. (À 4,57 milliards d'années, il reste en fait un peu moins de la moitié, environ 49 %.)",
                "c) La demi-vie du carbone 14 (5 730 ans) est beaucoup trop courte : en 4,57 milliards d'années, il s'est écoulé environ 800 000 demi-vies, il ne reste plus aucun carbone 14 initial. On choisit un noyau dont la demi-vie est du même ordre de grandeur que l'âge à mesurer.",
                "Résultat : 3,75 milliards d'années pour la roche, environ 4,5 milliards d'années pour la météorite.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 (Kelvin, 1862) : en supposant la Terre initialement en fusion et refroidie par conduction, et à partir de l'augmentation de la température avec la profondeur, l'âge de la Terre est compris entre 20 et 400 millions d'années ; Kelvin le réduit ensuite à 20 à 40 millions d'années. Document 2 (Darwin, 1859) : l'érosion du Weald aurait demandé environ 300 millions d'années ; la sélection naturelle exige des durées immenses. Document 3 (Curie et Laborde, 1903) : le radium dégage spontanément et continuellement de la chaleur. Document 4 (Patterson, 1956) : l'analyse des isotopes du plomb de météorites donne un âge de 4,55 milliards d'années. a) Montrer qu'il existe une controverse entre les documents 1 et 2, et identifier les disciplines et les théories en jeu. b) Expliquer en quoi le document 3 remet en cause le raisonnement de Kelvin. c) Comment le document 4 permet-il de trancher ? d) Expliquer pourquoi un raisonnement rigoureux, comme celui de Kelvin, peut conduire à un résultat faux.",
              hint: "Comparez les ordres de grandeur des documents 1 et 2. Pour b, demandez-vous ce que devient le refroidissement de la Terre si elle possède une source interne de chaleur.",
              solution: [
                "a) Kelvin, physicien, obtient au plus quelques dizaines de millions d'années par la théorie du refroidissement (conduction de la chaleur). Darwin, naturaliste, s'appuie sur la géologie (érosion, actualisme) et sur la théorie de l'évolution, qui exigent des centaines de millions d'années. Les estimations diffèrent d'un facteur 10 au moins : c'est une controverse scientifique entre physique et sciences naturelles.",
                "b) Le document 3 montre que des éléments radioactifs produisent de la chaleur. Présents dans les roches terrestres, ils réchauffent la Terre de l'intérieur : elle se refroidit beaucoup plus lentement que prévu par Kelvin, qui supposait une Terre sans source interne. Son âge était donc fortement sous-estimé.",
                "c) Le document 4 utilise la radioactivité comme chronomètre : la proportion de noyaux pères et fils dans les météorites, formées avec la Terre, donne 4,55 milliards d'années. Cette mesure, indépendante des hypothèses sur le refroidissement, donne raison aux géologues sur l'immensité des temps, et dépasse même largement leurs estimations.",
                "d) Un raisonnement ne vaut que par ses hypothèses : Kelvin calculait correctement, mais il ignorait la radioactivité (découverte en 1896) et la convection du manteau. Les connaissances d'une époque limitent ses conclusions ; la science progresse en révisant ses hypothèses face à de nouvelles données.",
                "Conclusion : la controverse sur l'âge de la Terre a été tranchée au XXe siècle par la radiochronologie, qui fixe aujourd'hui cet âge à 4,57 milliards d'années.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de l'âge de la Terre dans l'ordre chronologique.",
            items: [
              "Ussher situe la création du monde en 4004 avant notre ère",
              "Sténon énonce le principe de superposition des strates",
              "Buffon publie un âge d'environ 75 000 ans, d'après le refroidissement de boulets de fer",
              "Darwin publie De l'origine des espèces",
              "Becquerel découvre la radioactivité",
              "Holmes estime que la Terre a au moins 1,6 milliard d'années",
              "Patterson date les météorites à 4,55 milliards d'années",
            ],
          },
          quiz: [
            {
              q: "Quel âge de la Terre est aujourd'hui admis ?",
              options: ["4,57 milliards d'années", "75 000 ans", "13,8 milliards d'années", "20 à 40 millions d'années"],
              answer: 0,
              why: "La radiochronologie des plus anciens matériaux du système solaire donne 4,57 × 10⁹ ans. 13,8 milliards d'années est l'âge de l'Univers.",
            },
            {
              q: "Sur quel argument repose l'estimation de Buffon ?",
              options: ["La radioactivité de l'uranium", "Le principe de superposition des strates et l'épaisseur des couches sédimentaires", "Les généalogies de la Bible", "Le refroidissement de boulets de fer extrapolé à la Terre"],
              answer: 3,
              why: "Buffon chauffe des boulets de fer et mesure leur temps de refroidissement, qu'il extrapole à une Terre initialement en fusion.",
            },
            {
              q: "Pourquoi l'estimation de Kelvin était-elle beaucoup trop courte ?",
              options: ["Parce que ses calculs mathématiques comportaient de nombreuses erreurs", "Parce qu'il ignorait la chaleur produite par la radioactivité", "Parce qu'il croyait la Terre plate"],
              answer: 1,
              why: "Son calcul était juste, mais il supposait une Terre sans source interne de chaleur et refroidie par conduction seule ; la radioactivité et la convection du manteau ralentissent le refroidissement.",
            },
            {
              q: "Que dit le principe de superposition de Sténon ?",
              options: ["Une couche sédimentaire non déformée est plus récente que celle qu'elle recouvre", "Les couches les plus épaisses sont toujours les plus anciennes, quelle que soit leur position", "Toutes les couches d'une région se sont déposées en même temps"],
              answer: 0,
              why: "Dans une série non déformée, les couches se déposent les unes sur les autres : la plus haute est la plus récente.",
            },
            {
              q: "Pourquoi Patterson a-t-il analysé des météorites plutôt que des roches terrestres ?",
              options: ["Parce que les roches terrestres ne contiennent pas de plomb", "Parce que les météorites sont radioactives et pas les roches terrestres", "Parce qu'elles datent de la formation du système solaire", "Parce que les météorites sont plus faciles à trouver"],
              answer: 2,
              why: "La surface terrestre est sans cesse remodelée et les premières roches ont disparu ; les météorites ont gardé la trace de la formation du système solaire.",
            },
          ],
          trap: "Croire que Kelvin s'est trompé dans ses calculs : son raisonnement mathématique était rigoureux, ce sont ses hypothèses (aucune source interne de chaleur, refroidissement par conduction seule) qui étaient incomplètes.",
          method: "Face à un document historique, posez trois questions : quel argument (refroidissement, sédimentation, strates, évolution, radioactivité) ? Quelles hypothèses ? Quelles connaissances manquaient à l'époque ? Rédigez ensuite votre réponse en reliant l'auteur, l'argument et l'estimation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'terre-dans-univers',
          title: 'La Terre dans l’Univers : du géocentrisme à l’héliocentrisme',
          minutes: 35,
          objectives: [
            "Décrire le mouvement quasi circulaire de la Terre autour du Soleil dans un référentiel héliocentrique et celui de la Lune autour de la Terre dans un référentiel géocentrique.",
            "Interpréter des documents présentant des arguments historiques pour discuter la théorie héliocentrique.",
            "Interpréter l'aspect de la Lune dans le ciel en fonction de sa position par rapport à la Terre et au Soleil.",
          ],
          course: [
            {
              heading: "Le géocentrisme : une Terre immobile au centre du monde",
              paragraphs: [
                "Pour l'observateur terrestre, la Terre semble immobile et le Soleil, la Lune, les planètes et les étoiles semblent tourner autour d'elle. Pendant l'Antiquité et jusqu'au XVIe siècle, la conception dominante est donc géocentrique : la Terre est au centre de l'Univers. Elle est défendue par Aristote (IVe siècle avant notre ère), dont la physique distingue le monde terrestre, changeant, et le monde céleste, parfait.",
                "Au IIe siècle, Claude Ptolémée, à Alexandrie, en donne une version mathématique très élaborée, exposée dans l'Almageste. Pour rendre compte des mouvements irréguliers des planètes, qui semblent parfois revenir en arrière dans le ciel (mouvement rétrograde), il les fait tourner sur de petits cercles, les épicycles, dont le centre tourne lui-même autour de la Terre sur un grand cercle, le déférent. Ce modèle prédit assez bien les positions des astres et sera utilisé pendant plus de quatorze siècles. Au IIIe siècle avant notre ère, Aristarque de Samos avait pourtant proposé de placer le Soleil au centre, sans être suivi.",
              ],
            },
            {
              heading: "La révolution copernicienne et la controverse",
              paragraphs: [
                "En 1543, Nicolas Copernic publie Des révolutions des orbes célestes : il place le Soleil au centre, près duquel tournent les planètes, dont la Terre, qui tourne aussi sur elle-même en une journée. Ce modèle héliocentrique explique simplement le mouvement rétrograde (la Terre, plus rapide, dépasse une planète extérieure comme Mars) et range les planètes selon leur période. Mais il garde des orbites circulaires et n'est pas plus précis que celui de Ptolémée. Tycho Brahe, auteur d'observations à l'œil nu d'une précision inégalée, propose un système mixte : le Soleil tourne autour de la Terre immobile et les autres planètes tournent autour du Soleil.",
                "En 1609 et 1619, Johannes Kepler, à partir des observations de Tycho Brahe, montre que les planètes décrivent des ellipses dont le Soleil occupe un foyer. En 1610, Galilée observe avec une lunette des satellites qui tournent autour de Jupiter (tout ne tourne donc pas autour de la Terre), puis les phases complètes de Vénus, inexplicables dans le système de Ptolémée mais compatibles avec Copernic (et aussi avec Tycho Brahe). Défendant l'héliocentrisme, il est condamné par l'Inquisition en 1633.",
                "En 1687, Isaac Newton explique les mouvements des planètes par la gravitation universelle, dans le cadre héliocentrique. Les preuves directes du mouvement de la Terre viennent plus tard : l'aberration de la lumière des étoiles (Bradley, 1729), la parallaxe d'une étoile, petit déplacement apparent dû au mouvement annuel de la Terre (Bessel, 1838), et le pendule de Foucault, qui met en évidence la rotation de la Terre (1851). Ce passage du géocentrisme à l'héliocentrisme est l'une des controverses les plus importantes de l'histoire des sciences.",
              ],
              box: { label: "À retenir", text: "Géocentrisme (Aristote, Ptolémée) → héliocentrisme (Copernic, 1543). Arguments décisifs : satellites de Jupiter et phases de Vénus (Galilée, 1610), orbites elliptiques (Kepler), gravitation (Newton, 1687), parallaxe stellaire (Bessel, 1838)." },
            },
            {
              heading: "Référentiels et trajectoires : la Terre et la Lune",
              paragraphs: [
                "Un mouvement se décrit toujours par rapport à un référentiel. Le référentiel héliocentrique a pour origine le centre du Soleil et des axes dirigés vers des étoiles lointaines, considérées comme fixes. Dans ce référentiel, la Terre parcourt une trajectoire quasi circulaire autour du Soleil, de rayon environ 1,50 × 10⁸ km, en 365,25 jours, à une vitesse d'environ 30 km/s. Elle tourne aussi sur elle-même en environ 23 h 56 min par rapport aux étoiles.",
                "Le référentiel géocentrique a pour origine le centre de la Terre et des axes dirigés vers des étoiles lointaines. Dans ce référentiel, la Lune décrit une trajectoire quasi circulaire autour de la Terre, de rayon environ 3,84 × 10⁵ km, en 27,3 jours, à environ 1 km/s. La Lune tourne également sur elle-même, en 27,3 jours, exactement la durée de sa révolution : c'est pourquoi elle présente toujours la même face à la Terre. On ne voit jamais sa face cachée depuis la Terre, alors qu'elle est éclairée par le Soleil à son tour.",
              ],
              box: { label: "Définition", text: "Référentiel héliocentrique : centre du Soleil et trois étoiles lointaines (mouvement de la Terre). Référentiel géocentrique : centre de la Terre et trois étoiles lointaines (mouvement de la Lune). Vitesse sur un cercle : v = 2πr ÷ T." },
            },
            {
              heading: "Les phases de la Lune",
              paragraphs: [
                "La Lune ne produit pas de lumière : elle diffuse celle du Soleil. À tout moment, une moitié de la Lune est éclairée, celle tournée vers le Soleil. Depuis la Terre, nous voyons une partie plus ou moins grande de cette moitié éclairée, selon la position de la Lune par rapport à la Terre et au Soleil : c'est l'origine des phases.",
                "À la nouvelle lune, la Lune est à peu près entre la Terre et le Soleil : sa face éclairée est tournée à l'opposé de nous, elle est invisible. Au premier quartier, une semaine plus tard environ, la direction Terre-Lune fait un angle droit avec la direction Terre-Soleil : dans l'hémisphère Nord, on voit la moitié droite du disque éclairée, la Lune est haute dans le ciel au coucher du Soleil. À la pleine lune, la Terre est à peu près entre le Soleil et la Lune : on voit toute la face éclairée, et la Lune se lève quand le Soleil se couche. Au dernier quartier, on voit la moitié gauche, la Lune est visible en fin de nuit et le matin.",
                "Entre ces positions, on observe un croissant puis une Lune gibbeuse (plus qu'à moitié éclairée). Le cycle complet des phases, la lunaison, dure environ 29,5 jours, un peu plus que la révolution de 27,3 jours, car pendant ce temps la Terre a avancé sur son orbite autour du Soleil. Il n'y a pas d'éclipse à chaque nouvelle lune ni à chaque pleine lune, car l'orbite de la Lune est inclinée d'environ 5° par rapport à celle de la Terre.",
              ],
              box: { label: "Règle", text: "Dans l'hémisphère Nord, « la Lune est menteuse » : quand elle a la forme d'un D, elle est croissante (vers la pleine lune) ; quand elle a la forme d'un C, elle est décroissante (vers la nouvelle lune)." },
            },
          ],
          keyPoints: [
            "Géocentrisme : la Terre immobile au centre (Aristote, Ptolémée et ses épicycles).",
            "Héliocentrisme : Copernic (1543) ; Tycho Brahe propose un système mixte.",
            "Galilée (1610) : satellites de Jupiter et phases de Vénus ; Kepler : orbites elliptiques ; Newton (1687) : gravitation.",
            "Référentiel héliocentrique : la Terre tourne autour du Soleil en 365,25 jours, à environ 30 km/s.",
            "Référentiel géocentrique : la Lune tourne autour de la Terre en 27,3 jours et sur elle-même en 27,3 jours : elle montre toujours la même face.",
            "Phases : la moitié de la Lune tournée vers le Soleil est éclairée ; nous en voyons une partie variable selon sa position.",
            "Nouvelle lune : Lune entre Terre et Soleil ; pleine lune : Terre entre Soleil et Lune. Lunaison : 29,5 jours.",
          ],
          example: {
            statement: "Dans le référentiel héliocentrique, la Terre décrit autour du Soleil un cercle de rayon r = 1,50 × 10⁸ km en T = 365,25 jours. a) Calculer la longueur de cette trajectoire. b) Calculer la vitesse de la Terre en km/h, puis en km/s. c) Pourquoi ne ressentons-nous pas ce mouvement ?",
            solution: [
              "a) Longueur du cercle : 2πr = 2 × π × 1,50 × 10⁸ ≈ 9,42 × 10⁸ km.",
              "b) Durée en heures : 365,25 × 24 = 8 766 h. Vitesse : v = 9,42 × 10⁸ ÷ 8 766 ≈ 1,07 × 10⁵ km/h, soit environ 107 000 km/h.",
              "En km/s : 1,07 × 10⁵ ÷ 3 600 ≈ 29,8 km/s, soit environ 30 km/s.",
              "c) Ce mouvement est presque uniforme : la vitesse varie très peu et très lentement. Nous sommes emportés avec la Terre, l'atmosphère et tout ce qui nous entoure, comme des passagers d'un avion qui vole à vitesse constante : rien ne nous permet de sentir ce déplacement. C'est l'un des arguments qui rendaient le géocentrisme naturel.",
              "Réponse : environ 9,42 × 10⁸ km parcourus en un an, à environ 107 000 km/h, soit 30 km/s.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On observe la Lune depuis l'hémisphère Nord. Pour chaque situation, nommer la phase et indiquer quand la Lune est visible. a) La Lune est dans la même direction que le Soleil. b) La Lune est à l'opposé du Soleil par rapport à la Terre. c) Le disque est éclairé sur sa moitié droite. d) Le disque est éclairé sur sa moitié gauche.",
              hint: "La face de la Lune tournée vers le Soleil est toujours éclairée. Demandez-vous quelle partie de cette face est tournée vers la Terre.",
              solution: [
                "a) Nouvelle lune : la face éclairée est tournée vers le Soleil, donc à l'opposé de la Terre. La Lune est invisible ; elle se lève et se couche à peu près en même temps que le Soleil.",
                "b) Pleine lune : toute la face éclairée est tournée vers la Terre. La Lune se lève au coucher du Soleil et reste visible toute la nuit.",
                "c) Premier quartier : la Lune est croissante, à angle droit de la direction du Soleil. Elle est visible l'après-midi et en soirée, et se couche vers minuit.",
                "d) Dernier quartier : la Lune est décroissante. Elle se lève vers minuit et reste visible en fin de nuit et le matin.",
              ],
            },
            {
              level: 2,
              statement: "Dans le référentiel géocentrique, la Lune décrit autour de la Terre un cercle de rayon r = 3,84 × 10⁵ km en 27,3 jours. a) Calculer sa vitesse en km/h puis en km/s. b) La Lune tourne sur elle-même en 27,3 jours : expliquer pourquoi nous voyons toujours la même face. c) Expliquer pourquoi le cycle des phases (29,5 jours) est plus long que la durée de révolution de la Lune.",
              hint: "v = 2πr ÷ T, avec T en heures pour obtenir des km/h. Pour b, imaginez une personne qui tourne autour d'une table en regardant toujours son centre.",
              solution: [
                "a) Longueur de l'orbite : 2π × 3,84 × 10⁵ ≈ 2,41 × 10⁶ km. Durée : 27,3 × 24 ≈ 655 h. Vitesse : 2,41 × 10⁶ ÷ 655 ≈ 3 680 km/h, soit 3 680 ÷ 3 600 ≈ 1,0 km/s.",
                "b) La Lune fait exactement un tour sur elle-même pendant qu'elle fait un tour autour de la Terre : elle tourne toujours la même face vers nous, comme une personne qui tourne autour d'une table en regardant toujours son centre (elle fait elle aussi un tour sur elle-même).",
                "c) Les phases dépendent de la position de la Lune par rapport au Soleil et à la Terre. En 27,3 jours, la Lune est revenue à la même position par rapport aux étoiles, mais la Terre a avancé d'environ 27° sur son orbite autour du Soleil : la Lune doit encore parcourir un peu plus de deux jours pour retrouver la même position par rapport au Soleil, d'où 29,5 jours.",
                "Résultat : environ 3 700 km/h, soit 1,0 km/s.",
              ],
            },
            {
              level: 3,
              statement: "Exercice de type contrôle continu. Document 1 : dans le système de Ptolémée, Vénus tourne sur un épicycle dont le centre reste toujours aligné entre la Terre et le Soleil ; Vénus ne peut donc jamais se trouver derrière le Soleil. Document 2 : en 1610, Galilée observe à la lunette que Vénus présente toutes les phases, de la phase pleine à un fin croissant, et que sa taille apparente est petite quand elle est pleine et grande quand elle est en croissant. Document 3 : la même année, il découvre quatre satellites qui tournent autour de Jupiter. Document 4 : dans le système de Tycho Brahe, la Terre est immobile, le Soleil tourne autour d'elle et les planètes tournent autour du Soleil. Document 5 : en 1838, Bessel mesure la parallaxe d'une étoile, petit déplacement apparent de sa position au cours de l'année. a) Montrer que le document 2 réfute le système de Ptolémée. b) Interpréter les variations de taille apparente de Vénus dans le système de Copernic. c) Quelle idée du géocentrisme le document 3 contredit-il ? d) Les observations de Galilée suffisent-elles à prouver l'héliocentrisme ? Utiliser le document 4. e) En quoi le document 5 est-il décisif ?",
              hint: "Une phase pleine signifie que l'on voit toute la face éclairée : où doit se trouver Vénus par rapport au Soleil ? Pour d, vérifiez si le système de Tycho Brahe explique aussi les phases de Vénus.",
              solution: [
                "a) Pour que Vénus paraisse pleine, nous devons voir toute sa face éclairée : elle doit se trouver de l'autre côté du Soleil par rapport à la Terre. Or, chez Ptolémée, Vénus reste toujours entre la Terre et le Soleil : on ne pourrait voir que des croissants. L'observation de la phase pleine réfute donc ce système.",
                "b) Dans le système de Copernic, Vénus tourne autour du Soleil sur une orbite plus petite que celle de la Terre. Quand elle est pleine, elle est derrière le Soleil, loin de la Terre : elle paraît petite. Quand elle est en croissant, elle est entre la Terre et le Soleil, proche de nous : elle paraît grande. Le modèle explique à la fois les phases et les tailles.",
                "c) Le document 3 montre que des astres tournent autour d'un autre centre que la Terre : la Terre n'est pas le centre de tous les mouvements célestes, contrairement à ce qu'affirme le géocentrisme.",
                "d) Non : dans le système de Tycho Brahe, Vénus tourne autour du Soleil, ce qui explique aussi ses phases et ses tailles, alors que la Terre reste immobile. Les observations de Galilée réfutent Ptolémée, mais ne permettent pas, seules, de choisir entre Copernic et Tycho Brahe.",
                "e) La parallaxe est un effet du déplacement annuel de la Terre autour du Soleil : l'observateur change de point de vue au cours de l'année. Sa mesure est une preuve directe du mouvement de la Terre, que le système de Tycho Brahe ne peut pas expliquer. Conclusion : l'héliocentrisme s'est imposé par une accumulation d'arguments, sur plus de deux siècles.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque savant à sa contribution.",
            pairs: [
              { left: "Ptolémée (IIe siècle)", right: "Modèle géocentrique avec épicycles et déférents" },
              { left: "Copernic (1543)", right: "Place le Soleil au centre et fait tourner la Terre" },
              { left: "Tycho Brahe", right: "Système mixte : le Soleil tourne autour de la Terre, les planètes autour du Soleil" },
              { left: "Kepler (1609)", right: "Les planètes décrivent des ellipses dont le Soleil occupe un foyer" },
              { left: "Galilée (1610)", right: "Observe les satellites de Jupiter et les phases de Vénus" },
              { left: "Newton (1687)", right: "Explique les mouvements des planètes par la gravitation universelle" },
            ],
          },
          quiz: [
            {
              q: "Dans quel référentiel la Lune décrit-elle une trajectoire quasi circulaire de période 27,3 jours ?",
              options: ["Le référentiel héliocentrique", "Le référentiel terrestre lié au sol", "Le référentiel lié à la Lune elle-même", "Le référentiel géocentrique"],
              answer: 3,
              why: "Le référentiel géocentrique (centre de la Terre, axes vers des étoiles lointaines) décrit le mouvement de la Lune autour de la Terre.",
            },
            {
              q: "Pourquoi voit-on toujours la même face de la Lune ?",
              options: ["Parce que sa rotation et sa révolution durent 27,3 jours", "Parce qu'elle ne tourne pas du tout sur elle-même", "Parce que sa face cachée n'est jamais éclairée par le Soleil", "Parce que la Terre lui cache toujours le même côté du Soleil"],
              answer: 0,
              why: "La rotation de la Lune sur elle-même et sa révolution autour de la Terre ont la même durée : elle nous montre toujours la même face. Sa face cachée est éclairée à la nouvelle lune.",
            },
            {
              q: "À la pleine lune, où se trouve la Lune ?",
              options: ["Entre la Terre et le Soleil", "À angle droit de la direction Terre-Soleil, comme au premier quartier", "À l'opposé du Soleil par rapport à la Terre", "Derrière le Soleil"],
              answer: 2,
              why: "La Terre est à peu près entre le Soleil et la Lune : toute la face éclairée de la Lune est tournée vers nous.",
            },
            {
              q: "Quelle observation de Galilée réfute le système de Ptolémée ?",
              options: ["Les taches à la surface du Soleil", "Les phases complètes de Vénus", "La couleur rouge de Mars", "Le mouvement apparent des étoiles au cours de la nuit"],
              answer: 1,
              why: "Chez Ptolémée, Vénus reste entre la Terre et le Soleil et ne peut jamais paraître pleine ; Galilée observe pourtant toutes ses phases.",
            },
            {
              q: "Quelle est la vitesse de la Terre sur son orbite autour du Soleil ?",
              options: ["Environ 30 km/s", "Environ 1 km/s", "Environ 300 000 km/s", "Environ 0,5 km/s"],
              answer: 0,
              why: "v = 2πr ÷ T = 2π × 1,50 × 10⁸ km ÷ (365,25 × 86 400 s) ≈ 30 km/s. 1 km/s est la vitesse de la Lune autour de la Terre.",
            },
          ],
          trap: "Croire que les phases de la Lune sont dues à l'ombre de la Terre : c'est le cas des éclipses de Lune, rares. Les phases viennent de la position de la Lune par rapport au Soleil et à la Terre, qui nous fait voir une partie plus ou moins grande de sa moitié éclairée.",
          method: "Pour interpréter une phase de la Lune, faites un schéma vu du dessus : le Soleil d'un côté, la Terre au centre, la Lune sur son orbite. Coloriez la moitié de la Lune tournée vers le Soleil, puis placez-vous sur la Terre et regardez quelle partie de cette moitié est tournée vers vous.",
        },
      ],
    },
  ],
}
