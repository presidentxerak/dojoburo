import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'physique-chimie-5e',
  chapters: [
    /* ==================================================================== */
    /* LE CIRCUIT ÉLECTRIQUE                                                  */
    /* ==================================================================== */
    {
      id: 'circuit-electrique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'circuit-simple',
          title: 'Réaliser et schématiser un circuit simple',
          minutes: 30,
          objectives: [
            "Identifier les éléments d'un circuit électrique : générateur, récepteurs, interrupteur et fils de connexion.",
            "Réaliser un circuit électrique simple formant une boucle fermée.",
            "Schématiser un circuit électrique avec les symboles normalisés.",
            "Indiquer le sens conventionnel du courant électrique dans un circuit.",
          ],
          course: [
            {
              heading: "Les éléments d'un circuit électrique",
              paragraphs: [
                "Une lampe de poche, une guirlande ou un petit robot contiennent un circuit électrique. Un circuit simple comporte toujours un générateur, qui fournit le courant (une pile, une batterie), un ou plusieurs récepteurs, qui fonctionnent grâce au courant (une lampe, un moteur, une diode électroluminescente appelée DEL, un buzzer), et des fils de connexion qui relient le tout. On ajoute souvent un interrupteur pour allumer et éteindre.",
                "Chacun de ces composants possède deux bornes, c'est-à-dire deux points de branchement : on l'appelle un dipôle. Une pile a une borne positive (+) et une borne négative (-). Une lampe a deux bornes elle aussi : le culot (la partie métallique filetée sur le côté) et le plot (la petite pastille métallique en bas).",
              ],
              box: { label: "Définition", text: "Un dipôle est un composant électrique qui possède deux bornes. Le générateur (pile, batterie) fait circuler le courant ; les récepteurs (lampe, moteur, DEL) fonctionnent quand le courant les traverse ; l'interrupteur permet d'ouvrir ou de fermer le circuit." },
            },
            {
              heading: "Une boucle fermée",
              paragraphs: [
                "Pour qu'une lampe s'allume, il faut que ses deux bornes soient reliées, par des fils, aux deux bornes du générateur. Le courant part d'une borne de la pile, traverse les fils et la lampe, puis revient à l'autre borne : il forme une boucle. Si cette boucle est coupée à un seul endroit (un fil débranché, une lampe dévissée), le courant ne circule plus nulle part.",
                "L'interrupteur sert justement à couper ou à rétablir la boucle. Attention au vocabulaire, qui surprend souvent : un interrupteur fermé laisse passer le courant (la lampe brille), un interrupteur ouvert coupe la boucle (la lampe est éteinte). C'est l'inverse d'un robinet ou d'une porte !",
                "On peut comparer le courant à des coureurs sur une piste circulaire : ils ne peuvent tourner que si la piste fait une boucle complète. Un seul pont coupé, et toute la course s'arrête.",
              ],
              box: { label: "Règle", text: "Un récepteur ne fonctionne que s'il se trouve dans une boucle fermée qui contient le générateur. Interrupteur fermé : le circuit est fermé, le courant circule. Interrupteur ouvert : le circuit est ouvert, le courant ne circule pas." },
            },
            {
              heading: "Schématiser avec les symboles normalisés",
              paragraphs: [
                "Pour représenter un circuit, on ne dessine pas les objets : on trace un schéma avec des symboles normalisés, les mêmes dans le monde entier. Un fil est un trait droit. La pile est représentée par deux traits parallèles : un trait long et fin pour la borne +, un trait court et épais pour la borne -. La lampe est un cercle barré d'une croix. Le moteur est un cercle qui contient la lettre M.",
                "L'interrupteur ouvert est un petit trait relevé qui laisse un vide dans le fil ; l'interrupteur fermé est un trait aligné avec le fil. La DEL est un triangle dont la pointe touche un petit trait, accompagné de deux petites flèches qui partent vers l'extérieur (elles rappellent que la DEL émet de la lumière).",
                "Un schéma se trace à la règle et au crayon : les fils sont des traits droits qui forment un rectangle, les symboles sont placés sur les côtés (jamais dans les coins), dans le même ordre que dans le circuit réel.",
              ],
              box: { label: "Repère", text: "Pile : trait long et fin (+) et trait court et épais (-). Lampe : cercle avec une croix. Moteur : cercle avec un M. Interrupteur ouvert : trait relevé. Interrupteur fermé : trait aligné. DEL : triangle contre un trait, avec deux flèches sortantes." },
            },
            {
              heading: "Le sens du courant",
              paragraphs: [
                "Les scientifiques ont choisi une convention : à l'extérieur du générateur, le courant circule de la borne + vers la borne -. Sur un schéma, on l'indique par une flèche dessinée sur un fil. C'est le sens conventionnel du courant.",
                "Certains récepteurs révèlent ce sens. Si l'on inverse les branchements de la pile, un moteur tourne dans l'autre sens. Une DEL, elle, ne s'allume que si le courant la traverse dans un seul sens, appelé sens passant ; dans l'autre sens, le sens bloquant, elle ne laisse pas passer le courant et toute la boucle s'arrête. On place toujours une résistance de protection dans la même boucle qu'une DEL, sinon elle risque d'être détruite.",
              ],
              box: { label: "Définition", text: "Sens conventionnel du courant : à l'extérieur du générateur, le courant va de la borne + vers la borne -. Une DEL ne laisse passer le courant que dans son sens passant." },
            },
          ],
          keyPoints: [
            "Un circuit simple : un générateur, un ou plusieurs récepteurs, des fils, souvent un interrupteur.",
            "Un dipôle possède deux bornes ; la pile a une borne + et une borne -.",
            "Le courant ne circule que dans une boucle fermée contenant le générateur.",
            "Interrupteur fermé : le courant passe. Interrupteur ouvert : il ne passe pas.",
            "Un schéma se trace à la règle, avec les symboles normalisés.",
            "Sens conventionnel : de la borne + vers la borne -, à l'extérieur du générateur.",
          ],
          example: {
            statement: "Sarah relie la borne + d'une pile au plot d'une lampe avec un seul fil. La lampe ne s'allume pas. Expliquer pourquoi, proposer une correction en ajoutant un interrupteur, puis décrire le schéma du circuit corrigé avec le sens du courant.",
            solution: [
              "Le courant ne circule que dans une boucle fermée. Ici, un seul fil relie la pile à la lampe : le culot de la lampe n'est relié à rien, il n'y a pas de boucle.",
              "Correction : il faut relier le culot de la lampe à la borne - de la pile. Pour pouvoir allumer et éteindre, on insère un interrupteur dans ce deuxième chemin : culot de la lampe, fil, interrupteur, fil, borne - de la pile.",
              "Schéma : on trace un rectangle à la règle. Sur le côté gauche, le symbole de la pile, avec le trait long et fin (+) en haut. Sur le côté droit, le cercle barré d'une croix (la lampe). Sur le côté du bas, l'interrupteur.",
              "Sens du courant : il sort par la borne + de la pile, en haut ; on dessine donc une flèche sur le fil du haut, dirigée de la pile vers la lampe.",
              "Réponse : la lampe ne s'allumait pas car le circuit n'était pas une boucle fermée ; avec le second fil et l'interrupteur fermé, elle s'allume.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une lampe de poche contient une pile, une petite lampe, un bouton marche-arrêt et des lamelles de métal qui relient ces éléments. Pour chacun de ces quatre éléments, donner son nom dans un circuit électrique et décrire son symbole normalisé.",
              hint: "Demandez-vous quel élément fournit le courant, lequel fonctionne grâce à lui, lequel ouvre ou ferme la boucle, et lequel joue le rôle des fils.",
              solution: [
                "La pile est le générateur : deux traits parallèles, un long et fin (borne +), un court et épais (borne -).",
                "La petite lampe est le récepteur : un cercle barré d'une croix.",
                "Le bouton marche-arrêt est un interrupteur : un trait relevé quand il est ouvert, un trait aligné quand il est fermé.",
                "Les lamelles de métal jouent le rôle des fils de connexion : des traits droits.",
                "Réponse : générateur, récepteur, interrupteur et fils de connexion.",
              ],
            },
            {
              level: 2,
              statement: "On dispose d'une pile, d'une lampe, d'un interrupteur et de trois fils. Dans chaque situation, dire si la lampe brille et justifier. a) Tout est bien branché en une boucle, mais l'interrupteur est ouvert. b) L'interrupteur est fermé, mais un fil est débranché du culot de la lampe. c) Les deux fils qui viennent de la lampe sont tous les deux fixés sur la borne + de la pile, interrupteur fermé. d) Tout est bien branché en une boucle et l'interrupteur est fermé.",
              hint: "Pour chaque cas, suivez le chemin du courant avec le doigt : part-il d'une borne de la pile pour revenir à l'autre borne en traversant la lampe ?",
              solution: [
                "a) L'interrupteur ouvert coupe la boucle : la lampe ne brille pas.",
                "b) Le fil débranché coupe la boucle : la lampe ne brille pas.",
                "c) Les deux bornes de la lampe sont reliées à la même borne de la pile : le chemin ne revient jamais à la borne -, il n'y a pas de boucle passant par le générateur. La lampe ne brille pas.",
                "d) La boucle est fermée et contient le générateur : la lampe brille.",
                "Réponse : la lampe ne brille que dans la situation d.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un élève branche en une seule boucle une pile, un interrupteur, un moteur, une DEL et sa résistance de protection. Il ferme l'interrupteur : le moteur ne tourne pas et la DEL ne brille pas. Tous les composants fonctionnent et tous les fils sont bien branchés. 1) Proposer une explication. 2) Que doit faire l'élève pour que tout fonctionne ? 3) Une fois le circuit réparé, il retourne la pile (il inverse ses bornes). Que se passe-t-il ?",
              hint: "Un seul composant de cette liste ne laisse passer le courant que dans un sens. Rappelez-vous aussi qu'une boucle coupée à un endroit est coupée partout.",
              solution: [
                "1) La DEL est sans doute branchée dans son sens bloquant : elle ne laisse pas passer le courant. Comme tous les composants sont dans la même boucle, le courant ne circule nulle part, et le moteur ne tourne pas non plus.",
                "2) Il faut retourner la DEL (inverser ses deux bornes) pour la placer dans son sens passant. Le courant circule alors : la DEL brille et le moteur tourne.",
                "3) En retournant la pile, on inverse le sens du courant dans toute la boucle. La DEL se retrouve dans son sens bloquant : le courant ne circule plus.",
                "Réponse : après le retournement de la pile, la DEL s'éteint et le moteur s'arrête. Il ne tourne pas « à l'envers », car aucun courant ne le traverse.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour schématiser un circuit réel.",
            items: [
              "Repérer tous les dipôles du circuit réel et leur ordre dans la boucle.",
              "Tracer à la règle un rectangle qui représente la boucle de fils.",
              "Placer le symbole de chaque dipôle sur un côté du rectangle, dans l'ordre du circuit.",
              "Repérer la borne + de la pile (le trait long et fin).",
              "Dessiner une flèche sur un fil, qui part de la borne + : c'est le sens du courant.",
            ],
          },
          quiz: [
            {
              q: "Quel élément du circuit fournit le courant électrique ?",
              options: ["La lampe", "La pile", "L'interrupteur", "Le fil de connexion"],
              answer: 1,
              why: "La pile est le générateur du circuit : c'est elle qui fait circuler le courant. La lampe est un récepteur.",
            },
            {
              q: "Un interrupteur est ouvert. Que se passe-t-il ?",
              options: ["La lampe brille plus fort qu'avant", "Le courant circule normalement dans la boucle", "La pile se décharge plus vite", "Le courant ne circule pas"],
              answer: 3,
              why: "Un interrupteur ouvert coupe la boucle : le circuit est ouvert et aucun courant ne circule.",
            },
            {
              q: "Quel est le symbole normalisé d'une lampe ?",
              options: ["Un cercle barré d'une croix", "Un cercle avec la lettre M", "Deux traits parallèles", "Un triangle contre un trait"],
              answer: 0,
              why: "La lampe est un cercle avec une croix. Le cercle avec un M est le moteur, les deux traits sont la pile, le triangle est la diode.",
            },
            {
              q: "À l'extérieur du générateur, dans quel sens circule le courant par convention ?",
              options: ["De la borne - vers la borne +", "Dans les deux sens à la fois", "De la borne + vers la borne -", "Cela dépend de la lampe"],
              answer: 2,
              why: "Par convention, le courant sort par la borne + du générateur et y revient par la borne -.",
            },
            {
              q: "Une DEL est branchée dans son sens bloquant. Que fait-elle ?",
              options: ["Elle brille faiblement", "Elle empêche le courant de passer", "Elle brille normalement", "Elle fait tourner le moteur à l'envers"],
              answer: 1,
              why: "Dans le sens bloquant, la DEL ne laisse pas passer le courant : elle reste éteinte et toute la boucle est arrêtée.",
            },
          ],
          trap: "Confondre « interrupteur ouvert » et « lampe allumée » : un interrupteur ouvert coupe la boucle et éteint la lampe ; c'est l'interrupteur fermé qui laisse passer le courant.",
          method: "Pour vérifier un circuit, suivez la boucle avec le doigt, en partant de la borne + de la pile : si vous revenez à la borne - en traversant chaque récepteur sans rencontrer de coupure, le circuit est fermé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'serie-derivation',
          title: 'Circuits en série et en dérivation',
          minutes: 30,
          objectives: [
            "Distinguer un circuit en série d'un circuit comportant des dérivations.",
            "Repérer les nœuds, la branche principale et les branches dérivées d'un circuit.",
            "Prévoir l'effet de l'ouverture d'un interrupteur ou du retrait d'une lampe selon le montage.",
            "Expliquer pourquoi les appareils d'une maison sont branchés en dérivation.",
          ],
          course: [
            {
              heading: "Le circuit en série : une seule boucle",
              paragraphs: [
                "Dans un circuit en série, tous les dipôles sont branchés les uns à la suite des autres et forment une seule boucle. Le courant traverse chaque dipôle, l'un après l'autre, avant de revenir au générateur.",
                "Conséquence : si une lampe grille ou si on la dévisse, la boucle est coupée et toutes les autres lampes s'éteignent. L'ordre des dipôles ne change rien : une lampe placée avant ou après le moteur fonctionne de la même façon.",
                "Plus on ajoute de lampes identiques en série avec la même pile, moins chacune brille. Avec trois lampes en série, chacune éclaire bien moins qu'une lampe seule branchée sur la même pile.",
              ],
              box: { label: "Définition", text: "Des dipôles sont branchés en série lorsqu'ils forment avec le générateur une seule boucle. Si un dipôle est retiré ou grillé, le courant ne circule plus dans aucun dipôle." },
            },
            {
              heading: "Le circuit en dérivation : plusieurs boucles",
              paragraphs: [
                "Dans un circuit avec des dérivations, le courant peut emprunter plusieurs chemins. Un point où se rejoignent au moins trois fils s'appelle un nœud. La portion de circuit entre deux nœuds s'appelle une branche. La branche qui contient le générateur est la branche principale ; les autres sont les branches dérivées.",
                "Deux lampes placées chacune dans sa propre branche dérivée sont en dérivation. Elles fonctionnent indépendamment : si l'on dévisse l'une, l'autre continue de briller, car sa boucle n'est pas coupée.",
                "De plus, chaque lampe en dérivation sur une pile brille à peu près autant que si elle était seule branchée sur cette pile. On peut compter les boucles en suivant les chemins possibles du courant, de la borne + à la borne - : avec deux lampes en dérivation, il y a deux boucles.",
              ],
              box: { label: "Définition", text: "Un nœud est un point de jonction d'au moins trois fils. Une branche relie deux nœuds. Des dipôles placés dans des branches différentes, entre les deux mêmes nœuds, sont en dérivation : ils fonctionnent indépendamment les uns des autres." },
            },
            {
              heading: "Où placer l'interrupteur ?",
              paragraphs: [
                "Dans un circuit en série, l'interrupteur commande tous les dipôles, quelle que soit sa place dans la boucle : dès qu'il est ouvert, la seule boucle est coupée.",
                "Dans un circuit avec dérivations, tout dépend de sa branche. Placé dans la branche principale, il commande tout le circuit, car tous les chemins passent par lui. Placé dans une branche dérivée, il ne commande que le dipôle de cette branche ; les autres branches continuent de fonctionner.",
              ],
            },
            {
              heading: "Les installations de la maison",
              paragraphs: [
                "Dans une maison, la lampe du salon, le réfrigérateur et la télévision fonctionnent indépendamment : on peut éteindre l'un sans éteindre les autres. Ils sont donc branchés en dérivation. Les prises d'une multiprise sont elles aussi en dérivation les unes par rapport aux autres.",
                "Si les appareils étaient en série, il faudrait tous les allumer en même temps, et une seule ampoule grillée plongerait toute la maison dans le noir. C'était le défaut des anciennes guirlandes de Noël montées en série.",
              ],
              box: { label: "À retenir", text: "Série : une seule boucle, les dipôles dépendent les uns des autres, plus il y a de lampes, moins elles brillent. Dérivation : plusieurs boucles, chaque branche fonctionne indépendamment, chaque lampe brille normalement." },
            },
          ],
          keyPoints: [
            "Série : tous les dipôles dans une seule boucle ; un dipôle retiré coupe tout.",
            "Plus il y a de lampes en série, moins chacune brille.",
            "Nœud : point où se rejoignent au moins trois fils ; branche : portion entre deux nœuds.",
            "Dérivation : plusieurs boucles ; chaque branche fonctionne indépendamment.",
            "Un interrupteur dans la branche principale commande tout ; dans une branche dérivée, seulement sa branche.",
            "Les appareils d'une maison sont branchés en dérivation.",
          ],
          example: {
            statement: "Un circuit comporte une pile, un interrupteur K dans la branche principale, et deux branches dérivées entre les nœuds A et B : la première contient la lampe L1 et l'interrupteur K1, la seconde contient la lampe L2. Combien ce circuit a-t-il de boucles ? Quelles lampes brillent si : a) K et K1 sont fermés ; b) K est fermé et K1 ouvert ; c) K est ouvert et K1 fermé ?",
            solution: [
              "Boucles : en partant de la borne + de la pile, le courant peut passer par la branche de L1 ou par la branche de L2 avant de revenir à la borne -. Il y a donc deux boucles.",
              "a) K est fermé et les deux branches sont fermées : L1 et L2 brillent.",
              "b) K est fermé ; K1 ouvert coupe seulement la branche de L1. L1 est éteinte, L2 brille.",
              "c) K, dans la branche principale, coupe tous les chemins : L1 et L2 sont éteintes, même si K1 est fermé.",
              "Réponse : deux boucles ; a) L1 et L2 brillent ; b) seule L2 brille ; c) aucune lampe ne brille.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque description, dire si les lampes sont en série ou en dérivation. a) Le circuit ne forme qu'une seule boucle. b) Quand on dévisse une lampe, l'autre reste allumée. c) Le circuit contient deux nœuds et chaque lampe est dans sa propre branche. d) Quand une lampe grille, toutes les lampes s'éteignent.",
              hint: "Série signifie une seule boucle et des lampes qui dépendent les unes des autres ; dérivation signifie plusieurs boucles et des lampes indépendantes.",
              solution: [
                "a) Une seule boucle : en série.",
                "b) Les lampes sont indépendantes : en dérivation.",
                "c) Des nœuds et une lampe par branche : en dérivation.",
                "d) Une lampe grillée coupe tout : en série.",
                "Réponse : a et d en série ; b et c en dérivation.",
              ],
            },
            {
              level: 2,
              statement: "Une guirlande ancienne comporte 20 petites lampes identiques branchées en série sur une même alimentation. 1) Une lampe grille : que se passe-t-il pour les 19 autres ? Justifier. 2) Pourquoi chaque lampe de cette guirlande brille-t-elle moins qu'une lampe seule branchée sur la même alimentation ? 3) Quel montage faudrait-il choisir pour qu'une lampe grillée n'éteigne pas toute la guirlande ?",
              hint: "Comptez le nombre de boucles de la guirlande, puis rappelez-vous l'effet du nombre de lampes en série sur leur éclat.",
              solution: [
                "1) Les lampes sont en série : elles forment une seule boucle. La lampe grillée coupe cette boucle, le courant ne circule plus : les 19 autres s'éteignent aussi.",
                "2) Plus il y a de lampes en série sur la même alimentation, moins chacune brille : avec 20 lampes à la suite, chacune brille moins qu'une lampe seule.",
                "3) Il faudrait brancher les lampes en dérivation : chaque lampe aurait sa propre boucle, et une lampe grillée ne couperait que sa branche.",
                "Réponse : en série, une lampe grillée éteint toute la guirlande ; le montage en dérivation évite ce problème.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Vous construisez la maquette électrique d'une petite maison avec une pile, deux lampes (salon et chambre) et trois interrupteurs. Cahier des charges : un interrupteur général K éteint toute la maison ; l'interrupteur Ks commande seulement le salon ; l'interrupteur Kc commande seulement la chambre. 1) Comment brancher les deux lampes ? 2) Où placer chaque interrupteur ? 3) Combien de nœuds et de boucles comporte le circuit ? 4) Quelles lampes brillent si K et Kc sont fermés et Ks ouvert ?",
              hint: "Les deux pièces doivent fonctionner indépendamment ; demandez-vous ensuite quelle branche est traversée par tous les chemins du courant.",
              solution: [
                "1) Les deux lampes doivent fonctionner indépendamment : on les branche en dérivation, chacune dans sa branche.",
                "2) K doit commander les deux lampes : on le place dans la branche principale, avec la pile. Ks se place dans la branche de la lampe du salon, Kc dans celle de la lampe de la chambre.",
                "3) Les deux branches dérivées se séparent en un nœud et se rejoignent en un autre : il y a 2 nœuds et 2 boucles (une par lampe).",
                "4) K fermé : le courant peut circuler dans la branche principale. Ks ouvert coupe la branche du salon ; Kc fermé laisse passer le courant dans la branche de la chambre.",
                "Réponse : les lampes sont en dérivation, K dans la branche principale, Ks et Kc dans les branches dérivées ; dans la situation demandée, seule la lampe de la chambre brille.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Circuit en série", right: "Tous les dipôles forment une seule boucle avec le générateur" },
              { left: "Nœud", right: "Point où se rejoignent au moins trois fils" },
              { left: "Branche", right: "Portion de circuit comprise entre deux nœuds" },
              { left: "Branche principale", right: "La branche qui contient le générateur" },
              { left: "Dipôles en dérivation", right: "Dipôles placés dans des branches différentes entre les deux mêmes nœuds" },
              { left: "Boucle", right: "Chemin fermé qui part du générateur et y revient" },
            ],
          },
          quiz: [
            {
              q: "Deux lampes sont en série. On dévisse l'une d'elles. Que fait l'autre ?",
              options: ["Elle brille davantage", "Elle brille toujours autant", "Elle s'éteint", "Elle clignote"],
              answer: 2,
              why: "En série, il n'y a qu'une boucle : la lampe dévissée la coupe et le courant ne circule plus dans l'autre lampe.",
            },
            {
              q: "Comment appelle-t-on un point où se rejoignent au moins trois fils ?",
              options: ["Un nœud", "Une borne", "Une branche", "Un dipôle"],
              answer: 0,
              why: "Un nœud est un point de jonction d'au moins trois fils ; une branche relie deux nœuds.",
            },
            {
              q: "Dans un circuit avec dérivations, un interrupteur est placé dans une branche dérivée. Que commande-t-il ?",
              options: ["Tout le circuit, branche principale comprise", "Seulement le dipôle de sa branche", "Rien du tout", "Seulement la pile"],
              answer: 1,
              why: "Une branche dérivée n'est qu'un des chemins possibles : l'interrupteur coupe ce chemin et laisse les autres branches fonctionner.",
            },
            {
              q: "On branche trois lampes identiques en série sur une pile. Comment brille chacune d'elles ?",
              options: ["Plus qu'une lampe seule", "Autant qu'une lampe seule", "Une seule brille, les autres non", "Moins qu'une lampe seule"],
              answer: 3,
              why: "Plus il y a de lampes en série sur une même pile, moins chacune brille.",
            },
            {
              q: "Pourquoi les appareils d'une maison sont-ils branchés en dérivation ?",
              options: ["Pour qu'ils fonctionnent indépendamment", "Pour qu'ils consomment moins", "Parce que c'est le montage le plus court en fil", "Pour qu'ils s'éteignent tous ensemble"],
              answer: 0,
              why: "En dérivation, chaque appareil a sa propre boucle : on peut l'allumer ou l'éteindre sans toucher aux autres.",
            },
          ],
          trap: "Croire que deux lampes sont en dérivation dès qu'elles sont dessinées l'une au-dessus de l'autre : ce qui compte, ce n'est pas le dessin, c'est le nombre de boucles et la présence de nœuds.",
          method: "Pour reconnaître un montage, posez le doigt sur la borne + de la pile et cherchez tous les chemins qui ramènent à la borne - : un seul chemin, c'est un circuit en série ; plusieurs chemins séparés par des nœuds, ce sont des dérivations.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conducteurs-securite',
          title: 'Conducteurs, isolants et dangers du court-circuit',
          minutes: 30,
          objectives: [
            "Distinguer un matériau conducteur d'un matériau isolant à l'aide d'un circuit test.",
            "Identifier un dipôle en court-circuit et prévoir ses conséquences dans un circuit.",
            "Expliquer le danger du court-circuit d'un générateur et le rôle d'un fusible.",
            "Appliquer les règles de sécurité face au courant du secteur.",
          ],
          course: [
            {
              heading: "Conducteurs et isolants",
              paragraphs: [
                "Pour savoir si un matériau laisse passer le courant, on réalise un circuit test : une pile, une lampe et deux fils terminés par des pinces crocodiles. On place l'objet à tester entre les deux pinces. Si la lampe s'allume, le matériau est conducteur ; si elle reste éteinte, il est isolant.",
                "Tous les métaux sont conducteurs : le cuivre, le fer, l'aluminium, l'or, l'argent. La mine d'un crayon à papier (le graphite) conduit aussi. Le plastique, le verre, le caoutchouc, le bois sec, le papier et l'air sont isolants.",
                "L'eau salée conduit le courant, et l'eau du robinet le conduit un peu, car elle contient des substances dissoutes. Le corps humain, qui contient beaucoup d'eau salée, est lui aussi conducteur : c'est ce qui rend le courant du secteur dangereux. Un fil électrique associe les deux familles : une âme en cuivre conductrice, entourée d'une gaine en plastique isolante qui protège celui qui le touche.",
              ],
              box: { label: "Définition", text: "Un conducteur électrique est un matériau qui laisse passer le courant (les métaux, le graphite, l'eau salée, le corps humain). Un isolant électrique ne le laisse pas passer (le plastique, le verre, le caoutchouc, le bois sec, l'air)." },
            },
            {
              heading: "Le court-circuit d'un dipôle",
              paragraphs: [
                "Un dipôle est court-circuité lorsque ses deux bornes sont reliées directement par un fil conducteur. Le courant passe alors par ce fil, qui ne lui oppose presque aucune difficulté, plutôt que par le dipôle : le dipôle court-circuité ne fonctionne plus.",
                "Exemple : deux lampes L1 et L2 sont en série avec une pile. Si l'on relie les deux bornes de L1 par un fil, L1 s'éteint ; L2, elle, brille davantage, car elle se retrouve presque seule dans la boucle avec la pile.",
              ],
              box: { label: "Définition", text: "Un dipôle est en court-circuit lorsque ses deux bornes sont reliées par un fil conducteur. Le courant passe par le fil et le dipôle court-circuité ne fonctionne plus." },
            },
            {
              heading: "Le court-circuit du générateur : un vrai danger",
              paragraphs: [
                "Si les deux bornes du générateur sont reliées directement par un fil, sans aucun récepteur, le générateur est en court-circuit. Le courant devient alors très intense : le fil et la pile chauffent fortement, la pile s'abîme, et l'on risque des brûlures, voire un incendie.",
                "Attention : un court-circuit du générateur peut se cacher dans un circuit avec dérivations. Si l'on relie par un fil les deux bornes d'une lampe placée en dérivation directement sur la pile, ce fil relie aussi les deux bornes de la pile. Toutes les lampes s'éteignent et la pile chauffe.",
                "Pour protéger les installations, on place un fusible ou un disjoncteur dans la branche principale. Le fusible contient un fil métallique fin qui fond quand le courant devient trop intense : il ouvre le circuit. Le disjoncteur coupe automatiquement le courant, et on le réarme une fois le défaut réparé.",
              ],
              box: { label: "Règle", text: "Ne jamais relier directement les deux bornes d'un générateur par un fil. Un court-circuit du générateur provoque un courant très intense qui fait chauffer les fils et peut déclencher un incendie." },
            },
            {
              heading: "Le courant du secteur et la sécurité",
              paragraphs: [
                "Une pile plate porte l'indication 4,5 V (volts) : on peut la manipuler sans danger. Les prises de la maison sont alimentées par le secteur, qui porte l'indication 230 V : ce courant est dangereux pour le corps humain. Le passage du courant dans le corps s'appelle l'électrisation (brûlures, muscles qui se contractent, arrêt du cœur) ; quand il entraîne la mort, on parle d'électrocution.",
                "Quelques règles protègent : ne jamais introduire d'objet dans une prise ; ne jamais toucher un fil dénudé ; ne pas utiliser d'appareil électrique dans le bain ni avec les mains mouillées ; débrancher un appareil avant de le réparer ; ne pas surcharger une multiprise ; ne jamais s'approcher d'une ligne électrique tombée au sol ni faire voler un cerf-volant près d'une ligne.",
              ],
              box: { label: "À retenir", text: "Les expériences de la classe se font avec des piles, jamais avec le secteur. Le corps humain conduit le courant : l'eau aggrave le danger. Fusibles et disjoncteurs protègent l'installation ; les gestes de prudence protègent les personnes." },
            },
          ],
          keyPoints: [
            "Conducteurs : métaux, graphite, eau salée, corps humain. Isolants : plastique, verre, caoutchouc, bois sec, air.",
            "On teste un matériau avec un circuit test : la lampe brille si le matériau est conducteur.",
            "Un dipôle dont les bornes sont reliées par un fil est court-circuité : il ne fonctionne plus.",
            "Le court-circuit du générateur est dangereux : courant intense, échauffement, risque d'incendie.",
            "Un fusible fond et un disjoncteur coupe le courant quand il devient trop intense.",
            "Le secteur (230 V) est dangereux : électrisation, voire électrocution.",
          ],
          example: {
            statement: "Deux lampes identiques L1 et L2 sont branchées en série avec une pile et un interrupteur fermé. 1) On relie les deux bornes de L1 par un fil. Que se passe-t-il ? 2) On retire ce fil et on relie par un fil la borne + de la pile à la borne - de la pile. Que se passe-t-il ?",
            solution: [
              "1) Le fil relie les deux bornes de L1 : L1 est court-circuitée. Le courant passe par le fil et non par L1, qui s'éteint.",
              "L2 reste dans la boucle avec la pile, mais elle y est presque seule : elle brille davantage qu'avant.",
              "2) Le fil relie directement les deux bornes de la pile : le générateur est en court-circuit. Le courant passe par le fil et plus du tout par les lampes, qui s'éteignent toutes les deux.",
              "Le courant dans le fil devient très intense : le fil et la pile chauffent, avec un risque de brûlure ou d'incendie. Il faut retirer ce fil immédiatement.",
              "Réponse : 1) L1 s'éteint et L2 brille plus ; 2) les deux lampes s'éteignent et la pile est en court-circuit, ce qui est dangereux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "On place successivement entre les pinces d'un circuit test : une clé en fer, une règle en plastique, une mine de crayon à papier, une gomme, une pièce de monnaie, un verre, une feuille de papier d'aluminium et un bouchon de liège. Pour quels objets la lampe s'allume-t-elle ?",
              hint: "Repérez les objets faits de métal, puis pensez au matériau particulier qui forme la mine d'un crayon.",
              solution: [
                "La clé (fer), la pièce de monnaie (métal) et le papier d'aluminium (métal) sont conducteurs.",
                "La mine de crayon est en graphite, qui est conducteur.",
                "La règle en plastique, la gomme, le verre et le bouchon de liège sont isolants.",
                "Réponse : la lampe s'allume avec la clé, la mine de crayon, la pièce de monnaie et le papier d'aluminium.",
              ],
            },
            {
              level: 2,
              statement: "Trois lampes identiques L1, L2 et L3 sont branchées en série avec une pile. 1) On relie les bornes de L2 par un fil. Quelles lampes brillent, et comment ? 2) On place maintenant un fil qui part de la borne d'entrée de L1 et arrive à la borne de sortie de L2. Quelles lampes brillent ? 3) Que se passerait-il si un fil reliait la borne d'entrée de L1 à la borne de sortie de L3 ?",
              hint: "Pour chaque fil, repérez quels dipôles se trouvent entre ses deux extrémités : ce sont eux qui sont court-circuités.",
              solution: [
                "1) L2 est court-circuitée : elle s'éteint. L1 et L3 restent dans la boucle avec seulement deux lampes au lieu de trois : elles brillent plus qu'avant.",
                "2) Le fil court-circuite à la fois L1 et L2 : elles s'éteignent. L3 se retrouve seule avec la pile : elle brille encore plus.",
                "3) Le fil court-circuiterait les trois lampes : il relierait directement les deux bornes de la pile. C'est un court-circuit du générateur : toutes les lampes s'éteignent et le fil chauffe dangereusement.",
                "Réponse : 1) L1 et L3 brillent plus ; 2) seule L3 brille, encore plus fort ; 3) court-circuit dangereux de la pile.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Deux lampes L1 et L2 sont branchées en dérivation directement sur une pile (il n'y a aucun autre dipôle dans la branche principale). Un élève relie les deux bornes de L2 par un fil. 1) Que pense-t-il observer ? 2) Que se passe-t-il réellement ? Expliquer. 3) On ajoute un fusible dans la branche principale. Quel est son rôle dans cette situation ? 4) Pourquoi un fil électrique de la maison est-il en cuivre entouré de plastique ?",
              hint: "Les deux bornes de L2 sont reliées aux mêmes nœuds que les bornes de la pile : suivez ce fil et regardez à quoi il est vraiment branché.",
              solution: [
                "1) L'élève pense que seule L2 va s'éteindre et que L1, dans une autre branche, va continuer de briller.",
                "2) En réalité, les bornes de L2 sont reliées aux deux nœuds, eux-mêmes reliés directement aux bornes de la pile. Le fil relie donc la borne + à la borne - de la pile : le générateur est en court-circuit.",
                "Le courant passe par le fil et plus par les lampes : L1 et L2 s'éteignent toutes les deux. Le courant devient très intense, la pile et le fil chauffent.",
                "3) Le fusible, traversé par ce courant trop intense, fond et ouvre le circuit : le courant s'arrête, ce qui évite l'échauffement et le risque d'incendie.",
                "4) Le cuivre est un métal conducteur : il transporte le courant. Le plastique est isolant : il évite qu'une personne qui touche le fil soit traversée par le courant, et qu'un fil touche un autre fil (court-circuit).",
                "Réponse : les deux lampes s'éteignent car la pile est en court-circuit ; le fusible protège le circuit en fondant ; la gaine isolante protège les personnes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Attention aux idées reçues.",
            statements: [
              { text: "Tous les métaux sont des conducteurs électriques.", true: true, why: "Le cuivre, le fer, l'aluminium, l'or et tous les autres métaux laissent passer le courant." },
              { text: "Le corps humain est un isolant.", true: false, why: "Le corps contient beaucoup d'eau salée : il conduit le courant, d'où le danger du secteur." },
              { text: "Une lampe court-circuitée s'éteint.", true: true, why: "Le courant passe par le fil qui relie ses bornes et ne la traverse plus." },
              { text: "Court-circuiter une pile la fait durer plus longtemps.", true: false, why: "Au contraire : le courant devient très intense, la pile chauffe et s'abîme rapidement." },
              { text: "L'air est un isolant électrique.", true: true, why: "C'est pour cela qu'un interrupteur ouvert, qui laisse une couche d'air dans le circuit, coupe le courant." },
              { text: "Un fusible sert à rendre la lampe plus lumineuse.", true: false, why: "Le fusible protège le circuit : son fil fin fond et coupe le courant quand celui-ci devient trop intense." },
              { text: "L'eau du robinet peut conduire le courant.", true: true, why: "Elle contient des substances dissoutes qui lui permettent de conduire un peu le courant : il ne faut jamais mêler eau et appareils électriques." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces matériaux est un conducteur électrique ?",
              options: ["Le cuivre", "Le plastique", "Le verre", "Le caoutchouc"],
              answer: 0,
              why: "Le cuivre est un métal, donc un conducteur ; les trois autres sont des isolants.",
            },
            {
              q: "Les deux bornes d'une lampe sont reliées par un fil. Comment dit-on ?",
              options: ["La lampe est en série", "La lampe est grillée", "La lampe est court-circuitée", "La lampe est branchée en dérivation"],
              answer: 2,
              why: "Un dipôle dont les deux bornes sont reliées par un fil conducteur est court-circuité.",
            },
            {
              q: "Pourquoi le court-circuit d'une pile est-il dangereux ?",
              options: ["Les lampes du circuit risquent toutes d'exploser", "La pile se recharge trop vite", "Le courant s'inverse", "Le courant très intense fait chauffer les fils"],
              answer: 3,
              why: "Sans récepteur, le courant devient très intense : les fils et la pile chauffent, avec un risque de brûlure et d'incendie.",
            },
            {
              q: "Que fait un fusible quand le courant devient trop intense ?",
              options: ["Il augmente le courant", "Son fil fond et ouvre le circuit", "Il allume une petite lampe témoin rouge", "Il change le sens du courant"],
              answer: 1,
              why: "Le fil métallique fin du fusible fond : le circuit est ouvert et le courant s'arrête.",
            },
            {
              q: "Quelle situation est dangereuse ?",
              options: ["Manipuler une pile de 4,5 V", "Tester une gomme dans un circuit à pile", "Utiliser un sèche-cheveux dans le bain", "Dévisser une lampe d'un circuit à pile"],
              answer: 2,
              why: "Le sèche-cheveux est branché sur le secteur (230 V) ; l'eau et le corps conduisent le courant, ce qui expose à l'électrocution.",
            },
          ],
          trap: "Penser qu'un fil branché sur les bornes d'une lampe en dérivation ne court-circuite que cette lampe : si cette branche est reliée directement à la pile, c'est la pile elle-même qui est en court-circuit.",
          method: "Pour repérer un court-circuit, suivez chaque fil ajouté et regardez quels dipôles se trouvent entre ses deux extrémités : ce sont eux qui sont court-circuités. Si la pile en fait partie sans aucun récepteur, le montage est dangereux.",
        },
      ],
    },
    /* ==================================================================== */
    /* SOURCES ET CONVERSIONS D'ÉNERGIE                                       */
    /* ==================================================================== */
    {
      id: 'energie-conversions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'formes-energie',
          title: 'Les formes et les sources d\'énergie',
          minutes: 25,
          objectives: [
            "Identifier les différentes formes d'énergie : cinétique, de position, thermique, électrique, lumineuse, chimique, nucléaire.",
            "Distinguer une source d'énergie d'une forme d'énergie.",
            "Citer l'unité de l'énergie, le joule, et utiliser le kilojoule.",
          ],
          course: [
            {
              heading: "Qu'est-ce que l'énergie ?",
              paragraphs: [
                "Pour mettre un vélo en mouvement, chauffer une casserole d'eau, éclairer une pièce ou faire fonctionner un téléphone, il faut de l'énergie. L'énergie est ce qui permet de produire un mouvement, de chauffer, d'éclairer, ou plus généralement de faire fonctionner un objet ou de faire vivre un être vivant.",
                "L'énergie se mesure en joules, de symbole J, du nom du physicien anglais James Prescott Joule (XIXe siècle). Un joule est une petite quantité d'énergie : on utilise souvent le kilojoule (1 kJ = 1 000 J). Sur les emballages alimentaires, l'énergie apportée par les aliments est indiquée en kilojoules (kJ) et en kilocalories (kcal).",
              ],
              box: { label: "Définition", text: "L'énergie est ce qui permet de produire un mouvement, de chauffer, d'éclairer ou de faire fonctionner un appareil. Son unité est le joule (J). 1 kJ = 1 000 J." },
            },
            {
              heading: "Les formes d'énergie",
              paragraphs: [
                "L'énergie se présente sous plusieurs formes. L'énergie cinétique est liée au mouvement : un ballon qui roule, une voiture qui avance, le vent qui souffle en possèdent ; plus un objet va vite, plus il en a. L'énergie de position (on dit aussi énergie potentielle) est liée à la hauteur : un rocher au sommet d'une falaise ou l'eau retenue en haut d'un barrage en possèdent, et peuvent la libérer en tombant.",
                "L'énergie thermique est liée à la température : un radiateur chaud ou une tasse de thé en cèdent à ce qui les entoure. L'énergie électrique est transportée par le courant électrique. L'énergie lumineuse (on dit aussi rayonnante) est transportée par la lumière, par exemple celle du Soleil.",
                "L'énergie chimique est stockée dans la matière et libérée par une transformation chimique : on la trouve dans les aliments, le bois, l'essence, le gaz ou les piles. Enfin, l'énergie nucléaire est stockée au cœur (dans le noyau) de certains atomes comme l'uranium ; elle est libérée dans les centrales nucléaires et au cœur du Soleil.",
              ],
              box: { label: "À retenir", text: "Sept formes d'énergie : cinétique (mouvement), de position (hauteur), thermique (température), électrique (courant), lumineuse (lumière), chimique (aliments, combustibles, piles), nucléaire (noyau de certains atomes)." },
            },
            {
              heading: "Les sources d'énergie",
              paragraphs: [
                "Une source d'énergie (on dit aussi une ressource, ou un réservoir) est ce dans quoi l'être humain puise l'énergie dont il a besoin : le Soleil, le vent, l'eau des rivières et des barrages, le pétrole, le charbon, le gaz naturel, l'uranium, le bois, la chaleur du sous-sol. Pour notre corps, la source d'énergie, ce sont les aliments.",
                "Il ne faut pas confondre la source et la forme. Le pétrole est une source ; l'énergie qu'il contient est de forme chimique. Le vent est une source ; son énergie est cinétique, car c'est de l'air en mouvement. Le Soleil est une source ; il nous envoie de l'énergie lumineuse.",
              ],
              box: { label: "Repère", text: "Source → forme de l'énergie qu'elle contient : pétrole, charbon, gaz, bois, aliments → chimique ; vent, cours d'eau → cinétique ; eau d'un barrage → de position ; Soleil → lumineuse ; uranium → nucléaire." },
            },
            {
              heading: "L'énergie passe d'un objet à un autre",
              paragraphs: [
                "L'énergie ne reste pas immobile : elle se transfère d'un objet à un autre. La plaque de cuisson transfère de l'énergie thermique à la casserole ; la pile transfère de l'énergie électrique à la lampe ; le Soleil transfère de l'énergie lumineuse à la Terre.",
                "Elle peut aussi changer de forme : c'est une conversion. Dans une lampe, l'énergie électrique devient de l'énergie lumineuse. La leçon suivante étudie ces conversions et montre que l'énergie ne disparaît jamais : elle change seulement de forme.",
              ],
            },
          ],
          keyPoints: [
            "L'énergie permet de mettre en mouvement, de chauffer, d'éclairer, de faire fonctionner.",
            "Unité : le joule (J) ; 1 kJ = 1 000 J.",
            "Formes : cinétique, de position, thermique, électrique, lumineuse, chimique, nucléaire.",
            "Une source (pétrole, vent, Soleil...) n'est pas une forme : le pétrole contient de l'énergie chimique.",
            "Plus un objet va vite, plus son énergie cinétique est grande ; plus il est haut, plus son énergie de position est grande.",
          ],
          example: {
            statement: "Lucas mange une banane au goûter. Il grimpe ensuite l'échelle d'un toboggan, s'assoit en haut puis glisse jusqu'en bas ; en arrivant, il sent que son pantalon a un peu chauffé. Nommer la forme d'énergie mise en jeu à chaque étape.",
            solution: [
              "La banane est un aliment : elle apporte à Lucas de l'énergie chimique.",
              "En montant l'échelle, Lucas utilise cette énergie grâce à ses muscles. Une fois assis en haut, il possède de l'énergie de position, car il est en hauteur.",
              "Pendant la glissade, il prend de la vitesse : son énergie de position diminue et son énergie cinétique augmente.",
              "Le frottement contre le toboggan fait chauffer le pantalon : une partie de l'énergie devient de l'énergie thermique.",
              "Réponse : énergie chimique (banane), puis énergie de position (en haut), énergie cinétique (glissade) et énergie thermique (échauffement).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donner la forme d'énergie principale mise en jeu dans chaque cas : a) une balle qui roule ; b) l'eau chaude d'une bouilloire ; c) une pile neuve ; d) la lumière d'une lampe ; e) un pot de fleurs posé sur un balcon au quatrième étage ; f) le combustible d'une centrale nucléaire.",
              hint: "Pour chaque cas, demandez-vous : y a-t-il un mouvement, une hauteur, une température élevée, de la lumière, une substance qui peut réagir, ou des noyaux d'atomes ?",
              solution: [
                "a) La balle est en mouvement : énergie cinétique.",
                "b) L'eau est chaude : énergie thermique.",
                "c) La pile contient des substances qui réagissent : énergie chimique.",
                "d) La lumière transporte de l'énergie lumineuse.",
                "e) Le pot est en hauteur : énergie de position.",
                "f) L'uranium des centrales contient de l'énergie nucléaire.",
                "Réponse : cinétique, thermique, chimique, lumineuse, de position, nucléaire.",
              ],
            },
            {
              level: 2,
              statement: "Voici une liste de mots : le Soleil, l'énergie thermique, le vent, le charbon, l'énergie cinétique, le bois, l'énergie lumineuse, l'uranium. 1) Séparer les sources d'énergie et les formes d'énergie. 2) Pour chaque source, indiquer la forme d'énergie qu'elle contient ou qu'elle fournit.",
              hint: "Une source est une chose concrète que l'on peut montrer du doigt ; une forme commence par « l'énergie ».",
              solution: [
                "1) Sources : le Soleil, le vent, le charbon, le bois, l'uranium. Formes : l'énergie thermique, l'énergie cinétique, l'énergie lumineuse.",
                "2) Le Soleil fournit de l'énergie lumineuse.",
                "Le vent, de l'air en mouvement, possède de l'énergie cinétique.",
                "Le charbon et le bois contiennent de l'énergie chimique, libérée quand ils brûlent.",
                "L'uranium contient de l'énergie nucléaire.",
                "Réponse : cinq sources (Soleil, vent, charbon, bois, uranium) et trois formes (thermique, cinétique, lumineuse).",
              ],
            },
            {
              level: 3,
              statement: "Défi. L'étiquette d'une barre de céréales indique 420 kJ pour une barre (données fictives). On admet, pour simplifier, qu'une heure de marche demande 840 kJ à un élève (données fictives). 1) Sous quelle forme l'énergie est-elle stockée dans la barre ? 2) Exprimer l'énergie de la barre en joules. 3) Combien de minutes de marche cette barre permet-elle ? 4) En marchant, sous quelle forme l'élève utilise-t-il cette énergie, et pourquoi a-t-il chaud ?",
              hint: "1 kJ = 1 000 J. Pour la question 3, comparez 420 kJ à 840 kJ : quelle fraction d'heure obtenez-vous ?",
              solution: [
                "1) La barre est un aliment : l'énergie y est stockée sous forme chimique.",
                "2) 420 kJ = 420 × 1 000 J = 420 000 J.",
                "3) 420 est la moitié de 840 (840 ÷ 420 = 2) : la barre permet une demi-heure de marche, soit 30 minutes.",
                "4) En marchant, l'élève se met en mouvement : une partie de l'énergie devient de l'énergie cinétique. Une autre partie devient de l'énergie thermique, ce qui explique qu'il ait chaud.",
                "Réponse : énergie chimique ; 420 000 J ; 30 minutes de marche ; énergie cinétique et énergie thermique.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque forme d'énergie à une situation où on la rencontre.",
            pairs: [
              { left: "Énergie cinétique", right: "Une voiture qui roule" },
              { left: "Énergie de position", right: "L'eau retenue en haut d'un barrage" },
              { left: "Énergie thermique", right: "Une tasse de chocolat chaud" },
              { left: "Énergie chimique", right: "Le gaz de la cuisinière" },
              { left: "Énergie lumineuse", right: "Les rayons du Soleil" },
              { left: "Énergie nucléaire", right: "Le combustible d'une centrale à l'uranium" },
            ],
          },
          quiz: [
            {
              q: "Quelle est l'unité de l'énergie ?",
              options: ["Le volt", "Le mètre", "Le kilogramme", "Le joule"],
              answer: 3,
              why: "L'énergie se mesure en joules (J), du nom du physicien James Prescott Joule.",
            },
            {
              q: "Quelle forme d'énergie possède un ballon qui roule ?",
              options: ["De l'énergie nucléaire", "De l'énergie cinétique", "De l'énergie lumineuse", "Aucune"],
              answer: 1,
              why: "L'énergie cinétique est liée au mouvement : tout objet qui se déplace en possède.",
            },
            {
              q: "Le pétrole est...",
              options: ["une source d'énergie", "une forme d'énergie", "une unité de mesure de l'énergie"],
              answer: 0,
              why: "Le pétrole est une source dans laquelle on puise de l'énergie ; l'énergie qu'il contient est de forme chimique.",
            },
            {
              q: "Combien de joules y a-t-il dans 3 kJ ?",
              options: ["30 J", "300 J", "3 000 J", "0,003 J"],
              answer: 2,
              why: "1 kJ = 1 000 J, donc 3 kJ = 3 × 1 000 = 3 000 J.",
            },
            {
              q: "Sous quelle forme l'énergie est-elle stockée dans une pile ?",
              options: ["Thermique", "Chimique", "Cinétique", "Lumineuse"],
              answer: 1,
              why: "Une pile contient des substances qui réagissent entre elles : l'énergie y est stockée sous forme chimique, puis cédée sous forme électrique.",
            },
          ],
          trap: "Confondre une source d'énergie et une forme d'énergie : « le vent » ou « le pétrole » sont des sources, alors que « l'énergie cinétique » ou « l'énergie chimique » sont des formes.",
          method: "Pour trouver la forme d'une énergie, posez-vous une question simple : l'objet bouge-t-il (cinétique) ? est-il en hauteur (de position) ? est-il chaud (thermique) ? contient-il une substance qui peut brûler ou réagir (chimique) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chaine-energie',
          title: 'La chaîne d\'énergie d\'un appareil',
          minutes: 30,
          objectives: [
            "Identifier la forme d'énergie reçue et les formes d'énergie cédées par un convertisseur.",
            "Représenter un diagramme de conversion d'énergie.",
            "Utiliser la conservation de l'énergie pour calculer une énergie perdue.",
            "Décrire une chaîne de plusieurs convertisseurs, par exemple dans une centrale électrique.",
          ],
          course: [
            {
              heading: "Les convertisseurs d'énergie",
              paragraphs: [
                "Une lampe reçoit de l'énergie électrique et produit de la lumière : elle convertit de l'énergie électrique en énergie lumineuse. Un appareil qui reçoit de l'énergie sous une forme et la cède sous une autre forme s'appelle un convertisseur d'énergie.",
                "Les exemples sont partout. Un moteur électrique convertit de l'énergie électrique en énergie cinétique (il fait tourner une roue, une hélice). Un radiateur électrique convertit de l'énergie électrique en énergie thermique. Un panneau solaire photovoltaïque convertit de l'énergie lumineuse en énergie électrique. Une pile convertit de l'énergie chimique en énergie électrique. Vos muscles convertissent l'énergie chimique des aliments en énergie cinétique.",
              ],
              box: { label: "Définition", text: "Un convertisseur d'énergie est un objet qui reçoit de l'énergie sous une forme et la cède sous une ou plusieurs autres formes." },
            },
            {
              heading: "Le diagramme de conversion",
              paragraphs: [
                "On représente une conversion par un diagramme : le nom du convertisseur est écrit dans un cadre ; une flèche entrante porte la forme d'énergie reçue ; des flèches sortantes portent les formes d'énergie cédées.",
                "Un convertisseur cède presque toujours plusieurs formes d'énergie. L'énergie utile est celle pour laquelle on utilise l'appareil ; le reste est de l'énergie perdue (on dit aussi dissipée), le plus souvent sous forme thermique. Une lampe à incandescence (l'ancienne ampoule à filament) chauffe beaucoup : la plus grande partie de l'énergie électrique reçue devient de l'énergie thermique, et seule une petite partie devient lumineuse. Une lampe à DEL chauffe beaucoup moins pour la même lumière : elle gaspille moins d'énergie.",
              ],
              box: { label: "Repère", text: "Diagramme d'une lampe : énergie électrique → [ lampe ] → énergie lumineuse (utile) et énergie thermique (perdue)." },
            },
            {
              heading: "L'énergie se conserve",
              paragraphs: [
                "L'énergie ne se crée pas à partir de rien et ne disparaît jamais : elle change seulement de forme. Dans un convertisseur, l'énergie reçue est donc égale à la somme des énergies cédées.",
                "Exemple : un moteur reçoit 100 J d'énergie électrique et cède 70 J d'énergie cinétique. Les 30 J manquants n'ont pas disparu : ils ont été cédés sous forme d'énergie thermique, car le moteur chauffe (100 - 70 = 30 J). Ces 30 J sont perdus pour l'utilisateur, mais ils existent toujours, sous forme de chaleur dans l'air ambiant.",
              ],
              box: { label: "Propriété", text: "Conservation de l'énergie : énergie reçue = énergie utile + énergie perdue. Énergie perdue = énergie reçue - énergie utile." },
            },
            {
              heading: "Une chaîne de convertisseurs : la centrale hydroélectrique",
              paragraphs: [
                "Souvent, l'énergie passe par plusieurs convertisseurs à la suite : c'est une chaîne d'énergie. Dans une centrale hydroélectrique, l'eau retenue derrière un barrage possède de l'énergie de position. En descendant dans une conduite, elle prend de la vitesse : son énergie devient cinétique. L'eau fait tourner une turbine, qui entraîne un alternateur. L'alternateur convertit l'énergie cinétique de rotation en énergie électrique, transportée par des lignes jusqu'aux maisons.",
                "L'alternateur est présent dans presque toutes les centrales électriques : à charbon, à gaz, nucléaires, éoliennes ou hydroélectriques. Seuls les panneaux photovoltaïques produisent de l'électricité sans pièce qui tourne. La dynamo d'un vélo est un petit alternateur : elle convertit l'énergie cinétique de la roue en énergie électrique pour la lampe.",
              ],
            },
          ],
          keyPoints: [
            "Un convertisseur reçoit de l'énergie sous une forme et la cède sous d'autres formes.",
            "Diagramme : énergie reçue → [ convertisseur ] → énergie utile + énergie perdue.",
            "L'énergie perdue est le plus souvent de l'énergie thermique.",
            "L'énergie se conserve : énergie reçue = énergie utile + énergie perdue.",
            "Dans une centrale, un alternateur entraîné par une turbine produit l'énergie électrique.",
          ],
          example: {
            statement: "Le moteur d'un ventilateur reçoit 50 J d'énergie électrique chaque seconde. Il cède 40 J d'énergie cinétique aux pales chaque seconde (données fictives). 1) Décrire le diagramme de conversion du moteur. 2) Calculer l'énergie perdue chaque seconde et donner sa forme.",
            solution: [
              "1) Le convertisseur est le moteur. Il reçoit de l'énergie électrique : une flèche entrante « énergie électrique ».",
              "Il cède de l'énergie cinétique aux pales : c'est l'énergie utile, car on veut faire tourner les pales. Il cède aussi de l'énergie thermique, car un moteur chauffe : c'est l'énergie perdue.",
              "Diagramme : énergie électrique → [ moteur ] → énergie cinétique (utile) et énergie thermique (perdue).",
              "2) Conservation de l'énergie : énergie perdue = énergie reçue - énergie utile = 50 - 40 = 10 J.",
              "Réponse : chaque seconde, le moteur perd 10 J sous forme d'énergie thermique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque convertisseur, donner la forme d'énergie reçue et la forme d'énergie utile cédée : a) un radiateur électrique ; b) un panneau solaire photovoltaïque ; c) une pile ; d) un moteur électrique ; e) une éolienne.",
              hint: "Demandez-vous d'abord à quoi sert l'appareil (énergie utile), puis ce qu'il faut lui fournir pour qu'il fonctionne (énergie reçue).",
              solution: [
                "a) Radiateur : reçoit de l'énergie électrique, cède de l'énergie thermique.",
                "b) Panneau solaire : reçoit de l'énergie lumineuse, cède de l'énergie électrique.",
                "c) Pile : stocke de l'énergie chimique, cède de l'énergie électrique.",
                "d) Moteur : reçoit de l'énergie électrique, cède de l'énergie cinétique.",
                "e) Éolienne : reçoit l'énergie cinétique du vent, cède de l'énergie électrique.",
                "Réponse : électrique → thermique ; lumineuse → électrique ; chimique → électrique ; électrique → cinétique ; cinétique → électrique.",
              ],
            },
            {
              level: 2,
              statement: "On compare deux lampes qui éclairent autant l'une que l'autre (données fictives). La lampe à incandescence reçoit 600 J d'énergie électrique et cède 30 J d'énergie lumineuse. La lampe à DEL reçoit 100 J d'énergie électrique et cède aussi 30 J d'énergie lumineuse. 1) Calculer l'énergie thermique cédée par chaque lampe. 2) Combien de fois plus d'énergie électrique la lampe à incandescence demande-t-elle ? 3) Quelle lampe faut-il choisir pour économiser l'énergie ?",
              hint: "Utilisez la conservation de l'énergie : énergie perdue = énergie reçue - énergie utile.",
              solution: [
                "1) Lampe à incandescence : 600 - 30 = 570 J d'énergie thermique.",
                "Lampe à DEL : 100 - 30 = 70 J d'énergie thermique.",
                "2) 600 ÷ 100 = 6 : la lampe à incandescence demande 6 fois plus d'énergie électrique pour la même lumière.",
                "3) La lampe à DEL produit la même lumière en perdant beaucoup moins d'énergie thermique.",
                "Réponse : 570 J et 70 J ; 6 fois plus ; il faut choisir la lampe à DEL.",
              ],
            },
            {
              level: 3,
              statement: "Défi. La nuit, Inès éclaire sa route grâce à la dynamo de son vélo. Chaque seconde (données fictives) : la roue fournit 10 J d'énergie cinétique à la dynamo ; la dynamo cède 6 J d'énergie électrique à la lampe ; la lampe cède 1 J d'énergie lumineuse. 1) Décrire la chaîne d'énergie complète, depuis le petit-déjeuner d'Inès jusqu'à la lumière. 2) Calculer l'énergie thermique perdue chaque seconde par la dynamo, puis par la lampe. 3) Vérifier que l'énergie se conserve sur l'ensemble dynamo et lampe.",
              hint: "Commencez par la source d'énergie d'Inès elle-même : ses aliments. Puis appliquez la conservation de l'énergie à chaque convertisseur, l'un après l'autre.",
              solution: [
                "1) Les aliments apportent de l'énergie chimique ; les muscles d'Inès la convertissent en énergie cinétique (le vélo et la roue tournent) ; la dynamo convertit l'énergie cinétique en énergie électrique ; la lampe convertit l'énergie électrique en énergie lumineuse. Chaque convertisseur perd aussi de l'énergie thermique.",
                "2) Dynamo : énergie perdue = 10 - 6 = 4 J d'énergie thermique.",
                "Lampe : énergie perdue = 6 - 1 = 5 J d'énergie thermique.",
                "3) Énergies cédées par l'ensemble : 1 J (lumineuse) + 4 J + 5 J (thermique) = 10 J, égal aux 10 J reçus de la roue.",
                "Réponse : chimique → cinétique → électrique → lumineuse ; 4 J perdus par la dynamo et 5 J par la lampe ; 1 + 4 + 5 = 10 J, l'énergie se conserve.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre la chaîne d'énergie d'une lampe de jardin solaire.",
            items: [
              "Le Soleil envoie de l'énergie lumineuse.",
              "Le panneau solaire convertit l'énergie lumineuse en énergie électrique.",
              "Pendant la journée, la batterie stocke cette énergie sous forme chimique.",
              "La nuit venue, la batterie cède de l'énergie électrique.",
              "La DEL convertit l'énergie électrique en énergie lumineuse et éclaire le jardin.",
            ],
          },
          quiz: [
            {
              q: "Quelle conversion réalise un panneau solaire photovoltaïque ?",
              options: ["Électrique en lumineuse", "Lumineuse en électrique", "Thermique en cinétique", "Chimique en électrique"],
              answer: 1,
              why: "Le panneau photovoltaïque reçoit la lumière du Soleil et produit du courant : il convertit l'énergie lumineuse en énergie électrique.",
            },
            {
              q: "Sous quelle forme est le plus souvent l'énergie perdue par un convertisseur ?",
              options: ["Thermique", "Nucléaire", "De position", "Chimique"],
              answer: 0,
              why: "Presque tous les appareils chauffent en fonctionnant : l'énergie perdue est le plus souvent de l'énergie thermique.",
            },
            {
              q: "Un moteur reçoit 200 J d'énergie électrique et cède 150 J d'énergie cinétique. Quelle énergie perd-il ?",
              options: ["350 J", "150 J", "50 J", "0 J"],
              answer: 2,
              why: "Énergie perdue = énergie reçue - énergie utile = 200 - 150 = 50 J.",
            },
            {
              q: "Que convertit l'alternateur d'une centrale ?",
              options: ["De l'énergie électrique en énergie de position", "De l'énergie lumineuse en énergie thermique", "De l'énergie chimique en énergie lumineuse", "De l'énergie cinétique en énergie électrique"],
              answer: 3,
              why: "Entraîné en rotation par une turbine, l'alternateur convertit cette énergie cinétique en énergie électrique.",
            },
            {
              q: "Que devient l'énergie « perdue » par une lampe ?",
              options: ["Elle chauffe l'air autour", "Elle disparaît", "Elle retourne dans la pile", "Elle devient de l'énergie nucléaire"],
              answer: 0,
              why: "L'énergie ne disparaît jamais : l'énergie perdue est cédée sous forme thermique à l'air autour de la lampe.",
            },
          ],
          trap: "Croire que l'énergie perdue a disparu : elle existe toujours, mais sous une forme inutile pour l'utilisateur, le plus souvent de l'énergie thermique cédée à l'air.",
          method: "Pour tracer un diagramme de conversion, commencez par la question « à quoi sert l'appareil ? » : la réponse donne l'énergie utile. Vérifiez ensuite que l'énergie reçue est égale à la somme des énergies cédées.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'energies-renouvelables',
          title: 'Énergies renouvelables et non renouvelables',
          minutes: 30,
          objectives: [
            "Distinguer les sources d'énergie renouvelables et non renouvelables.",
            "Décrire comment l'électricité est produite dans différents types de centrales.",
            "Comparer les avantages et les inconvénients de différentes sources d'énergie.",
            "Proposer des gestes pour économiser l'énergie.",
          ],
          course: [
            {
              heading: "Renouvelable ou non renouvelable ?",
              paragraphs: [
                "Une source d'énergie est renouvelable lorsqu'elle se reconstitue naturellement et rapidement, à l'échelle d'une vie humaine : on peut l'utiliser sans l'épuiser. C'est le cas du Soleil, du vent, des cours d'eau, des marées, de la chaleur du sous-sol (la géothermie) et de la biomasse (le bois, les déchets végétaux), à condition de replanter ce que l'on coupe.",
                "Une source d'énergie est non renouvelable lorsque son stock sur Terre est limité et ne se reconstitue pas à notre échelle. Le pétrole, le charbon et le gaz naturel sont des combustibles fossiles : ils se sont formés à partir de restes d'êtres vivants, enfouis pendant des millions d'années. L'uranium, utilisé dans les centrales nucléaires, est un minerai extrait du sol : son stock est lui aussi limité.",
              ],
              box: { label: "Définition", text: "Source renouvelable : elle se reconstitue rapidement à l'échelle humaine (Soleil, vent, eau, marées, géothermie, biomasse). Source non renouvelable : son stock est limité et ne se reconstitue pas à notre échelle (pétrole, charbon, gaz naturel, uranium)." },
            },
            {
              heading: "Comment produit-on l'électricité ?",
              paragraphs: [
                "Dans une centrale thermique à flamme, on brûle du charbon, du gaz ou du fioul : l'énergie thermique produite fait bouillir de l'eau, la vapeur fait tourner une turbine qui entraîne un alternateur. Une centrale nucléaire fonctionne sur le même principe, mais la chaleur vient de réactions nucléaires dans l'uranium. En France, la plus grande partie de l'électricité est produite dans des centrales nucléaires.",
                "Dans un barrage, c'est l'eau qui fait tourner la turbine ; dans une éolienne, c'est le vent qui fait tourner les pales reliées à l'alternateur. Les panneaux solaires photovoltaïques, eux, convertissent directement la lumière en électricité, sans turbine.",
              ],
            },
            {
              heading: "Avantages et inconvénients",
              paragraphs: [
                "Brûler des combustibles fossiles rejette dans l'air beaucoup de dioxyde de carbone, un gaz à effet de serre responsable du réchauffement climatique, ainsi que des fumées polluantes. De plus, ces réserves finiront par s'épuiser.",
                "Une centrale nucléaire rejette très peu de dioxyde de carbone en fonctionnant, mais elle produit des déchets radioactifs, dangereux pendant très longtemps, et demande une grande surveillance pour éviter les accidents.",
                "Les sources renouvelables ne s'épuisent pas et rejettent peu de dioxyde de carbone en fonctionnant. Mais le Soleil et le vent sont intermittents : il n'y a pas de soleil la nuit, et le vent ne souffle pas toujours. Il faut donc stocker l'énergie ou compléter avec d'autres centrales. Les éoliennes, les barrages et les panneaux occupent aussi de la place et modifient les paysages et les milieux naturels.",
              ],
              box: { label: "À retenir", text: "Aucune source d'énergie n'est parfaite. Fossiles : épuisables et responsables du réchauffement climatique. Nucléaire : peu de dioxyde de carbone mais des déchets radioactifs. Renouvelables : inépuisables mais souvent intermittentes." },
            },
            {
              heading: "Économiser l'énergie",
              paragraphs: [
                "L'énergie la plus propre est celle que l'on ne consomme pas. On peut d'abord éviter le gaspillage (la sobriété) : éteindre la lumière en quittant une pièce, ne pas laisser les appareils en veille, baisser un peu le chauffage, préférer la marche, le vélo ou les transports en commun pour les trajets courts.",
                "On peut aussi choisir des appareils qui perdent moins d'énergie (l'efficacité) : des lampes à DEL plutôt que des lampes à incandescence, des maisons bien isolées qui gardent la chaleur en hiver.",
              ],
            },
          ],
          keyPoints: [
            "Renouvelables : Soleil, vent, eau, marées, géothermie, biomasse ; elles se reconstituent rapidement.",
            "Non renouvelables : pétrole, charbon, gaz naturel (fossiles) et uranium ; leur stock est limité.",
            "La plupart des centrales utilisent une turbine qui entraîne un alternateur.",
            "Les combustibles fossiles rejettent du dioxyde de carbone, qui contribue au réchauffement climatique.",
            "Le Soleil et le vent sont intermittents : il faut stocker l'énergie ou la compléter.",
            "Sobriété et efficacité permettent d'économiser l'énergie.",
          ],
          example: {
            statement: "Classer les sources suivantes en renouvelables et non renouvelables, en justifiant : le charbon, le vent, l'uranium, le bois d'une forêt replantée, le gaz naturel, les marées.",
            solution: [
              "Le charbon et le gaz naturel sont des combustibles fossiles, formés en des millions d'années : non renouvelables.",
              "L'uranium est un minerai dont le stock est limité : non renouvelable.",
              "Le vent et les marées se reproduisent sans cesse, sous l'effet du Soleil pour le vent et de la Lune pour les marées : renouvelables.",
              "Le bois est renouvelable si la forêt est replantée, car les arbres repoussent en quelques dizaines d'années.",
              "Réponse : renouvelables : vent, marées, bois d'une forêt replantée ; non renouvelables : charbon, gaz naturel, uranium.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Parmi les sources suivantes, lesquelles sont renouvelables ? Le Soleil, le pétrole, la chaleur du sous-sol, le charbon, un cours d'eau, l'uranium.",
              hint: "Demandez-vous si la source peut s'épuiser à l'échelle d'une vie humaine.",
              solution: [
                "Le Soleil, la chaleur du sous-sol (géothermie) et un cours d'eau se renouvellent sans cesse.",
                "Le pétrole et le charbon sont des combustibles fossiles, l'uranium est un minerai : leurs stocks sont limités.",
                "Réponse : le Soleil, la chaleur du sous-sol et le cours d'eau sont renouvelables ; le pétrole, le charbon et l'uranium ne le sont pas.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque installation, donner la source d'énergie utilisée, dire si elle est renouvelable, et indiquer si l'installation rejette beaucoup de dioxyde de carbone en fonctionnant : a) une centrale à charbon ; b) une éolienne ; c) une centrale nucléaire ; d) un barrage hydroélectrique.",
              hint: "Seules les installations qui brûlent un combustible rejettent beaucoup de dioxyde de carbone en fonctionnant.",
              solution: [
                "a) Centrale à charbon : source charbon, non renouvelable ; elle brûle du charbon et rejette beaucoup de dioxyde de carbone.",
                "b) Éolienne : source vent, renouvelable ; peu de rejets en fonctionnant.",
                "c) Centrale nucléaire : source uranium, non renouvelable ; très peu de dioxyde de carbone, mais des déchets radioactifs.",
                "d) Barrage : source eau, renouvelable ; peu de rejets en fonctionnant.",
                "Réponse : seule la centrale à charbon rejette beaucoup de dioxyde de carbone ; l'éolienne et le barrage utilisent des sources renouvelables.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un habitant affirme : « Avec mes panneaux solaires, ma maison aura de l'électricité à toute heure, sans rien d'autre. » Données fictives : la maison consomme 12 kWh par jour (le kWh est l'unité d'énergie des factures d'électricité), dont 5 kWh la nuit. Les panneaux produisent 20 kWh un jour d'été ensoleillé et 4 kWh un jour d'hiver nuageux. 1) Un jour d'été, la production suffit-elle sur la journée entière ? Combien reste-t-il en trop ? 2) Les panneaux produisent-ils la nuit ? Quelle quantité faut-il stocker pour la nuit ? 3) Un jour d'hiver nuageux, combien manque-t-il ? 4) Que penser de l'affirmation de l'habitant ?",
              hint: "Comparez chaque fois la production et la consommation par une soustraction, sans oublier que le Soleil ne brille pas la nuit.",
              solution: [
                "1) En été, 20 kWh produits pour 12 kWh consommés : sur la journée entière, la production suffit. Il reste 20 - 12 = 8 kWh en trop, qui peuvent être envoyés sur le réseau.",
                "2) La nuit, il n'y a pas de lumière : les panneaux ne produisent rien. Il faut donc stocker dans une batterie, pendant la journée, les 5 kWh consommés la nuit.",
                "3) En hiver nuageux, 4 kWh produits pour 12 kWh consommés : il manque 12 - 4 = 8 kWh, qu'il faut acheter au réseau électrique.",
                "4) L'énergie solaire est intermittente : elle dépend de l'heure, de la saison et de la météo.",
                "Réponse : l'affirmation est fausse ; il faut un stockage pour la nuit et un complément du réseau (ou d'une autre source) les jours sombres.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les sources d'énergie.",
            statements: [
              { text: "Le pétrole est une source d'énergie renouvelable.", true: false, why: "Il s'est formé en des millions d'années : son stock est limité, il est non renouvelable." },
              { text: "Le vent est une source d'énergie renouvelable.", true: true, why: "Le vent se reforme sans cesse sous l'effet du Soleil : il ne s'épuise pas." },
              { text: "Une centrale nucléaire brûle de l'uranium comme on brûle du charbon.", true: false, why: "L'uranium ne brûle pas : la chaleur vient de réactions nucléaires au cœur de ses atomes." },
              { text: "Les panneaux solaires ne produisent pas d'électricité la nuit.", true: true, why: "Sans lumière, un panneau photovoltaïque ne produit rien : l'énergie solaire est intermittente." },
              { text: "Le bois peut être une source renouvelable.", true: true, why: "Il l'est si l'on replante les arbres coupés, qui repoussent en quelques dizaines d'années." },
              { text: "Une source renouvelable n'a jamais aucun inconvénient.", true: false, why: "Éoliennes, barrages et panneaux occupent de la place et modifient les paysages et les milieux naturels ; le Soleil et le vent sont intermittents." },
              { text: "Brûler du charbon rejette du dioxyde de carbone.", true: true, why: "La combustion des combustibles fossiles rejette du dioxyde de carbone, un gaz à effet de serre." },
            ],
          },
          quiz: [
            {
              q: "Laquelle de ces sources est renouvelable ?",
              options: ["Le gaz naturel", "Le charbon", "Le Soleil", "L'uranium"],
              answer: 2,
              why: "Le Soleil brille chaque jour : son énergie ne s'épuise pas à l'échelle humaine. Les trois autres sources ont des stocks limités.",
            },
            {
              q: "Qu'est-ce qu'un combustible fossile ?",
              options: ["Un combustible qui ne brûle pas du tout", "Un minerai radioactif extrait des mines d'uranium", "Une source d'énergie fournie par le Soleil chaque jour", "Un combustible issu d'êtres vivants très anciens"],
              answer: 3,
              why: "Pétrole, charbon et gaz naturel se sont formés à partir de restes d'êtres vivants, enfouis pendant des millions d'années.",
            },
            {
              q: "Quel est le principal inconvénient de l'énergie éolienne ?",
              options: ["Elle rejette des fumées toxiques", "Elle est intermittente", "Elle produit des déchets radioactifs", "Elle va s'épuiser"],
              answer: 1,
              why: "Le vent ne souffle pas en permanence : la production d'une éolienne varie et peut s'arrêter.",
            },
            {
              q: "Dans une centrale à charbon, quel appareil produit l'électricité ?",
              options: ["L'alternateur", "La cheminée", "La chaudière", "Le tas de charbon"],
              answer: 0,
              why: "La chaleur produit de la vapeur qui fait tourner une turbine ; c'est l'alternateur, entraîné par la turbine, qui produit l'électricité.",
            },
            {
              q: "Lequel de ces gestes relève de la sobriété énergétique ?",
              options: ["Laisser la télévision en veille", "Chauffer davantage", "Éteindre la lumière en quittant une pièce", "Prendre la voiture pour un trajet de 200 mètres"],
              answer: 2,
              why: "La sobriété consiste à éviter les consommations inutiles, comme une lumière allumée dans une pièce vide.",
            },
          ],
          trap: "Croire qu'une source d'énergie renouvelable est forcément sans inconvénient, ou qu'une source non renouvelable est simplement une source « sale » : renouvelable veut dire qui se reconstitue rapidement, rien de plus.",
          method: "Pour classer une source, posez la question : « si on l'utilise pendant toute une vie humaine, se reconstitue-t-elle ? » Puis, pour comparer des sources, faites un tableau à trois colonnes : épuisable ou non, dioxyde de carbone rejeté, autres inconvénients.",
        },
      ],
    },
    /* ==================================================================== */
    /* DÉCRIRE UN MOUVEMENT                                                   */
    /* ==================================================================== */
    {
      id: 'mouvement',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'relativite-mouvement',
          title: 'Mouvement ou immobilité : tout dépend de l\'observateur',
          minutes: 25,
          objectives: [
            "Choisir un objet de référence pour décrire le mouvement d'un objet.",
            "Décrire le mouvement d'un même objet par rapport à deux objets de référence différents.",
            "Expliquer qu'un objet peut être à la fois en mouvement et immobile selon l'observateur.",
          ],
          course: [
            {
              heading: "En mouvement par rapport à quoi ?",
              paragraphs: [
                "Vous êtes assis dans un train qui roule. Êtes-vous en mouvement ? Votre voisin de siège répondra non : vous restez toujours à la même place à côté de lui. Une vache qui regarde passer le train répondra oui : vous vous éloignez d'elle à toute vitesse. Les deux ont raison !",
                "Pour dire si un objet bouge, il faut toujours préciser par rapport à quoi. On choisit un objet de référence : un objet est en mouvement par rapport à lui si sa position change par rapport à lui au cours du temps ; il est immobile par rapport à lui si sa position ne change pas.",
              ],
              box: { label: "Définition", text: "L'objet de référence (les physiciens disent aussi le référentiel) est l'objet par rapport auquel on décrit un mouvement. Un objet est en mouvement par rapport à un objet de référence si sa position par rapport à celui-ci change au cours du temps." },
            },
            {
              heading: "Un même objet, deux descriptions",
              paragraphs: [
                "Dans le train, le passager est immobile par rapport au train, et en mouvement par rapport au sol, aux arbres et à la gare. C'est ce qu'on appelle la relativité du mouvement : le mouvement d'un objet dépend de l'objet de référence choisi.",
                "Le passager, s'il regarde par la fenêtre, voit les arbres défiler vers l'arrière : par rapport au train, ce sont les arbres qui bougent ! De même, dans un ascenseur qui monte, votre sac posé par terre est immobile par rapport à la cabine, mais il monte par rapport à l'immeuble.",
                "Sur une piste d'autoroute, deux voitures qui roulent côte à côte, à la même vitesse et dans le même sens, sont immobiles l'une par rapport à l'autre, alors qu'elles sont toutes les deux en mouvement par rapport à la route.",
              ],
              box: { label: "Propriété", text: "Un objet peut être en mouvement par rapport à un objet de référence et immobile par rapport à un autre. Pour décrire un mouvement, il faut toujours préciser l'objet de référence." },
            },
            {
              heading: "La référence la plus courante : le sol",
              paragraphs: [
                "Dans la vie de tous les jours, on sous-entend souvent l'objet de référence. Quand on dit « la voiture roule à 50 km/h », on décrit son mouvement par rapport à la route, c'est-à-dire par rapport au sol. Les physiciens parlent alors de référentiel terrestre.",
                "Attention aux impressions trompeuses. Chaque jour, le Soleil semble se déplacer dans le ciel : il se lève du côté de l'est et se couche du côté de l'ouest. Par rapport à un observateur sur Terre, il bouge bien. Mais ce mouvement apparent s'explique par la rotation de la Terre sur elle-même, en un jour environ, et non par un tour du Soleil autour de nous.",
              ],
            },
          ],
          keyPoints: [
            "Un mouvement se décrit toujours par rapport à un objet de référence.",
            "En mouvement : la position change par rapport à la référence ; immobile : elle ne change pas.",
            "Un même objet peut être immobile pour un observateur et en mouvement pour un autre.",
            "Sans précision, la référence sous-entendue est souvent le sol (référentiel terrestre).",
            "Le mouvement apparent du Soleil dans le ciel s'explique par la rotation de la Terre sur elle-même.",
          ],
          example: {
            statement: "Emma est assise dans un bus qui roule. Hugo attend à l'arrêt de bus, sur le trottoir. Décrire : a) le mouvement d'Emma par rapport au bus ; b) le mouvement d'Emma par rapport à Hugo ; c) le mouvement d'Hugo par rapport à Emma.",
            solution: [
              "a) Emma reste à la même place dans le bus : par rapport au bus, elle est immobile.",
              "b) Le bus avance et emmène Emma : sa position par rapport à Hugo change. Par rapport à Hugo, Emma est en mouvement.",
              "c) Pour Emma, c'est Hugo qui s'éloigne : sa position par rapport à elle change. Par rapport à Emma, Hugo est en mouvement, alors qu'il est immobile par rapport au trottoir.",
              "Réponse : Emma est immobile par rapport au bus mais en mouvement par rapport à Hugo, et Hugo est en mouvement par rapport à Emma.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nadia se tient immobile sur une marche d'un escalator qui monte. Est-elle en mouvement ou immobile : a) par rapport à la marche ? b) par rapport au sol du magasin ? c) par rapport à une personne qui se tient sur la marche juste derrière elle ?",
              hint: "Pour chaque objet de référence, demandez-vous si la distance entre Nadia et lui change au cours du temps.",
              solution: [
                "a) Nadia reste sur sa marche : elle est immobile par rapport à la marche.",
                "b) La marche monte et emporte Nadia : elle est en mouvement par rapport au sol du magasin.",
                "c) La personne derrière elle monte en même temps qu'elle, à la même vitesse : Nadia est immobile par rapport à cette personne.",
                "Réponse : immobile, en mouvement, immobile.",
              ],
            },
            {
              level: 2,
              statement: "Dans un avion en vol, Paul marche dans l'allée vers l'avant de l'appareil. Son amie Zoé reste assise à sa place. 1) Paul est-il en mouvement par rapport à l'avion ? 2) Zoé est-elle en mouvement par rapport à l'avion ? par rapport au sol ? 3) Le pilote dit aux passagers : « Restez assis, ne bougez pas. » Par rapport à quoi leur demande-t-il de ne pas bouger ?",
              hint: "L'avion transporte tous ses passagers ; distinguez bien ce qui change de position dans la cabine et ce qui change de position par rapport à la Terre.",
              solution: [
                "1) Paul change de place dans la cabine : il est en mouvement par rapport à l'avion.",
                "2) Zoé reste à sa place : elle est immobile par rapport à l'avion. Mais l'avion vole et l'emporte : elle est en mouvement par rapport au sol.",
                "3) Le pilote sait que les passagers se déplacent à grande vitesse par rapport au sol : il leur demande de rester immobiles par rapport à l'avion, c'est-à-dire à leur siège.",
                "Réponse : Paul bouge par rapport à l'avion ; Zoé est immobile par rapport à l'avion et en mouvement par rapport au sol ; le pilote parle de l'avion comme objet de référence.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Léo est assis dans un train arrêté en gare. Sur la voie voisine, un autre train est arrêté. Soudain, Léo a l'impression que son train démarre, car l'autre train semble glisser lentement vers l'arrière. 1) Par rapport à quel objet de référence Léo observe-t-il un mouvement ? 2) Peut-il savoir, en regardant seulement l'autre train, lequel des deux a démarré ? 3) Que doit-il regarder pour le savoir ? 4) En quoi cette situation ressemble-t-elle au mouvement apparent du Soleil dans le ciel ?",
              hint: "Ce que voit Léo, c'est un changement de position d'un train par rapport à l'autre. Pour trancher, il lui faut une référence qui ne bouge pas par rapport au sol.",
              solution: [
                "1) Léo observe que l'autre train change de position par rapport à son propre train : son objet de référence, c'est son train.",
                "2) Non : si son train avance, Léo voit l'autre train glisser vers l'arrière ; si c'est l'autre train qui démarre dans l'autre sens, Léo le voit aussi glisser vers l'arrière. Les deux situations donnent exactement la même impression.",
                "3) Il doit regarder un objet fixe par rapport au sol : le quai, un pilier ou un bâtiment de la gare. Si le quai défile, c'est son train qui roule ; si le quai ne bouge pas, c'est l'autre train.",
                "4) Pour le Soleil, nous observons depuis la Terre, qui tourne sur elle-même sans que nous le sentions : le Soleil semble se déplacer dans le ciel, alors que c'est surtout notre « train », la Terre, qui tourne.",
                "Réponse : on ne peut pas savoir quel objet bouge en le comparant seulement à un autre objet en mouvement possible ; il faut une référence liée au sol, ici le quai.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Tout dépend de l'observateur.",
            statements: [
              { text: "Un passager assis dans un train qui roule est immobile par rapport au train.", true: true, why: "Il reste à la même place dans le train : sa position par rapport au train ne change pas." },
              { text: "Un objet est soit en mouvement, soit immobile, quel que soit l'observateur.", true: false, why: "Le mouvement est relatif : un même objet peut être en mouvement pour un observateur et immobile pour un autre." },
              { text: "Pour un passager du train, les arbres du bord de la voie semblent se déplacer vers l'arrière.", true: true, why: "Par rapport au train, la position des arbres change : ils défilent dans le sens opposé à celui du train." },
              { text: "Le Soleil tourne autour de la Terre en un jour.", true: false, why: "Son déplacement apparent dans le ciel s'explique par la rotation de la Terre sur elle-même." },
              { text: "Deux voitures qui roulent côte à côte à la même vitesse sont immobiles l'une par rapport à l'autre.", true: true, why: "La distance entre elles ne change pas : chacune est immobile par rapport à l'autre." },
              { text: "Quand on dit qu'une voiture roule à 50 km/h, la référence sous-entendue est le conducteur.", true: false, why: "La référence sous-entendue est la route, donc le sol ; par rapport au conducteur, la voiture est immobile." },
            ],
          },
          quiz: [
            {
              q: "Que faut-il toujours préciser pour décrire un mouvement ?",
              options: ["L'objet de référence", "La couleur de l'objet", "La masse de l'objet", "L'heure de la journée"],
              answer: 0,
              why: "Un mouvement n'a de sens que par rapport à un objet de référence, car il dépend de celui-ci.",
            },
            {
              q: "Un cycliste roule sur une route. Par rapport à quoi est-il immobile ?",
              options: ["Par rapport à la route", "Par rapport à la selle de son vélo", "Par rapport aux arbres", "Par rapport à un piéton arrêté sur le trottoir"],
              answer: 1,
              why: "Le cycliste reste assis sur sa selle : sa position par rapport au vélo ne change pas.",
            },
            {
              q: "Comment appelle-t-on le fait que le mouvement dépende de l'objet de référence ?",
              options: ["La vitesse moyenne du mouvement", "La trajectoire", "La relativité du mouvement", "Le mouvement uniforme"],
              answer: 2,
              why: "La relativité du mouvement signifie que la description d'un mouvement dépend de l'objet de référence choisi.",
            },
            {
              q: "Pourquoi le Soleil semble-t-il traverser le ciel chaque jour ?",
              options: ["Parce qu'il tourne autour de la Terre en un jour", "Parce que la Terre tourne sur elle-même", "Parce que les nuages le déplacent", "Parce que la Lune le pousse"],
              answer: 1,
              why: "La Terre tourne sur elle-même en un jour environ : depuis la Terre, le Soleil semble se déplacer de l'est vers l'ouest.",
            },
            {
              q: "Un sac est posé sur le sol d'un ascenseur qui monte. Par rapport à l'immeuble, le sac est...",
              options: ["immobile", "en train de descendre", "en train de tourner", "en train de monter"],
              answer: 3,
              why: "L'ascenseur emporte le sac vers le haut : sa position par rapport à l'immeuble change, il monte.",
            },
          ],
          trap: "Affirmer qu'un objet « bouge » ou « ne bouge pas » sans préciser par rapport à quoi : une même personne peut être immobile par rapport à un train et en mouvement par rapport au sol.",
          method: "Commencez toujours votre réponse par « par rapport à... » : nommez l'objet de référence, puis regardez si la position de l'objet étudié change par rapport à lui au cours du temps.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'trajectoire',
          title: 'Trajectoire et types de mouvement',
          minutes: 30,
          objectives: [
            "Définir la trajectoire d'un point d'un objet en mouvement.",
            "Identifier un mouvement rectiligne, circulaire ou curviligne.",
            "Exploiter une chronophotographie pour dire si un mouvement est uniforme, accéléré ou ralenti.",
            "Montrer que la trajectoire dépend de l'objet de référence.",
          ],
          course: [
            {
              heading: "La trajectoire",
              paragraphs: [
                "Pour décrire un mouvement, on suit souvent un point de l'objet : le centre d'un ballon, la pointe d'une aiguille de montre, le phare d'un vélo. L'ensemble des positions successives occupées par ce point au cours du mouvement forme une ligne : c'est sa trajectoire.",
                "On peut visualiser une trajectoire grâce à une chronophotographie : on superpose sur une même image plusieurs photos de l'objet, prises à intervalles de temps égaux (par exemple toutes les 0,1 seconde). Les positions successives du point apparaissent alors les unes à la suite des autres, comme les traces de pas sur la neige.",
              ],
              box: { label: "Définition", text: "La trajectoire d'un point est l'ensemble des positions successives occupées par ce point au cours du mouvement, par rapport à un objet de référence." },
            },
            {
              heading: "Rectiligne, circulaire ou curviligne",
              paragraphs: [
                "Le type de mouvement se nomme d'après la forme de la trajectoire. Si la trajectoire est une portion de droite, le mouvement est rectiligne : une pomme qui tombe d'un arbre, un ascenseur qui monte, une voiture sur une route droite.",
                "Si la trajectoire est un cercle ou une portion de cercle, le mouvement est circulaire : la pointe de l'aiguille d'une horloge, un siège de grande roue, la valve d'une roue de vélo par rapport au cadre. Si la trajectoire est une courbe quelconque, le mouvement est curviligne : un ballon de basket lancé vers le panier, une voiture dans un virage de montagne.",
              ],
              box: { label: "À retenir", text: "Trajectoire droite : mouvement rectiligne. Trajectoire en cercle : mouvement circulaire. Trajectoire courbe quelconque : mouvement curviligne." },
            },
            {
              heading: "Uniforme, accéléré ou ralenti",
              paragraphs: [
                "On décrit aussi l'évolution de la vitesse. Le mouvement est uniforme si la vitesse reste constante, accéléré si elle augmente, ralenti si elle diminue.",
                "Sur une chronophotographie, les photos sont prises à intervalles de temps égaux. Si les positions successives sont également espacées, l'objet parcourt la même distance pendant chaque intervalle : le mouvement est uniforme. Si l'espacement augmente, l'objet va de plus en plus vite : le mouvement est accéléré. Si l'espacement diminue, le mouvement est ralenti.",
                "On combine les deux descriptions : une voiture qui roule à vitesse constante sur une route droite a un mouvement rectiligne uniforme ; un manège qui démarre a un mouvement circulaire accéléré.",
              ],
              box: { label: "Règle", text: "Chronophotographie : écarts égaux → mouvement uniforme ; écarts de plus en plus grands → mouvement accéléré ; écarts de plus en plus petits → mouvement ralenti." },
            },
            {
              heading: "La trajectoire dépend de l'observateur",
              paragraphs: [
                "Comme le mouvement, la trajectoire dépend de l'objet de référence. Regardez la valve d'une roue de vélo : pour le cycliste, elle tourne en rond autour de l'axe de la roue, sa trajectoire est un cercle. Pour un piéton sur le trottoir, la valve avance en même temps que le vélo : elle dessine une suite d'arches qui touchent le sol.",
                "De même, un passager lâche une bille dans un train qui roule à vitesse constante en ligne droite : pour lui, la bille tombe tout droit à ses pieds. Pour une personne sur le quai, la bille avance avec le train tout en tombant : sa trajectoire est une courbe.",
              ],
            },
          ],
          keyPoints: [
            "Trajectoire : ensemble des positions successives d'un point de l'objet.",
            "Rectiligne (droite), circulaire (cercle), curviligne (courbe quelconque).",
            "Uniforme : vitesse constante ; accéléré : elle augmente ; ralenti : elle diminue.",
            "Chronophotographie : des écarts égaux signalent un mouvement uniforme.",
            "La trajectoire dépend de l'objet de référence, comme le mouvement lui-même.",
          ],
          example: {
            statement: "Une chronophotographie montre une bille qui roule sur une table. Les photos sont prises toutes les 0,1 s. Les positions successives sont alignées sur une droite, et les distances entre deux positions successives valent : 2 cm, 4 cm, 6 cm, 8 cm. Décrire complètement le mouvement de la bille par rapport à la table.",
            solution: [
              "Les positions sont alignées sur une droite : la trajectoire est rectiligne.",
              "Les photos sont prises à intervalles de temps égaux, et les distances entre deux positions augmentent (2, 4, 6 puis 8 cm) : la bille parcourt une distance de plus en plus grande pendant chaque intervalle.",
              "Sa vitesse augmente : le mouvement est accéléré.",
              "Réponse : par rapport à la table, la bille a un mouvement rectiligne accéléré.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommer le type de trajectoire (rectiligne, circulaire ou curviligne) dans chaque cas, par rapport au sol : a) une pierre qu'on lâche du haut d'un pont ; b) l'extrémité de l'aiguille des minutes d'une horloge murale ; c) un ballon de football tiré en hauteur vers le but ; d) une cabine d'ascenseur ; e) un siège de grande roue.",
              hint: "Imaginez la ligne laissée par le point si l'on pouvait la dessiner : est-ce une droite, un cercle, ou une autre courbe ?",
              solution: [
                "a) La pierre tombe tout droit : trajectoire rectiligne.",
                "b) L'extrémité de l'aiguille décrit un cercle : trajectoire circulaire.",
                "c) Le ballon monte puis redescend en suivant une courbe : trajectoire curviligne.",
                "d) La cabine monte ou descend en ligne droite : trajectoire rectiligne.",
                "e) Le siège tourne autour de l'axe de la roue : trajectoire circulaire.",
                "Réponse : rectiligne, circulaire, curviligne, rectiligne, circulaire.",
              ],
            },
            {
              level: 2,
              statement: "Une luge glisse sur une piste droite, puis arrive sur une zone plate et ralentit. Une chronophotographie est prise toutes les 0,5 s. Les distances entre deux positions successives valent, dans l'ordre (données fictives) : 3 m, 3 m, 3 m, 3 m, 2 m, 1 m. 1) Quelle est la trajectoire de la luge ? 2) Décrire le mouvement pendant la première phase (les quatre premiers écarts). 3) Décrire le mouvement pendant la seconde phase.",
              hint: "Comparez les écarts successifs : sont-ils égaux, de plus en plus grands, ou de plus en plus petits ?",
              solution: [
                "1) La piste est droite : la trajectoire est rectiligne.",
                "2) Première phase : les quatre écarts sont égaux (3 m), pour des intervalles de temps égaux. La vitesse est constante : mouvement rectiligne uniforme.",
                "3) Seconde phase : les écarts diminuent (3 m, puis 2 m, puis 1 m). La vitesse diminue : mouvement rectiligne ralenti.",
                "Réponse : trajectoire rectiligne ; mouvement uniforme puis ralenti.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans un train qui roule en ligne droite à vitesse constante, Jules lâche une balle au-dessus de sa tablette. Sur le quai, Margot voit passer le train et regarde la balle à travers la vitre. 1) Décrire la trajectoire de la balle par rapport au train (pour Jules). 2) Décrire la trajectoire de la balle par rapport au quai (pour Margot). 3) Jules affirme : « La trajectoire de ma balle est une droite, donc Margot se trompe. » A-t-il raison ? 4) Pendant la chute, l'écart entre deux positions successives de la balle augmente. Comment qualifier son mouvement ?",
              hint: "Rappelez-vous que la balle, comme Jules, avance avec le train. Pour la dernière question, appliquez la règle de la chronophotographie.",
              solution: [
                "1) Par rapport au train, la balle tombe verticalement, juste à l'aplomb de l'endroit où Jules l'a lâchée : trajectoire rectiligne.",
                "2) Par rapport au quai, la balle avance avec le train pendant qu'elle tombe : elle se déplace à la fois vers l'avant et vers le bas. Sa trajectoire est une courbe : mouvement curviligne.",
                "3) Jules n'a pas raison de dire que Margot se trompe : chacun décrit correctement la trajectoire par rapport à son propre objet de référence. La trajectoire dépend de l'objet de référence.",
                "4) Les écarts augmentent pour des intervalles de temps égaux : la vitesse augmente, le mouvement de chute est accéléré.",
                "Réponse : rectiligne pour Jules, curviligne pour Margot, et les deux ont raison ; la chute est accélérée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mouvement à sa description.",
            pairs: [
              { left: "Mouvement rectiligne", right: "La trajectoire est une portion de droite" },
              { left: "Mouvement circulaire", right: "La trajectoire est un cercle ou un arc de cercle" },
              { left: "Mouvement curviligne", right: "La trajectoire est une courbe quelconque" },
              { left: "Mouvement uniforme", right: "Écarts égaux sur une chronophotographie" },
              { left: "Mouvement accéléré", right: "Écarts de plus en plus grands sur une chronophotographie" },
              { left: "Mouvement ralenti", right: "Écarts de plus en plus petits sur une chronophotographie" },
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce que la trajectoire d'un point ?",
              options: ["La vitesse du point", "La durée du mouvement", "La distance qui le sépare de son point de départ", "L'ensemble de ses positions successives"],
              answer: 3,
              why: "La trajectoire est la ligne formée par toutes les positions successives du point au cours du mouvement.",
            },
            {
              q: "Quel est le mouvement de la pointe de l'aiguille d'une montre ?",
              options: ["Rectiligne", "Curviligne quelconque", "Circulaire", "Immobile"],
              answer: 2,
              why: "La pointe de l'aiguille tourne autour du centre du cadran : sa trajectoire est un cercle.",
            },
            {
              q: "Sur une chronophotographie, les écarts entre les positions sont tous égaux. Le mouvement est...",
              options: ["uniforme", "accéléré", "ralenti"],
              answer: 0,
              why: "Des écarts égaux pour des durées égales montrent que la vitesse est constante : le mouvement est uniforme.",
            },
            {
              q: "Une voiture freine sur une route droite. Quel est son mouvement ?",
              options: ["Rectiligne uniforme", "Rectiligne ralenti", "Circulaire ralenti", "Curviligne accéléré"],
              answer: 1,
              why: "La route est droite (rectiligne) et la vitesse diminue (ralenti).",
            },
            {
              q: "Pour le cycliste, la valve de sa roue décrit un cercle. Et pour un piéton sur le trottoir ?",
              options: ["Une suite d'arches", "Le même cercle", "Une droite", "Un point fixe qui ne bouge pas"],
              answer: 0,
              why: "Pour le piéton, la valve tourne et avance en même temps : elle dessine des arches. La trajectoire dépend de l'objet de référence.",
            },
          ],
          trap: "Confondre la forme de la trajectoire et l'évolution de la vitesse : « rectiligne » parle de la ligne suivie, « uniforme » parle de la vitesse ; un mouvement peut être rectiligne et accéléré.",
          method: "Décrivez un mouvement en deux mots, toujours dans le même ordre : d'abord la forme de la trajectoire (rectiligne, circulaire, curviligne), puis l'évolution de la vitesse (uniforme, accéléré, ralenti), sans oublier l'objet de référence.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse',
          title: 'Calculer une vitesse moyenne',
          minutes: 35,
          objectives: [
            "Calculer une vitesse moyenne avec la relation v = d ÷ t.",
            "Calculer une distance ou une durée à partir d'une vitesse.",
            "Convertir une durée en heures et une vitesse de mètres par seconde en kilomètres par heure.",
            "Distinguer vitesse moyenne et vitesse à un instant donné.",
          ],
          course: [
            {
              heading: "La vitesse moyenne",
              paragraphs: [
                "Un randonneur parcourt 12 km en 3 heures. En moyenne, il parcourt donc 12 ÷ 3 = 4 km chaque heure : sa vitesse moyenne est de 4 kilomètres par heure, notée 4 km/h. La vitesse moyenne indique la distance parcourue, en moyenne, pendant une unité de temps.",
                "On la calcule en divisant la distance parcourue d par la durée du parcours t. Les unités se suivent : une distance en kilomètres divisée par une durée en heures donne une vitesse en kilomètres par heure (km/h) ; une distance en mètres divisée par une durée en secondes donne une vitesse en mètres par seconde (m/s).",
              ],
              box: { label: "Formule", text: "v = d ÷ t, avec d la distance parcourue et t la durée. Si d est en km et t en h, v est en km/h. Si d est en m et t en s, v est en m/s." },
            },
            {
              heading: "Calculer une distance ou une durée",
              paragraphs: [
                "La même relation permet de trouver une distance : si une voiture roule à 90 km/h pendant 2 h, elle parcourt 90 km chaque heure, donc d = v × t = 90 × 2 = 180 km. Elle permet aussi de trouver une durée : pour parcourir 180 km à 90 km/h, il faut t = d ÷ v = 180 ÷ 90 = 2 h.",
                "Avant tout calcul, vérifiez que les unités vont ensemble : une vitesse en km/h s'utilise avec des distances en km et des durées en h.",
              ],
              box: { label: "Formule", text: "Les trois écritures d'une même relation : v = d ÷ t ; d = v × t ; t = d ÷ v." },
            },
            {
              heading: "Les conversions indispensables",
              paragraphs: [
                "Les durées sont souvent données en heures et minutes. Une heure compte 60 minutes : 30 min = 0,5 h ; 15 min = 0,25 h ; 45 min = 0,75 h. Ainsi 1 h 30 min = 1,5 h et 2 h 15 min = 2,25 h. Attention : 1 h 30 min ne s'écrit surtout pas 1,30 h !",
                "Pour passer des m/s aux km/h, on multiplie par 3,6. En effet, un objet qui va à 1 m/s parcourt 1 m chaque seconde ; en une heure, soit 3 600 s, il parcourt 3 600 m, c'est-à-dire 3,6 km. Donc 1 m/s = 3,6 km/h. Inversement, pour passer des km/h aux m/s, on divise par 3,6 : 36 km/h = 36 ÷ 3,6 = 10 m/s.",
              ],
              box: { label: "Repère", text: "1 h = 60 min = 3 600 s ; 1 km = 1 000 m. 30 min = 0,5 h ; 15 min = 0,25 h ; 45 min = 0,75 h. m/s × 3,6 → km/h ; km/h ÷ 3,6 → m/s." },
            },
            {
              heading: "Vitesse moyenne et vitesse à un instant",
              paragraphs: [
                "Le compteur d'une voiture indique la vitesse à chaque instant : elle change sans cesse, au feu rouge, dans les virages, sur l'autoroute. La vitesse moyenne, elle, résume tout le trajet, arrêts compris : c'est la vitesse constante qui permettrait de faire le même trajet dans la même durée.",
                "Quelques ordres de grandeur : un piéton marche à environ 5 km/h ; un cycliste roule souvent entre 15 et 25 km/h ; sur autoroute, en France, la vitesse est limitée à 130 km/h par temps sec ; le son se propage dans l'air à environ 340 m/s.",
              ],
            },
          ],
          keyPoints: [
            "v = d ÷ t ; d = v × t ; t = d ÷ v.",
            "km et h donnent des km/h ; m et s donnent des m/s.",
            "Une durée se convertit en heures décimales : 1 h 30 min = 1,5 h (et non 1,30 h).",
            "1 m/s = 3,6 km/h : on multiplie par 3,6 pour passer des m/s aux km/h.",
            "La vitesse moyenne tient compte de tout le trajet, arrêts compris.",
          ],
          example: {
            statement: "Un cycliste parcourt 36 km en 2 h (données fictives). Calculer sa vitesse moyenne en km/h, puis en m/s.",
            solution: [
              "On utilise la relation v = d ÷ t, avec d = 36 km et t = 2 h.",
              "v = 36 ÷ 2 = 18 km/h.",
              "Pour passer des km/h aux m/s, on divise par 3,6 : 18 ÷ 3,6 = 5 m/s.",
              "Vérification : 5 m/s × 3,6 = 18 km/h.",
              "Réponse : la vitesse moyenne du cycliste est de 18 km/h, soit 5 m/s.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une randonneuse parcourt 6 km en 1 h 30 min (données fictives). Calculer sa vitesse moyenne en km/h.",
              hint: "Convertissez d'abord 1 h 30 min en heures décimales : 30 min, c'est une demi-heure.",
              solution: [
                "Conversion de la durée : 1 h 30 min = 1 h + 0,5 h = 1,5 h.",
                "v = d ÷ t = 6 ÷ 1,5 = 4 km/h.",
                "Vérification : en 1,5 h à 4 km/h, on parcourt 4 × 1,5 = 6 km.",
                "Réponse : la vitesse moyenne de la randonneuse est de 4 km/h.",
              ],
            },
            {
              level: 2,
              statement: "1) Un sprinteur court 100 m en 12,5 s (données fictives). Calculer sa vitesse moyenne en m/s, puis en km/h. 2) Une voiture roule pendant 45 min à la vitesse moyenne de 80 km/h. Quelle distance parcourt-elle ?",
              hint: "Pour la question 2, convertissez 45 min en heures avant d'utiliser d = v × t.",
              solution: [
                "1) v = d ÷ t = 100 ÷ 12,5 = 8 m/s.",
                "En km/h : 8 × 3,6 = 28,8 km/h.",
                "2) Conversion : 45 min = 0,75 h.",
                "d = v × t = 80 × 0,75 = 60 km.",
                "Réponse : 1) 8 m/s, soit 28,8 km/h ; 2) la voiture parcourt 60 km.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une famille part en voiture à 8 h 15 et arrive à 11 h 45 à sa destination, située à 280 km (données fictives). 1) Calculer la durée du trajet, puis la vitesse moyenne sur l'ensemble du trajet. 2) Une partie du trajet, 195 km, s'est faite sur autoroute à la vitesse moyenne de 130 km/h. Combien de temps a duré cette partie ? 3) Calculer la vitesse moyenne sur le reste du trajet, puis proposer une explication au fait qu'elle soit faible.",
              hint: "Pour la question 3, calculez d'abord la distance restante et la durée restante par des soustractions ; utilisez ensuite t = d ÷ v puis v = d ÷ t.",
              solution: [
                "1) Durée : de 8 h 15 à 11 h 45, il s'écoule 3 h 30 min, soit 3,5 h. Vitesse moyenne : v = 280 ÷ 3,5 = 80 km/h.",
                "2) Durée sur autoroute : t = d ÷ v = 195 ÷ 130 = 1,5 h, soit 1 h 30 min.",
                "3) Distance restante : 280 - 195 = 85 km. Durée restante : 3,5 - 1,5 = 2 h.",
                "Vitesse moyenne sur le reste du trajet : v = 85 ÷ 2 = 42,5 km/h.",
                "Cette vitesse est faible car elle compte aussi les arrêts (pause, bouchons, feux) et les routes de ville ou de campagne où l'on roule moins vite.",
                "Réponse : 3,5 h et 80 km/h ; 1,5 h sur autoroute ; 42,5 km/h sur le reste du trajet, pauses comprises.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour calculer une vitesse moyenne.",
            items: [
              "Relever la distance parcourue et la durée dans l'énoncé.",
              "Convertir la durée en heures décimales (ou en secondes).",
              "Écrire la formule v = d ÷ t.",
              "Remplacer d et t par leurs valeurs et calculer.",
              "Écrire le résultat avec son unité, km/h ou m/s.",
            ],
          },
          quiz: [
            {
              q: "Un train parcourt 300 km en 2 h. Quelle est sa vitesse moyenne ?",
              options: ["600 km/h", "150 km/h", "302 km/h", "100 km/h"],
              answer: 1,
              why: "v = d ÷ t = 300 ÷ 2 = 150 km/h.",
            },
            {
              q: "Comment s'écrit 1 h 30 min en heures décimales ?",
              options: ["1,30 h", "1,3 h", "130 h", "1,5 h"],
              answer: 3,
              why: "30 min est une demi-heure, soit 0,5 h : 1 h 30 min = 1,5 h.",
            },
            {
              q: "Combien vaut 10 m/s en km/h ?",
              options: ["10 km/h", "100 km/h", "36 km/h", "2,8 km/h"],
              answer: 2,
              why: "Pour passer des m/s aux km/h, on multiplie par 3,6 : 10 × 3,6 = 36 km/h.",
            },
            {
              q: "Une voiture roule à 60 km/h pendant 30 min. Quelle distance parcourt-elle ?",
              options: ["30 km", "120 km", "1 800 km", "90 km"],
              answer: 0,
              why: "30 min = 0,5 h et d = v × t = 60 × 0,5 = 30 km.",
            },
            {
              q: "Que donne la vitesse moyenne d'un trajet ?",
              options: ["La vitesse la plus grande atteinte pendant le trajet", "La vitesse affichée au départ", "La distance totale divisée par la durée", "La vitesse affichée au moment de l'arrivée"],
              answer: 2,
              why: "La vitesse moyenne est la distance totale divisée par la durée totale, arrêts compris.",
            },
          ],
          trap: "Écrire 1 h 30 min sous la forme 1,30 h : une heure compte 60 minutes, pas 100, donc 1 h 30 min = 1,5 h. Autre erreur fréquente : diviser des kilomètres par des minutes en annonçant des km/h.",
          method: "Avant de calculer, écrivez les données avec leurs unités et vérifiez qu'elles vont ensemble (km avec h, m avec s). Après le calcul, vérifiez l'ordre de grandeur : un piéton ne marche pas à 50 km/h.",
        },
      ],
    },
    /* ==================================================================== */
    /* LA LUMIÈRE                                                             */
    /* ==================================================================== */
    {
      id: 'lumiere',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sources-recepteurs',
          title: 'Sources de lumière et objets diffusants',
          minutes: 25,
          objectives: [
            "Distinguer une source primaire de lumière d'un objet diffusant.",
            "Expliquer la condition pour voir un objet : de la lumière issue de l'objet doit entrer dans l'œil.",
            "Identifier des récepteurs de lumière.",
            "Classer des milieux en transparents, translucides ou opaques.",
          ],
          course: [
            {
              heading: "Les sources primaires de lumière",
              paragraphs: [
                "Certains objets produisent eux-mêmes la lumière qu'ils émettent : ce sont des sources primaires de lumière. Le Soleil et les autres étoiles, la flamme d'une bougie, une lampe allumée, un écran de téléphone allumé, un feu de camp ou encore une luciole en sont des exemples.",
                "Une source primaire se voit même dans une pièce complètement obscure : une bougie allumée dans le noir reste bien visible, car elle fabrique sa propre lumière.",
              ],
              box: { label: "Définition", text: "Une source primaire de lumière est un objet qui produit lui-même la lumière qu'il émet : le Soleil, les étoiles, une flamme, une lampe allumée, un écran allumé." },
            },
            {
              heading: "Les objets diffusants",
              paragraphs: [
                "La plupart des objets qui nous entourent ne produisent pas de lumière : un livre, une table, un mur, vos mains. Ils renvoient dans toutes les directions une partie de la lumière qu'ils reçoivent : on dit qu'ils diffusent la lumière. On les appelle des objets diffusants (ou sources secondaires).",
                "La Lune est un objet diffusant : elle ne produit aucune lumière, elle renvoie celle du Soleil. Il en est de même des planètes, comme Vénus, très brillante le soir, que l'on surnomme pourtant « l'étoile du berger ».",
                "Un objet blanc diffuse presque toute la lumière qu'il reçoit ; un objet noir en absorbe presque toute et en diffuse très peu. Dans une pièce totalement obscure, même un objet blanc reste invisible : sans lumière reçue, il n'a rien à renvoyer.",
              ],
              box: { label: "Définition", text: "Un objet diffusant ne produit pas de lumière : il renvoie dans toutes les directions une partie de la lumière qu'il reçoit d'une source. La Lune, les planètes et la plupart des objets sont des objets diffusants." },
            },
            {
              heading: "Comment voit-on un objet ?",
              paragraphs: [
                "Pour voir un objet, il faut que de la lumière partie de cet objet entre dans notre œil. Pour une source primaire, la lumière va directement de la source à l'œil. Pour un objet diffusant, la lumière fait deux étapes : de la source à l'objet, puis de l'objet à l'œil. Vous voyez cette page parce que la lumière d'une lampe ou du Soleil l'éclaire, et que la page en renvoie une partie vers vos yeux.",
                "L'œil est donc un récepteur de lumière : il reçoit la lumière, il n'en envoie pas. Dans l'Antiquité, certains savants grecs pensaient au contraire que l'œil envoyait des rayons vers les objets. Au XIe siècle, le savant Ibn al-Haytham a défendu l'idée que la lumière va des objets vers l'œil. D'autres récepteurs existent : le capteur d'un appareil photo, un panneau solaire, une cellule qui allume l'éclairage public à la tombée de la nuit.",
                "Un faisceau laser qui traverse une pièce propre est invisible sur le côté : sa lumière ne vient pas dans nos yeux. Si l'on souffle un peu de fumée, les fines particules diffusent la lumière dans toutes les directions, et le faisceau apparaît.",
              ],
              box: { label: "Règle", text: "On voit un objet si de la lumière issue de cet objet pénètre dans l'œil. Chaîne de vision d'un objet diffusant : source → objet diffusant → œil (récepteur)." },
            },
            {
              heading: "Transparent, translucide, opaque",
              paragraphs: [
                "La lumière traverse certains milieux et pas d'autres. Un milieu transparent laisse passer la lumière et permet de voir nettement à travers : l'air, l'eau claire, le verre d'une vitre. Un milieu translucide laisse passer la lumière, mais on ne voit pas nettement à travers : le verre dépoli d'une salle de bains, le papier calque. Un milieu opaque ne laisse pas passer la lumière : le bois, le carton, le métal, le corps humain.",
              ],
            },
          ],
          keyPoints: [
            "Source primaire : produit sa propre lumière (Soleil, étoiles, flamme, lampe allumée).",
            "Objet diffusant : renvoie dans toutes les directions la lumière qu'il reçoit (Lune, planètes, livre).",
            "On voit un objet si de la lumière issue de l'objet entre dans l'œil.",
            "L'œil est un récepteur : il reçoit la lumière, il n'en émet pas.",
            "Transparent : on voit à travers ; translucide : la lumière passe mais l'image est floue ; opaque : la lumière ne passe pas.",
          ],
          example: {
            statement: "Le soir, dans sa chambre, Chloé lit un livre à la lumière de sa lampe de bureau. Expliquer, en décrivant le trajet de la lumière, pourquoi elle voit la lampe et pourquoi elle voit son livre.",
            solution: [
              "La lampe allumée produit sa propre lumière : c'est une source primaire. Une partie de sa lumière va directement de la lampe à l'œil de Chloé : elle voit la lampe.",
              "Le livre ne produit pas de lumière : c'est un objet diffusant. Il reçoit la lumière de la lampe et en renvoie une partie dans toutes les directions.",
              "Une partie de cette lumière diffusée entre dans l'œil de Chloé : elle voit le livre.",
              "Réponse : lampe → œil pour la lampe ; lampe → livre → œil pour le livre.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classer les objets suivants en sources primaires et objets diffusants : le Soleil, la Lune, une bougie allumée, un tableau accroché au mur, l'étoile Sirius, un écran de télévision allumé, la planète Mars, un cahier.",
              hint: "Demandez-vous si l'objet resterait visible dans une pièce ou un ciel totalement privés de toute autre lumière.",
              solution: [
                "Sources primaires (elles produisent leur lumière) : le Soleil, la bougie allumée, l'étoile Sirius, l'écran de télévision allumé.",
                "Objets diffusants (ils renvoient la lumière reçue) : la Lune, le tableau, la planète Mars, le cahier.",
                "Réponse : quatre sources primaires et quatre objets diffusants, dans les listes ci-dessus.",
              ],
            },
            {
              level: 2,
              statement: "1) Décrire le trajet de la lumière qui permet de voir la Lune la nuit. 2) Pendant une coupure de courant, la nuit, sans Lune, Théo ne voit plus du tout sa chaise blanche, posée à un mètre de lui. Pourtant ses yeux fonctionnent bien. Expliquer. 3) Il allume une bougie : il voit la bougie et la chaise. Décrire les deux trajets de la lumière.",
              hint: "La Lune et la chaise sont des objets diffusants : ils ont besoin d'être éclairés par une source.",
              solution: [
                "1) Le Soleil éclaire la Lune ; la Lune diffuse une partie de cette lumière, qui arrive jusqu'à nos yeux : Soleil → Lune → œil.",
                "2) La chaise est un objet diffusant : elle ne produit pas de lumière. Sans aucune source pour l'éclairer, elle n'a aucune lumière à renvoyer, et aucune lumière issue de la chaise n'entre dans l'œil de Théo.",
                "3) La bougie est une source primaire : bougie → œil. Elle éclaire aussi la chaise, qui diffuse cette lumière : bougie → chaise → œil.",
                "Réponse : Soleil → Lune → œil ; dans le noir complet, la chaise ne renvoie aucune lumière ; avec la bougie, bougie → œil et bougie → chaise → œil.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Le soir, Vénus brille dans le ciel comme une étoile, et on la surnomme « l'étoile du berger ». L'étoile Sirius brille aussi dans le ciel. Expliquer pourquoi l'une est un objet diffusant et l'autre une source primaire. 2) Lors d'un spectacle, un faisceau laser traverse la salle sans être visible sur son trajet ; on ne voit qu'un point lumineux sur l'écran. On ajoute de la fumée : le faisceau apparaît. Expliquer ces deux observations. 3) Pourquoi dit-on que l'œil est un récepteur et non un émetteur de lumière ?",
              hint: "Pour chaque objet que l'on voit, demandez-vous d'où vient la lumière qui entre dans l'œil, et si l'objet la produit ou la renvoie.",
              solution: [
                "1) Vénus est une planète : elle ne produit pas de lumière, elle diffuse celle du Soleil vers nous. Sirius est une étoile : comme le Soleil, elle produit sa propre lumière. Vénus est un objet diffusant, Sirius une source primaire.",
                "2) Sans fumée, la lumière du laser va tout droit vers l'écran et n'entre pas dans les yeux des spectateurs placés sur le côté : le faisceau est invisible. L'écran, objet diffusant, renvoie la lumière dans toutes les directions : on voit le point lumineux.",
                "Avec la fumée, les particules diffusent une partie de la lumière dans toutes les directions, dont celle des spectateurs : le faisceau devient visible.",
                "3) Si l'œil émettait de la lumière, on verrait les objets dans le noir complet. Ce n'est pas le cas : l'œil a besoin de recevoir de la lumière venue de l'objet.",
                "Réponse : Vénus diffuse la lumière du Soleil, Sirius produit la sienne ; le faisceau n'est visible que si quelque chose diffuse sa lumière vers l'œil ; l'œil reçoit la lumière.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot à sa définition.",
            pairs: [
              { left: "Source primaire", right: "Objet qui produit sa propre lumière" },
              { left: "Objet diffusant", right: "Objet qui renvoie dans toutes les directions la lumière reçue" },
              { left: "Récepteur", right: "Objet qui reçoit la lumière, comme l'œil" },
              { left: "Milieu transparent", right: "Il laisse passer la lumière et l'on voit nettement à travers" },
              { left: "Milieu translucide", right: "Il laisse passer la lumière mais l'image est floue" },
              { left: "Milieu opaque", right: "Il ne laisse pas passer la lumière" },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces objets est une source primaire de lumière ?",
              options: ["La Lune", "Un miroir", "Une bougie allumée", "Une feuille blanche"],
              answer: 2,
              why: "La flamme de la bougie produit sa propre lumière ; la Lune, le miroir et la feuille renvoient la lumière qu'ils reçoivent.",
            },
            {
              q: "Pourquoi voit-on la Lune ?",
              options: ["Elle renvoie la lumière du Soleil", "Elle produit sa propre lumière", "Nos yeux l'éclairent", "Elle reflète les lumières des villes"],
              answer: 0,
              why: "La Lune est un objet diffusant : elle renvoie vers nous une partie de la lumière qu'elle reçoit du Soleil.",
            },
            {
              q: "Quelle est la condition pour voir un objet ?",
              options: ["L'objet doit être blanc", "L'œil doit envoyer des rayons de lumière jusqu'à l'objet", "L'objet doit être une source primaire", "De la lumière issue de l'objet doit entrer dans l'œil"],
              answer: 3,
              why: "On voit un objet lorsque de la lumière partie de cet objet, qu'il la produise ou la diffuse, pénètre dans l'œil.",
            },
            {
              q: "Le papier calque laisse passer la lumière, mais on ne voit pas nettement à travers. Il est...",
              options: ["transparent", "translucide", "opaque"],
              answer: 1,
              why: "Un milieu translucide laisse passer la lumière sans permettre de voir nettement à travers.",
            },
            {
              q: "Dans une pièce totalement obscure, peut-on voir un objet blanc ?",
              options: ["Oui, car un objet blanc brille toujours un peu", "Non, il ne reçoit aucune lumière à renvoyer", "Oui, si on le regarde longtemps", "Oui, mais seulement en gris"],
              answer: 1,
              why: "Un objet blanc est un objet diffusant : sans lumière reçue, il ne renvoie rien vers l'œil.",
            },
          ],
          trap: "Croire que la Lune, ou un objet blanc, produit de la lumière : ce sont des objets diffusants, qui ne font que renvoyer la lumière d'une source primaire.",
          method: "Pour expliquer qu'un objet est visible, écrivez toujours la chaîne de la lumière avec des flèches, en partant de la source primaire et en finissant par l'œil : par exemple Soleil → Lune → œil.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'propagation-rectiligne',
          title: 'La propagation rectiligne de la lumière, ombres',
          minutes: 30,
          objectives: [
            "Énoncer que la lumière se propage en ligne droite dans un milieu transparent et homogène.",
            "Représenter la lumière par un rayon lumineux et un faisceau.",
            "Identifier l'ombre propre, l'ombre portée et le cône d'ombre d'un objet éclairé.",
            "Expliquer une éclipse de Lune et une éclipse de Soleil.",
          ],
          course: [
            {
              heading: "La lumière se propage en ligne droite",
              paragraphs: [
                "Placez trois cartons percés d'un petit trou entre une lampe et votre œil : vous ne voyez la lampe que si les trois trous sont parfaitement alignés. De même, à travers un tuyau droit, on voit la flamme d'une bougie, mais plus du tout si le tuyau est courbé. Ces expériences montrent que la lumière va en ligne droite.",
                "C'est vrai dans un milieu transparent et homogène, c'est-à-dire qui a partout les mêmes propriétés : l'air d'une pièce, l'eau d'un aquarium, un bloc de verre. Les rayons de soleil qui passent entre les nuages, ou un faisceau laser dans de la fumée, dessinent d'ailleurs des lignes droites.",
              ],
              box: { label: "Propriété", text: "Dans un milieu transparent et homogène, la lumière se propage en ligne droite : c'est la propagation rectiligne de la lumière." },
            },
            {
              heading: "Rayons et faisceaux",
              paragraphs: [
                "Pour représenter le trajet de la lumière, on utilise un modèle : le rayon lumineux. On le trace à la règle, par une droite munie d'une flèche qui indique le sens de propagation, de la source vers l'objet éclairé ou vers l'œil.",
                "Un faisceau lumineux est un ensemble de rayons. On le représente par ses deux rayons extrêmes (ses bords). Un faisceau est divergent si ses rayons s'écartent (la lumière d'une lampe de poche), convergent si ses rayons se rapprochent (la lumière qui sort d'une loupe tenue au soleil), parallèle si ses rayons restent à égale distance (un faisceau laser).",
              ],
              box: { label: "Définition", text: "Un rayon lumineux est une droite fléchée qui modélise le trajet de la lumière. Un faisceau lumineux est un ensemble de rayons : divergent, convergent ou parallèle." },
            },
            {
              heading: "Ombre propre, ombre portée, cône d'ombre",
              paragraphs: [
                "Quand une source éclaire un objet opaque, la lumière ne traverse pas l'objet et ne le contourne pas, puisqu'elle va en ligne droite. La partie de l'objet qui n'est pas éclairée s'appelle l'ombre propre. Sur un écran (ou sur le sol) placé derrière l'objet, la zone sombre s'appelle l'ombre portée. L'espace situé derrière l'objet, qui ne reçoit pas de lumière de la source, est le cône d'ombre.",
                "Pour construire l'ombre portée, on trace les rayons qui partent de la source et passent par les bords de l'objet, jusqu'à l'écran. Ces rayons s'écartent de plus en plus en s'éloignant de la source : plus l'objet est proche d'une petite source, plus son ombre portée sur l'écran est grande. C'est ainsi qu'on fait des ombres chinoises géantes avec les mains près d'une lampe.",
              ],
              box: { label: "Définition", text: "Ombre propre : partie non éclairée de l'objet. Ombre portée : zone sombre sur l'écran ou le sol, derrière l'objet. Cône d'ombre : espace derrière l'objet qui ne reçoit pas la lumière de la source." },
            },
            {
              heading: "Les éclipses",
              paragraphs: [
                "Les éclipses sont des ombres géantes. Lors d'une éclipse de Lune, le Soleil, la Terre et la Lune sont alignés, la Terre au milieu : la Lune passe dans le cône d'ombre de la Terre et n'est plus éclairée directement par le Soleil ; elle s'assombrit.",
                "Lors d'une éclipse de Soleil, c'est la Lune qui passe entre le Soleil et la Terre : l'ombre de la Lune atteint une petite région de la Terre. Pour les habitants de cette région, le Soleil est caché par la Lune. Il ne faut jamais regarder le Soleil directement, même pendant une éclipse, sans lunettes spéciales : cela peut abîmer les yeux définitivement.",
              ],
            },
          ],
          keyPoints: [
            "Dans un milieu transparent et homogène, la lumière se propage en ligne droite.",
            "Rayon lumineux : droite fléchée de la source vers l'objet ou l'œil ; faisceau : ensemble de rayons.",
            "Ombre propre : sur l'objet ; ombre portée : sur l'écran ; cône d'ombre : l'espace sans lumière derrière l'objet.",
            "Plus l'objet est proche d'une petite source, plus son ombre portée est grande.",
            "Éclipse de Lune : la Lune dans l'ombre de la Terre. Éclipse de Soleil : l'ombre de la Lune sur la Terre.",
          ],
          example: {
            statement: "Le soir, un lampadaire éclaire Lina, debout sur le trottoir. 1) Où se trouvent son ombre propre et son ombre portée ? 2) Lina s'approche du pied du lampadaire. Comment évolue la longueur de son ombre portée sur le sol ? Justifier à l'aide des rayons lumineux.",
            solution: [
              "1) L'ombre propre est la partie de Lina qui n'est pas tournée vers le lampadaire : son dos (si elle lui tourne le dos). L'ombre portée est la zone sombre sur le sol, du côté opposé au lampadaire.",
              "2) La lumière se propage en ligne droite. L'extrémité de l'ombre portée se trouve là où le rayon qui part de la lampe et frôle le haut de la tête de Lina touche le sol.",
              "Quand Lina s'approche du pied du lampadaire, ce rayon devient plus pentu (plus proche de la verticale) : il touche le sol plus près de ses pieds.",
              "Réponse : en s'approchant du lampadaire, l'ombre portée de Lina raccourcit ; juste sous la lampe, elle est presque réduite à ses pieds.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Une balle de tennis est éclairée par une lampe ; derrière la balle, un écran blanc. Recopier et compléter avec les mots ombre propre, ombre portée, cône d'ombre : a) la moitié de la balle tournée vers l'écran est dans l'... ; b) la tache sombre et ronde sur l'écran est l'... ; c) l'espace entre la balle et l'écran, que la lumière de la lampe n'atteint pas, est le...",
              hint: "L'ombre propre est sur l'objet, l'ombre portée sur l'écran, et le cône d'ombre est un volume d'espace.",
              solution: [
                "a) La moitié de la balle non éclairée est dans l'ombre propre.",
                "b) La tache sombre sur l'écran est l'ombre portée.",
                "c) L'espace sans lumière entre la balle et l'écran est le cône d'ombre.",
                "Réponse : ombre propre, ombre portée, cône d'ombre.",
              ],
            },
            {
              level: 2,
              statement: "1) Axel regarde la flamme d'une bougie à travers un tuyau d'arrosage bien droit : il la voit. Il courbe le tuyau : il ne la voit plus. Expliquer. 2) Le soleil passe entre les branches d'un arbre par temps de brouillard léger : on voit des traits de lumière bien droits. Quelle propriété de la lumière ces traits illustrent-ils ? 3) Quel type de faisceau sort d'une lampe de poche ?",
              hint: "La lumière ne peut pas suivre une courbe dans un milieu homogène ; le brouillard joue le même rôle que la fumée pour un laser.",
              solution: [
                "1) Dans l'air, la lumière se propage en ligne droite. Dans le tuyau droit, elle va directement de la flamme à l'œil. Dans le tuyau courbé, elle ne peut pas suivre la courbe : elle est arrêtée par la paroi opaque et n'atteint pas l'œil.",
                "2) Les gouttelettes du brouillard diffusent la lumière : on voit le trajet des faisceaux, qui sont droits. Ils illustrent la propagation rectiligne de la lumière.",
                "3) Les rayons d'une lampe de poche s'écartent en s'éloignant : c'est un faisceau divergent.",
                "Réponse : la lumière se propage en ligne droite dans un milieu transparent et homogène ; la lampe de poche produit un faisceau divergent.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Une petite lampe (considérée comme un point) éclaire une balle de 6 cm de diamètre placée à 50 cm d'elle. Un écran est placé à 2 m de la lampe. On admet que la taille de l'ombre portée est proportionnelle à la distance entre la lampe et l'écran, comparée à la distance entre la lampe et la balle : si l'écran est 3 fois plus loin de la lampe que la balle, l'ombre est 3 fois plus grande que la balle. 1) Calculer le diamètre de l'ombre portée. 2) On éloigne la balle de la lampe : on la place à 1 m de la lampe, l'écran restant à 2 m. Calculer le nouveau diamètre de l'ombre. 3) Où placer la balle pour obtenir la plus grande ombre possible ?",
              hint: "Exprimez toutes les distances dans la même unité (en centimètres), puis cherchez combien de fois l'écran est plus loin de la lampe que la balle.",
              solution: [
                "1) Distances en centimètres : balle à 50 cm, écran à 200 cm. 200 ÷ 50 = 4 : l'écran est 4 fois plus loin que la balle. Diamètre de l'ombre : 6 × 4 = 24 cm.",
                "2) Balle à 100 cm, écran à 200 cm : 200 ÷ 100 = 2. Diamètre de l'ombre : 6 × 2 = 12 cm.",
                "L'ombre est plus petite quand la balle s'éloigne de la lampe (et se rapproche de l'écran), car les rayons qui frôlent ses bords ont moins de distance pour s'écarter avant l'écran.",
                "3) Pour obtenir la plus grande ombre, il faut placer la balle le plus près possible de la lampe.",
                "Réponse : 24 cm, puis 12 cm ; la balle doit être placée tout près de la lampe pour que l'ombre soit la plus grande.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La lumière et les ombres.",
            statements: [
              { text: "Dans l'air d'une pièce, la lumière se propage en ligne droite.", true: true, why: "L'air d'une pièce est un milieu transparent et homogène : la lumière y va en ligne droite." },
              { text: "La lumière peut contourner un objet opaque pour éclairer ce qui est derrière.", true: false, why: "Elle va en ligne droite : derrière un objet opaque se forme un cône d'ombre que la lumière de la source n'atteint pas." },
              { text: "L'ombre portée se trouve sur l'objet lui-même.", true: false, why: "C'est l'ombre propre qui est sur l'objet ; l'ombre portée est sur l'écran ou sur le sol." },
              { text: "Plus on approche sa main d'une petite lampe, plus son ombre sur le mur est grande.", true: true, why: "Les rayons qui frôlent les bords de la main s'écartent davantage avant d'atteindre le mur." },
              { text: "Lors d'une éclipse de Lune, la Lune passe dans l'ombre de la Terre.", true: true, why: "Le Soleil, la Terre et la Lune sont alignés, la Terre au milieu : elle prive la Lune de la lumière directe du Soleil." },
              { text: "Un rayon lumineux se trace à main levée, en suivant une courbe.", true: false, why: "Il se trace à la règle, en ligne droite, avec une flèche qui indique le sens de propagation." },
              { text: "On peut regarder le Soleil sans protection pendant une éclipse.", true: false, why: "C'est dangereux pour les yeux, même pendant une éclipse : il faut des lunettes spéciales." },
            ],
          },
          quiz: [
            {
              q: "Comment se propage la lumière dans un milieu transparent et homogène ?",
              options: ["En ligne droite", "En zigzag", "En suivant les courbes", "En tournant en rond"],
              answer: 0,
              why: "Dans un milieu transparent et homogène, la propagation de la lumière est rectiligne.",
            },
            {
              q: "Comment appelle-t-on la zone sombre qui se forme sur un écran derrière un objet éclairé ?",
              options: ["L'ombre propre", "Le faisceau", "Le cône d'ombre", "L'ombre portée"],
              answer: 3,
              why: "L'ombre portée est la zone sombre sur l'écran ; l'ombre propre est sur l'objet, et le cône d'ombre est l'espace sans lumière derrière l'objet.",
            },
            {
              q: "Les rayons d'un faisceau s'écartent les uns des autres. Ce faisceau est...",
              options: ["convergent", "divergent", "parallèle"],
              answer: 1,
              why: "Un faisceau divergent est formé de rayons qui s'écartent en s'éloignant de la source.",
            },
            {
              q: "Que se passe-t-il lors d'une éclipse de Soleil ?",
              options: ["La Terre passe entre le Soleil et la Lune", "Le Soleil s'éteint quelques minutes", "La Lune passe entre le Soleil et la Terre", "La Lune passe dans l'ombre de la Terre"],
              answer: 2,
              why: "La Lune s'interpose entre le Soleil et la Terre : son ombre atteint une région de la Terre, où le Soleil est caché.",
            },
            {
              q: "On approche un objet d'une petite lampe, l'écran restant fixe. Son ombre portée...",
              options: ["grandit", "rétrécit", "ne change pas", "disparaît"],
              answer: 0,
              why: "Plus l'objet est proche de la source, plus les rayons qui frôlent ses bords s'écartent avant d'atteindre l'écran : l'ombre grandit.",
            },
          ],
          trap: "Confondre l'ombre propre et l'ombre portée : l'ombre propre est sur l'objet lui-même (sa face non éclairée), l'ombre portée est sur l'écran ou sur le sol.",
          method: "Pour construire une ombre, tracez à la règle les deux rayons qui partent de la source et frôlent les bords de l'objet, prolongez-les jusqu'à l'écran, puis hachurez la zone qu'aucun rayon n'atteint.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vitesse-lumiere',
          title: 'La vitesse de la lumière et l\'année-lumière',
          minutes: 30,
          objectives: [
            "Citer la valeur de la vitesse de la lumière dans le vide et dans l'air : environ 300 000 km/s.",
            "Calculer la durée de trajet de la lumière avec la relation t = d ÷ v.",
            "Comparer la vitesse de la lumière à celle du son.",
            "Définir l'année-lumière comme une unité de distance.",
          ],
          course: [
            {
              heading: "Une vitesse colossale",
              paragraphs: [
                "La lumière se déplace très vite : dans le vide et dans l'air, sa vitesse vaut environ 300 000 kilomètres par seconde (300 000 km/s). En une seule seconde, elle pourrait faire 7,5 fois le tour de la Terre (dont la circonférence mesure environ 40 000 km, et 300 000 ÷ 40 000 = 7,5).",
                "Dans les autres milieux transparents, elle va un peu moins vite : environ 225 000 km/s dans l'eau et environ 200 000 km/s dans le verre. Aucun objet ne peut aller plus vite que la lumière dans le vide.",
              ],
              box: { label: "Repère", text: "Vitesse de la lumière dans le vide et dans l'air : environ 300 000 km/s, soit 300 000 000 m/s. Dans l'eau : environ 225 000 km/s. Dans le verre : environ 200 000 km/s." },
            },
            {
              heading: "La lumière et le son",
              paragraphs: [
                "Le son se propage dans l'air à environ 340 m/s : la lumière va presque un million de fois plus vite. Pendant un orage, l'éclair et le tonnerre se produisent au même moment, mais on voit l'éclair avant d'entendre le tonnerre : la lumière arrive presque instantanément, le son met plusieurs secondes.",
                "On peut ainsi estimer la distance de l'orage : on compte les secondes entre l'éclair et le tonnerre, et on multiplie par 340 m/s. Comme le son parcourt environ 1 km en 3 s, il suffit de diviser le nombre de secondes par 3 pour avoir la distance en kilomètres.",
              ],
            },
            {
              heading: "Calculer la durée du trajet de la lumière",
              paragraphs: [
                "Pour calculer la durée du trajet de la lumière, on utilise la relation t = d ÷ v. La Lune est à environ 384 000 km de la Terre : sa lumière met 384 000 ÷ 300 000 = 1,28 s pour nous parvenir. Le Soleil est à environ 150 millions de kilomètres : sa lumière met 150 000 000 ÷ 300 000 = 500 s, soit 8 minutes et 20 secondes.",
                "Voir loin, c'est donc voir dans le passé : nous voyons le Soleil tel qu'il était il y a un peu plus de 8 minutes, et la Lune telle qu'elle était il y a un peu plus d'une seconde.",
              ],
              box: { label: "Formule", text: "Durée du trajet de la lumière : t = d ÷ v, avec v = 300 000 km/s si d est en km (t est alors en secondes)." },
            },
            {
              heading: "L'année-lumière, une unité de distance",
              paragraphs: [
                "Les étoiles sont si lointaines que le kilomètre devient une unité trop petite. Les astronomes utilisent l'année-lumière (symbole : al) : c'est la distance parcourue par la lumière dans le vide en une année. Une année compte 365 × 24 × 3 600 = 31 536 000 secondes ; en une année, la lumière parcourt donc 300 000 × 31 536 000, soit environ 9 461 milliards de kilomètres.",
                "Malgré son nom, l'année-lumière n'est pas une durée : c'est une distance. L'étoile la plus proche du Soleil, Proxima du Centaure, est à environ 4,2 années-lumière : sa lumière met environ 4,2 ans pour nous parvenir. Notre galaxie, la Voie lactée, mesure environ 100 000 années-lumière de diamètre, et la galaxie d'Andromède est à environ 2,5 millions d'années-lumière.",
              ],
              box: { label: "Définition", text: "Une année-lumière (al) est la distance parcourue par la lumière dans le vide en une année : environ 9 461 milliards de kilomètres. C'est une unité de distance, pas de durée." },
            },
          ],
          keyPoints: [
            "Vitesse de la lumière dans le vide et l'air : environ 300 000 km/s.",
            "La lumière va environ un million de fois plus vite que le son (340 m/s dans l'air).",
            "Durée de trajet : t = d ÷ v ; la lumière du Soleil met environ 8 min 20 s pour nous parvenir.",
            "Voir loin, c'est voir dans le passé.",
            "L'année-lumière est une distance : environ 9 461 milliards de km.",
          ],
          example: {
            statement: "Calculer, en kilomètres, la distance parcourue par la lumière dans le vide en une année de 365 jours, avec v = 300 000 km/s.",
            solution: [
              "Nombre de secondes dans une journée : 24 × 3 600 = 86 400 s.",
              "Nombre de secondes dans une année : 365 × 86 400 = 31 536 000 s.",
              "Distance parcourue : d = v × t = 300 000 × 31 536 000 = 9 460 800 000 000 km.",
              "Ce nombre se lit « 9 460 milliards 800 millions » : environ 9 461 milliards de kilomètres.",
              "Réponse : une année-lumière vaut environ 9 461 milliards de kilomètres.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "La Lune est à environ 384 000 km de la Terre. Calculer la durée que met la lumière de la Lune pour arriver jusqu'à nous (v = 300 000 km/s).",
              hint: "Utilisez t = d ÷ v, avec la distance en kilomètres et la vitesse en kilomètres par seconde : le résultat est en secondes.",
              solution: [
                "On utilise t = d ÷ v avec d = 384 000 km et v = 300 000 km/s.",
                "t = 384 000 ÷ 300 000 = 1,28 s.",
                "Réponse : la lumière de la Lune met environ 1,3 seconde pour arriver jusqu'à nous.",
              ],
            },
            {
              level: 2,
              statement: "Pendant un orage, Maxime voit un éclair, puis entend le tonnerre 6 secondes plus tard. Le son se propage dans l'air à 340 m/s ; la lumière à 300 000 000 m/s. 1) Calculer la distance entre Maxime et l'éclair. 2) Calculer la durée mise par la lumière de l'éclair pour parvenir à Maxime. 3) Pourquoi peut-on considérer que l'on voit l'éclair au moment même où il se produit ?",
              hint: "Pour la question 1, le son met 6 s : utilisez d = v × t. Pour la question 2, utilisez t = d ÷ v avec la vitesse de la lumière en m/s.",
              solution: [
                "1) d = v × t = 340 × 6 = 2 040 m, soit environ 2 km.",
                "2) t = d ÷ v = 2 040 ÷ 300 000 000 ≈ 0,000 006 8 s, soit environ 7 millionièmes de seconde.",
                "3) Cette durée est beaucoup trop courte pour être perçue : la lumière arrive pratiquement à l'instant de l'éclair, alors que le son met 6 s.",
                "Réponse : l'orage est à environ 2 040 m ; la lumière met environ 7 millionièmes de seconde, une durée imperceptible.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Proxima du Centaure, l'étoile la plus proche du Soleil, est à environ 4,2 années-lumière. On prend 1 al ≈ 9 461 milliards de km. 1) Calculer cette distance en milliards de kilomètres, puis l'arrondir à 40 000 milliards de km. 2) Une sonde spatiale imaginaire voyage à 60 000 km/h (données fictives). En utilisant la distance arrondie, calculer la durée du voyage en heures, puis en années (1 an ≈ 8 760 h). 3) Quand on observe Proxima aujourd'hui, la voit-on telle qu'elle est maintenant ? Expliquer.",
              hint: "40 000 milliards s'écrit 40 000 000 000 000. Pour diviser par 60 000, vous pouvez d'abord diviser 40 000 milliards par 6, puis par 10 000.",
              solution: [
                "1) d = 4,2 × 9 461 = 39 736,2 milliards de km, soit environ 40 000 milliards de km.",
                "2) t = d ÷ v = 40 000 000 000 000 ÷ 60 000 ≈ 666 666 667 h.",
                "En années : 666 666 667 ÷ 8 760 ≈ 76 104 ans, soit environ 76 000 ans.",
                "3) Non : la lumière de Proxima met environ 4,2 ans pour nous parvenir. Nous la voyons telle qu'elle était il y a environ 4,2 ans.",
                "Réponse : environ 40 000 milliards de km ; la sonde mettrait environ 76 000 ans ; on voit Proxima telle qu'elle était il y a 4,2 ans.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces trajets de la lumière du plus court au plus long en durée.",
            items: [
              "D'un bout à l'autre d'une salle de classe",
              "De la Lune à la Terre (environ 1,3 seconde)",
              "Du Soleil à la Terre (environ 8 minutes)",
              "De Proxima du Centaure à la Terre (environ 4,2 ans)",
              "De la galaxie d'Andromède à la Terre (environ 2,5 millions d'années)",
            ],
          },
          quiz: [
            {
              q: "Quelle est la vitesse de la lumière dans le vide ?",
              options: ["340 m/s, comme le son", "300 km/h", "3 000 km/s", "300 000 km/s"],
              answer: 3,
              why: "La lumière se propage dans le vide (et dans l'air) à environ 300 000 km/s ; 340 m/s est la vitesse du son dans l'air.",
            },
            {
              q: "Pendant un orage, pourquoi voit-on l'éclair avant d'entendre le tonnerre ?",
              options: ["L'éclair se produit avant le tonnerre", "La lumière va beaucoup plus vite que le son", "Les yeux réagissent plus vite que les oreilles", "Le son est arrêté par les nuages"],
              answer: 1,
              why: "Éclair et tonnerre se produisent en même temps, mais la lumière arrive presque instantanément alors que le son va à environ 340 m/s.",
            },
            {
              q: "Qu'est-ce qu'une année-lumière ?",
              options: ["Une durée d'un an", "La vitesse de la lumière", "Une distance", "L'âge d'une étoile"],
              answer: 2,
              why: "L'année-lumière est la distance parcourue par la lumière dans le vide en une année : c'est une unité de distance.",
            },
            {
              q: "Combien de temps met la lumière du Soleil pour nous parvenir ?",
              options: ["Environ 8 minutes", "Environ 1 seconde", "Environ 8 heures", "Elle arrive instantanément"],
              answer: 0,
              why: "t = 150 000 000 ÷ 300 000 = 500 s, soit 8 minutes et 20 secondes.",
            },
            {
              q: "Une étoile est à 10 années-lumière. Sa lumière que l'on voit aujourd'hui est partie il y a...",
              options: ["10 jours", "10 ans", "10 minutes", "10 secondes"],
              answer: 1,
              why: "La lumière parcourt une année-lumière en un an : pour 10 années-lumière, elle met 10 ans.",
            },
          ],
          trap: "Croire que l'année-lumière est une durée parce qu'elle contient le mot « année » : c'est une distance, celle que parcourt la lumière en un an.",
          method: "Pour un calcul de durée de trajet, écrivez la formule t = d ÷ v, vérifiez que la distance et la vitesse utilisent la même unité de longueur (km avec km/s, m avec m/s), puis convertissez le résultat en minutes si le nombre de secondes est grand.",
        },
      ],
    },
  ],
}
