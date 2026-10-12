import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-6e',
  chapters: [
    {
      id: 'se-presenter',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'saluer',
          title: 'Saluer et prendre congé : « Hi! », « Goodbye! »',
          minutes: 20,
          objectives: [
            "Saluer quelqu'un et prendre congé en anglais, à l'oral comme à l'écrit.",
            "Choisir une formule adaptée au moment de la journée et à la personne (un camarade, un adulte).",
            "Demander à quelqu'un comment il va et répondre à cette question.",
          ],
          course: [
            {
              heading: "Dire bonjour : « Hello! », « Hi! » et les moments de la journée",
              paragraphs: [
                "Pour saluer quelqu'un en anglais, le mot le plus courant est « Hello! ». Il convient à toutes les situations : avec un camarade, un professeur ou une personne que vous ne connaissez pas. Entre amis ou entre jeunes, on dit plus souvent « Hi! », plus familier, un peu comme « Salut ! » en français.",
                "On peut aussi saluer selon le moment de la journée : « Good morning! » le matin, jusqu'à midi ; « Good afternoon! » l'après-midi ; « Good evening! » le soir, à partir de 18 heures environ. Ces formules sont un peu plus polies : on les entend souvent à l'école, dans un magasin ou à la radio.",
              ],
              box: { label: "Attention", text: "« Good night! » n'est jamais une formule pour dire bonjour : on l'emploie le soir pour se quitter ou avant d'aller se coucher, comme « Bonne nuit ! ». Pour saluer quelqu'un qui arrive le soir, dites « Good evening! »." },
            },
            {
              heading: "Demander des nouvelles : « How are you? »",
              paragraphs: [
                "Après le bonjour, on demande souvent : « How are you? » (Comment vas-tu ? ou Comment allez-vous ?). En anglais, « you » sert à la fois pour tutoyer et pour vouvoyer : la même question convient pour un ami et pour un adulte. Entre amis, on entend aussi « How are you doing? ».",
                "Pour répondre : « I'm fine, thank you. » ou « I'm fine, thanks. » (Je vais bien, merci.), « I'm great! » (Je vais très bien !), « I'm OK. » (Ça va.), « Not bad. » (Pas mal.), « Not very well. » (Pas très bien.). Il est poli de renvoyer la question : « And you? » (Et toi ? Et vous ?).",
                "Quand on rencontre quelqu'un pour la première fois, on ajoute : « Nice to meet you! » (Enchanté ! ou Enchantée !). L'autre personne répond : « Nice to meet you too! » (Moi aussi, je suis enchanté de faire ta connaissance.).",
              ],
              box: { label: "À retenir", text: "A : Hello! How are you? B : I'm fine, thanks. And you? A : I'm OK, thank you." },
            },
            {
              heading: "Prendre congé : « Goodbye! » et « See you! »",
              paragraphs: [
                "Pour dire au revoir, la formule complète est « Goodbye! ». Elle est polie et convient à tout le monde. Entre amis, on dit simplement « Bye! » ou « Bye-bye! ». On peut ajouter un souhait : « Have a nice day! » (Bonne journée !), « Have a nice weekend! » (Bon week-end !).",
                "On peut aussi annoncer quand on va se revoir avec « See you... » : « See you later! » (À plus tard !), « See you tomorrow! » (À demain !), « See you soon! » (À bientôt !), « See you on Monday! » (À lundi !). Le soir, avant d'aller dormir, on dit « Good night! » (Bonne nuit !).",
              ],
            },
            {
              heading: "Parler à un adulte : « Mr », « Mrs », « Ms » et « Miss »",
              paragraphs: [
                "Pour saluer poliment un adulte, on emploie un titre suivi de son nom de famille : « Good morning, Mr Smith! », « Goodbye, Mrs Brown! ». Mr (prononcé « mister ») s'emploie pour un homme. Pour une femme, Mrs (prononcé « missiz ») désigne en principe une femme mariée, Ms (prononcé « miz ») convient à toutes les femmes, et Miss s'emploie pour une jeune femme ou une jeune fille non mariée.",
                "En règle générale, on n'utilise pas le titre avec le prénom : on dit « Mr Smith », pas « Mr John ». Dans beaucoup d'écoles britanniques, les élèves appellent aussi leur professeur « Sir » et leur professeure « Miss », sans nom. En anglais britannique, les abréviations s'écrivent sans point (Mr, Mrs, Ms) ; en anglais américain, on ajoute un point (Mr., Mrs., Ms.).",
              ],
              box: { label: "Règle", text: "Mr + nom de famille pour un homme ; Mrs, Ms ou Miss + nom de famille pour une femme. Ms convient toujours si l'on ne sait pas si la femme est mariée." },
            },
          ],
          keyPoints: [
            "Hello! convient partout ; Hi! est plus familier (entre amis).",
            "Good morning (le matin), Good afternoon (l'après-midi), Good evening (en arrivant le soir).",
            "Good night! sert à se quitter le soir ou avant d'aller dormir, jamais à saluer.",
            "How are you? I'm fine, thanks. And you? Pour une première rencontre : Nice to meet you!",
            "Pour partir : Goodbye!, Bye!, See you later!, See you tomorrow!, See you soon!",
            "Mr, Mrs, Ms ou Miss + nom de famille pour parler poliment à un adulte.",
          ],
          example: {
            statement: "Il est 8 h 15. En arrivant au collège, Léa croise son professeur d'anglais, Mr Taylor, puis son amie Emma. Écrivez en anglais le petit dialogue de Léa avec chacun d'eux.",
            solution: [
              "Repérer le moment de la journée : 8 h 15, c'est le matin, donc « Good morning » pour une formule polie.",
              "Repérer à qui l'on parle : Mr Taylor est un adulte, il faut une formule polie avec son titre et son nom ; Emma est une amie, on peut dire « Hi! ».",
              "Avec le professeur : « Léa : Good morning, Mr Taylor! Mr Taylor : Good morning, Léa. How are you? Léa : I'm fine, thank you. And you? Mr Taylor : I'm very well, thanks. »",
              "Avec Emma : « Léa : Hi, Emma! How are you? Emma : I'm great, thanks! And you? Léa : I'm OK. See you at lunchtime! Emma : Bye! »",
              "Réponse : une formule polie avec le titre pour l'adulte (Good morning, Mr Taylor!), une formule familière pour l'amie (Hi, Emma!), et à chaque fois la question « How are you? » suivie d'une réponse.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Quelle formule utilisez-vous dans chaque situation ? Choisissez parmi : Good morning, Good afternoon, Good evening, Good night, Goodbye. a) Vous arrivez au collège à 8 heures. b) Vous saluez votre voisine à 15 heures. c) Vous arrivez chez vos grands-parents à 19 heures. d) Vous allez vous coucher. e) Vous quittez la boulangerie.",
              hint: "Regardez d'abord l'heure, puis demandez-vous si vous arrivez (vous saluez) ou si vous partez (vous prenez congé).",
              solution: [
                "a) Good morning : c'est le matin et vous arrivez.",
                "b) Good afternoon : il est 15 heures, c'est l'après-midi.",
                "c) Good evening : c'est le soir et vous arrivez, vous saluez donc ; Good night serait une erreur.",
                "d) Good night : vous allez dormir.",
                "e) Goodbye : vous partez.",
              ],
            },
            {
              level: 2,
              statement: "Sam et Tom se rencontrent dans la rue. Remettez leurs répliques dans l'ordre, puis traduisez le dialogue en français. a) « I'm fine, thanks. And you? » b) « Hello, Tom! How are you? » c) « Bye, Sam! See you tomorrow! » d) « I'm OK, thank you. Oh, it's time for my bus. Goodbye! »",
              hint: "Un dialogue commence par une salutation et se termine par une formule pour se quitter. Entre les deux, une question appelle une réponse.",
              solution: [
                "On commence par la salutation et la question : b) « Hello, Tom! How are you? » (Sam).",
                "Tom répond et renvoie la question : a) « I'm fine, thanks. And you? »",
                "Sam répond puis annonce son départ : d) « I'm OK, thank you. Oh, it's time for my bus. Goodbye! »",
                "Tom prend congé : c) « Bye, Sam! See you tomorrow! »",
                "Traduction : « Bonjour, Tom ! Comment vas-tu ? » « Je vais bien, merci. Et toi ? » « Ça va, merci. Oh, c'est l'heure de mon bus. Au revoir ! » « Salut, Sam ! À demain ! »",
                "Résultat : l'ordre est b, a, d, c.",
              ],
            },
            {
              level: 3,
              statement: "Défi : rédigez deux courts dialogues d'au moins quatre répliques. Dialogue 1 : à 14 heures, vous rencontrez pour la première fois la nouvelle professeure de musique, Mrs Clark. Dialogue 2 : le vendredi à 17 heures, vous quittez votre meilleur ami, Hugo, à la sortie du collège ; vous le reverrez lundi. Utilisez au moins une fois : une salutation adaptée à l'heure, « How are you? », « Nice to meet you » et une formule avec « See you ».",
              hint: "Pour chaque dialogue, posez-vous trois questions : quelle heure est-il ? À qui est-ce que je parle (un adulte ou un ami) ? Est-ce que j'arrive ou est-ce que je pars ?",
              solution: [
                "Analyse du dialogue 1 : 14 heures, c'est l'après-midi (Good afternoon) ; Mrs Clark est une adulte, on emploie son titre ; c'est une première rencontre (Nice to meet you).",
                "Dialogue 1 : « You : Good afternoon, Mrs Clark! Mrs Clark : Good afternoon! Nice to meet you. You : Nice to meet you too. How are you? Mrs Clark : I'm very well, thank you. »",
                "Analyse du dialogue 2 : on se quitte, donc pas de salutation d'arrivée ; Hugo est un ami (Bye) ; on se revoit lundi (See you on Monday).",
                "Dialogue 2 : « You : Bye, Hugo! Have a nice weekend! Hugo : Thanks, you too! See you on Monday! You : See you on Monday! Bye! »",
                "Résultat : deux dialogues adaptés au moment (afternoon, départ du vendredi) et à la personne (titre pour l'adulte, Bye pour l'ami).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque formule anglaise à sa traduction ou à son usage.",
            pairs: [
              { left: "Good afternoon!", right: "Bonjour ! (l'après-midi)" },
              { left: "Good evening!", right: "Bonsoir ! (en arrivant le soir)" },
              { left: "Good night!", right: "Bonne nuit ! (en partant le soir)" },
              { left: "See you tomorrow!", right: "À demain !" },
              { left: "Nice to meet you!", right: "Enchanté !" },
              { left: "How are you?", right: "Comment vas-tu ? Comment allez-vous ?" },
            ],
          },
          quiz: [
            {
              q: "Il est 10 heures. Vous entrez dans le bureau de la principale. Que dites-vous ?",
              options: ["Good night!", "Good morning!", "Good evening!", "Bye!"],
              answer: 1,
              why: "Good morning s'emploie le matin, jusqu'à midi. Good night sert à se quitter le soir.",
            },
            {
              q: "Quelle est la bonne réponse à « How are you? » ?",
              options: ["I'm fine, thanks.", "I'm eleven.", "Nice to meet you too.", "See you later, Tom."],
              answer: 0,
              why: "« How are you? » demande des nouvelles : on répond par « I'm fine, thanks », « I'm OK » ou « Not bad ».",
            },
            {
              q: "Votre ami part en vacances pour une semaine. Que lui dites-vous en le quittant ?",
              options: ["Good evening!", "Nice to meet you!", "See you soon!"],
              answer: 2,
              why: "See you soon signifie « À bientôt ». Good evening sert à saluer, Nice to meet you à une première rencontre.",
            },
            {
              q: "Quand dit-on « Good night! » ?",
              options: ["En arrivant chez quelqu'un le soir", "En partant le soir ou avant de dormir", "En saluant un adulte l'après-midi", "En rencontrant quelqu'un pour la première fois"],
              answer: 1,
              why: "Good night signifie « Bonne nuit » : c'est une formule pour se quitter. Pour saluer le soir, on dit Good evening.",
            },
            {
              q: "Quelle formule est correcte pour saluer votre professeur, John Smith ?",
              options: ["Hello, Mr John!", "Hello, Mrs Smith!", "Hello, Mr Smith!", "Hello, Smith!"],
              answer: 2,
              why: "On emploie Mr suivi du nom de famille pour un homme. Mrs s'emploie pour une femme.",
            },
          ],
          trap: "Utiliser « Good night! » pour saluer quelqu'un qui arrive le soir : c'est une formule pour se quitter. Pour dire bonsoir en arrivant, on dit « Good evening! ».",
          method: "Associez chaque formule à une heure et à un geste : arriver ou partir. Entraînez-vous à voix haute avec une horloge imaginaire : 9 h en arrivant, 15 h en arrivant, 20 h en arrivant, 22 h en partant, et dites chaque fois la formule qui convient.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'se-presenter',
          title: 'Dire son nom, son âge et d\'où l\'on vient avec « to be »',
          minutes: 30,
          objectives: [
            "Se présenter en donnant son nom, son âge, sa nationalité et sa ville d'origine.",
            "Conjuguer le verbe « to be » au présent, aux formes affirmative, négative et interrogative.",
            "Poser des questions simples pour faire connaissance et y répondre.",
          ],
          course: [
            {
              heading: "Le verbe « to be » au présent : la forme affirmative",
              paragraphs: [
                "Le verbe « to be » signifie « être ». C'est le verbe le plus utilisé en anglais, et il sert à se présenter. Au présent, il a trois formes : am, is et are. À l'oral et dans les messages entre amis, on utilise presque toujours la forme contractée, avec une apostrophe qui remplace la lettre disparue.",
                "I am (I'm) : je suis ; you are (you're) : tu es ou vous êtes ; he is (he's) : il est ; she is (she's) : elle est ; it is (it's) : il ou elle est, pour un objet ou un animal ; we are (we're) : nous sommes ; they are (they're) : ils ou elles sont. Le pronom « I » (je) s'écrit toujours avec une majuscule, même au milieu d'une phrase.",
              ],
              box: { label: "Règle", text: "I am → I'm. He, she, it is → he's, she's, it's. You, we, they are → you're, we're, they're." },
            },
            {
              heading: "Se présenter : le nom, l'âge, l'origine",
              paragraphs: [
                "Pour dire son nom : « My name is Lucas. », « My name's Lucas. » ou simplement « I'm Lucas. ». Pour demander le nom de quelqu'un : « What's your name? » (Comment t'appelles-tu ? ou Comment vous appelez-vous ?).",
                "Pour l'âge, l'anglais utilise le verbe être, et non le verbe avoir : « I'm eleven. » ou « I'm eleven years old. » (J'ai onze ans.). La question est : « How old are you? » (Quel âge as-tu ?). On ne dit jamais « I have eleven years ».",
                "Pour l'origine : « I'm from France. » (Je viens de France.), « I'm from Lyon. ». La question est : « Where are you from? » (D'où viens-tu ?). On peut aussi donner sa nationalité : « I'm French. ». En anglais, les noms de pays et les adjectifs de nationalité prennent toujours une majuscule : France, French, England, English.",
              ],
              box: { label: "À retenir", text: "What's your name? My name's Lucas. How old are you? I'm twelve. Where are you from? I'm from Lyon, in France. I'm French." },
            },
            {
              heading: "La forme négative",
              paragraphs: [
                "Pour dire ce que l'on n'est pas, on ajoute « not » après am, is ou are : « I am not English. », « She is not twelve. », « They are not from London. ».",
                "Les formes contractées sont très courantes : I'm not ; he isn't, she isn't, it isn't (ou he's not, she's not, it's not) ; you aren't, we aren't, they aren't (ou you're not, we're not, they're not). Attention : la forme « amn't » n'existe pas en anglais courant ; on dit seulement « I'm not ».",
              ],
              box: { label: "Exemple", text: "I'm not from Paris, I'm from Lille. Tom isn't eleven, he's twelve. We aren't English, we're French." },
            },
            {
              heading: "La forme interrogative et les réponses courtes",
              paragraphs: [
                "Pour poser une question fermée (à laquelle on répond par oui ou par non), on inverse le sujet et le verbe : « You are French. » devient « Are you French? ». « She is eleven. » devient « Is she eleven? ».",
                "On répond par une réponse courte qui reprend le verbe : « Yes, I am. » ou « No, I'm not. » ; « Yes, she is. » ou « No, she isn't. ». À la forme affirmative, la réponse courte ne se contracte jamais : on dit « Yes, I am. », et non « Yes, I'm. ».",
                "Les questions ouvertes commencent par un mot interrogatif, suivi du verbe puis du sujet : What (que, quel), How old (quel âge), Where (où). Exemple : « Where is Emma from? » (D'où vient Emma ?). Réponse : « She's from Scotland. » (Elle vient d'Écosse.).",
              ],
              box: { label: "Règle", text: "Question : verbe + sujet (Are you English?). Réponse courte : Yes, I am. / No, I'm not. Jamais de contraction dans « Yes, I am »." },
            },
          ],
          keyPoints: [
            "To be au présent : I am, you are, he / she / it is, we are, they are.",
            "Contractions : I'm, you're, he's, she's, it's, we're, they're ; au négatif : I'm not, isn't, aren't.",
            "L'âge se dit avec to be : I'm eleven (years old). Jamais « I have eleven years ».",
            "Les trois questions pour faire connaissance : What's your name? How old are you? Where are you from?",
            "Question fermée : on inverse le verbe et le sujet (Are you French?). Réponse courte : Yes, I am. / No, I'm not.",
            "I (je), les pays et les nationalités prennent toujours une majuscule : I'm French.",
          ],
          example: {
            statement: "Lisez la fiche d'un correspondant (données fictives), puis rédigez sa présentation à la première personne. Fiche : Name : Jack Wilson ; Age : 12 ; City : Manchester ; Country : England ; Nationality : English.",
            solution: [
              "Le nom : « My name's Jack Wilson. » (ou « I'm Jack Wilson. »).",
              "L'âge, avec le verbe to be et non avec have : « I'm twelve years old. »",
              "L'origine, avec from : « I'm from Manchester, in England. »",
              "La nationalité, avec une majuscule : « I'm English. »",
              "Réponse : « Hello! My name's Jack Wilson. I'm twelve years old. I'm from Manchester, in England. I'm English. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec am, is ou are. a) I ... eleven. b) My sister ... ten. c) We ... from Nantes. d) You ... my friend. e) Paul and Léo ... French. f) It ... a cat.",
              hint: "Cherchez le sujet de chaque phrase et remplacez-le par un pronom (I, he, she, it, we, they) : c'est lui qui décide de la forme du verbe.",
              solution: [
                "a) I am eleven : avec I, toujours am.",
                "b) My sister is ten : my sister = she, donc is.",
                "c) We are from Nantes.",
                "d) You are my friend.",
                "e) Paul and Léo are French : Paul and Léo = they, donc are.",
                "f) It is a cat.",
              ],
            },
            {
              level: 2,
              statement: "Mettez chaque phrase à la forme négative, puis posez la question correspondante et donnez une réponse courte affirmative. a) She is from Scotland. b) You are twelve. c) They are English.",
              hint: "Pour la négation, ajoutez not après le verbe (isn't, aren't). Pour la question, placez le verbe avant le sujet. Attention : à une question avec « you », on répond avec « I ».",
              solution: [
                "a) Négation : She isn't from Scotland. Question : Is she from Scotland? Réponse : Yes, she is.",
                "b) Négation : You aren't twelve. Question : Are you twelve? Réponse : Yes, I am (on répond avec I, et sans contraction).",
                "c) Négation : They aren't English. Question : Are they English? Réponse : Yes, they are.",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici les réponses d'Oliver à une interview. Retrouvez les quatre questions, puis présentez Oliver à la troisième personne (He...). Réponses : 1) « My name's Oliver. » 2) « I'm eleven. » 3) « I'm from Dublin. » 4) « No, I'm not English, I'm Irish. »",
              hint: "Pour chaque réponse, demandez-vous quelle information est donnée (le nom, l'âge, l'origine, la nationalité), puis choisissez le mot interrogatif. La réponse 4 commence par No : c'est une question fermée. Pour la présentation, remplacez I par he et am par is.",
              solution: [
                "1) Le nom : « What's your name? »",
                "2) L'âge : « How old are you? »",
                "3) L'origine : « Where are you from? »",
                "4) Une réponse en Yes ou No appelle une question fermée, avec le verbe en tête : « Are you English? »",
                "Présentation à la troisième personne : I'm devient he's, I'm not devient he isn't.",
                "Résultat : « He's Oliver. He's eleven. He's from Dublin, in Ireland. He isn't English, he's Irish. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes en anglais ?",
            statements: [
              { text: "I have eleven years.", true: false, why: "L'âge se dit avec to be : I'm eleven (years old)." },
              { text: "She's from Canada.", true: true, why: "She's = she is ; from introduit l'origine." },
              { text: "Are you French? Yes, I'm.", true: false, why: "La réponse courte affirmative ne se contracte pas : Yes, I am." },
              { text: "We aren't from London.", true: true, why: "Aren't = are not, la forme négative avec we." },
              { text: "i am twelve.", true: false, why: "Le pronom I s'écrit toujours avec une majuscule." },
              { text: "He is english.", true: false, why: "Les nationalités prennent une majuscule : He is English." },
              { text: "They're my friends.", true: true, why: "They're = they are : ce sont mes amis." },
            ],
          },
          quiz: [
            {
              q: "Complétez : « My parents ... from Spain. »",
              options: ["is", "are", "am", "has"],
              answer: 1,
              why: "My parents = they : le verbe to be prend la forme are.",
            },
            {
              q: "Comment dit-on « J'ai douze ans » ?",
              options: ["I have twelve years.", "I'm twelve.", "I've got twelve.", "I am twelve old."],
              answer: 1,
              why: "En anglais, l'âge se dit avec to be : I'm twelve ou I'm twelve years old.",
            },
            {
              q: "Quelle est la bonne réponse courte à « Is Emma from Wales? » ?",
              options: ["Yes, she's.", "Yes, it is.", "Yes, Emma's.", "Yes, she is."],
              answer: 3,
              why: "On reprend le pronom (she) et le verbe (is), sans contraction dans une réponse courte affirmative.",
            },
            {
              q: "Quelle question permet de demander à quelqu'un d'où il vient ?",
              options: ["Where are you from?", "Where you are from?", "Where is you from?", "From where you are?"],
              answer: 0,
              why: "Mot interrogatif, puis verbe, puis sujet : Where are you from? Avec you, le verbe est are.",
            },
            {
              q: "Quelle phrase est une forme négative correcte ?",
              options: ["I amn't English.", "I isn't English.", "I not am English.", "I'm not English."],
              answer: 3,
              why: "Avec I, la négation est I'm not (I am not). La forme « amn't » n'existe pas en anglais courant.",
            },
          ],
          trap: "Traduire mot à mot « j'ai onze ans » par « I have eleven years » : en anglais, l'âge se dit avec le verbe être : « I'm eleven » ou « I'm eleven years old ».",
          method: "Préparez votre « carte d'identité orale » : quatre phrases (nom, âge, ville, nationalité) que vous savez dire sans regarder. Puis transformez chaque phrase en question (What's your name? How old are you? Where are you from?) pour pouvoir interroger un camarade.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'alphabet-epeler',
          title: 'L\'alphabet : épeler son nom',
          minutes: 25,
          objectives: [
            "Réciter l'alphabet anglais et reconnaître les lettres à l'oral.",
            "Épeler son prénom, son nom de famille et un mot simple.",
            "Demander à quelqu'un d'épeler un mot et noter correctement ce qu'il épelle.",
          ],
          course: [
            {
              heading: "Vingt-six lettres, mais d'autres sons",
              paragraphs: [
                "L'anglais utilise les mêmes 26 lettres que le français, mais la plupart se prononcent différemment. Pour épeler, il faut donc apprendre le nom anglais de chaque lettre. Voici une prononciation approchée, écrite avec des sons français : A (éï), B (bi), C (si), D (di), E (i), F (èf), G (dji), H (éïtch), I (aï), J (djéï), K (kéï), L (èl), M (èm).",
                "N (èn), O (ôou), P (pi), Q (kiou), R (âr, le r se prononce à peine en anglais britannique), S (ès), T (ti), U (iou), V (vi), W (dabeul-iou), X (èks), Y (ouaï), Z (zèd en anglais britannique, zi en anglais américain). La meilleure façon d'apprendre ces sons reste d'écouter un enregistrement, par exemple la chanson de l'alphabet, et de répéter à voix haute.",
              ],
              box: { label: "Repère", text: "En « i » : B, C, D, E, G, P, T, V (et Z en américain). En « éï » : A, H, J, K. En « è » : F, L, M, N, S, X (et Z en britannique). En « aï » : I, Y. En « iou » : Q, U, W. Seuls : O (ôou) et R (âr)." },
            },
            {
              heading: "Les lettres pièges pour un francophone",
              paragraphs: [
                "Certaines lettres se confondent facilement, car leur nom anglais ressemble au nom d'une autre lettre en français. Le E anglais se dit « i », alors que le I anglais se dit « aï ». Le G se dit « dji » et le J se dit « djéï » : c'est presque l'inverse du français. Le A se dit « éï » et le R se dit « âr ».",
                "Pour ne pas vous tromper, retenez des rimes avec des mots que vous connaissez : le E anglais rime avec « tea » (le thé), le I rime avec « my » (mon), le G rime avec « three » (trois) et le J rime avec « day » (le jour), tout comme le A.",
              ],
              box: { label: "Attention", text: "E se dit « i », I se dit « aï ». G se dit « dji », J se dit « djéï ». Ce sont les quatre lettres qu'il faut surveiller quand vous épelez un nom." },
            },
            {
              heading: "Épeler un mot : les expressions utiles",
              paragraphs: [
                "Le prénom se dit first name et le nom de famille surname. Pour demander à quelqu'un d'épeler un mot, on dit : « How do you spell it? » (Comment ça s'écrit ?), « How do you spell your surname? » ou, plus poliment, « Can you spell your name, please? ». On répond en donnant les lettres une à une, avec une petite pause entre chacune.",
                "Quand une lettre est doublée, les Britanniques disent le plus souvent « double » suivi de la lettre : Emma s'épelle « E, double M, A ». Les Américains disent plus souvent les deux lettres (M, M). Pour préciser qu'une lettre est une majuscule, on dit « capital » : « capital P ».",
                "Pour une adresse e-mail, le signe @ se dit « at » et le point se dit « dot » : leo.martin@example.com se lit « leo dot martin at example dot com ». Le tiret se dit « hyphen » et le tiret bas « underscore ».",
              ],
              box: { label: "Exemple", text: "What's your name? My name's Harry Jones. How do you spell Jones? J, O, N, E, S (djéï, ôou, èn, i, ès)." },
            },
          ],
          keyPoints: [
            "Les 26 lettres sont les mêmes qu'en français, mais leurs noms anglais sont différents : il faut apprendre chacun.",
            "E se dit « i » et I se dit « aï » ; G se dit « dji » et J se dit « djéï ».",
            "A, H, J, K en « éï » ; B, C, D, E, G, P, T, V en « i » ; I et Y en « aï » ; Q, U, W en « iou ».",
            "How do you spell it? Can you spell your name, please?",
            "Lettre doublée : double + lettre (double L). Majuscule : capital. Dans une adresse e-mail : @ = at, point = dot.",
          ],
          example: {
            statement: "Au téléphone, une secrétaire vous demande : « Can you spell your surname, please? ». Votre nom de famille est Girard. Écrivez ce que vous répondez, puis indiquez la prononciation approchée de chaque lettre.",
            solution: [
              "Comprendre la question : surname = le nom de famille ; spell = épeler.",
              "Découper le mot lettre par lettre : G, I, R, A, R, D.",
              "Repérer les pièges : G se dit « dji » (et non « jé ») ; I se dit « aï » (et non « i »).",
              "Prononcer les autres lettres : R (âr), A (éï), R (âr), D (di).",
              "Réponse : « Yes, of course. G, I, R, A, R, D. », soit « dji, aï, âr, éï, âr, di ».",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Quelle lettre entendez-vous ? Écrivez la lettre qui correspond à chaque prononciation approchée : a) « aï » ; b) « i » ; c) « djéï » ; d) « dji » ; e) « éï » ; f) « ouaï » ; g) « âr ».",
              hint: "Relisez l'encadré « Attention » : les pièges les plus fréquents sont E et I, G et J.",
              solution: [
                "a) « aï » : I.",
                "b) « i » : E.",
                "c) « djéï » : J.",
                "d) « dji » : G.",
                "e) « éï » : A.",
                "f) « ouaï » : Y.",
                "g) « âr » : R.",
              ],
            },
            {
              level: 2,
              statement: "Un camarade épelle des prénoms anglais. Écrivez chaque prénom. a) « djéï, éï, èm, i, ès » ; b) « kéï, i, double èl, ouaï » ; c) « dji, âr, éï, si, i » ; d) « aï, vi, ouaï ».",
              hint: "Écrivez chaque lettre au fur et à mesure, puis relisez le mot entier. « Double » annonce une lettre écrite deux fois.",
              solution: [
                "a) djéï (J), éï (A), èm (M), i (E), ès (S) : James.",
                "b) kéï (K), i (E), double èl (LL), ouaï (Y) : Kelly.",
                "c) dji (G), âr (R), éï (A), si (C), i (E) : Grace.",
                "d) aï (I), vi (V), ouaï (Y) : Ivy.",
                "Résultat : James, Kelly, Grace, Ivy.",
              ],
            },
            {
              level: 3,
              statement: "Défi : Sophie Wright s'inscrit à un club de sport. Rédigez en anglais le dialogue entre Sophie et la personne de l'accueil, qui lui demande son prénom, son nom de famille (qu'elle doit épeler) et son adresse e-mail : sophie_w@example.com (adresse fictive). Indiquez la prononciation approchée des lettres épelées.",
              hint: "Utilisez « What's your first name? », « What's your surname? », « How do you spell it? » et « What's your e-mail address? ». Pour l'adresse, pensez à « underscore », « at » et « dot ».",
              solution: [
                "Le prénom : « Receptionist : Hello! What's your first name, please? Sophie : Sophie. »",
                "Le nom de famille : « Receptionist : And what's your surname? Sophie : Wright. Receptionist : How do you spell it? »",
                "Épeler Wright lettre par lettre, y compris le W qu'on n'entend pas dans le mot : « W, R, I, G, H, T », soit « dabeul-iou, âr, aï, dji, éïtch, ti ». Pièges : I (aï), G (dji), H (éïtch).",
                "L'adresse e-mail : « Receptionist : What's your e-mail address? Sophie : It's sophie underscore w at example dot com. »",
                "La fin : « Receptionist : Thank you, Sophie. Goodbye! Sophie : Goodbye! »",
                "Résultat : un dialogue complet où le nom est épelé avec les bons noms de lettres et l'adresse lue avec underscore, at et dot.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Chaque carte donne la prononciation approchée d'une lettre anglaise. Retrouvez les lettres et remettez les cartes dans l'ordre alphabétique.",
            items: ["« dji »", "« éïtch »", "« aï »", "« djéï »", "« kéï »", "« èl »"],
          },
          quiz: [
            {
              q: "Comment se prononce la lettre E en anglais ?",
              options: ["« è »", "« i »", "« eu »", "« aï »"],
              answer: 1,
              why: "Le E anglais se dit « i », comme dans « tea ». C'est le I anglais qui se dit « aï ».",
            },
            {
              q: "Quelle lettre se prononce « djéï » ?",
              options: ["G", "Y", "A", "J"],
              answer: 3,
              why: "J se dit « djéï » et rime avec « day ». G se dit « dji ».",
            },
            {
              q: "Que signifie « double L » quand on épelle un mot ?",
              options: ["Deux L à la suite", "Un L majuscule", "Un L muet", "Un L à la fin du mot"],
              answer: 0,
              why: "« Double » annonce une lettre écrite deux fois de suite, comme dans Kelly. Une majuscule se dit « capital ».",
            },
            {
              q: "Quelle question permet de demander comment s'écrit un mot ?",
              options: ["How are you?", "How do you pronounce it?", "How do you spell it?", "What's your name?"],
              answer: 2,
              why: "To spell signifie épeler. To pronounce signifie prononcer : c'est une autre question.",
            },
            {
              q: "Comment lit-on l'adresse tom.lee@example.com ?",
              options: ["tom point lee at example point com", "tom dot lee arobase example dot com", "tom stop lee at example stop com", "tom dot lee at example dot com"],
              answer: 3,
              why: "Dans une adresse e-mail, le point se dit « dot » et le signe @ se dit « at ».",
            },
          ],
          trap: "Épeler à la française et confondre les noms anglais de E (« i ») et de I (« aï »), ou de G (« dji ») et de J (« djéï ») : c'est l'erreur qui rend un nom illisible au téléphone.",
          method: "Épelez chaque jour trois mots de votre vie à voix haute (votre nom, celui de votre ville, celui d'un ami), en vous enregistrant. Réécoutez-vous et vérifiez en priorité les quatre lettres pièges : E, I, G et J.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'nombres',
          title: 'Les nombres pour compter et donner son âge',
          minutes: 30,
          objectives: [
            "Compter de 0 à 100 en anglais et écrire les nombres en lettres.",
            "Distinguer à l'oral les nombres en -teen et en -ty.",
            "Utiliser les nombres pour donner son âge, un numéro de téléphone et le résultat d'un calcul simple.",
          ],
          course: [
            {
              heading: "De 0 à 12 : les nombres à connaître par cœur",
              paragraphs: [
                "Les douze premiers nombres ont chacun un nom propre, qu'il faut apprendre par cœur : zero (0), one (1), two (2), three (3), four (4), five (5), six (6), seven (7), eight (8), nine (9), ten (10), eleven (11), twelve (12). Attention à l'orthographe : two (le w ne se prononce pas), eight (le gh ne se prononce pas), twelve (avec un v).",
                "Le zéro a plusieurs noms selon la situation : « zero » en mathématiques et en sciences, « oh » (comme la lettre O) dans un numéro de téléphone en anglais britannique, et « nil » pour le score d'un match de football au Royaume-Uni : « two nil » signifie deux à zéro.",
              ],
            },
            {
              heading: "De 13 à 19 : les nombres en -teen",
              paragraphs: [
                "De 13 à 19, les nombres se terminent par -teen : thirteen (13), fourteen (14), fifteen (15), sixteen (16), seventeen (17), eighteen (18), nineteen (19). Trois d'entre eux changent un peu : thirteen (et non « threeteen »), fifteen (et non « fiveteen ») et eighteen (avec un seul t).",
                "C'est de là que vient le mot « teenager », un adolescent : quelqu'un qui a entre 13 et 19 ans, l'âge des nombres en -teen. Dans ces nombres, l'accent tombe sur la fin du mot : thir-TEEN, four-TEEN, fif-TEEN.",
              ],
              box: { label: "Repère", text: "13 thirteen, 14 fourteen, 15 fifteen, 16 sixteen, 17 seventeen, 18 eighteen, 19 nineteen. Accent sur -TEEN." },
            },
            {
              heading: "Les dizaines et les nombres composés jusqu'à 100",
              paragraphs: [
                "Les dizaines se terminent par -ty : twenty (20), thirty (30), forty (40), fifty (50), sixty (60), seventy (70), eighty (80), ninety (90). Attention : forty s'écrit sans u (alors que four et fourteen en ont un), et ninety garde le e de nine. Dans ces nombres, l'accent tombe sur le début du mot : THIR-ty, FOR-ty, FIF-ty.",
                "Pour les nombres composés, on relie la dizaine et l'unité par un trait d'union : twenty-one (21), thirty-five (35), forty-eight (48), ninety-nine (99). C'est plus simple qu'en français : 70 se dit seventy, 80 eighty et 90 ninety, sans calcul. Enfin, 100 se dit « a hundred » ou « one hundred ».",
                "À l'oral, la différence entre -teen et -ty s'entend surtout grâce à l'accent : thirTEEN (13) et THIRty (30), fifTEEN (15) et FIFty (50). Quand on vous donne un nombre, écoutez bien où tombe l'accent ; en cas de doute, demandez : « Fifteen or fifty? ».",
              ],
              box: { label: "Attention", text: "13 thirteen / 30 thirty ; 14 fourteen / 40 forty (sans u) ; 15 fifteen / 50 fifty ; 18 eighteen / 80 eighty." },
            },
            {
              heading: "Utiliser les nombres au quotidien",
              paragraphs: [
                "Pour l'âge, on utilise le verbe be : « How old are you? I'm twelve. », « My brother is fifteen. ». Pour un calcul, on dit plus (+), minus (-) et times (×), et le résultat s'annonce avec « is » ou « equals » : « Two plus three is five. », « Ten minus four is six. », « Three times four equals twelve. ».",
                "Pour un numéro de téléphone, on dit les chiffres un par un, en marquant des pauses entre les groupes : 06 45 32 18 se dit « oh six, four five, three two, one eight ». Quand deux chiffres identiques se suivent, les Britanniques disent souvent « double » : 55 se dit « double five ».",
              ],
              box: { label: "Exemple", text: "Two plus two is four. Ten minus three is seven. Five times two is ten. How old are you? I'm eleven." },
            },
          ],
          keyPoints: [
            "De 0 à 12 : à apprendre par cœur (attention à l'orthographe de two, eight et twelve).",
            "De 13 à 19 : -teen (thirteen, fifteen et eighteen ont une orthographe particulière).",
            "Dizaines : -ty (twenty, thirty, forty sans u, fifty, sixty, seventy, eighty, ninety). 100 : a hundred.",
            "De 21 à 99 : dizaine + trait d'union + unité (twenty-one, forty-seven).",
            "-teen : accent à la fin (fifTEEN) ; -ty : accent au début (FIFty).",
            "Téléphone : chiffre par chiffre, 0 = oh, 55 = double five.",
            "Calcul : plus, minus, times, puis is ou equals pour le résultat.",
          ],
          example: {
            statement: "Écrivez en lettres l'âge de chaque membre de cette famille (données fictives), puis rédigez une phrase en anglais pour la grand-mère : Ben a 14 ans, Lucy 9 ans, leur mère 40 ans et leur grand-mère 73 ans.",
            solution: [
              "14 : un nombre en -teen, qui garde le u de four : fourteen.",
              "9 : nine.",
              "40 : une dizaine en -ty, sans u : forty.",
              "73 : seventy, puis un trait d'union, puis three : seventy-three.",
              "La phrase, avec le verbe be pour l'âge : « The grandmother is seventy-three years old. »",
              "Réponse : fourteen, nine, forty, seventy-three ; The grandmother is seventy-three years old.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez ces nombres en lettres : a) 12 ; b) 15 ; c) 20 ; d) 34 ; e) 40 ; f) 88 ; g) 100.",
              hint: "Pour les nombres composés, écrivez d'abord la dizaine, puis l'unité, reliées par un trait d'union. Méfiez-vous de 15 et de 40.",
              solution: [
                "a) 12 : twelve.",
                "b) 15 : fifteen (et non « fiveteen »).",
                "c) 20 : twenty.",
                "d) 34 : thirty-four.",
                "e) 40 : forty (sans u).",
                "f) 88 : eighty-eight.",
                "g) 100 : a hundred (ou one hundred).",
              ],
            },
            {
              level: 2,
              statement: "Calculez, puis écrivez l'opération entière en anglais, en toutes lettres. a) 6 + 7 ; b) 20 - 8 ; c) 4 × 5 ; d) 50 + 30 ; e) 9 × 11.",
              hint: "Calculez d'abord en chiffres, puis traduisez : plus, minus, times, et « is » pour annoncer le résultat.",
              solution: [
                "a) 6 + 7 = 13 : Six plus seven is thirteen.",
                "b) 20 - 8 = 12 : Twenty minus eight is twelve.",
                "c) 4 × 5 = 20 : Four times five is twenty.",
                "d) 50 + 30 = 80 : Fifty plus thirty is eighty.",
                "e) 9 × 11 = 99 : Nine times eleven is ninety-nine.",
              ],
            },
            {
              level: 3,
              statement: "Défi : lisez ce message laissé sur un répondeur (données fictives), puis notez en chiffres les informations demandées. « Hi, it's Amy! My new phone number is oh seven seven double nine, four six two, oh eight one. My house is at number fifty-two, Park Road. Oh, and my brother Sam is nineteen, not ninety! » 1) Le numéro de téléphone d'Amy. 2) Le numéro de sa maison. 3) L'âge de Sam. 4) Quelle confusion Amy veut-elle éviter, et pourquoi est-elle fréquente ?",
              hint: "Écrivez les chiffres un par un en écoutant (ou en lisant) : « oh » vaut 0 et « double nine » vaut 99. Pour la question 4, comparez les terminaisons -teen et -ty.",
              solution: [
                "1) oh (0), seven (7), seven (7), double nine (99), four (4), six (6), two (2), oh (0), eight (8), one (1) : 07799 462081, soit 11 chiffres, la longueur d'un numéro de portable britannique.",
                "2) fifty-two : 52 (Park Road).",
                "3) nineteen : 19 ans.",
                "4) Amy veut éviter la confusion entre nineteen (19) et ninety (90) : ces deux mots se ressemblent beaucoup à l'oral ; seule la place de l'accent (nineTEEN, NINEty) et la fin du mot les distinguent.",
                "Résultat : 07799 462081 ; 52 ; 19 ans ; confusion -teen / -ty.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos connaissances sur les nombres anglais.",
            statements: [
              { text: "40 s'écrit « fourty ».", true: false, why: "40 s'écrit forty, sans u, alors que four et fourteen en ont un." },
              { text: "15 s'écrit « fifteen ».", true: true, why: "Five devient fif- dans fifteen (15) et fifty (50)." },
              { text: "Dans « thirteen », l'accent tombe sur la fin du mot.", true: true, why: "Les nombres en -teen sont accentués à la fin : thirTEEN." },
              { text: "« Seventy-two » veut dire 62.", true: false, why: "Seventy = 70, donc seventy-two = 72. 62 se dit sixty-two." },
              { text: "Au Royaume-Uni, dans un numéro de téléphone, le 0 se dit souvent « oh ».", true: true, why: "On dit « oh », comme la lettre O : oh seven, oh one..." },
              { text: "En anglais, 21 s'écrit « twenty and one ».", true: false, why: "On relie la dizaine et l'unité par un trait d'union : twenty-one." },
              { text: "« Eighty » s'écrit avec deux t.", true: false, why: "Eighty n'a qu'un seul t, comme eighteen." },
            ],
          },
          quiz: [
            {
              q: "Comment s'écrit 40 ?",
              options: ["fourty", "fourteen", "forty", "fortee"],
              answer: 2,
              why: "40 se dit forty, sans u. Fourteen veut dire 14.",
            },
            {
              q: "Quel nombre entend-on dans « fifTEEN », avec l'accent sur la fin ?",
              options: ["50", "5", "55", "15"],
              answer: 3,
              why: "L'accent sur la fin signale un nombre en -teen : fifteen = 15. Fifty (50) est accentué au début.",
            },
            {
              q: "Comment dit-on « 3 × 4 = 12 » ?",
              options: ["Three times four is twelve.", "Three plus four is twelve.", "Three minus four is twelve.", "Three four is twelve."],
              answer: 0,
              why: "Le signe × se dit times. Plus correspond à + et minus à -.",
            },
            {
              q: "Quel est le résultat de « eleven plus nine » ?",
              options: ["nineteen", "twenty", "eighteen", "twenty-one"],
              answer: 1,
              why: "11 + 9 = 20, qui se dit twenty.",
            },
            {
              q: "Que dit un commentateur britannique pour le score de football 3 à 0 ?",
              options: ["three nil", "three zero", "three oh", "three none"],
              answer: 0,
              why: "Au Royaume-Uni, le zéro d'un score de football se dit nil.",
            },
          ],
          trap: "Confondre les nombres en -teen et en -ty (thirteen et thirty, fifteen et fifty), surtout à l'oral, et écrire « fourty » au lieu de « forty ».",
          method: "Pour distinguer -teen et -ty, frappez dans vos mains sur la syllabe accentuée en disant chaque paire : fif-TEEN, FIF-ty. Puis demandez à un proche de vous dicter des numéros de téléphone inventés et vérifiez chiffre par chiffre.",
        },
      ],
    },
    {
      id: 'famille',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'membres-famille',
          title: 'Les membres de la famille et le génitif « \'s »',
          minutes: 30,
          objectives: [
            "Nommer les membres de sa famille en anglais.",
            "Exprimer l'appartenance et les liens de parenté avec le génitif « 's ».",
            "Présenter sa famille ou celle d'un personnage en quelques phrases.",
          ],
          course: [
            {
              heading: "Le vocabulaire de la famille",
              paragraphs: [
                "Les parents : the mother (familier : mum en anglais britannique, mom en anglais américain) et the father (familier : dad). Les enfants : a son (un fils), a daughter (une fille), a brother (un frère), a sister (une sœur). Attention : en anglais, « parents » désigne seulement le père et la mère ; pour les autres membres de la famille, on dit « relatives » (les proches, la parenté).",
                "Les grands-parents (grandparents) : the grandmother (familier : grandma ou granny) et the grandfather (familier : grandpa ou grandad). Les autres proches : an uncle (un oncle), an aunt (une tante), a cousin (un cousin ou une cousine : le mot est le même pour une fille et pour un garçon), a nephew (un neveu), a niece (une nièce).",
                "Les familles d'aujourd'hui sont variées. Le nouveau compagnon de la mère se dit a stepfather (un beau-père) et la nouvelle compagne du père a stepmother (une belle-mère). Un demi-frère se dit a half-brother et une demi-sœur a half-sister. Un enfant qui n'a ni frère ni sœur est an only child (un enfant unique).",
              ],
              box: { label: "À retenir", text: "mother / father ; son / daughter ; brother / sister ; grandmother / grandfather ; uncle / aunt ; nephew / niece ; cousin (pour un garçon comme pour une fille)." },
            },
            {
              heading: "Le génitif « 's » : dire « le frère de Tom »",
              paragraphs: [
                "En français, on dit « le frère de Tom ». En anglais, on place d'abord le possesseur, puis 's, puis ce qui est possédé : « Tom's brother ». C'est le génitif. Il se lit donc dans l'ordre inverse du français : Tom's brother = le frère de Tom.",
                "Avec le génitif, le nom possédé ne prend jamais d'article : on dit « Emma's mother » (la mère d'Emma), et non « the Emma's mother ». La tournure « the mother of Emma » est très rare : pour les personnes, on emploie le génitif. Le génitif s'emploie surtout avec des personnes et des animaux : my sister's bike (le vélo de ma sœur), my dog's name (le nom de mon chien).",
              ],
              box: { label: "Règle", text: "Possesseur + 's + ce qui est possédé. Tom's sister = la sœur de Tom. Pas d'article « the » devant le nom possédé." },
            },
            {
              heading: "Les cas particuliers du génitif",
              paragraphs: [
                "Quand le possesseur est un nom au pluriel terminé par -s, on ajoute seulement l'apostrophe : « my parents' car » (la voiture de mes parents), « the girls' bedroom » (la chambre des filles). Quand le pluriel est irrégulier, sans -s, on ajoute 's : « the children's toys » (les jouets des enfants).",
                "Quand deux personnes partagent la même chose, on met 's seulement après la seconde : « Tom and Lucy's mother » (la mère de Tom et de Lucy, la même pour les deux). Pour un prénom qui se termine déjà par -s, on écrit le plus souvent 's : « James's sister », mais on rencontre aussi « James' sister ».",
                "Ne confondez pas le génitif et la contraction de « is ». Dans « Tom's brother », 's indique l'appartenance ; dans « Tom's twelve », 's remplace is (Tom is twelve). Pour savoir, essayez de remplacer 's par « is » : si la phrase garde un sens (Tom is twelve), c'est le verbe être ; sinon (Tom is brother), c'est un génitif.",
              ],
              box: { label: "Attention", text: "Pluriel en -s : apostrophe seule (my parents' house). Pluriel irrégulier : 's (the children's room). Test : si on peut remplacer 's par is, ce n'est pas un génitif." },
            },
          ],
          keyPoints: [
            "mother / father, son / daughter, brother / sister, grandparents, uncle / aunt, cousin.",
            "« Parents » désigne seulement le père et la mère ; les autres membres de la famille sont des relatives.",
            "Génitif : possesseur + 's + nom possédé : Tom's sister = la sœur de Tom.",
            "Pas d'article devant le nom possédé : Emma's mother, jamais « the Emma's mother ».",
            "Pluriel en -s : apostrophe seule (my parents' car) ; pluriel irrégulier : 's (the children's toys).",
            "Test : si 's peut être remplacé par is, c'est le verbe être (Tom's twelve = Tom is twelve).",
          ],
          example: {
            statement: "Voici une famille fictive. Peter et Mary Brown ont deux enfants, Jack et Kate. Kate est mariée avec David ; ils ont une fille, Lily. Écrivez trois phrases avec le génitif pour présenter les liens de Lily avec sa famille.",
            solution: [
              "Lily est la fille de Kate et de David, ses deux parents : on met 's une seule fois, après le second nom : « Lily is Kate and David's daughter. »",
              "Jack est le frère de Kate, donc l'oncle de Lily : « Jack is Lily's uncle. »",
              "Peter et Mary sont les parents de Kate, donc les grands-parents de Lily : « Peter and Mary are Lily's grandparents. »",
              "Vérifier : le possesseur d'abord, puis 's, puis le lien de parenté, sans « the ».",
              "Réponse : Lily is Kate and David's daughter. Jack is Lily's uncle. Peter and Mary are Lily's grandparents.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais avec le génitif : a) la sœur de Paul ; b) le chien d'Anna ; c) le père de Max ; d) la grand-mère de Léa ; e) la voiture de mes parents.",
              hint: "Commencez par le possesseur (la personne après « de »), ajoutez 's, puis le nom. Pour e), « parents » est un pluriel en -s.",
              solution: [
                "a) Paul's sister.",
                "b) Anna's dog.",
                "c) Max's father.",
                "d) Léa's grandmother.",
                "e) my parents' car : parents est un pluriel en -s, on ajoute seulement l'apostrophe.",
              ],
            },
            {
              level: 2,
              statement: "Lisez la présentation de Ruby (famille fictive), puis répondez en anglais par des phrases complètes avec le génitif. « Hi! I'm Ruby. My mum's name is Helen and my dad's name is Mark. Leo is my brother and Amy is my sister. My grandma, Rose, is Helen's mother. My uncle Tom is Mark's brother, and Jess is Tom's daughter. » Questions : 1) Who is Helen? 2) Who is Leo? 3) Who is Rose? 4) Who is Jess? 5) Who is Tom?",
              hint: "Répondez chaque fois avec « Ruby's » suivi du lien de parenté : « Helen is Ruby's... ». Pour Jess, réfléchissez : la fille de l'oncle de Ruby est sa cousine.",
              solution: [
                "1) Helen is Ruby's mother (her mum).",
                "2) Leo is Ruby's brother.",
                "3) Rose is Ruby's grandmother. She is also Helen's mother.",
                "4) Jess is Tom's daughter, so she is Ruby's cousin.",
                "5) Tom is Ruby's uncle. He is Mark's brother.",
              ],
            },
            {
              level: 3,
              statement: "Défi : chaque phrase contient une erreur. Corrigez-la et expliquez la règle en français. a) The Tom's sister is ten. b) Emma brother is twelve. c) My parent's house is big. (il s'agit des deux parents) d) The childrens' bedroom is blue. e) Anna's and Ben's mother is a teacher. (Anna et Ben ont la même mère)",
              hint: "Vérifiez quatre points : pas d'article devant le génitif, le 's n'est jamais oublié, la place de l'apostrophe dépend du pluriel, et un seul 's quand deux personnes partagent la même chose.",
              solution: [
                "a) Tom's sister is ten : pas d'article « the » avec le génitif.",
                "b) Emma's brother is twelve : le génitif demande 's après le possesseur.",
                "c) My parents' house is big : parents est un pluriel en -s, l'apostrophe se place après le s.",
                "d) The children's bedroom is blue : children est un pluriel irrégulier sans -s, on ajoute 's.",
                "e) Anna and Ben's mother is a teacher : la mère est commune aux deux, on met 's seulement après le second nom.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot anglais à sa traduction.",
            pairs: [
              { left: "aunt", right: "tante" },
              { left: "nephew", right: "neveu" },
              { left: "daughter", right: "fille (l'enfant de ses parents)" },
              { left: "grandparents", right: "grands-parents" },
              { left: "stepfather", right: "beau-père (le compagnon de la mère)" },
              { left: "only child", right: "enfant unique" },
            ],
          },
          quiz: [
            {
              q: "Comment dit-on « la mère de Sam » ?",
              options: ["the mother of Sam's", "Sam's mother", "the Sam's mother", "Sam mother's"],
              answer: 1,
              why: "Possesseur + 's + nom possédé, sans article : Sam's mother.",
            },
            {
              q: "Que signifie « my parents' house » ?",
              options: ["la maison de mon parent", "la maison de mes parents", "mes parents sont à la maison", "la maison de mes proches"],
              answer: 1,
              why: "L'apostrophe après le s indique un pluriel : les parents (le père et la mère) possèdent la maison.",
            },
            {
              q: "Dans « Tom's eleven », que remplace 's ?",
              options: ["le génitif", "has", "is", "us"],
              answer: 2,
              why: "On peut dire « Tom is eleven » : ici, 's est la contraction du verbe être, pas un génitif.",
            },
            {
              q: "Le frère de votre mère est votre...",
              options: ["cousin", "nephew", "grandfather", "uncle"],
              answer: 3,
              why: "Le frère de votre père ou de votre mère est votre oncle : your uncle.",
            },
            {
              q: "Comment dit-on « les jouets des enfants » ?",
              options: ["the children's toys", "the childrens' toys", "the childs' toys", "the toys of childrens"],
              answer: 0,
              why: "Children est un pluriel irrégulier, sans -s : on ajoute 's.",
            },
          ],
          trap: "Garder l'ordre du français et écrire « the mother of Tom » ou « the Tom's mother » : en anglais, le possesseur vient d'abord, sans article : Tom's mother.",
          method: "Pour former un génitif, posez la question « à qui ? » : la réponse (Tom) se place en premier, suivie de 's, puis de la chose ou de la personne. Relisez ensuite en traduisant à l'envers pour vérifier : Tom's sister, la sœur de Tom.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'possessifs',
          title: 'Les adjectifs possessifs : « my », « your », « his », « her »',
          minutes: 25,
          objectives: [
            "Employer les adjectifs possessifs anglais : my, your, his, her, its, our, their.",
            "Choisir entre his et her selon le possesseur, et non selon ce qui est possédé.",
            "Distinguer à l'écrit its et it's, their et they're.",
          ],
          course: [
            {
              heading: "Les adjectifs possessifs",
              paragraphs: [
                "Un adjectif possessif indique à qui appartient quelque chose. Il se place devant le nom, comme en français. En anglais, il y en a un pour chaque personne : my (mon, ma, mes), your (ton, ta, tes), his (son, sa, ses, pour un homme ou un garçon), her (son, sa, ses, pour une femme ou une fille), its (son, sa, ses, pour un animal ou une chose), our (notre, nos), your (votre, vos), their (leur, leurs).",
                "Bonne nouvelle : en anglais, l'adjectif possessif est invariable. Il ne change ni avec le genre ni avec le nombre du nom qui suit : my brother, my sister, my parents. Il ne prend jamais de -s : on dit « my books », jamais « mys books ».",
                "En anglais, on emploie le possessif devant les parties du corps et les vêtements, là où le français met souvent un article : « Raise your hand. » (Levez la main.), « I wash my hands. » (Je me lave les mains.), « Put on your coat. » (Mets ton manteau.).",
              ],
              box: { label: "Règle", text: "I → my ; you → your ; he → his ; she → her ; it → its ; we → our ; you → your ; they → their." },
            },
            {
              heading: "His ou her : tout dépend du possesseur",
              paragraphs: [
                "C'est la grande différence avec le français. En français, « son » ou « sa » s'accorde avec ce qui est possédé : son vélo, sa trousse. En anglais, on choisit his ou her selon le possesseur : si c'est un garçon ou un homme, on dit his ; si c'est une fille ou une femme, on dit her.",
                "Exemples : « Tom and his sister » (Tom et sa sœur : celui qui possède, c'est Tom, un garçon). « Emma and her brother » (Emma et son frère : celle qui possède, c'est Emma, une fille). De même : « Emma and her father », « Tom and his mother ». Pour bien choisir, demandez-vous toujours : à qui est-ce ?",
              ],
              box: { label: "Attention", text: "Sa mère, en parlant de Tom → his mother. Son père, en parlant d'Emma → her father. On regarde le possesseur, jamais ce qui est possédé." },
            },
            {
              heading: "Its, our et their",
              paragraphs: [
                "« Its » s'emploie pour une chose ou pour un animal dont on ne précise pas s'il est mâle ou femelle : « The cat is in its basket. » (Le chat est dans son panier.). Pour un animal de compagnie que l'on connaît bien, les anglophones emploient souvent his ou her : « My dog Max loves his ball. ».",
                "« Our » signifie notre ou nos : « our school », « our teachers ». « Their » signifie leur ou leurs : « The children are with their grandparents. » (Les enfants sont avec leurs grands-parents.).",
                "Attention aux homophones, ces mots qui se prononcent de la même façon : its (son, sa) et it's (= it is) ; their (leur), they're (= they are) et there (là). L'apostrophe signale toujours une contraction, jamais un adjectif possessif : « It's my cat. Its name is Tiger. ».",
              ],
              box: { label: "Astuce", text: "Si vous pouvez remplacer le mot par « it is », écrivez it's ; sinon, écrivez its. Même test pour they're (= they are) et their." },
            },
          ],
          keyPoints: [
            "my, your, his, her, its, our, your, their : toujours devant un nom.",
            "Le possessif est invariable : my brother, my sister, my parents (jamais de -s).",
            "His ou her se choisit selon le possesseur : Tom and his sister, Emma and her brother.",
            "its = possessif ; it's = it is. their = leur ; they're = they are ; there = là.",
            "Devant les parties du corps et les vêtements, on met un possessif : Raise your hand.",
          ],
          example: {
            statement: "Traduisez en anglais : « Léo est avec sa sœur et Chloé est avec son frère. Leurs parents sont dans leur jardin. »",
            solution: [
              "« sa sœur », en parlant de Léo : le possesseur est un garçon, donc his : his sister.",
              "« son frère », en parlant de Chloé : la personne qui possède est une fille, donc her : her brother.",
              "« Leurs parents » et « leur jardin » : il y a plusieurs possesseurs, donc their dans les deux cas, toujours sans -s : their parents, their garden.",
              "Réponse : « Léo is with his sister and Chloé is with her brother. Their parents are in their garden. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec my, your, his, her, our ou their. a) I love ... mum. b) Lucas is with ... dog. c) Anna is with ... grandfather. d) We are in ... classroom. e) Sam and Lily are with ... cousins. f) Are you with ... friends?",
              hint: "Cherchez le possesseur dans la phrase (I, Lucas, Anna, we...) et transformez-le en possessif. Ne regardez pas le nom qui suit.",
              solution: [
                "a) my mum (le possesseur est I).",
                "b) his dog (Lucas est un garçon).",
                "c) her grandfather (Anna est une fille ; le grand-père est un homme, mais cela ne compte pas).",
                "d) our classroom (we).",
                "e) their cousins (Sam and Lily = they).",
                "f) your friends (you).",
              ],
            },
            {
              level: 2,
              statement: "Choisissez le bon mot. a) The dog is in (its / it's) kennel. b) (Its / It's) a beautiful day. c) (Their / They're) my cousins. d) (Their / They're) house is near the school. e) My sister and (his / her) friend are eleven. f) Tom and (his / her) mother are from Leeds.",
              hint: "Pour its / it's et their / they're, faites le test : remplacez par « it is » ou « they are ». Si la phrase a un sens, il faut l'apostrophe. Pour his / her, cherchez le possesseur.",
              solution: [
                "a) its kennel : « it is kennel » n'a pas de sens, c'est le possessif.",
                "b) It's a beautiful day : it is a beautiful day.",
                "c) They're my cousins : they are my cousins.",
                "d) Their house : « they are house » n'a pas de sens, c'est le possessif.",
                "e) her friend : le possesseur est my sister, une fille.",
                "f) his mother : le possesseur est Tom, un garçon.",
              ],
            },
            {
              level: 3,
              statement: "Défi : réécrivez ce texte sur la famille de Harry (personnage fictif) en remplaçant chaque génitif par un adjectif possessif, pour éviter les répétitions. « Harry is twelve. Harry's sister is Ella. Ella's best friend is Mia. Harry and Ella's parents are teachers. Harry and Ella's dog is Rex. Rex's ball is red. »",
              hint: "Pour chaque génitif, demandez-vous qui est le possesseur : Harry (un garçon), Ella (une fille), Harry et Ella (plusieurs personnes), Rex (un animal).",
              solution: [
                "Harry's sister : le possesseur est un garçon, donc His sister.",
                "Ella's best friend : le possesseur est une fille, donc Her best friend.",
                "Harry and Ella's parents, Harry and Ella's dog : deux possesseurs, donc Their parents, their dog.",
                "Rex's ball : le possesseur est un animal, donc Its ball (His ball est aussi accepté pour un chien que l'on connaît bien).",
                "Résultat : « Harry is twelve. His sister is Ella. Her best friend is Mia. Their parents are teachers. Their dog is Rex. Its ball is red. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes ?",
            statements: [
              { text: "Emma is with his brother.", true: false, why: "Le possesseur est Emma, une fille : Emma is with her brother." },
              { text: "Tom loves his mother.", true: true, why: "Le possesseur est Tom, un garçon : his, même si la mère est une femme." },
              { text: "They are with theirs parents.", true: false, why: "L'adjectif possessif est their, invariable : their parents." },
              { text: "It's my cat and its name is Tiger.", true: true, why: "It's = it is ; its est le possessif (son nom)." },
              { text: "We love our school.", true: true, why: "We → our : notre école." },
              { text: "Mys books are on the table.", true: false, why: "Le possessif ne prend jamais de -s : my books." },
              { text: "Raise your hand, please.", true: true, why: "Devant une partie du corps, l'anglais emploie le possessif : your hand." },
            ],
          },
          quiz: [
            {
              q: "« Julie et son père » se traduit par...",
              options: ["Julie and his father", "Julie and its father", "Julie and her father", "Julie and she father"],
              answer: 2,
              why: "Le possesseur est Julie, une fille : her father. On ne regarde pas le père.",
            },
            {
              q: "Quel adjectif possessif correspond à « they » ?",
              options: ["their", "there", "they're"],
              answer: 0,
              why: "Their = leur, leurs. There signifie « là » et they're est la contraction de they are.",
            },
            {
              q: "Complétez : « The bird is in ... cage. »",
              options: ["it's", "its", "it"],
              answer: 1,
              why: "Its est le possessif (sa cage). It's signifie it is.",
            },
            {
              q: "Comment dit-on « nos professeurs » ?",
              options: ["ours teachers", "us teachers", "we teachers", "our teachers"],
              answer: 3,
              why: "We → our, invariable : our teachers.",
            },
            {
              q: "Quelle phrase traduit « Lève la main » ?",
              options: ["Raise the hand.", "Raise your hand.", "Raise yours hand.", "Raise you hand."],
              answer: 1,
              why: "Devant une partie du corps, l'anglais emploie l'adjectif possessif your, invariable.",
            },
          ],
          trap: "Accorder his ou her avec ce qui est possédé, comme en français (« Emma and his brother ») : en anglais, on choisit selon le possesseur : Emma and her brother.",
          method: "Avant d'écrire his ou her, pointez du doigt le possesseur dans la phrase et demandez-vous : est-ce un garçon ou une fille ? Relisez ensuite chaque its et chaque their en testant « it is » et « they are ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'decrire-personne',
          title: 'Décrire quelqu\'un avec « have got » et des adjectifs',
          minutes: 30,
          objectives: [
            "Conjuguer « have got » au présent, aux formes affirmative, négative et interrogative.",
            "Décrire l'apparence physique d'une personne (cheveux, yeux, taille) avec des adjectifs.",
            "Placer correctement les adjectifs devant le nom et décrire le caractère avec quelques adjectifs simples.",
          ],
          course: [
            {
              heading: "« Have got » : avoir, posséder",
              paragraphs: [
                "Pour dire ce que l'on possède ou pour décrire quelqu'un, l'anglais britannique utilise souvent « have got » (avoir). Il se conjugue ainsi : I have got (I've got), you have got (you've got), he / she / it has got (he's got, she's got, it's got), we have got (we've got), they have got (they've got). À la troisième personne du singulier, have devient has.",
                "Exemples : « I've got a brother. » (J'ai un frère.), « She's got a cat. » (Elle a un chat.), « We've got a big family. » (Nous avons une grande famille.). Attention : dans « she's got », 's remplace has et non is. Si got suit, c'est has.",
              ],
              box: { label: "Règle", text: "I / you / we / they have got → 've got. He / she / it has got → 's got." },
            },
            {
              heading: "Les formes négative et interrogative",
              paragraphs: [
                "À la forme négative, on ajoute not entre have (ou has) et got : « I haven't got a dog. » (Je n'ai pas de chien.), « She hasn't got a sister. », « They haven't got glasses. ».",
                "À la forme interrogative, on place have (ou has) avant le sujet, et got reste après : « Have you got a pet? » (As-tu un animal ?), « Has he got brown eyes? ». On répond par une réponse courte, sans got : « Yes, I have. » ou « No, I haven't. » ; « Yes, he has. » ou « No, he hasn't. ».",
                "En anglais américain, on dit plus souvent « have » sans got : « I have a brother. », « She has blue eyes. ». Les deux formes sont correctes ; ce cours utilise surtout have got, très courant au Royaume-Uni.",
              ],
              box: { label: "À retenir", text: "Have you got a pet? Yes, I have. / No, I haven't. Has she got a bike? Yes, she has. / No, she hasn't." },
            },
            {
              heading: "Décrire le physique : cheveux, yeux, taille",
              paragraphs: [
                "Pour les cheveux (hair), on donne la longueur, puis la forme, puis la couleur : long (longs) ou short (courts) ; curly (bouclés) ou straight (raides) ; black, brown, blond (blonds), red (roux) ou grey (gris). « She's got long curly red hair. ». Attention : hair est singulier quand il désigne la chevelure : « long hair », jamais « long hairs ».",
                "Pour les yeux (eyes) : « He's got blue eyes. » (Il a les yeux bleus.), « green eyes », « brown eyes ». On ne met pas « the » : on dit « He's got blue eyes », pas « He's got the eyes blue ». On peut aussi avoir des lunettes (glasses), une barbe (a beard), une moustache (a moustache) ou des taches de rousseur (freckles).",
                "Pour la taille et la silhouette, on utilise le verbe be et non have got : « He's tall. » (Il est grand.), « She's short. » (Elle est petite.), « I'm slim. » (Je suis mince.).",
              ],
              box: { label: "Règle", text: "L'adjectif se place devant le nom et reste invariable : blue eyes (jamais « blues eyes »), a tall boy. Ordre pour les cheveux : longueur, forme, couleur : long curly brown hair." },
            },
            {
              heading: "Le caractère : quelques adjectifs utiles",
              paragraphs: [
                "Pour décrire la personnalité, on utilise be + adjectif : kind (gentil), funny (drôle), shy (timide), friendly (sympathique, aimable), clever (intelligent), lazy (paresseux), generous (généreux), noisy (bruyant), quiet (calme, silencieux). « My cousin is funny and friendly. ».",
                "Pour nuancer, on ajoute very (très), quite (assez) ou a bit (un peu, plutôt pour un défaut) : « She's very kind. », « He's quite shy. », « I'm a bit lazy. ». Le petit mot but (mais) permet d'opposer deux idées : « He's shy but very funny. ».",
              ],
            },
          ],
          keyPoints: [
            "have got : I've got, you've got, he / she / it's got (= has got), we've got, they've got.",
            "Négatif : haven't got, hasn't got. Question : Have you got...? Yes, I have. / No, I haven't.",
            "Cheveux : longueur, forme, couleur + hair au singulier : long straight black hair.",
            "Pas de « the » : He's got blue eyes. L'adjectif est invariable et se place devant le nom.",
            "Taille et caractère avec be : She's tall. He's funny. Very, quite et a bit permettent de nuancer.",
          ],
          example: {
            statement: "Décrivez en anglais ce personnage fictif : Mia a 12 ans, elle est grande, elle a les cheveux longs, raides et blonds, les yeux verts et des lunettes. Elle est drôle mais un peu timide.",
            solution: [
              "L'âge et la taille, avec be : « Mia is twelve. She's tall. »",
              "Les cheveux, avec has got, les adjectifs dans l'ordre longueur, forme, couleur, et hair au singulier : « She's got long straight blond hair. »",
              "Les yeux et les lunettes, sans the et avec l'adjectif devant le nom : « She's got green eyes and glasses. » On peut tout réunir dans une seule phrase.",
              "Le caractère, avec be, but et a bit : « She's funny but a bit shy. »",
              "Réponse : « Mia is twelve. She's tall. She's got long straight blond hair, green eyes and glasses. She's funny but a bit shy. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec have got, has got, haven't got ou hasn't got. Le signe (+) demande la forme affirmative, le signe (-) la forme négative. a) I ... a sister. (+) b) My dad ... a beard. (+) c) We ... a dog. (-) d) Emma ... brown eyes. (+) e) My grandparents ... a car. (-) f) Tom ... glasses. (-)",
              hint: "Repérez le sujet : he, she, it (ou le nom d'une seule personne) prend has ; les autres sujets prennent have.",
              solution: [
                "a) I have got a sister (I've got).",
                "b) My dad has got a beard (my dad = he).",
                "c) We haven't got a dog.",
                "d) Emma has got brown eyes (Emma = she).",
                "e) My grandparents haven't got a car (my grandparents = they).",
                "f) Tom hasn't got glasses (Tom = he).",
              ],
            },
            {
              level: 2,
              statement: "Posez la question qui correspond à chaque phrase, puis donnez la réponse courte indiquée. a) Lucy has got a hamster. (oui) b) You have got a brother. (non) c) Your parents have got a big house. (oui)",
              hint: "Placez have ou has en tête de question, puis le sujet, puis got. Dans la réponse courte, reprenez have ou has, mais pas got. À une question avec you, on répond avec I.",
              solution: [
                "a) Has Lucy got a hamster? Yes, she has.",
                "b) Have you got a brother? No, I haven't.",
                "c) Have your parents got a big house? Yes, they have.",
              ],
            },
            {
              level: 3,
              statement: "Défi : cette description (personnage fictif) contient quatre erreurs. Corrigez-les, puis ajoutez deux phrases de votre choix, l'une sur la taille de Sam, l'autre sur son caractère. « My brother Sam is ten. He have got short curly hairs and the eyes blue. He's got not glasses. »",
              hint: "Vérifiez quatre points : has avec he, hair sans -s, l'adjectif devant le nom et sans the, la place de not à la forme négative.",
              solution: [
                "Erreur 1 : « He have got » devient « He has got » (ou He's got), car le sujet est he.",
                "Erreur 2 : « hairs » devient « hair » : la chevelure est au singulier.",
                "Erreur 3 : « the eyes blue » devient « blue eyes » : pas de the, et l'adjectif se place devant le nom.",
                "Erreur 4 : « He's got not glasses » devient « He hasn't got glasses » : not se place entre has et got.",
                "Texte corrigé : « My brother Sam is ten. He's got short curly hair and blue eyes. He hasn't got glasses. »",
                "Deux phrases ajoutées, avec be : « He's quite short. He's funny but a bit noisy. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les mots dans l'ordre pour former une phrase affirmative correcte.",
            items: ["My", "sister", "has", "got", "long", "brown", "hair."],
          },
          quiz: [
            {
              q: "Complétez : « My father ... a beard. »",
              options: ["have got", "has got", "is got", "got has"],
              answer: 1,
              why: "My father = he : à la troisième personne du singulier, on emploie has got.",
            },
            {
              q: "Comment dit-on « Elle a les yeux verts » ?",
              options: ["She's got green eyes.", "She's got the green eyes.", "She's got eyes green.", "She's got greens eyes."],
              answer: 0,
              why: "Pas de the, l'adjectif se place devant le nom et reste invariable : green eyes.",
            },
            {
              q: "Quelle est la réponse courte correcte à « Have you got a pet? » ?",
              options: ["Yes, I have got.", "Yes, I've.", "Yes, I have.", "Yes, I got."],
              answer: 2,
              why: "Dans la réponse courte, on reprend have sans got et sans contraction : Yes, I have.",
            },
            {
              q: "Dans « He's got red hair », que remplace 's ?",
              options: ["has", "is", "his", "us"],
              answer: 0,
              why: "Quand got suit, 's est la contraction de has : he has got.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["She's got long hairs.", "She's got hair long.", "She's long hair.", "She's got long hair."],
              answer: 3,
              why: "Hair (la chevelure) est singulier et l'adjectif se place devant le nom : long hair.",
            },
          ],
          trap: "Écrire « hairs » pour la chevelure, ou traduire mot à mot « il a les yeux bleus » par « he has got the eyes blue » : on dit « He's got blue eyes » et « long hair », sans the, avec l'adjectif devant le nom.",
          method: "Pour décrire quelqu'un, suivez toujours le même ordre : âge et taille (be), cheveux et yeux (have got), puis caractère (be). Entraînez-vous avec des photos de famille ou des personnages de films, à l'oral puis à l'écrit.",
        },
      ],
    },
    {
      id: 'ecole',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'matieres-emploi-temps',
          title: 'Les matières et l\'emploi du temps',
          minutes: 25,
          objectives: [
            "Nommer les matières scolaires et les jours de la semaine en anglais.",
            "Lire et présenter un emploi du temps (a timetable).",
            "Dire quelle est sa matière préférée et donner un avis simple sur une matière.",
          ],
          course: [
            {
              heading: "Les matières scolaires (school subjects)",
              paragraphs: [
                "Voici les principales matières : English (anglais), French (français), maths (mathématiques), history (histoire), geography (géographie), science (sciences), biology (biologie, proche de nos SVT), physics (physique), technology (technologie), art (arts plastiques), music (musique), PE (éducation physique et sportive, pour Physical Education), citizenship (éducation civique), Spanish (espagnol), German (allemand).",
                "Les noms de langues prennent toujours une majuscule en anglais : English, French, Spanish, German. Les autres matières s'écrivent en général avec une minuscule dans une phrase (I've got history on Monday), même si on leur met souvent une majuscule dans un emploi du temps. Maths est l'abréviation britannique de mathematics ; les Américains disent math.",
              ],
              box: { label: "Attention", text: "Les langues ont toujours une majuscule : English, French, Spanish. PE se prononce « pi-i » et désigne le sport (Physical Education)." },
            },
            {
              heading: "Les jours de la semaine et l'emploi du temps",
              paragraphs: [
                "Les jours de la semaine s'écrivent toujours avec une majuscule en anglais : Monday (lundi), Tuesday (mardi), Wednesday (mercredi), Thursday (jeudi), Friday (vendredi), Saturday (samedi), Sunday (dimanche). Devant un jour, on emploie la préposition on : « on Monday » (lundi), « on Fridays » (le vendredi, tous les vendredis).",
                "L'emploi du temps se dit a timetable en anglais britannique (a schedule en anglais américain). On y trouve les cours (lessons), la récréation (break) et le déjeuner (lunch ou lunchtime). Pour présenter son emploi du temps, on utilise have got ou have : « On Monday, I've got English, maths and history. », « We have PE on Thursday afternoon. ».",
                "Pour poser la question : « What have you got on Tuesday? » (Qu'est-ce que tu as le mardi ?), « Have you got science on Friday? » ; réponse : « Yes, I have. » ou « No, I haven't. ».",
              ],
              box: { label: "Règle", text: "Les jours prennent une majuscule et la préposition on : on Monday, on Wednesday morning. Wednesday se prononce « ouènzdéï » : le premier d ne se prononce pas." },
            },
            {
              heading: "Parler de ses matières : préférences et avis",
              paragraphs: [
                "Pour dire sa matière préférée : « My favourite subject is art. » (en anglais américain : favorite, sans u). La question est : « What's your favourite subject? » (Quelle est ta matière préférée ?).",
                "Pour donner un avis, on utilise be + adjectif : « Maths is interesting. » (intéressant), « History is boring. » (ennuyeux), « Music is easy. » (facile), « Science is difficult. » (difficile), « PE is fun. » (amusant). Pour dire qu'on est fort dans une matière : « I'm good at English. » ; pour dire qu'on a des difficultés : « I'm not very good at maths. ».",
                "Attention : les noms de matières qui se terminent par -s sont pourtant singuliers : « Maths is my favourite subject. », « Physics is difficult. ». On ne dit jamais « Maths are ».",
              ],
              box: { label: "À retenir", text: "What's your favourite subject? My favourite subject is music. I'm good at history. Maths is fun!" },
            },
          ],
          keyPoints: [
            "Matières : English, French, maths, history, geography, science, technology, art, music, PE.",
            "Les langues et les jours de la semaine prennent toujours une majuscule.",
            "On + jour : on Monday, on Friday afternoon.",
            "Emploi du temps : timetable (UK), schedule (US) ; un cours : a lesson ; la récréation : break.",
            "My favourite subject is... I'm good at... Maths is interesting / boring / easy / difficult.",
            "Maths et physics sont singuliers : Maths is fun.",
          ],
          example: {
            statement: "Voici l'emploi du temps du lundi de Noah (données fictives) : anglais, mathématiques, récréation, histoire, déjeuner, EPS l'après-midi. Noah adore l'EPS mais trouve l'histoire ennuyeuse. Rédigez sa présentation en anglais, à la première personne.",
            solution: [
              "Le jour, avec on et une majuscule : « On Monday... ».",
              "Les matières dans l'ordre, avec have got, et une majuscule à English : « On Monday, I've got English, maths and history in the morning, and PE in the afternoon. »",
              "La récréation : « We have a break after maths. »",
              "Les avis, avec favourite et be + adjectif : « PE is my favourite subject, but history is boring. »",
              "Réponse : « On Monday, I've got English, maths and history in the morning, and PE in the afternoon. We have a break after maths. PE is my favourite subject, but history is boring. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez ces matières et ces jours en anglais, sans oublier les majuscules nécessaires : a) l'anglais ; b) l'histoire ; c) mercredi ; d) les arts plastiques ; e) l'EPS ; f) jeudi ; g) l'espagnol.",
              hint: "Les langues et les jours prennent une majuscule ; les autres matières, non. Attention à ne pas confondre Tuesday et Thursday.",
              solution: [
                "a) English (une langue : majuscule).",
                "b) history.",
                "c) Wednesday (un jour : majuscule).",
                "d) art.",
                "e) PE (Physical Education).",
                "f) Thursday.",
                "g) Spanish (une langue : majuscule).",
              ],
            },
            {
              level: 2,
              statement: "Lisez l'emploi du temps de Grace, une élève anglaise (données fictives), puis répondez en anglais par des phrases complètes. Monday : maths, English, science, PE. Tuesday : history, French, art, music. Wednesday : English, maths, geography, technology. Questions : 1) What has Grace got on Tuesday? 2) Has she got PE on Wednesday? 3) When has she got art? 4) How many maths lessons has she got?",
              hint: "Passez de I à she : she has got (she's got). Dans la réponse courte : Yes, she has ou No, she hasn't. Pour la question 4, comptez les cases de maths.",
              solution: [
                "1) On Tuesday, she's got history, French, art and music.",
                "2) No, she hasn't. She's got PE on Monday.",
                "3) She's got art on Tuesday.",
                "4) Maths apparaît le lundi et le mercredi : She's got two maths lessons, on Monday and on Wednesday.",
              ],
            },
            {
              level: 3,
              statement: "Défi : écrivez un court message (60 mots environ) à votre correspondant anglais, Jack. Présentez votre emploi du temps du mercredi et du vendredi, votre matière préférée et une matière que vous trouvez difficile, puis terminez par une question pour comparer avec lui.",
              hint: "Organisez votre message : une formule d'ouverture, deux phrases pour les jours (on + jour, I've got...), une phrase pour la matière préférée, une pour la matière difficile, une question, une formule de fin.",
              solution: [
                "Ouverture : « Hi Jack! »",
                "Les jours, avec on, une majuscule et have got : « On Wednesday, I've got French, maths, English and music, and I haven't got school in the afternoon. On Friday, I've got history, science, technology and PE. »",
                "La matière préférée et la matière difficile : « My favourite subject is PE because it's fun. I'm not very good at maths: it's difficult for me. »",
                "La question pour comparer et la fin : « What's your favourite subject? Have you got PE on Friday too? Bye, Inès »",
                "Vérifier : majuscules aux langues et aux jours, maths au singulier (it's difficult), une question finale.",
                "Résultat : un message d'environ 60 mots qui présente deux jours, une matière préférée et une matière difficile, et se termine par une question.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot anglais à sa traduction.",
            pairs: [
              { left: "PE", right: "l'EPS" },
              { left: "art", right: "les arts plastiques" },
              { left: "Wednesday", right: "mercredi" },
              { left: "Thursday", right: "jeudi" },
              { left: "break", right: "la récréation" },
              { left: "timetable", right: "l'emploi du temps" },
            ],
          },
          quiz: [
            {
              q: "Comment écrit-on « le français » (la matière) en anglais ?",
              options: ["French", "french", "France", "Frenchs"],
              answer: 0,
              why: "Les noms de langues prennent toujours une majuscule : French. France est le nom du pays.",
            },
            {
              q: "Complétez : « I've got music ... Friday. »",
              options: ["in", "at", "on", "the"],
              answer: 2,
              why: "Devant un jour de la semaine, on emploie on : on Friday.",
            },
            {
              q: "Quel jour est « Thursday » ?",
              options: ["mardi", "samedi", "mercredi", "jeudi"],
              answer: 3,
              why: "Thursday = jeudi. Mardi se dit Tuesday : ne confondez pas les deux.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["Maths are my favourite subject.", "Maths is my favourite subject.", "Maths is my subject favourite.", "My favourite subject are maths."],
              answer: 1,
              why: "Maths est singulier (is) et l'adjectif favourite se place devant le nom.",
            },
            {
              q: "Comment dit-on « Je suis bon en anglais » ?",
              options: ["I'm good in English.", "I'm good for English.", "I have good English.", "I'm good at English."],
              answer: 3,
              why: "On dit to be good at : I'm good at English.",
            },
          ],
          trap: "Oublier la majuscule aux langues et aux jours (« english », « monday ») ou dire « Maths are » : les jours et les langues prennent toujours une majuscule, et maths est un nom singulier.",
          method: "Recopiez votre véritable emploi du temps en anglais et affichez-le près de votre bureau. Chaque matin, dites à voix haute « Today is Tuesday. I've got... » pour fixer les jours et les matières.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'heure',
          title: 'Dire l\'heure : « What time is it? »',
          minutes: 30,
          objectives: [
            "Demander et dire l'heure en anglais.",
            "Utiliser o'clock, past, to, quarter et half pour donner l'heure.",
            "Lire une heure écrite en chiffres et dire à quelle heure a lieu une activité avec at.",
          ],
          course: [
            {
              heading: "Demander l'heure et dire les heures pleines",
              paragraphs: [
                "Pour demander l'heure, on dit : « What time is it? » ou « What's the time? ». Pour être poli avec une personne que l'on ne connaît pas, on ajoute « Excuse me » : « Excuse me, what time is it, please? ». La réponse commence toujours par « It's... » (Il est...).",
                "Pour une heure pleine, on emploie o'clock : « It's three o'clock. » (Il est trois heures.), « It's eleven o'clock. ». O'clock s'emploie seulement pour les heures pleines : on ne dit jamais « It's three o'clock fifteen ». Midi se dit « midday » ou « noon », et minuit « midnight ».",
              ],
            },
            {
              heading: "Past, to, quarter et half",
              paragraphs: [
                "Jusqu'à la demie, on compte les minutes écoulées après l'heure avec past (après) : « It's ten past four. » (Il est quatre heures dix : 4 h 10), « It's twenty-five past eight. » (8 h 25). Le quart se dit quarter : « It's quarter past two. » ou « It's a quarter past two. » (2 h 15). La demie se dit half : « It's half past six. » (6 h 30).",
                "Après la demie, on compte les minutes qui manquent jusqu'à l'heure suivante avec to : « It's twenty to five. » (Il est cinq heures moins vingt : 4 h 40), « It's quarter to nine. » (Il est neuf heures moins le quart : 8 h 45). C'est comme le « moins » du français : on annonce l'heure qui arrive.",
                "Avec past et to, on dit d'abord les minutes, puis l'heure. On emploie ces formes surtout pour les multiples de 5 ; pour les autres minutes, on ajoute le mot minutes : « It's seven minutes past three. » (3 h 07).",
              ],
              box: { label: "Repère", text: "De :01 à :30 → minutes + past + l'heure en cours (ten past four = 4 h 10). Après :30 → minutes qui manquent + to + l'heure suivante (quarter to nine = 8 h 45)." },
            },
            {
              heading: "L'heure « digitale », le matin et l'après-midi",
              paragraphs: [
                "On peut aussi lire l'heure comme sur un écran, en disant simplement l'heure puis les minutes : 7:20 se dit « seven twenty », 9:45 « nine forty-five », 2:05 « two oh five ». C'est la façon la plus courante pour les horaires de train ou de bus.",
                "Dans la vie courante, les anglophones donnent surtout l'heure sur 12 heures. Pour préciser, on ajoute a.m. (de minuit à midi) ou p.m. (de midi à minuit) : 8 a.m. = 8 heures du matin ; 8 p.m. = 20 heures. On peut aussi dire « in the morning », « in the afternoon » ou « in the evening » : « It's four o'clock in the afternoon. » (16 h). Pour passer d'une heure comme 17:00 à l'heure sur 12 heures, on retire 12 : 17 - 12 = 5, donc 5 p.m.",
              ],
              box: { label: "Attention", text: "13:00 → 1 p.m. ; 15:30 → half past three in the afternoon (3:30 p.m.) ; 20:45 → quarter to nine in the evening (8:45 p.m.)." },
            },
            {
              heading: "Dire à quelle heure : at",
              paragraphs: [
                "Pour dire à quelle heure a lieu une activité, on utilise at : « The English lesson is at ten o'clock. », « Lunch is at half past twelve. ». La question est : « What time is the film? » ou « What time is your maths lesson? » ; réponse : « It's at nine o'clock. ».",
                "Ne confondez pas « What time is it? » (Quelle heure est-il ?) et « What time is the lesson? » (À quelle heure est le cours ?). Dans la réponse à la seconde question, n'oubliez pas at : « It's at eight o'clock. ».",
              ],
              box: { label: "Exemple", text: "What time is it? It's quarter past eight. What time is the bus? It's at twenty to nine." },
            },
          ],
          keyPoints: [
            "What time is it? ou What's the time? La réponse commence par It's...",
            "Heure pleine : It's five o'clock (o'clock seulement pour les heures pleines).",
            "past : minutes après l'heure (ten past four = 4 h 10) ; to : minutes avant l'heure suivante (twenty to five = 4 h 40).",
            "quarter = le quart ; half past = et demie (half past six = 6 h 30).",
            "Heure digitale : 7:45 = seven forty-five. a.m. avant midi, p.m. après midi.",
            "À quelle heure ? at : The lesson is at nine o'clock.",
          ],
          example: {
            statement: "Écrivez en anglais, de deux façons (avec past ou to, puis à la manière digitale), l'heure indiquée par ces trois horloges : 7:15 ; 10:30 ; 3:50.",
            solution: [
              "7:15 : 15 minutes après 7 heures, donc past et quarter : « It's quarter past seven. » ; en digital : « It's seven fifteen. »",
              "10:30 : la demie, donc half past : « It's half past ten. » ; en digital : « It's ten thirty. »",
              "3:50 : on a dépassé la demie, on compte ce qui manque jusqu'à 4 heures : 60 - 50 = 10 minutes, donc to et l'heure suivante : « It's ten to four. » ; en digital : « It's three fifty. »",
              "Réponse : quarter past seven (seven fifteen) ; half past ten (ten thirty) ; ten to four (three fifty).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez l'heure en chiffres. a) It's five o'clock. b) It's half past nine. c) It's quarter past eleven. d) It's twenty to three. e) It's quarter to seven. f) It's five past one.",
              hint: "Avec to, retirez les minutes à l'heure annoncée : twenty to three, c'est 3 heures moins 20 minutes.",
              solution: [
                "a) 5:00.",
                "b) 9:30.",
                "c) 11:15.",
                "d) 3 h - 20 min = 2:40.",
                "e) 7 h - 15 min = 6:45.",
                "f) 1:05.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez ces heures du matin en anglais, avec o'clock, past ou to : a) 8:10 ; b) 6:30 ; c) 9:45 ; d) 4:25 ; e) 12:00 (midi) ; f) 11:35.",
              hint: "Regardez d'abord les minutes : 30 ou moins, utilisez past et l'heure en cours ; plus de 30, calculez 60 moins les minutes et utilisez to avec l'heure suivante.",
              solution: [
                "a) 8:10 : It's ten past eight.",
                "b) 6:30 : It's half past six.",
                "c) 9:45 : 60 - 45 = 15, donc It's quarter to ten.",
                "d) 4:25 : It's twenty-five past four.",
                "e) 12:00 : It's twelve o'clock, ou It's midday (noon).",
                "f) 11:35 : 60 - 35 = 25, donc It's twenty-five to twelve.",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici la journée de Ben (données fictives), donnée sur 24 heures. Rédigez six phrases en anglais pour dire à quelle heure a lieu chaque activité, avec at et une heure sur 12 heures (past ou to, et a.m., p.m. ou in the morning, in the afternoon, in the evening). Breakfast 7:30 ; bus 7:50 ; maths lesson 10:15 ; lunch 12:30 ; football club 16:45 ; dinner 19:00.",
              hint: "Pour les heures après 12:00, retirez 12. Pour les minutes après la demie, passez à l'heure suivante avec to. N'oubliez pas at devant l'heure.",
              solution: [
                "7:30 : « Breakfast is at half past seven in the morning (7:30 a.m.). »",
                "7:50 : 60 - 50 = 10, heure suivante 8 : « The bus is at ten to eight (7:50 a.m.). »",
                "10:15 : « The maths lesson is at quarter past ten (10:15 a.m.). »",
                "12:30 : après midi, donc p.m. : « Lunch is at half past twelve (12:30 p.m.). »",
                "16:45 : 16 - 12 = 4, puis 60 - 45 = 15, heure suivante 5 : « The football club is at quarter to five in the afternoon (4:45 p.m.). »",
                "19:00 : 19 - 12 = 7 : « Dinner is at seven o'clock in the evening (7 p.m.). »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces heures du matin dans l'ordre chronologique, de la plus tôt à la plus tardive.",
            items: ["It's quarter to eight.", "It's eight o'clock.", "It's five past eight.", "It's quarter past eight.", "It's half past eight.", "It's twenty to nine.", "It's ten to nine."],
          },
          quiz: [
            {
              q: "« It's half past four. » Quelle heure est-il ?",
              options: ["3 h 30", "4 h 15", "5 h 30", "4 h 30"],
              answer: 3,
              why: "Half past four signifie la demie après quatre heures : 4 h 30.",
            },
            {
              q: "Comment dit-on 6 h 45 ?",
              options: ["quarter past six", "quarter to seven", "quarter to six", "half past six"],
              answer: 1,
              why: "Après la demie, on compte ce qui manque jusqu'à l'heure suivante : sept heures moins le quart, quarter to seven.",
            },
            {
              q: "Quelle question permet de demander l'heure ?",
              options: ["What's the time?", "How time is it?", "What hour is it?", "Which time is it?"],
              answer: 0,
              why: "On dit What's the time? ou What time is it? Les autres formes n'existent pas en anglais.",
            },
            {
              q: "Comment dit-on 15 heures (trois heures de l'après-midi) ?",
              options: ["3 a.m.", "15 o'clock", "3 p.m.", "five p.m."],
              answer: 2,
              why: "15 - 12 = 3 et l'on est après midi : 3 p.m. On ne dit pas « 15 o'clock ».",
            },
            {
              q: "Complétez : « The film is ... eight o'clock. »",
              options: ["in", "on", "to", "at"],
              answer: 3,
              why: "Devant une heure, on emploie at : at eight o'clock.",
            },
          ],
          trap: "Avec to, garder l'heure en cours au lieu de l'heure suivante : 8 h 40 se dit « twenty to nine » et non « twenty to eight ». Autre erreur fréquente : ajouter o'clock à une heure qui n'est pas pleine.",
          method: "Dessinez une horloge et coupez-la en deux par un trait vertical : à droite (de :00 à :30), c'est past et l'heure en cours ; à gauche (après :30), c'est to et l'heure suivante. Entraînez-vous ensuite chaque fois que vous voyez une horloge.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'consignes-classe',
          title: 'Comprendre les consignes en classe : l\'impératif',
          minutes: 25,
          objectives: [
            "Comprendre et exécuter les consignes données en classe en anglais.",
            "Former l'impératif affirmatif et négatif (Don't...) et faire une proposition avec Let's.",
            "Utiliser des phrases utiles pour demander de l'aide ou une permission en classe.",
          ],
          course: [
            {
              heading: "L'impératif : donner un ordre ou une consigne",
              paragraphs: [
                "Pour donner une consigne, on utilise l'impératif. En anglais, il est très simple : on emploie la base verbale (le verbe sans « to »), sans sujet : « Listen. » (Écoutez.), « Open your books. » (Ouvrez vos livres.), « Sit down. » (Asseyez-vous.).",
                "La même forme sert pour une seule personne ou pour plusieurs, pour tutoyer comme pour vouvoyer : « Stand up! » peut vouloir dire « Lève-toi ! » ou « Levez-vous ! ». Pour être poli, on ajoute please, au début ou à la fin : « Please sit down. », « Close the door, please. ».",
              ],
              box: { label: "Règle", text: "Impératif = base verbale, sans sujet : Listen! Look! Repeat! Ajoutez please pour être poli." },
            },
            {
              heading: "Les consignes les plus fréquentes",
              paragraphs: [
                "En classe : Listen (écoutez), Look at the board (regardez le tableau), Repeat (répétez), Read the text (lisez le texte), Write the date (écrivez la date), Open your books ou Close your books (ouvrez ou fermez vos livres), Take out your notebooks (sortez vos cahiers), Raise your hand ou Put your hand up (levez la main).",
                "Pour les exercices : Work in pairs (travaillez par deux), Work in groups (travaillez en groupes), Match (reliez), Tick the right answer (cochez la bonne réponse), Circle (entourez), Underline (soulignez), Fill in the blanks (complétez les trous), Answer the questions (répondez aux questions), Copy (recopiez).",
              ],
            },
            {
              heading: "L'impératif négatif et Let's",
              paragraphs: [
                "Pour interdire, on place Don't (forme contractée de do not) devant la base verbale : « Don't talk! » (Ne parlez pas !), « Don't run in the corridor. » (Ne courez pas dans le couloir.), « Don't forget your homework. » (N'oubliez pas vos devoirs.). On ne dit jamais « No talk » ni « Not run ».",
                "Pour proposer de faire quelque chose ensemble, on utilise Let's (contraction de let us) + base verbale : « Let's start! » (Commençons !), « Let's sing a song. » (Chantons une chanson.), « Let's play! » (Jouons !). Let's correspond à la forme en « -ons » du français : la personne qui parle fait aussi partie du groupe.",
              ],
              box: { label: "Règle", text: "Interdiction : Don't + base verbale (Don't shout!). Proposition : Let's + base verbale (Let's go!)." },
            },
            {
              heading: "Les phrases utiles de l'élève",
              paragraphs: [
                "Vous aussi, vous pouvez parler anglais en classe. Pour dire que vous ne comprenez pas : « Sorry, I don't understand. ». Pour faire répéter : « Can you repeat, please? ». Pour demander un mot : « How do you say “cartable” in English? » (Comment dit-on « cartable » en anglais ?) ou « What does “board” mean? » (Que veut dire « board » ?).",
                "Pour demander une permission : « Can I open the window, please? » ou, plus poliment, « May I go to the toilet, please? ». Pour vous excuser : « Sorry I'm late. » (Désolé, je suis en retard.), « Sorry, I haven't got my book. » (Désolé, je n'ai pas mon livre.).",
              ],
              box: { label: "À retenir", text: "Sorry, I don't understand. Can you repeat, please? How do you say... in English? Can I..., please? Sorry I'm late." },
            },
          ],
          keyPoints: [
            "Impératif : base verbale sans sujet : Listen! Sit down! Open your books.",
            "La même forme s'adresse à une ou à plusieurs personnes, pour tutoyer comme pour vouvoyer.",
            "Interdiction : Don't + base verbale : Don't talk!",
            "Proposition : Let's + base verbale : Let's start! (commençons).",
            "Please rend la consigne polie : Close the door, please.",
            "Phrases utiles : Sorry, I don't understand. Can you repeat, please? How do you say... in English?",
          ],
          example: {
            statement: "Votre professeure dit : « Good morning! Sit down, please. Take out your notebooks and write the date. Don't open your books. Listen to the recording and tick the right answers. » Expliquez en français ce que vous devez faire, dans l'ordre.",
            solution: [
              "Sit down, please : s'asseoir (please marque la politesse).",
              "Take out your notebooks : sortir son cahier ; write the date : écrire la date.",
              "Don't open your books : ne pas ouvrir le livre (Don't marque l'interdiction).",
              "Listen to the recording : écouter l'enregistrement ; tick the right answers : cocher les bonnes réponses.",
              "Réponse : s'asseoir, sortir son cahier, écrire la date, garder le livre fermé, écouter l'enregistrement, puis cocher les bonnes réponses.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez ces consignes en anglais : a) Écoutez. b) Levez-vous. c) Ouvrez vos livres. d) Ne parlez pas. e) Travaillez par deux. f) Commençons !",
              hint: "Pas de sujet : commencez directement par le verbe. Pour une interdiction, pensez à Don't ; pour une forme en « -ons », à Let's.",
              solution: [
                "a) Listen.",
                "b) Stand up.",
                "c) Open your books.",
                "d) Don't talk.",
                "e) Work in pairs.",
                "f) Let's start! (ou Let's begin!)",
              ],
            },
            {
              level: 2,
              statement: "Chaque consigne contient une erreur. Corrigez-la. a) To listen to the teacher. b) No run in the classroom! c) Don't to forget your pencil case. d) Let's to play a game. e) Sits down, please.",
              hint: "L'impératif utilise la base verbale seule : pas de to, pas de -s, pas de sujet. L'interdiction se forme avec Don't.",
              solution: [
                "a) Listen to the teacher : pas de to devant le verbe.",
                "b) Don't run in the classroom! : l'interdiction se forme avec Don't, pas avec No.",
                "c) Don't forget your pencil case : pas de to après Don't.",
                "d) Let's play a game : pas de to après Let's.",
                "e) Sit down, please : la base verbale ne prend pas de -s.",
              ],
            },
            {
              level: 3,
              statement: "Défi : vous êtes le professeur. Rédigez en anglais au moins six consignes pour cette activité : les élèves doivent se mettre par deux, lire le texte de la page 12, souligner les mots nouveaux, ne pas utiliser le dictionnaire, ne pas parler fort, puis répondre aux questions. Terminez par une phrase qui propose de corriger ensemble.",
              hint: "Suivez l'ordre de l'activité. Utilisez la base verbale pour chaque consigne, Don't pour les deux interdictions et Let's pour la proposition finale.",
              solution: [
                "1) Work in pairs, please.",
                "2) Read the text on page 12.",
                "3) Underline the new words.",
                "4) Don't use your dictionary.",
                "5) Don't speak loudly, please.",
                "6) Answer the questions.",
                "7) Let's correct the exercise together!",
                "Vérifier : chaque consigne commence par la base verbale, les deux interdictions par Don't, la proposition par Let's.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur l'impératif et les consignes.",
            statements: [
              { text: "« Don't run! » est une interdiction.", true: true, why: "Don't + base verbale sert à interdire : Ne courez pas !" },
              { text: "« Let's play! » signifie « Jouez ! ».", true: false, why: "Let's inclut la personne qui parle : Let's play! signifie « Jouons ! »." },
              { text: "On dit « Sits down! » quand on parle à une seule personne.", true: false, why: "L'impératif utilise toujours la base verbale, sans -s : Sit down!" },
              { text: "« Stand up! » peut s'adresser à un seul élève ou à toute la classe.", true: true, why: "La même forme sert pour une ou plusieurs personnes." },
              { text: "« Tick the right answer » veut dire « entourez la bonne réponse ».", true: false, why: "Tick signifie cocher ; entourer se dit circle." },
              { text: "« Raise your hand » et « Put your hand up » ont le même sens.", true: true, why: "Les deux consignes signifient « Levez la main »." },
              { text: "« No talk! » est la forme correcte pour interdire de parler.", true: false, why: "L'interdiction se forme avec Don't : Don't talk!" },
            ],
          },
          quiz: [
            {
              q: "Comment dit-on « Fermez la porte, s'il vous plaît » ?",
              options: ["Close the door, please.", "You close the door, please.", "Closes the door, please.", "To close the door, please."],
              answer: 0,
              why: "L'impératif est la base verbale seule, sans sujet, sans -s et sans to.",
            },
            {
              q: "Quelle est la bonne forme pour interdire ?",
              options: ["No eat in class!", "Not eat in class!", "Don't eat in class!", "Don't eats in class!"],
              answer: 2,
              why: "Interdiction : Don't suivi de la base verbale, sans -s.",
            },
            {
              q: "« Let's sing! » signifie...",
              options: ["Chantez !", "Chantons !", "Il chante !", "Ne chantez pas !"],
              answer: 1,
              why: "Let's propose de faire quelque chose ensemble, comme la forme en « -ons » du français.",
            },
            {
              q: "Vous n'avez pas compris la consigne. Quelle phrase est correcte ?",
              options: ["Sorry, I don't understand.", "Sorry, I'm not understand.", "Sorry, I no understand.", "Sorry, I don't understanding."],
              answer: 0,
              why: "La forme correcte est I don't understand : don't suivi de la base verbale.",
            },
            {
              q: "Que veut dire « Underline the verbs » ?",
              options: ["Conjuguez les verbes.", "Soulignez les verbes.", "Recopiez les verbes.", "Barrez les verbes."],
              answer: 1,
              why: "Underline signifie souligner (mettre une ligne sous le mot).",
            },
          ],
          trap: "Ajouter to, un sujet ou un -s au verbe à l'impératif (« To listen », « Sits down »), ou interdire avec No (« No talk ») : l'impératif est la base verbale seule, et l'interdiction se forme avec Don't.",
          method: "Fabriquez des cartes avec la consigne en anglais d'un côté et sa traduction de l'autre. Demandez à un proche de vous lire les consignes et exécutez-les sans traduire : c'est le meilleur moyen de les comprendre aussi vite qu'en classe.",
        },
      ],
    },
  ],
}
