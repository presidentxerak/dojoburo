import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-2nde',
  chapters: [
    /* ================================================================== */
    /* FORCES ET PRINCIPE D'INERTIE                                         */
    /* ================================================================== */
    {
      id: 'forces-inertie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'actions-forces',
          title: "Actions mécaniques, forces et principe des actions réciproques",
          minutes: 30,
          objectives: [
            "Distinguer actions à distance et actions de contact, et établir un diagramme objet-interaction.",
            "Modéliser l'action d'un système extérieur sur le système étudié par une force.",
            "Représenter une force par un vecteur ayant une norme, une direction et un sens.",
            "Exploiter le principe des actions réciproques.",
          ],
          course: [
            {
              heading: "Système, actions mécaniques et diagramme objet-interaction",
              paragraphs: [
                "Pour étudier un mouvement ou un équilibre, on commence par choisir le système, c'est-à-dire l'objet (ou l'ensemble d'objets) que l'on étudie. Tout ce qui n'est pas le système constitue le milieu extérieur. Une action mécanique est la capacité d'un objet extérieur à mettre le système en mouvement, à modifier son mouvement ou à le déformer.",
                "On distingue deux catégories d'actions. Une action de contact n'existe que si les deux objets se touchent : la main qui pousse une porte, le sol qui soutient un meuble, un fil qui retient une lampe, l'air qui freine un cycliste. Une action à distance s'exerce sans contact : la Terre attire une pomme qui tombe, un aimant attire un clou en fer, une règle frottée attire de petits morceaux de papier.",
                "Le diagramme objet-interaction (DOI) recense toutes les interactions du système avec l'extérieur. On écrit le système au centre, entouré des objets avec lesquels il interagit, puis on relie chaque objet au système par un trait plein pour une interaction de contact et par un trait en pointillés pour une interaction à distance. Pour un ballon posé sur le sol, le système « ballon » est relié au sol (trait plein) et à la Terre (pointillés) ; l'action de l'air, très faible, est en général négligée.",
              ],
              box: { label: "Méthode", text: "Pour faire un DOI : 1) entourer le système ; 2) placer autour tous les objets qui le touchent (traits pleins) ; 3) ajouter les objets qui agissent à distance, la Terre presque toujours (pointillés). Chaque trait correspondra à une force." },
            },
            {
              heading: "Modéliser une action par une force",
              paragraphs: [
                "En physique, on modélise chaque action mécanique exercée sur le système par une force, notée par exemple F⃗A/B pour la force exercée par l'objet A sur le système B. Une force est représentée par un vecteur, qui précise quatre caractéristiques : le point d'application (là où l'action s'exerce, ou le centre du système quand on le modélise par un point), la direction (la droite d'action), le sens, et la valeur, appelée aussi norme.",
                "La valeur d'une force s'exprime en newtons (symbole N), du nom d'Isaac Newton. On la mesure avec un dynamomètre. Pour se faire une idée, une pomme de 100 g est attirée par la Terre avec une force d'environ 1 N. Sur un schéma, la longueur de la flèche est proportionnelle à la valeur de la force, selon une échelle choisie : avec l'échelle 1 cm pour 10 N, une force de 35 N est représentée par une flèche de 3,5 cm.",
                "Une action de contact répartie sur une surface (le sol sous une caisse) ou une action à distance répartie dans tout le volume (l'attraction de la Terre) est modélisée par une seule force, appliquée en un point. Lorsque le système est modélisé par un point matériel, toutes les forces sont dessinées à partir de ce point.",
              ],
              box: { label: "Définition", text: "Une force modélise une action mécanique. Elle est représentée par un vecteur défini par son point d'application, sa direction, son sens et sa valeur en newtons (N)." },
            },
            {
              heading: "Le principe des actions réciproques",
              paragraphs: [
                "Une action mécanique est toujours une interaction : si un objet A agit sur un objet B, alors B agit aussi sur A. Le principe des actions réciproques, aussi appelé troisième loi de Newton, précise que ces deux forces ont la même droite d'action, la même valeur et des sens opposés : F⃗A/B = -F⃗B/A. Ce principe est vrai que les objets soient immobiles ou en mouvement, en contact ou à distance.",
                "Exemple : un nageur pousse le bord de la piscine avec ses pieds lors d'un virage. Le mur exerce en retour sur le nageur une force de même valeur et de sens opposé, et c'est elle qui le propulse. De même, la Terre attire la Lune et la Lune attire la Terre avec une force de même valeur : c'est cette attraction de la Lune qui est la principale cause des marées.",
                "Attention : les deux forces d'une interaction s'exercent sur deux systèmes différents. Elles ne peuvent donc jamais « s'annuler » l'une l'autre, puisque l'on n'étudie qu'un seul système à la fois et que l'une des deux seulement s'applique sur lui.",
              ],
              box: { label: "Propriété", text: "Principe des actions réciproques : F⃗A/B = -F⃗B/A. Même droite d'action, même valeur, sens opposés, et chaque force s'exerce sur un système différent." },
            },
          ],
          keyPoints: [
            "Action de contact : les objets se touchent. Action à distance : sans contact (attraction de la Terre, aimant, électricité statique).",
            "Le diagramme objet-interaction relie le système à chaque objet extérieur : trait plein pour le contact, pointillés pour la distance.",
            "Une force est un vecteur : point d'application, direction, sens et valeur en newtons (N), mesurée au dynamomètre.",
            "La longueur de la flèche est proportionnelle à la valeur de la force, selon une échelle indiquée.",
            "Principe des actions réciproques : F⃗A/B = -F⃗B/A, même valeur, même droite, sens opposés, sur deux systèmes différents.",
          ],
          example: {
            statement: "Une lampe est suspendue au plafond par un fil. On étudie le système « lampe ». Établir le diagramme objet-interaction, puis indiquer quelle force est associée, par le principe des actions réciproques, à la force exercée par le fil sur la lampe.",
            solution: [
              "Le système est la lampe. Les objets qui la touchent : le fil seulement (le plafond ne touche pas la lampe). L'objet qui agit à distance : la Terre. L'action de l'air est négligée.",
              "DOI : « lampe » au centre, reliée au fil par un trait plein (contact) et à la Terre par un trait en pointillés (distance).",
              "Deux forces s'exercent donc sur la lampe : la force F⃗fil/lampe, verticale vers le haut, et la force F⃗Terre/lampe, verticale vers le bas.",
              "Par le principe des actions réciproques, la lampe exerce sur le fil une force F⃗lampe/fil = -F⃗fil/lampe : même valeur, même droite verticale, mais dirigée vers le bas et appliquée au fil, pas à la lampe.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un enfant tire un traîneau avec une corde horizontale. Le dynamomètre placé sur la corde indique 45 N. 1. Donner les caractéristiques de la force exercée par la corde sur le traîneau. 2. Quelle longueur doit avoir la flèche qui la représente avec l'échelle 1 cm pour 15 N ? 3. Classer en actions de contact ou à distance les actions suivantes exercées sur le traîneau : celle de la corde, celle de la neige, celle de la Terre.",
              hint: "Une échelle est une relation de proportionnalité : divisez la valeur de la force par le nombre de newtons représenté par 1 cm.",
              solution: [
                "1. Point d'application : le point d'attache de la corde sur le traîneau. Direction : celle de la corde, horizontale. Sens : du traîneau vers l'enfant. Valeur : F = 45 N.",
                "2. Longueur de la flèche : 45 ÷ 15 = 3,0 cm.",
                "3. La corde et la neige touchent le traîneau : actions de contact. La Terre attire le traîneau sans le toucher : action à distance.",
                "Résultat : flèche horizontale de 3,0 cm dirigée vers l'enfant ; deux actions de contact (corde, neige) et une action à distance (Terre).",
              ],
            },
            {
              level: 2,
              statement: "Un clou en fer est suspendu à un fil. On approche un aimant fixe : le fil s'incline, le clou restant immobile dans sa nouvelle position sans toucher l'aimant. On néglige l'action de l'air. 1. Établir le diagramme objet-interaction du système « clou ». 2. Combien de forces s'exercent sur le clou ? Préciser pour chacune s'il s'agit d'une action de contact ou à distance. 3. L'aimant exerce sur le clou une force de valeur 0,15 N. Quelle est la valeur de la force exercée par le clou sur l'aimant ? Justifier et préciser son sens.",
              hint: "Un aimant agit sans contact. Pour la question 3, pensez que toute action est une interaction.",
              solution: [
                "1. DOI : « clou » au centre ; trait plein vers le fil ; traits en pointillés vers la Terre et vers l'aimant.",
                "2. Trois forces s'exercent sur le clou : la force du fil (contact), la force de la Terre (distance) et la force de l'aimant (distance).",
                "3. D'après le principe des actions réciproques, F⃗clou/aimant = -F⃗aimant/clou. Les deux forces ont la même valeur.",
                "Résultat : le clou attire l'aimant avec une force de 0,15 N, de même droite d'action que la force de l'aimant sur le clou, mais dirigée du côté du clou (vers le clou).",
              ],
            },
            {
              level: 3,
              statement: "Deux patineurs, Léa et Malik, sont immobiles face à face sur une patinoire. Léa pousse Malik avec ses mains ; un capteur mesure une force de 80 N pendant la poussée. On constate que les deux patineurs se mettent en mouvement en s'éloignant l'un de l'autre. 1. Établir le DOI du système « Malik » pendant la poussée (on néglige les frottements de la glace et de l'air, mais pas l'action verticale de la glace). 2. Expliquer pourquoi Léa se met elle aussi en mouvement alors que c'est elle qui pousse. 3. Représenter, pendant la poussée, les deux forces de l'interaction Léa-Malik avec l'échelle 1 cm pour 20 N, en précisant sur quel patineur chacune s'applique. 4. Un élève affirme : « ces deux forces sont opposées, donc elles s'annulent et personne ne devrait bouger ». Corriger son raisonnement.",
              hint: "Le principe des actions réciproques concerne deux forces qui s'appliquent sur deux systèmes différents.",
              solution: [
                "1. DOI du système « Malik » : traits pleins vers Léa (ses mains) et vers la glace ; trait en pointillés vers la Terre.",
                "2. Par le principe des actions réciproques, si Léa exerce une force sur Malik, Malik exerce sur Léa une force de même valeur et de sens opposé. Cette force F⃗Malik/Léa, dirigée vers l'arrière de Léa, la met en mouvement dans le sens opposé.",
                "3. Les deux forces ont une valeur de 80 N, représentée par une flèche de 80 ÷ 20 = 4,0 cm. F⃗Léa/Malik part de Malik et est dirigée vers l'opposé de Léa ; F⃗Malik/Léa part de Léa et est dirigée vers l'opposé de Malik. Les deux flèches sont sur la même droite horizontale.",
                "4. Les deux forces sont bien opposées, mais elles s'exercent sur deux systèmes différents : l'une sur Malik, l'autre sur Léa. Pour étudier le mouvement de Malik, on ne considère que les forces qui s'appliquent sur Malik ; la force exercée sur Léa n'en fait pas partie.",
                "Conclusion : chaque patineur subit une force horizontale non compensée de 80 N et se met en mouvement ; ils s'éloignent l'un de l'autre.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre compréhension des forces et des interactions.",
            statements: [
              { text: "Une force se mesure en kilogrammes.", true: false, why: "Le kilogramme est l'unité de masse. Une force se mesure en newtons (N)." },
              { text: "L'attraction d'un aimant sur un clou est une action à distance.", true: true, why: "L'aimant agit sur le clou sans le toucher." },
              { text: "Quand un camion percute une voiture, le camion exerce sur la voiture une force plus grande que celle que la voiture exerce sur lui.", true: false, why: "Principe des actions réciproques : les deux forces ont exactement la même valeur. Les dégâts sont différents, pas les forces." },
              { text: "Les deux forces d'une interaction s'appliquent sur deux objets différents.", true: true, why: "F⃗A/B s'applique sur B et F⃗B/A s'applique sur A." },
              { text: "Un livre posé sur une table n'exerce aucune force sur la table, car il est immobile.", true: false, why: "Le livre appuie sur la table ; immobile ou non, il exerce une force de contact sur elle." },
              { text: "Sur un schéma, une flèche deux fois plus longue représente une force deux fois plus grande, à échelle égale.", true: true, why: "La longueur de la flèche est proportionnelle à la valeur de la force." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces actions est une action à distance ?",
              options: ["L'action d'une corde sur un seau", "L'action de la Terre sur un parachutiste", "L'action du sol sur une chaussure", "L'action de l'eau sur la coque d'un bateau"],
              answer: 1,
              why: "La Terre attire le parachutiste sans contact. L'air, la corde et le sol touchent l'objet sur lequel ils agissent.",
            },
            {
              q: "Avec l'échelle 1 cm pour 50 N, une force de 125 N est représentée par une flèche de :",
              options: ["1,25 cm", "6,25 cm", "0,4 cm", "2,5 cm"],
              answer: 3,
              why: "125 ÷ 50 = 2,5 : la flèche mesure 2,5 cm.",
            },
            {
              q: "Dans un diagramme objet-interaction, une interaction à distance est représentée par :",
              options: ["un trait en pointillés", "un trait plein", "une flèche à l'échelle", "un double trait plein"],
              answer: 0,
              why: "Convention du DOI : trait plein pour le contact, pointillés pour la distance. Les flèches à l'échelle servent à représenter les forces, pas les interactions.",
            },
            {
              q: "La Terre attire un satellite avec une force F. Le satellite attire la Terre avec une force :",
              options: ["nulle, car sa masse est très petite", "beaucoup plus petite que F", "de même valeur F, de sens opposé", "de même valeur F, de même sens"],
              answer: 2,
              why: "Principe des actions réciproques : même valeur, même droite d'action, sens opposés, quelles que soient les masses.",
            },
            {
              q: "Laquelle de ces caractéristiques ne fait pas partie de la description d'une force ?",
              options: ["Son sens", "Sa vitesse", "Sa direction", "Sa valeur"],
              answer: 1,
              why: "Une force est décrite par son point d'application, sa direction, son sens et sa valeur. La vitesse caractérise un mouvement, pas une force.",
            },
          ],
          trap: "Croire que les deux forces d'une interaction se compensent et « s'annulent » : elles s'appliquent sur deux systèmes différents, et pour un système donné on ne retient que celle qui s'exerce sur lui.",
          method: "Avant tout schéma, nommez le système et faites le diagramme objet-interaction : chaque trait donne exactement une force, ce qui évite d'en oublier une (le plus souvent l'action du support) ou d'en inventer une (une prétendue « force du mouvement »).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gravitation-poids',
          title: "L'interaction gravitationnelle et le poids",
          minutes: 30,
          objectives: [
            "Utiliser l'expression de la force d'interaction gravitationnelle entre deux corps à répartition sphérique de masse.",
            "Utiliser l'expression vectorielle du poids d'un objet, approché par la force d'interaction gravitationnelle exercée par une planète à sa surface.",
            "Calculer l'intensité de la pesanteur à la surface d'un astre.",
            "Distinguer la masse et le poids d'un objet.",
          ],
          course: [
            {
              heading: "La loi de la gravitation universelle",
              paragraphs: [
                "En 1687, dans ses Principes mathématiques de la philosophie naturelle, Isaac Newton énonce que la chute d'une pomme et le mouvement de la Lune autour de la Terre ont la même cause : tous les corps qui ont une masse s'attirent mutuellement. C'est l'interaction gravitationnelle, une action à distance toujours attractive.",
                "Deux corps A et B à répartition sphérique de masse (masses mA et mB, en kg), dont les centres sont séparés d'une distance d (en m), exercent l'un sur l'autre des forces de même valeur F = G × mA × mB ÷ d². La constante de gravitation universelle vaut G = 6,67 × 10⁻¹¹ N·m²·kg⁻². La force F⃗A/B est appliquée au centre de B et dirigée de B vers A ; la force F⃗B/A est son opposée, conformément au principe des actions réciproques.",
                "La valeur de G est très petite : entre deux personnes de 60 kg distantes de 1 m, la force est d'environ 2,4 × 10⁻⁷ N, imperceptible. L'interaction gravitationnelle ne devient importante que si au moins un des corps est très massif, comme une planète ou une étoile. La force diminue rapidement avec la distance : si d est multipliée par 2, F est divisée par 2² = 4.",
              ],
              box: { label: "Formule", text: "F = G × mA × mB ÷ d², avec G = 6,67 × 10⁻¹¹ N·m²·kg⁻², m en kg, d en m (distance entre les centres), F en N. Écriture vectorielle : F⃗A/B = -G × mA × mB ÷ d² × u⃗AB, où u⃗AB est un vecteur unitaire orienté de A vers B." },
            },
            {
              heading: "Le poids d'un objet",
              paragraphs: [
                "Le poids P⃗ d'un objet est la force d'attraction exercée par la Terre (ou par un autre astre) sur cet objet. Ses caractéristiques : point d'application au centre de l'objet, direction verticale, sens vers le bas (vers le centre de la Terre), valeur P = m × g, où m est la masse en kg et g l'intensité de la pesanteur en N·kg⁻¹. On écrit vectoriellement P⃗ = m × g⃗.",
                "À la surface de la Terre, on assimile le poids à la force d'attraction gravitationnelle exercée par la Terre : m × g = G × MT × m ÷ RT², d'où g = G × MT ÷ RT². Avec MT = 5,97 × 10²⁴ kg et RT = 6,37 × 10⁶ m, on obtient g ≈ 9,81 N·kg⁻¹. Cette valeur varie un peu avec le lieu (la Terre n'est pas parfaitement sphérique et elle tourne sur elle-même) et diminue avec l'altitude.",
                "Exemple : un sac de 5,0 kg a, en France, un poids P = 5,0 × 9,81 ≈ 49 N.",
              ],
              box: { label: "Formule", text: "P = m × g. P en newtons (N), m en kilogrammes (kg), g en N·kg⁻¹. Sur Terre, g ≈ 9,81 N·kg⁻¹. Poids : vertical, vers le bas, appliqué au centre de l'objet." },
            },
            {
              heading: "Masse et poids : deux grandeurs différentes",
              paragraphs: [
                "La masse mesure la quantité de matière d'un objet ; elle s'exprime en kilogrammes, se mesure avec une balance et ne dépend pas du lieu. Le poids est une force ; il s'exprime en newtons, se mesure avec un dynamomètre et dépend de l'astre et de l'altitude. Le langage courant les confond (« je pèse 60 kilos »), mais en physique il faut les distinguer.",
                "Sur la Lune, l'intensité de la pesanteur vaut gL ≈ 1,62 N·kg⁻¹, environ six fois moins que sur Terre. Un astronaute de masse 80 kg (avec sa combinaison, par exemple) garde une masse de 80 kg sur la Lune, mais son poids passe de 80 × 9,81 ≈ 785 N à 80 × 1,62 ≈ 130 N : il peut faire de grands bonds. Sur Mars, g ≈ 3,7 N·kg⁻¹.",
              ],
              box: { label: "À retenir", text: "La masse (kg) ne change pas d'un astre à l'autre ; le poids (N) change, car g dépend de la masse et du rayon de l'astre : g = G × M ÷ R²." },
            },
          ],
          keyPoints: [
            "Deux corps massifs s'attirent : F = G × mA × mB ÷ d², avec G = 6,67 × 10⁻¹¹ N·m²·kg⁻² et d la distance entre les centres, en mètres.",
            "Les forces F⃗A/B et F⃗B/A ont la même valeur et des sens opposés ; chacune est dirigée vers l'autre corps.",
            "Le poids P⃗ = m × g⃗ : vertical, vers le bas, valeur P = m × g. Sur Terre, g ≈ 9,81 N·kg⁻¹.",
            "À la surface d'un astre de masse M et de rayon R, g = G × M ÷ R².",
            "La masse (kg, balance) ne dépend pas du lieu ; le poids (N, dynamomètre) en dépend.",
          ],
          example: {
            statement: "Calculer la valeur de la force d'attraction gravitationnelle exercée par la Terre sur la Lune. Données : MT = 5,97 × 10²⁴ kg ; ML = 7,35 × 10²² kg ; distance moyenne entre les centres d = 3,84 × 10⁸ m ; G = 6,67 × 10⁻¹¹ N·m²·kg⁻².",
            solution: [
              "Expression littérale : F = G × MT × ML ÷ d².",
              "Numérateur : 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ × 7,35 × 10²² ≈ 2,93 × 10³⁷ (en N·m²).",
              "Dénominateur : d² = (3,84 × 10⁸)² ≈ 1,47 × 10¹⁷ m².",
              "F ≈ 2,93 × 10³⁷ ÷ 1,47 × 10¹⁷ ≈ 1,98 × 10²⁰ N.",
              "Par le principe des actions réciproques, la Lune attire la Terre avec une force de même valeur, 1,98 × 10²⁰ N, dirigée vers la Lune.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Inès a une masse de 55 kg. 1. Calculer son poids sur Terre (g = 9,81 N·kg⁻¹). 2. Calculer son poids sur la Lune (gL = 1,62 N·kg⁻¹). 3. Quelle serait sa masse sur la Lune ?",
              hint: "Appliquez P = m × g avec la valeur de g de l'astre considéré ; la masse ne dépend pas du lieu.",
              solution: [
                "1. Sur Terre : P = m × g = 55 × 9,81 ≈ 540 N (5,4 × 10² N).",
                "2. Sur la Lune : PL = 55 × 1,62 ≈ 89 N.",
                "3. La masse ne dépend pas du lieu : elle vaut toujours 55 kg.",
                "Résultat : environ 540 N sur Terre, 89 N sur la Lune, pour une masse de 55 kg partout.",
              ],
            },
            {
              level: 2,
              statement: "Données : G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; masse de la Terre MT = 5,97 × 10²⁴ kg ; rayon de la Terre RT = 6,37 × 10⁶ m. 1. Retrouver la valeur de l'intensité de la pesanteur g à la surface de la Terre. 2. La Station spatiale internationale (ISS) évolue à environ 400 km d'altitude. Calculer l'intensité de la pesanteur à cette altitude. 3. Les astronautes de l'ISS flottent dans la station. Un élève en conclut qu'ils n'ont « plus de poids ». Que pensez-vous de cette affirmation ?",
              hint: "À l'altitude h, la distance au centre de la Terre est RT + h. Pensez à convertir 400 km en mètres.",
              solution: [
                "1. g = G × MT ÷ RT² = 6,67 × 10⁻¹¹ × 5,97 × 10²⁴ ÷ (6,37 × 10⁶)². Numérateur ≈ 3,98 × 10¹⁴ ; dénominateur ≈ 4,06 × 10¹³. Donc g ≈ 9,81 N·kg⁻¹.",
                "2. Distance au centre : d = RT + h = 6,37 × 10⁶ + 0,40 × 10⁶ = 6,77 × 10⁶ m. g(h) = G × MT ÷ d² ≈ 3,98 × 10¹⁴ ÷ 4,58 × 10¹³ ≈ 8,69 N·kg⁻¹.",
                "3. À 400 km d'altitude, g vaut encore environ 89 % de sa valeur au sol : les astronautes sont toujours attirés par la Terre, leur poids n'est pas nul. S'ils flottent, c'est parce que la station et eux « tombent » ensemble autour de la Terre (ils sont en chute libre), pas parce que la gravitation a disparu.",
                "Résultat : g ≈ 9,81 N·kg⁻¹ au sol et g ≈ 8,69 N·kg⁻¹ à l'altitude de l'ISS ; l'affirmation de l'élève est fausse.",
              ],
            },
            {
              level: 3,
              statement: "Un robot d'exploration de masse m = 1,00 × 10³ kg (données fictives pour le robot) se pose sur Mars. Données : masse de Mars MM = 6,42 × 10²³ kg ; rayon de Mars RM = 3,39 × 10⁶ m ; G = 6,67 × 10⁻¹¹ N·m²·kg⁻² ; sur Terre g = 9,81 N·kg⁻¹. 1. Calculer l'intensité de la pesanteur gM à la surface de Mars. 2. Calculer le poids du robot sur Mars et sur Terre, puis le rapport des deux. 3. Donner les caractéristiques du poids du robot sur Mars et celles de la force qu'exerce le robot sur Mars. 4. Les ingénieurs testent les roues du robot sur Terre. Expliquer pourquoi un test sur Terre est plus exigeant pour les roues que l'utilisation sur Mars.",
              hint: "Utilisez g = G × M ÷ R², puis P = m × g. Pour la question 3, appliquez le principe des actions réciproques.",
              solution: [
                "1. gM = G × MM ÷ RM² = 6,67 × 10⁻¹¹ × 6,42 × 10²³ ÷ (3,39 × 10⁶)². Numérateur ≈ 4,28 × 10¹³ ; dénominateur ≈ 1,15 × 10¹³. gM ≈ 3,73 N·kg⁻¹.",
                "2. Sur Mars : PM = 1,00 × 10³ × 3,73 ≈ 3,73 × 10³ N. Sur Terre : PT = 1,00 × 10³ × 9,81 = 9,81 × 10³ N. Rapport PT ÷ PM = 9,81 ÷ 3,73 ≈ 2,63.",
                "3. Poids sur Mars : appliqué au centre du robot, direction verticale (droite qui passe par le centre de Mars), sens vers le centre de Mars, valeur 3,73 × 10³ N. Force du robot sur Mars : appliquée au centre de Mars, même droite, sens vers le robot, même valeur 3,73 × 10³ N.",
                "4. Sur Terre, le poids du robot est environ 2,6 fois plus grand que sur Mars : les roues supportent une charge plus importante. Si elles résistent sur Terre, elles résisteront à la charge sur Mars.",
                "Résultat : gM ≈ 3,73 N·kg⁻¹ ; poids d'environ 3,73 × 10³ N sur Mars contre 9,81 × 10³ N sur Terre.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque grandeur à son unité ou à sa valeur.",
            pairs: [
              { left: "Masse d'un objet", right: "kilogramme (kg)" },
              { left: "Poids d'un objet", right: "newton (N)" },
              { left: "Intensité de la pesanteur sur Terre", right: "environ 9,81 N·kg⁻¹" },
              { left: "Intensité de la pesanteur sur la Lune", right: "environ 1,62 N·kg⁻¹" },
              { left: "Constante de gravitation G", right: "6,67 × 10⁻¹¹ N·m²·kg⁻²" },
              { left: "Distance d dans la loi de Newton", right: "mètre (m), entre les centres" },
            ],
          },
          quiz: [
            {
              q: "Si la distance entre deux astres est multipliée par 3, la force gravitationnelle entre eux est :",
              options: ["multipliée par 3", "divisée par 3", "divisée par 9", "multipliée par 9"],
              answer: 2,
              why: "F est proportionnelle à 1 ÷ d² : si d est multipliée par 3, F est divisée par 3² = 9.",
            },
            {
              q: "Quel est le poids, sur Terre, d'un objet de masse 2,0 kg ?",
              options: ["environ 20 N", "2,0 kg", "environ 2,0 N", "environ 0,20 N"],
              answer: 0,
              why: "P = m × g = 2,0 × 9,81 ≈ 19,6 N, soit environ 20 N. Un poids s'exprime en newtons, pas en kilogrammes.",
            },
            {
              q: "Un astronaute va de la Terre à la Lune. Que devient sa masse ?",
              options: ["Elle diminue fortement", "Elle devient nulle", "Elle est divisée par 6", "Elle ne change pas"],
              answer: 3,
              why: "La masse ne dépend pas du lieu. C'est le poids qui est environ six fois plus faible sur la Lune.",
            },
            {
              q: "La force gravitationnelle exercée par la Terre sur la Lune est dirigée :",
              options: ["de la Terre vers la Lune", "de la Lune vers la Terre", "perpendiculairement à la droite Terre-Lune", "dans le sens du mouvement de la Lune"],
              answer: 1,
              why: "L'interaction gravitationnelle est attractive : la force subie par la Lune est appliquée en son centre et dirigée vers la Terre.",
            },
            {
              q: "L'intensité de la pesanteur à la surface d'un astre dépend :",
              options: ["de sa masse et de son rayon", "uniquement de sa masse", "de la masse de l'objet qui tombe", "uniquement de son rayon"],
              answer: 0,
              why: "g = G × M ÷ R² : elle dépend de la masse M et du rayon R de l'astre, pas de la masse de l'objet.",
            },
          ],
          trap: "Oublier de mettre la distance au carré, l'exprimer en kilomètres au lieu de mètres, ou prendre l'altitude au lieu de la distance entre les centres (rayon de l'astre plus altitude).",
          method: "Écrivez toujours l'expression littérale avant de remplacer, convertissez toutes les grandeurs en unités du système international (kg, m), puis vérifiez l'ordre de grandeur du résultat : g ≈ 10 N·kg⁻¹ sur Terre, quelques N·kg⁻¹ sur les petites planètes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'support-fil',
          title: "Forces exercées par un support et par un fil",
          minutes: 30,
          objectives: [
            "Identifier les actions modélisées par des forces dont les expressions sont connues a priori et celles qui ne le sont pas.",
            "Représenter qualitativement la force modélisant l'action d'un support dans des cas simples relevant de la statique.",
            "Représenter la force exercée par un fil tendu sur un objet.",
            "Déterminer la valeur de la force exercée par un support ou par un fil sur un objet immobile soumis à des forces verticales.",
          ],
          course: [
            {
              heading: "L'action d'un support : la réaction",
              paragraphs: [
                "Un objet posé sur un support (sol, table, plan incliné) est soumis à une action de contact de ce support, modélisée par une force notée R⃗ et appelée réaction du support. Elle est appliquée au centre de la surface de contact et dirigée du support vers l'objet : le support « repousse » l'objet. Contrairement au poids, sa valeur n'est pas donnée par une formule : elle s'adapte à la situation et se déduit des autres forces.",
                "Lorsque le contact se fait sans frottement, la réaction est perpendiculaire à la surface de contact : on parle de réaction normale. C'est le cas d'un palet sur une glace bien lisse ou, de façon approchée, d'un objet posé sur une table horizontale. Lorsqu'il y a des frottements, la réaction est inclinée par rapport à la normale. On peut la décomposer en une composante normale R⃗N, perpendiculaire au support, et une composante tangentielle f⃗, parallèle au support, appelée force de frottement.",
                "La force de frottement s'oppose au glissement de l'objet sur le support, ou à sa tendance à glisser. C'est elle qui retient une caisse immobile sur une rampe, qui permet de marcher sans glisser, et qui freine un objet que l'on fait glisser sur le sol.",
              ],
              box: { label: "Définition", text: "Réaction du support R⃗ : appliquée au centre de la surface de contact, dirigée du support vers l'objet. Sans frottement, elle est perpendiculaire au support. Avec frottements, elle est inclinée et se décompose en R⃗N (normale) et f⃗ (frottement)." },
            },
            {
              heading: "L'action d'un fil : la tension",
              paragraphs: [
                "Un fil tendu attaché à un objet exerce sur lui une action de contact modélisée par une force T⃗, appelée tension du fil. Elle est appliquée au point d'attache du fil sur l'objet, a pour direction celle du fil, et est dirigée de l'objet vers le fil (le fil « tire » toujours, il ne peut jamais pousser). Un fil détendu n'exerce aucune force.",
                "Pour un fil de masse négligeable, la tension a la même valeur à ses deux extrémités. Un dynamomètre placé sur le fil mesure directement la valeur de T⃗. Comme pour la réaction d'un support, cette valeur n'est pas donnée par une formule : on la déduit de l'étude de la situation.",
              ],
              box: { label: "À retenir", text: "Tension d'un fil T⃗ : appliquée au point d'attache, de même direction que le fil, dirigée de l'objet vers le fil. Un fil tire, il ne pousse jamais." },
            },
            {
              heading: "Exploiter l'immobilité d'un objet",
              paragraphs: [
                "Lorsqu'un objet est immobile dans le référentiel terrestre, les forces qui s'exercent sur lui se compensent : leur somme vectorielle est nulle (c'est le principe d'inertie, étudié dans la leçon suivante). Cette propriété permet de trouver la valeur d'une force inconnue, comme la réaction d'un support ou la tension d'un fil.",
                "Livre posé sur une table horizontale : il est soumis à son poids P⃗ et à la réaction R⃗ de la table. Ces deux forces se compensent : R⃗ = -P⃗. La réaction est verticale, vers le haut, et R = P = m × g. Lampe suspendue à un fil vertical : elle est soumise à P⃗ et T⃗, donc T⃗ = -P⃗ et T = m × g.",
                "Objet immobile sur un plan incliné avec frottements : il est soumis à P⃗ et à R⃗ seulement. Pour que ces deux forces se compensent, R⃗ doit être verticale, vers le haut, de valeur P, et non perpendiculaire au plan. Sa composante tangentielle, le frottement, est dirigée vers le haut de la pente : c'est elle qui empêche l'objet de glisser.",
              ],
              box: { label: "Règle", text: "Objet immobile soumis à deux forces : elles ont la même droite d'action, la même valeur et des sens opposés. Soumis à trois forces verticales : la somme des valeurs des forces vers le haut est égale à la somme des valeurs des forces vers le bas." },
            },
          ],
          keyPoints: [
            "Le poids a une expression connue (P = m × g) ; la réaction d'un support et la tension d'un fil se déduisent de la situation.",
            "Réaction du support : du support vers l'objet, perpendiculaire au support s'il n'y a pas de frottement.",
            "Avec frottements, la réaction est inclinée : composante normale R⃗N et force de frottement f⃗ qui s'oppose au glissement.",
            "Tension d'un fil : selon le fil, de l'objet vers le fil ; un fil ne pousse jamais.",
            "Objet immobile : les forces se compensent, ce qui donne la valeur de la force inconnue.",
          ],
          example: {
            statement: "Un lustre de masse 2,5 kg est suspendu au plafond par une chaîne verticale de masse négligeable, assimilée à un fil. Déterminer les caractéristiques de la force exercée par la chaîne sur le lustre (g = 9,81 N·kg⁻¹), puis la représenter avec l'échelle 1 cm pour 10 N.",
            solution: [
              "Système : le lustre, immobile dans le référentiel terrestre. Forces : le poids P⃗ (action à distance de la Terre) et la tension T⃗ de la chaîne (action de contact).",
              "Poids : P = m × g = 2,5 × 9,81 ≈ 24,5 N, vertical, vers le bas.",
              "Le lustre est immobile : les deux forces se compensent, T⃗ = -P⃗.",
              "Tension : appliquée au point d'attache de la chaîne, verticale, vers le haut, de valeur T ≈ 24,5 N.",
              "Représentation : flèche verticale vers le haut de 24,5 ÷ 10 ≈ 2,5 cm, partant du point d'attache.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un livre de masse 800 g est posé sur une table horizontale. On prendra g = 9,81 N·kg⁻¹. 1. Calculer le poids du livre. 2. Donner les caractéristiques de la réaction de la table. 3. Représenter les deux forces avec l'échelle 1 cm pour 2 N.",
              hint: "Convertissez la masse en kilogrammes. Le livre est immobile et soumis à deux forces seulement.",
              solution: [
                "1. m = 800 g = 0,800 kg. P = 0,800 × 9,81 ≈ 7,85 N.",
                "2. Le livre est immobile, soumis à P⃗ et R⃗ : R⃗ = -P⃗. La réaction est appliquée au centre de la surface de contact, verticale, vers le haut, de valeur R ≈ 7,85 N.",
                "3. Chaque force est représentée par une flèche de 7,85 ÷ 2 ≈ 3,9 cm : P⃗ vers le bas depuis le centre du livre, R⃗ vers le haut depuis le centre de la surface de contact.",
                "Résultat : P = R ≈ 7,85 N, deux flèches verticales opposées de 3,9 cm.",
              ],
            },
            {
              level: 2,
              statement: "Un objet de masse 2,0 kg est accroché à un dynamomètre par un fil vertical. On le fait descendre jusqu'à ce qu'il repose sur une table horizontale, le fil restant tendu : le dynamomètre indique alors 12 N. L'objet est immobile. On prendra g = 9,81 N·kg⁻¹. 1. Faire l'inventaire des forces qui s'exercent sur l'objet. 2. Calculer la valeur de la réaction de la table. 3. Que devient cette réaction si l'on détend complètement le fil ?",
              hint: "Les trois forces sont verticales : les forces vers le haut compensent celles vers le bas.",
              solution: [
                "1. Trois forces : le poids P⃗ (vertical, vers le bas), la tension T⃗ du fil (verticale, vers le haut, T = 12 N), la réaction R⃗ de la table (verticale, vers le haut).",
                "2. Poids : P = 2,0 × 9,81 ≈ 19,6 N. L'objet est immobile, donc T + R = P, d'où R = P - T = 19,6 - 12 ≈ 7,6 N.",
                "3. Si le fil est détendu, T = 0 : l'objet est soumis à P⃗ et R⃗ seulement, et R = P ≈ 19,6 N.",
                "Résultat : R ≈ 7,6 N avec le fil tendu, R ≈ 19,6 N avec le fil détendu. La réaction s'adapte : elle n'a pas de valeur fixe.",
              ],
            },
            {
              level: 3,
              statement: "Une caisse de masse 12 kg est immobile sur une rampe inclinée de 20° par rapport à l'horizontale. On prendra g = 9,81 N·kg⁻¹. 1. Établir le diagramme objet-interaction de la caisse (on néglige l'action de l'air) et en déduire les forces qui s'exercent sur elle. 2. Déterminer la direction, le sens et la valeur de la réaction R⃗ de la rampe. 3. On décompose R⃗ en une composante normale R⃗N, perpendiculaire à la rampe, et une force de frottement f⃗, parallèle à la rampe. Sachant que l'angle entre R⃗ et R⃗N vaut 20°, calculer RN et f. 4. Que se passerait-il si la rampe était parfaitement glissante ? Justifier.",
              hint: "Deux forces qui se compensent ont la même droite d'action. Pour la question 3, R⃗ est l'hypoténuse d'un triangle rectangle dont R⃗N et f⃗ sont les côtés de l'angle droit.",
              solution: [
                "1. DOI : « caisse » reliée à la rampe (trait plein) et à la Terre (pointillés). Deux forces : le poids P⃗ et la réaction R⃗ de la rampe.",
                "2. La caisse est immobile : R⃗ = -P⃗. La réaction est donc verticale, vers le haut, de valeur R = P = 12 × 9,81 ≈ 118 N. Elle n'est pas perpendiculaire à la rampe : il y a des frottements.",
                "3. Dans le triangle rectangle : RN = R × cos 20° ≈ 118 × 0,940 ≈ 111 N et f = R × sin 20° ≈ 118 × 0,342 ≈ 40 N. La force de frottement est parallèle à la rampe, dirigée vers le haut de la pente.",
                "4. Sans frottement, la réaction serait perpendiculaire à la rampe. Elle ne pourrait plus être opposée au poids vertical : les forces ne se compenseraient plus et la caisse glisserait vers le bas de la pente.",
                "Résultat : R ≈ 118 N verticale vers le haut, RN ≈ 111 N et f ≈ 40 N ; sans frottement, la caisse ne peut pas rester immobile.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour déterminer la force exercée par un support sur un objet immobile.",
            items: [
              "Définir le système étudié et le référentiel",
              "Construire le diagramme objet-interaction",
              "Associer une force à chaque interaction",
              "Calculer la valeur du poids avec P = m × g",
              "Utiliser l'immobilité pour en déduire la réaction du support",
              "Représenter les forces à l'échelle choisie",
            ],
          },
          quiz: [
            {
              q: "Un palet est posé sur une glace horizontale sans frottement. La réaction de la glace est :",
              options: ["inclinée vers l'avant, dans le sens du glissement", "verticale vers le bas", "horizontale", "perpendiculaire à la glace, vers le haut"],
              answer: 3,
              why: "Sans frottement, la réaction est perpendiculaire au support et dirigée du support vers l'objet, donc verticale vers le haut ici.",
            },
            {
              q: "Quelle force a une expression connue a priori ?",
              options: ["La réaction d'un support", "Le poids", "La tension d'un fil", "La force de frottement"],
              answer: 1,
              why: "Le poids se calcule par P = m × g. Les autres se déduisent de l'étude de la situation.",
            },
            {
              q: "La tension d'un fil tendu attaché à un objet est dirigée :",
              options: ["de l'objet vers le sol", "toujours verticalement", "de l'objet vers le fil", "du fil vers l'objet"],
              answer: 2,
              why: "Le fil tire l'objet : la tension, selon le fil, va de l'objet vers le fil.",
            },
            {
              q: "Une valise de 15 kg est posée immobile sur le sol horizontal. La réaction du sol vaut environ :",
              options: ["147 N", "15 N", "15 kg", "1,5 N"],
              answer: 0,
              why: "R = P = m × g = 15 × 9,81 ≈ 147 N.",
            },
            {
              q: "Un skieur est immobile sur une piste en pente. La force de frottement exercée par la neige est :",
              options: ["dirigée vers le bas de la pente", "dirigée vers le haut de la pente", "perpendiculaire à la pente", "nulle, car le skieur ne bouge pas"],
              answer: 1,
              why: "Le frottement s'oppose à la tendance au glissement, qui se fait vers le bas : il est donc dirigé vers le haut de la pente.",
            },
          ],
          trap: "Dessiner la réaction toujours perpendiculaire au support, même quand il y a des frottements, ou croire qu'elle vaut toujours m × g : sur un plan incliné ou avec un fil tendu, sa direction et sa valeur changent.",
          method: "Pour une force de contact, posez-vous deux questions : quel objet touche le système, et dans quel sens cet objet peut-il agir (un support repousse, un fil tire) ? Déduisez ensuite sa valeur de l'immobilité, jamais d'une formule inventée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'principe-inertie',
          title: "Le principe d'inertie : forces et variation de la vitesse",
          minutes: 35,
          objectives: [
            "Établir le bilan des forces exercées sur un système modélisé par un point matériel.",
            "Exploiter le principe d'inertie ou sa contraposée pour en déduire des informations sur la nature du mouvement ou sur les forces.",
            "Relier la variation du vecteur vitesse entre deux instants voisins à l'existence de forces dont la somme est non nulle.",
            "Décrire le cas de la chute libre à une dimension, avec ou sans vitesse initiale.",
          ],
          course: [
            {
              heading: "Le modèle du point matériel et la somme des forces",
              paragraphs: [
                "Pour étudier le mouvement d'ensemble d'un système, on le modélise souvent par un point matériel : un point qui porte toute la masse du système, situé en son centre. On ne s'intéresse alors ni à sa forme ni à ses rotations sur lui-même. Toutes les forces sont représentées à partir de ce point.",
                "Les effets de plusieurs forces s'ajoutent : on calcule leur somme vectorielle, notée ΣF⃗ (on dit aussi « résultante »). Si deux forces ont la même valeur, la même direction et des sens opposés, leur somme est le vecteur nul : on dit que les forces se compensent. Pour des forces de directions différentes, on construit la somme en mettant les vecteurs bout à bout.",
              ],
              box: { label: "Définition", text: "Les forces exercées sur un système se compensent lorsque leur somme vectorielle est nulle : ΣF⃗ = 0⃗." },
            },
            {
              heading: "Le principe d'inertie",
              paragraphs: [
                "Pendant longtemps, on a cru, à la suite d'Aristote, qu'un objet ne peut rester en mouvement que si une force agit en permanence sur lui. Galilée, au XVIIᵉ siècle, puis Newton ont montré l'inverse : sans action extérieure, un objet en mouvement continue en ligne droite à vitesse constante. Si une voiture s'arrête quand on coupe le moteur, c'est parce que des frottements la freinent.",
                "Principe d'inertie : dans le référentiel terrestre (et dans tout référentiel galiléen), si les forces qui s'exercent sur un système se compensent, alors ce système est soit immobile, soit en mouvement rectiligne uniforme. Réciproquement, si un système est immobile ou en mouvement rectiligne uniforme, les forces qui s'exercent sur lui se compensent.",
                "Contraposée : si le mouvement n'est pas rectiligne uniforme (la vitesse change de valeur ou de direction), alors les forces ne se compensent pas. Exemples : un parachutiste qui descend à vitesse constante en ligne droite est soumis à des forces qui se compensent (son poids est compensé par les frottements de l'air) ; une voiture qui prend un virage à vitesse constante n'est pas en mouvement rectiligne : les forces qui s'exercent sur elle ne se compensent pas.",
              ],
              box: { label: "Propriété", text: "Principe d'inertie : ΣF⃗ = 0⃗ ⟺ le système est immobile ou en mouvement rectiligne uniforme (dans le référentiel terrestre). Si le mouvement n'est pas rectiligne uniforme, ΣF⃗ ≠ 0⃗." },
            },
            {
              heading: "Forces et variation du vecteur vitesse",
              paragraphs: [
                "Lorsque les forces ne se compensent pas, le vecteur vitesse varie. Entre deux instants voisins t et t + Δt, la variation du vecteur vitesse Δv⃗ = v⃗(t + Δt) - v⃗(t) a la même direction et le même sens que la somme des forces ΣF⃗. Pour une même somme des forces, la variation de vitesse est d'autant plus faible que la masse du système est grande.",
                "Conséquences : si ΣF⃗ est dans le sens du mouvement, la vitesse augmente (mouvement accéléré) ; si ΣF⃗ est de sens opposé au mouvement, la vitesse diminue (mouvement ralenti) ; si ΣF⃗ est perpendiculaire au mouvement, la direction de la vitesse change, ce qui donne une trajectoire courbe.",
              ],
              box: { label: "À retenir", text: "Δv⃗ et ΣF⃗ ont même direction et même sens. Force dans le sens du mouvement : accélération ; force opposée au mouvement : ralentissement." },
            },
            {
              heading: "La chute libre à une dimension",
              paragraphs: [
                "Un objet est en chute libre lorsqu'il n'est soumis qu'à son poids : les frottements de l'air sont négligeables, ce qui est une bonne approximation pour une bille dense lâchée de faible hauteur. La somme des forces est alors égale au poids, vertical et dirigé vers le bas, donc Δv⃗ est toujours verticale et dirigée vers le bas.",
                "Objet lâché sans vitesse initiale : il descend en ligne droite verticale avec une vitesse qui augmente. Objet lancé verticalement vers le haut : sa vitesse, dirigée vers le haut, diminue (Δv⃗ est opposée au mouvement) jusqu'à s'annuler au sommet ; il redescend ensuite avec une vitesse qui augmente. Dans les deux cas, la vitesse varie d'environ 9,8 m·s⁻¹ chaque seconde, quelle que soit la masse de l'objet.",
              ],
            },
          ],
          keyPoints: [
            "Point matériel : le système est réduit à un point portant toute sa masse ; on y représente toutes les forces.",
            "Principe d'inertie : forces qui se compensent ⟺ immobilité ou mouvement rectiligne uniforme.",
            "Contraposée : un mouvement non rectiligne ou non uniforme implique des forces qui ne se compensent pas.",
            "Δv⃗ a la même direction et le même sens que ΣF⃗.",
            "Chute libre : seul le poids agit, Δv⃗ est verticale vers le bas, à la montée comme à la descente.",
          ],
          example: {
            statement: "Un parachutiste de masse totale 80 kg (équipement compris) descend verticalement à la vitesse constante de 5,0 m·s⁻¹, parachute ouvert. On prendra g = 9,81 N·kg⁻¹. Déterminer la valeur de la force exercée par l'air sur le système {parachutiste et parachute}.",
            solution: [
              "Système : {parachutiste et parachute}, modélisé par un point matériel, étudié dans le référentiel terrestre.",
              "Forces : le poids P⃗ (vertical, vers le bas) et la force exercée par l'air F⃗ (verticale, vers le haut, opposée au mouvement).",
              "Le mouvement est rectiligne (vertical) et uniforme (vitesse constante). D'après le principe d'inertie, les forces se compensent : F⃗ = -P⃗.",
              "Donc F = P = m × g = 80 × 9,81 ≈ 785 N.",
              "Résultat : l'air exerce une force verticale vers le haut d'environ 785 N. La vitesse de 5,0 m·s⁻¹ n'intervient pas dans le calcul.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dire si les forces qui s'exercent sur le système se compensent, en justifiant à l'aide du principe d'inertie. a) Une voiture roule à 90 km/h sur une ligne droite, à vitesse constante. b) Un ballon de football est immobile au point de penalty. c) Une bille lâchée tombe de plus en plus vite. d) Une nacelle de grande roue tourne à vitesse constante.",
              hint: "Les forces se compensent uniquement si le système est immobile ou en mouvement rectiligne ET uniforme.",
              solution: [
                "a) Mouvement rectiligne et uniforme : les forces se compensent.",
                "b) Le ballon est immobile : les forces (poids et réaction du sol) se compensent.",
                "c) La vitesse augmente : le mouvement n'est pas uniforme, donc les forces ne se compensent pas (contraposée du principe d'inertie).",
                "d) La trajectoire est un cercle, donc non rectiligne : les forces ne se compensent pas, même si la valeur de la vitesse est constante.",
                "Résultat : les forces se compensent en a) et b), pas en c) ni en d).",
              ],
            },
            {
              level: 2,
              statement: "On enregistre par chronophotographie le mouvement d'un palet glissant sur une table à coussin d'air horizontale. Les positions successives M₀, M₁, M₂, M₃, M₄ sont alignées et séparées par la même distance de 2,4 cm ; l'intervalle de temps entre deux positions est τ = 40 ms. 1. Décrire le mouvement du palet dans le référentiel de la table. 2. Calculer la valeur de sa vitesse en m·s⁻¹. 3. Que peut-on en déduire sur les forces qui s'exercent sur le palet ? Nommer ces forces. 4. Sur une table ordinaire, les distances entre positions diminuent. Interpréter.",
              hint: "Alignées signifie rectiligne, distances égales pendant des durées égales signifie uniforme. Pour la vitesse, v = d ÷ τ en unités du système international.",
              solution: [
                "1. Les positions sont alignées : le mouvement est rectiligne. Elles sont équidistantes pendant des durées égales : il est uniforme. Le mouvement est rectiligne uniforme.",
                "2. v = 0,024 m ÷ 0,040 s = 0,60 m·s⁻¹.",
                "3. D'après le principe d'inertie, les forces qui s'exercent sur le palet se compensent. Ce sont le poids P⃗ (vertical vers le bas) et l'action de l'air soufflé par la table, perpendiculaire à la table, vers le haut ; les frottements sont négligeables.",
                "4. Si les distances diminuent, le mouvement est ralenti : les forces ne se compensent plus. Une force de frottement, opposée au mouvement, apparaît : Δv⃗ est alors de sens opposé à la vitesse.",
                "Résultat : mouvement rectiligne uniforme à 0,60 m·s⁻¹, avec des forces qui se compensent.",
              ],
            },
            {
              level: 3,
              statement: "Une balle est lancée verticalement vers le haut. On néglige l'action de l'air. Une vidéo permet de mesurer la valeur de sa vitesse toutes les 0,10 s pendant la montée (données fictives) : 6,0 m·s⁻¹ ; 5,0 m·s⁻¹ ; 4,0 m·s⁻¹ ; 3,0 m·s⁻¹. 1. Quelle est la nature du mouvement de la balle pendant la montée ? 2. Justifier, sans calcul de force, que les forces exercées sur la balle ne se compensent pas. 3. Déterminer la direction et le sens du vecteur Δv⃗ entre deux mesures successives. En déduire la direction et le sens de la somme des forces, puis vérifier la cohérence avec l'hypothèse de chute libre. 4. Décrire le mouvement après le sommet et préciser le sens de Δv⃗. 5. Calculer la diminution de la vitesse pendant une seconde et comparer à la valeur de g.",
              hint: "Pendant la montée, la vitesse est dirigée vers le haut et sa valeur diminue. Le vecteur Δv⃗ est donc de sens opposé au mouvement.",
              solution: [
                "1. La trajectoire est une droite verticale et la vitesse diminue : le mouvement est rectiligne ralenti.",
                "2. Le mouvement n'est pas uniforme. D'après la contraposée du principe d'inertie, les forces ne se compensent pas.",
                "3. La vitesse est verticale vers le haut et diminue de 1,0 m·s⁻¹ toutes les 0,10 s : Δv⃗ est vertical, vers le bas, de valeur 1,0 m·s⁻¹. ΣF⃗ a la même direction et le même sens : verticale vers le bas. C'est bien le cas du poids, seule force en chute libre.",
                "4. Après le sommet, la balle redescend verticalement avec une vitesse qui augmente : mouvement rectiligne accéléré. Δv⃗ reste vertical et dirigé vers le bas, comme le poids.",
                "5. La vitesse diminue de 1,0 m·s⁻¹ en 0,10 s, soit 10 m·s⁻¹ en une seconde. Cette valeur est proche de g ≈ 9,8 N·kg⁻¹ (unité équivalente à m·s⁻²), ce qui conforte l'hypothèse de chute libre.",
                "Résultat : montée rectiligne ralentie puis descente accélérée, avec Δv⃗ toujours vertical vers le bas.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Le principe d'inertie bouscule les idées reçues.",
            statements: [
              { text: "Pour qu'un objet reste en mouvement, il faut qu'une force agisse sur lui dans le sens du mouvement.", true: false, why: "C'est l'idée d'Aristote. Selon le principe d'inertie, sans force (ou avec des forces qui se compensent), le mouvement rectiligne uniforme se poursuit." },
              { text: "Une voiture qui roule à vitesse constante en ligne droite est soumise à des forces qui se compensent.", true: true, why: "Mouvement rectiligne uniforme : la force motrice compense exactement les frottements." },
              { text: "Un satellite en orbite circulaire à vitesse constante est soumis à des forces qui se compensent.", true: false, why: "Sa trajectoire n'est pas rectiligne : la force d'attraction de la Terre n'est pas compensée." },
              { text: "Lors de la montée d'une balle lancée vers le haut, la somme des forces est dirigée vers le bas.", true: true, why: "En chute libre, seul le poids agit, toujours vers le bas, même pendant la montée." },
              { text: "Un objet immobile n'est soumis à aucune force.", true: false, why: "Il peut être soumis à plusieurs forces qui se compensent, comme un livre posé sur une table." },
              { text: "Si la somme des forces est dans le sens du mouvement, la vitesse augmente.", true: true, why: "Δv⃗ a le sens de ΣF⃗ : la vitesse augmente dans le sens du mouvement." },
            ],
          },
          quiz: [
            {
              q: "Un système est en mouvement rectiligne uniforme. On peut affirmer que :",
              options: ["les forces qui s'exercent sur lui se compensent", "aucune force ne s'exerce sur lui", "la force motrice est supérieure aux frottements", "son poids est nul"],
              answer: 0,
              why: "Principe d'inertie : mouvement rectiligne uniforme ⟺ forces qui se compensent. Cela ne signifie pas qu'il n'y a aucune force.",
            },
            {
              q: "Un cycliste freine en ligne droite. La somme des forces qui s'exercent sur lui est :",
              options: ["nulle", "dans le sens du mouvement", "opposée au mouvement", "perpendiculaire au mouvement"],
              answer: 2,
              why: "La vitesse diminue : Δv⃗ est opposé au mouvement, donc ΣF⃗ aussi.",
            },
            {
              q: "Quelle situation correspond à des forces qui ne se compensent pas ?",
              options: ["Un lustre immobile", "Un ascenseur qui monte à vitesse constante", "Un palet qui glisse en ligne droite à vitesse constante", "Un manège qui tourne à vitesse constante"],
              answer: 3,
              why: "La trajectoire du manège est circulaire, donc non rectiligne : les forces ne se compensent pas.",
            },
            {
              q: "Une bille est lâchée sans vitesse initiale (chute libre). Pendant sa chute, sa vitesse :",
              options: ["reste constante", "augmente", "diminue", "augmente puis devient constante"],
              answer: 1,
              why: "Seul le poids agit, dans le sens du mouvement : la vitesse augmente régulièrement. Elle ne devient constante que si les frottements de l'air ne sont plus négligeables.",
            },
            {
              q: "Entre deux instants voisins, le vecteur variation de vitesse Δv⃗ a toujours :",
              options: ["le sens du vecteur vitesse instantanée", "une valeur nulle", "le sens et la direction de ΣF⃗", "une direction verticale"],
              answer: 2,
              why: "Δv⃗ et la somme des forces ont même direction et même sens ; ce n'est pas forcément le sens de la vitesse (cas d'un freinage).",
            },
          ],
          trap: "Croire qu'une force est nécessaire pour entretenir un mouvement, ou que la somme des forces est dans le sens de la vitesse : elle est dans le sens de la variation de la vitesse Δv⃗, ce qui est différent lors d'un freinage ou d'une montée.",
          method: "Pour appliquer le principe d'inertie, examinez la trajectoire (est-elle rectiligne ?) puis la valeur de la vitesse (est-elle constante ?) ; les forces ne se compensent que si les deux réponses sont oui, ou si le système est immobile.",
        },
      ],
    },
    /* ================================================================== */
    /* ÉMISSION ET PERCEPTION D'UN SON                                      */
    /* ================================================================== */
    {
      id: 'sons',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'emission-propagation-son',
          title: "Émission et propagation d'un son",
          minutes: 30,
          objectives: [
            "Décrire le principe de l'émission d'un signal sonore par la mise en vibration d'un objet et l'intérêt d'une caisse de résonance.",
            "Expliquer le rôle joué par le milieu matériel dans la propagation d'un signal sonore.",
            "Citer une valeur approchée de la vitesse de propagation d'un signal sonore dans l'air et la comparer à d'autres vitesses.",
            "Mesurer et calculer la vitesse d'un signal sonore.",
          ],
          course: [
            {
              heading: "L'émission d'un son : un objet qui vibre",
              paragraphs: [
                "Tout son a pour origine la vibration d'un objet : la corde d'une guitare, la membrane d'un tambour ou d'un haut-parleur, les cordes vocales, la lame d'un diapason. Vibrer, c'est effectuer des allers-retours rapides autour d'une position d'équilibre. Si l'on pose un doigt sur la corde d'une guitare qui joue, la vibration s'arrête et le son disparaît.",
                "Une corde seule, très fine, ne met en mouvement qu'une petite quantité d'air : le son produit est faible. Dans une guitare ou un violon, la corde transmet sa vibration au chevalet puis à la caisse de résonance. Celle-ci, de grande surface, fait vibrer une quantité d'air bien plus importante : le son est amplifié. Le même principe explique qu'un diapason posé sur une table s'entende davantage que tenu à la main.",
              ],
              box: { label: "À retenir", text: "Un son est émis par un objet qui vibre. Une caisse de résonance amplifie le son en transmettant la vibration à une plus grande quantité d'air." },
            },
            {
              heading: "La propagation : une onde dans un milieu matériel",
              paragraphs: [
                "L'objet qui vibre comprime puis détend la couche d'air voisine, qui agit à son tour sur la suivante, et ainsi de suite : la perturbation se propage de proche en proche. Le son est une onde mécanique : c'est la propagation d'une perturbation dans un milieu matériel, sans transport de matière mais avec un transport d'énergie. L'air ne se déplace pas de la guitare jusqu'à l'oreille ; chaque couche d'air oscille sur place.",
                "Un son a besoin d'un milieu matériel (gaz, liquide ou solide) pour se propager : il ne se propage pas dans le vide. Si l'on place une sonnerie sous une cloche et que l'on pompe l'air, le son devient de plus en plus faible jusqu'à ne plus être entendu, alors que l'on voit toujours le marteau frapper. Dans l'espace, deux astronautes ne peuvent pas se parler sans radio, même très proches.",
                "Arrivée à l'oreille, l'onde fait vibrer le tympan ; cette vibration est transmise par les osselets à l'oreille interne (la cochlée), où des cellules ciliées la transforment en message nerveux interprété par le cerveau.",
              ],
              box: { label: "Définition", text: "Une onde sonore est la propagation d'une perturbation mécanique dans un milieu matériel, sans transport de matière mais avec transport d'énergie. Le son ne se propage pas dans le vide." },
            },
            {
              heading: "La vitesse de propagation du son",
              paragraphs: [
                "La vitesse de propagation d'un son est v = d ÷ Δt, où d est la distance parcourue (en m) et Δt la durée du parcours (en s). Dans l'air à température ambiante, elle vaut environ 340 m·s⁻¹ (343 m·s⁻¹ à 20 °C, un peu moins par temps froid). Elle est plus grande dans les liquides (environ 1 500 m·s⁻¹ dans l'eau) et encore plus dans la plupart des solides (de l'ordre de 5 000 m·s⁻¹ dans l'acier).",
                "Comparaison avec d'autres vitesses : un piéton avance à environ 1,4 m·s⁻¹ (5 km/h), un TGV à environ 89 m·s⁻¹ (320 km/h), un avion de ligne à environ 250 m·s⁻¹ (900 km/h). La lumière se propage à 3,00 × 10⁸ m·s⁻¹, près d'un million de fois plus vite que le son dans l'air. C'est pourquoi, lors d'un orage, on voit l'éclair avant d'entendre le tonnerre : la lumière arrive presque instantanément, le son met environ 3 s pour parcourir 1 km.",
                "Pour mesurer la vitesse du son au laboratoire, on place deux microphones alignés avec la source, séparés d'une distance d connue. Un dispositif d'acquisition (oscilloscope, carte d'acquisition, smartphone) enregistre le retard Δt entre l'arrivée du son sur le premier et sur le second microphone ; on calcule v = d ÷ Δt.",
              ],
              box: { label: "Formule", text: "v = d ÷ Δt, avec v en m·s⁻¹, d en m, Δt en s. Valeurs : environ 340 m·s⁻¹ dans l'air, 1 500 m·s⁻¹ dans l'eau, 5 000 m·s⁻¹ dans l'acier ; lumière : 3,00 × 10⁸ m·s⁻¹." },
            },
          ],
          keyPoints: [
            "Un son est produit par un objet qui vibre ; une caisse de résonance l'amplifie.",
            "Le son est une onde mécanique : perturbation qui se propage de proche en proche, sans transport de matière.",
            "Le son a besoin d'un milieu matériel : il ne se propage pas dans le vide.",
            "Vitesse du son : environ 340 m·s⁻¹ dans l'air, plus grande dans l'eau et dans les solides.",
            "v = d ÷ Δt ; la lumière (3,00 × 10⁸ m·s⁻¹) est environ un million de fois plus rapide que le son dans l'air.",
          ],
          example: {
            statement: "Pendant un orage, Nora compte 6,0 s entre l'éclair et le tonnerre. À quelle distance la foudre est-elle tombée ? On prendra v = 340 m·s⁻¹ pour le son dans l'air et on négligera la durée de propagation de la lumière.",
            solution: [
              "La lumière de l'éclair arrive presque instantanément : la durée mesurée est la durée de propagation du son.",
              "De v = d ÷ Δt, on tire d = v × Δt.",
              "d = 340 × 6,0 = 2 040 m.",
              "Résultat : la foudre est tombée à environ 2,0 km. Repère utile : environ 1 km toutes les 3 secondes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Face à une falaise, un randonneur crie et entend l'écho de sa voix 1,2 s plus tard. La vitesse du son dans l'air est de 340 m·s⁻¹. 1. Quelle distance le son a-t-il parcourue pendant ces 1,2 s ? 2. À quelle distance de la falaise se trouve le randonneur ?",
              hint: "L'écho est le son réfléchi par la falaise : il fait un aller et un retour.",
              solution: [
                "1. d = v × Δt = 340 × 1,2 = 408 m.",
                "2. Cette distance correspond à l'aller et au retour : la distance à la falaise est 408 ÷ 2 = 204 m.",
                "Résultat : le randonneur est à environ 204 m de la falaise.",
              ],
            },
            {
              level: 2,
              statement: "Pour mesurer la vitesse du son dans l'air, on place deux microphones alignés avec un haut-parleur, distants de d = 1,70 m. Une carte d'acquisition mesure un retard Δt = 5,0 ms entre les deux signaux reçus. 1. Calculer la vitesse du son dans l'air. 2. On refait l'expérience dans une cuve d'eau avec des capteurs adaptés, toujours séparés de 1,70 m ; la vitesse du son dans l'eau est d'environ 1 500 m·s⁻¹. Quel retard devrait-on mesurer ? 3. Pourquoi est-il préférable d'éloigner les deux microphones le plus possible ?",
              hint: "Convertissez 5,0 ms en secondes : 1 ms = 10⁻³ s.",
              solution: [
                "1. Δt = 5,0 ms = 5,0 × 10⁻³ s. v = d ÷ Δt = 1,70 ÷ 5,0 × 10⁻³ = 340 m·s⁻¹.",
                "2. Δt = d ÷ v = 1,70 ÷ 1 500 ≈ 1,1 × 10⁻³ s, soit environ 1,1 ms.",
                "3. Plus la distance est grande, plus le retard mesuré est grand : l'incertitude de lecture sur Δt représente alors une part plus faible de la mesure, qui est plus précise.",
                "Résultat : v = 340 m·s⁻¹ dans l'air ; retard d'environ 1,1 ms dans l'eau.",
              ],
            },
            {
              level: 3,
              statement: "Un agent frappe avec un marteau l'extrémité d'un rail d'acier rectiligne de 850 m de long (données fictives). Une personne placée à l'autre extrémité, l'oreille près du rail, entend deux sons successifs. Données : vitesse du son dans l'air 340 m·s⁻¹ ; dans l'acier 5 000 m·s⁻¹ ; vitesse de la lumière 3,00 × 10⁸ m·s⁻¹. 1. Expliquer pourquoi la personne entend deux sons. 2. Calculer la durée de propagation de chacun des deux sons. 3. En déduire l'intervalle de temps entre les deux sons entendus. 4. La personne voit aussi le marteau frapper le rail. Calculer la durée de propagation de la lumière et justifier qu'on peut considérer qu'elle voit le coup instantanément.",
              hint: "Le son se propage à la fois dans le rail et dans l'air, à des vitesses différentes. Utilisez Δt = d ÷ v pour chaque milieu.",
              solution: [
                "1. Le choc produit un son qui se propage dans deux milieux matériels : l'acier du rail et l'air. Les vitesses étant différentes, les deux sons n'arrivent pas en même temps.",
                "2. Dans l'acier : Δt₁ = 850 ÷ 5 000 = 0,17 s. Dans l'air : Δt₂ = 850 ÷ 340 = 2,5 s.",
                "3. Intervalle entre les deux sons : 2,5 - 0,17 ≈ 2,3 s. Le premier son entendu est celui transmis par le rail.",
                "4. Lumière : Δt₃ = 850 ÷ 3,00 × 10⁸ ≈ 2,8 × 10⁻⁶ s, soit quelques millionièmes de seconde : c'est négligeable devant les durées précédentes, la vision du coup est quasi instantanée.",
                "Résultat : premier son après 0,17 s, second après 2,5 s, soit environ 2,3 s d'écart.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le trajet d'une note de guitare, de la corde jusqu'au cerveau de l'auditeur.",
            items: [
              "La corde de la guitare est mise en vibration par le doigt",
              "La caisse de résonance vibre à son tour",
              "Les couches d'air voisines sont comprimées et détendues",
              "La perturbation se propage de proche en proche dans l'air",
              "Le tympan de l'auditeur se met à vibrer",
              "La cochlée transforme la vibration en message nerveux",
            ],
          },
          quiz: [
            {
              q: "Pourquoi n'entend-on aucun son dans le vide spatial ?",
              options: ["Parce que le froid y bloque les vibrations", "Parce qu'il n'y a aucun milieu matériel", "Parce que le son y va trop vite pour être perçu", "Parce que la lumière du Soleil couvre les sons"],
              answer: 1,
              why: "Le son est une onde mécanique : il a besoin d'un milieu matériel (gaz, liquide ou solide) pour se propager.",
            },
            {
              q: "La vitesse du son dans l'air à température ambiante vaut environ :",
              options: ["340 m·s⁻¹", "3,00 × 10⁸ m·s⁻¹", "34 m·s⁻¹", "1 500 m·s⁻¹"],
              answer: 0,
              why: "Environ 340 m·s⁻¹ dans l'air. 1 500 m·s⁻¹ est la valeur dans l'eau, 3,00 × 10⁸ m·s⁻¹ celle de la lumière.",
            },
            {
              q: "Lors de la propagation d'un son dans l'air :",
              options: ["l'air se déplace de la source jusqu'à l'oreille", "aucune énergie n'est transportée", "la lumière transporte le son", "l'énergie se propage sans transport d'air"],
              answer: 3,
              why: "Une onde transporte de l'énergie sans transport de matière : chaque couche d'air oscille autour de sa position.",
            },
            {
              q: "Le rôle de la caisse de résonance d'une guitare est :",
              options: ["de changer la note jouée", "de faire durer la vibration de la corde plus longtemps", "d'amplifier le son en faisant vibrer plus d'air", "de propager le son dans le vide"],
              answer: 2,
              why: "La caisse, de grande surface, met en mouvement une grande quantité d'air : le son est plus fort.",
            },
            {
              q: "Le son parcourt 1 020 m dans l'air (v = 340 m·s⁻¹) en :",
              options: ["3,0 s", "0,33 s", "30 s", "3,5 × 10⁵ s"],
              answer: 0,
              why: "Δt = d ÷ v = 1 020 ÷ 340 = 3,0 s.",
            },
          ],
          trap: "Penser que le son est un déplacement d'air de la source vers l'oreille, ou qu'il va plus vite dans l'air que dans l'eau : c'est une perturbation qui se transmet de proche en proche, et elle est plus rapide dans les liquides et les solides.",
          method: "Dans un calcul de vitesse, écrivez d'abord la relation v = d ÷ Δt, isolez la grandeur cherchée, convertissez les durées en secondes et les distances en mètres, puis vérifiez l'ordre de grandeur (environ 340 m·s⁻¹ pour le son dans l'air). Pour un écho, n'oubliez pas l'aller-retour.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'periode-frequence',
          title: "Signal sonore périodique : période, fréquence et hauteur",
          minutes: 30,
          objectives: [
            "Définir et déterminer la période et la fréquence d'un signal sonore à partir de sa représentation temporelle.",
            "Utiliser la relation entre période et fréquence : f = 1 ÷ T.",
            "Citer les domaines de fréquences des sons audibles, des infrasons et des ultrasons.",
            "Relier qualitativement la fréquence à la hauteur d'un son et la forme du signal à son timbre.",
          ],
          course: [
            {
              heading: "Signal périodique et période",
              paragraphs: [
                "Un microphone transforme un son en tension électrique, que l'on peut visualiser avec un oscilloscope, une carte d'acquisition ou un smartphone : on obtient la représentation temporelle du signal (la tension en fonction du temps). Un signal est périodique lorsqu'il se reproduit identique à lui-même à intervalles de temps réguliers. Le plus petit motif qui se répète s'appelle un motif élémentaire.",
                "La période T est la durée d'un motif élémentaire ; elle s'exprime en secondes (s), souvent en millisecondes (1 ms = 10⁻³ s) pour les sons. Pour la mesurer avec précision, on mesure la durée de plusieurs périodes, puis on divise par leur nombre : si 5 périodes durent 11,0 ms, alors T = 11,0 ÷ 5 = 2,20 ms. Sur un oscilloscope, la durée se lit en multipliant le nombre de divisions par la sensibilité horizontale (par exemple 1 ms/div).",
                "Un son dont le signal est sinusoïdal est appelé son pur ; c'est le cas, de façon approchée, du son d'un diapason. Les sons des instruments et de la voix sont périodiques mais non sinusoïdaux : ce sont des sons complexes.",
              ],
              box: { label: "Définition", text: "La période T d'un signal périodique est la durée de son motif élémentaire, en secondes. On la mesure sur plusieurs motifs pour gagner en précision." },
            },
            {
              heading: "La fréquence",
              paragraphs: [
                "La fréquence f d'un signal périodique est le nombre de motifs élémentaires reproduits par seconde. Elle s'exprime en hertz (Hz), du nom du physicien Heinrich Hertz : 1 Hz correspond à un motif par seconde. Période et fréquence sont liées par f = 1 ÷ T, avec f en Hz et T en s ; réciproquement, T = 1 ÷ f.",
                "Exemple : le la de référence des musiciens, le la₃ donné par un diapason, a une fréquence de 440 Hz. Sa période vaut T = 1 ÷ 440 ≈ 2,27 × 10⁻³ s, soit 2,27 ms. Un signal de période 4,0 ms a une fréquence de 1 ÷ (4,0 × 10⁻³) = 250 Hz.",
              ],
              box: { label: "Formule", text: "f = 1 ÷ T et T = 1 ÷ f, avec f en hertz (Hz) et T en secondes (s). Attention : convertir les millisecondes en secondes avant le calcul." },
            },
            {
              heading: "Hauteur et domaines de fréquences",
              paragraphs: [
                "La hauteur d'un son est la sensation qui permet de dire s'il est grave ou aigu. Elle est liée à la fréquence : plus la fréquence est élevée, plus le son est aigu ; plus elle est faible, plus il est grave. Une note jouée une octave au-dessus d'une autre a une fréquence double : le la₄ a une fréquence de 880 Hz.",
                "L'oreille humaine perçoit les sons de fréquence comprise entre environ 20 Hz et 20 000 Hz (20 kHz) : ce sont les sons audibles. La limite supérieure diminue avec l'âge. En dessous de 20 Hz, on parle d'infrasons (émis par exemple lors des séismes ou utilisés par les éléphants pour communiquer) ; au-dessus de 20 kHz, d'ultrasons (émis par les chauves-souris pour se repérer, utilisés en échographie médicale ou par les capteurs de recul des voitures).",
              ],
              box: { label: "Repère", text: "Infrasons : f < 20 Hz. Sons audibles : 20 Hz à 20 kHz. Ultrasons : f > 20 kHz. Plus f est grande, plus le son est aigu." },
            },
            {
              heading: "Le timbre",
              paragraphs: [
                "Une même note, jouée par une flûte puis par une guitare, a la même hauteur, donc la même fréquence ; pourtant, on reconnaît sans peine l'instrument. Cette qualité s'appelle le timbre. Elle est liée à la forme du signal : les deux enregistrements ont la même période mais des motifs de formes différentes.",
                "En résumé, trois caractéristiques décrivent un son perçu : la hauteur (liée à la fréquence), le timbre (lié à la forme du signal) et l'intensité sonore (liée à l'amplitude du signal), étudiée dans la leçon suivante.",
              ],
            },
          ],
          keyPoints: [
            "Période T : durée d'un motif élémentaire, en s ; mesurée sur plusieurs motifs.",
            "Fréquence f : nombre de motifs par seconde, en Hz ; f = 1 ÷ T.",
            "Plus la fréquence est grande, plus le son est aigu (hauteur).",
            "Audible : de 20 Hz à 20 kHz ; infrasons en dessous, ultrasons au-dessus.",
            "Timbre : lié à la forme du signal. Même note, instruments différents : même période, formes différentes.",
          ],
          example: {
            statement: "L'enregistrement d'un son montre 4 motifs élémentaires identiques sur une durée totale de 8,0 ms. Déterminer la période et la fréquence de ce son. Est-il audible ? Est-il plus aigu ou plus grave que le la₃ (440 Hz) ?",
            solution: [
              "Période : T = 8,0 ms ÷ 4 = 2,0 ms = 2,0 × 10⁻³ s.",
              "Fréquence : f = 1 ÷ T = 1 ÷ (2,0 × 10⁻³) = 500 Hz.",
              "500 Hz est compris entre 20 Hz et 20 kHz : le son est audible.",
              "500 Hz > 440 Hz : le son est un peu plus aigu que le la₃.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Calculer la fréquence d'un son de période T = 5,0 ms. 2. Calculer la période d'un son de fréquence f = 25 kHz. 3. Classer chacun de ces deux sons : infrason, son audible ou ultrason.",
              hint: "Convertissez : 5,0 ms = 5,0 × 10⁻³ s et 25 kHz = 25 × 10³ Hz.",
              solution: [
                "1. f = 1 ÷ T = 1 ÷ (5,0 × 10⁻³) = 200 Hz.",
                "2. T = 1 ÷ f = 1 ÷ (25 × 10³) = 4,0 × 10⁻⁵ s, soit 40 µs.",
                "3. 200 Hz est entre 20 Hz et 20 kHz : son audible. 25 kHz > 20 kHz : ultrason.",
                "Résultat : 200 Hz (audible) ; 4,0 × 10⁻⁵ s (ultrason).",
              ],
            },
            {
              level: 2,
              statement: "Un élève enregistre la note émise par une flûte à bec avec un oscilloscope réglé sur une sensibilité horizontale de 1 ms/div. Trois motifs élémentaires occupent exactement 7,5 divisions. 1. Déterminer la période du signal. 2. En déduire sa fréquence. 3. Ce son est-il plus aigu ou plus grave que le la₃ (440 Hz) ? 4. Pourquoi mesurer trois motifs plutôt qu'un seul ?",
              hint: "Durée = nombre de divisions × sensibilité horizontale ; divisez ensuite par le nombre de motifs.",
              solution: [
                "1. Durée de trois motifs : 7,5 div × 1 ms/div = 7,5 ms. T = 7,5 ÷ 3 = 2,5 ms = 2,5 × 10⁻³ s.",
                "2. f = 1 ÷ (2,5 × 10⁻³) = 400 Hz.",
                "3. 400 Hz < 440 Hz : le son est plus grave que le la₃.",
                "4. L'erreur de lecture sur le début et la fin est la même quelle que soit la durée mesurée ; rapportée à trois périodes, elle compte trois fois moins sur la valeur de T.",
                "Résultat : T = 2,5 ms, f = 400 Hz, son plus grave que le la₃.",
              ],
            },
            {
              level: 3,
              statement: "On enregistre la même note jouée par une flûte (enregistrement A) puis par une guitare (enregistrement B). Données mesurées (fictives) : A, 5 motifs élémentaires en 11,4 ms, signal presque sinusoïdal ; B, 3 motifs élémentaires en 6,8 ms, signal de forme complexe avec plusieurs bosses par motif. 1. Calculer la période puis la fréquence de chaque signal (trois chiffres significatifs). 2. Les deux instruments jouent-ils la même note ? Laquelle, sachant que le la₃ a pour fréquence 440 Hz ? 3. Quelle caractéristique du son permet de distinguer les deux instruments ? À quelle propriété du signal est-elle liée ? 4. Le guitariste joue ensuite la même note une octave plus haut. Quelle fréquence attend-on ?",
              hint: "Deux sons de même fréquence ont la même hauteur. Une octave plus haut correspond à une fréquence double.",
              solution: [
                "1. A : T = 11,4 ÷ 5 = 2,28 ms, f = 1 ÷ (2,28 × 10⁻³) ≈ 439 Hz. B : T = 6,8 ÷ 3 ≈ 2,27 ms, f = 1 ÷ (2,27 × 10⁻³) ≈ 441 Hz.",
                "2. Les deux fréquences sont égales à environ 440 Hz, aux incertitudes de mesure près : les deux instruments jouent la même note, le la₃, avec la même hauteur.",
                "3. Le timbre permet de distinguer les instruments. Il est lié à la forme du signal : presque sinusoïdal pour la flûte, plus complexe pour la guitare.",
                "4. Une octave plus haut, la fréquence double : environ 2 × 440 = 880 Hz (le la₄).",
                "Résultat : même note la₃ (environ 440 Hz), timbres différents ; 880 Hz à l'octave supérieure.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Période", right: "Durée d'un motif élémentaire, en secondes" },
              { left: "Fréquence", right: "Nombre de motifs par seconde, en hertz" },
              { left: "Hauteur", right: "Sensation de grave ou d'aigu, liée à la fréquence" },
              { left: "Timbre", right: "Qualité liée à la forme du signal" },
              { left: "Ultrason", right: "Son de fréquence supérieure à 20 kHz" },
              { left: "Infrason", right: "Son de fréquence inférieure à 20 Hz" },
            ],
          },
          quiz: [
            {
              q: "Un son a une période de 2,0 ms. Sa fréquence vaut :",
              options: ["0,5 Hz", "2 000 Hz", "500 Hz", "50 Hz"],
              answer: 2,
              why: "f = 1 ÷ T = 1 ÷ (2,0 × 10⁻³ s) = 500 Hz.",
            },
            {
              q: "Lequel de ces sons est inaudible pour l'être humain ?",
              options: ["Un son de 50 Hz", "Un son de 440 Hz", "Un son de 15 000 Hz", "Un son de 40 000 Hz"],
              answer: 3,
              why: "40 000 Hz = 40 kHz dépasse 20 kHz : c'est un ultrason.",
            },
            {
              q: "Si la fréquence d'un son augmente, ce son devient :",
              options: ["plus grave", "plus aigu", "plus fort", "plus lent"],
              answer: 1,
              why: "La hauteur est liée à la fréquence : une fréquence plus élevée donne un son plus aigu. L'intensité dépend de l'amplitude.",
            },
            {
              q: "Une flûte et un violon jouent la même note. Leurs signaux ont :",
              options: ["la même période et des formes différentes", "la même forme et des périodes différentes", "des périodes et des formes différentes", "la même forme et la même période"],
              answer: 0,
              why: "Même note, donc même fréquence et même période ; instruments différents, donc timbres et formes de signal différents.",
            },
            {
              q: "Pour mesurer précisément une période sur un oscillogramme, il vaut mieux :",
              options: ["mesurer un seul motif très vite", "mesurer plusieurs motifs puis diviser par leur nombre", "choisir le motif dont les maximums sont les plus hauts", "mesurer l'amplitude du signal"],
              answer: 1,
              why: "L'erreur de lecture est répartie sur plusieurs périodes : la précision sur T est meilleure.",
            },
          ],
          trap: "Oublier de convertir les millisecondes en secondes avant d'appliquer f = 1 ÷ T (on trouve alors 0,5 Hz au lieu de 500 Hz), ou confondre la hauteur (fréquence) avec l'intensité (amplitude).",
          method: "Sur une représentation temporelle, repérez deux points identiques du signal (deux maximums, par exemple) séparés par le plus grand nombre possible de motifs, mesurez la durée, divisez par le nombre de motifs, puis calculez f = 1 ÷ T en secondes et vérifiez que le résultat est plausible (quelques centaines de hertz pour une note de musique).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'intensite-sonore',
          title: "Intensité et niveau d'intensité sonore : protéger votre audition",
          minutes: 30,
          objectives: [
            "Relier qualitativement l'amplitude d'un signal sonore, l'intensité sonore et le niveau d'intensité sonore.",
            "Exploiter une échelle de niveaux d'intensité sonore.",
            "Citer les dangers inhérents à l'exposition sonore et les moyens de s'en protéger.",
          ],
          course: [
            {
              heading: "Amplitude et intensité sonore",
              paragraphs: [
                "Un son plus fort correspond à une vibration plus ample de la source et à un signal de plus grande amplitude sur l'enregistrement : quand on pince plus fort une corde de guitare, l'amplitude du signal augmente, sans que la période change. La grandeur physique qui traduit la « force » d'un son est l'intensité sonore, notée I.",
                "L'intensité sonore représente la puissance transportée par l'onde qui traverse une surface de 1 m² ; elle s'exprime en watts par mètre carré (W·m⁻²). Plus l'amplitude du signal est grande, plus l'intensité sonore est grande. L'intensité diminue lorsqu'on s'éloigne de la source, car l'énergie se répartit sur une surface de plus en plus grande.",
                "L'oreille humaine perçoit des intensités extrêmement différentes : le son le plus faible audible correspond à environ 10⁻¹² W·m⁻², le seuil de douleur à environ 1 W·m⁻², mille milliards de fois plus. Pour manipuler des nombres plus commodes, on utilise une autre grandeur : le niveau d'intensité sonore.",
              ],
              box: { label: "À retenir", text: "Plus l'amplitude du signal est grande, plus le son est fort : l'intensité sonore I (en W·m⁻²) et le niveau d'intensité sonore L (en dB) augmentent." },
            },
            {
              heading: "Le niveau d'intensité sonore et son échelle",
              paragraphs: [
                "Le niveau d'intensité sonore, noté L, s'exprime en décibels (dB) et se mesure avec un sonomètre (une application de smartphone en donne une estimation). Il est calculé à partir de l'intensité par une fonction mathématique, le logarithme décimal, que vous étudierez plus tard. Repères approximatifs : 0 dB au seuil d'audibilité, 30 dB pour un chuchotement, 60 dB pour une conversation, 80 dB pour une rue à fort trafic, 100 dB pour un marteau-piqueur proche, 105 à 110 dB dans un concert amplifié, 120 dB au seuil de douleur.",
                "L'échelle des décibels n'est pas proportionnelle à l'intensité. Lorsque l'intensité sonore est multipliée par 2, le niveau augmente de 3 dB seulement ; lorsqu'elle est multipliée par 10, il augmente de 10 dB. Ainsi, deux sources identiques de 70 dB chacune ne produisent pas 140 dB mais 73 dB ; dix sources identiques de 70 dB produisent 80 dB. Inversement, une augmentation de 10 dB correspond à une intensité dix fois plus grande.",
              ],
              box: { label: "Règle", text: "Intensité × 2 : niveau + 3 dB. Intensité × 10 : niveau + 10 dB. Les niveaux en décibels ne s'additionnent pas." },
            },
            {
              heading: "Les dangers du bruit et la protection de l'audition",
              paragraphs: [
                "Dans l'oreille interne, des cellules ciliées transforment les vibrations en messages nerveux. Une exposition à des niveaux élevés les abîme ; or, chez l'être humain, elles ne se régénèrent pas. Les conséquences sont la fatigue auditive (sensation d'oreilles bouchées après un concert), les acouphènes (sifflements ou bourdonnements persistants) et la surdité partielle ou totale, qui peut être définitive.",
                "Le danger dépend à la fois du niveau et de la durée d'exposition. Une exposition prolongée devient risquée à partir d'environ 80 à 85 dB ; au-delà, la durée tolérable diminue rapidement : selon la règle utilisée en prévention, chaque augmentation de 3 dB divise par deux la durée d'exposition acceptable. À partir de 120 dB, le son est douloureux et peut causer des lésions immédiates. En France, la réglementation impose aux lieux qui diffusent de la musique amplifiée de ne pas dépasser 102 dB(A) en moyenne sur 15 minutes.",
                "Pour se protéger : porter des bouchons d'oreilles ou un casque antibruit (ils réduisent le niveau perçu de 15 à 30 dB environ), s'éloigner des enceintes (en champ libre, doubler la distance à une source abaisse le niveau d'environ 6 dB), faire des pauses dans un endroit calme, limiter le volume et la durée d'écoute au casque.",
              ],
              box: { label: "À retenir", text: "Les lésions de l'oreille interne sont irréversibles. Le risque dépend du niveau et de la durée : danger à partir de 80 à 85 dB en exposition prolongée, douleur vers 120 dB." },
            },
          ],
          keyPoints: [
            "Amplitude du signal plus grande : son plus fort, intensité sonore I (W·m⁻²) plus grande.",
            "Niveau d'intensité sonore L en décibels (dB), mesuré au sonomètre ; 0 dB au seuil d'audibilité, environ 120 dB au seuil de douleur.",
            "Intensité × 2 : + 3 dB ; intensité × 10 : + 10 dB. Les décibels ne s'additionnent pas.",
            "Le danger dépend du niveau et de la durée ; + 3 dB divise par deux la durée d'exposition acceptable.",
            "Protection : bouchons, distance aux enceintes, pauses, volume limité. Les lésions de l'oreille interne sont définitives.",
          ],
          example: {
            statement: "Un scooter émet un bruit de niveau 80 dB pour un piéton placé à quelques mètres. Un second scooter identique démarre à côté du premier. Quel niveau d'intensité sonore mesure-t-on alors au même endroit ?",
            solution: [
              "Les deux scooters sont identiques et à la même distance : l'intensité sonore reçue est multipliée par 2.",
              "Quand l'intensité double, le niveau d'intensité sonore augmente de 3 dB.",
              "L = 80 + 3 = 83 dB.",
              "Résultat : environ 83 dB, et non 160 dB, car les niveaux en décibels ne s'additionnent pas.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici des niveaux d'intensité sonore mesurés (valeurs approximatives) : bibliothèque 35 dB ; salle de classe animée 70 dB ; tondeuse à gazon 90 dB ; concert amplifié 105 dB ; avion au décollage à proximité 130 dB. 1. Classer ces sons du moins fort au plus fort. 2. Lesquels présentent un risque en cas d'exposition prolongée ? 3. Lequel dépasse le seuil de douleur ?",
              hint: "Le risque apparaît vers 80 à 85 dB pour une exposition prolongée ; le seuil de douleur est d'environ 120 dB.",
              solution: [
                "1. Bibliothèque (35 dB) < salle de classe (70 dB) < tondeuse (90 dB) < concert (105 dB) < avion (130 dB).",
                "2. La tondeuse, le concert et l'avion dépassent 85 dB : ils présentent un risque en cas d'exposition prolongée.",
                "3. L'avion au décollage (130 dB) dépasse le seuil de douleur (environ 120 dB) : une lésion peut survenir immédiatement.",
                "Résultat : trois sources à risque, dont une au-delà du seuil de douleur.",
              ],
            },
            {
              level: 2,
              statement: "Dans un atelier, une machine produit un niveau d'intensité sonore de 70 dB au poste de travail. 1. Quel niveau mesure-t-on si l'on fait fonctionner deux machines identiques, à la même distance ? 2. Combien de machines identiques faut-il pour atteindre 80 dB ? 3. Quel niveau mesure-t-on avec 20 machines identiques ? 4. Un ouvrier affirme que deux machines produisent un niveau de 140 dB. Expliquer son erreur.",
              hint: "Utilisez les deux règles : intensité × 2 donne + 3 dB ; intensité × 10 donne + 10 dB. Vingt machines, c'est deux fois dix machines.",
              solution: [
                "1. Deux machines : intensité × 2, donc L = 70 + 3 = 73 dB.",
                "2. Pour gagner 10 dB, il faut multiplier l'intensité par 10 : il faut 10 machines.",
                "3. 20 machines : intensité × 10 (+ 10 dB) puis × 2 (+ 3 dB), soit L = 70 + 10 + 3 = 83 dB.",
                "4. Ce sont les intensités sonores (en W·m⁻²) qui s'additionnent, pas les niveaux en décibels. Doubler l'intensité ne fait gagner que 3 dB.",
                "Résultat : 73 dB pour deux machines, 10 machines pour 80 dB, 83 dB pour vingt machines.",
              ],
            },
            {
              level: 3,
              statement: "Document (règle utilisée en prévention des risques auditifs) : une exposition de 8 heures à 80 dB est considérée comme la limite à ne pas dépasser ; chaque fois que le niveau augmente de 3 dB, la durée d'exposition équivalente est divisée par deux. Lors d'un concert de 3 heures, le niveau mesuré près de la scène est de 98 dB. 1. Calculer la durée d'exposition équivalente à 98 dB. 2. Comparer à la durée du concert et conclure. 3. Un spectateur s'éloigne de la scène et double sa distance aux enceintes ; le niveau baisse alors d'environ 6 dB. Quelle durée est acceptable à sa nouvelle place ? 4. Un autre spectateur reste près de la scène mais porte des bouchons qui réduisent le niveau perçu de 20 dB. Est-il protégé pour tout le concert ? Justifier.",
              hint: "Comptez combien de fois 3 dB séparent 98 dB de 80 dB, puis divisez 8 heures par 2 autant de fois.",
              solution: [
                "1. 98 - 80 = 18 dB, soit 18 ÷ 3 = 6 augmentations de 3 dB. Durée : 8 h ÷ 2⁶ = 8 h ÷ 64 = 0,125 h = 7,5 min.",
                "2. Le concert dure 3 h = 180 min, soit 180 ÷ 7,5 = 24 fois la durée acceptable : l'exposition sans protection est dangereuse pour l'audition.",
                "3. Nouveau niveau : 98 - 6 = 92 dB, soit 12 dB au-dessus de 80 dB, c'est-à-dire 4 augmentations de 3 dB. Durée : 8 h ÷ 2⁴ = 0,5 h = 30 min. C'est mieux, mais encore insuffisant pour 3 h.",
                "4. Niveau perçu avec bouchons : 98 - 20 = 78 dB, inférieur à 80 dB : la durée acceptable dépasse 8 heures. Ce spectateur est protégé pendant tout le concert.",
                "Résultat : 7,5 min acceptables sans protection près de la scène, 30 min en s'éloignant, tout le concert avec des bouchons.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez les idées reçues sur les décibels et l'audition.",
            statements: [
              { text: "Deux instruments jouant chacun à 80 dB produisent ensemble 160 dB.", true: false, why: "L'intensité double : le niveau n'augmente que de 3 dB, soit 83 dB." },
              { text: "Un son de plus grande amplitude a un niveau d'intensité sonore plus élevé.", true: true, why: "L'amplitude du signal est liée à l'intensité sonore, donc au niveau en décibels." },
              { text: "Les cellules ciliées de l'oreille interne abîmées par le bruit repoussent après quelques semaines.", true: false, why: "Chez l'être humain, elles ne se régénèrent pas : la perte auditive est définitive." },
              { text: "Le risque pour l'audition dépend à la fois du niveau sonore et de la durée d'exposition.", true: true, why: "À niveau élevé, la durée acceptable diminue : + 3 dB divise par deux la durée tolérable." },
              { text: "Un niveau de 0 dB signifie qu'il n'y a aucun son.", true: false, why: "0 dB correspond au seuil d'audibilité : le son le plus faible que l'oreille perçoit, pas l'absence de son." },
              { text: "S'éloigner des enceintes lors d'un concert réduit le niveau sonore reçu.", true: true, why: "L'intensité diminue avec la distance : doubler la distance abaisse le niveau d'environ 6 dB en champ libre." },
              { text: "Une augmentation de 10 dB correspond à une intensité dix fois plus grande.", true: true, why: "C'est la règle de l'échelle des décibels : intensité × 10, niveau + 10 dB." },
            ],
          },
          quiz: [
            {
              q: "Le niveau d'intensité sonore se mesure avec :",
              options: ["un oscilloscope seul", "un dynamomètre", "un ampèremètre", "un sonomètre"],
              answer: 3,
              why: "Le sonomètre indique directement le niveau d'intensité sonore en décibels.",
            },
            {
              q: "L'intensité sonore reçue est multipliée par 10. Le niveau d'intensité sonore :",
              options: ["augmente de 10 dB", "est multiplié par 10", "augmente de 3 dB", "augmente de 100 dB"],
              answer: 0,
              why: "Intensité × 10 correspond à + 10 dB.",
            },
            {
              q: "Quelle valeur correspond approximativement au seuil de douleur ?",
              options: ["60 dB", "85 dB", "120 dB", "200 dB"],
              answer: 2,
              why: "Le seuil de douleur se situe vers 120 dB ; 85 dB est un ordre de grandeur du seuil de risque en exposition prolongée.",
            },
            {
              q: "Le niveau passe de 85 dB à 88 dB. La durée d'exposition acceptable est :",
              options: ["multipliée par deux", "divisée par deux", "inchangée", "divisée par trois"],
              answer: 1,
              why: "Selon la règle de prévention, chaque augmentation de 3 dB divise par deux la durée acceptable.",
            },
            {
              q: "Quel est le moyen le plus efficace pour protéger son audition pendant un long concert ?",
              options: ["Augmenter le volume de son casque", "Se placer au plus près des enceintes pour mieux entendre", "Porter des bouchons d'oreilles adaptés", "Boire beaucoup d'eau"],
              answer: 2,
              why: "Les bouchons réduisent le niveau perçu de 15 à 30 dB environ, ce qui allonge fortement la durée d'exposition acceptable.",
            },
          ],
          trap: "Additionner les décibels comme des nombres ordinaires (deux sources de 80 dB ne font pas 160 dB, mais 83 dB) ou croire qu'une gêne passagère après un concert est sans conséquence : les lésions s'accumulent et sont irréversibles.",
          method: "Pour raisonner sur des niveaux sonores, traduisez d'abord la situation en facteur multiplicatif sur l'intensité (× 2, × 10, × 20...), puis convertissez avec les deux règles (+ 3 dB et + 10 dB). Pour la durée d'exposition, comptez les tranches de 3 dB au-dessus de 80 dB et divisez 8 h par 2 autant de fois.",
        },
      ],
    },
    /* ================================================================== */
    /* VISION ET IMAGE                                                      */
    /* ================================================================== */
    {
      id: 'vision-image',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'propagation-spectres',
          title: "Propagation de la lumière et spectres",
          minutes: 30,
          objectives: [
            "Citer la valeur de la vitesse de la lumière dans le vide ou dans l'air et la comparer à d'autres vitesses.",
            "Caractériser un rayonnement monochromatique par sa longueur d'onde dans le vide ou dans l'air.",
            "Caractériser le spectre du rayonnement émis par un corps chaud.",
            "Exploiter un spectre de raies pour identifier une entité chimique.",
          ],
          course: [
            {
              heading: "La propagation de la lumière",
              paragraphs: [
                "Dans un milieu transparent et homogène (air, eau, verre), la lumière se propage en ligne droite. On modélise son trajet par un rayon lumineux, une droite munie d'une flèche qui indique le sens de propagation ; un ensemble de rayons forme un faisceau. La formation des ombres et le fonctionnement d'une chambre noire s'expliquent par cette propagation rectiligne.",
                "Contrairement au son, la lumière n'a pas besoin de milieu matériel : elle se propage aussi dans le vide, ce qui lui permet de nous parvenir du Soleil et des étoiles. Sa vitesse dans le vide vaut c = 3,00 × 10⁸ m·s⁻¹ (exactement 299 792 458 m·s⁻¹) ; dans l'air, elle est pratiquement la même. C'est la plus grande vitesse connue, environ un million de fois celle du son dans l'air.",
                "Même à cette vitesse, la lumière met un temps mesurable pour parcourir les distances astronomiques : environ 1,3 s depuis la Lune et environ 8 min 20 s depuis le Soleil, situé à 1,50 × 10¹¹ m. L'année-lumière, distance parcourue par la lumière dans le vide en une année, vaut environ 9,46 × 10¹⁵ m.",
              ],
              box: { label: "À retenir", text: "La lumière se propage en ligne droite dans un milieu transparent et homogène, et aussi dans le vide. Vitesse dans le vide (et dans l'air) : c = 3,00 × 10⁸ m·s⁻¹." },
            },
            {
              heading: "Lumière blanche, lumière colorée et longueur d'onde",
              paragraphs: [
                "La lumière blanche du Soleil ou d'une lampe est polychromatique : un prisme la décompose en une suite continue de couleurs allant du violet au rouge, son spectre. Une lumière qui ne peut pas être décomposée est monochromatique ; celle d'un laser en est un bon exemple.",
                "Un rayonnement monochromatique est caractérisé par sa longueur d'onde dans le vide (ou dans l'air), notée λ (lambda), exprimée le plus souvent en nanomètres (1 nm = 10⁻⁹ m). L'œil humain perçoit les rayonnements de longueur d'onde comprise entre environ 400 nm (violet) et 800 nm (rouge) : c'est le domaine visible. En dessous de 400 nm se trouvent les ultraviolets (UV), au-dessus de 800 nm les infrarouges (IR), invisibles pour nous.",
                "Repères dans le visible : violet vers 400 à 430 nm, bleu vers 430 à 490 nm, vert vers 490 à 570 nm, jaune vers 570 à 590 nm, orange vers 590 à 630 nm, rouge au-delà. Un pointeur laser rouge émet par exemple à 650 nm.",
              ],
              box: { label: "Repère", text: "Domaine visible : 400 nm ≤ λ ≤ 800 nm environ, du violet au rouge. UV : λ < 400 nm. IR : λ > 800 nm. 1 nm = 10⁻⁹ m." },
            },
            {
              heading: "Le spectre continu d'un corps chaud",
              paragraphs: [
                "Un corps dense chauffé (filament d'une lampe à incandescence, braise, métal en fusion, surface d'une étoile) émet de la lumière dont le spectre est continu : toutes les couleurs y sont présentes sans interruption, on parle de spectre continu d'origine thermique. Il ne dépend que de la température du corps, pas de sa nature chimique.",
                "Plus la température est élevée, plus le spectre s'enrichit vers le violet et plus la lumière émise est intense. Un morceau de fer que l'on chauffe devient d'abord rouge sombre, puis orange, puis jaune, et enfin blanc. De même, la couleur d'une étoile renseigne sur sa température de surface : une étoile rouge est plus froide qu'une étoile jaune comme le Soleil (surface à environ 5 500 °C), elle-même plus froide qu'une étoile bleutée.",
              ],
              box: { label: "Propriété", text: "Un corps chaud émet un spectre continu. Plus sa température est élevée, plus le spectre s'étend vers le violet et plus la lumière est intense." },
            },
            {
              heading: "Les spectres de raies",
              paragraphs: [
                "Un gaz sous faible pression, excité par une décharge électrique (lampe à vapeur de sodium, tube à hydrogène, néon) ou par une flamme, émet un spectre de raies : quelques raies colorées fines sur fond noir, chacune correspondant à un rayonnement monochromatique de longueur d'onde précise.",
                "Les longueurs d'onde des raies sont caractéristiques de l'entité chimique qui émet : c'est une véritable empreinte. L'hydrogène émet dans le visible des raies à 410, 434, 486 et 656 nm ; le sodium, un doublet jaune vers 589 nm ; le mercure, des raies à 405, 436, 546, 577 et 579 nm. Pour identifier un élément, on compare les longueurs d'onde mesurées à celles de spectres de référence : toutes les raies de l'élément doivent être présentes.",
                "Cette méthode permet d'analyser la composition de la matière à distance, en particulier celle des étoiles : c'est par la spectroscopie que l'on sait que le Soleil contient surtout de l'hydrogène et de l'hélium.",
              ],
              box: { label: "Définition", text: "Spectre de raies : raies fines de longueurs d'onde précises émises par un gaz sous faible pression excité. Ces longueurs d'onde caractérisent l'entité chimique émettrice." },
            },
          ],
          keyPoints: [
            "Propagation rectiligne dans un milieu transparent et homogène ; la lumière se propage aussi dans le vide.",
            "c = 3,00 × 10⁸ m·s⁻¹ dans le vide et dans l'air, environ un million de fois la vitesse du son dans l'air.",
            "Un rayonnement monochromatique est caractérisé par sa longueur d'onde λ ; visible de 400 à 800 nm environ.",
            "Corps chaud : spectre continu, qui s'étend vers le violet quand la température augmente.",
            "Gaz excité sous faible pression : spectre de raies, empreinte de l'entité chimique.",
          ],
          example: {
            statement: "La distance moyenne entre le Soleil et la Terre vaut d = 1,50 × 10¹¹ m. Calculer la durée mise par la lumière du Soleil pour nous parvenir, en secondes puis en minutes et secondes.",
            solution: [
              "La lumière se propage à c = 3,00 × 10⁸ m·s⁻¹ dans le vide. De c = d ÷ Δt, on tire Δt = d ÷ c.",
              "Δt = 1,50 × 10¹¹ ÷ 3,00 × 10⁸ = 5,00 × 10² s = 500 s.",
              "500 s = 8 × 60 s + 20 s.",
              "Résultat : la lumière du Soleil met environ 500 s, soit 8 min 20 s, pour nous parvenir. Nous voyons le Soleil tel qu'il était il y a un peu plus de 8 minutes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On considère cinq rayonnements monochromatiques de longueurs d'onde dans le vide : 300 nm ; 450 nm ; 580 nm ; 650 nm ; 1 200 nm. 1. Lesquels sont visibles ? 2. Donner la couleur approximative des rayonnements visibles. 3. Dans quel domaine se trouvent les autres ? 4. Convertir 650 nm en mètres.",
              hint: "Le domaine visible s'étend d'environ 400 nm à 800 nm, du violet au rouge.",
              solution: [
                "1. Sont visibles : 450 nm, 580 nm et 650 nm (compris entre 400 et 800 nm).",
                "2. 450 nm : bleu ; 580 nm : jaune ; 650 nm : rouge.",
                "3. 300 nm < 400 nm : ultraviolet. 1 200 nm > 800 nm : infrarouge.",
                "4. 650 nm = 650 × 10⁻⁹ m = 6,50 × 10⁻⁷ m.",
                "Résultat : trois rayonnements visibles (bleu, jaune, rouge), un UV et un IR.",
              ],
            },
            {
              level: 2,
              statement: "Le spectre de la lumière émise par une lampe inconnue présente des raies aux longueurs d'onde suivantes : 405 nm, 436 nm, 546 nm, 577 nm et 579 nm. Spectres de référence : hydrogène 410, 434, 486, 656 nm ; sodium 589,0 et 589,6 nm ; mercure 405, 436, 546, 577, 579 nm ; hélium 447, 471, 502, 588, 668, 706 nm. 1. De quel type de spectre s'agit-il ? Quelle information donne-t-il sur la source ? 2. Identifier l'élément présent dans la lampe en justifiant. 3. Pourquoi ne peut-il pas s'agir d'hydrogène, bien que deux raies (436 et 434 nm, 405 et 410 nm) soient proches ?",
              hint: "Pour identifier un élément, toutes ses raies de référence doivent se retrouver dans le spectre, aux mêmes longueurs d'onde.",
              solution: [
                "1. C'est un spectre de raies : la lampe contient un gaz sous faible pression excité, dont on peut identifier la nature chimique.",
                "2. Les cinq raies mesurées coïncident exactement avec les cinq raies de référence du mercure : la lampe contient de la vapeur de mercure.",
                "3. Les longueurs d'onde ne coïncident pas exactement (434 nm et 410 nm pour l'hydrogène contre 436 nm et 405 nm mesurées), et les raies de l'hydrogène à 486 nm et 656 nm sont absentes du spectre. Ce n'est donc pas de l'hydrogène.",
                "Résultat : la lampe est une lampe à vapeur de mercure.",
              ],
            },
            {
              level: 3,
              statement: "1. Depuis un observatoire, on envoie une impulsion laser vers un réflecteur déposé sur la Lune ; elle revient 2,56 s après son émission. Calculer la distance Terre-Lune (c = 3,00 × 10⁸ m·s⁻¹). 2. Dans la constellation d'Orion, l'étoile Bételgeuse apparaît rouge orangé et l'étoile Rigel blanc bleuté. Leurs spectres sont continus. Laquelle a la température de surface la plus élevée ? Justifier. 3. Le spectre de la lumière d'une étoile comporte aussi des raies dues à des éléments chimiques. Expliquer comment on peut ainsi connaître la composition d'une étoile sans s'y rendre. 4. On observe une étoile située à 4,2 années-lumière. Depuis combien de temps la lumière reçue a-t-elle été émise ?",
              hint: "Le laser fait un aller et un retour. Pour un corps chaud, plus la température est élevée, plus le spectre s'enrichit vers le violet et le bleu.",
              solution: [
                "1. Durée de l'aller : 2,56 ÷ 2 = 1,28 s. d = c × Δt = 3,00 × 10⁸ × 1,28 ≈ 3,84 × 10⁸ m, soit environ 384 000 km.",
                "2. Plus un corps chaud est chaud, plus son spectre s'étend vers le violet et le bleu. Rigel, blanc bleuté, a donc une température de surface plus élevée que Bételgeuse, rouge orangé.",
                "3. Chaque élément chimique a des raies de longueurs d'onde caractéristiques. En mesurant les longueurs d'onde des raies présentes dans la lumière de l'étoile et en les comparant à des spectres de référence obtenus au laboratoire, on identifie les éléments présents dans son atmosphère.",
                "4. Une année-lumière est la distance parcourue par la lumière en un an : la lumière reçue a été émise il y a 4,2 ans. On voit l'étoile telle qu'elle était à ce moment-là.",
                "Résultat : distance Terre-Lune ≈ 3,84 × 10⁸ m ; Rigel est la plus chaude ; lumière émise il y a 4,2 ans.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque longueur d'onde dans le vide au domaine ou à la couleur correspondante.",
            pairs: [
              { left: "250 nm", right: "Ultraviolet" },
              { left: "410 nm", right: "Violet" },
              { left: "470 nm", right: "Bleu" },
              { left: "530 nm", right: "Vert" },
              { left: "700 nm", right: "Rouge" },
              { left: "1 500 nm", right: "Infrarouge" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la valeur de la vitesse de la lumière dans le vide ?",
              options: ["3,00 × 10⁸ m·s⁻¹", "3,00 × 10⁸ km·s⁻¹", "340 m·s⁻¹", "3,00 × 10⁵ m·s⁻¹"],
              answer: 0,
              why: "c = 3,00 × 10⁸ m·s⁻¹, soit 300 000 km·s⁻¹. 340 m·s⁻¹ est la vitesse du son dans l'air.",
            },
            {
              q: "Un rayonnement de longueur d'onde 900 nm est :",
              options: ["visible, de couleur rouge", "infrarouge", "ultraviolet", "visible, de couleur violette"],
              answer: 1,
              why: "900 nm > 800 nm : ce rayonnement est dans l'infrarouge, invisible pour l'œil humain.",
            },
            {
              q: "On chauffe de plus en plus un morceau de métal. Sa lumière :",
              options: ["passe du blanc au rouge", "reste de la même couleur", "devient un spectre de raies", "passe du rouge au blanc"],
              answer: 3,
              why: "Quand la température augmente, le spectre continu s'enrichit vers le violet : la couleur passe du rouge sombre à l'orange, au jaune puis au blanc.",
            },
            {
              q: "Le spectre d'une lampe à vapeur de sodium est :",
              options: ["un spectre continu", "un spectre continu limité au rouge", "un spectre de raies", "un spectre sans aucune couleur"],
              answer: 2,
              why: "Un gaz sous faible pression excité émet un spectre de raies ; le sodium donne un doublet jaune vers 589 nm.",
            },
            {
              q: "Le spectre continu d'un corps chaud dépend principalement :",
              options: ["de sa nature chimique", "de sa masse", "de sa forme", "de sa température"],
              answer: 3,
              why: "Le spectre continu d'origine thermique ne dépend que de la température ; ce sont les spectres de raies qui renseignent sur la nature chimique.",
            },
          ],
          trap: "Confondre spectre continu et spectre de raies : le spectre continu renseigne sur la température d'un corps chaud, le spectre de raies sur la nature chimique d'un gaz. Autre erreur : oublier la conversion 1 nm = 10⁻⁹ m.",
          method: "Pour identifier un élément à partir d'un spectre de raies, dressez un tableau : dans une colonne les longueurs d'onde mesurées, dans les autres celles de chaque référence ; un élément n'est retenu que si toutes ses raies se retrouvent, aux incertitudes près.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'refraction-dispersion',
          title: "Réfraction et dispersion : la loi de Snell-Descartes",
          minutes: 35,
          objectives: [
            "Exploiter les lois de Snell-Descartes pour la réflexion et la réfraction.",
            "Définir l'indice optique d'un milieu matériel et le relier à la vitesse de la lumière dans ce milieu.",
            "Déterminer l'indice de réfraction d'un milieu à partir d'une série de mesures.",
            "Expliquer qualitativement la dispersion de la lumière blanche par un prisme et le rôle de l'indice optique.",
          ],
          course: [
            {
              heading: "Réflexion et réfraction à la surface de séparation de deux milieux",
              paragraphs: [
                "Lorsqu'un rayon lumineux arrive sur la surface qui sépare deux milieux transparents (air et eau, par exemple), appelée dioptre, une partie de la lumière est renvoyée dans le premier milieu : c'est la réflexion. Une autre partie traverse la surface en changeant de direction : c'est la réfraction. C'est la réfraction qui fait paraître « cassée » une paille plongée dans un verre d'eau.",
                "Pour décrire ces phénomènes, on trace la normale, droite perpendiculaire au dioptre au point d'incidence I. Les angles se mesurent toujours par rapport à la normale, jamais par rapport à la surface : i₁ est l'angle d'incidence, r l'angle de réflexion, i₂ l'angle de réfraction. Le plan qui contient le rayon incident et la normale s'appelle le plan d'incidence.",
              ],
              box: { label: "Loi de la réflexion", text: "Le rayon réfléchi est dans le plan d'incidence, et l'angle de réflexion est égal à l'angle d'incidence : r = i₁." },
            },
            {
              heading: "L'indice optique et la loi de Snell-Descartes",
              paragraphs: [
                "La lumière se propage moins vite dans un milieu matériel que dans le vide. L'indice optique (ou indice de réfraction) d'un milieu est défini par n = c ÷ v, où c est la vitesse de la lumière dans le vide et v sa vitesse dans le milieu. C'est un nombre sans unité, toujours supérieur ou égal à 1. Valeurs usuelles : air 1,00 ; eau 1,33 ; verre courant environ 1,5 ; diamant 2,42. Dans l'eau, la lumière se propage à v = 3,00 × 10⁸ ÷ 1,33 ≈ 2,26 × 10⁸ m·s⁻¹.",
                "La loi de la réfraction a été établie au XVIIᵉ siècle par le Néerlandais Willebrord Snell, puis publiée par René Descartes dans La Dioptrique en 1637. Le rayon réfracté est dans le plan d'incidence, et les angles vérifient n₁ × sin i₁ = n₂ × sin i₂, où n₁ est l'indice du milieu d'incidence et n₂ celui du milieu de réfraction.",
                "Conséquences : si la lumière passe dans un milieu plus réfringent (n₂ > n₁, par exemple de l'air vers l'eau), le rayon réfracté se rapproche de la normale (i₂ < i₁). Si elle passe dans un milieu moins réfringent, il s'en écarte. Un rayon qui arrive perpendiculairement au dioptre (i₁ = 0°) n'est pas dévié.",
              ],
              box: { label: "Formule", text: "Indice optique : n = c ÷ v (sans unité, n ≥ 1). Loi de Snell-Descartes pour la réfraction : n₁ × sin i₁ = n₂ × sin i₂, les angles étant mesurés par rapport à la normale." },
            },
            {
              heading: "Mesurer un indice de réfraction",
              paragraphs: [
                "Pour tester la loi de Snell-Descartes et mesurer l'indice d'un milieu, on envoie un fin faisceau laser sur un demi-cylindre de plexiglas posé sur un disque gradué, et l'on relève plusieurs couples (i₁ ; i₂) en faisant varier l'angle d'incidence. Si la lumière passe de l'air (n₁ = 1,00) au plexiglas, la loi s'écrit sin i₁ = n₂ × sin i₂.",
                "En traçant sin i₁ en fonction de sin i₂, on obtient des points alignés sur une droite passant par l'origine : la loi est vérifiée, et le coefficient directeur de cette droite est égal à l'indice n₂. On peut aussi calculer le rapport sin i₁ ÷ sin i₂ pour chaque mesure et en faire la moyenne. Attention : la calculatrice doit être réglée en degrés.",
              ],
            },
            {
              heading: "La dispersion de la lumière blanche",
              paragraphs: [
                "L'indice d'un milieu transparent comme le verre dépend légèrement de la longueur d'onde de la lumière : il est un peu plus grand pour le violet que pour le rouge. À la traversée d'un prisme, chaque radiation est donc réfractée différemment : le violet est plus dévié que le rouge. La lumière blanche, composée de toutes ces radiations, est ainsi étalée en un spectre continu : c'est la dispersion.",
                "Newton a montré vers 1666 qu'un prisme décompose la lumière blanche et qu'un second prisme peut recomposer les couleurs : la lumière blanche est un mélange de lumières colorées. L'arc-en-ciel résulte de la dispersion de la lumière du Soleil par les gouttes de pluie. Un réseau (surface finement striée, comme celle d'un CD) disperse lui aussi la lumière, par un autre phénomène.",
              ],
              box: { label: "À retenir", text: "Dispersion : l'indice du verre dépend de la longueur d'onde (plus grand pour le violet). Le prisme dévie plus le violet que le rouge et étale la lumière blanche en un spectre." },
            },
          ],
          keyPoints: [
            "Les angles se mesurent par rapport à la normale au dioptre.",
            "Réflexion : r = i₁. Réfraction : n₁ × sin i₁ = n₂ × sin i₂, rayons dans le plan d'incidence.",
            "Indice optique n = c ÷ v, sans unité, n ≥ 1 : air 1,00 ; eau 1,33 ; verre environ 1,5.",
            "Vers un milieu plus réfringent, le rayon se rapproche de la normale.",
            "Dispersion : n dépend de λ ; un prisme dévie plus le violet que le rouge et décompose la lumière blanche.",
          ],
          example: {
            statement: "Un rayon lumineux passe de l'air (n₁ = 1,00) dans l'eau (n₂ = 1,33) avec un angle d'incidence i₁ = 40°. Calculer l'angle de réfraction i₂ et l'angle de réflexion r.",
            solution: [
              "Loi de Snell-Descartes : n₁ × sin i₁ = n₂ × sin i₂, donc sin i₂ = n₁ × sin i₁ ÷ n₂.",
              "sin i₂ = 1,00 × sin 40° ÷ 1,33 ≈ 0,643 ÷ 1,33 ≈ 0,483.",
              "i₂ = arcsin(0,483) ≈ 28,9° (touche sin⁻¹ de la calculatrice, en mode degrés).",
              "Vérification : i₂ < i₁, le rayon se rapproche de la normale en entrant dans l'eau, plus réfringente que l'air.",
              "Loi de la réflexion : r = i₁ = 40°.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un rayon lumineux passe de l'air (n₁ = 1,00) dans un bloc de verre d'indice n₂ = 1,50, avec un angle d'incidence de 30°. 1. Quel est l'angle de réflexion ? 2. Calculer l'angle de réfraction. 3. Calculer la vitesse de la lumière dans ce verre (c = 3,00 × 10⁸ m·s⁻¹).",
              hint: "sin 30° = 0,5. Pour la vitesse, utilisez la définition de l'indice : n = c ÷ v.",
              solution: [
                "1. r = i₁ = 30°.",
                "2. sin i₂ = 1,00 × sin 30° ÷ 1,50 = 0,500 ÷ 1,50 ≈ 0,333, donc i₂ ≈ 19,5°.",
                "3. v = c ÷ n = 3,00 × 10⁸ ÷ 1,50 = 2,00 × 10⁸ m·s⁻¹.",
                "Résultat : r = 30°, i₂ ≈ 19,5°, v = 2,00 × 10⁸ m·s⁻¹.",
              ],
            },
            {
              level: 2,
              statement: "Pour déterminer l'indice d'un bloc de plexiglas, un élève envoie un faisceau laser depuis l'air (n₁ = 1,00) et relève : i₁ = 20°, i₂ = 13,2° ; i₁ = 40°, i₂ = 25,4° ; i₁ = 60°, i₂ = 35,3°. 1. Calculer, pour chaque mesure, le rapport sin i₁ ÷ sin i₂ (trois chiffres significatifs). 2. Ces mesures vérifient-elles la loi de Snell-Descartes ? En déduire l'indice du plexiglas. 3. Quelle courbe faudrait-il tracer pour exploiter graphiquement ces mesures, et quelle allure attend-on ?",
              hint: "Si la loi est vérifiée, sin i₁ = n₂ × sin i₂ : le rapport sin i₁ ÷ sin i₂ doit être constant et égal à n₂.",
              solution: [
                "1. sin 20° ÷ sin 13,2° ≈ 0,342 ÷ 0,228 ≈ 1,50. sin 40° ÷ sin 25,4° ≈ 0,643 ÷ 0,429 ≈ 1,50. sin 60° ÷ sin 35,3° ≈ 0,866 ÷ 0,578 ≈ 1,50.",
                "2. Le rapport est constant aux erreurs de mesure près : la loi sin i₁ = n₂ × sin i₂ est vérifiée, avec n₂ ≈ 1,50.",
                "3. On trace sin i₁ en fonction de sin i₂ : on attend des points alignés sur une droite passant par l'origine, de coefficient directeur égal à n₂ ≈ 1,50.",
                "Résultat : l'indice du plexiglas vaut environ 1,50.",
              ],
            },
            {
              level: 3,
              statement: "Un faisceau de lumière blanche arrive depuis l'air (n = 1,00) sur la face d'entrée d'un prisme de verre, avec un angle d'incidence de 45°. Pour ce verre, l'indice vaut 1,51 pour une radiation rouge (λ = 700 nm) et 1,53 pour une radiation violette (λ = 400 nm). 1. Calculer l'angle de réfraction dans le verre pour la radiation rouge, puis pour la radiation violette (au centième de degré). 2. Laquelle des deux radiations est la plus déviée à l'entrée du prisme ? Justifier. 3. Calculer la vitesse de chacune de ces radiations dans le verre (c = 3,00 × 10⁸ m·s⁻¹). 4. Expliquer pourquoi la lumière blanche sort du prisme étalée en un spectre.",
              hint: "La radiation la plus déviée est celle dont le rayon réfracté se rapproche le plus de la normale, c'est-à-dire celle qui a le plus petit angle de réfraction.",
              solution: [
                "1. Rouge : sin i₂ = sin 45° ÷ 1,51 ≈ 0,7071 ÷ 1,51 ≈ 0,4683, donc i₂ ≈ 27,92°. Violet : sin i₂ = 0,7071 ÷ 1,53 ≈ 0,4622, donc i₂ ≈ 27,53°.",
                "2. L'angle de réfraction du violet est plus petit : son rayon se rapproche davantage de la normale et s'écarte plus de la direction incidente. Le violet est donc plus dévié que le rouge, car l'indice du verre est plus grand pour le violet.",
                "3. Rouge : v = 3,00 × 10⁸ ÷ 1,51 ≈ 1,99 × 10⁸ m·s⁻¹. Violet : v = 3,00 × 10⁸ ÷ 1,53 ≈ 1,96 × 10⁸ m·s⁻¹. Le violet se propage un peu moins vite dans le verre.",
                "4. Chaque radiation de la lumière blanche a un indice différent, donc une déviation différente ; à la sortie du prisme, une seconde réfraction accentue cet écart. Les radiations se séparent et forment un spectre continu, du rouge (le moins dévié) au violet (le plus dévié).",
                "Résultat : 27,92° pour le rouge, 27,53° pour le violet ; le violet est le plus dévié.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour calculer un angle de réfraction.",
            items: [
              "Tracer la normale au dioptre au point d'incidence",
              "Mesurer l'angle d'incidence i₁ par rapport à la normale",
              "Écrire la loi n₁ × sin i₁ = n₂ × sin i₂",
              "Isoler sin i₂ = n₁ × sin i₁ ÷ n₂ et le calculer",
              "Obtenir i₂ avec la touche sin⁻¹ de la calculatrice en degrés",
              "Vérifier le sens de la déviation à l'aide des indices",
            ],
          },
          quiz: [
            {
              q: "Les angles d'incidence et de réfraction se mesurent par rapport :",
              options: ["à la surface de séparation", "à la normale au dioptre", "au rayon réfléchi", "à l'horizontale"],
              answer: 1,
              why: "Par convention, tous les angles sont mesurés entre le rayon et la normale au point d'incidence.",
            },
            {
              q: "La lumière se propage à 2,00 × 10⁸ m·s⁻¹ dans un verre. L'indice de ce verre vaut :",
              options: ["0,67", "2,00", "1,50", "6,00"],
              answer: 2,
              why: "n = c ÷ v = 3,00 × 10⁸ ÷ 2,00 × 10⁸ = 1,50.",
            },
            {
              q: "Un rayon passe de l'air dans l'eau. Le rayon réfracté :",
              options: ["se rapproche de la normale", "s'écarte de la normale", "n'est jamais dévié", "est toujours réfléchi en totalité"],
              answer: 0,
              why: "L'eau (1,33) est plus réfringente que l'air (1,00) : n₁ × sin i₁ = n₂ × sin i₂ impose i₂ < i₁.",
            },
            {
              q: "Dans la dispersion de la lumière blanche par un prisme, la couleur la plus déviée est :",
              options: ["le rouge", "le vert", "le jaune orangé", "le violet"],
              answer: 3,
              why: "L'indice du verre est plus grand pour les courtes longueurs d'onde : le violet est le plus dévié.",
            },
            {
              q: "Un rayon arrive perpendiculairement à la surface d'un bloc de verre (i₁ = 0°). Il :",
              options: ["traverse sans être dévié", "est dévié vers la gauche", "se décompose en spectre", "est entièrement absorbé"],
              answer: 0,
              why: "Si i₁ = 0°, alors sin i₂ = 0 et i₂ = 0° : le rayon n'est pas dévié.",
            },
          ],
          trap: "Mesurer les angles à partir de la surface au lieu de la normale, ou oublier de régler la calculatrice en degrés : le calcul de sin i₂ donne alors un résultat faux, parfois supérieur à 1.",
          method: "Avant tout calcul, faites un schéma avec la normale en pointillés, repérez quel milieu est le plus réfringent et prévoyez si le rayon va se rapprocher ou s'écarter de la normale ; vérifiez ensuite que votre résultat est cohérent avec cette prévision.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'lentilles-oeil',
          title: "Lentilles convergentes, images et modèle de l'œil",
          minutes: 35,
          objectives: [
            "Caractériser les foyers d'une lentille mince convergente à l'aide du modèle du rayon lumineux.",
            "Déterminer graphiquement la position, la taille et le sens de l'image réelle d'un objet plan réel donnée par une lentille mince convergente.",
            "Définir et déterminer géométriquement un grandissement.",
            "Modéliser l'œil et mettre en correspondance le modèle de l'œil réduit avec l'œil réel.",
          ],
          course: [
            {
              heading: "La lentille mince convergente",
              paragraphs: [
                "Une lentille est un objet transparent (verre, plastique) limité par deux faces dont l'une au moins est bombée. Une lentille convergente a des bords plus minces que son centre ; elle fait converger un faisceau de lumière parallèle. On la représente par un segment vertical terminé par deux flèches dirigées vers l'extérieur. Son centre est le centre optique O ; la droite perpendiculaire à la lentille passant par O est l'axe optique.",
                "Un faisceau parallèle à l'axe optique converge, après la lentille, en un point de l'axe appelé foyer image F'. Le foyer objet F est le symétrique de F' par rapport à O. La distance focale f' = OF' s'exprime en mètres ; plus elle est petite, plus la lentille est convergente. Pour la mesurer simplement, on forme sur un écran l'image d'un objet très éloigné (une fenêtre, un paysage) : l'image se forme quasiment dans le plan du foyer image.",
              ],
              box: { label: "Définition", text: "Lentille mince convergente : centre optique O, axe optique, foyer image F' (où convergent les rayons parallèles à l'axe), foyer objet F symétrique de F' par rapport à O. Distance focale f' = OF', en mètres." },
            },
            {
              heading: "Construire l'image d'un objet",
              paragraphs: [
                "Pour construire l'image A'B' d'un objet AB perpendiculaire à l'axe optique (A sur l'axe), on trace à partir du point B deux des trois rayons particuliers. 1) Le rayon qui passe par le centre optique O n'est pas dévié. 2) Le rayon qui arrive parallèlement à l'axe optique ressort en passant par le foyer image F'. 3) Le rayon qui passe par le foyer objet F ressort parallèlement à l'axe optique.",
                "L'image B' de B est à l'intersection des rayons émergents. L'image A' de A est sur l'axe optique, à la verticale de B' : l'image est elle aussi perpendiculaire à l'axe. Lorsque l'objet est situé avant le foyer objet F, les rayons émergents se croisent réellement : l'image est réelle, on peut l'observer sur un écran, et elle est renversée.",
                "Plus l'objet se rapproche de F, plus l'image s'éloigne de la lentille et plus elle est grande. Si l'objet est à une distance égale à 2f' de la lentille, l'image est à 2f' de l'autre côté, de même taille. Si l'objet est entre F et O, il n'y a pas d'image réelle : la lentille fonctionne alors comme une loupe.",
              ],
              box: { label: "Méthode", text: "Trois rayons issus de B : par O sans déviation ; parallèle à l'axe puis par F' ; par F puis parallèle à l'axe. Deux suffisent, le troisième sert de vérification." },
            },
            {
              heading: "Le grandissement",
              paragraphs: [
                "On oriente l'axe optique dans le sens de propagation de la lumière et la verticale vers le haut, et l'on utilise des mesures algébriques (positives ou négatives) : OA est négatif pour un objet placé avant la lentille, OA' est positif pour une image réelle, A'B' est négatif pour une image renversée.",
                "Le grandissement est γ = A'B' ÷ AB (sans unité). Les triangles OAB et OA'B' sont semblables, car les points B, O et B' sont alignés : d'après le théorème de Thalès, on a aussi γ = OA' ÷ OA. Si |γ| > 1, l'image est plus grande que l'objet ; si |γ| < 1, elle est plus petite ; si γ < 0, elle est renversée.",
              ],
              box: { label: "Formule", text: "γ = A'B' ÷ AB = OA' ÷ OA (mesures algébriques). γ < 0 : image renversée ; |γ| > 1 : image agrandie ; |γ| < 1 : image réduite." },
            },
            {
              heading: "Le modèle de l'œil réduit",
              paragraphs: [
                "L'œil forme sur la rétine une image réelle et renversée des objets observés ; le cerveau la redresse. Dans le modèle de l'œil réduit, l'iris est modélisé par un diaphragme (son ouverture, la pupille, règle la quantité de lumière qui entre), l'ensemble cornée et cristallin par une lentille mince convergente, et la rétine par un écran placé à une distance fixe de la lentille, d'environ 17 mm dans ce modèle.",
                "Pour un objet très éloigné, l'image se forme au foyer image : un œil normal au repos a donc une distance focale égale à la distance lentille-rétine. Quand l'objet se rapproche, l'image devrait se former derrière la rétine ; comme la distance lentille-rétine ne peut pas changer, c'est le cristallin qui se bombe et devient plus convergent (sa distance focale diminue) pour que l'image reste nette sur la rétine. C'est l'accommodation.",
              ],
              box: { label: "Repère", text: "Œil réel et modèle : iris et pupille, diaphragme ; cornée et cristallin, lentille convergente ; rétine, écran. Accommodation : le cristallin se bombe pour voir net de près." },
            },
          ],
          keyPoints: [
            "Lentille convergente : bords minces, foyer image F' où convergent les rayons parallèles à l'axe, distance focale f' = OF'.",
            "Rayons utiles : par O sans déviation ; parallèle à l'axe puis par F' ; par F puis parallèle à l'axe.",
            "Objet réel situé avant F : image réelle et renversée, observable sur un écran.",
            "Grandissement γ = A'B' ÷ AB = OA' ÷ OA ; γ < 0 signifie image renversée.",
            "Œil réduit : diaphragme (iris), lentille convergente (cristallin), écran (rétine) ; l'accommodation modifie la distance focale.",
          ],
          example: {
            statement: "Un objet AB de hauteur 2,0 cm est placé à 6,0 cm avant une lentille convergente de distance focale f' = 4,0 cm, A étant sur l'axe. La construction à l'échelle 1 donne une image située à 12,0 cm après la lentille. Déterminer le grandissement, la taille et le sens de l'image.",
            solution: [
              "Mesures algébriques (axe orienté dans le sens de la lumière) : OA = -6,0 cm et OA' = +12,0 cm.",
              "Grandissement : γ = OA' ÷ OA = 12,0 ÷ (-6,0) = -2,0.",
              "Taille de l'image : A'B' = γ × AB = -2,0 × 2,0 = -4,0 cm.",
              "γ < 0 : l'image est renversée ; |γ| = 2,0 : elle est deux fois plus grande que l'objet.",
              "Résultat : image réelle, renversée, de 4,0 cm de hauteur, située à 12,0 cm après la lentille.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un objet AB de hauteur 4,0 cm est placé devant une lentille convergente de distance focale 10 cm. On obtient une image nette sur un écran ; les mesures algébriques valent OA = -30 cm et OA' = +15 cm. 1. L'image est-elle réelle ? Justifier. 2. Calculer le grandissement. 3. En déduire la taille et le sens de l'image.",
              hint: "Une image observable sur un écran est réelle. Utilisez γ = OA' ÷ OA puis A'B' = γ × AB.",
              solution: [
                "1. L'image est observée sur un écran : elle est réelle.",
                "2. γ = OA' ÷ OA = 15 ÷ (-30) = -0,50.",
                "3. A'B' = γ × AB = -0,50 × 4,0 = -2,0 cm : l'image est renversée et deux fois plus petite que l'objet.",
                "Résultat : γ = -0,50, image réelle, renversée, de 2,0 cm de hauteur.",
              ],
            },
            {
              level: 2,
              statement: "Une lentille convergente a une distance focale f' = 5,0 cm. Un objet AB de hauteur 2,0 cm est placé perpendiculairement à l'axe, A sur l'axe, à 15,0 cm avant la lentille. 1. Décrire, étape par étape, la construction graphique de l'image A'B' à l'échelle 1 en utilisant deux rayons issus de B. 2. La construction donne OA' = +7,5 cm. Calculer le grandissement et la taille de l'image. 3. Vérifier que le troisième rayon particulier passe bien par B'.",
              hint: "Placez O, F' à 5,0 cm après O et F à 5,0 cm avant O, puis tracez le rayon passant par O et le rayon parallèle à l'axe.",
              solution: [
                "1. On trace l'axe optique et la lentille ; on place O, F' (5,0 cm après O) et F (5,0 cm avant O). On place A à 15,0 cm avant O et B à 2,0 cm au-dessus de A. Rayon 1 : de B, une droite passant par O, non déviée. Rayon 2 : de B, un rayon parallèle à l'axe jusqu'à la lentille, qui ressort en passant par F'. B' est à l'intersection des deux rayons émergents ; A' est sur l'axe, à la verticale de B'.",
                "2. OA = -15,0 cm ; γ = OA' ÷ OA = 7,5 ÷ (-15,0) = -0,50. A'B' = -0,50 × 2,0 = -1,0 cm : image renversée de 1,0 cm de hauteur.",
                "3. Rayon 3 : de B, on trace la droite passant par F jusqu'à la lentille ; il ressort parallèlement à l'axe, à 1,0 cm sous l'axe. Il coupe bien les deux autres rayons en B', situé 1,0 cm sous l'axe à 7,5 cm après O.",
                "Résultat : image réelle, renversée, de 1,0 cm, à 7,5 cm après la lentille, γ = -0,50.",
              ],
            },
            {
              level: 3,
              statement: "Dans le modèle de l'œil réduit, la distance entre la lentille (cristallin) et l'écran (rétine) vaut 17 mm. 1. Indiquer à quel élément de l'œil réel correspondent le diaphragme, la lentille et l'écran du modèle. 2. Un œil normal au repos voit net un arbre très éloigné. Que vaut sa distance focale ? Justifier. 3. L'arbre, haut de 10 m, est situé à 50 m de l'œil. En utilisant le rayon qui passe par le centre optique, calculer la taille de son image sur la rétine et le grandissement. L'image est-elle droite ou renversée ? 4. La personne lit ensuite un livre tenu à 25 cm. Expliquer, sans calcul, comment l'œil parvient à garder une image nette.",
              hint: "Pour un objet très éloigné, l'image se forme au foyer image. Pour la question 3, utilisez γ = OA' ÷ OA avec des distances en mètres et des mesures algébriques.",
              solution: [
                "1. Diaphragme : iris (et pupille) ; lentille convergente : cornée et cristallin ; écran : rétine.",
                "2. Pour un objet très éloigné, l'image se forme dans le plan du foyer image. L'image étant nette sur la rétine, F' est sur la rétine : f' = 17 mm.",
                "3. OA = -50 m et OA' = +17 × 10⁻³ m. γ = OA' ÷ OA = 0,017 ÷ (-50) = -3,4 × 10⁻⁴. A'B' = γ × AB = -3,4 × 10⁻⁴ × 10 = -3,4 × 10⁻³ m, soit une image de 3,4 mm, renversée.",
                "4. Pour un objet proche, l'image se formerait derrière la rétine si rien ne changeait. La distance lentille-rétine étant fixe, le cristallin se bombe : il devient plus convergent et sa distance focale diminue, ce qui ramène l'image sur la rétine. C'est l'accommodation.",
                "Résultat : f' = 17 mm au repos ; image de l'arbre de 3,4 mm, renversée, γ = -3,4 × 10⁻⁴ ; l'accommodation permet la lecture.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque élément à sa description ou à son rôle.",
            pairs: [
              { left: "Foyer image F'", right: "Point où convergent les rayons parallèles à l'axe" },
              { left: "Centre optique O", right: "Point traversé par les rayons sans déviation" },
              { left: "Cristallin", right: "Lentille convergente de l'œil" },
              { left: "Rétine", right: "Écran où se forme l'image dans l'œil" },
              { left: "Iris", right: "Diaphragme qui règle la quantité de lumière" },
              { left: "Accommodation", right: "Bombement du cristallin pour voir net de près" },
            ],
          },
          quiz: [
            {
              q: "Un faisceau de lumière parallèle à l'axe optique traverse une lentille convergente. Il converge :",
              options: ["au centre optique O", "au foyer objet F", "au foyer image F'", "sur la lentille"],
              answer: 2,
              why: "Par définition, les rayons parallèles à l'axe optique convergent au foyer image F'.",
            },
            {
              q: "Le grandissement d'une image vaut γ = -3. L'image est :",
              options: ["droite et trois fois plus petite", "renversée et trois fois plus grande", "droite et trois fois plus grande", "renversée et trois fois plus petite"],
              answer: 1,
              why: "γ < 0 : image renversée ; |γ| = 3 > 1 : image trois fois plus grande que l'objet.",
            },
            {
              q: "Dans le modèle de l'œil réduit, la rétine est modélisée par :",
              options: ["un diaphragme", "une lentille convergente", "un prisme", "un écran"],
              answer: 3,
              why: "L'image se forme sur la rétine, comme sur un écran ; la lentille modélise le cristallin et le diaphragme l'iris.",
            },
            {
              q: "Quel rayon issu d'un point objet traverse une lentille mince sans être dévié ?",
              options: ["Celui qui passe par le centre optique", "Celui qui est parallèle à l'axe", "Celui qui passe par le foyer objet de la lentille", "Aucun rayon n'est jamais dévié"],
              answer: 0,
              why: "Le rayon qui passe par le centre optique O d'une lentille mince n'est pas dévié.",
            },
            {
              q: "Lorsque l'œil regarde un objet proche, l'accommodation :",
              options: ["rapproche la rétine du cristallin", "diminue la distance focale du cristallin", "augmente la distance focale du cristallin", "agrandit la pupille"],
              answer: 1,
              why: "Le cristallin se bombe et devient plus convergent : sa distance focale diminue, l'image reste sur la rétine.",
            },
          ],
          trap: "Oublier le signe des mesures algébriques (OA est négatif pour un objet réel), ce qui donne un grandissement positif alors que l'image réelle d'un objet réel est toujours renversée ; ou croire que l'accommodation déplace la rétine.",
          method: "Pour une construction, travaillez à l'échelle sur papier quadrillé, placez d'abord O, F et F', tracez deux rayons particuliers issus de B, puis le troisième pour vérifier ; mesurez enfin OA' et A'B' et contrôlez que γ = A'B' ÷ AB et γ = OA' ÷ OA donnent la même valeur.",
        },
      ],
    },
    /* ================================================================== */
    /* SIGNAUX ET CAPTEURS                                                  */
    /* ================================================================== */
    {
      id: 'signaux-capteurs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-noeuds-mailles',
          title: "Loi des nœuds et loi des mailles",
          minutes: 35,
          objectives: [
            "Mesurer une tension et une intensité en plaçant correctement voltmètre et ampèremètre.",
            "Exploiter la loi des nœuds dans un circuit électrique comportant au plus deux mailles.",
            "Exploiter la loi des mailles dans un circuit électrique comportant au plus deux mailles.",
          ],
          course: [
            {
              heading: "Intensité du courant et vocabulaire des circuits",
              paragraphs: [
                "Le courant électrique est un déplacement d'ensemble de porteurs de charge : des électrons dans les métaux, des ions dans les solutions. Par convention, le courant circule à l'extérieur du générateur de sa borne positive vers sa borne négative ; les électrons, eux, se déplacent en sens inverse. L'intensité du courant, notée I, mesure le débit de charges ; elle s'exprime en ampères (A), souvent en milliampères (1 mA = 10⁻³ A).",
                "On mesure une intensité avec un ampèremètre (un multimètre en position A) branché en série : on ouvre le circuit à l'endroit voulu et l'on y insère l'appareil, le courant entrant par la borne A (ou mA) et sortant par la borne COM.",
                "Vocabulaire : un nœud est un point du circuit relié à au moins trois fils ; une branche est une portion de circuit comprise entre deux nœuds consécutifs ; une maille est un chemin fermé du circuit, qui ne passe qu'une fois par chaque point. Dans une même branche, tous les dipôles sont en série et sont traversés par le même courant.",
              ],
              box: { label: "Repère", text: "Intensité I en ampères (A) ; ampèremètre en série, courant entrant par A ou mA. Nœud : point relié à au moins trois fils. Maille : chemin fermé du circuit." },
            },
            {
              heading: "La loi des nœuds",
              paragraphs: [
                "Les charges électriques ne s'accumulent pas en un point du circuit et ne disparaissent pas : tout ce qui arrive à un nœud en repart. Il en résulte la loi des nœuds : la somme des intensités des courants qui arrivent à un nœud est égale à la somme des intensités des courants qui en repartent.",
                "Exemple : un courant de 0,50 A arrive à un nœud d'où partent deux branches. Si l'une est parcourue par 0,20 A, l'autre l'est par 0,50 - 0,20 = 0,30 A. Dans un circuit en dérivation, l'intensité dans la branche principale est donc égale à la somme des intensités dans les branches dérivées. Analogie : à un carrefour de canalisations, le débit d'eau qui arrive est égal à la somme des débits qui repartent.",
              ],
              box: { label: "Loi", text: "Loi des nœuds : Σ I (courants qui arrivent) = Σ I (courants qui repartent). Exemple : si I₁ arrive et que I₂ et I₃ repartent, alors I₁ = I₂ + I₃." },
            },
            {
              heading: "La tension électrique et sa représentation",
              paragraphs: [
                "La tension électrique entre deux points A et B, notée UAB, est une différence de potentiel électrique : UAB = VA - VB. Elle s'exprime en volts (V) et peut être positive ou négative : UBA = -UAB. On la représente par une flèche tracée à côté du dipôle, dont la pointe est du côté de A (la première lettre). On choisit souvent un point de référence, la masse, de potentiel nul.",
                "On mesure UAB avec un voltmètre (multimètre en position V) branché en dérivation aux bornes du dipôle, la borne V reliée à A et la borne COM reliée à B. Si l'on inverse les branchements, on lit la valeur opposée, ce qui permet de savoir quel point est au plus haut potentiel.",
                "Pour un récepteur (lampe, résistance, moteur), on oriente en général la flèche tension en sens inverse du courant : c'est la convention récepteur, avec laquelle la tension est positive. Pour un générateur, on oriente la flèche tension dans le même sens que le courant : c'est la convention générateur.",
              ],
              box: { label: "Définition", text: "UAB = VA - VB, en volts ; UBA = -UAB. Voltmètre en dérivation, borne V en A et borne COM en B. Flèche tension pointée vers A." },
            },
            {
              heading: "La loi des mailles",
              paragraphs: [
                "Dans une maille, on choisit un sens de parcours. La loi des mailles s'énonce ainsi : la somme algébrique des tensions rencontrées le long de la maille est nulle. On compte positivement les tensions dont la flèche est dans le sens de parcours et négativement celles dont la flèche est en sens inverse. Elle découle de l'additivité des tensions : UAC = UAB + UBC, quel que soit le point B.",
                "Conséquences pratiques : dans un circuit série, la tension aux bornes du générateur est égale à la somme des tensions aux bornes des récepteurs ; des dipôles branchés en dérivation entre deux mêmes points ont la même tension à leurs bornes. Exemple : un générateur de 6,0 V alimente une lampe et un moteur en série ; si la lampe a 2,5 V à ses bornes, le moteur a 6,0 - 2,5 = 3,5 V.",
              ],
              box: { label: "Loi", text: "Loi des mailles : le long d'une maille parcourue dans un sens choisi, la somme algébrique des tensions est nulle. Additivité : UAC = UAB + UBC. Dipôles en dérivation : même tension." },
            },
          ],
          keyPoints: [
            "Ampèremètre en série ; voltmètre en dérivation, borne V au point écrit en premier dans UAB.",
            "Loi des nœuds : la somme des intensités qui arrivent à un nœud égale la somme de celles qui en repartent.",
            "UAB = VA - VB ; UBA = -UAB ; une tension peut être négative.",
            "Loi des mailles : somme algébrique des tensions nulle le long d'une maille ; additivité UAC = UAB + UBC.",
            "Dipôles en dérivation : même tension. Dipôles en série : même intensité.",
          ],
          example: {
            statement: "Un générateur de tension UPN = 12,0 V alimente une lampe L₁ placée dans la branche principale, suivie de deux lampes L₂ et L₃ montées en dérivation l'une de l'autre. On mesure : tension aux bornes de L₁, U₁ = 4,5 V ; intensité dans la branche principale, I = 0,30 A ; intensité dans L₂, I₂ = 0,18 A. Déterminer les tensions aux bornes de L₂ et L₃ et l'intensité dans L₃.",
            solution: [
              "Maille contenant le générateur, L₁ et L₂ : UPN = U₁ + U₂, donc U₂ = 12,0 - 4,5 = 7,5 V.",
              "L₂ et L₃ sont en dérivation entre les mêmes points : U₃ = U₂ = 7,5 V (loi des mailles appliquée à la maille L₂, L₃).",
              "Loi des nœuds au nœud où se séparent les branches : I = I₂ + I₃, donc I₃ = 0,30 - 0,18 = 0,12 A.",
              "Résultat : U₂ = U₃ = 7,5 V et I₃ = 0,12 A.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. À un nœud arrive un courant d'intensité I₁ = 0,50 A ; en repartent deux courants, I₂ = 0,20 A et I₃. Calculer I₃. 2. À un autre nœud arrivent deux courants de 120 mA et 130 mA ; il en repart un seul. Quelle est son intensité, en mA puis en A ? 3. On mesure UAB = 5,0 V aux bornes d'une lampe. Que vaut UBA ? Lequel des points A ou B est au potentiel le plus élevé ?",
              hint: "Appliquez la loi des nœuds : ce qui arrive est égal à ce qui repart. Pour la tension, UBA = -UAB.",
              solution: [
                "1. I₁ = I₂ + I₃, donc I₃ = 0,50 - 0,20 = 0,30 A.",
                "2. I = 120 + 130 = 250 mA = 0,250 A.",
                "3. UBA = -UAB = -5,0 V. Comme UAB = VA - VB > 0, le point A est au potentiel le plus élevé.",
                "Résultat : I₃ = 0,30 A ; I = 250 mA ; UBA = -5,0 V, A au potentiel le plus élevé.",
              ],
            },
            {
              level: 2,
              statement: "Un générateur (bornes P et N) de tension UPN = 9,0 V alimente une résistance R₁ placée entre P et un nœud A. Entre A et N sont montés en dérivation une lampe L et un moteur M. On mesure : UPA = 3,0 V aux bornes de R₁ ; intensité dans la branche principale I = 0,40 A ; intensité dans la lampe IL = 0,25 A. 1. Combien ce circuit comporte-t-il de nœuds, de branches et de mailles indépendantes ? 2. Calculer la tension UAN. En déduire les tensions aux bornes de la lampe et du moteur. 3. Calculer l'intensité IM du courant qui traverse le moteur. 4. Décrire le branchement du voltmètre pour mesurer UAN.",
              hint: "Utilisez la maille générateur, R₁, lampe pour UAN, puis la maille lampe, moteur. Pour IM, appliquez la loi des nœuds en A.",
              solution: [
                "1. Deux nœuds (A et N), trois branches (générateur avec R₁, lampe, moteur) et deux mailles indépendantes (générateur, R₁, lampe ; lampe, moteur).",
                "2. Maille générateur, R₁, lampe : UPN = UPA + UAN, donc UAN = 9,0 - 3,0 = 6,0 V. La lampe et le moteur sont en dérivation entre A et N : UL = UM = 6,0 V.",
                "3. Loi des nœuds en A : I = IL + IM, donc IM = 0,40 - 0,25 = 0,15 A.",
                "4. Le voltmètre est branché en dérivation entre A et N, borne V reliée à A et borne COM reliée à N ; il affiche alors 6,0 V.",
                "Résultat : UAN = UL = UM = 6,0 V et IM = 0,15 A.",
              ],
            },
            {
              level: 3,
              statement: "On étudie un circuit à deux mailles. Un générateur (bornes P et N) impose UPN = 12,0 V. Entre P et un nœud B se trouve une résistance R₁. Entre B et N, deux branches sont en dérivation : la première contient une résistance R₂ ; la seconde contient une résistance R₃ (entre B et un point C) suivie d'une diode électroluminescente D (entre C et N). Mesures : UBN = 8,0 V ; UCN = 2,0 V ; intensité dans R₁ : I₁ = 40 mA ; intensité dans R₂ : I₂ = 25 mA. 1. Calculer UPB et UBC. 2. Calculer l'intensité I₃ dans la branche de la diode. 3. On choisit N comme masse (VN = 0 V). Calculer les potentiels VP, VB et VC. 4. Vérifier la loi des mailles sur la grande maille P, B, C, N, P. 5. Un élève branche le voltmètre avec la borne V en C et la borne COM en B. Quelle valeur lit-il ?",
              hint: "Additivité des tensions : UBN = UBC + UCN et UPN = UPB + UBN. Un potentiel se calcule à partir de la masse : VB = UBN + VN.",
              solution: [
                "1. UPN = UPB + UBN, donc UPB = 12,0 - 8,0 = 4,0 V. UBN = UBC + UCN, donc UBC = 8,0 - 2,0 = 6,0 V.",
                "2. Loi des nœuds en B : I₁ = I₂ + I₃, donc I₃ = 40 - 25 = 15 mA = 0,015 A.",
                "3. VN = 0 V ; VC = UCN + VN = 2,0 V ; VB = UBN + VN = 8,0 V ; VP = UPN + VN = 12,0 V.",
                "4. En parcourant la maille dans le sens P, B, C, N puis retour à P à travers le générateur : UPB + UBC + UCN - UPN = 4,0 + 6,0 + 2,0 - 12,0 = 0. La loi des mailles est vérifiée.",
                "5. Il mesure UCB = VC - VB = 2,0 - 8,0 = -6,0 V : la valeur affichée est négative, opposée à UBC.",
                "Résultat : UPB = 4,0 V, UBC = 6,0 V, I₃ = 15 mA, VP = 12,0 V, VB = 8,0 V, VC = 2,0 V, lecture -6,0 V.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos réflexes en électricité.",
            statements: [
              { text: "Un ampèremètre se branche en dérivation aux bornes du dipôle.", true: false, why: "L'ampèremètre se branche en série ; c'est le voltmètre qui se branche en dérivation." },
              { text: "Le courant électrique « s'use » en traversant une lampe : il y en a moins après qu'avant.", true: false, why: "Dans une même branche, l'intensité est la même partout : les charges ne disparaissent pas." },
              { text: "Deux lampes montées en dérivation entre deux mêmes points ont la même tension à leurs bornes.", true: true, why: "C'est une conséquence de la loi des mailles." },
              { text: "Une tension peut être négative.", true: true, why: "UAB = VA - VB est négative si B est au potentiel le plus élevé ; UBA = -UAB." },
              { text: "Dans un circuit en dérivation, l'intensité dans la branche principale est égale à la somme des intensités des branches dérivées.", true: true, why: "C'est la loi des nœuds appliquée au nœud de séparation." },
              { text: "Dans un circuit série, chaque récepteur a à ses bornes la même tension que le générateur.", true: false, why: "En série, la tension du générateur se partage : elle est égale à la somme des tensions des récepteurs." },
            ],
          },
          quiz: [
            {
              q: "Trois courants arrivent à un nœud : 0,10 A, 0,25 A et 0,15 A. Un seul courant en repart. Son intensité vaut :",
              options: ["0,15 A", "0,25 A", "0,10 A", "0,50 A"],
              answer: 3,
              why: "Loi des nœuds : I = 0,10 + 0,25 + 0,15 = 0,50 A.",
            },
            {
              q: "Pour mesurer la tension UAB aux bornes d'un dipôle, on branche le voltmètre :",
              options: ["en série, borne V en A", "en série, borne COM en A", "en dérivation, borne V en A et COM en B", "en dérivation, borne V en B et COM en A"],
              answer: 2,
              why: "Le voltmètre se branche en dérivation ; pour lire UAB, la borne V est reliée à A et la borne COM à B.",
            },
            {
              q: "Si UAB = 3,0 V, alors UBA vaut :",
              options: ["-3,0 V", "3,0 V", "0 V", "-6,0 V"],
              answer: 0,
              why: "UBA = VB - VA = -(VA - VB) = -UAB = -3,0 V.",
            },
            {
              q: "Un générateur de 9,0 V alimente en série une lampe (5,5 V à ses bornes) et une résistance. La tension aux bornes de la résistance vaut :",
              options: ["9,0 V", "3,5 V", "14,5 V", "5,5 V"],
              answer: 1,
              why: "Loi des mailles en série : 9,0 = 5,5 + UR, donc UR = 3,5 V.",
            },
            {
              q: "Combien de mailles indépendantes comporte un générateur alimentant deux lampes en dérivation ?",
              options: ["Aucune", "Une", "Trois", "Deux"],
              answer: 3,
              why: "On peut parcourir la maille générateur, lampe 1 et la maille lampe 1, lampe 2 : deux mailles indépendantes (la troisième se déduit des deux autres).",
            },
          ],
          trap: "Oublier le caractère algébrique des tensions dans la loi des mailles (additionner toutes les tensions sans tenir compte du sens des flèches) ou croire que le courant diminue après chaque récepteur d'une même branche.",
          method: "Commencez par flécher sur le schéma toutes les intensités et toutes les tensions, puis repérez les nœuds et les mailles. Écrivez une équation par nœud ou par maille utile, en vérifiant le sens de chaque flèche, et contrôlez enfin vos résultats sur une maille que vous n'avez pas utilisée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'loi-ohm',
          title: "Caractéristique d'un dipôle et loi d'Ohm",
          minutes: 35,
          objectives: [
            "Représenter et exploiter la caractéristique tension-courant d'un dipôle.",
            "Utiliser la loi d'Ohm pour un dipôle ohmique.",
            "Déterminer le point de fonctionnement d'un circuit à partir des caractéristiques du générateur et du récepteur.",
          ],
          course: [
            {
              heading: "La caractéristique d'un dipôle",
              paragraphs: [
                "La caractéristique tension-courant d'un dipôle est la courbe qui représente la tension U à ses bornes en fonction de l'intensité I du courant qui le traverse, U = f(I), ou à l'inverse I = g(U). Elle résume le comportement électrique du dipôle, quel que soit le circuit dans lequel il est placé.",
                "Pour la tracer, on branche le dipôle en série avec un générateur de tension réglable, un ampèremètre et parfois une résistance de protection, et un voltmètre en dérivation à ses bornes. On fait varier la tension du générateur, on relève plusieurs couples (I ; U), on les place dans un repère, puis on trace la courbe moyenne qui passe au plus près des points.",
                "Les caractéristiques ont des formes variées. Celle d'une lampe à incandescence est une courbe : sa résistance augmente quand le filament chauffe. Celle d'une diode électroluminescente (DEL) montre qu'elle ne laisse passer le courant que dans un sens, et seulement au-delà d'une tension de seuil (environ 2 V pour une DEL rouge). Celle d'un conducteur ohmique est une droite qui passe par l'origine.",
              ],
              box: { label: "Définition", text: "Caractéristique d'un dipôle : courbe U = f(I) (ou I = g(U)) obtenue en relevant la tension à ses bornes pour différentes intensités du courant qui le traverse." },
            },
            {
              heading: "La loi d'Ohm",
              paragraphs: [
                "Un dipôle dont la caractéristique est une droite passant par l'origine est un dipôle ohmique (ou conducteur ohmique, couramment appelé « résistance ») : la tension à ses bornes est proportionnelle à l'intensité qui le traverse. Le coefficient de proportionnalité est sa résistance R, exprimée en ohms (symbole Ω), du nom du physicien allemand Georg Ohm. C'est la loi d'Ohm : U = R × I, en convention récepteur.",
                "Attention aux unités : U en volts, I en ampères, R en ohms. Une intensité de 20 mA s'écrit 0,020 A ; une résistance de 4,7 kΩ vaut 4 700 Ω. Exemple : un conducteur ohmique de 100 Ω traversé par 50 mA a une tension U = 100 × 0,050 = 5,0 V à ses bornes. La relation peut s'écrire aussi I = U ÷ R ou R = U ÷ I.",
                "Sur la caractéristique U = f(I) d'un dipôle ohmique, la résistance est le coefficient directeur de la droite. On peut aussi la mesurer directement avec un ohmmètre (multimètre en position Ω), le dipôle étant retiré du circuit. Une lampe ou une DEL ne suit pas la loi d'Ohm : le rapport U ÷ I n'est pas constant.",
              ],
              box: { label: "Formule", text: "Loi d'Ohm : U = R × I, avec U en volts (V), I en ampères (A), R en ohms (Ω). Valable uniquement pour un dipôle ohmique, dont la caractéristique est une droite passant par l'origine." },
            },
            {
              heading: "Le point de fonctionnement",
              paragraphs: [
                "Un générateur réel a lui aussi une caractéristique : pour une pile, la tension à ses bornes diminue un peu quand l'intensité débitée augmente. On la modélise souvent par une relation de la forme U = E - r × I, où E est la tension à vide (quand aucun courant ne circule) et r une résistance interne ; cette relation est donnée dans les exercices.",
                "Lorsque l'on branche un dipôle aux bornes d'un générateur, les deux ont la même tension et sont traversés par le même courant. Le couple (I ; U) qui s'établit, appelé point de fonctionnement, est donc à l'intersection des caractéristiques du générateur et du dipôle tracées dans le même repère. Par le calcul, on résout l'égalité des deux relations. Exemple : pile U = 4,5 - 1,5 × I et résistance de 7,5 Ω : 7,5 × I = 4,5 - 1,5 × I, d'où I = 0,50 A et U = 3,75 V.",
              ],
              box: { label: "À retenir", text: "Point de fonctionnement : intersection des caractéristiques du générateur et du récepteur ; c'est le couple (I ; U) commun aux deux dipôles branchés ensemble." },
            },
          ],
          keyPoints: [
            "Caractéristique : courbe U = f(I) d'un dipôle, obtenue par une série de mesures (ampèremètre en série, voltmètre en dérivation).",
            "Dipôle ohmique : caractéristique droite passant par l'origine, loi d'Ohm U = R × I.",
            "Unités : U en V, I en A (convertir les mA), R en Ω (1 kΩ = 1 000 Ω).",
            "R est le coefficient directeur de la droite U = f(I) ; un ohmmètre la mesure hors circuit.",
            "Point de fonctionnement : intersection des caractéristiques du générateur et du récepteur.",
          ],
          example: {
            statement: "Un conducteur ohmique de résistance R = 220 Ω est traversé par un courant d'intensité I = 25 mA. Calculer la tension à ses bornes. Quelle intensité le traverserait sous une tension de 3,3 V ?",
            solution: [
              "Conversion : I = 25 mA = 0,025 A.",
              "Loi d'Ohm : U = R × I = 220 × 0,025 = 5,5 V.",
              "Sous 3,3 V : I = U ÷ R = 3,3 ÷ 220 = 0,015 A.",
              "Résultat : U = 5,5 V ; sous 3,3 V, l'intensité serait de 15 mA.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Un conducteur ohmique de 150 Ω est soumis à une tension de 6,0 V. Calculer l'intensité du courant qui le traverse, en A puis en mA. 2. Un autre conducteur ohmique est traversé par 12 mA lorsque la tension à ses bornes vaut 3,0 V. Calculer sa résistance. 3. Quelle tension faut-il appliquer à une résistance de 4,7 kΩ pour qu'elle soit traversée par 2,0 mA ?",
              hint: "Convertissez les milliampères en ampères et les kiloohms en ohms avant d'utiliser U = R × I.",
              solution: [
                "1. I = U ÷ R = 6,0 ÷ 150 = 0,040 A = 40 mA.",
                "2. R = U ÷ I = 3,0 ÷ 0,012 = 250 Ω.",
                "3. U = R × I = 4 700 × 0,0020 = 9,4 V.",
                "Résultat : 40 mA ; 250 Ω ; 9,4 V.",
              ],
            },
            {
              level: 2,
              statement: "On relève la caractéristique de deux dipôles. Dipôle X : I (mA) = 0 ; 10 ; 20 ; 30 ; 40 et U (V) = 0 ; 0,47 ; 0,94 ; 1,41 ; 1,88. Dipôle Y : I (mA) = 0 ; 50 ; 100 ; 150 et U (V) = 0 ; 0,50 ; 1,6 ; 3,6. 1. Calculer le rapport U ÷ I (en Ω) pour chaque mesure non nulle des deux dipôles. 2. Lequel des deux dipôles est ohmique ? Justifier et donner sa résistance. 3. Pour le dipôle ohmique, calculer la tension sous 25 mA et l'intensité sous 1,0 V. 4. Le dipôle Y pourrait-il être une lampe ? Justifier.",
              hint: "Un dipôle est ohmique si U ÷ I est constant, c'est-à-dire si la caractéristique est une droite passant par l'origine.",
              solution: [
                "1. X : 0,47 ÷ 0,010 = 47 Ω ; 0,94 ÷ 0,020 = 47 Ω ; 1,41 ÷ 0,030 = 47 Ω ; 1,88 ÷ 0,040 = 47 Ω. Y : 0,50 ÷ 0,050 = 10 Ω ; 1,6 ÷ 0,100 = 16 Ω ; 3,6 ÷ 0,150 = 24 Ω.",
                "2. Pour X, le rapport est constant : la caractéristique est une droite passant par l'origine, X est un dipôle ohmique de résistance R = 47 Ω. Pour Y, le rapport varie : Y n'est pas ohmique.",
                "3. U = 47 × 0,025 ≈ 1,2 V. I = 1,0 ÷ 47 ≈ 0,021 A, soit environ 21 mA.",
                "4. Oui : le rapport U ÷ I de Y augmente avec l'intensité, ce qui correspond au comportement d'une lampe à incandescence dont le filament chauffe et dont la résistance augmente.",
                "Résultat : X est ohmique (R = 47 Ω) ; Y ne l'est pas et peut être une lampe.",
              ],
            },
            {
              level: 3,
              statement: "Un générateur a pour caractéristique U = 9,0 - 2,0 × I (U en V, I en A ; données fictives). 1. Que vaut la tension à ses bornes lorsqu'il ne débite aucun courant ? Quelle intensité débiterait-il si l'on reliait directement ses bornes (U = 0) ? 2. On branche à ses bornes un conducteur ohmique de résistance R = 16 Ω. Déterminer par le calcul le point de fonctionnement (I ; U). 3. Expliquer comment on obtiendrait ce point graphiquement. 4. On remplace le conducteur ohmique par un autre de résistance 7,0 Ω. Déterminer le nouveau point de fonctionnement et commenter l'évolution de la tension aux bornes du générateur.",
              hint: "Au point de fonctionnement, le générateur et le conducteur ohmique ont la même tension U et la même intensité I : écrivez R × I = 9,0 - 2,0 × I.",
              solution: [
                "1. Pour I = 0 : U = 9,0 V (tension à vide). Pour U = 0 : 9,0 - 2,0 × I = 0, donc I = 4,5 A (intensité de court-circuit, dangereuse pour le générateur).",
                "2. 16 × I = 9,0 - 2,0 × I, donc 18 × I = 9,0 et I = 0,50 A. U = 16 × 0,50 = 8,0 V. Vérification : 9,0 - 2,0 × 0,50 = 8,0 V.",
                "3. On trace dans le même repère (I en abscisse, U en ordonnée) la droite décroissante du générateur, qui passe par (0 ; 9,0) et (4,5 ; 0), et la droite U = 16 × I passant par l'origine. Le point de fonctionnement est leur intersection, de coordonnées (0,50 A ; 8,0 V).",
                "4. 7,0 × I = 9,0 - 2,0 × I, donc 9,0 × I = 9,0 et I = 1,0 A ; U = 7,0 × 1,0 = 7,0 V. Avec une résistance plus faible, le générateur débite davantage et la tension à ses bornes diminue.",
                "Résultat : (0,50 A ; 8,0 V) avec 16 Ω, puis (1,0 A ; 7,0 V) avec 7,0 Ω.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour tracer la caractéristique d'un dipôle et tester la loi d'Ohm.",
            items: [
              "Monter le dipôle en série avec un générateur réglable et un ampèremètre",
              "Brancher un voltmètre en dérivation aux bornes du dipôle",
              "Relever plusieurs couples (I ; U) en faisant varier la tension du générateur",
              "Placer les points avec I en abscisse et U en ordonnée",
              "Tracer la courbe moyenne passant au plus près des points",
              "Si c'est une droite passant par l'origine, calculer son coefficient directeur R",
            ],
          },
          quiz: [
            {
              q: "Un conducteur ohmique de 50 Ω est traversé par 0,20 A. La tension à ses bornes vaut :",
              options: ["10 V", "250 V", "0,004 V", "50,2 V"],
              answer: 0,
              why: "U = R × I = 50 × 0,20 = 10 V.",
            },
            {
              q: "La caractéristique d'un dipôle ohmique est :",
              options: ["une courbe qui s'aplatit", "une droite horizontale", "une droite qui ne passe pas par l'origine", "une droite passant par l'origine"],
              answer: 3,
              why: "Pour un dipôle ohmique, U est proportionnelle à I : la caractéristique est une droite passant par l'origine.",
            },
            {
              q: "Une tension de 6,0 V fait circuler 30 mA dans un conducteur ohmique. Sa résistance vaut :",
              options: ["0,2 Ω", "200 Ω", "180 Ω", "5 Ω"],
              answer: 1,
              why: "R = U ÷ I = 6,0 ÷ 0,030 = 200 Ω. Il faut convertir 30 mA en 0,030 A.",
            },
            {
              q: "Le point de fonctionnement d'un circuit générateur et résistance est :",
              options: ["le point où U = 0", "le point où I = 0", "l'intersection des deux caractéristiques", "le point le plus haut de la caractéristique du générateur"],
              answer: 2,
              why: "Les deux dipôles ont même tension et même intensité : le point de fonctionnement est à l'intersection de leurs caractéristiques.",
            },
            {
              q: "Lequel de ces dipôles ne vérifie pas la loi d'Ohm ?",
              options: ["Une résistance de 100 Ω", "Une résistance de 4,7 kΩ", "Une diode électroluminescente", "Un conducteur ohmique de 47 Ω"],
              answer: 2,
              why: "Une DEL ne laisse passer le courant qu'au-delà d'une tension de seuil et dans un seul sens : sa caractéristique n'est pas une droite passant par l'origine.",
            },
          ],
          trap: "Appliquer U = R × I avec une intensité en milliampères (on obtient une tension mille fois trop grande) ou utiliser la loi d'Ohm pour une lampe ou une diode, qui ne sont pas des dipôles ohmiques.",
          method: "Avant d'utiliser la loi d'Ohm, vérifiez deux choses : le dipôle est-il ohmique (droite passant par l'origine) ? Les grandeurs sont-elles en V, A et Ω ? Contrôlez ensuite l'ordre de grandeur : quelques milliampères dans une résistance de quelques kiloohms sous quelques volts.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'capteurs',
          title: "Les capteurs électriques et leur étalonnage",
          minutes: 30,
          objectives: [
            "Citer des exemples de capteurs présents dans les objets de la vie quotidienne.",
            "Mesurer une grandeur physique à l'aide d'un capteur électrique résistif.",
            "Produire et utiliser une courbe d'étalonnage reliant la grandeur électrique d'un capteur à une grandeur d'intérêt.",
            "Décrire l'utilisation d'un capteur avec un microcontrôleur.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un capteur ?",
              paragraphs: [
                "Un capteur est un dispositif qui transforme une grandeur physique que l'on veut mesurer, appelée grandeur d'intérêt (température, éclairement, pression, distance, son...), en une grandeur électrique mesurable : une résistance, une tension ou une intensité. Il est le premier maillon d'une chaîne de mesure, qui se poursuit par le traitement de ce signal électrique (appareil de mesure, microcontrôleur) et l'affichage ou l'action.",
                "Les capteurs sont partout autour de nous. Un thermostat de chauffage contient un capteur de température ; un smartphone possède un accéléromètre (qui détecte son orientation), un capteur de luminosité (qui règle l'éclairage de l'écran) et un microphone ; une voiture utilise des capteurs à ultrasons pour l'aide au stationnement et des capteurs de pression dans les pneus ; un éclairage public automatique s'allume grâce à un capteur de lumière.",
              ],
              box: { label: "Définition", text: "Un capteur convertit une grandeur d'intérêt (température, lumière, pression, distance...) en une grandeur électrique (résistance, tension, intensité) qui peut être mesurée et traitée." },
            },
            {
              heading: "Les capteurs résistifs",
              paragraphs: [
                "Un capteur résistif est un dipôle dont la résistance varie avec la grandeur d'intérêt. La thermistance CTN (à coefficient de température négatif) voit sa résistance diminuer quand la température augmente ; la thermistance CTP, au contraire, voit la sienne augmenter. La photorésistance (ou LDR) a une résistance qui diminue fortement quand l'éclairement augmente : de l'ordre du mégaohm dans l'obscurité, de quelques kiloohms ou moins en pleine lumière. La jauge de contrainte change de résistance lorsqu'elle est déformée ; elle sert à mesurer des forces et des pressions.",
                "Pour connaître la résistance d'un capteur, on peut la mesurer à l'ohmmètre, ou bien mesurer la tension U à ses bornes et l'intensité I qui le traverse et calculer R = U ÷ I. Il reste alors à relier cette résistance à la grandeur d'intérêt : c'est le rôle de l'étalonnage.",
              ],
              box: { label: "Repère", text: "CTN : R diminue quand la température augmente. CTP : R augmente quand la température augmente. Photorésistance : R diminue quand l'éclairement augmente. Jauge de contrainte : R varie avec la déformation." },
            },
            {
              heading: "Étalonner un capteur",
              paragraphs: [
                "Étalonner un capteur, c'est établir la relation entre sa grandeur électrique et la grandeur d'intérêt. Pour une thermistance, on la plonge avec un thermomètre de référence dans de l'eau à différentes températures et l'on relève, pour chacune, la résistance mesurée. On trace ensuite la courbe d'étalonnage R = f(T).",
                "Pour utiliser le capteur, on mesure sa résistance, puis on lit sur la courbe d'étalonnage la température correspondante. La courbe n'est valable que dans le domaine où elle a été établie : on ne prolonge pas une courbe d'étalonnage au-delà des points mesurés (pas d'extrapolation), car le comportement du capteur peut y être différent. Plus les points d'étalonnage sont nombreux et précis, plus la mesure est fiable.",
              ],
              box: { label: "Méthode", text: "Étalonnage : 1) mesurer la grandeur électrique du capteur pour des valeurs connues de la grandeur d'intérêt ; 2) tracer la courbe d'étalonnage ; 3) mesurer la grandeur électrique et lire la valeur de la grandeur d'intérêt, sans sortir du domaine étudié." },
            },
            {
              heading: "Capteur et microcontrôleur",
              paragraphs: [
                "Un microcontrôleur (comme ceux des cartes programmables utilisées au lycée) ne mesure pas directement une résistance : il mesure une tension sur une entrée analogique. On place donc le capteur résistif en série avec une résistance connue, l'ensemble étant alimenté sous une tension fixe (par exemple 5 V) : la tension aux bornes de la résistance connue varie quand la résistance du capteur varie.",
                "Le programme convertit la tension mesurée en résistance grâce aux lois de l'électricité (loi des mailles, loi d'Ohm), puis en grandeur d'intérêt grâce aux données d'étalonnage. Il peut alors afficher la valeur ou déclencher une action : allumer un ventilateur au-delà d'une température, éclairer une pièce quand la lumière baisse.",
              ],
            },
          ],
          keyPoints: [
            "Un capteur convertit une grandeur d'intérêt en grandeur électrique (résistance, tension, intensité).",
            "CTN : R diminue si la température augmente ; photorésistance : R diminue si l'éclairement augmente.",
            "La courbe d'étalonnage relie la grandeur électrique à la grandeur d'intérêt ; elle se construit avec un instrument de référence.",
            "On lit la grandeur d'intérêt sur la courbe d'étalonnage, sans extrapoler au-delà des points mesurés.",
            "Avec un microcontrôleur, le capteur est placé en série avec une résistance connue et l'on mesure une tension.",
          ],
          example: {
            statement: "L'étalonnage d'une thermistance a donné (données fictives) : T (°C) = 0 ; 10 ; 20 ; 30 ; 40 ; 50 et R (kΩ) = 32,6 ; 19,9 ; 12,5 ; 8,06 ; 5,33 ; 3,60. 1. S'agit-il d'une CTN ou d'une CTP ? 2. On mesure R = 8,06 kΩ : quelle est la température ? 3. On mesure R = 15,0 kΩ : encadrer puis estimer la température.",
            solution: [
              "1. La résistance diminue quand la température augmente : c'est une thermistance CTN.",
              "2. R = 8,06 kΩ correspond directement au point d'étalonnage T = 30 °C.",
              "3. 12,5 kΩ < 15,0 kΩ < 19,9 kΩ : la température est comprise entre 10 °C et 20 °C, plus proche de 20 °C car 15,0 kΩ est plus proche de 12,5 kΩ.",
              "En considérant la courbe comme une droite entre ces deux points : T ≈ 10 + 10 × (19,9 - 15,0) ÷ (19,9 - 12,5) ≈ 17 °C. C'est une estimation, car la courbe réelle est incurvée.",
              "Résultat : CTN ; 30 °C ; environ 17 °C (entre 10 et 20 °C).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Pour chacun des objets suivants, nommer la grandeur d'intérêt mesurée par le capteur indiqué : a) le capteur de recul à ultrasons d'une voiture ; b) le capteur de luminosité d'un smartphone ; c) la thermistance d'un four. 2. Un lampadaire automatique contient une photorésistance. Au cours de la soirée, sa résistance passe de 2 kΩ à 200 kΩ. L'éclairement a-t-il augmenté ou diminué ? Le lampadaire doit-il s'allumer ?",
              hint: "La résistance d'une photorésistance diminue quand l'éclairement augmente.",
              solution: [
                "1. a) La distance à l'obstacle ; b) l'éclairement (la lumière ambiante) ; c) la température.",
                "2. La résistance a été multipliée par 100 : elle a fortement augmenté, donc l'éclairement a diminué. La nuit tombe : le lampadaire doit s'allumer.",
                "Résultat : distance, éclairement, température ; l'éclairement diminue et le lampadaire s'allume.",
              ],
            },
            {
              level: 2,
              statement: "Un capteur de température délivre une tension U. Son étalonnage donne (données fictives) : T (°C) = 0 ; 20 ; 40 ; 60 et U (V) = 0,50 ; 0,90 ; 1,30 ; 1,70. 1. Montrer que U augmente de la même quantité pour chaque augmentation de 20 °C. Que peut-on en déduire sur l'allure de la courbe d'étalonnage ? 2. Calculer de combien U augmente pour 1 °C. 3. On mesure U = 1,14 V. Déterminer la température. 4. Peut-on utiliser cet étalonnage pour mesurer la température d'une eau à 90 °C ? Justifier.",
              hint: "Si la tension augmente toujours de la même valeur pour un même écart de température, la courbe est une droite : U = a × T + b.",
              solution: [
                "1. Entre deux points successifs, U augmente de 0,40 V pour 20 °C : la variation est régulière, la courbe d'étalonnage est une droite d'équation U = a × T + 0,50.",
                "2. a = 0,40 ÷ 20 = 0,020 V par °C (soit 20 mV par degré).",
                "3. 1,14 = 0,020 × T + 0,50, donc T = (1,14 - 0,50) ÷ 0,020 = 0,64 ÷ 0,020 = 32 °C.",
                "4. Non, pas sans vérification : l'étalonnage n'a été réalisé qu'entre 0 °C et 60 °C. Au-delà, rien ne garantit que le capteur garde le même comportement ; il faut compléter l'étalonnage jusqu'à 90 °C au moins.",
                "Résultat : U = 0,020 × T + 0,50 ; T = 32 °C ; pas d'extrapolation à 90 °C.",
              ],
            },
            {
              level: 3,
              statement: "On utilise la thermistance CTN de l'exemple du cours (données d'étalonnage fictives : 20 °C, 12,5 kΩ ; 30 °C, 8,06 kΩ). Elle est montée en série avec un conducteur ohmique de résistance R = 10,0 kΩ ; l'ensemble est alimenté par une tension continue E = 4,5 V. Un microcontrôleur mesure la tension UR aux bornes du conducteur ohmique : UR = 2,0 V. 1. Calculer l'intensité I du courant dans le circuit. 2. Calculer la tension UCTN aux bornes de la thermistance, puis sa résistance RCTN. 3. En déduire la température. 4. La température monte à 30 °C. Calculer la nouvelle intensité, puis la nouvelle valeur de UR. Comment le microcontrôleur peut-il détecter cette élévation de température ?",
              hint: "Le conducteur ohmique est ohmique : I = UR ÷ R. La loi des mailles donne E = UR + UCTN. À 30 °C, la résistance totale du circuit est R + RCTN.",
              solution: [
                "1. Loi d'Ohm pour le conducteur ohmique : I = UR ÷ R = 2,0 ÷ 10 000 = 2,0 × 10⁻⁴ A, soit 0,20 mA.",
                "2. Loi des mailles : E = UR + UCTN, donc UCTN = 4,5 - 2,0 = 2,5 V. Les deux dipôles en série ont la même intensité : RCTN = UCTN ÷ I = 2,5 ÷ 2,0 × 10⁻⁴ = 12 500 Ω = 12,5 kΩ.",
                "3. D'après l'étalonnage, 12,5 kΩ correspond à 20 °C.",
                "4. À 30 °C, RCTN = 8,06 kΩ. Résistance totale : 10,0 + 8,06 = 18,06 kΩ. I = 4,5 ÷ 18 060 ≈ 2,49 × 10⁻⁴ A. UR = 10 000 × 2,49 × 10⁻⁴ ≈ 2,49 V, soit environ 2,5 V.",
                "Quand la température augmente, la résistance de la CTN diminue, l'intensité augmente et la tension UR augmente : le microcontrôleur détecte l'élévation de température par la hausse de UR (de 2,0 V à environ 2,5 V).",
                "Résultat : I = 0,20 mA, RCTN = 12,5 kΩ, T = 20 °C ; à 30 °C, UR ≈ 2,5 V.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque capteur à la grandeur d'intérêt qu'il mesure.",
            pairs: [
              { left: "Thermistance CTN", right: "Température" },
              { left: "Photorésistance", right: "Éclairement" },
              { left: "Microphone", right: "Son" },
              { left: "Jauge de contrainte", right: "Déformation" },
              { left: "Capteur à ultrasons", right: "Distance à un obstacle" },
              { left: "Accéléromètre", right: "Accélération et orientation" },
            ],
          },
          quiz: [
            {
              q: "Le rôle d'un capteur électrique est de :",
              options: ["produire de l'énergie électrique", "convertir une grandeur physique en grandeur électrique", "afficher une valeur mesurée", "protéger un circuit électrique contre toutes les surtensions"],
              answer: 1,
              why: "Un capteur traduit une grandeur d'intérêt (température, lumière...) en grandeur électrique mesurable.",
            },
            {
              q: "Quand la température augmente, la résistance d'une thermistance CTN :",
              options: ["diminue", "augmente", "reste constante", "s'annule"],
              answer: 0,
              why: "CTN signifie coefficient de température négatif : la résistance diminue quand la température augmente.",
            },
            {
              q: "Une courbe d'étalonnage permet :",
              options: ["de calculer la masse du capteur", "de régler la tension du générateur", "de relier la mesure électrique à la grandeur d'intérêt", "de remplacer définitivement le capteur par un thermomètre"],
              answer: 2,
              why: "La courbe d'étalonnage associe à chaque valeur de la grandeur électrique la valeur de la grandeur d'intérêt.",
            },
            {
              q: "Un capteur a été étalonné entre 0 °C et 50 °C. Pour mesurer 80 °C, il faut :",
              options: ["prolonger la courbe d'étalonnage à la règle au-delà de 50 °C", "multiplier la valeur lue par deux", "utiliser la valeur lue à 50 °C", "compléter l'étalonnage jusqu'à au moins 80 °C"],
              answer: 3,
              why: "On n'extrapole pas une courbe d'étalonnage au-delà des points mesurés : il faut étendre l'étalonnage.",
            },
            {
              q: "Dans l'obscurité, la résistance d'une photorésistance est :",
              options: ["très grande", "très petite", "nulle", "négative"],
              answer: 0,
              why: "La résistance d'une photorésistance diminue quand l'éclairement augmente : elle est donc très grande dans l'obscurité.",
            },
          ],
          trap: "Confondre le sens de variation d'une CTN (sa résistance diminue quand la température augmente) avec celui d'une CTP, ou prolonger une courbe d'étalonnage au-delà des points mesurés.",
          method: "Pour exploiter un capteur, enchaînez toujours les trois étapes : mesurer la grandeur électrique (au besoin avec la loi d'Ohm et la loi des mailles), lire la grandeur d'intérêt sur la courbe d'étalonnage, puis vérifier que la valeur trouvée est dans le domaine d'étalonnage et plausible.",
        },
      ],
    },
  ],
}
