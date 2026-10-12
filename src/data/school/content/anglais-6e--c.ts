import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-6e',
  chapters: [
    {
      id: 'contes-legendes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'creatures-legendes',
          title: 'Dragons, sorciers et leprechauns : les créatures des légendes',
          minutes: 25,
          objectives: [
            "Nommer en anglais les créatures les plus courantes des contes et des légendes.",
            "Employer correctement a ou an devant le nom d'une créature.",
            "Associer quelques créatures célèbres à leur pays dans le monde anglophone.",
            "Présenter une créature en deux ou trois phrases simples.",
          ],
          course: [
            {
              heading: "Le lexique des créatures fantastiques",
              paragraphs: [
                "Les contes et les légendes du monde anglophone sont peuplés de créatures fantastiques. Voici les plus courantes : a dragon (un dragon), a wizard (un sorcier, un magicien), a witch (une sorcière), a giant (un géant), a fairy (une fée), a ghost (un fantôme), a unicorn (une licorne), a mermaid (une sirène), a troll (un troll), an ogre (un ogre) et an elf (un elfe).",
                "Certains mots ressemblent au français (dragon, troll, monster), d'autres non : il faut les apprendre. Trouvez un indice pour chacun. Witch se prononce comme which (« lequel »). Mermaid est formé de mere, un vieux mot anglais qui désignait la mer, et de maid, « la jeune fille » : la sirène est la jeune fille de la mer.",
                "Rappelez-vous les pluriels que vous connaissez déjà : a fairy, two fairies (y devient ies) ; an elf, two elves (f devient ves) ; a witch, two witches (on ajoute es après ch) ; a giant, two giants.",
              ],
              box: { label: "Règle", text: "On emploie a devant un son de consonne : a dragon, a witch, a unicorn (u se prononce « you »). On emploie an devant un son de voyelle : an elf, an ogre, an old wizard." },
            },
            {
              heading: "Des créatures d'Irlande et de Grande-Bretagne",
              paragraphs: [
                "Le leprechaun vient du folklore irlandais. C'est un petit homme de la famille des fées, cordonnier de métier : il fabrique et répare des chaussures. Selon la légende, il cache un chaudron rempli d'or (a pot of gold) au pied de l'arc-en-ciel (at the end of the rainbow). Aujourd'hui, on le représente souvent avec un habit et un chapeau verts : il est l'un des symboles de la Saint-Patrick (St Patrick's Day), le 17 mars.",
                "Le pays de Galles (Wales) a un dragon rouge sur son drapeau : the Red Dragon, en gallois Y Ddraig Goch. En Écosse (Scotland), on raconte qu'un monstre vit dans le Loch Ness, un grand lac (loch veut dire « lac ») : on l'appelle Nessie, the Loch Ness Monster. La licorne (the unicorn) est l'animal national de l'Écosse.",
                "En Grande-Bretagne, les légendes du roi Arthur (King Arthur) mettent en scène le plus célèbre des sorciers : Merlin. Dans ces récits, Merlin conseille le jeune Arthur, qui devient roi en retirant une épée plantée dans une pierre (the sword in the stone).",
              ],
              box: { label: "Repère", text: "Ireland : the leprechaun et son pot of gold. Wales : the Red Dragon. Scotland : Nessie et the unicorn. Great Britain : Merlin the wizard, dans les légendes du roi Arthur." },
            },
            {
              heading: "Des créatures d'Amérique du Nord",
              paragraphs: [
                "En Amérique du Nord, on parle de Bigfoot (« grand pied »), aussi appelé Sasquatch : une grande créature couverte de poils qui vivrait dans les forêts. Personne n'a jamais prouvé qu'il existe, mais il apparaît dans de nombreux films et dessins animés.",
                "Les États-Unis ont aussi leurs histoires de fantômes. Dans un conte de l'écrivain américain Washington Irving, The Legend of Sleepy Hollow (1820), un cavalier sans tête (the Headless Horseman) galope la nuit dans une vallée de l'État de New York.",
              ],
            },
            {
              heading: "Présenter une créature en quelques phrases",
              paragraphs: [
                "Pour présenter une créature, vous connaissez déjà les outils : this is (voici), it is ou it's (c'est, il est), it is from (il vient de), it lives in (il vit dans), it can (il peut, il sait). Exemple : « This is Nessie. It's a monster. It's from Scotland. It lives in a lake, Loch Ness. »",
                "Pour un monstre ou une créature qui ressemble à un animal (a dragon, Nessie, a unicorn), on emploie it. Pour un personnage qui ressemble à une personne (a wizard, a witch, a leprechaun), on emploie he ou she : « This is Merlin. He is a wizard. He is old and wise. » Au présent simple, n'oubliez pas le -s de la 3e personne : it lives, he makes, she flies.",
              ],
              box: { label: "Modèle", text: "This is a leprechaun. He's from Ireland. He's small and he wears a green hat. He makes shoes and he hides a pot of gold." },
            },
          ],
          keyPoints: [
            "Lexique : a dragon, a wizard, a witch, a giant, a fairy, a ghost, a unicorn, a mermaid, an ogre, an elf.",
            "a devant un son de consonne (a unicorn), an devant un son de voyelle (an elf, an ogre).",
            "Pluriels à retenir : fairy → fairies, elf → elves, witch → witches.",
            "Ireland : the leprechaun et son pot of gold. Wales : the Red Dragon. Scotland : Nessie et la licorne.",
            "Merlin est le sorcier des légendes du roi Arthur ; Bigfoot vivrait dans les forêts d'Amérique du Nord.",
            "It pour un monstre ou une créature animale, he ou she pour un personnage qui ressemble à une personne.",
          ],
          example: {
            statement: "Présentez le dragon gallois en anglais, en trois ou quatre phrases : ce que c'est, d'où il vient, sa couleur et une chose qu'il sait faire.",
            solution: [
              "Choisir le pronom : le dragon est une créature animale, on emploie it.",
              "Dire ce que c'est et d'où il vient : « This is the Red Dragon. It's from Wales. »",
              "Donner sa couleur et un détail que l'on connaît : « It's red and it's on the Welsh flag. » (Welsh = gallois)",
              "Ajouter une capacité avec can suivi du verbe sans to : « It can fly. »",
              "Vérifier : it's = it is, et can n'est jamais suivi d'un verbe en -s.",
              "Réponse : « This is the Red Dragon. It's from Wales. It's red and it's on the Welsh flag. It can fly. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec a ou an, puis traduisez le nom en français : a) ... elf ; b) ... witch ; c) ... unicorn ; d) ... ogre ; e) ... giant ; f) ... ghost.",
              hint: "Écoutez le premier son du mot, pas la première lettre : unicorn commence par le son « you », qui est un son de consonne.",
              solution: [
                "a) an elf : un elfe (son de voyelle).",
                "b) a witch : une sorcière.",
                "c) a unicorn : une licorne (u se prononce « you », son de consonne).",
                "d) an ogre : un ogre (son de voyelle).",
                "e) a giant : un géant.",
                "f) a ghost : un fantôme.",
              ],
            },
            {
              level: 2,
              statement: "Associez chaque créature à son pays ou à sa région, puis écrivez une phrase pour chacune sur le modèle « The ... is from ... ». Créatures : the leprechaun, Nessie, the Red Dragon, Bigfoot. Pays ou régions : Wales, Ireland, North America, Scotland.",
              hint: "Pensez aux drapeaux et aux paysages : un grand lac écossais, un drapeau avec un dragon, un arc-en-ciel irlandais, de grandes forêts.",
              solution: [
                "The leprechaun is from Ireland. Il cache son pot of gold au pied de l'arc-en-ciel.",
                "Nessie is from Scotland. It lives in Loch Ness. (Pas de the devant Nessie, qui est un nom propre.)",
                "The Red Dragon is from Wales. Il figure sur le drapeau gallois.",
                "Bigfoot is from North America. Il vivrait dans les forêts.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce texte (une créature inventée pour l'exercice), répondez en français aux questions 1 à 3, puis en anglais à la question 4. « This is Glimmer. Glimmer is a fairy. She is very small and she has got blue wings. She lives in a forest in Ireland, under an old tree. She can fly and she can talk to animals. She loves music, but she hates the rain. » 1) Qu'est-ce que Glimmer et où vit-elle exactement ? 2) Citez deux choses qu'elle sait faire. 3) Qu'aime-t-elle et que déteste-t-elle ? 4) Sur le même modèle, écrivez quatre phrases en anglais pour présenter Merlin.",
              hint: "Pour les questions 1 à 3, cherchez les verbes lives, can, loves et hates. Pour la question 4, Merlin ressemble à une personne : employez he.",
              solution: [
                "1) Glimmer est une fée (a fairy). Elle vit dans une forêt en Irlande, sous un vieil arbre (under an old tree).",
                "2) Elle sait voler (she can fly) et parler aux animaux (she can talk to animals).",
                "3) Elle adore la musique (she loves music) et elle déteste la pluie (she hates the rain).",
                "4) Choisir le pronom he, puis reprendre le modèle : ce qu'il est, d'où il vient, à quoi il ressemble, ce qu'il sait faire.",
                "Exemple de réponse : « This is Merlin. He is a wizard. He is from the legends of King Arthur, in Great Britain. He is old and wise. He can do magic. »",
                "Vérifier : he is et non « he are », can do sans -s, des adjectifs sans -s (old, wise).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque créature anglaise à sa traduction française.",
            pairs: [
              { left: "a wizard", right: "un sorcier" },
              { left: "a witch", right: "une sorcière" },
              { left: "a giant", right: "un géant" },
              { left: "a fairy", right: "une fée" },
              { left: "a mermaid", right: "une sirène" },
              { left: "a unicorn", right: "une licorne" },
            ],
          },
          quiz: [
            { q: "Which creature is from Ireland?", options: ["Nessie", "the leprechaun", "Bigfoot", "the Welsh dragon"], answer: 1, why: "Le leprechaun vient du folklore irlandais ; Nessie est écossais, Bigfoot nord-américain et le dragon rouge gallois." },
            { q: "Which is correct?", options: ["a elf", "an unicorn", "a unicorn"], answer: 2, why: "Unicorn commence par le son « you », un son de consonne : on dit a unicorn, mais an elf." },
            { q: "What is « a witch » in French?", options: ["une sorcière", "une fée", "une sirène", "un grand magicien"], answer: 0, why: "A witch est une sorcière ; une fée se dit a fairy, une sirène a mermaid et un sorcier a wizard." },
            { q: "The Red Dragon is on the flag of...", options: ["Scotland", "Ireland", "England", "Wales"], answer: 3, why: "Le dragon rouge, Y Ddraig Goch, figure sur le drapeau du pays de Galles." },
            { q: "What does a leprechaun hide at the end of the rainbow?", options: ["a pot of gold", "a magic sword", "a white unicorn"], answer: 0, why: "Selon la légende irlandaise, le leprechaun cache un chaudron rempli d'or au pied de l'arc-en-ciel." },
          ],
          trap: "Choisir a ou an d'après la première lettre écrite au lieu du premier son : on écrit a unicorn (son « you ») mais an elf et an ogre.",
          method: "Fabriquez une carte par créature : le mot anglais avec a ou an au recto, un dessin et le pays au verso. En révisant, dites chaque fois une phrase complète, par exemple « The leprechaun is from Ireland. »",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'decrire-creature',
          title: 'Décrire une créature imaginaire',
          minutes: 30,
          objectives: [
            "Nommer les parties du corps d'une créature (head, eyes, wings, tail, claws...).",
            "Décrire une créature avec has got et des adjectifs de taille, de couleur et de caractère.",
            "Placer l'adjectif devant le nom, sans jamais le mettre au pluriel.",
            "Dire ce qu'une créature sait faire avec can, où elle vit et ce qu'elle mange.",
          ],
          course: [
            {
              heading: "Le corps d'une créature",
              paragraphs: [
                "Pour décrire une créature, il faut d'abord nommer les parties de son corps : a head (une tête), an eye (un œil ; pluriel eyes), an ear (une oreille), a mouth (une bouche), a nose (un nez), a neck (un cou), legs (des pattes ou des jambes), arms (des bras), a tail (une queue).",
                "Les créatures fantastiques ont aussi des parties plus étonnantes : wings (des ailes), claws (des griffes), horns (des cornes ; a horn, une corne, comme celle de la licorne), scales (des écailles), fur (le pelage, la fourrure) et feathers (des plumes).",
                "Attention à deux pluriels irréguliers : one tooth, two teeth (une dent, des dents) ; one foot, two feet (un pied, des pieds). Un dragon a donc « sharp teeth » (des dents pointues) et « big feet » (de grands pieds).",
              ],
              box: { label: "À retenir", text: "a head, eyes, ears, a mouth, a nose, a neck, legs, a tail, wings, claws, horns, scales, fur, feathers. Pluriels irréguliers : tooth → teeth, foot → feet." },
            },
            {
              heading: "Dire ce qu'elle a : has got",
              paragraphs: [
                "Pour dire ce qu'une créature possède, on utilise have got, que vous avez vu pour décrire une personne. Avec he, she ou it, on dit has got : « It has got two heads. » À l'oral, on contracte : it's got, he's got, she's got. Attention, ici 's = has, et non is.",
                "À la forme négative : « It hasn't got any wings » (il n'a pas d'ailes). À la forme interrogative, has passe devant le sujet : « Has it got a tail? Yes, it has. / No, it hasn't. » Vous rencontrerez aussi le verbe have seul, surtout en anglais américain : « It has two heads. » Les deux sont corrects ; avec have seul, la question se fait avec does : « Does it have a tail? »",
              ],
              box: { label: "Formule", text: "Sujet + has got + nom : It has got (It's got) three heads. Négation : It hasn't got any wings. Question : Has it got a tail? Yes, it has. / No, it hasn't." },
            },
            {
              heading: "Les adjectifs : taille, couleur, caractère",
              paragraphs: [
                "Voici des adjectifs utiles. La taille : big (gros, grand), huge (énorme), small et little (petit), tiny (minuscule), long (long), short (court). Les couleurs : red, green, blue, black, white, yellow, purple (violet), grey (gris). Le caractère : friendly (gentil, amical), scary (effrayant), dangerous (dangereux), funny (drôle), shy (timide).",
                "Deux règles simples. 1) En anglais, l'adjectif se place devant le nom : a green dragon (un dragon vert), long claws (de longues griffes). 2) L'adjectif est invariable : il ne prend jamais de -s. On dit three big heads, et non « three bigs heads ».",
                "Quand vous utilisez deux adjectifs, la taille se place avant la couleur : a big green dragon, small red eyes. Après be, l'adjectif est seul : « The dragon is big. Its eyes are red. » (its = son, sa, ses, pour une chose ou un animal)",
              ],
              box: { label: "Règle", text: "Adjectif + nom, et jamais de -s à l'adjectif : a big green dragon, three long tails. Avec deux adjectifs, la taille avant la couleur : small black eyes." },
            },
            {
              heading: "Compléter le portrait : can, lives, eats",
              paragraphs: [
                "Dites ce que la créature sait faire avec can + verbe (sans to et sans -s) : it can fly (voler), it can swim (nager), it can breathe fire (cracher du feu), it can't speak (il ne sait pas parler). Dites où elle vit et ce qu'elle mange au présent simple, avec le -s de la 3e personne : it lives in a cave (une grotte), in a castle, in the mountains, under the sea ; it eats fish, fruit, flowers.",
                "Un bon portrait suit un ordre logique : le nom et l'espèce, puis l'apparence (de la tête à la queue), puis les capacités, enfin l'habitat et la nourriture. Exemple : « This is Zork. It's a huge dragon. It's got three heads, big yellow eyes and long claws. It can fly and it can breathe fire. It lives in a cave in the mountains and it eats fish. »",
              ],
            },
          ],
          keyPoints: [
            "Le corps : head, eyes, ears, mouth, nose, neck, legs, tail ; et aussi wings, claws, horns, scales, fur, feathers.",
            "It has got (it's got) = il a. Négation : it hasn't got. Question : Has it got...? Yes, it has. / No, it hasn't.",
            "L'adjectif se place devant le nom et ne prend jamais de -s : three long tails.",
            "Avec deux adjectifs, la taille avant la couleur : a big green dragon.",
            "Can + verbe sans to ni -s : it can fly, it can't swim.",
            "Présent simple à la 3e personne avec -s : it lives in a cave, it eats fish.",
          ],
          example: {
            statement: "Décrivez cette créature en anglais à partir des notes en français : « une licorne ; petite et blanche ; une longue corne dorée, des yeux bleus ; peut courir très vite ; vit dans une forêt ; mange des fleurs ».",
            solution: [
              "Présenter la créature : « This is a unicorn. » (a et non an, car unicorn commence par le son « you »)",
              "Donner la taille et la couleur avec be, l'adjectif seul après le verbe : « It's small and white. »",
              "Décrire l'apparence avec has got, les adjectifs devant le nom (golden = doré) : « It has got a long golden horn and blue eyes. »",
              "Dire ce qu'elle sait faire avec can, sans -s : « It can run very fast. »",
              "Dire où elle vit et ce qu'elle mange au présent simple, avec -s : « It lives in a forest and it eats flowers. »",
              "Réponse : « This is a unicorn. It's small and white. It has got a long golden horn and blue eyes. It can run very fast. It lives in a forest and it eats flowers. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Corrigez l'erreur dans chaque phrase : a) The dragon has got eyes reds. b) It have got two wings. c) The giant has got three bigs heads. d) It can flies. e) The troll live in a cave.",
              hint: "Vérifiez trois choses : la place de l'adjectif, l'absence de -s sur l'adjectif, la forme du verbe avec it (has, -s du présent simple, can suivi du verbe sans -s).",
              solution: [
                "a) The dragon has got red eyes. (l'adjectif se place devant le nom et ne prend pas de -s)",
                "b) It has got two wings. (avec it, have devient has)",
                "c) The giant has got three big heads. (l'adjectif est invariable)",
                "d) It can fly. (après can, le verbe reste sans -s)",
                "e) The troll lives in a cave. (présent simple : -s à la 3e personne du singulier)",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en anglais : a) Il a une longue queue verte. b) Elle a de petites ailes bleues. c) Il n'a pas de cornes. d) Est-ce qu'il a des griffes ? Oui. e) Elle sait nager mais elle ne sait pas voler.",
              hint: "Trouvez d'abord le sujet (it ou she), puis le verbe (has got, hasn't got, can, can't), puis placez les adjectifs devant le nom, la taille avant la couleur.",
              solution: [
                "a) It has got (It's got) a long green tail.",
                "b) She has got (She's got) small blue wings. Pas de -s à small ni à blue.",
                "c) It hasn't got any horns.",
                "d) Has it got claws? Yes, it has. La réponse courte reprend has, sans got.",
                "e) She can swim but she can't fly.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Inventez une créature et écrivez son portrait en anglais, en 6 phrases au moins (50 à 70 mots). Votre texte doit contenir : son nom et son espèce ; au moins trois parties du corps avec des adjectifs, dont une avec deux adjectifs (taille et couleur) ; une phrase négative avec hasn't got ou can't ; une capacité avec can ; son habitat et sa nourriture.",
              hint: "Suivez l'ordre du cours : nom, apparence de la tête à la queue, capacités, habitat et nourriture. Cochez ensuite chaque élément demandé dans la consigne.",
              solution: [
                "Préparer un croquis légendé : un monstre marin violet, deux têtes, de grands yeux jaunes, une longue queue verte, huit bras, pas de jambes.",
                "Rédiger dans l'ordre du cours. Exemple de production : « This is Blop. It's a sea monster. It's huge and purple. It has got two heads, big yellow eyes and a long green tail. It hasn't got any legs, but it has got eight arms. It can swim very fast, but it can't fly. It lives under the sea, near Scotland, and it eats fish. It looks scary, but it's friendly with children. »",
                "Vérifier la liste : nom et espèce (Blop, a sea monster), parties du corps avec adjectifs (big yellow eyes, a long green tail), négation (hasn't got, can't), capacité (can swim), habitat et nourriture (lives, eats).",
                "Vérifier la grammaire : adjectifs devant le nom et sans -s, taille avant couleur, -s de lives et eats, can sans -s.",
                "Résultat : un portrait de 8 phrases et d'environ 60 mots, qui respecte toutes les consignes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos règles pour décrire une créature.",
            statements: [
              { text: "« A green big dragon » is correct.", true: false, why: "La taille se place avant la couleur : a big green dragon." },
              { text: "« It has got three heads » can be shortened to « It's got three heads ».", true: true, why: "Dans it's got, 's est la forme courte de has." },
              { text: "« The monster has got two longs arms » is correct.", true: false, why: "L'adjectif est invariable : two long arms." },
              { text: "The plural of « tooth » is « teeth ».", true: true, why: "C'est un pluriel irrégulier, comme foot → feet." },
              { text: "« It can flies » is correct.", true: false, why: "Après can, le verbe reste à la base verbale, sans -s : it can fly." },
              { text: "« Has it got a tail? No, it hasn't. » is correct.", true: true, why: "La réponse courte reprend l'auxiliaire has, sans got." },
              { text: "« Wings » means « des griffes ».", true: false, why: "Wings sont des ailes ; des griffes se dit claws." },
            ],
          },
          quiz: [
            { q: "Choose the correct sentence.", options: ["It has got a red big nose.", "It has got a big red nose.", "It has got a big reds nose."], answer: 1, why: "La taille se place avant la couleur, et l'adjectif ne prend jamais de -s." },
            { q: "« Des griffes » in English is...", options: ["wings", "horns", "scales", "claws"], answer: 3, why: "Claws sont des griffes ; wings des ailes, horns des cornes, scales des écailles." },
            { q: "Has the dragon got wings? Yes, ...", options: ["it has", "it is", "it does", "it got"], answer: 0, why: "La réponse courte reprend l'auxiliaire de la question : has." },
            { q: "Complete: « The giant ... in a castle. »", options: ["live", "lives", "living", "is live"], answer: 1, why: "Au présent simple, le verbe prend un -s avec he, she, it ou un nom singulier : the giant lives." },
            { q: "In « It's got four legs », 's means...", options: ["does", "is", "has"], answer: 2, why: "It's got = it has got : le 's suivi de got remplace has." },
          ],
          trap: "Mettre l'adjectif après le nom ou lui ajouter un -s, comme en français : on écrit « It has got two big red eyes », jamais « two eyes reds ».",
          method: "Avant d'écrire, faites un croquis de votre créature et légendez-le en anglais (head, wings, tail...). Écrivez ensuite une phrase par flèche, en suivant le dessin de la tête à la queue.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'raconter-legende',
          title: 'Comprendre et raconter une courte légende',
          minutes: 35,
          objectives: [
            "Comprendre une courte légende en repérant les personnages, le lieu et les étapes du récit.",
            "Repérer les mots qui organisent un récit : once upon a time, one day, then, suddenly, in the end.",
            "Raconter une courte légende au présent simple, en quelques phrases.",
            "Poser et répondre à des questions sur un récit avec who, where, what et why.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une légende ?",
              paragraphs: [
                "Une légende (a legend) est un récit très ancien, transmis de génération en génération, souvent à l'oral. Elle se passe dans un lieu réel (une montagne, un lac, une côte) mais raconte des événements merveilleux, avec des géants, des fées ou des sorciers. Elle sert souvent à expliquer l'origine d'un paysage ou d'un nom. Un conte (a fairy tale), lui, se passe dans un monde imaginaire.",
                "Un récit a toujours des personnages (characters) : le héros ou l'héroïne (the hero, the heroine), parfois un méchant (the villain), et des personnages qui aident. Il a un lieu (the setting) et une suite d'étapes : le début (the beginning), un problème, des événements, puis la fin (the end).",
              ],
              box: { label: "Vocabulaire", text: "a legend (une légende), a fairy tale (un conte de fées), a story (une histoire), a character (un personnage), the hero (le héros), the villain (le méchant), the beginning (le début), the end (la fin)." },
            },
            {
              heading: "Les mots qui organisent le récit",
              paragraphs: [
                "Pour suivre une histoire, repérez les mots de liaison. Au début : Once upon a time (Il était une fois), Long ago (Il y a très longtemps). Pour faire avancer le récit : One day (Un jour), Then (Ensuite, Puis), After that (Après cela). Pour un rebondissement : Suddenly (Soudain). Pour finir : In the end ou Finally (À la fin, Finalement).",
                "Les contes se terminent souvent par la formule « And they lived happily ever after » (Et ils vécurent heureux pour toujours). Ces mots sont de précieux repères : quand vous entendez suddenly, quelque chose d'important arrive ; quand vous entendez in the end, l'histoire se termine.",
              ],
              box: { label: "À retenir", text: "Début : Once upon a time / Long ago. Milieu : One day, Then, After that, Suddenly. Fin : In the end / Finally." },
            },
            {
              heading: "Comprendre et raconter : temps et questions",
              paragraphs: [
                "Les contes et les légendes sont en général écrits au passé. Vous apprendrez à conjuguer ce temps plus tard ; pour l'instant, sachez reconnaître quelques formes très fréquentes : was et were (était, étaient), there was (il y avait), lived (vivait), had (avait), said (a dit). « Once upon a time, there was a giant » signifie « Il était une fois un géant ».",
                "Pour raconter vous-même une légende, vous pouvez utiliser le présent simple, comme un conteur qui fait vivre son histoire : « One day, the giant sees a rainbow. He runs to the river. » Cette façon de raconter est correcte en anglais ; gardez seulement le même temps du début à la fin, et n'oubliez pas le -s avec he, she ou it.",
                "Pour vérifier votre compréhension, posez-vous les questions essentielles : Who? (Qui ? les personnages), Where? (Où ? le lieu), What happens? (Que se passe-t-il ?), Why? (Pourquoi ?). On répond à Why? avec because (parce que).",
              ],
              box: { label: "Repère", text: "Formes du passé à reconnaître : was / were (était, étaient), there was (il y avait), lived (vivait), had (avait), said (a dit)." },
            },
            {
              heading: "Une légende d'Irlande du Nord : la Chaussée des Géants",
              paragraphs: [
                "Sur la côte nord de l'Irlande du Nord se trouve la Chaussée des Géants (the Giant's Causeway) : des milliers de colonnes de pierre, beaucoup à six côtés, qui ressemblent à un immense escalier qui descend dans la mer. Les scientifiques expliquent qu'elles se sont formées quand la lave d'anciens volcans a refroidi. Mais une légende raconte une autre histoire, dont il existe plusieurs versions.",
                "Voici la plus connue, racontée simplement au présent : « Long ago, a giant called Finn McCool lives in Ireland. Across the sea, in Scotland, lives another giant, Benandonner. Finn builds a road of stones across the sea to fight him. But one day, Finn sees Benandonner: he is huge! Finn runs home. His wife, Oonagh, has an idea: she dresses Finn as a baby. Benandonner arrives and sees the “baby”. He thinks: if the baby is so big, the father is enormous! He runs back to Scotland and breaks the road behind him. In the end, only the beginning of the road stays in Ireland: it is the Giant's Causeway. »",
              ],
            },
          ],
          keyPoints: [
            "Une légende se passe dans un lieu réel et explique souvent un paysage ou un nom ; un conte (a fairy tale) se passe dans un monde imaginaire.",
            "Les étapes du récit : Once upon a time / Long ago, One day, Then, Suddenly, In the end.",
            "Formes du passé à reconnaître : was, were, there was, lived, had, said.",
            "Pour raconter vous-même, le présent simple est correct : he runs home (avec -s à la 3e personne).",
            "Pour comprendre : Who? Where? What happens? Why? Because...",
            "La Chaussée des Géants (Giant's Causeway), en Irlande du Nord : la légende de Finn McCool.",
          ],
          example: {
            statement: "Lisez le début de ce récit inventé pour le cours et répondez. « Long ago, a little fairy called Bree lives near a lake in Wales. One day, a dragon arrives. Suddenly, it takes the fairy's golden flute. » 1) Who are the characters? 2) Where does the story happen? 3) What is the problem? 4) Quel mot annonce le rebondissement ?",
            solution: [
              "Repérer les personnages (Who?) : une fée, Bree, et un dragon. Réponse : « The characters are a fairy, Bree, and a dragon. »",
              "Repérer le lieu (Where?) : near a lake in Wales. Réponse : « The story happens near a lake in Wales. »",
              "Repérer le problème (What happens?) : le dragon prend la flûte d'or de la fée. Réponse : « The dragon takes Bree's golden flute. »",
              "Repérer le mot de liaison qui introduit l'événement inattendu : Suddenly (Soudain).",
              "Réponse : 1) a fairy (Bree) and a dragon ; 2) near a lake in Wales ; 3) the dragon takes Bree's golden flute ; 4) Suddenly.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez chaque mot de liaison en français, puis dites s'il s'emploie plutôt au début, au milieu ou à la fin d'un récit : a) then ; b) once upon a time ; c) in the end ; d) suddenly ; e) one day ; f) long ago.",
              hint: "Relisez l'encadré « À retenir » de la deuxième partie du cours : les mots y sont classés en début, milieu et fin.",
              solution: [
                "a) then : ensuite, puis (milieu).",
                "b) once upon a time : il était une fois (début).",
                "c) in the end : à la fin (fin).",
                "d) suddenly : soudain (milieu, pour un rebondissement).",
                "e) one day : un jour (milieu, souvent juste après le début).",
                "f) long ago : il y a très longtemps (début).",
              ],
            },
            {
              level: 2,
              statement: "Voici le résumé en français d'une légende inventée pour l'exercice. Racontez-la en anglais en 5 phrases au présent simple, en commençant chaque phrase par Long ago, One day, Suddenly, Then et In the end : « Il y a très longtemps, un sorcier vit dans un château en Écosse. Un jour, un géant arrive et il veut le château. Soudain, le sorcier transforme le géant en montagne. Ensuite, le sorcier plante des arbres sur la montagne. À la fin, la montagne s'appelle Giant Hill. »",
              hint: "Une phrase par mot de liaison. Au présent simple, ajoutez -s avec he, she, it ou un nom singulier : the wizard lives, he wants. « Transformer en » se dit to change into, « s'appeler » se dit to be called.",
              solution: [
                "Long ago, a wizard lives in a castle in Scotland.",
                "One day, a giant arrives and he wants the castle.",
                "Suddenly, the wizard changes the giant into a mountain.",
                "Then, the wizard plants trees on the mountain.",
                "In the end, the mountain is called Giant Hill.",
                "Vérifier : un seul temps du début à la fin (le présent) et le -s de lives, arrives, wants, changes, plants.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Relisez cette version de la légende de la Chaussée des Géants, puis répondez en anglais par des phrases courtes aux questions 1 à 5, et en français à la question 6. « Long ago, a giant called Finn McCool lives in Ireland. Across the sea, in Scotland, lives another giant, Benandonner. Finn builds a road of stones across the sea to fight him. But one day, Finn sees Benandonner: he is huge! Finn runs home. His wife, Oonagh, has an idea: she dresses Finn as a baby. Benandonner arrives and sees the “baby”. He thinks: if the baby is so big, the father is enormous! He runs back to Scotland and breaks the road behind him. » 1) Who is Finn McCool? 2) Where does Benandonner live? 3) Why does Finn build a road? 4) What does Oonagh do? 5) Why does Benandonner run back to Scotland? 6) Selon la légende, qu'est-ce que la Chaussée des Géants ?",
              hint: "Pour chaque question, cherchez dans le texte le mot qui y répond : un nom de pays pour Where?, le mot « to » (pour) pour le but, la pensée du géant (He thinks) pour Why? Répondez à Why? avec because.",
              solution: [
                "1) He is a giant. He lives in Ireland.",
                "2) He lives in Scotland.",
                "3) Because he wants to fight Benandonner. (dans le texte : « to fight him »)",
                "4) She dresses Finn as a baby.",
                "5) Because he thinks the baby's father is enormous, so he is scared.",
                "6) C'est ce qui reste de la route de pierres construite par Finn : Benandonner l'a détruite en repartant en Écosse, et seul son début est resté en Irlande.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les étapes de la légende de Finn McCool dans l'ordre.",
            items: [
              "Finn McCool, a giant, lives in Ireland.",
              "Finn builds a road of stones across the sea.",
              "Finn sees Benandonner: he is huge!",
              "Finn runs home and Oonagh dresses him as a baby.",
              "Benandonner sees the “baby” and he is scared.",
              "Benandonner runs back to Scotland and breaks the road.",
            ],
          },
          quiz: [
            { q: "« Once upon a time » means...", options: ["Un jour", "Il était une fois", "À la fin de l'histoire", "Soudain"], answer: 1, why: "Once upon a time est la formule d'ouverture des contes, comme « Il était une fois »." },
            { q: "Which word announces a surprise in a story?", options: ["Then", "In the end", "Suddenly", "Long ago"], answer: 2, why: "Suddenly (soudain) introduit un événement inattendu, un rebondissement." },
            { q: "« There was a giant » means...", options: ["Il y avait un géant", "Il y a un géant ici", "Il sera un géant"], answer: 0, why: "There was est le passé de there is : il y avait." },
            { q: "In the legend of the Giant's Causeway, who has the clever idea?", options: ["Finn", "Oonagh", "Benandonner", "the baby"], answer: 1, why: "C'est Oonagh, la femme de Finn, qui déguise son mari en bébé pour effrayer Benandonner." },
            { q: "Complete: « One day, the giant ... a rainbow. »", options: ["seeing", "to see", "see", "sees"], answer: 3, why: "Au présent simple, avec un sujet singulier comme the giant, le verbe prend un -s." },
          ],
          trap: "Raconter au présent en oubliant le -s de la 3e personne (« the giant run »), ou mélanger le présent et le passé dans la même histoire : choisissez un temps et gardez-le jusqu'à la fin.",
          method: "Avant de lire une légende, lisez le titre et soulignez les noms propres (personnages, lieux). Entourez ensuite les mots de liaison : ils découpent le récit en étapes, et vous saurez répondre à Who?, Where? et What happens?",
        },
      ],
    },
    {
      id: 'arts-sentiments',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'emotions',
          title: 'Exprimer ses émotions : « I feel happy because... »',
          minutes: 25,
          objectives: [
            "Nommer les émotions et les sentiments courants en anglais.",
            "Exprimer ce que l'on ressent avec « I feel... » ou « I'm... » et le justifier avec because.",
            "Demander à quelqu'un comment il se sent et réagir : « How do you feel? », « What's wrong? ».",
            "Parler des émotions d'une autre personne au présent simple (she feels, he is).",
          ],
          course: [
            {
              heading: "Les mots des émotions",
              paragraphs: [
                "Voici les émotions les plus courantes : happy (heureux, content), sad (triste), angry (en colère), scared ou afraid (effrayé, qui a peur), tired (fatigué), bored (qui s'ennuie), excited (très impatient, enthousiaste), nervous (nerveux, stressé), worried (inquiet), surprised (surpris), proud (fier) et calm (calme).",
                "Ces mots sont des adjectifs : comme tous les adjectifs anglais, ils sont invariables. On dit « She is happy » et « They are happy », sans -s et sans marque du féminin. Attention au faux ami excited : il ne veut pas dire « excité » au sens d'agité, mais « très impatient, enthousiaste » : « I'm excited about the school trip! »",
              ],
              box: { label: "Attention", text: "Bored = qui s'ennuie (I'm bored : je m'ennuie). Boring = ennuyeux (The film is boring : le film est ennuyeux). Dire « I'm boring » signifie « Je suis ennuyeux » !" },
            },
            {
              heading: "Dire ce que l'on ressent : be ou feel",
              paragraphs: [
                "Deux structures simples permettent de dire ce que l'on ressent. Avec be : « I'm happy », « I'm not tired ». Avec feel (se sentir) suivi d'un adjectif : « I feel sad », « I don't feel well » (je ne me sens pas bien). Contrairement au français, on ne dit pas « I feel me » : « se sentir » se dit simplement feel.",
                "Pour nuancer, ajoutez very (très), a bit ou a little (un peu), really (vraiment) : « I'm a bit nervous », « I feel really proud ». Pour parler de quelqu'un d'autre au présent simple, n'oubliez pas le -s : « She feels happy », « He feels tired ». Avec be : « She's angry », « They're scared ».",
              ],
              box: { label: "Formule", text: "I feel + adjectif = je me sens... (I feel happy). I'm + adjectif = je suis... (I'm tired). Avec he, she ou it : he feels, she feels." },
            },
            {
              heading: "Expliquer pourquoi avec because",
              paragraphs: [
                "Pour justifier une émotion, on ajoute because (parce que) suivi d'une phrase complète, avec un sujet et un verbe : « I feel happy because it's my birthday. » « She's sad because her cat is ill. » « I'm scared because there is a spider in my room. »",
                "Certains adjectifs d'émotion sont suivis de of quand on dit ce qui provoque l'émotion. Avoir peur de : to be scared of ou to be afraid of (« I'm scared of spiders »). Être fier de : to be proud of (« I'm proud of my sister »).",
              ],
              box: { label: "Modèle", text: "Sujet + feel(s) ou be + émotion + because + sujet + verbe : I feel excited because my best friend is here. My dad is proud because I'm good at English." },
            },
            {
              heading: "Demander à quelqu'un comment il se sent",
              paragraphs: [
                "Pour demander comment quelqu'un se sent : « How do you feel? » (Comment vous sentez-vous ?). Si quelqu'un a l'air triste ou en colère : « What's wrong? » ou « What's the matter? » (Qu'est-ce qui ne va pas ?). Pour demander la raison : « Why are you sad? » La réponse commence par because : « Because my best friend is ill. »",
                "Pour réagir avec gentillesse : « Oh, I'm sorry! » (Oh, je suis désolé !), « Don't worry! » (Ne vous inquiétez pas !), « That's great! » (C'est super !) quand la nouvelle est bonne. Un petit dialogue : « How do you feel today, Tom? » « I feel a bit nervous. » « Why? » « Because I have a maths test. » « Don't worry, you're good at maths! »",
              ],
            },
          ],
          keyPoints: [
            "Émotions : happy, sad, angry, scared / afraid, tired, bored, excited, nervous, worried, surprised, proud, calm.",
            "I feel + adjectif (jamais « I feel me ») ; avec he ou she : he feels, she feels.",
            "Because + sujet + verbe : I feel happy because it's my birthday.",
            "Bored = qui s'ennuie ; boring = ennuyeux. Excited = très impatient, enthousiaste.",
            "Questions : How do you feel? What's wrong? Why are you sad? Réponse : Because...",
            "Nuancer avec a bit, very, really. Avoir peur de : to be scared of ; être fier de : to be proud of.",
          ],
          example: {
            statement: "Traduisez en anglais : « Lucy se sent un peu nerveuse parce qu'elle a un contrôle de maths aujourd'hui. »",
            solution: [
              "Repérer le sujet : Lucy, c'est-à-dire she. Au présent simple, feel prend un -s : Lucy feels.",
              "Traduire « un peu nerveuse » : a bit nervous. L'adjectif est invariable, il n'a pas de féminin.",
              "Traduire « parce que » par because, suivi d'une phrase avec un sujet et un verbe : she has a maths test today (avec she, have devient has).",
              "Réponse : « Lucy feels a bit nervous because she has a maths test today. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Trouvez l'émotion qui correspond à chaque situation (happy, sad, scared, tired, bored, angry), puis écrivez une phrase complète avec « I feel ... because ... ». a) It's my birthday! b) There is a big spider on my bed. c) I go to bed very late. d) My brother takes my phone without asking. e) My dog is ill. f) There is nothing to do.",
              hint: "Imaginez-vous dans chaque situation : que ressentez-vous ? Recopiez ensuite la situation après because, sans changer le verbe.",
              solution: [
                "a) happy : I feel happy because it's my birthday.",
                "b) scared : I feel scared because there is a big spider on my bed.",
                "c) tired : I feel tired because I go to bed very late.",
                "d) angry : I feel angry because my brother takes my phone without asking.",
                "e) sad : I feel sad because my dog is ill.",
                "f) bored : I feel bored because there is nothing to do.",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce dialogue avec les mots suivants, chacun une seule fois : wrong, feel, because, worry, feels, scared. « Hi Sam! How do you (1) ... today? » « Not very well. » « What's (2) ...? » « I'm (3) ... of the big dog next door. » « Why? » « (4) ... it's very big and it barks a lot. » « Don't (5) ...! My sister (6) ... the same, but the dog is friendly. »",
              hint: "Regardez les mots autour de chaque trou : après do you, un verbe sans -s ; après my sister, un verbe avec -s ; scared est suivi de of ; une réponse à Why? commence par because.",
              solution: [
                "(1) feel : How do you feel today? (après do you, verbe sans -s)",
                "(2) wrong : What's wrong? (Qu'est-ce qui ne va pas ?)",
                "(3) scared : I'm scared of the big dog next door. (scared of = avoir peur de)",
                "(4) Because : la réponse à Why? commence par because.",
                "(5) worry : Don't worry! (Ne vous inquiétez pas !)",
                "(6) feels : My sister feels the same. (3e personne du singulier : -s)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez un court message (50 à 70 mots) à un correspondant anglais, Jack, pour lui raconter votre semaine en émotions. Votre message doit contenir : au moins quatre émotions différentes, chacune justifiée avec because ; une émotion d'une autre personne (avec he ou she, et le -s du présent simple ou is) ; une nuance (a bit, very ou really) ; une question finale pour demander à Jack comment il se sent.",
              hint: "Prenez un jour de la semaine par phrase (On Monday, On Wednesday...). Après chaque émotion, posez-vous la question Why? et répondez avec because + sujet + verbe.",
              solution: [
                "Choisir quatre émotions et leur raison : nervous (un contrôle d'anglais), proud (la mère, un bon résultat), sad (le petit frère, son ami malade), bored (rien à faire le dimanche), happy (les vacances qui arrivent).",
                "Exemple de production : « Hi Jack, this week I feel happy because the holidays start soon. On Monday, I'm a bit nervous because I have an English test. My mum is proud because I'm good at English! My little brother feels sad because his friend is ill. On Sunday, I'm really bored because there is nothing to do. How do you feel this week? Bye, Léa »",
                "Vérifier la liste : cinq émotions avec because, deux autres personnes (my mum is, my brother feels), des nuances (a bit, really), une question finale (How do you feel?).",
                "Vérifier la grammaire : adjectifs invariables, -s de feels, because suivi d'un sujet et d'un verbe.",
                "Résultat : un message d'environ 60 mots qui respecte toutes les consignes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Évitez les pièges des émotions en anglais.",
            statements: [
              { text: "« I'm bored » means « je m'ennuie ».", true: true, why: "Bored décrit ce que l'on ressent : je m'ennuie." },
              { text: "« I feel me happy » is correct.", true: false, why: "En anglais, se sentir se dit feel, sans « me » : I feel happy." },
              { text: "« She feel sad » is correct.", true: false, why: "Au présent simple, avec she, le verbe prend un -s : she feels sad." },
              { text: "« Scared » and « afraid » both mean « qui a peur ».", true: true, why: "Les deux sont synonymes : I'm scared of spiders, I'm afraid of spiders." },
              { text: "« I'm excited » means « je suis agité, énervé ».", true: false, why: "Excited est un faux ami : il signifie très impatient, enthousiaste." },
              { text: "After « because », you need a subject and a verb.", true: true, why: "Because introduit une phrase complète : because it's my birthday." },
              { text: "« They are angrys » is correct.", true: false, why: "Les adjectifs anglais sont invariables : they are angry." },
            ],
          },
          quiz: [
            { q: "« Je m'ennuie » in English is...", options: ["I'm boring.", "I'm bored.", "I feel me bored.", "I bore."], answer: 1, why: "I'm bored = je m'ennuie ; I'm boring voudrait dire « je suis ennuyeux »." },
            { q: "« How do you feel? » « I feel ... because it's my birthday! »", options: ["sad", "angry", "happy", "worried"], answer: 2, why: "Un anniversaire rend heureux : I feel happy." },
            { q: "Choose the correct sentence.", options: ["She feels tired.", "She feel tired.", "She feels tireds."], answer: 0, why: "Avec she, feel prend un -s, et l'adjectif tired reste invariable." },
            { q: "Your friend looks sad. What do you ask?", options: ["What time is it?", "Where are you from?", "How old are you?", "What's wrong?"], answer: 3, why: "What's wrong? signifie « Qu'est-ce qui ne va pas ? »." },
            { q: "« Je suis fier de mon frère » : I'm proud ... my brother.", options: ["at", "for", "of", "to"], answer: 2, why: "On dit to be proud of, comme to be scared of." },
          ],
          trap: "Confondre bored (qui s'ennuie) et boring (ennuyeux) : « I'm boring » veut dire « je suis ennuyeux ». Autre erreur fréquente : traduire « je me sens » par « I feel me » au lieu de « I feel ».",
          method: "Apprenez chaque émotion avec une situation personnelle : écrivez pour chaque mot une phrase vraie pour vous avec because (I feel nervous because...). Une phrase qui vous concerne se retient bien mieux qu'un mot isolé.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'decrire-image',
          title: 'Décrire un tableau ou une image au présent en be + -ing',
          minutes: 35,
          objectives: [
            "Former le présent en be + -ing (present continuous) à la forme affirmative, négative et interrogative.",
            "Appliquer les règles d'orthographe du -ing (dancing, swimming, lying).",
            "Décrire ce qui se passe sur un tableau ou une image en situant les éléments (in the foreground, on the left...).",
            "Distinguer ce qui se passe sur l'image (be + -ing) de ce que l'on fait d'habitude (présent simple).",
          ],
          course: [
            {
              heading: "Le présent en be + -ing : ce qui est en train de se passer",
              paragraphs: [
                "Quand on décrit une image, on dit ce que les personnages sont en train de faire au moment représenté. En anglais, on utilise alors le présent en be + -ing (present continuous) : « A girl is reading a book » (une fille est en train de lire un livre, une fille lit un livre).",
                "On le forme avec be conjugué au présent (am, is, are) suivi du verbe terminé par -ing : I am (I'm) painting, you are (you're) painting, he, she ou it is (he's, she's, it's) painting, we are (we're) painting, they are (they're) painting.",
              ],
              box: { label: "Formule", text: "Sujet + am / is / are + verbe-ing. The boy is running. The children are playing. I'm drawing." },
            },
            {
              heading: "Négation, question et orthographe du -ing",
              paragraphs: [
                "À la forme négative, on ajoute not après be : « The dog isn't sleeping » (is not), « They aren't smiling » (are not), « I'm not dancing ». À la forme interrogative, be passe devant le sujet : « Is the girl crying? Yes, she is. / No, she isn't. » « What is the man doing? » (Que fait l'homme ?) « He's cooking. »",
                "L'orthographe du -ing suit trois règles. 1) Le e final muet disparaît : dance → dancing, write → writing, smile → smiling. 2) Quand un verbe d'une syllabe se termine par consonne + voyelle + consonne, la dernière consonne double : sit → sitting, run → running, swim → swimming, stop → stopping (mais pas après w ou y : play → playing, snow → snowing). 3) -ie devient -y : lie → lying, tie → tying.",
                "Pour tous les autres verbes, on ajoute simplement -ing : read → reading, look → looking, sing → singing, fly → flying, walk → walking.",
              ],
              box: { label: "Règle", text: "dance → dancing (e muet supprimé) ; sit → sitting, run → running (consonne doublée) ; lie → lying (-ie devient -y) ; play → playing, read → reading (on ajoute -ing)." },
            },
            {
              heading: "Situer les éléments d'une image",
              paragraphs: [
                "Pour décrire une image avec ordre, on situe chaque élément : in the foreground (au premier plan), in the background (à l'arrière-plan), in the middle ou in the centre (au milieu, au centre), on the left (à gauche), on the right (à droite), at the top (en haut), at the bottom (en bas).",
                "On commence par dire ce qu'est l'image : « This is a painting by... » (C'est un tableau de...), « This is a photo » ou « This picture shows... » (Cette image montre...). On présente ensuite la scène avec there is et there are, puis on dit ce que font les personnages en be + -ing : « In the foreground, there are two boys. They are playing football. On the left, a woman is walking her dog. »",
              ],
              box: { label: "Repère", text: "in the foreground / in the background ; on the left / on the right ; in the middle ; at the top / at the bottom. This picture shows... There is... There are..." },
            },
            {
              heading: "Un exemple : Nighthawks, d'Edward Hopper",
              paragraphs: [
                "Le peintre américain Edward Hopper a peint Nighthawks en 1942 ; le tableau est conservé à l'Art Institute of Chicago. Il représente un petit restaurant américain (a diner) au coin d'une rue, la nuit. On peut le décrire ainsi : « This is a painting by Edward Hopper. It shows a diner at night. In the middle, three customers are sitting at the counter. A man in white is working behind the counter. Outside, the street is empty and dark. »",
                "Vous pouvez terminer en donnant votre impression, avec le vocabulaire des émotions : « I think the people look tired and lonely (seuls). The picture makes me feel a bit sad. » ou « I like this painting because the colours are strong. »",
              ],
            },
            {
              heading: "Be + -ing ou présent simple ?",
              paragraphs: [
                "Ne confondez pas les deux présents. Le présent simple dit ce que l'on fait d'habitude : « She plays tennis every Saturday. » Le présent en be + -ing dit ce qui se passe au moment de l'image, ou maintenant : « Look! She is playing tennis. »",
                "Certains verbes qui expriment un goût, une opinion ou une connaissance (like, love, hate, want, know) restent au présent simple, même pour parler de maintenant : on dit « I like this painting », jamais « I'm liking this painting ».",
              ],
              box: { label: "À retenir", text: "Habitude → présent simple : He paints every day. Sur l'image, maintenant → be + -ing : He is painting a tree. Mais I like, I love, I know restent au présent simple." },
            },
          ],
          keyPoints: [
            "Be + -ing : sujet + am / is / are + verbe-ing : The girl is reading.",
            "Négation : isn't, aren't, I'm not. Question : Is she smiling? What is he doing?",
            "Orthographe : dance → dancing, sit → sitting, swim → swimming, lie → lying, play → playing.",
            "Situer : in the foreground, in the background, in the middle, on the left, on the right, at the top, at the bottom.",
            "Commencer par This picture shows... puis There is / There are..., puis ce que font les personnages.",
            "Présent simple pour l'habitude, be + -ing pour ce qui se passe sur l'image.",
          ],
          example: {
            statement: "Décrivez en anglais, en quatre phrases, cette image inventée pour l'exercice, d'après les notes : « au premier plan, deux enfants ; ils construisent un château de sable ; à droite, un chien court ; à l'arrière-plan, un bateau navigue sur la mer ».",
            solution: [
              "Situer le premier plan et présenter les enfants avec there are : « In the foreground, there are two children. »",
              "Dire ce qu'ils font en be + -ing, avec are car le sujet est pluriel (construire = to build) : « They are building a sandcastle. »",
              "À droite, le chien : run se termine par consonne + voyelle + consonne, le n double : « On the right, a dog is running. »",
              "À l'arrière-plan, le bateau (naviguer = to sail) : « In the background, a boat is sailing on the sea. »",
              "Réponse : « In the foreground, there are two children. They are building a sandcastle. On the right, a dog is running. In the background, a boat is sailing on the sea. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez la forme en -ing de ces verbes : a) play ; b) dance ; c) swim ; d) read ; e) write ; f) sit ; g) lie ; h) smile.",
              hint: "Pour chaque verbe, demandez-vous : se termine-t-il par un e muet ? par consonne + voyelle + consonne ? par -ie ? Sinon, ajoutez simplement -ing.",
              solution: [
                "a) playing (on ajoute -ing ; pas de doublement après y).",
                "b) dancing (le e muet disparaît).",
                "c) swimming (consonne + voyelle + consonne : le m double).",
                "d) reading (deux voyelles avant le d : on ajoute -ing).",
                "e) writing (le e muet disparaît ; un seul t).",
                "f) sitting (consonne + voyelle + consonne : le t double).",
                "g) lying (-ie devient -y).",
                "h) smiling (le e muet disparaît).",
              ],
            },
            {
              level: 2,
              statement: "Mettez les verbes entre parenthèses au présent en be + -ing pour décrire une image de parc (image inventée pour l'exercice) : a) On the left, a man (sit) on a bench. b) In the middle, two girls (ride) their bikes. c) The baby (not / cry). It (sleep). d) (the dog / run)? Yes, it is. e) What (the boy / eat)? He (eat) an ice cream.",
              hint: "Choisissez am, is ou are selon le sujet, puis appliquez la bonne règle d'orthographe. Dans une question, be passe devant le sujet.",
              solution: [
                "a) On the left, a man is sitting on a bench. (le t double)",
                "b) In the middle, two girls are riding their bikes. (sujet pluriel : are ; le e muet disparaît)",
                "c) The baby isn't crying. It's sleeping.",
                "d) Is the dog running? Yes, it is. (is devant le sujet ; le n double)",
                "e) What is the boy eating? He's eating an ice cream.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici des notes en français sur une image inventée pour l'exercice. Rédigez sa description en anglais en 7 phrases au moins : commencez par This picture shows..., situez chaque élément, employez be + -ing pour ce qui se passe, ajoutez une phrase au présent simple pour l'habitude, et terminez par votre impression. Notes : une place de village en été ; au milieu, un homme joue de la guitare ; à gauche, trois enfants dansent ; à droite, une vieille dame est assise et elle sourit ; en haut, des oiseaux volent ; d'habitude, l'homme joue ici tous les samedis.",
              hint: "Repérez d'abord le mot qui situe chaque élément (au milieu, à gauche...). Attention : « elle est assise » se dit she is sitting, et l'habitude (tous les samedis) demande le présent simple.",
              solution: [
                "Présenter l'image : « This picture shows a village square in summer. »",
                "Situer et décrire en be + -ing : « In the middle, a man is playing the guitar. On the left, three children are dancing. On the right, an old lady is sitting and she is smiling. At the top, some birds are flying. »",
                "Vérifier l'orthographe : dancing et smiling (e muet supprimé), sitting (t doublé), playing et flying (simple ajout de -ing).",
                "Ajouter l'habitude au présent simple, avec -s : « The man plays here every Saturday. »",
                "Donner son impression, avec like au présent simple : « I like this picture because the people look happy. »",
                "Résultat : « This picture shows a village square in summer. In the middle, a man is playing the guitar. On the left, three children are dancing. On the right, an old lady is sitting and she is smiling. At the top, some birds are flying. The man plays here every Saturday. I like this picture because the people look happy. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les morceaux dans l'ordre pour former la phrase qui décrit l'image.",
            items: [
              "In the picture,",
              "two boys",
              "are",
              "playing",
              "football",
              "in the park.",
            ],
          },
          quiz: [
            { q: "Choose the correct -ing form of « swim ».", options: ["swimming", "swiming", "swimeing"], answer: 0, why: "Swim se termine par consonne + voyelle + consonne : le m double." },
            { q: "Look at the picture: the children ... football.", options: ["is playing", "are to playing", "playing", "are playing"], answer: 3, why: "Children est pluriel : are + playing. Le verbe be ne doit pas être oublié." },
            { q: "« À l'arrière-plan » in English is...", options: ["in the background", "in the foreground", "on the left", "at the top"], answer: 0, why: "Background = l'arrière-plan ; foreground = le premier plan." },
            { q: "« What is the girl doing? » Choose the best answer.", options: ["She reads every day.", "She's reading a book.", "Yes, she is.", "She is read a book now."], answer: 1, why: "La question en be + -ing appelle une réponse en be + -ing : she's reading." },
            { q: "Which sentence is correct?", options: ["I'm liking this painting.", "I am like this painting.", "I like this painting."], answer: 2, why: "Like exprime un goût : il reste au présent simple, même pour maintenant." },
          ],
          trap: "Oublier le verbe be (« The boy playing ») ou mal l'accorder (« The children is playing ») : il faut toujours am, is ou are avant le verbe en -ing, accordé avec le sujet.",
          method: "Pour décrire une image, procédez en trois temps : 1) ce qu'est l'image (This picture shows...) ; 2) les lieux et les personnages avec there is / there are, du premier plan à l'arrière-plan ; 3) ce que fait chacun en be + -ing. Relisez ensuite chaque phrase en vérifiant la présence de am, is ou are.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'chanson-poeme',
          title: 'Comprendre et dire une chanson ou un poème',
          minutes: 30,
          objectives: [
            "Comprendre le sens général d'une chanson ou d'un poème en repérant les mots-clés et les répétitions.",
            "Identifier les rimes, le refrain, les vers et les strophes (rhyme, chorus, line, stanza).",
            "Dire un poème ou une comptine de façon expressive, en respectant le rythme et l'accentuation.",
            "Écrire quelques vers simples qui riment, sur un modèle.",
          ],
          course: [
            {
              heading: "Le vocabulaire de la chanson et du poème",
              paragraphs: [
                "Une chanson (a song) a des couplets (verses ; a verse) et un refrain (the chorus) qui revient plusieurs fois. Un poème (a poem) est écrit par un poète (a poet) ; il est fait de vers (lines ; a line) regroupés en strophes (stanzas ; a stanza). Les comptines pour enfants s'appellent des nursery rhymes : ce sont les premières chansons que les petits anglophones apprennent.",
                "Deux mots sont essentiels : a rhyme (une rime) et to rhyme (rimer). Deux mots riment quand leur fin se prononce de la même façon : cat et hat, star et car, day et play. En anglais, on écoute le son et non l'orthographe : blue, two et shoe riment alors qu'ils s'écrivent très différemment ; à l'inverse, bear et hear se terminent par les mêmes lettres mais ne riment pas.",
              ],
              box: { label: "Vocabulaire", text: "a song (une chanson), a verse (un couplet), the chorus (le refrain), a poem (un poème), a poet (un poète), a line (un vers), a stanza (une strophe), a rhyme (une rime), to rhyme (rimer)." },
            },
            {
              heading: "Les nursery rhymes et les limericks",
              paragraphs: [
                "Parmi les nursery rhymes les plus connues, on trouve « Twinkle, Twinkle, Little Star » : ses paroles viennent d'un poème de l'Anglaise Jane Taylor, The Star, publié en 1806, et on la chante sur l'air de « Ah ! vous dirai-je, maman ». On connaît aussi Humpty Dumpty, un personnage souvent représenté comme un œuf, qui tombe d'un mur, et Hickory Dickory Dock, où une souris grimpe dans une horloge.",
                "Le limerick est un petit poème humoristique de cinq vers. Les vers 1, 2 et 5 sont plus longs et riment ensemble ; les vers 3 et 4 sont plus courts et riment entre eux : c'est le schéma AABBA. L'écrivain anglais Edward Lear l'a rendu célèbre avec A Book of Nonsense (1846).",
                "Voici un limerick écrit pour ce cours : « There's a little green dragon called Dave / Who lives all alone in a cave. / He sings every night / By the candle's soft light, / And the bats in the cave start to wave! » Dave, cave et wave forment la rime A ; night et light forment la rime B.",
              ],
              box: { label: "Repère", text: "Limerick : 5 vers, rimes AABBA, ton humoristique. Rendu célèbre par Edward Lear, A Book of Nonsense (1846)." },
            },
            {
              heading: "Comprendre une chanson ou un poème",
              paragraphs: [
                "N'essayez pas de tout comprendre mot à mot. Écoutez ou lisez une première fois pour le sens général : de quoi ou de qui parle le texte ? Quelle émotion exprime-t-il (joyeux, triste, drôle) ? Repérez ensuite les mots que vous connaissez, les mots transparents (qui ressemblent au français, comme music, animal, magic) et les mots répétés, surtout dans le refrain : ce sont souvent les plus importants.",
                "Le titre, les images et la musique sont aussi des indices : une mélodie lente et douce accompagne souvent un texte triste ou tendre, un rythme rapide un texte joyeux. Posez-vous enfin les questions Who?, Where?, What? Dans le limerick du dragon : who? un petit dragon vert ; where? dans une grotte ; what? il chante tous les soirs.",
              ],
            },
            {
              heading: "Dire un poème : accent, rythme et intonation",
              paragraphs: [
                "En anglais, dans chaque mot de plusieurs syllabes, une syllabe est prononcée plus fort : c'est l'accent de mot (stress). On l'écrit ici en majuscules : DRAgon, MUsic, LITtle, aFRAID, guiTAR. Dans une phrase, les mots importants (noms, verbes, adjectifs) sont accentués, et les petits mots (a, the, of, and) sont prononcés plus vite et plus faiblement. C'est ce qui donne son rythme à la poésie anglaise.",
                "Pour dire un poème de façon expressive : 1) comprenez-le d'abord ; 2) marquez les syllabes accentuées et les rimes ; 3) lisez-le à voix haute en tapant le rythme dans vos mains ; 4) apprenez-le vers par vers ; 5) récitez-le en regardant votre public, en mettant le ton (joyeux, mystérieux, triste) et en marquant une petite pause à la fin de chaque vers.",
              ],
              box: { label: "À retenir", text: "Une syllabe accentuée par mot : DRAgon, MUsic, guiTAR. Les mots importants sont accentués, les petits mots (a, the, and) sont faibles. Une petite pause à la fin de chaque vers." },
            },
          ],
          keyPoints: [
            "a song : des verses (couplets) et un chorus (refrain) ; a poem : des lines (vers) et des stanzas (strophes).",
            "Deux mots riment quand leur fin se prononce pareil : blue, two et shoe riment malgré l'orthographe.",
            "Nursery rhymes : les comptines anglaises (Twinkle, Twinkle, Little Star ; Humpty Dumpty).",
            "Le limerick : 5 vers, rimes AABBA, rendu célèbre par Edward Lear (A Book of Nonsense, 1846).",
            "Comprendre : le sens général d'abord, puis les mots connus, les mots transparents et les mots répétés.",
            "Dire : l'accent de mot (DRAgon, guiTAR), les mots importants accentués, une pause à la fin de chaque vers.",
          ],
          example: {
            statement: "Lisez ce petit poème écrit pour le cours, puis répondez. « On Monday I feel blue, / On Tuesday I've got the flu, / But on Saturday I play / In the sun all day! » 1) Relevez les mots qui riment. 2) Quel est le schéma des rimes ? 3) Quel est le sentiment de l'auteur le lundi, puis le samedi ?",
            solution: [
              "Repérer le dernier mot de chaque vers : blue, flu, play, day.",
              "Comparer les sons : blue et flu se terminent par le même son ; play et day aussi.",
              "En déduire le schéma : les vers 1 et 2 riment ensemble (A), les vers 3 et 4 aussi (B) : AABB.",
              "Chercher le sentiment : « I feel blue » est une expression qui signifie « je me sens triste, j'ai le cafard » ; le samedi, l'auteur joue au soleil toute la journée, il est content.",
              "Réponse : 1) blue / flu et play / day ; 2) AABB ; 3) triste le lundi, heureux le samedi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Trouvez dans la liste le mot qui rime avec chacun de ces mots : a) cat ; b) star ; c) blue ; d) night ; e) day. Liste : light, play, hat, shoe, car.",
              hint: "Dites les mots à voix haute : c'est le son de la fin qui compte, pas l'orthographe.",
              solution: [
                "a) cat → hat.",
                "b) star → car.",
                "c) blue → shoe (orthographes différentes, même son).",
                "d) night → light.",
                "e) day → play.",
              ],
            },
            {
              level: 2,
              statement: "Recopiez chaque mot en écrivant sa syllabe accentuée en majuscules, puis lisez-le à voix haute : a) dragon ; b) monster ; c) guitar ; d) afraid ; e) music ; f) happy ; g) begin ; h) giant.",
              hint: "Dites chaque mot de deux façons, en appuyant d'abord sur la première syllabe, puis sur la deuxième, et gardez celle qui sonne juste. Beaucoup de mots de deux syllabes sont accentués sur la première, mais pas tous.",
              solution: [
                "a) DRAgon.",
                "b) MONster.",
                "c) guiTAR (accent sur la deuxième syllabe).",
                "d) aFRAID (accent sur la deuxième syllabe).",
                "e) MUsic.",
                "f) HAPpy.",
                "g) beGIN (accent sur la deuxième syllabe).",
                "h) GIant.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez votre propre limerick de 5 vers (schéma AABBA) sur une créature imaginaire ou un animal, au présent. Vous pouvez partir de ce premier vers : « There's a funny old witch called Sue ». Ensuite, soulignez les mots qui riment et indiquez le schéma des rimes.",
              hint: "Faites d'abord deux listes de rimes : des mots qui riment avec Sue (blue, shoe, two, zoo, too) pour les vers 1, 2 et 5, et une autre paire pour les vers 3 et 4 (frog et log, cat et hat...).",
              solution: [
                "Lister les rimes A, qui riment avec Sue : blue, shoe, two, zoo, too.",
                "Choisir une paire de rimes B pour les vers courts 3 et 4 : frog et log.",
                "Exemple de production : « There's a funny old witch called Sue / Who cooks a strange soup that is blue. / She adds a big frog / And a bit of a log, / And she eats it all up with a shoe! »",
                "Vérifier les rimes : Sue, blue, shoe (vers 1, 2 et 5) = A ; frog, log (vers 3 et 4) = B. Schéma : AABBA.",
                "Vérifier la grammaire : présent simple avec -s (cooks, adds, eats), puis lire le poème à voix haute en tapant le rythme.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot au mot qui rime avec lui.",
            pairs: [
              { left: "cave", right: "wave" },
              { left: "song", right: "long" },
              { left: "sea", right: "tree" },
              { left: "moon", right: "spoon" },
              { left: "rain", right: "train" },
              { left: "book", right: "look" },
            ],
          },
          quiz: [
            { q: "« Le refrain » of a song is called the...", options: ["verse", "chorus", "stanza", "nursery rhyme"], answer: 1, why: "The chorus est le refrain qui revient ; a verse est un couplet." },
            { q: "Which word rhymes with « blue »?", options: ["black", "blow", "shoe", "bell"], answer: 2, why: "Blue et shoe se terminent par le même son, même si l'orthographe est différente." },
            { q: "A limerick has...", options: ["five lines", "four lines", "two lines", "ten lines"], answer: 0, why: "Un limerick compte cinq vers, avec des rimes AABBA." },
            { q: "In « guitar », which syllable is stressed?", options: ["no syllable", "GUI-tar", "gui-TAR"], answer: 2, why: "Guitar est accentué sur la deuxième syllabe : guiTAR." },
            { q: "Who made limericks famous with A Book of Nonsense (1846)?", options: ["Jane Taylor", "Edward Hopper", "Washington Irving", "Edward Lear"], answer: 3, why: "Edward Lear, écrivain anglais, a rendu le limerick célèbre ; Jane Taylor a écrit le poème de Twinkle, Twinkle, Little Star." },
          ],
          trap: "Croire que deux mots riment parce qu'ils se terminent par les mêmes lettres : en anglais, c'est le son qui compte (blue, two et shoe riment, mais bear et hear ne riment pas).",
          method: "Pour apprendre un poème par cœur, apprenez-le vers par vers en ajoutant un vers à chaque répétition, et appuyez-vous sur les rimes : la rime vous aide à retrouver le mot de la fin du vers suivant. Enregistrez-vous et réécoutez-vous pour vérifier le rythme.",
        },
      ],
    },
  ],
}
