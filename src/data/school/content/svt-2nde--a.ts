import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'svt-2nde',
  chapters: [
    /* ==================================================================== */
    /* L'ORGANISME PLURICELLULAIRE, UN ENSEMBLE DE CELLULES SPÉCIALISÉES      */
    /* ==================================================================== */
    {
      id: 'organisme-pluricellulaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'echelles-vivant',
          title: "De l'organisme à la cellule : les échelles du vivant",
          minutes: 25,
          objectives: [
            "Identifier les niveaux d'organisation emboîtés d'un organisme pluricellulaire : organe, tissu, cellule, organite, molécule.",
            "Énoncer la théorie cellulaire et situer ses principales étapes historiques.",
            "Convertir des longueurs en millimètres, micromètres et nanomètres et situer les ordres de grandeur du vivant.",
            "Calculer la taille réelle d'un objet observé à partir d'un grossissement ou d'une barre d'échelle.",
          ],
          course: [
            {
              heading: "Des niveaux d'organisation emboîtés",
              paragraphs: [
                "Un organisme pluricellulaire, comme un être humain, un chêne ou un champignon de Paris, est formé d'un très grand nombre de cellules. Ces cellules ne sont pas disposées au hasard : elles s'organisent en niveaux emboîtés, chacun contenu dans le précédent. L'organisme comprend des appareils (ou systèmes), formés d'organes ; chaque organe est fait de plusieurs tissus ; chaque tissu est un ensemble de cellules ; chaque cellule contient des organites, eux-mêmes construits à partir de molécules.",
                "Prenons l'appareil digestif humain. L'estomac est un organe. Sa paroi associe plusieurs tissus : un épithélium qui tapisse l'intérieur et sécrète le suc gastrique, un tissu musculaire qui brasse les aliments, un tissu conjonctif qui les relie. Les cellules de l'épithélium gastrique fabriquent des molécules comme la pepsine, une enzyme qui découpe les protéines. Chez une plante, la feuille est un organe, formée d'un épiderme, d'un parenchyme chlorophyllien et de vaisseaux conducteurs.",
                "Cette organisation se lit dans les deux sens : en descendant, on cherche de quoi une structure est faite ; en remontant, on comprend comment le fonctionnement des molécules et des cellules permet celui de l'organisme entier. Une fonction (digérer, respirer, se déplacer) s'explique toujours à plusieurs échelles à la fois.",
              ],
              box: { label: "Définition", text: "Un tissu est un ensemble de cellules semblables, associées entre elles et qui assurent ensemble une même fonction (tissu musculaire, tissu nerveux, épiderme). Un organe associe plusieurs tissus et remplit une ou plusieurs fonctions précises." },
            },
            {
              heading: "La cellule, unité du vivant : la théorie cellulaire",
              paragraphs: [
                "En 1665, l'Anglais Robert Hooke observe au microscope une fine tranche de liège et y voit de petites logettes qu'il nomme cellules (du latin cella, petite chambre). Il n'observe en réalité que les parois de cellules mortes. Au XIXe siècle, les progrès du microscope permettent de généraliser : le botaniste Matthias Schleiden (1838) pour les végétaux, puis le zoologiste Theodor Schwann (1839) pour les animaux, affirment que tous les êtres vivants sont formés de cellules. En 1855, le médecin Rudolf Virchow ajoute que toute cellule provient d'une autre cellule, par division.",
                "Ces trois idées forment la théorie cellulaire, l'un des fondements de la biologie. Certains êtres vivants ne comportent qu'une seule cellule (bactéries, levures, paramécies) : ce sont des unicellulaires. D'autres en comptent des milliards : ce sont des pluricellulaires. Selon les estimations actuelles, le corps d'un adulte humain contient de l'ordre de 30 000 milliards de cellules (3 × 10¹³), toutes issues d'une seule cellule, la cellule-œuf.",
              ],
              box: { label: "À retenir", text: "Théorie cellulaire : 1) tous les êtres vivants sont constitués d'une ou de plusieurs cellules ; 2) la cellule est l'unité de structure et de fonctionnement du vivant ; 3) toute cellule provient d'une cellule préexistante." },
            },
            {
              heading: "Des tailles très différentes : unités et ordres de grandeur",
              paragraphs: [
                "Pour mesurer le vivant, on utilise des sous-multiples du mètre : le millimètre (1 mm = 10⁻³ m), le micromètre (1 µm = 10⁻⁶ m) et le nanomètre (1 nm = 10⁻⁹ m). On passe d'une unité à la suivante en multipliant ou en divisant par 1 000 : 1 mm = 1 000 µm et 1 µm = 1 000 nm.",
                "Quelques ordres de grandeur : une cellule animale ou végétale mesure le plus souvent entre 10 et 100 µm ; un globule rouge humain mesure environ 7 à 8 µm de diamètre ; une bactérie, de 1 à 5 µm ; une mitochondrie, environ 1 µm ; un virus, de 20 à 300 nm ; une protéine, quelques nanomètres ; la double hélice d'ADN a un diamètre de 2 nm. Il existe des exceptions spectaculaires : l'ovocyte humain atteint environ 0,1 mm, et le prolongement (axone) d'un neurone moteur peut dépasser un mètre de long, de la moelle épinière jusqu'au pied.",
              ],
              box: { label: "Repère", text: "1 m = 1 000 mm ; 1 mm = 1 000 µm ; 1 µm = 1 000 nm. Pour convertir vers une unité plus petite, on multiplie par 1 000 ; vers une unité plus grande, on divise par 1 000." },
            },
            {
              heading: "Observer à chaque échelle : les instruments et le calcul de taille réelle",
              paragraphs: [
                "Le pouvoir de résolution d'un instrument est la plus petite distance entre deux points qu'il permet encore de distinguer. Celui de l'œil humain est d'environ 0,1 mm : on ne voit donc pas les cellules à l'œil nu, sauf quelques très grandes. Le microscope optique (photonique) grossit jusqu'à environ 1 000 fois et distingue des détails d'environ 0,2 µm : il montre les cellules, le noyau et, avec une coloration, certains organites. Le microscope électronique, qui utilise un faisceau d'électrons, distingue des détails de l'ordre du nanomètre : il révèle l'intérieur des organites, les virus et les grosses molécules.",
                "Au microscope optique, le grossissement total est le produit du grossissement de l'objectif par celui de l'oculaire : un objectif ×40 avec un oculaire ×10 donne un grossissement de ×400. Sur une image, la taille réelle d'un objet s'obtient en divisant la taille mesurée sur l'image par le grossissement de l'image. Si l'image porte une barre d'échelle, on utilise la proportionnalité : la barre et l'objet sont mesurés à la règle, dans la même unité.",
              ],
              box: { label: "Formule", text: "Taille réelle = taille mesurée sur l'image ÷ grossissement de l'image. Avec une barre d'échelle : taille réelle = (taille mesurée de l'objet ÷ taille mesurée de la barre) × longueur indiquée sur la barre." },
            },
          ],
          keyPoints: [
            "Niveaux emboîtés : organisme, appareil, organe, tissu, cellule, organite, molécule.",
            "Théorie cellulaire (Schleiden 1838, Schwann 1839, Virchow 1855) : tout être vivant est fait de cellules, et toute cellule provient d'une cellule.",
            "1 mm = 1 000 µm ; 1 µm = 1 000 nm. Une cellule mesure en général de 10 à 100 µm, une bactérie de 1 à 5 µm, un virus de 20 à 300 nm.",
            "Pouvoir de résolution : œil environ 0,1 mm ; microscope optique environ 0,2 µm ; microscope électronique de l'ordre du nanomètre.",
            "Grossissement du microscope = grossissement de l'objectif × grossissement de l'oculaire.",
            "Taille réelle = taille sur l'image ÷ grossissement de l'image (ou proportionnalité avec la barre d'échelle).",
          ],
          example: {
            statement: "Sur une photographie de frottis sanguin, une barre d'échelle indiquant 10 µm mesure 2 cm à la règle. Un globule rouge mesure 1,5 cm sur la même photographie. Calculez la taille réelle du globule rouge, puis le grossissement de la photographie.",
            solution: [
              "Repérer les données : la barre mesure 2 cm sur l'image et représente 10 µm en réalité ; le globule rouge mesure 1,5 cm sur l'image.",
              "Appliquer la proportionnalité : 2 cm sur l'image correspondent à 10 µm, donc 1 cm correspond à 10 ÷ 2 = 5 µm.",
              "Calculer : 1,5 cm correspondent à 1,5 × 5 = 7,5 µm. Le globule rouge mesure donc 7,5 µm de diamètre.",
              "Calculer le grossissement en mettant les deux longueurs dans la même unité : 2 cm = 20 000 µm, et 20 000 ÷ 10 = 2 000.",
              "Vérifier avec la formule : 1,5 cm = 15 000 µm, et 15 000 ÷ 2 000 = 7,5 µm. Les deux méthodes concordent.",
              "Réponse : le globule rouge mesure 7,5 µm et la photographie est grossie 2 000 fois, ce qui est cohérent avec la taille connue d'un globule rouge (7 à 8 µm).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Convertissez les longueurs suivantes dans l'unité demandée : a) 0,25 mm en µm ; b) 7 µm en nm ; c) 2 nm en µm ; d) 80 000 nm en mm. Classez ensuite les quatre longueurs de la plus petite à la plus grande.",
              hint: "Entre mm et µm, comme entre µm et nm, le facteur est toujours 1 000. Vers une unité plus petite on multiplie, vers une unité plus grande on divise.",
              solution: [
                "a) 0,25 mm = 0,25 × 1 000 µm = 250 µm.",
                "b) 7 µm = 7 × 1 000 nm = 7 000 nm.",
                "c) 2 nm = 2 ÷ 1 000 µm = 0,002 µm.",
                "d) 80 000 nm = 80 000 ÷ 1 000 µm = 80 µm, puis 80 µm = 80 ÷ 1 000 mm = 0,08 mm.",
                "Pour classer, on exprime tout en µm : 250 µm ; 7 µm ; 0,002 µm ; 80 µm.",
                "Résultat : 2 nm < 7 µm < 80 000 nm < 0,25 mm.",
              ],
            },
            {
              level: 2,
              statement: "Un élève observe un épiderme d'oignon avec un oculaire ×10 et un objectif ×40. Il photographie la préparation ; l'image est grossie 400 fois. Sur la photographie, une cellule mesure 10 cm de long et 2 cm de large. a) Vérifiez le grossissement du microscope. b) Calculez la longueur et la largeur réelles de la cellule en µm. c) Le noyau de cette cellule mesure environ 20 µm : peut-on le distinguer à l'œil nu ? Justifiez.",
              hint: "Convertissez les mesures de l'image en µm avant de diviser par le grossissement, puis comparez avec le pouvoir de résolution de l'œil (0,1 mm).",
              solution: [
                "a) Grossissement = objectif × oculaire = 40 × 10 = ×400.",
                "b) Longueur sur l'image : 10 cm = 100 mm = 100 000 µm. Longueur réelle = 100 000 ÷ 400 = 250 µm.",
                "Largeur sur l'image : 2 cm = 20 000 µm. Largeur réelle = 20 000 ÷ 400 = 50 µm.",
                "c) Le pouvoir de résolution de l'œil est d'environ 0,1 mm, soit 100 µm. Le noyau (20 µm) est cinq fois plus petit : il est invisible à l'œil nu.",
                "Résultat : la cellule mesure 250 µm sur 50 µm ; son noyau n'est visible qu'au microscope.",
              ],
            },
            {
              level: 3,
              statement: "Document (valeurs approchées) : globule rouge humain, 7,5 µm de diamètre ; bactérie Escherichia coli, 2 µm de long ; mitochondrie, 1 µm ; virus de la grippe, 100 nm ; protéine, 5 nm. Pouvoirs de résolution : œil 0,1 mm ; microscope optique 0,2 µm ; microscope électronique 1 nm environ. a) Classez ces objets du plus grand au plus petit. b) Indiquez pour chacun l'instrument le plus simple qui permet de le distinguer. c) Combien de bactéries alignées bout à bout couvrent le diamètre d'un globule rouge ? Combien de virus alignés couvrent la longueur d'une bactérie ?",
              hint: "Exprimez toutes les tailles dans la même unité (le nanomètre convient), puis comparez chaque taille aux pouvoirs de résolution exprimés dans cette unité.",
              solution: [
                "Conversion en nm : globule rouge 7 500 nm ; bactérie 2 000 nm ; mitochondrie 1 000 nm ; virus 100 nm ; protéine 5 nm. Pouvoirs de résolution : œil 100 000 nm ; microscope optique 200 nm ; microscope électronique 1 nm.",
                "a) Classement : globule rouge > bactérie > mitochondrie > virus > protéine.",
                "b) Aucun objet n'atteint 100 000 nm : aucun n'est visible à l'œil nu. Le globule rouge, la bactérie et la mitochondrie dépassent 200 nm : le microscope optique suffit (la mitochondrie apparaît comme un petit point, après coloration). Le virus (100 nm) et la protéine (5 nm) sont sous 200 nm : il faut le microscope électronique.",
                "c) 7,5 ÷ 2 = 3,75 : il faut un peu moins de 4 bactéries pour couvrir le diamètre d'un globule rouge.",
                "2 000 nm ÷ 100 nm = 20 : 20 virus alignés couvrent la longueur d'une bactérie.",
                "Conclusion : le vivant s'étend sur plusieurs ordres de grandeur, et chaque échelle demande son instrument.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces niveaux d'organisation du plus grand au plus petit.",
            items: [
              "Organisme : un être humain",
              "Appareil : l'appareil digestif",
              "Organe : l'estomac",
              "Tissu : l'épithélium de l'estomac",
              "Cellule : une cellule de cet épithélium",
              "Organite : une mitochondrie de cette cellule",
              "Molécule : une protéine de quelques nanomètres",
            ],
          },
          quiz: [
            {
              q: "Combien de micromètres y a-t-il dans un millimètre ?",
              options: ["10", "100", "1 000", "1 000 000"],
              answer: 2,
              why: "Le micromètre vaut 10⁻⁶ m et le millimètre 10⁻³ m : un millimètre contient donc 1 000 micromètres.",
            },
            {
              q: "Quelle affirmation fait partie de la théorie cellulaire ?",
              options: ["Toute cellule provient d'une cellule préexistante", "Seuls les animaux sont formés de cellules", "Les cellules apparaissent spontanément dans la matière inerte", "Une cellule contient toujours un noyau et des chloroplastes"],
              answer: 0,
              why: "Virchow (1855) a complété la théorie cellulaire : toute cellule naît de la division d'une autre cellule.",
            },
            {
              q: "Un objectif ×40 est utilisé avec un oculaire ×10. Quel est le grossissement total ?",
              options: ["×50", "×4", "×4 000", "×400"],
              answer: 3,
              why: "Le grossissement total est le produit des deux grossissements : 40 × 10 = 400.",
            },
            {
              q: "Quel objet ne peut pas être distingué au microscope optique ?",
              options: ["Un globule rouge", "Un virus de 100 nm", "Une cellule d'épiderme d'oignon", "Une bactérie de 2 µm"],
              answer: 1,
              why: "Le microscope optique ne distingue pas les détails inférieurs à environ 0,2 µm (200 nm) ; un virus de 100 nm exige le microscope électronique.",
            },
            {
              q: "Dans quel ordre trouve-t-on ces niveaux, du plus grand au plus petit ?",
              options: ["Tissu, organe, cellule", "Organe, tissu, cellule", "Cellule, tissu, organe", "Organe, cellule, tissu"],
              answer: 1,
              why: "Un organe est formé de plusieurs tissus, et un tissu est un ensemble de cellules.",
            },
          ],
          trap: "Diviser la taille mesurée sur l'image par le grossissement sans avoir converti les unités : 1,5 cm ÷ 2 000 ne donne pas des micromètres. Il faut convertir d'abord la mesure en µm (1,5 cm = 15 000 µm).",
          method: "Pour tout calcul de taille réelle, écrivez d'abord les données avec leurs unités, convertissez-les dans l'unité de la réponse, calculez, puis vérifiez la vraisemblance : une cellule de 3 m ou de 0,001 nm signale une erreur de conversion.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'cellule-structure',
          title: "La cellule, une structure complexe",
          minutes: 30,
          objectives: [
            "Identifier les constituants communs à toutes les cellules : membrane plasmique, cytoplasme, information génétique.",
            "Distinguer une cellule eucaryote d'une cellule procaryote à partir de leur organisation.",
            "Associer les principaux organites à leur fonction et différencier cellule animale, cellule végétale et cellule de champignon.",
            "Expliquer que la cellule est un espace séparé du milieu extérieur qui échange avec lui de la matière et de l'énergie.",
          ],
          course: [
            {
              heading: "Ce que toutes les cellules ont en commun",
              paragraphs: [
                "Toutes les cellules, de la bactérie au neurone, sont délimitées par une membrane plasmique. Cette membrane très fine (quelques nanomètres d'épaisseur) est formée d'une double couche de lipides, la bicouche lipidique, dans laquelle sont insérées des protéines. Elle sépare le milieu intérieur de la cellule du milieu extérieur et contrôle les échanges : certaines protéines membranaires laissent passer des molécules précises, d'autres reçoivent des signaux.",
                "À l'intérieur se trouve le cytoplasme, un milieu aqueux riche en molécules dissoutes (ions, glucides, acides aminés, protéines) où se déroulent de nombreuses réactions chimiques. Toutes les cellules contiennent aussi de l'ADN, support de l'information génétique, et des ribosomes, petites structures qui fabriquent les protéines. L'eau représente environ 70 % de la masse d'une cellule ; le reste est surtout formé de molécules organiques : glucides, lipides, protéines et acides nucléiques.",
              ],
              box: { label: "Définition", text: "La membrane plasmique est l'enveloppe qui délimite toute cellule. Elle est constituée d'une bicouche de lipides et de protéines, et elle contrôle les échanges entre la cellule et son milieu." },
            },
            {
              heading: "La cellule eucaryote : un noyau et des organites",
              paragraphs: [
                "Chez les animaux, les végétaux, les champignons et de nombreux unicellulaires (paramécie, amibe, levure), la cellule possède un noyau : un compartiment entouré d'une double membrane, l'enveloppe nucléaire, qui contient l'ADN. Ces cellules sont dites eucaryotes (du grec eu, vrai, et karyon, noyau). Leur cytoplasme contient aussi des organites, compartiments délimités par des membranes et spécialisés dans une fonction.",
                "Les mitochondries sont le siège de la respiration cellulaire, qui libère l'énergie contenue dans les molécules organiques. Le réticulum endoplasmique et l'appareil de Golgi participent à la fabrication, à la transformation et au transport des protéines, notamment de celles qui sont exportées hors de la cellule. Les vacuoles stockent de l'eau et diverses substances.",
                "La cellule végétale chlorophyllienne possède en plus des chloroplastes, siège de la photosynthèse, une grande vacuole qui peut occuper l'essentiel du volume de la cellule, et une paroi rigide faite surtout de cellulose, située à l'extérieur de la membrane plasmique. La cellule de champignon possède une paroi (à base de chitine), mais pas de chloroplastes. La cellule animale n'a ni paroi ni chloroplastes.",
              ],
            },
            {
              heading: "La cellule procaryote : pas de noyau",
              paragraphs: [
                "Les bactéries sont des cellules procaryotes (pro, avant) : elles n'ont pas de noyau. Leur ADN, formé d'un grand chromosome généralement circulaire, se trouve directement dans le cytoplasme, parfois accompagné de petites molécules d'ADN circulaires appelées plasmides. Elles ne possèdent pas d'organites délimités par une membrane, mais elles ont une membrane plasmique, des ribosomes et, le plus souvent, une paroi.",
                "Les cellules procaryotes sont en général beaucoup plus petites (1 à 5 µm) que les cellules eucaryotes (10 à 100 µm). Un indice de l'histoire du vivant : les mitochondries et les chloroplastes possèdent leur propre ADN, circulaire comme celui des bactéries, et se divisent dans la cellule. On considère qu'ils dérivent d'anciennes bactéries intégrées dans une cellule hôte il y a très longtemps (théorie de l'endosymbiose).",
              ],
              box: { label: "À retenir", text: "Eucaryote : ADN dans un noyau, organites délimités par des membranes (mitochondries, et chloroplastes chez les végétaux chlorophylliens). Procaryote (bactérie) : ADN dans le cytoplasme, pas de noyau ni d'organites membranaires." },
            },
            {
              heading: "Un espace délimité qui échange avec son milieu",
              paragraphs: [
                "La cellule n'est pas un sac fermé : c'est un système ouvert. À travers sa membrane, elle prélève dans son milieu de l'eau, des ions, du dioxygène et des nutriments comme le glucose ; elle rejette du dioxyde de carbone et des déchets ; elle peut exporter des molécules qu'elle a fabriquées (hormones, enzymes digestives). Ces échanges sont sélectifs : la membrane laisse passer certaines substances et en retient d'autres.",
                "La compartimentation de la cellule eucaryote permet que des réactions chimiques différentes se déroulent en même temps sans se gêner, chacune dans l'organite qui lui convient. C'est pourquoi on dit que la cellule est une structure complexe : son organisation, visible au microscope électronique, est directement liée à ses fonctions.",
              ],
            },
          ],
          keyPoints: [
            "Toute cellule possède une membrane plasmique (bicouche lipidique et protéines), un cytoplasme, de l'ADN et des ribosomes.",
            "Cellule eucaryote : un noyau qui contient l'ADN et des organites (mitochondries, réticulum, appareil de Golgi, vacuoles).",
            "Cellule végétale chlorophyllienne : en plus, chloroplastes, grande vacuole et paroi de cellulose.",
            "Cellule procaryote (bactérie) : pas de noyau, ADN dans le cytoplasme, pas d'organites membranaires, taille de 1 à 5 µm.",
            "Mitochondrie : respiration cellulaire. Chloroplaste : photosynthèse. Noyau : contient l'ADN.",
            "La cellule est un système ouvert qui échange de la matière et de l'énergie avec son milieu à travers sa membrane.",
          ],
          example: {
            statement: "Au microscope électronique, on observe une cellule de 15 µm qui possède une membrane plasmique, une paroi, un noyau, des mitochondries et une grande vacuole, mais aucun chloroplaste. Elle provient d'une racine de carotte. Identifiez le type de cellule et expliquez l'absence de chloroplastes.",
            solution: [
              "Présence d'un noyau et d'organites (mitochondries, vacuole) : c'est une cellule eucaryote, ce que confirme sa taille (15 µm).",
              "Présence d'une paroi et d'une grande vacuole : ces caractères sont ceux d'une cellule végétale (une cellule animale n'a pas de paroi).",
              "L'origine de l'échantillon le confirme : la carotte est une plante.",
              "Absence de chloroplastes : la racine se développe dans le sol, à l'obscurité ; ses cellules ne sont pas chlorophylliennes. Toutes les cellules végétales ne possèdent donc pas de chloroplastes.",
              "Réponse : il s'agit d'une cellule végétale eucaryote non chlorophyllienne.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque structure à sa fonction : a) membrane plasmique ; b) noyau ; c) mitochondrie ; d) chloroplaste ; e) paroi végétale. Fonctions proposées : 1) photosynthèse ; 2) contient l'ADN de la cellule eucaryote ; 3) contrôle les échanges avec le milieu ; 4) rigidité et protection de la cellule végétale ; 5) respiration cellulaire.",
              hint: "Reliez d'abord les associations dont vous êtes sûr, puis procédez par élimination.",
              solution: [
                "a) Membrane plasmique : 3) contrôle les échanges avec le milieu.",
                "b) Noyau : 2) contient l'ADN de la cellule eucaryote.",
                "c) Mitochondrie : 5) respiration cellulaire.",
                "d) Chloroplaste : 1) photosynthèse.",
                "e) Paroi végétale : 4) rigidité et protection de la cellule végétale.",
                "Résultat : a3, b2, c5, d1, e4.",
              ],
            },
            {
              level: 2,
              statement: "Une cellule de foie humaine mesure environ 20 µm de côté, une bactérie environ 2 µm. On assimile les deux cellules à des cubes. a) Combien de fois la cellule de foie est-elle plus longue que la bactérie ? b) Combien de fois son volume est-il plus grand ? c) Citez deux différences d'organisation entre ces deux cellules.",
              hint: "Le volume d'un cube est le côté au cube : si le côté est multiplié par k, le volume est multiplié par k³.",
              solution: [
                "a) Rapport des longueurs : 20 ÷ 2 = 10. La cellule de foie est 10 fois plus longue.",
                "b) Volume de la cellule de foie : 20³ = 8 000 µm³ ; volume de la bactérie : 2³ = 8 µm³. Rapport : 8 000 ÷ 8 = 1 000 (soit 10³).",
                "c) La cellule de foie est eucaryote : son ADN est enfermé dans un noyau et elle contient des organites comme les mitochondries. La bactérie est procaryote : son ADN est dans le cytoplasme et elle n'a pas d'organites membranaires.",
                "Résultat : 10 fois plus longue, 1 000 fois plus volumineuse, et une organisation interne bien plus compartimentée.",
              ],
            },
            {
              level: 3,
              statement: "Document (observations au microscope électronique) : cellule A, 2 µm, membrane plasmique, paroi, ribosomes, ADN dans le cytoplasme, pas de noyau. Cellule B, 40 µm, membrane plasmique, paroi de cellulose, noyau, mitochondries, chloroplastes, grande vacuole. Cellule C, 8 µm, membrane plasmique, paroi de chitine, noyau, mitochondries, pas de chloroplastes. Cellule D, 25 µm, membrane plasmique, noyau, mitochondries, pas de paroi. Identifiez chaque cellule (bactérie, cellule animale, cellule végétale chlorophyllienne, levure, qui est un champignon unicellulaire) en justifiant à partir du document, puis indiquez ce que les quatre cellules ont en commun.",
              hint: "Cherchez d'abord la présence ou l'absence de noyau, puis la paroi et sa nature, puis les chloroplastes.",
              solution: [
                "Cellule A : pas de noyau, ADN dans le cytoplasme, petite taille (2 µm) : c'est une cellule procaryote, la bactérie.",
                "Les cellules B, C et D ont un noyau et des mitochondries : elles sont eucaryotes.",
                "Cellule B : paroi de cellulose, chloroplastes et grande vacuole : c'est la cellule végétale chlorophyllienne.",
                "Cellule C : paroi de chitine mais pas de chloroplastes : c'est la levure, un champignon.",
                "Cellule D : pas de paroi ni de chloroplastes : c'est la cellule animale.",
                "Points communs : les quatre cellules possèdent une membrane plasmique, un cytoplasme, de l'ADN et des ribosomes, ce qui illustre l'unité du vivant à l'échelle cellulaire.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque structure cellulaire à son rôle.",
            pairs: [
              { left: "Membrane plasmique", right: "Délimite la cellule et contrôle ses échanges" },
              { left: "Noyau", right: "Contient l'ADN de la cellule eucaryote" },
              { left: "Mitochondrie", right: "Siège de la respiration cellulaire" },
              { left: "Chloroplaste", right: "Siège de la photosynthèse" },
              { left: "Paroi de cellulose", right: "Enveloppe rigide de la cellule végétale" },
              { left: "Ribosome", right: "Fabrique les protéines" },
            ],
          },
          quiz: [
            {
              q: "Quelle structure trouve-t-on dans toutes les cellules, y compris les bactéries ?",
              options: ["Le noyau", "Les mitochondries", "La membrane plasmique", "Les chloroplastes et la paroi"],
              answer: 2,
              why: "Toute cellule est délimitée par une membrane plasmique ; le noyau et les organites membranaires sont propres aux eucaryotes.",
            },
            {
              q: "Où se trouve l'ADN d'une bactérie ?",
              options: ["Dans le cytoplasme", "Dans le noyau", "Dans la paroi", "Dans les mitochondries"],
              answer: 0,
              why: "La bactérie est procaryote : elle n'a pas de noyau, son ADN est directement dans le cytoplasme.",
            },
            {
              q: "Quelle structure distingue une cellule végétale chlorophyllienne d'une cellule animale ?",
              options: ["Le noyau", "La membrane plasmique", "Les mitochondries", "Les chloroplastes"],
              answer: 3,
              why: "Les deux cellules ont un noyau, une membrane et des mitochondries ; seule la cellule végétale chlorophyllienne possède des chloroplastes (et une paroi).",
            },
            {
              q: "De quoi la membrane plasmique est-elle principalement constituée ?",
              options: ["D'un réseau de cellulose rigide", "De lipides et de protéines", "D'ADN et de ribosomes", "D'amidon"],
              answer: 1,
              why: "La membrane plasmique est une bicouche lipidique dans laquelle sont insérées des protéines ; la cellulose forme la paroi végétale.",
            },
            {
              q: "Une levure est une cellule :",
              options: ["Procaryote sans paroi", "Eucaryote à chloroplastes", "Procaryote à noyau", "Eucaryote avec une paroi"],
              answer: 3,
              why: "La levure est un champignon unicellulaire : elle possède un noyau (eucaryote) et une paroi, mais pas de chloroplastes.",
            },
          ],
          trap: "Croire que toute cellule végétale possède des chloroplastes, ou que la paroi remplace la membrane plasmique : les cellules de racine n'ont pas de chloroplastes, et la cellule végétale a une paroi en plus de sa membrane.",
          method: "Pour identifier une cellule, posez-vous les questions toujours dans le même ordre : y a-t-il un noyau ? une paroi, et de quelle nature ? des chloroplastes ? Chaque réponse doit être justifiée par un élément observé.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'adn-information',
          title: "L'ADN, support de l'information génétique",
          minutes: 30,
          objectives: [
            "Décrire la structure de l'ADN : une double hélice formée de deux chaînes de nucléotides complémentaires.",
            "Expliquer que la séquence des nucléotides constitue une information et définir les notions de gène, d'allèle et de mutation.",
            "Exploiter la règle de complémentarité des bases pour écrire un brin d'ADN ou calculer des proportions de bases.",
            "Argumenter l'universalité de l'ADN à partir d'expériences historiques ou de transgenèse.",
          ],
          course: [
            {
              heading: "Une molécule présente dans toutes les cellules",
              paragraphs: [
                "L'ADN (acide désoxyribonucléique) est présent dans toutes les cellules. Chez les eucaryotes, il se trouve surtout dans le noyau, où il forme les chromosomes, chacun constitué d'une très longue molécule d'ADN associée à des protéines ; un peu d'ADN se trouve aussi dans les mitochondries et les chloroplastes. Chez les bactéries, il est dans le cytoplasme. Une cellule humaine non reproductrice contient 46 chromosomes (23 paires) ; mis bout à bout, ses filaments d'ADN atteindraient environ 2 mètres.",
                "L'identification de l'ADN comme support de l'information génétique s'est faite par étapes. En 1869, Friedrich Miescher isole dans des noyaux une substance qu'il nomme nucléine. En 1928, Frederick Griffith montre qu'une substance issue de bactéries mortes peut transformer d'autres bactéries. En 1944, Oswald Avery et ses collaborateurs établissent que cette substance est l'ADN. En 1953, James Watson et Francis Crick proposent le modèle de la double hélice, en s'appuyant notamment sur les clichés de diffraction aux rayons X obtenus par Rosalind Franklin.",
              ],
            },
            {
              heading: "Une double hélice de nucléotides",
              paragraphs: [
                "L'ADN est un polymère : une longue chaîne formée par l'enchaînement de petites unités, les nucléotides. Chaque nucléotide est composé d'un groupement phosphate, d'un sucre (le désoxyribose) et d'une base azotée. Il existe quatre bases : l'adénine (A), la thymine (T), la cytosine (C) et la guanine (G). Les nucléotides ne diffèrent que par leur base.",
                "La molécule d'ADN est formée de deux chaînes (ou brins) enroulées l'une autour de l'autre en double hélice, d'un diamètre de 2 nm. Les deux brins sont reliés par leurs bases, qui s'associent toujours de la même façon : A en face de T, C en face de G. On dit que les bases sont complémentaires et que les deux brins sont complémentaires. Connaître la séquence d'un brin permet donc de déduire celle de l'autre.",
                "Conséquence chiffrée : dans un ADN double brin, il y a autant d'adénine que de thymine et autant de cytosine que de guanine. Ce constat, fait par Erwin Chargaff vers 1950 avant même la découverte de la double hélice, a servi d'argument au modèle de Watson et Crick.",
              ],
              box: { label: "Règle", text: "Complémentarité des bases : A s'associe à T, C s'associe à G. Dans un ADN double brin : %A = %T et %C = %G, donc %A + %C = 50 %." },
            },
            {
              heading: "La séquence des nucléotides, une information",
              paragraphs: [
                "L'ordre des nucléotides le long d'un brin, appelé séquence, varie d'une portion d'ADN à l'autre. Cette séquence constitue une information, comme l'ordre des lettres forme un texte : avec seulement quatre « lettres », le nombre de séquences possibles est immense. Pour une séquence de n nucléotides, il existe 4ⁿ combinaisons ; pour 10 nucléotides seulement, 4¹⁰ = 1 048 576 séquences différentes.",
                "Un gène est une portion d'ADN, située à un emplacement précis d'un chromosome (son locus), dont la séquence porte l'information nécessaire à la fabrication d'une protéine. Le génome humain compte environ 20 000 gènes codant des protéines. Un même gène peut exister sous plusieurs versions, appelées allèles, qui diffèrent par quelques nucléotides ; par exemple, les allèles A, B et O du gène qui détermine les groupes sanguins.",
                "Les allèles naissent par mutation : une modification de la séquence de l'ADN, le plus souvent due à une erreur lors de la copie de l'ADN avant la division cellulaire, ou provoquée par des agents mutagènes (rayons ultraviolets, certaines substances chimiques). Les mutations sont rares et aléatoires. Elles sont la source de la diversité génétique.",
              ],
              box: { label: "Définition", text: "Gène : portion d'ADN dont la séquence de nucléotides porte l'information permettant de fabriquer une protéine. Allèle : une des versions d'un gène. Mutation : modification de la séquence de l'ADN." },
            },
            {
              heading: "Une molécule universelle",
              paragraphs: [
                "L'ADN a la même structure chez tous les êtres vivants : mêmes nucléotides, même double hélice, même règle de complémentarité. Surtout, l'information qu'il porte est lue de la même façon dans toutes les cellules. C'est ce qu'exploite la transgenèse : on transfère un gène d'une espèce dans une autre, qui l'exprime. Depuis le début des années 1980, de l'insuline humaine est produite par des bactéries dans lesquelles on a introduit le gène humain de l'insuline. Le gène de la GFP, une protéine fluorescente d'une méduse, fait briller les organismes qui le reçoivent.",
                "Cette universalité est un argument fort en faveur d'une origine commune de tous les êtres vivants : ils ont hérité de ce même système d'information d'un ancêtre commun.",
              ],
              box: { label: "À retenir", text: "L'ADN est le support universel de l'information génétique : sa structure est la même chez tous les êtres vivants, et un gène transféré d'une espèce à une autre peut y être exprimé." },
            },
          ],
          keyPoints: [
            "L'ADN est une double hélice de 2 nm de diamètre, formée de deux brins de nucléotides.",
            "Un nucléotide : un phosphate, un sucre (désoxyribose) et une base parmi A, T, C, G.",
            "Complémentarité : A avec T, C avec G ; donc %A = %T et %C = %G.",
            "La séquence des nucléotides est une information : pour n nucléotides, 4ⁿ séquences possibles.",
            "Gène : portion d'ADN qui code une protéine ; allèles : versions d'un gène ; mutation : modification de la séquence, source de nouveaux allèles.",
            "L'ADN est universel : la transgenèse le montre et suggère une origine commune du vivant.",
          ],
          example: {
            statement: "Un fragment d'ADN double brin possède le brin suivant : ATGCCGTAAGCT. a) Écrivez le brin complémentaire. b) Dans un autre ADN double brin, l'adénine représente 22 % des bases : calculez les pourcentages des trois autres bases.",
            solution: [
              "a) On applique la complémentarité base par base : A devient T, T devient A, G devient C, C devient G.",
              "ATGCCGTAAGCT donne : TACGGCATTCGA.",
              "Vérification : chaque paire formée est A-T, T-A, G-C ou C-G, et les deux brins ont bien 12 nucléotides.",
              "b) Dans un ADN double brin, %T = %A = 22 %.",
              "%C + %G = 100 - (22 + 22) = 56 %, et %C = %G, donc %C = %G = 56 ÷ 2 = 28 %.",
              "Réponse : brin complémentaire TACGGCATTCGA ; A = 22 %, T = 22 %, C = 28 %, G = 28 %.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez le brin complémentaire de chacun des brins suivants : a) GGATCCTA ; b) TTAGCAAC. Combien de liaisons A-T le fragment a) contient-il une fois double ?",
              hint: "Associez A à T et C à G, puis comptez les A et les T du premier brin.",
              solution: [
                "a) GGATCCTA a pour brin complémentaire CCTAGGAT.",
                "b) TTAGCAAC a pour brin complémentaire AATCGTTG.",
                "Dans GGATCCTA, on compte A (3e position), T (4e), T (7e) et A (8e) : 4 nucléotides A ou T, donc 4 paires A-T dans le double brin (les 4 autres paires sont des paires C-G).",
                "Résultat : CCTAGGAT ; AATCGTTG ; 4 paires A-T dans le fragment a).",
              ],
            },
            {
              level: 2,
              statement: "a) L'analyse d'un ADN double brin de bactérie indique 34 % de guanine. Calculez les pourcentages des autres bases. b) Un élève affirme qu'un ADN contenant 30 % d'adénine et 25 % de thymine est un ADN double brin. Discutez. c) Combien de séquences différentes peut-on écrire avec 5 nucléotides ? avec 20 ?",
              hint: "Utilisez les égalités %A = %T et %C = %G, et le fait qu'à chaque position il y a 4 bases possibles.",
              solution: [
                "a) %C = %G = 34 %. Il reste 100 - 68 = 32 % pour A et T, donc %A = %T = 16 %.",
                "b) Dans un ADN double brin, %A = %T. Ici 30 % ≠ 25 % : cet ADN ne peut pas être un double brin complémentaire (il pourrait s'agir d'un ADN simple brin, comme chez certains virus).",
                "c) Avec 5 nucléotides : 4⁵ = 1 024 séquences. Avec 20 : 4²⁰ = 1 099 511 627 776, soit plus de mille milliards de séquences.",
                "Résultat : A = T = 16 %, C = G = 34 % ; l'affirmation b) est fausse ; 1 024 et environ 1,1 × 10¹² séquences.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Document 1 : des pneumocoques de souche R sont inoffensifs pour la souris ; ceux de souche S provoquent une pneumonie mortelle. Des souches S tuées par la chaleur sont inoffensives. Document 2 (d'après les travaux d'Avery et de ses collaborateurs, 1944) : on extrait des bactéries S tuées une substance que l'on mélange à des bactéries R vivantes en culture. Résultats : extrait seul, apparition de bactéries S vivantes ; extrait traité par une enzyme qui détruit les protéines, apparition de bactéries S ; extrait traité par une enzyme qui détruit l'ARN, apparition de bactéries S ; extrait traité par une enzyme qui détruit l'ADN, aucune bactérie S. Montrez que ces résultats permettent d'identifier le support de l'information génétique.",
              hint: "Repérez le seul traitement qui supprime la transformation : la molécule détruite par ce traitement est celle qui porte l'information.",
              solution: [
                "Ce que montre le document 1 : le caractère « souche S » se distingue de la souche R, et les bactéries S tuées ne sont plus dangereuses par elles-mêmes.",
                "Extrait seul : des bactéries R deviennent S. L'extrait contient donc une substance capable de transmettre le caractère S aux bactéries R, de façon durable puisque les bactéries S obtenues se multiplient.",
                "Destruction des protéines ou de l'ARN : la transformation a toujours lieu. Ces molécules ne sont donc pas nécessaires à la transformation.",
                "Destruction de l'ADN : la transformation disparaît. L'ADN est donc indispensable.",
                "Conclusion : la substance qui transmet le caractère, donc l'information génétique, est l'ADN. L'ADN des bactéries S introduit dans les bactéries R leur apporte une information nouvelle.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la molécule d'ADN.",
            statements: [
              { text: "L'ADN est formé de quatre sortes de nucléotides, qui diffèrent par leur base.", true: true, why: "Les quatre bases sont A, T, C et G ; le phosphate et le sucre sont les mêmes." },
              { text: "Dans la double hélice, l'adénine s'associe à la guanine.", true: false, why: "L'adénine s'associe à la thymine, et la cytosine à la guanine." },
              { text: "Les bactéries n'ont pas d'ADN puisqu'elles n'ont pas de noyau.", true: false, why: "Toutes les cellules ont de l'ADN ; chez les bactéries, il se trouve dans le cytoplasme." },
              { text: "Deux allèles d'un même gène diffèrent par leur séquence de nucléotides.", true: true, why: "Un allèle est une version d'un gène : sa séquence diffère de celle des autres allèles par un ou quelques nucléotides." },
              { text: "Une mutation est toujours provoquée par un agent extérieur, comme les rayons ultraviolets.", true: false, why: "La plupart des mutations sont des erreurs spontanées lors de la copie de l'ADN ; les agents mutagènes en augmentent la fréquence." },
              { text: "Un gène humain introduit dans une bactérie peut y être exprimé.", true: true, why: "C'est la transgenèse, utilisée pour produire de l'insuline humaine : l'information génétique est lue de la même façon par toutes les cellules." },
              { text: "Dans un ADN double brin, il y a autant de cytosine que de thymine.", true: false, why: "Il y a autant de C que de G et autant de A que de T ; C et T ne sont pas forcément égaux." },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un nucléotide ?",
              options: ["Un phosphate, un sucre et une base", "Un chromosome entier", "Une protéine qui entoure l'ADN dans le noyau", "Le noyau de la cellule"],
              answer: 0,
              why: "L'ADN est une chaîne de nucléotides, chacun formé d'un groupement phosphate, d'un désoxyribose et d'une base azotée.",
            },
            {
              q: "Quel est le brin complémentaire de AGTC ?",
              options: ["AGTC", "CTGA", "TCAG", "GACT"],
              answer: 2,
              why: "A s'associe à T, G à C, T à A et C à G : AGTC donne TCAG.",
            },
            {
              q: "Un ADN double brin contient 40 % de cytosine. Quel est le pourcentage d'adénine ?",
              options: ["40 %", "20 %", "10 %", "60 %"],
              answer: 2,
              why: "%G = %C = 40 %, soit 80 % pour C et G ; il reste 20 % à partager également entre A et T, donc 10 % d'adénine.",
            },
            {
              q: "Comment appelle-t-on les différentes versions d'un même gène ?",
              options: ["Des chromosomes", "Des nucléotides", "Des mutations", "Des allèles"],
              answer: 3,
              why: "Les allèles sont les versions d'un gène, qui diffèrent par leur séquence ; ils sont issus de mutations.",
            },
            {
              q: "Quel argument montre que l'ADN est une molécule universelle ?",
              options: ["Il se trouve toujours dans le noyau, chez tous les êtres vivants", "Un gène d'une espèce peut être exprimé par une autre espèce", "Toutes les espèces ont 46 chromosomes", "Il n'existe qu'un seul gène par chromosome"],
              answer: 1,
              why: "La transgenèse montre que l'information génétique est lue de la même manière par des êtres vivants très différents.",
            },
          ],
          trap: "Confondre gène et allèle : le gène est une portion d'ADN à un emplacement donné (par exemple le gène des groupes sanguins), l'allèle est l'une de ses versions (A, B ou O).",
          method: "Pour un calcul de pourcentage de bases, écrivez toujours les deux égalités %A = %T et %C = %G avant de calculer, puis vérifiez que la somme des quatre pourcentages vaut bien 100 %.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'specialisation-cellulaire',
          title: "La spécialisation des cellules",
          minutes: 30,
          objectives: [
            "Expliquer que toutes les cellules d'un organisme possèdent la même information génétique, issue de la cellule-œuf par divisions successives.",
            "Relier la forme et le contenu d'une cellule spécialisée à sa fonction.",
            "Expliquer que la spécialisation d'une cellule résulte de l'expression d'une partie seulement de ses gènes, sous l'influence de son environnement.",
            "Identifier le rôle de la matrice extracellulaire dans la cohésion des tissus.",
          ],
          course: [
            {
              heading: "Une même information génétique dans toutes les cellules",
              paragraphs: [
                "Tout organisme pluricellulaire issu de la reproduction sexuée provient d'une seule cellule, la cellule-œuf (ou zygote), formée lors de la fécondation. Cette cellule se divise, puis ses cellules filles se divisent à leur tour, et ainsi de suite. Avant chaque division, l'ADN est copié à l'identique (c'est la réplication), puis chaque cellule fille en reçoit un exemplaire complet. Ce type de division, la mitose, produit donc des cellules qui portent la même information génétique que la cellule de départ.",
                "Par conséquent, une cellule de peau, un neurone et une cellule du foie d'une même personne possèdent le même ADN. Il existe quelques exceptions : les cellules reproductrices (gamètes) ne contiennent que la moitié des chromosomes ; les globules rouges des mammifères perdent leur noyau au cours de leur formation ; enfin, de rares mutations peuvent survenir dans une cellule et se transmettre à ses descendantes.",
                "Des expériences l'ont démontré. En 1962, John Gurdon remplace le noyau d'un ovule de grenouille (le xénope) par le noyau d'une cellule d'intestin de têtard : il obtient des têtards normaux. En 1996 naît la brebis Dolly, clonée à partir du noyau d'une cellule de glande mammaire d'une brebis adulte. Le noyau d'une cellule spécialisée contient donc toute l'information nécessaire pour construire un organisme entier.",
              ],
              box: { label: "À retenir", text: "Les cellules d'un organisme sont issues de la cellule-œuf par mitoses successives, précédées chacune d'une copie conforme de l'ADN : elles possèdent toutes la même information génétique (sauf exceptions)." },
            },
            {
              heading: "Des cellules spécialisées : une forme, un contenu, une fonction",
              paragraphs: [
                "Le corps humain compte plus de deux cents types de cellules différents. Chacune est spécialisée : sa forme et son contenu lui permettent d'assurer une fonction précise. Le neurone possède de longs prolongements qui conduisent le message nerveux. Le globule rouge, petit disque souple et sans noyau, est rempli d'hémoglobine, la protéine qui transporte le dioxygène. La cellule musculaire contient des protéines contractiles (actine et myosine) qui lui permettent de se raccourcir. Certaines cellules du pancréas, les cellules bêta, fabriquent l'insuline, une hormone qui fait baisser la glycémie.",
                "Les plantes ont aussi leurs cellules spécialisées : les cellules du parenchyme chlorophyllien de la feuille, riches en chloroplastes, réalisent la photosynthèse ; les cellules de garde des stomates règlent l'ouverture de petits orifices par lesquels passent les gaz ; les cellules des vaisseaux du bois, mortes et à paroi épaissie, forment des tubes qui conduisent la sève brute.",
              ],
            },
            {
              heading: "La spécialisation, une affaire d'expression des gènes",
              paragraphs: [
                "Si toutes les cellules ont les mêmes gènes, comment peuvent-elles être si différentes ? Parce qu'une cellule n'utilise qu'une partie de ses gènes. On dit qu'un gène est exprimé lorsque la cellule s'en sert pour fabriquer la protéine correspondante. Certains gènes sont exprimés dans presque toutes les cellules, par exemple ceux des protéines de la respiration cellulaire. D'autres ne le sont que dans certains types de cellules : le gène de l'insuline est présent dans toutes les cellules, mais il n'est exprimé que dans les cellules bêta du pancréas ; les gènes de l'hémoglobine ne le sont que dans les cellules qui deviendront des globules rouges.",
                "La différenciation est le processus par lequel une cellule acquiert progressivement sa spécialisation au cours du développement. Elle dépend de l'environnement de la cellule : signaux chimiques émis par les cellules voisines, hormones, conditions du milieu. Un exemple végétal le montre : une plantule de haricot qui germe à l'obscurité reste pâle et allongée ; placée à la lumière, elle verdit en quelques jours, car la lumière déclenche dans ses cellules l'expression des gènes nécessaires à la fabrication de la chlorophylle et des chloroplastes.",
              ],
              box: { label: "Définition", text: "Une cellule spécialisée exprime une partie seulement de ses gènes. L'ensemble des gènes exprimés, qui dépend de l'histoire de la cellule et de son environnement, détermine les protéines qu'elle fabrique, donc sa forme et sa fonction." },
            },
            {
              heading: "La matrice extracellulaire : le lien entre les cellules",
              paragraphs: [
                "Dans un tissu, les cellules ne sont pas seulement accolées : elles sont souvent entourées d'une matrice extracellulaire, un ensemble de molécules qu'elles ont fabriquées et sécrétées à l'extérieur. Chez les animaux, la principale protéine de cette matrice est le collagène, abondant dans la peau, les tendons, le cartilage et l'os, où il est associé à des minéraux de phosphate de calcium qui le rendent dur.",
                "Chez les végétaux, la paroi qui entoure chaque cellule est une matrice extracellulaire faite surtout de cellulose ; dans le bois, elle est renforcée par la lignine. La matrice assure la cohésion et la résistance mécanique des tissus et intervient dans les échanges et la communication entre cellules. Sa composition dépend, elle aussi, des gènes exprimés par les cellules qui la produisent.",
              ],
            },
          ],
          keyPoints: [
            "Toutes les cellules d'un organisme proviennent de la cellule-œuf par mitoses : elles ont la même information génétique.",
            "Exceptions : gamètes (moitié des chromosomes), globules rouges des mammifères (sans noyau), rares mutations.",
            "Gurdon (1962) et Dolly (1996) : le noyau d'une cellule spécialisée contient toute l'information génétique de l'organisme.",
            "Une cellule spécialisée n'exprime qu'une partie de ses gènes ; les protéines fabriquées déterminent sa forme et sa fonction.",
            "La différenciation dépend de l'environnement de la cellule (signaux des cellules voisines, hormones, lumière chez les plantes).",
            "La matrice extracellulaire (collagène chez l'animal, cellulose chez le végétal) assure la cohésion des tissus.",
          ],
          example: {
            statement: "Une cellule bêta du pancréas et un neurone appartiennent à la même personne. Le premier fabrique de l'insuline, le second non. Expliquez cette différence en utilisant les notions d'information génétique et d'expression des gènes.",
            solution: [
              "Rappeler l'origine des deux cellules : elles proviennent toutes deux de la même cellule-œuf par mitoses successives.",
              "En déduire leur information génétique : chaque mitose transmet une copie conforme de l'ADN, donc les deux cellules possèdent les mêmes gènes, y compris le gène de l'insuline.",
              "Expliquer la différence : un gène présent n'est pas forcément exprimé. Dans la cellule bêta, le gène de l'insuline est exprimé ; dans le neurone, il ne l'est pas.",
              "Généraliser : chaque type cellulaire exprime une combinaison particulière de gènes, qui s'est mise en place au cours de sa différenciation sous l'influence de son environnement.",
              "Réponse : les deux cellules ont le même ADN, mais elles n'en expriment pas les mêmes gènes ; seule la cellule bêta exprime le gène de l'insuline.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des cellules suivantes, indiquez une caractéristique de structure ou de contenu et la fonction qu'elle permet : a) globule rouge ; b) neurone ; c) cellule musculaire ; d) cellule du parenchyme chlorophyllien d'une feuille.",
              hint: "Reliez chaque fois un élément visible ou une molécule à une fonction : transport, conduction, contraction, photosynthèse.",
              solution: [
                "a) Globule rouge : rempli d'hémoglobine, sans noyau, souple ; il transporte le dioxygène dans le sang.",
                "b) Neurone : longs prolongements ; il conduit le message nerveux sur de grandes distances.",
                "c) Cellule musculaire : riche en protéines contractiles (actine, myosine) ; elle se contracte et permet le mouvement.",
                "d) Cellule du parenchyme chlorophyllien : riche en chloroplastes ; elle réalise la photosynthèse.",
                "Résultat : chaque fois, la structure de la cellule est adaptée à sa fonction.",
              ],
            },
            {
              level: 2,
              statement: "Document (données fictives) : on recherche, dans trois types de cellules d'une même souris, si quatre gènes sont exprimés. Gène 1 (enzyme de la respiration) : exprimé dans les cellules du foie, du muscle et de la peau. Gène 2 (albumine, protéine du sang fabriquée par le foie) : exprimé seulement dans le foie. Gène 3 (myosine) : exprimé seulement dans le muscle. Gène 4 (kératine) : exprimé seulement dans la peau. a) Ces gènes sont-ils présents dans les trois types de cellules ? Justifiez. b) Classez-les en gènes exprimés partout et gènes spécifiques. c) Expliquez pourquoi le gène 1 est exprimé partout.",
              hint: "Distinguez bien « présent dans l'ADN » et « exprimé ». Demandez-vous quelle fonction toutes les cellules doivent assurer.",
              solution: [
                "a) Oui : les trois types de cellules proviennent de la même cellule-œuf par mitoses ; elles ont le même ADN, donc les quatre gènes, même si elles ne les expriment pas tous.",
                "b) Gène exprimé partout : le gène 1. Gènes spécifiques : le gène 2 (foie), le gène 3 (muscle), le gène 4 (peau).",
                "c) Toutes les cellules vivantes ont besoin d'énergie et la tirent de la respiration cellulaire : l'enzyme codée par le gène 1 leur est nécessaire à toutes.",
                "Résultat : la spécialisation de chaque type cellulaire correspond à l'expression de gènes spécifiques, en plus des gènes communs à toutes les cellules.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Document 1 : dans les années 1960, John Gurdon détruit le noyau d'ovules de xénope (une grenouille) et le remplace par le noyau d'une cellule d'intestin de têtard, cellule spécialisée. Une partie des ovules ainsi obtenus se développe en têtards normaux, dont certains deviennent des grenouilles adultes. Document 2 : ces têtards portent les caractères héréditaires de l'animal qui a fourni le noyau, et non de celui qui a fourni l'ovule. Montrez que ces documents permettent de répondre à la question : une cellule spécialisée a-t-elle perdu une partie de ses gènes ?",
              hint: "Demandez-vous ce qu'il faut, au minimum, comme information génétique pour construire un têtard complet, avec ses neurones, ses muscles et sa peau.",
              solution: [
                "Formuler l'hypothèse à tester : si une cellule spécialisée avait perdu des gènes en se spécialisant, son noyau ne pourrait pas diriger la construction d'un organisme complet.",
                "Exploiter le document 1 : le noyau d'une cellule d'intestin, placé dans un ovule sans noyau, permet le développement d'un têtard normal, qui possède tous les types de cellules.",
                "Exploiter le document 2 : les caractères héréditaires sont ceux du donneur du noyau ; c'est donc bien l'information génétique de ce noyau qui a été utilisée.",
                "Conclure : le noyau de la cellule intestinale contenait toute l'information génétique nécessaire à la construction de l'organisme. La spécialisation ne s'accompagne pas d'une perte de gènes.",
                "Compléter : dans l'intestin, ce noyau n'exprimait qu'une partie de ses gènes ; dans l'ovule, son environnement a changé et il a de nouveau exprimé les gènes du développement. La spécialisation repose sur l'expression des gènes, influencée par l'environnement de la cellule.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque cellule spécialisée à la caractéristique qui lui permet d'assurer sa fonction.",
            pairs: [
              { left: "Globule rouge", right: "Rempli d'hémoglobine, il transporte le dioxygène" },
              { left: "Neurone", right: "De longs prolongements conduisent le message nerveux" },
              { left: "Cellule musculaire", right: "Des protéines contractiles lui permettent de se raccourcir" },
              { left: "Cellule bêta du pancréas", right: "Elle exprime le gène de l'insuline" },
              { left: "Cellule chlorophyllienne", right: "Ses chloroplastes réalisent la photosynthèse" },
              { left: "Cellule de garde", right: "Elle règle l'ouverture d'un stomate" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi les cellules d'un même organisme possèdent-elles la même information génétique ?",
              options: ["Parce qu'elles échangent en permanence leur ADN avec leurs voisines", "Parce qu'elles fabriquent toutes les mêmes protéines", "Parce qu'elles proviennent toutes de la cellule-œuf par mitoses", "Parce qu'elles ont toutes la même forme"],
              answer: 2,
              why: "Chaque mitose est précédée d'une copie conforme de l'ADN : toutes les cellules issues de la cellule-œuf portent la même information.",
            },
            {
              q: "Le gène de l'insuline est présent :",
              options: ["Dans presque toutes les cellules du corps", "Seulement dans les cellules bêta du pancréas", "Seulement dans le sang", "Seulement dans les gamètes"],
              answer: 0,
              why: "Toutes les cellules ont le même ADN, donc ce gène ; mais il n'est exprimé que dans les cellules bêta du pancréas.",
            },
            {
              q: "Quelle cellule humaine ne contient pas de noyau ?",
              options: ["Le neurone", "La cellule du foie", "La cellule musculaire", "Le globule rouge"],
              answer: 3,
              why: "Chez les mammifères, le globule rouge perd son noyau au cours de sa formation.",
            },
            {
              q: "Qu'a montré la naissance de la brebis Dolly en 1996 ?",
              options: ["Qu'une cellule spécialisée perd une partie de ses gènes en se différenciant", "Qu'un noyau de cellule adulte contient tous les gènes", "Que les gamètes ont deux fois plus d'ADN", "Que l'ADN n'est pas le support de l'information génétique"],
              answer: 1,
              why: "Dolly a été obtenue à partir du noyau d'une cellule de glande mammaire : ce noyau contenait tous les gènes nécessaires à un organisme entier.",
            },
            {
              q: "Quelle molécule est la principale protéine de la matrice extracellulaire animale ?",
              options: ["L'hémoglobine", "La cellulose", "Le collagène", "L'insuline"],
              answer: 2,
              why: "Le collagène, abondant dans la peau, les tendons et l'os, assure la cohésion des tissus animaux ; la cellulose est la molécule de la paroi végétale.",
            },
          ],
          trap: "Croire qu'une cellule spécialisée ne possède que les gènes dont elle a besoin : elle les possède tous, mais n'en exprime qu'une partie. « Présent » et « exprimé » ne sont pas synonymes.",
          method: "Face à une question sur la spécialisation, raisonnez en trois temps : même origine (la cellule-œuf), donc même ADN ; gènes exprimés différents ; donc protéines, forme et fonction différentes.",
        },
      ],
    },

    /* ==================================================================== */
    /* LE MÉTABOLISME DES CELLULES                                            */
    /* ==================================================================== */
    {
      id: 'metabolisme',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'metabolisme-notion',
          title: "Le métabolisme : les transformations chimiques de la cellule",
          minutes: 30,
          objectives: [
            "Définir le métabolisme comme l'ensemble des réactions chimiques qui se déroulent dans une cellule ou un organisme.",
            "Décrire une voie métabolique comme une suite de réactions, chacune catalysée par une enzyme spécifique.",
            "Montrer, à partir de documents, que le métabolisme d'une cellule dépend des conditions du milieu.",
            "Expliquer que le métabolisme dépend aussi du génotype, à partir d'un exemple de maladie métabolique.",
          ],
          course: [
            {
              heading: "La cellule, siège de transformations chimiques permanentes",
              paragraphs: [
                "Une cellule vivante est le siège de milliers de réactions chimiques. Elle prélève dans son milieu des molécules (glucose, acides aminés, dioxygène, ions), les transforme et rejette des déchets (dioxyde de carbone, urée chez l'animal). L'ensemble de ces réactions chimiques s'appelle le métabolisme. Il permet à la cellule de produire l'énergie dont elle a besoin, de fabriquer ses propres constituants, de se renouveler et de se diviser.",
                "On distingue deux grands types de réactions. Les réactions de synthèse construisent des molécules complexes à partir de molécules simples : les protéines à partir d'acides aminés, l'amidon ou le glycogène à partir de glucose. Elles consomment de l'énergie. Les réactions de dégradation découpent des molécules complexes en molécules plus simples ; certaines, comme la respiration, libèrent de l'énergie utilisable par la cellule.",
                "Exemple : après un repas, les cellules du foie prélèvent du glucose dans le sang et l'assemblent en glycogène, une molécule de réserve. Entre les repas, elles dégradent ce glycogène et libèrent du glucose dans le sang. La même cellule réalise donc, selon le moment, des synthèses ou des dégradations.",
              ],
              box: { label: "Définition", text: "Le métabolisme est l'ensemble des réactions chimiques qui se déroulent dans une cellule ou un organisme : réactions de synthèse et réactions de dégradation. Les molécules qui y participent s'appellent des métabolites." },
            },
            {
              heading: "Les voies métaboliques",
              paragraphs: [
                "Les transformations de la cellule se font rarement en une seule étape. Le plus souvent, une molécule de départ est transformée en un produit final par une suite de réactions : c'est une voie métabolique. On peut l'écrire A → B → C → D, où B et C sont des métabolites intermédiaires.",
                "Chaque réaction d'une voie est catalysée par une enzyme particulière : une enzyme E1 transforme A en B, une enzyme E2 transforme B en C, une enzyme E3 transforme C en D. Si l'une de ces enzymes manque ou ne fonctionne pas, la voie est bloquée à cette étape : la molécule située juste avant s'accumule, et les molécules situées après ne sont plus produites. Ce raisonnement permet d'interpréter de nombreuses maladies et de nombreuses expériences.",
              ],
              box: { label: "Règle", text: "Dans une voie A → B → C → D, si l'enzyme qui transforme B en C est inactive, B s'accumule et ni C ni D ne sont produits." },
            },
            {
              heading: "Le métabolisme dépend des conditions du milieu",
              paragraphs: [
                "Une même cellule n'a pas toujours le même métabolisme : il dépend de ce qu'elle trouve dans son environnement. La levure de boulanger en est l'exemple classique. En présence de dioxygène, elle dégrade complètement le glucose par la respiration : elle produit du dioxyde de carbone et de l'eau, libère beaucoup d'énergie et se multiplie rapidement. En l'absence de dioxygène, elle réalise une fermentation alcoolique : le glucose n'est que partiellement dégradé, en éthanol et en dioxyde de carbone, et la quantité d'énergie libérée est bien plus faible.",
                "C'est la fermentation qui fait lever la pâte à pain (le dioxyde de carbone forme des bulles) et qui produit l'alcool du vin et de la bière. Chez l'être humain, lors d'un effort intense et bref, les cellules musculaires peuvent elles aussi recourir à une fermentation, dite lactique, qui produit de l'acide lactique. La température, la disponibilité en nutriments ou la présence de certaines substances modifient également le métabolisme.",
              ],
            },
            {
              heading: "Le métabolisme dépend du génotype",
              paragraphs: [
                "Les enzymes sont des protéines, fabriquées à partir de l'information portée par les gènes. Une mutation dans le gène d'une enzyme peut donner un allèle qui code une enzyme inactive : la voie métabolique correspondante est alors bloquée. Le métabolisme d'une cellule dépend donc de son génotype, c'est-à-dire des allèles qu'elle possède.",
                "La phénylcétonurie en est un exemple. Normalement, une enzyme du foie transforme un acide aminé apporté par l'alimentation, la phénylalanine, en un autre acide aminé, la tyrosine. Chez les personnes qui possèdent deux allèles mutés du gène de cette enzyme, la transformation n'a pas lieu : la phénylalanine s'accumule dans le sang et perturbe gravement le développement du cerveau. En France, cette maladie est dépistée chez tous les nouveau-nés, par une goutte de sang prélevée dans les premiers jours de vie. Un régime alimentaire pauvre en phénylalanine, commencé tôt, permet un développement normal.",
                "Cet exemple montre que génotype et environnement agissent ensemble : la maladie a une cause génétique, mais ses effets dépendent de l'alimentation.",
              ],
              box: { label: "À retenir", text: "Le métabolisme d'une cellule dépend à la fois de son génotype (les allèles qui codent ses enzymes) et des conditions de son milieu (dioxygène, nutriments, température)." },
            },
          ],
          keyPoints: [
            "Le métabolisme est l'ensemble des réactions chimiques d'une cellule : synthèses (qui consomment de l'énergie) et dégradations.",
            "Une voie métabolique est une suite de réactions A → B → C → D, chacune catalysée par une enzyme spécifique.",
            "Si une enzyme d'une voie est inactive, le métabolite situé avant s'accumule et les suivants ne sont plus produits.",
            "Le métabolisme dépend du milieu : la levure respire en présence de dioxygène et fermente en son absence.",
            "Le métabolisme dépend du génotype : une mutation peut rendre une enzyme inactive (exemple de la phénylcétonurie).",
          ],
          example: {
            statement: "Des levures sont placées dans une solution de glucose, d'abord bien aérée, puis privée de dioxygène. Dans la solution aérée, on mesure un dégagement de dioxyde de carbone et une consommation de dioxygène, sans éthanol. Dans la solution privée de dioxygène, on mesure un dégagement de dioxyde de carbone et l'apparition d'éthanol. Interprétez ces résultats.",
            solution: [
              "Solution aérée : les levures consomment du dioxygène et rejettent du dioxyde de carbone, sans produire d'éthanol. C'est la respiration : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O.",
              "Solution privée de dioxygène : les levures produisent de l'éthanol et du dioxyde de carbone. C'est la fermentation alcoolique : C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂.",
              "Comparer : ce sont les mêmes cellules, avec le même génotype ; seule la présence de dioxygène a changé.",
              "Conclure : le métabolisme des levures dépend des conditions du milieu. Elles respirent en présence de dioxygène et fermentent en son absence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une voie métabolique s'écrit : A → B → C → D, les trois réactions étant catalysées respectivement par les enzymes E1, E2 et E3. a) Nommez les métabolites intermédiaires. b) Une mutation rend l'enzyme E2 inactive : quelles molécules s'accumulent, lesquelles ne sont plus produites ? c) Même question si c'est E3 qui est inactive.",
              hint: "Une enzyme inactive bloque la voie à son étape : regardez ce qui se trouve juste avant et ce qui se trouve après.",
              solution: [
                "a) Les métabolites intermédiaires sont B et C (A est le métabolite de départ, D le produit final).",
                "b) E2 transforme B en C. Si elle est inactive, B s'accumule (A continue d'être transformé en B par E1), et ni C ni D ne sont produits.",
                "c) E3 transforme C en D. Si elle est inactive, C s'accumule et D n'est plus produit ; A et B sont transformés normalement.",
                "Résultat : le blocage d'une étape entraîne l'accumulation du métabolite qui la précède et l'absence des métabolites qui la suivent.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Dans un bioréacteur fermé contenant une solution de glucose et des levures, des capteurs mesurent le dioxygène et l'éthanol. De 0 à 10 minutes, la concentration en dioxygène passe de 9,0 à 0 mg/L et aucun éthanol n'apparaît. Après 10 minutes, le dioxygène reste à 0 mg/L et la concentration en éthanol augmente régulièrement. Le dioxyde de carbone augmente pendant toute l'expérience. a) Calculez la vitesse moyenne de consommation du dioxygène entre 0 et 10 minutes. b) Identifiez le métabolisme des levures avant et après 10 minutes. c) Expliquez pourquoi le métabolisme change à 10 minutes.",
              hint: "Une vitesse moyenne est une variation divisée par une durée. Associez ensuite chaque période aux produits qui apparaissent.",
              solution: [
                "a) Vitesse = (9,0 - 0) ÷ 10 = 0,9 mg/L par minute.",
                "b) Avant 10 minutes : consommation de dioxygène, production de dioxyde de carbone, pas d'éthanol : les levures respirent. Après 10 minutes : plus de dioxygène, production d'éthanol et de dioxyde de carbone : elles réalisent une fermentation alcoolique.",
                "c) Le bioréacteur est fermé : les levures ont consommé tout le dioxygène disponible. Privées de dioxygène, elles ne peuvent plus respirer et passent à la fermentation.",
                "Résultat : 0,9 mg/L par minute ; respiration puis fermentation, parce que le milieu a changé (épuisement du dioxygène).",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Document 1 : dans le foie, une enzyme transforme la phénylalanine (acide aminé apporté par les aliments) en tyrosine. Document 2 : un enfant atteint de phénylcétonurie possède deux allèles mutés du gène de cette enzyme ; l'enzyme fabriquée est inactive. Document 3 (données fictives) : concentration de phénylalanine dans le sang, en mg/dL : personne non atteinte, 1 ; enfant atteint avec une alimentation normale, 25 ; même enfant après plusieurs semaines de régime pauvre en phénylalanine, 4. Montrez que cet exemple illustre l'influence du génotype et celle de l'environnement sur le métabolisme.",
              hint: "Raisonnez comme pour une voie métabolique bloquée, puis demandez-vous ce que le régime change et ce qu'il ne change pas.",
              solution: [
                "Écrire la voie : phénylalanine → tyrosine, réaction catalysée par une enzyme du foie codée par un gène.",
                "Influence du génotype : chez l'enfant atteint, les deux allèles du gène sont mutés, l'enzyme est inactive, la voie est bloquée. La phénylalanine n'est plus transformée et s'accumule : 25 mg/dL contre 1 chez une personne non atteinte, soit 25 fois plus.",
                "Influence de l'environnement : avec un régime pauvre en phénylalanine, l'apport diminue et la concentration sanguine tombe à 4 mg/dL, alors que le génotype de l'enfant n'a pas changé.",
                "Nuancer : le régime ne guérit pas la cause génétique (l'enzyme reste inactive) ; il limite l'accumulation de la molécule toxique, ce qui explique l'intérêt d'un dépistage précoce.",
                "Conclusion : le métabolisme dépend du génotype (l'allèle muté bloque la voie) et de l'environnement (l'alimentation module la quantité de phénylalanine accumulée).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le métabolisme cellulaire.",
            statements: [
              { text: "Le métabolisme désigne l'ensemble des réactions chimiques d'une cellule ou d'un organisme.", true: true, why: "Il regroupe les réactions de synthèse et les réactions de dégradation." },
              { text: "Une cellule a toujours exactement le même métabolisme, quelles que soient les conditions.", true: false, why: "Le métabolisme dépend du milieu : la levure respire en présence de dioxygène et fermente en son absence." },
              { text: "Chaque réaction d'une voie métabolique est catalysée par une enzyme spécifique.", true: true, why: "Une voie A → B → C → D fait intervenir une enzyme différente à chaque étape." },
              { text: "Si une enzyme d'une voie est inactive, c'est le produit final qui s'accumule.", true: false, why: "C'est le métabolite situé juste avant l'étape bloquée qui s'accumule ; le produit final n'est plus fabriqué." },
              { text: "Une mutation dans un gène peut modifier le métabolisme d'une cellule.", true: true, why: "Les enzymes sont codées par des gènes : un allèle muté peut coder une enzyme inactive." },
              { text: "La fermentation alcoolique libère plus d'énergie que la respiration.", true: false, why: "La fermentation ne dégrade le glucose que partiellement : elle libère beaucoup moins d'énergie que la respiration." },
              { text: "Les réactions de synthèse consomment de l'énergie.", true: true, why: "Construire une grosse molécule (protéine, glycogène) à partir de petites demande de l'énergie." },
            ],
          },
          quiz: [
            {
              q: "Qu'appelle-t-on métabolisme ?",
              options: ["La seule digestion des aliments", "L'ensemble des réactions chimiques d'une cellule", "La division des cellules", "Le transport du sang et des nutriments dans tout le corps"],
              answer: 1,
              why: "Le métabolisme rassemble toutes les réactions chimiques, de synthèse comme de dégradation, qui se déroulent dans une cellule ou un organisme.",
            },
            {
              q: "Dans la voie A → B → C, l'enzyme qui transforme A en B est inactive. Que se passe-t-il ?",
              options: ["C s'accumule", "B s'accumule", "La voie fonctionne normalement", "A s'accumule"],
              answer: 3,
              why: "L'étape A → B est bloquée : A n'est plus transformé et s'accumule, tandis que B et C ne sont plus produits.",
            },
            {
              q: "Que produit la levure en l'absence de dioxygène ?",
              options: ["De l'éthanol et du dioxyde de carbone", "De l'eau et du dioxygène", "De l'amidon", "Du glucose et du dioxygène, comme une plante"],
              answer: 0,
              why: "Privée de dioxygène, la levure réalise une fermentation alcoolique : C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂.",
            },
            {
              q: "Pourquoi le métabolisme dépend-il du génotype ?",
              options: ["Parce que les gènes sont des réactifs consommés par les réactions", "Parce que l'ADN fournit l'énergie des réactions", "Parce que les enzymes sont codées par des gènes", "Parce que les gènes changent avec l'alimentation"],
              answer: 2,
              why: "Chaque enzyme est fabriquée d'après l'information d'un gène : un allèle muté peut donner une enzyme inactive et bloquer une voie.",
            },
            {
              q: "Dans la phénylcétonurie, quelle molécule s'accumule dans le sang ?",
              options: ["La tyrosine", "Le glycogène du foie", "La phénylalanine", "L'éthanol"],
              answer: 2,
              why: "L'enzyme qui transforme la phénylalanine en tyrosine est inactive : la phénylalanine, située avant l'étape bloquée, s'accumule.",
            },
          ],
          trap: "Penser que, dans une voie bloquée, c'est le produit final qui s'accumule. C'est le métabolite situé juste avant l'enzyme inactive qui s'accumule ; tout ce qui vient après disparaît.",
          method: "Pour interpréter une voie métabolique, recopiez-la sous forme de flèches, notez sous chaque flèche le nom de l'enzyme, puis barrez l'étape bloquée : ce qui est avant s'accumule, ce qui est après manque.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'enzymes',
          title: "Les enzymes, catalyseurs du métabolisme",
          minutes: 30,
          objectives: [
            "Définir une enzyme comme une protéine qui catalyse une réaction chimique sans être consommée.",
            "Expliquer le fonctionnement d'une enzyme par la formation d'un complexe enzyme-substrat au niveau du site actif.",
            "Mettre en évidence la double spécificité d'une enzyme (de substrat et d'action).",
            "Interpréter l'influence de la température et du pH sur l'activité enzymatique à partir de résultats expérimentaux.",
          ],
          course: [
            {
              heading: "Des catalyseurs biologiques",
              paragraphs: [
                "À la température du corps, la plupart des réactions du métabolisme seraient extrêmement lentes si elles se produisaient seules. Dans les cellules, elles sont accélérées par des enzymes. Une enzyme est un catalyseur biologique : une molécule qui augmente la vitesse d'une réaction chimique sans être consommée. On la retrouve intacte à la fin de la réaction, prête à agir de nouveau ; c'est pourquoi une très petite quantité d'enzyme suffit à transformer une grande quantité de molécules.",
                "Presque toutes les enzymes sont des protéines. La molécule transformée par une enzyme s'appelle le substrat ; les molécules obtenues sont les produits. Quelques exemples : l'amylase de la salive découpe l'amidon en maltose ; la lactase découpe le lactose (sucre du lait) en glucose et galactose ; la pepsine de l'estomac découpe les protéines en fragments plus courts ; la catalase, présente dans de nombreuses cellules (notamment celles du foie), décompose l'eau oxygénée, toxique : 2 H₂O₂ → 2 H₂O + O₂.",
              ],
              box: { label: "Définition", text: "Une enzyme est une protéine qui catalyse (accélère) une réaction chimique précise sans être modifiée à la fin de la réaction. La molécule transformée est le substrat, les molécules formées sont les produits." },
            },
            {
              heading: "Le site actif et le complexe enzyme-substrat",
              paragraphs: [
                "Une enzyme est une grosse molécule repliée dans l'espace selon une forme précise. Une petite région de sa surface, le site actif, a une forme complémentaire de celle du substrat. Le substrat vient s'y fixer : il se forme un complexe enzyme-substrat. Dans ce complexe, la réaction est facilitée ; le substrat est transformé en produits, qui se détachent du site actif. L'enzyme, libre et intacte, peut alors fixer une nouvelle molécule de substrat.",
                "En 1894, le chimiste Emil Fischer a comparé cette relation à celle d'une clé et d'une serrure : seul le substrat qui a la bonne forme peut se loger dans le site actif. On sait aujourd'hui que le site actif peut légèrement changer de forme au contact du substrat, mais l'image rend bien compte de la complémentarité. La forme de l'enzyme dépend de l'enchaînement de ses acides aminés, donc du gène qui la code.",
              ],
              box: { label: "À retenir", text: "Enzyme + substrat → complexe enzyme-substrat → enzyme + produits. L'enzyme sort intacte de la réaction." },
            },
            {
              heading: "Une double spécificité",
              paragraphs: [
                "Une enzyme est spécifique de son substrat : elle n'agit que sur une molécule, ou sur une famille de molécules très proches, dont la forme correspond à son site actif. L'amylase découpe l'amidon mais pas la cellulose, bien que ces deux molécules soient formées de glucose : les liaisons entre les glucoses n'y sont pas les mêmes. Elle est aussi spécifique de la réaction qu'elle catalyse (spécificité d'action) : elle découpe l'amidon en maltose et ne réalise aucune autre transformation.",
                "Cette double spécificité explique que chaque étape d'une voie métabolique ait sa propre enzyme, et qu'une cellule possède des milliers d'enzymes différentes. Pour mettre en évidence l'action d'une enzyme, on suit la disparition du substrat ou l'apparition d'un produit, en comparant toujours avec un tube témoin sans enzyme. L'eau iodée colore l'amidon en bleu-noir ; la liqueur de Fehling, chauffée, forme un précipité rouge brique en présence de certains sucres comme le glucose ou le maltose.",
              ],
            },
            {
              heading: "L'activité enzymatique dépend des conditions du milieu",
              paragraphs: [
                "La température modifie l'activité d'une enzyme. Quand la température s'élève, l'activité augmente jusqu'à une valeur maximale, atteinte à la température optimale (environ 37 °C pour la plupart des enzymes humaines). Au-delà, l'activité chute rapidement : la chaleur déforme la protéine, et le site actif perd sa forme. Cette dénaturation est irréversible : une enzyme chauffée à 90 °C puis refroidie ne retrouve pas son activité. À basse température, l'activité est très faible mais l'enzyme n'est pas détruite : réchauffée, elle redevient active. C'est un des principes de la conservation des aliments au froid.",
                "Le pH agit aussi : chaque enzyme a un pH optimal, adapté au milieu où elle agit. L'amylase salivaire fonctionne au mieux vers pH 7, dans la bouche ; la pepsine, vers pH 2, dans l'estomac très acide ; la trypsine, qui digère les protéines dans l'intestin, vers pH 8. Loin de son pH optimal, une enzyme est peu ou pas active.",
              ],
              box: { label: "Repère", text: "Température optimale des enzymes humaines : environ 37 °C. Froid : activité ralentie, de façon réversible. Forte chaleur : dénaturation irréversible. pH optimal : amylase salivaire vers 7, pepsine vers 2, trypsine vers 8." },
            },
          ],
          keyPoints: [
            "Une enzyme est une protéine qui catalyse une réaction précise sans être consommée.",
            "Le substrat se fixe sur le site actif, de forme complémentaire : il se forme un complexe enzyme-substrat, puis les produits sont libérés.",
            "Double spécificité : de substrat (une molécule précise) et d'action (une réaction précise).",
            "Activité maximale à la température optimale (environ 37 °C chez l'humain) ; dénaturation irréversible à forte chaleur, ralentissement réversible au froid.",
            "Chaque enzyme a un pH optimal : pepsine vers 2, amylase salivaire vers 7, trypsine vers 8.",
            "On suit l'action d'une enzyme par la disparition du substrat ou l'apparition des produits, toujours avec un témoin.",
          ],
          example: {
            statement: "On prépare quatre tubes contenant de l'empois d'amidon. Tube 1 : amylase, 37 °C. Tube 2 : eau à la place de l'amylase, 37 °C. Tube 3 : amylase préalablement bouillie, 37 °C. Tube 4 : amylase, 0 °C. Après 15 minutes, on teste chaque tube à l'eau iodée : le tube 1 reste jaune orangé, les tubes 2, 3 et 4 deviennent bleu-noir. Le tube 4, replacé 15 minutes à 37 °C, ne bleuit plus. Interprétez.",
            solution: [
              "Rappeler le test : l'eau iodée colore l'amidon en bleu-noir ; si elle reste jaune orangé, il n'y a plus d'amidon.",
              "Tube 2 (témoin) : sans amylase, l'amidon est toujours présent après 15 minutes. Il ne disparaît donc pas seul.",
              "Tube 1 : avec l'amylase à 37 °C, l'amidon a disparu. L'amylase a catalysé sa dégradation (en maltose).",
              "Tube 3 : l'amylase bouillie n'agit plus. L'ébullition l'a dénaturée de façon irréversible.",
              "Tube 4 : à 0 °C, l'amidon est encore présent ; replacé à 37 °C, il disparaît. Le froid a seulement ralenti l'enzyme, de façon réversible.",
              "Conclusion : l'amylase catalyse la dégradation de l'amidon ; elle est active à 37 °C, ralentie par le froid de façon réversible, et détruite par la chaleur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque réaction, nommez l'enzyme, le substrat et le ou les produits : a) la lactase découpe le lactose en glucose et galactose ; b) la catalase décompose l'eau oxygénée en eau et dioxygène. c) On verse de l'eau oxygénée sur un morceau de foie frais : il se forme des bulles. Proposez un test pour identifier le gaz dégagé.",
              hint: "Le substrat est la molécule transformée ; les produits sont les molécules obtenues. Le dioxygène entretient les combustions.",
              solution: [
                "a) Enzyme : lactase ; substrat : lactose ; produits : glucose et galactose.",
                "b) Enzyme : catalase ; substrat : eau oxygénée (H₂O₂) ; produits : eau et dioxygène, selon 2 H₂O₂ → 2 H₂O + O₂.",
                "c) Les bulles sont du dioxygène produit par la catalase des cellules du foie. On approche une bûchette incandescente (braise sans flamme) : si elle se rallume, le gaz est du dioxygène.",
                "Résultat : chaque enzyme agit sur un substrat précis, et le test de la bûchette confirme la production de dioxygène.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On mesure l'activité d'une enzyme humaine (en quantité de produit formée par minute) à différentes températures : 0 °C : 2 ; 10 °C : 10 ; 20 °C : 25 ; 30 °C : 45 ; 37 °C : 60 ; 45 °C : 40 ; 55 °C : 10 ; 70 °C : 0. a) Déterminez la température optimale. b) Expliquez la faible activité à 0 °C et l'absence d'activité à 70 °C. c) On place une partie de l'enzyme 10 minutes à 70 °C puis on la ramène à 37 °C ; une autre partie 10 minutes à 0 °C puis à 37 °C. Prévoyez l'activité mesurée dans chaque cas.",
              hint: "Distinguez un ralentissement réversible (froid) d'une destruction de la forme de l'enzyme (chaleur).",
              solution: [
                "a) L'activité est maximale (60) à 37 °C : c'est la température optimale.",
                "b) À 0 °C, les molécules bougent lentement et se rencontrent rarement : l'activité est très faible, mais l'enzyme est intacte. À 70 °C, l'enzyme est dénaturée : son site actif a perdu sa forme, elle ne peut plus fixer le substrat.",
                "c) Partie chauffée à 70 °C puis ramenée à 37 °C : activité nulle (0), car la dénaturation est irréversible.",
                "Partie refroidie à 0 °C puis ramenée à 37 °C : activité d'environ 60, car l'effet du froid est réversible.",
                "Résultat : optimum à 37 °C ; froid réversible, chaleur irréversible.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Document 1 (données fictives) : activité relative (en % du maximum) de deux enzymes digestives humaines selon le pH. Amylase salivaire : pH 2 : 0 % ; pH 4 : 20 % ; pH 7 : 100 % ; pH 9 : 50 %. Pepsine : pH 2 : 100 % ; pH 4 : 40 % ; pH 7 : 0 % ; pH 9 : 0 %. Document 2 : le pH est d'environ 7 dans la bouche, d'environ 2 dans l'estomac et d'environ 8 dans l'intestin grêle, où agissent d'autres enzymes, comme la trypsine et une amylase produite par le pancréas. a) Déterminez le pH optimal de chaque enzyme. b) Expliquez pourquoi la digestion de l'amidon par l'amylase salivaire s'arrête dans l'estomac. c) Expliquez pourquoi la digestion des aliments se poursuit pourtant tout au long du tube digestif.",
              hint: "Mettez en relation le pH optimal de chaque enzyme et le pH de l'organe où elle se trouve.",
              solution: [
                "a) Amylase salivaire : activité maximale à pH 7. Pepsine : activité maximale à pH 2.",
                "b) Dans l'estomac, le pH est d'environ 2 : l'activité de l'amylase salivaire y est nulle (0 % à pH 2). La dégradation de l'amidon commencée dans la bouche s'arrête donc.",
                "La pepsine, au contraire, a son optimum à pH 2 : elle est adaptée au milieu acide de l'estomac, où elle commence la digestion des protéines.",
                "c) Dans l'intestin (pH 8), la pepsine n'agit plus (0 % à pH 7 et 9), mais d'autres enzymes, adaptées à ce pH, prennent le relais : une amylase pancréatique poursuit la digestion de l'amidon et la trypsine celle des protéines.",
                "Conclusion : chaque enzyme digestive est active dans un intervalle de pH qui correspond à l'organe où elle agit ; la succession des enzymes le long du tube digestif permet une digestion complète.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'une réaction catalysée par une enzyme.",
            items: [
              "L'enzyme et le substrat se rencontrent dans le milieu",
              "Le substrat se fixe sur le site actif, de forme complémentaire",
              "Le complexe enzyme-substrat est formé",
              "Le substrat est transformé en produits",
              "Les produits se détachent du site actif",
              "L'enzyme, intacte, peut fixer une nouvelle molécule de substrat",
            ],
          },
          quiz: [
            {
              q: "Quel est le rôle d'une enzyme ?",
              options: ["Fournir l'énergie nécessaire à la réaction chimique", "Accélérer une réaction sans être consommée", "Servir de substrat", "Transporter le dioxygène"],
              answer: 1,
              why: "L'enzyme est un catalyseur : elle accélère une réaction précise et se retrouve intacte à la fin.",
            },
            {
              q: "Comment appelle-t-on la région de l'enzyme où se fixe le substrat ?",
              options: ["Le site actif", "Le noyau", "Le produit", "Le complexe membranaire"],
              answer: 0,
              why: "Le site actif a une forme complémentaire de celle du substrat, qui s'y fixe pour former le complexe enzyme-substrat.",
            },
            {
              q: "Une enzyme chauffée à 90 °C puis refroidie à 37 °C :",
              options: ["Retrouve toute son activité", "Devient plus active qu'avant", "Change de substrat", "Reste inactive"],
              answer: 3,
              why: "La chaleur dénature l'enzyme : son site actif perd sa forme, et cette dénaturation est irréversible.",
            },
            {
              q: "L'amylase découpe l'amidon mais pas la cellulose. Cela illustre :",
              options: ["Sa spécificité de substrat", "Sa dénaturation par la chaleur", "Son pH optimal", "Sa température optimale"],
              answer: 0,
              why: "L'amylase ne reconnaît que les molécules dont la forme correspond à son site actif : c'est la spécificité de substrat.",
            },
            {
              q: "Quel est le pH optimal de la pepsine, enzyme de l'estomac ?",
              options: ["Environ 7", "Environ 12", "Environ 2", "Environ 9"],
              answer: 2,
              why: "La pepsine agit dans l'estomac, très acide : son activité est maximale vers pH 2.",
            },
          ],
          trap: "Confondre l'effet du froid et celui de la chaleur : le froid ralentit l'enzyme de façon réversible, alors que la forte chaleur la dénature de façon irréversible. Une enzyme inactive à 0 °C n'est pas détruite.",
          method: "Dans toute expérience sur les enzymes, identifiez d'abord le tube témoin et le seul facteur qui change d'un tube à l'autre ; chaque conclusion doit comparer un tube à son témoin.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'autotrophie-heterotrophie',
          title: "Autotrophie et hétérotrophie : photosynthèse et respiration",
          minutes: 35,
          objectives: [
            "Distinguer les êtres vivants autotrophes et hétérotrophes selon l'origine de leur matière organique.",
            "Écrire les équations bilans de la photosynthèse et de la respiration et localiser ces deux métabolismes dans la cellule.",
            "Exploiter des mesures d'échanges gazeux pour mettre en évidence la photosynthèse et la respiration.",
            "Comparer respiration et fermentation.",
          ],
          course: [
            {
              heading: "Autotrophes et hétérotrophes",
              paragraphs: [
                "La matière organique est la matière fabriquée par les êtres vivants : glucides (glucose, amidon, cellulose), lipides et protéines. Ses molécules sont construites autour d'atomes de carbone, associés à l'hydrogène, à l'oxygène et souvent à l'azote. La matière minérale, elle, comprend l'eau, le dioxyde de carbone et les ions minéraux (nitrates, phosphates).",
                "Les êtres vivants autotrophes fabriquent leur propre matière organique à partir de matière minérale seulement, en utilisant une source d'énergie. Les plantes, les algues et les cyanobactéries sont autotrophes grâce à la photosynthèse, qui utilise l'énergie de la lumière. Les êtres vivants hétérotrophes ne peuvent pas produire leur matière organique à partir de matière minérale : ils doivent prélever de la matière organique dans leur alimentation. C'est le cas des animaux, des champignons et de la plupart des bactéries. Tous dépendent donc, directement ou indirectement, des autotrophes.",
              ],
              box: { label: "Définition", text: "Autotrophe : être vivant qui produit sa matière organique à partir de matière minérale et d'une source d'énergie (la lumière pour les êtres photosynthétiques). Hétérotrophe : être vivant qui doit prélever de la matière organique dans son milieu." },
            },
            {
              heading: "La photosynthèse, dans le chloroplaste",
              paragraphs: [
                "Dans les cellules chlorophylliennes, les chloroplastes captent l'énergie lumineuse grâce à un pigment vert, la chlorophylle. Cette énergie permet de fabriquer du glucose à partir de dioxyde de carbone (prélevé dans l'air par les stomates) et d'eau (prélevée dans le sol par les racines), avec libération de dioxygène. L'énergie lumineuse est ainsi convertie en énergie chimique, stockée dans les molécules organiques.",
                "Le glucose produit sert ensuite à fabriquer d'autres molécules : de l'amidon, mis en réserve dans les chloroplastes et dans des organes de réserve (comme le tubercule de pomme de terre) ; du saccharose, transporté dans la sève élaborée ; de la cellulose, qui forme les parois. Une expérience classique le montre : on couvre une partie d'une feuille avec un cache opaque, on éclaire la plante, puis on décolore la feuille dans l'alcool chaud et on la plonge dans l'eau iodée. Seules les parties éclairées deviennent bleu-noir : l'amidon n'est produit qu'à la lumière. Avec une feuille panachée (vert et blanc), seules les zones vertes, chlorophylliennes, en produisent.",
              ],
              box: { label: "Formule", text: "Photosynthèse (dans le chloroplaste, à la lumière) : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂." },
            },
            {
              heading: "La respiration, dans la mitochondrie, et la fermentation",
              paragraphs: [
                "Toutes les cellules ont besoin d'énergie pour fonctionner : fabriquer des molécules, se contracter, transporter des substances. Chez les eucaryotes, la respiration cellulaire dégrade complètement le glucose en présence de dioxygène, en dioxyde de carbone et en eau ; elle libère l'énergie chimique contenue dans le glucose sous une forme utilisable par la cellule. Elle se déroule en partie dans le cytoplasme et s'achève dans les mitochondries. Le dioxyde de carbone rejeté se détecte avec l'eau de chaux, qui se trouble.",
                "La respiration a lieu dans les cellules animales comme dans les cellules végétales, de jour comme de nuit. En l'absence de dioxygène, certaines cellules réalisent une fermentation, qui se déroule dans le cytoplasme : la dégradation du glucose est incomplète et libère beaucoup moins d'énergie. La fermentation alcoolique des levures produit de l'éthanol et du dioxyde de carbone ; la fermentation lactique (cellules musculaires, bactéries du yaourt) produit de l'acide lactique.",
              ],
              box: { label: "Formule", text: "Respiration (cytoplasme puis mitochondrie) : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + énergie. Fermentation alcoolique (cytoplasme) : C₆H₁₂O₆ → 2 C₂H₅OH + 2 CO₂ + un peu d'énergie." },
            },
            {
              heading: "Une plante photosynthétise et respire",
              paragraphs: [
                "Une plante est autotrophe, mais ses cellules respirent en permanence, comme les nôtres. À la lumière, la photosynthèse est en général bien plus intense que la respiration : la plante absorbe globalement du dioxyde de carbone et rejette du dioxygène. À l'obscurité, seule la respiration a lieu : la plante absorbe du dioxygène et rejette du dioxyde de carbone. Les cellules non chlorophylliennes (racines, tubercules) ne font que respirer, grâce à la matière organique produite par les feuilles.",
                "Mesurer les échanges gazeux d'une plante à la lumière ne donne donc que le bilan net : production de dioxygène par la photosynthèse moins consommation par la respiration. Pour connaître l'intensité réelle de la photosynthèse, il faut ajouter la respiration, mesurée à l'obscurité. À l'échelle de la planète, photosynthèse et respiration forment les deux moitiés d'un même cycle : la première fixe le carbone minéral dans la matière organique, la seconde le restitue sous forme de dioxyde de carbone.",
              ],
              box: { label: "À retenir", text: "Photosynthèse : matière minérale + énergie lumineuse → matière organique + dioxygène. Respiration : matière organique + dioxygène → matière minérale + énergie utilisable par la cellule. Une plante réalise les deux." },
            },
          ],
          keyPoints: [
            "Autotrophe : produit sa matière organique à partir de matière minérale (plantes, algues). Hétérotrophe : prélève de la matière organique (animaux, champignons).",
            "Photosynthèse, dans le chloroplaste, à la lumière : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.",
            "Respiration, dans le cytoplasme puis la mitochondrie : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + énergie.",
            "Fermentation, sans dioxygène, dans le cytoplasme : dégradation incomplète du glucose, beaucoup moins d'énergie.",
            "Une plante respire jour et nuit ; à la lumière, la photosynthèse l'emporte et le bilan net est un dégagement de dioxygène.",
            "Tests : eau iodée (amidon en bleu-noir), eau de chaux (troublée par le CO₂), bûchette incandescente (rallumée par le O₂).",
          ],
          example: {
            statement: "Données fictives. Une suspension d'algues unicellulaires (chlorelles) est placée dans une enceinte fermée équipée d'une sonde à dioxygène. À l'obscurité, la concentration en dioxygène baisse de 0,1 mg/L par minute. À la lumière, elle augmente de 0,3 mg/L par minute. Interprétez ces résultats et calculez l'intensité réelle de la photosynthèse.",
            solution: [
              "À l'obscurité, il n'y a pas de photosynthèse : la baisse du dioxygène est due à la respiration des chlorelles, qui consomment 0,1 mg/L de dioxygène par minute.",
              "À la lumière, le dioxygène augmente : les chlorelles réalisent la photosynthèse, qui produit du dioxygène.",
              "Mais elles continuent de respirer à la lumière : les 0,3 mg/L par minute mesurés sont un bilan net, égal à la production par la photosynthèse moins la consommation par la respiration.",
              "Production réelle = bilan net + respiration = 0,3 + 0,1 = 0,4 mg/L par minute.",
              "Réponse : la photosynthèse produit 0,4 mg/L de dioxygène par minute ; la respiration en consomme 0,1 en permanence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Classez les êtres vivants suivants en autotrophes et hétérotrophes : chêne, champignon de Paris, vache, algue verte, levure, être humain. b) Écrivez l'équation bilan de la photosynthèse et celle de la respiration. c) Indiquez dans quel organite se déroule chacune d'elles.",
              hint: "Demandez-vous si l'être vivant est chlorophyllien. Les deux équations sont inverses l'une de l'autre.",
              solution: [
                "a) Autotrophes : le chêne et l'algue verte (chlorophylliens, ils réalisent la photosynthèse). Hétérotrophes : le champignon de Paris, la vache, la levure et l'être humain.",
                "b) Photosynthèse : 6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂.",
                "Respiration : C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O (avec libération d'énergie).",
                "c) La photosynthèse se déroule dans les chloroplastes ; la respiration commence dans le cytoplasme et s'achève dans les mitochondries.",
                "Résultat : deux autotrophes, quatre hétérotrophes ; deux équations inverses, dans deux organites différents.",
              ],
            },
            {
              level: 2,
              statement: "On donne les masses molaires : C = 12 g/mol, H = 1 g/mol, O = 16 g/mol. a) Calculez les masses molaires du glucose (C₆H₁₂O₆), du dioxyde de carbone, de l'eau et du dioxygène. b) Vérifiez que l'équation de la photosynthèse respecte la conservation de la masse pour une mole de glucose produite. c) Quelle masse de dioxyde de carbone une plante doit-elle absorber pour produire 90 g de glucose ? Quelle masse de dioxygène rejette-t-elle alors ?",
              hint: "D'après l'équation, une mole de glucose est produite à partir de six moles de CO₂ et libère six moles de O₂.",
              solution: [
                "a) Glucose : 6 × 12 + 12 × 1 + 6 × 16 = 72 + 12 + 96 = 180 g/mol. CO₂ : 12 + 2 × 16 = 44 g/mol. H₂O : 2 × 1 + 16 = 18 g/mol. O₂ : 2 × 16 = 32 g/mol.",
                "b) Réactifs : 6 × 44 + 6 × 18 = 264 + 108 = 372 g. Produits : 180 + 6 × 32 = 180 + 192 = 372 g. La masse est conservée.",
                "c) 90 g de glucose correspondent à 90 ÷ 180 = 0,5 mol. Il faut 6 × 0,5 = 3 mol de CO₂, soit 3 × 44 = 132 g.",
                "Dioxygène rejeté : 6 × 0,5 = 3 mol, soit 3 × 32 = 96 g.",
                "Vérification : 132 g de CO₂ + 3 × 18 = 54 g d'eau = 186 g, et 90 g de glucose + 96 g de O₂ = 186 g.",
                "Résultat : 132 g de dioxyde de carbone absorbés et 96 g de dioxygène rejetés.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Données fictives. Document 1 : une suspension de chlorelles est placée dans une enceinte fermée ; une sonde mesure le dioxygène dissous. De 0 à 4 min, l'enceinte est éclairée : la concentration passe de 8,0 à 9,2 mg/L. De 4 à 8 min, elle est à l'obscurité : la concentration passe de 9,2 à 8,8 mg/L. Document 2 : on refait l'expérience avec des cellules de champignon (levures) bien aérées ; la concentration baisse de 0,2 mg/L par minute, que l'enceinte soit éclairée ou non. a) Calculez la variation moyenne de dioxygène par minute dans chaque phase du document 1. b) Interprétez ces variations et calculez l'intensité de la photosynthèse. c) Expliquez les résultats du document 2 et concluez sur les métabolismes des chlorelles et des levures.",
              hint: "À l'obscurité, seule la respiration agit. À la lumière, la mesure est un bilan : photosynthèse moins respiration. Une levure n'est pas chlorophyllienne.",
              solution: [
                "a) Lumière : (9,2 - 8,0) ÷ 4 = 1,2 ÷ 4 = +0,3 mg/L par minute. Obscurité : (8,8 - 9,2) ÷ 4 = -0,4 ÷ 4 = -0,1 mg/L par minute.",
                "b) À l'obscurité, la baisse traduit la respiration des chlorelles : elles consomment 0,1 mg/L de dioxygène par minute.",
                "À la lumière, la hausse montre que la photosynthèse produit plus de dioxygène que la respiration n'en consomme. En supposant que la respiration garde la même intensité à la lumière : photosynthèse = 0,3 + 0,1 = 0,4 mg/L par minute.",
                "c) Les levures consomment du dioxygène à la même vitesse à la lumière et à l'obscurité : elles respirent, mais ne réalisent pas de photosynthèse, car elles ne possèdent ni chlorophylle ni chloroplastes.",
                "Conclusion : les chlorelles sont autotrophes (photosynthèse à la lumière) et respirent en permanence ; les levures sont hétérotrophes et ne font que respirer.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : photosynthèse, respiration et fermentation.",
            statements: [
              { text: "Les plantes respirent uniquement la nuit.", true: false, why: "Leurs cellules respirent en permanence ; le jour, la photosynthèse, plus intense, masque la respiration dans le bilan des échanges gazeux." },
              { text: "La photosynthèse se déroule dans les chloroplastes.", true: true, why: "La chlorophylle des chloroplastes capte l'énergie lumineuse nécessaire à la synthèse du glucose." },
              { text: "Les champignons sont des autotrophes.", true: false, why: "Les champignons ne sont pas chlorophylliens : ils prélèvent de la matière organique, ce sont des hétérotrophes." },
              { text: "La respiration libère de l'énergie utilisable par la cellule.", true: true, why: "La dégradation complète du glucose en CO₂ et H₂O libère l'énergie chimique qu'il contenait." },
              { text: "Le dioxygène rejeté par la photosynthèse est un déchet de la respiration.", true: false, why: "C'est l'inverse : la respiration consomme du dioxygène ; la photosynthèse en produit." },
              { text: "Une cellule de racine de carotte réalise la respiration mais pas la photosynthèse.", true: true, why: "Elle n'a pas de chloroplastes, mais possède des mitochondries et utilise la matière organique venue des feuilles." },
              { text: "La fermentation se déroule dans les mitochondries.", true: false, why: "La fermentation se déroule dans le cytoplasme, sans dioxygène." },
            ],
          },
          quiz: [
            {
              q: "Un être vivant hétérotrophe :",
              options: ["Produit sa matière organique à partir de matière minérale", "Doit prélever de la matière organique dans son milieu", "Possède forcément des chloroplastes", "Ne respire pas"],
              answer: 1,
              why: "L'hétérotrophe ne sait pas fabriquer sa matière organique à partir de matière minérale : il la prélève dans son alimentation.",
            },
            {
              q: "Quels sont les réactifs de la photosynthèse ?",
              options: ["Glucose et dioxygène", "Dioxygène et sels minéraux du sol", "Glucose et eau", "Dioxyde de carbone et eau"],
              answer: 3,
              why: "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ : le dioxyde de carbone et l'eau sont transformés en glucose et dioxygène, grâce à la lumière.",
            },
            {
              q: "Dans quel organite s'achève la respiration cellulaire ?",
              options: ["La mitochondrie", "Le chloroplaste", "Le noyau", "La vacuole"],
              answer: 0,
              why: "La respiration commence dans le cytoplasme et s'achève dans les mitochondries.",
            },
            {
              q: "Quel réactif permet de mettre en évidence l'amidon dans une feuille ?",
              options: ["L'eau de chaux", "La liqueur de Fehling", "L'eau iodée", "L'alcool"],
              answer: 2,
              why: "L'eau iodée colore l'amidon en bleu-noir ; l'alcool sert seulement à décolorer la feuille avant le test.",
            },
            {
              q: "Par rapport à la respiration, la fermentation :",
              options: ["Libère plus d'énergie", "Se déroule dans les chloroplastes", "Consomme plus de dioxygène", "Libère moins d'énergie"],
              answer: 3,
              why: "La fermentation dégrade le glucose de façon incomplète, sans dioxygène : elle libère beaucoup moins d'énergie que la respiration.",
            },
          ],
          trap: "Croire que les plantes ne respirent pas, ou seulement la nuit. Leurs cellules respirent jour et nuit ; à la lumière, la mesure des échanges gazeux n'est qu'un bilan net qui cache la respiration.",
          method: "Pour retenir les deux équations, apprenez celle de la photosynthèse, puis écrivez la respiration en inversant réactifs et produits ; vérifiez ensuite que chaque côté compte 6 C, 12 H et 18 O.",
        },
      ],
    },

    /* ==================================================================== */
    /* LA BIODIVERSITÉ, RÉSULTAT ET ÉTAPE DE L'ÉVOLUTION                      */
    /* ==================================================================== */
    {
      id: 'biodiversite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'echelles-biodiversite',
          title: "Les trois échelles de la biodiversité",
          minutes: 25,
          objectives: [
            "Définir la biodiversité et distinguer ses trois échelles : écosystèmes, espèces, diversité génétique.",
            "Décrire un écosystème comme l'association d'un biotope et d'une biocénose en interaction.",
            "Caractériser la diversité des espèces d'un milieu par sa richesse spécifique et l'abondance relative de chaque espèce.",
            "Expliquer que la diversité génétique d'une espèce repose sur la diversité des allèles entre individus.",
          ],
          course: [
            {
              heading: "La biodiversité, la diversité du vivant à toutes les échelles",
              paragraphs: [
                "Le mot biodiversité, contraction de « diversité biologique », s'est répandu à la fin des années 1980, puis a été consacré par la Convention sur la diversité biologique, signée au Sommet de la Terre de Rio de Janeiro en 1992. Il désigne la diversité du vivant considérée à trois échelles emboîtées : la diversité des écosystèmes, la diversité des espèces, et la diversité génétique, c'est-à-dire la diversité des allèles au sein de chaque espèce.",
                "La biodiversité comprend aussi les interactions entre les êtres vivants (prédation, pollinisation, symbiose, compétition) et avec leur milieu. Elle n'est pas figée : elle change au cours du temps, à toutes les échelles, sous l'effet des processus naturels et des activités humaines.",
              ],
              box: { label: "Définition", text: "La biodiversité est la diversité du vivant à trois échelles : la diversité des écosystèmes, la diversité des espèces (diversité spécifique) et la diversité génétique (diversité des allèles entre les individus d'une même espèce)." },
            },
            {
              heading: "La diversité des écosystèmes",
              paragraphs: [
                "Un écosystème est formé d'un milieu de vie, le biotope, caractérisé par ses conditions physiques et chimiques (climat, lumière, sol, eau, température), et de l'ensemble des êtres vivants qui l'occupent, la biocénose, reliés entre eux et avec le biotope par de multiples interactions. Une mare, une hêtraie, une prairie de fauche, un récif corallien ou une dune littorale sont des écosystèmes.",
                "Un même territoire juxtapose souvent plusieurs écosystèmes : une vallée peut associer une rivière, une forêt alluviale, des prairies humides et des champs cultivés. Plus les écosystèmes d'une région sont variés, plus elle offre de milieux de vie différents, donc d'espèces. À l'échelle de la planète, les forêts tropicales humides et les récifs coralliens comptent parmi les écosystèmes les plus riches en espèces.",
              ],
            },
            {
              heading: "La diversité des espèces",
              paragraphs: [
                "Une espèce peut être définie, en première approche, comme un ensemble d'individus qui se ressemblent et qui peuvent se reproduire entre eux en donnant une descendance fertile. Cette définition a des limites (elle ne s'applique pas aux bactéries, ni aux fossiles) : la notion d'espèce sera approfondie dans un chapitre suivant. On connaît aujourd'hui environ deux millions d'espèces décrites ; une étude publiée en 2011 (Mora et ses collaborateurs) a estimé à environ 8,7 millions le nombre total d'espèces d'eucaryotes sur Terre. La grande majorité des espèces reste donc à découvrir, surtout parmi les insectes, les champignons et les êtres vivants microscopiques.",
                "Pour décrire la diversité des espèces d'un milieu, on utilise d'abord la richesse spécifique, c'est-à-dire le nombre d'espèces présentes. Mais deux milieux qui ont la même richesse ne sont pas forcément aussi diversifiés : il faut aussi connaître l'abondance relative de chaque espèce, c'est-à-dire la proportion des individus qui lui appartiennent. Un milieu où une espèce domine très largement est moins diversifié qu'un milieu où les espèces sont représentées de façon équilibrée.",
              ],
              box: { label: "Formule", text: "Abondance relative d'une espèce = nombre d'individus de cette espèce ÷ nombre total d'individus recensés (souvent exprimée en %). Richesse spécifique = nombre d'espèces recensées." },
            },
            {
              heading: "La diversité génétique",
              paragraphs: [
                "Au sein d'une même espèce, les individus ne sont pas identiques. Ils possèdent les mêmes gènes, mais pas toujours les mêmes allèles de ces gènes. Chez l'escargot des haies, la couleur de la coquille (jaune, rose, brune) et la présence de bandes sombres dépendent d'allèles différents. Chez l'être humain, les groupes sanguins A, B, AB et O dépendent des allèles A, B et O d'un même gène. Les variétés de blé ou les races de chiens illustrent aussi la diversité génétique d'une espèce.",
                "Cette diversité est importante pour l'avenir des populations : face à un changement du milieu (nouvelle maladie, réchauffement), une population génétiquement diversifiée a plus de chances de compter des individus capables de survivre et de se reproduire. À l'inverse, une espèce très pauvre en diversité génétique, comme le guépard, est plus vulnérable.",
              ],
              box: { label: "À retenir", text: "Écosystèmes (biotope + biocénose), espèces (richesse et abondance relative), allèles (diversité génétique) : la biodiversité se mesure à ces trois échelles, qui sont liées entre elles." },
            },
          ],
          keyPoints: [
            "La biodiversité est la diversité du vivant à trois échelles : écosystèmes, espèces, diversité génétique.",
            "Un écosystème associe un biotope (milieu physico-chimique) et une biocénose (êtres vivants), en interaction.",
            "Environ deux millions d'espèces sont décrites ; une estimation de 2011 évalue à 8,7 millions le nombre d'espèces d'eucaryotes.",
            "La diversité des espèces se décrit par la richesse spécifique et par l'abondance relative de chaque espèce.",
            "La diversité génétique correspond aux différents allèles portés par les individus d'une même espèce.",
            "Une population génétiquement diversifiée résiste mieux aux changements de son milieu.",
          ],
          example: {
            statement: "Classez les observations suivantes selon l'échelle de biodiversité qu'elles illustrent : a) dans une même portée, des chatons ont des pelages de couleurs différentes ; b) une région de montagne comprend des forêts de conifères, des alpages et des lacs ; c) on recense 35 espèces de libellules autour d'un étang.",
            solution: [
              "Rappeler les trois échelles : écosystèmes, espèces, diversité génétique (allèles dans une espèce).",
              "a) Les chatons appartiennent à la même espèce et diffèrent par un caractère héréditaire : c'est la diversité génétique, due à des allèles différents.",
              "b) Forêts, alpages et lacs sont des milieux de vie différents, avec leurs êtres vivants : c'est la diversité des écosystèmes.",
              "c) 35 espèces différentes recensées dans un milieu : c'est la diversité des espèces (richesse spécifique de 35 pour ce groupe).",
              "Réponse : a) diversité génétique ; b) diversité des écosystèmes ; c) diversité des espèces.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Indiquez à quelle échelle de la biodiversité correspond chaque exemple : a) les allèles A, B et O du gène des groupes sanguins ; b) une mangrove et une forêt tropicale sèche ; c) la présence de 12 espèces d'orchidées dans une pelouse calcaire ; d) les nombreuses variétés de pommes cultivées. Puis précisez, pour la mangrove, ce qui relève du biotope et ce qui relève de la biocénose.",
              hint: "Allèles et variétés relèvent d'une même espèce ; un milieu de vie complet relève des écosystèmes.",
              solution: [
                "a) Diversité génétique (allèles d'un gène au sein de l'espèce humaine).",
                "b) Diversité des écosystèmes (deux milieux de vie différents).",
                "c) Diversité des espèces (richesse spécifique de 12 pour les orchidées).",
                "d) Diversité génétique (les variétés de pommiers appartiennent à la même espèce et diffèrent par leurs allèles).",
                "Mangrove : le biotope comprend l'eau salée, la vase, le climat chaud, les marées ; la biocénose comprend les palétuviers, les crabes, les poissons, les oiseaux et les micro-organismes.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On recense les papillons de deux prairies. Prairie A : espèce 1 : 20 individus ; espèce 2 : 20 ; espèce 3 : 20 ; espèce 4 : 20 ; espèce 5 : 20. Prairie B : espèce 1 : 92 individus ; espèces 2, 3, 4 et 5 : 2 individus chacune. a) Donnez la richesse spécifique de chaque prairie. b) Calculez l'abondance relative de l'espèce 1 dans chaque prairie. c) Laquelle des deux prairies est la plus diversifiée ? Justifiez.",
              hint: "La richesse ne compte que les espèces ; l'abondance relative tient compte du nombre d'individus de chacune.",
              solution: [
                "a) Les deux prairies abritent 5 espèces : même richesse spécifique, 5.",
                "b) Prairie A : 100 individus au total, abondance relative de l'espèce 1 : 20 ÷ 100 = 20 %. Prairie B : 92 + 4 × 2 = 100 individus, abondance relative de l'espèce 1 : 92 ÷ 100 = 92 %.",
                "c) Dans la prairie B, une espèce représente 92 % des individus et les quatre autres seulement 2 % chacune : un promeneur n'y verrait presque que l'espèce 1. Dans la prairie A, les cinq espèces sont également représentées.",
                "Résultat : à richesse égale, la prairie A est la plus diversifiée, car les espèces y sont réparties de façon équilibrée.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Données fictives. Document 1 : chez une espèce d'escargot, la couleur de la coquille est déterminée par plusieurs allèles d'un même gène. Dans la population 1, on compte 60 escargots jaunes, 30 roses et 10 bruns ; dans la population 2, isolée sur une petite île, 100 escargots jaunes. Document 2 : les coquilles jaunes sont plus visibles pour les oiseaux prédateurs dans les sous-bois sombres. a) Calculez la fréquence de chaque couleur dans les deux populations. b) Comparez leur diversité génétique pour ce caractère. c) Le sous-bois s'étend sur les deux sites à la suite d'un reboisement. Quelle population risque le plus de décliner ? Argumentez.",
              hint: "Une population dont tous les individus sont identiques pour un caractère n'a pas de « réserve » d'allèles face à un changement du milieu.",
              solution: [
                "a) Population 1 (100 individus) : jaunes 60 %, roses 30 %, bruns 10 %. Population 2 (100 individus) : jaunes 100 %.",
                "b) Pour ce caractère, la population 1 présente trois couleurs, donc plusieurs allèles : sa diversité génétique est plus grande. La population 2 n'en présente qu'une : sa diversité est très faible.",
                "c) Dans un sous-bois sombre, les escargots jaunes sont plus facilement repérés et mangés. Dans la population 1, les escargots roses et bruns, moins visibles, peuvent survivre et se reproduire : la population peut se maintenir, avec une proportion croissante de coquilles sombres.",
                "Dans la population 2, tous les escargots sont jaunes : aucun individu n'échappe mieux aux prédateurs, et l'île, isolée, ne reçoit pas d'escargots d'autres couleurs.",
                "Conclusion : la population 2 risque le plus de décliner ; la diversité génétique augmente les chances d'une population de se maintenir quand son milieu change.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Biotope", right: "Milieu de vie défini par ses conditions physiques et chimiques" },
              { left: "Biocénose", right: "Ensemble des êtres vivants d'un écosystème" },
              { left: "Richesse spécifique", right: "Nombre d'espèces présentes dans un milieu" },
              { left: "Abondance relative", right: "Proportion des individus appartenant à une espèce" },
              { left: "Diversité génétique", right: "Variété des allèles entre individus d'une même espèce" },
              { left: "Écosystème", right: "Biotope et biocénose en interaction" },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les trois échelles de la biodiversité ?",
              options: ["Cellules, tissus, organes", "Écosystèmes, espèces, diversité génétique", "Animaux, végétaux, champignons et bactéries", "Mers, continents, atmosphère"],
              answer: 1,
              why: "La biodiversité se décrit à l'échelle des écosystèmes, des espèces et des allèles au sein de chaque espèce.",
            },
            {
              q: "Un écosystème est formé :",
              options: ["D'une seule espèce et de son milieu", "Uniquement de l'ensemble des êtres vivants d'un même lieu", "D'une population de même espèce", "D'un biotope et d'une biocénose en interaction"],
              answer: 3,
              why: "L'écosystème associe le milieu physico-chimique (biotope) et l'ensemble des êtres vivants (biocénose), reliés par des interactions.",
            },
            {
              q: "Les groupes sanguins A, B, AB et O illustrent :",
              options: ["La diversité génétique", "La diversité des écosystèmes", "La richesse spécifique", "L'abondance relative"],
              answer: 0,
              why: "Ils dépendent des différents allèles d'un même gène au sein de l'espèce humaine.",
            },
            {
              q: "Deux forêts abritent chacune 10 espèces d'arbres. On peut en conclure qu'elles ont :",
              options: ["La même abondance relative de chaque espèce", "La même diversité génétique", "La même richesse spécifique", "Exactement la même biodiversité"],
              answer: 2,
              why: "La richesse spécifique est le nombre d'espèces ; elle ne dit rien de la répartition des individus entre ces espèces.",
            },
            {
              q: "Combien d'espèces vivantes sont décrites aujourd'hui, en ordre de grandeur ?",
              options: ["Environ 2 000", "Environ 20 000", "Environ 2 millions", "Environ 2 milliards"],
              answer: 2,
              why: "Environ deux millions d'espèces sont décrites, alors que le nombre total d'espèces est estimé à plusieurs millions de plus.",
            },
          ],
          trap: "Réduire la biodiversité au nombre d'espèces : elle comprend aussi la diversité des écosystèmes et la diversité génétique, et deux milieux de même richesse spécifique peuvent être inégalement diversifiés.",
          method: "Pour classer un exemple, posez-vous une seule question : compare-t-on des milieux (écosystèmes), des espèces différentes (diversité spécifique), ou des individus d'une même espèce (diversité génétique) ?",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'capture-recapture',
          title: "Estimer l'effectif d'une population : capture, marquage, recapture",
          minutes: 30,
          objectives: [
            "Expliquer pourquoi l'effectif d'une population est estimé par échantillonnage plutôt que compté.",
            "Calculer l'effectif d'une population par la méthode de capture, marquage, recapture.",
            "Énoncer les conditions de validité de la méthode et prévoir l'effet de leur non-respect sur l'estimation.",
            "Utiliser un intervalle de confiance pour encadrer l'estimation et tenir compte de la fluctuation d'échantillonnage.",
          ],
          course: [
            {
              heading: "Pourquoi estimer plutôt que compter",
              paragraphs: [
                "Une population est l'ensemble des individus d'une même espèce qui vivent dans un même espace au même moment. Connaître son effectif est indispensable pour suivre son évolution, évaluer si elle est menacée ou fixer des quotas de pêche. Mais il est presque toujours impossible de compter tous les individus : ils sont trop nombreux, se déplacent, se cachent, ou occupent un territoire trop vaste.",
                "On réalise donc un échantillonnage : on étudie une partie de la population, puis on extrapole à l'ensemble. Pour des êtres vivants fixés, comme des plantes, on utilise des quadrats, des carrés de surface connue répartis au hasard. Si 10 quadrats de 1 m² comptent en moyenne 12 pieds d'une plante, une prairie de 2 000 m² en abrite environ 12 × 2 000 = 24 000. Pour des animaux mobiles, on utilise la méthode de capture, marquage, recapture.",
              ],
              box: { label: "Définition", text: "Une population est l'ensemble des individus d'une même espèce vivant dans un même espace à un moment donné. Son effectif est le nombre de ces individus." },
            },
            {
              heading: "Le principe de la méthode",
              paragraphs: [
                "Lors d'une première séance, on capture un certain nombre d'individus (n₁), on les marque de façon discrète et durable (pastille, bague, point de peinture sur la coquille ou sur l'élytre), puis on les relâche sur place. On laisse passer un délai suffisant pour qu'ils se mélangent au reste de la population. Lors d'une seconde séance, on capture un nouvel échantillon de n₂ individus, parmi lesquels on compte les individus marqués (m).",
                "L'idée est simple : si les individus marqués se sont bien mélangés, la proportion d'individus marqués dans le second échantillon est à peu près la même que dans toute la population. On écrit donc m ÷ n₂ = n₁ ÷ N, où N est l'effectif cherché, d'où N = n₁ × n₂ ÷ m. Par exemple, si l'on marque 120 individus, puis qu'on en recapture 100 dont 30 marqués, la proportion de marqués est 30 %, et N = 120 × 100 ÷ 30 = 400 individus.",
              ],
              box: { label: "Formule", text: "N = (n₁ × n₂) ÷ m, avec n₁ le nombre d'individus marqués lors de la première capture, n₂ le nombre d'individus de la seconde capture et m le nombre d'individus marqués parmi eux." },
            },
            {
              heading: "Les conditions de validité",
              paragraphs: [
                "Le calcul n'est juste que si plusieurs conditions sont respectées. La population doit être close entre les deux séances : pas de naissances, de morts, d'arrivées ni de départs importants. Les marques ne doivent ni disparaître, ni gêner les animaux, ni les rendre plus visibles pour leurs prédateurs. Les individus marqués doivent se mélanger au hasard avec les autres, et tous les individus doivent avoir la même probabilité d'être capturés.",
                "Si une condition n'est pas respectée, l'estimation est faussée dans un sens prévisible. Si des marques se perdent, ou si les animaux marqués sont davantage mangés, on recapture trop peu d'individus marqués : m est trop petit, et N est surestimé. Si des individus non marqués arrivent entre les deux séances, la proportion de marqués baisse et N est aussi surestimé. Si au contraire les animaux marqués reviennent volontiers dans les pièges (parce qu'ils y ont trouvé de la nourriture), m est trop grand et N est sous-estimé.",
              ],
            },
            {
              heading: "Fluctuation d'échantillonnage et intervalle de confiance",
              paragraphs: [
                "Si l'on répète la seconde capture, on n'obtient pas exactement le même nombre d'individus marqués : c'est la fluctuation d'échantillonnage. L'estimation de N n'est donc pas une valeur exacte. On peut l'encadrer grâce à un intervalle de confiance. Si f est la fréquence des individus marqués dans un échantillon de taille n, avec n ≥ 25 et 0,2 ≤ f ≤ 0,8, la proportion p d'individus marqués dans toute la population se trouve, avec un niveau de confiance de 95 %, dans l'intervalle [f - 1/√n ; f + 1/√n].",
                "On en déduit un encadrement de N, puisque N = n₁ ÷ p. Avec l'exemple précédent (n₁ = 120, n = 100, f = 0,3), 1/√100 = 0,1 et p est dans [0,2 ; 0,4]. Donc N est compris entre 120 ÷ 0,4 = 300 et 120 ÷ 0,2 = 600 individus. Plus l'échantillon est grand, plus l'intervalle est étroit et l'estimation précise.",
              ],
              box: { label: "À retenir", text: "Intervalle de confiance à 95 % d'une proportion : [f - 1/√n ; f + 1/√n], pour n ≥ 25 et 0,2 ≤ f ≤ 0,8. La plus grande proportion donne le plus petit effectif : N est compris entre n₁ ÷ (f + 1/√n) et n₁ ÷ (f - 1/√n)." },
            },
          ],
          keyPoints: [
            "Une population est l'ensemble des individus d'une même espèce vivant dans un même espace au même moment.",
            "On estime son effectif par échantillonnage : quadrats pour les êtres fixés, capture, marquage, recapture pour les animaux mobiles.",
            "N = (n₁ × n₂) ÷ m : la proportion de marqués dans l'échantillon est supposée égale à celle de la population.",
            "Conditions : population close, marques durables et sans effet, mélange au hasard, même probabilité de capture.",
            "Perte de marques ou arrivée d'individus non marqués : N est surestimé.",
            "Intervalle de confiance à 95 % : [f - 1/√n ; f + 1/√n], pour n ≥ 25 et 0,2 ≤ f ≤ 0,8.",
          ],
          example: {
            statement: "Données fictives. Dans un bois, on capture et marque 120 carabes (des coléoptères), puis on les relâche. Une semaine plus tard, on capture 100 carabes, dont 30 sont marqués. a) Estimez l'effectif de la population. b) Encadrez cette estimation à l'aide d'un intervalle de confiance à 95 %.",
            solution: [
              "Identifier les données : n₁ = 120 (marqués), n₂ = 100 (seconde capture), m = 30 (marqués recapturés).",
              "a) N = n₁ × n₂ ÷ m = 120 × 100 ÷ 30 = 12 000 ÷ 30 = 400 carabes.",
              "b) Fréquence des marqués dans l'échantillon : f = 30 ÷ 100 = 0,3. Les conditions sont réunies : n = 100 ≥ 25 et 0,2 ≤ 0,3 ≤ 0,8.",
              "1/√100 = 1/10 = 0,1, donc la proportion p de marqués dans la population est dans [0,3 - 0,1 ; 0,3 + 0,1] = [0,2 ; 0,4].",
              "N = 120 ÷ p : pour p = 0,4, N = 300 ; pour p = 0,2, N = 600.",
              "Réponse : environ 400 carabes, avec un intervalle de confiance à 95 % de 300 à 600 individus.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Données fictives. Dans un jardin, on capture 80 escargots que l'on marque d'un point de peinture sur la coquille, puis on les relâche. Trois jours plus tard, on capture 60 escargots, dont 12 portent une marque. Estimez l'effectif de la population d'escargots du jardin.",
              hint: "Identifiez n₁, n₂ et m, puis appliquez N = n₁ × n₂ ÷ m.",
              solution: [
                "Données : n₁ = 80, n₂ = 60, m = 12.",
                "N = 80 × 60 ÷ 12 = 4 800 ÷ 12 = 400.",
                "Vérification par les proportions : 12 marqués sur 60, soit 20 % ; 80 marqués représentent 20 % de 400. C'est cohérent.",
                "Résultat : la population compte environ 400 escargots.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Dans une prairie, on capture et marque 150 criquets. Le lendemain, on capture 100 criquets, dont 25 sont marqués. a) Estimez l'effectif de la population. b) Vérifiez que l'on peut utiliser l'intervalle de confiance à 95 %, puis encadrez l'effectif. c) Comment pourrait-on obtenir un encadrement plus précis ?",
              hint: "Calculez f = m ÷ n₂, puis l'intervalle [f - 1/√n ; f + 1/√n] ; la borne haute de la proportion donne la borne basse de l'effectif.",
              solution: [
                "a) N = 150 × 100 ÷ 25 = 15 000 ÷ 25 = 600 criquets.",
                "b) f = 25 ÷ 100 = 0,25 ; n = 100 ≥ 25 et 0,2 ≤ 0,25 ≤ 0,8 : l'intervalle est utilisable. 1/√100 = 0,1, donc p est dans [0,15 ; 0,35].",
                "N = 150 ÷ p : pour p = 0,35, N = 150 ÷ 0,35 ≈ 429 ; pour p = 0,15, N = 150 ÷ 0,15 = 1 000.",
                "c) En capturant un second échantillon plus grand : par exemple, avec n = 400, 1/√400 = 0,05 et l'intervalle de la proportion serait deux fois plus étroit.",
                "Résultat : environ 600 criquets, entre 429 et 1 000 environ avec un niveau de confiance de 95 %.",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Données fictives. Document 1 : dans une mare, on capture et marque 100 tritons, puis on les relâche. Trois semaines plus tard, on capture 80 tritons, dont 16 sont marqués. Document 2 : une étude complémentaire montre que, pendant ces trois semaines, un cinquième des marques s'est effacé, sans que les tritons concernés aient quitté la mare. Document 3 : au même moment, de nombreux jeunes tritons nés dans la mare ont atteint une taille suffisante pour être capturés. a) Calculez l'effectif estimé sans tenir compte des documents 2 et 3. b) Corrigez l'estimation à l'aide du document 2. c) Expliquez dans quel sens le document 3 fausse encore l'estimation, et proposez une amélioration du protocole.",
              hint: "Si des marques s'effacent, le nombre réel d'individus encore marqués dans la mare n'est plus 100. Pour le document 3, demandez-vous si la population est restée close.",
              solution: [
                "a) N = 100 × 80 ÷ 16 = 8 000 ÷ 16 = 500 tritons.",
                "b) Un cinquième des marques s'est effacé : il ne reste que 100 - 100 ÷ 5 = 80 tritons reconnaissables comme marqués. N = 80 × 80 ÷ 16 = 6 400 ÷ 16 = 400 tritons. Sans correction, l'effectif était surestimé de 100 individus.",
                "c) L'arrivée de jeunes tritons non marqués dans la partie capturable de la population augmente le nombre d'individus non marqués : la proportion de marqués dans l'échantillon diminue, et N est surestimé. De plus, l'estimation ne porte plus sur la même population qu'au moment du marquage : la condition de population close n'est pas respectée.",
                "Amélioration : réduire le délai entre les deux captures (quelques jours plutôt que trois semaines, tout en laissant le temps aux tritons de se mélanger), utiliser une marque durable, et éviter la période où les jeunes deviennent capturables.",
                "Résultat : environ 400 tritons après correction du document 2, valeur qui reste probablement surestimée à cause du document 3.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : la méthode de capture, marquage, recapture.",
            statements: [
              { text: "La méthode suppose que la proportion de marqués dans l'échantillon est la même que dans la population.", true: true, why: "C'est le principe du calcul : m ÷ n₂ = n₁ ÷ N." },
              { text: "Il faut recapturer les animaux juste après les avoir relâchés.", true: false, why: "Il faut laisser aux individus marqués le temps de se mélanger au reste de la population, sans attendre trop longtemps." },
              { text: "Si des marques s'effacent, l'effectif est surestimé.", true: true, why: "On recapture moins d'individus reconnus comme marqués : m est trop petit, donc N = n₁ × n₂ ÷ m est trop grand." },
              { text: "Une marque très voyante est un avantage, car on retrouve plus facilement les animaux.", true: false, why: "Une marque voyante peut attirer les prédateurs : les marqués disparaissent davantage et l'estimation est faussée." },
              { text: "Deux recaptures successives donnent toujours exactement le même résultat.", true: false, why: "C'est la fluctuation d'échantillonnage : chaque échantillon diffère un peu, d'où l'utilité d'un intervalle de confiance." },
              { text: "Plus le second échantillon est grand, plus l'intervalle de confiance est étroit.", true: true, why: "La demi-largeur de l'intervalle vaut 1/√n : elle diminue quand n augmente." },
              { text: "La méthode reste valable même si beaucoup d'individus naissent entre les deux captures.", true: false, why: "La population doit être close ; des arrivées d'individus non marqués conduisent à surestimer l'effectif." },
            ],
          },
          quiz: [
            {
              q: "On marque 50 individus, puis on en recapture 40 dont 10 marqués. Quel est l'effectif estimé ?",
              options: ["100", "500", "2 000", "200"],
              answer: 3,
              why: "N = n₁ × n₂ ÷ m = 50 × 40 ÷ 10 = 200.",
            },
            {
              q: "Pourquoi laisse-t-on passer un délai entre le marquage et la recapture ?",
              options: ["Pour que les marques sèchent", "Pour que la population se reproduise", "Pour que les marqués se mélangent aux autres", "Pour que les prédateurs repèrent les marqués"],
              answer: 2,
              why: "Le calcul suppose que les individus marqués sont répartis au hasard dans la population.",
            },
            {
              q: "Les animaux marqués sont davantage mangés par les prédateurs. L'effectif calculé est alors :",
              options: ["Surestimé", "Sous-estimé", "Exact", "Impossible à calculer"],
              answer: 0,
              why: "Moins de marqués survivent, m est trop petit et N = n₁ × n₂ ÷ m est trop grand.",
            },
            {
              q: "Avec f = 0,4 et n = 100, quel est l'intervalle de confiance à 95 % de la proportion ?",
              options: ["[0,39 ; 0,41]", "[0,3 ; 0,5]", "[0,2 ; 0,6]", "[0,35 ; 0,45]"],
              answer: 1,
              why: "1/√100 = 0,1, donc l'intervalle est [0,4 - 0,1 ; 0,4 + 0,1] = [0,3 ; 0,5].",
            },
            {
              q: "Quelle méthode convient pour estimer le nombre de pieds de pâquerettes dans une pelouse ?",
              options: ["La capture, marquage, recapture", "Le comptage exhaustif obligatoire", "Le marquage par bague", "Les quadrats"],
              answer: 3,
              why: "Les plantes sont fixées : on compte les pieds dans des carrés de surface connue, puis on extrapole à la surface totale.",
            },
          ],
          trap: "Se tromper de sens dans l'encadrement : la plus grande proportion de marqués (f + 1/√n) correspond au plus petit effectif, et la plus petite proportion au plus grand effectif.",
          method: "Après chaque calcul, vérifiez l'estimation par les proportions : m ÷ n₂ doit être égal à n₁ ÷ N. Pour discuter un protocole, prenez chaque condition de validité une à une et dites si m sera trop grand ou trop petit.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'biodiversite-temps',
          title: "La biodiversité change au cours du temps",
          minutes: 30,
          objectives: [
            "Expliquer que la biodiversité actuelle n'est qu'une étape de l'histoire du vivant, à partir de l'étude des fossiles.",
            "Définir une crise biologique et situer les cinq grandes crises dans le temps, en particulier celle de la limite Crétacé-Paléogène.",
            "Montrer que la diversité génétique des populations change d'une génération à l'autre.",
            "Identifier les principales causes actuelles d'érosion de la biodiversité liées aux activités humaines.",
          ],
          course: [
            {
              heading: "La biodiversité actuelle, une étape de l'histoire du vivant",
              paragraphs: [
                "La Terre s'est formée il y a environ 4,6 milliards d'années, et les plus anciennes traces de vie connues ont plus de 3,5 milliards d'années. Depuis, des espèces sont apparues et d'autres ont disparu. Les fossiles, restes ou traces d'êtres vivants conservés dans les roches, en témoignent : on y trouve des groupes entiers aujourd'hui disparus, comme les trilobites, les ammonites ou les dinosaures non aviens. La très grande majorité des espèces qui ont existé ont aujourd'hui disparu : la biodiversité actuelle n'en représente qu'une petite partie.",
                "Le registre fossile est incomplet : la fossilisation est rare, elle conserve surtout les parties dures (coquilles, os, dents) et suppose un enfouissement rapide dans des sédiments. Malgré ces lacunes, les fossiles montrent que la biodiversité a changé en permanence, avec des périodes de diversification et des périodes de disparitions massives. Pour situer ces événements, les géologues expriment les durées en millions d'années (Ma).",
              ],
              box: { label: "Définition", text: "Un fossile est un reste (coquille, os, empreinte de feuille) ou une trace (empreinte de pas, terrier) d'un être vivant ancien, conservé dans une roche." },
            },
            {
              heading: "Les crises biologiques",
              paragraphs: [
                "Une crise biologique est la disparition d'une grande proportion des espèces, dans de nombreux groupes et dans tous les milieux, en un temps court à l'échelle géologique. On en reconnaît cinq majeures : à la fin de l'Ordovicien (vers 445 Ma), à la fin du Dévonien (vers 372 Ma), à la limite Permien-Trias (vers 252 Ma, la plus importante, qui a fait disparaître la grande majorité des espèces marines), à la limite Trias-Jurassique (vers 201 Ma) et à la limite Crétacé-Paléogène (66 Ma).",
                "La crise Crétacé-Paléogène est la plus connue : elle voit disparaître les dinosaures non aviens, les ammonites et de nombreux groupes de plancton. Deux causes sont avancées et probablement combinées : la chute d'un astéroïde de plusieurs kilomètres de diamètre, dont le cratère de Chicxulub, au Mexique, porte la trace, et un volcanisme d'une ampleur exceptionnelle en Inde (les trapps du Deccan). La crise Permien-Trias est associée à un volcanisme massif en Sibérie.",
                "Après chaque crise, les groupes survivants se diversifient et occupent les milieux libérés : c'est une radiation. Les mammifères, présents depuis le Trias mais restés de petite taille, se sont considérablement diversifiés après la disparition des dinosaures non aviens. Les crises ont donc profondément orienté l'histoire de la biodiversité.",
              ],
              box: { label: "À retenir", text: "Cinq crises majeures : fin Ordovicien (vers 445 Ma), fin Dévonien (vers 372 Ma), Permien-Trias (vers 252 Ma), Trias-Jurassique (vers 201 Ma), Crétacé-Paléogène (66 Ma). Chacune est suivie d'une diversification des groupes survivants." },
            },
            {
              heading: "La biodiversité change aussi à l'échelle des populations",
              paragraphs: [
                "La biodiversité ne change pas seulement sur des millions d'années. À l'intérieur d'une espèce, la composition génétique des populations varie d'une génération à l'autre. Les mutations, rares et aléatoires, créent de nouveaux allèles ; la reproduction sexuée produit de nouvelles combinaisons d'allèles ; et la fréquence de chaque allèle dans une population peut augmenter ou diminuer au fil des générations.",
                "Ces changements peuvent être observés à l'échelle d'une vie humaine : des populations de bactéries deviennent résistantes à des antibiotiques, des populations d'insectes deviennent résistantes à des insecticides. Les mécanismes qui modifient ainsi la fréquence des allèles, la sélection naturelle et la dérive génétique, sont étudiés dans le chapitre suivant.",
              ],
            },
            {
              heading: "Les activités humaines, moteur actuel des changements",
              paragraphs: [
                "Aujourd'hui, la biodiversité diminue rapidement sous l'effet des activités humaines. En 2019, le rapport mondial de l'IPBES (la Plateforme intergouvernementale scientifique et politique sur la biodiversité et les services écosystémiques) a estimé qu'environ un million d'espèces animales et végétales sont menacées d'extinction. Il identifie cinq causes directes principales : le changement d'usage des terres et de la mer (déforestation, urbanisation, agriculture intensive), l'exploitation directe des organismes (pêche, chasse, cueillette), le changement climatique, les pollutions et les espèces exotiques envahissantes.",
                "La rapidité de ce déclin conduit de nombreux scientifiques à se demander si une sixième crise biologique est en cours. Des réponses existent : aires protégées, continuités écologiques (trame verte et bleue en France), limitation des prélèvements, lutte contre les pollutions. La biodiversité actuelle est à la fois le résultat de l'évolution passée et une étape de son évolution future, que les sociétés humaines influencent désormais fortement.",
              ],
            },
          ],
          keyPoints: [
            "La Terre a environ 4,6 milliards d'années ; la vie existe depuis plus de 3,5 milliards d'années.",
            "Les fossiles montrent que la plupart des espèces ayant existé ont disparu : la biodiversité actuelle est une étape.",
            "Crise biologique : disparition d'une grande partie des espèces, dans de nombreux groupes, en un temps géologiquement court.",
            "Cinq crises majeures, dont Permien-Trias (vers 252 Ma) et Crétacé-Paléogène (66 Ma) ; chacune est suivie d'une diversification.",
            "La composition génétique des populations change à chaque génération (mutations, fréquences des allèles).",
            "IPBES 2019 : environ un million d'espèces menacées ; cinq causes directes principales, d'abord le changement d'usage des terres et de la mer.",
          ],
          example: {
            statement: "Données fictives. Dans une région, on compte les genres d'organismes marins fossiles dans les couches de roches : 200 genres juste avant la limite Crétacé-Paléogène, 60 genres juste après. Calculez le pourcentage de genres disparus et expliquez pourquoi cet événement est qualifié de crise biologique.",
            solution: [
              "Calculer le nombre de genres disparus : 200 - 60 = 140 genres.",
              "Calculer le pourcentage : 140 ÷ 200 × 100 = 70 %.",
              "Rappeler les critères d'une crise biologique : disparition d'une forte proportion des êtres vivants, dans de nombreux groupes, à l'échelle mondiale, en un temps court à l'échelle géologique.",
              "Confronter : 70 % des genres disparaissent ici ; à la limite Crétacé-Paléogène, d'autres régions du globe et d'autres groupes (dinosaures non aviens, ammonites, plancton) montrent des disparitions simultanées.",
              "Réponse : 70 % des genres ont disparu ; l'ampleur, la rapidité et le caractère mondial de ces disparitions en font une crise biologique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "a) Combien de temps sépare la crise Permien-Trias (vers 252 Ma) de la crise Crétacé-Paléogène (66 Ma) ? b) La Terre a environ 4 600 Ma et les plus anciennes traces de vie environ 3 500 Ma : depuis quelle fraction de l'histoire de la Terre la vie existe-t-elle ? c) Classez du plus ancien au plus récent : crise Trias-Jurassique, crise de la fin de l'Ordovicien, crise Crétacé-Paléogène, crise de la fin du Dévonien.",
              hint: "Les âges sont comptés à partir d'aujourd'hui : plus le nombre de millions d'années est grand, plus l'événement est ancien.",
              solution: [
                "a) 252 - 66 = 186 millions d'années.",
                "b) 3 500 ÷ 4 600 ≈ 0,76 : la vie existe depuis environ 76 % de l'histoire de la Terre, soit plus des trois quarts.",
                "c) Fin de l'Ordovicien (vers 445 Ma), fin du Dévonien (vers 372 Ma), Trias-Jurassique (vers 201 Ma), Crétacé-Paléogène (66 Ma).",
                "Résultat : 186 Ma entre les deux crises ; la vie occupe plus des trois quarts de l'histoire terrestre.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. On a compté, pour un groupe d'animaux marins, le nombre de familles connues à différentes époques : 100 Ma : 80 familles ; 70 Ma : 90 familles ; 65 Ma : 27 familles ; 55 Ma : 45 familles ; 40 Ma : 70 familles. a) Calculez le pourcentage de familles disparues entre 70 et 65 Ma. b) Décrivez l'évolution après 65 Ma et nommez le phénomène observé. c) Montrez que ces données sont compatibles avec la crise Crétacé-Paléogène.",
              hint: "Comparez le nombre de familles avant et juste après la limite de 66 Ma, puis regardez la tendance ensuite.",
              solution: [
                "a) Familles disparues : 90 - 27 = 63. Pourcentage : 63 ÷ 90 × 100 = 70 %.",
                "b) Après 65 Ma, le nombre de familles augmente : 45 à 55 Ma, puis 70 à 40 Ma. Le groupe se diversifie à nouveau : c'est une radiation, qui suit la crise.",
                "c) La chute brutale a lieu entre 70 et 65 Ma, intervalle qui contient la limite Crétacé-Paléogène (66 Ma). La disparition de 70 % des familles en peu de temps, suivie d'une diversification, correspond au schéma d'une crise biologique.",
                "Résultat : 70 % des familles disparaissent ; la crise est suivie d'une radiation : en 25 millions d'années environ, le groupe retrouve une grande partie de sa diversité (70 familles contre 90 avant la crise).",
              ],
            },
            {
              level: 3,
              statement: "Raisonnement à partir de documents. Document 1 (données fictives) : dans une région agricole, un indice d'abondance des oiseaux des champs est passé de 100 à 70 en trente ans ; l'indice des oiseaux des forêts est resté stable. Document 2 (données fictives) : dans la même période, la surface des haies a diminué de moitié et l'usage des insecticides a été multiplié par trois. Document 3 : le rapport de l'IPBES (2019) classe les causes directes d'érosion de la biodiversité : changement d'usage des terres et de la mer, exploitation directe des organismes, changement climatique, pollutions, espèces exotiques envahissantes. a) Calculez le pourcentage de baisse de l'indice des oiseaux des champs. b) Proposez, en vous appuyant sur les documents, deux causes de cette baisse et rattachez-les aux catégories de l'IPBES. c) Peut-on parler de crise biologique à partir de ces seules données ? Argumentez.",
              hint: "Les haies abritent les nids et les insecticides réduisent la nourriture de nombreux oiseaux. Pour c), rappelez les critères d'une crise biologique.",
              solution: [
                "a) Baisse : 100 - 70 = 30 points sur 100, soit 30 %.",
                "b) La disparition de la moitié des haies prive les oiseaux de sites de nidification et d'abri : elle relève du changement d'usage des terres. L'augmentation des insecticides réduit les insectes dont se nourrissent de nombreux oiseaux et peut les intoxiquer : elle relève des pollutions.",
                "Le fait que les oiseaux des forêts restent stables renforce l'hypothèse de causes propres aux milieux agricoles.",
                "c) Une crise biologique se définit par la disparition d'une grande proportion des espèces, dans de nombreux groupes, à l'échelle mondiale. Ici, il s'agit d'une baisse d'abondance (pas forcément de disparitions d'espèces), dans une région et pour un groupe d'oiseaux.",
                "Conclusion : ces données montrent une érosion locale de la biodiversité liée aux activités humaines, mais elles ne suffisent pas à elles seules à parler de crise biologique ; c'est l'accumulation de nombreux constats de ce type, dans le monde entier, qui amène des scientifiques à poser la question d'une sixième crise.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces événements de l'histoire de la biodiversité, du plus ancien au plus récent.",
            items: [
              "Plus anciennes traces de vie connues (plus de 3,5 milliards d'années)",
              "Crise de la fin de l'Ordovicien (vers 445 Ma)",
              "Crise de la fin du Dévonien (vers 372 Ma)",
              "Crise Permien-Trias (vers 252 Ma)",
              "Crise Trias-Jurassique (vers 201 Ma)",
              "Crise Crétacé-Paléogène et disparition des dinosaures non aviens (66 Ma)",
              "Érosion actuelle de la biodiversité liée aux activités humaines",
            ],
          },
          quiz: [
            {
              q: "Quelle crise biologique a vu disparaître les dinosaures non aviens ?",
              options: ["La crise de la fin de l'Ordovicien", "La crise Permien-Trias", "La crise Trias-Jurassique", "La crise Crétacé-Paléogène"],
              answer: 3,
              why: "Les dinosaures non aviens et les ammonites disparaissent lors de la crise Crétacé-Paléogène, il y a 66 millions d'années.",
            },
            {
              q: "Qu'est-ce qu'une crise biologique ?",
              options: ["La disparition d'une seule espèce", "La disparition rapide d'une grande partie des espèces", "L'apparition d'une nouvelle espèce", "Le déclin d'une population locale à la suite d'une pollution"],
              answer: 1,
              why: "Une crise touche une grande proportion des espèces, dans de nombreux groupes, à l'échelle mondiale, en un temps géologiquement court.",
            },
            {
              q: "Que se passe-t-il généralement après une crise biologique ?",
              options: ["Les groupes survivants se diversifient", "Plus aucune espèce n'apparaît", "Les espèces disparues réapparaissent", "La biodiversité reste stable pour toujours"],
              answer: 0,
              why: "Les survivants occupent les milieux libérés et se diversifient : c'est une radiation, comme celle des mammifères après 66 Ma.",
            },
            {
              q: "Selon l'IPBES (2019), combien d'espèces animales et végétales sont menacées d'extinction ?",
              options: ["Environ mille", "Environ cent mille", "Environ dix millions", "Environ un million"],
              answer: 3,
              why: "Le rapport mondial de l'IPBES de 2019 estime qu'environ un million d'espèces sont menacées d'extinction.",
            },
            {
              q: "Quelle crise biologique est considérée comme la plus importante ?",
              options: ["Crétacé-Paléogène", "Fin du Dévonien", "Permien-Trias", "Trias-Jurassique"],
              answer: 2,
              why: "La crise Permien-Trias, vers 252 Ma, a fait disparaître la grande majorité des espèces marines : c'est la plus sévère connue.",
            },
          ],
          trap: "Croire que la crise Crétacé-Paléogène est la plus importante parce qu'elle est la plus connue : c'est la crise Permien-Trias, vers 252 Ma, qui a fait disparaître la plus grande proportion d'espèces.",
          method: "Pour retenir les cinq crises, construisez une frise chronologique graduée en millions d'années, placez-y les cinq dates, puis associez à chacune un groupe touché ou une cause : une image vaut mieux qu'une liste.",
        },
      ],
    },
  ],
}
