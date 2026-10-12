import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'maths-comp-tle',
  chapters: [
    /* ================================================================== */
    /* SUITES ET MODÉLISATION                                               */
    /* ================================================================== */
    {
      id: 'suites',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'suites-arithmetiques-geometriques',
          title: 'Suites arithmétiques et géométriques : modéliser une évolution',
          minutes: 30,
          objectives: [
            "Reconnaître une évolution à variation absolue constante (suite arithmétique) ou à taux d'évolution constant (suite géométrique).",
            "Exprimer le terme général uₙ en fonction de n et calculer un terme de rang donné.",
            "Calculer la somme de termes consécutifs d'une suite arithmétique ou géométrique.",
            "Choisir et justifier un modèle d'évolution dans un contexte économique ou démographique.",
          ],
          course: [
            {
              heading: "Variation absolue constante : la suite arithmétique",
              paragraphs: [
                "Une suite (uₙ) est une liste de nombres indexée par les entiers naturels : u₀, u₁, u₂... En modélisation, n représente souvent un temps (années, mois, jours) et uₙ une grandeur (population, prix, épargne). Lorsque la grandeur augmente ou diminue chaque fois de la même quantité r, on dit que la suite est arithmétique de raison r : pour tout entier naturel n, uₙ₊₁ = uₙ + r.",
                "Exemple : une plateforme compte 1 200 abonnés au lancement et en gagne 150 chaque mois (données fictives). En notant uₙ le nombre d'abonnés après n mois, u₀ = 1 200 et uₙ₊₁ = uₙ + 150. Après n mois, on a ajouté n fois 150, d'où la formule explicite uₙ = 1 200 + 150n. Après deux ans (n = 24), u₂₄ = 1 200 + 3 600 = 4 800 abonnés.",
                "Graphiquement, les points (n ; uₙ) d'une suite arithmétique sont alignés sur une droite de coefficient directeur r : c'est le modèle discret d'une croissance linéaire. La suite est croissante si r > 0, décroissante si r < 0, constante si r = 0.",
              ],
              box: { label: "Propriété", text: "Suite arithmétique de raison r : uₙ₊₁ = uₙ + r. Pour tous entiers naturels n et p : uₙ = u₀ + nr et uₙ = uₚ + (n - p)r. Les points (n ; uₙ) sont alignés : croissance linéaire." },
            },
            {
              heading: "Taux d'évolution constant : la suite géométrique",
              paragraphs: [
                "Lorsque la grandeur est multipliée chaque fois par le même nombre q, la suite est géométrique de raison q : uₙ₊₁ = q × uₙ. C'est le cas de toute évolution à pourcentage constant : augmenter de t % revient à multiplier par q = 1 + t/100, diminuer de t % revient à multiplier par q = 1 - t/100. Une hausse de 3 % correspond à q = 1,03 ; une baisse de 8 % à q = 0,92.",
                "Exemple : une ville de 5 000 habitants voit sa population augmenter de 3 % par an (données fictives). Avec vₙ la population après n années, v₀ = 5 000 et vₙ₊₁ = 1,03vₙ. Après n années, on a multiplié n fois par 1,03, donc vₙ = 5 000 × 1,03ⁿ. Après 10 ans, v₁₀ = 5 000 × 1,03¹⁰ ≈ 6 720 habitants.",
                "Pour u₀ > 0, la suite géométrique est croissante si q > 1 et décroissante si 0 < q < 1. Ses points ne sont pas alignés : ils dessinent une courbe qui s'élève de plus en plus vite (q > 1) ou qui se rapproche de l'axe des abscisses (0 < q < 1). C'est le modèle discret d'une croissance (ou d'une décroissance) exponentielle.",
              ],
              box: { label: "Propriété", text: "Suite géométrique de raison q : uₙ₊₁ = q × uₙ. Pour tous entiers naturels n et p : uₙ = u₀ × qⁿ et uₙ = uₚ × qⁿ⁻ᵖ. Un taux d'évolution constant t correspond à la raison q = 1 + t (avec t = 0,03 pour une hausse de 3 %)." },
            },
            {
              heading: "Taux d'évolution global et taux moyen",
              paragraphs: [
                "Si une grandeur subit n évolutions successives de même taux t, le coefficient multiplicateur global est (1 + t)ⁿ et le taux d'évolution global est (1 + t)ⁿ - 1. Les taux ne s'additionnent pas : trois hausses de 10 % donnent un coefficient 1,1³ = 1,331, soit une hausse globale de 33,1 % et non de 30 %, car chaque hausse s'applique à une valeur déjà augmentée.",
                "À l'inverse, si une grandeur a été multipliée par un coefficient C en n périodes, le taux moyen par période est le taux t tel que (1 + t)ⁿ = C, c'est-à-dire 1 + t = C^(1/n). Par exemple, un prix passé de 200 € à 250 € en 5 ans a été multiplié par 1,25 ; le taux annuel moyen vaut 1,25^(1/5) - 1 ≈ 0,0456, soit environ 4,56 % par an.",
              ],
              box: { label: "À retenir", text: "n évolutions de taux t : coefficient global (1 + t)ⁿ. Taux moyen sur n périodes pour un coefficient global C : C^(1/n) - 1. Les pourcentages successifs se multiplient sous forme de coefficients, ils ne s'additionnent pas." },
            },
            {
              heading: "Sommes de termes consécutifs",
              paragraphs: [
                "Pour calculer un cumul (total des abonnés gagnés, total des salaires perçus, quantité totale produite), on additionne des termes consécutifs. Pour une suite arithmétique, la somme vaut le nombre de termes multiplié par la moyenne du premier et du dernier terme. En particulier, 1 + 2 + ... + n = n(n + 1)/2 : par exemple 1 + 2 + ... + 100 = 5 050.",
                "Pour une suite géométrique de raison q ≠ 1, on utilise 1 + q + q² + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q). Ainsi u₀ + u₁ + ... + uₙ = u₀ × (1 - qⁿ⁺¹)/(1 - q). Exemple : on verse 100 € la première année, et chaque versement annuel suivant est 5 % plus élevé que le précédent. Sur 10 ans, on verse au total 100 × (1 - 1,05¹⁰)/(1 - 1,05) ≈ 1 257,79 €.",
              ],
              box: { label: "Formule", text: "Somme de termes consécutifs d'une suite arithmétique : nombre de termes × (premier + dernier)/2. Pour q ≠ 1 : 1 + q + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q), et u₀ + u₁ + ... + uₙ = u₀ × (1 - qⁿ⁺¹)/(1 - q)." },
            },
          ],
          keyPoints: [
            "Arithmétique : on ajoute r à chaque étape, uₙ = u₀ + nr ; points alignés, croissance linéaire.",
            "Géométrique : on multiplie par q à chaque étape, uₙ = u₀ × qⁿ ; croissance ou décroissance exponentielle.",
            "Hausse de t % : q = 1 + t/100 ; baisse de t % : q = 1 - t/100.",
            "n évolutions de taux t : coefficient global (1 + t)ⁿ ; taux moyen pour un coefficient global C : C^(1/n) - 1.",
            "1 + 2 + ... + n = n(n + 1)/2 ; 1 + q + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q) pour q ≠ 1.",
            "Pour choisir le modèle, on regarde si ce sont les écarts uₙ₊₁ - uₙ ou les quotients uₙ₊₁/uₙ qui sont constants.",
          ],
          example: {
            statement: "Une ville comptait 20 000 habitants au 1er janvier 2025. On suppose que sa population augmente de 2 % par an (données fictives). On note pₙ la population au 1er janvier de l'année 2025 + n. 1. Justifier que (pₙ) est géométrique et exprimer pₙ en fonction de n. 2. Estimer la population au 1er janvier 2035. 3. Calculer le taux d'évolution global sur ces 10 ans.",
            solution: [
              "1. Augmenter de 2 % revient à multiplier par 1 + 2/100 = 1,02. Donc pₙ₊₁ = 1,02 × pₙ : la suite (pₙ) est géométrique de raison q = 1,02 et de premier terme p₀ = 20 000.",
              "On en déduit, pour tout entier naturel n, pₙ = p₀ × qⁿ = 20 000 × 1,02ⁿ.",
              "2. L'année 2035 correspond à n = 10 : p₁₀ = 20 000 × 1,02¹⁰ ≈ 20 000 × 1,219 ≈ 24 380 habitants.",
              "3. Le coefficient multiplicateur global est 1,02¹⁰ ≈ 1,219, donc le taux d'évolution global est 1,219 - 1 = 0,219, soit une hausse d'environ 21,9 %.",
              "Remarque : ce taux dépasse 10 × 2 % = 20 %, car chaque hausse s'applique à une population déjà augmentée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Le 1er janvier, Léa dispose de 300 € d'économies. Chaque mois, elle ajoute 25 € (données fictives). On note uₙ le montant de ses économies après n mois, avec u₀ = 300. 1. Quelle est la nature de la suite (uₙ) ? 2. Exprimer uₙ en fonction de n. 3. Quel montant Léa aura-t-elle après un an ? 4. Au bout de combien de mois ses économies atteindront-elles 1 000 € ?",
              hint: "Chaque mois, on ajoute la même somme : la variation absolue est constante. Pour la dernière question, résolvez l'inéquation 300 + 25n ≥ 1 000.",
              solution: [
                "1. Chaque mois, on ajoute 25 € : uₙ₊₁ = uₙ + 25. La suite (uₙ) est arithmétique de raison r = 25 et de premier terme u₀ = 300.",
                "2. Pour tout entier naturel n, uₙ = u₀ + nr = 300 + 25n.",
                "3. Après un an, n = 12 : u₁₂ = 300 + 25 × 12 = 300 + 300 = 600 €.",
                "4. On résout 300 + 25n ≥ 1 000, soit 25n ≥ 700, soit n ≥ 28.",
                "Les économies de Léa atteignent 1 000 € au bout de 28 mois (u₂₈ = 300 + 700 = 1 000).",
              ],
            },
            {
              level: 2,
              statement: "Un smartphone coûte 800 € à sa sortie. On estime que sa valeur de revente baisse de 12 % par an (données fictives). On note vₙ sa valeur après n années. 1. Exprimer vₙ en fonction de n. 2. Calculer sa valeur après 3 ans, arrondie au centime. 3. Calculer le taux d'évolution global sur ces 3 ans. 4. Déterminer le sens de variation de la suite (vₙ).",
              hint: "Une baisse de 12 % correspond à une multiplication par 1 - 0,12. Le taux global se déduit du coefficient multiplicateur global.",
              solution: [
                "1. Baisser de 12 % revient à multiplier par 0,88 : vₙ₊₁ = 0,88vₙ. La suite est géométrique de raison 0,88 et de premier terme v₀ = 800, donc vₙ = 800 × 0,88ⁿ.",
                "2. v₃ = 800 × 0,88³ = 800 × 0,681472 = 545,1776, soit environ 545,18 €.",
                "3. Le coefficient global est 0,88³ = 0,681472. Le taux global est 0,681472 - 1 = -0,318528, soit une baisse d'environ 31,85 % (et non 3 × 12 % = 36 %).",
                "4. v₀ = 800 > 0 et 0 < q = 0,88 < 1 : la suite (vₙ) est strictement décroissante. La valeur du téléphone diminue chaque année.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Une entreprise propose deux contrats pour un premier emploi (données fictives). Contrat A : 24 000 € la première année, puis une augmentation de 900 € chaque année. Contrat B : 24 000 € la première année, puis une augmentation de 3 % chaque année. On note aₙ et bₙ les salaires annuels de l'année n + 1, avec a₀ = b₀ = 24 000. 1. Exprimer aₙ et bₙ en fonction de n. 2. Comparer les salaires de la 10e année (arrondis à l'euro). 3. Calculer, pour chaque contrat, le total perçu sur les 10 premières années. 4. À l'aide de la calculatrice (tableau de valeurs), déterminer à partir de quelle année le salaire du contrat B dépasse celui du contrat A. 5. Quel contrat conseiller à une personne qui compte rester 10 ans ? 25 ans ?",
              hint: "La 10e année correspond à n = 9 et les 10 premières années aux termes de rang 0 à 9. Pour la somme géométrique, utilisez u₀ × (1 - qᴺ)/(1 - q) avec N le nombre de termes.",
              solution: [
                "1. Contrat A : on ajoute 900 € par an, (aₙ) est arithmétique de raison 900 : aₙ = 24 000 + 900n. Contrat B : on multiplie par 1,03 chaque année, (bₙ) est géométrique de raison 1,03 : bₙ = 24 000 × 1,03ⁿ.",
                "2. La 10e année correspond à n = 9 : a₉ = 24 000 + 8 100 = 32 100 € et b₉ = 24 000 × 1,03⁹ ≈ 31 315 €. Le contrat A est plus avantageux cette année-là.",
                "3. Contrat A : 10 termes, de 24 000 à 32 100, donc un total de 10 × (24 000 + 32 100)/2 = 280 500 €.",
                "Contrat B : total = 24 000 × (1 - 1,03¹⁰)/(1 - 1,03) ≈ 24 000 × 11,4639 ≈ 275 133 €. Sur 10 ans, le contrat A rapporte environ 5 367 € de plus.",
                "4. Le tableau de valeurs donne b₁₅ ≈ 37 391 < a₁₅ = 37 500 et b₁₆ ≈ 38 513 > a₁₆ = 38 400. Le salaire B dépasse le salaire A à partir de n = 16, c'est-à-dire la 17e année, et reste ensuite au-dessus : une croissance exponentielle finit toujours par dépasser une croissance linéaire.",
                "5. Pour 10 ans, le contrat A est préférable. Pour 25 ans, on compare les totaux : A donne 25 × (24 000 + 45 600)/2 = 870 000 € (car a₂₄ = 45 600) et B donne 24 000 × (1,03²⁵ - 1)/0,03 ≈ 875 022 €.",
                "Sur 25 ans, le contrat B devient légèrement plus avantageux (son total dépasse celui de A à partir de 24 années de travail). Le choix dépend donc de la durée envisagée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque situation au modèle qui la décrit.",
            pairs: [
              { left: "Une hausse de 4 % par an", right: "Suite géométrique de raison 1,04" },
              { left: "Une baisse de 15 % par mois", right: "Suite géométrique de raison 0,85" },
              { left: "100 inscrits de plus chaque année", right: "Suite arithmétique de raison 100" },
              { left: "Une perte de 20 € par semaine", right: "Suite arithmétique de raison -20" },
              { left: "Un doublement chaque heure", right: "Suite géométrique de raison 2" },
              { left: "Trois hausses successives de 10 %", right: "Une hausse globale de 33,1 %" },
            ],
          },
          quiz: [
            {
              q: "Une grandeur baisse de 5 % par an. Par quel nombre est-elle multipliée chaque année ?",
              options: ["1,05", "0,95", "-0,05", "0,5"],
              answer: 1,
              why: "Diminuer de 5 % revient à garder 95 % de la valeur, donc à multiplier par 1 - 0,05 = 0,95.",
            },
            {
              q: "(uₙ) est arithmétique avec u₀ = 7 et de raison r = -2. Que vaut u₁₀ ?",
              options: ["-20", "27", "-13", "5"],
              answer: 2,
              why: "u₁₀ = u₀ + 10r = 7 + 10 × (-2) = 7 - 20 = -13.",
            },
            {
              q: "Que vaut la somme 1 + 2 + 3 + ... + 50 ?",
              options: ["2 500", "1 250", "2 550", "1 275"],
              answer: 3,
              why: "1 + 2 + ... + n = n(n + 1)/2, donc ici 50 × 51/2 = 1 275.",
            },
            {
              q: "Deux hausses successives de 20 % correspondent à une hausse globale de :",
              options: ["44 %", "40 %", "20 %", "400 %"],
              answer: 0,
              why: "Le coefficient global est 1,2² = 1,44, soit une hausse de 44 %. Les pourcentages ne s'additionnent pas.",
            },
            {
              q: "Les points (n ; uₙ) d'une suite sont alignés. Quelle est la nature de la suite ?",
              options: ["Géométrique", "Arithmétique", "Ni l'une ni l'autre", "Forcément constante"],
              answer: 1,
              why: "Des points alignés traduisent un écart constant entre deux termes consécutifs : c'est une suite arithmétique, dont la raison est le coefficient directeur de la droite.",
            },
          ],
          trap: "Additionner les pourcentages successifs (trois hausses de 10 % ne font pas 30 % mais 33,1 %), ou confondre « augmenter de 3 % » (multiplier par 1,03) avec « ajouter 3 » à chaque étape.",
          method: "Pour identifier le modèle, calculez quelques différences uₙ₊₁ - uₙ et quelques quotients uₙ₊₁/uₙ : si les différences sont constantes, la suite est arithmétique ; si les quotients le sont, elle est géométrique. Vérifiez toujours la formule obtenue sur u₀ et u₁.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'limites-suites',
          title: 'Comportement à l\'infini d\'une suite',
          minutes: 30,
          objectives: [
            "Déterminer la limite d'une suite géométrique (qⁿ) selon la valeur de q, et celle d'une suite arithmétique.",
            "Calculer une limite à l'aide des suites de référence et des opérations sur les limites.",
            "Déterminer la limite de la somme des termes d'une suite géométrique de raison comprise entre 0 et 1.",
            "Interpréter une limite dans le contexte d'une modélisation (stabilisation, croissance sans borne).",
          ],
          course: [
            {
              heading: "Ce que signifie « tendre vers »",
              paragraphs: [
                "Étudier le comportement à l'infini d'une suite, c'est se demander ce que deviennent les termes uₙ lorsque n devient très grand. Les termes peuvent devenir aussi grands que l'on veut : la suite tend vers +∞ (ou vers -∞ s'ils deviennent négatifs et aussi grands que l'on veut en valeur absolue). Ils peuvent se rapprocher autant que l'on veut d'un réel l : la suite converge vers l. Ils peuvent enfin n'avoir aucun de ces comportements.",
                "Plus précisément, (uₙ) converge vers l si tout intervalle ouvert contenant l, aussi petit soit-il, contient tous les termes à partir d'un certain rang. On note lim uₙ = l (quand n tend vers +∞). Une suite qui ne converge pas est dite divergente : c'est le cas des suites qui tendent vers l'infini, et de la suite ((-1)ⁿ), qui vaut alternativement 1 et -1 sans jamais se fixer.",
                "Suites de référence : n, n², n³ et √n tendent vers +∞ ; 1/n, 1/n², 1/n³ et 1/√n tendent vers 0. Une suite arithmétique de raison r > 0 tend vers +∞, de raison r < 0 vers -∞ : une évolution linéaire ne peut pas se stabiliser.",
              ],
              box: { label: "Définition", text: "La suite (uₙ) converge vers le réel l si tout intervalle ouvert contenant l contient tous les termes uₙ à partir d'un certain rang. Elle tend vers +∞ si tout intervalle ]A ; +∞[ contient tous les termes à partir d'un certain rang. Une suite qui ne converge pas est divergente." },
            },
            {
              heading: "Limite d'une suite géométrique",
              paragraphs: [
                "Le comportement de qⁿ dépend seulement de la valeur de q. Si q > 1, les puissances grandissent sans limite : 1,1ⁿ dépasse 100 dès n = 49 et un million dès n = 145. Si 0 ≤ q < 1, elles se rapprochent de 0 : 0,5ⁿ vaut 0,5 ; 0,25 ; 0,125 ; 0,0625... Si q = 1, la suite est constante égale à 1.",
                "Pour les raisons négatives : si -1 < q < 1, qⁿ tend encore vers 0 ; si q ≤ -1, la suite (qⁿ) n'a pas de limite, ses termes changeant de signe à chaque rang. Pour une suite géométrique uₙ = u₀ × qⁿ avec u₀ > 0 : si q > 1, uₙ tend vers +∞ ; si 0 < q < 1, uₙ tend vers 0. Une population qui diminue de 5 % par an s'éteint donc à long terme dans ce modèle, puisque 0,95ⁿ tend vers 0.",
              ],
              box: { label: "Propriété", text: "Si q > 1 : lim qⁿ = +∞. Si q = 1 : lim qⁿ = 1. Si -1 < q < 1 : lim qⁿ = 0. Si q ≤ -1 : la suite (qⁿ) n'a pas de limite." },
            },
            {
              heading: "Opérations sur les limites",
              paragraphs: [
                "Les limites se combinent de façon naturelle. Si uₙ tend vers l et vₙ vers l', alors uₙ + vₙ tend vers l + l', uₙ × vₙ vers l × l', et uₙ/vₙ vers l/l' lorsque l' ≠ 0. Par exemple, uₙ = 3 - 2 × 0,5ⁿ : comme 0,5ⁿ tend vers 0, uₙ tend vers 3 - 2 × 0 = 3. De même, 5 + 1/n tend vers 5.",
                "Avec l'infini : une somme dont un terme tend vers +∞ et l'autre vers un réel (ou vers +∞) tend vers +∞ ; multiplier une suite qui tend vers +∞ par un réel strictement positif donne +∞, par un réel strictement négatif donne -∞ ; diviser un réel par une suite qui tend vers l'infini donne 0. Ainsi 5 × 1,2ⁿ - 7 tend vers +∞ et -2 × 1,5ⁿ tend vers -∞.",
                "Certains cas ne permettent pas de conclure directement : on les appelle formes indéterminées (« ∞ - ∞ », « 0 × ∞ », « ∞/∞ » et « 0/0 »). Pour un quotient comme (2n + 1)/(n + 3), de la forme ∞/∞, on factorise par n en haut et en bas : on obtient (2 + 1/n)/(1 + 3/n), qui tend vers 2/1 = 2.",
              ],
              box: { label: "Règle", text: "Forme indéterminée ∞/∞ avec des expressions en n : on factorise le numérateur et le dénominateur par leur terme dominant (la plus haute puissance de n), puis on utilise lim 1/n = 0." },
            },
            {
              heading: "Somme des termes d'une suite géométrique",
              paragraphs: [
                "Lorsque 0 < q < 1, la somme Sₙ = 1 + q + q² + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q) ne grandit pas indéfiniment : comme qⁿ⁺¹ tend vers 0, Sₙ tend vers 1/(1 - q). Par exemple, 1 + 0,5 + 0,25 + ... tend vers 1/(1 - 0,5) = 2 : on ajoute des quantités de plus en plus petites et le total se stabilise.",
                "Application : une campagne publicitaire attire 1 000 nouveaux clients le premier mois, puis chaque mois 80 % du nombre de nouveaux clients du mois précédent (données fictives). Le nombre total de clients gagnés après n + 1 mois vaut 1 000 × (1 - 0,8ⁿ⁺¹)/(1 - 0,8), qui tend vers 1 000/0,2 = 5 000. La campagne ne rapportera jamais plus de 5 000 clients dans ce modèle.",
              ],
              box: { label: "À retenir", text: "Si 0 < q < 1 : 1 + q + q² + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q) tend vers 1/(1 - q). Le cumul d'une évolution géométrique décroissante se stabilise." },
            },
          ],
          keyPoints: [
            "lim uₙ = l : les termes finissent par être aussi proches de l que l'on veut ; une suite non convergente est divergente.",
            "Suites de référence : n, n², √n tendent vers +∞ ; 1/n, 1/n², 1/√n tendent vers 0.",
            "qⁿ : +∞ si q > 1 ; 1 si q = 1 ; 0 si -1 < q < 1 ; pas de limite si q ≤ -1.",
            "Une suite arithmétique de raison non nulle n'est jamais convergente : +∞ si r > 0, -∞ si r < 0.",
            "Formes indéterminées : ∞ - ∞, 0 × ∞, ∞/∞, 0/0 ; on les lève en factorisant par le terme dominant.",
            "Si 0 < q < 1, 1 + q + ... + qⁿ tend vers 1/(1 - q).",
          ],
          example: {
            statement: "Déterminer la limite de chacune des suites suivantes, définies pour n ≥ 1 : uₙ = 3 - 2 × 0,5ⁿ ; vₙ = 5 × 1,2ⁿ - 7 ; wₙ = (2n + 1)/(n + 3).",
            solution: [
              "uₙ : 0 < 0,5 < 1, donc lim 0,5ⁿ = 0. Par produit, lim 2 × 0,5ⁿ = 0, puis par somme, lim uₙ = 3 - 0 = 3. La suite converge vers 3.",
              "vₙ : 1,2 > 1, donc lim 1,2ⁿ = +∞. Par produit par 5 > 0, lim 5 × 1,2ⁿ = +∞, et en retranchant 7 la limite reste +∞. La suite diverge vers +∞.",
              "wₙ : le numérateur et le dénominateur tendent vers +∞, c'est une forme indéterminée ∞/∞.",
              "On factorise par n : wₙ = n(2 + 1/n)/(n(1 + 3/n)) = (2 + 1/n)/(1 + 3/n).",
              "Comme lim 1/n = 0, le numérateur tend vers 2 et le dénominateur vers 1. Par quotient, lim wₙ = 2.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Déterminer la limite de chacune des suites suivantes, définies pour n ≥ 1 : aₙ = 4 × 0,7ⁿ + 1 ; bₙ = -2 × 1,5ⁿ ; cₙ = 3n² - 5 ; dₙ = 6 + 2/n.",
              hint: "Identifiez la suite de référence présente dans chaque expression (qⁿ, n², 1/n), puis appliquez les règles sur les sommes et les produits.",
              solution: [
                "aₙ : -1 < 0,7 < 1, donc 0,7ⁿ tend vers 0 ; 4 × 0,7ⁿ tend vers 0 et aₙ tend vers 1.",
                "bₙ : 1,5 > 1, donc 1,5ⁿ tend vers +∞ ; multiplié par -2 < 0, bₙ tend vers -∞.",
                "cₙ : n² tend vers +∞, donc 3n² aussi, et cₙ = 3n² - 5 tend vers +∞.",
                "dₙ : 1/n tend vers 0, donc 2/n aussi, et dₙ tend vers 6.",
                "Bilan : (aₙ) converge vers 1 et (dₙ) vers 6 ; (bₙ) et (cₙ) divergent, vers -∞ et vers +∞.",
              ],
            },
            {
              level: 2,
              statement: "Une balle est lâchée d'une hauteur de 5 m. À chaque rebond, elle remonte à 60 % de la hauteur d'où elle est tombée (données fictives). On note hₙ la hauteur atteinte après le n-ième rebond, pour n ≥ 1. 1. Calculer h₁ et h₂, puis exprimer hₙ en fonction de n. 2. Déterminer la limite de (hₙ) et l'interpréter. 3. On note Sₙ = h₁ + h₂ + ... + hₙ. Montrer que Sₙ = 7,5(1 - 0,6ⁿ) et en déduire sa limite. 4. En déduire la distance totale parcourue par la balle si l'on laisse les rebonds se poursuivre indéfiniment (descentes et remontées).",
              hint: "h₁ = 5 × 0,6. Pour la somme, mettez 3 en facteur : Sₙ = 3(1 + 0,6 + ... + 0,6ⁿ⁻¹). Chaque remontée de hauteur hₖ est suivie d'une descente de même longueur.",
              solution: [
                "1. h₁ = 0,6 × 5 = 3 m et h₂ = 0,6 × 3 = 1,8 m. La suite (hₙ) est géométrique de raison 0,6 et de premier terme h₁ = 3, donc hₙ = 3 × 0,6ⁿ⁻¹ (ou encore hₙ = 5 × 0,6ⁿ).",
                "2. 0 < 0,6 < 1, donc 0,6ⁿ tend vers 0 et hₙ tend vers 0 : les rebonds deviennent de plus en plus petits et la balle finit par s'immobiliser.",
                "3. Sₙ = 3(1 + 0,6 + ... + 0,6ⁿ⁻¹) = 3 × (1 - 0,6ⁿ)/(1 - 0,6) = 3 × (1 - 0,6ⁿ)/0,4 = 7,5(1 - 0,6ⁿ).",
                "Comme 0,6ⁿ tend vers 0, Sₙ tend vers 7,5 m.",
                "4. La balle descend d'abord de 5 m, puis chaque rebond comporte une montée et une descente de même hauteur. La distance totale tend vers 5 + 2 × 7,5 = 20 m.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Une entreprise fabrique des lampes. Pour n lampes produites (n ≥ 1), le coût total est Cₙ = 8n + 400 euros, et chaque lampe est vendue 10 € (données fictives). 1. Exprimer le coût moyen par lampe Mₙ = Cₙ/n et déterminer sa limite. Interpréter. 2. Déterminer le nombre minimal de lampes à produire pour que le coût moyen soit inférieur ou égal à 8,50 €. 3. Le bénéfice est Bₙ = 10n - Cₙ. Exprimer Bₙ, puis déterminer la limite de Bₙ et celle du taux de marge Rₙ = Bₙ/Cₙ. Interpréter.",
              hint: "Écrivez Mₙ = 8 + 400/n. Pour Rₙ, qui est de la forme ∞/∞, factorisez le numérateur et le dénominateur par n.",
              solution: [
                "1. Mₙ = (8n + 400)/n = 8 + 400/n. Comme 400/n tend vers 0, Mₙ tend vers 8. Les frais fixes de 400 € se répartissent sur un nombre croissant de lampes : à grande échelle, une lampe coûte presque 8 €, son coût variable.",
                "2. Mₙ ≤ 8,5 équivaut à 400/n ≤ 0,5, soit 400 ≤ 0,5n (car n > 0), soit n ≥ 800. Il faut produire au moins 800 lampes.",
                "3. Bₙ = 10n - (8n + 400) = 2n - 400. Comme 2n tend vers +∞, Bₙ tend vers +∞ (le bénéfice est positif dès que n > 200).",
                "Rₙ = (2n - 400)/(8n + 400) est de la forme ∞/∞. On factorise par n : Rₙ = n(2 - 400/n)/(n(8 + 400/n)) = (2 - 400/n)/(8 + 400/n).",
                "Comme 400/n tend vers 0, Rₙ tend vers 2/8 = 0,25.",
                "Interprétation : le bénéfice grandit sans limite, mais il finit par représenter environ 25 % du coût de production : le taux de marge se stabilise.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur les limites de suites.",
            statements: [
              { text: "Une suite croissante tend forcément vers +∞.", true: false, why: "La suite 1 - 1/n (n ≥ 1) est croissante et converge vers 1 : elle est majorée." },
              { text: "La suite (0,99ⁿ) tend vers 0.", true: true, why: "-1 < 0,99 < 1 : la décroissance est lente, mais la limite est bien 0." },
              { text: "La suite ((-2)ⁿ) tend vers +∞.", true: false, why: "Ses termes changent de signe : 1, -2, 4, -8, 16... Elle n'a pas de limite." },
              { text: "Si uₙ tend vers 3 et vₙ vers 2, alors uₙ × vₙ tend vers 6.", true: true, why: "La limite d'un produit de suites convergentes est le produit des limites." },
              { text: "Une forme ∞/∞ donne toujours une limite égale à 1.", true: false, why: "(2n + 1)/(n + 3) tend vers 2 et n²/n tend vers +∞ : il faut lever l'indétermination." },
              { text: "Une suite arithmétique de raison 0,001 tend vers +∞.", true: true, why: "Toute raison strictement positive, même très petite, fait tendre une suite arithmétique vers +∞." },
              { text: "1 + 0,5 + 0,5² + ... + 0,5ⁿ tend vers +∞, car on ajoute toujours des termes positifs.", true: false, why: "Cette somme tend vers 1/(1 - 0,5) = 2 : les termes ajoutés deviennent négligeables." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la limite de la suite 7 × 0,8ⁿ ?",
              options: ["+∞", "7", "0", "5,6"],
              answer: 2,
              why: "0 < 0,8 < 1, donc 0,8ⁿ tend vers 0, et 7 × 0,8ⁿ aussi.",
            },
            {
              q: "Quelle est la limite de (3n + 2)/(n - 1), pour n ≥ 2 ?",
              options: ["3", "-2", "+∞", "1"],
              answer: 0,
              why: "On factorise par n : (3 + 2/n)/(1 - 1/n), qui tend vers 3/1 = 3.",
            },
            {
              q: "Pour quelle valeur de q la suite (qⁿ) n'a-t-elle pas de limite ?",
              options: ["q = 0,5", "q = 1", "q = 3", "q = -1,2"],
              answer: 3,
              why: "Pour q ≤ -1, les termes changent de signe et grandissent en valeur absolue : aucune limite. Pour 0,5, la limite est 0 ; pour 1, c'est 1 ; pour 3, c'est +∞.",
            },
            {
              q: "Vers quoi tend la somme 1 + 0,8 + 0,8² + ... + 0,8ⁿ ?",
              options: ["1,8", "5", "+∞", "0,8"],
              answer: 1,
              why: "Pour 0 < q < 1, la somme tend vers 1/(1 - q) = 1/0,2 = 5.",
            },
            {
              q: "Une population est modélisée par pₙ = 2 000 × 0,97ⁿ. Que prévoit le modèle à long terme ?",
              options: ["Elle se stabilise à 2 000", "Elle tend vers 1 940", "Elle tend vers 0", "Elle augmente sans limite"],
              answer: 2,
              why: "0 < 0,97 < 1, donc 0,97ⁿ tend vers 0 : une baisse de 3 % par an, maintenue indéfiniment, conduit à l'extinction dans ce modèle.",
            },
          ],
          trap: "Conclure trop vite devant une forme indéterminée, par exemple affirmer que (2n + 1)/(n + 3) tend vers 1 parce que « l'infini divisé par l'infini fait 1 », ou croire qu'une somme de termes positifs tend forcément vers +∞.",
          method: "Pour chaque limite, repérez d'abord la suite de référence (qⁿ, n, 1/n), écrivez sa limite, puis appliquez les règles opération par opération. Contrôlez ensuite à la calculatrice en calculant un terme de rang élevé, par exemple u₁₀₀ ou u₁₀₀₀.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'suites-recurrentes',
          title: 'Suites définies par récurrence et algorithmes',
          minutes: 35,
          objectives: [
            "Calculer les termes d'une suite définie par une relation de récurrence uₙ₊₁ = f(uₙ), à la main, au tableur ou avec un programme.",
            "Modéliser une situation par une suite arithmético-géométrique uₙ₊₁ = auₙ + b.",
            "Étudier une suite arithmético-géométrique à l'aide d'une suite auxiliaire géométrique et en déduire sa limite.",
            "Écrire et interpréter un algorithme de seuil en Python.",
          ],
          course: [
            {
              heading: "Définition explicite et définition par récurrence",
              paragraphs: [
                "Une suite peut être définie de façon explicite, uₙ = g(n), ce qui permet de calculer directement n'importe quel terme : avec uₙ = 3 × 2ⁿ, on obtient u₁₀ = 3 072 sans calculer les précédents. Elle peut aussi être définie par récurrence : on donne le premier terme et une relation uₙ₊₁ = f(uₙ) qui permet de calculer chaque terme à partir du précédent.",
                "Exemple : u₀ = 4 et uₙ₊₁ = 0,5uₙ + 3. On calcule pas à pas : u₁ = 0,5 × 4 + 3 = 5, u₂ = 0,5 × 5 + 3 = 5,5, u₃ = 5,75, u₄ = 5,875... Pour obtenir u₅₀, il faudrait cinquante calculs : on utilise alors un tableur (en B2, la formule =0,5*B1+3, recopiée vers le bas) ou un programme. Les termes semblent se rapprocher de 6, ce que l'on pourra démontrer.",
                "Ce type de définition est naturel en modélisation : on connaît souvent la règle qui fait passer d'une année à la suivante (« chaque année, 10 % disparaissent et on en ajoute 150 ») plutôt que la formule donnant directement la valeur au bout de n années.",
              ],
              box: { label: "Définition", text: "Suite définie par récurrence : un premier terme u₀ et une relation uₙ₊₁ = f(uₙ) valable pour tout entier naturel n. Chaque terme se calcule à partir du précédent." },
            },
            {
              heading: "Les suites arithmético-géométriques",
              paragraphs: [
                "Une suite est arithmético-géométrique s'il existe deux réels a et b tels que, pour tout n, uₙ₊₁ = auₙ + b. Elle combine une évolution en pourcentage (le facteur a) et un apport ou un prélèvement constant (le terme b). Exemple : une réserve naturelle compte 2 000 animaux ; chaque année, 10 % disparaissent et l'on en réintroduit 150 (données fictives), d'où uₙ₊₁ = 0,9uₙ + 150. Autre exemple : un patient élimine 30 % du médicament présent entre deux prises et reçoit 100 mg à chaque prise, d'où uₙ₊₁ = 0,7uₙ + 100.",
                "Si a = 1, la suite est arithmétique ; si b = 0, elle est géométrique. Dans le cas général (a ≠ 1), on cherche l'unique réel l tel que l = al + b, c'est-à-dire l = b/(1 - a). On l'appelle point fixe : si un terme valait l, tous les suivants vaudraient aussi l. Pour la réserve, l = 150/(1 - 0,9) = 1 500 animaux : c'est l'état d'équilibre, pour lequel les 150 animaux réintroduits compensent exactement les 10 % qui disparaissent.",
              ],
              box: { label: "Définition", text: "Suite arithmético-géométrique : uₙ₊₁ = auₙ + b. Si a ≠ 1, son point fixe est l = b/(1 - a), unique solution de l'équation l = al + b." },
            },
            {
              heading: "La méthode de la suite auxiliaire",
              paragraphs: [
                "Pour obtenir une formule explicite, on pose vₙ = uₙ - l et on montre que (vₙ) est géométrique : vₙ₊₁ = uₙ₊₁ - l = auₙ + b - (al + b) = a(uₙ - l) = avₙ. La suite (vₙ) est donc géométrique de raison a, d'où vₙ = v₀ × aⁿ et uₙ = l + (u₀ - l) × aⁿ.",
                "Pour la réserve : l = 1 500 et v₀ = 2 000 - 1 500 = 500, donc uₙ = 1 500 + 500 × 0,9ⁿ. Comme 0 < 0,9 < 1, 0,9ⁿ tend vers 0 et uₙ tend vers 1 500. La population diminue et se stabilise vers 1 500 animaux, quel que soit l'effectif de départ : seul l'écart à l'équilibre change, et il diminue de 10 % par an.",
                "En pratique, l'énoncé donne souvent la suite auxiliaire (« on pose vₙ = uₙ - 1 500 ») et demande de montrer qu'elle est géométrique. La rédaction suit toujours le même schéma : exprimer vₙ₊₁, remplacer uₙ₊₁ par auₙ + b, puis factoriser par a pour faire apparaître vₙ.",
              ],
              box: { label: "À retenir", text: "Si uₙ₊₁ = auₙ + b avec a ≠ 1 et l = b/(1 - a), alors vₙ = uₙ - l est géométrique de raison a et uₙ = l + (u₀ - l)aⁿ. Si 0 < a < 1, la suite (uₙ) converge vers l." },
            },
            {
              heading: "Algorithmes : calculer un terme, chercher un seuil",
              paragraphs: [
                "Pour calculer uₙ en Python, on répète n fois la relation de récurrence dans une boucle for. La fonction terme(n) commence par u = 2000, puis exécute n fois l'instruction u = 0.9*u + 150 (boucle for k in range(n)), et renvoie u. La variable u contient successivement u₀, u₁, ..., uₙ : chaque terme est remplacé par le suivant.",
                "Un algorithme de seuil cherche le premier rang n à partir duquel uₙ dépasse (ou passe sous) une valeur donnée. On utilise une boucle while (« tant que ») : on part de n = 0 et u = u₀ ; tant que le seuil n'est pas atteint, on calcule le terme suivant et on augmente n de 1 ; à la sortie de la boucle, n est le rang cherché. On écrit après while la condition pour continuer, qui est le contraire de la condition d'arrêt.",
                "Une boucle de seuil ne se termine que si la suite atteint effectivement le seuil. Chercher quand la population de la réserve passe sous 1 400 animaux donnerait une boucle infinie, puisque uₙ = 1 500 + 500 × 0,9ⁿ reste toujours supérieur à 1 500. Il faut donc étudier la limite avant de lancer la recherche.",
              ],
              box: { label: "Repère", text: "Seuil en Python pour la réserve : def seuil(): u = 2000 ; n = 0 ; while u > 1550: (u = 0.9*u + 150 ; n = n + 1) ; return n. Les deux instructions entre parenthèses sont indentées dans la boucle. La fonction renvoie 22 : u₂₂ ≈ 1 549 est le premier terme inférieur ou égal à 1 550." },
            },
          ],
          keyPoints: [
            "Définition par récurrence : un premier terme et une relation uₙ₊₁ = f(uₙ) ; on calcule de proche en proche (tableur, Python).",
            "Arithmético-géométrique : uₙ₊₁ = auₙ + b, une évolution en pourcentage plus un apport ou un prélèvement constant.",
            "Point fixe : l = b/(1 - a) si a ≠ 1, solution de l = al + b ; c'est l'état d'équilibre.",
            "vₙ = uₙ - l est géométrique de raison a, d'où uₙ = l + (u₀ - l)aⁿ.",
            "Si 0 < a < 1, uₙ tend vers l, quel que soit u₀ ; si a > 1, l'écart au point fixe grandit.",
            "Algorithme de seuil : boucle while sur la condition de poursuite, n augmente de 1 à chaque tour.",
          ],
          example: {
            statement: "Un club de sport compte 800 adhérents en 2025. Chaque année, 25 % des adhérents ne renouvellent pas leur inscription et 300 nouveaux adhérents s'inscrivent (données fictives). On note uₙ le nombre d'adhérents en 2025 + n. 1. Justifier que uₙ₊₁ = 0,75uₙ + 300. 2. On pose vₙ = uₙ - 1 200. Montrer que (vₙ) est géométrique. 3. En déduire uₙ en fonction de n et la limite de (uₙ). Interpréter.",
            solution: [
              "1. Garder 75 % des adhérents revient à multiplier par 0,75, puis on ajoute les 300 nouveaux : uₙ₊₁ = 0,75uₙ + 300, avec u₀ = 800.",
              "2. vₙ₊₁ = uₙ₊₁ - 1 200 = 0,75uₙ + 300 - 1 200 = 0,75uₙ - 900.",
              "On factorise par 0,75 : 0,75uₙ - 900 = 0,75(uₙ - 1 200) = 0,75vₙ, car 0,75 × 1 200 = 900. Donc (vₙ) est géométrique de raison 0,75, de premier terme v₀ = 800 - 1 200 = -400.",
              "3. vₙ = -400 × 0,75ⁿ, donc uₙ = vₙ + 1 200 = 1 200 - 400 × 0,75ⁿ.",
              "Comme 0 < 0,75 < 1, 0,75ⁿ tend vers 0, donc uₙ tend vers 1 200.",
              "Conclusion : le nombre d'adhérents augmente et se stabilise à long terme autour de 1 200, le point fixe 300/(1 - 0,75).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère la suite définie par u₀ = 4 et, pour tout entier naturel n, uₙ₊₁ = 0,5uₙ + 3. 1. Calculer u₁, u₂ et u₃. 2. Calculer le point fixe l, solution de l'équation l = 0,5l + 3. 3. Exprimer uₙ en fonction de n et déterminer la limite de la suite.",
              hint: "Remplacez uₙ par la valeur précédente à chaque étape. Pour la formule explicite, utilisez uₙ = l + (u₀ - l) × aⁿ.",
              solution: [
                "1. u₁ = 0,5 × 4 + 3 = 5 ; u₂ = 0,5 × 5 + 3 = 5,5 ; u₃ = 0,5 × 5,5 + 3 = 5,75.",
                "2. l = 0,5l + 3 équivaut à 0,5l = 3, soit l = 6 (on retrouve b/(1 - a) = 3/0,5 = 6).",
                "3. La suite vₙ = uₙ - 6 est géométrique de raison 0,5, avec v₀ = 4 - 6 = -2. Donc vₙ = -2 × 0,5ⁿ et uₙ = 6 - 2 × 0,5ⁿ.",
                "Vérification : u₁ = 6 - 2 × 0,5 = 5. Comme 0,5ⁿ tend vers 0, uₙ tend vers 6, ce que suggéraient les premiers termes.",
              ],
            },
            {
              level: 2,
              statement: "Mme Martin place 10 000 € au taux de 2 % par an. À la fin de chaque année, après le versement des intérêts, elle retire 500 € (données fictives). On note uₙ le capital après n années, avec u₀ = 10 000. 1. Justifier que uₙ₊₁ = 1,02uₙ - 500 et calculer u₁ et u₂. 2. On pose vₙ = uₙ - 25 000. Montrer que (vₙ) est géométrique et en déduire uₙ en fonction de n. 3. Déterminer la limite de (uₙ) et l'interpréter. 4. À l'aide de la calculatrice, déterminer le plus petit entier n tel que uₙ < 0. Interpréter.",
              hint: "Calculez d'abord les intérêts (multiplier par 1,02), puis retirez 500. Ici a = 1,02 est supérieur à 1 : l'écart au point fixe grandit au lieu de diminuer.",
              solution: [
                "1. Les intérêts multiplient le capital par 1,02, puis on retire 500 € : uₙ₊₁ = 1,02uₙ - 500. u₁ = 1,02 × 10 000 - 500 = 9 700 € et u₂ = 1,02 × 9 700 - 500 = 9 894 - 500 = 9 394 €.",
                "2. vₙ₊₁ = uₙ₊₁ - 25 000 = 1,02uₙ - 25 500 = 1,02(uₙ - 25 000) = 1,02vₙ, car 1,02 × 25 000 = 25 500. La suite (vₙ) est géométrique de raison 1,02.",
                "v₀ = 10 000 - 25 000 = -15 000, donc vₙ = -15 000 × 1,02ⁿ et uₙ = 25 000 - 15 000 × 1,02ⁿ.",
                "3. Comme 1,02 > 1, 1,02ⁿ tend vers +∞, donc -15 000 × 1,02ⁿ tend vers -∞ et uₙ tend vers -∞. Dans ce modèle, le capital finit par s'épuiser : les intérêts ne compensent pas les retraits.",
                "4. La calculatrice donne u₂₅ ≈ 390,91 € > 0 et u₂₆ ≈ -101,27 € < 0. Le plus petit entier cherché est n = 26 : après 25 ans, il reste environ 391 €, et le retrait de la 26e année ne peut plus être effectué en totalité.",
                "Remarque : le point fixe 25 000 € est le capital qui permettrait de retirer 500 € par an indéfiniment, car 2 % de 25 000 € font exactement 500 €.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Un patient prend un comprimé de 100 mg d'un médicament toutes les 12 heures. Entre deux prises, l'organisme élimine 30 % de la quantité présente (modèle simplifié, données fictives). On note uₙ la quantité de médicament (en mg) présente juste après la (n + 1)-ième prise, avec u₀ = 100. 1. Justifier que uₙ₊₁ = 0,7uₙ + 100 et calculer u₁ et u₂. 2. On pose vₙ = uₙ - 1 000/3. Montrer que (vₙ) est géométrique, puis que uₙ = 1 000/3 - (700/3) × 0,7ⁿ. 3. Déterminer la limite de (uₙ). Le médicament devient dangereux au-delà de 350 mg : le traitement présente-t-il un risque de surdosage ? 4. Le traitement est efficace dès que la quantité atteint 300 mg. Compléter la fonction Python suivante pour qu'elle renvoie le premier rang n tel que uₙ ≥ 300, puis donner la valeur renvoyée et l'interpréter : def seuil(): u = 100 ; n = 0 ; while ... : (u = ... ; n = n + 1) ; return n.",
              hint: "Pour la question 2, remplacez uₙ₊₁ par 0,7uₙ + 100 et factorisez par 0,7. Pour la question 4, la condition écrite après while est celle pour laquelle il faut continuer à calculer.",
              solution: [
                "1. Entre deux prises, il reste 70 % de la quantité, soit 0,7uₙ, puis on ajoute 100 mg : uₙ₊₁ = 0,7uₙ + 100. u₁ = 0,7 × 100 + 100 = 170 mg et u₂ = 0,7 × 170 + 100 = 219 mg.",
                "2. vₙ₊₁ = uₙ₊₁ - 1 000/3 = 0,7uₙ + 100 - 1 000/3 = 0,7uₙ - 700/3 = 0,7(uₙ - 1 000/3) = 0,7vₙ, car 0,7 × 1 000/3 = 700/3. La suite (vₙ) est géométrique de raison 0,7.",
                "v₀ = 100 - 1 000/3 = -700/3, donc vₙ = -(700/3) × 0,7ⁿ et uₙ = 1 000/3 - (700/3) × 0,7ⁿ.",
                "3. 0 < 0,7 < 1, donc 0,7ⁿ tend vers 0 et uₙ tend vers 1 000/3 ≈ 333,3 mg. De plus (700/3) × 0,7ⁿ > 0, donc uₙ < 1 000/3 < 350 pour tout n : il n'y a pas de risque de surdosage dans ce modèle.",
                "4. La boucle doit continuer tant que u < 300 : on écrit while u < 300:, puis u = 0.7*u + 100, puis n = n + 1.",
                "Les termes successifs sont 100 ; 170 ; 219 ; 253,3 ; 277,31 ; 294,117 ; 305,8819. Le premier terme supérieur ou égal à 300 est u₆ : la fonction renvoie 6.",
                "Interprétation : le traitement devient efficace juste après la 7e prise, soit 6 × 12 = 72 heures après la première.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'étude d'une suite arithmético-géométrique.",
            items: [
              "Traduire l'énoncé par une relation uₙ₊₁ = auₙ + b et donner u₀.",
              "Calculer le point fixe l en résolvant l = al + b.",
              "Poser vₙ = uₙ - l et montrer que vₙ₊₁ = avₙ.",
              "Écrire vₙ = v₀ × aⁿ, avec v₀ = u₀ - l.",
              "En déduire uₙ = l + (u₀ - l) × aⁿ.",
              "Déterminer la limite de (uₙ) et l'interpréter dans le contexte.",
            ],
          },
          quiz: [
            {
              q: "u₀ = 2 et uₙ₊₁ = 3uₙ - 1. Que vaut u₂ ?",
              options: ["14", "5", "17", "11"],
              answer: 0,
              why: "u₁ = 3 × 2 - 1 = 5, puis u₂ = 3 × 5 - 1 = 14.",
            },
            {
              q: "Quel est le point fixe de la relation uₙ₊₁ = 0,8uₙ + 40 ?",
              options: ["50", "40", "200", "32"],
              answer: 2,
              why: "l = 0,8l + 40 équivaut à 0,2l = 40, soit l = 200.",
            },
            {
              q: "uₙ₊₁ = 0,6uₙ + 20 et u₀ = 10. Quelle est la limite de (uₙ) ?",
              options: ["10", "+∞", "20", "50"],
              answer: 3,
              why: "0 < 0,6 < 1, donc la suite converge vers le point fixe l = 20/(1 - 0,6) = 50, quel que soit u₀.",
            },
            {
              q: "Dans un algorithme de seuil, que contient la variable n à la sortie de la boucle while ?",
              options: ["Le terme uₙ", "Le rang cherché", "La valeur du seuil", "Le premier terme u₀"],
              answer: 1,
              why: "À chaque tour, n augmente de 1 en même temps qu'on calcule le terme suivant : à la sortie, n est le premier rang pour lequel la condition de poursuite est fausse.",
            },
            {
              q: "Pour uₙ₊₁ = auₙ + b (a ≠ 1) de point fixe l, la suite vₙ = uₙ - l est :",
              options: ["arithmétique de raison b", "géométrique de raison a", "constante", "géométrique de raison b"],
              answer: 1,
              why: "vₙ₊₁ = auₙ + b - (al + b) = a(uₙ - l) = avₙ : la suite (vₙ) est géométrique de raison a.",
            },
          ],
          trap: "Écrire uₙ = u₀ × aⁿ comme pour une suite géométrique, alors que c'est la suite auxiliaire (vₙ) qui est géométrique et non (uₙ), ou oublier d'ajouter l à la fin pour revenir à uₙ.",
          method: "Avant de démontrer que (vₙ) est géométrique, vérifiez numériquement : calculez u₀, u₁, u₂, puis v₀, v₁, v₂, et contrôlez que v₁/v₀ = v₂/v₁ = a. À la fin, testez la formule explicite sur u₁.",
        },
      ],
    },

    /* ================================================================== */
    /* DÉRIVATION ET CONVEXITÉ                                              */
    /* ================================================================== */
    {
      id: 'derivation-convexite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'derivees',
          title: 'Calculer des dérivées',
          minutes: 30,
          objectives: [
            "Interpréter le nombre dérivé comme coefficient directeur de la tangente et comme taux de variation instantané.",
            "Calculer la dérivée d'une fonction à l'aide des dérivées usuelles et des opérations (somme, produit, quotient).",
            "Calculer la dérivée d'une fonction composée, en particulier de x ↦ g(ax + b), de e^(u) et de √u.",
            "Déterminer l'équation réduite d'une tangente.",
          ],
          course: [
            {
              heading: "Nombre dérivé et tangente : rappels",
              paragraphs: [
                "Le nombre dérivé f'(a) est la limite, lorsque h tend vers 0, du taux de variation (f(a + h) - f(a))/h. Graphiquement, c'est le coefficient directeur de la tangente à la courbe au point d'abscisse a : la droite qui épouse le mieux la courbe au voisinage de ce point. Son équation réduite est y = f'(a)(x - a) + f(a).",
                "En modélisation, f'(a) est un taux de variation instantané. Si d(t) est la distance parcourue (en m) à l'instant t (en s), d'(t) est la vitesse instantanée en m/s. En économie, si C(q) est le coût de production de q unités, C'(q) est le coût marginal : il mesure approximativement le coût de production d'une unité supplémentaire, puisque C(q + 1) - C(q) ≈ C'(q).",
              ],
              box: { label: "Formule", text: "Tangente à la courbe de f au point d'abscisse a : y = f'(a)(x - a) + f(a). Interprétation : f'(a) est la vitesse de variation de f en a (vitesse, coût marginal, débit...)." },
            },
            {
              heading: "Dérivées des fonctions usuelles",
              paragraphs: [
                "Les dérivées de référence sont à connaître parfaitement. Une constante a pour dérivée 0. La fonction x ↦ x a pour dérivée 1. Pour tout entier n ≥ 1, la fonction x ↦ xⁿ a pour dérivée x ↦ nxⁿ⁻¹ : la dérivée de x² est 2x, celle de x³ est 3x², celle de x⁵ est 5x⁴.",
                "La fonction inverse x ↦ 1/x a pour dérivée x ↦ -1/x² sur ]-∞ ; 0[ et sur ]0 ; +∞[. La fonction racine carrée x ↦ √x a pour dérivée x ↦ 1/(2√x) sur ]0 ; +∞[ (elle n'est pas dérivable en 0). La fonction exponentielle est sa propre dérivée : (eˣ)' = eˣ. On verra que la fonction logarithme népérien a pour dérivée x ↦ 1/x sur ]0 ; +∞[.",
              ],
              box: { label: "À retenir", text: "(k)' = 0 ; (x)' = 1 ; (xⁿ)' = nxⁿ⁻¹ ; (1/x)' = -1/x² pour x ≠ 0 ; (√x)' = 1/(2√x) pour x > 0 ; (eˣ)' = eˣ." },
            },
            {
              heading: "Opérations sur les dérivées",
              paragraphs: [
                "Si u et v sont dérivables sur un intervalle I et k est un réel : (u + v)' = u' + v' et (ku)' = ku'. On dérive ainsi un polynôme terme à terme : si f(x) = 4x³ - 5x + 2, alors f'(x) = 12x² - 5.",
                "Pour un produit, la dérivée n'est pas le produit des dérivées : (uv)' = u'v + uv'. Exemple : f(x) = (2x + 1)eˣ, avec u = 2x + 1 (u' = 2) et v = eˣ (v' = eˣ), donne f'(x) = 2eˣ + (2x + 1)eˣ = (2x + 3)eˣ. Pour un quotient, si v ne s'annule pas sur I : (u/v)' = (u'v - uv')/v², et en particulier (1/v)' = -v'/v².",
              ],
              box: { label: "Formule", text: "(u + v)' = u' + v' ; (ku)' = ku' ; (uv)' = u'v + uv' ; (1/v)' = -v'/v² ; (u/v)' = (u'v - uv')/v², là où v ne s'annule pas." },
            },
            {
              heading: "Dérivée d'une fonction composée",
              paragraphs: [
                "Lorsqu'une fonction s'écrit g(u(x)), on la dérive avec la formule (g ∘ u)' = u' × (g' ∘ u) : on dérive la fonction « extérieure » en gardant l'intérieur, puis on multiplie par la dérivée de l'intérieur. Le cas le plus fréquent est celui d'une fonction affine à l'intérieur : la dérivée de x ↦ g(ax + b) est x ↦ a × g'(ax + b). Ainsi (e^(3x))' = 3e^(3x) et (e^(-0,5x))' = -0,5e^(-0,5x).",
                "Cas à connaître : (e^(u))' = u'e^(u) ; (√u)' = u'/(2√u) là où u > 0 ; (uⁿ)' = nu'uⁿ⁻¹. Exemples : la dérivée de e^(x²) est 2xe^(x²) ; celle de √(4x + 1) est 4/(2√(4x + 1)) = 2/√(4x + 1) ; celle de (3x + 1)² est 2 × 3 × (3x + 1) = 6(3x + 1).",
                "Pour ne pas se tromper, on nomme explicitement la fonction intérieure u et on calcule u' à part avant d'appliquer la formule. Une vérification utile : en développant (3x + 1)² = 9x² + 6x + 1, on trouve la dérivée 18x + 6, qui est bien égale à 6(3x + 1).",
              ],
              box: { label: "Formule", text: "(g(ax + b))' = a × g'(ax + b) ; (e^(u))' = u' × e^(u) ; (√u)' = u'/(2√u) ; (uⁿ)' = n × u' × uⁿ⁻¹." },
            },
          ],
          keyPoints: [
            "f'(a) = coefficient directeur de la tangente = taux de variation instantané (vitesse, coût marginal).",
            "Tangente au point d'abscisse a : y = f'(a)(x - a) + f(a).",
            "(xⁿ)' = nxⁿ⁻¹ ; (1/x)' = -1/x² ; (√x)' = 1/(2√x) ; (eˣ)' = eˣ.",
            "(uv)' = u'v + uv' ; (u/v)' = (u'v - uv')/v².",
            "(g(ax + b))' = a g'(ax + b) ; (e^(u))' = u'e^(u) ; (√u)' = u'/(2√u).",
            "Coût marginal : C'(q) ≈ C(q + 1) - C(q), le coût d'une unité supplémentaire.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ℝ par f(x) = (2x + 1)eˣ. 1. Calculer f'(x). 2. Déterminer l'équation réduite de la tangente à la courbe de f au point d'abscisse 0.",
            solution: [
              "1. f est un produit uv avec u(x) = 2x + 1 et v(x) = eˣ. On a u'(x) = 2 et v'(x) = eˣ.",
              "f'(x) = u'(x)v(x) + u(x)v'(x) = 2eˣ + (2x + 1)eˣ = (2 + 2x + 1)eˣ = (2x + 3)eˣ.",
              "2. f(0) = (0 + 1)e⁰ = 1 et f'(0) = (0 + 3)e⁰ = 3.",
              "La tangente a pour équation y = f'(0)(x - 0) + f(0), soit y = 3x + 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Calculer la dérivée de chacune des fonctions suivantes sur l'intervalle indiqué : f(x) = 4x³ - 5x + 2 sur ℝ ; g(x) = 3/x + √x sur ]0 ; +∞[ ; h(x) = 2eˣ - x² sur ℝ.",
              hint: "Dérivez terme à terme en utilisant les dérivées usuelles ; un facteur constant se conserve.",
              solution: [
                "f'(x) = 4 × 3x² - 5 = 12x² - 5.",
                "g(x) = 3 × (1/x) + √x, donc g'(x) = 3 × (-1/x²) + 1/(2√x) = -3/x² + 1/(2√x).",
                "h'(x) = 2eˣ - 2x.",
              ],
            },
            {
              level: 2,
              statement: "Calculer la dérivée de chacune des fonctions suivantes : f(x) = xe^(-x) sur ℝ ; g(x) = (2x - 3)/(x + 1) sur ]-1 ; +∞[ ; h(x) = √(4x + 1) sur ]-1/4 ; +∞[ ; k(x) = (1 - 3x)⁴ sur ℝ.",
              hint: "f est un produit, g un quotient, h et k des composées : nommez la fonction intérieure u et calculez u' à part.",
              solution: [
                "f : u = x et v = e^(-x), donc u' = 1 et v' = -e^(-x). f'(x) = e^(-x) + x × (-e^(-x)) = (1 - x)e^(-x).",
                "g : u = 2x - 3 et v = x + 1, donc u' = 2 et v' = 1. g'(x) = (2(x + 1) - (2x - 3) × 1)/(x + 1)² = (2x + 2 - 2x + 3)/(x + 1)² = 5/(x + 1)².",
                "h : h = √u avec u = 4x + 1 et u' = 4. h'(x) = 4/(2√(4x + 1)) = 2/√(4x + 1).",
                "k : k = u⁴ avec u = 1 - 3x et u' = -3. k'(x) = 4 × (-3) × (1 - 3x)³ = -12(1 - 3x)³.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Une entreprise produit entre 0 et 40 tonnes d'engrais par jour. Le coût total de production de q tonnes, en centaines d'euros, est C(q) = 0,02q³ - 1,2q² + 30q + 100 (données fictives). On appelle coût marginal la fonction C'. 1. Calculer C'(q). 2. Calculer C'(10), puis C(11) - C(10), et comparer. 3. Déterminer l'équation de la tangente à la courbe de C au point d'abscisse 10. 4. Calculer la dérivée de C', puis déterminer pour quelle production le coût marginal est minimal et donner ce minimum.",
              hint: "Le coût marginal approche le coût de la tonne supplémentaire : C(11) - C(10) ≈ C'(10). Pour la dernière question, étudiez le signe de 0,12q - 2,4.",
              solution: [
                "1. C'(q) = 0,02 × 3q² - 1,2 × 2q + 30 = 0,06q² - 2,4q + 30.",
                "2. C'(10) = 0,06 × 100 - 24 + 30 = 6 - 24 + 30 = 12, soit 1 200 € par tonne supplémentaire.",
                "C(10) = 20 - 120 + 300 + 100 = 300 et C(11) = 0,02 × 1 331 - 1,2 × 121 + 330 + 100 = 26,62 - 145,2 + 330 + 100 = 311,42. Donc C(11) - C(10) = 11,42 : la 11e tonne coûte 1 142 €, valeur proche du coût marginal de 1 200 €.",
                "3. La tangente a pour équation y = C'(10)(q - 10) + C(10) = 12(q - 10) + 300, soit y = 12q + 180.",
                "4. La dérivée de C' est q ↦ 0,12q - 2,4. Elle est négative pour q < 20 et positive pour q > 20 : C' est décroissante sur [0 ; 20] puis croissante sur [20 ; 40].",
                "Le coût marginal est donc minimal pour q = 20 tonnes : C'(20) = 0,06 × 400 - 48 + 30 = 24 - 48 + 30 = 6, soit 600 € par tonne supplémentaire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque fonction à sa dérivée.",
            pairs: [
              { left: "x ↦ x⁴", right: "x ↦ 4x³" },
              { left: "x ↦ 1/x", right: "x ↦ -1/x²" },
              { left: "x ↦ √x", right: "x ↦ 1/(2√x)" },
              { left: "x ↦ e^(5x)", right: "x ↦ 5e^(5x)" },
              { left: "x ↦ xeˣ", right: "x ↦ (x + 1)eˣ" },
              { left: "x ↦ (2x + 1)³", right: "x ↦ 6(2x + 1)²" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la dérivée de f(x) = e^(-2x) ?",
              options: ["e^(-2x)", "-2e^(-2x)", "-2xe^(-2x - 1)", "2e^(-2x)"],
              answer: 1,
              why: "(e^(u))' = u'e^(u) avec u(x) = -2x et u'(x) = -2 : f'(x) = -2e^(-2x).",
            },
            {
              q: "f(1) = 3 et f'(1) = -2. Quelle est l'équation de la tangente au point d'abscisse 1 ?",
              options: ["y = 3x - 2", "y = -2x + 1", "y = -2x + 5", "y = 3x + 5"],
              answer: 2,
              why: "y = f'(1)(x - 1) + f(1) = -2(x - 1) + 3 = -2x + 5.",
            },
            {
              q: "Quelle est la dérivée de x ↦ x²eˣ ?",
              options: ["2xeˣ", "x²eˣ + 2", "(2x + 1)x²eˣ", "(x² + 2x)eˣ"],
              answer: 3,
              why: "(uv)' = u'v + uv' avec u = x² et v = eˣ : 2xeˣ + x²eˣ = (x² + 2x)eˣ.",
            },
            {
              q: "Le coût total est C(q) et C'(50) = 8 €. Comment l'interpréter ?",
              options: ["Produire 50 unités coûte 8 € au total", "La 51e unité coûte environ 8 €", "Le coût moyen vaut 8 €", "Le coût total baisse de 8 €"],
              answer: 1,
              why: "Le coût marginal C'(50) approche C(51) - C(50), c'est-à-dire le coût de l'unité supplémentaire.",
            },
            {
              q: "Quelle est la dérivée de x ↦ √(2x + 3) ?",
              options: ["1/√(2x + 3)", "1/(2√(2x + 3))", "2√(2x + 3)", "√2"],
              answer: 0,
              why: "(√u)' = u'/(2√u) avec u' = 2 : 2/(2√(2x + 3)) = 1/√(2x + 3). Oublier le facteur u' = 2 donne la deuxième proposition, qui est fausse.",
            },
          ],
          trap: "Dériver un produit en multipliant les dérivées ((uv)' = u'v' est faux), ou oublier le facteur u' dans une composée : la dérivée de e^(3x) est 3e^(3x), et non e^(3x).",
          method: "Avant de dériver, identifiez la forme de la fonction (somme, produit, quotient, composée), nommez u et v et écrivez u' et v' sur une ligne à part. Contrôlez ensuite le résultat en calculant f'(a) en un point simple et en le comparant à la pente de la courbe tracée à la calculatrice.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'variations-optimisation',
          title: 'Variations et optimisation',
          minutes: 35,
          objectives: [
            "Déterminer le sens de variation d'une fonction à partir du signe de sa dérivée.",
            "Dresser le tableau de variations d'une fonction et identifier ses extremums.",
            "Résoudre un problème d'optimisation (coût, bénéfice, aire, volume) en étudiant une fonction sur un intervalle.",
          ],
          course: [
            {
              heading: "Signe de la dérivée et sens de variation",
              paragraphs: [
                "Le lien fondamental entre une fonction et sa dérivée est le suivant : sur un intervalle I, si f'(x) ≥ 0 pour tout x de I, alors f est croissante sur I ; si f'(x) ≤ 0, f est décroissante ; si f'(x) = 0 pour tout x, f est constante. Lorsque f' est strictement positive, sauf éventuellement en des points isolés où elle s'annule, f est strictement croissante.",
                "On le comprend avec les tangentes : là où la dérivée est positive, toutes les tangentes montent, donc la courbe monte. En modélisation : si une population P(t) a une dérivée positive, elle augmente ; si le bénéfice B(x) a une dérivée négative, produire davantage le fait diminuer.",
              ],
              box: { label: "Propriété", text: "Sur un intervalle I : si f' ≥ 0 sur I, f est croissante sur I ; si f' ≤ 0 sur I, f est décroissante sur I ; si f' = 0 sur I, f est constante sur I." },
            },
            {
              heading: "Extremums",
              paragraphs: [
                "Si f admet un maximum ou un minimum local en un point a intérieur à l'intervalle et si f est dérivable en a, alors f'(a) = 0 : la tangente y est horizontale. Mais la réciproque est fausse : pour f(x) = x³, f'(0) = 0 alors que f est croissante sur ℝ et n'a pas d'extremum en 0.",
                "La bonne condition est la suivante : si f' s'annule en a en changeant de signe, f admet un extremum local en a. Un passage de + à - donne un maximum, un passage de - à + donne un minimum. Sur un intervalle fermé [a ; b], il faut aussi examiner les bornes : le maximum ou le minimum peut être atteint en a ou en b.",
              ],
              box: { label: "Propriété", text: "Si f' s'annule en a en changeant de signe, f admet un extremum local en a : un maximum si f' passe de + à -, un minimum si f' passe de - à +. La seule condition f'(a) = 0 ne suffit pas." },
            },
            {
              heading: "La méthode d'étude d'une fonction",
              paragraphs: [
                "On procède en quatre temps. 1. Calculer f'(x). 2. Étudier son signe : on factorise le plus possible, on utilise le fait que eˣ > 0 pour tout réel x, et l'on étudie le signe d'un trinôme du second degré à l'aide de ses racines (il est du signe du coefficient de x² à l'extérieur des racines). 3. Dresser le tableau de variations, en calculant les valeurs aux points où f' s'annule et aux bornes. 4. Conclure sur les extremums.",
                "Exemple : f(x) = 2x³ - 3x² - 12x + 4 sur ℝ. f'(x) = 6x² - 6x - 12 = 6(x² - x - 2) = 6(x + 1)(x - 2). La dérivée est positive à l'extérieur des racines -1 et 2 et négative entre elles. f est croissante sur ]-∞ ; -1], décroissante sur [-1 ; 2], croissante sur [2 ; +∞[, avec un maximum local f(-1) = 11 et un minimum local f(2) = -16.",
              ],
              box: { label: "Repère", text: "Étude d'une fonction : 1. calcul de f'(x) ; 2. signe de f'(x) (factoriser, eˣ > 0, signe d'un trinôme) ; 3. tableau de variations avec les valeurs ; 4. conclusion sur les extremums." },
            },
            {
              heading: "Optimiser : du problème à la fonction",
              paragraphs: [
                "Un problème d'optimisation demande la meilleure valeur d'une grandeur : bénéfice maximal, coût minimal, volume maximal. La difficulté est souvent de traduire l'énoncé : choisir la variable (quantité produite, longueur...), préciser son intervalle de variation, exprimer la grandeur à optimiser comme une fonction de cette variable, puis étudier ses variations.",
                "Exemple : avec une plaque carrée de 30 cm de côté, on fabrique une boîte sans couvercle en découpant un carré de côté x à chaque coin et en relevant les bords. Le volume est V(x) = x(30 - 2x)² pour x dans [0 ; 15]. On trouve V'(x) = (30 - 2x)(30 - 6x), positive sur [0 ; 5] et négative sur [5 ; 15]. Le volume est maximal pour x = 5 cm et vaut V(5) = 5 × 20² = 2 000 cm³, soit 2 litres.",
                "En économie, on rencontre aussi le coût moyen CM(q) = C(q)/q, qui donne le coût par unité produite. On montre que, lorsque le coût moyen est minimal, il est égal au coût marginal C'(q) : produire une unité de plus ne fait alors plus baisser la moyenne.",
              ],
              box: { label: "À retenir", text: "Optimiser : choisir la variable et son intervalle, exprimer la grandeur à optimiser en fonction de cette variable, étudier ses variations, puis répondre à la question posée par une phrase, avec l'unité." },
            },
          ],
          keyPoints: [
            "f' ≥ 0 sur un intervalle : f croissante ; f' ≤ 0 : f décroissante.",
            "Extremum local en a : f' s'annule en changeant de signe (de + vers - : maximum ; de - vers + : minimum).",
            "f'(a) = 0 ne suffit pas : x ↦ x³ a une dérivée nulle en 0 sans extremum.",
            "Signe de f' : factoriser, utiliser eˣ > 0, signe d'un trinôme (signe du coefficient de x² à l'extérieur des racines).",
            "Sur [a ; b], comparer les extremums locaux et les valeurs aux bornes.",
            "Au minimum du coût moyen, coût moyen et coût marginal sont égaux.",
          ],
          example: {
            statement: "Une entreprise produit x centaines d'objets par semaine, avec x dans [0 ; 15]. Son bénéfice, en milliers d'euros, est B(x) = -x³ + 18x² - 60x - 100 (données fictives). Déterminer la production qui maximise le bénéfice et le bénéfice maximal.",
            solution: [
              "B'(x) = -3x² + 36x - 60 = -3(x² - 12x + 20).",
              "Le trinôme x² - 12x + 20 a pour discriminant Δ = 144 - 80 = 64 et pour racines (12 - 8)/2 = 2 et (12 + 8)/2 = 10. Donc B'(x) = -3(x - 2)(x - 10).",
              "B'(x) est du signe de -3, donc négatif, à l'extérieur des racines, et positif entre 2 et 10. B est décroissante sur [0 ; 2], croissante sur [2 ; 10], décroissante sur [10 ; 15].",
              "Valeurs utiles : B(0) = -100 ; B(2) = -8 + 72 - 120 - 100 = -156 ; B(10) = -1 000 + 1 800 - 600 - 100 = 100 ; B(15) = -3 375 + 4 050 - 900 - 100 = -325.",
              "Le maximum de B sur [0 ; 15] est donc 100, atteint pour x = 10 (la valeur en 0, qui est une borne, est négative).",
              "Conclusion : l'entreprise doit produire 1 000 objets par semaine ; son bénéfice est alors maximal et vaut 100 000 €.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f la fonction définie sur [-3 ; 3] par f(x) = x³ - 12x + 5. 1. Calculer f'(x) et la factoriser. 2. Étudier le signe de f'(x) et dresser le tableau de variations de f. 3. Donner le maximum et le minimum de f sur [-3 ; 3].",
              hint: "3x² - 12 = 3(x² - 4) : reconnaissez une différence de deux carrés.",
              solution: [
                "1. f'(x) = 3x² - 12 = 3(x² - 4) = 3(x - 2)(x + 2).",
                "2. Le trinôme s'annule en -2 et en 2 ; il est du signe de 3 (positif) à l'extérieur des racines et négatif entre elles. Donc f' ≥ 0 sur [-3 ; -2], f' ≤ 0 sur [-2 ; 2] et f' ≥ 0 sur [2 ; 3].",
                "f est croissante sur [-3 ; -2], décroissante sur [-2 ; 2], croissante sur [2 ; 3].",
                "Valeurs : f(-3) = -27 + 36 + 5 = 14 ; f(-2) = -8 + 24 + 5 = 21 ; f(2) = 8 - 24 + 5 = -11 ; f(3) = 27 - 36 + 5 = -4.",
                "3. Sur [-3 ; 3], le maximum est 21, atteint en x = -2, et le minimum est -11, atteint en x = 2.",
              ],
            },
            {
              level: 2,
              statement: "Soit f la fonction définie sur ℝ par f(x) = (x - 2)eˣ. 1. Montrer que f'(x) = (x - 1)eˣ. 2. Étudier les variations de f. 3. En déduire que, pour tout réel x, f(x) ≥ -e.",
              hint: "Utilisez la dérivée d'un produit, puis rappelez-vous que eˣ > 0 : le signe de f'(x) est celui de x - 1.",
              solution: [
                "1. f = uv avec u(x) = x - 2, u'(x) = 1, v(x) = eˣ et v'(x) = eˣ. f'(x) = eˣ + (x - 2)eˣ = (x - 1)eˣ.",
                "2. Comme eˣ > 0 pour tout x, f'(x) est du signe de x - 1 : négatif sur ]-∞ ; 1[, positif sur ]1 ; +∞[.",
                "f est décroissante sur ]-∞ ; 1] et croissante sur [1 ; +∞[. Elle admet un minimum en x = 1 : f(1) = (1 - 2)e¹ = -e ≈ -2,72.",
                "3. Le minimum de f sur ℝ est -e, donc f(x) ≥ -e pour tout réel x.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Une usine fabrique q milliers de pièces par jour, avec q dans [1 ; 50]. Le coût total, en centaines d'euros, est C(q) = q² + 50q + 400 (données fictives). Le coût moyen est CM(q) = C(q)/q. 1. Montrer que CM(q) = q + 50 + 400/q. 2. Calculer CM'(q) et montrer que CM'(q) = (q² - 400)/q². 3. Étudier les variations de CM sur [1 ; 50] et déterminer la production qui minimise le coût moyen. 4. Calculer le coût marginal C'(q) pour cette production et le comparer au coût moyen minimal.",
              hint: "Divisez chaque terme de C(q) par q. Pour le signe de CM'(q), remarquez que q² > 0 et que q² - 400 = (q - 20)(q + 20).",
              solution: [
                "1. CM(q) = (q² + 50q + 400)/q = q + 50 + 400/q.",
                "2. CM'(q) = 1 + 0 + 400 × (-1/q²) = 1 - 400/q² = (q² - 400)/q².",
                "3. q² > 0 et q² - 400 = (q - 20)(q + 20), avec q + 20 > 0 sur [1 ; 50] : CM'(q) est du signe de q - 20, négatif sur [1 ; 20[ et positif sur ]20 ; 50].",
                "CM est décroissante sur [1 ; 20] et croissante sur [20 ; 50]. Son minimum est CM(20) = 20 + 50 + 400/20 = 20 + 50 + 20 = 90, soit 9 000 € pour mille pièces, c'est-à-dire 9 € par pièce.",
                "4. C'(q) = 2q + 50, donc C'(20) = 40 + 50 = 90. Le coût marginal est égal au coût moyen minimal, comme l'annonce le cours.",
                "Conclusion : l'usine doit produire 20 000 pièces par jour pour un coût moyen minimal de 9 € par pièce.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la résolution d'un problème d'optimisation.",
            items: [
              "Choisir la variable et préciser son intervalle de variation.",
              "Exprimer la grandeur à optimiser en fonction de cette variable.",
              "Calculer la dérivée de la fonction obtenue.",
              "Étudier le signe de la dérivée.",
              "Dresser le tableau de variations avec les valeurs aux bornes.",
              "Répondre à la question par une phrase, avec l'unité.",
            ],
          },
          quiz: [
            {
              q: "Sur [0 ; 5], f'(x) = -2x - 1. Que peut-on dire de f ?",
              options: ["Elle est croissante", "Elle est décroissante", "Elle admet un minimum en 0", "Elle est constante"],
              answer: 1,
              why: "Pour x dans [0 ; 5], -2x - 1 ≤ -1 < 0 : la dérivée est négative, donc f est décroissante. Son minimum sur [0 ; 5] est en 5, pas en 0.",
            },
            {
              q: "f est dérivable sur ℝ et f'(3) = 0. Que peut-on affirmer ?",
              options: ["f admet un maximum local en x = 3", "f(3) = 0", "f est constante autour de 3", "La tangente en 3 est horizontale"],
              answer: 3,
              why: "f'(3) est le coefficient directeur de la tangente : il est nul, donc la tangente est horizontale. Il n'y a pas forcément d'extremum (pensez à x³ en 0).",
            },
            {
              q: "f'(x) = (x - 4)eˣ. Où f admet-elle un extremum, et de quelle nature ?",
              options: ["Un minimum en 4", "Un maximum en 4", "Un minimum en 0", "Aucun extremum"],
              answer: 0,
              why: "eˣ > 0, donc f' a le signe de x - 4 : négative avant 4, positive après. f décroît puis croît : minimum en 4.",
            },
            {
              q: "Le bénéfice B(x) a pour dérivée B'(x) = -2x + 40 sur [0 ; 30]. Pour quel x est-il maximal ?",
              options: ["x = 40", "x = 30", "x = 20", "x = 0"],
              answer: 2,
              why: "B'(x) ≥ 0 pour x ≤ 20 et B'(x) ≤ 0 pour x ≥ 20 : B croît puis décroît, son maximum est atteint en 20.",
            },
            {
              q: "Sur quel ensemble f'(x) = 3(x + 1)(x - 5) est-elle négative ?",
              options: ["Sur ]-∞ ; -1[", "Sur ]-1 ; 5[", "Sur ]5 ; +∞[", "Sur ℝ tout entier"],
              answer: 1,
              why: "Un trinôme est du signe de son coefficient de x² (ici 3, positif) à l'extérieur des racines, et du signe contraire entre les racines -1 et 5.",
            },
          ],
          trap: "Conclure à un extremum dès que f'(a) = 0, sans vérifier que la dérivée change de signe, ou oublier de comparer avec les valeurs aux bornes de l'intervalle d'étude dans un problème d'optimisation.",
          method: "Dans le tableau de variations, faites figurer trois lignes : x, signe de f'(x) (avec les zéros), variations de f (avec les valeurs calculées). Vérifiez la cohérence : une flèche montante doit correspondre à un signe + et aller d'une valeur plus petite vers une valeur plus grande.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'convexite',
          title: 'Convexité et point d\'inflexion',
          minutes: 30,
          objectives: [
            "Reconnaître graphiquement une fonction convexe ou concave sur un intervalle (position de la courbe par rapport à ses tangentes et à ses cordes).",
            "Étudier la convexité d'une fonction à l'aide du signe de sa dérivée seconde.",
            "Déterminer un point d'inflexion et l'interpréter dans un contexte (ralentissement d'une croissance, pic d'une épidémie).",
          ],
          course: [
            {
              heading: "Convexe, concave : la forme de la courbe",
              paragraphs: [
                "Une fonction f est dite convexe sur un intervalle I si sa courbe est située au-dessous de chacune de ses cordes sur cet intervalle : pour deux points A et B de la courbe, l'arc compris entre A et B est sous le segment [AB]. Pour une fonction dérivable, cela équivaut à dire que la courbe est au-dessus de chacune de ses tangentes. La courbe a la forme d'une cuvette.",
                "f est dite concave sur I si sa courbe est au-dessus de ses cordes et au-dessous de ses tangentes : elle a la forme d'une voûte. Exemples de référence : la fonction carré et la fonction exponentielle sont convexes sur ℝ ; la fonction racine carrée est concave sur [0 ; +∞[ ; la fonction cube est concave sur ]-∞ ; 0] et convexe sur [0 ; +∞[ ; la fonction inverse est concave sur ]-∞ ; 0[ et convexe sur ]0 ; +∞[.",
              ],
              box: { label: "Définition", text: "f convexe sur I : sur I, la courbe est au-dessous de ses cordes et au-dessus de ses tangentes. f concave sur I : sur I, la courbe est au-dessus de ses cordes et au-dessous de ses tangentes." },
            },
            {
              heading: "Convexité et dérivée seconde",
              paragraphs: [
                "La dérivée seconde f'' est la dérivée de f'. Pour une fonction deux fois dérivable sur I, on admet les équivalences suivantes : f est convexe sur I si et seulement si f' est croissante sur I, si et seulement si f''(x) ≥ 0 pour tout x de I. De même, f est concave sur I si et seulement si f' est décroissante sur I, si et seulement si f'' ≤ 0 sur I.",
                "L'idée : sur une cuvette, les pentes des tangentes augmentent quand on avance vers la droite (elles passent de négatives à positives). Exemple : f(x) = x² a pour dérivée f'(x) = 2x, qui est croissante, et f''(x) = 2 > 0 : f est convexe sur ℝ. Pour f(x) = x³, f''(x) = 6x est négatif pour x < 0 et positif pour x > 0.",
              ],
              box: { label: "Propriété", text: "f deux fois dérivable sur I : f convexe sur I ⇔ f' croissante sur I ⇔ f'' ≥ 0 sur I. f concave sur I ⇔ f' décroissante sur I ⇔ f'' ≤ 0 sur I." },
            },
            {
              heading: "Point d'inflexion",
              paragraphs: [
                "Un point d'inflexion est un point de la courbe où celle-ci traverse sa tangente : la fonction y change de convexité (de convexe à concave, ou l'inverse). Pour une fonction deux fois dérivable, cela se produit en un point où f'' s'annule en changeant de signe. Exemple : pour f(x) = x³, f'' change de signe en 0, donc l'origine est un point d'inflexion, et la courbe y traverse sa tangente, l'axe des abscisses.",
                "Attention, f''(a) = 0 ne suffit pas : pour f(x) = x⁴, f''(x) = 12x² s'annule en 0 sans changer de signe, et la fonction reste convexe sur ℝ ; il n'y a pas de point d'inflexion.",
              ],
              box: { label: "À retenir", text: "Si f'' s'annule en a en changeant de signe, le point de la courbe d'abscisse a est un point d'inflexion : la convexité change et la courbe traverse sa tangente en ce point." },
            },
            {
              heading: "Interpréter la convexité",
              paragraphs: [
                "La convexité décrit la façon dont une grandeur varie. Si une quantité est croissante et convexe, sa croissance accélère (rendements croissants) ; si elle est croissante et concave, elle croît de moins en moins vite (rendements décroissants). Le point d'inflexion marque le moment où la vitesse de variation f' atteint un maximum ou un minimum.",
                "Exemple en épidémiologie : si N(t) est le nombre total de personnes atteintes à la date t, N'(t) est le nombre de nouveaux cas par jour. Tant que N est convexe, l'épidémie accélère ; au point d'inflexion, le nombre de nouveaux cas par jour est maximal (c'est le pic de l'épidémie) ; ensuite N est concave et l'épidémie ralentit, même si le total continue d'augmenter.",
                "La convexité fournit aussi des inégalités. La tangente à la courbe de l'exponentielle au point d'abscisse 0 est la droite d'équation y = x + 1 ; comme exp est convexe sur ℝ, sa courbe est au-dessus de cette tangente : pour tout réel x, eˣ ≥ x + 1.",
              ],
              box: { label: "Repère", text: "Croissante et convexe : croissance qui accélère. Croissante et concave : croissance qui ralentit. Au point d'inflexion, la vitesse de variation f' atteint un extremum." },
            },
          ],
          keyPoints: [
            "Convexe : courbe au-dessus de ses tangentes et au-dessous de ses cordes ; concave : l'inverse.",
            "f convexe ⇔ f' croissante ⇔ f'' ≥ 0 ; f concave ⇔ f' décroissante ⇔ f'' ≤ 0.",
            "Point d'inflexion : f'' s'annule en changeant de signe ; la courbe traverse sa tangente.",
            "f''(a) = 0 ne suffit pas : x ↦ x⁴ n'a pas de point d'inflexion en 0.",
            "Au point d'inflexion, la vitesse de variation f' est maximale ou minimale (pic d'une épidémie).",
            "Convexité de l'exponentielle : eˣ ≥ x + 1 pour tout réel x.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ℝ par f(x) = x³ - 6x² + 9x + 1. 1. Calculer f'(x) et f''(x). 2. Étudier la convexité de f. 3. Montrer que la courbe admet un point d'inflexion A dont on donnera les coordonnées, puis déterminer l'équation de la tangente en A.",
            solution: [
              "1. f'(x) = 3x² - 12x + 9 et f''(x) = 6x - 12.",
              "2. f''(x) ≥ 0 équivaut à 6x ≥ 12, soit x ≥ 2. Donc f est concave sur ]-∞ ; 2] et convexe sur [2 ; +∞[.",
              "3. f'' s'annule en 2 en changeant de signe : le point A d'abscisse 2 est un point d'inflexion. f(2) = 8 - 24 + 18 + 1 = 3, donc A(2 ; 3).",
              "f'(2) = 12 - 24 + 9 = -3. La tangente en A a pour équation y = -3(x - 2) + 3, soit y = -3x + 9.",
              "Vérification : f(x) - (-3x + 9) = x³ - 6x² + 12x - 8 = (x - 2)³, négatif pour x < 2 et positif pour x > 2 : la courbe traverse bien sa tangente en A.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Soit f la fonction définie sur ℝ par f(x) = -x³ + 3x² + 2. Étudier la convexité de f et déterminer les coordonnées de son point d'inflexion.",
              hint: "Calculez f' puis f'', et étudiez le signe de f''(x), qui est une expression affine.",
              solution: [
                "f'(x) = -3x² + 6x et f''(x) = -6x + 6.",
                "f''(x) ≥ 0 équivaut à -6x ≥ -6, soit x ≤ 1 (on divise par -6 en changeant le sens de l'inégalité).",
                "f est convexe sur ]-∞ ; 1] et concave sur [1 ; +∞[.",
                "f'' s'annule en 1 en changeant de signe : il y a un point d'inflexion d'abscisse 1, avec f(1) = -1 + 3 + 2 = 4. Le point d'inflexion est I(1 ; 4).",
              ],
            },
            {
              level: 2,
              statement: "Soit f la fonction définie sur ℝ par f(x) = xeˣ. 1. Calculer f'(x) et f''(x). 2. Étudier la convexité de f. 3. Donner les coordonnées du point d'inflexion (valeur exacte, puis arrondie au centième).",
              hint: "Utilisez deux fois la dérivée d'un produit ; eˣ > 0, donc f''(x) est du signe d'une expression affine.",
              solution: [
                "1. f'(x) = 1 × eˣ + x × eˣ = (x + 1)eˣ. Puis f''(x) = 1 × eˣ + (x + 1)eˣ = (x + 2)eˣ.",
                "2. eˣ > 0, donc f''(x) est du signe de x + 2 : négatif sur ]-∞ ; -2[, positif sur ]-2 ; +∞[. f est concave sur ]-∞ ; -2] et convexe sur [-2 ; +∞[.",
                "3. f'' s'annule en -2 en changeant de signe : point d'inflexion d'abscisse -2 et d'ordonnée f(-2) = -2e^(-2) ≈ -0,27. Le point d'inflexion est I(-2 ; -2e^(-2)).",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Lors d'une épidémie de grippe dans une ville, on modélise le nombre total de personnes tombées malades depuis le début de l'épidémie par N(t) = -t³ + 27t² + 10, où t est le nombre de jours écoulés, avec t dans [0 ; 18] (modèle et données fictifs). 1. Calculer N'(t) et montrer que N est croissante sur [0 ; 18]. Que représente N'(t) ? 2. Calculer N''(t) et étudier la convexité de N. 3. Déterminer le point d'inflexion et l'interpréter : à quelle date le nombre de nouveaux malades par jour est-il maximal, et quelle est sa valeur ? 4. Combien de personnes ont été malades au total au bout de 18 jours ?",
              hint: "N'(t) = 3t(18 - t). La vitesse de propagation N' est maximale là où sa propre dérivée N'' change de signe.",
              solution: [
                "1. N'(t) = -3t² + 54t = 3t(18 - t). Sur [0 ; 18], t ≥ 0 et 18 - t ≥ 0, donc N'(t) ≥ 0 : N est croissante. N'(t) est la vitesse de propagation, c'est-à-dire approximativement le nombre de nouveaux malades par jour à la date t.",
                "2. N''(t) = -6t + 54. N''(t) ≥ 0 équivaut à t ≤ 9. N est convexe sur [0 ; 9] et concave sur [9 ; 18].",
                "3. N'' s'annule en 9 en changeant de signe : le point d'abscisse 9 est un point d'inflexion, d'ordonnée N(9) = -729 + 2 187 + 10 = 1 468.",
                "Avant le 9e jour, l'épidémie accélère (N' croît) ; après, elle ralentit (N' décroît). Le nombre de nouveaux malades par jour est maximal au 9e jour et vaut N'(9) = 3 × 9 × 9 = 243 malades par jour.",
                "4. N(18) = -5 832 + 8 748 + 10 = 2 926 personnes au total au bout de 18 jours. On remarque que N'(18) = 0 : dans ce modèle, l'épidémie s'arrête alors.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Convexité, concavité et points d'inflexion.",
            statements: [
              { text: "La fonction exponentielle est convexe sur ℝ.", true: true, why: "Sa dérivée seconde est eˣ, strictement positive sur ℝ." },
              { text: "Si f''(a) = 0, la courbe a un point d'inflexion d'abscisse a.", true: false, why: "Il faut que f'' change de signe : pour x ↦ x⁴, f''(0) = 0 mais il n'y a pas d'inflexion." },
              { text: "Une fonction convexe est forcément croissante.", true: false, why: "x ↦ x² est convexe sur ℝ mais décroissante sur ]-∞ ; 0]." },
              { text: "Si f est concave sur I, sa courbe est au-dessous de ses tangentes sur I.", true: true, why: "C'est la caractérisation : au-dessus de ses cordes, au-dessous de ses tangentes." },
              { text: "La fonction racine carrée est convexe sur [0 ; +∞[.", true: false, why: "Elle est concave : sa dérivée 1/(2√x) est décroissante, sa croissance ralentit." },
              { text: "En un point d'inflexion, la courbe traverse sa tangente.", true: true, why: "La convexité change en ce point, donc la courbe passe d'un côté de la tangente à l'autre." },
              { text: "Pour tout réel x, eˣ ≥ x + 1.", true: true, why: "La courbe de l'exponentielle, convexe, est au-dessus de sa tangente en 0, d'équation y = x + 1." },
            ],
          },
          quiz: [
            {
              q: "f''(x) = x - 3. Sur quel intervalle f est-elle convexe ?",
              options: ["]-∞ ; 3]", "[3 ; +∞[", "[0 ; 3]", "ℝ"],
              answer: 1,
              why: "f est convexe là où f''(x) ≥ 0, c'est-à-dire pour x ≥ 3.",
            },
            {
              q: "Si f' est décroissante sur I, alors f est :",
              options: ["convexe sur I", "décroissante sur I", "concave sur I", "constante sur I"],
              answer: 2,
              why: "f' décroissante équivaut à f concave. Le sens de variation de f, lui, dépend du signe de f', pas de ses variations.",
            },
            {
              q: "Quelle fonction admet un point d'inflexion à l'origine ?",
              options: ["x ↦ x²", "x ↦ x⁴", "x ↦ eˣ", "x ↦ x³"],
              answer: 3,
              why: "Pour x³, f''(x) = 6x change de signe en 0. Pour x⁴, f'' s'annule sans changer de signe ; x² et eˣ sont convexes partout.",
            },
            {
              q: "Le chiffre d'affaires d'une entreprise augmente, mais de moins en moins vite. La fonction qui le modélise est :",
              options: ["croissante et concave", "croissante et convexe", "décroissante et concave", "décroissante et convexe"],
              answer: 0,
              why: "Elle augmente, donc elle est croissante ; sa vitesse de croissance diminue, donc f' est décroissante et f est concave.",
            },
            {
              q: "La courbe de f est au-dessus de toutes ses tangentes sur ℝ. Quel est le signe de f'' ?",
              options: ["f'' ≤ 0", "f'' ≥ 0", "f'' = 0", "On ne peut rien dire"],
              answer: 1,
              why: "Une courbe au-dessus de ses tangentes caractérise une fonction convexe, donc f'' ≥ 0.",
            },
          ],
          trap: "Confondre le sens de variation et la convexité (une fonction convexe peut être décroissante), ou affirmer qu'il y a un point d'inflexion dès que f''(a) = 0, sans vérifier le changement de signe.",
          method: "Pour la convexité, raisonnez toujours sur trois étages : f, puis f' (pente des tangentes), puis f'' (variation des pentes). Écrivez le signe de f'' dans un tableau, puis traduisez chaque signe : + donne convexe, - donne concave.",
        },
      ],
    },

    /* ================================================================== */
    /* EXPONENTIELLE ET LOGARITHME                                          */
    /* ================================================================== */
    {
      id: 'exponentielle-logarithme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fonction-exponentielle',
          title: 'La fonction exponentielle',
          minutes: 30,
          objectives: [
            "Utiliser les propriétés algébriques de la fonction exponentielle pour transformer une expression.",
            "Résoudre des équations et des inéquations faisant intervenir la fonction exponentielle.",
            "Déterminer les limites de la fonction exponentielle en -∞ et en +∞ et utiliser la croissance comparée de eˣ et de x.",
            "Dériver et étudier des fonctions de la forme x ↦ e^(u(x)), en particulier t ↦ e^(kt).",
          ],
          course: [
            {
              heading: "Définition et premières propriétés",
              paragraphs: [
                "Vous avez rencontré en Première la fonction exponentielle : c'est l'unique fonction f dérivable sur ℝ telle que f' = f et f(0) = 1. On la note exp, et l'on écrit exp(x) = eˣ, où e = exp(1) ≈ 2,718. Elle modélise toute grandeur dont la vitesse de variation est proportionnelle à la grandeur elle-même : plus il y a de bactéries, plus il en naît.",
                "Pour tout réel x, eˣ > 0 : l'exponentielle est strictement positive. Comme sa dérivée est elle-même, donc positive, elle est strictement croissante sur ℝ. Elle est aussi convexe, puisque sa dérivée seconde est encore eˣ > 0. Valeurs à retenir : e⁰ = 1 et e¹ = e.",
              ],
              box: { label: "Définition", text: "La fonction exponentielle est l'unique fonction dérivable sur ℝ telle que exp' = exp et exp(0) = 1. On note exp(x) = eˣ. Pour tout réel x, eˣ > 0 ; exp est strictement croissante et convexe sur ℝ." },
            },
            {
              heading: "Propriétés algébriques, équations et inéquations",
              paragraphs: [
                "L'exponentielle transforme les sommes en produits : pour tous réels a et b, e^(a + b) = eᵃ × eᵇ. On en déduit e^(-a) = 1/eᵃ, e^(a - b) = eᵃ/eᵇ et, pour tout entier n, (eᵃ)ⁿ = e^(na). Ces règles sont celles des puissances : par exemple e³ × e^(-1)/e² = e^(3 - 1 - 2) = e⁰ = 1.",
                "Comme exp est strictement croissante, elle conserve les égalités et l'ordre : eᵃ = eᵇ équivaut à a = b, et eᵃ < eᵇ équivaut à a < b. Pour résoudre e^(2x + 1) = e⁵, on écrit 2x + 1 = 5, d'où x = 2. Pour résoudre e^(1 - x) ≥ 1, on écrit 1 = e⁰, d'où 1 - x ≥ 0, soit x ≤ 1. L'équation eˣ = -3 n'a pas de solution, car une exponentielle est toujours strictement positive.",
                "Lien avec les suites : pour tout entier n, e^(na) = (eᵃ)ⁿ. La suite (e^(na)) est donc géométrique de raison eᵃ. L'exponentielle prolonge aux temps continus les évolutions à taux constant étudiées avec les suites géométriques.",
              ],
              box: { label: "Formule", text: "e^(a + b) = eᵃeᵇ ; e^(-a) = 1/eᵃ ; e^(a - b) = eᵃ/eᵇ ; (eᵃ)ⁿ = e^(na). eᵃ = eᵇ ⇔ a = b ; eᵃ < eᵇ ⇔ a < b." },
            },
            {
              heading: "Limites et croissance comparée",
              paragraphs: [
                "Lorsque x tend vers +∞, eˣ tend vers +∞ ; lorsque x tend vers -∞, eˣ tend vers 0. La droite d'équation y = 0, l'axe des abscisses, est donc asymptote à la courbe en -∞ : la courbe s'en rapproche sans jamais la toucher.",
                "L'exponentielle l'emporte sur toute puissance de x : on admet que eˣ/x tend vers +∞ quand x tend vers +∞, et plus généralement eˣ/xⁿ pour tout entier n. De même, xeˣ tend vers 0 quand x tend vers -∞. Ces résultats de croissance comparée permettent de lever des formes indéterminées : x/eˣ tend vers 0 en +∞, donc (x + 1)e^(-x) = x/eˣ + e^(-x) tend vers 0.",
              ],
              box: { label: "Propriété", text: "lim eˣ = +∞ en +∞ ; lim eˣ = 0 en -∞. Croissance comparée : eˣ/x tend vers +∞ en +∞ ; xeˣ tend vers 0 en -∞." },
            },
            {
              heading: "Les fonctions x ↦ e^(u(x)) et t ↦ e^(kt)",
              paragraphs: [
                "Si u est dérivable sur un intervalle I, la fonction x ↦ e^(u(x)) est dérivable sur I et sa dérivée est x ↦ u'(x)e^(u(x)). Comme e^(u(x)) > 0, cette dérivée est du signe de u'(x) : e^(u) a les mêmes variations que u. En particulier, la dérivée de t ↦ e^(kt) est t ↦ ke^(kt).",
                "Pour k > 0, t ↦ e^(kt) est croissante et tend vers +∞ en +∞ : c'est le modèle d'une croissance exponentielle (bactéries en milieu favorable, capital placé à intérêts composés). Pour k < 0, t ↦ e^(kt) est décroissante et tend vers 0 en +∞ : c'est le modèle d'une décroissance exponentielle (désintégration radioactive, élimination d'un médicament, refroidissement d'un objet chaud vers la température ambiante).",
              ],
              box: { label: "À retenir", text: "(e^(u))' = u'e^(u), du signe de u'. (e^(kt))' = ke^(kt). Si k > 0, e^(kt) croît vers +∞ ; si k < 0, e^(kt) décroît vers 0." },
            },
          ],
          keyPoints: [
            "exp' = exp, exp(0) = 1, e ≈ 2,718 ; eˣ > 0 pour tout réel x.",
            "e^(a + b) = eᵃeᵇ ; e^(-a) = 1/eᵃ ; (eᵃ)ⁿ = e^(na).",
            "eᵃ = eᵇ ⇔ a = b ; eᵃ < eᵇ ⇔ a < b (exp est strictement croissante).",
            "Limites : 0 en -∞, +∞ en +∞ ; eˣ/x tend vers +∞ en +∞ et xeˣ vers 0 en -∞.",
            "(e^(u))' = u'e^(u) ; (e^(kt))' = ke^(kt).",
            "k > 0 : croissance exponentielle ; k < 0 : décroissance exponentielle vers 0.",
          ],
          example: {
            statement: "Soit f la fonction définie sur ℝ par f(x) = (x + 1)e^(-x). 1. Déterminer la limite de f en +∞. 2. Calculer f'(x) et étudier les variations de f. 3. Donner le maximum de f.",
            solution: [
              "1. En +∞, x + 1 tend vers +∞ et e^(-x) vers 0 : c'est une forme indéterminée « ∞ × 0 ».",
              "On écrit f(x) = x/eˣ + 1/eˣ. Par croissance comparée, eˣ/x tend vers +∞, donc x/eˣ tend vers 0 ; et 1/eˣ tend vers 0. Donc f tend vers 0 en +∞.",
              "2. f = uv avec u(x) = x + 1, u'(x) = 1, v(x) = e^(-x) et v'(x) = -e^(-x). f'(x) = e^(-x) - (x + 1)e^(-x) = -xe^(-x).",
              "Comme e^(-x) > 0, f'(x) est du signe de -x : positif sur ]-∞ ; 0[, négatif sur ]0 ; +∞[. f est croissante sur ]-∞ ; 0] et décroissante sur [0 ; +∞[.",
              "3. f admet donc un maximum en 0 : f(0) = (0 + 1)e⁰ = 1.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Simplifier A = e³ × e^(-1)/e² et B = (e^(2x))³ × e^(-x). 2. Résoudre dans ℝ : a) e^(2x + 1) = e⁵ ; b) e^(x²) = e^(4x - 3) ; c) e^(1 - x) ≥ 1.",
              hint: "Utilisez les règles des puissances. Pour les équations, utilisez eᵃ = eᵇ ⇔ a = b ; pour l'inéquation, écrivez 1 = e⁰.",
              solution: [
                "1. A = e^(3 - 1 - 2) = e⁰ = 1. B = e^(6x) × e^(-x) = e^(5x).",
                "2. a) 2x + 1 = 5, donc x = 2. S = {2}.",
                "b) x² = 4x - 3 équivaut à x² - 4x + 3 = 0, soit (x - 1)(x - 3) = 0. S = {1 ; 3}.",
                "c) e^(1 - x) ≥ e⁰ équivaut à 1 - x ≥ 0, soit x ≤ 1. S = ]-∞ ; 1].",
              ],
            },
            {
              level: 2,
              statement: "1. Soit f la fonction définie sur ℝ par f(x) = 3 - 2e^(-x). Déterminer ses limites en -∞ et en +∞, puis ses variations. 2. Soit g la fonction définie sur ℝ par g(x) = eˣ - x - 1. Étudier les variations de g et en déduire que, pour tout réel x, eˣ ≥ x + 1.",
              hint: "Quand x tend vers +∞, -x tend vers -∞ et e^(-x) vers 0. Pour g, étudiez le signe de eˣ - 1 en comparant eˣ à e⁰.",
              solution: [
                "1. En +∞ : -x tend vers -∞, donc e^(-x) tend vers 0 et f(x) tend vers 3. En -∞ : -x tend vers +∞, donc e^(-x) tend vers +∞ et f(x) tend vers -∞.",
                "f'(x) = -2 × (-e^(-x)) = 2e^(-x) > 0 : f est strictement croissante sur ℝ. La droite d'équation y = 3 est asymptote à la courbe en +∞.",
                "2. g'(x) = eˣ - 1. Or eˣ - 1 ≥ 0 équivaut à eˣ ≥ e⁰, soit x ≥ 0. g est décroissante sur ]-∞ ; 0] et croissante sur [0 ; +∞[.",
                "g admet un minimum en 0 : g(0) = 1 - 0 - 1 = 0. Donc g(x) ≥ 0 pour tout réel x, c'est-à-dire eˣ ≥ x + 1.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). On sert un café à 90 °C dans une pièce à 20 °C. On modélise sa température, en °C, après t minutes par T(t) = 20 + 70e^(-0,1t), pour t ≥ 0 (loi de refroidissement de Newton, coefficient fictif). 1. Vérifier que T(0) = 90 et calculer T(10), arrondi au dixième. 2. Calculer T'(t) et en déduire le sens de variation de T. Que vaut T'(0) et que représente ce nombre ? 3. Déterminer la limite de T en +∞ et l'interpréter. 4. On boit le café confortablement en dessous de 50 °C. À l'aide de la calculatrice, déterminer le temps d'attente nécessaire, à la minute près par excès.",
              hint: "La dérivée de t ↦ e^(-0,1t) est t ↦ -0,1e^(-0,1t). Pour la question 4, calculez T(8) et T(9).",
              solution: [
                "1. T(0) = 20 + 70e⁰ = 20 + 70 = 90 °C. T(10) = 20 + 70e^(-1) ≈ 20 + 70 × 0,3679 ≈ 45,8 °C.",
                "2. T'(t) = 70 × (-0,1)e^(-0,1t) = -7e^(-0,1t). Comme e^(-0,1t) > 0, T'(t) < 0 : la température est strictement décroissante.",
                "T'(0) = -7 : au moment où on le sert, le café perd environ 7 °C par minute. Comme 7e^(-0,1t) diminue avec t, le refroidissement ralentit ensuite.",
                "3. Quand t tend vers +∞, -0,1t tend vers -∞, donc e^(-0,1t) tend vers 0 et T(t) tend vers 20. À long terme, le café prend la température de la pièce.",
                "4. T(8) = 20 + 70e^(-0,8) ≈ 51,5 °C et T(9) = 20 + 70e^(-0,9) ≈ 48,5 °C. Comme T est décroissante, il faut attendre 9 minutes (la valeur exacte, que l'on calculera avec le logarithme, est 10 ln(7/3) ≈ 8,5 minutes).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression à sa forme simplifiée.",
            pairs: [
              { left: "e² × e³", right: "e⁵" },
              { left: "e⁵/e²", right: "e³" },
              { left: "(e²)³", right: "e⁶" },
              { left: "1/e^(-4)", right: "e⁴" },
              { left: "e⁰", right: "1" },
              { left: "e^(x + 1)/eˣ", right: "e" },
            ],
          },
          quiz: [
            {
              q: "Que vaut e^(2x) × e^(-x) ?",
              options: ["e^(-2x²)", "eˣ", "e^(3x)", "e^(-2x)"],
              answer: 1,
              why: "e^(a) × e^(b) = e^(a + b), donc e^(2x - x) = eˣ.",
            },
            {
              q: "Combien de solutions l'équation eˣ = -1 admet-elle ?",
              options: ["Aucune", "Une seule, x = 0", "Une seule, x = -1", "Deux"],
              answer: 0,
              why: "Une exponentielle est toujours strictement positive : elle ne peut pas valoir -1.",
            },
            {
              q: "Quelle est la limite de e^(-3x) quand x tend vers +∞ ?",
              options: ["+∞", "-∞", "-3", "0"],
              answer: 3,
              why: "-3x tend vers -∞, et eᵘ tend vers 0 quand u tend vers -∞.",
            },
            {
              q: "Quelle est la dérivée de x ↦ e^(x² + 1) ?",
              options: ["e^(x² + 1)", "(x² + 1)e^(x²)", "2xe^(x² + 1)", "2e^(x² + 1)"],
              answer: 2,
              why: "(e^(u))' = u'e^(u) avec u(x) = x² + 1 et u'(x) = 2x.",
            },
            {
              q: "L'inéquation e^(3x - 6) < 1 a pour ensemble de solutions :",
              options: ["]2 ; +∞[", "]-∞ ; 2[", "]-∞ ; 6[", "∅"],
              answer: 1,
              why: "1 = e⁰ et exp est strictement croissante : 3x - 6 < 0, soit x < 2.",
            },
          ],
          trap: "Écrire e^(a + b) = eᵃ + eᵇ, ou oublier que eˣ est toujours strictement positif : l'équation eˣ = -1 n'a pas de solution, et eˣ ne s'annule jamais dans un tableau de signes.",
          method: "Devant une expression avec des exponentielles, ramenez tout à une seule exponentielle grâce aux règles des puissances, puis comparez les exposants. Pour le signe d'une dérivée, mettez l'exponentielle en facteur : elle est positive et ne change pas le signe.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'fonction-logarithme',
          title: 'La fonction logarithme népérien',
          minutes: 35,
          objectives: [
            "Définir le logarithme népérien comme fonction réciproque de la fonction exponentielle et utiliser les égalités e^(ln a) = a et ln(eˣ) = x.",
            "Utiliser les propriétés algébriques du logarithme (produit, quotient, puissance) pour transformer une expression.",
            "Résoudre des équations et des inéquations, en particulier du type qⁿ ≥ a pour déterminer un seuil.",
            "Étudier une fonction faisant intervenir ln (dérivée 1/x, limites, croissance comparée).",
          ],
          course: [
            {
              heading: "Définition : le logarithme défait l'exponentielle",
              paragraphs: [
                "La fonction exponentielle est strictement croissante et prend toutes les valeurs strictement positives. Pour tout réel a > 0, l'équation eˣ = a admet donc une unique solution : on l'appelle logarithme népérien de a et on la note ln(a), ou ln a. Ainsi, ln a est l'exposant qu'il faut donner à e pour obtenir a. Par exemple, ln 1 = 0 car e⁰ = 1, et ln e = 1.",
                "On définit ainsi la fonction ln sur ]0 ; +∞[ : c'est la fonction réciproque de l'exponentielle. Pour tout a > 0, e^(ln a) = a, et pour tout réel x, ln(eˣ) = x. Dans un repère orthonormé, les courbes de exp et de ln sont symétriques par rapport à la droite d'équation y = x. Attention : ln 0 et ln(-2) n'existent pas.",
                "Le nom rappelle John Napier (Neper en français), mathématicien écossais qui publia en 1614 les premières tables de logarithmes. Leur intérêt était de remplacer les multiplications, longues à effectuer à la main, par des additions, grâce à la propriété fondamentale du logarithme.",
              ],
              box: { label: "Définition", text: "Pour tout réel a > 0, ln a est l'unique réel x tel que eˣ = a. Pour tout a > 0, e^(ln a) = a ; pour tout réel x, ln(eˣ) = x. ln 1 = 0 et ln e = 1." },
            },
            {
              heading: "Propriétés algébriques",
              paragraphs: [
                "Le logarithme transforme les produits en sommes : pour tous réels a > 0 et b > 0, ln(ab) = ln a + ln b. On en déduit ln(1/a) = -ln a, ln(a/b) = ln a - ln b, ln(aⁿ) = n ln a pour tout entier n, et ln(√a) = ½ ln a. Exemple : ln 8 - ln 2 = ln 4 = ln(2²) = 2 ln 2.",
                "Ces formules ne valent que pour des nombres strictement positifs, et il n'existe aucune formule pour ln(a + b) : ln(2 + 3) = ln 5 ≈ 1,609, alors que ln 2 + ln 3 = ln 6 ≈ 1,792.",
              ],
              box: { label: "Formule", text: "Pour a > 0 et b > 0 : ln(ab) = ln a + ln b ; ln(a/b) = ln a - ln b ; ln(1/a) = -ln a ; ln(aⁿ) = n ln a ; ln(√a) = ½ ln a." },
            },
            {
              heading: "Équations, inéquations et seuils",
              paragraphs: [
                "La fonction ln est strictement croissante sur ]0 ; +∞[. Pour a > 0 et b > 0, ln a = ln b équivaut à a = b, et ln a < ln b équivaut à a < b. Pour résoudre eˣ = 7, on applique ln : x = ln 7 ≈ 1,946. Pour résoudre ln x = 2 (avec x > 0), on applique exp : x = e² ≈ 7,389.",
                "Application majeure : les seuils des suites géométriques. Un capital de 1 000 € placé à 5 % par an vaut 1 000 × 1,05ⁿ après n années. Il double lorsque 1,05ⁿ ≥ 2, soit n ln 1,05 ≥ ln 2. Comme ln 1,05 > 0, n ≥ ln 2/ln 1,05 ≈ 14,2 : il faut 15 ans. Si la raison q est comprise entre 0 et 1, ln q < 0 et l'on change le sens de l'inégalité en divisant par ln q.",
              ],
              box: { label: "Règle", text: "Pour résoudre qⁿ ≥ a (q > 0, a > 0) : on applique ln, n ln q ≥ ln a, puis on divise par ln q, en changeant le sens de l'inégalité si ln q < 0, c'est-à-dire si 0 < q < 1." },
            },
            {
              heading: "Étude de la fonction ln",
              paragraphs: [
                "La fonction ln est dérivable sur ]0 ; +∞[ et sa dérivée est x ↦ 1/x. Comme 1/x > 0 sur cet intervalle, ln est strictement croissante. Sa dérivée 1/x étant décroissante, ln est concave : sa croissance ralentit. Plus généralement, si u est dérivable et strictement positive sur I, (ln u)' = u'/u.",
                "Limites : ln x tend vers -∞ quand x tend vers 0 (par valeurs positives) et vers +∞ quand x tend vers +∞, mais très lentement : ln(1 000 000) ≈ 13,8. Signe : ln x < 0 sur ]0 ; 1[, ln 1 = 0 et ln x > 0 sur ]1 ; +∞[. Croissance comparée : ln x/x tend vers 0 en +∞, la fonction x ↦ x l'emporte sur le logarithme.",
              ],
              box: { label: "À retenir", text: "(ln x)' = 1/x et (ln u)' = u'/u. ln est strictement croissante et concave sur ]0 ; +∞[ ; ln x tend vers -∞ en 0 et vers +∞ en +∞ ; ln x/x tend vers 0 en +∞." },
            },
          ],
          keyPoints: [
            "Pour a > 0, ln a est l'unique réel x tel que eˣ = a ; ln est définie sur ]0 ; +∞[.",
            "e^(ln a) = a pour a > 0, ln(eˣ) = x ; ln 1 = 0, ln e = 1.",
            "ln(ab) = ln a + ln b ; ln(a/b) = ln a - ln b ; ln(aⁿ) = n ln a ; aucune formule pour ln(a + b).",
            "ln x < 0 sur ]0 ; 1[ et ln x > 0 sur ]1 ; +∞[.",
            "(ln x)' = 1/x ; (ln u)' = u'/u ; ln est croissante et concave.",
            "Seuil qⁿ ≥ a : n ln q ≥ ln a, et l'on change le sens en divisant si 0 < q < 1.",
            "Limites : -∞ en 0, +∞ en +∞ ; ln x/x tend vers 0 en +∞.",
          ],
          example: {
            statement: "Résoudre dans ℝ, en précisant d'abord les conditions d'existence : a) e^(2x - 1) = 5 ; b) ln(x - 1) = 3 ; c) ln(2x) ≤ ln(x + 3).",
            solution: [
              "a) Pas de condition. Les deux membres sont strictement positifs ; on applique ln : 2x - 1 = ln 5, donc x = (1 + ln 5)/2 ≈ 1,305.",
              "b) Condition : x - 1 > 0, soit x > 1. Alors ln(x - 1) = 3 équivaut à x - 1 = e³, soit x = 1 + e³ ≈ 21,09, qui vérifie bien x > 1. S = {1 + e³}.",
              "c) Conditions : 2x > 0 et x + 3 > 0, soit x > 0. Sur ]0 ; +∞[, comme ln est strictement croissante, l'inéquation équivaut à 2x ≤ x + 3, soit x ≤ 3.",
              "En tenant compte de la condition x > 0, S = ]0 ; 3].",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Écrire plus simplement : A = ln 8 - ln 2 ; B = ln(e³) + ln(1/e) ; C = e^(ln 5) ; D = ln(√e). 2. Résoudre : a) eˣ = 7 ; b) ln x = 2, avec x > 0. Donner les valeurs exactes, puis arrondies au millième.",
              hint: "Utilisez ln(a/b) = ln a - ln b et ln(eˣ) = x. Pour les équations, appliquez ln ou exp aux deux membres.",
              solution: [
                "A = ln(8/2) = ln 4 = 2 ln 2 ≈ 1,386.",
                "B = 3 + (-1) = 2, car ln(e³) = 3 et ln(1/e) = -ln e = -1.",
                "C = 5, car e^(ln a) = a pour a > 0. D = ln(e^(1/2)) = ½ = 0,5.",
                "2. a) eˣ = 7 équivaut à x = ln 7 ≈ 1,946. b) ln x = 2 équivaut à x = e² ≈ 7,389.",
              ],
            },
            {
              level: 2,
              statement: "Une usine rejette 500 kg d'un polluant par an. Grâce à un nouveau filtre, la quantité rejetée diminue de 15 % chaque année (données fictives). On note pₙ la quantité rejetée n années après l'installation du filtre, avec p₀ = 500. 1. Exprimer pₙ en fonction de n. 2. Déterminer par le calcul à partir de quelle année les rejets deviennent inférieurs à 50 kg. 3. Vérifier en calculant p₁₄ et p₁₅.",
              hint: "Ramenez-vous à 0,85ⁿ < 0,1, appliquez ln, puis attention : ln 0,85 est négatif.",
              solution: [
                "1. Diminuer de 15 % revient à multiplier par 0,85 : pₙ = 500 × 0,85ⁿ.",
                "2. pₙ < 50 équivaut à 0,85ⁿ < 0,1. La fonction ln étant strictement croissante, cela équivaut à n ln 0,85 < ln 0,1.",
                "Comme ln 0,85 < 0 (car 0,85 < 1), on divise en changeant le sens : n > ln 0,1/ln 0,85 ≈ 14,17.",
                "Le plus petit entier qui convient est n = 15 : c'est à partir de la 15e année après l'installation du filtre que les rejets passent sous 50 kg.",
                "3. p₁₄ = 500 × 0,85¹⁴ ≈ 51,4 kg > 50 et p₁₅ = 500 × 0,85¹⁵ ≈ 43,7 kg < 50. Le résultat est confirmé.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Soit f la fonction définie sur ]0 ; +∞[ par f(x) = x - 2 ln x. 1. Déterminer la limite de f en 0. 2. En écrivant f(x) = x(1 - 2 ln x/x), déterminer la limite de f en +∞. 3. Calculer f'(x), étudier son signe et dresser le tableau de variations de f. 4. En déduire que, pour tout x > 0, x > 2 ln x. 5. Étudier la convexité de f.",
              hint: "En 0, ln x tend vers -∞. En +∞, utilisez la croissance comparée : ln x/x tend vers 0. Pour le signe de f'(x), écrivez-la sous la forme d'un seul quotient.",
              solution: [
                "1. Quand x tend vers 0, ln x tend vers -∞, donc -2 ln x tend vers +∞ ; comme x tend vers 0, f(x) tend vers +∞.",
                "2. f(x) = x(1 - 2 ln x/x). Par croissance comparée, ln x/x tend vers 0, donc 1 - 2 ln x/x tend vers 1. Comme x tend vers +∞, par produit, f(x) tend vers +∞.",
                "3. f'(x) = 1 - 2/x = (x - 2)/x. Sur ]0 ; +∞[, x > 0, donc f'(x) est du signe de x - 2 : négatif sur ]0 ; 2[, positif sur ]2 ; +∞[.",
                "f est décroissante sur ]0 ; 2] et croissante sur [2 ; +∞[, avec un minimum f(2) = 2 - 2 ln 2 ≈ 0,61.",
                "4. Le minimum de f est 2 - 2 ln 2 = 2(1 - ln 2), strictement positif car ln 2 < ln e = 1. Donc f(x) > 0 pour tout x > 0, c'est-à-dire x > 2 ln x.",
                "5. f''(x) = 2/x², strictement positif sur ]0 ; +∞[ : f est convexe sur ]0 ; +∞[.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les pièges classiques du logarithme.",
            statements: [
              { text: "Pour a > 0 et b > 0, ln(a + b) = ln a + ln b.", true: false, why: "La formule exacte est ln(ab) = ln a + ln b. Par exemple ln 5 ≈ 1,609, alors que ln 2 + ln 3 = ln 6 ≈ 1,792." },
              { text: "ln(-1) n'existe pas.", true: true, why: "ln n'est définie que sur ]0 ; +∞[, car eˣ est toujours strictement positif." },
              { text: "ln 0,5 est négatif.", true: true, why: "0,5 < 1, donc ln 0,5 < ln 1 = 0 ; en fait ln 0,5 = -ln 2 ≈ -0,693." },
              { text: "ln(e⁴) = 4.", true: true, why: "Pour tout réel x, ln(eˣ) = x : ln défait l'exponentielle." },
              { text: "La fonction ln est convexe sur ]0 ; +∞[.", true: false, why: "Sa dérivée 1/x est décroissante : ln est concave, sa croissance ralentit." },
              { text: "ln(x²) = 2 ln x pour tout réel x non nul.", true: false, why: "Seulement pour x > 0 : pour x = -1, ln((-1)²) = ln 1 = 0, mais ln(-1) n'existe pas." },
              { text: "Pour diviser une inégalité par ln 0,9, il faut changer son sens.", true: true, why: "0,9 < 1, donc ln 0,9 < 0, et diviser par un nombre négatif change le sens de l'inégalité." },
            ],
          },
          quiz: [
            {
              q: "Que vaut ln(e⁵) - ln(e²) ?",
              options: ["3", "ln 3", "e³", "5/2"],
              answer: 0,
              why: "ln(e⁵) = 5 et ln(e²) = 2, donc la différence vaut 3.",
            },
            {
              q: "Quelle est la solution de l'équation eˣ = 10 ?",
              options: ["x = e¹⁰", "x = 10/e", "x = ln 10", "Aucune solution"],
              answer: 2,
              why: "Par définition du logarithme, eˣ = 10 équivaut à x = ln 10 ≈ 2,303.",
            },
            {
              q: "Sur quel ensemble la fonction x ↦ ln(x - 4) est-elle définie ?",
              options: ["]0 ; +∞[", "]-4 ; +∞[", "[4 ; +∞[", "]4 ; +∞["],
              answer: 3,
              why: "Il faut x - 4 > 0, soit x > 4 (inégalité stricte, car ln 0 n'existe pas).",
            },
            {
              q: "Quelle est la dérivée de x ↦ ln(x² + 1) ?",
              options: ["1/(x² + 1)", "2x/(x² + 1)", "2x ln(x² + 1)", "1/(2x)"],
              answer: 1,
              why: "(ln u)' = u'/u avec u(x) = x² + 1, strictement positif, et u'(x) = 2x.",
            },
            {
              q: "Pour n entier naturel, l'inéquation 0,9ⁿ < 0,5 équivaut à :",
              options: ["n < ln 0,5/ln 0,9", "n > ln 0,5/ln 0,9", "n > 0,5/0,9", "n < ln 0,4"],
              answer: 1,
              why: "n ln 0,9 < ln 0,5, puis on divise par ln 0,9 < 0 en changeant le sens : n > ln 0,5/ln 0,9 ≈ 6,6.",
            },
          ],
          trap: "Diviser par ln q sans changer le sens de l'inégalité alors que 0 < q < 1 (ln q est alors négatif), ou appliquer des formules qui n'existent pas, comme ln(a + b) = ln a + ln b.",
          method: "Avant toute équation avec ln, écrivez les conditions d'existence (ce qui est sous le ln doit être strictement positif), résolvez, puis vérifiez que les solutions trouvées les respectent. Pour un seuil, contrôlez à la calculatrice les deux rangs qui encadrent la réponse.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'croissances-modeles',
          title: 'Croissances exponentielles et modèles',
          minutes: 35,
          objectives: [
            "Modéliser une évolution continue par une fonction t ↦ Ce^(kt) et faire le lien avec une suite géométrique.",
            "Calculer un temps de doublement ou une demi-vie à l'aide du logarithme.",
            "Comparer des croissances linéaire, exponentielle et logarithmique (croissances comparées).",
            "Discuter la pertinence et les limites d'un modèle exponentiel, notamment face à un modèle logistique.",
          ],
          course: [
            {
              heading: "Le modèle exponentiel : f(t) = Ce^(kt)",
              paragraphs: [
                "Une grandeur dont la vitesse de variation est proportionnelle à sa valeur, f'(t) = kf(t), est de la forme f(t) = Ce^(kt), où C = f(0) est la valeur initiale. Si k > 0, on parle de croissance exponentielle (population de bactéries en milieu favorable, capital à intérêts composés) ; si k < 0, de décroissance exponentielle (noyaux radioactifs, concentration d'un médicament dans le sang).",
                "Lien avec les suites : aux instants entiers, f(n) = Ce^(kn) = C × (eᵏ)ⁿ. Ces valeurs forment donc une suite géométrique de raison q = eᵏ : sur chaque unité de temps, la grandeur évolue du même taux eᵏ - 1. Inversement, une évolution de +2,5 % par an correspond à eᵏ = 1,025, soit k = ln 1,025 ≈ 0,0247. Et pour f(t) = 100e^(-0,2t), la quantité diminue de 1 - e^(-0,2) ≈ 18,1 % par unité de temps.",
              ],
              box: { label: "Propriété", text: "f(t) = Ce^(kt) avec C = f(0). Aux instants entiers, (f(n)) est géométrique de raison q = eᵏ, et k = ln q. Taux d'évolution par unité de temps : eᵏ - 1." },
            },
            {
              heading: "Temps de doublement et demi-vie",
              paragraphs: [
                "Pour une croissance exponentielle f(t) = Ce^(kt) avec k > 0, le temps de doublement T est la durée au bout de laquelle la grandeur double : e^(kT) = 2, soit T = ln 2/k. Il ne dépend pas de la valeur de départ : la grandeur double toutes les T unités de temps, quel que soit le moment où l'on commence à mesurer.",
                "Pour une décroissance N(t) = N₀e^(-λt) (avec λ > 0), la demi-vie t½ est la durée au bout de laquelle la moitié de la quantité a disparu : t½ = ln 2/λ. Le carbone 14 a une demi-vie d'environ 5 730 ans : c'est le principe de la datation au carbone 14 des restes organiques. Après une demi-vie, il reste 50 % du carbone 14 ; après deux demi-vies, 25 % ; après trois, 12,5 %.",
                "Ordre de grandeur pratique, la « règle de 70 » : avec un taux de croissance de t % par période, le temps de doublement vaut environ 70/t périodes, car ln 2 ≈ 0,69. Un placement à 2 % par an double en 35 ans environ ; la valeur exacte est ln 2/ln 1,02 ≈ 35,0 ans.",
              ],
              box: { label: "Formule", text: "Temps de doublement : T = ln 2/k pour f(t) = Ce^(kt), k > 0. Demi-vie : t½ = ln 2/λ pour N(t) = N₀e^(-λt), λ > 0. Règle de 70 : doublement en environ 70/t périodes pour une croissance de t % par période." },
            },
            {
              heading: "Croissances comparées : qui l'emporte ?",
              paragraphs: [
                "Une croissance linéaire ajoute la même quantité à chaque période ; une croissance exponentielle multiplie par le même facteur. Même lente au départ, une croissance exponentielle finit toujours par dépasser n'importe quelle croissance linéaire ou polynomiale : c'est le sens des résultats eˣ/x → +∞ et, plus généralement, eˣ/xⁿ → +∞ en +∞. À l'opposé, la croissance logarithmique est plus lente que celle de x : ln x/x → 0.",
                "L'économiste Thomas Malthus, dans son Essai sur le principe de population (1798), opposait ainsi une population qui croîtrait selon une progression géométrique à des subsistances qui ne croîtraient que selon une progression arithmétique, et il en déduisait des crises inévitables. Ses prévisions ne se sont pas réalisées, notamment grâce aux progrès de l'agriculture, mais son raisonnement illustre bien la comparaison des deux types de croissance.",
              ],
              box: { label: "À retenir", text: "En +∞, du plus lent au plus rapide : ln x, puis les puissances de x (√x, x, x², x³...), puis eˣ. Croissance comparée : eˣ/x → +∞ et ln x/x → 0. Une croissance exponentielle finit toujours par dépasser une croissance linéaire." },
            },
            {
              heading: "Les limites du modèle exponentiel : le modèle logistique",
              paragraphs: [
                "Aucune croissance exponentielle ne peut durer indéfiniment dans un milieu limité : une colonie de bactéries finit par manquer de nourriture et d'espace. En 1838, le mathématicien belge Pierre-François Verhulst a proposé un modèle plus réaliste, le modèle logistique, de la forme P(t) = M/(1 + ae^(-kt)) avec M, a et k strictement positifs. Au début, P(t) ressemble à une exponentielle ; ensuite la croissance ralentit et P(t) tend vers M, la capacité maximale du milieu.",
                "La courbe logistique a une forme de S : convexe au début (la croissance accélère), concave ensuite (elle ralentit), avec un point d'inflexion à mi-parcours, lorsque P(t) = M/2. Pour choisir un modèle, on compare ses prévisions aux données : si les points (t ; ln y) sont à peu près alignés, un modèle exponentiel convient, car ln(Ce^(kt)) = ln C + kt est une fonction affine de t.",
              ],
              box: { label: "Repère", text: "Modèle logistique (Verhulst, 1838) : P(t) = M/(1 + ae^(-kt)). Croissance d'abord quasi exponentielle, puis ralentissement et stabilisation vers M ; point d'inflexion lorsque P = M/2." },
            },
          ],
          keyPoints: [
            "Modèle exponentiel : f(t) = Ce^(kt), C valeur initiale ; k > 0 croissance, k < 0 décroissance.",
            "Aux instants entiers, suite géométrique de raison q = eᵏ ; inversement, k = ln q.",
            "Temps de doublement T = ln 2/k ; demi-vie t½ = ln 2/λ ; carbone 14 : environ 5 730 ans.",
            "Règle de 70 : à t % par période, doublement en environ 70/t périodes.",
            "En +∞, l'exponentielle l'emporte sur toute puissance de x, et x l'emporte sur ln x.",
            "Modèle logistique M/(1 + ae^(-kt)) : croissance qui se stabilise vers M, inflexion en M/2.",
          ],
          example: {
            statement: "Le carbone 14 a une demi-vie d'environ 5 730 ans. La proportion de carbone 14 restant dans un organisme mort depuis t années est modélisée par p(t) = e^(-λt). 1. Déterminer λ. 2. Un fragment d'os ne contient plus que 30 % de son carbone 14 initial (données fictives). Estimer son âge.",
            solution: [
              "1. Après une demi-vie, p(5 730) = 0,5, soit e^(-5 730λ) = 0,5.",
              "On applique ln : -5 730λ = ln 0,5 = -ln 2, donc λ = ln 2/5 730 ≈ 1,21 × 10⁻⁴ par an.",
              "2. On cherche t tel que e^(-λt) = 0,3, soit -λt = ln 0,3.",
              "t = -ln 0,3/λ = -ln 0,3 × 5 730/ln 2 ≈ 1,204 × 5 730/0,693 ≈ 9 950 ans.",
              "Le fragment d'os a environ 10 000 ans. L'estimation reste approximative : la demi-vie elle-même n'est connue qu'à quelques dizaines d'années près.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une culture de bactéries compte N(t) = 200e^(0,4t) bactéries après t heures (données fictives). 1. Combien y a-t-il de bactéries au départ ? Après 3 heures (à l'unité près) ? 2. Calculer le temps de doublement de la population, en heures et minutes. 3. Par combien la population est-elle multipliée chaque heure ?",
              hint: "Le temps de doublement T vérifie e^(0,4T) = 2. Le coefficient multiplicateur horaire est e^(0,4).",
              solution: [
                "1. N(0) = 200e⁰ = 200 bactéries. N(3) = 200e^(1,2) ≈ 200 × 3,3201 ≈ 664 bactéries.",
                "2. e^(0,4T) = 2 équivaut à 0,4T = ln 2, soit T = ln 2/0,4 ≈ 1,733 h.",
                "0,733 h × 60 ≈ 44 min : la population double environ toutes les 1 h 44 min.",
                "3. Chaque heure, la population est multipliée par e^(0,4) ≈ 1,492, soit une hausse d'environ 49,2 % par heure.",
              ],
            },
            {
              level: 2,
              statement: "La population d'un pays augmente de 2,5 % par an (données fictives). 1. Montrer qu'on peut modéliser cette population par P(t) = P₀e^(kt) avec k = ln 1,025, et donner une valeur approchée de k. 2. Calculer le temps de doublement exact, puis l'estimation donnée par la règle de 70. 3. Au bout de combien de temps la population est-elle multipliée par 10 ?",
              hint: "Aux instants entiers, P(n) = P₀ × (eᵏ)ⁿ doit être égal à P₀ × 1,025ⁿ. Pour la question 3, résolvez e^(kt) = 10.",
              solution: [
                "1. Une hausse de 2,5 % par an correspond à une suite géométrique de raison 1,025. Pour que P(n) = P₀ × (eᵏ)ⁿ coïncide avec P₀ × 1,025ⁿ, il faut eᵏ = 1,025, soit k = ln 1,025 ≈ 0,0247.",
                "2. Temps de doublement : T = ln 2/k = ln 2/ln 1,025 ≈ 28,1 ans. La règle de 70 donne 70/2,5 = 28 ans : l'estimation est excellente.",
                "3. e^(kt) = 10 équivaut à kt = ln 10, soit t = ln 10/ln 1,025 ≈ 93,2 ans.",
                "Contrôle : multiplier par 10, c'est doubler environ 3,3 fois (2³ = 8 et 2⁴ = 16), et 3,32 × 28,1 ≈ 93, ce qui est cohérent.",
              ],
            },
            {
              level: 3,
              statement: "Défi (type problème de bac). Dans un lac de 5 000 m², une espèce d'algues envahissante occupe 50 m² au début de l'observation. On compare deux modèles de la surface occupée, en m², après t semaines (modèles et données fictifs) : modèle A, f(t) = 50e^(0,2t) ; modèle B, g(t) = 1 000/(1 + 19e^(-0,2t)). 1. Vérifier que f(0) = g(0) = 50. 2. Calculer f(10), g(10), f(30) et g(30), arrondis à l'unité. 3. Déterminer les limites de f et de g en +∞. Lequel des deux modèles est réaliste à long terme ? 4. Montrer que g'(t) = 3 800e^(-0,2t)/(1 + 19e^(-0,2t))² et en déduire que g est croissante. 5. Déterminer par le calcul l'instant où g(t) = 500, arrondi au dixième de semaine. Que représente cet instant pour la courbe de g ?",
              hint: "Pour g', écrivez g = 1 000 × 1/v avec v(t) = 1 + 19e^(-0,2t) et utilisez (1/v)' = -v'/v². Pour la question 5, isolez e^(-0,2t) avant d'appliquer ln.",
              solution: [
                "1. f(0) = 50e⁰ = 50 et g(0) = 1 000/(1 + 19) = 1 000/20 = 50.",
                "2. f(10) = 50e² ≈ 369 ; g(10) = 1 000/(1 + 19e^(-2)) ≈ 280 ; f(30) = 50e⁶ ≈ 20 171 ; g(30) = 1 000/(1 + 19e^(-6)) ≈ 955.",
                "3. En +∞, e^(0,2t) tend vers +∞, donc f(t) tend vers +∞. Et e^(-0,2t) tend vers 0, donc g(t) tend vers 1 000/1 = 1 000.",
                "Le modèle A prévoit plus de 20 000 m² au bout de 30 semaines, davantage que la surface du lac : il n'est pas réaliste à long terme. Le modèle B prévoit une stabilisation vers 1 000 m², compatible avec un milieu limité.",
                "4. g = 1 000/v avec v(t) = 1 + 19e^(-0,2t) et v'(t) = 19 × (-0,2)e^(-0,2t) = -3,8e^(-0,2t). Donc g'(t) = -1 000v'(t)/v(t)² = 3 800e^(-0,2t)/(1 + 19e^(-0,2t))².",
                "Le numérateur et le dénominateur sont strictement positifs, donc g'(t) > 0 : g est strictement croissante.",
                "5. g(t) = 500 équivaut à 1 + 19e^(-0,2t) = 2, soit e^(-0,2t) = 1/19, soit -0,2t = -ln 19, d'où t = 5 ln 19 ≈ 14,7 semaines.",
                "À cet instant, la surface atteint la moitié de sa valeur limite : c'est le point d'inflexion de la courbe logistique, où la surface envahie augmente le plus vite.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces fonctions de celle qui croît le moins vite à celle qui croît le plus vite quand x tend vers +∞.",
            items: [
              "x ↦ ln x",
              "x ↦ √x",
              "x ↦ x",
              "x ↦ x²",
              "x ↦ x¹⁰",
              "x ↦ eˣ",
            ],
          },
          quiz: [
            {
              q: "Une grandeur suit f(t) = 50e^(0,1t). Quel est son temps de doublement ?",
              options: ["ln 2/0,1 ≈ 6,9", "2/0,1 = 20", "50/2 = 25", "0,1 × ln 2 ≈ 0,07"],
              answer: 0,
              why: "e^(0,1T) = 2 donne 0,1T = ln 2, soit T = ln 2/0,1 ≈ 6,9. La valeur initiale 50 n'intervient pas.",
            },
            {
              q: "Une substance a une demi-vie de 10 ans. Quelle proportion en reste-t-il après 30 ans ?",
              options: ["1/3", "1/8", "1/6", "0"],
              answer: 1,
              why: "30 ans font trois demi-vies : il reste ½ × ½ × ½ = 1/8 de la quantité initiale.",
            },
            {
              q: "f(t) = Ce^(kt) augmente de 4 % par unité de temps. Que vaut k ?",
              options: ["0,04", "e^(0,04)", "1,04", "ln 1,04"],
              answer: 3,
              why: "Le coefficient multiplicateur par unité de temps est eᵏ = 1,04, donc k = ln 1,04 ≈ 0,0392, proche de 0,04 sans lui être égal.",
            },
            {
              q: "Quelle limite traduit le fait que l'exponentielle l'emporte sur x en +∞ ?",
              options: ["eˣ/x tend vers 0", "x/eˣ tend vers +∞", "eˣ/x tend vers +∞", "eˣ - x tend vers 0"],
              answer: 2,
              why: "eˣ/x tend vers +∞ en +∞ : le numérateur devient infiniment plus grand que le dénominateur.",
            },
            {
              q: "Dans le modèle logistique P(t) = M/(1 + ae^(-kt)), avec a, k et M positifs, vers quoi tend P(t) en +∞ ?",
              options: ["M", "+∞", "M/2", "0"],
              answer: 0,
              why: "e^(-kt) tend vers 0, donc le dénominateur tend vers 1 et P(t) tend vers M, la capacité maximale du milieu.",
            },
          ],
          trap: "Confondre le taux d'évolution par unité de temps et le coefficient k (une hausse de 4 % donne k = ln 1,04 ≈ 0,039, et non 0,04 ni 1,04), ou prolonger un modèle exponentiel bien au-delà de la période observée.",
          method: "Pour un temps de doublement ou une demi-vie, posez toujours l'équation e^(kT) = 2 (ou e^(-λt) = ½), appliquez ln, puis vérifiez l'ordre de grandeur avec la règle de 70. Terminez par une phrase qui discute la validité du modèle.",
        },
      ],
    },
  ],
}
