import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-5e',
  chapters: [
    /* ==================================================================== */
    /* LES ÉTATS DE LA MATIÈRE ET LEURS CHANGEMENTS                           */
    /* ==================================================================== */
    {
      id: 'etats-de-la-matiere',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'trois-etats',
          title: 'Solide, liquide, gaz : les trois états de la matière',
          minutes: 30,
          objectives: [
            "Caractériser les trois états de la matière (solide, liquide, gaz) par leurs propriétés : forme propre, volume propre, compressibilité.",
            "Reconnaître l'état physique d'une substance de la vie courante et justifier sa réponse.",
            "Montrer qu'un gaz, comme l'air, est de la matière : il a une masse.",
            "Décrire les trois états à l'aide du modèle particulaire (compact ou dispersé, ordonné ou désordonné).",
          ],
          course: [
            {
              heading: "La matière existe sous trois états",
              paragraphs: [
                "Tout ce qui vous entoure est fait de matière : votre table, l'eau de votre verre, l'air que vous respirez. Cette matière peut se présenter sous trois états physiques : l'état solide, l'état liquide et l'état gazeux (on dit aussi l'état gaz).",
                "Une même substance peut exister sous les trois états. L'eau en est le meilleur exemple : la glace est de l'eau à l'état solide, l'eau du robinet est de l'eau à l'état liquide, et la vapeur d'eau est de l'eau à l'état gazeux. Ce n'est pas la substance qui change, c'est seulement son état.",
                "Attention : la vapeur d'eau est invisible, comme l'air. Le petit « nuage » blanc qui sort d'une casserole d'eau bouillante n'est pas de la vapeur d'eau : ce sont de minuscules gouttelettes d'eau liquide, formées quand la vapeur se refroidit au contact de l'air.",
              ],
              box: { label: "À retenir", text: "La matière existe sous trois états physiques : solide, liquide et gazeux. Une même substance, comme l'eau, peut se trouver dans chacun de ces trois états : glace, eau liquide, vapeur d'eau." },
            },
            {
              heading: "Reconnaître un solide, un liquide, un gaz",
              paragraphs: [
                "Un solide a une forme propre : un caillou ou une gomme garde sa forme, quel que soit le récipient dans lequel on le pose. Il a aussi un volume propre. Certains solides sont compacts (un morceau de bois, une bille), d'autres sont divisés en petits grains (le sable, le sucre en poudre, la farine). Un solide divisé peut être versé comme un liquide, mais chaque grain garde sa propre forme : c'est bien un solide.",
                "Un liquide n'a pas de forme propre : il prend la forme du récipient qui le contient. En revanche, il a un volume propre : 1 L de lait reste 1 L de lait, qu'on le verse dans une bouteille ou dans une casserole. Au repos, la surface d'un liquide, appelée surface libre, est plane et horizontale.",
                "Un gaz n'a ni forme propre ni volume propre : il occupe tout l'espace qui lui est offert. Le parfum que l'on vaporise dans un coin de la pièce finit par être senti partout. Un gaz est compressible (on peut réduire son volume en le comprimant, comme dans une pompe à vélo bouchée) et expansible (son volume augmente si on lui laisse plus de place). Les solides et les liquides, eux, sont pratiquement incompressibles.",
              ],
              box: { label: "Propriété", text: "Solide : forme propre et volume propre. Liquide : pas de forme propre, mais un volume propre ; surface libre plane et horizontale au repos. Gaz : ni forme propre ni volume propre ; il est compressible et expansible." },
            },
            {
              heading: "Un gaz est de la matière : il a une masse",
              paragraphs: [
                "On pense parfois que l'air n'est « rien ». Pourtant, l'air est de la matière, et toute matière a une masse. On peut le vérifier : on pèse un ballon de football, on le gonfle davantage avec une pompe, puis on le pèse à nouveau. Sa masse a augmenté : c'est la masse de l'air que l'on a ajouté.",
                "Cette masse est faible, mais elle n'est pas nulle : à 20 °C et à la pression habituelle, 1 L d'air a une masse d'environ 1,2 g. Une salle de classe contient ainsi plus de 150 kg d'air.",
              ],
              box: { label: "Repère", text: "À 20 °C et à la pression atmosphérique habituelle, 1 L d'air a une masse d'environ 1,2 g." },
            },
            {
              heading: "Le modèle particulaire : ce que l'on ne voit pas",
              paragraphs: [
                "Pour expliquer les propriétés des trois états, les scientifiques utilisent un modèle : la matière est faite de particules (des molécules) extrêmement petites, invisibles même au microscope ordinaire. On les représente par de petits disques sur un schéma.",
                "Dans un solide, les particules sont collées les unes aux autres et, dans la plupart des solides, rangées régulièrement ; elles vibrent sur place sans changer de place. On dit que l'état solide est compact et ordonné. Dans un liquide, les particules sont aussi au contact les unes des autres, mais elles glissent les unes sur les autres et se déplacent : l'état liquide est compact et désordonné.",
                "Dans un gaz, les particules sont très éloignées les unes des autres et se déplacent très vite, dans toutes les directions : l'état gazeux est dispersé et désordonné. Ce modèle explique pourquoi un gaz est compressible : il y a beaucoup d'espace vide entre ses particules, et on peut les rapprocher. Dans un solide ou un liquide, les particules se touchent déjà : on ne peut presque pas les rapprocher davantage.",
              ],
              box: { label: "Définition", text: "Modèle particulaire. Solide : particules au contact, ordonnées, qui vibrent sur place (compact et ordonné). Liquide : particules au contact, qui glissent les unes sur les autres (compact et désordonné). Gaz : particules éloignées et très agitées (dispersé et désordonné)." },
            },
          ],
          keyPoints: [
            "La matière existe sous trois états : solide, liquide et gazeux.",
            "Solide : forme propre et volume propre. Un solide peut être compact (bois) ou divisé (sable, farine).",
            "Liquide : volume propre mais pas de forme propre ; au repos, sa surface libre est plane et horizontale.",
            "Gaz : ni forme ni volume propres ; il est compressible et expansible.",
            "L'air est de la matière : 1 L d'air a une masse d'environ 1,2 g. La vapeur d'eau est invisible.",
            "Modèle particulaire : solide compact et ordonné, liquide compact et désordonné, gaz dispersé et désordonné.",
          ],
          example: {
            statement: "On remplit une seringue d'air, on bouche son extrémité avec le doigt et on appuie sur le piston : le piston s'enfonce. On recommence avec une seringue remplie d'eau : le piston ne s'enfonce presque pas. Expliquer ces deux observations à l'aide du modèle particulaire.",
            solution: [
              "Dans la seringue bouchée, la quantité de matière ne change pas : aucune particule ne peut entrer ni sortir.",
              "L'air est un gaz : ses particules sont éloignées les unes des autres, avec beaucoup d'espace vide entre elles.",
              "En appuyant, on rapproche les particules d'air : le volume diminue. L'air est compressible.",
              "L'eau est un liquide : ses particules sont déjà au contact les unes des autres, on ne peut presque pas les rapprocher.",
              "Réponse : le piston s'enfonce avec l'air car un gaz est compressible (particules dispersées) ; il ne s'enfonce presque pas avec l'eau car un liquide est pratiquement incompressible (particules au contact).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner l'état physique, à température ambiante, de chacune des substances suivantes et justifier par une propriété : un glaçon sorti du congélateur, l'huile d'une bouteille, le sel de table, l'air d'un ballon, le jus d'orange.",
              hint: "Demandez-vous pour chacune : garde-t-elle sa forme ? garde-t-elle son volume ? Un solide en grains reste un solide.",
              solution: [
                "Glaçon : état solide, il garde sa forme et son volume (on peut le prendre dans la main).",
                "Huile : état liquide, elle prend la forme de la bouteille ou du verre, mais garde son volume.",
                "Sel de table : état solide (solide divisé) ; on peut le verser, mais chaque grain garde sa forme.",
                "Air du ballon : état gazeux, il occupe tout le volume du ballon et peut être comprimé.",
                "Jus d'orange : état liquide, il prend la forme du récipient et sa surface au repos est plane et horizontale.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On pèse un ballon de basket : la balance indique 600,0 g. Avec une pompe, on y fait entrer 4 L d'air de la pièce, puis on le pèse à nouveau : la balance indique 604,8 g. 1) Calculer la masse d'air ajoutée. 2) En déduire la masse de 1 L d'air. 3) Que montre cette expérience ?",
              hint: "La masse d'air ajoutée est la différence entre les deux pesées ; pour 1 L, divisez par le nombre de litres.",
              solution: [
                "1) Masse d'air ajoutée : 604,8 g - 600,0 g = 4,8 g.",
                "2) Masse de 1 L d'air : 4,8 g ÷ 4 = 1,2 g.",
                "3) La masse du ballon a augmenté quand on a ajouté de l'air : l'air a une masse, c'est donc de la matière.",
                "Réponse : 4,8 g d'air ont été ajoutés ; 1 L d'air a une masse de 1,2 g ; l'expérience montre qu'un gaz est de la matière pesante.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une seringue bouchée contient 60 mL d'air. 1) On pousse le piston jusqu'à 30 mL. Le nombre de particules d'air dans la seringue a-t-il changé ? La masse d'air a-t-elle changé ? 2) Décrire, à l'aide du modèle particulaire, ce qui a changé. 3) On tire maintenant le piston jusqu'à 80 mL : quelle propriété des gaz cette expérience illustre-t-elle ? 4) Pourquoi serait-il impossible de faire passer 60 mL d'eau à 30 mL de la même façon ?",
              hint: "La seringue est bouchée : rien n'entre et rien ne sort. Pensez à la distance entre les particules plutôt qu'à leur nombre.",
              solution: [
                "1) La seringue est bouchée : aucune particule ne peut entrer ni sortir. Le nombre de particules est le même, donc la masse d'air est la même.",
                "2) Ce qui change, c'est la distance entre les particules : elles sont plus rapprochées, l'air occupe un volume deux fois plus petit. L'air est compressible.",
                "3) En tirant le piston, l'air occupe tout le nouvel espace disponible (80 mL) : ses particules s'éloignent. Cette propriété s'appelle l'expansibilité : un gaz occupe tout le volume qui lui est offert.",
                "4) Dans l'eau liquide, les particules sont déjà au contact les unes des autres : on ne peut pas les rapprocher, donc on ne peut pas réduire le volume de l'eau de moitié.",
                "Réponse : le nombre de particules et la masse ne changent pas ; seul l'écartement des particules change. Un gaz est compressible et expansible, un liquide est pratiquement incompressible.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur les états de la matière.",
            statements: [
              { text: "Le sable que l'on peut verser est un liquide.", true: false, why: "Le sable est un solide divisé : chaque grain garde sa propre forme." },
              { text: "L'air a une masse.", true: true, why: "L'air est de la matière : 1 L d'air a une masse d'environ 1,2 g." },
              { text: "Le panache blanc au-dessus d'une casserole d'eau bouillante est de la vapeur d'eau.", true: false, why: "La vapeur d'eau est invisible : le panache blanc est fait de fines gouttelettes d'eau liquide." },
              { text: "Un liquide prend la forme du récipient qui le contient.", true: true, why: "Un liquide n'a pas de forme propre, mais il garde son volume." },
              { text: "On peut facilement comprimer de l'eau liquide dans une seringue bouchée.", true: false, why: "Les particules d'un liquide sont déjà au contact : un liquide est pratiquement incompressible." },
              { text: "Dans un gaz, les particules sont éloignées les unes des autres et très agitées.", true: true, why: "C'est l'état dispersé et désordonné du modèle particulaire." },
              { text: "Un gaz garde toujours le même volume.", true: false, why: "Un gaz n'a pas de volume propre : il occupe tout l'espace qui lui est offert." },
            ],
          },
          quiz: [
            {
              q: "Quel état de la matière possède une forme propre ?",
              options: ["L'état liquide", "L'état solide", "L'état gazeux"],
              answer: 1,
              why: "Seul un solide garde sa forme, quel que soit le récipient.",
            },
            {
              q: "Comment est la surface libre d'un liquide au repos ?",
              options: ["Plane et horizontale", "Toujours bombée", "Inclinée comme le récipient", "Plane et verticale"],
              answer: 0,
              why: "Au repos, la surface libre d'un liquide est plane et horizontale, même si l'on penche le récipient.",
            },
            {
              q: "Quelle est la masse approximative de 1 L d'air à 20 °C ?",
              options: ["0 g", "1 kg", "100 g", "1,2 g"],
              answer: 3,
              why: "L'air est de la matière : 1 L d'air a une masse d'environ 1,2 g.",
            },
            {
              q: "Dans le modèle particulaire, l'état liquide est décrit comme :",
              options: ["compact et ordonné", "dispersé et désordonné", "compact et désordonné", "dispersé et ordonné"],
              answer: 2,
              why: "Les particules d'un liquide sont au contact (compact) mais glissent les unes sur les autres (désordonné).",
            },
            {
              q: "Pourquoi peut-on comprimer un gaz ?",
              options: ["Ses particules rapetissent", "Il y a de l'espace entre ses particules", "Ses particules disparaissent"],
              answer: 1,
              why: "Les particules d'un gaz sont éloignées : on peut les rapprocher, sans changer ni leur nombre ni leur taille.",
            },
          ],
          trap: "Confondre la vapeur d'eau avec la buée ou le panache blanc d'une casserole : la vapeur d'eau est un gaz invisible ; ce que l'on voit, ce sont des gouttelettes d'eau liquide.",
          method: "Pour reconnaître un état, posez-vous deux questions dans l'ordre : « La substance garde-t-elle sa forme ? » (oui : solide), puis « Garde-t-elle son volume ? » (oui : liquide ; non : gaz). Justifiez toujours avec la propriété utilisée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'changements-etat',
          title: "Les changements d'état",
          minutes: 30,
          objectives: [
            "Nommer les six changements d'état : fusion, solidification, vaporisation, liquéfaction, sublimation et condensation.",
            "Distinguer l'ébullition et l'évaporation, deux formes de vaporisation.",
            "Reconnaître des changements d'état dans la vie courante et dans le cycle de l'eau.",
            "Interpréter un changement d'état au niveau microscopique avec le modèle particulaire.",
          ],
          course: [
            {
              heading: "Passer d'un état à un autre",
              paragraphs: [
                "Une substance peut passer d'un état à un autre : on parle de changement d'état. Un glaçon qui fond, une flaque qui sèche au soleil, de la buée sur un miroir de salle de bains : ce sont des changements d'état. La substance reste la même (c'est toujours de l'eau), seul son état change.",
                "Un changement d'état se produit le plus souvent quand on chauffe ou que l'on refroidit une substance. En chauffant, on passe du solide vers le liquide, puis vers le gaz. En refroidissant, on fait le chemin inverse.",
              ],
            },
            {
              heading: "Les six changements d'état",
              paragraphs: [
                "Entre le solide et le liquide : la fusion est le passage de l'état solide à l'état liquide (le beurre qui fond dans la poêle) ; la solidification est le passage de l'état liquide à l'état solide (l'eau qui gèle dans le bac à glaçons).",
                "Entre le liquide et le gaz : la vaporisation est le passage de l'état liquide à l'état gazeux (l'eau d'une casserole qui bout) ; la liquéfaction est le passage de l'état gazeux à l'état liquide (la buée qui se forme sur une vitre froide : la vapeur d'eau de l'air devient de l'eau liquide). Dans la vie courante, on appelle souvent la liquéfaction « condensation ».",
                "Entre le solide et le gaz, sans passer par le liquide : la sublimation est le passage direct de l'état solide à l'état gazeux (la neige carbonique, du dioxyde de carbone solide très froid, se transforme directement en gaz) ; la condensation est le passage direct de l'état gazeux à l'état solide (le givre qui se forme sur une voiture par une nuit glaciale).",
              ],
              box: { label: "Définition", text: "Solide → liquide : fusion. Liquide → solide : solidification. Liquide → gaz : vaporisation. Gaz → liquide : liquéfaction. Solide → gaz : sublimation. Gaz → solide : condensation." },
            },
            {
              heading: "Ébullition et évaporation",
              paragraphs: [
                "La vaporisation peut se faire de deux façons. L'ébullition est une vaporisation rapide et tumultueuse : de grosses bulles de vapeur se forment dans tout le liquide. Elle se produit à une température bien précise : 100 °C pour l'eau pure, à la pression atmosphérique habituelle.",
                "L'évaporation est une vaporisation lente, qui se fait seulement à la surface du liquide, sans bulles, et à n'importe quelle température. C'est elle qui fait sécher le linge, même à 20 °C, ou disparaître une flaque après la pluie. Elle est plus rapide quand il fait chaud, quand il y a du vent ou quand la surface du liquide est grande.",
              ],
              box: { label: "À retenir", text: "Ébullition : vaporisation rapide, dans tout le liquide, à une température précise. Évaporation : vaporisation lente, à la surface du liquide, à toute température." },
            },
            {
              heading: "Ce qui se passe à l'échelle des particules",
              paragraphs: [
                "Le modèle particulaire explique les changements d'état. Lors de la fusion, les particules d'un solide, ordonnées, se mettent à glisser les unes sur les autres : elles restent au contact mais deviennent désordonnées. Lors de la vaporisation, les particules du liquide se séparent et s'éloignent les unes des autres : elles deviennent dispersées.",
                "Pendant un changement d'état, les particules ne changent pas : ce sont les mêmes particules d'eau dans la glace, dans l'eau liquide et dans la vapeur. Seuls leur arrangement et leur agitation changent. Pour réaliser une fusion, une vaporisation ou une sublimation, il faut apporter de l'énergie (chauffer) ; une solidification, une liquéfaction ou une condensation se produisent quand la substance cède de l'énergie (elle se refroidit).",
              ],
            },
            {
              heading: "Le cycle de l'eau",
              paragraphs: [
                "Les changements d'état de l'eau se produisent sans cesse dans la nature. Chauffée par le Soleil, l'eau des océans, des lacs et des sols s'évapore. En montant en altitude, la vapeur d'eau se refroidit et forme des nuages, faits de gouttelettes d'eau liquide (liquéfaction) ou de minuscules cristaux de glace (condensation).",
                "Les gouttelettes grossissent et tombent en pluie ; par temps froid, l'eau tombe sous forme de neige ou de grêle. Au printemps, la neige des montagnes fond (fusion) et alimente les rivières, qui retournent à la mer. C'est le cycle de l'eau.",
              ],
            },
          ],
          keyPoints: [
            "Fusion : solide → liquide. Solidification : liquide → solide.",
            "Vaporisation : liquide → gaz. Liquéfaction : gaz → liquide (la buée).",
            "Sublimation : solide → gaz. Condensation : gaz → solide (le givre).",
            "Ébullition : rapide, dans tout le liquide, à température fixe. Évaporation : lente, en surface, à toute température.",
            "Pendant un changement d'état, les particules restent les mêmes : seuls leur arrangement et leur agitation changent.",
          ],
          example: {
            statement: "Le matin, en hiver, Léa sort de chez elle avec ses lunettes : elles sont froides. En entrant dans la boulangerie chaude, ses lunettes se couvrent de buée. Nommer le changement d'état et expliquer d'où vient l'eau de la buée.",
            solution: [
              "L'air chaud de la boulangerie contient de la vapeur d'eau, un gaz invisible.",
              "Au contact des verres froids, cette vapeur d'eau se refroidit.",
              "Elle passe alors de l'état gazeux à l'état liquide : c'est une liquéfaction.",
              "Les fines gouttelettes d'eau liquide qui se déposent sur les verres forment la buée.",
              "Réponse : il s'agit d'une liquéfaction ; l'eau de la buée vient de la vapeur d'eau contenue dans l'air de la boulangerie, et non du verre des lunettes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommer le changement d'état dans chaque situation : a) une plaque de chocolat oubliée au soleil devient molle et coulante ; b) l'eau d'une flaque disparaît après une journée ensoleillée ; c) de l'eau placée au congélateur devient de la glace ; d) du givre se forme sur un pare-brise par une nuit très froide ; e) de la buée apparaît sur le miroir de la salle de bains.",
              hint: "Repérez l'état de départ et l'état d'arrivée, puis utilisez le tableau des six changements d'état.",
              solution: [
                "a) Solide → liquide : fusion.",
                "b) Liquide → gaz, lentement et en surface : vaporisation (évaporation).",
                "c) Liquide → solide : solidification.",
                "d) Gaz (vapeur d'eau de l'air) → solide (glace) : condensation.",
                "e) Gaz (vapeur d'eau) → liquide (gouttelettes) : liquéfaction.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun des cas suivants, dire s'il s'agit d'une ébullition ou d'une évaporation, et justifier : a) l'eau des pâtes, à 100 °C, forme de grosses bulles ; b) du linge mouillé sèche sur un étendoir à 18 °C ; c) une goutte d'alcool sur la peau disparaît en quelques secondes ; d) le niveau d'eau d'un aquarium baisse lentement au fil des semaines.",
              hint: "L'ébullition se reconnaît aux bulles qui se forment dans tout le liquide, à une température précise.",
              solution: [
                "a) Ébullition : des bulles de vapeur se forment dans tout le liquide, à la température précise de 100 °C.",
                "b) Évaporation : l'eau passe à l'état gazeux à 18 °C, en surface, sans bulles.",
                "c) Évaporation : elle est rapide car l'alcool s'évapore facilement, mais il n'y a pas de bulles dans le liquide.",
                "d) Évaporation : lente, à la surface de l'eau, à la température de la pièce.",
                "Réponse : seul le cas a) est une ébullition ; les cas b), c) et d) sont des évaporations.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un petit récit du cycle de l'eau : « Le soleil chauffe la mer ; l'eau monte dans l'air sous forme invisible. En altitude, il fait froid : des nuages se forment, faits de gouttelettes. Plus haut encore, de petits cristaux de glace apparaissent directement à partir de la vapeur. Il neige sur la montagne. Au printemps, la neige fond et rejoint la rivière. » 1) Relever les changements d'état et les nommer. 2) Pour chacun, dire s'il nécessite un apport d'énergie ou s'il se produit lors d'un refroidissement. 3) Décrire avec le modèle particulaire ce qui se passe lorsque la vapeur forme des gouttelettes.",
              hint: "Il y a quatre changements d'état dans le récit. Ceux qui vont « vers le gaz » demandent de l'énergie.",
              solution: [
                "1) « L'eau monte dans l'air sous forme invisible » : vaporisation (évaporation). « Des nuages faits de gouttelettes » : liquéfaction. « Des cristaux de glace directement à partir de la vapeur » : condensation. « La neige fond » : fusion.",
                "2) Vaporisation et fusion demandent un apport d'énergie (le Soleil chauffe la mer, le printemps réchauffe la neige). Liquéfaction et condensation se produisent lors d'un refroidissement (il fait froid en altitude).",
                "3) Dans la vapeur, les particules d'eau sont éloignées et très agitées. En se refroidissant, elles s'agitent moins, se rapprochent et se regroupent : elles restent désordonnées mais deviennent au contact, comme dans un liquide.",
                "Réponse : quatre changements d'état (vaporisation, liquéfaction, condensation, fusion) ; la vaporisation et la fusion demandent un apport d'énergie, la liquéfaction et la condensation se produisent par refroidissement.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque changement d'état à son nom.",
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
              q: "Comment s'appelle le passage de l'état liquide à l'état solide ?",
              options: ["La fusion", "La liquéfaction", "La solidification", "La sublimation"],
              answer: 2,
              why: "La solidification est le passage de l'état liquide à l'état solide, comme l'eau qui gèle.",
            },
            {
              q: "La buée sur une vitre froide est due à :",
              options: ["une liquéfaction", "une fusion", "une évaporation", "une solidification"],
              answer: 0,
              why: "La vapeur d'eau de l'air, un gaz, devient liquide au contact de la vitre froide : c'est une liquéfaction.",
            },
            {
              q: "Quelle différence y a-t-il entre l'évaporation et l'ébullition ?",
              options: ["Ce sont deux mots pour la même chose", "L'évaporation fait des bulles", "L'ébullition ne concerne que l'eau", "L'évaporation a lieu en surface"],
              answer: 3,
              why: "L'évaporation est lente, en surface et à toute température ; l'ébullition est rapide, avec des bulles dans tout le liquide, à une température précise.",
            },
            {
              q: "Lors de la fusion de la glace, les particules d'eau :",
              options: ["deviennent plus grosses", "glissent les unes sur les autres", "se transforment en autres particules"],
              answer: 1,
              why: "Les particules restent les mêmes ; elles quittent leur arrangement ordonné et glissent les unes sur les autres.",
            },
            {
              q: "La neige carbonique passe directement de l'état solide à l'état gazeux. C'est :",
              options: ["une condensation", "une vaporisation", "une sublimation", "une fusion"],
              answer: 2,
              why: "Le passage direct du solide au gaz, sans passer par le liquide, s'appelle la sublimation.",
            },
          ],
          trap: "Confondre liquéfaction et condensation, ou croire que la buée « sort » du verre froid : la buée provient de la vapeur d'eau de l'air qui se liquéfie au contact de la paroi froide.",
          method: "Pour nommer un changement d'état, écrivez toujours « état de départ → état d'arrivée » avant de chercher le mot. Pour retenir les noms, dessinez un triangle solide, liquide, gaz, avec une flèche dans chaque sens et son nom.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'temperature-changement-etat',
          title: "La température pendant un changement d'état",
          minutes: 35,
          objectives: [
            "Mesurer une température avec un thermomètre et l'exprimer en degrés Celsius (°C).",
            "Exploiter une courbe ou un tableau de température pour repérer un palier de changement d'état.",
            "Caractériser un corps pur par ses températures de changement d'état et le distinguer d'un mélange.",
            "Prévoir l'état physique d'un corps pur à une température donnée.",
          ],
          course: [
            {
              heading: "Mesurer une température",
              paragraphs: [
                "La température se mesure avec un thermomètre. En France, on l'exprime en degrés Celsius, de symbole °C. Les températures inférieures à 0 °C sont négatives : -18 °C est la température d'un congélateur domestique.",
                "Pour une mesure correcte, on plonge le bout du thermomètre (la sonde ou le réservoir) dans la substance, sans toucher le fond ni les parois du récipient, et l'on attend que l'affichage soit stable avant de lire la valeur. Avec un thermomètre à liquide, on lit la graduation en plaçant l'œil à la hauteur du niveau du liquide.",
              ],
            },
            {
              heading: "Le palier de température",
              paragraphs: [
                "Expérience : on sort de la glace pilée d'un congélateur (-18 °C), on la place dans un tube à essais et on relève sa température chaque minute pendant qu'elle se réchauffe. La température monte jusqu'à 0 °C. Puis, tant qu'il reste de la glace, elle reste égale à 0 °C, même si l'on continue à chauffer : la glace fond. Quand toute la glace a fondu, la température de l'eau liquide recommence à monter.",
                "Sur le graphique de la température en fonction du temps, cette partie horizontale s'appelle un palier de température. Pendant tout le changement d'état, l'énergie apportée sert à faire changer l'état, pas à faire monter la température.",
                "On observe la même chose en refroidissant de l'eau liquide : sa température descend jusqu'à 0 °C, reste à 0 °C pendant toute la solidification, puis redescend une fois que tout est solide. Pour un même corps pur, la température de fusion est égale à la température de solidification.",
              ],
              box: { label: "Propriété", text: "Pour un corps pur, la température reste constante pendant toute la durée d'un changement d'état : c'est le palier de température. Pour l'eau pure, à la pression habituelle : fusion et solidification à 0 °C, ébullition à 100 °C." },
            },
            {
              heading: "Des températures propres à chaque corps pur",
              paragraphs: [
                "Chaque corps pur possède ses propres températures de changement d'état, qui permettent de l'identifier, comme une carte d'identité. À la pression atmosphérique habituelle : l'eau fond à 0 °C et bout à 100 °C ; l'éthanol (l'alcool) fond à -114 °C et bout à 78 °C ; le cyclohexane fond à 6,5 °C et bout à 81 °C ; le mercure fond à -39 °C et bout à 357 °C ; le fer fond à 1 538 °C.",
                "Ces températures permettent de prévoir l'état d'un corps pur. Au-dessous de sa température de fusion, il est solide ; entre sa température de fusion et sa température d'ébullition, il est liquide ; au-dessus de sa température d'ébullition, il est gazeux. Ainsi, à 20 °C, l'éthanol est liquide ; à -120 °C, il est solide ; à 90 °C, il est gazeux.",
                "La température d'ébullition dépend de la pression de l'air. En altitude, la pression est plus faible et l'eau bout à une température plus basse : environ 85 °C au sommet du mont Blanc. Les valeurs données dans les tables sont celles de la pression atmosphérique habituelle, au niveau de la mer.",
              ],
              box: { label: "Règle", text: "Pour un corps pur, à la pression habituelle : température inférieure à la température de fusion → solide ; comprise entre la température de fusion et la température d'ébullition → liquide ; supérieure à la température d'ébullition → gaz." },
            },
            {
              heading: "Un mélange n'a pas de palier",
              paragraphs: [
                "Si l'on refroidit de l'eau salée, on n'observe pas de palier net : la solidification commence au-dessous de 0 °C et la température continue de baisser pendant qu'elle se solidifie. C'est pour cette raison que l'on répand du sel sur les routes en hiver : l'eau salée ne gèle pas à 0 °C mais à une température plus basse.",
                "Le palier de température est donc un critère pour savoir si une substance est un corps pur (une seule espèce chimique) ou un mélange : un corps pur présente un palier, à une température précise, lors d'un changement d'état ; un mélange n'en présente généralement pas.",
              ],
              box: { label: "À retenir", text: "Un palier de température net lors d'un changement d'état indique un corps pur. L'absence de palier indique un mélange (par exemple l'eau salée)." },
            },
          ],
          keyPoints: [
            "La température s'exprime en degrés Celsius (°C) et se mesure avec un thermomètre.",
            "Pendant le changement d'état d'un corps pur, la température reste constante : c'est un palier.",
            "Eau pure à la pression habituelle : fusion et solidification à 0 °C, ébullition à 100 °C.",
            "Chaque corps pur a ses propres températures de fusion et d'ébullition, qui permettent de l'identifier.",
            "Un mélange, comme l'eau salée, ne présente pas de palier net.",
            "En altitude, l'eau bout à moins de 100 °C.",
          ],
          example: {
            statement: "On refroidit un liquide inconnu et l'on relève sa température chaque minute, de t = 0 min à t = 8 min : 20 °C ; 15 °C ; 10 °C ; 6,5 °C ; 6,5 °C ; 6,5 °C ; 6,5 °C ; 3 °C ; 0 °C. Le liquide est-il un corps pur ? Si oui, l'identifier parmi : eau (fusion 0 °C), cyclohexane (fusion 6,5 °C), éthanol (fusion -114 °C).",
            solution: [
              "De la 3e à la 6e minute, la température reste constante à 6,5 °C : il y a un palier de température.",
              "Ce palier correspond à un changement d'état : le liquide se solidifie.",
              "La présence d'un palier net montre que la substance est un corps pur.",
              "La température de solidification d'un corps pur est égale à sa température de fusion : ici 6,5 °C.",
              "Réponse : c'est un corps pur, le cyclohexane, qui se solidifie à 6,5 °C.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données à la pression habituelle : mercure, fusion -39 °C et ébullition 357 °C. Donner l'état physique du mercure à : a) -50 °C ; b) 20 °C ; c) 400 °C ; d) -39 °C (pendant que le mercure liquide se solidifie).",
              hint: "Comparez chaque température à la température de fusion, puis à la température d'ébullition.",
              solution: [
                "a) -50 °C est inférieur à -39 °C : le mercure est solide.",
                "b) 20 °C est compris entre -39 °C et 357 °C : le mercure est liquide (c'est le seul métal liquide à température ambiante).",
                "c) 400 °C est supérieur à 357 °C : le mercure est gazeux.",
                "d) À -39 °C, pendant la solidification, le mercure est en train de changer d'état : il y a à la fois du mercure liquide et du mercure solide.",
              ],
            },
            {
              level: 2,
              statement: "On chauffe de la glace sortie du congélateur et l'on note sa température chaque minute : 0 min : -12 °C ; 1 min : -6 °C ; 2 min : 0 °C ; 3 min : 0 °C ; 4 min : 0 °C ; 5 min : 0 °C ; 6 min : 4 °C ; 7 min : 9 °C. 1) Repérer le palier et donner sa température. 2) Quel changement d'état a lieu pendant le palier ? 3) Dans quel état est l'eau à 1 min ? à 4 min ? à 7 min ? 4) L'eau utilisée est-elle pure ?",
              hint: "Le palier est la partie où la température ne change pas.",
              solution: [
                "1) De 2 min à 5 min, la température reste à 0 °C : c'est le palier, à 0 °C.",
                "2) La glace se transforme en eau liquide : c'est une fusion.",
                "3) À 1 min (-6 °C), l'eau est solide. À 4 min, au milieu du palier, la glace et l'eau liquide sont présentes ensemble. À 7 min (9 °C), l'eau est entièrement liquide.",
                "4) Il y a un palier net à 0 °C, la température de fusion de l'eau pure : l'eau utilisée est pure.",
                "Réponse : palier à 0 °C pendant la fusion ; solide à 1 min, solide et liquide à 4 min, liquide à 7 min ; l'eau est pure.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux tubes sont placés dans un mélange réfrigérant très froid. Le tube A contient de l'eau distillée, le tube B de l'eau salée. Relevés (une mesure par minute). Tube A : 10 ; 5 ; 0 ; 0 ; 0 ; 0 ; -4 ; -8 (en °C). Tube B : 10 ; 5 ; 0 ; -2 ; -3 ; -4 ; -6 ; -9 (en °C) ; dans le tube B, les premiers cristaux de glace apparaissent à -2 °C. 1) Lequel des deux tubes présente un palier ? 2) En déduire lequel contient un corps pur et lequel contient un mélange. 3) Expliquer pourquoi on sale les routes en hiver. 4) À 2 000 m d'altitude, l'eau distillée bout-elle à 100 °C ? Justifier.",
              hint: "Comparez la façon dont la température évolue quand les cristaux de glace apparaissent dans chaque tube.",
              solution: [
                "1) Le tube A présente un palier à 0 °C (de la 3e à la 6e mesure). Dans le tube B, la température ne cesse de baisser, même pendant l'apparition de la glace : il n'y a pas de palier.",
                "2) Le tube A contient un corps pur (l'eau distillée) ; le tube B contient un mélange (eau + sel).",
                "3) L'eau salée commence à geler au-dessous de 0 °C (ici à -2 °C) : en salant les routes, on empêche la formation de verglas tant que la température ne descend pas trop bas.",
                "4) Non : en altitude, la pression de l'air est plus faible et l'eau bout à une température inférieure à 100 °C.",
                "Réponse : palier pour A seulement, donc A est un corps pur et B un mélange ; le sel abaisse la température de début de solidification de l'eau ; en altitude, l'eau bout au-dessous de 100 °C.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Un glaçon à -18 °C est chauffé jusqu'à ce que toute l'eau soit vaporisée. Remettez les étapes dans l'ordre.",
            items: [
              "La température de la glace monte de -18 °C à 0 °C.",
              "La glace commence à fondre à 0 °C.",
              "La température reste à 0 °C tant qu'il reste de la glace.",
              "L'eau liquide se réchauffe de 0 °C à 100 °C.",
              "L'eau bout : la température reste à 100 °C.",
              "Il n'y a plus d'eau liquide : toute l'eau est à l'état de vapeur.",
            ],
          },
          quiz: [
            {
              q: "Pendant la fusion de la glace pure, la température :",
              options: ["augmente régulièrement", "reste constante à 0 °C", "diminue", "reste à 100 °C"],
              answer: 1,
              why: "Pendant le changement d'état d'un corps pur, la température reste constante : c'est le palier de 0 °C pour l'eau.",
            },
            {
              q: "L'éthanol fond à -114 °C et bout à 78 °C. Dans quel état est-il à 25 °C ?",
              options: ["Gazeux", "Solide", "Liquide", "Solide et liquide à la fois"],
              answer: 2,
              why: "25 °C est compris entre -114 °C et 78 °C : l'éthanol est liquide.",
            },
            {
              q: "Lors du refroidissement de l'eau salée, on observe :",
              options: ["un palier à 0 °C", "un palier à 100 °C", "un palier à -18 °C", "pas de palier net"],
              answer: 3,
              why: "L'eau salée est un mélange : sa température continue de baisser pendant la solidification.",
            },
            {
              q: "Que permet de savoir un palier de température net ?",
              options: ["Que la substance est un corps pur", "Que la substance est un mélange", "Que la substance est un gaz"],
              answer: 0,
              why: "Un corps pur change d'état à une température fixe, ce qui donne un palier ; un mélange n'en a généralement pas.",
            },
            {
              q: "Au sommet d'une haute montagne, l'eau pure bout :",
              options: ["toujours à exactement 100 °C", "au-dessous de 100 °C", "au-dessus de 100 °C", "à 0 °C"],
              answer: 1,
              why: "En altitude, la pression de l'air est plus faible : l'eau bout à une température plus basse, environ 85 °C au sommet du mont Blanc.",
            },
          ],
          trap: "Croire que la température continue de monter pendant que la glace fond parce qu'on chauffe toujours : pour un corps pur, la température reste constante pendant tout le changement d'état.",
          method: "Pour lire un relevé de températures, cherchez d'abord les valeurs qui se répètent : elles forment le palier. Notez sa température, puis comparez-la à un tableau de données pour identifier le corps pur.",
        },
      ],
    },
    /* ==================================================================== */
    /* MASSE ET VOLUME                                                        */
    /* ==================================================================== */
    {
      id: 'masse-et-volume',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mesurer-masse-volume',
          title: 'Mesurer une masse et un volume',
          minutes: 30,
          objectives: [
            "Mesurer une masse avec une balance électronique, en utilisant la fonction tare.",
            "Mesurer le volume d'un liquide avec une éprouvette graduée, en lisant correctement le ménisque.",
            "Déterminer le volume d'un solide par déplacement d'eau ou par le calcul.",
            "Convertir des masses et des volumes (kg, g, mg ; m³, dm³, cm³, L, mL).",
          ],
          course: [
            {
              heading: "La masse et sa mesure",
              paragraphs: [
                "La masse indique la quantité de matière d'un objet. Son unité légale est le kilogramme (kg). On utilise aussi le gramme (g), le milligramme (mg) et la tonne (t) : 1 kg = 1 000 g ; 1 g = 1 000 mg ; 1 t = 1 000 kg. Dans la vie courante, on dit « peser » et l'on parle parfois de « poids » : en physique, le poids est une autre grandeur, que vous étudierez plus tard. Ici, on mesure bien une masse.",
                "On mesure une masse avec une balance électronique. Pour connaître la masse d'un liquide, il faut un récipient. Première méthode : on pèse le récipient vide (masse m₁), puis le récipient rempli (masse m₂), et l'on calcule m = m₂ - m₁. Seconde méthode, plus rapide : on pose le récipient vide sur la balance et l'on appuie sur la touche « tare » ; la balance affiche 0 g, puis, quand on verse le liquide, elle affiche directement la masse du liquide seul.",
              ],
              box: { label: "À retenir", text: "Unité légale de masse : le kilogramme (kg). 1 t = 1 000 kg ; 1 kg = 1 000 g ; 1 g = 1 000 mg. La touche « tare » remet l'affichage à zéro avec le récipient posé : la balance indique ensuite la masse du contenu seul." },
            },
            {
              heading: "Le volume et ses unités",
              paragraphs: [
                "Le volume indique la place qu'occupe un objet ou une substance dans l'espace. Son unité légale est le mètre cube (m³). On utilise aussi le décimètre cube (dm³) et le centimètre cube (cm³) : 1 m³ = 1 000 dm³ et 1 dm³ = 1 000 cm³.",
                "Pour les liquides, on utilise souvent le litre (L), le centilitre (cL) et le millilitre (mL) : 1 L = 100 cL = 1 000 mL. Il faut connaître les correspondances entre ces unités : 1 L = 1 dm³ et 1 mL = 1 cm³. Ainsi, une bouteille de 1,5 L contient 1,5 dm³, soit 1 500 cm³ d'eau, et 1 m³ = 1 000 L.",
              ],
              box: { label: "Repère", text: "1 L = 1 dm³ ; 1 mL = 1 cm³ ; 1 m³ = 1 000 L ; 1 L = 100 cL = 1 000 mL." },
            },
            {
              heading: "Mesurer le volume d'un liquide",
              paragraphs: [
                "Pour mesurer précisément un volume de liquide, on utilise une éprouvette graduée (le bécher, lui, ne donne qu'une indication approximative). Avant la mesure, on cherche la valeur d'une graduation : si, entre 0 mL et 10 mL, il y a 5 intervalles, chaque graduation vaut 10 ÷ 5 = 2 mL.",
                "La surface de l'eau dans une éprouvette n'est pas tout à fait plate : elle se courbe contre la paroi et forme un ménisque. Pour lire le volume, on pose l'éprouvette sur une table horizontale, on place l'œil à la hauteur de la surface du liquide et l'on lit la graduation au niveau du bas du ménisque.",
              ],
              box: { label: "Règle", text: "Lecture d'une éprouvette graduée : éprouvette posée à plat, œil à la hauteur du liquide, lecture au bas du ménisque." },
            },
            {
              heading: "Mesurer le volume d'un solide",
              paragraphs: [
                "Si le solide a une forme simple, on calcule son volume avec les formules de mathématiques : un cube d'arête a a pour volume a × a × a, un pavé droit de dimensions L, l et h a pour volume L × l × h. Un cube de 2 cm d'arête a un volume de 2 × 2 × 2 = 8 cm³.",
                "Si le solide a une forme irrégulière (un caillou, une clé), on utilise la méthode du déplacement d'eau. On verse de l'eau dans une éprouvette graduée et l'on lit le volume V₁. On fait glisser doucement le solide dans l'éprouvette inclinée : il doit être entièrement immergé. On lit le nouveau volume V₂. Le niveau est monté parce que le solide prend la place d'une partie de l'eau : le volume du solide est V = V₂ - V₁.",
                "Cette méthode ne convient que pour un solide qui coule, qui ne se dissout pas dans l'eau et qui ne l'absorbe pas (une éponge ou un morceau de sucre ne conviennent pas).",
              ],
              box: { label: "Formule", text: "Volume d'un solide par déplacement d'eau : V(solide) = V₂ - V₁, où V₁ est le volume d'eau seule et V₂ le volume lu quand le solide est immergé." },
            },
          ],
          keyPoints: [
            "La masse se mesure avec une balance, en kilogrammes (kg) ou en grammes (g) ; la touche « tare » remet l'affichage à zéro.",
            "Le volume se mesure en m³, dm³, cm³ ou en L, mL : 1 L = 1 dm³ et 1 mL = 1 cm³.",
            "Éprouvette graduée : chercher la valeur d'une graduation, lire au bas du ménisque, l'œil à la hauteur du liquide.",
            "Volume d'un solide irrégulier : V = V₂ - V₁ par déplacement d'eau.",
            "Volume d'un cube : a × a × a ; d'un pavé droit : L × l × h.",
          ],
          example: {
            statement: "On veut connaître la masse de 100 mL d'huile. On pèse un bécher vide : 52,3 g. On y verse 100 mL d'huile mesurés à l'éprouvette, puis on pèse à nouveau : 144,3 g. 1) Calculer la masse de l'huile. 2) Quelle autre méthode aurait permis de lire directement cette masse ?",
            solution: [
              "1) La masse de l'huile est la différence entre les deux pesées : m = m₂ - m₁.",
              "m = 144,3 g - 52,3 g = 92,0 g.",
              "2) On pose le bécher vide sur la balance et l'on appuie sur la touche « tare » : la balance affiche 0 g.",
              "On verse les 100 mL d'huile : la balance affiche directement la masse de l'huile seule.",
              "Réponse : 100 mL d'huile ont une masse de 92,0 g ; la fonction tare permet de la lire directement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Convertir : a) 2,5 kg en g ; b) 750 mg en g ; c) 1,5 L en mL ; d) 250 cm³ en mL ; e) 3 dm³ en L ; f) 0,2 m³ en L.",
              hint: "Utilisez les correspondances : 1 kg = 1 000 g, 1 g = 1 000 mg, 1 L = 1 000 mL = 1 dm³, 1 mL = 1 cm³, 1 m³ = 1 000 L.",
              solution: [
                "a) 2,5 kg = 2,5 × 1 000 g = 2 500 g.",
                "b) 750 mg = 750 ÷ 1 000 g = 0,75 g.",
                "c) 1,5 L = 1,5 × 1 000 mL = 1 500 mL.",
                "d) 1 cm³ = 1 mL, donc 250 cm³ = 250 mL.",
                "e) 1 dm³ = 1 L, donc 3 dm³ = 3 L.",
                "f) 0,2 m³ = 0,2 × 1 000 L = 200 L.",
              ],
            },
            {
              level: 2,
              statement: "Une éprouvette graduée de 100 mL porte 5 intervalles entre 0 mL et 10 mL. On y verse de l'eau : le bas du ménisque est à la 18e graduation. On y fait glisser une clé en métal, qui coule et est entièrement immergée : le bas du ménisque est alors à la 21e graduation. 1) Quelle est la valeur d'une graduation ? 2) Donner les volumes V₁ et V₂. 3) Calculer le volume de la clé en mL puis en cm³.",
              hint: "Divisez 10 mL par le nombre d'intervalles pour trouver la valeur d'une graduation, puis multipliez par le numéro de la graduation.",
              solution: [
                "1) Entre 0 et 10 mL, il y a 5 intervalles : une graduation vaut 10 ÷ 5 = 2 mL.",
                "2) V₁ = 18 × 2 = 36 mL ; V₂ = 21 × 2 = 42 mL.",
                "3) V(clé) = V₂ - V₁ = 42 - 36 = 6 mL.",
                "Comme 1 mL = 1 cm³, le volume de la clé est 6 cm³.",
                "Réponse : une graduation vaut 2 mL ; V₁ = 36 mL, V₂ = 42 mL ; la clé a un volume de 6 mL, soit 6 cm³.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un aquarium a la forme d'un pavé droit : longueur 50 cm, largeur 30 cm, hauteur 40 cm. 1) Calculer son volume en cm³ puis en L. 2) On le remplit d'eau sur une hauteur de 30 cm. Calculer le volume d'eau en L, puis sa masse sachant que 1 L d'eau a une masse de 1 kg. 3) On y pose une grosse pierre décorative, qui est entièrement immergée : le niveau de l'eau monte de 1 cm. Calculer le volume de la pierre en cm³ puis en L.",
              hint: "Volume d'un pavé : L × l × h. Pour la pierre, le volume d'eau « déplacé » est un pavé de 50 cm sur 30 cm et de 1 cm de hauteur. Rappel : 1 L = 1 000 cm³.",
              solution: [
                "1) V = 50 × 30 × 40 = 60 000 cm³. Comme 1 L = 1 dm³ = 1 000 cm³, V = 60 000 ÷ 1 000 = 60 L.",
                "2) V(eau) = 50 × 30 × 30 = 45 000 cm³ = 45 L.",
                "Masse de l'eau : 45 × 1 kg = 45 kg.",
                "3) La pierre prend la place d'un volume d'eau égal à son propre volume : le niveau monte de 1 cm.",
                "V(pierre) = 50 × 30 × 1 = 1 500 cm³ = 1 500 ÷ 1 000 = 1,5 L.",
                "Réponse : l'aquarium a un volume de 60 L ; il contient 45 L d'eau, soit 45 kg ; la pierre a un volume de 1 500 cm³, soit 1,5 L.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la mesure du volume d'un caillou par déplacement d'eau.",
            items: [
              "Verser de l'eau dans l'éprouvette graduée, assez pour recouvrir le caillou.",
              "Lire le volume V₁ au bas du ménisque, l'œil à la hauteur du liquide.",
              "Incliner l'éprouvette et faire glisser doucement le caillou dans l'eau.",
              "Vérifier que le caillou est entièrement immergé.",
              "Lire le nouveau volume V₂ au bas du ménisque.",
              "Calculer le volume du caillou : V = V₂ - V₁.",
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité légale de masse ?",
              options: ["Le kilogramme", "Le litre", "Le mètre cube", "Le degré Celsius"],
              answer: 0,
              why: "La masse s'exprime en kilogrammes (kg) ; le litre et le mètre cube sont des unités de volume.",
            },
            {
              q: "1 L est égal à :",
              options: ["1 cm³", "1 dm³", "1 m³", "10 cm³"],
              answer: 1,
              why: "1 L = 1 dm³ = 1 000 cm³.",
            },
            {
              q: "Où lit-on le volume d'eau dans une éprouvette graduée ?",
              options: ["Au bord supérieur du ménisque", "En regardant d'au-dessus", "Au bas du ménisque", "Au milieu de l'éprouvette"],
              answer: 2,
              why: "On lit au bas du ménisque, l'œil placé à la hauteur de la surface du liquide.",
            },
            {
              q: "Le niveau d'eau passe de 40 mL à 47 mL quand on immerge un caillou. Quel est le volume du caillou ?",
              options: ["47 cm³", "40 cm³", "87 cm³", "7 cm³"],
              answer: 3,
              why: "V = V₂ - V₁ = 47 - 40 = 7 mL, soit 7 cm³ puisque 1 mL = 1 cm³.",
            },
            {
              q: "750 mL correspondent à :",
              options: ["0,75 L", "7,5 L", "75 L", "0,075 L"],
              answer: 0,
              why: "1 L = 1 000 mL, donc 750 mL = 750 ÷ 1 000 = 0,75 L.",
            },
          ],
          trap: "Donner V₂ comme volume du solide : le volume lu quand le solide est immergé comprend aussi l'eau ; il faut calculer V₂ - V₁.",
          method: "Pour les conversions, construisez un tableau de conversion (kg, hg, dag, g, dg, cg, mg pour les masses ; L, dL, cL, mL pour les volumes) et retenez les deux ponts : 1 L = 1 dm³ et 1 mL = 1 cm³. Vérifiez toujours que le résultat est vraisemblable.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conservation-masse',
          title: "Ce qui se conserve lors d'un changement d'état",
          minutes: 25,
          objectives: [
            "Montrer expérimentalement que la masse se conserve lors d'un changement d'état.",
            "Constater que le volume varie lors d'un changement d'état, et le cas particulier de l'eau.",
            "Interpréter la conservation de la masse et la variation du volume avec le modèle particulaire.",
          ],
          course: [
            {
              heading: "La masse se conserve",
              paragraphs: [
                "Expérience : on place des glaçons dans un flacon que l'on ferme, puis on pèse l'ensemble : la balance indique par exemple 250,0 g. On attend que toute la glace ait fondu et l'on pèse à nouveau le flacon toujours fermé : la balance indique encore 250,0 g.",
                "La glace s'est transformée en eau liquide, mais la masse n'a pas changé. C'est une règle générale : au cours d'un changement d'état, la masse se conserve. Un glaçon de 30 g donne 30 g d'eau liquide ; 1 kg d'eau liquide donne 1 kg de glace.",
              ],
              box: { label: "Propriété", text: "Au cours d'un changement d'état, la masse se conserve : la masse de la substance est la même avant et après le changement d'état." },
            },
            {
              heading: "Le volume, lui, varie",
              paragraphs: [
                "Si l'on remplit une petite bouteille d'eau à ras bord et qu'on la place au congélateur, la glace dépasse du goulot : le volume a augmenté. Quand l'eau gèle, son volume augmente d'environ 9 % : 1 L d'eau liquide donne environ 1,09 L de glace. C'est pour cela qu'une bouteille en verre pleine d'eau peut éclater au congélateur et que les canalisations d'eau peuvent se rompre en hiver.",
                "L'eau est une exception. Pour la plupart des autres substances, le volume diminue lors de la solidification : la cire d'une bougie, en refroidissant, se creuse au centre parce qu'elle occupe moins de place à l'état solide qu'à l'état liquide.",
                "Lors de la vaporisation, le volume augmente énormément : 1 g d'eau liquide occupe environ 1 mL, mais à l'état de vapeur, à 100 °C et à la pression habituelle, il occupe environ 1,7 L, soit environ 1 700 fois plus.",
              ],
              box: { label: "À retenir", text: "Lors d'un changement d'état, la masse se conserve mais le volume varie. L'eau est une exception : son volume augmente quand elle se solidifie (environ 1,09 L de glace pour 1 L d'eau)." },
            },
            {
              heading: "L'explication par les particules",
              paragraphs: [
                "Pendant un changement d'état, aucune particule n'apparaît et aucune ne disparaît : les particules sont les mêmes et elles sont aussi nombreuses avant et après. Comme la masse de la substance est la somme des masses de ses particules, la masse ne change pas.",
                "En revanche, la façon dont les particules sont rangées et l'espace entre elles changent. Dans un gaz, les particules sont très éloignées : le volume est beaucoup plus grand. Dans la glace, les particules d'eau sont rangées d'une façon qui laisse un peu plus d'espace que dans l'eau liquide : c'est ce qui explique l'exception de l'eau.",
              ],
            },
            {
              heading: "Attention aux récipients ouverts",
              paragraphs: [
                "Si l'on fait bouillir de l'eau dans une casserole ouverte posée sur une balance, la masse affichée diminue. Ce n'est pas que la matière disparaît : la vapeur d'eau s'échappe dans l'air de la pièce. La masse totale (eau de la casserole + vapeur partie dans l'air) est conservée.",
                "Pour vérifier la conservation de la masse, il faut donc travailler avec un récipient fermé, d'où la matière ne peut pas s'échapper et où elle ne peut pas entrer.",
              ],
            },
          ],
          keyPoints: [
            "Au cours d'un changement d'état, la masse se conserve.",
            "Le volume varie : il augmente beaucoup lors de la vaporisation.",
            "L'eau est une exception : son volume augmente d'environ 9 % quand elle gèle.",
            "Les particules restent les mêmes et aussi nombreuses : seul leur arrangement change.",
            "Pour vérifier la conservation de la masse, on travaille en récipient fermé.",
          ],
          example: {
            statement: "On remplit entièrement une bouteille en plastique de 500 mL avec de l'eau et on la place au congélateur. Donnée : 1 L d'eau liquide a une masse de 1 kg et donne environ 1,09 L de glace. 1) Quelle est la masse de l'eau ? 2) Quelle est la masse de la glace obtenue ? 3) Quel est le volume de la glace ? Que va-t-il arriver à la bouteille ?",
            solution: [
              "1) 500 mL = 0,5 L ; 1 L d'eau a une masse de 1 kg, donc 0,5 L a une masse de 0,5 kg, soit 500 g.",
              "2) Au cours d'un changement d'état, la masse se conserve : la glace a une masse de 500 g.",
              "3) Volume de la glace : 0,5 × 1,09 = 0,545 L, soit 545 mL.",
              "La glace occupe 545 mL alors que la bouteille n'en contient que 500 : la bouteille va se déformer, et pourrait éclater si elle était en verre.",
              "Réponse : 500 g d'eau donnent 500 g de glace, mais la glace occupe environ 545 mL : son volume dépasse celui de la bouteille.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Un glaçon de 30 g est placé dans un sachet fermé et laissé fondre. 1) Quelle est la masse d'eau liquide obtenue ? Justifier. 2) Le volume de l'eau liquide est-il plus grand ou plus petit que celui du glaçon ?",
              hint: "Rappelez-vous ce qui se conserve lors d'un changement d'état, et le cas particulier de l'eau.",
              solution: [
                "1) La masse se conserve lors d'un changement d'état, et le sachet est fermé : on obtient 30 g d'eau liquide.",
                "2) L'eau est une exception : la glace occupe plus de place que l'eau liquide. Lors de la fusion, le volume diminue.",
                "Réponse : 30 g d'eau liquide, dont le volume est plus petit que celui du glaçon.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Tom pèse un bocal fermé contenant de la glace : 312,5 g. Une heure plus tard, toute la glace a fondu ; il pèse à nouveau le bocal fermé. 1) Quelle masse prévoyez-vous ? 2) Tom ouvre le bocal, verse l'eau dans une casserole posée sur une balance et la fait bouillir dix minutes : la masse affichée diminue. Sa sœur affirme que « l'ébullition détruit de la matière ». Que lui répondez-vous ?",
              hint: "Le bocal est-il fermé dans la première expérience ? La casserole est-elle fermée dans la seconde ?",
              solution: [
                "1) Le bocal est fermé et la masse se conserve lors d'un changement d'état : la balance indiquera encore 312,5 g.",
                "2) La casserole est ouverte : l'eau se vaporise et la vapeur d'eau s'échappe dans l'air de la pièce.",
                "La matière n'est pas détruite : elle a quitté la casserole sous forme de gaz invisible, et elle a toujours une masse.",
                "Réponse : 312,5 g ; la masse diminue dans la casserole parce que la vapeur s'en échappe, pas parce que la matière disparaît.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une bouteille en verre de 75 cL est remplie à ras bord d'eau, fermée, puis oubliée au congélateur. Données : 1 L d'eau liquide a une masse de 1 kg et donne environ 1,09 L de glace. 1) Convertir 75 cL en L et calculer la masse d'eau. 2) Calculer le volume de glace obtenu, en mL. 3) Expliquer pourquoi la bouteille risque d'éclater. 4) Expliquer, avec le modèle particulaire, pourquoi la masse de glace est égale à la masse d'eau.",
              hint: "1 L = 100 cL. Multipliez le volume d'eau en litres par 1,09 pour obtenir le volume de glace.",
              solution: [
                "1) 75 cL = 75 ÷ 100 = 0,75 L. Masse d'eau : 0,75 × 1 kg = 0,75 kg, soit 750 g.",
                "2) Volume de glace : 0,75 × 1,09 = 0,8175 L, soit 817,5 mL.",
                "3) La bouteille ne peut contenir que 750 mL. La glace, qui occupe 817,5 mL, pousse sur les parois et le bouchon : le verre, qui ne peut pas s'étirer, risque de se briser.",
                "4) Lors de la solidification, les particules d'eau ne changent pas et leur nombre reste le même ; seul leur arrangement change. La masse étant celle de toutes les particules, elle est conservée : 750 g de glace.",
                "Réponse : 750 g d'eau donnent 750 g de glace, qui occupent environ 817,5 mL, plus que les 750 mL de la bouteille.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Masse et volume lors des changements d'état.",
            statements: [
              { text: "Quand un glaçon fond, sa masse diminue.", true: false, why: "La masse se conserve : un glaçon de 30 g donne 30 g d'eau liquide." },
              { text: "Quand l'eau gèle, son volume augmente.", true: true, why: "L'eau est une exception : 1 L d'eau donne environ 1,09 L de glace." },
              { text: "Toutes les substances augmentent de volume en se solidifiant.", true: false, why: "C'est le contraire pour la plupart d'entre elles, comme la cire de bougie : l'eau est une exception." },
              { text: "Au cours d'un changement d'état, le nombre de particules ne change pas.", true: true, why: "Les particules restent les mêmes ; seuls leur arrangement et leur écartement changent." },
              { text: "La vapeur d'eau n'a pas de masse.", true: false, why: "La vapeur d'eau est de la matière : elle a une masse, même si elle est invisible." },
              { text: "Quand de l'eau bout dans une casserole ouverte, la masse d'eau dans la casserole diminue.", true: true, why: "La vapeur s'échappe de la casserole ; la masse totale, elle, est conservée." },
              { text: "1 g d'eau occupe un volume beaucoup plus grand à l'état de vapeur qu'à l'état liquide.", true: true, why: "Environ 1 mL à l'état liquide contre environ 1,7 L à l'état de vapeur à 100 °C." },
            ],
          },
          quiz: [
            {
              q: "Un glaçon de 50 g fond entièrement dans un récipient fermé. La masse d'eau liquide obtenue est :",
              options: ["inférieure à 50 g", "égale à 50 g", "supérieure à 50 g"],
              answer: 1,
              why: "La masse se conserve au cours d'un changement d'état.",
            },
            {
              q: "Qu'est-ce qui change lors d'un changement d'état ?",
              options: ["La masse", "Le nombre de particules", "La nature des particules", "Le volume"],
              answer: 3,
              why: "La masse, le nombre et la nature des particules restent les mêmes ; seul le volume change, car l'arrangement des particules change.",
            },
            {
              q: "Pourquoi une bouteille en verre pleine d'eau peut-elle éclater au congélateur ?",
              options: ["Le volume augmente en gelant", "La masse de l'eau augmente en gelant", "Le froid rend le verre plus fragile"],
              answer: 0,
              why: "L'eau occupe environ 9 % de volume en plus à l'état solide, alors que sa masse ne change pas.",
            },
            {
              q: "Pourquoi la masse se conserve-t-elle lors d'un changement d'état ?",
              options: ["Les particules deviennent plus grosses et plus lourdes", "Les particules se rapprochent toutes", "Le nombre de particules reste le même", "La température reste constante pendant le palier"],
              answer: 2,
              why: "Aucune particule n'apparaît ni ne disparaît : la masse totale des particules reste donc la même.",
            },
            {
              q: "De l'eau bout dans une casserole ouverte posée sur une balance : la masse affichée diminue. Pourquoi ?",
              options: ["De la matière a été détruite", "La vapeur s'est échappée", "L'eau devient plus légère sans rien perdre"],
              answer: 1,
              why: "La vapeur d'eau quitte la casserole : la matière n'a pas disparu, elle est partie dans l'air.",
            },
          ],
          trap: "Penser que, puisque le volume change lors d'un changement d'état, la masse change aussi : le volume varie, mais la masse se conserve toujours.",
          method: "Face à un changement d'état, faites deux colonnes : « ce qui se conserve » (masse, nombre et nature des particules) et « ce qui change » (état, arrangement des particules, volume). Puis vérifiez que l'expérience se fait en récipient fermé avant de conclure.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'masse-volumique',
          title: 'Comparer des matériaux : la masse volumique',
          minutes: 35,
          objectives: [
            "Définir la masse volumique d'une substance et utiliser la relation m = ρ × V.",
            "Déterminer expérimentalement la masse volumique d'un liquide ou d'un solide.",
            "Exploiter des mesures de masse volumique pour identifier une substance.",
            "Prévoir si un objet flotte ou coule dans un liquide en comparant des masses volumiques.",
          ],
          course: [
            {
              heading: "Même volume, masses différentes",
              paragraphs: [
                "Prenez trois cubes de même taille, de 1 cm³ chacun : l'un en bois, l'autre en aluminium, le dernier en fer. Ils occupent la même place, mais n'ont pas la même masse : le cube d'aluminium a une masse d'environ 2,7 g, le cube de fer d'environ 7,9 g. De même, 1 cm³ d'eau a une masse de 1 g, alors que 1 cm³ d'huile n'a qu'une masse de 0,92 g environ.",
                "Pour comparer les substances entre elles, on calcule la masse de matière contenue dans une unité de volume : c'est la masse volumique. On la note ρ (la lettre grecque « rhô »). Elle ne dépend pas de la taille de l'objet : un petit clou et une grosse poutre en fer ont la même masse volumique.",
              ],
              box: { label: "Définition", text: "La masse volumique ρ d'une substance est le quotient de la masse m d'un échantillon par son volume V : ρ = m ÷ V. Elle est caractéristique de la substance." },
            },
            {
              heading: "La formule et les unités",
              paragraphs: [
                "La relation ρ = m ÷ V peut s'écrire de deux autres façons, utiles pour les calculs : m = ρ × V (pour calculer une masse) et V = m ÷ ρ (pour calculer un volume).",
                "L'unité de la masse volumique dépend des unités choisies pour la masse et le volume : si m est en g et V en cm³, ρ est en g/cm³ ; si m est en g et V en mL, ρ est en g/mL ; on utilise aussi g/L, kg/L et kg/m³. Pour l'eau : ρ = 1 g/cm³ = 1 g/mL = 1 kg/L = 1 000 g/L = 1 000 kg/m³.",
                "Exemple : 200 mL d'huile ont une masse de 184 g. ρ = 184 ÷ 200 = 0,92 g/mL. Inversement, 2 L d'huile ont une masse m = 0,92 kg/L × 2 L = 1,84 kg.",
              ],
              box: { label: "Formule", text: "ρ = m ÷ V ; m = ρ × V ; V = m ÷ ρ. Pour l'eau : ρ = 1 g/cm³ = 1 kg/L = 1 000 kg/m³." },
            },
            {
              heading: "Identifier une substance",
              paragraphs: [
                "Pour déterminer la masse volumique d'une substance, on mesure la masse d'un échantillon avec une balance et son volume avec une éprouvette graduée (directement pour un liquide, par déplacement d'eau pour un solide), puis on calcule ρ = m ÷ V.",
                "On compare ensuite le résultat à un tableau de valeurs, en g/cm³ : éthanol 0,79 ; huile 0,92 ; glace 0,92 ; eau 1,0 ; aluminium 2,7 ; fer 7,9 ; cuivre 8,9 ; plomb 11,3 ; or 19,3. Pour l'air, à 20 °C : 1,2 g/L, soit 0,0012 g/cm³. Si la valeur trouvée correspond à celle du tableau, on peut identifier la substance.",
              ],
            },
            {
              heading: "Flotter ou couler",
              paragraphs: [
                "Un objet plein, fait d'une seule substance, flotte sur un liquide si sa masse volumique est plus petite que celle du liquide ; il coule si elle est plus grande. Ainsi, la glace (0,92 g/cm³) flotte sur l'eau (1,0 g/cm³), alors qu'un clou en fer (7,9 g/cm³) coule.",
                "Deux liquides non miscibles se superposent : le plus dense (celui qui a la plus grande masse volumique) se place en dessous. L'huile (0,92 g/cm³) flotte donc sur l'eau. Un objet creux, comme un bateau en acier, peut flotter car il contient beaucoup d'air : c'est alors la masse volumique moyenne de l'objet qui compte.",
              ],
              box: { label: "Règle", text: "Un objet plein flotte sur un liquide si sa masse volumique est inférieure à celle du liquide, et coule si elle est supérieure." },
            },
          ],
          keyPoints: [
            "Masse volumique : ρ = m ÷ V, donc m = ρ × V et V = m ÷ ρ.",
            "Unités courantes : g/cm³, g/mL, g/L, kg/L, kg/m³.",
            "Eau : ρ = 1 g/cm³ = 1 kg/L = 1 000 kg/m³ ; air à 20 °C : 1,2 g/L.",
            "La masse volumique est caractéristique d'une substance : elle permet de l'identifier.",
            "Un objet plein flotte si sa masse volumique est inférieure à celle du liquide.",
          ],
          example: {
            statement: "Un cube de métal de 2 cm d'arête a une masse de 21,6 g. Calculer sa masse volumique et identifier le métal à l'aide du tableau : aluminium 2,7 g/cm³ ; fer 7,9 g/cm³ ; cuivre 8,9 g/cm³. Ce cube flotte-t-il sur l'eau ?",
            solution: [
              "Volume du cube : V = 2 × 2 × 2 = 8 cm³.",
              "Masse volumique : ρ = m ÷ V = 21,6 ÷ 8 = 2,7 g/cm³.",
              "Cette valeur correspond à celle de l'aluminium.",
              "2,7 g/cm³ est plus grand que la masse volumique de l'eau (1,0 g/cm³) : le cube coule.",
              "Réponse : ρ = 2,7 g/cm³, le cube est en aluminium et il coule dans l'eau.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On verse 50 mL d'un liquide incolore dans un bécher posé sur une balance tarée : la balance affiche 39,5 g. Calculer la masse volumique du liquide en g/mL et l'identifier : eau 1,0 g/mL ; éthanol 0,79 g/mL ; huile 0,92 g/mL.",
              hint: "Appliquez ρ = m ÷ V avec m en g et V en mL.",
              solution: [
                "ρ = m ÷ V = 39,5 ÷ 50 = 0,79 g/mL.",
                "Cette valeur correspond à celle de l'éthanol.",
                "Réponse : ρ = 0,79 g/mL ; le liquide est de l'éthanol.",
              ],
            },
            {
              level: 2,
              statement: "Pour identifier le métal d'une petite pièce, Inès mesure sa masse : 35,6 g. Elle verse de l'eau dans une éprouvette graduée : 20,0 mL. Elle y plonge la pièce, qui est entièrement immergée : 24,0 mL. Tableau : aluminium 2,7 g/cm³ ; fer 7,9 g/cm³ ; cuivre 8,9 g/cm³ ; plomb 11,3 g/cm³. 1) Calculer le volume de la pièce en cm³. 2) Calculer sa masse volumique. 3) Identifier le métal. 4) Quelle serait la masse d'un objet de 10 cm³ fait du même métal ?",
              hint: "Le volume s'obtient par déplacement d'eau (V₂ - V₁), puis 1 mL = 1 cm³. Pour la dernière question, utilisez m = ρ × V.",
              solution: [
                "1) V = 24,0 - 20,0 = 4,0 mL = 4,0 cm³.",
                "2) ρ = m ÷ V = 35,6 ÷ 4,0 = 8,9 g/cm³.",
                "3) Cette valeur correspond à celle du cuivre.",
                "4) m = ρ × V = 8,9 × 10 = 89 g.",
                "Réponse : la pièce a un volume de 4,0 cm³ et une masse volumique de 8,9 g/cm³ : elle est en cuivre ; 10 cm³ de cuivre ont une masse de 89 g.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Une salle de classe mesure 8 m de long, 7 m de large et 3 m de haut. La masse volumique de l'air y est de 1,2 kg/m³. Calculer le volume de la salle, puis la masse de l'air qu'elle contient. 2) Une bouteille contient 1,5 L d'huile de masse volumique 0,92 kg/L. Calculer la masse de l'huile. 3) Un cube de bois plein de 5 cm d'arête a une masse de 75 g. Calculer sa masse volumique, puis dire s'il flotte sur l'eau (1,0 g/cm³) et sur l'huile (0,92 g/cm³).",
              hint: "Choisissez des unités cohérentes : m³ avec kg/m³, L avec kg/L, cm³ avec g/cm³. Utilisez m = ρ × V puis ρ = m ÷ V.",
              solution: [
                "1) V = 8 × 7 × 3 = 168 m³. m = ρ × V = 1,2 × 168 = 201,6 kg.",
                "2) m = ρ × V = 0,92 × 1,5 = 1,38 kg.",
                "3) V = 5 × 5 × 5 = 125 cm³. ρ = m ÷ V = 75 ÷ 125 = 0,6 g/cm³.",
                "0,6 g/cm³ est inférieur à 1,0 g/cm³ et à 0,92 g/cm³ : le cube flotte sur l'eau et sur l'huile.",
                "Réponse : la salle contient environ 201,6 kg d'air ; la bouteille contient 1,38 kg d'huile ; le cube de bois (0,6 g/cm³) flotte sur les deux liquides.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque substance à sa masse volumique.",
            pairs: [
              { left: "Eau", right: "1,0 g/cm³" },
              { left: "Huile", right: "0,92 g/cm³" },
              { left: "Aluminium", right: "2,7 g/cm³" },
              { left: "Fer", right: "7,9 g/cm³" },
              { left: "Or", right: "19,3 g/cm³" },
              { left: "Air à 20 °C", right: "1,2 g/L" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la relation qui définit la masse volumique ?",
              options: ["ρ = m × V", "ρ = V ÷ m", "ρ = m ÷ V", "ρ = m + V"],
              answer: 2,
              why: "La masse volumique est la masse divisée par le volume : ρ = m ÷ V.",
            },
            {
              q: "Quelle est la masse volumique de l'eau ?",
              options: ["1 g/cm³", "1 kg/cm³", "10 g/L", "1 g/m³"],
              answer: 0,
              why: "ρ(eau) = 1 g/cm³, ce qui équivaut à 1 kg/L ou 1 000 kg/m³.",
            },
            {
              q: "Un objet plein de masse volumique 0,6 g/cm³ est posé sur l'eau. Que se passe-t-il ?",
              options: ["Il coule", "Il flotte", "Il se dissout", "Il reste entre deux eaux"],
              answer: 1,
              why: "Sa masse volumique est inférieure à celle de l'eau (1,0 g/cm³) : il flotte.",
            },
            {
              q: "Quelle est la masse de 10 cm³ de fer (ρ = 7,9 g/cm³) ?",
              options: ["7,9 g", "0,79 g", "79 g", "790 g"],
              answer: 2,
              why: "m = ρ × V = 7,9 × 10 = 79 g.",
            },
            {
              q: "Un liquide de masse 46 g occupe un volume de 50 mL. Sa masse volumique vaut :",
              options: ["1,09 g/mL", "2,3 g/mL", "96 g/mL", "0,92 g/mL"],
              answer: 3,
              why: "ρ = m ÷ V = 46 ÷ 50 = 0,92 g/mL (c'est la masse volumique de l'huile).",
            },
          ],
          trap: "Inverser la formule en calculant V ÷ m au lieu de m ÷ V, ou mélanger les unités (des kg avec des cm³) : écrivez toujours la formule et les unités avant de calculer.",
          method: "Vérifiez la vraisemblance du résultat : un liquide courant a une masse volumique proche de 1 g/cm³, un métal de plusieurs g/cm³, un gaz de l'ordre de 1 g/L. Un résultat très éloigné signale une erreur d'unité ou une formule inversée.",
        },
      ],
    },
    /* ==================================================================== */
    /* MÉLANGES ET CORPS PURS                                                 */
    /* ==================================================================== */
    {
      id: 'melanges',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'melanges-homogenes',
          title: 'Mélanges homogènes et hétérogènes, corps purs',
          minutes: 30,
          objectives: [
            "Distinguer un corps pur d'un mélange à l'aide de la notion d'espèce chimique.",
            "Distinguer un mélange homogène d'un mélange hétérogène par l'observation.",
            "Citer la composition de l'air, mélange homogène de gaz.",
            "Utiliser un test (résidu d'évaporation, palier de température) pour savoir si un liquide est un corps pur.",
          ],
          course: [
            {
              heading: "Espèce chimique, corps pur et mélange",
              paragraphs: [
                "Une espèce chimique est une substance dont toutes les particules sont identiques : l'eau, le sucre (le saccharose), le sel de table (le chlorure de sodium), le dioxygène sont des espèces chimiques.",
                "Un corps pur est constitué d'une seule espèce chimique : l'eau distillée, le dioxygène d'une bouteille d'oxygène médical, le cuivre d'un fil électrique sont des corps purs. Un mélange est constitué de plusieurs espèces chimiques : l'eau sucrée contient de l'eau et du sucre, l'eau de mer de l'eau et différents sels.",
                "Attention au sens courant du mot « pur ». Une eau de source vendue comme « pure » est saine et propre, mais ce n'est pas un corps pur au sens du chimiste : elle contient des sels minéraux dissous (calcium, magnésium...), indiqués sur l'étiquette en milligrammes par litre (mg/L). C'est un mélange.",
              ],
              box: { label: "Définition", text: "Un corps pur est constitué d'une seule espèce chimique. Un mélange est constitué de plusieurs espèces chimiques, appelées les constituants du mélange." },
            },
            {
              heading: "Homogène ou hétérogène ?",
              paragraphs: [
                "Un mélange est hétérogène quand on peut distinguer, à l'œil nu, au moins deux de ses constituants : l'eau boueuse (on voit les particules de terre), la vinaigrette (on voit des gouttes d'huile), le jus d'orange avec pulpe, l'eau gazeuse avec ses bulles. Chaque partie visible s'appelle une phase.",
                "Un mélange est homogène quand on ne peut pas distinguer ses constituants à l'œil nu : il ne présente qu'une seule phase. L'eau sucrée, l'eau minérale, le vinaigre, le sirop de menthe dilué dans l'eau sont des mélanges homogènes.",
                "Un liquide transparent est dit limpide ; il peut être incolore (eau sucrée) ou coloré (sirop de menthe dilué). Un liquide qui n'est pas transparent est dit trouble. Un liquide limpide n'est pas forcément un corps pur : l'eau salée est limpide, et pourtant c'est un mélange.",
              ],
              box: { label: "Définition", text: "Mélange hétérogène : on distingue à l'œil nu au moins deux constituants (plusieurs phases). Mélange homogène : on ne distingue pas ses constituants à l'œil nu (une seule phase)." },
            },
            {
              heading: "L'air, un mélange de gaz",
              paragraphs: [
                "L'air que nous respirons n'est pas un corps pur : c'est un mélange homogène de plusieurs gaz. En volume, l'air sec contient environ 78 % de diazote, environ 21 % de dioxygène et environ 1 % d'autres gaz, surtout de l'argon, avec un peu de dioxyde de carbone. L'air contient aussi de la vapeur d'eau, en quantité variable selon le temps qu'il fait.",
                "Ainsi, dans 100 L d'air sec, il y a environ 78 L de diazote et 21 L de dioxygène. C'est le dioxygène qui nous permet de respirer et qui permet aux combustions d'avoir lieu.",
              ],
              box: { label: "Repère", text: "Composition de l'air sec, en volume : environ 78 % de diazote, 21 % de dioxygène et 1 % d'autres gaz (argon, dioxyde de carbone...)." },
            },
            {
              heading: "Comment savoir si un liquide est un corps pur ?",
              paragraphs: [
                "L'observation ne suffit pas, car un mélange homogène ressemble à un corps pur. On utilise des tests. Premier test : on fait évaporer quelques gouttes du liquide sur une plaque. L'eau distillée ne laisse aucune trace ; l'eau minérale ou l'eau du robinet laisse un dépôt blanc (les sels minéraux qui étaient dissous) : ce sont des mélanges.",
                "Second test : on étudie un changement d'état. Un corps pur présente un palier de température, à une valeur précise (0 °C pour la solidification de l'eau pure) ; un mélange, comme l'eau salée, n'en présente pas. On peut aussi comparer la masse volumique mesurée à celle des tables.",
              ],
              box: { label: "À retenir", text: "Un corps pur ne laisse aucun résidu quand on le fait évaporer et présente un palier de température lors d'un changement d'état. Un mélange homogène peut ressembler à un corps pur : il faut un test pour les distinguer." },
            },
          ],
          keyPoints: [
            "Corps pur : une seule espèce chimique. Mélange : plusieurs espèces chimiques.",
            "Mélange hétérogène : constituants visibles à l'œil nu. Mélange homogène : constituants invisibles, une seule phase.",
            "Limpide ne veut pas dire pur : l'eau salée est limpide, c'est un mélange.",
            "L'air est un mélange homogène : environ 78 % de diazote, 21 % de dioxygène, 1 % d'autres gaz.",
            "Tests du corps pur : pas de résidu à l'évaporation, palier de température lors d'un changement d'état.",
          ],
          example: {
            statement: "Classer chaque substance en corps pur, mélange homogène ou mélange hétérogène : eau boueuse, eau distillée, vinaigrette, eau sucrée, air filtré, dioxygène.",
            solution: [
              "Eau boueuse : on voit des particules de terre dans l'eau : mélange hétérogène.",
              "Eau distillée : une seule espèce chimique, l'eau : corps pur.",
              "Vinaigrette : on voit des gouttes d'huile séparées du vinaigre : mélange hétérogène.",
              "Eau sucrée : eau et sucre, mais on ne distingue pas le sucre : mélange homogène.",
              "Air filtré : plusieurs gaz (diazote, dioxygène...) que l'on ne distingue pas : mélange homogène.",
              "Réponse : corps purs : eau distillée, dioxygène ; mélanges homogènes : eau sucrée, air filtré ; mélanges hétérogènes : eau boueuse, vinaigrette.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dire si chaque mélange est homogène ou hétérogène, en justifiant : a) un jus d'orange avec pulpe ; b) de l'eau salée ; c) du sirop de grenadine dilué dans l'eau ; d) de l'eau gazeuse dans laquelle montent des bulles ; e) un morceau de granite, roche où l'on voit des grains de couleurs différentes.",
              hint: "Demandez-vous si l'on voit, à l'œil nu, au moins deux constituants différents.",
              solution: [
                "a) On voit la pulpe dans le jus : mélange hétérogène.",
                "b) On ne voit pas le sel dissous : mélange homogène.",
                "c) Le liquide est coloré mais uniforme, une seule phase : mélange homogène.",
                "d) On voit des bulles de gaz dans le liquide : mélange hétérogène.",
                "e) On distingue des grains de couleurs différentes : mélange hétérogène (un mélange peut aussi être solide).",
              ],
            },
            {
              level: 2,
              statement: "Trois flacons contiennent chacun un liquide limpide et incolore : A, de l'eau distillée ; B, de l'eau minérale ; C, de l'eau salée, mais les étiquettes sont tombées. On dépose quelques gouttes de chaque liquide sur trois plaques que l'on chauffe doucement. Plaque 1 : aucune trace. Plaque 2 : un léger dépôt blanc. Plaque 3 : un dépôt blanc abondant de petits cristaux. 1) Pourquoi ne peut-on pas identifier les liquides à l'œil nu ? 2) Quel liquide a été déposé sur la plaque 1 ? Justifier. 3) Les liquides des plaques 2 et 3 sont-ils des corps purs ?",
              hint: "Un corps pur ne laisse aucun résidu quand on le fait évaporer. L'eau salée contient beaucoup plus de matière dissoute que l'eau minérale.",
              solution: [
                "1) Les trois liquides sont limpides et incolores : un mélange homogène ressemble à un corps pur, l'observation ne suffit pas.",
                "2) Aucune trace : il n'y avait rien de dissous. C'est l'eau distillée (A), un corps pur.",
                "3) Les plaques 2 et 3 montrent un résidu : de la matière était dissoute dans l'eau. Ce sont des mélanges homogènes, pas des corps purs.",
                "Le dépôt abondant de cristaux (plaque 3) correspond à l'eau salée (C) ; le léger dépôt (plaque 2) à l'eau minérale (B).",
                "Réponse : plaque 1 : eau distillée (corps pur) ; plaque 2 : eau minérale ; plaque 3 : eau salée (deux mélanges homogènes).",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Une salle de classe contient 168 m³ d'air sec. En utilisant la composition de l'air (78 % de diazote, 21 % de dioxygène, 1 % d'autres gaz), calculer le volume de chacun de ces gaz dans la salle. 2) Justifier que l'air est un mélange homogène. 3) Un camarade affirme : « L'eau du robinet est pure, puisqu'elle est limpide ». Expliquer pourquoi son raisonnement est faux, puis proposer une expérience pour le lui montrer.",
              hint: "Pour appliquer un pourcentage, multipliez : 78 % de 168, c'est 168 × 78 ÷ 100.",
              solution: [
                "1) Diazote : 168 × 78 ÷ 100 = 131,04 m³. Dioxygène : 168 × 21 ÷ 100 = 35,28 m³. Autres gaz : 168 × 1 ÷ 100 = 1,68 m³.",
                "Vérification : 131,04 + 35,28 + 1,68 = 168 m³.",
                "2) L'air contient plusieurs espèces chimiques (diazote, dioxygène, argon...) : c'est un mélange. On ne peut pas distinguer ces gaz à l'œil nu : le mélange est homogène.",
                "3) « Limpide » signifie seulement transparent : un mélange homogène, comme l'eau salée, peut être limpide. L'eau du robinet contient des sels minéraux dissous.",
                "Expérience : faire évaporer quelques gouttes d'eau du robinet sur une plaque propre ; un dépôt blanc apparaît, alors que l'eau distillée n'en laisse aucun.",
                "Réponse : environ 131,04 m³ de diazote, 35,28 m³ de dioxygène et 1,68 m³ d'autres gaz ; l'air est un mélange homogène ; l'eau du robinet limpide est un mélange, ce que montre son résidu d'évaporation.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Corps purs et mélanges.",
            statements: [
              { text: "Une eau limpide est forcément un corps pur.", true: false, why: "L'eau salée ou l'eau minérale sont limpides, et ce sont des mélanges." },
              { text: "Une eau de source vendue comme « pure » est, pour le chimiste, un mélange.", true: true, why: "Elle contient des sels minéraux dissous, indiqués sur l'étiquette." },
              { text: "Le gaz le plus abondant dans l'air est le dioxygène.", true: false, why: "C'est le diazote, environ 78 % du volume ; le dioxygène n'en représente qu'environ 21 %." },
              { text: "La vinaigrette est un mélange hétérogène.", true: true, why: "On y distingue à l'œil nu des gouttes d'huile et le vinaigre." },
              { text: "Un mélange homogène peut être coloré.", true: true, why: "Le sirop de menthe dilué dans l'eau est coloré et ne présente qu'une seule phase." },
              { text: "L'eau distillée laisse un dépôt blanc quand on la fait évaporer.", true: false, why: "L'eau distillée est un corps pur : elle ne laisse aucun résidu." },
              { text: "Un mélange peut être solide.", true: true, why: "Le granite, par exemple, est un mélange de grains de différents minéraux." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces mélanges est hétérogène ?",
              options: ["L'eau boueuse", "L'eau sucrée", "L'air filtré", "Le sirop dilué dans l'eau"],
              answer: 0,
              why: "Dans l'eau boueuse, on voit à l'œil nu des particules de terre : il y a plusieurs phases.",
            },
            {
              q: "Un corps pur est constitué :",
              options: ["de plusieurs espèces chimiques", "d'une seule espèce chimique", "uniquement d'eau", "de gaz mélangés"],
              answer: 1,
              why: "Un corps pur contient une seule espèce chimique, qui n'est pas forcément l'eau (le cuivre, le dioxygène...).",
            },
            {
              q: "Quelle part du volume de l'air le dioxygène représente-t-il ?",
              options: ["Environ 78 %", "Environ 1 %", "Environ 21 %", "Environ 50 %"],
              answer: 2,
              why: "L'air contient environ 21 % de dioxygène et environ 78 % de diazote.",
            },
            {
              q: "Un liquide limpide laisse un dépôt blanc quand on le fait évaporer. C'est :",
              options: ["un mélange", "un corps pur", "de l'eau distillée"],
              answer: 0,
              why: "Le dépôt est fait de substances qui étaient dissoutes dans le liquide : il contenait plusieurs espèces chimiques.",
            },
            {
              q: "Le sirop de menthe dilué dans l'eau est :",
              options: ["un corps pur", "un mélange hétérogène", "un mélange homogène"],
              answer: 2,
              why: "Il contient plusieurs espèces chimiques (c'est un mélange) mais une seule phase visible (il est homogène).",
            },
          ],
          trap: "Confondre « homogène » et « pur » : un mélange homogène, comme l'eau salée ou l'eau minérale, a l'air d'un corps pur, mais il contient plusieurs espèces chimiques.",
          method: "Pour classer une substance, posez deux questions dans l'ordre : « Contient-elle une seule espèce chimique ? » (oui : corps pur). Sinon : « Voit-on plusieurs constituants à l'œil nu ? » (oui : mélange hétérogène ; non : mélange homogène).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'solubilite-miscibilite',
          title: 'Dissoudre et mélanger : solubilité et miscibilité',
          minutes: 35,
          objectives: [
            "Utiliser le vocabulaire de la dissolution : soluté, solvant, solution, solution saturée.",
            "Montrer que la masse se conserve lors d'une dissolution.",
            "Définir la solubilité et l'estimer expérimentalement dans l'eau.",
            "Distinguer deux liquides miscibles de deux liquides non miscibles.",
          ],
          course: [
            {
              heading: "La dissolution",
              paragraphs: [
                "Versez une cuillère de sucre dans un verre d'eau et remuez : le sucre semble disparaître. Pourtant, il est toujours là, puisque l'eau a un goût sucré. Le sucre s'est dissous : on a réalisé une dissolution.",
                "La substance que l'on dissout s'appelle le soluté (ici le sucre). Le liquide dans lequel on la dissout s'appelle le solvant (ici l'eau). Le mélange homogène obtenu s'appelle une solution. Quand le solvant est l'eau, on parle de solution aqueuse.",
                "Un soluté qui se dissout dans un solvant est dit soluble dans ce solvant ; sinon, il est insoluble. Le sel et le sucre sont solubles dans l'eau ; le sable y est insoluble. Avec le modèle particulaire, on explique la dissolution ainsi : les particules du soluté se séparent les unes des autres et se dispersent entre les particules d'eau.",
              ],
              box: { label: "Définition", text: "Soluté : substance que l'on dissout. Solvant : liquide qui dissout. Solution : mélange homogène obtenu. Solution aqueuse : solution dont le solvant est l'eau." },
            },
            {
              heading: "La masse se conserve lors d'une dissolution",
              paragraphs: [
                "Expérience : on pèse 200 g d'eau dans un bécher et 10 g de sucre dans une coupelle. On verse le sucre dans l'eau et on remue jusqu'à dissolution complète. La balance indique alors 210 g pour la solution : la masse de la solution est égale à la somme des masses du solvant et du soluté.",
                "Aucune particule de sucre n'a disparu : elles se sont seulement dispersées dans l'eau. En revanche, le volume de la solution n'est pas toujours égal à la somme des volumes de départ.",
              ],
              box: { label: "Propriété", text: "Lors d'une dissolution, la masse se conserve : masse de la solution = masse du solvant + masse du soluté dissous." },
            },
            {
              heading: "La solubilité : une limite",
              paragraphs: [
                "On ne peut pas dissoudre une quantité illimitée de soluté. Si l'on ajoute du sel petit à petit dans un verre d'eau en remuant, il arrive un moment où le sel ne se dissout plus : il reste au fond du verre. La solution est alors saturée : elle ne peut plus dissoudre davantage de ce soluté.",
                "La solubilité d'un soluté dans un solvant est la masse maximale de ce soluté que l'on peut dissoudre dans 1 L de solvant, à une température donnée. Elle s'exprime en g/L. À 20 °C, on peut dissoudre environ 360 g de sel dans 1 L d'eau, et environ 2 000 g, soit 2 kg, de sucre.",
                "La solubilité dépend de la température. Pour la plupart des solides, elle augmente quand la température augmente : le sucre se dissout mieux dans un thé chaud que dans un thé glacé. Les gaz aussi peuvent se dissoudre dans l'eau : le dioxyde de carbone dans l'eau gazeuse, le dioxygène dans l'eau des rivières (les poissons le respirent). Mais la solubilité des gaz diminue quand la température augmente : un soda tiède perd plus vite ses bulles.",
              ],
              box: { label: "Définition", text: "La solubilité est la masse maximale de soluté que l'on peut dissoudre dans 1 L de solvant, à une température donnée (en g/L). Au-delà, la solution est saturée et le soluté en excès reste non dissous." },
            },
            {
              heading: "Estimer une solubilité au laboratoire",
              paragraphs: [
                "Pour estimer la solubilité du sel dans l'eau, on verse 20 mL d'eau dans un tube ou un petit bécher. On ajoute 1 g de sel, on agite jusqu'à dissolution, puis on recommence, gramme par gramme, en notant la masse totale ajoutée. On s'arrête quand du sel reste au fond malgré l'agitation.",
                "Si 7 g se dissolvent mais pas le 8e gramme, la solubilité est comprise entre 7 g et 8 g pour 20 mL d'eau. Comme 1 L = 1 000 mL = 50 × 20 mL, la solubilité est comprise entre 7 × 50 = 350 g/L et 8 × 50 = 400 g/L. C'est une estimation, cohérente avec la valeur des tables (environ 360 g/L).",
              ],
            },
            {
              heading: "Miscibles ou non miscibles",
              paragraphs: [
                "Deux liquides sont miscibles s'ils forment un mélange homogène quand on les mélange : l'eau et l'alcool, l'eau et le sirop, l'eau et le vinaigre sont miscibles. Deux liquides sont non miscibles s'ils forment un mélange hétérogène, avec deux phases bien séparées : c'est le cas de l'eau et de l'huile.",
                "Même si on agite fortement de l'eau et de l'huile, les gouttes d'huile finissent par remonter : au repos, l'huile forme une couche au-dessus de l'eau, car sa masse volumique (0,92 g/cm³) est plus petite que celle de l'eau (1,0 g/cm³).",
              ],
              box: { label: "Définition", text: "Deux liquides miscibles forment un mélange homogène (eau et alcool). Deux liquides non miscibles forment un mélange hétérogène à deux phases ; le liquide le moins dense est au-dessus (l'huile sur l'eau)." },
            },
          ],
          keyPoints: [
            "Le soluté se dissout dans le solvant ; on obtient une solution, mélange homogène.",
            "Lors d'une dissolution, la masse se conserve : m(solution) = m(solvant) + m(soluté).",
            "Solubilité : masse maximale de soluté dissoute dans 1 L de solvant, à une température donnée (g/L).",
            "Solution saturée : le soluté en excès reste au fond. Sel dans l'eau à 20 °C : environ 360 g/L.",
            "Liquides miscibles : un mélange homogène (eau et alcool). Non miscibles : deux phases (eau et huile).",
          ],
          example: {
            statement: "Pour estimer la solubilité du sel, Hugo verse 20 mL d'eau dans un tube à essais et y ajoute le sel gramme par gramme en agitant. Les 7 premiers grammes se dissolvent entièrement ; le 8e gramme ne se dissout pas en totalité. Encadrer la solubilité du sel dans l'eau, en g/L.",
            solution: [
              "7 g se dissolvent entièrement dans 20 mL : la solubilité est d'au moins 7 g pour 20 mL.",
              "Le 8e gramme ne se dissout pas en entier : la solubilité est inférieure à 8 g pour 20 mL.",
              "1 L = 1 000 mL, et 1 000 ÷ 20 = 50 : il faut multiplier par 50 pour passer de 20 mL à 1 L.",
              "7 × 50 = 350 g et 8 × 50 = 400 g.",
              "Réponse : la solubilité du sel dans l'eau est comprise entre 350 g/L et 400 g/L.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Clara dissout un sachet de 5 g de sucre dans 250 g de thé (que l'on considère comme de l'eau). 1) Nommer le soluté, le solvant et la solution. 2) Calculer la masse de la solution obtenue.",
              hint: "Le soluté est ce que l'on dissout ; la masse se conserve lors d'une dissolution.",
              solution: [
                "1) Le soluté est le sucre, le solvant est le thé (l'eau), la solution est le thé sucré.",
                "2) La masse se conserve : m(solution) = m(solvant) + m(soluté) = 250 + 5 = 255 g.",
                "Réponse : soluté : sucre ; solvant : thé ; solution : thé sucré, de masse 255 g.",
              ],
            },
            {
              level: 2,
              statement: "La solubilité du sel dans l'eau à 20 °C est d'environ 360 g/L. Léo verse 50 g de sel dans 100 mL d'eau à 20 °C et remue longtemps. 1) Quelle masse maximale de sel peut-il dissoudre dans 100 mL d'eau ? 2) La solution obtenue est-elle saturée ? Quelle masse de sel reste au fond ? 3) Quel volume d'eau minimal lui faudrait-il pour dissoudre les 50 g de sel ? Arrondir au mL.",
              hint: "100 mL, c'est 10 fois moins que 1 L. Pour la dernière question, utilisez la proportionnalité : 360 g pour 1 000 mL.",
              solution: [
                "1) 100 mL = 1 000 mL ÷ 10 : on peut dissoudre au maximum 360 ÷ 10 = 36 g de sel.",
                "2) Léo a versé 50 g, plus que 36 g : la solution est saturée. Il reste 50 - 36 = 14 g de sel non dissous au fond.",
                "3) 360 g de sel se dissolvent dans 1 000 mL ; 50 g se dissolvent dans 1 000 × 50 ÷ 360 ≈ 138,9 mL.",
                "Réponse : 36 g au maximum ; la solution est saturée et 14 g restent au fond ; il faudrait au moins 139 mL d'eau.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives : la solubilité d'un solide X dans l'eau vaut 30 g/L à 20 °C et 80 g/L à 60 °C. 1) On met 60 g de X dans 1 L d'eau chauffée à 60 °C. Tout le solide se dissout-il ? La solution est-elle saturée ? 2) On laisse refroidir cette solution jusqu'à 20 °C. Prévoir ce que l'on observe et calculer la masse de solide qui réapparaît. 3) La masse totale (eau + X) a-t-elle changé au cours du refroidissement ? 4) On verse un liquide Y (données fictives) dans de l'eau : après agitation et repos, on observe deux couches, Y au-dessus. Que peut-on dire de Y ?",
              hint: "Comparez la masse de X à la solubilité à chaque température. Pour Y, pensez à la miscibilité et à la masse volumique.",
              solution: [
                "1) À 60 °C, on peut dissoudre jusqu'à 80 g de X dans 1 L d'eau. Or 60 g est inférieur à 80 g : tout se dissout, et la solution n'est pas saturée.",
                "2) À 20 °C, on ne peut garder dissous que 30 g de X dans 1 L d'eau. Il y a 60 g de X : 60 - 30 = 30 g ne peuvent plus rester dissous. Des cristaux de X réapparaissent au fond.",
                "3) Non : rien n'est entré ni sorti ; une partie de X est simplement redevenue solide. La masse totale se conserve.",
                "4) On observe deux phases : Y et l'eau sont non miscibles. Y est au-dessus : sa masse volumique est plus petite que celle de l'eau.",
                "Réponse : à 60 °C tout se dissout ; en refroidissant à 20 °C, 30 g de X réapparaissent sous forme solide, sans changement de masse totale ; Y est non miscible avec l'eau et moins dense qu'elle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Soluté", right: "Substance que l'on dissout" },
              { left: "Solvant", right: "Liquide dans lequel on dissout" },
              { left: "Solution", right: "Mélange homogène obtenu après dissolution" },
              { left: "Solution saturée", right: "Solution qui ne peut plus dissoudre de soluté" },
              { left: "Solubilité", right: "Masse maximale de soluté dissoute dans 1 L de solvant" },
              { left: "Liquides non miscibles", right: "Liquides qui forment deux phases séparées" },
            ],
          },
          quiz: [
            {
              q: "Dans de l'eau sucrée, quel est le solvant ?",
              options: ["L'eau", "Le sucre", "L'eau sucrée"],
              answer: 0,
              why: "Le solvant est le liquide qui dissout : l'eau. Le sucre est le soluté et l'eau sucrée la solution.",
            },
            {
              q: "On dissout entièrement 15 g de sel dans 200 g d'eau. Quelle est la masse de la solution ?",
              options: ["200 g", "185 g", "215 g", "15 g"],
              answer: 2,
              why: "La masse se conserve lors d'une dissolution : 200 + 15 = 215 g.",
            },
            {
              q: "Comment reconnaît-on une solution saturée ?",
              options: ["Elle est toujours colorée et trouble", "Elle bout plus facilement que l'eau", "Elle ne contient plus d'eau", "Du soluté reste non dissous"],
              answer: 3,
              why: "Dans une solution saturée, le solvant ne peut plus dissoudre de soluté : l'excès reste au fond malgré l'agitation.",
            },
            {
              q: "L'eau et l'huile :",
              options: ["sont miscibles", "forment une solution homogène", "ne sont pas miscibles"],
              answer: 2,
              why: "Elles forment deux phases séparées : elles ne sont pas miscibles. L'huile, moins dense, reste au-dessus.",
            },
            {
              q: "À 20 °C, la solubilité du sel dans l'eau vaut :",
              options: ["environ 360 g par litre", "environ 3,6 g par litre", "environ 36 g par litre", "environ 3 600 g par litre"],
              answer: 0,
              why: "On peut dissoudre environ 360 g de sel dans 1 L d'eau à 20 °C ; au-delà, la solution est saturée.",
            },
          ],
          trap: "Croire que le sucre ou le sel « disparaît » quand il se dissout : il est toujours présent, dispersé dans l'eau, et sa masse s'ajoute à celle de l'eau.",
          method: "Dans un exercice sur la solubilité, ramenez toujours les quantités au même volume de solvant (par exemple 1 L ou 100 mL) avant de comparer la masse de soluté à la solubilité.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'separer-melange',
          title: 'Séparer les constituants : décantation, filtration, distillation',
          minutes: 35,
          objectives: [
            "Choisir une technique de séparation adaptée à un mélange : décantation, filtration, évaporation ou distillation.",
            "Décrire le protocole d'une décantation, d'une filtration et d'une distillation.",
            "Utiliser le vocabulaire : filtrat, résidu, distillat.",
          ],
          course: [
            {
              heading: "La décantation",
              paragraphs: [
                "Laissez reposer un verre d'eau boueuse pendant quelques heures : les particules de terre, plus denses que l'eau, tombent lentement au fond et forment un dépôt. L'eau du dessus devient plus claire. C'est la décantation. On peut ensuite verser doucement l'eau du dessus dans un autre récipient, sans entraîner le dépôt : c'est le transvasement.",
                "La décantation permet aussi de séparer deux liquides non miscibles, comme l'eau et l'huile, avec une ampoule à décanter. On y verse le mélange et on attend que les deux couches se séparent : le liquide le plus dense (l'eau) est en bas. On retire le bouchon du haut, puis on ouvre le robinet pour faire couler l'eau, et on le ferme juste avant que l'huile n'arrive.",
              ],
              box: { label: "Définition", text: "La décantation consiste à laisser reposer un mélange hétérogène : les constituants les plus denses descendent au fond. Elle sépare un solide non dissous d'un liquide, ou deux liquides non miscibles (ampoule à décanter)." },
            },
            {
              heading: "La filtration",
              paragraphs: [
                "Après une décantation, l'eau reste souvent un peu trouble : de très fines particules restent en suspension. Pour les retenir, on réalise une filtration. On place un papier filtre plié dans un entonnoir, au-dessus d'un bécher, et l'on verse doucement le mélange.",
                "Le liquide traverse le filtre : on l'appelle le filtrat. Les particules solides, trop grosses pour passer par les trous du filtre, restent sur le papier : on les appelle le résidu. Le filtrat est limpide.",
                "Attention : une filtration ne retient que les particules non dissoutes. Si l'eau boueuse contenait du sel, le filtrat contient toujours ce sel : il est limpide mais salé. La filtration ne sépare pas les constituants d'un mélange homogène.",
              ],
              box: { label: "À retenir", text: "Filtration : le filtrat traverse le filtre, le résidu reste sur le filtre. Elle sépare les solides non dissous d'un liquide, mais pas les substances dissoutes." },
            },
            {
              heading: "L'évaporation et la distillation",
              paragraphs: [
                "Pour récupérer un solide dissous, comme le sel d'une eau salée, on fait évaporer l'eau : le sel reste. C'est ce qui se passe dans les marais salants, où l'eau de mer s'évapore au soleil et au vent en laissant le sel.",
                "Pour récupérer le liquide, on réalise une distillation. On chauffe le mélange dans un ballon (avec quelques grains de pierre ponce pour une ébullition régulière). La vapeur monte, passe devant un thermomètre puis entre dans un réfrigérant, un tube refroidi par une circulation d'eau froide. Au contact des parois froides, la vapeur se liquéfie. Le liquide obtenu, appelé distillat, est recueilli goutte à goutte dans un récipient.",
                "En distillant de l'eau salée, on obtient de l'eau distillée (un corps pur) et le sel reste dans le ballon. En distillant un mélange d'eau et d'éthanol, c'est l'éthanol qui se vaporise en premier, car il bout à une température plus basse (78 °C) que l'eau (100 °C) : le premier distillat est riche en éthanol.",
              ],
              box: { label: "Définition", text: "La distillation sépare les constituants d'un mélange homogène de liquides ou récupère le solvant d'une solution : on vaporise par chauffage, puis on liquéfie la vapeur dans un réfrigérant. Le liquide recueilli est le distillat." },
            },
            {
              heading: "Choisir et enchaîner les techniques",
              paragraphs: [
                "Pour choisir une technique, on observe d'abord le mélange. S'il est hétérogène, on commence par une décantation, puis une filtration. S'il est homogène (un solide dissous, ou deux liquides miscibles), décantation et filtration sont inutiles : il faut une évaporation (pour récupérer le solide) ou une distillation (pour récupérer le liquide).",
                "Pour un mélange compliqué, on enchaîne les techniques. Par exemple, pour séparer un mélange d'eau, de sable et de sel : décantation (le sable tombe au fond), filtration (le sable reste dans le résidu, le filtrat est de l'eau salée), puis distillation du filtrat (on recueille l'eau distillée et le sel reste dans le ballon).",
              ],
            },
          ],
          keyPoints: [
            "Décantation : au repos, les constituants les plus denses tombent au fond ; ampoule à décanter pour deux liquides non miscibles.",
            "Filtration : le filtrat traverse le filtre, le résidu reste dessus ; elle ne retient pas ce qui est dissous.",
            "Évaporation : récupère un solide dissous (marais salants).",
            "Distillation : vaporisation puis liquéfaction dans le réfrigérant ; le liquide recueilli est le distillat.",
            "Mélange hétérogène : décantation puis filtration. Mélange homogène : évaporation ou distillation.",
          ],
          example: {
            statement: "On dispose d'un mélange d'eau, de sable et de sel. Proposer une suite de techniques pour obtenir séparément du sable, de l'eau pure et du sel.",
            solution: [
              "Le mélange est hétérogène (on voit le sable) : on commence par une décantation ; le sable tombe au fond et l'on transvase l'eau du dessus.",
              "On filtre ce liquide : le sable restant est retenu sur le filtre (résidu) ; le filtrat est de l'eau salée, limpide.",
              "Le filtrat est un mélange homogène : on le distille. L'eau se vaporise, se liquéfie dans le réfrigérant et est recueillie : c'est de l'eau distillée.",
              "Le sel, qui ne se vaporise pas, reste dans le ballon une fois toute l'eau partie.",
              "Réponse : décantation, puis filtration (sable), puis distillation du filtrat (eau pure recueillie, sel dans le ballon).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisir la technique adaptée : a) récupérer le sel d'une eau salée ; b) séparer l'huile et le vinaigre d'une vinaigrette ; c) obtenir de l'eau pure à partir d'eau de mer ; d) retirer les grains de sable d'une eau sableuse ; e) éliminer les fines particules qui troublent une eau décantée.",
              hint: "Demandez-vous si le constituant à séparer est dissous ou non, et si l'on veut récupérer le solide ou le liquide.",
              solution: [
                "a) Le sel est dissous : évaporation de l'eau.",
                "b) Deux liquides non miscibles : décantation avec une ampoule à décanter.",
                "c) On veut récupérer l'eau d'une solution : distillation.",
                "d) Le sable n'est pas dissous et il est dense : décantation (on peut compléter par une filtration).",
                "e) Des particules fines non dissoutes : filtration.",
              ],
            },
            {
              level: 2,
              statement: "Léa filtre de l'eau boueuse qui contenait aussi du sel. Elle obtient un filtrat limpide et incolore, et conclut : « Mon filtrat est de l'eau pure ». 1) Que contient le résidu ? 2) Léa a-t-elle raison ? Justifier. 3) Proposer une expérience, sans goûter (on ne goûte jamais au laboratoire), pour vérifier votre réponse.",
              hint: "Rappelez-vous ce qu'une filtration peut retenir et ce qu'elle ne peut pas retenir.",
              solution: [
                "1) Le résidu contient les particules de terre, qui n'étaient pas dissoutes.",
                "2) Non : la filtration ne retient pas les substances dissoutes. Le sel est passé avec l'eau à travers le filtre : le filtrat est de l'eau salée, un mélange homogène.",
                "3) On fait évaporer quelques gouttes du filtrat sur une plaque : un dépôt blanc de sel apparaît, ce qui prouve que le filtrat n'est pas de l'eau pure.",
                "Réponse : le résidu est la terre ; le filtrat limpide contient encore le sel dissous, ce que montre le dépôt laissé par son évaporation.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Donnée : 1 L d'eau de mer contient en moyenne environ 35 g de sels dissous. 1) L'eau de mer est-elle un mélange homogène ou hétérogène (une fois filtrée) ? 2) Quelle masse de sels obtient-on en faisant évaporer entièrement 2 L d'eau de mer ? 3) On distille de l'eau de mer. Décrire le trajet de l'eau dans le montage en nommant les changements d'état. 4) Le distillat obtenu laisse-t-il un résidu à l'évaporation ? Lors de sa solidification, présente-t-il un palier ? À quelle température ?",
              hint: "Pour la question 2, utilisez la proportionnalité. Pour la question 4, demandez-vous si le distillat est un corps pur.",
              solution: [
                "1) Une fois filtrée, l'eau de mer est limpide : on ne distingue pas les sels dissous. C'est un mélange homogène.",
                "2) 1 L contient environ 35 g de sels, donc 2 L en contiennent environ 2 × 35 = 70 g.",
                "3) Dans le ballon chauffé, l'eau liquide se vaporise (vaporisation, ébullition). La vapeur monte et entre dans le réfrigérant, où elle se refroidit et redevient liquide (liquéfaction). L'eau liquide coule dans le récipient de recueil. Les sels restent dans le ballon.",
                "4) Le distillat est de l'eau distillée, un corps pur : il ne laisse aucun résidu à l'évaporation et présente un palier lors de sa solidification, à 0 °C.",
                "Réponse : mélange homogène ; environ 70 g de sels pour 2 L ; vaporisation dans le ballon puis liquéfaction dans le réfrigérant ; le distillat est un corps pur, sans résidu, avec un palier à 0 °C.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une distillation d'eau salée.",
            items: [
              "Verser l'eau salée dans le ballon.",
              "Chauffer le ballon jusqu'à l'ébullition.",
              "L'eau se vaporise et la vapeur monte dans le montage.",
              "La vapeur entre dans le réfrigérant refroidi par l'eau froide.",
              "La vapeur se liquéfie au contact des parois froides.",
              "Le distillat, de l'eau pure, est recueilli goutte à goutte.",
            ],
          },
          quiz: [
            {
              q: "Lors d'une filtration, comment appelle-t-on le liquide qui traverse le filtre ?",
              options: ["Le résidu", "Le filtrat", "Le distillat", "Le soluté"],
              answer: 1,
              why: "Le liquide qui traverse le filtre est le filtrat ; ce qui reste sur le filtre est le résidu.",
            },
            {
              q: "Quelle technique permet de récupérer le sel dissous dans de l'eau salée ?",
              options: ["La filtration", "La décantation", "L'évaporation", "Le tamisage"],
              answer: 2,
              why: "Le sel est dissous : il traverse les filtres. En évaporant l'eau, on récupère le sel.",
            },
            {
              q: "Lors d'une distillation, où la vapeur se liquéfie-t-elle ?",
              options: ["Dans le ballon", "Dans le réfrigérant", "Dans le thermomètre"],
              answer: 1,
              why: "Le réfrigérant, refroidi par une circulation d'eau froide, liquéfie la vapeur.",
            },
            {
              q: "Dans une ampoule à décanter contenant de l'eau et de l'huile, quel liquide sort en premier par le robinet ?",
              options: ["L'eau", "L'huile", "Les deux en même temps"],
              answer: 0,
              why: "L'eau, plus dense que l'huile, se trouve en bas, du côté du robinet.",
            },
            {
              q: "On filtre une eau boueuse et salée. Le filtrat est :",
              options: ["de l'eau pure", "du sable", "un mélange hétérogène de sable et d'eau", "de l'eau salée limpide"],
              answer: 3,
              why: "Le filtre retient la terre mais pas le sel dissous : le filtrat est de l'eau salée, limpide.",
            },
          ],
          trap: "Croire qu'un filtrat limpide est de l'eau pure : la filtration ne retient que les particules non dissoutes ; le sel ou le sucre dissous traversent le filtre.",
          method: "Avant de choisir une technique, demandez-vous : « Le mélange est-il homogène ou hétérogène ? » puis « Que veut-on récupérer : le solide ou le liquide ? ». Écrivez ensuite les étapes dans l'ordre, en nommant ce que l'on obtient à chaque étape.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA TERRE DANS L'UNIVERS                                                */
    /* ==================================================================== */
    {
      id: 'systeme-solaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'systeme-solaire',
          title: 'Le système solaire : le Soleil et ses planètes',
          minutes: 30,
          objectives: [
            "Décrire la structure du système solaire : le Soleil, les huit planètes et les autres objets qui tournent autour de lui.",
            "Distinguer une étoile, une planète et un satellite naturel.",
            "Ranger les planètes selon leur distance au Soleil et les classer en planètes telluriques et planètes géantes.",
            "Utiliser l'unité astronomique et convertir une distance en kilomètres.",
          ],
          course: [
            {
              heading: "Le Soleil, une étoile",
              paragraphs: [
                "Le Soleil est une étoile : une énorme boule de gaz très chauds, constituée surtout d'hydrogène et d'hélium, qui produit sa propre lumière. Son diamètre est d'environ 1,4 million de kilomètres, soit environ 109 fois celui de la Terre. Il contient à lui seul plus de 99 % de la masse de tout le système solaire.",
                "Le système solaire est formé du Soleil et de tous les objets qui tournent autour de lui. Il s'est formé il y a environ 4,6 milliards d'années, à partir d'un immense nuage de gaz et de poussières.",
              ],
              box: { label: "Définition", text: "Une étoile est un astre qui produit sa propre lumière. Le Soleil est l'étoile du système solaire ; tous les autres objets du système solaire tournent autour de lui." },
            },
            {
              heading: "Les huit planètes",
              paragraphs: [
                "Une planète est un astre qui tourne autour d'une étoile et qui ne produit pas de lumière : on la voit parce qu'elle renvoie (réfléchit) une partie de la lumière du Soleil. Le système solaire compte huit planètes. Dans l'ordre, en s'éloignant du Soleil : Mercure, Vénus, la Terre, Mars, Jupiter, Saturne, Uranus et Neptune. Une phrase permet de retenir cet ordre : « Me Voici Tout Mouillé, J'ai Suivi Un Nuage ».",
                "Les quatre planètes les plus proches du Soleil (Mercure, Vénus, la Terre et Mars) sont les planètes telluriques : elles sont petites, rocheuses, et ont une surface solide sur laquelle on pourrait se poser.",
                "Les quatre plus éloignées sont les planètes géantes : Jupiter et Saturne, faites surtout de gaz (hydrogène et hélium), et Uranus et Neptune, appelées géantes glacées. Elles n'ont pas de surface solide, possèdent des anneaux et de nombreux satellites. Jupiter est la plus grande planète : son diamètre vaut environ 11 fois celui de la Terre.",
              ],
              box: { label: "À retenir", text: "Ordre des planètes à partir du Soleil : Mercure, Vénus, Terre, Mars (telluriques, rocheuses), puis Jupiter, Saturne, Uranus, Neptune (géantes, sans surface solide)." },
            },
            {
              heading: "Les autres objets du système solaire",
              paragraphs: [
                "Un satellite naturel est un astre qui tourne autour d'une planète. La Lune est l'unique satellite naturel de la Terre ; elle se trouve à environ 384 000 km de nous. Mars a deux petits satellites, Phobos et Déimos, et Jupiter et Saturne en ont des dizaines.",
                "Le système solaire contient aussi des planètes naines, comme Pluton, considérée comme une planète jusqu'en 2006 puis classée parmi les planètes naines par l'Union astronomique internationale, ou Cérès. Entre Mars et Jupiter se trouve la ceinture d'astéroïdes, faite de nombreux blocs rocheux. Enfin, les comètes, faites de glace et de poussières, développent une longue queue lumineuse quand elles s'approchent du Soleil.",
              ],
            },
            {
              heading: "Mouvements et distances",
              paragraphs: [
                "Les planètes tournent autour du Soleil sur des trajectoires presque circulaires appelées orbites. La Terre fait un tour complet autour du Soleil en environ 365,25 jours : c'est sa révolution, qui dure une année. Elle tourne aussi sur elle-même en environ 24 heures : c'est sa rotation, qui explique l'alternance du jour et de la nuit.",
                "Les distances dans le système solaire sont immenses. La distance moyenne entre la Terre et le Soleil est d'environ 150 millions de kilomètres : on l'appelle l'unité astronomique (UA). Distances moyennes au Soleil, en UA : Mercure 0,39 ; Vénus 0,72 ; Terre 1 ; Mars 1,52 ; Jupiter 5,2 ; Saturne 9,5 ; Uranus 19,2 ; Neptune 30,1.",
                "La lumière, qui parcourt environ 300 000 km chaque seconde, met environ 8 minutes et 20 secondes pour venir du Soleil jusqu'à la Terre.",
              ],
              box: { label: "Repère", text: "1 unité astronomique (UA) = distance moyenne Terre-Soleil ≈ 150 millions de km. Distance en km = distance en UA × 150 millions de km." },
            },
          ],
          keyPoints: [
            "Le Soleil est une étoile : il produit sa propre lumière. Le système solaire s'est formé il y a environ 4,6 milliards d'années.",
            "Huit planètes : Mercure, Vénus, Terre, Mars (telluriques), Jupiter, Saturne, Uranus, Neptune (géantes).",
            "Une planète tourne autour d'une étoile ; un satellite naturel tourne autour d'une planète (la Lune autour de la Terre).",
            "Planètes naines (Pluton), astéroïdes et comètes font aussi partie du système solaire.",
            "1 UA ≈ 150 millions de km, la distance moyenne Terre-Soleil.",
            "Révolution de la Terre autour du Soleil : environ 365,25 jours ; rotation sur elle-même : environ 24 h.",
          ],
          example: {
            statement: "La planète Mars se trouve en moyenne à 1,52 UA du Soleil. Calculer cette distance en kilomètres (1 UA ≈ 150 millions de km), puis la comparer à la distance Terre-Soleil.",
            solution: [
              "Pour convertir des UA en kilomètres, on multiplie par 150 millions de km.",
              "Distance Soleil-Mars : 1,52 × 150 = 228 millions de km.",
              "La distance Terre-Soleil vaut 1 UA, soit 150 millions de km.",
              "Mars est donc 1,52 fois plus loin du Soleil que la Terre, soit 228 - 150 = 78 millions de km plus loin.",
              "Réponse : Mars est à environ 228 millions de km du Soleil, environ une fois et demie plus loin que la Terre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chacun des astres suivants en étoile, planète ou satellite naturel : le Soleil, la Terre, la Lune, Jupiter, Phobos, Saturne, Mercure. Préciser ensuite, pour chaque planète, si elle est tellurique ou géante.",
              hint: "Une étoile produit sa lumière ; une planète tourne autour d'une étoile ; un satellite tourne autour d'une planète.",
              solution: [
                "Étoile : le Soleil.",
                "Planètes : la Terre, Jupiter, Saturne, Mercure.",
                "Satellites naturels : la Lune (autour de la Terre) et Phobos (autour de Mars).",
                "Planètes telluriques : la Terre et Mercure. Planètes géantes : Jupiter et Saturne.",
              ],
            },
            {
              level: 2,
              statement: "La lumière parcourt environ 300 000 km par seconde. 1) La distance Terre-Soleil vaut environ 150 000 000 km. Calculer la durée, en secondes, que met la lumière du Soleil pour arriver sur Terre, puis la convertir en minutes et secondes. 2) Neptune est environ 30 fois plus loin du Soleil que la Terre. Combien de temps la lumière du Soleil met-elle pour atteindre Neptune ? Donner le résultat en heures et minutes.",
              hint: "Durée = distance ÷ vitesse. Rappel : 1 min = 60 s et 1 h = 3 600 s.",
              solution: [
                "1) Durée = 150 000 000 ÷ 300 000 = 500 s.",
                "500 s = 8 × 60 s + 20 s : la lumière met 8 min 20 s.",
                "2) Neptune est 30 fois plus loin : la durée est 30 fois plus longue, soit 30 × 500 = 15 000 s.",
                "15 000 s = 4 × 3 600 s + 600 s = 4 h + 10 min.",
                "Réponse : 8 min 20 s pour la Terre ; environ 4 h 10 min pour Neptune.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On veut construire une maquette du système solaire à l'échelle : 1 cm sur la maquette représente 100 000 km en réalité. Données arrondies : diamètre du Soleil 1 400 000 km ; diamètre de la Terre 12 700 km ; distance Terre-Soleil 150 000 000 km ; distance Neptune-Soleil 4 500 000 000 km. 1) Calculer le diamètre du Soleil et celui de la Terre sur la maquette. 2) À quelle distance du Soleil faut-il placer la Terre ? Neptune ? Exprimer ces distances en mètres. 3) Que vous apprend cette maquette sur le système solaire ?",
              hint: "Divisez chaque longueur réelle (en km) par 100 000 pour obtenir la longueur en cm sur la maquette ; 1 m = 100 cm.",
              solution: [
                "1) Soleil : 1 400 000 ÷ 100 000 = 14 cm (la taille d'un gros pamplemousse). Terre : 12 700 ÷ 100 000 = 0,127 cm, soit environ 1,3 mm (la taille d'une tête d'épingle).",
                "2) Terre : 150 000 000 ÷ 100 000 = 1 500 cm = 15 m.",
                "Neptune : 4 500 000 000 ÷ 100 000 = 45 000 cm = 450 m.",
                "3) Les planètes sont minuscules par rapport aux distances qui les séparent : le système solaire est essentiellement fait de vide.",
                "Réponse : un Soleil de 14 cm, une Terre d'environ 1,3 mm placée à 15 m, et Neptune à 450 m : le système solaire est immense et presque vide.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque planète à sa description.",
            pairs: [
              { left: "Mercure", right: "La planète la plus proche du Soleil" },
              { left: "Terre", right: "La seule planète où l'on connaît la vie" },
              { left: "Mars", right: "Planète rocheuse rouge, avec deux petits satellites" },
              { left: "Jupiter", right: "La plus grande planète du système solaire" },
              { left: "Saturne", right: "Géante gazeuse aux anneaux bien visibles" },
              { left: "Neptune", right: "La planète la plus éloignée du Soleil" },
            ],
          },
          quiz: [
            {
              q: "Le Soleil est :",
              options: ["une planète", "une étoile", "un satellite", "une galaxie"],
              answer: 1,
              why: "Le Soleil produit sa propre lumière : c'est une étoile.",
            },
            {
              q: "Quelle est la planète la plus proche du Soleil ?",
              options: ["Vénus", "Mars", "Neptune", "Mercure"],
              answer: 3,
              why: "L'ordre à partir du Soleil commence par Mercure, puis Vénus, la Terre et Mars.",
            },
            {
              q: "Une unité astronomique (1 UA) vaut environ :",
              options: ["150 millions de km", "384 000 km", "300 000 km", "1,5 milliard de km"],
              answer: 0,
              why: "1 UA est la distance moyenne entre la Terre et le Soleil, environ 150 millions de km.",
            },
            {
              q: "Laquelle de ces planètes est une planète tellurique ?",
              options: ["Jupiter", "Mars", "Saturne", "Neptune"],
              answer: 1,
              why: "Mars est petite et rocheuse, avec une surface solide : c'est une planète tellurique.",
            },
            {
              q: "Pourquoi voit-on les planètes briller dans le ciel ?",
              options: ["Elles produisent leur propre lumière", "Elles sont en feu comme des braises", "Elles renvoient la lumière solaire"],
              answer: 2,
              why: "Une planète ne produit pas de lumière : elle renvoie une partie de la lumière qu'elle reçoit du Soleil.",
            },
          ],
          trap: "Confondre étoile et planète, par exemple croire que le Soleil est une planète ou que les planètes produisent leur lumière : seules les étoiles produisent leur lumière.",
          method: "Pour retenir l'ordre des planètes, récitez la phrase « Me Voici Tout Mouillé, J'ai Suivi Un Nuage » et associez chaque initiale à une planète. Pour une conversion d'UA en km, écrivez toujours « distance en km = distance en UA × 150 millions ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'structure-univers',
          title: "Galaxies et étoiles : la structure de l'Univers",
          minutes: 30,
          objectives: [
            "Décrire la structure de l'Univers : étoiles, galaxies, amas de galaxies.",
            "Situer le système solaire dans notre galaxie, la Voie lactée.",
            "Définir l'année-lumière et convertir des distances, du kilomètre à l'année-lumière.",
            "Citer quelques ordres de grandeur des distances et des durées dans l'Univers.",
          ],
          course: [
            {
              heading: "Des étoiles innombrables",
              paragraphs: [
                "Par une nuit sans nuages, loin des lumières des villes, on peut voir à l'œil nu quelques milliers d'étoiles. Chacune est, comme le Soleil, une boule de gaz très chauds, faite surtout d'hydrogène et d'hélium, qui produit sa propre lumière. Le Soleil est une étoile ordinaire : il nous paraît énorme et éblouissant seulement parce qu'il est beaucoup plus proche de nous que les autres.",
                "L'étoile la plus proche de la Terre est donc le Soleil. Après lui, la plus proche est Proxima du Centaure, à environ 40 000 milliards de kilomètres. Pour exprimer de telles distances, le kilomètre n'est plus une unité pratique.",
                "Attention : une « étoile filante » n'est pas une étoile. C'est une petite poussière venue de l'espace qui brûle en traversant l'atmosphère de la Terre en laissant une traînée lumineuse.",
              ],
            },
            {
              heading: "L'année-lumière",
              paragraphs: [
                "Dans le vide, la lumière parcourt environ 300 000 km en une seconde. En une année, elle parcourt donc une distance énorme : environ 9 500 milliards de kilomètres. Cette distance s'appelle l'année-lumière (al). Malgré son nom, l'année-lumière est une unité de distance, et non une unité de durée.",
                "Proxima du Centaure se trouve à environ 4,2 années-lumière : sa lumière met 4,2 ans pour nous parvenir. Quand nous la regardons, nous la voyons donc telle qu'elle était il y a 4,2 ans. Plus on regarde loin dans l'Univers, plus on voit loin dans le passé.",
              ],
              box: { label: "Définition", text: "L'année-lumière (al) est la distance parcourue par la lumière dans le vide en une année : 1 al ≈ 9 500 milliards de km. C'est une unité de distance." },
            },
            {
              heading: "Les galaxies et la Voie lactée",
              paragraphs: [
                "Les étoiles ne sont pas réparties au hasard : elles sont regroupées, avec du gaz et des poussières, dans d'immenses ensembles appelés galaxies. Notre galaxie s'appelle la Voie lactée. Elle a la forme d'un disque aplati avec des bras en spirale, d'environ 100 000 années-lumière de diamètre, et contient plus de 100 milliards d'étoiles.",
                "Le système solaire se trouve dans l'un des bras de la Voie lactée, à environ 26 000 années-lumière de son centre. Par une nuit très noire, on voit une partie de notre galaxie par la tranche : c'est la longue bande blanchâtre qui traverse le ciel et qui a donné son nom à la Voie lactée.",
                "La grande galaxie la plus proche de la nôtre est la galaxie d'Andromède, à environ 2,5 millions d'années-lumière. Les galaxies sont elles-mêmes regroupées en amas de galaxies.",
              ],
              box: { label: "À retenir", text: "Emboîtement : la Terre tourne autour du Soleil ; le Soleil est une des étoiles de la Voie lactée ; la Voie lactée est une des galaxies de l'Univers." },
            },
            {
              heading: "L'Univers, immense et ancien",
              paragraphs: [
                "L'Univers observable contient des centaines de milliards de galaxies. Selon les connaissances actuelles, il est âgé d'environ 13,8 milliards d'années : à ses débuts (on parle de Big Bang), il était extrêmement chaud et dense, et depuis il ne cesse de s'étendre. Le système solaire, avec ses 4,6 milliards d'années, est bien plus jeune.",
                "Partout dans l'Univers, la matière est de même nature et obéit aux mêmes lois. Les étoiles sont faites surtout d'hydrogène et d'hélium. Les éléments plus lourds, comme le carbone, l'oxygène, le silicium ou le fer, qui forment la Terre et même notre corps, ont été fabriqués à l'intérieur d'étoiles anciennes.",
              ],
              box: { label: "Repère", text: "Terre-Lune : 384 000 km. Terre-Soleil : 150 millions de km. Proxima du Centaure : 4,2 al. Diamètre de la Voie lactée : environ 100 000 al. Andromède : environ 2,5 millions d'al. Âge de l'Univers : environ 13,8 milliards d'années." },
            },
          ],
          keyPoints: [
            "Le Soleil est une étoile parmi des milliards ; c'est l'étoile la plus proche de la Terre, puis vient Proxima du Centaure (4,2 al).",
            "1 année-lumière ≈ 9 500 milliards de km : c'est une distance, celle que parcourt la lumière en un an.",
            "Une galaxie regroupe des milliards d'étoiles, du gaz et des poussières ; la nôtre est la Voie lactée (environ 100 000 al de diamètre).",
            "Le système solaire est dans un bras de la Voie lactée ; la galaxie d'Andromède est à environ 2,5 millions d'al.",
            "L'Univers contient des centaines de milliards de galaxies et il est âgé d'environ 13,8 milliards d'années.",
            "Regarder loin, c'est voir dans le passé.",
          ],
          example: {
            statement: "Proxima du Centaure est à environ 4,2 années-lumière de la Terre. Calculer cette distance en kilomètres (1 al ≈ 9 500 milliards de km) et dire depuis combien de temps voyage la lumière que nous recevons d'elle.",
            solution: [
              "Pour convertir des années-lumière en kilomètres, on multiplie par 9 500 milliards de km.",
              "Distance : 4,2 × 9 500 = 39 900 milliards de km.",
              "Arrondi : environ 40 000 milliards de km.",
              "Par définition, la lumière met 1 an pour parcourir 1 al : elle met donc 4,2 ans pour parcourir 4,2 al.",
              "Réponse : Proxima du Centaure est à environ 40 000 milliards de km ; sa lumière a voyagé pendant environ 4,2 ans.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "L'étoile Sirius, la plus brillante du ciel nocturne, est située à environ 8,6 années-lumière de la Terre. 1) Convertir cette distance en kilomètres (1 al ≈ 9 500 milliards de km). 2) Depuis combien de temps la lumière de Sirius que nous voyons ce soir voyage-t-elle ?",
              hint: "Multipliez le nombre d'années-lumière par 9 500 milliards de km ; la lumière met 1 an pour parcourir 1 al.",
              solution: [
                "1) 8,6 × 9 500 = 81 700 milliards de km.",
                "2) La lumière met 1 an pour parcourir 1 al : elle a voyagé pendant environ 8,6 ans.",
                "Réponse : Sirius est à environ 81 700 milliards de km ; nous la voyons telle qu'elle était il y a environ 8,6 ans.",
              ],
            },
            {
              level: 2,
              statement: "La Voie lactée a un diamètre d'environ 100 000 années-lumière, et la galaxie d'Andromède se trouve à environ 2,5 millions d'années-lumière. 1) Combien de fois la distance d'Andromède est-elle plus grande que le diamètre de la Voie lactée ? 2) Quand nous observons Andromède aujourd'hui, depuis combien de temps sa lumière voyage-t-elle ? 3) Un camarade dit : « L'année-lumière est une durée, puisqu'elle contient le mot année ». Corriger son erreur.",
              hint: "Écrivez 2,5 millions sous la forme 2 500 000 avant de diviser.",
              solution: [
                "1) 2 500 000 ÷ 100 000 = 25 : la distance d'Andromède vaut environ 25 fois le diamètre de la Voie lactée.",
                "2) La lumière parcourt 1 al par an : la lumière d'Andromède a voyagé pendant environ 2,5 millions d'années.",
                "3) L'année-lumière est une distance : celle que parcourt la lumière en une année, environ 9 500 milliards de km. Le mot « année » indique seulement la durée du trajet qui sert à la définir.",
                "Réponse : environ 25 fois ; 2,5 millions d'années ; l'année-lumière est une unité de distance.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives arrondies : une sonde spatiale voyage à 60 000 km/h, une vitesse comparable à celle des sondes les plus rapides envoyées loin du Soleil. Proxima du Centaure est à environ 40 000 milliards de km. À l'aide de la calculatrice : 1) Écrire 40 000 milliards de km en chiffres. 2) Calculer la durée du voyage de la sonde jusqu'à Proxima, en heures, puis en jours, puis en années (on prendra 1 an = 365 jours). 3) Comparer avec la durée du trajet de la lumière. Que peut-on conclure sur la possibilité d'aller visiter les étoiles ?",
              hint: "1 milliard = 1 000 000 000. Durée = distance ÷ vitesse ; 1 jour = 24 h.",
              solution: [
                "1) 40 000 milliards de km = 40 000 × 1 000 000 000 = 40 000 000 000 000 km.",
                "2) Durée en heures : 40 000 000 000 000 ÷ 60 000 ≈ 666 666 667 h.",
                "En jours : 666 666 667 ÷ 24 ≈ 27 777 778 jours.",
                "En années : 27 777 778 ÷ 365 ≈ 76 000 ans.",
                "3) La lumière ne met que 4,2 ans ; la sonde mettrait environ 76 000 ans, soit plus de 18 000 fois plus longtemps.",
                "Réponse : environ 76 000 ans de voyage ; même l'étoile la plus proche est hors de portée de nos sondes actuelles, ce qui montre l'immensité des distances entre les étoiles.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces objets du plus petit au plus grand.",
            items: [
              "La Lune",
              "La Terre",
              "Le Soleil",
              "Le système solaire",
              "La Voie lactée",
              "L'Univers observable",
            ],
          },
          quiz: [
            {
              q: "L'année-lumière est :",
              options: ["une durée", "une distance", "une vitesse", "une unité de temps"],
              answer: 1,
              why: "L'année-lumière est la distance parcourue par la lumière en une année, environ 9 500 milliards de km.",
            },
            {
              q: "Quelle est l'étoile la plus proche de la Terre ?",
              options: ["Proxima du Centaure", "Le Soleil", "Sirius", "L'étoile Polaire"],
              answer: 1,
              why: "Le Soleil est une étoile, et c'est de loin la plus proche ; Proxima du Centaure vient ensuite, à 4,2 al.",
            },
            {
              q: "Comment s'appelle la galaxie dans laquelle se trouve le système solaire ?",
              options: ["La Voie lactée", "Andromède", "Le système solaire"],
              answer: 0,
              why: "Le Soleil et ses planètes se trouvent dans un bras de notre galaxie, la Voie lactée.",
            },
            {
              q: "Proxima du Centaure est à 4,2 al. La lumière que nous recevons d'elle est partie :",
              options: ["il y a 4,2 secondes", "il y a 4,2 minutes", "il y a 4,2 ans", "à l'instant"],
              answer: 2,
              why: "La lumière met 1 an pour parcourir 1 année-lumière, donc 4,2 ans pour 4,2 al.",
            },
            {
              q: "Quel est l'âge approximatif de l'Univers selon les connaissances actuelles ?",
              options: ["Environ 4,6 milliards d'années", "Environ 13 800 milliards d'années", "Environ 100 millions d'années", "Environ 13,8 milliards d'années"],
              answer: 3,
              why: "L'Univers est âgé d'environ 13,8 milliards d'années ; 4,6 milliards d'années est l'âge du système solaire.",
            },
          ],
          trap: "Croire que l'année-lumière est une durée parce qu'elle contient le mot « année » : c'est une distance, celle que la lumière parcourt en un an.",
          method: "Pour ne pas vous perdre dans les très grands nombres, écrivez-les avec le mot (« 9 500 milliards de km ») et vérifiez l'ordre de grandeur : système solaire en millions ou milliards de km, étoiles en années-lumière, galaxies en milliers ou millions d'années-lumière.",
        },
      ],
    },
  ],
}
