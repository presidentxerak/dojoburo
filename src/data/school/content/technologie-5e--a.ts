import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'technologie-5e',
  chapters: [
    /* ==================================================================== */
    /* LES OBJETS TECHNIQUES ET LEURS USAGES                                  */
    /* ==================================================================== */
    {
      id: 'objets-et-besoins',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'besoin-fonction-usage',
          title: "Un objet répond à un besoin : la fonction d'usage",
          minutes: 25,
          objectives: [
            "Distinguer un objet technique d'un objet naturel.",
            "Identifier le besoin auquel répond un objet technique.",
            "Formuler la fonction d'usage d'un objet avec un verbe à l'infinitif.",
            "Distinguer la fonction d'usage et la fonction d'estime d'un objet.",
          ],
          course: [
            {
              heading: "Objet naturel et objet technique",
              paragraphs: [
                "Autour de vous, il y a deux sortes d'objets. Un caillou, un coquillage ou une branche tombée existent dans la nature sans que personne ne les ait fabriqués : ce sont des objets naturels. Une trousse, un vélo, une lampe ou un stylo ont été pensés et fabriqués par l'être humain : ce sont des objets techniques.",
                "Un objet technique est toujours créé dans un but précis : rendre un service à quelqu'un. Une branche n'est pas un objet technique, mais si on la taille pour en faire un manche d'outil, elle le devient, car elle a été transformée par l'être humain pour servir à quelque chose.",
              ],
              box: { label: "Définition", text: "Un objet technique est un objet conçu et fabriqué par l'être humain pour répondre à un besoin." },
            },
            {
              heading: "Le besoin",
              paragraphs: [
                "Un besoin est une nécessité ou une envie ressentie par une personne : se déplacer, s'éclairer, se nourrir, communiquer, se protéger du froid, écouter de la musique. Le besoin existe avant l'objet : c'est parce que les gens voulaient voir la nuit que l'on a inventé des lampes.",
                "Un même besoin peut être satisfait par des objets très différents. Pour se déplacer jusqu'au collège, on peut prendre un vélo, une trottinette, un bus ou simplement marcher avec de bonnes chaussures. À l'inverse, un seul objet peut répondre à plusieurs besoins : un smartphone permet de téléphoner, de prendre des photos, de s'orienter et d'écouter de la musique.",
              ],
            },
            {
              heading: "La fonction d'usage",
              paragraphs: [
                "La fonction d'usage d'un objet, c'est le service qu'il rend, ce à quoi il sert. On l'écrit avec un verbe à l'infinitif suivi d'un complément : une lampe de poche sert à éclairer dans l'obscurité, un parapluie sert à protéger de la pluie, un taille-crayon sert à tailler un crayon.",
                "La fonction d'usage ne parle ni des pièces de l'objet, ni de sa couleur. « Avoir une pile » ou « être bleu » ne sont pas des fonctions d'usage. Pour la trouver, on utilise souvent un outil simple appelé la bête à cornes, qui pose trois questions sur l'objet.",
              ],
              box: { label: "Méthode", text: "La bête à cornes : 1) À qui l'objet rend-il service ? (l'utilisateur) 2) Sur quoi agit-il ? (la chose ou la personne sur laquelle il agit) 3) Dans quel but ? La réponse à la troisième question donne la fonction d'usage." },
            },
            {
              heading: "La fonction d'estime",
              paragraphs: [
                "Deux gourdes peuvent servir exactement à la même chose, transporter une boisson, et pourtant on préfère souvent l'une à l'autre. Ce qui fait la différence, c'est leur aspect : la couleur, la forme, la matière, la marque, la décoration. C'est la fonction d'estime.",
                "La fonction d'estime rend l'objet agréable ou désirable, mais elle ne change pas le service rendu. Une coque de téléphone à paillettes ne téléphone pas mieux qu'une coque noire. Les fabricants soignent pourtant beaucoup cette fonction, car elle compte dans le choix des acheteurs et peut expliquer une partie du prix.",
              ],
              box: { label: "À retenir", text: "Fonction d'usage : ce à quoi sert l'objet. Fonction d'estime : ce qui le rend beau ou attirant (couleur, forme, marque), sans changer ce à quoi il sert." },
            },
          ],
          keyPoints: [
            "Un objet technique est conçu et fabriqué par l'être humain pour répondre à un besoin.",
            "Un besoin est une nécessité ou une envie : se déplacer, s'éclairer, communiquer...",
            "Un besoin peut être satisfait par plusieurs objets, et un objet peut répondre à plusieurs besoins.",
            "La fonction d'usage est le service rendu, écrite avec un verbe à l'infinitif.",
            "La bête à cornes : à qui rend-il service ? Sur quoi agit-il ? Dans quel but ?",
            "La fonction d'estime concerne l'aspect (couleur, forme, marque) et ne change pas le service rendu.",
          ],
          example: {
            statement: "Réaliser la bête à cornes d'un sèche-cheveux, puis formuler sa fonction d'usage et citer un élément de sa fonction d'estime.",
            solution: [
              "À qui l'objet rend-il service ? À l'utilisateur, la personne qui se sèche les cheveux.",
              "Sur quoi agit-il ? Sur les cheveux.",
              "Dans quel but ? Pour les sécher.",
              "Fonction d'usage : sécher les cheveux de l'utilisateur.",
              "Fonction d'estime : par exemple sa couleur ou sa forme élégante, qui ne le font pas sécher plus vite.",
              "Réponse : le sèche-cheveux rend service à l'utilisateur, agit sur ses cheveux, dans le but de les sécher ; sa couleur relève de la fonction d'estime.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque objet, écrire sa fonction d'usage avec un verbe à l'infinitif : a) un parapluie ; b) un réfrigérateur ; c) un réveil ; d) des lunettes de vue ; e) une agrafeuse.",
              hint: "Demandez-vous à quoi sert l'objet, et commencez votre réponse par un verbe (protéger, conserver, réveiller...).",
              solution: [
                "a) Parapluie : protéger une personne de la pluie.",
                "b) Réfrigérateur : conserver les aliments au frais.",
                "c) Réveil : réveiller une personne à l'heure choisie.",
                "d) Lunettes de vue : permettre à une personne de mieux voir.",
                "e) Agrafeuse : assembler des feuilles de papier.",
                "Résultat : chaque fonction d'usage commence par un verbe à l'infinitif et décrit le service rendu, sans parler des pièces ni de la couleur.",
              ],
            },
            {
              level: 2,
              statement: "Voici six phrases qui décrivent un sac à dos scolaire. Pour chacune, dire s'il s'agit de la fonction d'usage, d'un élément de la fonction d'estime, ou d'aucune des deux (une pièce de l'objet) : a) transporter les affaires scolaires de l'élève ; b) il est vert fluo ; c) il possède deux bretelles rembourrées ; d) il porte le logo d'une marque connue ; e) il a une fermeture éclair ; f) son motif est à la mode.",
              hint: "La fonction d'usage est le service rendu ; la fonction d'estime concerne ce qui plaît à l'œil ; une pièce de l'objet n'est ni l'une ni l'autre.",
              solution: [
                "a) Transporter les affaires scolaires est le service rendu : c'est la fonction d'usage.",
                "b) La couleur vert fluo rend le sac attirant sans changer son usage : fonction d'estime.",
                "c) Les bretelles sont des pièces du sac : ni fonction d'usage, ni fonction d'estime.",
                "d) Le logo d'une marque relève de la fonction d'estime.",
                "e) La fermeture éclair est une pièce du sac : aucune des deux.",
                "f) Le motif à la mode relève de la fonction d'estime.",
                "Résultat : fonction d'usage = a ; fonction d'estime = b, d et f ; pièces de l'objet = c et e.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Léa habite à 3 km de son collège. a) Citer trois objets techniques différents qui peuvent répondre à son besoin. b) Réaliser la bête à cornes d'un vélo. c) Dans un magasin (données fictives), deux vélos ont les mêmes pièces et la même qualité : le premier, noir et sans marque, coûte 250 € ; le second, de couleur métallisée et d'une marque célèbre, coûte 400 €. Calculer la différence de prix et dire à quelle fonction elle correspond. d) Un camarade écrit : « La fonction d'usage du vélo, c'est d'avoir deux roues et un guidon. » Expliquer son erreur et corriger sa phrase.",
              hint: "Pour c), les deux vélos rendent exactement le même service : ce qui change, c'est seulement leur aspect et leur marque.",
              solution: [
                "a) Par exemple : un vélo, une trottinette, un bus (on pouvait aussi citer des rollers ou un scooter).",
                "b) À qui rend-il service ? Au cycliste. Sur quoi agit-il ? Sur le cycliste lui-même (il le transporte). Dans quel but ? Pour lui permettre de se déplacer.",
                "c) Différence de prix : 400 € - 250 € = 150 €.",
                "Les deux vélos ont la même fonction d'usage ; les 150 € de plus paient la couleur métallisée et la marque, c'est-à-dire la fonction d'estime.",
                "d) Les roues et le guidon sont des pièces du vélo, pas le service qu'il rend.",
                "Phrase corrigée : la fonction d'usage du vélo est de permettre à une personne de se déplacer.",
                "Résultat : trois objets pour un même besoin, une différence de 150 € qui correspond à la fonction d'estime, et une fonction d'usage écrite avec un verbe à l'infinitif.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Objet naturel", right: "Objet qui existe dans la nature sans avoir été fabriqué" },
              { left: "Objet technique", right: "Objet fabriqué par l'être humain pour répondre à un besoin" },
              { left: "Besoin", right: "Nécessité ou envie ressentie par une personne" },
              { left: "Fonction d'usage", right: "Le service rendu par l'objet" },
              { left: "Fonction d'estime", right: "Ce qui rend l'objet beau ou attirant" },
              { left: "Bête à cornes", right: "Outil en trois questions pour trouver la fonction d'usage" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces objets est un objet technique ?",
              options: ["Un galet sur la plage", "Une plume d'oiseau", "Une paire de ciseaux", "Une pomme de pin"],
              answer: 2,
              why: "Les ciseaux ont été conçus et fabriqués par l'être humain pour couper. Les autres objets existent dans la nature.",
            },
            {
              q: "Quelle est la fonction d'usage d'une lampe de poche ?",
              options: ["Éclairer dans l'obscurité", "Contenir deux piles", "Être en aluminium rouge", "Avoir un bouton marche-arrêt"],
              answer: 0,
              why: "La fonction d'usage est le service rendu : éclairer. Les piles et le bouton sont des pièces, la couleur relève de l'estime.",
            },
            {
              q: "Dans la bête à cornes, quelle question donne la fonction d'usage ?",
              options: ["À qui l'objet rend-il service ?", "Sur quoi l'objet agit-il ?", "Combien coûte l'objet ?", "Dans quel but ?"],
              answer: 3,
              why: "La réponse à « Dans quel but ? » exprime le service rendu, donc la fonction d'usage.",
            },
            {
              q: "La couleur dorée d'une montre relève :",
              options: ["de la fonction d'usage", "de la fonction d'estime", "du besoin de l'utilisateur", "de la bête à cornes"],
              answer: 1,
              why: "La couleur rend la montre plus attirante mais ne l'aide pas à mieux indiquer l'heure : c'est la fonction d'estime.",
            },
            {
              q: "Laquelle de ces phrases est vraie ?",
              options: ["Un besoin ne peut être satisfait que par un seul objet", "Un même besoin peut être satisfait par plusieurs objets", "Chaque objet technique ne répond jamais qu'à un seul besoin", "Le besoin apparaît toujours après l'objet"],
              answer: 1,
              why: "Pour se déplacer, on peut utiliser un vélo, un bus ou une trottinette : plusieurs objets répondent au même besoin.",
            },
          ],
          trap: "Confondre la fonction d'usage avec une pièce de l'objet : « avoir une batterie » ou « avoir deux roues » décrit l'objet, pas le service qu'il rend.",
          method: "Écrivez la fonction d'usage en commençant par un verbe à l'infinitif, puis relisez-la : si elle cite une pièce, une couleur ou une marque, recommencez.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'evolution-objets',
          title: 'Comment les objets évoluent au fil du temps',
          minutes: 25,
          objectives: [
            "Identifier les raisons qui font évoluer un objet technique.",
            "Situer quelques objets d'une même famille sur une frise chronologique.",
            "Distinguer une famille d'objets et une lignée d'objets.",
            "Distinguer une invention et une innovation.",
          ],
          course: [
            {
              heading: "Pourquoi les objets changent-ils ?",
              paragraphs: [
                "Les objets que vous utilisez n'ont pas toujours eu la même forme. Ils évoluent au fil du temps, pour plusieurs raisons. D'abord, les besoins des utilisateurs changent : on veut des objets plus légers, plus rapides, plus confortables ou plus faciles à transporter.",
                "Ensuite, les progrès des sciences et des techniques apportent de nouvelles possibilités : de nouveaux matériaux (le plastique, l'aluminium, la fibre de carbone), de nouvelles sources d'énergie (l'électricité, les batteries) ou de nouveaux composants (les puces électroniques).",
                "Enfin, d'autres raisons comptent aussi : baisser le prix de fabrication, améliorer la sécurité, respecter de nouvelles lois, réduire la pollution, ou simplement suivre la mode.",
              ],
              box: { label: "À retenir", text: "Un objet évolue pour mieux répondre aux besoins, grâce aux progrès techniques (matériaux, énergie, composants), mais aussi pour des raisons de prix, de sécurité, d'environnement ou de mode." },
            },
            {
              heading: "Famille et lignée d'objets",
              paragraphs: [
                "Tous les objets qui ont la même fonction d'usage forment une famille d'objets. Par exemple, la bougie, la lampe à huile, l'ampoule à incandescence et la lampe à LED appartiennent à la famille des objets qui servent à éclairer.",
                "Le principe technique, c'est la manière dont l'objet fonctionne. La bougie éclaire grâce à une flamme (une combustion), l'ampoule à incandescence grâce à un filament chauffé par l'électricité jusqu'à briller, la lampe à LED grâce à un petit composant électronique qui émet de la lumière en chauffant très peu.",
                "Une lignée d'objets regroupe les objets qui ont la même fonction d'usage et le même principe technique, et qui se sont améliorés petit à petit. La bougie et la lampe à huile font partie de la même lignée (la flamme), alors que la lampe à LED ouvre une nouvelle lignée.",
              ],
              box: { label: "Définition", text: "Famille d'objets : objets qui ont la même fonction d'usage. Lignée d'objets : objets qui ont la même fonction d'usage et le même principe technique." },
            },
            {
              heading: "Un exemple : l'histoire du vélo",
              paragraphs: [
                "En 1817, l'Allemand Karl Drais invente la draisienne : un cadre en bois, deux roues, et pas de pédales. On avance en poussant sur le sol avec les pieds. Dans les années 1860, en France, on ajoute des pédales sur la roue avant : c'est le vélocipède.",
                "Dans les années 1870 apparaît le grand-bi, avec une roue avant immense : comme les pédales sont fixées sur cette roue, plus elle est grande, plus on va loin à chaque tour de pédale. Mais il est dangereux, car on tombe de haut.",
                "Vers 1885, la bicyclette à chaîne transmet le mouvement des pédales à la roue arrière, avec deux roues de même taille : c'est beaucoup plus sûr. En 1888, John Boyd Dunlop met au point le pneu gonflé d'air, plus confortable. Plus récemment, le vélo à assistance électrique, équipé d'un moteur et d'une batterie, s'est largement répandu à partir des années 2010.",
              ],
            },
            {
              heading: "Invention et innovation",
              paragraphs: [
                "Une invention est la création de quelque chose de nouveau qui n'existait pas avant, par exemple un nouveau mécanisme ou un nouveau procédé. Une innovation est une nouveauté qui est mise sur le marché et adoptée par les utilisateurs. Toutes les inventions ne deviennent pas des innovations : certaines restent dans les tiroirs.",
                "L'évolution des objets a des effets sur la vie des gens et sur l'environnement. Le vélo a permis à beaucoup de personnes de se déplacer plus loin à moindre coût. Mais certains objets récents consomment des matériaux rares ou de l'énergie : en étudiant leur évolution, on peut aussi réfléchir à leurs conséquences.",
              ],
              box: { label: "Repère", text: "Invention : on crée une nouveauté. Innovation : la nouveauté arrive sur le marché et les gens l'utilisent." },
            },
          ],
          keyPoints: [
            "Les objets évoluent pour mieux répondre aux besoins et grâce aux progrès techniques.",
            "Le prix, la sécurité, l'environnement, les lois et la mode font aussi évoluer les objets.",
            "Famille d'objets : même fonction d'usage.",
            "Lignée d'objets : même fonction d'usage et même principe technique.",
            "Vélo : draisienne (1817), vélocipède (années 1860), grand-bi (années 1870), bicyclette à chaîne (vers 1885).",
            "Une invention est une création nouvelle ; une innovation est une nouveauté adoptée par les utilisateurs.",
          ],
          example: {
            statement: "La lampe à huile, la lampe à LED et la bougie appartiennent-elles à la même famille ? À la même lignée ? Justifier.",
            solution: [
              "Les trois objets servent à éclairer : ils ont la même fonction d'usage.",
              "Ils appartiennent donc à la même famille d'objets, celle de l'éclairage.",
              "La bougie et la lampe à huile éclairent grâce à une flamme : elles ont le même principe technique.",
              "La lampe à LED éclaire grâce à un composant électronique alimenté par l'électricité : son principe technique est différent.",
              "Réponse : même famille pour les trois ; la bougie et la lampe à huile forment une même lignée, la lampe à LED appartient à une autre lignée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque évolution, dire quelle raison principale l'explique (progrès technique, sécurité, besoin de l'utilisateur, ou mode) : a) le grand-bi est remplacé par la bicyclette à deux roues égales ; b) les téléphones deviennent assez petits pour tenir dans une poche ; c) une marque sort la même paire de baskets dans une nouvelle couleur tendance ; d) les pneus gonflés d'air remplacent les roues en bois cerclées de fer.",
              hint: "Demandez-vous ce que l'évolution apporte : moins de danger, plus de praticité, une nouvelle technique, ou un nouvel aspect.",
              solution: [
                "a) Le grand-bi faisait tomber de haut : la bicyclette est plus sûre. Raison : la sécurité.",
                "b) Pouvoir emporter son téléphone partout répond à une attente des utilisateurs. Raison : le besoin de l'utilisateur (rendu possible par le progrès technique).",
                "c) Seule la couleur change : raison : la mode.",
                "d) Le pneu gonflé d'air est une nouvelle technique qui rend le vélo plus confortable. Raison : le progrès technique.",
                "Résultat : a) sécurité ; b) besoin de l'utilisateur ; c) mode ; d) progrès technique.",
              ],
            },
            {
              level: 2,
              statement: "Voici des objets qui permettent d'écouter de la musique, avec leur date d'apparition : le CD (1982), le phonographe (1877), le streaming sur Internet (années 2000), la cassette audio (1963), le disque vinyle microsillon (1948). a) Les ranger dans l'ordre chronologique. b) Calculer combien d'années séparent le phonographe du CD. c) Ces objets forment-ils une famille ? Justifier.",
              hint: "Rangez les dates de la plus ancienne à la plus récente, puis faites une soustraction pour b).",
              solution: [
                "a) Ordre chronologique : phonographe (1877), disque vinyle microsillon (1948), cassette audio (1963), CD (1982), streaming (années 2000).",
                "b) 1982 - 1877 = 105 ans.",
                "c) Oui : tous ces objets ont la même fonction d'usage, permettre d'écouter de la musique enregistrée. Ils forment donc une famille d'objets.",
                "Résultat : phonographe, vinyle, cassette, CD, streaming ; 105 ans séparent le phonographe du CD ; c'est une famille d'objets.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Expliquer pourquoi, sur un grand-bi, la roue avant était si grande. b) Expliquer quelle invention a permis d'abandonner cette roue géante, et pourquoi. c) Le vélo à assistance électrique (VAE) et la bicyclette classique ont-ils la même fonction d'usage ? Le même principe technique ? d) Citer un avantage et un inconvénient du VAE pour l'environnement.",
              hint: "Sur le grand-bi, les pédales sont fixées directement sur la roue avant : un tour de pédale fait faire un tour à la roue.",
              solution: [
                "a) Sur le grand-bi, les pédales font tourner directement la roue avant : un tour de pédale égale un tour de roue. Plus la roue est grande, plus la distance parcourue à chaque tour de pédale est grande, donc plus on va vite.",
                "b) La transmission par chaîne : elle relie les pédales à la roue arrière, et grâce à des roues dentées de tailles différentes, un tour de pédale peut faire faire plusieurs tours à la roue. Une grande roue n'est donc plus nécessaire pour aller vite, et le vélo devient plus sûr.",
                "c) Même fonction d'usage : permettre à une personne de se déplacer. Le principe technique est en partie différent : le VAE ajoute un moteur électrique et une batterie qui aident le cycliste.",
                "d) Avantage : il peut remplacer la voiture pour des trajets plus longs ou en côte, ce qui pollue moins. Inconvénient : sa batterie demande des matériaux à extraire et doit être recyclée en fin de vie.",
                "Résultat : la chaîne a remplacé la roue géante ; le VAE garde la fonction d'usage du vélo mais ajoute une aide électrique, avec des avantages et des inconvénients pour l'environnement.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez l'histoire du vélo dans l'ordre chronologique.",
            items: [
              "La draisienne, sans pédales (1817)",
              "Le vélocipède, pédales sur la roue avant (années 1860)",
              "Le grand-bi, à la roue avant géante (années 1870)",
              "La bicyclette à chaîne et roues égales (vers 1885)",
              "Le pneu gonflé d'air de Dunlop (1888)",
              "Le vélo à assistance électrique se répand (années 2010)",
            ],
          },
          quiz: [
            {
              q: "Deux objets de la même lignée ont forcément :",
              options: ["la même couleur et le même prix", "le même principe technique", "la même date de fabrication", "le même fabricant et la même marque"],
              answer: 1,
              why: "Une lignée réunit des objets qui servent à la même chose et fonctionnent de la même manière.",
            },
            {
              q: "Comment avançait-on sur une draisienne ?",
              options: ["En poussant sur le sol avec les pieds", "Avec des pédales fixées sur la roue avant", "Grâce à une chaîne reliée à la roue arrière", "Avec un petit moteur"],
              answer: 0,
              why: "La draisienne de 1817 n'avait pas de pédales : on avançait en poussant sur le sol.",
            },
            {
              q: "Une nouveauté mise sur le marché et adoptée par les utilisateurs est :",
              options: ["une invention seulement", "une lignée", "une famille d'objets", "une innovation"],
              answer: 3,
              why: "L'innovation, c'est une nouveauté qui arrive sur le marché et que les gens utilisent.",
            },
            {
              q: "La bougie et la lampe à LED appartiennent :",
              options: ["à la même lignée, puisqu'elles servent toutes deux à éclairer", "à des familles différentes, car elles ne fonctionnent pas pareil", "à la même famille mais à des lignées différentes", "à aucune famille"],
              answer: 2,
              why: "Elles ont la même fonction d'usage (éclairer) mais pas le même principe technique (flamme ou composant électronique).",
            },
            {
              q: "Laquelle de ces raisons NE fait PAS évoluer un objet ?",
              options: ["Un nouveau matériau plus léger", "Une nouvelle loi sur la sécurité", "Le nom du vendeur du magasin", "Un nouveau besoin des utilisateurs"],
              answer: 2,
              why: "Les matériaux, les lois et les besoins font évoluer les objets ; le nom du vendeur n'a aucun rôle.",
            },
          ],
          trap: "Confondre famille et lignée : des objets qui servent à la même chose sont de la même famille, mais ils ne sont de la même lignée que s'ils fonctionnent aussi de la même manière.",
          method: "Pour une frise chronologique, recopiez d'abord toutes les dates, rangez-les de la plus ancienne à la plus récente, puis placez les objets ; vérifiez enfin que chaque objet améliore bien le précédent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'experience-utilisateur',
          title: "L'expérience utilisateur : un objet facile à utiliser ?",
          minutes: 25,
          objectives: [
            "Décrire l'expérience d'un utilisateur face à un objet ou à une application.",
            "Identifier les éléments de l'interface qui facilitent l'utilisation d'un objet.",
            "Repérer ce qui rend un objet ergonomique et accessible.",
            "Exploiter les résultats d'un test d'usage pour comparer deux objets.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'expérience utilisateur ?",
              paragraphs: [
                "L'expérience utilisateur, c'est tout ce que vit et ressent une personne quand elle utilise un objet, un site ou une application : est-ce facile à comprendre ? Rapide ? Agréable ? Est-ce que l'on fait des erreurs ? On l'appelle aussi UX, de l'anglais user experience.",
                "Elle commence avant l'utilisation (la première impression, la découverte), continue pendant (la prise en main, les gestes, les réactions de l'objet) et se termine après (la satisfaction ou l'agacement). Un objet peut très bien fonctionner et pourtant donner une mauvaise expérience, par exemple une télécommande avec cinquante boutons minuscules.",
              ],
              box: { label: "Définition", text: "L'expérience utilisateur est l'ensemble des ressentis d'une personne lorsqu'elle utilise un objet ou un service : facilité, rapidité, confort, plaisir, erreurs commises." },
            },
            {
              heading: "L'ergonomie : adapter l'objet à l'humain",
              paragraphs: [
                "Un objet ergonomique est adapté au corps et aux gestes de la personne qui l'utilise. Sa forme, sa taille et sa masse permettent une bonne prise en main, sans fatigue ni douleur. La poignée d'une casserole qui ne chauffe pas, une souris d'ordinateur qui épouse la main ou des ciseaux pour gauchers sont des exemples d'ergonomie.",
                "L'ergonomie concerne aussi la place des commandes : un bouton important doit être facile à trouver, un texte doit être assez grand et bien contrasté pour être lu. On dit qu'un objet est intuitif quand on comprend comment s'en servir presque sans lire la notice.",
              ],
            },
            {
              heading: "L'interface et le retour d'information",
              paragraphs: [
                "L'interface est la partie de l'objet avec laquelle l'utilisateur échange des informations : boutons, écran tactile, molette, voyants lumineux, sons, vibrations. C'est par l'interface que l'on donne des ordres à l'objet et que l'objet répond.",
                "Un bon objet confirme toujours ce qu'il fait : c'est le retour d'information. Le bip du four à micro-ondes quand on appuie sur une touche, le voyant qui passe au vert quand la batterie est chargée, ou la vibration du téléphone lors d'un appui rassurent l'utilisateur : il sait que son action a été prise en compte.",
                "Les couleurs et les pictogrammes aident aussi à comprendre : le rouge indique souvent l'arrêt ou un danger, le vert la mise en marche ou que tout va bien. Un pictogramme clair évite de lire un long texte.",
              ],
              box: { label: "À retenir", text: "Interface : ce qui permet à l'utilisateur et à l'objet d'échanger (boutons, écran, voyants, sons). Retour d'information : le signal par lequel l'objet confirme qu'il a reçu l'ordre." },
            },
            {
              heading: "Un objet pour tous, et comment l'évaluer",
              paragraphs: [
                "Un objet accessible peut être utilisé par le plus grand nombre de personnes, y compris des personnes en situation de handicap ou âgées : boutons en relief, inscriptions en braille, commande vocale, sous-titres, gros caractères, bon contraste des couleurs.",
                "Pour savoir si un objet est facile à utiliser, on réalise un test d'usage : on demande à plusieurs personnes de réaliser une tâche précise, puis on observe et on mesure. On peut chronométrer le temps nécessaire, compter les erreurs et poser un questionnaire de satisfaction. On compare ensuite les résultats de plusieurs objets pour choisir le plus facile à utiliser.",
              ],
              box: { label: "Méthode", text: "Un test d'usage : 1) choisir une tâche précise ; 2) la faire réaliser par plusieurs utilisateurs ; 3) mesurer le temps, compter les erreurs, recueillir les avis ; 4) calculer des moyennes et comparer." },
            },
          ],
          keyPoints: [
            "L'expérience utilisateur (UX) est l'ensemble des ressentis d'une personne qui utilise un objet.",
            "Un objet ergonomique est adapté au corps et aux gestes de l'utilisateur.",
            "L'interface (boutons, écran, voyants, sons) permet l'échange entre l'utilisateur et l'objet.",
            "Le retour d'information confirme à l'utilisateur que son action a été prise en compte.",
            "Un objet accessible peut être utilisé par tous, y compris les personnes en situation de handicap.",
            "Un test d'usage mesure le temps, les erreurs et la satisfaction de plusieurs utilisateurs.",
          ],
          example: {
            statement: "Une bouilloire électrique possède un interrupteur, un voyant qui s'allume pendant la chauffe, une poignée isolée et des graduations sur le côté. Pour chaque élément, dire ce qu'il apporte à l'expérience utilisateur.",
            solution: [
              "L'interrupteur fait partie de l'interface : il permet à l'utilisateur de donner l'ordre de chauffer.",
              "Le voyant est un retour d'information : il confirme que la bouilloire chauffe.",
              "La poignée isolée relève de l'ergonomie et de la sécurité : on peut prendre la bouilloire sans se brûler.",
              "Les graduations aident l'utilisateur à verser la bonne quantité d'eau, sans gaspiller d'énergie.",
              "Réponse : interface (interrupteur), retour d'information (voyant), ergonomie (poignée), aide à l'utilisation (graduations).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque élément, dire s'il s'agit d'un retour d'information, d'un élément d'ergonomie ou d'un élément d'accessibilité : a) le téléphone vibre quand on touche une touche de l'écran ; b) la poignée d'une valise est recouverte de caoutchouc doux ; c) les touches d'un distributeur de billets portent des inscriptions en braille ; d) le lave-linge sonne à la fin du programme ; e) une vidéo propose des sous-titres.",
              hint: "Un retour d'information répond à une action ; l'ergonomie concerne le confort du corps ; l'accessibilité ouvre l'objet à tous.",
              solution: [
                "a) La vibration confirme l'appui : retour d'information.",
                "b) La poignée confortable est adaptée à la main : ergonomie.",
                "c) Le braille permet aux personnes aveugles ou malvoyantes d'utiliser le distributeur : accessibilité.",
                "d) La sonnerie informe que le programme est terminé : retour d'information.",
                "e) Les sous-titres permettent aux personnes sourdes ou malentendantes de suivre la vidéo : accessibilité.",
                "Résultat : retour d'information = a et d ; ergonomie = b ; accessibilité = c et e.",
              ],
            },
            {
              level: 2,
              statement: "Lors d'un test d'usage (données fictives), cinq élèves doivent régler l'heure d'un réveil. Ils mettent 12 s, 15 s, 9 s, 20 s et 14 s. a) Calculer le temps moyen. b) L'élève le plus lent a expliqué qu'il ne trouvait pas le bon bouton. Proposer une amélioration de l'interface.",
              hint: "La moyenne s'obtient en additionnant tous les temps, puis en divisant par le nombre d'élèves.",
              solution: [
                "a) Somme des temps : 12 + 15 + 9 + 20 + 14 = 70 s.",
                "Temps moyen : 70 ÷ 5 = 14 s.",
                "b) On peut écrire clairement le mot « Heure » ou dessiner un pictogramme d'horloge sur le bouton de réglage, le placer à un endroit visible, ou ajouter un retour d'information (un bip ou un affichage qui clignote) quand on entre dans le réglage.",
                "Résultat : temps moyen de 14 s ; un bouton mieux identifié améliorerait l'expérience utilisateur.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un club teste deux télécommandes, A et B, avec quatre utilisateurs (données fictives). Tâche : allumer la télévision et monter le volume. Télécommande A : temps 10 s, 12 s, 8 s, 14 s ; erreurs 2, 1, 2, 3. Télécommande B : temps 6 s, 7 s, 5 s, 6 s ; erreurs 0, 1, 0, 0. Notes de satisfaction sur 5 : A obtient 2, 3, 2, 3 ; B obtient 4, 5, 4, 5. a) Calculer pour chaque télécommande le temps moyen, le nombre total d'erreurs et la note moyenne. b) Quelle télécommande offre la meilleure expérience utilisateur ? Justifier avec les trois critères. c) La télécommande A a 48 boutons et B en a 12 : proposer une explication des résultats.",
              hint: "Calculez chaque moyenne séparément, puis comparez critère par critère : un temps plus court et moins d'erreurs sont meilleurs, une note plus haute aussi.",
              solution: [
                "a) A : temps total 10 + 12 + 8 + 14 = 44 s, temps moyen 44 ÷ 4 = 11 s ; erreurs 2 + 1 + 2 + 3 = 8 ; notes 2 + 3 + 2 + 3 = 10, note moyenne 10 ÷ 4 = 2,5 sur 5.",
                "B : temps total 6 + 7 + 5 + 6 = 24 s, temps moyen 24 ÷ 4 = 6 s ; erreurs 0 + 1 + 0 + 0 = 1 ; notes 4 + 5 + 4 + 5 = 18, note moyenne 18 ÷ 4 = 4,5 sur 5.",
                "b) B est meilleure sur les trois critères : elle est plus rapide (6 s contre 11 s), provoque moins d'erreurs (1 contre 8) et satisfait davantage (4,5 contre 2,5).",
                "c) Avec 48 boutons, il est plus long de trouver le bon et on se trompe plus souvent ; avec 12 boutons, l'interface est plus simple et plus intuitive.",
                "Résultat : la télécommande B offre la meilleure expérience utilisateur, sans doute parce que son interface est plus simple.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur l'expérience utilisateur.",
            statements: [
              { text: "Un objet qui fonctionne bien offre forcément une bonne expérience utilisateur.", true: false, why: "Un objet peut fonctionner parfaitement et rester difficile ou désagréable à utiliser." },
              { text: "Le bip d'un micro-ondes quand on appuie sur une touche est un retour d'information.", true: true, why: "Il confirme à l'utilisateur que l'appui a été pris en compte." },
              { text: "L'ergonomie concerne seulement la couleur de l'objet.", true: false, why: "L'ergonomie concerne l'adaptation de l'objet au corps et aux gestes : forme, taille, masse, place des commandes." },
              { text: "Des inscriptions en braille rendent un objet plus accessible.", true: true, why: "Elles permettent aux personnes aveugles ou malvoyantes de l'utiliser." },
              { text: "Pour un test d'usage, il suffit de demander l'avis d'une seule personne.", true: false, why: "Il faut plusieurs utilisateurs pour que les résultats soient fiables et comparables." },
              { text: "Un objet intuitif peut s'utiliser presque sans lire la notice.", true: true, why: "C'est la définition d'un objet intuitif : on comprend vite comment s'en servir." },
            ],
          },
          quiz: [
            {
              q: "Que signifie UX ?",
              options: ["Utilisation extrême des objets", "Expérience utilisateur", "Unité d'expertise", "Usage externe"],
              answer: 1,
              why: "UX vient de l'anglais user experience, l'expérience utilisateur.",
            },
            {
              q: "Lequel de ces éléments fait partie de l'interface d'un lave-linge ?",
              options: ["Le tambour intérieur en acier inoxydable", "Le moteur qui fait tourner le tambour", "Le tuyau d'évacuation", "Le bouton de choix du programme"],
              answer: 3,
              why: "L'interface est ce qui permet d'échanger avec l'utilisateur : ici, le bouton qui sert à choisir le programme.",
            },
            {
              q: "Une poignée de casserole qui ne chauffe pas est un exemple :",
              options: ["d'ergonomie", "de fonction d'estime", "d'accessibilité numérique", "de retour d'information"],
              answer: 0,
              why: "Elle rend l'objet adapté et confortable pour la main de l'utilisateur : c'est de l'ergonomie.",
            },
            {
              q: "Dans un test d'usage, quatre personnes mettent 5 s, 7 s, 6 s et 6 s. Quel est le temps moyen ?",
              options: ["5 s", "7 s", "6 s", "24 s"],
              answer: 2,
              why: "5 + 7 + 6 + 6 = 24 s, et 24 ÷ 4 = 6 s.",
            },
            {
              q: "Quel aménagement rend une vidéo accessible aux personnes sourdes ?",
              options: ["Un son plus fort", "Des sous-titres", "Une image plus colorée", "Un écran plus grand"],
              answer: 1,
              why: "Les sous-titres permettent de comprendre les paroles sans les entendre.",
            },
          ],
          trap: "Croire qu'un objet facile à utiliser est simplement un objet qui marche : l'expérience utilisateur se juge sur la rapidité, les erreurs et la satisfaction des utilisateurs, pas seulement sur le bon fonctionnement.",
          method: "Pour comparer deux objets, faites un tableau avec une colonne par objet et une ligne par critère (temps moyen, erreurs, satisfaction), puis entourez le meilleur résultat de chaque ligne avant de conclure.",
        },
      ],
    },
    /* ==================================================================== */
    /* METTRE EN SERVICE, PARAMÉTRER ET TESTER                                */
    /* ==================================================================== */
    {
      id: 'mettre-en-service',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'notice-mise-en-service',
          title: 'Lire une notice et mettre en service un objet',
          minutes: 25,
          objectives: [
            "Identifier les différentes parties d'une notice d'utilisation.",
            "Interpréter les pictogrammes de sécurité et d'information d'une notice.",
            "Mettre en service un objet en suivant les étapes de sa notice.",
            "Utiliser la partie dépannage d'une notice pour résoudre un problème simple.",
          ],
          course: [
            {
              heading: "À quoi sert une notice ?",
              paragraphs: [
                "Une notice (ou mode d'emploi) est un document fourni par le fabricant avec l'objet. Elle explique comment l'installer, le mettre en service, l'utiliser, l'entretenir et le jeter, sans danger. Elle peut être imprimée sur papier, ou disponible en ligne, par exemple grâce à un QR code imprimé sur l'emballage.",
                "En France, le mode d'emploi d'un produit vendu doit être rédigé en français. Une notice bien lue évite d'abîmer l'objet, de se blesser ou de perdre du temps. Elle se garde pendant toute la durée de vie de l'objet, car on en a souvent besoin plus tard pour un réglage ou une panne.",
              ],
              box: { label: "Définition", text: "Mettre en service un objet, c'est réaliser toutes les opérations nécessaires pour qu'il fonctionne pour la première fois : déballer, installer, alimenter en énergie, allumer et faire les premiers réglages." },
            },
            {
              heading: "Les parties d'une notice",
              paragraphs: [
                "La plupart des notices sont organisées de la même façon. On y trouve : la liste du contenu de l'emballage ; les consignes de sécurité ; une description de l'objet, souvent un dessin dont chaque pièce porte un numéro (une légende) ; l'installation et la mise en service ; l'utilisation ; l'entretien.",
                "À la fin, il y a souvent une partie dépannage, présentée sous forme de tableau en trois colonnes : le problème constaté, sa cause possible, la solution. On y trouve aussi les caractéristiques techniques (dimensions, masse, alimentation), la garantie et les consignes pour la fin de vie de l'objet.",
                "Il n'est pas toujours nécessaire de lire la notice en entier d'un seul coup : le sommaire permet d'aller directement à la partie utile. En revanche, les consignes de sécurité doivent toujours être lues avant la première utilisation.",
              ],
            },
            {
              heading: "Les pictogrammes",
              paragraphs: [
                "Une notice utilise des pictogrammes, de petits dessins compris par tous, quelle que soit la langue. Un triangle jaune bordé de noir avec un point d'exclamation signale un danger : attention. Un livre ouvert avec la lettre i invite à consulter la notice.",
                "Sur l'objet ou son emballage, on trouve d'autres symboles. La poubelle à roulettes barrée d'une croix indique que l'appareil ne doit pas être jeté avec les ordures ménagères : il faut le déposer dans un point de collecte (déchetterie, magasin). Le marquage CE signifie que le fabricant déclare que son produit respecte les règles de sécurité de l'Union européenne.",
              ],
              box: { label: "À retenir", text: "Triangle avec un point d'exclamation : danger. Livre avec un i : lire la notice. Poubelle barrée : ne pas jeter avec les ordures ménagères. Marquage CE : conforme aux exigences européennes." },
            },
            {
              heading: "Mettre en service, étape par étape",
              paragraphs: [
                "Pour mettre en service un objet, on suit un ordre précis. 1) Vérifier le contenu de l'emballage grâce à la liste de la notice. 2) Lire les consignes de sécurité. 3) Installer l'objet : le poser, l'assembler ou le fixer. 4) L'alimenter en énergie : insérer les piles en respectant les signes + et -, brancher le chargeur ou la prise.",
                "5) Mettre l'objet sous tension, c'est-à-dire l'allumer. 6) Faire les premiers réglages : langue, date, heure, connexion. 7) Vérifier qu'il fonctionne correctement. Si ce n'est pas le cas, on consulte la partie dépannage avant de conclure que l'objet est en panne.",
              ],
              box: { label: "Méthode", text: "Contenu, sécurité, installation, alimentation, mise sous tension, premiers réglages, vérification. Et en cas de problème : la partie dépannage." },
            },
          ],
          keyPoints: [
            "La notice explique comment installer, mettre en service, utiliser, entretenir et jeter un objet.",
            "Les consignes de sécurité se lisent toujours avant la première utilisation.",
            "Le tableau de dépannage indique : problème, cause possible, solution.",
            "Poubelle barrée : l'appareil se dépose dans un point de collecte, pas à la poubelle.",
            "Le marquage CE indique la conformité aux exigences de sécurité européennes.",
            "Mise en service : contenu, sécurité, installation, alimentation, mise sous tension, réglages, vérification.",
          ],
          example: {
            statement: "Une station météo d'intérieur ne s'allume pas après la mise en place des piles. Le tableau de dépannage de sa notice indique : « L'écran reste éteint. Cause : piles mal placées ou usées. Solution : vérifier le sens des piles (+ et -) ou les remplacer. » Expliquer comment procéder.",
            solution: [
              "On repère d'abord le problème dans la première colonne du tableau : « L'écran reste éteint ».",
              "On lit les causes possibles : piles mal placées ou piles usées.",
              "On vérifie la première cause : on ouvre le compartiment et on compare le sens des piles avec les signes + et - dessinés au fond.",
              "Si les piles sont bien placées, on teste la deuxième cause en les remplaçant par des piles neuves.",
              "Réponse : on suit la notice en testant les causes une par une, en commençant par la plus simple, le sens des piles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dans quelle partie de la notice faut-il chercher chaque information ? a) Savoir si le câble de recharge est livré avec l'objet. b) Connaître la masse de l'objet. c) Savoir comment nettoyer l'objet. d) Savoir quoi faire si l'objet ne s'allume pas. e) Savoir s'il y a un risque de brûlure.",
              hint: "Rappelez-vous les parties : contenu de l'emballage, sécurité, description, installation et mise en service, utilisation, entretien, dépannage, caractéristiques techniques.",
              solution: [
                "a) Le câble livré : la liste du contenu de l'emballage.",
                "b) La masse : les caractéristiques techniques.",
                "c) Le nettoyage : l'entretien.",
                "d) L'objet ne s'allume pas : le dépannage.",
                "e) Le risque de brûlure : les consignes de sécurité.",
                "Résultat : contenu, caractéristiques techniques, entretien, dépannage, sécurité.",
              ],
            },
            {
              level: 2,
              statement: "Voici, dans le désordre, les étapes de mise en service d'une enceinte sans fil : A) appuyer sur le bouton marche ; B) lire les consignes de sécurité ; C) vérifier que l'enceinte joue la musique du téléphone ; D) vérifier que l'enceinte et le câble de charge sont dans la boîte ; E) charger complètement la batterie comme le demande la notice ; F) relier l'enceinte au téléphone par Bluetooth. Remettre les étapes dans l'ordre et justifier la place de l'étape C.",
              hint: "Suivez l'ordre du cours : contenu, sécurité, alimentation, mise sous tension, réglages, vérification.",
              solution: [
                "On vérifie d'abord le contenu : D.",
                "Puis on lit les consignes de sécurité : B.",
                "On alimente l'objet en énergie en chargeant la batterie : E.",
                "On met l'enceinte sous tension : A.",
                "On fait le réglage de connexion avec le téléphone : F.",
                "On termine par la vérification du fonctionnement : C. Elle vient en dernier, car on ne peut vérifier que l'enceinte joue la musique qu'une fois qu'elle est chargée, allumée et connectée.",
                "Résultat : D, B, E, A, F, C.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Le tableau de dépannage d'une lampe de bureau à LED (notice fictive) indique : 1) La lampe ne s'allume pas : cause, adaptateur secteur non branché ; solution, brancher l'adaptateur. 2) La lampe s'allume puis s'éteint au bout de quelques secondes : cause, batterie presque vide ; solution, laisser branché 3 heures. 3) La lumière clignote : cause, mauvais contact du câble ; solution, rebrancher le câble à fond. Inès branche bien l'adaptateur, appuie sur le bouton : la lampe s'allume puis s'éteint au bout de 5 secondes. Elle conclut : « Elle est en panne, il faut la rapporter au magasin. » a) Quel problème du tableau correspond à la situation ? b) Que doit faire Inès ? c) Pourquoi sa conclusion est-elle trop rapide ? d) Elle met la lampe à charger à 16 h 45 : à quelle heure pourra-t-elle la tester à nouveau ?",
              hint: "Lisez la première colonne de chaque ligne et comparez-la exactement avec ce qu'Inès observe. Pour d), ajoutez 3 heures.",
              solution: [
                "a) La lampe s'allume puis s'éteint au bout de quelques secondes : c'est le problème n° 2.",
                "b) La cause indiquée est une batterie presque vide : Inès doit laisser la lampe branchée 3 heures.",
                "c) Elle n'a pas consulté la partie dépannage : le problème a une cause simple, prévue par le fabricant, qui ne signifie pas que la lampe est en panne.",
                "d) 16 h 45 + 3 h = 19 h 45.",
                "Résultat : problème n° 2, recharge de 3 heures, nouveau test à 19 h 45 ; on consulte toujours le dépannage avant de conclure à une panne.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque pictogramme décrit à sa signification.",
            pairs: [
              { left: "Triangle jaune avec un point d'exclamation", right: "Attention, danger" },
              { left: "Livre ouvert avec la lettre i", right: "Consulter la notice" },
              { left: "Poubelle à roulettes barrée d'une croix", right: "Ne pas jeter avec les ordures ménagères" },
              { left: "Marquage CE", right: "Conforme aux exigences de sécurité européennes" },
              { left: "Signes + et - dans un compartiment", right: "Sens dans lequel placer les piles" },
            ],
          },
          quiz: [
            {
              q: "Quelle partie de la notice faut-il toujours lire avant la première utilisation ?",
              options: ["La garantie", "Les consignes de sécurité", "Les caractéristiques techniques", "La fin de vie"],
              answer: 1,
              why: "Les consignes de sécurité évitent de se blesser ou d'abîmer l'objet dès la première utilisation.",
            },
            {
              q: "Un tableau de dépannage est organisé en trois colonnes :",
              options: ["prix, magasin, date d'achat", "pièce, couleur, matière de l'objet", "problème, cause, solution", "étape, durée, outil nécessaire"],
              answer: 2,
              why: "On repère le problème, on lit sa cause possible, puis on applique la solution proposée.",
            },
            {
              q: "Que signifie la poubelle à roulettes barrée d'une croix ?",
              options: ["L'objet ne doit pas être jeté avec les ordures ménagères", "L'objet est fabriqué en plastique", "L'objet est interdit à la vente partout dans l'Union européenne", "L'objet peut être jeté à la poubelle"],
              answer: 0,
              why: "L'appareil doit être déposé dans un point de collecte pour être traité et recyclé.",
            },
            {
              q: "Quelle est la dernière étape d'une mise en service ?",
              options: ["Installer l'objet à l'endroit prévu par la notice", "Lire les consignes de sécurité", "Brancher l'alimentation", "Vérifier que l'objet fonctionne"],
              answer: 3,
              why: "On ne peut vérifier le fonctionnement qu'une fois l'objet installé, alimenté, allumé et réglé.",
            },
            {
              q: "Mettre un objet sous tension, c'est :",
              options: ["le ranger", "le peser", "l'allumer", "le démonter"],
              answer: 2,
              why: "Mettre sous tension, c'est fournir l'énergie électrique à l'objet pour qu'il démarre.",
            },
          ],
          trap: "Conclure trop vite qu'un objet est en panne alors que le problème vient d'une étape oubliée : pile à l'envers, batterie non chargée, câble mal branché. La partie dépannage de la notice se consulte d'abord.",
          method: "Avant de commencer, repérez dans le sommaire les parties « Sécurité », « Mise en service » et « Dépannage » ; cochez ensuite chaque étape réalisée pour ne rien oublier.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'parametrer-tester',
          title: 'Paramétrer un objet et tester son fonctionnement',
          minutes: 30,
          objectives: [
            "Identifier les paramètres réglables d'un objet et leurs plages de réglage.",
            "Paramétrer un objet pour l'adapter au besoin de l'utilisateur.",
            "Rédiger un protocole de test simple : conditions, résultat attendu, résultat observé.",
            "Conclure sur le bon fonctionnement d'un objet à partir de mesures.",
          ],
          course: [
            {
              heading: "Paramétrer, c'est régler l'objet",
              paragraphs: [
                "Un paramètre est un réglage que l'utilisateur peut modifier pour adapter le fonctionnement d'un objet à son besoin : l'heure d'un réveil, le volume d'une enceinte, la luminosité d'un écran, la température d'un four, la durée d'un minuteur, la langue d'une application.",
                "Chaque paramètre a une valeur, souvent avec une unité (19 °C, 30 s, 50 %), et une plage de réglage : la valeur la plus petite et la valeur la plus grande possibles. Par exemple, la durée d'allumage d'une lampe à détecteur de présence peut se régler de 10 s à 5 min.",
                "Quand on achète un objet, ses paramètres ont des valeurs par défaut, choisies par le fabricant : ce sont les réglages d'usine. Si l'on s'est trompé dans les réglages, on peut souvent revenir à ces valeurs : c'est la réinitialisation.",
              ],
              box: { label: "Définition", text: "Un paramètre est un réglage modifiable d'un objet. Il a une valeur (avec une unité) et une plage de réglage, du minimum au maximum." },
            },
            {
              heading: "Comment paramétrer un objet",
              paragraphs: [
                "On règle un objet de plusieurs manières : avec des boutons ou une molette, avec un menu sur un écran, ou de plus en plus souvent avec une application sur un smartphone, reliée à l'objet sans fil (par Bluetooth ou par Wi-Fi). Un thermostat connecté ou un robot aspirateur se paramètrent ainsi.",
                "Avant de modifier un paramètre, il est utile de noter sa valeur de départ : on pourra revenir en arrière en cas d'erreur. La notice indique en général la liste des paramètres, leur rôle et leur plage de réglage.",
              ],
            },
            {
              heading: "Tester le fonctionnement",
              paragraphs: [
                "Tester un objet, c'est vérifier qu'il fait bien ce que l'on attend de lui. Pour que le test soit sérieux, on écrit un protocole de test : ce que l'on teste, les conditions du test (les réglages choisis, l'endroit, le matériel de mesure), le résultat attendu, puis le résultat observé.",
                "Règle importante : on ne change qu'un seul paramètre à la fois. Si l'on modifie en même temps la durée et la sensibilité d'une lampe, et que le résultat change, on ne peut pas savoir lequel des deux réglages en est la cause.",
                "Pour être sûr d'un résultat, on répète la mesure plusieurs fois et on calcule la moyenne. Les mesures se font avec un instrument adapté : un chronomètre pour une durée, un thermomètre pour une température, un mètre pour une distance.",
              ],
              box: { label: "Règle", text: "Un bon test : un seul paramètre modifié à la fois, des conditions notées, des mesures répétées, puis la comparaison entre le résultat attendu et le résultat observé." },
            },
            {
              heading: "Conclure",
              paragraphs: [
                "On compare enfin le résultat observé au résultat attendu. S'ils sont identiques, ou très proches, le fonctionnement est conforme. S'ils sont très différents, il est non conforme : on vérifie alors les réglages, on recommence le test, puis on consulte la notice.",
                "Une mesure n'est jamais parfaite : on accepte souvent un petit écart, appelé tolérance. Par exemple, pour un thermostat réglé à 19 °C, on peut accepter une température comprise entre 18 °C et 20 °C (19 °C plus ou moins 1 °C).",
              ],
              box: { label: "Repère", text: "Résultat observé proche du résultat attendu (dans la tolérance) : conforme. Sinon : non conforme, et on cherche la cause." },
            },
          ],
          keyPoints: [
            "Un paramètre est un réglage modifiable, avec une valeur, une unité et une plage de réglage.",
            "Les réglages d'usine sont les valeurs par défaut ; on peut y revenir en réinitialisant l'objet.",
            "Un protocole de test précise ce que l'on teste, les conditions, le résultat attendu et le résultat observé.",
            "On ne change qu'un seul paramètre à la fois.",
            "On répète les mesures et on calcule une moyenne.",
            "Observé proche de l'attendu, dans la tolérance : fonctionnement conforme.",
          ],
          example: {
            statement: "Une lampe de jardin à détecteur de présence a deux paramètres : la durée d'allumage (de 10 s à 5 min) et le seuil de luminosité (elle ne s'allume que s'il fait assez sombre). On règle la durée sur 1 min. Décrire un test pour vérifier ce réglage.",
            solution: [
              "Ce que l'on teste : la durée d'allumage de la lampe après un passage.",
              "Conditions : durée réglée sur 1 min, seuil de luminosité inchangé, test réalisé le soir, chronomètre en main.",
              "Résultat attendu : la lampe reste allumée 1 min, soit 60 s, après le passage.",
              "On passe devant le détecteur, puis on s'éloigne et on chronomètre jusqu'à l'extinction ; on recommence trois fois.",
              "On calcule la moyenne des trois durées et on la compare à 60 s.",
              "Réponse : si la moyenne est très proche de 60 s, le réglage est conforme ; sinon, on vérifie le paramètre et on recommence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les éléments suivants d'un four électrique, lesquels sont des paramètres que l'utilisateur peut régler ? a) la température de cuisson ; b) la couleur de la porte ; c) la durée de cuisson ; d) la masse du four ; e) le mode de cuisson (chaleur tournante, gril) ; f) la matière de la grille.",
              hint: "Un paramètre se modifie pendant l'utilisation, avec un bouton ou un menu.",
              solution: [
                "a) La température de cuisson se règle : c'est un paramètre.",
                "b) La couleur de la porte ne se règle pas : ce n'est pas un paramètre.",
                "c) La durée de cuisson se règle : c'est un paramètre.",
                "d) La masse du four est fixe : ce n'est pas un paramètre.",
                "e) Le mode de cuisson se choisit : c'est un paramètre.",
                "f) La matière de la grille est fixe : ce n'est pas un paramètre.",
                "Résultat : les paramètres sont a, c et e.",
              ],
            },
            {
              level: 2,
              statement: "Un thermostat est réglé sur 19 °C. La notice indique une tolérance de 1 °C (la température doit rester entre 18 °C et 20 °C). On relève la température de la pièce toutes les 30 minutes (données fictives) : 18,6 °C ; 19,2 °C ; 19,4 °C ; 18,8 °C. a) Calculer la température moyenne. b) Chaque mesure respecte-t-elle la tolérance ? c) Conclure sur le fonctionnement du thermostat.",
              hint: "Additionnez les quatre températures et divisez par 4, puis comparez chaque mesure à l'intervalle de 18 °C à 20 °C.",
              solution: [
                "a) Somme : 18,6 + 19,2 + 19,4 + 18,8 = 76 °C.",
                "Moyenne : 76 ÷ 4 = 19 °C.",
                "b) 18,6 °C, 19,2 °C, 19,4 °C et 18,8 °C sont toutes comprises entre 18 °C et 20 °C : chaque mesure respecte la tolérance.",
                "c) La moyenne est égale à la consigne et aucune mesure ne sort de la tolérance.",
                "Résultat : moyenne de 19 °C, fonctionnement conforme.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux élèves testent une lampe à détecteur de présence (données fictives). Test 1 : durée réglée sur 30 s ; trois mesures : 31 s, 29 s, 30 s. Test 2 : Hugo règle la durée sur 2 min ET augmente la sensibilité du détecteur ; trois mesures : 118 s, 121 s, 124 s. La notice indique une tolérance de 5 % sur la durée. a) Calculer la durée moyenne de chaque test. b) Calculer la tolérance pour le test 2 et dire si le résultat est conforme. c) Quelle erreur de méthode Hugo a-t-il faite dans le test 2 ? d) Rédiger un test 3 correct pour vérifier l'effet de la sensibilité seule.",
              hint: "2 min = 120 s, et 5 % de 120 s se calcule avec 120 × 5 ÷ 100. Pour c), relisez la règle du cours sur le nombre de paramètres modifiés.",
              solution: [
                "a) Test 1 : (31 + 29 + 30) ÷ 3 = 90 ÷ 3 = 30 s. Test 2 : (118 + 121 + 124) ÷ 3 = 363 ÷ 3 = 121 s.",
                "b) Résultat attendu : 2 min = 120 s. Tolérance : 120 × 5 ÷ 100 = 6 s, donc on accepte de 114 s à 126 s. La moyenne de 121 s est dans cet intervalle : le résultat est conforme.",
                "c) Hugo a modifié deux paramètres à la fois (la durée et la sensibilité) : si le comportement change, on ne peut pas savoir quel réglage en est la cause.",
                "d) Test 3 : remettre la durée sur 2 min et la laisser fixe ; ne modifier que la sensibilité ; noter à quelle distance la lampe se déclenche avant et après le réglage, en répétant chaque essai trois fois avec un mètre.",
                "Résultat : 30 s et 121 s de moyenne, test 2 conforme (de 114 s à 126 s), mais un seul paramètre doit être changé à la fois.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Paramétrer et tester.",
            statements: [
              { text: "Les réglages d'usine sont les valeurs choisies par le fabricant avant la vente.", true: true, why: "Ce sont les valeurs par défaut, que l'on retrouve après une réinitialisation." },
              { text: "Pour gagner du temps, on peut modifier plusieurs paramètres à la fois pendant un test.", true: false, why: "Si plusieurs paramètres changent, on ne sait pas lequel est responsable du résultat." },
              { text: "Une seule mesure suffit toujours pour conclure.", true: false, why: "On répète les mesures et on calcule une moyenne pour un résultat plus fiable." },
              { text: "La plage de réglage indique la valeur minimale et la valeur maximale d'un paramètre.", true: true, why: "Par exemple, une durée réglable de 10 s à 5 min." },
              { text: "La couleur d'un objet est un paramètre que l'on règle avec un menu.", true: false, why: "La couleur de la coque est fixée à la fabrication ; elle ne se règle pas pendant l'utilisation." },
              { text: "Un résultat un peu différent de l'attendu, mais dans la tolérance, est conforme.", true: true, why: "La tolérance est justement l'écart accepté entre l'attendu et l'observé." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces éléments est un paramètre d'une enceinte ?",
              options: ["Sa masse", "Son volume sonore", "La marque gravée sur sa coque", "Sa forme"],
              answer: 1,
              why: "Le volume se règle pendant l'utilisation : c'est un paramètre. Les autres éléments sont fixes.",
            },
            {
              q: "Revenir aux réglages d'usine s'appelle :",
              options: ["une mise en service", "un protocole de test complet", "une tolérance", "une réinitialisation"],
              answer: 3,
              why: "Réinitialiser un objet, c'est remettre ses paramètres aux valeurs par défaut du fabricant.",
            },
            {
              q: "Trois mesures donnent 10 s, 12 s et 14 s. Quelle est la moyenne ?",
              options: ["12 s", "36 s", "14 s", "10 s"],
              answer: 0,
              why: "10 + 12 + 14 = 36 s, puis 36 ÷ 3 = 12 s.",
            },
            {
              q: "Pourquoi ne change-t-on qu'un seul paramètre à la fois pendant un test ?",
              options: ["Pour économiser les piles de l'objet pendant le test", "Parce que la notice l'interdit", "Pour savoir quel réglage cause le résultat", "Pour aller plus vite"],
              answer: 2,
              why: "Si un seul paramètre change, on sait que c'est lui qui explique la différence observée.",
            },
            {
              q: "Un minuteur réglé sur 60 s, avec une tolérance de 2 s, sonne au bout de 61 s. Le fonctionnement est :",
              options: ["non conforme", "conforme", "impossible à juger", "dangereux"],
              answer: 1,
              why: "On accepte de 58 s à 62 s ; 61 s est dans cet intervalle, donc le fonctionnement est conforme.",
            },
          ],
          trap: "Changer plusieurs réglages en même temps puis conclure sur l'un d'eux : on ne peut alors pas savoir lequel a provoqué le changement observé.",
          method: "Présentez chaque test dans un tableau à quatre colonnes (paramètre et valeur, résultat attendu, mesures, conclusion) : la comparaison entre attendu et observé saute alors aux yeux.",
        },
      ],
    },
    /* ==================================================================== */
    /* LE CYCLE DE VIE DES OBJETS                                             */
    /* ==================================================================== */
    {
      id: 'cycle-de-vie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'etapes-cycle-vie',
          title: "Les étapes du cycle de vie d'un objet",
          minutes: 25,
          objectives: [
            "Décrire les étapes du cycle de vie d'un objet technique.",
            "Identifier les impacts sur l'environnement de chaque étape.",
            "Exploiter un tableau de données pour repérer l'étape qui a le plus d'impact.",
            "Proposer des solutions pour réduire l'impact d'un objet.",
          ],
          course: [
            {
              heading: "La vie d'un objet, du début à la fin",
              paragraphs: [
                "Un objet ne commence pas sa vie dans le magasin et ne la termine pas dans la poubelle. Avant d'arriver entre vos mains, il a fallu trouver ses matériaux, le fabriquer et le transporter. Après son utilisation, il faut s'en débarrasser. L'ensemble de ces étapes s'appelle le cycle de vie de l'objet.",
                "On le résume en cinq étapes : 1) l'extraction des matières premières ; 2) la fabrication ; 3) le transport et la distribution ; 4) l'utilisation ; 5) la fin de vie. On dit souvent que l'on étudie l'objet « du berceau à la tombe ».",
              ],
              box: { label: "Définition", text: "Le cycle de vie d'un objet regroupe toutes les étapes de son existence : extraction des matières premières, fabrication, transport et distribution, utilisation, fin de vie." },
            },
            {
              heading: "Les cinq étapes en détail",
              paragraphs: [
                "Extraction : on prélève dans la nature les matières premières, c'est-à-dire les matières brutes : minerais de fer ou de bauxite (pour l'aluminium) dans des mines, pétrole pour les plastiques, bois dans les forêts, sable pour le verre. Fabrication : les matières sont transformées en matériaux (acier, aluminium, plastique, verre), puis en pièces que l'on assemble dans des usines.",
                "Transport et distribution : l'objet et ses pièces voyagent en camion, en bateau, en train ou en avion jusqu'aux entrepôts, puis aux magasins ou chez l'acheteur. Utilisation : l'objet sert, parfois pendant des années ; il peut consommer de l'énergie (électricité, carburant), de l'eau, des piles ou des consommables (encre, sacs d'aspirateur).",
                "Fin de vie : quand l'objet ne sert plus, plusieurs chemins sont possibles. Il peut être réemployé (donné, revendu), réparé, recyclé (ses matériaux servent à fabriquer d'autres objets), brûlé pour produire de l'énergie, ou, en dernier recours, enfoui dans une décharge.",
              ],
            },
            {
              heading: "Les impacts sur l'environnement",
              paragraphs: [
                "Chaque étape a des effets sur l'environnement, que l'on appelle des impacts : consommation d'énergie et d'eau, émissions de gaz à effet de serre (comme le dioxyde de carbone, CO₂), pollution de l'air, de l'eau et des sols, production de déchets, destruction de milieux naturels.",
                "L'étape la plus lourde n'est pas la même pour tous les objets. Pour la plupart des appareils électroniques, comme le smartphone, c'est la fabrication qui pèse le plus : elle demande beaucoup de matériaux et d'énergie. Pour une voiture à essence ou un réfrigérateur, c'est souvent l'utilisation, car ils consomment de l'énergie pendant de longues années.",
                "L'étude de tous les impacts d'un objet tout au long de son cycle de vie s'appelle l'analyse du cycle de vie (ACV). Elle aide les fabricants à repérer l'étape sur laquelle agir en priorité.",
              ],
              box: { label: "À retenir", text: "Chaque étape du cycle de vie consomme des ressources et pollue. L'analyse du cycle de vie (ACV) permet de repérer l'étape qui a le plus d'impact." },
            },
            {
              heading: "Réduire l'impact d'un objet",
              paragraphs: [
                "Les fabricants peuvent concevoir des objets qui polluent moins : c'est l'écoconception. Ils utilisent moins de matière, des matériaux recyclés ou faciles à recycler, des pièces démontables, et réduisent la consommation d'énergie de l'objet.",
                "Les utilisateurs ont aussi un rôle : garder un objet plus longtemps, l'entretenir, le faire réparer, l'acheter d'occasion, puis le déposer au bon endroit en fin de vie. Plus un objet dure longtemps, plus l'impact de sa fabrication est réparti sur de nombreuses années d'utilisation.",
              ],
              box: { label: "Repère", text: "Écoconception : concevoir un objet en réduisant ses impacts sur l'environnement à toutes les étapes de son cycle de vie." },
            },
          ],
          keyPoints: [
            "Les cinq étapes du cycle de vie : extraction, fabrication, transport et distribution, utilisation, fin de vie.",
            "Matière première : matière brute prélevée dans la nature (minerai, pétrole, bois, sable).",
            "Fin de vie : réemploi, réparation, recyclage, valorisation en énergie, ou enfouissement en dernier recours.",
            "Chaque étape a des impacts : énergie, eau, gaz à effet de serre, pollution, déchets.",
            "Pour un smartphone, la fabrication pèse le plus ; pour un réfrigérateur, souvent l'utilisation.",
            "L'écoconception réduit les impacts dès la conception de l'objet.",
          ],
          example: {
            statement: "Décrire le cycle de vie d'une canette de boisson en aluminium, en donnant pour chaque étape un exemple concret.",
            solution: [
              "Extraction : on extrait de la bauxite, un minerai, dans une mine.",
              "Fabrication : la bauxite est transformée en aluminium, laminé en feuilles, puis embouti pour former la canette, qui est ensuite remplie.",
              "Transport et distribution : les canettes partent en camion vers les entrepôts puis les supermarchés.",
              "Utilisation : on boit la boisson ; cette étape est très courte et consomme peu.",
              "Fin de vie : la canette est triée dans le bac des emballages, puis recyclée pour refaire de l'aluminium.",
              "Réponse : bauxite extraite, aluminium fabriqué et mis en forme, canette transportée, bue, puis recyclée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À quelle étape du cycle de vie correspond chaque action ? a) Un bateau porte-conteneurs apporte des téléphones en Europe. b) Des ouvriers coupent des arbres pour fabriquer des meubles. c) On recharge chaque soir sa trottinette électrique. d) On dépose un vieux grille-pain à la déchetterie. e) Une machine assemble des pièces de vélo à l'usine.",
              hint: "Rappelez-vous l'ordre : extraction, fabrication, transport et distribution, utilisation, fin de vie.",
              solution: [
                "a) Le bateau transporte les téléphones : transport et distribution.",
                "b) Couper des arbres, c'est prélever une matière première : extraction.",
                "c) Recharger la trottinette, c'est consommer de l'énergie pendant l'usage : utilisation.",
                "d) Déposer le grille-pain à la déchetterie : fin de vie.",
                "e) Assembler des pièces à l'usine : fabrication.",
                "Résultat : a) transport ; b) extraction ; c) utilisation ; d) fin de vie ; e) fabrication.",
              ],
            },
            {
              level: 2,
              statement: "Voici les émissions de CO₂ d'une gourde en aluminium pour chaque étape de son cycle de vie (données fictives) : extraction 1,0 kg ; fabrication 0,8 kg ; transport 0,4 kg ; utilisation 0,2 kg ; fin de vie 0,1 kg. a) Calculer les émissions totales. b) Quelle étape émet le plus ? c) Calculer la part de cette étape en pourcentage du total.",
              hint: "Pour un pourcentage, divisez la valeur de l'étape par le total, puis multipliez par 100.",
              solution: [
                "a) Total : 1,0 + 0,8 + 0,4 + 0,2 + 0,1 = 2,5 kg de CO₂.",
                "b) L'étape qui émet le plus est l'extraction, avec 1,0 kg.",
                "c) Part de l'extraction : 1,0 ÷ 2,5 × 100 = 40 %.",
                "Résultat : 2,5 kg de CO₂ au total, dont 40 % pour l'extraction.",
              ],
            },
            {
              level: 3,
              statement: "Défi. On compare (données fictives) la gourde de l'exercice précédent, qui émet 2,5 kg de CO₂ sur tout son cycle de vie, avec des bouteilles en plastique jetables qui émettent chacune 0,1 kg de CO₂. a) À partir de combien de bouteilles évitées la gourde devient-elle plus avantageuse ? b) Sam remplit sa gourde un jour sur deux au lieu d'acheter une bouteille, sur une année scolaire de 36 semaines à 5 jours de cours. Combien de bouteilles évite-t-il ? c) Quelle quantité de CO₂ économise-t-il sur l'année ? d) Expliquer pourquoi la gourde devient d'autant plus intéressante qu'on la garde longtemps.",
              hint: "Pour a), divisez l'impact de la gourde par l'impact d'une bouteille. Pour b), calculez d'abord le nombre de jours de cours.",
              solution: [
                "a) 2,5 ÷ 0,1 = 25. À partir de 25 bouteilles évitées, les émissions de la gourde sont compensées ; au-delà, elle devient plus avantageuse.",
                "b) Jours de cours : 36 × 5 = 180 jours. Un jour sur deux : 180 ÷ 2 = 90 bouteilles évitées.",
                "c) Bouteilles évitées : 90 × 0,1 = 9 kg de CO₂. On retire l'impact de la gourde : 9 - 2,5 = 6,5 kg de CO₂ économisés.",
                "d) L'impact de la gourde est surtout dû à son extraction et à sa fabrication, qui n'ont lieu qu'une fois. Plus on l'utilise longtemps, plus on évite de bouteilles, alors que l'impact de départ ne change presque pas.",
                "Résultat : la gourde est avantageuse au-delà de 25 bouteilles ; Sam évite 90 bouteilles et économise 6,5 kg de CO₂ sur l'année.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du cycle de vie d'un objet.",
            items: [
              "Extraction des matières premières",
              "Transformation en matériaux",
              "Fabrication et assemblage des pièces",
              "Transport et distribution",
              "Utilisation",
              "Fin de vie : réemploi, recyclage ou élimination",
            ],
          },
          quiz: [
            {
              q: "Quelle est la première étape du cycle de vie d'un objet ?",
              options: ["La fabrication dans une usine", "L'extraction des matières premières", "Le transport vers les magasins du monde entier", "L'utilisation"],
              answer: 1,
              why: "Avant de fabriquer, il faut prélever dans la nature les matières premières.",
            },
            {
              q: "Le pétrole est la matière première principale :",
              options: ["du verre", "de l'acier", "des plastiques", "du papier et du carton"],
              answer: 2,
              why: "La plupart des plastiques sont fabriqués à partir du pétrole. Le verre vient du sable, l'acier du minerai de fer, le papier du bois.",
            },
            {
              q: "Pour un smartphone, quelle étape a en général le plus d'impact ?",
              options: ["La fabrication", "Le transport jusqu'au magasin", "L'utilisation", "La fin de vie"],
              answer: 0,
              why: "La fabrication d'un smartphone demande beaucoup de matériaux et d'énergie, bien plus que sa recharge.",
            },
            {
              q: "Que veut dire ACV ?",
              options: ["Atelier de conception verte", "Appareil à consommation variable", "Accord de commerce et de vente", "Analyse du cycle de vie"],
              answer: 3,
              why: "L'analyse du cycle de vie étudie tous les impacts d'un objet, de l'extraction à la fin de vie.",
            },
            {
              q: "Laquelle de ces solutions réduit l'impact d'un objet ?",
              options: ["Le changer chaque année", "Le garder et le faire réparer", "Le jeter avec les ordures", "Acheter le modèle le plus lourd"],
              answer: 1,
              why: "Garder un objet plus longtemps répartit l'impact de sa fabrication sur plus d'années et évite d'en fabriquer un nouveau.",
            },
          ],
          trap: "Croire que seule l'utilisation pollue : pour beaucoup d'objets, surtout électroniques, l'extraction des matières premières et la fabrication ont plus d'impact que l'usage.",
          method: "Pour retenir les étapes, suivez le trajet de l'objet comme une histoire : d'où viennent ses matières, où est-il fabriqué, comment arrive-t-il chez vous, à quoi sert-il, que devient-il ensuite ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'materiaux-recyclage',
          title: 'Les familles de matériaux et le recyclage',
          minutes: 30,
          objectives: [
            "Classer des matériaux dans leur famille : métaux, matériaux organiques, céramiques, composites.",
            "Identifier un matériau à l'aide de quelques propriétés simples (aimant, conduction électrique).",
            "Décrire comment les déchets sont triés et recyclés.",
            "Associer un déchet à la bonne filière de tri.",
          ],
          course: [
            {
              heading: "Matière première et matériau",
              paragraphs: [
                "Une matière première est prélevée dans la nature : minerai de fer, bauxite, pétrole, bois, sable, coton. Un matériau est une matière, souvent transformée, que l'on utilise pour fabriquer un objet : l'acier vient du minerai de fer, l'aluminium de la bauxite, le plastique du pétrole, le verre du sable.",
                "On choisit un matériau selon ses propriétés : est-il léger ou lourd ? Solide ? Conduit-il l'électricité ? Résiste-t-il à l'eau, à la chaleur ? Est-il facile à recycler ? Combien coûte-t-il ? Une casserole en acier inoxydable résiste à la chaleur, une coque de téléphone en plastique est légère et souple.",
              ],
            },
            {
              heading: "Les familles de matériaux",
              paragraphs: [
                "Les métaux (ou matériaux métalliques) : acier (fer et un peu de carbone), aluminium, cuivre, zinc. Ils conduisent bien l'électricité et la chaleur. Parmi les métaux courants, le fer et l'acier sont attirés par un aimant ; l'aluminium et le cuivre ne le sont pas.",
                "Les matériaux organiques viennent du monde vivant ou du pétrole. Les uns sont naturels : bois, papier, carton, coton, laine, cuir. Les autres sont synthétiques : les plastiques, fabriqués surtout à partir du pétrole. Ils conduisent mal l'électricité et la chaleur : ce sont des isolants.",
                "Les céramiques sont fabriquées à partir de minéraux (sable, argile) chauffés à très haute température, cuits ou fondus : verre, porcelaine, faïence, terre cuite (briques, tuiles). Elles sont dures, résistent à la chaleur, mais sont fragiles aux chocs. Enfin, les matériaux composites associent plusieurs matériaux pour cumuler leurs qualités : béton armé (béton et acier), plastique renforcé de fibres de verre ou de carbone (cadres de vélo, coques de bateau).",
              ],
              box: { label: "À retenir", text: "Quatre familles : métaux (acier, aluminium, cuivre), organiques (bois, papier, coton, plastiques), céramiques (verre, porcelaine, terre cuite), composites (béton armé, fibre de carbone)." },
            },
            {
              heading: "Trier pour recycler",
              paragraphs: [
                "Recycler, c'est récupérer les matériaux d'un objet usagé pour fabriquer de nouveaux objets. Cela économise des matières premières, souvent de l'énergie, et réduit les déchets. Pour recycler, il faut d'abord trier, car chaque famille de matériau suit sa propre filière.",
                "À la maison, on sépare les déchets. Depuis 2023, partout en France, tous les emballages (en papier, en carton, en métal et en plastique, y compris les pots et les films) peuvent aller dans le bac de tri, souvent jaune. Le verre va dans un conteneur à part. Les piles, les ampoules et les appareils électriques se déposent dans des points de collecte (magasins, déchetterie).",
                "Au centre de tri, des machines et des personnes séparent les matériaux. Un gros aimant attire l'acier des boîtes de conserve ; d'autres machines séparent l'aluminium, les papiers, les cartons et les différents plastiques. Chaque matériau part ensuite vers une usine de recyclage.",
              ],
              box: { label: "Définition", text: "Recycler : transformer les matériaux d'un déchet en matière pour fabriquer de nouveaux objets. Exemple : des bouteilles en plastique recyclées en fibres pour des vêtements." },
            },
            {
              heading: "Tous les matériaux ne se recyclent pas de la même façon",
              paragraphs: [
                "L'acier, l'aluminium et le verre peuvent être refondus et recyclés de très nombreuses fois sans perdre leurs qualités. Recycler l'aluminium demande environ 95 % d'énergie en moins que de le produire à partir de la bauxite.",
                "Le papier et le carton se recyclent un nombre limité de fois, car leurs fibres raccourcissent à chaque passage. Il existe de nombreuses sortes de plastiques, repérées par un numéro dans un petit triangle de flèches (1 pour le PET des bouteilles, 2 pour le PEHD des flacons, etc.) : certains se recyclent bien, d'autres mal.",
                "Les objets qui mélangent plusieurs matériaux collés entre eux, comme une brique de lait (carton, plastique et aluminium), sont plus difficiles à recycler : il faut d'abord séparer les couches. Les matériaux qui ne peuvent pas être recyclés sont souvent brûlés pour produire de l'énergie ou enfouis.",
              ],
            },
          ],
          keyPoints: [
            "Une matière première vient de la nature ; un matériau sert à fabriquer un objet.",
            "Métaux : acier, aluminium, cuivre ; ils conduisent l'électricité ; seuls le fer et l'acier sont attirés par l'aimant.",
            "Organiques : bois, papier, coton, cuir et plastiques ; ce sont des isolants.",
            "Céramiques : verre, porcelaine, terre cuite. Composites : béton armé, fibre de carbone.",
            "Pour recycler, il faut d'abord trier : emballages dans le bac de tri, verre à part, appareils et piles en point de collecte.",
            "Acier, aluminium et verre se recyclent de très nombreuses fois ; le papier un nombre limité de fois.",
          ],
          example: {
            statement: "Un objet métallique gris n'est pas attiré par un aimant, conduit l'électricité et est très léger. De quel matériau s'agit-il probablement, et dans quelle famille le classer ?",
            solution: [
              "L'objet conduit l'électricité et paraît métallique : c'est sans doute un métal.",
              "Il n'est pas attiré par l'aimant : ce n'est donc ni du fer ni de l'acier.",
              "Il est gris et très léger : ce n'est pas du cuivre (de couleur orangée), mais très probablement de l'aluminium.",
              "Réponse : de l'aluminium, de la famille des métaux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chaque matériau dans sa famille (métal, organique, céramique ou composite) : a) le verre d'une bouteille ; b) le bois d'une table ; c) l'aluminium d'une canette ; d) le plastique d'un seau ; e) la porcelaine d'une tasse ; f) le cuivre d'un fil électrique ; g) la fibre de carbone d'un cadre de vélo ; h) le coton d'un tee-shirt.",
              hint: "Les métaux conduisent l'électricité, les organiques viennent du vivant ou du pétrole, les céramiques sont cuites à partir de minéraux, les composites mélangent plusieurs matériaux.",
              solution: [
                "Métaux : c) aluminium, f) cuivre.",
                "Organiques : b) bois, d) plastique, h) coton.",
                "Céramiques : a) verre, e) porcelaine.",
                "Composite : g) fibre de carbone (fibres de carbone noyées dans une résine plastique).",
                "Résultat : 2 métaux, 3 organiques, 2 céramiques, 1 composite.",
              ],
            },
            {
              level: 2,
              statement: "On teste quatre échantillons inconnus. A : attiré par l'aimant, conduit l'électricité. B : pas attiré par l'aimant, conduit l'électricité, couleur orangée. C : pas attiré par l'aimant, ne conduit pas l'électricité, transparent et souple. D : pas attiré par l'aimant, conduit l'électricité, gris et léger. Identifier chaque échantillon parmi : acier, aluminium, cuivre, plastique.",
              hint: "Commencez par le test de l'aimant : un seul matériau de la liste est attiré.",
              solution: [
                "A est attiré par l'aimant : c'est l'acier, le seul matériau de la liste attiré.",
                "C ne conduit pas l'électricité : c'est un isolant, donc le plastique.",
                "B et D sont des métaux non attirés par l'aimant : l'aluminium ou le cuivre.",
                "B est orangé : c'est le cuivre. D est gris et léger : c'est l'aluminium.",
                "Résultat : A = acier, B = cuivre, C = plastique, D = aluminium.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un centre de tri reçoit un camion de 600 kg d'emballages mélangés (données fictives) : 30 % de papiers et cartons, 25 % de plastiques, 15 % de boîtes en acier, 10 % de canettes en aluminium, et le reste en déchets non recyclables. a) Calculer la masse de chaque catégorie. b) Quelle machine permet de séparer les boîtes en acier, et pourquoi ne retient-elle pas les canettes en aluminium ? c) Quelle part du camion pourra être recyclée ? d) Un habitant a mis dans son bac de tri une assiette en porcelaine cassée. Expliquer pourquoi c'est une erreur.",
              hint: "Pour calculer 30 % de 600 kg, faites 600 × 30 ÷ 100. Le reste s'obtient en soustrayant les autres pourcentages de 100 %.",
              solution: [
                "a) Papiers et cartons : 600 × 30 ÷ 100 = 180 kg. Plastiques : 600 × 25 ÷ 100 = 150 kg. Acier : 600 × 15 ÷ 100 = 90 kg. Aluminium : 600 × 10 ÷ 100 = 60 kg.",
                "Non recyclables : 100 - 30 - 25 - 15 - 10 = 20 %, soit 600 × 20 ÷ 100 = 120 kg. Vérification : 180 + 150 + 90 + 60 + 120 = 600 kg.",
                "b) Un aimant (séparateur magnétique) attire l'acier, qui contient du fer. L'aluminium n'est pas attiré par l'aimant : il faut une autre machine pour le séparer.",
                "c) Part recyclable : 100 - 20 = 80 %, soit 180 + 150 + 90 + 60 = 480 kg.",
                "d) La porcelaine est une céramique : ce n'est pas un emballage et elle ne se recycle pas avec le verre des bouteilles ni avec les emballages. Elle se dépose à la déchetterie ou avec les ordures ménagères selon les consignes de la commune.",
                "Résultat : 180 kg, 150 kg, 90 kg, 60 kg et 120 kg ; 480 kg recyclables (80 %) ; la porcelaine n'a pas sa place dans le bac de tri.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque matériau à sa famille ou à sa propriété.",
            pairs: [
              { left: "Acier", right: "Métal attiré par un aimant" },
              { left: "Aluminium", right: "Métal léger, non attiré par un aimant" },
              { left: "Bois", right: "Matériau organique naturel" },
              { left: "Plastique", right: "Matériau organique issu surtout du pétrole" },
              { left: "Porcelaine", right: "Céramique cuite à haute température" },
              { left: "Béton armé", right: "Composite associant béton et acier" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces matériaux est attiré par un aimant ?",
              options: ["L'aluminium", "Le cuivre", "Le verre", "L'acier"],
              answer: 3,
              why: "L'acier contient du fer, qui est attiré par un aimant. L'aluminium et le cuivre sont des métaux non attirés.",
            },
            {
              q: "Le verre appartient à la famille :",
              options: ["des céramiques", "des métaux", "des matériaux organiques", "des composites"],
              answer: 0,
              why: "Le verre est fabriqué à partir de sable fondu à très haute température : on le range avec les céramiques.",
            },
            {
              q: "Pourquoi le papier ne se recycle-t-il qu'un nombre limité de fois ?",
              options: ["Parce qu'il est attiré par l'aimant", "Parce que ses fibres raccourcissent", "Parce qu'il conduit l'électricité", "Parce qu'il contient du pétrole"],
              answer: 1,
              why: "À chaque recyclage, les fibres de cellulose raccourcissent, jusqu'à ne plus pouvoir former de papier solide.",
            },
            {
              q: "Où faut-il déposer une pile usagée ?",
              options: ["Dans le bac de tri des emballages", "Dans le conteneur à verre", "Dans un point de collecte", "Avec les ordures ménagères"],
              answer: 2,
              why: "Les piles contiennent des substances qui polluent : elles se déposent dans des points de collecte, en magasin ou à la déchetterie.",
            },
            {
              q: "Les plastiques sont des matériaux :",
              options: ["métalliques", "céramiques", "organiques", "naturels"],
              answer: 2,
              why: "Les plastiques sont des matériaux organiques synthétiques, fabriqués surtout à partir du pétrole.",
            },
          ],
          trap: "Croire que tous les métaux sont attirés par un aimant : parmi les métaux courants, seuls le fer et l'acier le sont ; l'aluminium et le cuivre ne le sont pas.",
          method: "Pour identifier un matériau, procédez par élimination avec des tests simples, dans l'ordre : l'aimant, puis la conduction électrique, puis la couleur et la masse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'reparabilite',
          title: 'Réparer plutôt que jeter : la réparabilité',
          minutes: 25,
          objectives: [
            "Expliquer pourquoi réparer un objet réduit son impact sur l'environnement.",
            "Identifier ce qui rend un objet facile ou difficile à réparer.",
            "Lire un indice de réparabilité pour comparer deux objets.",
            "Distinguer les différentes formes d'obsolescence.",
          ],
          course: [
            {
              heading: "Pourquoi réparer ?",
              paragraphs: [
                "Quand un objet tombe en panne, on peut le jeter et en racheter un neuf, ou le faire réparer. Réparer évite de fabriquer un nouvel objet : on économise des matières premières, de l'énergie et on produit moins de déchets. Comme la fabrication est souvent l'étape qui a le plus d'impact, prolonger la vie d'un objet est l'un des meilleurs gestes pour l'environnement.",
                "Réparer coûte aussi souvent moins cher que racheter. On peut faire réparer chez un réparateur professionnel, réparer soi-même avec un tutoriel, ou se faire aider gratuitement dans un repair café, un lieu où des bénévoles aident les habitants à réparer leurs objets.",
              ],
            },
            {
              heading: "Qu'est-ce qui rend un objet réparable ?",
              paragraphs: [
                "Un objet est réparable si l'on peut l'ouvrir, trouver la pièce défectueuse et la remplacer. Cela dépend de plusieurs choses : la façon dont les pièces sont assemblées, l'existence d'une documentation (notice de réparation, schémas), la disponibilité des pièces détachées et leur prix.",
                "Les assemblages démontables, comme les vis ou les clips, permettent d'ouvrir l'objet et de le refermer. Les assemblages non démontables, comme la colle, les rivets ou la soudure, rendent l'ouverture difficile, voire impossible sans casser. Une batterie collée au fond d'un téléphone est bien plus difficile à changer qu'une batterie maintenue par deux vis.",
              ],
              box: { label: "À retenir", text: "Un objet réparable : assemblé avec des vis ou des clips plutôt que de la colle, accompagné d'une documentation, avec des pièces détachées disponibles et à prix raisonnable." },
            },
            {
              heading: "L'indice de réparabilité",
              paragraphs: [
                "Depuis 2021, en France, certains appareils (smartphones, ordinateurs portables, téléviseurs, lave-linge, tondeuses à gazon...) doivent afficher en magasin un indice de réparabilité : une note sur 10, accompagnée d'un logo coloré, du rouge (difficile à réparer) au vert foncé (facile à réparer).",
                "Cette note est calculée à partir de cinq critères : la documentation fournie, la facilité de démontage (outils nécessaires, type de fixations), la disponibilité des pièces détachées, le prix de ces pièces, et un critère propre à chaque type d'appareil (par exemple les mises à jour du logiciel pour un smartphone).",
                "Depuis 2025, pour certains appareils comme les téléviseurs et les lave-linge, cet indice est remplacé par un indice de durabilité, qui tient compte en plus de la fiabilité de l'appareil, c'est-à-dire de sa capacité à fonctionner longtemps sans tomber en panne.",
              ],
              box: { label: "Repère", text: "Indice de réparabilité : une note sur 10, obligatoire en France depuis 2021 pour certains appareils. Plus la note est élevée, plus l'objet est facile à réparer." },
            },
            {
              heading: "L'obsolescence",
              paragraphs: [
                "Un objet devient obsolète quand on ne l'utilise plus, alors qu'il pourrait encore servir ou être réparé. L'obsolescence peut être technique (une pièce s'use ou casse et n'est pas remplaçable), logicielle (l'appareil n'a plus de mises à jour et certaines applications ne fonctionnent plus), ou liée à la mode (on veut le dernier modèle alors que l'ancien marche encore).",
                "L'obsolescence programmée consiste, pour un fabricant, à réduire volontairement la durée de vie d'un objet pour pousser à en racheter un. En France, c'est un délit puni par la loi depuis 2015. Par ailleurs, la loi oblige le vendeur à réparer ou remplacer gratuitement un objet neuf qui présente un défaut pendant au moins deux ans : c'est la garantie légale de conformité.",
              ],
              box: { label: "Définition", text: "Obsolescence programmée : fait de réduire volontairement la durée de vie d'un objet pour en augmenter le remplacement. C'est un délit en France depuis 2015." },
            },
          ],
          keyPoints: [
            "Réparer évite de fabriquer un objet neuf : moins de matières premières, d'énergie et de déchets.",
            "Les vis et les clips sont démontables ; la colle, les rivets et la soudure ne le sont pas.",
            "Un objet réparable a une documentation, des pièces détachées disponibles et à prix raisonnable.",
            "L'indice de réparabilité est une note sur 10, affichée en France depuis 2021 sur certains appareils.",
            "Obsolescence technique, logicielle ou liée à la mode ; l'obsolescence programmée est un délit depuis 2015.",
            "Garantie légale de conformité : au moins deux ans pour un objet neuf.",
          ],
          example: {
            statement: "Deux smartphones ont les indices de réparabilité suivants (données fictives) : modèle A, 8,2 sur 10 ; modèle B, 4,5 sur 10. La batterie du modèle A est vissée, celle du modèle B est collée. Lequel est le plus facile à réparer ? Expliquer le lien avec la batterie.",
            solution: [
              "On compare les deux notes : 8,2 est plus élevé que 4,5.",
              "Le modèle A est donc le plus facile à réparer.",
              "Sa batterie est vissée : on peut la retirer avec un tournevis et la remplacer.",
              "La batterie du modèle B est collée : il faut chauffer et décoller, avec un risque de casse, ce qui pénalise la note de démontage.",
              "Réponse : le modèle A, dont la batterie vissée se remplace facilement, ce que reflète sa meilleure note.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque mode d'assemblage, dire s'il est démontable ou non démontable : a) des vis ; b) de la colle ; c) des clips en plastique ; d) des rivets ; e) une soudure ; f) un écrou et un boulon.",
              hint: "Demandez-vous si l'on peut séparer les pièces puis les remonter, sans rien casser.",
              solution: [
                "a) Les vis se dévissent et se revissent : démontable.",
                "b) La colle ne se défait pas sans abîmer les pièces : non démontable.",
                "c) Les clips se déclipsent et se reclipsent : démontable.",
                "d) Un rivet doit être percé ou cassé pour être retiré : non démontable.",
                "e) Une soudure relie les pièces de façon définitive : non démontable.",
                "f) L'écrou se dévisse du boulon : démontable.",
                "Résultat : démontables = a, c, f ; non démontables = b, d, e.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque situation, nommer la forme d'obsolescence (technique, logicielle ou liée à la mode) : a) une tablette de 8 ans fonctionne, mais une application utile ne s'installe plus car le système n'est plus mis à jour ; b) Noé change son téléphone qui marche parfaitement parce qu'un nouveau modèle vient de sortir ; c) le moteur d'un mixeur ne tourne plus et le fabricant ne vend pas de moteur de remplacement. Pour chacune, proposer une solution pour prolonger la vie de l'objet.",
              hint: "Cherchez la cause de l'abandon : une pièce, un logiciel, ou une envie de nouveauté.",
              solution: [
                "a) Obsolescence logicielle : le système n'est plus mis à jour. Solution : l'utiliser pour d'autres usages (lecture, musique, vidéos) ou la donner à quelqu'un qui en a ces usages.",
                "b) Obsolescence liée à la mode : le téléphone marche encore. Solution : le garder, ou le revendre d'occasion pour qu'il serve à quelqu'un d'autre.",
                "c) Obsolescence technique : une pièce est en panne et introuvable chez le fabricant. Solution : chercher une pièce compatible d'occasion ou demander de l'aide dans un repair café.",
                "Résultat : a) logicielle ; b) liée à la mode ; c) technique.",
              ],
            },
            {
              level: 3,
              statement: "Défi. L'écran de la trottinette électrique de Maëlle est cassé (données fictives). Option 1 : faire remplacer l'écran, pièce 45 € et main-d'œuvre 30 €. Option 2 : racheter une trottinette neuve à 320 €. On estime que la fabrication d'une trottinette neuve émet 150 kg de CO₂ et que celle d'un écran de rechange en émet 5 kg. a) Calculer le coût de la réparation et l'économie réalisée par rapport à l'achat neuf. b) Calculer le CO₂ évité grâce à la réparation. c) La trottinette a un indice de réparabilité de 7,5 sur 10 : est-ce une bonne nouvelle pour Maëlle ? Expliquer. d) Citer deux autres avantages de la réparation.",
              hint: "Additionnez le prix de la pièce et celui de la main-d'œuvre, puis comparez au prix du neuf ; faites de même pour le CO₂.",
              solution: [
                "a) Coût de la réparation : 45 + 30 = 75 €. Économie : 320 - 75 = 245 €.",
                "b) CO₂ évité : 150 - 5 = 145 kg.",
                "c) Oui : une note de 7,5 sur 10 est élevée, ce qui signifie que la trottinette est plutôt facile à démonter, que la documentation existe et que les pièces détachées sont disponibles à un prix raisonnable.",
                "d) Par exemple : moins de déchets produits ; moins de matières premières extraites ; un réparateur local fait travailler une entreprise proche.",
                "Résultat : réparation à 75 €, soit 245 € économisés et 145 kg de CO₂ évités.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Réparer plutôt que jeter.",
            statements: [
              { text: "Une batterie collée est plus facile à remplacer qu'une batterie vissée.", true: false, why: "La colle n'est pas démontable : il faut décoller la batterie, avec un risque de casse." },
              { text: "L'indice de réparabilité est une note sur 10.", true: true, why: "Plus la note est élevée, plus l'objet est facile à réparer." },
              { text: "L'obsolescence programmée est autorisée en France.", true: false, why: "C'est un délit puni par la loi depuis 2015." },
              { text: "Réparer un objet évite de fabriquer un objet neuf.", true: true, why: "On économise ainsi des matières premières, de l'énergie et des déchets." },
              { text: "Un repair café est un lieu où des bénévoles aident à réparer les objets.", true: true, why: "On y apporte son objet en panne et on apprend à le réparer avec de l'aide." },
              { text: "Un téléphone qui ne reçoit plus de mises à jour est forcément en panne.", true: false, why: "Il fonctionne encore : c'est une obsolescence logicielle, pas une panne." },
              { text: "La garantie légale de conformité d'un objet neuf dure au moins deux ans.", true: true, why: "Pendant ce délai, le vendeur doit réparer ou remplacer gratuitement un objet qui présente un défaut." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces assemblages est démontable ?",
              options: ["La colle", "La soudure", "Le rivet", "La vis"],
              answer: 3,
              why: "Une vis se retire et se remet sans abîmer les pièces ; colle, soudure et rivet ne le permettent pas.",
            },
            {
              q: "Depuis quand l'indice de réparabilité est-il affiché en France ?",
              options: ["2021", "2001", "2011", "2031"],
              answer: 0,
              why: "L'indice de réparabilité est obligatoire pour certains appareils depuis 2021.",
            },
            {
              q: "Changer de téléphone uniquement parce qu'un nouveau modèle est sorti, c'est :",
              options: ["une obsolescence technique", "une obsolescence liée à la mode", "une obsolescence logicielle", "une obsolescence programmée par le fabricant"],
              answer: 1,
              why: "L'ancien téléphone fonctionne encore : on le remplace par envie de nouveauté.",
            },
            {
              q: "Lequel de ces critères entre dans le calcul de l'indice de réparabilité ?",
              options: ["La couleur de l'objet", "La marque du magasin", "La disponibilité des pièces détachées", "La taille de l'emballage et de la notice papier"],
              answer: 2,
              why: "L'indice tient compte de la documentation, du démontage, des pièces détachées, de leur prix et d'un critère propre à l'appareil.",
            },
            {
              q: "Pourquoi réparer est-il bon pour l'environnement ?",
              options: ["Parce qu'on évite de fabriquer un objet neuf", "Parce que la réparation ne coûte rien", "Parce que l'objet réparé devient plus léger qu'avant", "Parce que l'objet change de couleur"],
              answer: 0,
              why: "La fabrication d'un objet neuf demande des matières premières et de l'énergie : réparer les économise.",
            },
          ],
          trap: "Confondre obsolescence programmée et obsolescence en général : un objet abandonné parce qu'il est démodé ou sans mises à jour n'a pas forcément été conçu pour tomber en panne.",
          method: "Pour juger si un objet est réparable, posez quatre questions : peut-on l'ouvrir (vis ou colle) ? Existe-t-il une notice de réparation ? Trouve-t-on les pièces ? Coûtent-elles moins cher qu'un objet neuf ?",
        },
      ],
    },
    /* ==================================================================== */
    /* COMPRENDRE LE FONCTIONNEMENT D'UN OBJET                                */
    /* ==================================================================== */
    {
      id: 'structure-fonctionnement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'chaine-information-energie',
          title: "Chaîne d'information et chaîne d'énergie",
          minutes: 30,
          objectives: [
            "Décrire le fonctionnement d'un système automatique à l'aide de la chaîne d'information et de la chaîne d'énergie.",
            "Identifier les fonctions acquérir, traiter et communiquer de la chaîne d'information.",
            "Identifier les fonctions alimenter, distribuer, convertir et transmettre de la chaîne d'énergie.",
            "Nommer les formes d'énergie converties par un composant.",
          ],
          course: [
            {
              heading: "Un système automatique",
              paragraphs: [
                "Un portail qui s'ouvre avec une télécommande, une lampe qui s'allume quand on passe, un sèche-mains qui souffle dès qu'on approche les mains : ce sont des systèmes automatiques. Une fois mis en service, ils réagissent seuls à ce qui se passe autour d'eux.",
                "Pour comprendre comment ils fonctionnent, on les découpe en deux parties qui travaillent ensemble. La chaîne d'information recueille des informations et prend les décisions : c'est la partie qui « réfléchit ». La chaîne d'énergie reçoit les ordres et fait l'action : c'est la partie qui « agit ».",
                "On peut comparer avec le corps humain : vos yeux et vos oreilles recueillent des informations, votre cerveau décide, vos nerfs transmettent l'ordre, et vos muscles, grâce à l'énergie apportée par l'alimentation, réalisent le mouvement.",
              ],
              box: { label: "À retenir", text: "Chaîne d'information : elle recueille les informations et décide. Chaîne d'énergie : elle reçoit les ordres et réalise l'action." },
            },
            {
              heading: "La chaîne d'information : acquérir, traiter, communiquer",
              paragraphs: [
                "Acquérir : des capteurs relèvent des informations sur l'environnement ou sur l'utilisateur. Un bouton détecte un appui, un détecteur de présence repère une personne, un capteur de lumière mesure la luminosité.",
                "Traiter : une carte électronique programmable (avec un microcontrôleur) reçoit ces informations, les compare à ce que prévoit son programme et prend une décision. Par exemple : « s'il y a quelqu'un et qu'il fait nuit, alors allumer la lampe ».",
                "Communiquer : la carte envoie ses ordres à la chaîne d'énergie, et elle peut aussi informer l'utilisateur (voyant, écran, son) ou un autre appareil (message envoyé à un smartphone).",
              ],
              box: { label: "Repère", text: "Acquérir (capteurs) → Traiter (carte programmable) → Communiquer (ordres vers la chaîne d'énergie, messages vers l'utilisateur)." },
            },
            {
              heading: "La chaîne d'énergie : alimenter, distribuer, convertir, transmettre",
              paragraphs: [
                "Alimenter : fournir l'énergie au système. Une pile, une batterie, le réseau électrique (une prise) ou un panneau solaire jouent ce rôle. Distribuer : laisser passer ou non l'énergie vers le composant qui agit, selon l'ordre reçu de la chaîne d'information. C'est le rôle d'un relais ou d'une carte de commande de moteur, sortes d'interrupteurs commandés par la carte.",
                "Convertir : transformer l'énergie d'une forme en une autre. Un moteur électrique convertit l'énergie électrique en énergie mécanique (un mouvement) ; une lampe ou une LED convertit l'énergie électrique en énergie lumineuse ; une résistance chauffante la convertit en énergie thermique (de la chaleur).",
                "Transmettre : faire passer le mouvement du moteur jusqu'à la pièce qui agit, en l'adaptant. Des engrenages (roues dentées), une poulie et une courroie, une chaîne et des pignons, ou un système pignon et crémaillère jouent ce rôle. Toutes les chaînes d'énergie n'ont pas besoin de cette fonction : une lampe n'a rien à transmettre.",
              ],
              box: { label: "À retenir", text: "Alimenter (pile, batterie, prise) → Distribuer (relais, carte de commande) → Convertir (moteur, lampe, résistance) → Transmettre (engrenages, courroie, crémaillère) → Action." },
            },
            {
              heading: "Les deux chaînes travaillent ensemble",
              paragraphs: [
                "Prenons un sèche-mains automatique. Un capteur infrarouge détecte les mains (acquérir). La carte électronique décide de mettre l'appareil en marche (traiter) et envoie l'ordre (communiquer). Le relais laisse alors passer l'énergie électrique venue du réseau (alimenter, distribuer).",
                "Le moteur convertit l'énergie électrique en énergie mécanique et fait tourner le ventilateur, tandis qu'une résistance convertit l'énergie électrique en chaleur : l'air chaud souffle sur les mains. Quand les mains s'éloignent, le capteur ne détecte plus rien, la carte donne l'ordre d'arrêt et le relais coupe l'énergie.",
              ],
            },
          ],
          keyPoints: [
            "Un système automatique comprend une chaîne d'information (elle décide) et une chaîne d'énergie (elle agit).",
            "Chaîne d'information : acquérir (capteurs), traiter (carte programmable), communiquer (ordres et messages).",
            "Chaîne d'énergie : alimenter, distribuer, convertir, transmettre.",
            "Un moteur convertit l'énergie électrique en énergie mécanique ; une LED, en énergie lumineuse.",
            "La chaîne d'information commande la fonction distribuer de la chaîne d'énergie.",
          ],
          example: {
            statement: "Une lampe de couloir s'allume quand une personne passe et s'éteint après une minute. Elle comprend : un détecteur de présence, une carte électronique, un relais, une ampoule à LED, et elle est branchée sur le réseau électrique. Associer chaque élément à sa fonction.",
            solution: [
              "Détecteur de présence : il repère la personne, c'est la fonction acquérir.",
              "Carte électronique : elle décide d'allumer puis, au bout d'une minute, d'éteindre ; elle traite l'information et communique l'ordre.",
              "Réseau électrique : il fournit l'énergie, c'est la fonction alimenter.",
              "Relais : il laisse passer ou coupe l'énergie selon l'ordre de la carte, c'est la fonction distribuer.",
              "Ampoule à LED : elle transforme l'énergie électrique en lumière, c'est la fonction convertir.",
              "Réponse : acquérir = détecteur ; traiter et communiquer = carte ; alimenter = réseau ; distribuer = relais ; convertir = LED (il n'y a pas de fonction transmettre).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque composant, indiquer la forme d'énergie qu'il reçoit et celle qu'il produit utilement : a) un moteur électrique ; b) une LED ; c) la résistance chauffante d'une bouilloire ; d) un panneau solaire ; e) un haut-parleur.",
              hint: "Les formes d'énergie à utiliser : électrique, mécanique, lumineuse, thermique, sonore.",
              solution: [
                "a) Moteur : il reçoit de l'énergie électrique et produit de l'énergie mécanique (un mouvement de rotation).",
                "b) LED : elle reçoit de l'énergie électrique et produit de l'énergie lumineuse.",
                "c) Résistance chauffante : elle reçoit de l'énergie électrique et produit de l'énergie thermique.",
                "d) Panneau solaire : il reçoit de l'énergie lumineuse (celle du Soleil) et produit de l'énergie électrique.",
                "e) Haut-parleur : il reçoit de l'énergie électrique et produit de l'énergie sonore.",
                "Résultat : tous ces composants convertissent l'énergie ; seul le panneau solaire produit de l'énergie électrique au lieu d'en consommer.",
              ],
            },
            {
              level: 2,
              statement: "Un portail automatique s'ouvre quand on appuie sur une télécommande. Il comprend : un récepteur qui capte le signal de la télécommande, une carte électronique, une carte de commande du moteur, le réseau électrique, un moteur électrique, et un système pignon et crémaillère qui fait glisser le portail. Classer chaque élément dans la chaîne d'information ou la chaîne d'énergie, en précisant sa fonction.",
              hint: "Suivez le chemin : d'abord l'information (de la télécommande à la décision), puis l'énergie (de la prise jusqu'au mouvement du portail).",
              solution: [
                "Chaîne d'information : le récepteur acquiert le signal de la télécommande (acquérir) ; la carte électronique décide d'ouvrir (traiter) et envoie l'ordre au moteur (communiquer).",
                "Chaîne d'énergie : le réseau électrique fournit l'énergie (alimenter) ; la carte de commande laisse passer l'énergie vers le moteur sur ordre de la carte électronique (distribuer).",
                "Le moteur convertit l'énergie électrique en énergie mécanique (convertir).",
                "Le pignon et la crémaillère transforment la rotation du moteur en mouvement en ligne droite du portail (transmettre).",
                "Résultat : information = récepteur, carte électronique ; énergie = réseau, carte de commande, moteur, pignon et crémaillère.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une lampe de jardin solaire fonctionne ainsi : le jour, un panneau solaire recharge une batterie ; la nuit, quand un capteur de luminosité détecte l'obscurité, une carte électronique fait passer l'énergie de la batterie vers une LED, qui s'allume. a) Identifier les fonctions acquérir, traiter, alimenter, distribuer et convertir. b) Pourquoi n'y a-t-il pas de fonction transmettre ? c) Un soir, la lampe reste éteinte alors qu'il fait nuit, mais elle s'allume quand on cache le capteur avec la main. Proposer une explication. d) Une autre lampe reste éteinte même quand on cache le capteur, après une semaine très nuageuse. Quelle fonction est probablement en cause ?",
              hint: "Pour c), demandez-vous ce que le capteur « voit » autour de lui la nuit. Pour d), pensez à ce qui recharge la batterie.",
              solution: [
                "a) Acquérir : le capteur de luminosité détecte l'obscurité. Traiter : la carte électronique décide d'allumer. Alimenter : la batterie, rechargée le jour par le panneau solaire. Distribuer : la carte fait passer ou non l'énergie vers la LED. Convertir : la LED transforme l'énergie électrique en lumière.",
                "b) Il n'y a aucun mouvement à faire passer d'une pièce à une autre : la LED produit directement la lumière.",
                "c) Quand on cache le capteur, la lampe s'allume : la chaîne fonctionne. Le soir, le capteur devait encore recevoir de la lumière, par exemple celle d'un lampadaire voisin, et la carte en a conclu qu'il faisait jour.",
                "d) Après une semaine sans soleil, le panneau n'a presque pas rechargé la batterie : c'est la fonction alimenter qui est en cause.",
                "Résultat : capteur (acquérir), carte (traiter et distribuer), batterie (alimenter), LED (convertir) ; panne liée au capteur éclairé dans un cas, à la batterie vide dans l'autre.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre le fonctionnement d'un sèche-mains automatique.",
            items: [
              "Les mains passent sous l'appareil",
              "Le capteur détecte les mains (acquérir)",
              "La carte électronique décide de démarrer (traiter)",
              "La carte envoie l'ordre de mise en marche (communiquer)",
              "Le relais laisse passer l'énergie électrique (distribuer)",
              "Le moteur fait tourner le ventilateur (convertir)",
              "L'air souffle sur les mains",
            ],
          },
          quiz: [
            {
              q: "Quelle fonction réalise un détecteur de présence ?",
              options: ["Convertir", "Acquérir", "Distribuer", "Transmettre"],
              answer: 1,
              why: "Le détecteur recueille une information sur l'environnement : il réalise la fonction acquérir de la chaîne d'information.",
            },
            {
              q: "Un moteur électrique convertit l'énergie électrique en énergie :",
              options: ["lumineuse", "chimique", "sonore", "mécanique"],
              answer: 3,
              why: "Le moteur produit un mouvement de rotation, c'est-à-dire de l'énergie mécanique.",
            },
            {
              q: "Quel élément réalise la fonction alimenter ?",
              options: ["Une batterie", "Un capteur", "Un engrenage", "Une LED"],
              answer: 0,
              why: "La batterie fournit l'énergie au système : c'est la fonction alimenter.",
            },
            {
              q: "Dans quelle chaîne trouve-t-on la fonction traiter ?",
              options: ["La chaîne d'énergie", "Les deux chaînes à la fois", "La chaîne d'information", "Aucune des deux"],
              answer: 2,
              why: "Traiter, c'est décider à partir des informations reçues : c'est le rôle de la carte programmable, dans la chaîne d'information.",
            },
            {
              q: "Un système pignon et crémaillère réalise la fonction :",
              options: ["acquérir une information", "transmettre", "alimenter", "traiter"],
              answer: 1,
              why: "Il fait passer le mouvement du moteur jusqu'à la pièce qui agit, en transformant une rotation en mouvement en ligne droite.",
            },
          ],
          trap: "Mélanger les deux chaînes : le capteur et la carte programmable appartiennent à la chaîne d'information, alors que la pile, le relais, le moteur et les engrenages appartiennent à la chaîne d'énergie.",
          method: "Pour analyser un système, posez deux questions : « Qu'est-ce qui sait ce qui se passe et décide ? » (chaîne d'information), puis « Qu'est-ce qui fournit l'énergie et fait l'action ? » (chaîne d'énergie), et suivez chaque chaîne dans l'ordre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'capteurs-actionneurs',
          title: 'Capteurs et actionneurs',
          minutes: 25,
          objectives: [
            "Identifier les capteurs et les actionneurs d'un objet ou d'un système.",
            "Associer un capteur à l'information qu'il relève.",
            "Associer un actionneur à l'action qu'il réalise.",
            "Décrire le comportement d'un système à partir des informations de ses capteurs.",
          ],
          course: [
            {
              heading: "Le capteur : les sens de l'objet",
              paragraphs: [
                "Un capteur relève une information sur ce qui se passe autour de l'objet et la transforme en signal électrique que la carte programmable peut lire. Comme vos sens, il permet à l'objet de « savoir » ce qui se passe : il y a quelqu'un, il fait nuit, il fait chaud, un obstacle approche.",
                "Exemples : le bouton-poussoir détecte un appui ; le détecteur de présence (à infrarouge) repère le passage d'une personne ; la photorésistance mesure la lumière ; la thermistance mesure la température ; le capteur à ultrasons mesure la distance d'un obstacle ; le capteur d'humidité mesure l'eau contenue dans la terre ; l'interrupteur de fin de course détecte qu'une pièce est arrivée au bout de son trajet.",
              ],
              box: { label: "Définition", text: "Un capteur relève une information (présence, lumière, température, distance, appui) et la transforme en signal électrique pour la chaîne d'information." },
            },
            {
              heading: "Deux sortes d'informations",
              paragraphs: [
                "Certains capteurs ne donnent que deux réponses possibles : oui ou non. Le bouton est appuyé ou non, une présence est détectée ou non. On parle d'information logique, ou tout ou rien, que l'on note souvent 1 (oui) et 0 (non).",
                "D'autres capteurs donnent une valeur qui peut varier en continu : une température de 18,5 °C, une distance de 42 cm, une luminosité plus ou moins forte. On parle d'information analogique. La carte compare alors cette valeur à un seuil : par exemple, si la température dépasse 25 °C, elle déclenche un ventilateur.",
              ],
              box: { label: "À retenir", text: "Information logique (tout ou rien) : deux états, 1 ou 0. Information analogique : une valeur qui varie (température, distance, luminosité)." },
            },
            {
              heading: "L'actionneur : agir sur le monde",
              paragraphs: [
                "Un actionneur reçoit un ordre de la carte et transforme l'énergie qu'il reçoit en action sur le monde réel : un mouvement, de la lumière, du son, de la chaleur. Il se trouve dans la chaîne d'énergie, à la fonction convertir.",
                "Exemples : le moteur produit un mouvement de rotation (roues d'un robot, ventilateur) ; le vérin produit un mouvement en ligne droite (ouvrir une trappe) ; la LED et la lampe produisent de la lumière ; le buzzer et le haut-parleur produisent un son ; la résistance chauffante produit de la chaleur ; l'électroaimant attire ou libère une pièce métallique (une gâche électrique de porte).",
              ],
              box: { label: "Définition", text: "Un actionneur reçoit un ordre et transforme l'énergie en action : mouvement (moteur, vérin), lumière (LED), son (buzzer), chaleur (résistance)." },
            },
            {
              heading: "Capteur ou actionneur ?",
              paragraphs: [
                "Pour ne pas les confondre, regardez le sens de l'information. Le capteur est une entrée : l'information va du monde extérieur vers la carte. L'actionneur est une sortie : l'ordre va de la carte vers le monde extérieur.",
                "Un robot aspirateur en est un bon exemple. Ses capteurs : un pare-chocs à contact qui détecte les chocs, des capteurs tournés vers le sol qui repèrent le vide d'un escalier, un capteur qui mesure le niveau de la batterie. Ses actionneurs : les moteurs des roues, le moteur d'aspiration, le moteur des brosses et un haut-parleur qui annonce les messages.",
              ],
            },
          ],
          keyPoints: [
            "Un capteur relève une information et la transforme en signal électrique : c'est une entrée.",
            "Un actionneur reçoit un ordre et agit sur le monde (mouvement, lumière, son, chaleur) : c'est une sortie.",
            "Capteurs : bouton, détecteur de présence, photorésistance, thermistance, capteur à ultrasons.",
            "Actionneurs : moteur, vérin, LED, buzzer, résistance chauffante, électroaimant.",
            "Information logique : 1 ou 0 ; information analogique : une valeur qui varie, comparée à un seuil.",
          ],
          example: {
            statement: "Un distributeur de gel hydroalcoolique automatique délivre une dose quand on place la main dessous, et une LED rouge clignote quand le réservoir est vide. Identifier ses capteurs et ses actionneurs.",
            solution: [
              "Pour savoir qu'une main est placée dessous, il faut un détecteur de présence : c'est un capteur.",
              "Pour savoir que le réservoir est vide, il faut un capteur de niveau : c'est aussi un capteur.",
              "Pour pousser le gel hors du réservoir, une petite pompe entraînée par un moteur agit : c'est un actionneur.",
              "La LED rouge transforme l'énergie électrique en lumière pour avertir l'utilisateur : c'est un actionneur.",
              "Réponse : capteurs = détecteur de présence et capteur de niveau ; actionneurs = moteur de la pompe et LED.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer chaque composant en capteur ou en actionneur : a) un moteur ; b) une thermistance ; c) un buzzer ; d) un bouton-poussoir ; e) une LED ; f) un capteur à ultrasons ; g) un vérin ; h) une photorésistance.",
              hint: "Demandez-vous si le composant renseigne la carte (entrée) ou s'il agit sur le monde (sortie).",
              solution: [
                "Capteurs : b) thermistance (température), d) bouton-poussoir (appui), f) capteur à ultrasons (distance), h) photorésistance (lumière).",
                "Actionneurs : a) moteur (mouvement), c) buzzer (son), e) LED (lumière), g) vérin (mouvement en ligne droite).",
                "Résultat : 4 capteurs (b, d, f, h) et 4 actionneurs (a, c, e, g).",
              ],
            },
            {
              level: 2,
              statement: "Une barrière de parking fonctionne ainsi : quand un ticket est inséré dans la borne, un moteur lève la barrière ; quand la voiture est passée, la barrière redescend ; pendant le mouvement, un gyrophare orange clignote. Quand la barrière est complètement levée, elle s'arrête. a) Citer les actionneurs. b) Citer les capteurs nécessaires et l'information relevée par chacun. c) Dire pour chaque capteur si l'information est logique ou analogique.",
              hint: "Pour chaque événement (ticket inséré, voiture passée, barrière en haut), il faut un capteur qui le détecte.",
              solution: [
                "a) Actionneurs : le moteur qui lève et baisse la barrière, et le gyrophare qui produit la lumière clignotante.",
                "b) Un capteur de ticket dans la borne détecte l'insertion du ticket ; un détecteur de présence (par exemple à infrarouge) détecte que la voiture est passée ; un interrupteur de fin de course détecte que la barrière est complètement levée.",
                "c) Les trois informations sont logiques : ticket présent ou non, voiture détectée ou non, barrière en haut ou non.",
                "Résultat : 2 actionneurs (moteur, gyrophare) et 3 capteurs à information logique (capteur de ticket, détecteur de présence, fin de course).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une petite serre automatique (données fictives) suit trois règles : si la température dépasse 26 °C, un moteur ouvre la fenêtre ; si l'humidité de la terre est inférieure à 30 %, une pompe arrose ; si la luminosité est inférieure à 200 lux, une lampe s'allume. Relevés : à 8 h : 17 °C, 45 %, 150 lux ; à 13 h : 29 °C, 25 %, 900 lux ; à 18 h : 24 °C, 28 %, 180 lux. a) Citer les capteurs et les actionneurs de la serre. b) Pour chaque heure, indiquer quels actionneurs sont en marche. c) À 13 h, la température redescend à 26 °C exactement : la fenêtre doit-elle rester ouverte d'après la règle ? Justifier.",
              hint: "Comparez chaque relevé à son seuil, un par un, en faisant attention aux mots « dépasse » et « inférieure à ».",
              solution: [
                "a) Capteurs : un capteur de température, un capteur d'humidité de la terre, un capteur de luminosité. Actionneurs : le moteur de la fenêtre, la pompe d'arrosage, la lampe.",
                "b) 8 h : 17 °C ne dépasse pas 26 °C (fenêtre fermée) ; 45 % n'est pas inférieur à 30 % (pas d'arrosage) ; 150 lux est inférieur à 200 lux (lampe allumée). Seule la lampe fonctionne.",
                "13 h : 29 °C dépasse 26 °C (fenêtre ouverte) ; 25 % est inférieur à 30 % (arrosage) ; 900 lux n'est pas inférieur à 200 lux (lampe éteinte). Le moteur de la fenêtre et la pompe fonctionnent.",
                "18 h : 24 °C ne dépasse pas 26 °C (fenêtre fermée) ; 28 % est inférieur à 30 % (arrosage) ; 180 lux est inférieur à 200 lux (lampe allumée). La pompe et la lampe fonctionnent.",
                "c) La règle dit « si la température dépasse 26 °C ». À 26 °C exactement, elle ne dépasse pas 26 °C : la condition n'est plus remplie, la fenêtre se referme.",
                "Résultat : 8 h, lampe ; 13 h, fenêtre et pompe ; 18 h, pompe et lampe ; à 26 °C pile, la fenêtre se ferme.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque composant à ce qu'il fait.",
            pairs: [
              { left: "Photorésistance", right: "Mesure la lumière" },
              { left: "Thermistance", right: "Mesure la température" },
              { left: "Capteur à ultrasons", right: "Mesure la distance d'un obstacle" },
              { left: "Moteur", right: "Produit un mouvement de rotation" },
              { left: "Buzzer", right: "Produit un son" },
              { left: "Vérin", right: "Produit un mouvement en ligne droite" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces composants est un capteur ?",
              options: ["Une LED", "Un moteur à courant continu", "Un détecteur de présence", "Un buzzer"],
              answer: 2,
              why: "Le détecteur de présence relève une information sur l'environnement ; les trois autres agissent : ce sont des actionneurs.",
            },
            {
              q: "Un actionneur :",
              options: ["relève une information", "reçoit un ordre et agit sur le monde", "prend les décisions", "stocke l'énergie électrique pour plus tard"],
              answer: 1,
              why: "L'actionneur transforme l'énergie en action (mouvement, lumière, son, chaleur) sur ordre de la carte.",
            },
            {
              q: "Un bouton-poussoir donne une information :",
              options: ["logique (tout ou rien)", "analogique (une valeur qui varie)", "sonore", "lumineuse"],
              answer: 0,
              why: "Il n'a que deux états : appuyé ou non appuyé, soit 1 ou 0.",
            },
            {
              q: "Quel capteur permet à un robot de mesurer la distance d'un mur ?",
              options: ["Une thermistance", "Un bouton-poussoir sur le pare-chocs", "Une photorésistance", "Un capteur à ultrasons"],
              answer: 3,
              why: "Le capteur à ultrasons envoie un son très aigu et mesure le temps de son retour pour connaître la distance.",
            },
            {
              q: "Dans un robot aspirateur, le moteur des roues est :",
              options: ["un actionneur", "un capteur", "une carte programmable", "une batterie"],
              answer: 0,
              why: "Il reçoit l'ordre de la carte et produit le mouvement du robot : c'est un actionneur.",
            },
          ],
          trap: "Classer la LED ou le buzzer parmi les capteurs parce qu'ils « donnent une information » à l'utilisateur : ils reçoivent un ordre et produisent de la lumière ou du son, ce sont des actionneurs.",
          method: "Dessinez une flèche pour chaque composant : si l'information entre dans la carte, c'est un capteur ; si l'ordre sort de la carte vers le monde, c'est un actionneur.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'representer-objet',
          title: 'Représenter un objet : croquis et schéma',
          minutes: 30,
          objectives: [
            "Réaliser le croquis annoté d'un objet ou d'une idée de solution.",
            "Lire et compléter un schéma électrique simple avec les symboles normalisés.",
            "Choisir le mode de représentation adapté à ce que l'on veut communiquer.",
            "Utiliser une échelle pour passer des dimensions réelles aux dimensions d'un dessin.",
          ],
          course: [
            {
              heading: "Pourquoi représenter un objet ?",
              paragraphs: [
                "En technologie, on dessine un objet pour plusieurs raisons : chercher et partager une idée, expliquer comment il fonctionne, ou donner toutes les informations nécessaires pour le fabriquer. Selon le but, on n'utilise pas la même représentation.",
                "Les deux représentations les plus courantes au collège sont le croquis et le schéma. Plus tard, vous apprendrez aussi à construire un modèle en trois dimensions avec un logiciel.",
              ],
            },
            {
              heading: "Le croquis",
              paragraphs: [
                "Un croquis est un dessin rapide, fait à main levée, sans règle. Il n'a pas besoin d'être parfait ni exactement à l'échelle, mais les proportions doivent rester à peu près justes. Il sert surtout à chercher une idée et à la montrer aux autres, par exemple au début d'un projet.",
                "Un bon croquis est annoté : des flèches et de courtes légendes indiquent le nom des pièces, les matériaux, les mouvements possibles ou des dimensions approximatives. Sans annotations, un croquis est souvent difficile à comprendre.",
              ],
              box: { label: "Définition", text: "Croquis : dessin rapide à main levée, annoté (noms des pièces, matériaux, dimensions approximatives), qui sert à chercher et à communiquer une idée." },
            },
            {
              heading: "Le schéma",
              paragraphs: [
                "Un schéma est une représentation simplifiée qui montre seulement l'essentiel : comment les éléments sont reliés et comment l'objet fonctionne. Il n'a pas à ressembler à l'objet réel. Pour que tout le monde le comprenne de la même façon, il utilise des symboles normalisés.",
                "Dans un schéma électrique, chaque composant a son symbole. La pile est représentée par deux traits parallèles de longueurs différentes (le plus long est la borne +). La lampe est un cercle avec une croix. Le moteur est un cercle avec la lettre M. L'interrupteur ouvert est un petit trait incliné, l'interrupteur fermé un trait dans l'alignement des fils. La LED est un triangle pointant vers un trait, avec deux petites flèches qui partent vers l'extérieur.",
                "Les fils de connexion sont représentés par des traits droits, et le schéma est tracé à la règle, souvent en forme de rectangle. On peut ainsi montrer en un coup d'œil qu'une lampe s'allume quand l'interrupteur est fermé.",
              ],
              box: { label: "À retenir", text: "Pile : deux traits parallèles inégaux (le long = +). Lampe : cercle avec une croix. Moteur : cercle avec un M. Interrupteur ouvert : trait incliné. LED : triangle, trait et deux flèches sortantes." },
            },
            {
              heading: "Les dimensions et l'échelle",
              paragraphs: [
                "Pour fabriquer un objet, il faut connaître ses dimensions. Sur un dessin technique, on les indique par des cotes, toujours en millimètres et toujours égales aux dimensions réelles de l'objet, même si le dessin est plus petit ou plus grand.",
                "L'échelle indique le rapport entre les dimensions du dessin et les dimensions réelles. À l'échelle 1:1 (on lit « un pour un »), le dessin a la taille réelle. À l'échelle 1:2, le dessin est deux fois plus petit que l'objet ; à l'échelle 1:10, dix fois plus petit. À l'échelle 2:1, il est deux fois plus grand, ce qui est utile pour une très petite pièce.",
              ],
              box: { label: "Formule", text: "À l'échelle 1:n, dimension sur le dessin = dimension réelle ÷ n, et dimension réelle = dimension sur le dessin × n. Exemple à 1:5 : 200 mm réels donnent 40 mm sur le dessin." },
            },
          ],
          keyPoints: [
            "Le croquis est un dessin rapide à main levée, annoté, pour chercher et partager une idée.",
            "Le schéma est une représentation simplifiée qui utilise des symboles normalisés.",
            "Symboles : pile (traits inégaux), lampe (cercle et croix), moteur (cercle et M), interrupteur, LED.",
            "Les cotes s'écrivent en millimètres et donnent toujours les dimensions réelles.",
            "Échelle 1:n : le dessin est n fois plus petit ; échelle 2:1 : deux fois plus grand.",
          ],
          example: {
            statement: "On veut dessiner une boîte à crayons de 180 mm de long et 60 mm de large à l'échelle 1:2. Calculer ses dimensions sur le dessin, puis dire quelle cote on écrit pour la longueur.",
            solution: [
              "À l'échelle 1:2, le dessin est deux fois plus petit que l'objet réel : on divise par 2.",
              "Longueur sur le dessin : 180 ÷ 2 = 90 mm.",
              "Largeur sur le dessin : 60 ÷ 2 = 30 mm.",
              "La cote indique toujours la dimension réelle : on écrit 180 pour la longueur, même si le trait mesure 90 mm.",
              "Réponse : un rectangle de 90 mm sur 30 mm, coté 180 et 60.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dire s'il vaut mieux faire un croquis ou un schéma : a) montrer rapidement à son groupe une idée de support de téléphone ; b) expliquer comment sont reliés la pile, l'interrupteur et la lampe d'une lampe de poche ; c) noter une idée de forme pour une boîte à bijoux pendant une séance de recherche ; d) montrer le circuit électrique d'un petit ventilateur à moteur.",
              hint: "Le croquis sert à chercher et à montrer une idée de forme ; le schéma sert à montrer les liaisons et le fonctionnement avec des symboles.",
              solution: [
                "a) Montrer rapidement une idée de forme : un croquis.",
                "b) Montrer comment les composants électriques sont reliés : un schéma électrique.",
                "c) Chercher une forme : un croquis.",
                "d) Montrer un circuit électrique : un schéma électrique, avec le symbole du moteur (cercle et M).",
                "Résultat : croquis pour a et c ; schéma pour b et d.",
              ],
            },
            {
              level: 2,
              statement: "a) Un tabouret est dessiné à l'échelle 1:10. Sur le dessin, sa hauteur mesure 45 mm et le diamètre de son assise 32 mm. Calculer ses dimensions réelles en millimètres puis en centimètres. b) Un smartphone mesure en réalité 150 mm sur 70 mm. Calculer ses dimensions sur un dessin à l'échelle 1:2.",
              hint: "À l'échelle 1:10, l'objet réel est 10 fois plus grand que le dessin : on multiplie. Pour passer du dessin au réel à 1:2, on multiplie par 2, et dans l'autre sens on divise.",
              solution: [
                "a) Hauteur réelle : 45 × 10 = 450 mm, soit 45 cm.",
                "Diamètre réel de l'assise : 32 × 10 = 320 mm, soit 32 cm.",
                "b) Sur le dessin à 1:2 : 150 ÷ 2 = 75 mm et 70 ÷ 2 = 35 mm.",
                "Résultat : tabouret de 45 cm de haut avec une assise de 32 cm ; smartphone dessiné en 75 mm sur 35 mm.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Une étagère réelle mesure 600 mm de long. Sur un dessin, elle mesure 120 mm. À quelle échelle est-elle dessinée ? b) Une vis mesure 8 mm de long ; on veut la dessiner à l'échelle 5:1. Quelle longueur aura-t-elle sur le dessin, et quelle cote faudra-t-il écrire ? c) Décrire avec des mots le schéma électrique d'une lampe de bureau composée d'une pile, d'un interrupteur et d'une LED reliés en une seule boucle : citer chaque symbole utilisé. d) Une camarade a dessiné la pile avec deux traits de même longueur. Expliquer ce qui ne va pas.",
              hint: "Pour a), calculez combien de fois le dessin est plus petit que l'objet. À l'échelle 5:1, le dessin est cinq fois plus grand.",
              solution: [
                "a) 600 ÷ 120 = 5 : le dessin est 5 fois plus petit que l'objet. L'échelle est 1:5.",
                "b) À l'échelle 5:1, le dessin est 5 fois plus grand : 8 × 5 = 40 mm sur le dessin. La cote reste la dimension réelle : on écrit 8.",
                "c) Le schéma est un rectangle tracé à la règle : les fils sont des traits droits ; la pile est représentée par deux traits parallèles de longueurs différentes ; l'interrupteur par un trait incliné (ouvert) ou aligné (fermé) ; la LED par un triangle pointant vers un trait, avec deux petites flèches sortantes. Les trois symboles sont placés sur la même boucle.",
                "d) Les deux traits de la pile doivent avoir des longueurs différentes : le plus long indique la borne +. Avec deux traits égaux, on ne sait plus où est le +, ce qui compte pour brancher correctement une LED, qui ne s'allume que dans un sens.",
                "Résultat : échelle 1:5 ; vis dessinée en 40 mm, cotée 8 ; schéma en une boucle avec pile, interrupteur et LED ; la pile doit avoir un trait long (+) et un trait court (-).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Croquis, schéma et échelle.",
            statements: [
              { text: "Un croquis se trace obligatoirement à la règle.", true: false, why: "Un croquis se fait à main levée, rapidement, sans règle." },
              { text: "Dans un schéma électrique, une lampe se représente par un cercle avec une croix.", true: true, why: "C'est le symbole normalisé de la lampe." },
              { text: "À l'échelle 1:2, le dessin est deux fois plus grand que l'objet.", true: false, why: "À l'échelle 1:2, le dessin est deux fois plus petit ; c'est à 2:1 qu'il est deux fois plus grand." },
              { text: "Les cotes indiquent les dimensions réelles, même sur un dessin réduit.", true: true, why: "La cote donne toujours la vraie dimension de l'objet, en millimètres." },
              { text: "Un schéma doit ressembler le plus possible à l'objet réel.", true: false, why: "Un schéma est simplifié : il montre les liaisons et le fonctionnement avec des symboles, pas l'aspect de l'objet." },
              { text: "Un croquis sans annotations est souvent difficile à comprendre.", true: true, why: "Les légendes et les flèches indiquent les pièces, les matériaux et les dimensions." },
              { text: "Le symbole du moteur est un cercle avec la lettre M.", true: true, why: "C'est le symbole normalisé du moteur dans un schéma électrique." },
            ],
          },
          quiz: [
            {
              q: "Quelle représentation utilise des symboles normalisés ?",
              options: ["Le croquis", "Le schéma", "La photographie", "Le dessin libre"],
              answer: 1,
              why: "Le schéma utilise des symboles que tout le monde comprend de la même façon.",
            },
            {
              q: "À l'échelle 1:5, un objet de 250 mm mesure sur le dessin :",
              options: ["1 250 mm", "5 mm", "245 mm", "50 mm"],
              answer: 3,
              why: "Le dessin est 5 fois plus petit : 250 ÷ 5 = 50 mm.",
            },
            {
              q: "Dans le symbole de la pile, le trait le plus long représente :",
              options: ["la borne +", "la borne -", "l'interrupteur", "le fil de connexion"],
              answer: 0,
              why: "Par convention, le trait long est la borne + et le trait court la borne -.",
            },
            {
              q: "Un croquis sert surtout à :",
              options: ["fabriquer une pièce au millimètre près", "montrer les symboles électriques", "chercher et partager une idée", "remplacer la notice"],
              answer: 2,
              why: "Le croquis est rapide et annoté : il sert à chercher une idée et à la communiquer.",
            },
            {
              q: "Sur un dessin à l'échelle 1:10, une cote indique 300. La pièce réelle mesure :",
              options: ["30 mm", "300 mm", "3 000 mm", "3 mm"],
              answer: 1,
              why: "Une cote donne toujours la dimension réelle en millimètres : la pièce mesure 300 mm, quelle que soit l'échelle.",
            },
          ],
          trap: "Écrire comme cote la longueur mesurée sur le dessin : sur un dessin à l'échelle, la cote indique toujours la dimension réelle de l'objet, pas la longueur du trait.",
          method: "Avant un calcul d'échelle, demandez-vous si le dessin doit être plus petit ou plus grand que l'objet, puis vérifiez que votre résultat va dans ce sens.",
        },
      ],
    },
  ],
}
