import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'sciences-techno-6e',
  chapters: [
    {
      id: 'etats-matiere',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'trois-etats',
          title: 'Solide, liquide, gaz : les trois états de la matière',
          minutes: 25,
          objectives: [
            "Identifier l'état physique (solide, liquide ou gazeux) d'un échantillon de matière.",
            "Décrire les propriétés de chaque état : forme propre, volume propre, compressibilité.",
            "Mettre en œuvre une expérience simple pour montrer qu'un gaz est de la matière.",
          ],
          course: [
            {
              heading: "La matière qui nous entoure",
              paragraphs: [
                "Tout ce qui nous entoure est fait de matière : le bois d'une table, l'eau d'une bouteille, le métal d'une clé, mais aussi l'air que nous respirons. On reconnaît la matière à deux choses : elle occupe une place, c'est-à-dire un volume, et elle a une masse.",
                "La matière peut se présenter sous trois états physiques : l'état solide, l'état liquide et l'état gazeux. Une même matière peut exister dans les trois états. L'eau, par exemple, est solide dans un glaçon, liquide dans un verre et gazeuse sous forme de vapeur d'eau dans l'air.",
                "Pour savoir dans quel état se trouve un échantillon de matière, on observe ses propriétés : a-t-il une forme à lui ? Garde-t-il toujours le même volume ? Peut-on le comprimer, c'est-à-dire le serrer dans un espace plus petit ?",
              ],
              box: { label: "Définition", text: "La matière est tout ce qui occupe un volume et possède une masse. Elle existe sous trois états physiques : solide, liquide et gazeux." },
            },
            {
              heading: "L'état solide",
              paragraphs: [
                "Un solide a une forme propre : il garde sa forme, quel que soit le récipient dans lequel on le place. Une gomme posée dans une boîte ronde ou dans une boîte carrée reste une gomme de la même forme. On peut prendre un solide entre ses doigts.",
                "Un solide a aussi un volume propre : il occupe toujours la même place. On ne peut pas le comprimer en appuyant dessus avec les mains.",
                "Attention aux solides en poudre ou en grains, qu'on appelle des solides divisés : le sable, le sucre en poudre, la farine ou le sel. Ils s'écoulent et semblent prendre la forme du récipient, mais chaque grain est un petit solide qui garde sa forme. De plus, leur surface n'est pas plane : ils forment un tas. Ce sont bien des solides.",
              ],
              box: { label: "À retenir", text: "Un solide a une forme propre et un volume propre. Les solides en grains ou en poudre (sable, sucre, farine) sont des solides divisés." },
            },
            {
              heading: "L'état liquide",
              paragraphs: [
                "Un liquide n'a pas de forme propre : il prend la forme du récipient qui le contient. Le jus d'orange prend la forme d'un verre, puis celle d'une carafe si on le verse dedans. Un liquide ne se prend pas entre les doigts : il coule.",
                "Un liquide a un volume propre : si l'on verse 1 L d'eau d'une bouteille dans une casserole, il y a toujours 1 L d'eau dans la casserole. Un liquide est presque incompressible : dans une seringue bouchée remplie d'eau, on n'arrive pas à enfoncer le piston.",
                "Au repos, la surface d'un liquide est plane et horizontale. On l'appelle la surface libre. Même si l'on penche le verre, la surface de l'eau reste horizontale.",
              ],
              box: { label: "À retenir", text: "Un liquide n'a pas de forme propre mais il a un volume propre. Au repos, sa surface libre est plane et horizontale." },
            },
            {
              heading: "L'état gazeux",
              paragraphs: [
                "Un gaz n'a ni forme propre ni volume propre : il occupe tout l'espace qui lui est offert. Quand on ouvre un flacon de parfum dans une pièce, l'odeur se répand peu à peu dans toute la pièce.",
                "Un gaz est compressible : dans une seringue bouchée remplie d'air, on peut enfoncer le piston, l'air occupe alors un volume plus petit. Il est aussi expansible : si l'on tire le piston, l'air occupe un volume plus grand. Quand on lâche le piston, il revient vers sa position de départ.",
                "La plupart des gaz sont invisibles, comme l'air ou la vapeur d'eau. Ils sont pourtant bien de la matière : ils occupent un volume (un ballon se gonfle) et ont une masse. Un ballon de basket bien gonflé est un peu plus lourd que le même ballon dégonflé. Un litre d'air a une masse d'environ 1,2 g.",
              ],
              box: { label: "À retenir", text: "Un gaz n'a ni forme propre ni volume propre : il occupe tout l'espace disponible. Il est compressible et expansible. Invisible ou non, un gaz est de la matière : il a une masse." },
            },
          ],
          keyPoints: [
            "La matière occupe un volume et possède une masse ; elle existe à l'état solide, liquide ou gazeux.",
            "Solide : forme propre et volume propre. Le sable et le sucre en poudre sont des solides divisés.",
            "Liquide : pas de forme propre, mais un volume propre ; surface libre plane et horizontale au repos.",
            "Gaz : ni forme propre ni volume propre ; il occupe tout l'espace disponible.",
            "Un gaz est compressible et expansible ; un liquide et un solide ne le sont presque pas.",
            "L'air est invisible mais c'est de la matière : 1 L d'air a une masse d'environ 1,2 g.",
          ],
          example: {
            statement: "Indiquez l'état physique de chacun de ces échantillons et justifiez : a) du lait dans un verre ; b) du sel fin dans une salière ; c) l'air contenu dans un pneu de vélo.",
            solution: [
              "a) Le lait prend la forme du verre et il coule : il n'a pas de forme propre. Son volume reste le même si on le verse dans un bol. C'est un liquide.",
              "b) Le sel fin s'écoule, mais chaque grain garde sa forme, et le sel forme un tas au lieu d'avoir une surface plane. C'est un solide divisé, donc un solide.",
              "c) L'air remplit tout le pneu et on a pu l'y comprimer avec une pompe : il n'a ni forme propre ni volume propre et il est compressible. C'est un gaz.",
              "Réponse : le lait est liquide, le sel est solide (solide divisé) et l'air du pneu est gazeux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces échantillons de matière selon leur état physique (solide, liquide ou gaz) : un clou, de l'huile, la vapeur d'eau, de la farine, du sirop, un glaçon, l'air d'un ballon, du sable.",
              hint: "Pour chacun, demandez-vous : a-t-il une forme propre ? Peut-il occuper tout l'espace disponible ? N'oubliez pas les solides en poudre.",
              solution: [
                "Solides (forme propre et volume propre) : le clou, le glaçon, la farine et le sable. La farine et le sable sont des solides divisés.",
                "Liquides (pas de forme propre, volume propre) : l'huile et le sirop.",
                "Gaz (ni forme propre ni volume propre) : la vapeur d'eau et l'air du ballon.",
                "Résultat : 4 solides, 2 liquides, 2 gaz.",
              ],
            },
            {
              level: 2,
              statement: "On remplit une seringue A avec de l'air et une seringue B avec de l'eau. On bouche l'extrémité de chacune avec le doigt, puis on appuie sur le piston. Dans la seringue A, le piston s'enfonce un peu ; dans la seringue B, il ne bouge pas. a) Quelle propriété de l'air cette expérience montre-t-elle ? b) Quelle propriété de l'eau montre-t-elle ? c) Que se passe-t-il dans la seringue A quand on relâche le piston ?",
              hint: "Comparez le volume occupé par la matière avant et après la poussée, dans chaque seringue.",
              solution: [
                "a) Dans la seringue A, l'air occupe un volume plus petit quand on pousse : l'air est compressible. C'est une propriété des gaz.",
                "b) Dans la seringue B, le volume de l'eau ne change pas : l'eau est presque incompressible. C'est une propriété des liquides, qui ont un volume propre.",
                "c) Quand on relâche, l'air comprimé repousse le piston, qui revient vers sa position de départ : l'air reprend de la place, il est expansible.",
                "Conclusion : un gaz est compressible et expansible, un liquide ne l'est presque pas.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Léa affirme : « Le sable est un liquide, puisqu'il coule et prend la forme du seau. » Hugo affirme : « L'air n'est pas de la matière, puisqu'on ne le voit pas. » Pour répondre à Hugo, on pèse un ballon de basket peu gonflé : 600,0 g. On le gonfle bien avec une pompe, puis on le pèse à nouveau : 602,4 g (données fictives). a) Donnez deux arguments pour montrer à Léa que le sable est un solide. b) Quelle masse d'air a-t-on ajoutée dans le ballon ? c) Que pouvez-vous répondre à Hugo ? d) Sachant qu'un litre d'air a une masse d'environ 1,2 g, à combien de litres d'air (pris dans la pièce) correspond cette masse ?",
              hint: "Pour le sable, regardez un seul grain, puis la forme de la surface dans le seau. Pour le ballon, faites une soustraction, puis une division.",
              solution: [
                "a) Chaque grain de sable garde sa forme : c'est un petit solide, et le sable est un solide divisé. De plus, la surface du sable dans le seau forme un tas, elle n'est pas plane et horizontale comme celle d'un liquide.",
                "b) Masse d'air ajoutée : 602,4 - 600,0 = 2,4 g.",
                "c) La masse du ballon augmente quand on y ajoute de l'air : l'air a une masse. Il occupe aussi un volume, puisqu'il gonfle le ballon. L'air est donc de la matière, même s'il est invisible.",
                "d) 2,4 ÷ 1,2 = 2. La pompe a fait entrer environ 2 L d'air de la pièce, que l'on a comprimés dans le ballon.",
                "Conclusion : le sable est un solide divisé, et l'air est bien de la matière : environ 2 L d'air ont une masse de 2,4 g.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur les états de la matière.",
            statements: [
              { text: "Le sucre en poudre est un liquide, puisqu'il s'écoule.", true: false, why: "Chaque grain de sucre garde sa forme : le sucre en poudre est un solide divisé." },
              { text: "Un liquide prend la forme du récipient qui le contient.", true: true, why: "Un liquide n'a pas de forme propre : il épouse la forme du verre, de la bouteille ou de la casserole." },
              { text: "L'air n'a pas de masse, puisqu'on ne le voit pas.", true: false, why: "L'air est de la matière : un ballon bien gonflé est plus lourd que dégonflé, et 1 L d'air a une masse d'environ 1,2 g." },
              { text: "On peut comprimer de l'air dans une seringue bouchée.", true: true, why: "Les gaz sont compressibles : l'air peut occuper un volume plus petit quand on appuie sur le piston." },
              { text: "Quand on penche un verre d'eau, la surface de l'eau penche avec lui.", true: false, why: "Au repos, la surface libre d'un liquide reste toujours plane et horizontale, même si le verre est penché." },
              { text: "Une même matière, comme l'eau, peut exister dans les trois états.", true: true, why: "L'eau est solide dans la glace, liquide au robinet et gazeuse sous forme de vapeur d'eau." },
              { text: "Un gaz garde toujours le même volume, comme un liquide.", true: false, why: "Un gaz n'a pas de volume propre : il occupe tout l'espace disponible et il est compressible." },
            ],
          },
          quiz: [
            {
              q: "Quel échantillon de matière a une forme propre et un volume propre ?",
              options: ["L'eau d'une piscine", "Un caillou", "La vapeur d'eau", "L'air d'une chambre"],
              answer: 1,
              why: "Un caillou est un solide : il garde sa forme et son volume, quel que soit l'endroit où on le pose.",
            },
            {
              q: "Comment est la surface libre d'un liquide au repos ?",
              options: ["Plane et horizontale", "Bombée vers le haut", "Penchée comme le récipient", "En forme de tas"],
              answer: 0,
              why: "Au repos, la surface d'un liquide est toujours plane et horizontale.",
            },
            {
              q: "Quelle propriété appartient seulement aux gaz parmi ces propositions ?",
              options: ["Ils coulent dans un tuyau", "Ils ont une masse", "Ils se laissent comprimer facilement", "Ils prennent la forme du récipient qui les contient"],
              answer: 2,
              why: "Les liquides coulent aussi, ont une masse et prennent la forme du récipient ; seuls les gaz se compriment facilement.",
            },
            {
              q: "La farine est :",
              options: ["un liquide, car elle s'écoule comme de l'eau", "un gaz, car elle vole dans l'air", "un mélange de liquide et de gaz", "un solide divisé, fait de petits grains"],
              answer: 3,
              why: "Chaque grain de farine garde sa forme : la farine est un solide en poudre, c'est-à-dire un solide divisé.",
            },
            {
              q: "Quelle expérience montre que l'air a une masse ?",
              options: ["Peser un ballon peu gonflé puis bien gonflé", "Observer l'air à travers une loupe très puissante", "Faire des bulles d'air dans un verre d'eau", "Souffler sur une bougie allumée"],
              answer: 0,
              why: "La masse du ballon augmente quand on y fait entrer de l'air : c'est la preuve que l'air a une masse.",
            },
          ],
          trap: "Croire que le sable, le sel ou la farine sont des liquides parce qu'ils s'écoulent, ou croire que l'air n'est pas de la matière parce qu'il est invisible.",
          method: "Pour trouver l'état d'un échantillon, posez-vous toujours les mêmes questions dans le même ordre : a-t-il une forme propre ? un volume propre ? peut-on le comprimer ? Pour une poudre, observez un seul grain.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'changements-etat',
          title: 'Les changements d\'état de l\'eau',
          minutes: 30,
          objectives: [
            "Nommer les changements d'état de l'eau : fusion, solidification, vaporisation, liquéfaction.",
            "Connaître les températures de changement d'état de l'eau pure.",
            "Identifier ce qui se conserve (la masse) et ce qui change (le volume) lors d'un changement d'état.",
            "Relier les changements d'état au cycle de l'eau dans la nature.",
          ],
          course: [
            {
              heading: "Les quatre changements d'état de l'eau",
              paragraphs: [
                "Quand l'eau passe d'un état à un autre, on dit qu'elle change d'état. Chaque changement d'état porte un nom. La fusion est le passage de l'état solide à l'état liquide : un glaçon qui fond dans un verre. La solidification est le passage de l'état liquide à l'état solide : l'eau qui gèle dans le bac à glaçons du congélateur.",
                "La vaporisation est le passage de l'état liquide à l'état gazeux. Elle prend deux formes. L'ébullition est rapide : des bulles de vapeur se forment dans tout le liquide, comme dans l'eau des pâtes qui bout. L'évaporation est lente et se fait seulement à la surface du liquide, à n'importe quelle température : le linge qui sèche, une flaque qui disparaît au soleil.",
                "La liquéfaction est le passage de l'état gazeux à l'état liquide. Elle se produit quand la vapeur d'eau de l'air rencontre une surface froide : la buée sur le miroir de la salle de bains, les gouttelettes sur une bouteille sortie du réfrigérateur, la rosée du matin sur l'herbe.",
              ],
              box: { label: "Définition", text: "Fusion : solide → liquide. Solidification : liquide → solide. Vaporisation (ébullition ou évaporation) : liquide → gaz. Liquéfaction : gaz → liquide." },
            },
            {
              heading: "Les températures de changement d'état",
              paragraphs: [
                "On mesure la température avec un thermomètre, en degrés Celsius (°C). L'eau pure se solidifie à 0 °C, et la glace fond à cette même température : 0 °C est la température de fusion et de solidification de l'eau pure. En dessous de 0 °C, l'eau pure est solide ; au-dessus, la glace fond.",
                "L'eau pure bout à 100 °C au niveau de la mer : c'est sa température d'ébullition. En montagne, l'eau bout à une température un peu plus basse. L'évaporation, elle, n'a pas de température fixe : une flaque s'évapore aussi bien à 15 °C qu'à 30 °C, mais plus vite quand il fait chaud et qu'il y a du vent.",
                "Ces températures concernent l'eau pure. L'eau salée, par exemple, gèle à une température plus basse que 0 °C : c'est pour cela qu'on répand du sel sur les routes en hiver, pour éviter qu'elles se couvrent de glace.",
              ],
              box: { label: "Repère", text: "Eau pure, au niveau de la mer : fusion et solidification à 0 °C, ébullition à 100 °C. L'évaporation se fait à toute température." },
            },
            {
              heading: "La masse se conserve, le volume change",
              paragraphs: [
                "Si l'on fait fondre un glaçon de 20 g dans un récipient fermé, on obtient 20 g d'eau liquide. Lors d'un changement d'état, la masse se conserve : la quantité de matière ne change pas, seul son état change.",
                "En revanche, le volume change. Quand l'eau gèle, son volume augmente d'environ un dixième : 1 L d'eau liquide donne environ 1,1 L de glace. C'est pourquoi une bouteille en verre pleine d'eau, oubliée au congélateur, peut éclater, et pourquoi les canalisations peuvent se fendre en hiver.",
                "C'est aussi pour cela que la glace flotte sur l'eau liquide : pour une même masse, la glace occupe plus de place. Les glaçons flottent dans un verre, et en hiver, un lac gèle d'abord en surface.",
              ],
              box: { label: "Propriété", text: "Lors d'un changement d'état, la masse se conserve mais le volume change. L'eau est une exception remarquable : son volume augmente quand elle se solidifie." },
            },
            {
              heading: "Les changements d'état dans la nature : le cycle de l'eau",
              paragraphs: [
                "Sous l'effet de la chaleur du Soleil, l'eau des océans, des lacs et des sols s'évapore, et les plantes rejettent aussi de la vapeur d'eau. Cette vapeur d'eau est invisible. En s'élevant, l'air se refroidit et la vapeur d'eau se liquéfie en minuscules gouttelettes : elles forment les nuages.",
                "Quand les gouttelettes grossissent, elles tombent sous forme de pluie. S'il fait très froid en altitude, l'eau tombe sous forme de neige ou de grêle. Au printemps, la neige fond en montagne : c'est la fusion. L'eau rejoint les rivières, les nappes souterraines, puis la mer, et le cycle recommence.",
                "Attention : un nuage, le brouillard ou la « fumée » blanche au-dessus d'une casserole ne sont pas de la vapeur d'eau. Ce sont de minuscules gouttelettes d'eau liquide, visibles, formées par liquéfaction de la vapeur d'eau, qui, elle, est invisible.",
              ],
              box: { label: "À retenir", text: "La vapeur d'eau est un gaz invisible. Ce que l'on voit (nuage, brouillard, buée) est de l'eau liquide en gouttelettes." },
            },
          ],
          keyPoints: [
            "Fusion : solide → liquide ; solidification : liquide → solide.",
            "Vaporisation : liquide → gaz, par ébullition (rapide, dans tout le liquide) ou évaporation (lente, en surface).",
            "Liquéfaction : gaz → liquide (buée, rosée, nuages).",
            "Eau pure au niveau de la mer : fusion et solidification à 0 °C, ébullition à 100 °C.",
            "Lors d'un changement d'état, la masse se conserve, le volume change : l'eau gonfle en gelant.",
            "La vapeur d'eau est invisible : les nuages et la buée sont faits de gouttelettes d'eau liquide.",
          ],
          example: {
            statement: "Nommez le changement d'état qui se produit dans chaque situation : a) une flaque disparaît au soleil ; b) des lunettes se couvrent de buée quand on entre dans une pièce chaude en hiver ; c) l'eau d'un lac gèle ; d) la neige fond au printemps.",
            solution: [
              "a) L'eau liquide de la flaque devient de la vapeur d'eau, lentement et à sa surface : c'est une vaporisation, plus précisément une évaporation.",
              "b) La vapeur d'eau de l'air chaud touche les verres froids des lunettes et devient de l'eau liquide : c'est une liquéfaction.",
              "c) L'eau liquide devient de la glace : c'est une solidification.",
              "d) La neige, solide, devient de l'eau liquide : c'est une fusion.",
              "Réponse : a) évaporation (vaporisation), b) liquéfaction, c) solidification, d) fusion.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le nom du changement d'état : a) du chocolat chauffé au bain-marie devient liquide ; b) l'eau des pâtes forme de grosses bulles à 100 °C ; c) de petites gouttes apparaissent sur une canette sortie du réfrigérateur ; d) du jus de fruit placé au congélateur devient un sorbet glacé.",
              hint: "Repérez l'état de départ et l'état d'arrivée, puis cherchez le nom qui correspond.",
              solution: [
                "a) Solide → liquide : fusion.",
                "b) Liquide → gaz, de façon rapide avec des bulles dans tout le liquide : vaporisation par ébullition.",
                "c) Gaz (vapeur d'eau de l'air) → liquide : liquéfaction.",
                "d) Liquide → solide : solidification.",
              ],
            },
            {
              level: 2,
              statement: "On verse 500 mL d'eau, de masse 500 g, dans une boîte en plastique souple, et on la place au congélateur. Le lendemain, toute l'eau a gelé. a) Quelle est la masse de la glace obtenue ? b) Sachant que le volume de l'eau augmente d'environ un dixième quand elle gèle, quel est le volume approximatif de la glace ? c) Pourquoi ne faut-il pas remplir à ras bord une bouteille en verre fermée avant de la congeler ?",
              hint: "La masse se conserve lors d'un changement d'état. Pour le volume, calculez un dixième de 500 mL et ajoutez-le.",
              solution: [
                "a) Lors d'un changement d'état, la masse se conserve : la glace a une masse de 500 g.",
                "b) Un dixième de 500 mL : 500 ÷ 10 = 50 mL. Volume de la glace : 500 + 50 = 550 mL environ.",
                "c) En gelant, l'eau prend plus de place. Dans une bouteille en verre fermée et pleine, la glace n'a pas la place de s'étendre : elle pousse sur les parois et peut faire éclater la bouteille.",
                "Résultat : 500 g de glace, d'un volume d'environ 550 mL ; il faut laisser de la place dans un récipient que l'on congèle.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sami pose un glaçon de 25 g dans une soucoupe sur une balance (la balance a été mise à zéro avec la soucoupe vide). a) Que va indiquer la balance quand le glaçon aura entièrement fondu ? Justifiez. b) Sami laisse la soucoupe deux jours au soleil : la balance indique alors 0 g. L'eau a-t-elle disparu ? Expliquez ce qui s'est passé et nommez le changement d'état. c) Sami affirme : « Les nuages, c'est de la vapeur d'eau, puisque ça vient de l'évaporation. » Corrigez-le.",
              hint: "Rappelez-vous que la masse se conserve lors d'un changement d'état, mais seulement si la matière reste sur la balance. Et la vapeur d'eau se voit-elle ?",
              solution: [
                "a) La fusion est un changement d'état : la masse se conserve. La balance indique toujours 25 g, cette fois d'eau liquide.",
                "b) L'eau n'a pas disparu : elle s'est évaporée. Elle est passée de l'état liquide à l'état gazeux (vaporisation par évaporation) et la vapeur d'eau s'est mélangée à l'air de la pièce. Elle n'est plus sur la balance, donc la balance indique 0 g.",
                "c) L'évaporation produit de la vapeur d'eau, qui est un gaz invisible. En montant, elle se refroidit et se liquéfie en minuscules gouttelettes d'eau liquide : ce sont ces gouttelettes que l'on voit. Un nuage est donc fait d'eau liquide (et parfois de petits cristaux de glace), pas de vapeur d'eau.",
                "Conclusion : 25 g après la fusion ; l'eau s'est ensuite évaporée dans l'air ; les nuages sont formés de gouttelettes d'eau liquide.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque changement d'état à la situation qui l'illustre.",
            pairs: [
              { left: "Fusion", right: "Un glaçon fond dans un verre de jus" },
              { left: "Solidification", right: "L'eau d'un bac à glaçons gèle au congélateur" },
              { left: "Ébullition", right: "L'eau des pâtes forme de grosses bulles" },
              { left: "Évaporation", right: "Le linge sèche sur le fil" },
              { left: "Liquéfaction", right: "De la buée se forme sur le miroir" },
            ],
          },
          quiz: [
            {
              q: "Comment s'appelle le passage de l'état liquide à l'état solide ?",
              options: ["La fusion", "La liquéfaction", "La vaporisation par ébullition", "La solidification"],
              answer: 3,
              why: "Liquide → solide, c'est la solidification ; la fusion est le passage inverse.",
            },
            {
              q: "À quelle température l'eau pure bout-elle au niveau de la mer ?",
              options: ["0 °C", "100 °C", "120 °C", "90 °C"],
              answer: 1,
              why: "Au niveau de la mer, l'eau pure bout à 100 °C ; elle gèle et la glace fond à 0 °C.",
            },
            {
              q: "Un glaçon de 30 g fond complètement dans un verre fermé. Quelle est la masse d'eau liquide obtenue ?",
              options: ["Moins de 30 g", "Plus de 30 g", "30 g", "Cela dépend de la température"],
              answer: 2,
              why: "Lors d'un changement d'état, la masse se conserve : 30 g de glace donnent 30 g d'eau.",
            },
            {
              q: "Que voit-on au-dessus d'une casserole d'eau bouillante ?",
              options: ["De minuscules gouttelettes d'eau liquide", "De la vapeur d'eau, qui est un gaz visible", "De la fumée produite par la chaleur", "De l'air chaud coloré en blanc"],
              answer: 0,
              why: "La vapeur d'eau est invisible ; la « fumée » blanche est faite de gouttelettes d'eau liquide formées par liquéfaction.",
            },
            {
              q: "Pourquoi une bouteille en verre pleine d'eau peut-elle éclater au congélateur ?",
              options: ["Parce que l'eau devient plus lourde en gelant", "Parce que le volume de l'eau augmente quand elle gèle", "Parce que le verre fond dans le froid", "Parce que l'air de la bouteille se transforme en glace"],
              answer: 1,
              why: "La masse ne change pas, mais la glace occupe un volume plus grand que l'eau liquide et pousse sur les parois.",
            },
          ],
          trap: "Confondre la vapeur d'eau, gaz invisible, avec la buée ou les nuages, qui sont de l'eau liquide ; ou croire que la masse change quand l'eau gèle, alors que c'est le volume qui change.",
          method: "Pour nommer un changement d'état, écrivez d'abord « état de départ → état d'arrivée » (par exemple liquide → gaz), puis cherchez le nom. Une astuce : fusion et solidification vont ensemble, vaporisation et liquéfaction aussi.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'masse-volume',
          title: 'Mesurer une masse et un volume',
          minutes: 30,
          objectives: [
            "Mesurer une masse avec une balance et l'exprimer dans l'unité qui convient.",
            "Mesurer le volume d'un liquide avec une éprouvette graduée.",
            "Déterminer le volume d'un solide par déplacement d'eau.",
            "Convertir des masses et des volumes (kg, g, mg ; L, cL, mL, cm³, dm³).",
          ],
          course: [
            {
              heading: "La masse et sa mesure",
              paragraphs: [
                "La masse est une grandeur qui caractérise un échantillon de matière : plus il y a de matière, plus la masse est grande. Dans la vie courante, on dit « peser » un objet, mais ce que l'on mesure avec une balance, c'est sa masse.",
                "L'unité officielle de masse est le kilogramme (kg). On utilise aussi le gramme (g), le milligramme (mg) pour les petites masses, et la tonne (t) pour les grandes. 1 kg = 1 000 g ; 1 g = 1 000 mg ; 1 t = 1 000 kg.",
                "Pour mesurer la masse d'un liquide ou d'une poudre, on utilise un récipient. On pose d'abord le récipient vide sur la balance et on appuie sur la touche « tare » (ou « zéro ») : la balance affiche 0. On ajoute ensuite le liquide : la balance n'indique que la masse du liquide.",
              ],
              box: { label: "Repère", text: "1 t = 1 000 kg ; 1 kg = 1 000 g ; 1 g = 1 000 mg. La touche « tare » permet de ne pas compter la masse du récipient." },
            },
            {
              heading: "Le volume et ses unités",
              paragraphs: [
                "Le volume d'un objet est la place qu'il occupe dans l'espace. L'unité officielle est le mètre cube (m³), mais on utilise souvent le décimètre cube (dm³) et le centimètre cube (cm³). Un cube de 1 cm de côté a un volume de 1 cm³.",
                "Pour les liquides, on parle souvent de contenance et on utilise le litre (L), le centilitre (cL) et le millilitre (mL). Les deux familles d'unités sont reliées : 1 L = 1 dm³ et 1 mL = 1 cm³. Ainsi, une brique de lait de 1 L a la même contenance qu'un cube de 10 cm de côté.",
              ],
              box: { label: "Repère", text: "1 L = 10 dL = 100 cL = 1 000 mL. 1 L = 1 dm³ = 1 000 cm³. 1 mL = 1 cm³." },
            },
            {
              heading: "Mesurer le volume d'un liquide",
              paragraphs: [
                "Pour mesurer précisément le volume d'un liquide, on utilise une éprouvette graduée. On la pose sur une table bien horizontale. On cherche d'abord la valeur d'une graduation : par exemple, s'il y a 5 petits intervalles entre 10 mL et 20 mL, chaque intervalle vaut 10 ÷ 5 = 2 mL.",
                "La surface de l'eau dans l'éprouvette n'est pas tout à fait plate : elle forme un creux, appelé ménisque. Pour lire le volume, on place l'œil à la hauteur du bas du ménisque, et on lit la graduation qui correspond au bas du ménisque. Si l'on regarde d'en haut ou d'en bas, la lecture est fausse.",
              ],
              box: { label: "Règle", text: "Éprouvette posée à plat, œil à la hauteur de la surface du liquide, lecture au bas du ménisque." },
            },
            {
              heading: "Mesurer le volume d'un solide",
              paragraphs: [
                "Si le solide a une forme simple, on peut calculer son volume. Un cube de 2 cm de côté a un volume de 2 × 2 × 2 = 8 cm³. Un pavé de 5 cm sur 3 cm sur 2 cm a un volume de 5 × 3 × 2 = 30 cm³.",
                "Si le solide a une forme irrégulière, comme un caillou ou une clé, on utilise la méthode du déplacement d'eau. On verse de l'eau dans une éprouvette et on lit son volume V1. On plonge doucement le solide, qui doit être entièrement recouvert d'eau, et on lit le nouveau volume V2. Le volume du solide est égal à la différence : V = V2 - V1.",
                "Volume et masse sont deux grandeurs différentes. Deux objets de même volume n'ont pas forcément la même masse : 1 L d'eau a une masse d'environ 1 kg, alors que 1 L d'huile a une masse d'environ 920 g et que 1 L d'air a une masse d'environ 1,2 g seulement.",
              ],
              box: { label: "Méthode", text: "Volume d'un solide irrégulier : V(solide) = V2 - V1, où V1 est le volume de l'eau seule et V2 le volume de l'eau avec le solide immergé. En mL, le résultat est aussi en cm³." },
            },
          ],
          keyPoints: [
            "La masse se mesure avec une balance ; unité officielle : le kilogramme (kg). 1 kg = 1 000 g.",
            "La touche « tare » remet la balance à zéro avec le récipient posé dessus.",
            "Le volume se mesure en m³, dm³, cm³ ou en L, cL, mL : 1 L = 1 dm³ et 1 mL = 1 cm³.",
            "Éprouvette graduée : posée à plat, œil au niveau du liquide, lecture au bas du ménisque.",
            "Volume d'un solide irrégulier par déplacement d'eau : V = V2 - V1.",
            "Même volume ne veut pas dire même masse : 1 L d'eau a une masse d'environ 1 kg, 1 L d'huile environ 920 g.",
          ],
          example: {
            statement: "Pour connaître le volume d'un caillou, on verse de l'eau dans une éprouvette : le bas du ménisque est à 50 mL. On plonge le caillou, qui est entièrement recouvert : le bas du ménisque est maintenant à 68 mL. Quel est le volume du caillou, en mL puis en cm³ ?",
            solution: [
              "Volume de l'eau seule : V1 = 50 mL.",
              "Volume de l'eau et du caillou : V2 = 68 mL.",
              "Le caillou a pris la place de l'eau qui est montée : V = V2 - V1 = 68 - 50 = 18 mL.",
              "Comme 1 mL = 1 cm³, le volume du caillou est 18 cm³.",
              "Réponse : le caillou a un volume de 18 mL, soit 18 cm³.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Convertissez : a) 2,5 kg en g ; b) 350 g en kg ; c) 1,5 L en mL ; d) 250 mL en cL ; e) 3 dm³ en L ; f) 40 cm³ en mL.",
              hint: "Rappelez-vous : 1 kg = 1 000 g, 1 L = 1 000 mL = 100 cL, 1 L = 1 dm³ et 1 mL = 1 cm³.",
              solution: [
                "a) 2,5 × 1 000 = 2 500 g.",
                "b) 350 ÷ 1 000 = 0,35 kg.",
                "c) 1,5 × 1 000 = 1 500 mL.",
                "d) 1 cL = 10 mL, donc 250 ÷ 10 = 25 cL.",
                "e) 1 dm³ = 1 L, donc 3 dm³ = 3 L.",
                "f) 1 cm³ = 1 mL, donc 40 cm³ = 40 mL.",
              ],
            },
            {
              level: 2,
              statement: "Sur une éprouvette graduée, les nombres 60, 70, 80 (en mL) sont écrits, et il y a 5 petits intervalles entre deux nombres. Le bas du ménisque de l'eau est au niveau du 3e trait après 60. a) Quelle est la valeur d'un petit intervalle ? b) Quel est le volume d'eau ? c) On plonge une clé, entièrement recouverte : le bas du ménisque arrive au 3e trait après 70. Quel est le volume de la clé en cm³ ?",
              hint: "Divisez l'écart entre deux nombres écrits par le nombre de petits intervalles, puis comptez les traits.",
              solution: [
                "a) Entre 60 mL et 70 mL, il y a 10 mL partagés en 5 intervalles : 10 ÷ 5 = 2 mL par intervalle.",
                "b) 3 traits après 60 : 60 + 3 × 2 = 66 mL. V1 = 66 mL.",
                "c) 3 traits après 70 : 70 + 3 × 2 = 76 mL. V2 = 76 mL. Volume de la clé : 76 - 66 = 10 mL, soit 10 cm³.",
                "Résultat : 2 mL par intervalle, 66 mL d'eau, et une clé de 10 cm³.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On pose un bécher vide sur une balance : elle indique 52 g. On y verse 200 mL d'eau : la balance indique 252 g. On vide le bécher, on le sèche, puis on y verse 200 mL d'huile : la balance indique 236 g (données fictives). a) Quelle est la masse de 200 mL d'eau ? de 200 mL d'huile ? b) Lequel des deux liquides a la plus grande masse pour un même volume ? c) Calculez la masse de 1 L d'eau et celle de 1 L d'huile. d) Comment aurait-on pu éviter de soustraire la masse du bécher ?",
              hint: "Enlevez la masse du bécher vide à chaque mesure. Pour passer de 200 mL à 1 L, demandez-vous combien de fois 200 mL il y a dans 1 000 mL.",
              solution: [
                "a) Eau : 252 - 52 = 200 g. Huile : 236 - 52 = 184 g.",
                "b) Pour le même volume de 200 mL, l'eau a une masse de 200 g et l'huile de 184 g : l'eau a la plus grande masse.",
                "c) 1 L = 1 000 mL = 5 × 200 mL. Eau : 5 × 200 = 1 000 g, soit 1 kg. Huile : 5 × 184 = 920 g.",
                "d) Il suffisait de poser le bécher vide sur la balance et d'appuyer sur la touche « tare » : la balance aurait affiché directement la masse du liquide.",
                "Conclusion : deux liquides de même volume n'ont pas la même masse ; 1 L d'eau a une masse de 1 kg et 1 L de cette huile de 920 g.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour mesurer le volume d'un caillou.",
            items: [
              "Poser l'éprouvette graduée sur une table bien horizontale",
              "Verser assez d'eau pour pouvoir recouvrir le caillou",
              "Lire le volume V1 au bas du ménisque, l'œil à sa hauteur",
              "Plonger doucement le caillou dans l'éprouvette",
              "Lire le nouveau volume V2 au bas du ménisque",
              "Calculer le volume du caillou : V2 - V1",
            ],
          },
          quiz: [
            {
              q: "Combien de grammes y a-t-il dans 1,2 kg ?",
              options: ["12 g", "120 g", "1 200 g", "12 000 g"],
              answer: 2,
              why: "1 kg = 1 000 g, donc 1,2 kg = 1,2 × 1 000 = 1 200 g.",
            },
            {
              q: "Quelle égalité est correcte ?",
              options: ["1 L = 1 cm³", "1 mL = 1 cm³", "1 L = 100 mL", "1 mL = 1 dm³"],
              answer: 1,
              why: "1 mL = 1 cm³ et 1 L = 1 dm³ = 1 000 mL.",
            },
            {
              q: "Où faut-il lire le volume dans une éprouvette graduée ?",
              options: ["Au bas du ménisque, l'œil à sa hauteur", "Au bord du liquide, contre le verre", "Au plus haut du liquide, en regardant d'en haut", "N'importe où, cela ne change rien"],
              answer: 0,
              why: "On place l'œil à la hauteur du liquide et on lit la graduation au bas du ménisque.",
            },
            {
              q: "Dans une éprouvette, l'eau est à 40 mL ; avec un écrou immergé, elle monte à 47 mL. Quel est le volume de l'écrou ?",
              options: ["47 cm³", "87 cm³", "40 cm³", "7 cm³"],
              answer: 3,
              why: "V = V2 - V1 = 47 - 40 = 7 mL, soit 7 cm³.",
            },
            {
              q: "À quoi sert la touche « tare » d'une balance ?",
              options: ["À mesurer le volume du récipient posé sur le plateau", "À remettre l'affichage à zéro avec le récipient posé", "À convertir automatiquement les grammes en litres", "À allumer l'éclairage de l'écran"],
              answer: 1,
              why: "La tare remet la balance à zéro : on ne mesure ensuite que la masse de ce qu'on ajoute dans le récipient.",
            },
          ],
          trap: "Confondre la masse et le volume, en croyant que 1 L de n'importe quel liquide a une masse de 1 kg ; ou lire l'éprouvette au bord du liquide, au lieu du bas du ménisque.",
          method: "Écrivez toujours l'unité à côté de chaque nombre, et faites un tableau de conversion (kg, hg, dag, g ou L, dL, cL, mL) en cas de doute. Pour un volume par déplacement d'eau, notez V1 et V2 avant de calculer.",
        },
      ],
    },
    {
      id: 'melanges',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'melanges-homogenes',
          title: 'Mélanges homogènes et hétérogènes',
          minutes: 25,
          objectives: [
            "Identifier les constituants d'un mélange à partir d'observations ou de documents.",
            "Distinguer un mélange homogène d'un mélange hétérogène.",
            "Reconnaître deux liquides miscibles ou non miscibles.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un mélange ?",
              paragraphs: [
                "Un mélange est formé de plusieurs matières différentes, que l'on appelle ses constituants. Une salade de fruits, une vinaigrette ou de l'eau boueuse sont des mélanges.",
                "Autour de nous, presque toute la matière est faite de mélanges, même quand cela ne se voit pas. L'eau du robinet ou l'eau minérale contiennent de l'eau et des sels minéraux dissous (calcium, magnésium...), indiqués sur l'étiquette des bouteilles. L'air est un mélange de gaz, surtout du diazote et du dioxygène. Une roche comme le granite est un mélange de plusieurs minéraux que l'on distingue à l'œil nu.",
              ],
              box: { label: "Définition", text: "Un mélange est formé d'au moins deux constituants. Chaque matière présente dans le mélange est un constituant." },
            },
            {
              heading: "Le mélange homogène",
              paragraphs: [
                "Dans un mélange homogène, on ne peut pas distinguer les constituants à l'œil nu : le mélange a le même aspect partout. L'eau sucrée, l'eau salée, le sirop de grenadine mélangé à l'eau, l'eau minérale et l'air sont des mélanges homogènes.",
                "Un mélange homogène peut ressembler à une seule matière. Un verre d'eau salée a le même aspect qu'un verre d'eau pure : l'œil ne suffit pas pour savoir si de l'eau contient quelque chose de dissous. Au laboratoire, on ne goûte jamais un liquide : on peut, par exemple, laisser l'eau s'évaporer et regarder s'il reste un dépôt.",
              ],
              box: { label: "Définition", text: "Mélange homogène : on ne distingue pas ses constituants à l'œil nu (eau sucrée, eau salée, air)." },
            },
            {
              heading: "Le mélange hétérogène",
              paragraphs: [
                "Dans un mélange hétérogène, on distingue à l'œil nu au moins deux constituants. L'eau boueuse est trouble : on voit des particules de terre en suspension. Dans un mélange d'eau et de sable, le sable reste visible au fond. Le jus d'orange avec pulpe, une soupe avec des morceaux de légumes ou le granite sont aussi des mélanges hétérogènes.",
                "Un liquide trouble, c'est-à-dire qui n'est pas transparent parce que de petites particules y flottent, est un mélange hétérogène. Un liquide limpide, c'est-à-dire transparent, peut être pur ou être un mélange homogène. Attention : limpide ne veut pas dire incolore. Un sirop dilué est coloré mais limpide.",
              ],
              box: { label: "Définition", text: "Mélange hétérogène : on distingue au moins deux constituants à l'œil nu (eau boueuse, eau et huile, granite)." },
            },
            {
              heading: "Liquides miscibles et non miscibles",
              paragraphs: [
                "Quand on mélange deux liquides, deux cas sont possibles. Si l'on obtient un mélange homogène, les deux liquides sont miscibles : c'est le cas de l'eau et du sirop, de l'eau et du vinaigre, ou de l'eau et de l'alcool.",
                "Si les deux liquides restent séparés, ils sont non miscibles : c'est le cas de l'eau et de l'huile. On voit deux couches bien distinctes, séparées par une limite nette. L'huile se place au-dessus de l'eau : pour un même volume, elle a une masse plus petite. Si l'on agite, l'huile forme des gouttelettes dans l'eau, mais après quelques minutes de repos, les deux couches se reforment.",
              ],
              box: { label: "À retenir", text: "Deux liquides miscibles forment un mélange homogène (eau et sirop). Deux liquides non miscibles forment un mélange hétérogène en deux couches (eau et huile, l'huile au-dessus)." },
            },
          ],
          keyPoints: [
            "Un mélange contient au moins deux constituants ; l'eau du robinet et l'air sont des mélanges.",
            "Mélange homogène : constituants invisibles à l'œil nu (eau sucrée, eau salée, air).",
            "Mélange hétérogène : au moins deux constituants visibles (eau boueuse, eau et sable).",
            "Limpide veut dire transparent, pas forcément incolore ; un liquide trouble est hétérogène.",
            "Liquides miscibles : mélange homogène. Non miscibles : deux couches, comme l'eau et l'huile.",
          ],
          example: {
            statement: "Indiquez si chaque mélange est homogène ou hétérogène, en justifiant : a) de l'eau dans laquelle on a dissous complètement une pincée de sel ; b) de l'eau et de l'huile dans un verre ; c) de l'eau boueuse.",
            solution: [
              "a) On ne voit plus le sel : on ne distingue qu'un seul aspect, le liquide est limpide. C'est un mélange homogène.",
              "b) On voit deux couches séparées, l'huile au-dessus de l'eau : ces deux liquides sont non miscibles. C'est un mélange hétérogène.",
              "c) L'eau boueuse est trouble : on voit des particules de terre. C'est un mélange hétérogène.",
              "Réponse : a) homogène ; b) et c) hétérogènes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces mélanges en deux colonnes, homogènes ou hétérogènes : a) de la grenadine à l'eau ; b) une vinaigrette (huile et vinaigre) ; c) de l'eau et de la farine que l'on vient d'agiter ; d) de l'eau du robinet ; e) une soupe avec des morceaux de légumes ; f) l'air de la classe.",
              hint: "Demandez-vous à chaque fois : peut-on distinguer au moins deux constituants à l'œil nu ?",
              solution: [
                "Homogènes (un seul aspect visible) : a) la grenadine à l'eau, d) l'eau du robinet, f) l'air.",
                "Hétérogènes (au moins deux constituants visibles) : b) la vinaigrette, où l'huile et le vinaigre forment deux couches ; c) l'eau et la farine, qui donnent un liquide trouble ; e) la soupe avec ses morceaux.",
                "Résultat : 3 mélanges homogènes et 3 mélanges hétérogènes.",
              ],
            },
            {
              level: 2,
              statement: "Voici l'étiquette d'une eau minérale (données fictives), pour 1 L : calcium 80 mg ; magnésium 25 mg ; sodium 10 mg ; bicarbonates 300 mg ; sulfates 40 mg. a) Cette eau est-elle de l'eau pure ? Justifiez. b) Est-ce un mélange homogène ou hétérogène ? c) Quelle masse totale de sels minéraux dissous contient 1 L de cette eau ? d) Et une bouteille de 1,5 L ?",
              hint: "Une étiquette qui liste plusieurs constituants décrit un mélange. Additionnez toutes les masses pour 1 L, puis multipliez par 1,5.",
              solution: [
                "a) Non : l'étiquette montre qu'elle contient de l'eau et plusieurs sels minéraux. C'est un mélange.",
                "b) On ne voit pas les sels minéraux, l'eau est limpide : c'est un mélange homogène.",
                "c) 80 + 25 + 10 + 300 + 40 = 455 mg de sels minéraux dans 1 L.",
                "d) 455 × 1,5 = 682,5 mg dans une bouteille de 1,5 L.",
                "Résultat : cette eau est un mélange homogène qui contient 455 mg de sels minéraux par litre, soit 682,5 mg par bouteille de 1,5 L.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans un grand tube à essais, on verse de l'eau, puis de l'huile, puis quelques gouttes de sirop de grenadine (rouge). On agite, puis on laisse reposer cinq minutes. a) L'eau et le sirop sont-ils miscibles ? Et l'eau et l'huile ? b) Décrivez ce que l'on observe dans le tube après le repos : combien de couches, de quelle couleur, dans quel ordre ? c) Le contenu du tube est-il un mélange homogène ou hétérogène ? d) Juste après avoir agité, l'huile forme de petites gouttes dans l'eau rouge. Est-ce que les deux liquides sont devenus miscibles ? Justifiez.",
              hint: "Traitez d'abord les liquides deux par deux. Rappelez-vous où se place l'huile par rapport à l'eau, et ce qui se passe quand on attend.",
              solution: [
                "a) L'eau et le sirop sont miscibles : ils forment un mélange homogène. L'eau et l'huile sont non miscibles.",
                "b) On observe deux couches : en bas, une couche rouge et limpide (l'eau mélangée au sirop) ; en haut, la couche jaune pâle de l'huile. La limite entre les deux est nette.",
                "c) On distingue deux couches à l'œil nu : c'est un mélange hétérogène.",
                "d) Non. Les gouttes d'huile restent visibles et, au repos, elles remontent et reforment une couche au-dessus de l'eau : l'huile et l'eau restent non miscibles, même après avoir été agitées.",
                "Conclusion : le tube contient un mélange hétérogène en deux couches, eau sucrée rouge en bas et huile en haut.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Homogène ou hétérogène, ne vous laissez pas piéger.",
            statements: [
              { text: "L'eau du robinet est de l'eau pure.", true: false, why: "Elle contient des sels minéraux dissous : c'est un mélange homogène." },
              { text: "L'air est un mélange homogène de plusieurs gaz.", true: true, why: "L'air contient surtout du diazote et du dioxygène, que l'on ne peut pas distinguer à l'œil nu." },
              { text: "Un liquide coloré ne peut pas être limpide.", true: false, why: "Limpide veut dire transparent : un sirop dilué est coloré et limpide." },
              { text: "L'eau et l'huile sont des liquides non miscibles.", true: true, why: "Elles forment deux couches séparées, l'huile au-dessus." },
              { text: "Une eau trouble est un mélange hétérogène.", true: true, why: "On y voit de petites particules en suspension : on distingue au moins deux constituants." },
              { text: "Si l'on agite longtemps de l'eau et de l'huile, elles deviennent miscibles.", true: false, why: "Après un moment de repos, l'huile remonte et les deux couches se reforment." },
            ],
          },
          quiz: [
            {
              q: "Quel mélange est hétérogène ?",
              options: ["De l'eau sucrée", "De l'eau et du sable", "De l'eau minérale", "De la grenadine à l'eau"],
              answer: 1,
              why: "Dans l'eau et le sable, on distingue les deux constituants à l'œil nu : le mélange est hétérogène.",
            },
            {
              q: "Que signifie « limpide » ?",
              options: ["Transparent", "Sans couleur", "Sans aucun constituant dissous", "Très liquide"],
              answer: 0,
              why: "Un liquide limpide est transparent ; il peut être coloré et contenir des matières dissoutes.",
            },
            {
              q: "On mélange de l'eau et du vinaigre et on obtient un liquide d'un seul aspect. Ces deux liquides sont :",
              options: ["non miscibles", "solides", "miscibles", "hétérogènes"],
              answer: 2,
              why: "Deux liquides qui forment un mélange homogène sont miscibles.",
            },
            {
              q: "Dans un verre contenant de l'eau et de l'huile, au repos, où se trouve l'huile ?",
              options: ["Au fond du verre", "Mélangée à l'eau dans tout le verre", "Sur les parois seulement", "Au-dessus de l'eau"],
              answer: 3,
              why: "L'eau et l'huile sont non miscibles, et l'huile se place au-dessus de l'eau.",
            },
            {
              q: "Pourquoi l'eau minérale est-elle un mélange ?",
              options: ["Parce qu'elle contient des sels minéraux dissous", "Parce qu'elle est trouble et qu'on y voit des grains", "Parce qu'elle est vendue en bouteille fermée", "Parce qu'elle sort d'une source dans la montagne"],
              answer: 0,
              why: "L'étiquette indique les sels minéraux dissous dans l'eau : il y a plusieurs constituants, c'est un mélange (homogène).",
            },
          ],
          trap: "Croire qu'un liquide limpide est forcément pur, alors que l'eau salée ou l'eau minérale sont limpides et contiennent des matières dissoutes ; ou confondre « limpide » et « incolore ».",
          method: "Pour classer un mélange, posez une seule question : « Est-ce que je vois au moins deux constituants à l'œil nu ? » Oui : hétérogène. Non : homogène. Puis vérifiez avec un exemple connu (eau et sable, eau sucrée).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dissolution',
          title: 'La dissolution : quand un solide disparaît dans l\'eau',
          minutes: 30,
          objectives: [
            "Utiliser le vocabulaire de la dissolution : soluté, solvant, solution, soluble, insoluble.",
            "Montrer que la masse se conserve lors d'une dissolution.",
            "Distinguer une dissolution d'une fusion.",
            "Identifier une solution saturée.",
          ],
          course: [
            {
              heading: "Dissoudre un solide dans l'eau",
              paragraphs: [
                "Quand on verse du sucre dans de l'eau et que l'on mélange, le sucre semble disparaître. Pourtant, il est toujours là : l'eau a un goût sucré (on peut goûter à la cuisine, jamais au laboratoire). Le sucre s'est dissous : c'est une dissolution.",
                "On utilise trois mots précis. Le solvant est le liquide qui dissout, ici l'eau. Le soluté est la matière qui se dissout, ici le sucre. La solution est le mélange homogène obtenu, ici l'eau sucrée. Quand le solvant est l'eau, on parle de solution aqueuse.",
                "Toutes les matières ne se dissolvent pas dans l'eau. Le sel et le sucre sont solubles dans l'eau. Le sable, la farine ou l'huile sont insolubles dans l'eau : même en agitant, on les voit toujours, et le mélange reste hétérogène.",
              ],
              box: { label: "Définition", text: "Dissolution : un soluté se mélange à un solvant et on ne le voit plus. On obtient une solution, qui est un mélange homogène. Exemple : sel (soluté) + eau (solvant) → eau salée (solution)." },
            },
            {
              heading: "Ne pas confondre dissolution et fusion",
              paragraphs: [
                "Dans la vie courante, on dit souvent que le sucre « fond » dans le café. C'est une erreur de vocabulaire. Une fusion est un changement d'état : une seule matière passe de l'état solide à l'état liquide parce qu'on la chauffe, comme un glaçon qui devient de l'eau liquide.",
                "Dans une dissolution, il y a deux matières, le soluté et le solvant, et le soluté se mélange au liquide, même à température ambiante. Le sucre se dissout dans l'eau froide. Pour faire fondre du sucre seul, il faut le chauffer très fort dans une casserole : il devient alors liquide et se transforme en caramel.",
              ],
              box: { label: "À retenir", text: "Le sucre se dissout dans l'eau, il ne fond pas. La fusion concerne une seule matière que l'on chauffe ; la dissolution, un soluté qui se mélange à un solvant." },
            },
            {
              heading: "La masse se conserve lors d'une dissolution",
              paragraphs: [
                "Si l'on dissout 10 g de sel dans 200 g d'eau, la solution obtenue a une masse de 200 + 10 = 210 g. Le soluté ne disparaît pas : il est toujours dans la solution, simplement on ne le voit plus.",
                "On peut le vérifier avec une balance. On pose sur le plateau un verre d'eau et, à côté, une coupelle contenant le sel. On note la masse totale. On verse le sel dans l'eau, on mélange, puis on repose la coupelle vide à côté du verre : la balance affiche la même masse qu'avant.",
              ],
              box: { label: "Propriété", text: "Lors d'une dissolution, la masse se conserve : masse de la solution = masse du solvant + masse du soluté." },
            },
            {
              heading: "Une limite : la solution saturée",
              paragraphs: [
                "On ne peut pas dissoudre une quantité illimitée de soluté dans un volume donné de solvant. À 20 °C, on peut dissoudre au maximum environ 360 g de sel dans 1 L d'eau. Si l'on en ajoute davantage, le sel en trop ne se dissout plus et reste au fond, même si l'on agite : la solution est saturée.",
                "Cette limite dépend du soluté : à 20 °C, on peut dissoudre environ 2 kg de sucre dans 1 L d'eau, beaucoup plus que de sel. Elle dépend aussi de la température : dans l'eau chaude, on peut dissoudre beaucoup plus de sucre que dans l'eau froide.",
                "Agiter, chauffer ou utiliser du sucre en poudre plutôt qu'en morceaux permet de dissoudre plus vite. Les gaz peuvent aussi se dissoudre dans l'eau : le dioxyde de carbone dissous dans les boissons gazeuses forme des bulles quand on ouvre la bouteille, et le dioxygène dissous dans l'eau permet aux poissons de respirer.",
              ],
              box: { label: "Définition", text: "Une solution est saturée quand on ne peut plus y dissoudre de soluté : le soluté en trop reste visible au fond." },
            },
          ],
          keyPoints: [
            "Dissolution : un soluté (sel, sucre) se mélange à un solvant (eau) ; on obtient une solution, mélange homogène.",
            "Soluble : qui se dissout (sel, sucre). Insoluble : qui ne se dissout pas (sable, farine, huile dans l'eau).",
            "Le sucre se dissout, il ne fond pas : la fusion est un changement d'état d'une seule matière.",
            "La masse se conserve : masse de la solution = masse du solvant + masse du soluté.",
            "Une solution saturée ne peut plus dissoudre de soluté (environ 360 g de sel par litre d'eau à 20 °C).",
            "Agiter, chauffer et utiliser des grains fins accélèrent la dissolution.",
          ],
          example: {
            statement: "On prépare une boisson en dissolvant 15 g de sucre dans 250 g d'eau. a) Nommez le soluté, le solvant et la solution. b) Quelle est la masse de la boisson obtenue ?",
            solution: [
              "a) Le sucre est la matière qui se dissout : c'est le soluté. L'eau est le liquide qui dissout : c'est le solvant. L'eau sucrée obtenue est la solution.",
              "b) Lors d'une dissolution, la masse se conserve : masse de la solution = masse du solvant + masse du soluté.",
              "Calcul : 250 + 15 = 265 g.",
              "Réponse : soluté = sucre, solvant = eau, solution = eau sucrée, de masse 265 g.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Pour faire cuire des pâtes, on dissout du sel dans l'eau. Nommez le soluté, le solvant et la solution. b) Classez ces matières en solubles ou insolubles dans l'eau : sucre, sable, sel, huile, farine.",
              hint: "Le soluté est ce qui se dissout, le solvant ce qui dissout. Pour b), imaginez ce que l'on voit après avoir agité chaque matière dans l'eau.",
              solution: [
                "a) Soluté : le sel. Solvant : l'eau. Solution : l'eau salée.",
                "b) Solubles dans l'eau (on obtient un mélange homogène) : le sucre et le sel.",
                "Insolubles dans l'eau (on les voit toujours, mélange hétérogène) : le sable, l'huile, la farine.",
              ],
            },
            {
              level: 2,
              statement: "On pose sur une balance un verre contenant 150 g d'eau et, à côté, une coupelle contenant 6 g de sel. La balance affiche 248 g. On verse tout le sel dans l'eau, on agite jusqu'à ce qu'on ne le voie plus, puis on repose la coupelle vide sur la balance, à côté du verre. a) Quelle masse la balance affiche-t-elle maintenant ? Justifiez. b) Quelle est la masse de la solution ? c) Élise dit : « Le sel a disparu. » Que lui répondez-vous ?",
              hint: "Rien n'est sorti de la balance : tout ce qui était sur le plateau y est encore.",
              solution: [
                "a) Lors d'une dissolution, la masse se conserve, et rien n'a quitté le plateau : la balance affiche toujours 248 g.",
                "b) Masse de la solution = masse de l'eau + masse du sel = 150 + 6 = 156 g.",
                "c) Le sel n'a pas disparu : il s'est dissous. Il est toujours dans l'eau, mais on ne le voit plus. La preuve : la masse n'a pas changé, et l'eau a un goût salé (à vérifier à la cuisine, jamais au laboratoire).",
                "Résultat : 248 g sur la balance, 156 g de solution, et le sel est toujours présent, dissous.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Donnée : à 20 °C, on peut dissoudre au maximum environ 360 g de sel dans 1 L d'eau. Nina verse 200 g de sel dans 500 mL d'eau à 20 °C et agite longtemps. a) Quelle masse maximale de sel peut-on dissoudre dans 500 mL d'eau ? b) Que va observer Nina ? Quelle masse de sel ne se dissout pas ? c) Comment appelle-t-on la solution obtenue ? d) Nina veut dissoudre le sel restant sans chauffer. Proposez une solution et vérifiez qu'elle fonctionne si elle ajoute 100 mL d'eau.",
              hint: "500 mL, c'est la moitié de 1 L. Pour d), calculez combien de sel 100 mL d'eau peuvent dissoudre (100 mL, c'est le dixième de 1 L).",
              solution: [
                "a) 500 mL est la moitié de 1 L : 360 ÷ 2 = 180 g de sel au maximum.",
                "b) Nina a versé 200 g, soit plus que 180 g. Le sel en trop reste au fond, même si elle agite : 200 - 180 = 20 g de sel ne se dissolvent pas.",
                "c) On ne peut plus dissoudre de sel : la solution est saturée.",
                "d) Elle peut ajouter de l'eau. 100 mL d'eau peuvent dissoudre 360 ÷ 10 = 36 g de sel au maximum. Comme 20 g est moins que 36 g, les 20 g restants se dissolvent.",
                "Conclusion : 180 g se dissolvent, 20 g restent au fond d'une solution saturée ; en ajoutant 100 mL d'eau, tout le sel se dissout.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Solvant", right: "Le liquide qui dissout, par exemple l'eau" },
              { left: "Soluté", right: "La matière qui se dissout, par exemple le sel" },
              { left: "Solution", right: "Le mélange homogène obtenu après la dissolution" },
              { left: "Insoluble", right: "Qui ne se dissout pas, comme le sable dans l'eau" },
              { left: "Solution saturée", right: "Solution qui ne peut plus dissoudre de soluté" },
            ],
          },
          quiz: [
            {
              q: "Dans de l'eau sucrée, quel est le solvant ?",
              options: ["Le sucre", "L'eau sucrée", "L'eau", "Le verre"],
              answer: 2,
              why: "Le solvant est le liquide qui dissout : ici, l'eau. Le sucre est le soluté et l'eau sucrée la solution.",
            },
            {
              q: "On dissout 20 g de sel dans 300 g d'eau. Quelle est la masse de la solution ?",
              options: ["300 g", "280 g", "20 g", "320 g"],
              answer: 3,
              why: "La masse se conserve : 300 + 20 = 320 g.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["Le sucre fond dans le café chaud", "Le sucre se dissout dans le café", "Le sucre s'évapore dans le café", "Le sucre se solidifie dans le café"],
              answer: 1,
              why: "Le sucre se mélange au café sans changer d'état seul : c'est une dissolution, pas une fusion.",
            },
            {
              q: "Du sel reste au fond de l'eau malgré une longue agitation. La solution est :",
              options: ["saturée", "insoluble", "hétérogène sans aucun sel dissous", "en train de fondre"],
              answer: 0,
              why: "On ne peut plus dissoudre de sel : la solution est saturée. Elle contient pourtant beaucoup de sel dissous.",
            },
            {
              q: "Quelle matière est insoluble dans l'eau ?",
              options: ["Le sel de cuisine", "Le sucre en poudre", "Le sable", "Le sirop de fraise"],
              answer: 2,
              why: "Le sable reste visible au fond de l'eau, même après agitation : il est insoluble.",
            },
          ],
          trap: "Dire que le sucre « fond » dans l'eau au lieu de dire qu'il se dissout, ou croire qu'un soluté dissous a disparu et que sa masse ne compte plus.",
          method: "Pour ne pas mélanger les trois mots, retenez la phrase : « le soluté se dissout dans le solvant pour former la solution ». Et pour chaque calcul de masse, écrivez d'abord la formule en mots avant de mettre les nombres.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'separer-melange',
          title: 'Séparer un mélange : décantation et filtration',
          minutes: 30,
          objectives: [
            "Mettre en œuvre un protocole de séparation des constituants d'un mélange.",
            "Réaliser une décantation et une filtration, et en utiliser le vocabulaire.",
            "Récupérer un solide dissous par évaporation.",
            "Choisir une technique de séparation adaptée à un mélange.",
          ],
          course: [
            {
              heading: "La décantation",
              paragraphs: [
                "Quand on laisse reposer de l'eau boueuse, les particules de terre tombent peu à peu au fond du récipient et forment un dépôt. Le liquide au-dessus devient moins trouble. Cette séparation par simple repos s'appelle la décantation.",
                "Après la décantation, on peut verser doucement le liquide dans un autre récipient, sans remuer le dépôt : c'est le transvasement. Le liquide obtenu est plus clair, mais il contient souvent encore de très fines particules.",
                "La décantation sert aussi à séparer deux liquides non miscibles, comme l'eau et l'huile. Au laboratoire, on utilise une ampoule à décanter : un récipient muni d'un robinet en bas. Après le repos, on ouvre le robinet pour faire couler l'eau, qui est en bas, et on le referme juste avant que l'huile n'arrive.",
              ],
              box: { label: "Définition", text: "Décantation : séparation obtenue en laissant reposer un mélange ; les particules solides se déposent au fond, ou deux liquides non miscibles se séparent en couches." },
            },
            {
              heading: "La filtration",
              paragraphs: [
                "Pour obtenir un liquide limpide, on réalise une filtration. On plie un filtre en papier, on le place dans un entonnoir posé sur un bécher, puis on verse le liquide trouble dans le filtre. Le papier filtre est percé de trous minuscules : le liquide passe à travers, mais les particules solides plus grosses que les trous sont retenues.",
                "Le liquide recueilli sous le filtre s'appelle le filtrat. Ce qui reste dans le filtre s'appelle le résidu. On utilise la filtration tous les jours : le filtre d'une cafetière retient le marc de café, une passoire retient les pâtes (c'est une filtration grossière, avec de gros trous).",
              ],
              box: { label: "Définition", text: "Filtration : on fait passer un mélange à travers un filtre. Le liquide qui passe est le filtrat ; les particules solides retenues forment le résidu." },
            },
            {
              heading: "Ce que la filtration ne sépare pas",
              paragraphs: [
                "Si l'on filtre de l'eau salée, le filtrat est toujours salé. Le sel dissous passe à travers le filtre avec l'eau : la filtration ne sépare pas un solide dissous de son solvant. Un filtrat limpide n'est donc pas forcément de l'eau pure.",
                "Pour récupérer un solide dissous, on fait évaporer le solvant. On chauffe doucement la solution, ou on la laisse au soleil : l'eau s'évapore et le sel reste sous forme de petits cristaux. C'est ainsi que l'on produit le sel dans les marais salants, comme à Guérande ou en Camargue : l'eau de mer s'évapore au soleil et au vent, et le sel se dépose.",
              ],
              box: { label: "À retenir", text: "La décantation et la filtration séparent les solides non dissous. Pour récupérer un solide dissous, on fait évaporer le solvant." },
            },
            {
              heading: "Rendre l'eau potable",
              paragraphs: [
                "L'eau des rivières ou des nappes souterraines doit être traitée avant d'arriver au robinet. Dans une usine de production d'eau potable, on la fait d'abord passer à travers des grilles qui retiennent les gros déchets (branches, feuilles). Elle passe ensuite dans de grands bassins où les particules se déposent au fond : c'est la décantation.",
                "L'eau est ensuite filtrée à travers des couches de sable, qui retiennent les particules les plus fines. Enfin, elle est désinfectée, par exemple avec du chlore ou de l'ozone, pour éliminer les microbes. L'eau potable ainsi obtenue est limpide, mais ce n'est pas de l'eau pure : elle contient toujours des sels minéraux dissous.",
              ],
              box: { label: "Repère", text: "Les grandes étapes de la potabilisation : grilles (dégrillage), décantation, filtration sur sable, désinfection." },
            },
          ],
          keyPoints: [
            "Décantation : on laisse reposer, les particules se déposent au fond ; puis on transvase doucement le liquide.",
            "L'ampoule à décanter sépare deux liquides non miscibles, comme l'eau et l'huile.",
            "Filtration : le filtre retient les particules solides (le résidu) ; le liquide qui passe est le filtrat.",
            "La filtration ne retient pas un solide dissous : de l'eau salée filtrée reste salée.",
            "Pour récupérer un solide dissous, on fait évaporer le solvant (marais salants).",
            "Eau potable : grilles, décantation, filtration, désinfection ; elle contient encore des sels minéraux.",
          ],
          example: {
            statement: "On dispose d'eau boueuse et salée. Proposez une suite d'étapes pour obtenir de l'eau limpide, puis récupérer le sel.",
            solution: [
              "Étape 1 : on laisse reposer le mélange. La terre se dépose au fond : c'est la décantation. On verse ensuite doucement le liquide dans un autre récipient.",
              "Étape 2 : le liquide est encore un peu trouble. On le filtre avec un filtre en papier dans un entonnoir. Le filtrat obtenu est limpide ; les dernières particules de terre forment le résidu.",
              "Étape 3 : le filtrat est limpide mais toujours salé, car le sel dissous a traversé le filtre. On le fait évaporer en le chauffant doucement ou en le laissant au soleil.",
              "Étape 4 : quand toute l'eau s'est évaporée, il reste des cristaux de sel au fond du récipient.",
              "Réponse : décantation, puis filtration pour obtenir de l'eau limpide (mais salée), puis évaporation pour récupérer le sel.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, choisissez la technique adaptée (décantation, filtration ou évaporation) : a) récupérer le sel contenu dans de l'eau de mer ; b) séparer l'huile et le vinaigre d'une vinaigrette au repos ; c) obtenir un café sans marc ; d) laisser une eau boueuse s'éclaircir en attendant.",
              hint: "Demandez-vous si ce que l'on veut séparer est dissous ou non, solide ou liquide.",
              solution: [
                "a) Le sel est dissous : on fait évaporer l'eau. Évaporation.",
                "b) Deux liquides non miscibles qui se séparent en couches au repos : décantation (avec une ampoule à décanter au laboratoire).",
                "c) Le marc est un solide non dissous retenu par le filtre : filtration.",
                "d) Les particules de terre se déposent au fond par simple repos : décantation.",
              ],
            },
            {
              level: 2,
              statement: "Tom a mélangé dans un bocal de l'eau, du sable et du sel. Il veut récupérer séparément le sable et le sel. a) Quel constituant est dissous ? Lequel ne l'est pas ? b) Rédigez un protocole en trois étapes, en nommant chaque technique. c) Tom pense qu'après la filtration, il obtient de l'eau pure. A-t-il raison ?",
              hint: "Séparez d'abord ce qui n'est pas dissous, puis occupez-vous de ce qui est dissous.",
              solution: [
                "a) Le sel est dissous dans l'eau (il est soluble). Le sable ne l'est pas (il est insoluble).",
                "b) Étape 1 : laisser reposer le bocal pour que le sable se dépose au fond (décantation), puis verser doucement l'eau dans un bécher. Étape 2 : filtrer l'eau pour retenir les derniers grains de sable (filtration) ; le sable est le résidu, l'eau salée est le filtrat. Étape 3 : faire évaporer le filtrat ; le sel reste au fond (évaporation).",
                "c) Non : le filtrat est limpide, mais il contient encore le sel dissous, qui traverse le filtre. Ce n'est pas de l'eau pure.",
                "Résultat : décantation, filtration, évaporation ; le filtrat est de l'eau salée, pas de l'eau pure.",
              ],
            },
            {
              level: 3,
              statement: "Défi. L'eau de mer contient en moyenne environ 35 g de sels dissous par litre, surtout du sel de cuisine. Un marais salant fonctionne grâce au soleil et au vent. a) Quel changement d'état permet de récupérer le sel ? b) Quelle masse de sels obtient-on en faisant évaporer 2 L d'eau de mer ? c) Combien de litres d'eau de mer faut-il faire évaporer, environ, pour obtenir 1 kg de sels ? Arrondissez à l'unité. d) Pourquoi ne pourrait-on pas récupérer ce sel avec un filtre ?",
              hint: "Pour c), convertissez 1 kg en grammes, puis cherchez combien de fois 35 g il y a dans cette masse.",
              solution: [
                "a) L'eau liquide passe à l'état gazeux à la surface de l'eau, lentement : c'est une vaporisation par évaporation. Le sel, lui, reste dans le bassin.",
                "b) 2 × 35 = 70 g de sels.",
                "c) 1 kg = 1 000 g. 1 000 ÷ 35 ≈ 28,6. Il faut donc environ 29 L d'eau de mer.",
                "d) Le sel est dissous dans l'eau de mer : il passe à travers le filtre avec l'eau. La filtration ne retient que les solides non dissous.",
                "Conclusion : par évaporation, 2 L d'eau de mer donnent environ 70 g de sels, et il faut environ 29 L d'eau de mer pour 1 kg de sels.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour récupérer le sel d'une eau boueuse et salée.",
            items: [
              "Laisser reposer le mélange pour que la terre se dépose au fond",
              "Verser doucement le liquide dans un autre récipient, sans remuer le dépôt",
              "Filtrer le liquide encore trouble avec un filtre en papier",
              "Recueillir le filtrat limpide mais salé",
              "Faire évaporer l'eau du filtrat en la chauffant doucement",
              "Récupérer les cristaux de sel restés au fond",
            ],
          },
          quiz: [
            {
              q: "Comment s'appelle le liquide qui a traversé un filtre ?",
              options: ["Le résidu", "Le dépôt", "La solution", "Le filtrat"],
              answer: 3,
              why: "Le liquide recueilli sous le filtre est le filtrat ; ce qui reste dans le filtre est le résidu.",
            },
            {
              q: "On filtre de l'eau salée. Le filtrat est :",
              options: ["de l'eau pure", "de l'eau toujours salée", "du sel sans eau", "un mélange hétérogène trouble"],
              answer: 1,
              why: "Le sel dissous traverse le filtre avec l'eau : le filtrat est toujours salé.",
            },
            {
              q: "Quelle technique permet de récupérer un solide dissous ?",
              options: ["L'évaporation du solvant", "La filtration sur papier", "La décantation au repos", "Le transvasement doux"],
              answer: 0,
              why: "On fait évaporer le solvant (l'eau) : le solide dissous reste au fond sous forme de cristaux.",
            },
            {
              q: "À quoi sert une ampoule à décanter ?",
              options: ["À dissoudre du sel plus vite en agitant fort", "À séparer deux liquides non miscibles", "À mesurer le volume d'un liquide très précisément", "À chauffer une solution"],
              answer: 1,
              why: "On laisse les deux liquides se séparer en couches, puis on fait couler celui du bas par le robinet.",
            },
            {
              q: "Dans une usine de production d'eau potable, quelle étape élimine les microbes ?",
              options: ["Le passage à travers les grilles", "La décantation dans les bassins", "La désinfection", "La filtration à travers des couches de sable"],
              answer: 2,
              why: "Les grilles, la décantation et la filtration retirent des particules ; la désinfection (chlore, ozone) élimine les microbes.",
            },
          ],
          trap: "Croire qu'un filtrat limpide est de l'eau pure : la filtration ne retient pas ce qui est dissous, et l'eau salée filtrée reste salée.",
          method: "Avant de choisir une technique, demandez-vous : le constituant à séparer est-il dissous ou non ? Non dissous : décantation puis filtration. Dissous : évaporation. Rédigez toujours un protocole en étapes numérotées, une action par étape.",
        },
      ],
    },
    {
      id: 'classer-vivant',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'notion-espece',
          title: 'Qu\'est-ce qu\'une espèce ?',
          minutes: 25,
          objectives: [
            "Définir une espèce à l'aide du critère de reproduction et de la descendance fertile.",
            "Identifier la diversité des individus au sein d'une même espèce.",
            "Utiliser et écrire correctement le nom scientifique d'une espèce.",
          ],
          course: [
            {
              heading: "Des individus qui se ressemblent, mais tous différents",
              paragraphs: [
                "Un individu est un être vivant unique : votre chat, le chêne de la cour, vous-même. Les individus d'une même espèce se ressemblent beaucoup : tous les êtres humains ont le même nombre de membres, les mêmes organes, la même façon de se déplacer.",
                "Pourtant, deux individus d'une même espèce ne sont jamais tout à fait identiques. Chez les humains, la couleur des yeux, des cheveux, la taille ou le groupe sanguin varient. Chez le chien, l'éleveur a sélectionné des races très différentes : un chihuahua et un saint-bernard ne se ressemblent guère, mais ce sont tous deux des chiens. Cette variété à l'intérieur d'une espèce fait partie de la biodiversité.",
              ],
              box: { label: "À retenir", text: "Les individus d'une même espèce se ressemblent, mais chacun est unique : il existe une diversité à l'intérieur de chaque espèce." },
            },
            {
              heading: "Le critère de reproduction",
              paragraphs: [
                "Pour savoir si deux individus appartiennent à la même espèce, la ressemblance ne suffit pas. Les scientifiques utilisent un critère plus sûr : la reproduction. Deux individus de la même espèce peuvent se reproduire ensemble, et leurs descendants sont fertiles, c'est-à-dire qu'ils peuvent eux-mêmes avoir des petits.",
                "Un labrador et un caniche peuvent avoir des chiots, qui pourront à leur tour avoir des chiots : ce sont des chiens, de la même espèce. En revanche, un âne et une jument peuvent avoir un petit, le mulet ou la mule, mais celui-ci est presque toujours stérile : il ne peut pas avoir de descendants. L'âne et le cheval appartiennent donc à deux espèces différentes.",
              ],
              box: { label: "Définition", text: "Une espèce est un ensemble d'individus qui se ressemblent et qui peuvent se reproduire entre eux en donnant des descendants fertiles." },
            },
            {
              heading: "Quand l'apparence trompe",
              paragraphs: [
                "Certains individus très différents d'aspect appartiennent à la même espèce. Chez le canard colvert, le mâle a la tête verte et brillante, alors que la femelle est brune : ils forment pourtant des couples et ont des canetons fertiles. Une chenille et le papillon qu'elle deviendra sont même le même individu, à deux moments de sa vie.",
                "À l'inverse, deux espèces peuvent se ressembler beaucoup. Le pouillot véloce et le pouillot fitis sont deux petits oiseaux presque impossibles à distinguer à l'œil. Mais leurs chants sont différents et, dans la nature, ils ne se reproduisent normalement pas ensemble : ce sont deux espèces distinctes.",
              ],
            },
            {
              heading: "Le nom scientifique d'une espèce",
              paragraphs: [
                "Le nom courant d'un animal change selon les langues et parfois les régions : le chat se dit « cat » en anglais et « gato » en espagnol. Pour se comprendre dans le monde entier, les scientifiques donnent à chaque espèce un nom scientifique en latin, formé de deux mots. Cette méthode a été généralisée au XVIIIe siècle par le naturaliste suédois Carl von Linné.",
                "Le premier mot est le nom du genre, avec une majuscule ; le second désigne l'espèce, sans majuscule. Le nom s'écrit en italique (souligné quand on l'écrit à la main). L'être humain est Homo sapiens, le lion Panthera leo, le tigre Panthera tigris, le chat domestique Felis catus. Le lion et le tigre ont le même premier mot : ils appartiennent au même genre, ce sont des espèces proches.",
              ],
              box: { label: "Règle", text: "Nom scientifique : Genre + espèce, en latin, en italique (ou souligné à la main), le genre avec une majuscule. Exemple : Homo sapiens." },
            },
          ],
          keyPoints: [
            "Une espèce : des individus qui se ressemblent et qui se reproduisent entre eux en donnant des descendants fertiles.",
            "Chaque individu est unique : il existe une diversité à l'intérieur de chaque espèce (races de chiens, couleur des yeux).",
            "Âne + jument donnent un mulet presque toujours stérile : l'âne et le cheval sont deux espèces.",
            "La ressemblance ne suffit pas : un mâle et une femelle peuvent être très différents (canard colvert).",
            "Nom scientifique : deux mots latins, Genre (majuscule) + espèce, en italique : Homo sapiens.",
          ],
          example: {
            statement: "Un âne et une jument ont un petit, une mule. Devenue adulte, la mule ne peut pas avoir de petits. L'âne et le cheval appartiennent-ils à la même espèce ? Justifiez.",
            solution: [
              "On rappelle la définition : deux individus sont de la même espèce s'ils peuvent se reproduire ensemble et donner des descendants fertiles.",
              "L'âne et la jument ont pu avoir un petit : ils peuvent se reproduire ensemble.",
              "Mais la mule est stérile : leur descendant n'est pas fertile.",
              "Réponse : l'âne et le cheval n'appartiennent pas à la même espèce ; ce sont deux espèces différentes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque cas, dites si les deux parents appartiennent à la même espèce, et justifiez : a) un labrador et un caniche ont des chiots, qui auront à leur tour des chiots ; b) un cheval et une ânesse ont un petit, le bardot, presque toujours stérile ; c) un chat roux et une chatte noire ont des chatons, qui deviendront à leur tour parents.",
              hint: "Ne regardez pas l'apparence des parents : regardez si leurs descendants sont fertiles.",
              solution: [
                "a) Les chiots sont fertiles : le labrador et le caniche sont de la même espèce (ce sont des chiens).",
                "b) Le bardot est presque toujours stérile : le cheval et l'âne sont deux espèces différentes.",
                "c) Les chatons sont fertiles : le chat roux et la chatte noire sont de la même espèce, malgré leur couleur différente.",
              ],
            },
            {
              level: 2,
              statement: "Voici cinq noms scientifiques : Panthera leo (lion), Panthera tigris (tigre), Panthera pardus (léopard), Panthera onca (jaguar), Felis catus (chat domestique). a) Combien d'espèces sont citées ? b) Combien de genres différents ? Lesquels ? c) Le lion est-il plus proche du jaguar ou du chat domestique ? Justifiez. d) Un élève a écrit « homo Sapiens ». Corrigez son erreur.",
              hint: "Chaque nom scientifique désigne une espèce ; le premier mot désigne le genre.",
              solution: [
                "a) Chaque nom désigne une espèce : il y a 5 espèces.",
                "b) Il y a 2 genres : Panthera (lion, tigre, léopard, jaguar) et Felis (chat domestique).",
                "c) Le lion et le jaguar appartiennent au même genre, Panthera ; le chat domestique appartient au genre Felis. Le lion est donc plus proche du jaguar.",
                "d) Le genre prend une majuscule et l'espèce une minuscule : on écrit Homo sapiens, en italique ou souligné à la main.",
                "Résultat : 5 espèces, 2 genres, et le lion est plus proche du jaguar que du chat.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Léo observe trois situations. 1) Au bord d'un étang, un canard à tête verte et un canard brun, beaucoup plus terne, nagent ensemble : ce sont un mâle et une femelle de canard colvert, qui auront des canetons. 2) Deux petits oiseaux, le pouillot véloce et le pouillot fitis, ont presque le même plumage, mais des chants différents, et ne se reproduisent pas ensemble. 3) Une chenille se transforme en papillon. Léo conclut : « Pour savoir si deux êtres vivants sont de la même espèce, il suffit de regarder s'ils se ressemblent. » a) Montrez avec la situation 1 que Léo se trompe. b) Montrez avec la situation 2 qu'il se trompe aussi. c) Que montre la situation 3 ? d) Rédigez une phrase correcte pour Léo.",
              hint: "Pour chaque situation, comparez l'apparence et la possibilité de se reproduire ensemble.",
              solution: [
                "a) Le mâle et la femelle colvert ne se ressemblent pas, mais ils se reproduisent et ont des canetons fertiles : ils sont de la même espèce. Des individus différents peuvent donc être de la même espèce.",
                "b) Les deux pouillots se ressemblent beaucoup, mais ils ne se reproduisent pas ensemble : ce sont deux espèces différentes. Des individus semblables peuvent donc être d'espèces différentes.",
                "c) La chenille et le papillon ne se ressemblent pas du tout, et pourtant c'est le même individu, à deux étapes de son développement.",
                "d) « Pour savoir si deux êtres vivants sont de la même espèce, il faut vérifier qu'ils peuvent se reproduire ensemble et avoir des descendants fertiles ; la ressemblance ne suffit pas. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Individu", right: "Un être vivant unique, par exemple votre chat" },
              { left: "Espèce", right: "Des individus qui se reproduisent entre eux avec une descendance fertile" },
              { left: "Fertile", right: "Capable d'avoir des descendants" },
              { left: "Stérile", right: "Incapable d'avoir des descendants, comme le mulet" },
              { left: "Genre", right: "Premier mot du nom scientifique, avec une majuscule" },
              { left: "Homo sapiens", right: "Le nom scientifique de l'être humain" },
            ],
          },
          quiz: [
            {
              q: "Quel critère permet de dire que deux individus sont de la même espèce ?",
              options: ["Ils ont la même couleur", "Ils vivent dans le même milieu et au même endroit", "Ils mangent la même nourriture", "Ils ont ensemble des descendants fertiles"],
              answer: 3,
              why: "Le critère de l'espèce est la reproduction : des descendants fertiles.",
            },
            {
              q: "Le mulet, né d'un âne et d'une jument, est presque toujours stérile. On en conclut que :",
              options: ["l'âne et le cheval sont deux espèces différentes", "l'âne et le cheval sont de la même espèce, mais de races différentes", "le mulet est une troisième espèce fertile", "la jument est stérile"],
              answer: 0,
              why: "Comme leur descendant n'est pas fertile, l'âne et le cheval n'appartiennent pas à la même espèce.",
            },
            {
              q: "Quelle écriture du nom scientifique de l'être humain est correcte ?",
              options: ["homo sapiens", "Homo sapiens", "Homo Sapiens", "HOMO SAPIENS"],
              answer: 1,
              why: "Le genre prend une majuscule, l'espèce une minuscule, et le tout s'écrit en italique.",
            },
            {
              q: "Un chihuahua et un saint-bernard :",
              options: ["sont deux espèces, car ils ne se ressemblent pas", "ne peuvent pas avoir de petits", "appartiennent à la même espèce", "appartiennent à deux genres différents"],
              answer: 2,
              why: "Ce sont deux races de chiens : malgré leur différence d'aspect, ils sont de la même espèce.",
            },
            {
              q: "Que nous apprend le nom scientifique Panthera tigris ?",
              options: ["Le tigre appartient au genre Panthera", "Le tigre vit dans la jungle", "Le tigre a été découvert par Linné", "Le tigre est le plus grand des félins"],
              answer: 0,
              why: "Le premier mot du nom scientifique est le genre : le tigre appartient au genre Panthera, comme le lion.",
            },
          ],
          trap: "Croire que deux êtres vivants qui se ressemblent sont forcément de la même espèce, ou que deux êtres différents d'aspect (races de chiens, mâle et femelle) appartiennent à deux espèces : le critère est la descendance fertile.",
          method: "Face à une question sur l'espèce, cherchez toujours dans le document l'information sur la descendance : y a-t-il des petits ? Ces petits sont-ils fertiles ? Ne vous fiez jamais seulement aux photos.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'groupes-emboites',
          title: 'Classer les êtres vivants en groupes emboîtés',
          minutes: 35,
          objectives: [
            "Distinguer trier selon un critère (milieu de vie, alimentation) et classer selon les attributs.",
            "Classer des organismes en groupes emboîtés à partir des attributs qu'ils possèdent.",
            "Identifier des liens de parenté entre des organismes à partir de leurs attributs partagés.",
          ],
          course: [
            {
              heading: "Trier n'est pas classer",
              paragraphs: [
                "On peut ranger les animaux de bien des façons : ceux qui vivent dans l'eau et ceux qui vivent sur terre, ceux qui mangent de la viande et ceux qui mangent des plantes, ceux qui volent et ceux qui ne volent pas. C'est un tri : il dépend du critère choisi, et il ne dit rien de la parenté des animaux.",
                "Le dauphin vit dans la mer comme le requin, mais il respire de l'air avec des poumons et allaite ses petits avec ses mamelles : il est bien plus proche de la vache que du requin. Pour classer, les scientifiques ne regardent donc pas où vit un animal ni ce qu'il mange, mais ce qu'il possède : ses attributs, c'est-à-dire des caractères que l'on peut observer (des poils, des plumes, un squelette, des pattes articulées...).",
              ],
              box: { label: "À retenir", text: "Classer, c'est regrouper les êtres vivants selon les attributs qu'ils possèdent en commun, et jamais selon ce qu'ils n'ont pas, leur milieu de vie ou leur alimentation." },
            },
            {
              heading: "Les groupes emboîtés",
              paragraphs: [
                "Chaque groupe est défini par un attribut que possèdent tous ses membres. Le groupe des vertébrés rassemble les animaux qui ont un squelette interne avec une colonne vertébrale. Le groupe des mammifères rassemble ceux qui ont des poils et des mamelles. Le groupe des oiseaux rassemble ceux qui ont des plumes.",
                "Ces groupes sont emboîtés les uns dans les autres, comme des boîtes rangées dans de plus grandes boîtes. Tous les mammifères ont aussi un squelette interne avec une colonne vertébrale : la boîte des mammifères est donc à l'intérieur de celle des vertébrés. Plus une boîte est petite, plus ses membres partagent d'attributs.",
                "On ne crée jamais un groupe à partir de l'absence d'un attribut. Les « invertébrés », les « animaux sans poils » ou les « animaux sans pattes » ne sont pas des groupes de la classification scientifique : ne pas avoir quelque chose n'est pas un point commun qui montre une parenté.",
              ],
              box: { label: "Règle", text: "Un groupe = un attribut partagé par tous ses membres. Les groupes sont emboîtés : un mammifère est aussi un vertébré." },
            },
            {
              heading: "Quelques grands groupes à connaître",
              paragraphs: [
                "Tous les êtres vivants sont faits de cellules. Parmi eux, on distingue notamment les animaux, les végétaux chlorophylliens, les champignons et les bactéries. Chez les animaux, voici quelques groupes et leur attribut.",
                "Vertébrés : squelette interne avec une colonne vertébrale (chat, pigeon, grenouille, lézard, truite). À l'intérieur des vertébrés, les tétrapodes ont quatre membres : quatre pattes chez le chat ou la grenouille, mais deux pattes et deux ailes chez le pigeon ou la chauve-souris. À l'intérieur des tétrapodes, les mammifères ont des poils et des mamelles, et les oiseaux ont des plumes.",
                "Arthropodes : squelette externe et pattes articulées (fourmi, araignée, crabe). À l'intérieur des arthropodes, les insectes ont six pattes (fourmi, papillon, coccinelle) et les arachnides ont huit pattes (araignée, scorpion).",
              ],
              box: { label: "Repère", text: "Vertébrés (colonne vertébrale) ⊃ tétrapodes (4 membres) ⊃ mammifères (poils, mamelles) et oiseaux (plumes). Arthropodes (squelette externe, pattes articulées) ⊃ insectes (6 pattes) et arachnides (8 pattes)." },
            },
            {
              heading: "Classer pour comprendre la parenté",
              paragraphs: [
                "Si deux espèces partagent beaucoup d'attributs, c'est qu'elles ont hérité ces attributs d'un ancêtre commun. Plus deux espèces partagent d'attributs, plus elles sont proches parentes. Le chat partage avec la souris un squelette interne, quatre membres, des poils et des mamelles ; avec la truite, il ne partage que le squelette interne et la colonne vertébrale. Le chat est donc plus proche parent de la souris que de la truite.",
                "C'est pourquoi la chauve-souris, qui vole, est plus proche de l'être humain que du pigeon : comme nous, elle a des poils et des mamelles. Les ailes de la chauve-souris et celles du pigeon sont ses membres avant, transformés de façon différente.",
              ],
            },
          ],
          keyPoints: [
            "Trier selon le milieu ou l'alimentation n'est pas classer : on classe selon les attributs possédés.",
            "Un groupe est défini par un attribut que partagent tous ses membres ; jamais par une absence.",
            "Les groupes sont emboîtés : mammifères ⊂ tétrapodes ⊂ vertébrés.",
            "Mammifères : poils et mamelles. Oiseaux : plumes. Vertébrés : squelette interne avec colonne vertébrale.",
            "Arthropodes : squelette externe et pattes articulées ; insectes : 6 pattes ; arachnides : 8 pattes.",
            "Plus deux espèces partagent d'attributs, plus elles sont proches parentes.",
          ],
          example: {
            statement: "Classez en groupes emboîtés : le chat, la chauve-souris, le pigeon, la truite et le papillon. Attributs : le chat et la chauve-souris ont des poils et des mamelles ; le pigeon a des plumes ; ces trois animaux ont quatre membres ; la truite, le chat, la chauve-souris et le pigeon ont un squelette interne avec une colonne vertébrale ; le papillon a un squelette externe et six pattes articulées.",
            solution: [
              "Grande boîte des vertébrés (colonne vertébrale) : chat, chauve-souris, pigeon, truite.",
              "Dans cette boîte, la boîte des tétrapodes (quatre membres) : chat, chauve-souris, pigeon. La truite reste dans la boîte des vertébrés, en dehors des tétrapodes.",
              "Dans la boîte des tétrapodes : la boîte des mammifères (poils et mamelles) avec le chat et la chauve-souris, et la boîte des oiseaux (plumes) avec le pigeon.",
              "À part, la boîte des arthropodes (squelette externe, pattes articulées), et dedans la boîte des insectes (six pattes) : le papillon.",
              "Réponse : vertébrés {truite, tétrapodes {oiseaux {pigeon}, mammifères {chat, chauve-souris}}} et arthropodes {insectes {papillon}}.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Donnez l'attribut qui définit chacun de ces groupes : mammifères, oiseaux, insectes, vertébrés. b) La baleine allaite ses petits avec des mamelles : dans quel groupe la placez-vous ? c) L'araignée a huit pattes : est-ce un insecte ?",
              hint: "Un groupe se reconnaît à ce que possèdent tous ses membres. Comptez les pattes pour c).",
              solution: [
                "a) Mammifères : poils et mamelles. Oiseaux : plumes. Insectes : six pattes articulées. Vertébrés : squelette interne avec une colonne vertébrale.",
                "b) La baleine a des mamelles : c'est un mammifère, même si elle vit dans la mer.",
                "c) Non : les insectes ont six pattes. L'araignée, avec huit pattes, est un arachnide. Comme l'insecte, c'est un arthropode.",
              ],
            },
            {
              level: 2,
              statement: "Voici les attributs de six animaux. Lapin : colonne vertébrale, quatre membres, poils, mamelles. Merle : colonne vertébrale, quatre membres, plumes. Lézard : colonne vertébrale, quatre membres, écailles. Fourmi : squelette externe, pattes articulées, six pattes. Araignée : squelette externe, pattes articulées, huit pattes. Truite : colonne vertébrale, nageoires. a) Construisez la classification en groupes emboîtés. b) Le lézard est-il plus proche du lapin ou de la fourmi ? Justifiez.",
              hint: "Commencez par les attributs les plus partagés (colonne vertébrale, squelette externe), puis faites des boîtes de plus en plus petites.",
              solution: [
                "Boîte des vertébrés (colonne vertébrale) : lapin, merle, lézard, truite.",
                "Dans les vertébrés, boîte des tétrapodes (quatre membres) : lapin, merle, lézard. Dans les tétrapodes, boîte des mammifères (poils, mamelles) : lapin ; boîte des oiseaux (plumes) : merle. Le lézard reste dans les tétrapodes.",
                "Boîte des arthropodes (squelette externe, pattes articulées) : fourmi, araignée. Dedans, boîte des insectes (six pattes) : fourmi ; boîte des arachnides (huit pattes) : araignée.",
                "b) Le lézard partage avec le lapin la colonne vertébrale et les quatre membres ; avec la fourmi, il ne partage aucun de ces attributs. Le lézard est donc plus proche parent du lapin.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Hugo a rangé six animaux en deux groupes : « les animaux qui volent » (mouche, chauve-souris, pigeon) et « les animaux qui nagent » (dauphin, requin, truite). Données : la chauve-souris et le dauphin ont des mamelles et des poils (chez le dauphin, quelques poils sur le museau à la naissance seulement) ; le pigeon a des plumes ; le requin et la truite ont des nageoires et une colonne vertébrale, comme la chauve-souris, le pigeon et le dauphin ; la mouche a un squelette externe et six pattes articulées. a) Hugo a-t-il trié ou classé ? Expliquez. b) Classez ces six animaux en utilisant les groupes : arthropodes, insectes, vertébrés, mammifères, oiseaux. c) La chauve-souris est-elle plus proche parente du pigeon ou du dauphin ? Justifiez.",
              hint: "Oubliez le milieu de vie et la façon de se déplacer : ne regardez que les attributs donnés.",
              solution: [
                "a) Hugo a trié selon le mode de déplacement. Ce n'est pas une classification : voler ou nager ne montre pas une parenté.",
                "b) Vertébrés (colonne vertébrale) : chauve-souris, pigeon, dauphin, requin, truite. Dans les vertébrés, les mammifères (poils et mamelles) : chauve-souris, dauphin ; les oiseaux (plumes) : pigeon. Le requin et la truite restent dans les vertébrés. Arthropodes (squelette externe, pattes articulées), et dedans les insectes (six pattes) : la mouche.",
                "c) La chauve-souris partage avec le dauphin les poils et les mamelles, en plus de la colonne vertébrale ; avec le pigeon, elle ne partage pas ces attributs. Elle est donc plus proche parente du dauphin, même si elle vole comme le pigeon.",
                "Conclusion : un classement scientifique repose sur les attributs partagés ; la chauve-souris et le dauphin sont deux mammifères.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ne vous fiez pas aux apparences.",
            statements: [
              { text: "La chauve-souris est un oiseau, puisqu'elle vole.", true: false, why: "Elle a des poils et des mamelles : c'est un mammifère. Voler n'est pas un attribut de classification." },
              { text: "Le dauphin est un mammifère.", true: true, why: "Il allaite ses petits avec des mamelles et respire avec des poumons." },
              { text: "L'araignée est un insecte.", true: false, why: "Elle a huit pattes : c'est un arachnide. Les insectes ont six pattes ; tous deux sont des arthropodes." },
              { text: "Tous les mammifères sont aussi des vertébrés.", true: true, why: "Les groupes sont emboîtés : la boîte des mammifères est à l'intérieur de celle des vertébrés." },
              { text: "Les « animaux sans pattes » forment un groupe de la classification.", true: false, why: "On ne crée jamais un groupe à partir d'une absence : ne pas avoir de pattes ne montre pas une parenté." },
              { text: "Le chat est plus proche parent de la souris que de la truite.", true: true, why: "Le chat et la souris partagent plus d'attributs : poils, mamelles, quatre membres." },
              { text: "On classe les animaux selon le milieu où ils vivent.", true: false, why: "Le milieu de vie sert à trier, pas à classer : on classe selon les attributs possédés." },
            ],
          },
          quiz: [
            {
              q: "Quel attribut définit le groupe des oiseaux ?",
              options: ["Des ailes", "Un bec", "Des plumes", "La capacité de voler"],
              answer: 2,
              why: "Seuls les oiseaux ont des plumes. La chauve-souris a des ailes et vole, mais c'est un mammifère.",
            },
            {
              q: "Un animal a des poils et des mamelles. Dans quels groupes est-il, du plus petit au plus grand ?",
              options: ["Mammifères, puis tétrapodes, puis arthropodes", "Mammifères, tétrapodes, vertébrés", "Vertébrés, puis insectes", "Oiseaux, tétrapodes, vertébrés"],
              answer: 1,
              why: "Les groupes sont emboîtés : un mammifère est un tétrapode, qui est lui-même un vertébré.",
            },
            {
              q: "Combien de pattes ont les insectes ?",
              options: ["Quatre", "Huit", "Dix", "Six"],
              answer: 3,
              why: "Les insectes ont six pattes articulées ; les araignées, qui en ont huit, sont des arachnides.",
            },
            {
              q: "Pourquoi le groupe des « invertébrés » n'existe-t-il pas dans la classification scientifique ?",
              options: ["Parce qu'il est défini par l'absence d'un attribut", "Parce qu'il contient trop peu d'espèces", "Parce que ces animaux vivent tous dans l'eau de mer ou des rivières", "Parce qu'ils ont tous une colonne vertébrale"],
              answer: 0,
              why: "Un groupe se définit par un attribut partagé ; ne pas avoir de colonne vertébrale n'est pas un point commun qui montre une parenté.",
            },
            {
              q: "La baleine vit dans la mer comme le requin. Elle est plus proche parente :",
              options: ["du requin, car ils vivent dans le même milieu", "de la vache, car elles ont toutes deux des mamelles", "de la méduse, car elles nagent toutes deux", "de la truite, car elles ont toutes deux des nageoires"],
              answer: 1,
              why: "La baleine et la vache partagent des attributs, notamment les mamelles : ce sont deux mammifères. Le milieu de vie ne compte pas pour classer.",
            },
          ],
          trap: "Classer selon le milieu de vie ou le mode de déplacement (la chauve-souris avec les oiseaux, le dauphin avec les poissons), ou créer un groupe à partir de ce que les êtres vivants n'ont pas.",
          method: "Faites d'abord un tableau à double entrée : les animaux en lignes, les attributs en colonnes, avec une croix quand l'animal possède l'attribut. Tracez ensuite les boîtes en commençant par l'attribut le plus partagé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'biodiversite-passee',
          title: 'La biodiversité actuelle et passée',
          minutes: 30,
          objectives: [
            "Définir la biodiversité et en décrire les différents niveaux.",
            "Exploiter des fossiles pour reconstituer la biodiversité passée.",
            "Identifier les changements des peuplements de la Terre au cours du temps.",
            "Identifier quelques causes de l'érosion actuelle de la biodiversité et des moyens de la protéger.",
          ],
          course: [
            {
              heading: "La biodiversité d'aujourd'hui",
              paragraphs: [
                "La biodiversité, c'est la diversité du vivant. Elle se voit à trois niveaux. D'abord, la diversité des espèces : les scientifiques en ont décrit environ deux millions, et il en reste sans doute beaucoup à découvrir, surtout parmi les insectes et dans les océans.",
                "Ensuite, la diversité à l'intérieur de chaque espèce : deux individus ne sont jamais identiques. Enfin, la diversité des milieux de vie : une forêt, une prairie, une mare, un récif de corail ou une grotte abritent chacun des êtres vivants différents, qui dépendent les uns des autres.",
              ],
              box: { label: "Définition", text: "La biodiversité est la diversité du vivant : diversité des espèces, diversité des individus au sein d'une espèce et diversité des milieux de vie." },
            },
            {
              heading: "Les fossiles, témoins du passé",
              paragraphs: [
                "Un fossile est un reste d'être vivant (coquille, os, dent, feuille) ou une trace de son activité (empreinte de pas, terrier) conservé dans une roche. La plupart des fossiles se forment au fond de l'eau : un être vivant mort est vite recouvert de sable ou de boue. Les parties molles se décomposent, mais les parties dures, comme les os ou les coquilles, peuvent être conservées et se transformer lentement en pierre.",
                "Les roches qui contiennent des fossiles se sont déposées en couches, les unes sur les autres. En général, une couche située en dessous s'est déposée avant celle qui la recouvre : elle est plus ancienne. En étudiant les fossiles couche par couche, les scientifiques reconstituent les êtres vivants qui peuplaient la Terre à chaque époque.",
              ],
              box: { label: "Définition", text: "Fossile : reste ou trace d'un être vivant ancien conservé dans une roche. Dans une série de couches non bouleversées, les couches du bas sont les plus anciennes." },
            },
            {
              heading: "Des espèces apparaissent, d'autres disparaissent",
              paragraphs: [
                "La Terre s'est formée il y a environ 4,6 milliards d'années. Les plus anciennes traces de vie, laissées par des êtres vivants faits d'une seule cellule, ont environ 3,5 milliards d'années : pendant très longtemps, la vie n'a existé que dans les océans. Les fossiles montrent que les peuplements de la Terre ont sans cesse changé : des espèces apparaissent, d'autres disparaissent.",
                "Beaucoup de groupes ont aujourd'hui disparu. Les trilobites, des arthropodes marins, ont peuplé les mers pendant plus de 250 millions d'années. Les dinosaures sont apparus il y a environ 230 millions d'années. Il y a 66 millions d'années, la plupart des dinosaures, ainsi que les ammonites (des animaux marins à coquille enroulée), ont disparu lors d'une crise biologique, liée à la chute d'une énorme météorite et à de grandes éruptions volcaniques. Une seule lignée de dinosaures a survécu : celle des oiseaux.",
                "Les espèces actuelles descendent d'espèces du passé qui se sont transformées au cours du temps : c'est l'évolution. L'archéoptéryx, qui vivait il y a environ 150 millions d'années, avait des plumes comme un oiseau, mais aussi des dents et une longue queue osseuse comme un petit dinosaure. Notre espèce, Homo sapiens, n'est apparue qu'il y a environ 300 000 ans : elle est très récente dans l'histoire de la vie.",
              ],
              box: { label: "Repère", text: "Formation de la Terre : 4,6 milliards d'années. Premières traces de vie : 3,5 milliards d'années. Dinosaures (hors oiseaux) : d'il y a 230 à il y a 66 millions d'années. Homo sapiens : environ 300 000 ans." },
            },
            {
              heading: "Une biodiversité menacée aujourd'hui",
              paragraphs: [
                "Aujourd'hui, de nombreuses espèces disparaissent ou voient leurs populations diminuer, à cause des activités humaines. On parle d'érosion de la biodiversité. Les principales causes sont la destruction des milieux de vie (déforestation, construction de routes et de villes), les pollutions, la surexploitation (pêche et chasse trop intensives), l'introduction d'espèces venues d'ailleurs qui deviennent envahissantes, comme le frelon asiatique en France, et le changement climatique.",
                "Le dodo, un gros oiseau incapable de voler qui vivait sur l'île Maurice, a disparu à la fin du XVIIe siècle, moins d'un siècle après l'arrivée des humains et des animaux qu'ils ont apportés. Pour protéger la biodiversité, on crée des parcs nationaux et des réserves naturelles, on protège certaines espèces par la loi et on limite la pêche ; chacun peut aussi agir, par exemple en préservant les haies, les mares ou les jardins sans pesticides.",
              ],
              box: { label: "À retenir", text: "Causes de l'érosion de la biodiversité : destruction des milieux, pollutions, surexploitation, espèces envahissantes, changement climatique." },
            },
          ],
          keyPoints: [
            "La biodiversité : diversité des espèces, des individus d'une espèce et des milieux de vie.",
            "Un fossile est un reste ou une trace d'un être vivant ancien conservé dans une roche ; les couches du bas sont en général les plus anciennes.",
            "Au cours des temps géologiques, des espèces apparaissent et d'autres disparaissent : les peuplements changent.",
            "Il y a 66 millions d'années, la plupart des dinosaures et les ammonites ont disparu ; les oiseaux descendent de dinosaures.",
            "Homo sapiens est apparu il y a environ 300 000 ans seulement ; la Terre a environ 4,6 milliards d'années.",
            "Les activités humaines menacent la biodiversité : destruction des milieux, pollutions, surexploitation, espèces envahissantes, climat.",
          ],
          example: {
            statement: "Dans une falaise, on observe trois couches de roches posées les unes sur les autres et jamais bouleversées. La couche du bas contient des trilobites, celle du milieu des ammonites, celle du haut des coquillages semblables à ceux d'aujourd'hui. Classez ces fossiles du plus ancien au plus récent. Qu'en concluez-vous ?",
            solution: [
              "Les couches se sont déposées les unes sur les autres : la couche du bas est la plus ancienne, celle du haut la plus récente.",
              "Du plus ancien au plus récent : les trilobites, puis les ammonites, puis les coquillages actuels.",
              "Les trilobites et les ammonites n'existent plus aujourd'hui, et on ne les trouve que dans certaines couches.",
              "Réponse : trilobites, ammonites, coquillages actuels. Les êtres vivants qui peuplaient cette région ont changé au cours du temps : des espèces ont disparu, d'autres sont apparues.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Donnez les trois niveaux de la biodiversité, avec un exemple pour chacun. b) Définissez le mot « fossile ». c) Citez trois causes de l'érosion actuelle de la biodiversité.",
              hint: "Pensez aux espèces, aux individus d'une même espèce et aux milieux de vie.",
              solution: [
                "a) La diversité des espèces (le renard, le chêne, le moustique...), la diversité des individus d'une même espèce (des chats de couleurs différentes), la diversité des milieux (forêt, mare, récif de corail).",
                "b) Un fossile est un reste (os, coquille, dent) ou une trace (empreinte) d'un être vivant ancien, conservé dans une roche.",
                "c) Par exemple : la destruction des milieux de vie, les pollutions, la surexploitation par la pêche ou la chasse (on pouvait aussi citer les espèces envahissantes ou le changement climatique).",
              ],
            },
            {
              level: 2,
              statement: "Une coupe de terrain (données fictives) montre quatre couches non bouleversées. De haut en bas : couche A, avec des coquilles de moules semblables aux moules actuelles ; couche B, avec des ammonites ; couche C, avec des trilobites ; couche D, sans aucun fossile. a) Quelle couche est la plus ancienne ? la plus récente ? b) Rangez les fossiles du plus ancien au plus récent. c) Peut-on affirmer que la couche D s'est formée à une époque où il n'y avait aucun être vivant sur Terre ? Justifiez.",
              hint: "Les couches du bas se sont déposées en premier. Pour c), demandez-vous si tous les êtres vivants laissent des fossiles.",
              solution: [
                "a) La couche D, en bas, est la plus ancienne ; la couche A, en haut, est la plus récente.",
                "b) Trilobites (couche C), puis ammonites (couche B), puis moules (couche A).",
                "c) Non. Une couche sans fossile ne prouve pas l'absence de vie : les êtres vivants ne se fossilisent pas toujours (les parties molles se décomposent, il faut un enfouissement rapide), et la vie existait peut-être ailleurs, par exemple dans un autre milieu.",
                "Résultat : D est la plus ancienne et A la plus récente ; trilobites, ammonites, puis moules ; l'absence de fossiles ne prouve pas l'absence de vie.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On représente l'histoire de la Terre sur une frise de 46 cm, avec 1 cm pour 100 millions d'années. Le bord droit de la frise représente aujourd'hui. a) Vérifiez que la frise représente bien 4,6 milliards d'années. b) À quelle distance du bord droit placez-vous les premières traces de vie (3,5 milliards d'années), l'apparition des dinosaures (230 millions d'années) et leur disparition (66 millions d'années) ? c) Homo sapiens est apparu il y a environ 300 000 ans. À quelle distance du bord droit faudrait-il le placer ? Est-ce visible ? d) Les dinosaures non oiseaux ont vécu de 230 à 66 millions d'années. Pendant combien de temps ? Comparez avec les 300 000 ans d'Homo sapiens.",
              hint: "1 milliard = 1 000 millions. Divisez chaque durée en millions d'années par 100 pour obtenir des centimètres.",
              solution: [
                "a) 46 × 100 = 4 600 millions d'années, soit 4,6 milliards d'années.",
                "b) Vie : 3,5 milliards = 3 500 millions, 3 500 ÷ 100 = 35 cm du bord droit. Apparition des dinosaures : 230 ÷ 100 = 2,3 cm. Disparition : 66 ÷ 100 = 0,66 cm, soit environ 7 mm.",
                "c) 300 000 ans = 0,3 million d'années ; 0,3 ÷ 100 = 0,003 cm, soit 0,03 mm. C'est plus fin que l'épaisseur d'un trait de crayon : Homo sapiens est invisible sur la frise.",
                "d) 230 - 66 = 164 millions d'années. 164 millions d'années, c'est plus de 500 fois 300 000 ans (164 ÷ 0,3 ≈ 547).",
                "Conclusion : la vie occupe les trois quarts de la frise, les dinosaures ses derniers centimètres, et notre espèce n'en occupe qu'une infime fraction.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements de l'histoire de la vie dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Formation de la Terre (environ 4,6 milliards d'années)",
              "Premières traces de vie, des êtres faits d'une seule cellule (environ 3,5 milliards d'années)",
              "Des trilobites peuplent les mers (à partir d'environ 520 millions d'années)",
              "Apparition des dinosaures (environ 230 millions d'années)",
              "Disparition de la plupart des dinosaures et des ammonites (66 millions d'années)",
              "Apparition d'Homo sapiens (environ 300 000 ans)",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un fossile ?",
              options: ["Une roche très dure qui s'est formée au fond de la mer il y a longtemps", "Un reste ou une trace d'être vivant conservé dans une roche", "Un animal actuel très âgé", "Un os d'animal enterré l'an dernier"],
              answer: 1,
              why: "Un fossile est un reste ou une trace d'un être vivant ancien, conservé dans une roche.",
            },
            {
              q: "Dans des couches de roches non bouleversées, où se trouvent les fossiles les plus anciens ?",
              options: ["Dans les couches du haut", "Au milieu, toujours", "Dans les couches du bas", "Partout à la fois"],
              answer: 2,
              why: "Les couches se déposent les unes sur les autres : celles du bas sont les plus anciennes.",
            },
            {
              q: "Il y a environ combien de temps sont apparues les premières traces de vie ?",
              options: ["4,6 milliards d'années", "66 millions d'années", "230 millions d'années", "3,5 milliards d'années"],
              answer: 3,
              why: "Les plus anciennes traces de vie, des êtres faits d'une seule cellule, ont environ 3,5 milliards d'années.",
            },
            {
              q: "Quelle lignée de dinosaures a survécu à la crise d'il y a 66 millions d'années ?",
              options: ["Celle des oiseaux", "Celle des crocodiles géants", "Celle des ammonites", "Aucune, ils ont tous disparu"],
              answer: 0,
              why: "Les oiseaux descendent de dinosaures : c'est la seule lignée de dinosaures qui a survécu.",
            },
            {
              q: "Lequel de ces exemples est une cause de l'érosion actuelle de la biodiversité ?",
              options: ["La création d'une réserve naturelle", "La destruction des forêts", "La replantation de haies", "La limitation de la pêche"],
              answer: 1,
              why: "Détruire les forêts supprime les milieux de vie de nombreuses espèces ; les autres propositions protègent la biodiversité.",
            },
          ],
          trap: "Croire que les êtres humains ont vécu en même temps que les dinosaures, alors que plus de 60 millions d'années les séparent ; ou croire que la biodiversité n'a jamais changé avant l'arrivée des humains.",
          method: "Pour lire une coupe de terrain, numérotez les couches de bas en haut : la première est la plus ancienne. Pour les grandes durées, convertissez tout dans la même unité (millions d'années) avant de comparer.",
        },
      ],
    },
    {
      id: 'cellule',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'microscope',
          title: 'Observer au microscope',
          minutes: 30,
          objectives: [
            "Identifier les principales parties d'un microscope optique et leur rôle.",
            "Utiliser un microscope en respectant les étapes de la mise au point.",
            "Calculer le grossissement d'une observation.",
            "Réaliser un dessin d'observation scientifique légendé.",
          ],
          course: [
            {
              heading: "Pourquoi utiliser un microscope ?",
              paragraphs: [
                "L'œil humain ne permet pas de voir les objets plus petits qu'environ un dixième de millimètre (0,1 mm). Une loupe grossit quelques fois seulement, ce qui suffit pour observer une fourmi ou les nervures d'une feuille, mais pas les cellules.",
                "Le microscope optique utilise la lumière et plusieurs lentilles pour grossir beaucoup plus. Les microscopes des collèges grossissent en général de 40 à 400 fois, parfois un peu plus. On observe un échantillon très fin, posé sur une lame de verre et éclairé par en dessous : la lumière doit le traverser.",
              ],
              box: { label: "Repère", text: "Œil nu : jusqu'à environ 0,1 mm. Loupe : quelques fois. Microscope optique du collège : de ×40 à ×400 environ." },
            },
            {
              heading: "Les parties du microscope",
              paragraphs: [
                "En haut se trouve l'oculaire, la lentille près de laquelle on place l'œil. En dessous, la tourelle (ou revolver) porte plusieurs objectifs, de grossissements différents, par exemple ×4, ×10 et ×40. On choisit l'objectif en faisant tourner la tourelle.",
                "La lame est posée sur la platine, un plateau percé d'un trou, et tenue par deux pinces appelées valets. Sous la platine, une lampe (ou un miroir) éclaire l'échantillon, et le diaphragme permet de régler la quantité de lumière.",
                "Deux vis servent à la mise au point, c'est-à-dire à obtenir une image nette. La vis macrométrique, la plus grosse, fait de grands déplacements : elle sert à la mise au point rapide. La vis micrométrique fait de tout petits déplacements : elle sert à la mise au point fine.",
              ],
              box: { label: "Repère", text: "Oculaire, tourelle et objectifs, platine et valets, lampe et diaphragme, vis macrométrique (réglage rapide) et vis micrométrique (réglage fin)." },
            },
            {
              heading: "Calculer le grossissement",
              paragraphs: [
                "L'oculaire et l'objectif grossissent tous les deux. Le grossissement total est le produit des deux : avec un oculaire ×10 et un objectif ×40, l'image est grossie 10 × 40 = 400 fois. On écrit « grossissement ×400 ».",
                "Plus le grossissement est fort, plus on voit de détails, mais plus la partie observée est petite. Au microscope, l'image est aussi retournée : si l'on déplace la lame vers la droite, l'image se déplace vers la gauche.",
              ],
              box: { label: "Formule", text: "Grossissement total = grossissement de l'oculaire × grossissement de l'objectif. Exemple : ×10 et ×40 donnent ×400." },
            },
            {
              heading: "Les étapes d'une bonne observation",
              paragraphs: [
                "On commence par réaliser une préparation : on dépose sur la lame un échantillon très fin, une goutte d'eau ou de colorant, puis on pose une lamelle en la faisant descendre en biais, pour éviter les bulles d'air. On place la lame sur la platine, sous les valets, l'échantillon bien au centre du trou.",
                "On allume la lampe et on choisit toujours d'abord le plus faible objectif. En regardant de côté, et non dans l'oculaire, on rapproche l'objectif et la lame avec la vis macrométrique, sans qu'ils se touchent. Puis, en regardant dans l'oculaire, on les éloigne lentement jusqu'à ce que l'image soit nette. On termine avec la vis micrométrique.",
                "Pour grossir davantage, on place l'élément intéressant au centre de l'image, on tourne la tourelle vers l'objectif supérieur et on n'utilise plus que la vis micrométrique. Ainsi, on ne risque pas de casser la lame ni d'abîmer l'objectif.",
              ],
              box: { label: "Règle", text: "Toujours commencer par le plus faible grossissement. Ne jamais rapprocher l'objectif de la lame en regardant dans l'oculaire. Au fort grossissement, seulement la vis micrométrique." },
            },
            {
              heading: "Le dessin d'observation",
              paragraphs: [
                "Un dessin d'observation représente fidèlement ce que l'on voit, sans rien inventer. On le réalise au crayon à papier, avec des traits nets et sans colorier. On dessine seulement quelques éléments, assez grands.",
                "Le dessin porte un titre qui dit ce qui est observé et comment (par exemple « Cellules d'épiderme d'oignon observées au microscope »), le grossissement utilisé (×400), et des légendes écrites à l'horizontale, reliées au dessin par des traits tirés à la règle, qui ne se croisent pas.",
              ],
              box: { label: "À retenir", text: "Dessin d'observation : crayon à papier, titre, grossissement, légendes horizontales reliées par des traits à la règle." },
            },
          ],
          keyPoints: [
            "Le microscope optique permet de voir ce que l'œil ne voit pas (plus petit que 0,1 mm environ).",
            "Parties : oculaire, objectifs sur la tourelle, platine et valets, lampe et diaphragme, vis macrométrique et micrométrique.",
            "Grossissement total = oculaire × objectif (×10 et ×40 donnent ×400).",
            "On commence toujours au plus faible grossissement ; on rapproche objectif et lame en regardant de côté.",
            "Au fort grossissement, on n'utilise que la vis micrométrique.",
            "Dessin d'observation : crayon, titre, grossissement, légendes horizontales tracées à la règle.",
          ],
          example: {
            statement: "Un microscope a un oculaire ×10 et trois objectifs : ×4, ×10 et ×40. a) Quels grossissements peut-on obtenir ? b) Avec quel objectif commence-t-on ? c) Quelle vis utilise-t-on pour régler l'image avec l'objectif ×40 ?",
            solution: [
              "a) Grossissement total = oculaire × objectif : 10 × 4 = 40 ; 10 × 10 = 100 ; 10 × 40 = 400. On obtient ×40, ×100 et ×400.",
              "b) On commence toujours avec le plus faible objectif, le ×4, pour un grossissement total de ×40 : on repère plus facilement l'échantillon.",
              "c) Avec l'objectif ×40, l'objectif est très près de la lame : on n'utilise que la vis micrométrique, pour ne pas casser la lame.",
              "Réponse : ×40, ×100 et ×400 ; on commence avec l'objectif ×4 ; au ×40, on règle avec la vis micrométrique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez la partie du microscope qui correspond à chaque rôle : a) on y place l'œil ; b) on y pose la lame ; c) elles maintiennent la lame ; d) elle sert à la mise au point rapide ; e) elle sert à la mise au point fine ; f) il règle la quantité de lumière.",
              hint: "Partez du haut du microscope (près de l'œil) et descendez vers la lampe.",
              solution: [
                "a) L'oculaire.",
                "b) La platine.",
                "c) Les valets.",
                "d) La vis macrométrique.",
                "e) La vis micrométrique.",
                "f) Le diaphragme.",
              ],
            },
            {
              level: 2,
              statement: "Voici le protocole suivi par Malo : « 1) Je pose la préparation sur la platine. 2) Je place tout de suite l'objectif ×40. 3) En regardant dans l'oculaire, je descends l'objectif avec la vis macrométrique jusqu'à voir quelque chose. 4) Je dessine au feutre de couleur ce que je vois et j'écris le titre. » Repérez les erreurs de Malo et réécrivez un protocole correct.",
              hint: "Il y a une erreur dans chacune des étapes 2, 3 et 4. Pensez au grossissement de départ, au risque pour la lame, et aux règles du dessin d'observation.",
              solution: [
                "Étape 2 : erreur, il faut commencer par le plus faible objectif (×4), pour repérer facilement l'échantillon.",
                "Étape 3 : erreur, on ne rapproche jamais l'objectif de la lame en regardant dans l'oculaire : on risque de casser la lame et d'abîmer l'objectif. On rapproche en regardant de côté, puis on éloigne en regardant dans l'oculaire.",
                "Étape 4 : erreur, le dessin se fait au crayon à papier, sans couleur, avec un titre, le grossissement et des légendes à la règle.",
                "Protocole correct : 1) poser la préparation sur la platine, sous les valets ; 2) choisir l'objectif ×4 et allumer la lampe ; 3) en regardant de côté, rapprocher l'objectif de la lame avec la vis macrométrique ; 4) en regardant dans l'oculaire, éloigner lentement jusqu'à l'image nette, puis affiner avec la vis micrométrique ; 5) faire le dessin d'observation au crayon, avec titre, grossissement et légendes.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rappel : 1 mm = 1 000 µm (micromètres). Sur une photographie prise au grossissement ×400, une cellule mesure 20 mm de long. a) Quelle est la taille réelle de la cellule en mm ? b) Convertissez-la en µm. c) Peut-on voir cette cellule à l'œil nu ? Justifiez. d) Avec un oculaire ×10, quel objectif a-t-on utilisé pour obtenir ×400 ? e) Sur une autre photographie, prise au grossissement ×100, la même cellule mesurerait combien de millimètres ?",
              hint: "L'image est 400 fois plus grande que l'objet réel : pour retrouver la taille réelle, on divise par 400.",
              solution: [
                "a) Taille réelle = taille sur la photo ÷ grossissement = 20 ÷ 400 = 0,05 mm.",
                "b) 0,05 × 1 000 = 50 µm.",
                "c) Non : l'œil nu ne voit pas les objets plus petits qu'environ 0,1 mm, et 0,05 mm est plus petit que 0,1 mm.",
                "d) 400 ÷ 10 = 40 : on a utilisé l'objectif ×40.",
                "e) 0,05 × 100 = 5 mm sur la photographie.",
                "Conclusion : la cellule mesure 0,05 mm, soit 50 µm ; elle est invisible à l'œil nu ; elle mesurerait 5 mm sur une photo au ×100.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour observer une préparation au microscope.",
            items: [
              "Poser la lame sur la platine, sous les valets, l'échantillon au centre",
              "Allumer la lampe et choisir l'objectif le plus faible",
              "En regardant de côté, rapprocher l'objectif de la lame avec la vis macrométrique",
              "En regardant dans l'oculaire, éloigner lentement jusqu'à obtenir une image nette",
              "Affiner la netteté avec la vis micrométrique",
              "Tourner la tourelle vers un objectif plus fort et régler avec la vis micrométrique",
            ],
          },
          quiz: [
            {
              q: "Avec un oculaire ×10 et un objectif ×40, quel est le grossissement total ?",
              options: ["×50", "×400", "×4", "×4 000"],
              answer: 1,
              why: "Le grossissement total est le produit : 10 × 40 = 400.",
            },
            {
              q: "Par quel objectif faut-il commencer une observation ?",
              options: ["Le plus faible", "Le plus fort", "Celui du milieu", "N'importe lequel"],
              answer: 0,
              why: "Au plus faible grossissement, on voit une plus grande zone et on repère facilement l'échantillon.",
            },
            {
              q: "Quelle vis utilise-t-on seule au fort grossissement ?",
              options: ["La vis macrométrique", "La vis de la tourelle", "La vis micrométrique", "La vis de la lampe"],
              answer: 2,
              why: "Au fort grossissement, l'objectif est très près de la lame : seule la vis micrométrique, qui fait de petits déplacements, est utilisée.",
            },
            {
              q: "À quoi servent les valets ?",
              options: ["À régler la quantité de lumière qui traverse la lame", "À grossir l'image", "À faire la mise au point de l'image", "À maintenir la lame sur la platine"],
              answer: 3,
              why: "Les valets sont deux pinces qui maintiennent la lame en place sur la platine.",
            },
            {
              q: "Lequel de ces éléments ne doit pas figurer sur un dessin d'observation ?",
              options: ["Le titre de l'observation", "Le grossissement utilisé", "Des couleurs inventées", "Les légendes reliées par des traits"],
              answer: 2,
              why: "Un dessin d'observation se fait au crayon à papier et ne représente que ce que l'on voit, sans rien inventer.",
            },
          ],
          trap: "Rapprocher l'objectif de la lame en regardant dans l'oculaire, ce qui casse la lame ; ou additionner les grossissements de l'oculaire et de l'objectif au lieu de les multiplier.",
          method: "Récitez les étapes à voix haute avant de toucher le microscope : plus faible objectif, je rapproche en regardant de côté, j'éloigne en regardant dans l'oculaire, je finis à la vis micrométrique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cellule-unite',
          title: 'Tous les êtres vivants sont faits de cellules',
          minutes: 30,
          objectives: [
            "Identifier la cellule comme l'unité qui compose tous les êtres vivants.",
            "Décrire l'organisation d'une cellule : membrane, cytoplasme, noyau.",
            "Comparer une cellule animale et une cellule végétale.",
            "Distinguer les êtres vivants unicellulaires et pluricellulaires.",
          ],
          course: [
            {
              heading: "Une découverte faite grâce au microscope",
              paragraphs: [
                "En 1665, le savant anglais Robert Hooke observe au microscope une fine tranche de liège, la matière des bouchons. Il voit de nombreuses petites cases, qui lui rappellent de petites chambres : il les appelle des « cellules ».",
                "Au XIXe siècle, grâce à de meilleurs microscopes, les scientifiques constatent que tous les êtres vivants, animaux, végétaux, champignons ou bactéries, sont formés de cellules. La cellule est l'unité de base du vivant, un peu comme la brique est l'élément de base d'un mur.",
              ],
              box: { label: "À retenir", text: "Tous les êtres vivants sont formés d'une ou de plusieurs cellules : la cellule est l'unité du vivant." },
            },
            {
              heading: "L'organisation d'une cellule",
              paragraphs: [
                "Malgré leurs formes variées, les cellules ont une organisation commune. La membrane est une enveloppe très fine qui entoure la cellule et la sépare de son milieu. Le cytoplasme est le contenu de la cellule, une sorte de gelée où se déroulent de nombreuses activités. Le noyau est une petite boule, souvent bien visible après coloration, qui joue un rôle essentiel dans le fonctionnement de la cellule. Les bactéries, des cellules très petites, n'ont pas de noyau.",
                "La plupart des cellules mesurent entre 10 et 100 micromètres (µm). Un micromètre est un millième de millimètre : 1 mm = 1 000 µm. Les cellules sont donc invisibles à l'œil nu, et il faut un microscope pour les observer.",
              ],
              box: { label: "Définition", text: "Une cellule est formée d'une membrane, qui l'entoure, d'un cytoplasme, qui la remplit, et, en général, d'un noyau." },
            },
            {
              heading: "Cellules animales et cellules végétales",
              paragraphs: [
                "Les cellules de la paroi intérieure de la joue, chez l'être humain, sont des cellules animales : elles ont une forme irrégulière, plutôt arrondie, avec une membrane, un cytoplasme et un noyau.",
                "Les cellules végétales ont en plus une paroi, une enveloppe rigide située autour de la membrane, qui leur donne une forme bien nette, souvent rectangulaire, comme dans la pelure fine de l'oignon. Dans les parties vertes des plantes, comme la feuille de l'élodée (une plante d'aquarium), les cellules contiennent aussi des chloroplastes, de petits grains verts qui donnent leur couleur aux plantes. Vous découvrirez leur rôle en étudiant la nutrition des végétaux.",
              ],
              box: { label: "À retenir", text: "Cellule animale : membrane, cytoplasme, noyau. Cellule végétale : en plus, une paroi et, dans les parties vertes, des chloroplastes." },
            },
            {
              heading: "Unicellulaires et pluricellulaires",
              paragraphs: [
                "Certains êtres vivants ne sont formés que d'une seule cellule : on dit qu'ils sont unicellulaires. C'est le cas des bactéries, de la levure (un champignon utilisé pour faire lever le pain) ou de la paramécie, qui nage dans l'eau des mares. Cette cellule unique se nourrit, se déplace parfois et se reproduit : c'est un être vivant à part entière.",
                "Les autres sont pluricellulaires : ils sont formés de nombreuses cellules. Le corps humain en compte plusieurs dizaines de milliers de milliards, de types variés : cellules de la peau, des muscles, des os, du sang, cellules nerveuses... Pourtant, chacun de nous a commencé sa vie sous la forme d'une seule cellule, qui s'est divisée un très grand nombre de fois.",
              ],
              box: { label: "Définition", text: "Unicellulaire : formé d'une seule cellule (bactérie, levure, paramécie). Pluricellulaire : formé de nombreuses cellules (être humain, chêne, champignon de Paris)." },
            },
          ],
          keyPoints: [
            "Tous les êtres vivants sont formés de cellules : la cellule est l'unité du vivant.",
            "Une cellule : une membrane, un cytoplasme et, en général, un noyau (les bactéries n'en ont pas).",
            "Les cellules mesurent en général de 10 à 100 µm (1 mm = 1 000 µm) : il faut un microscope pour les voir.",
            "Une cellule végétale a en plus une paroi et, dans les parties vertes, des chloroplastes.",
            "Unicellulaire : une seule cellule (bactérie, levure, paramécie). Pluricellulaire : de nombreuses cellules (être humain, arbre).",
          ],
          example: {
            statement: "Au microscope, on observe deux préparations. Préparation A : des cellules rectangulaires, bien alignées, entourées d'un contour épais, avec un noyau et sans grains verts. Préparation B : des cellules de forme irrégulière, isolées, avec un noyau et sans contour épais. L'une vient de la pelure d'un oignon, l'autre de l'intérieur de la joue. Attribuez chaque préparation et justifiez.",
            solution: [
              "Le contour épais et la forme rectangulaire de A correspondent à une paroi : ce sont des cellules végétales. A vient de la pelure d'oignon.",
              "L'absence de grains verts n'est pas étonnante : la pelure d'oignon n'est pas une partie verte, elle n'a pas de chloroplastes.",
              "B n'a pas de paroi et a une forme irrégulière : ce sont des cellules animales, celles de la joue.",
              "Réponse : A = cellules d'oignon (végétales, avec paroi) ; B = cellules de la joue (animales, sans paroi).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Recopiez et complétez : a) Tous les êtres vivants sont formés de .... b) Une cellule est entourée d'une ..., remplie de ... et contient en général un .... c) Une cellule végétale possède en plus une ... et, dans les parties vertes, des .... d) Un être formé d'une seule cellule est dit ....",
              hint: "Relisez les encadrés « Définition » et « À retenir » du cours.",
              solution: [
                "a) Tous les êtres vivants sont formés de cellules.",
                "b) Une cellule est entourée d'une membrane, remplie de cytoplasme et contient en général un noyau.",
                "c) Une cellule végétale possède en plus une paroi et, dans les parties vertes, des chloroplastes.",
                "d) Un être formé d'une seule cellule est dit unicellulaire.",
              ],
            },
            {
              level: 2,
              statement: "Une cellule de l'intérieur de la joue mesure environ 50 µm. Rappel : 1 mm = 1 000 µm. a) Convertissez cette taille en mm. b) Combien de ces cellules faudrait-il aligner pour former une ligne de 1 mm ? c) Et une ligne de 1 cm ? d) L'œil nu ne voit pas les objets de moins de 0,1 mm environ : peut-on voir une seule de ces cellules à l'œil nu ?",
              hint: "Pour b), cherchez combien de fois 50 µm il y a dans 1 000 µm. Pour c), rappelez-vous que 1 cm = 10 mm.",
              solution: [
                "a) 50 ÷ 1 000 = 0,05 mm.",
                "b) 1 mm = 1 000 µm ; 1 000 ÷ 50 = 20 cellules.",
                "c) 1 cm = 10 mm, donc 20 × 10 = 200 cellules.",
                "d) Non : 0,05 mm est plus petit que 0,1 mm. Une cellule de la joue est invisible à l'œil nu.",
                "Résultat : 0,05 mm ; 20 cellules pour 1 mm ; 200 cellules pour 1 cm ; invisible à l'œil nu.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sami observe trois préparations au microscope. A : une goutte d'eau de mare contient une cellule isolée, en forme de chausson, avec un noyau, qui se déplace rapidement. B : une feuille d'élodée montre de nombreuses cellules rectangulaires accolées, avec un contour épais et de nombreux grains verts. C : un frottis de l'intérieur de la joue montre des cellules arrondies, isolées, avec un noyau, sans contour épais ni grains verts. a) Pour B et C, dites s'il s'agit de cellules animales ou végétales, en justifiant. b) Comment s'appellent le contour épais et les grains verts de B ? c) L'organisme observé en A est-il unicellulaire ou pluricellulaire ? d) Sami affirme : « L'être de la préparation A n'est pas un être vivant, puisqu'il n'a qu'une cellule. » Répondez-lui.",
              hint: "Cherchez la paroi et les chloroplastes. Pour d), demandez-vous ce que fait cette cellule unique.",
              solution: [
                "a) B : cellules végétales, car elles ont un contour épais (une paroi) et des grains verts. C : cellules animales, car elles n'ont ni paroi ni chloroplastes.",
                "b) Le contour épais est la paroi, et les grains verts sont les chloroplastes.",
                "c) L'organisme A est formé d'une seule cellule : il est unicellulaire (c'est une paramécie).",
                "d) Sami se trompe : un être unicellulaire est un être vivant à part entière. Sa cellule unique se déplace, se nourrit et se reproduit. Les bactéries et les levures sont aussi des êtres vivants unicellulaires.",
                "Conclusion : B est végétale (paroi, chloroplastes), C est animale, et A est un être vivant unicellulaire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa description.",
            pairs: [
              { left: "Membrane", right: "Enveloppe très fine qui entoure toute cellule" },
              { left: "Cytoplasme", right: "Contenu de la cellule, sorte de gelée" },
              { left: "Noyau", right: "Petite boule bien visible après coloration" },
              { left: "Paroi", right: "Enveloppe rigide des cellules végétales" },
              { left: "Chloroplaste", right: "Petit grain vert des cellules des parties vertes des plantes" },
              { left: "Unicellulaire", right: "Formé d'une seule cellule, comme la levure" },
            ],
          },
          quiz: [
            {
              q: "Quel élément possède une cellule végétale mais pas une cellule animale ?",
              options: ["Une membrane", "Un cytoplasme", "Un noyau", "Une paroi"],
              answer: 3,
              why: "Les deux types de cellules ont une membrane, un cytoplasme et un noyau ; seule la cellule végétale a une paroi.",
            },
            {
              q: "Combien de micromètres y a-t-il dans 1 mm ?",
              options: ["10", "1 000", "100", "1 000 000"],
              answer: 1,
              why: "Un micromètre est un millième de millimètre : 1 mm = 1 000 µm.",
            },
            {
              q: "Lequel de ces êtres vivants est unicellulaire ?",
              options: ["La levure", "Le champignon de Paris", "Le chêne", "L'escargot"],
              answer: 0,
              why: "La levure est un champignon formé d'une seule cellule ; les autres sont pluricellulaires.",
            },
            {
              q: "Qui a donné le nom de « cellules » aux petites cases observées dans le liège, en 1665 ?",
              options: ["Carl von Linné", "Louis Pasteur", "Robert Hooke", "Charles Darwin"],
              answer: 2,
              why: "Robert Hooke a observé le liège au microscope en 1665 et a nommé ces petites cases des cellules.",
            },
            {
              q: "Dans quelles cellules trouve-t-on des chloroplastes ?",
              options: ["Dans les cellules de la joue", "Dans les cellules des parties vertes des plantes", "Dans toutes les cellules végétales, même celles des racines", "Dans les bactéries"],
              answer: 1,
              why: "Les chloroplastes, grains verts, se trouvent dans les cellules des parties vertes des plantes, pas dans les racines ni dans la pelure d'oignon.",
            },
          ],
          trap: "Croire que toutes les cellules végétales ont des chloroplastes (la pelure d'oignon et les racines n'en ont pas), ou qu'un être formé d'une seule cellule n'est pas un vrai être vivant.",
          method: "Pour reconnaître une cellule au microscope, procédez dans l'ordre : je cherche la membrane et le noyau (c'est une cellule), puis une paroi (cellule végétale), puis des grains verts (partie verte d'une plante).",
        },
      ],
    },
  ],
}
