import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'technologie-4e',
  chapters: [
    /* ==================================================================== */
    /* BESOINS, USAGES ET ÉVOLUTION DES OBJETS                                */
    /* ==================================================================== */
    {
      id: 'besoins-usages',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'besoin-fonction',
          title: "Du besoin à la fonction d'usage",
          minutes: 30,
          objectives: [
            "Identifier le besoin auquel répond un objet technique.",
            "Formuler la fonction d'usage d'un objet avec un verbe à l'infinitif.",
            "Distinguer fonction d'usage, fonction d'estime et contraintes.",
            "Associer une fonction technique à la solution technique qui la réalise.",
          ],
          course: [
            {
              heading: "Le besoin, point de départ de tout objet",
              paragraphs: [
                "Un besoin est une nécessité ou un désir ressenti par une personne ou un groupe : se déplacer, se nourrir, communiquer, se protéger du froid, se divertir. Pour y répondre, les êtres humains imaginent et fabriquent des objets techniques. Un objet technique est un objet fabriqué par l'être humain pour répondre à un besoin : une paire de ciseaux, un vélo, un réfrigérateur, un smartphone.",
                "Un même besoin peut être satisfait par des objets très différents. Pour le besoin « se déplacer en ville », on peut utiliser un vélo, une trottinette, un bus ou une voiture. À l'inverse, un seul objet peut répondre à plusieurs besoins : un smartphone permet de téléphoner, de prendre des photos, de s'orienter ou d'écouter de la musique.",
                "Les besoins évoluent avec le temps et avec la société. Le besoin de recharger un téléphone portable n'existait pas il y a cinquante ans, puisque ces téléphones n'étaient pas encore vendus au public. C'est souvent un besoin nouveau, ou un besoin mal satisfait, qui pousse à inventer un nouvel objet ou à en améliorer un ancien.",
              ],
              box: { label: "Définition", text: "Le besoin est ce qui est nécessaire ou désiré par l'utilisateur. Un objet technique est un objet fabriqué par l'être humain pour répondre à un besoin." },
            },
            {
              heading: "La fonction d'usage : à quoi sert l'objet ?",
              paragraphs: [
                "La fonction d'usage décrit le service rendu par l'objet à son utilisateur. On l'écrit avec un verbe à l'infinitif suivi d'un complément : un sèche-cheveux sert à « sécher les cheveux », une lampe de bureau à « éclairer le plan de travail », un cadenas à « empêcher l'ouverture d'un casier ».",
                "Pour trouver le besoin, on utilise souvent un outil appelé « bête à cornes ». Il pose trois questions. À qui l'objet rend-il service ? (l'utilisateur). Sur quoi, ou sur qui, agit-il ? (ce qu'il modifie). Dans quel but ? (le besoin). Pour une brosse à dents : elle rend service à son utilisateur, elle agit sur les dents, dans le but de les garder propres et en bonne santé.",
                "La fonction d'usage se formule du point de vue de l'utilisateur, et non de la technique : on écrit « nettoyer les dents », et non « faire tourner une tête de brosse ». La manière dont l'objet s'y prend relève des fonctions techniques, que l'on étudie plus loin.",
              ],
              box: { label: "Repère", text: "La bête à cornes : À qui l'objet rend-il service ? Sur quoi agit-il ? Dans quel but ? La réponse à la dernière question exprime le besoin. La fonction d'usage s'écrit avec un verbe à l'infinitif." },
            },
            {
              heading: "La fonction d'estime et les contraintes",
              paragraphs: [
                "Deux objets qui ont la même fonction d'usage ne se ressemblent pas forcément. Une montre sert toujours à « indiquer l'heure », mais on la choisit aussi pour sa couleur, sa forme, sa marque ou le style qu'elle donne. Ce qui rend l'objet agréable ou désirable, sans changer le service rendu, s'appelle la fonction d'estime.",
                "Un objet doit aussi respecter des contraintes : ce sont des conditions imposées, qui limitent les choix du concepteur. Ce peut être un prix maximal, une masse, des dimensions, des règles de sécurité (pas de petites pièces dans un jouet pour jeune enfant), le respect de l'environnement (matériaux recyclables, faible consommation d'énergie) ou des normes à respecter.",
              ],
              box: { label: "À retenir", text: "Fonction d'usage : le service rendu. Fonction d'estime : ce qui plaît (forme, couleur, marque, matière). Contraintes : les conditions à respecter (coût, sécurité, dimensions, environnement, normes)." },
            },
            {
              heading: "Des fonctions techniques aux solutions techniques",
              paragraphs: [
                "Pour assurer sa fonction d'usage, un objet doit accomplir plusieurs actions plus précises : ce sont ses fonctions techniques. Une lampe torche doit par exemple stocker l'énergie, permettre à l'utilisateur de l'allumer et de l'éteindre, produire de la lumière et diriger le faisceau lumineux.",
                "Chaque fonction technique est réalisée par une solution technique, c'est-à-dire un composant, une pièce ou un matériau choisi par le concepteur. Pour la lampe torche : des piles stockent l'énergie, un interrupteur permet d'allumer et d'éteindre, une LED produit la lumière, un réflecteur dirige le faisceau. Pour une même fonction, il existe souvent plusieurs solutions : une batterie rechargeable peut remplacer les piles.",
              ],
              box: { label: "Définition", text: "Une fonction technique est une action que l'objet doit réaliser pour assurer sa fonction d'usage. Une solution technique est le moyen concret (composant, pièce, matériau) choisi pour réaliser une fonction technique." },
            },
          ],
          keyPoints: [
            "Un objet technique est fabriqué par l'être humain pour répondre à un besoin.",
            "La fonction d'usage est le service rendu ; elle s'écrit avec un verbe à l'infinitif : « sécher les cheveux ».",
            "La bête à cornes pose trois questions : à qui l'objet rend-il service, sur quoi agit-il, dans quel but ?",
            "La fonction d'estime regroupe ce qui rend l'objet agréable ou désirable : forme, couleur, marque, matière.",
            "Les contraintes sont des conditions imposées : coût, sécurité, dimensions, environnement, normes.",
            "Chaque fonction technique est réalisée par une solution technique (un composant, une pièce, un matériau).",
          ],
          example: {
            statement: "Une gourde isotherme garde une boisson fraîche ou chaude pendant plusieurs heures. Elle existe en dix couleurs et doit coûter moins de 25 € (données fictives). Remplir la bête à cornes de cette gourde, puis donner sa fonction d'usage, un élément de sa fonction d'estime et une contrainte.",
            solution: [
              "À qui l'objet rend-il service ? À l'utilisateur, par exemple un randonneur ou un élève.",
              "Sur quoi agit-il ? Sur la boisson qu'il contient.",
              "Dans quel but ? Pour transporter une boisson en la gardant à la bonne température : c'est le besoin.",
              "Fonction d'usage : « transporter une boisson en conservant sa température ».",
              "Fonction d'estime : le choix entre dix couleurs, qui permet à chacun d'avoir une gourde à son goût.",
              "Contrainte : un prix inférieur à 25 €. On pourrait aussi citer : ne pas fuir, pouvoir être lavée, ne contenir aucun matériau dangereux pour la santé.",
              "Réponse : la gourde rend service à l'utilisateur, agit sur la boisson, pour la transporter à la bonne température ; estime : la couleur ; contrainte : le prix.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrire la fonction d'usage de chaque objet avec un verbe à l'infinitif : a) un taille-crayon ; b) un parapluie ; c) un réfrigérateur ; d) un casque de vélo ; e) une calculatrice.",
              hint: "Demandez-vous quel service l'objet rend à son utilisateur, et commencez par un verbe : tailler, protéger, conserver, calculer...",
              solution: [
                "a) Taille-crayon : tailler la pointe d'un crayon.",
                "b) Parapluie : protéger l'utilisateur de la pluie.",
                "c) Réfrigérateur : conserver les aliments au frais.",
                "d) Casque de vélo : protéger la tête du cycliste en cas de chute.",
                "e) Calculatrice : effectuer des calculs.",
                "Résultat : chaque fonction d'usage commence par un verbe à l'infinitif et décrit le service rendu, pas le fonctionnement de l'objet.",
              ],
            },
            {
              level: 2,
              statement: "Voici six caractéristiques d'une trottinette pour enfant (données fictives) : 1) elle permet de se déplacer en poussant avec le pied ; 2) son guidon est décoré de motifs de dinosaures ; 3) elle doit supporter un enfant de 50 kg au maximum ; 4) elle doit respecter la norme de sécurité des jouets ; 5) elle existe en rose, en bleu ou en vert ; 6) elle doit coûter moins de 40 €. Classer chaque caractéristique : fonction d'usage, fonction d'estime ou contrainte.",
              hint: "Fonction d'usage : le service rendu. Fonction d'estime : ce qui plaît sans changer le service. Contrainte : une condition imposée qu'il faut respecter.",
              solution: [
                "1) Se déplacer en poussant avec le pied : c'est le service rendu, donc la fonction d'usage.",
                "2) Les motifs de dinosaures rendent l'objet attrayant sans changer le service : fonction d'estime.",
                "3) Supporter 50 kg au maximum est une condition que le concepteur doit respecter : contrainte.",
                "4) La norme de sécurité des jouets est imposée par la réglementation : contrainte.",
                "5) Le choix des couleurs : fonction d'estime.",
                "6) Un prix inférieur à 40 € : contrainte de coût.",
                "Résultat : fonction d'usage = 1 ; fonction d'estime = 2 et 5 ; contraintes = 3, 4 et 6.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une lampe de bureau à LED comporte : un bloc d'alimentation branché sur une prise, un bouton tactile, une LED, un bras articulé, un pied lesté (alourdi) et un abat-jour orientable. a) Réaliser la bête à cornes de la lampe et écrire sa fonction d'usage. b) Associer chaque élément à la fonction technique qu'il réalise, parmi : fournir l'énergie, allumer et éteindre, produire la lumière, diriger la lumière, régler la position de la lampe, assurer la stabilité. c) Un fabricant remplace le bloc d'alimentation par une batterie que l'on recharge avec un câble USB. La fonction d'usage change-t-elle ? Quelle fonction technique est concernée ? Donner un avantage et un inconvénient de ce choix.",
              hint: "Pour b), demandez-vous pour chaque pièce ce qui se passerait si on l'enlevait. Pour c), rappelez-vous que la fonction d'usage décrit le service rendu, pas la manière de le rendre.",
              solution: [
                "a) À qui la lampe rend-elle service ? À la personne qui travaille à son bureau. Sur quoi agit-elle ? Sur le plan de travail, qu'elle éclaire. Dans quel but ? Pour voir clairement ce que l'on fait, même quand la lumière du jour manque.",
                "Fonction d'usage : « éclairer le plan de travail ».",
                "b) Fournir l'énergie : le bloc d'alimentation. Allumer et éteindre : le bouton tactile. Produire la lumière : la LED. Diriger la lumière : l'abat-jour orientable. Régler la position de la lampe : le bras articulé. Assurer la stabilité : le pied lesté.",
                "c) La fonction d'usage ne change pas : la lampe sert toujours à éclairer le plan de travail. Seule la solution technique de la fonction « fournir l'énergie » change.",
                "Avantage : la lampe fonctionne sans être branchée, on peut donc la déplacer loin d'une prise. Inconvénient : il faut penser à la recharger, et la batterie finit par s'user.",
                "Résultat : fonction d'usage « éclairer le plan de travail » ; six fonctions techniques réalisées par six solutions ; la batterie modifie une solution technique, pas la fonction d'usage.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "Besoin", right: "Ce qui est nécessaire ou désiré par l'utilisateur" },
              { left: "Fonction d'usage", right: "Le service rendu par l'objet" },
              { left: "Fonction d'estime", right: "Ce qui rend l'objet agréable ou désirable" },
              { left: "Contrainte", right: "Une condition imposée au concepteur" },
              { left: "Fonction technique", right: "Une action que l'objet doit réaliser pour fonctionner" },
              { left: "Solution technique", right: "Le composant choisi pour réaliser une fonction" },
            ],
          },
          quiz: [
            {
              q: "Quelle formulation est une fonction d'usage correcte pour un sèche-cheveux ?",
              options: ["Faire tourner un ventilateur", "Posséder une poignée rouge", "Sécher les cheveux", "Coûter moins de 30 €"],
              answer: 2,
              why: "La fonction d'usage décrit le service rendu, avec un verbe à l'infinitif. Faire tourner un ventilateur est une fonction technique, la couleur relève de l'estime et le prix d'une contrainte.",
            },
            {
              q: "La couleur et la forme d'un objet relèvent :",
              options: ["de la fonction d'estime", "de la fonction d'usage", "des contraintes de sécurité", "des fonctions techniques de l'objet"],
              answer: 0,
              why: "La couleur et la forme rendent l'objet plus agréable ou désirable sans changer le service rendu : c'est la fonction d'estime.",
            },
            {
              q: "Dans la bête à cornes, la question « Dans quel but ? » permet de trouver :",
              options: ["l'utilisateur de l'objet", "la matière de l'objet", "ce sur quoi l'objet agit", "le besoin"],
              answer: 3,
              why: "« À qui ? » donne l'utilisateur, « Sur quoi ? » ce que l'objet modifie, et « Dans quel but ? » le besoin auquel l'objet répond.",
            },
            {
              q: "Dans une lampe torche, les piles sont :",
              options: ["une fonction d'usage", "une solution technique", "une fonction d'estime", "un besoin de l'utilisateur"],
              answer: 1,
              why: "Les piles sont le composant choisi pour réaliser la fonction technique « fournir l'énergie » : c'est une solution technique.",
            },
            {
              q: "Lequel de ces éléments est une contrainte ?",
              options: ["Avoir un design moderne et élégant", "Permettre de se déplacer en ville", "Être vendu moins de 50 €", "Porter le logo d'une marque connue"],
              answer: 2,
              why: "Un prix maximal est une condition imposée au concepteur : c'est une contrainte. Le design et la marque relèvent de l'estime, se déplacer de la fonction d'usage.",
            },
          ],
          trap: "Confondre la fonction d'usage avec le fonctionnement de l'objet : « faire tourner un moteur » est une fonction technique, alors que la fonction d'usage décrit le service rendu à l'utilisateur, par exemple « mixer des aliments ».",
          method: "Pour formuler une fonction d'usage, imaginez que vous présentez l'objet à quelqu'un qui ne l'a jamais vu, en une seule phrase qui commence par « Il sert à... » : le verbe qui suit est votre fonction d'usage.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-objets',
          title: "L'évolution des objets techniques",
          minutes: 30,
          objectives: [
            "Situer dans le temps les objets d'une même famille à l'aide d'une frise chronologique.",
            "Identifier le principe technique commun à une famille d'objets et ses changements.",
            "Expliquer les raisons de l'évolution d'un objet : progrès techniques, matériaux, énergie, besoins, société.",
            "Distinguer une invention d'une innovation.",
          ],
          course: [
            {
              heading: "Une famille d'objets qui répondent au même besoin",
              paragraphs: [
                "Depuis toujours, les êtres humains ont cherché à s'éclairer quand la nuit tombe. Ils ont utilisé le feu, puis la bougie et la lampe à huile, puis la lampe à pétrole au XIXe siècle. L'ampoule électrique à incandescence s'est répandue à partir de 1879, grâce aux travaux de Thomas Edison et de Joseph Swan. Plus tard sont venues la lampe fluocompacte puis la lampe à LED.",
                "Tous ces objets répondent au même besoin et ont la même fonction d'usage : éclairer. Ils forment ce que l'on appelle une famille, ou une lignée, d'objets techniques. Ce qui change d'un objet à l'autre, c'est le principe technique, c'est-à-dire la façon de produire la lumière : une flamme, un filament chauffé, un gaz excité par l'électricité, puis un composant électronique, la LED.",
              ],
              box: { label: "Définition", text: "Une famille (ou lignée) d'objets techniques regroupe des objets qui ont la même fonction d'usage. Le principe technique est la manière dont l'objet réalise cette fonction (flamme, filament, LED...)." },
            },
            {
              heading: "Pourquoi les objets évoluent-ils ?",
              paragraphs: [
                "Les progrès des sciences et des techniques rendent possibles de nouvelles solutions. La découverte de l'électricité a permis l'ampoule ; l'électronique et l'informatique ont permis le smartphone. De nouveaux matériaux changent aussi les objets : le plastique a rendu les objets plus légers et moins chers, l'aluminium et la fibre de carbone ont allégé les vélos.",
                "Les sources d'énergie disponibles comptent : la machine à vapeur, puis le moteur à essence, puis le moteur électrique ont transformé les moyens de transport. Les besoins et les modes de vie changent eux aussi : on veut des objets plus pratiques, plus petits, plus rapides, utilisables partout.",
                "Enfin, la société impose ses choix. Pour économiser l'énergie, l'Union européenne a retiré progressivement de la vente la plupart des ampoules à incandescence entre 2009 et 2012, au profit de lampes qui consomment moins. Les préoccupations environnementales poussent aujourd'hui à concevoir des objets plus économes, plus durables et plus faciles à réparer.",
              ],
              box: { label: "À retenir", text: "Un objet évolue grâce aux progrès techniques et scientifiques, aux nouveaux matériaux, aux nouvelles sources d'énergie, à l'évolution des besoins et des modes de vie, et aux règles fixées par la société (sécurité, environnement)." },
            },
            {
              heading: "Invention et innovation",
              paragraphs: [
                "Une invention est une idée ou une création technique nouvelle, qui n'existait pas avant. Elle peut rester à l'état de prototype et ne jamais être vendue. Une innovation est une nouveauté qui est réellement mise sur le marché et adoptée par les utilisateurs : c'est une invention qui réussit à entrer dans la vie quotidienne, ou l'amélioration d'un objet existant.",
                "Certaines innovations améliorent un objet pas à pas : un écran plus grand, une batterie plus durable, un appareil photo meilleur. On parle d'innovation incrémentale. D'autres changent complètement la façon de faire : passer du disque, que l'on achète, à la musique écoutée en ligne a bouleversé la manière d'écouter de la musique. On parle d'innovation de rupture.",
              ],
              box: { label: "Définition", text: "Invention : création technique nouvelle. Innovation : nouveauté mise sur le marché et adoptée par les utilisateurs. L'innovation peut améliorer peu à peu un objet (incrémentale) ou changer complètement les usages (de rupture)." },
            },
            {
              heading: "Lire et construire une frise chronologique",
              paragraphs: [
                "Pour étudier l'évolution d'une famille d'objets, on place les objets sur une frise chronologique, avec la date de leur apparition. Pour écouter de la musique, on peut placer : le phonographe d'Edison (1877), le disque vinyle microsillon (1948), la cassette audio (1963), le baladeur à cassette (1979), le disque compact ou CD (1982), le baladeur MP3 (fin des années 1990), puis le smartphone et l'écoute en ligne (années 2000 et 2010).",
                "Une frise permet de repérer les changements de principe technique : enregistrement mécanique (un sillon gravé), magnétique (une bande), optique (un laser qui lit le CD), puis numérique en fichiers. Elle montre aussi que les évolutions s'accélèrent et que les objets deviennent plus petits et plus nomades. Sur une frise, on respecte une échelle : la même longueur représente toujours la même durée.",
              ],
            },
          ],
          keyPoints: [
            "Une famille d'objets techniques regroupe des objets qui ont la même fonction d'usage.",
            "Le principe technique est la manière de réaliser la fonction ; il change au cours de l'évolution.",
            "Causes de l'évolution : progrès techniques, matériaux, énergie, besoins, modes de vie, règles de la société.",
            "Une invention est une création nouvelle ; une innovation est une nouveauté adoptée par les utilisateurs.",
            "Une frise chronologique, tracée à l'échelle, permet de situer les objets et de repérer les ruptures.",
          ],
          example: {
            statement: "Comparer une lampe à pétrole et une lampe à LED : indiquer leur fonction d'usage, le principe technique de chacune, et deux raisons pour lesquelles la lampe à LED a remplacé la lampe à pétrole dans les maisons.",
            solution: [
              "Fonction d'usage : les deux lampes servent à éclairer. Elles appartiennent donc à la même famille d'objets.",
              "Principe technique de la lampe à pétrole : une mèche brûle du pétrole, la flamme produit la lumière.",
              "Principe technique de la lampe à LED : un composant électronique, la LED, transforme l'énergie électrique en lumière, sans flamme.",
              "Première raison : un progrès technique. L'électricité arrivée dans les maisons, puis l'invention de la LED, permettent un éclairage sans flamme, donc sans risque d'incendie ni fumée.",
              "Deuxième raison : un besoin de praticité et d'économie. La lampe à LED s'allume d'un geste, ne demande pas de remplir un réservoir et consomme peu d'énergie.",
              "Réponse : même fonction d'usage (éclairer), principes différents (flamme ou LED) ; la LED s'est imposée grâce au progrès technique, à la sécurité et aux économies d'énergie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ranger ces objets du plus ancien au plus récent, puis indiquer leur fonction d'usage commune : le CD (1982), le phonographe (1877), le baladeur MP3 (fin des années 1990), la cassette audio (1963), le disque vinyle microsillon (1948).",
              hint: "Commencez par la date la plus petite. La fonction d'usage commune se trouve en vous demandant ce que tous ces objets permettent de faire.",
              solution: [
                "On compare les dates : 1877, 1948, 1963, 1982, puis la fin des années 1990.",
                "Ordre : phonographe (1877), disque vinyle microsillon (1948), cassette audio (1963), CD (1982), baladeur MP3 (fin des années 1990).",
                "Tous ces objets permettent d'écouter de la musique enregistrée.",
                "Résultat : phonographe, vinyle, cassette, CD, MP3 ; fonction d'usage commune : « écouter de la musique enregistrée ».",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque évolution, nommer la cause principale parmi : progrès technique, nouveau matériau, nouvelle source d'énergie, évolution des besoins, règle fixée par la société. a) Le cadre des vélos de course, autrefois en acier, est souvent en fibre de carbone. b) Les ampoules à incandescence ont été retirées de la vente en Europe. c) Les voitures électriques se développent. d) Le téléphone fixe a été complété par un téléphone portable que l'on emporte partout. e) Les écrans plats ont remplacé les gros téléviseurs à tube.",
              hint: "Demandez-vous à chaque fois ce qui a changé : la matière, l'énergie, la technique, l'envie des utilisateurs ou la loi.",
              solution: [
                "a) La fibre de carbone est plus légère que l'acier tout en restant rigide : nouveau matériau.",
                "b) Le retrait a été décidé par l'Union européenne pour économiser l'énergie : règle fixée par la société.",
                "c) La voiture n'utilise plus d'essence mais de l'électricité stockée dans une batterie : nouvelle source d'énergie.",
                "d) On souhaite pouvoir appeler partout, pas seulement chez soi : évolution des besoins et des modes de vie (rendue possible par le progrès technique).",
                "e) Les écrans plats utilisent une technologie nouvelle (cristaux liquides, puis LED) : progrès technique.",
                "Résultat : a) matériau ; b) règle de la société ; c) énergie ; d) besoins ; e) progrès technique.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici quelques étapes de l'histoire du vélo : la draisienne de Karl Drais, sans pédales, que l'on pousse avec les pieds (1817) ; le vélocipède à pédales fixées sur la roue avant (années 1860) ; le grand-bi, à très grande roue avant (années 1870) ; la bicyclette à transmission par chaîne sur la roue arrière (vers 1885) ; le pneu à chambre à air de John Dunlop (1888). a) Combien d'années séparent la draisienne du pneu de Dunlop ? b) Pourquoi la roue avant du grand-bi était-elle si grande, et pourquoi la chaîne a-t-elle permis de revenir à deux roues de même taille ? c) Le vélo à assistance électrique se répand aujourd'hui. Est-ce une invention ou une innovation ? Quelle cause d'évolution illustre-t-il ?",
              hint: "Pour b), sans chaîne, les pédales sont fixées sur la roue : un tour de pédale fait exactement un tour de roue. Que faut-il pour avancer plus loin à chaque tour ?",
              solution: [
                "a) 1888 - 1817 = 71. Il s'est écoulé 71 ans entre la draisienne et le pneu de Dunlop.",
                "b) Sur le grand-bi, les pédales sont fixées sur la roue avant : un tour de pédale fait un tour de roue. Plus la roue est grande, plus on avance loin à chaque tour, donc plus on va vite. Mais le cycliste est haut perché et les chutes sont dangereuses.",
                "Avec la chaîne, un grand plateau entraîne un petit pignon fixé sur la roue arrière : un tour de pédale fait faire plusieurs tours à la roue. On avance vite sans avoir besoin d'une roue géante, d'où deux roues de taille moyenne et un vélo plus sûr.",
                "c) Le vélo à assistance électrique est une innovation : il améliore un objet existant et il est vendu et adopté par de nombreux utilisateurs. Il illustre l'arrivée d'une nouvelle source d'énergie (un moteur électrique et une batterie) et l'évolution des besoins (se déplacer en ville sans trop d'effort et sans voiture).",
                "Résultat : 71 ans ; la grande roue servait à aller plus vite sans chaîne, la chaîne a rendu le vélo plus sûr ; le vélo électrique est une innovation liée à l'énergie et aux besoins.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces objets pour écouter de la musique dans l'ordre de leur apparition, du plus ancien au plus récent.",
            items: [
              "Le phonographe",
              "Le disque vinyle microsillon",
              "La cassette audio",
              "Le baladeur à cassette",
              "Le disque compact (CD)",
              "Le baladeur MP3",
            ],
          },
          quiz: [
            {
              q: "Une famille d'objets techniques regroupe des objets qui ont :",
              options: ["la même couleur", "la même fonction d'usage", "le même fabricant", "la même date d'invention"],
              answer: 1,
              why: "Les objets d'une même famille répondent au même besoin : ils ont la même fonction d'usage, même si leur principe technique change.",
            },
            {
              q: "Quelle est la différence entre une invention et une innovation ?",
              options: ["Il n'y en a aucune : ce sont deux mots synonymes", "L'invention est toujours plus récente", "L'innovation reste à l'état de prototype", "L'innovation est adoptée par les utilisateurs"],
              answer: 3,
              why: "Une invention est une création nouvelle ; elle devient une innovation quand elle est mise sur le marché et adoptée par les utilisateurs.",
            },
            {
              q: "Le passage de l'ampoule à incandescence à la lampe à LED est un changement :",
              options: ["de principe technique", "de fonction d'usage de l'objet", "de besoin", "d'utilisateur"],
              answer: 0,
              why: "Les deux lampes servent à éclairer ; seule la façon de produire la lumière change : filament chauffé d'un côté, composant électronique de l'autre.",
            },
            {
              q: "Le remplacement de l'acier par la fibre de carbone dans un cadre de vélo est une évolution due :",
              options: ["à une nouvelle source d'énergie", "à une loi européenne", "à un nouveau matériau", "à un nouveau besoin de communiquer"],
              answer: 2,
              why: "La fibre de carbone est un matériau plus léger que l'acier : l'évolution vient d'un nouveau matériau.",
            },
            {
              q: "Sur une frise chronologique tracée à l'échelle :",
              options: ["on place toujours les objets du plus récent au plus ancien", "la même longueur représente toujours la même durée", "chaque objet occupe la même place", "les dates sont facultatives"],
              answer: 1,
              why: "Une frise à l'échelle utilise une longueur fixe pour une durée fixe, par exemple 1 cm pour 10 ans, ce qui permet de voir les accélérations.",
            },
          ],
          trap: "Croire qu'un objet récent a une autre fonction d'usage que l'ancien : le baladeur MP3 et le phonographe servent tous deux à écouter de la musique ; c'est le principe technique qui a changé.",
          method: "Pour analyser l'évolution d'un objet, construisez un tableau à trois colonnes : la date, le principe technique, la cause du changement (technique, matériau, énergie, besoin, société). Les réponses aux questions se lisent ensuite dans le tableau.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cycle-de-vie',
          title: "Cycle de vie et impact environnemental d'un objet",
          minutes: 35,
          objectives: [
            "Décrire les étapes du cycle de vie d'un objet technique.",
            "Identifier les impacts environnementaux d'un objet à chaque étape de son cycle de vie.",
            "Exploiter des données pour repérer l'étape qui a le plus d'impact.",
            "Proposer des solutions pour réduire l'impact d'un objet (écoconception, réparation, recyclage).",
          ],
          course: [
            {
              heading: "Les cinq étapes du cycle de vie",
              paragraphs: [
                "Un objet technique a une « vie », depuis l'extraction des matières qui le composent jusqu'à ce qu'il devienne un déchet. On découpe cette vie en cinq étapes : ce découpage s'appelle le cycle de vie de l'objet.",
                "1. L'extraction des matières premières : on extrait du sol des minerais (fer, cuivre, bauxite pour l'aluminium, métaux rares), du pétrole pour les plastiques, on coupe du bois. 2. La fabrication : on transforme ces matières en pièces, puis on assemble l'objet dans une usine. 3. La distribution : on emballe l'objet et on le transporte jusqu'au magasin ou jusqu'au client, parfois à l'autre bout du monde.",
                "4. L'utilisation : l'objet sert, il consomme parfois de l'énergie (électricité, carburant) ou des consommables (piles, cartouches d'encre), et il doit être entretenu. 5. La fin de vie : quand on ne s'en sert plus, l'objet peut être réutilisé par quelqu'un d'autre, réparé, recyclé, brûlé pour produire de l'énergie, ou enfoui dans une décharge.",
              ],
              box: { label: "À retenir", text: "Les cinq étapes du cycle de vie : extraction des matières premières, fabrication, distribution (transport), utilisation, fin de vie." },
            },
            {
              heading: "Des impacts à chaque étape",
              paragraphs: [
                "Chaque étape a des conséquences sur l'environnement : c'est l'impact environnemental. L'extraction épuise des ressources qui ne se renouvellent pas et abîme les paysages ; la fabrication et le transport consomment de l'énergie et rejettent des gaz à effet de serre, comme le dioxyde de carbone ; l'utilisation consomme de l'énergie ; la fin de vie produit des déchets, parfois polluants pour l'eau et les sols.",
                "Pour mesurer ces impacts, les ingénieurs réalisent une analyse du cycle de vie (ACV). Elle recense, étape par étape, l'énergie et les matières consommées, les gaz rejetés, les déchets produits. Elle montre que l'étape la plus polluante dépend de l'objet. Pour un appareil qui consomme beaucoup d'électricité pendant des années, comme un réfrigérateur, l'utilisation pèse lourd. Pour un smartphone, selon l'ADEME (l'agence française de la transition écologique), l'essentiel de l'impact vient de sa fabrication.",
              ],
              box: { label: "Définition", text: "L'analyse du cycle de vie (ACV) est une méthode qui évalue les impacts environnementaux d'un objet à chaque étape de sa vie : ressources et énergie consommées, gaz à effet de serre rejetés, déchets produits." },
            },
            {
              heading: "La fin de vie : réemployer, réparer, recycler",
              paragraphs: [
                "Le meilleur déchet est celui que l'on ne produit pas. Avant de jeter, on peut donner ou vendre l'objet pour qu'il serve à nouveau (le réemploi), ou le faire réparer. Le recyclage vient ensuite : on récupère les matériaux (métaux, verre, certains plastiques) pour fabriquer de nouveaux objets. Ce qui ne peut pas être recyclé peut être brûlé pour produire de la chaleur ou de l'électricité (la valorisation énergétique) ; l'enfouissement en décharge est la dernière solution.",
                "Les appareils électriques et électroniques usagés ne vont jamais dans la poubelle ordinaire : le logo d'une poubelle barrée, présent sur ces appareils, le rappelle. On les rapporte dans un magasin qui en vend ou dans une déchèterie, pour que leurs métaux soient récupérés et leurs substances dangereuses traitées.",
                "En France, la loi anti-gaspillage pour une économie circulaire (loi AGEC) de 2020 a imposé, depuis 2021, un indice de réparabilité sur certains appareils (smartphones, ordinateurs portables, téléviseurs...). Une note sur 10 indique au moment de l'achat si l'objet sera facile à réparer.",
              ],
              box: { label: "Repère", text: "Ordre de préférence pour la fin de vie : réemployer ou réparer, puis recycler, puis valoriser (produire de l'énergie), et en dernier enfouir." },
            },
            {
              heading: "L'écoconception : penser à toute la vie de l'objet",
              paragraphs: [
                "L'écoconception consiste à réduire les impacts d'un objet dès sa conception, en pensant à toutes les étapes de son cycle de vie. On peut choisir des matériaux recyclés ou recyclables, utiliser moins de matière, fabriquer plus près du client, réduire la consommation d'énergie, rendre l'objet démontable et réparable (vis plutôt que colle, pièces détachées disponibles).",
                "L'utilisateur a aussi un rôle : garder plus longtemps ses objets, les entretenir, les réparer, éteindre un appareil plutôt que le laisser en veille, et bien trier en fin de vie. Garder un smartphone deux fois plus longtemps divise par deux la part de sa fabrication comptée pour chaque année d'utilisation.",
              ],
              box: { label: "Définition", text: "L'écoconception est une démarche qui réduit les impacts environnementaux d'un objet dès sa conception, sur l'ensemble de son cycle de vie." },
            },
          ],
          keyPoints: [
            "Cycle de vie : extraction des matières premières, fabrication, distribution, utilisation, fin de vie.",
            "Chaque étape a un impact : ressources épuisées, énergie consommée, gaz à effet de serre, déchets.",
            "L'analyse du cycle de vie (ACV) mesure les impacts étape par étape ; l'étape la plus lourde dépend de l'objet.",
            "Fin de vie : réemployer ou réparer, puis recycler, puis valoriser, et enfouir en dernier recours.",
            "L'écoconception réduit les impacts dès la conception : moins de matière, matériaux recyclables, objet réparable.",
          ],
          example: {
            statement: "Pour un grille-pain, associer chaque action à une étape de son cycle de vie : a) on extrait de la bauxite pour produire l'aluminium de la coque ; b) le grille-pain est transporté par bateau puis par camion ; c) il consomme de l'électricité à chaque utilisation ; d) il est déposé en déchèterie, où son métal est récupéré ; e) ses pièces sont moulées et assemblées en usine.",
            solution: [
              "a) Extraire la bauxite, c'est prélever une ressource dans le sol : extraction des matières premières.",
              "b) Le transport jusqu'au magasin : distribution.",
              "c) La consommation d'électricité pendant les petits-déjeuners : utilisation.",
              "d) Le dépôt en déchèterie et la récupération du métal : fin de vie (recyclage).",
              "e) Le moulage et l'assemblage : fabrication.",
              "Réponse, dans l'ordre du cycle de vie : a) extraction, e) fabrication, b) distribution, c) utilisation, d) fin de vie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Remettre dans l'ordre les étapes du cycle de vie d'une bouteille en verre, puis nommer chaque étape : A) la bouteille est vendue remplie de jus de fruits dans un supermarché ; B) on extrait du sable ; C) la bouteille vide est déposée dans un conteneur à verre ; D) le sable est fondu à très haute température et moulé ; E) une famille boit le jus.",
              hint: "Partez de la matière brute prise dans la nature et terminez par ce que devient la bouteille quand elle est vide.",
              solution: [
                "B) L'extraction du sable : extraction des matières premières.",
                "D) La fusion et le moulage du verre : fabrication.",
                "A) La vente en supermarché, après transport : distribution.",
                "E) La famille boit le jus : utilisation.",
                "C) Le dépôt dans le conteneur à verre, en vue du recyclage : fin de vie.",
                "Résultat : B, D, A, E, C.",
              ],
            },
            {
              level: 2,
              statement: "Voici l'impact sur le climat d'un smartphone utilisé pendant 3 ans, en kilogrammes de CO₂ (données fictives) : extraction et fabrication 48 kg ; distribution 4 kg ; utilisation 7 kg ; fin de vie 1 kg. a) Calculer l'impact total. b) Calculer la part de l'extraction et de la fabrication, en pourcentage du total. c) Quelle étape faut-il réduire en priorité ? Proposer deux actions, l'une pour le fabricant, l'autre pour l'utilisateur.",
              hint: "Pourcentage d'une étape = impact de l'étape ÷ impact total × 100.",
              solution: [
                "a) Total : 48 + 4 + 7 + 1 = 60 kg de CO₂.",
                "b) Part de l'extraction et de la fabrication : 48 ÷ 60 × 100 = 80 %.",
                "On peut vérifier les autres parts : distribution 4 ÷ 60 × 100 ≈ 6,7 % ; utilisation 7 ÷ 60 × 100 ≈ 11,7 % ; fin de vie 1 ÷ 60 × 100 ≈ 1,7 %. La somme fait bien environ 100 %.",
                "c) L'extraction et la fabrication représentent 80 % de l'impact : c'est l'étape à réduire en priorité.",
                "Action du fabricant : concevoir un téléphone réparable (batterie remplaçable, pièces détachées disponibles) et utiliser des métaux recyclés. Action de l'utilisateur : garder son téléphone plus longtemps, le faire réparer, ou acheter un téléphone reconditionné.",
                "Résultat : 60 kg de CO₂ au total, dont 80 % pour l'extraction et la fabrication ; il faut surtout fabriquer moins de téléphones neufs.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On reprend le smartphone de l'exercice précédent (données fictives) : extraction et fabrication 48 kg de CO₂, distribution 4 kg, fin de vie 1 kg, et utilisation 7 kg pour 3 ans, soit environ 2,3 kg par an. Inès garde son téléphone 3 ans, puis en achète un neuf identique qu'elle garde encore 3 ans. Hugo garde le même téléphone 6 ans, en changeant sa batterie au bout de 3 ans (impact de la batterie neuve : 5 kg de CO₂). a) Calculer l'impact total de chacun sur 6 ans. b) Calculer l'économie réalisée par Hugo, en kg puis en pourcentage de l'impact d'Inès. c) Quel principe de la fin de vie Hugo applique-t-il ?",
              hint: "Inès utilise deux téléphones : comptez deux fois la fabrication, la distribution et la fin de vie. Hugo n'a qu'un téléphone, mais l'utilise 6 ans et ajoute une batterie.",
              solution: [
                "a) Inès : chaque téléphone coûte 48 + 4 + 7 + 1 = 60 kg sur 3 ans. Deux téléphones : 2 × 60 = 120 kg de CO₂.",
                "Hugo : fabrication 48 kg, distribution 4 kg, utilisation pendant 6 ans 7 × 2 = 14 kg, batterie neuve 5 kg, fin de vie 1 kg. Total : 48 + 4 + 14 + 5 + 1 = 72 kg de CO₂.",
                "b) Économie : 120 - 72 = 48 kg de CO₂.",
                "En pourcentage : 48 ÷ 120 × 100 = 40 %. Hugo émet 40 % de moins qu'Inès.",
                "c) Hugo applique le principe « réparer plutôt que remplacer » : il prolonge la durée d'utilisation de son objet, ce qui évite de fabriquer un téléphone neuf, l'étape la plus lourde.",
                "Résultat : Inès 120 kg, Hugo 72 kg ; Hugo économise 48 kg de CO₂, soit 40 %, grâce à la réparation.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur le cycle de vie des objets.",
            statements: [
              { text: "Le cycle de vie d'un objet commence dans le magasin où on l'achète.", true: false, why: "Il commence bien avant, par l'extraction des matières premières, puis la fabrication et le transport." },
              { text: "Pour un smartphone, la fabrication pèse plus lourd que l'utilisation.", true: true, why: "Selon l'ADEME, l'essentiel de l'impact d'un smartphone vient de sa fabrication, en particulier de l'extraction des métaux." },
              { text: "Recycler un objet est toujours mieux que le réparer.", true: false, why: "Réparer ou réemployer passe avant le recyclage : l'objet continue de servir sans qu'il faille en fabriquer un nouveau." },
              { text: "Un appareil marqué d'une poubelle barrée ne doit pas être jeté avec les ordures ménagères.", true: true, why: "Ce logo signale un appareil électrique ou électronique à rapporter en magasin ou en déchèterie." },
              { text: "Le transport d'un objet n'a aucun impact sur l'environnement.", true: false, why: "Camions, bateaux et avions consomment du carburant et rejettent des gaz à effet de serre : c'est l'étape de distribution." },
              { text: "L'écoconception consiste à réduire l'impact d'un objet dès sa conception.", true: true, why: "Le concepteur choisit dès le départ les matériaux, la consommation et la réparabilité de l'objet." },
              { text: "L'étape la plus polluante est la même pour tous les objets.", true: false, why: "Elle dépend de l'objet : la fabrication pour un smartphone, souvent l'utilisation pour un appareil qui consomme beaucoup d'énergie." },
            ],
          },
          quiz: [
            {
              q: "Quelle est la première étape du cycle de vie d'un objet ?",
              options: ["L'extraction des matières premières", "La fabrication de l'objet en usine", "Le transport jusqu'au magasin de vente", "L'utilisation par le premier acheteur"],
              answer: 0,
              why: "Avant de fabriquer quoi que ce soit, il faut prélever les matières dans la nature : minerais, pétrole, bois, sable.",
            },
            {
              q: "Que signifie le sigle ACV ?",
              options: ["Appareil à courant variable", "Atelier de conception verte", "Analyse du cycle de vie", "Action contre le vieillissement"],
              answer: 2,
              why: "L'analyse du cycle de vie évalue les impacts environnementaux d'un objet à chaque étape de sa vie.",
            },
            {
              q: "Pour la fin de vie d'un objet, quelle solution est la meilleure pour l'environnement ?",
              options: ["L'enfouir en décharge", "Le brûler pour produire de l'énergie", "Le recycler", "Le réparer pour qu'il serve encore"],
              answer: 3,
              why: "Réparer ou réemployer évite de fabriquer un objet neuf ; le recyclage vient ensuite, puis la valorisation énergétique, et l'enfouissement en dernier.",
            },
            {
              q: "Rendre un objet démontable avec des vis plutôt qu'avec de la colle est un exemple :",
              options: ["de fonction d'estime", "d'écoconception", "d'obsolescence", "d'extraction"],
              answer: 1,
              why: "Un objet démontable est plus facile à réparer et à recycler : le concepteur réduit son impact dès la conception.",
            },
            {
              q: "Un réfrigérateur fonctionne jour et nuit pendant des années. Quelle étape a souvent un impact important ?",
              options: ["L'utilisation", "La distribution", "Le tri", "L'emballage"],
              answer: 0,
              why: "Un appareil qui consomme de l'électricité en permanence pendant longtemps a un impact important pendant son utilisation.",
            },
          ],
          trap: "Ne penser qu'à la fin de vie (le recyclage) quand on parle d'environnement : pour beaucoup d'objets, l'extraction et la fabrication pèsent bien plus lourd, et garder ou réparer l'objet est plus efficace que le recycler.",
          method: "Pour étudier l'impact d'un objet, dessinez une flèche avec les cinq étapes du cycle de vie, notez sous chacune ce qui est consommé et rejeté, puis entourez l'étape qui pèse le plus : c'est sur elle qu'il faut agir d'abord.",
        },
      ],
    },
    /* ==================================================================== */
    /* OBJETS, ENVIRONNEMENT ET RÉSEAUX                                       */
    /* ==================================================================== */
    {
      id: 'objets-interactions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'interactions-environnement',
          title: "Décrire les interactions d'un objet avec son environnement",
          minutes: 30,
          objectives: [
            "Délimiter un objet ou un système et identifier les éléments de son environnement.",
            "Décrire les interactions d'un objet avec l'utilisateur, le milieu et d'autres objets.",
            "Identifier les flux de matière, d'énergie et d'information qui entrent dans un objet et qui en sortent.",
            "Compléter un diagramme des interactions.",
          ],
          course: [
            {
              heading: "L'objet et son environnement",
              paragraphs: [
                "Un objet technique ne fonctionne jamais seul : il est entouré d'éléments avec lesquels il échange, ou qui agissent sur lui. L'ensemble de ces éléments forme son environnement, que l'on appelle aussi milieu extérieur. Pour l'étudier, on commence par tracer la frontière de l'objet : ce qui est à l'intérieur fait partie de l'objet, ce qui est à l'extérieur fait partie de son environnement.",
                "On range les éléments de l'environnement en plusieurs groupes : les personnes (l'utilisateur, mais aussi les personnes à proximité), le milieu physique (l'air, l'eau, la lumière, la température, la poussière, le sol), les sources d'énergie (le réseau électrique, le Soleil) et les autres objets ou systèmes (un smartphone, une station de recharge, un réseau Wi-Fi).",
              ],
              box: { label: "Définition", text: "L'environnement (ou milieu extérieur) d'un objet regroupe tous les éléments situés hors de sa frontière qui agissent sur lui ou sur lesquels il agit : personnes, milieu physique, sources d'énergie, autres objets." },
            },
            {
              heading: "Les interactions",
              paragraphs: [
                "Une interaction est une action ou un échange entre l'objet et un élément de son environnement. L'utilisateur appuie sur un bouton : il agit sur l'objet. L'objet affiche un message : il agit sur l'utilisateur. La pluie mouille un robot tondeuse : le milieu agit sur l'objet, qui doit y résister.",
                "Prenons un robot tondeuse. Il coupe l'herbe (interaction avec l'herbe), se déplace sur le terrain (avec le sol), revient se recharger (avec sa station de recharge), reçoit un programme de tonte depuis une application (avec le smartphone de l'utilisateur), résiste à la pluie et au soleil (avec le milieu) et arrête ses lames si on le soulève (avec les personnes, pour leur sécurité).",
              ],
              box: { label: "À retenir", text: "Une interaction relie l'objet à un élément de son environnement. Pour les trouver, on se demande avec qui ou avec quoi l'objet est en contact pendant son utilisation, et ce qu'ils échangent." },
            },
            {
              heading: "Matière, énergie, information : trois sortes de flux",
              paragraphs: [
                "Ce qui circule entre l'objet et son environnement se classe en trois catégories, appelées flux. Le flux de matière : une substance ou un objet entre ou sort (l'eau et le café dans une cafetière, l'herbe coupée par la tondeuse, le papier dans une imprimante). Le flux d'énergie : l'énergie entre pour faire fonctionner l'objet (électricité, lumière du Soleil, force musculaire), puis ressort sous une autre forme (mouvement, chaleur, lumière, son).",
                "Le flux d'information : des informations entrent (un appui sur une touche, une température mesurée, un ordre envoyé par une application) et d'autres sortent (un affichage, un signal sonore, un message envoyé à un smartphone). Pour une cafetière à dosettes : la matière qui entre est l'eau et la dosette, la matière qui sort est le café et la dosette usagée ; l'énergie électrique entre et ressort surtout en chaleur ; l'information entre par le bouton et sort par un voyant.",
              ],
              box: { label: "Repère", text: "Matière : ce qui est transformé ou déplacé (eau, papier, herbe). Énergie : ce qui fait fonctionner l'objet (électricité, lumière, force musculaire). Information : ce qui renseigne ou commande (appui, mesure, affichage, message)." },
            },
            {
              heading: "Le diagramme des interactions",
              paragraphs: [
                "Pour résumer les interactions, on dessine un diagramme des interactions, souvent appelé diagramme pieuvre. On place l'objet au centre et les éléments de son environnement tout autour. On trace ensuite des traits qui représentent les fonctions que l'objet doit remplir vis-à-vis de ces éléments.",
                "Une fonction principale (FP) relie deux éléments de l'environnement en passant par l'objet : c'est sa raison d'être. Pour le robot tondeuse : « permettre à l'utilisateur de couper l'herbe de son jardin ». Une fonction contrainte (FC) relie l'objet à un seul élément : c'est une exigence à respecter, par exemple « résister à la pluie », « se recharger à la station » ou « ne pas blesser les personnes ».",
              ],
              box: { label: "Définition", text: "Dans un diagramme des interactions, une fonction principale (FP) relie deux éléments de l'environnement par l'intermédiaire de l'objet ; une fonction contrainte (FC) relie l'objet à un seul élément de son environnement." },
            },
          ],
          keyPoints: [
            "L'environnement d'un objet regroupe ce qui est hors de sa frontière : personnes, milieu physique, énergie, autres objets.",
            "Une interaction est une action ou un échange entre l'objet et un élément de son environnement.",
            "Trois flux circulent : la matière (transformée ou déplacée), l'énergie (qui fait fonctionner), l'information (qui renseigne ou commande).",
            "Dans le diagramme des interactions, l'objet est au centre et les éléments de l'environnement tout autour.",
            "Une fonction principale relie deux éléments par l'objet ; une fonction contrainte relie l'objet à un seul élément.",
          ],
          example: {
            statement: "Un aspirateur robot nettoie le sol d'un appartement. Citer cinq éléments de son environnement et indiquer pour chacun l'interaction correspondante.",
            solution: [
              "L'utilisateur : il lance le nettoyage avec un bouton ou une application, et il vide le bac à poussière.",
              "Le sol : le robot s'y déplace et en aspire la poussière (flux de matière).",
              "Les meubles et les murs : le robot les détecte et les contourne sans les abîmer.",
              "La base de recharge : le robot y retourne pour recharger sa batterie (flux d'énergie).",
              "Le smartphone, par le réseau Wi-Fi : le robot reçoit des ordres et envoie un message de fin de nettoyage (flux d'information).",
              "Réponse : utilisateur, sol, meubles et murs, base de recharge, smartphone. On pourrait ajouter les escaliers, que le robot doit détecter pour ne pas tomber.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour une bouilloire électrique, classer chaque élément dans le bon flux (matière, énergie ou information) et préciser s'il entre ou s'il sort : a) l'eau froide ; b) l'électricité du réseau ; c) l'appui sur l'interrupteur ; d) l'eau chaude ; e) le voyant qui s'allume ; f) la chaleur perdue dans l'air de la cuisine.",
              hint: "La matière est ce qui est transformé, l'énergie ce qui fait fonctionner, l'information ce qui commande ou renseigne.",
              solution: [
                "a) L'eau froide : matière qui entre.",
                "b) L'électricité : énergie qui entre.",
                "c) L'appui sur l'interrupteur : information qui entre (l'ordre de mise en marche).",
                "d) L'eau chaude : matière qui sort.",
                "e) Le voyant allumé : information qui sort (il indique que la bouilloire chauffe).",
                "f) La chaleur perdue dans l'air : énergie qui sort (une énergie perdue, qui ne sert pas à chauffer l'eau).",
                "Résultat : matière = a (entre) et d (sort) ; énergie = b (entre) et f (sort) ; information = c (entre) et e (sort).",
              ],
            },
            {
              level: 2,
              statement: "Un vélo en libre-service est accroché à une borne dans la rue. L'utilisateur le déverrouille avec une application sur son smartphone, roule, puis le raccroche à une autre borne. Le vélo doit résister à la pluie, être visible la nuit et ne pas pouvoir être volé. a) Citer au moins cinq éléments de l'environnement du vélo. b) Écrire la fonction principale. c) Écrire trois fonctions contraintes en précisant l'élément concerné.",
              hint: "La fonction principale relie deux éléments par l'intermédiaire du vélo : qui se déplace, et sur quoi ? Chaque fonction contrainte relie le vélo à un seul élément.",
              solution: [
                "a) On peut citer : l'utilisateur, la route (ou la piste cyclable), la borne, le smartphone, la pluie, les autres usagers de la route, et les voleurs éventuels.",
                "b) Fonction principale : « permettre à l'utilisateur de se déplacer sur la route ». Elle relie l'utilisateur et la route par l'intermédiaire du vélo.",
                "c) « Résister à la pluie » (élément : la pluie) ; « être visible des autres usagers la nuit » (élément : les autres usagers) ; « se verrouiller à la borne pour empêcher le vol » (élément : la borne).",
                "On peut aussi citer « se déverrouiller grâce à l'application » (élément : le smartphone).",
                "Résultat : FP : permettre à l'utilisateur de se déplacer sur la route ; FC : résister à la pluie, être visible des autres usagers, se verrouiller à la borne.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une station météo connectée est fixée dans un jardin. Elle mesure la température et l'humidité de l'air ainsi que la quantité de pluie, et elle envoie ses mesures toutes les 10 minutes à une box internet, par ondes radio. Elle est alimentée par un petit panneau solaire et une batterie. Les mesures s'affichent sur une application. a) Le système étudié est la station seule : citer les éléments de son environnement. b) Pour chaque élément, préciser le flux échangé (matière, énergie ou information) et son sens. c) Combien de mesures de température la station envoie-t-elle en une journée ? d) Un jour, l'application n'affiche plus rien, alors que la station mesure toujours correctement. Quelles interactions peuvent être rompues ?",
              hint: "L'eau de pluie qui tombe dans le pluviomètre est de la matière, mais sa quantité mesurée est une information. Pour c), une journée dure 24 heures, et il y a 6 périodes de 10 minutes dans une heure.",
              solution: [
                "a) Le système est la station (capteurs, carte électronique, émetteur radio, panneau solaire, batterie). Son environnement : l'air, la pluie, le Soleil, la box internet, et plus loin l'application et l'utilisateur.",
                "b) L'air : la station en mesure la température et l'humidité (information qui entre). La pluie : l'eau entre dans le pluviomètre puis s'écoule (matière qui entre et qui sort), et sa quantité est mesurée (information qui entre).",
                "Le Soleil : il apporte l'énergie lumineuse que le panneau transforme en électricité (énergie qui entre). La box : elle reçoit les mesures (information qui sort de la station). L'utilisateur reçoit l'information par l'application, sans contact direct avec la station.",
                "c) Nombre d'envois : 24 × 6 = 144. La station envoie 144 mesures de température par jour.",
                "d) La station mesure toujours, donc le problème concerne l'information qui sort : la liaison radio entre la station et la box (distance trop grande, nouvel obstacle, box éteinte), ou la liaison entre la box et internet.",
                "Résultat : air, pluie, Soleil, box (et au-delà l'application) ; 144 envois par jour ; la panne vient de la liaison radio avec la box ou de la connexion de la box à internet.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les interactions d'un objet avec son environnement.",
            statements: [
              { text: "L'utilisateur fait partie de l'environnement de l'objet.", true: true, why: "Il est hors de la frontière de l'objet et interagit avec lui : il appartient à l'environnement." },
              { text: "La pluie ne peut pas faire partie de l'environnement, car ce n'est pas un objet.", true: false, why: "Le milieu physique (air, pluie, lumière, température) fait partie de l'environnement : l'objet doit souvent y résister." },
              { text: "L'électricité qui alimente un appareil est un flux d'énergie.", true: true, why: "Elle fait fonctionner l'appareil : c'est de l'énergie qui entre." },
              { text: "Un message envoyé par une montre connectée à un smartphone est un flux de matière.", true: false, why: "Un message renseigne : c'est un flux d'information." },
              { text: "Une fonction contrainte relie deux éléments de l'environnement par l'intermédiaire de l'objet.", true: false, why: "C'est la définition de la fonction principale ; une fonction contrainte relie l'objet à un seul élément." },
              { text: "Dans une imprimante, la feuille de papier est un flux de matière.", true: true, why: "La feuille entre blanche et ressort imprimée : c'est de la matière transformée." },
              { text: "Tracer la frontière de l'objet aide à savoir ce qui fait partie de son environnement.", true: true, why: "Tout ce qui se trouve à l'extérieur de la frontière fait partie de l'environnement." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces éléments fait partie de l'environnement d'un lave-linge ?",
              options: ["Le tambour", "Le moteur", "La carte électronique", "Le linge sale"],
              answer: 3,
              why: "Le tambour, le moteur et la carte sont à l'intérieur du lave-linge ; le linge est hors de sa frontière : il fait partie de l'environnement.",
            },
            {
              q: "Dans une cafetière, le café qui coule dans la tasse est un flux :",
              options: ["d'énergie", "de matière", "d'information", "de lumière"],
              answer: 1,
              why: "Le café est une substance produite par la cafetière : c'est de la matière qui sort.",
            },
            {
              q: "Le bip d'un four qui annonce la fin de la cuisson est un flux :",
              options: ["d'information", "de matière", "d'énergie thermique", "de chaleur perdue"],
              answer: 0,
              why: "Le bip renseigne l'utilisateur : c'est une information qui sort du four.",
            },
            {
              q: "Une fonction principale relie :",
              options: ["l'objet à un seul élément de son environnement", "deux pièces à l'intérieur de l'objet", "deux éléments de l'environnement par l'objet", "l'utilisateur et le fabricant de l'objet"],
              answer: 2,
              why: "La fonction principale est la raison d'être de l'objet : elle met en relation deux éléments de l'environnement, comme l'utilisateur et l'herbe pour une tondeuse.",
            },
            {
              q: "Pour un robot tondeuse, « résister à la pluie » est :",
              options: ["la fonction d'usage", "une fonction principale", "un flux de matière", "une fonction contrainte"],
              answer: 3,
              why: "Elle relie l'objet à un seul élément de l'environnement, la pluie : c'est une exigence à respecter, donc une fonction contrainte.",
            },
          ],
          trap: "Oublier les éléments du milieu physique (pluie, chaleur, poussière, lumière) et ne citer que l'utilisateur : un objet doit aussi résister à son milieu, et ces interactions donnent souvent les fonctions contraintes.",
          method: "Pour trouver les interactions, racontez une utilisation complète de l'objet, du moment où on le sort jusqu'à celui où on le range : chaque fois qu'un élément extérieur intervient, notez-le avec ce qu'il échange (matière, énergie ou information).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'objets-communicants',
          title: 'Les objets communicants et les réseaux',
          minutes: 30,
          objectives: [
            "Identifier un objet communicant et les informations qu'il échange.",
            "Décrire la structure d'un réseau : équipements, liaisons, box, serveur.",
            "Comparer les moyens de transmission : câble, fibre optique, ondes radio.",
            "Calculer une durée de transmission à partir d'un débit.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un objet communicant ?",
              paragraphs: [
                "Un objet communicant est un objet capable d'échanger des informations avec d'autres objets ou avec un réseau. Une montre connectée envoie le nombre de pas au smartphone, une enceinte reçoit la musique d'un téléphone, un thermostat connecté reçoit une consigne de température envoyée à distance, une ampoule connectée s'allume depuis une application.",
                "Lorsque ces objets sont reliés à internet, on parle d'internet des objets (en anglais Internet of Things, ou IoT). Ils contiennent presque toujours des capteurs, une carte électronique et un module de communication. Ils rendent de nouveaux services (surveiller sa maison à distance, suivre son activité physique), mais ils posent aussi des questions de sécurité, de protection des données et de consommation d'énergie.",
              ],
              box: { label: "Définition", text: "Un objet communicant échange des informations avec d'autres objets ou avec un réseau. L'internet des objets désigne l'ensemble des objets du quotidien reliés à internet." },
            },
            {
              heading: "Un réseau : des équipements reliés entre eux",
              paragraphs: [
                "Un réseau informatique est un ensemble d'équipements reliés entre eux pour échanger des données : ordinateurs, smartphones, imprimantes, objets connectés. À la maison, la box internet relie les équipements du foyer : c'est le réseau local. Elle joue aussi le rôle de routeur : elle fait passer les données entre ce réseau local et internet.",
                "Internet est un réseau de réseaux qui relie des milliards d'équipements dans le monde. Pour que les données arrivent au bon endroit, chaque équipement connecté reçoit une adresse, l'adresse IP, un peu comme une adresse postale. Les données sont découpées en petits morceaux, les paquets, qui voyagent de routeur en routeur jusqu'à leur destination. Tous les équipements respectent les mêmes règles de communication, appelées protocoles, pour se comprendre.",
                "Beaucoup d'objets connectés ne communiquent pas directement avec le smartphone : ils envoient leurs données à un serveur, un ordinateur puissant installé dans un centre de données, parfois très loin. L'application du smartphone va ensuite chercher les données sur ce serveur. C'est ce que l'on appelle couramment le cloud (le « nuage »).",
              ],
              box: { label: "À retenir", text: "Box (routeur) : relie le réseau local à internet. Adresse IP : identifie un équipement sur le réseau. Paquets : morceaux de données. Protocole : règles communes pour communiquer. Serveur : ordinateur distant qui stocke les données et répond aux demandes." },
            },
            {
              heading: "Câble, fibre ou ondes : les moyens de transmission",
              paragraphs: [
                "Les données peuvent voyager dans un câble en cuivre (le câble Ethernet qui relie un ordinateur à la box), sous forme de signaux électriques. Elles peuvent voyager dans une fibre optique, un fil de verre très fin dans lequel circule de la lumière : c'est le moyen le plus performant pour transporter beaucoup de données sur de longues distances. Elles peuvent enfin voyager sans fil, grâce à des ondes radio.",
                "Les liaisons sans fil n'ont pas la même portée. Le Bluetooth relie des objets proches, sur une dizaine de mètres environ (une montre et un téléphone, des écouteurs). Le Wi-Fi couvre une maison ou une salle de classe, sur quelques dizaines de mètres. Le réseau mobile (4G, 5G) couvre de grandes zones grâce à des antennes réparties sur le territoire. Les murs épais et la distance affaiblissent les ondes.",
              ],
              box: { label: "Repère", text: "Liaisons filaires : câble en cuivre (signaux électriques) et fibre optique (lumière), rapides et stables. Liaisons sans fil, par ondes radio : Bluetooth (quelques mètres), Wi-Fi (une maison), réseau mobile (un territoire)." },
            },
            {
              heading: "Bits, octets et débit",
              paragraphs: [
                "Les objets numériques codent toutes les informations avec seulement deux valeurs, 0 et 1. Chacune s'appelle un bit. Un groupe de 8 bits forme un octet. Les quantités de données se comptent en kilo-octets (ko, 1 000 octets), en mégaoctets (Mo, 1 000 000 d'octets) et en gigaoctets (Go, 1 000 000 000 d'octets). Une photo pèse quelques mégaoctets, un film plusieurs gigaoctets.",
                "Le débit est la quantité de données transmise en une seconde. Il s'exprime en bits par seconde, souvent en mégabits par seconde (Mbit/s). Attention : on compte les fichiers en octets, mais le débit en bits. Pour calculer une durée de transmission, on convertit la taille du fichier en bits (on multiplie par 8), puis on divise par le débit. Exemple : un fichier de 5 Mo fait 5 × 8 = 40 Mbit ; avec un débit de 10 Mbit/s, il faut 40 ÷ 10 = 4 secondes.",
              ],
              box: { label: "Formule", text: "1 octet = 8 bits. Durée de transmission (en s) = taille du fichier (en bits) ÷ débit (en bits par seconde). On convertit toujours les octets en bits avant de diviser." },
            },
          ],
          keyPoints: [
            "Un objet communicant échange des informations avec d'autres objets ou un réseau ; relié à internet, il fait partie de l'internet des objets.",
            "Un réseau relie des équipements ; la box (routeur) relie le réseau local de la maison à internet.",
            "Chaque équipement a une adresse IP ; les données voyagent en paquets en suivant des protocoles.",
            "Liaisons filaires : câble en cuivre, fibre optique. Liaisons sans fil : Bluetooth, Wi-Fi, réseau mobile.",
            "1 octet = 8 bits ; le débit se mesure en bits par seconde ; durée = taille en bits ÷ débit.",
          ],
          example: {
            statement: "Une caméra de surveillance connectée envoie une vidéo de 15 Mo vers un serveur. Le débit montant de la connexion est de 6 Mbit/s. Combien de temps dure l'envoi ?",
            solution: [
              "On convertit la taille en bits : 15 Mo = 15 × 8 = 120 Mbit.",
              "Le débit est de 6 Mbit/s : chaque seconde, 6 Mbit sont envoyés.",
              "Durée = 120 ÷ 6 = 20 secondes.",
              "Vérification : 20 s × 6 Mbit/s = 120 Mbit, et 120 ÷ 8 = 15 Mo.",
              "Réponse : l'envoi dure 20 secondes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, indiquer le moyen de transmission le plus adapté parmi : Bluetooth, Wi-Fi, réseau mobile, fibre optique. a) Des écouteurs sans fil reliés à un téléphone rangé dans la poche. b) Un appel vidéo passé depuis un train. c) Une tablette qui se connecte à la box dans le salon. d) La liaison qui relie un quartier entier à internet, sur plusieurs kilomètres.",
              hint: "Comparez la distance à couvrir : quelques mètres, une maison, un territoire, ou une longue liaison qui transporte beaucoup de données.",
              solution: [
                "a) Moins d'un mètre entre la poche et les oreilles : Bluetooth.",
                "b) Le train se déplace sur des kilomètres, loin de toute box : réseau mobile (4G ou 5G).",
                "c) À l'intérieur d'une maison : Wi-Fi.",
                "d) Une longue distance et beaucoup de données : fibre optique.",
                "Résultat : a) Bluetooth ; b) réseau mobile ; c) Wi-Fi ; d) fibre optique.",
              ],
            },
            {
              level: 2,
              statement: "Une montre connectée mesure le rythme cardiaque. Le soir, l'utilisateur consulte ses courbes sur une application de son smartphone. La montre envoie ses mesures au smartphone par Bluetooth, le smartphone les transmet par Wi-Fi à la box, et la box les envoie par internet à un serveur du fabricant. a) Citer, dans l'ordre, les équipements traversés par les données, de la montre au serveur. b) Pour chaque liaison, dire si elle est filaire ou sans fil. c) Pourquoi les données sont-elles envoyées sur un serveur alors que le smartphone pourrait les garder ? Donner un avantage et un inconvénient.",
              hint: "Suivez le chemin des données étape par étape. Pour c), pensez à ce qui se passe si l'on perd son smartphone, et à qui peut lire les données.",
              solution: [
                "a) Montre → smartphone → box → internet (plusieurs routeurs) → serveur du fabricant.",
                "b) De la montre au smartphone : sans fil (Bluetooth). Du smartphone à la box : sans fil (Wi-Fi). De la box à internet : en général filaire (fibre optique ou câble en cuivre).",
                "c) Avantage : les données sont sauvegardées même si l'on perd ou change de téléphone, et elles peuvent être consultées depuis un autre appareil.",
                "Inconvénient : des données de santé, très personnelles, sont stockées chez le fabricant ; il faut lui faire confiance pour les protéger, et le service ne fonctionne plus sans connexion ou si le fabricant arrête son serveur.",
                "Résultat : montre, smartphone, box, internet, serveur ; deux liaisons sans fil puis une liaison généralement filaire ; le serveur sauvegarde les données, mais l'utilisateur en garde moins le contrôle.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une famille dispose d'une connexion à internet de débit descendant 40 Mbit/s et de débit montant 8 Mbit/s (données fictives). a) Combien de temps faut-il pour télécharger un jeu de 2 Go (1 Go = 1 000 Mo) ? Donner le résultat en secondes, puis en minutes et secondes. b) Combien de temps faut-il pour envoyer sur un serveur 30 photos de 4 Mo chacune ? c) En réalité, le téléchargement du jeu a duré 10 minutes. Le débit réel était-il supérieur ou inférieur à 40 Mbit/s ? Calculer ce débit réel et proposer une explication.",
              hint: "Convertissez toujours la taille en bits (× 8) avant de diviser par le débit. Télécharger utilise le débit descendant, envoyer utilise le débit montant. Pour c), débit = taille en bits ÷ durée en secondes.",
              solution: [
                "a) 2 Go = 2 × 1 000 = 2 000 Mo. En bits : 2 000 × 8 = 16 000 Mbit.",
                "Durée : 16 000 ÷ 40 = 400 secondes. Or 400 = 6 × 60 + 40, donc 6 minutes et 40 secondes.",
                "b) Taille totale : 30 × 4 = 120 Mo, soit 120 × 8 = 960 Mbit. On envoie, donc on utilise le débit montant : 960 ÷ 8 = 120 secondes, soit 2 minutes.",
                "c) 10 minutes = 600 secondes, plus que les 400 secondes prévues : le débit réel était inférieur. Débit réel = 16 000 ÷ 600 ≈ 26,7 Mbit/s.",
                "Explications possibles : d'autres appareils de la maison utilisaient la connexion en même temps, l'appareil était loin de la box et le Wi-Fi était affaibli par les murs, ou le serveur du jeu était très sollicité.",
                "Résultat : 400 s (6 min 40 s) ; 120 s (2 min) ; débit réel d'environ 26,7 Mbit/s, inférieur au débit annoncé.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le trajet d'une mesure, du capteur d'un thermostat connecté jusqu'à l'écran du smartphone.",
            items: [
              "Le capteur du thermostat mesure la température de la pièce",
              "La carte électronique du thermostat code la mesure en bits",
              "Le thermostat envoie les données par Wi-Fi à la box",
              "La box transmet les données sur internet",
              "Le serveur du fabricant enregistre la mesure",
              "L'application du smartphone demande la mesure au serveur",
              "La température s'affiche sur l'écran du smartphone",
            ],
          },
          quiz: [
            {
              q: "Quel équipement relie le réseau local d'une maison à internet ?",
              options: ["L'imprimante", "Le serveur du fabricant", "La box (routeur)", "L'enceinte connectée"],
              answer: 2,
              why: "La box joue le rôle de routeur : elle fait passer les données entre le réseau local du foyer et internet.",
            },
            {
              q: "Combien de bits contient un octet ?",
              options: ["8", "2", "10", "1 000"],
              answer: 0,
              why: "Un octet est un groupe de 8 bits. C'est pourquoi on multiplie par 8 pour passer des octets aux bits.",
            },
            {
              q: "Quel moyen de transmission utilise la lumière ?",
              options: ["Le Bluetooth", "La fibre optique", "Le câble Ethernet en cuivre", "Le Wi-Fi"],
              answer: 1,
              why: "Dans une fibre optique, un fil de verre très fin, les données voyagent sous forme de lumière.",
            },
            {
              q: "À quoi sert l'adresse IP ?",
              options: ["À mesurer le débit de la connexion internet", "À protéger l'objet contre les virus", "À recharger l'objet connecté", "À identifier un appareil du réseau"],
              answer: 3,
              why: "Comme une adresse postale, l'adresse IP permet aux données d'arriver au bon équipement.",
            },
            {
              q: "Un fichier de 10 Mo est envoyé avec un débit de 20 Mbit/s. Combien de temps dure l'envoi ?",
              options: ["4 secondes", "0,5 seconde", "2 secondes", "200 secondes"],
              answer: 0,
              why: "10 Mo = 10 × 8 = 80 Mbit, et 80 ÷ 20 = 4 s. La réponse 0,5 s oublie de convertir les octets en bits.",
            },
          ],
          trap: "Oublier de convertir les octets en bits avant d'utiliser un débit : la taille d'un fichier est donnée en octets (Mo), le débit en bits par seconde (Mbit/s) ; sans multiplier par 8, la durée trouvée est 8 fois trop petite.",
          method: "Pour décrire un réseau, dessinez le trajet des données de l'objet jusqu'à leur destination, en écrivant chaque équipement dans une case, et notez sur chaque flèche le moyen de transmission (Bluetooth, Wi-Fi, fibre...).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'donnees-cybersecurite',
          title: 'Données personnelles et cybersécurité',
          minutes: 30,
          objectives: [
            "Identifier les données personnelles et les traces laissées par l'usage des objets connectés.",
            "Connaître les droits que la loi garantit sur les données personnelles.",
            "Reconnaître les principales menaces : hameçonnage, logiciel malveillant, piratage de compte.",
            "Appliquer des règles de sécurité : mot de passe solide, double authentification, mises à jour, sauvegardes.",
          ],
          course: [
            {
              heading: "Les données personnelles",
              paragraphs: [
                "Une donnée personnelle est une information qui permet d'identifier une personne, directement ou indirectement : son nom, sa photo, sa voix, son adresse, son numéro de téléphone, mais aussi son adresse IP, sa position géographique ou un identifiant de compte. Certaines données sont dites sensibles et sont encore mieux protégées, par exemple celles qui concernent la santé, les opinions politiques ou les croyances religieuses.",
                "Chaque usage numérique laisse des traces : les sites visités, les recherches, les vidéos regardées, les achats, les lieux fréquentés. Les objets connectés en produisent beaucoup : une montre enregistre le rythme cardiaque et le sommeil, une enceinte reçoit les demandes vocales, un téléphone connaît ses positions successives. Rassemblées, ces traces en disent beaucoup sur une personne : ses habitudes, ses goûts, sa santé.",
                "Ces données ont une grande valeur. Les entreprises les utilisent pour améliorer leurs services, mais aussi pour afficher des publicités ciblées. Les cookies, petits fichiers déposés par les sites sur votre appareil, permettent par exemple de vous reconnaître d'une visite à l'autre. C'est pourquoi les sites doivent vous demander votre accord avant de déposer ceux qui servent à la publicité.",
              ],
              box: { label: "Définition", text: "Une donnée personnelle est une information qui permet d'identifier une personne, directement (nom, photo) ou indirectement (adresse IP, position, identifiant). Les traces numériques sont les données laissées par nos usages." },
            },
            {
              heading: "La loi protège vos données",
              paragraphs: [
                "En France, la loi Informatique et libertés de 1978 a créé la CNIL (Commission nationale de l'informatique et des libertés), chargée de veiller à la protection des données personnelles. Depuis 2018, le RGPD (règlement général sur la protection des données) s'applique dans toute l'Union européenne.",
                "Ces textes donnent des droits à chacun : savoir quelles données sont collectées et pourquoi, y accéder, les faire corriger, s'opposer à certaines utilisations et demander leur effacement, par exemple pour faire retirer une photo publiée sans accord. Une entreprise ne doit collecter que les données utiles au service rendu. En France, avant 15 ans, l'inscription à un service en ligne qui utilise vos données sur la base de votre consentement demande aussi l'accord d'un parent.",
              ],
              box: { label: "Repère", text: "CNIL : autorité française qui protège les données personnelles, créée par la loi de 1978. RGPD : règlement européen appliqué depuis 2018. Vos droits : accès, rectification, opposition, effacement." },
            },
            {
              heading: "Les principales menaces",
              paragraphs: [
                "La cybersécurité regroupe les moyens de protéger les appareils, les comptes et les données contre les attaques. La menace la plus fréquente est l'hameçonnage (en anglais phishing) : un faux message, qui imite une banque, un service de livraison ou un réseau social, pousse à cliquer sur un lien puis à saisir un mot de passe ou un numéro de carte bancaire sur un faux site.",
                "Un logiciel malveillant (virus, cheval de Troie...) peut s'installer quand on ouvre une pièce jointe douteuse ou qu'on télécharge une application en dehors des magasins officiels. Un rançongiciel bloque les fichiers et exige une rançon pour les rendre. Le piratage de compte arrive souvent quand un mot de passe est trop simple ou utilisé sur plusieurs sites. Les objets connectés sont aussi visés, surtout quand ils gardent le mot de passe d'usine.",
              ],
              box: { label: "À retenir", text: "Hameçonnage : faux message qui vole des identifiants. Logiciel malveillant : programme qui endommage ou espionne. Rançongiciel : bloque les fichiers contre une rançon. Signes d'alerte : urgence, fautes, expéditeur étrange, lien inattendu." },
            },
            {
              heading: "Les bons réflexes",
              paragraphs: [
                "Un mot de passe solide est long (au moins 12 caractères est une recommandation courante), mélange majuscules, minuscules, chiffres et caractères spéciaux, et ne contient ni prénom ni date de naissance. Une phrase de passe, faite de plusieurs mots sans lien entre eux, est facile à retenir et difficile à deviner. On utilise un mot de passe différent pour chaque compte important, et on ne le donne à personne.",
                "La double authentification ajoute une seconde preuve d'identité (un code reçu par SMS ou affiché par une application) : même si le mot de passe est volé, le pirate ne peut pas entrer. Il faut aussi installer les mises à jour, qui corrigent des failles de sécurité, sauvegarder régulièrement ses fichiers, changer le mot de passe d'usine des objets connectés, et réfléchir avant de publier une information ou une photo.",
                "En cas de problème, on ne reste pas seul : on prévient un adulte de confiance, on change ses mots de passe et on signale le message ou le contenu. En France, le 3018 est le numéro national gratuit contre les violences numériques et le cyberharcèlement, et la plateforme Cybermalveillance.gouv.fr aide les victimes d'attaques informatiques.",
              ],
              box: { label: "Règle", text: "Un mot de passe long et différent pour chaque compte, la double authentification, les mises à jour, des sauvegardes régulières, et jamais de mot de passe donné en réponse à un message." },
            },
          ],
          keyPoints: [
            "Une donnée personnelle permet d'identifier une personne, directement (nom, photo) ou indirectement (adresse IP, position).",
            "Les objets connectés laissent de nombreuses traces : position, santé, habitudes.",
            "La CNIL (loi de 1978) et le RGPD (2018) garantissent des droits : accès, rectification, opposition, effacement.",
            "L'hameçonnage imite un message de confiance pour voler des identifiants : on ne clique pas, on vérifie.",
            "Mot de passe long et unique pour chaque compte, double authentification, mises à jour et sauvegardes.",
          ],
          example: {
            statement: "Léo reçoit ce SMS : « Votre colis est bloqué. Payez 1,99 € de frais sous 24 h sur ce lien, sinon il sera renvoyé. » Il n'attend aucun colis. Relever les signes d'hameçonnage et dire ce que Léo doit faire.",
            solution: [
              "Premier signe : Léo n'attend aucun colis, le message ne correspond à rien de réel.",
              "Deuxième signe : l'urgence (« sous 24 h ») pousse à agir vite, sans réfléchir.",
              "Troisième signe : on lui demande de payer en suivant un lien ; le but est de récupérer ses coordonnées bancaires sur un faux site.",
              "Ce qu'il doit faire : ne pas cliquer, ne rien payer, ne pas répondre, en parler à un adulte, puis supprimer le message. Il peut le signaler en le transférant au 33700, le numéro de signalement des SMS indésirables.",
              "Réponse : c'est un hameçonnage (message inattendu, urgence, paiement par un lien) ; Léo ne clique pas, prévient un adulte et signale le message.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi ces informations, lesquelles sont des données personnelles ? a) le prénom et le nom d'un élève ; b) la température moyenne à Lyon en juillet ; c) la photo d'une personne ; d) la position GPS du téléphone d'une personne ; e) le nombre de jours dans une année ; f) l'adresse électronique prenom.nom@exemple.fr.",
              hint: "Demandez-vous si l'information permet, seule ou associée à d'autres, de savoir de quelle personne il s'agit.",
              solution: [
                "a) Oui : le prénom et le nom identifient directement l'élève.",
                "b) Non : c'est une information sur une ville, pas sur une personne.",
                "c) Oui : une photo permet de reconnaître la personne.",
                "d) Oui : la position permet de savoir où vit, travaille ou étudie la personne ; elle l'identifie indirectement.",
                "e) Non : c'est une information générale.",
                "f) Oui : l'adresse électronique contient le prénom et le nom et permet de contacter la personne.",
                "Résultat : a, c, d et f sont des données personnelles ; b et e n'en sont pas.",
              ],
            },
            {
              level: 2,
              statement: "Dire si chaque mot de passe est faible ou solide, et pourquoi : a) 123456 ; b) Emma2012 ; c) soleil ; d) Girafe!Velo7Nuage$Piano ; e) motdepasse. Puis proposer deux autres règles pour protéger un compte.",
              hint: "Un bon mot de passe est long, mélange plusieurs types de caractères et ne contient rien qui permette de deviner qui vous êtes (prénom, date).",
              solution: [
                "a) 123456 : faible. Six chiffres qui se suivent, parmi les premiers essayés par les pirates.",
                "b) Emma2012 : faible. Un prénom et une année, sans doute de naissance, faciles à deviner, et seulement 8 caractères.",
                "c) soleil : faible. Un mot du dictionnaire, court, en minuscules seulement.",
                "d) Girafe!Velo7Nuage$Piano : solide. 23 caractères, des mots sans lien entre eux, des majuscules, des minuscules, un chiffre et des caractères spéciaux.",
                "e) motdepasse : faible. C'est l'un des mots de passe les plus courants.",
                "Autres règles : activer la double authentification ; utiliser un mot de passe différent pour chaque compte ; ne jamais communiquer son mot de passe, même à un ami.",
                "Résultat : seul le mot de passe d) est solide.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un pirate utilise un programme qui essaie 1 milliard (10⁹) de mots de passe par seconde (hypothèse fictive). a) Un code de 4 chiffres admet 10 × 10 × 10 × 10 = 10⁴ possibilités. Combien de temps faut-il, au maximum, pour toutes les essayer ? b) Un mot de passe de 8 lettres minuscules admet 26⁸ possibilités, soit environ 2,1 × 10¹¹. Calculer le temps maximal en secondes, puis en minutes. c) Un mot de passe de 12 caractères choisis parmi 62 (26 minuscules, 26 majuscules, 10 chiffres) admet environ 3,2 × 10²¹ possibilités. Calculer le temps maximal en secondes, puis en années (on prendra 1 an ≈ 3,2 × 10⁷ s). d) Quelle conclusion en tirer ?",
              hint: "Temps maximal = nombre de possibilités ÷ nombre d'essais par seconde. Pour diviser des puissances de 10, on soustrait les exposants : 10¹¹ ÷ 10⁹ = 10².",
              solution: [
                "a) 10⁴ ÷ 10⁹ = 10⁻⁵ s, soit 0,000 01 seconde : le code est trouvé presque instantanément.",
                "b) 2,1 × 10¹¹ ÷ 10⁹ = 2,1 × 10² = 210 secondes. Et 210 ÷ 60 = 3,5 : environ 3 minutes et 30 secondes.",
                "c) 3,2 × 10²¹ ÷ 10⁹ = 3,2 × 10¹² secondes. En années : 3,2 × 10¹² ÷ (3,2 × 10⁷) = 10⁵, soit environ 100 000 ans.",
                "d) Allonger le mot de passe et varier les types de caractères multiplie énormément le nombre de possibilités. Un mot de passe de 12 caractères variés et choisis au hasard résiste à cette attaque, alors qu'un code de 4 chiffres ou 8 minuscules tombe en quelques minutes. Un mot du dictionnaire tombe encore plus vite, car les pirates essaient d'abord les mots courants.",
                "Résultat : 0,000 01 s ; environ 210 s (3 min 30 s) ; environ 100 000 ans ; ce sont la longueur et la variété des caractères qui protègent.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque terme à sa définition.",
            pairs: [
              { left: "Donnée personnelle", right: "Information qui permet d'identifier une personne" },
              { left: "Hameçonnage", right: "Faux message qui cherche à voler des identifiants" },
              { left: "CNIL", right: "Autorité française qui protège les données personnelles" },
              { left: "Cookie", right: "Petit fichier déposé par un site sur votre appareil" },
              { left: "Double authentification", right: "Seconde preuve d'identité demandée après le mot de passe" },
              { left: "Rançongiciel", right: "Programme qui bloque des fichiers contre une rançon" },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces informations est une donnée personnelle ?",
              options: ["La capitale de l'Italie", "Le numéro de téléphone d'un élève", "La hauteur officielle de la tour Eiffel à Paris", "La recette des crêpes"],
              answer: 1,
              why: "Un numéro de téléphone permet de joindre et d'identifier une personne : c'est une donnée personnelle.",
            },
            {
              q: "Que signifie le sigle RGPD ?",
              options: ["Réseau général de partage des documents numériques", "Registre général des pirates détectés", "Règle générale de prudence numérique", "Règlement général sur la protection des données"],
              answer: 3,
              why: "Le RGPD est le règlement européen, appliqué depuis 2018, qui protège les données personnelles dans l'Union européenne.",
            },
            {
              q: "Un message urgent vous demande de cliquer sur un lien pour « débloquer votre compte » en saisissant votre mot de passe. Il s'agit probablement :",
              options: ["d'une mise à jour", "d'un message de la CNIL", "d'un hameçonnage", "d'une sauvegarde automatique"],
              answer: 2,
              why: "L'urgence et la demande de mot de passe par un lien sont les signes typiques de l'hameçonnage : on ne clique pas.",
            },
            {
              q: "Quel mot de passe est le plus solide ?",
              options: ["Chat!Lune8Velo#Mer", "julien12octobre2011", "azerty", "MotDePasse"],
              answer: 0,
              why: "Il est long, mélange majuscules, minuscules, chiffre et caractères spéciaux, sans prénom ni date. « julien12octobre2011 » est long, mais facile à deviner avec un prénom et une date.",
            },
            {
              q: "À quoi sert la double authentification ?",
              options: ["À se connecter deux fois plus vite", "À avoir deux comptes différents avec le même mot de passe", "À protéger le compte si le mot de passe est volé", "À effacer ses données personnelles"],
              answer: 2,
              why: "Elle demande une seconde preuve d'identité, comme un code reçu sur le téléphone : un pirate qui n'a que le mot de passe ne peut pas entrer.",
            },
          ],
          trap: "Penser que seuls le nom et l'adresse sont des données personnelles : une position GPS, une adresse IP, une voix ou des habitudes de navigation permettent aussi d'identifier une personne.",
          method: "Devant un message inattendu, posez trois questions : est-ce que j'attendais ce message ? Me presse-t-on d'agir vite ? Me demande-t-on un mot de passe, un code ou de l'argent ? Une seule réponse « oui » suffit pour ne pas cliquer et vérifier par un autre moyen.",
        },
      ],
    },
    /* ==================================================================== */
    /* MATIÈRE, ÉNERGIE, INFORMATION : LA STRUCTURE D'UN SYSTÈME              */
    /* ==================================================================== */
    {
      id: 'matiere-energie-information',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'materiaux',
          title: 'Les familles de matériaux et leurs propriétés',
          minutes: 30,
          objectives: [
            "Classer un matériau dans sa famille : métaux, matières plastiques, matériaux organiques naturels, céramiques et minéraux, composites.",
            "Identifier les propriétés d'un matériau : masse volumique, conductivités, résistance mécanique, résistance à la corrosion.",
            "Calculer une masse à partir de la masse volumique et du volume.",
            "Choisir un matériau adapté à une fonction en tenant compte de son impact environnemental.",
          ],
          course: [
            {
              heading: "Les familles de matériaux",
              paragraphs: [
                "Un matériau est une matière choisie pour fabriquer un objet. On classe les matériaux en familles, selon leur origine et leur composition. Les métaux sont obtenus à partir de minerais : le fer et l'acier (un alliage de fer et d'un peu de carbone), l'aluminium, le cuivre, le zinc. Les matières plastiques sont fabriquées surtout à partir du pétrole : le polyéthylène (PE) des sacs, le PET des bouteilles, le PVC des tuyaux, le polystyrène.",
                "Les matériaux organiques d'origine naturelle viennent des végétaux ou des animaux : le bois, le papier et le carton, le coton, la laine, le cuir. Les céramiques et matériaux minéraux sont obtenus à partir de roches, de sable ou d'argile, souvent cuits à haute température : le verre, la porcelaine, la terre cuite, et aussi le béton. Les matériaux composites associent plusieurs matériaux pour cumuler leurs qualités : la fibre de carbone noyée dans une résine, la fibre de verre, le béton armé (du béton et des barres d'acier).",
              ],
              box: { label: "À retenir", text: "Cinq familles : les métaux (acier, aluminium, cuivre), les matières plastiques (PE, PET, PVC), les matériaux organiques naturels (bois, carton, coton), les céramiques et minéraux (verre, porcelaine, béton), les composites (fibre de carbone, béton armé)." },
            },
            {
              heading: "Les propriétés des matériaux",
              paragraphs: [
                "Chaque matériau a des propriétés qui le rendent adapté ou non à un usage. La masse volumique indique si le matériau est lourd ou léger pour un même volume : l'acier (environ 7,8 g/cm³) est près de trois fois plus lourd que l'aluminium (environ 2,7 g/cm³) ; le bois de pin (environ 0,5 g/cm³) est plus léger que l'eau (1 g/cm³), c'est pourquoi il flotte.",
                "La conductivité électrique indique si le matériau laisse passer le courant : les métaux sont conducteurs, et le cuivre, l'un des meilleurs, est utilisé dans les fils électriques, alors que le plastique, le verre et le bois sec sont isolants. La conductivité thermique indique si la chaleur passe facilement : le fond métallique d'une casserole chauffe vite, son manche en plastique ou en bois protège la main.",
                "Les propriétés mécaniques décrivent la façon dont le matériau supporte les efforts : la résistance (ne pas casser), la dureté (ne pas se rayer), l'élasticité (reprendre sa forme), la fragilité (casser sans se déformer, comme le verre). Enfin, la résistance à la corrosion indique si le matériau s'abîme au contact de l'eau ou de l'air : l'acier ordinaire rouille, alors que l'aluminium, l'acier inoxydable et la plupart des plastiques résistent.",
              ],
              box: { label: "Formule", text: "Masse volumique : ρ = m ÷ V (la masse divisée par le volume), en g/cm³ ou en kg/m³. On en déduit m = ρ × V. Exemple : 10 cm³ d'aluminium (2,7 g/cm³) ont une masse de 2,7 × 10 = 27 g." },
            },
            {
              heading: "Identifier un matériau par des tests",
              paragraphs: [
                "Pour reconnaître un matériau, on peut réaliser des tests simples. Le test de l'aimant : un aimant attire le fer, l'acier et la fonte, mais pas l'aluminium, le cuivre ni le zinc. Le test de conductivité : on place le matériau dans un circuit avec une pile et une lampe ; si la lampe s'allume, le matériau est conducteur. Le test de flottaison : un matériau dont la masse volumique est inférieure à celle de l'eau flotte.",
                "On observe aussi l'aspect (brillant, mat, transparent), la couleur, la masse en main, le son produit quand on le frappe. Ces tests sont utilisés à grande échelle dans les centres de tri : un puissant aimant sépare les emballages en acier des autres déchets, et certains plastiques sont séparés selon qu'ils flottent ou coulent dans l'eau.",
              ],
              box: { label: "Repère", text: "Attiré par un aimant : fer, acier, fonte. Conducteurs électriques : les métaux. Flottent sur l'eau : la plupart des bois, le polyéthylène, le polypropylène." },
            },
            {
              heading: "Choisir un matériau",
              paragraphs: [
                "Le concepteur choisit un matériau selon ce que la pièce doit faire (porter une charge, conduire le courant, isoler, être transparent...), selon les contraintes (masse, prix, sécurité) et selon l'impact environnemental. Pour un cadre de vélo léger et rigide, on choisit l'aluminium ou un composite ; pour une fenêtre, le verre transparent ; pour un fil électrique, le cuivre entouré d'une gaine en plastique isolant.",
                "L'impact environnemental compte de plus en plus. Certains matériaux sont renouvelables, comme le bois issu de forêts gérées durablement ; d'autres non, comme le pétrole ou les minerais. Les métaux et le verre se recyclent très bien, presque sans limite ; certains plastiques se recyclent, d'autres difficilement ; les composites sont souvent difficiles à recycler, car leurs constituants sont difficiles à séparer.",
              ],
              box: { label: "À retenir", text: "Choisir un matériau, c'est comparer ses propriétés (masse, conductivités, résistance, corrosion), son prix et son impact (origine renouvelable ou non, recyclabilité) avec ce que la pièce doit faire." },
            },
          ],
          keyPoints: [
            "Cinq familles : métaux, matières plastiques, matériaux organiques naturels, céramiques et minéraux, composites.",
            "Masse volumique ρ = m ÷ V, donc m = ρ × V. Acier ≈ 7,8 g/cm³, aluminium ≈ 2,7 g/cm³, eau = 1 g/cm³.",
            "Les métaux conduisent l'électricité et la chaleur ; le plastique, le verre et le bois sec sont isolants.",
            "Un aimant attire le fer, l'acier et la fonte, mais pas l'aluminium ni le cuivre.",
            "On choisit un matériau selon sa fonction, les contraintes et son impact environnemental (origine, recyclabilité).",
          ],
          example: {
            statement: "On veut fabriquer la poignée d'une casserole. Faut-il choisir l'acier, le cuivre ou une matière plastique résistante à la chaleur, comme la bakélite ? Justifier à l'aide des propriétés des matériaux.",
            solution: [
              "La poignée est tenue à la main pendant que la casserole chauffe : la chaleur ne doit pas passer jusqu'à la main. Il faut un matériau qui conduit mal la chaleur, un isolant thermique.",
              "L'acier et le cuivre sont des métaux : ils conduisent bien la chaleur, le cuivre encore mieux que l'acier. Une poignée en métal deviendrait brûlante.",
              "La bakélite est une matière plastique qui conduit très mal la chaleur et qui ne fond pas au contact d'une casserole chaude.",
              "Réponse : on choisit la matière plastique résistante à la chaleur, car c'est un isolant thermique. Le métal est réservé au fond de la casserole, qui doit au contraire transmettre la chaleur aux aliments.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chaque matériau dans sa famille (métaux, matières plastiques, matériaux organiques naturels, céramiques et minéraux, composites) : a) le carton ; b) l'aluminium ; c) le PET ; d) la porcelaine ; e) la fibre de carbone dans une résine ; f) le cuivre ; g) la laine ; h) le verre.",
              hint: "Demandez-vous d'où vient le matériau : d'un minerai, du pétrole, d'un être vivant, d'une roche ou du sable, ou d'un assemblage de plusieurs matériaux.",
              solution: [
                "Métaux : b) l'aluminium et f) le cuivre, obtenus à partir de minerais.",
                "Matières plastiques : c) le PET, fabriqué à partir du pétrole.",
                "Matériaux organiques naturels : a) le carton (issu du bois) et g) la laine (issue du mouton).",
                "Céramiques et minéraux : d) la porcelaine (argile cuite) et h) le verre (sable fondu).",
                "Composites : e) la fibre de carbone dans une résine, qui associe deux matériaux.",
                "Résultat : métaux b, f ; plastiques c ; organiques a, g ; céramiques d, h ; composites e.",
              ],
            },
            {
              level: 2,
              statement: "Une pièce en forme de pavé mesure 5 cm × 4 cm × 2 cm. a) Calculer son volume. b) Calculer sa masse si elle est en acier (7,8 g/cm³), puis si elle est en aluminium (2,7 g/cm³). c) Une autre pièce de même volume a une masse de 56 g. Calculer sa masse volumique, puis trouver son matériau dans cette liste : bois de chêne (environ 0,7 g/cm³), PVC (environ 1,4 g/cm³), aluminium (2,7 g/cm³), cuivre (environ 8,9 g/cm³).",
              hint: "Volume d'un pavé = longueur × largeur × hauteur. Ensuite, m = ρ × V et ρ = m ÷ V.",
              solution: [
                "a) V = 5 × 4 × 2 = 40 cm³.",
                "b) En acier : m = 7,8 × 40 = 312 g. En aluminium : m = 2,7 × 40 = 108 g.",
                "c) ρ = m ÷ V = 56 ÷ 40 = 1,4 g/cm³.",
                "Cette valeur correspond au PVC (environ 1,4 g/cm³).",
                "Résultat : 40 cm³ ; 312 g en acier, 108 g en aluminium ; la troisième pièce est en PVC.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un fabricant de trottinettes hésite entre trois matériaux pour le plateau (la planche sur laquelle on pose les pieds), dont le volume est de 600 cm³ (données en partie fictives). Acier : 7,8 g/cm³, rouille s'il n'est pas protégé, très résistant, recyclable. Aluminium : 2,7 g/cm³, ne rouille pas, résistant, recyclable. Bois contreplaqué : 0,6 g/cm³, s'abîme à l'humidité, assez résistant, renouvelable. a) Calculer la masse du plateau pour chaque matériau, en grammes puis en kilogrammes. b) Le cahier des charges impose : un plateau de moins de 2 kg, utilisable sous la pluie et recyclable. Quel matériau convient ? c) Combien de fois le plateau en acier est-il plus lourd que celui en aluminium (arrondir au dixième) ? d) Quel test simple permet de vérifier qu'un plateau livré est bien en aluminium et non en acier ?",
              hint: "m = ρ × V, puis 1 kg = 1 000 g. Vérifiez chaque exigence du cahier des charges, une par une, pour chaque matériau.",
              solution: [
                "a) Acier : 7,8 × 600 = 4 680 g = 4,68 kg. Aluminium : 2,7 × 600 = 1 620 g = 1,62 kg. Contreplaqué : 0,6 × 600 = 360 g = 0,36 kg.",
                "b) L'acier dépasse 2 kg (4,68 kg) : il est éliminé. Le contreplaqué est léger, mais il s'abîme à l'humidité : il ne convient pas sous la pluie. L'aluminium pèse 1,62 kg, moins de 2 kg, ne rouille pas et se recycle : il remplit les trois exigences.",
                "c) 4 680 ÷ 1 620 ≈ 2,9. Le plateau en acier est environ 2,9 fois plus lourd. On retrouve le rapport des masses volumiques : 7,8 ÷ 2,7 ≈ 2,9.",
                "d) Le test de l'aimant : un aimant attire l'acier, qui contient du fer, mais pas l'aluminium. Si l'aimant ne colle pas au plateau, il n'est pas en acier.",
                "Résultat : 4,68 kg, 1,62 kg et 0,36 kg ; l'aluminium est le seul à respecter le cahier des charges ; l'acier est environ 2,9 fois plus lourd ; on vérifie avec un aimant.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les matériaux.",
            statements: [
              { text: "Un aimant attire tous les métaux.", true: false, why: "Il attire le fer, l'acier et la fonte, mais pas l'aluminium, le cuivre ni le zinc." },
              { text: "Le cuivre est utilisé dans les fils électriques parce qu'il conduit très bien le courant.", true: true, why: "C'est l'un des meilleurs conducteurs électriques parmi les métaux courants." },
              { text: "Le bois de pin flotte parce que sa masse volumique est inférieure à celle de l'eau.", true: true, why: "Environ 0,5 g/cm³ pour le pin, contre 1 g/cm³ pour l'eau." },
              { text: "Le verre est un matériau organique.", true: false, why: "Il est fabriqué à partir de sable fondu : c'est un matériau minéral, de la famille des céramiques." },
              { text: "Un matériau composite associe plusieurs matériaux pour cumuler leurs qualités.", true: true, why: "Par exemple, le béton armé associe le béton, qui résiste à l'écrasement, et l'acier, qui résiste à l'étirement." },
              { text: "Un kilogramme d'acier est plus lourd qu'un kilogramme d'aluminium.", true: false, why: "Les deux ont la même masse : 1 kg. C'est à volume égal que l'acier est plus lourd, car sa masse volumique est plus grande." },
              { text: "La plupart des matières plastiques sont fabriquées à partir du pétrole.", true: true, why: "Le pétrole est leur principale matière première, même si certains plastiques sont fabriqués à partir de végétaux." },
            ],
          },
          quiz: [
            {
              q: "À quelle famille appartient l'aluminium ?",
              options: ["Les métaux", "Les matières plastiques", "Les matériaux composites", "Les céramiques"],
              answer: 0,
              why: "L'aluminium est un métal, obtenu à partir d'un minerai, la bauxite.",
            },
            {
              q: "Quelle propriété indique si un matériau est lourd ou léger pour un même volume ?",
              options: ["La conductivité thermique", "La masse volumique", "La résistance à la corrosion", "L'élasticité"],
              answer: 1,
              why: "La masse volumique est la masse d'un volume donné de matériau, par exemple la masse de 1 cm³.",
            },
            {
              q: "Quel test permet de distinguer une canette en acier d'une canette en aluminium ?",
              options: ["Le test de conductivité électrique", "La mesure de sa température", "La mesure de son épaisseur", "Le test de l'aimant"],
              answer: 3,
              why: "L'aimant attire l'acier, qui contient du fer, mais pas l'aluminium. Les deux métaux conduisent le courant : le test de conductivité ne les distingue pas.",
            },
            {
              q: "Quelle est la masse de 20 cm³ de cuivre (masse volumique 8,9 g/cm³) ?",
              options: ["2,2 g", "28,9 g", "178 g", "1 780 g"],
              answer: 2,
              why: "m = ρ × V = 8,9 × 20 = 178 g.",
            },
            {
              q: "Pourquoi le manche d'une casserole est-il souvent en bois ou en plastique ?",
              options: ["Parce que ces matériaux sont conducteurs électriques", "Parce qu'ils résistent mieux à l'eau que l'inox", "Parce qu'ils sont plus lourds que le métal", "Parce qu'ils conduisent mal la chaleur"],
              answer: 3,
              why: "Le bois et le plastique sont des isolants thermiques : la chaleur de la casserole n'arrive pas jusqu'à la main.",
            },
          ],
          trap: "Confondre « lourd » et « dense » : un kilogramme d'acier et un kilogramme d'aluminium ont la même masse ; c'est à volume égal que l'acier est plus lourd, parce que sa masse volumique est plus grande.",
          method: "Pour choisir un matériau, faites un tableau : en lignes les matériaux possibles, en colonnes les exigences (masse, conduction, résistance, corrosion, prix, recyclage). Cochez chaque case, puis gardez le matériau qui remplit toutes les exigences.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chaine-energie',
          title: "La chaîne d'énergie : alimenter, transmettre, convertir",
          minutes: 30,
          objectives: [
            "Identifier les formes d'énergie et les sources d'énergie utilisées par un objet.",
            "Décrire la chaîne d'énergie d'un système : alimenter, distribuer, convertir, transmettre.",
            "Associer chaque fonction de la chaîne d'énergie au composant qui la réalise.",
            "Repérer les pertes d'énergie et calculer la part d'énergie utile.",
          ],
          course: [
            {
              heading: "Formes et sources d'énergie",
              paragraphs: [
                "Pour fonctionner, tout objet technique a besoin d'énergie. L'énergie existe sous plusieurs formes : électrique (le courant), mécanique (un mouvement), thermique (la chaleur), lumineuse (la lumière) ou chimique (stockée dans une pile, une batterie, un carburant, les aliments). Elle se mesure en joules (J) ; pour l'électricité consommée à la maison, on utilise souvent le kilowattheure (kWh).",
                "Les sources d'énergie sont les ressources dont on tire cette énergie. Certaines sont renouvelables, car elles se reconstituent rapidement à l'échelle d'une vie humaine : le Soleil, le vent, l'eau des rivières, la biomasse (le bois, par exemple). D'autres ne le sont pas, car leurs réserves s'épuisent : le pétrole, le gaz naturel, le charbon et l'uranium utilisé dans les centrales nucléaires.",
              ],
              box: { label: "Définition", text: "Une source d'énergie renouvelable se reconstitue rapidement à l'échelle humaine (Soleil, vent, eau, biomasse). Une source non renouvelable a des réserves limitées qui s'épuisent (pétrole, gaz, charbon, uranium)." },
            },
            {
              heading: "Les fonctions de la chaîne d'énergie",
              paragraphs: [
                "La chaîne d'énergie est la partie d'un système qui fournit l'énergie et réalise l'action. On la décrit avec quatre fonctions, dans l'ordre. Alimenter : fournir l'énergie au système, et parfois la stocker. Ce rôle est joué par le réseau électrique (une prise), une pile, une batterie ou un panneau solaire.",
                "Distribuer : laisser passer ou non l'énergie vers le composant qui agit, selon les ordres reçus de la chaîne d'information. C'est le rôle d'un interrupteur, d'un relais ou d'une carte de commande de moteur, qui peut aussi doser l'énergie pour faire varier la vitesse. Convertir : transformer l'énergie en une autre forme, utile à l'action. Un moteur convertit l'énergie électrique en énergie mécanique, une LED en énergie lumineuse, une résistance chauffante en énergie thermique.",
                "Transmettre : faire passer l'énergie mécanique du moteur jusqu'à la pièce qui agit, en adaptant le mouvement (vitesse, sens, direction). C'est le rôle des engrenages, des poulies et courroies, des chaînes et pignons, ou d'un système pignon et crémaillère. Toutes les chaînes d'énergie n'ont pas besoin de cette fonction : une lampe n'a aucun mouvement à transmettre.",
              ],
              box: { label: "À retenir", text: "Alimenter (prise, pile, batterie, panneau solaire) → Distribuer (interrupteur, relais, carte de commande) → Convertir (moteur, LED, résistance chauffante) → Transmettre (engrenages, courroie, chaîne, crémaillère) → Action." },
            },
            {
              heading: "Transmettre et adapter le mouvement",
              paragraphs: [
                "Un petit moteur électrique tourne souvent très vite, mais avec peu de force. Les engrenages permettent d'adapter ce mouvement. Quand une petite roue dentée (la roue menante, fixée sur le moteur) entraîne une grande roue dentée (la roue menée), la grande roue tourne moins vite, mais avec plus de force. Si la roue menante a 10 dents et la roue menée 30 dents, la roue menée fait un tour pendant que la roue menante en fait trois.",
                "Deux roues dentées en contact tournent en sens contraires. Une poulie et une courroie, ou une chaîne et des pignons comme sur un vélo, transmettent la rotation à distance, dans le même sens. Un système pignon et crémaillère transforme une rotation en mouvement en ligne droite, appelé translation : c'est ainsi que glisse un portail coulissant.",
              ],
              box: { label: "Repère", text: "Une petite roue qui entraîne une grande : la grande tourne moins vite, avec plus de force. Deux roues dentées en contact : sens de rotation inversé. Pignon et crémaillère : rotation → translation." },
            },
            {
              heading: "Pertes d'énergie et énergie utile",
              paragraphs: [
                "À chaque conversion, une partie de l'énergie est perdue, le plus souvent sous forme de chaleur : un moteur chauffe, une ampoule chauffe, les frottements dans les engrenages chauffent. L'énergie n'a pas disparu : elle s'est dispersée sous une forme inutile pour l'objet. On représente ces échanges par un diagramme qui montre l'énergie reçue, l'énergie utile et l'énergie perdue.",
                "Pour comparer deux appareils, on calcule la part d'énergie utile : énergie utile ÷ énergie reçue × 100. Une ampoule à incandescence ne convertit qu'une petite partie de l'énergie électrique en lumière, le reste part en chaleur ; une lampe à LED en convertit une part bien plus grande. C'est pourquoi elle consomme moins d'énergie pour éclairer autant.",
              ],
              box: { label: "Formule", text: "Énergie reçue = énergie utile + énergie perdue. Part d'énergie utile (en %) = énergie utile ÷ énergie reçue × 100. Plus elle est grande, plus l'appareil est efficace." },
            },
          ],
          keyPoints: [
            "Formes d'énergie : électrique, mécanique, thermique, lumineuse, chimique ; l'énergie se mesure en joules (J).",
            "Sources renouvelables : Soleil, vent, eau, biomasse ; non renouvelables : pétrole, gaz, charbon, uranium.",
            "Chaîne d'énergie : alimenter, distribuer, convertir, transmettre, puis action.",
            "Une petite roue dentée qui entraîne une grande la fait tourner moins vite, avec plus de force.",
            "Énergie reçue = énergie utile + énergie perdue (le plus souvent de la chaleur).",
          ],
          example: {
            statement: "Une trottinette électrique comprend : une batterie ; un contrôleur électronique, qui envoie plus ou moins d'énergie au moteur selon la position de la gâchette ; un moteur électrique placé dans la roue arrière ; et la roue, qui fait avancer la trottinette. Décrire sa chaîne d'énergie et les conversions d'énergie.",
            solution: [
              "Alimenter : la batterie fournit l'énergie. Elle la stocke sous forme chimique et la restitue sous forme électrique.",
              "Distribuer : le contrôleur laisse passer plus ou moins d'énergie vers le moteur, selon l'ordre donné par la gâchette.",
              "Convertir : le moteur convertit l'énergie électrique en énergie mécanique, un mouvement de rotation.",
              "Transmettre : le moteur est logé dans la roue et l'entraîne directement, sans chaîne ni courroie. La roue, au contact du sol, fait avancer la trottinette.",
              "Pertes : la batterie, le contrôleur et le moteur chauffent un peu, et les frottements dissipent aussi de l'énergie.",
              "Réponse : batterie (alimenter) → contrôleur (distribuer) → moteur (convertir) → roue (action) ; énergie chimique → électrique → mécanique, avec des pertes sous forme de chaleur.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque composant, indiquer la fonction de la chaîne d'énergie qu'il réalise (alimenter, distribuer, convertir ou transmettre) : a) une batterie de téléphone ; b) un relais ; c) un moteur électrique ; d) un engrenage ; e) une résistance chauffante ; f) une prise de courant ; g) une courroie ; h) un interrupteur.",
              hint: "Pour chaque composant, demandez-vous s'il fournit l'énergie, s'il la laisse passer ou non, s'il la transforme, ou s'il fait passer un mouvement.",
              solution: [
                "Alimenter : a) la batterie et f) la prise de courant fournissent l'énergie.",
                "Distribuer : b) le relais et h) l'interrupteur laissent passer ou coupent l'énergie.",
                "Convertir : c) le moteur (électrique → mécanique) et e) la résistance chauffante (électrique → thermique).",
                "Transmettre : d) l'engrenage et g) la courroie font passer le mouvement.",
                "Résultat : alimenter a, f ; distribuer b, h ; convertir c, e ; transmettre d, g.",
              ],
            },
            {
              level: 2,
              statement: "En 10 secondes, un ventilateur de bureau reçoit 400 J d'énergie électrique (données fictives). Son moteur fournit 300 J d'énergie mécanique aux pales ; le reste est perdu. a) Calculer l'énergie perdue et indiquer sous quelle forme elle est perdue. b) Calculer la part d'énergie utile, en pourcentage. c) Pour la même énergie reçue, un autre ventilateur fournit 340 J d'énergie mécanique. Lequel est le plus efficace ? Justifier par un calcul.",
              hint: "Énergie perdue = énergie reçue - énergie utile. Part utile = énergie utile ÷ énergie reçue × 100.",
              solution: [
                "a) Énergie perdue : 400 - 300 = 100 J. Elle est perdue surtout sous forme de chaleur : le moteur chauffe.",
                "b) Part d'énergie utile : 300 ÷ 400 × 100 = 75 %.",
                "c) Second ventilateur : 340 ÷ 400 × 100 = 85 %.",
                "85 % > 75 % : le second ventilateur transforme une plus grande part de l'énergie reçue en mouvement des pales.",
                "Résultat : 100 J perdus en chaleur ; 75 % d'énergie utile ; le second ventilateur (85 %) est le plus efficace.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un portail coulissant est actionné par un moteur électrique branché sur le réseau, commandé par une carte de commande. Le moteur fait tourner une petite roue dentée de 12 dents, qui entraîne une grande roue dentée de 48 dents. Sur l'axe de la grande roue est fixé un pignon qui engrène sur une crémaillère vissée le long du portail. a) Décrire la chaîne d'énergie complète, du réseau électrique jusqu'au portail. b) Quand le moteur fait 1 tour, combien de tours fait la grande roue ? Et quand il fait 100 tours ? c) À chaque tour de la grande roue, le pignon fait avancer la crémaillère de 15 cm. De combien le portail avance-t-il quand le moteur fait 100 tours ? Donner le résultat en mètres. d) Pour fermer le portail, il faut inverser le mouvement. Quelle fonction de la chaîne d'énergie s'en charge ?",
              hint: "La grande roue a 48 ÷ 12 = 4 fois plus de dents que la petite : elle tourne 4 fois moins vite. Pour c), multipliez le nombre de tours de la grande roue par 15 cm.",
              solution: [
                "a) Réseau électrique (alimenter) → carte de commande (distribuer) → moteur (convertir l'énergie électrique en énergie mécanique) → engrenages puis pignon et crémaillère (transmettre) → le portail glisse.",
                "b) 48 ÷ 12 = 4 : la grande roue tourne 4 fois moins vite que la petite. Quand le moteur fait 1 tour, la grande roue fait 1 ÷ 4 = 0,25 tour, soit un quart de tour. Pour 100 tours du moteur : 100 ÷ 4 = 25 tours.",
                "c) 25 × 15 = 375 cm, soit 3,75 m. Le portail avance de 3,75 m.",
                "d) C'est la fonction distribuer : sur ordre de la chaîne d'information, la carte de commande inverse le sens du courant envoyé au moteur, qui tourne alors dans l'autre sens.",
                "Résultat : réseau, carte, moteur, engrenages, pignon et crémaillère ; un quart de tour, puis 25 tours ; 3,75 m ; l'inversion est faite par la fonction distribuer.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la chaîne d'énergie d'un vélo à assistance électrique dont le moteur est placé au pédalier.",
            items: [
              "La batterie fournit l'énergie électrique (alimenter)",
              "Le contrôleur dose l'énergie envoyée au moteur (distribuer)",
              "Le moteur transforme l'énergie électrique en rotation (convertir)",
              "La chaîne et les pignons font passer la rotation à la roue (transmettre)",
              "La roue arrière tourne et le vélo avance",
            ],
          },
          quiz: [
            {
              q: "Quelle source d'énergie est renouvelable ?",
              options: ["Le pétrole", "Le charbon", "Le gaz naturel", "Le vent"],
              answer: 3,
              why: "Le vent se renouvelle sans cesse ; le pétrole, le charbon et le gaz ont des réserves limitées qui s'épuisent.",
            },
            {
              q: "Dans une chaîne d'énergie, un relais réalise la fonction :",
              options: ["alimenter", "convertir", "distribuer", "transmettre"],
              answer: 2,
              why: "Le relais laisse passer ou coupe l'énergie vers l'actionneur, sur ordre de la chaîne d'information : il distribue l'énergie.",
            },
            {
              q: "Une LED convertit l'énergie électrique en énergie :",
              options: ["lumineuse", "chimique", "mécanique", "nucléaire"],
              answer: 0,
              why: "La LED produit de la lumière ; une petite partie de l'énergie est perdue sous forme de chaleur.",
            },
            {
              q: "Une roue dentée de 10 dents entraîne une roue de 40 dents. Quand la petite fait 8 tours, la grande en fait :",
              options: ["32", "2", "4", "8"],
              answer: 1,
              why: "La grande roue a 4 fois plus de dents : elle tourne 4 fois moins vite. 8 ÷ 4 = 2 tours.",
            },
            {
              q: "Un moteur reçoit 500 J et fournit 400 J d'énergie mécanique. Sa part d'énergie utile est de :",
              options: ["100 %", "80 %", "20 %", "125 %"],
              answer: 1,
              why: "400 ÷ 500 × 100 = 80 %. Les 100 J restants sont perdus, surtout sous forme de chaleur.",
            },
          ],
          trap: "Croire qu'un appareil transforme toute l'énergie reçue en énergie utile : une partie est toujours perdue, le plus souvent sous forme de chaleur, si bien que l'énergie utile est toujours inférieure à l'énergie reçue.",
          method: "Pour décrire une chaîne d'énergie, partez de la prise ou de la batterie et suivez l'énergie jusqu'à l'action, en posant à chaque composant la question : « Fournit-il l'énergie, la laisse-t-il passer, la transforme-t-il ou fait-il passer le mouvement ? »",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chaine-information',
          title: "La chaîne d'information : acquérir, traiter, communiquer",
          minutes: 30,
          objectives: [
            "Décrire la chaîne d'information d'un système : acquérir, traiter, communiquer.",
            "Distinguer information logique, analogique et numérique.",
            "Identifier le rôle de l'interface homme-machine et du microcontrôleur.",
            "Relier la chaîne d'information à la chaîne d'énergie qu'elle commande.",
          ],
          course: [
            {
              heading: "Le rôle de la chaîne d'information",
              paragraphs: [
                "La chaîne d'information est la partie d'un système qui recueille les informations, prend les décisions et donne les ordres. Elle ne réalise pas l'action elle-même : elle commande la chaîne d'énergie, qui agit. On la décrit avec trois fonctions : acquérir, traiter, communiquer.",
                "Prenons une barrière de parking automatique. Un capteur détecte qu'une voiture est arrivée et un lecteur lit le ticket (acquérir) ; une carte électronique vérifie le ticket et décide d'ouvrir (traiter) ; elle envoie l'ordre au moteur et allume un feu vert (communiquer). Sans chaîne d'information, la barrière ne saurait ni quand s'ouvrir, ni quand se refermer.",
              ],
              box: { label: "Définition", text: "La chaîne d'information acquiert les informations (capteurs, boutons), les traite (microcontrôleur et programme) et communique des ordres à la chaîne d'énergie et des messages à l'utilisateur ou à d'autres systèmes." },
            },
            {
              heading: "Acquérir : des informations de trois natures",
              paragraphs: [
                "Acquérir, c'est recueillir une information sur l'environnement ou sur l'utilisateur, et la transformer en signal électrique compréhensible par la carte. Les capteurs relèvent des informations sur le milieu : température, lumière, présence, distance. L'interface homme-machine (IHM) permet à l'utilisateur de donner des consignes : bouton, clavier, écran tactile, télécommande, commande vocale.",
                "L'information peut être de trois natures. Logique (ou tout ou rien) : deux états seulement, notés 1 et 0 (bouton appuyé ou non). Analogique : une valeur qui varie en continu (la température de l'air peut valoir 19,3 °C, 19,35 °C...). Numérique : une valeur codée par une suite de 0 et de 1, avec un nombre limité de valeurs possibles. La carte transforme les informations analogiques en informations numériques pour pouvoir les traiter.",
              ],
              box: { label: "À retenir", text: "Logique : deux états (1 ou 0). Analogique : une valeur qui varie en continu. Numérique : une valeur codée en bits. Avec n bits, on peut coder 2ⁿ valeurs : 8 bits donnent 2⁸ = 256 valeurs, de 0 à 255." },
            },
            {
              heading: "Traiter : le rôle du microcontrôleur",
              paragraphs: [
                "Traiter, c'est utiliser les informations reçues pour prendre une décision. Ce travail est fait par un microcontrôleur, un petit ordinateur réuni sur une seule puce électronique, monté sur une carte programmable comme celles utilisées en classe. Il exécute un programme écrit par un être humain, par exemple : « si la luminosité est inférieure au seuil et qu'une présence est détectée, alors allumer la lampe ».",
                "Le traitement comprend aussi la mémorisation : le microcontrôleur garde en mémoire une consigne de température, une heure de réveil, un nombre de passages comptés. Il peut faire des calculs, comparer une valeur à un seuil, mesurer le temps qui passe. Pour changer le comportement d'un système, il suffit souvent de modifier son programme, sans changer les composants.",
              ],
              box: { label: "Repère", text: "Le microcontrôleur exécute un programme : il compare les informations à des seuils, calcule, mémorise et décide. C'est le « cerveau » du système." },
            },
            {
              heading: "Communiquer : donner des ordres et informer",
              paragraphs: [
                "Communiquer, c'est transmettre le résultat du traitement. Vers la chaîne d'énergie : la carte envoie un ordre au relais ou à la carte de commande du moteur. Vers l'utilisateur : un écran, un voyant, un bip, un message vocal. Vers d'autres systèmes : un message envoyé par Wi-Fi ou par Bluetooth à un smartphone ou à un serveur.",
                "Les deux chaînes sont donc reliées : la fonction communiquer de la chaîne d'information commande la fonction distribuer de la chaîne d'énergie. On représente souvent l'ensemble par un schéma : en haut la chaîne d'information (acquérir → traiter → communiquer), en bas la chaîne d'énergie (alimenter → distribuer → convertir → transmettre), et une flèche « ordres » qui descend de l'une vers l'autre.",
              ],
              box: { label: "À retenir", text: "La chaîne d'information décide, la chaîne d'énergie agit. Les ordres passent de la fonction communiquer à la fonction distribuer." },
            },
          ],
          keyPoints: [
            "Chaîne d'information : acquérir (capteurs, IHM), traiter (microcontrôleur et programme), communiquer (ordres et messages).",
            "Information logique : 1 ou 0 ; analogique : valeur qui varie en continu ; numérique : valeur codée en bits.",
            "Avec n bits, on code 2ⁿ valeurs : 8 bits donnent 256 valeurs, de 0 à 255.",
            "Le microcontrôleur exécute un programme : il compare, calcule, mémorise et décide.",
            "La fonction communiquer commande la fonction distribuer de la chaîne d'énergie.",
          ],
          example: {
            statement: "Un distributeur de boissons fonctionne ainsi : l'utilisateur choisit sa boisson sur un clavier et paie avec une carte bancaire ; une carte électronique vérifie le paiement et le stock ; elle commande le moteur qui pousse la canette ; un écran affiche « Merci ». Décrire la chaîne d'information du distributeur.",
            solution: [
              "Acquérir : le clavier (IHM) reçoit le choix de l'utilisateur ; le lecteur de carte acquiert les informations de paiement ; un capteur indique s'il reste des canettes.",
              "Traiter : la carte électronique vérifie que le paiement est accepté et que la boisson est en stock, puis décide de la distribuer.",
              "Communiquer : elle envoie l'ordre de mise en marche à la chaîne d'énergie (vers le moteur) et affiche « Merci » sur l'écran pour l'utilisateur.",
              "Réponse : acquérir = clavier, lecteur de carte, capteur de stock ; traiter = carte électronique ; communiquer = ordre au moteur et message à l'écran.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dire si chaque information est logique, analogique ou numérique : a) une porte ouverte ou fermée ; b) la température d'un four ; c) la valeur 10110010 lue par un microcontrôleur ; d) un bouton appuyé ou relâché ; e) la luminosité extérieure ; f) le niveau de lumière 173, sur une échelle de 0 à 255, affiché par une carte programmable.",
              hint: "Deux états seulement : logique. Une valeur qui varie en continu dans la nature : analogique. Une valeur codée avec des 0 et des 1, ou un nombre entier limité lu par une carte : numérique.",
              solution: [
                "a) Ouverte ou fermée, deux états : logique.",
                "b) La température varie en continu : analogique.",
                "c) Une suite de 0 et de 1 : numérique.",
                "d) Appuyé ou relâché, deux états : logique.",
                "e) La luminosité varie en continu : analogique.",
                "f) La carte a converti la luminosité en un nombre entier compris entre 0 et 255 : numérique.",
                "Résultat : logiques a, d ; analogiques b, e ; numériques c, f.",
              ],
            },
            {
              level: 2,
              statement: "Une sonnette connectée fonctionne ainsi : quand un visiteur appuie sur le bouton, une caméra filme, la carte électronique enregistre une courte vidéo, envoie une notification au smartphone du propriétaire et fait retentir un carillon dans la maison. La nuit, un capteur de luminosité fait allumer une LED infrarouge pour que la caméra voie dans l'obscurité. a) Classer dans acquérir, traiter ou communiquer : le bouton, la caméra, la carte électronique, la notification, le carillon, le capteur de luminosité. b) Quel élément de la chaîne d'énergie est commandé la nuit ? c) Le propriétaire veut aussi recevoir un e-mail. Quelle partie du système faut-il modifier ?",
              hint: "Demandez-vous pour chaque élément : recueille-t-il une information, décide-t-il, ou transmet-il un message ? Pour c), réfléchissez à ce qui décide de ce que fait le système.",
              solution: [
                "a) Acquérir : le bouton (consigne du visiteur), la caméra (images), le capteur de luminosité (lumière ambiante).",
                "Traiter : la carte électronique, qui enregistre la vidéo et décide de prévenir le propriétaire.",
                "Communiquer : la notification (vers le smartphone) et le carillon (vers les habitants de la maison).",
                "b) La LED infrarouge : elle convertit l'énergie électrique en lumière infrarouge pour éclairer la scène ; elle appartient à la chaîne d'énergie et reçoit l'ordre de la carte.",
                "c) Il faut modifier le programme de la carte (la fonction traiter), puisque la sonnette est déjà connectée à internet : aucun composant n'est à changer.",
                "Résultat : acquérir = bouton, caméra, capteur de luminosité ; traiter = carte ; communiquer = notification, carillon ; on modifie le programme pour l'e-mail.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une carte programmable mesure la luminosité avec un capteur et code la mesure sur 8 bits. a) Combien de valeurs différentes peut-elle coder ? Quelles sont la plus petite et la plus grande ? b) Une autre carte code la mesure sur 10 bits. Combien de valeurs peut-elle coder ? Laquelle des deux cartes donne la mesure la plus fine ? c) Avec la carte 8 bits, un lampadaire doit s'allumer quand la luminosité mesurée est inférieure à 60. Mesures relevées (données fictives) : 18 h : 140 ; 19 h : 85 ; 20 h : 59 ; 21 h : 12. À quelles heures le lampadaire est-il allumé ? d) Écrire en français la règle suivie par le programme, sous la forme « si ... alors ... sinon ... ».",
              hint: "Avec n bits, on code 2ⁿ valeurs, en commençant à 0. Pour c), comparez chaque mesure à 60 : « inférieure à 60 » signifie strictement plus petite que 60.",
              solution: [
                "a) 2⁸ = 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 256 valeurs. La plus petite est 0, la plus grande est 255.",
                "b) 2¹⁰ = 1 024 valeurs, de 0 à 1 023. La carte 10 bits découpe la même plage de luminosité en 4 fois plus de valeurs : sa mesure est plus fine.",
                "c) 140 et 85 ne sont pas inférieurs à 60 : lampadaire éteint à 18 h et 19 h. 59 < 60 et 12 < 60 : lampadaire allumé à 20 h et 21 h.",
                "d) « Si la luminosité mesurée est inférieure à 60, alors allumer le lampadaire, sinon éteindre le lampadaire. »",
                "Résultat : 256 valeurs (0 à 255) ; 1 024 valeurs, carte 10 bits plus fine ; allumé à 20 h et 21 h ; la règle compare la mesure au seuil de 60.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément à la fonction qu'il réalise.",
            pairs: [
              { left: "Bouton-poussoir", right: "Acquérir une consigne de l'utilisateur" },
              { left: "Capteur de température", right: "Acquérir une information sur le milieu" },
              { left: "Microcontrôleur", right: "Traiter les informations et décider" },
              { left: "Écran", right: "Communiquer un message à l'utilisateur" },
              { left: "Module Wi-Fi", right: "Communiquer avec d'autres appareils" },
              { left: "Mémoire de la carte", right: "Garder une consigne ou une mesure" },
            ],
          },
          quiz: [
            {
              q: "Quelles sont les trois fonctions de la chaîne d'information ?",
              options: ["Alimenter, distribuer, convertir", "Acquérir, convertir, transmettre", "Acquérir, traiter, communiquer", "Traiter, alimenter, transmettre"],
              answer: 2,
              why: "La chaîne d'information recueille (acquérir), décide (traiter) et donne des ordres (communiquer). Alimenter, distribuer et convertir appartiennent à la chaîne d'énergie.",
            },
            {
              q: "Combien de valeurs peut-on coder avec 8 bits ?",
              options: ["8", "256", "16", "255"],
              answer: 1,
              why: "Avec n bits, on code 2ⁿ valeurs : 2⁸ = 256 valeurs, numérotées de 0 à 255.",
            },
            {
              q: "Quel composant réalise la fonction traiter ?",
              options: ["Un capteur de présence", "Un moteur électrique", "Un écran d'affichage", "Un microcontrôleur"],
              answer: 3,
              why: "Le microcontrôleur exécute le programme et prend les décisions : il traite les informations.",
            },
            {
              q: "La température de l'air relevée par un thermomètre à aiguille est une information :",
              options: ["analogique", "logique (tout ou rien)", "numérique", "binaire"],
              answer: 0,
              why: "Elle peut prendre une infinité de valeurs qui varient en continu : c'est une information analogique.",
            },
            {
              q: "La fonction communiquer de la chaîne d'information envoie ses ordres à la fonction :",
              options: ["distribuer de la chaîne d'énergie", "acquérir de la chaîne d'information", "alimenter de la chaîne d'énergie", "convertir de la chaîne d'énergie"],
              answer: 0,
              why: "Les ordres de la carte commandent le relais ou la carte de commande du moteur, qui laissent passer ou non l'énergie : c'est la fonction distribuer.",
            },
          ],
          trap: "Placer le moteur ou la résistance chauffante dans la chaîne d'information parce qu'ils sont commandés par la carte : ce qui produit l'action (mouvement, chaleur) appartient à la chaîne d'énergie ; seuls les éléments qui recueillent, traitent ou transmettent des informations appartiennent à la chaîne d'information.",
          method: "Pour décrire une chaîne d'information, posez trois questions dans l'ordre : « Comment le système est-il informé ? » (acquérir), « Qu'est-ce qui décide ? » (traiter), « À qui envoie-t-il ses ordres et ses messages ? » (communiquer).",
        },
      ],
    },
    /* ==================================================================== */
    /* CAPTEURS, ACTIONNEURS ET COMPORTEMENT                                  */
    /* ==================================================================== */
    {
      id: 'capteurs-actionneurs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'capteurs',
          title: 'Les capteurs : acquérir une information',
          minutes: 30,
          objectives: [
            "Identifier la grandeur physique relevée par un capteur.",
            "Distinguer un détecteur (information logique) d'un capteur qui mesure une valeur (information analogique).",
            "Expliquer le principe de fonctionnement de capteurs courants.",
            "Choisir un capteur adapté à une situation.",
          ],
          course: [
            {
              heading: "Le capteur, organe des sens du système",
              paragraphs: [
                "Un capteur est un composant qui relève une grandeur physique (lumière, température, distance, présence, mouvement...) et la transforme en un signal électrique que la carte programmable peut lire. Il réalise la fonction acquérir de la chaîne d'information. Comme vos yeux, vos oreilles ou votre peau, il permet au système de savoir ce qui se passe autour de lui.",
                "Une grandeur physique est ce que l'on peut mesurer, avec une unité : une température en degrés Celsius (°C), une distance en mètres (m), un éclairement en lux (lx), une durée en secondes (s). Pour choisir un capteur, on se demande d'abord quelle grandeur le système doit connaître : pour un robot qui évite les murs, la distance ; pour un arrosage automatique, l'humidité de la terre.",
              ],
              box: { label: "Définition", text: "Un capteur relève une grandeur physique et la transforme en signal électrique pour la chaîne d'information. Il réalise la fonction acquérir." },
            },
            {
              heading: "Détecteurs et capteurs de mesure",
              paragraphs: [
                "Certains capteurs ne donnent que deux réponses : oui ou non. On les appelle souvent détecteurs, et ils fournissent une information logique (tout ou rien). Le bouton-poussoir détecte un appui. L'interrupteur de fin de course détecte qu'une pièce est arrivée au bout de son trajet. L'interrupteur à lames souples (ILS) se ferme quand un aimant s'approche : fixé sur le cadre d'une porte, avec un aimant sur la porte, il détecte si elle est ouverte ou fermée.",
                "D'autres capteurs mesurent une valeur qui varie : ils fournissent une information analogique, que la carte convertit en nombre. La photorésistance mesure la luminosité, la thermistance mesure la température, le capteur d'humidité mesure l'eau contenue dans la terre ou dans l'air. Le programme compare souvent cette valeur à un seuil pour décider : si la température dépasse 25 °C, alors mettre en marche le ventilateur.",
              ],
              box: { label: "À retenir", text: "Détecteur : information logique, deux états (présence ou absence, appui ou non). Capteur de mesure : information analogique, une valeur qui varie (température, luminosité, distance), souvent comparée à un seuil." },
            },
            {
              heading: "Comment fonctionnent quelques capteurs ?",
              paragraphs: [
                "La photorésistance et la thermistance sont des composants dont la résistance électrique change : la première selon la lumière reçue, la seconde selon la température. La carte mesure ce changement et en déduit la grandeur. Le détecteur de présence infrarouge (souvent appelé PIR) capte le rayonnement infrarouge émis par le corps humain, qui est chaud : il détecte une personne qui bouge, même dans le noir.",
                "Le capteur à ultrasons émet un son très aigu, que l'oreille humaine n'entend pas, puis attend son écho renvoyé par l'obstacle. Il mesure la durée de l'aller-retour. Comme le son parcourt environ 340 mètres par seconde dans l'air, la carte calcule la distance : distance = 340 × durée ÷ 2. On divise par 2, car le son a fait l'aller et le retour. Les chauves-souris utilisent le même principe pour se repérer.",
                "Un smartphone contient de nombreux capteurs : un accéléromètre, qui détecte les mouvements et l'orientation du téléphone (pour faire pivoter l'écran ou compter les pas) ; un capteur de luminosité, qui règle l'éclairage de l'écran ; un capteur de proximité, qui éteint l'écran quand on le colle à l'oreille ; un micro, une caméra et un récepteur GPS.",
              ],
              box: { label: "Formule", text: "Capteur à ultrasons : distance (en m) = vitesse du son (environ 340 m/s) × durée de l'aller-retour (en s) ÷ 2." },
            },
            {
              heading: "Choisir un capteur",
              paragraphs: [
                "Pour choisir un capteur, on vérifie plusieurs critères : la grandeur qu'il relève, son étendue de mesure (les valeurs entre lesquelles il fonctionne, par exemple de quelques centimètres à quelques mètres pour un capteur à ultrasons), sa précision, sa rapidité de réponse, son prix et sa consommation d'énergie. Il doit aussi supporter son milieu : un capteur placé dehors doit résister à la pluie et au froid.",
                "Un capteur peut se tromper. Une photorésistance éclairée par un lampadaire « croit » qu'il fait jour ; un capteur à ultrasons mesure mal la distance d'un objet mou, comme un rideau, qui absorbe le son au lieu de le renvoyer. Il faut donc bien placer le capteur et parfois l'étalonner : comparer ses mesures à celles d'un instrument fiable, puis corriger le programme.",
              ],
              box: { label: "Repère", text: "Critères de choix : grandeur relevée, étendue de mesure, précision, rapidité, prix, consommation, résistance au milieu. Un capteur bien placé et étalonné donne des mesures fiables." },
            },
          ],
          keyPoints: [
            "Un capteur relève une grandeur physique et la transforme en signal électrique : il réalise la fonction acquérir.",
            "Détecteur : information logique (oui ou non). Capteur de mesure : information analogique, souvent comparée à un seuil.",
            "Photorésistance : lumière ; thermistance : température ; PIR : présence ; ultrasons : distance ; ILS : porte ouverte ou fermée.",
            "Capteur à ultrasons : distance = 340 × durée de l'aller-retour ÷ 2.",
            "On choisit un capteur selon la grandeur, l'étendue de mesure, la précision, le prix, la consommation et le milieu.",
          ],
          example: {
            statement: "Un capteur à ultrasons placé à l'arrière d'une voiture reçoit l'écho d'un mur 0,01 seconde après l'émission du son. À quelle distance se trouve le mur ? Le système fait sonner un bip continu si l'obstacle est à moins de 30 cm : le bip est-il continu ?",
            solution: [
              "Distance parcourue par le son, à l'aller et au retour : 340 × 0,01 = 3,4 m.",
              "Le son a fait l'aller et le retour, on divise par 2 : 3,4 ÷ 2 = 1,7 m.",
              "On compare au seuil : 1,7 m = 170 cm, ce qui est plus grand que 30 cm.",
              "Réponse : le mur est à 1,7 m ; le bip n'est pas continu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque besoin, choisir le capteur adapté parmi : photorésistance, thermistance, capteur à ultrasons, détecteur de présence infrarouge, interrupteur à lames souples (ILS), capteur d'humidité du sol. a) Allumer la lumière d'un couloir quand quelqu'un passe. b) Savoir si une fenêtre est ouverte. c) Arroser une plante quand la terre est sèche. d) Faire reculer un robot avant qu'il touche un mur. e) Fermer les volets quand la nuit tombe. f) Allumer un radiateur quand il fait trop froid.",
              hint: "Nommez d'abord la grandeur à connaître (présence, position d'une fenêtre, humidité, distance, lumière, température), puis cherchez le capteur qui la relève.",
              solution: [
                "a) Il faut détecter une personne : détecteur de présence infrarouge.",
                "b) Il faut savoir si la fenêtre touche le cadre : ILS, avec un aimant fixé sur la fenêtre.",
                "c) Il faut mesurer l'eau dans la terre : capteur d'humidité du sol.",
                "d) Il faut mesurer la distance du mur : capteur à ultrasons.",
                "e) Il faut mesurer la lumière : photorésistance.",
                "f) Il faut mesurer la température : thermistance.",
                "Résultat : a) PIR ; b) ILS ; c) humidité du sol ; d) ultrasons ; e) photorésistance ; f) thermistance.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque capteur, dire s'il fournit une information logique ou analogique, et nommer ce qu'il relève : a) un bouton-poussoir ; b) une thermistance ; c) un interrupteur de fin de course ; d) une photorésistance ; e) un capteur à ultrasons ; f) un ILS. Expliquer ensuite pourquoi un programme qui utilise une thermistance pour commander un ventilateur doit contenir un seuil.",
              hint: "Logique : deux états seulement. Analogique : une valeur qui peut prendre beaucoup de valeurs différentes. Pour la dernière question, demandez-vous comment passer d'une valeur à une décision « marche ou arrêt ».",
              solution: [
                "a) Bouton-poussoir : logique ; il relève un appui (appuyé ou non).",
                "b) Thermistance : analogique ; elle relève la température.",
                "c) Fin de course : logique ; il relève si une pièce est arrivée au bout de son trajet.",
                "d) Photorésistance : analogique ; elle relève la luminosité.",
                "e) Capteur à ultrasons : analogique ; il relève la distance d'un obstacle.",
                "f) ILS : logique ; il relève la présence d'un aimant proche, donc si la porte ou la fenêtre est fermée.",
                "La thermistance donne une valeur qui varie (19 °C, 23,5 °C, 27 °C...), alors que le ventilateur n'a que deux états : marche ou arrêt. Le programme compare donc la température à un seuil, par exemple 25 °C, pour décider.",
                "Résultat : logiques a, c, f ; analogiques b, d, e ; le seuil transforme une valeur en décision.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un robot aspirateur avance en ligne droite vers un mur. Son capteur à ultrasons mesure chaque seconde la durée de l'aller-retour du son (vitesse du son : 340 m/s ; données fictives) : à t = 0 s : 0,010 s ; à t = 1 s : 0,008 s ; à t = 2 s : 0,006 s ; à t = 3 s : 0,004 s ; à t = 4 s : 0,002 s. a) Calculer la distance du mur à chaque instant. b) De combien le robot avance-t-il chaque seconde ? c) Le programme fait tourner le robot dès que la distance mesurée est inférieure à 50 cm. À quel instant le robot tourne-t-il ? d) Le robot arrive ensuite face à un canapé recouvert d'un tissu épais, et le capteur ne reçoit presque plus d'écho. Expliquer le problème et proposer un second capteur pour éviter le choc.",
              hint: "Distance = 340 × durée ÷ 2. Pour c), convertissez 50 cm en mètres. Pour d), demandez-vous ce que devient le son qui arrive sur un tissu mou.",
              solution: [
                "a) t = 0 s : 340 × 0,010 ÷ 2 = 1,7 m. t = 1 s : 340 × 0,008 ÷ 2 = 1,36 m. t = 2 s : 340 × 0,006 ÷ 2 = 1,02 m. t = 3 s : 340 × 0,004 ÷ 2 = 0,68 m. t = 4 s : 340 × 0,002 ÷ 2 = 0,34 m.",
                "b) Chaque seconde, la distance diminue de 1,7 - 1,36 = 0,34 m. Le robot avance de 0,34 m, soit 34 cm, par seconde.",
                "c) 50 cm = 0,5 m. À t = 3 s, 0,68 m n'est pas inférieur à 0,5 m ; à t = 4 s, 0,34 m est inférieur à 0,5 m. Le robot tourne à t = 4 s.",
                "d) Le tissu épais absorbe les ultrasons au lieu de les renvoyer : l'écho est trop faible et le capteur ne « voit » pas le canapé. On peut ajouter un pare-chocs équipé d'un détecteur de contact (un interrupteur) qui arrête le robot au moindre choc, ou un capteur de distance infrarouge, qui utilise la lumière au lieu du son.",
                "Résultat : 1,7 m ; 1,36 m ; 1,02 m ; 0,68 m ; 0,34 m ; le robot avance de 34 cm par seconde et tourne à t = 4 s ; un détecteur de contact complète le capteur à ultrasons.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur les capteurs.",
            statements: [
              { text: "Un capteur réalise la fonction acquérir de la chaîne d'information.", true: true, why: "Il recueille une information sur le milieu ou sur l'utilisateur et la transmet à la carte." },
              { text: "Une LED est un capteur de lumière.", true: false, why: "La LED produit de la lumière sur ordre de la carte : c'est un actionneur. Un capteur de lumière est, par exemple, une photorésistance." },
              { text: "Un bouton-poussoir fournit une information logique.", true: true, why: "Il n'a que deux états : appuyé ou relâché, soit 1 ou 0." },
              { text: "Le capteur à ultrasons mesure une distance grâce à l'écho d'un son très aigu.", true: true, why: "Il mesure la durée de l'aller-retour du son, puis la carte calcule la distance." },
              { text: "Pour trouver la distance d'un obstacle, on multiplie 340 par la durée de l'aller-retour sans diviser par 2.", true: false, why: "Le son fait l'aller et le retour : la distance de l'obstacle est la moitié du trajet du son." },
              { text: "Un détecteur de présence infrarouge capte le rayonnement émis par le corps humain.", true: true, why: "Le corps humain, chaud, émet un rayonnement infrarouge que le détecteur repère quand la personne bouge." },
              { text: "Un capteur donne toujours une mesure juste, où qu'il soit placé.", true: false, why: "Un capteur mal placé ou mal étalonné peut se tromper : une photorésistance éclairée par un lampadaire « croit » qu'il fait jour." },
            ],
          },
          quiz: [
            {
              q: "Quel capteur mesure la température ?",
              options: ["Une photorésistance", "Une thermistance", "Un interrupteur à lames souples", "Un capteur à ultrasons"],
              answer: 1,
              why: "La résistance électrique d'une thermistance varie avec la température : la carte en déduit la température.",
            },
            {
              q: "Un interrupteur à lames souples (ILS) réagit :",
              options: ["à l'approche d'un aimant", "à la lumière du jour", "à la chaleur d'une personne", "au son d'une voix"],
              answer: 0,
              why: "Ses lames se touchent quand un aimant s'approche : avec un aimant fixé sur une porte, il détecte si elle est fermée.",
            },
            {
              q: "Un capteur à ultrasons reçoit l'écho 0,02 s après l'émission du son. À quelle distance se trouve l'obstacle ? (vitesse du son : 340 m/s)",
              options: ["6,8 m", "0,34 m", "3,4 m", "17 m"],
              answer: 2,
              why: "Le son parcourt 340 × 0,02 = 6,8 m pour l'aller et le retour ; l'obstacle est donc à 6,8 ÷ 2 = 3,4 m.",
            },
            {
              q: "Quelle information fournit une photorésistance ?",
              options: ["Une information logique : jour ou nuit", "Une distance en mètres", "Une information sur la présence d'un aimant", "Une information analogique sur la lumière"],
              answer: 3,
              why: "Sa résistance varie en continu avec la lumière reçue : c'est une information analogique, que le programme peut comparer à un seuil.",
            },
            {
              q: "Dans un smartphone, quel capteur détecte que l'on tourne le téléphone, pour faire pivoter l'écran ?",
              options: ["Le micro", "L'accéléromètre", "Le capteur de luminosité ambiante", "Le récepteur GPS"],
              answer: 1,
              why: "L'accéléromètre détecte les mouvements et l'orientation du téléphone.",
            },
          ],
          trap: "Oublier de diviser par 2 dans le calcul d'un capteur à ultrasons : la durée mesurée est celle de l'aller et du retour du son, alors que l'on cherche la distance entre le capteur et l'obstacle.",
          method: "Pour choisir un capteur, complétez la phrase : « Le système doit connaître ... (la grandeur), il lui faut donc ... (le capteur) » ; puis vérifiez que son étendue de mesure et l'endroit où il sera placé conviennent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'actionneurs',
          title: 'Les actionneurs : agir sur le monde physique',
          minutes: 30,
          objectives: [
            "Identifier les actionneurs d'un système et l'action qu'ils réalisent.",
            "Distinguer l'actionneur du préactionneur qui le commande.",
            "Choisir un actionneur adapté au mouvement ou à l'effet attendu.",
            "Décrire la conversion d'énergie réalisée par un actionneur.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un actionneur ?",
              paragraphs: [
                "Un actionneur est un composant qui convertit l'énergie qu'il reçoit, le plus souvent électrique, en une action sur le monde physique : un mouvement, de la lumière, de la chaleur, un son. Il réalise la fonction convertir de la chaîne d'énergie. Si le capteur est l'organe des sens du système, l'actionneur en est le muscle.",
                "Un actionneur n'agit que sur ordre. La carte programmable décide, mais elle ne peut pas fournir elle-même assez d'énergie pour faire tourner un moteur ou chauffer une résistance. Elle commande donc un composant intermédiaire, le préactionneur, qui laisse passer l'énergie de l'alimentation vers l'actionneur. Le relais, le transistor et la carte de commande de moteur sont des préactionneurs : ils réalisent la fonction distribuer.",
              ],
              box: { label: "Définition", text: "Actionneur : il convertit l'énergie en action (mouvement, lumière, chaleur, son) ; fonction convertir. Préactionneur : il laisse passer ou non l'énergie vers l'actionneur, sur ordre de la carte ; fonction distribuer." },
            },
            {
              heading: "Les actionneurs qui produisent un mouvement",
              paragraphs: [
                "Le moteur à courant continu produit une rotation continue. Sa vitesse augmente avec la tension qu'on lui applique, et l'on inverse son sens de rotation en inversant le sens du courant : c'est ce que fait la carte de commande d'un robot pour le faire reculer. On le trouve dans les jouets, les ventilateurs, les vitres électriques des voitures.",
                "Le servomoteur tourne jusqu'à une position précise, donnée par la carte, et la garde : par exemple 0°, 90° ou 180° pour la plupart des modèles utilisés en classe. Il sert à orienter une pièce : lever une barrière, braquer les roues d'une voiture miniature. Le moteur pas à pas tourne par petits angles égaux, appelés pas, ce qui permet des déplacements très précis : on le trouve dans les imprimantes et les imprimantes 3D.",
                "Le vérin produit un mouvement en ligne droite, une translation : sa tige sort ou rentre. Il peut être électrique ou pneumatique (actionné par de l'air comprimé), comme ceux qui ouvrent les portes de certains bus. L'électroaimant attire une pièce en fer quand le courant passe : il actionne par exemple la gâche électrique qui déverrouille la porte d'un immeuble.",
              ],
              box: { label: "À retenir", text: "Rotation continue : moteur à courant continu. Position angulaire précise : servomoteur. Rotation par petits angles égaux : moteur pas à pas. Translation : vérin. Attraction d'une pièce en fer : électroaimant." },
            },
            {
              heading: "Les actionneurs qui produisent lumière, chaleur ou son",
              paragraphs: [
                "Tous les actionneurs ne produisent pas un mouvement. La LED convertit l'énergie électrique en lumière ; elle consomme peu et dure longtemps. La résistance chauffante la convertit en chaleur : on la trouve dans un grille-pain, un radiateur électrique, un sèche-cheveux. Le buzzer et le haut-parleur produisent un son. La pompe, entraînée par un moteur, déplace un liquide ; l'électrovanne ouvre ou ferme le passage de l'eau dans un arrosage automatique.",
                "Quand un actionneur sert à informer l'utilisateur (un voyant, un bip), il participe aussi à la fonction communiquer de la chaîne d'information. Un même composant se décrit donc selon son rôle : la LED d'un lampadaire éclaire la rue, c'est une action ; la petite LED rouge d'un téléviseur en veille informe, c'est un message.",
              ],
              box: { label: "Repère", text: "LED : lumière. Résistance chauffante : chaleur. Buzzer, haut-parleur : son. Pompe : déplacement d'un liquide. Électrovanne : ouverture ou fermeture d'un passage de liquide ou de gaz." },
            },
            {
              heading: "Choisir un actionneur",
              paragraphs: [
                "Pour choisir un actionneur, on part de l'action attendue. Faut-il une rotation continue (une roue), une position précise (un bras qui pointe une direction), une translation (une tige qui pousse), de la lumière, de la chaleur, un son ? On vérifie ensuite que l'actionneur est assez puissant pour l'effort demandé, compatible avec l'alimentation disponible, pas trop gourmand en énergie, et adapté à son milieu.",
                "Exemple : pour lever la barrière d'un parking miniature, il faut faire tourner un bras d'un quart de tour, soit 90°, puis le maintenir en position : le servomoteur est le bon choix. Un moteur à courant continu tournerait sans s'arrêter de lui-même : il faudrait ajouter des capteurs de fin de course pour l'arrêter au bon endroit.",
              ],
            },
          ],
          keyPoints: [
            "Un actionneur convertit l'énergie en action (mouvement, lumière, chaleur, son) : fonction convertir.",
            "Le préactionneur (relais, transistor, carte de commande) laisse passer l'énergie vers l'actionneur : fonction distribuer.",
            "Moteur à courant continu : rotation continue ; on inverse son sens en inversant le sens du courant.",
            "Servomoteur : position angulaire précise ; moteur pas à pas : rotation par petits angles égaux ; vérin : translation.",
            "On choisit l'actionneur selon l'action attendue, l'effort, l'alimentation, la consommation et le milieu.",
          ],
          example: {
            statement: "Une porte de garage automatique comporte : un moteur à courant continu, deux relais (un pour chaque sens de rotation), une lampe orange qui clignote pendant le mouvement, et un buzzer qui sonne si un obstacle est détecté. a) Citer les actionneurs et l'action de chacun. b) Citer les préactionneurs. c) Comment la porte peut-elle s'ouvrir et se fermer avec un seul moteur ?",
            solution: [
              "a) Le moteur produit une rotation qui fait monter ou descendre la porte ; la lampe produit une lumière clignotante ; le buzzer produit un son d'alerte. Ce sont les trois actionneurs.",
              "b) Les deux relais sont des préactionneurs : sur ordre de la carte, ils laissent passer l'énergie vers le moteur.",
              "c) Un moteur à courant continu change de sens de rotation quand on inverse le sens du courant. Un relais fait passer le courant dans un sens (ouverture), l'autre dans le sens inverse (fermeture).",
              "Réponse : actionneurs = moteur, lampe, buzzer ; préactionneurs = les deux relais ; le sens du courant décide du sens du mouvement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque actionneur, indiquer l'action produite et la conversion d'énergie réalisée : a) un moteur à courant continu ; b) une LED ; c) une résistance chauffante ; d) un vérin électrique ; e) un électroaimant.",
              hint: "Demandez-vous ce que l'on voit ou ce que l'on sent quand l'actionneur reçoit l'ordre de fonctionner : un mouvement, de la lumière, de la chaleur ?",
              solution: [
                "a) Moteur à courant continu : une rotation ; énergie électrique → énergie mécanique.",
                "b) LED : de la lumière ; énergie électrique → énergie lumineuse.",
                "c) Résistance chauffante : de la chaleur ; énergie électrique → énergie thermique.",
                "d) Vérin électrique : un mouvement en ligne droite (translation) ; énergie électrique → énergie mécanique.",
                "e) Électroaimant : il attire une pièce en fer, qui se déplace ; énergie électrique → énergie mécanique.",
                "Résultat : tous ces actionneurs reçoivent de l'énergie électrique ; ils la convertissent en énergie mécanique (a, d, e), lumineuse (b) ou thermique (c).",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque besoin, choisir l'actionneur le plus adapté parmi : moteur à courant continu, servomoteur, moteur pas à pas, vérin, électrovanne, résistance chauffante. Justifier. a) Faire avancer les roues d'un robot. b) Orienter un petit panneau solaire à 30°, puis à 60°. c) Déplacer très précisément la buse d'une imprimante 3D. d) Pousser des colis hors d'un tapis roulant. e) Ouvrir l'arrivée d'eau d'un arrosage automatique. f) Chauffer l'eau d'un aquarium.",
              hint: "Repérez d'abord le type d'action : rotation continue, angle précis, déplacement très précis, poussée en ligne droite, passage d'eau, chaleur.",
              solution: [
                "a) Les roues doivent tourner en continu : moteur à courant continu.",
                "b) Il faut atteindre un angle précis et le garder : servomoteur.",
                "c) Il faut des déplacements très précis, par petits pas : moteur pas à pas.",
                "d) Il faut pousser en ligne droite : vérin.",
                "e) Il faut ouvrir ou fermer un passage d'eau : électrovanne.",
                "f) Il faut produire de la chaleur : résistance chauffante.",
                "Résultat : a) moteur à courant continu ; b) servomoteur ; c) moteur pas à pas ; d) vérin ; e) électrovanne ; f) résistance chauffante.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le plateau tournant d'une vitrine est fixé directement sur l'axe d'un moteur pas à pas qui fait 200 pas par tour. a) De quel angle le plateau tourne-t-il à chaque pas ? b) Combien de pas faut-il pour un quart de tour ? Pour tourner de 36° ? c) Le moteur effectue 50 pas par seconde. Combien de temps le plateau met-il pour faire un tour complet ? d) On remplace ce moteur par un moteur à courant continu. Quel problème apparaît pour arrêter le plateau exactement face au client, et quel composant faudrait-il ajouter ?",
              hint: "Un tour complet vaut 360°. Pour b), divisez l'angle voulu par l'angle d'un pas. Pour d), demandez-vous si un moteur à courant continu « sait » de combien il a tourné.",
              solution: [
                "a) 360 ÷ 200 = 1,8. Le plateau tourne de 1,8° à chaque pas.",
                "b) Un quart de tour vaut 360 ÷ 4 = 90°, soit 90 ÷ 1,8 = 50 pas. Pour 36° : 36 ÷ 1,8 = 20 pas.",
                "c) Un tour complet demande 200 pas ; à 50 pas par seconde : 200 ÷ 50 = 4 secondes.",
                "d) Un moteur à courant continu tourne tant qu'il est alimenté, sans compter ses tours, et il continue un peu sur son élan quand on le coupe : la carte ne sait pas où se trouve le plateau. Il faudrait ajouter un capteur de position, par exemple un ILS et un petit aimant fixé sous le plateau, ou un interrupteur de fin de course, pour arrêter le moteur au bon endroit.",
                "Résultat : 1,8° par pas ; 50 pas pour un quart de tour, 20 pas pour 36° ; 4 s par tour ; avec un moteur à courant continu, il faut un capteur de position.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque actionneur à l'action qu'il produit.",
            pairs: [
              { left: "Servomoteur", right: "Tourner jusqu'à un angle précis et le garder" },
              { left: "Vérin", right: "Pousser ou tirer en ligne droite" },
              { left: "Moteur pas à pas", right: "Tourner par petits angles égaux" },
              { left: "Électrovanne", right: "Ouvrir ou fermer un passage d'eau" },
              { left: "Résistance chauffante", right: "Produire de la chaleur" },
              { left: "Électroaimant", right: "Attirer une pièce en fer" },
            ],
          },
          quiz: [
            {
              q: "Quelle fonction de la chaîne d'énergie un actionneur réalise-t-il ?",
              options: ["Alimenter", "Distribuer", "Transmettre", "Convertir"],
              answer: 3,
              why: "L'actionneur transforme l'énergie reçue en action (mouvement, lumière, chaleur) : il convertit l'énergie.",
            },
            {
              q: "Un relais qui commande un moteur est :",
              options: ["un préactionneur", "un capteur", "un actionneur", "une source d'énergie"],
              answer: 0,
              why: "Le relais laisse passer ou coupe l'énergie vers le moteur sur ordre de la carte : c'est un préactionneur (fonction distribuer).",
            },
            {
              q: "Comment inverser le sens de rotation d'un moteur à courant continu ?",
              options: ["En augmentant la tension d'alimentation", "En ajoutant une LED", "En inversant le sens du courant", "En changeant de capteur"],
              answer: 2,
              why: "Le sens de rotation d'un moteur à courant continu dépend du sens du courant : on l'inverse, par exemple, pour faire reculer un robot.",
            },
            {
              q: "Quel actionneur choisir pour qu'une barrière se lève exactement de 90°, puis reste en position ?",
              options: ["Une résistance chauffante", "Un servomoteur", "Un buzzer", "Une électrovanne"],
              answer: 1,
              why: "Le servomoteur tourne jusqu'à l'angle commandé, ici 90°, et garde cette position.",
            },
            {
              q: "Un moteur pas à pas fait 200 pas par tour. De quel angle tourne-t-il à chaque pas ?",
              options: ["0,5°", "200°", "1,8°", "3,6°"],
              answer: 2,
              why: "Un tour complet vaut 360° : 360 ÷ 200 = 1,8° par pas.",
            },
          ],
          trap: "Confondre l'actionneur et le préactionneur : le relais ou la carte de commande ne produisent aucune action visible, ils laissent seulement passer l'énergie (distribuer) ; c'est le moteur, la LED ou la résistance qui agissent (convertir).",
          method: "Pour identifier un actionneur, cherchez ce qui bouge, éclaire, chauffe ou sonne dans le système, puis remontez le fil : le composant qui lui envoie l'énergie sur ordre de la carte est son préactionneur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'simuler-comportement',
          title: "Simuler et mesurer le comportement d'un système",
          minutes: 35,
          objectives: [
            "Expliquer ce qu'est un modèle et ce qu'apporte une simulation.",
            "Mesurer une grandeur sur un système réel en suivant un protocole.",
            "Comparer les résultats d'une simulation et des mesures en calculant un écart.",
            "Proposer des explications aux écarts et des améliorations du modèle ou du système.",
          ],
          course: [
            {
              heading: "Modèle et simulation",
              paragraphs: [
                "Avant de fabriquer un objet, ou pour comprendre comment il se comporte, les ingénieurs utilisent des modèles. Un modèle est une représentation simplifiée d'un objet ou d'un système, qui garde seulement ce qui est utile à l'étude : une maquette, un modèle 3D, un schéma, ou un ensemble de règles et de calculs.",
                "Une simulation consiste à faire fonctionner ce modèle, en général sur ordinateur, pour prévoir le comportement du système réel : la vitesse d'un robot, la température d'une maison en hiver, la solidité d'une pièce. On peut modifier les paramètres (la tension du moteur, l'épaisseur d'un isolant, une masse) et observer aussitôt leurs effets.",
                "Simuler permet de tester de nombreuses solutions rapidement, sans fabriquer de prototype, donc à moindre coût et sans danger : on peut simuler le choc d'une voiture contre un mur ou une tempête sur un pont sans rien détruire. Mais une simulation n'est qu'une prévision : elle n'est fiable que si le modèle est assez proche de la réalité.",
              ],
              box: { label: "Définition", text: "Un modèle est une représentation simplifiée d'un système. Une simulation fait fonctionner ce modèle pour prévoir le comportement du système réel. Les paramètres sont les valeurs que l'on peut modifier dans la simulation." },
            },
            {
              heading: "Mesurer le comportement réel",
              paragraphs: [
                "Pour connaître le comportement réel, on fait des mesures sur le système ou sur un prototype. On suit un protocole : on décrit ce que l'on mesure, avec quel instrument (chronomètre, mètre, thermomètre, multimètre, capteur relié à une carte programmable), dans quelles conditions, et combien de fois. Les résultats sont notés dans un tableau, avec leur unité.",
                "Une mesure n'est jamais parfaite : le temps de réaction de la personne qui déclenche le chronomètre, la précision de l'instrument, de petites différences entre deux essais. C'est pourquoi on répète la mesure plusieurs fois et on calcule la moyenne, qui est plus fiable qu'une mesure isolée.",
              ],
              box: { label: "Méthode", text: "Mesurer : choisir l'instrument, fixer les conditions, répéter la mesure (au moins trois fois), noter les résultats avec leur unité, calculer la moyenne." },
            },
            {
              heading: "Comparer et expliquer les écarts",
              paragraphs: [
                "On compare ensuite le résultat de la simulation et celui des mesures. La différence entre les deux s'appelle l'écart. Pour savoir s'il est petit ou grand, on le compare à la valeur simulée, en pourcentage : c'est l'écart relatif. Un écart de 1 seconde est faible sur 100 secondes (1 %), mais important sur 4 secondes (25 %).",
                "Les écarts ont des causes. Le modèle est simplifié : il néglige souvent les frottements, les pertes d'énergie, le vent, l'usure, la baisse de charge d'une batterie. Les mesures ont leurs imprécisions. Enfin, le système réel peut être différent de ce qui était prévu : une pièce mal montée, un capteur mal placé.",
                "Si l'écart est faible, le modèle est jugé satisfaisant et la simulation peut servir à prévoir. S'il est trop grand, on améliore le modèle (en ajoutant les frottements, par exemple) ou on corrige le système réel, puis on recommence la comparaison. Cette démarche sert aussi à vérifier qu'un système respecte son cahier des charges.",
              ],
              box: { label: "Formule", text: "Écart = valeur mesurée - valeur simulée (on le prend en valeur positive). Écart relatif (en %) = écart ÷ valeur simulée × 100." },
            },
          ],
          keyPoints: [
            "Un modèle est une représentation simplifiée d'un système ; une simulation le fait fonctionner pour prévoir.",
            "Simuler permet de tester vite, à moindre coût et sans danger, en modifiant les paramètres.",
            "On mesure en suivant un protocole, on répète les mesures et on calcule leur moyenne.",
            "Écart relatif (en %) = écart ÷ valeur simulée × 100.",
            "Les écarts viennent des simplifications du modèle (frottements, pertes), des imprécisions de mesure ou du système réel.",
          ],
          example: {
            statement: "La simulation d'un robot prévoit qu'il parcourt 2 m en 10 s. En classe, on mesure trois fois la durée réelle : 11,2 s, 10,8 s et 11,0 s (données fictives). Calculer la durée moyenne, l'écart avec la simulation et l'écart relatif, puis proposer une explication.",
            solution: [
              "Moyenne : (11,2 + 10,8 + 11,0) ÷ 3 = 33,0 ÷ 3 = 11,0 s.",
              "Écart : 11,0 - 10 = 1,0 s. Le robot réel est plus lent que prévu.",
              "Écart relatif : 1,0 ÷ 10 × 100 = 10 %.",
              "Explication possible : le modèle néglige les frottements des roues et la baisse de charge de la batterie, qui ralentissent le robot.",
              "Réponse : durée moyenne 11,0 s ; écart de 1,0 s, soit 10 % ; le modèle est trop optimiste et pourrait tenir compte des frottements.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associer chaque situation au bon mot parmi : modèle, simulation, paramètre, mesure, écart. a) On chronomètre le robot réel sur 2 m. b) Le logiciel calcule le temps de parcours du robot. c) Dans le logiciel, on fait passer la tension du moteur de 4,5 V à 6 V. d) Le robot réel met 0,8 s de plus que prévu. e) Le dessin 3D du robot et les règles de calcul de sa vitesse.",
              hint: "Le modèle est la représentation ; la simulation la fait fonctionner ; le paramètre est une valeur que l'on règle ; la mesure se fait sur l'objet réel ; l'écart est une différence.",
              solution: [
                "a) Chronométrer le robot réel : une mesure.",
                "b) Le logiciel qui calcule le temps de parcours : une simulation.",
                "c) La tension du moteur que l'on règle dans le logiciel : un paramètre.",
                "d) Les 0,8 s de différence entre le réel et la prévision : un écart.",
                "e) Le dessin 3D et les règles de calcul : le modèle.",
                "Résultat : a) mesure ; b) simulation ; c) paramètre ; d) écart ; e) modèle.",
              ],
            },
            {
              level: 2,
              statement: "La simulation d'un chauffage prévoit qu'une pièce passe de 16 °C à 20 °C en 40 minutes. Trois essais réels donnent : 46 min, 44 min et 48 min (données fictives). a) Calculer la durée moyenne mesurée. b) Calculer l'écart et l'écart relatif par rapport à la simulation. c) Le cahier des charges accepte un écart relatif de 10 % au maximum. Le modèle est-il satisfaisant ? d) Proposer deux causes possibles de l'écart.",
              hint: "Moyenne = somme des mesures ÷ nombre de mesures. Écart relatif = écart ÷ valeur simulée × 100.",
              solution: [
                "a) Moyenne : (46 + 44 + 48) ÷ 3 = 138 ÷ 3 = 46 minutes.",
                "b) Écart : 46 - 40 = 6 minutes. Écart relatif : 6 ÷ 40 × 100 = 15 %.",
                "c) 15 % > 10 % : le modèle n'est pas satisfaisant, il faut l'améliorer.",
                "d) Causes possibles : le modèle néglige les pertes de chaleur par les fenêtres et les murs ; il faisait plus froid dehors que prévu ; une porte a été ouverte pendant l'essai ; le radiateur chauffe moins que la valeur entrée dans le logiciel.",
                "Résultat : moyenne de 46 min ; écart de 6 min, soit 15 % ; le modèle doit être amélioré, par exemple en tenant compte des pertes de chaleur.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On simule la vitesse d'un petit chariot électrique pour trois tensions du moteur. Simulation : 3 V → 0,30 m/s ; 4,5 V → 0,45 m/s ; 6 V → 0,60 m/s. On mesure ensuite le temps mis par le chariot réel pour parcourir 1,1 m (moyennes de trois essais, données fictives) : 3 V → 4,4 s ; 4,5 V → 2,75 s ; 6 V → 2 s. a) D'après la simulation, la vitesse est-elle proportionnelle à la tension ? Justifier. b) Calculer la vitesse réelle pour chaque tension (vitesse = distance ÷ durée). c) Calculer l'écart et l'écart relatif pour chaque tension, arrondi au dixième. d) Pour quelle tension le modèle est-il le plus éloigné de la réalité ? Proposer une explication et une amélioration du modèle.",
              hint: "Pour a), calculez le quotient vitesse ÷ tension pour chaque ligne. Pour c), l'écart relatif se calcule toujours par rapport à la valeur simulée.",
              solution: [
                "a) 0,30 ÷ 3 = 0,1 ; 0,45 ÷ 4,5 = 0,1 ; 0,60 ÷ 6 = 0,1. Le quotient est toujours le même : dans la simulation, la vitesse est proportionnelle à la tension (coefficient 0,1).",
                "b) 3 V : 1,1 ÷ 4,4 = 0,25 m/s. 4,5 V : 1,1 ÷ 2,75 = 0,40 m/s. 6 V : 1,1 ÷ 2 = 0,55 m/s.",
                "c) 3 V : écart 0,30 - 0,25 = 0,05 m/s ; écart relatif 0,05 ÷ 0,30 × 100 ≈ 16,7 %. 4,5 V : écart 0,05 m/s ; 0,05 ÷ 0,45 × 100 ≈ 11,1 %. 6 V : écart 0,05 m/s ; 0,05 ÷ 0,60 × 100 ≈ 8,3 %.",
                "d) Le modèle est le plus éloigné de la réalité à 3 V (16,7 %). Le chariot réel perd toujours environ 0,05 m/s : ce sont les frottements, que le modèle néglige. Cette perte compte davantage quand la vitesse est faible.",
                "Amélioration : ajouter les frottements au modèle, par exemple en retirant 0,05 m/s à chaque vitesse simulée, puis refaire la comparaison.",
                "Résultat : vitesse simulée proportionnelle (0,1 × tension) ; vitesses réelles 0,25, 0,40 et 0,55 m/s ; écarts relatifs ≈ 16,7 %, 11,1 % et 8,3 % ; le modèle doit intégrer les frottements.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la démarche qui permet de valider un modèle par la mesure.",
            items: [
              "Construire un modèle simplifié du système",
              "Régler les paramètres du modèle",
              "Lancer la simulation pour prévoir le comportement",
              "Mesurer plusieurs fois le système réel pour vérifier la prévision",
              "Calculer la moyenne des mesures",
              "Calculer l'écart entre la moyenne et la prévision",
              "Expliquer l'écart et améliorer le modèle",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'un modèle ?",
              options: ["Une représentation simplifiée d'un système", "Le système réel, une fois fabriqué et vendu en magasin", "Une mesure faite avec un chronomètre", "Le prix de vente d'un prototype"],
              answer: 0,
              why: "Un modèle garde seulement ce qui est utile à l'étude : une maquette, un modèle 3D, des règles de calcul.",
            },
            {
              q: "Pourquoi répète-t-on une mesure plusieurs fois ?",
              options: ["Pour obtenir exactement la valeur simulée", "Parce que le premier essai est toujours faux", "Pour user le système", "Pour calculer une moyenne plus fiable"],
              answer: 3,
              why: "Chaque mesure contient de petites erreurs ; la moyenne de plusieurs mesures est plus fiable qu'une mesure isolée.",
            },
            {
              q: "La simulation prévoit 20 s et la mesure donne 22 s. L'écart relatif est de :",
              options: ["2 %", "22 %", "10 %", "20 %"],
              answer: 2,
              why: "Écart : 22 - 20 = 2 s ; écart relatif : 2 ÷ 20 × 100 = 10 %.",
            },
            {
              q: "Quel est l'un des principaux avantages d'une simulation ?",
              options: ["Obtenir toujours un résultat parfaitement exact", "Tester sans fabriquer ni prendre de risque", "Ne plus jamais avoir à faire de mesures", "Supprimer les frottements du système réel"],
              answer: 1,
              why: "On peut essayer de nombreuses solutions rapidement, à moindre coût et sans danger ; mais il faut ensuite vérifier par des mesures.",
            },
            {
              q: "Un robot réel est plus lent que ce que prévoit la simulation. Quelle est l'explication la plus probable ?",
              options: ["Le chronomètre utilisé est beaucoup trop précis", "Le robot est trop léger", "Le modèle a déjà été vérifié", "Le modèle néglige les frottements"],
              answer: 3,
              why: "Les modèles simplifiés négligent souvent les frottements et les pertes d'énergie, qui ralentissent le système réel.",
            },
          ],
          trap: "Penser que la simulation donne « la bonne réponse » et que la mesure est fausse quand elles diffèrent : la simulation repose sur un modèle simplifié ; c'est la mesure, répétée avec soin, qui dit comment le système réel se comporte.",
          method: "Présentez vos résultats dans un tableau à trois colonnes (valeur simulée, moyenne des mesures, écart relatif en %) : la comparaison saute aux yeux, et il ne reste plus qu'à expliquer les écarts les plus grands.",
        },
      ],
    },
  ],
}
