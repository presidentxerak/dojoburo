import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-4e',
  chapters: [
    /* ================================================================== */
    /* INFORMER, S'INFORMER, DÉFORMER ?                                     */
    /* ================================================================== */
    {
      id: 'informer-deformer',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'presse-et-medias',
          title: 'La presse et les médias : qui informe, et comment ?',
          minutes: 30,
          objectives: [
            "Identifier les principaux médias d'information (presse écrite, radio, télévision, internet) et leurs caractéristiques.",
            "Nommer les éléments d'une une de journal et d'un article : titre, chapeau, photographie, légende, rubrique.",
            "Expliquer le rôle du journaliste et des agences de presse dans la fabrication de l'information.",
            "Situer quelques repères de l'histoire de la presse et de la liberté d'informer.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un média ?",
              paragraphs: [
                "Un média est un moyen de diffuser des informations, des idées ou des divertissements à un large public. On parle de médias de masse parce qu'ils s'adressent à des milliers, voire à des millions de personnes en même temps. Le mot vient du latin medium, qui signifie « ce qui est au milieu » : le média est l'intermédiaire entre l'événement et vous.",
                "On distingue quatre grandes familles. La presse écrite regroupe les journaux et les magazines, sur papier ou en version numérique. Un quotidien paraît chaque jour, un hebdomadaire chaque semaine, un mensuel chaque mois. La presse peut être nationale (diffusée dans tout le pays) ou régionale (centrée sur une région). La radio et la télévision diffusent des émissions, dont les journaux d'information appelés flashs ou journaux télévisés. Enfin, internet rassemble les sites d'information, les applications, les podcasts et les réseaux sociaux.",
                "Chaque média a ses forces. La radio est rapide et s'écoute en faisant autre chose. La télévision montre des images. La presse écrite prend le temps d'expliquer et d'analyser. Internet est immédiat et mis à jour en permanence, mais il mélange les contenus de journalistes et ceux de n'importe quel internaute, ce qui demande plus de vigilance.",
              ],
              box: { label: "Définition", text: "Un média est un moyen de communication qui diffuse des informations à un large public : presse écrite (quotidien, hebdomadaire, mensuel), radio, télévision, internet (sites, applications, podcasts, réseaux sociaux)." },
            },
            {
              heading: "Qui fabrique l'information ?",
              paragraphs: [
                "L'information est fabriquée par des journalistes. Leur travail suit plusieurs étapes : chercher l'information (sur le terrain, auprès de témoins, d'experts, dans des documents), la vérifier en la recoupant avec d'autres sources, la hiérarchiser (décider ce qui est le plus important), puis la rédiger ou la mettre en images. Dans un journal, l'ensemble des journalistes forme la rédaction, dirigée par un rédacteur en chef.",
                "Les journalistes ne peuvent pas être partout. Ils s'appuient sur les agences de presse, qui envoient aux médias des dépêches : des textes courts, rapides et factuels sur les événements du monde entier. L'Agence France-Presse (AFP), créée en 1944, est l'une des plus grandes agences mondiales, avec Reuters et Associated Press.",
                "Chaque média a sa ligne éditoriale : ses choix de sujets, son ton, parfois ses orientations politiques. Pour vivre, il a besoin d'argent : ventes, abonnements, publicité, aides de l'État. En France, il existe des médias publics (comme Radio France ou France Télévisions) et des médias privés. Savoir qui possède un média et comment il est financé aide à mieux comprendre ses choix.",
              ],
              box: { label: "À retenir", text: "Tout le monde peut publier sur internet, mais tout le monde n'est pas journaliste. Le journaliste vérifie, recoupe et cite ses sources selon des règles professionnelles ; une personne qui publie un message sur un réseau social n'y est pas tenue." },
            },
            {
              heading: "Lire une une et reconnaître les genres d'articles",
              paragraphs: [
                "La une est la première page d'un journal. Elle sert de vitrine : elle doit donner envie d'acheter ou de lire. On y trouve le nom du journal, la date et le prix, le gros titre (appelé manchette) qui annonce l'information principale, souvent une grande photographie accompagnée de sa légende, et des renvois vers les articles des pages intérieures.",
                "Un article de presse comprend un titre, parfois un surtitre au-dessus, un chapeau (un court texte, souvent en gras, qui résume l'essentiel), le corps de l'article, parfois découpé par des intertitres, et la signature du journaliste. Les articles sont classés par rubriques : international, politique, société, économie, sport, culture, faits divers.",
                "Il existe plusieurs genres journalistiques. La brève donne une information en quelques lignes. Le compte rendu raconte un événement (un match, une réunion). Le reportage fait vivre un lieu ou une situation à travers ce que le journaliste a vu et entendu sur place. L'interview rapporte un entretien sous forme de questions et de réponses. L'enquête approfondit un sujet pendant des semaines. L'éditorial, lui, donne l'opinion du journal.",
              ],
              box: { label: "Repère", text: "La une : première page. La manchette : le gros titre de la une. Le chapeau : le court texte qui résume l'article. La légende : le texte qui accompagne une photographie. La rubrique : la partie du journal consacrée à un thème." },
            },
            {
              heading: "Une liberté conquise et encadrée",
              paragraphs: [
                "Le premier journal périodique français, La Gazette, est fondé en 1631 par Théophraste Renaudot, un médecin protégé par le cardinal de Richelieu. Sous l'Ancien Régime, la presse est surveillée et censurée par le pouvoir royal. En 1789, la Déclaration des droits de l'homme et du citoyen proclame dans son article 11 la libre communication des pensées et des opinions.",
                "La loi du 29 juillet 1881 sur la liberté de la presse, toujours en vigueur, garantit qu'on peut publier un journal sans autorisation préalable. Cette liberté a des limites : la loi punit par exemple la diffamation (accuser quelqu'un d'un fait qui porte atteinte à son honneur) et l'injure. En 1971, la Charte de Munich rassemble les devoirs des journalistes européens : respecter la vérité, ne publier que des informations dont l'origine est connue, rectifier les informations inexactes, protéger le secret de leurs sources.",
                "La littérature s'est aussi intéressée aux coulisses de la presse. Dans Bel-Ami (1885), Guy de Maupassant raconte l'ascension de Georges Duroy, un ancien sous-officier qui devient journaliste et utilise son journal pour réussir, sans beaucoup de scrupules. Le roman montre déjà qu'un média peut informer, mais aussi influencer.",
              ],
              box: { label: "Repère", text: "1631 : La Gazette de Renaudot. 1789 : article 11 de la Déclaration des droits de l'homme et du citoyen. 1881 : loi sur la liberté de la presse. 1944 : création de l'AFP. 1971 : Charte de Munich sur les devoirs et les droits des journalistes." },
            },
          ],
          keyPoints: [
            "Un média diffuse des informations à un large public : presse écrite, radio, télévision, internet.",
            "Quotidien : chaque jour ; hebdomadaire : chaque semaine ; mensuel : chaque mois.",
            "Le journaliste cherche, vérifie, hiérarchise et rédige l'information ; les agences de presse (AFP) fournissent des dépêches.",
            "Une : première page ; manchette : gros titre ; chapeau : résumé de l'article ; légende : texte sous la photo.",
            "Genres : brève, compte rendu, reportage, interview, enquête (informer) ; éditorial (donner l'opinion du journal).",
            "Repères : La Gazette (1631), loi sur la liberté de la presse (1881), Charte de Munich (1971).",
          ],
          example: {
            statement: "Voici la description d'une une inventée pour l'exercice (données fictives). En haut : « Le Courrier du Val », « Mardi 14 octobre, 1,50 € ». Au centre, en très gros caractères : « Le pont de la Roche rouvre après deux ans de travaux ». Dessous, une grande photo et cette phrase : « Les premiers cyclistes ont traversé le pont lundi à 7 heures. » À droite, trois petits encadrés : « Sport : le club local en finale, page 18 », « Culture : le festival de jazz dévoile son programme, page 21 », « Météo : pluie jusqu'à jeudi, page 24 ». Nommez chaque élément, puis dites de quel type de journal il s'agit.",
            solution: [
              "« Le Courrier du Val » est le nom du journal ; « Mardi 14 octobre, 1,50 € » donne la date de parution et le prix.",
              "« Le pont de la Roche rouvre après deux ans de travaux » est la manchette, le gros titre de la une : c'est l'information que le journal juge la plus importante du jour.",
              "La phrase sous la photo est la légende : elle explique ce que montre l'image (qui, quand, où).",
              "Les trois encadrés de droite sont des renvois vers des articles des pages intérieures ; ils indiquent trois rubriques : sport, culture, météo.",
              "Type de journal : la date précise le jour (mardi 14 octobre) et l'information est très locale (un pont, un club local) : c'est vraisemblablement un quotidien régional.",
              "Réponse : nom du journal, date et prix, manchette, photo et légende, renvois ; il s'agit d'un quotidien régional.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces médias selon leur support (presse écrite, radio, télévision, internet) : a) un journal télévisé de 20 heures ; b) un quotidien régional ; c) un podcast d'actualité ; d) un flash d'information de 7 heures du matin à la radio ; e) un magazine scientifique pour la jeunesse qui paraît chaque mois ; f) le compte d'un journal sur un réseau social ; g) un hebdomadaire d'actualité. Pour les titres de presse écrite, précisez la périodicité.",
              hint: "Demandez-vous d'abord comment le public reçoit l'information : en lisant un papier, en écoutant un poste, en regardant un écran de télévision, ou en se connectant. La périodicité, c'est le rythme de parution.",
              solution: [
                "Presse écrite : b) le quotidien régional (il paraît chaque jour), e) le magazine scientifique (un mensuel, puisqu'il paraît chaque mois), g) l'hebdomadaire (il paraît chaque semaine).",
                "Radio : d) le flash d'information de 7 heures.",
                "Télévision : a) le journal télévisé de 20 heures.",
                "Internet : c) le podcast d'actualité et f) le compte du journal sur un réseau social.",
                "Remarque : beaucoup de médias existent sur plusieurs supports à la fois ; un quotidien a souvent aussi un site et des comptes sur les réseaux sociaux.",
              ],
            },
            {
              level: 2,
              statement: "Voici quatre extraits inventés pour l'exercice (données fictives). Identifiez le genre journalistique de chacun (brève, reportage, interview, éditorial) et justifiez par un indice. A) « Une collision entre deux voitures a eu lieu hier vers 18 heures au carrefour des Tilleuls. Il n'y a pas de blessé. » B) « Pourquoi avez-vous choisi de devenir apicultrice ? Parce que je voulais travailler dehors, au rythme des saisons. » C) « Il est 5 heures. Sous les néons du marché de gros, les cagettes s'empilent, les chariots grincent et l'odeur des fraises se mêle à celle du gasoil. » D) « Fermer la piscine municipale serait une erreur grave. Notre journal le répète : une ville doit permettre à chaque enfant d'apprendre à nager. »",
              hint: "Cherchez les indices : la longueur du texte, la présence de questions et de réponses, des détails vus et entendus sur place, ou des mots qui expriment un avis.",
              solution: [
                "A) Une brève : le texte est très court et donne seulement les faits essentiels (quoi, où, quand, conséquence).",
                "B) Une interview : le texte prend la forme d'une question du journaliste suivie de la réponse de la personne interrogée.",
                "C) Un reportage : le journaliste décrit ce qu'il voit, entend et sent sur place (les néons, le grincement des chariots, l'odeur des fraises) au présent, pour faire vivre la scène au lecteur.",
                "D) Un éditorial : le texte donne une opinion (« serait une erreur grave », « une ville doit ») et engage le journal tout entier (« Notre journal le répète »).",
                "Résultat : A brève, B interview, C reportage, D éditorial.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un événement inventé pour l'exercice (données fictives) : dans la nuit de samedi à dimanche, un orage a fait déborder la rivière de la ville de Saint-Aubin ; une centaine de caves ont été inondées, l'école est fermée lundi, personne n'est blessé. a) Expliquez comment chacun de ces trois médias traiterait l'événement, avec un avantage et une limite : un flash radio dimanche à 7 heures ; le site d'un quotidien régional dimanche à midi ; le journal papier de lundi matin. b) Rédigez une manchette pour la une du lundi et une légende pour la photo d'une rue sous l'eau.",
              hint: "Pensez au moment où chaque média diffuse l'information, à ce qu'il peut montrer (son, images, texte long, mises à jour) et au temps dont dispose le journaliste pour vérifier et expliquer.",
              solution: [
                "Le flash radio : il annonce l'événement très vite, en quelques phrases, avec peut-être un témoignage enregistré. Avantage : la rapidité, les habitants sont prévenus tout de suite. Limite : peu de détails, et certaines informations ne sont pas encore vérifiées (nombre de caves, fermeture de l'école).",
                "Le site du quotidien régional : il publie un article mis à jour au fil de la journée, avec des photos et des vidéos d'habitants, et des informations pratiques. Avantage : l'immédiateté et les images. Limite : l'article change souvent et peut contenir des erreurs corrigées ensuite.",
                "Le journal papier de lundi : il propose un article complet et vérifié, avec des témoignages, des explications (pourquoi la rivière a débordé) et les conséquences (école fermée). Avantage : le recul et l'analyse. Limite : il arrive après les autres, les lecteurs connaissent déjà la nouvelle.",
                "Manchette possible : « Saint-Aubin les pieds dans l'eau : une centaine de caves inondées ». Elle est courte, frappante et donne l'information principale.",
                "Légende possible : « La rue du Moulin, à Saint-Aubin, recouverte par la rivière dimanche matin, après l'orage de la nuit. » Elle précise le lieu, le moment et ce que montre l'image.",
                "Résultat : la radio est la plus rapide, le site le plus réactif, le journal papier le plus complet ; une bonne manchette résume l'essentiel et une bonne légende situe l'image.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces repères de l'histoire de la presse dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "1631 : Théophraste Renaudot fonde La Gazette",
              "1789 : la Déclaration des droits de l'homme et du citoyen proclame la libre communication des pensées",
              "1881 : la loi sur la liberté de la presse",
              "1885 : Maupassant publie Bel-Ami, roman d'un journaliste ambitieux",
              "1944 : création de l'Agence France-Presse (AFP)",
              "1971 : la Charte de Munich fixe les devoirs des journalistes",
            ],
          },
          quiz: [
            { q: "Comment appelle-t-on la première page d'un journal ?", options: ["La une", "La rubrique", "Le chapeau", "La brève"], answer: 0, why: "La une est la première page, la vitrine du journal ; la manchette en est le gros titre." },
            { q: "Un hebdomadaire paraît :", options: ["chaque jour", "chaque mois", "chaque semaine", "deux fois par an"], answer: 2, why: "Hebdomadaire vient d'un mot grec qui signifie « semaine » : il paraît une fois par semaine." },
            { q: "Que fait une agence de presse comme l'AFP ?", options: ["Elle vend des journaux dans les kiosques", "Elle fournit des dépêches aux médias", "Elle contrôle ce que publient les journaux", "Elle imprime les magazines"], answer: 1, why: "Une agence de presse collecte l'information dans le monde entier et l'envoie aux médias sous forme de dépêches." },
            { q: "Quel texte garantit encore aujourd'hui la liberté de la presse en France ?", options: ["Le Code civil de 1804", "L'édit de Nantes de 1598", "La loi de séparation de 1905", "La loi du 29 juillet 1881"], answer: 3, why: "La loi du 29 juillet 1881 garantit la liberté de publier, tout en punissant la diffamation et l'injure." },
            { q: "Le chapeau d'un article, c'est :", options: ["le nom du journaliste qui signe l'article", "le court texte qui résume l'essentiel", "la légende placée sous la photographie"], answer: 1, why: "Le chapeau, souvent en gras, résume l'article en quelques lignes et donne envie de le lire." },
          ],
          trap: "Croire que tout ce qui circule sur internet ou sur un réseau social est du journalisme : un journaliste vérifie et recoupe ses informations selon des règles professionnelles, ce que ne fait pas forcément une personne qui publie un message.",
          method: "Pour analyser une une, partez du haut vers le bas en nommant chaque élément (nom du journal, date, manchette, photo et légende, renvois), puis demandez-vous quelle information le journal a choisi de mettre en avant, et pourquoi.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fait-et-opinion',
          title: 'Distinguer le fait, l\'information et l\'opinion',
          minutes: 30,
          objectives: [
            "Distinguer un fait, une information et une opinion dans un texte.",
            "Repérer les marques de la subjectivité : vocabulaire mélioratif ou péjoratif, modalisateurs, conditionnel.",
            "Différencier les articles d'information et les articles d'opinion.",
            "Reformuler un énoncé subjectif de manière neutre.",
          ],
          course: [
            {
              heading: "Fait, information, opinion : trois notions à distinguer",
              paragraphs: [
                "Un fait est ce qui s'est réellement produit et que l'on peut vérifier. « Le match s'est terminé sur le score de 2 à 1 » est un fait : n'importe qui peut le contrôler. Un fait ne dépend pas de celui qui le rapporte.",
                "Une information est un fait sélectionné, mis en forme et transmis par un média. Elle répond aux questions essentielles (qui, quoi, où, quand), elle est datée et, idéalement, elle indique sa source (« selon la préfecture », « d'après le club »). Un même fait peut donner des informations différentes selon ce que le journaliste choisit de mettre en avant.",
                "Une opinion est un jugement personnel, un avis : « Ce match était ennuyeux. » Elle peut être discutée, car une autre personne peut penser le contraire. Une opinion n'est pas un mensonge : elle est légitime, à condition d'être présentée comme une opinion et non comme un fait.",
              ],
              box: { label: "Définition", text: "Un fait : ce qui s'est produit et peut être vérifié. Une information : un fait transmis par un média, daté et sourcé. Une opinion : un jugement personnel, qui peut être discuté." },
            },
            {
              heading: "Les marques de la subjectivité",
              paragraphs: [
                "Quand quelqu'un donne son opinion, il laisse des traces dans son texte : ce sont les marques de la subjectivité. Les plus fréquentes sont les mots évaluatifs. Un mot mélioratif présente les choses de façon positive (« un magnifique stade », « une décision courageuse ») ; un mot péjoratif les présente de façon négative (« un stade délabré », « une décision scandaleuse »).",
                "Les modalisateurs indiquent le degré de certitude ou le jugement de celui qui parle : des adverbes (heureusement, malheureusement, sans doute, peut-être, évidemment), des verbes d'opinion (je pense, je crois, il me semble, il faut), des tournures comme « il est certain que ». La première personne (je, nous) et la ponctuation expressive (points d'exclamation, points de suspension) sont aussi des indices.",
                "Dans la presse, le conditionnel joue un rôle particulier : « Le maire aurait démissionné » signifie que l'information n'est pas confirmée. Le journaliste prend ses distances avec ce qu'il rapporte. De même, des guillemets autour d'un mot peuvent montrer que le journaliste reprend les mots de quelqu'un d'autre sans les prendre à son compte.",
              ],
              box: { label: "Repère", text: "Marques de subjectivité : mots mélioratifs ou péjoratifs ; adverbes modalisateurs (heureusement, sans doute) ; verbes d'opinion (je pense, il faut) ; première personne ; ponctuation expressive. Le conditionnel signale une information non confirmée." },
            },
            {
              heading: "Articles d'information, articles d'opinion",
              paragraphs: [
                "Les articles d'information cherchent à rapporter les faits de la façon la plus neutre possible : la brève, la dépêche, le compte rendu, le reportage, l'enquête. On y trouve surtout la troisième personne, des faits précis (noms, dates, chiffres) et des sources citées. Les avis y apparaissent seulement quand ils sont attribués à quelqu'un : « Pour la directrice, c'est une réussite. »",
                "Les articles d'opinion, eux, défendent un point de vue. L'éditorial exprime la position du journal, souvent sous la plume de son directeur ou de son rédacteur en chef. La chronique et le billet d'humeur donnent l'avis d'un journaliste, souvent avec humour. La tribune est écrite par une personne extérieure au journal. La critique juge un film, un livre ou un spectacle. Les journaux sérieux séparent ces textes des articles d'information, par exemple dans une rubrique « Opinions » ou « Débats ».",
                "Attention : même un article d'information n'est jamais totalement objectif, car le journaliste fait des choix (quel fait raconter, quelle photo, quel titre). Ce qu'on attend de lui, c'est l'honnêteté : vérifier, citer ses sources et ne pas faire passer une opinion pour un fait.",
              ],
            },
            {
              heading: "Reformuler de façon neutre",
              paragraphs: [
                "Pour rendre un énoncé neutre, on procède en trois temps. D'abord, on supprime les mots évaluatifs et les modalisateurs. Ensuite, on les remplace, si possible, par des faits vérifiables. Enfin, on attribue les opinions qui restent à leur auteur grâce à un verbe de parole ou à une tournure comme « selon » ou « d'après ».",
                "Exemple : « Cette magnifique fête de quartier a heureusement attiré une foule énorme ! » devient : « La fête de quartier a réuni environ 400 personnes samedi, selon les organisateurs. » (le chiffre est inventé pour l'exemple). Le lecteur peut alors se faire sa propre opinion.",
              ],
              box: { label: "Méthode", text: "Supprimer les mots évaluatifs et les modalisateurs ; les remplacer par des faits précis (nombre, date, lieu) ; attribuer chaque avis à son auteur (« selon », « d'après », « explique »)." },
            },
          ],
          keyPoints: [
            "Un fait se vérifie ; une opinion se discute.",
            "Une information est un fait transmis par un média, daté et accompagné de sa source.",
            "Marques de subjectivité : mots mélioratifs ou péjoratifs, modalisateurs, verbes d'opinion, première personne, ponctuation expressive.",
            "Le conditionnel de presse (« il aurait démissionné ») signale une information non confirmée.",
            "Informer : brève, compte rendu, reportage, enquête. Donner son avis : éditorial, chronique, billet, tribune, critique.",
            "Pour rendre un énoncé neutre : supprimer les jugements, donner des faits, attribuer les avis.",
          ],
          example: {
            statement: "Lisez ce texte inventé pour l'exercice (données fictives) et classez chaque phrase : fait, information non confirmée ou opinion. (1) « Le nouveau gymnase du collège a été inauguré jeudi à 17 heures. » (2) « C'est sans doute le plus beau bâtiment de la ville. » (3) « Il a coûté 2 millions d'euros, d'après la mairie. » (4) « Le ministre des Sports aurait prévu de le visiter en juin. » (5) « Les élèves vont enfin pouvoir faire du sport dans de bonnes conditions ! »",
            solution: [
              "(1) Un fait : l'inauguration, le jour et l'heure peuvent être vérifiés. Aucun mot ne donne d'avis.",
              "(2) Une opinion : « le plus beau » est un jugement mélioratif et « sans doute » est un modalisateur. Une autre personne pourrait trouver le bâtiment laid.",
              "(3) Un fait présenté comme une information sourcée : le coût est vérifiable et la source est indiquée (« d'après la mairie »).",
              "(4) Une information non confirmée : le conditionnel « aurait prévu » montre que le journaliste n'est pas sûr de cette visite.",
              "(5) Une opinion : l'adverbe « enfin » suggère une longue attente, « de bonnes conditions » est un jugement, et le point d'exclamation exprime l'enthousiasme.",
              "Réponse : faits (1) et (3) ; information non confirmée (4) ; opinions (2) et (5).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Fait ou opinion ? a) « La Loire est le plus long fleuve de France. » b) « La Loire est le plus joli fleuve de France. » c) « Le collège ferme ses portes à 17 h 30. » d) « Les vacances d'été sont beaucoup trop longues. » e) « Ce film dure deux heures et quart. » f) « Ce film est bien trop long. »",
              hint: "Demandez-vous si la phrase peut être vérifiée (une mesure, un horaire, un classement) ou si quelqu'un pourrait raisonnablement penser le contraire.",
              solution: [
                "a) Fait : la longueur des fleuves se mesure ; la Loire, avec un peu plus de 1 000 km, est bien le plus long fleuve entièrement situé en France.",
                "b) Opinion : « joli » est un jugement personnel.",
                "c) Fait : l'horaire peut être vérifié sur le règlement du collège.",
                "d) Opinion : « beaucoup trop longues » exprime un avis, que d'autres ne partagent pas.",
                "e) Fait : la durée d'un film se mesure.",
                "f) Opinion : « bien trop long » est un jugement ; le même film peut sembler court à quelqu'un d'autre.",
                "Résultat : faits a, c, e ; opinions b, d, f. Remarquez que le même sujet peut donner un fait ou une opinion selon les mots choisis.",
              ],
            },
            {
              level: 2,
              statement: "Relevez les marques de la subjectivité dans ce billet inventé pour l'exercice et nommez-les : « Hier soir, notre équipe a malheureusement perdu une finale qu'elle méritait évidemment de gagner. Je pense que l'arbitre a pris des décisions incompréhensibles. Quel gâchis ! Nos joueurs, admirables de courage, n'ont rien à se reprocher. »",
              hint: "Cherchez quatre familles d'indices : les adverbes qui jugent, les verbes d'opinion à la première personne, les adjectifs mélioratifs ou péjoratifs, et la ponctuation.",
              solution: [
                "Adverbes modalisateurs : « malheureusement » (jugement négatif sur le résultat) et « évidemment » (certitude affichée).",
                "Verbe d'opinion à la première personne : « Je pense que ».",
                "Mots péjoratifs : « incompréhensibles » (pour les décisions de l'arbitre) et « gâchis ».",
                "Mot mélioratif : « admirables de courage » (pour les joueurs).",
                "Ponctuation expressive : la phrase exclamative « Quel gâchis ! ».",
                "Autres indices : le possessif « notre équipe », « nos joueurs », qui montre que l'auteur prend parti. Conclusion : c'est un texte d'opinion, pas un compte rendu neutre.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici une brève inventée pour l'exercice (données fictives), écrite de manière très subjective : « Énorme scandale à Montvert : la mairie a osé abattre samedi les vingt magnifiques platanes de la place du Marché, sans doute pour construire un horrible parking ! Les habitants sont évidemment furieux. » a) Réécrivez-la en brève neutre, en gardant seulement les faits et en attribuant les avis à leurs auteurs. b) Dites quelles informations il faudrait vérifier avant de la publier.",
              hint: "Repérez d'abord les faits vérifiables (qui, quoi, où, quand, combien). Pour le projet de parking, qui n'est qu'une supposition, pensez au conditionnel ou à la source. Pour les habitants, il faut savoir qui a dit quoi.",
              solution: [
                "Repérage des faits : la mairie de Montvert a fait abattre vingt platanes de la place du Marché samedi. Ce sont les seuls éléments présentés comme certains.",
                "Repérage des jugements : « énorme scandale », « a osé », « magnifiques », « horrible », « évidemment furieux ». La phrase « sans doute pour construire un parking » est une supposition, pas un fait.",
                "Réécriture neutre possible : « Vingt platanes de la place du Marché, à Montvert, ont été abattus samedi à la demande de la mairie. Selon plusieurs habitants, un parking serait prévu à leur place ; la mairie n'a pas encore précisé ses projets. Certains riverains disent regretter ces arbres. »",
                "Le conditionnel « serait prévu » et la source « selon plusieurs habitants » montrent que le parking n'est pas confirmé ; les avis sont attribués à ceux qui les expriment.",
                "À vérifier avant publication : le nombre exact d'arbres, la date, qui a pris la décision, la raison de l'abattage (maladie des arbres, projet d'aménagement), en interrogeant la mairie et des habitants.",
                "Résultat : une brève neutre qui rapporte les faits, signale ce qui n'est pas confirmé et laisse le lecteur juger.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez votre capacité à séparer les faits et les opinions.",
            statements: [
              { text: "Un fait est ce qui peut être vérifié.", true: true, why: "Un fait s'est produit réellement : on peut le contrôler, par exemple avec un document ou un témoin." },
              { text: "Une opinion est forcément un mensonge.", true: false, why: "Une opinion est un avis personnel ; elle est légitime si elle est présentée comme un avis et non comme un fait." },
              { text: "« Il aurait quitté la ville » présente une information sûre.", true: false, why: "Le conditionnel de presse signale au contraire une information non confirmée." },
              { text: "Un éditorial exprime la position du journal.", true: true, why: "L'éditorial est un article d'opinion qui engage le journal, souvent écrit par son directeur ou son rédacteur en chef." },
              { text: "Le mot « délabré » est mélioratif.", true: false, why: "« Délabré » présente les choses de façon négative : il est péjoratif." },
              { text: "« Selon les pompiers » permet d'attribuer une information à sa source.", true: true, why: "La tournure « selon » indique d'où vient l'information, ce qui permet au lecteur d'en juger." },
              { text: "Un article d'information ne comporte jamais aucun choix du journaliste.", true: false, why: "Le journaliste choisit toujours les faits, la photo et le titre ; on attend de lui l'honnêteté, pas l'absence de choix." },
            ],
          },
          quiz: [
            { q: "Laquelle de ces phrases est une opinion ?", options: ["Le concert a commencé à 21 heures.", "La salle compte 500 places.", "Ce concert était inoubliable.", "Le groupe vient de Lille."], answer: 2, why: "« Inoubliable » est un jugement personnel : quelqu'un d'autre pourrait trouver le concert décevant." },
            { q: "Dans « Le joueur serait blessé », le conditionnel indique :", options: ["une information non confirmée", "un ordre donné au joueur", "un souhait du journaliste", "un fait certain et vérifié"], answer: 0, why: "Le conditionnel de presse montre que le journaliste rapporte une information qu'il n'a pas pu confirmer." },
            { q: "Lequel de ces mots est un modalisateur ?", options: ["Hier", "Peut-être", "Stade", "Quarante"], answer: 1, why: "« Peut-être » exprime le doute de celui qui parle : c'est un modalisateur." },
            { q: "Quel genre d'article donne l'avis d'une personne extérieure au journal ?", options: ["La brève", "Le compte rendu", "La dépêche", "La tribune"], answer: 3, why: "La tribune est un texte d'opinion écrit par une personne qui ne fait pas partie de la rédaction." },
            { q: "Pour rendre neutre « Ce minuscule collège », on écrit plutôt :", options: ["« Ce charmant petit collège »", "« Ce collège de 180 élèves »", "« Ce collège bien trop petit »"], answer: 1, why: "On remplace le jugement par un fait vérifiable (le nombre d'élèves, inventé ici pour l'exemple)." },
          ],
          trap: "Prendre une phrase au présent et à la troisième personne pour un fait : « Ce film est le meilleur de l'année » a l'air d'un constat, mais c'est une opinion, car le superlatif « le meilleur » est un jugement que l'on peut discuter.",
          method: "Pour chaque phrase, posez la question : « Pourrait-on le vérifier avec un document, une mesure ou un témoin ? » Si oui, c'est un fait ; si quelqu'un pourrait raisonnablement penser le contraire, c'est une opinion. Surlignez ensuite les mots qui jugent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'fausses-informations',
          title: 'Repérer une fausse information et vérifier une source',
          minutes: 30,
          objectives: [
            "Identifier les différentes formes de fausses informations : infox, rumeur, canular, image détournée, contenu satirique.",
            "Expliquer pourquoi les fausses informations circulent vite sur les réseaux sociaux.",
            "Vérifier une source en examinant son auteur, sa date et l'origine de l'information.",
            "Recouper une information en consultant plusieurs sources fiables.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une fausse information ?",
              paragraphs: [
                "Une fausse information est un contenu présenté comme vrai alors qu'il est faux, inventé ou trompeur. On utilise souvent l'expression anglaise fake news ; en français, le mot recommandé depuis 2018 est « infox », formé à partir de « information » et « intoxication ».",
                "Les fausses informations prennent plusieurs formes. La rumeur est une nouvelle non vérifiée qui se répète de bouche à oreille ou de message en message. Le canular est une fausse nouvelle inventée pour plaisanter ou piéger. L'image détournée est une vraie photo sortie de son contexte (une image ancienne présentée comme récente, ou prise dans un autre pays) ou retouchée. On trouve aussi de fausses citations attribuées à des personnalités et, de plus en plus, des images ou des vidéos fabriquées par intelligence artificielle.",
                "On distingue l'erreur et la manipulation. Une personne qui partage une information fausse en la croyant vraie se trompe de bonne foi. Celle qui fabrique une fausse information pour tromper fait de la désinformation. Enfin, certains sites sont satiriques, comme Le Gorafi : ils inventent des nouvelles absurdes pour faire rire. Ce n'est pas un mensonge, mais leurs articles deviennent trompeurs quand ils sont partagés sans que l'on sache qu'il s'agit d'humour.",
              ],
              box: { label: "Définition", text: "Une infox (fake news) est une information fausse ou trompeuse présentée comme vraie. Formes fréquentes : rumeur, canular, image détournée ou retouchée, fausse citation, contenu fabriqué. La désinformation est la diffusion volontaire de fausses informations pour tromper." },
            },
            {
              heading: "Pourquoi circulent-elles si vite ?",
              paragraphs: [
                "Les fausses informations jouent souvent sur les émotions : la peur, la colère, l'indignation ou la surprise. Un message qui choque donne envie de réagir et de partager immédiatement, parfois sans même l'avoir lu jusqu'au bout. Une étude publiée en 2018 dans la revue Science par des chercheurs du MIT a montré que, sur Twitter, les fausses nouvelles se diffusaient plus vite et plus loin que les vraies.",
                "Les réseaux sociaux mettent en avant les contenus qui provoquent beaucoup de réactions, grâce à des algorithmes (des programmes qui choisissent ce que vous voyez). Ils vous montrent aussi surtout ce qui ressemble à ce que vous aimez déjà : on parle de bulle de filtre. Notre cerveau a de plus tendance à croire plus facilement ce qui confirme ce que nous pensons déjà : c'est le biais de confirmation.",
                "Ceux qui fabriquent des infox ont des motifs variés : gagner de l'argent (chaque clic rapporte de la publicité), influencer l'opinion, nuire à une personne, ou simplement s'amuser. Savoir à qui profite un message est une bonne question à se poser.",
              ],
            },
            {
              heading: "Vérifier une source : les bons réflexes",
              paragraphs: [
                "Qui parle ? Identifiez l'auteur et le site. Un média sérieux indique ses responsables dans les mentions légales ou une page « Qui sommes-nous ? ». Méfiez-vous des adresses qui imitent celle d'un grand média avec une lettre ou une extension différente, et des comptes anonymes.",
                "Quand ? Regardez la date de publication. Beaucoup d'infox sont de vieilles nouvelles qui ressortent des années plus tard comme si elles étaient récentes.",
                "D'où vient l'information ? Un texte fiable cite ses sources (une étude, un témoin nommé, un document officiel) et permet de remonter à l'original. Comment est-ce écrit ? Les majuscules, les points d'exclamation en série, les fautes nombreuses, le ton alarmiste et les appels du type « Partagez avant que ce soit supprimé ! » sont des signaux d'alerte.",
              ],
              box: { label: "Méthode", text: "Quatre questions avant de croire ou de partager : Qui ? (auteur, site, mentions légales). Quand ? (date). D'où vient l'information ? (source citée, document original). Comment est-ce écrit ? (ton, ponctuation, appel à partager)." },
            },
            {
              heading: "Recouper l'information et vérifier les images",
              paragraphs: [
                "Recouper une information, c'est vérifier qu'elle est rapportée par plusieurs sources fiables et indépendantes. Si une nouvelle très importante n'apparaît sur aucun grand média, c'est suspect. De nombreux médias ont des rubriques de vérification des faits (en anglais fact-checking), comme AFP Factuel ou Les Décodeurs du journal Le Monde, qui analysent les rumeurs qui circulent.",
                "Pour une image, la recherche d'image inversée (proposée par plusieurs moteurs de recherche) permet de retrouver les autres endroits où elle a été publiée, et donc sa date et son contexte d'origine. Observez aussi les détails : la langue des panneaux, la météo, les vêtements, les plaques d'immatriculation. Pour les images créées par intelligence artificielle, des détails incohérents (mains, textes illisibles, ombres impossibles) peuvent alerter, mais le meilleur indice reste l'origine de l'image.",
              ],
              box: { label: "À retenir", text: "Une information fiable a un auteur identifiable, une date, une source vérifiable, et elle est confirmée par d'autres médias fiables. Dans le doute, on ne partage pas." },
            },
          ],
          keyPoints: [
            "Infox (fake news) : information fausse ou trompeuse présentée comme vraie.",
            "Formes : rumeur, canular, image détournée, fausse citation, contenu fabriqué ; la satire n'est pas un mensonge mais peut tromper hors contexte.",
            "Les infox se diffusent vite car elles jouent sur l'émotion et sont favorisées par les algorithmes.",
            "Vérifier : qui (auteur, site), quand (date), d'où (source), comment (ton, ponctuation).",
            "Recouper : chercher l'information dans plusieurs médias fiables ; vérifier une image par recherche inversée.",
            "Dans le doute, ne pas partager.",
          ],
          example: {
            statement: "Ce message circule sur une messagerie (exemple inventé pour l'exercice) : « URGENT !!! L'eau du robinet sera coupée dans toute la France demain pendant 3 jours !!! Faites des réserves et PARTAGEZ à tous vos contacts avant que ce message soit supprimé !!! » Est-ce une information fiable ? Justifiez avec la méthode des quatre questions.",
            solution: [
              "Qui ? Le message n'a pas d'auteur identifiable : ni nom, ni organisme officiel, ni média.",
              "Quand ? « Demain » n'est pas une date : impossible de savoir quand le message a été écrit. Il peut circuler pendant des semaines en restant toujours « pour demain ».",
              "D'où vient l'information ? Aucune source n'est citée (pas de service des eaux, pas de ministère). Or une coupure aussi énorme serait annoncée officiellement et reprise par tous les médias.",
              "Comment est-ce écrit ? Les majuscules, les points d'exclamation en série, le ton alarmiste et l'appel à partager « avant que ce message soit supprimé » sont des signaux typiques d'une infox.",
              "Recoupement : on cherche l'information sur les sites de grands médias et sur celui de sa commune ; on n'en trouve aucune trace.",
              "Réponse : ce message n'est pas fiable ; c'est très probablement une rumeur ou un canular. Il ne faut pas le partager.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque situation inventée pour l'exercice à la bonne notion (rumeur, canular, image détournée, contenu satirique, information vérifiée). a) Une photo d'inondation prise en 2016 dans un autre pays circule avec la légende « Notre ville ce matin ». b) Un site humoristique annonce que « les lundis seront supprimés en 2030 ». c) Dans la cour, on raconte que le professeur de sport va partir, sans que personne sache d'où vient la nouvelle. d) Le 1er avril, un élève annonce sur le groupe de la classe que la cantine servira des frites tous les jours. e) Plusieurs grands médias annoncent, en citant le communiqué de la préfecture, la fermeture d'une route pour travaux.",
              hint: "Demandez-vous à chaque fois : l'information est-elle fausse ? Si oui, est-ce pour faire rire, pour piéger, parce qu'elle se répète sans source, ou parce qu'une vraie image est mal utilisée ?",
              solution: [
                "a) Image détournée : la photo est vraie, mais elle est sortie de son contexte (autre lieu, autre date).",
                "b) Contenu satirique : le site invente une nouvelle absurde pour faire rire ; ce n'est pas un mensonge, mais cela peut tromper si on le partage sans le préciser.",
                "c) Rumeur : la nouvelle se répète sans source connue et sans vérification.",
                "d) Canular : une fausse nouvelle inventée pour plaisanter, ici un poisson d'avril.",
                "e) Information vérifiée : elle est rapportée par plusieurs médias et vient d'une source officielle identifiée.",
              ],
            },
            {
              level: 2,
              statement: "Vous tombez sur un article (exemple inventé pour l'exercice) publié sur le site « le-journal-du-vrai.info ». Son titre : « Les scientifiques le cachent : manger trois bananes par jour rend plus intelligent ! » L'article n'est pas daté et n'est pas signé. Il cite « une étude récente » sans dire qui l'a menée ni où elle a été publiée. Le site n'a pas de page de mentions légales et affiche de nombreuses publicités. Relevez au moins cinq indices qui doivent vous rendre méfiant, puis dites ce que vous feriez pour vérifier.",
              hint: "Reprenez les quatre questions de la méthode (qui, quand, d'où, comment) et ajoutez la question : à qui profite ce contenu ?",
              solution: [
                "Indice 1 (qui ?) : l'article n'est pas signé et le site n'a pas de mentions légales ; on ne sait pas qui en est responsable.",
                "Indice 2 (quand ?) : l'article n'est pas daté.",
                "Indice 3 (d'où ?) : « une étude récente » sans auteur, sans revue, sans date : la source est invérifiable.",
                "Indice 4 (comment ?) : le titre joue sur le complot (« Les scientifiques le cachent ») et sur la surprise, avec un point d'exclamation ; la promesse est spectaculaire et trop simple.",
                "Indice 5 (à qui profite-t-il ?) : les nombreuses publicités suggèrent que le site cherche surtout des clics, qui lui rapportent de l'argent.",
                "Pour vérifier : chercher si des médias fiables ou des rubriques de vérification des faits parlent de cette étude ; chercher l'étude elle-même ; consulter un professeur de SVT ou le professeur documentaliste au CDI. Conclusion : en l'absence de source sérieuse, l'information n'est pas fiable.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans le groupe de discussion de votre classe, quelqu'un partage (situation inventée pour l'exercice) une vidéo montrant un ours brun qui marche dans une rue, avec ce texte : « Un ours se promène en ce moment dans le centre de notre ville !!! Restez chez vous ! » a) Décrivez dans l'ordre les étapes que vous suivriez pour vérifier cette information. b) Vous découvrez que la vidéo a été filmée il y a trois ans dans un village de montagne d'un autre pays. Rédigez un court message (quatre ou cinq phrases), poli et clair, pour l'expliquer au groupe sans vous moquer de la personne.",
              hint: "Pour a, pensez à l'origine de la vidéo, à la date, aux détails visibles et au recoupement avec des médias locaux. Pour b, expliquez ce que vous avez trouvé, comment, et ce qu'il faut faire du message.",
              solution: [
                "a) Étape 1 : ne pas partager tout de suite, malgré l'émotion. Étape 2 : regarder qui a publié la vidéo en premier et quand (on remonte le fil des partages). Étape 3 : observer les détails (langue des panneaux, forme des maisons, plaques d'immatriculation, saison). Étape 4 : faire une recherche d'image inversée à partir d'une capture de la vidéo pour retrouver sa première publication. Étape 5 : chercher sur le site du journal local ou de la mairie si un tel événement est signalé.",
                "b) Message possible : « Bonjour à tous, j'ai vérifié la vidéo de l'ours avant de la partager. Grâce à une recherche d'image, j'ai retrouvé sa première publication : elle a été filmée il y a trois ans dans un village de montagne, dans un autre pays. Aucun média local ne parle d'un ours dans notre ville aujourd'hui. Ce n'est donc pas une information actuelle : mieux vaut ne pas la faire circuler. »",
                "Ce message est efficace parce qu'il donne le résultat, explique la méthode utilisée (ce qui permet aux autres de vérifier à leur tour), propose une action et reste respectueux : la personne qui a partagé s'est trompée de bonne foi.",
                "Résultat : il s'agit d'une image détournée ; la vérification passe par l'origine, la date, les détails et le recoupement.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Infox", right: "Information fausse ou trompeuse présentée comme vraie" },
              { left: "Rumeur", right: "Nouvelle non vérifiée qui se répète de personne en personne" },
              { left: "Canular", right: "Fausse nouvelle inventée pour plaisanter ou piéger" },
              { left: "Image détournée", right: "Vraie photo présentée hors de son contexte d'origine" },
              { left: "Satire", right: "Nouvelle volontairement absurde, écrite pour faire rire" },
              { left: "Recoupement", right: "Vérification d'une information dans plusieurs sources fiables" },
            ],
          },
          quiz: [
            { q: "Quel est le mot français recommandé pour fake news ?", options: ["Fausseté", "Rumeur", "Infox", "Canular"], answer: 2, why: "« Infox », formé à partir de « information » et « intoxication », est le terme recommandé en français depuis 2018." },
            { q: "Recouper une information, c'est :", options: ["la vérifier dans plusieurs sources fiables", "la résumer en une phrase", "la partager dans plusieurs groupes", "la recopier mot à mot"], answer: 0, why: "Recouper, c'est comparer plusieurs sources indépendantes pour confirmer une information." },
            { q: "Quel indice doit vous rendre méfiant ?", options: ["Le nom de l'auteur est indiqué", "L'article est daté", "La source est citée", "Le message exige d'être partagé vite"], answer: 3, why: "L'appel pressant à partager est typique des infox : il pousse à réagir avant de réfléchir." },
            { q: "À quoi sert une recherche d'image inversée ?", options: ["À retoucher une photo", "À retrouver l'origine d'une image", "À agrandir une image floue"], answer: 1, why: "Elle montre où l'image a déjà été publiée, ce qui permet de retrouver sa date et son contexte d'origine." },
            { q: "Le biais de confirmation, c'est la tendance à :", options: ["vérifier toutes les informations reçues", "croire ce qui confirme nos idées", "douter de toutes les nouvelles", "lire seulement la presse écrite"], answer: 1, why: "Nous croyons plus facilement ce qui va dans le sens de ce que nous pensons déjà, ce qui rend certaines infox convaincantes." },
          ],
          trap: "Croire qu'une information est vraie parce qu'on l'a vue partagée de nombreuses fois ou par une personne de confiance : le nombre de partages ne prouve rien, seules la source et la vérification comptent.",
          method: "Avant de partager, appliquez la règle des quatre questions (qui, quand, d'où, comment), puis cherchez l'information sur au moins deux médias fiables. Si vous ne la trouvez pas, ne la partagez pas.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'rediger-article',
          title: 'Rédiger un article de presse',
          minutes: 35,
          objectives: [
            "Rassembler les faits en répondant aux questions essentielles : qui, quoi, où, quand, comment, pourquoi.",
            "Construire un titre, un chapeau et un corps d'article selon la règle de la pyramide inversée.",
            "Rapporter des paroles et citer ses sources.",
            "Rédiger dans un style neutre, précis et clair.",
          ],
          course: [
            {
              heading: "Avant d'écrire : rassembler les faits et choisir un angle",
              paragraphs: [
                "Un article d'information répond aux questions essentielles que se pose le lecteur : Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ? On retient souvent ces six questions sous le sigle QQOQCP. Avant d'écrire, le journaliste note ses réponses, vérifie les noms, les dates et les chiffres, et recueille des témoignages.",
                "Il choisit ensuite un angle : le point de vue particulier sous lequel il traite le sujet. Pour une fête du collège, on peut raconter l'organisation par les élèves, l'argent récolté pour une association, ou le spectacle de fin de journée. Un bon article ne dit pas tout : il choisit un angle et s'y tient.",
              ],
              box: { label: "Repère", text: "QQOQCP : Qui ? (les personnes) Quoi ? (l'événement) Où ? (le lieu) Quand ? (le moment) Comment ? (le déroulement) Pourquoi ? (les causes, le but)." },
            },
            {
              heading: "Le titre et le chapeau",
              paragraphs: [
                "Le titre doit être court et accrocheur. Un titre informatif donne l'essentiel : « Le collège Jean-Moulin remporte le concours régional de robotique ». Un titre incitatif éveille la curiosité, par exemple avec un jeu de mots ou une question : « Des robots et des champions ». Les titres utilisent souvent le présent, ou une phrase sans verbe (« Victoire des robots du collège Jean-Moulin »).",
                "Le chapeau, placé entre le titre et le texte, souvent en gras, résume l'article en deux à quatre lignes. Il répond aux principales questions (qui, quoi, où, quand) et donne envie de lire la suite. Un lecteur pressé qui ne lit que le titre et le chapeau doit déjà savoir l'essentiel.",
              ],
            },
            {
              heading: "Le corps de l'article : la pyramide inversée",
              paragraphs: [
                "Le corps de l'article suit la règle de la pyramide inversée : on commence par le plus important et on finit par le moins important. Le premier paragraphe, appelé l'attaque, donne l'essentiel (qui, quoi, où, quand). Viennent ensuite les circonstances (comment), puis les causes et les explications (pourquoi), puis les réactions et les témoignages, et enfin le contexte et les détails secondaires.",
                "Cette construction a deux avantages. Le lecteur peut s'arrêter à tout moment en ayant compris l'essentiel. Et si l'article est trop long pour la page, on peut couper la fin sans perdre d'information importante. Dans un article long, des intertitres découpent le texte en parties. La dernière phrase, appelée la chute, peut ouvrir sur la suite (« Le prochain concours aura lieu en mai »).",
              ],
              box: { label: "Règle", text: "Pyramide inversée : l'essentiel d'abord (qui, quoi, où, quand), puis le comment, le pourquoi, les réactions et témoignages, et enfin le contexte et les détails secondaires." },
            },
            {
              heading: "Le style journalistique",
              paragraphs: [
                "Un article d'information s'écrit à la troisième personne, avec des phrases courtes et claires, un vocabulaire précis et des données exactes (noms, âges, lieux, chiffres). On emploie le présent ou le passé composé pour les faits récents : « Les élèves ont présenté leur robot samedi. » On évite les mots qui jugent : l'article informe, il ne donne pas l'avis du journaliste.",
                "Les paroles des témoins sont rapportées au discours direct, entre guillemets, avec le nom et la fonction de la personne : « Nous avons travaillé tous les mercredis », explique Inès, élève de 4e. On peut aussi utiliser le discours indirect : la principale a annoncé que le robot serait exposé au CDI. Les sources sont indiquées (« selon les organisateurs »). L'article est signé, et chaque photo a sa légende.",
              ],
              box: { label: "À retenir", text: "Troisième personne, phrases courtes, faits précis, présent ou passé composé, aucun jugement personnel ; paroles entre guillemets avec le nom et la fonction de la personne ; sources indiquées ; signature et légende." },
            },
          ],
          keyPoints: [
            "Un article répond aux questions QQOQCP : qui, quoi, où, quand, comment, pourquoi.",
            "L'angle est le point de vue particulier choisi pour traiter le sujet.",
            "Titre informatif (donne l'essentiel) ou incitatif (éveille la curiosité) ; chapeau : résumé de deux à quatre lignes.",
            "Pyramide inversée : l'essentiel d'abord, les détails secondaires à la fin.",
            "Style neutre : troisième personne, faits précis, phrases courtes, paroles citées avec leur auteur.",
          ],
          example: {
            statement: "Voici les notes d'un élève journaliste (données fictives) : vendredi 6 juin ; collège Victor-Hugo de Pontlieu ; 120 élèves ; course solidaire dans le parc municipal ; 3 450 € récoltés grâce aux parrainages ; pour l'association locale Les Restos du quartier ; organisée par les élèves délégués ; pluie le matin, soleil l'après-midi ; Lucas, 4e B : « On a couru pour ceux qui n'ont pas de quoi manger. » Rédigez un titre informatif et un chapeau.",
            solution: [
              "Repérer les réponses essentielles. Qui : 120 élèves du collège Victor-Hugo. Quoi : une course solidaire qui a rapporté 3 450 €. Où : le parc municipal de Pontlieu. Quand : vendredi 6 juin. Pourquoi : aider l'association Les Restos du quartier.",
              "Choisir l'angle : la solidarité des élèves (la somme récoltée et son usage), plutôt que la météo, qui est un détail secondaire.",
              "Titre informatif : « 3 450 € récoltés par les coureurs du collège Victor-Hugo ». Il contient le fait principal et un chiffre frappant.",
              "Chapeau : « Vendredi 6 juin, 120 élèves du collège Victor-Hugo de Pontlieu ont participé à une course solidaire dans le parc municipal. Organisée par les délégués, elle a permis de récolter 3 450 € pour l'association Les Restos du quartier. »",
              "Vérification : le chapeau répond à qui, quoi, où, quand et pourquoi, en deux phrases, sans jugement. La citation de Lucas et la météo seront utilisées plus loin, dans le corps de l'article.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lisez ce chapeau inventé pour l'exercice (données fictives) et relevez la réponse à chacune des questions QQOQCP : « Samedi 12 avril, à la médiathèque de Bellerive, l'écrivaine Claire Morand a rencontré une cinquantaine de lecteurs pour présenter son nouveau roman. Elle a répondu à leurs questions pendant deux heures, avant une séance de dédicaces, afin de faire découvrir la littérature jeunesse aux familles. »",
              hint: "Prenez les questions une par une et soulignez dans le texte le groupe de mots qui y répond. Pour « comment », cherchez le déroulement de l'événement.",
              solution: [
                "Qui ? L'écrivaine Claire Morand et une cinquantaine de lecteurs.",
                "Quoi ? Une rencontre pour présenter son nouveau roman.",
                "Où ? À la médiathèque de Bellerive.",
                "Quand ? Samedi 12 avril.",
                "Comment ? Par deux heures de questions et réponses, suivies d'une séance de dédicaces.",
                "Pourquoi ? Afin de faire découvrir la littérature jeunesse aux familles.",
              ],
            },
            {
              level: 2,
              statement: "Les paragraphes de cet article inventé pour l'exercice (données fictives) ont été mélangés. Remettez-les dans l'ordre de la pyramide inversée, puis proposez un titre informatif et un titre incitatif. A) « Le marché existe depuis 1987 et compte habituellement une trentaine de stands. » B) « Le marché du samedi de Villeneuve a été déplacé place de la Gare depuis le 3 mars. » C) « Selon la mairie, ce déménagement s'explique par les travaux de rénovation de la place centrale, prévus jusqu'en septembre. » D) « “Nous avons perdu quelques clients, mais le parking est plus pratique”, constate Marc, maraîcher. » E) « Les commerçants installent désormais leurs stands le long du quai, de 8 heures à 13 heures. »",
              hint: "Cherchez d'abord le paragraphe qui répond à qui, quoi, où, quand : c'est l'attaque. Ensuite viennent le comment, le pourquoi, les réactions, puis le contexte.",
              solution: [
                "1) B, l'attaque : elle donne l'essentiel (le marché, déplacé, place de la Gare, depuis le 3 mars).",
                "2) E, le comment : la nouvelle organisation (le long du quai, de 8 heures à 13 heures).",
                "3) C, le pourquoi : la cause, attribuée à sa source (« Selon la mairie »).",
                "4) D, la réaction : le témoignage d'un commerçant, cité entre guillemets avec sa fonction.",
                "5) A, le contexte : l'histoire du marché, détail secondaire que l'on pourrait couper.",
                "Ordre : B, E, C, D, A. Titre informatif possible : « Le marché de Villeneuve déménage place de la Gare ». Titre incitatif possible : « Le marché prend le train ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. À partir de ces notes inventées pour l'exercice (données fictives), rédigez un article complet de 120 à 180 mots, avec un titre, un chapeau, un corps en pyramide inversée, une citation et une chute. Notes : jeudi 20 mars ; collège Marie-Curie de Lanvallon ; club astronomie (14 élèves de 4e et de 3e) ; observation de Saturne et de ses anneaux avec un télescope prêté par l'association Ciel d'Armor ; dans la cour, de 20 h à 22 h ; 60 parents et élèves présents ; organisée par M. Diallo, professeur de physique-chimie ; Emma, 4e : « On voyait vraiment les anneaux, comme sur les photos ! » ; club créé il y a deux ans ; prochaine soirée prévue en mai pour observer la Lune.",
              hint: "Choisissez d'abord votre angle, puis classez les notes : l'essentiel, le comment, le pourquoi, la réaction, le contexte. Gardez la date de la prochaine soirée pour la chute.",
              solution: [
                "Étape 1, l'angle : une soirée d'observation réussie qui a fait découvrir Saturne aux familles.",
                "Étape 2, le titre : « Saturne s'invite au collège Marie-Curie ». Le chapeau : « Jeudi 20 mars, le club astronomie du collège Marie-Curie de Lanvallon a organisé une soirée d'observation du ciel. Une soixantaine de parents et d'élèves ont pu admirer les anneaux de Saturne au télescope. »",
                "Étape 3, le corps : « La soirée s'est déroulée dans la cour du collège, de 20 heures à 22 heures. Les quatorze élèves du club, en 4e et en 3e, ont guidé le public autour d'un télescope prêté par l'association Ciel d'Armor. L'objectif, selon M. Diallo, professeur de physique-chimie et organisateur, était de montrer que l'astronomie est à la portée de tous. “On voyait vraiment les anneaux, comme sur les photos !”, s'enthousiasme Emma, élève de 4e. Créé il y a deux ans, le club se réunit chaque semaine. »",
                "Étape 4, la chute : « Prochain rendez-vous en mai, pour observer la Lune. »",
                "Étape 5, la vérification : le chapeau répond à qui, quoi, où, quand ; l'ordre va de l'essentiel au contexte ; la citation est entre guillemets avec le nom et la classe d'Emma ; le texte est à la troisième personne, sans jugement du journaliste (« admirer » et « s'enthousiasme » décrivent la réaction du public, pas l'avis de l'auteur) ; le corps compte environ 150 mots avec le chapeau.",
                "Résultat : un article complet, organisé en pyramide inversée, avec titre, chapeau, citation et chute.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les parties du corps d'un article dans l'ordre de la pyramide inversée, du plus important au moins important.",
            items: [
              "L'essentiel : qui, quoi, où, quand",
              "Les circonstances : comment cela s'est passé",
              "Les causes et les explications : pourquoi",
              "Les réactions et les témoignages des personnes concernées",
              "Le contexte et les détails secondaires",
            ],
          },
          quiz: [
            { q: "Que signifie le sigle QQOQCP ?", options: ["Qui, quoi, où, quand, comment, pourquoi", "Quel, quand, où, quoi, combien, par qui", "Question, quote, ouverture, qualité, chute, plan"], answer: 0, why: "Ce sont les six questions auxquelles un article d'information doit répondre." },
            { q: "Dans la pyramide inversée, que place-t-on en premier ?", options: ["Les détails secondaires", "Le contexte historique", "L'essentiel de l'information", "L'avis du journaliste"], answer: 2, why: "On commence par l'essentiel pour que le lecteur comprenne tout de suite, même s'il s'arrête vite." },
            { q: "« Des robots et des champions » est un titre :", options: ["informatif", "incitatif", "neutre"], answer: 1, why: "Ce titre éveille la curiosité sans donner l'information précise : il est incitatif." },
            { q: "Comment rapporter correctement les paroles d'un témoin ?", options: ["En les inventant si elles manquent", "En les résumant sans dire qui parle", "En les recopiant sans guillemets", "Entre guillemets, avec son nom et sa fonction"], answer: 3, why: "La citation exacte entre guillemets, attribuée à une personne identifiée, permet au lecteur de savoir qui parle." },
            { q: "Comment appelle-t-on la dernière phrase d'un article ?", options: ["L'attaque", "La chute", "Le chapeau", "La manchette"], answer: 1, why: "La chute termine l'article, souvent en ouvrant sur la suite de l'événement." },
          ],
          trap: "Raconter l'événement dans l'ordre chronologique (« D'abord nous sommes arrivés, puis... ») comme dans un récit : un article de presse commence par l'information la plus importante, pas par le début de l'histoire.",
          method: "Avant de rédiger, écrivez les six questions QQOQCP en colonne et notez une réponse précise à chacune ; numérotez ensuite vos notes de 1 (l'essentiel) à 5 (le contexte) et rédigez dans cet ordre.",
        },
      ],
    },
    /* ================================================================== */
    /* ORTHOGRAPHE ET LEXIQUE                                               */
    /* ================================================================== */
    {
      id: 'orthographe-lexique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'accord-participe-passe',
          title: 'L\'accord du participe passé',
          minutes: 35,
          objectives: [
            "Reconnaître le participe passé et trouver sa terminaison (-é, -i, -u, -is, -it...).",
            "Accorder le participe passé employé seul ou avec l'auxiliaire être.",
            "Accorder le participe passé employé avec l'auxiliaire avoir en repérant la place du COD.",
            "Justifier un accord à l'écrit, notamment en dictée et en relisant ses propres textes.",
          ],
          course: [
            {
              heading: "Reconnaître le participe passé et sa terminaison",
              paragraphs: [
                "Le participe passé est une forme du verbe qui sert à former les temps composés (« j'ai chanté », « elle était partie ») et la voix passive (« la porte est fermée »). Il peut aussi être employé seul, comme un adjectif : « une porte fermée ».",
                "Sa terminaison dépend du verbe. Les verbes du 1er groupe (en -er) et le verbe aller ont un participe en -é : chanté, allé. Les verbes du 2e groupe ont un participe en -i : fini, choisi. Les verbes du 3e groupe ont des terminaisons variées : -i (parti), -u (vendu, vu, couru), -is (pris, mis), -it (dit, écrit), -ert (ouvert), -int (peint).",
                "Pour trouver la lettre finale muette d'un participe, mettez-le au féminin : on entend alors la consonne. « Une lettre écrite » donne écrit ; « une chose prise » donne pris ; « une fenêtre ouverte » donne ouvert. Pour ne pas confondre le participe en -é et l'infinitif en -er, remplacez le verbe par un verbe du 3e groupe comme vendre : « il a mangé » devient « il a vendu » (participe), « il va manger » devient « il va vendre » (infinitif).",
              ],
              box: { label: "Repère", text: "Trouver la terminaison : mettre le participe au féminin (écrite → écrit, prise → pris). Participe en -é ou infinitif en -er ? Remplacer par vendu (participe) ou vendre (infinitif)." },
            },
            {
              heading: "Employé seul ou avec l'auxiliaire être",
              paragraphs: [
                "Employé seul, sans auxiliaire, le participe passé se comporte comme un adjectif : il s'accorde en genre et en nombre avec le nom auquel il se rapporte. « Des fenêtres ouvertes », « une histoire racontée à voix basse », « Fatigués, les randonneurs s'assirent. »",
                "Employé avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet du verbe. C'est le cas aux temps composés de verbes comme aller, venir, partir, arriver, tomber, naître, mourir, rester : « Mes cousines sont arrivées hier. » « Ils étaient tombés. » C'est aussi le cas à la voix passive : « Ces maisons ont été construites en 1950. »",
                "Pour réussir l'accord, posez la question « Qui est-ce qui est... ? » devant le participe : « Qui est-ce qui est arrivé ? Mes cousines », donc arrivées, au féminin pluriel. Attention au participe passé du verbe être, été : il est toujours invariable (« elles ont été »).",
              ],
              box: { label: "Règle", text: "Participe passé employé seul : accord avec le nom auquel il se rapporte (des portes fermées). Avec être : accord en genre et en nombre avec le sujet (elles sont venues). Été est toujours invariable." },
            },
            {
              heading: "Employé avec l'auxiliaire avoir",
              paragraphs: [
                "Avec l'auxiliaire avoir, le participe passé ne s'accorde jamais avec le sujet. « Elles ont chanté » : chanté reste invariable, même si le sujet est féminin pluriel.",
                "Il s'accorde avec le complément d'objet direct (COD), mais seulement si ce COD est placé avant le verbe. Pour le trouver, posez la question « quoi ? » ou « qui ? » après le participe : « J'ai acheté quoi ? des pommes ». Ici, le COD est placé après : pas d'accord. En revanche, dans « Les pommes que j'ai achetées », le COD est le pronom relatif que, qui remplace les pommes et qui est placé avant : on accorde au féminin pluriel.",
                "Le COD est placé avant le verbe dans trois cas fréquents : avec un pronom personnel COD (le, la, l', les, me, te, nous, vous : « Ces pommes, je les ai mangées »), avec le pronom relatif que (« la chanson que j'ai entendue »), et dans certaines phrases interrogatives (« Quelles chaussures as-tu choisies ? »). S'il n'y a pas de COD, le participe reste invariable : « Elles ont dormi. »",
              ],
              box: { label: "Règle", text: "Avec avoir, le participe passé ne s'accorde jamais avec le sujet. Il s'accorde avec le COD seulement si celui-ci est placé avant le verbe (le, la, les, l', que...) : « les fleurs que j'ai cueillies ». Sinon, il reste invariable." },
            },
            {
              heading: "Quelques cas particuliers",
              paragraphs: [
                "Avec le pronom en, le participe passé employé avec avoir reste invariable : « Des cerises, j'en ai cueilli tout un panier. » Le pronom en n'est pas un COD qui commande l'accord.",
                "Les verbes pronominaux (conjugués avec un pronom comme se, me, te) forment leurs temps composés avec être. Les verbes qui n'existent qu'à la forme pronominale, comme s'évanouir, se souvenir ou s'enfuir, s'accordent avec le sujet : « Elle s'est évanouie », « Ils se sont enfuis ». Pour les autres, la règle est plus complexe et sera approfondie en 3e : on écrit « Elle s'est lavée », mais « Elle s'est lavé les mains », car le COD les mains est placé après.",
              ],
              box: { label: "À retenir", text: "Avec en : participe invariable (des fraises, j'en ai mangé). Été : toujours invariable. Verbes seulement pronominaux (s'évanouir, se souvenir) : accord avec le sujet (elles se sont souvenues)." },
            },
          ],
          keyPoints: [
            "Pour trouver la terminaison d'un participe, le mettre au féminin (écrite → écrit).",
            "Employé seul, le participe s'accorde comme un adjectif avec le nom auquel il se rapporte.",
            "Avec être, il s'accorde avec le sujet : elles sont parties.",
            "Avec avoir, jamais d'accord avec le sujet ; accord avec le COD seulement s'il est placé avant (que, le, la, les).",
            "Été est invariable ; avec en, le participe reste invariable.",
          ],
          example: {
            statement: "Justifiez l'orthographe des trois participes passés de cette phrase : « Les lettres que Léa a écrites sont arrivées hier ; elle les avait postées lundi. »",
            solution: [
              "« écrites » : auxiliaire avoir (a écrites). On cherche le COD : Léa a écrit quoi ? « que », pronom relatif qui remplace « les lettres ». Le COD est placé avant le verbe : le participe s'accorde avec lui, au féminin pluriel.",
              "« arrivées » : auxiliaire être (sont arrivées). On cherche le sujet : qui est-ce qui est arrivé ? « Les lettres », féminin pluriel. Le participe s'accorde avec le sujet.",
              "« postées » : auxiliaire avoir (avait postées). Le COD est le pronom « les », qui remplace « les lettres », placé avant le verbe : accord au féminin pluriel.",
              "Vérification : aucun participe employé avec avoir ne s'accorde avec le sujet « Léa » ; deux s'accordent avec un COD placé avant, un avec le sujet de l'auxiliaire être.",
              "Réponse : écrites (COD que placé avant), arrivées (accord avec le sujet, auxiliaire être), postées (COD les placé avant).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez le participe passé correctement accordé. a) Mes cousines sont (venir) pour Noël. b) Nous avons (manger) une tarte aux pommes. c) La tarte que nous avons (manger) était délicieuse. d) Ces chansons, je les ai (entendre) à la radio. e) Les volets (fermer) protègent la maison du soleil. f) Elles ont (dormir) dix heures.",
              hint: "Repérez d'abord l'auxiliaire (être, avoir ou aucun). Avec avoir, cherchez le COD et regardez s'il est placé avant ou après le verbe.",
              solution: [
                "a) venues : auxiliaire être, accord avec le sujet « mes cousines » (féminin pluriel).",
                "b) mangé : auxiliaire avoir, le COD « une tarte » est placé après : invariable.",
                "c) mangée : auxiliaire avoir, le COD « que » (mis pour « la tarte », féminin singulier) est placé avant : accord.",
                "d) entendues : auxiliaire avoir, le COD « les » (mis pour « ces chansons », féminin pluriel) est placé avant : accord.",
                "e) fermés : participe employé seul, il s'accorde avec « les volets » (masculin pluriel).",
                "f) dormi : auxiliaire avoir, pas de COD (« dix heures » indique une durée) : invariable.",
              ],
            },
            {
              level: 2,
              statement: "Léa raconte sa sortie. Cinq participes passés sont mal accordés : retrouvez-les, corrigez-les et justifiez. « Hier, mes amies et moi sommes allé au cinéma. Nous avons choisies une comédie. Les places que nous avons acheté étaient chères. Quand nous sommes arrivées, les spectateurs étaient déjà installé. Le film, je l'ai trouvée très drôle. »",
              hint: "Léa est une fille et ses amies aussi : le sujet « mes amies et moi » est donc féminin pluriel. Pour chaque participe, repérez l'auxiliaire, puis le sujet ou le COD.",
              solution: [
                "« allé » devient « allées » : auxiliaire être, accord avec le sujet « mes amies et moi », féminin pluriel (Léa et ses amies sont toutes des filles).",
                "« choisies » devient « choisi » : auxiliaire avoir, le COD « une comédie » est placé après le verbe, donc pas d'accord ; et jamais d'accord avec le sujet « nous ».",
                "« acheté » devient « achetées » : auxiliaire avoir, le COD « que », mis pour « les places » (féminin pluriel), est placé avant.",
                "« installé » devient « installés » : auxiliaire être, accord avec le sujet « les spectateurs », masculin pluriel.",
                "« trouvée » devient « trouvé » : le COD « l' » remplace « le film », masculin singulier ; il est placé avant, mais il est masculin.",
                "Attention : « arrivées » était juste (auxiliaire être, sujet « nous », c'est-à-dire Léa et ses amies, féminin pluriel).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez les participes passés correctement et justifiez chaque accord. « Cet été, ma sœur et ma mère sont (partir) en Bretagne. Elles ont (louer) une petite maison. La maison qu'elles ont (louer) était (situer) au bord de la mer ; elle avait (être) (repeindre) en bleu l'année précédente. Il a (faire) très beau. Des crêpes, elles en ont (manger) tous les jours ! Les photos qu'elles m'ont (envoyer), je les ai (montrer) à mes amis. Ma sœur s'est longtemps (souvenir) de ces vacances. »",
              hint: "Il y a onze participes. Méfiez-vous des pièges : le participe été, le pronom en, et le pronom m' qui n'est pas toujours un COD (on envoie quelque chose à quelqu'un).",
              solution: [
                "parties : auxiliaire être, accord avec le sujet « ma sœur et ma mère » (féminin pluriel).",
                "louée... d'abord « ont loué » : auxiliaire avoir, COD « une petite maison » placé après, invariable. Puis « qu'elles ont louée » : COD « qu' » mis pour « la maison », placé avant, accord au féminin singulier.",
                "située : auxiliaire être (était située), accord avec le sujet « la maison ».",
                "été repeinte : « été » est toujours invariable ; « repeinte » est à la voix passive (avec être), il s'accorde avec le sujet « elle » (la maison), féminin singulier.",
                "fait : auxiliaire avoir, verbe impersonnel sans COD : invariable.",
                "mangé : auxiliaire avoir, le pronom « en » ne commande pas l'accord : invariable.",
                "envoyées : auxiliaire avoir, COD « qu' » mis pour « les photos » (féminin pluriel), placé avant. « m' » est un complément d'objet indirect (envoyer à moi) : il ne compte pas.",
                "montrées : auxiliaire avoir, COD « les » mis pour « les photos », placé avant : accord au féminin pluriel.",
                "souvenue : se souvenir n'existe qu'à la forme pronominale ; le participe s'accorde avec le sujet « ma sœur ».",
                "Résultat : parties, loué, louée, située, été, repeinte, fait, mangé, envoyées, montrées, souvenue.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez que vous maîtrisez les règles d'accord du participe passé.",
            statements: [
              { text: "Avec l'auxiliaire être, le participe passé s'accorde avec le sujet.", true: true, why: "« Elles sont venues » : venues s'accorde avec elles, féminin pluriel." },
              { text: "Avec l'auxiliaire avoir, le participe passé s'accorde toujours avec le sujet.", true: false, why: "Avec avoir, il ne s'accorde jamais avec le sujet : « elles ont chanté »." },
              { text: "Dans « les gâteaux que j'ai faits », faits s'accorde avec que, mis pour gâteaux.", true: true, why: "Le COD que est placé avant le verbe : le participe s'accorde avec lui." },
              { text: "Dans « Elle a acheté des fleurs », il faut écrire achetées.", true: false, why: "Le COD des fleurs est placé après le verbe : le participe reste invariable." },
              { text: "Le participe passé été ne s'accorde jamais.", true: true, why: "« Elles ont été », « ils ont été » : été est toujours invariable." },
              { text: "Dans « Des cerises, j'en ai cueilli », cueilli reste invariable.", true: true, why: "Le pronom en ne commande pas l'accord du participe passé employé avec avoir." },
              { text: "Dans « Ils ont couru », couru s'accorde avec ils.", true: false, why: "Auxiliaire avoir et aucun COD placé avant : couru reste invariable." },
              { text: "Le participe passé employé seul s'accorde comme un adjectif.", true: true, why: "« Des fenêtres ouvertes » : ouvertes s'accorde avec fenêtres." },
            ],
          },
          quiz: [
            { q: "Complétez : « Nous avons ... deux pizzas. »", options: ["mangées", "mangé", "mangés", "manger"], answer: 1, why: "Auxiliaire avoir et COD placé après le verbe : le participe reste invariable." },
            { q: "Pourquoi écrit-on achetées dans « les robes que j'ai achetées » ?", options: ["Le COD est placé avant le verbe", "Le sujet je est au féminin pluriel", "L'auxiliaire être impose l'accord", "Le verbe se termine par -er"], answer: 0, why: "Le COD que, mis pour les robes, est placé avant l'auxiliaire avoir : le participe s'accorde avec lui." },
            { q: "Avec quel auxiliaire le participe passé s'accorde-t-il avec le sujet ?", options: ["Avoir", "Être", "Les deux", "Aucun"], answer: 1, why: "Avec être, le participe s'accorde avec le sujet ; avec avoir, jamais." },
            { q: "Quelle phrase est correctement écrite ?", options: ["Elles ont chantées.", "Elle est venu.", "Ils sont tombés.", "Les clés, je les ai perdu."], answer: 2, why: "Avec être, tombés s'accorde avec ils (masculin pluriel). Il faudrait écrire chanté, venue et perdues." },
            { q: "Quel est le participe passé du verbe prendre ?", options: ["prit", "prend", "prendu", "pris"], answer: 3, why: "Au féminin, on dit « prise » : on entend le s, donc le participe s'écrit pris." },
          ],
          trap: "Accorder le participe passé employé avec avoir avec le sujet (« elles ont mangées ») : avec avoir, on ne regarde jamais le sujet, seulement le COD, et seulement s'il est placé avant le verbe.",
          method: "Pour chaque participe, suivez trois étapes : 1) repérer l'auxiliaire ; 2) avec être, chercher le sujet ; avec avoir, chercher le COD (question « quoi ? » ou « qui ? ») ; 3) vérifier sa place, puis accorder et relire en mettant le participe au féminin pour entendre la consonne finale.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'homophones-grammaticaux',
          title: 'Les homophones grammaticaux',
          minutes: 35,
          objectives: [
            "Identifier les homophones grammaticaux les plus fréquents et leur classe grammaticale.",
            "Distinguer les homophones grâce aux tests de remplacement.",
            "Orthographier correctement les homophones en rédaction et en dictée.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un homophone grammatical ?",
              paragraphs: [
                "Des homophones sont des mots qui se prononcent de la même façon mais qui s'écrivent différemment et n'ont pas le même sens. Le mot vient du grec : homo signifie « le même » et phônê « le son ». Les homophones grammaticaux sont des petits mots outils (déterminants, prépositions, pronoms, conjonctions) ou des formes des verbes être et avoir.",
                "Comme on ne peut pas les distinguer à l'oral, il faut réfléchir à leur rôle dans la phrase. La méthode la plus sûre est le test de remplacement : on remplace le mot par un autre qui a la même classe grammaticale. Si la phrase garde son sens, on a trouvé la bonne orthographe.",
              ],
              box: { label: "Définition", text: "Les homophones grammaticaux sont des mots qui se prononcent de la même façon mais n'ont ni la même orthographe, ni la même classe grammaticale (a / à, et / est, son / sont). On les distingue par un test de remplacement." },
            },
            {
              heading: "a / à, et / est, ou / où, on / ont, son / sont",
              paragraphs: [
                "a est le verbe avoir : on peut le remplacer par avait (« Il a faim » → « Il avait faim »). à est une préposition : le remplacement par avait est impossible (« Il va à la piscine »). De même, est est le verbe être, remplaçable par était (« Le ciel est gris »), tandis que et est une conjonction de coordination, remplaçable par « et puis » (« du pain et du beurre »).",
                "ou (sans accent) signifie « ou bien » et marque un choix : « à droite ou à gauche ». où (avec accent) indique un lieu ou un moment : « la ville où je suis né », « le jour où il a neigé ».",
                "on est un pronom personnel sujet, remplaçable par il (« On chante » → « Il chante »). ont est le verbe avoir, remplaçable par avaient (« Ils ont gagné » → « Ils avaient gagné »). Attention à la négation : dans « On n'a rien vu », la liaison cache le n'. Remplacez on par il : « Il n'a rien vu », le n' réapparaît. son est un déterminant possessif, remplaçable par mon (« son vélo » → « mon vélo ») ; sont est le verbe être, remplaçable par étaient (« Ils sont partis »).",
              ],
              box: { label: "Repère", text: "a → avait ; à : préposition. est → était ; et → et puis. ou → ou bien ; où : lieu ou moment. on → il ; ont → avaient. son → mon ; sont → étaient." },
            },
            {
              heading: "ce / se, ces / ses, c'est / s'est, leur / leurs",
              paragraphs: [
                "ce est un déterminant démonstratif devant un nom (« ce livre ») ou un pronom démonstratif (« ce que je dis », « c'est », « ce sont »). se est un pronom personnel réfléchi, toujours placé devant un verbe : pour le reconnaître, conjuguez à la première personne (« il se lave » → « je me lave »).",
                "ces est un déterminant démonstratif : il montre (« ces arbres-là »). ses est un déterminant possessif : remplacez-le par mes, ou ajoutez « les siens » (« Paul range ses affaires » → « mes affaires »). De même, c'est signifie « cela est » (« C'est vrai »), alors que s'est appartient à un verbe pronominal au passé composé (« Elle s'est levée » → « je me suis levée »).",
                "leur placé devant un verbe est un pronom personnel : il signifie « à eux, à elles » et ne prend jamais de s (« Je leur parle » → « Je lui parle »). leur placé devant un nom est un déterminant possessif : il prend un s quand le nom est au pluriel (« leur maison », « leurs enfants »).",
              ],
              box: { label: "Repère", text: "se → me (devant un verbe) ; ce : devant un nom ou dans c'est. ses → mes ; ces : démonstratif. c'est → cela est ; s'est → je me suis. leur devant un verbe → lui, jamais de s ; leur(s) devant un nom : accord avec le nom." },
            },
            {
              heading: "quand / quant / qu'en, la / l'a / là, peu / peut / peux",
              paragraphs: [
                "quand indique le temps (« Quand il pleut, je lis ») ou pose une question (« Quand pars-tu ? ») : on peut le remplacer par lorsque. quant s'emploie toujours dans quant à, quant au, quant aux et signifie « en ce qui concerne » (« Quant à moi, je reste »). qu'en est la contraction de que + en (« Qu'en penses-tu ? »).",
                "la est un article (« la porte ») ou un pronom (« je la vois »). l'a est le pronom l' suivi du verbe avoir : remplacez par l'avait (« Il l'a vu » → « Il l'avait vu »). là, avec un accent, indique un lieu : on peut le remplacer par ici (« Pose-le là »).",
                "peu est un adverbe, le contraire de beaucoup (« un peu de sel »). peut et peux sont des formes du verbe pouvoir : peut à la 3e personne (« il peut », remplaçable par pouvait), peux à la 1re et à la 2e personne du singulier (« je peux », « tu peux »).",
              ],
              box: { label: "À retenir", text: "quand → lorsque ; quant à → en ce qui concerne ; qu'en → que + en. l'a → l'avait ; là → ici ; la : article ou pronom. peu → beaucoup (contraire) ; peut → pouvait ; peux : je ou tu." },
            },
          ],
          keyPoints: [
            "Les homophones se prononcent pareil mais ont une orthographe, un sens et une classe différents.",
            "Le test de remplacement permet de les distinguer : a → avait, est → était, ont → avaient, sont → étaient.",
            "son → mon, ses → mes, se → me ; ce et ces sont des démonstratifs.",
            "leur devant un verbe est un pronom invariable (→ lui) ; devant un nom pluriel, on écrit leurs.",
            "quand → lorsque ; quant à → en ce qui concerne ; l'a → l'avait ; là → ici ; peu → contraire de beaucoup.",
          ],
          example: {
            statement: "Complétez et justifiez : « Les enfants (son/sont) rentrés (a/à) la maison (ou/où) (leur/leurs) mère les attendait. Elle (leur/leurs) (a/à) préparé un goûter. »",
            solution: [
              "« sont » : on peut dire « Les enfants étaient rentrés ». C'est le verbe être.",
              "« à » : on ne peut pas dire « rentrés avait la maison ». C'est une préposition.",
              "« où » : le mot indique un lieu (la maison dans laquelle la mère attendait). On ne peut pas dire « ou bien ».",
              "« leur mère » : leur est devant un nom ; chaque enfant n'a qu'une mère, le nom est au singulier, donc leur sans s.",
              "« leur a préparé » : leur est devant un verbe, c'est un pronom personnel qui signifie « à eux » (« Elle lui a préparé ») : jamais de s. « a » se remplace par avait : c'est le verbe avoir.",
              "Réponse : « Les enfants sont rentrés à la maison où leur mère les attendait. Elle leur a préparé un goûter. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez le bon homophone et justifiez par un test de remplacement. a) Il (a/à) oublié son sac (a/à) la piscine. b) Le ciel (et/est) gris (et/est) le vent souffle. c) (Ou/Où) se trouve la gare : à droite (ou/où) à gauche ? d) (On/Ont) a vu qu'ils (on/ont) gagné. e) Ils (son/sont) venus avec (son/sont) cousin. f) (Ces/Ses) chaussures-là appartiennent à Paul : ce sont (ces/ses) préférées.",
              hint: "Essayez à chaque fois de remplacer le mot par avait, était, ou bien, il, avaient, étaient, mon ou mes. Si la phrase garde son sens, c'est la bonne forme.",
              solution: [
                "a) « a » (il avait oublié : verbe avoir) puis « à » (préposition, « avait la piscine » est impossible).",
                "b) « est » (le ciel était gris : verbe être) puis « et » (et puis le vent souffle : conjonction).",
                "c) « Où » (question sur le lieu) puis « ou » (à droite ou bien à gauche : choix).",
                "d) « On » (il a vu : pronom) puis « ont » (ils avaient gagné : verbe avoir).",
                "e) « sont » (ils étaient venus : verbe être) puis « son » (avec mon cousin : déterminant possessif).",
                "f) « Ces » (on montre les chaussures : « ces chaussures-là ») puis « ses » (ce sont les siennes, celles de Paul : « mes préférées »).",
              ],
            },
            {
              level: 2,
              statement: "Recopiez ce texte en choisissant le bon homophone : « Quand la pluie (s'est/c'est) arrêtée, les enfants (on/ont) couru dans le jardin. (Leur/Leurs) parents (leur/leurs) ont crié de mettre (leur/leurs) bottes. (Quant/Quand) à Lucie, elle (peu/peut/peux) à (peu/peut) près tout faire sans se salir ; (sa/ça) mère (la/l'a/là) félicitée. »",
              hint: "Pour leur, regardez s'il est devant un verbe (pronom, jamais de s) ou devant un nom (accord avec ce nom). Pour l'a, essayez de le remplacer par l'avait.",
              solution: [
                "« s'est » : verbe pronominal s'arrêter au plus-que-parfait... plus exactement au passé composé (« la pluie s'était arrêtée » fonctionne aussi, je me suis arrêté) ; ce n'est pas « cela est ».",
                "« ont » : ils avaient couru (verbe avoir).",
                "« Leurs parents » : déterminant devant un nom pluriel, donc leurs. « leur ont crié » : pronom devant un verbe (« lui a crié »), donc leur sans s.",
                "« leurs bottes » : déterminant devant un nom pluriel (chaque enfant a deux bottes), donc leurs.",
                "« Quant » : quant à signifie « en ce qui concerne » Lucie.",
                "« peut » : elle pouvait (verbe pouvoir, 3e personne) ; « peu » : à peu près, adverbe.",
                "« sa mère » : déterminant possessif (« ma mère ») ; « ça » signifierait « cela ».",
                "« l'a félicitée » : on peut dire « l'avait félicitée » (pronom l' + verbe avoir). Le participe s'accorde avec le COD l', mis pour Lucie, placé avant.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce texte contient huit erreurs d'homophones. Retrouvez-les, corrigez-les et justifiez chaque correction. « Mes grands-parents vivent à la campagne, ou ils on une ferme. Quand j'arrive, ils me montrent leurs animaux : se sont des chèvres et des moutons. Mon grand-père leurs donne du foin. L'an dernier, ma grand-mère ma appris à traire ; sa n'a pas été facile ! Quant nous repartons, j'ai toujours un peut de tristesse. »",
              hint: "Lisez phrase par phrase et testez chaque petit mot : ou bien ? avaient ? cela ? lui ? lorsque ? beaucoup ? Huit corrections sont attendues ; « leurs animaux » est juste.",
              solution: [
                "1) « ou » devient « où » : le mot indique un lieu (la campagne, où ils ont une ferme) ; on ne peut pas dire « ou bien ».",
                "2) « on » devient « ont » : ils avaient une ferme (verbe avoir).",
                "3) « se sont » devient « ce sont » : ce est un pronom démonstratif (cela) ; se ne s'emploie que devant un verbe pronominal.",
                "4) « leurs donne » devient « leur donne » : devant un verbe, leur est un pronom (« il lui donne ») et ne prend jamais de s.",
                "5) « ma appris » devient « m'a appris » : pronom m' et verbe avoir (« m'avait appris ») ; ma est un déterminant qui se place devant un nom.",
                "6) « sa » devient « ça » : on peut dire « cela n'a pas été facile » ; sa est un déterminant possessif.",
                "7) « Quant » devient « Quand » : on peut dire « Lorsque nous repartons ».",
                "8) « un peut » devient « un peu » : c'est l'adverbe, contraire de beaucoup ; peut est le verbe pouvoir.",
                "Texte corrigé : « Mes grands-parents vivent à la campagne, où ils ont une ferme. Quand j'arrive, ils me montrent leurs animaux : ce sont des chèvres et des moutons. Mon grand-père leur donne du foin. L'an dernier, ma grand-mère m'a appris à traire ; ça n'a pas été facile ! Quand nous repartons, j'ai toujours un peu de tristesse. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque homophone au test qui permet de le reconnaître.",
            pairs: [
              { left: "a", right: "se remplace par « avait »" },
              { left: "est", right: "se remplace par « était »" },
              { left: "sont", right: "se remplace par « étaient »" },
              { left: "ont", right: "se remplace par « avaient »" },
              { left: "ses", right: "se remplace par « mes »" },
              { left: "où", right: "indique un lieu ou un moment" },
            ],
          },
          quiz: [
            { q: "Complétez : « Il ... pris le train ... Lyon. »", options: ["a / à", "à / a", "a / a", "à / à"], answer: 0, why: "Il avait pris (verbe avoir), puis la préposition à devant le nom de ville." },
            { q: "Complétez : « Ils ... partis en vacances avec ... chien. »", options: ["son / leurs", "sont / leur", "sont / leurs", "son / leur"], answer: 1, why: "Ils étaient partis (verbe être) ; ils n'ont qu'un chien, donc leur au singulier." },
            { q: "Le pronom leur, placé devant un verbe :", options: ["prend un s au pluriel", "se remplace par « mes »", "ne prend jamais de s"], answer: 2, why: "Devant un verbe, leur signifie « à eux » : il est invariable (« je leur parle »)." },
            { q: "Quel test permet de reconnaître ont ?", options: ["Le remplacer par « il »", "Le remplacer par « mon »", "Le remplacer par « ou bien »", "Le remplacer par « avaient »"], answer: 3, why: "Ont est le verbe avoir au présent : « ils ont » devient « ils avaient »." },
            { q: "Complétez : « ... à moi, je reste ici. »", options: ["Quand", "Quant", "Qu'en"], answer: 1, why: "Quant à signifie « en ce qui concerne » : quant à moi." },
          ],
          trap: "Écrire « leurs » devant un verbe parce que le sens est pluriel (« je leurs parle ») : devant un verbe, leur est un pronom qui ne prend jamais de s, même s'il désigne plusieurs personnes.",
          method: "Quand vous hésitez, ne vous fiez pas à l'oreille : remplacez le mot par son test (avait, était, mon, lui, lorsque, ici). Relisez votre copie une fois uniquement pour chasser les homophones, en vous arrêtant sur chaque petit mot.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'formation-des-mots',
          title: 'La formation des mots : préfixes, suffixes, radicaux',
          minutes: 30,
          objectives: [
            "Identifier le radical, le préfixe et le suffixe d'un mot dérivé.",
            "Expliquer le sens d'un mot à partir de sa formation.",
            "Regrouper des mots en familles et repérer les racines grecques et latines.",
            "Distinguer la dérivation, la composition et d'autres modes de formation (troncation, sigle, mot-valise, emprunt).",
          ],
          course: [
            {
              heading: "Radical, préfixe, suffixe : la dérivation",
              paragraphs: [
                "Beaucoup de mots français sont construits à partir d'autres mots. Le radical est la base du mot, celle qui porte son sens principal : dans « replanter », le radical est plant-. Le préfixe est placé avant le radical (re-) ; le suffixe est placé après (-er, -ation dans « plantation »). Ce procédé, qui ajoute un préfixe ou un suffixe à un radical, s'appelle la dérivation.",
                "Le préfixe modifie le sens du mot sans changer sa classe grammaticale : « faire » et « défaire » sont deux verbes. Le suffixe, lui, change souvent la classe du mot : « rapide » (adjectif) donne « rapidement » (adverbe) ; « chanter » (verbe) donne « chanteur » (nom).",
                "Les mots formés sur le même radical forment une famille de mots : terre, terrain, terrestre, enterrer, atterrir. Le radical peut changer de forme : mer et marin, pied et piéton, lire et lecture appartiennent à la même famille. Attention aux faux amis : « terrible » ne vient pas de terre, mais du latin terror, la peur.",
              ],
              box: { label: "Définition", text: "Le radical porte le sens du mot. Le préfixe se place avant le radical et en modifie le sens. Le suffixe se place après et change souvent la classe du mot. Une famille de mots regroupe les mots formés sur le même radical." },
            },
            {
              heading: "Le sens des préfixes et des suffixes",
              paragraphs: [
                "Connaître le sens des préfixes aide à comprendre des mots nouveaux. in- marque le contraire (inutile) ; il devient im- devant m, b et p (immobile, imbuvable, impossible), il- devant l (illisible) et ir- devant r (irréel). dé- ou dés- marque aussi le contraire (défaire, désordre). re- ou ré- marque la répétition (relire, réécrire). pré- signifie « avant » (préhistoire), anti- « contre » (antivol), sur- « au-dessus » ou « en excès » (survoler, surcharger), sous- « en dessous » ou « pas assez » (sous-marin, sous-alimenté).",
                "Les suffixes ont aussi un sens. -eur ou -euse désigne celui qui fait l'action (nageur, vendeuse). -tion ou -ation désigne l'action (plantation). -able ou -ible exprime la possibilité (lavable : qui peut être lavé ; lisible). -ette ou -et exprime la petitesse : c'est un diminutif (maisonnette, jardinet). -ier ou -ière peut désigner un arbre fruitier ou un métier (pommier, pâtissière). -ment, ajouté à un adjectif au féminin, forme un adverbe (lente → lentement). -âtre donne une nuance approximative ou péjorative (rougeâtre).",
              ],
              box: { label: "Repère", text: "Préfixes : in-/im-/il-/ir- et dé- (contraire), re- (répétition), pré- (avant), anti- (contre), sur- (au-dessus), sous- (en dessous). Suffixes : -eur (qui fait), -tion (action), -able (possibilité), -ette (petit), -ier (arbre, métier), -ment (adverbe)." },
            },
            {
              heading: "La composition et les racines grecques et latines",
              paragraphs: [
                "La composition consiste à assembler deux mots (ou plus) pour en former un nouveau. Les mots composés peuvent s'écrire avec un trait d'union (porte-monnaie, arc-en-ciel), en plusieurs mots séparés (pomme de terre, salle à manger) ou en un seul mot soudé (portefeuille, gendarme).",
                "Beaucoup de mots savants, surtout dans les sciences, sont composés de racines grecques ou latines. Géographie vient du grec gê (la terre) et graphein (écrire) : c'est la description de la terre. Thermomètre associe thermos (chaud) et metron (mesure). Hippopotame signifie « cheval du fleuve » (hippos, potamos). Du latin viennent par exemple omni (tout), vorare (dévorer), aqua (eau) : un omnivore mange de tout.",
                "Ces racines se retrouvent dans des dizaines de mots. Si vous savez que bio signifie « vie » et logos « discours, science », vous comprenez biologie (la science du vivant) et vous devinez le sens de mots nouveaux.",
              ],
              box: { label: "Repère", text: "Racines grecques : bio (vie), chrono (temps), géo (terre), graphie (écriture), hydro (eau), logie (science), micro (petit), phone (voix, son), télé (loin), mètre (mesure). Racines latines : aqua (eau), omni (tout), vore (qui mange)." },
            },
            {
              heading: "D'autres façons de créer des mots",
              paragraphs: [
                "La langue s'enrichit aussi par la troncation, qui raccourcit un mot : cinématographe est devenu cinéma puis ciné, photographie est devenu photo, métropolitain est devenu métro. Le sigle est formé des initiales de plusieurs mots et se prononce lettre par lettre (SNCF) ; quand il se prononce comme un mot, on parle d'acronyme (Unesco, ovni).",
                "Le mot-valise fusionne deux mots en un seul : « franglais » (français et anglais), « courriel » (courrier électronique, mot proposé au Québec). Enfin, le français emprunte des mots à d'autres langues : week-end à l'anglais, pizza à l'italien, algèbre à l'arabe. Un mot nouveau s'appelle un néologisme.",
              ],
              box: { label: "À retenir", text: "Dérivation : radical + préfixe ou suffixe. Composition : assemblage de mots (porte-monnaie). Troncation : mot raccourci (métro). Sigle : initiales (SNCF). Mot-valise : deux mots fusionnés (franglais). Emprunt : mot venu d'une autre langue (week-end)." },
            },
          ],
          keyPoints: [
            "Un mot dérivé = préfixe (facultatif) + radical + suffixe (facultatif).",
            "Le préfixe modifie le sens ; le suffixe change souvent la classe du mot.",
            "in- devient im- devant m, b, p ; il- devant l ; ir- devant r.",
            "Une famille de mots regroupe les mots formés sur le même radical, dont la forme peut varier (mer, marin).",
            "Les racines grecques et latines (géo, bio, chrono, omni, aqua) permettent de deviner le sens des mots savants.",
            "Autres formations : composition, troncation, sigle, mot-valise, emprunt.",
          ],
          example: {
            statement: "Décomposez le mot « irremplaçable » et expliquez son sens à partir de sa formation.",
            solution: [
              "Repérer le radical : remplac-, que l'on retrouve dans le verbe remplacer (lui-même formé sur place, avec le préfixe re-). Le ç garde le son [s] devant le a.",
              "Repérer le suffixe : -able, qui exprime la possibilité. « Remplaçable » signifie « qui peut être remplacé ». Le suffixe a transformé le verbe en adjectif.",
              "Repérer le préfixe : ir-, forme du préfixe in- (contraire) devant un mot commençant par r.",
              "Reconstituer le sens : ir- (ne pas) + remplaç- (remplacer) + -able (pouvoir être) : qui ne peut pas être remplacé.",
              "Réponse : irremplaçable = ir- (préfixe de sens contraire) + remplaç- (radical) + -able (suffixe de possibilité) ; le mot désigne ce qui ne peut pas être remplacé, et donc ce qui est unique et précieux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Décomposez chaque mot en préfixe, radical et suffixe (quand ils existent), puis donnez son sens : a) impossible ; b) chanteur ; c) maisonnette ; d) replanter ; e) lentement ; f) invisible.",
              hint: "Cherchez d'abord le mot simple caché à l'intérieur (le radical), puis regardez ce qui a été ajouté avant et après.",
              solution: [
                "a) im- (contraire, forme de in- devant p) + possible : qui n'est pas possible.",
                "b) chant- (radical de chanter) + -eur (celui qui fait l'action) : celui qui chante.",
                "c) maison + -ette (diminutif) : une petite maison.",
                "d) re- (répétition) + plant- (radical) + -er (terminaison de l'infinitif) : planter de nouveau.",
                "e) lente (adjectif au féminin) + -ment (suffixe d'adverbe) : de manière lente.",
                "f) in- (contraire) + vis- (radical latin de la vue, que l'on retrouve dans vision) + -ible (possibilité) : qui ne peut pas être vu.",
              ],
            },
            {
              level: 2,
              statement: "a) Formez le contraire de chaque adjectif avec la bonne forme du préfixe in- : légal, mangeable, réel, patient, buvable, prudent. b) Dans chaque liste, trouvez l'intrus qui n'appartient pas à la famille : 1) terre, terrain, terrible, atterrir ; 2) mer, marin, maritime, mari ; 3) dent, dentiste, dentelle, dentaire ; 4) pied, piéton, pédestre, pierre.",
              hint: "Pour a, regardez la première lettre de l'adjectif : m, b et p entraînent im-, l entraîne il-, r entraîne ir-. Pour b, demandez-vous si le sens du radical se retrouve vraiment dans chaque mot.",
              solution: [
                "a) illégal (il- devant l), immangeable (im- devant m), irréel (ir- devant r), impatient (im- devant p), imbuvable (im- devant b), imprudent (im- devant p).",
                "b) 1) terrible : il vient du latin terror (la peur), pas de terra (la terre).",
                "2) mari : il désigne l'époux et vient du latin maritus ; mer, marin et maritime viennent de mare (la mer).",
                "3) Attention, piège : dentelle appartient bien à la famille de dent (ses bords découpés ressemblent à de petites dents) ; dans cette liste, il n'y a donc pas d'intrus. Tous les mots sont formés sur dent.",
                "4) pierre : il vient du latin petra ; pied, piéton et pédestre viennent du latin pes, pedis (le pied).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici des racines grecques et latines : hydro (eau), phobe (qui craint), chrono (temps), mètre (mesure), poly (plusieurs), glotte (langue), omni (tout), vore (qui mange), micro (petit), scope (observer), hippo (cheval), potame (fleuve). a) Expliquez le sens de : hydrophobe, chronomètre, polyglotte, omnivore, microscope, hippopotame. b) Inventez deux mots nouveaux avec ces racines et donnez leur définition. c) Quel est le point commun entre « mètre » dans chronomètre et le mot « mètre » de l'unité de longueur ?",
              hint: "Assemblez le sens des deux racines dans l'ordre : par exemple « chrono + mètre » = mesure + temps, donc un instrument qui mesure le temps.",
              solution: [
                "a) Hydrophobe : qui craint l'eau. Chronomètre : instrument qui mesure le temps. Polyglotte : qui parle plusieurs langues. Omnivore : qui mange de tout. Microscope : instrument pour observer ce qui est très petit. Hippopotame : le « cheval du fleuve ».",
                "b) Exemples de mots inventés : un « chronophobe », personne qui craint le temps qui passe ; un « aquavore », animal imaginaire qui se nourrit d'eau. Toute réponse est juste si les racines sont bien assemblées et si la définition correspond.",
                "c) Les deux viennent du grec metron, la mesure : le mètre est l'unité qui sert à mesurer les longueurs, et le chronomètre mesure le temps.",
                "Résultat : en connaissant une douzaine de racines, on comprend et on peut même créer de nombreux mots savants.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la formation du mot « incroyablement », du mot de base au mot final.",
            items: [
              "croire : le verbe de base",
              "croyable : ajout du suffixe -able (qui peut être cru)",
              "incroyable : ajout du préfixe in- (qui ne peut pas être cru)",
              "incroyablement : ajout du suffixe -ment, qui forme un adverbe",
            ],
          },
          quiz: [
            { q: "Dans « déraisonnable », le préfixe est :", options: ["raison", "dé-", "-able", "-nable"], answer: 1, why: "Dé- est placé avant le radical raison et marque le contraire : qui n'est pas raisonnable." },
            { q: "Le suffixe -ette, dans maisonnette, exprime :", options: ["la petitesse", "le contraire", "la répétition", "le métier"], answer: 0, why: "-ette est un suffixe diminutif : une maisonnette est une petite maison." },
            { q: "Quel mot n'appartient pas à la famille de terre ?", options: ["terrain", "atterrir", "terrible", "enterrer"], answer: 2, why: "Terrible vient du latin terror (la peur) ; les autres viennent de terra (la terre)." },
            { q: "Géographie est formé de deux racines grecques qui signifient :", options: ["eau et mesure", "vie et science", "temps et lointain", "terre et écrire"], answer: 3, why: "Gê signifie la terre et graphein écrire : la géographie décrit la terre." },
            { q: "Le mot métro est formé par :", options: ["dérivation", "composition", "troncation", "emprunt"], answer: 2, why: "Métro est la forme raccourcie de métropolitain : c'est une troncation." },
          ],
          trap: "Croire que deux mots qui se ressemblent appartiennent forcément à la même famille (terre et terrible, mer et mari) : il faut vérifier que le sens du radical se retrouve vraiment dans chaque mot.",
          method: "Face à un mot inconnu, cachez le préfixe et le suffixe avec vos doigts pour isoler le radical, cherchez un mot connu de la même famille, puis reconstituez le sens en ajoutant celui du préfixe et du suffixe. Vérifiez ensuite dans le dictionnaire.",
        },
      ],
    },
    /* ================================================================== */
    /* LA VILLE, LIEU DE TOUS LES POSSIBLES ?                               */
    /* ================================================================== */
    {
      id: 'ville-possibles',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ville-roman',
          title: 'La ville dans le roman du XIXe siècle',
          minutes: 30,
          objectives: [
            "Situer les transformations de la ville au XIXe siècle : révolution industrielle, exode rural, travaux d'Haussmann à Paris.",
            "Connaître quelques grands romans qui font de Paris un véritable personnage : Balzac, Hugo, Zola.",
            "Analyser les procédés qui font voir la ville dans un récit : point de vue d'un personnage, champs lexicaux, sensations, images.",
            "Interroger la représentation de la ville : lieu de chance et de liberté, ou lieu de danger et de misère.",
          ],
          course: [
            {
              heading: "Une ville qui change à toute vitesse",
              paragraphs: [
                "Au XIXe siècle, la révolution industrielle transforme la France. Les usines, les chemins de fer et le commerce attirent dans les villes des milliers de paysans qui viennent chercher du travail : c'est l'exode rural. Paris grandit très vite : environ 550 000 habitants au début du siècle, plus d'un million vers 1850, environ 2,7 millions en 1901.",
                "Sous le Second Empire, Napoléon III confie au préfet Haussmann (en poste de 1853 à 1870) de grands travaux : on perce de larges boulevards, on construit des immeubles de pierre alignés, des égouts, des parcs, des gares. Les vieux quartiers aux ruelles étroites disparaissent en partie. Paris devient une ville moderne, avec ses grands magasins, ses cafés, ses théâtres et l'éclairage au gaz.",
                "Les romanciers sont fascinés par ce monde nouveau. La ville n'est plus un simple décor : elle devient presque un personnage, avec ses quartiers riches et pauvres, sa foule, son bruit et ses promesses. Beaucoup de ces romans paraissent d'abord en feuilleton dans les journaux, par épisodes, comme Les Mystères de Paris d'Eugène Sue (1842-1843), qui fait découvrir aux lecteurs les bas-fonds de la capitale.",
              ],
              box: { label: "Repère", text: "Révolution industrielle et exode rural : les villes grossissent. 1853-1870 : Haussmann transforme Paris (boulevards, immeubles, égouts, parcs). Le roman du XIXe siècle fait de la ville un personnage à part entière." },
            },
            {
              heading: "La ville de l'ambition : Balzac",
              paragraphs: [
                "Dans Le Père Goriot (1835), Honoré de Balzac raconte l'arrivée à Paris d'Eugène de Rastignac, un jeune homme pauvre venu de province pour étudier le droit. Il loge dans une pension modeste et sale, la pension Vauquer, que Balzac décrit longuement au début du roman. Rastignac découvre deux mondes : la misère de la pension et le luxe des salons de l'aristocratie.",
                "Paris lui apprend que la réussite passe souvent par l'argent, les relations et le mensonge. À la fin du roman, après avoir enterré le père Goriot au cimetière du Père-Lachaise, Rastignac contemple la ville qui s'étend à ses pieds et lui lance un défi resté célèbre : « À nous deux maintenant ! ». Paris est ici un adversaire à conquérir.",
                "Ce thème du jeune provincial ambitieux qui « monte » à Paris revient souvent au XIXe siècle. On le retrouve par exemple dans Bel-Ami de Maupassant (1885), où Georges Duroy réussit grâce au journalisme et aux femmes qui l'aident, sans beaucoup de scrupules.",
              ],
              box: { label: "À retenir", text: "Chez Balzac, la ville est le lieu de tous les possibles pour l'ambitieux : on peut s'y élever très haut, mais elle oblige souvent à renoncer à ses illusions et à sa morale." },
            },
            {
              heading: "La ville des contrastes : Hugo et Zola",
              paragraphs: [
                "Dans Les Misérables (1862), Victor Hugo montre le Paris des pauvres. Gavroche, un gamin des rues libre et moqueur, meurt sous les balles en ramassant des cartouches devant une barricade, pendant l'insurrection de juin 1832. Plus tard, Jean Valjean s'échappe en portant Marius blessé à travers les égouts : la ville a aussi un monde souterrain, sombre et dangereux.",
                "Émile Zola, chef de file du naturalisme, consacre plusieurs romans de sa série des Rougon-Macquart à Paris. Dans L'Assommoir (1877), Gervaise, une blanchisseuse, tente de construire une vie digne dans le quartier ouvrier de la Goutte-d'Or, mais la misère et l'alcool la font sombrer. Dans Le Ventre de Paris (1873), il décrit les Halles, l'immense marché de la capitale.",
                "Dans Au Bonheur des Dames (1883), Denise arrive de sa petite ville de Normandie et découvre un grand magasin moderne, inspiré notamment du Bon Marché. Zola le décrit comme une machine géante qui attire les clientes par ses vitrines et ses lumières, et qui ruine peu à peu les petites boutiques du quartier. La ville moderne éblouit, mais elle écrase aussi les plus faibles.",
              ],
              box: { label: "Repère", text: "Balzac, Le Père Goriot (1835) : l'ambition. Hugo, Les Misérables (1862) : la misère et les barricades. Zola, Le Ventre de Paris (1873), L'Assommoir (1877), Au Bonheur des Dames (1883) : le peuple, le commerce, la modernité." },
            },
            {
              heading: "Comment le roman fait voir la ville",
              paragraphs: [
                "Souvent, le romancier fait découvrir la ville à travers le regard d'un personnage qui arrive pour la première fois : le lecteur découvre les lieux en même temps que lui. C'est le point de vue interne. La description suit alors ses déplacements et ses émotions : étonnement, peur, émerveillement.",
                "Pour rendre la ville vivante, l'auteur utilise des champs lexicaux (la foule, le bruit, la lumière, le mouvement, la saleté), il fait appel aux cinq sens (ce que l'on voit, entend, sent) et emploie des énumérations qui donnent une impression de profusion. Il utilise aussi des images : la ville est comparée à une mer, à une machine, à un monstre ou à un ogre qui dévore les êtres. On parle de personnification quand la ville agit comme un être vivant.",
                "Ces procédés servent un sens. Une même ville peut apparaître comme un lieu de liberté, de rencontres et de réussite, ou comme un lieu de solitude, de pauvreté et de danger. Se demander si la ville est « le lieu de tous les possibles », c'est observer comment chaque roman pèse ces deux faces.",
              ],
              box: { label: "Méthode", text: "Pour analyser une ville dans un roman : qui regarde (point de vue) ? Quels champs lexicaux et quelles sensations ? Quelles images (comparaison, métaphore, personnification) ? Quelle impression d'ensemble : chance ou menace ?" },
            },
          ],
          keyPoints: [
            "Au XIXe siècle, la révolution industrielle et l'exode rural font grandir les villes ; Haussmann transforme Paris de 1853 à 1870.",
            "Le roman fait de la ville un personnage : quartiers, foule, bruit, lumières, contrastes entre riches et pauvres.",
            "Balzac, Le Père Goriot (1835) : Rastignac défie Paris ; la ville de l'ambition.",
            "Hugo, Les Misérables (1862) et Zola, L'Assommoir (1877), Au Bonheur des Dames (1883) : misère, modernité, grands magasins.",
            "Procédés : point de vue d'un nouveau venu, champs lexicaux, cinq sens, énumérations, comparaisons et personnifications.",
            "La ville offre des possibles (réussite, liberté, rencontres) mais aussi des dangers (solitude, misère, chute).",
          ],
          example: {
            statement: "Lisez ce passage écrit pour l'exercice, à la manière d'un roman du XIXe siècle : « Quand Lucien descendit du train, la gare l'engloutit. Des centaines de voyageurs se pressaient sous l'immense verrière ; les locomotives crachaient leur fumée noire, les porteurs criaient, les fiacres attendaient en file devant les grilles. Lucien serrait sa petite valise contre lui. Jamais il n'avait vu tant de monde. Paris grondait devant lui comme une bête énorme qui ne dormait jamais. Il sourit pourtant : quelque part, dans cette foule, l'attendait sa chance. » Quelle image de la ville ce passage donne-t-il ? Appuyez-vous sur le point de vue, le vocabulaire et les images.",
            solution: [
              "Le point de vue : la scène est vue à travers les yeux de Lucien, un nouveau venu (« Jamais il n'avait vu tant de monde ») ; c'est un point de vue interne, le lecteur découvre Paris en même temps que lui.",
              "Le vocabulaire : le champ lexical de la foule et du mouvement (« des centaines de voyageurs », « se pressaient », « foule ») et celui du bruit (« criaient », « grondait ») ; l'énumération des locomotives, des porteurs et des fiacres donne une impression d'agitation.",
              "Les images : le verbe « engloutit » et la comparaison « comme une bête énorme qui ne dormait jamais » font de la ville un monstre vivant ; c'est une personnification inquiétante.",
              "Le contraste : la « petite valise » serrée contre lui montre que Lucien se sent faible et seul face à la ville.",
              "La fin : le connecteur « pourtant » et la phrase « l'attendait sa chance » renversent l'impression : la ville fait peur, mais elle promet aussi la réussite.",
              "Réponse : Paris apparaît à la fois comme un monstre bruyant et écrasant, et comme le lieu où tout devient possible pour un jeune ambitieux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lisez cette phrase écrite pour l'exercice : « Sur le boulevard illuminé, les omnibus roulaient lourdement, les marchands de journaux criaient les nouvelles du soir, une odeur de marrons grillés flottait devant les cafés, et la foule pressée coulait sur les trottoirs comme un fleuve. » a) Relevez les mots qui renvoient à la vue, à l'ouïe et à l'odorat. b) Relevez le champ lexical de la ville. c) Identifiez la figure de style de la fin de la phrase.",
              hint: "Pour chaque groupe de mots, demandez-vous avec quel sens on le perçoit. Pour la figure, cherchez un outil de comparaison.",
              solution: [
                "a) La vue : « boulevard illuminé », « la foule pressée coulait sur les trottoirs ». L'ouïe : « roulaient lourdement », « criaient les nouvelles du soir ». L'odorat : « une odeur de marrons grillés ».",
                "b) Le champ lexical de la ville : boulevard, omnibus, marchands de journaux, cafés, foule, trottoirs.",
                "c) « comme un fleuve » est une comparaison (outil : comme) : la foule est comparée à un fleuve, pour montrer qu'elle est immense et qu'elle avance sans s'arrêter.",
                "Résultat : la phrase fait percevoir la ville par trois sens et donne une impression de mouvement continu.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun de ces quatre personnages étudiés dans le cours, expliquez en une ou deux phrases ce que la ville leur offre et ce qu'elle leur coûte : a) Rastignac (Le Père Goriot) ; b) Gavroche (Les Misérables) ; c) Gervaise (L'Assommoir) ; d) Denise (Au Bonheur des Dames).",
              hint: "Relisez les parties du cours sur Balzac, Hugo et Zola. Cherchez pour chacun une chance (liberté, travail, réussite) et un prix à payer (perte des illusions, danger, misère).",
              solution: [
                "a) Rastignac : Paris lui offre la possibilité de s'élever dans la société, mais il y perd ses illusions en découvrant le rôle de l'argent et du mensonge.",
                "b) Gavroche : la rue lui offre une grande liberté, il vit à sa guise ; mais il n'a ni famille ni protection, et il est tué près d'une barricade pendant l'insurrection de 1832.",
                "c) Gervaise : la ville lui offre du travail et l'espoir d'une vie digne ; mais la misère et l'alcool du quartier ouvrier la font sombrer.",
                "d) Denise : le grand magasin lui offre un emploi dans un monde moderne et éblouissant ; mais elle y découvre aussi une machine qui écrase les petits commerçants, comme son oncle.",
                "Résultat : dans les quatre romans, la ville est à la fois une promesse et une menace.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe descriptif de 8 à 10 lignes, au passé : un personnage de votre invention arrive pour la première fois dans une grande ville du XIXe siècle. Contraintes : un point de vue interne ; au moins trois sensations différentes ; une énumération ; une comparaison et une personnification de la ville ; une dernière phrase qui montre si la ville lui apparaît comme une chance ou comme une menace.",
              hint: "Choisissez d'abord le lieu d'arrivée (une gare, un pont, un boulevard) et l'émotion dominante du personnage. Employez l'imparfait pour décrire et le passé simple pour les actions.",
              solution: [
                "Étape 1, le choix : Marthe, jeune paysanne, arrive à Paris par le pont Neuf, un matin d'hiver ; émotion dominante : l'émerveillement mêlé de crainte.",
                "Étape 2, un modèle possible : « Marthe s'arrêta au milieu du pont. Devant elle, la Seine roulait des eaux grises sous un ciel bas. Sur les quais, les voitures, les charrettes, les marchands ambulants et les passants se croisaient sans jamais se heurter. Le fracas des roues sur les pavés lui emplissait les oreilles ; une odeur de pain chaud et de fumée montait des ruelles. Les maisons hautes et serrées ressemblaient à une armée de géants qui la regardaient passer. La ville respirait, s'agitait, l'appelait. Marthe sentit son cœur battre plus fort : ici, peut-être, elle cesserait enfin d'être pauvre. »",
                "Étape 3, la vérification : point de vue interne (ce que voit et ressent Marthe) ; trois sensations (la vue des eaux grises, l'ouïe avec le fracas, l'odorat avec le pain et la fumée) ; une énumération (les voitures, les charrettes, les marchands, les passants) ; une comparaison (« ressemblaient à une armée de géants ») ; une personnification (« La ville respirait, s'agitait, l'appelait ») ; une dernière phrase qui présente la ville comme une chance.",
                "Résultat : un paragraphe cohérent, au passé, qui respecte toutes les contraintes et donne une image de la ville.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque roman au lieu de la ville qu'il fait découvrir.",
            pairs: [
              { left: "Le Père Goriot (Balzac)", right: "Une pension modeste et sale, la pension Vauquer" },
              { left: "Les Misérables (Hugo)", right: "Les barricades et les égouts de Paris" },
              { left: "L'Assommoir (Zola)", right: "Le quartier ouvrier de la Goutte-d'Or" },
              { left: "Le Ventre de Paris (Zola)", right: "Les Halles, le grand marché de la capitale" },
              { left: "Au Bonheur des Dames (Zola)", right: "Un grand magasin moderne" },
            ],
          },
          quiz: [
            { q: "Quel personnage lance à Paris : « À nous deux maintenant ! » ?", options: ["Jean Valjean", "Georges Duroy", "Rastignac", "Gavroche"], answer: 2, why: "C'est Rastignac, à la fin du Père Goriot de Balzac : il défie la ville qu'il veut conquérir." },
            { q: "Comment appelle-t-on le départ des paysans vers les villes au XIXe siècle ?", options: ["L'exode rural", "L'urbanisme", "Le naturalisme", "La révolution"], answer: 0, why: "L'exode rural est le départ des habitants des campagnes vers les villes, où ils cherchent du travail." },
            { q: "Qui transforme Paris sous Napoléon III ?", options: ["Le préfet Haussmann", "L'écrivain Émile Zola", "Le poète Victor Hugo", "Le roi Louis-Philippe"], answer: 0, why: "Le préfet Haussmann dirige de 1853 à 1870 les grands travaux : boulevards, immeubles, égouts, parcs." },
            { q: "Dans « la ville respirait et dévorait les passants », la figure de style est :", options: ["une comparaison avec « comme »", "une énumération", "une antithèse", "une personnification"], answer: 3, why: "La ville respire et dévore comme un être vivant : elle est personnifiée." },
            { q: "Pourquoi un romancier fait-il souvent découvrir la ville par un nouveau venu ?", options: ["Pour éviter d'avoir à la décrire en détail", "Le lecteur la découvre avec lui", "Pour pouvoir écrire le récit au présent"], answer: 1, why: "Le point de vue interne d'un personnage qui arrive permet au lecteur de partager son étonnement et ses émotions." },
          ],
          trap: "Résumer la ville d'un roman à un simple décor : dans le roman du XIXe siècle, elle agit sur les personnages (elle les fait réussir ou les écrase), et il faut toujours dire quelle image elle donne et par quels procédés.",
          method: "Pour réviser, faites une fiche à quatre lignes (Balzac, Hugo, Zola, Maupassant) avec pour chacun : un titre, une date, un personnage, un lieu de la ville et un mot qui résume l'image de la ville (ambition, misère, modernité, réussite).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ville-poesie',
          title: 'La ville en poésie, de Baudelaire à aujourd\'hui',
          minutes: 30,
          objectives: [
            "Situer Baudelaire comme le poète de la ville moderne et identifier les thèmes de ses « Tableaux parisiens ».",
            "Repérer l'évolution des formes poétiques qui disent la ville : sonnet, poème en prose, vers libre, slam.",
            "Analyser les procédés par lesquels un poème fait voir et ressentir la ville.",
            "Interpréter la ville poétique comme lieu de rencontres, de solitude et de transformations.",
          ],
          course: [
            {
              heading: "Baudelaire, poète de la ville moderne",
              paragraphs: [
                "Charles Baudelaire (1821-1867) est le premier grand poète à faire de la ville moderne un sujet de poésie. Dans la deuxième édition des Fleurs du mal (1861), il ajoute une section intitulée « Tableaux parisiens ». Il s'y promène dans Paris comme un flâneur, un promeneur qui observe la foule, les passants, les vieillards, les pauvres, et qui trouve de la beauté là où l'on ne la cherchait pas.",
                "Dans le sonnet « À une passante », le poète est dans une rue bruyante ; le premier vers dit que « la rue assourdissante » hurlait autour de lui. Une femme en deuil passe, leurs regards se croisent, puis elle disparaît dans la foule. Le poème dit la rencontre amoureuse rendue possible par la ville, mais aussi la perte : dans la foule, on se croise et on ne se revoit jamais.",
                "Dans « Le Cygne », Baudelaire regarde Paris transformé par les travaux : les vieux quartiers disparaissent, et le poète constate avec mélancolie que la forme d'une ville change plus vite que le cœur des hommes. Plus tard, dans Le Spleen de Paris (publié en 1869, après sa mort), il invente des petits poèmes en prose, une forme plus souple, adaptée selon lui à la vie des grandes villes.",
              ],
              box: { label: "Repère", text: "Baudelaire, Les Fleurs du mal (1857, puis 1861 avec la section « Tableaux parisiens ») ; Le Spleen de Paris, petits poèmes en prose (1869). Le flâneur : celui qui se promène et observe la ville." },
            },
            {
              heading: "De la ville tentaculaire à la ville moderne",
              paragraphs: [
                "À la fin du XIXe siècle, le poète belge Émile Verhaeren publie Les Villes tentaculaires (1895). Le titre est une métaphore : la ville est comme une pieuvre dont les tentacules s'étendent sur la campagne et attirent les paysans. Elle fascine par son énergie, ses usines et ses lumières, mais elle épuise et dévore.",
                "En 1913, Guillaume Apollinaire ouvre son recueil Alcools par le poème « Zone ». Il célèbre le Paris moderne : la tour Eiffel, les automobiles, les affiches et les prospectus, où il voit une nouvelle forme de poésie. Le poème est écrit en vers libres, et tout le recueil est sans ponctuation : la forme elle-même devient moderne, comme le sujet.",
                "Le vers libre ne suit pas de mètre fixe (le nombre de syllabes varie d'un vers à l'autre) et n'oblige pas à rimer. Il permet de suivre le rythme de la marche, de la pensée ou de la foule. Le poème en prose, lui, abandonne le vers : le texte est en paragraphes, mais il reste poétique par ses images, ses sonorités et son rythme.",
              ],
              box: { label: "Définition", text: "Vers libre : vers sans nombre fixe de syllabes et sans rime obligatoire. Poème en prose : poème écrit en paragraphes, sans vers, mais poétique par ses images et son rythme. Métaphore : image qui rapproche deux réalités sans outil de comparaison." },
            },
            {
              heading: "La ville au XXe et au XXIe siècle",
              paragraphs: [
                "Au XXe siècle, les poètes continuent d'écrire la ville. Dans « Barbara » (recueil Paroles, 1946), Jacques Prévert se souvient d'une rencontre amoureuse sous la pluie, dans les rues de Brest, puis évoque la ville détruite par les bombardements de la guerre : la ville garde la mémoire du bonheur et du malheur. Jacques Réda, dans Les Ruines de Paris (1977), écrit des poèmes en prose nés de ses longues promenades dans la capitale.",
                "Aujourd'hui, la ville est aussi dite à voix haute. Le slam, né à Chicago dans les années 1980, est une poésie orale, souvent écrite pour être dite sur scène, sans musique ou presque. En France, Grand Corps Malade rend hommage à sa ville dans « Saint-Denis » (2006) : il fait le portrait d'une ville populaire, mélangée, bruyante et attachante.",
                "Les mêmes questions traversent ces poèmes : la ville est-elle le lieu des rencontres ou de la solitude dans la foule ? de la beauté ou de la laideur ? du progrès ou de la perte des souvenirs ? Chaque poète propose sa réponse, et souvent il montre les deux faces à la fois.",
              ],
              box: { label: "À retenir", text: "En poésie, la ville apparaît comme un lieu de rencontres, de modernité et d'énergie, mais aussi de solitude, de mélancolie et de destruction. Les formes changent avec elle : sonnet, poème en prose, vers libre, slam." },
            },
            {
              heading: "Analyser un poème sur la ville",
              paragraphs: [
                "Commencez par la forme : vers réguliers ou libres, strophes, rimes, ou prose. Puis cherchez les champs lexicaux de la ville (rues, foule, bruit, lumière, béton, métro) et les sensations. Repérez les figures de style : la personnification (la rue qui hurle), la métaphore (la ville pieuvre), l'énumération (qui imite la profusion de la ville), l'antithèse (la foule et la solitude).",
                "Observez enfin la place du poète : il est souvent présent (« je ») et dit ce qu'il ressent. Le poème ne décrit pas la ville comme un guide touristique : il dit l'émotion qu'elle fait naître. Votre analyse doit donc toujours relier un procédé à une impression : « l'énumération donne l'impression d'une ville débordante d'activité ».",
              ],
              box: { label: "Méthode", text: "Forme (vers ou prose) ; champs lexicaux et sensations ; figures de style ; présence et émotions du poète ; impression d'ensemble. Toujours : un procédé, une citation courte, un effet." },
            },
          ],
          keyPoints: [
            "Baudelaire, poète de la ville moderne : « Tableaux parisiens » (Les Fleurs du mal, 1861), Le Spleen de Paris (1869).",
            "« À une passante » : une rencontre dans la foule, aussitôt perdue ; « Le Cygne » : la mélancolie devant Paris transformé.",
            "Verhaeren, Les Villes tentaculaires (1895) : la ville pieuvre ; Apollinaire, « Zone » (Alcools, 1913) : le Paris moderne en vers libres.",
            "Prévert, « Barbara » (1946) ; Réda, Les Ruines de Paris (1977) ; le slam de Grand Corps Malade, « Saint-Denis » (2006).",
            "Formes : sonnet, poème en prose, vers libre, slam.",
            "La ville poétique : rencontres et solitude, modernité et mélancolie, beauté et laideur.",
          ],
          example: {
            statement: "Lisez ce court poème en vers libres écrit pour l'exercice : « Six heures, la ville ouvre un œil / Les rideaux de fer grincent, les bus soupirent, les cafés s'allument / Je marche parmi mille visages / Et personne ne me voit / Pourtant j'aime cette foule pressée / Qui me porte comme une vague ». Montrez que ce poème présente la ville à la fois comme un lieu de solitude et comme un lieu aimé.",
            solution: [
              "La forme : des vers de longueurs différentes, sans rimes régulières : ce sont des vers libres, qui suivent le rythme de la marche du poète.",
              "La personnification : « la ville ouvre un œil », « les bus soupirent » : la ville se réveille comme un être vivant.",
              "L'énumération du deuxième vers (les rideaux de fer, les bus, les cafés) montre l'agitation du matin ; les sons (« grincent », « soupirent ») font entendre la ville.",
              "La solitude : l'antithèse entre « mille visages » et « personne ne me voit » montre que l'on peut être seul au milieu de la foule.",
              "L'attachement : le connecteur « Pourtant » annonce un retournement ; le poète dit « j'aime » et la comparaison « comme une vague » fait de la foule une force qui le porte, et non qui l'écrase.",
              "Réponse : par l'antithèse, le poème montre la solitude dans la foule ; par le retournement final et la comparaison, il montre que le poète aime pourtant cette ville vivante.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque œuvre à sa forme et à sa date : a) Le Spleen de Paris de Baudelaire ; b) « À une passante » de Baudelaire ; c) « Zone » d'Apollinaire ; d) « Saint-Denis » de Grand Corps Malade. Formes et dates proposées, dans le désordre : slam (2006) ; sonnet (Les Fleurs du mal, 1861) ; poèmes en prose (1869) ; vers libres (Alcools, 1913).",
              hint: "Retrouvez d'abord les deux œuvres de Baudelaire : l'une est en vers réguliers, l'autre ne contient pas de vers du tout.",
              solution: [
                "a) Le Spleen de Paris : des poèmes en prose, publiés en 1869, après la mort de Baudelaire.",
                "b) « À une passante » : un sonnet, dans la section « Tableaux parisiens » des Fleurs du mal (1861).",
                "c) « Zone » : des vers libres, au début du recueil Alcools (1913).",
                "d) « Saint-Denis » : un slam, en 2006.",
                "Résultat : a) prose, 1869 ; b) sonnet, 1861 ; c) vers libres, 1913 ; d) slam, 2006.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ces trois vers écrits pour l'exercice : « Les tours de verre mangent le ciel / Le métro avale et recrache les hommes / Et dans mon quartier, la vieille boulangerie a fermé ». a) Relevez deux personnifications et expliquez leur effet. b) Quel sentiment le troisième vers exprime-t-il ? Rapprochez-le d'un poème de Baudelaire étudié dans le cours.",
              hint: "Cherchez les verbes qui conviennent normalement à un être vivant. Pour b), pensez à un poème où Baudelaire regrette les vieux quartiers qui disparaissent.",
              solution: [
                "a) « Les tours de verre mangent le ciel » : les tours sont comme des êtres voraces, elles cachent le ciel ; « Le métro avale et recrache les hommes » : le métro devient un monstre qui engloutit les voyageurs puis les rejette.",
                "Effet : ces personnifications donnent une image inquiétante de la ville moderne, qui écrase les humains.",
                "b) Le troisième vers exprime la nostalgie, la mélancolie : un lieu familier et ancien disparaît.",
                "Rapprochement : dans « Le Cygne », Baudelaire regrette lui aussi le vieux Paris détruit par les travaux et constate que la ville change plus vite que le cœur des hommes.",
                "Résultat : deux personnifications inquiétantes, puis un vers de mélancolie qui fait écho au « Cygne ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez un court poème en vers libres de 6 à 8 vers sur un lieu de votre ville ou de votre village (une gare, un marché, une rue, un arrêt de bus). Contraintes : une personnification ; une énumération ; une antithèse ; au moins deux sensations ; un dernier vers qui dit ce que ce lieu représente pour vous. Puis expliquez en deux phrases l'effet d'un de vos procédés.",
              hint: "Notez d'abord au brouillon tout ce que l'on voit, entend et sent dans ce lieu à une heure précise. Choisissez ensuite le verbe qui le fera vivre comme un être.",
              solution: [
                "Étape 1, le lieu et le moment : le marché du samedi matin ; sensations notées : les cris des marchands, l'odeur des fraises, les couleurs des étals.",
                "Étape 2, un modèle possible : « Le samedi la place se réveille en chantant / Fraises, pain chaud, fleurs, poissons d'argent / Les marchands lancent leurs prix comme des balles / Tout le monde parle et personne ne s'écoute / Moi je marche lentement dans ce vacarme joyeux / Et la place, chaque semaine, me rend mon enfance ».",
                "Étape 3, la vérification : personnification (« la place se réveille en chantant », « la place me rend mon enfance ») ; énumération (« Fraises, pain chaud, fleurs, poissons d'argent ») ; antithèse (« Tout le monde parle et personne ne s'écoute ») ; sensations : l'ouïe (« vacarme », « chantant ») et l'odorat ou le goût (« pain chaud », « fraises ») ; dernier vers qui dit ce que le lieu représente.",
                "Étape 4, l'explication : « L'énumération du deuxième vers, sans verbe, imite l'abondance des étals : le lecteur a l'impression de passer d'un stand à l'autre. Elle donne une image joyeuse et généreuse du marché. »",
                "Résultat : un poème en vers libres qui respecte les contraintes, suivi d'une explication qui relie un procédé à son effet.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la ville en poésie.",
            statements: [
              { text: "Baudelaire a ajouté la section « Tableaux parisiens » aux Fleurs du mal en 1861.", true: true, why: "Elle apparaît dans la deuxième édition du recueil, en 1861." },
              { text: "Un poème en prose est un poème mal écrit, qui a oublié ses rimes.", true: false, why: "C'est une forme choisie : un texte en paragraphes, poétique par ses images, ses sonorités et son rythme." },
              { text: "Le vers libre doit compter douze syllabes.", true: false, why: "Le vers libre n'a pas de nombre fixe de syllabes ; c'est l'alexandrin qui en compte douze." },
              { text: "Dans « À une passante », le poète croise une femme dans une rue bruyante, puis la perd de vue.", true: true, why: "Le sonnet raconte un échange de regards dans la foule, aussitôt suivi de la disparition de la passante." },
              { text: "Dans Les Villes tentaculaires, Verhaeren compare la ville à un jardin paisible.", true: false, why: "Le titre fait de la ville une pieuvre dont les tentacules s'étendent sur la campagne." },
              { text: "Le recueil Alcools d'Apollinaire ne contient pas de ponctuation.", true: true, why: "Apollinaire a supprimé la ponctuation de tout le recueil, paru en 1913." },
              { text: "Le slam est une poésie faite pour être lue en silence.", true: false, why: "Le slam est une poésie orale, écrite pour être dite à voix haute, souvent sur scène." },
            ],
          },
          quiz: [
            { q: "Comment appelle-t-on le promeneur qui observe la ville, comme Baudelaire ?", options: ["Le passant", "Le flâneur", "Le touriste", "Le citadin"], answer: 1, why: "Le flâneur se promène sans but précis et observe la foule et les rues : c'est la figure du poète de la ville chez Baudelaire." },
            { q: "« Zone », le poème du Paris moderne, ouvre le recueil :", options: ["Paroles", "Les Fleurs du mal", "Alcools", "Les Villes tentaculaires"], answer: 2, why: "« Zone » est le premier poème d'Alcools, publié par Apollinaire en 1913." },
            { q: "Un vers libre est un vers :", options: ["sans mètre fixe ni rime obligatoire", "de douze syllabes, comme l'alexandrin", "écrit sans aucune image poétique", "qui rime toujours avec le vers suivant"], answer: 0, why: "Le vers libre varie en longueur et ne suit pas de règle fixe de rimes." },
            { q: "Dans « Je marche parmi mille visages et personne ne me voit », on reconnaît :", options: ["une comparaison", "une rime", "une allitération", "une antithèse"], answer: 3, why: "Les mots « mille » et « personne » s'opposent : l'antithèse montre la solitude au milieu de la foule." },
            { q: "Dans « Barbara », Prévert évoque la ville de :", options: ["Paris", "Saint-Denis", "Brest", "Bruxelles"], answer: 2, why: "Le poème évoque Brest, une rencontre sous la pluie puis la ville détruite par les bombardements." },
          ],
          trap: "Croire qu'un poème sans rimes ni vers réguliers n'est pas un vrai poème : le vers libre et le poème en prose sont des formes poétiques à part entière, qui restent poétiques par leurs images, leurs sonorités et leur rythme.",
          method: "Pour analyser un poème sur la ville, faites un tableau à trois colonnes : le procédé (personnification, énumération, antithèse...), la citation courte, l'effet produit (la ville vivante, débordante, écrasante...). Chaque ligne du tableau devient une phrase de votre analyse.",
        },
      ],
    },
    /* ================================================================== */
    /* ÉCRIRE ET S'EXPRIMER À L'ORAL                                        */
    /* ================================================================== */
    {
      id: 'ecrire-oral',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'rediger-recit',
          title: 'Rédiger un récit cohérent et enrichi',
          minutes: 35,
          objectives: [
            "Construire un récit cohérent en suivant les étapes du schéma narratif et en respectant la consigne.",
            "Choisir un narrateur et un système de temps, et s'y tenir du début à la fin.",
            "Assurer la cohérence du texte grâce aux connecteurs, aux reprises et aux paragraphes.",
            "Enrichir un récit par des expansions du nom, des verbes précis, des sensations et un dialogue correctement ponctué.",
          ],
          course: [
            {
              heading: "Construire une histoire qui tient debout",
              paragraphs: [
                "Un récit cohérent est un récit que le lecteur suit sans se perdre : les événements s'enchaînent logiquement, les personnages restent les mêmes (on ne change pas de prénom ni de caractère en cours de route), et la fin répond au problème posé au début. Pour y parvenir, on s'appuie sur le schéma narratif, que vous connaissez depuis la 6e.",
                "Le schéma narratif compte cinq étapes. La situation initiale présente les personnages, le lieu et l'époque, dans un état stable. L'élément perturbateur vient rompre cet équilibre. Les péripéties sont les actions et les obstacles qui suivent. L'élément de résolution met fin au problème. La situation finale présente le nouvel état, heureux ou malheureux.",
                "Avant d'écrire, relisez la consigne et soulignez ce qu'elle impose : le personnage, le narrateur (« je » ou « il »), le temps, le genre (récit réaliste, fantastique, d'aventure), la longueur. Un très bon texte qui ne respecte pas la consigne reste un texte hors sujet.",
              ],
              box: { label: "Repère", text: "Le schéma narratif : situation initiale, élément perturbateur, péripéties, élément de résolution, situation finale. Chaque étape commence en général un nouveau paragraphe." },
            },
            {
              heading: "Choisir un narrateur et des temps, et s'y tenir",
              paragraphs: [
                "Le narrateur peut être un personnage de l'histoire qui dit « je » (récit à la première personne), ou une voix extérieure qui raconte à la troisième personne (« il », « elle »). Une fois ce choix fait, il ne faut plus en changer : un récit commencé à la troisième personne qui passe soudain au « je » perd le lecteur.",
                "Le récit au passé repose sur un système de temps. Le passé simple exprime les actions de premier plan, qui font avancer l'histoire (« Elle ouvrit la porte »). L'imparfait exprime l'arrière-plan : les descriptions, les habitudes, les actions qui durent (« Il pleuvait, la rue était vide »). Le plus-que-parfait exprime une action antérieure (« Elle avait oublié ses clés »).",
                "On peut aussi raconter au présent de narration, qui rend les faits plus vivants. Mais on ne passe pas du passé simple au présent au milieu d'un paragraphe sans raison. En revanche, les paroles rapportées dans un dialogue, ou une vérité générale, peuvent être au présent dans un récit au passé.",
              ],
              box: { label: "Règle", text: "Récit au passé : passé simple pour les actions de premier plan, imparfait pour l'arrière-plan (descriptions, habitudes), plus-que-parfait pour ce qui s'est passé avant. Ne changez ni de narrateur ni de système de temps en cours de route." },
            },
            {
              heading: "Relier les phrases et les paragraphes",
              paragraphs: [
                "Les connecteurs temporels guident le lecteur dans le temps : d'abord, puis, ensuite, soudain, tout à coup, pendant ce temps, le lendemain, quelques jours plus tard, enfin. Ils marquent aussi les étapes du schéma narratif : « soudain » ou « un jour » annoncent souvent l'élément perturbateur.",
                "Pour éviter les répétitions, on utilise des reprises. Les substituts pronominaux remplacent un nom par un pronom (il, elle, le, lui, celui-ci). Les substituts nominaux le remplacent par un autre groupe nominal : Pirate peut devenir « le chat », « l'animal », « le petit félin », « le fugueur ». Ces reprises enrichissent aussi le texte, car elles apportent des informations sur le personnage.",
                "Enfin, le texte est découpé en paragraphes. On va à la ligne, avec un retrait (l'alinéa), à chaque changement d'étape, de lieu, de moment ou de personnage. Un récit écrit en un seul bloc est difficile à lire, même s'il est bien écrit.",
              ],
              box: { label: "À retenir", text: "Connecteurs temporels pour la chronologie ; substituts pronominaux et nominaux pour éviter les répétitions ; un nouveau paragraphe à chaque nouvelle étape, nouveau lieu ou nouveau moment." },
            },
            {
              heading: "Enrichir le récit",
              paragraphs: [
                "Enrichir, c'est rendre le récit précis et vivant. On développe les groupes nominaux par des expansions du nom : un adjectif épithète (« une vieille maison »), un complément du nom (« une maison de pierre »), une proposition subordonnée relative (« une maison qui semblait abandonnée »). On remplace les verbes trop vagues (faire, aller, dire, mettre) par des verbes précis : marcher, courir, se faufiler, chuchoter, s'écrier.",
                "On fait appel aux cinq sens (ce que le personnage voit, entend, sent, touche, goûte), aux images (comparaisons et métaphores) et aux pensées des personnages : ce qu'ils ressentent rend l'histoire plus touchante. Attention cependant à ne pas tout charger : trois adjectifs pour chaque nom alourdissent le texte.",
                "Le dialogue rend la scène vivante. Il s'ouvre et se ferme par des guillemets ; à chaque changement de personnage qui parle, on va à la ligne et on place un tiret. Les verbes de parole variés (murmurer, répliquer, s'exclamer, demander) indiquent le ton ; placés dans une incise, ils sont inversés : « Viens ici, murmura-t-elle. »",
              ],
              box: { label: "Règle", text: "Dialogue : guillemets à l'ouverture et à la fermeture ; retour à la ligne et tiret à chaque changement de locuteur ; dans l'incise, le sujet est inversé (« dit-il », « répondit Lina »)." },
            },
            {
              heading: "Relire avec une grille",
              paragraphs: [
                "Gardez toujours dix minutes pour relire, en plusieurs passages, chacun avec une seule question. Premier passage, la consigne : est-elle respectée ? Deuxième passage, la cohérence : même narrateur, mêmes temps, des connecteurs et des paragraphes. Troisième passage, la langue : accords sujet-verbe, accords dans le groupe nominal, participes passés, homophones (a ou à, et ou est, ces ou ses).",
                "Une relecture efficace se fait lentement, en suivant les mots du doigt ou du crayon, et en partant parfois de la fin pour ne plus se laisser porter par l'histoire. Chaque correction faite à ce moment-là, c'est une erreur que le lecteur ne verra pas.",
              ],
            },
          ],
          keyPoints: [
            "Schéma narratif : situation initiale, élément perturbateur, péripéties, élément de résolution, situation finale.",
            "Un seul narrateur et un seul système de temps : passé simple (premier plan), imparfait (arrière-plan), plus-que-parfait (antériorité).",
            "Connecteurs temporels pour la chronologie ; substituts pronominaux et nominaux contre les répétitions.",
            "Un nouveau paragraphe à chaque nouvelle étape, nouveau lieu ou nouveau moment.",
            "Enrichir : expansions du nom (adjectif, complément du nom, relative), verbes précis, cinq sens, images, sentiments.",
            "Dialogue : guillemets, tiret à chaque changement de locuteur, verbes de parole variés, incise inversée.",
          ],
          example: {
            statement: "Enrichissez ce récit trop pauvre, sans changer l'histoire : « Un homme entra dans la boutique. Il regarda les objets. Il prit une boîte. Le vendeur dit quelque chose. Il partit. » Utilisez au moins deux expansions du nom, des verbes précis, une sensation, une pensée du personnage et une réplique de dialogue.",
            solution: [
              "Étape 1, repérer les faiblesses : des noms sans expansion (un homme, la boutique, les objets), des verbes vagues (regarda, prit, dit, partit), la répétition de « il », aucune sensation ni émotion.",
              "Étape 2, enrichir les groupes nominaux : « un homme au long manteau gris », « la petite boutique d'antiquités », « les objets poussiéreux qui encombraient les étagères », « une boîte à musique en bois ».",
              "Étape 3, préciser les verbes et ajouter une sensation : « poussa la porte », « examina », « saisit avec précaution » ; l'odeur de vieux bois et de cire.",
              "Étape 4, ajouter une pensée et une réplique : l'homme se souvient d'une boîte identique chez sa grand-mère ; le vendeur parle, avec un verbe de parole précis et une incise.",
              "Étape 5, le texte enrichi : « Un homme au long manteau gris poussa la porte de la petite boutique d'antiquités. Une odeur de vieux bois et de cire flottait dans l'air. Lentement, il examina les objets poussiéreux qui encombraient les étagères. Soudain, il saisit avec précaution une boîte à musique en bois : sa grand-mère possédait la même, il en était sûr. “C'est une pièce rare, monsieur”, murmura le vendeur. L'inconnu paya sans discuter et disparut dans la rue, la boîte serrée contre son cœur. »",
              "Résultat : la même histoire, mais avec des expansions du nom (dont une relative), des verbes précis, une sensation (l'odeur), une pensée, une réplique et des reprises variées (il, l'inconnu).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Réécrivez ce texte en supprimant les répétitions du mot « chat » grâce à des substituts pronominaux et nominaux (au moins deux de chaque sorte) : « Le chat de Léo s'appelait Pirate. Le chat dormait toute la journée sur le radiateur. Le soir, le chat sortait dans le jardin. Un jour, le chat ne rentra pas. Léo chercha le chat partout. »",
              hint: "Un substitut pronominal est un pronom (il, le, lui) ; un substitut nominal est un autre groupe nominal qui désigne le même animal (l'animal, le matou...). Attention à la place du pronom complément : il se met devant le verbe.",
              solution: [
                "Phrase 2 : « Il dormait toute la journée sur le radiateur. » (substitut pronominal : il)",
                "Phrase 3 : « Le soir, le matou sortait dans le jardin. » (substitut nominal : le matou)",
                "Phrase 4 : « Un jour, l'animal ne rentra pas. » (substitut nominal : l'animal)",
                "Phrase 5 : « Léo le chercha partout. » (substitut pronominal : le, placé devant le verbe)",
                "Résultat : « Le chat de Léo s'appelait Pirate. Il dormait toute la journée sur le radiateur. Le soir, le matou sortait dans le jardin. Un jour, l'animal ne rentra pas. Léo le chercha partout. »",
              ],
            },
            {
              level: 2,
              statement: "Ce récit mélange le passé et le présent sans raison. Réécrivez-le entièrement au passé (passé simple et imparfait), puis justifiez le temps de chaque verbe corrigé : « Ce matin-là, Inès partit tôt. Le brouillard couvre la route et on ne voyait rien. Soudain, elle entend un bruit étrange derrière la haie. Elle s'arrêta, le cœur battant. Un chevreuil sort du fourré et traversa le chemin. »",
              hint: "Repérez d'abord les verbes au présent. Demandez-vous ensuite pour chacun : est-ce une action brève qui fait avancer l'histoire (passé simple) ou une description, un décor (imparfait) ?",
              solution: [
                "Les verbes au présent sont : couvre, entend, sort.",
                "« couvre » devient « couvrait » : c'est la description du décor, l'arrière-plan, donc l'imparfait.",
                "« entend » devient « entendit » : c'est une action brève et soudaine (« Soudain »), au premier plan, donc le passé simple.",
                "« sort » devient « sortit » : c'est une action de premier plan, comme « traversa » qui la suit, donc le passé simple.",
                "Résultat : « Ce matin-là, Inès partit tôt. Le brouillard couvrait la route et on ne voyait rien. Soudain, elle entendit un bruit étrange derrière la haie. Elle s'arrêta, le cœur battant. Un chevreuil sortit du fourré et traversa le chemin. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici la situation initiale d'un récit : « Dans un petit port de Bretagne, Malo, douze ans, aidait chaque été son grand-père à réparer les filets sur le quai. » Rédigez la suite (12 à 15 lignes) : un élément perturbateur et au moins une péripétie. Contraintes : troisième personne ; passé simple et imparfait ; au moins deux connecteurs temporels ; deux substituts différents pour désigner Malo ; une proposition subordonnée relative ; une comparaison ; une sensation ; un court échange de dialogue correctement ponctué.",
              hint: "Trouvez d'abord votre élément perturbateur en une phrase (un objet découvert, une tempête, une disparition). Écrivez ensuite un paragraphe par étape, puis relisez avec la liste des contraintes en cochant chacune.",
              solution: [
                "Étape 1, l'idée : un matin, Malo découvre une bouteille contenant un message dans les filets (élément perturbateur) ; il part avec son grand-père vers l'île d'où le message semble venir (péripétie).",
                "Étape 2, un modèle possible, premier paragraphe : « Un matin de juillet, alors que le soleil se levait à peine, le garçon remarqua un éclat vert entre les mailles. Il tira doucement le filet : une vieille bouteille, couverte d'algues, y était prise. À l'intérieur, on devinait un papier roulé qui avait jauni. Le cœur de Malo se mit à battre comme un tambour. »",
                "Étape 3, la suite : « Il courut vers son grand-père, qui fumait sa pipe près du bateau. “Grand-père, regarde ce que j'ai trouvé !” s'écria-t-il. Le vieil homme déplia le papier avec ses gros doigts tachés de goudron. “C'est une carte de l'île aux Moines, murmura-t-il. Et cette croix, je la connais...” Une heure plus tard, le jeune pêcheur et son grand-père glissaient sur l'eau calme ; le vent salé leur piquait le visage. »",
                "Étape 4, la vérification : troisième personne ; passé simple (remarqua, tira, courut, s'écria) et imparfait (se levait, fumait, glissaient) ; connecteurs temporels (« Un matin de juillet », « Une heure plus tard ») ; substituts de Malo (« le garçon », « le jeune pêcheur ») ; relatives (« qui avait jauni », « qui fumait sa pipe ») ; comparaison (« comme un tambour ») ; sensation (le vent salé qui pique le visage) ; dialogue entre guillemets avec incises inversées (« s'écria-t-il », « murmura-t-il »).",
                "Résultat : une suite cohérente avec la situation initiale (même lieu, mêmes personnages), qui respecte toutes les contraintes et donne envie de lire la suite.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les phrases de ce récit dans l'ordre du schéma narratif, de la situation initiale à la situation finale.",
            items: [
              "Chaque matin, Nora ouvrait la boulangerie de sa tante avec une grande clé de fer.",
              "Un lundi, en arrivant devant la porte, elle s'aperçut que la clé n'était plus dans sa poche.",
              "Affolée, elle refit d'abord tout le chemin depuis chez elle, les yeux fixés sur le trottoir.",
              "Elle interrogea ensuite les voisins, mais personne n'avait rien vu.",
              "Enfin, un petit garçon accourut : il avait trouvé la clé dans le caniveau, au coin de la rue.",
              "Depuis ce jour, Nora porte la clé accrochée à une chaîne autour de son cou.",
            ],
          },
          quiz: [
            { q: "Dans un récit au passé, quel temps exprime les actions de premier plan ?", options: ["L'imparfait", "Le plus-que-parfait", "Le présent", "Le passé simple"], answer: 3, why: "Le passé simple exprime les actions brèves qui font avancer l'histoire ; l'imparfait sert à l'arrière-plan." },
            { q: "« L'animal » pour désigner le chat Pirate est :", options: ["un substitut pronominal", "un substitut nominal", "un connecteur temporel"], answer: 1, why: "C'est un groupe nominal qui reprend le nom « chat » : un substitut nominal." },
            { q: "Quelle étape du schéma narratif rompt l'équilibre du début ?", options: ["L'élément perturbateur", "La situation finale", "L'élément de résolution", "Les péripéties"], answer: 0, why: "L'élément perturbateur vient troubler la situation initiale et lance l'histoire." },
            { q: "Quelle incise est correctement construite ?", options: ["« Viens, elle murmura. »", "« Viens, murmura-t-elle. »", "« Viens, elle a murmuré-t-elle. »"], answer: 1, why: "Dans l'incise, le sujet est inversé et placé après le verbe de parole : murmura-t-elle." },
            { q: "Dans « une maison qui semblait abandonnée », l'expansion du nom est :", options: ["un adjectif épithète", "un groupe nominal apposé au nom", "une subordonnée relative", "un attribut du sujet"], answer: 2, why: "« qui semblait abandonnée » est une proposition subordonnée relative introduite par le pronom relatif qui." },
          ],
          trap: "Changer de temps sans raison au milieu du récit, par exemple passer du passé simple au présent (« Elle s'arrêta. Un chevreuil sort du fourré »), ou alterner « je » et « il » : le lecteur perd le fil et le texte devient incohérent.",
          method: "Relisez votre récit trois fois, avec une seule question à chaque fois : la consigne est-elle respectée ? Les temps et le narrateur restent-ils les mêmes ? Les accords sont-ils justes ? Pour les temps, soulignez tous les verbes conjugués : un présent isolé dans un récit au passé saute alors aux yeux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'paragraphe-argumente',
          title: 'Construire un paragraphe argumenté',
          minutes: 30,
          objectives: [
            "Distinguer le thème, la thèse, l'argument et l'exemple.",
            "Construire un paragraphe argumenté : idée directrice, explication, exemple, conclusion partielle.",
            "Employer des connecteurs logiques adaptés pour organiser le raisonnement.",
            "Choisir des exemples précis et vérifiables, et prendre en compte un point de vue opposé.",
          ],
          course: [
            {
              heading: "Argumenter : thème, thèse, argument, exemple",
              paragraphs: [
                "Argumenter, c'est chercher à convaincre quelqu'un en lui donnant des raisons. Le thème est le sujet dont on parle (par exemple : la lecture). La thèse est l'opinion que l'on défend sur ce thème (par exemple : lire des romans est utile aux adolescents). Une thèse peut se discuter : on pourrait soutenir l'avis contraire.",
                "L'argument est une raison qui appuie la thèse : « les romans font découvrir d'autres vies que la nôtre ». L'exemple est un cas précis qui illustre l'argument et le rend concret : un livre, un personnage, un événement, une expérience. L'exemple ne suffit pas seul : il montre, mais c'est l'argument qui explique.",
                "Pour ne pas les confondre, posez-vous une question. Si la phrase répond à « pourquoi ? », c'est un argument. Si elle répond à « par exemple ? », c'est un exemple.",
              ],
              box: { label: "Définition", text: "Thème : ce dont on parle. Thèse : l'opinion défendue. Argument : la raison qui soutient la thèse (il répond à « pourquoi ? »). Exemple : le cas précis qui illustre l'argument (il répond à « par exemple ? »)." },
            },
            {
              heading: "La structure du paragraphe argumenté",
              paragraphs: [
                "Un paragraphe argumenté développe un seul argument. Il commence par un alinéa et suit un ordre en quatre temps. D'abord, l'idée directrice : une phrase qui annonce clairement l'argument. Ensuite, l'explication : une ou deux phrases qui développent l'argument et montrent pourquoi il est juste.",
                "Puis vient l'exemple, introduit par un connecteur (« par exemple », « ainsi ») et analysé : on ne se contente pas de le citer, on montre en quoi il prouve l'argument. Enfin, une conclusion partielle relie l'argument à la thèse en une phrase.",
                "Si vous avez deux arguments, vous écrivez deux paragraphes, chacun avec son alinéa. Un bon paragraphe compte souvent entre six et dix lignes : assez pour développer, pas assez pour se disperser.",
              ],
              box: { label: "Méthode", text: "1. Idée directrice (l'argument annoncé). 2. Explication (pourquoi c'est vrai). 3. Exemple précis, introduit et commenté. 4. Conclusion partielle (le retour à la thèse). Un paragraphe = un argument." },
            },
            {
              heading: "Les connecteurs logiques",
              paragraphs: [
                "Les connecteurs logiques montrent le lien entre les idées. Pour ajouter un argument : d'abord, ensuite, de plus, en outre, enfin. Pour expliquer ou donner une cause : car, en effet, parce que. Pour illustrer : par exemple, ainsi, notamment. Pour tirer une conséquence : donc, c'est pourquoi, par conséquent.",
                "Pour opposer ou nuancer : mais, cependant, pourtant, toutefois, en revanche. Pour concéder, c'est-à-dire reconnaître une part de vérité à l'avis contraire avant de défendre le sien : certes... mais, bien que (suivi du subjonctif). Pour conclure : en somme, en définitive, finalement.",
                "Un connecteur doit être choisi pour son sens, pas pour faire joli. « Donc » annonce une conséquence : si la phrase suivante est un exemple, le lecteur ne comprend plus le raisonnement. Évitez aussi d'en mettre un à chaque phrase.",
              ],
              box: { label: "Repère", text: "Addition : de plus, en outre. Cause : car, en effet. Illustration : par exemple, notamment. Conséquence : donc, c'est pourquoi. Opposition : mais, cependant. Concession : certes... mais. Conclusion : en somme, finalement." },
            },
            {
              heading: "Choisir de bons exemples et convaincre",
              paragraphs: [
                "Un bon exemple est précis et vérifiable : le titre d'une œuvre et son auteur, un personnage, un fait historique connu, une expérience vécue racontée simplement. « Beaucoup de livres parlent de ça » ne prouve rien ; « Dans Les Misérables de Victor Hugo, le lecteur partage la vie de Gavroche, un enfant des rues » est un exemple solide. N'inventez jamais un chiffre ou une étude pour impressionner : un lecteur attentif le remarquera.",
                "Pour être plus convaincant, on peut prendre en compte l'avis contraire et lui répondre : « Certes, les écrans offrent aussi des histoires, mais le roman laisse le lecteur imaginer les visages et les lieux. » Cette concession montre que l'on a réfléchi. Enfin, on écrit dans un registre courant ou soutenu, sans familiarités, et l'on évite les affirmations trop absolues (« tout le monde », « jamais ») en les nuançant (« souvent », « il semble que »).",
              ],
            },
          ],
          keyPoints: [
            "Thème : le sujet ; thèse : l'opinion défendue ; argument : la raison (pourquoi ?) ; exemple : le cas précis (par exemple ?).",
            "Un paragraphe = un argument, avec un alinéa.",
            "Plan du paragraphe : idée directrice, explication, exemple commenté, conclusion partielle.",
            "Connecteurs : de plus (addition), car (cause), par exemple (illustration), donc (conséquence), mais (opposition), certes... mais (concession).",
            "Exemples précis et vérifiables ; jamais de chiffre inventé.",
            "La concession répond à l'avis contraire et rend l'argumentation plus solide.",
          ],
          example: {
            statement: "Sujet : « La lecture de romans est-elle utile aux adolescents ? » Rédigez un paragraphe argumenté qui défend la thèse « oui » à l'aide de l'argument suivant : le roman permet de comprendre des personnes très différentes de soi.",
            solution: [
              "Étape 1, l'idée directrice : on annonce l'argument en une phrase claire. « Tout d'abord, lire des romans aide à comprendre des personnes très différentes de soi. »",
              "Étape 2, l'explication : on dit pourquoi. « En effet, le roman nous fait entrer dans la tête de personnages d'une autre époque, d'un autre pays ou d'un autre milieu ; nous partageons leurs pensées et leurs émotions de l'intérieur. »",
              "Étape 3, l'exemple, introduit et commenté : « Par exemple, dans Les Misérables, Victor Hugo nous fait suivre Gavroche, un enfant qui vit seul dans les rues de Paris au XIXe siècle. En partageant sa faim et son courage, le lecteur comprend ce que signifie la misère, bien mieux qu'avec une simple définition. »",
              "Étape 4, la conclusion partielle, qui revient à la thèse : « Le roman développe donc l'empathie, une qualité précieuse pour un adolescent qui apprend à vivre avec les autres. »",
              "Vérification : un seul argument, quatre temps, des connecteurs adaptés (tout d'abord, en effet, par exemple, donc), un exemple précis et commenté.",
              "Réponse : le paragraphe complet enchaîne les quatre phrases ci-dessus, avec un alinéa au début.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lisez ce paragraphe écrit pour l'exercice, puis relevez : a) la thèse ; b) l'argument ; c) l'exemple ; d) trois connecteurs logiques et leur rôle. « Faire du sport au collège est essentiel. En effet, l'activité physique apprend à respecter des règles et à jouer avec les autres. Par exemple, au handball, chaque joueur doit faire des passes et accepter les décisions de l'arbitre, même quand elles le déçoivent. Le sport est donc aussi une école de la vie en société. »",
              hint: "La thèse est l'opinion générale, souvent dans la première phrase. L'argument répond à « pourquoi ? », l'exemple à « par exemple ? ».",
              solution: [
                "a) La thèse : « Faire du sport au collège est essentiel. »",
                "b) L'argument : l'activité physique apprend à respecter des règles et à jouer avec les autres.",
                "c) L'exemple : le handball, où chaque joueur doit faire des passes et accepter les décisions de l'arbitre.",
                "d) « En effet » introduit l'explication (la cause) ; « Par exemple » introduit l'illustration ; « donc » introduit la conséquence, la conclusion partielle.",
                "Résultat : un paragraphe bien construit, qui va de la thèse à la conclusion partielle en passant par l'argument et l'exemple.",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce paragraphe avec les connecteurs suivants, chacun utilisé une fois : par exemple ; c'est pourquoi ; certes ; en effet ; mais. « Les sorties scolaires au musée sont très utiles. (1) ..., voir une œuvre en vrai la rend plus marquante qu'une image dans un manuel. (2) ..., devant une immense toile, on mesure sa taille, ses couleurs et les traces du pinceau. (3) ..., une sortie demande du temps et de l'organisation, (4) ... le souvenir qu'elle laisse dure bien plus longtemps qu'un cours ordinaire. (5) ... les collèges devraient en organiser au moins une par an. »",
              hint: "Cherchez d'abord le couple de connecteurs qui exprime la concession. Puis demandez-vous quelle phrase explique, laquelle illustre et laquelle tire une conséquence.",
              solution: [
                "(1) En effet : la phrase explique pourquoi les sorties sont utiles (cause).",
                "(2) Par exemple : la phrase donne un cas précis, la toile observée en vrai (illustration).",
                "(3) Certes et (4) mais : on reconnaît d'abord un inconvénient (le temps, l'organisation), puis on le dépasse ; c'est la concession.",
                "(5) C'est pourquoi : la dernière phrase tire la conséquence de tout ce qui précède.",
                "Résultat : (1) En effet, (2) Par exemple, (3) Certes, (4) mais, (5) C'est pourquoi.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sujet : « Les réseaux sociaux sont-ils un bon moyen de s'informer ? » Rédigez un paragraphe argumenté de 8 à 10 lignes qui soutient que les réseaux sociaux ne suffisent pas pour bien s'informer. Votre paragraphe doit contenir une idée directrice, une explication, un exemple précis (inventé si besoin, mais présenté comme une situation et non comme une statistique), une concession avec « certes... mais » et une conclusion partielle.",
              hint: "Appuyez-vous sur la leçon « Repérer une fausse information et vérifier une source » : qui publie sur un réseau social ? qui vérifie ? Placez la concession avant ou après l'exemple, mais avant la conclusion.",
              solution: [
                "Étape 1, l'idée directrice : « Les réseaux sociaux ne suffisent pas pour bien s'informer, car rien n'y garantit que l'information a été vérifiée. »",
                "Étape 2, l'explication : « En effet, n'importe qui peut y publier un message, sans citer de source et sans le recouper, alors qu'un journaliste doit vérifier ses informations avant de les diffuser. De plus, les messages les plus partagés sont souvent les plus choquants, pas les plus exacts. »",
                "Étape 3, l'exemple : « Par exemple, imaginons qu'une photo d'un pont effondré circule avec la légende “Catastrophe dans notre ville cette nuit”. Une recherche d'image inversée peut révéler qu'elle date de plusieurs années et vient d'un autre pays : partagée sans vérification, elle a semé la panique pour rien. »",
                "Étape 4, la concession : « Certes, les réseaux sociaux permettent d'apprendre très vite qu'un événement a lieu, et de nombreux médias sérieux y publient leurs articles, mais il faut toujours remonter à la source avant de croire et de partager. »",
                "Étape 5, la conclusion partielle : « Les réseaux sociaux peuvent donc servir de point de départ, mais pas d'unique moyen de s'informer. »",
                "Résultat : un paragraphe complet (idée directrice, explication, exemple présenté comme une situation, concession, conclusion partielle) d'environ neuf lignes, sans chiffre inventé.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque connecteur logique au rôle qu'il joue dans un raisonnement.",
            pairs: [
              { left: "de plus", right: "ajouter un nouvel argument" },
              { left: "en effet", right: "expliquer, donner une cause" },
              { left: "par exemple", right: "illustrer un argument" },
              { left: "donc", right: "tirer une conséquence" },
              { left: "certes... mais", right: "concéder puis défendre son avis" },
              { left: "en somme", right: "conclure" },
            ],
          },
          quiz: [
            { q: "L'opinion que l'on défend sur un sujet s'appelle :", options: ["la thèse", "le thème", "l'exemple", "l'argument"], answer: 0, why: "La thèse est l'opinion défendue ; le thème est seulement le sujet dont on parle." },
            { q: "« Le roman fait découvrir d'autres vies que la nôtre » est :", options: ["un exemple", "une conclusion", "un argument", "un thème"], answer: 2, why: "Cette phrase répond à « pourquoi lire des romans ? » : c'est un argument, une raison générale." },
            { q: "Quel connecteur exprime la conséquence ?", options: ["cependant", "car", "notamment, par exemple", "c'est pourquoi"], answer: 3, why: "« C'est pourquoi » introduit la conséquence de ce qui précède ; « car » introduit au contraire une cause." },
            { q: "Combien d'arguments un paragraphe argumenté développe-t-il en général ?", options: ["Un seul", "Deux", "Trois au moins"], answer: 0, why: "Un paragraphe développe un seul argument ; un nouvel argument demande un nouveau paragraphe." },
            { q: "Quel est le meilleur exemple pour l'argument « la lecture fait découvrir d'autres époques » ?", options: ["Beaucoup de livres parlent du passé.", "Les Misérables fait vivre le Paris de 1832.", "Tout le monde aime l'histoire.", "Les livres anciens sont souvent longs et difficiles."], answer: 1, why: "Il cite une œuvre précise et une époque précise : il est concret et vérifiable." },
          ],
          trap: "Confondre l'argument et l'exemple, ou aligner des exemples sans jamais dire ce qu'ils prouvent : un exemple n'est utile que s'il est relié à un argument et commenté.",
          method: "Avant de rédiger, écrivez au brouillon quatre lignes numérotées : 1. mon argument en une phrase ; 2. pourquoi il est juste ; 3. mon exemple précis ; 4. ce que cela prouve pour ma thèse. Rédigez ensuite chaque ligne en une ou deux phrases, en ajoutant le connecteur qui convient.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'expose-oral',
          title: 'Préparer et présenter un exposé oral',
          minutes: 30,
          objectives: [
            "Rechercher, sélectionner et vérifier des informations, en notant leurs sources.",
            "Construire le plan d'un exposé : introduction, développement en parties, conclusion.",
            "Préparer des supports adaptés : fiches de mots-clés et diaporama sobre.",
            "S'exprimer de façon claire et audible devant un auditoire, en tenant compte de son temps de parole, et répondre aux questions.",
          ],
          course: [
            {
              heading: "Préparer le contenu",
              paragraphs: [
                "Un exposé commence par un travail sur le sujet. Reformulez-le avec vos mots et transformez-le en une question à laquelle votre exposé répondra : c'est la problématique. Par exemple, le sujet « le métro de Paris » peut devenir : « Comment le métro a-t-il changé la vie des Parisiens ? ». Cette question vous aide à trier ce qui est utile et ce qui ne l'est pas.",
                "Cherchez ensuite des informations dans des sources fiables : les ouvrages et les encyclopédies du CDI, les sites des musées, des institutions ou des médias reconnus. Comme vous l'avez appris pour les fausses informations, vérifiez qui publie et recoupez une information importante avec une deuxième source. Notez chaque source au fur et à mesure (auteur, titre, site, date).",
                "Enfin, triez. On trouve toujours trop d'informations : gardez seulement celles qui répondent à votre question, et réécrivez-les avec vos mots. Un exposé recopié se reconnaît immédiatement, à l'oral comme à l'écrit.",
              ],
              box: { label: "À retenir", text: "Sujet → problématique (une question) → recherche dans des sources fiables et recoupées → tri des informations utiles → reformulation avec vos mots. Notez toujours vos sources." },
            },
            {
              heading: "Construire un plan clair",
              paragraphs: [
                "L'introduction capte l'attention et annonce le chemin. Elle comprend une accroche (une question, une anecdote, une image surprenante), la présentation du sujet, la problématique et l'annonce du plan : « Nous verrons d'abord..., puis..., enfin... ». À l'oral, le public ne peut pas revenir en arrière : il a besoin de savoir où vous allez.",
                "Le développement compte en général deux ou trois parties, chacune centrée sur une idée et illustrée par des exemples ou des documents. Des phrases de transition les relient : « Après avoir vu comment le métro est né, voyons comment il a transformé la ville. »",
                "La conclusion fait le bilan, répond clairement à la problématique, et peut s'ouvrir sur une question plus large. Terminez par une phrase nette (« Merci de votre attention, avez-vous des questions ? ») plutôt que par « Voilà, c'est tout ».",
              ],
              box: { label: "Méthode", text: "Introduction : accroche, présentation du sujet, problématique, annonce du plan. Développement : deux ou trois parties reliées par des transitions. Conclusion : bilan, réponse à la question, ouverture." },
            },
            {
              heading: "Préparer ses supports",
              paragraphs: [
                "Un exposé ne se lit pas : il se dit. Préparez des fiches cartonnées, numérotées, écrites gros, avec des mots-clés et non des phrases entières. Une fiche par partie suffit. Vous pouvez écrire en entier la première phrase de l'introduction et la dernière de la conclusion, pour bien commencer et bien finir.",
                "Le diaporama aide le public, pas l'orateur. Une diapositive présente une seule idée : un titre, quelques mots, une image ou une carte légendée. Écrivez en grands caractères, évitez les animations inutiles, et indiquez la source de chaque image. La dernière diapositive donne la liste de vos sources.",
                "Ne lisez jamais vos diapositives en tournant le dos au public. Si l'écran affiche exactement ce que vous dites, le public lit plus vite que vous parlez, et il décroche.",
              ],
              box: { label: "Règle", text: "Fiches : des mots-clés, pas des phrases. Diaporama : une idée par diapositive, peu de texte, des images légendées avec leur source, une diapositive finale pour les sources." },
            },
            {
              heading: "Prendre la parole devant un public",
              paragraphs: [
                "La voix doit porter jusqu'au fond de la salle. Articulez, parlez plus lentement que dans une conversation et marquez des pauses entre les parties : le silence aide le public à suivre. Évitez les tics de langage (« euh », « du coup », « en fait ») et choisissez un registre courant ou soutenu, sans familiarités.",
                "Le corps parle aussi. Tenez-vous droit, les deux pieds bien ancrés au sol, sans vous balancer. Regardez l'ensemble du public, pas seulement le professeur ou vos fiches. Des gestes simples, pour montrer une image ou compter les parties, accompagnent la parole.",
                "Entraînez-vous à voix haute, au moins deux fois, en vous chronométrant : un exposé trop long ou trop court montre un manque de préparation. Pour les questions, écoutez jusqu'au bout, reformulez si besoin, et répondez simplement ; si vous ne savez pas, dites-le honnêtement. En 3e, l'épreuve orale du brevet repose sur ces mêmes compétences : la présentation d'un projet devant un jury, suivie d'un entretien.",
              ],
              box: { label: "À retenir", text: "Voix : volume, articulation, débit calme, pauses. Corps : posture stable, regard vers tout le public, gestes simples. Temps : s'entraîner à voix haute en se chronométrant. Questions : écouter, reformuler, répondre honnêtement." },
            },
          ],
          keyPoints: [
            "Transformer le sujet en question (la problématique) pour guider la recherche et le tri.",
            "Sources fiables, vérifiées et recoupées, toujours notées ; informations reformulées avec vos mots.",
            "Introduction : accroche, sujet, problématique, annonce du plan ; deux ou trois parties ; conclusion avec réponse et ouverture.",
            "Fiches de mots-clés, jamais un texte rédigé à lire ; diaporama : une idée par diapositive, sources indiquées.",
            "Voix audible, débit calme, pauses ; regard vers tout le public ; posture stable.",
            "S'entraîner à voix haute en se chronométrant ; répondre aux questions avec honnêteté.",
          ],
          example: {
            statement: "Vous préparez un exposé de 5 minutes sur « le métro de Paris ». Voici vos notes : la première ligne est inaugurée le 19 juillet 1900, pendant l'Exposition universelle ; l'ingénieur Fulgence Bienvenüe dirige sa construction ; l'architecte Hector Guimard dessine des entrées de style Art nouveau ; le métro permet de traverser la ville rapidement et relie des quartiers éloignés. Construisez la problématique, l'introduction et le plan, avec le temps prévu pour chaque partie.",
            solution: [
              "Problématique : transformer le sujet en question. « Comment le métro a-t-il changé Paris et la vie des Parisiens ? »",
              "Introduction (environ 45 secondes) : accroche « Imaginez traverser Paris à pied ou en voiture à cheval pour aller travailler chaque matin. » ; présentation du sujet ; problématique ; annonce du plan : « Nous verrons d'abord la naissance du métro, puis comment il a transformé la ville, enfin pourquoi il fait aujourd'hui partie du patrimoine. »",
              "Partie 1 (environ 1 min 15) : la naissance du métro. La première ligne est inaugurée le 19 juillet 1900, pendant l'Exposition universelle, sous la direction de l'ingénieur Fulgence Bienvenüe.",
              "Partie 2 (environ 1 min 15) : une ville transformée. Le métro permet de traverser Paris rapidement et relie des quartiers éloignés : on peut habiter loin de son travail.",
              "Partie 3 (environ 1 min) : un patrimoine. Les entrées dessinées par Hector Guimard, de style Art nouveau ; montrer une photographie légendée, avec sa source.",
              "Conclusion (environ 45 secondes) : bilan (le métro a rendu la ville plus rapide et plus accessible), réponse à la question, ouverture (« Et les transports de demain, à quoi ressembleront-ils ? »), puis « Merci de votre attention, avez-vous des questions ? ».",
              "Réponse : une problématique, une introduction en quatre temps, trois parties et une conclusion, pour un total d'environ 5 minutes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Lors de son exposé, Théo a commis plusieurs erreurs. Relevez-en cinq et proposez pour chacune une correction. « Théo lit ses feuilles sans lever les yeux. Il parle vite et très bas. Ses diapositives sont couvertes de longs paragraphes recopiés d'un site, sans aucune source. Il commence en disant “Bon, ben, mon exposé c'est sur les volcans” et finit par “Voilà, c'est tout”. Il a parlé 12 minutes au lieu des 5 demandées. »",
              hint: "Passez en revue les quatre parties du cours : le contenu, le plan (début et fin), les supports, la prise de parole et le temps.",
              solution: [
                "1) Il lit ses feuilles sans regarder le public : il faut préparer des fiches de mots-clés et regarder l'ensemble de la salle.",
                "2) Il parle vite et très bas : il faut parler plus fort, articuler, ralentir et marquer des pauses.",
                "3) Ses diapositives contiennent de longs paragraphes recopiés, sans source : une idée par diapositive, peu de mots, une reformulation personnelle et la mention des sources.",
                "4) Son introduction et sa conclusion sont bâclées et familières : il faut une accroche, une problématique et l'annonce du plan, puis un bilan, une ouverture et une phrase finale nette.",
                "5) Il dépasse largement son temps (12 minutes au lieu de 5) : il faut s'entraîner à voix haute en se chronométrant et couper les informations secondaires.",
                "Résultat : cinq erreurs (lecture, voix, diaporama, introduction et conclusion, temps) et cinq corrections tirées du cours.",
              ],
            },
            {
              level: 2,
              statement: "Transformez ce paragraphe rédigé en une fiche de mots-clés (cinq lignes au plus), puis rédigez une accroche pour l'exposé : « Les grands magasins apparaissent à Paris au XIXe siècle. Ils proposent dans un même lieu un très grand nombre de produits, avec des prix fixes et affichés. Les clientes peuvent entrer librement et regarder sans acheter. Émile Zola s'en inspire dans son roman Au Bonheur des Dames, publié en 1883, où il montre que ces magasins ruinent les petites boutiques du quartier. »",
              hint: "Gardez seulement les mots qui vous permettront de retrouver chaque idée : une date, un nom, une idée par ligne. L'accroche peut être une question posée au public.",
              solution: [
                "Ligne 1 : XIXe siècle, Paris : naissance des grands magasins.",
                "Ligne 2 : un seul lieu, très nombreux produits.",
                "Ligne 3 : prix fixes et affichés ; entrée libre, regarder sans acheter.",
                "Ligne 4 : Zola, Au Bonheur des Dames (1883).",
                "Ligne 5 : conséquence : ruine des petites boutiques.",
                "Accroche possible : « Avez-vous déjà passé une heure dans un centre commercial sans rien acheter ? Au XIXe siècle, cette idée était une véritable révolution. »",
                "Résultat : une fiche de cinq lignes de mots-clés, qui permet de parler sans lire, et une accroche qui interpelle le public.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Préparez un exposé de 4 minutes intitulé « La ville en poésie, de Baudelaire à aujourd'hui », à partir de la leçon sur ce thème. Rédigez : a) la problématique ; b) l'introduction complète ; c) le plan en trois parties avec le temps de chaque partie et le contenu d'une diapositive par partie ; d) la conclusion avec une ouverture ; e) une question que le public pourrait vous poser, et votre réponse.",
              hint: "Suivez la chronologie : Baudelaire, puis la ville moderne du début du XXe siècle, puis la poésie d'aujourd'hui. Pour chaque diapositive, une idée, un titre, une image et sa source.",
              solution: [
                "a) Problématique : « Comment les poètes ont-ils montré la ville, et quelles émotions y ont-ils trouvées ? »",
                "b) Introduction (environ 40 secondes) : « Une rue bruyante, une passante qui disparaît dans la foule : c'est avec cette scène que Baudelaire fait entrer la ville moderne dans la poésie. Depuis le XIXe siècle, les poètes n'ont cessé d'écrire la ville. Comment l'ont-ils montrée, et quelles émotions y ont-ils trouvées ? Nous verrons d'abord Baudelaire, poète de Paris, puis la ville moderne chez Verhaeren et Apollinaire, enfin la ville d'aujourd'hui, du poème en prose au slam. »",
                "c) Partie 1 (environ 1 minute) : Baudelaire, les « Tableaux parisiens » (1861), le flâneur, « À une passante » ; diapositive : titre « Baudelaire, poète de Paris », un portrait du poète avec sa source, deux mots-clés (rencontre, mélancolie). Partie 2 (environ 1 minute) : Verhaeren, Les Villes tentaculaires (1895), la ville pieuvre ; Apollinaire, « Zone » (1913), le vers libre ; diapositive : titre « La ville moderne », une affiche ou une photographie de la tour Eiffel au début du XXe siècle, avec sa source. Partie 3 (environ 50 secondes) : Prévert, « Barbara » (1946), Réda, Les Ruines de Paris (1977), le slam de Grand Corps Malade, « Saint-Denis » (2006) ; diapositive : titre « La ville aujourd'hui », trois mots-clés (mémoire, promenade, slam).",
                "d) Conclusion (environ 30 secondes) : « Des sonnets de Baudelaire au slam, les poètes ont montré la ville comme un lieu de rencontres et d'énergie, mais aussi de solitude et de nostalgie, et ils ont inventé de nouvelles formes pour la dire. Et vous, quel lieu de votre ville mériterait un poème ? Merci de votre attention, avez-vous des questions ? »",
                "e) Question possible : « Pourquoi Apollinaire n'a-t-il pas mis de ponctuation ? » Réponse : « Apollinaire a supprimé la ponctuation de tout le recueil Alcools : la forme devient moderne comme le sujet, et c'est au lecteur de trouver le rythme du vers. »",
                "Résultat : un exposé de 4 minutes au total (40 s + 1 min + 1 min + 50 s + 30 s), avec une problématique, un plan chronologique, une diapositive par partie et une conclusion ouverte.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez que vous savez préparer et présenter un exposé.",
            statements: [
              { text: "Pour être sûr de ne rien oublier, il vaut mieux lire un texte entièrement rédigé.", true: false, why: "Un exposé se dit : on parle à partir de fiches de mots-clés, en regardant le public." },
              { text: "Transformer le sujet en question aide à trier les informations.", true: true, why: "La problématique permet de garder seulement ce qui y répond." },
              { text: "Une diapositive efficace contient beaucoup de texte, pour que le public ait tout sous les yeux.", true: false, why: "Le public lit l'écran au lieu de vous écouter : une idée par diapositive, peu de mots." },
              { text: "Il faut indiquer la source des images et des informations utilisées.", true: true, why: "Citer ses sources est honnête et permet de vérifier ; on les liste sur la dernière diapositive." },
              { text: "L'annonce du plan est inutile à l'oral.", true: false, why: "Elle est encore plus utile à l'oral, car le public ne peut pas revenir en arrière." },
              { text: "S'entraîner à voix haute en se chronométrant permet de respecter son temps.", true: true, why: "On découvre ainsi si l'exposé est trop long ou trop court, et l'on corrige avant le jour J." },
              { text: "Quand on ne connaît pas la réponse à une question, il vaut mieux inventer quelque chose.", true: false, why: "Mieux vaut le dire honnêtement, et proposer de chercher ; une réponse inventée fait perdre toute confiance." },
            ],
          },
          quiz: [
            { q: "Que contient l'introduction d'un exposé ?", options: ["Le bilan de l'exposé et une ouverture vers un autre sujet", "La liste complète des sources consultées pour la recherche", "L'accroche, le sujet, la problématique et le plan", "Les réponses aux questions posées par le public à la fin"], answer: 2, why: "L'introduction capte l'attention, présente le sujet, pose la question et annonce le chemin." },
            { q: "Sur une fiche d'exposé, on écrit :", options: ["des mots-clés", "le texte complet à lire", "des phrases recopiées d'un site"], answer: 0, why: "Les mots-clés permettent de retrouver ses idées tout en parlant librement et en regardant le public." },
            { q: "Quel conseil est juste pour le diaporama ?", options: ["Lire chaque diapositive au public", "Mettre une idée par diapositive", "Ajouter le plus d'animations possible", "Écrire en petits caractères"], answer: 1, why: "Une diapositive sobre, avec une seule idée, aide le public à suivre sans le distraire." },
            { q: "Pendant l'exposé, il faut regarder :", options: ["seulement le professeur", "uniquement ses fiches", "le plafond pour se concentrer", "l'ensemble du public"], answer: 3, why: "Balayer la salle du regard maintient l'attention de tous et montre que l'on s'adresse à chacun." },
            { q: "Quelle phrase termine le mieux un exposé ?", options: ["« Voilà, c'est tout, je pense que je n'ai rien oublié d'important. »", "« Merci de votre attention, avez-vous des questions ? »", "« Bon, ben, j'ai fini, est-ce qu'on peut passer à quelqu'un d'autre ? »"], answer: 1, why: "Elle est polie, nette, et ouvre l'échange avec le public." },
          ],
          trap: "Lire ses notes ou ses diapositives mot à mot, sans regarder le public : c'est l'erreur la plus fréquente, et elle fait perdre l'attention de la salle même quand le contenu est excellent.",
          method: "Répétez votre exposé à voix haute au moins deux fois, debout, devant un proche ou un miroir, en vous chronométrant. Notez à chaque fois le temps de chaque partie, puis coupez ou ajoutez pour tenir le temps demandé.",
        },
      ],
    },
  ],
}
