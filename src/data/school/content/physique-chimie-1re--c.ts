import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-1re',
  chapters: [
    /* ================================================================== */
    /* L'ÉNERGIE ÉLECTRIQUE                                                 */
    /* ================================================================== */
    {
      id: 'energie-electrique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "intensite-porteurs",
          title: "Porteurs de charge et intensité du courant",
          minutes: 25,
          objectives: [
            "Identifier les porteurs de charge électrique dans un métal et dans une solution ionique.",
            "Relier l'intensité d'un courant continu au débit de charges électriques : I = Q ÷ Δt.",
            "Citer quelques ordres de grandeur d'intensités de courants électriques.",
          ],
          course: [
            {
              heading: "La charge électrique et ses porteurs",
              paragraphs: [
                "La charge électrique est une propriété de certaines particules. Elle se note Q (ou q) et s'exprime en coulomb (symbole C). Elle est quantifiée : toute charge est un multiple entier de la charge élémentaire e = 1,60 × 10⁻¹⁹ C. Un proton porte la charge +e, un électron la charge -e, un ion Cu²⁺ la charge +2e et un ion chlorure Cl⁻ la charge -e.",
                "Un courant électrique est un déplacement d'ensemble de porteurs de charge. Dans un métal (cuivre, aluminium), certains électrons, dits électrons libres, ne sont liés à aucun atome particulier et peuvent se déplacer dans tout le métal : ce sont eux les porteurs de charge. Les ions du métal, eux, restent à leur place.",
                "Dans une solution ionique (on dit aussi électrolyte), comme l'eau salée, il n'y a pas d'électrons libres : les porteurs de charge sont les ions. Les cations (ions positifs) et les anions (ions négatifs) se déplacent en sens opposés. Un isolant (verre, plastique, eau pure en première approximation) ne contient presque pas de porteurs de charge mobiles : il ne conduit pas le courant.",
              ],
              box: { label: "Définition", text: "Les porteurs de charge sont les particules chargées mobiles dont le déplacement d'ensemble constitue le courant : les électrons libres dans un métal, les ions (cations et anions) dans une solution ionique. Charge élémentaire : e = 1,60 × 10⁻¹⁹ C." },
            },
            {
              heading: "Sens conventionnel du courant et mouvement des porteurs",
              paragraphs: [
                "Par convention, le courant circule, à l'extérieur du générateur, de la borne positive vers la borne négative. Cette convention a été fixée au XIXe siècle, avant la découverte de l'électron. Les électrons, de charge négative, se déplacent donc en sens inverse du sens conventionnel : de la borne négative vers la borne positive à l'extérieur du générateur.",
                "Dans une solution ionique, les cations se déplacent dans le sens conventionnel du courant et les anions en sens inverse. Les deux mouvements contribuent au courant dans le même sens : déplacer une charge négative vers la gauche revient, du point de vue électrique, à déplacer une charge positive vers la droite.",
                "Les électrons d'un fil de cuivre avancent très lentement en moyenne, de l'ordre du dixième de millimètre par seconde. Pourtant, la lampe s'allume dès qu'on ferme l'interrupteur : tous les électrons libres du circuit se mettent en mouvement presque en même temps. C'est comme un tuyau déjà rempli d'eau : quand on ouvre le robinet, l'eau sort tout de suite à l'autre bout, alors qu'aucune goutte n'a parcouru le tuyau en entier.",
              ],
            },
            {
              heading: "L'intensité, un débit de charges",
              paragraphs: [
                "L'intensité I d'un courant continu est la quantité de charge électrique qui traverse une section du conducteur par unité de temps. Si une charge Q (en valeur absolue) traverse la section pendant la durée Δt, alors I = Q ÷ Δt. L'intensité s'exprime en ampère (A) : un ampère correspond au passage d'un coulomb par seconde (1 A = 1 C·s⁻¹). L'analogie hydraulique est utile : l'intensité est au courant ce que le débit est à l'eau dans une canalisation.",
                "Inversement, Q = I × Δt. Le nombre N de porteurs de charge élémentaire correspondant vaut N = Q ÷ e. Exemple : un courant de 0,50 A circule pendant 1,0 min. La charge transportée vaut Q = 0,50 × 60 = 30 C, ce qui correspond à N = 30 ÷ (1,60 × 10⁻¹⁹) ≈ 1,9 × 10²⁰ électrons.",
                "La capacité d'une batterie s'exprime souvent en ampère-heure (A·h) ou en milliampère-heure (mA·h) : c'est une charge électrique, celle que transporte un courant de 1 A pendant 1 h. Comme 1 h = 3 600 s, on a 1 A·h = 3 600 C. Une batterie de 3 000 mA·h peut ainsi faire circuler une charge de 3,0 × 3 600 = 10 800 C.",
              ],
              box: { label: "Formule", text: "I = Q ÷ Δt, avec I en ampère (A), Q en coulomb (C) et Δt en seconde (s). Nombre de charges élémentaires : N = Q ÷ e. Conversion : 1 A·h = 3 600 C." },
            },
            {
              heading: "Mesure et ordres de grandeur",
              paragraphs: [
                "L'intensité se mesure avec un ampèremètre branché en série dans le circuit, le courant entrant par la borne A ou mA. Dans un circuit en série, l'intensité est la même en tout point. À un nœud, la somme des intensités des courants qui arrivent est égale à la somme des intensités des courants qui repartent (loi des nœuds) : c'est la traduction de la conservation de la charge, aucune charge ne s'accumule ni ne disparaît.",
                "Quelques ordres de grandeur : une LED témoin fonctionne avec quelques milliampères à une vingtaine de milliampères ; un chargeur de téléphone débite de 1 à 3 A ; un radiateur de 2 000 W branché sur le secteur est parcouru par environ 9 A ; le démarreur d'une voiture appelle quelques centaines d'ampères ; un éclair transporte un courant de l'ordre de 10⁴ à 10⁵ A pendant un temps très bref.",
                "Pour le corps humain, un courant de quelques dizaines de milliampères qui traverse le thorax peut être mortel. C'est pourquoi les installations domestiques comportent un disjoncteur différentiel de 30 mA, qui coupe le courant dès qu'une fuite de cet ordre est détectée.",
              ],
              box: { label: "Repère", text: "LED : environ 10 mA. Chargeur : environ 1 A. Radiateur : environ 10 A. Démarreur : environ 100 A. Foudre : 10⁴ à 10⁵ A. Danger pour l'être humain dès quelques dizaines de mA." },
            },
          ],
          keyPoints: [
            "Porteurs de charge : électrons libres dans un métal, cations et anions dans une solution ionique.",
            "Charge élémentaire : e = 1,60 × 10⁻¹⁹ C ; toute charge est un multiple de e.",
            "Les électrons se déplacent en sens inverse du sens conventionnel du courant.",
            "Intensité d'un courant continu : I = Q ÷ Δt, en ampère (1 A = 1 C·s⁻¹).",
            "Nombre de charges élémentaires : N = Q ÷ e ; capacité d'une batterie : 1 A·h = 3 600 C.",
          ],
          example: {
            statement: "Un téléphone est rechargé pendant 45 min par un courant d'intensité constante I = 2,0 A. Donnée : e = 1,60 × 10⁻¹⁹ C. Calculer la charge électrique transférée, le nombre d'électrons correspondant, puis exprimer cette charge en mA·h.",
            solution: [
              "Conversion de la durée : Δt = 45 × 60 = 2 700 s.",
              "Charge transférée : Q = I × Δt = 2,0 × 2 700 = 5 400 C, soit 5,4 × 10³ C.",
              "Nombre d'électrons : N = Q ÷ e = 5 400 ÷ (1,60 × 10⁻¹⁹) ≈ 3,4 × 10²² électrons.",
              "En mA·h : I = 2 000 mA et Δt = 0,75 h, donc Q = 2 000 × 0,75 = 1 500 mA·h. Vérification : 1,5 A·h × 3 600 = 5 400 C.",
              "Réponse : Q = 5,4 × 10³ C, soit environ 3,4 × 10²² électrons, ou encore 1 500 mA·h.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une charge électrique de 12 C traverse le filament d'une lampe en 40 s. Donnée : e = 1,60 × 10⁻¹⁹ C. 1. Calculer l'intensité du courant qui traverse la lampe. 2. Calculer le nombre d'électrons qui traversent une section du filament pendant ces 40 s.",
              hint: "Appliquez I = Q ÷ Δt avec Δt en secondes, puis N = Q ÷ e.",
              solution: [
                "1. I = Q ÷ Δt = 12 ÷ 40 = 0,30 A.",
                "2. N = Q ÷ e = 12 ÷ (1,60 × 10⁻¹⁹) = 7,5 × 10¹⁹ électrons.",
                "Réponse : I = 0,30 A et N = 7,5 × 10¹⁹ électrons.",
              ],
            },
            {
              level: 2,
              statement: "Une solution de chlorure de sodium (Na⁺ + Cl⁻) est placée dans un tube entre deux électrodes reliées à un générateur. On considère une section du tube. Pendant Δt = 100 s, 2,5 × 10¹⁸ ions sodium traversent cette section dans le sens conventionnel du courant, et 3,75 × 10¹⁸ ions chlorure la traversent en sens inverse (données fictives). Donnée : e = 1,60 × 10⁻¹⁹ C. 1. Quels sont les porteurs de charge dans cette solution ? 2. Calculer la charge transportée par les ions sodium, puis celle transportée par les ions chlorure (en valeur absolue). 3. Expliquer pourquoi ces deux charges s'ajoutent. 4. En déduire l'intensité du courant.",
              hint: "Chaque ion Na⁺ porte la charge +e et chaque ion Cl⁻ la charge -e. Un anion qui se déplace dans un sens équivaut, électriquement, à un cation qui se déplace dans l'autre sens.",
              solution: [
                "1. Dans une solution ionique, les porteurs de charge sont les ions : ici les cations Na⁺ et les anions Cl⁻.",
                "2. Ions sodium : Q₁ = 2,5 × 10¹⁸ × 1,60 × 10⁻¹⁹ = 0,40 C. Ions chlorure : Q₂ = 3,75 × 10¹⁸ × 1,60 × 10⁻¹⁹ = 0,60 C.",
                "3. Les anions, négatifs, se déplacent en sens inverse du sens conventionnel : cela revient à transporter une charge positive dans le sens du courant. Les deux mouvements contribuent donc au courant dans le même sens.",
                "4. Charge totale : Q = 0,40 + 0,60 = 1,00 C ; I = Q ÷ Δt = 1,00 ÷ 100 = 1,0 × 10⁻² A.",
                "Réponse : I = 1,0 × 10⁻² A, soit 10 mA.",
              ],
            },
            {
              level: 3,
              statement: "La batterie d'un téléphone a une capacité de 4 000 mA·h (données fictives mais réalistes). Donnée : e = 1,60 × 10⁻¹⁹ C. 1. Exprimer cette capacité en coulombs. 2. Calculer le nombre d'électrons correspondant. 3. La batterie, vide, est rechargée par un courant constant de 2,0 A. Calculer la durée de la charge complète. 4. Un chargeur rapide annonce une recharge de 0 à 50 % en 30 min. Quelle intensité moyenne doit-il délivrer ? 5. Dans le câble de 1,0 m qui relie le chargeur au téléphone, la vitesse moyenne de déplacement des électrons est de l'ordre de 0,1 mm·s⁻¹. Un élève en conclut qu'il faut près de trois heures pour que le téléphone commence à se charger. Calculer la durée qu'il évoque, puis expliquer son erreur.",
              hint: "1 A·h = 3 600 C. Pour la dernière question, distinguez la vitesse des électrons et la vitesse à laquelle le mouvement d'ensemble s'établit dans tout le circuit.",
              solution: [
                "1. Q = 4,000 A·h × 3 600 s·h⁻¹ = 14 400 C, soit 1,44 × 10⁴ C.",
                "2. N = Q ÷ e = 14 400 ÷ (1,60 × 10⁻¹⁹) = 9,0 × 10²² électrons.",
                "3. Δt = Q ÷ I = 14 400 ÷ 2,0 = 7 200 s, soit 2,0 h.",
                "4. La moitié de la charge vaut 7 200 C, à transférer en 30 min = 1 800 s : I = 7 200 ÷ 1 800 = 4,0 A.",
                "5. Durée évoquée : Δt = d ÷ v = 1,0 ÷ (1 × 10⁻⁴) = 1 × 10⁴ s, soit environ 2,8 h.",
                "L'erreur : le câble est déjà rempli d'électrons libres. Dès la fermeture du circuit, ils se mettent tous en mouvement presque simultanément, si bien que le courant s'établit quasi instantanément partout, comme l'eau qui sort aussitôt d'un tuyau déjà plein.",
                "Réponse : 1,44 × 10⁴ C ; 9,0 × 10²² électrons ; 2,0 h ; 4,0 A ; la charge commence immédiatement, même si chaque électron avance très lentement.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa valeur, son unité ou sa description.",
            pairs: [
              { left: "Charge électrique Q", right: "coulomb (C)" },
              { left: "Intensité I", right: "ampère (A), soit C·s⁻¹" },
              { left: "Charge élémentaire e", right: "1,60 × 10⁻¹⁹ C" },
              { left: "Porteurs de charge dans un métal", right: "électrons libres" },
              { left: "Porteurs de charge dans une solution ionique", right: "cations et anions" },
              { left: "Un ampère-heure", right: "3 600 C" },
            ],
          },
          quiz: [
            {
              q: "Dans un fil de cuivre parcouru par un courant, les porteurs de charge sont :",
              options: ["les ions cuivre Cu²⁺", "les électrons libres", "les protons des noyaux", "les atomes de cuivre"],
              answer: 1,
              why: "Dans un métal, seuls certains électrons, dits libres, peuvent se déplacer dans tout le matériau ; les ions et les noyaux restent fixes.",
            },
            {
              q: "Un courant d'intensité 0,20 A circule pendant 50 s. Quelle charge a traversé une section du circuit ?",
              options: ["4,0 C", "0,0040 C", "10 C", "250 C"],
              answer: 2,
              why: "Q = I × Δt = 0,20 × 50 = 10 C.",
            },
            {
              q: "À l'extérieur du générateur, les électrons se déplacent :",
              options: ["en sens inverse du sens conventionnel", "dans le sens conventionnel du courant", "alternativement dans les deux sens", "de la borne positive vers la borne négative"],
              answer: 0,
              why: "Les électrons sont négatifs : ils vont de la borne négative vers la borne positive, à l'inverse du sens conventionnel du courant.",
            },
            {
              q: "Quel est l'ordre de grandeur de l'intensité du courant dans une LED témoin ?",
              options: ["environ 20 A", "environ 20 µA", "environ 2 kA", "environ 20 mA"],
              answer: 3,
              why: "Une LED témoin fonctionne avec quelques milliampères à une vingtaine de milliampères.",
            },
            {
              q: "Dans une solution ionique, le courant est dû :",
              options: ["aux seuls cations, attirés par la borne négative", "aux cations et aux anions, en sens opposés", "aux électrons libres qui circulent dans l'eau", "aux molécules d'eau qui se déplacent"],
              answer: 1,
              why: "Dans un électrolyte, les porteurs sont les ions : les cations vont dans le sens conventionnel du courant, les anions en sens inverse, et les deux contribuent au courant.",
            },
          ],
          trap: "Confondre le sens conventionnel du courant avec le sens de déplacement des électrons, ou oublier de convertir les minutes en secondes (et les mA·h en coulombs) avant d'appliquer I = Q ÷ Δt.",
          method: "Écrivez toujours la relation littérale (Q = I × Δt), puis convertissez chaque grandeur dans l'unité du Système international (A, s, C) avant de remplacer. Contrôlez l'ordre de grandeur final : un nombre d'électrons est toujours gigantesque, de l'ordre de 10¹⁸ ou plus.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "source-reelle-tension",
          title: "Modèle d’une source réelle de tension",
          minutes: 30,
          objectives: [
            "Modéliser une source réelle de tension continue par l'association en série d'une source idéale de tension et d'une résistance.",
            "Tracer et exploiter la caractéristique tension-courant d'une source réelle de tension continue.",
            "Expliquer quelques conséquences pratiques de la présence d'une résistance dans le modèle d'une source réelle.",
            "Déterminer le point de fonctionnement d'un circuit formé d'une source réelle et d'un conducteur ohmique.",
          ],
          course: [
            {
              heading: "Source idéale et source réelle",
              paragraphs: [
                "Une source idéale de tension continue maintient entre ses bornes une tension constante, quelle que soit l'intensité du courant qu'elle débite. C'est un modèle : aucune pile, aucune batterie ne se comporte exactement ainsi. Si l'on mesure la tension aux bornes d'une pile plate de 4,5 V, on trouve environ 4,5 V quand elle ne débite pas, mais un peu moins quand elle alimente une lampe, et encore moins si l'on branche plusieurs lampes en dérivation.",
                "La tension mesurée aux bornes d'une source qui ne débite aucun courant (circuit ouvert) s'appelle la tension à vide. On la note E et on l'appelle aussi force électromotrice (f.é.m.) de la source ; elle s'exprime en volts. Pour une source réelle, la tension U entre ses bornes diminue lorsque l'intensité I du courant débité augmente.",
                "Pour décrire un générateur, on utilise la convention générateur : les flèches représentant la tension U à ses bornes et l'intensité I du courant qu'il débite sont orientées dans le même sens. Avec cette convention, U et I sont positifs lorsque la source fournit de l'énergie au reste du circuit.",
              ],
            },
            {
              heading: "Le modèle : U = E - r × I",
              paragraphs: [
                "Une source réelle de tension continue se modélise par l'association en série d'une source idéale de tension, de tension E, et d'un conducteur ohmique de résistance r, appelée résistance interne. Quand la source débite un courant I, la résistance interne provoque, d'après la loi d'Ohm, une chute de tension r × I. La tension disponible aux bornes de la source vaut donc U = E - r × I.",
                "Exemple : une pile de f.é.m. E = 4,5 V et de résistance interne r = 1,5 Ω débite un courant I = 0,30 A. La tension à ses bornes vaut U = 4,5 - 1,5 × 0,30 = 4,5 - 0,45 = 4,05 V, soit environ 4,1 V. Si elle ne débite rien (I = 0), U = E = 4,5 V.",
                "Plus la résistance interne est faible, plus la source se rapproche d'une source idéale. Une batterie de voiture, conçue pour débiter de fortes intensités, a une résistance interne de l'ordre de quelques centièmes d'ohm ; une pile saline a une résistance interne de l'ordre de l'ohm. La résistance interne d'une pile ou d'une batterie augmente quand elle vieillit ou se décharge.",
              ],
              box: { label: "Formule", text: "Modèle d'une source réelle de tension continue (convention générateur) : U = E - r × I, avec U et E en volts (V), r en ohms (Ω) et I en ampères (A). E est la tension à vide (force électromotrice), r la résistance interne." },
            },
            {
              heading: "La caractéristique tension-courant",
              paragraphs: [
                "La caractéristique d'une source est la courbe qui représente la tension U à ses bornes en fonction de l'intensité I du courant débité. Pour la tracer, on branche la source sur un rhéostat (résistance variable), avec un ampèremètre en série et un voltmètre aux bornes de la source, puis on relève plusieurs couples (I ; U) en faisant varier le rhéostat.",
                "Pour une source réelle modélisée par U = E - r × I, la caractéristique est une droite décroissante. Son ordonnée à l'origine est la f.é.m. E et son coefficient directeur vaut -r. On détermine donc r à partir de deux points de la droite : r = -(U₂ - U₁) ÷ (I₂ - I₁). Pour une source idéale, la caractéristique serait une droite horizontale (r = 0).",
                "Le modèle n'est valable que dans un certain domaine d'intensités. En prolongeant la droite jusqu'à U = 0, on obtiendrait l'intensité de court-circuit Icc = E ÷ r, que l'on ne doit jamais chercher à mesurer : relier directement les deux bornes d'une source provoque un courant intense et un fort échauffement, qui peut endommager la source ou provoquer un incendie.",
              ],
              box: { label: "À retenir", text: "Caractéristique U = f(I) d'une source réelle : droite décroissante d'ordonnée à l'origine E et de coefficient directeur -r. Intensité de court-circuit (théorique) : Icc = E ÷ r." },
            },
            {
              heading: "Point de fonctionnement et conséquences pratiques",
              paragraphs: [
                "Branchons un conducteur ohmique de résistance R aux bornes de la source. La même tension U et la même intensité I vérifient à la fois U = E - r × I (la source) et U = R × I (le conducteur, loi d'Ohm). En égalant : R × I = E - r × I, donc I = E ÷ (R + r). Graphiquement, le point de fonctionnement est l'intersection des deux caractéristiques.",
                "Conséquence pratique : la tension disponible baisse quand on demande un fort courant. Quand le démarreur d'une voiture appelle plusieurs centaines d'ampères, la tension de la batterie chute nettement et les phares faiblissent un instant. De même, plusieurs appareils branchés sur une même pile reçoivent une tension plus faible que si un seul était branché.",
                "Autre conséquence : la résistance interne s'échauffe quand la source débite (effet Joule), ce qui explique que les batteries chauffent lors d'une charge ou d'une décharge rapide. Enfin, une batterie usée, dont la résistance interne a augmenté, affiche encore une tension à vide correcte, mais sa tension s'effondre dès qu'elle doit débiter un courant important : c'est la panne classique des matins d'hiver.",
              ],
            },
          ],
          keyPoints: [
            "Source idéale : U constante quel que soit I. Source réelle : U diminue quand I augmente.",
            "Modèle d'une source réelle : source idéale de tension E en série avec une résistance interne r.",
            "Loi de la source réelle (convention générateur) : U = E - r × I.",
            "Caractéristique : droite décroissante, ordonnée à l'origine E, coefficient directeur -r.",
            "Avec un conducteur ohmique R : I = E ÷ (R + r) ; le court-circuit (Icc = E ÷ r) est dangereux.",
          ],
          example: {
            statement: "On relève la tension aux bornes d'une pile pour plusieurs intensités : I = 0 A, U = 4,50 V ; I = 0,20 A, U = 4,10 V ; I = 0,40 A, U = 3,70 V. 1. Montrer que ces mesures sont compatibles avec le modèle U = E - r × I et déterminer E et r. 2. On branche la pile sur un conducteur ohmique de résistance R = 10 Ω. Calculer l'intensité du courant et la tension aux bornes de la pile.",
            solution: [
              "1. Quand I augmente de 0,20 A, U diminue chaque fois de 0,40 V : les points sont alignés sur une droite décroissante, conformément au modèle.",
              "Ordonnée à l'origine : E = 4,50 V (tension à vide, pour I = 0).",
              "Coefficient directeur : (3,70 - 4,50) ÷ (0,40 - 0) = -0,80 ÷ 0,40 = -2,0 Ω, donc r = 2,0 Ω.",
              "2. Point de fonctionnement : R × I = E - r × I, donc I = E ÷ (R + r) = 4,50 ÷ (10 + 2,0) = 0,375 A ≈ 0,38 A.",
              "Tension : U = R × I = 10 × 0,375 ≈ 3,8 V. Vérification avec la loi de la pile : U = 4,50 - 2,0 × 0,375 = 3,75 V.",
              "Réponse : E = 4,50 V, r = 2,0 Ω ; I ≈ 0,38 A et U ≈ 3,8 V.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une batterie a une force électromotrice E = 9,0 V et une résistance interne r = 3,0 Ω. 1. Calculer la tension à ses bornes lorsqu'elle débite un courant de 0,50 A. 2. Quelle intensité débite-t-elle lorsque la tension à ses bornes vaut 7,2 V ?",
              hint: "Utilisez U = E - r × I ; pour la question 2, isolez I : I = (E - U) ÷ r.",
              solution: [
                "1. U = E - r × I = 9,0 - 3,0 × 0,50 = 9,0 - 1,5 = 7,5 V.",
                "2. I = (E - U) ÷ r = (9,0 - 7,2) ÷ 3,0 = 1,8 ÷ 3,0 = 0,60 A.",
                "Réponse : U = 7,5 V ; I = 0,60 A.",
              ],
            },
            {
              level: 2,
              statement: "On trace la caractéristique d'une source de tension continue. Mesures : I (A) : 0 ; 0,10 ; 0,20 ; 0,30 ; 0,40. U (V) : 6,00 ; 5,75 ; 5,50 ; 5,25 ; 5,00. 1. Décrire l'allure de la caractéristique U = f(I). 2. Déterminer la force électromotrice E et la résistance interne r de la source. 3. Écrire l'équation de la caractéristique. 4. Calculer l'intensité de court-circuit théorique et expliquer pourquoi on ne la mesure pas.",
              hint: "Calculez la variation de U pour chaque variation de 0,10 A de I : si elle est constante, les points sont alignés.",
              solution: [
                "1. À chaque augmentation de 0,10 A, U diminue de 0,25 V : la caractéristique est une droite décroissante.",
                "2. Ordonnée à l'origine : E = 6,00 V. Coefficient directeur : -0,25 ÷ 0,10 = -2,5 Ω, donc r = 2,5 Ω.",
                "3. U = 6,00 - 2,5 × I. Vérification pour I = 0,30 A : 6,00 - 0,75 = 5,25 V, conforme au tableau.",
                "4. Icc = E ÷ r = 6,00 ÷ 2,5 = 2,4 A. On ne la mesure pas : relier directement les bornes provoquerait un fort échauffement de la source et un risque de détérioration ou d'incendie ; de plus, le modèle linéaire n'est pas forcément valable aussi loin.",
                "Réponse : droite décroissante ; E = 6,00 V et r = 2,5 Ω ; U = 6,00 - 2,5 × I ; Icc = 2,4 A (théorique).",
              ],
            },
            {
              level: 3,
              statement: "Une batterie de voiture est modélisée par une source de f.é.m. E = 12,6 V et de résistance interne r = 0,020 Ω (données fictives mais réalistes). 1. Les deux phares allumés appellent ensemble un courant de 10 A. Calculer la tension aux bornes de la batterie. 2. Au démarrage, le démarreur appelle un courant de 150 A. Calculer la nouvelle tension aux bornes de la batterie et expliquer pourquoi les phares faiblissent pendant le démarrage. 3. Calculer l'intensité de court-circuit de cette batterie et commenter. 4. Après plusieurs hivers, la résistance interne atteint 0,050 Ω, la f.é.m. restant égale à 12,6 V. En supposant que le démarreur appelle toujours 150 A, calculer la tension au démarrage et expliquer les difficultés de démarrage.",
              hint: "Appliquez U = E - r × I dans chaque cas. Les phares sont branchés sur la batterie : ils reçoivent la tension U disponible à ses bornes.",
              solution: [
                "1. U = 12,6 - 0,020 × 10 = 12,6 - 0,20 = 12,4 V.",
                "2. U = 12,6 - 0,020 × 150 = 12,6 - 3,0 = 9,6 V. Les phares, branchés aux bornes de la batterie, reçoivent une tension plus faible pendant le démarrage : ils éclairent moins.",
                "3. Icc = E ÷ r = 12,6 ÷ 0,020 = 630 A. Un court-circuit (par exemple une clé posée entre les deux bornes) ferait circuler un courant énorme : échauffement intense, risque de brûlure, d'incendie et de détérioration de la batterie.",
                "4. U = 12,6 - 0,050 × 150 = 12,6 - 7,5 = 5,1 V. La tension s'effondre : le démarreur et l'électronique ne disposent plus d'une tension suffisante. La tension à vide reste pourtant normale, ce qui trompe un contrôle fait sans courant débité.",
                "Réponse : 12,4 V ; 9,6 V ; 630 A ; 5,1 V : une batterie usée se reconnaît à sa résistance interne élevée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre compréhension du modèle de la source réelle.",
            statements: [
              { text: "La tension aux bornes d'une source réelle est la même quel que soit le courant débité.", true: false, why: "C'est le cas d'une source idéale. Pour une source réelle, U = E - r × I diminue quand I augmente." },
              { text: "La force électromotrice E est la tension aux bornes de la source quand elle ne débite pas de courant.", true: true, why: "Pour I = 0, U = E : c'est la tension à vide." },
              { text: "La caractéristique d'une source réelle a un coefficient directeur égal à -r.", true: true, why: "U = E - r × I est une fonction affine de I de coefficient directeur -r." },
              { text: "Plus la résistance interne est grande, plus la source se rapproche d'une source idéale.", true: false, why: "C'est l'inverse : une source idéale aurait une résistance interne nulle." },
              { text: "L'intensité de court-circuit d'une source vaut E ÷ r.", true: true, why: "En court-circuit, U = 0, donc E - r × Icc = 0 et Icc = E ÷ r." },
              { text: "Une batterie usée se repère toujours en mesurant sa tension à vide.", true: false, why: "Sa tension à vide peut rester correcte : c'est sa résistance interne, révélée quand elle débite, qui a augmenté." },
              { text: "Avec un conducteur ohmique R, l'intensité vaut I = E ÷ (R + r).", true: true, why: "On égale R × I et E - r × I, puis on isole I." },
            ],
          },
          quiz: [
            {
              q: "Une source de f.é.m. E = 12 V et de résistance interne r = 2,0 Ω débite 1,5 A. La tension à ses bornes vaut :",
              options: ["15 V", "9,0 V", "12 V", "3,0 V"],
              answer: 1,
              why: "U = E - r × I = 12 - 2,0 × 1,5 = 12 - 3,0 = 9,0 V.",
            },
            {
              q: "Sur la caractéristique U = f(I) d'une source réelle, l'ordonnée à l'origine est :",
              options: ["la résistance interne r", "l'intensité de court-circuit", "la force électromotrice E", "toujours nulle"],
              answer: 2,
              why: "Pour I = 0, U = E : la droite coupe l'axe des tensions en E.",
            },
            {
              q: "Le modèle d'une source réelle de tension continue associe :",
              options: ["une source idéale de tension et une résistance, en série", "deux sources idéales de tension, en dérivation", "une résistance et un ampèremètre, en dérivation", "une source idéale de tension seule, sans pertes"],
              answer: 0,
              why: "On modélise la source réelle par une source idéale de tension E en série avec sa résistance interne r.",
            },
            {
              q: "On branche un conducteur ohmique R = 8,0 Ω sur une pile (E = 4,5 V ; r = 1,0 Ω). L'intensité du courant vaut :",
              options: ["0,56 A", "4,5 A", "0,64 A", "0,50 A"],
              answer: 3,
              why: "I = E ÷ (R + r) = 4,5 ÷ (8,0 + 1,0) = 0,50 A.",
            },
            {
              q: "Pourquoi les phares d'une voiture faiblissent-ils pendant le démarrage ?",
              options: ["Le démarreur consomme toute la charge de la batterie", "La forte intensité augmente la chute de tension r × I", "La f.é.m. de la batterie devient nulle", "Les phares sont branchés en série avec le démarreur"],
              answer: 1,
              why: "Le démarreur appelle un courant intense : U = E - r × I diminue nettement, et les phares reçoivent une tension plus faible.",
            },
          ],
          trap: "Écrire U = E + r × I pour une source qui débite (le signe est moins en convention générateur), ou prendre la tension mesurée en charge pour la force électromotrice E, qui ne se lit que pour I = 0.",
          method: "Pour exploiter une caractéristique, repérez d'abord l'ordonnée à l'origine (E), puis calculez le coefficient directeur avec deux points éloignés de la droite (ce qui limite l'effet des erreurs de lecture) : r est son opposé. Vérifiez enfin votre modèle sur un troisième point du tableau.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "puissance-rendement",
          title: "Puissance, effet Joule et rendement d’un convertisseur",
          minutes: 35,
          objectives: [
            "Utiliser les relations P = U × I et E = P × Δt pour calculer une puissance ou une énergie électrique.",
            "Exprimer la puissance dissipée par effet Joule dans un conducteur ohmique : P = R × I².",
            "Réaliser un bilan de puissance dans un circuit, notamment pour une source réelle de tension.",
            "Définir et évaluer le rendement d'un convertisseur.",
          ],
          course: [
            {
              heading: "Puissance et énergie électriques",
              paragraphs: [
                "Un dipôle soumis à une tension U et traversé par un courant d'intensité I échange avec le reste du circuit une puissance électrique P = U × I. La puissance s'exprime en watt (W), avec U en volts et I en ampères. Pour un récepteur (lampe, moteur, radiateur), on parle de puissance reçue ; pour un générateur, de puissance fournie au circuit.",
                "L'énergie électrique échangée pendant une durée Δt vaut E = P × Δt. Dans le Système international, elle s'exprime en joule (J), avec P en watts et Δt en secondes. Les fournisseurs d'électricité utilisent le kilowattheure : 1 kWh est l'énergie échangée par un appareil de 1 kW pendant 1 h, soit 1 000 × 3 600 = 3,6 × 10⁶ J.",
                "Ordres de grandeur : une calculatrice de poche consomme moins d'un milliwatt, une ampoule LED une dizaine de watts, un ordinateur portable quelques dizaines de watts, un four électrique quelques kilowatts, une rame de TGV environ 10 MW et un réacteur de centrale nucléaire environ 1 GW (puissance électrique).",
              ],
              box: { label: "Formule", text: "P = U × I (W, V, A). E = P × Δt (J, W, s). 1 kWh = 3,6 × 10⁶ J." },
            },
            {
              heading: "L'effet Joule",
              paragraphs: [
                "Tout conducteur parcouru par un courant s'échauffe : c'est l'effet Joule. Les porteurs de charge, en se déplaçant, cèdent de l'énergie au matériau, qui la transfère ensuite à l'extérieur sous forme thermique. Pour un conducteur ohmique de résistance R, la loi d'Ohm U = R × I donne P = U × I = R × I². On peut aussi écrire P = U² ÷ R.",
                "L'effet Joule est utile dans un radiateur électrique, un grille-pain, une bouilloire ou un fusible, qui fond si l'intensité devient trop grande. Il est nuisible quand il représente une perte : échauffement des câbles, des composants électroniques, des moteurs, et pertes dans les lignes électriques.",
                "Les pertes en ligne expliquent pourquoi l'électricité est transportée sous très haute tension (jusqu'à 400 kV en France). Pour une puissance transportée P = U × I fixée, multiplier la tension par 20 divise l'intensité par 20, donc les pertes R × I² par 20² = 400. Des transformateurs élèvent la tension à la sortie des centrales et l'abaissent près des lieux de consommation.",
              ],
              box: { label: "Propriété", text: "Puissance dissipée par effet Joule dans un conducteur ohmique de résistance R : P = R × I² = U² ÷ R. Elle est intégralement convertie en énergie thermique." },
            },
            {
              heading: "Bilan de puissance d'un circuit",
              paragraphs: [
                "Dans un circuit, l'énergie se conserve : la puissance fournie par les générateurs est égale à la somme des puissances reçues par les récepteurs. C'est ce qu'on appelle un bilan de puissance. Il permet par exemple de calculer une grandeur inconnue (une intensité, une résistance) ou de repérer les pertes.",
                "Appliquons-le à une source réelle de tension. En multipliant U = E - r × I par I, on obtient U × I = E × I - r × I². Interprétation : la source convertit une puissance E × I (d'origine chimique pour une pile, mécanique pour une dynamo) ; une partie r × I² est dissipée par effet Joule dans sa résistance interne ; le reste, U × I, est fourni au circuit extérieur.",
                "Exemple : une batterie de f.é.m. E = 12 V et de résistance interne r = 0,50 Ω débite 2,0 A. Puissance convertie : 12 × 2,0 = 24 W. Pertes internes : 0,50 × 2,0² = 2,0 W. Puissance fournie au circuit : 24 - 2,0 = 22 W, ce que l'on retrouve avec U = 12 - 0,50 × 2,0 = 11 V et U × I = 22 W.",
              ],
              box: { label: "À retenir", text: "Source réelle : E × I (puissance convertie) = U × I (puissance fournie au circuit) + r × I² (pertes par effet Joule)." },
            },
            {
              heading: "Convertisseur et rendement",
              paragraphs: [
                "Un convertisseur est un dispositif qui convertit une forme d'énergie en une autre : un moteur électrique convertit de l'énergie électrique en énergie mécanique, un panneau photovoltaïque de l'énergie lumineuse en énergie électrique, une lampe de l'énergie électrique en énergie lumineuse. Une partie de l'énergie reçue n'est jamais convertie sous la forme souhaitée : elle est dissipée, le plus souvent sous forme thermique.",
                "Le rendement η (lettre grecque êta) d'un convertisseur est le quotient de l'énergie utile par l'énergie reçue, ou de la puissance utile par la puissance reçue : η = E utile ÷ E reçue = P utile ÷ P reçue. C'est un nombre sans unité, compris entre 0 et 1, souvent exprimé en pourcentage. Il est toujours inférieur à 1 (100 %).",
                "Ordres de grandeur : un gros moteur électrique a un rendement supérieur à 90 % ; un panneau photovoltaïque courant, de l'ordre de 15 à 20 % ; une lampe à incandescence, quelques pourcents seulement, car elle chauffe bien plus qu'elle n'éclaire. Pour une source réelle de tension, le rendement vaut η = (U × I) ÷ (E × I) = U ÷ E.",
              ],
              box: { label: "Définition", text: "Rendement d'un convertisseur : η = P utile ÷ P reçue = E utile ÷ E reçue, sans unité, 0 ≤ η < 1. Énergie dissipée : E reçue - E utile." },
            },
          ],
          keyPoints: [
            "Puissance électrique : P = U × I ; énergie : E = P × Δt ; 1 kWh = 3,6 × 10⁶ J.",
            "Effet Joule dans un conducteur ohmique : P = R × I² = U² ÷ R.",
            "Transport sous haute tension : pour une puissance donnée, I plus faible, donc pertes R × I² plus faibles.",
            "Bilan d'une source réelle : E × I = U × I + r × I².",
            "Rendement : η = P utile ÷ P reçue, sans unité, toujours inférieur à 1.",
          ],
          example: {
            statement: "Le moteur d'un jouet est alimenté sous une tension U = 6,0 V et traversé par un courant I = 0,50 A. Il fournit une puissance mécanique de 2,4 W. 1. Calculer la puissance électrique reçue par le moteur et l'énergie reçue en 10 min. 2. Calculer son rendement. 3. On suppose que les pertes sont dues uniquement à l'effet Joule dans le bobinage. Calculer la résistance du bobinage.",
            solution: [
              "1. P reçue = U × I = 6,0 × 0,50 = 3,0 W. Énergie reçue en 10 min = 600 s : E = 3,0 × 600 = 1 800 J, soit 1,8 × 10³ J.",
              "2. η = P utile ÷ P reçue = 2,4 ÷ 3,0 = 0,80, soit 80 %.",
              "3. Puissance perdue : 3,0 - 2,4 = 0,60 W. Si elle est due à l'effet Joule : R × I² = 0,60, donc R = 0,60 ÷ 0,50² = 0,60 ÷ 0,25 = 2,4 Ω.",
              "Réponse : 3,0 W et 1,8 × 10³ J ; η = 80 % ; R = 2,4 Ω.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une bouilloire électrique porte l'indication 230 V ; 2 200 W. 1. Calculer l'intensité du courant qui la traverse en fonctionnement normal. 2. Calculer l'énergie qu'elle reçoit en 3,0 min, en joules puis en kWh. 3. En considérant sa résistance chauffante comme un conducteur ohmique, calculer sa résistance.",
              hint: "I = P ÷ U ; pour l'énergie en kWh, exprimez P en kW et Δt en h ; pour la résistance, utilisez P = U² ÷ R.",
              solution: [
                "1. I = P ÷ U = 2 200 ÷ 230 ≈ 9,6 A.",
                "2. E = P × Δt = 2 200 × 180 = 396 000 J ≈ 3,96 × 10⁵ J. En kWh : 2,2 kW × 0,050 h = 0,11 kWh (et 3,96 × 10⁵ ÷ 3,6 × 10⁶ = 0,11).",
                "3. R = U² ÷ P = 230² ÷ 2 200 = 52 900 ÷ 2 200 ≈ 24 Ω.",
                "Réponse : I ≈ 9,6 A ; E ≈ 3,96 × 10⁵ J = 0,11 kWh ; R ≈ 24 Ω.",
              ],
            },
            {
              level: 2,
              statement: "Une batterie de f.é.m. E = 12 V et de résistance interne r = 0,50 Ω alimente un conducteur ohmique ; elle débite un courant I = 2,0 A. 1. Calculer la puissance convertie par la batterie et la puissance dissipée par effet Joule dans sa résistance interne. 2. En déduire la puissance fournie au conducteur ohmique, puis la tension aux bornes de la batterie. 3. Calculer le rendement de la batterie dans ces conditions. 4. Calculer la résistance R du conducteur ohmique et vérifier la valeur de l'intensité.",
              hint: "Utilisez le bilan E × I = U × I + r × I². Le rendement d'une source réelle peut s'écrire η = U ÷ E.",
              solution: [
                "1. Puissance convertie : E × I = 12 × 2,0 = 24 W. Pertes internes : r × I² = 0,50 × 2,0² = 2,0 W.",
                "2. Puissance fournie : U × I = 24 - 2,0 = 22 W, donc U = 22 ÷ 2,0 = 11 V (on retrouve U = 12 - 0,50 × 2,0 = 11 V).",
                "3. η = 22 ÷ 24 ≈ 0,92, soit environ 92 % (ou η = U ÷ E = 11 ÷ 12).",
                "4. R = U ÷ I = 11 ÷ 2,0 = 5,5 Ω. Vérification : I = E ÷ (R + r) = 12 ÷ (5,5 + 0,50) = 12 ÷ 6,0 = 2,0 A.",
                "Réponse : 24 W et 2,0 W ; 22 W et 11 V ; η ≈ 92 % ; R = 5,5 Ω.",
              ],
            },
            {
              level: 3,
              statement: "Une centrale doit transporter une puissance P = 10 MW vers une ville, par une ligne de résistance totale R = 5,0 Ω (données fictives). 1. Le transport se fait sous une tension U = 20 kV. Calculer l'intensité du courant dans la ligne, la puissance perdue par effet Joule et le pourcentage de la puissance transportée qu'elle représente. 2. Reprendre les calculs pour un transport sous U = 400 kV. 3. Calculer le rapport des pertes dans les deux cas et le relier au rapport des tensions. 4. Calculer le rendement de la ligne dans chaque cas et conclure sur l'intérêt des transformateurs.",
              hint: "Pour une puissance fixée, I = P ÷ U ; les pertes valent R × I². Le rendement de la ligne est (P - pertes) ÷ P.",
              solution: [
                "1. I = P ÷ U = 10 × 10⁶ ÷ 20 × 10³ = 500 A. Pertes : R × I² = 5,0 × 500² = 1,25 × 10⁶ W = 1,25 MW, soit 1,25 ÷ 10 = 12,5 % de la puissance transportée.",
                "2. I = 10 × 10⁶ ÷ 400 × 10³ = 25 A. Pertes : 5,0 × 25² = 3 125 W ≈ 3,1 kW, soit 3 125 ÷ 10⁷ ≈ 0,031 %.",
                "3. Rapport des pertes : 1,25 × 10⁶ ÷ 3 125 = 400. Le rapport des tensions vaut 400 ÷ 20 = 20, et 20² = 400 : les pertes sont inversement proportionnelles au carré de la tension.",
                "4. Rendement : η = (10 - 1,25) ÷ 10 = 87,5 % sous 20 kV ; η = (10⁷ - 3 125) ÷ 10⁷ ≈ 99,97 % sous 400 kV.",
                "Conclusion : élever la tension avec un transformateur avant le transport réduit considérablement les pertes par effet Joule ; on l'abaisse ensuite avant la distribution aux usagers.",
                "Réponse : 500 A, 1,25 MW, 12,5 % ; 25 A, environ 3,1 kW, 0,031 % ; rapport 400 = 20² ; rendements 87,5 % et 99,97 %.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces dispositifs de la plus petite à la plus grande puissance électrique mise en jeu.",
            items: [
              "Calculatrice de poche",
              "Ampoule LED d'éclairage",
              "Ordinateur portable",
              "Four électrique",
              "Rame de TGV à pleine vitesse",
              "Réacteur de centrale nucléaire",
            ],
          },
          quiz: [
            {
              q: "Un appareil branché sous 230 V est traversé par un courant de 5,0 A. Sa puissance vaut :",
              options: ["46 W", "1 150 W", "235 W", "0,022 W"],
              answer: 1,
              why: "P = U × I = 230 × 5,0 = 1 150 W.",
            },
            {
              q: "La puissance dissipée par effet Joule dans un conducteur ohmique de résistance R vaut :",
              options: ["P = R × I²", "P = R ÷ I²", "P = R × I", "P = I ÷ R"],
              answer: 0,
              why: "Avec U = R × I, on obtient P = U × I = R × I².",
            },
            {
              q: "Un moteur de rendement 80 % reçoit une puissance électrique de 500 W. Quelle puissance mécanique fournit-il ?",
              options: ["80 W", "625 W", "400 W", "100 W"],
              answer: 2,
              why: "P utile = η × P reçue = 0,80 × 500 = 400 W ; les 100 W restants sont dissipés.",
            },
            {
              q: "Un kilowattheure correspond à :",
              options: ["1 000 J", "3 600 J", "3,6 × 10⁹ J", "3,6 × 10⁶ J"],
              answer: 3,
              why: "1 kWh = 1 000 W × 3 600 s = 3,6 × 10⁶ J.",
            },
            {
              q: "Une source réelle (E, r) débite un courant I. La puissance qu'elle fournit au circuit extérieur vaut :",
              options: ["E × I", "E × I - r × I²", "r × I²", "E × I + r × I²"],
              answer: 1,
              why: "La source convertit E × I mais perd r × I² par effet Joule dans sa résistance interne : il reste U × I = E × I - r × I².",
            },
          ],
          trap: "Oublier d'élever l'intensité au carré dans P = R × I², ou calculer un rendement à l'envers (puissance reçue divisée par puissance utile), ce qui donne une valeur supérieure à 1, physiquement impossible.",
          method: "Pour un bilan énergétique, dessinez la chaîne du convertisseur : une flèche pour l'énergie reçue, une pour l'énergie utile, une pour l'énergie dissipée, avec la somme des sorties égale à l'entrée. Puis vérifiez que votre rendement est bien compris entre 0 et 1.",
        },
      ],
    },
    /* ================================================================== */
    /* L'ÉNERGIE MÉCANIQUE                                                  */
    /* ================================================================== */
    {
      id: 'energie-mecanique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "energie-cinetique-travail",
          title: "Énergie cinétique, travail d’une force et théorème de l’énergie cinétique",
          minutes: 35,
          objectives: [
            "Utiliser l'expression de l'énergie cinétique d'un système modélisé par un point matériel : Ec = ½ × m × v².",
            "Utiliser l'expression du travail d'une force constante lors d'un déplacement rectiligne : W = F × AB × cos α.",
            "Énoncer et exploiter le théorème de l'énergie cinétique.",
            "Distinguer un travail moteur, un travail résistant et un travail nul.",
          ],
          course: [
            {
              heading: "L'énergie cinétique",
              paragraphs: [
                "Tout système en mouvement possède une énergie liée à sa vitesse : l'énergie cinétique. Pour un système modélisé par un point matériel de masse m, se déplaçant à la vitesse v dans un référentiel donné, elle vaut Ec = ½ × m × v². Elle s'exprime en joule (J) lorsque m est en kilogrammes et v en mètres par seconde. Elle est toujours positive ou nulle, et elle dépend du référentiel : un passager assis dans un train a une énergie cinétique nulle dans le référentiel du train, mais pas dans le référentiel terrestre.",
                "L'énergie cinétique est proportionnelle à la masse, mais au carré de la vitesse. Une voiture de 1 200 kg roulant à 50 km/h (13,9 m/s) possède Ec = ½ × 1 200 × 13,9² ≈ 1,2 × 10⁵ J. À 100 km/h (27,8 m/s), elle possède environ 4,6 × 10⁵ J : doubler la vitesse multiplie l'énergie cinétique par quatre. C'est cette énergie qu'il faut dissiper pour s'arrêter, ce qui explique l'augmentation rapide des distances de freinage avec la vitesse.",
              ],
              box: { label: "Formule", text: "Énergie cinétique d'un point matériel : Ec = ½ × m × v², avec Ec en joules (J), m en kilogrammes (kg) et v en mètres par seconde (m·s⁻¹). Pensez à convertir les km/h en m/s : on divise par 3,6." },
            },
            {
              heading: "Le travail d'une force constante",
              paragraphs: [
                "Le travail d'une force mesure l'énergie qu'elle transfère au système lors d'un déplacement. Pour une force F⃗ constante (même direction, même sens, même valeur) dont le point d'application se déplace en ligne droite de A à B, le travail est le produit scalaire de la force et du déplacement : W_AB(F⃗) = F⃗ · AB⃗ = F × AB × cos α, où α est l'angle entre les vecteurs F⃗ et AB⃗. Le travail s'exprime en joule (1 J = 1 N·m).",
                "Le signe du travail renseigne sur l'effet de la force. Si 0 ≤ α < 90°, cos α > 0 : le travail est moteur, la force favorise le déplacement (la traction d'un câble de remonte-pente). Si 90° < α ≤ 180°, cos α < 0 : le travail est résistant, la force s'oppose au déplacement (les frottements). Si α = 90°, le travail est nul : une force perpendiculaire au déplacement ne travaille pas, comme la réaction normale d'un sol horizontal ou le poids d'un objet qui se déplace horizontalement.",
                "Exemple : on tire une valise sur 20 m en ligne droite avec une force de 50 N inclinée de 30° par rapport au sol. W = 50 × 20 × cos 30° ≈ 50 × 20 × 0,866 ≈ 8,7 × 10² J. Seule la composante de la force parallèle au déplacement travaille : la composante verticale ne fait pas avancer la valise.",
              ],
              box: { label: "Définition", text: "Travail d'une force constante F⃗ sur un déplacement rectiligne AB : W_AB(F⃗) = F⃗ · AB⃗ = F × AB × cos α (en J). Travail moteur si W > 0, résistant si W < 0, nul si la force est perpendiculaire au déplacement." },
            },
            {
              heading: "Deux cas utiles : le poids et une force de frottement",
              paragraphs: [
                "Le poids P⃗ = m × g⃗ est vertical, vers le bas, de valeur m × g (g ≈ 9,81 N·kg⁻¹ en France). Avec un axe vertical (Oz) orienté vers le haut, son travail entre A et B vaut W_AB(P⃗) = m × g × (zA - zB). Il est moteur quand le système descend (zA > zB) et résistant quand il monte. Il ne dépend que des altitudes de départ et d'arrivée, pas de la forme du trajet : cette propriété sera exploitée dans la leçon suivante.",
                "Une force de frottement f⃗ de valeur constante, toujours opposée au mouvement (α = 180°, cos α = -1), a un travail W = -f × L, où L est la longueur du trajet parcouru. Ce travail est toujours négatif : les frottements retirent de l'énergie cinétique au système, énergie qui se retrouve sous forme thermique (échauffement des freins, des pneus, de l'air).",
              ],
              box: { label: "À retenir", text: "Travail du poids (axe Oz vers le haut) : W_AB(P⃗) = m × g × (zA - zB). Travail d'un frottement de valeur constante opposé au mouvement : W = -f × L. Travail d'une force perpendiculaire au déplacement : 0." },
            },
            {
              heading: "Le théorème de l'énergie cinétique",
              paragraphs: [
                "Dans un référentiel galiléen (le référentiel terrestre convient pour des mouvements de courte durée), la variation de l'énergie cinétique d'un système modélisé par un point matériel entre deux positions A et B est égale à la somme des travaux des forces qui s'exercent sur lui entre A et B : ΔEc = Ec(B) - Ec(A) = Σ W_AB(F⃗ᵢ). Si la somme des travaux est positive, le système accélère ; si elle est négative, il ralentit ; si elle est nulle, sa vitesse garde la même valeur.",
                "Application au freinage : une voiture de 1 000 kg roule à 20 m/s sur une route horizontale ; une force de freinage constante de 8 000 N l'arrête sur une distance d. Le poids et la réaction normale, perpendiculaires au déplacement, ne travaillent pas. Le théorème donne 0 - ½ × 1 000 × 20² = -8 000 × d, soit d = 200 000 ÷ 8 000 = 25 m. À 40 m/s, avec la même force, il faudrait 100 m : la distance de freinage est proportionnelle au carré de la vitesse.",
              ],
              box: { label: "Propriété", text: "Théorème de l'énergie cinétique (référentiel galiléen) : Ec(B) - Ec(A) = Σ W_AB(F⃗ᵢ), somme des travaux de toutes les forces appliquées au système entre A et B." },
            },
          ],
          keyPoints: [
            "Énergie cinétique : Ec = ½ × m × v², en joules, avec v en m·s⁻¹ ; elle dépend du référentiel.",
            "Doubler la vitesse multiplie l'énergie cinétique (et la distance de freinage) par quatre.",
            "Travail d'une force constante : W_AB(F⃗) = F × AB × cos α ; moteur, résistant ou nul selon l'angle α.",
            "Travail du poids : m × g × (zA - zB) ; travail d'un frottement constant : -f × L.",
            "Théorème de l'énergie cinétique : Ec(B) - Ec(A) = somme des travaux des forces entre A et B.",
          ],
          example: {
            statement: "Un skieur de masse m = 70 kg (équipement compris) part sans vitesse du point A et descend une piste rectiligne jusqu'au point B, situé 20 m plus bas ; la longueur de la piste est AB = 50 m. Les frottements (neige et air) sont modélisés par une force constante de valeur f = 60 N, opposée au mouvement. Donnée : g = 9,81 N·kg⁻¹. Calculer la vitesse du skieur en B.",
            solution: [
              "Système : le skieur, modélisé par un point matériel ; référentiel terrestre, supposé galiléen. Forces : le poids P⃗, la réaction normale R⃗ de la piste, la force de frottement f⃗.",
              "Travail du poids : W(P⃗) = m × g × (zA - zB) = 70 × 9,81 × 20 = 13 734 J.",
              "Travail de la réaction normale : elle est perpendiculaire au déplacement, donc W(R⃗) = 0.",
              "Travail des frottements : W(f⃗) = -f × AB = -60 × 50 = -3 000 J.",
              "Théorème de l'énergie cinétique : Ec(B) - 0 = 13 734 + 0 - 3 000 = 10 734 J.",
              "Vitesse : vB = √(2 × Ec(B) ÷ m) = √(2 × 10 734 ÷ 70) = √306,7 ≈ 17,5 m·s⁻¹.",
              "Réponse : vB ≈ 17,5 m·s⁻¹, soit environ 63 km/h.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Calculer l'énergie cinétique d'un ballon de football de masse 450 g frappé à 72 km/h. 2. Une personne pousse un chariot sur 15 m en ligne droite avec une force constante de 40 N, parallèle au déplacement et de même sens. Calculer le travail de cette force. 3. Même question si la force, de même valeur, fait un angle de 60° avec le déplacement.",
              hint: "Convertissez la masse en kg et la vitesse en m·s⁻¹ (72 ÷ 3,6). Pour le travail, utilisez W = F × AB × cos α, avec cos 0° = 1 et cos 60° = 0,5.",
              solution: [
                "1. m = 0,450 kg et v = 72 ÷ 3,6 = 20 m·s⁻¹. Ec = ½ × 0,450 × 20² = 0,225 × 400 = 90 J.",
                "2. α = 0°, donc W = 40 × 15 × 1 = 600 J (travail moteur).",
                "3. W = 40 × 15 × cos 60° = 600 × 0,5 = 300 J.",
                "Réponse : Ec = 90 J ; W = 600 J ; W = 300 J.",
              ],
            },
            {
              level: 2,
              statement: "Une voiture de masse 1 200 kg roule à 90 km/h sur une route horizontale et rectiligne. Le conducteur freine ; on modélise l'action de freinage par une force constante de valeur 9 000 N, opposée au mouvement (données fictives). 1. Calculer l'énergie cinétique initiale de la voiture. 2. Justifier que le poids et la réaction normale de la route ne travaillent pas. 3. À l'aide du théorème de l'énergie cinétique, calculer la distance de freinage. 4. Reprendre le calcul pour une vitesse initiale de 130 km/h et commenter.",
              hint: "Convertissez 90 km/h en m·s⁻¹. À l'arrêt, l'énergie cinétique finale est nulle ; le travail de la force de freinage vaut -F × d.",
              solution: [
                "1. v = 90 ÷ 3,6 = 25 m·s⁻¹ ; Ec = ½ × 1 200 × 25² = 600 × 625 = 375 000 J = 3,75 × 10⁵ J.",
                "2. Sur une route horizontale, le poids et la réaction normale sont verticaux, donc perpendiculaires au déplacement horizontal : leur travail est nul.",
                "3. Théorème de l'énergie cinétique : 0 - 375 000 = -9 000 × d, donc d = 375 000 ÷ 9 000 ≈ 41,7 m, soit environ 42 m.",
                "4. v = 130 ÷ 3,6 ≈ 36,1 m·s⁻¹ ; Ec = ½ × 1 200 × 36,1² ≈ 7,82 × 10⁵ J ; d = 7,82 × 10⁵ ÷ 9 000 ≈ 87 m.",
                "Commentaire : la vitesse est multipliée par 130 ÷ 90 ≈ 1,44 et la distance par 1,44² ≈ 2,1, car l'énergie cinétique dépend du carré de la vitesse.",
                "Réponse : 3,75 × 10⁵ J ; d ≈ 42 m à 90 km/h et environ 87 m à 130 km/h.",
              ],
            },
            {
              level: 3,
              statement: "Une caisse de masse m = 20 kg, initialement immobile en bas d'une rampe, est tirée jusqu'en haut par un câble exerçant une force F⃗ constante, parallèle à la rampe, de valeur F = 120 N. La rampe est rectiligne, de longueur AB = 5,0 m, et inclinée d'un angle de 20° sur l'horizontale. Les frottements sont modélisés par une force constante opposée au mouvement, de valeur f = 30 N. Données : g = 9,81 N·kg⁻¹ ; sin 20° ≈ 0,342 ; cos 110° ≈ -0,342. 1. Faire l'inventaire des forces qui s'exercent sur la caisse. 2. Calculer la hauteur h gagnée entre A et B. 3. Calculer le travail de chaque force ; pour le poids, faire le calcul de deux façons (avec l'angle, puis avec les altitudes). 4. En déduire la vitesse de la caisse en B. 5. Quelle valeur minimale F devrait avoir pour que la caisse atteigne tout juste le point B ?",
              hint: "L'angle entre le poids (vertical) et le déplacement (incliné de 20° vers le haut) vaut 90° + 20° = 110°. Pour la question 5, la vitesse en B est alors nulle.",
              solution: [
                "1. Forces : le poids P⃗, la réaction normale R⃗ de la rampe, la force de traction F⃗ du câble, la force de frottement f⃗.",
                "2. h = AB × sin 20° = 5,0 × 0,342 ≈ 1,71 m.",
                "3. W(F⃗) = 120 × 5,0 = 600 J. W(f⃗) = -30 × 5,0 = -150 J. W(R⃗) = 0 (force perpendiculaire à la rampe).",
                "Poids, avec l'angle : W(P⃗) = m × g × AB × cos 110° = 20 × 9,81 × 5,0 × (-0,342) ≈ -335 J. Avec les altitudes : W(P⃗) = m × g × (zA - zB) = -20 × 9,81 × 1,71 ≈ -335 J. Les deux méthodes concordent.",
                "4. Théorème de l'énergie cinétique : Ec(B) - 0 = 600 - 150 - 335 + 0 = 115 J. vB = √(2 × 115 ÷ 20) = √11,5 ≈ 3,4 m·s⁻¹.",
                "5. Avec vB = 0 : F × 5,0 - 150 - 335 = 0, donc F = 485 ÷ 5,0 = 97 N.",
                "Réponse : h ≈ 1,71 m ; W(F⃗) = 600 J, W(f⃗) = -150 J, W(P⃗) ≈ -335 J, W(R⃗) = 0 ; vB ≈ 3,4 m·s⁻¹ ; F minimale ≈ 97 N.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de résolution d'un exercice avec le théorème de l'énergie cinétique.",
            items: [
              "Définir le système et choisir un référentiel galiléen",
              "Faire l'inventaire des forces qui s'exercent sur le système",
              "Calculer le travail de chaque force entre A et B",
              "Écrire Ec(B) - Ec(A) égal à la somme des travaux",
              "Isoler l'inconnue, puis calculer sa valeur",
              "Vérifier l'unité et la vraisemblance du résultat",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'énergie cinétique d'un objet de 2,0 kg se déplaçant à 3,0 m·s⁻¹ ?",
              options: ["6,0 J", "9,0 J", "3,0 J", "18 J"],
              answer: 1,
              why: "Ec = ½ × m × v² = ½ × 2,0 × 3,0² = 9,0 J.",
            },
            {
              q: "Si la vitesse d'un véhicule double, son énergie cinétique :",
              options: ["est multipliée par 4", "est doublée", "est multipliée par 8", "ne change pas"],
              answer: 0,
              why: "Ec est proportionnelle au carré de la vitesse : (2v)² = 4v².",
            },
            {
              q: "Le travail d'une force perpendiculaire au déplacement est :",
              options: ["positif", "négatif", "nul", "égal à F × AB"],
              answer: 2,
              why: "W = F × AB × cos 90° = 0 : une force perpendiculaire au déplacement ne travaille pas.",
            },
            {
              q: "Une force constante de 10 N fait un angle de 60° avec un déplacement rectiligne de 5,0 m. Son travail vaut :",
              options: ["50 J", "25 J", "43 J", "-25 J"],
              answer: 1,
              why: "W = 10 × 5,0 × cos 60° = 50 × 0,5 = 25 J.",
            },
            {
              q: "D'après le théorème de l'énergie cinétique, la variation d'énergie cinétique entre A et B est égale :",
              options: ["au travail du poids seul", "à la somme des forces multipliée par la durée du trajet", "au produit de la masse par la variation de vitesse", "à la somme des travaux des forces entre A et B"],
              answer: 3,
              why: "Dans un référentiel galiléen, Ec(B) - Ec(A) = somme des travaux de toutes les forces appliquées au système entre A et B.",
            },
          ],
          trap: "Oublier de convertir la vitesse en m·s⁻¹ ou d'élever la vitesse au carré dans Ec = ½ × m × v², et oublier une force (souvent les frottements, ou une force de travail nul que l'on croit devoir compter) dans la somme des travaux.",
          method: "Commencez toujours par un schéma avec toutes les forces et le déplacement AB : pour chaque force, repérez l'angle α avec le déplacement et annoncez d'abord le signe du travail (moteur, résistant ou nul) avant de calculer. Un signe inattendu signale une erreur d'angle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "energie-potentielle",
          title: "Forces conservatives et énergie potentielle de pesanteur",
          minutes: 30,
          objectives: [
            "Établir et utiliser l'expression du travail du poids : W_AB(P⃗) = m × g × (zA - zB).",
            "Distinguer une force conservative d'une force non conservative, en prenant l'exemple des frottements.",
            "Utiliser l'expression de l'énergie potentielle de pesanteur Epp = m × g × z au voisinage de la surface de la Terre.",
            "Relier le travail du poids à la variation d'énergie potentielle de pesanteur.",
          ],
          course: [
            {
              heading: "Le travail du poids ne dépend pas du chemin",
              paragraphs: [
                "Au voisinage de la surface de la Terre, le poids d'un système de masse m est une force constante : verticale, vers le bas, de valeur P = m × g, avec g ≈ 9,81 N·kg⁻¹ en France. Repérons les positions par leur altitude z sur un axe vertical (Oz) orienté vers le haut. Le produit scalaire P⃗ · AB⃗ ne fait intervenir que la composante verticale du déplacement, égale à zB - zA. On obtient W_AB(P⃗) = -m × g × (zB - zA) = m × g × (zA - zB).",
                "Conséquence remarquable : ce travail ne dépend que des altitudes de départ et d'arrivée. Qu'un randonneur monte au sommet par un sentier en lacets de 6 km ou par une voie directe de 2 km, le travail de son poids est le même. Il est négatif à la montée (le poids s'oppose à l'élévation) et positif à la descente. Sur un trajet fermé, qui revient au point de départ, il est nul.",
              ],
              box: { label: "Formule", text: "Travail du poids entre A et B (axe Oz orienté vers le haut) : W_AB(P⃗) = m × g × (zA - zB). Il ne dépend que des altitudes zA et zB, pas du chemin suivi." },
            },
            {
              heading: "Forces conservatives et non conservatives",
              paragraphs: [
                "Une force est dite conservative lorsque son travail entre deux points ne dépend pas du chemin suivi, mais seulement des positions de départ et d'arrivée. Le poids est une force conservative ; la force électrostatique qui s'exerce sur une charge dans un champ électrique uniforme l'est aussi.",
                "Les forces de frottement sont non conservatives. Pour un frottement de valeur constante f, toujours opposé au mouvement, le travail vaut W = -f × L, où L est la longueur réellement parcourue : plus le trajet est long, plus le travail résistant est important. Pousser un carton de A à B en faisant un détour coûte davantage d'énergie que d'aller tout droit. Sur un trajet fermé, le travail des frottements n'est pas nul : il est toujours négatif.",
              ],
              box: { label: "Définition", text: "Une force est conservative si son travail entre deux points A et B est indépendant du chemin suivi entre A et B. Exemples : le poids, la force électrostatique dans un champ uniforme. Contre-exemple : les forces de frottement." },
            },
            {
              heading: "L'énergie potentielle de pesanteur",
              paragraphs: [
                "Puisque le travail du poids ne dépend que de l'altitude, on peut associer à chaque position du système une énergie, appelée énergie potentielle de pesanteur : Epp = m × g × z, où z est l'altitude mesurée sur un axe vertical orienté vers le haut. Elle s'exprime en joules. C'est une énergie de position : un objet situé en hauteur « stocke » de l'énergie qu'il peut restituer en descendant.",
                "La valeur de Epp dépend du choix de l'origine des altitudes, où l'on pose Epp = 0 (le sol, une table, le niveau de la mer). Ce choix est libre, car seules les variations d'énergie potentielle ont un sens physique, et elles ne dépendent pas de l'origine. Exemple : une personne de 60 kg qui monte un étage de 3,0 m voit son énergie potentielle augmenter de ΔEpp = 60 × 9,81 × 3,0 ≈ 1,8 × 10³ J, quelle que soit l'origine choisie.",
                "Le lien avec le travail est immédiat : W_AB(P⃗) = m × g × zA - m × g × zB = Epp(A) - Epp(B) = -ΔEpp. Quand un objet descend, le travail du poids est positif et son énergie potentielle diminue d'autant ; quand il monte, c'est l'inverse.",
              ],
              box: { label: "À retenir", text: "Epp = m × g × z (z altitude, axe vers le haut, origine choisie où Epp = 0). W_AB(P⃗) = Epp(A) - Epp(B) = -ΔEpp. Seules les variations de Epp ont un sens physique." },
            },
            {
              heading: "Domaine de validité et applications",
              paragraphs: [
                "L'expression Epp = m × g × z suppose que le champ de pesanteur est uniforme, ce qui est vérifié au voisinage de la surface de la Terre, sur des différences d'altitude petites devant le rayon terrestre (environ 6 400 km). Pour un satellite, il faudrait tenir compte de la diminution de la gravitation avec la distance.",
                "Les centrales hydroélectriques exploitent l'énergie potentielle de l'eau retenue par un barrage. Un mètre cube d'eau (1 000 kg) qui descend de 100 m perd une énergie potentielle de 1 000 × 9,81 × 100 ≈ 9,8 × 10⁵ J, soit environ 0,27 kWh, convertie en grande partie en énergie électrique par les turbines et les alternateurs. Les stations de transfert d'énergie par pompage remontent l'eau quand l'électricité est abondante pour la turbiner plus tard : l'énergie est stockée sous forme d'énergie potentielle.",
              ],
            },
          ],
          keyPoints: [
            "Travail du poids : W_AB(P⃗) = m × g × (zA - zB), indépendant du chemin suivi.",
            "Force conservative : travail indépendant du chemin (poids, force électrostatique en champ uniforme).",
            "Les frottements sont non conservatifs : W = -f × L dépend de la longueur L du trajet.",
            "Énergie potentielle de pesanteur : Epp = m × g × z, définie à une constante près (choix de l'origine).",
            "W_AB(P⃗) = Epp(A) - Epp(B) = -ΔEpp.",
          ],
          example: {
            statement: "Un randonneur de masse 75 kg monte d'un refuge situé à 1 200 m d'altitude jusqu'à un col situé à 2 000 m d'altitude (données fictives). Il peut emprunter un sentier en lacets de 5,0 km ou un sentier direct de 2,5 km. Donnée : g = 9,81 N·kg⁻¹. 1. Calculer le travail de son poids pour chaque sentier. 2. Calculer la variation de son énergie potentielle de pesanteur. 3. Calculer son énergie potentielle au refuge en prenant l'origine au niveau de la mer, puis au refuge lui-même. Commenter.",
            solution: [
              "1. Le poids est une force conservative : son travail ne dépend que des altitudes. W(P⃗) = m × g × (zA - zB) = 75 × 9,81 × (1 200 - 2 000) = 75 × 9,81 × (-800) ≈ -5,9 × 10⁵ J, pour les deux sentiers.",
              "2. ΔEpp = -W(P⃗) ≈ +5,9 × 10⁵ J : l'énergie potentielle du randonneur augmente.",
              "3. Origine au niveau de la mer : Epp = 75 × 9,81 × 1 200 ≈ 8,8 × 10⁵ J. Origine au refuge : Epp = 0.",
              "Commentaire : la valeur de Epp dépend de l'origine choisie, mais pas sa variation. Avec l'origine au refuge, Epp(col) = 75 × 9,81 × 800 ≈ 5,9 × 10⁵ J et l'on retrouve la même variation.",
              "Réponse : W(P⃗) ≈ -5,9 × 10⁵ J quel que soit le sentier ; ΔEpp ≈ +5,9 × 10⁵ J.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une pomme de masse 150 g tombe d'une branche située à 2,5 m au-dessus du sol. Donnée : g = 9,81 N·kg⁻¹. 1. Calculer le travail du poids de la pomme pendant sa chute. Est-il moteur ou résistant ? 2. En prenant l'origine des altitudes au sol, calculer l'énergie potentielle de pesanteur de la pomme sur la branche, puis au sol. 3. En déduire la variation d'énergie potentielle et vérifier le lien avec le travail du poids.",
              hint: "Convertissez la masse en kg. La pomme descend : zA = 2,5 m et zB = 0 m.",
              solution: [
                "1. W(P⃗) = m × g × (zA - zB) = 0,150 × 9,81 × (2,5 - 0) ≈ 3,7 J. Il est positif : le travail est moteur.",
                "2. Sur la branche : Epp = 0,150 × 9,81 × 2,5 ≈ 3,7 J. Au sol : Epp = 0 J.",
                "3. ΔEpp = 0 - 3,7 = -3,7 J, et l'on a bien W(P⃗) = -ΔEpp.",
                "Réponse : W(P⃗) ≈ 3,7 J (moteur) ; ΔEpp ≈ -3,7 J.",
              ],
            },
            {
              level: 2,
              statement: "On veut élever un colis de masse 2,0 kg d'un point A (au sol, z = 0) jusqu'à un point B situé sur un quai à 1,5 m de hauteur. Chemin 1 : on le soulève verticalement, sans frottement. Chemin 2 : on le fait glisser le long d'une rampe rectiligne de 3,0 m de longueur ; le frottement est modélisé par une force constante de 8,0 N opposée au mouvement. Donnée : g = 9,81 N·kg⁻¹. 1. Calculer le travail du poids pour chaque chemin. 2. Calculer le travail de la force de frottement pour chaque chemin. 3. Sur la rampe, on fait par erreur un aller-retour supplémentaire (descente puis remontée complètes) avant d'atteindre B. Calculer à nouveau ces deux travaux. 4. Conclure sur le caractère conservatif ou non de chaque force.",
              hint: "Le travail du poids ne dépend que de zA et zB. Le travail du frottement vaut -f × L, où L est la longueur totale parcourue.",
              solution: [
                "1. Pour les deux chemins : W(P⃗) = m × g × (zA - zB) = 2,0 × 9,81 × (0 - 1,5) ≈ -29 J.",
                "2. Chemin 1 : pas de frottement, W = 0. Chemin 2 : W(f⃗) = -8,0 × 3,0 = -24 J.",
                "3. Avec l'aller-retour supplémentaire, la longueur parcourue vaut L = 3,0 + 3,0 + 3,0 = 9,0 m. Le travail du poids reste W(P⃗) ≈ -29 J, car le départ et l'arrivée sont inchangés ; le travail du frottement devient W(f⃗) = -8,0 × 9,0 = -72 J.",
                "4. Le travail du poids ne dépend pas du chemin : le poids est conservatif. Celui du frottement augmente avec la longueur parcourue : le frottement est non conservatif.",
                "Réponse : W(P⃗) ≈ -29 J dans tous les cas ; W(f⃗) = 0 J, -24 J puis -72 J.",
              ],
            },
            {
              level: 3,
              statement: "Dans une centrale hydroélectrique, l'eau d'une retenue descend dans une conduite forcée et actionne une turbine située 150 m plus bas. Le débit d'eau est de 20 m³ par seconde (données fictives). Données : masse volumique de l'eau ρ = 1,0 × 10³ kg·m⁻³ ; g = 9,81 N·kg⁻¹. 1. Calculer la masse d'eau qui traverse la turbine chaque seconde. 2. Calculer la diminution d'énergie potentielle de pesanteur de cette eau en une seconde ; en déduire la puissance mise en jeu. 3. L'ensemble turbine et alternateur a un rendement global de 85 %. Calculer la puissance électrique produite. 4. Calculer l'énergie électrique produite en une heure, en kWh. 5. Un élève prend l'origine des altitudes au niveau de la mer et non au niveau de la turbine. Ses résultats changent-ils ? Justifier.",
              hint: "m = ρ × V. La puissance est une énergie par seconde. Le rendement est le quotient de la puissance utile par la puissance reçue.",
              solution: [
                "1. m = ρ × V = 1,0 × 10³ × 20 = 2,0 × 10⁴ kg chaque seconde.",
                "2. |ΔEpp| = m × g × h = 2,0 × 10⁴ × 9,81 × 150 ≈ 2,94 × 10⁷ J par seconde, soit une puissance d'environ 2,94 × 10⁷ W = 29,4 MW.",
                "3. P électrique = 0,85 × 29,4 ≈ 25 MW.",
                "4. E = P × Δt = 25 MW × 1 h = 25 MWh = 2,5 × 10⁴ kWh.",
                "5. Non : le calcul n'utilise que la différence d'altitude h = 150 m entre l'entrée et la sortie de la conduite. La variation d'énergie potentielle ne dépend pas de l'origine choisie.",
                "Réponse : 2,0 × 10⁴ kg ; environ 29 MW mis en jeu ; environ 25 MW électriques ; 2,5 × 10⁴ kWh en une heure ; résultats inchangés.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à son expression ou à sa caractéristique.",
            pairs: [
              { left: "Énergie potentielle de pesanteur", right: "Epp = m × g × z" },
              { left: "Travail du poids entre A et B", right: "m × g × (zA - zB)" },
              { left: "Force conservative", right: "travail indépendant du chemin suivi" },
              { left: "Force de frottement", right: "force non conservative" },
              { left: "Travail d'un frottement constant", right: "-f × L, avec L la longueur parcourue" },
              { left: "Intensité de la pesanteur en France", right: "g ≈ 9,81 N·kg⁻¹" },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'énergie potentielle de pesanteur d'un objet de 2,0 kg situé à 5,0 m au-dessus de l'origine choisie ? (g = 10 N·kg⁻¹)",
              options: ["10 J", "100 J", "50 J", "1,0 J"],
              answer: 1,
              why: "Epp = m × g × z = 2,0 × 10 × 5,0 = 100 J.",
            },
            {
              q: "Un objet monte de 3,0 m. Le travail de son poids est :",
              options: ["positif", "nul", "négatif", "indépendant de sa masse"],
              answer: 2,
              why: "W = m × g × (zA - zB) avec zB > zA : le travail est négatif, résistant.",
            },
            {
              q: "Parmi ces forces, laquelle est non conservative ?",
              options: ["le poids", "la force de frottement", "la force électrostatique en champ uniforme"],
              answer: 1,
              why: "Le travail d'une force de frottement dépend de la longueur du trajet suivi : elle n'est pas conservative.",
            },
            {
              q: "Quelle relation lie le travail du poids et l'énergie potentielle de pesanteur ?",
              options: ["W_AB(P⃗) = Epp(A) - Epp(B)", "W_AB(P⃗) = Epp(B) - Epp(A)", "W_AB(P⃗) = Epp(A) + Epp(B)", "W_AB(P⃗) = Epp(A) × Epp(B)"],
              answer: 0,
              why: "W_AB(P⃗) = m × g × zA - m × g × zB = Epp(A) - Epp(B) = -ΔEpp.",
            },
            {
              q: "L'énergie potentielle de pesanteur d'un livre posé sur une table :",
              options: ["est toujours positive", "est toujours nulle", "a la même valeur quelle que soit l'origine des altitudes", "dépend de l'origine des altitudes choisie"],
              answer: 3,
              why: "Epp = m × g × z dépend de l'endroit où l'on place l'origine (z = 0) ; seules ses variations ont un sens physique.",
            },
          ],
          trap: "Se tromper de signe dans le travail du poids en écrivant m × g × (zB - zA), ou croire que le travail du poids dépend du chemin suivi (lacets, rampe) alors que seules comptent les altitudes de départ et d'arrivée.",
          method: "Avant tout calcul, orientez l'axe vertical vers le haut et indiquez l'origine choisie sur le schéma. Vérifiez ensuite le signe par le bon sens : un système qui descend a un poids moteur (W > 0) et une énergie potentielle qui diminue.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "conservation-energie",
          title: "Énergie mécanique : conservation et non-conservation",
          minutes: 35,
          objectives: [
            "Définir l'énergie mécanique d'un système comme la somme de ses énergies cinétique et potentielle.",
            "Identifier des situations de conservation et de non-conservation de l'énergie mécanique.",
            "Exploiter la conservation de l'énergie mécanique pour calculer une vitesse ou une hauteur.",
            "Utiliser la variation d'énergie mécanique pour déterminer le travail des forces non conservatives.",
          ],
          course: [
            {
              heading: "L'énergie mécanique",
              paragraphs: [
                "L'énergie mécanique d'un système modélisé par un point matériel est la somme de son énergie cinétique et de son énergie potentielle : Em = Ec + Epp = ½ × m × v² + m × g × z. Elle s'exprime en joules. Comme Epp, sa valeur dépend du choix de l'origine des altitudes, mais ses variations n'en dépendent pas.",
                "Exemple : un ballon de 0,40 kg passe à 3,0 m de hauteur avec une vitesse de 5,0 m·s⁻¹. Avec l'origine au sol et g = 9,81 N·kg⁻¹ : Ec = ½ × 0,40 × 5,0² = 5,0 J, Epp = 0,40 × 9,81 × 3,0 ≈ 11,8 J, donc Em ≈ 16,8 J.",
              ],
              box: { label: "Définition", text: "Énergie mécanique : Em = Ec + Epp = ½ × m × v² + m × g × z (en J)." },
            },
            {
              heading: "La variation d'énergie mécanique",
              paragraphs: [
                "Classons les forces appliquées au système en forces conservatives (ici le poids) et forces non conservatives (frottements, traction d'un moteur, poussée...). Le théorème de l'énergie cinétique s'écrit ΔEc = W(P⃗) + W(forces non conservatives). Or W(P⃗) = -ΔEpp. En remplaçant : ΔEc + ΔEpp = W(forces non conservatives), c'est-à-dire ΔEm = Σ W(forces non conservatives).",
                "La variation d'énergie mécanique d'un système entre deux positions est donc égale à la somme des travaux des forces non conservatives entre ces deux positions. Le travail du poids, lui, ne modifie pas l'énergie mécanique : il convertit de l'énergie potentielle en énergie cinétique, ou l'inverse.",
              ],
              box: { label: "Propriété", text: "ΔEm = Em(B) - Em(A) = Σ W_AB(forces non conservatives). Le travail des forces conservatives n'apparaît pas : il est déjà pris en compte dans Epp." },
            },
            {
              heading: "Conservation de l'énergie mécanique",
              paragraphs: [
                "Si les forces non conservatives ont un travail nul (frottements négligeables, réaction normale perpendiculaire au mouvement, tension d'un fil de pendule), l'énergie mécanique se conserve : Em(A) = Em(B). L'énergie cinétique et l'énergie potentielle s'échangent alors en permanence : ce que l'une gagne, l'autre le perd.",
                "Chute libre : un objet lâché sans vitesse initiale d'une hauteur h, sans frottement, arrive au sol avec une vitesse telle que ½ × m × v² = m × g × h, soit v = √(2 × g × h), indépendante de la masse. D'une hauteur de 5,0 m, avec g = 9,81 N·kg⁻¹, on trouve v = √(2 × 9,81 × 5,0) ≈ 9,9 m·s⁻¹.",
                "Pendule simple sans frottement : au point le plus haut, la vitesse est nulle et Epp maximale ; au point le plus bas, Epp est minimale et Ec maximale. La bille remonte de l'autre côté jusqu'à la même hauteur que celle d'où elle a été lâchée. Sur des graphiques en fonction du temps, les courbes de Ec et Epp oscillent en opposition, tandis que Em reste une droite horizontale.",
              ],
              box: { label: "À retenir", text: "Si seules des forces conservatives travaillent, Em = Ec + Epp reste constante. Chute libre sans vitesse initiale d'une hauteur h : v = √(2 × g × h)." },
            },
            {
              heading: "Non-conservation : dissipation ou gain d'énergie",
              paragraphs: [
                "En présence de frottements, le travail des forces non conservatives est négatif : l'énergie mécanique diminue. L'énergie n'a pas disparu : elle a été dissipée, principalement sous forme thermique (échauffement de l'air, des surfaces en contact). C'est pourquoi les oscillations d'un pendule réel s'amortissent et pourquoi une balle qui rebondit remonte de moins en moins haut.",
                "Inversement, lorsqu'une force non conservative a un travail moteur, l'énergie mécanique augmente : c'est le cas de la chaîne qui hisse le wagon de montagnes russes au sommet de la première pente, ou du moteur d'une voiture qui accélère en montée. L'énergie mécanique gagnée provient alors d'une autre forme d'énergie (électrique, chimique).",
                "Le bilan reste toujours valable à l'échelle globale : l'énergie totale se conserve, mais l'énergie mécanique seule ne se conserve que si aucune force non conservative ne travaille.",
              ],
            },
          ],
          keyPoints: [
            "Énergie mécanique : Em = Ec + Epp = ½ × m × v² + m × g × z.",
            "ΔEm = somme des travaux des forces non conservatives.",
            "Sans travail de forces non conservatives, Em se conserve : Ec et Epp s'échangent.",
            "Chute libre sans vitesse initiale : v = √(2 × g × h), indépendante de la masse.",
            "Frottements : Em diminue, énergie dissipée sous forme thermique ; force motrice : Em augmente.",
          ],
          example: {
            statement: "On lâche sans vitesse initiale une balle de masse 60 g d'une hauteur de 1,8 m au-dessus du sol. Donnée : g = 9,81 N·kg⁻¹. 1. En négligeant les frottements de l'air, calculer la vitesse de la balle juste avant de toucher le sol. 2. Une mesure par vidéo donne en réalité 5,5 m·s⁻¹. Calculer l'énergie mécanique perdue. 3. En déduire la valeur moyenne de la force de frottement de l'air, supposée constante.",
            solution: [
              "1. Origine des altitudes au sol. Sans frottement, Em se conserve : Em(départ) = m × g × h et Em(sol) = ½ × m × v². Donc v = √(2 × g × h) = √(2 × 9,81 × 1,8) = √35,3 ≈ 5,9 m·s⁻¹.",
              "2. Em(départ) = 0,060 × 9,81 × 1,8 ≈ 1,06 J. Em(sol) = ½ × 0,060 × 5,5² ≈ 0,91 J. ΔEm ≈ 0,91 - 1,06 = -0,15 J.",
              "3. ΔEm = W(f⃗) = -f × h, donc f = 0,15 ÷ 1,8 ≈ 0,085 N.",
              "Réponse : 5,9 m·s⁻¹ sans frottement ; environ 0,15 J dissipés ; f ≈ 0,085 N (environ 14 % du poids de la balle, qui vaut 0,59 N).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une pierre est lâchée sans vitesse initiale depuis un pont, 12 m au-dessus de l'eau. On néglige les frottements de l'air. Donnée : g = 9,81 N·kg⁻¹. 1. Justifier que l'énergie mécanique de la pierre se conserve. 2. Calculer sa vitesse quand elle atteint l'eau. 3. Calculer sa vitesse à mi-hauteur. Est-elle égale à la moitié de la vitesse finale ?",
              hint: "Écrivez l'égalité de l'énergie mécanique au départ et au point considéré, avec une vitesse initiale nulle.",
              solution: [
                "1. La seule force qui s'exerce est le poids, force conservative : Em se conserve.",
                "2. m × g × h = ½ × m × v², donc v = √(2 × 9,81 × 12) = √235 ≈ 15 m·s⁻¹.",
                "3. À mi-hauteur, la pierre est descendue de 6,0 m : v = √(2 × 9,81 × 6,0) = √118 ≈ 10,8 m·s⁻¹.",
                "Ce n'est pas la moitié de 15 m·s⁻¹ : la vitesse est proportionnelle à la racine carrée de la hauteur de chute (10,8 ≈ 15,3 ÷ √2).",
                "Réponse : environ 15 m·s⁻¹ à l'arrivée et 10,8 m·s⁻¹ à mi-hauteur.",
              ],
            },
            {
              level: 2,
              statement: "Un pendule simple est constitué d'une bille de masse 200 g suspendue à un fil de 1,0 m. On écarte la bille de sa position d'équilibre de sorte qu'elle se trouve 10 cm plus haut, puis on la lâche sans vitesse. Donnée : g = 9,81 N·kg⁻¹. 1. Justifier que la tension du fil ne travaille pas. 2. En négligeant les frottements, calculer la vitesse de la bille lors de son passage à la position d'équilibre. 3. Jusqu'à quelle hauteur remonte-t-elle de l'autre côté ? 4. En réalité, après plusieurs oscillations, la bille ne remonte plus qu'à 8,0 cm au-dessus de la position d'équilibre. Calculer l'énergie mécanique perdue et indiquer ce qu'elle est devenue.",
              hint: "Prenez l'origine des altitudes à la position d'équilibre. La tension du fil est toujours dirigée selon le fil, alors que la vitesse est perpendiculaire au fil.",
              solution: [
                "1. La tension est dirigée selon le fil, perpendiculairement à la trajectoire circulaire, donc au déplacement : son travail est nul.",
                "2. Seul le poids travaille : Em se conserve. m × g × h = ½ × m × v², donc v = √(2 × 9,81 × 0,10) = √1,96 ≈ 1,4 m·s⁻¹.",
                "3. Par conservation de Em, elle remonte jusqu'à la même hauteur : 10 cm au-dessus de la position d'équilibre.",
                "4. Em initiale = 0,200 × 9,81 × 0,10 ≈ 0,196 J ; Em finale = 0,200 × 9,81 × 0,080 ≈ 0,157 J. Énergie perdue ≈ 0,039 J.",
                "Cette énergie a été dissipée par les frottements (air, point d'attache), principalement sous forme thermique.",
                "Réponse : v ≈ 1,4 m·s⁻¹ ; remontée à 10 cm ; environ 0,039 J dissipés.",
              ],
            },
            {
              level: 3,
              statement: "Sur un parcours de montagnes russes, un wagon de masse totale 500 kg (passagers compris) passe au point A, à 30 m au-dessus du point le plus bas B, avec une vitesse de 2,0 m·s⁻¹. Il remonte ensuite jusqu'au point C, à 18 m au-dessus de B. Données : g = 9,81 N·kg⁻¹ ; longueur de rail entre A et B : 80 m ; entre B et C : 40 m (données fictives). On prend l'origine des altitudes en B. 1. En négligeant tout frottement, calculer les vitesses en B et en C. 2. Des capteurs mesurent en réalité 23,0 m·s⁻¹ en B. Calculer l'énergie mécanique perdue entre A et B, puis la valeur moyenne de la force de frottement, supposée constante et opposée au mouvement. 3. En supposant la même force de frottement entre B et C, calculer la vitesse réelle en C. 4. Le wagon est hissé au départ jusqu'au point A par une chaîne motorisée. Expliquer, en termes d'énergie mécanique, le rôle de cette chaîne.",
              hint: "Sans frottement, Em(A) = Em(B) = Em(C). Avec frottements, ΔEm = -f × L, où L est la longueur de rail parcourue.",
              solution: [
                "1. Em(A) = ½ × 500 × 2,0² + 500 × 9,81 × 30 = 1 000 + 147 150 = 148 150 J. En B (z = 0) : ½ × 500 × vB² = 148 150, donc vB = √592,6 ≈ 24,3 m·s⁻¹.",
                "En C : Epp(C) = 500 × 9,81 × 18 = 88 290 J, donc Ec(C) = 148 150 - 88 290 = 59 860 J et vC = √(2 × 59 860 ÷ 500) = √239,4 ≈ 15,5 m·s⁻¹.",
                "2. Em(B) réelle = ½ × 500 × 23,0² = 132 250 J. Énergie perdue : 148 150 - 132 250 = 15 900 J. ΔEm = -f × 80, donc f = 15 900 ÷ 80 ≈ 199 N, soit environ 2,0 × 10² N.",
                "3. Entre B et C, la longueur est moitié moindre : énergie perdue = f × 40 = 15 900 × 40 ÷ 80 = 7 950 J. Em(C) ≈ 132 250 - 7 950 = 124 300 J ; Ec(C) ≈ 124 300 - 88 290 = 36 010 J ; vC = √(2 × 36 010 ÷ 500) = √144 ≈ 12,0 m·s⁻¹.",
                "4. La traction de la chaîne est une force non conservative dont le travail est moteur : elle augmente l'énergie mécanique du wagon (surtout son énergie potentielle) en convertissant de l'énergie électrique. Le wagon dépense ensuite cette énergie mécanique, peu à peu dissipée par les frottements.",
                "Réponse : sans frottement, vB ≈ 24,3 m·s⁻¹ et vC ≈ 15,5 m·s⁻¹ ; 15 900 J perdus, f ≈ 2,0 × 10² N ; vC réelle ≈ 12,0 m·s⁻¹.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Traquez les idées reçues sur l'énergie mécanique.",
            statements: [
              { text: "En l'absence de frottement, un objet lourd arrive au sol plus vite qu'un objet léger lâché de la même hauteur.", true: false, why: "v = √(2 × g × h) ne dépend pas de la masse." },
              { text: "Le travail du poids modifie l'énergie mécanique d'un système.", true: false, why: "Le poids est conservatif : son travail convertit de l'énergie potentielle en énergie cinétique sans changer Em." },
              { text: "Les frottements font diminuer l'énergie mécanique.", true: true, why: "Leur travail est négatif et ΔEm = Σ W(forces non conservatives)." },
              { text: "L'énergie perdue par frottement disparaît complètement.", true: false, why: "Elle est dissipée, principalement sous forme thermique : l'énergie totale se conserve." },
              { text: "Au point le plus bas d'un pendule sans frottement, l'énergie cinétique est maximale.", true: true, why: "Epp y est minimale ; comme Em est constante, Ec y est maximale." },
              { text: "Lâchée de deux fois plus haut, une pierre arrive au sol deux fois plus vite, sans frottement.", true: false, why: "La vitesse est proportionnelle à √h : elle est multipliée par √2 ≈ 1,4." },
              { text: "Un moteur peut augmenter l'énergie mécanique d'un système.", true: true, why: "Sa force motrice est non conservative et son travail est positif." },
            ],
          },
          quiz: [
            {
              q: "L'énergie mécanique d'un système est définie par :",
              options: ["Em = Ec × Epp", "Em = Ec - Epp", "Em = Ec + Epp"],
              answer: 2,
              why: "L'énergie mécanique est la somme de l'énergie cinétique et de l'énergie potentielle.",
            },
            {
              q: "Un objet est lâché sans vitesse de 5,0 m de haut, sans frottement (g = 10 N·kg⁻¹). Sa vitesse en arrivant au sol vaut :",
              options: ["10 m·s⁻¹", "50 m·s⁻¹", "100 m·s⁻¹", "7,1 m·s⁻¹"],
              answer: 0,
              why: "v = √(2 × g × h) = √(2 × 10 × 5,0) = √100 = 10 m·s⁻¹.",
            },
            {
              q: "En présence de frottements, l'énergie mécanique d'un système :",
              options: ["augmente", "se conserve", "s'annule", "diminue"],
              answer: 3,
              why: "Le travail des frottements est négatif ; comme ΔEm est égale à ce travail, Em diminue.",
            },
            {
              q: "La variation d'énergie mécanique d'un système entre A et B est égale à :",
              options: ["le travail du poids seul", "la somme des travaux de toutes les forces appliquées au système", "la somme des travaux des forces non conservatives", "zéro, dans tous les cas"],
              answer: 2,
              why: "ΔEm = Σ W(forces non conservatives) ; la somme des travaux de toutes les forces donne ΔEc.",
            },
            {
              q: "Au point le plus bas de la trajectoire d'un pendule sans frottement :",
              options: ["Ec et Epp sont toutes deux maximales", "Ec est maximale et Epp minimale", "Ec est nulle et Epp maximale", "Em atteint sa valeur maximale"],
              answer: 1,
              why: "L'altitude y est minimale, donc Epp aussi ; Em étant constante, Ec est maximale.",
            },
          ],
          trap: "Ajouter le travail du poids dans ΔEm alors qu'il est déjà pris en compte dans l'énergie potentielle (on le compte alors deux fois), ou affirmer que Em se conserve alors que des frottements ne sont pas négligeables.",
          method: "Commencez par vous demander quelles forces non conservatives travaillent : si aucune, écrivez Em(A) = Em(B) ; sinon, écrivez Em(B) - Em(A) = Σ W(forces non conservatives). Choisissez l'origine des altitudes au point le plus bas : cela simplifie les calculs.",
        },
      ],
    },
    /* ================================================================== */
    /* LES ONDES MÉCANIQUES                                                 */
    /* ================================================================== */
    {
      id: 'ondes-mecaniques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "onde-progressive",
          title: "Onde mécanique progressive, célérité et retard",
          minutes: 30,
          objectives: [
            "Décrire, dans le cas d'une onde mécanique progressive, la propagation d'une perturbation mécanique d'un milieu dans l'espace et au cours du temps.",
            "Distinguer une onde transversale d'une onde longitudinale.",
            "Exploiter la relation entre la durée de propagation, la distance parcourue par une perturbation et la célérité.",
            "Déterminer le retard d'un point du milieu par rapport à la source et exploiter des représentations spatiales ou temporelles.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une onde mécanique progressive ?",
              paragraphs: [
                "Une onde mécanique progressive est le phénomène de propagation d'une perturbation dans un milieu matériel, sans transport de matière mais avec transport d'énergie. Quand on jette un caillou dans un étang, des rides circulaires s'éloignent du point d'impact ; un bouchon posé sur l'eau monte et descend lorsque la ride passe, mais il n'avance pas avec elle. C'est l'état de perturbation qui se déplace, pas l'eau.",
                "D'autres exemples : la perturbation qui parcourt une corde que l'on secoue, la compression qui se propage le long d'un ressort, le son dans l'air, les ondes sismiques dans le sol. Une onde mécanique a besoin d'un milieu matériel (solide, liquide ou gaz) pour se propager : le son ne se propage pas dans le vide, contrairement à la lumière, qui est une onde électromagnétique.",
                "L'énergie transportée peut être considérable : la houle met en mouvement des bateaux à des kilomètres de la tempête qui l'a créée, et les ondes sismiques endommagent des bâtiments loin de l'épicentre.",
              ],
              box: { label: "Définition", text: "Onde mécanique progressive : propagation d'une perturbation dans un milieu matériel, sans transport de matière mais avec transport d'énergie. Elle ne se propage pas dans le vide." },
            },
            {
              heading: "Ondes transversales et ondes longitudinales",
              paragraphs: [
                "Une onde est transversale lorsque la perturbation du milieu est perpendiculaire à la direction de propagation : sur une corde horizontale secouée de haut en bas, chaque point monte et descend alors que l'onde avance horizontalement. Les ondes sismiques S (secondaires) sont transversales.",
                "Une onde est longitudinale lorsque la perturbation est parallèle à la direction de propagation : sur un ressort, on observe une succession de compressions et de dilatations des spires qui se déplacent le long du ressort. Le son est une onde longitudinale : les couches d'air sont alternativement comprimées et dilatées dans la direction de propagation. Les ondes sismiques P (primaires) sont aussi longitudinales.",
              ],
              box: { label: "À retenir", text: "Transversale : perturbation perpendiculaire à la propagation (corde, ondes S). Longitudinale : perturbation parallèle à la propagation (ressort, son, ondes P)." },
            },
            {
              heading: "La célérité d'une onde",
              paragraphs: [
                "La célérité v d'une onde est la vitesse de propagation de la perturbation. Si la perturbation parcourt la distance d pendant la durée Δt, alors v = d ÷ Δt, en m·s⁻¹. On parle de célérité plutôt que de vitesse pour ne pas confondre avec la vitesse des points du milieu, qui oscillent sur place.",
                "La célérité dépend du milieu de propagation : de sa nature, de sa température, de la tension d'une corde, etc. Elle ne dépend pas, dans les situations étudiées, de la forme ni de l'amplitude de la perturbation : un son fort et un son faible se propagent à la même célérité. Ordres de grandeur : le son se propage à environ 340 m·s⁻¹ dans l'air à 20 °C, à environ 1 500 m·s⁻¹ dans l'eau et à plusieurs milliers de m·s⁻¹ dans l'acier ; les ondes sismiques P se propagent dans la croûte terrestre à quelques kilomètres par seconde, plus vite que les ondes S.",
                "Application : on voit l'éclair presque instantanément (la lumière va à 3,00 × 10⁸ m·s⁻¹), mais on entend le tonnerre plus tard. Avec un écart de 3 s, l'orage est à environ 340 × 3 ≈ 1 km.",
              ],
              box: { label: "Formule", text: "Célérité : v = d ÷ Δt, avec d en mètres, Δt en secondes et v en m·s⁻¹. Son dans l'air à 20 °C : environ 340 m·s⁻¹ ; dans l'eau : environ 1 500 m·s⁻¹." },
            },
            {
              heading: "Le retard et les représentations d'une onde",
              paragraphs: [
                "Un point M du milieu, situé à la distance d de la source S, reproduit le mouvement de la source avec un retard τ (lettre grecque tau) égal à la durée de propagation de S à M : τ = d ÷ v. Si la source commence à vibrer à t = 0, le point M commence à vibrer à t = τ, et il effectue ensuite exactement le même mouvement que S, décalé de τ.",
                "On utilise deux types de représentations. La représentation temporelle donne la perturbation d'un point donné en fonction du temps (comme le signal d'un capteur ou d'un microphone). La représentation spatiale donne l'état de tout le milieu à un instant donné (comme une photographie de la corde). Attention : sur une photographie, le front de l'onde, c'est-à-dire la partie la plus avancée, correspond au début du mouvement de la source ; l'allure de la perturbation y est donc inversée par rapport à la représentation temporelle.",
                "Pour mesurer une célérité, on place deux capteurs (microphones par exemple) à une distance d connue l'un de l'autre, alignés avec la source, et l'on mesure le retard τ entre les deux signaux enregistrés : v = d ÷ τ.",
              ],
              box: { label: "Formule", text: "Retard d'un point M situé à la distance d de la source : τ = d ÷ v. Le point M reproduit le mouvement de la source avec ce retard." },
            },
          ],
          keyPoints: [
            "Onde mécanique progressive : propagation d'une perturbation dans un milieu matériel, avec transport d'énergie sans transport de matière.",
            "Transversale : perturbation perpendiculaire à la propagation ; longitudinale : parallèle (le son).",
            "Célérité : v = d ÷ Δt ; elle dépend du milieu, pas de l'amplitude.",
            "Retard : τ = d ÷ v ; un point du milieu reproduit le mouvement de la source avec ce retard.",
            "Son : environ 340 m·s⁻¹ dans l'air, 1 500 m·s⁻¹ dans l'eau ; pas de propagation dans le vide.",
          ],
          example: {
            statement: "Une perturbation de durée 0,50 s est créée à t = 0 à l'extrémité S d'une longue corde tendue ; elle se propage à la célérité v = 4,0 m·s⁻¹. Un point M de la corde est situé à 3,0 m de S. 1. Calculer le retard de M par rapport à S. 2. Entre quels instants le point M est-il en mouvement ? 3. Quelle longueur de corde la perturbation occupe-t-elle à un instant donné ? 4. À quelle distance de S se trouve le front de l'onde à t = 1,0 s ?",
            solution: [
              "1. τ = d ÷ v = 3,0 ÷ 4,0 = 0,75 s.",
              "2. M commence à bouger quand le front arrive, à t = 0,75 s, et s'arrête 0,50 s plus tard, à t = 0,75 + 0,50 = 1,25 s.",
              "3. Pendant la durée 0,50 s de la perturbation, le front avance de 4,0 × 0,50 = 2,0 m : la perturbation occupe 2,0 m de corde.",
              "4. À t = 1,0 s, le front a parcouru d = v × t = 4,0 × 1,0 = 4,0 m.",
              "Réponse : τ = 0,75 s ; M bouge entre 0,75 s et 1,25 s ; longueur 2,0 m ; front à 4,0 m de S.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pendant un orage, on entend le tonnerre 6,0 s après avoir vu l'éclair. Données : célérité du son dans l'air v = 340 m·s⁻¹ ; vitesse de la lumière c = 3,00 × 10⁸ m·s⁻¹. 1. Calculer la distance qui sépare l'observateur de l'éclair. 2. Calculer la durée mise par la lumière pour parcourir cette distance et justifier qu'on peut la négliger. 3. Le son est-il une onde transversale ou longitudinale ?",
              hint: "La lumière arrive presque instantanément : le retard mesuré est celui du son. Utilisez d = v × Δt.",
              solution: [
                "1. d = v × Δt = 340 × 6,0 = 2 040 m, soit environ 2,0 km.",
                "2. Durée pour la lumière : 2 040 ÷ (3,00 × 10⁸) ≈ 6,8 × 10⁻⁶ s, soit environ un millionième de la durée mesurée : elle est négligeable.",
                "3. Le son est une onde longitudinale : l'air est comprimé et dilaté dans la direction de propagation.",
                "Réponse : environ 2,0 km ; 6,8 µs, négligeable ; onde longitudinale.",
              ],
            },
            {
              level: 2,
              statement: "Pour mesurer la célérité du son, on aligne une source sonore et deux microphones M1 et M2, distants de d = 1,50 m. Un claquement bref est émis ; l'enregistrement montre que le signal de M2 est en retard de 4,4 ms sur celui de M1 (données fictives). 1. Calculer la célérité du son dans l'air. 2. Le claquement est répété beaucoup plus fort. Le retard mesuré change-t-il ? Justifier. 3. On réalise la même expérience dans l'eau, où le son se propage à 1 500 m·s⁻¹. Quel retard mesurerait-on ? 4. Pourquoi est-il préférable d'éloigner davantage les deux microphones ?",
              hint: "La célérité est le quotient de la distance entre les capteurs par le retard entre les signaux. Convertissez les millisecondes en secondes.",
              solution: [
                "1. v = d ÷ τ = 1,50 ÷ (4,4 × 10⁻³) ≈ 3,4 × 10² m·s⁻¹.",
                "2. Non : la célérité dépend du milieu, pas de l'amplitude de la perturbation. Le retard reste 4,4 ms.",
                "3. τ = d ÷ v = 1,50 ÷ 1 500 = 1,0 × 10⁻³ s = 1,0 ms.",
                "4. Pour une même incertitude sur la lecture du retard, un retard plus grand est mesuré avec une meilleure précision relative ; la célérité obtenue est donc plus précise.",
                "Réponse : v ≈ 3,4 × 10² m·s⁻¹ ; retard inchangé ; 1,0 ms dans l'eau ; augmenter d améliore la précision.",
              ],
            },
            {
              level: 3,
              statement: "Lors d'un séisme, deux types d'ondes partent simultanément du foyer : les ondes P, de célérité vP = 6,0 km·s⁻¹, et les ondes S, de célérité vS = 3,5 km·s⁻¹ (valeurs moyennes, données fictives). Une station sismique enregistre l'arrivée des ondes P à 10 h 00 min 20 s et celle des ondes S à 10 h 00 min 40 s. 1. Indiquer la nature (transversale ou longitudinale) de chaque type d'onde. 2. On note d la distance entre le foyer et la station. Exprimer les durées de parcours des ondes P et S en fonction de d. 3. En déduire la distance d. 4. Déterminer l'heure à laquelle le séisme s'est produit. 5. Expliquer pourquoi il faut au moins trois stations pour localiser l'épicentre.",
              hint: "L'écart entre les arrivées vaut Δt = d ÷ vS - d ÷ vP. Factorisez par d.",
              solution: [
                "1. Les ondes P sont longitudinales (compressions et dilatations dans la direction de propagation) ; les ondes S sont transversales.",
                "2. tP = d ÷ vP et tS = d ÷ vS.",
                "3. Δt = tS - tP = d × (1 ÷ vS - 1 ÷ vP) = 20 s. Or 1 ÷ 3,5 - 1 ÷ 6,0 ≈ 0,2857 - 0,1667 = 0,1190 s·km⁻¹. Donc d = 20 ÷ 0,1190 ≈ 168 km.",
                "4. Durée de parcours des ondes P : 168 ÷ 6,0 = 28 s. Le séisme a eu lieu 28 s avant 10 h 00 min 20 s, soit à 9 h 59 min 52 s. Vérification avec les ondes S : 168 ÷ 3,5 = 48 s, et 9 h 59 min 52 s + 48 s = 10 h 00 min 40 s.",
                "5. Une station donne seulement la distance d : l'épicentre est sur un cercle de rayon d autour d'elle. Deux cercles se coupent en deux points ; un troisième cercle permet de choisir le bon point.",
                "Réponse : P longitudinales, S transversales ; d ≈ 168 km ; séisme à 9 h 59 min 52 s.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition ou à sa valeur.",
            pairs: [
              { left: "Onde mécanique progressive", right: "propagation d'une perturbation sans transport de matière" },
              { left: "Onde transversale", right: "perturbation perpendiculaire à la propagation" },
              { left: "Onde longitudinale", right: "perturbation parallèle à la propagation" },
              { left: "Célérité", right: "v = d ÷ Δt" },
              { left: "Retard d'un point M", right: "τ = d ÷ v" },
              { left: "Son dans l'air à 20 °C", right: "environ 340 m·s⁻¹" },
            ],
          },
          quiz: [
            {
              q: "Une onde mécanique progressive transporte :",
              options: ["de la matière, mais pas d'énergie", "de l'énergie, sans matière", "de la matière et de l'énergie", "ni matière ni énergie"],
              answer: 1,
              why: "Les points du milieu oscillent sur place : seule l'énergie est transportée, pas la matière.",
            },
            {
              q: "Le son dans l'air est une onde :",
              options: ["longitudinale", "transversale", "électromagnétique"],
              answer: 0,
              why: "L'air est comprimé et dilaté dans la direction même de propagation : l'onde est longitudinale.",
            },
            {
              q: "Le son parcourt 680 m dans l'air (v = 340 m·s⁻¹) en :",
              options: ["0,50 s", "20 s", "0,20 s", "2,0 s"],
              answer: 3,
              why: "Δt = d ÷ v = 680 ÷ 340 = 2,0 s.",
            },
            {
              q: "La célérité d'une onde le long d'une corde dépend :",
              options: ["de l'amplitude de la perturbation", "de la forme de la perturbation", "du milieu de propagation", "de la durée de la perturbation"],
              answer: 2,
              why: "La célérité est une propriété du milieu (nature, tension de la corde) et non de la perturbation.",
            },
            {
              q: "Un point M est à 6,0 m de la source ; la célérité vaut 3,0 m·s⁻¹. Son retard vaut :",
              options: ["18 s", "0,50 s", "2,0 s", "3,0 s"],
              answer: 2,
              why: "τ = d ÷ v = 6,0 ÷ 3,0 = 2,0 s.",
            },
          ],
          trap: "Croire que la matière avance avec l'onde (le bouchon ne suit pas la ride), ou confondre la célérité de l'onde avec la vitesse des points du milieu, qui oscillent sur place.",
          method: "Pour une représentation spatiale, repérez d'abord le front de l'onde (la partie la plus éloignée de la source) : c'est lui qui correspond au début du mouvement de la source. Pour toute question de retard, écrivez τ = d ÷ v et vérifiez les unités (m, s, m·s⁻¹).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "ondes-periodiques",
          title: "Ondes périodiques : période et longueur d’onde",
          minutes: 30,
          objectives: [
            "Distinguer périodicité temporelle et périodicité spatiale d'une onde mécanique périodique.",
            "Justifier et exploiter la relation entre période, longueur d'onde et célérité : λ = v × T.",
            "Déterminer les caractéristiques d'une onde mécanique périodique à partir de représentations spatiales ou temporelles.",
            "Déterminer la période, la longueur d'onde et la célérité d'une onde progressive sinusoïdale à l'aide d'une chaîne de mesure.",
          ],
          course: [
            {
              heading: "Onde périodique et onde sinusoïdale",
              paragraphs: [
                "Une onde est périodique lorsque la perturbation créée par la source se répète identique à elle-même à intervalles de temps réguliers. La plus petite durée au bout de laquelle le phénomène se reproduit est la période T, en secondes. La fréquence f est le nombre de répétitions par seconde : f = 1 ÷ T, en hertz (Hz).",
                "Lorsque la perturbation est une fonction sinusoïdale du temps, l'onde est dite sinusoïdale : c'est le cas, en bonne approximation, du son émis par un diapason. Un diapason de 440 Hz (le la de référence des musiciens) a une période T = 1 ÷ 440 ≈ 2,27 × 10⁻³ s. L'oreille humaine perçoit les sons de fréquence comprise entre environ 20 Hz et 20 kHz ; en dessous, on parle d'infrasons, au-dessus d'ultrasons.",
                "Avec un langage de programmation, on peut représenter un signal sinusoïdal y(t) = A × cos(2π × t ÷ T) et observer l'effet de l'amplitude A et de la période T sur sa courbe, ou simuler l'avancée de l'onde au cours du temps.",
              ],
              box: { label: "Définition", text: "Période T : plus petite durée au bout de laquelle la perturbation se reproduit identique à elle-même (en s). Fréquence : f = 1 ÷ T (en Hz). La fréquence est imposée par la source." },
            },
            {
              heading: "Une double périodicité",
              paragraphs: [
                "Une onde périodique présente une double périodicité. Périodicité temporelle : en un point donné du milieu, le mouvement se répète avec la période T. Périodicité spatiale : à un instant donné, l'aspect du milieu (photographie de la corde, de la surface de l'eau) se répète régulièrement le long de la direction de propagation ; la plus petite distance de répétition est la longueur d'onde λ (lettre grecque lambda), en mètres.",
                "La longueur d'onde est la distance parcourue par l'onde pendant une période : λ = v × T, ou encore λ = v ÷ f. En effet, pendant que la source effectue une oscillation complète, la perturbation avance de v × T, et la source recommence alors la même oscillation. Exemple : pour le diapason de 440 Hz dans l'air (v = 340 m·s⁻¹), λ = 340 ÷ 440 ≈ 0,77 m.",
                "Quand une onde change de milieu, sa fréquence ne change pas (elle est imposée par la source), mais sa célérité change, donc sa longueur d'onde aussi. Le même son de 440 Hz a dans l'eau une longueur d'onde λ = 1 500 ÷ 440 ≈ 3,4 m.",
              ],
              box: { label: "Formule", text: "λ = v × T = v ÷ f, avec λ en m, v en m·s⁻¹, T en s et f en Hz. T est la période temporelle, λ la période spatiale." },
            },
            {
              heading: "Points en phase et en opposition de phase",
              paragraphs: [
                "Deux points du milieu séparés par une longueur d'onde, ou par un nombre entier de longueurs d'onde (k × λ), vibrent en phase : ils ont à chaque instant le même état de perturbation. Deux points séparés par une demi-longueur d'onde, ou par un nombre entier et demi de longueurs d'onde ((k + ½) × λ), vibrent en opposition de phase : quand l'un est au plus haut, l'autre est au plus bas.",
                "Cette propriété sert à mesurer λ. On place deux microphones face à un haut-parleur émettant un son sinusoïdal et l'on visualise leurs signaux sur un oscilloscope ou une interface d'acquisition. En partant d'une position où les signaux sont en phase, on éloigne un microphone : les signaux sont à nouveau en phase chaque fois que le déplacement augmente de λ. Pour plus de précision, on mesure la distance correspondant à plusieurs longueurs d'onde (par exemple 5 λ), puis on divise.",
              ],
              box: { label: "Propriété", text: "Points distants de k × λ : en phase. Points distants de (k + ½) × λ : en opposition de phase (k entier)." },
            },
            {
              heading: "Lire les représentations d'une onde périodique",
              paragraphs: [
                "Sur une représentation temporelle (perturbation d'un point en fonction du temps), on lit la période T comme la durée d'un motif ; pour être précis, on mesure la durée de plusieurs motifs et on divise par leur nombre. Sur une représentation spatiale (état du milieu à un instant), on lit la longueur d'onde λ comme la longueur d'un motif, par exemple la distance entre deux crêtes successives.",
                "Avec les deux grandeurs, on obtient la célérité : v = λ ÷ T = λ × f. Exemple en cuve à ondes : un vibreur de fréquence 20 Hz crée des ondes ; sur une photographie, 5 crêtes successives sont réparties sur 4,8 cm, ce qui correspond à 4 longueurs d'onde. Donc λ = 1,2 cm et v = 0,012 × 20 = 0,24 m·s⁻¹. Les applications sont nombreuses : sonar, échographie médicale (ultrasons de quelques mégahertz), étude de la houle.",
              ],
              box: { label: "Repère", text: "Sur la courbe y(t) : on lit T. Sur la courbe y(x) : on lit λ. Puis v = λ ÷ T. Mesurez toujours plusieurs motifs et divisez par leur nombre." },
            },
          ],
          keyPoints: [
            "Période T (s), fréquence f = 1 ÷ T (Hz) ; la fréquence est imposée par la source.",
            "Double périodicité : temporelle (période T) et spatiale (longueur d'onde λ).",
            "Relation fondamentale : λ = v × T = v ÷ f.",
            "Points distants de k × λ : en phase ; de (k + ½) × λ : en opposition de phase.",
            "En changeant de milieu, f ne change pas, mais v et λ changent.",
            "Sons audibles : de 20 Hz à 20 kHz ; au-delà, ultrasons.",
          ],
          example: {
            statement: "Dans une cuve à ondes, un vibreur de fréquence f = 20 Hz crée des ondes circulaires à la surface de l'eau. Sur une photographie, on mesure une distance de 6,0 cm entre la première et la sixième crête. 1. Calculer la période de l'onde. 2. Déterminer la longueur d'onde. 3. Calculer la célérité des ondes. 4. Deux points A et B de la surface, alignés avec la source, sont distants de 1,8 cm. Comment vibrent-ils l'un par rapport à l'autre ?",
            solution: [
              "1. T = 1 ÷ f = 1 ÷ 20 = 0,050 s.",
              "2. Entre la première et la sixième crête, il y a 5 longueurs d'onde : λ = 6,0 ÷ 5 = 1,2 cm.",
              "3. v = λ × f = 0,012 × 20 = 0,24 m·s⁻¹.",
              "4. 1,8 ÷ 1,2 = 1,5 : AB = 1,5 × λ = (1 + ½) × λ. Les points vibrent en opposition de phase.",
              "Réponse : T = 0,050 s ; λ = 1,2 cm ; v = 0,24 m·s⁻¹ ; A et B en opposition de phase.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un diapason émet un son sinusoïdal de fréquence 440 Hz. Données : célérité du son dans l'air : 340 m·s⁻¹ ; dans l'eau : 1 500 m·s⁻¹. 1. Calculer la période de ce son. 2. Calculer sa longueur d'onde dans l'air. 3. Ce son passe dans l'eau. Sa fréquence change-t-elle ? Calculer sa longueur d'onde dans l'eau.",
              hint: "T = 1 ÷ f et λ = v ÷ f. La fréquence est imposée par la source.",
              solution: [
                "1. T = 1 ÷ 440 ≈ 2,27 × 10⁻³ s, soit environ 2,27 ms.",
                "2. λ = v ÷ f = 340 ÷ 440 ≈ 0,773 m.",
                "3. La fréquence ne change pas : elle reste 440 Hz. λ = 1 500 ÷ 440 ≈ 3,41 m.",
                "Réponse : T ≈ 2,27 ms ; λ ≈ 0,77 m dans l'air et 3,4 m dans l'eau.",
              ],
            },
            {
              level: 2,
              statement: "Un haut-parleur émet un son sinusoïdal ; deux microphones M1 et M2, alignés avec lui, sont reliés à une interface d'acquisition. 1. Sur l'enregistrement du signal de M1, 4 périodes occupent une durée de 10 ms. Calculer la période et la fréquence du son. 2. Au départ, M1 et M2 sont côte à côte et leurs signaux sont en phase. On éloigne M2 du haut-parleur : les signaux se retrouvent en phase pour la cinquième fois lorsque M2 a été déplacé de 4,25 m (données fictives). Déterminer la longueur d'onde. 3. En déduire la célérité du son. 4. Pour quel déplacement minimal de M2 (à partir de la position de départ) les signaux étaient-ils en opposition de phase ?",
              hint: "Se retrouver en phase pour la cinquième fois correspond à un déplacement de 5 longueurs d'onde. L'opposition de phase correspond à une demi-longueur d'onde.",
              solution: [
                "1. T = 10 ÷ 4 = 2,5 ms = 2,5 × 10⁻³ s ; f = 1 ÷ T = 1 ÷ (2,5 × 10⁻³) = 400 Hz.",
                "2. 5 × λ = 4,25 m, donc λ = 0,85 m.",
                "3. v = λ × f = 0,85 × 400 = 340 m·s⁻¹.",
                "4. La première opposition de phase correspond à un déplacement de λ ÷ 2 = 0,425 m, soit environ 0,43 m.",
                "Réponse : T = 2,5 ms et f = 400 Hz ; λ = 0,85 m ; v = 340 m·s⁻¹ ; environ 0,43 m.",
              ],
            },
            {
              level: 3,
              statement: "Un échographe émet des ultrasons de fréquence f = 2,0 MHz qui se propagent dans les tissus mous du corps à la célérité v = 1 540 m·s⁻¹ (données fictives mais réalistes). 1. Justifier que ces ondes ne sont pas audibles. 2. Calculer leur période et leur longueur d'onde dans les tissus. 3. L'onde se réfléchit sur un organe et revient à la sonde 65 µs après l'émission. Calculer la profondeur de l'organe. 4. Deux points de l'axe de propagation sont distants de 1,54 mm, deux autres de 1,155 mm. Comment vibrent les points de chaque paire ? 5. Les détails observables en échographie sont de l'ordre de grandeur de la longueur d'onde. Expliquer l'intérêt d'utiliser une fréquence de 5,0 MHz et calculer la longueur d'onde correspondante.",
              hint: "Pour la profondeur, l'onde fait un aller et un retour : la distance parcourue vaut deux fois la profondeur. Comparez chaque distance à λ.",
              solution: [
                "1. f = 2,0 × 10⁶ Hz est très supérieure à 20 kHz, limite supérieure des sons audibles : ce sont des ultrasons.",
                "2. T = 1 ÷ f = 1 ÷ (2,0 × 10⁶) = 5,0 × 10⁻⁷ s. λ = v ÷ f = 1 540 ÷ (2,0 × 10⁶) = 7,7 × 10⁻⁴ m = 0,77 mm.",
                "3. Distance aller et retour : v × Δt = 1 540 × 65 × 10⁻⁶ ≈ 0,100 m. Profondeur : 0,100 ÷ 2 ≈ 5,0 × 10⁻² m, soit 5,0 cm.",
                "4. 1,54 ÷ 0,77 = 2 : distance égale à 2λ, les points vibrent en phase. 1,155 ÷ 0,77 = 1,5 : distance égale à 1,5λ, les points vibrent en opposition de phase.",
                "5. À fréquence plus élevée, la longueur d'onde est plus petite, donc on distingue des détails plus fins : λ = 1 540 ÷ (5,0 × 10⁶) ≈ 3,1 × 10⁻⁴ m = 0,31 mm.",
                "Réponse : ultrasons ; T = 5,0 × 10⁻⁷ s et λ = 0,77 mm ; profondeur 5,0 cm ; en phase puis en opposition de phase ; λ ≈ 0,31 mm à 5,0 MHz, image plus fine.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos connaissances sur les ondes périodiques.",
            statements: [
              { text: "Quand un son passe de l'air dans l'eau, sa fréquence change.", true: false, why: "La fréquence est imposée par la source ; ce sont la célérité et la longueur d'onde qui changent." },
              { text: "La longueur d'onde est la distance parcourue par l'onde pendant une période.", true: true, why: "C'est la relation λ = v × T." },
              { text: "Deux points distants d'une demi-longueur d'onde vibrent en phase.", true: false, why: "Ils vibrent en opposition de phase ; deux points distants de λ vibrent en phase." },
              { text: "La longueur d'onde est la période spatiale de l'onde.", true: true, why: "À un instant donné, l'aspect du milieu se répète tous les λ." },
              { text: "Un son plus fort se propage plus vite dans l'air.", true: false, why: "La célérité dépend du milieu, pas de l'amplitude." },
              { text: "Les ultrasons ont une fréquence supérieure à 20 kHz.", true: true, why: "C'est la limite supérieure approximative de l'audition humaine." },
              { text: "Dans l'air, un son aigu a une longueur d'onde plus petite qu'un son grave.", true: true, why: "Même célérité, fréquence plus grande : λ = v ÷ f est plus petite." },
            ],
          },
          quiz: [
            {
              q: "Une onde a une fréquence de 50 Hz. Sa période vaut :",
              options: ["0,020 s", "50 s", "0,50 s", "2,0 s"],
              answer: 0,
              why: "T = 1 ÷ f = 1 ÷ 50 = 0,020 s.",
            },
            {
              q: "La longueur d'onde est :",
              options: ["la durée qui sépare deux oscillations successives d'un point", "la plus petite distance entre deux points vibrant en phase", "l'amplitude maximale de la perturbation", "le nombre d'oscillations effectuées par seconde"],
              answer: 1,
              why: "λ est la période spatiale : la plus petite distance séparant deux points du milieu qui vibrent en phase.",
            },
            {
              q: "Un son de fréquence 170 Hz se propage dans l'air à 340 m·s⁻¹. Sa longueur d'onde vaut :",
              options: ["0,50 m", "5,8 × 10⁴ m", "510 m", "2,0 m"],
              answer: 3,
              why: "λ = v ÷ f = 340 ÷ 170 = 2,0 m.",
            },
            {
              q: "Deux points d'une corde, sur la direction de propagation, sont distants de 3λ ÷ 2. Ils :",
              options: ["vibrent en phase", "vibrent en opposition de phase", "sont immobiles en permanence", "ont des mouvements sans rapport l'un avec l'autre"],
              answer: 1,
              why: "3λ ÷ 2 = (1 + ½) × λ : les points vibrent en opposition de phase.",
            },
            {
              q: "Lorsqu'une onde sonore passe de l'air dans l'eau, où elle va plus vite :",
              options: ["sa fréquence change, sa longueur d'onde reste la même", "sa fréquence et sa longueur d'onde restent toutes deux les mêmes", "sa fréquence reste la même, sa longueur d'onde augmente", "sa fréquence reste la même, sa longueur d'onde diminue"],
              answer: 2,
              why: "f est fixée par la source ; v augmente, donc λ = v ÷ f augmente.",
            },
          ],
          trap: "Confondre période T et longueur d'onde λ (l'une se lit sur une courbe en fonction du temps, l'autre sur une courbe en fonction de la position), ou croire que la fréquence change quand l'onde change de milieu.",
          method: "Avant de lire une grandeur sur un graphique, regardez l'axe horizontal : s'il s'agit du temps, vous lisez T ; s'il s'agit d'une position, vous lisez λ. Mesurez toujours sur plusieurs motifs, puis vérifiez la cohérence avec λ = v × T.",
        },
      ],
    },
    /* ================================================================== */
    /* LA LUMIÈRE : IMAGES ET COULEURS                                      */
    /* ================================================================== */
    {
      id: 'lumiere',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: "lentilles-images",
          title: "Lentilles minces : relation de conjugaison et grandissement",
          minutes: 35,
          objectives: [
            "Déterminer les caractéristiques de l'image d'un objet plan réel formée par une lentille mince convergente (image réelle ou virtuelle, droite ou renversée).",
            "Exploiter les relations de conjugaison et de grandissement pour déterminer la position et la taille de l'image d'un objet plan réel.",
            "Construire graphiquement l'image d'un objet plan par une lentille mince convergente.",
            "Modéliser l'œil et un appareil photographique, et expliquer la mise au point.",
          ],
          course: [
            {
              heading: "La lentille mince convergente",
              paragraphs: [
                "Une lentille mince convergente est un milieu transparent, plus épais au centre qu'au bord, qui fait converger un faisceau de lumière parallèle. On la caractérise par son centre optique O, son axe optique (la droite perpendiculaire à la lentille passant par O), son foyer image F', point de l'axe où convergent les rayons arrivant parallèlement à l'axe, et son foyer objet F, symétrique de F' par rapport à O.",
                "La distance focale f' = OF' s'exprime en mètres. La vergence C = 1 ÷ f' s'exprime en dioptries (symbole δ, 1 δ = 1 m⁻¹). Une lentille de distance focale 20 cm a une vergence C = 1 ÷ 0,20 = 5,0 δ. Plus la vergence est grande, plus la lentille est convergente.",
                "Trois rayons particuliers permettent les constructions : un rayon passant par le centre optique O n'est pas dévié ; un rayon incident parallèle à l'axe optique émerge en passant par le foyer image F' ; un rayon incident passant par le foyer objet F émerge parallèlement à l'axe optique.",
              ],
              box: { label: "Définition", text: "Distance focale f' = OF' (en m). Vergence C = 1 ÷ f' (en dioptries δ, 1 δ = 1 m⁻¹). Rayons particuliers : par O, non dévié ; parallèle à l'axe, émerge par F' ; par F, émerge parallèle à l'axe." },
            },
            {
              heading: "Construire l'image d'un objet plan",
              paragraphs: [
                "On considère un objet plan AB perpendiculaire à l'axe optique, le point A étant sur l'axe. On trace deux des trois rayons particuliers issus de B ; leur intersection après la lentille donne l'image B'. L'image A' de A est sur l'axe, à la verticale de B'. L'image A'B' est elle aussi perpendiculaire à l'axe.",
                "Si l'objet est situé avant le foyer objet F (plus loin de la lentille que F), les rayons émergents se croisent réellement après la lentille : l'image est réelle, on peut la recueillir sur un écran, et elle est renversée. Si l'objet est situé entre F et la lentille, les rayons émergents divergent : ce sont leurs prolongements qui se croisent, avant la lentille. L'image est alors virtuelle (on ne peut pas la projeter, mais on la voit en regardant à travers la lentille), droite et agrandie : c'est le principe de la loupe.",
              ],
              box: { label: "À retenir", text: "Objet avant F : image réelle et renversée, observable sur un écran. Objet entre F et O : image virtuelle, droite et agrandie (loupe)." },
            },
            {
              heading: "La relation de conjugaison",
              paragraphs: [
                "Pour calculer la position de l'image, on oriente l'axe optique dans le sens de propagation de la lumière, avec l'origine en O, et l'on utilise des mesures algébriques (souvent notées avec une barre au-dessus) : OA est négative pour un objet réel placé avant la lentille, OA' est positive pour une image réelle formée après la lentille, et OF' = f' est positive pour une lentille convergente.",
                "La relation de conjugaison s'écrit : 1 ÷ OA' - 1 ÷ OA = 1 ÷ OF'. Exemple : un objet est placé 30 cm avant une lentille de distance focale 10 cm, donc OA = -30 cm. On a 1 ÷ OA' = 1 ÷ 10 + 1 ÷ (-30) = 3 ÷ 30 - 1 ÷ 30 = 2 ÷ 30, d'où OA' = 15 cm. L'image se forme 15 cm après la lentille : elle est réelle.",
                "Le signe de OA' renseigne sur la nature de l'image : OA' > 0, image réelle (après la lentille) ; OA' < 0, image virtuelle (du même côté que l'objet). Un objet très éloigné (OA tend vers -∞) a son image dans le plan focal image : OA' = f'.",
              ],
              box: { label: "Formule", text: "Relation de conjugaison (mesures algébriques, axe orienté dans le sens de la lumière) : 1 ÷ OA' - 1 ÷ OA = 1 ÷ OF' = C. Pour un objet réel, OA < 0." },
            },
            {
              heading: "Le grandissement",
              paragraphs: [
                "Le grandissement γ (lettre grecque gamma) compare la taille algébrique de l'image à celle de l'objet : γ = A'B' ÷ AB = OA' ÷ OA. C'est un nombre sans unité. Si γ < 0, l'image est renversée ; si γ > 0, elle est droite. Si |γ| > 1, l'image est plus grande que l'objet ; si |γ| < 1, elle est plus petite.",
                "Dans l'exemple précédent, γ = 15 ÷ (-30) = -0,50 : l'image est renversée et deux fois plus petite que l'objet. Pour un objet de 4,0 cm, A'B' = γ × AB = -0,50 × 4,0 = -2,0 cm : l'image mesure 2,0 cm et pointe vers le bas.",
              ],
              box: { label: "Formule", text: "Grandissement : γ = A'B' ÷ AB = OA' ÷ OA. γ < 0 : image renversée ; γ > 0 : image droite ; |γ| > 1 : image agrandie." },
            },
            {
              heading: "L'œil et l'appareil photographique",
              paragraphs: [
                "L'œil peut être modélisé par une lentille convergente (le cristallin associé à la cornée), un diaphragme (l'iris) et un écran (la rétine), situé à distance fixe de la lentille. Pour qu'un objet soit vu net, son image doit se former sur la rétine. Comme OA' est fixé, l'œil fait la mise au point en modifiant la vergence du cristallin : c'est l'accommodation. Au repos, l'œil normal voit net les objets éloignés ; pour regarder un objet proche, le cristallin se bombe et sa vergence augmente.",
                "Dans un appareil photographique, l'objectif joue le rôle de la lentille et le capteur celui de l'écran. La distance focale est fixée (pour un objectif sans zoom) : la mise au point se fait en modifiant la distance entre l'objectif et le capteur. Plus l'objet est proche, plus il faut éloigner l'objectif du capteur.",
              ],
            },
          ],
          keyPoints: [
            "Vergence : C = 1 ÷ f', en dioptries (δ = m⁻¹).",
            "Relation de conjugaison : 1 ÷ OA' - 1 ÷ OA = 1 ÷ OF', avec OA < 0 pour un objet réel.",
            "Grandissement : γ = A'B' ÷ AB = OA' ÷ OA ; γ < 0, image renversée.",
            "OA' > 0 : image réelle ; OA' < 0 : image virtuelle (objet entre F et O, loupe).",
            "Mise au point : l'œil modifie sa vergence (accommodation), l'appareil photo modifie la distance objectif-capteur.",
          ],
          example: {
            statement: "Un objet AB de hauteur 2,0 cm est placé perpendiculairement à l'axe optique, 15 cm avant une lentille mince convergente de vergence C = +10 δ. 1. Calculer la distance focale de la lentille. 2. Déterminer la position de l'image A'B'. 3. Calculer le grandissement et la taille de l'image. 4. Donner les caractéristiques de l'image.",
            solution: [
              "1. f' = 1 ÷ C = 1 ÷ 10 = 0,10 m = 10 cm.",
              "2. OA = -15 cm. Relation de conjugaison : 1 ÷ OA' = 1 ÷ OF' + 1 ÷ OA = 1 ÷ 10 - 1 ÷ 15 = 3 ÷ 30 - 2 ÷ 30 = 1 ÷ 30, donc OA' = 30 cm.",
              "3. γ = OA' ÷ OA = 30 ÷ (-15) = -2,0. A'B' = γ × AB = -2,0 × 2,0 = -4,0 cm.",
              "4. OA' > 0 : image réelle, située 30 cm après la lentille ; γ < 0 : renversée ; |γ| = 2,0 : deux fois plus grande que l'objet.",
              "Réponse : f' = 10 cm ; image réelle, renversée, à 30 cm après la lentille, de hauteur 4,0 cm.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1. Calculer la vergence d'une lentille convergente de distance focale 25 cm. 2. Calculer la distance focale d'une lentille de vergence 8,0 δ. 3. Un objet est placé 50 cm avant la lentille de distance focale 25 cm. Calculer la position de l'image et le grandissement, puis décrire l'image.",
              hint: "Exprimez f' en mètres pour obtenir C en dioptries. Pour la question 3, OA = -50 cm.",
              solution: [
                "1. C = 1 ÷ f' = 1 ÷ 0,25 = 4,0 δ.",
                "2. f' = 1 ÷ C = 1 ÷ 8,0 = 0,125 m = 12,5 cm.",
                "3. 1 ÷ OA' = 1 ÷ 25 + 1 ÷ (-50) = 2 ÷ 50 - 1 ÷ 50 = 1 ÷ 50, donc OA' = 50 cm. γ = 50 ÷ (-50) = -1,0.",
                "L'image est réelle (à 50 cm après la lentille), renversée et de même taille que l'objet.",
                "Réponse : 4,0 δ ; 12,5 cm ; OA' = 50 cm et γ = -1,0.",
              ],
            },
            {
              level: 2,
              statement: "L'objectif d'un appareil photographique est modélisé par une lentille mince convergente de distance focale f' = 50 mm ; le capteur mesure 24 mm × 36 mm. 1. À quelle distance de l'objectif se forme l'image d'un paysage très éloigné ? 2. On photographie une personne de 1,80 m située à 2,0 m de l'objectif. Calculer la distance objectif-capteur nécessaire pour que l'image soit nette. 3. De combien et dans quel sens faut-il déplacer l'objectif par rapport à la situation de la question 1 ? 4. Calculer la hauteur de l'image de la personne. Tient-elle entièrement sur le capteur, même tenu verticalement ?",
              hint: "Travaillez en millimètres : OA = -2 000 mm. Pour un objet à l'infini, l'image est au foyer image.",
              solution: [
                "1. Pour un objet très éloigné, l'image se forme au foyer image : OA' = f' = 50 mm.",
                "2. 1 ÷ OA' = 1 ÷ 50 + 1 ÷ (-2 000) = 40 ÷ 2 000 - 1 ÷ 2 000 = 39 ÷ 2 000, donc OA' = 2 000 ÷ 39 ≈ 51,3 mm.",
                "3. Il faut éloigner l'objectif du capteur d'environ 51,3 - 50 = 1,3 mm.",
                "4. γ = OA' ÷ OA = 51,3 ÷ (-2 000) ≈ -0,0256. A'B' = -0,0256 × 1 800 mm ≈ -46 mm : l'image est renversée et mesure environ 46 mm.",
                "Elle dépasse la plus grande dimension du capteur (36 mm) : la personne n'est pas photographiée en entier ; il faut reculer.",
                "Réponse : 50 mm ; environ 51,3 mm ; déplacement d'environ 1,3 mm vers l'avant ; image d'environ 46 mm, trop grande pour le capteur.",
              ],
            },
            {
              level: 3,
              statement: "On modélise l'œil par une lentille mince convergente (cristallin et cornée) placée à 17 mm d'un écran (la rétine). Cette distance est fixe. 1. Lorsque l'œil normal, au repos, observe un objet très éloigné, l'image se forme nette sur la rétine. Calculer la distance focale et la vergence de la lentille dans ce cas. 2. L'œil lit un texte placé à 25 cm. Calculer la vergence nécessaire et le gain de vergence par rapport au repos. Comment s'appelle ce phénomène ? 3. Calculer la taille de l'image sur la rétine d'une lettre de 2,0 mm de haut lue à 25 cm ; l'image est-elle droite ou renversée ? 4. Avec l'âge, la vergence maximale du cristallin diminue. Pour une personne dont la vergence maximale est de 61 δ (données fictives), calculer la distance minimale à laquelle elle peut lire nettement. Commenter.",
              hint: "Ici OA' = 17 mm = 0,017 m est imposé. La relation de conjugaison donne alors C = 1 ÷ OA' - 1 ÷ OA.",
              solution: [
                "1. Objet à l'infini : l'image est au foyer, donc f' = 17 mm = 0,017 m et C = 1 ÷ 0,017 ≈ 58,8 δ.",
                "2. OA = -0,25 m et OA' = 0,017 m : C = 1 ÷ 0,017 - 1 ÷ (-0,25) ≈ 58,8 + 4,0 = 62,8 δ. Gain : environ 4,0 δ. C'est l'accommodation : le cristallin se bombe.",
                "3. γ = OA' ÷ OA = 0,017 ÷ (-0,25) = -0,068. A'B' = -0,068 × 2,0 ≈ -0,14 mm : image d'environ 0,14 mm, renversée (le cerveau rétablit le sens).",
                "4. 1 ÷ OA = 1 ÷ OA' - C = 58,8 - 61 ≈ -2,2 m⁻¹, donc OA ≈ -0,46 m. La personne ne voit net qu'à partir d'environ 46 cm.",
                "Commentaire : elle doit tenir son livre plus loin que 25 cm : c'est la presbytie, que l'on corrige par des verres convergents.",
                "Réponse : f' = 17 mm, C ≈ 59 δ ; C ≈ 63 δ, gain d'environ 4 δ (accommodation) ; image de 0,14 mm renversée ; lecture nette à partir d'environ 46 cm.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du calcul de l'image d'un objet par une lentille convergente.",
            items: [
              "Orienter l'axe optique dans le sens de la lumière, origine en O",
              "Traduire les données en mesures algébriques (OA < 0 pour un objet réel)",
              "Écrire la relation de conjugaison et isoler 1 ÷ OA'",
              "Calculer OA' et conclure : image réelle ou virtuelle",
              "Calculer le grandissement γ = OA' ÷ OA",
              "En déduire la taille de l'image et dire si elle est droite ou renversée",
            ],
          },
          quiz: [
            {
              q: "Une lentille convergente a une distance focale de 0,50 m. Sa vergence vaut :",
              options: ["0,50 δ", "2,0 δ", "50 δ", "5,0 δ"],
              answer: 1,
              why: "C = 1 ÷ f' = 1 ÷ 0,50 = 2,0 δ.",
            },
            {
              q: "Un rayon lumineux passant par le centre optique d'une lentille mince :",
              options: ["n'est pas dévié", "émerge parallèle à l'axe", "passe ensuite par le foyer image", "est réfléchi vers l'objet"],
              answer: 0,
              why: "C'est l'un des trois rayons particuliers : un rayon qui passe par O traverse la lentille sans déviation.",
            },
            {
              q: "Le grandissement d'une image vaut γ = -2. L'image est :",
              options: ["droite et deux fois plus grande", "renversée et deux fois plus petite", "renversée et deux fois plus grande", "virtuelle et de même taille"],
              answer: 2,
              why: "γ < 0 : image renversée ; |γ| = 2 : deux fois plus grande que l'objet.",
            },
            {
              q: "Une lentille de distance focale 10 cm donne d'un objet placé en OA = -20 cm une image située en :",
              options: ["OA' = 10 cm", "OA' = 20 cm", "OA' = -20 cm", "OA' = 6,7 cm"],
              answer: 1,
              why: "1 ÷ OA' = 1 ÷ 10 + 1 ÷ (-20) = 1 ÷ 20, donc OA' = 20 cm : l'objet étant à 2f', l'image est à 2f'.",
            },
            {
              q: "Avec une lentille convergente, on obtient une image virtuelle lorsque l'objet est placé :",
              options: ["très loin de la lentille", "exactement à deux fois la distance focale", "au-delà du foyer objet F, loin de la lentille", "entre le foyer objet F et la lentille"],
              answer: 3,
              why: "Entre F et O, les rayons émergents divergent : seuls leurs prolongements se coupent, l'image est virtuelle (loupe).",
            },
          ],
          trap: "Oublier que OA est négative pour un objet réel (écrire OA = +30 cm), ce qui fausse la position de l'image et le signe du grandissement, ou mélanger centimètres et mètres dans le calcul de la vergence.",
          method: "Faites toujours un schéma à l'échelle avant de calculer : la construction graphique donne la nature et l'ordre de grandeur de l'image, qui permettent de contrôler le signe et la valeur de OA' et de γ trouvés par le calcul.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "couleurs",
          title: "Synthèse additive, synthèse soustractive et couleur des objets",
          minutes: 30,
          objectives: [
            "Expliquer la vision des couleurs par la trichromie.",
            "Prévoir le résultat de la superposition de lumières colorées (synthèse additive) et l'effet d'un ou plusieurs filtres colorés (synthèse soustractive).",
            "Interpréter la couleur perçue d'un objet à partir des phénomènes d'absorption, de diffusion et de transmission.",
            "Identifier des couleurs complémentaires.",
          ],
          course: [
            {
              heading: "La vision des couleurs : la trichromie",
              paragraphs: [
                "La rétine contient deux types de cellules sensibles à la lumière. Les bâtonnets, très sensibles, permettent la vision en faible lumière mais ne distinguent pas les couleurs : la nuit, « tous les chats sont gris ». Les cônes fonctionnent en lumière suffisante et assurent la vision des couleurs.",
                "Il existe trois types de cônes, dont les sensibilités sont maximales dans des domaines différents du spectre visible : le bleu, le vert et le rouge. Le cerveau élabore la couleur perçue à partir des signaux envoyés par ces trois types de cônes : c'est la trichromie. Une lumière qui stimule à la fois les cônes « rouges » et les cônes « verts » est perçue jaune, qu'elle contienne ou non des radiations de longueur d'onde jaune.",
                "La lumière blanche, comme celle du Soleil, contient toutes les radiations visibles, de longueurs d'onde comprises entre environ 400 nm (violet) et 800 nm (rouge). Elle stimule les trois types de cônes.",
              ],
              box: { label: "À retenir", text: "Trois types de cônes, sensibles surtout au bleu, au vert et au rouge : la couleur perçue résulte de la combinaison de leurs signaux (trichromie). Les bâtonnets ne distinguent pas les couleurs." },
            },
            {
              heading: "La synthèse additive",
              paragraphs: [
                "La synthèse additive consiste à superposer des lumières colorées. Les trois couleurs primaires de la synthèse additive sont le rouge, le vert et le bleu (RVB). En éclairant un écran blanc avec des projecteurs, on observe : rouge + vert = jaune ; rouge + bleu = magenta ; vert + bleu = cyan ; rouge + vert + bleu = blanc. En faisant varier l'intensité de chaque lumière, on obtient toutes les couleurs.",
                "Les écrans (téléphone, télévision, ordinateur) utilisent la synthèse additive : chaque pixel est formé de trois sous-pixels rouge, vert et bleu, trop petits pour être distingués à l'œil nu. Un pixel jaune a ses sous-pixels rouge et vert allumés et son sous-pixel bleu éteint.",
                "Deux lumières colorées sont complémentaires si leur superposition donne du blanc : le jaune et le bleu, le cyan et le rouge, le magenta et le vert sont des couples de couleurs complémentaires.",
              ],
              box: { label: "Règle", text: "Synthèse additive (lumières) : R + V = jaune ; R + B = magenta ; V + B = cyan ; R + V + B = blanc. Couleurs complémentaires : jaune et bleu, cyan et rouge, magenta et vert." },
            },
            {
              heading: "La synthèse soustractive",
              paragraphs: [
                "La synthèse soustractive consiste à retirer des radiations à une lumière blanche, à l'aide de filtres ou de pigments qui en absorbent une partie. Un filtre coloré transmet la lumière de sa couleur et absorbe sa couleur complémentaire. Un filtre cyan absorbe le rouge et transmet le vert et le bleu ; un filtre magenta absorbe le vert ; un filtre jaune absorbe le bleu.",
                "Les couleurs primaires de la synthèse soustractive sont le cyan, le magenta et le jaune. En superposant deux filtres, on cumule les absorptions : cyan + jaune laissent passer seulement le vert ; cyan + magenta, le bleu ; magenta + jaune, le rouge. Les trois filtres ensemble absorbent tout : on obtient du noir.",
                "Les imprimantes et la peinture utilisent la synthèse soustractive : les encres cyan, magenta et jaune absorbent chacune une couleur primaire de la lumière qui éclaire la feuille. On ajoute en pratique une encre noire (procédé CMJN), qui donne un noir plus profond et économise les encres colorées.",
              ],
              box: { label: "Règle", text: "Synthèse soustractive (filtres, pigments) : cyan + jaune = vert ; cyan + magenta = bleu ; magenta + jaune = rouge ; cyan + magenta + jaune = noir. Un filtre absorbe sa couleur complémentaire." },
            },
            {
              heading: "La couleur des objets",
              paragraphs: [
                "Un objet éclairé absorbe une partie des radiations qu'il reçoit et diffuse le reste dans toutes les directions ; s'il est transparent, il en transmet aussi une partie. La couleur perçue d'un objet opaque est celle de la lumière qu'il diffuse : elle dépend donc à la fois de l'objet et de la lumière qui l'éclaire.",
                "Une tomate mûre éclairée en lumière blanche absorbe le vert et le bleu et diffuse le rouge : elle paraît rouge. Éclairée en lumière verte, elle absorbe tout ce qu'elle reçoit et paraît noire ; en lumière jaune (rouge + vert), elle diffuse le rouge et paraît encore rouge. Un objet blanc diffuse toutes les couleurs qu'il reçoit ; un objet noir les absorbe toutes.",
                "C'est pourquoi la couleur d'un vêtement peut sembler différente sous l'éclairage d'un magasin et à la lumière du jour : les radiations disponibles ne sont pas les mêmes.",
              ],
              box: { label: "Propriété", text: "Couleur perçue d'un objet opaque = couleur de la lumière qu'il diffuse. Elle dépend de la lumière incidente et des radiations absorbées par l'objet." },
            },
          ],
          keyPoints: [
            "Trichromie : trois types de cônes (bleu, vert, rouge) ; le cerveau combine leurs signaux.",
            "Synthèse additive (lumières) : primaires R, V, B ; R + V + B = blanc.",
            "Synthèse soustractive (filtres, pigments) : primaires cyan, magenta, jaune ; les trois ensemble donnent le noir.",
            "Couleurs complémentaires : jaune et bleu, cyan et rouge, magenta et vert.",
            "Un objet absorbe certaines radiations et diffuse les autres : sa couleur dépend de l'éclairage.",
          ],
          example: {
            statement: "Une banane mûre, que l'on considère comme diffusant le rouge et le vert et absorbant le bleu, est éclairée successivement en lumière blanche, rouge, bleue puis cyan. Quelle couleur paraît-elle avoir dans chaque cas ?",
            solution: [
              "En lumière blanche (R + V + B) : elle diffuse R et V, absorbe B ; R + V = jaune, elle paraît jaune.",
              "En lumière rouge : elle diffuse le rouge reçu ; elle paraît rouge.",
              "En lumière bleue : elle absorbe le bleu et ne diffuse rien ; elle paraît noire.",
              "En lumière cyan (V + B) : elle diffuse le vert et absorbe le bleu ; elle paraît verte.",
              "Réponse : jaune, rouge, noire, verte.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On éclaire un écran blanc avec des projecteurs de lumière colorée. 1. Quelle couleur obtient-on en superposant les lumières rouge et verte ? verte et bleue ? rouge, verte et bleue ? 2. Quelle est la couleur complémentaire de la lumière bleue ? Justifier. 3. De quel type de synthèse s'agit-il ?",
              hint: "Deux lumières sont complémentaires si leur superposition donne du blanc.",
              solution: [
                "1. Rouge + vert = jaune ; vert + bleu = cyan ; rouge + vert + bleu = blanc.",
                "2. La couleur complémentaire du bleu est le jaune : jaune (R + V) + bleu = R + V + B = blanc.",
                "3. On superpose des lumières : c'est la synthèse additive.",
                "Réponse : jaune, cyan, blanc ; le jaune ; synthèse additive.",
              ],
            },
            {
              level: 2,
              statement: "On dispose de filtres idéaux cyan, magenta, jaune et rouge. 1. On place successivement sur un faisceau de lumière blanche un filtre magenta puis un filtre jaune. Quelle couleur obtient-on ? 2. On remplace ces filtres par un filtre cyan suivi d'un filtre rouge. Qu'observe-t-on ? 3. On éclaire un filtre vert avec une lumière magenta. Qu'observe-t-on après le filtre ? 4. Quel est le résultat de la superposition des trois filtres cyan, magenta et jaune ?",
              hint: "Suivez les couleurs primaires R, V, B une par une : chaque filtre absorbe certaines d'entre elles.",
              solution: [
                "1. Le filtre magenta transmet R et B (il absorbe V) ; le filtre jaune transmet R et V (il absorbe B). Seul R traverse les deux : la lumière obtenue est rouge.",
                "2. Le filtre cyan transmet V et B ; le filtre rouge ne transmet que R. Aucune radiation ne traverse les deux : on obtient du noir.",
                "3. La lumière magenta contient R et B ; le filtre vert ne transmet que V : rien ne passe, on obtient du noir.",
                "4. Le cyan absorbe R, le magenta absorbe V, le jaune absorbe B : tout est absorbé, on obtient du noir.",
                "Réponse : rouge ; noir ; noir ; noir.",
              ],
            },
            {
              level: 3,
              statement: "Un drapeau tricolore bleu, blanc, rouge est placé dans une salle obscure. On considère que la bande bleue ne diffuse que le bleu, la bande blanche diffuse toutes les couleurs et la bande rouge ne diffuse que le rouge. 1. Quelle est la couleur perçue de chaque bande lorsque le drapeau est éclairé en lumière cyan ? 2. Même question en lumière jaune. 3. Une imprimante dispose d'encres cyan, magenta et jaune. Quelles encres doit-elle superposer pour imprimer la bande rouge ? Justifier en termes de lumière absorbée et diffusée. 4. Sur un écran, quels sous-pixels doivent être allumés pour afficher la bande blanche ? la bande rouge ? 5. Expliquer pourquoi l'imprimante et l'écran n'utilisent pas les mêmes couleurs primaires.",
              hint: "Lumière cyan = vert + bleu ; lumière jaune = rouge + vert. Une encre absorbe sa couleur complémentaire.",
              solution: [
                "1. Lumière cyan (V + B) : la bande bleue diffuse B, elle paraît bleue ; la bande blanche diffuse V et B, elle paraît cyan ; la bande rouge n'a rien à diffuser, elle paraît noire.",
                "2. Lumière jaune (R + V) : la bande bleue paraît noire ; la bande blanche paraît jaune ; la bande rouge diffuse R, elle paraît rouge.",
                "3. Il faut que seul le rouge soit diffusé : l'encre magenta absorbe le vert, l'encre jaune absorbe le bleu. La superposition magenta + jaune ne renvoie que le rouge.",
                "4. Bande blanche : les trois sous-pixels rouge, vert et bleu allumés. Bande rouge : seul le sous-pixel rouge allumé.",
                "5. L'écran émet de la lumière : il additionne des lumières (synthèse additive, primaires R, V, B). L'imprimante dépose des encres qui retirent des couleurs à la lumière blanche éclairant la feuille (synthèse soustractive, primaires cyan, magenta, jaune).",
                "Réponse : en cyan, bleu, cyan, noir ; en jaune, noir, jaune, rouge ; encres magenta et jaune ; R, V, B allumés pour le blanc, R seul pour le rouge.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque superposition à la couleur obtenue.",
            pairs: [
              { left: "Lumières rouge + verte", right: "jaune" },
              { left: "Lumières verte + bleue", right: "cyan" },
              { left: "Lumières rouge + bleue", right: "magenta" },
              { left: "Lumières rouge + verte + bleue", right: "blanc" },
              { left: "Filtres cyan + jaune", right: "vert" },
              { left: "Filtres cyan + magenta + jaune", right: "noir" },
            ],
          },
          quiz: [
            {
              q: "Quelle lumière colorée est complémentaire de la lumière bleue ?",
              options: ["cyan", "jaune", "magenta", "rouge"],
              answer: 1,
              why: "Jaune (rouge + vert) et bleu donnent, superposés, du blanc.",
            },
            {
              q: "Un filtre cyan éclairé en lumière blanche :",
              options: ["transmet le rouge, absorbe le vert et le bleu", "absorbe toutes les radiations", "transmet le vert et le bleu, absorbe le rouge", "transmet toutes les radiations"],
              answer: 2,
              why: "Un filtre transmet sa couleur (cyan = vert + bleu) et absorbe sa couleur complémentaire, le rouge.",
            },
            {
              q: "Une feuille verte (qui ne diffuse que le vert) est éclairée en lumière rouge. Elle paraît :",
              options: ["verte", "rouge", "jaune", "noire"],
              answer: 3,
              why: "La feuille absorbe le rouge qu'elle reçoit et n'a pas de vert à diffuser : elle paraît noire.",
            },
            {
              q: "Les écrans de télévision et de téléphone reposent sur :",
              options: ["la synthèse additive", "la synthèse soustractive", "la diffusion sélective par des pigments"],
              answer: 0,
              why: "Chaque pixel émet des lumières rouge, verte et bleue qui s'additionnent.",
            },
            {
              q: "À propos des cônes de la rétine, quelle affirmation est exacte ?",
              options: ["ils sont tous sensibles aux mêmes radiations", "ils fonctionnent surtout quand la lumière est très faible, la nuit", "ils se trouvent dans le cristallin", "ils sont de trois types, aux sensibilités différentes"],
              answer: 3,
              why: "Il existe trois types de cônes, sensibles surtout au bleu, au vert et au rouge : c'est la base de la trichromie.",
            },
          ],
          trap: "Appliquer les règles de la synthèse additive aux peintures ou aux filtres (croire par exemple que mélanger des encres de toutes les couleurs donne du blanc), ou oublier que la couleur perçue d'un objet dépend de la lumière qui l'éclaire.",
          method: "Décomposez systématiquement chaque lumière en ses composantes rouge, verte et bleue, puis suivez-les une à une : quelles composantes arrivent, lesquelles sont absorbées, lesquelles sont diffusées ou transmises. La couleur perçue est la synthèse additive de ce qui reste.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: "photon-energie",
          title: "Le photon et les niveaux d’énergie de l’atome",
          minutes: 35,
          objectives: [
            "Utiliser l'expression donnant l'énergie d'un photon : E = h × ν = h × c ÷ λ.",
            "Exploiter un diagramme de niveaux d'énergie en utilisant les relations λ = c ÷ ν et ΔE = h × ν.",
            "Décrire qualitativement l'interaction lumière-matière : absorption et émission.",
            "Interpréter un spectre de raies d'émission ou d'absorption à partir d'un diagramme de niveaux d'énergie.",
          ],
          course: [
            {
              heading: "Deux modèles pour décrire la lumière",
              paragraphs: [
                "Dans le modèle ondulatoire, la lumière est une onde électromagnétique, qui peut se propager dans le vide à la vitesse c = 3,00 × 10⁸ m·s⁻¹. Une radiation monochromatique est caractérisée par sa fréquence ν (lettre grecque nu), en hertz, ou par sa longueur d'onde dans le vide λ = c ÷ ν. Le domaine visible s'étend d'environ 400 nm (violet) à 800 nm (rouge) ; au-delà se trouvent l'infrarouge, les micro-ondes et les ondes radio ; en deçà, l'ultraviolet, les rayons X et les rayons gamma.",
                "Certains phénomènes, comme l'effet photoélectrique (des électrons arrachés à un métal par de la lumière), ne s'expliquent pas avec le seul modèle ondulatoire. En 1900, Max Planck propose que les échanges d'énergie entre matière et rayonnement se font par quantités discrètes ; en 1905, Albert Einstein interprète l'effet photoélectrique en considérant que la lumière elle-même est constituée de « quanta » d'énergie, appelés plus tard photons.",
                "Dans le modèle particulaire, la lumière est un flux de photons : des particules de masse nulle, se déplaçant à la vitesse c, transportant chacune une quantité d'énergie déterminée. Les deux modèles sont complémentaires : on utilise l'un ou l'autre selon le phénomène étudié.",
              ],
            },
            {
              heading: "L'énergie d'un photon",
              paragraphs: [
                "L'énergie d'un photon associé à une radiation de fréquence ν vaut E = h × ν = h × c ÷ λ, où h = 6,63 × 10⁻³⁴ J·s est la constante de Planck. L'énergie est donc proportionnelle à la fréquence et inversement proportionnelle à la longueur d'onde : un photon ultraviolet est plus énergétique qu'un photon visible, lui-même plus énergétique qu'un photon infrarouge. C'est pourquoi les UV peuvent endommager la peau, alors que les infrarouges se contentent de chauffer.",
                "À l'échelle atomique, on utilise souvent l'électronvolt : 1 eV = 1,60 × 10⁻¹⁹ J. Exemple : un photon de lumière orangée de longueur d'onde 600 nm a une énergie E = 6,63 × 10⁻³⁴ × 3,00 × 10⁸ ÷ (600 × 10⁻⁹) ≈ 3,32 × 10⁻¹⁹ J, soit 3,32 × 10⁻¹⁹ ÷ 1,60 × 10⁻¹⁹ ≈ 2,07 eV. Les photons visibles ont des énergies de l'ordre de 1,5 à 3 eV.",
              ],
              box: { label: "Formule", text: "Énergie d'un photon : E = h × ν = h × c ÷ λ. h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; λ en mètres ; E en joules. 1 eV = 1,60 × 10⁻¹⁹ J." },
            },
            {
              heading: "Les niveaux d'énergie de l'atome",
              paragraphs: [
                "L'énergie d'un atome ne peut prendre que certaines valeurs bien déterminées : on dit qu'elle est quantifiée. Ces valeurs, appelées niveaux d'énergie, se représentent sur un diagramme vertical, chaque niveau par un trait horizontal. Ce modèle a été introduit par Niels Bohr en 1913 pour l'atome d'hydrogène.",
                "Le niveau le plus bas est l'état fondamental, état stable de l'atome. Les niveaux supérieurs sont des états excités, instables : l'atome n'y reste qu'un temps très bref. Par convention, le niveau d'énergie 0 correspond à l'atome ionisé (l'électron arraché) ; les niveaux de l'atome sont donc négatifs. Pour l'hydrogène : E₁ = -13,6 eV (fondamental), E₂ = -3,40 eV, E₃ = -1,51 eV, E₄ = -0,85 eV.",
                "Chaque élément chimique possède son propre diagramme de niveaux d'énergie : c'est une véritable signature de l'élément.",
              ],
              box: { label: "À retenir", text: "L'énergie d'un atome est quantifiée : elle ne prend que des valeurs discrètes (niveaux d'énergie). État fondamental : niveau le plus bas, stable. États excités : niveaux supérieurs, instables." },
            },
            {
              heading: "Absorption, émission et spectres de raies",
              paragraphs: [
                "Émission : un atome dans un état excité d'énergie Ep revient à un niveau inférieur En en émettant un photon dont l'énergie est exactement la différence : h × ν = Ep - En = ΔE. La longueur d'onde émise vaut λ = h × c ÷ ΔE. Exemple pour l'hydrogène, transition du niveau 3 au niveau 2 : ΔE = -1,51 - (-3,40) = 1,89 eV = 3,02 × 10⁻¹⁹ J, d'où λ = 6,63 × 10⁻³⁴ × 3,00 × 10⁸ ÷ (3,02 × 10⁻¹⁹) ≈ 6,58 × 10⁻⁷ m, soit environ 658 nm : une raie rouge (la valeur mesurée, 656 nm, diffère légèrement à cause des arrondis).",
                "Absorption : un atome dans l'état En ne peut absorber un photon que si l'énergie du photon est exactement égale à la différence entre En et un niveau supérieur Ep. L'atome passe alors dans l'état excité Ep. Un photon dont l'énergie ne correspond à aucune transition n'est pas absorbé (sauf s'il est assez énergétique pour ioniser l'atome).",
                "Une lampe spectrale (au sodium, au mercure, au néon) émet un spectre de raies d'émission : quelques raies colorées sur fond noir. Une lumière blanche qui traverse un gaz froid donne un spectre de raies d'absorption : des raies noires sur le fond coloré continu, aux mêmes longueurs d'onde que les raies d'émission du gaz. Le spectre du Soleil présente de telles raies noires, qui révèlent les éléments chimiques présents dans son atmosphère.",
              ],
              box: { label: "Propriété", text: "Transition entre deux niveaux : |ΔE| = h × ν = h × c ÷ λ. Émission si l'atome descend de niveau, absorption s'il monte. Un élément absorbe les radiations qu'il est capable d'émettre." },
            },
          ],
          keyPoints: [
            "Modèle ondulatoire : λ = c ÷ ν ; modèle particulaire : la lumière est un flux de photons.",
            "Énergie d'un photon : E = h × ν = h × c ÷ λ, avec h = 6,63 × 10⁻³⁴ J·s ; 1 eV = 1,60 × 10⁻¹⁹ J.",
            "L'énergie d'un atome est quantifiée : état fondamental et états excités.",
            "Émission ou absorption d'un photon : h × ν = |ΔE|, différence entre deux niveaux.",
            "Spectre d'émission : raies colorées sur fond noir ; d'absorption : raies noires sur fond coloré, aux mêmes λ.",
          ],
          example: {
            statement: "Diagramme simplifié de l'atome d'hydrogène : E₁ = -13,6 eV ; E₂ = -3,40 eV ; E₃ = -1,51 eV. Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J. L'atome passe du niveau E₃ au niveau E₂. 1. S'agit-il d'une émission ou d'une absorption ? 2. Calculer l'énergie du photon, en eV puis en J. 3. Calculer la longueur d'onde de la radiation et indiquer son domaine.",
            solution: [
              "1. L'atome passe d'un niveau supérieur à un niveau inférieur : il perd de l'énergie, il y a émission d'un photon.",
              "2. E = E₃ - E₂ = -1,51 - (-3,40) = 1,89 eV, soit 1,89 × 1,60 × 10⁻¹⁹ ≈ 3,02 × 10⁻¹⁹ J.",
              "3. λ = h × c ÷ E = 6,63 × 10⁻³⁴ × 3,00 × 10⁸ ÷ (3,02 × 10⁻¹⁹) = 1,989 × 10⁻²⁵ ÷ 3,02 × 10⁻¹⁹ ≈ 6,58 × 10⁻⁷ m = 658 nm.",
              "Cette longueur d'onde est comprise entre 400 et 800 nm : la radiation est visible, de couleur rouge.",
              "Réponse : émission d'un photon de 1,89 eV (3,02 × 10⁻¹⁹ J), de longueur d'onde environ 658 nm (rouge).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une LED bleue émet une lumière de longueur d'onde λ = 450 nm. Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J. 1. Calculer la fréquence de cette radiation. 2. Calculer l'énergie d'un photon, en joules puis en électronvolts. 3. Un photon émis par une LED rouge est-il plus ou moins énergétique ? Justifier.",
              hint: "Convertissez λ en mètres : 450 nm = 450 × 10⁻⁹ m. Utilisez ν = c ÷ λ puis E = h × ν.",
              solution: [
                "1. ν = c ÷ λ = 3,00 × 10⁸ ÷ (450 × 10⁻⁹) ≈ 6,67 × 10¹⁴ Hz.",
                "2. E = h × ν = 6,63 × 10⁻³⁴ × 6,67 × 10¹⁴ ≈ 4,42 × 10⁻¹⁹ J, soit 4,42 × 10⁻¹⁹ ÷ 1,60 × 10⁻¹⁹ ≈ 2,76 eV.",
                "3. La lumière rouge a une longueur d'onde plus grande ; comme E = h × c ÷ λ, ses photons sont moins énergétiques.",
                "Réponse : ν ≈ 6,67 × 10¹⁴ Hz ; E ≈ 4,42 × 10⁻¹⁹ J ≈ 2,76 eV ; le photon rouge est moins énergétique.",
              ],
            },
            {
              level: 2,
              statement: "Niveaux d'énergie de l'atome d'hydrogène : E₁ = -13,6 eV ; E₂ = -3,40 eV ; E₃ = -1,51 eV ; E₄ = -0,85 eV. Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J. 1. Calculer la longueur d'onde du photon émis lors de la transition du niveau 4 au niveau 2 ; est-il visible ? 2. Un atome d'hydrogène dans son état fondamental reçoit un photon de 10,2 eV. Est-il absorbé ? Si oui, vers quel niveau ? 3. Même question pour un photon de 11,0 eV. 4. Calculer la longueur d'onde du photon de 10,2 eV et préciser son domaine.",
              hint: "Un photon n'est absorbé que si son énergie est égale à la différence entre le niveau de départ et l'un des niveaux supérieurs.",
              solution: [
                "1. ΔE = E₄ - E₂ = -0,85 - (-3,40) = 2,55 eV = 2,55 × 1,60 × 10⁻¹⁹ ≈ 4,08 × 10⁻¹⁹ J. λ = h × c ÷ ΔE = 1,989 × 10⁻²⁵ ÷ 4,08 × 10⁻¹⁹ ≈ 4,88 × 10⁻⁷ m = 488 nm : radiation visible, bleu-vert.",
                "2. E₂ - E₁ = -3,40 - (-13,6) = 10,2 eV : le photon est absorbé, l'atome passe au niveau 2.",
                "3. Les écarts possibles depuis E₁ valent 10,2 eV (vers E₂), 12,09 eV (vers E₃), 12,75 eV (vers E₄) et 13,6 eV (ionisation). 11,0 eV ne correspond à aucun : le photon n'est pas absorbé.",
                "4. E = 10,2 × 1,60 × 10⁻¹⁹ = 1,632 × 10⁻¹⁸ J ; λ = 1,989 × 10⁻²⁵ ÷ 1,632 × 10⁻¹⁸ ≈ 1,22 × 10⁻⁷ m = 122 nm : domaine ultraviolet.",
                "Réponse : 488 nm, visible ; absorbé (vers E₂) ; non absorbé ; 122 nm, ultraviolet.",
              ],
            },
            {
              level: 3,
              statement: "Les lampes à vapeur de sodium de l'éclairage public émettent une lumière jaune-orangé. Diagramme simplifié de l'atome de sodium (valeurs arrondies) : état fondamental E₁ = -5,14 eV ; premier état excité E₂ = -3,03 eV. Données : h = 6,63 × 10⁻³⁴ J·s ; c = 3,00 × 10⁸ m·s⁻¹ ; 1 eV = 1,60 × 10⁻¹⁹ J. 1. Calculer la longueur d'onde du photon émis lors de la transition de E₂ vers E₁ et justifier la couleur de ces lampes. 2. Décrire le spectre de la lumière émise par une lampe à vapeur de sodium. 3. On éclaire en lumière blanche une flamme contenant de la vapeur de sodium. Décrire le spectre observé après la flamme et l'interpréter. 4. Une lampe émet une puissance lumineuse de 50 W, que l'on suppose entièrement due à cette radiation (données fictives). Calculer le nombre de photons émis par seconde. 5. Le spectre de la lumière solaire présente une raie noire à cette même longueur d'onde. Que peut-on en conclure ?",
              hint: "La puissance est l'énergie émise par seconde : divisez-la par l'énergie d'un photon. Un élément absorbe les radiations qu'il est capable d'émettre.",
              solution: [
                "1. ΔE = E₂ - E₁ = -3,03 - (-5,14) = 2,11 eV = 2,11 × 1,60 × 10⁻¹⁹ ≈ 3,38 × 10⁻¹⁹ J. λ = h × c ÷ ΔE = 1,989 × 10⁻²⁵ ÷ 3,38 × 10⁻¹⁹ ≈ 5,89 × 10⁻⁷ m = 589 nm, dans le jaune-orangé : c'est la couleur des lampes.",
                "2. C'est un spectre de raies d'émission : une raie jaune-orangé très intense, à 589 nm, sur fond noir (accompagnée de quelques raies plus faibles).",
                "3. On observe le spectre continu de la lumière blanche, barré d'une raie noire à 589 nm : les atomes de sodium dans leur état fondamental absorbent les photons de 2,11 eV et passent au niveau E₂. C'est un spectre de raies d'absorption.",
                "4. N = P ÷ E = 50 ÷ (3,38 × 10⁻¹⁹) ≈ 1,5 × 10²⁰ photons par seconde.",
                "5. Cette raie d'absorption montre que l'atmosphère du Soleil contient du sodium, qui absorbe la radiation de 589 nm venant des couches plus profondes.",
                "Réponse : λ ≈ 589 nm (jaune-orangé) ; raie d'émission sur fond noir ; raie noire à 589 nm sur fond continu ; environ 1,5 × 10²⁰ photons par seconde ; présence de sodium dans l'atmosphère solaire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces rayonnements de l'énergie de photon la plus faible à la plus élevée.",
            items: [
              "Ondes radio",
              "Micro-ondes",
              "Infrarouge",
              "Lumière rouge",
              "Lumière bleue",
              "Ultraviolet",
              "Rayons X",
            ],
          },
          quiz: [
            {
              q: "L'énergie d'un photon de longueur d'onde λ dans le vide vaut :",
              options: ["E = h × λ", "E = h × c ÷ λ", "E = h ÷ ν", "E = c ÷ (h × λ)"],
              answer: 1,
              why: "E = h × ν et ν = c ÷ λ, donc E = h × c ÷ λ.",
            },
            {
              q: "Un électronvolt vaut :",
              options: ["6,63 × 10⁻³⁴ J", "3,00 × 10⁸ J", "9,11 × 10⁻³¹ J", "1,60 × 10⁻¹⁹ J"],
              answer: 3,
              why: "1 eV est l'énergie acquise par un électron accéléré par une tension de 1 V : 1 eV = 1,60 × 10⁻¹⁹ J.",
            },
            {
              q: "Quand un atome passe d'un état excité à un niveau d'énergie inférieur :",
              options: ["il absorbe un photon", "il émet un photon", "il perd un proton", "il s'ionise"],
              answer: 1,
              why: "L'atome perd l'énergie ΔE en émettant un photon d'énergie h × ν = ΔE.",
            },
            {
              q: "Parmi ces radiations, laquelle correspond aux photons les plus énergétiques ?",
              options: ["infrarouge (λ = 1 000 nm)", "rouge (λ = 700 nm)", "violet (λ = 400 nm)", "vert (λ = 550 nm)"],
              answer: 2,
              why: "E = h × c ÷ λ : plus λ est petite, plus le photon est énergétique.",
            },
            {
              q: "Un spectre de raies d'absorption se présente sous la forme :",
              options: ["de raies noires sur un fond coloré continu", "de raies colorées sur un fond noir", "d'un fond coloré continu, sans aucune raie", "d'une seule raie blanche sur fond noir, toujours au même endroit"],
              answer: 0,
              why: "Le gaz absorbe certaines radiations de la lumière blanche qui le traverse : elles manquent, d'où des raies noires.",
            },
          ],
          trap: "Oublier de convertir la longueur d'onde en mètres (nm → × 10⁻⁹) ou l'énergie en joules (eV → × 1,60 × 10⁻¹⁹) avant d'appliquer E = h × c ÷ λ, ou croire qu'un atome peut absorber un photon de n'importe quelle énergie.",
          method: "Sur un diagramme de niveaux, dessinez une flèche pour chaque transition : vers le bas pour une émission, vers le haut pour une absorption. Calculez ΔE en eV, convertissez en joules, puis contrôlez que la longueur d'onde trouvée est plausible (entre 400 et 800 nm pour une raie visible).",
        },
      ],
    },
  ],
}
