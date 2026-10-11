import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'ens-sci-1re',
  chapters: [
    /* ==================================================================== */
    /* SON ET MUSIQUE, PORTEURS D'INFORMATION                                 */
    /* ==================================================================== */
    {
      id: 'son-musique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'son-vibration',
          title: 'Le son, un phénomène vibratoire',
          minutes: 30,
          objectives: [
            "Expliquer qu'un son est produit par la vibration d'un objet et qu'il se propage dans un milieu matériel.",
            "Distinguer un son pur d'un son composé, et relier la hauteur à la fréquence fondamentale et le timbre au spectre.",
            "Calculer la fréquence d'un son à partir de sa période, et son niveau d'intensité sonore en décibels.",
            "Relier la fréquence fondamentale d'une corde vibrante à sa longueur, à sa tension et à sa masse linéique.",
          ],
          course: [
            {
              heading: "Produire et propager un son",
              paragraphs: [
                "Un son est produit par un objet qui vibre : la corde d'une guitare, la membrane d'un haut-parleur ou d'un tambour, les cordes vocales. En vibrant, l'objet comprime puis dilate alternativement la couche d'air qui le touche. Cette perturbation se transmet de proche en proche aux couches voisines : c'est une onde sonore. Les molécules d'air oscillent autour de leur position moyenne sans se déplacer avec l'onde : l'onde transporte de l'énergie, pas de matière.",
                "Le son a besoin d'un milieu matériel (gaz, liquide ou solide) pour se propager : il ne se propage pas dans le vide. Sa vitesse dépend du milieu : environ 340 m/s dans l'air à température ambiante, environ 1 500 m/s dans l'eau et plusieurs milliers de mètres par seconde dans les solides comme l'acier. Elle se calcule par v = d ÷ Δt, où d est la distance parcourue pendant la durée Δt.",
                "Un instrument de musique associe un vibrateur, qui produit la vibration (corde, anche, lèvres, membrane), et un résonateur, qui l'amplifie et lui donne sa couleur (caisse de la guitare ou du violon, tuyau de la flûte). Sans caisse de résonance, une corde tendue vibre mais s'entend à peine, car elle met très peu d'air en mouvement.",
              ],
              box: { label: "Repère", text: "Le son est une onde mécanique : une vibration qui se propage de proche en proche dans un milieu matériel. Vitesse dans l'air : environ 340 m/s. Pas de son dans le vide." },
            },
            {
              heading: "Période, fréquence, son pur et son composé",
              paragraphs: [
                "Un microphone transforme les variations de pression de l'air en une tension électrique que l'on visualise sur un oscilloscope ou un logiciel. Pour un son musical, ce signal est périodique : le même motif se répète à intervalles de temps égaux. La période T est la durée d'un motif, en secondes ; la fréquence f est le nombre de motifs par seconde, en hertz (Hz) : f = 1 ÷ T. Par exemple, une période de 2,0 ms correspond à f = 1 ÷ 0,0020 = 500 Hz.",
                "Un son pur correspond à un signal sinusoïdal : c'est le cas, à peu près, du son d'un diapason. La plupart des sons musicaux sont des sons composés : leur signal est périodique mais non sinusoïdal. Un signal périodique de fréquence f₁ se décompose en une somme de signaux sinusoïdaux de fréquences f₁, 2f₁, 3f₁, etc. La fréquence f₁ est la fréquence fondamentale ; les fréquences multiples nf₁ sont les harmoniques de rang n.",
                "Le spectre d'un son est le diagramme qui représente l'amplitude de chacune de ces composantes en fonction de leur fréquence. Le spectre d'un son pur ne comporte qu'un seul pic ; celui d'un son composé comporte plusieurs pics régulièrement espacés de f₁. L'oreille humaine perçoit les sons dont la fréquence est comprise entre 20 Hz et 20 000 Hz environ : en dessous, ce sont des infrasons, au-dessus, des ultrasons.",
              ],
              box: { label: "Définition", text: "Fréquence : f = 1 ÷ T (f en Hz, T en s). Un son composé de fréquence fondamentale f₁ contient des harmoniques de fréquences fₙ = n × f₁ (n entier, n ≥ 2). Le spectre représente l'amplitude de chaque composante en fonction de sa fréquence." },
            },
            {
              heading: "Hauteur, timbre et corde vibrante",
              paragraphs: [
                "La hauteur d'un son est la sensation qui permet de dire qu'il est grave ou aigu. Elle est déterminée par la fréquence fondamentale : plus f₁ est grande, plus le son est aigu. Deux instruments qui jouent la même note ont la même fréquence fondamentale ; le la₃ du diapason, note de référence pour accorder les instruments, a pour fréquence 440 Hz.",
                "Le timbre est ce qui distingue deux sons de même hauteur et de même intensité, par exemple un la₃ joué au piano et au violon. Il dépend de la composition du spectre (présence et amplitudes relatives des harmoniques) et de l'évolution du son au cours du temps (attaque, maintien, extinction). Une flûte produit un son pauvre en harmoniques, une trompette un son riche en harmoniques aigus.",
                "Une corde tendue fixée à ses deux extrémités émet un son composé dont la fréquence fondamentale ne dépend que de ses caractéristiques : sa longueur L, sa tension T et sa masse linéique μ (masse par mètre de corde). Une corde plus courte ou plus tendue donne un son plus aigu ; une corde plus lourde, un son plus grave. C'est pourquoi le guitariste raccourcit la partie vibrante en appuyant sur une case, et accorde en tournant les mécaniques, qui modifient la tension.",
              ],
              box: { label: "Formule", text: "Fréquence fondamentale d'une corde vibrante : f₁ = (1 ÷ 2L) × √(T ÷ μ), avec L en m, T en N et μ en kg/m. Diviser la longueur par 2 double la fréquence : le son monte d'une octave." },
            },
            {
              heading: "Intensité et niveau d'intensité sonore",
              paragraphs: [
                "Une onde sonore transporte de l'énergie. L'intensité sonore I est la puissance transportée par unité de surface perpendiculaire à la propagation ; elle s'exprime en watts par mètre carré (W/m²). Elle diminue quand on s'éloigne de la source, car la puissance se répartit sur une surface de plus en plus grande.",
                "L'oreille perçoit des intensités très différentes, de I₀ = 1,0 × 10⁻¹² W/m² (seuil d'audibilité, vers 1 000 Hz) à environ 1 W/m² (seuil de douleur). Pour manipuler des nombres plus commodes, on utilise une échelle logarithmique : le niveau d'intensité sonore L, en décibels (dB), est défini par L = 10 log(I ÷ I₀). La fonction log, disponible sur la calculatrice, vérifie log(10ⁿ) = n : si I = 10⁷ × I₀, alors L = 10 × 7 = 70 dB.",
                "Cette échelle a des conséquences pratiques. Multiplier l'intensité par 10 ajoute 10 dB ; la multiplier par 100 ajoute 20 dB ; la doubler ajoute seulement 10 log 2 ≈ 3 dB. Ainsi, deux sources identiques de 60 dB chacune produisent ensemble environ 63 dB, et non 120 dB : les niveaux sonores ne s'additionnent pas, ce sont les intensités qui s'ajoutent. Le seuil d'audibilité correspond à 0 dB et le seuil de douleur à environ 120 dB.",
              ],
              box: { label: "Formule", text: "L = 10 log(I ÷ I₀), avec I₀ = 1,0 × 10⁻¹² W/m². Réciproquement, I = I₀ × 10^(L ÷ 10). Intensité × 2 : + 3 dB environ ; intensité × 10 : + 10 dB." },
            },
          ],
          keyPoints: [
            "Un son naît d'une vibration et se propage dans un milieu matériel, jamais dans le vide ; environ 340 m/s dans l'air.",
            "f = 1 ÷ T : fréquence en hertz, période en secondes. Domaine audible : de 20 Hz à 20 kHz environ.",
            "Son pur : signal sinusoïdal, un seul pic. Son composé : fondamental f₁ et harmoniques de fréquences n × f₁.",
            "Hauteur liée à la fréquence fondamentale ; timbre lié au spectre et à l'évolution du son dans le temps.",
            "Corde vibrante : f₁ augmente si la longueur diminue, si la tension augmente ou si la corde est plus légère.",
            "L = 10 log(I ÷ I₀) avec I₀ = 10⁻¹² W/m² ; doubler l'intensité ajoute environ 3 dB, la multiplier par 10 ajoute 10 dB.",
          ],
          example: {
            statement: "On enregistre une note jouée par un instrument. Sur l'oscillogramme, 3 motifs identiques et non sinusoïdaux occupent une durée de 6,0 ms. Le spectre présente des pics à 500 Hz, 1 000 Hz et 1 500 Hz. Au point d'écoute, l'intensité sonore vaut I = 1,0 × 10⁻⁵ W/m². a) Calculer la période et la fréquence du son. b) Le son est-il pur ou composé ? Identifier le fondamental et les harmoniques. c) Calculer le niveau d'intensité sonore. Donnée : I₀ = 1,0 × 10⁻¹² W/m².",
            solution: [
              "a) Trois périodes durent 6,0 ms, donc T = 6,0 ÷ 3 = 2,0 ms = 2,0 × 10⁻³ s.",
              "Fréquence : f = 1 ÷ T = 1 ÷ (2,0 × 10⁻³) = 500 Hz.",
              "b) Le signal est périodique mais non sinusoïdal et le spectre comporte plusieurs pics : le son est composé.",
              "Le fondamental est à f₁ = 500 Hz (c'est bien la fréquence trouvée en a) ; 1 000 Hz = 2 × 500 Hz est l'harmonique de rang 2 et 1 500 Hz = 3 × 500 Hz l'harmonique de rang 3.",
              "c) I ÷ I₀ = (1,0 × 10⁻⁵) ÷ (1,0 × 10⁻¹²) = 10⁷, donc L = 10 log(10⁷) = 10 × 7 = 70 dB.",
              "Réponse : T = 2,0 ms, f = 500 Hz ; son composé de fondamental 500 Hz ; L = 70 dB.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Un diapason émet un son pur de période T = 2,27 ms. Calculer sa fréquence, arrondie au hertz. b) Le spectre d'un son de flûte présente trois pics, à 262 Hz, 524 Hz et 786 Hz. Ce son est-il pur ou composé ? Donner sa fréquence fondamentale et le rang de chaque harmonique. c) Un éclair est vu au loin ; le tonnerre est entendu 6,0 s plus tard. En prenant v = 340 m/s pour le son et en considérant la propagation de la lumière comme instantanée, à quelle distance l'éclair s'est-il produit ?",
              hint: "Convertissez la période en secondes avant d'appliquer f = 1 ÷ T. Pour les harmoniques, divisez chaque fréquence par la plus petite.",
              solution: [
                "a) T = 2,27 ms = 2,27 × 10⁻³ s, donc f = 1 ÷ (2,27 × 10⁻³) ≈ 441 Hz. C'est, aux arrondis près, le la₃ de référence (440 Hz).",
                "b) Le spectre comporte plusieurs pics : le son est composé. La fréquence fondamentale est la plus petite : f₁ = 262 Hz.",
                "524 ÷ 262 = 2 et 786 ÷ 262 = 3 : 524 Hz est l'harmonique de rang 2 et 786 Hz l'harmonique de rang 3.",
                "c) d = v × Δt = 340 × 6,0 = 2 040 m. L'éclair s'est produit à environ 2,0 km.",
              ],
            },
            {
              level: 2,
              statement: "Un scooter, à une certaine distance, produit un niveau d'intensité sonore L = 80 dB. Données : I₀ = 1,0 × 10⁻¹² W/m² ; log 2 ≈ 0,30. a) Calculer l'intensité sonore I correspondante. b) Un deuxième scooter identique, à la même distance, démarre. Calculer le nouveau niveau d'intensité sonore. c) Combien de scooters identiques faudrait-il, à la même distance, pour atteindre 90 dB ?",
              hint: "Utilisez I = I₀ × 10^(L ÷ 10). Quand plusieurs sources fonctionnent ensemble, ce sont les intensités qui s'ajoutent, pas les niveaux.",
              solution: [
                "a) I = I₀ × 10^(L ÷ 10) = 1,0 × 10⁻¹² × 10⁸ = 1,0 × 10⁻⁴ W/m².",
                "b) Deux scooters : I' = 2 × 1,0 × 10⁻⁴ = 2,0 × 10⁻⁴ W/m².",
                "L' = 10 log(I' ÷ I₀) = 10 log(2 × 10⁸) = 10 × (log 2 + 8) ≈ 10 × 8,30 = 83 dB. Doubler l'intensité ajoute environ 3 dB, et non 80 dB.",
                "c) 90 dB correspond à I'' = 10⁻¹² × 10⁹ = 1,0 × 10⁻³ W/m², soit 10 fois l'intensité d'un seul scooter.",
                "Réponse : il faudrait 10 scooters identiques pour passer de 80 dB à 90 dB.",
              ],
            },
            {
              level: 3,
              statement: "La corde la plus grave d'une guitare (corde de la, données fictives) a une longueur vibrante L = 65 cm, une masse linéique μ = 6,0 × 10⁻³ kg/m et produit un son de fréquence fondamentale f₁ = 110 Hz. On rappelle que f₁ = (1 ÷ 2L) × √(T ÷ μ). 1) Donner les fréquences des harmoniques de rang 2 et 3 de ce son. 2) Le guitariste appuie sur la corde au milieu de sa longueur (douzième case). Quelle est la nouvelle fréquence fondamentale ? Quel intervalle musical sépare les deux notes ? 3) Exprimer la tension T en fonction de μ, L et f₁, puis la calculer. 4) La corde se détend légèrement. Le son devient-il plus grave ou plus aigu ? Justifier.",
              hint: "Pour la question 3, élevez au carré les deux membres de la formule après avoir isolé la racine : √(T ÷ μ) = 2L × f₁.",
              solution: [
                "1) Les harmoniques ont des fréquences multiples de f₁ : f₂ = 2 × 110 = 220 Hz et f₃ = 3 × 110 = 330 Hz.",
                "2) La longueur vibrante devient L ÷ 2 = 32,5 cm. Comme f₁ est inversement proportionnelle à L, la fréquence double : 2 × 110 = 220 Hz. Les deux notes sont séparées d'une octave (rapport de fréquences égal à 2).",
                "3) De f₁ = (1 ÷ 2L) × √(T ÷ μ), on tire √(T ÷ μ) = 2L × f₁, puis T ÷ μ = (2L × f₁)², donc T = μ × (2L × f₁)².",
                "Application numérique : 2L × f₁ = 2 × 0,65 × 110 = 143 m/s ; 143² = 20 449 ; T = 6,0 × 10⁻³ × 20 449 ≈ 123 N.",
                "4) Si la tension T diminue, √(T ÷ μ) diminue, donc f₁ diminue : le son devient plus grave. C'est pourquoi il faut retendre la corde pour la réaccorder.",
                "Réponse : 220 Hz et 330 Hz ; 220 Hz, une octave plus haut ; T ≈ 123 N ; le son devient plus grave.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Fréquence", right: "Nombre de motifs du signal par seconde, en hertz" },
              { left: "Hauteur", right: "Sensation grave ou aigu, liée à la fréquence fondamentale" },
              { left: "Timbre", right: "Ce qui distingue deux instruments jouant la même note, lié au spectre" },
              { left: "Harmonique", right: "Composante de fréquence égale à un multiple entier du fondamental" },
              { left: "Spectre", right: "Diagramme des amplitudes des composantes en fonction de la fréquence" },
              { left: "Décibel", right: "Unité du niveau d'intensité sonore, sur une échelle logarithmique" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi le son ne se propage-t-il pas dans le vide ?",
              options: ["Parce que le vide absorbe toutes les fréquences audibles sans exception", "Parce qu'il a besoin d'un milieu matériel qui vibre", "Parce que sa vitesse y devient infinie", "Parce que la lumière l'en empêche"],
              answer: 1,
              why: "Le son est une onde mécanique : il se transmet de proche en proche par la vibration de la matière. Sans matière, rien ne peut vibrer.",
            },
            {
              q: "Un signal sonore a une période de 5,0 ms. Quelle est sa fréquence ?",
              options: ["20 Hz", "200 Hz", "500 Hz", "5,0 Hz"],
              answer: 1,
              why: "f = 1 ÷ T = 1 ÷ 0,0050 = 200 Hz. Il faut convertir les millisecondes en secondes avant de calculer.",
            },
            {
              q: "Deux instruments différents jouent la même note. Qu'ont-ils nécessairement en commun ?",
              options: ["Le même spectre complet", "Le même niveau d'intensité sonore", "La même fréquence fondamentale", "Le même timbre"],
              answer: 2,
              why: "Même note signifie même hauteur, donc même fréquence fondamentale. Les spectres, et donc les timbres, restent différents.",
            },
            {
              q: "Un son composé a pour fréquence fondamentale 150 Hz. Laquelle de ces fréquences peut être celle d'un de ses harmoniques ?",
              options: ["75 Hz", "225 Hz", "200 Hz", "450 Hz"],
              answer: 3,
              why: "Les harmoniques ont des fréquences multiples entières du fondamental : 450 Hz = 3 × 150 Hz. Ni 225 Hz ni 200 Hz ne sont des multiples entiers de 150 Hz.",
            },
            {
              q: "L'intensité sonore est multipliée par 100. Comment évolue le niveau d'intensité sonore ?",
              options: ["Il augmente de 20 dB", "Il augmente de 100 dB", "Il augmente de 2 dB", "Il est multiplié par 100"],
              answer: 0,
              why: "L = 10 log(I ÷ I₀) et log(100) = 2 : le niveau augmente de 10 × 2 = 20 dB.",
            },
          ],
          trap: "Additionner les niveaux sonores en décibels : deux sources de 60 dB ne donnent pas 120 dB mais environ 63 dB, car ce sont les intensités qui s'ajoutent. Autre erreur fréquente : confondre la hauteur (fréquence fondamentale) et l'intensité (son fort ou faible).",
          method: "Devant un oscillogramme, mesurez la durée de plusieurs périodes puis divisez par leur nombre : la mesure est plus précise que sur une seule période. Vérifiez ensuite que la fréquence trouvée correspond bien au premier pic du spectre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gammes-nombres',
          title: 'La musique ou l’art de faire entendre les nombres',
          minutes: 30,
          objectives: [
            "Associer un intervalle entre deux notes au rapport de leurs fréquences (octave : 2 ; quinte : 3/2).",
            "Construire une gamme pythagoricienne par une succession de quintes ramenées dans l'octave.",
            "Expliquer pourquoi le cycle des quintes ne se referme pas, et calculer le comma pythagoricien.",
            "Calculer les fréquences des notes de la gamme tempérée à partir du rapport 2^(1/12).",
          ],
          course: [
            {
              heading: "Un intervalle est un rapport de fréquences",
              paragraphs: [
                "En musique, un intervalle est l'écart de hauteur entre deux notes. L'oreille ne perçoit pas la différence des fréquences mais leur rapport : l'intervalle entre 220 Hz et 440 Hz est perçu comme identique à celui entre 440 Hz et 880 Hz, car dans les deux cas le rapport vaut 2. On mesure donc un intervalle par le quotient f₂ ÷ f₁ de la fréquence la plus haute par la plus basse.",
                "L'octave correspond au rapport 2 : deux notes séparées d'une octave sonnent de façon si semblable qu'elles portent le même nom (la₂ à 220 Hz, la₃ à 440 Hz, la₄ à 880 Hz). La quinte correspond au rapport 3/2 et la quarte au rapport 4/3. La tradition attribue à Pythagore et à son école (VIe siècle avant notre ère) l'observation que ces intervalles consonants correspondent à des rapports de petits nombres entiers : sur une corde, en ne faisant vibrer que la moitié de la longueur, on monte d'une octave ; avec les deux tiers, d'une quinte.",
                "Quand on enchaîne deux intervalles, leurs rapports se multiplient. Monter d'une quinte puis d'une quarte revient à multiplier la fréquence par 3/2 × 4/3 = 2 : on monte d'une octave. À l'inverse, descendre d'une octave revient à diviser la fréquence par 2.",
              ],
              box: { label: "Définition", text: "Une gamme est une suite finie de notes dont les fréquences sont comprises dans une octave, de f à 2f (2f exclu), reproduite ensuite d'octave en octave. Octave : rapport 2 ; quinte : 3/2 ; quarte : 4/3. Enchaîner deux intervalles revient à multiplier leurs rapports." },
            },
            {
              heading: "La gamme de Pythagore, une suite de quintes",
              paragraphs: [
                "Pour construire la gamme de Pythagore, on part d'une note de fréquence f, puis on monte de quinte en quinte : on multiplie chaque fois par 3/2. Si la fréquence obtenue dépasse 2f, on la divise par 2 pour la ramener dans l'octave de départ. En prenant f = 1 pour le do, on obtient successivement : sol = 3/2 ; ré = 9/4, ramené à 9/8 ; la = 27/16 ; mi = 81/32, ramené à 81/64 ; si = 243/128.",
                "Avec cinq notes (do, sol, ré, la, mi), on obtient une gamme pentatonique, utilisée dans de nombreuses musiques traditionnelles. En ajoutant le si et le fa (obtenu par une quinte descendante depuis do : 2 ÷ 3/2 = 4/3), on obtient une gamme heptatonique de sept notes. Rangées par fréquences croissantes : do 1 ; ré 9/8 = 1,125 ; mi 81/64 ≈ 1,266 ; fa 4/3 ≈ 1,333 ; sol 3/2 = 1,5 ; la 27/16 ≈ 1,688 ; si 243/128 ≈ 1,898 ; puis do aigu = 2.",
                "Entre deux notes voisines, on ne trouve que deux intervalles : le ton, de rapport 9/8, et le demi-ton pythagoricien (ou limma), de rapport 256/243 ≈ 1,053, situé entre mi et fa et entre si et do. Les deux demi-tons pythagoriciens ne font pas tout à fait un ton : (256/243)² ≈ 1,110, alors que 9/8 = 1,125.",
              ],
              box: { label: "Règle", text: "Construction pythagoricienne : multiplier par 3/2 (quinte) ; si le résultat dépasse 2 fois la fréquence de départ, diviser par 2 (descendre d'une octave). Ton pythagoricien : 9/8 ; demi-ton pythagoricien : 256/243." },
            },
            {
              heading: "Le cycle des quintes ne se referme pas",
              paragraphs: [
                "En poursuivant la construction, on espère retomber sur la note de départ. Après 12 quintes, on a multiplié la fréquence par (3/2)¹² = 531 441 ÷ 4 096 ≈ 129,7, alors que 7 octaves correspondent à 2⁷ = 128. Les deux valeurs sont proches mais pas égales : le si dièse obtenu est un peu plus haut que le do situé sept octaves au-dessus.",
                "L'écart, appelé comma pythagoricien, vaut (3/2)¹² ÷ 2⁷ = 3¹² ÷ 2¹⁹ = 531 441 ÷ 524 288 ≈ 1,0136. Ce n'est pas un défaut de calcul : le cycle ne peut jamais se refermer exactement. En effet, (3/2)ᵖ = 2^q, avec p ≥ 1, équivaudrait à 3ᵖ = 2^(p + q). Or une puissance de 3 est un nombre impair et une puissance de 2 (d'exposant au moins 1) un nombre pair : l'égalité est impossible.",
                "Conséquence musicale : dans un instrument accordé en quintes justes, il faut bien fermer le cycle quelque part, et la dernière quinte, trop petite d'un comma, sonne faux (on l'a surnommée la « quinte du loup »). Il devient alors difficile de jouer un même morceau en partant d'une autre note, c'est-à-dire de le transposer.",
              ],
              box: { label: "Propriété", text: "Il n'existe aucun couple d'entiers p ≥ 1 et q tel que (3/2)ᵖ = 2^q, car 3ᵖ est impair et 2^(p + q) est pair. Douze quintes dépassent sept octaves d'un comma pythagoricien : 3¹² ÷ 2¹⁹ ≈ 1,0136." },
            },
            {
              heading: "La gamme tempérée : douze demi-tons égaux",
              paragraphs: [
                "Pour pouvoir transposer librement, on a adopté progressivement, à partir du XVIIe siècle (Marin Mersenne la décrit dans son Harmonie universelle), la gamme tempérée : l'octave est divisée en 12 demi-tons tous égaux. Si r est le rapport d'un demi-ton, douze demi-tons successifs doivent donner une octave : r¹² = 2, donc r = 2^(1/12) ≈ 1,0595. Un ton vaut deux demi-tons : r² = 2^(1/6) ≈ 1,1225.",
                "La fréquence d'une note située n demi-tons au-dessus d'une note de fréquence f vaut f × 2^(n/12). Ainsi, à partir du la₃ à 440 Hz, le do₄, trois demi-tons plus haut, a pour fréquence 440 × 2^(3/12) ≈ 523,3 Hz. Les fréquences successives de la gamme tempérée forment une suite géométrique de raison 2^(1/12).",
                "Le prix à payer est léger : à part l'octave, aucun intervalle n'est exactement juste. La quinte tempérée vaut 2^(7/12) ≈ 1,4983 au lieu de 1,5, un écart que l'oreille tolère très bien. En échange, toutes les tonalités sonnent de la même façon, ce qui permet de transposer sans réaccorder. C'est l'accord des pianos et des guitares d'aujourd'hui.",
              ],
              box: { label: "Formule", text: "Demi-ton tempéré : r = 2^(1/12) ≈ 1,0595. Note située n demi-tons au-dessus de f : f × 2^(n/12). Quinte tempérée (7 demi-tons) : 2^(7/12) ≈ 1,4983 ; quinte juste : 1,5." },
            },
          ],
          keyPoints: [
            "Un intervalle se mesure par un rapport de fréquences ; enchaîner deux intervalles revient à multiplier leurs rapports.",
            "Octave : rapport 2 (même nom de note) ; quinte : 3/2 ; quarte : 4/3.",
            "Gamme de Pythagore : multiplier par 3/2, puis diviser par 2 si l'on sort de l'octave. Cinq notes : pentatonique ; sept : heptatonique.",
            "Le cycle des quintes ne se referme jamais : 3ᵖ est impair, 2^(p + q) est pair. Comma pythagoricien : 3¹² ÷ 2¹⁹ ≈ 1,0136.",
            "Gamme tempérée : 12 demi-tons égaux de rapport 2^(1/12) ≈ 1,0595 ; elle permet de transposer librement.",
          ],
          example: {
            statement: "On construit une gamme pentatonique pythagoricienne à partir d'un do de fréquence 264 Hz, en montant de quinte en quinte (sol, ré, la, mi) et en ramenant chaque note dans l'octave [264 Hz ; 528 Hz[. Calculer les fréquences des cinq notes et les ranger par ordre croissant.",
            solution: [
              "L'octave de départ va de 264 Hz à 2 × 264 = 528 Hz (exclu).",
              "Sol : 264 × 3/2 = 396 Hz, qui est bien dans l'octave.",
              "Ré : 396 × 3/2 = 594 Hz, supérieur à 528 Hz, donc on divise par 2 : 297 Hz.",
              "La : 297 × 3/2 = 445,5 Hz, dans l'octave.",
              "Mi : 445,5 × 3/2 = 668,25 Hz, trop haut, donc on divise par 2 : 334,125 Hz ≈ 334,1 Hz.",
              "Réponse, par fréquences croissantes : do 264 Hz ; ré 297 Hz ; mi ≈ 334,1 Hz ; sol 396 Hz ; la 445,5 Hz. Vérification : 297 ÷ 264 = 1,125 = 9/8, c'est bien un ton pythagoricien.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le la₃ a pour fréquence 440 Hz. a) Calculer les fréquences du la₂ et du la₄. b) Calculer la fréquence de la note située une quinte juste au-dessus du la₃ (c'est un mi₄). c) Calculer la fréquence de la note située une quarte juste au-dessus du la₃ (c'est un ré₄), arrondie au dixième. d) Vérifier qu'une quinte suivie d'une quarte donne une octave.",
              hint: "Monter d'un intervalle revient à multiplier la fréquence par son rapport ; descendre d'une octave, à diviser par 2.",
              solution: [
                "a) La₂ : une octave plus bas, 440 ÷ 2 = 220 Hz. La₄ : une octave plus haut, 440 × 2 = 880 Hz.",
                "b) Mi₄ : 440 × 3/2 = 660 Hz.",
                "c) Ré₄ : 440 × 4/3 ≈ 586,7 Hz.",
                "d) 3/2 × 4/3 = 12/6 = 2 : une quinte suivie d'une quarte multiplie la fréquence par 2, c'est une octave. Par exemple, 440 × 3/2 = 660 Hz, puis 660 × 4/3 = 880 Hz, le la₄.",
              ],
            },
            {
              level: 2,
              statement: "Données : 3¹² = 531 441 ; 2¹² = 4 096 ; 2¹⁹ = 524 288. a) Calculer (3/2)¹² sous forme de fraction, puis en donner une valeur approchée au dixième. b) Comparer à 2⁷. Que peut-on dire de douze quintes et de sept octaves ? c) Calculer le comma pythagoricien (3/2)¹² ÷ 2⁷, arrondi au dix-millième. d) Démontrer qu'aucun nombre entier p ≥ 1 de quintes ne peut correspondre exactement à un nombre entier d'octaves.",
              hint: "Pour d, écrivez l'égalité (3/2)ᵖ = 2^q, chassez le dénominateur, puis regardez la parité des deux membres.",
              solution: [
                "a) (3/2)¹² = 3¹² ÷ 2¹² = 531 441 ÷ 4 096 ≈ 129,7.",
                "b) 2⁷ = 128. Douze quintes (≈ 129,7) sont un peu plus grandes que sept octaves (128) : elles sont très proches mais pas égales.",
                "c) (3/2)¹² ÷ 2⁷ = 3¹² ÷ (2¹² × 2⁷) = 3¹² ÷ 2¹⁹ = 531 441 ÷ 524 288 ≈ 1,0136.",
                "d) Supposons (3/2)ᵖ = 2^q avec p ≥ 1 et q entiers. En multipliant par 2ᵖ, on obtient 3ᵖ = 2^(p + q). Le membre de gauche est un produit de nombres impairs, donc impair ; le membre de droite est pair (p + q ≥ 1, puisque 3ᵖ > 1). Un nombre ne peut pas être à la fois pair et impair : l'égalité est impossible.",
                "Conclusion : le cycle des quintes ne se referme jamais exactement, et douze quintes dépassent sept octaves d'un comma d'environ 1,0136.",
              ],
            },
            {
              level: 3,
              statement: "On travaille dans la gamme tempérée, où le la₃ vaut 440 Hz. Données : 2^(1/12) ≈ 1,0595 ; 2^(1/4) ≈ 1,1892 ; 2^(7/12) ≈ 1,4983 ; √2 ≈ 1,4142. 1) Justifier que le rapport d'un demi-ton tempéré est 2^(1/12). 2) Le do₄ est situé 3 demi-tons au-dessus du la₃. Calculer sa fréquence au dixième de hertz. 3) Le mi₄ tempéré est situé 7 demi-tons au-dessus du la₃. Calculer sa fréquence, puis l'écart avec le mi₄ obtenu par une quinte juste (660 Hz). 4) Quel est le rapport de fréquences d'un intervalle de 6 demi-tons ? Quelle note obtient-on 6 demi-tons au-dessus du la₃, à 0,1 Hz près ? 5) Expliquer pourquoi les pianos sont accordés selon la gamme tempérée plutôt que selon la gamme de Pythagore.",
              hint: "Une note située n demi-tons au-dessus de f a pour fréquence f × 2^(n/12). Pour la question 4, remarquez que 6/12 = 1/2.",
              solution: [
                "1) L'octave est partagée en 12 demi-tons égaux de rapport r. Enchaîner 12 demi-tons revient à multiplier la fréquence par r¹², qui doit valoir 2 (une octave). Donc r¹² = 2 et r = 2^(1/12) ≈ 1,0595.",
                "2) f(do₄) = 440 × 2^(3/12) = 440 × 2^(1/4) ≈ 440 × 1,1892 ≈ 523,2 Hz.",
                "3) f(mi₄) = 440 × 2^(7/12) ≈ 440 × 1,4983 ≈ 659,3 Hz. Écart avec la quinte juste : 660 - 659,3 = 0,7 Hz, soit environ 0,1 % : la quinte tempérée est très légèrement plus petite que la quinte juste.",
                "4) 6 demi-tons : rapport 2^(6/12) = 2^(1/2) = √2 ≈ 1,4142. Fréquence : 440 × 1,4142 ≈ 622,2 Hz (c'est un ré dièse₄, ou mi bémol₄).",
                "5) Dans la gamme de Pythagore, les intervalles ne sont pas tous égaux et le cycle des quintes ne se referme pas : certaines tonalités sonnent faux. Dans la gamme tempérée, tous les demi-tons sont égaux, ce qui permet de jouer dans toutes les tonalités et de transposer sans réaccorder l'instrument, au prix de quintes très légèrement fausses, que l'oreille accepte.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces intervalles du plus petit au plus grand rapport de fréquences.",
            items: [
              "Le comma pythagoricien (≈ 1,014)",
              "Le demi-ton pythagoricien, 256/243",
              "Le demi-ton tempéré, 2^(1/12)",
              "Le ton pythagoricien, 9/8",
              "La quarte juste",
              "La quinte juste",
              "L'octave",
            ],
          },
          quiz: [
            {
              q: "Quel rapport de fréquences correspond à une octave ?",
              options: ["3/2", "2", "4/3", "12"],
              answer: 1,
              why: "Monter d'une octave double la fréquence : de 440 Hz (la₃) on passe à 880 Hz (la₄).",
            },
            {
              q: "Sur quel intervalle repose la construction de la gamme de Pythagore ?",
              options: ["L'octave seule", "La tierce majeure", "Le demi-ton tempéré", "La quinte"],
              answer: 3,
              why: "On monte de quinte en quinte (× 3/2) et l'on ramène chaque note dans l'octave en divisant par 2 si nécessaire.",
            },
            {
              q: "Une note a pour fréquence 300 Hz. Quelle est la fréquence de la note située une quinte juste au-dessus ?",
              options: ["450 Hz", "600 Hz", "400 Hz", "350 Hz"],
              answer: 0,
              why: "Une quinte multiplie la fréquence par 3/2 : 300 × 1,5 = 450 Hz. 600 Hz serait l'octave et 400 Hz la quarte.",
            },
            {
              q: "Pourquoi le cycle des quintes ne se referme-t-il jamais exactement ?",
              options: ["Parce que les instruments à cordes se désaccordent toujours en cours de jeu", "Parce qu'une puissance de 3 est impaire et une puissance de 2 paire", "Parce que l'oreille humaine ne distingue pas deux quintes successives"],
              answer: 1,
              why: "Refermer le cycle exigerait 3ᵖ = 2^(p + q), égalité impossible entre un nombre impair et un nombre pair.",
            },
            {
              q: "Dans la gamme tempérée, quel est le rapport de fréquences d'un demi-ton ?",
              options: ["2/12 ≈ 0,1667", "9/8 = 1,125", "1 + 1/12 ≈ 1,0833", "2^(1/12) ≈ 1,0595"],
              answer: 3,
              why: "Douze demi-tons égaux doivent donner une octave : r¹² = 2, donc r = 2^(1/12).",
            },
          ],
          trap: "Raisonner sur des différences de fréquences au lieu de rapports : monter d'une octave ne revient pas à ajouter 440 Hz mais à multiplier par 2. De même, enchaîner deux intervalles revient à multiplier leurs rapports, pas à les additionner.",
          method: "Pour construire une gamme pythagoricienne, présentez vos calculs dans un tableau à trois colonnes (note, fréquence après × 3/2, fréquence ramenée dans l'octave) et vérifiez à chaque ligne que la valeur finale est bien comprise entre f et 2f.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'numerisation-son',
          title: 'Le son, une information à coder',
          minutes: 30,
          objectives: [
            "Distinguer un signal analogique d'un signal numérique.",
            "Expliquer les deux étapes de la numérisation d'un son : l'échantillonnage et la quantification.",
            "Justifier le choix d'une fréquence d'échantillonnage au moins double de la plus haute fréquence du son.",
            "Calculer le débit binaire et la taille d'un fichier audio, et expliquer l'intérêt de la compression.",
          ],
          course: [
            {
              heading: "Du signal analogique au signal numérique",
              paragraphs: [
                "Un microphone convertit les variations de pression de l'air en une tension électrique qui varie de la même façon, de manière continue : c'est un signal analogique. Il peut prendre une infinité de valeurs, à chaque instant. Il se dégrade quand on le copie ou le transmet, car le moindre parasite s'y ajoute.",
                "Un signal numérique est une suite finie de nombres, écrits en binaire avec des 0 et des 1 (les bits). Il se stocke, se copie et se transmet sans perte, et peut être traité par un ordinateur. Un octet vaut 8 bits ; on utilise les multiples kilo (10³), méga (10⁶) et giga (10⁹), par exemple 1 Mo = 10⁶ octets.",
                "Numériser un son, c'est transformer le signal analogique en une suite de nombres. Cela se fait en deux étapes, réalisées par un convertisseur analogique-numérique : l'échantillonnage, qui découpe le temps, et la quantification, qui découpe les valeurs de la tension.",
              ],
              box: { label: "Définition", text: "Signal analogique : grandeur qui varie de façon continue dans le temps. Signal numérique : suite de nombres codés en binaire. 1 octet = 8 bits." },
            },
            {
              heading: "L'échantillonnage : découper le temps",
              paragraphs: [
                "Échantillonner, c'est mesurer la valeur du signal à intervalles de temps réguliers. La durée entre deux mesures est la période d'échantillonnage Tₑ ; le nombre de mesures (d'échantillons) par seconde est la fréquence d'échantillonnage fₑ = 1 ÷ Tₑ, en hertz. Entre deux échantillons, l'information est perdue : plus fₑ est grande, plus la numérisation est fidèle.",
                "Pour reproduire fidèlement un son, il faut au moins deux échantillons par période de sa composante la plus aiguë : la fréquence d'échantillonnage doit être au moins le double de la plus grande fréquence contenue dans le son (critère de Shannon-Nyquist). Si ce critère n'est pas respecté, les composantes trop aiguës sont mal reconstituées et apparaissent à des fréquences fausses : c'est le repliement de spectre.",
                "Comme l'oreille humaine perçoit les sons jusqu'à 20 kHz environ, le CD audio utilise fₑ = 44,1 kHz, un peu plus que 2 × 20 kHz. La téléphonie classique, qui ne transmet que la voix (jusqu'à environ 3,4 kHz), se contente de 8 kHz ; les enregistrements professionnels utilisent souvent 48 kHz ou 96 kHz.",
              ],
              box: { label: "Règle", text: "Critère de Shannon-Nyquist : fₑ ≥ 2 × fmax, où fmax est la plus grande fréquence du son à numériser. Exemple : CD audio, fₑ = 44,1 kHz pour des sons jusqu'à 20 kHz." },
            },
            {
              heading: "La quantification : découper les valeurs",
              paragraphs: [
                "Chaque échantillon est ensuite arrondi à l'une des valeurs permises par le codage, puis écrit en binaire. Avec n bits par échantillon, on dispose de 2ⁿ valeurs possibles : 2⁸ = 256 niveaux avec 8 bits, 2¹⁶ = 65 536 niveaux avec 16 bits (cas du CD), 2²⁴ ≈ 16,8 millions avec 24 bits.",
                "Le pas de quantification est l'écart entre deux niveaux voisins ; il vaut environ la plage de tension mesurée divisée par 2ⁿ. L'arrondi de chaque échantillon au niveau le plus proche crée une petite erreur, entendue comme un léger bruit de fond. Plus n est grand, plus le pas est fin et plus la numérisation est fidèle.",
                "En résumé, une numérisation est d'autant plus fidèle que la fréquence d'échantillonnage est élevée et la quantification fine. Mais chaque amélioration augmente le nombre de bits à stocker : il faut toujours trouver un compromis entre qualité et taille du fichier.",
              ],
              box: { label: "Formule", text: "Nombre de niveaux de quantification avec n bits : N = 2ⁿ. Pas de quantification ≈ plage de mesure ÷ 2ⁿ." },
            },
            {
              heading: "Débit binaire, taille et compression",
              paragraphs: [
                "Le débit binaire D est le nombre de bits produits par seconde d'enregistrement. Il vaut D = fₑ × n × c, où c est le nombre de voies (1 en mono, 2 en stéréo). Pour le CD : D = 44 100 × 16 × 2 = 1 411 200 bit/s, soit environ 1,4 Mbit/s. La taille d'un fichier non compressé vaut D × durée, en bits ; on divise par 8 pour l'obtenir en octets. Une minute de CD occupe ainsi 1 411 200 × 60 ÷ 8 = 10 584 000 octets, environ 10,6 Mo.",
                "Pour réduire la taille des fichiers, on les compresse. Une compression sans perte (format FLAC par exemple) réécrit les données de façon plus économe et permet de retrouver exactement le fichier d'origine. Une compression avec perte (formats MP3 ou AAC) supprime en plus des informations jugées peu audibles : composantes masquées par des sons plus forts, fréquences auxquelles l'oreille est peu sensible. Le fichier d'origine ne peut alors plus être reconstitué exactement.",
                "On caractérise une compression par son taux de compression, quotient de la taille initiale par la taille compressée. Un MP3 à 128 kbit/s issu d'un CD a un taux d'environ 1 411 ÷ 128 ≈ 11. C'est ce qui a rendu possibles le stockage de milliers de morceaux sur un baladeur et l'écoute en ligne.",
              ],
              box: { label: "Formule", text: "Débit binaire : D = fₑ × n × c (bit/s). Taille en bits = D × durée (en s) ; taille en octets = taille en bits ÷ 8. Taux de compression = taille initiale ÷ taille compressée." },
            },
          ],
          keyPoints: [
            "Numériser = échantillonner (découper le temps) puis quantifier (découper les valeurs).",
            "fₑ = 1 ÷ Tₑ ; il faut fₑ ≥ 2 × fmax (critère de Shannon-Nyquist). CD : 44,1 kHz.",
            "n bits par échantillon donnent 2ⁿ niveaux : 65 536 niveaux pour 16 bits.",
            "Débit D = fₑ × n × c ; taille = D × durée, à diviser par 8 pour l'avoir en octets.",
            "Compression sans perte : retour exact au fichier d'origine. Avec perte (MP3) : suppression d'informations peu audibles.",
            "Meilleure qualité = fichier plus lourd : la numérisation est toujours un compromis.",
          ],
          example: {
            statement: "Un studio enregistre une minute de son en mono, avec une fréquence d'échantillonnage de 48 kHz et une quantification sur 24 bits. a) Combien d'échantillons sont enregistrés ? b) Calculer le débit binaire. c) Calculer la taille du fichier non compressé en mégaoctets (1 Mo = 10⁶ octets).",
            solution: [
              "a) 48 kHz signifie 48 000 échantillons par seconde ; en 60 s : 48 000 × 60 = 2 880 000 échantillons.",
              "b) D = fₑ × n × c = 48 000 × 24 × 1 = 1 152 000 bit/s, soit environ 1,15 Mbit/s.",
              "c) Taille en bits : 1 152 000 × 60 = 69 120 000 bits.",
              "Taille en octets : 69 120 000 ÷ 8 = 8 640 000 octets = 8,64 Mo.",
              "Réponse : 2 880 000 échantillons, un débit d'environ 1,15 Mbit/s et un fichier de 8,64 Mo.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un son est numérisé avec une fréquence d'échantillonnage de 22,05 kHz et une quantification sur 8 bits. a) Calculer la période d'échantillonnage, en microsecondes, arrondie à l'unité. b) Combien de niveaux de quantification sont disponibles ? Et avec 12 bits ? c) Quelle est la plus grande fréquence que cette numérisation peut reproduire fidèlement ?",
              hint: "Tₑ = 1 ÷ fₑ, avec fₑ en hertz. Pour la question c, appliquez le critère de Shannon-Nyquist à l'envers : fmax = fₑ ÷ 2.",
              solution: [
                "a) Tₑ = 1 ÷ 22 050 ≈ 4,54 × 10⁻⁵ s ≈ 45 µs.",
                "b) Avec 8 bits : 2⁸ = 256 niveaux. Avec 12 bits : 2¹² = 4 096 niveaux.",
                "c) Il faut fₑ ≥ 2 × fmax, donc fmax ≤ fₑ ÷ 2 = 22 050 ÷ 2 = 11 025 Hz.",
                "Réponse : Tₑ ≈ 45 µs ; 256 niveaux (4 096 avec 12 bits) ; fréquences jusqu'à environ 11 kHz.",
              ],
            },
            {
              level: 2,
              statement: "a) Un enregistrement de violon contient des harmoniques jusqu'à 15 kHz. Parmi les fréquences d'échantillonnage 8 kHz, 22,05 kHz et 44,1 kHz, lesquelles conviennent ? Justifier. b) Un biologiste veut enregistrer les cris d'une chauve-souris, qui émet des ultrasons jusqu'à 60 kHz. Quelle fréquence d'échantillonnage minimale doit-il choisir ? Un enregistreur réglé sur 44,1 kHz convient-il ? c) Expliquer pourquoi il serait inutile, pour l'écoute humaine, de numériser la musique à 1 MHz.",
              hint: "Calculez d'abord 2 × fmax pour chaque situation, puis comparez aux fréquences proposées.",
              solution: [
                "a) Il faut fₑ ≥ 2 × 15 kHz = 30 kHz. Seule 44,1 kHz convient ; avec 8 kHz ou 22,05 kHz, les harmoniques aigus seraient mal reproduits (repliement de spectre).",
                "b) Il faut fₑ ≥ 2 × 60 kHz = 120 kHz. Un enregistreur réglé sur 44,1 kHz ne convient pas : il ne reproduit correctement que les fréquences inférieures à 22,05 kHz.",
                "c) L'oreille humaine ne perçoit pas les sons au-delà d'environ 20 kHz : une fréquence d'échantillonnage d'environ 40 kHz suffit. Choisir 1 MHz multiplierait la taille des fichiers par plus de 20 sans aucun gain audible.",
              ],
            },
            {
              level: 3,
              statement: "Un podcast de 45 minutes est enregistré en mono, avec fₑ = 44,1 kHz et une quantification sur 16 bits. 1) Calculer son débit binaire. 2) Calculer la taille du fichier non compressé, en mégaoctets (1 Mo = 10⁶ octets). 3) On le compresse au format MP3 avec un débit de 64 kbit/s. Calculer la taille du fichier compressé et le taux de compression. 4) Calculer la durée de téléchargement de chacun des deux fichiers avec une connexion de 8 Mbit/s. 5) La compression MP3 est-elle avec ou sans perte ? Sur quoi s'appuie-t-elle pour que la perte soit peu audible ?",
              hint: "Exprimez la durée en secondes. Pour le téléchargement, divisez la taille en bits par le débit de la connexion en bit/s.",
              solution: [
                "1) D = 44 100 × 16 × 1 = 705 600 bit/s.",
                "2) Durée : 45 × 60 = 2 700 s. Taille : 705 600 × 2 700 = 1 905 120 000 bits, soit 1 905 120 000 ÷ 8 = 238 140 000 octets ≈ 238 Mo.",
                "3) Taille compressée : 64 000 × 2 700 = 172 800 000 bits = 21 600 000 octets = 21,6 Mo. Taux de compression : 705 600 ÷ 64 000 ≈ 11.",
                "4) Fichier non compressé : 1 905 120 000 ÷ 8 000 000 ≈ 238 s, soit environ 4 min. Fichier MP3 : 172 800 000 ÷ 8 000 000 = 21,6 s.",
                "5) La compression MP3 est avec perte : le fichier d'origine ne peut pas être reconstitué exactement. Elle supprime des informations peu ou pas audibles, en s'appuyant sur le fonctionnement de l'oreille : sons masqués par des sons plus forts de fréquence voisine, fréquences auxquelles l'oreille est peu sensible.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Décidez pour chaque affirmation.",
            statements: [
              { text: "Un signal numérique peut être copié sans perte.", true: true, why: "C'est une suite de nombres : une copie reproduit exactement les mêmes 0 et 1." },
              { text: "Pour numériser un son jusqu'à 20 kHz, une fréquence d'échantillonnage de 20 kHz suffit.", true: false, why: "Il faut au moins le double de la plus grande fréquence, soit 40 kHz ; le CD utilise 44,1 kHz." },
              { text: "Passer de 8 à 16 bits double le nombre de niveaux de quantification.", true: false, why: "On passe de 2⁸ = 256 à 2¹⁶ = 65 536 niveaux : le nombre est multiplié par 256." },
              { text: "Un fichier stéréo non compressé est deux fois plus lourd que le même fichier en mono.", true: true, why: "Le débit D = fₑ × n × c est proportionnel au nombre de voies c." },
              { text: "Un MP3 permet de retrouver exactement le fichier d'origine.", true: false, why: "Le MP3 est une compression avec perte : des informations jugées peu audibles sont définitivement supprimées." },
              { text: "Augmenter la fréquence d'échantillonnage améliore la fidélité mais alourdit le fichier.", true: true, why: "On enregistre plus d'échantillons par seconde, donc plus de bits." },
            ],
          },
          quiz: [
            {
              q: "Que signifie échantillonner un signal ?",
              options: ["Arrondir chaque mesure à l'un des niveaux permis par le codage binaire", "Mesurer sa valeur à intervalles de temps réguliers", "Supprimer les fréquences inaudibles", "Amplifier le signal avant de l'enregistrer"],
              answer: 1,
              why: "L'échantillonnage découpe le temps : on relève la valeur du signal toutes les Tₑ secondes. Arrondir les valeurs, c'est la quantification.",
            },
            {
              q: "Un son contient des fréquences jusqu'à 12 kHz. Quelle fréquence d'échantillonnage minimale faut-il ?",
              options: ["6 kHz", "12 kHz", "24 kHz", "48 kHz"],
              answer: 2,
              why: "Le critère de Shannon-Nyquist impose fₑ ≥ 2 × fmax = 2 × 12 = 24 kHz.",
            },
            {
              q: "Combien de niveaux permet une quantification sur 16 bits ?",
              options: ["1 048 576", "256", "65 536", "16 × 2 = 32"],
              answer: 2,
              why: "Avec n bits, on code 2ⁿ valeurs : 2¹⁶ = 65 536. 256 correspond à 8 bits et 1 048 576 à 20 bits.",
            },
            {
              q: "Quel est le débit binaire d'un son stéréo échantillonné à 44,1 kHz et quantifié sur 16 bits ?",
              options: ["environ 1,4 Mbit/s", "environ 0,7 Mbit/s", "environ 44 kbit/s", "environ 2,8 Mbit/s"],
              answer: 0,
              why: "D = 44 100 × 16 × 2 = 1 411 200 bit/s, soit environ 1,4 Mbit/s. 0,7 Mbit/s correspondrait au mono.",
            },
            {
              q: "Que fait une compression avec perte comme le MP3 ?",
              options: ["Elle supprime des informations jugées peu audibles", "Elle augmente la fréquence d'échantillonnage pour gagner en fidélité", "Elle permet de retrouver exactement le fichier d'origine", "Elle double le nombre de bits"],
              answer: 0,
              why: "Le MP3 s'appuie sur les limites de l'oreille pour supprimer des informations ; le fichier d'origine ne peut plus être reconstitué exactement.",
            },
          ],
          trap: "Oublier de diviser par 8 pour passer des bits aux octets, ou oublier de multiplier par 2 pour un enregistrement stéréo. Autre confusion fréquente : croire que doubler le nombre de bits double le nombre de niveaux, alors qu'il l'élève au carré.",
          method: "Pour un calcul de taille de fichier, écrivez toujours la chaîne complète avec les unités : échantillons par seconde × bits par échantillon × voies × secondes = bits, puis ÷ 8 = octets, puis ÷ 10⁶ = Mo. Une unité qui ne tombe pas juste signale une étape oubliée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'entendre-musique',
          title: 'Entendre la musique : l’oreille et le cerveau',
          minutes: 30,
          objectives: [
            "Décrire le trajet du son à travers l'oreille externe, l'oreille moyenne et l'oreille interne.",
            "Expliquer la transformation du signal sonore en message nerveux par les cellules ciliées de la cochlée.",
            "Identifier le rôle du cerveau, et notamment des aires auditives, dans la perception et l'interprétation des sons.",
            "Évaluer les risques d'une exposition sonore et justifier les comportements de protection.",
          ],
          course: [
            {
              heading: "Oreille externe et oreille moyenne : capter et transmettre",
              paragraphs: [
                "L'oreille externe comprend le pavillon, qui capte les sons, et le conduit auditif, qui les dirige vers le tympan. Le tympan est une fine membrane qui vibre sous l'effet des variations de pression de l'air, à la même fréquence que le son reçu.",
                "L'oreille moyenne est une petite cavité remplie d'air, située derrière le tympan. Elle contient une chaîne de trois osselets, les plus petits os du corps : le marteau, accolé au tympan, l'enclume et l'étrier. Ils transmettent les vibrations du tympan à une membrane plus petite, la fenêtre ovale, qui ferme l'oreille interne. Comme la surface du tympan est nettement plus grande que celle de la fenêtre ovale, la pression est amplifiée lors de cette transmission.",
                "Cette amplification est indispensable : l'oreille interne est remplie de liquide, et sans elle la plus grande partie de l'énergie sonore serait réfléchie à la frontière entre l'air et le liquide. La trompe d'Eustache, qui relie l'oreille moyenne au fond de la gorge, équilibre la pression de part et d'autre du tympan (c'est elle qui s'ouvre quand on avale en avion).",
              ],
            },
            {
              heading: "L'oreille interne : du son au message nerveux",
              paragraphs: [
                "L'oreille interne contient la cochlée, un tube enroulé en spirale et rempli de liquide. Les vibrations de la fenêtre ovale mettent ce liquide en mouvement, ce qui fait onduler une membrane qui parcourt toute la cochlée, la membrane basilaire. Sur cette membrane reposent les cellules sensorielles de l'audition, les cellules ciliées, environ 15 000 par oreille, surmontées de touffes de cils (stéréocils).",
                "Quand la membrane vibre, les cils des cellules ciliées s'inclinent. Cette déformation provoque une modification électrique de la cellule, qui libère alors un neurotransmetteur au contact des fibres du nerf auditif. Celles-ci produisent un message nerveux, codé par la fréquence des potentiels d'action. C'est la transduction : un signal mécanique est converti en signal électrique.",
                "Chaque région de la cochlée répond à une gamme de fréquences : la base, près de la fenêtre ovale, réagit aux sons aigus, et le sommet de la spirale aux sons graves. Cette organisation, appelée tonotopie, permet de coder la hauteur des sons. Chez l'être humain, les cellules ciliées ne se renouvellent pas : celles qui sont détruites le sont définitivement.",
              ],
              box: { label: "À retenir", text: "Trajet du son : pavillon, conduit auditif, tympan, osselets (marteau, enclume, étrier), fenêtre ovale, liquide de la cochlée, cellules ciliées, nerf auditif, cerveau. Les cellules ciliées convertissent la vibration en message nerveux ; elles ne se renouvellent pas." },
            },
            {
              heading: "Le cerveau : percevoir et interpréter",
              paragraphs: [
                "Le message nerveux est conduit par le nerf auditif jusqu'au cerveau, en passant par plusieurs relais (tronc cérébral, thalamus). Il aboutit dans les aires auditives du cortex cérébral, situées dans les lobes temporaux. L'aire auditive primaire est elle aussi organisée selon les fréquences : elle analyse les caractéristiques élémentaires du son (hauteur, intensité, durée).",
                "Des aires voisines, dites secondaires ou associatives, intègrent ces informations : elles reconnaissent une voix, une mélodie ou un instrument, en les comparant aux souvenirs stockés en mémoire. L'imagerie cérébrale (IRM fonctionnelle) montre qu'écouter de la musique active aussi des régions liées aux émotions, à la mémoire, au mouvement et au circuit de la récompense, ce qui explique le plaisir qu'elle procure.",
                "La perception n'est donc pas un simple enregistrement : c'est une construction du cerveau, qui dépend de l'expérience. Le cerveau est plastique, c'est-à-dire qu'il se modifie avec l'apprentissage : chez les musiciens entraînés, on observe des différences dans les aires auditives et motrices. C'est aussi pour cela que deux personnes n'entendent pas la même musique de la même façon.",
              ],
            },
            {
              heading: "Protéger son audition",
              paragraphs: [
                "L'oreille humaine perçoit les sons de 20 Hz à 20 kHz environ ; ce domaine se réduit avec l'âge, surtout vers les aigus (presbyacousie). Sa sensibilité dépend de la fréquence : elle est maximale entre environ 2 et 5 kHz. Le seuil d'audibilité correspond à 0 dB (à 1 000 Hz) et le seuil de douleur à environ 120 dB.",
                "Une exposition à des niveaux élevés détruit des cellules ciliées : les lésions sont irréversibles et peuvent entraîner une surdité partielle et des acouphènes (sifflements ou bourdonnements perçus sans source extérieure). Le risque dépend à la fois du niveau et de la durée d'exposition. On considère qu'il apparaît pour une exposition prolongée vers 80 dB ; chaque augmentation de 3 dB double l'intensité, donc la durée d'exposition tolérable est divisée par 2.",
                "Pour se protéger : réduire le volume des écouteurs, limiter la durée d'écoute et faire des pauses, s'éloigner des enceintes (loin d'une source, doubler la distance diminue le niveau d'environ 6 dB), porter des bouchons d'oreille en concert. En France, la réglementation (décret du 7 août 2017) limite à 102 dB(A), en moyenne sur 15 minutes, le niveau sonore dans les lieux qui diffusent de la musique amplifiée.",
              ],
              box: { label: "Repère", text: "Domaine audible : 20 Hz à 20 kHz. Seuil d'audibilité : 0 dB ; danger pour une exposition prolongée dès 80 dB environ ; seuil de douleur : 120 dB environ. + 3 dB : intensité doublée, durée d'exposition tolérable divisée par 2." },
            },
          ],
          keyPoints: [
            "Oreille externe (pavillon, conduit, tympan) : capter ; oreille moyenne (osselets) : transmettre et amplifier.",
            "Oreille interne : dans la cochlée, les cellules ciliées convertissent la vibration en message nerveux (transduction).",
            "Tonotopie : base de la cochlée pour les aigus, sommet pour les graves.",
            "Le nerf auditif conduit le message aux aires auditives du cortex (lobes temporaux), qui analysent et interprètent le son.",
            "Les cellules ciliées détruites ne se renouvellent pas : les lésions auditives sont irréversibles.",
            "Le risque dépend du niveau et de la durée : + 3 dB divise par 2 la durée d'exposition tolérable.",
          ],
          example: {
            statement: "On admet qu'une exposition de 8 heures à 80 dB constitue la limite à ne pas dépasser, et que chaque augmentation de 3 dB divise par 2 la durée d'exposition tolérable (règle de l'égale énergie). Un spectateur assiste à un concert où le niveau sonore moyen est de 98 dB. Au bout de combien de temps atteint-il la même dose sonore que 8 heures à 80 dB ? Que lui conseiller ?",
            solution: [
              "Écart de niveau : 98 - 80 = 18 dB, soit 18 ÷ 3 = 6 augmentations de 3 dB.",
              "Chaque augmentation de 3 dB double l'intensité : l'intensité à 98 dB est donc 2⁶ = 64 fois plus grande qu'à 80 dB.",
              "Pour recevoir la même dose, la durée doit être divisée par 64 : 8 h ÷ 64 = 480 min ÷ 64 = 7,5 min.",
              "Le spectateur atteint donc la limite au bout de 7,5 minutes environ, bien avant la fin du concert.",
              "Conseils : porter des bouchons d'oreille (qui réduisent le niveau reçu), s'éloigner des enceintes, faire des pauses au calme. Réponse : environ 7,5 minutes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remettre dans l'ordre du trajet du son les éléments suivants, puis indiquer le rôle de chacun en une phrase : cochlée et cellules ciliées ; tympan ; nerf auditif ; pavillon et conduit auditif ; osselets ; aires auditives du cortex.",
              hint: "Partez de l'extérieur de la tête et allez vers le cerveau : oreille externe, moyenne, interne, puis voies nerveuses.",
              solution: [
                "1. Pavillon et conduit auditif : captent le son et le dirigent vers le tympan.",
                "2. Tympan : membrane qui vibre sous l'effet des variations de pression de l'air.",
                "3. Osselets (marteau, enclume, étrier) : transmettent les vibrations à la fenêtre ovale en amplifiant la pression.",
                "4. Cochlée et cellules ciliées : le liquide de la cochlée vibre, les cils s'inclinent et les cellules ciliées convertissent la vibration en message nerveux.",
                "5. Nerf auditif : conduit le message nerveux vers le cerveau.",
                "6. Aires auditives du cortex : analysent le message et construisent la perception du son (hauteur, timbre, reconnaissance).",
              ],
            },
            {
              level: 2,
              statement: "On utilise la règle : 8 heures à 80 dB constituent la limite, et chaque augmentation de 3 dB divise par 2 la durée tolérable. Données : log 2 ≈ 0,30. a) Une personne écoute de la musique au casque à 89 dB. Quelle durée d'écoute quotidienne ne doit-elle pas dépasser ? b) Deux enceintes identiques produisent chacune 85 dB en un point. Quel niveau mesure-t-on en ce point quand elles fonctionnent ensemble ? c) Une enceinte produit 100 dB à 2 m. Sachant que, loin de la source, doubler la distance fait perdre environ 6 dB, quel niveau perçoit-on à 4 m, puis à 8 m ?",
              hint: "Comptez le nombre de paliers de 3 dB au-dessus de 80 dB. Pour b, deux sources identiques doublent l'intensité.",
              solution: [
                "a) 89 - 80 = 9 dB, soit 3 paliers de 3 dB : la durée est divisée par 2³ = 8. Durée maximale : 8 h ÷ 8 = 1 h par jour.",
                "b) L'intensité double, donc le niveau augmente de 10 log 2 ≈ 3 dB : on mesure environ 88 dB, et non 170 dB.",
                "c) À 4 m (distance doublée) : 100 - 6 = 94 dB. À 8 m (distance encore doublée) : 94 - 6 = 88 dB.",
                "Réponse : 1 h ; environ 88 dB ; 94 dB à 4 m et 88 dB à 8 m. S'éloigner des enceintes est donc une protection efficace.",
              ],
            },
            {
              level: 3,
              statement: "Étude de document (données fictives). Léa, 20 ans, fréquente souvent les concerts sans protection. Après un concert, elle perçoit un sifflement persistant. Son audiogramme montre une audition normale à 250 Hz, 500 Hz et 1 000 Hz, mais une perte de 35 dB autour de 4 000 Hz. 1) Nommer le symptôme qu'elle décrit. 2) Expliquer, à l'échelle cellulaire, l'origine de sa perte d'audition. 3) Dans quelle région de la cochlée les lésions se situent-elles plutôt : près de la base ou près du sommet ? Justifier. 4) Pourquoi cette perte risque-t-elle d'être définitive ? 5) Proposer trois mesures de prévention argumentées.",
              hint: "Rappelez-vous l'organisation tonotopique de la cochlée et ce que deviennent les cellules ciliées détruites chez l'être humain.",
              solution: [
                "1) Un sifflement perçu sans source extérieure est un acouphène.",
                "2) Une exposition à des niveaux sonores élevés endommage les cils des cellules ciliées de la cochlée, voire détruit ces cellules. Elles ne peuvent plus convertir la vibration en message nerveux pour les fréquences concernées : les sons correspondants doivent être plus forts pour être perçus.",
                "3) La cochlée est organisée de façon tonotopique : les sons aigus sont codés près de la base, les graves près du sommet. 4 000 Hz étant une fréquence aiguë, les lésions se situent plutôt du côté de la base. Les fréquences graves (250 Hz à 1 000 Hz), codées vers le sommet, sont épargnées.",
                "4) Chez l'être humain, les cellules ciliées ne se renouvellent pas : celles qui sont détruites ne sont pas remplacées et la perte est irréversible.",
                "5) Porter des bouchons d'oreille en concert, car ils réduisent le niveau reçu ; s'éloigner des enceintes, car le niveau diminue avec la distance ; limiter la durée d'exposition et faire des pauses au calme, car le risque dépend de la dose reçue (niveau et durée). Il est aussi conseillé de consulter un médecin si l'acouphène persiste.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque structure à son rôle dans l'audition.",
            pairs: [
              { left: "Tympan", right: "Membrane mise en vibration par les variations de pression de l'air" },
              { left: "Osselets", right: "Transmettent la vibration à l'oreille interne en amplifiant la pression" },
              { left: "Cochlée", right: "Tube spiralé rempli de liquide, organisé selon les fréquences" },
              { left: "Cellules ciliées", right: "Convertissent la vibration en message nerveux et ne se renouvellent pas" },
              { left: "Nerf auditif", right: "Conduit le message nerveux jusqu'au cerveau" },
              { left: "Aires auditives", right: "Régions du cortex temporal qui analysent et interprètent les sons" },
            ],
          },
          quiz: [
            {
              q: "Quelles cellules convertissent la vibration sonore en message nerveux ?",
              options: ["Les cellules du tympan, qui vibrent avec l'air extérieur", "Les cellules ciliées de la cochlée", "Les neurones du cortex auditif", "Les cellules des osselets"],
              answer: 1,
              why: "Dans la cochlée, l'inclinaison des cils des cellules ciliées déclenche un message nerveux transmis au nerf auditif.",
            },
            {
              q: "Dans quelle partie du cerveau se trouvent les aires auditives ?",
              options: ["Le lobe occipital", "Le lobe frontal", "Le cervelet", "Le lobe temporal"],
              answer: 3,
              why: "Les aires auditives occupent une partie des lobes temporaux, sur les côtés du cerveau ; le lobe occipital traite surtout la vision.",
            },
            {
              q: "Pourquoi une surdité due au bruit est-elle généralement irréversible ?",
              options: ["Parce que le tympan ne cicatrise jamais", "Parce que les osselets se soudent", "Parce que les cellules ciliées détruites ne se renouvellent pas", "Parce que le nerf auditif se rompt définitivement à chaque exposition au bruit"],
              answer: 2,
              why: "Chez l'être humain, les cellules ciliées détruites ne sont pas remplacées : la perte correspondante est définitive.",
            },
            {
              q: "La durée d'exposition tolérable à 83 dB est de 4 heures. Quelle est-elle à 86 dB ?",
              options: ["2 heures", "1 heure", "3 heures", "8 heures"],
              answer: 0,
              why: "3 dB de plus doublent l'intensité : la durée tolérable est divisée par 2, soit 2 heures.",
            },
            {
              q: "Où les sons aigus sont-ils codés dans la cochlée ?",
              options: ["Au sommet de la spirale", "Près de la base de la spirale", "Uniformément sur toute la longueur", "Dans le liquide de l'oreille moyenne"],
              answer: 1,
              why: "La cochlée est tonotopique : la base répond aux aigus et le sommet aux graves.",
            },
          ],
          trap: "Croire que l'oreille se contente de transmettre le son au cerveau comme un câble : la cochlée code déjà la hauteur (tonotopie) et c'est le cerveau qui construit la perception. Autre erreur : penser qu'une fatigue auditive après un concert est sans conséquence, alors que des cellules ciliées ont pu être détruites définitivement.",
          method: "Pour réviser le trajet du son, dessinez un schéma de l'oreille de mémoire, légendez chaque structure, puis écrivez à côté la nature du signal à chaque étape : onde de pression dans l'air, vibration mécanique, vibration du liquide, message nerveux.",
        },
      ],
    },
    /* ==================================================================== */
    /* MATHÉMATIQUES : ANALYSER L'INFORMATION CHIFFRÉE                        */
    /* ==================================================================== */
    {
      id: 'information-chiffree',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'proportions-evolutions',
          title: 'Proportions, taux d’évolution et coefficients multiplicateurs',
          minutes: 30,
          objectives: [
            "Calculer et interpréter une proportion, y compris la proportion d'une sous-population dans une population (proportion de proportion).",
            "Calculer un taux d'évolution et le coefficient multiplicateur associé, et passer de l'un à l'autre.",
            "Calculer le taux d'évolution global d'évolutions successives et le taux d'évolution réciproque.",
            "Distinguer une variation exprimée en pourcentage d'une variation exprimée en points de pourcentage.",
          ],
          course: [
            {
              heading: "Proportions et proportion de proportion",
              paragraphs: [
                "Soit une population E d'effectif n(E) et une partie A de cette population, d'effectif n(A). La proportion de A dans E est p = n(A) ÷ n(E). C'est un nombre compris entre 0 et 1, que l'on peut écrire sous forme décimale, fractionnaire ou en pourcentage : dans un lycée de 1 200 élèves dont 300 sont internes, la proportion d'internes est 300 ÷ 1 200 = 0,25 = 1/4 = 25 %. Inversement, l'effectif se retrouve par n(A) = p × n(E).",
                "Lorsqu'une sous-population A est incluse dans une population B, elle-même incluse dans E, les proportions se multiplient : la proportion de A dans E est égale à la proportion de A dans B multipliée par la proportion de B dans E. Par exemple, si 60 % des élèves d'un lycée sont des filles et si 25 % de ces filles pratiquent le rugby, la proportion de rugbywomen parmi tous les élèves est 0,60 × 0,25 = 0,15, soit 15 %.",
                "Attention : « 25 % des filles » et « 25 % des élèves » ne désignent pas la même chose. Avant tout calcul, identifiez toujours la population de référence, c'est-à-dire l'ensemble dont on prend une part.",
              ],
              box: { label: "Propriété", text: "Proportion : p = n(A) ÷ n(E), avec 0 ≤ p ≤ 1. Si A ⊂ B ⊂ E, alors la proportion de A dans E est égale au produit de la proportion de A dans B par la proportion de B dans E." },
            },
            {
              heading: "Taux d'évolution et coefficient multiplicateur",
              paragraphs: [
                "Une grandeur passe d'une valeur de départ V₀ (strictement positive) à une valeur d'arrivée V₁. La variation absolue est V₁ - V₀, exprimée dans l'unité de la grandeur. Le taux d'évolution, ou variation relative, est t = (V₁ - V₀) ÷ V₀ ; il est sans unité et s'exprime souvent en pourcentage. Il est positif pour une hausse et négatif pour une baisse.",
                "Le coefficient multiplicateur est le nombre CM = V₁ ÷ V₀ par lequel il faut multiplier la valeur de départ pour obtenir la valeur d'arrivée. On a CM = 1 + t, donc V₁ = V₀ × (1 + t). Une hausse de 8 % correspond à CM = 1,08 ; une baisse de 15 % correspond à CM = 1 - 0,15 = 0,85. Inversement, CM = 0,92 traduit une baisse de 8 % et CM = 2,5 une hausse de 150 %.",
                "Un CM supérieur à 1 traduit une hausse, un CM compris entre 0 et 1 une baisse. Le coefficient multiplicateur est l'outil le plus efficace : il permet de calculer une valeur d'arrivée en une seule multiplication, et de retrouver une valeur de départ par une division : V₀ = V₁ ÷ CM.",
              ],
              box: { label: "Formule", text: "Taux d'évolution : t = (V₁ - V₀) ÷ V₀. Coefficient multiplicateur : CM = V₁ ÷ V₀ = 1 + t. Hausse de t % : CM = 1 + t/100 ; baisse de t % : CM = 1 - t/100." },
            },
            {
              heading: "Évolutions successives",
              paragraphs: [
                "Quand une grandeur subit plusieurs évolutions successives, de coefficients CM₁, CM₂, ..., CMₙ, la valeur finale s'obtient en multipliant la valeur initiale par chacun d'eux. Le coefficient multiplicateur global est donc le produit CM = CM₁ × CM₂ × ... × CMₙ, et le taux d'évolution global vaut CM - 1.",
                "Les taux ne s'additionnent pas. Deux hausses successives de 10 % donnent CM = 1,1 × 1,1 = 1,21, soit une hausse globale de 21 % et non de 20 %. Une hausse de 20 % suivie d'une baisse de 20 % donne CM = 1,2 × 0,8 = 0,96 : la grandeur a globalement baissé de 4 %, elle ne revient pas à sa valeur de départ. La raison est que la seconde évolution s'applique à une valeur qui a déjà changé.",
              ],
              box: { label: "Règle", text: "Le coefficient multiplicateur global d'évolutions successives est le produit des coefficients multiplicateurs. Taux global = produit des CM - 1. On n'additionne jamais les taux." },
            },
            {
              heading: "Taux réciproque et points de pourcentage",
              paragraphs: [
                "Le taux d'évolution réciproque est le taux qui permet de revenir de la valeur d'arrivée à la valeur de départ. Son coefficient multiplicateur est l'inverse 1 ÷ CM. Après une hausse de 25 % (CM = 1,25), il faut appliquer CM' = 1 ÷ 1,25 = 0,8, soit une baisse de 20 %, pour revenir au prix initial. Après une baisse de 50 % (CM = 0,5), il faut une hausse de 100 % (CM' = 2).",
                "Lorsque la grandeur étudiée est elle-même un pourcentage (un taux de chômage, un taux d'intérêt, une part de marché), il faut distinguer deux façons de décrire son évolution. Si un taux passe de 10 % à 12 %, il a augmenté de 2 points de pourcentage (variation absolue, 12 - 10), mais son taux d'évolution est (12 - 10) ÷ 10 = 0,2, soit une hausse de 20 % (variation relative). Les médias confondent souvent les deux.",
              ],
              box: { label: "À retenir", text: "CM réciproque = 1 ÷ CM. Une hausse de t % n'est pas compensée par une baisse de t %. Un écart entre deux pourcentages s'exprime en points ; un taux d'évolution s'exprime en %." },
            },
          ],
          keyPoints: [
            "Proportion p = n(A) ÷ n(E) ; effectif n(A) = p × n(E). Proportions emboîtées : on multiplie.",
            "Taux d'évolution t = (V₁ - V₀) ÷ V₀ ; coefficient multiplicateur CM = V₁ ÷ V₀ = 1 + t.",
            "Hausse de 8 % : CM = 1,08 ; baisse de 15 % : CM = 0,85.",
            "Évolutions successives : on multiplie les CM ; taux global = CM global - 1.",
            "Taux réciproque : CM' = 1 ÷ CM ; après + 25 %, il faut - 20 % pour revenir.",
            "Points de pourcentage (différence de deux taux) et pourcentage d'évolution sont deux choses différentes.",
          ],
          example: {
            statement: "Un article coûte 80 €. Son prix augmente de 15 %, puis baisse de 10 %. a) Calculer le prix final. b) Calculer le taux d'évolution global. c) Quel taux d'évolution faudrait-il appliquer au prix final pour revenir à 80 € ? Arrondir à 0,1 %.",
            solution: [
              "a) Hausse de 15 % : CM₁ = 1,15, donc 80 × 1,15 = 92 €.",
              "Baisse de 10 % : CM₂ = 0,90, donc 92 × 0,90 = 82,80 €.",
              "b) CM global = 1,15 × 0,90 = 1,035. Taux global : 1,035 - 1 = 0,035, soit une hausse de 3,5 % (et non de 15 - 10 = 5 %).",
              "Vérification : (82,80 - 80) ÷ 80 = 2,80 ÷ 80 = 0,035.",
              "c) CM réciproque = 1 ÷ 1,035 ≈ 0,9662, soit un taux d'environ - 3,4 %. Vérification : 82,80 × 0,9662 ≈ 80,00 €.",
              "Réponse : prix final 82,80 € ; hausse globale de 3,5 % ; il faudrait une baisse d'environ 3,4 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Dans un lycée de 1 200 élèves, 456 sont en Première. Calculer la proportion d'élèves de Première, en pourcentage. b) Parmi ces élèves de Première, 25 % suivent la spécialité SES. Combien sont-ils ? c) Quelle proportion des élèves du lycée représentent-ils ? Vérifier par un calcul direct. d) Donner le coefficient multiplicateur associé à une hausse de 6 %, à une baisse de 30 %, puis le taux d'évolution associé à CM = 0,92 et à CM = 2,5.",
              hint: "Pour c, multipliez les deux proportions. Pour d, utilisez CM = 1 + t, avec t négatif pour une baisse.",
              solution: [
                "a) p = 456 ÷ 1 200 = 0,38, soit 38 %.",
                "b) 0,25 × 456 = 114 élèves.",
                "c) Proportion de proportion : 0,38 × 0,25 = 0,095, soit 9,5 %. Vérification : 114 ÷ 1 200 = 0,095.",
                "d) Hausse de 6 % : CM = 1,06. Baisse de 30 % : CM = 0,70. CM = 0,92 : t = - 0,08, baisse de 8 %. CM = 2,5 : t = 1,5, hausse de 150 %.",
              ],
            },
            {
              level: 2,
              statement: "La population d'une commune (données fictives) était de 20 000 habitants en 2020. Elle a augmenté de 5 % en 2021, diminué de 4 % en 2022, puis augmenté de 10 % en 2023. a) Calculer la population à la fin de chaque année. b) Calculer le coefficient multiplicateur global et le taux d'évolution global entre 2020 et 2023. c) À l'aide de la calculatrice, déterminer le taux d'évolution qui ramènerait la population de 2023 à celle de 2020, arrondi à 0,1 %.",
              hint: "Enchaînez les multiplications par les coefficients 1,05, 0,96 et 1,10. Le taux réciproque s'obtient avec l'inverse du coefficient global.",
              solution: [
                "a) 2021 : 20 000 × 1,05 = 21 000. 2022 : 21 000 × 0,96 = 20 160. 2023 : 20 160 × 1,10 = 22 176 habitants.",
                "b) CM global = 1,05 × 0,96 × 1,10 = 1,008 × 1,10 = 1,1088. Taux global : 1,1088 - 1 = 0,1088, soit une hausse de 10,88 %.",
                "Vérification : 20 000 × 1,1088 = 22 176. On remarque que 5 - 4 + 10 = 11 % aurait été faux.",
                "c) CM réciproque = 1 ÷ 1,1088 ≈ 0,9019, soit un taux d'environ - 9,8 %. Il faudrait une baisse d'environ 9,8 % pour revenir à 20 000 habitants.",
              ],
            },
            {
              level: 3,
              statement: "Type épreuve anticipée, sans calculatrice. 1) Dans une région (données fictives), le taux de chômage passe de 8 % à 6 %. Exprimer cette baisse en points de pourcentage, puis calculer son taux d'évolution. 2) Le prix d'un article augmente de 25 %. Quel pourcentage de baisse faut-il appliquer pour revenir au prix initial ? 3) Une action perd 50 % de sa valeur, puis gagne 50 %. Quel est le taux d'évolution global ? 4) Une grandeur subit deux hausses successives de même taux t, qui correspondent à une hausse globale de 44 %. Déterminer t.",
              hint: "Pour la question 4, le coefficient global est (1 + t)² = 1,44 : cherchez un nombre positif dont le carré vaut 1,44.",
              solution: [
                "1) Le taux de chômage baisse de 8 - 6 = 2 points de pourcentage. Taux d'évolution : (6 - 8) ÷ 8 = - 2 ÷ 8 = - 0,25, soit une baisse de 25 %.",
                "2) CM = 1,25 = 5/4. CM réciproque = 4/5 = 0,8, soit une baisse de 20 %.",
                "3) CM global = 0,5 × 1,5 = 0,75. Taux global : 0,75 - 1 = - 0,25, soit une baisse de 25 % : gagner 50 % ne compense pas une perte de 50 %.",
                "4) (1 + t)² = 1,44. Comme 1 + t > 0 et 1,2² = 1,44, on obtient 1 + t = 1,2, donc t = 0,2.",
                "Réponse : - 2 points et - 25 % ; baisse de 20 % ; baisse globale de 25 % ; t = 20 %.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Méfiez-vous des intuitions trompeuses.",
            statements: [
              { text: "Une baisse de 15 % correspond à un coefficient multiplicateur de 0,85.", true: true, why: "CM = 1 + t = 1 - 0,15 = 0,85." },
              { text: "Deux hausses successives de 10 % font une hausse globale de 20 %.", true: false, why: "CM global = 1,1 × 1,1 = 1,21 : la hausse globale est de 21 %." },
              { text: "Après une hausse de 20 % puis une baisse de 20 %, on retrouve le prix initial.", true: false, why: "1,2 × 0,8 = 0,96 : le prix a baissé de 4 % au total." },
              { text: "Pour annuler une hausse de 25 %, il faut une baisse de 20 %.", true: true, why: "1 ÷ 1,25 = 0,8, ce qui correspond à une baisse de 20 %." },
              { text: "Un taux passant de 4 % à 5 % a augmenté de 1 %.", true: false, why: "Il a augmenté de 1 point de pourcentage, ce qui représente une hausse de 25 % : (5 - 4) ÷ 4 = 0,25." },
              { text: "Un coefficient multiplicateur de 3 correspond à une hausse de 200 %.", true: true, why: "t = CM - 1 = 3 - 1 = 2, soit 200 %." },
              { text: "Si 50 % des élèves sont des filles et 20 % des filles sont internes, alors 10 % des élèves sont des filles internes.", true: true, why: "Proportion de proportion : 0,5 × 0,2 = 0,1, soit 10 %." },
            ],
          },
          quiz: [
            {
              q: "Dans une classe de 30 élèves, 12 sont des garçons. Quelle est la proportion de garçons ?",
              options: ["40 %", "12 %", "30 %", "60 %"],
              answer: 0,
              why: "p = 12 ÷ 30 = 0,4, soit 40 %. 60 % est la proportion de filles.",
            },
            {
              q: "Un prix baisse de 15 %. Par quel nombre est-il multiplié ?",
              options: ["0,15", "1,15", "0,85", "-0,15"],
              answer: 2,
              why: "CM = 1 + t avec t = - 0,15, donc CM = 0,85.",
            },
            {
              q: "Un prix augmente de 20 %, puis baisse de 20 %. Globalement, il a :",
              options: ["retrouvé sa valeur initiale", "baissé de 4 %", "augmenté de 4 %", "baissé de 40 %"],
              answer: 1,
              why: "CM global = 1,2 × 0,8 = 0,96, soit une baisse de 4 %.",
            },
            {
              q: "Après une hausse de 25 %, quelle baisse faut-il appliquer pour revenir au prix de départ ?",
              options: ["25 %", "75 %", "12,5 %", "20 %"],
              answer: 3,
              why: "Le coefficient réciproque est 1 ÷ 1,25 = 0,8, ce qui correspond à une baisse de 20 %.",
            },
            {
              q: "Un taux d'intérêt passe de 2 % à 3 %. Quelle phrase est exacte ?",
              options: ["Il a augmenté de 1 % seulement", "Il a augmenté de 50 % (soit 1 point)", "Il a augmenté de 150 %", "Il a augmenté de 3 points de pourcentage"],
              answer: 1,
              why: "La différence est de 3 - 2 = 1 point de pourcentage, et le taux d'évolution vaut (3 - 2) ÷ 2 = 0,5, soit 50 %.",
            },
          ],
          trap: "Additionner des taux d'évolution successifs (+ 20 % puis - 20 % ne donne pas 0 %), ou penser qu'une baisse de t % compense une hausse de t %. Il faut toujours multiplier les coefficients multiplicateurs.",
          method: "Traduisez systématiquement chaque pourcentage d'évolution en coefficient multiplicateur avant de calculer, puis revenez au pourcentage à la fin avec t = CM - 1. Contrôlez le sens : un CM supérieur à 1 doit correspondre à une hausse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'statistique-deux-variables',
          title: 'Séries statistiques à deux variables',
          minutes: 30,
          objectives: [
            "Représenter une série statistique à deux variables par un nuage de points et calculer les coordonnées du point moyen.",
            "Déterminer l'équation d'une droite d'ajustement et l'utiliser pour interpoler ou extrapoler.",
            "Interpréter le coefficient directeur d'une droite d'ajustement dans le contexte étudié.",
            "Distinguer corrélation et causalité, et discuter la validité d'une estimation.",
          ],
          course: [
            {
              heading: "Nuage de points",
              paragraphs: [
                "Une série statistique à deux variables associe à chaque individu deux caractères numériques x et y : la taille et la masse d'une personne, l'année et la population d'une ville, la température extérieure et la consommation d'électricité. On note (x₁ ; y₁), (x₂ ; y₂), ..., (xₙ ; yₙ) les n couples de valeurs.",
                "On représente une telle série dans un repère par un nuage de points : chaque couple (xᵢ ; yᵢ) donne un point Mᵢ. La forme du nuage renseigne sur le lien entre les deux variables : des points à peu près alignés suggèrent une relation affine ; des points qui suivent une courbe suggèrent une autre relation (exponentielle, par exemple) ; des points dispersés sans forme particulière indiquent l'absence de lien simple.",
              ],
              box: { label: "Définition", text: "Le nuage de points d'une série à deux variables est l'ensemble des points Mᵢ(xᵢ ; yᵢ) placés dans un repère. On cherche un ajustement affine lorsque les points sont à peu près alignés." },
            },
            {
              heading: "Le point moyen",
              paragraphs: [
                "Le point moyen du nuage est le point G dont les coordonnées sont les moyennes des deux variables : x̄ = (x₁ + x₂ + ... + xₙ) ÷ n et ȳ = (y₁ + y₂ + ... + yₙ) ÷ n. Il résume la position du nuage, comme la moyenne résume une série à une variable.",
                "Exemple : pour la série x : 1, 2, 3, 6 et y : 10, 12, 14, 24, on calcule x̄ = 12 ÷ 4 = 3 et ȳ = 60 ÷ 4 = 15, donc G(3 ; 15). Le point moyen n'est pas forcément l'un des points du nuage.",
              ],
              box: { label: "Formule", text: "Point moyen : G(x̄ ; ȳ), avec x̄ la moyenne des xᵢ et ȳ la moyenne des yᵢ." },
            },
            {
              heading: "Ajustement affine",
              paragraphs: [
                "Quand le nuage est allongé et à peu près rectiligne, on cherche une droite d'équation y = ax + b qui passe au plus près des points : c'est une droite d'ajustement. On peut la tracer à vue, en la faisant passer par le point moyen G et en laissant à peu près autant de points de chaque côté. Les calculatrices et les tableurs fournissent la droite obtenue par la méthode des moindres carrés, appelée droite de régression de y en x ; elle passe toujours par le point moyen G.",
                "Pour déterminer l'équation d'une droite passant par deux points A(x_A ; y_A) et B(x_B ; y_B), avec x_A ≠ x_B, on calcule le coefficient directeur a = (y_B - y_A) ÷ (x_B - x_A), puis l'ordonnée à l'origine b = y_A - a × x_A. Exemple : par A(2 ; 30) et B(10 ; 70), a = 40 ÷ 8 = 5 et b = 30 - 5 × 2 = 20, d'où y = 5x + 20.",
                "Le coefficient directeur a s'interprète comme la variation moyenne de y lorsque x augmente d'une unité. Si y = 5x + 20 modélise un chiffre d'affaires (en milliers d'euros) en fonction d'un budget publicitaire (en milliers d'euros), chaque millier d'euros supplémentaire de publicité s'accompagne en moyenne de 5 000 € de chiffre d'affaires en plus.",
              ],
              box: { label: "Formule", text: "Droite passant par A et B : a = (y_B - y_A) ÷ (x_B - x_A) et b = y_A - a × x_A. Une droite d'ajustement obtenue par les moindres carrés passe par G : ȳ = a × x̄ + b." },
            },
            {
              heading: "Estimer, prévoir, et rester prudent",
              paragraphs: [
                "Une droite d'ajustement permet d'estimer une valeur de y pour une valeur de x donnée, en remplaçant x dans l'équation, ou de chercher la valeur de x pour laquelle y atteint un niveau fixé, en résolvant une équation. On parle d'interpolation lorsque la valeur de x est située à l'intérieur de l'intervalle des données observées, et d'extrapolation lorsqu'elle est en dehors.",
                "L'interpolation est en général fiable si le nuage est bien rectiligne. L'extrapolation est plus risquée : rien ne garantit que la tendance observée se poursuive. Un modèle qui prévoit une note supérieure à 20, une population négative ou une croissance sans fin doit être remis en cause.",
                "Enfin, une corrélation (deux variables qui varient ensemble) ne prouve pas une causalité. Les ventes de glaces et les coups de soleil augmentent en même temps, mais les glaces ne causent pas les coups de soleil : un troisième facteur, l'ensoleillement, agit sur les deux. Seule une analyse du phénomène, ou une expérience contrôlée, peut établir un lien de cause à effet.",
              ],
              box: { label: "À retenir", text: "Interpoler : estimer à l'intérieur de l'intervalle des données. Extrapoler : estimer en dehors, avec prudence. Corrélation ne signifie pas causalité." },
            },
          ],
          keyPoints: [
            "Nuage de points : un point Mᵢ(xᵢ ; yᵢ) par individu ; un nuage allongé et rectiligne justifie un ajustement affine.",
            "Point moyen G(x̄ ; ȳ) : moyennes des deux variables.",
            "La droite des moindres carrés (régression) passe toujours par G.",
            "Droite par deux points : a = (y_B - y_A) ÷ (x_B - x_A), puis b = y_A - a × x_A.",
            "a : variation moyenne de y quand x augmente de 1.",
            "Interpolation fiable, extrapolation prudente ; une corrélation n'est pas une causalité.",
          ],
          example: {
            statement: "On a relevé, pour cinq élèves (données fictives), le nombre d'heures de révision x et la note obtenue y à un devoir : (1 ; 8), (2 ; 9), (3 ; 11), (4 ; 12), (5 ; 15). a) Calculer les coordonnées du point moyen G. b) Un tableur donne la droite d'ajustement d'équation y = 1,7x + 5,9. Vérifier qu'elle passe par G et interpréter 1,7. c) Estimer la note d'un élève qui a révisé 3,5 heures. d) Que prévoit ce modèle pour 10 heures de révision ? Commenter.",
            solution: [
              "a) x̄ = (1 + 2 + 3 + 4 + 5) ÷ 5 = 15 ÷ 5 = 3 et ȳ = (8 + 9 + 11 + 12 + 15) ÷ 5 = 55 ÷ 5 = 11, donc G(3 ; 11).",
              "b) Pour x = 3 : 1,7 × 3 + 5,9 = 5,1 + 5,9 = 11 = ȳ, donc G appartient bien à la droite.",
              "Interprétation : selon ce modèle, chaque heure de révision supplémentaire s'accompagne en moyenne d'une note supérieure de 1,7 point.",
              "c) Pour x = 3,5 (interpolation) : y = 1,7 × 3,5 + 5,9 = 5,95 + 5,9 = 11,85, soit une note d'environ 11,9.",
              "d) Pour x = 10 (extrapolation) : y = 17 + 5,9 = 22,9, ce qui est impossible pour une note sur 20. Le modèle n'est valable que sur l'intervalle des données observées.",
              "Réponse : G(3 ; 11) ; environ 11,9 pour 3,5 h ; l'extrapolation à 10 h n'a pas de sens.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le tableau donne le nombre d'adhérents d'un club (données fictives), en fonction du rang x de l'année (x = 0 pour 2020) : x : 0, 1, 2, 3, 4 ; y : 50, 54, 57, 61, 63. a) Calculer les coordonnées du point moyen G. b) On propose la droite d'ajustement d'équation y = 3,3x + 50,4. Vérifier qu'elle passe par G. c) Interpréter le nombre 3,3. d) Estimer le nombre d'adhérents en 2026 (x = 6), en précisant s'il s'agit d'une interpolation ou d'une extrapolation.",
              hint: "Additionnez les valeurs de chaque variable et divisez par 5. Pour vérifier qu'un point appartient à une droite, remplacez x par son abscisse et comparez avec son ordonnée.",
              solution: [
                "a) x̄ = (0 + 1 + 2 + 3 + 4) ÷ 5 = 10 ÷ 5 = 2 ; ȳ = (50 + 54 + 57 + 61 + 63) ÷ 5 = 285 ÷ 5 = 57. Donc G(2 ; 57).",
                "b) 3,3 × 2 + 50,4 = 6,6 + 50,4 = 57 : la droite passe par G.",
                "c) Selon ce modèle, le club gagne en moyenne 3,3 adhérents par an.",
                "d) x = 6 est en dehors de l'intervalle [0 ; 4] : c'est une extrapolation. y = 3,3 × 6 + 50,4 = 19,8 + 50,4 = 70,2, soit environ 70 adhérents, si la tendance se maintient.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise étudie son chiffre d'affaires y (en milliers d'euros) en fonction de son budget publicitaire x (en milliers d'euros), données fictives. Le nuage de points est à peu près rectiligne et l'on trace une droite d'ajustement qui passe par A(2 ; 30) et B(10 ; 70). a) Déterminer l'équation de cette droite. b) Estimer le chiffre d'affaires pour un budget de 6 000 €. c) Quel budget faudrait-il, selon ce modèle, pour atteindre un chiffre d'affaires de 60 000 € ? d) Les budgets observés allaient de 1 000 € à 12 000 €. Peut-on utiliser ce modèle pour un budget de 30 000 € ? Justifier.",
              hint: "Calculez d'abord le coefficient directeur avec les deux points, puis b à l'aide de l'un d'eux. Pour c, résolvez une équation du premier degré.",
              solution: [
                "a) a = (70 - 30) ÷ (10 - 2) = 40 ÷ 8 = 5 ; b = 30 - 5 × 2 = 20. Équation : y = 5x + 20. Vérification avec B : 5 × 10 + 20 = 70.",
                "b) x = 6 : y = 5 × 6 + 20 = 50, soit un chiffre d'affaires estimé de 50 000 €.",
                "c) 5x + 20 = 60, donc 5x = 40 et x = 8 : il faudrait un budget d'environ 8 000 €.",
                "d) x = 30 est très au-delà des données observées (de 1 à 12) : ce serait une extrapolation lointaine. Rien ne garantit que chaque millier d'euros de publicité continue à rapporter 5 000 € : l'effet de la publicité finit en général par s'atténuer. Le modèle ne doit pas être utilisé pour ce budget.",
              ],
            },
            {
              level: 3,
              statement: "Type épreuve anticipée. Un glacier relève, sur cinq jours (données fictives), la température maximale x (en °C) et le nombre y de glaces vendues : (16 ; 40), (20 ; 58), (24 ; 70), (28 ; 86), (32 ; 96). 1) Calculer les coordonnées du point moyen G. 2) Un tableur donne la droite d'ajustement d'équation y = 3,5x - 14. Vérifier qu'elle passe par G. 3) Interpréter le coefficient 3,5. 4) Estimer le nombre de glaces vendues un jour à 26 °C. 5) Le modèle prévoit-il des ventes réalistes pour une journée à 4 °C ? 6) Le glacier constate que les jours où il vend le plus de glaces sont aussi ceux où la pharmacie voisine vend le plus de crème solaire. Peut-il en conclure que manger des glaces fait acheter de la crème solaire ?",
              hint: "Les moyennes se calculent facilement de tête : 16 + 20 + 24 + 28 + 32 = 120. Pour la question 5, regardez le signe du résultat.",
              solution: [
                "1) x̄ = 120 ÷ 5 = 24 ; ȳ = (40 + 58 + 70 + 86 + 96) ÷ 5 = 350 ÷ 5 = 70. Donc G(24 ; 70).",
                "2) 3,5 × 24 - 14 = 84 - 14 = 70 : la droite passe bien par G.",
                "3) Selon ce modèle, chaque degré supplémentaire s'accompagne en moyenne de 3,5 glaces vendues en plus.",
                "4) x = 26 (interpolation) : y = 3,5 × 26 - 14 = 91 - 14 = 77 glaces environ.",
                "5) x = 4 : y = 14 - 14 = 0. Le modèle ne prévoit aucune vente, et même des ventes négatives en dessous de 4 °C, ce qui est absurde. 4 °C est loin des températures observées (16 à 32 °C) : l'extrapolation n'est pas valable.",
                "6) Non. Les deux ventes sont corrélées, mais ce n'est pas une relation de cause à effet : un facteur commun, le temps chaud et ensoleillé, explique à la fois les ventes de glaces et celles de crème solaire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un ajustement affine tracé à la main.",
            items: [
              "Placer les points de la série dans un repère",
              "Constater que le nuage est allongé et à peu près rectiligne",
              "Calculer les coordonnées du point moyen G",
              "Tracer une droite passant par G, au plus près des points",
              "Lire deux points de cette droite et en déduire son équation",
              "Utiliser l'équation pour estimer une valeur et juger sa fiabilité",
            ],
          },
          quiz: [
            {
              q: "Une série à deux variables a pour valeurs x : 1, 2, 3, 6 et y : 10, 12, 14, 24. Quel est son point moyen ?",
              options: ["G(3 ; 15)", "G(3 ; 14)", "G(2,5 ; 13)", "G(12 ; 60)"],
              answer: 0,
              why: "x̄ = 12 ÷ 4 = 3 et ȳ = 60 ÷ 4 = 15. (12 ; 60) sont les sommes, pas les moyennes.",
            },
            {
              q: "Une droite d'ajustement a pour équation y = 2,5x + 4. Quelle estimation de y donne-t-elle pour x = 6 ?",
              options: ["10,5", "15", "19", "29"],
              answer: 2,
              why: "y = 2,5 × 6 + 4 = 15 + 4 = 19.",
            },
            {
              q: "Que signifie extrapoler ?",
              options: ["Calculer une moyenne pondérée des deux variables étudiées", "Estimer une valeur hors de l'intervalle observé", "Estimer une valeur à l'intérieur de l'intervalle observé", "Placer le point moyen sur le nuage"],
              answer: 1,
              why: "Extrapoler, c'est prolonger la tendance au-delà des données ; estimer à l'intérieur de l'intervalle, c'est interpoler.",
            },
            {
              q: "La droite d'ajustement obtenue par la méthode des moindres carrés passe toujours par :",
              options: ["l'origine du repère", "le premier point du nuage", "le point le plus haut du nuage", "le point moyen G"],
              answer: 3,
              why: "La droite des moindres carrés passe par le point moyen G(x̄ ; ȳ), ce qui permet de vérifier une équation.",
            },
            {
              q: "On observe une forte corrélation entre deux variables. Que peut-on en conclure ?",
              options: ["Que l'une est forcément la cause de l'autre", "Rien de certain sur la causalité", "Que la droite d'ajustement passe par l'origine", "Que les deux variables sont égales"],
              answer: 1,
              why: "Deux variables peuvent varier ensemble sous l'effet d'un troisième facteur : une corrélation ne prouve pas une causalité.",
            },
          ],
          trap: "Utiliser une droite d'ajustement très loin des données (extrapolation) sans s'interroger sur le sens du résultat, ou conclure d'une corrélation qu'une variable est la cause de l'autre.",
          method: "Après avoir obtenu ou reçu l'équation d'une droite d'ajustement, vérifiez toujours qu'elle passe par le point moyen G : c'est un contrôle rapide qui détecte la plupart des erreurs de calcul ou de lecture.",
        },
      ],
    },
    /* ==================================================================== */
    /* MATHÉMATIQUES : LES PHÉNOMÈNES ALÉATOIRES                              */
    /* ==================================================================== */
    {
      id: 'phenomenes-aleatoires',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'tableaux-croises',
          title: 'Tableaux croisés et fréquences conditionnelles',
          minutes: 25,
          objectives: [
            "Lire et compléter un tableau croisé d'effectifs.",
            "Calculer des fréquences, des fréquences marginales et des fréquences conditionnelles.",
            "Interpréter une fréquence conditionnelle et comparer deux sous-populations à l'aide de fréquences conditionnelles.",
          ],
          course: [
            {
              heading: "Le tableau croisé d'effectifs",
              paragraphs: [
                "Lorsqu'on étudie deux caractères sur une même population (par exemple la classe et le moyen de transport d'élèves), on range les effectifs dans un tableau croisé, aussi appelé tableau à double entrée. Chaque case intérieure donne l'effectif des individus qui présentent à la fois une modalité du premier caractère et une modalité du second. La dernière ligne et la dernière colonne contiennent les totaux, appelés effectifs marginaux ; la case en bas à droite contient l'effectif total.",
                "Exemple (données fictives) : on interroge 200 élèves. En Seconde, 20 viennent à vélo, 50 en bus et 30 à pied (total 100) ; en Première, 30 à vélo, 40 en bus et 30 à pied (total 100). La ligne des totaux donne 50 élèves à vélo, 90 en bus et 60 à pied, soit 200 élèves. Un tableau croisé se complète par additions et soustractions : chaque total est la somme des cases de sa ligne ou de sa colonne.",
              ],
              box: { label: "Repère", text: "Dans un tableau croisé, chaque ligne et chaque colonne se termine par son total. Vérification indispensable : la somme des totaux des lignes et la somme des totaux des colonnes donnent toutes deux l'effectif total." },
            },
            {
              heading: "Fréquences et fréquences marginales",
              paragraphs: [
                "La fréquence d'une catégorie d'individus dans la population est le quotient de son effectif par l'effectif total. On note A et B deux caractères (par exemple « être en Seconde » et « venir en bus »). La fréquence de A ∩ B (lire « A inter B », les individus qui ont à la fois A et B) est n(A ∩ B) ÷ N, où N est l'effectif total. Dans l'exemple, la fréquence des élèves de Seconde qui viennent en bus est 50 ÷ 200 = 0,25.",
                "Une fréquence marginale est obtenue à partir d'un total de ligne ou de colonne : elle concerne un seul caractère. Dans l'exemple, la fréquence des élèves venant à vélo est 50 ÷ 200 = 0,25 et celle des élèves de Seconde est 100 ÷ 200 = 0,5. Ces fréquences se calculent toujours par rapport à l'effectif total.",
              ],
            },
            {
              heading: "Fréquences conditionnelles",
              paragraphs: [
                "Une fréquence conditionnelle restreint la population de référence à une sous-population. La fréquence de B parmi A, notée f_A(B), est le quotient du nombre d'individus ayant A et B par le nombre d'individus ayant A : f_A(B) = n(A ∩ B) ÷ n(A). Dans l'exemple, parmi les 100 élèves de Seconde, 50 viennent en bus : la fréquence des élèves venant en bus parmi les élèves de Seconde est 50 ÷ 100 = 0,5.",
                "L'ordre compte. La fréquence des élèves de Seconde parmi ceux qui viennent en bus est f_bus(Seconde) = 50 ÷ 90 ≈ 0,56 : c'est une autre question, avec une autre population de référence. En général, f_A(B) ≠ f_B(A). Le dénominateur est toujours l'effectif de la sous-population indiquée par le mot « parmi ».",
                "Les fréquences conditionnelles relient fréquences et proportions de proportion : n(A ∩ B) ÷ N = (n(A) ÷ N) × (n(A ∩ B) ÷ n(A)), c'est-à-dire que la fréquence de A ∩ B est égale à la fréquence de A multipliée par f_A(B). Dans l'exemple : 0,5 × 0,5 = 0,25.",
              ],
              box: { label: "Définition", text: "Fréquence conditionnelle de B parmi A : f_A(B) = n(A ∩ B) ÷ n(A). Le dénominateur est l'effectif de la sous-population A. En général, f_A(B) ≠ f_B(A)." },
            },
            {
              heading: "Comparer et interpréter",
              paragraphs: [
                "Les fréquences conditionnelles permettent de comparer des sous-populations d'effectifs différents. Pour savoir si le bus est plus utilisé en Seconde qu'en Première, on compare f_Seconde(bus) = 0,5 et f_Première(bus) = 40 ÷ 100 = 0,4 : le bus est plus fréquent chez les élèves de Seconde de l'échantillon. Comparer les effectifs bruts (50 et 40) n'aurait de sens que parce que les deux classes comptent ici le même nombre d'élèves.",
                "Une différence entre deux fréquences conditionnelles montre une association entre deux caractères, pas une relation de cause à effet. Si les élèves qui suivent un tutorat réussissent plus souvent, cela peut venir du tutorat, mais aussi du fait que les élèves volontaires sont plus motivés. Il faut aussi tenir compte de la taille des sous-populations : une fréquence calculée sur 5 individus est peu fiable.",
              ],
              box: { label: "À retenir", text: "Pour comparer deux groupes de tailles différentes, on compare des fréquences conditionnelles, jamais des effectifs bruts. Une association entre deux caractères ne prouve pas une causalité." },
            },
          ],
          keyPoints: [
            "Tableau croisé : effectifs de deux caractères, avec une ligne et une colonne de totaux (effectifs marginaux).",
            "Fréquence de A ∩ B : n(A ∩ B) ÷ N ; fréquence marginale : total de ligne ou de colonne ÷ N.",
            "Fréquence conditionnelle de B parmi A : f_A(B) = n(A ∩ B) ÷ n(A).",
            "Le mot « parmi » désigne le dénominateur ; en général f_A(B) ≠ f_B(A).",
            "Comparer des groupes : comparer des fréquences conditionnelles, pas des effectifs.",
          ],
          example: {
            statement: "On interroge 400 lycéens (données fictives) sur la pratique d'un sport en club (S) et sur leur temps de sommeil, au moins 8 heures par nuit (H) ou non. Parmi les 150 sportifs, 90 dorment au moins 8 heures. Au total, 200 élèves dorment au moins 8 heures. a) Construire le tableau croisé. b) Calculer la fréquence des sportifs. c) Calculer la fréquence des élèves dormant au moins 8 heures parmi les sportifs, puis parmi les non-sportifs. Comparer. d) Calculer la fréquence des sportifs parmi les élèves qui dorment au moins 8 heures.",
            solution: [
              "a) Sportifs : 90 avec H et 150 - 90 = 60 sans H. Non-sportifs : 400 - 150 = 250, dont 200 - 90 = 110 avec H et 250 - 110 = 140 sans H. Totaux des colonnes : 200 avec H et 400 - 200 = 200 sans H (vérification : 60 + 140 = 200).",
              "b) Fréquence des sportifs : 150 ÷ 400 = 0,375, soit 37,5 %.",
              "c) f_S(H) = 90 ÷ 150 = 0,6, soit 60 %. Parmi les non-sportifs : 110 ÷ 250 = 0,44, soit 44 %.",
              "Dans cet échantillon, les sportifs dorment plus souvent au moins 8 heures que les non-sportifs (60 % contre 44 %), ce qui montre une association entre les deux caractères, sans prouver de lien de cause à effet.",
              "d) f_H(S) = 90 ÷ 200 = 0,45, soit 45 % : à ne pas confondre avec f_S(H) = 60 %.",
              "Réponse : 37,5 % de sportifs ; 60 % contre 44 % ; 45 % de sportifs parmi les gros dormeurs.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans un lycée, 300 élèves de Première (données fictives) se répartissent en 160 filles et 140 garçons. 75 élèves suivent l'option théâtre, dont 50 filles. a) Construire et compléter le tableau croisé (sexe, option théâtre ou non). b) Calculer la fréquence des élèves qui suivent l'option théâtre. c) Calculer la fréquence des élèves suivant l'option parmi les filles, puis parmi les garçons, au dixième de pourcentage. d) Calculer la fréquence des filles parmi les élèves de l'option.",
              hint: "Complétez d'abord les cases par soustraction à partir des totaux. Pour c et d, repérez le mot « parmi » : il indique le dénominateur.",
              solution: [
                "a) Filles : 50 en théâtre et 160 - 50 = 110 sans théâtre. Garçons : 75 - 50 = 25 en théâtre et 140 - 25 = 115 sans théâtre. Totaux : 75 en théâtre, 110 + 115 = 225 sans théâtre, 300 au total.",
                "b) 75 ÷ 300 = 0,25, soit 25 %.",
                "c) Parmi les filles : 50 ÷ 160 = 0,3125, soit environ 31,3 %. Parmi les garçons : 25 ÷ 140 ≈ 0,179, soit environ 17,9 %.",
                "d) Parmi les élèves de l'option : 50 ÷ 75 ≈ 0,667, soit environ 66,7 % de filles.",
              ],
            },
            {
              level: 2,
              statement: "Une entreprise compte 800 salariés (données fictives). 40 % sont cadres. 75 % des cadres et 25 % des non-cadres pratiquent le télétravail. a) Construire le tableau croisé des effectifs (cadre ou non, télétravail ou non). b) Quelle est la fréquence des salariés en télétravail ? c) Parmi les salariés en télétravail, quelle est la fréquence des cadres ? d) Un journaliste écrit : « La majorité des télétravailleurs sont des cadres, donc la majorité des cadres télétravaillent. » Le raisonnement est-il valable ?",
              hint: "Calculez d'abord le nombre de cadres (40 % de 800), puis appliquez chaque pourcentage à la bonne sous-population.",
              solution: [
                "a) Cadres : 0,40 × 800 = 320, dont 0,75 × 320 = 240 en télétravail et 80 sans. Non-cadres : 800 - 320 = 480, dont 0,25 × 480 = 120 en télétravail et 360 sans. Totaux : 240 + 120 = 360 en télétravail, 80 + 360 = 440 sans.",
                "b) 360 ÷ 800 = 0,45, soit 45 % des salariés.",
                "c) f_télétravail(cadre) = 240 ÷ 360 = 2/3 ≈ 0,667, soit environ 66,7 %.",
                "d) Non : ce sont deux fréquences conditionnelles différentes. Ici, les deux affirmations sont vraies (66,7 % et 75 %), mais la seconde ne se déduit pas de la première : la fréquence des cadres parmi les télétravailleurs et celle des télétravailleurs parmi les cadres n'ont pas le même dénominateur.",
              ],
            },
            {
              level: 3,
              statement: "Type épreuve anticipée, sans calculatrice. Un lycée étudie les résultats de 600 candidats au baccalauréat (données fictives). 200 d'entre eux ont suivi un tutorat, et 170 de ces 200 ont été admis. Parmi les candidats qui n'ont pas suivi de tutorat, 300 ont été admis. 1) Dresser le tableau croisé (tutorat ou non, admis ou non). 2) Calculer la fréquence des admis parmi les candidats ayant suivi le tutorat, puis parmi les autres. 3) Calculer la fréquence d'admis dans tout le lycée. 4) Parmi les admis, quelle est la fréquence de ceux qui ont suivi le tutorat ? On donnera la fraction irréductible et une valeur approchée au centième, en admettant que 17 ÷ 47 ≈ 0,36. 5) Peut-on affirmer que le tutorat est la cause de la meilleure réussite ? Argumenter.",
              hint: "Pour la question 2, comparez 170 ÷ 200 et 300 ÷ 400 en les écrivant avec le même dénominateur, ou en pourcentage.",
              solution: [
                "1) Tutorat : 170 admis, 200 - 170 = 30 non admis. Sans tutorat : 600 - 200 = 400 candidats, dont 300 admis et 100 non admis. Totaux : 170 + 300 = 470 admis et 30 + 100 = 130 non admis, soit 600.",
                "2) Parmi les candidats du tutorat : 170 ÷ 200 = 0,85, soit 85 %. Parmi les autres : 300 ÷ 400 = 0,75, soit 75 %.",
                "3) 470 ÷ 600 = 47/60 ≈ 0,78, soit environ 78 %.",
                "4) f_admis(tutorat) = 170 ÷ 470 = 17/47 ≈ 0,36, soit environ 36 %.",
                "5) On observe une association : les candidats du tutorat réussissent plus souvent (85 % contre 75 %). Mais on ne peut pas conclure à une causalité : les élèves qui choisissent un tutorat sont peut-être plus motivés ou mieux suivis par leur famille. Pour établir l'effet du tutorat, il faudrait comparer des groupes semblables, par exemple constitués par tirage au sort.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Dans une classe (données fictives), on compte 30 filles dont 12 internes et 20 garçons dont 4 internes. Associez chaque fréquence à sa valeur.",
            pairs: [
              { left: "Fréquence des internes", right: "16 ÷ 50 = 0,32" },
              { left: "Fréquence des filles", right: "30 ÷ 50 = 0,6" },
              { left: "Fréquence des internes parmi les filles", right: "12 ÷ 30 = 0,4" },
              { left: "Fréquence des internes parmi les garçons", right: "4 ÷ 20 = 0,2" },
              { left: "Fréquence des filles parmi les internes", right: "12 ÷ 16 = 0,75" },
              { left: "Fréquence des filles internes dans la classe", right: "12 ÷ 50 = 0,24" },
            ],
          },
          quiz: [
            {
              q: "Dans un tableau croisé, que contient la case à l'intersection de la ligne « Total » et de la colonne « Total » ?",
              options: ["L'effectif total de la population", "L'effectif de la première catégorie", "La somme de la première ligne", "Une fréquence conditionnelle"],
              answer: 0,
              why: "C'est la somme de tous les effectifs : elle doit être égale à la somme des totaux des lignes comme à celle des totaux des colonnes.",
            },
            {
              q: "Parmi 200 élèves, 80 font du sport ; parmi ces 80 sportifs, 20 sont internes. Quelle est la fréquence des internes parmi les sportifs ?",
              options: ["0,1", "0,4", "0,25", "0,125"],
              answer: 2,
              why: "f_sportifs(internes) = 20 ÷ 80 = 0,25. Diviser par 200 donnerait la fréquence des internes sportifs dans toute la population.",
            },
            {
              q: "Que représente la fréquence conditionnelle f_A(B) ?",
              options: ["La fréquence de A parmi les individus ayant B", "La fréquence de B parmi les individus ayant A", "La fréquence des individus ayant A et B dans toute la population", "La fréquence de B dans la population"],
              answer: 1,
              why: "f_A(B) = n(A ∩ B) ÷ n(A) : la population de référence est la sous-population A.",
            },
            {
              q: "Dans un tableau, n(A ∩ B) = 30, n(A) = 60 et n(B) = 100. Que valent f_A(B) et f_B(A) ?",
              options: ["f_A(B) = 0,3 et f_B(A) = 0,5", "Les deux valent 0,5", "Les deux valent 0,3", "f_A(B) = 0,5 et f_B(A) = 0,3"],
              answer: 3,
              why: "f_A(B) = 30 ÷ 60 = 0,5 et f_B(A) = 30 ÷ 100 = 0,3 : les deux fréquences n'ont pas le même dénominateur.",
            },
            {
              q: "Comment obtient-on une fréquence marginale ?",
              options: ["En divisant un total de ligne ou de colonne par l'effectif total", "En divisant une case intérieure par le total de sa ligne", "En divisant une case intérieure par le total de sa colonne, puis en multipliant par 100"],
              answer: 0,
              why: "Une fréquence marginale ne concerne qu'un caractère : elle se calcule à partir des totaux, rapportés à l'effectif total.",
            },
          ],
          trap: "Se tromper de dénominateur : confondre la fréquence de B parmi A, f_A(B) = n(A ∩ B) ÷ n(A), avec la fréquence de A parmi B ou avec la fréquence de A ∩ B dans toute la population.",
          method: "Avant chaque calcul, reformulez la question sous la forme « parmi les ..., quelle part ... ? ». Ce qui suit « parmi » est la population de référence : son effectif est le dénominateur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'probabilites-arbres',
          title: 'Probabilités conditionnelles et arbres',
          minutes: 30,
          objectives: [
            "Calculer une probabilité conditionnelle P_A(B) et la distinguer de la probabilité P(A ∩ B).",
            "Construire et utiliser un arbre pondéré en appliquant les règles des branches et des chemins.",
            "Calculer une probabilité à l'aide de la formule des probabilités totales.",
            "Interpréter les résultats d'un test de dépistage en termes de probabilités conditionnelles.",
          ],
          course: [
            {
              heading: "Probabilité conditionnelle",
              paragraphs: [
                "On considère une expérience aléatoire et deux événements A et B, avec P(A) ≠ 0. La probabilité de B sachant A, notée P_A(B), est la probabilité que B se réalise lorsqu'on sait que A est réalisé. Elle est définie par P_A(B) = P(A ∩ B) ÷ P(A), où A ∩ B est l'événement « A et B ».",
                "Le lien avec les tableaux croisés est direct : si l'on choisit au hasard un individu dans une population, chaque individu ayant la même chance d'être choisi, la probabilité d'un événement est égale à la fréquence correspondante, et P_A(B) est égale à la fréquence conditionnelle f_A(B). Par exemple, si 60 % des sportifs d'un lycée dorment au moins 8 heures, la probabilité qu'un sportif choisi au hasard dorme au moins 8 heures est 0,6.",
                "De la définition, on tire la formule souvent la plus utile : P(A ∩ B) = P(A) × P_A(B). Par exemple, si 40 % des élèves d'un lycée sont en Première et si 30 % des élèves de Première suivent la spécialité SES, la probabilité qu'un élève choisi au hasard soit en Première et suive SES est 0,4 × 0,3 = 0,12.",
              ],
              box: { label: "Définition", text: "Si P(A) ≠ 0 : P_A(B) = P(A ∩ B) ÷ P(A). Donc P(A ∩ B) = P(A) × P_A(B). Attention : P_A(B) et P_B(A) sont en général différentes." },
            },
            {
              heading: "L'arbre pondéré et ses règles",
              paragraphs: [
                "Un arbre pondéré représente une expérience en plusieurs étapes. Au premier niveau, on place un événement A et son contraire Ā (lire « A barre »), avec leurs probabilités P(A) et P(Ā) = 1 - P(A). Au second niveau, de chaque nœud partent les branches B et B̄, sur lesquelles on écrit des probabilités conditionnelles : P_A(B) et P_A(B̄) après A, P_Ā(B) et P_Ā(B̄) après Ā.",
                "Trois règles permettent de l'utiliser. Règle des nœuds : la somme des probabilités des branches issues d'un même nœud vaut 1. Règle des chemins : la probabilité d'un chemin (une intersection) est le produit des probabilités des branches qui le composent, par exemple P(A ∩ B) = P(A) × P_A(B). Règle des événements : la probabilité d'un événement est la somme des probabilités des chemins qui y mènent.",
              ],
              box: { label: "Règle", text: "Nœud : somme des branches issues d'un nœud = 1. Chemin : on multiplie les probabilités le long du chemin. Événement : on additionne les probabilités de tous les chemins qui y mènent." },
            },
            {
              heading: "Probabilités totales et inversion du conditionnement",
              paragraphs: [
                "Comme A et Ā partagent l'univers en deux, l'événement B se réalise soit avec A, soit avec Ā. La formule des probabilités totales s'écrit : P(B) = P(A ∩ B) + P(Ā ∩ B) = P(A) × P_A(B) + P(Ā) × P_Ā(B). Elle correspond à l'addition des deux chemins de l'arbre qui aboutissent à B.",
                "On peut ensuite « remonter » l'arbre et calculer la probabilité de A sachant B : P_B(A) = P(A ∩ B) ÷ P(B). Ce calcul est souvent celui qui répond à la vraie question (sachant ce que l'on observe, quelle est la probabilité de la cause ?), et son résultat peut être très différent de P_A(B).",
                "Si P_A(B) = P(B), savoir que A est réalisé ne modifie pas la probabilité de B : on dit que A et B sont indépendants, ce qui équivaut à P(A ∩ B) = P(A) × P(B). Deux lancers successifs d'une pièce équilibrée sont indépendants ; en revanche, le fait de prendre un parapluie et le fait qu'il pleuve ne le sont pas.",
              ],
              box: { label: "Formule", text: "Probabilités totales : P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B). Inversion : P_B(A) = P(A ∩ B) ÷ P(B)." },
            },
            {
              heading: "Application : les tests de dépistage",
              paragraphs: [
                "Un test de dépistage n'est jamais parfait. On note M l'événement « la personne est malade » et T « le test est positif ». P_M(T) est la probabilité que le test détecte un malade (sensibilité) ; P_M̄(T) est la probabilité d'un faux positif chez une personne saine. La question qui intéresse la personne testée positive est différente : c'est P_T(M), la probabilité d'être malade sachant que le test est positif.",
                "Exemple (données fictives) : une maladie touche 1 % de la population, le test est positif chez 99 % des malades et chez 2 % des personnes saines. Alors P(M ∩ T) = 0,01 × 0,99 = 0,0099 et P(M̄ ∩ T) = 0,99 × 0,02 = 0,0198, donc P(T) = 0,0297 et P_T(M) = 0,0099 ÷ 0,0297 = 1/3. Malgré un test très sensible, une personne testée positive n'a qu'une chance sur trois d'être malade, parce que la maladie est rare et que les personnes saines sont très nombreuses.",
              ],
              box: { label: "À retenir", text: "Ne pas confondre P_M(T), probabilité d'un test positif chez un malade, et P_T(M), probabilité d'être malade quand le test est positif. Quand la maladie est rare, les faux positifs peuvent être plus nombreux que les vrais positifs." },
            },
          ],
          keyPoints: [
            "P_A(B) = P(A ∩ B) ÷ P(A) : probabilité de B sachant que A est réalisé.",
            "P(A ∩ B) = P(A) × P_A(B) : on multiplie le long d'un chemin de l'arbre.",
            "La somme des branches issues d'un même nœud vaut 1.",
            "Probabilités totales : P(B) = P(A) × P_A(B) + P(Ā) × P_Ā(B).",
            "Pour remonter l'arbre : P_B(A) = P(A ∩ B) ÷ P(B), souvent très différente de P_A(B).",
            "A et B indépendants : P_A(B) = P(B), soit P(A ∩ B) = P(A) × P(B).",
          ],
          example: {
            statement: "Une usine fabrique des pièces sur deux machines (données fictives). La machine A produit 60 % des pièces et la machine B le reste. 3 % des pièces de A et 5 % des pièces de B sont défectueuses. On choisit une pièce au hasard et l'on note D l'événement « la pièce est défectueuse ». a) Construire l'arbre pondéré. b) Calculer P(A ∩ D). c) Calculer P(D). d) La pièce choisie est défectueuse. Quelle est la probabilité qu'elle provienne de la machine A ?",
            solution: [
              "a) Premier niveau : P(A) = 0,6 et P(B) = 0,4. Second niveau : après A, P_A(D) = 0,03 et P_A(D̄) = 0,97 ; après B, P_B(D) = 0,05 et P_B(D̄) = 0,95.",
              "b) Règle des chemins : P(A ∩ D) = 0,6 × 0,03 = 0,018.",
              "c) De même, P(B ∩ D) = 0,4 × 0,05 = 0,020. Probabilités totales : P(D) = 0,018 + 0,020 = 0,038.",
              "d) On cherche P_D(A) = P(A ∩ D) ÷ P(D) = 0,018 ÷ 0,038 = 18/38 = 9/19 ≈ 0,47.",
              "Réponse : P(A ∩ D) = 0,018 ; P(D) = 0,038 ; une pièce défectueuse provient de A avec une probabilité d'environ 0,47, alors que A produit 60 % des pièces, car A produit moins de défauts que B.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On donne P(A) = 0,4, P_A(B) = 0,7 et P_Ā(B) = 0,3. a) Construire l'arbre pondéré complet. b) Calculer P(A ∩ B) et P(Ā ∩ B). c) En déduire P(B). d) Calculer P_B(A), sous forme de fraction irréductible puis arrondie au centième.",
              hint: "Complétez chaque nœud pour que la somme des branches fasse 1, puis multipliez le long des chemins.",
              solution: [
                "a) P(Ā) = 1 - 0,4 = 0,6 ; P_A(B̄) = 1 - 0,7 = 0,3 ; P_Ā(B̄) = 1 - 0,3 = 0,7.",
                "b) P(A ∩ B) = 0,4 × 0,7 = 0,28 et P(Ā ∩ B) = 0,6 × 0,3 = 0,18.",
                "c) P(B) = 0,28 + 0,18 = 0,46.",
                "d) P_B(A) = 0,28 ÷ 0,46 = 28/46 = 14/23 ≈ 0,61.",
              ],
            },
            {
              level: 2,
              statement: "Dans une ville (données fictives), il pleut un jour sur quatre. Un élève prend le bus avec une probabilité de 0,8 les jours de pluie et de 0,3 les autres jours. On choisit un jour au hasard ; on note P l'événement « il pleut » et B « l'élève prend le bus ». a) Construire l'arbre pondéré. b) Calculer la probabilité que l'élève prenne le bus. c) L'élève a pris le bus. Quelle est la probabilité qu'il ait plu ? Donner la fraction irréductible et une valeur approchée au centième. d) Les événements P et B sont-ils indépendants ?",
              hint: "Un jour sur quatre donne P(P) = 0,25. Pour d, comparez P_P(B) et P(B).",
              solution: [
                "a) P(P) = 0,25 et P(P̄) = 0,75 ; P_P(B) = 0,8, P_P(B̄) = 0,2 ; P_P̄(B) = 0,3, P_P̄(B̄) = 0,7.",
                "b) P(B) = 0,25 × 0,8 + 0,75 × 0,3 = 0,2 + 0,225 = 0,425.",
                "c) P_B(P) = P(P ∩ B) ÷ P(B) = 0,2 ÷ 0,425 = 200/425 = 8/17 ≈ 0,47.",
                "d) P_P(B) = 0,8 alors que P(B) = 0,425 : savoir qu'il pleut change la probabilité de prendre le bus. Les événements ne sont pas indépendants.",
              ],
            },
            {
              level: 3,
              statement: "Type épreuve anticipée, sans calculatrice. Une maladie touche 4 % d'une population (données fictives). Un test est positif chez 95 % des malades et négatif chez 90 % des personnes saines. On choisit une personne au hasard ; on note M « elle est malade » et T « son test est positif ». 1) Construire l'arbre pondéré. 2) Calculer P(M ∩ T) et P(M̄ ∩ T). 3) Montrer que P(T) = 0,134. 4) Une personne a un test positif. En admettant que 0,038 ÷ 0,134 ≈ 0,28, donner la probabilité qu'elle soit malade et commenter. 5) Calculer P(T̄). En admettant que 0,864 ÷ 0,866 ≈ 0,998, que penser d'un test négatif ?",
              hint: "Les personnes saines représentent 96 % de la population et, parmi elles, 10 % ont un test positif (faux positifs).",
              solution: [
                "1) P(M) = 0,04 et P(M̄) = 0,96 ; P_M(T) = 0,95 et P_M(T̄) = 0,05 ; P_M̄(T̄) = 0,90 et P_M̄(T) = 0,10.",
                "2) P(M ∩ T) = 0,04 × 0,95 = 0,038 ; P(M̄ ∩ T) = 0,96 × 0,10 = 0,096.",
                "3) Probabilités totales : P(T) = 0,038 + 0,096 = 0,134.",
                "4) P_T(M) = 0,038 ÷ 0,134 ≈ 0,28. Une personne testée positive n'a qu'environ 28 % de risque d'être malade : les faux positifs (0,096) sont plus nombreux que les vrais positifs (0,038), car les personnes saines sont très majoritaires. Un test positif doit donc être confirmé par un second examen.",
                "5) P(T̄) = 1 - 0,134 = 0,866. Et P(M̄ ∩ T̄) = 0,96 × 0,90 = 0,864, donc P_T̄(M̄) = 0,864 ÷ 0,866 ≈ 0,998 : un test négatif est très rassurant.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Attention aux confusions classiques.",
            statements: [
              { text: "P_A(B) et P_B(A) sont toujours égales.", true: false, why: "P_A(B) = P(A ∩ B) ÷ P(A) et P_B(A) = P(A ∩ B) ÷ P(B) : les dénominateurs diffèrent en général." },
              { text: "Dans un arbre pondéré, la somme des probabilités des branches issues d'un même nœud vaut 1.", true: true, why: "Les branches issues d'un nœud correspondent à des événements contraires (ou qui se partagent toutes les issues)." },
              { text: "Pour obtenir P(A ∩ B), on additionne P(A) et P_A(B).", true: false, why: "On multiplie le long du chemin : P(A ∩ B) = P(A) × P_A(B)." },
              { text: "Si P_A(B) = P(B), les événements A et B sont indépendants.", true: true, why: "Savoir que A est réalisé ne change pas la probabilité de B : c'est la définition de l'indépendance." },
              { text: "Un test positif chez 99 % des malades garantit qu'un test positif signifie la maladie avec une probabilité de 0,99.", true: false, why: "C'est confondre P_M(T) et P_T(M) ; si la maladie est rare, P_T(M) peut être bien plus faible." },
              { text: "La formule des probabilités totales additionne les chemins qui mènent à un même événement.", true: true, why: "P(B) = P(A ∩ B) + P(Ā ∩ B), chaque terme étant la probabilité d'un chemin." },
            ],
          },
          quiz: [
            {
              q: "Si P(A) = 0,5 et P_A(B) = 0,4, que vaut P(A ∩ B) ?",
              options: ["0,9", "0,8", "0,1", "0,2"],
              answer: 3,
              why: "P(A ∩ B) = P(A) × P_A(B) = 0,5 × 0,4 = 0,2.",
            },
            {
              q: "Dans un arbre pondéré, que vaut la somme des probabilités des branches issues d'un même nœud ?",
              options: ["1", "0", "Le produit des probabilités précédentes", "Cela dépend de l'arbre"],
              answer: 0,
              why: "Les branches issues d'un même nœud se partagent toutes les issues possibles : leurs probabilités ont pour somme 1.",
            },
            {
              q: "On donne P(A) = 0,3, P_A(B) = 0,5 et P_Ā(B) = 0,2. Que vaut P(B) ?",
              options: ["0,7", "0,35", "0,29", "0,10"],
              answer: 2,
              why: "P(B) = 0,3 × 0,5 + 0,7 × 0,2 = 0,15 + 0,14 = 0,29.",
            },
            {
              q: "Quelle formule donne P_B(A) ?",
              options: ["P(A ∩ B) ÷ P(B)", "P(A ∩ B) ÷ P(A)", "P(A) × P(B)", "P_A(B) ÷ P(B)"],
              answer: 0,
              why: "Par définition, P_B(A) = P(A ∩ B) ÷ P(B) : on divise par la probabilité de l'événement que l'on sait réalisé.",
            },
            {
              q: "Un test est positif chez 99 % des malades. Une personne testée positive a-t-elle 99 % de risque d'être malade ?",
              options: ["Oui, c'est exactement la même probabilité exprimée autrement", "Non, car P_M(T) et P_T(M) sont différentes", "Oui, si le test est fiable", "Non, car la probabilité vaut alors 1 %"],
              answer: 1,
              why: "0,99 est P_M(T). La probabilité d'être malade sachant que le test est positif, P_T(M), dépend aussi de la fréquence de la maladie et des faux positifs.",
            },
          ],
          trap: "Confondre P_A(B) et P(A ∩ B) (écrire sur le second niveau de l'arbre des probabilités d'intersections), ou confondre P_A(B) et P_B(A), en particulier dans les tests de dépistage.",
          method: "Traduisez chaque donnée de l'énoncé avant de construire l'arbre : « parmi les A, x % ... » donne P_A(...) et se place sur une branche du second niveau ; « x % de la population est ... et ... » donne une intersection, c'est-à-dire un chemin entier.",
        },
      ],
    },
    /* ==================================================================== */
    /* MATHÉMATIQUES : MODÉLISER DES ÉVOLUTIONS                               */
    /* ==================================================================== */
    {
      id: 'phenomenes-evolution',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-lineaire',
          title: 'Évolutions linéaires : suites arithmétiques et fonctions affines',
          minutes: 30,
          objectives: [
            "Reconnaître une évolution linéaire, caractérisée par des variations absolues constantes.",
            "Exprimer le terme général d'une suite arithmétique et calculer un terme de rang donné.",
            "Modéliser une évolution linéaire par une suite arithmétique ou une fonction affine, et interpréter la raison ou le coefficient directeur.",
            "Déterminer à partir de quel rang une grandeur à évolution linéaire dépasse un seuil donné.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une évolution linéaire ?",
              paragraphs: [
                "Une grandeur a une évolution linéaire lorsqu'elle augmente, ou diminue, de la même quantité à chaque période : sa variation absolue est constante. Un salaire augmenté de 50 € chaque année, un réservoir qui perd 3 litres par heure, un abonnement qui coûte 10 € de plus par mois de location sont des exemples d'évolutions linéaires.",
                "Attention : dans une évolution linéaire, ce n'est pas le taux d'évolution qui est constant. Une population qui passe de 1 000 à 1 200 puis à 1 400 augmente chaque année de 200 individus, mais son taux d'évolution passe de 20 % (200 ÷ 1 000) à environ 16,7 % (200 ÷ 1 200) : à variation absolue constante, le taux d'évolution diminue quand la grandeur augmente.",
              ],
              box: { label: "Repère", text: "Évolution linéaire : on ajoute (ou retranche) toujours la même quantité. Évolution exponentielle : on multiplie toujours par le même nombre. Pour les distinguer, on calcule les différences successives." },
            },
            {
              heading: "Les suites arithmétiques",
              paragraphs: [
                "Une suite (uₙ) est une liste de nombres u₀, u₁, u₂, ..., indexés par un entier naturel n (le rang). Elle est arithmétique s'il existe un nombre r, appelé raison, tel que, pour tout entier n, uₙ₊₁ = uₙ + r : on passe d'un terme au suivant en ajoutant toujours r. Pour reconnaître une suite arithmétique, on vérifie que les différences uₙ₊₁ - uₙ sont toutes égales.",
                "Le terme de rang n s'obtient directement par la formule uₙ = u₀ + n × r : pour aller de u₀ à uₙ, on ajoute n fois la raison. Si la suite commence au rang 1, on écrit uₙ = u₁ + (n - 1) × r, et plus généralement uₙ = uₚ + (n - p) × r. Exemple : si u₀ = 12 et r = 5, alors u₁₀ = 12 + 10 × 5 = 62.",
                "Le sens de variation dépend du signe de la raison : si r > 0, la suite est croissante ; si r < 0, elle est décroissante ; si r = 0, elle est constante. Une suite arithmétique modélise une grandeur observée à intervalles réguliers (chaque année, chaque mois) et qui varie chaque fois de la même quantité r.",
              ],
              box: { label: "Formule", text: "Suite arithmétique de raison r : uₙ₊₁ = uₙ + r, et uₙ = u₀ + n × r (ou uₙ = u₁ + (n - 1) × r). Croissante si r > 0, décroissante si r < 0." },
            },
            {
              heading: "Points alignés et fonctions affines",
              paragraphs: [
                "Si l'on représente les termes d'une suite arithmétique par les points de coordonnées (n ; uₙ), ces points sont alignés : ils sont sur la droite d'équation y = r × x + u₀. La suite est en quelque sorte la version « par paliers » d'une fonction affine.",
                "Une fonction affine est une fonction définie sur ℝ par f(x) = ax + b, où a est le coefficient directeur et b l'ordonnée à l'origine. Sa représentation graphique est une droite. Ses accroissements sont proportionnels à ceux de la variable : f(x₂) - f(x₁) = a × (x₂ - x₁). Ainsi, a = (f(x₂) - f(x₁)) ÷ (x₂ - x₁) est la variation de f(x) quand x augmente de 1. Lorsque b = 0, la fonction est linéaire et traduit une situation de proportionnalité.",
                "On utilise une suite arithmétique quand la grandeur est observée à des instants entiers (n = 0, 1, 2...) et une fonction affine quand elle varie de façon continue (par exemple en fonction du temps mesuré en heures, ou d'un nombre de kilomètres). Dans les deux cas, la raison r ou le coefficient a s'interprète comme la variation par unité.",
              ],
              box: { label: "Propriété", text: "f(x) = ax + b : f(x₂) - f(x₁) = a × (x₂ - x₁). Le coefficient directeur a = (f(x₂) - f(x₁)) ÷ (x₂ - x₁) est la variation de f(x) pour une augmentation de x d'une unité." },
            },
            {
              heading: "Utiliser un modèle linéaire",
              paragraphs: [
                "Une fois le modèle écrit, on peut faire des prévisions : calculer la valeur atteinte à une date donnée, ou chercher à partir de quand un seuil est dépassé. Pour cela, on résout une inéquation du premier degré. Exemple : uₙ = 12 000 + 1 500n dépasse 25 000 lorsque 1 500n ≥ 13 000, c'est-à-dire n ≥ 13 000 ÷ 1 500 ≈ 8,67. Comme n est un entier, on retient le plus petit entier qui convient : n = 9.",
                "Pour comparer deux offres ou deux évolutions linéaires, on résout l'équation qui traduit l'égalité des deux modèles, puis on regarde lequel est le plus avantageux de part et d'autre. Enfin, un modèle linéaire n'est valable que tant que la situation reste comparable : aucune grandeur réelle n'augmente indéfiniment de la même quantité.",
              ],
              box: { label: "Méthode", text: "Seuil : résoudre u₀ + n × r ≥ S, puis retenir le plus petit entier n solution (si r > 0, n ≥ (S - u₀) ÷ r). Penser à interpréter n dans le contexte (année, mois)." },
            },
          ],
          keyPoints: [
            "Évolution linéaire : variation absolue constante ; son taux d'évolution n'est pas constant.",
            "Suite arithmétique : uₙ₊₁ = uₙ + r ; terme général uₙ = u₀ + n × r.",
            "Croissante si r > 0, décroissante si r < 0 ; les points (n ; uₙ) sont alignés.",
            "Fonction affine f(x) = ax + b : a = variation de f(x) quand x augmente de 1 ; b = f(0).",
            "Seuil : résoudre une inéquation du premier degré, puis prendre le plus petit entier qui convient.",
          ],
          example: {
            statement: "Le service de vélos en libre-service d'une ville comptait 12 000 abonnés en 2024 (données fictives). On prévoit 1 500 abonnés supplémentaires chaque année. On note uₙ le nombre d'abonnés en 2024 + n. a) Justifier que (uₙ) est arithmétique et exprimer uₙ en fonction de n. b) Combien d'abonnés peut-on prévoir en 2030 ? c) En quelle année le nombre d'abonnés dépassera-t-il 25 000 ? d) Le taux d'évolution annuel est-il constant ?",
            solution: [
              "a) Chaque année, on ajoute 1 500 abonnés : uₙ₊₁ = uₙ + 1 500. La suite est arithmétique de premier terme u₀ = 12 000 et de raison r = 1 500, donc uₙ = 12 000 + 1 500n.",
              "b) 2030 correspond à n = 6 : u₆ = 12 000 + 1 500 × 6 = 12 000 + 9 000 = 21 000 abonnés.",
              "c) On résout 12 000 + 1 500n > 25 000, soit 1 500n > 13 000, donc n > 13 000 ÷ 1 500 ≈ 8,67. Le plus petit entier solution est n = 9. Vérification : u₈ = 24 000 et u₉ = 25 500.",
              "Le seuil sera dépassé en 2024 + 9 = 2033.",
              "d) Non. La première année, le taux vaut 1 500 ÷ 12 000 = 0,125, soit 12,5 % ; entre 2032 et 2033, il vaut 1 500 ÷ 24 000 = 0,0625, soit 6,25 %. À variation absolue constante, le taux d'évolution diminue.",
              "Réponse : uₙ = 12 000 + 1 500n ; 21 000 abonnés en 2030 ; plus de 25 000 en 2033 ; taux non constant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) (uₙ) est la suite arithmétique de premier terme u₀ = 7 et de raison 4. Calculer u₁, u₂ et u₁₀, puis exprimer uₙ en fonction de n. Le nombre 207 est-il un terme de la suite ? Si oui, de quel rang ? b) La suite (vₙ) commence par 3 ; 1 ; - 1 ; - 3. Peut-elle être arithmétique ? Préciser sa raison, son sens de variation et calculer v₂₀ dans ce cas.",
              hint: "Utilisez uₙ = u₀ + n × r. Pour savoir si 207 est un terme, résolvez l'équation uₙ = 207 et regardez si la solution est un entier naturel.",
              solution: [
                "a) u₁ = 7 + 4 = 11 ; u₂ = 11 + 4 = 15 ; u₁₀ = 7 + 10 × 4 = 47. Terme général : uₙ = 7 + 4n.",
                "7 + 4n = 207 donne 4n = 200, donc n = 50 : 207 est le terme de rang 50 (u₅₀ = 207).",
                "b) Les différences successives valent 1 - 3 = - 2 ; - 1 - 1 = - 2 ; - 3 - (- 1) = - 2 : elles sont égales, la suite peut être arithmétique de raison r = - 2.",
                "Comme r < 0, elle est décroissante, et v₂₀ = 3 + 20 × (- 2) = 3 - 40 = - 37.",
              ],
            },
            {
              level: 2,
              statement: "Une salle de sport propose deux formules (données fictives). Formule A : 15 € par séance. Formule B : un abonnement annuel de 120 €, plus 5 € par séance. On note x le nombre de séances dans l'année. a) Exprimer le coût annuel f(x) avec la formule A et g(x) avec la formule B. Quelle est la nature de chacune de ces fonctions ? b) Interpréter les nombres 5 et 120 dans g(x). c) Pour combien de séances les deux formules coûtent-elles le même prix ? d) Quelle formule conseiller à une personne qui prévoit 20 séances ? et 8 séances ?",
              hint: "Pour c, résolvez l'équation f(x) = g(x). Pour d, calculez les deux coûts ou utilisez le résultat de c.",
              solution: [
                "a) f(x) = 15x : fonction linéaire (situation de proportionnalité). g(x) = 5x + 120 : fonction affine de coefficient directeur 5 et d'ordonnée à l'origine 120.",
                "b) 5 est le coût de chaque séance supplémentaire avec la formule B (la variation de g(x) quand x augmente de 1) ; 120 est le coût fixe, payé même sans aucune séance (g(0) = 120).",
                "c) 15x = 5x + 120 donne 10x = 120, donc x = 12 : pour 12 séances, les deux formules coûtent 180 €.",
                "d) Pour 20 séances : f(20) = 300 € et g(20) = 220 €, la formule B est plus avantageuse. Pour 8 séances : f(8) = 120 € et g(8) = 160 €, la formule A est plus avantageuse. Au-delà de 12 séances, la formule B coûte moins cher.",
              ],
            },
            {
              level: 3,
              statement: "Type épreuve anticipée, sans calculatrice. Une association a planté 350 arbres en 2025 (données fictives) et prévoit d'en planter chaque année 40 de plus que l'année précédente. On note uₙ le nombre d'arbres plantés pendant l'année 2025 + n. 1) Calculer u₁ et u₂. 2) Justifier que (uₙ) est arithmétique et exprimer uₙ en fonction de n. 3) À partir de quelle année l'association plantera-t-elle plus de 1 000 arbres dans l'année ? 4) On admet que la somme de termes consécutifs d'une suite arithmétique est égale au nombre de termes multiplié par la moyenne du premier et du dernier terme. Calculer le nombre total d'arbres plantés de 2025 à 2034. 5) On donne 40 ÷ 350 ≈ 0,114 et 40 ÷ 710 ≈ 0,056. Le taux d'évolution annuel du nombre d'arbres plantés est-il constant ?",
              hint: "2034 correspond à n = 9 : de 2025 à 2034, il y a 10 termes, de u₀ à u₉.",
              solution: [
                "1) u₁ = 350 + 40 = 390 ; u₂ = 390 + 40 = 430.",
                "2) Chaque année, on plante 40 arbres de plus : uₙ₊₁ = uₙ + 40. La suite est arithmétique de premier terme u₀ = 350 et de raison 40, donc uₙ = 350 + 40n.",
                "3) 350 + 40n > 1 000 donne 40n > 650, soit n > 16,25. Le plus petit entier solution est n = 17 (u₁₆ = 990 et u₁₇ = 1 030). C'est l'année 2025 + 17 = 2042.",
                "4) u₉ = 350 + 40 × 9 = 710. Il y a 10 termes, de moyenne (350 + 710) ÷ 2 = 530. Total : 10 × 530 = 5 300 arbres.",
                "5) De 2025 à 2026, le taux vaut 40 ÷ 350 ≈ 11,4 % ; de 2034 à 2035, il vaut 40 ÷ 710 ≈ 5,6 %. Le taux n'est pas constant : il diminue, ce qui est normal pour une évolution linéaire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour modéliser une évolution par une suite arithmétique et trouver un seuil.",
            items: [
              "Calculer les différences entre deux valeurs successives",
              "Constater que ces différences sont constantes",
              "Identifier le premier terme u₀ et la raison r",
              "Écrire le terme général uₙ = u₀ + n × r",
              "Résoudre l'inéquation u₀ + n × r ≥ S",
              "Retenir le plus petit entier solution et l'interpréter",
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces suites de nombres peut être arithmétique ?",
              options: ["2 ; 4 ; 8 ; 16", "5 ; 8 ; 12 ; 17", "10 ; 7 ; 4 ; 1", "1 ; 1 ; 2 ; 3"],
              answer: 2,
              why: "On retire 3 à chaque fois : les différences sont constantes (raison - 3). La première suite est géométrique (on multiplie par 2).",
            },
            {
              q: "(uₙ) est arithmétique de premier terme u₀ = 5 et de raison 3. Que vaut u₁₀ ?",
              options: ["15", "33", "38", "35"],
              answer: 3,
              why: "u₁₀ = u₀ + 10 × r = 5 + 30 = 35.",
            },
            {
              q: "Une fonction affine f vérifie f(2) = 7 et f(5) = 16. Quel est son coefficient directeur ?",
              options: ["3", "9", "4,6", "1/3"],
              answer: 0,
              why: "a = (16 - 7) ÷ (5 - 2) = 9 ÷ 3 = 3.",
            },
            {
              q: "Une grandeur part de 1 000 et augmente de 200 unités chaque année. Comment évolue son taux d'évolution annuel ?",
              options: ["Il est constant, égal à 20 %", "Il augmente chaque année", "Il diminue chaque année", "Il est constant, égal à 200 %"],
              answer: 2,
              why: "La variation reste 200, mais elle est rapportée à une valeur de plus en plus grande : 20 %, puis environ 16,7 %, puis environ 14,3 %...",
            },
            {
              q: "On a uₙ = 40 + 6n. Quel est le plus petit entier n tel que uₙ ≥ 100 ?",
              options: ["n = 9", "n = 11", "n = 16", "n = 10"],
              answer: 3,
              why: "40 + 6n ≥ 100 équivaut à 6n ≥ 60, soit n ≥ 10 ; et u₁₀ = 100.",
            },
          ],
          trap: "Confondre le rang et le nombre de termes, ou se tromper de formule quand la suite commence à u₁ : on écrit alors uₙ = u₁ + (n - 1) × r. Autre erreur : croire qu'une hausse constante en valeur correspond à un pourcentage constant.",
          method: "Avant de choisir un modèle, calculez les différences successives et les quotients successifs des données : des différences constantes désignent une suite arithmétique, des quotients constants une suite géométrique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'modele-quadratique',
          title: 'Modéliser par une fonction du second degré',
          minutes: 35,
          objectives: [
            "Reconnaître une fonction polynôme du second degré sous ses formes développée, factorisée et canonique.",
            "Déterminer le sommet, l'axe de symétrie et le sens de variation d'une parabole selon le signe de a.",
            "Utiliser la forme factorisée pour déterminer les racines et le signe d'une fonction du second degré.",
            "Modéliser une situation par une fonction du second degré et déterminer un maximum ou un minimum.",
          ],
          course: [
            {
              heading: "Fonctions du second degré et paraboles",
              paragraphs: [
                "Une fonction polynôme du second degré est une fonction définie sur ℝ par f(x) = ax² + bx + c, où a, b et c sont des nombres réels avec a ≠ 0. C'est la forme développée. Sa courbe représentative est une parabole. Exemples : f(x) = 2x² - 8x + 3, ou g(x) = - x² + 4.",
                "Le signe de a donne l'allure de la parabole. Si a > 0, elle est tournée vers le haut : la fonction admet un minimum. Si a < 0, elle est tournée vers le bas : la fonction admet un maximum. Plus |a| est grand, plus la parabole est resserrée.",
                "Ces fonctions modélisent de nombreuses situations : la hauteur d'un objet lancé en fonction du temps (en négligeant les frottements), l'aire d'un rectangle dont le périmètre est fixé, le bénéfice d'une entreprise en fonction de la quantité produite. À chaque fois, on cherche souvent la valeur qui rend une grandeur maximale ou minimale.",
              ],
            },
            {
              heading: "Sommet, axe de symétrie et variations",
              paragraphs: [
                "Le point le plus bas (si a > 0) ou le plus haut (si a < 0) de la parabole est son sommet S(α ; β), avec α = - b ÷ (2a) et β = f(α). La parabole est symétrique par rapport à la droite verticale d'équation x = α, appelée axe de symétrie. Exemple : pour f(x) = 2x² - 8x + 3, α = 8 ÷ 4 = 2 et β = f(2) = 8 - 16 + 3 = - 5 ; le sommet est S(2 ; - 5) et f admet un minimum égal à - 5, atteint en x = 2.",
                "Si a > 0, f est décroissante sur ]- ∞ ; α] puis croissante sur [α ; + ∞[. Si a < 0, f est croissante sur ]- ∞ ; α] puis décroissante sur [α ; + ∞[. On résume ces résultats dans un tableau de variations.",
                "La forme canonique f(x) = a(x - α)² + β fait apparaître directement le sommet. Pour l'exemple : f(x) = 2(x - 2)² - 5. On le vérifie en développant : 2(x² - 4x + 4) - 5 = 2x² - 8x + 3.",
              ],
              box: { label: "Formule", text: "Sommet de la parabole d'équation y = ax² + bx + c : S(α ; β) avec α = - b ÷ (2a) et β = f(α). Axe de symétrie : x = α. Forme canonique : f(x) = a(x - α)² + β." },
            },
            {
              heading: "Racines, forme factorisée et signe",
              paragraphs: [
                "Une racine de f est un nombre x tel que f(x) = 0 : c'est l'abscisse d'un point où la parabole coupe l'axe des abscisses. Une parabole peut couper cet axe en deux points, le toucher en un seul point (son sommet), ou ne pas le rencontrer.",
                "Quand f a deux racines x₁ et x₂, elle peut s'écrire sous forme factorisée : f(x) = a(x - x₁)(x - x₂). On lit alors directement les racines, grâce à la règle du produit nul : un produit est nul si et seulement si l'un de ses facteurs est nul. Par symétrie, le sommet est au milieu des racines : α = (x₁ + x₂) ÷ 2. Exemple : g(x) = - 2(x - 5)(x - 15) a pour racines 5 et 15, et son sommet a pour abscisse 10.",
                "La forme factorisée donne aussi le signe : f(x) est du signe de a à l'extérieur des racines et du signe opposé entre les racines. Pour g, a = - 2 < 0 : g(x) est positif sur [5 ; 15] et négatif en dehors.",
              ],
              box: { label: "Propriété", text: "Si f(x) = a(x - x₁)(x - x₂), alors f a pour racines x₁ et x₂ ; le sommet a pour abscisse (x₁ + x₂) ÷ 2 ; f(x) est du signe de a à l'extérieur de [x₁ ; x₂] et du signe opposé à l'intérieur." },
            },
            {
              heading: "Modéliser et optimiser",
              paragraphs: [
                "Modèle simplifié de chute : un ballon lancé verticalement depuis le sol à 20 m/s a pour hauteur h(t) = - 5t² + 20t, en mètres, t en secondes (en prenant une intensité de la pesanteur arrondie à 10 m/s² et en négligeant les frottements). On factorise : h(t) = - 5t(t - 4). Le ballon quitte le sol à t = 0 et y retombe à t = 4 s. Le sommet est atteint à t = 2 s, avec h(2) = - 20 + 40 = 20 m : c'est la hauteur maximale.",
                "Dans un problème, il faut toujours préciser le domaine de validité du modèle : ici, t varie de 0 à 4 s ; une quantité produite ne peut pas être négative ; une longueur doit rester positive. Le maximum ou le minimum cherché se trouve au sommet, à condition que α appartienne à ce domaine.",
              ],
              box: { label: "À retenir", text: "Pour optimiser une grandeur modélisée par f(x) = ax² + bx + c : le maximum (a < 0) ou le minimum (a > 0) est atteint en α = - b ÷ (2a) et vaut f(α), si α est dans le domaine d'étude." },
            },
          ],
          keyPoints: [
            "f(x) = ax² + bx + c avec a ≠ 0 : la courbe est une parabole, tournée vers le haut si a > 0, vers le bas si a < 0.",
            "Sommet : α = - b ÷ (2a), β = f(α) ; axe de symétrie x = α.",
            "Forme canonique a(x - α)² + β : on y lit le sommet. Forme factorisée a(x - x₁)(x - x₂) : on y lit les racines.",
            "Signe : celui de a à l'extérieur des racines, l'opposé entre les racines.",
            "Optimiser : le maximum ou le minimum est au sommet, dans les limites du domaine de validité.",
          ],
          example: {
            statement: "Une entreprise fabrique x centaines d'objets par jour, avec 0 ≤ x ≤ 20 (données fictives). Son bénéfice, en milliers d'euros, est B(x) = - 2x² + 40x - 150. a) Montrer que B(x) = - 2(x - 5)(x - 15). b) Pour quelles productions le bénéfice est-il nul ? positif ? c) Quelle production rend le bénéfice maximal ? Quel est ce bénéfice maximal ?",
            solution: [
              "a) On développe : - 2(x - 5)(x - 15) = - 2(x² - 15x - 5x + 75) = - 2(x² - 20x + 75) = - 2x² + 40x - 150 = B(x).",
              "b) Règle du produit nul : B(x) = 0 pour x = 5 ou x = 15, soit 500 ou 1 500 objets.",
              "Comme a = - 2 < 0, B(x) est positif entre les racines : le bénéfice est positif pour une production comprise entre 500 et 1 500 objets, et négatif (perte) en dehors.",
              "c) La parabole est tournée vers le bas : le maximum est au sommet. α = - 40 ÷ (2 × (- 2)) = 10, ce que confirme le milieu des racines (5 + 15) ÷ 2 = 10.",
              "B(10) = - 2 × 100 + 400 - 150 = 50.",
              "Réponse : bénéfice nul pour 500 et 1 500 objets, positif entre les deux ; maximal pour 1 000 objets, il vaut alors 50 000 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f(x) = x² - 6x + 5. a) Donner a, b et c, et préciser l'allure de la parabole. b) Calculer les coordonnées du sommet et dresser le tableau de variations de f. c) Vérifier que f(x) = (x - 1)(x - 5) et en déduire les racines. d) Étudier le signe de f(x).",
              hint: "Utilisez α = - b ÷ (2a), puis calculez β = f(α). Vérifiez que α est bien au milieu des racines.",
              solution: [
                "a) a = 1, b = - 6, c = 5. Comme a > 0, la parabole est tournée vers le haut : f admet un minimum.",
                "b) α = 6 ÷ 2 = 3 et β = f(3) = 9 - 18 + 5 = - 4. Sommet S(3 ; - 4). f est décroissante sur ]- ∞ ; 3] et croissante sur [3 ; + ∞[ ; son minimum vaut - 4.",
                "c) (x - 1)(x - 5) = x² - 5x - x + 5 = x² - 6x + 5 = f(x). Les racines sont 1 et 5 ; leur milieu est bien (1 + 5) ÷ 2 = 3 = α.",
                "d) a = 1 > 0 : f(x) est positif sur ]- ∞ ; 1] et sur [5 ; + ∞[, négatif sur [1 ; 5] (nul en 1 et en 5).",
              ],
            },
            {
              level: 2,
              statement: "Depuis le haut d'un muret de 15 m, on lance une balle vers le haut. Sa hauteur au-dessus du sol est modélisée par h(t) = - 5t² + 10t + 15, en mètres, t en secondes (modèle simplifié). a) À quelle hauteur la balle est-elle lancée ? b) Montrer que h(t) = - 5(t + 1)(t - 3). c) À quel instant la balle touche-t-elle le sol ? d) Déterminer la hauteur maximale atteinte et l'instant correspondant. e) Vérifier que h(t) = - 5(t - 1)² + 20.",
              hint: "La balle touche le sol quand h(t) = 0, avec t ≥ 0. Le maximum est au sommet de la parabole.",
              solution: [
                "a) h(0) = 15 : la balle est lancée à 15 m de hauteur.",
                "b) - 5(t + 1)(t - 3) = - 5(t² - 3t + t - 3) = - 5(t² - 2t - 3) = - 5t² + 10t + 15 = h(t).",
                "c) h(t) = 0 pour t = - 1 ou t = 3. Comme t ≥ 0, la balle touche le sol à t = 3 s.",
                "d) α = - 10 ÷ (2 × (- 5)) = 1 et h(1) = - 5 + 10 + 15 = 20. La balle atteint sa hauteur maximale de 20 m au bout de 1 s.",
                "e) - 5(t - 1)² + 20 = - 5(t² - 2t + 1) + 20 = - 5t² + 10t - 5 + 20 = - 5t² + 10t + 15 = h(t). On y lit directement le sommet (1 ; 20).",
              ],
            },
            {
              level: 3,
              statement: "Type épreuve anticipée, sans calculatrice. Un jardinier dispose de 40 m de grillage pour clôturer un enclos rectangulaire adossé à un mur : le grillage ne couvre que trois côtés. On note x la largeur (les deux côtés perpendiculaires au mur), en mètres. 1) Exprimer la longueur du côté parallèle au mur en fonction de x, et préciser les valeurs possibles de x. 2) Montrer que l'aire de l'enclos est A(x) = - 2x² + 40x. 3) Déterminer les dimensions qui rendent l'aire maximale, et cette aire maximale. 4) Vérifier que A(x) - 192 = - 2(x - 8)(x - 12). 5) En déduire pour quelles largeurs l'aire est au moins égale à 192 m².",
              hint: "Le grillage couvre deux largeurs et une longueur : 2x + longueur = 40. Pour la question 5, étudiez le signe de A(x) - 192.",
              solution: [
                "1) 2x + L = 40, donc L = 40 - 2x. Il faut x > 0 et 40 - 2x > 0, soit 0 < x < 20.",
                "2) A(x) = x × (40 - 2x) = 40x - 2x² = - 2x² + 40x.",
                "3) a = - 2 < 0 : le maximum est au sommet. α = - 40 ÷ (2 × (- 2)) = 10, qui est bien dans ]0 ; 20[. A(10) = - 200 + 400 = 200. L'aire maximale est de 200 m², pour une largeur de 10 m et une longueur de 40 - 20 = 20 m.",
                "4) - 2(x - 8)(x - 12) = - 2(x² - 12x - 8x + 96) = - 2(x² - 20x + 96) = - 2x² + 40x - 192 = A(x) - 192.",
                "5) A(x) ≥ 192 équivaut à - 2(x - 8)(x - 12) ≥ 0. Comme a = - 2 < 0, l'expression est positive entre les racines 8 et 12. L'aire est au moins égale à 192 m² pour une largeur comprise entre 8 m et 12 m.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à ce qu'il indique sur la parabole.",
            pairs: [
              { left: "a > 0", right: "Parabole tournée vers le haut : la fonction admet un minimum" },
              { left: "a < 0", right: "Parabole tournée vers le bas : la fonction admet un maximum" },
              { left: "- b ÷ (2a)", right: "Abscisse du sommet et équation de l'axe de symétrie" },
              { left: "a(x - x₁)(x - x₂)", right: "Forme factorisée, qui donne les racines" },
              { left: "a(x - α)² + β", right: "Forme canonique, qui donne le sommet" },
              { left: "f(x) = 0", right: "Équation dont les solutions sont les abscisses des points sur l'axe des abscisses" },
            ],
          },
          quiz: [
            {
              q: "La parabole d'équation y = - 3x² + 6x + 1 est tournée :",
              options: ["vers le haut, avec un minimum", "vers la droite", "vers la gauche", "vers le bas, avec un maximum"],
              answer: 3,
              why: "Le coefficient de x² est a = - 3 < 0 : la parabole est tournée vers le bas et la fonction admet un maximum.",
            },
            {
              q: "Quelle est l'abscisse du sommet de la parabole d'équation y = 2x² - 12x + 7 ?",
              options: ["- 3", "6", "3", "12"],
              answer: 2,
              why: "α = - b ÷ (2a) = 12 ÷ 4 = 3.",
            },
            {
              q: "Quelles sont les racines de f(x) = 4(x - 2)(x + 7) ?",
              options: ["2 et - 7", "- 2 et 7", "4, 2 et - 7", "2 et 7"],
              answer: 0,
              why: "Un produit est nul si l'un de ses facteurs est nul : x - 2 = 0 donne 2 et x + 7 = 0 donne - 7. Le facteur 4 ne s'annule jamais.",
            },
            {
              q: "f(x) = - (x - 1)(x - 9). Sur quel ensemble f(x) est-il positif ou nul ?",
              options: ["]- ∞ ; 1] et [9 ; + ∞[", "Pour tout x réel", "Jamais", "[1 ; 9]"],
              answer: 3,
              why: "a = - 1 < 0 : f(x) est du signe opposé à a, donc positif, entre les racines 1 et 9.",
            },
            {
              q: "Une parabole coupe l'axe des abscisses en x = - 2 et x = 6. Quelle est l'abscisse de son sommet ?",
              options: ["4", "2", "8", "- 4"],
              answer: 1,
              why: "Par symétrie, le sommet est au milieu des racines : (- 2 + 6) ÷ 2 = 2.",
            },
          ],
          trap: "Oublier le signe moins dans α = - b ÷ (2a), ou se tromper de signe sur b (pour y = 2x² - 12x + 7, b = - 12 et α = 3). Autre erreur fréquente : donner le maximum α au lieu de la valeur maximale f(α), ou l'inverse.",
          method: "Quand plusieurs formes sont proposées, choisissez la plus adaptée à la question : forme factorisée pour les racines et le signe, forme canonique pour le sommet, forme développée pour calculer f(0). Vérifiez toujours qu'elles sont égales en développant.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-exponentielle',
          title: 'Évolutions exponentielles : suites géométriques et fonctions x ↦ aˣ',
          minutes: 35,
          objectives: [
            "Reconnaître une évolution exponentielle, caractérisée par un taux d'évolution constant.",
            "Exprimer le terme général d'une suite géométrique et calculer un terme de rang donné.",
            "Utiliser les propriétés algébriques et le sens de variation des fonctions x ↦ aˣ.",
            "Calculer un taux d'évolution moyen et comparer une évolution linéaire et une évolution exponentielle.",
          ],
          course: [
            {
              heading: "Évolutions à taux constant",
              paragraphs: [
                "Une grandeur a une évolution exponentielle lorsqu'elle est multipliée par le même nombre à chaque période : son taux d'évolution est constant. Un capital placé à 3 % par an est multiplié chaque année par 1,03 ; une population de bactéries qui double toutes les heures est multipliée par 2 ; un médicament éliminé à raison de 20 % par heure voit sa concentration multipliée par 0,8 chaque heure.",
                "Contrairement à une évolution linéaire, la variation absolue n'est pas constante : elle est proportionnelle à la valeur atteinte. Un capital de 1 000 € à 10 % par an gagne 100 € la première année, puis 110 € la deuxième, puis 121 € la troisième. C'est pourquoi une évolution exponentielle finit toujours par dépasser n'importe quelle évolution linéaire croissante.",
              ],
            },
            {
              heading: "Les suites géométriques",
              paragraphs: [
                "Une suite (uₙ) est géométrique s'il existe un nombre q, appelé raison, tel que, pour tout entier n, uₙ₊₁ = q × uₙ. Une évolution au taux constant t se modélise par une suite géométrique de raison q = 1 + t, le coefficient multiplicateur. Pour reconnaître une suite géométrique à termes non nuls, on vérifie que les quotients uₙ₊₁ ÷ uₙ sont tous égaux.",
                "Le terme de rang n s'obtient par uₙ = u₀ × qⁿ : partir de u₀ et multiplier n fois par q. Plus généralement, uₙ = uₚ × q^(n - p). Exemple : un capital de 2 000 € placé à 3 % par an vaut, au bout de n années, uₙ = 2 000 × 1,03ⁿ.",
                "Pour u₀ > 0 et q > 0, la suite est croissante si q > 1, décroissante si 0 < q < 1, constante si q = 1. Les points (n ; uₙ) ne sont pas alignés : ils dessinent une courbe qui monte de plus en plus vite (q > 1) ou qui se rapproche de plus en plus lentement de 0 (0 < q < 1).",
              ],
              box: { label: "Formule", text: "Suite géométrique de raison q : uₙ₊₁ = q × uₙ et uₙ = u₀ × qⁿ. Taux d'évolution constant t : q = 1 + t. Pour u₀ > 0 : croissante si q > 1, décroissante si 0 < q < 1." },
            },
            {
              heading: "Les fonctions x ↦ aˣ",
              paragraphs: [
                "Pour un nombre a > 0, on prolonge la suite des puissances aⁿ (n entier) en une fonction définie pour tout réel x : la fonction x ↦ aˣ, appelée fonction exponentielle de base a. Elle permet de modéliser une évolution à taux constant de façon continue, par exemple la valeur d'un placement au bout d'une demi-année. On a a⁰ = 1, a¹ = a, et par exemple a^(1/2) = √a.",
                "Ces fonctions conservent les règles de calcul des puissances : pour tous réels x et y, a^(x + y) = aˣ × a^y ; a^(- x) = 1 ÷ aˣ ; a^(x - y) = aˣ ÷ a^y ; (aˣ)ⁿ = a^(nx). De plus, aˣ > 0 pour tout réel x. Exemples : 2³ × 2⁴ = 2⁷ = 128 ; 9^(1/2) = 3 ; 4^(- 1) = 0,25.",
                "Leur sens de variation dépend de a : si a > 1, la fonction x ↦ aˣ est strictement croissante sur ℝ ; si 0 < a < 1, elle est strictement décroissante ; si a = 1, elle est constante, égale à 1. Une grandeur qui évolue au taux t par unité de temps se modélise par f(x) = f(0) × (1 + t)ˣ.",
              ],
              box: { label: "Propriété", text: "Pour a > 0 et x, y réels : a^(x + y) = aˣ × a^y ; a^(- x) = 1 ÷ aˣ ; aˣ > 0. Si a > 1, x ↦ aˣ est croissante ; si 0 < a < 1, elle est décroissante." },
            },
            {
              heading: "Taux moyen et demi-vie",
              paragraphs: [
                "Si une grandeur a été multipliée par C en n périodes, le taux d'évolution moyen par période est le taux constant tₘ qui produirait le même effet : (1 + tₘ)ⁿ = C, donc 1 + tₘ = C^(1/n). Exemple : un prix multiplié par 1,21 en 2 ans a un taux annuel moyen de 10 %, car 1,21^(1/2) = √1,21 = 1,1. Un prix qui double en 4 ans a un taux annuel moyen de 2^(1/4) - 1 ≈ 0,189, soit environ 18,9 %, et non 25 %.",
                "Pour une décroissance exponentielle, on parle de demi-vie : c'est la durée au bout de laquelle la grandeur est divisée par 2. Elle est constante : une substance radioactive de demi-vie T voit son nombre de noyaux divisé par 2 après T, par 4 après 2T, par 8 après 3T. On peut écrire N(t) = N₀ × (1/2)^(t ÷ T).",
              ],
              box: { label: "Formule", text: "Taux moyen sur n périodes d'une grandeur multipliée par C : tₘ = C^(1/n) - 1. Demi-vie T : N(t) = N₀ × (1/2)^(t ÷ T)." },
            },
          ],
          keyPoints: [
            "Évolution exponentielle : taux d'évolution constant ; on multiplie toujours par q = 1 + t.",
            "Suite géométrique : uₙ₊₁ = q × uₙ ; uₙ = u₀ × qⁿ.",
            "Fonction x ↦ aˣ (a > 0) : a^(x + y) = aˣ × a^y, a⁰ = 1, aˣ > 0.",
            "Croissante si a > 1 (ou q > 1), décroissante si 0 < a < 1.",
            "Taux moyen sur n périodes : C^(1/n) - 1 ; demi-vie : durée constante de division par 2.",
            "À long terme, une croissance exponentielle dépasse toute croissance linéaire.",
          ],
          example: {
            statement: "On place 2 000 € à intérêts composés au taux de 3 % par an : chaque année, les intérêts s'ajoutent au capital. On note uₙ le capital au bout de n années. a) Calculer u₁ et u₂. b) Exprimer uₙ en fonction de n. c) Sachant que 1,03¹⁰ ≈ 1,3439, calculer le capital au bout de 10 ans. d) Comparer avec un placement qui rapporterait 60 € par an (intérêts simples).",
            solution: [
              "a) u₁ = 2 000 × 1,03 = 2 060 € ; u₂ = 2 060 × 1,03 = 2 121,80 €.",
              "b) Chaque année, le capital est multiplié par 1,03 : la suite est géométrique de premier terme 2 000 et de raison 1,03, donc uₙ = 2 000 × 1,03ⁿ.",
              "c) u₁₀ = 2 000 × 1,03¹⁰ ≈ 2 000 × 1,3439 ≈ 2 687,80 €.",
              "d) Avec 60 € par an, le capital vaut 2 000 + 60n (évolution linéaire), soit 2 600 € au bout de 10 ans.",
              "Les deux placements rapportent 60 € la première année, mais les intérêts composés rapportent ensuite de plus en plus : l'écart, d'environ 88 € après 10 ans, ne cesse de se creuser.",
              "Réponse : uₙ = 2 000 × 1,03ⁿ ; environ 2 687,80 € au bout de 10 ans, contre 2 600 € avec des intérêts simples.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) (uₙ) est la suite géométrique de premier terme u₀ = 3 et de raison 2. Calculer u₁ à u₅, exprimer uₙ en fonction de n et calculer u₁₀. b) (vₙ) est géométrique de premier terme v₀ = 800 et de raison 0,5. Calculer v₃ et donner le sens de variation de la suite. c) La suite 5 ; 15 ; 45 ; 135 peut-elle être géométrique ? Si oui, quelle est sa raison ?",
              hint: "Utilisez uₙ = u₀ × qⁿ. Pour c, calculez les quotients de chaque terme par le précédent.",
              solution: [
                "a) u₁ = 6 ; u₂ = 12 ; u₃ = 24 ; u₄ = 48 ; u₅ = 96. uₙ = 3 × 2ⁿ, donc u₁₀ = 3 × 1 024 = 3 072.",
                "b) v₃ = 800 × 0,5³ = 800 × 0,125 = 100. Comme v₀ > 0 et 0 < 0,5 < 1, la suite est décroissante.",
                "c) 15 ÷ 5 = 3 ; 45 ÷ 15 = 3 ; 135 ÷ 45 = 3 : les quotients sont égaux, la suite peut être géométrique de raison 3.",
              ],
            },
            {
              level: 2,
              statement: "Sans calculatrice. a) Écrire sous la forme d'une seule puissance, puis calculer : 2³ × 2⁴ ; 5^(0,5) × 5^(1,5) ; 10⁶ ÷ 10⁸. b) Calculer 9^(1/2), 4^(- 1) et 8^(1/3). c) Comparer 0,8³ et 0,8⁵ sans les calculer, en justifiant. d) Un loyer a été multiplié par 1,44 en deux ans. Calculer son taux d'évolution annuel moyen. e) Une population double en 3 ans. On donne 2^(1/3) ≈ 1,26. Quel est son taux de croissance annuel moyen ?",
              hint: "Utilisez a^(x + y) = aˣ × a^y. Pour c, pensez au sens de variation de x ↦ 0,8ˣ. Pour d et e, le taux moyen vaut C^(1/n) - 1.",
              solution: [
                "a) 2³ × 2⁴ = 2⁷ = 128 ; 5^(0,5) × 5^(1,5) = 5² = 25 ; 10⁶ ÷ 10⁸ = 10^(- 2) = 0,01.",
                "b) 9^(1/2) = √9 = 3 ; 4^(- 1) = 1 ÷ 4 = 0,25 ; 8^(1/3) = 2, car 2³ = 8.",
                "c) Comme 0 < 0,8 < 1, la fonction x ↦ 0,8ˣ est décroissante ; 3 < 5, donc 0,8³ > 0,8⁵.",
                "d) 1 + tₘ = 1,44^(1/2) = √1,44 = 1,2, donc tₘ = 0,2 : hausse moyenne de 20 % par an.",
                "e) 1 + tₘ = 2^(1/3) ≈ 1,26, donc tₘ ≈ 0,26 : environ 26 % par an (et non 100 ÷ 3 ≈ 33 %).",
              ],
            },
            {
              level: 3,
              statement: "Type épreuve anticipée, sans calculatrice. On injecte un médicament à un patient : sa concentration dans le sang vaut 40 mg/L juste après l'injection, puis diminue de 20 % chaque heure. On note Cₙ la concentration au bout de n heures. On donne : 0,8⁵ ≈ 0,328 ; 0,8¹⁰ ≈ 0,107 ; 0,8¹¹ ≈ 0,086 ; √0,8 ≈ 0,894. 1) Calculer C₁ et C₂. 2) Justifier que (Cₙ) est géométrique et exprimer Cₙ en fonction de n. 3) Donner une valeur approchée de C₅. 4) Le médicament n'est plus efficace en dessous de 4 mg/L. Au bout de combien d'heures entières la concentration passe-t-elle sous ce seuil ? 5) On modélise la concentration en continu par f(t) = 40 × 0,8ᵗ. Estimer la concentration une demi-heure après l'injection. 6) Un élève propose plutôt une baisse de 8 mg/L par heure. Pourquoi ce modèle linéaire est-il moins réaliste ?",
              hint: "Une baisse de 20 % correspond à un coefficient multiplicateur de 0,8. Pour la question 4, cherchez à partir de quel n on a 0,8ⁿ < 0,1.",
              solution: [
                "1) C₁ = 40 × 0,8 = 32 mg/L ; C₂ = 32 × 0,8 = 25,6 mg/L.",
                "2) Chaque heure, la concentration est multipliée par 1 - 0,20 = 0,8 : la suite est géométrique de premier terme 40 et de raison 0,8, donc Cₙ = 40 × 0,8ⁿ.",
                "3) C₅ = 40 × 0,8⁵ ≈ 40 × 0,328 ≈ 13,1 mg/L.",
                "4) Cₙ < 4 équivaut à 0,8ⁿ < 4 ÷ 40 = 0,1. Or 0,8¹⁰ ≈ 0,107 > 0,1 et 0,8¹¹ ≈ 0,086 < 0,1 ; comme la suite est décroissante, la concentration passe sous 4 mg/L au bout de 11 heures (C₁₀ ≈ 4,3 mg/L et C₁₁ ≈ 3,4 mg/L).",
                "5) f(0,5) = 40 × 0,8^(1/2) = 40 × √0,8 ≈ 40 × 0,894 ≈ 35,8 mg/L.",
                "6) Avec une baisse de 8 mg/L par heure, la concentration serait nulle au bout de 40 ÷ 8 = 5 heures, puis négative, ce qui est absurde. Le modèle exponentiel traduit mieux l'élimination : la quantité éliminée chaque heure est proportionnelle à la quantité présente, et la concentration diminue sans jamais devenir négative.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Linéaire ou exponentiel, il faut choisir.",
            statements: [
              { text: "Une grandeur qui augmente de 5 % par an a une évolution exponentielle.", true: true, why: "Elle est multipliée chaque année par 1,05 : le taux d'évolution est constant." },
              { text: "Une suite géométrique de raison 0,9 et de premier terme positif est croissante.", true: false, why: "0 < 0,9 < 1 : chaque terme est plus petit que le précédent, la suite est décroissante." },
              { text: "Pour tout réel x et tout a > 0, aˣ est strictement positif.", true: true, why: "Les fonctions x ↦ aˣ ne prennent que des valeurs strictement positives." },
              { text: "Si un prix double en 4 ans, son taux annuel moyen est de 25 %.", true: false, why: "Le taux moyen vaut 2^(1/4) - 1 ≈ 18,9 % ; diviser 100 % par 4 revient à raisonner comme pour une évolution linéaire." },
              { text: "2³ × 2⁵ = 2¹⁵.", true: false, why: "On additionne les exposants : 2³ × 2⁵ = 2⁸ = 256." },
              { text: "Avec une demi-vie de 30 ans, il reste un quart de la substance au bout de 60 ans.", true: true, why: "60 ans représentent deux demi-vies : la quantité est divisée par 2 puis encore par 2." },
              { text: "Une croissance linéaire finit toujours par dépasser une croissance exponentielle.", true: false, why: "C'est l'inverse : à long terme, une croissance exponentielle (q > 1) dépasse toute croissance linéaire." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces suites de nombres peut être géométrique ?",
              options: ["3 ; 6 ; 9 ; 12", "1 ; 4 ; 9 ; 16", "2 ; 6 ; 18 ; 54", "5 ; 10 ; 20 ; 25"],
              answer: 2,
              why: "On multiplie par 3 à chaque fois : les quotients successifs sont égaux. La première suite est arithmétique.",
            },
            {
              q: "Une grandeur augmente de 5 % par an. Par quel nombre est-elle multipliée en 3 ans ?",
              options: ["1,05³", "1,15", "3 × 1,05", "1,05 × 3 + 1"],
              answer: 0,
              why: "Elle est multipliée trois fois de suite par 1,05, soit par 1,05³ ≈ 1,158 : la hausse est d'environ 15,8 %, pas de 15 %.",
            },
            {
              q: "Que vaut 2³ × 2⁵ ?",
              options: ["2¹⁵", "4⁸", "2²", "2⁸"],
              answer: 3,
              why: "aˣ × a^y = a^(x + y) : on additionne les exposants, 3 + 5 = 8.",
            },
            {
              q: "Pour 0 < a < 1, la fonction x ↦ aˣ est :",
              options: ["croissante sur ℝ", "constante sur ℝ", "décroissante sur ℝ", "négative pour x < 0"],
              answer: 2,
              why: "Si 0 < a < 1, aˣ diminue quand x augmente ; elle reste toujours strictement positive.",
            },
            {
              q: "Un prix a été multiplié par 1,21 en deux ans. Quel est son taux d'évolution annuel moyen ?",
              options: ["10,5 %", "10 %", "21 %", "11 %"],
              answer: 1,
              why: "1 + tₘ = √1,21 = 1,1, donc tₘ = 10 %. En effet, 1,1 × 1,1 = 1,21.",
            },
          ],
          trap: "Calculer un taux moyen en divisant le taux global par le nombre de périodes (doubler en 4 ans ne fait pas 25 % par an), ou multiplier les exposants au lieu de les additionner dans aˣ × a^y.",
          method: "Pour reconnaître le modèle adapté, comparez les différences et les quotients successifs ; pour un taux moyen, vérifiez votre résultat en l'élevant à la puissance n : vous devez retrouver le coefficient multiplicateur global.",
        },
      ],
    },
    /* ==================================================================== */
    /* PRÉPARER L'ÉPREUVE ANTICIPÉE DE MATHÉMATIQUES                          */
    /* ==================================================================== */
    {
      id: 'epreuve-anticipee-es',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'automatismes-es',
          title: 'Automatismes : calculs, pourcentages et graphiques sans calculatrice',
          minutes: 30,
          objectives: [
            "Effectuer sans calculatrice des calculs sur les fractions, les puissances de 10 et les pourcentages.",
            "Appliquer de tête un pourcentage, une proportion ou un coefficient multiplicateur.",
            "Lire graphiquement une image, des antécédents et un coefficient directeur, et résoudre rapidement une équation ou une inéquation du premier degré.",
          ],
          course: [
            {
              heading: "La partie automatismes de l'épreuve",
              paragraphs: [
                "L'épreuve anticipée de mathématiques est une épreuve écrite de deux heures, passée sans calculatrice à la fin de la classe de Première. Elle commence par une partie d'automatismes, sous forme de questions à choix multiples, notée sur 6 points ; viennent ensuite des exercices indépendants, notés sur 14 points. Les candidats qui ne suivent pas la spécialité mathématiques passent une version de l'épreuve adaptée à leur enseignement.",
                "Un automatisme est un savoir-faire que l'on doit mobiliser rapidement, sans hésiter : calculer avec des fractions et des puissances, appliquer un pourcentage, reconnaître un coefficient multiplicateur, lire un graphique, résoudre une équation simple, calculer une probabilité élémentaire. Ces savoir-faire servent aussi dans les exercices, où ils font gagner un temps précieux.",
                "Ces automatismes ne s'acquièrent pas la veille de l'épreuve : ils s'entretiennent par des séries courtes et régulières, par exemple dix questions de tête plusieurs fois par semaine, en notant les erreurs pour retravailler les points faibles.",
              ],
              box: { label: "Repère", text: "Épreuve anticipée : 2 heures, sans calculatrice. Partie 1 : automatismes en questions à choix multiples (6 points). Partie 2 : exercices indépendants (14 points)." },
            },
            {
              heading: "Calculer sans calculatrice",
              paragraphs: [
                "Fractions : pour additionner ou soustraire, on réduit au même dénominateur (3/4 + 5/6 = 9/12 + 10/12 = 19/12) ; pour multiplier, on multiplie les numérateurs entre eux et les dénominateurs entre eux, en simplifiant avant de calculer (2/3 × 9/4 = 18/12 = 3/2) ; diviser par une fraction revient à multiplier par son inverse (5 ÷ 2/3 = 5 × 3/2 = 15/2). Respectez les priorités : puissances, puis multiplications et divisions, puis additions et soustractions.",
                "Puissances de 10 : 10ᵃ × 10ᵇ = 10^(a + b), 10ᵃ ÷ 10ᵇ = 10^(a - b) et 10^(- n) = 0,0...01 avec n chiffres après la virgule. L'écriture scientifique d'un nombre est a × 10ⁿ avec 1 ≤ a < 10 : 0,0045 = 4,5 × 10⁻³ et 37 000 = 3,7 × 10⁴. Pour multiplier deux nombres en écriture scientifique, on multiplie les nombres a entre eux et l'on additionne les exposants.",
                "Quelques réflexes font gagner du temps : multiplier par 0,5 revient à diviser par 2, multiplier par 0,25 à diviser par 4, diviser par 0,5 à multiplier par 2 ; multiplier par 1,5, c'est ajouter la moitié. Pour vérifier un résultat, estimez d'abord son ordre de grandeur : 0,48 × 205 est proche de 0,5 × 200 = 100.",
              ],
              box: { label: "Règle", text: "a/b + c/d : même dénominateur d'abord. a/b × c/d = (a × c)/(b × d). Diviser par c/d revient à multiplier par d/c. 10ᵃ × 10ᵇ = 10^(a + b). Écriture scientifique : a × 10ⁿ avec 1 ≤ a < 10." },
            },
            {
              heading: "Pourcentages et évolutions de tête",
              paragraphs: [
                "Pour calculer un pourcentage de tête, on part de 10 % (diviser par 10) et de 1 % (diviser par 100) : 15 % de 240 = 10 % + 5 % = 24 + 12 = 36. Il est utile de connaître les correspondances 50 % = 1/2, 25 % = 1/4, 75 % = 3/4, 20 % = 1/5, 10 % = 1/10, 12,5 % = 1/8. Astuce : x % de y est égal à y % de x, donc 8 % de 25 = 25 % de 8 = 2.",
                "Une proportion se convertit en pourcentage en se ramenant à un dénominateur 100 : 18 sur 24 = 3/4 = 75 % ; 7 sur 20 = 35/100 = 35 %. Une évolution se traduit par un coefficient multiplicateur : une hausse de 20 % donne CM = 1,2, une baisse de 35 % donne CM = 0,65. Deux évolutions successives se combinent en multipliant les coefficients : 1,2 × 0,9 = 1,08, soit une hausse de 8 %.",
              ],
              box: { label: "À retenir", text: "10 % : diviser par 10 ; 5 % : la moitié de 10 % ; 25 % : diviser par 4 ; 20 % : diviser par 5. Hausse de t % : CM = 1 + t/100 ; baisse de t % : CM = 1 - t/100. Évolutions successives : on multiplie les CM." },
            },
            {
              heading: "Lire un graphique, résoudre une équation",
              paragraphs: [
                "Sur la courbe d'une fonction f, l'image d'un nombre a est l'ordonnée du point de la courbe d'abscisse a : on part de a sur l'axe horizontal, on monte jusqu'à la courbe et on lit f(a) sur l'axe vertical. Les antécédents d'un nombre k sont les abscisses des points de la courbe d'ordonnée k : on trace la droite horizontale y = k et on lit les abscisses des points d'intersection ; il peut y en avoir zéro, un ou plusieurs.",
                "Pour une droite, le coefficient directeur se lit entre deux points A et B : a = (y_B - y_A) ÷ (x_B - x_A), c'est-à-dire la variation verticale divisée par la variation horizontale. L'ordonnée à l'origine b est l'ordonnée du point d'intersection avec l'axe vertical. Sur un diagramme circulaire, un angle de 90° représente un quart, soit 25 % ; 36° représentent 10 %.",
                "Pour résoudre une équation du premier degré comme 3x - 7 = 11, on isole x : 3x = 18, donc x = 6. Pour une inéquation, on procède de même, mais on change le sens de l'inégalité quand on multiplie ou divise par un nombre négatif : - 2x + 5 > 1 donne - 2x > - 4, donc x < 2. Vérifiez toujours en remplaçant x par la valeur trouvée.",
              ],
              box: { label: "Règle", text: "Image : on part de l'axe des abscisses. Antécédents : on part de l'axe des ordonnées. Dans une inéquation, multiplier ou diviser par un nombre négatif change le sens de l'inégalité." },
            },
          ],
          keyPoints: [
            "Épreuve de 2 h sans calculatrice : automatismes en QCM (6 points), puis exercices (14 points).",
            "Fractions : même dénominateur pour additionner, simplifier avant de multiplier, multiplier par l'inverse pour diviser.",
            "Pourcentages de tête : partir de 10 % et 1 % ; connaître 1/2, 1/4, 3/4, 1/5, 1/8.",
            "Évolutions : CM = 1 + t ; successives : multiplier les CM.",
            "Image : de l'axe horizontal vers la courbe ; antécédents : de l'axe vertical vers la courbe.",
            "Inéquation : diviser par un négatif change le sens de l'inégalité.",
          ],
          example: {
            statement: "Sans calculatrice, comme dans la partie automatismes : a) Calculer 3/4 + 5/6. b) Calculer 15 % de 240. c) Un article à 60 € augmente de 20 %. Quel est son nouveau prix ? d) Déterminer le coefficient directeur de la droite passant par A(1 ; 2) et B(3 ; 8).",
            solution: [
              "a) Le plus petit dénominateur commun de 4 et 6 est 12 : 3/4 = 9/12 et 5/6 = 10/12, donc 3/4 + 5/6 = 19/12.",
              "b) 10 % de 240 = 24 et 5 % de 240 = 12, donc 15 % de 240 = 24 + 12 = 36.",
              "c) CM = 1,2 : 60 × 1,2 = 72 €. Autre méthode : 20 % de 60 = 12, et 60 + 12 = 72 €.",
              "d) a = (8 - 2) ÷ (3 - 1) = 6 ÷ 2 = 3.",
              "Réponses : 19/12 ; 36 ; 72 € ; 3. Chaque calcul se fait en moins d'une minute avec les bons réflexes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer sans calculatrice, en donnant les fractions sous forme irréductible : a) 2/3 × 9/4 ; b) 7/5 - 1/2 ; c) 4 ÷ 2/5 ; d) 10³ × 10⁻⁵ ; e) l'écriture scientifique de 0,0045 ; f) 30 % de 70 ; g) (2,5 × 10⁴) × (4 × 10²).",
              hint: "Simplifiez avant de multiplier, réduisez au même dénominateur pour soustraire, et pour g, multipliez 2,5 par 4 puis additionnez les exposants.",
              solution: [
                "a) 2/3 × 9/4 = 18/12 = 3/2.",
                "b) 7/5 - 1/2 = 14/10 - 5/10 = 9/10.",
                "c) 4 ÷ 2/5 = 4 × 5/2 = 20/2 = 10.",
                "d) 10³ × 10⁻⁵ = 10^(3 - 5) = 10⁻² = 0,01.",
                "e) 0,0045 = 4,5 × 10⁻³.",
                "f) 10 % de 70 = 7, donc 30 % de 70 = 21.",
                "g) 2,5 × 4 = 10 et 10⁴ × 10² = 10⁶, donc le produit vaut 10 × 10⁶ = 10⁷.",
              ],
            },
            {
              level: 2,
              statement: "Questions à choix multiples (une seule bonne réponse). a) Le coefficient multiplicateur associé à une baisse de 35 % est : 0,35 ; 0,65 ; 1,35. b) Une hausse de 20 % suivie d'une baisse de 10 % équivaut à : une hausse de 10 % ; une hausse de 8 % ; une baisse de 2 %. c) La solution de 3x - 7 = 11 est : x = 6 ; x = 4/3 ; x = 18. d) L'ensemble des solutions de - 2x + 5 > 1 est : x > 2 ; x < 2 ; x > - 2. e) 18 élèves sur 24 représentent : 60 % ; 75 % ; 80 %. f) Une urne contient 3 boules rouges et 5 boules bleues indiscernables au toucher. La probabilité de tirer une boule rouge est : 3/5 ; 3/8 ; 1/3.",
              hint: "Pour b, multipliez les coefficients. Pour d, attention au sens de l'inégalité quand on divise par - 2. Pour f, comptez le nombre total de boules.",
              solution: [
                "a) 1 - 0,35 = 0,65.",
                "b) 1,2 × 0,9 = 1,08 : une hausse de 8 %.",
                "c) 3x = 18, donc x = 6. Vérification : 3 × 6 - 7 = 11.",
                "d) - 2x > - 4 ; en divisant par - 2, on change le sens : x < 2.",
                "e) 18/24 = 3/4 = 75 %.",
                "f) Il y a 8 boules dont 3 rouges, chacune ayant la même probabilité d'être tirée : P = 3/8.",
              ],
            },
            {
              level: 3,
              statement: "Type automatismes, en 10 minutes. Sur l'intervalle [0 ; 4], la courbe d'une fonction f est une parabole qui passe par les points (0 ; 3), (1 ; 0), (2 ; - 1), (3 ; 0) et (4 ; 3), et dont le sommet est le point (2 ; - 1). a) Donner l'image de 4 par f. b) Donner les antécédents de 0, puis ceux de 3. c) Résoudre graphiquement l'inéquation f(x) < 0 sur [0 ; 4]. d) Quel est le minimum de f sur [0 ; 4] ? e) Déterminer l'équation de la droite passant par les points (0 ; 3) et (1 ; 0). f) On admet que f(x) = (x - 1)(x - 3). Vérifier par le calcul les valeurs de f(0) et de f(2).",
              hint: "Les antécédents de 0 sont les abscisses des points où la courbe coupe l'axe des abscisses. Pour la droite, l'ordonnée à l'origine se lit au point d'abscisse 0.",
              solution: [
                "a) La courbe passe par (4 ; 3), donc f(4) = 3.",
                "b) Antécédents de 0 : 1 et 3. Antécédents de 3 : 0 et 4.",
                "c) La courbe est sous l'axe des abscisses entre ses deux points d'intersection avec cet axe : f(x) < 0 pour x ∈ ]1 ; 3[.",
                "d) Le minimum est l'ordonnée du sommet : - 1, atteint en x = 2.",
                "e) Coefficient directeur : (0 - 3) ÷ (1 - 0) = - 3 ; ordonnée à l'origine : 3. Équation : y = - 3x + 3.",
                "f) f(0) = (0 - 1)(0 - 3) = (- 1) × (- 3) = 3 et f(2) = (2 - 1)(2 - 3) = 1 × (- 1) = - 1 : ces valeurs correspondent bien aux points (0 ; 3) et (2 ; - 1).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque fraction au pourcentage qui lui correspond.",
            pairs: [
              { left: "1/4", right: "25 %" },
              { left: "1/5", right: "20 %" },
              { left: "3/4", right: "75 %" },
              { left: "1/8", right: "12,5 %" },
              { left: "2/5", right: "40 %" },
              { left: "3/2", right: "150 %" },
            ],
          },
          quiz: [
            {
              q: "Que vaut 3/4 + 1/6 ?",
              options: ["11/12", "4/10", "4/24", "13/12"],
              answer: 0,
              why: "3/4 = 9/12 et 1/6 = 2/12, donc la somme vaut 11/12. On n'additionne jamais les dénominateurs.",
            },
            {
              q: "Combien vaut 15 % de 60 ?",
              options: ["6", "15", "4", "9"],
              answer: 3,
              why: "10 % de 60 = 6 et 5 % de 60 = 3, donc 15 % de 60 = 9.",
            },
            {
              q: "Deux hausses successives de 10 % correspondent à une hausse globale de :",
              options: ["20 %", "21 %", "11 %", "100 %"],
              answer: 1,
              why: "1,1 × 1,1 = 1,21, soit une hausse de 21 %.",
            },
            {
              q: "Quel est l'ensemble des solutions de l'inéquation - 3x + 6 > 0 ?",
              options: ["x > 2", "x > - 2", "x < 2", "x < - 2"],
              answer: 2,
              why: "- 3x > - 6 ; en divisant par - 3, nombre négatif, on change le sens de l'inégalité : x < 2.",
            },
            {
              q: "Une droite passe par les points A(1 ; 4) et B(3 ; 10). Quel est son coefficient directeur ?",
              options: ["6", "2", "1/3", "3"],
              answer: 3,
              why: "a = (10 - 4) ÷ (3 - 1) = 6 ÷ 2 = 3.",
            },
          ],
          trap: "Additionner les dénominateurs de deux fractions, oublier de changer le sens d'une inéquation quand on divise par un nombre négatif, ou confondre image et antécédent dans une lecture graphique.",
          method: "Entraînez-vous par séries chronométrées de dix questions sans calculatrice, corrigez-vous aussitôt et tenez une liste de vos erreurs récurrentes : c'est elle qu'il faut relire avant l'épreuve. Dans un QCM, éliminez d'abord les réponses impossibles par un ordre de grandeur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'exercices-type-es',
          title: 'Méthode des exercices et gestion des deux heures',
          minutes: 25,
          objectives: [
            "Organiser les deux heures de l'épreuve entre la partie automatismes, les exercices et la relecture.",
            "Analyser un énoncé : repérer les données, la notion mobilisée et la consigne exacte.",
            "Rédiger une réponse justifiée et contrôler la vraisemblance d'un résultat obtenu sans calculatrice.",
          ],
          course: [
            {
              heading: "Connaître l'épreuve pour s'organiser",
              paragraphs: [
                "L'épreuve dure deux heures, sans calculatrice. Après la partie d'automatismes (6 points), les exercices indépendants (14 points) portent sur le programme de l'année : information chiffrée (proportions, évolutions), statistique, probabilités, modélisation d'évolutions par des suites et des fonctions. Leurs calculs sont conçus pour être faits à la main : un calcul qui devient très lourd signale souvent une erreur ou une méthode mal choisie.",
                "Les exercices étant indépendants, on peut les traiter dans l'ordre que l'on veut : commencer par celui que l'on maîtrise le mieux donne confiance et assure des points. À l'intérieur d'un exercice, les questions s'enchaînent souvent, mais un résultat donné dans l'énoncé (« montrer que P(T) = 0,134 ») peut être utilisé pour la suite même si l'on n'a pas réussi à le démontrer.",
              ],
              box: { label: "Repère", text: "2 heures, sans calculatrice. Automatismes : 6 points. Exercices indépendants : 14 points. Un résultat donné dans l'énoncé peut toujours être réutilisé dans les questions suivantes." },
            },
            {
              heading: "Gérer son temps",
              paragraphs: [
                "La répartition des points donne un repère pour répartir le temps : les automatismes représentent 30 % des points, soit de l'ordre de 35 minutes ; les exercices 70 %, soit environ 75 minutes ; il reste une dizaine de minutes pour relire. Ce n'est pas une règle officielle mais un guide, à ajuster selon vos points forts.",
                "Dans la partie automatismes, ne restez pas bloqué : si une question résiste plus de deux ou trois minutes, marquez-la et revenez-y à la fin. Dans les exercices, lisez tout l'énoncé avant de commencer, puis avancez question par question. Gardez un œil sur l'heure à chaque changement d'exercice, et réservez les dernières minutes à la relecture des calculs et à la vérification que chaque question a reçu une réponse.",
              ],
              box: { label: "Méthode", text: "Repère de répartition : environ 35 minutes pour les automatismes, 75 minutes pour les exercices, 10 minutes de relecture. Une question bloquante est marquée et reprise à la fin." },
            },
            {
              heading: "Analyser l'énoncé et rédiger",
              paragraphs: [
                "Commencez par repérer les données (soulignez les nombres, les pourcentages, les mots « parmi », « sachant que », « chaque année »), puis la notion en jeu : tableau croisé, arbre, suite arithmétique ou géométrique, fonction du second degré... Le verbe de la consigne dit ce qui est attendu : « calculer » demande un résultat avec son calcul ; « justifier » ou « montrer que » demande un raisonnement qui aboutit au résultat annoncé ; « déterminer » laisse le choix de la méthode ; « interpréter » demande une phrase dans le contexte.",
                "Une réponse complète cite la formule ou la propriété utilisée, l'applique avec les valeurs de l'énoncé, donne le résultat avec son unité, puis conclut par une phrase qui répond à la question posée. Par exemple : « La suite est géométrique de raison 0,8, car chaque heure la concentration diminue de 20 %, donc Cₙ = 40 × 0,8ⁿ. » Un résultat sans justification rapporte peu de points, même s'il est juste.",
              ],
              box: { label: "À retenir", text: "Formule ou propriété, application numérique, résultat avec unité, phrase de conclusion dans le contexte. « Montrer que » : le résultat est donné, c'est le raisonnement qui est noté." },
            },
            {
              heading: "Calculer à la main et vérifier",
              paragraphs: [
                "Sans calculatrice, simplifiez avant de calculer (18/38 = 9/19), utilisez les fractions plutôt que des décimaux interminables, et posez les opérations proprement. L'énoncé fournit souvent des valeurs approchées (« on donne 0,8¹⁰ ≈ 0,107 ») : repérez-les dès la lecture, elles indiquent les calculs attendus.",
                "Contrôlez systématiquement la vraisemblance de vos résultats : une probabilité est comprise entre 0 et 1 ; une proportion aussi ; un coefficient multiplicateur de baisse est compris entre 0 et 1 ; une population ou un prix ne peut pas être négatif ; la solution d'une équation se vérifie en la remplaçant. Une incohérence repérée à la relecture est une erreur que l'on peut encore corriger.",
              ],
            },
          ],
          keyPoints: [
            "Exercices indépendants : commencer par celui que l'on maîtrise le mieux.",
            "Repère de temps : environ 35 min d'automatismes, 75 min d'exercices, 10 min de relecture.",
            "Le verbe de la consigne (calculer, montrer, déterminer, interpréter) dit ce qui est attendu.",
            "Réponse complète : formule, application, résultat avec unité, phrase de conclusion.",
            "Un résultat donné dans l'énoncé se réutilise même si on n'a pas su le démontrer.",
            "Vérifier la vraisemblance : probabilité entre 0 et 1, valeurs positives, solution qui vérifie l'équation.",
          ],
          example: {
            statement: "Exercice type, avec une rédaction modèle. Une plateforme compte 5 000 abonnés en janvier 2026 (données fictives). Modèle A : elle gagne 400 abonnés par mois. Modèle B : le nombre d'abonnés augmente de 10 % par mois. On note aₙ et bₙ les nombres d'abonnés n mois après janvier 2026 selon chaque modèle. 1) Calculer a₃ et b₃. 2) Exprimer aₙ et bₙ en fonction de n. 3) Montrer que, pour tout n, bₙ₊₁ - bₙ = 0,1 × bₙ, et en déduire que, selon le modèle B, la plateforme gagne chaque mois au moins 500 abonnés.",
            solution: [
              "Analyse : « gagne 400 abonnés par mois » traduit une évolution linéaire (suite arithmétique) ; « augmente de 10 % par mois », une évolution exponentielle (suite géométrique de raison 1,1).",
              "1) a₁ = 5 400, a₂ = 5 800, a₃ = 6 200. b₁ = 5 000 × 1,1 = 5 500, b₂ = 5 500 × 1,1 = 6 050, b₃ = 6 050 × 1,1 = 6 655.",
              "2) (aₙ) est arithmétique de premier terme 5 000 et de raison 400, donc aₙ = 5 000 + 400n. (bₙ) est géométrique de premier terme 5 000 et de raison 1,1, donc bₙ = 5 000 × 1,1ⁿ.",
              "3) bₙ₊₁ - bₙ = 1,1 × bₙ - bₙ = (1,1 - 1) × bₙ = 0,1 × bₙ.",
              "La suite (bₙ) est croissante (raison 1,1 > 1), donc bₙ ≥ b₀ = 5 000 pour tout n, et bₙ₊₁ - bₙ = 0,1 × bₙ ≥ 0,1 × 5 000 = 500.",
              "Conclusion : selon le modèle B, la plateforme gagne chaque mois au moins 500 abonnés, donc plus que les 400 du modèle A ; dès le troisième mois, le modèle B prévoit 6 655 abonnés contre 6 200.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des consignes suivantes, expliquer précisément ce qui est attendu et ce qui serait une réponse incomplète. a) « Montrer que P(B) = 0,46. » b) « Déterminer le plus petit entier n tel que uₙ > 1 000. » c) « Interpréter le coefficient directeur dans le contexte de l'exercice. » d) « Justifier que la suite (uₙ) est géométrique. »",
              hint: "Demandez-vous chaque fois : le résultat est-il donné ? Une méthode est-elle imposée ? Faut-il une phrase avec les mots de l'énoncé ?",
              solution: [
                "a) Le résultat est donné : il faut l'établir par un calcul justifié (par exemple avec la formule des probabilités totales) qui aboutit à 0,46. Recopier 0,46 ou écrire un calcul qui ne mène pas exactement à cette valeur ne suffit pas.",
                "b) Il faut résoudre l'inéquation (ou calculer des termes successifs), puis identifier le plus petit entier qui convient et le vérifier en montrant que le terme précédent ne convient pas. Donner seulement une valeur décimale comme 16,25 serait incomplet.",
                "c) Il faut une phrase dans le contexte, avec les unités : par exemple « chaque degré supplémentaire s'accompagne en moyenne de 3,5 glaces vendues en plus ». Recopier le nombre 3,5 ne répond pas à la consigne.",
                "d) Il faut montrer que l'on passe d'un terme au suivant en multipliant toujours par le même nombre (uₙ₊₁ = q × uₙ), en le reliant à l'énoncé (« chaque année, la valeur baisse de 20 %, donc elle est multipliée par 0,8 »). Calculer seulement les trois premiers termes ne suffit pas à le prouver.",
              ],
            },
            {
              level: 2,
              statement: "À la relecture, un élève vérifie ses résultats sans refaire tous les calculs. Pour chacun, dire s'il est vraisemblable ; s'il ne l'est pas, expliquer pourquoi et corriger. a) P(A ∩ B) = 1,2. b) Le coefficient multiplicateur associé à une baisse de 30 % vaut 1,3. c) Deux hausses successives de 10 % font une hausse globale de 20 %. d) La solution de 2x + 3 = 11 est x = 7. e) Dans un lycée de 1 200 élèves, une proportion de 0,38 correspond à 456 élèves. f) Le sommet de la parabole y = x² - 6x + 5 a pour abscisse - 3.",
              hint: "Utilisez des contrôles rapides : bornes d'une probabilité, sens d'un coefficient multiplicateur, remplacement de la solution dans l'équation, formule du sommet.",
              solution: [
                "a) Invraisemblable : une probabilité est comprise entre 0 et 1. Il faut reprendre le calcul (par exemple une addition faite à la place d'une multiplication).",
                "b) Faux : une baisse correspond à un coefficient inférieur à 1. CM = 1 - 0,30 = 0,70.",
                "c) Faux : on multiplie les coefficients, 1,1 × 1,1 = 1,21, soit une hausse de 21 %.",
                "d) Faux : 2 × 7 + 3 = 17 ≠ 11. On a 2x = 8, donc x = 4 (vérification : 2 × 4 + 3 = 11).",
                "e) Vraisemblable et juste : 0,38 × 1 200 = 456. Ordre de grandeur : un peu moins de 40 % de 1 200, soit un peu moins de 480.",
                "f) Faux : α = - b ÷ (2a) = 6 ÷ 2 = 3. L'erreur vient du signe de b = - 6.",
              ],
            },
            {
              level: 3,
              statement: "Exercice type épreuve anticipée, sans calculatrice (durée conseillée : 25 minutes). Partie A. Dans un lycée (données fictives), 60 % des élèves viennent en bus. Parmi eux, 25 % arrivent en retard au moins une fois par mois ; parmi les autres élèves, cette proportion est de 10 %. On choisit un élève au hasard ; on note B « l'élève vient en bus » et R « l'élève arrive en retard au moins une fois par mois ». 1) Construire l'arbre pondéré. 2) Calculer P(B ∩ R). 3) Montrer que P(R) = 0,19. 4) L'élève choisi arrive en retard au moins une fois par mois. On donne 15 ÷ 19 ≈ 0,79 ; quelle est la probabilité qu'il vienne en bus ? Partie B. Le lycée a enregistré 500 retards en 2025 et prévoit que ce nombre baissera de 20 % par an. On note uₙ le nombre de retards prévu en 2025 + n. 5) Exprimer uₙ en fonction de n. 6) Déterminer à partir de quelle année le nombre de retards sera inférieur à 200.",
              hint: "Partie A : les 25 % et 10 % sont des probabilités conditionnelles, à placer au second niveau de l'arbre. Partie B : calculez les termes successifs en multipliant par 0,8.",
              solution: [
                "1) P(B) = 0,6 et P(B̄) = 0,4 ; P_B(R) = 0,25 et P_B(R̄) = 0,75 ; P_B̄(R) = 0,10 et P_B̄(R̄) = 0,90.",
                "2) P(B ∩ R) = 0,6 × 0,25 = 0,15.",
                "3) P(B̄ ∩ R) = 0,4 × 0,10 = 0,04, donc, par la formule des probabilités totales, P(R) = 0,15 + 0,04 = 0,19.",
                "4) P_R(B) = P(B ∩ R) ÷ P(R) = 0,15 ÷ 0,19 = 15/19 ≈ 0,79. Un élève souvent en retard vient en bus avec une probabilité d'environ 0,79.",
                "5) Une baisse de 20 % correspond à un coefficient de 0,8 : (uₙ) est géométrique de premier terme 500 et de raison 0,8, donc uₙ = 500 × 0,8ⁿ.",
                "6) u₁ = 400 ; u₂ = 320 ; u₃ = 256 ; u₄ = 204,8 ; u₅ = 163,84. La suite est décroissante ; u₄ > 200 et u₅ < 200 : le nombre de retards sera inférieur à 200 à partir de 2025 + 5 = 2030.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche conseillée pour traiter une question d'exercice.",
            items: [
              "Lire toute la question et repérer le verbe de la consigne",
              "Relever les données utiles de l'énoncé",
              "Identifier la notion du cours en jeu",
              "Écrire la formule ou la propriété utilisée",
              "Remplacer par les valeurs et calculer",
              "Contrôler la vraisemblance du résultat",
              "Conclure par une phrase dans le contexte",
            ],
          },
          quiz: [
            {
              q: "Combien de temps dure l'épreuve anticipée de mathématiques ?",
              options: ["1 heure", "1 heure 30", "2 heures", "4 heures"],
              answer: 2,
              why: "L'épreuve dure deux heures : une partie d'automatismes puis des exercices indépendants.",
            },
            {
              q: "La calculatrice est-elle autorisée à l'épreuve anticipée de mathématiques ?",
              options: ["Non, pas du tout", "Oui, en mode examen uniquement", "Oui, mais seulement pour les exercices", "Seulement pour la partie automatismes"],
              answer: 0,
              why: "L'épreuve se passe sans calculatrice : les calculs sont conçus pour être faits à la main.",
            },
            {
              q: "Une consigne commence par « Montrer que P(B) = 0,46 ». Que doit-on faire ?",
              options: ["Recopier simplement la valeur 0,46 donnée dans l'énoncé et passer à la suite", "Donner une valeur approchée de P(B)", "Vérifier le résultat de tête", "Établir par un calcul justifié que P(B) vaut 0,46"],
              answer: 3,
              why: "Le résultat est donné : c'est le raisonnement qui y conduit qui est évalué.",
            },
            {
              q: "Vous ne parvenez pas à démontrer le résultat donné à la question 2 d'un exercice. Que faire pour la question 3 ?",
              options: ["Abandonner l'exercice entier et passer directement au suivant sans y revenir", "Utiliser le résultat donné pour continuer", "Recommencer l'exercice depuis le début", "Inventer un autre résultat"],
              answer: 1,
              why: "Un résultat donné dans l'énoncé peut être utilisé dans la suite, même s'il n'a pas été démontré : cela permet de traiter les questions suivantes.",
            },
            {
              q: "Un calcul de probabilité aboutit à 1,3. Que faut-il en conclure ?",
              options: ["Que l'événement est presque certain, donc très probable", "Qu'il y a une erreur de calcul", "Qu'il suffit de l'arrondir à 1", "Que l'événement contraire a une probabilité de 0,3"],
              answer: 1,
              why: "Une probabilité est toujours comprise entre 0 et 1 : le résultat 1,3 signale une erreur à rechercher.",
            },
          ],
          trap: "Se lancer dans les calculs sans avoir lu tout l'énoncé, puis rester bloqué longtemps sur une question au détriment du reste. Autre erreur coûteuse : donner un résultat sans justification ni phrase de conclusion.",
          method: "Faites au moins un sujet complet en conditions réelles (deux heures, sans calculatrice, chronomètre en vue) avant l'épreuve, puis comparez le temps réellement passé sur chaque partie avec le repère de 35, 75 et 10 minutes pour ajuster votre stratégie.",
        },
      ],
    },
  ],
}
