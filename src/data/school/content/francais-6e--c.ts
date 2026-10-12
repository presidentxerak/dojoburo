import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-6e',
  chapters: [
    {
      id: 'poesie',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'vers-strophe-rime',
          title: 'Le vers, la strophe et la rime',
          minutes: 30,
          objectives: [
            "Identifier le vers, la strophe et la rime dans un poème.",
            "Compter les syllabes d'un vers en appliquant la règle du e muet.",
            "Nommer les principales strophes (distique, tercet, quatrain) et la disposition des rimes (suivies, croisées, embrassées).",
          ],
          course: [
            {
              heading: "Le vers : la ligne du poème",
              paragraphs: [
                "Un poème se reconnaît d'abord à sa forme sur la page. Il n'est pas écrit en lignes qui vont jusqu'au bord de la feuille, comme un récit : il est découpé en vers. Un vers est une ligne de poème. Il commence souvent par une majuscule, même quand la phrase n'est pas terminée, et il s'arrête là où le poète a décidé de revenir à la ligne.",
                "Dans la poésie traditionnelle, les vers ont une longueur précise, mesurée en syllabes. Le vers de 12 syllabes s'appelle un alexandrin : c'est le plus célèbre de la poésie française. Le vers de 10 syllabes est un décasyllabe et le vers de 8 syllabes un octosyllabe. Par exemple, « Le petit chat dort au soleil » compte 8 syllabes : c'est un octosyllabe.",
                "Tous les poèmes ne suivent pas ces règles. Depuis la fin du XIXe siècle, beaucoup de poètes écrivent en vers libres : leurs vers n'ont pas de nombre fixe de syllabes et ne riment pas forcément. Jacques Prévert ou Guillaume Apollinaire en ont souvent écrit. Le texte reste pourtant un poème, car il est découpé en vers et joue avec les sons et les images.",
              ],
              box: { label: "Définition", text: "Un vers est une ligne de poème. On le mesure en syllabes : alexandrin (12 syllabes), décasyllabe (10), octosyllabe (8). Le vers libre n'a pas de nombre fixe de syllabes." },
            },
            {
              heading: "Compter les syllabes d'un vers",
              paragraphs: [
                "Une syllabe se forme autour d'un son de voyelle que l'on prononce. Pour compter les syllabes d'un vers, on le découpe à l'oral en frappant dans ses mains : « Le / pe / tit / chat / dort / au / so / leil » donne 8 syllabes. Attention : on compte les sons, pas les lettres. « Oiseau » ne fait que deux syllabes : « oi / seau ».",
                "La difficulté vient du e muet, ce e que l'on n'entend presque pas en parlant. En poésie, il obéit à trois règles. Devant une consonne, il compte : « U / ne / ro / se / fleu / rit » fait 6 syllabes, car les e de « une » et de « rose » sont suivis d'une consonne. Devant une voyelle (ou un h muet), il ne compte pas, car il s'efface : « une étoile » se dit « u / né / toi / le ». À la fin du vers, il ne compte jamais.",
                "Prenons un alexandrin : « Le soir descend sans bruit sur la ville endormie ». On découpe : « Le / soir / des / cend / sans / bruit / sur / la / vil / len / dor / mi(e) ». Le e de « ville » disparaît devant le e de « endormie », et le e final de « endormie » ne compte pas. On trouve bien 12 syllabes.",
              ],
              box: { label: "Règle", text: "Le e muet compte devant une consonne (« u / ne / ro / se »). Il ne compte pas devant une voyelle ou un h muet (« u / né / toi / le »). Il ne compte jamais à la fin du vers." },
            },
            {
              heading: "La strophe : un groupe de vers",
              paragraphs: [
                "Dans un poème, les vers sont souvent regroupés en paquets séparés par une ligne blanche. Ces groupes s'appellent des strophes. On peut comparer la strophe au paragraphe d'un récit : elle rassemble des vers qui développent souvent une même idée ou un même moment.",
                "Les strophes portent un nom selon leur nombre de vers : un distique a 2 vers, un tercet 3 vers, un quatrain 4 vers, un quintil 5 vers et un sizain 6 vers. Le quatrain est la strophe la plus fréquente dans la poésie française. Certaines formes fixes combinent plusieurs strophes : le sonnet, par exemple, est composé de deux quatrains suivis de deux tercets, soit 14 vers.",
              ],
              box: { label: "Repère", text: "Distique : 2 vers. Tercet : 3 vers. Quatrain : 4 vers. Quintil : 5 vers. Sizain : 6 vers. Sonnet : 2 quatrains + 2 tercets (14 vers)." },
            },
            {
              heading: "La rime et sa disposition",
              paragraphs: [
                "La rime est le retour du même son à la fin de deux vers ou plus. Elle porte au moins sur la dernière voyelle prononcée. Ce qui compte, c'est le son et non l'orthographe : « bateaux » et « flots » riment, car ils se terminent tous deux par le son [o], même s'ils ne s'écrivent pas de la même façon. En revanche, « fleur » et « fleuve » ne riment pas.",
                "Pour décrire la disposition des rimes, on donne une lettre à chaque son : A pour le premier, B pour le deuxième, et ainsi de suite. Dans les rimes suivies (ou plates), on a AABB : deux vers riment ensemble, puis les deux suivants. Dans les rimes croisées, on a ABAB : les rimes alternent. Dans les rimes embrassées, on a ABBA : la rime B est entourée, comme « embrassée », par la rime A.",
                "Par exemple, si quatre vers se terminent par « jardin, matin, rose, pose », les rimes sont suivies (AABB). S'ils se terminent par « nuit, chemin, bruit, main », elles sont croisées (ABAB). S'ils se terminent par « ciel, fleur, cœur, miel », elles sont embrassées (ABBA).",
              ],
              box: { label: "À retenir", text: "Rimes suivies ou plates : AABB. Rimes croisées : ABAB. Rimes embrassées : ABBA. Deux mots riment quand ils se terminent par le même son, quelle que soit leur orthographe." },
            },
          ],
          keyPoints: [
            "Un vers est une ligne de poème ; une strophe est un groupe de vers séparé des autres par une ligne blanche.",
            "Alexandrin : 12 syllabes. Décasyllabe : 10 syllabes. Octosyllabe : 8 syllabes. Le vers libre n'a pas de mesure fixe.",
            "Le e muet compte devant une consonne, ne compte pas devant une voyelle et ne compte jamais en fin de vers.",
            "Distique (2 vers), tercet (3), quatrain (4), quintil (5), sizain (6) ; le sonnet a 14 vers.",
            "La rime est le retour d'un même son en fin de vers : c'est le son qui compte, pas l'orthographe.",
            "Rimes suivies AABB, croisées ABAB, embrassées ABBA.",
          ],
          example: {
            statement: "Voici un quatrain écrit pour l'exercice : « Le vent du soir court sur la plage, / Il pousse au loin les grands bateaux, / Il chante un air doux et sauvage / Et berce l'écume des flots. » (le signe / marque le passage au vers suivant). Nommez la strophe, comptez les syllabes du premier et du dernier vers, puis indiquez la disposition des rimes.",
            solution: [
              "Nommer la strophe : le passage compte 4 vers regroupés, c'est donc un quatrain.",
              "Premier vers : « Le / vent / du / soir / court / sur / la / pla(ge) ». Le e final de « plage » ne compte pas, car il est en fin de vers : on trouve 8 syllabes.",
              "Dernier vers : « Et / ber / ce / l'é / cu / me / des / flots ». Le e de « berce » compte, car il est suivi d'une consonne (l) ; le e de « écume » compte aussi, suivi de « d » : on trouve 8 syllabes.",
              "On peut vérifier le deuxième vers : « Il / pous / sau / loin / les / grands / ba / teaux ». Le e de « pousse » s'efface devant la voyelle de « au » : 8 syllabes. Le poème est écrit en octosyllabes.",
              "Repérer les sons de fin de vers : « plage » [aʒ], « bateaux » [o], « sauvage » [aʒ], « flots » [o].",
              "Donner les lettres : plage A, bateaux B, sauvage A, flots B, soit ABAB.",
              "Conclusion : c'est un quatrain d'octosyllabes à rimes croisées (ABAB).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Comment s'appelle une strophe de 3 vers ? de 4 vers ? de 2 vers ? 2) Voici les derniers mots des vers de trois quatrains. Indiquez pour chacun la disposition des rimes (suivies, croisées ou embrassées). a) jardin, matin, rose, pose. b) nuit, chemin, bruit, main. c) ciel, fleur, cœur, miel.",
              hint: "Donnez la lettre A au premier son, B au deuxième son, puis regardez l'ordre des lettres obtenu.",
              solution: [
                "1) Une strophe de 3 vers est un tercet, une strophe de 4 vers un quatrain, une strophe de 2 vers un distique.",
                "2a) « jardin » et « matin » se terminent par le son [ɛ̃] (A, A), « rose » et « pose » par le son [oz] (B, B) : AABB, ce sont des rimes suivies.",
                "2b) « nuit » et « bruit » riment (A), « chemin » et « main » riment (B), dans l'ordre nuit A, chemin B, bruit A, main B : ABAB, ce sont des rimes croisées.",
                "2c) « ciel » et « miel » riment (A), « fleur » et « cœur » riment (B), dans l'ordre ciel A, fleur B, cœur B, miel A : ABBA, ce sont des rimes embrassées.",
              ],
            },
            {
              level: 2,
              statement: "Comptez les syllabes de chacun de ces vers, écrits pour l'exercice, en montrant votre découpage. Nommez ensuite chaque vers (octosyllabe, décasyllabe ou alexandrin). a) La pluie tombe sur le village b) Une barque glisse sur l'eau c) Le ciel immense s'ouvre à nous d) Le petit cheval blanc galope sous la pluie",
              hint: "Repérez chaque e muet : regardez s'il est suivi d'une consonne, d'une voyelle, ou s'il termine le vers.",
              solution: [
                "a) « La / pluie / tom / be / sur / le / vil / la(ge) » : le e de « tombe » compte (suivi de « s »), le e final de « village » ne compte pas. 8 syllabes : octosyllabe.",
                "b) « U / ne / bar / que / glis / se / sur / l'eau » : les e de « une », « barque » et « glisse » sont suivis d'une consonne, ils comptent. 8 syllabes : octosyllabe.",
                "c) « Le / ciel / im / men / se / s'ou / vrà / nous » : le e de « immense » compte (suivi de « s »), celui de « s'ouvre » s'efface devant « à ». 8 syllabes : octosyllabe.",
                "d) « Le / pe / tit / che / val / blanc / ga / lo / pe / sous / la / pluie » : le e de « galope » compte (suivi de « s »). 12 syllabes : alexandrin.",
                "Résultat : les vers a, b et c sont des octosyllabes, le vers d est un alexandrin.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici un poème écrit pour l'exercice. Strophe 1 : « Dans la forêt, la nuit descend, / Le vieux chêne parle à voix basse, / Un renard file et puis s'efface, / Et le vent froid chante en passant. » Strophe 2 : « Puis l'aube vient, toute dorée, / Un merle reprend son doux chant, / La campagne est toute colorée, / Le blé danse au milieu du champ. » 1) Nommez les strophes. 2) Donnez la disposition des rimes de chaque strophe. 3) Le poème est écrit en octosyllabes, mais un vers compte une syllabe de trop. Trouvez-le, prouvez-le en comptant, puis corrigez-le en changeant un seul mot.",
              hint: "Comptez chaque vers en frappant les syllabes. Pour la correction, cherchez un mot de deux syllabes que vous pouvez remplacer par un mot d'une syllabe sans changer le sens.",
              solution: [
                "1) Les deux strophes comptent 4 vers : ce sont deux quatrains.",
                "2) Strophe 1 : « descend » [ɑ̃] A, « basse » [as] B, « s'efface » [as] B, « passant » [ɑ̃] A, soit ABBA : rimes embrassées.",
                "2) Strophe 2 : « dorée » [e] A, « chant » [ɑ̃] B, « colorée » [e] A, « champ » [ɑ̃] B, soit ABAB : rimes croisées.",
                "3) On compte le troisième vers de la strophe 2 : « La / cam / pa / gnest / tou / te / co / lo / rée » : le e de « campagne » s'efface devant « est », mais celui de « toute » compte, car il est suivi d'une consonne. On trouve 9 syllabes au lieu de 8.",
                "Vérification d'un autre vers pour comparer : « Le / vieux / chê / ne / par / là / voix / bas(se) » fait bien 8 syllabes.",
                "Correction : on remplace « toute » (deux syllabes ici) par « si » (une syllabe) : « La / cam / pa / gnest / si / co / lo / rée » fait 8 syllabes, et le sens est conservé.",
                "Résultat : deux quatrains, rimes embrassées puis croisées ; le vers fautif devient « La campagne est si colorée ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot de la poésie à sa définition.",
            pairs: [
              { left: "Distique", right: "Strophe de deux vers" },
              { left: "Tercet", right: "Strophe de trois vers" },
              { left: "Quatrain", right: "Strophe de quatre vers" },
              { left: "Alexandrin", right: "Vers de douze syllabes" },
              { left: "Octosyllabe", right: "Vers de huit syllabes" },
              { left: "Rimes embrassées", right: "Disposition ABBA" },
            ],
          },
          quiz: [
            { q: "Combien de syllabes compte un alexandrin ?", options: ["Huit", "Dix", "Douze", "Quatorze"], answer: 2, why: "L'alexandrin est le vers de 12 syllabes ; l'octosyllabe en compte 8 et le décasyllabe 10." },
            { q: "Les vers se terminent par « soleil, pareil, jardin, matin ». Les rimes sont...", options: ["croisées (ABAB)", "suivies (AABB)", "embrassées (ABBA)"], answer: 1, why: "« soleil » et « pareil » riment entre eux (AA), puis « jardin » et « matin » (BB) : ce sont des rimes suivies." },
            { q: "Combien de syllabes compte le vers « Une étoile brille » ?", options: ["4", "5", "6", "7"], answer: 1, why: "« U / né / toi / le / bri(lle) » : le e de « une » s'efface devant la voyelle, celui de « étoile » compte devant « b », le e final ne compte pas." },
            { q: "Une strophe de quatre vers s'appelle...", options: ["un tercet", "un distique", "un sizain", "un quatrain"], answer: 3, why: "Le quatrain a quatre vers ; le tercet en a trois, le distique deux et le sizain six." },
            { q: "Deux mots riment quand...", options: ["ils finissent par le même son", "ils s'écrivent de la même façon à la fin", "ils ont le même nombre de lettres"], answer: 0, why: "La rime est une affaire de son : « bateaux » et « flots » riment alors qu'ils ne s'écrivent pas de la même façon." },
          ],
          trap: "Compter le e muet à la fin du vers ou devant une voyelle : dans « une étoile », le e de « une » s'efface, et le e final d'un vers ne se compte jamais.",
          method: "Pour compter les syllabes, recopiez le vers en séparant chaque syllabe par une barre, entourez chaque e muet et notez au-dessus s'il est suivi d'une consonne (il compte), d'une voyelle (il s'efface) ou s'il termine le vers (il s'efface).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'sonorites-images',
          title: 'Jouer avec les sons et les images',
          minutes: 30,
          objectives: [
            "Identifier les jeux sur les sonorités : allitération, assonance, répétition, onomatopée.",
            "Identifier les images poétiques : comparaison, métaphore, personnification.",
            "Analyser l'effet produit par un son ou une image dans un poème.",
          ],
          course: [
            {
              heading: "La musique des sons : allitération et assonance",
              paragraphs: [
                "La poésie s'écoute autant qu'elle se lit. Les poètes choisissent leurs mots pour leur sens, mais aussi pour leur musique. Le titre du programme le dit bien : la poésie sait « chanter et enchanter le monde ». Deux procédés jouent particulièrement avec les sons : l'allitération et l'assonance.",
                "L'allitération est la répétition d'un même son de consonne dans des mots proches. Un exemple célèbre se trouve dans Andromaque de Jean Racine (1667) : « ces serpents qui sifflent sur vos têtes ». La répétition du son [s] fait entendre le sifflement des serpents. Attention, on parle de son et non de lettre : « ce », « sable » et « leçon » font tous entendre le son [s].",
                "L'assonance est la répétition d'un même son de voyelle. Dans la phrase inventée « La pluie, la nuit, tout luit et fuit », le son [i] revient quatre fois et donne une impression de légèreté. Ces procédés servent à imiter un bruit (le vent, l'eau, un galop), à créer une ambiance (douce, inquiétante, joyeuse) ou à donner du rythme au vers.",
              ],
              box: { label: "Définition", text: "Allitération : répétition d'un même son de consonne (« six souris sautent »). Assonance : répétition d'un même son de voyelle (« la pluie, la nuit »). C'est le son qui compte, pas la lettre." },
            },
            {
              heading: "Répétitions et onomatopées",
              paragraphs: [
                "La répétition d'un mot ou d'un vers entier donne au poème un air de chanson et permet d'insister sur une idée. Quand un même mot ou un même groupe de mots revient au début de plusieurs vers, on parle d'anaphore : « Je voudrais... / Je voudrais... / Je voudrais... ». Le vers qui revient régulièrement entre les strophes s'appelle un refrain, comme dans une chanson.",
                "L'onomatopée est un mot qui imite un bruit : « plouf », « tic-tac », « boum », « cocorico », « miaou ». Les poètes qui écrivent pour les enfants, comme Robert Desnos ou Maurice Carême, aiment ces mots sonores qui rendent le poème vivant et amusant à dire à voix haute.",
              ],
            },
            {
              heading: "La comparaison : rapprocher deux réalités",
              paragraphs: [
                "Une image poétique rapproche deux réalités différentes pour faire voir le monde autrement. La plus simple est la comparaison. Elle rapproche deux éléments grâce à un mot-outil, appelé outil de comparaison : « comme », « tel », « pareil à », « semblable à », « ressembler à », « on dirait ».",
                "Une comparaison comprend quatre éléments. Dans « Les étoiles brillent comme des diamants », le comparé est ce dont on parle (les étoiles), le comparant est ce à quoi on le compare (des diamants), l'outil de comparaison relie les deux (comme) et le point commun explique le rapprochement (brillent). Le point commun n'est pas toujours exprimé.",
                "Les poètes aiment les comparaisons surprenantes, qui obligent le lecteur à réfléchir. Paul Éluard commence un poème du recueil L'amour la poésie (1929) par ce vers célèbre : « La terre est bleue comme une orange ». L'image étonne, car une orange n'est pas bleue : elle invite à imaginer la Terre ronde et lumineuse comme un fruit.",
              ],
              box: { label: "Repère", text: "Comparaison = comparé + outil + comparant (+ point commun). Outils : comme, tel, ainsi que, pareil à, semblable à, ressembler à, on dirait. Exemple : « Ses joues sont rouges comme des cerises »." },
            },
            {
              heading: "La métaphore et la personnification",
              paragraphs: [
                "La métaphore rapproche, elle aussi, deux réalités, mais sans outil de comparaison. Au lieu de dire « La lune est ronde comme un ballon », on écrit « La lune est un ballon blanc » ou même « le ballon blanc de la nuit ». La métaphore est plus forte que la comparaison, car elle fait comme si le comparé était vraiment le comparant. Attention : le verbe « être » n'est pas un outil de comparaison.",
                "La personnification donne des caractéristiques humaines (des gestes, des sentiments, la parole) à un animal, une chose ou une idée. « Le vent hurle », « la forêt s'endort », « la vieille maison soupire » sont des personnifications : le vent, la forêt et la maison agissent comme des personnes. Ce procédé rend la nature vivante et proche de nous.",
              ],
              box: { label: "À retenir", text: "Comparaison : avec un outil (« ses yeux brillent comme des étoiles »). Métaphore : sans outil (« ses yeux sont des étoiles »). Personnification : une chose agit comme une personne (« le vent chante »)." },
            },
          ],
          keyPoints: [
            "Allitération : répétition d'un son de consonne. Assonance : répétition d'un son de voyelle.",
            "Anaphore : un même mot repris au début de plusieurs vers. Onomatopée : un mot qui imite un bruit.",
            "Comparaison : comparé + outil (comme, tel, pareil à...) + comparant, avec parfois un point commun.",
            "Métaphore : rapprochement sans outil de comparaison (« la lune est un ballon blanc »).",
            "Personnification : une chose ou un animal reçoit des traits humains (« la forêt s'endort »).",
            "Toujours dire l'effet produit : imiter un bruit, créer une ambiance, faire voir le monde autrement.",
          ],
          example: {
            statement: "Voici quatre vers écrits pour l'exercice : « Le vent siffle, souffle et s'enfuit, / La mer est un miroir immense, / Les vagues, comme des enfants, dansent, / Et la lune sourit à la nuit. » Relevez un jeu sur les sons et trois images, en les nommant et en expliquant leur effet.",
            solution: [
              "Vers 1 : les sons [s] (siffle, souffle, s'enfuit) et [f] (siffle, souffle, s'enfuit) se répètent. C'est une allitération, qui imite le bruit du vent.",
              "Vers 2 : « la mer est un miroir » rapproche la mer d'un miroir sans outil de comparaison. C'est une métaphore : elle fait imaginer une mer calme et brillante qui reflète le ciel.",
              "Vers 3 : « comme des enfants » rapproche les vagues (comparé) et des enfants (comparant) grâce à l'outil « comme ». C'est une comparaison ; le point commun est le mouvement joyeux. Le verbe « dansent » donne aussi aux vagues une action humaine.",
              "Vers 4 : « la lune sourit » prête à la lune un geste humain. C'est une personnification, qui rend la nuit douce et bienveillante.",
              "Conclusion : le poème associe une allitération en [s] et [f], une métaphore, une comparaison et une personnification pour faire du paysage nocturne un monde vivant et enchanté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque phrase, écrite pour l'exercice, dites s'il s'agit d'une comparaison, d'une métaphore ou d'une personnification. a) Le soleil est une orange géante. b) La neige tombe comme du coton. c) La vieille maison soupire dans le vent. d) Ses cheveux sont pareils à des fils d'or. e) Le ruisseau chante entre les pierres.",
              hint: "Cherchez d'abord un outil de comparaison (comme, pareil à...). S'il n'y en a pas, demandez-vous si la chose fait une action humaine.",
              solution: [
                "a) Le soleil est rapproché d'une orange sans outil de comparaison : métaphore.",
                "b) La neige est rapprochée du coton grâce à l'outil « comme » : comparaison.",
                "c) Une maison ne peut pas soupirer, c'est un geste humain : personnification.",
                "d) Les cheveux sont rapprochés de fils d'or grâce à l'outil « pareils à » : comparaison.",
                "e) Un ruisseau ne chante pas, c'est une action humaine : personnification.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque vers, écrit pour l'exercice, nommez le procédé sonore (allitération, assonance ou onomatopée), indiquez le son répété ou le bruit imité, puis l'effet produit. a) Le serpent s'avance, sinueux, sur le sable. b) Tic, tac, tic, tac, fait la vieille horloge. c) La pluie, la nuit, tout luit et fuit. d) Un grand galop gronde dans la plaine.",
              hint: "Lisez chaque vers à voix haute : le son qui revient le plus souvent saute à l'oreille. Une consonne donne une allitération, une voyelle une assonance.",
              solution: [
                "a) Le son de consonne [s] revient six fois (serpent, s'avance qui le fait entendre deux fois, sinueux, sur, sable) : allitération. Elle imite le sifflement et le glissement du serpent.",
                "b) « Tic, tac » imite le bruit de l'horloge : onomatopée, renforcée par la répétition. Elle fait entendre le temps qui passe régulièrement.",
                "c) Le son de voyelle [i] revient dans « pluie », « nuit », « luit », « fuit » : assonance. Ce son aigu et léger évoque les gouttes qui brillent et s'échappent.",
                "d) Les sons de consonne [g] et [r] reviennent dans « grand », « galop », « gronde » : allitération. Elle imite le bruit sourd et puissant des sabots.",
              ],
            },
            {
              level: 3,
              statement: "Défi. 1) Dans « Les étoiles brillent comme des diamants », nommez le comparé, l'outil, le comparant et le point commun. 2) Transformez cette comparaison en métaphore. 3) Écrivez une personnification de la pluie. 4) Écrivez un petit poème de quatre vers sur la mer qui contienne au moins une allitération et deux images différentes, puis nommez chaque procédé utilisé.",
              hint: "Pour la métaphore, supprimez l'outil et le point commun. Pour la personnification, prêtez à la pluie un geste ou un sentiment humain.",
              solution: [
                "1) Comparé : les étoiles. Outil : comme. Comparant : des diamants. Point commun : brillent.",
                "2) Métaphore possible : « Les étoiles sont des diamants » ou « les diamants de la nuit ».",
                "3) Personnification possible : « La pluie frappe à ma fenêtre et pleure toute la nuit. » La pluie frappe et pleure comme une personne.",
                "4) Poème possible : « La mer murmure, monte et meurt, / Ses vagues sont des chevaux blancs, / Le sable dort comme un enfant, / Et le phare veille des heures. »",
                "Procédés : vers 1, allitération en [m] (mer, murmure, monte, meurt) qui imite le bruit régulier des vagues, et personnification (la mer murmure). Vers 2, métaphore (les vagues sont des chevaux blancs). Vers 3, comparaison avec l'outil « comme » et personnification (le sable dort). Vers 4, personnification (le phare veille).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les sons et les images.",
            statements: [
              { text: "« Ses yeux sont des étoiles » est une comparaison.", true: false, why: "Il n'y a pas d'outil de comparaison : c'est une métaphore. Le verbe « être » n'est pas un outil." },
              { text: "Une allitération est la répétition d'un même son de consonne.", true: true, why: "Par exemple le son [s] dans « ces serpents qui sifflent sur vos têtes »." },
              { text: "« Le vent gémit dans les branches » est une personnification.", true: true, why: "Gémir est une action humaine prêtée au vent." },
              { text: "L'assonance est la répétition d'un même son de voyelle.", true: true, why: "Par exemple le son [i] dans « la pluie, la nuit, tout luit »." },
              { text: "Dans une comparaison, le mot « comme » est le comparé.", true: false, why: "« Comme » est l'outil de comparaison ; le comparé est ce dont on parle." },
              { text: "« Boum » et « plouf » sont des onomatopées.", true: true, why: "Ce sont des mots qui imitent un bruit." },
              { text: "Pour qu'il y ait allitération, il faut répéter exactement la même lettre.", true: false, why: "C'est le son qui compte : le « c » de « ceci » et le « s » de « sable » font entendre le même son [s]." },
            ],
          },
          quiz: [
            { q: "« La neige tombe comme du coton » : quelle figure reconnaissez-vous ?", options: ["Une métaphore", "Une comparaison", "Une personnification", "Une onomatopée"], answer: 1, why: "L'outil « comme » relie le comparé (la neige) et le comparant (du coton) : c'est une comparaison." },
            { q: "Dans « Ses dents sont des perles », le comparant est...", options: ["« ses dents »", "« perles »", "« sont des »"], answer: 1, why: "Le comparant est ce à quoi on compare : les perles. Les dents sont le comparé." },
            { q: "Quel vers contient une allitération ?", options: ["Mon chat dort près de la fenêtre", "Il fait beau aujourd'hui", "Six souris sautent sans souci"], answer: 2, why: "Le son de consonne [s] revient dans presque tous les mots : six, souris, sautent, sans, souci." },
            { q: "« Le vieux saule pleure au bord de l'eau » : quelle figure reconnaissez-vous ?", options: ["Une personnification", "Une comparaison avec un outil", "Une allitération en [k]"], answer: 0, why: "Pleurer est une action humaine prêtée à un arbre : c'est une personnification." },
            { q: "Le mot « plouf ! » est...", options: ["une comparaison sans outil", "une rime intérieure", "une onomatopée", "une anaphore"], answer: 2, why: "« Plouf » imite le bruit d'un objet qui tombe dans l'eau : c'est une onomatopée." },
          ],
          trap: "Prendre une métaphore pour une comparaison à cause du verbe « être » : « ses yeux sont des étoiles » n'a pas d'outil de comparaison, c'est donc une métaphore.",
          method: "Devant une image, posez-vous trois questions dans l'ordre : y a-t-il un outil (comme, tel, pareil à) ? Si oui, c'est une comparaison. Sinon, deux réalités sont-elles rapprochées ? C'est une métaphore. Une chose agit-elle comme une personne ? C'est une personnification. Terminez toujours par l'effet produit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dire-poeme',
          title: 'Dire un poème à voix haute',
          minutes: 25,
          objectives: [
            "Mémoriser un poème et le dire de façon expressive devant la classe.",
            "Repérer dans le texte les pauses, les e muets et les mots à mettre en valeur.",
            "Adapter sa voix (volume, débit, ton) et sa posture au sens du poème.",
          ],
          course: [
            {
              heading: "Comprendre avant de dire",
              paragraphs: [
                "Dire un poème, ce n'est pas réciter une suite de mots appris par cœur : c'est faire entendre un texte que l'on a compris. Avant de commencer, lisez le poème plusieurs fois en silence. Cherchez dans le dictionnaire les mots que vous ne connaissez pas. Demandez-vous qui parle, à qui, et de quoi parle le poème.",
                "Repérez ensuite l'émotion principale du texte, que l'on appelle le ton : est-il joyeux, triste, mystérieux, inquiétant, amusant, tendre ? C'est ce ton qui guidera votre voix. On ne dit pas un poème sur la tombée de la nuit comme une comptine sur un chat gourmand. Un même poème peut aussi changer de ton d'une strophe à l'autre.",
              ],
            },
            {
              heading: "Respirer et marquer les pauses",
              paragraphs: [
                "La ponctuation vous indique où respirer. Une virgule demande une pause courte, un point une pause plus longue. Un point d'exclamation invite à mettre de l'émotion (joie, surprise, colère), un point d'interrogation à faire monter la voix, et les points de suspension à laisser la phrase en attente.",
                "À la fin d'un vers, on marque une très légère suspension, pour que l'auditeur entende la forme du poème. Mais si la phrase continue sur le vers suivant, sans ponctuation, il ne faut pas s'arrêter longtemps : on garde la voix en suspens et on enchaîne, sinon le sens se perd. Prenez votre respiration aux pauses, jamais au milieu d'un groupe de mots.",
              ],
              box: { label: "Repère", text: "Pour préparer la lecture, annotez votre copie : une barre / pour une pause courte, deux barres // pour une pause longue, un mot souligné pour insister, une flèche qui monte ou qui descend pour l'intonation." },
            },
            {
              heading: "Articuler, prononcer les e muets et faire les liaisons",
              paragraphs: [
                "En poésie traditionnelle, le nombre de syllabes compte. Pour respecter le rythme du vers, il faut prononcer légèrement les e muets qui comptent, c'est-à-dire ceux qui sont suivis d'une consonne. Dans « Le soir tombe doucement », on dit « tom / be / dou / ce / ment », sans exagérer, alors qu'en parlant on dirait plutôt « tomb' douc'ment ».",
                "Faites aussi les liaisons obligatoires, comme entre un déterminant et le nom qui commence par une voyelle : « les oiseaux » se dit « lé-z-oiseaux ». Articulez bien chaque son, en ouvrant la bouche. Parlez assez fort pour que l'élève du fond de la classe vous entende, et pas trop vite : le débit, c'est-à-dire la vitesse de la parole, doit laisser le temps d'écouter les images.",
              ],
            },
            {
              heading: "Mémoriser et se présenter devant la classe",
              paragraphs: [
                "Pour mémoriser, apprenez le poème strophe par strophe. Lisez la première strophe plusieurs fois, cachez-la, redites-la, puis passez à la suivante en reprenant toujours depuis le début. Associez chaque vers à une image dans votre tête : il est plus facile de se souvenir d'un film intérieur que d'une liste de mots. Révisez la veille, puis le matin même : la mémoire fixe mieux un texte répété plusieurs jours de suite.",
                "Le jour venu, tenez-vous debout, les deux pieds bien posés au sol, les bras le long du corps ou les mains tranquilles. Attendez le silence, regardez votre public, annoncez le titre du poème et le nom de son auteur. Dites le poème en regardant la classe, puis marquez un temps de silence à la fin avant de retourner à votre place.",
              ],
              box: { label: "À retenir", text: "Comprendre le sens et choisir le ton, annoter les pauses, prononcer les e muets qui comptent, articuler, parler fort et lentement, apprendre strophe par strophe, regarder son public, annoncer le titre et l'auteur." },
            },
          ],
          keyPoints: [
            "Comprendre le poème et repérer son ton avant de le dire : la voix suit le sens.",
            "Virgule : pause courte. Point : pause longue. Point d'interrogation : la voix monte.",
            "Fin de vers : légère suspension ; si la phrase continue, on enchaîne sans couper.",
            "Prononcer légèrement les e muets suivis d'une consonne pour garder le rythme du vers.",
            "Volume suffisant, débit lent, articulation nette, regard tourné vers le public.",
            "Mémoriser strophe par strophe, en associant chaque vers à une image mentale.",
          ],
          example: {
            statement: "Vous devez dire devant la classe le quatrain écrit pour l'exercice : « Le vent du soir court sur la plage, / Il pousse au loin les grands bateaux, / Il chante un air doux et sauvage / Et berce l'écume des flots. » Préparez votre lecture.",
            solution: [
              "Comprendre : le poème décrit un soir au bord de la mer ; le vent est personnifié (il chante, il berce). Le ton est calme et rêveur, avec une pointe de force dans le mot « sauvage ».",
              "Marquer les pauses : une pause courte après « plage, » et après « bateaux, » (virgules), une pause longue après « flots. » (point final).",
              "Repérer l'enchaînement : le vers 3 n'a pas de ponctuation et la phrase continue au vers 4 (« Il chante un air doux et sauvage / Et berce... ») : on ne s'arrête pas entre les deux, on garde la voix en suspens.",
              "Repérer les e muets : « pousse au » et « chante un » se disent en enchaînant (« pou-sau », « chan-tun ») ; dans « berce l'écume », on prononce légèrement « ber / ce » et « é / cu / me » pour garder les 8 syllabes.",
              "Choisir les mots à mettre en valeur : souligner « doux » et « sauvage », qui s'opposent, et dire « berce » plus lentement, comme un mouvement de balancement.",
              "Résultat : une lecture lente et douce, avec deux pauses courtes, un enchaînement entre les vers 3 et 4, une pause longue à la fin, et une voix qui ralentit sur « berce l'écume des flots ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Recopiez ces vers écrits pour l'exercice et placez une barre / pour chaque pause courte et deux barres // pour chaque pause longue : « La nuit tombe, le village dort. / Seul un chien aboie au loin, / Puis tout se tait. »",
              hint: "Les virgules demandent une pause courte, les points une pause longue.",
              solution: [
                "Après « tombe, » (virgule) : une pause courte /.",
                "Après « dort. » (point) : une pause longue //.",
                "Après « loin, » (virgule) : une pause courte /.",
                "Après « se tait. » (point final) : une pause longue //.",
                "Résultat : « La nuit tombe, / le village dort. // Seul un chien aboie au loin, / Puis tout se tait. // »",
              ],
            },
            {
              level: 2,
              statement: "Pour chacun de ces passages écrits pour l'exercice, choisissez le ton qui convient (joyeux, triste ou mystérieux) et justifiez avec deux indices du texte. Dites aussi comment votre voix doit le faire entendre. a) « Les cloches sonnent, les enfants rient, c'est jour de fête au village ! » b) « Le jardin est vide depuis ton départ, les roses penchent la tête. » c) « Qui frappe à ma porte au milieu de la nuit ? Personne ne répond. »",
              hint: "Regardez le vocabulaire (les mots qui expriment des émotions) et la ponctuation (exclamation, question).",
              solution: [
                "a) Ton joyeux : les mots « rient » et « fête » expriment la joie, et le point d'exclamation marque l'enthousiasme. La voix est vive, assez forte, le débit plutôt rapide.",
                "b) Ton triste : le jardin est « vide » à cause d'un « départ », et les roses qui « penchent la tête » sont personnifiées comme si elles étaient tristes. La voix est douce, lente, un peu plus basse.",
                "c) Ton mystérieux : la question sans réponse et le cadre de la nuit créent une inquiétude, renforcée par « Personne ne répond ». La voix monte sur la question, puis on marque un silence avant de dire la dernière phrase plus bas.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Préparez la récitation complète de ce poème écrit pour l'exercice : « Dans la forêt, la nuit descend, / Le vieux chêne parle à voix basse, / Un renard file et puis s'efface, / Et le vent froid chante en passant. // Puis l'aube vient, toute dorée, / Un merle reprend son doux chant, / La campagne est si colorée, / Le blé danse au milieu du champ. » (// sépare les deux strophes). 1) Indiquez le ton de chaque strophe. 2) Notez les pauses longues. 3) Relevez trois e muets qu'il faut prononcer légèrement. 4) Proposez un plan pour l'apprendre en trois jours. 5) Rédigez la phrase par laquelle vous présenterez le poème.",
              hint: "Les deux strophes racontent deux moments différents de la journée : cherchez ce qui change entre elles. Un e muet se prononce s'il est suivi d'une consonne.",
              solution: [
                "1) Strophe 1 : ton mystérieux et calme (la nuit, la voix basse, le renard qui disparaît), voix douce et lente. Strophe 2 : ton joyeux et lumineux (l'aube dorée, le chant du merle, les couleurs), voix plus claire et plus vive. Le mot « Puis » marque le changement : on peut faire une vraie pause avant lui.",
                "2) Pauses longues : après « en passant. » (fin de la strophe 1) et après « du champ. » (fin du poème). Pauses courtes à chaque virgule.",
                "3) E muets à prononcer : « chê / ne » dans « Le vieux chêne parle » (suivi de « p »), « au / be » dans « l'aube vient » (suivi de « v »), « mer / le » dans « Un merle reprend » (suivi de « r »). En revanche, « parle à » et « danse au » s'enchaînent sans prononcer le e.",
                "4) Jour 1 : comprendre le poème, l'annoter, apprendre la strophe 1. Jour 2 : réviser la strophe 1, apprendre la strophe 2, dire les deux à la suite. Jour 3 : dire le poème entier devant un miroir ou un proche, deux ou trois fois, en travaillant le changement de ton.",
                "5) Présentation possible : « Je vais vous dire un poème intitulé La Nuit et l'Aube, écrit pour notre cours. » Puis on attend une seconde, on regarde le public et on commence.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour préparer la récitation d'un poème.",
            items: [
              "Lire le poème en silence et chercher les mots inconnus",
              "Dégager le sens du poème et choisir le ton",
              "Annoter les pauses, les e muets et les mots à mettre en valeur",
              "Apprendre le poème strophe par strophe",
              "S'entraîner à voix haute devant un miroir ou un proche",
              "Annoncer le titre et l'auteur, puis réciter en regardant le public",
            ],
          },
          quiz: [
            { q: "À la fin d'un vers sans ponctuation, quand la phrase continue au vers suivant, que faites-vous ?", options: ["Une longue pause et une grande respiration", "Une très légère suspension", "Vous accélérez pour finir vite"], answer: 1, why: "On marque à peine la fin du vers et on enchaîne, pour ne pas couper la phrase et perdre le sens." },
            { q: "Dans le vers « Le soir tombe doucement », le e de « tombe »...", options: ["se prononce légèrement", "ne se prononce jamais en poésie", "remplace une virgule"], answer: 0, why: "Il est suivi d'une consonne (d) : il compte comme une syllabe, il faut donc le faire entendre légèrement." },
            { q: "Un point à la fin d'un vers indique...", options: ["une pause courte", "aucune pause", "une pause longue"], answer: 2, why: "Le point termine la phrase : il demande une pause plus longue que la virgule." },
            { q: "Avant de réciter, vous annoncez...", options: ["le nombre de vers", "la date du jour", "votre poème préféré", "le titre et l'auteur"], answer: 3, why: "On présente toujours le poème par son titre et le nom de son auteur, pour que le public sache ce qu'il va entendre." },
            { q: "Pour mémoriser un poème, la méthode la plus efficace est de...", options: ["le lire une fois, très vite, la veille au soir", "l'apprendre strophe par strophe", "attendre de le savoir par cœur tout seul"], answer: 1, why: "Apprendre par petites parties, en reprenant depuis le début, et réviser plusieurs jours de suite fixe le texte dans la mémoire." },
          ],
          trap: "Réciter d'une voix monotone et trop rapide, en s'arrêtant à chaque fin de vers même quand la phrase continue : le public n'entend plus le sens du poème.",
          method: "Préparez une copie annotée au crayon (barres pour les pauses, mots soulignés, flèches pour l'intonation), entraînez-vous à voix haute en vous enregistrant, puis réécoutez-vous pour vérifier le volume, la vitesse et les pauses.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ecrire-poeme',
          title: 'Écrire votre propre poème',
          minutes: 35,
          objectives: [
            "Rédiger un poème en choisissant une forme : acrostiche, haïku, calligramme, poème-liste, poème rimé.",
            "Utiliser un réservoir de mots, des images et des jeux sur les sons.",
            "Relire et améliorer son poème à l'aide d'une liste de vérifications.",
          ],
          course: [
            {
              heading: "Avant d'écrire : un sujet et un réservoir de mots",
              paragraphs: [
                "Tout poème commence par un sujet : un moment (un matin d'hiver), un lieu (la cour du collège), un être (votre chat), un objet (un vieux vélo) ou un sentiment (la joie d'un départ en vacances). Choisissez un sujet que vous connaissez bien : vous aurez plus de choses à dire.",
                "Construisez ensuite un réservoir de mots : une liste de tous les mots qui vous viennent à l'esprit à propos de votre sujet. Utilisez vos cinq sens. Pour la pluie : ce que l'on voit (gouttes, flaques, ciel gris), ce que l'on entend (clapotis, tambour sur le toit), ce que l'on sent (odeur de terre mouillée), ce que l'on touche (froid, humide). Ces mots qui appartiennent à un même thème forment un champ lexical.",
              ],
            },
            {
              heading: "Choisir une forme",
              paragraphs: [
                "L'acrostiche est un poème dont les premières lettres des vers, lues de haut en bas, forment un mot, souvent le sujet du poème ou un prénom. Le haïku est une forme japonaise très courte : trois vers, souvent de 5, 7 et 5 syllabes en français, qui saisissent un instant de la nature, avec une indication de saison. Matsuo Bashō, poète japonais du XVIIe siècle, en est le maître le plus connu.",
                "Le calligramme est un poème dont les mots dessinent sur la page la forme de ce dont il parle : une pluie en lignes obliques, un cœur, une tour. Guillaume Apollinaire a rendu cette forme célèbre avec son recueil Calligrammes (1918). Le poème-liste énumère des objets, des êtres ou des souhaits : Jacques Prévert en a donné un exemple amusant avec son poème « Inventaire », dans le recueil Paroles (1946).",
                "Vous pouvez aussi écrire « à la manière de » : reprendre une structure simple, comme une anaphore (« Je voudrais... », « J'aime... », « Si j'étais... ») ou un quatrain rimé en octosyllabes. Une forme est une aide : elle donne un cadre qui facilite l'écriture.",
              ],
              box: { label: "Repère", text: "Acrostiche : les initiales des vers forment un mot. Haïku : trois vers courts (souvent 5-7-5 syllabes), un instant de nature. Calligramme : les mots dessinent une forme. Poème-liste : une énumération. Anaphore : un même début de vers répété." },
            },
            {
              heading: "Faire chanter et voir : sons, images, rythme",
              paragraphs: [
                "Un poème n'est pas une simple description : il fait voir le monde autrement. Utilisez les images étudiées en cours. Une comparaison (« la lune, ronde comme une pièce d'argent »), une métaphore (« la lune est une lanterne ») ou une personnification (« la lune veille sur la ville ») transforment une phrase banale en vers poétique.",
                "Jouez aussi avec les sons : une allitération pour imiter un bruit (« le ruisseau roule, rit et ruisselle »), une répétition pour donner un air de chanson. Si vous écrivez en vers rimés, préparez d'abord une liste de mots qui riment avec les mots importants de votre sujet, puis comptez les syllabes de chaque vers pour qu'ils aient tous la même longueur. Si vous choisissez le vers libre, soignez le retour à la ligne : coupez là où vous voulez créer une surprise ou un silence.",
              ],
            },
            {
              heading: "Relire et améliorer son poème",
              paragraphs: [
                "Un poète réécrit souvent son texte plusieurs fois. Relisez votre poème à voix haute : l'oreille repère tout de suite un vers trop long, un son désagréable ou une rime forcée. Remplacez les mots trop vagues (« chose », « faire », « il y a », « beau ») par des mots précis et colorés : « le ciel est beau » devient « le ciel s'habille de bleu ».",
                "Vérifiez enfin l'orthographe, les accords et la présentation : un vers par ligne, une ligne blanche entre les strophes, un titre qui donne envie de lire. Ne sacrifiez jamais le sens à la rime : mieux vaut un vers libre qui dit quelque chose qu'une rime qui n'a pas de sens.",
              ],
              box: { label: "À retenir", text: "Avant de rendre votre poème, vérifiez : mon sujet est-il clair ? Ai-je utilisé au moins une image et un jeu sur les sons ? Ai-je respecté la forme choisie ? Ai-je remplacé les mots vagues ? L'orthographe et la présentation sont-elles soignées ?" },
            },
          ],
          keyPoints: [
            "Choisir un sujet que l'on connaît, puis remplir un réservoir de mots grâce aux cinq sens.",
            "Choisir une forme : acrostiche, haïku, calligramme, poème-liste, anaphore, quatrain rimé.",
            "Utiliser au moins une image (comparaison, métaphore, personnification) et un jeu sur les sons.",
            "En vers rimés : lister les rimes possibles et compter les syllabes de chaque vers.",
            "Relire à voix haute, remplacer les mots vagues, ne pas sacrifier le sens à la rime.",
          ],
          example: {
            statement: "Écrivez un acrostiche sur le mot LUNE en utilisant au moins deux images différentes, puis expliquez votre démarche.",
            solution: [
              "Écrire le mot verticalement : L, U, N, E. Chaque vers commencera par l'une de ces lettres.",
              "Remplir le réservoir de mots : ronde, blanche, argent, nuit, ciel, veiller, lumière, nuages, sommeil, lanterne.",
              "Chercher une image pour chaque vers : la lune comme une lanterne (métaphore), la lune qui veille (personnification), des nuages comme des voiles (comparaison).",
              "Rédiger : « Lanterne blanche accrochée au ciel, / Un œil d'argent veille sur la ville, / Nuages légers passent comme des voiles, / Et les enfants s'endorment sous sa lumière. »",
              "Relire à voix haute et vérifier : les initiales donnent bien L, U, N, E ; le poème contient une métaphore (« Lanterne blanche » pour la lune), une personnification (« Un œil d'argent veille ») et une comparaison (« comme des voiles »).",
              "Résultat : un acrostiche de quatre vers libres sur la lune, qui associe trois images différentes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Trouvez au moins deux mots qui riment avec chacun de ces mots : nuit, fleur, mer. 2) Complétez ces débuts de vers par une comparaison : « Le soleil brille comme... » ; « La route est longue comme... ».",
              hint: "Pour les rimes, dites le mot à voix haute, écoutez son dernier son et cherchez d'autres mots qui finissent par ce son, sans vous occuper de l'orthographe.",
              solution: [
                "1) Nuit (son [ɥi]) : bruit, fruit, minuit, pluie. Fleur (son [œr]) : cœur, couleur, douceur, peur. Mer (son [ɛr]) : hiver, vert, air, éclair.",
                "2) Exemples possibles : « Le soleil brille comme une pièce d'or neuve » ; « La route est longue comme un ruban sans fin ».",
                "Vérification : chaque comparaison contient bien un comparé (le soleil, la route), l'outil « comme » et un comparant (une pièce d'or, un ruban).",
              ],
            },
            {
              level: 2,
              statement: "Écrivez un haïku sur l'automne : trois vers de 5, 7 et 5 syllabes, qui saisissent un instant de la nature. Montrez ensuite que votre haïku respecte bien le nombre de syllabes en découpant chaque vers.",
              hint: "Choisissez un seul instant (une feuille qui tombe, un animal, le vent) et pensez à la règle du e muet pour compter : il compte devant une consonne, pas en fin de vers.",
              solution: [
                "Choisir l'instant : des feuilles emportées par le vent et un écureuil qui passe.",
                "Rédiger : « Feuilles qui s'envolent / Le vent d'octobre les berce / Un écureuil court ».",
                "Vers 1 : « Feuil / les / qui / s'en / vo(lent) » : le e de « feuilles » compte (suivi de « q »), la fin de « s'envolent » ne compte pas en fin de vers. 5 syllabes.",
                "Vers 2 : « Le / vent / d'oc / to / bre / les / ber(ce) » : le e de « octobre » compte (suivi de « l »), le e final ne compte pas. 7 syllabes.",
                "Vers 3 : « Un / é / cu / reuil / court ». 5 syllabes.",
                "Résultat : le haïku respecte la forme 5-7-5 et évoque l'automne par les feuilles et le mois d'octobre.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez un quatrain d'octosyllabes à rimes croisées (ABAB) sur le thème « la ville la nuit ». Votre quatrain doit contenir au moins une comparaison et une personnification. Montrez ensuite que vous avez respecté toutes les consignes.",
              hint: "Commencez par choisir deux paires de rimes (par exemple lumières / rivières et doucement / lentement), puis écrivez les vers et comptez-les un par un en appliquant la règle du e muet.",
              solution: [
                "Préparer les rimes : A = lumières / rivières (son [jɛr]), B = doucement / lentement (son [mɑ̃]).",
                "Rédiger : « La ville allume ses lumières, / Le boulevard dort doucement, / Les phares, comme des rivières, / S'en vont vers le port lentement. »",
                "Compter : « La / vil / lal / lu / me / ses / lu / miè(res) » = 8 ; « Le / bou / le / vard / dort / dou / ce / ment » = 8 ; « Les / pha / res / com / me / des / ri / viè(res) » = 8 ; « S'en / vont / vers / le / port / len / te / ment » = 8.",
                "Vérifier les rimes : lumières (A), doucement (B), rivières (A), lentement (B) : ABAB, rimes croisées.",
                "Vérifier les images : « Le boulevard dort » et « La ville allume ses lumières » sont des personnifications ; « comme des rivières » est une comparaison (comparé : les phares ; comparant : des rivières ; point commun : un flot lumineux qui coule).",
                "Résultat : un quatrain d'octosyllabes à rimes croisées qui respecte toutes les consignes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque forme poétique à sa définition.",
            pairs: [
              { left: "Acrostiche", right: "Les initiales des vers, lues de haut en bas, forment un mot" },
              { left: "Haïku", right: "Poème japonais de trois vers courts, souvent 5-7-5 syllabes" },
              { left: "Calligramme", right: "Poème dont les mots dessinent la forme de son sujet" },
              { left: "Poème-liste", right: "Énumération d'objets, d'êtres ou de souhaits" },
              { left: "Vers libre", right: "Vers sans nombre fixe de syllabes ni rime obligatoire" },
            ],
          },
          quiz: [
            { q: "Dans un acrostiche, les premières lettres des vers...", options: ["riment toutes entre elles à la fin", "forment un mot", "sont toujours des voyelles"], answer: 1, why: "Lues de haut en bas, les initiales des vers forment un mot, souvent le sujet du poème." },
            { q: "Qui a publié le recueil Calligrammes en 1918 ?", options: ["Jacques Prévert", "Marceline Desbordes-Valmore", "Victor Hugo", "Guillaume Apollinaire"], answer: 3, why: "Guillaume Apollinaire a rendu célèbres les poèmes-dessins avec Calligrammes, publié en 1918." },
            { q: "Le haïku est une forme poétique venue...", options: ["du Japon", "de Grèce", "d'Italie", "d'Égypte"], answer: 0, why: "Le haïku est une forme japonaise ; Matsuo Bashō, au XVIIe siècle, en est le maître le plus connu." },
            { q: "Un « réservoir de mots » sert à...", options: ["recopier un poème célèbre sans le changer", "remplacer la relecture finale", "rassembler des mots liés au sujet"], answer: 2, why: "Avant d'écrire, on note tous les mots liés au sujet, grâce aux cinq sens : ils serviront à construire les vers." },
            { q: "Pour améliorer un poème, la meilleure méthode est de...", options: ["ne jamais le modifier", "ajouter des mots au hasard pour l'allonger", "le relire à voix haute"], answer: 2, why: "L'oreille repère les vers trop longs, les sons maladroits et les rimes forcées : on corrige ensuite." },
          ],
          trap: "Croire qu'un poème doit forcément rimer, au point d'écrire des vers qui n'ont pas de sens pour trouver une rime : le vers libre est aussi de la poésie.",
          method: "Gardez un petit carnet de mots et d'images : notez-y les comparaisons qui vous viennent, les sons que vous aimez, les mots qui riment. Au moment d'écrire, vous aurez déjà un réservoir prêt à servir.",
        },
      ],
    },
    {
      id: 'fonctions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'sujet-accord',
          title: "Le sujet et l'accord du verbe",
          minutes: 30,
          objectives: [
            "Identifier le sujet du verbe, même lorsqu'il est inversé ou éloigné du verbe.",
            "Reconnaître la nature du sujet : groupe nominal, nom propre, pronom.",
            "Accorder le verbe avec son sujet en personne et en nombre.",
          ],
          course: [
            {
              heading: "Reconnaître le sujet",
              paragraphs: [
                "Dans une phrase, le sujet est le mot ou le groupe de mots qui indique qui fait l'action exprimée par le verbe, ou de qui (de quoi) l'on dit quelque chose. Dans « Le chien aboie », c'est le chien qui fait l'action. Dans « La soupe est chaude », on dit quelque chose de la soupe. Le sujet est une fonction essentielle : on ne peut pas le supprimer sans rendre la phrase incorrecte (sauf à l'impératif, comme dans « Viens ! »).",
                "Pour trouver le sujet, le meilleur moyen est de l'encadrer par « c'est... qui » (ou « ce sont... qui ») : « Le chien de mes voisins aboie » devient « C'est le chien de mes voisins qui aboie ». Ce qui se trouve entre « c'est » et « qui » est le sujet. On peut aussi poser la question « qui est-ce qui ? » ou « qu'est-ce qui ? » devant le verbe : « Qui est-ce qui aboie ? Le chien de mes voisins. »",
              ],
              box: { label: "Règle", text: "Le sujet indique qui fait l'action ou de qui l'on parle. Pour le trouver, encadrez-le par « c'est... qui » ou « ce sont... qui » : « C'est le chien de mes voisins qui aboie »." },
            },
            {
              heading: "La nature du sujet",
              paragraphs: [
                "Le sujet peut avoir plusieurs natures. C'est souvent un groupe nominal (« Le petit garçon court »), un nom propre (« Léa chante ») ou un pronom (« Il pleut », « Nous partons », « On frappe à la porte », « Cela me plaît »). Un verbe peut aussi avoir plusieurs sujets coordonnés : « Léa et Tom jouent aux cartes ».",
                "Le groupe nominal sujet peut être long : « Les élèves de la classe de 6e B du collège Jean-Moulin » est un seul sujet. Son mot le plus important, celui qui commande l'accord, s'appelle le noyau : ici, c'est le nom « élèves ». Les autres mots (« de la classe de 6e B... ») complètent ce nom, mais ne décident pas de l'accord du verbe.",
              ],
            },
            {
              heading: "Accorder le verbe avec son sujet",
              paragraphs: [
                "Le verbe s'accorde toujours avec son sujet, en personne (1re, 2e ou 3e) et en nombre (singulier ou pluriel). Pour choisir la bonne terminaison, remplacez le sujet par le pronom personnel qui lui correspond : « Les élèves de la classe » devient « ils », donc on écrit « Les élèves de la classe arrivent », avec la terminaison -ent.",
                "Quand le verbe a plusieurs sujets, il se met au pluriel : « Le chat et le chien dorment ». Si l'un des sujets est « moi », l'ensemble équivaut à « nous » : « Ma sœur et moi partons ». Si l'un des sujets est « toi » (sans « moi »), l'ensemble équivaut à « vous » : « Ton frère et toi êtes invités ». Le pronom « on » se conjugue toujours à la 3e personne du singulier : « On chante ». Un nom singulier qui désigne un groupe reste au singulier : « La foule applaudit ».",
              ],
              box: { label: "Règle", text: "Le verbe s'accorde en personne et en nombre avec son sujet. Plusieurs sujets : pluriel. « X et moi » = nous ; « X et toi » = vous. « On » : 3e personne du singulier." },
            },
            {
              heading: "Les cas difficiles",
              paragraphs: [
                "Le sujet inversé est placé après le verbe. Cela arrive dans les questions (« Où vont les oiseaux ? »), après certains compléments placés en début de phrase (« Dans la forêt vivent des loups ») et dans les paroles rapportées (« Bonjour, dit la maîtresse »). Le test « c'est... qui » marche toujours : « Ce sont des loups qui vivent dans la forêt ». Le verbe s'accorde donc avec « des loups » : « vivent ».",
                "Le sujet peut aussi être éloigné du verbe par d'autres mots. Dans « Les fleurs du jardin de ma grand-mère sentent bon », le nom le plus proche du verbe est « grand-mère », mais le sujet est « Les fleurs du jardin de ma grand-mère », dont le noyau est « fleurs » : le verbe est donc au pluriel. Enfin, un pronom complément (le, la, les, lui, leur, nous, vous) peut se glisser entre le sujet et le verbe : dans « Je les regarde », le sujet est « Je », pas « les », d'où la terminaison -e.",
              ],
              box: { label: "À retenir", text: "Sujet inversé (« Dans la mare nagent des canards ») ou éloigné (« Le bruit des voitures gêne les voisins ») : cherchez-le avec « c'est... qui » et accordez avec son noyau, jamais avec le mot le plus proche." },
            },
          ],
          keyPoints: [
            "Le sujet indique qui fait l'action ou de qui l'on parle ; on le trouve avec « c'est... qui ».",
            "Le sujet peut être un groupe nominal, un nom propre ou un pronom ; un verbe peut avoir plusieurs sujets.",
            "Le verbe s'accorde en personne et en nombre avec le noyau du sujet.",
            "Plusieurs sujets : verbe au pluriel ; « X et moi » = nous ; « X et toi » = vous ; « on » = 3e personne du singulier.",
            "Attention au sujet inversé, au sujet éloigné du verbe et au pronom complément placé avant le verbe.",
          ],
          example: {
            statement: "Conjuguez le verbe entre parenthèses au présent de l'indicatif en justifiant l'accord : « Dans le grenier de la vieille maison (dormir) des chats noirs. »",
            solution: [
              "Repérer le verbe conjugué : c'est « dormir », à conjuguer au présent.",
              "Chercher le sujet avec « c'est... qui » : « Ce sont des chats noirs qui dorment dans le grenier ». Le sujet est « des chats noirs ». Il est placé après le verbe : c'est un sujet inversé.",
              "Éviter le piège : « le grenier » et « la vieille maison » sont placés avant le verbe, mais ils font partie d'un complément de lieu, pas du sujet.",
              "Remplacer le sujet par un pronom : « des chats noirs » = « ils », 3e personne du pluriel.",
              "Conjuguer : au présent, « ils dorment ».",
              "Réponse : « Dans le grenier de la vieille maison dorment des chats noirs. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez le sujet de chaque verbe en gras (indiqué entre crochets) et précisez sa nature (groupe nominal, nom propre, pronom). a) Mon frère [joue] au football. b) Les oiseaux migrateurs [partent] en automne. c) Demain, nous [visiterons] le musée. d) Au fond du jardin [pousse] un vieux pommier. e) Lucas et sa sœur [préparent] un gâteau.",
              hint: "Encadrez chaque fois le groupe par « c'est... qui » ou « ce sont... qui » pour vérifier que c'est bien le sujet.",
              solution: [
                "a) « C'est mon frère qui joue » : sujet « Mon frère », groupe nominal.",
                "b) « Ce sont les oiseaux migrateurs qui partent » : sujet « Les oiseaux migrateurs », groupe nominal.",
                "c) « C'est nous qui visiterons » : sujet « nous », pronom personnel.",
                "d) « C'est un vieux pommier qui pousse » : sujet « un vieux pommier », groupe nominal, placé après le verbe (sujet inversé).",
                "e) « Ce sont Lucas et sa sœur qui préparent » : deux sujets coordonnés, « Lucas » (nom propre) et « sa sœur » (groupe nominal).",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez chaque verbe au présent de l'indicatif en l'accordant correctement. a) Les feuilles des arbres (tomber). b) Ma cousine et moi (aller) au cinéma. c) Le bruit des voitures (gêner) les voisins. d) Où (courir) ces enfants ? e) Tes amis et toi (être) invités. f) Je les (écouter) avec attention.",
              hint: "Trouvez le noyau du sujet, puis remplacez le sujet par un pronom personnel (il, nous, vous, ils...) avant de choisir la terminaison.",
              solution: [
                "a) Sujet « Les feuilles des arbres », noyau « feuilles » = elles : « Les feuilles des arbres tombent ».",
                "b) « Ma cousine et moi » = nous : « Ma cousine et moi allons au cinéma ».",
                "c) Sujet « Le bruit des voitures », noyau « bruit » = il (et non « voitures ») : « Le bruit des voitures gêne les voisins ».",
                "d) Sujet inversé « ces enfants » = ils : « Où courent ces enfants ? ».",
                "e) « Tes amis et toi » = vous : « Tes amis et toi êtes invités ».",
                "f) Le sujet est « Je » ; « les » est un pronom complément placé avant le verbe : « Je les écoute avec attention ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce texte, écrit pour l'exercice, contient six erreurs d'accord entre le sujet et le verbe. Retrouvez-les, corrigez-les et justifiez chaque correction. « Chaque matin, les élèves de la classe de 6e B arrive devant le collège. Au portail les attendent la surveillante. Les cris des enfants résonne dans la cour. Mon ami Hugo et moi discutent du match d'hier. Le professeur les salut et nous entrons en classe. On attendent la sonnerie. »",
              hint: "Pour chaque verbe conjugué, cherchez le sujet avec « c'est... qui », puis vérifiez la terminaison. Méfiez-vous des sujets inversés et des pronoms placés juste avant le verbe.",
              solution: [
                "Erreur 1 : « arrive ». Le sujet est « les élèves de la classe de 6e B » (noyau « élèves ») = ils. Correction : « arrivent ».",
                "Erreur 2 : « attendent ». Le sujet est inversé : « C'est la surveillante qui les attend ». « Les » est un pronom complément. Correction : « Au portail les attend la surveillante ».",
                "Erreur 3 : « résonne ». Le sujet est « Les cris des enfants » (noyau « cris ») = ils. Correction : « résonnent ».",
                "Erreur 4 : « discutent ». « Mon ami Hugo et moi » = nous. Correction : « discutons ».",
                "Erreur 5 : « salut ». Le verbe est « saluer », et son sujet est « Le professeur » = il ; « les » est un pronom complément. Au présent : « il salue ». Correction : « Le professeur les salue ». (« Salut » est un nom ou une formule de politesse.)",
                "Erreur 6 : « attendent ». « On » se conjugue à la 3e personne du singulier. Correction : « On attend la sonnerie ».",
                "Texte corrigé : « Chaque matin, les élèves de la classe de 6e B arrivent devant le collège. Au portail les attend la surveillante. Les cris des enfants résonnent dans la cour. Mon ami Hugo et moi discutons du match d'hier. Le professeur les salue et nous entrons en classe. On attend la sonnerie. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la méthode pour accorder un verbe avec son sujet.",
            items: [
              "Repérer le verbe conjugué",
              "Trouver le sujet en l'encadrant par « c'est... qui »",
              "Repérer le noyau du sujet",
              "Remplacer le sujet par le pronom personnel qui lui correspond",
              "Écrire la terminaison qui correspond à ce pronom",
              "Relire la phrase entière pour vérifier",
            ],
          },
          quiz: [
            { q: "Dans « Elles nous attendent devant l'école », le sujet est...", options: ["Elles", "nous", "l'école"], answer: 0, why: "« Ce sont elles qui nous attendent » : « nous » est un pronom complément, le sujet est « Elles »." },
            { q: "Complétez : « Mon frère et moi ... (partir) tôt. »", options: ["partent", "partez", "partons", "part"], answer: 2, why: "« Mon frère et moi » équivaut à « nous » : le verbe se conjugue à la 1re personne du pluriel." },
            { q: "Dans « Dans la mare nagent des canards », le sujet est...", options: ["« la mare »", "« des canards »", "« Dans la mare »"], answer: 1, why: "« Ce sont des canards qui nagent dans la mare » : le sujet est inversé, placé après le verbe." },
            { q: "« On ... (chanter) une chanson. » Quelle forme convient ?", options: ["chantons", "chantent", "chantez", "chante"], answer: 3, why: "Le pronom « on » se conjugue toujours à la 3e personne du singulier : « on chante »." },
            { q: "Dans « Les fleurs du jardin de ma voisine ... (sentir) bon », le verbe s'accorde avec...", options: ["« ma voisine »", "« le jardin »", "« Les fleurs »"], answer: 2, why: "Le noyau du sujet est « fleurs » : on écrit « sentent », au pluriel, même si « voisine » est plus proche du verbe." },
          ],
          trap: "Accorder le verbe avec le mot le plus proche au lieu du sujet : on écrit « Le bruit des voitures gêne les voisins », car le sujet a pour noyau « bruit », et non « voitures ».",
          method: "Pour chaque verbe conjugué de votre texte, faites le test « c'est... qui », soulignez le noyau du sujet, remplacez-le par un pronom (il, elles, nous...) et vérifiez la terminaison. Faites-le systématiquement à la relecture d'une rédaction.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cod-coi-attribut',
          title: "Les compléments du verbe et l'attribut du sujet",
          minutes: 35,
          objectives: [
            "Identifier le complément d'objet direct (COD) et le complément d'objet indirect (COI).",
            "Identifier l'attribut du sujet après un verbe d'état et l'accorder.",
            "Distinguer le COD de l'attribut du sujet.",
          ],
          course: [
            {
              heading: "Le complément d'objet direct (COD)",
              paragraphs: [
                "Certains verbes ont besoin d'un complément pour que leur sens soit complet. Dans « Léa range... », on attend de savoir ce qu'elle range. Ce complément, qui complète directement le verbe, s'appelle le complément d'objet direct (COD). On dit qu'il est direct parce qu'il est relié au verbe sans préposition : « Léa range sa chambre ».",
                "Pour trouver le COD, posez la question « quoi ? » ou « qui ? » juste après le verbe : « Léa range quoi ? sa chambre ». « Le chat attrape qui ? quoi ? une souris ». Le COD fait partie du groupe verbal : on ne peut pas le déplacer en début de phrase. On peut le remplacer par un pronom personnel placé avant le verbe : le, la, l', les. « Léa range sa chambre » devient « Léa la range ».",
              ],
              box: { label: "Définition", text: "Le COD complète le verbe sans préposition. Il répond à la question « quoi ? » ou « qui ? » posée après le verbe. Il ne se déplace pas et peut être remplacé par le, la, l', les : « Il lit un roman » devient « Il le lit »." },
            },
            {
              heading: "Le complément d'objet indirect (COI)",
              paragraphs: [
                "Le complément d'objet indirect (COI) complète lui aussi le verbe, mais il est relié à lui par une préposition, le plus souvent « à » ou « de ». « Paul parle à son ami » : on parle à quelqu'un. « Inès se souvient de ses vacances » : on se souvient de quelque chose. C'est le verbe qui impose la préposition : on dit « obéir à », « penser à », « parler de », « se méfier de ».",
                "Pour trouver le COI, posez la question « à qui ? », « à quoi ? », « de qui ? » ou « de quoi ? » après le verbe : « Paul parle à qui ? à son ami ». Comme le COD, le COI ne se déplace pas en début de phrase. On peut le remplacer par un pronom : lui, leur (pour une personne), en, y (pour une chose). « Paul parle à son ami » devient « Paul lui parle » ; « Je pense à mon voyage » devient « J'y pense ».",
              ],
              box: { label: "Repère", text: "COD : sans préposition (« Il appelle sa sœur » → « Il l'appelle »). COI : avec une préposition, souvent à ou de (« Il téléphone à sa sœur » → « Il lui téléphone »). Tous deux sont des compléments du verbe : ils ne se déplacent pas." },
            },
            {
              heading: "L'attribut du sujet",
              paragraphs: [
                "Après certains verbes, le groupe qui suit ne désigne pas une autre chose, mais apporte une information sur le sujet lui-même : sa qualité, son état, son métier. Dans « Le ciel est gris », « gris » dit comment est le ciel. On l'appelle l'attribut du sujet. Ces verbes s'appellent des verbes d'état : être, paraître, sembler, devenir, demeurer, rester, avoir l'air.",
                "L'attribut du sujet est souvent un adjectif (« Mes sœurs sont contentes »), mais ce peut être aussi un nom ou un groupe nominal (« Mon oncle est boulanger », « Julie deviendra une grande nageuse »). Quand c'est un adjectif, il s'accorde en genre et en nombre avec le sujet : « Les fenêtres restent ouvertes » (féminin pluriel, comme « fenêtres »).",
              ],
              box: { label: "Règle", text: "L'attribut du sujet suit un verbe d'état (être, paraître, sembler, devenir, demeurer, rester, avoir l'air) et donne une caractéristique du sujet. Adjectif attribut : il s'accorde avec le sujet (« Ces histoires semblent drôles »)." },
            },
            {
              heading: "Ne pas confondre le COD et l'attribut du sujet",
              paragraphs: [
                "Le COD et l'attribut se placent tous les deux après le verbe, sans préposition : on les confond facilement. Comparez « Tom devient un champion » et « Tom rencontre un champion ». Dans la première phrase, Tom et le champion sont la même personne : « un champion » est attribut du sujet. Dans la seconde, il y a deux personnes, Tom et le champion qu'il rencontre : « un champion » est COD.",
                "Deux tests vous aident. Regardez d'abord le verbe : est-ce un verbe d'état ? Ensuite, essayez de remplacer le verbe par « être » : si la phrase garde un sens proche (« Tom est un champion »), c'est un attribut. Avec « rencontrer », ce remplacement change complètement le sens : c'est un COD.",
              ],
            },
          ],
          keyPoints: [
            "COD : complément du verbe sans préposition ; question « quoi ? » ou « qui ? » ; remplaçable par le, la, l', les.",
            "COI : complément du verbe introduit par une préposition (à, de) ; remplaçable par lui, leur, en, y.",
            "COD et COI sont des compléments du verbe : on ne peut pas les déplacer en début de phrase.",
            "Attribut du sujet : après un verbe d'état (être, paraître, sembler, devenir, demeurer, rester, avoir l'air).",
            "L'adjectif attribut s'accorde en genre et en nombre avec le sujet.",
            "Test : si l'on peut remplacer le verbe par « être » sans changer le sens, c'est un attribut, pas un COD.",
          ],
          example: {
            statement: "Donnez la fonction des groupes entre crochets : « Les enfants semblent [heureux]. Ils regardent [le spectacle]. Ensuite, ils parlent [à leurs parents]. »",
            solution: [
              "Phrase 1 : le verbe « sembler » est un verbe d'état. « Heureux » donne une caractéristique du sujet « les enfants » (les enfants sont heureux) : c'est un attribut du sujet. Il est au masculin pluriel, comme « enfants ».",
              "Phrase 2 : « regarder » n'est pas un verbe d'état. On pose la question : « Ils regardent quoi ? le spectacle ». Le groupe n'a pas de préposition : c'est un COD. Vérification : « Ils le regardent ».",
              "Phrase 3 : « Ils parlent à qui ? à leurs parents ». Le groupe est introduit par la préposition « à » : c'est un COI. Vérification : « Ils leur parlent ».",
              "Remarque : « Ensuite » n'est pas un complément du verbe. On peut le déplacer ou le supprimer : c'est un complément circonstanciel de temps.",
              "Réponse : « heureux » est attribut du sujet, « le spectacle » est COD, « à leurs parents » est COI.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Dites si le groupe entre crochets est un COD ou un COI, et remplacez-le par un pronom. a) Paul mange [une pomme]. b) Nous pensons [à nos vacances]. c) La maîtresse félicite [les élèves]. d) Mon chien obéit [à son maître]. e) Ils parlent [de leur voyage].",
              hint: "Regardez s'il y a une préposition (à, de) entre le verbe et le complément : sans préposition, c'est un COD ; avec une préposition, c'est un COI.",
              solution: [
                "a) « une pomme » : pas de préposition, COD. « Paul la mange ».",
                "b) « à nos vacances » : préposition « à », COI. « Nous y pensons ».",
                "c) « les élèves » : pas de préposition, COD. « La maîtresse les félicite ».",
                "d) « à son maître » : préposition « à », COI. « Mon chien lui obéit ».",
                "e) « de leur voyage » : préposition « de », COI. « Ils en parlent ».",
              ],
            },
            {
              level: 2,
              statement: "1) Dites si le groupe entre crochets est un COD ou un attribut du sujet, en justifiant. a) Mon père est [médecin]. b) Mon père soigne [les malades]. c) Ce gâteau semble [délicieux]. d) Julie devient [une excellente nageuse]. e) Julie admire [une excellente nageuse]. 2) Accordez l'adjectif attribut : « Les fenêtres restent (ouvert). » ; « Cette maison paraît (ancien). »",
              hint: "Cherchez d'abord si le verbe est un verbe d'état, puis essayez de le remplacer par « être ».",
              solution: [
                "1a) « être » est un verbe d'état ; « médecin » dit ce qu'est le père : attribut du sujet.",
                "1b) « soigner » n'est pas un verbe d'état ; le père et les malades sont des personnes différentes : COD (« Mon père les soigne »).",
                "1c) « sembler » est un verbe d'état ; « délicieux » est une qualité du gâteau : attribut du sujet.",
                "1d) « devenir » est un verbe d'état ; Julie et la nageuse sont la même personne (« Julie est une excellente nageuse ») : attribut du sujet.",
                "1e) « admirer » n'est pas un verbe d'état ; Julie admire une autre personne : COD (« Julie l'admire »).",
                "2) « Les fenêtres restent ouvertes » : l'attribut s'accorde avec « fenêtres », féminin pluriel. « Cette maison paraît ancienne » : l'attribut s'accorde avec « maison », féminin singulier.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans ce texte écrit pour l'exercice, relevez tous les COD, COI et attributs du sujet, puis réécrivez les phrases 2 et 3 en remplaçant les COD et les COI par des pronoms. « (1) Le matin, Inès est pressée. (2) Elle prépare son sac et elle téléphone à sa meilleure amie. (3) Les deux filles parlent du contrôle. (4) Inès semble inquiète, mais son amie la rassure. »",
              hint: "Repérez d'abord chaque verbe conjugué, puis demandez-vous : est-ce un verbe d'état ? Le complément a-t-il une préposition ? Attention au petit mot placé avant le dernier verbe.",
              solution: [
                "Phrase 1 : « est » est un verbe d'état ; « pressée » est attribut du sujet « Inès » (féminin singulier). « Le matin » n'est pas un complément du verbe : on peut le supprimer ou le déplacer, c'est un complément circonstanciel de temps.",
                "Phrase 2 : « son sac » complète « prépare » sans préposition : COD. « à sa meilleure amie » complète « téléphone » avec la préposition « à » : COI.",
                "Phrase 3 : « du contrôle » (de + le contrôle) complète « parlent » avec la préposition « de » : COI.",
                "Phrase 4 : « inquiète » suit le verbe d'état « semble » : attribut du sujet « Inès ». « la » est un pronom placé avant « rassure » : il remplace Inès, c'est un COD (son amie rassure qui ? Inès).",
                "Réécriture de la phrase 2 : « Elle le prépare et elle lui téléphone. »",
                "Réécriture de la phrase 3 : « Les deux filles en parlent. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur les compléments du verbe et l'attribut.",
            statements: [
              { text: "Le COD est relié au verbe sans préposition.", true: true, why: "C'est pour cela qu'on l'appelle direct : « Il lit un roman »." },
              { text: "Dans « Il parle à sa mère », « à sa mère » est un COD.", true: false, why: "Le complément est introduit par la préposition « à » : c'est un COI." },
              { text: "« Sembler » est un verbe d'état.", true: true, why: "Comme être, paraître, devenir, demeurer, rester et avoir l'air." },
              { text: "L'adjectif attribut s'accorde avec le sujet.", true: true, why: "« Les fenêtres restent ouvertes » : l'attribut prend le genre et le nombre de « fenêtres »." },
              { text: "Dans « Léa devient une championne », « une championne » est un COD.", true: false, why: "« Devenir » est un verbe d'état et Léa est la championne : c'est un attribut du sujet." },
              { text: "On peut remplacer un COD par « le », « la » ou « les ».", true: true, why: "« Il range ses livres » devient « Il les range »." },
              { text: "Un COI se déplace librement en début de phrase, comme un complément circonstanciel.", true: false, why: "Le COI est un complément du verbe : il reste dans le groupe verbal et ne se déplace pas." },
            ],
          },
          quiz: [
            { q: "Dans « Le chat attrape une souris », « une souris » est...", options: ["un COI", "un COD", "un attribut du sujet"], answer: 1, why: "Le chat attrape quoi ? une souris. Le complément est relié au verbe sans préposition : c'est un COD." },
            { q: "Dans « Nous parlons de nos vacances », « de nos vacances » est...", options: ["un COD", "un attribut du sujet", "un COI"], answer: 2, why: "Le complément est introduit par la préposition « de », imposée par le verbe « parler de » : c'est un COI." },
            { q: "Lequel de ces verbes est un verbe d'état ?", options: ["regarder", "attraper", "manger", "paraître"], answer: 3, why: "« Paraître » fait partie des verbes d'état, comme être, sembler, devenir, demeurer, rester, avoir l'air." },
            { q: "Complétez : « Ces films semblent ... »", options: ["amusants", "amusant", "amusantes"], answer: 0, why: "L'adjectif attribut s'accorde avec le sujet « ces films », masculin pluriel." },
            { q: "« Il lui téléphone » : le pronom « lui » est...", options: ["COD", "COI", "sujet"], answer: 1, why: "On téléphone à quelqu'un : « lui » remplace un complément introduit par « à », c'est un COI." },
          ],
          trap: "Prendre l'attribut du sujet pour un COD : après un verbe d'état (être, sembler, devenir...), le groupe qui suit désigne le sujet lui-même, comme dans « Tom devient un champion ».",
          method: "Face à un complément placé après le verbe, procédez dans l'ordre : le verbe est-il un verbe d'état ? Si oui, c'est un attribut. Sinon, y a-t-il une préposition ? Sans préposition, c'est un COD ; avec une préposition, c'est un COI. Vérifiez en remplaçant par un pronom.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'complements-circonstanciels',
          title: 'Les compléments circonstanciels : où, quand, comment ?',
          minutes: 30,
          objectives: [
            "Identifier les compléments circonstanciels grâce aux tests de déplacement et de suppression.",
            "Préciser la circonstance exprimée : lieu, temps, manière, et aussi cause ou but.",
            "Reconnaître la nature du complément circonstanciel : groupe nominal, groupe prépositionnel, adverbe.",
            "Distinguer le complément circonstanciel du complément d'objet.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un complément circonstanciel ?",
              paragraphs: [
                "Le complément circonstanciel apporte une information sur les circonstances de l'action : où elle se passe, quand, comment. Dans « Le matin, les enfants jouent dans la cour », « le matin » dit quand et « dans la cour » dit où. Comme il complète toute la phrase et non le verbe seul, on l'appelle aussi complément de phrase.",
                "Le complément circonstanciel a deux propriétés qui permettent de le reconnaître. On peut le supprimer : « Les enfants jouent » reste une phrase correcte. On peut le déplacer : « Les enfants jouent dans la cour le matin » ou « Dans la cour, le matin, les enfants jouent ». Une même phrase peut contenir plusieurs compléments circonstanciels.",
              ],
              box: { label: "Définition", text: "Le complément circonstanciel (ou complément de phrase) précise les circonstances de l'action. On peut le supprimer et le déplacer : « Le matin, les enfants jouent dans la cour. »" },
            },
            {
              heading: "Les principales circonstances",
              paragraphs: [
                "Pour trouver la circonstance exprimée, posez une question. Où ? indique le lieu : « Les poissons nagent dans l'aquarium ». Quand ? indique le temps : « Nous partirons dans deux jours ». Comment ? indique la manière : « Elle chante joyeusement », « Il traverse avec prudence ».",
                "D'autres circonstances existent. Pourquoi ? indique la cause : « À cause de la pluie, le match est annulé ». Dans quel but ? indique le but : « Il s'entraîne chaque jour pour gagner la course ». Attention : ce n'est pas la préposition qui décide de la circonstance, c'est le sens. « Dans » peut introduire un lieu (« dans le jardin ») ou un temps (« dans deux jours »).",
              ],
              box: { label: "Repère", text: "Où ? → lieu. Quand ? → temps. Comment ? → manière. Pourquoi ? → cause. Dans quel but ? → but. Exemple : « Demain (temps), au parc (lieu), nous jouerons calmement (manière). »" },
            },
            {
              heading: "Les différentes formes du complément circonstanciel",
              paragraphs: [
                "Le complément circonstanciel peut avoir plusieurs natures. Ce peut être un groupe nominal, sans préposition : « Le soir, je lis », « Chaque matin, il court ». Ce peut être un groupe prépositionnel, c'est-à-dire un groupe introduit par une préposition (à, dans, sur, sous, avec, pendant, pour...) : « dans la cour », « avec soin », « pendant les vacances ».",
                "Ce peut être enfin un adverbe, un mot invariable : « hier », « demain », « ici », « partout », « lentement », « doucement ». Beaucoup d'adverbes de manière se terminent par -ment. Quand un complément circonstanciel est placé en début de phrase, on le fait en général suivre d'une virgule : « Le soir, je lis. »",
              ],
            },
            {
              heading: "Ne pas confondre avec le complément d'objet",
              paragraphs: [
                "Un complément introduit par « à » ou « de » n'est pas forcément un complément circonstanciel. Comparez « Il pense à son voyage » et « Il part à huit heures ». Dans la première phrase, « à son voyage » complète le verbe « penser à » : on ne peut ni le supprimer (« Il pense » change le sens), ni le déplacer (« À son voyage, il pense » sonne faux). C'est un COI.",
                "Dans la seconde phrase, « à huit heures » peut être supprimé (« Il part ») et déplacé (« À huit heures, il part ») : c'est un complément circonstanciel de temps. Les tests de suppression et de déplacement sont donc vos meilleurs outils. En rédaction, déplacer les compléments circonstanciels permet aussi de varier le début de vos phrases.",
              ],
              box: { label: "À retenir", text: "Complément circonstanciel : supprimable et déplaçable. Complément d'objet (COD, COI) : lié au verbe, ni supprimable sans changer le sens, ni déplaçable. « Il pense à son voyage » (COI) ; « Il part à huit heures » (CC de temps)." },
            },
          ],
          keyPoints: [
            "Le complément circonstanciel (ou complément de phrase) précise les circonstances de l'action.",
            "On peut le supprimer et le déplacer ; une phrase peut en contenir plusieurs.",
            "Où ? lieu ; quand ? temps ; comment ? manière ; pourquoi ? cause ; dans quel but ? but.",
            "Natures : groupe nominal (le soir), groupe prépositionnel (dans la cour), adverbe (lentement).",
            "C'est le sens qui donne la circonstance, pas la préposition : « dans deux jours » exprime le temps.",
            "Le COD et le COI, eux, ne se déplacent pas : ils complètent le verbe.",
          ],
          example: {
            statement: "Relevez les compléments circonstanciels de cette phrase, donnez leur circonstance et leur nature, puis prouvez qu'il s'agit bien de compléments circonstanciels : « Hier soir, dans le salon, mon grand-père racontait lentement une histoire. »",
            solution: [
              "Repérer le verbe et le sujet : le verbe est « racontait », son sujet « mon grand-père ».",
              "« Hier soir » répond à la question « quand ? » : complément circonstanciel de temps. C'est un groupe nominal (adverbe « hier » + nom « soir »), sans préposition.",
              "« dans le salon » répond à la question « où ? » : complément circonstanciel de lieu. C'est un groupe prépositionnel, introduit par « dans ».",
              "« lentement » répond à la question « comment ? » : complément circonstanciel de manière. C'est un adverbe.",
              "Faire les tests : on peut les supprimer (« Mon grand-père racontait une histoire ») et les déplacer (« Dans le salon, mon grand-père racontait lentement une histoire hier soir »).",
              "Ne pas se tromper : « une histoire » répond à « racontait quoi ? » et ne peut pas être déplacé : c'est un COD, pas un complément circonstanciel.",
              "Réponse : trois compléments circonstanciels, de temps (« Hier soir »), de lieu (« dans le salon ») et de manière (« lentement »).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez le complément circonstanciel de chaque phrase et indiquez la circonstance qu'il exprime. a) Le matin, je bois un chocolat chaud. b) Les poissons nagent dans l'aquarium. c) Elle chante joyeusement. d) À cause de la pluie, le match est annulé. e) Nous partirons dans deux jours.",
              hint: "Posez les questions où ? quand ? comment ? pourquoi ? Pour la dernière phrase, ne vous fiez pas à la préposition : réfléchissez au sens.",
              solution: [
                "a) « Le matin » (quand ?) : complément circonstanciel de temps.",
                "b) « dans l'aquarium » (où ?) : complément circonstanciel de lieu.",
                "c) « joyeusement » (comment ?) : complément circonstanciel de manière.",
                "d) « À cause de la pluie » (pourquoi ?) : complément circonstanciel de cause.",
                "e) « dans deux jours » (quand ?) : complément circonstanciel de temps, même si « dans » introduit souvent un lieu.",
              ],
            },
            {
              level: 2,
              statement: "Enrichissez la phrase « Le chat dort. » en ajoutant successivement : a) un complément circonstanciel de lieu (groupe prépositionnel) ; b) un complément circonstanciel de temps (groupe nominal) ; c) un complément circonstanciel de manière (adverbe). Écrivez ensuite la phrase complète, puis une deuxième version où l'ordre des compléments est changé.",
              hint: "Pour le lieu, commencez par une préposition (sur, sous, dans...) ; pour le temps, un groupe nominal sans préposition (le soir, chaque après-midi...) ; pour la manière, un adverbe en -ment.",
              solution: [
                "a) Lieu, groupe prépositionnel : « Le chat dort sur le canapé ».",
                "b) Temps, groupe nominal : « Chaque après-midi, le chat dort sur le canapé ».",
                "c) Manière, adverbe : « Chaque après-midi, le chat dort paisiblement sur le canapé ».",
                "Deuxième version, compléments déplacés : « Sur le canapé, le chat dort paisiblement chaque après-midi ».",
                "Vérification : en supprimant les trois compléments, on retrouve « Le chat dort », qui reste une phrase correcte. Ce sont bien des compléments circonstanciels.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Dans ce texte écrit pour l'exercice, relevez tous les compléments et classez-les en deux groupes : compléments du verbe (COD, COI) et compléments circonstanciels (avec leur circonstance et leur nature). « Chaque soir, Malo promène son chien dans le parc. Il parle doucement à son animal. Pendant les vacances, ils courent ensemble sur la plage. » Justifiez au moins deux de vos réponses par un test.",
              hint: "Pour chaque groupe, essayez de le supprimer puis de le déplacer. Un groupe qui résiste aux deux tests complète le verbe.",
              solution: [
                "Phrase 1 : « son chien » répond à « promène quoi ? qui ? », sans préposition, et ne se déplace pas : COD. « Chaque soir » : complément circonstanciel de temps, groupe nominal. « dans le parc » : complément circonstanciel de lieu, groupe prépositionnel.",
                "Phrase 2 : « à son animal » répond à « parle à qui ? » et ne se déplace pas : COI. « doucement » : complément circonstanciel de manière, adverbe.",
                "Phrase 3 : « Pendant les vacances » : complément circonstanciel de temps, groupe prépositionnel. « ensemble » : complément circonstanciel de manière, adverbe. « sur la plage » : complément circonstanciel de lieu, groupe prépositionnel.",
                "Test 1 : on peut supprimer « Chaque soir » et « dans le parc » : « Malo promène son chien » reste correct. On peut aussi les déplacer : « Dans le parc, Malo promène son chien chaque soir ».",
                "Test 2 : « À son animal, il parle doucement » sonne faux, alors que « Doucement, il parle à son animal » est correct : « à son animal » est un COI, « doucement » un complément circonstanciel.",
                "Bilan : compléments du verbe : « son chien » (COD), « à son animal » (COI). Compléments circonstanciels : « Chaque soir », « Pendant les vacances » (temps) ; « dans le parc », « sur la plage » (lieu) ; « doucement », « ensemble » (manière).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque complément circonstanciel à la circonstance qu'il exprime.",
            pairs: [
              { left: "Dans la cour", right: "Lieu (où ?)" },
              { left: "Demain matin", right: "Temps (quand ?)" },
              { left: "Avec prudence", right: "Manière (comment ?)" },
              { left: "À cause du brouillard", right: "Cause (pourquoi ?)" },
              { left: "Pour gagner la course", right: "But (dans quel but ?)" },
            ],
          },
          quiz: [
            { q: "Quelle question permet de trouver un complément circonstanciel de lieu ?", options: ["Où ?", "Quand ?", "Comment ?", "Qui ?"], answer: 0, why: "Le lieu répond à la question « où ? » : « dans la cour », « ici », « sur la plage »." },
            { q: "Dans « Ce soir, nous regarderons un film », « Ce soir » est un complément circonstanciel de...", options: ["lieu", "manière", "temps"], answer: 2, why: "« Ce soir » répond à la question « quand ? » : c'est un complément circonstanciel de temps." },
            { q: "Quelle propriété permet de reconnaître un complément circonstanciel ?", options: ["Il suit toujours directement le verbe", "On peut le déplacer ou le supprimer", "Il répond à la question « quoi ? »"], answer: 1, why: "Le complément circonstanciel est mobile et facultatif, contrairement au COD et au COI." },
            { q: "Dans « Il marche lentement », « lentement » est...", options: ["un nom, COD", "un adjectif, attribut du sujet", "un adverbe, CC de manière"], answer: 2, why: "« Lentement » est un adverbe invariable qui répond à la question « comment ? »." },
            { q: "Dans « Je pense à mon examen », « à mon examen » est...", options: ["un CC de lieu", "un COI", "un CC de temps"], answer: 1, why: "Le groupe complète le verbe « penser à » et ne peut être ni supprimé ni déplacé : c'est un COI." },
          ],
          trap: "Croire que tout groupe introduit par « à » ou « dans » est un complément circonstanciel de lieu : « Il pense à son voyage » contient un COI, et « dans deux jours » exprime le temps.",
          method: "Pour chaque groupe, faites deux tests : essayez de le supprimer, puis de le déplacer en début de phrase. S'il passe les deux tests, c'est un complément circonstanciel : posez alors la question où ? quand ? comment ? pourquoi ? pour trouver la circonstance.",
        },
      ],
    },
    {
      id: 'theatre-ruses',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'texte-theatre',
          title: 'Lire un texte de théâtre : répliques et didascalies',
          minutes: 30,
          objectives: [
            "Identifier les éléments d'un texte de théâtre : liste des personnages, actes, scènes, répliques et didascalies.",
            "Distinguer les différentes formes de répliques : dialogue, tirade, monologue, aparté.",
            "Lire un texte de théâtre en imaginant sa représentation sur scène.",
            "Transformer un court récit en scène de théâtre.",
          ],
          course: [
            {
              heading: "Un texte écrit pour être joué",
              paragraphs: [
                "Une pièce de théâtre ne se lit pas comme un roman. Elle est écrite pour être jouée par des comédiens, devant un public. Il n'y a pas de narrateur pour raconter l'histoire : ce sont les personnages qui parlent et agissent sous nos yeux. Tout ce que le spectateur apprend passe par leurs paroles, leurs gestes, leurs costumes et le décor.",
                "Lire une pièce demande donc un travail d'imagination : il faut se représenter la scène, entendre les voix, voir les gestes. L'auteur d'une pièce de théâtre s'appelle un dramaturge. En France, le plus célèbre est Molière (1622-1673), de son vrai nom Jean-Baptiste Poquelin, qui était à la fois auteur, comédien et chef de troupe.",
              ],
              box: { label: "Définition", text: "Le théâtre est un texte écrit pour être joué devant un public. Il n'a pas de narrateur : l'histoire avance grâce aux paroles et aux actions des personnages. L'auteur de théâtre s'appelle un dramaturge." },
            },
            {
              heading: "Le découpage d'une pièce : actes et scènes",
              paragraphs: [
                "Au début de la pièce, on trouve la liste des personnages, souvent accompagnée de quelques mots qui les présentent : « Géronte, père de Léandre », « Scapin, valet de Léandre ». Cette liste aide le lecteur à savoir qui est qui et quels liens unissent les personnages.",
                "Une pièce est découpée en actes, un peu comme un livre en chapitres. Les Fourberies de Scapin, la comédie de Molière jouée en 1671, compte trois actes. Chaque acte est lui-même divisé en scènes. On change de scène chaque fois qu'un personnage entre sur scène ou en sort. Pour situer un passage, on note l'acte en chiffres romains et la scène en chiffres arabes : « acte III, scène 2 » s'écrit aussi « III, 2 ».",
              ],
              box: { label: "Repère", text: "La pièce se divise en actes, et chaque acte en scènes. Une nouvelle scène commence dès qu'un personnage entre ou sort. Notation : l'acte en chiffres romains, la scène en chiffres arabes (III, 2 = acte III, scène 2)." },
            },
            {
              heading: "Les répliques : la parole des personnages",
              paragraphs: [
                "Le texte prononcé par les personnages se compose de répliques. Une réplique est ce qu'un personnage dit, sans être interrompu, avant qu'un autre prenne la parole. Elle est toujours précédée du nom du personnage qui parle, souvent écrit en majuscules. L'ensemble des répliques échangées entre plusieurs personnages forme un dialogue.",
                "Certaines répliques portent un nom particulier. Une tirade est une longue réplique, dans laquelle un personnage développe une idée ou raconte un événement devant d'autres personnages. Un monologue est une réplique prononcée par un personnage seul en scène (ou qui se croit seul) : il se parle à lui-même et nous fait connaître ses pensées. Un aparté est une courte réplique qu'un personnage dit pour lui-même ou pour le public, alors que les autres personnages présents sont censés ne pas l'entendre.",
                "L'aparté est très utile dans les pièces de ruse : le trompeur y révèle au public ce qu'il cache à sa victime. Le spectateur devient alors son complice : il sait ce que la victime ignore, et ce décalage fait rire.",
              ],
              box: { label: "À retenir", text: "Réplique : ce que dit un personnage avant qu'un autre parle. Tirade : longue réplique devant d'autres personnages. Monologue : réplique d'un personnage seul en scène. Aparté : réplique que les autres personnages présents ne sont pas censés entendre." },
            },
            {
              heading: "Les didascalies : les indications de jeu",
              paragraphs: [
                "Dans un texte de théâtre, tout ce qui n'est pas prononcé par les comédiens s'appelle une didascalie. Les didascalies sont souvent écrites en italique ou entre parenthèses. Elles ne sont pas dites sur scène : ce sont des indications de l'auteur pour le lecteur, le metteur en scène et les comédiens. Le nom du personnage placé avant chaque réplique est lui aussi une didascalie.",
                "Les didascalies renseignent sur le lieu et le décor (« La scène est à Naples », indique Molière au début des Fourberies de Scapin), sur les entrées et les sorties (« Il sort »), sur les gestes et les déplacements (« Il lui donne un coup de bâton »), sur le ton (« en colère », « tout bas ») et sur la personne à qui l'on s'adresse (« à part », « à Octave »). Molière en écrit peu : ce sont souvent les répliques elles-mêmes qui laissent deviner les gestes.",
              ],
              box: { label: "Définition", text: "Une didascalie est une indication de l'auteur qui n'est pas prononcée sur scène : nom du personnage qui parle, lieu, décor, gestes, déplacements, ton, entrées et sorties, destinataire. Elle est souvent en italique ou entre parenthèses." },
            },
          ],
          keyPoints: [
            "Le théâtre est écrit pour être joué : pas de narrateur, l'histoire avance par les paroles et les actions des personnages.",
            "Une pièce se divise en actes, et chaque acte en scènes ; on change de scène quand un personnage entre ou sort.",
            "Réplique : ce que dit un personnage ; un échange de répliques forme un dialogue.",
            "Tirade : longue réplique. Monologue : personnage seul en scène. Aparté : réplique que les autres personnages n'entendent pas.",
            "Les didascalies, non prononcées, indiquent le lieu, le décor, les gestes, le ton, les entrées et sorties.",
            "Lire une pièce, c'est imaginer sa représentation : voir les gestes, entendre les voix.",
          ],
          example: {
            statement: "Voici une scène écrite pour l'exercice : « Une cuisine. Sur la table, un gâteau au chocolat. / LÉO (entrant sur la pointe des pieds) : Personne ? Parfait... (Il s'approche du gâteau.) Juste une petite part, personne ne verra rien. / LA MÈRE (entrant) : Léo ! Que fais-tu dans la cuisine ? / LÉO (à part) : Vite, une idée ! (À sa mère, d'un air innocent.) Je surveillais le gâteau, maman. J'ai cru voir une souris ! » (le signe / sépare les répliques). Relevez les didascalies et dites ce qu'elles indiquent, puis nommez la forme de la première réplique de Léo et celle de la réplique « Vite, une idée ! ».",
            solution: [
              "Repérer les didascalies : ce sont tous les passages qui ne sont pas prononcés, c'est-à-dire les noms des personnages (LÉO, LA MÈRE) et les indications entre parenthèses ou en tête de scène.",
              "« Une cuisine. Sur la table, un gâteau au chocolat. » indique le lieu et le décor. « entrant sur la pointe des pieds » et « entrant » indiquent les entrées des personnages et leur manière de bouger.",
              "« Il s'approche du gâteau. » indique un déplacement. « à part » signale que la mère n'est pas censée entendre. « À sa mère, d'un air innocent » indique à qui Léo s'adresse et sur quel ton.",
              "Première réplique de Léo : il est seul en scène et se parle à lui-même. C'est un court monologue, qui nous fait connaître son projet.",
              "« Vite, une idée ! » : la mère est présente, mais la didascalie « à part » indique qu'elle n'entend pas. C'est un aparté : le public sait que Léo va mentir, alors que sa mère l'ignore.",
              "Réponse : six didascalies en plus des noms des personnages (lieu et décor, deux entrées, un déplacement, un aparté, un destinataire avec un ton) ; la première réplique de Léo est un monologue, « Vite, une idée ! » est un aparté.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Pour chaque élément, dites s'il s'agit d'une réplique ou d'une didascalie ; pour les didascalies, précisez ce qu'elles indiquent. a) (Il ferme la porte à clé.) b) « Je ne vous crois pas ! » c) (tout bas) d) « Le décor représente une place de village. » e) (à part) f) « Où avez-vous caché la lettre ? » 2) Dans quel cas change-t-on de scène ?",
              hint: "Demandez-vous si le comédien prononce ces mots sur scène. S'il ne les dit pas, c'est une didascalie.",
              solution: [
                "a) Didascalie : elle indique un geste du personnage.",
                "b) Réplique : ce sont des paroles prononcées par un personnage.",
                "c) Didascalie : elle indique le ton (le personnage parle à voix basse).",
                "d) Didascalie : elle indique le lieu et le décor.",
                "e) Didascalie : elle signale un aparté, que les autres personnages ne sont pas censés entendre.",
                "f) Réplique : c'est une question posée par un personnage.",
                "2) On change de scène chaque fois qu'un personnage entre sur scène ou en sort.",
              ],
            },
            {
              level: 2,
              statement: "Transformez ce récit, écrit pour l'exercice, en une scène de théâtre. Votre scène doit contenir au moins quatre didascalies, dont une indication de lieu, et un aparté. « Le soir, Nina entra dans la chambre de son frère Hugo. Furieuse, elle lui demanda s'il avait pris son casque. Hugo, qui cachait le casque derrière son dos, répondit d'un air innocent qu'il ne l'avait jamais vu. Puis il murmura pour lui-même qu'il l'avait échappé belle. »",
              hint: "Supprimez le narrateur : les paroles rapportées deviennent des répliques au discours direct, et les informations sur le lieu, les gestes et le ton deviennent des didascalies.",
              solution: [
                "Repérer ce qui deviendra des didascalies : le lieu et le moment (le soir, la chambre d'Hugo), l'entrée de Nina, sa colère, le geste d'Hugo (le casque caché), son air innocent, le murmure pour lui-même (aparté).",
                "Repérer ce qui deviendra des répliques : la question de Nina, la réponse d'Hugo et sa phrase murmurée, transformées en paroles au discours direct.",
                "Proposition de scène : « La chambre d'Hugo, le soir. HUGO est assis sur son lit, un casque caché derrière son dos. / NINA (entrant, furieuse) : Hugo ! C'est toi qui as pris mon casque ? / HUGO (d'un air innocent) : Ton casque ? Quel casque ? Je ne l'ai jamais vu. / NINA (fouillant le bureau) : Hum... Il doit bien être quelque part. / HUGO (à part, serrant le casque derrière son dos) : Ouf ! Elle ne l'a pas vu. Je l'ai échappé belle ! »",
                "Vérifier les consignes : didascalies de lieu (« La chambre d'Hugo, le soir »), de geste (« un casque caché derrière son dos », « fouillant le bureau », « serrant le casque derrière son dos »), de ton (« furieuse », « d'un air innocent ») et d'entrée (« entrant »).",
                "Vérifier l'aparté : Nina est toujours sur scène quand Hugo parle, mais la didascalie « à part » indique qu'elle ne l'entend pas. C'est bien un aparté ; si Nina était sortie, la réplique serait un monologue.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici une suite de répliques écrite pour l'exercice, sans découpage en scènes. « Une place de village, le matin. / THÉO (seul, une lettre à la main) : Une lettre de Margot ! Elle veut me voir à midi... Si mon père l'apprend, il sera furieux. / (Entre MARGOT.) / MARGOT : Bonjour, Théo. Tu as reçu ma lettre ? / THÉO (à part) : Surtout, ne pas montrer que je suis ému. (À Margot.) Quelle lettre ? / (Entre LE PÈRE de Théo.) / LE PÈRE : Théo ! Que fais-tu ici avec cette demoiselle ? / MARGOT (très vite) : Je demandais mon chemin, monsieur. (Elle sort.) / LE PÈRE : Rentre à la maison. (Il sort.) / THÉO (seul) : Mon père n'a rien vu... mais Margot est partie ! » 1) Découpez ce passage en scènes et justifiez. 2) Relevez deux monologues et un aparté. 3) Classez les didascalies selon ce qu'elles indiquent : lieu et moment, entrée ou sortie, geste ou objet, ton, destinataire.",
              hint: "Suivez les personnages présents : chaque fois que quelqu'un entre ou sort, une nouvelle scène commence. Notez à chaque fois la liste des personnages sur scène.",
              solution: [
                "1) Scène 1 : Théo seul. Scène 2 : Margot entre, Théo et Margot sont sur scène. Scène 3 : le père entre, les trois personnages sont présents. Scène 4 : Margot sort, il reste Théo et son père. Scène 5 : le père sort, Théo est de nouveau seul. Il y a donc cinq scènes, car il y a quatre entrées ou sorties après la première scène.",
                "2) Monologues : la première réplique de Théo (« Une lettre de Margot !... ») et la dernière (« Mon père n'a rien vu... »), car il est seul en scène. Aparté : « Surtout, ne pas montrer que je suis ému », signalé par « à part » : Margot est présente mais n'est pas censée l'entendre.",
                "3) Lieu et moment : « Une place de village, le matin ».",
                "Entrée ou sortie : « Entre MARGOT », « Entre LE PÈRE de Théo », « Elle sort », « Il sort », ainsi que « seul », qui indique que Théo est seul en scène.",
                "Geste ou objet : « une lettre à la main ». Ton : « très vite ». Destinataire : « à part » et « À Margot ».",
                "Résultat : cinq scènes, deux monologues de Théo, un aparté, et des didascalies de cinq sortes ; il faut aussi compter comme didascalies les noms des personnages placés avant les répliques.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du théâtre à sa définition.",
            pairs: [
              { left: "Réplique", right: "Ce que dit un personnage avant qu'un autre prenne la parole" },
              { left: "Tirade", right: "Longue réplique prononcée devant d'autres personnages" },
              { left: "Monologue", right: "Réplique d'un personnage seul en scène" },
              { left: "Aparté", right: "Réplique que les autres personnages ne sont pas censés entendre" },
              { left: "Didascalie", right: "Indication de l'auteur qui n'est pas prononcée sur scène" },
              { left: "Scène", right: "Partie d'un acte qui change quand un personnage entre ou sort" },
            ],
          },
          quiz: [
            { q: "Comment appelle-t-on une indication de l'auteur qui n'est pas prononcée par les comédiens ?", options: ["Une réplique", "Une didascalie", "Un monologue", "Une indication orale"], answer: 1, why: "La didascalie n'est pas dite sur scène : elle indique le lieu, les gestes, le ton, les entrées et les sorties." },
            { q: "Un personnage seul en scène qui exprime ses pensées prononce...", options: ["un dialogue entre deux voix", "un monologue", "une didascalie"], answer: 1, why: "Le monologue est la réplique d'un personnage seul (ou qui se croit seul) en scène." },
            { q: "Dans une pièce, on change de scène quand...", options: ["un personnage pose une question", "le rideau tombe à chaque réplique", "le décor est toujours modifié", "un personnage entre ou sort"], answer: 3, why: "La scène est délimitée par les entrées et les sorties des personnages." },
            { q: "La didascalie « (à part) » signale...", options: ["un aparté", "un monologue", "une sortie du personnage"], answer: 0, why: "Elle indique que les autres personnages présents ne sont pas censés entendre la réplique, alors que le public l'entend." },
            { q: "Dans la notation « II, 3 », que désigne le chiffre romain ?", options: ["la scène", "la réplique", "l'acte", "la page"], answer: 2, why: "Le chiffre romain désigne l'acte et le chiffre arabe la scène : « II, 3 » signifie acte II, scène 3." },
          ],
          trap: "Lire les didascalies à voix haute comme si elles faisaient partie du texte joué, ou au contraire les sauter : elles ne sont pas prononcées sur scène, mais elles donnent les gestes, le ton et les déplacements indispensables pour comprendre la scène.",
          method: "Avant de lire une scène, repérez qui est présent et qui entre ou sort. Puis, à chaque réplique, demandez-vous à qui parle le personnage et sur quel ton, en vous appuyant sur les didascalies : imaginez la scène comme un petit film.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ruses-personnages',
          title: 'Masques, ruses et tromperies : les personnages qui jouent un rôle',
          minutes: 35,
          objectives: [
            "Identifier les ruses des personnages : mensonge, déguisement, rôle joué, quiproquo.",
            "Caractériser les personnages types de la comédie : le valet rusé, le maître ou le vieillard dupé, les jeunes amoureux.",
            "Reconnaître les formes du comique : comique de gestes, de mots, de situation, de caractère et de répétition.",
            "Situer la farce, la commedia dell'arte et Molière dans l'histoire du théâtre.",
          ],
          course: [
            {
              heading: "Le trompeur et le trompé",
              paragraphs: [
                "Beaucoup de comédies reposent sur une ruse. Un personnage, le trompeur (on dit aussi le fourbe ou le rusé), invente un mensonge, se déguise ou joue un rôle pour obtenir ce qu'il veut. Un autre personnage, le trompé, que l'on appelle aussi la dupe, tombe dans le piège. Le mot « fourberie », dans le titre Les Fourberies de Scapin, désigne justement une tromperie habile.",
                "Les ruses ont souvent un but : aider de jeunes amoureux à se marier malgré l'opposition de leurs pères, obtenir de l'argent, se venger ou simplement s'amuser. Le spectateur, lui, est dans la confidence : il voit le piège se mettre en place et attend avec plaisir que la victime tombe dedans. Parfois, la situation se retourne et le trompeur se fait tromper à son tour : on parle alors de « trompeur trompé ».",
              ],
              box: { label: "Définition", text: "La ruse est un moyen habile de tromper quelqu'un. Le trompeur (ou fourbe) ment, se déguise ou joue un rôle ; la dupe se laisse tromper. Le trompeur trompé est celui qui se fait piéger à son tour." },
            },
            {
              heading: "Des personnages masqués : de la farce à la commedia dell'arte",
              paragraphs: [
                "Les histoires de ruse sont très anciennes au théâtre. Au Moyen Âge, la farce est une courte pièce comique, jouée sur les places et dans les foires, où l'on rit des tromperies et des coups de bâton. La plus célèbre, La Farce de Maître Pathelin, a été écrite vers 1460 par un auteur inconnu. L'avocat Pathelin y obtient d'un drapier une pièce de tissu sans la payer. Puis il conseille à un berger de répondre « bê » à toutes les questions du juge, comme un mouton. Mais quand Pathelin réclame son salaire, le berger lui répond, à lui aussi, « bê » : le trompeur est trompé.",
                "Au XVIe siècle naît en Italie la commedia dell'arte. Des troupes de comédiens professionnels improvisent à partir d'un canevas, c'est-à-dire un simple résumé de l'intrigue. Les personnages sont toujours les mêmes, et beaucoup portent un masque qui permet de les reconnaître : Arlequin, le valet naïf et agile au costume de losanges colorés ; Pantalon, le vieux marchand avare ; les valets rusés. Scapin vient de ce répertoire : son nom rappelle le verbe italien scappare, « s'échapper ».",
                "Molière (1622-1673) a beaucoup appris de ces comédiens italiens, avec lesquels sa troupe a partagé une salle de théâtre à Paris. Il reprend leurs personnages types, leurs jeux de scène et leurs ruses dans ses comédies, comme Le Médecin malgré lui (1666) ou Les Fourberies de Scapin (1671).",
              ],
              box: { label: "Repère", text: "Moyen Âge : la farce (La Farce de Maître Pathelin, vers 1460). XVIe siècle : la commedia dell'arte en Italie, avec ses masques et ses personnages types. XVIIe siècle : Molière (1622-1673), Le Médecin malgré lui (1666), Les Fourberies de Scapin (1671)." },
            },
            {
              heading: "Les ruses de Scapin et de Sganarelle",
              paragraphs: [
                "Dans Les Fourberies de Scapin, deux jeunes gens amoureux, Octave et Léandre, ont besoin d'aide et d'argent, car leurs pères, Argante et Géronte, s'opposent à leurs projets. Le valet Scapin invente pour eux des ruses. À l'acte II, il fait croire à Géronte, un père très avare, que son fils Léandre a été retenu prisonnier sur une galère turque et qu'il faut payer une rançon. Désespéré de devoir donner son argent, Géronte répète plusieurs fois la même plainte : « Que diable allait-il faire dans cette galère ? ».",
                "À l'acte III, Scapin décide de se venger de Géronte. Il lui fait croire que des hommes armés le cherchent pour le tuer et le cache dans un sac. Puis, en imitant la voix de plusieurs personnages menaçants, il frappe le sac à coups de bâton. Scapin joue tous les rôles à la fois : il est menteur, comédien et metteur en scène de sa propre ruse. Mais Géronte finit par sortir la tête du sac et découvre la supercherie.",
                "Dans Le Médecin malgré lui, la ruse vient de Martine. Pour se venger de son mari Sganarelle, un fagotier (il coupe et vend du bois) qui l'a battue, elle fait croire à deux valets qu'il est un médecin génial, mais qui n'avoue son talent que si on le frappe. Battu, Sganarelle accepte de jouer le médecin. Il invente un faux latin, trompe tout le monde et finit par prendre goût à ce rôle.",
              ],
              box: { label: "À retenir", text: "Scapin, valet rusé, ment (la scène de la galère), joue plusieurs personnages en imitant leur voix (la scène du sac) et dirige la ruse comme un metteur en scène. Sganarelle, lui, est forcé de jouer au médecin, puis il y prend goût." },
            },
            {
              heading: "Pourquoi rit-on ? Les formes du comique",
              paragraphs: [
                "Les comédies de ruse cherchent à faire rire. On distingue plusieurs formes de comique. Le comique de gestes repose sur les mouvements du corps : chutes, coups de bâton, poursuites, grimaces. Le comique de mots joue avec le langage : jeux de mots, insultes inventées, faux latin, accents imités. Le comique de situation naît d'une situation inattendue, comme un personnage caché dans un sac. Le quiproquo en est une forme : un personnage prend une personne ou une chose pour une autre.",
                "Le comique de caractère se moque d'un défaut d'un personnage, exagéré jusqu'au ridicule : l'avarice de Géronte, la naïveté d'une dupe, la vantardise d'un peureux. Enfin, le comique de répétition fait rire en reprenant plusieurs fois le même mot, la même phrase ou le même geste, comme la plainte de Géronte sur la galère. Une même scène mêle souvent plusieurs formes de comique.",
              ],
              box: { label: "Repère", text: "Comique de gestes : coups, chutes, poursuites. Comique de mots : jeux de mots, faux latin, accents. Comique de situation : quiproquo, cachette, surprise. Comique de caractère : un défaut exagéré. Comique de répétition : une réplique ou un geste repris." },
            },
          ],
          keyPoints: [
            "La ruse oppose un trompeur (le fourbe) et une dupe ; le trompeur trompé se fait piéger à son tour.",
            "Moyens de la ruse : mensonge, déguisement, voix imitée, rôle joué, quiproquo.",
            "Personnages types : le valet rusé, le maître ou le vieillard avare et dupé, les jeunes amoureux.",
            "La farce (Moyen Âge, Maître Pathelin vers 1460) et la commedia dell'arte (Italie, XVIe siècle, masques) inspirent Molière.",
            "Molière (1622-1673) : Le Médecin malgré lui (1666), Les Fourberies de Scapin (1671).",
            "Cinq formes de comique : gestes, mots, situation, caractère, répétition.",
          ],
          example: {
            statement: "Voici une scène écrite pour l'exercice. Le valet Lucas vient de casser le vase préféré de son maître, monsieur Grippesou. « LUCAS (à part, cachant les morceaux derrière son dos) : Il arrive ! Vite, une histoire... / M. GRIPPESOU : Lucas, où est mon vase ? / LUCAS (l'air affolé) : Ah, monsieur ! Un chat énorme, un chat sauvage, est entré par la fenêtre ! Il a sauté sur le buffet et, crac ! / M. GRIPPESOU : Un chat ? Mais la fenêtre est fermée ! / LUCAS : Fermée... par le chat, monsieur ! Il est très poli. » Analysez la ruse : qui trompe qui, par quel moyen, et comment la scène fait-elle rire ?",
            solution: [
              "Le trompeur est Lucas, le valet ; la dupe visée est son maître, M. Grippesou. On retrouve le couple traditionnel du valet rusé et du maître.",
              "Le but de la ruse : cacher une faute (le vase cassé) pour éviter d'être puni. Le moyen : un mensonge, l'invention d'un chat sauvage.",
              "L'aparté du début (« Il arrive ! Vite, une histoire... ») révèle au public que Lucas va mentir. Le spectateur est complice : il sait ce que le maître ignore.",
              "Comique de gestes : Lucas cache les morceaux derrière son dos et prend un air affolé. Comique de mots : l'onomatopée « crac » et la réponse absurde « fermée par le chat ».",
              "Comique de situation : le mensonge s'effondre (la fenêtre est fermée), et Lucas s'enfonce dans une explication de plus en plus ridicule.",
              "Conclusion : Lucas est un valet rusé mais maladroit ; la scène fait rire par le décalage entre ce que sait le public et ce que croit le maître, et par l'absurdité du mensonge.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Nommez la forme de comique utilisée dans chaque situation, imaginée pour l'exercice. a) Un valet reçoit un coup de bâton et tombe à la renverse. b) Un vieillard répète cinq fois dans la scène « Et mon argent ? ». c) Un personnage prend le notaire pour le médecin et lui montre sa langue. d) Un faux médecin invente des mots latins qui ne veulent rien dire. e) Un avare refuse d'offrir un verre d'eau à un ami qui meurt de soif.",
              hint: "Demandez-vous à chaque fois ce qui fait rire : un mouvement du corps, un mot, une erreur sur une personne, un défaut ou une reprise.",
              solution: [
                "a) Le coup de bâton et la chute font rire par le mouvement du corps : comique de gestes.",
                "b) La même réplique revient plusieurs fois : comique de répétition.",
                "c) Le personnage prend une personne pour une autre : c'est un quiproquo, donc un comique de situation.",
                "d) Le faux latin est un jeu avec le langage : comique de mots.",
                "e) L'avarice est exagérée jusqu'au ridicule : comique de caractère.",
              ],
            },
            {
              level: 2,
              statement: "Pour chacune de ces ruses, indiquez le trompeur, la dupe, le moyen utilisé et le but. a) Dans La Farce de Maître Pathelin, le berger répond « bê » au juge, puis à Pathelin quand celui-ci réclame son salaire. b) Dans Les Fourberies de Scapin, Scapin cache Géronte dans un sac et imite des voix menaçantes. c) Dans Le Médecin malgré lui, Martine affirme aux valets que son mari Sganarelle est un grand médecin. d) Dans une pièce imaginée pour l'exercice, la servante Nérine se déguise en vieille marchande pour entrer dans la maison où sa maîtresse est enfermée.",
              hint: "Posez les quatre questions dans l'ordre : qui trompe ? qui est trompé ? comment ? pourquoi ?",
              solution: [
                "a) Trompeur : le berger. Dupes : le juge, puis Pathelin. Moyen : il fait l'idiot en imitant le mouton. But : échapper à la condamnation, puis ne pas payer Pathelin. Pathelin est un trompeur trompé.",
                "b) Trompeur : Scapin. Dupe : Géronte. Moyen : un mensonge (des hommes le cherchent) et des voix imitées. But : se venger de Géronte en le frappant sans être reconnu.",
                "c) Trompeuse : Martine. Dupes : les valets, et Sganarelle, qui sera battu. Moyen : un mensonge sur le métier de son mari. But : se venger de Sganarelle, qui l'a battue.",
                "d) Trompeuse : Nérine. Dupes : les gardiens de la maison. Moyen : un déguisement. But : retrouver et aider sa maîtresse.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez une courte scène de comédie (8 à 10 répliques) entre un valet ou une servante rusés et un maître avare. Votre scène doit contenir : une ruse dont on comprend le but, au moins un aparté, au moins trois didascalies de sortes différentes, et au moins deux formes de comique. À la fin, le trompeur doit être trompé. Expliquez ensuite en quelques lignes comment votre scène respecte chaque consigne.",
              hint: "Choisissez d'abord le but de la ruse (obtenir de l'argent, cacher une faute), puis le moyen (mensonge, déguisement), et enfin le retournement : comment le maître peut-il piéger le rusé à la fin ?",
              solution: [
                "Préparer : la servante Lisette veut obtenir dix écus de son maître avare, M. Harpin, en lui faisant croire qu'un médecin doit soigner son cheval. Retournement : le maître a tout entendu et la piège.",
                "Proposition de scène : « Une salle chez M. Harpin. / LISETTE (à part) : Il faut dix écus pour la fête de ce soir. Inventons quelque chose. (À M. Harpin, en se tordant les mains.) Monsieur, votre cheval est malade ! / M. HARPIN : Malade ? Mon cheval ? Mon beau cheval ? / LISETTE : Très malade, monsieur. Le médecin demande dix écus. / M. HARPIN : Dix écus ! Dix écus ! Dix écus pour un cheval ! / LISETTE (à part) : Il va céder, je le sens. / M. HARPIN (sortant lentement une bourse) : Eh bien, soit. Mais je vais porter l'argent moi-même au médecin. Allons à l'écurie. / LISETTE (affolée) : À l'écurie ? C'est que... le cheval dort ! / M. HARPIN (souriant) : Alors je le réveillerai. Et cette fête de ce soir, Lisette, elle se fera sans mes écus. (Il range sa bourse.) / LISETTE (à part) : Il avait tout entendu ! »",
                "La ruse et son but : Lisette ment (le cheval malade) pour obtenir de l'argent pour la fête.",
                "Les apartés : « Il faut dix écus... », « Il va céder, je le sens », « Il avait tout entendu ! ».",
                "Les didascalies de sortes différentes : lieu (« Une salle chez M. Harpin »), destinataire (« à part », « À M. Harpin »), geste (« en se tordant les mains », « sortant lentement une bourse », « Il range sa bourse »), ton (« affolée », « souriant »).",
                "Les formes de comique : répétition (« Dix écus ! » trois fois, « Mon cheval ? Mon beau cheval ? »), caractère (l'avarice de M. Harpin), mots (« le cheval dort », excuse absurde), situation (la menteuse est prise à son propre piège).",
                "Le retournement : M. Harpin a deviné la ruse, Lisette devient la dupe. C'est bien un trompeur trompé.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la ruse au théâtre.",
            statements: [
              { text: "Scapin est le valet de Géronte.", true: false, why: "Scapin est le valet de Léandre, le fils de Géronte : c'est justement le père qu'il trompe." },
              { text: "La commedia dell'arte est née en Italie au XVIe siècle.", true: true, why: "Ses comédiens improvisaient à partir d'un canevas, avec des masques et des personnages types." },
              { text: "Dans La Farce de Maître Pathelin, l'avocat finit trompé par le berger.", true: true, why: "Le berger lui répond « bê » quand il réclame son salaire : Pathelin est un trompeur trompé." },
              { text: "Un quiproquo est un coup de bâton donné par erreur.", true: false, why: "Un quiproquo est le fait de prendre une personne ou une chose pour une autre." },
              { text: "Le comique de caractère se moque d'un défaut exagéré d'un personnage.", true: true, why: "Par exemple l'avarice de Géronte, qui ne pense qu'à son argent." },
              { text: "Molière a écrit Les Fourberies de Scapin au Moyen Âge.", true: false, why: "La pièce date de 1671, au XVIIe siècle ; c'est la farce de Maître Pathelin qui date du Moyen Âge." },
              { text: "Dans Le Médecin malgré lui, Sganarelle est un vrai médecin.", true: false, why: "C'est un fagotier, forcé de jouer au médecin à cause de la ruse de sa femme Martine." },
            ],
          },
          quiz: [
            { q: "Qui est l'auteur des Fourberies de Scapin ?", options: ["Jean Racine", "Molière", "Victor Hugo", "Jean de La Fontaine"], answer: 1, why: "Molière a écrit et joué cette comédie en 1671." },
            { q: "La plainte répétée de Géronte (« Que diable allait-il faire dans cette galère ? ») relève surtout du comique de...", options: ["répétition", "gestes", "mots inventés en latin"], answer: 0, why: "La même phrase revient plusieurs fois dans la scène et souligne l'avarice de Géronte." },
            { q: "Un quiproquo, c'est...", options: ["une poursuite à coups de bâton sur scène", "une longue réplique dite par un valet", "prendre une personne pour une autre", "un masque de la commedia dell'arte"], answer: 2, why: "Le quiproquo est une erreur sur une personne ou une chose, qui crée un comique de situation." },
            { q: "Dans la scène du sac, Scapin...", options: ["cache Géronte dans un sac et le frappe", "se cache dans un sac pour échapper à Géronte", "vend un sac de farine à Argante"], answer: 0, why: "Il fait croire à Géronte que des hommes le cherchent, le cache dans un sac et le frappe en imitant leurs voix." },
            { q: "Les comédiens de la commedia dell'arte...", options: ["récitaient des tragédies en vers", "jouaient sans aucun costume", "improvisaient à partir d'un canevas", "écrivaient toutes leurs répliques à l'avance"], answer: 2, why: "Ils improvisaient à partir d'un simple résumé de l'intrigue, appelé canevas." },
          ],
          trap: "Confondre le personnage et le rôle qu'il joue : quand Scapin imite des hommes menaçants, ce ne sont pas de nouveaux personnages, c'est Scapin lui-même qui joue la comédie pour tromper Géronte.",
          method: "Pour analyser une scène de ruse, répondez à quatre questions : qui trompe ? qui est trompé ? par quel moyen (mensonge, déguisement, voix imitée, rôle joué) ? dans quel but ? Ajoutez ensuite les formes de comique, en citant chaque fois un mot ou une didascalie du texte.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'mettre-en-voix',
          title: 'Mettre en voix et en scène une scène',
          minutes: 30,
          objectives: [
            "Lire une scène de théâtre à plusieurs voix en adaptant le ton, le volume et le rythme.",
            "Utiliser le vocabulaire de la scène : mise en scène, avant-scène, coulisses, côté cour, côté jardin.",
            "Préparer et jouer une courte scène en tenant compte des didascalies et du public.",
            "Proposer des choix de mise en scène et les justifier à partir du texte.",
          ],
          course: [
            {
              heading: "Du texte à la scène : la mise en scène",
              paragraphs: [
                "Une pièce n'existe vraiment que lorsqu'elle est jouée. Passer du texte à la scène, c'est faire des choix : quel décor ? quels costumes ? comment les personnages se déplacent-ils ? sur quel ton parlent-ils ? L'ensemble de ces choix forme la mise en scène. Ils sont faits par le metteur en scène, qui dirige les comédiens pendant les répétitions.",
                "Un même texte peut donner des mises en scène très différentes. Les Fourberies de Scapin peuvent être jouées en costumes du XVIIe siècle, devant un port de Naples peint sur un décor, ou dans un décor moderne, avec des personnages en jean. Les mots ne changent pas, mais la manière de les montrer change.",
                "Le metteur en scène s'appuie sur les didascalies, mais aussi sur les répliques, qui contiennent souvent des indications de jeu cachées. Quand un personnage dit « Pourquoi me frappez-vous ? », on comprend qu'il vient de recevoir un coup, même si aucune didascalie ne le précise.",
              ],
              box: { label: "Définition", text: "La mise en scène est l'ensemble des choix qui font passer du texte à la représentation : décor, costumes, accessoires, lumières, déplacements, gestes et ton des comédiens. Elle est dirigée par le metteur en scène." },
            },
            {
              heading: "Se repérer sur la scène",
              paragraphs: [
                "La scène, appelée aussi le plateau, a son propre vocabulaire. L'avant-scène est la partie la plus proche du public ; le fond de scène est la partie la plus éloignée. Les coulisses sont les espaces cachés sur les côtés, d'où les comédiens entrent et où ils sortent. Les accessoires sont les objets utilisés par les comédiens : un bâton, un sac, une lettre, une bourse.",
                "Pour éviter les confusions entre la droite et la gauche, les gens de théâtre disent « côté cour » et « côté jardin ». Vu depuis la salle, le côté jardin est à gauche et le côté cour à droite. Un moyen de s'en souvenir : les initiales J et C de Jésus-Christ, J à gauche et C à droite, toujours du point de vue du spectateur. Pour un comédien tourné vers le public, c'est donc l'inverse : le côté jardin est à sa droite.",
              ],
              box: { label: "Repère", text: "Vu de la salle : côté jardin à gauche, côté cour à droite. Avant-scène : près du public. Fond de scène : loin du public. Coulisses : espaces cachés d'où l'on entre et où l'on sort. Accessoires : objets utilisés en jouant." },
            },
            {
              heading: "Mettre en voix : faire entendre la scène",
              paragraphs: [
                "Au théâtre, la voix doit porter jusqu'au dernier rang. Parlez fort, articulez et restez tourné vers le public autant que possible, même quand vous parlez à un autre personnage : un comédien qui tourne le dos à la salle n'est plus entendu. Le ton dépend de la situation et des didascalies : colère, peur, ruse, naïveté. Un menteur comme Scapin peut prendre un air faussement désolé, tandis que sa victime s'affole.",
                "Le rythme est essentiel dans une comédie. Les répliques doivent s'enchaîner sans temps mort : préparez-vous à parler dès que votre partenaire termine, comme une balle de ping-pong qui passe d'un joueur à l'autre. À l'inverse, un silence bien placé peut faire rire ou créer du suspense. L'aparté se dit tourné vers le public, sur le ton de la confidence, pendant que les autres personnages font comme s'ils n'entendaient rien.",
              ],
              box: { label: "À retenir", text: "Pour bien dire une scène : parler fort, articuler, rester tourné vers le public, choisir le ton selon les didascalies et la situation, enchaîner les répliques sans temps mort, dire l'aparté face au public." },
            },
            {
              heading: "Jouer avec le corps et préparer la représentation",
              paragraphs: [
                "Au théâtre, le corps parle autant que la voix. Les gestes, les mimiques du visage, la posture et les déplacements montrent le caractère des personnages : un vieillard avare peut marcher courbé en serrant sa bourse, un valet rusé peut bouger vite et jeter des regards autour de lui. Dans les scènes comiques, les gestes sont souvent exagérés, mais ils doivent rester précis et maîtrisés, en particulier les faux coups de bâton, qui ne doivent jamais faire mal.",
                "Pour préparer une scène, lisez-la plusieurs fois ensemble, puis distribuez les rôles. Annotez votre texte : ton, gestes, déplacements, entrées et sorties. Apprenez votre texte, mais aussi la fin de la réplique qui précède la vôtre : c'est votre signal pour parler. Répétez ensuite en jouant vraiment, avec les déplacements. Une répétition où l'on joue toute la scène du début à la fin, sans s'arrêter, s'appelle un filage. Pendant la représentation, si vous oubliez un mot, continuez sans sortir de votre personnage.",
              ],
            },
          ],
          keyPoints: [
            "La mise en scène rassemble les choix qui font passer du texte au spectacle ; elle est dirigée par le metteur en scène.",
            "Les répliques contiennent aussi des indications de jeu cachées, en plus des didascalies.",
            "Vu de la salle : côté jardin à gauche, côté cour à droite ; avant-scène près du public, coulisses sur les côtés.",
            "Voix : parler fort, articuler, rester tourné vers le public, enchaîner les répliques ; l'aparté se dit face au public.",
            "Corps : gestes, mimiques et déplacements montrent le caractère ; les coups donnés sur scène sont toujours simulés.",
            "Préparer : lire, distribuer les rôles, annoter, apprendre, répéter, faire un filage, jouer.",
          ],
          example: {
            statement: "Voici une scène écrite pour l'exercice : « LE MAÎTRE (furieux) : Qui a mangé mes confitures ? / LE VALET (à part) : Aïe, le pot est encore dans ma poche. (Au maître, la bouche pleine.) Moi ? Je n'ai rien vu, monsieur ! / LE MAÎTRE : Tu as du sucre plein la moustache ! / LE VALET (s'essuyant vite) : C'est... de la neige, monsieur. Il neige beaucoup dans la cuisine. » Proposez une mise en scène : place des personnages, accessoires, ton et gestes pour chaque réplique.",
            solution: [
              "Placer les personnages : le maître entre côté jardin et s'avance au centre ; le valet est déjà sur scène, près de l'avant-scène côté cour, pour pouvoir dire son aparté tout près du public.",
              "Choisir les accessoires et costumes : un pot de confiture qui dépasse de la poche du valet, du sucre collé à une fausse moustache ; un costume plus riche pour le maître que pour le valet.",
              "Réplique 1 : le maître parle fort, sur un ton furieux, en frappant du pied ou en montrant le placard vide.",
              "Réplique 2 : le valet se tourne vers le public pour l'aparté, à voix plus basse et sur le ton de la confidence, en tapotant sa poche ; puis il se retourne vers le maître et répond d'un air innocent, les joues gonflées, en articulant mal à cause de la bouche pleine.",
              "Réplique 3 : le maître s'approche du valet et pointe sa moustache du doigt ; la réplique se dit vite, pour enchaîner sans temps mort.",
              "Réplique 4 : le valet s'essuie à toute vitesse, marque un petit silence après « C'est... » (il cherche une idée), puis répond avec aplomb. Ce silence prépare le rire du public.",
              "Bilan : la mise en scène s'appuie sur les didascalies (« furieux », « à part », « la bouche pleine », « s'essuyant vite ») et sur une indication cachée dans la réplique 3 (le sucre sur la moustache) pour faire rire par les gestes et par l'absurdité du mensonge.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Vu de la salle, de quel côté se trouve le côté cour ? et le côté jardin ? 2) Un comédien se tient sur scène, tourné vers le public : le côté jardin est-il à sa droite ou à sa gauche ? 3) Donnez le mot qui correspond à chaque définition : a) la partie de la scène la plus proche du public ; b) les espaces cachés d'où les comédiens entrent ; c) les objets utilisés en jouant ; d) une répétition de toute la scène sans s'arrêter ; e) la personne qui dirige les comédiens et fait les choix de décor et de jeu.",
              hint: "Retenez J et C de gauche à droite pour le spectateur. Le comédien regarde dans le sens inverse du spectateur : sa droite est la gauche de la salle.",
              solution: [
                "1) Vu de la salle, le côté cour est à droite et le côté jardin à gauche.",
                "2) Le comédien regarde le public, donc dans le sens opposé au spectateur : sa droite correspond à la gauche de la salle. Le côté jardin est donc à sa droite.",
                "3a) L'avant-scène. 3b) Les coulisses. 3c) Les accessoires. 3d) Un filage. 3e) Le metteur en scène.",
              ],
            },
            {
              level: 2,
              statement: "Voici une scène écrite pour l'exercice, sans aucune didascalie : « GASPARD : Arrête de me marcher sur les pieds ! / ROSE : Pardon ! Mais pourquoi chuchotes-tu ? / GASPARD : Parce que le gardien dort, juste là, sur sa chaise. / ROSE : Il ronfle comme un ours ! / GASPARD : Chut ! Il ouvre un œil ! » 1) Relevez dans les répliques trois indications de jeu cachées (geste, ton ou décor). 2) Réécrivez la scène en ajoutant au moins quatre didascalies qui précisent le ton, les gestes et les déplacements.",
              hint: "Cherchez dans chaque réplique ce que les mots obligent à montrer sur scène : une action qui vient d'avoir lieu, une façon de parler, un objet ou un personnage présent.",
              solution: [
                "1) Indications cachées : « Arrête de me marcher sur les pieds » montre un geste (Rose vient de marcher sur le pied de Gaspard) ; « pourquoi chuchotes-tu » indique le ton (Gaspard parle tout bas) ; « le gardien dort, juste là, sur sa chaise » indique le décor et un personnage présent (une chaise, un gardien endormi). « Il ronfle » indique aussi un bruit à faire entendre.",
                "2) Réécriture possible : « Un couloir sombre. Au fond, un GARDIEN dort sur une chaise. / GASPARD (avançant sur la pointe des pieds, à voix basse) : Arrête de me marcher sur les pieds ! / ROSE (sautant en arrière) : Pardon ! (Plus bas.) Mais pourquoi chuchotes-tu ? / GASPARD (montrant le gardien du doigt) : Parce que le gardien dort, juste là, sur sa chaise. / ROSE (étouffant un rire) : Il ronfle comme un ours ! / GASPARD (posant la main sur la bouche de Rose) : Chut ! Il ouvre un œil ! »",
                "Vérification : la scène contient des didascalies de décor (« Un couloir sombre... »), de ton (« à voix basse », « Plus bas »), de gestes (« sautant en arrière », « montrant le gardien du doigt », « posant la main sur la bouche de Rose ») et de déplacement (« avançant sur la pointe des pieds »).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Votre groupe doit jouer la scène suivante, écrite pour l'exercice : « Une rue. La nuit. / FRONTIN (entrant côté jardin, à part) : Mon maître m'a confié sa bourse. Si je disais qu'on me l'a volée ? / (Entre LE MAÎTRE, côté cour.) / LE MAÎTRE : Frontin ! Ma bourse ! / FRONTIN (se jetant à genoux) : Ah, monsieur, des voleurs, dix voleurs, vingt voleurs ! Ils m'ont tout pris ! / LE MAÎTRE : Vingt voleurs ? Et qu'est-ce qui sonne dans ta poche ? » Rédigez un carnet de mise en scène : 1) De quel côté le public voit-il entrer Frontin, puis le maître ? 2) Où Frontin doit-il se placer pour dire son aparté, et pourquoi ? 3) Quels accessoires et quels costumes choisissez-vous ? 4) Comment dire la réplique des voleurs pour faire rire ? 5) Quelle indication de jeu est cachée dans la dernière réplique, et comment la montrer ? 6) Proposez trois étapes de préparation pour votre groupe.",
              hint: "Rappelez-vous la place de J et C vu de la salle. Pour la question 5, demandez-vous ce que le maître entend, et ce que cela révèle sur le mensonge de Frontin.",
              solution: [
                "1) Vu de la salle, le côté jardin est à gauche et le côté cour à droite : le public voit Frontin entrer par la gauche, puis le maître par la droite. Les deux personnages arrivent ainsi l'un en face de l'autre.",
                "2) Frontin dit son aparté à l'avant-scène, tourné vers le public, sur le ton de la confidence. Le public devient son complice : il sait que le vol est inventé.",
                "3) Accessoires : une bourse qui tinte (remplie de pièces ou de grelots), une lanterne pour la nuit. Costumes : vêtements simples pour le valet, manteau et chapeau élégants pour le maître, ce qui montre la différence de rang entre eux.",
                "4) La réplique des voleurs se dit de plus en plus fort et de plus en plus vite, avec une gradation (dix, puis vingt voleurs) et des gestes exagérés : Frontin se jette à genoux, lève les bras au ciel. L'exagération montre au public qu'il ment.",
                "5) « Qu'est-ce qui sonne dans ta poche ? » indique un bruit : la bourse tinte dans la poche de Frontin. On le montre en faisant bouger Frontin à genoux pour que les pièces tintent clairement, puis en marquant un silence pendant lequel Frontin se fige et regarde le public, pris en flagrant délit.",
                "6) Préparation : lire la scène ensemble et distribuer les rôles ; annoter le texte (ton, gestes, déplacements) puis l'apprendre avec les répliques signaux ; répéter avec les accessoires et faire un filage complet avant de jouer devant la classe.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour monter une scène de théâtre avec votre groupe.",
            items: [
              "Lire la scène ensemble et la comprendre",
              "Distribuer les rôles",
              "Annoter le texte : ton, gestes, déplacements",
              "Apprendre son texte et les répliques qui servent de signal",
              "Répéter en jouant, avec les déplacements et les accessoires",
              "Faire un filage de toute la scène sans s'arrêter",
              "Jouer la scène devant le public",
            ],
          },
          quiz: [
            { q: "Vu de la salle, le côté cour se trouve...", options: ["à gauche de la scène", "à droite de la scène", "au fond de la scène", "dans les coulisses"], answer: 1, why: "Pour le spectateur, le côté jardin est à gauche et le côté cour à droite (J et C)." },
            { q: "Comment appelle-t-on la partie de la scène la plus proche du public ?", options: ["le fond de scène", "les coulisses", "le plateau caché", "l'avant-scène"], answer: 3, why: "L'avant-scène est la partie de la scène située juste devant le public." },
            { q: "Une répétition où l'on joue toute la scène sans s'arrêter s'appelle...", options: ["un filage", "un aparté", "une didascalie"], answer: 0, why: "Le filage permet de vérifier l'enchaînement complet de la scène avant la représentation." },
            { q: "Pendant un aparté, le comédien...", options: ["tourne le dos au public et chuchote", "quitte la scène par les coulisses", "parle au public, sur le ton de la confidence", "crie pour que tous les personnages l'entendent"], answer: 2, why: "L'aparté s'adresse au public, tandis que les autres personnages font comme s'ils n'entendaient rien." },
            { q: "Qui dirige les comédiens et fait les choix de décor, de costumes et de jeu ?", options: ["le spectateur du premier rang", "le metteur en scène", "le personnage principal", "le régisseur des lumières"], answer: 1, why: "Le metteur en scène fait les choix qui transforment le texte en spectacle et dirige les répétitions." },
          ],
          trap: "Jouer en tournant le dos au public, ou parler trop bas et trop vite comme dans une conversation ordinaire : au théâtre, la voix et le corps doivent être dirigés vers la salle pour que chaque spectateur entende et voie.",
          method: "Apprenez votre texte avec un partenaire : il vous donne la fin de la réplique qui précède la vôtre, et vous enchaînez. Répétez ensuite debout, avec les gestes et les déplacements : le corps aide la mémoire, et l'on retient mieux un texte en le jouant qu'en le lisant assis.",
        },
      ],
    },
  ],
}
