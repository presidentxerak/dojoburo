import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-2nde',
  chapters: [
    /* ==================================================================== */
    /* LES TRANSFORMATIONS PHYSIQUES                                         */
    /* ==================================================================== */
    {
      id: 'transformations-physiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'changements-etat',
          title: "Les changements d'état et leur écriture symbolique",
          minutes: 25,
          objectives: [
            "Citer des exemples de changements d'état physique de la vie courante et dans l'environnement.",
            "Nommer les six changements d'état et établir l'écriture symbolique d'un changement d'état.",
            "Interpréter un changement d'état à l'échelle microscopique.",
            "Distinguer fusion et dissolution.",
          ],
          course: [
            {
              heading: "Trois états, six changements d'état",
              paragraphs: [
                "Une espèce chimique peut se présenter sous trois états physiques : solide, liquide ou gazeux. Une transformation physique modifie l'état ou la répartition d'une espèce sans la changer en une autre espèce : l'eau reste de l'eau, qu'elle soit glace, liquide ou vapeur. Les changements d'état et la dissolution sont les deux grands exemples de transformations physiques.",
                "Le passage du solide au liquide est la fusion, et le passage inverse la solidification. Le passage du liquide au gaz est la vaporisation, qui peut se faire lentement à la surface du liquide (évaporation) ou dans tout le liquide avec formation de bulles (ébullition) ; le passage inverse est la liquéfaction. Le passage direct du solide au gaz est la sublimation, et le passage direct du gaz au solide est la condensation (on précise parfois condensation solide).",
                "Dans le langage courant, on dit que la buée « se condense » sur une vitre froide. En physique-chimie, la vapeur d'eau de l'air qui devient de l'eau liquide subit une liquéfaction. Le mot condensation est réservé au passage gaz → solide, comme lors de la formation du givre sur un pare-brise par une nuit froide.",
              ],
              box: { label: "Repère", text: "Solide → liquide : fusion. Liquide → solide : solidification. Liquide → gaz : vaporisation. Gaz → liquide : liquéfaction. Solide → gaz : sublimation. Gaz → solide : condensation." },
            },
            {
              heading: "Des changements d'état partout autour de nous",
              paragraphs: [
                "Le cycle de l'eau enchaîne les changements d'état : l'eau des océans s'évapore, la vapeur d'eau se liquéfie en fines gouttelettes qui forment les nuages, ces gouttelettes peuvent se solidifier en grêle ou en flocons, la neige et les glaciers fondent au printemps. En haute montagne, par air très sec, la neige peut même se sublimer sans passer par l'état liquide.",
                "Dans la vie courante : le glaçon fond dans un verre, le linge sèche par évaporation, l'eau des pâtes bout, le métal fondu se solidifie dans un moule en fonderie, la carboglace (dioxyde de carbone solide) utilisée pour la fumée des spectacles se sublime à la pression atmosphérique. Pour un corps pur, sous une pression donnée, le changement d'état se fait à température constante : c'est le palier observé lors de la fusion de la glace à 0 °C ou de l'ébullition de l'eau à 100 °C sous la pression atmosphérique normale.",
              ],
            },
            {
              heading: "L'écriture symbolique d'un changement d'état",
              paragraphs: [
                "On modélise un changement d'état par une écriture symbolique : la formule de l'espèce dans son état initial, une flèche, puis la même formule dans son état final. L'état physique est indiqué entre parenthèses : (s) pour solide, (l) pour liquide, (g) pour gaz. La fusion de la glace s'écrit H₂O(s) → H₂O(l) ; la sublimation de la carboglace s'écrit CO₂(s) → CO₂(g) ; la formation du givre s'écrit H₂O(g) → H₂O(s).",
                "La formule est identique des deux côtés de la flèche : c'est la signature d'une transformation physique. Seul l'état change. Si les formules étaient différentes de part et d'autre, ce serait une transformation chimique, étudiée dans le chapitre suivant.",
              ],
              box: { label: "Règle", text: "Écriture d'un changement d'état : formule(état initial) → formule(état final), avec la même formule des deux côtés. Exemple : la vaporisation de l'éthanol s'écrit C₂H₆O(l) → C₂H₆O(g)." },
            },
            {
              heading: "Ce qui se passe à l'échelle microscopique",
              paragraphs: [
                "À l'échelle microscopique, un solide est formé d'entités (atomes, ions ou molécules) proches les unes des autres et liées entre elles, qui ne font que vibrer sur place ; dans un solide cristallin, elles sont rangées de façon régulière. Dans un liquide, les entités restent au contact mais glissent les unes sur les autres : l'état est compact et désordonné. Dans un gaz, les entités sont très éloignées les unes des autres, en mouvement rapide et désordonné : l'état est dispersé.",
                "Lors d'un changement d'état, les entités ne sont ni détruites ni transformées : leur nombre se conserve, donc la masse se conserve. Ce sont leur disposition, leur agitation et les interactions entre elles qui changent. Le volume, lui, varie : 1 g d'eau liquide occupe environ 1 mL, alors qu'une fois vaporisé il occupe plus d'un litre. L'eau est une exception notable : la glace occupe un volume plus grand que l'eau liquide de même masse, ce qui explique qu'un glaçon flotte et qu'une bouteille pleine éclate au congélateur.",
              ],
            },
            {
              heading: "Ne pas confondre fusion et dissolution",
              paragraphs: [
                "La fusion concerne une seule espèce chimique, qui passe de l'état solide à l'état liquide sous l'effet d'un apport d'énergie, à une température caractéristique (0 °C pour la glace, 232 °C pour l'étain). La dissolution fait intervenir au moins deux espèces : un soluté qui se disperse dans un solvant pour former un mélange homogène appelé solution. Le sucre ne « fond » pas dans le café : il se dissout, même à température ambiante.",
                "La dissolution est elle aussi une transformation physique : les entités du soluté se dispersent entre les molécules de solvant sans changer de nature. On l'écrit en notant (aq), pour aqueux, l'espèce dispersée dans l'eau : C₁₂H₂₂O₁₁(s) → C₁₂H₂₂O₁₁(aq) pour le saccharose ; NaCl(s) → Na⁺(aq) + Cl⁻(aq) pour le sel, dont les ions existaient déjà dans le cristal et se séparent simplement.",
              ],
              box: { label: "À retenir", text: "Fusion : une espèce, solide → liquide, à une température fixe pour un corps pur. Dissolution : un soluté se disperse dans un solvant et forme une solution. Les deux sont des transformations physiques." },
            },
          ],
          keyPoints: [
            "Six changements d'état : fusion, solidification, vaporisation, liquéfaction, sublimation, condensation (gaz → solide).",
            "La buée sur une vitre est une liquéfaction, le givre une condensation.",
            "Écriture symbolique : même formule de part et d'autre de la flèche, états notés (s), (l), (g). Exemple : H₂O(l) → H₂O(g).",
            "Lors d'un changement d'état, les entités se conservent : la masse est conservée, le volume peut varier.",
            "Pour un corps pur sous pression donnée, un changement d'état se fait à température constante (palier).",
            "Fusion : une seule espèce. Dissolution : un soluté dans un solvant, notée (aq) dans l'eau.",
          ],
          example: {
            statement: "Nommez le changement d'état et écrivez son écriture symbolique dans les deux situations suivantes : a) de la buée apparaît sur un verre sorti du réfrigérateur ; b) un morceau de carboglace (CO₂ solide) posé sur une table disparaît en dégageant une fumée froide, sans laisser de liquide.",
            solution: [
              "a) La buée est formée de fines gouttelettes d'eau liquide. Elles proviennent de la vapeur d'eau de l'air, refroidie au contact du verre froid.",
              "Le passage de l'état gazeux à l'état liquide est une liquéfaction : H₂O(g) → H₂O(l).",
              "b) Le dioxyde de carbone passe de l'état solide à l'état gazeux sans laisser de liquide : il n'y a pas d'état liquide intermédiaire.",
              "Le passage direct de l'état solide à l'état gazeux est une sublimation : CO₂(s) → CO₂(g).",
              "Vérification : dans les deux écritures, la formule est la même de chaque côté de la flèche, seul l'état change. Ce sont bien des transformations physiques.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, nommez le changement d'état et écrivez son écriture symbolique. a) Un glaçon (H₂O) fond dans un verre de jus. b) De l'éthanol (C₂H₆O) laissé dans une coupelle s'évapore. c) Du givre se forme sur un pare-brise par une nuit glaciale. d) De l'étain (Sn) liquide versé dans un moule devient solide.",
              hint: "Repérez l'état initial et l'état final, puis cherchez le nom du passage dans le tableau des six changements d'état. La formule ne change pas.",
              solution: [
                "a) Solide → liquide : fusion. H₂O(s) → H₂O(l).",
                "b) Liquide → gaz, lentement à la surface : vaporisation (sous forme d'évaporation). C₂H₆O(l) → C₂H₆O(g).",
                "c) La vapeur d'eau de l'air devient directement solide : condensation. H₂O(g) → H₂O(s).",
                "d) Liquide → solide : solidification. Sn(l) → Sn(s).",
              ],
            },
            {
              level: 2,
              statement: "Dites s'il s'agit d'une fusion, d'une dissolution ou d'une sublimation, puis écrivez l'écriture symbolique. a) Un morceau de sucre (saccharose, C₁₂H₂₂O₁₁) disparaît dans un thé chaud. b) Un morceau d'étain (Sn) chauffé à 232 °C devient liquide. c) Du sel (NaCl) versé dans l'eau des pâtes n'est plus visible. d) Des cristaux de diiode (I₂) chauffés doucement dégagent des vapeurs violettes sans devenir liquides.",
              hint: "Demandez-vous combien d'espèces interviennent : une seule (changement d'état) ou un soluté et un solvant (dissolution). Le symbole (aq) indique une espèce dispersée dans l'eau.",
              solution: [
                "a) Le sucre se disperse dans l'eau du thé : c'est une dissolution, pas une fusion. C₁₂H₂₂O₁₁(s) → C₁₂H₂₂O₁₁(aq).",
                "b) Une seule espèce passe de l'état solide à l'état liquide, à sa température de fusion : c'est une fusion. Sn(s) → Sn(l).",
                "c) Le sel se disperse dans l'eau en ions : c'est une dissolution. NaCl(s) → Na⁺(aq) + Cl⁻(aq).",
                "d) Le diiode passe directement de l'état solide à l'état gazeux : c'est une sublimation. I₂(s) → I₂(g).",
                "Bilan : a et c sont des dissolutions, b est une fusion, d est une sublimation ; ce sont toutes des transformations physiques.",
              ],
            },
            {
              level: 3,
              statement: "L'éthanol C₂H₆O a une température de fusion de -114 °C et une température d'ébullition de 78 °C sous la pression atmosphérique normale. 1) Indiquez l'état physique de l'éthanol à -120 °C, à 20 °C et à 90 °C. 2) On chauffe de l'éthanol liquide jusqu'à 78 °C : nommez le changement d'état observé et donnez son écriture symbolique. 3) Décrivez ce changement d'état à l'échelle microscopique. 4) On vaporise entièrement 10 g d'éthanol liquide dans un récipient fermé : quelle est la masse de vapeur obtenue ? Son volume est-il plus grand ou plus petit que celui du liquide ? Justifiez.",
              hint: "Placez les trois températures sur un axe gradué où figurent -114 °C et 78 °C. Pour la question 4, demandez-vous ce que deviennent les molécules lors d'un changement d'état.",
              solution: [
                "1) À -120 °C, la température est inférieure à la température de fusion (-114 °C) : l'éthanol est solide. À 20 °C, elle est comprise entre -114 °C et 78 °C : il est liquide. À 90 °C, elle est supérieure à 78 °C : il est gazeux.",
                "2) À 78 °C, le liquide bout : c'est une vaporisation (ébullition). C₂H₆O(l) → C₂H₆O(g). Pendant l'ébullition, la température reste égale à 78 °C.",
                "3) Dans le liquide, les molécules d'éthanol sont au contact et désordonnées. En recevant de l'énergie, elles s'éloignent les unes des autres et s'agitent davantage : dans le gaz, elles sont très éloignées et se déplacent dans tout l'espace disponible. Les molécules elles-mêmes ne sont pas modifiées.",
                "4) Les molécules se conservent, donc la masse se conserve : on obtient 10 g de vapeur d'éthanol.",
                "Le volume est beaucoup plus grand que celui du liquide, car dans un gaz les molécules sont très éloignées les unes des autres (état dispersé).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque changement d'état à son nom.",
            pairs: [
              { left: "Solide → liquide", right: "Fusion" },
              { left: "Liquide → solide", right: "Solidification" },
              { left: "Liquide → gaz", right: "Vaporisation" },
              { left: "Gaz → liquide", right: "Liquéfaction" },
              { left: "Solide → gaz", right: "Sublimation" },
              { left: "Gaz → solide", right: "Condensation" },
            ],
          },
          quiz: [
            {
              q: "Comment appelle-t-on le passage de l'état gazeux à l'état liquide ?",
              options: ["La condensation", "La liquéfaction", "La solidification", "La sublimation"],
              answer: 1,
              why: "Le passage gaz → liquide est une liquéfaction. Le mot condensation désigne le passage gaz → solide.",
            },
            {
              q: "Quelle écriture modélise la solidification de l'eau ?",
              options: ["H₂O(l) → H₂O(s)", "H₂O(s) → H₂O(l)", "H₂O(g) → H₂O(s)", "H₂O(s) → H₂O(g)"],
              answer: 0,
              why: "La solidification est le passage liquide → solide : on écrit l'état liquide (l) à gauche et l'état solide (s) à droite.",
            },
            {
              q: "Lors de la fusion d'un glaçon, à l'échelle microscopique :",
              options: ["les molécules d'eau se cassent en atomes d'hydrogène et d'oxygène", "les molécules d'eau deviennent plus grosses en recevant de l'énergie", "les molécules se conservent, seule leur disposition change", "le nombre de molécules diminue, d'où une perte de masse"],
              answer: 2,
              why: "Un changement d'état conserve les entités : elles ne sont ni cassées ni transformées, donc la masse est conservée.",
            },
            {
              q: "Le sucre mis dans un café chaud :",
              options: ["fond, car la température du café est élevée", "se sublime", "se vaporise", "se dissout dans l'eau du café"],
              answer: 3,
              why: "Le sucre (soluté) se disperse dans l'eau (solvant) : c'est une dissolution. La fusion ne concerne qu'une seule espèce qui passe de solide à liquide.",
            },
            {
              q: "Quelle situation est une sublimation ?",
              options: ["La carboglace qui disparaît à l'air libre sans laisser de liquide", "La buée qui apparaît sur le miroir de la salle de bain", "Le givre qui se dépose sur une voiture par une nuit froide", "La flaque d'eau qui sèche peu à peu au soleil en quelques heures d'été"],
              answer: 0,
              why: "La carboglace passe directement de l'état solide à l'état gazeux. La buée est une liquéfaction, le givre une condensation, la flaque une évaporation.",
            },
          ],
          trap: "Employer « condensation » pour la buée (c'est une liquéfaction, gaz → liquide) et dire que le sucre « fond » dans l'eau alors qu'il se dissout.",
          method: "Pour nommer un changement d'état, écrivez d'abord « état initial → état final » avec les mots solide, liquide, gaz, puis seulement cherchez le nom. Vérifiez ensuite que la formule est identique des deux côtés de la flèche.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'energie-changement-etat',
          title: "L'énergie massique de changement d'état",
          minutes: 30,
          objectives: [
            "Identifier le sens du transfert thermique lors d'un changement d'état et le relier aux termes exothermique ou endothermique.",
            "Exploiter la relation Q = m × L entre l'énergie transférée lors d'un changement d'état et l'énergie massique de changement d'état de l'espèce.",
            "Relier l'énergie échangée à la masse de l'espèce qui change d'état.",
            "Expliquer des situations de la vie courante à l'aide des transferts d'énergie lors des changements d'état.",
          ],
          course: [
            {
              heading: "Changement d'état et transfert thermique",
              paragraphs: [
                "Un changement d'état s'accompagne toujours d'un échange d'énergie entre l'espèce qui change d'état (le système) et le milieu extérieur. Cet échange se fait par transfert thermique, que l'on appelle couramment chaleur : l'énergie passe spontanément du corps le plus chaud vers le corps le plus froid.",
                "Pour faire fondre de la glace, il faut lui apporter de l'énergie : la fusion est endothermique (du grec endon, dedans, et thermos, chaud), le système reçoit de l'énergie. À l'inverse, lorsque de l'eau se solidifie, elle cède de l'énergie au milieu extérieur : la solidification est exothermique (exô, dehors). Un congélateur doit justement retirer de l'énergie à l'eau pour la transformer en glace.",
                "À l'échelle microscopique, il faut fournir de l'énergie pour éloigner les entités les unes des autres et vaincre les interactions qui les retiennent : c'est pourquoi les passages vers un état plus dispersé (solide → liquide → gaz) sont endothermiques. Les passages inverses libèrent cette même énergie.",
              ],
              box: { label: "Règle", text: "Endothermiques (le système reçoit de l'énergie) : fusion, vaporisation, sublimation. Exothermiques (le système cède de l'énergie) : solidification, liquéfaction, condensation." },
            },
            {
              heading: "L'énergie massique de changement d'état",
              paragraphs: [
                "L'énergie massique de changement d'état, notée L, est l'énergie transférée lorsque 1 kg d'une espèce change d'état, à la température de ce changement d'état. Elle s'exprime en joules par kilogramme (J·kg⁻¹ ou J/kg) et dépend de l'espèce et du changement d'état considéré. Pour l'eau, l'énergie massique de fusion vaut L(fus) = 3,34 × 10⁵ J·kg⁻¹ à 0 °C et l'énergie massique de vaporisation vaut L(vap) = 2,26 × 10⁶ J·kg⁻¹ à 100 °C.",
                "L'énergie Q transférée lorsqu'une masse m de l'espèce change d'état est proportionnelle à cette masse : Q = m × L. Doubler la masse de glace à faire fondre, c'est doubler l'énergie nécessaire. Attention aux unités : Q en joules (J), m en kilogrammes (kg), L en J·kg⁻¹. Une masse donnée en grammes doit d'abord être convertie (250 g = 0,250 kg).",
              ],
              box: { label: "Formule", text: "Q = m × L, avec Q en J, m en kg et L en J·kg⁻¹. Exemple : faire fondre 1,0 kg de glace à 0 °C demande Q = 1,0 × 3,34 × 10⁵ = 3,34 × 10⁵ J." },
            },
            {
              heading: "Le signe de Q et de L",
              paragraphs: [
                "On compte positivement l'énergie reçue par le système et négativement l'énergie qu'il cède. Pour un changement d'état endothermique, Q > 0 et L > 0. Pour le changement d'état inverse, exothermique, l'énergie massique est opposée : L(solidification) = -L(fusion) et L(liquéfaction) = -L(vaporisation). La solidification de 1,0 kg d'eau à 0 °C correspond donc à Q = 1,0 × (-3,34 × 10⁵) = -3,34 × 10⁵ J : l'eau cède 3,34 × 10⁵ J au milieu extérieur.",
                "Comparer les valeurs est instructif : pour l'eau, L(vap) est environ sept fois plus grande que L(fus) (2,26 × 10⁶ ÷ 3,34 × 10⁵ ≈ 6,8). Séparer complètement les molécules pour former un gaz demande beaucoup plus d'énergie que de simplement les désordonner pour former un liquide.",
              ],
            },
            {
              heading: "Applications et mesure",
              paragraphs: [
                "La transpiration refroidit le corps : la sueur qui s'évapore prélève l'énergie nécessaire à sa vaporisation sur la peau. Dans un réfrigérateur, un fluide se vaporise dans les parois intérieures en prélevant de l'énergie aux aliments, puis se liquéfie dans la grille à l'arrière de l'appareil en cédant cette énergie à la pièce : c'est pourquoi cette grille est chaude. Une brûlure par de la vapeur d'eau à 100 °C est plus grave qu'une brûlure par de l'eau liquide à 100 °C, car la vapeur, en se liquéfiant sur la peau, lui cède en plus son énergie de liquéfaction.",
                "Certains arboriculteurs arrosent leurs vergers lorsque le gel menace les bourgeons : en se solidifiant sur les plantes, l'eau libère de l'énergie qui maintient les bourgeons autour de 0 °C. En travaux pratiques, on mesure une énergie de changement d'état en apportant une énergie connue (par exemple avec une résistance électrique, E = P × t) à une masse connue d'espèce, puis en calculant L = Q ÷ m.",
              ],
              box: { label: "À retenir", text: "L'énergie échangée est proportionnelle à la masse qui change d'état. Plus L est grand, plus il faut d'énergie pour faire changer d'état 1 kg de l'espèce." },
            },
          ],
          keyPoints: [
            "Fusion, vaporisation, sublimation : endothermiques (Q > 0). Solidification, liquéfaction, condensation : exothermiques (Q < 0).",
            "Q = m × L, avec Q en J, m en kg, L en J·kg⁻¹.",
            "Eau : L(fus) = 3,34 × 10⁵ J·kg⁻¹ à 0 °C ; L(vap) = 2,26 × 10⁶ J·kg⁻¹ à 100 °C.",
            "L(solidification) = -L(fusion) et L(liquéfaction) = -L(vaporisation).",
            "L'énergie échangée est proportionnelle à la masse : double masse, double énergie.",
            "Applications : transpiration, réfrigérateur, brûlure par la vapeur, protection des vergers contre le gel.",
          ],
          example: {
            statement: "Calculez l'énergie nécessaire pour faire fondre 250 g de glace prise à 0 °C. Donnée : L(fus) de l'eau = 3,34 × 10⁵ J·kg⁻¹. Ce changement d'état est-il endothermique ou exothermique ?",
            solution: [
              "On convertit la masse en kilogrammes : m = 250 g = 0,250 kg.",
              "On applique la relation Q = m × L(fus).",
              "Q = 0,250 × 3,34 × 10⁵ = 8,35 × 10⁴ J, soit 83,5 kJ.",
              "Q est positif : la glace reçoit de l'énergie. La fusion est endothermique.",
              "Réponse : il faut apporter 8,35 × 10⁴ J à la glace ; la fusion est endothermique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Quelle énergie faut-il fournir pour vaporiser entièrement 1,5 kg d'eau liquide à 100 °C ? Donnée : L(vap) de l'eau = 2,26 × 10⁶ J·kg⁻¹. Précisez si la vaporisation est endothermique ou exothermique.",
              hint: "La masse est déjà en kilogrammes : appliquez directement Q = m × L.",
              solution: [
                "Relation : Q = m × L(vap).",
                "Q = 1,5 × 2,26 × 10⁶ = 3,39 × 10⁶ J.",
                "Q > 0 : l'eau reçoit de l'énergie, la vaporisation est endothermique.",
                "Réponse : il faut fournir environ 3,4 × 10⁶ J (3,39 MJ).",
              ],
            },
            {
              level: 2,
              statement: "Donnée : L(fus) de l'eau = 3,34 × 10⁵ J·kg⁻¹. 1) Quelle énergie un glaçon de 20 g pris à 0 °C reçoit-il pour fondre entièrement ? 2) On place 500 g d'eau liquide à 0 °C au congélateur : quelle énergie Q est échangée par l'eau lors de sa solidification complète ? Donnez son signe et interprétez. 3) Quelle masse de glace à 0 °C peut-on faire fondre avec une énergie de 10 kJ ?",
              hint: "Convertissez les grammes en kilogrammes et les kilojoules en joules. Pour la solidification, utilisez L(solidification) = -L(fusion). Pour la question 3, isolez m dans Q = m × L.",
              solution: [
                "1) m = 20 g = 0,020 kg. Q = 0,020 × 3,34 × 10⁵ = 6,68 × 10³ J, soit environ 6,7 kJ reçus par le glaçon.",
                "2) m = 0,500 kg et L(solidification) = -3,34 × 10⁵ J·kg⁻¹. Q = 0,500 × (-3,34 × 10⁵) = -1,67 × 10⁵ J.",
                "Q < 0 : l'eau cède 1,67 × 10⁵ J au milieu extérieur ; la solidification est exothermique, et c'est le congélateur qui doit évacuer cette énergie.",
                "3) Q = 10 kJ = 1,0 × 10⁴ J. m = Q ÷ L(fus) = 1,0 × 10⁴ ÷ 3,34 × 10⁵ ≈ 3,0 × 10⁻² kg.",
                "Réponse : on peut faire fondre environ 30 g de glace.",
              ],
            },
            {
              level: 3,
              statement: "Partie A (mesure en travaux pratiques, données fictives). Une résistance électrique de puissance P = 50 W, plongée dans de la glace à 0 °C, fonctionne pendant t = 200 s. On recueille 30,0 g d'eau liquide issue de la fusion. On suppose que toute l'énergie fournie par la résistance sert à la fusion. 1) Calculez l'énergie fournie (E = P × t). 2) Déduisez-en une valeur expérimentale de L(fus). 3) Comparez à la valeur de référence 3,34 × 10⁵ J·kg⁻¹ en calculant l'écart relatif. Partie B. Lors d'une course, 0,80 kg de sueur s'évapore de la peau d'un coureur (données fictives). On prendra L(vap) = 2,4 × 10⁶ J·kg⁻¹ à la température de la peau. 4) Calculez l'énergie évacuée par la transpiration et expliquez pourquoi elle refroidit le corps.",
              hint: "E = P × t donne des joules si P est en watts et t en secondes. L = Q ÷ m avec m en kg. Écart relatif = |valeur mesurée - valeur de référence| ÷ valeur de référence.",
              solution: [
                "1) E = P × t = 50 × 200 = 1,0 × 10⁴ J.",
                "2) Toute cette énergie sert à la fusion : Q = 1,0 × 10⁴ J pour m = 30,0 g = 0,0300 kg. L(fus) = Q ÷ m = 1,0 × 10⁴ ÷ 0,0300 ≈ 3,33 × 10⁵ J·kg⁻¹.",
                "3) Écart relatif = |3,33 × 10⁵ - 3,34 × 10⁵| ÷ 3,34 × 10⁵ ≈ 0,003, soit environ 0,3 % : la mesure est en très bon accord avec la valeur de référence (en réalité, une partie de l'énergie est perdue vers l'extérieur, ce qui augmente souvent l'écart).",
                "4) Q = m × L(vap) = 0,80 × 2,4 × 10⁶ = 1,92 × 10⁶ J, soit environ 1,9 × 10⁶ J.",
                "La vaporisation de la sueur est endothermique : l'énergie nécessaire est prélevée sur la peau, dont la température baisse. La transpiration permet ainsi d'évacuer environ 1,9 MJ pendant la course.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : l'énergie des changements d'état.",
            statements: [
              { text: "La fusion de la glace est une transformation endothermique.", true: true, why: "La glace doit recevoir de l'énergie pour fondre." },
              { text: "Quand l'eau se solidifie, elle refroidit le milieu qui l'entoure.", true: false, why: "La solidification est exothermique : l'eau cède de l'énergie au milieu extérieur." },
              { text: "Une énergie massique de changement d'état s'exprime en J·kg⁻¹.", true: true, why: "C'est une énergie (J) rapportée à une masse (kg)." },
              { text: "Faire fondre 2 kg de glace demande deux fois plus d'énergie que 1 kg.", true: true, why: "Q = m × L : l'énergie est proportionnelle à la masse." },
              { text: "Pendant la fusion d'un corps pur, sa température augmente puisqu'il reçoit de l'énergie.", true: false, why: "Pour un corps pur sous pression donnée, la température reste constante pendant le changement d'état : l'énergie reçue sert au changement d'état." },
              { text: "Une brûlure par la vapeur à 100 °C est moins grave qu'une brûlure par l'eau à 100 °C.", true: false, why: "En se liquéfiant sur la peau, la vapeur cède en plus son énergie de liquéfaction : la brûlure est plus grave." },
              { text: "Pour l'eau, L(liquéfaction) = -L(vaporisation).", true: true, why: "Le changement d'état inverse met en jeu la même énergie, cédée au lieu d'être reçue." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces changements d'état est exothermique ?",
              options: ["La fusion", "La vaporisation", "La liquéfaction", "La sublimation"],
              answer: 2,
              why: "La liquéfaction (gaz → liquide) libère de l'énergie. Les trois autres demandent un apport d'énergie.",
            },
            {
              q: "Dans la relation Q = m × L, la masse m doit être exprimée en :",
              options: ["grammes", "kilogrammes", "litres", "moles (quantité de matière)"],
              answer: 1,
              why: "L est exprimée en J·kg⁻¹ : pour obtenir Q en joules, la masse doit être en kilogrammes.",
            },
            {
              q: "Avec L(fus) = 3,34 × 10⁵ J·kg⁻¹, quelle énergie faut-il pour faire fondre 0,10 kg de glace à 0 °C ?",
              options: ["3,34 × 10⁶ J", "3,34 × 10⁵ J", "3,34 × 10³ J", "3,34 × 10⁴ J"],
              answer: 3,
              why: "Q = 0,10 × 3,34 × 10⁵ = 3,34 × 10⁴ J.",
            },
            {
              q: "Pourquoi la transpiration refroidit-elle le corps ?",
              options: ["La vaporisation de la sueur prélève de l'énergie à la peau", "La sueur est toujours plus froide que l'air qui entoure le corps", "La sueur se solidifie sur la peau en absorbant de l'énergie", "La sueur bloque les rayons du Soleil et empêche la peau de chauffer"],
              answer: 0,
              why: "La vaporisation est endothermique : l'énergie qu'elle nécessite est prise à la peau, qui se refroidit.",
            },
            {
              q: "Pour l'eau, L(vap) = 2,26 × 10⁶ J·kg⁻¹ et L(fus) = 3,34 × 10⁵ J·kg⁻¹. Que peut-on en conclure ?",
              options: ["Fondre 1 kg de glace demande davantage d'énergie que vaporiser complètement 1 kg d'eau liquide", "Vaporiser 1 kg d'eau demande environ sept fois plus d'énergie que fondre 1 kg de glace", "Les deux changements d'état demandent la même énergie pour 1 kg", "La vaporisation de l'eau libère de l'énergie, contrairement à la fusion"],
              answer: 1,
              why: "2,26 × 10⁶ ÷ 3,34 × 10⁵ ≈ 6,8 : séparer complètement les molécules pour former un gaz demande bien plus d'énergie.",
            },
          ],
          trap: "Oublier de convertir la masse en kilogrammes (écrire Q = 250 × 3,34 × 10⁵ pour 250 g) ou oublier le signe négatif de Q pour une solidification ou une liquéfaction.",
          method: "Avant tout calcul, écrivez la relation littérale Q = m × L, convertissez chaque grandeur dans son unité (J, kg, J·kg⁻¹), puis vérifiez le signe : Q positif si le système reçoit de l'énergie, négatif s'il en cède.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES TRANSFORMATIONS CHIMIQUES                                         */
    /* ==================================================================== */
    {
      id: 'transformations-chimiques',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reaction-equation',
          title: "Modéliser une transformation par une réaction : l'équation chimique",
          minutes: 30,
          objectives: [
            "Décrire un système chimique à l'état initial et à l'état final, et identifier les réactifs et les produits.",
            "Modéliser, à partir de données expérimentales, une transformation par une réaction, établir l'équation de réaction et l'ajuster.",
            "Identifier une espèce spectatrice.",
            "Distinguer une transformation chimique d'une transformation physique.",
          ],
          course: [
            {
              heading: "Système chimique, état initial et état final",
              paragraphs: [
                "Un système chimique est l'ensemble des espèces chimiques que l'on étudie, par exemple le contenu d'un bécher. On le décrit en donnant la nature, l'état physique et la quantité de matière de chaque espèce, ainsi que la température et la pression. L'état initial est la description du système avant la transformation ; l'état final est sa description lorsque la transformation est terminée, c'est-à-dire lorsque plus rien n'évolue.",
                "Lors d'une transformation chimique, des espèces sont consommées et d'autres sont formées. Les réactifs sont les espèces dont la quantité diminue ; les produits sont les espèces qui apparaissent ou dont la quantité augmente. Une transformation chimique se distingue d'une transformation physique par le fait que de nouvelles espèces se forment : quand on fait brûler du méthane, on obtient du dioxyde de carbone et de l'eau, qui ne sont pas du méthane.",
                "Certaines espèces sont présentes dans le système mais ne participent pas à la transformation : leur quantité est la même à l'état initial et à l'état final. On les appelle espèces spectatrices. C'est souvent le cas de l'eau qui sert de solvant et de certains ions des solutions, comme les ions sodium Na⁺, chlorure Cl⁻, nitrate NO₃⁻ ou sulfate SO₄²⁻.",
              ],
              box: { label: "Définition", text: "Réactif : espèce consommée par la transformation. Produit : espèce formée. Espèce spectatrice : espèce présente dont la quantité ne varie pas ; elle n'apparaît pas dans l'équation de la réaction." },
            },
            {
              heading: "La réaction chimique et son équation",
              paragraphs: [
                "Pour décrire une transformation, le chimiste utilise un modèle : la réaction chimique, représentée par une équation de réaction. On écrit les formules des réactifs à gauche, une flèche qui se lit « donne » ou « forment », puis les formules des produits à droite. Chaque formule est précédée d'un nombre, le coefficient stœchiométrique, qui indique dans quelles proportions les espèces réagissent et se forment ; le coefficient 1 ne s'écrit pas.",
                "La combustion du méthane dans le dioxygène s'écrit CH₄ + 2 O₂ → CO₂ + 2 H₂O. Elle se lit : une molécule de méthane réagit avec deux molécules de dioxygène pour former une molécule de dioxyde de carbone et deux molécules d'eau. Les mêmes proportions valent pour les quantités de matière : 1 mol de méthane réagit avec 2 mol de dioxygène.",
                "Lors d'une transformation chimique, les atomes ne sont ni créés ni détruits : ils se réorganisent pour former de nouvelles entités. Une équation correcte respecte donc la conservation des éléments (chaque élément est présent en même nombre d'atomes à gauche et à droite) et la conservation de la charge électrique (la charge totale est la même des deux côtés).",
              ],
              box: { label: "Règle", text: "Une équation de réaction est ajustée lorsque chaque élément et la charge électrique totale sont conservés. Vérification pour CH₄ + 2 O₂ → CO₂ + 2 H₂O : C : 1 = 1 ; H : 4 = 4 ; O : 4 = 2 + 2." },
            },
            {
              heading: "Ajuster une équation, pas à pas",
              paragraphs: [
                "Pour ajuster une équation, on ne modifie jamais les formules (les indices écrits en bas à droite des symboles), car ce serait changer d'espèce : H₂O et H₂O₂ ne sont pas la même espèce. On joue uniquement sur les coefficients placés devant les formules, en cherchant les plus petits nombres entiers possibles.",
                "Méthode conseillée : commencez par un élément présent dans une seule espèce de chaque côté, en gardant l'hydrogène et l'oxygène pour la fin ; ajustez-le, puis passez à l'élément suivant ; revenez si besoin sur un coefficient déjà placé ; terminez par un décompte complet. Exemple avec la combustion du propane C₃H₈ + O₂ → CO₂ + H₂O : le carbone impose 3 CO₂, l'hydrogène impose 4 H₂O, on compte alors 3 × 2 + 4 = 10 atomes d'oxygène à droite, d'où 5 O₂. On obtient C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O.",
              ],
            },
            {
              heading: "Les ions et les espèces spectatrices",
              paragraphs: [
                "Lorsqu'on verse de l'acide chlorhydrique (solution contenant des ions H⁺ et Cl⁻) sur du zinc, un gaz se dégage (le dihydrogène, qui détone à l'approche d'une flamme) et le zinc disparaît en formant des ions zinc Zn²⁺. Les ions chlorure sont toujours présents en même quantité à la fin : ils sont spectateurs. L'équation s'écrit Zn + 2 H⁺ → Zn²⁺ + H₂. Charge à gauche : 2 × (+1) = +2 ; charge à droite : +2. L'équation est ajustée.",
                "Autre exemple : en ajoutant de la soude (ions Na⁺ et HO⁻) à une solution de sulfate de cuivre (ions Cu²⁺ et SO₄²⁻), il se forme un précipité bleu d'hydroxyde de cuivre. Les ions Na⁺ et SO₄²⁻ sont spectateurs. L'équation s'écrit Cu²⁺ + 2 HO⁻ → Cu(OH)₂. On peut préciser les états : Cu²⁺(aq) + 2 HO⁻(aq) → Cu(OH)₂(s).",
              ],
              box: { label: "À retenir", text: "Les espèces spectatrices n'apparaissent pas dans l'équation. Pour une équation avec des ions, vérifiez toujours la conservation de la charge en plus de celle des éléments." },
            },
          ],
          keyPoints: [
            "Réactifs : consommés. Produits : formés. Espèces spectatrices : quantité inchangée, absentes de l'équation.",
            "Une transformation chimique forme de nouvelles espèces ; une transformation physique conserve les espèces.",
            "Équation : réactifs → produits, avec des coefficients stœchiométriques (le 1 ne s'écrit pas).",
            "Une équation ajustée conserve les éléments et la charge électrique.",
            "On ajuste avec les coefficients, jamais en modifiant les indices des formules.",
            "Exemple : CH₄ + 2 O₂ → CO₂ + 2 H₂O ; Zn + 2 H⁺ → Zn²⁺ + H₂.",
          ],
          example: {
            statement: "Le butane C₄H₁₀, gaz des briquets, brûle dans le dioxygène O₂ en formant du dioxyde de carbone CO₂ et de l'eau H₂O. Écrivez et ajustez l'équation de cette combustion.",
            solution: [
              "Écriture non ajustée : C₄H₁₀ + O₂ → CO₂ + H₂O.",
              "Carbone : 4 atomes à gauche, il faut 4 CO₂. Hydrogène : 10 atomes à gauche, il faut 5 H₂O. On a alors C₄H₁₀ + O₂ → 4 CO₂ + 5 H₂O.",
              "Oxygène à droite : 4 × 2 + 5 × 1 = 13 atomes. Il faudrait 13/2 O₂, qui n'est pas un nombre entier.",
              "On multiplie tous les coefficients par 2 : 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O.",
              "Vérification : C : 2 × 4 = 8 et 8 ; H : 2 × 10 = 20 et 10 × 2 = 20 ; O : 13 × 2 = 26 et 8 × 2 + 10 = 26.",
              "Réponse : 2 C₄H₁₀ + 13 O₂ → 8 CO₂ + 10 H₂O.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ajustez les équations suivantes. a) Fe + O₂ → Fe₃O₄ (combustion du fer dans le dioxygène). b) H₂ + O₂ → H₂O. c) Al + O₂ → Al₂O₃. d) C₂H₆O + O₂ → CO₂ + H₂O (combustion de l'éthanol).",
              hint: "Commencez par l'élément qui n'est ni H ni O, gardez l'oxygène pour la fin et cherchez les plus petits entiers. Vérifiez par un décompte complet.",
              solution: [
                "a) Fer : 3 Fe pour Fe₃O₄ ; oxygène : 4 atomes, donc 2 O₂. Équation : 3 Fe + 2 O₂ → Fe₃O₄.",
                "b) Oxygène : 2 atomes à gauche, il faut 2 H₂O ; hydrogène : 4 atomes à droite, il faut 2 H₂. Équation : 2 H₂ + O₂ → 2 H₂O.",
                "c) Oxygène : 2 à gauche et 3 à droite ; le plus petit multiple commun est 6, d'où 3 O₂ et 2 Al₂O₃ ; aluminium : 4 atomes à droite, d'où 4 Al. Équation : 4 Al + 3 O₂ → 2 Al₂O₃.",
                "d) Carbone : 2 CO₂ ; hydrogène : 6 atomes, d'où 3 H₂O ; oxygène à droite : 4 + 3 = 7, dont 1 apporté par l'éthanol, il reste 6, d'où 3 O₂. Équation : C₂H₆O + 3 O₂ → 2 CO₂ + 3 H₂O.",
              ],
            },
            {
              level: 2,
              statement: "On plonge un fil de cuivre Cu dans une solution incolore de nitrate d'argent, qui contient des ions argent Ag⁺ et des ions nitrate NO₃⁻. Après quelques heures, la solution est devenue bleue (présence d'ions cuivre Cu²⁺), un dépôt d'argent métallique Ag recouvre le fil, et un test montre que la quantité d'ions nitrate n'a pas changé. 1) Identifiez les réactifs, les produits et l'espèce spectatrice. 2) Écrivez et ajustez l'équation de la réaction. 3) Vérifiez la conservation de la charge.",
              hint: "Une espèce dont la quantité ne change pas est spectatrice. Pour ajuster, comparez la charge d'un ion Cu²⁺ et celle d'un ion Ag⁺.",
              solution: [
                "1) Le cuivre Cu et les ions Ag⁺ sont consommés : ce sont les réactifs. Les ions Cu²⁺ (couleur bleue) et l'argent Ag (dépôt) sont formés : ce sont les produits. Les ions NO₃⁻, en quantité inchangée, sont spectateurs.",
                "2) Écriture non ajustée : Cu + Ag⁺ → Cu²⁺ + Ag. Les éléments sont équilibrés mais pas la charge (+1 à gauche, +2 à droite). On place 2 devant Ag⁺, puis 2 devant Ag pour l'élément argent.",
                "Équation : Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag.",
                "3) Charge à gauche : 2 × (+1) = +2 ; charge à droite : +2. La charge est conservée, ainsi que les éléments (1 Cu et 2 Ag de chaque côté).",
              ],
            },
            {
              level: 3,
              statement: "On introduit de la poudre de fer dans de l'acide chlorhydrique. Un gaz se dégage et la solution devient vert pâle. Composition du système (eau solvant non comptée). État initial : fer Fe(s) 0,10 mol ; ions H⁺(aq) 0,30 mol ; ions Cl⁻(aq) 0,30 mol. État final : Fe(s) 0 mol ; H⁺(aq) 0,10 mol ; Cl⁻(aq) 0,30 mol ; ions fer(II) Fe²⁺(aq) 0,10 mol ; dihydrogène H₂(g) 0,10 mol. 1) À partir de ces données, identifiez les réactifs, les produits et les espèces spectatrices. 2) Écrivez et ajustez l'équation de la réaction. 3) Montrez que les quantités consommées et formées sont en accord avec les coefficients de l'équation. 4) Proposez un test pour identifier chacun des deux produits.",
              hint: "Comparez, pour chaque espèce, la quantité finale à la quantité initiale. Pour la question 3, calculez les quantités consommées ou formées et comparez leurs rapports aux coefficients.",
              solution: [
                "1) La quantité de Fe passe de 0,10 à 0 mol et celle de H⁺ de 0,30 à 0,10 mol : ce sont les réactifs. Fe²⁺ et H₂ apparaissent : ce sont les produits. Cl⁻ (0,30 mol au début et à la fin) est spectateur, tout comme l'eau solvant.",
                "2) Fe + H⁺ → Fe²⁺ + H₂ n'est pas ajusté (1 H à gauche, 2 à droite ; charge +1 à gauche, +2 à droite). En plaçant 2 devant H⁺ : Fe + 2 H⁺ → Fe²⁺ + H₂. Vérification : Fe : 1 = 1 ; H : 2 = 2 ; charge : +2 = +2.",
                "3) Consommés : 0,10 mol de Fe et 0,30 - 0,10 = 0,20 mol de H⁺, soit deux fois plus de H⁺ que de Fe, comme l'indiquent les coefficients 1 et 2. Formés : 0,10 mol de Fe²⁺ et 0,10 mol de H₂, autant que de fer consommé, comme l'indiquent les coefficients 1.",
                "4) Le dihydrogène produit une légère détonation à l'approche d'une flamme. Les ions Fe²⁺ donnent un précipité vert avec quelques gouttes de soude (solution d'hydroxyde de sodium).",
                "Conclusion : la transformation est modélisée par la réaction Fe + 2 H⁺ → Fe²⁺ + H₂, en accord avec toutes les données.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : réactions et équations chimiques.",
            statements: [
              { text: "Pour ajuster H₂ + O₂ → H₂O, on peut écrire H₂ + O₂ → H₂O₂.", true: false, why: "Changer l'indice change l'espèce : H₂O₂ est l'eau oxygénée. On ajuste seulement avec les coefficients : 2 H₂ + O₂ → 2 H₂O." },
              { text: "Une espèce spectatrice est présente en même quantité à l'état initial et à l'état final.", true: true, why: "Elle ne participe pas à la transformation et n'apparaît donc pas dans l'équation." },
              { text: "Dans une équation ajustée, le nombre total de molécules est le même à gauche et à droite.", true: false, why: "Ce sont les atomes de chaque élément et la charge qui se conservent. Exemple : 2 C₄H₁₀ + 13 O₂ (15 molécules) donne 8 CO₂ + 10 H₂O (18 molécules)." },
              { text: "Une équation qui contient des ions doit aussi conserver la charge électrique.", true: true, why: "La charge totale est la même des deux côtés, comme dans Zn + 2 H⁺ → Zn²⁺ + H₂." },
              { text: "Les réactifs sont les espèces dont la quantité augmente.", true: false, why: "Les réactifs sont consommés : leur quantité diminue. Ce sont les produits dont la quantité augmente." },
              { text: "Lors d'une transformation chimique, les atomes se réorganisent sans être créés ni détruits.", true: true, why: "C'est ce qui justifie la conservation des éléments dans l'équation." },
            ],
          },
          quiz: [
            {
              q: "Quelle équation est correctement ajustée ?",
              options: ["CH₄ + O₂ → CO₂ + 2 H₂O", "CH₄ + 2 O₂ → CO₂ + 2 H₂O", "CH₄ + 2 O₂ → CO₂ + H₂O", "2 CH₄ + O₂ → 2 CO₂ + H₂O"],
              answer: 1,
              why: "C : 1 = 1 ; H : 4 = 2 × 2 ; O : 2 × 2 = 2 + 2. Les autres écritures ne conservent pas l'oxygène ou l'hydrogène.",
            },
            {
              q: "Dans Zn + 2 H⁺ → Zn²⁺ + H₂, réalisée avec de l'acide chlorhydrique, les ions Cl⁻ sont :",
              options: ["des réactifs", "des produits", "des espèces spectatrices", "des catalyseurs consommés"],
              answer: 2,
              why: "Les ions chlorure sont présents mais ne réagissent pas : ils sont spectateurs et n'apparaissent pas dans l'équation.",
            },
            {
              q: "Quel coefficient faut-il placer devant O₂ dans C₃H₈ + ... O₂ → 3 CO₂ + 4 H₂O ?",
              options: ["3", "4", "7", "5"],
              answer: 3,
              why: "À droite, il y a 3 × 2 + 4 = 10 atomes d'oxygène, donc 5 molécules de dioxygène.",
            },
            {
              q: "Qu'est-ce qui permet d'affirmer qu'une transformation est chimique ?",
              options: ["De nouvelles espèces chimiques se forment", "L'état physique d'une espèce a changé", "Une espèce solide disparaît dans un liquide", "La température du système reste constante"],
              answer: 0,
              why: "Une transformation chimique produit des espèces nouvelles. Un changement d'état ou une dissolution conservent les espèces : ce sont des transformations physiques.",
            },
            {
              q: "L'équation Cu + Ag⁺ → Cu²⁺ + Ag est fausse car :",
              options: ["l'élément cuivre n'est pas conservé", "la charge électrique n'est pas conservée", "l'argent ne peut pas être un produit", "un ion ne peut jamais figurer parmi les réactifs d'une équation"],
              answer: 1,
              why: "Les éléments sont équilibrés, mais la charge vaut +1 à gauche et +2 à droite. L'équation ajustée est Cu + 2 Ag⁺ → Cu²⁺ + 2 Ag.",
            },
          ],
          trap: "Ajuster une équation en modifiant les indices des formules (écrire H₂O₂ au lieu de 2 H₂O), ou oublier de vérifier la conservation de la charge quand l'équation contient des ions.",
          method: "Après avoir ajusté, faites toujours un tableau de décompte : une ligne par élément, plus une ligne pour la charge, avec le total à gauche et à droite. L'équation n'est juste que si toutes les lignes sont égales.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reactif-limitant',
          title: "Réactif limitant et proportions stœchiométriques",
          minutes: 35,
          objectives: [
            "Identifier le réactif limitant à partir des quantités de matière des réactifs et de l'équation de réaction.",
            "Déterminer le réactif limitant lors d'une transformation chimique totale, à partir de l'identification des espèces présentes dans l'état final.",
            "Reconnaître un mélange de réactifs dans les proportions stœchiométriques.",
          ],
          course: [
            {
              heading: "Le réactif limitant",
              paragraphs: [
                "Dans une transformation chimique totale, la transformation s'arrête lorsque l'un des réactifs a été entièrement consommé. Ce réactif est appelé réactif limitant : c'est lui qui limite la quantité de produits formés. Les autres réactifs, dont il reste une partie à l'état final, sont dits en excès.",
                "Une analogie aide à comprendre. Pour faire un sandwich, il faut 2 tranches de pain et 1 tranche de jambon. Avec 10 tranches de pain et 4 tranches de jambon, le pain permettrait 10 ÷ 2 = 5 sandwichs, mais le jambon seulement 4 ÷ 1 = 4. On fait donc 4 sandwichs, le jambon est limitant, et il reste 10 - 8 = 2 tranches de pain en excès. Ce ne sont pas les quantités brutes qui comptent (10 contre 4), mais les quantités rapportées à la « recette ».",
              ],
              box: { label: "Définition", text: "Le réactif limitant est le réactif entièrement consommé à l'état final d'une transformation totale. Les autres réactifs sont en excès : il en reste à l'état final." },
            },
            {
              heading: "Identifier le réactif limitant par le calcul",
              paragraphs: [
                "La « recette » d'une réaction, ce sont les coefficients stœchiométriques de son équation. Pour une réaction d'équation a A + b B → c C + d D, on divise la quantité de matière initiale de chaque réactif par son coefficient : on compare n(A) ÷ a et n(B) ÷ b. Le réactif pour lequel ce rapport est le plus petit est le réactif limitant.",
                "Exemple : on fait brûler 3,0 mol de méthane avec 4,0 mol de dioxygène, selon CH₄ + 2 O₂ → CO₂ + 2 H₂O. Pour le méthane : 3,0 ÷ 1 = 3,0. Pour le dioxygène : 4,0 ÷ 2 = 2,0. Le dioxygène est limitant, bien qu'il soit présent en plus grande quantité. Les 4,0 mol de O₂ consomment 4,0 ÷ 2 = 2,0 mol de méthane : il reste 3,0 - 2,0 = 1,0 mol de méthane, et il se forme 2,0 mol de CO₂ et 4,0 mol de H₂O.",
              ],
              box: { label: "Règle", text: "Pour a A + b B → produits : si n(A) ÷ a < n(B) ÷ b, A est limitant ; si n(A) ÷ a > n(B) ÷ b, B est limitant ; si les deux rapports sont égaux, le mélange est stœchiométrique." },
            },
            {
              heading: "Les proportions stœchiométriques",
              paragraphs: [
                "Lorsque n(A) ÷ a = n(B) ÷ b, les réactifs sont introduits dans les proportions stœchiométriques : ils sont tous entièrement consommés en même temps, et l'état final ne contient plus que les produits (et les espèces spectatrices). Par exemple, 2,0 mol de dihydrogène et 1,0 mol de dioxygène sont dans les proportions stœchiométriques pour la réaction 2 H₂ + O₂ → 2 H₂O, puisque 2,0 ÷ 2 = 1,0 ÷ 1.",
                "Dans l'industrie comme au laboratoire, on choisit souvent de mettre un réactif bon marché en excès pour consommer entièrement un réactif coûteux. Pour une combustion, un manque de dioxygène est dangereux : en réalité, il peut conduire à une combustion incomplète qui produit du monoxyde de carbone CO, gaz toxique et inodore. C'est pourquoi les appareils de chauffage doivent être bien ventilés.",
              ],
            },
            {
              heading: "Identifier le réactif limitant par l'expérience",
              paragraphs: [
                "On peut aussi trouver le réactif limitant en analysant l'état final : un réactif encore détecté à la fin est en excès, et l'autre est limitant. Exemple : on verse de la poudre de fer dans une solution bleue de sulfate de cuivre ; il se produit la réaction Fe + Cu²⁺ → Fe²⁺ + Cu, avec un dépôt rouge de cuivre. On filtre, puis on ajoute quelques gouttes de soude au filtrat.",
                "Si l'on observe un précipité bleu (hydroxyde de cuivre), des ions Cu²⁺ restent en solution : ils sont en excès et le fer est limitant. Si l'on n'observe qu'un précipité vert (hydroxyde de fer(II)) et que la solution n'est plus bleue, tous les ions Cu²⁺ ont été consommés : ils sont limitants, et il reste de la poudre de fer grise sur le filtre. La couleur d'une espèce suffit parfois : la disparition de la couleur bleue signale à elle seule la consommation totale des ions Cu²⁺.",
              ],
              box: { label: "À retenir", text: "Un réactif encore présent à l'état final est en excès. Le réactif qui a totalement disparu est le réactif limitant." },
            },
          ],
          keyPoints: [
            "Transformation totale : elle s'arrête quand le réactif limitant est entièrement consommé.",
            "Pour a A + b B → ... : on compare n(A) ÷ a et n(B) ÷ b ; le plus petit rapport désigne le réactif limitant.",
            "Le réactif limitant n'est pas forcément celui qui est en plus petite quantité : il faut tenir compte des coefficients.",
            "Proportions stœchiométriques : n(A) ÷ a = n(B) ÷ b, tous les réactifs disparaissent.",
            "Un réactif détecté dans l'état final (couleur, test) est en excès.",
          ],
          example: {
            statement: "On mélange 0,020 mol de poudre de fer et une solution contenant 0,015 mol d'ions Cu²⁺. La réaction s'écrit Fe + Cu²⁺ → Fe²⁺ + Cu et la transformation est totale. Déterminez le réactif limitant, puis la composition du système à l'état final (sans compter l'eau et les ions sulfate spectateurs). La solution est-elle encore bleue à la fin ?",
            solution: [
              "Les coefficients de Fe et de Cu²⁺ valent 1 : on compare directement 0,020 ÷ 1 = 0,020 et 0,015 ÷ 1 = 0,015.",
              "Le plus petit rapport est celui des ions Cu²⁺ : ils sont limitants, le fer est en excès.",
              "Les 0,015 mol de Cu²⁺ réagissent avec 0,015 mol de Fe : il reste 0,020 - 0,015 = 0,005 mol de fer.",
              "Il se forme 0,015 mol de Fe²⁺ et 0,015 mol de Cu (coefficients 1).",
              "État final : Fe 0,005 mol ; Cu²⁺ 0 mol ; Fe²⁺ 0,015 mol ; Cu 0,015 mol.",
              "Les ions Cu²⁺, responsables de la couleur bleue, ont disparu : la solution n'est plus bleue (elle prend la teinte vert pâle des ions Fe²⁺).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On fait réagir 5,0 mol de dihydrogène avec 3,0 mol de dioxygène selon 2 H₂ + O₂ → 2 H₂O ; la transformation est totale. 1) Déterminez le réactif limitant. 2) Quelle quantité du réactif en excès reste-t-il ? 3) Quelle quantité d'eau se forme-t-il ?",
              hint: "Divisez chaque quantité initiale par le coefficient du réactif. Ensuite, utilisez les proportions de l'équation à partir de la quantité du réactif limitant.",
              solution: [
                "1) H₂ : 5,0 ÷ 2 = 2,5. O₂ : 3,0 ÷ 1 = 3,0. Le plus petit rapport est celui de H₂ : le dihydrogène est limitant.",
                "2) Les 5,0 mol de H₂ consomment 5,0 ÷ 2 = 2,5 mol de O₂. Il reste 3,0 - 2,5 = 0,5 mol de dioxygène.",
                "3) Les coefficients de H₂ et de H₂O sont égaux (2) : il se forme 5,0 mol d'eau.",
              ],
            },
            {
              level: 2,
              statement: "Le propane brûle selon C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O. On dispose de 0,40 mol de propane et de 1,5 mol de dioxygène ; on suppose la transformation totale. 1) Quel est le réactif limitant ? 2) Donnez la composition du système à l'état final. 3) Quelle quantité de dioxygène aurait-il fallu pour être dans les proportions stœchiométriques avec 0,40 mol de propane ?",
              hint: "Attention : le dioxygène est présent en plus grande quantité, mais son coefficient est 5. Pour la question 3, écrivez l'égalité des deux rapports.",
              solution: [
                "1) C₃H₈ : 0,40 ÷ 1 = 0,40. O₂ : 1,5 ÷ 5 = 0,30. Le dioxygène est limitant.",
                "2) 1,5 mol de O₂ consomment 1,5 ÷ 5 = 0,30 mol de propane : il en reste 0,40 - 0,30 = 0,10 mol.",
                "Il se forme 3 × 0,30 = 0,90 mol de CO₂ et 4 × 0,30 = 1,2 mol de H₂O. État final : C₃H₈ 0,10 mol ; O₂ 0 mol ; CO₂ 0,90 mol ; H₂O 1,2 mol.",
                "3) Proportions stœchiométriques : n(O₂) ÷ 5 = 0,40 ÷ 1, soit n(O₂) = 5 × 0,40 = 2,0 mol de dioxygène.",
              ],
            },
            {
              level: 3,
              statement: "Un élève verse m = 0,56 g de poudre de fer dans une solution bleue de sulfate de cuivre contenant 5,0 × 10⁻³ mol d'ions Cu²⁺. Il observe un dépôt rouge. La réaction s'écrit Fe + Cu²⁺ → Fe²⁺ + Cu et la transformation est totale. Données : masse d'un atome de fer m(Fe) = 9,3 × 10⁻²⁶ kg ; constante d'Avogadro N(A) = 6,02 × 10²³ mol⁻¹. 1) Calculez le nombre N d'atomes de fer, puis la quantité de matière de fer introduite. 2) Déterminez le réactif limitant. 3) L'élève filtre le mélange et ajoute de la soude au filtrat. Quelle couleur de précipité doit-il observer ? Que reste-t-il sur le filtre ? 4) Quelle quantité de fer reste-t-il à l'état final ?",
              hint: "N = masse de l'échantillon ÷ masse d'un atome, avec les deux masses dans la même unité ; puis n = N ÷ N(A). Pour la question 3, rappelez-vous les couleurs des précipités d'hydroxyde : bleu pour Cu²⁺, vert pour Fe²⁺.",
              solution: [
                "1) m = 0,56 g = 5,6 × 10⁻⁴ kg. N = 5,6 × 10⁻⁴ ÷ 9,3 × 10⁻²⁶ ≈ 6,0 × 10²¹ atomes. n(Fe) = N ÷ N(A) = 6,0 × 10²¹ ÷ 6,02 × 10²³ ≈ 1,0 × 10⁻² mol.",
                "2) Les coefficients valent 1 : on compare 1,0 × 10⁻² mol de fer et 5,0 × 10⁻³ mol d'ions Cu²⁺. Le plus petit est celui de Cu²⁺ : les ions cuivre(II) sont limitants, le fer est en excès.",
                "3) Il ne reste plus d'ions Cu²⁺ dans le filtrat, qui n'est plus bleu, mais il contient des ions Fe²⁺ formés : la soude donne un précipité vert uniquement. Sur le filtre restent le cuivre formé (rouge) et le fer en excès (gris).",
                "4) 5,0 × 10⁻³ mol de Cu²⁺ consomment 5,0 × 10⁻³ mol de fer. Il reste 1,0 × 10⁻² - 5,0 × 10⁻³ = 5,0 × 10⁻³ mol de fer.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la méthode pour déterminer le réactif limitant et l'état final.",
            items: [
              "Écrire l'équation de la réaction et l'ajuster",
              "Calculer la quantité de matière initiale de chaque réactif",
              "Diviser chaque quantité initiale par le coefficient du réactif",
              "Désigner comme limitant le réactif dont le rapport est le plus petit",
              "Calculer les quantités consommées et formées à partir du réactif limitant",
              "Donner la composition du système à l'état final",
            ],
          },
          quiz: [
            {
              q: "Pour 2 H₂ + O₂ → 2 H₂O, on mélange 4,0 mol de H₂ et 1,0 mol de O₂. Quel est le réactif limitant ?",
              options: ["Le dihydrogène", "Aucun, le mélange est stœchiométrique", "On ne peut pas savoir sans la masse", "Le dioxygène"],
              answer: 3,
              why: "H₂ : 4,0 ÷ 2 = 2,0 ; O₂ : 1,0 ÷ 1 = 1,0. Le plus petit rapport est celui du dioxygène.",
            },
            {
              q: "Le réactif limitant est :",
              options: ["le réactif présent en plus petite masse", "le réactif entièrement consommé à l'état final", "le réactif qui a le plus petit coefficient", "le réactif qui réagit le plus vite au début de la transformation"],
              answer: 1,
              why: "Par définition, le réactif limitant est celui qui a totalement disparu quand la transformation totale s'arrête.",
            },
            {
              q: "Pour CH₄ + 2 O₂ → CO₂ + 2 H₂O, quel mélange est dans les proportions stœchiométriques ?",
              options: ["1,0 mol de CH₄ et 1,0 mol de O₂", "2,0 mol de CH₄ et 1,0 mol de O₂", "1,5 mol de CH₄ et 3,0 mol de O₂", "3,0 mol de CH₄ et 2,0 mol de O₂"],
              answer: 2,
              why: "1,5 ÷ 1 = 3,0 ÷ 2 = 1,5 : les deux rapports sont égaux.",
            },
            {
              q: "Après la réaction Fe + Cu²⁺ → Fe²⁺ + Cu, la solution est encore bleue. On en déduit que :",
              options: ["les ions Cu²⁺ sont en excès et le fer est limitant", "le fer est en excès et les ions Cu²⁺ sont limitants", "les deux réactifs ont été entièrement consommés", "la réaction n'a pas eu lieu du tout"],
              answer: 0,
              why: "La couleur bleue signale qu'il reste des ions Cu²⁺ : ils sont en excès, donc c'est le fer qui a été entièrement consommé.",
            },
            {
              q: "Pour C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O avec 1,0 mol de propane en excès et 2,5 mol de O₂ limitant, quelle quantité de CO₂ se forme-t-il ?",
              options: ["3,0 mol", "2,5 mol", "0,50 mol", "1,5 mol"],
              answer: 3,
              why: "2,5 mol de O₂ correspondent à 2,5 ÷ 5 = 0,50 « fois la recette » : il se forme 3 × 0,50 = 1,5 mol de CO₂.",
            },
          ],
          trap: "Désigner comme limitant le réactif présent en plus petite quantité sans diviser par les coefficients : avec 3,0 mol de CH₄ et 4,0 mol de O₂, c'est pourtant le dioxygène qui est limitant.",
          method: "Écrivez toujours les rapports sous la forme n ÷ coefficient pour chaque réactif, alignés l'un sous l'autre, avant de conclure. Puis contrôlez votre résultat : à l'état final, la quantité du réactif limitant doit être exactement 0 et aucune quantité ne doit être négative.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'exo-endothermique',
          title: "Transformations exothermiques et endothermiques",
          minutes: 25,
          objectives: [
            "Mettre en évidence l'effet thermique d'une transformation chimique.",
            "Identifier le sens du transfert thermique et qualifier une transformation d'exothermique ou d'endothermique.",
            "Citer des exemples de transformations exothermiques et endothermiques, chimiques ou physiques, de la vie courante.",
          ],
          course: [
            {
              heading: "L'effet thermique d'une transformation",
              paragraphs: [
                "Une transformation chimique ne se contente pas de produire de nouvelles espèces : elle s'accompagne d'un échange d'énergie entre le système chimique et le milieu extérieur. On le met en évidence en mesurant la température du milieu réactionnel avec un thermomètre ou une sonde, avant, pendant et après la transformation, de préférence dans un récipient isolé pour limiter les pertes.",
                "Une transformation est exothermique si le système cède de l'énergie au milieu extérieur par transfert thermique : l'énergie libérée est d'abord reçue par le milieu réactionnel, dont la température augmente, puis elle est cédée peu à peu à l'air ambiant. Une transformation est endothermique si le système reçoit de l'énergie du milieu extérieur : la température du milieu réactionnel diminue, puis remonte lentement jusqu'à la température ambiante.",
              ],
              box: { label: "Définition", text: "Exothermique : le système cède de l'énergie au milieu extérieur (la température du milieu réactionnel monte). Endothermique : le système reçoit de l'énergie du milieu extérieur (elle baisse)." },
            },
            {
              heading: "Des transformations chimiques exothermiques ou endothermiques",
              paragraphs: [
                "Les combustions sont exothermiques : celle du méthane dans une gazinière, celle du bois dans une cheminée, celle de l'essence dans un moteur. La réaction entre l'acide chlorhydrique et la soude échauffe nettement le mélange. Les chaufferettes à usage unique contiennent de la poudre de fer qui réagit lentement avec le dioxygène de l'air (4 Fe + 3 O₂ → 2 Fe₂O₃) en libérant de l'énergie pendant plusieurs heures ; elles sont vendues dans un emballage étanche, car la réaction commence dès que l'air y pénètre.",
                "D'autres transformations chimiques sont endothermiques. Lorsqu'on mélange de l'acide citrique et de l'hydrogénocarbonate de sodium (le bicarbonate) dans un peu d'eau, un gaz se dégage et la température du mélange baisse de plusieurs degrés. La décomposition du calcaire CaCO₃ → CaO + CO₂, réalisée dans les fours à chaux pour fabriquer la chaux, ne se poursuit que si l'on chauffe en permanence : elle a besoin d'un apport continu d'énergie. La photosynthèse nécessite elle aussi un apport d'énergie, fourni par la lumière.",
              ],
            },
            {
              heading: "Les transformations physiques aussi",
              paragraphs: [
                "Les effets thermiques ne sont pas réservés aux transformations chimiques. Les changements d'état en sont un exemple : la fusion et la vaporisation sont endothermiques, la solidification et la liquéfaction exothermiques. Certaines dissolutions le sont aussi : la dissolution de pastilles d'hydroxyde de sodium dans l'eau est fortement exothermique (la solution peut devenir brûlante), alors que celle du nitrate d'ammonium est endothermique.",
                "Les poches de froid instantané utilisées en pharmacie contiennent du nitrate d'ammonium solide et un sachet d'eau : en pressant la poche, on rompt le sachet, le solide se dissout et la poche se refroidit. Il s'agit d'une transformation physique, car les ions NH₄⁺ et NO₃⁻ existaient déjà dans le cristal : NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq).",
              ],
              box: { label: "À retenir", text: "Exothermique ou endothermique décrit le sens du transfert d'énergie, et non la nature de la transformation : une transformation physique comme une transformation chimique peut être l'un ou l'autre." },
            },
            {
              heading: "Ordres de grandeur et sécurité",
              paragraphs: [
                "Les énergies mises en jeu ne sont pas du même ordre. Vaporiser 1 kg d'eau demande environ 2 × 10⁶ J ; la combustion de 1 kg de méthane libère environ 5 × 10⁷ J, soit plus de vingt fois plus. Les transformations nucléaires, étudiées dans le chapitre suivant, libèrent des énergies encore bien plus grandes, de l'ordre d'un million de fois celles des combustions pour une même masse.",
                "Ces effets thermiques imposent des règles de sécurité. Pour diluer un acide concentré, on verse toujours l'acide dans l'eau, et jamais l'eau dans l'acide : la dilution est très exothermique et le mélange pourrait bouillir et projeter de l'acide. Au laboratoire, on manipule les réactions exothermiques avec de petites quantités, lunettes et gants, et on ajoute les réactifs progressivement.",
              ],
            },
          ],
          keyPoints: [
            "Exothermique : le système cède de l'énergie au milieu extérieur ; la température du milieu réactionnel augmente.",
            "Endothermique : le système reçoit de l'énergie du milieu extérieur ; la température du milieu réactionnel diminue.",
            "Exothermiques : combustions, acide chlorhydrique + soude, oxydation du fer des chaufferettes.",
            "Endothermiques : acide citrique + bicarbonate, décomposition du calcaire, dissolution du nitrate d'ammonium.",
            "Une transformation physique peut aussi être exothermique ou endothermique.",
            "Sécurité : toujours verser l'acide dans l'eau.",
          ],
          example: {
            statement: "On réalise deux mélanges dans des gobelets isolés, à partir de solutions à 20,0 °C (données fictives). Mélange A : acide chlorhydrique et soude ; la température atteint 26,5 °C. Mélange B : acide citrique et hydrogénocarbonate de sodium dans l'eau ; un gaz se dégage et la température descend à 14,0 °C. Qualifiez chaque transformation et précisez le sens du transfert thermique.",
            solution: [
              "Mélange A : la température du milieu réactionnel augmente de 26,5 - 20,0 = 6,5 °C.",
              "Le système chimique cède de l'énergie, d'abord reçue par la solution : la transformation A est exothermique.",
              "Mélange B : la température diminue de 20,0 - 14,0 = 6,0 °C.",
              "Le système reçoit de l'énergie, prélevée sur le milieu réactionnel qui se refroidit : la transformation B est endothermique.",
              "Réponse : A est exothermique (transfert du système vers l'extérieur), B est endothermique (transfert de l'extérieur vers le système).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque transformation, dites si elle est physique ou chimique, puis si elle est exothermique ou endothermique. a) Le gaz naturel brûle dans une gazinière. b) De l'acide citrique et du bicarbonate de sodium réagissent dans l'eau et le mélange se refroidit. c) Un glaçon fond dans un verre. d) Des pastilles d'hydroxyde de sodium se dissolvent dans l'eau et la solution devient chaude.",
              hint: "Physique ou chimique : de nouvelles espèces se forment-elles ? Exothermique ou endothermique : la température du milieu monte-t-elle ou baisse-t-elle ?",
              solution: [
                "a) Combustion : de nouvelles espèces se forment (CO₂, H₂O), transformation chimique ; elle libère de l'énergie, elle est exothermique.",
                "b) Un gaz nouveau se forme : transformation chimique ; le mélange se refroidit, elle est endothermique.",
                "c) Changement d'état (fusion) : transformation physique ; la glace reçoit de l'énergie, elle est endothermique.",
                "d) Dissolution : transformation physique ; la solution s'échauffe, elle est exothermique.",
              ],
            },
            {
              level: 2,
              statement: "On verse de la poudre de zinc dans une solution de sulfate de cuivre placée dans un bécher et on relève la température (données fictives). t = 0 min : 20,0 °C ; t = 1 min : 27,5 °C ; t = 2 min : 31,0 °C ; t = 3 min : 30,2 °C ; t = 5 min : 27,0 °C ; t = 10 min : 23,1 °C. 1) La transformation est-elle exothermique ou endothermique ? Justifiez. 2) Précisez le sens du transfert thermique entre le système et l'extérieur. 3) Expliquez pourquoi la température diminue après 2 min. 4) Quel matériel permettrait de mieux mettre en évidence l'effet thermique ?",
              hint: "Distinguez la phase où la réaction se produit et la phase où elle est terminée. Que fait un liquide chaud laissé à l'air libre ?",
              solution: [
                "1) Pendant les deux premières minutes, la température monte de 20,0 °C à 31,0 °C : le système libère de l'énergie, la transformation est exothermique.",
                "2) L'énergie passe du système chimique vers le milieu extérieur : elle chauffe d'abord la solution, puis l'air ambiant.",
                "3) Vers 2 min, la réaction est pratiquement terminée et ne libère plus d'énergie. Le mélange, plus chaud que la pièce, cède alors de l'énergie à l'air par transfert thermique : sa température redescend vers la température ambiante.",
                "4) Un récipient isolé thermiquement (calorimètre, ou à défaut un gobelet en polystyrène muni d'un couvercle) limite les pertes vers l'extérieur : l'élévation de température mesurée est alors plus nette et plus fidèle.",
              ],
            },
            {
              level: 3,
              statement: "Document : « La poche de froid contient du nitrate d'ammonium NH₄NO₃ solide et un sachet d'eau. On presse la poche : le sachet se rompt, le solide se dissout et la poche devient froide pendant une vingtaine de minutes. La chaufferette contient de la poudre de fer ; à l'ouverture de son emballage étanche, le fer réagit lentement avec le dioxygène de l'air pour former de l'oxyde de fer(III) Fe₂O₃, et la chaufferette tiédit pendant plusieurs heures. » 1) La transformation dans la poche de froid est-elle physique ou chimique ? Écrivez son écriture symbolique. 2) Est-elle exothermique ou endothermique ? 3) Écrivez et ajustez l'équation de la réaction de la chaufferette, et qualifiez son effet thermique. 4) Expliquez pourquoi la chaufferette est vendue dans un emballage étanche à l'air.",
              hint: "Une dissolution d'un solide ionique sépare des ions qui existaient déjà. Pour l'équation de la chaufferette, commencez par l'oxygène : 2 atomes dans O₂, 3 dans Fe₂O₃.",
              solution: [
                "1) Le nitrate d'ammonium se dissout : aucune espèce nouvelle n'est formée, les ions existaient déjà dans le cristal. C'est une transformation physique : NH₄NO₃(s) → NH₄⁺(aq) + NO₃⁻(aq).",
                "2) La poche se refroidit : le système reçoit de l'énergie du milieu extérieur (de la main, par exemple). La dissolution est endothermique.",
                "3) Fe + O₂ → Fe₂O₃. Oxygène : le plus petit multiple commun de 2 et 3 est 6, d'où 3 O₂ et 2 Fe₂O₃ ; fer : 4 atomes à droite, d'où 4 Fe. Équation : 4 Fe + 3 O₂ → 2 Fe₂O₃. La chaufferette tiédit : la transformation est chimique et exothermique.",
                "4) Le dioxygène de l'air est un réactif : tant que l'emballage est étanche, il ne peut pas atteindre le fer et la réaction ne démarre pas. Elle commence seulement à l'ouverture, au moment où l'on en a besoin.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme ou exemple à sa description.",
            pairs: [
              { left: "Exothermique", right: "Le système cède de l'énergie au milieu extérieur" },
              { left: "Endothermique", right: "Le système reçoit de l'énergie du milieu extérieur" },
              { left: "Transfert thermique", right: "Échange d'énergie dû à une différence de température" },
              { left: "Combustion du méthane", right: "Transformation chimique exothermique" },
              { left: "Acide citrique et bicarbonate", right: "Transformation chimique endothermique" },
              { left: "Dissolution du nitrate d'ammonium", right: "Transformation physique endothermique" },
            ],
          },
          quiz: [
            {
              q: "Lors d'une transformation, la température du milieu réactionnel passe de 20 °C à 12 °C. La transformation est :",
              options: ["exothermique", "endothermique", "ni l'une ni l'autre", "forcément nucléaire"],
              answer: 1,
              why: "La température baisse : le système reçoit de l'énergie prélevée sur le milieu, la transformation est endothermique.",
            },
            {
              q: "Laquelle de ces transformations est exothermique ?",
              options: ["La fusion d'un glaçon dans une boisson", "La dissolution du nitrate d'ammonium", "La décomposition du calcaire dans un four à chaux", "La combustion du bois dans une cheminée"],
              answer: 3,
              why: "Les combustions libèrent de l'énergie. Les trois autres transformations nécessitent un apport d'énergie.",
            },
            {
              q: "Une poche de froid fonctionne grâce à :",
              options: ["une dissolution endothermique", "une combustion lente du contenu", "une solidification de l'eau du sachet", "une réaction nucléaire très faible"],
              answer: 0,
              why: "La dissolution du nitrate d'ammonium prélève de l'énergie au milieu extérieur : la poche se refroidit.",
            },
            {
              q: "Pourquoi verse-t-on l'acide dans l'eau, et non l'eau dans l'acide ?",
              options: ["Parce que l'acide est plus léger que l'eau et flotterait", "Parce que la dilution est très exothermique et que le mélange pourrait bouillir et projeter de l'acide", "Parce que l'acide perdrait son effet acide si on versait l'eau", "Parce que la dilution est endothermique et risquerait de geler le mélange"],
              answer: 1,
              why: "La dilution libère beaucoup d'énergie ; en versant l'acide petit à petit dans un grand volume d'eau, on limite l'échauffement et les projections.",
            },
            {
              q: "Une transformation endothermique :",
              options: ["est toujours une transformation chimique", "libère de l'énergie vers le milieu extérieur", "reçoit de l'énergie du milieu extérieur", "ne modifie jamais la température du milieu"],
              answer: 2,
              why: "Endothermique signifie que le système reçoit de l'énergie ; ce peut être une transformation physique ou chimique.",
            },
          ],
          trap: "Penser qu'une transformation endothermique « produit du froid » comme une substance : en réalité, le système reçoit de l'énergie, qu'il prélève sur le milieu extérieur, et c'est ce prélèvement qui refroidit le milieu.",
          method: "Pour qualifier une transformation, regardez d'abord le sens de variation de la température du milieu réactionnel, puis traduisez-le en sens du transfert : température qui monte, le système cède de l'énergie (exothermique) ; température qui baisse, il en reçoit (endothermique).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'synthese-espece',
          title: "Synthétiser une espèce chimique",
          minutes: 35,
          objectives: [
            "Distinguer une espèce chimique naturelle, une espèce synthétique identique à une espèce naturelle et une espèce artificielle, et citer des exemples d'espèces synthétisées.",
            "Réaliser le schéma légendé d'un montage à reflux et justifier son intérêt.",
            "Établir, à partir de données expérimentales, l'équation de la réaction d'une synthèse.",
            "Mettre en œuvre une chromatographie sur couche mince pour comparer une espèce synthétisée et une espèce extraite.",
          ],
          course: [
            {
              heading: "Pourquoi synthétiser des espèces chimiques ?",
              paragraphs: [
                "Une synthèse chimique consiste à fabriquer une espèce chimique, appelée produit, à partir d'autres espèces, les réactifs, grâce à une transformation chimique. On synthétise une espèce naturelle lorsque son extraction est trop coûteuse, trop lente ou épuiserait la ressource naturelle. La vanilline, principale espèce responsable de l'arôme de vanille, est présente dans les gousses de vanille, mais leur production est faible et chère : l'essentiel de la vanilline utilisée dans l'alimentation est aujourd'hui synthétisé.",
                "Une espèce synthétisée identique à une espèce naturelle est exactement la même espèce : même formule, mêmes propriétés (température de fusion, odeur, couleur, comportement en chromatographie). Seule son origine diffère. On fabrique aussi des espèces artificielles, qui n'existent pas dans la nature : le nylon, de nombreuses matières plastiques, l'aspirine ou le paracétamol. L'indigo, colorant bleu des jeans, autrefois extrait de plantes, est aujourd'hui produit par synthèse.",
              ],
              box: { label: "Définition", text: "Espèce naturelle : présente dans la nature. Espèce synthétique : fabriquée par l'être humain ; elle peut être identique à une espèce naturelle ou artificielle (absente de la nature)." },
            },
            {
              heading: "Le chauffage à reflux",
              paragraphs: [
                "De nombreuses synthèses sont lentes à température ambiante. On les accélère en chauffant, car la température est un facteur cinétique : plus elle est élevée, plus la transformation est rapide. On ajoute parfois un catalyseur, une espèce qui accélère la transformation sans être consommée. Mais chauffer des liquides volatils dans un récipient ouvert ferait perdre une partie des réactifs et des produits, et dégagerait des vapeurs parfois inflammables ou irritantes.",
                "Le montage à reflux résout ce problème. Le mélange réactionnel est placé dans un ballon à fond rond, avec quelques grains de pierre ponce qui régularisent l'ébullition. Le ballon est chauffé par un chauffe-ballon posé sur un support élévateur, qui permet d'arrêter rapidement le chauffage en l'abaissant. Au-dessus du ballon, un réfrigérant vertical (à boules ou droit) est parcouru par un courant d'eau froide qui entre par le bas et sort par le haut, afin que le réfrigérant reste entièrement rempli d'eau. Les vapeurs se liquéfient sur ses parois froides et retombent dans le ballon : aucune matière n'est perdue.",
              ],
              box: { label: "Repère", text: "Montage à reflux : chauffe-ballon sur support élévateur, ballon à fond rond avec pierre ponce, réfrigérant vertical avec entrée d'eau en bas et sortie en haut. Intérêt : chauffer pour accélérer la transformation sans perte de matière." },
            },
            {
              heading: "Un exemple : l'arôme de banane",
              paragraphs: [
                "L'éthanoate de 3-méthylbutyle (appelé aussi acétate d'isoamyle) est l'une des espèces responsables de l'odeur de la banane. On le synthétise à partir d'acide éthanoïque C₂H₄O₂ (l'acide du vinaigre) et de 3-méthylbutan-1-ol C₅H₁₂O, en présence de quelques gouttes d'acide sulfurique concentré qui joue le rôle de catalyseur. Après une demi-heure environ de chauffage à reflux, le mélange sent nettement la banane.",
                "L'analyse montre qu'il s'est formé l'ester C₇H₁₄O₂ et de l'eau. L'équation de la réaction s'écrit C₂H₄O₂ + C₅H₁₂O → C₇H₁₄O₂ + H₂O. On vérifie la conservation des éléments : C : 2 + 5 = 7 ; H : 4 + 12 = 16 = 14 + 2 ; O : 2 + 1 = 3 = 2 + 1.",
              ],
            },
            {
              heading: "Isoler et identifier le produit",
              paragraphs: [
                "Après refroidissement, le produit doit être séparé du mélange. Pour l'arôme de banane, on verse le mélange dans de l'eau salée : l'ester y est très peu soluble et moins dense, il forme une phase supérieure que l'on récupère avec une ampoule à décanter. Pour un produit solide, on le récupère par filtration.",
                "On identifie ensuite le produit. La chromatographie sur couche mince (CCM) permet de comparer, sur la même plaque, le produit synthétisé, l'espèce de référence (commerciale ou extraite d'un produit naturel) et les réactifs. Deux taches situées à la même hauteur, c'est-à-dire de même rapport frontal R(f) = distance parcourue par la tache ÷ distance parcourue par l'éluant, correspondent à la même espèce. Si le dépôt du produit ne donne qu'une tache, il est pur, au moins vis-à-vis des espèces révélées. Pour un solide, on peut aussi mesurer sa température de fusion sur un banc Kofler et la comparer à la valeur tabulée.",
              ],
              box: { label: "À retenir", text: "Une synthèse se déroule en trois temps : la transformation (souvent un chauffage à reflux), l'isolement du produit (décantation, filtration), puis son identification (CCM, température de fusion)." },
            },
          ],
          keyPoints: [
            "Synthétiser : fabriquer un produit à partir de réactifs par une transformation chimique.",
            "Une espèce synthétique peut être identique à une espèce naturelle (vanilline) ou artificielle (nylon, aspirine, paracétamol).",
            "Le chauffage accélère la transformation ; le réfrigérant liquéfie les vapeurs, qui retombent dans le ballon.",
            "Réfrigérant : eau froide entrant par le bas, sortant par le haut. Pierre ponce : ébullition régulière.",
            "CCM : même hauteur, même rapport frontal, même espèce ; une seule tache pour un produit pur.",
            "R(f) = distance parcourue par la tache ÷ distance parcourue par l'éluant.",
          ],
          example: {
            statement: "Après la synthèse de l'arôme de banane, on réalise une CCM avec trois dépôts : S (produit synthétisé), E (arôme extrait d'une banane), A (3-méthylbutan-1-ol, réactif). Après élution et révélation, l'éluant a parcouru 6,0 cm. Le dépôt E donne une tache à 4,2 cm ; le dépôt A une tache à 1,8 cm ; le dépôt S deux taches, à 4,2 cm et à 1,8 cm. Interprétez ce chromatogramme.",
            solution: [
              "Rapport frontal de la tache de E : R(f) = 4,2 ÷ 6,0 = 0,70. Rapport frontal de la tache de A : R(f) = 1,8 ÷ 6,0 = 0,30.",
              "Le dépôt S donne une tache de R(f) = 0,70, à la même hauteur que E : le produit synthétisé contient l'espèce présente dans l'arôme de banane.",
              "Le dépôt S donne aussi une tache de R(f) = 0,30, à la même hauteur que A : il contient encore du 3-méthylbutan-1-ol, un réactif qui n'a pas entièrement réagi.",
              "Le produit obtenu n'est donc pas pur : il faudrait le purifier davantage.",
              "Conclusion : la synthèse a bien produit l'espèce de l'arôme de banane, mais le produit contient encore un réactif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez chaque espèce dans l'une des trois catégories : naturelle, synthétique identique à une espèce naturelle, artificielle. a) La vanilline extraite de gousses de vanille. b) La vanilline fabriquée en usine. c) Le nylon d'une corde d'escalade. d) Le paracétamol d'un médicament. e) Le menthol fabriqué en usine pour aromatiser des confiseries, identique à celui de la menthe.",
              hint: "Posez deux questions : l'espèce a-t-elle été fabriquée par l'être humain ? Existe-t-elle aussi dans la nature ?",
              solution: [
                "a) Extraite d'un produit naturel : espèce naturelle.",
                "b) Fabriquée, mais existant dans la nature (gousses) : espèce synthétique identique à une espèce naturelle.",
                "c) Le nylon n'existe pas dans la nature : espèce artificielle.",
                "d) Le paracétamol n'existe pas dans la nature : espèce artificielle.",
                "e) Fabriqué, mais présent dans la menthe : espèce synthétique identique à une espèce naturelle.",
              ],
            },
            {
              level: 2,
              statement: "Un élève prépare un chauffage à reflux. 1) Nommez les éléments du montage, du bas vers le haut. 2) Pourquoi chauffe-t-on le mélange réactionnel ? 3) Quel est le rôle du réfrigérant, et pourquoi l'eau doit-elle y entrer par le bas ? 4) Quel est le rôle de la pierre ponce ? 5) Que se passerait-il si l'on chauffait le mélange dans un ballon ouvert, sans réfrigérant ?",
              hint: "Pensez à ce que deviennent les vapeurs qui montent du ballon, et à l'intérêt de garder le réfrigérant rempli d'eau froide sur toute sa hauteur.",
              solution: [
                "1) Support élévateur, chauffe-ballon, ballon à fond rond contenant le mélange et la pierre ponce, réfrigérant vertical relié à l'arrivée et à l'évacuation d'eau.",
                "2) La température est un facteur cinétique : le chauffage accélère la transformation, qui serait très lente à température ambiante.",
                "3) Le réfrigérant liquéfie les vapeurs qui s'élèvent du ballon ; le liquide retombe dans le ballon, ce qui évite toute perte de réactifs ou de produits. En entrant par le bas, l'eau remplit complètement le réfrigérant, dont toute la paroi reste froide et efficace.",
                "4) La pierre ponce régularise l'ébullition et évite les projections brutales de liquide.",
                "5) Les vapeurs s'échapperaient : on perdrait une partie des réactifs et des produits, et l'on dégagerait dans la salle des vapeurs parfois inflammables ou irritantes.",
              ],
            },
            {
              level: 3,
              statement: "On synthétise l'éthanoate de 3-méthylbutyle (arôme de banane). Données : acide éthanoïque C₂H₄O₂, soluble dans l'eau, température d'ébullition 118 °C ; 3-méthylbutan-1-ol C₅H₁₂O, peu soluble dans l'eau salée, densité 0,81 ; éthanoate de 3-méthylbutyle C₇H₁₄O₂, très peu soluble dans l'eau salée, densité 0,87, température d'ébullition 142 °C ; eau salée, densité 1,2. 1) L'analyse du mélange final montre la formation de l'ester et d'eau. Écrivez l'équation de la réaction et vérifiez qu'elle est ajustée. 2) Justifiez l'emploi d'un chauffage à reflux. 3) Après refroidissement, on verse le mélange dans de l'eau salée : deux phases apparaissent. Dans quelle phase se trouve l'ester ? Justifiez. 4) On réalise une CCM : le produit synthétisé S et l'ester commercial E donnent chacun une seule tache, à 4,9 cm de la ligne de dépôt ; le 3-méthylbutan-1-ol A donne une tache à 2,1 cm ; le front de l'éluant est à 7,0 cm. Calculez les rapports frontaux et concluez.",
              hint: "Une espèce peu soluble et moins dense que l'eau salée forme la phase du dessus. Comparez les rapports frontaux de S, E et A.",
              solution: [
                "1) C₂H₄O₂ + C₅H₁₂O → C₇H₁₄O₂ + H₂O. Vérification : C : 2 + 5 = 7 ; H : 4 + 12 = 16 et 14 + 2 = 16 ; O : 2 + 1 = 3 et 2 + 1 = 3. L'équation est ajustée.",
                "2) La transformation est lente : on chauffe pour l'accélérer. Les espèces sont volatiles (températures d'ébullition de 118 °C à 142 °C) : le réfrigérant liquéfie leurs vapeurs, qui retombent dans le ballon, ce qui évite les pertes de matière.",
                "3) L'ester est très peu soluble dans l'eau salée et moins dense qu'elle (0,87 < 1,2) : il se trouve dans la phase supérieure, que l'on récupère avec une ampoule à décanter.",
                "4) R(f)(S) = R(f)(E) = 4,9 ÷ 7,0 = 0,70 ; R(f)(A) = 2,1 ÷ 7,0 = 0,30.",
                "S et E ont le même rapport frontal : le produit synthétisé est bien l'éthanoate de 3-méthylbutyle. S ne présente qu'une tache et aucune à R(f) = 0,30 : le produit ne contient pas de 3-méthylbutan-1-ol détectable, il est pur au regard de cette analyse.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la synthèse de l'arôme de banane.",
            items: [
              "Introduire les réactifs, le catalyseur et la pierre ponce dans le ballon",
              "Chauffer à reflux pendant une trentaine de minutes",
              "Laisser refroidir le mélange réactionnel",
              "Verser le mélange dans l'eau salée et séparer les phases à l'ampoule à décanter",
              "Identifier le produit récupéré par chromatographie sur couche mince",
            ],
          },
          quiz: [
            {
              q: "Quel est le rôle du réfrigérant dans un montage à reflux ?",
              options: ["Refroidir le mélange réactionnel pour ralentir la transformation chimique", "Liquéfier les vapeurs pour qu'elles retombent dans le ballon", "Apporter l'eau qui sert de réactif à la synthèse", "Filtrer le produit formé au cours du chauffage"],
              answer: 1,
              why: "Les vapeurs se liquéfient au contact de la paroi froide et retombent dans le ballon : on chauffe sans perdre de matière.",
            },
            {
              q: "La vanilline synthétisée en usine et la vanilline extraite des gousses :",
              options: ["ont des formules différentes mais exactement la même odeur", "n'ont pas les mêmes propriétés physiques", "sont la même espèce chimique, d'origines différentes", "se distinguent toujours par CCM"],
              answer: 2,
              why: "Une espèce synthétique identique à une espèce naturelle a la même formule et les mêmes propriétés ; seule son origine change.",
            },
            {
              q: "Dans le réfrigérant, l'eau froide doit circuler :",
              options: ["du haut vers le bas, pour profiter de la gravité et aller plus vite", "dans n'importe quel sens, cela ne change rien", "uniquement quand on arrête le chauffage", "du bas vers le haut, pour remplir tout le réfrigérant"],
              answer: 3,
              why: "En entrant par le bas, l'eau remplit entièrement le réfrigérant : toute sa paroi reste froide et liquéfie efficacement les vapeurs.",
            },
            {
              q: "Sur une CCM, l'éluant a parcouru 8,0 cm et une tache 2,0 cm. Son rapport frontal vaut :",
              options: ["0,25", "4,0", "0,40", "6,0"],
              answer: 0,
              why: "R(f) = 2,0 ÷ 8,0 = 0,25. Un rapport frontal est toujours compris entre 0 et 1.",
            },
            {
              q: "Laquelle de ces espèces est artificielle ?",
              options: ["Le paracétamol", "Le menthol", "La vanilline de synthèse", "La caféine"],
              answer: 0,
              why: "Le paracétamol n'existe pas dans la nature. Le menthol, la vanilline et la caféine sont présents dans des plantes, même lorsqu'on les synthétise.",
            },
          ],
          trap: "Croire qu'une espèce synthétique est « moins naturelle » ou différente de la même espèce extraite : la vanilline de synthèse et la vanilline des gousses sont rigoureusement la même espèce.",
          method: "Pour schématiser un montage à reflux, dessinez de bas en haut (support élévateur, chauffe-ballon, ballon, réfrigérant), puis ajoutez les flèches d'eau (entrée en bas, sortie en haut) et légendez chaque élément. Vérifiez enfin que le montage reste ouvert en haut du réfrigérant : on ne chauffe jamais un système fermé.",
        },
      ],
    },
    /* ==================================================================== */
    /* LES TRANSFORMATIONS NUCLÉAIRES                                        */
    /* ==================================================================== */
    {
      id: 'transformations-nucleaires',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reaction-nucleaire',
          title: "Les réactions nucléaires et leurs équations",
          minutes: 30,
          objectives: [
            "Identifier des isotopes à partir de l'écriture symbolique de leurs noyaux.",
            "Établir l'écriture symbolique d'une réaction nucléaire en appliquant les lois de conservation.",
            "Identifier la nature physique, chimique ou nucléaire d'une transformation à partir de sa description ou d'une écriture symbolique.",
          ],
          course: [
            {
              heading: "Le noyau, son écriture et les isotopes",
              paragraphs: [
                "Le noyau d'un atome est formé de nucléons : des protons, chargés positivement, et des neutrons, électriquement neutres. On le représente par le symbole X de l'élément, précédé en bas à gauche du numéro atomique Z (nombre de protons) et en haut à gauche du nombre de masse A (nombre de nucléons). Le nombre de neutrons vaut N = A - Z. Par exemple, le noyau ²³⁵₉₂U (uranium 235) contient 92 protons et 235 - 92 = 143 neutrons.",
                "C'est le numéro atomique Z qui définit l'élément chimique : tous les noyaux à 6 protons sont des noyaux de carbone, tous ceux à 92 protons des noyaux d'uranium. Des noyaux qui ont le même nombre de protons mais des nombres de neutrons différents sont des isotopes du même élément. Le carbone en possède trois à l'état naturel : ¹²₆C (le plus abondant), ¹³₆C et ¹⁴₆C (radioactif, utilisé pour la datation). L'hydrogène a aussi trois isotopes : ¹₁H, ²₁H (le deutérium) et ³₁H (le tritium).",
              ],
              box: { label: "Définition", text: "Des isotopes sont des noyaux de même numéro atomique Z (même élément) mais de nombres de masse A différents, donc de nombres de neutrons différents. Exemple : ²³⁵₉₂U et ²³⁸₉₂U." },
            },
            {
              heading: "Qu'est-ce qu'une réaction nucléaire ?",
              paragraphs: [
                "Une transformation nucléaire modifie les noyaux des atomes : des noyaux disparaissent et d'autres se forment. Contrairement à une transformation chimique, où seuls les électrons externes se réorganisent et où les éléments se conservent, une transformation nucléaire peut changer un élément en un autre. Elle est modélisée par une réaction nucléaire, dont l'équation fait apparaître les noyaux et les particules avec leurs nombres A et Z.",
                "Les équations des réactions nucléaires respectent deux lois de conservation : la conservation du nombre total de nucléons (la somme des A est la même de chaque côté de la flèche) et la conservation de la charge électrique (la somme des Z est la même de chaque côté). Ces deux lois permettent de compléter une équation dont un noyau ou une particule est inconnu : on calcule A et Z manquants, puis on identifie l'élément grâce à son numéro atomique dans la classification périodique.",
              ],
              box: { label: "Règle", text: "Dans une équation de réaction nucléaire, la somme des nombres de masse A et la somme des numéros atomiques Z sont conservées. Particules usuelles : neutron ¹₀n, proton ¹₁p, électron ⁰₋₁e, positon ⁰₁e, particule α (noyau d'hélium) ⁴₂He." },
            },
            {
              heading: "Des réactions spontanées ou provoquées",
              paragraphs: [
                "Certains noyaux instables se transforment spontanément : c'est la radioactivité. Lors d'une désintégration α, le noyau émet un noyau d'hélium : ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (le radium devient du radon). Lors d'une désintégration β⁻, il émet un électron : ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (le carbone 14 devient de l'azote 14). Lors d'une désintégration β⁺, il émet un positon : ¹⁸₉F → ¹⁸₈O + ⁰₁e (le fluor 18, utilisé en imagerie médicale, devient de l'oxygène 18).",
                "D'autres réactions sont provoquées par une particule projectile. Dans la haute atmosphère, des neutrons issus du rayonnement cosmique frappent des noyaux d'azote et forment du carbone 14 : ¹⁴₇N + ¹₀n → ¹⁴₆C + ¹₁p. Les réactions de fission et de fusion, sources d'énergie des centrales et des étoiles, sont étudiées dans la leçon suivante.",
              ],
            },
            {
              heading: "Physique, chimique ou nucléaire ?",
              paragraphs: [
                "Une transformation physique conserve les espèces chimiques : seul leur état ou leur répartition change, et l'écriture symbolique porte la même formule de part et d'autre (H₂O(s) → H₂O(l), ou une dissolution comme NaCl(s) → Na⁺(aq) + Cl⁻(aq)). Une transformation chimique forme de nouvelles espèces, mais les éléments sont conservés, car les noyaux ne sont pas modifiés (2 H₂ + O₂ → 2 H₂O).",
                "Une transformation nucléaire modifie les noyaux, donc les éléments eux-mêmes : on reconnaît son écriture aux nombres A et Z notés devant les symboles et aux éléments qui diffèrent de part et d'autre de la flèche (²H + ³H → ⁴He + n). Les énergies mises en jeu sont aussi très différentes : faibles pour les transformations physiques, plus grandes pour les transformations chimiques, considérablement plus grandes pour les transformations nucléaires.",
              ],
              box: { label: "À retenir", text: "Physique : mêmes espèces. Chimique : nouvelles espèces, mêmes éléments. Nucléaire : nouveaux noyaux, donc nouveaux éléments ; on conserve A et Z." },
            },
          ],
          keyPoints: [
            "Écriture d'un noyau : A en haut à gauche du symbole, Z en bas à gauche ; Z protons, A nucléons, N = A - Z neutrons.",
            "Isotopes : même Z, A différents (¹²₆C, ¹³₆C, ¹⁴₆C).",
            "Une réaction nucléaire transforme des noyaux et peut changer un élément en un autre.",
            "Lois de conservation : somme des A et somme des Z identiques de part et d'autre.",
            "Particules : ¹₀n, ¹₁p, ⁰₋₁e, ⁰₁e, ⁴₂He.",
            "Physique : mêmes espèces ; chimique : mêmes éléments ; nucléaire : éléments modifiés.",
          ],
          example: {
            statement: "L'uranium 238 est radioactif α : ²³⁸₉₂U → X + ⁴₂He, où X est un noyau de nombre de masse A et de numéro atomique Z. Déterminez A et Z, puis identifiez le noyau X. Données : Z = 90 pour le thorium (Th), Z = 91 pour le protactinium (Pa), Z = 92 pour l'uranium (U).",
            solution: [
              "Conservation du nombre de nucléons : 238 = A + 4, donc A = 234.",
              "Conservation de la charge : 92 = Z + 2, donc Z = 90.",
              "Le noyau qui a 90 protons est un noyau de thorium.",
              "Équation complète : ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.",
              "Vérification : 234 + 4 = 238 et 90 + 2 = 92. L'élément a changé : c'est bien une transformation nucléaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici six noyaux : ¹⁶₈O, ¹⁴₇N, ¹⁸₈O, ¹⁴₆C, ¹²₆C, ¹⁷₈O. 1) Donnez la composition (protons et neutrons) de chacun. 2) Regroupez les isotopes. 3) ¹⁴₇N et ¹⁴₆C sont-ils isotopes ? Justifiez.",
              hint: "Le nombre de protons est Z (en bas), le nombre de neutrons est A - Z. Des isotopes ont le même Z.",
              solution: [
                "1) ¹⁶₈O : 8 protons, 8 neutrons. ¹⁴₇N : 7 protons, 7 neutrons. ¹⁸₈O : 8 protons, 10 neutrons. ¹⁴₆C : 6 protons, 8 neutrons. ¹²₆C : 6 protons, 6 neutrons. ¹⁷₈O : 8 protons, 9 neutrons.",
                "2) Isotopes de l'oxygène (Z = 8) : ¹⁶₈O, ¹⁷₈O, ¹⁸₈O. Isotopes du carbone (Z = 6) : ¹²₆C et ¹⁴₆C.",
                "3) Non : ils ont le même nombre de masse (14) mais pas le même numéro atomique (7 et 6). Ce sont deux éléments différents, l'azote et le carbone.",
              ],
            },
            {
              level: 2,
              statement: "Complétez les équations en déterminant A, Z et la nature de la particule ou du noyau manquant. a) ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ? b) ²¹⁰₈₄Po → ? + ⁴₂He c) ¹⁸₉F → ¹⁸₈O + ? d) ¹³¹₅₃I → ? + ⁰₋₁e. Données (numéros atomiques) : Pb 82 ; Bi 83 ; Po 84 ; Te 52 ; I 53 ; Xe 54.",
              hint: "Écrivez deux égalités : une pour la somme des A, une pour la somme des Z. Une particule avec A = 0 est un électron (Z = -1) ou un positon (Z = +1).",
              solution: [
                "a) A : 60 = 60 + A, donc A = 0 ; Z : 27 = 28 + Z, donc Z = -1. C'est un électron : ⁶⁰₂₇Co → ⁶⁰₂₈Ni + ⁰₋₁e.",
                "b) A : 210 = A + 4, donc A = 206 ; Z : 84 = Z + 2, donc Z = 82, le plomb. ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He.",
                "c) A : 18 = 18 + A, donc A = 0 ; Z : 9 = 8 + Z, donc Z = 1. C'est un positon : ¹⁸₉F → ¹⁸₈O + ⁰₁e.",
                "d) A : 131 = A + 0, donc A = 131 ; Z : 53 = Z - 1, donc Z = 54, le xénon. ¹³¹₅₃I → ¹³¹₅₄Xe + ⁰₋₁e.",
              ],
            },
            {
              level: 3,
              statement: "1) Pour chaque écriture, indiquez s'il s'agit d'une transformation physique, chimique ou nucléaire, en justifiant. a) I₂(s) → I₂(g). b) 2 H₂ + O₂ → 2 H₂O. c) ²₁H + ³₁H → ⁴₂He + ¹₀n. d) NaCl(s) → Na⁺(aq) + Cl⁻(aq). 2) Dans la haute atmosphère, un neutron percute un noyau d'azote ¹⁴₇N ; il se forme un noyau de carbone 14 et une autre particule. Écrivez l'équation de cette réaction et identifiez la particule. 3) Expliquez pourquoi cette dernière transformation ne peut pas être une transformation chimique.",
              hint: "Physique : même espèce des deux côtés ; chimique : nouvelles espèces mais mêmes éléments ; nucléaire : les éléments changent. Pour la question 2, appliquez les deux lois de conservation avec ¹₀n et ¹⁴₆C.",
              solution: [
                "1) a) Même espèce (I₂) des deux côtés, seul l'état change : transformation physique (sublimation).",
                "b) Nouvelle espèce (H₂O) formée, mais les éléments H et O sont conservés : transformation chimique.",
                "c) Les noyaux d'hydrogène deviennent un noyau d'hélium : l'élément change, transformation nucléaire (une fusion).",
                "d) Le sel se disperse en ions qui existaient déjà dans le cristal, sans espèce nouvelle : transformation physique (dissolution).",
                "2) ¹⁴₇N + ¹₀n → ¹⁴₆C + X, où X a pour nombre de masse A et pour numéro atomique Z. A : 14 + 1 = 14 + A, donc A = 1 ; Z : 7 + 0 = 6 + Z, donc Z = 1. La particule est un proton : ¹⁴₇N + ¹₀n → ¹⁴₆C + ¹₁p.",
                "3) Un noyau d'azote est devenu un noyau de carbone : l'élément a changé. Or une transformation chimique conserve les éléments, car elle ne modifie pas les noyaux. C'est donc une transformation nucléaire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque particule à son écriture symbolique.",
            pairs: [
              { left: "Neutron", right: "¹₀n" },
              { left: "Proton", right: "¹₁p" },
              { left: "Électron", right: "⁰₋₁e" },
              { left: "Positon", right: "⁰₁e" },
              { left: "Particule α", right: "⁴₂He" },
            ],
          },
          quiz: [
            {
              q: "Deux noyaux isotopes ont :",
              options: ["le même nombre de neutrons mais pas de protons", "le même nombre de protons mais pas de neutrons", "le même nombre de nucléons mais pas de protons", "le même nombre de nucléons et de neutrons"],
              answer: 1,
              why: "Des isotopes appartiennent au même élément (même Z) mais ont des nombres de neutrons, donc de nucléons, différents.",
            },
            {
              q: "Le noyau ¹⁴₆C contient :",
              options: ["6 protons et 14 neutrons", "14 protons et 6 neutrons", "8 protons et 6 neutrons", "6 protons et 8 neutrons"],
              answer: 3,
              why: "Z = 6 protons et N = A - Z = 14 - 6 = 8 neutrons.",
            },
            {
              q: "Dans ²²⁶₈₈Ra → ²²²₈₆Rn + X, la particule X est :",
              options: ["⁰₋₁e", "⁴₂He", "¹₀n", "¹₁p"],
              answer: 1,
              why: "A = 226 - 222 = 4 et Z = 88 - 86 = 2 : c'est un noyau d'hélium, une particule α.",
            },
            {
              q: "Quelle écriture modélise une transformation nucléaire ?",
              options: ["H₂O(l) → H₂O(g)", "2 H₂ + O₂ → 2 H₂O", "²₁H + ³₁H → ⁴₂He + ¹₀n", "NaCl(s) → Na⁺(aq) + Cl⁻(aq)"],
              answer: 2,
              why: "Les noyaux d'hydrogène deviennent un noyau d'hélium : l'élément change. Les autres écritures sont physiques ou chimiques.",
            },
            {
              q: "Lors d'une réaction nucléaire, qu'est-ce qui se conserve ?",
              options: ["Les éléments chimiques présents", "Le nombre total de nucléons et la charge", "Le nombre de noyaux de chaque élément", "La nature de chacun des noyaux de départ"],
              answer: 1,
              why: "La somme des A (nucléons) et la somme des Z (charge) sont conservées ; les éléments, eux, peuvent changer.",
            },
          ],
          trap: "Confondre les rôles de A et de Z, par exemple dire que ¹⁴₆C contient 14 neutrons, ou croire que deux noyaux de même nombre de masse (¹⁴₇N et ¹⁴₆C) sont isotopes.",
          method: "Pour compléter une équation nucléaire, écrivez systématiquement deux lignes séparées, « somme des A à gauche = somme des A à droite » puis « somme des Z à gauche = somme des Z à droite », résolvez-les, et cherchez seulement ensuite l'élément correspondant à Z.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fission-fusion',
          title: "Fission, fusion et énergie : du Soleil aux centrales",
          minutes: 30,
          objectives: [
            "Distinguer fission et fusion et écrire les équations de ces réactions.",
            "Relier l'énergie convertie dans le Soleil et dans une centrale nucléaire à des réactions nucléaires.",
            "Comparer les ordres de grandeur des énergies mises en jeu dans les transformations physiques, chimiques et nucléaires.",
          ],
          course: [
            {
              heading: "La fission : briser un noyau lourd",
              paragraphs: [
                "Une réaction de fission est une réaction nucléaire au cours de laquelle un noyau lourd, frappé par un neutron, se scinde en deux noyaux plus légers en libérant plusieurs neutrons et de l'énergie. Le noyau le plus utilisé est l'uranium 235. Une fission possible s'écrit ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n. Vérification : nucléons 1 + 235 = 236 et 141 + 92 + 3 = 236 ; charge 92 = 56 + 36.",
                "Le noyau d'uranium 235 peut se scinder de nombreuses façons différentes, par exemple aussi ¹₀n + ²³⁵₉₂U → ⁹⁴₃₈Sr + ¹⁴⁰₅₄Xe + 2 ¹₀n. Dans tous les cas, la fission libère 2 ou 3 neutrons, qui peuvent à leur tour provoquer la fission d'autres noyaux : c'est la réaction en chaîne. Non contrôlée, elle s'emballe, c'est le principe de la bombe atomique ; contrôlée, elle fournit une énergie régulière, c'est le principe des centrales.",
              ],
              box: { label: "Définition", text: "Fission : un noyau lourd (uranium 235, plutonium 239), percuté par un neutron, se scinde en deux noyaux plus légers et libère 2 ou 3 neutrons et de l'énergie." },
            },
            {
              heading: "La centrale nucléaire",
              paragraphs: [
                "Dans le cœur d'un réacteur nucléaire, la réaction en chaîne est maintenue à un rythme constant grâce à des barres de contrôle, qui absorbent une partie des neutrons : on les enfonce pour ralentir la réaction, on les relève pour l'accélérer. L'énergie libérée par les fissions chauffe de l'eau ; on produit de la vapeur qui fait tourner une turbine, couplée à un alternateur qui produit l'électricité. La chaîne des conversions est : énergie nucléaire → énergie thermique → énergie mécanique → énergie électrique.",
                "Les panaches blancs qui s'élèvent des tours de refroidissement ne sont pas des fumées : ce sont des gouttelettes d'eau issues de la liquéfaction de la vapeur. Une centrale nucléaire ne brûle rien et ne rejette pas de dioxyde de carbone pendant son fonctionnement ; elle produit en revanche des déchets radioactifs, dont certains restent dangereux pendant des milliers d'années et doivent être stockés de façon sûre. En France, l'énergie nucléaire fournit environ les deux tiers de l'électricité produite.",
              ],
            },
            {
              heading: "La fusion : l'énergie des étoiles",
              paragraphs: [
                "Une réaction de fusion est une réaction nucléaire au cours de laquelle deux noyaux légers s'unissent pour former un noyau plus lourd, en libérant de l'énergie. Exemple avec deux isotopes de l'hydrogène, le deutérium et le tritium : ²₁H + ³₁H → ⁴₂He + ¹₀n. Les noyaux, chargés positivement, se repoussent : pour qu'ils se rapprochent assez pour fusionner, il faut une agitation énorme, donc une température de plusieurs millions de degrés.",
                "Ces conditions règnent au cœur du Soleil, à environ 15 millions de degrés. Le Soleil y transforme des noyaux d'hydrogène en noyaux d'hélium ; le bilan s'écrit 4 ¹₁H → ⁴₂He + 2 ⁰₁e. C'est cette énergie, transportée jusqu'à nous par le rayonnement, qui éclaire et chauffe la Terre. Sur Terre, la fusion contrôlée reste du domaine de la recherche : le réacteur expérimental international ITER est en construction à Cadarache, dans les Bouches-du-Rhône.",
              ],
              box: { label: "Définition", text: "Fusion : deux noyaux légers (isotopes de l'hydrogène) s'unissent pour former un noyau plus lourd et libèrent de l'énergie. Elle exige des températures de plusieurs millions de degrés." },
            },
            {
              heading: "D'où vient l'énergie, et combien ?",
              paragraphs: [
                "Lors d'une réaction nucléaire, la masse totale des produits est légèrement inférieure à celle des réactifs. Cette perte de masse est convertie en énergie, selon la relation établie par Einstein en 1905 (E = m × c², où c est la vitesse de la lumière dans le vide). Le Soleil perd ainsi environ 4 millions de tonnes de masse chaque seconde, convertis en énergie rayonnée.",
                "Pour une même masse, les énergies libérées n'ont pas du tout le même ordre de grandeur. Changement d'état : environ 10⁵ à 10⁶ J par kilogramme (vaporiser 1 kg d'eau demande 2,26 × 10⁶ J). Combustion : environ 10⁷ J par kilogramme de combustible (5 × 10⁷ J pour le méthane). Fission : environ 8 × 10¹³ J par kilogramme d'uranium 235. Fusion deutérium-tritium : environ 3 × 10¹⁴ J par kilogramme de combustible. Une transformation nucléaire libère donc de l'ordre d'un million de fois plus d'énergie qu'une combustion de même masse.",
              ],
              box: { label: "Repère", text: "Ordres de grandeur pour 1 kg : changement d'état 10⁵ à 10⁶ J ; combustion 10⁷ J ; fission de l'uranium 235 10¹⁴ J (8 × 10¹³ J) ; fusion deutérium-tritium 10¹⁴ J (3 × 10¹⁴ J)." },
            },
          ],
          keyPoints: [
            "Fission : un noyau lourd percuté par un neutron se scinde en deux noyaux plus légers et libère 2 ou 3 neutrons.",
            "Réaction en chaîne : contrôlée par les barres de contrôle dans une centrale.",
            "Centrale : nucléaire → thermique → mécanique (turbine) → électrique (alternateur).",
            "Fusion : deux noyaux légers forment un noyau plus lourd ; elle exige plusieurs millions de degrés.",
            "Le Soleil transforme l'hydrogène en hélium par fusion : 4 ¹₁H → ⁴₂He + 2 ⁰₁e.",
            "À masse égale, une réaction nucléaire libère environ un million de fois plus d'énergie qu'une combustion.",
          ],
          example: {
            statement: "La fission de 1 kg d'uranium 235 libère environ 8 × 10¹³ J, et la combustion de 1 kg de charbon environ 3 × 10⁷ J. Quelle masse de charbon faudrait-il brûler pour libérer autant d'énergie que la fission de 1 kg d'uranium 235 ?",
            solution: [
              "Il faut une masse m de charbon telle que m × 3 × 10⁷ = 8 × 10¹³ J.",
              "m = 8 × 10¹³ ÷ 3 × 10⁷ ≈ 2,7 × 10⁶ kg.",
              "Conversion : 2,7 × 10⁶ kg = 2 700 tonnes.",
              "Réponse : il faudrait brûler environ 2 700 tonnes de charbon, soit plus de deux millions de fois la masse d'uranium.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque équation, vérifiez les lois de conservation, puis dites s'il s'agit d'une fission ou d'une fusion. a) ¹₀n + ²³⁵₉₂U → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n. b) ²₁H + ²₁H → ³₂He + ¹₀n.",
              hint: "Comptez la somme des A et la somme des Z de chaque côté. Un noyau lourd qui se scinde : fission ; deux noyaux légers qui s'unissent : fusion.",
              solution: [
                "a) Nucléons : 1 + 235 = 236 et 141 + 92 + 3 × 1 = 236. Charge : 0 + 92 = 92 et 56 + 36 + 0 = 92. Les deux lois sont respectées.",
                "Un noyau lourd d'uranium se scinde en deux noyaux plus légers : c'est une fission.",
                "b) Nucléons : 2 + 2 = 4 et 3 + 1 = 4. Charge : 1 + 1 = 2 et 2 + 0 = 2. Les deux lois sont respectées.",
                "Deux noyaux légers de deutérium s'unissent en un noyau d'hélium 3 : c'est une fusion.",
              ],
            },
            {
              level: 2,
              statement: "On considère la fission ¹₀n + ²³⁵₉₂U → ¹³⁹₅₄Xe + ⁹⁴₃₈Sr + x ¹₀n. 1) Déterminez le nombre x de neutrons libérés. 2) Vérifiez la conservation de la charge. 3) Expliquez ce qu'est une réaction en chaîne et pourquoi elle est possible ici. 4) Comment la contrôle-t-on dans une centrale nucléaire ?",
              hint: "Appliquez la conservation du nombre de nucléons : chaque neutron compte pour 1. Pour la question 3, comparez le nombre de neutrons consommés et libérés.",
              solution: [
                "1) Nucléons : 1 + 235 = 139 + 94 + x, soit 236 = 233 + x, donc x = 3.",
                "2) Charge : 0 + 92 = 54 + 38 + 3 × 0 = 92. La charge est conservée.",
                "3) La fission consomme 1 neutron et en libère 3. Chacun de ces neutrons peut provoquer la fission d'un autre noyau d'uranium 235, qui libère à son tour des neutrons : le nombre de fissions peut croître très vite, c'est la réaction en chaîne.",
                "4) Des barres de contrôle absorbent une partie des neutrons, de façon qu'en moyenne un seul neutron par fission provoque une nouvelle fission : la réaction se poursuit à rythme constant, sans s'emballer.",
              ],
            },
            {
              level: 3,
              statement: "Un réacteur nucléaire fournit une puissance électrique de 900 MW ; la puissance thermique produite dans son cœur vaut 2 700 MW (données arrondies). Données : fission de 1 kg d'uranium 235 : 8,0 × 10¹³ J ; combustion de 1 kg de charbon : 3,0 × 10⁷ J ; 1 jour = 86 400 s ; E = P × t. 1) Décrivez la chaîne des conversions d'énergie dans la centrale. 2) Calculez son rendement, rapport de la puissance électrique à la puissance thermique. 3) Calculez l'énergie thermique produite en un jour, puis la masse d'uranium 235 qui subit la fission chaque jour. 4) Quelle masse de charbon une centrale thermique de même puissance thermique brûlerait-elle chaque jour ? Commentez. 5) Citez un avantage et un inconvénient de la production d'électricité nucléaire.",
              hint: "Convertissez les mégawatts en watts (1 MW = 10⁶ W) pour obtenir des joules. Ensuite, masse = énergie ÷ énergie libérée par kilogramme.",
              solution: [
                "1) Énergie nucléaire (fissions) → énergie thermique (eau chauffée, vapeur) → énergie mécanique (rotation de la turbine) → énergie électrique (alternateur). Une partie de l'énergie thermique est cédée à l'environnement par le circuit de refroidissement.",
                "2) Rendement = 900 ÷ 2 700 ≈ 0,33, soit environ 33 % : un tiers seulement de l'énergie thermique est converti en électricité.",
                "3) E = P × t = 2 700 × 10⁶ × 86 400 ≈ 2,3 × 10¹⁴ J. Masse d'uranium 235 : 2,3 × 10¹⁴ ÷ 8,0 × 10¹³ ≈ 2,9 kg par jour.",
                "4) Masse de charbon : 2,3 × 10¹⁴ ÷ 3,0 × 10⁷ ≈ 7,8 × 10⁶ kg, soit environ 7 800 tonnes par jour. Il faudrait des milliers de tonnes de charbon pour remplacer environ 3 kg d'uranium 235 : à masse égale, la fission libère des millions de fois plus d'énergie que la combustion.",
                "5) Avantage : pas d'émission de dioxyde de carbone pendant le fonctionnement et très peu de combustible consommé. Inconvénient : production de déchets radioactifs à stocker sur de très longues durées, et nécessité d'une sûreté très rigoureuse.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : fission, fusion et énergie nucléaire.",
            statements: [
              { text: "Une fission libère des neutrons capables de provoquer d'autres fissions.", true: true, why: "C'est le principe de la réaction en chaîne." },
              { text: "Les centrales nucléaires françaises produisent leur énergie par fusion.", true: false, why: "Elles utilisent la fission de l'uranium 235 ; la fusion contrôlée est encore expérimentale (ITER)." },
              { text: "Le Soleil brille grâce à la combustion de l'hydrogène.", true: false, why: "Il n'y a pas de combustion : ce sont des réactions de fusion nucléaire de l'hydrogène en hélium." },
              { text: "Les produits d'une réaction nucléaire ont une masse légèrement inférieure à celle des réactifs.", true: true, why: "Cette perte de masse est convertie en énergie." },
              { text: "Le panache blanc d'une tour de refroidissement est une fumée de combustion.", true: false, why: "Ce sont des gouttelettes d'eau issues de la liquéfaction de la vapeur : une centrale nucléaire ne brûle rien." },
              { text: "La fusion exige des températures de plusieurs millions de degrés.", true: true, why: "Il faut une agitation énorme pour que les noyaux, qui se repoussent, puissent fusionner." },
              { text: "À masse égale, une fission libère à peu près autant d'énergie qu'une combustion.", true: false, why: "Elle en libère de l'ordre d'un million de fois plus." },
            ],
          },
          quiz: [
            {
              q: "Une réaction de fission, c'est :",
              options: ["deux noyaux légers qui s'unissent en un noyau plus lourd", "un noyau qui émet spontanément un électron", "un noyau lourd qui se scinde en deux noyaux plus légers", "une molécule qui se casse en atomes sous l'effet de la chaleur"],
              answer: 2,
              why: "Dans une fission, un noyau lourd percuté par un neutron se scinde en deux noyaux plus légers, en libérant des neutrons et de l'énergie.",
            },
            {
              q: "L'énergie rayonnée par le Soleil provient :",
              options: ["de la combustion du dihydrogène avec le dioxygène", "de la fission de noyaux d'uranium dans son cœur", "de la fusion de noyaux d'hydrogène en hélium", "de réactions chimiques entre les gaz de sa surface"],
              answer: 2,
              why: "Au cœur du Soleil, à environ 15 millions de degrés, des noyaux d'hydrogène fusionnent pour former des noyaux d'hélium.",
            },
            {
              q: "Dans une centrale nucléaire, les barres de contrôle servent à :",
              options: ["absorber une partie des neutrons", "refroidir l'eau du circuit secondaire", "produire les neutrons de départ", "transformer la chaleur en électricité"],
              answer: 0,
              why: "En absorbant des neutrons, elles limitent le nombre de fissions et maintiennent la réaction en chaîne à un rythme constant.",
            },
            {
              q: "À masse égale, la fission de l'uranium 235 libère, par rapport à la combustion du charbon :",
              options: ["à peu près autant d'énergie, à quelques pourcents près", "environ 10 fois plus d'énergie", "environ 1 000 fois moins d'énergie", "environ un million de fois plus d'énergie"],
              answer: 3,
              why: "8 × 10¹³ J contre 3 × 10⁷ J par kilogramme : le rapport est de l'ordre de 10⁶.",
            },
            {
              q: "Pourquoi la fusion nécessite-t-elle des températures très élevées ?",
              options: ["Pour faire fondre les noyaux avant qu'ils ne s'unissent", "Pour que les noyaux, qui se repoussent, puissent se rapprocher", "Pour allumer la combustion de l'hydrogène dans le dioxygène", "Pour produire les neutrons qui déclenchent la fission"],
              answer: 1,
              why: "Les noyaux, chargés positivement, se repoussent : seule une agitation énorme, donc une température de millions de degrés, leur permet de fusionner.",
            },
          ],
          trap: "Confondre fission et fusion (croire que le Soleil fonctionne comme une centrale, ou l'inverse) et penser que le Soleil « brûle » : il n'y a aucune combustion, mais des réactions nucléaires de fusion.",
          method: "Retenez fission et fusion par leur sens : fission comme « fissure » (un gros noyau se casse), fusion comme « fusionner » (deux petits noyaux s'unissent). Pour un calcul d'énergie, posez masse = énergie ÷ énergie par kilogramme et vérifiez l'ordre de grandeur obtenu.",
        },
      ],
    },
    /* ==================================================================== */
    /* DÉCRIRE UN MOUVEMENT                                                  */
    /* ==================================================================== */
    {
      id: 'decrire-mouvement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'systeme-referentiel',
          title: "Système, référentiel et relativité du mouvement",
          minutes: 25,
          objectives: [
            "Identifier les échelles temporelles et spatiales pertinentes de description d'un mouvement.",
            "Choisir un référentiel pour décrire le mouvement d'un système.",
            "Expliquer, dans le cas de la translation, l'influence du choix du référentiel sur la description du mouvement d'un système.",
            "Décrire le mouvement d'un système par celui d'un point et caractériser cette modélisation en termes de perte d'informations.",
          ],
          course: [
            {
              heading: "Le système et les échelles de description",
              paragraphs: [
                "Pour étudier un mouvement, on commence par définir le système : l'objet, ou l'ensemble d'objets, dont on étudie le mouvement. Tout le reste constitue le milieu extérieur. Le système peut être une bille, un cycliste avec son vélo, un satellite ou une planète.",
                "Les mouvements étudiés en physique couvrent des échelles très différentes. Dans l'espace, des dimensions d'un noyau (environ 10⁻¹⁵ m) ou d'un atome (10⁻¹⁰ m) jusqu'à la distance Terre-Soleil (1,5 × 10¹¹ m) et à la taille d'une galaxie (environ 10²¹ m). Dans le temps, d'une fraction de seconde (le service d'un joueur de tennis) à une année (la révolution de la Terre autour du Soleil, environ 3,2 × 10⁷ s), et bien au-delà. Choisir l'échelle pertinente, c'est retenir les distances et les durées qui permettent de bien observer le mouvement : on décrit un sprint au dixième de seconde et au mètre, l'orbite de la Terre au mois et au million de kilomètres.",
              ],
            },
            {
              heading: "Modéliser le système par un point",
              paragraphs: [
                "Pour simplifier, on décrit souvent le mouvement d'un système par celui d'un seul de ses points, en général son centre. Ce modèle est d'autant plus pertinent que les dimensions du système sont petites devant les distances parcourues : pour étudier le mouvement de la Terre autour du Soleil, on peut la réduire à un point, car son diamètre (environ 1,3 × 10⁴ km) est très petit devant la distance Terre-Soleil (1,5 × 10⁸ km).",
                "Ce modèle a un prix : il fait perdre des informations. Un ballon de football modélisé par un point ne tourne plus sur lui-même ; on perd aussi l'orientation du système et ses déformations. Pour étudier l'effet d'un ballon brossé ou la rotation de la Terre sur elle-même (qui fait alterner le jour et la nuit), le modèle du point ne suffit plus.",
                "La trajectoire d'un point est l'ensemble des positions successives qu'il occupe au cours du temps. Elle peut être rectiligne (une droite), circulaire (un cercle ou un arc de cercle) ou curviligne (une courbe quelconque).",
              ],
              box: { label: "Définition", text: "Trajectoire : ensemble des positions successives occupées par un point au cours du temps. Elle est rectiligne, circulaire ou curviligne." },
            },
            {
              heading: "Le référentiel",
              paragraphs: [
                "Un mouvement se décrit toujours par rapport à un objet de référence. Un référentiel est un objet de référence, auquel on associe un repère d'espace (une origine et des axes pour repérer les positions) et une horloge (pour mesurer les durées). Les trois référentiels les plus utilisés sont le référentiel terrestre (le sol, la salle de classe), adapté aux mouvements qui se déroulent à la surface de la Terre sur de courtes durées ; le référentiel géocentrique (centre de la Terre et trois étoiles lointaines), adapté à l'étude de la Lune et des satellites artificiels ; le référentiel héliocentrique (centre du Soleil et trois étoiles lointaines), adapté à l'étude des planètes et des comètes.",
                "Le choix du référentiel n'est pas une question de vérité mais de commodité. Dans le référentiel géocentrique, le Soleil tourne autour de la Terre ; dans le référentiel héliocentrique, c'est la Terre qui tourne autour du Soleil. Les deux descriptions sont correctes, mais la seconde est beaucoup plus simple pour décrire l'ensemble du système solaire.",
              ],
              box: { label: "Définition", text: "Un référentiel est un objet de référence muni d'un repère d'espace et d'une horloge. Un mouvement n'a de sens que si l'on précise le référentiel dans lequel on le décrit." },
            },
            {
              heading: "La relativité du mouvement : le cas de la translation",
              paragraphs: [
                "Le mouvement dépend du référentiel. Un voyageur assis dans un train est immobile dans le référentiel du train, mais en mouvement dans le référentiel terrestre. Lorsque le train roule en ligne droite, chaque segment du wagon garde la même direction : le référentiel du train est en translation par rapport au sol. Si le voyageur marche vers l'avant à 5 km/h par rapport au train qui roule à 120 km/h, sa vitesse par rapport au sol vaut 120 + 5 = 125 km/h ; s'il marche vers l'arrière, elle vaut 120 - 5 = 115 km/h.",
                "La trajectoire dépend aussi du référentiel. Si le voyageur lâche une balle alors que le train roule à vitesse constante en ligne droite, il la voit tomber verticalement à ses pieds ; une personne immobile sur le quai voit au contraire la balle avancer avec le train pendant sa chute et décrire une courbe. De même, la valve d'une roue de vélo décrit un cercle dans le référentiel du cadre du vélo, mais une courbe en arches successives (une cycloïde) dans le référentiel terrestre.",
              ],
              box: { label: "À retenir", text: "Immobilité, vitesse et trajectoire dépendent du référentiel. Pour un référentiel en translation rectiligne, les vitesses de même direction s'ajoutent ou se retranchent selon leur sens." },
            },
          ],
          keyPoints: [
            "Système : l'objet étudié ; on choisit des échelles d'espace et de temps adaptées à son mouvement.",
            "Modéliser le système par un point simplifie l'étude mais fait perdre la rotation, l'orientation et les déformations.",
            "Trajectoire : ensemble des positions successives d'un point (rectiligne, circulaire, curviligne).",
            "Référentiel : objet de référence + repère d'espace + horloge.",
            "Terrestre : objets sur Terre ; géocentrique : Lune, satellites ; héliocentrique : planètes, comètes.",
            "Le mouvement est relatif : vitesse et trajectoire dépendent du référentiel choisi.",
          ],
          example: {
            statement: "Un train roule en ligne droite à vitesse constante, 120 km/h par rapport au sol. Un voyageur, assis, lâche une balle au-dessus de ses pieds. 1) Le voyageur est-il immobile ? 2) Décrivez la trajectoire de la balle dans le référentiel du train, puis dans le référentiel terrestre.",
            solution: [
              "1) Dans le référentiel du train, la position du voyageur ne change pas : il est immobile.",
              "Dans le référentiel terrestre, il se déplace avec le train à 120 km/h : il est en mouvement. La question n'a donc de sens que si l'on précise le référentiel.",
              "2) Dans le référentiel du train, la balle tombe verticalement et touche le plancher juste sous le point de lâcher : sa trajectoire est rectiligne et verticale.",
              "Dans le référentiel terrestre, la balle avance avec le train tout en tombant : sa trajectoire est une courbe.",
              "Conclusion : l'état de repos ou de mouvement et la forme de la trajectoire dépendent du référentiel choisi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez le référentiel le plus adapté (terrestre, géocentrique ou héliocentrique) pour étudier : a) la chute d'une pomme ; b) le mouvement de la Lune autour de la Terre ; c) le mouvement de Mars autour du Soleil ; d) le mouvement d'un satellite de positionnement GPS ; e) la descente d'un skieur sur une piste.",
              hint: "Demandez-vous autour de quel astre se fait le mouvement, ou s'il se déroule simplement à la surface de la Terre sur une courte durée.",
              solution: [
                "a) Mouvement à la surface de la Terre, de courte durée : référentiel terrestre.",
                "b) La Lune tourne autour de la Terre : référentiel géocentrique.",
                "c) Mars tourne autour du Soleil : référentiel héliocentrique.",
                "d) Un satellite tourne autour de la Terre : référentiel géocentrique.",
                "e) Mouvement à la surface de la Terre : référentiel terrestre.",
              ],
            },
            {
              level: 2,
              statement: "Un train roule en ligne droite à 90 km/h par rapport aux rails (données fictives). Un contrôleur se déplace dans le couloir. Donnez la vitesse du contrôleur par rapport au train, puis par rapport aux rails, lorsqu'il : a) est assis ; b) marche à 4 km/h vers l'avant du train ; c) marche à 4 km/h vers l'arrière du train. d) Convertissez la vitesse du train en m/s.",
              hint: "Le référentiel du train est en translation rectiligne par rapport aux rails : les vitesses de même direction s'ajoutent si elles sont de même sens et se retranchent sinon. Pour convertir des km/h en m/s, divisez par 3,6.",
              solution: [
                "a) Assis : 0 km/h par rapport au train ; 90 km/h par rapport aux rails.",
                "b) Vers l'avant : 4 km/h par rapport au train ; 90 + 4 = 94 km/h par rapport aux rails.",
                "c) Vers l'arrière : 4 km/h par rapport au train ; 90 - 4 = 86 km/h par rapport aux rails, toujours vers l'avant du train.",
                "d) 90 km/h = 90 ÷ 3,6 = 25 m/s (car 1 km/h = 1 000 m ÷ 3 600 s).",
              ],
            },
            {
              level: 3,
              statement: "Un satellite géostationnaire reste en permanence à la verticale du même point de l'équateur, à une altitude h = 35 800 km. Données : rayon de la Terre R = 6 370 km ; dans le référentiel géocentrique, le satellite décrit un cercle centré sur le centre de la Terre en une durée de 24 h environ (valeur arrondie). 1) Décrivez le mouvement du satellite dans le référentiel terrestre, puis dans le référentiel géocentrique. 2) Calculez le rayon de son orbite, puis la distance qu'il parcourt en un tour. 3) Déduisez-en sa vitesse dans le référentiel géocentrique, en km/h puis en m/s. 4) Est-il légitime de modéliser ce satellite, long de quelques mètres, par un point ? Quelle information perd-on ?",
              hint: "Le rayon de l'orbite se mesure depuis le centre de la Terre : r = R + h. Périmètre d'un cercle : 2πr. Vitesse moyenne = distance ÷ durée.",
              solution: [
                "1) Dans le référentiel terrestre, le satellite reste au-dessus du même point du sol : il est immobile. Dans le référentiel géocentrique, il décrit un cercle autour du centre de la Terre à vitesse constante : son mouvement est circulaire et uniforme.",
                "2) r = R + h = 6 370 + 35 800 = 42 170 km. Distance parcourue en un tour : d = 2πr = 2 × π × 42 170 ≈ 2,65 × 10⁵ km.",
                "3) v = d ÷ Δt = 2,65 × 10⁵ ÷ 24 ≈ 1,10 × 10⁴ km/h. En m/s : 1,10 × 10⁴ ÷ 3,6 ≈ 3,07 × 10³ m/s, soit environ 3,1 km/s.",
                "4) Oui : quelques mètres sont négligeables devant le rayon de l'orbite (plus de 42 000 km). Mais on perd l'orientation du satellite (vers où pointent ses antennes et ses panneaux solaires), qui compte pour son fonctionnement.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : système, référentiel et relativité du mouvement.",
            statements: [
              { text: "Un passager assis dans un avion en vol est immobile dans tous les référentiels.", true: false, why: "Il est immobile dans le référentiel de l'avion, mais en mouvement dans le référentiel terrestre." },
              { text: "La trajectoire d'un point dépend du référentiel choisi.", true: true, why: "La valve d'une roue décrit un cercle par rapport au cadre du vélo, mais une cycloïde par rapport au sol." },
              { text: "Le référentiel géocentrique est adapté à l'étude du mouvement de la Lune.", true: true, why: "La Lune tourne autour de la Terre : on la décrit par rapport au centre de la Terre." },
              { text: "Modéliser un ballon par un point permet de décrire sa rotation sur lui-même.", true: false, why: "Un point ne tourne pas sur lui-même : ce modèle fait perdre l'information sur la rotation." },
              { text: "On peut modéliser la Terre par un point pour étudier son mouvement autour du Soleil.", true: true, why: "Son diamètre (environ 1,3 × 10⁴ km) est très petit devant la distance Terre-Soleil (1,5 × 10⁸ km)." },
              { text: "Dans le référentiel géocentrique, le Soleil tourne autour de la Terre.", true: true, why: "C'est correct dans ce référentiel ; le référentiel héliocentrique est simplement plus commode pour décrire les planètes." },
              { text: "Un référentiel, c'est seulement un repère formé d'axes gradués.", true: false, why: "Un référentiel est un objet de référence, muni d'un repère d'espace et d'une horloge." },
            ],
          },
          quiz: [
            {
              q: "Quel référentiel est le plus adapté pour étudier le mouvement d'un satellite autour de la Terre ?",
              options: ["Le référentiel terrestre", "Le référentiel géocentrique", "Le référentiel héliocentrique"],
              answer: 1,
              why: "Le satellite tourne autour de la Terre : on le décrit par rapport au centre de la Terre, dans le référentiel géocentrique.",
            },
            {
              q: "Un passager assis dans un TGV en marche est :",
              options: ["immobile par rapport au sol", "en mouvement par rapport au TGV", "immobile par rapport au TGV", "en mouvement dans tous les référentiels"],
              answer: 2,
              why: "Sa position ne change pas par rapport au TGV ; par rapport au sol, il est en mouvement.",
            },
            {
              q: "Modéliser un système par un point fait perdre l'information sur :",
              options: ["la position du système à chaque instant", "la rotation du système sur lui-même", "la trajectoire suivie par son centre au cours du temps", "la durée totale de son mouvement"],
              answer: 1,
              why: "Le point garde la position et la trajectoire du centre, mais un point ne peut pas tourner sur lui-même.",
            },
            {
              q: "Un train roule en ligne droite à 100 km/h. Un voyageur marche vers l'arrière à 5 km/h par rapport au train. Sa vitesse par rapport au sol vaut :",
              options: ["105 km/h", "5 km/h", "95 km/h", "100 km/h"],
              answer: 2,
              why: "Les deux vitesses ont la même direction mais des sens opposés : 100 - 5 = 95 km/h.",
            },
            {
              q: "Quel est l'ordre de grandeur de la distance Terre-Soleil ?",
              options: ["10⁶ m", "10⁸ m", "10¹⁴ m", "10¹¹ m"],
              answer: 3,
              why: "La distance Terre-Soleil vaut environ 1,5 × 10⁸ km, soit 1,5 × 10¹¹ m.",
            },
          ],
          trap: "Affirmer qu'un objet « est immobile » ou « se déplace à telle vitesse » sans préciser le référentiel, ou confondre le référentiel avec un simple repère d'axes.",
          method: "Commencez toute étude de mouvement par deux phrases écrites : « Système étudié : ... » et « Référentiel choisi : ... ». Justifiez ensuite le choix du référentiel par l'astre ou l'objet autour duquel, ou par rapport auquel, se fait le mouvement.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vecteur-vitesse',
          title: "Vecteur déplacement et vecteur vitesse",
          minutes: 35,
          objectives: [
            "Définir le vecteur vitesse moyenne d'un point.",
            "Approcher le vecteur vitesse d'un point à l'aide du vecteur déplacement MM', où M et M' sont les positions successives à des instants voisins séparés de Δt.",
            "Représenter des vecteurs vitesse à partir d'une chronophotographie, à une échelle donnée.",
            "Représenter des vecteurs vitesse d'un point à l'aide d'un langage de programmation.",
          ],
          course: [
            {
              heading: "Le vecteur déplacement",
              paragraphs: [
                "Dans un référentiel muni d'un repère, la position d'un point M à un instant t est repérée par ses coordonnées (x ; y). Si le point passe de la position M à l'instant t à la position M' à l'instant t', on appelle vecteur déplacement le vecteur MM'⃗. Comme tout vecteur, il est caractérisé par une direction (celle de la droite MM'), un sens (de M vers M') et une norme (la longueur MM', en mètres).",
                "Le vecteur déplacement ne décrit pas le chemin suivi : si la trajectoire est courbe, la distance réellement parcourue entre M et M' est plus grande que la longueur MM'. Plus les instants t et t' sont proches, plus M et M' sont proches et plus la longueur MM' se rapproche de la distance parcourue.",
              ],
            },
            {
              heading: "Vitesse moyenne et vecteur vitesse moyenne",
              paragraphs: [
                "La vitesse moyenne d'un point est le quotient de la distance d parcourue par la durée Δt du parcours : v = d ÷ Δt. Dans le Système international, elle s'exprime en mètres par seconde (m/s ou m·s⁻¹). Comme 1 km = 1 000 m et 1 h = 3 600 s, on a 1 m/s = 3,6 km/h : pour passer des km/h aux m/s, on divise par 3,6 (72 km/h = 20 m/s), et pour l'inverse on multiplie par 3,6.",
                "Le vecteur vitesse moyenne entre les instants t et t' est le vecteur v⃗(moy) = MM'⃗ ÷ Δt, avec Δt = t' - t. Il a la même direction et le même sens que le vecteur déplacement MM'⃗, et pour norme MM' ÷ Δt. Il ne renseigne que sur le déplacement global entre les deux instants, pas sur ce qui s'est passé entre eux.",
              ],
            },
            {
              heading: "Le vecteur vitesse en un point",
              paragraphs: [
                "Pour connaître la vitesse à un instant précis, on choisit une durée Δt très courte : la position suivante M' est alors très proche de M. Le vecteur vitesse au point M est approché par v⃗ ≈ MM'⃗ ÷ Δt. Sur une chronophotographie, où les positions M₀, M₁, M₂... sont enregistrées à intervalles de temps réguliers Δt, on approche le vecteur vitesse au point Mᵢ par le vecteur Mᵢ Mᵢ₊₁ (vecteur déplacement vers la position suivante) divisé par Δt.",
                "Le vecteur vitesse au point Mᵢ a pour origine le point Mᵢ ; pour direction la tangente à la trajectoire en ce point, approchée par la droite (Mᵢ Mᵢ₊₁) ; pour sens celui du mouvement ; pour norme la valeur de la vitesse vᵢ = Mᵢ Mᵢ₊₁ ÷ Δt, exprimée en m/s.",
              ],
              box: { label: "Formule", text: "Vecteur vitesse au point Mᵢ : v⃗ᵢ ≈ (vecteur Mᵢ Mᵢ₊₁) ÷ Δt. Origine Mᵢ, direction tangente à la trajectoire, sens du mouvement, valeur vᵢ = Mᵢ Mᵢ₊₁ ÷ Δt (en m/s si la distance est en m et Δt en s)." },
            },
            {
              heading: "Représenter des vecteurs vitesse",
              paragraphs: [
                "Un vecteur vitesse se représente par une flèche, à une échelle choisie, par exemple 1 cm pour 0,5 m/s. La longueur de la flèche vaut la valeur de la vitesse divisée par la valeur associée à 1 cm : une vitesse de 2,0 m/s est représentée, à cette échelle, par une flèche de 2,0 ÷ 0,5 = 4,0 cm. Sur une chronophotographie, il faut d'abord convertir les distances mesurées sur le document en distances réelles, grâce à l'échelle du document.",
                "Un programme en Python peut faire ces calculs pour toutes les positions. Avec les listes x et y des coordonnées (en m) et la durée dt entre deux positions (en s), une boucle for i in range(len(x) - 1) calcule vx = (x[i+1] - x[i]) / dt et vy = (y[i+1] - y[i]) / dt, puis l'instruction plt.quiver(x[i], y[i], vx, vy) de la bibliothèque matplotlib trace la flèche du vecteur vitesse au point d'indice i. La boucle s'arrête à l'avant-dernière position, car la dernière n'a pas de position suivante.",
              ],
              box: { label: "Méthode", text: "Mesurer Mᵢ Mᵢ₊₁ sur le document, convertir en distance réelle, calculer vᵢ = Mᵢ Mᵢ₊₁ ÷ Δt, calculer la longueur de la flèche avec l'échelle des vitesses, tracer la flèche depuis Mᵢ vers Mᵢ₊₁." },
            },
          ],
          keyPoints: [
            "Vecteur déplacement MM'⃗ : direction (MM'), sens de M vers M', norme MM'.",
            "Vitesse moyenne : v = d ÷ Δt ; 1 m/s = 3,6 km/h.",
            "Vecteur vitesse au point Mᵢ : vecteur Mᵢ Mᵢ₊₁ divisé par Δt, avec Δt petit.",
            "Origine Mᵢ, direction tangente à la trajectoire, sens du mouvement, valeur vᵢ = Mᵢ Mᵢ₊₁ ÷ Δt.",
            "Longueur de la flèche = valeur de la vitesse ÷ valeur représentée par 1 cm.",
            "En Python : vx = (x[i+1] - x[i]) / dt et vy = (y[i+1] - y[i]) / dt, pour i allant jusqu'à l'avant-dernière position.",
          ],
          example: {
            statement: "Sur la chronophotographie d'une balle, les positions sont enregistrées toutes les 40 ms. On mesure M₃M₄ = 2,4 cm sur le document, dont l'échelle est 1 cm sur le document pour 10 cm en réalité. Calculez la valeur v₃ de la vitesse au point M₃, puis la longueur de la flèche qui la représente à l'échelle 1 cm pour 2,0 m/s.",
            solution: [
              "Distance réelle : M₃M₄ = 2,4 × 10 = 24 cm = 0,24 m.",
              "Durée entre deux positions : Δt = 40 ms = 0,040 s.",
              "v₃ = M₃M₄ ÷ Δt = 0,24 ÷ 0,040 = 6,0 m/s.",
              "Longueur de la flèche : 6,0 ÷ 2,0 = 3,0 cm.",
              "On trace une flèche de 3,0 cm, d'origine M₃, dirigée selon la droite (M₃M₄), dans le sens du mouvement (de M₃ vers M₄).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Sur un enregistrement, deux positions successives M₅ et M₆ d'un cycliste sont séparées de 0,18 m en réalité, et la durée entre deux positions est Δt = 0,060 s. 1) Calculez la valeur v₅ de la vitesse au point M₅ en m/s, puis en km/h. 2) Quelle est la longueur de la flèche représentant ce vecteur à l'échelle 1 cm pour 1,0 m/s ?",
              hint: "v₅ = M₅M₆ ÷ Δt ; pour passer en km/h, multipliez par 3,6.",
              solution: [
                "1) v₅ = 0,18 ÷ 0,060 = 3,0 m/s.",
                "En km/h : 3,0 × 3,6 = 10,8 km/h.",
                "2) Longueur de la flèche : 3,0 ÷ 1,0 = 3,0 cm, tracée depuis M₅ en direction de M₆.",
              ],
            },
            {
              level: 2,
              statement: "Une balle lancée vers le haut est filmée ; on relève ses positions toutes les Δt = 0,10 s dans un repère (coordonnées en cm, données fictives) : M₁ (0 ; 0), M₂ (30 ; 40), M₃ (60 ; 70), M₄ (90 ; 90). 1) Calculez les longueurs M₁M₂, M₂M₃ et M₃M₄. 2) Déduisez-en les valeurs v₁, v₂ et v₃ de la vitesse aux points M₁, M₂ et M₃, en m/s. 3) Décrivez l'évolution du vecteur vitesse (direction et valeur) entre M₁ et M₃.",
              hint: "Longueur d'un segment : √((x₂ - x₁)² + (y₂ - y₁)²), d'après le théorème de Pythagore. Convertissez les cm en m avant de diviser par Δt.",
              solution: [
                "1) M₁M₂ = √(30² + 40²) = √2 500 = 50 cm. M₂M₃ = √(30² + 30²) = √1 800 ≈ 42,4 cm. M₃M₄ = √(30² + 20²) = √1 300 ≈ 36,1 cm.",
                "2) v₁ = 0,50 ÷ 0,10 = 5,0 m/s ; v₂ = 0,424 ÷ 0,10 ≈ 4,2 m/s ; v₃ = 0,361 ÷ 0,10 ≈ 3,6 m/s.",
                "3) La valeur de la vitesse diminue (5,0 puis 4,2 puis 3,6 m/s) : la balle ralentit en montant.",
                "La direction change aussi : les déplacements (30 ; 40), puis (30 ; 30), puis (30 ; 20) sont de moins en moins inclinés vers le haut. La trajectoire est courbe et le vecteur vitesse n'est pas constant.",
              ],
            },
            {
              level: 3,
              statement: "Un élève étudie le mouvement d'un palet avec le programme Python suivant (une instruction par ligne). Ligne 1 : from math import sqrt. Ligne 2 : dt = 0.2. Ligne 3 : x = [0.0, 0.8, 1.6, 2.4, 3.2]. Ligne 4 : y = [0.0, 0.6, 1.2, 1.8, 2.4]. Ligne 5 : for i in range(len(x) - 1):. Ligne 6 : vx = (x[i+1] - x[i]) / dt. Ligne 7 : vy = (y[i+1] - y[i]) / dt. Ligne 8 : v = .... Ligne 9 : print(i, vx, vy, v). Les coordonnées sont en mètres et dt en secondes. 1) Que représentent vx et vy ? 2) Pourquoi la boucle utilise-t-elle range(len(x) - 1) et non range(len(x)) ? 3) Complétez la ligne 8 pour calculer la valeur de la vitesse. 4) Calculez vx, vy et v pour i = 0. 5) Les résultats sont identiques pour toutes les valeurs de i. Que peut-on en conclure sur la trajectoire et sur la vitesse du palet ?",
              hint: "vx et vy sont les coordonnées du vecteur vitesse. La valeur d'un vecteur de coordonnées (vx ; vy) se calcule avec le théorème de Pythagore. Que vaut x[i+1] pour le dernier indice ?",
              solution: [
                "1) vx et vy sont les coordonnées du vecteur vitesse au point d'indice i, calculées à partir du vecteur déplacement vers la position suivante divisé par dt.",
                "2) Pour la dernière position (i = 4), il n'existe pas de position suivante x[5] : le programme provoquerait une erreur. On s'arrête donc à l'avant-dernière position.",
                "3) Ligne 8 : v = sqrt(vx**2 + vy**2).",
                "4) Pour i = 0 : vx = (0,8 - 0,0) ÷ 0,2 = 4,0 m/s ; vy = (0,6 - 0,0) ÷ 0,2 = 3,0 m/s ; v = √(4,0² + 3,0²) = √25 = 5,0 m/s.",
                "5) Le vecteur vitesse garde les mêmes coordonnées, donc la même direction, le même sens et la même valeur : le palet a un mouvement rectiligne (les points sont alignés, y = 0,75 x) et uniforme, à 5,0 m/s.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour représenter le vecteur vitesse au point Mᵢ d'une chronophotographie.",
            items: [
              "Mesurer la longueur Mᵢ Mᵢ₊₁ sur le document",
              "Convertir cette longueur en distance réelle avec l'échelle du document",
              "Calculer la valeur vᵢ = Mᵢ Mᵢ₊₁ ÷ Δt",
              "Calculer la longueur de la flèche avec l'échelle des vitesses",
              "Tracer la flèche depuis Mᵢ, dans la direction de Mᵢ₊₁ et le sens du mouvement",
            ],
          },
          quiz: [
            {
              q: "Le vecteur vitesse d'un point a pour direction :",
              options: ["la verticale du lieu, quel que soit le mouvement", "la droite qui relie le point à l'origine du repère", "la perpendiculaire à la trajectoire en ce point", "la tangente à la trajectoire en ce point"],
              answer: 3,
              why: "Le vecteur vitesse est tangent à la trajectoire ; on l'approche par la droite qui joint la position à la position suivante.",
            },
            {
              q: "Deux positions successives sont séparées de 0,50 m et de Δt = 0,10 s. La valeur de la vitesse vaut :",
              options: ["0,050 m/s", "5,0 m/s", "50 m/s", "0,20 m/s"],
              answer: 1,
              why: "v = 0,50 ÷ 0,10 = 5,0 m/s.",
            },
            {
              q: "Une vitesse de 36 km/h correspond à :",
              options: ["10 m/s", "3,6 m/s", "129,6 m/s", "100 m/s"],
              answer: 0,
              why: "On divise par 3,6 : 36 ÷ 3,6 = 10 m/s.",
            },
            {
              q: "À l'échelle 1 cm pour 2 m/s, une vitesse de 7 m/s est représentée par une flèche de :",
              options: ["14 cm", "7 cm", "3,5 cm", "2 cm"],
              answer: 2,
              why: "Longueur = 7 ÷ 2 = 3,5 cm.",
            },
            {
              q: "Lors d'un mouvement circulaire à vitesse de valeur constante, le vecteur vitesse :",
              options: ["est constant, puisque la valeur de la vitesse ne change jamais au cours du tour", "change de direction à chaque instant, sa valeur restant la même", "est nul, puisque le point revient à sa position de départ", "a une valeur qui augmente régulièrement au cours du temps"],
              answer: 1,
              why: "Le vecteur vitesse reste tangent au cercle : sa direction change sans cesse, même si sa valeur est constante.",
            },
          ],
          trap: "Confondre la valeur de la vitesse et le vecteur vitesse : un vecteur vitesse peut changer (de direction) alors que la valeur de la vitesse reste constante, comme dans un virage pris à vitesse constante.",
          method: "Pour tracer un vecteur vitesse, écrivez d'abord ses quatre caractéristiques (origine, direction, sens, valeur), puis convertissez la valeur en longueur avec l'échelle. Vérifiez enfin les unités : distances en mètres, durées en secondes, vitesses en m/s.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mouvements-rectilignes',
          title: "Mouvements rectilignes uniformes, accélérés ou ralentis",
          minutes: 30,
          objectives: [
            "Caractériser un mouvement rectiligne uniforme ou non uniforme (accéléré, ralenti).",
            "Exploiter une chronophotographie pour décrire la variation du vecteur vitesse.",
            "Calculer une vitesse, une distance ou une durée dans le cas d'un mouvement rectiligne uniforme.",
          ],
          course: [
            {
              heading: "Le mouvement rectiligne",
              paragraphs: [
                "Un mouvement est rectiligne lorsque la trajectoire du point étudié est une portion de droite : une bille qui roule sur un rail droit, une voiture sur une route rectiligne, une pomme qui tombe verticalement. Le vecteur vitesse, toujours tangent à la trajectoire, garde alors la même direction : celle de la droite. Seules sa valeur et, éventuellement, son sens peuvent changer.",
                "Sur une chronophotographie, les positions successives d'un point en mouvement rectiligne sont alignées. L'écart entre deux positions successives, prises à intervalles de temps égaux Δt, renseigne sur la valeur de la vitesse : plus l'écart est grand, plus le point va vite.",
              ],
            },
            {
              heading: "Le mouvement rectiligne uniforme",
              paragraphs: [
                "Un mouvement est uniforme lorsque la valeur de la vitesse est constante. Un mouvement rectiligne uniforme est donc un mouvement en ligne droite à vitesse de valeur constante : les positions successives sont alignées et également espacées. Le vecteur vitesse est alors constant : même direction, même sens, même valeur à chaque instant.",
                "Dans ce cas, la distance parcourue est proportionnelle à la durée : d = v × Δt. Une voiture qui roule à 25 m/s (90 km/h) parcourt 25 m chaque seconde, 250 m en 10 s et 1,5 km en une minute. De cette relation, on tire aussi v = d ÷ Δt et Δt = d ÷ v.",
              ],
              box: { label: "Propriété", text: "Mouvement rectiligne uniforme : positions alignées et également espacées, vecteur vitesse constant, d = v × Δt." },
            },
            {
              heading: "Mouvements accéléré et ralenti",
              paragraphs: [
                "Si les positions sont alignées mais que l'écart entre deux positions successives augmente, la valeur de la vitesse augmente : le mouvement est rectiligne accéléré, comme celui d'une bille lâchée qui tombe. Si l'écart diminue, la valeur de la vitesse diminue : le mouvement est rectiligne ralenti, comme celui d'une voiture qui freine.",
                "Pour décrire la variation du vecteur vitesse entre deux instants voisins, on considère le vecteur variation de vitesse Δv⃗ = v⃗ᵢ₊₁ - v⃗ᵢ. Dans un mouvement rectiligne, il a la direction de la trajectoire. Il est de même sens que le mouvement si le mouvement est accéléré, de sens opposé si le mouvement est ralenti, et nul si le mouvement est uniforme. Exemple : si une voiture passe de 20 m/s à 15 m/s en ligne droite, la valeur de Δv⃗ vaut 5 m/s et ce vecteur est orienté vers l'arrière.",
              ],
              box: { label: "Règle", text: "Écarts constants : uniforme, Δv⃗ nul. Écarts croissants : accéléré, Δv⃗ dans le sens du mouvement. Écarts décroissants : ralenti, Δv⃗ dans le sens opposé au mouvement." },
            },
            {
              heading: "Uniforme ne veut pas dire vecteur vitesse constant",
              paragraphs: [
                "Le mot uniforme ne concerne que la valeur de la vitesse. Un manège qui tourne régulièrement a un mouvement circulaire uniforme : la valeur de la vitesse d'un siège est constante, mais la direction de son vecteur vitesse change à chaque instant. Son vecteur vitesse n'est donc pas constant. Seul le mouvement rectiligne uniforme a un vecteur vitesse constant.",
                "Cette distinction est essentielle pour la suite : dans le chapitre sur les forces, le principe d'inertie relie la variation du vecteur vitesse aux actions qui s'exercent sur le système. Un système dont le vecteur vitesse varie (en valeur ou en direction) est soumis à des forces dont les effets ne se compensent pas.",
              ],
              box: { label: "À retenir", text: "Vecteur vitesse constant (même direction, même sens, même valeur) : uniquement pour le mouvement rectiligne uniforme." },
            },
          ],
          keyPoints: [
            "Rectiligne : positions alignées ; le vecteur vitesse garde la direction de la droite.",
            "Uniforme : valeur de la vitesse constante ; positions également espacées sur une chronophotographie.",
            "Mouvement rectiligne uniforme : vecteur vitesse constant et d = v × Δt.",
            "Écarts croissants : accéléré ; écarts décroissants : ralenti.",
            "Δv⃗ = v⃗ᵢ₊₁ - v⃗ᵢ : dans le sens du mouvement s'il accélère, en sens opposé s'il ralentit.",
            "Circulaire uniforme : valeur constante mais vecteur vitesse variable (direction).",
          ],
          example: {
            statement: "Une voiture roule en ligne droite ; on relève sa position toutes les 0,50 s (données fictives) : 0 m ; 5,0 m ; 10,0 m ; 15,0 m ; 20,0 m. 1) Caractérisez le mouvement. 2) Calculez la vitesse en m/s et en km/h. 3) Quelle distance parcourt-elle en une minute si le mouvement se poursuit ainsi ?",
            solution: [
              "1) La trajectoire est rectiligne et les écarts entre positions successives sont tous égaux à 5,0 m pour des durées égales : le mouvement est rectiligne uniforme.",
              "2) v = 5,0 ÷ 0,50 = 10 m/s.",
              "En km/h : 10 × 3,6 = 36 km/h.",
              "3) d = v × Δt = 10 × 60 = 600 m.",
              "Réponse : mouvement rectiligne uniforme à 10 m/s (36 km/h) ; 600 m parcourus en une minute.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un TGV roule en ligne droite à la vitesse constante de 300 km/h (on suppose cette vitesse maintenue). 1) Convertissez cette vitesse en m/s. 2) Quelle distance parcourt-il en 2,0 minutes ? 3) Combien de temps lui faut-il pour parcourir 450 km ?",
              hint: "Divisez par 3,6 pour obtenir des m/s. Pour les questions 2 et 3, utilisez d = v × Δt en gardant des unités cohérentes (km et h, ou m et s).",
              solution: [
                "1) v = 300 ÷ 3,6 ≈ 83,3 m/s.",
                "2) Δt = 2,0 min = 2,0 ÷ 60 h. d = v × Δt = 300 × 2,0 ÷ 60 = 10 km (ou 83,3 × 120 ≈ 1,0 × 10⁴ m).",
                "3) Δt = d ÷ v = 450 ÷ 300 = 1,5 h, soit 1 h 30 min.",
              ],
            },
            {
              level: 2,
              statement: "Un palet glisse en ligne droite sur une table inclinée. On relève ses positions sur un axe toutes les Δt = 0,10 s (données fictives) : M₀ : 0 cm ; M₁ : 2,0 cm ; M₂ : 6,0 cm ; M₃ : 12,0 cm ; M₄ : 20,0 cm ; M₅ : 30,0 cm. 1) Calculez les écarts successifs et caractérisez le mouvement. 2) Calculez les valeurs des vitesses v₀ à v₄, avec vᵢ = Mᵢ Mᵢ₊₁ ÷ Δt. 3) Décrivez le vecteur variation de vitesse entre deux positions successives.",
              hint: "Convertissez les écarts en mètres avant de diviser par Δt. Comparez ensuite deux vitesses successives.",
              solution: [
                "1) Écarts : 2,0 cm ; 4,0 cm ; 6,0 cm ; 8,0 cm ; 10,0 cm. Ils augmentent et les positions sont alignées : le mouvement est rectiligne accéléré.",
                "2) v₀ = 0,020 ÷ 0,10 = 0,20 m/s ; v₁ = 0,040 ÷ 0,10 = 0,40 m/s ; v₂ = 0,60 m/s ; v₃ = 0,80 m/s ; v₄ = 1,0 m/s.",
                "3) Entre deux positions successives, la valeur de la vitesse augmente toujours de 0,20 m/s : le vecteur Δv⃗ a la direction de la trajectoire, le sens du mouvement et une valeur de 0,20 m/s.",
              ],
            },
            {
              level: 3,
              statement: "Une voiture roule sur une route rectiligne, puis freine. Une caméra enregistre sa position toutes les 0,40 s ; les écarts entre positions successives sont (données fictives) : 10,0 m ; 10,0 m ; 10,0 m ; 8,0 m ; 6,0 m ; 4,0 m ; 2,0 m. 1) Identifiez les deux phases du mouvement et caractérisez chacune. 2) Calculez la vitesse pendant la première phase, en m/s puis en km/h. 3) Calculez les valeurs successives de la vitesse pendant la deuxième phase. 4) Représentez par une phrase le vecteur Δv⃗ pendant chaque phase. 5) Quelle distance la voiture parcourt-elle pendant la phase de freinage enregistrée ?",
              hint: "Repérez où les écarts cessent d'être égaux. Pour chaque écart, v = écart ÷ 0,40 s. Pour la question 5, additionnez les écarts de la deuxième phase.",
              solution: [
                "1) Phase 1 (trois premiers écarts égaux à 10,0 m) : mouvement rectiligne uniforme. Phase 2 (écarts décroissants de 8,0 m à 2,0 m) : mouvement rectiligne ralenti.",
                "2) v = 10,0 ÷ 0,40 = 25 m/s, soit 25 × 3,6 = 90 km/h.",
                "3) 8,0 ÷ 0,40 = 20 m/s ; 6,0 ÷ 0,40 = 15 m/s ; 4,0 ÷ 0,40 = 10 m/s ; 2,0 ÷ 0,40 = 5,0 m/s.",
                "4) Phase 1 : le vecteur vitesse est constant, Δv⃗ est nul. Phase 2 : la vitesse diminue de 5 m/s toutes les 0,40 s ; Δv⃗ a la direction de la route, il est orienté dans le sens opposé au mouvement et sa valeur vaut 5 m/s.",
                "5) d = 8,0 + 6,0 + 4,0 + 2,0 = 20 m pendant la phase de freinage enregistrée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque chronophotographie à la nature du mouvement.",
            pairs: [
              { left: "Points alignés, également espacés", right: "Rectiligne uniforme" },
              { left: "Points alignés, écarts de plus en plus grands", right: "Rectiligne accéléré" },
              { left: "Points alignés, écarts de plus en plus petits", right: "Rectiligne ralenti" },
              { left: "Points sur un cercle, également espacés", right: "Circulaire uniforme" },
              { left: "Points sur une courbe quelconque, écarts variables", right: "Curviligne non uniforme" },
            ],
          },
          quiz: [
            {
              q: "Sur une chronophotographie, les points sont alignés et également espacés. Le mouvement est :",
              options: ["rectiligne accéléré", "rectiligne uniforme", "circulaire uniforme", "rectiligne ralenti"],
              answer: 1,
              why: "Positions alignées : rectiligne ; écarts égaux pour des durées égales : uniforme.",
            },
            {
              q: "Une voiture roule en ligne droite à 20 m/s pendant 30 s. Quelle distance parcourt-elle ?",
              options: ["600 m", "50 m", "1,5 m", "6 000 m"],
              answer: 0,
              why: "d = v × Δt = 20 × 30 = 600 m.",
            },
            {
              q: "Dans un mouvement rectiligne ralenti, le vecteur Δv⃗ est :",
              options: ["dans le même sens que le mouvement", "perpendiculaire à la trajectoire", "dans le sens opposé au mouvement", "toujours nul"],
              answer: 2,
              why: "La vitesse diminue : la variation du vecteur vitesse est orientée vers l'arrière, en sens opposé au mouvement.",
            },
            {
              q: "Lequel de ces mouvements a un vecteur vitesse constant ?",
              options: ["Un siège de manège qui tourne régulièrement, toujours à la même vitesse", "Une bille qui tombe en chute libre", "Une voiture qui freine en ligne droite", "Un train qui roule en ligne droite à vitesse constante"],
              answer: 3,
              why: "Seul le mouvement rectiligne uniforme garde la même direction, le même sens et la même valeur de vitesse.",
            },
            {
              q: "Les écarts entre positions successives d'un objet en ligne droite valent 1,0 cm ; 1,5 cm ; 2,0 cm ; 2,5 cm. Le mouvement est :",
              options: ["rectiligne ralenti", "rectiligne uniforme", "rectiligne accéléré", "circulaire uniforme"],
              answer: 2,
              why: "Les écarts augmentent pour des durées égales : la vitesse augmente, le mouvement est accéléré.",
            },
          ],
          trap: "Croire qu'un mouvement uniforme a forcément un vecteur vitesse constant : dans un mouvement circulaire uniforme, la valeur est constante mais la direction change, donc le vecteur vitesse varie.",
          method: "Face à une chronophotographie, répondez à deux questions dans l'ordre : les points sont-ils alignés (rectiligne ou non) ? les écarts sont-ils constants, croissants ou décroissants (uniforme, accéléré, ralenti) ? Nommez ensuite le mouvement avec les deux mots.",
        },
      ],
    },
  ],
}
