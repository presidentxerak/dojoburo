import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-4e',
  chapters: [
    {
      id: 'dire-l-amour',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'poesie-lyrique',
          title: "Qu'est-ce que la poésie lyrique ?",
          minutes: 25,
          objectives: [
            "Définir la poésie lyrique et expliquer l'origine du mot.",
            "Identifier les marques du registre lyrique dans un poème.",
            "Reconnaître les grands thèmes du lyrisme : l'amour, la fuite du temps, l'absence.",
            "Rédiger quelques vers ou lignes qui expriment un sentiment personnel.",
          ],
          course: [
            {
              heading: "D'Orphée aux troubadours : l'origine du lyrisme",
              paragraphs: [
                "Le mot « lyrique » vient de la lyre, un instrument à cordes de la Grèce antique. Les poètes grecs récitaient ou chantaient leurs vers en s'accompagnant de cet instrument. Dans la mythologie, le plus célèbre d'entre eux est Orphée : son chant était si beau qu'il charmait les animaux, les arbres et même les pierres. Quand sa femme Eurydice mourut, il descendit aux Enfers pour la chercher, et sa musique émut les dieux des morts. Orphée est devenu le symbole du poète qui chante l'amour et la douleur.",
                "Au Moyen Âge, au XIIe siècle, les troubadours (dans le sud de la France, en langue d'oc) et les trouvères (dans le nord, en langue d'oïl) composent des chansons d'amour. Ils célèbrent la « fin'amor », que l'on appelle aussi l'amour courtois : le poète se met au service d'une dame admirée, souvent inaccessible. Le lien entre la poésie et la musique est donc très ancien.",
              ],
              box: { label: "Définition", text: "La poésie lyrique est une poésie qui exprime les sentiments personnels du poète (amour, joie, tristesse, nostalgie), le plus souvent à la première personne, avec une forte musicalité." },
            },
            {
              heading: "Les grands thèmes du lyrisme",
              paragraphs: [
                "Le premier thème lyrique est l'amour, sous toutes ses formes : l'émerveillement de la rencontre, le bonheur partagé, mais aussi l'attente, la jalousie, la séparation et le chagrin. Au XVIe siècle, Louise Labé, poétesse de Lyon, publie en 1555 des sonnets où elle décrit les contradictions de la passion amoureuse : on brûle et on gèle, on rit et on pleure en même temps.",
                "Le deuxième grand thème est la fuite du temps. Ronsard, dans une ode adressée à Cassandre qui commence par « Mignonne, allons voir si la rose », compare la beauté de la jeune femme à une rose qui fane en un jour : il l'invite à profiter de sa jeunesse. En 1820, Lamartine, dans « Le Lac », revient seul au bord d'un lac où il a été heureux avec la femme aimée ; il supplie le temps de s'arrêter. En 1913, dans « Le Pont Mirabeau » (recueil Alcools), Apollinaire compare l'amour qui s'en va à l'eau de la Seine qui coule.",
                "D'autres thèmes reviennent souvent : la nature, qui reflète les émotions du poète (un ciel gris pour la tristesse, un printemps pour l'espoir), la mélancolie, le souvenir, la mort. Au XXe siècle, Louis Aragon chante encore l'amour dans Les Yeux d'Elsa (1942), recueil dédié à sa compagne Elsa Triolet.",
              ],
            },
            {
              heading: "Reconnaître le registre lyrique",
              paragraphs: [
                "Pour reconnaître un texte lyrique, cherchez d'abord la première personne : « je », « me », « moi », « mon cœur ». Le poète s'adresse souvent à quelqu'un ou à quelque chose, à la deuxième personne : à la personne aimée, mais aussi à la nuit, à la mer ou au temps. On appelle apostrophe cette manière d'interpeller directement un être ou une chose, souvent avec l'interjection « Ô ».",
                "Le lyrisme se repère aussi à la ponctuation expressive (points d'exclamation, questions sans réponse, points de suspension), aux interjections (« Hélas ! », « Ah ! ») et au champ lexical des sentiments (aimer, souffrir, larmes, joie, cœur). Enfin, le texte lyrique est musical : rimes, rythme régulier, répétitions, refrain. Dans « Le Pont Mirabeau », un refrain revient entre les strophes comme dans une chanson.",
              ],
              box: { label: "À retenir", text: "Marques du registre lyrique : première personne ; apostrophe et deuxième personne ; interjections ; exclamations et questions ; champ lexical des sentiments ; musicalité (rimes, rythme, répétitions, refrain)." },
            },
            {
              heading: "Le « je » lyrique : une voix pour tous",
              paragraphs: [
                "Le « je » du poème n'est pas exactement la personne réelle du poète : on parle de « je lyrique ». Le poète part souvent de son expérience, mais il la transforme pour que chaque lecteur puisse s'y reconnaître. Quand Lamartine regrette le temps qui passe, il exprime une émotion que tout le monde a déjà ressentie, par exemple à la fin des vacances ou après le départ d'un ami.",
                "C'est ce qui fait la force de la poésie lyrique : un sentiment très personnel devient universel. En lisant un poème lyrique, demandez-vous donc toujours quel sentiment est exprimé, à qui le poète s'adresse, et par quels moyens (mots, images, sons) il nous le fait partager.",
              ],
            },
          ],
          keyPoints: [
            "« Lyrique » vient de la lyre, instrument du poète grec ; Orphée en est le symbole.",
            "La poésie lyrique exprime les sentiments personnels, souvent à la première personne.",
            "Thèmes principaux : l'amour, la fuite du temps, l'absence, la nature, la mélancolie.",
            "Marques : je, apostrophe (Ô), interjections, exclamations, questions, champ lexical des sentiments.",
            "La musicalité (rimes, rythme, répétitions, refrain) rappelle le lien ancien entre poésie et chant.",
            "Le « je lyrique » rend universel un sentiment personnel.",
          ],
          example: {
            statement: "Poème écrit pour l'exercice : « Ô mer grise de novembre, / Tu m'as pris mes jours d'été ; / Je marche seul, et je me souviens / De sa main dans ma main serrée. / Reviendra-t-elle avec les hirondelles ? / Hélas ! le vent répond pour moi. » Montrez que ce poème relève du registre lyrique et dites quel sentiment il exprime.",
            solution: [
              "Première personne : « Je marche seul », « je me souviens », « m'as pris », « ma main », « pour moi ». Le poète parle de lui-même.",
              "Apostrophe : « Ô mer grise de novembre », puis la deuxième personne « Tu m'as pris ». Le poète s'adresse à la mer comme à une personne.",
              "Ponctuation expressive et interjection : la question « Reviendra-t-elle avec les hirondelles ? » reste sans réponse ; l'interjection « Hélas ! » exprime la plainte.",
              "Champ lexical du souvenir et de l'absence : « seul », « je me souviens », « Reviendra-t-elle ». L'opposition entre « novembre » et « jours d'été » montre la fuite du temps.",
              "Réponse : le poème est lyrique ; il exprime la nostalgie et la tristesse d'un amour absent, que le poète espère voir revenir au printemps, avec les hirondelles.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Strophe écrite pour l'exercice : « Je t'attends sous le vieux tilleul, / Le soir descend, l'heure s'efface ; / Mon cœur bat comme un oiseau seul, / Viendras-tu avant que tout passe ? » a) Relevez trois marques de la première personne. b) À qui le poète s'adresse-t-il ? Relevez un indice. c) Quel type de phrase termine la strophe ? d) Quel est le thème de cette strophe ?",
              hint: "Cherchez les pronoms et les déterminants de la première et de la deuxième personne, puis regardez la ponctuation du dernier vers.",
              solution: [
                "a) Première personne : « Je t'attends », « Mon cœur ». On peut aussi citer le pronom « Je » seul et le déterminant « Mon ».",
                "b) Le poète s'adresse à la personne qu'il attend, à la deuxième personne : « Je t'attends », « Viendras-tu ».",
                "c) La strophe se termine par une phrase interrogative : « Viendras-tu avant que tout passe ? ». La question reste sans réponse.",
                "d) Le thème est l'attente amoureuse, mêlée à l'inquiétude de voir le temps passer (« Le soir descend, l'heure s'efface »).",
              ],
            },
            {
              level: 2,
              statement: "Deux textes écrits pour l'exercice. Texte A : « Le train de 8 h 12 part de la voie 3. Les voyageurs montent avec leurs valises. Le contrôleur siffle. » Texte B : « Ô train qui l'emportes loin de moi, / Ralentis, je t'en supplie ! / Mon amour s'en va par la vitre / Et mon matin devient la nuit. » a) Lequel des deux textes est lyrique ? Justifiez avec au moins quatre marques précises. b) Quel sentiment exprime-t-il ? c) Pourquoi l'autre texte n'est-il pas lyrique ?",
              hint: "Comparez la personne employée, la présence ou non d'un destinataire, la ponctuation et le vocabulaire des sentiments.",
              solution: [
                "a) Le texte B est lyrique. Marque 1 : la première personne (« loin de moi », « je t'en supplie », « Mon amour », « mon matin »). Marque 2 : l'apostrophe « Ô train ». Marque 3 : la deuxième personne et l'impératif adressés au train (« Ralentis »). Marque 4 : la phrase exclamative « je t'en supplie ! ». Marque 5 : le vocabulaire du sentiment (« supplie », « Mon amour »).",
                "b) Il exprime la douleur de la séparation : la personne aimée part en train, et le poète supplie le train de ralentir.",
                "c) Le texte A est une simple information, à la troisième personne, sans sentiment exprimé : il donne une heure, un numéro de voie, des actions. Il n'y a ni « je », ni apostrophe, ni ponctuation expressive.",
                "Bilan : le même sujet (un départ en train) peut être traité de façon neutre ou lyrique ; c'est l'expression du sentiment personnel qui fait le lyrisme.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Votre meilleur ami a déménagé dans une autre ville. Rédigez un court poème lyrique de six à huit vers (les vers libres, sans rimes obligatoires, sont acceptés) qui exprime ce que vous ressentez. Vous emploierez au moins cinq marques du registre lyrique et vous les soulignerez. Puis, en deux phrases, expliquez quel sentiment domine dans votre poème.",
              hint: "Avant d'écrire, choisissez à qui vous parlez (l'ami, la ville, une saison), puis cochez une liste : je, apostrophe, interjection, exclamation ou question, champ lexical des sentiments, répétition.",
              solution: [
                "Exemple de poème : « Ô rue de notre enfance, / Pourquoi es-tu si vide ce matin ? / Je cherche encore son rire au coin du square, / Je cherche encore ses pas sur le chemin. / Hélas ! les volets de sa maison sont clos, / Et mon cœur, ce soir, a le goût de la pluie. »",
                "Marques employées : l'apostrophe « Ô rue de notre enfance » et la deuxième personne « es-tu » ; la question « Pourquoi es-tu si vide ce matin ? » ; la première personne « Je cherche », « mon cœur » ; la répétition (anaphore) « Je cherche encore » ; l'interjection « Hélas ! » ; le champ lexical de la tristesse (« vide », « clos », « la pluie »).",
                "Explication : le sentiment dominant est la nostalgie, mêlée de tristesse. Le poète s'adresse à la rue, témoin de l'amitié, et la nature (la pluie) reflète son chagrin.",
                "Pour vous corriger : vérifiez que chaque marque est bien présente et soulignée, que le texte parle d'un sentiment et non seulement d'événements, et qu'il y a au moins une image ou une répétition qui donne du rythme.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces poètes lyriques dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Les troubadours chantent l'amour courtois (XIIe siècle)",
              "Louise Labé publie ses sonnets (1555)",
              "Ronsard publie les Sonnets pour Hélène (1578)",
              "Lamartine publie « Le Lac » dans les Méditations poétiques (1820)",
              "Apollinaire publie Alcools, avec « Le Pont Mirabeau » (1913)",
              "Aragon publie Les Yeux d'Elsa (1942)",
            ],
          },
          quiz: [
            { q: "D'où vient l'adjectif « lyrique » ?", options: ["Du verbe « lire »", "De la lyre", "Du mot « délire »", "De la ville de Lyon"], answer: 1, why: "La lyre était l'instrument à cordes avec lequel les poètes grecs accompagnaient leurs vers." },
            { q: "Quel personnage de la mythologie grecque symbolise le poète lyrique ?", options: ["Orphée", "Ulysse", "Hercule"], answer: 0, why: "Orphée charmait la nature par son chant et descendit aux Enfers pour retrouver Eurydice." },
            { q: "Dans « Ô temps, suspends ton vol ! », comment appelle-t-on le fait d'interpeller le temps ?", options: ["Une rime riche", "Un refrain", "Une apostrophe", "Un récit au passé"], answer: 2, why: "L'apostrophe consiste à s'adresser directement à un être ou à une chose, souvent avec « Ô »." },
            { q: "Quel indice n'est PAS une marque du registre lyrique ?", options: ["Le pronom « je »", "L'interjection « Hélas ! »", "Le champ lexical des sentiments", "Un horaire de train précis"], answer: 3, why: "Une information pratique et neutre n'exprime aucun sentiment ; les trois autres indices sont typiques du lyrisme." },
            { q: "Que désigne le « je lyrique » ?", options: ["Une voix qui rend universel un sentiment", "Toujours la vie réelle du poète, sans changement", "Le personnage principal d'un roman"], answer: 0, why: "Le poète part de son expérience mais la transforme pour que chaque lecteur s'y reconnaisse." },
          ],
          trap: "Croire qu'un poème est lyrique dès qu'il rime. La rime ne suffit pas : un texte est lyrique quand il exprime un sentiment personnel, avec la première personne, des exclamations ou un destinataire.",
          method: "Pour analyser un poème lyrique, posez-vous trois questions dans l'ordre : qui parle (je) ? à qui (apostrophe, deuxième personne) ? quel sentiment, et par quels mots, images et sons ? Notez une citation pour chaque réponse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sonnet-versification',
          title: 'Le sonnet et les règles de la versification',
          minutes: 35,
          objectives: [
            "Compter les syllabes d'un vers en appliquant la règle du e muet.",
            "Identifier l'alexandrin, le décasyllabe et l'octosyllabe, et repérer la césure.",
            "Identifier la disposition et la richesse des rimes.",
            "Reconnaître la structure du sonnet et expliquer l'effet de sa chute.",
          ],
          course: [
            {
              heading: "Compter les syllabes d'un vers",
              paragraphs: [
                "Un vers est une ligne de poème. Sa mesure (ou son mètre) est le nombre de syllabes prononcées. Pour compter, on découpe le vers à l'oral, syllabe par syllabe, en faisant attention à la lettre e quand elle n'est pas accentuée : on l'appelle le e muet (ou e caduc).",
                "Trois règles décident si ce e compte. À l'intérieur du vers, devant une consonne, il se prononce et compte : « u-ne ro-se » fait quatre syllabes. Devant une voyelle ou un h muet, il s'efface, on dit qu'il s'élide : « vieille au soir » se dit « vieil-lau-soir », trois syllabes. À la fin du vers, il ne compte jamais.",
                "Prenons un vers de Louise Labé : « Je vis, je meurs : je me brûle et me noie ». On compte : Je (1) vis (2) je (3) meurs (4) je (5) me (6) brû (7) l'et (8) me (9) noie (10). Le e de « brûle » s'élide devant « et », et le e final de « noie » ne compte pas : c'est un vers de dix syllabes.",
              ],
              box: { label: "Règle", text: "Le e muet compte devant une consonne à l'intérieur du vers ; il s'élide devant une voyelle ou un h muet ; il ne compte jamais en fin de vers." },
            },
            {
              heading: "Les vers les plus courants",
              paragraphs: [
                "L'alexandrin a douze syllabes. C'est le grand vers de la poésie et du théâtre classiques. Il est souvent coupé en deux moitiés de six syllabes, appelées hémistiches ; la pause entre les deux s'appelle la césure. Exemple de Ronsard : « Quand vous serez bien vieille, // au soir, à la chandelle » : Quand (1) vous (2) se (3) rez (4) bien (5) vieil (6) // au (7) soir (8) à (9) la (10) chan (11) delle (12).",
                "Le décasyllabe a dix syllabes ; sa césure tombe souvent après la quatrième syllabe, comme dans le vers de Louise Labé (« Je vis, je meurs : // je me brûle et me noie »). L'octosyllabe a huit syllabes : c'est un vers léger et rapide, celui des chansons et des premiers romans médiévaux.",
                "Deux voyelles qui se suivent peuvent se prononcer en une seule syllabe (synérèse) ou en deux (diérèse). « Passion » se dit d'ordinaire en deux syllabes (pas-sion) ; le poète peut l'étirer en trois (pas-si-on) pour atteindre le bon nombre de syllabes et mettre le mot en valeur.",
              ],
              box: { label: "À retenir", text: "Alexandrin : 12 syllabes, césure à l'hémistiche (6 // 6). Décasyllabe : 10 syllabes, souvent 4 // 6. Octosyllabe : 8 syllabes. Diérèse : une syllabe en deux. Synérèse : deux voyelles en une syllabe." },
            },
            {
              heading: "Les rimes et les strophes",
              paragraphs: [
                "La rime est le retour du même son à la fin de deux vers. On note chaque nouveau son par une lettre. Les rimes sont suivies (ou plates) quand elles vont deux par deux : AABB. Elles sont croisées quand elles alternent : ABAB. Elles sont embrassées quand une paire en entoure une autre : ABBA.",
                "On mesure aussi la richesse de la rime en comptant les sons communs (et non les lettres). Une rime est pauvre avec un seul son commun (« vie » et « ami » : le son [i]) ; suffisante avec deux sons (« beauté » et « été » : [t] et [é]) ; riche avec trois sons ou plus (« charmante » et « amante » : [m], [an], [t]). On distingue enfin les rimes féminines, terminées par un e muet (« rose », « chose »), et les rimes masculines (« amour », « jour ») ; la poésie classique les fait alterner.",
                "Une strophe est un groupe de vers séparé des autres par un blanc. On la nomme selon son nombre de vers : un distique (2 vers), un tercet (3), un quatrain (4), un quintil (5), un sizain (6).",
              ],
            },
            {
              heading: "Le sonnet, un poème à forme fixe",
              paragraphs: [
                "Le sonnet est un poème de quatorze vers, composé de deux quatrains suivis de deux tercets. Il est né en Italie : au XIVe siècle, Pétrarque écrit des centaines de sonnets pour une femme nommée Laure. Le sonnet arrive en France au XVIe siècle, avec Clément Marot, puis triomphe avec les poètes de la Pléiade (Ronsard, Du Bellay) et avec Louise Labé. Ronsard publie ses Sonnets pour Hélène en 1578.",
                "Dans le sonnet français régulier, les deux quatrains sont construits sur les deux mêmes rimes embrassées (ABBA ABBA), et les tercets suivent souvent le schéma CCD EED (ou CCD EDE). Les vers sont le plus souvent des alexandrins ou des décasyllabes.",
                "Le dernier vers du sonnet s'appelle la chute : il apporte une surprise, une idée forte ou un retournement qui éclaire tout le poème. Dans « Le Dormeur du val » (1870), Rimbaud décrit un jeune soldat qui semble dormir dans la nature ; le dernier vers révèle qu'il a « deux trous rouges au côté droit » : il est mort. Le sonnet revient en force au XIXe siècle avec Baudelaire, Verlaine et Rimbaud.",
              ],
              box: { label: "Définition", text: "Le sonnet est un poème à forme fixe de 14 vers : deux quatrains (souvent ABBA ABBA) et deux tercets (souvent CCD EED ou CCD EDE). Son dernier vers, la chute, crée un effet de surprise." },
            },
          ],
          keyPoints: [
            "Le e muet compte devant consonne, s'élide devant voyelle, ne compte jamais en fin de vers.",
            "Alexandrin : 12 syllabes (6 // 6) ; décasyllabe : 10 ; octosyllabe : 8.",
            "Rimes suivies AABB, croisées ABAB, embrassées ABBA ; richesse : pauvre (1 son), suffisante (2), riche (3 ou plus).",
            "Strophes : distique (2), tercet (3), quatrain (4), quintil (5), sizain (6).",
            "Sonnet : 14 vers, deux quatrains et deux tercets ; né en Italie avec Pétrarque, arrivé en France au XVIe siècle.",
            "La chute, dernier vers du sonnet, crée une surprise ou une pointe.",
          ],
          example: {
            statement: "Voici le premier vers d'un sonnet de Ronsard (Sonnets pour Hélène, 1578) : « Quand vous serez bien vieille, au soir, à la chandelle, ». a) Comptez ses syllabes en expliquant le traitement des e muets. b) Nommez ce vers et situez la césure. c) Combien de vers ce poème comptera-t-il en tout, et comment seront-ils groupés ?",
            solution: [
              "a) On découpe : Quand (1) vous (2) se (3) rez (4) bien (5) vieil (6) au (7) soir (8) à (9) la (10) chan (11) delle (12).",
              "Le e de « vieille » s'élide devant la voyelle de « au » : on prononce « vieil-lau ». Le e final de « chandelle » est en fin de vers : il ne compte pas.",
              "b) Le vers a douze syllabes : c'est un alexandrin. La césure tombe après la sixième syllabe, après « vieille », et elle est renforcée par la virgule : « Quand vous serez bien vieille, // au soir, à la chandelle ».",
              "c) C'est un sonnet : il comptera quatorze vers, groupés en deux quatrains puis deux tercets.",
              "Réponse : un alexandrin de 12 syllabes, coupé en deux hémistiches de 6, premier vers d'un sonnet de 14 vers.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Vers écrits pour l'exercice. Comptez les syllabes de chaque vers et nommez-le. a) « Le vent du soir chante tout bas » b) « Mon cœur s'éveille au premier jour de mai » c) « Les roses du jardin ont gardé ton visage »",
              hint: "Découpez à voix haute. Pour chaque e muet, regardez la lettre qui suit : une consonne (il compte), une voyelle (il s'élide), ou la fin du vers (il ne compte pas).",
              solution: [
                "a) Le (1) vent (2) du (3) soir (4) chan (5) te (6) tout (7) bas (8). Le e de « chante » est devant la consonne t : il compte. Le vers a 8 syllabes : c'est un octosyllabe.",
                "b) Mon (1) cœur (2) s'é (3) veil (4) lau (5) pre (6) mier (7) jour (8) de (9) mai (10). Le e de « s'éveille » s'élide devant « au ». Le vers a 10 syllabes : c'est un décasyllabe.",
                "c) Les (1) ro (2) ses (3) du (4) jar (5) din (6) ont (7) gar (8) dé (9) ton (10) vi (11) sa (12). Le e de « roses » est devant la consonne d : il compte. Le e final de « visage » ne compte pas. Le vers a 12 syllabes : c'est un alexandrin, avec une césure après « jardin ».",
              ],
            },
            {
              level: 2,
              statement: "Quatrain écrit pour l'exercice : « Quand l'automne revient sur la colline grise, / Je cherche ton sourire au détour du chemin ; / Mais le ciel ne me rend qu'un murmure de brise / Et des feuilles d'or roux qui tombent dans ma main. » a) Vérifiez que les vers 1 et 2 sont des alexandrins et situez leur césure. b) Donnez le schéma des rimes et nommez leur disposition. c) Évaluez la richesse des rimes « grise / brise » et « chemin / main ». d) Lesquelles sont féminines, lesquelles masculines ?",
              hint: "Pour la richesse, prononcez la fin des deux mots et comptez les sons identiques en partant de la fin, pas les lettres.",
              solution: [
                "a) Vers 1 : Quand (1) l'au (2) tom (3) ne (4) re (5) vient (6) // sur (7) la (8) col (9) li (10) ne (11) gri (12). Le e de « automne » compte devant le r de « revient » ; le e final de « grise » ne compte pas. 12 syllabes, césure après « revient ».",
                "Vers 2 : Je (1) cher (2) che (3) ton (4) sou (5) ri (6) // au (7) dé (8) tour (9) du (10) che (11) min (12). Le e de « sourire » s'élide devant « au ». 12 syllabes, césure après « sourire ».",
                "b) grise (A), chemin (B), brise (A), main (B) : le schéma est ABAB, ce sont des rimes croisées.",
                "c) « grise / brise » : sons communs [r], [i], [z], soit trois sons : rime riche. « chemin / main » : sons communs [m] et [in], soit deux sons : rime suffisante.",
                "d) « grise / brise » se terminent par un e muet : rimes féminines. « chemin / main » : rimes masculines. Elles alternent, comme le veut la poésie classique.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici les deux tercets d'un sonnet écrit pour l'exercice : « J'ai guetté le facteur du matin jusqu'au soir, / Comptant chaque minute et nourrissant l'espoir ; / Mais personne, au palier, ne venait me sourire. // Alors, le cœur battant, j'ai ouvert la fenêtre : / Rien. Pas même un oiseau pour m'apporter sa lettre. / Sur mon bureau dormait la lettre à lui écrire. » a) Qu'est-ce qui précède ces deux tercets dans un sonnet ? Combien le poème a-t-il de vers en tout ? b) Vérifiez que le premier et le dernier vers sont des alexandrins. c) Donnez le schéma des rimes des tercets. d) Expliquez la chute : quelle surprise apporte le dernier vers ?",
              hint: "Pour b), attention aux e muets de « personne », « lettre » et « écrire ». Pour d), relisez tout le poème en vous demandant qui attend une lettre, et qui devait l'écrire.",
              solution: [
                "a) Les tercets sont précédés de deux quatrains. Le sonnet compte 4 + 4 + 3 + 3 = 14 vers.",
                "b) Premier vers : J'ai (1) guet (2) té (3) le (4) fac (5) teur (6) // du (7) ma (8) tin (9) jus (10) qu'au (11) soir (12) : 12 syllabes. Dernier vers : Sur (1) mon (2) bu (3) reau (4) dor (5) mait (6) // la (7) let (8) tr'à (9) lui (10) é (11) cri (12) : le e de « lettre » s'élide devant « à », le e final de « écrire » ne compte pas : 12 syllabes. Ce sont des alexandrins.",
                "c) soir (C), espoir (C), sourire (D), fenêtre (E), lettre (E), écrire (D) : le schéma est CCD EED, celui du sonnet français régulier.",
                "d) Pendant cinq vers, on croit que le poète attend une lettre de quelqu'un, en vain. Le dernier vers retourne la situation : la lettre qui manque, c'est celle que le poète devait lui-même écrire, et qui « dort » sur son bureau.",
                "Effet : la chute crée une surprise et un sourire ; elle transforme une plainte amoureuse en reproche contre soi-même. C'est exactement le rôle de la pointe finale d'un sonnet.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque terme de versification à sa définition.",
            pairs: [
              { left: "Alexandrin", right: "Vers de douze syllabes" },
              { left: "Décasyllabe", right: "Vers de dix syllabes" },
              { left: "Rimes embrassées", right: "Schéma ABBA" },
              { left: "Rimes croisées", right: "Schéma ABAB" },
              { left: "Hémistiche", right: "Moitié d'un alexandrin, avant ou après la césure" },
              { left: "Chute", right: "Dernier vers d'un sonnet, qui crée une surprise" },
            ],
          },
          quiz: [
            { q: "Combien de vers compte un sonnet ?", options: ["12", "16", "14", "10"], answer: 2, why: "Le sonnet compte 14 vers : deux quatrains et deux tercets." },
            { q: "Au milieu d'un vers, devant une consonne, combien de syllabes compte « une rose » ?", options: ["2", "3", "4"], answer: 2, why: "« u-ne ro-se » : le e de « une » compte devant la consonne r, et celui de « rose » compte s'il est suivi d'une consonne dans le vers." },
            { q: "Comment s'appelle la pause au milieu d'un alexandrin ?", options: ["La césure", "La strophe", "La rime", "La chute"], answer: 0, why: "La césure sépare l'alexandrin en deux hémistiches, souvent de six syllabes chacun." },
            { q: "Quel est le schéma des rimes embrassées ?", options: ["AABB", "ABAB", "ABCD", "ABBA"], answer: 3, why: "Dans les rimes embrassées, la paire BB est « embrassée » par la paire AA." },
            { q: "Quel poète italien du XIVe siècle a rendu le sonnet célèbre ?", options: ["Ronsard", "Pétrarque", "Victor Hugo"], answer: 1, why: "Pétrarque a écrit des centaines de sonnets pour Laure ; la forme est arrivée en France au XVIe siècle." },
          ],
          trap: "Compter les lettres au lieu des syllabes prononcées, ou compter le e muet en fin de vers et devant une voyelle. Le e final ne compte jamais, et il s'élide devant une voyelle ou un h muet.",
          method: "Recopiez le vers en séparant les syllabes par des barres, entourez chaque e muet et notez au-dessus ce qui le suit (consonne, voyelle, fin de vers). Recomptez une seconde fois en frappant chaque syllabe dans vos mains.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'images-poetiques',
          title: 'Les images poétiques : comparaison, métaphore, personnification',
          minutes: 30,
          objectives: [
            "Identifier une comparaison, une métaphore et une personnification.",
            "Distinguer le comparé, le comparant, l'outil de comparaison et le point commun.",
            "Analyser l'effet d'une image poétique dans un texte.",
            "Rédiger des images poétiques personnelles.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une image poétique ?",
              paragraphs: [
                "Une image poétique rapproche deux réalités différentes qui ont un point commun. Le poète ne dit pas seulement ce qu'il voit : il nous le fait voir autrement. Dire « ses yeux sont des étoiles », c'est rapprocher des yeux et des étoiles parce que les deux brillent.",
                "Toute image a deux éléments. Le comparé est ce dont on parle vraiment (les yeux). Le comparant est la réalité à laquelle on le rapproche (les étoiles). Le point commun est la qualité qu'ils partagent (l'éclat). Ces images sont aussi appelées figures de style : ce sont des manières de dire qui produisent un effet sur le lecteur.",
              ],
              box: { label: "Définition", text: "Comparé : ce dont on parle. Comparant : ce à quoi on le rapproche. Point commun : ce qu'ils partagent. Une image poétique rapproche un comparé et un comparant." },
            },
            {
              heading: "La comparaison",
              paragraphs: [
                "La comparaison rapproche le comparé et le comparant grâce à un outil de comparaison : comme, tel, tel que, ainsi que, pareil à, semblable à, ressembler à, on dirait. Dans « Mon cœur bat comme un tambour », le comparé est « mon cœur », le comparant « un tambour », l'outil « comme », et le point commun est le bruit fort et régulier.",
                "Les poètes aiment les comparaisons surprenantes. Paul Éluard écrit dans L'Amour la poésie (1929) : « La terre est bleue comme une orange ». La couleur ne correspond pas à l'orange, mais l'image fait voir la Terre comme un fruit rond et lumineux, vue de loin : le poème oblige le lecteur à regarder le monde autrement. Dans « L'Albatros », Baudelaire compare le poète à un grand oiseau des mers, majestueux en vol mais maladroit sur le pont d'un navire.",
              ],
            },
            {
              heading: "La métaphore",
              paragraphs: [
                "La métaphore rapproche aussi un comparé et un comparant, mais sans outil de comparaison. Au lieu de dire « Ses cheveux sont comme de l'or », on dit « Ses cheveux sont de l'or », ou même « l'or de ses cheveux ». La métaphore est plus forte et plus rapide que la comparaison : elle affirme que le comparé est le comparant.",
                "Parfois le comparé n'est même pas nommé : « Le vieux lion a quitté son trône » peut désigner un roi âgé. Quand une métaphore se prolonge sur plusieurs mots ou plusieurs vers, avec le même champ lexical, on parle de métaphore filée. Exemple écrit pour la leçon : « Mon cœur est un navire : il hisse ses voiles, affronte la tempête et cherche ton port. » Le vocabulaire de la mer (voiles, tempête, port) prolonge l'image du navire.",
              ],
              box: { label: "À retenir", text: "Comparaison : comparé + outil + comparant (« fort comme un lion »). Métaphore : rapprochement sans outil (« ce lion »). Métaphore filée : une métaphore prolongée par un même champ lexical." },
            },
            {
              heading: "La personnification",
              paragraphs: [
                "La personnification attribue des caractéristiques humaines (actions, sentiments, paroles, parties du corps) à une chose, un animal ou une idée. Dans « La ville s'endort et le vent pleure sous les portes », la ville et le vent agissent comme des personnes. La personnification rend le monde vivant et lui fait partager les émotions du poète.",
                "Elle est souvent associée à l'apostrophe. Dans « Le Lac » (1820), Lamartine s'écrie : « Ô temps, suspends ton vol ! » Le temps est traité comme un être à qui l'on parle et qui pourrait obéir. Quand la personnification représente une idée abstraite sous les traits d'un personnage (la Mort avec sa faux, la Justice avec sa balance), on parle d'allégorie.",
              ],
            },
            {
              heading: "Analyser une image : trois étapes",
              paragraphs: [
                "Repérer et nommer la figure ne suffit pas : il faut expliquer son effet. Procédez en trois étapes. D'abord, identifiez la figure en justifiant (présence ou absence d'un outil, trait humain prêté à une chose). Ensuite, nommez le comparé, le comparant et le point commun. Enfin, dites ce que l'image apporte : elle rend une idée concrète, elle exprime un sentiment, elle surprend, elle embellit ou au contraire rend inquiétant.",
                "Exemple : « La nuit, cette grande dame en manteau noir, marchait sur les toits. » C'est une personnification (la nuit marche) prolongée par une métaphore (« grande dame en manteau noir »). L'image rend la nuit mystérieuse et élégante, presque vivante.",
              ],
            },
          ],
          keyPoints: [
            "Une image rapproche un comparé et un comparant qui ont un point commun.",
            "Comparaison : avec un outil (comme, tel, pareil à, semblable à, ressembler à...).",
            "Métaphore : sans outil ; métaphore filée : prolongée par un même champ lexical.",
            "Personnification : prêter des traits humains à une chose, un animal ou une idée.",
            "Allégorie : une idée abstraite représentée par un personnage (la Mort, la Justice).",
            "Toujours expliquer l'effet de l'image, pas seulement la nommer.",
          ],
          example: {
            statement: "Vers écrits pour l'exercice : « Ton rire est un ruisseau qui court sur les galets ; / La lune, comme une lampe, veille sur le chemin ; / Et la forêt soupire en nous voyant passer. » Identifiez l'image de chaque vers, précisez le comparé et le comparant quand il y en a, puis expliquez l'effet d'ensemble.",
            solution: [
              "Vers 1 : métaphore, car il n'y a pas d'outil de comparaison. Comparé : « ton rire » ; comparant : « un ruisseau » ; point commun : le bruit léger, joyeux et continu. Elle est filée par « qui court sur les galets ».",
              "Vers 2 : comparaison, avec l'outil « comme ». Comparé : « la lune » ; comparant : « une lampe » ; point commun : la lumière douce qui éclaire. « Veille » ajoute une légère personnification.",
              "Vers 3 : personnification : la forêt « soupire », comme une personne émue.",
              "Effet d'ensemble : les trois images rendent la nature douce et vivante ; elle accompagne et protège le couple. Le monde entier semble partager le bonheur amoureux du poète.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Phrases écrites pour l'exercice. Nommez la figure de style de chaque phrase (comparaison, métaphore ou personnification) et justifiez en une ligne. a) « La mer gronde contre les rochers. » b) « Ton regard est un soleil d'hiver. » c) « Les nuages filaient tels des chevaux au galop. » d) « Le vieux fauteuil nous ouvrait ses bras. »",
              hint: "Cherchez d'abord un outil de comparaison. S'il n'y en a pas, demandez-vous si deux réalités sont rapprochées (métaphore) ou si une chose agit comme une personne (personnification).",
              solution: [
                "a) Personnification : la mer « gronde », comme une personne en colère.",
                "b) Métaphore : le regard est rapproché d'un soleil d'hiver sans outil de comparaison.",
                "c) Comparaison : les nuages sont comparés à des chevaux au galop grâce à l'outil « tels ».",
                "d) Personnification : le fauteuil « ouvre ses bras » comme une personne qui accueille.",
              ],
            },
            {
              level: 2,
              statement: "a) Dans la comparaison « Sa voix était douce comme du miel », relevez le comparé, le comparant, l'outil et le point commun. b) Transformez cette comparaison en métaphore. c) Transformez la phrase « Le vent soufflait fort » en personnification. d) Dites, pour b) et c), ce que votre image ajoute à la phrase de départ.",
              hint: "Pour passer de la comparaison à la métaphore, supprimez l'outil. Pour personnifier le vent, donnez-lui une action ou un sentiment humain.",
              solution: [
                "a) Comparé : « sa voix » ; comparant : « du miel » ; outil : « comme » ; point commun : la douceur (le mot « douce » l'exprime).",
                "b) Métaphore possible : « Sa voix était du miel » ou « le miel de sa voix ». La métaphore est plus rapide et plus frappante : la voix devient du miel.",
                "c) Personnification possible : « Le vent hurlait sa colère contre les volets. » Le vent crie et se met en colère, comme une personne.",
                "d) La métaphore rend la douceur presque sensible au goût ; la personnification rend le vent menaçant et vivant, et crée une atmosphère inquiétante.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Texte écrit pour l'exercice : « La ville est une ruche : ses rues bourdonnent dès l'aube, des milliers d'ouvrières pressées regagnent leurs alvéoles de béton, et le soir, la reine de la nuit, la lune, éteint une à une ses cellules. » a) Quelle est l'image principale de ce texte ? b) Relevez tous les mots qui la prolongent et nommez ce procédé. c) Repérez une personnification. d) Quelle vision de la ville le texte donne-t-il ? e) À votre tour, écrivez une métaphore filée de deux ou trois phrases sur la mer ou sur la forêt.",
              hint: "Cherchez le champ lexical des abeilles. Pour e), choisissez d'abord un comparant (par exemple un orchestre, un château, un monstre) et faites une liste de mots qui s'y rapportent.",
              solution: [
                "a) L'image principale est une métaphore : « La ville est une ruche » (comparé : la ville ; comparant : une ruche ; pas d'outil).",
                "b) Mots qui la prolongent : « bourdonnent », « ouvrières », « alvéoles », « reine », « cellules ». C'est une métaphore filée : le champ lexical des abeilles se poursuit dans toute la phrase.",
                "c) Personnification : la lune, « reine de la nuit », « éteint une à une ses cellules » : elle agit comme une personne.",
                "d) La ville apparaît comme une fourmilière humaine très active, bruyante et organisée, où les habitants ressemblent à des abeilles qui travaillent sans arrêt ; l'image suggère aussi que chacun y perd un peu de son individualité.",
                "e) Exemple : « La forêt est un orchestre. Les chênes tiennent les basses, le vent joue du violon dans les feuilles, et les oiseaux, solistes du matin, lancent leurs premières notes. » Comparant : l'orchestre ; mots qui le prolongent : basses, joue du violon, solistes, notes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les images poétiques.",
            statements: [
              { text: "« Il est fort comme un bœuf » est une comparaison.", true: true, why: "L'outil « comme » relie le comparé (il) au comparant (un bœuf)." },
              { text: "Une métaphore utilise toujours le mot « comme ».", true: false, why: "C'est l'inverse : la métaphore n'a pas d'outil de comparaison." },
              { text: "« Le soleil sourit aux enfants » est une personnification.", true: true, why: "Sourire est une action humaine prêtée au soleil." },
              { text: "Le comparé est ce dont on parle vraiment.", true: true, why: "Le comparant est la réalité à laquelle on le rapproche." },
              { text: "Une métaphore filée est une métaphore très courte.", true: false, why: "Elle est au contraire prolongée sur plusieurs mots ou vers, avec un même champ lexical." },
              { text: "« Ses yeux ressemblent à deux lacs » contient un outil de comparaison.", true: true, why: "« Ressembler à » est un outil de comparaison, comme « comme » ou « pareil à »." },
              { text: "Il suffit de nommer la figure pour analyser une image.", true: false, why: "Il faut aussi expliquer son effet : ce qu'elle fait voir, ressentir ou comprendre." },
            ],
          },
          quiz: [
            { q: "Dans « La terre est bleue comme une orange » (Éluard), quel est le comparant ?", options: ["La terre", "Une orange", "La couleur bleue", "Le mot « comme »"], answer: 1, why: "Le comparant est la réalité à laquelle on rapproche le comparé (la terre)." },
            { q: "« Le temps est un voleur » est :", options: ["une métaphore", "une comparaison", "une rime"], answer: 0, why: "Le temps et le voleur sont rapprochés sans outil de comparaison." },
            { q: "Quel mot n'est PAS un outil de comparaison ?", options: ["Tel", "Pareil à", "Semblable à", "Donc"], answer: 3, why: "« Donc » exprime une conséquence ; les trois autres introduisent une comparaison." },
            { q: "Dans « Ô temps, suspends ton vol ! », Lamartine emploie :", options: ["une comparaison avec un oiseau", "une rime riche", "une personnification", "une métaphore filée"], answer: 2, why: "Le temps est traité comme une personne à qui l'on parle et qui pourrait obéir." },
            { q: "La Mort représentée avec une faux est :", options: ["une comparaison", "une allégorie", "une rime"], answer: 1, why: "Une idée abstraite représentée sous les traits d'un personnage est une allégorie." },
          ],
          trap: "Confondre comparaison et métaphore en oubliant de chercher l'outil : « Il est comme un lion » est une comparaison, « C'est un lion » une métaphore. Autre erreur : nommer la figure sans expliquer son effet.",
          method: "Pour chaque image, remplissez un petit tableau à quatre cases : comparé, comparant, outil (ou « aucun »), point commun. La case « outil » vous donne la figure, la case « point commun » vous donne l'effet à expliquer.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'scene-de-rencontre',
          title: "L'amour sur scène et dans le roman : la scène de rencontre",
          minutes: 30,
          objectives: [
            "Identifier les caractéristiques d'une scène de rencontre amoureuse.",
            "Analyser les trois moments de la rencontre : l'effet, l'échange, le franchissement.",
            "Comparer la manière de dire l'amour au théâtre et dans le roman.",
            "Rédiger une courte scène de rencontre.",
          ],
          course: [
            {
              heading: "Un passage attendu : la scène de première vue",
              paragraphs: [
                "Dans beaucoup de romans et de pièces de théâtre, il existe un moment que le lecteur attend : la première rencontre des futurs amoureux. On l'appelle la scène de rencontre, ou scène de première vue. C'est un passage clé, car il lance l'histoire d'amour et annonce souvent ce qu'elle deviendra : heureuse, impossible ou tragique.",
                "Le critique Jean Rousset a étudié ces scènes dans un livre intitulé Leurs yeux se rencontrèrent (1981). Il montre qu'elles suivent souvent un même schéma, que les écrivains reprennent et transforment de siècle en siècle. Le décor est souvent public et animé (un bal, une fête, un voyage, une rue), ce qui rend la rencontre plus frappante : au milieu de la foule, deux personnes ne voient plus qu'elles-mêmes.",
              ],
            },
            {
              heading: "Les trois moments de la rencontre",
              paragraphs: [
                "Premier moment, l'effet : ce que la rencontre produit sur les personnages. C'est souvent un coup de foudre, un éblouissement. Le corps réagit : on rougit, on pâlit, on tremble, le cœur bat, on reste sans voix. Le personnage aimé est décrit par le regard de celui qui tombe amoureux, et il paraît exceptionnel.",
                "Deuxième moment, l'échange : les personnages communiquent, d'abord souvent par le regard (« leurs yeux se rencontrèrent »), puis par des gestes ou quelques paroles. Troisième moment, le franchissement : les personnages réduisent la distance qui les sépare, ou au contraire découvrent un obstacle (une famille ennemie, un mariage, une différence de rang social) qui rend leur amour difficile.",
              ],
              box: { label: "Repère", text: "Scène de rencontre (Jean Rousset, 1981) : l'effet (le trouble, le coup de foudre), l'échange (regards, gestes, paroles), le franchissement (le rapprochement, ou l'obstacle qui apparaît)." },
            },
            {
              heading: "La rencontre dans le roman",
              paragraphs: [
                "Le roman peut raconter la rencontre de l'intérieur, en montrant les pensées et les émotions des personnages. Dans La Princesse de Clèves de Madame de La Fayette (1678), la princesse, déjà mariée, rencontre le duc de Nemours lors d'un bal au Louvre : le roi lui demande de danser avec ce gentilhomme qui vient d'entrer et qu'elle n'a jamais vu. Toute la cour admire leur beauté. Cet amour restera impossible, car la princesse décide de rester fidèle à son devoir.",
                "Dans L'Éducation sentimentale de Gustave Flaubert (1869), le jeune Frédéric Moreau, dix-huit ans, voyage sur un bateau qui remonte la Seine en 1840. Il aperçoit une femme assise, Madame Arnoux, et le narrateur résume son émotion d'une phrase devenue célèbre : « Ce fut comme une apparition. » Frédéric l'observe longuement, puis rattrape un châle qui allait tomber dans l'eau : l'échange est minuscule, et cette femme mariée restera pour lui un amour inaccessible.",
              ],
            },
            {
              heading: "La rencontre au théâtre",
              paragraphs: [
                "Au théâtre, il n'y a pas de narrateur pour raconter les sentiments : tout passe par les répliques des personnages, par les didascalies (les indications de l'auteur) et par le jeu des comédiens (regards, gestes, silences). Dans Roméo et Juliette de Shakespeare (fin du XVIe siècle), les deux jeunes gens se rencontrent lors d'un bal chez les Capulet ; leurs premières répliques, échangées à deux voix, forment un sonnet, et la scène se termine par un baiser. Ils apprennent ensuite que leurs familles sont ennemies : l'obstacle apparaît aussitôt.",
                "Dans Le Jeu de l'amour et du hasard de Marivaux (1730), Silvia et Dorante, promis l'un à l'autre, se déguisent chacun en domestique pour observer l'autre en secret. Ils tombent amoureux malgré la différence de rang qu'ils croient voir. La comédie joue sur l'obstacle social et sur le langage de l'amour. La poésie, elle, peut dire une rencontre manquée : dans le sonnet « À une passante » des Fleurs du mal, Baudelaire croise dans une rue bruyante une femme dont le regard le bouleverse, avant qu'elle ne disparaisse pour toujours.",
              ],
              box: { label: "À retenir", text: "Le roman raconte la rencontre et peut dire les pensées des personnages ; le théâtre la montre par les répliques, les didascalies et le jeu des acteurs ; la poésie la chante en quelques vers." },
            },
          ],
          keyPoints: [
            "La scène de rencontre (ou de première vue) lance l'histoire d'amour et annonce son destin.",
            "Trois moments (Jean Rousset) : l'effet, l'échange, le franchissement ou l'obstacle.",
            "Décor fréquent : un lieu public et animé (bal, fête, voyage, rue).",
            "Roman : La Princesse de Clèves (1678), L'Éducation sentimentale (1869, « Ce fut comme une apparition »).",
            "Théâtre : Roméo et Juliette (Shakespeare), Le Jeu de l'amour et du hasard (Marivaux, 1730).",
            "Le théâtre montre par les répliques et les didascalies ; le roman peut raconter les pensées.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « Le car scolaire freina brusquement. Une nouvelle élève monta, son sac serré contre elle, et chercha une place des yeux. Quand son regard croisa celui de Malik, il sentit ses joues brûler et oublia la fin de sa phrase. Elle hésita, puis s'assit sur le siège libre à côté de lui. ‹ Tu crois qu'on arrivera à l'heure ? › demanda-t-elle. Malik, qui d'ordinaire parlait sans arrêt, ne put répondre qu'un faible oui. » Montrez que ce passage est une scène de rencontre en repérant le cadre et les trois moments.",
            solution: [
              "Le cadre : un lieu public et animé, le car scolaire, où la rencontre se produit par hasard.",
              "L'effet : le trouble de Malik se lit dans son corps (« il sentit ses joues brûler ») et dans sa parole (« oublia la fin de sa phrase », « un faible oui »).",
              "L'échange : d'abord le regard (« son regard croisa celui de Malik »), puis la parole (« Tu crois qu'on arrivera à l'heure ? »).",
              "Le franchissement : la jeune fille réduit la distance en s'asseyant « sur le siège libre à côté de lui ».",
              "Conclusion : le passage suit le schéma de la scène de rencontre, dans un cadre de la vie quotidienne ; le contraste entre le Malik bavard et le Malik muet rend son émotion visible et un peu comique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque élément d'une scène de rencontre au moment qui lui correspond (effet, échange ou franchissement) : a) Les deux personnages se tendent la main. b) Elle rougit et baisse les yeux. c) Ils échangent un long regard. d) Il traverse la salle pour la rejoindre. e) Il sent son cœur battre très fort. f) Elle lui demande son nom.",
              hint: "L'effet est ce que l'on ressent, l'échange est une communication, le franchissement est un rapprochement dans l'espace.",
              solution: [
                "Effet : b) elle rougit et baisse les yeux ; e) il sent son cœur battre très fort. Ce sont des réactions du corps.",
                "Échange : c) ils échangent un long regard ; f) elle lui demande son nom. Ce sont des communications, par le regard puis par la parole.",
                "Franchissement : a) ils se tendent la main ; d) il traverse la salle pour la rejoindre. La distance entre eux diminue.",
              ],
            },
            {
              level: 2,
              statement: "Comparez deux rencontres célèbres présentées dans la leçon : celle de la princesse de Clèves et du duc de Nemours, et celle de Frédéric Moreau et de Madame Arnoux. Pour chacune, précisez : a) le lieu ; b) l'obstacle qui empêche l'amour d'être heureux ; c) ce qui permet l'échange entre les personnages. Concluez en une phrase sur ce que ces deux scènes ont en commun.",
              hint: "Reprenez la partie « La rencontre dans le roman » du cours et faites un tableau à deux colonnes.",
              solution: [
                "a) Lieu : un bal au Louvre, devant toute la cour, pour la princesse de Clèves ; un bateau sur la Seine, parmi les voyageurs, pour Frédéric.",
                "b) Obstacle : dans les deux cas, la femme est mariée. La princesse choisit de rester fidèle à son devoir ; Madame Arnoux restera pour Frédéric un amour inaccessible.",
                "c) Échange : la danse demandée par le roi réunit la princesse et le duc ; pour Frédéric, c'est d'abord le regard, puis un petit geste, le châle rattrapé avant qu'il ne tombe dans l'eau.",
                "Conclusion : dans les deux romans, la rencontre a lieu dans un espace public et provoque un amour fort mais impossible, qui va organiser tout le récit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez une scène de rencontre de théâtre (dix à quinze répliques) entre deux personnages qui se croisent dans une bibliothèque et veulent emprunter le même livre. Votre scène comportera : au moins trois didascalies montrant le trouble (effet) ; un échange de regards puis de paroles ; un franchissement (ou un obstacle) à la fin. Ensuite, expliquez en trois phrases ce que le théâtre vous a obligé à faire autrement qu'un roman.",
              hint: "Au théâtre, le narrateur n'existe pas : les sentiments doivent passer par ce que disent les personnages et par les didascalies (gestes, ton, silences), écrites en italique ou entre parenthèses.",
              solution: [
                "Exemple de début : « LÉA, tendant la main vers le livre. Oh ! Pardon. / HUGO, tendant la main en même temps. Non, c'est moi... (Leurs mains se touchent. Ils se regardent un instant, puis reculent, gênés.) / LÉA, rougissant. Vous le lisiez aussi ? / HUGO. Je voulais le relire. C'est mon livre préféré. (Un silence.) »",
                "Suite possible : « LÉA. Le mien aussi. / HUGO, souriant enfin. Alors prenez-le. Vous me direz ce que vous en pensez. / LÉA. Et comment vous le dire ? / HUGO, sortant un crayon. Mercredi, ici, à la même heure ? / LÉA, après une hésitation. D'accord. (Elle serre le livre contre elle et sort. Hugo reste immobile.) »",
                "Ce que l'on vérifie : l'effet est montré par les didascalies (« rougissant », « gênés », les silences) ; l'échange passe du regard (« Ils se regardent ») à la parole ; le franchissement est le rendez-vous fixé pour mercredi.",
                "Explication : au théâtre, aucun narrateur ne peut dire « elle était troublée » ; il faut montrer le trouble par les gestes, le ton et les silences notés dans les didascalies. Les sentiments doivent aussi passer par les répliques elles-mêmes, souvent courtes et hésitantes. Enfin, la scène se déroule au présent, sous les yeux du spectateur.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque œuvre au lieu de la rencontre amoureuse.",
            pairs: [
              { left: "Roméo et Juliette (Shakespeare)", right: "Un bal chez les Capulet" },
              { left: "La Princesse de Clèves (Mme de La Fayette)", right: "Un bal à la cour, au Louvre" },
              { left: "L'Éducation sentimentale (Flaubert)", right: "Un bateau sur la Seine" },
              { left: "« À une passante » (Baudelaire)", right: "Une rue bruyante de la ville" },
              { left: "Le Jeu de l'amour et du hasard (Marivaux)", right: "La maison du père de Silvia" },
            ],
          },
          quiz: [
            { q: "Quel critique a étudié les scènes de rencontre dans Leurs yeux se rencontrèrent ?", options: ["Jean Rousset", "Gustave Flaubert", "Jean Racine"], answer: 0, why: "Jean Rousset a publié cet essai en 1981 ; il y dégage le schéma de la scène de première vue." },
            { q: "Quel moment de la rencontre correspond au trouble physique (rougir, trembler) ?", options: ["L'échange", "Le franchissement", "L'effet", "Le dénouement"], answer: 2, why: "L'effet est ce que la rencontre produit sur les personnages, souvent visible dans le corps." },
            { q: "Quelle phrase de Flaubert résume la rencontre de Frédéric et de Madame Arnoux ?", options: ["« Il la regarda sans rien dire, longuement. »", "« Ce fut comme une apparition. »", "« Il était une fois. »", "« Je vis, je meurs. »"], answer: 1, why: "Cette phrase de L'Éducation sentimentale (1869) dit l'éblouissement de Frédéric." },
            { q: "Au théâtre, comment le spectateur comprend-il le trouble d'un personnage ?", options: ["Par les commentaires du narrateur", "Par les notes en bas de page", "Par le résumé du programme", "Par le jeu et les répliques"], answer: 3, why: "Le théâtre n'a pas de narrateur : tout passe par les paroles et par le jeu indiqué dans les didascalies." },
            { q: "Quel obstacle sépare Roméo et Juliette ?", options: ["La haine entre leurs familles", "Une grande différence d'âge", "Un long voyage en mer lointaine"], answer: 0, why: "Les Montaigu et les Capulet sont ennemis : les deux jeunes gens l'apprennent juste après leur rencontre." },
          ],
          trap: "Résumer la scène au lieu de l'analyser. Il ne suffit pas de raconter qui rencontre qui : il faut repérer l'effet, l'échange et le franchissement, et citer les mots du texte qui les montrent.",
          method: "Lisez la scène avec trois surligneurs : une couleur pour le trouble (corps, émotions), une pour la communication (regards, gestes, paroles), une pour le rapprochement ou l'obstacle. Votre analyse suivra ces trois couleurs dans l'ordre.",
        },
      ],
    },
    {
      id: 'phrase-complexe',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'propositions',
          title: "Identifier les propositions d'une phrase complexe",
          minutes: 25,
          objectives: [
            "Distinguer la phrase simple et la phrase complexe.",
            "Identifier et délimiter les propositions d'une phrase complexe.",
            "Distinguer la juxtaposition, la coordination et la subordination.",
            "Identifier la proposition principale et la proposition subordonnée.",
          ],
          course: [
            {
              heading: "Phrase simple et phrase complexe",
              paragraphs: [
                "Une proposition est un groupe de mots organisé autour d'un verbe conjugué, avec en général son sujet et ses compléments. Une phrase qui ne contient qu'un seul verbe conjugué ne contient qu'une seule proposition : c'est une phrase simple. Exemple : « Le chat dort sur le canapé. »",
                "Une phrase qui contient plusieurs verbes conjugués contient plusieurs propositions : c'est une phrase complexe. Exemple : « Le chat dort sur le canapé pendant que le chien garde la porte. » Il y a deux verbes conjugués (dort, garde), donc deux propositions.",
                "Attention aux pièges. Un verbe à un temps composé ne compte qu'une fois : dans « Il a mangé », « a mangé » forme un seul verbe conjugué. Un infinitif ou un participe employé seul ne compte pas ici : « Elle veut partir » ne contient qu'un verbe conjugué (veut), c'est une phrase simple.",
              ],
              box: { label: "Règle", text: "Autant de verbes conjugués, autant de propositions. Un seul verbe conjugué : phrase simple. Plusieurs verbes conjugués : phrase complexe. Un temps composé (a mangé) compte pour un seul verbe." },
            },
            {
              heading: "Délimiter les propositions",
              paragraphs: [
                "Pour analyser une phrase complexe, soulignez d'abord les verbes conjugués, puis placez chaque proposition entre crochets. Chaque proposition rassemble un verbe conjugué et les mots qui dépendent de lui : « [Le soleil se couche], [les oiseaux se taisent]. »",
                "Une proposition peut être placée à l'intérieur d'une autre. Dans « Le livre que Léa m'a prêté est passionnant », la proposition « que Léa m'a prêté » est insérée au milieu de « Le livre est passionnant ». On note : [Le livre [que Léa m'a prêté] est passionnant]. On dit que la proposition est enchâssée.",
              ],
            },
            {
              heading: "Juxtaposition et coordination",
              paragraphs: [
                "Des propositions sont juxtaposées quand elles sont simplement placées l'une à côté de l'autre et séparées par un signe de ponctuation (virgule, point-virgule, deux-points), sans mot de liaison : « Il pleuvait ; nous sommes restés à la maison. » Chacune pourrait former une phrase à elle seule : ce sont des propositions indépendantes.",
                "Des propositions sont coordonnées quand elles sont reliées par une conjonction de coordination (mais, ou, et, donc, or, ni, car) ou par un adverbe de liaison (puis, ensuite, alors, pourtant, cependant, en effet) : « J'ai couru, mais j'ai raté le bus. » Les propositions coordonnées restent indépendantes l'une de l'autre : chacune a un sens complet.",
                "La juxtaposition et la coordination n'expriment pas toujours le lien logique de la même façon. Dans « Il était malade, il n'est pas venu », le lecteur devine la cause ; dans « Il n'est pas venu, car il était malade », la conjonction « car » l'affirme clairement.",
              ],
            },
            {
              heading: "La subordination : principale et subordonnée",
              paragraphs: [
                "Une proposition subordonnée dépend d'une autre proposition, appelée principale : elle ne peut pas former une phrase à elle seule. Dans « Je reste à la maison parce qu'il pleut », « parce qu'il pleut » est subordonnée ; « Je reste à la maison » est la principale.",
                "La subordonnée est introduite par un mot subordonnant. Ce peut être un pronom relatif (qui, que, quoi, dont, où, lequel...), une conjonction de subordination (que, quand, lorsque, parce que, puisque, si, bien que, afin que...) ou un mot interrogatif dans une question rapportée (« Je me demande où il va »).",
                "On distingue trois grandes familles de subordonnées, que vous étudierez cette année : la subordonnée relative (introduite par un pronom relatif), la subordonnée conjonctive complétive (introduite par la conjonction « que », elle complète souvent un verbe) et la subordonnée conjonctive circonstancielle (elle exprime une circonstance : le temps, la cause, le but, la conséquence, l'opposition...).",
              ],
              box: { label: "À retenir", text: "Juxtaposition : ponctuation sans mot de liaison. Coordination : mais, ou, et, donc, or, ni, car (ou adverbe de liaison). Subordination : un mot subordonnant rattache une subordonnée à une principale." },
            },
          ],
          keyPoints: [
            "Une proposition s'organise autour d'un verbe conjugué.",
            "Phrase simple : un seul verbe conjugué. Phrase complexe : plusieurs verbes conjugués.",
            "Un temps composé compte pour un verbe ; un infinitif seul ne compte pas.",
            "Juxtaposition : propositions séparées par une ponctuation, sans mot de liaison.",
            "Coordination : mais, ou, et, donc, or, ni, car, ou un adverbe de liaison.",
            "Subordination : la subordonnée, introduite par un mot subordonnant, dépend de la principale.",
          ],
          example: {
            statement: "Analysez la phrase suivante : « Quand la pluie cessa, les enfants sortirent dans la cour et ils jouèrent au ballon jusqu'au soir. » Combien contient-elle de propositions ? Délimitez-les et nommez les liens entre elles.",
            solution: [
              "Étape 1 : les verbes conjugués sont « cessa », « sortirent » et « jouèrent ». Il y a donc trois propositions : c'est une phrase complexe.",
              "Étape 2 : on délimite : [Quand la pluie cessa], [les enfants sortirent dans la cour] [et ils jouèrent au ballon jusqu'au soir].",
              "Étape 3 : « Quand la pluie cessa » est une proposition subordonnée, introduite par la conjonction de subordination « quand » ; elle ne peut pas former une phrase seule.",
              "Étape 4 : « les enfants sortirent dans la cour » est la proposition principale dont dépend la subordonnée.",
              "Étape 5 : « et ils jouèrent au ballon jusqu'au soir » est coordonnée à la principale par la conjonction de coordination « et ».",
              "Réponse : trois propositions ; une subordonnée (introduite par « quand »), une principale, et une proposition coordonnée par « et ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, relevez les verbes conjugués, dites combien elle contient de propositions et si elle est simple ou complexe. a) « Le chat dort sur le canapé. » b) « Le soleil se couche, les oiseaux se taisent, la nuit tombe. » c) « J'ai cherché mes clés partout mais je ne les ai pas trouvées. » d) « Le film que nous avons vu hier soir était très drôle. » e) « Il veut partir en voyage. »",
              hint: "Ne comptez que les verbes conjugués. Un temps composé (ai cherché) compte pour un seul verbe, et un infinitif seul (partir) ne compte pas.",
              solution: [
                "a) Un verbe conjugué : « dort ». Une proposition : phrase simple.",
                "b) Trois verbes conjugués : « se couche », « se taisent », « tombe ». Trois propositions : phrase complexe.",
                "c) Deux verbes conjugués : « ai cherché », « ai trouvées » (la négation ne... pas entoure l'auxiliaire). Deux propositions : phrase complexe.",
                "d) Deux verbes conjugués : « avons vu », « était ». Deux propositions : phrase complexe.",
                "e) Un seul verbe conjugué : « veut » ; « partir » est un infinitif. Une proposition : phrase simple.",
              ],
            },
            {
              level: 2,
              statement: "Délimitez les propositions de chaque phrase, puis dites si elles sont juxtaposées, coordonnées ou si l'une est subordonnée à l'autre. Relevez le mot ou le signe qui les relie. a) « Il pleuvait ; nous sommes restés à la maison. » b) « Elle a raté le bus, donc elle est arrivée en retard. » c) « Je pense que ce livre vous plaira. » d) « Le garçon qui court là-bas est mon cousin. » e) « Nous irons au parc s'il fait beau. » f) « Il est malade, car il a pris froid. »",
              hint: "Cherchez d'abord un mot de liaison. S'il n'y en a pas, c'est une juxtaposition. Si c'est l'un des mots « mais, ou, et, donc, or, ni, car », c'est une coordination. Sinon, vérifiez si l'une des propositions peut vivre seule.",
              solution: [
                "a) [Il pleuvait] ; [nous sommes restés à la maison] : propositions juxtaposées, reliées par le point-virgule.",
                "b) [Elle a raté le bus], [donc elle est arrivée en retard] : propositions coordonnées par « donc ».",
                "c) [Je pense] [que ce livre vous plaira] : subordination ; « que ce livre vous plaira » est subordonnée, introduite par la conjonction « que ».",
                "d) [Le garçon [qui court là-bas] est mon cousin] : subordination ; « qui court là-bas » est une subordonnée relative enchâssée, introduite par le pronom relatif « qui ».",
                "e) [Nous irons au parc] [s'il fait beau] : subordination ; « s'il fait beau » est subordonnée, introduite par la conjonction « si ».",
                "f) [Il est malade], [car il a pris froid] : propositions coordonnées par « car ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Réunissez les trois phrases simples « Le vent soufflait. Les volets claquaient. Léa ne dormait pas. » en une seule phrase de trois manières : par juxtaposition, par coordination, puis en employant au moins une subordonnée. b) Analysez la phrase suivante : délimitez les propositions et nommez chacune. « Lorsque Hugo ouvrit la porte, il découvrit une lettre que quelqu'un avait glissée sous le paillasson, mais il n'osa pas la lire. »",
              hint: "Pour b), commencez par compter les verbes conjugués (attention au plus-que-parfait et à l'infinitif). Puis repérez les mots subordonnants et la conjonction de coordination.",
              solution: [
                "a) Juxtaposition : « Le vent soufflait, les volets claquaient : Léa ne dormait pas. »",
                "Coordination : « Le vent soufflait et les volets claquaient, donc Léa ne dormait pas. »",
                "Subordination : « Léa ne dormait pas parce que le vent soufflait et que les volets claquaient. » ou « Comme le vent soufflait, les volets claquaient et Léa ne dormait pas. »",
                "b) Verbes conjugués : « ouvrit », « découvrit », « avait glissée », « osa » ; « lire » est un infinitif. Il y a donc quatre propositions.",
                "[Lorsque Hugo ouvrit la porte] : subordonnée conjonctive circonstancielle (de temps), introduite par « lorsque ».",
                "[il découvrit une lettre] : proposition principale.",
                "[que quelqu'un avait glissée sous le paillasson] : subordonnée relative, introduite par le pronom relatif « que », qui reprend l'antécédent « lettre ».",
                "[mais il n'osa pas la lire] : proposition coordonnée à la principale par « mais ». Réponse : quatre propositions, une principale, deux subordonnées et une coordonnée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de l'analyse d'une phrase complexe.",
            items: [
              "Souligner les verbes conjugués",
              "Compter ces verbes : il y a autant de propositions",
              "Délimiter chaque proposition entre crochets",
              "Observer ce qui relie les propositions : ponctuation, conjonction ou mot subordonnant",
              "Nommer le rapport : juxtaposition, coordination ou subordination",
            ],
          },
          quiz: [
            { q: "Combien de propositions compte « Il pleut, je prends mon parapluie et je sors » ?", options: ["Une", "Deux", "Trois", "Quatre"], answer: 2, why: "Trois verbes conjugués (pleut, prends, sors), donc trois propositions." },
            { q: "Quel mot est une conjonction de coordination ?", options: ["Quand", "Car", "Parce que", "Lorsque"], answer: 1, why: "« Car » fait partie de la liste mais, ou, et, donc, or, ni, car. Les trois autres sont des conjonctions de subordination." },
            { q: "Dans « Je sais qu'il viendra », la proposition « qu'il viendra » est :", options: ["indépendante", "principale", "juxtaposée", "subordonnée"], answer: 3, why: "Elle est introduite par la conjonction « que » et dépend de la principale « Je sais »." },
            { q: "Combien de verbes conjugués y a-t-il dans « Elle a voulu partir » ?", options: ["Un", "Deux", "Trois"], answer: 0, why: "« a voulu » est un seul verbe au passé composé ; « partir » est un infinitif." },
            { q: "Deux propositions séparées par un point-virgule, sans mot de liaison, sont :", options: ["coordonnées", "juxtaposées", "subordonnées"], answer: 1, why: "La juxtaposition relie les propositions par la seule ponctuation." },
          ],
          trap: "Compter les infinitifs et les participes comme des verbes conjugués, ou compter deux fois un temps composé. Dans « Il a voulu partir », il n'y a qu'un verbe conjugué, donc une seule proposition.",
          method: "Avant toute analyse, soulignez au crayon tous les verbes conjugués et écrivez leur nombre en marge. Après avoir délimité les propositions, vérifiez que chaque paire de crochets contient exactement un verbe conjugué.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subordonnee-relative',
          title: 'La proposition subordonnée relative',
          minutes: 30,
          objectives: [
            "Identifier une proposition subordonnée relative et son antécédent.",
            "Employer les pronoms relatifs simples et composés.",
            "Identifier la fonction du pronom relatif dans la subordonnée.",
            "Réaliser les accords commandés par le pronom relatif.",
          ],
          course: [
            {
              heading: "Reconnaître une subordonnée relative",
              paragraphs: [
                "La proposition subordonnée relative est introduite par un pronom relatif. Elle complète un nom (ou un pronom) placé juste avant elle, que l'on appelle l'antécédent. Dans « Le chien qui aboie appartient au voisin », la relative est « qui aboie », le pronom relatif est « qui » et l'antécédent est « chien ».",
                "La relative joue le même rôle qu'un adjectif : elle précise ou caractérise l'antécédent. « Un chien qui aboie » ressemble à « un chien aboyeur ». C'est une expansion du nom ; sa fonction est d'être complément de l'antécédent. On peut souvent la supprimer sans rendre la phrase incorrecte : « Le chien appartient au voisin. » La phrase perd une précision, mais reste correcte.",
              ],
              box: { label: "Définition", text: "La subordonnée relative est introduite par un pronom relatif qui reprend un nom ou un pronom placé avant lui, l'antécédent. Elle est complément de l'antécédent, comme un adjectif." },
            },
            {
              heading: "Les pronoms relatifs",
              paragraphs: [
                "Les pronoms relatifs simples sont : qui, que (qu' devant une voyelle), quoi, dont, où. Les pronoms relatifs composés varient en genre et en nombre : lequel, laquelle, lesquels, lesquelles. Avec les prépositions « à » et « de », certains se contractent : auquel, auxquels, auxquelles, duquel, desquels, desquelles (mais on écrit « à laquelle » et « de laquelle »).",
                "Les pronoms composés s'emploient surtout après une préposition : « la table sur laquelle j'écris », « l'ami auquel je pense », « les raisons pour lesquelles il est parti ». Pour une personne, on peut aussi dire « à qui » : « l'ami à qui je pense ».",
              ],
            },
            {
              heading: "La fonction du pronom relatif",
              paragraphs: [
                "Le pronom relatif a une fonction à l'intérieur de la subordonnée. Pour la trouver, remplacez le pronom par son antécédent et reconstruisez une phrase simple. « Le gâteau que j'ai préparé » devient « j'ai préparé le gâteau » : « que » est donc COD du verbe « ai préparé ».",
                "« Qui » est sujet du verbe de la relative : « l'élève qui parle » (l'élève parle). « Que » est le plus souvent COD : « le film que nous regardons » (nous regardons le film). « Où » est complément circonstanciel de lieu ou de temps : « la ville où j'habite », « le jour où il est arrivé ».",
                "« Dont » remplace un complément introduit par la préposition « de ». Il peut être complément du nom (« l'auteur dont j'aime les livres » : j'aime les livres de l'auteur), COI (« le film dont nous parlons » : nous parlons du film) ou complément de l'adjectif (« le dessin dont je suis fier » : je suis fier du dessin).",
              ],
              box: { label: "À retenir", text: "Qui : sujet. Que : COD. Où : complément circonstanciel de lieu ou de temps. Dont : complément introduit par « de » (complément du nom, COI, complément de l'adjectif)." },
            },
            {
              heading: "Les accords et un cas particulier",
              paragraphs: [
                "Le pronom relatif prend le genre, le nombre et la personne de son antécédent. Avec « qui » sujet, le verbe s'accorde donc avec l'antécédent : « C'est moi qui ai raison », « C'est nous qui avons gagné », « les élèves qui sont venus ».",
                "Avec « que » COD placé avant le verbe, le participe passé employé avec l'auxiliaire avoir s'accorde avec l'antécédent : « les lettres que j'ai écrites » (que = les lettres, féminin pluriel). C'est une règle d'orthographe très fréquente dans les dictées.",
                "Certaines relatives n'ont pas d'antécédent : on dit qu'elles sont sans antécédent. Elles se trouvent surtout dans des proverbes : « Qui vivra verra. » Le pronom « qui » y signifie « celui qui ». Ces relatives occupent alors une fonction du nom, comme sujet du verbe.",
              ],
            },
          ],
          keyPoints: [
            "La relative est introduite par un pronom relatif qui reprend un antécédent.",
            "Elle est complément de l'antécédent et joue le rôle d'un adjectif.",
            "Pronoms simples : qui, que, quoi, dont, où ; composés : lequel, laquelle, auquel, duquel...",
            "Fonction du pronom : qui sujet, que COD, où complément de lieu ou de temps, dont complément introduit par « de ».",
            "Pour trouver la fonction, remplacez le pronom par l'antécédent.",
            "Accords : « C'est moi qui ai » ; « les lettres que j'ai écrites ».",
          ],
          example: {
            statement: "Dans la phrase « Le musée où nous sommes allés dimanche expose des tableaux dont les couleurs sont éclatantes », relevez les subordonnées relatives, leur pronom relatif, leur antécédent et la fonction de chaque pronom. Quelle est la proposition principale ?",
            solution: [
              "Première relative : « où nous sommes allés dimanche ». Pronom relatif : « où » ; antécédent : « musée ».",
              "Fonction de « où » : on reconstruit « nous sommes allés au musée dimanche » ; « où » est complément circonstanciel de lieu.",
              "Seconde relative : « dont les couleurs sont éclatantes ». Pronom relatif : « dont » ; antécédent : « tableaux ».",
              "Fonction de « dont » : on reconstruit « les couleurs des tableaux sont éclatantes » ; « dont » est complément du nom « couleurs ».",
              "Proposition principale, sans les relatives : « Le musée expose des tableaux ».",
              "Réponse : deux relatives, compléments de leurs antécédents « musée » et « tableaux » ; « où » est complément circonstanciel de lieu, « dont » est complément du nom.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, recopiez la subordonnée relative, entourez le pronom relatif et indiquez son antécédent. a) « J'ai retrouvé le carnet que ma grand-mère m'avait offert. » b) « Les élèves qui ont fini peuvent sortir. » c) « C'est la ville où mes parents se sont rencontrés. » d) « Voici le stylo avec lequel j'ai signé. » e) « Le sport dont il rêve est l'escalade. »",
              hint: "La relative commence par le pronom relatif (ou par la préposition qui le précède) et s'arrête à la fin du groupe qui dépend de son verbe. L'antécédent est le nom placé juste avant.",
              solution: [
                "a) « que ma grand-mère m'avait offert » ; pronom « que » ; antécédent « carnet ».",
                "b) « qui ont fini » ; pronom « qui » ; antécédent « élèves ».",
                "c) « où mes parents se sont rencontrés » ; pronom « où » ; antécédent « ville ».",
                "d) « avec lequel j'ai signé » ; pronom « lequel » (précédé de la préposition « avec ») ; antécédent « stylo ».",
                "e) « dont il rêve » ; pronom « dont » ; antécédent « sport ».",
              ],
            },
            {
              level: 2,
              statement: "Donnez la fonction du pronom relatif dans chaque phrase, en reconstruisant la phrase simple qui la justifie. a) « La fille qui chante est ma voisine. » b) « Le dessert que nous avons choisi est une tarte. » c) « L'été où nous sommes partis en Bretagne fut pluvieux. » d) « Le film dont nous parlons a gagné un prix. » e) « C'est un champion dont je connais le nom. » f) « Le village où j'habite est calme. »",
              hint: "Remplacez le pronom relatif par son antécédent : « qui chante » devient « la fille chante ». Pour « dont », remettez la préposition « de ».",
              solution: [
                "a) « la fille chante » : « qui » est sujet du verbe « chante ».",
                "b) « nous avons choisi le dessert » : « que » est COD du verbe « avons choisi ».",
                "c) « nous sommes partis en Bretagne cet été-là » : « où » est complément circonstanciel de temps.",
                "d) « nous parlons du film » : « dont » est COI du verbe « parlons » (parler de quelque chose).",
                "e) « je connais le nom du champion » : « dont » est complément du nom « nom ».",
                "f) « j'habite dans le village » : « où » est complément circonstanciel de lieu.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Réunissez chaque paire de phrases en une seule, à l'aide d'une subordonnée relative introduite par le pronom qui convient, puis justifiez votre choix. a) « J'ai lu un roman. L'auteur de ce roman est belge. » b) « Voici la maison. Mon grand-père est né dans cette maison. » c) « C'est une amie. Je tiens beaucoup à cette amie. » d) « Voici le bureau. J'ai posé mes clés sur ce bureau. » e) « Les photos sont floues. Mon frère a pris ces photos hier. » (attention à l'accord du participe passé).",
              hint: "Repérez dans la seconde phrase le groupe qui répète le nom, puis la préposition qui le précède : « de » appelle « dont », « dans » peut appeler « où », « à » appelle « auquel, à laquelle » ou « à qui », « sur » appelle « sur lequel ».",
              solution: [
                "a) « J'ai lu un roman dont l'auteur est belge. » « Dont » remplace « de ce roman », complément du nom « auteur ».",
                "b) « Voici la maison où mon grand-père est né. » (ou « dans laquelle ») « Où » remplace « dans cette maison », complément circonstanciel de lieu.",
                "c) « C'est une amie à laquelle je tiens beaucoup. » (ou « à qui ») Le verbe se construit avec « à » (tenir à quelqu'un), d'où « à laquelle », au féminin singulier comme « amie ».",
                "d) « Voici le bureau sur lequel j'ai posé mes clés. » La préposition « sur » est suivie du pronom composé « lequel », masculin singulier comme « bureau ».",
                "e) « Les photos que mon frère a prises hier sont floues. » « Que » remplace « ces photos », COD placé avant le verbe : le participe passé « pris » s'accorde au féminin pluriel, « prises ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos connaissances sur la subordonnée relative.",
            statements: [
              { text: "Le pronom relatif reprend un nom placé avant lui, appelé antécédent.", true: true, why: "C'est ce qui le distingue : il « relie » la subordonnée à ce nom." },
              { text: "Dans « le gâteau que j'ai fait », « que » est sujet.", true: false, why: "« J'ai fait le gâteau » : « que » est COD ; le sujet est « j' »." },
              { text: "« Dont » remplace un complément introduit par « de ».", true: true, why: "« Le film dont nous parlons » : nous parlons du film." },
              { text: "On peut souvent supprimer une relative sans rendre la phrase incorrecte.", true: true, why: "Elle complète un nom comme un adjectif : la phrase perd une précision mais reste correcte." },
              { text: "« Où » ne peut exprimer que le lieu.", true: false, why: "Il exprime aussi le temps : « le jour où il est arrivé »." },
              { text: "Dans « C'est moi qui ai gagné », le verbe s'accorde avec « moi ».", true: true, why: "« Qui » a pour antécédent « moi » : le verbe est à la première personne du singulier." },
              { text: "« Lequel » est un pronom relatif simple.", true: false, why: "C'est un pronom relatif composé, qui varie en genre et en nombre." },
            ],
          },
          quiz: [
            { q: "Dans « Le chien que j'ai adopté est joueur », quel est l'antécédent ?", options: ["Le chien", "que", "j'ai adopté", "joueur"], answer: 0, why: "L'antécédent est le nom repris par le pronom relatif « que »." },
            { q: "Quelle est la fonction de « qui » dans « L'élève qui parle est Lina » ?", options: ["COD", "CC de lieu", "Complément du nom", "Sujet"], answer: 3, why: "On reconstruit « l'élève parle » : « qui » est sujet du verbe « parle »." },
            { q: "Complétez : « Le livre ... je vous parle est passionnant. »", options: ["auquel", "qui", "dont", "lequel"], answer: 2, why: "On parle de quelque chose : le complément introduit par « de » est remplacé par « dont »." },
            { q: "Quelle phrase est correctement accordée ?", options: ["Les fleurs que j'ai cueilli", "Les fleurs que j'ai cueillies", "Les fleurs que j'ai cueillis", "Les fleurs que j'ai cueillirent"], answer: 1, why: "« Que » reprend « les fleurs », COD placé avant l'auxiliaire avoir : le participe s'accorde au féminin pluriel." },
            { q: "Quel pronom relatif peut exprimer le lieu ou le temps ?", options: ["Dont", "Où", "Lesquelles", "Qui"], answer: 1, why: "« Où » est complément circonstanciel de lieu (la ville où) ou de temps (le jour où)." },
          ],
          trap: "Croire que « que » est toujours COD sans vérifier, ou oublier d'accorder le participe passé avec « que » : on écrit « les lettres que j'ai écrites », car « que » reprend « les lettres », placé avant le verbe.",
          method: "Pour chaque relative, faites la manipulation de remplacement : effacez le pronom relatif, mettez l'antécédent à sa place et lisez la phrase simple obtenue. La place qu'y occupe l'antécédent vous donne la fonction du pronom.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'subordonnee-completive',
          title: 'La proposition subordonnée conjonctive complétive',
          minutes: 30,
          objectives: [
            "Identifier une subordonnée conjonctive complétive introduite par « que ».",
            "Identifier sa fonction, le plus souvent COD du verbe de la principale.",
            "Choisir le mode du verbe de la complétive : indicatif ou subjonctif.",
            "Distinguer « que » conjonction de subordination et « que » pronom relatif.",
          ],
          course: [
            {
              heading: "Reconnaître une complétive",
              paragraphs: [
                "La subordonnée conjonctive complétive est introduite par la conjonction de subordination « que » (« qu' » devant une voyelle). Elle complète le plus souvent le verbe de la principale : « Je sais [que la Terre tourne autour du Soleil]. » On l'appelle « complétive » parce qu'elle complète, et « conjonctive » parce qu'elle commence par une conjonction.",
                "La conjonction « que » sert seulement à relier : elle n'a aucune fonction dans la subordonnée et ne reprend aucun nom. On reconnaît la complétive grâce à deux tests. On peut la remplacer par « cela » ou par le pronom « le » : « Je sais cela », « Je le sais ». Et on ne peut pas la supprimer : « Je sais » tout seul semble incomplet.",
              ],
              box: { label: "Définition", text: "La complétive est une subordonnée introduite par la conjonction « que », qui n'a pas de fonction dans la subordonnée. Elle peut être remplacée par « cela » ou « le », et ne peut généralement pas être supprimée." },
            },
            {
              heading: "Les fonctions de la complétive",
              paragraphs: [
                "Le plus souvent, la complétive est COD du verbe de la principale. Elle suit des verbes de déclaration (dire, annoncer, affirmer), d'opinion (penser, croire), de perception (voir, entendre, remarquer), de connaissance (savoir, apprendre), de volonté ou de sentiment (vouloir, souhaiter, craindre, regretter) : « Le professeur annonce que l'évaluation aura lieu jeudi. »",
                "Elle peut aussi avoir d'autres fonctions. Sujet, quand elle est placée en tête de phrase : « Qu'il soit en retard m'étonne » (cela m'étonne). Attribut du sujet, après le verbe être : « L'essentiel est que vous soyez en bonne santé. » Complément d'un adjectif : « Je suis certain qu'il réussira » (certain de cela), ou d'un nom : « la peur qu'il ne revienne pas ».",
              ],
            },
            {
              heading: "Indicatif ou subjonctif ?",
              paragraphs: [
                "Le verbe de la complétive se met à l'indicatif quand le fait est présenté comme réel ou certain. C'est le cas après les verbes de déclaration, d'opinion, de perception et de certitude : « Je crois qu'il viendra », « Nous savons que Léo a raison », « On voit que la nuit tombe ». Attention : « espérer que » se construit avec l'indicatif (« J'espère qu'il fera beau »).",
                "Le verbe se met au subjonctif quand le fait est seulement envisagé, voulu, craint ou mis en doute : après les verbes de volonté, de souhait, d'ordre et d'obligation (vouloir, souhaiter, exiger, il faut), de sentiment (être content, regretter, avoir peur, craindre) et de doute (douter) : « Je veux que vous finissiez », « Il faut que nous partions », « Je doute qu'elle sache ».",
                "Penser et croire à la forme négative ou interrogative sont souvent suivis du subjonctif, car le fait devient incertain : « Je ne pense pas qu'il vienne. » Une complétive sujet placée en tête est aussi au subjonctif : « Qu'il soit en retard m'étonne. »",
              ],
              box: { label: "Règle", text: "Fait présenté comme réel ou certain (dire, penser, croire, savoir, voir, espérer) : indicatif. Fait voulu, souhaité, ordonné, craint ou douteux (vouloir, il faut, souhaiter, regretter, craindre, douter) : subjonctif." },
            },
            {
              heading: "« Que » conjonction ou « que » pronom relatif ?",
              paragraphs: [
                "Le mot « que » peut être une conjonction (il introduit une complétive) ou un pronom relatif (il introduit une relative). Pour les distinguer, regardez ce qui suit « que ». Après la conjonction, la subordonnée est complète : dans « Je sais que vous lisez ce livre », « vous lisez ce livre » a déjà son COD. Après le pronom relatif, il manque quelque chose : dans « Le livre que vous lisez », « vous lisez » n'a pas de COD, car c'est « que » qui le remplace.",
                "Deuxième indice : le pronom relatif a un antécédent (un nom juste avant, ici « livre ») ; la conjonction suit le plus souvent un verbe (« sais »). Attention aux noms comme « idée » ou « peur » : dans « l'idée que vous proposez » (vous proposez une idée), « que » est relatif ; dans « l'idée que vous partiez » (la phrase « vous partiez » est complète), « que » est conjonction.",
              ],
              box: { label: "Repère", text: "Autre complétive : l'interrogative indirecte, qui rapporte une question. Elle n'est pas introduite par « que » mais par « si » ou par un mot interrogatif : « Je me demande si elle viendra », « Il demande quand le train part »." },
            },
          ],
          keyPoints: [
            "La complétive est introduite par la conjonction « que », sans fonction dans la subordonnée.",
            "Elle est le plus souvent COD du verbe de la principale ; tests : remplacer par « cela » ou « le ».",
            "Autres fonctions : sujet (en tête), attribut du sujet, complément de l'adjectif ou du nom.",
            "Indicatif après dire, penser, croire, savoir, voir, espérer : le fait est présenté comme certain.",
            "Subjonctif après vouloir, il faut, souhaiter, regretter, craindre, douter.",
            "« Que » relatif : antécédent et subordonnée incomplète. « Que » conjonction : subordonnée complète.",
          ],
          example: {
            statement: "Analysez la subordonnée de la phrase « Le professeur annonce que la sortie au musée aura lieu jeudi » : nature, mot qui l'introduit, fonction, mode du verbe.",
            solution: [
              "Délimitation : [Le professeur annonce] [que la sortie au musée aura lieu jeudi]. Deux verbes conjugués : « annonce » et « aura ».",
              "Nature : c'est une subordonnée conjonctive complétive, introduite par la conjonction de subordination « que ». Ce « que » n'a pas d'antécédent, et « la sortie au musée aura lieu jeudi » forme une phrase complète.",
              "Fonction : on peut la remplacer par « cela » (« Le professeur annonce cela ») ou par « le » (« Le professeur l'annonce ») ; on ne peut pas la supprimer. Elle est COD du verbe « annonce ».",
              "Mode : « aura » est à l'indicatif (futur simple), car après un verbe de déclaration comme « annoncer », le fait est présenté comme certain.",
              "Réponse : subordonnée conjonctive complétive, introduite par « que », COD du verbe « annonce », verbe à l'indicatif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, recopiez la subordonnée complétive, indiquez le verbe qu'elle complète et vérifiez sa fonction COD en la remplaçant par « cela ». a) « Je crois que le train est en retard. » b) « Ma sœur souhaite que nous venions dimanche. » c) « Tout le monde a remarqué que Paul avait changé de coiffure. » d) « Les spectateurs espèrent que le concert commencera bientôt. »",
              hint: "La complétive commence par « que » (ou « qu' ») et va jusqu'à la fin de la phrase. Le verbe qu'elle complète est le verbe conjugué de la principale.",
              solution: [
                "a) « que le train est en retard » complète « crois ». Test : « Je crois cela. » Elle est COD.",
                "b) « que nous venions dimanche » complète « souhaite ». Test : « Ma sœur souhaite cela. » Elle est COD.",
                "c) « que Paul avait changé de coiffure » complète « a remarqué ». Test : « Tout le monde a remarqué cela. » Elle est COD.",
                "d) « que le concert commencera bientôt » complète « espèrent ». Test : « Les spectateurs espèrent cela. » Elle est COD.",
              ],
            },
            {
              level: 2,
              statement: "Dans chaque phrase, dites si « que » est une conjonction de subordination (complétive) ou un pronom relatif (relative), et justifiez. a) « Je sais que vous avez raison. » b) « La chanson que vous écoutez est ancienne. » c) « Il faut que nous partions tôt. » d) « Le gâteau que Léa a préparé sent bon. » e) « On raconte que ce château est hanté. » f) « L'idée que vous proposez me plaît. » g) « L'idée que vous partiez me rend triste. »",
              hint: "Lisez ce qui suit « que » : si c'est une phrase complète, « que » est une conjonction ; s'il manque un complément (souvent le COD), « que » est un pronom relatif qui le remplace.",
              solution: [
                "a) Conjonction : « vous avez raison » est complet, et « que » suit le verbe « sais ».",
                "b) Pronom relatif : antécédent « chanson » ; « vous écoutez » n'a pas de COD, c'est « que » (vous écoutez la chanson).",
                "c) Conjonction : « nous partions tôt » est complet ; la complétive suit « il faut ».",
                "d) Pronom relatif : antécédent « gâteau » ; « Léa a préparé » n'a pas de COD (Léa a préparé le gâteau).",
                "e) Conjonction : « ce château est hanté » est complet ; la complétive est COD de « raconte ».",
                "f) Pronom relatif : antécédent « idée » ; « vous proposez » n'a pas de COD (vous proposez une idée).",
                "g) Conjonction : « vous partiez » est complet ; la complétive complète le nom « idée » et précise son contenu.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Conjuguez le verbe entre parenthèses au mode qui convient (indicatif ou subjonctif) et justifiez chaque choix. 1. « Je veux que vous (finir) vos devoirs avant le dîner. » 2. « Nous savons que Léo (avoir) raison. » 3. « Il faut que nous (partir) avant la nuit. » 4. « Je doute qu'elle (savoir) la réponse. » 5. « Le journal affirme que la tempête (arriver) demain. » 6. « Je ne pense pas que ce film (pouvoir) vous plaire. » b) Transformez ces paroles en discours indirect avec une complétive : « Le guide déclare : ‹ Le musée ferme à 18 heures. › » ; « La directrice exige : ‹ Les élèves doivent arriver à l'heure. › »",
              hint: "Demandez-vous si le fait est présenté comme certain (indicatif) ou seulement voulu, ordonné ou douteux (subjonctif). Pour le subjonctif présent, pensez à la tournure « il faut que... ».",
              solution: [
                "a) 1. « que vous finissiez » : subjonctif, après un verbe de volonté (vouloir).",
                "2. « que Léo a raison » : indicatif, après un verbe de connaissance (savoir) ; le fait est certain.",
                "3. « que nous partions » : subjonctif, après une tournure d'obligation (il faut).",
                "4. « qu'elle sache » : subjonctif, après un verbe de doute (douter).",
                "5. « que la tempête arrivera demain » : indicatif (futur), après un verbe de déclaration (affirmer).",
                "6. « que ce film puisse vous plaire » : subjonctif, car « penser » à la forme négative rend le fait incertain.",
                "b) « Le guide déclare que le musée ferme à 18 heures. » (indicatif : simple déclaration). « La directrice exige que les élèves arrivent à l'heure. » (subjonctif : après « exiger », verbe d'ordre ; l'idée de devoir est portée par « exige »).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "Complétive conjonctive", right: "Subordonnée introduite par « que », souvent COD du verbe" },
              { left: "« Que » conjonction", right: "Mot qui relie sans avoir de fonction dans la subordonnée" },
              { left: "« Que » pronom relatif", right: "Mot qui reprend un antécédent et a une fonction" },
              { left: "Subjonctif", right: "Mode employé après vouloir, il faut, douter" },
              { left: "Indicatif", right: "Mode employé après dire, savoir, espérer" },
              { left: "Interrogative indirecte", right: "Subordonnée qui rapporte une question, introduite par « si » ou un mot interrogatif" },
            ],
          },
          quiz: [
            { q: "Dans « Je pense qu'il neigera », quelle est la fonction de la subordonnée ?", options: ["Sujet de la phrase", "COD de « pense »", "Complément circonstanciel", "Attribut du sujet"], answer: 1, why: "On peut dire « Je pense cela » : la complétive est COD du verbe « pense »." },
            { q: "Quel mode emploie-t-on après « Je veux que... » ?", options: ["L'indicatif", "Le conditionnel", "Le subjonctif"], answer: 2, why: "Après un verbe de volonté, le fait est seulement voulu : on emploie le subjonctif." },
            { q: "Dans quelle phrase « que » est-il une conjonction de subordination ?", options: ["Je vois que la nuit tombe.", "Le pull que je porte est chaud.", "La route que nous prenons est longue."], answer: 0, why: "« la nuit tombe » est une phrase complète et « que » n'a pas d'antécédent ; dans les deux autres, « que » reprend un nom." },
            { q: "Quelle forme est correcte ?", options: ["Il faut que vous venez.", "Il faut que vous viendrez.", "Il faut que vous venir.", "Il faut que vous veniez."], answer: 3, why: "« Il faut que » exprime l'obligation et entraîne le subjonctif : « que vous veniez »." },
            { q: "Par quel mot peut-on remplacer une complétive COD pour la reconnaître ?", options: ["« dont »", "« lequel »", "« où »", "« cela »"], answer: 3, why: "« Je sais qu'il viendra » devient « Je sais cela » : c'est le test de la complétive COD." },
          ],
          trap: "Confondre « que » conjonction et « que » pronom relatif, ou mettre l'indicatif après une expression de volonté (« il faut que vous venez » au lieu de « il faut que vous veniez »).",
          method: "Face à « que », lisez la suite : phrase complète, c'est une conjonction ; phrase à laquelle il manque un complément, c'est un pronom relatif. Pour le mode, demandez-vous : le fait est-il certain ou seulement voulu, craint, douteux ?",
        },
      ],
    },
    {
      id: 'fiction-interroger-reel',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'realisme-naturalisme',
          title: 'Réalisme et naturalisme au XIXe siècle',
          minutes: 30,
          objectives: [
            "Situer le réalisme et le naturalisme dans l'histoire littéraire du XIXe siècle.",
            "Identifier les ambitions des romanciers réalistes et naturalistes : représenter le réel et la société de leur temps.",
            "Connaître les principaux auteurs et leurs œuvres : Stendhal, Balzac, Flaubert, Zola, Maupassant.",
            "Comprendre comment une fiction permet d'interroger le réel.",
          ],
          course: [
            {
              heading: "Un siècle qui change très vite",
              paragraphs: [
                "Au XIXe siècle, la France se transforme profondément. C'est l'époque de la révolution industrielle : les usines, les mines de charbon et les chemins de fer se multiplient. Beaucoup de paysans quittent les campagnes pour travailler en ville. Sous le Second Empire (1852-1870), le préfet Haussmann transforme Paris avec de larges boulevards. De nouveaux métiers apparaissent, comme celui d'employé de bureau ou de vendeuse dans les grands magasins.",
                "Les sciences progressent aussi : la photographie est présentée au public en 1839, la médecine devient plus expérimentale. On veut observer, mesurer, comprendre. Certains écrivains pensent que la littérature doit faire la même chose : regarder le monde tel qu'il est, au lieu de rêver.",
                "Avant eux, les romantiques (comme Victor Hugo ou Alfred de Musset) aimaient les héros exceptionnels, les grandes passions, le passé lointain ou les pays exotiques. Les réalistes, au contraire, choisissent des personnages ordinaires (un étudiant pauvre, la femme d'un médecin de campagne, une blanchisseuse, un mineur) et des lieux de la vie quotidienne.",
              ],
            },
            {
              heading: "Le réalisme : montrer la société telle qu'elle est",
              paragraphs: [
                "Dès 1830, dans Le Rouge et le Noir, Stendhal compare le roman à un miroir que l'on promène le long d'une route : il reflète tout ce qu'il croise, le beau comme le laid. Son héros, Julien Sorel, fils de charpentier, veut s'élever dans une société où la naissance et l'argent comptent plus que le mérite.",
                "Honoré de Balzac rassemble près d'une centaine de romans et de nouvelles sous un titre unique, La Comédie humaine. Dans l'avant-propos de 1842, il explique qu'il veut peindre toute la société française, comme un savant décrit les espèces animales, et « faire concurrence à l'état civil ». Les mêmes personnages reviennent d'un livre à l'autre, comme Rastignac, le jeune ambitieux du Père Goriot (1835).",
                "En 1857, Gustave Flaubert publie Madame Bovary, l'histoire d'Emma, épouse d'un médecin de campagne en Normandie, qui s'ennuie et rêve d'une vie de roman. Flaubert se documente longuement et travaille chaque phrase. Le livre fait scandale : l'auteur est jugé en 1857 pour atteinte à la morale publique, puis acquitté. Le mot « réalisme » vient d'ailleurs aussi de la peinture : en 1855, le peintre Gustave Courbet expose ses tableaux dans un « Pavillon du Réalisme ».",
              ],
              box: { label: "Définition", text: "Le réalisme est un mouvement littéraire et artistique du milieu du XIXe siècle qui veut représenter le réel avec exactitude, en particulier la société contemporaine et la vie des gens ordinaires, sans l'embellir." },
            },
            {
              heading: "Le naturalisme : le roman comme une expérience",
              paragraphs: [
                "À partir des années 1870, Émile Zola va plus loin. Il s'inspire des sciences, en particulier de la médecine expérimentale du savant Claude Bernard. Dans Le Roman expérimental (1880), il explique que le romancier doit observer ses personnages comme un savant observe un phénomène : on place un personnage dans un milieu et l'on regarde ce qui se passe.",
                "Pour Zola, deux forces déterminent la vie d'un personnage : l'hérédité (ce qu'il reçoit de sa famille, par exemple une faiblesse face à l'alcool) et le milieu (le quartier, le métier, la pauvreté). Il écrit ainsi Les Rougon-Macquart, une série de vingt romans publiés de 1871 à 1893, qui suit une même famille sous le Second Empire. On y trouve L'Assommoir (1877), sur la blanchisseuse Gervaise et les ravages de l'alcool dans un quartier ouvrier de Paris, et Germinal (1885), sur une grève de mineurs dans le nord de la France.",
                "Zola prépare chaque roman comme une enquête : il remplit des carnets de notes, visite les lieux, interroge des témoins. En 1884, il descend dans une mine de la région d'Anzin pour écrire Germinal. En 1880, il publie avec de jeunes écrivains, dont Guy de Maupassant, un recueil collectif, Les Soirées de Médan : le groupe naturaliste est né.",
              ],
              box: { label: "Définition", text: "Le naturalisme prolonge le réalisme à la fin du XIXe siècle. Autour de Zola, il veut appliquer au roman la méthode des sciences : documentation précise, étude de l'influence de l'hérédité et du milieu, attention aux milieux populaires." },
            },
            {
              heading: "Une fiction pour interroger le réel",
              paragraphs: [
                "Les personnages de ces romans sont inventés, mais les lieux, les métiers, les prix, les lois et les problèmes sont ceux de l'époque. Le lecteur reconnaît son monde, et la fiction l'oblige à le regarder autrement : la misère des ouvriers, le pouvoir de l'argent, l'ambition sociale, l'ennui des femmes enfermées dans le mariage, l'alcoolisme.",
                "Pourtant, le roman réaliste n'est pas une photographie. Le romancier choisit ce qu'il montre, organise les événements et ménage des effets. En 1888, dans la préface de son roman Pierre et Jean, Maupassant explique que l'écrivain réaliste ne copie pas toute la réalité, mais cherche à donner « l'illusion complète du vrai ». À l'époque, ces romans choquent souvent : on leur reproche de montrer la laideur et la vulgarité. C'est justement leur force : ils font voir ce que la société préfère cacher.",
              ],
              box: { label: "À retenir", text: "Réalisme (vers 1830-1880) : Stendhal, Balzac, Flaubert ; peindre la société avec exactitude. Naturalisme (vers 1870-1890) : Zola, et Maupassant à ses débuts ; méthode scientifique, hérédité et milieu, milieux populaires." },
            },
          ],
          keyPoints: [
            "Contexte : révolution industrielle, croissance des villes, progrès des sciences au XIXe siècle.",
            "Le réalisme représente le réel avec exactitude, surtout la société contemporaine et les gens ordinaires.",
            "Réalistes : Stendhal (Le Rouge et le Noir, 1830), Balzac (La Comédie humaine), Flaubert (Madame Bovary, 1857).",
            "Le naturalisme (Zola) applique au roman la méthode des sciences : documentation, hérédité et milieu.",
            "Les Rougon-Macquart : vingt romans (1871-1893), dont L'Assommoir (1877) et Germinal (1885).",
            "Le roman réaliste n'est pas une copie : il donne « l'illusion complète du vrai » (Maupassant, 1888) pour faire réfléchir.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « En 1876, rue de la Goutte-d'Or, la blanchisserie de Mme Pichon ouvrait à cinq heures. Louise, quinze ans, y gagnait deux francs par jour. Penchée sur les baquets fumants, elle frottait les draps des bourgeois jusqu'à ce que ses mains deviennent rouges et gercées. Le soir, elle rentrait dans une chambre sous les toits, où son père, comme jadis son grand-père, buvait la paye de la semaine. Louise se jurait de ne jamais lui ressembler. » Montrez que ce passage s'inspire de l'esthétique naturaliste.",
            solution: [
              "Le cadre est précis et réel : une date (« En 1876 »), une rue de Paris (« rue de la Goutte-d'Or »), un horaire (« cinq heures »), un salaire (« deux francs par jour »). Ces détails donnent l'impression du vrai.",
              "Le personnage est ordinaire et vient d'un milieu populaire : Louise est une jeune blanchisseuse de quinze ans, et non une héroïne exceptionnelle.",
              "Le texte montre la dureté du travail avec un vocabulaire concret : « baquets fumants », « frottait », « mains rouges et gercées ».",
              "On retrouve les deux forces du naturalisme : le milieu (la misère, la chambre sous les toits) et l'hérédité (le père boit « comme jadis son grand-père »). La question est posée : Louise pourra-t-elle échapper à ce destin ?",
              "Le texte fait réfléchir sur une réalité sociale : le travail des enfants, la pauvreté et l'alcoolisme dans les quartiers ouvriers.",
              "Conclusion : par son cadre précis, son personnage ordinaire, son vocabulaire concret et le poids de l'hérédité et du milieu, ce passage relève de l'esthétique naturaliste.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque œuvre, donnez son auteur et le mouvement auquel on la rattache (réalisme ou naturalisme) : a) Le Rouge et le Noir (1830) ; b) Le Père Goriot (1835) ; c) Madame Bovary (1857) ; d) L'Assommoir (1877) ; e) Germinal (1885). Puis dites quel auteur a écrit une série de vingt romans consacrée à une seule famille.",
              hint: "Les trois œuvres les plus anciennes appartiennent au réalisme ; Zola est le chef de file du naturalisme.",
              solution: [
                "a) Le Rouge et le Noir : Stendhal, réalisme (il en est l'un des premiers représentants).",
                "b) Le Père Goriot : Balzac, réalisme ; ce roman fait partie de La Comédie humaine.",
                "c) Madame Bovary : Flaubert, réalisme.",
                "d) L'Assommoir : Zola, naturalisme.",
                "e) Germinal : Zola, naturalisme.",
                "La série de vingt romans est Les Rougon-Macquart, d'Émile Zola (1871-1893).",
              ],
            },
            {
              level: 2,
              statement: "Deux textes écrits pour l'exercice. Texte A : « Sur la falaise battue par l'orage, le chevalier Ardent leva son épée vers le ciel. Son âme brûlait d'un amour immense pour la princesse prisonnière, et il jura de la délivrer ou de mourir. » Texte B : « Dans la boutique de la rue Grand-Pont, à Rouen, le commis Martin comptait les pièces de la caisse à la lueur d'une lampe à huile. Il manquait encore onze sous pour payer le loyer du mois. Son patron, lui, dînait en ville. » a) Lequel des deux textes est réaliste ? Donnez trois justifications précises. b) Quelle réalité sociale ce texte invite-t-il à interroger ?",
              hint: "Comparez le héros (exceptionnel ou ordinaire), le lieu (imaginaire ou réel), les détails (vagues ou précis) et le sujet (grandes passions ou vie quotidienne).",
              solution: [
                "a) Le texte B est réaliste. Justification 1 : le lieu est réel et précis (« rue Grand-Pont, à Rouen »).",
                "Justification 2 : le personnage est ordinaire, un simple commis, alors que le texte A met en scène un chevalier héroïque.",
                "Justification 3 : les détails sont concrets et chiffrés (« lampe à huile », « onze sous », « le loyer du mois ») ; le texte A, lui, reste dans l'exaltation des sentiments (« Son âme brûlait d'un amour immense »).",
                "b) Le texte B interroge l'inégalité sociale : le commis travaille tard et peine à payer son loyer, pendant que son patron « dînait en ville ». La dernière phrase, très courte, fait apparaître ce contraste sans le commenter.",
              ],
            },
            {
              level: 3,
              statement: "Défi. À la manière de Zola, menez une petite enquête sur un lieu ordinaire d'aujourd'hui (une caisse de supermarché, un arrêt de bus, la cantine). a) Notez dans un « carnet d'enquête » cinq observations précises (bruits, gestes, objets, horaires, chiffres). b) Rédigez ensuite un paragraphe réaliste de huit à dix lignes, à la troisième personne et au passé, qui met en scène un personnage ordinaire dans ce lieu et fait apparaître une question de société. c) En une phrase, dites quelle question de société votre texte pose.",
              hint: "Choisissez un seul personnage et un seul moment. Les détails chiffrés et les mots concrets rendent le texte vrai ; une phrase finale courte peut faire réfléchir sans faire la morale.",
              solution: [
                "a) Exemple de carnet : bip régulier du scanner ; tapis roulant qui avance par à-coups ; une file de sept personnes à 18 h 30 ; la caissière se masse le poignet entre deux clients ; un client compte ses pièces et repose un paquet de café.",
                "b) Exemple de paragraphe : « À six heures et demie, la file s'allongeait devant la caisse numéro 4. Nadia, qui travaillait là depuis le matin, faisait passer les articles sans lever les yeux : un bip, un autre bip, encore un autre. Entre deux clients, elle se massait le poignet droit. Un vieil homme posa sur le tapis un pain, du lait, un paquet de café. Il compta ses pièces une à une, s'arrêta, puis, sans un mot, repoussa le café vers elle. Nadia le rangea sous la caisse. Le client suivant soupirait déjà. »",
                "Ce que l'on vérifie : un lieu et un horaire précis (« six heures et demie », « caisse numéro 4 ») ; des personnages ordinaires ; des gestes et des bruits concrets (« bip », « se massait le poignet », « compta ses pièces une à une ») ; aucun commentaire du narrateur, ce sont les faits qui parlent.",
                "c) Exemple de réponse : le texte pose la question de la pauvreté des personnes âgées et de la fatigue des métiers répétitifs.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Stendhal publie Le Rouge et le Noir (1830)",
              "Balzac publie Le Père Goriot (1835)",
              "Courbet expose ses toiles dans un « Pavillon du Réalisme » (1855)",
              "Flaubert publie Madame Bovary (1857)",
              "Zola publie L'Assommoir (1877)",
              "Zola et Maupassant publient Les Soirées de Médan (1880)",
              "Zola publie Germinal (1885)",
            ],
          },
          quiz: [
            { q: "Quel écrivain a composé le cycle des Rougon-Macquart ?", options: ["Balzac", "Zola", "Flaubert", "Stendhal"], answer: 1, why: "Émile Zola a publié ces vingt romans de 1871 à 1893 : ils suivent une même famille sous le Second Empire." },
            { q: "Selon les naturalistes, quelles forces déterminent la vie d'un personnage ?", options: ["Le destin et les dieux", "Le rêve et l'imagination", "L'hérédité et le milieu"], answer: 2, why: "Zola étudie ce que le personnage hérite de sa famille et l'influence de son milieu social." },
            { q: "Pourquoi Flaubert est-il jugé en 1857 après Madame Bovary ?", options: ["Pour atteinte à la morale publique", "Pour avoir recopié un roman de Balzac", "Pour avoir écrit un roman entièrement en vers", "Pour avoir critiqué le roi Louis XIV"], answer: 0, why: "On l'accuse d'offenser la morale ; il est finalement acquitté, et le scandale fait connaître le livre." },
            { q: "Pourquoi Zola descend-il dans une mine en 1884 ?", options: ["Pour se cacher de la police", "Pour y travailler comme mineur pendant un an", "Pour acheter la compagnie minière d'Anzin", "Pour se documenter avant d'écrire"], answer: 3, why: "Zola prépare Germinal comme une enquête : il observe les lieux et interroge les mineurs." },
            { q: "Que signifie l'idée de Maupassant selon laquelle le roman doit donner « l'illusion complète du vrai » ?", options: ["Le romancier recopie toute la réalité, sans rien trier ni choisir", "Le romancier sélectionne pour donner l'impression du vrai", "Le roman ne doit raconter que des faits réellement arrivés"], answer: 1, why: "L'écrivain réaliste choisit et organise les faits : son récit est inventé, mais il paraît vrai." },
          ],
          trap: "Croire qu'un roman réaliste raconte une histoire vraie. Les personnages et l'intrigue sont inventés : ce qui est vrai, c'est le cadre (lieux, métiers, époque) et les problèmes de société que la fiction fait voir.",
          method: "Faites une fiche à quatre colonnes : dates, auteurs, œuvres, idées clés. Retenez un mot par mouvement : « miroir » pour le réalisme (Stendhal), « expérience » pour le naturalisme (Zola, hérédité et milieu).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nouvelle-realiste',
          title: 'La nouvelle réaliste : lire Maupassant',
          minutes: 30,
          objectives: [
            "Définir la nouvelle et identifier ses caractéristiques : brièveté, action resserrée, chute.",
            "Situer Maupassant et son œuvre dans le mouvement réaliste.",
            "Analyser la construction d'une nouvelle réaliste et le rôle de sa chute.",
            "Interpréter la critique sociale portée par une nouvelle.",
          ],
          course: [
            {
              heading: "Maupassant, maître de la nouvelle",
              paragraphs: [
                "Guy de Maupassant naît en 1850 en Normandie et meurt à Paris en 1893. Jeune homme, il participe à la guerre de 1870 contre la Prusse, puis devient employé de bureau dans des ministères à Paris. Il apprend le métier d'écrivain auprès de Gustave Flaubert, ami de sa mère, qui lui enseigne à observer longuement et à chercher le mot juste.",
                "En 1880, sa nouvelle Boule de suif paraît dans le recueil collectif Les Soirées de Médan, aux côtés de textes de Zola et d'autres jeunes écrivains naturalistes. Flaubert la salue comme un chef-d'œuvre, et Maupassant devient célèbre. En un peu plus de dix ans, il écrit environ trois cents contes et nouvelles, et six romans, dont Une vie (1883) et Bel-Ami (1885).",
                "La plupart de ses nouvelles paraissent d'abord dans des journaux, comme Le Gaulois ou Gil Blas, puis sont réunies en recueils. Elles doivent donc être courtes et capter tout de suite l'attention du lecteur.",
              ],
              box: { label: "Repère", text: "Guy de Maupassant (1850-1893), élève de Flaubert. Boule de suif (1880), La Parure (1884), Le Horla (1887, récit fantastique). Environ trois cents contes et nouvelles, et six romans, dont Bel-Ami (1885)." },
            },
            {
              heading: "Qu'est-ce qu'une nouvelle ?",
              paragraphs: [
                "Une nouvelle est un récit court, que l'on peut lire d'une traite, en quelques minutes ou en une heure. Elle compte peu de personnages, une seule action principale et se déroule souvent sur une durée limitée. Tout est concentré : chaque détail compte et prépare la fin.",
                "La nouvelle réaliste s'ancre dans un monde reconnaissable : des lieux réels (la Normandie, Paris, Rouen), une époque précise (souvent la fin du XIXe siècle), des personnages ordinaires avec un métier, des soucis d'argent, des habitudes. Elle se distingue ainsi du conte merveilleux (« Il était une fois », les fées, la magie). Attention : Maupassant lui-même appelait souvent ses récits des « contes », même quand ils sont réalistes.",
                "La nouvelle se termine souvent par une chute : une fin brève et inattendue, qui surprend le lecteur et éclaire tout le récit d'un sens nouveau. Après la chute, on a envie de relire le début pour y chercher les indices.",
              ],
              box: { label: "Définition", text: "La nouvelle est un récit bref, avec peu de personnages et une action resserrée, qui se termine souvent par une chute. La nouvelle réaliste se déroule dans un cadre vraisemblable et montre la société de son temps." },
            },
            {
              heading: "Les milieux de Maupassant",
              paragraphs: [
                "Maupassant observe tous les milieux. Il connaît bien les paysans normands, souvent rusés et durs pour l'argent. Dans La Ficelle (1883), le vieux Maître Hauchecorne ramasse un bout de ficelle un jour de marché à Goderville. Un ennemi l'a vu se baisser et l'accuse d'avoir ramassé un portefeuille perdu. Le portefeuille est rapporté le lendemain par un valet de ferme, mais personne ne croit le vieil homme innocent : il en meurt, en répétant qu'il n'a ramassé qu'une ficelle.",
                "Dans Aux champs (1882), un couple de riches bourgeois sans enfant propose à deux familles de paysans pauvres d'adopter l'un de leurs fils, contre une rente. Les Tuvache refusent avec indignation ; les Vallin acceptent. Des années plus tard, le fils des Vallin revient riche et élégant, et le fils des Tuvache reproche à ses parents de l'avoir gardé dans la misère, puis les quitte.",
                "Maupassant décrit aussi les petits employés de Paris, mal payés, qui rêvent d'une vie plus brillante. C'est le monde de La Parure, sa nouvelle la plus célèbre.",
              ],
            },
            {
              heading: "La Parure (1884) : une chute qui fait réfléchir",
              paragraphs: [
                "Mathilde Loisel est jolie, mais elle a épousé un petit commis du ministère de l'Instruction publique. Elle souffre de ne pas vivre dans le luxe. Un jour, son mari obtient une invitation à un bal du ministère. Il lui donne quatre cents francs, qu'il gardait pour s'acheter un fusil, afin qu'elle ait une robe. Mathilde emprunte alors à une amie riche, Mme Forestier, une rivière de diamants (un collier).",
                "Au bal, elle triomphe. Mais en rentrant, elle s'aperçoit qu'elle a perdu le collier. Les Loisel en achètent un semblable pour trente-six mille francs, en s'endettant. Pendant dix ans, ils vivent dans la misère pour tout rembourser : Mathilde fait les gros travaux, vieillit, se durcit. Un dimanche, elle croise Mme Forestier, toujours jeune et belle, et lui raconte tout. Son amie lui révèle alors que son collier était faux : il valait au plus cinq cents francs.",
                "Cette chute change le sens du récit. Dix années de sacrifices ont été perdues pour une apparence. Maupassant critique le goût du paraître et l'inégalité sociale : la riche Mme Forestier n'a rien perdu, alors que le couple modeste a tout donné. L'ironie du sort est cruelle, et le narrateur ne fait aucune morale : c'est au lecteur de conclure.",
              ],
              box: { label: "À retenir", text: "La chute est la fin brève et surprenante d'une nouvelle. Elle oblige à relire l'histoire autrement et porte souvent la critique de l'auteur, sans qu'il ait besoin de la dire directement." },
            },
          ],
          keyPoints: [
            "La nouvelle : récit bref, peu de personnages, action resserrée, souvent une chute.",
            "La nouvelle réaliste se déroule dans un cadre vraisemblable : lieux réels, époque précise, personnages ordinaires.",
            "Maupassant (1850-1893), élève de Flaubert, révélé par Boule de suif (1880), environ trois cents contes et nouvelles.",
            "Ses milieux : paysans normands (La Ficelle, Aux champs), petits employés de Paris (La Parure), guerre de 1870 (Boule de suif).",
            "Dans La Parure, la chute (le collier était faux) dénonce le goût du paraître et l'inégalité sociale.",
            "Le narrateur ne fait pas la morale : la chute laisse le lecteur juger.",
          ],
          example: {
            statement: "Présentez la construction de La Parure en cinq étapes (schéma narratif), puis expliquez en deux phrases le rôle de la chute.",
            solution: [
              "Situation initiale : Mathilde Loisel, épouse d'un petit commis, souffre de sa vie modeste et rêve de luxe.",
              "Élément perturbateur : invitée à un bal du ministère, elle emprunte un collier de diamants à son amie Mme Forestier, puis le perd en rentrant.",
              "Péripéties : les Loisel achètent un collier semblable pour trente-six mille francs, s'endettent et vivent dix ans dans la misère pour rembourser.",
              "Élément de résolution : leurs dettes enfin payées, Mathilde rencontre Mme Forestier et lui raconte toute l'histoire.",
              "Situation finale (la chute) : Mme Forestier révèle que le collier prêté était faux et valait au plus cinq cents francs.",
              "Rôle de la chute : elle surprend le lecteur et rend absurde le sacrifice de dix années. Elle fait comprendre la critique de Maupassant : le désir de paraître a ruiné une vie, tandis que la riche amie n'a rien perdu.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Vrai ou faux ? Corrigez les affirmations fausses. a) Une nouvelle compte en général plusieurs centaines de pages. b) Maupassant a publié beaucoup de ses nouvelles d'abord dans des journaux. c) La chute est la situation initiale d'une nouvelle. d) Les nouvelles réalistes de Maupassant se déroulent souvent en Normandie ou à Paris. e) Maupassant a été l'élève de Flaubert.",
              hint: "Relisez les définitions de la nouvelle et de la chute, puis le repère sur Maupassant.",
              solution: [
                "a) Faux : une nouvelle est un récit bref, que l'on peut lire d'une traite.",
                "b) Vrai : elles paraissaient dans des journaux comme Le Gaulois ou Gil Blas, avant d'être réunies en recueils.",
                "c) Faux : la chute est la fin de la nouvelle, brève et inattendue.",
                "d) Vrai : par exemple Goderville pour La Ficelle, Paris pour La Parure.",
                "e) Vrai : Flaubert, ami de sa mère, lui a appris le métier d'écrivain.",
              ],
            },
            {
              level: 2,
              statement: "Relisez le résumé de La Ficelle donné dans le cours. a) Relevez deux éléments qui ancrent le récit dans la réalité. b) Quel est l'élément perturbateur ? c) Le portefeuille est retrouvé le lendemain : pourquoi la situation de Maître Hauchecorne ne s'arrange-t-elle pas ? d) Selon vous, quels défauts de la société Maupassant dénonce-t-il dans cette nouvelle ? Donnez-en deux.",
              hint: "Pour la question c, demandez-vous ce que pensent les habitants, même après la preuve de l'innocence du vieil homme.",
              solution: [
                "a) Le récit se déroule dans un lieu réel, Goderville, en Normandie, et dans une situation de la vie quotidienne, un jour de marché. On peut aussi citer les personnages ordinaires : des paysans, un valet de ferme.",
                "b) L'élément perturbateur est l'accusation : un ennemi, qui l'a vu se baisser, prétend qu'il a ramassé le portefeuille perdu.",
                "c) Même quand le portefeuille est rapporté, les habitants continuent de soupçonner Maître Hauchecorne : la rumeur est plus forte que la preuve. Le vieil homme passe son temps à se justifier, ce qui le rend encore plus suspect.",
                "d) Maupassant dénonce la rumeur et la méfiance, qui détruisent la réputation d'un innocent, et l'injustice d'un jugement collectif fondé sur les apparences. On peut aussi citer la rancune entre voisins, puisque l'accusation vient d'un ennemi.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici le début d'une nouvelle réaliste écrite pour l'exercice : « À Fécamp, en 1886, le pêcheur Joseph Lebrun économisait depuis dix ans pour offrir à son fils Paul une place d'apprenti chez un horloger de Rouen. Il ne buvait plus, ne fumait plus, et réparait lui-même ses filets usés. Le jour du départ, il cousit les trois cents francs dans la doublure de la veste de Paul. » Rédigez la suite et la chute (dix à quinze lignes). La chute doit être brève, inattendue, et faire apparaître une critique de la société. Expliquez ensuite en deux phrases ce que votre chute dénonce.",
              hint: "Gardez le cadre réaliste (lieux, sommes, métiers). Préparez la chute par un petit détail glissé plus tôt, que le lecteur ne remarque pas tout de suite.",
              solution: [
                "Exemple de suite : « Paul prit la diligence, puis le train. À Rouen, il trouva la boutique de l'horloger, rue du Gros-Horloge, et tendit fièrement la lettre de recommandation que le curé avait écrite pour lui. L'horloger la lut à peine. Il regarda les mains de Paul, larges et rouges, les mains d'un fils de pêcheur, puis sa veste reprisée. ‹ La place est prise depuis hier, dit-il. Le fils du notaire. › Paul repartit le soir même. Le lendemain, Joseph trouva la veste pliée sur la table, et les trois cents francs toujours cousus dans la doublure. »",
                "Analyse de la chute : elle est brève (une réplique sèche, puis une seule image finale) et inattendue, puisque toute l'économie du père paraissait garantir la réussite. Le détail préparé plus tôt, l'argent cousu dans la veste, revient à la fin et montre que tout ce sacrifice n'a servi à rien.",
                "Ce que dénonce la chute : l'injustice sociale, car la place est donnée au fils du notaire plutôt qu'au fils du pêcheur, et le mépris pour les gens modestes, jugés sur leurs mains et leurs vêtements. Comme chez Maupassant, le narrateur ne commente pas : les faits suffisent.",
                "Pour vous corriger : vérifiez que le cadre reste réaliste, que la chute tient en quelques lignes et qu'un détail du début la prépare.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque récit de Maupassant à son sujet.",
            pairs: [
              { left: "La Parure", right: "Un collier perdu, dix ans de misère, un bijou qui était faux" },
              { left: "La Ficelle", right: "Un vieux paysan accusé à tort d'avoir ramassé un portefeuille" },
              { left: "Aux champs", right: "Une famille paysanne cède son fils à des bourgeois riches" },
              { left: "Boule de suif", right: "Des voyageurs en diligence pendant la guerre de 1870" },
              { left: "Le Horla", right: "Un homme persuadé qu'un être invisible le hante" },
              { left: "Bel-Ami", right: "Un roman sur l'ascension d'un journaliste sans scrupules" },
            ],
          },
          quiz: [
            { q: "En quelle année Boule de suif fait-elle connaître Maupassant ?", options: ["1830", "1857", "1880", "1914"], answer: 2, why: "La nouvelle paraît en 1880 dans le recueil collectif Les Soirées de Médan, et Flaubert la salue comme un chef-d'œuvre." },
            { q: "Comment appelle-t-on la fin brève et inattendue d'une nouvelle ?", options: ["La chute", "La morale imposée par l'auteur", "La situation initiale du récit"], answer: 0, why: "La chute surprend le lecteur et éclaire tout le récit d'un sens nouveau." },
            { q: "Dans La Parure, que découvre Mathilde à la fin ?", options: ["Que son mari lui cachait une grosse dette de jeu", "Que le collier prêté était faux", "Qu'une tante lointaine lui a laissé une fortune", "Que Mme Forestier a quitté Paris pour toujours"], answer: 1, why: "Mme Forestier révèle que sa rivière de diamants valait au plus cinq cents francs : dix ans de sacrifices pour un faux bijou." },
            { q: "Quelle caractéristique n'est PAS celle d'une nouvelle ?", options: ["Un petit nombre de personnages, souvent ordinaires", "Une action resserrée sur une courte durée", "Des centaines de pages et de nombreuses intrigues", "Une fin souvent surprenante, appelée la chute"], answer: 2, why: "La nouvelle est un récit bref, centré sur une seule action ; les longues intrigues multiples sont celles du roman." },
            { q: "Où la plupart des nouvelles de Maupassant ont-elles d'abord paru ?", options: ["Dans des journaux", "Dans des manuels scolaires", "Dans de petits livres pour enfants"], answer: 0, why: "Elles paraissaient dans des journaux comme Le Gaulois ou Gil Blas, puis étaient réunies en recueils." },
          ],
          trap: "Résumer la nouvelle sans expliquer la chute. La chute n'est pas seulement une surprise : il faut dire ce qu'elle révèle (ici, la vanité du paraître ou l'injustice sociale) et comment elle change le sens de tout le récit.",
          method: "Lisez une nouvelle en trois temps : repérez d'abord le cadre réaliste (lieu, époque, milieu) ; dressez ensuite le schéma narratif en cinq étapes ; après la chute, relisez le début pour trouver les détails qui la préparaient.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'description-portrait',
          title: 'Le rôle de la description et du portrait',
          minutes: 30,
          objectives: [
            "Identifier une description et un portrait dans un récit.",
            "Analyser l'organisation d'une description : point de vue, ordre, indicateurs spatiaux, sensations.",
            "Expliquer les fonctions de la description dans le roman réaliste : faire vrai, expliquer, symboliser.",
            "Rédiger une description organisée qui révèle un personnage ou un milieu.",
          ],
          course: [
            {
              heading: "Décrire, c'est faire voir",
              paragraphs: [
                "Dans un récit, la narration raconte des actions qui s'enchaînent ; la description fait une pause dans l'histoire pour montrer un lieu, un objet ou un personnage. Quand la description porte sur un personnage, on parle de portrait. Le portrait peut être physique (le visage, le corps, les vêtements, la voix) ou moral (le caractère, les qualités, les défauts). Souvent, il mêle les deux.",
                "Pour décrire, on emploie surtout l'imparfait (« La salle était sombre, une odeur de soupe flottait »), des verbes d'état et de perception (être, sembler, paraître, voir, entendre, sentir) et un vocabulaire précis : couleurs, formes, matières, odeurs, bruits. On utilise aussi beaucoup les expansions du nom : l'adjectif (« une table bancale »), le complément du nom (« une nappe en toile cirée ») et la proposition subordonnée relative (« une lampe qui fumait »).",
              ],
              box: { label: "Définition", text: "La description est une pause dans le récit qui montre un lieu, un objet ou un personnage. Le portrait est la description d'un personnage : physique (apparence) et moral (caractère)." },
            },
            {
              heading: "Organiser une description",
              paragraphs: [
                "Une description ne se fait pas au hasard. Elle part souvent d'un point d'observation : un personnage qui arrive dans un lieu et le découvre peu à peu. Au début de Germinal (1885), Zola fait marcher un homme seul, la nuit, sur une route de la plaine du Nord : le lecteur découvre la mine en même temps que lui, d'abord par des feux lointains, puis par des formes et des bruits.",
                "La description suit un ordre : de l'ensemble vers les détails, du plus proche au plus lointain, de haut en bas, de gauche à droite. Les indicateurs spatiaux guident le lecteur : au premier plan, au fond, à gauche, au-dessus, plus loin, contre le mur. Le portrait suit souvent le même chemin : la silhouette générale, puis le visage, puis un détail frappant (les mains, le regard).",
              ],
              box: { label: "À retenir", text: "Pour organiser une description : un point d'observation, un ordre (ensemble puis détails, près puis loin, haut puis bas), des indicateurs spatiaux, et plusieurs sens (vue, ouïe, odorat, toucher, goût)." },
            },
            {
              heading: "Les fonctions de la description dans le roman réaliste",
              paragraphs: [
                "Première fonction, faire vrai. Les détails précis (une adresse, un prix, un objet usé) donnent au lecteur l'impression que le monde du roman existe. Le critique Roland Barthes a appelé cela « l'effet de réel » (1968) : certains détails ne servent pas l'action, mais ils rendent le récit vraisemblable.",
                "Deuxième fonction, expliquer. Chez Balzac, le lieu explique le personnage. Au début du Père Goriot (1835), il décrit longuement la pension Vauquer, une pension modeste de Paris : meubles usés, odeur de renfermé, salle à manger triste. Puis il montre sa propriétaire, Mme Vauquer, dont l'apparence ressemble à sa maison : la personne et le lieu s'expliquent l'un par l'autre.",
                "Troisième fonction, symboliser et dénoncer. Dans Germinal, Zola décrit la mine du Voreux comme une bête monstrueuse et affamée qui avale chaque jour des hommes. Par cette image, la description dénonce la dureté du travail des mineurs. Enfin, la description peut avoir une fonction narrative : elle crée une attente avant un événement important, ou elle annonce discrètement la suite de l'histoire.",
              ],
              box: { label: "Repère", text: "Quatre fonctions de la description : faire vrai (effet de réel) ; expliquer (le lieu révèle le personnage) ; symboliser ou dénoncer (une image porte un sens) ; préparer la suite du récit (attente, annonce)." },
            },
            {
              heading: "Le portrait réaliste : le corps raconte une vie",
              paragraphs: [
                "Dans le roman réaliste, le portrait ne sert pas seulement à dire si un personnage est beau ou laid. Il révèle son milieu social, son métier et son histoire. Des mains abîmées disent un travail manuel, une redingote usée aux coudes dit la pauvreté cachée, un dos voûté dit des années de fatigue. Le lecteur devient un enquêteur qui lit les indices.",
                "Le portrait peut aussi être en action : au lieu de faire une liste de traits, l'écrivain montre le personnage qui agit, parle ou se déplace, et ses gestes révèlent son caractère. Un avare qui recompte trois fois sa monnaie en dit plus long qu'un simple adjectif. Pour bien lire un portrait, demandez-vous toujours : que m'apprend ce détail sur la personne et sur la société où elle vit ?",
              ],
            },
          ],
          keyPoints: [
            "La description fait une pause dans le récit ; le portrait décrit un personnage, physique et moral.",
            "Outils : imparfait, verbes d'état et de perception, vocabulaire précis, expansions du nom, cinq sens.",
            "Organisation : point d'observation, ordre (ensemble puis détails), indicateurs spatiaux.",
            "Fonctions : faire vrai (effet de réel), expliquer, symboliser ou dénoncer, préparer la suite.",
            "Balzac : la pension Vauquer explique Mme Vauquer ; Zola : la mine du Voreux est une bête qui dévore les hommes.",
            "Le portrait réaliste révèle le milieu social et l'histoire du personnage.",
          ],
          example: {
            statement: "Texte écrit pour l'exercice : « La loge de la concierge sentait le chou et le charbon. Au fond, sous une petite fenêtre grillagée, un lit étroit occupait tout le mur. À gauche, sur le poêle, une casserole cabossée frémissait. Contre la cloison, un calendrier de l'année précédente pendait encore à son clou. Assise près de la porte, Mme Grosjean reprisait une chaussette, ses lunettes au bout du nez, sans quitter des yeux l'escalier de l'immeuble. » Analysez l'organisation de cette description et dites ce qu'elle révèle du personnage.",
            solution: [
              "Le temps : la description est à l'imparfait (« sentait », « occupait », « frémissait », « pendait », « reprisait »), le temps de l'arrière-plan.",
              "L'ordre : on commence par une impression d'ensemble par l'odorat (« sentait le chou et le charbon »), puis on parcourt la pièce avec des indicateurs spatiaux (« Au fond », « À gauche », « Contre la cloison », « près de la porte »).",
              "Les sens : l'odorat (chou, charbon), la vue (fenêtre grillagée, calendrier), l'ouïe suggérée par la casserole qui « frémissait ».",
              "Le passage glisse du lieu au portrait : Mme Grosjean apparaît en dernier, en action (« reprisait une chaussette »).",
              "Ce qu'elle révèle : la pièce petite et pauvre (lit étroit, casserole cabossée) montre un milieu modeste ; le calendrier de l'année précédente suggère une vie qui ne change pas ; le regard fixé sur l'escalier montre une concierge curieuse, qui surveille tout.",
              "Conclusion : la description est organisée comme un parcours du regard, et le lieu explique le personnage, comme chez Balzac.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Texte écrit pour l'exercice : « La boulangerie ouvrait sur la place. Au premier plan, derrière la vitre embuée, s'alignaient des baguettes dorées. Plus loin, sur le comptoir, une balance de cuivre brillait. Une odeur chaude de pain sortait par la porte, et l'on entendait le four ronfler au fond de la boutique. » a) Relevez les verbes conjugués et donnez leur temps. b) Relevez trois indicateurs spatiaux. c) Quels sens sont sollicités ? Citez un mot pour chacun. d) S'agit-il d'un portrait ou de la description d'un lieu ?",
              hint: "Les indicateurs spatiaux répondent à la question « où ? ». Pour les sens, pensez à la vue, à l'odorat, à l'ouïe.",
              solution: [
                "a) Verbes : « ouvrait », « s'alignaient », « brillait », « sortait », « entendait ». Ils sont tous à l'imparfait, le temps de la description. Le verbe « ronfler » est à l'infinitif.",
                "b) Indicateurs spatiaux : « sur la place », « Au premier plan », « derrière la vitre », « Plus loin », « sur le comptoir », « au fond de la boutique » (trois suffisent).",
                "c) La vue : « dorées », « brillait » ; l'odorat : « odeur chaude de pain » ; l'ouïe : « on entendait le four ronfler ».",
                "d) C'est la description d'un lieu, une boulangerie : aucun personnage n'est décrit.",
              ],
            },
            {
              level: 2,
              statement: "Portrait écrit pour l'exercice : « Le père Mathieu avait soixante ans et en paraissait quatre-vingts. Son dos s'était courbé à force de porter les sacs de ciment, et ses mains, larges comme des pelles, étaient couvertes de cicatrices blanches. Il parlait peu, mais il saluait chaque voisin d'un signe de tête poli. Le dimanche, il brossait longuement son unique veste, usée aux coudes, avant d'aller s'asseoir sur un banc du square. » a) Classez les informations en deux colonnes : portrait physique et portrait moral. b) Quel métier et quel milieu social ce portrait révèle-t-il ? Justifiez. c) Que nous apprend le détail de la veste brossée le dimanche ?",
              hint: "Le portrait moral peut se déduire d'un geste. Pour le milieu social, cherchez les indices du travail et de l'argent.",
              solution: [
                "a) Portrait physique : il paraît plus vieux que son âge ; dos courbé ; mains larges couvertes de cicatrices ; une veste usée aux coudes. Portrait moral : il est silencieux (« parlait peu »), poli et respectueux (« saluait chaque voisin »), soigneux et digne (il brosse sa veste).",
                "b) Il a été ouvrier du bâtiment : il portait « les sacs de ciment ». Son corps usé (dos courbé, cicatrices) et son « unique veste » révèlent un milieu populaire et pauvre.",
                "c) Ce détail montre que, malgré la pauvreté, il garde sa dignité : il prend soin de sa seule veste pour paraître propre le dimanche. Le portrait en action révèle un trait de caractère sans le nommer.",
                "Bilan : comme dans le roman réaliste, le corps et les vêtements racontent la vie du personnage et son milieu.",
              ],
            },
            {
              level: 3,
              statement: "Défi. À la manière de Balzac, décrivez en dix à douze lignes la chambre d'un personnage de votre invention, sans jamais décrire ce personnage lui-même. Le lecteur doit pouvoir deviner, grâce aux objets, son âge approximatif, sa situation (riche ou pauvre, seul ou entouré) et un trait de son caractère. Votre description sera organisée (point d'observation, indicateurs spatiaux) et fera appel à au moins trois sens. Ensuite, dites en deux phrases ce que vous avez voulu faire deviner.",
              hint: "Choisissez d'abord le personnage en secret (âge, situation, caractère), puis cherchez cinq ou six objets qui le révèlent. Faites entrer quelqu'un dans la chambre pour avoir un point d'observation.",
              solution: [
                "Exemple : « Quand Inès poussa la porte, une odeur de colle et de papier ancien lui sauta au visage. Au fond, sous la fenêtre, un bureau disparaissait sous des maquettes d'avions inachevées. Sur l'étagère de gauche, des dizaines de romans d'aventure s'alignaient par ordre de taille, sans un grain de poussière. Au-dessus du lit, soigneusement tiré, une carte du monde était piquée d'épingles rouges. Contre le mur, une paire de chaussons usés attendait près d'une canne. Sur la table de nuit, un réveil tictaquait à côté d'une photographie jaunie : un jeune pilote souriait devant son appareil. Le tapis était râpé, mais chaque objet était à sa place. »",
                "Organisation : un point d'observation (Inès qui entre) ; des indicateurs spatiaux (« Au fond », « Sur l'étagère de gauche », « Au-dessus du lit », « Contre le mur », « Sur la table de nuit ») ; trois sens (l'odorat : colle et papier ; la vue : maquettes, carte, photographie ; l'ouïe : le réveil qui tictaque).",
                "Ce qu'on fait deviner : un homme âgé (la canne, les chaussons, la photographie jaunie d'un jeune pilote, qui est sans doute lui autrefois), qui vit modestement (tapis râpé) et peut-être seul. Il est passionné de voyages et d'aviation, et très ordonné (livres rangés par taille, lit tiré, « chaque objet à sa place »).",
                "Pour vous corriger : vérifiez qu'aucune phrase ne décrit directement le personnage, que chaque objet est un indice, et que l'imparfait domine.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez ce que vous savez sur la description et le portrait.",
            statements: [
              { text: "Une description fait avancer l'action très rapidement.", true: false, why: "Au contraire, elle fait une pause dans le récit pour montrer un lieu, un objet ou un personnage." },
              { text: "Le temps le plus employé dans une description au passé est l'imparfait.", true: true, why: "L'imparfait sert à peindre l'arrière-plan, ce qui dure, alors que le passé simple raconte les actions." },
              { text: "Un portrait décrit seulement l'apparence physique d'un personnage.", true: false, why: "Le portrait peut aussi être moral : il présente le caractère, les qualités et les défauts." },
              { text: "« Au premier plan », « plus loin » et « au fond » sont des indicateurs spatiaux.", true: true, why: "Ils situent les éléments dans l'espace et guident le regard du lecteur." },
              { text: "Dans le roman réaliste, un détail sans utilité pour l'action est une erreur de l'auteur.", true: false, why: "Ces détails produisent un « effet de réel » : ils rendent le monde du roman vraisemblable." },
              { text: "Chez Balzac, la description d'un lieu peut expliquer le caractère de celui qui y vit.", true: true, why: "Au début du Père Goriot, la pension Vauquer et sa propriétaire se ressemblent et s'expliquent l'une par l'autre." },
              { text: "Une description ne fait appel qu'à la vue.", true: false, why: "Elle peut mobiliser les cinq sens : odeurs, bruits, sensations du toucher, goûts." },
            ],
          },
          quiz: [
            { q: "Comment appelle-t-on la description d'un personnage ?", options: ["Un dialogue entre personnages", "Une chute", "Un résumé de l'action", "Un portrait"], answer: 3, why: "Le portrait décrit un personnage, son apparence (physique) et son caractère (moral)." },
            { q: "Quelle fonction a la description de la pension Vauquer chez Balzac ?", options: ["Faire rire le lecteur avec des jeux de mots amusants", "Expliquer le personnage par son lieu de vie", "Accélérer brusquement l'action du roman"], answer: 1, why: "Balzac montre que la pension et sa propriétaire se ressemblent : le lieu révèle la personne." },
            { q: "Dans « Plus loin, une lampe fumait », quel est le rôle de « Plus loin » ?", options: ["Un indicateur spatial", "Un complément de temps", "Un verbe de perception", "Une comparaison"], answer: 0, why: "« Plus loin » situe la lampe dans l'espace et organise le parcours du regard." },
            { q: "Comment Zola présente-t-il la mine du Voreux dans Germinal ?", options: ["Comme un château de conte de fées", "Comme un lieu calme et reposant", "Comme une bête qui avale les hommes", "Comme une simple usine sans importance"], answer: 2, why: "Cette image symbolique fait de la mine un monstre et dénonce la dureté du travail des mineurs." },
            { q: "Quel détail d'un portrait révèle le mieux un milieu social modeste ?", options: ["Des yeux bleus et des cheveux blonds", "Une grande taille et un air sérieux", "Un sourire timide et une voix douce", "Une veste reprisée aux coudes"], answer: 3, why: "Les vêtements usés et réparés sont un indice de pauvreté ; les autres traits ne disent rien du milieu." },
          ],
          trap: "Faire la liste des éléments décrits sans dire à quoi sert la description. Il faut toujours expliquer sa fonction : faire vrai, révéler un personnage ou un milieu, symboliser, préparer la suite.",
          method: "Pour analyser une description, suivez le regard : d'où regarde-t-on, dans quel ordre, avec quels sens ? Puis posez la question décisive : qu'apprend-on du personnage ou de la société grâce à ces détails ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'narrateur-point-de-vue',
          title: 'Narrateur et points de vue',
          minutes: 30,
          objectives: [
            "Distinguer l'auteur, le narrateur et les personnages d'un récit.",
            "Identifier si le narrateur est un personnage de l'histoire ou s'il lui est extérieur.",
            "Reconnaître les trois points de vue : omniscient, interne et externe.",
            "Analyser l'effet produit par un point de vue et réécrire un passage en changeant de point de vue.",
          ],
          course: [
            {
              heading: "Auteur, narrateur, personnages",
              paragraphs: [
                "L'auteur est la personne réelle qui a écrit le livre : Guy de Maupassant, né en 1850 et mort en 1893, est l'auteur de La Parure. Le narrateur est la voix qui raconte l'histoire à l'intérieur du texte. Il n'existe que dans le livre. Les personnages sont les êtres inventés qui agissent dans l'histoire, comme Mathilde Loisel.",
                "Il ne faut pas confondre l'auteur et le narrateur, même quand le récit est écrit à la première personne. Si un romancier fait parler un « je » qui est un vieux marin, ce « je » n'est pas le romancier : c'est un narrateur inventé. On dit « le narrateur raconte » et non « l'auteur raconte » quand on analyse un récit.",
              ],
              box: { label: "Définition", text: "L'auteur est la personne réelle qui écrit. Le narrateur est la voix, inventée, qui raconte l'histoire dans le texte. Les personnages sont les êtres de fiction qui agissent dans l'histoire." },
            },
            {
              heading: "Le narrateur est-il dans l'histoire ?",
              paragraphs: [
                "Premier cas, le narrateur est un personnage de l'histoire : il raconte à la première personne (« je ») ce qu'il a vécu, comme héros ou comme témoin. On parle de narrateur-personnage. Maupassant aime ce procédé : souvent, au cours d'une soirée, un personnage raconte à ses amis une aventure qu'il a vécue. C'est un récit encadré, qui donne l'impression d'un témoignage vrai.",
                "Second cas, le narrateur est extérieur à l'histoire : il ne participe pas aux événements et raconte à la troisième personne (« il », « elle »). C'est le cas le plus fréquent dans le roman réaliste, par exemple dans La Parure ou dans Germinal. Il existe des cas curieux : Madame Bovary (1857) commence par un « nous », celui des camarades de classe du jeune Charles Bovary, puis ce « nous » disparaît et le récit passe à la troisième personne.",
              ],
              box: { label: "À retenir", text: "Narrateur-personnage : il participe à l'histoire et dit « je ». Narrateur extérieur : il ne participe pas à l'histoire et raconte à la troisième personne." },
            },
            {
              heading: "Les trois points de vue",
              paragraphs: [
                "Le point de vue (on dit aussi la focalisation) répond à la question : à travers quel regard le lecteur découvre-t-il l'histoire ? Dans le point de vue omniscient, le narrateur sait tout : il connaît les pensées et les sentiments de tous les personnages, leur passé, parfois leur avenir. Il peut même commenter et juger. C'est le point de vue préféré de Balzac, qui explique longuement ses personnages et la société.",
                "Dans le point de vue interne, le lecteur voit l'histoire à travers les yeux d'un seul personnage : il ne connaît que ce que ce personnage voit, entend, pense et ressent. Les indices sont les verbes de perception (« il vit », « elle entendit », « lui parut ») et l'expression de ses pensées. Flaubert raconte souvent Madame Bovary à travers le regard d'Emma.",
                "Dans le point de vue externe, le narrateur se place à l'extérieur des personnages, comme une caméra : il montre leurs gestes et leurs paroles, mais ne dit pas ce qu'ils pensent. Il ne sait parfois même pas leur nom. Au début de Germinal, Zola fait avancer dans la nuit « un homme » seul sur une route, sans le nommer : on ne découvre que plus tard qu'il s'appelle Étienne Lantier.",
              ],
              box: { label: "Repère", text: "Omniscient : le narrateur sait tout, même les pensées de chacun. Interne : on voit par les yeux d'un seul personnage. Externe : on voit de l'extérieur, comme une caméra, sans accès aux pensées." },
            },
            {
              heading: "Pourquoi choisir un point de vue ?",
              paragraphs: [
                "Chaque point de vue produit un effet différent. Le point de vue omniscient permet d'expliquer les causes et les conséquences, de montrer les mécanismes de la société : c'est utile au romancier réaliste qui veut faire comprendre le monde. Le point de vue interne fait partager les émotions d'un personnage : le lecteur s'identifie à lui, et la description d'un lieu se colore de ses sentiments (une mine paraît effrayante à celui qui la découvre). Le point de vue externe crée du mystère ou du suspense, et laisse le lecteur juger seul.",
                "Un même récit change souvent de point de vue : une nouvelle peut commencer en point de vue externe, puis passer en point de vue interne quand le personnage est présenté. Pour identifier le point de vue d'un passage, posez-vous trois questions : qui voit ? que sait-on des pensées ? le narrateur en sait-il plus que les personnages ?",
              ],
            },
          ],
          keyPoints: [
            "L'auteur est une personne réelle ; le narrateur est la voix qui raconte dans le texte.",
            "Narrateur-personnage : il dit « je » et participe à l'histoire ; narrateur extérieur : il raconte à la troisième personne.",
            "Point de vue omniscient : le narrateur sait tout, même les pensées de tous les personnages.",
            "Point de vue interne : on voit par les yeux d'un seul personnage (verbes de perception, pensées).",
            "Point de vue externe : on voit de l'extérieur, comme une caméra, sans connaître les pensées.",
            "Effets : l'omniscient explique, l'interne fait partager les émotions, l'externe crée du mystère.",
          ],
          example: {
            statement: "Trois passages écrits pour l'exercice racontent la même scène. A : « Un homme en manteau gris entra dans le café, s'assit près de la fenêtre et commanda un café noir. Il regarda deux fois sa montre. » B : « Paul entra dans le café. Il eut l'impression que tout le monde le regardait. Elle n'était pas encore là ; peut-être ne viendrait-elle pas. » C : « Paul entra dans le café, le cœur battant. Il ignorait que Claire, retenue par son patron, ne viendrait pas ce soir-là, et que cette longue attente allait changer sa vie. » Identifiez le point de vue de chaque passage et justifiez.",
            solution: [
              "Dans les trois passages, le narrateur est extérieur à l'histoire : il raconte à la troisième personne (« Un homme », « Paul », « Il »).",
              "Passage A, point de vue externe : on ne voit que des gestes (« entra », « s'assit », « commanda », « regarda deux fois sa montre ») ; le personnage n'est pas nommé (« Un homme ») et ses pensées restent cachées. Le lecteur devine l'impatience, mais le narrateur ne la dit pas.",
              "Passage B, point de vue interne : on suit les impressions et les pensées de Paul (« Il eut l'impression », « peut-être ne viendrait-elle pas »). On ne sait que ce que Paul sait : il ignore si elle viendra.",
              "Passage C, point de vue omniscient : le narrateur en sait plus que le personnage. Il connaît la situation de Claire (« retenue par son patron »), que Paul ignore, et même l'avenir (« allait changer sa vie »).",
              "Conclusion : A est en point de vue externe (mystère), B en point de vue interne (on partage l'attente de Paul), C en point de vue omniscient (le narrateur domine toute l'histoire).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Phrases écrites pour l'exercice. Pour chacune, dites si le narrateur est un personnage ou s'il est extérieur à l'histoire, puis indiquez le point de vue. a) « Je poussai la porte de la boutique et je reconnus aussitôt l'odeur de mon enfance. » b) « Le marchand, qui se croyait seul, ne savait pas que son apprenti l'observait ; l'apprenti, lui, pensait déjà à s'enfuir. » c) « Une femme descendit du train. Elle posa sa valise, regarda autour d'elle, puis s'éloigna vers la sortie. » d) « Julie entra dans la classe. Les murs lui parurent immenses ; elle se demanda si elle trouverait une amie. »",
              hint: "Cherchez d'abord la personne (je ou il, elle). Puis demandez-vous si l'on connaît les pensées d'un personnage, de plusieurs personnages, ou d'aucun.",
              solution: [
                "a) Narrateur-personnage (« Je poussai », « mon enfance ») ; point de vue interne : on perçoit la scène par ses sens (« je reconnus [...] l'odeur »).",
                "b) Narrateur extérieur (troisième personne) ; point de vue omniscient : le narrateur connaît les pensées de deux personnages et ce que le marchand ignore.",
                "c) Narrateur extérieur ; point de vue externe : seuls les gestes sont montrés, la femme n'est pas nommée et ses pensées restent inconnues.",
                "d) Narrateur extérieur ; point de vue interne : on partage les perceptions et les pensées de Julie (« lui parurent », « elle se demanda »).",
              ],
            },
            {
              level: 2,
              statement: "Texte écrit pour l'exercice : « Le premier matin, Marthe, quatorze ans, franchit le portail de la filature derrière sa mère. Le bruit la saisit d'abord : des centaines de métiers claquaient ensemble, si fort qu'elle ne s'entendait plus respirer. L'air était plein d'une poussière blanche qui lui piquait les yeux. Au fond de l'atelier, une rangée de femmes penchées lui sembla ne jamais devoir se redresser. Elle chercha le regard de sa mère ; celle-ci avait déjà pris sa place, sans se retourner. » a) Quel est le point de vue ? Relevez trois indices. b) Que ne savons-nous pas, à cause de ce point de vue ? c) Quel effet ce choix produit-il sur le lecteur, et que permet-il de dénoncer ?",
              hint: "Repérez les verbes de perception et les sensations. Pour la question b, pensez au personnage de la mère.",
              solution: [
                "a) Point de vue interne, celui de Marthe. Indices : les sensations qu'elle éprouve (« Le bruit la saisit », « elle ne s'entendait plus respirer », « lui piquait les yeux ») ; le verbe de perception « lui sembla » ; son geste et son attente (« Elle chercha le regard de sa mère »).",
                "b) Nous ne savons pas ce que pense la mère : nous voyons seulement qu'elle a pris sa place « sans se retourner ». Nous ne savons pas non plus ce que ressentent les ouvrières : elles sont vues de loin, par les yeux de Marthe.",
                "c) Le lecteur découvre l'usine avec les yeux d'une enfant, comme elle, pour la première fois : il partage sa surprise et sa peur. Ce regard neuf rend sensible la dureté du travail (bruit, poussière, corps courbés) et dénonce le travail des enfants, sans qu'aucun commentaire du narrateur soit nécessaire.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Passage écrit pour l'exercice, en point de vue externe : « Un homme s'arrêta devant la vitrine de la pâtisserie. Il resta longtemps immobile. Puis il fouilla dans ses poches, compta quelques pièces et repartit sans entrer. » a) Réécrivez ce passage en point de vue interne, en six à huit lignes, à travers le regard de l'homme. b) Réécrivez-le en point de vue omniscient, en ajoutant au moins une information que l'homme lui-même ne connaît pas. c) Expliquez en deux phrases quelle version vous semble la plus émouvante, et pourquoi.",
              hint: "Pour l'interne, donnez un nom à l'homme et faites entrer ses perceptions et ses pensées. Pour l'omniscient, le narrateur peut révéler le passé, l'avenir ou les pensées d'un autre personnage.",
              solution: [
                "a) Exemple en point de vue interne : « Antoine s'arrêta devant la vitrine. Derrière la vitre, les tartes aux fraises brillaient comme des bijoux, et il crut sentir, à travers le verre, l'odeur du sucre chaud. Demain, c'était l'anniversaire de sa fille. Il fouilla dans ses poches : trois pièces, pas plus. Il les compta deux fois, en espérant s'être trompé. Une tarte coûtait le double. Il repartit en se répétant qu'il trouverait autre chose. »",
                "b) Exemple en point de vue omniscient : « Antoine s'arrêta devant la vitrine de la pâtisserie, et il y resta longtemps, car il pensait à l'anniversaire de sa fille. Il compta ses pièces et repartit sans entrer. Il ne savait pas que la pâtissière, qui l'avait vu par la fenêtre, avait été pauvre elle aussi, et qu'elle s'apprêtait à le rappeler. Ce petit geste allait devenir le début d'une longue amitié. »",
                "Ce que l'on vérifie : en a), tout passe par les sens et les pensées d'Antoine (« il crut sentir », « en espérant s'être trompé »), et l'on ne sait rien des autres. En b), le narrateur connaît les pensées de la pâtissière, son passé, et même l'avenir (« allait devenir »).",
                "c) Exemple de réponse : la version interne est la plus émouvante, car on partage de l'intérieur la honte et la tendresse du père. La version externe crée seulement du mystère, et la version omniscienne rassure le lecteur en lui révélant la suite.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion à sa définition.",
            pairs: [
              { left: "L'auteur", right: "La personne réelle qui a écrit le livre" },
              { left: "Le narrateur", right: "La voix qui raconte l'histoire dans le texte" },
              { left: "Le narrateur-personnage", right: "Il dit « je » et participe à l'histoire qu'il raconte" },
              { left: "Le point de vue omniscient", right: "Le narrateur sait tout, même les pensées de chacun" },
              { left: "Le point de vue interne", right: "On voit tout à travers les yeux d'un seul personnage" },
              { left: "Le point de vue externe", right: "On voit les personnages de l'extérieur, comme une caméra" },
            ],
          },
          quiz: [
            { q: "Quelle différence y a-t-il entre l'auteur et le narrateur ?", options: ["L'auteur est réel, le narrateur n'existe que dans le texte", "Aucune : ce sont deux mots différents pour désigner la même personne", "Le narrateur est toujours celui qui écrit la préface et le résumé du livre"], answer: 0, why: "L'auteur est une personne réelle ; le narrateur est une voix inventée, même quand il dit « je »." },
            { q: "« Je vis tout de suite que mon frère mentait. » Qui raconte ?", options: ["Un narrateur extérieur à l'histoire", "L'auteur en personne, forcément", "Un personnage secondaire décrit de loin", "Un narrateur-personnage"], answer: 3, why: "Le « je » participe à l'histoire (« mon frère ») : c'est un narrateur-personnage, à ne pas confondre avec l'auteur." },
            { q: "Quel point de vue permet de connaître les pensées de tous les personnages ?", options: ["Le point de vue externe", "Le point de vue omniscient", "Le point de vue interne", "Aucun : c'est impossible dans un roman"], answer: 1, why: "Le narrateur omniscient sait tout : pensées de chacun, passé et parfois avenir." },
            { q: "Au début de Germinal, Zola montre « un homme » qui marche seul dans la nuit, sans le nommer. Quel est l'effet de ce point de vue externe ?", options: ["Il explique tout le passé du personnage", "Il fait rire le lecteur", "Il crée du mystère autour du personnage", "Il donne les pensées secrètes de l'homme"], answer: 2, why: "Vu de l'extérieur, comme par une caméra, l'inconnu intrigue : le lecteur veut savoir qui il est et où il va." },
            { q: "Quel indice signale le plus sûrement un point de vue interne ?", options: ["Une date précise et un nom de ville réelle", "Les perceptions d'un seul personnage", "Des actions décrites sans aucun sentiment", "Un narrateur qui connaît l'avenir de tous"], answer: 1, why: "Dans le point de vue interne, tout passe par ce qu'un personnage voit, entend, ressent et pense." },
          ],
          trap: "Confondre l'auteur et le narrateur, ou croire qu'un récit à la troisième personne est forcément en point de vue omniscient. Un récit en « il » peut très bien suivre le regard d'un seul personnage (point de vue interne).",
          method: "Pour identifier un point de vue, posez trois questions dans l'ordre : qui voit la scène ? connaît-on des pensées, et de qui ? le narrateur en sait-il plus que les personnages ? Relevez une citation pour chaque réponse.",
        },
      ],
    },
  ],
}
