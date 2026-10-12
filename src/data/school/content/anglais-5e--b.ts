import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-5e',
  chapters: [
    {
      id: 'reel-et-imaginaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'preterit-be',
          title: 'Parler du passé : « was » et « were »',
          minutes: 25,
          objectives: [
            "Conjuguer le verbe be au prétérit (was, were) à toutes les personnes.",
            "Construire la forme négative, la question et la réponse courte avec was et were.",
            "Situer un événement dans le passé avec yesterday, last, ago et when I was...",
            "Décrire une situation passée avec there was et there were.",
          ],
          course: [
            {
              heading: "Was et were : le passé du verbe be",
              paragraphs: [
                "Au présent, le verbe be a trois formes : am, is, are. Au passé, que l'on appelle le prétérit en anglais, il n'en a plus que deux : was et were. On les emploie pour parler d'une situation passée et terminée : un lieu où l'on était, un temps qu'il faisait, ce que l'on ressentait.",
                "On utilise was avec I, he, she et it : I was at school. She was ill. It was sunny. On utilise were avec you, we et they : You were late. We were in Paris. They were happy. Attention : you prend toujours were, même quand on parle à une seule personne : « Were you at home, Tom? »",
                "Avec un nom, on choisit selon le nombre. Un nom singulier prend was : My brother was tired. Un nom pluriel prend were : My friends were at the party. Le mot people (les gens) est pluriel : There were a lot of people.",
              ],
              box: { label: "Règle", text: "I / he / she / it → was. You / we / they → were. Exemples : I was ten. You were right. The cats were hungry." },
            },
            {
              heading: "La négation, la question et la réponse courte",
              paragraphs: [
                "Pour la négation, on ajoute not après was ou were. À l'oral et dans les messages, on utilise surtout les formes contractées : was not → wasn't, were not → weren't. Exemples : I wasn't at home. The shops weren't open.",
                "Pour poser une question, on inverse le sujet et le verbe, comme au présent : He was in London. → Was he in London? You were at the cinema. → Were you at the cinema? Avec un mot interrogatif, celui-ci se place en premier : Where were you yesterday? How was your weekend? Who was your teacher last year?",
                "Pour répondre à une question fermée, on utilise la réponse courte, sans répéter tout le verbe : Were you tired? Yes, I was. / No, I wasn't. Was it cold? Yes, it was. / No, it wasn't. Répondre seulement « Yes » ou « No » est correct mais un peu sec ; la réponse courte est plus polie.",
              ],
              box: { label: "À retenir", text: "Avec be, on n'utilise jamais did : on dit « Were you happy? » et « I wasn't happy », jamais « Did you were » ni « I didn't was »." },
            },
            {
              heading: "Situer dans le passé : les marqueurs de temps",
              paragraphs: [
                "Le prétérit s'emploie avec des mots qui indiquent un moment passé et terminé. Yesterday (hier), yesterday morning (hier matin), last night (hier soir), last week (la semaine dernière), last year (l'année dernière), last summer (l'été dernier). Attention : on dit last week, sans the.",
                "Ago signifie « il y a » et se place après la durée : two days ago (il y a deux jours), ten minutes ago, a long time ago (il y a longtemps). On peut aussi donner une date avec in : in 2020, in 1999. Et when I was... permet de parler de son enfance : When I was five, I was afraid of dogs.",
                "Une expression très utile : I was born (je suis né, je suis née). En anglais, naître se dit to be born, et on utilise was ou were : I was born in 2014. My parents were born in Lyon. Where were you born? On ne dit jamais « I am born » pour parler de sa naissance.",
              ],
              box: { label: "Repère", text: "yesterday = hier ; last night = hier soir ; last week / month / year = la semaine / le mois / l'année dernière ; two days ago = il y a deux jours ; I was born in... = je suis né(e) en..." },
            },
            {
              heading: "Décrire une scène passée : there was, there were",
              paragraphs: [
                "Au présent, there is et there are signifient « il y a ». Au passé, on dit there was (devant un nom singulier ou indénombrable) et there were (devant un nom pluriel) : There was a big tree in the garden. There were three cats in the street. There was some milk in the fridge.",
                "La négation et la question suivent la même règle : There wasn't a cinema in my village. There weren't any shops. Was there a park? Yes, there was. Were there many people? No, there weren't. Avec was, were, there was et there were, vous pouvez déjà décrire un souvenir, un lieu ou le début d'une histoire : « It was a dark night. There was a strange noise in the house. »",
              ],
            },
          ],
          keyPoints: [
            "Le prétérit de be : I, he, she, it → was ; you, we, they → were.",
            "Négation : wasn't (was not), weren't (were not).",
            "Question : on inverse sujet et verbe : Were you at home? Was it good?",
            "Réponses courtes : Yes, I was. / No, they weren't.",
            "Marqueurs du passé : yesterday, last week, two days ago, in 2020, when I was...",
            "There was + singulier, there were + pluriel ; I was born in... = je suis né(e) en...",
          ],
          example: {
            statement: "Mettez ce texte au passé en commençant par « Yesterday » : « I am at the beach with my family. It is very hot. My little brothers are in the water. There are a lot of people. I am not tired. »",
            solution: [
              "Repérer chaque forme de be au présent : am, is, are, are, am not.",
              "Choisir was ou were selon le sujet : I → was ; it → was ; my little brothers (pluriel) → were.",
              "There are a lot of people : people est pluriel, donc there were.",
              "I am not → I wasn't (ou I was not).",
              "Réponse : « Yesterday, I was at the beach with my family. It was very hot. My little brothers were in the water. There were a lot of people. I wasn't tired. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec was ou were. a) I ___ at home yesterday evening. b) My parents ___ in London last week. c) It ___ very cold last night. d) You ___ late this morning, Sam! e) We ___ happy with our marks. f) The film ___ really boring.",
              hint: "Regardez le sujet de chaque phrase : est-ce I, he, she, it ou un nom singulier (was), ou bien you, we, they ou un nom pluriel (were) ?",
              solution: [
                "a) I → I was at home yesterday evening.",
                "b) My parents est pluriel (they) → My parents were in London last week.",
                "c) It → It was very cold last night.",
                "d) You prend toujours were, même pour une seule personne → You were late this morning, Sam!",
                "e) We → We were happy with our marks.",
                "f) The film est singulier (it) → The film was really boring.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque phrase, écrivez la forme négative, puis la question, puis une réponse courte négative. a) She was at the swimming pool. b) They were in the garden. c) It was your birthday last Monday.",
              hint: "Négation : ajoutez n't à was ou were. Question : placez was ou were avant le sujet. Réponse courte : No, + pronom sujet + wasn't ou weren't.",
              solution: [
                "a) Négation : She wasn't at the swimming pool. Question : Was she at the swimming pool? Réponse courte : No, she wasn't.",
                "b) Négation : They weren't in the garden. Question : Were they in the garden? Réponse courte : No, they weren't.",
                "c) Négation : It wasn't your birthday last Monday. Question : Was it your birthday last Monday? Réponse courte : No, it wasn't.",
                "Vérification : aucune phrase n'utilise did, car be construit seul sa négation et sa question.",
              ],
            },
            {
              level: 3,
              statement: "Défi : ce petit texte écrit par un élève contient 7 erreurs sur was, were, wasn't, weren't, there was et there were. Recopiez-le en le corrigeant. « Last Saturday, I were at the funfair with my cousins. It was very sunny and there was a lot of people. My cousins was very excited. Did you was at the funfair too? The rides wasn't expensive, but the ice creams was too sweet. In the evening, we was very tired. »",
              hint: "Pour chaque verbe, cherchez son sujet et demandez-vous s'il est singulier ou pluriel. Pensez aussi que people est pluriel et que be ne s'emploie jamais avec did.",
              solution: [
                "Erreur 1 : I were → I was (I prend was).",
                "Erreur 2 : there was a lot of people → there were a lot of people (people est pluriel).",
                "Erreur 3 : My cousins was → My cousins were (sujet pluriel).",
                "Erreur 4 : Did you was...? → Were you...? (la question avec be se fait par inversion, sans did).",
                "Erreur 5 : The rides wasn't → The rides weren't ; erreur 6 : the ice creams was → the ice creams were (sujets pluriels).",
                "Erreur 7 : we was → we were.",
                "Texte corrigé : « Last Saturday, I was at the funfair with my cousins. It was very sunny and there were a lot of people. My cousins were very excited. Were you at the funfair too? The rides weren't expensive, but the ice creams were too sweet. In the evening, we were very tired. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes en anglais ?",
            statements: [
              { text: "« You were at school yesterday. »", true: true, why: "You prend toujours were, au singulier comme au pluriel." },
              { text: "« My friends was at the party. »", true: false, why: "My friends est pluriel : il faut dire my friends were." },
              { text: "« Did you were at home? »", true: false, why: "Avec be, pas de did : on inverse simplement, Were you at home?" },
              { text: "« There were a lot of people in the street. »", true: true, why: "People est pluriel, donc there were." },
              { text: "« I am born in 2014. »", true: false, why: "Pour sa naissance, on emploie le passé : I was born in 2014." },
              { text: "« Was it cold? No, it wasn't. »", true: true, why: "La réponse courte reprend le sujet et was : No, it wasn't." },
              { text: "« I was in Spain the last summer. »", true: false, why: "Avec last, pas d'article : last summer." },
            ],
          },
          quiz: [
            { q: "Choose the correct form: « We ___ in the park yesterday. »", options: ["was", "were", "are", "does"], answer: 1, why: "We prend were au prétérit ; yesterday indique le passé, donc pas are." },
            { q: "Choose the correct question.", options: ["Did she was ill?", "Was ill she?", "Was she ill?", "She was ill?"], answer: 2, why: "Avec be, on inverse le sujet et le verbe : Was she ill? Il n'y a pas de did." },
            { q: "« Were they happy? » What is the correct short answer?", options: ["No, they weren't.", "No, they didn't.", "No, they wasn't.", "No, they aren't there."], answer: 0, why: "La réponse courte reprend le pronom et le verbe be : No, they weren't." },
            { q: "How do you say « il y a deux jours » in English?", options: ["since two days", "two days ago", "ago two days", "there is two days"], answer: 1, why: "Ago se place après la durée : two days ago." },
            { q: "Choose the correct sentence.", options: ["There was three dogs.", "There were a dog.", "There was a dog.", "There were dog."], answer: 2, why: "Devant un nom singulier, on dit there was ; there were s'emploie devant un pluriel." },
          ],
          trap: "L'erreur la plus fréquente est d'ajouter did avec be (« Did you were », « I didn't was ») : avec was et were, la négation se fait avec not et la question par inversion.",
          method: "Pour choisir entre was et were, remplacez mentalement le sujet par un pronom : si c'est I, he, she ou it, écrivez was ; si c'est you, we ou they, écrivez were.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'preterit-verbes',
          title: 'Le prétérit des verbes réguliers et irréguliers',
          minutes: 35,
          objectives: [
            "Former le prétérit des verbes réguliers en -ed en respectant l'orthographe.",
            "Mémoriser le prétérit des verbes irréguliers les plus fréquents.",
            "Construire la négation et la question au prétérit avec didn't et did.",
            "Prononcer correctement la terminaison -ed (/t/, /d/ ou /ɪd/).",
          ],
          course: [
            {
              heading: "À quoi sert le prétérit ?",
              paragraphs: [
                "Le prétérit (past simple) sert à raconter des actions terminées, situées à un moment précis du passé. Il correspond souvent au passé composé ou au passé simple en français : I visited London last year (J'ai visité Londres l'an dernier). Yesterday, she played tennis (Hier, elle a joué au tennis).",
                "Bonne nouvelle : au prétérit, le verbe a la même forme à toutes les personnes. On dit I played, you played, he played, we played, they played. Il n'y a pas de -s à la troisième personne, contrairement au présent simple.",
              ],
              box: { label: "À retenir", text: "Prétérit = action passée et terminée, souvent avec un marqueur de temps (yesterday, last week, ago, in 2019). Une seule forme pour toutes les personnes." },
            },
            {
              heading: "Les verbes réguliers : la terminaison -ed",
              paragraphs: [
                "La plupart des verbes sont réguliers : on ajoute -ed à la base verbale. Work → worked, play → played, watch → watched, visit → visited. Quelques règles d'orthographe sont à connaître pour bien écrire.",
                "Si le verbe se termine par -e, on ajoute seulement -d : like → liked, dance → danced, live → lived. Si le verbe se termine par une consonne + y, le y devient i : study → studied, cry → cried, carry → carried. Mais après une voyelle, le y reste : play → played, enjoy → enjoyed.",
                "Si un verbe court se termine par une consonne + une voyelle + une consonne, on double souvent la dernière consonne : stop → stopped, plan → planned, drop → dropped. Cette règle ne s'applique pas aux verbes terminés par w, x ou y : snow → snowed, fix → fixed.",
                "La prononciation de -ed dépend du son final du verbe. On entend /ɪd/ après les sons /t/ et /d/ : wanted, needed, visited. On entend /t/ après un son sourd comme /k/, /p/, /s/, /ʃ/ ou /tʃ/ : worked, stopped, danced, washed, watched. Dans les autres cas, on entend /d/ : played, lived, cleaned. On n'ajoute donc une syllabe que dans le premier cas.",
              ],
              box: { label: "Règle", text: "Base + ed (work → worked). -e → +d (like → liked). Consonne + y → -ied (study → studied). Consonne + voyelle + consonne → doublement (stop → stopped)." },
            },
            {
              heading: "Les verbes irréguliers : à apprendre par cœur",
              paragraphs: [
                "Les verbes les plus courants sont souvent irréguliers : leur prétérit ne se forme pas avec -ed et doit être appris. Go → went, have → had, do → did, see → saw, eat → ate, come → came, take → took, make → made, get → got, buy → bought, find → found, give → gave, write → wrote, say → said, tell → told, know → knew, run → ran, swim → swam, drink → drank, meet → met, sleep → slept, leave → left.",
                "Certains verbes ne changent pas du tout : put → put, cut → cut. Le verbe read garde la même orthographe mais se prononce différemment au prétérit : read se prononce comme « red ». Pour retenir les irréguliers, regroupez-les par ressemblance : drink → drank, swim → swam, begin → began (le i devient a) ; buy → bought, think → thought, bring → brought (terminaison -ought).",
              ],
              box: { label: "Repère", text: "go → went ; have → had ; do → did ; see → saw ; eat → ate ; come → came ; take → took ; make → made ; buy → bought ; write → wrote ; find → found ; meet → met." },
            },
            {
              heading: "La négation et la question : did et didn't",
              paragraphs: [
                "Pour la négation, on utilise l'auxiliaire did suivi de not, contracté en didn't, puis la base verbale (le verbe sans -ed, sans forme irrégulière). I didn't watch TV. She didn't go to school. Le passé est déjà marqué par did : le verbe qui suit reste à la base.",
                "Pour la question, on place did avant le sujet, puis la base verbale : Did you watch the match? Did they go to the beach? Avec un mot interrogatif : Where did you go? What did she buy? Réponses courtes : Yes, I did. / No, I didn't. Rappel : le verbe be fait exception, il ne prend jamais did (Were you there?).",
              ],
              box: { label: "Formule", text: "Affirmation : I went. Négation : I didn't go. Question : Did you go? Réponse courte : Yes, I did. / No, I didn't." },
            },
          ],
          keyPoints: [
            "Le prétérit raconte une action passée et terminée ; une seule forme pour toutes les personnes.",
            "Verbes réguliers : base + ed, avec les règles like → liked, study → studied, stop → stopped.",
            "Prononciation de -ed : /ɪd/ après t ou d (wanted), /t/ après un son sourd (worked), /d/ ailleurs (played).",
            "Les verbes irréguliers s'apprennent par cœur : go → went, see → saw, buy → bought...",
            "Négation : didn't + base verbale (I didn't go). Question : Did + sujet + base verbale (Did you go?).",
            "Après did ou didn't, jamais de -ed ni de forme irrégulière.",
          ],
          example: {
            statement: "Mettez au prétérit, puis à la forme négative : « Emma goes to the cinema and buys some popcorn. »",
            solution: [
              "Repérer les verbes : goes (base go) et buys (base buy). Ce sont deux verbes irréguliers.",
              "Prétérit : go → went, buy → bought. Le -s du présent disparaît, car le prétérit n'a qu'une forme.",
              "Phrase au prétérit : « Emma went to the cinema and bought some popcorn. »",
              "Négation : didn't + base verbale, et some devient any dans une phrase négative.",
              "Réponse : « Emma didn't go to the cinema and didn't buy any popcorn. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez le prétérit de ces verbes et dites s'ils sont réguliers (R) ou irréguliers (I) : a) play ; b) study ; c) go ; d) stop ; e) see ; f) like ; g) eat ; h) buy.",
              hint: "Pour les réguliers, pensez aux trois règles d'orthographe (-e, consonne + y, doublement). Pour les irréguliers, revoyez la liste du cours.",
              solution: [
                "a) play → played (R) : voyelle + y, le y reste.",
                "b) study → studied (R) : consonne + y, le y devient ied.",
                "c) go → went (I).",
                "d) stop → stopped (R) : consonne + voyelle + consonne, on double le p.",
                "e) see → saw (I).",
                "f) like → liked (R) : le verbe finit par -e, on ajoute -d.",
                "g) eat → ate (I) ; h) buy → bought (I).",
              ],
            },
            {
              level: 2,
              statement: "Transformez chaque phrase à la forme indiquée. a) They watched a film. (négation) b) He took the bus. (question + réponse courte affirmative) c) She wrote a letter to her grandmother. (négation) d) You met Tom at the station. (question avec where, sans la réponse)",
              hint: "Après did ou didn't, revenez toujours à la base verbale : took → take, wrote → write, met → meet.",
              solution: [
                "a) They didn't watch a film. (watched redevient watch après didn't)",
                "b) Did he take the bus? Yes, he did. (took redevient take après did)",
                "c) She didn't write a letter to her grandmother. (wrote redevient write)",
                "d) Where did you meet Tom? (on place where en tête, puis did, le sujet et la base meet)",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici le journal de Leo (données fictives). Mettez tous les verbes entre parenthèses au prétérit, puis posez deux questions sur le texte avec did. « Last Sunday, I (wake up) at nine. I (have) breakfast and then I (phone) my friend Max. We (decide) to go to the lake. We (ride) our bikes and we (swim) for an hour. Max (not / bring) a towel! In the evening, I (be) very tired and I (sleep) very well. »",
              hint: "Repérez d'abord les verbes réguliers (phone, decide) puis cherchez la forme irrégulière des autres : wake → woke, ride → rode... Attention au verbe be et à la négation.",
              solution: [
                "wake up → woke up ; have → had ; phone → phoned (régulier, -e + d) ; decide → decided (régulier, prononcé /ɪd/).",
                "ride → rode ; swim → swam ; not / bring → didn't bring (didn't + base) ; be → was (sujet I) ; sleep → slept.",
                "Texte : « Last Sunday, I woke up at nine. I had breakfast and then I phoned my friend Max. We decided to go to the lake. We rode our bikes and we swam for an hour. Max didn't bring a towel! In the evening, I was very tired and I slept very well. »",
                "Exemples de questions : « What time did Leo wake up? » (réponse : at nine) et « Did they ride their bikes? » (réponse : Yes, they did).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque verbe irrégulier à son prétérit.",
            pairs: [
              { left: "go", right: "went" },
              { left: "buy", right: "bought" },
              { left: "see", right: "saw" },
              { left: "write", right: "wrote" },
              { left: "take", right: "took" },
              { left: "eat", right: "ate" },
            ],
          },
          quiz: [
            { q: "What is the past simple of « study »?", options: ["studyed", "studied", "studed", "studies"], answer: 1, why: "Consonne + y : le y devient i et on ajoute -ed, studied." },
            { q: "Choose the correct negative sentence.", options: ["I didn't went to school.", "I don't went to school.", "I didn't go to school.", "I wasn't go to school."], answer: 2, why: "Après didn't, on emploie la base verbale : go, et non went." },
            { q: "What is the past simple of « take »?", options: ["took", "taked", "taken", "tooked"], answer: 0, why: "Take est irrégulier : take, took." },
            { q: "In which verb do you hear an extra syllable /ɪd/?", options: ["played", "watched", "liked", "wanted"], answer: 3, why: "On entend /ɪd/ seulement après les sons /t/ ou /d/ : want se termine par /t/." },
            { q: "« Did you see the film? » What is the correct short answer?", options: ["Yes, I saw.", "Yes, I did.", "Yes, I was.", "Yes, I see."], answer: 1, why: "La réponse courte reprend l'auxiliaire de la question : did." },
          ],
          trap: "Après did ou didn't, beaucoup d'élèves gardent la forme du prétérit (« Did you went? », « She didn't bought »). Le passé est déjà porté par did : le verbe reste à la base (go, buy).",
          method: "Apprenez les verbes irréguliers par petits groupes de cinq qui se ressemblent (drink, drank ; swim, swam ; begin, began), à voix haute, et faites-vous interroger dans les deux sens : base vers prétérit, puis prétérit vers base.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'legendes',
          title: 'Lire un conte ou une légende du monde anglophone',
          minutes: 30,
          objectives: [
            "Identifier les caractéristiques d'un conte et d'une légende.",
            "Repérer dans un récit les personnages, le lieu, le moment et les événements principaux.",
            "Connaître quelques légendes célèbres du monde anglophone : Robin Hood, King Arthur, Nessie.",
            "Mobiliser le lexique du merveilleux (king, knight, giant, witch, magic...).",
          ],
          course: [
            {
              heading: "Conte ou légende : quelle différence ?",
              paragraphs: [
                "Un conte (a fairy tale, a tale) est une histoire inventée, qui se passe dans un temps et un lieu imprécis. Il commence souvent par « Once upon a time » (il était une fois) et finit souvent par « They lived happily ever after » (ils vécurent heureux pour toujours). On y trouve des personnages typiques : a king, a queen, a princess, a giant, a witch (une sorcière), a fairy (une fée).",
                "Une légende (a legend) part souvent d'un lieu réel ou d'un personnage qui a peut-être existé, et lui ajoute des aventures extraordinaires. Elle est transmise depuis très longtemps, d'abord à l'oral, et il en existe souvent plusieurs versions. Les deux genres sont racontés au prétérit : « Once upon a time, there was a poor boy... »",
              ],
              box: { label: "Définition", text: "A fairy tale : une histoire inventée, dans un monde magique, qui commence par « Once upon a time ». A legend : une histoire ancienne, liée à un lieu ou à un héros, entre réalité et imaginaire." },
            },
            {
              heading: "Trois légendes célèbres du Royaume-Uni",
              paragraphs: [
                "Robin Hood est un hors-la-loi (an outlaw) qui vit dans la forêt de Sherwood, près de Nottingham, avec ses compagnons, les Merry Men, parmi lesquels Little John et Friar Tuck. Il est un très bon archer. Selon la légende, il vole les riches pour donner aux pauvres et combat le shérif de Nottingham. Les premières ballades qui parlent de lui datent du Moyen Âge.",
                "King Arthur (le roi Arthur) est un roi légendaire de Grande-Bretagne. Dans l'histoire la plus connue, le jeune Arthur est le seul à réussir à retirer une épée plantée dans un rocher : il devient ainsi roi. Il est conseillé par l'enchanteur Merlin et réunit ses chevaliers (knights) autour de la Table ronde, à Camelot. Son épée magique s'appelle Excalibur ; selon les versions, c'est l'épée du rocher ou une épée offerte par la Dame du Lac.",
                "En Écosse, une légende plus récente parle d'un monstre qui vivrait dans le Loch Ness, un lac très long et très profond. On le surnomme Nessie. Beaucoup de personnes disent l'avoir vu, mais aucune preuve scientifique n'a jamais montré qu'il existe. C'est un bon exemple de légende : un lieu réel et une créature imaginaire.",
              ],
            },
            {
              heading: "Le lexique du merveilleux",
              paragraphs: [
                "Les personnages : a king (un roi), a queen (une reine), a prince, a princess, a knight (un chevalier), a giant (un géant), a dragon, a witch (une sorcière), a wizard (un magicien), a fairy (une fée), an outlaw (un hors-la-loi), a hero, a monster. Les lieux : a castle (un château), a forest, a cave (une grotte), a lake, a village, a kingdom (un royaume).",
                "Les objets et les actions : a sword (une épée), a bow and arrows (un arc et des flèches), a spell (un sort), a treasure, a ring. To fight (fought, combattre), to steal (stole, voler), to kill (killed), to save (saved, sauver), to rescue (rescued), to escape (escaped, s'échapper). Les adjectifs : brave (courageux), poor, rich, evil (méchant, maléfique), magic, strange, dark.",
              ],
              box: { label: "À retenir", text: "Le conte anglais le plus connu avec un géant est « Jack and the Beanstalk » (Jack et le haricot magique) : Jack grimpe le long d'une tige de haricot géante et arrive chez un géant." },
            },
            {
              heading: "Comment lire un récit en anglais",
              paragraphs: [
                "Pour comprendre un conte ou une légende, cherchez d'abord les réponses aux questions Who? (les personnages), Where? (le lieu), When? (le moment : once upon a time, long ago, one day) et What happened? (les événements). Les noms propres, les majuscules et les dates sont des indices faciles à repérer.",
                "Ensuite, relevez les verbes au prétérit : ils racontent les actions. Repérez aussi les mots de liaison (one day, suddenly, then, finally) qui montrent les étapes de l'histoire. Ne cherchez pas à traduire chaque mot : utilisez les mots transparents (dragon, castle, magic) et le contexte pour deviner le sens des autres.",
              ],
            },
          ],
          keyPoints: [
            "Un conte (fairy tale) commence souvent par « Once upon a time » et finit par « happily ever after ».",
            "Une légende (legend) mêle un lieu ou un héros réel à des aventures imaginaires.",
            "Robin Hood : un hors-la-loi de la forêt de Sherwood qui vole les riches pour donner aux pauvres.",
            "King Arthur : l'épée dans le rocher, Excalibur, Merlin, les chevaliers de la Table ronde.",
            "Nessie : le monstre légendaire du Loch Ness, en Écosse ; son existence n'a jamais été prouvée.",
            "Lire un récit : Who? Where? When? What happened? puis relever les verbes au prétérit.",
          ],
          example: {
            statement: "Lisez ce court récit (écrit pour l'exercice) et répondez en français : qui, où, quand, quoi ? « Long ago, in a dark forest in England, there lived a brave outlaw. One day, the sheriff stole money from a poor family. The outlaw followed the sheriff, took the money back and gave it to the family. »",
            solution: [
              "Who? Les personnages sont un hors-la-loi courageux (a brave outlaw), le shérif (the sheriff) et une famille pauvre (a poor family).",
              "Where? Dans une forêt sombre, en Angleterre (in a dark forest in England).",
              "When? Il y a très longtemps (long ago), puis un jour (one day).",
              "What happened? Le shérif a volé l'argent d'une famille pauvre ; le hors-la-loi l'a suivi, a repris l'argent et l'a rendu à la famille.",
              "Les verbes au prétérit sont lived, stole (steal), followed, took (take) et gave (give).",
              "Réponse : ce récit rappelle la légende de Robin Hood, le hors-la-loi qui aide les pauvres contre le shérif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez ces mots du merveilleux en anglais : a) un chevalier ; b) une épée ; c) un château ; d) une sorcière ; e) un géant ; f) un royaume.",
              hint: "Relisez la troisième partie du cours. Attention à l'orthographe de knight et de sword, qui contiennent des lettres muettes.",
              solution: [
                "a) un chevalier → a knight (le k ne se prononce pas).",
                "b) une épée → a sword (le w ne se prononce pas).",
                "c) un château → a castle (le t ne se prononce pas).",
                "d) une sorcière → a witch.",
                "e) un géant → a giant.",
                "f) un royaume → a kingdom.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte (écrit pour l'exercice) et répondez aux questions en français. « Once upon a time, a young boy called Arthur lived with Sir Ector and his son Kay. One day, there was a big tournament in London. In a churchyard, there was a sword in a stone. Many strong knights tried to pull it out, but they failed. Arthur pulled the sword out easily. Everybody was amazed, and Arthur became king. » 1) Où se passe la scène principale ? 2) Qu'ont essayé de faire les chevaliers ? Ont-ils réussi ? 3) Qu'a fait Arthur ? 4) Quelle a été la conséquence ? 5) Relevez trois verbes réguliers et deux verbes irréguliers au prétérit.",
              hint: "Cherchez les mots de lieu (in London, in a churchyard) et les verbes au prétérit. Became est le prétérit irrégulier de become (devenir).",
              solution: [
                "1) La scène se passe à Londres, dans un cimetière près d'une église (a churchyard), pendant un tournoi.",
                "2) Les chevaliers ont essayé de retirer l'épée du rocher (tried to pull it out), mais ils ont échoué (they failed).",
                "3) Arthur a retiré l'épée facilement (easily).",
                "4) Tout le monde a été stupéfait et Arthur est devenu roi.",
                "5) Verbes réguliers : lived, tried, pulled, failed. Verbes irréguliers : was (be), became (become).",
              ],
            },
            {
              level: 3,
              statement: "Défi : écrivez en anglais le début d'un conte de 5 ou 6 phrases au prétérit. Il doit commencer par « Once upon a time », présenter un héros et un lieu, contenir au moins un personnage du merveilleux (giant, witch, dragon, fairy...) et utiliser au moins quatre verbes au prétérit, dont deux irréguliers.",
              hint: "Suivez le schéma : présentation (Once upon a time, there was...), lieu (in a small village...), puis un événement (One day...). Vérifiez chaque verbe : est-il bien au prétérit ?",
              solution: [
                "Choisir le héros et le lieu : une jeune fille courageuse, dans un petit village au bord d'une forêt.",
                "Choisir l'élément magique : un dragon qui vit dans une grotte.",
                "Exemple de production : « Once upon a time, there was a brave girl called Lily. She lived in a small village near a dark forest. One day, a big red dragon came out of its cave and took all the sheep. The villagers were very scared. Lily took her bow and arrows and went into the forest. »",
                "Vérifier les verbes : was, lived (régulier), came (come), took (take), were, went (go) : six verbes au prétérit, dont trois irréguliers en plus de be.",
                "Résultat : un début de conte de 5 phrases, avec « Once upon a time », un héros, un lieu, un dragon et des verbes au prétérit.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un conte, avec leurs formules en anglais.",
            items: [
              "Once upon a time, there was... : la situation de départ.",
              "One day... : un événement change tout.",
              "Then... : le héros vit des aventures et des épreuves.",
              "Finally... : le problème est résolu.",
              "They lived happily ever after : la situation finale.",
            ],
          },
          quiz: [
            { q: "How does a fairy tale often begin?", options: ["Once upon a time", "Last weekend", "Dear Sir", "At the end of the day"], answer: 0, why: "« Once upon a time » est la formule d'ouverture des contes, comme « Il était une fois »." },
            { q: "Where did Robin Hood live, according to the legend?", options: ["In Edinburgh Castle", "In Camelot", "In Sherwood Forest", "Near Loch Ness"], answer: 2, why: "Robin Hood vit dans la forêt de Sherwood, près de Nottingham." },
            { q: "What is the name of King Arthur's magic sword?", options: ["Camelot", "Excalibur", "Merlin", "Guinevere"], answer: 1, why: "Excalibur est l'épée d'Arthur ; Camelot est son château et Merlin son conseiller." },
            { q: "What does « a knight » mean?", options: ["une nuit", "un messager à cheval", "une épée", "un chevalier"], answer: 3, why: "A knight est un chevalier ; à ne pas confondre avec night (la nuit), qui se prononce de la même façon." },
            { q: "Nessie is a legendary monster. Where does it live?", options: ["In a Scottish lake", "In the River Thames", "In a Welsh castle", "In Sherwood Forest"], answer: 0, why: "Nessie vivrait dans le Loch Ness, un lac d'Écosse." },
          ],
          trap: "Beaucoup d'élèves s'arrêtent sur chaque mot inconnu et perdent le fil du récit : il faut d'abord chercher qui, où, quand et ce qui se passe, puis s'appuyer sur les mots transparents et le contexte.",
          method: "Avant de lire, regardez le titre et les noms propres pour deviner l'histoire ; pendant la lecture, soulignez les verbes au prétérit ; après la lecture, résumez l'histoire en trois phrases : début, événement, fin.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'raconter-histoire',
          title: 'Raconter une histoire au passé',
          minutes: 30,
          objectives: [
            "Raconter des événements passés dans l'ordre avec des mots de liaison (first, then, after that, finally).",
            "Rédiger un court récit au prétérit, avec un début, un milieu et une fin.",
            "Rendre un récit vivant avec des adjectifs, des adverbes (suddenly, luckily) et des expressions de temps.",
          ],
          course: [
            {
              heading: "Construire un récit : début, milieu, fin",
              paragraphs: [
                "Un bon récit suit trois étapes. Au début (the beginning), on présente le moment, le lieu et les personnages : Last summer, I was on holiday in Scotland with my family. Au milieu (the middle), il se passe quelque chose d'inattendu : un problème, une rencontre, une surprise. À la fin (the end), on dit comment l'histoire se termine et ce que l'on a ressenti.",
                "Avant d'écrire, faites une liste rapide en français ou en anglais : qui ? où ? quand ? quel problème ? quelle fin ? Cette liste est votre plan. Un récit de collège n'a pas besoin d'être long : cinq à huit phrases claires valent mieux qu'un long texte plein d'erreurs.",
              ],
              box: { label: "Repère", text: "Beginning : when, where, who. Middle : the problem or the surprise. End : the solution and the feelings." },
            },
            {
              heading: "Les mots de liaison pour enchaîner les actions",
              paragraphs: [
                "Pour montrer l'ordre des actions, on utilise des mots de liaison (linking words) en début de phrase. First (d'abord), then (ensuite, puis), next (ensuite), after that (après cela), later (plus tard), finally ou in the end (finalement, à la fin). Exemple : First, we visited the castle. Then, we had lunch. After that, we went to the beach. Finally, we went back to the hotel.",
                "D'autres mots créent du suspense ou relient les idées. One day (un jour) lance l'histoire. Suddenly (soudain) annonce un événement inattendu. Luckily (heureusement) et unfortunately (malheureusement) donnent le point de vue du narrateur. And (et), but (mais), so (donc, alors) et because (parce que) relient deux idées dans une même phrase : It was late, so we went home.",
                "When (quand) relie deux actions : When I opened the door, I saw a cat. Attention : at the end signifie « à la fin de quelque chose » (at the end of the film), alors que in the end signifie « finalement ».",
              ],
              box: { label: "À retenir", text: "Ordre : first → then / next → after that → finally (in the end). Surprise : suddenly. Avis : luckily, unfortunately. Cause : because. Conséquence : so." },
            },
            {
              heading: "Les temps et les expressions de temps",
              paragraphs: [
                "Le récit se raconte au prétérit, du début à la fin : les verbes réguliers en -ed (walked, opened, decided) et les irréguliers (went, saw, found, ran). Pour décrire le décor ou les sentiments, on utilise was et were : It was dark. We were scared. Ne passez pas au présent au milieu de l'histoire.",
                "Les expressions de temps situent chaque étape : last Saturday, two years ago, in the morning, at 6 o'clock, a few minutes later (quelques minutes plus tard), the next day (le lendemain), that night (cette nuit-là). Elles rendent le récit plus précis et plus facile à suivre.",
              ],
            },
            {
              heading: "Rendre le récit vivant",
              paragraphs: [
                "Ajoutez des adjectifs pour décrire : a huge dog (un chien énorme), a strange noise (un bruit étrange), an old house, a beautiful day. Rappel : en anglais, l'adjectif se place avant le nom et ne prend jamais de -s : two black cats.",
                "Dites aussi ce que les personnages ressentent : I was scared (j'avais peur), I was surprised, we were happy, she was angry. Enfin, un peu de dialogue rend l'histoire plus vivante : « Help! » shouted my brother. Terminez par une phrase de conclusion : It was the best day of my holidays! ou I will never forget that day!",
              ],
              box: { label: "Règle", text: "L'adjectif se place avant le nom et reste invariable : a strange noise, three strange noises." },
            },
          ],
          keyPoints: [
            "Un récit a un début (qui, où, quand), un milieu (un problème ou une surprise) et une fin.",
            "Mots de liaison : first, then, next, after that, finally, in the end.",
            "One day lance l'histoire ; suddenly annonce une surprise ; luckily et unfortunately donnent un avis.",
            "Tout le récit est au prétérit ; was et were décrivent le décor et les sentiments.",
            "Expressions de temps : the next day, a few minutes later, that night, two years ago.",
            "Adjectifs avant le nom et invariables : a huge dog, two black cats.",
          ],
          example: {
            statement: "Remettez ces phrases en ordre et reliez-les avec first, then, suddenly et finally : « we found the dog in the garden » / « we looked for him in the street » / « our dog ran away » / « we heard a noise in the garden ».",
            solution: [
              "Chercher le point de départ : le problème est que le chien s'est enfui (our dog ran away). C'est le début.",
              "Ensuite, la famille le cherche dans la rue (we looked for him in the street).",
              "Un événement inattendu arrive : un bruit dans le jardin, introduit par suddenly.",
              "La fin heureuse : on retrouve le chien, introduit par finally.",
              "Réponse : « First, our dog ran away. Then, we looked for him in the street. Suddenly, we heard a noise in the garden. Finally, we found the dog in the garden. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le mot de liaison qui convient : first, then, suddenly, because, so, finally. « (a) ___, I got up and had breakfast. (b) ___, I took my bike to go to the park. It was cold, (c) ___ I wore my coat. In the park, (d) ___, I saw a fox! I was surprised (e) ___ foxes don't usually come out in the day. (f) ___, I went home and told my mum. »",
              hint: "First ouvre le récit et finally le ferme. So introduit une conséquence, because une cause, suddenly une surprise.",
              solution: [
                "(a) First : c'est la première action de la journée.",
                "(b) Then : l'action suivante.",
                "(c) so : il faisait froid, donc j'ai mis mon manteau (conséquence).",
                "(d) suddenly : voir un renard est une surprise.",
                "(e) because : j'étais surpris parce que les renards ne sortent pas d'habitude le jour (cause).",
                "(f) Finally : la dernière action de l'histoire.",
              ],
            },
            {
              level: 2,
              statement: "Mettez ce récit au prétérit. « On Saturday, my sister and I go to the zoo. It is sunny. First, we see the lions. Then, we eat a sandwich near the lake. Suddenly, a bird takes my sandwich! My sister laughs, but I am angry. »",
              hint: "Repérez les verbes irréguliers (go, see, eat, take) et le verbe be. Laugh est régulier.",
              solution: [
                "go → went ; is → was ; see → saw ; eat → ate.",
                "take → took ; laugh → laughed (régulier) ; am → was.",
                "Réponse : « On Saturday, my sister and I went to the zoo. It was sunny. First, we saw the lions. Then, we ate a sandwich near the lake. Suddenly, a bird took my sandwich! My sister laughed, but I was angry. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : racontez en anglais, en 8 à 10 phrases, une aventure imaginaire qui vous est arrivée pendant une sortie scolaire au musée. Utilisez au moins cinq mots de liaison différents, au moins six verbes au prétérit (dont trois irréguliers), deux adjectifs et une phrase qui exprime un sentiment.",
              hint: "Faites d'abord votre plan en trois lignes : début (quand, où, avec qui), problème ou surprise, fin. Puis écrivez une phrase par idée et vérifiez chaque verbe.",
              solution: [
                "Plan : début (last month, a school trip to a museum in London) ; surprise (une statue qui semble bouger, en réalité un acteur) ; fin (tout le monde rit, une journée inoubliable).",
                "Exemple de production : « Last month, my class went on a school trip to a big museum in London. First, we visited a room with old Egyptian objects. Then, our teacher showed us a huge statue of a king. Suddenly, the statue moved! We were very scared, so we ran to the door. After that, a man laughed and spoke to us. He wasn't a statue, he was an actor in a costume! Luckily, he was very nice and he explained his job to us. In the end, everybody laughed. It was a strange but wonderful day! »",
                "Vérifier les mots de liaison : first, then, suddenly, so, after that, luckily, in the end (sept).",
                "Vérifier les verbes : went, visited, showed, moved, ran, laughed, spoke, explained, were, was (irréguliers : went, ran, spoke).",
                "Vérifier les adjectifs (big, old, huge, strange, wonderful) et le sentiment (We were very scared).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les mots de liaison et le récit au passé.",
            statements: [
              { text: "« Suddenly » annonce un événement inattendu.", true: true, why: "Suddenly signifie « soudain » : il crée la surprise." },
              { text: "« In the end » et « at the end » veulent dire exactement la même chose.", true: false, why: "In the end signifie « finalement » ; at the end of signifie « à la fin de quelque chose »." },
              { text: "Dans un récit au passé, on peut passer au présent au milieu de l'histoire sans problème.", true: false, why: "En anglais, le récit reste au prétérit du début à la fin." },
              { text: "« So » introduit une conséquence : It was late, so we went home.", true: true, why: "So signifie « donc, alors »." },
              { text: "« Two blacks cats » est correct car il y a deux chats.", true: false, why: "L'adjectif anglais est invariable : two black cats." },
              { text: "« Luckily » donne un avis positif du narrateur.", true: true, why: "Luckily signifie « heureusement »." },
            ],
          },
          quiz: [
            { q: "Which word introduces a surprise?", options: ["Afterwards", "Because", "Suddenly", "Finally"], answer: 2, why: "Suddenly (soudain) annonce un événement inattendu." },
            { q: "Choose the correct sentence.", options: ["Then, we goes to the beach.", "Then, we went to the beach.", "Then, we go to the beach yesterday.", "Then, we did went to the beach."], answer: 1, why: "Le récit est au prétérit : went, sans did dans une phrase affirmative." },
            { q: "« It was raining, ___ we stayed at home. »", options: ["because", "so", "but", "first"], answer: 1, why: "So introduit la conséquence : il pleuvait, donc nous sommes restés à la maison." },
            { q: "What does « the next day » mean?", options: ["le lendemain", "le jour d'avant", "un jour", "aujourd'hui"], answer: 0, why: "The next day signifie le lendemain, le jour suivant." },
            { q: "Which word is the best to end a story?", options: ["Once upon a time", "Suddenly", "First", "In the end"], answer: 3, why: "In the end (finalement) introduit la fin de l'histoire." },
          ],
          trap: "L'erreur fréquente est de commencer le récit au prétérit puis de glisser vers le présent (« Then we see a dog »), ou d'oublier les formes irrégulières : chaque verbe d'action doit être au prétérit.",
          method: "Après avoir écrit, relisez votre récit en soulignant chaque verbe : s'il n'est pas au prétérit, corrigez-le ; puis entourez les mots de liaison pour vérifier que chaque étape est bien annoncée.",
        },
      ],
    },
    {
      id: 'langues-lieux-histoires',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'english-world',
          title: 'L\'anglais dans le monde',
          minutes: 25,
          objectives: [
            "Situer les principaux pays où l'on parle anglais, sur tous les continents.",
            "Expliquer simplement pourquoi l'anglais est parlé dans le monde entier.",
            "Repérer quelques différences entre l'anglais britannique et l'anglais américain.",
            "Nommer des pays, des nationalités et des langues en anglais (Where are you from? I'm Irish).",
          ],
          course: [
            {
              heading: "Une langue parlée sur tous les continents",
              paragraphs: [
                "L'anglais est la langue officielle ou l'une des langues officielles de nombreux pays, sur les cinq continents. En Europe : le Royaume-Uni (the United Kingdom), l'Irlande (Ireland, avec l'irlandais) et Malte (avec le maltais). En Amérique : les États-Unis (the USA), le Canada (avec le français) et la Jamaïque (Jamaica). En Océanie : l'Australie (Australia) et la Nouvelle-Zélande (New Zealand).",
                "En Afrique, l'anglais est une langue officielle au Nigeria, au Ghana, au Kenya (avec le swahili) ou en Afrique du Sud (avec d'autres langues). En Asie, il est très utilisé en Inde, à côté du hindi et de nombreuses autres langues, et à Singapour. Dans beaucoup de ces pays, les habitants parlent une autre langue à la maison et l'anglais à l'école, au travail ou avec des personnes d'autres régions.",
                "Au total, plus d'un milliard de personnes parlent anglais, comme langue maternelle ou comme langue apprise. C'est aujourd'hui la langue la plus utilisée pour communiquer entre personnes de pays différents.",
              ],
              box: { label: "Repère", text: "Pays anglophones : the UK, Ireland, the USA, Canada, Jamaica, Australia, New Zealand, South Africa, Nigeria, Kenya, India... Attention : on dit the UK et the USA, avec the." },
            },
            {
              heading: "Pourquoi l'anglais s'est-il répandu ?",
              paragraphs: [
                "À partir du XVIIe siècle, l'Angleterre puis la Grande-Bretagne fondent des colonies en Amérique du Nord, dans les Caraïbes, puis en Inde, en Australie (à partir de 1788) et en Afrique. Au début du XXe siècle, l'Empire britannique (the British Empire) est le plus vaste empire de l'histoire. Les colons, les marchands et les administrateurs y apportent leur langue.",
                "Au XXe siècle, les États-Unis deviennent la première puissance du monde. Leur cinéma, leur musique, leurs séries, puis Internet et les grandes entreprises du numérique diffusent l'anglais partout. Aujourd'hui, c'est la langue internationale du transport aérien, de la science, du commerce et de nombreuses compétitions sportives.",
                "La plupart des anciennes colonies britanniques sont devenues indépendantes. Beaucoup font partie du Commonwealth, une organisation de plus de cinquante pays, presque tous d'anciens territoires de l'Empire, qui coopèrent et organisent par exemple les Jeux du Commonwealth.",
              ],
              box: { label: "À retenir", text: "Deux raisons principales : l'Empire britannique (XVIIe au XXe siècle), puis l'influence des États-Unis au XXe siècle (cinéma, musique, Internet)." },
            },
            {
              heading: "Des accents et des mots différents",
              paragraphs: [
                "L'anglais n'est pas le même partout : on reconnaît un Écossais, un Irlandais, un Américain ou un Australien à son accent. Il y a aussi des différences de vocabulaire entre l'anglais britannique (British English) et l'anglais américain (American English). Un appartement : a flat (UK), an apartment (US). L'automne : autumn (UK), fall (US). Les vacances : holidays (UK), vacation (US). Un ascenseur : a lift (UK), an elevator (US). Les frites : chips (UK), French fries (US). Un biscuit : a biscuit (UK), a cookie (US).",
                "L'orthographe change aussi pour certains mots : colour (UK) et color (US), favourite et favorite, centre et center. Les deux sont corrects : il faut simplement rester cohérent dans un même texte.",
                "Enfin, l'anglais a emprunté des mots à beaucoup de langues. Après la conquête normande de 1066, des milliers de mots français sont entrés en anglais : beef (bœuf), pork (porc), castle (château), prince, table. C'est pourquoi tant de mots anglais vous semblent familiers ! Plus tard, l'anglais a aussi emprunté kangaroo à une langue aborigène d'Australie, et shampoo ou pyjamas à des langues de l'Inde.",
              ],
            },
            {
              heading: "Pays, nationalités et langues",
              paragraphs: [
                "Pour demander l'origine de quelqu'un, on dit « Where are you from? » On répond avec le pays ou la nationalité : I'm from Ireland. I'm Irish. On peut aussi dire la langue parlée : In Ireland, people speak English and Irish.",
                "En anglais, les noms de pays, les nationalités et les langues prennent toujours une majuscule, même quand ce sont des adjectifs : an English teacher, a Scottish castle, she speaks French. Quelques nationalités à connaître : Britain → British, England → English, Scotland → Scottish, Wales → Welsh, Ireland → Irish, the USA → American, Canada → Canadian, Australia → Australian, India → Indian, Jamaica → Jamaican.",
              ],
              box: { label: "Règle", text: "Pays, nationalités et langues prennent une majuscule : France, French ; Wales, Welsh ; Canada, Canadian. Question : Where are you from? Réponse : I'm from Canada. I'm Canadian." },
            },
          ],
          keyPoints: [
            "L'anglais est parlé sur les cinq continents : UK, Ireland, USA, Canada, Australia, New Zealand, India, Nigeria...",
            "Plus d'un milliard de personnes parlent anglais, langue maternelle ou langue apprise.",
            "Il s'est répandu avec l'Empire britannique, puis avec l'influence des États-Unis au XXe siècle.",
            "UK / US : flat / apartment, autumn / fall, holidays / vacation, lift / elevator, colour / color.",
            "Après 1066, beaucoup de mots français sont entrés en anglais (beef, castle, prince).",
            "Nationalités et langues avec majuscule : Welsh, Irish, Canadian, Australian.",
          ],
          example: {
            statement: "Présentez l'Australie en trois phrases en anglais : le continent, la capitale et la langue, puis la nationalité des habitants.",
            solution: [
              "Le continent : l'Australie est en Océanie, on dit in Oceania.",
              "La capitale : Canberra (et non Sydney, qui est la plus grande ville). La langue : English.",
              "La nationalité : Australia → Australian, avec une majuscule.",
              "Réponse : « Australia is a country in Oceania. Its capital is Canberra and people speak English. The people are Australian. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la nationalité correspondant à chaque pays, sans oublier la majuscule : a) Ireland ; b) Canada ; c) the USA ; d) Scotland ; e) Wales ; f) Australia.",
              hint: "Relisez la dernière partie du cours. Deux nationalités se terminent par -ish et une ne ressemble presque pas au nom du pays.",
              solution: [
                "a) Ireland → Irish.",
                "b) Canada → Canadian.",
                "c) the USA → American.",
                "d) Scotland → Scottish.",
                "e) Wales → Welsh (c'est la nationalité qui ressemble le moins au nom du pays).",
                "f) Australia → Australian.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ces trois présentations (personnages inventés) et répondez en français. « Hi! I'm Priya. I live in Mumbai, in India. At home, I speak Marathi with my parents, but at school, all my lessons are in English. » « Hello, I'm Liam and I'm Canadian. I live in Toronto. In Canada, there are two official languages, English and French. » « Hi, my name is Grace. I'm from Nairobi, in Kenya. I speak Swahili and English. » 1) Quelles langues parle Priya, et où ? 2) Quelles sont les deux langues officielles du Canada ? 3) De quel pays vient Grace ? 4) Quel point commun ont ces trois jeunes ?",
              hint: "Cherchez les noms de langues : ils commencent par une majuscule. Pour la question 4, demandez-vous quelle langue revient dans les trois textes.",
              solution: [
                "1) Priya parle le marathi à la maison avec ses parents et l'anglais à l'école, où tous ses cours sont en anglais.",
                "2) Les deux langues officielles du Canada sont l'anglais et le français.",
                "3) Grace vient du Kenya ; elle habite à Nairobi.",
                "4) Ils parlent tous les trois anglais, même s'ils vivent sur trois continents différents (Asie, Amérique, Afrique) ; Priya et Grace parlent aussi une autre langue.",
              ],
            },
            {
              level: 3,
              statement: "Défi : ce message a été écrit par une jeune Américaine, Emily. Réécrivez-le en anglais britannique en changeant les six mots américains et l'orthographe de deux mots, puis traduisez-le en français. « Last fall, we went on vacation to Chicago. We stayed in an apartment on the tenth floor, but the elevator didn't work! In the evening, we ate French fries and cookies. My favorite color is blue. »",
              hint: "Cherchez les mots du cours : fall, vacation, apartment, elevator, French fries, cookies. Attention, favorite et color s'écrivent différemment en anglais britannique.",
              solution: [
                "Vocabulaire : fall → autumn ; vacation → holiday ; apartment → flat ; elevator → lift ; French fries → chips ; cookies → biscuits.",
                "Orthographe : favorite → favourite ; color → colour.",
                "Version britannique : « Last autumn, we went on holiday to Chicago. We stayed in a flat on the tenth floor, but the lift didn't work! In the evening, we ate chips and biscuits. My favourite colour is blue. »",
                "Attention à l'article : an apartment devient a flat, car flat commence par une consonne.",
                "Traduction : « L'automne dernier, nous sommes partis en vacances à Chicago. Nous avons logé dans un appartement au dixième étage, mais l'ascenseur ne marchait pas ! Le soir, nous avons mangé des frites et des biscuits. Ma couleur préférée est le bleu. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque pays anglophone à sa capitale.",
            pairs: [
              { left: "The USA", right: "Washington, D.C." },
              { left: "Canada", right: "Ottawa" },
              { left: "Australia", right: "Canberra" },
              { left: "New Zealand", right: "Wellington" },
              { left: "Ireland", right: "Dublin" },
              { left: "India", right: "New Delhi" },
            ],
          },
          quiz: [
            { q: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne", "Perth"], answer: 1, why: "La capitale est Canberra ; Sydney est la plus grande ville du pays." },
            { q: "Why do people speak English in Australia, India or Jamaica?", options: ["They were British colonies.", "English is easier than other languages.", "The Romans spoke English there.", "It is a law of the United Nations."], answer: 0, why: "Ces pays ont fait partie de l'Empire britannique, qui y a apporté l'anglais." },
            { q: "A person from Wales is...", options: ["Wales", "Walish", "Welsh", "English"], answer: 2, why: "La nationalité du pays de Galles est Welsh." },
            { q: "In American English, « un appartement » is...", options: ["a flat", "an apartment", "an elevator", "a living room"], answer: 1, why: "Apartment est américain ; en anglais britannique, on dit a flat." },
            { q: "Which country has two official languages, English and French?", options: ["Australia", "Jamaica", "New Zealand", "Canada"], answer: 3, why: "Au Canada, l'anglais et le français sont les deux langues officielles." },
          ],
          trap: "L'erreur fréquente est d'oublier la majuscule aux nationalités et aux langues (« an english teacher ») ou de croire que Sydney est la capitale de l'Australie : c'est Canberra.",
          method: "Faites une carte du monde de l'anglais : placez chaque pays sur son continent, écrivez à côté sa capitale et sa nationalité en anglais, puis récitez-la à voix haute (Ireland, Dublin, Irish).",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'comparatifs-superlatifs',
          title: 'Comparer : comparatifs et superlatifs',
          minutes: 35,
          objectives: [
            "Former le comparatif de supériorité des adjectifs courts (-er than) et longs (more... than).",
            "Former le superlatif (the -est, the most) et l'employer avec in ou of.",
            "Employer les formes irrégulières good, bad et far.",
            "Exprimer l'égalité et l'infériorité avec as... as et not as... as.",
          ],
          course: [
            {
              heading: "Le comparatif des adjectifs courts : -er than",
              paragraphs: [
                "Pour dire qu'une chose est plus grande, plus froide ou plus rapide qu'une autre, on ajoute -er aux adjectifs courts (une syllabe), puis than (que) : London is bigger than Oxford. My sister is taller than me. Today is colder than yesterday.",
                "L'orthographe suit des règles simples. Adjectif terminé par -e : on ajoute -r (nice → nicer, large → larger). Adjectif court terminé par consonne + voyelle + consonne : on double la consonne (big → bigger, hot → hotter, thin → thinner). Adjectif de deux syllabes terminé par -y : le y devient i (happy → happier, easy → easier, funny → funnier, busy → busier).",
              ],
              box: { label: "Règle", text: "Adjectif court + -er + than : cold → colder than. Attention : nice → nicer ; big → bigger ; happy → happier." },
            },
            {
              heading: "Le comparatif des adjectifs longs : more... than",
              paragraphs: [
                "Les adjectifs longs (de deux syllabes ou plus, sauf ceux en -y) ne prennent pas -er : on place more devant l'adjectif. Expensive → more expensive, interesting → more interesting, beautiful → more beautiful, famous → more famous, modern → more modern. Exemple : A trip to New York is more expensive than a trip to Dublin.",
                "On peut aussi exprimer l'infériorité avec less... than (moins... que) : This film is less interesting than the book. Mais en anglais, on préfère souvent tourner la phrase autrement, avec not as... as (voir plus bas).",
              ],
              box: { label: "Règle", text: "More + adjectif long + than : interesting → more interesting than. On ne dit jamais « more bigger » ni « expensiver »." },
            },
            {
              heading: "Le superlatif : the -est, the most",
              paragraphs: [
                "Le superlatif sert à dire qu'une chose est la plus grande, la plus belle, la meilleure d'un groupe. Pour les adjectifs courts, on met the devant et -est à la fin, avec les mêmes règles d'orthographe que pour le comparatif : the tallest, the nicest, the biggest, the happiest. Pour les adjectifs longs, on dit the most : the most expensive, the most beautiful.",
                "Après un superlatif, on emploie in devant un lieu ou un groupe : Ben Nevis is the highest mountain in the UK. Lucy is the youngest in my class. On emploie of devant une période ou un nombre : It was the best day of my life. He is the tallest of the three brothers.",
                "Exemples réels : Ben Nevis, en Écosse, mesure 1 345 m ; c'est la plus haute montagne du Royaume-Uni. London is the biggest city in the UK. The blue whale is the biggest animal in the world (la baleine bleue est le plus gros animal du monde).",
              ],
              box: { label: "Formule", text: "Court : the + adjectif + -est (the coldest). Long : the most + adjectif (the most famous). Puis in + lieu ou groupe : the tallest boy in the class." },
            },
            {
              heading: "Les irréguliers et la comparaison d'égalité",
              paragraphs: [
                "Trois adjectifs très courants sont irréguliers : good → better → the best (bon, meilleur, le meilleur) ; bad → worse → the worst (mauvais, pire, le pire) ; far → farther ou further → the farthest ou the furthest (loin, plus loin, le plus loin). Exemple : My mark is better than yours, but Tom's mark is the best in the class.",
                "Pour exprimer l'égalité, on encadre l'adjectif avec as... as (aussi... que) : Tom is as tall as Sam. Pour dire qu'une chose est moins... que l'autre, on emploie not as... as : The bus is not as fast as the train (le bus est moins rapide que le train). Dans ces tournures, l'adjectif reste toujours à sa forme simple, sans -er ni more.",
              ],
              box: { label: "À retenir", text: "good → better → the best ; bad → worse → the worst ; far → farther / further → the farthest / the furthest. Égalité : as tall as. Infériorité : not as tall as." },
            },
          ],
          keyPoints: [
            "Adjectif court : -er than (colder than) et the -est (the coldest).",
            "Orthographe : nice → nicer ; big → bigger ; happy → happier, the happiest.",
            "Adjectif long : more... than (more expensive than) et the most (the most expensive).",
            "Superlatif + in pour un lieu ou un groupe : the highest mountain in the UK.",
            "Irréguliers : good, better, the best ; bad, worse, the worst ; far, farther, the farthest.",
            "Égalité : as... as ; infériorité : not as... as ; than après un comparatif, jamais that.",
          ],
          example: {
            statement: "Comparez ces trois montagnes du Royaume-Uni avec un comparatif et un superlatif : Ben Nevis (Écosse, 1 345 m), Snowdon (pays de Galles, 1 085 m), Scafell Pike (Angleterre, 978 m).",
            solution: [
              "Choisir l'adjectif : high (haut), un adjectif court, donc higher than et the highest.",
              "Comparer deux montagnes : 1 085 m est plus que 978 m, donc Snowdon is higher than Scafell Pike.",
              "Trouver la plus haute des trois : 1 345 m est la plus grande valeur, donc Ben Nevis is the highest.",
              "Ajouter in + lieu après le superlatif : the highest of the three mountains, ou the highest mountain in the UK.",
              "Réponse : « Snowdon is higher than Scafell Pike. Ben Nevis is the highest mountain in the UK. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le comparatif et le superlatif de ces adjectifs : a) cold ; b) big ; c) happy ; d) expensive ; e) good ; f) bad.",
              hint: "Pour chaque adjectif, demandez-vous s'il est court, long, terminé par -y, ou irrégulier.",
              solution: [
                "a) cold → colder → the coldest (court).",
                "b) big → bigger → the biggest (doublement du g).",
                "c) happy → happier → the happiest (y → i).",
                "d) expensive → more expensive → the most expensive (long).",
                "e) good → better → the best (irrégulier).",
                "f) bad → worse → the worst (irrégulier).",
              ],
            },
            {
              level: 2,
              statement: "Comparez ces deux hôtels (données fictives) en écrivant quatre phrases avec un comparatif : The Seaview Hotel : 120 £ la nuit, à 200 m de la plage, 50 chambres, 4 étoiles. The Green Park Hotel : 75 £ la nuit, à 3 km de la plage, 20 chambres, 3 étoiles. Utilisez expensive (ou cheap), close (proche), big et good.",
              hint: "Close et cheap sont courts : closer, cheaper. Expensive est long : more expensive. Good est irrégulier : better.",
              solution: [
                "Prix : 120 £ > 75 £, donc « The Seaview Hotel is more expensive than the Green Park Hotel. » (ou : The Green Park Hotel is cheaper than the Seaview Hotel.)",
                "Distance : 200 m < 3 km, donc « The Seaview Hotel is closer to the beach than the Green Park Hotel. » (close finit par -e, on ajoute -r)",
                "Taille : 50 chambres > 20 chambres, donc « The Seaview Hotel is bigger than the Green Park Hotel. »",
                "Qualité : 4 étoiles > 3 étoiles, donc « The Seaview Hotel is better than the Green Park Hotel. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici trois villes imaginaires (données fictives). Kingsbridge : 12 000 habitants, fondée en 1650, à 80 km de Londres. Oakford : 45 000 habitants, fondée en 1820, à 150 km de Londres. Millbury : 12 000 habitants, fondée en 1200, à 300 km de Londres. Écrivez cinq phrases : deux superlatifs avec big et old, une égalité avec as... as, un superlatif avec far, et une phrase avec not as... as.",
              hint: "Comparez d'abord les nombres pour chaque critère. La ville la plus ancienne est celle qui a été fondée en premier, donc la plus petite date.",
              solution: [
                "Taille : 45 000 est le plus grand nombre, donc « Oakford is the biggest town. »",
                "Âge : 1200 est la date la plus ancienne, donc « Millbury is the oldest town. »",
                "Égalité : Kingsbridge et Millbury ont toutes les deux 12 000 habitants, donc « Kingsbridge is as big as Millbury. »",
                "Distance : 300 km est la plus grande distance, donc « Millbury is the farthest (ou the furthest) from London. »",
                "Infériorité : 12 000 < 45 000, donc par exemple « Kingsbridge is not as big as Oakford. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces comparaisons sont-elles correctes ?",
            statements: [
              { text: "« My brother is taller than me. »", true: true, why: "Tall est court : taller than." },
              { text: "« This book is more interesting that the film. »", true: false, why: "Après un comparatif, on emploie than, jamais that." },
              { text: "« Today is the most hot day of the year. »", true: false, why: "Hot est court : the hottest, avec doublement du t." },
              { text: "« She is as tall as her mother. »", true: true, why: "L'égalité se dit as + adjectif + as." },
              { text: "« My mark is more good than yours. »", true: false, why: "Good est irrégulier : better than." },
              { text: "« It is the biggest city in the country. »", true: true, why: "Big devient biggest, et on emploie in devant un lieu." },
              { text: "« English is easyer than maths for me. »", true: false, why: "Easy finit par consonne + y : easier." },
            ],
          },
          quiz: [
            { q: "Choose the correct comparative of « big ».", options: ["biger", "more big", "bigger", "the biggest"], answer: 2, why: "Big finit par consonne + voyelle + consonne : on double le g, bigger." },
            { q: "« Paris is ___ than Lyon. »", options: ["more bigger", "bigger", "big", "the biggest"], answer: 1, why: "On compare deux villes : comparatif simple bigger than, sans more." },
            { q: "What is the superlative of « bad »?", options: ["the worst", "the baddest", "the most bad", "the worse"], answer: 0, why: "Bad est irrégulier : bad, worse, the worst." },
            { q: "« Ben Nevis is the highest mountain ___ the UK. »", options: ["of", "than", "that", "in"], answer: 3, why: "Après un superlatif, on emploie in devant un lieu." },
            { q: "Which sentence means « Le bus est moins rapide que le train »?", options: ["The bus is as fast as the train.", "The bus is not as fast as the train.", "The bus is faster than the train.", "The bus is the fastest of all the vehicles."], answer: 1, why: "Not as... as exprime l'infériorité : le bus n'est pas aussi rapide que le train." },
          ],
          trap: "Les deux erreurs les plus fréquentes sont d'écrire that au lieu de than (« bigger that ») et de cumuler les deux formes (« more bigger ») : un adjectif prend soit -er, soit more, jamais les deux.",
          method: "Avant d'écrire un comparatif, comptez les syllabes de l'adjectif : une syllabe (ou deux avec -y), ajoutez -er ou -est ; sinon, mettez more ou the most. Vérifiez ensuite les trois irréguliers : good, bad, far.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'directions',
          title: 'Demander et indiquer son chemin',
          minutes: 30,
          objectives: [
            "Demander poliment son chemin (Excuse me, how can I get to...?).",
            "Indiquer un itinéraire avec l'impératif (go straight on, turn left, take the second street on the right).",
            "Situer un lieu avec des prépositions (next to, opposite, between, in front of, behind).",
            "Nommer les principaux lieux d'une ville.",
          ],
          course: [
            {
              heading: "Demander son chemin poliment",
              paragraphs: [
                "Pour attirer l'attention d'un passant, on commence toujours par « Excuse me » (excusez-moi). On pose ensuite la question : Where is the station, please? How can I get to the museum? Can you tell me the way to the hospital, please? Is there a bank near here? (Y a-t-il une banque près d'ici ?)",
                "Si vous n'avez pas compris, demandez de répéter : Sorry, can you repeat, please? Could you speak more slowly, please? Pour vérifier, reformulez : So, I turn left at the traffic lights? À la fin, on remercie : Thank you very much! ou Thanks a lot! La personne répond : You're welcome (de rien).",
              ],
              box: { label: "À retenir", text: "Excuse me, how can I get to the station, please? / Is there a bank near here? / Thank you very much! / You're welcome." },
            },
            {
              heading: "Indiquer le chemin : l'impératif",
              paragraphs: [
                "Pour donner des indications, on utilise l'impératif : la base verbale, sans sujet. Go straight on (allez tout droit ; en anglais américain, go straight ahead). Turn left (tournez à gauche), turn right (tournez à droite). Take the first street on the left (prenez la première rue à gauche). Take the second street on the right (prenez la deuxième rue à droite).",
                "D'autres verbes sont utiles : go past the church (passez devant l'église), cross the street (traversez la rue), cross the bridge (traversez le pont), go along the river (longez la rivière), go up ou go down the street (montez ou descendez la rue). On précise souvent l'endroit : at the traffic lights (aux feux), at the roundabout (au rond-point), at the crossroads (au carrefour), at the corner (au coin).",
                "Pour une interdiction ou un conseil, l'impératif négatif se forme avec Don't + base verbale : Don't cross here, it's dangerous! Don't turn left. Enfin, on indique où se trouve le lieu à l'arrivée : It's on your left (c'est sur votre gauche). It's on your right.",
              ],
              box: { label: "Règle", text: "Impératif = base verbale sans sujet : Turn left. Go straight on. Négatif : Don't + base verbale : Don't cross here." },
            },
            {
              heading: "Situer un lieu : les prépositions",
              paragraphs: [
                "Pour préciser où se trouve un bâtiment, on utilise des prépositions de lieu. Next to (à côté de) : The bakery is next to the bank. Opposite (en face de) : The museum is opposite the park. Between... and... (entre... et...) : The café is between the cinema and the post office.",
                "In front of (devant) : The bus stop is in front of the school. Behind (derrière) : The car park is behind the supermarket. Near (près de) : My house is near the station. On the corner of (au coin de) : The shop is on the corner of King Street and Mill Road.",
              ],
              box: { label: "Attention", text: "Opposite signifie « en face de », et non « à l'opposé ». Next to signifie « à côté de », et non « ensuite »." },
            },
            {
              heading: "Les lieux de la ville",
              paragraphs: [
                "Voici les principaux lieux d'une ville : the station (la gare), the bus stop (l'arrêt de bus), the town hall (la mairie), the post office (la poste), the bank, the hospital, the police station (le commissariat), the church (l'église), the museum, the cinema, the swimming pool (la piscine), the park, the supermarket, the bakery (la boulangerie), the car park (le parking, en anglais américain the parking lot).",
                "Attention à un faux ami très fréquent : the library est la bibliothèque, où l'on emprunte des livres ; la librairie, où l'on achète des livres, se dit the bookshop (UK) ou the bookstore (US). La pharmacie se dit the chemist's en anglais britannique et the pharmacy en anglais américain.",
              ],
            },
          ],
          keyPoints: [
            "Demander : Excuse me, how can I get to...? / Where is..., please? / Is there a... near here?",
            "Indiquer avec l'impératif (base verbale) : go straight on, turn left, turn right, cross the street.",
            "Take the first / second street on the left / on the right. It's on your left.",
            "Repères : at the traffic lights, at the roundabout, at the crossroads, at the corner.",
            "Prépositions : next to, opposite, between... and..., in front of, behind, near.",
            "Faux ami : library = bibliothèque ; bookshop = librairie.",
          ],
          example: {
            statement: "Vous êtes devant la gare. Un touriste vous demande le chemin du musée. Le musée se trouve dans la deuxième rue à gauche, juste après la banque, en face du parc. Écrivez le dialogue en anglais.",
            solution: [
              "Le touriste attire l'attention et pose la question : « Excuse me, how can I get to the museum, please? »",
              "Donner la direction avec l'impératif : go straight on, puis take the second street on the left.",
              "Ajouter un repère et situer le musée : go past the bank ; the museum is opposite the park.",
              "Le touriste remercie et vous répondez poliment.",
              "Réponse : « Excuse me, how can I get to the museum, please? » « Go straight on and take the second street on the left. Go past the bank. The museum is opposite the park. » « Thank you very much! » « You're welcome. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais : a) Tournez à droite. b) Allez tout droit. c) Prenez la première rue à gauche. d) Traversez le pont. e) en face de la poste ; f) entre la banque et le cinéma.",
              hint: "Les phrases a à d sont à l'impératif : commencez directement par le verbe, sans « you ».",
              solution: [
                "a) Turn right.",
                "b) Go straight on. (anglais américain : Go straight ahead.)",
                "c) Take the first street on the left.",
                "d) Cross the bridge.",
                "e) opposite the post office.",
                "f) between the bank and the cinema.",
              ],
            },
            {
              level: 2,
              statement: "Voici un plan (fictif). Vous sortez de la gare et vous êtes dans High Street, une rue toute droite. En marchant tout droit, vous voyez d'abord Park Lane sur votre gauche, puis Church Street sur votre droite, puis Mill Road sur votre gauche. Dans Church Street, la piscine est sur la gauche et la bibliothèque sur la droite. Dans Mill Road, le musée est à côté de la boulangerie. Où arrivez-vous ? a) « Go straight on. Take the first street on the right. It's on your left. » b) « Go straight on and take the second street on the left. It's next to the bakery. »",
              hint: "Comptez les rues d'un seul côté à la fois : « the first street on the right » est la première rue que vous trouvez sur votre droite, même s'il y a déjà eu une rue à gauche avant.",
              solution: [
                "a) La première rue à droite est Church Street (Park Lane est à gauche, elle ne compte pas). Dans Church Street, ce qui est sur votre gauche est la piscine.",
                "Réponse a) : vous arrivez à la piscine (the swimming pool).",
                "b) Les rues sur votre gauche sont d'abord Park Lane, puis Mill Road : la deuxième rue à gauche est donc Mill Road. Le lieu à côté de la boulangerie est le musée.",
                "Réponse b) : vous arrivez au musée (the museum).",
              ],
            },
            {
              level: 3,
              statement: "Défi : avec le plan de l'exercice 2, écrivez en anglais un dialogue complet entre une touriste qui sort de la gare et un habitant. Elle cherche la bibliothèque. Le dialogue doit contenir une formule pour attirer l'attention, une question, au moins trois indications à l'impératif dont une à la forme négative, une demande de vérification et des remerciements.",
              hint: "Trouvez d'abord le trajet : quelle rue, de quel côté ? Pour la forme négative, pensez à une erreur que la touriste pourrait faire (Don't take...).",
              solution: [
                "Trajet : la bibliothèque est dans Church Street, la première rue à droite, et elle se trouve sur la droite de cette rue.",
                "Indication négative possible : ne pas prendre la première rue à gauche, Park Lane (Don't take the first street on the left).",
                "Exemple de dialogue : « Excuse me, how can I get to the library, please? » « Go straight on along High Street. Don't take the first street on the left, it's Park Lane. Take the first street on the right, it's Church Street. The library is on your right. » « So, the first street on the right? » « Yes, that's right. » « Thank you very much! » « You're welcome. »",
                "Vérifier : Excuse me (attirer l'attention), how can I get to (question), go straight on, don't take, take (impératifs), So... ? (vérification), Thank you very much (remerciements).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre ce dialogue dans la rue.",
            items: [
              "Excuse me!",
              "How can I get to the museum, please?",
              "Go straight on and take the second street on the left.",
              "So, the second street on the left?",
              "Yes, that's right. It's opposite the bank.",
              "Thank you very much!",
              "You're welcome.",
            ],
          },
          quiz: [
            { q: "How do you say « Tournez à gauche »?", options: ["Turn right.", "Turn left.", "Go left on.", "You turn at left."], answer: 1, why: "L'impératif est la base verbale sans sujet : Turn left." },
            { q: "What does « opposite » mean?", options: ["à côté de", "derrière", "en face de", "à l'opposé de"], answer: 2, why: "Opposite signifie « en face de »." },
            { q: "Where do you borrow books?", options: ["at the library", "at the bookshop", "at the bakery", "at the chemist's"], answer: 0, why: "On emprunte des livres à la bibliothèque, the library ; à la librairie (bookshop), on les achète." },
            { q: "Choose the correct negative instruction.", options: ["Not cross here.", "You don't cross here.", "No crossing here you.", "Don't cross here."], answer: 3, why: "L'impératif négatif se forme avec Don't + base verbale." },
            { q: "Somebody says « Thank you! ». What do you answer?", options: ["You're welcome.", "Excuse me.", "Turn right.", "Go straight on, please."], answer: 0, why: "You're welcome signifie « de rien », la réponse polie à un remerciement." },
          ],
          trap: "Beaucoup d'élèves ajoutent un sujet à l'impératif (« You turn left ») ou confondent library (bibliothèque) et librairie, qui se dit bookshop.",
          method: "Pour indiquer un chemin, suivez le trajet avec le doigt sur le plan et donnez une seule indication par phrase, dans l'ordre : direction, rue, repère, puis le côté (it's on your left).",
        },
      ],
    },
    {
      id: 'royaume-uni-nations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'quatre-nations',
          title: 'Angleterre, Écosse, pays de Galles, Irlande du Nord',
          minutes: 30,
          objectives: [
            "Distinguer le Royaume-Uni, la Grande-Bretagne, l'Angleterre et l'Irlande.",
            "Situer les quatre nations du Royaume-Uni et nommer leurs capitales.",
            "Connaître quelques grandes étapes de la formation du Royaume-Uni.",
            "Présenter une nation en anglais avec sa capitale, sa nationalité et ses langues.",
          ],
          course: [
            {
              heading: "Royaume-Uni, Grande-Bretagne : ne pas confondre",
              paragraphs: [
                "Le Royaume-Uni (the United Kingdom, ou the UK) est un pays formé de quatre nations : l'Angleterre (England), l'Écosse (Scotland), le pays de Galles (Wales) et l'Irlande du Nord (Northern Ireland). Son nom complet est the United Kingdom of Great Britain and Northern Ireland.",
                "La Grande-Bretagne (Great Britain) est la plus grande île de l'archipel. On y trouve trois nations : l'Angleterre, l'Écosse et le pays de Galles. L'Irlande du Nord, elle, se trouve sur l'île d'Irlande, au nord-est. Les îles Britanniques (the British Isles) désignent tout l'archipel : la Grande-Bretagne, l'île d'Irlande et de nombreuses petites îles.",
                "Attention : la République d'Irlande (Ireland), dont la capitale est Dublin, est un pays indépendant, qui ne fait pas partie du Royaume-Uni. Elle est membre de l'Union européenne, alors que le Royaume-Uni l'a quittée en 2020. Enfin, l'Angleterre n'est qu'une partie du Royaume-Uni : appeler un Écossais « English » est une erreur, et elle le vexe souvent !",
              ],
              box: { label: "Définition", text: "The UK = England + Scotland + Wales + Northern Ireland. Great Britain = England + Scotland + Wales. Les habitants du Royaume-Uni sont British." },
            },
            {
              heading: "Quatre nations, quatre capitales",
              paragraphs: [
                "L'Angleterre (England) est la nation la plus grande et la plus peuplée : plus de huit habitants du Royaume-Uni sur dix y vivent. Sa capitale, London, est aussi la capitale du Royaume-Uni. On y trouve d'autres grandes villes comme Manchester, Birmingham ou Liverpool. Ses habitants sont English.",
                "L'Écosse (Scotland), au nord, est un pays de montagnes, les Highlands, et de lacs, les lochs. Sa capitale est Edinburgh ; sa plus grande ville est Glasgow. Ben Nevis, la plus haute montagne du Royaume-Uni, s'y trouve. Ses habitants sont Scottish (on dit aussi a Scot).",
                "Le pays de Galles (Wales), à l'ouest, est une région de collines, de montagnes et de côtes. Sa capitale est Cardiff. Ses habitants sont Welsh. L'Irlande du Nord (Northern Ireland) a pour capitale Belfast. On y visite la Chaussée des Géants (the Giant's Causeway), des milliers de colonnes de basalte au bord de la mer, liées à la légende du géant Finn McCool.",
              ],
              box: { label: "Repère", text: "England → London → English. Scotland → Edinburgh → Scottish. Wales → Cardiff → Welsh. Northern Ireland → Belfast → Northern Irish." },
            },
            {
              heading: "Comment s'est formé le Royaume-Uni ?",
              paragraphs: [
                "Le pays de Galles a été rattaché à l'Angleterre au XVIe siècle (entre 1536 et 1543). En 1603, le roi d'Écosse Jacques VI devient aussi roi d'Angleterre : les deux royaumes ont alors le même roi. En 1707, l'Acte d'Union réunit l'Angleterre et l'Écosse en un seul royaume, le royaume de Grande-Bretagne.",
                "En 1801, l'Irlande rejoint ce royaume, qui devient le Royaume-Uni de Grande-Bretagne et d'Irlande. Mais en 1922, après une guerre d'indépendance, la plus grande partie de l'Irlande devient un État indépendant ; seule l'Irlande du Nord reste dans le Royaume-Uni. C'est l'origine du nom actuel.",
                "Aujourd'hui, les quatre nations ont le même roi, le même gouvernement et le même Parlement, à Westminster, à Londres. Mais depuis la fin des années 1990, l'Écosse, le pays de Galles et l'Irlande du Nord ont aussi leur propre parlement ou assemblée, qui décide par exemple de l'école et de la santé.",
              ],
              box: { label: "Repère", text: "1707 : union de l'Angleterre et de l'Écosse (Great Britain). 1801 : union avec l'Irlande. 1922 : indépendance de la plus grande partie de l'Irlande ; l'Irlande du Nord reste dans le Royaume-Uni." },
            },
            {
              heading: "Des langues et des identités",
              paragraphs: [
                "L'anglais est parlé partout au Royaume-Uni, mais d'autres langues existent. Au pays de Galles, beaucoup d'habitants parlent gallois (Welsh), une langue celtique ; les panneaux routiers y sont écrits en anglais et en gallois. En Écosse, une partie de la population, surtout dans les Highlands et les îles, parle le gaélique écossais (Scottish Gaelic). En Irlande du Nord, on parle aussi l'irlandais (Irish) et l'Ulster Scots.",
                "Chaque nation est fière de son identité. Au football et au rugby, l'Angleterre, l'Écosse et le pays de Galles ont chacune leur propre équipe nationale. Une personne de Glasgow peut dire « I'm Scottish and I'm British » : elle est écossaise et britannique à la fois.",
              ],
            },
          ],
          keyPoints: [
            "The UK = England, Scotland, Wales, Northern Ireland ; Great Britain = England, Scotland, Wales.",
            "Capitales : London, Edinburgh, Cardiff, Belfast ; Londres est aussi la capitale du Royaume-Uni.",
            "La République d'Irlande (Dublin) est un pays indépendant, membre de l'Union européenne.",
            "1707 : Angleterre + Écosse ; 1801 : + Irlande ; 1922 : l'Irlande du Nord seule reste dans le Royaume-Uni.",
            "Nationalités : English, Scottish, Welsh, Northern Irish ; tous sont British.",
            "Autres langues : le gallois (Welsh), le gaélique écossais, l'irlandais.",
          ],
          example: {
            statement: "Une amie écrit : « Glasgow is a big city in England. » Corrigez l'erreur et présentez l'Écosse en trois phrases en anglais.",
            solution: [
              "Repérer l'erreur : Glasgow n'est pas en Angleterre, elle se trouve en Écosse.",
              "Corriger : « Glasgow is a big city in Scotland. »",
              "Donner la capitale : Edinburgh (et non Glasgow, qui est la plus grande ville).",
              "Donner la nationalité et une caractéristique : Scottish ; mountains (the Highlands) et Ben Nevis.",
              "Réponse : « Scotland is a nation of the UK, in the north of Great Britain. Its capital is Edinburgh and the people are Scottish. There are a lot of mountains and lochs, and Ben Nevis is the highest mountain in the UK. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez ce tableau en anglais pour chaque nation : capitale et nationalité. a) England ; b) Scotland ; c) Wales ; d) Northern Ireland.",
              hint: "Relisez l'encadré « Repère » de la deuxième partie. N'oubliez pas les majuscules.",
              solution: [
                "a) England : capital London ; nationality English.",
                "b) Scotland : capital Edinburgh ; nationality Scottish.",
                "c) Wales : capital Cardiff ; nationality Welsh.",
                "d) Northern Ireland : capital Belfast ; nationality Northern Irish.",
                "Les quatre nationalités sont aussi British, car ces nations forment le Royaume-Uni.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cette présentation (personnage inventé) et répondez en français. « Hi! I'm Rhys and I'm 12. I live in Cardiff, the capital of Wales. I'm Welsh and British. At school, I study English and Welsh. Road signs here are in two languages. My favourite sport is rugby. Last year, I went to Edinburgh with my family. It was cold, but the castle was amazing! » 1) Où habite Rhys ? 2) Quelles langues étudie-t-il ? 3) Qu'a-t-il de particulier à dire sur les panneaux ? 4) Dans quelle nation est-il allé l'an dernier ? 5) Relevez deux verbes au prétérit.",
              hint: "Edinburgh est une capitale : cherchez de quelle nation dans le cours. Les verbes au prétérit sont dans les deux dernières phrases.",
              solution: [
                "1) Rhys habite à Cardiff, la capitale du pays de Galles.",
                "2) Il étudie l'anglais et le gallois.",
                "3) Les panneaux routiers sont écrits en deux langues : en anglais et en gallois.",
                "4) Il est allé à Édimbourg, la capitale de l'Écosse.",
                "5) Verbes au prétérit : went (go) et was (be).",
              ],
            },
            {
              level: 3,
              statement: "Défi : ce message écrit par un touriste contient cinq erreurs sur le Royaume-Uni. Repérez-les et réécrivez le message correctement en anglais. « The United Kingdom and Great Britain are the same thing. There are three nations in the UK: England, Scotland and Ireland. The capital of Scotland is Glasgow. In Cardiff, people are English. Dublin is a big city in Northern Ireland. »",
              hint: "Vérifiez chaque phrase avec le cours : définition du Royaume-Uni, nombre de nations, capitales, nationalités, et place de la République d'Irlande.",
              solution: [
                "Erreur 1 : le Royaume-Uni et la Grande-Bretagne ne sont pas la même chose ; la Grande-Bretagne ne comprend pas l'Irlande du Nord.",
                "Erreur 2 : il y a quatre nations, et la quatrième est l'Irlande du Nord (Northern Ireland), pas l'Irlande. Il manque aussi le pays de Galles.",
                "Erreur 3 : la capitale de l'Écosse est Edinburgh, pas Glasgow. Erreur 4 : à Cardiff, au pays de Galles, les habitants sont Welsh.",
                "Erreur 5 : Dublin est la capitale de la République d'Irlande, un pays indépendant ; la capitale de l'Irlande du Nord est Belfast.",
                "Message corrigé : « The United Kingdom and Great Britain are not the same thing. There are four nations in the UK: England, Scotland, Wales and Northern Ireland. The capital of Scotland is Edinburgh. In Cardiff, people are Welsh. Dublin is the capital of the Republic of Ireland, and the capital of Northern Ireland is Belfast. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les quatre nations du Royaume-Uni.",
            statements: [
              { text: "Great Britain includes Northern Ireland.", true: false, why: "La Grande-Bretagne est l'île de l'Angleterre, de l'Écosse et du pays de Galles ; l'Irlande du Nord est sur l'île d'Irlande." },
              { text: "Cardiff is the capital of Wales.", true: true, why: "Cardiff est la capitale du pays de Galles." },
              { text: "Dublin is in the United Kingdom.", true: false, why: "Dublin est la capitale de la République d'Irlande, un pays indépendant." },
              { text: "A person from Edinburgh is Scottish and British.", true: true, why: "Edinburgh est en Écosse ; les Écossais sont aussi britanniques." },
              { text: "England and Scotland were united in 1707.", true: true, why: "L'Acte d'Union de 1707 crée le royaume de Grande-Bretagne." },
              { text: "Welsh is only the name of the people of Wales, not a language.", true: false, why: "Welsh désigne aussi la langue galloise, une langue celtique encore parlée." },
              { text: "Glasgow is the capital of Scotland.", true: false, why: "Glasgow est la plus grande ville d'Écosse, mais la capitale est Edinburgh." },
            ],
          },
          quiz: [
            { q: "How many nations are there in the UK?", options: ["three", "five", "four", "two"], answer: 2, why: "Le Royaume-Uni compte quatre nations : England, Scotland, Wales, Northern Ireland." },
            { q: "What is the capital of Northern Ireland?", options: ["Belfast", "Dublin", "Cardiff", "Glasgow"], answer: 0, why: "La capitale de l'Irlande du Nord est Belfast ; Dublin est celle de la République d'Irlande." },
            { q: "Which nation is NOT on the island of Great Britain?", options: ["England", "Wales", "Scotland", "Northern Ireland"], answer: 3, why: "L'Irlande du Nord se trouve sur l'île d'Irlande." },
            { q: "A person from Wales is...", options: ["English", "Welsh", "Scottish", "Irish"], answer: 1, why: "Les habitants du pays de Galles sont Welsh (et aussi British)." },
            { q: "In which year were England and Scotland united?", options: ["1066", "1922", "1801", "1707"], answer: 3, why: "L'Acte d'Union de 1707 réunit l'Angleterre et l'Écosse dans le royaume de Grande-Bretagne." },
          ],
          trap: "L'erreur la plus répandue est d'employer England ou English pour tout le Royaume-Uni : England n'est qu'une des quatre nations, et le mot qui désigne tous les habitants est British.",
          method: "Dessinez de mémoire une carte simple des îles Britanniques, colorez les quatre nations et écrivez pour chacune sa capitale et sa nationalité en anglais ; recommencez jusqu'à ne plus faire d'erreur.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'londres',
          title: 'Découvrir Londres',
          minutes: 30,
          objectives: [
            "Situer Londres et raconter quelques grandes étapes de son histoire.",
            "Identifier et décrire en anglais les principaux monuments de Londres.",
            "Se repérer dans les transports londoniens (the Tube, double-decker buses).",
            "Présenter une visite de Londres avec you can et le prétérit.",
          ],
          course: [
            {
              heading: "Une capitale au bord de la Tamise",
              paragraphs: [
                "Londres (London) est la capitale de l'Angleterre et du Royaume-Uni, et sa plus grande ville. Elle est traversée par un fleuve, la Tamise (the River Thames). C'est une ville très ancienne : les Romains l'ont fondée vers l'an 50 après J.-C. et l'ont appelée Londinium.",
                "En 1666, le Grand Incendie de Londres (the Great Fire of London) détruit une grande partie de la ville. L'architecte Christopher Wren reconstruit alors de nombreuses églises, dont la cathédrale Saint-Paul (St Paul's Cathedral) et son immense dôme. Le vieux centre s'appelle the City : c'est aujourd'hui un quartier de banques et de bureaux.",
                "Londres est aussi une ville très multiculturelle : des habitants venus du monde entier y vivent, et on y entend des centaines de langues. On y trouve des marchés célèbres, comme Camden Market, et de grands parcs, comme Hyde Park.",
              ],
              box: { label: "Repère", text: "Vers 50 après J.-C. : les Romains fondent Londinium. 1666 : le Grand Incendie. Londres est située sur la Tamise (the River Thames)." },
            },
            {
              heading: "Les lieux du pouvoir : Westminster et Buckingham",
              paragraphs: [
                "Au bord de la Tamise se trouve le palais de Westminster (the Houses of Parliament), où siège le Parlement. Sa célèbre tour de l'horloge abrite Big Ben. Attention : Big Ben est en réalité le surnom de la grosse cloche ; la tour, elle, s'appelle Elizabeth Tower depuis 2012.",
                "Juste à côté, l'abbaye de Westminster (Westminster Abbey) est l'église où sont couronnés les rois et les reines d'Angleterre depuis 1066 ; le roi Charles III y a été couronné en 2023. Non loin de là, au 10 Downing Street, habite le Premier ministre (the Prime Minister).",
                "Buckingham Palace est la résidence officielle du roi à Londres. Devant le palais, les touristes viennent voir la relève de la garde (the Changing of the Guard) : les soldats en veste rouge et haut bonnet de fourrure noire défilent au son de la musique.",
              ],
            },
            {
              heading: "Des monuments d'hier et d'aujourd'hui",
              paragraphs: [
                "La tour de Londres (the Tower of London) est une forteresse construite à partir de l'époque de Guillaume le Conquérant, au XIe siècle. Elle a servi de palais royal et de prison. On y garde aujourd'hui les joyaux de la Couronne (the Crown Jewels), surveillés par les Yeomen Warders, surnommés Beefeaters, et par des corbeaux (ravens).",
                "Juste à côté, Tower Bridge, inauguré en 1894, est un pont avec deux tours dont la partie centrale se lève pour laisser passer les bateaux. On le confond souvent avec London Bridge, un autre pont beaucoup plus simple. Plus récente, la London Eye est une grande roue de 135 m de haut, ouverte en 2000, d'où l'on voit toute la ville.",
                "Londres compte aussi de grands musées, dont beaucoup sont gratuits : le British Museum, où l'on peut voir la pierre de Rosette, le Natural History Museum et ses squelettes de dinosaures, ou la Tate Modern, un musée d'art moderne installé dans une ancienne centrale électrique.",
              ],
              box: { label: "Attention", text: "Tower Bridge (le pont à deux tours, 1894) n'est pas London Bridge. Big Ben est le nom de la cloche, pas de la tour (Elizabeth Tower)." },
            },
            {
              heading: "Se déplacer et visiter Londres en anglais",
              paragraphs: [
                "Le métro de Londres s'appelle the Underground, ou familièrement the Tube. Ouvert en 1863, c'est le plus ancien métro du monde. Dans les stations, une voix répète « Mind the gap » : faites attention à l'espace entre le quai et la rame. En surface, on prend les célèbres bus rouges à deux étages (double-decker buses) ou les taxis noirs (black cabs). Attention en traversant : au Royaume-Uni, on roule à gauche !",
                "Pour présenter une ville, on utilise you can (on peut) suivi de la base verbale : In London, you can visit the Tower of London. You can take a boat on the Thames. You can see the Changing of the Guard. Pour raconter une visite passée, on passe au prétérit : Last summer, I visited London. I went up the London Eye and I saw Big Ben.",
              ],
              box: { label: "À retenir", text: "Présenter : In London, you can + base verbale (you can visit, you can see). Raconter : I visited, I went, I saw, I took the Tube." },
            },
          ],
          keyPoints: [
            "Londres, capitale de l'Angleterre et du Royaume-Uni, est située sur la Tamise (the River Thames).",
            "Repères : Londinium fondée par les Romains vers 50 ; Grand Incendie en 1666 ; St Paul's Cathedral de Wren.",
            "Westminster : le Parlement et Big Ben (la cloche, dans Elizabeth Tower) ; Westminster Abbey pour les couronnements.",
            "Buckingham Palace : résidence du roi ; Changing of the Guard.",
            "Tower of London (Crown Jewels, Beefeaters) ; Tower Bridge (1894) ; London Eye (2000).",
            "The Tube (1863), le plus ancien métro du monde ; double-decker buses ; on roule à gauche.",
          ],
          example: {
            statement: "Vous préparez un panneau pour la classe. Écrivez trois phrases en anglais avec « you can » pour présenter trois choses à faire à Londres, puis une phrase au prétérit sur une visite imaginaire.",
            solution: [
              "Choisir trois activités du cours : la tour de Londres, la London Eye, le Tube.",
              "Construire avec you can + base verbale : you can visit, you can go up, you can take.",
              "Écrire la phrase au prétérit avec un marqueur de temps et des verbes au prétérit : last year, I visited, I saw.",
              "Réponse : « In London, you can visit the Tower of London and see the Crown Jewels. You can go up the London Eye. You can take the Tube, the oldest underground in the world. Last year, I visited London and I saw Big Ben. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque monument à sa description : 1) Buckingham Palace ; 2) the Tower of London ; 3) the London Eye ; 4) Westminster Abbey ; 5) Tower Bridge. a) A big wheel near the Thames. b) The church where kings and queens are crowned. c) The King's official home in London. d) A bridge with two towers. e) A castle where you can see the Crown Jewels.",
              hint: "Cherchez les mots-clés : wheel (roue), crowned (couronnés), home (résidence), bridge (pont), Crown Jewels (joyaux de la Couronne).",
              solution: [
                "1) Buckingham Palace → c) The King's official home in London.",
                "2) The Tower of London → e) A castle where you can see the Crown Jewels.",
                "3) The London Eye → a) A big wheel near the Thames.",
                "4) Westminster Abbey → b) The church where kings and queens are crowned.",
                "5) Tower Bridge → d) A bridge with two towers.",
              ],
            },
            {
              level: 2,
              statement: "Lisez cette carte postale (personnage inventé) et répondez en français. « Dear Grandma, London is great! On Monday, we took the Tube to Westminster and we saw Big Ben. Then, we walked to Buckingham Palace, but we didn't see the King! On Tuesday, we visited the British Museum. It was free! In the evening, we went on a red double-decker bus. Love, Chloé » 1) Comment Chloé est-elle allée à Westminster ? 2) Qu'a-t-elle vu ? 3) Qui n'a-t-elle pas vu ? 4) Qu'y avait-il de surprenant au British Museum ? 5) Relevez quatre verbes au prétérit et donnez leur base verbale.",
              hint: "Cherchez les jours (On Monday, On Tuesday) pour suivre le programme. Pour la question 5, deux verbes sont irréguliers : took et saw.",
              solution: [
                "1) Elle a pris le métro, the Tube.",
                "2) Elle a vu Big Ben, puis elle est allée à pied jusqu'à Buckingham Palace.",
                "3) Elle n'a pas vu le roi (we didn't see the King).",
                "4) L'entrée était gratuite (It was free).",
                "5) took → take ; saw → see ; walked → walk ; visited → visit (on peut aussi citer went → go et was → be).",
              ],
            },
            {
              level: 3,
              statement: "Défi : écrivez en anglais une carte postale de 60 à 80 mots à un ami pour raconter une journée imaginaire à Londres. Citez au moins trois lieux du cours, un moyen de transport, utilisez au moins cinq verbes au prétérit (dont trois irréguliers) et terminez par une phrase avec you can pour lui conseiller une visite.",
              hint: "Organisez votre carte : formule d'ouverture (Dear...), le matin, l'après-midi, le soir, un conseil, une formule de fin (See you soon, Love...). Vérifiez chaque verbe.",
              solution: [
                "Choisir les lieux : the Tower of London, Tower Bridge, the London Eye ; le transport : a double-decker bus.",
                "Exemple de production : « Dear Hugo, Yesterday, I spent the day in London with my class. In the morning, we visited the Tower of London and we saw the Crown Jewels. Then, we walked across Tower Bridge. In the afternoon, we took a red double-decker bus to the London Eye. The view was fantastic! In the evening, we ate fish and chips. If you come to London, you can visit the British Museum: it's free! See you soon, Inès »",
                "Vérifier les verbes au prétérit : spent (spend), visited, saw (see), walked, took (take), was, ate (eat) : sept verbes, dont quatre irréguliers en plus de be.",
                "Vérifier : trois lieux, un transport, une phrase avec you can, environ 75 mots.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces événements de l'histoire de Londres.",
            items: [
              "Around AD 50: the Romans found Londinium.",
              "1066: William the Conqueror is crowned in Westminster Abbey.",
              "1666: the Great Fire of London destroys a large part of the city.",
              "1863: the first Underground line opens.",
              "1894: Tower Bridge opens.",
              "2000: the London Eye opens.",
              "2012: London hosts the Olympic Games.",
            ],
          },
          quiz: [
            { q: "Which river flows through London?", options: ["the Seine", "the Thames", "the Severn", "the Clyde"], answer: 1, why: "Londres est traversée par la Tamise, the River Thames." },
            { q: "What is « Big Ben », exactly?", options: ["the great bell of the clock tower", "the King's palace on the River Thames", "a famous bridge with two towers", "the oldest underground in the world"], answer: 0, why: "Big Ben est le surnom de la grosse cloche de la tour de l'horloge, au palais de Westminster." },
            { q: "Where can you see the Crown Jewels?", options: ["at Tower Bridge", "at the London Eye", "at the Tower of London", "at the Natural History Museum"], answer: 2, why: "Les joyaux de la Couronne sont gardés à la tour de Londres." },
            { q: "What is « the Tube »?", options: ["a red bus", "a black taxi", "a big wheel near the River Thames", "the London Underground"], answer: 3, why: "The Tube est le surnom du métro de Londres, ouvert en 1863." },
            { q: "« In London, you ___ visit many free museums. »", options: ["can", "cans", "can to", "are can"], answer: 0, why: "Can est suivi de la base verbale, sans to, et ne prend jamais de -s." },
          ],
          trap: "On confond souvent Tower Bridge (le pont à deux tours) et London Bridge, et l'on croit que Big Ben est le nom de la tour : c'est celui de la cloche.",
          method: "Pour retenir les monuments, faites une promenade imaginaire le long de la Tamise, d'ouest en est : Westminster et Big Ben, la London Eye, St Paul's, la tour de Londres et Tower Bridge ; récitez-la en anglais avec you can.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'symboles-royaume-uni',
          title: 'Les symboles du Royaume-Uni',
          minutes: 25,
          objectives: [
            "Décrire et expliquer la composition du drapeau du Royaume-Uni (the Union Jack).",
            "Identifier les emblèmes et les saints patrons des quatre nations.",
            "Expliquer simplement le rôle du roi dans une monarchie constitutionnelle.",
            "Reconnaître quelques symboles de la vie quotidienne britannique (la livre sterling, les bus rouges).",
          ],
          course: [
            {
              heading: "Le drapeau : the Union Jack",
              paragraphs: [
                "Le drapeau du Royaume-Uni s'appelle the Union Jack (ou the Union Flag). Il est rouge, blanc et bleu, et il réunit trois croix. La croix de saint George (a red cross on a white background), rouge sur fond blanc, représente l'Angleterre. La croix de saint André (a white diagonal cross on a blue background), une croix blanche en diagonale sur fond bleu, représente l'Écosse. La croix de saint Patrick, une croix rouge en diagonale sur fond blanc, représente l'Irlande.",
                "Le premier drapeau de l'Union date de 1606, après que le roi d'Écosse est devenu roi d'Angleterre : il réunissait les croix de l'Angleterre et de l'Écosse. La croix de saint Patrick a été ajoutée en 1801, lors de l'union avec l'Irlande. C'est le drapeau actuel.",
                "Le pays de Galles n'apparaît pas sur l'Union Jack, car il était déjà rattaché à l'Angleterre quand le premier drapeau a été créé. Il a pourtant un très beau drapeau : un dragon rouge (the red dragon, Y Ddraig Goch en gallois) sur un fond blanc et vert.",
              ],
              box: { label: "À retenir", text: "Union Jack = croix de saint George (Angleterre) + croix de saint André (Écosse) + croix de saint Patrick (Irlande). Le pays de Galles n'y figure pas : son drapeau porte un dragon rouge." },
            },
            {
              heading: "Les emblèmes et les saints patrons des nations",
              paragraphs: [
                "Chaque nation a une plante pour emblème. L'Angleterre : la rose (the rose). L'Écosse : le chardon (the thistle). Le pays de Galles : la jonquille (the daffodil) et le poireau (the leek). L'Irlande du Nord : le trèfle (the shamrock). On les retrouve sur des pièces, des uniformes d'équipes sportives ou des insignes.",
                "Chaque nation a aussi un saint patron, fêté un jour précis. Saint George pour l'Angleterre (23 avril), saint André (St Andrew) pour l'Écosse (30 novembre), saint David pour le pays de Galles (1er mars) et saint Patrick pour l'Irlande du Nord, comme pour toute l'île d'Irlande (17 mars). Le jour de la Saint-Patrick, on porte du vert et un trèfle.",
              ],
              box: { label: "Repère", text: "England : the rose, St George (23 April). Scotland : the thistle, St Andrew (30 November). Wales : the daffodil, St David (1 March). Northern Ireland : the shamrock, St Patrick (17 March)." },
            },
            {
              heading: "Le roi et l'hymne national",
              paragraphs: [
                "Le Royaume-Uni est une monarchie constitutionnelle : le roi règne mais ne gouverne pas. Il représente le pays et a un rôle surtout symbolique. Le pays est gouverné par le Premier ministre (the Prime Minister) et son gouvernement, et les lois sont votées par le Parlement, élu par les citoyens.",
                "Le roi actuel est Charles III. Il est devenu roi le 8 septembre 2022, à la mort de sa mère, la reine Elizabeth II, qui a régné plus de 70 ans (de 1952 à 2022). Il a été couronné en 2023 à l'abbaye de Westminster. L'hymne national est « God Save the King » ; quand c'est une reine qui règne, on chante « God Save the Queen ».",
                "Les armoiries royales montrent un lion, qui représente l'Angleterre, et une licorne (a unicorn), l'animal symbole de l'Écosse.",
              ],
            },
            {
              heading: "Les symboles du quotidien",
              paragraphs: [
                "La monnaie du Royaume-Uni est la livre sterling (the pound, symbole £), divisée en 100 pence (au singulier, a penny). Le Royaume-Uni n'utilise pas l'euro. Le portrait du monarque figure sur les pièces et les billets : ceux à l'effigie de Charles III circulent à côté des plus anciens, à l'effigie d'Elizabeth II.",
                "Certains objets sont devenus des symboles du pays : le bus rouge à deux étages (the double-decker bus), le taxi noir de Londres (the black cab), la cabine téléphonique rouge (the red phone box) et la boîte aux lettres rouge (the red post box). Et bien sûr, le thé (tea), souvent bu avec un nuage de lait.",
              ],
              box: { label: "Repère", text: "£1 = 100 pence (100p). On dit : one pound, two pounds, fifty pence. Prix : £2.50 se lit « two pounds fifty »." },
            },
          ],
          keyPoints: [
            "The Union Jack réunit les croix de saint George (Angleterre), saint André (Écosse) et saint Patrick (Irlande).",
            "Le pays de Galles n'est pas sur l'Union Jack ; son drapeau porte un dragon rouge.",
            "Emblèmes : rose (Angleterre), chardon (Écosse), jonquille et poireau (Galles), trèfle (Irlande du Nord).",
            "Saints patrons : St George (23 April), St Andrew (30 November), St David (1 March), St Patrick (17 March).",
            "Monarchie constitutionnelle : le roi Charles III règne depuis 2022 ; le Premier ministre gouverne.",
            "La monnaie est la livre sterling : £1 = 100 pence.",
          ],
          example: {
            statement: "Décrivez l'Union Jack en anglais en trois phrases : ses couleurs, ce qu'il réunit, et la nation qui n'y figure pas.",
            solution: [
              "Les couleurs : red, white and blue.",
              "La composition : trois croix, celles de St George (England), St Andrew (Scotland) et St Patrick (Ireland). On peut utiliser le verbe to combine (réunir).",
              "La nation absente : Wales, dont le drapeau a un dragon rouge.",
              "Réponse : « The Union Jack is red, white and blue. It combines the crosses of St George for England, St Andrew for Scotland and St Patrick for Ireland. Wales is not on the flag: the Welsh flag has a red dragon. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais : a) le drapeau ; b) une croix ; c) le chardon ; d) la jonquille ; e) le trèfle ; f) une licorne.",
              hint: "Tous ces mots se trouvent dans les deux premières parties du cours et dans la partie sur le roi.",
              solution: [
                "a) le drapeau → the flag.",
                "b) une croix → a cross.",
                "c) le chardon → the thistle (emblème de l'Écosse).",
                "d) la jonquille → the daffodil (emblème du pays de Galles).",
                "e) le trèfle → the shamrock (emblème de l'Irlande du Nord).",
                "f) une licorne → a unicorn (animal symbole de l'Écosse).",
              ],
            },
            {
              level: 2,
              statement: "Calculez et écrivez les prix en toutes lettres en anglais (données fictives). Dans une boutique de souvenirs à Londres : un mug Union Jack coûte £6.50, un porte-clés bus rouge £2.75 et un drapeau gallois £4.20. a) Écrivez chaque prix en toutes lettres. b) Combien coûtent le mug et le drapeau ensemble ? c) Vous payez les trois objets avec un billet de £20 : combien vous rend-on ?",
              hint: "Additionnez les livres et les pence séparément : 100 pence font une livre. Un prix comme £6.50 se lit « six pounds fifty ».",
              solution: [
                "a) £6.50 : six pounds fifty ; £2.75 : two pounds seventy-five ; £4.20 : four pounds twenty.",
                "b) £6.50 + £4.20 = £10.70, ten pounds seventy.",
                "c) Total des trois objets : £6.50 + £2.75 + £4.20 = £13.45. Vérification : 6 + 2 + 4 = 12 livres, et 50 + 75 + 20 = 145 pence, soit 1 livre et 45 pence : 13 livres et 45 pence.",
                "Monnaie rendue : £20 - £13.45 = £6.55, six pounds fifty-five.",
              ],
            },
            {
              level: 3,
              statement: "Défi : une correspondante française vous demande : « Pourquoi le pays de Galles n'est-il pas sur le drapeau britannique ? Et qui gouverne le pays, le roi ? » Répondez-lui en anglais en 5 ou 6 phrases, en expliquant la composition de l'Union Jack, la place du pays de Galles et le rôle du roi et du Premier ministre.",
              hint: "Reprenez les dates du cours (1606, 1801) et l'idée clé de la monarchie constitutionnelle : the King reigns, but he doesn't govern.",
              solution: [
                "Composition : trois croix pour l'Angleterre, l'Écosse et l'Irlande ; la croix irlandaise ajoutée en 1801.",
                "Pays de Galles : déjà rattaché à l'Angleterre quand le premier drapeau a été créé en 1606, il n'a pas été représenté à part.",
                "Rôle du roi : il règne mais ne gouverne pas ; le Premier ministre dirige le gouvernement.",
                "Exemple de production : « The Union Jack combines three crosses: St George's cross for England, St Andrew's cross for Scotland and St Patrick's cross for Ireland. The first Union Flag was created in 1606, and St Patrick's cross was added in 1801. Wales is not on the flag because it was already part of the Kingdom of England in 1606. But Wales has its own flag with a red dragon! The UK has a king, Charles III, but he doesn't govern the country. The Prime Minister and the government govern, and Parliament votes the laws. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque symbole à ce qu'il représente.",
            pairs: [
              { left: "The rose", right: "England" },
              { left: "The thistle", right: "Scotland" },
              { left: "The daffodil", right: "Wales" },
              { left: "The shamrock", right: "Northern Ireland" },
              { left: "The Union Jack", right: "The United Kingdom" },
              { left: "£ (the pound)", right: "La monnaie britannique" },
            ],
          },
          quiz: [
            { q: "Which nation is NOT represented on the Union Jack?", options: ["Scotland", "England", "Wales", "Ireland"], answer: 2, why: "Le pays de Galles était déjà rattaché à l'Angleterre quand le premier drapeau a été créé ; il n'y figure pas." },
            { q: "What is the emblem of Scotland?", options: ["the thistle", "the rose", "the shamrock", "the daffodil"], answer: 0, why: "Le chardon (thistle) est l'emblème de l'Écosse." },
            { q: "When is St Patrick's Day?", options: ["on 1 March", "on 23 April", "on 30 November", "on 17 March"], answer: 3, why: "La Saint-Patrick est fêtée le 17 mars." },
            { q: "Who governs the United Kingdom?", options: ["the King alone", "the Prime Minister and the government", "the Mayor of London and the city council", "the Queen of Scotland"], answer: 1, why: "Le roi règne mais ne gouverne pas : le gouvernement est dirigé par le Premier ministre." },
            { q: "How many pence are there in one pound?", options: ["10", "50", "100", "1,000"], answer: 2, why: "Une livre sterling vaut 100 pence." },
          ],
          trap: "Beaucoup d'élèves pensent que le roi gouverne le Royaume-Uni ou que les quatre nations sont sur l'Union Jack : le roi a surtout un rôle symbolique, et le pays de Galles n'apparaît pas sur le drapeau.",
          method: "Pour retenir l'Union Jack, dessinez-le en trois couches transparentes : d'abord la croix rouge droite (Angleterre), puis la croix blanche en diagonale sur fond bleu (Écosse), puis la croix rouge en diagonale (Irlande).",
        },
      ],
    },
    {
      id: 'royaume-uni-traditions',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fetes-traditions',
          title: 'Les fêtes et les traditions britanniques',
          minutes: 30,
          objectives: [
            "Dire et écrire une date en anglais avec les nombres ordinaux et les prépositions on, in, at.",
            "Situer dans l'année les principales fêtes britanniques.",
            "Décrire une fête et ses traditions en anglais (Bonfire Night, Halloween, Christmas...).",
            "Comparer une fête britannique et une fête française.",
          ],
          course: [
            {
              heading: "Dire une date en anglais",
              paragraphs: [
                "Pour dire une date, on utilise les nombres ordinaux : 1st (first), 2nd (second), 3rd (third), 4th (fourth), 5th (fifth), 12th (twelfth), 20th (twentieth), 21st (twenty-first), 22nd (twenty-second), 23rd (twenty-third), 31st (thirty-first). Les mois prennent toujours une majuscule : January, February, March...",
                "En anglais britannique, on écrit 5 November ou 5th November, et on lit « the fifth of November ». En anglais américain, on écrit November 5 et on lit « November fifth ». Attention : en abrégé, 05/11 signifie le 5 novembre au Royaume-Uni, mais le 11 mai aux États-Unis !",
                "Les prépositions changent selon la précision : on devant un jour ou une date (on Monday, on 25 December, on Christmas Day) ; in devant un mois, une saison ou une année (in November, in winter, in 2026) ; at devant une fête qui dure quelques jours (at Christmas, at Easter).",
              ],
              box: { label: "Règle", text: "On + jour ou date : on 5 November. In + mois, saison, année : in November, in winter. At + période de fête : at Christmas, at Easter. Date lue : « the fifth of November »." },
            },
            {
              heading: "De l'hiver au printemps",
              paragraphs: [
                "En Écosse, le Nouvel An s'appelle Hogmanay : le 31 décembre, on fait la fête et, à minuit, on chante « Auld Lang Syne », une chanson tirée d'un poème de Robert Burns. Le 25 janvier, Burns Night célèbre la naissance de ce poète écossais, né en 1759 : on récite ses poèmes et on mange du haggis, le plat national écossais.",
                "Au printemps viennent les fêtes des saints patrons : St David's Day au pays de Galles (1er mars), où l'on porte une jonquille ou un poireau ; St Patrick's Day (17 mars), jour férié en Irlande du Nord, où l'on s'habille en vert ; St George's Day en Angleterre (23 avril).",
                "Pancake Day (Shrove Tuesday) est le mardi gras : on mange des crêpes et certaines villes organisent des courses où l'on doit faire sauter une crêpe dans une poêle en courant. À Pâques (Easter), les enfants cherchent des œufs en chocolat (an Easter egg hunt) et l'on mange des hot cross buns, des petits pains aux épices marqués d'une croix.",
              ],
            },
            {
              heading: "Les fêtes de l'automne",
              paragraphs: [
                "Le 31 octobre, Halloween vient d'une ancienne fête celtique. Les enfants se déguisent en fantômes, en sorcières ou en squelettes et vont de maison en maison en disant « Trick or treat! » (une farce ou une friandise). On creuse des citrouilles (pumpkins) pour en faire des lanternes.",
                "Le 5 novembre, c'est Bonfire Night (ou Guy Fawkes Night). En 1605, un groupe de conspirateurs prépare la Conspiration des poudres (the Gunpowder Plot) : ils veulent faire exploser le Parlement et tuer le roi Jacques Ier. Guy Fawkes est arrêté dans une cave sous le Parlement, à côté de barils de poudre. Depuis, on célèbre l'échec du complot avec des feux de joie (bonfires) et des feux d'artifice (fireworks).",
                "Le 11 novembre, Remembrance Day rend hommage aux soldats morts à la guerre, depuis la Première Guerre mondiale, qui s'est terminée par l'armistice du 11 novembre 1918. Les Britanniques portent un coquelicot rouge (a poppy) et observent deux minutes de silence à 11 heures.",
              ],
              box: { label: "Repère", text: "31 October : Halloween. 5 November : Bonfire Night (Gunpowder Plot, 1605). 11 November : Remembrance Day (poppies, two minutes' silence)." },
            },
            {
              heading: "Noël, la grande fête de l'année",
              paragraphs: [
                "Le soir du 24 décembre (Christmas Eve), les enfants accrochent un grand bas (a stocking) au bout du lit ou à la cheminée. Pendant la nuit, Father Christmas (ou Santa Claus) descend par la cheminée et le remplit de cadeaux. Les cadeaux sont ouverts le matin du 25 décembre (Christmas Day).",
                "Le repas de Noël (Christmas dinner), servi le 25 vers midi ou l'après-midi, comprend souvent une dinde rôtie (roast turkey), des pommes de terre rôties et des choux de Bruxelles (Brussels sprouts), puis le Christmas pudding, un gâteau aux fruits secs. Sur la table, on trouve des crackers : deux personnes tirent chacune un bout, le tube éclate avec un petit bruit et l'on y trouve une couronne en papier, une blague et un petit cadeau. Le 26 décembre, Boxing Day, est aussi un jour férié.",
              ],
              box: { label: "À retenir", text: "Christmas Eve (24 December), Christmas Day (25 December), Boxing Day (26 December). On dit : at Christmas (à Noël), mais on Christmas Day (le jour de Noël)." },
            },
          ],
          keyPoints: [
            "Date : on lit « the fifth of November » ; les mois prennent une majuscule.",
            "On + date ou jour (on 5 November), in + mois ou saison (in November), at + fête (at Christmas).",
            "Hogmanay (31 December, Écosse) ; Burns Night (25 January) ; St David's Day (1 March) ; St Patrick's Day (17 March).",
            "Halloween (31 October) : trick or treat ; Bonfire Night (5 November) : le complot de Guy Fawkes en 1605.",
            "Remembrance Day (11 November) : le coquelicot (poppy) et deux minutes de silence.",
            "Noël : stockings, Christmas dinner, crackers, Christmas pudding ; Boxing Day le 26 décembre.",
          ],
          example: {
            statement: "Présentez Bonfire Night en trois phrases en anglais : la date (avec la bonne préposition), l'origine, et ce que l'on fait.",
            solution: [
              "La date : le 5 novembre, avec on devant une date : on 5 November (lu « on the fifth of November »).",
              "L'origine : le complot de Guy Fawkes contre le Parlement en 1605, raconté au prétérit.",
              "Les traditions : feux de joie et feux d'artifice, au présent simple car c'est une habitude.",
              "Réponse : « Bonfire Night is on 5 November. In 1605, Guy Fawkes and his friends tried to blow up Parliament, but they failed. Today, people light bonfires and watch fireworks. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez ces dates comme on les lit en anglais britannique, puis complétez avec on, in ou at. a) 25/12 ; b) 31/10 ; c) 1/3 ; d) 22/7. e) Bonfire Night is ___ November. f) We open our presents ___ Christmas Day. g) We eat chocolate eggs ___ Easter.",
              hint: "Pour lire une date : the + nombre ordinal + of + mois. Pour les prépositions : on + jour, in + mois, at + période de fête.",
              solution: [
                "a) 25/12 : the twenty-fifth of December.",
                "b) 31/10 : the thirty-first of October.",
                "c) 1/3 : the first of March.",
                "d) 22/7 : the twenty-second of July.",
                "e) in November (un mois). f) on Christmas Day (un jour précis). g) at Easter (une période de fête).",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte (personnage inventé) et répondez en français. « Hi, I'm Josh and I live in York. My favourite day of the year is the fifth of November. In the evening, my family and I go to the park. There is a huge bonfire and we watch the fireworks. We eat toffee apples and hot dogs. Last year, it rained, but the fireworks were beautiful! » 1) Quelle fête Josh préfère-t-il ? 2) Où va-t-il avec sa famille ? 3) Que font-ils et que mangent-ils ? 4) Quel temps faisait-il l'an dernier ? 5) Pourquoi fête-t-on cette date au Royaume-Uni ?",
              hint: "La date de la question 1 est écrite en toutes lettres dans le texte. Pour la question 5, utilisez le cours et non le texte.",
              solution: [
                "1) Il préfère Bonfire Night, le 5 novembre.",
                "2) Il va au parc avec sa famille, le soir.",
                "3) Ils regardent un immense feu de joie et les feux d'artifice ; ils mangent des pommes d'amour (toffee apples) et des hot dogs.",
                "4) L'an dernier, il a plu (it rained), mais les feux d'artifice étaient beaux.",
                "5) On célèbre l'échec de la Conspiration des poudres de 1605 : Guy Fawkes et ses complices voulaient faire exploser le Parlement et tuer le roi Jacques Ier.",
              ],
            },
            {
              level: 3,
              statement: "Défi : votre correspondant anglais, Oliver, vous a parlé de Bonfire Night. Écrivez-lui un e-mail de 70 à 90 mots pour lui présenter le 14 juillet en France. Donnez la date avec la bonne préposition, expliquez rapidement l'origine (la prise de la Bastille en 1789), dites ce que l'on fait, comparez avec Bonfire Night et terminez par une question.",
              hint: "Utilisez le présent simple pour les habitudes (people watch, there is), le prétérit pour l'histoire (people stormed... in 1789) et un comparatif ou like pour comparer.",
              solution: [
                "Date : on 14 July (lu « on the fourteenth of July »). Origine : on 14 July 1789, people in Paris stormed (prirent d'assaut) the Bastille, a prison.",
                "Traditions : a military parade in Paris, fireworks, dances (the « bals »).",
                "Comparaison : like Bonfire Night, there are fireworks, but it's in summer, so it's warmer.",
                "Exemple de production : « Hi Oliver, Thanks for your email about Bonfire Night! In France, our national day is on 14 July. On that day in 1789, the people of Paris stormed the Bastille, a big prison. Today, there is a military parade in Paris in the morning. In the evening, people watch fireworks and dance in the streets. Like on Bonfire Night, there are fireworks, but it's in summer, so it's warmer! What do you eat on Bonfire Night? Bye, Clara »",
                "Vérifier : une date avec on, un verbe au prétérit pour l'histoire, le présent pour les habitudes, une comparaison (like, warmer), une question finale, environ 80 mots.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces fêtes dans l'ordre de l'année, de janvier à décembre.",
            items: [
              "Burns Night (25 January)",
              "St David's Day (1 March)",
              "St Patrick's Day (17 March)",
              "St George's Day (23 April)",
              "Halloween (31 October)",
              "Bonfire Night (5 November)",
              "Christmas Day (25 December)",
            ],
          },
          quiz: [
            { q: "When is Bonfire Night?", options: ["on 31 October", "on 5 November", "on 11 November", "on 26 December"], answer: 1, why: "Bonfire Night a lieu le 5 novembre, en souvenir du complot de 1605." },
            { q: "What did Guy Fawkes want to do in 1605?", options: ["become king", "blow up Parliament", "build a bridge", "invent the first fireworks"], answer: 1, why: "Avec la Conspiration des poudres, il voulait faire exploser le Parlement et tuer le roi." },
            { q: "What do British people wear for Remembrance Day?", options: ["a shamrock", "a daffodil", "a red poppy", "a paper crown"], answer: 2, why: "Le coquelicot rouge (poppy) rend hommage aux soldats morts à la guerre." },
            { q: "Choose the correct sentence.", options: ["I was born on May.", "I was born at 2013.", "I was born in May.", "I was born in 5 May."], answer: 2, why: "On emploie in devant un mois ou une année, et on devant une date précise (on 5 May)." },
            { q: "What is the day after Christmas Day called?", options: ["Boxing Day", "Christmas Eve", "Pancake Day", "Burns Night"], answer: 0, why: "Le 26 décembre s'appelle Boxing Day ; c'est un jour férié." },
          ],
          trap: "L'erreur fréquente est de se tromper de préposition devant une date (« in 5 November », « on November ») : on met on devant un jour précis et in devant un mois ou une année.",
          method: "Fabriquez un calendrier illustré de l'année britannique : pour chaque fête, écrivez la date telle qu'on la lit (the fifth of November) et une phrase sur la tradition, puis récitez-le mois par mois.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'british-food',
          title: 'La cuisine britannique : « some », « any », « much », « many »',
          minutes: 35,
          objectives: [
            "Identifier les repas et les plats typiques du Royaume-Uni.",
            "Distinguer les noms dénombrables et indénombrables.",
            "Employer some et any selon le type de phrase.",
            "Exprimer la quantité avec much, many, a lot of, how much et how many.",
          ],
          course: [
            {
              heading: "Les repas et les plats britanniques",
              paragraphs: [
                "Le petit déjeuner traditionnel s'appelle the full English breakfast : des œufs, du bacon, des saucisses, des haricots à la sauce tomate (baked beans), des tomates et des champignons grillés et des toasts. Aujourd'hui, on le prend surtout le week-end ; en semaine, beaucoup de Britanniques mangent des céréales ou des toasts. À midi, le déjeuner (lunch) est souvent léger : un sandwich ou une soupe. Le repas du soir s'appelle dinner (ou tea dans certaines régions).",
                "Plusieurs plats sont célèbres. Fish and chips : du poisson frit dans une pâte à beignet, servi avec des frites, du sel et du vinaigre. Le Sunday roast : une viande rôtie le dimanche (du bœuf, du poulet ou de l'agneau), avec des pommes de terre rôties, des légumes, de la sauce (gravy) et, avec le bœuf, le Yorkshire pudding, une sorte de petit chausson gonflé. Le shepherd's pie : de la viande d'agneau hachée couverte de purée.",
                "L'afternoon tea, né au XIXe siècle, est un goûter élégant : du thé, de petits sandwichs, des gâteaux et des scones avec de la confiture et de la crème épaisse (clotted cream). Au Royaume-Uni, pudding désigne souvent le dessert en général : « What's for pudding? » Les desserts classiques sont l'apple crumble ou le trifle. Chaque nation a aussi ses spécialités, comme le haggis en Écosse ou le Welsh rarebit (pain grillé au fromage) au pays de Galles.",
              ],
            },
            {
              heading: "Dénombrable ou indénombrable ?",
              paragraphs: [
                "Un nom dénombrable (countable) désigne une chose que l'on peut compter : an egg, two eggs ; a sausage, three sausages ; an apple, five apples. Il a un singulier et un pluriel. Un nom indénombrable (uncountable) désigne une matière ou une masse que l'on ne compte pas : bread, butter, cheese, milk, water, tea, rice, sugar, meat, food, money. Il n'a pas de pluriel et ne s'emploie jamais avec a ou an.",
                "Attention, certains noms sont indénombrables en anglais alors qu'ils sont dénombrables en français : fruit (en général : I eat a lot of fruit), bread (on ne dit pas « a bread »), advice (des conseils), homework (des devoirs). Pour compter un indénombrable, on utilise une unité : a piece of bread, a slice of cake (une part), a glass of milk, a cup of tea, a bottle of water, a bar of chocolate, a packet of crisps.",
              ],
              box: { label: "Règle", text: "Dénombrable : an egg, two eggs. Indénombrable : bread, milk, cheese (jamais « a bread », jamais « breads »). Pour compter : a piece of bread, a glass of milk." },
            },
            {
              heading: "Some et any",
              paragraphs: [
                "Some et any expriment une quantité indéterminée, comme « du, de la, des » en français. On les emploie devant un indénombrable ou un dénombrable pluriel. Some s'emploie dans les phrases affirmatives : There is some milk in the fridge. I bought some apples.",
                "Any s'emploie dans les phrases négatives et dans les questions : There isn't any bread. We don't have any eggs. Is there any cheese? Have you got any sausages? Exception importante : quand on offre ou demande quelque chose poliment, on garde some dans la question, car on attend un « oui » : Would you like some tea? Can I have some water, please?",
              ],
              box: { label: "À retenir", text: "Affirmation : some (I've got some cheese). Négation et question : any (I haven't got any cheese. Is there any cheese?). Offre ou demande polie : some (Would you like some cake?)." },
            },
            {
              heading: "Much, many, a lot of",
              paragraphs: [
                "Pour parler d'une grande quantité, on emploie many devant un dénombrable pluriel et much devant un indénombrable. On les utilise surtout dans les phrases négatives et les questions : There aren't many eggs. We haven't got much milk. Dans une phrase affirmative, on préfère a lot of, qui s'emploie avec les deux sortes de noms : I eat a lot of apples. She drinks a lot of water.",
                "Pour demander une quantité, on dit how many + dénombrable pluriel (How many eggs do you need?) et how much + indénombrable (How much sugar do you want?). How much sert aussi à demander un prix : How much is it? (Combien ça coûte ?) How much are the scones?",
              ],
              box: { label: "Formule", text: "How many + dénombrable pluriel : How many apples? How much + indénombrable : How much bread? Affirmation : a lot of (a lot of apples, a lot of bread)." },
            },
          ],
          keyPoints: [
            "Plats typiques : full English breakfast, fish and chips, Sunday roast, shepherd's pie, afternoon tea, scones.",
            "Dénombrable : a sausage, two sausages. Indénombrable : bread, milk, cheese, fruit, money (pas de pluriel, pas de a).",
            "Pour compter un indénombrable : a piece of bread, a slice of cake, a glass of milk, a cup of tea.",
            "Some dans les phrases affirmatives et les offres polies ; any dans les négations et les questions.",
            "Many + pluriel, much + indénombrable (surtout négation et question) ; a lot of dans l'affirmation.",
            "How many eggs? How much sugar? How much is it? (le prix)",
          ],
          example: {
            statement: "Complétez ce dialogue dans une cuisine avec some, any, much ou many. « Is there ___ milk? » « Yes, there is ___ milk, but there isn't ___ bread. » « How ___ eggs have we got? » « Not ___ : only two. »",
            solution: [
              "« Is there ___ milk? » est une question qui n'est ni une offre ni une demande polie : on emploie any.",
              "« there is ___ milk » est une phrase affirmative : some.",
              "« there isn't ___ bread » est une phrase négative : any.",
              "« How ___ eggs » : eggs est dénombrable pluriel, donc how many ; « Not ___ » reprend eggs, donc not many.",
              "Réponse : « Is there any milk? » « Yes, there is some milk, but there isn't any bread. » « How many eggs have we got? » « Not many: only two. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces noms en deux colonnes, dénombrables (C) et indénombrables (U) : egg, bread, apple, milk, sausage, cheese, tomato, water, sandwich, rice.",
              hint: "Demandez-vous si l'on peut dire « one, two, three » directement devant le nom en anglais. Attention : bread est indénombrable en anglais.",
              solution: [
                "Dénombrables (C) : egg, apple, sausage, tomato, sandwich (an egg, two apples, three sausages...).",
                "Indénombrables (U) : bread, milk, cheese, water, rice.",
                "Pour compter les indénombrables, il faut une unité : a piece of bread, a glass of milk, a piece of cheese, a bottle of water, a bowl of rice.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec some, any, much ou many. a) I'd like ___ orange juice, please. b) There aren't ___ crisps left. c) How ___ tea do you drink every day? d) We haven't got ___ sugar. e) Would you like ___ biscuits? f) How ___ sandwiches did you make?",
              hint: "Repérez d'abord le type de phrase (affirmative, négative, question, offre polie), puis le type de nom (dénombrable pluriel ou indénombrable).",
              solution: [
                "a) some : demande polie (I'd like) avec un indénombrable.",
                "b) any : phrase négative (aren't) ; on peut aussi dire many (There aren't many crisps left : il n'en reste pas beaucoup).",
                "c) much : tea est indénombrable, donc How much tea.",
                "d) any : phrase négative ; much est aussi possible (We haven't got much sugar : pas beaucoup de sucre).",
                "e) some : c'est une offre polie (Would you like...?), on garde some.",
                "f) many : sandwiches est dénombrable pluriel, donc How many sandwiches.",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici une recette de scones pour 8 personnes (données fictives) : 250 g of flour, 50 g of butter, 2 tablespoons of sugar, 1 egg, 150 ml of milk. a) Écrivez trois questions avec how much ou how many sur cette recette et répondez en anglais par une phrase complète. b) Vous voulez faire des scones pour 16 personnes : calculez toutes les quantités. c) Il ne vous reste que 300 g de farine : en avez-vous assez pour 16 personnes ? Répondez en anglais avec enough (assez).",
              hint: "Flour, butter, sugar et milk sont indénombrables (how much) ; egg est dénombrable (how many). Pour 16 personnes, il faut multiplier chaque quantité par 2.",
              solution: [
                "a) « How much flour do we need? We need 250 grams of flour. » « How many eggs do we need? We need one egg. » « How much milk do we need? We need 150 millilitres of milk. »",
                "b) 16 personnes, c'est 2 fois 8 personnes : on multiplie tout par 2. Flour : 250 × 2 = 500 g ; butter : 50 × 2 = 100 g ; sugar : 2 × 2 = 4 tablespoons ; eggs : 1 × 2 = 2 ; milk : 150 × 2 = 300 ml.",
                "c) Il faut 500 g de farine et il en reste 300 g : 300 < 500, il manque 500 - 300 = 200 g.",
                "Réponse c) : « No, we haven't got enough flour. We need 500 grams, but we've only got 300 grams: we need another 200 grams. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La cuisine britannique et les quantités.",
            statements: [
              { text: "« Can I have a bread, please? » est correct.", true: false, why: "Bread est indénombrable : on dit some bread ou a piece of bread." },
              { text: "Fish and chips is fried fish served with chips.", true: true, why: "C'est du poisson frit en pâte à beignet, avec des frites." },
              { text: "« There isn't some milk. » est correct.", true: false, why: "Dans une phrase négative, on emploie any : There isn't any milk." },
              { text: "« Would you like some tea? » est correct.", true: true, why: "Dans une offre polie, on garde some, même dans une question." },
              { text: "« How much apples do you want? » est correct.", true: false, why: "Apples est dénombrable pluriel : How many apples." },
              { text: "In the UK, « pudding » can mean dessert in general.", true: true, why: "« What's for pudding? » signifie « Qu'est-ce qu'il y a comme dessert ? »." },
              { text: "Scones are usually eaten with jam and cream.", true: true, why: "À l'afternoon tea, on les sert avec de la confiture et de la clotted cream." },
              { text: "A full English breakfast is a small breakfast with only tea and fruit.", true: false, why: "C'est un petit déjeuner copieux et salé : œufs, bacon, saucisses, baked beans, toasts..." },
            ],
          },
          quiz: [
            { q: "Which word is uncountable?", options: ["egg", "sausage", "bread", "apple"], answer: 2, why: "Bread est indénombrable : on ne dit jamais « a bread » ni « breads »." },
            { q: "« We haven't got ___ cheese. »", options: ["any", "some", "many", "a"], answer: 0, why: "Phrase négative et nom indénombrable : any." },
            { q: "« How ___ sausages would you like? »", options: ["much", "any", "some", "many"], answer: 3, why: "Sausages est dénombrable pluriel : how many." },
            { q: "What is a « Sunday roast »?", options: ["a fried fish", "roast meat with vegetables", "a chocolate cake with cream and fruit", "a cup of tea"], answer: 1, why: "C'est une viande rôtie servie le dimanche avec des pommes de terre rôties, des légumes et de la sauce." },
            { q: "How do you ask the price of something?", options: ["How many is it?", "How much is it?", "How is it much?", "What much is it?"], answer: 1, why: "How much is it? signifie « Combien ça coûte ? »." },
          ],
          trap: "L'erreur la plus fréquente est de traiter un indénombrable comme un dénombrable (« a bread », « two breads », « much apples ») : avant de choisir much ou many, demandez-vous si le nom se compte en anglais.",
          method: "Pour choisir le bon mot, posez-vous deux questions dans l'ordre : le nom se compte-t-il (many ou much) ? La phrase est-elle affirmative, négative ou une question (some ou any) ? Pensez enfin à l'exception des offres polies avec some.",
        },

        /* ------------------------------------------------------------------ */
        {
          id: 'inviter-proposer',
          title: 'Inviter, proposer, accepter, refuser',
          minutes: 25,
          objectives: [
            "Inviter quelqu'un avec Would you like to... ? et Do you want to... ?",
            "Proposer une activité avec Let's, Why don't we, Shall we et What about + -ing.",
            "Accepter ou refuser poliment une invitation en donnant une raison.",
            "Rédiger une courte invitation avec la date, l'heure et le lieu.",
          ],
          course: [
            {
              heading: "Inviter quelqu'un",
              paragraphs: [
                "Pour inviter poliment, on utilise Would you like to + base verbale ? (Voudrais-tu, voudriez-vous... ?) : Would you like to come to my birthday party? Would you like to have lunch with us? Entre amis, on peut aussi dire Do you want to + base verbale ? : Do you want to come to the cinema with me?",
                "Avant d'inviter, on peut vérifier que la personne est libre : Are you free on Saturday afternoon? Ensuite, on donne les précisions utiles : la date (on Saturday 14 June), l'heure (at 3 pm, at three o'clock), le lieu (at my house, at the sports centre) et ce qu'il faut apporter (bring your swimsuit).",
              ],
              box: { label: "Formule", text: "Would you like to + base verbale ? : Would you like to come? (poli). Do you want to + base verbale ? : Do you want to come? (familier)." },
            },
            {
              heading: "Proposer une activité",
              paragraphs: [
                "Pour faire une suggestion à quelqu'un, on a plusieurs tournures. Let's + base verbale (allons, faisons) : Let's go to the beach! Let's play football! Why don't we + base verbale ? (Pourquoi ne pas... ?) : Why don't we watch a film? Shall we + base verbale ? (On... ?) : Shall we go to the park?",
                "On peut aussi utiliser What about ou How about, suivis d'un verbe en -ing ou d'un nom : What about going to the swimming pool? How about a pizza? Attention : après What about et How about, le verbe prend toujours -ing (going, playing, watching).",
              ],
              box: { label: "Règle", text: "Let's go. Why don't we go? Shall we go? (base verbale). What about going? How about going? (verbe en -ing)." },
            },
            {
              heading: "Accepter ou refuser poliment",
              paragraphs: [
                "Pour accepter, on montre son enthousiasme : Yes, I'd love to! (Oui, avec plaisir !) That's a great idea! Sounds great! (Ça a l'air génial !) Sure! OK, why not? On peut ajouter un remerciement : Thank you for inviting me!",
                "Pour refuser, on reste toujours poli : on s'excuse, on donne une raison et, si possible, on propose une autre fois. I'm sorry, I can't. I have to visit my grandparents. I'd love to, but I'm busy on Saturday. Thanks, but I can't come. Maybe another time? Un simple « No » serait impoli en anglais.",
              ],
              box: { label: "À retenir", text: "Accepter : I'd love to! / Sounds great! / That's a great idea! Refuser : I'm sorry, I can't. I have to... / I'd love to, but... / Maybe another time?" },
            },
            {
              heading: "Écrire une invitation",
              paragraphs: [
                "Une invitation écrite, sur une carte ou dans un message, doit répondre à quatre questions : What? (l'occasion : a birthday party, a sleepover, a picnic), When? (la date et l'heure), Where? (l'adresse) et What to bring? (ce qu'il faut apporter). On termine souvent par RSVP, une abréviation qui vient du français « répondez s'il vous plaît », suivie de la date limite pour répondre.",
                "Exemple d'invitation (écrite pour la leçon) : « You're invited to Mia's 12th birthday party! When? On Saturday 14 June, from 2 pm to 6 pm. Where? At 8 Rose Street. Bring your swimsuit: there's a pool! RSVP by 7 June. » La réponse peut être courte : « Hi Mia, thank you for inviting me! I'd love to come. See you on Saturday! »",
              ],
            },
          ],
          keyPoints: [
            "Inviter : Would you like to come...? (poli) ; Do you want to come...? (familier).",
            "Proposer : Let's go! Why don't we go? Shall we go? (base verbale).",
            "What about / How about + verbe en -ing ou nom : What about going to the park? How about a pizza?",
            "Accepter : I'd love to! Sounds great! That's a great idea!",
            "Refuser poliment : I'm sorry, I can't + une raison ; I'd love to, but... ; Maybe another time?",
            "Une invitation donne What, When, Where et What to bring ; RSVP = répondez s'il vous plaît.",
          ],
          example: {
            statement: "Votre ami Sam vous écrit : « Would you like to come to the cinema on Saturday afternoon? » Vous ne pouvez pas : vous allez chez vos grands-parents. Refusez poliment et proposez une autre activité le dimanche.",
            solution: [
              "Remercier et refuser poliment : « Thanks, Sam, but I'm sorry, I can't. »",
              "Donner une raison avec I have to + base verbale : « I have to visit my grandparents. »",
              "Proposer autre chose avec What about + -ing ou Why don't we + base verbale, en précisant le jour : on Sunday.",
              "Réponse : « Thanks, Sam, but I'm sorry, I can't. I have to visit my grandparents on Saturday. What about going to the cinema on Sunday afternoon? »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez le verbe entre parenthèses à la bonne forme (base verbale, to + base verbale, ou -ing). a) Would you like ___ (come) to my party? b) Let's ___ (play) basketball! c) What about ___ (go) to the beach? d) Why don't we ___ (have) a picnic? e) How about ___ (watch) a film? f) Do you want ___ (dance)?",
              hint: "Would you like et do you want sont suivis de to ; Let's et why don't we de la base verbale ; what about et how about de -ing.",
              solution: [
                "a) Would you like to come to my party?",
                "b) Let's play basketball!",
                "c) What about going to the beach?",
                "d) Why don't we have a picnic?",
                "e) How about watching a film?",
                "f) Do you want to dance?",
              ],
            },
            {
              level: 2,
              statement: "Répondez à chaque invitation en anglais en suivant la consigne. a) « Would you like to come to my sleepover on Friday? » (Acceptez avec enthousiasme et remerciez.) b) « Do you want to play tennis tomorrow morning? » (Refusez : vous avez un rendez-vous chez le dentiste.) c) « Shall we go to the swimming pool? » (Refusez : vous êtes enrhumé ; proposez de regarder un film à la place.)",
              hint: "Pour refuser, suivez les trois étapes : s'excuser, donner une raison (I have to... ou I've got...), proposer autre chose.",
              solution: [
                "a) « Yes, I'd love to! Thank you for inviting me. »",
                "b) « I'm sorry, I can't. I have to go to the dentist tomorrow morning. Maybe another time? »",
                "c) « Sorry, I can't, I've got a cold. Why don't we watch a film at my house instead? » (ou : What about watching a film instead?)",
                "Vérification : chaque refus contient une excuse (sorry), une raison et, pour c, une nouvelle proposition.",
              ],
            },
            {
              level: 3,
              statement: "Défi : écrivez un échange de 8 messages entre deux amis, Ella et Noah, qui organisent leur samedi. Ella propose une première activité ; Noah refuse poliment avec une raison et propose autre chose ; ils se mettent d'accord sur l'activité, l'heure et le lieu du rendez-vous. Utilisez au moins quatre tournures différentes de la leçon.",
              hint: "Préparez le plan : 1 proposition, 2 refus + nouvelle proposition, 3 acceptation, 4 et 5 heure et lieu, 6 à 8 confirmation et formule de fin. Variez : Do you want to, Let's, What about, Shall we, I'd love to.",
              solution: [
                "Plan : Ella propose le cinéma ; Noah ne peut pas (il a un match de football le matin, et le film commence à 11 h) ; il propose d'aller à la patinoire l'après-midi ; ils fixent 3 heures devant la patinoire.",
                "Exemple : Ella : « Hi Noah! Do you want to go to the cinema on Saturday morning? » Noah : « Sorry, I can't. I have a football match in the morning. What about going ice skating in the afternoon? » Ella : « Sounds great! What time? » Noah : « Shall we meet at 3 pm? » Ella : « OK! Where? » Noah : « Let's meet in front of the ice rink. » Ella : « Perfect, see you on Saturday! » Noah : « See you! »",
                "Vérifier les tournures : Do you want to, I'm sorry I can't (sous la forme Sorry, I can't), What about + -ing, Sounds great, Shall we, Let's : six tournures différentes.",
                "Vérifier les informations : l'activité (ice skating), le jour (Saturday afternoon), l'heure (3 pm) et le lieu (in front of the ice rink).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque phrase à ce qu'elle permet de faire.",
            pairs: [
              { left: "Would you like to come to my party?", right: "Inviter" },
              { left: "Let's go to the cinema!", right: "Proposer une activité" },
              { left: "Yes, I'd love to!", right: "Accepter avec plaisir" },
              { left: "Sorry, I can't. I'm busy.", right: "Refuser poliment" },
              { left: "What time does it start?", right: "Demander une précision" },
              { left: "Thank you for inviting me.", right: "Remercier" },
            ],
          },
          quiz: [
            { q: "Choose the correct invitation.", options: ["Would you like come to my party?", "Would you like to come to my party?", "Would you like coming to my party?", "Do you would like to come to my party?"], answer: 1, why: "Would you like est suivi de to + base verbale : Would you like to come?" },
            { q: "« What about ___ to the park? »", options: ["going", "go", "to go", "goes"], answer: 0, why: "Après What about, le verbe prend -ing : What about going?" },
            { q: "Which answer is a polite refusal?", options: ["No.", "I don't want.", "Sounds great! I'd love to come with you!", "I'm sorry, I can't. I have to study."], answer: 3, why: "Un refus poli contient une excuse et une raison ; Sounds great! est une acceptation." },
            { q: "Choose the correct suggestion.", options: ["Let's to play tennis!", "Let's playing tennis!", "Let's play tennis!", "Let's plays tennis!"], answer: 2, why: "Let's est suivi de la base verbale, sans to : Let's play." },
            { q: "What does « RSVP » mean on an invitation?", options: ["Please answer.", "Bring a present.", "Come early.", "Wear a costume."], answer: 0, why: "RSVP vient du français « répondez s'il vous plaît » : il faut répondre à l'invitation." },
          ],
          trap: "L'erreur fréquente est de mélanger les constructions : « Would you like come », « Let's to go », « What about go ». Retenez : like to + base verbale, let's + base verbale, what about + -ing.",
          method: "Apprenez chaque tournure avec un exemple complet que vous connaissez par cœur (Would you like to come? Let's go! What about going?) : en cas de doute, comparez votre phrase au modèle.",
        },
      ],
    },
  ],
}
