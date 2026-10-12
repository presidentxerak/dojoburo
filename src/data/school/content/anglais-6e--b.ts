import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-6e',
  chapters: [
    {
      id: 'quotidien',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'maison',
          title: 'Décrire sa maison avec « there is » et « there are »',
          minutes: 30,
          objectives: [
            "Nommer les pièces d'une maison et quelques meubles en anglais.",
            "Utiliser « there is » et « there are » pour décrire un lieu, aux formes affirmative, négative et interrogative.",
            "Décrire sa maison ou son appartement en quelques phrases simples.",
          ],
          course: [
            {
              heading: "Les pièces de la maison",
              paragraphs: [
                "En anglais, une maison se dit a house et un appartement se dit a flat en anglais britannique (an apartment en anglais américain). Pour parler de chez soi, on dit aussi my home. Voici les pièces les plus courantes : the kitchen (la cuisine), the living room (le salon, aussi appelé sitting room ou lounge au Royaume-Uni), the dining room (la salle à manger), a bedroom (une chambre), the bathroom (la salle de bains) et the toilet (les toilettes).",
                "Autour de la maison, on trouve the garden (le jardin, appelé the yard aux États-Unis) et the garage. À l'intérieur, the stairs (l'escalier) mènent upstairs (à l'étage, en haut). Downstairs signifie en bas, au rez-de-chaussée. Exemple : « My bedroom is upstairs and the kitchen is downstairs. »",
              ],
              box: { label: "À retenir", text: "kitchen = cuisine ; living room = salon ; bedroom = chambre ; bathroom = salle de bains ; garden = jardin ; upstairs = à l'étage ; downstairs = en bas." },
            },
            {
              heading: "Les meubles et les objets",
              paragraphs: [
                "Dans une chambre, il y a souvent a bed (un lit), a wardrobe (une armoire), a desk (un bureau), a chair (une chaise), a lamp (une lampe) et parfois a shelf (une étagère) ou des posters. Dans le salon, on trouve a sofa (un canapé), an armchair (un fauteuil), a TV (une télévision), a table et a carpet (un tapis).",
                "Dans la cuisine, il y a a fridge (un réfrigérateur), a cooker (une cuisinière, stove aux États-Unis) et a sink (un évier). Dans la salle de bains, on trouve a bath (une baignoire), a shower (une douche) et a mirror (un miroir). Apprenez ces mots par pièce : c'est plus facile de les retenir quand on imagine l'endroit où ils se trouvent.",
              ],
            },
            {
              heading: "There is et there are : dire « il y a »",
              paragraphs: [
                "Pour dire « il y a » en anglais, on utilise there is ou there are. Le choix dépend du nom qui suit. Avec un nom au singulier, on dit there is, souvent contracté en there's : « There's a sofa in the living room. » Avec un nom au pluriel, on dit there are : « There are two bedrooms upstairs. »",
                "Devant un nom au pluriel, on peut ajouter some (des, quelques) quand on ne donne pas le nombre exact : « There are some posters on the wall. » Attention : on ne contracte pas there are à l'écrit. Et on ne traduit jamais « il y a » par it has ou he has : ces mots signifient « il a ».",
              ],
              box: { label: "Règle", text: "There is (there's) + nom singulier : There's a garden. There are + nom pluriel : There are three chairs. Pas de contraction écrite pour there are." },
            },
            {
              heading: "La négation et la question",
              paragraphs: [
                "À la forme négative, on ajoute not : there isn't (there is not) devant un nom singulier, there aren't (there are not) devant un nom pluriel. Au pluriel, on emploie any à la place de some : « There isn't a garage. » « There aren't any posters in the kitchen. »",
                "Pour poser une question, on inverse : Is there...? ou Are there...? On répond par une réponse courte, sans contraction quand elle est positive : « Is there a garden? Yes, there is. / No, there isn't. » « Are there any shelves? Yes, there are. / No, there aren't. » Pour demander un nombre : « How many bedrooms are there? There are three. »",
              ],
              box: { label: "Règle", text: "Négation : there isn't a... / there aren't any... Question : Is there a...? Are there any...? Réponses : Yes, there is. / No, there isn't. Yes, there are. / No, there aren't." },
            },
          ],
          keyPoints: [
            "Pièces : kitchen, living room, dining room, bedroom, bathroom, toilet ; dehors : garden, garage.",
            "There is (there's) + singulier ; there are + pluriel.",
            "Some au pluriel dans une phrase affirmative, any dans une phrase négative ou une question.",
            "Négation : there isn't / there aren't. Question : Is there...? Are there...?",
            "Réponse courte positive sans contraction : Yes, there is. Yes, there are.",
            "« Il y a » ne se traduit jamais par it has.",
          ],
          example: {
            statement: "Voici ce qu'il y a dans la chambre de Léo : un lit, un bureau, deux chaises, des posters, mais pas de télévision. Décrivez sa chambre en anglais avec there is et there are.",
            solution: [
              "Repérer le nombre de chaque objet : un lit et un bureau sont au singulier, deux chaises et des posters sont au pluriel, la télévision est absente.",
              "Singulier → there is : « There's a bed and there's a desk. »",
              "Pluriel avec un nombre → there are : « There are two chairs. »",
              "Pluriel sans nombre précis → there are some : « There are some posters on the wall. »",
              "Objet absent → there isn't : « There isn't a TV. »",
              "Réponse : « In Léo's bedroom, there's a bed and there's a desk. There are two chairs and there are some posters on the wall. There isn't a TV. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec there is ou there are : a) ___ a cat in the garden. b) ___ three bedrooms in my house. c) ___ a fridge in the kitchen. d) ___ two bathrooms upstairs. e) ___ some books on the shelf. f) ___ a desk in my bedroom.",
              hint: "Regardez le nom qui suit le blanc : un seul objet (a cat, a fridge) ou plusieurs (three bedrooms, some books) ?",
              solution: [
                "a) There is a cat in the garden (a cat : singulier).",
                "b) There are three bedrooms in my house (three bedrooms : pluriel).",
                "c) There is a fridge in the kitchen (singulier).",
                "d) There are two bathrooms upstairs (pluriel).",
                "e) There are some books on the shelf (some books : pluriel).",
                "f) There is a desk in my bedroom (singulier).",
              ],
            },
            {
              level: 2,
              statement: "Mettez chaque phrase à la forme négative, puis posez la question correspondante et donnez la réponse courte positive : a) There is a garage. b) There are some chairs in the kitchen. c) There is a shower in the bathroom. d) There are some trees in the garden.",
              hint: "Au pluriel, some devient any à la forme négative et dans la question. Dans la réponse courte positive, ne contractez pas.",
              solution: [
                "a) There isn't a garage. Is there a garage? Yes, there is.",
                "b) There aren't any chairs in the kitchen. Are there any chairs in the kitchen? Yes, there are.",
                "c) There isn't a shower in the bathroom. Is there a shower in the bathroom? Yes, there is.",
                "d) There aren't any trees in the garden. Are there any trees in the garden? Yes, there are.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce texte d'élève contient cinq erreurs. Retrouvez-les, corrigez-les et expliquez chaque correction. « My house is big. In my house, it has a big kitchen. There is two bedrooms upstairs. There isn't some garden. Is there a garage? Yes, there's. There are a sofa in the living room. »",
              hint: "Vérifiez chaque phrase avec les règles du cours : la traduction de « il y a », l'accord avec le nom, some ou any, la réponse courte.",
              solution: [
                "1) « In my house, it has a big kitchen » : c'est la traduction mot à mot de « il y a ». It has signifie « il a » ; pour dire « il y a », on emploie there is. Correction : In my house, there is a big kitchen.",
                "2) « There is two bedrooms » : two bedrooms est au pluriel. Correction : There are two bedrooms upstairs.",
                "3) « There isn't some garden » : some ne s'emploie pas à la forme négative, et garden est au singulier. Correction : There isn't a garden.",
                "4) « Yes, there's » : la réponse courte positive ne se contracte pas. Correction : Yes, there is.",
                "5) « There are a sofa » : a sofa est au singulier. Correction : There is a sofa in the living room.",
                "Texte corrigé : « My house is big. In my house, there is a big kitchen. There are two bedrooms upstairs. There isn't a garden. Is there a garage? Yes, there is. There is a sofa in the living room. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot anglais à sa traduction.",
            pairs: [
              { left: "kitchen", right: "la cuisine" },
              { left: "living room", right: "le salon" },
              { left: "bedroom", right: "la chambre" },
              { left: "bathroom", right: "la salle de bains" },
              { left: "garden", right: "le jardin" },
              { left: "upstairs", right: "à l'étage" },
            ],
          },
          quiz: [
            {
              q: "Complétez : « ___ two bathrooms in my house. »",
              options: ["There is", "There are", "There have", "It has"],
              answer: 1,
              why: "Two bathrooms est au pluriel : on emploie there are.",
            },
            {
              q: "Quelle est la forme négative de « There are some posters » ?",
              options: ["There isn't some posters.", "There aren't some posters.", "There aren't any posters."],
              answer: 2,
              why: "Au pluriel, la négation est there aren't, et some devient any.",
            },
            {
              q: "Que signifie « upstairs » ?",
              options: ["à l'étage", "au sous-sol", "dans le jardin", "dans l'escalier"],
              answer: 0,
              why: "Upstairs signifie en haut, à l'étage ; downstairs signifie en bas.",
            },
            {
              q: "« Is there a garden? » Quelle réponse courte est correcte ?",
              options: ["Yes, there's.", "Yes, it is.", "Yes, there are.", "Yes, there is."],
              answer: 3,
              why: "La question porte sur un nom singulier, et la réponse courte positive ne se contracte pas : Yes, there is.",
            },
            {
              q: "Comment dit-on « un appartement » en anglais britannique ?",
              options: ["a house", "a flat", "a room"],
              answer: 1,
              why: "Au Royaume-Uni, on dit a flat ; aux États-Unis, an apartment.",
            },
          ],
          trap: "Accorder there is avec un nom pluriel (« There is two bedrooms ») ou traduire « il y a » mot à mot par it has ou he has.",
          method: "Avant d'écrire, regardez le nom qui suit : un seul objet → there is ; plusieurs objets → there are. Entourez le -s du pluriel pour vérifier.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'routine',
          title: 'Raconter sa journée au présent simple',
          minutes: 35,
          objectives: [
            "Raconter sa journée et ses habitudes au présent simple.",
            "Conjuguer le présent simple à toutes les personnes, sans oublier le -s de la troisième personne du singulier.",
            "Construire des phrases négatives et des questions avec « do » et « does ».",
            "Organiser un récit avec « first », « then », « after that » et « finally ».",
          ],
          course: [
            {
              heading: "À quoi sert le présent simple ?",
              paragraphs: [
                "Le présent simple sert à parler de ce que l'on fait d'habitude, de ce qui se répète : sa routine, ses activités de chaque semaine. Exemple : « I get up at seven o'clock every day. » (Je me lève à sept heures tous les jours.) Il sert aussi à dire des vérités générales : « Cats drink milk. »",
                "On le repère souvent grâce à des mots qui indiquent une habitude : every day (tous les jours), every morning (tous les matins), on Mondays (le lundi, tous les lundis), in the evening (le soir), at the weekend (le week-end, en anglais britannique).",
              ],
            },
            {
              heading: "La forme affirmative et le -s de la troisième personne",
              paragraphs: [
                "Au présent simple, le verbe garde sa forme de base à toutes les personnes, sauf à la troisième personne du singulier (he, she, it, ou un prénom), où l'on ajoute -s : I play, you play, we play, they play, mais he plays, she plays, Tom plays. Exemple : « I walk to school, but my sister takes the bus. »",
                "Quelques règles d'orthographe : après -s, -sh, -ch, -x et -o, on ajoute -es (he watches, she washes, he goes, she does). Après une consonne suivie de -y, le y devient -ies (study → she studies), mais après une voyelle on ajoute seulement -s (play → he plays). Le verbe have devient has : « She has breakfast at 7.30. »",
                "À l'oral, ce -s se prononce de trois façons : [s] comme dans gets ou walks, [z] comme dans plays ou goes, et [ɪz], avec une syllabe en plus, comme dans watches ou washes. Il faut bien le faire entendre.",
              ],
              box: { label: "Règle", text: "He / she / it + verbe + -s : he plays, she gets up. Avec -es : watches, washes, goes, does. Consonne + y → -ies : studies. Have → has." },
            },
            {
              heading: "La négation et la question avec do et does",
              paragraphs: [
                "Pour la négation, on utilise l'auxiliaire do : I don't (do not), you don't, we don't, they don't. À la troisième personne du singulier, on emploie does : he doesn't (does not). Le -s passe sur does, donc le verbe reprend sa forme de base : « She doesn't get up early. » et jamais « She doesn't gets up ».",
                "Pour la question, on place do ou does devant le sujet : « Do you have breakfast? » « Does Tom walk to school? » On répond par une réponse courte : « Yes, I do. / No, I don't. » « Yes, he does. / No, he doesn't. » Avec un mot interrogatif, il se place en tête : « What time do you get up? » « Where does she have lunch? »",
              ],
              box: { label: "Règle", text: "Négation : don't / doesn't + verbe de base. Question : Do / Does + sujet + verbe de base ? Le -s n'apparaît qu'une fois : sur does, ou sur le verbe." },
            },
            {
              heading: "Les verbes de la journée et les mots de liaison",
              paragraphs: [
                "Voici les verbes utiles pour raconter sa journée : wake up (se réveiller), get up (se lever), have a shower (prendre une douche), get dressed (s'habiller), have breakfast (prendre le petit déjeuner), brush my teeth (me brosser les dents), go to school (aller à l'école), have lunch (déjeuner), come back home (rentrer à la maison), do my homework (faire mes devoirs), have dinner (dîner), watch TV et go to bed (aller se coucher).",
                "Pour enchaîner les actions dans l'ordre, utilisez first (d'abord), then (puis, ensuite), after that (après cela) et finally (enfin). Ajoutez l'heure avec at : « First, I get up at seven. Then, I have a shower. After that, I have breakfast at half past seven. Finally, I go to school at eight. »",
              ],
            },
          ],
          keyPoints: [
            "Le présent simple exprime une habitude ou une vérité générale : every day, on Mondays.",
            "He, she, it : verbe + -s (plays, gets up) ; -es après s, sh, ch, x, o (watches, goes) ; have → has.",
            "Négation : don't / doesn't + verbe de base (she doesn't play).",
            "Question : Do / Does + sujet + verbe de base ? Réponse : Yes, I do. / No, he doesn't.",
            "Mots de liaison : first, then, after that, finally.",
          ],
          example: {
            statement: "Voici la journée de Lucy, écrite à la première personne : « I get up at 7.00. I have a shower. I go to school by bus. I have lunch at the canteen. I do my homework. » Réécrivez ce texte à la troisième personne (Lucy...), en reliant les phrases avec des mots de liaison.",
            solution: [
              "Changer le sujet : I devient Lucy, puis she.",
              "Ajouter le -s de la troisième personne : get → gets, have → has (irrégulier), go → goes (-es après o), do → does (-es après o).",
              "Relier les actions avec first, then, after that et finally.",
              "Réponse : « First, Lucy gets up at 7.00. Then, she has a shower. After that, she goes to school by bus and she has lunch at the canteen. Finally, she does her homework. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe entre parenthèses au présent simple : a) She (watch) TV every evening. b) Tom (go) to bed at nine. c) My dad (have) a coffee. d) He (study) English. e) They (play) football on Saturdays. f) It (rain) a lot in Scotland.",
              hint: "Repérez d'abord le sujet : he, she, it ou un prénom → -s. Puis vérifiez l'orthographe : -es après ch et o, -ies après consonne + y, have → has.",
              solution: [
                "a) She watches TV every evening (-es après ch).",
                "b) Tom goes to bed at nine (-es après o).",
                "c) My dad has a coffee (have → has).",
                "d) He studies English (consonne + y → -ies).",
                "e) They play football on Saturdays (they : pas de -s).",
                "f) It rains a lot in Scotland (it : -s).",
              ],
            },
            {
              level: 2,
              statement: "Mettez chaque phrase à la forme négative, puis à la forme interrogative avec sa réponse courte négative : a) You walk to school. b) Sam has breakfast at eight. c) Your friends live in London. d) Emma brushes her teeth after lunch.",
              hint: "Avec I, you, we, they : don't et do. Avec he, she ou un prénom : doesn't et does, et le verbe perd son -s.",
              solution: [
                "a) You don't walk to school. Do you walk to school? No, I don't.",
                "b) Sam doesn't have breakfast at eight. Does Sam have breakfast at eight? No, he doesn't. (has redevient have après does.)",
                "c) Your friends don't live in London. Do your friends live in London? No, they don't.",
                "d) Emma doesn't brush her teeth after lunch. Does Emma brush her teeth after lunch? No, she doesn't. (brushes redevient brush.)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici l'emploi du temps du mercredi de Max (données fictives) : 7.30 se lever ; 7.45 petit déjeuner ; 8.15 aller au collège à vélo ; 12.00 rentrer à la maison ; 14.00 jouer au tennis ; 18.00 faire ses devoirs ; 21.00 aller se coucher. Max ne regarde pas la télévision le mercredi. Racontez son mercredi en anglais, à la troisième personne, en six phrases au moins, avec first, then, after that, finally et une phrase négative.",
              hint: "Écrivez une action par phrase, avec l'heure introduite par at. N'oubliez pas le -s, et pensez à has et goes.",
              solution: [
                "Repérer les verbes : get up, have breakfast, go to school by bike, come back home, play tennis, do his homework, go to bed, et pour la négation watch TV.",
                "Conjuguer à la troisième personne : gets up, has breakfast, goes, comes back, plays, does, goes ; négation : doesn't watch.",
                "Exemple de réponse : « On Wednesdays, Max gets up at half past seven. First, he has breakfast at a quarter to eight. Then, he goes to school by bike at a quarter past eight. He comes back home at twelve o'clock. After that, he plays tennis at two o'clock and he does his homework at six. He doesn't watch TV on Wednesdays. Finally, he goes to bed at nine o'clock. »",
                "Vérifier : chaque verbe après he ou Max porte un -s, sauf après doesn't.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez la journée de Tom dans l'ordre, de l'heure la plus matinale à la plus tardive.",
            items: [
              "6.45: Tom wakes up.",
              "7.00: He has a shower.",
              "7.20: He has breakfast.",
              "8.00: He goes to school.",
              "12.30: He has lunch at the canteen.",
              "17.00: He does his homework.",
              "21.00: He goes to bed.",
            ],
          },
          quiz: [
            {
              q: "Complétez : « My brother ___ TV every evening. »",
              options: ["watch", "watchs", "watches", "is watch"],
              answer: 2,
              why: "Avec my brother (he), on ajoute -s ; après ch, on écrit -es : watches.",
            },
            {
              q: "Quelle phrase négative est correcte ?",
              options: ["She doesn't play the piano.", "She don't play the piano.", "She doesn't plays the piano."],
              answer: 0,
              why: "Avec she, on emploie doesn't, et le verbe reprend sa forme de base sans -s.",
            },
            {
              q: "« Do you have lunch at school? » Quelle est la bonne réponse courte ?",
              options: ["Yes, I have.", "Yes, I do.", "Yes, I am.", "Yes, you do."],
              answer: 1,
              why: "La question est posée avec do : on reprend do dans la réponse courte, Yes, I do.",
            },
            {
              q: "Quelle est la forme du verbe « study » avec « he » ?",
              options: ["he studys", "he study", "he studyes", "he studies"],
              answer: 3,
              why: "Après une consonne suivie de -y, le y devient -ies : he studies.",
            },
            {
              q: "Quel mot de liaison signifie « enfin » à la fin d'un récit ?",
              options: ["first", "after that", "finally", "then"],
              answer: 2,
              why: "Finally introduit la dernière action ; first ouvre le récit, then et after that marquent les étapes du milieu.",
            },
          ],
          trap: "Oublier le -s de la troisième personne (« she play »), ou au contraire le garder après doesn't ou does (« he doesn't plays », « Does she likes...? »).",
          method: "Relisez chaque phrase en entourant le sujet : s'il s'agit de he, she, it ou d'un prénom, vérifiez qu'il y a un seul -s, soit sur le verbe, soit sur does.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'jours-mois-dates',
          title: 'Les jours, les mois et les dates',
          minutes: 30,
          objectives: [
            "Nommer les jours de la semaine, les mois et les saisons en anglais.",
            "Utiliser les nombres ordinaux pour dire et écrire une date.",
            "Employer « on » et « in » devant un jour, une date, un mois, une saison ou une année.",
            "Demander et donner la date de son anniversaire.",
          ],
          course: [
            {
              heading: "Les jours de la semaine",
              paragraphs: [
                "Les jours de la semaine sont : Monday (lundi), Tuesday (mardi), Wednesday (mercredi), Thursday (jeudi), Friday (vendredi), Saturday (samedi) et Sunday (dimanche). En anglais, ils prennent toujours une majuscule, même au milieu d'une phrase : « I play tennis on Saturday. »",
                "Attention à la prononciation de Wednesday : le premier d ne se prononce pas, on dit « wenz-day ». Ne confondez pas Tuesday (mardi) et Thursday (jeudi), qui commencent tous les deux par T. Le samedi et le dimanche forment the weekend ; les autres jours sont les weekdays.",
              ],
            },
            {
              heading: "Les mois et les saisons",
              paragraphs: [
                "Les douze mois sont : January, February, March, April, May, June, July, August, September, October, November, December. Comme les jours, ils prennent une majuscule en anglais : « My birthday is in May. »",
                "Les quatre saisons sont spring (le printemps), summer (l'été), autumn (l'automne, que les Américains appellent fall) et winter (l'hiver). Contrairement aux jours et aux mois, les saisons s'écrivent sans majuscule : « In winter, it's cold. »",
              ],
              box: { label: "À retenir", text: "Majuscule pour les jours (Monday) et les mois (July), mais pas pour les saisons (summer)." },
            },
            {
              heading: "Les nombres ordinaux",
              paragraphs: [
                "Pour donner une date, on utilise les nombres ordinaux (premier, deuxième...). Les trois premiers sont irréguliers : first (1st), second (2nd), third (3rd). Ensuite, on ajoute en général -th au nombre : fourth (4th), sixth (6th), seventh (7th), tenth (10th), thirteenth (13th).",
                "Quelques formes changent d'orthographe : fifth (5th), eighth (8th), ninth (9th, sans e) et twelfth (12th). Les dizaines en -ty deviennent -tieth : twentieth (20th), thirtieth (30th). Pour 21, 22, 23 et 31, on reprend first, second et third : twenty-first (21st), twenty-second (22nd), twenty-third (23rd), thirty-first (31st).",
              ],
              box: { label: "Repère", text: "1st first, 2nd second, 3rd third, 4th fourth, 5th fifth, 8th eighth, 9th ninth, 12th twelfth, 20th twentieth, 21st twenty-first, 31st thirty-first." },
            },
            {
              heading: "Dire et écrire une date",
              paragraphs: [
                "En anglais britannique, on écrit 14th July ou 14 July, et on dit « the fourteenth of July ». En anglais américain, le mois vient en premier : on écrit July 14 et on dit « July fourteenth ». Les années se disent souvent deux chiffres par deux chiffres : 1999 se dit « nineteen ninety-nine » et 2026 « twenty twenty-six ».",
                "Les prépositions changent selon ce que l'on donne. On emploie on devant un jour ou une date : on Monday, on 14th July, on my birthday. On emploie in devant un mois, une saison ou une année : in July, in summer, in 2026. Pour le week-end, on dit at the weekend en anglais britannique et on the weekend en anglais américain.",
                "Pour demander une date d'anniversaire : « When's your birthday? » Réponse : « It's on the third of May. » Pour la date du jour : « What's the date today? » Réponse : « It's the twelfth of October. » Quelques fêtes : Halloween is on the thirty-first of October ; Christmas Day is on the twenty-fifth of December ; American Independence Day is on the fourth of July.",
              ],
              box: { label: "Règle", text: "On + jour ou date (on Friday, on 3rd May). In + mois, saison ou année (in May, in winter, in 2026). Royaume-Uni : the 3rd of May. États-Unis : May 3rd." },
            },
          ],
          keyPoints: [
            "Les jours et les mois prennent une majuscule ; les saisons non.",
            "Ordinaux : first, second, third, puis -th (fourth) ; attention à fifth, eighth, ninth, twelfth, twentieth.",
            "Royaume-Uni : the fourteenth of July (14th July). États-Unis : July fourteenth (July 14).",
            "On + jour ou date ; in + mois, saison ou année.",
            "When's your birthday? It's on the third of May.",
          ],
          example: {
            statement: "Écrivez en toutes lettres, à la manière britannique, la phrase qui donne la date de votre anniversaire si vous êtes né le 22 mars, puis posez la question correspondante.",
            solution: [
              "Trouver l'ordinal de 22 : twenty-second (on reprend second, comme pour 2nd).",
              "Écrire la date à la manière britannique : the twenty-second of March, avec une majuscule à March.",
              "Choisir la préposition : c'est une date précise, donc on.",
              "Formuler la question : « When's your birthday? »",
              "Réponse : « When's your birthday? My birthday is on the twenty-second of March. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez ces nombres ordinaux en toutes lettres : a) 1st ; b) 3rd ; c) 5th ; d) 9th ; e) 12th ; f) 20th ; g) 31st.",
              hint: "Les trois premiers sont irréguliers. Méfiez-vous de 5, 9, 12 et 20 : leur orthographe change.",
              solution: [
                "a) 1st : first.",
                "b) 3rd : third.",
                "c) 5th : fifth (ve devient f).",
                "d) 9th : ninth (le e de nine disparaît).",
                "e) 12th : twelfth (ve devient f).",
                "f) 20th : twentieth (y devient ie).",
                "g) 31st : thirty-first.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec on ou in : a) My birthday is ___ June. b) We have English ___ Tuesday. c) It snows ___ winter. d) Halloween is ___ the thirty-first of October. e) She was born ___ 2015. f) There's a party ___ Saturday evening.",
              hint: "On devant un jour ou une date précise ; in devant un mois, une saison ou une année.",
              solution: [
                "a) in June (un mois).",
                "b) on Tuesday (un jour).",
                "c) in winter (une saison).",
                "d) on the thirty-first of October (une date).",
                "e) in 2015 (une année).",
                "f) on Saturday evening (un jour précis, même suivi de evening).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez les indices et écrivez la date d'anniversaire de chaque enfant en une phrase complète en anglais, à la manière britannique et en toutes lettres. a) Emma est née trois jours après Halloween. b) Jack est né le jour de la fête nationale des États-Unis. c) Lily est née le lendemain de Noël. d) Ben est né le dernier jour de l'année.",
              hint: "Rappelez-vous les dates du cours : Halloween le 31 octobre, Independence Day le 4 juillet, Christmas Day le 25 décembre. Attention : octobre a 31 jours.",
              solution: [
                "a) Halloween tombe le 31 octobre ; trois jours après, on arrive au 3 novembre (1er, 2, 3 novembre). « Emma's birthday is on the third of November. »",
                "b) La fête nationale des États-Unis, Independence Day, est le 4 juillet. « Jack's birthday is on the fourth of July. »",
                "c) Noël est le 25 décembre ; le lendemain est le 26 décembre (au Royaume-Uni, c'est Boxing Day). « Lily's birthday is on the twenty-sixth of December. »",
                "d) Le dernier jour de l'année est le 31 décembre. « Ben's birthday is on the thirty-first of December. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos connaissances sur les jours, les mois et les dates.",
            statements: [
              { text: "En anglais, les mois prennent une majuscule : January, May.", true: true, why: "Les jours et les mois s'écrivent toujours avec une majuscule en anglais." },
              { text: "Les saisons prennent aussi une majuscule : Summer, Winter.", true: false, why: "Les saisons s'écrivent sans majuscule : summer, winter." },
              { text: "« Ninth » s'écrit avec un e : nineth.", true: false, why: "On écrit ninth : le e de nine disparaît." },
              { text: "On dit « on Monday » mais « in July ».", true: true, why: "On devant un jour ou une date, in devant un mois." },
              { text: "Aux États-Unis, on écrit souvent le mois avant le jour : July 4.", true: true, why: "Les Américains placent le mois en premier ; les Britanniques écrivent 4th July." },
              { text: "Thursday signifie mardi.", true: false, why: "Thursday signifie jeudi ; mardi se dit Tuesday." },
              { text: "Dans Wednesday, le premier d se prononce bien.", true: false, why: "Le premier d est muet : on prononce « wenz-day »." },
            ],
          },
          quiz: [
            {
              q: "Comment écrit-on 12th en toutes lettres ?",
              options: ["twelveth", "twelfth", "twelfeth", "twelvth"],
              answer: 1,
              why: "Le ve de twelve devient f : twelfth.",
            },
            {
              q: "Complétez : « My birthday is ___ the fifth of April. »",
              options: ["in", "at", "on"],
              answer: 2,
              why: "Devant une date précise, on emploie on.",
            },
            {
              q: "Quel jour se prononce « wenz-day » ?",
              options: ["Wednesday", "Tuesday", "Thursday", "Sunday"],
              answer: 0,
              why: "Dans Wednesday, le premier d est muet.",
            },
            {
              q: "Comment un Britannique dit-il la date 3rd May ?",
              options: ["the three of May", "the third May of", "May the three", "the third of May"],
              answer: 3,
              why: "On utilise l'ordinal third, précédé de the et suivi de of : the third of May.",
            },
            {
              q: "Quel mot américain signifie « l'automne » ?",
              options: ["spring", "fall", "winter"],
              answer: 1,
              why: "Les Britanniques disent autumn et les Américains fall.",
            },
          ],
          trap: "Écrire les dates avec un nombre cardinal (« the three of May ») au lieu d'un ordinal, ou mettre une majuscule aux saisons et l'oublier aux jours et aux mois.",
          method: "Apprenez les ordinaux par groupes : les trois irréguliers (first, second, third), les quatre pièges (fifth, eighth, ninth, twelfth), puis la règle du -th. Récitez votre date d'anniversaire et celle de vos proches à voix haute.",
        },
      ],
    },
    {
      id: 'loisirs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'gouts',
          title: 'Dire ce que l\'on aime : « I like », « I love », « I hate »',
          minutes: 30,
          objectives: [
            "Exprimer ses goûts et ses préférences avec « I love », « I like », « I don't mind », « I don't like » et « I hate ».",
            "Employer un nom ou un verbe en -ing après ces verbes.",
            "Demander à quelqu'un ce qu'il aime et répondre par une réponse courte.",
            "Parler des goûts d'une autre personne à la troisième personne.",
          ],
          course: [
            {
              heading: "Une échelle pour nuancer ses goûts",
              paragraphs: [
                "Pour dire ce que l'on aime, l'anglais propose plusieurs verbes, du plus positif au plus négatif : I love (j'adore), I like (j'aime bien), I don't mind (ça m'est égal, ça ne me dérange pas), I don't like (je n'aime pas) et I hate (je déteste). Pour renforcer like, on peut ajouter really : « I really like music. » (J'aime vraiment la musique.)",
                "Choisissez le verbe qui correspond exactement à ce que vous pensez. « I like chocolate » est plus faible que « I love chocolate ». Et « I don't mind homework » ne veut pas dire que vous aimez les devoirs : cela veut dire qu'ils ne vous dérangent pas.",
              ],
              box: { label: "À retenir", text: "I love (j'adore) > I like (j'aime bien) > I don't mind (ça m'est égal) > I don't like (je n'aime pas) > I hate (je déteste)." },
            },
            {
              heading: "Après le verbe : un nom ou un verbe en -ing",
              paragraphs: [
                "Après love, like, don't mind, don't like et hate, on peut mettre un nom. Quand on parle d'une chose en général, on n'emploie pas d'article, contrairement au français : « I like football. » (J'aime le football.) « She hates rap music. » On ne dit pas « I like the football ».",
                "On peut aussi mettre un verbe, qui prend alors la terminaison -ing : « I love swimming. » « I hate getting up early. » « I don't mind doing my homework. » (On rencontre aussi I like to swim, mais à votre niveau, employez la forme en -ing.)",
                "Attention à l'orthographe du -ing. En général, on ajoute simplement -ing : read → reading, play → playing. Si le verbe se termine par un e muet, le e disparaît : dance → dancing, ride → riding. Si un verbe court se termine par une consonne précédée d'une seule voyelle, on double la consonne : swim → swimming, run → running, get → getting, shop → shopping.",
              ],
              box: { label: "Règle", text: "Love / like / don't mind / don't like / hate + nom sans article (I like music) ou + verbe en -ing (I like reading). Dance → dancing ; swim → swimming." },
            },
            {
              heading: "Poser des questions et parler des autres",
              paragraphs: [
                "Pour demander à quelqu'un s'il aime quelque chose, on utilise do : « Do you like cats? » On répond par une réponse courte : « Yes, I do. » ou « No, I don't. » Pour une question ouverte : « What do you like doing? » (Qu'est-ce que tu aimes faire ?) « What's your favourite sport? » (Quel est ton sport préféré ?) Notez l'orthographe britannique favourite (favorite aux États-Unis).",
                "Pour parler d'une autre personne, on applique la règle du présent simple : on ajoute -s au verbe à la troisième personne du singulier. « My brother likes video games. » « She loves dancing. » À la forme négative et dans les questions, on emploie does : « He doesn't like fish. » « Does she like reading? Yes, she does. » Pour dire qu'on est d'accord avec quelqu'un qui aime une chose, on peut répondre « Me too! » (Moi aussi !).",
              ],
            },
            {
              heading: "Le vocabulaire des loisirs",
              paragraphs: [
                "Voici des loisirs courants : reading (la lecture), drawing (le dessin), dancing (la danse), cooking (la cuisine), swimming (la natation), skateboarding (le skate), listening to music (écouter de la musique), watching TV (regarder la télévision), playing video games (jouer aux jeux vidéo), going to the cinema (aller au cinéma) et riding a bike (faire du vélo).",
                "Pour les sports et les instruments, on utilise souvent le verbe play, avec une différence importante. Avec un sport, pas d'article : play football, play tennis, play basketball. Avec un instrument de musique, on met the : play the piano, play the guitar, play the drums. Exemple : « I love playing tennis and I like playing the guitar. »",
              ],
              box: { label: "Règle", text: "Play + sport sans article : play football. Play + the + instrument : play the piano." },
            },
          ],
          keyPoints: [
            "Du plus positif au plus négatif : love, like, don't mind, don't like, hate.",
            "Après ces verbes : un nom sans article (I like music) ou un verbe en -ing (I love dancing).",
            "Orthographe du -ing : dance → dancing ; swim → swimming ; get → getting.",
            "Do you like...? Yes, I do. / No, I don't. Pour une autre personne : she likes, he doesn't like, Does she like...?",
            "Play football (sport, sans article) mais play the piano (instrument, avec the).",
          ],
          example: {
            statement: "Traduisez en anglais : « J'adore la musique et j'aime bien jouer de la guitare, mais je déteste chanter. Ma sœur n'aime pas le football. »",
            solution: [
              "« J'adore la musique » : love + nom sans article → I love music.",
              "« J'aime bien jouer de la guitare » : like + verbe en -ing, et the devant l'instrument → I like playing the guitar.",
              "« Je déteste chanter » : hate + verbe en -ing → I hate singing.",
              "« Ma sœur n'aime pas le football » : troisième personne, donc doesn't, puis le nom sans article → My sister doesn't like football.",
              "Réponse : « I love music and I like playing the guitar, but I hate singing. My sister doesn't like football. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez le verbe entre parenthèses à la forme en -ing : a) I love (dance). b) She hates (get) up early. c) We like (play) video games. d) Do you like (swim)? e) He doesn't like (read). f) I hate (ride) my bike in the rain.",
              hint: "Trois cas : on ajoute -ing ; le e final disparaît ; ou la consonne finale est doublée après une seule voyelle.",
              solution: [
                "a) I love dancing (le e de dance disparaît).",
                "b) She hates getting up early (consonne doublée : get → getting).",
                "c) We like playing video games (on ajoute simplement -ing).",
                "d) Do you like swimming? (consonne doublée : swim → swimming).",
                "e) He doesn't like reading (on ajoute simplement -ing).",
                "f) I hate riding my bike in the rain (le e de ride disparaît).",
              ],
            },
            {
              level: 2,
              statement: "Voici les goûts de deux élèves (données fictives). Mia : adore le football, déteste cuisiner, aime bien lire. Sam : n'aime pas le football, adore cuisiner, lire lui est égal. Écrivez six phrases à la troisième personne, puis deux questions avec leur réponse courte : une sur Mia et la cuisine, une sur Sam et le football.",
              hint: "N'oubliez pas le -s : loves, likes, hates. Pour la négation et les questions, employez doesn't et does, puis le verbe sans -s.",
              solution: [
                "Mia loves football. She hates cooking. She likes reading.",
                "Sam doesn't like football. He loves cooking. He doesn't mind reading.",
                "Question sur Mia : « Does Mia like cooking? No, she doesn't. »",
                "Question sur Sam : « Does Sam like football? No, he doesn't. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez un message de 50 à 70 mots à un correspondant anglais pour lui présenter vos goûts. Utilisez au moins : love, like, don't like, hate, deux verbes en -ing, play avec un sport, play avec un instrument, et terminez par une question.",
              hint: "Faites une liste de vos goûts avant d'écrire, puis vérifiez chaque contrainte une par une. Pensez à the devant l'instrument.",
              solution: [
                "Organiser le message : une salutation, une présentation rapide, vos goûts du plus positif au plus négatif, une question, une formule de fin.",
                "Exemple de production : « Hi Oliver, I'm Inès and I'm eleven. I love sport: I play basketball every Wednesday. I also like playing the piano, and I really like reading comics. I don't like cooking because it's boring. I hate getting up early on Saturdays! My favourite hobby is drawing. What do you like doing at the weekend? Bye, Inès »",
                "Vérifier les contraintes : love, like, don't like, hate ; deux verbes en -ing (playing, reading, cooking, getting) ; play basketball sans article ; play the piano avec the ; une question finale.",
                "Résultat : un message d'environ 55 mots qui respecte toutes les contraintes.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces réponses du goût le plus positif au plus négatif.",
            items: [
              "I love it.",
              "I like it.",
              "I don't mind it.",
              "I don't like it.",
              "I hate it.",
            ],
          },
          quiz: [
            {
              q: "Complétez : « I love ___ in the sea. »",
              options: ["swim", "swimming", "to swimming", "swims"],
              answer: 1,
              why: "Après love, on met le verbe en -ing ; swim double son m : swimming.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["I like football.", "I like the football.", "I likes football."],
              answer: 0,
              why: "On ne met pas d'article devant un sport pris en général, et like ne prend pas de -s avec I.",
            },
            {
              q: "« Do you like rap music? » Quelle est la réponse courte négative ?",
              options: ["No, I don't like.", "No, I'm not.", "No, I don't."],
              answer: 2,
              why: "La question est posée avec do : la réponse courte reprend do, No, I don't.",
            },
            {
              q: "Que signifie « I don't mind » ?",
              options: ["Je déteste ça.", "Ça m'est égal.", "J'adore ça.", "Je ne sais pas."],
              answer: 1,
              why: "I don't mind exprime l'indifférence : cela ne vous dérange pas.",
            },
            {
              q: "Complétez : « My sister ___ horse riding. »",
              options: ["love", "is love", "loving", "loves"],
              answer: 3,
              why: "My sister correspond à she : au présent simple, le verbe prend un -s.",
            },
          ],
          trap: "Mettre un article devant un nom pris en général (« I like the football ») ou employer la forme de base après like au lieu de la forme en -ing (« I like swim »).",
          method: "Pour retenir l'échelle des goûts, dessinez une flèche de « love » à « hate » et classez-y vos activités préférées. Avant de rendre un texte, soulignez chaque verbe de goût et vérifiez ce qui le suit : un nom sans article ou un verbe en -ing.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'can',
          title: 'Parler de ses talents avec « can »',
          minutes: 30,
          objectives: [
            "Dire ce que l'on sait faire et ce que l'on ne sait pas faire avec « can » et « can't ».",
            "Poser une question avec « can » et y répondre par une réponse courte.",
            "Préciser son niveau avec « very well », « a little » ou « not at all ».",
            "Présenter les talents d'une autre personne.",
          ],
          course: [
            {
              heading: "Can : un verbe pas comme les autres",
              paragraphs: [
                "Can sert à exprimer une capacité : ce que l'on sait faire ou ce que l'on peut faire. « I can swim. » (Je sais nager.) « My dad can cook. » (Mon père sait cuisiner.) Can est un verbe particulier, qu'on appelle un modal, et il obéit à des règles simples mais strictes.",
                "Première règle : can ne change jamais. Il garde la même forme à toutes les personnes, sans -s à la troisième personne : I can, you can, he can, she can, it can, we can, they can. On dit « She can dance », jamais « She cans dance ».",
                "Deuxième règle : can est suivi directement de la forme de base du verbe, sans to et sans -ing. On dit « I can play the guitar », jamais « I can to play » ni « I can playing ».",
              ],
              box: { label: "Règle", text: "Sujet + can + verbe de base. Pas de -s (she can), pas de to, pas de -ing : He can ride a horse." },
            },
            {
              heading: "La négation, la question et la réponse courte",
              paragraphs: [
                "À la forme négative, on ajoute not : cannot, écrit en un seul mot, ou sa forme contractée can't, la plus courante à l'oral. « I can't sing. » (Je ne sais pas chanter.) « Penguins can't fly. » (Les manchots ne peuvent pas voler.)",
                "Pour poser une question, on place can devant le sujet, sans do : « Can you swim? » On répond par une réponse courte : « Yes, I can. » ou « No, I can't. » Ne dites jamais « Do you can swim? ». Pour une question ouverte : « What can you do? » (Qu'est-ce que tu sais faire ?)",
              ],
              box: { label: "Règle", text: "Négation : can't (cannot, en un mot). Question : Can + sujet + verbe ? Réponse : Yes, I can. / No, I can't. Jamais de do avec can." },
            },
            {
              heading: "Préciser son niveau et bien prononcer",
              paragraphs: [
                "Pour dire si l'on fait bien ou mal quelque chose, on ajoute une expression à la fin de la phrase : very well (très bien), quite well (assez bien), a little (un peu). Avec can't, on peut ajouter at all pour dire « pas du tout » : « I can swim very well. » « I can speak Spanish a little. » « I can't draw at all. »",
                "À l'oral, la différence entre can et can't est importante. Dans une phrase affirmative, can est souvent prononcé de façon faible et rapide, presque « k'n » : « I can swim. » Can't est toujours accentué : en anglais britannique, on prononce le a long, comme dans « car ». Dans une réponse courte, can est accentué : « Yes, I can! »",
              ],
            },
            {
              heading: "Le vocabulaire des talents",
              paragraphs: [
                "Voici des verbes utiles pour parler de vos talents : swim (nager), dance (danser), sing (chanter), draw (dessiner), cook (cuisiner), skate (faire du patin ou du skate), ride a bike (faire du vélo), ride a horse (monter à cheval), play chess (jouer aux échecs), play the guitar (jouer de la guitare), juggle (jongler), speak English (parler anglais), run fast (courir vite).",
                "Pour présenter quelqu'un, il suffit de changer le sujet : can ne bouge pas. « My best friend Nina can play the violin very well, but she can't ride a horse. » Pour dire qu'une personne est douée, on peut aussi dire : « She's good at music. » (Elle est bonne en musique.)",
              ],
            },
          ],
          keyPoints: [
            "Can exprime une capacité : I can swim (je sais nager).",
            "Can ne prend jamais de -s et il est suivi du verbe de base : she can dance.",
            "Négation : can't ou cannot (en un seul mot).",
            "Question sans do : Can you swim? Yes, I can. / No, I can't.",
            "Préciser : very well, quite well, a little ; not at all avec can't.",
          ],
          example: {
            statement: "Voici les talents de Leo (données fictives) : il sait très bien nager, il sait un peu jouer de la guitare, il ne sait pas du tout danser. Présentez Leo en anglais en trois phrases, puis posez-lui une question sur la cuisine.",
            solution: [
              "Le sujet est Leo, puis he ; can ne change pas.",
              "« Il sait très bien nager » : He can swim very well.",
              "« Il sait un peu jouer de la guitare » : He can play the guitar a little (the devant l'instrument).",
              "« Il ne sait pas du tout danser » : He can't dance at all.",
              "Question : on place can devant le sujet, sans do : Can you cook, Leo?",
              "Réponse : « Leo can swim very well. He can play the guitar a little, but he can't dance at all. Can you cook, Leo? »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais avec can ou can't : a) Je sais nager. b) Elle ne sait pas chanter. c) Mon frère sait jongler. d) Nous ne savons pas cuisiner. e) Les manchots ne peuvent pas voler. f) Tu sais monter à cheval ?",
              hint: "Can ne change pas, même avec she ou my brother, et le verbe qui suit reste à la forme de base. Pour la question, placez can en premier.",
              solution: [
                "a) I can swim.",
                "b) She can't sing.",
                "c) My brother can juggle (pas de -s à can).",
                "d) We can't cook.",
                "e) Penguins can't fly.",
                "f) Can you ride a horse?",
              ],
            },
            {
              level: 2,
              statement: "Voici les talents de deux amies (données fictives). Zoe : nager oui, dessiner non, parler espagnol oui. Ruby : nager non, dessiner oui, parler espagnol non. Posez trois questions à Zoe et donnez ses réponses courtes, puis écrivez deux phrases qui comparent Zoe et Ruby avec but.",
              hint: "Question : Can you...? Réponse : Yes, I can. / No, I can't. Pour comparer, reliez une phrase affirmative et une phrase négative avec but.",
              solution: [
                "« Can you swim, Zoe? Yes, I can. »",
                "« Can you draw? No, I can't. »",
                "« Can you speak Spanish? Yes, I can. »",
                "Comparaison : « Zoe can swim, but Ruby can't. »",
                "Comparaison : « Ruby can draw, but Zoe can't. » (On peut aussi écrire : Zoe can speak Spanish, but Ruby can't.)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour le spectacle de talents du collège, un élève a écrit cette présentation, qui contient cinq erreurs. Retrouvez-les et corrigez-les en expliquant pourquoi. « Hello! My name is Adam. I can to juggle with five balls. My sister Lea cans sing very well. Do you can dance? I can't dancing at all. But I can playing the piano a little. »",
              hint: "Relisez les règles de can : pas de -s, pas de to, pas de -ing après can, pas de do dans la question.",
              solution: [
                "1) « I can to juggle » : pas de to après can. Correction : I can juggle with five balls.",
                "2) « Lea cans sing » : can ne prend jamais de -s. Correction : My sister Lea can sing very well.",
                "3) « Do you can dance? » : on ne met pas do avec can ; on place can devant le sujet. Correction : Can you dance?",
                "4) « I can't dancing » : après can't, le verbe est à la forme de base. Correction : I can't dance at all.",
                "5) « I can playing » : même règle. Correction : But I can play the piano a little.",
                "Texte corrigé : « Hello! My name is Adam. I can juggle with five balls. My sister Lea can sing very well. Can you dance? I can't dance at all. But I can play the piano a little. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur « can ».",
            statements: [
              { text: "« She cans swim » est correct.", true: false, why: "Can ne prend jamais de -s : She can swim." },
              { text: "Après can, le verbe est à la forme de base, sans to.", true: true, why: "On dit I can dance, jamais I can to dance." },
              { text: "« Do you can sing? » est une bonne question.", true: false, why: "Avec can, pas de do : Can you sing?" },
              { text: "Cannot s'écrit en un seul mot.", true: true, why: "La forme pleine de can't s'écrit cannot, en un seul mot." },
              { text: "« Yes, I can » est une réponse courte correcte à « Can you cook? ».", true: true, why: "La réponse courte reprend le sujet et can." },
              { text: "« I can't swim at all » signifie « Je sais un peu nager ».", true: false, why: "Not at all signifie « pas du tout » : je ne sais pas du tout nager." },
            ],
          },
          quiz: [
            {
              q: "Quelle phrase est correcte ?",
              options: ["He can plays tennis.", "He cans play tennis.", "He can play tennis.", "He can to play tennis."],
              answer: 2,
              why: "Can ne prend pas de -s et il est suivi du verbe de base, sans to.",
            },
            {
              q: "Comment pose-t-on la question « Tu sais dessiner ? »",
              options: ["Can you draw?", "Do you can draw?", "You can draw?"],
              answer: 0,
              why: "Pour la question, on place can devant le sujet, sans do.",
            },
            {
              q: "« Can your sister skate? » Quelle réponse courte est correcte ?",
              options: ["No, she doesn't.", "No, she can't.", "No, she cans.", "No, she isn't."],
              answer: 1,
              why: "La question est posée avec can : on reprend can dans la réponse, No, she can't.",
            },
            {
              q: "Que signifie « I can speak Italian a little » ?",
              options: ["Je parle très bien italien.", "Je ne parle pas italien.", "Je veux parler italien.", "Je parle un peu italien."],
              answer: 3,
              why: "A little signifie « un peu ».",
            },
            {
              q: "Quelle est la forme pleine de « can't » ?",
              options: ["can nots", "cannot", "can no", "don't can"],
              answer: 1,
              why: "La forme pleine s'écrit en un seul mot : cannot.",
            },
          ],
          trap: "Traiter can comme un verbe ordinaire : ajouter un -s (« she cans »), un to ou un -ing après lui (« I can to swim », « I can swimming »), ou poser la question avec do (« Do you can...? »).",
          method: "Retenez la formule « can + verbe nu » : rien ne s'accroche à can, ni -s, ni to, ni do. Pour vérifier une phrase, cachez can : le verbe qui reste doit être exactement celui du dictionnaire.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'frequence',
          title: 'Dire à quelle fréquence : « always », « often », « never »',
          minutes: 30,
          objectives: [
            "Exprimer la fréquence d'une action avec « always », « usually », « often », « sometimes » et « never ».",
            "Placer correctement l'adverbe de fréquence dans la phrase.",
            "Poser la question « How often...? » et y répondre avec « every day », « once a week » ou « twice a week ».",
          ],
          course: [
            {
              heading: "Les adverbes de fréquence",
              paragraphs: [
                "Les adverbes de fréquence indiquent combien de fois on fait quelque chose. On les emploie avec le présent simple, le temps des habitudes. Voici les principaux, du plus fréquent au moins fréquent : always (toujours), usually (d'habitude, généralement), often (souvent), sometimes (parfois), rarely (rarement) et never (jamais).",
                "Pour vous en souvenir, imaginez une échelle de 0 à 100 % : always correspond à 100 % des fois, usually à presque toujours, often à souvent, sometimes à de temps en temps, rarely à presque jamais et never à 0 %. Exemple : « I always brush my teeth before bed. » « I never eat insects! »",
              ],
              box: { label: "À retenir", text: "always (toujours) > usually (d'habitude) > often (souvent) > sometimes (parfois) > rarely (rarement) > never (jamais)." },
            },
            {
              heading: "La place de l'adverbe dans la phrase",
              paragraphs: [
                "L'adverbe de fréquence se place devant le verbe, juste après le sujet : « I often play football. » « She usually walks to school. » C'est différent du français, où l'on dit « Je joue souvent au football ». Ne dites donc pas « I play often football ».",
                "Exception importante : avec le verbe be (am, is, are), l'adverbe se place après le verbe. « I am always happy on Saturdays. » « He is never late. » « They are often tired. »",
                "Never a déjà un sens négatif : on l'emploie avec un verbe à la forme affirmative. On dit « I never watch TV », et non « I don't never watch TV ». Sometimes est plus libre : on peut aussi le placer en début de phrase : « Sometimes I go to the cinema. »",
              ],
              box: { label: "Règle", text: "Sujet + adverbe + verbe : She often reads. Mais be + adverbe : She is often late. Never s'emploie avec un verbe affirmatif : I never cook." },
            },
            {
              heading: "La question How often...? et les expressions de fréquence",
              paragraphs: [
                "Pour demander à quelle fréquence quelqu'un fait quelque chose, on dit « How often...? » suivi d'une question au présent simple : « How often do you play tennis? » « How often does your brother go swimming? »",
                "Pour répondre de façon précise, on utilise des expressions placées en fin de phrase : every day (tous les jours), every week (toutes les semaines), on Mondays (le lundi), once a week (une fois par semaine), twice a week (deux fois par semaine), three times a month (trois fois par mois). « I play tennis twice a week. » « She goes swimming every Saturday. » Attention : on dit once et twice, puis three times, four times...",
              ],
              box: { label: "Repère", text: "once = une fois ; twice = deux fois ; three times = trois fois. Ces expressions se placent en fin de phrase : I go to the library once a week." },
            },
          ],
          keyPoints: [
            "Du plus fréquent au moins fréquent : always, usually, often, sometimes, rarely, never.",
            "L'adverbe se place devant le verbe (I often read) mais après be (I am often late).",
            "Never s'emploie avec un verbe affirmatif : I never eat meat.",
            "How often do you...? I ... once a week / twice a week / three times a week / every day.",
            "Les expressions comme once a week se placent en fin de phrase.",
          ],
          example: {
            statement: "Placez correctement l'adverbe entre parenthèses, puis traduisez la phrase : « Ben is late for school (never). Ben walks to school (usually). »",
            solution: [
              "Première phrase : le verbe est be (is), donc l'adverbe se place après lui : Ben is never late for school.",
              "Never a déjà un sens négatif, la phrase reste affirmative. Traduction : Ben n'est jamais en retard à l'école.",
              "Deuxième phrase : walks est un verbe ordinaire, donc l'adverbe se place devant lui : Ben usually walks to school.",
              "Traduction : D'habitude, Ben va à l'école à pied.",
              "Réponse : « Ben is never late for school. Ben usually walks to school. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Placez l'adverbe entre parenthèses au bon endroit : a) I walk to school (always). b) She is late (never). c) We go to the cinema (sometimes). d) They are happy (usually). e) Tom eats vegetables (often). f) My dad cooks on Sundays (usually).",
              hint: "Cherchez le verbe de chaque phrase. Est-ce be (am, is, are) ? Si oui, l'adverbe vient après ; sinon, il vient devant.",
              solution: [
                "a) I always walk to school.",
                "b) She is never late (après is).",
                "c) We sometimes go to the cinema (ou : Sometimes we go to the cinema).",
                "d) They are usually happy (après are).",
                "e) Tom often eats vegetables.",
                "f) My dad usually cooks on Sundays.",
              ],
            },
            {
              level: 2,
              statement: "Voici les activités d'Ella (données fictives) : piscine deux fois par semaine ; piano tous les jours ; cinéma une fois par mois ; basket trois fois par semaine. Posez la question How often...? pour chaque activité, à la troisième personne, et répondez par une phrase complète.",
              hint: "Question : How often does Ella...? (le verbe sans -s). Réponse : Ella + verbe avec -s + expression en fin de phrase.",
              solution: [
                "« How often does Ella go swimming? She goes swimming twice a week. »",
                "« How often does Ella play the piano? She plays the piano every day. »",
                "« How often does Ella go to the cinema? She goes to the cinema once a month. »",
                "« How often does Ella play basketball? She plays basketball three times a week. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici le relevé d'une semaine de Noah (données fictives), en nombre de jours sur 7 : se brosser les dents après le petit déjeuner : 7 ; aller au collège en bus : 5 ; lire une BD : 3 ; jouer aux jeux vidéo : 1 ; boire du café : 0. Utilisez cette échelle : 7 jours = always, 5 ou 6 = usually, 3 ou 4 = often, 1 ou 2 = sometimes, 0 = never. Écrivez cinq phrases sur Noah, puis une sixième dans laquelle Noah parle de lui avec be et un adverbe (il n'est jamais en retard).",
              hint: "Choisissez d'abord l'adverbe de chaque ligne avec l'échelle, puis placez-le devant le verbe. Pour la dernière phrase, l'adverbe vient après am.",
              solution: [
                "7 jours → always : « Noah always brushes his teeth after breakfast. » (brush → brushes)",
                "5 jours → usually : « He usually goes to school by bus. »",
                "3 jours → often : « He often reads comics. »",
                "1 jour → sometimes : « He sometimes plays video games. »",
                "0 jour → never, avec un verbe affirmatif : « He never drinks coffee. »",
                "Phrase avec be : l'adverbe se place après am. « I am never late, » says Noah.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression anglaise à sa traduction.",
            pairs: [
              { left: "always", right: "toujours" },
              { left: "usually", right: "d'habitude" },
              { left: "often", right: "souvent" },
              { left: "sometimes", right: "parfois" },
              { left: "never", right: "jamais" },
              { left: "twice a week", right: "deux fois par semaine" },
            ],
          },
          quiz: [
            {
              q: "Où placer « often » dans « I play the guitar » ?",
              options: ["I play often the guitar.", "I often play the guitar.", "I play the often guitar.", "Often I play guitar the."],
              answer: 1,
              why: "Avec un verbe ordinaire, l'adverbe de fréquence se place devant le verbe.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["He never is late.", "He don't never late.", "He is never late."],
              answer: 2,
              why: "Avec be, l'adverbe se place après le verbe : he is never late.",
            },
            {
              q: "Quel adverbe correspond à « 100 % des fois » ?",
              options: ["always", "often", "usually", "sometimes"],
              answer: 0,
              why: "Always signifie toujours, à chaque fois.",
            },
            {
              q: "Comment dit-on « deux fois par semaine » ?",
              options: ["two time a week", "second a week", "two week a time", "twice a week"],
              answer: 3,
              why: "On dit once (une fois), twice (deux fois), puis three times, four times.",
            },
            {
              q: "Quelle question demande la fréquence d'une activité ?",
              options: ["How many do you swim?", "How often do you swim?", "When often do you swim?"],
              answer: 1,
              why: "Pour demander une fréquence, on emploie How often...?",
            },
          ],
          trap: "Placer l'adverbe comme en français, après le verbe (« I play often football »), ou ajouter une négation avec never (« I don't never eat fish »).",
          method: "Repérez le verbe de la phrase et posez-vous une seule question : est-ce be ? Si oui, l'adverbe vient après ; sinon, il vient juste devant le verbe. Pour retenir l'ordre des adverbes, apprenez-les comme une échelle, de always à never.",
        },
      ],
    },
    {
      id: 'pays',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'pays-nationalites',
          title: 'Les pays anglophones et les nationalités',
          minutes: 30,
          objectives: [
            "Nommer quelques pays où l'on parle anglais et leurs capitales.",
            "Distinguer le Royaume-Uni, la Grande-Bretagne et l'Angleterre.",
            "Dire d'où l'on vient et donner sa nationalité : « I'm from... », « I'm... ».",
          ],
          course: [
            {
              heading: "L'anglais, une langue parlée dans le monde entier",
              paragraphs: [
                "L'anglais est parlé sur tous les continents. Dans certains pays, c'est la langue la plus parlée par les habitants : le Royaume-Uni (the United Kingdom), l'Irlande (Ireland), les États-Unis (the United States of America), le Canada, l'Australie (Australia) et la Nouvelle-Zélande (New Zealand). On appelle l'ensemble de ces pays le monde anglophone (the English-speaking world).",
                "Dans d'autres pays, l'anglais est l'une des langues officielles, à côté d'autres langues : c'est le cas, par exemple, de l'Afrique du Sud (South Africa), de l'Inde (India), du Nigeria ou de la Jamaïque (Jamaica). Au Canada, il y a deux langues officielles : l'anglais et le français, parlé surtout au Québec.",
              ],
            },
            {
              heading: "Le Royaume-Uni et l'Irlande",
              paragraphs: [
                "Le Royaume-Uni (the UK) réunit quatre nations, chacune avec sa capitale : England (l'Angleterre, capitale London), Scotland (l'Écosse, capitale Edinburgh), Wales (le pays de Galles, capitale Cardiff) et Northern Ireland (l'Irlande du Nord, capitale Belfast). London est aussi la capitale de tout le Royaume-Uni.",
                "Ne confondez pas ces trois noms. England n'est qu'une des quatre nations. Great Britain (la Grande-Bretagne) est la grande île qui regroupe l'Angleterre, l'Écosse et le pays de Galles. The United Kingdom ajoute l'Irlande du Nord à la Grande-Bretagne. Le drapeau du Royaume-Uni s'appelle the Union Jack (ou Union Flag).",
                "À l'ouest de la Grande-Bretagne se trouve l'île d'Irlande. Le nord de l'île, l'Irlande du Nord, fait partie du Royaume-Uni. Le reste de l'île forme un pays indépendant, la République d'Irlande (the Republic of Ireland), dont la capitale est Dublin.",
              ],
              box: { label: "Attention", text: "England = l'Angleterre seule. Great Britain = l'Angleterre + l'Écosse + le pays de Galles. The UK = la Grande-Bretagne + l'Irlande du Nord." },
            },
            {
              heading: "De l'autre côté des océans",
              paragraphs: [
                "Les États-Unis (the USA) sont formés de 50 États (states). Leur capitale est Washington, D.C., et non New York, qui est pourtant la plus grande ville du pays. Au nord des États-Unis se trouve le Canada, dont la capitale est Ottawa, et non Toronto.",
                "Dans l'hémisphère sud, l'Australie a pour capitale Canberra (et non Sydney, la ville la plus connue) et la Nouvelle-Zélande a pour capitale Wellington (et non Auckland). Ce piège revient souvent : la ville la plus célèbre d'un pays n'est pas toujours sa capitale.",
              ],
              box: { label: "Repère", text: "Capitales : London (UK), Dublin (Ireland), Washington, D.C. (USA), Ottawa (Canada), Canberra (Australia), Wellington (New Zealand)." },
            },
            {
              heading: "Dire d'où l'on vient : pays, nationalités et langues",
              paragraphs: [
                "Pour demander à quelqu'un d'où il vient, on dit « Where are you from? » et l'on répond « I'm from France. » Pour donner sa nationalité, on emploie be suivi d'un adjectif : « I'm French. » Pour une autre personne : « Where is she from? She's from Canada. She's Canadian. »",
                "Voici les nationalités à connaître : England → English, Scotland → Scottish, Wales → Welsh, Ireland → Irish, the UK → British, the USA → American, Canada → Canadian, Australia → Australian, New Zealand → a New Zealander, France → French. Le nom de la langue ressemble souvent à la nationalité : English, French, Welsh.",
                "En anglais, les noms de pays, les nationalités et les langues prennent toujours une majuscule : « She's Scottish and she speaks English. » Certains noms de pays prennent the : the UK, the USA, the United States, the Republic of Ireland. Les autres n'en prennent pas : France, England, Canada, Australia.",
              ],
              box: { label: "Règle", text: "Where are you from? I'm from Wales. I'm Welsh. Majuscule aux pays, aux nationalités et aux langues. The devant the UK et the USA." },
            },
          ],
          keyPoints: [
            "Le Royaume-Uni : England (London), Scotland (Edinburgh), Wales (Cardiff), Northern Ireland (Belfast).",
            "Great Britain = England + Scotland + Wales ; the UK = Great Britain + Northern Ireland.",
            "Capitales pièges : Washington, D.C. (USA), Ottawa (Canada), Canberra (Australia), Wellington (New Zealand).",
            "Where are you from? I'm from Scotland. I'm Scottish.",
            "Majuscule aux pays, nationalités et langues ; the devant the UK et the USA.",
          ],
          example: {
            statement: "Liam habite à Dublin et Grace habite à Ottawa. Écrivez, pour chacun, la question « D'où vient-il / elle ? » et la réponse complète en anglais, avec le pays et la nationalité.",
            solution: [
              "Dublin est la capitale de la République d'Irlande : le pays est Ireland, la nationalité Irish.",
              "Ottawa est la capitale du Canada : le pays est Canada, la nationalité Canadian.",
              "Question pour un garçon : Where is he from? Pour une fille : Where is she from?",
              "Mettre une majuscule aux pays et aux nationalités.",
              "Réponse : « Where is Liam from? He's from Ireland. He's Irish. Where is Grace from? She's from Canada. She's Canadian. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez la nationalité qui correspond à chaque pays : a) England ; b) Scotland ; c) Wales ; d) the USA ; e) Australia ; f) France.",
              hint: "Relisez la liste du cours. N'oubliez pas la majuscule, même pour un adjectif.",
              solution: [
                "a) England → English.",
                "b) Scotland → Scottish.",
                "c) Wales → Welsh.",
                "d) the USA → American.",
                "e) Australia → Australian.",
                "f) France → French.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le nom de la capitale ou du pays : a) ___ is the capital of Scotland. b) Cardiff is the capital of ___. c) ___ is the capital of the USA. d) Canberra is the capital of ___. e) ___ is the capital of Northern Ireland. f) Ottawa is the capital of ___.",
              hint: "Attention aux pièges : la ville la plus célèbre n'est pas toujours la capitale.",
              solution: [
                "a) Edinburgh is the capital of Scotland.",
                "b) Cardiff is the capital of Wales.",
                "c) Washington, D.C. is the capital of the USA (pas New York).",
                "d) Canberra is the capital of Australia (pas Sydney).",
                "e) Belfast is the capital of Northern Ireland.",
                "f) Ottawa is the capital of Canada (pas Toronto).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Trois jeunes se présentent par une devinette. Trouvez leur pays et leur nationalité, puis écrivez pour chacun deux phrases : « I'm from... » et « I'm... ». a) Ava : « Ma capitale est Cardiff. » b) Jack : « J'habite la capitale d'un pays de l'hémisphère sud, qui n'est pas Canberra. » c) Ethan : « J'habite à Belfast. » Pour Ethan, donnez aussi le nom du royaume dont fait partie sa nation.",
              hint: "Utilisez la liste des capitales. Pour Ethan, rappelez-vous les quatre nations du Royaume-Uni.",
              solution: [
                "a) Cardiff est la capitale du pays de Galles. « I'm from Wales. I'm Welsh. »",
                "b) Dans l'hémisphère sud, les deux capitales du cours sont Canberra (Australie) et Wellington (Nouvelle-Zélande). Ce n'est pas Canberra : Jack vit donc à Wellington. « I'm from New Zealand. I'm a New Zealander. »",
                "c) Belfast est la capitale de l'Irlande du Nord. « I'm from Northern Ireland. I'm Northern Irish. » On peut aussi dire « I'm British » ou « I'm Irish » : les habitants d'Irlande du Nord choisissent la nationalité qu'ils revendiquent.",
                "L'Irlande du Nord fait partie du Royaume-Uni : the United Kingdom (the UK), avec l'Angleterre, l'Écosse et le pays de Galles.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque pays à la nationalité de ses habitants.",
            pairs: [
              { left: "Scotland", right: "Scottish" },
              { left: "Wales", right: "Welsh" },
              { left: "Ireland", right: "Irish" },
              { left: "the USA", right: "American" },
              { left: "Canada", right: "Canadian" },
              { left: "Australia", right: "Australian" },
            ],
          },
          quiz: [
            {
              q: "Quelle est la capitale de l'Australie ?",
              options: ["Sydney", "Melbourne", "Canberra", "Perth"],
              answer: 2,
              why: "La capitale de l'Australie est Canberra ; Sydney est la ville la plus connue, mais ce n'est pas la capitale.",
            },
            {
              q: "Quelle est la nationalité d'une personne qui vient du pays de Galles (Wales) ?",
              options: ["Welsh", "Walish", "Gallish", "Wales"],
              answer: 0,
              why: "Les habitants du pays de Galles sont Welsh, et leur langue celtique s'appelle aussi Welsh.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["I'm from USA.", "I'm from the american.", "I'm from United States.", "I'm from the USA."],
              answer: 3,
              why: "Le nom the USA prend toujours l'article the.",
            },
            {
              q: "Le Royaume-Uni (the UK) est formé de :",
              options: ["l'Angleterre, l'Écosse, le pays de Galles et l'Irlande du Nord", "l'Angleterre, l'Écosse, le pays de Galles et toute l'île d'Irlande", "l'Angleterre et la République d'Irlande seulement"],
              answer: 0,
              why: "The UK réunit quatre nations : England, Scotland, Wales et Northern Ireland. La République d'Irlande est un pays indépendant.",
            },
            {
              q: "Comment écrit-on correctement « Il est français » ?",
              options: ["He's french.", "He's French.", "He's France."],
              answer: 1,
              why: "Les nationalités prennent une majuscule en anglais, et French est l'adjectif de nationalité.",
            },
          ],
          trap: "Confondre l'Angleterre, la Grande-Bretagne et le Royaume-Uni, ou oublier la majuscule aux nationalités (« french ») et l'article de the USA et the UK.",
          method: "Dessinez de mémoire une carte simple des îles Britanniques et écrivez sur chaque nation son nom, sa capitale et sa nationalité. Recommencez jusqu'à pouvoir le faire sans regarder le cours.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'situer-lieu',
          title: 'Situer un lieu : les prépositions de lieu',
          minutes: 30,
          objectives: [
            "Situer un objet ou une personne avec les prépositions de lieu : « in », « on », « under », « next to », « behind », « in front of », « between », « opposite ».",
            "Poser la question « Where is...? » ou « Where are...? » et y répondre.",
            "Situer une ville ou une région sur une carte avec les points cardinaux.",
          ],
          course: [
            {
              heading: "Les prépositions de lieu",
              paragraphs: [
                "Les prépositions de lieu servent à dire où se trouve quelque chose. Les plus utiles sont : in (dans), on (sur), under (sous), next to (à côté de), behind (derrière), in front of (devant), between (entre), opposite (en face de) et near (près de).",
                "Exemples dans une chambre : « The cat is on the bed. » (sur le lit) « My shoes are under the bed. » (sous le lit) « The lamp is next to the bed. » « The desk is between the bed and the window. » (entre le lit et la fenêtre) « The wardrobe is behind the door. » Avec between, on utilise and pour relier les deux éléments.",
                "Ne confondez pas in front of et opposite. In front of signifie « juste devant » : « The bus stops in front of the school. » Opposite signifie « en face, de l'autre côté » : « The bakery is opposite the school, on the other side of the street. » Attention aussi à l'orthographe : on écrit next to, jamais next of.",
              ],
              box: { label: "À retenir", text: "in = dans ; on = sur ; under = sous ; next to = à côté de ; behind = derrière ; in front of = devant ; between... and... = entre... et... ; opposite = en face de ; near = près de." },
            },
            {
              heading: "Demander et dire où se trouve quelque chose",
              paragraphs: [
                "Pour demander où se trouve une chose ou une personne, on dit « Where is...? » (souvent contracté en Where's) au singulier et « Where are...? » au pluriel. Dans la réponse, on remplace le nom par un pronom : it pour une chose, he ou she pour une personne, they au pluriel. « Where's my phone? It's on the table. » « Where are my keys? They're in your bag. »",
                "On peut aussi combiner les prépositions avec there is et there are pour décrire une pièce ou une image : « There's a sofa in the living room. There's a lamp next to the sofa. There are two cushions on the sofa. »",
              ],
              box: { label: "Règle", text: "Where's + singulier ? It's / He's / She's + préposition. Where are + pluriel ? They're + préposition. Exemple : Where's the dog? It's behind the tree." },
            },
            {
              heading: "Situer un lieu sur une carte",
              paragraphs: [
                "Sur une carte, on utilise les points cardinaux : north (nord), south (sud), east (est), west (ouest), et leurs combinaisons : north-east, north-west, south-east, south-west. Pour dire qu'un lieu se trouve dans une partie d'un pays, on dit in the north of, in the south-east of... : « London is in the south-east of England. » « Cardiff is in the south of Wales. »",
                "Attention à une différence importante. In the north of signifie « dans le nord de », à l'intérieur : « Newcastle is in the north of England. » North of, sans in the, signifie « au nord de », à l'extérieur : « Scotland is north of England. » « Ireland is west of Great Britain. » « Canada is north of the USA. »",
                "D'autres expressions sont utiles : on the coast (sur la côte) : « Dublin is on the east coast of Ireland. » ; on a river (au bord d'un fleuve) : « London is on the River Thames. » ; on an island (sur une île) ; near the sea (près de la mer).",
              ],
              box: { label: "Attention", text: "in the north of England = dans le nord de l'Angleterre (à l'intérieur). north of England = au nord de l'Angleterre (à l'extérieur) : Scotland is north of England." },
            },
          ],
          keyPoints: [
            "in, on, under, next to, behind, in front of, between... and..., opposite, near.",
            "In front of = juste devant ; opposite = en face, de l'autre côté.",
            "Where's...? It's on the table. Where are...? They're under the bed.",
            "In the north of = dans le nord de ; north of = au nord de (à l'extérieur).",
            "On the coast, on the River Thames, on an island.",
          ],
          example: {
            statement: "Votre ami cherche ses affaires. Le sac est sous le bureau, les livres sont sur l'étagère et le téléphone est entre la lampe et l'ordinateur. Écrivez ses questions et vos réponses en anglais.",
            solution: [
              "Le sac (my bag) est au singulier : Where's my bag? Réponse avec it : It's under the desk.",
              "Les livres (my books) sont au pluriel : Where are my books? Réponse avec they : They're on the shelf.",
              "Le téléphone est au singulier ; entre deux objets, on emploie between... and... : It's between the lamp and the computer.",
              "Réponse : « Where's my bag? It's under the desk. Where are my books? They're on the shelf. Where's my phone? It's between the lamp and the computer. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez la préposition entre parenthèses : a) The ball is (sous) the chair. b) The cat is (sur) the sofa. c) My bike is (derrière) the house. d) The shop is (en face de) the station. e) Sit (à côté de) me! f) The car is (devant) the garage.",
              hint: "Relisez l'encadré du cours. Pour « en face de », pensez à l'autre côté de la rue.",
              solution: [
                "a) The ball is under the chair.",
                "b) The cat is on the sofa.",
                "c) My bike is behind the house.",
                "d) The shop is opposite the station.",
                "e) Sit next to me!",
                "f) The car is in front of the garage.",
              ],
            },
            {
              level: 2,
              statement: "Lisez la description et répondez en anglais par une phrase complète. « In my living room, there's a big sofa. The TV is opposite the sofa. There's a small table in front of the sofa, and my cat is under the table. There are two plants: one is next to the TV and one is behind the sofa. » a) Where's the TV? b) Where's the cat? c) Where's the small table? d) Where are the plants?",
              hint: "Reprenez le nom de la question par un pronom : it au singulier, they au pluriel.",
              solution: [
                "a) It's opposite the sofa.",
                "b) It's under the table.",
                "c) It's in front of the sofa.",
                "d) One plant is next to the TV and the other one is behind the sofa. (On peut aussi dire : They're next to the TV and behind the sofa.)",
              ],
            },
            {
              level: 3,
              statement: "Défi. Écrivez une phrase en anglais pour chaque information, en choisissant entre in the... of, ... of, on the coast et on the River : a) L'Écosse est au nord de l'Angleterre. b) Londres est dans le sud-est de l'Angleterre. c) Londres est au bord de la Tamise. d) Dublin est sur la côte est de l'Irlande. e) L'Irlande est à l'ouest de la Grande-Bretagne. f) Newcastle est dans le nord de l'Angleterre.",
              hint: "Pour chaque phrase, demandez-vous si le lieu est à l'intérieur de la région (in the north of) ou à l'extérieur (north of).",
              solution: [
                "a) L'Écosse est hors de l'Angleterre : « Scotland is north of England. »",
                "b) Londres est à l'intérieur de l'Angleterre : « London is in the south-east of England. »",
                "c) Un fleuve : « London is on the River Thames. »",
                "d) Une côte : « Dublin is on the east coast of Ireland. »",
                "e) L'Irlande est hors de la Grande-Bretagne : « Ireland is west of Great Britain. »",
                "f) Newcastle est à l'intérieur de l'Angleterre : « Newcastle is in the north of England. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos prépositions de lieu.",
            statements: [
              { text: "« Under » signifie « sous ».", true: true, why: "The cat is under the table : le chat est sous la table." },
              { text: "On écrit « next of » pour dire « à côté de ».", true: false, why: "On écrit next to : The lamp is next to the bed." },
              { text: "« In front of » et « opposite » ont exactement le même sens.", true: false, why: "In front of signifie juste devant ; opposite signifie en face, de l'autre côté." },
              { text: "« Scotland is north of England » est correct.", true: true, why: "L'Écosse est à l'extérieur de l'Angleterre : on dit north of, sans in the." },
              { text: "Avec between, on relie les deux éléments par and.", true: true, why: "The desk is between the bed and the window." },
              { text: "Pour répondre à « Where are my keys? », on dit « It's on the table. ».", true: false, why: "Keys est au pluriel : They're on the table." },
            ],
          },
          quiz: [
            {
              q: "Que signifie « behind » ?",
              options: ["derrière", "devant", "entre", "à côté de"],
              answer: 0,
              why: "Behind signifie derrière ; devant se dit in front of.",
            },
            {
              q: "Complétez : « The bank is ___ the post office, on the other side of the street. »",
              options: ["under", "next of", "opposite", "inside of"],
              answer: 2,
              why: "De l'autre côté de la rue, en face : opposite.",
            },
            {
              q: "« Where are your shoes? » Quelle réponse est correcte ?",
              options: ["It's under the bed.", "There are under the bed.", "Is under the bed.", "They're under the bed."],
              answer: 3,
              why: "Shoes est au pluriel : on répond avec they.",
            },
            {
              q: "Comment dit-on « Brighton est dans le sud de l'Angleterre » ?",
              options: ["Brighton is south England.", "Brighton is in the south of England.", "Brighton is on the south of the England."],
              answer: 1,
              why: "Brighton est à l'intérieur de l'Angleterre : in the south of England.",
            },
            {
              q: "Complétez : « My desk is ___ the bed and the window. »",
              options: ["between", "next", "in front", "among of"],
              answer: 0,
              why: "Entre deux éléments reliés par and, on emploie between.",
            },
          ],
          trap: "Écrire « next of » au lieu de next to, confondre in front of (juste devant) et opposite (en face), ou dire in the north of pour un lieu situé hors de la région.",
          method: "Apprenez les prépositions avec un objet : posez une gomme sur, sous, à côté de, derrière votre trousse, et dites la phrase à voix haute à chaque fois. Pour une carte, demandez-vous toujours : dedans (in the north of) ou dehors (north of) ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'meteo-paysages',
          title: 'Décrire un paysage et le temps qu\'il fait',
          minutes: 35,
          objectives: [
            "Dire le temps qu'il fait et la température : « It's sunny », « It's raining », « It's cold ».",
            "Nommer les éléments d'un paysage : mountains, lakes, rivers, forests, beaches...",
            "Décrire une photo de paysage avec « there is », « there are », des adjectifs et des repères comme « in the foreground ».",
          ],
          course: [
            {
              heading: "Le temps qu'il fait",
              paragraphs: [
                "Pour demander le temps qu'il fait, on dit « What's the weather like? » (Quel temps fait-il ?). On répond avec it's suivi d'un adjectif : « It's sunny. » (Il fait beau, il y a du soleil.) « It's cloudy. » (C'est nuageux.) « It's windy. » (Il y a du vent.) « It's foggy. » (Il y a du brouillard.) « It's rainy. » (C'est pluvieux.) « It's snowy. » (Il y a de la neige.) « It's stormy. » (Il y a de l'orage.)",
                "Beaucoup de ces adjectifs se forment en ajoutant -y au nom : sun → sunny, cloud → cloudy, wind → windy, rain → rainy, snow → snowy, storm → stormy, fog → foggy. Remarquez que sun et fog doublent leur consonne finale : sunny, foggy.",
                "Pour dire qu'il pleut ou qu'il neige en ce moment, on emploie deux expressions toutes faites : « It's raining. » (Il pleut.) « It's snowing. » (Il neige.) Pour parler d'une habitude, on emploie le présent simple : « In Scotland, it often rains. » « In Canada, it snows a lot in winter. »",
              ],
              box: { label: "À retenir", text: "What's the weather like? It's sunny / cloudy / windy / foggy / rainy / snowy / stormy. En ce moment : It's raining. It's snowing." },
            },
            {
              heading: "Les températures et les saisons",
              paragraphs: [
                "Pour parler de la température, on utilise aussi it's : « It's hot. » (Il fait chaud.) « It's warm. » (Il fait bon, doux.) « It's cool. » (Il fait frais.) « It's cold. » (Il fait froid.) « It's freezing. » (Il gèle, il fait un froid glacial.) On peut donner un nombre : « It's 20 degrees. » (Il fait 20 degrés.) Au Royaume-Uni, comme en France, on compte en degrés Celsius ; aux États-Unis, on utilise surtout les degrés Fahrenheit.",
                "Le temps change avec les saisons : spring, summer, autumn (fall aux États-Unis) et winter. Pour parler d'une saison, on emploie in : « In summer, it's hot and sunny. » « In winter, it's cold and it sometimes snows. » Vous pouvez réutiliser les adverbes de fréquence : always, often, sometimes, never.",
              ],
              box: { label: "Repère", text: "Du plus chaud au plus froid : hot > warm > cool > cold > freezing." },
            },
            {
              heading: "Les éléments d'un paysage",
              paragraphs: [
                "Voici le vocabulaire des paysages : a mountain (une montagne), a hill (une colline), a valley (une vallée), a lake (un lac), a river (une rivière, un fleuve), a waterfall (une cascade), a forest (une forêt), a field (un champ), a beach (une plage), the sea (la mer), an island (une île), a cliff (une falaise), a desert (un désert). La campagne se dit the countryside, et une ville a town ou a city.",
                "Le monde anglophone offre des paysages très variés. Dans les Highlands, au nord de l'Écosse, il y a des montagnes et de grands lacs, appelés lochs, comme le Loch Ness. Ben Nevis, en Écosse, est la plus haute montagne du Royaume-Uni. Dans le sud-est de l'Angleterre, à Douvres (Dover), on voit de hautes falaises blanches. Aux États-Unis, le Grand Canyon se trouve en Arizona, et les chutes du Niagara (Niagara Falls) sont à la frontière entre le Canada et les États-Unis. En Australie, le centre du pays, the Outback, est très sec.",
              ],
            },
            {
              heading: "Décrire une photo de paysage",
              paragraphs: [
                "Pour décrire une photo, commencez par dire ce que c'est : « This is a photo of a lake in Scotland. » Ensuite, situez les éléments : in the foreground (au premier plan), in the background (à l'arrière-plan), in the middle (au milieu), on the left (à gauche), on the right (à droite). Utilisez there is, there are et I can see : « In the foreground, there's a lake. In the background, I can see mountains. »",
                "Ajoutez des adjectifs pour rendre la description vivante : big, small, high (haut), green, blue, beautiful, wild (sauvage), quiet (calme). En anglais, l'adjectif se place devant le nom et ne prend jamais de -s : « high mountains », « a blue lake », « green fields ». Terminez par le temps qu'il fait et votre avis : « It's sunny. I think it's a beautiful place. »",
              ],
              box: { label: "Méthode", text: "1. Ce que c'est (This is a photo of...). 2. Les plans : in the foreground, in the background, on the left, on the right. 3. Le temps (It's sunny). 4. Votre avis (I think it's...)." },
            },
          ],
          keyPoints: [
            "What's the weather like? It's sunny, cloudy, windy, foggy, rainy, snowy, stormy.",
            "En ce moment : It's raining, It's snowing. Habitude : It often rains.",
            "Températures : hot > warm > cool > cold > freezing ; It's 20 degrees.",
            "Paysage : mountain, hill, valley, lake, river, forest, field, beach, sea, island, cliff.",
            "Photo : in the foreground, in the background, on the left, on the right ; adjectif devant le nom, sans -s.",
          ],
          example: {
            statement: "Décrivez en anglais, en cinq phrases, cette photo des Highlands : au premier plan, un lac bleu ; à gauche, une petite maison blanche ; à l'arrière-plan, de hautes montagnes ; il y a des nuages et du vent.",
            solution: [
              "Présenter la photo : « This is a photo of the Highlands, in Scotland. »",
              "Premier plan : « In the foreground, there's a blue lake. » (adjectif devant le nom).",
              "Gauche : « On the left, there's a small white house. »",
              "Arrière-plan, au pluriel : « In the background, I can see high mountains. » (high sans -s).",
              "Le temps : « It's cloudy and windy. »",
              "Réponse : « This is a photo of the Highlands, in Scotland. In the foreground, there's a blue lake. On the left, there's a small white house. In the background, I can see high mountains. It's cloudy and windy. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Formez l'adjectif de météo à partir du nom, puis traduisez la phrase obtenue : a) sun ; b) cloud ; c) wind ; d) fog ; e) snow ; f) storm. Modèle : rain → It's rainy. (C'est pluvieux.)",
              hint: "Ajoutez -y. Deux de ces noms doublent leur consonne finale.",
              solution: [
                "a) sun → It's sunny. (Il y a du soleil.) Le n est doublé.",
                "b) cloud → It's cloudy. (C'est nuageux.)",
                "c) wind → It's windy. (Il y a du vent.)",
                "d) fog → It's foggy. (Il y a du brouillard.) Le g est doublé.",
                "e) snow → It's snowy. (Il y a de la neige.)",
                "f) storm → It's stormy. (Il y a de l'orage.)",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce bulletin météo (données fictives) et répondez en français. « Good morning! Here's the weather for today. In London, it's cloudy and it's 15 degrees. In Edinburgh, it's raining and it's cold: only 8 degrees. In Cardiff, it's windy but sunny. In Belfast, it's foggy in the morning. » a) Quel temps fait-il à Londres ? b) Dans quelle ville pleut-il ? c) Quelle est la ville la plus froide ? d) Quel temps fait-il à Cardiff ? e) Que se passe-t-il à Belfast le matin ?",
              hint: "Repérez le nom de chaque ville, puis les mots de météo et les nombres qui suivent.",
              solution: [
                "a) À Londres, c'est nuageux et il fait 15 degrés.",
                "b) Il pleut à Édimbourg (« it's raining »).",
                "c) La ville la plus froide est Édimbourg, avec 8 degrés.",
                "d) À Cardiff, il y a du vent mais il fait soleil.",
                "e) À Belfast, il y a du brouillard le matin.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Décrivez en six phrases au moins une photo de plage en Australie : au premier plan, du sable jaune ; à droite, deux surfeurs ; au milieu, la mer bleue ; à l'arrière-plan, une petite île verte ; à gauche, de hautes falaises. Il fait très chaud et beau, 30 degrés. Utilisez there is, there are, I can see, au moins trois repères de position, et donnez votre avis.",
              hint: "Suivez la méthode du cours : ce que c'est, les plans, le temps, votre avis. Vérifiez que chaque adjectif est placé devant son nom, sans -s.",
              solution: [
                "Présenter : « This is a photo of a beach in Australia. »",
                "Les plans : « In the foreground, there's yellow sand. In the middle, I can see the blue sea. »",
                "Les côtés : « On the right, there are two surfers. On the left, there are high cliffs. »",
                "L'arrière-plan : « In the background, there's a small green island. »",
                "Le temps et l'avis : « It's hot and sunny: it's 30 degrees. I think it's a beautiful place for a holiday. »",
                "Vérifier : yellow sand, blue sea, high cliffs, small green island (adjectifs devant le nom, sans -s) ; there's devant un singulier, there are devant un pluriel.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces bulletins météo du plus froid au plus chaud.",
            items: [
              "It's freezing: -5 °C.",
              "It's cold: 3 °C.",
              "It's cool: 12 °C.",
              "It's warm: 21 °C.",
              "It's hot: 32 °C.",
            ],
          },
          quiz: [
            {
              q: "Comment dit-on « Il y a du vent » ?",
              options: ["It's windy.", "It's wind.", "There is windy.", "It's winding."],
              answer: 0,
              why: "L'adjectif de météo se forme avec -y : wind → windy, et on l'emploie après it's.",
            },
            {
              q: "Quelle phrase dit qu'il pleut en ce moment ?",
              options: ["It rains.", "It's rain.", "It's raining.", "It does rain."],
              answer: 2,
              why: "Pour la pluie en ce moment, on emploie l'expression It's raining ; It rains exprime une habitude.",
            },
            {
              q: "Que signifie « in the background » ?",
              options: ["au premier plan", "à l'arrière-plan", "sur le côté gauche", "au milieu"],
              answer: 1,
              why: "In the background signifie à l'arrière-plan ; au premier plan se dit in the foreground.",
            },
            {
              q: "Quelle expression est correcte ?",
              options: ["mountains highs", "high mountains", "highs mountains"],
              answer: 1,
              why: "L'adjectif se place devant le nom et ne prend jamais de -s.",
            },
            {
              q: "Quel est le mot le plus froid ?",
              options: ["freezing", "cool", "warm", "hot and sunny"],
              answer: 0,
              why: "Freezing signifie qu'il gèle, qu'il fait un froid glacial ; cool signifie frais, warm doux, et hot and sunny décrit une journée chaude et ensoleillée.",
            },
          ],
          trap: "Confondre le nom et l'adjectif de météo (« It's sun » au lieu de It's sunny) ou accorder l'adjectif comme en français (« highs mountains »).",
          method: "Pour décrire une image, suivez toujours le même parcours : ce que c'est, le premier plan, l'arrière-plan, la gauche, la droite, le temps, votre avis. Préparez une phrase par étape, puis relisez en vérifiant la place de chaque adjectif.",
        },
      ],
    },
    {
      id: 'animaux-nature',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'animaux',
          title: 'Les animaux et leur milieu',
          minutes: 30,
          objectives: [
            "Nommer des animaux de compagnie, de la ferme et sauvages, avec le bon article « a » ou « an ».",
            "Nommer les grands milieux naturels et associer un animal à son milieu.",
            "Dire où vit un animal avec le verbe « live » au présent simple.",
          ],
          course: [
            {
              heading: "Animaux de compagnie, de la ferme et sauvages",
              paragraphs: [
                "Les animaux de compagnie s'appellent pets : a dog (un chien), a cat (un chat), a rabbit (un lapin), a hamster, a guinea pig (un cochon d'Inde), a goldfish (un poisson rouge). Les animaux de la ferme sont les farm animals : a cow (une vache), a horse (un cheval), a pig (un cochon), a sheep (un mouton), a goat (une chèvre), a hen (une poule), a duck (un canard).",
                "Les animaux sauvages sont les wild animals : a lion, a tiger (un tigre), an elephant, a giraffe (une girafe), a monkey (un singe), a bear (un ours), a wolf (un loup), a fox (un renard), a snake (un serpent), a crocodile, an eagle (un aigle), an owl (une chouette, un hibou).",
                "Remarquez l'article : devant un mot qui commence par un son de voyelle, a devient an. On dit a dog, a horse, mais an elephant, an eagle, an owl, an insect. Pour classer les animaux, on utilise aussi les grandes familles : a mammal (un mammifère), a bird (un oiseau), a fish (un poisson), a reptile, an insect.",
              ],
              box: { label: "Règle", text: "a + son de consonne : a cat, a horse. an + son de voyelle : an elephant, an eagle, an owl." },
            },
            {
              heading: "Les milieux naturels",
              paragraphs: [
                "Chaque animal vit dans un milieu adapté à son mode de vie, son habitat. Voici les principaux : the savannah (la savane), the jungle ou the rainforest (la jungle, la forêt tropicale), the desert (le désert), the ocean ou the sea (l'océan, la mer), the Arctic (l'Arctique, autour du pôle Nord), Antarctica (l'Antarctique, autour du pôle Sud), the forest (la forêt), the mountains (la montagne) et the farm (la ferme).",
                "Pour dire où vit un animal, on emploie le verbe live au présent simple. Pour parler d'une espèce en général, on utilise le pluriel sans article : « Camels live in the desert. » « Polar bears live in the Arctic. » « Monkeys live in the jungle. » Au singulier, avec a, le verbe prend un -s : « A camel lives in the desert. »",
                "Quelques exemples justes à retenir : most lions live in the savannah, in Africa ; tigers live in forests in Asia ; giant pandas live in mountain forests in China ; emperor penguins live in Antarctica ; dolphins and whales live in the ocean.",
              ],
              box: { label: "Règle", text: "Espèce en général : pluriel sans the + live (Polar bears live in the Arctic). Avec a : verbe + -s (A polar bear lives in the Arctic)." },
            },
            {
              heading: "Des animaux du monde anglophone",
              paragraphs: [
                "Certains animaux sont liés à un pays anglophone. En Australie vivent les kangaroos et les koalas. En Nouvelle-Zélande, le kiwi est un oiseau qui ne vole pas ; c'est un symbole si fort que les Néo-Zélandais sont surnommés les Kiwis. Au Canada, le castor (the beaver) est un emblème national. Aux États-Unis, l'oiseau national est le pygargue à tête blanche (the bald eagle), un grand aigle à la tête blanche.",
                "Au Royaume-Uni, on peut voir dans la campagne des renards (foxes), des hérissons (hedgehogs) et, surtout en Écosse, des écureuils roux (red squirrels). Et l'animal national de l'Écosse est... imaginaire : c'est la licorne (the unicorn), que l'on voit sur le blason royal.",
              ],
            },
          ],
          keyPoints: [
            "Pets : dog, cat, rabbit, hamster ; farm animals : cow, horse, pig, sheep, hen ; wild animals : lion, tiger, elephant, bear, wolf.",
            "a devant un son de consonne (a horse), an devant un son de voyelle (an elephant, an owl).",
            "Milieux : savannah, jungle, desert, ocean, the Arctic, Antarctica, forest, mountains, farm.",
            "Espèce en général : Polar bears live in the Arctic. Au singulier : A camel lives in the desert.",
            "Symboles : kangaroo et koala (Australia), kiwi (New Zealand), beaver (Canada), bald eagle (USA).",
          ],
          example: {
            statement: "Classez ces animaux en trois groupes (pets, farm animals, wild animals) avec le bon article : cow, owl, hamster, elephant, goat, rabbit.",
            solution: [
              "Repérer l'article : owl et elephant commencent par un son de voyelle → an owl, an elephant ; les autres prennent a.",
              "Pets (animaux de compagnie) : a hamster, a rabbit.",
              "Farm animals (animaux de la ferme) : a cow, a goat.",
              "Wild animals (animaux sauvages) : an owl, an elephant.",
              "Réponse : Pets : a hamster, a rabbit. Farm animals : a cow, a goat. Wild animals : an owl, an elephant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez a ou an devant chaque nom, puis traduisez-le : a) ___ elephant ; b) ___ cow ; c) ___ eagle ; d) ___ owl ; e) ___ horse ; f) ___ insect ; g) ___ snake.",
              hint: "Prononcez le mot : commence-t-il par un son de voyelle (a, e, i, o, u) ?",
              solution: [
                "a) an elephant (un éléphant).",
                "b) a cow (une vache).",
                "c) an eagle (un aigle).",
                "d) an owl (une chouette, un hibou).",
                "e) a horse (un cheval).",
                "f) an insect (un insecte).",
                "g) a snake (un serpent).",
              ],
            },
            {
              level: 2,
              statement: "Associez chaque animal à son milieu, puis écrivez une phrase au pluriel avec live : camels, polar bears, monkeys, dolphins, cows, giraffes. Milieux : the farm, the savannah, the desert, the Arctic, the jungle, the sea.",
              hint: "Au pluriel, pas de -s à live et pas d'article devant le nom de l'animal.",
              solution: [
                "Camels live in the desert.",
                "Polar bears live in the Arctic.",
                "Monkeys live in the jungle.",
                "Dolphins live in the sea.",
                "Cows live on the farm. (On dit on the farm : sur la ferme.)",
                "Giraffes live in the savannah.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Trouvez l'animal de chaque devinette, puis écrivez en anglais une phrase complète au singulier qui dit où il vit. a) « It's a big white mammal. It lives near the North Pole and it swims very well. » b) « It's a bird but it can't fly. It's the symbol of New Zealand. » c) « It's a big bird with a white head. It's the national bird of the USA. » d) « It's a mammal from Australia. It can jump and it carries its baby in a pouch. »",
              hint: "Relisez les animaux du monde anglophone. Au singulier, avec a ou an, le verbe live prend un -s.",
              solution: [
                "a) C'est l'ours polaire : « A polar bear lives in the Arctic. »",
                "b) C'est le kiwi : « A kiwi lives in New Zealand. »",
                "c) C'est le pygargue à tête blanche : « A bald eagle lives in North America. » (On accepte aussi : in the USA.)",
                "d) C'est le kangourou : « A kangaroo lives in Australia. »",
                "Vérifier : chaque phrase commence par a et le verbe porte le -s de la troisième personne : lives.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque animal à son milieu de vie.",
            pairs: [
              { left: "polar bear", right: "the Arctic" },
              { left: "emperor penguin", right: "Antarctica" },
              { left: "camel", right: "the desert" },
              { left: "dolphin", right: "the ocean" },
              { left: "giraffe", right: "the savannah" },
              { left: "kangaroo", right: "Australia" },
            ],
          },
          quiz: [
            {
              q: "Quel article faut-il devant « owl » ?",
              options: ["a", "the a", "an"],
              answer: 2,
              why: "Owl commence par un son de voyelle : an owl.",
            },
            {
              q: "Que signifie « farm animals » ?",
              options: ["les animaux sauvages", "les animaux de compagnie", "les animaux marins", "les animaux de la ferme"],
              answer: 3,
              why: "Farm signifie ferme : farm animals, ce sont les animaux de la ferme.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["The camels lives in the desert.", "Camels live in the desert.", "Camels lives in the desert."],
              answer: 1,
              why: "Pour une espèce en général, on emploie le pluriel sans article, et live ne prend pas de -s au pluriel.",
            },
            {
              q: "Où vivent les ours polaires ?",
              options: ["in the Arctic", "in the desert", "in Antarctica", "in the jungle"],
              answer: 0,
              why: "Les ours polaires vivent dans l'Arctique, autour du pôle Nord ; il n'y en a pas en Antarctique.",
            },
            {
              q: "Quel animal est un emblème national du Canada ?",
              options: ["the kiwi", "the kangaroo", "the beaver", "the koala"],
              answer: 2,
              why: "Le castor (the beaver) est un emblème national du Canada.",
            },
          ],
          trap: "Mettre the devant un nom d'espèce pris en général (« The lions live in Africa ») ou oublier an devant un son de voyelle (« a elephant »).",
          method: "Classez votre vocabulaire en trois colonnes (pets, farm animals, wild animals) et ajoutez, pour chaque animal sauvage, son milieu. Lisez les mots à voix haute avec leur article pour entendre la différence entre a et an.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'pluriels',
          title: 'Le pluriel des noms, réguliers et irréguliers',
          minutes: 30,
          objectives: [
            "Former le pluriel régulier des noms en -s et en -es.",
            "Appliquer les règles d'orthographe des noms terminés par -y, -f, -fe et -o.",
            "Mémoriser les principaux pluriels irréguliers : children, men, women, people, feet, teeth, mice, sheep, fish.",
            "Prononcer correctement la terminaison du pluriel.",
          ],
          course: [
            {
              heading: "La règle générale : on ajoute -s",
              paragraphs: [
                "En anglais, la plupart des noms forment leur pluriel en ajoutant -s : a cat → two cats, a book → three books, a tree → some trees, a horse → horses. Comme en français, on utilise le pluriel dès qu'il y a plus d'un élément.",
                "Attention : en anglais, l'adjectif ne prend jamais de -s, même devant un nom au pluriel. On dit « two big dogs » et non « two bigs dogs », « green fields » et non « greens fields ». Seul le nom porte la marque du pluriel. Le verbe, lui, s'accorde : « The cat is black. » → « The cats are black. »",
              ],
              box: { label: "Règle", text: "Nom + -s : cat → cats. L'adjectif reste invariable : two black cats." },
            },
            {
              heading: "Les règles d'orthographe",
              paragraphs: [
                "Après -s, -ss, -sh, -ch et -x, on ajoute -es : bus → buses, glass → glasses, brush → brushes, watch → watches, box → boxes, fox → foxes. Cela ajoute une syllabe qu'on entend bien à l'oral.",
                "Pour les noms en -y, tout dépend de la lettre qui précède. Après une consonne, le y devient -ies : baby → babies, city → cities, country → countries, butterfly → butterflies. Après une voyelle, on ajoute simplement -s : day → days, boy → boys, key → keys, monkey → monkeys.",
                "Beaucoup de noms en -f ou -fe changent cette fin en -ves : wolf → wolves, leaf → leaves, half → halves, shelf → shelves, knife → knives, wife → wives, life → lives. Il existe des exceptions, comme roof → roofs. Enfin, certains noms en -o prennent -es (potato → potatoes, tomato → tomatoes, hero → heroes), mais d'autres prennent seulement -s (photo → photos, piano → pianos, zoo → zoos, kangaroo → kangaroos).",
              ],
              box: { label: "À retenir", text: "s, ss, sh, ch, x → -es (boxes). Consonne + y → -ies (babies) ; voyelle + y → -s (days). f / fe → -ves (wolves, knives). potatoes, tomatoes, mais photos, pianos." },
            },
            {
              heading: "Les pluriels irréguliers",
              paragraphs: [
                "Certains noms très courants ont un pluriel irrégulier, qu'il faut apprendre par cœur. Changement de voyelle : a man → men, a woman → women, a foot → feet, a tooth → teeth, a goose → geese, a mouse → mice. Terminaison en -ren : a child → children. Mot différent : a person → people.",
                "D'autres noms ne changent pas du tout au pluriel : a sheep → two sheep, a fish → three fish, a deer → two deer. On ne dit donc jamais « sheeps ». Le mot people est déjà un pluriel : on dit « five people » (et non « five persons » dans la langue courante) et « People are friendly here. »",
                "Attention à la prononciation de women : le o se prononce comme un i, on dit à peu près « wimin ». Et quelques noms n'ont pas de pluriel en -s, car on ne peut pas les compter : homework, information, bread. On dit « a lot of homework ».",
              ],
              box: { label: "À retenir", text: "man → men ; woman → women ; child → children ; person → people ; foot → feet ; tooth → teeth ; mouse → mice ; sheep → sheep ; fish → fish." },
            },
            {
              heading: "Prononcer le pluriel",
              paragraphs: [
                "Le -s du pluriel se prononce de trois façons, selon le son qui le précède. Après les sons [p], [t], [k] et [f], il se prononce [s] : cats, books, cups. Après la plupart des autres sons, il se prononce [z] : dogs, birds, trees, cows.",
                "Après les sons sifflants ou chuintants [s], [z], [ʃ], [tʃ] et [dʒ], on ajoute une syllabe qui se prononce [ɪz] : buses, boxes, horses, watches, oranges. C'est la même règle que pour le -s de la troisième personne du présent simple.",
              ],
            },
          ],
          keyPoints: [
            "En général : nom + -s ; l'adjectif ne prend jamais de -s (two big dogs).",
            "-es après s, ss, sh, ch, x : boxes, watches ; consonne + y → -ies (babies), voyelle + y → -s (days).",
            "f / fe → -ves : wolf → wolves, knife → knives.",
            "Irréguliers : men, women, children, people, feet, teeth, mice ; invariables : sheep, fish, deer.",
            "Prononciation du -s : [s] (cats), [z] (dogs), [ɪz] (boxes).",
          ],
          example: {
            statement: "Mettez au pluriel : « The child has a mouse, a fox and a pony. »",
            solution: [
              "The child → the children (pluriel irrégulier), donc le verbe has devient have.",
              "A mouse → mice (pluriel irrégulier), sans article : some mice ou two mice.",
              "A fox → foxes (-es après x).",
              "A pony → ponies (consonne n + y → -ies).",
              "Réponse : « The children have mice, foxes and ponies. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le pluriel de ces noms : a) a dog ; b) a box ; c) a baby ; d) a day ; e) a wolf ; f) a watch ; g) a photo ; h) a tomato.",
              hint: "Regardez la dernière lettre de chaque nom et appliquez la règle d'orthographe qui correspond.",
              solution: [
                "a) dogs (règle générale).",
                "b) boxes (-es après x).",
                "c) babies (consonne + y → -ies).",
                "d) days (voyelle + y → -s).",
                "e) wolves (f → -ves).",
                "f) watches (-es après ch).",
                "g) photos (-s seulement).",
                "h) tomatoes (-es).",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces phrases au pluriel en remplaçant a ou an par le nombre indiqué : a) There is a man in the garden (2). b) I can see a sheep in the field (5). c) The woman is a teacher (the women...). d) There is a child in the park (3). e) A mouse lives in the barn (4). f) My tooth is white (my teeth...).",
              hint: "Pensez à accorder le verbe : there is devient there are, is devient are. Et n'oubliez pas les irréguliers et les invariables.",
              solution: [
                "a) There are two men in the garden.",
                "b) I can see five sheep in the field (sheep est invariable).",
                "c) The women are teachers (le nom attribut passe aussi au pluriel).",
                "d) There are three children in the park.",
                "e) Four mice live in the barn (le verbe perd son -s au pluriel).",
                "f) My teeth are white.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce texte d'élève contient six erreurs de pluriel. Retrouvez-les et corrigez-les. « On my uncle's farm, there are three sheeps, two horses and ten chickens. There are also a lot of mouses in the barn. Five persons work there. The childs love the bigs cows. In the kitchen, there are some knifes on the shelf. »",
              hint: "Cherchez les pluriels irréguliers, les noms invariables, les noms en -f et un adjectif qui ne devrait pas changer.",
              solution: [
                "1) sheeps → sheep (invariable).",
                "2) mouses → mice (irrégulier).",
                "3) persons → people (pluriel courant de person).",
                "4) childs → children (irrégulier).",
                "5) bigs → big (l'adjectif ne prend jamais de -s).",
                "6) knifes → knives (fe → -ves).",
                "Texte corrigé : « On my uncle's farm, there are three sheep, two horses and ten chickens. There are also a lot of mice in the barn. Five people work there. The children love the big cows. In the kitchen, there are some knives on the shelf. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le pluriel.",
            statements: [
              { text: "Le pluriel de « child » est « children ».", true: true, why: "C'est un pluriel irrégulier : a child, two children." },
              { text: "Le pluriel de « sheep » est « sheeps ».", true: false, why: "Sheep est invariable : one sheep, two sheep." },
              { text: "Le pluriel de « baby » est « babies ».", true: true, why: "Consonne + y → -ies." },
              { text: "Le pluriel de « monkey » est « monkies ».", true: false, why: "Le y suit une voyelle (e) : on ajoute seulement -s, monkeys." },
              { text: "Dans « two bigs dogs », l'adjectif est bien accordé.", true: false, why: "L'adjectif ne prend jamais de -s en anglais : two big dogs." },
              { text: "Le pluriel de « knife » est « knives ».", true: true, why: "Fe → -ves : knife, knives." },
              { text: "Le pluriel de « foot » est « foots ».", true: false, why: "C'est un pluriel irrégulier : a foot, two feet." },
            ],
          },
          quiz: [
            {
              q: "Quel est le pluriel de « woman » ?",
              options: ["womans", "womens", "womanes", "women"],
              answer: 3,
              why: "Woman a un pluriel irrégulier : women, prononcé à peu près « wimin ».",
            },
            {
              q: "Quel est le pluriel de « city » ?",
              options: ["citys", "cities", "cityes"],
              answer: 1,
              why: "Le y suit une consonne (t) : il devient -ies.",
            },
            {
              q: "Quel est le pluriel de « tooth » ?",
              options: ["teeth", "tooths", "teeths", "toothes"],
              answer: 0,
              why: "Tooth a un pluriel irrégulier par changement de voyelle : teeth.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["I have two blacks cats.", "I have two black cat.", "I have two black cats.", "I have twos black cats."],
              answer: 2,
              why: "Le nom prend le -s du pluriel, mais l'adjectif reste invariable.",
            },
            {
              q: "Dans quel mot le -s du pluriel se prononce-t-il [ɪz] ?",
              options: ["cats", "boxes", "dogs", "books"],
              answer: 1,
              why: "Après le son [ks] de x, on ajoute une syllabe [ɪz] : boxes.",
            },
          ],
          trap: "Ajouter -s aux pluriels irréguliers ou invariables (« childs », « sheeps », « mouses ») et accorder l'adjectif comme en français (« bigs dogs »).",
          method: "Faites une carte mentale des pluriels irréguliers et récitez-les par paires (man → men, foot → feet...). Quand vous relisez un texte, vérifiez trois choses : le nom porte-t-il la bonne marque, l'adjectif est-il resté invariable, le verbe est-il accordé ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'presenter-animal',
          title: 'Présenter un animal : « It lives in... », « It eats... »',
          minutes: 35,
          objectives: [
            "Présenter un animal à l'oral ou à l'écrit : sa famille, son milieu, son alimentation, son apparence et ses capacités.",
            "Employer le présent simple à la troisième personne du singulier (« It lives », « It eats ») et « it has got ».",
            "Distinguer « it's » (it is) et « its » (son, sa, ses).",
          ],
          course: [
            {
              heading: "Une fiche d'identité pour présenter un animal",
              paragraphs: [
                "Pour présenter un animal, on répond à cinq questions, comme sur une fiche d'identité. What is it? (Qu'est-ce que c'est ? Un mammifère, un oiseau...) Where does it live? (Où vit-il ?) What does it eat? (Que mange-t-il ?) What does it look like? (À quoi ressemble-t-il ?) What can it do? (Que sait-il faire ?)",
                "En anglais, on parle d'un animal avec le pronom it, sauf pour son propre animal de compagnie, que l'on appelle souvent he ou she. Comme it est une troisième personne du singulier, tous les verbes au présent simple prennent un -s : it lives, it eats, it sleeps, it swims. Pour la négation et la question, on emploie does : « It doesn't eat meat. » « Where does it live? »",
              ],
              box: { label: "Repère", text: "What is it? Where does it live? What does it eat? What does it look like? What can it do?" },
            },
            {
              heading: "Les phrases clés",
              paragraphs: [
                "La famille : « It's a mammal. » « It's a bird. » « It's a reptile. » Le milieu : « It lives in the Arctic. » « It lives in Australia. » La nourriture : « It eats fish. » « It eats leaves. » Un animal qui mange de la viande est a carnivore, un animal qui mange des plantes est a herbivore, et un animal qui mange les deux est an omnivore.",
                "L'apparence se décrit avec it has got (ou sa forme contractée it's got) : « It has got four legs and a long tail. » Voici des mots utiles : legs (pattes), wings (ailes), a tail (une queue), fur (la fourrure), feathers (les plumes), a beak (un bec), a trunk (une trompe), big ears (de grandes oreilles), a pouch (une poche ventrale). On peut aussi donner la taille et la couleur : « It's big and grey. »",
                "Les capacités se disent avec can : « It can swim very well. » « It can climb trees. » « It can run fast. » Et ce qu'il ne sait pas faire avec can't : « A penguin can't fly. »",
              ],
              box: { label: "Règle", text: "It + verbe + -s : it lives, it eats. It has got (it's got) + parties du corps. It can / can't + verbe de base. Négation : it doesn't eat meat." },
            },
            {
              heading: "It's ou its ?",
              paragraphs: [
                "Ces deux mots se prononcent de la même façon, mais ils ne veulent pas dire la même chose. It's est une contraction : it is (« It's a mammal. ») ou it has (« It's got a long neck. »). Its, sans apostrophe, est un adjectif possessif : son, sa, ses, pour un animal ou une chose. « The elephant uses its trunk to drink. » (L'éléphant utilise sa trompe pour boire.)",
                "Pour choisir, faites un test simple : remplacez le mot par it is ou it has. Si la phrase garde son sens, écrivez it's. Sinon, écrivez its. Exemple : « The kangaroo carries ___ baby in ___ pouch. » « It is baby » n'a pas de sens : on écrit its baby et its pouch.",
              ],
              box: { label: "Attention", text: "it's = it is ou it has (It's a bird. It's got wings.). its = son, sa, ses (Its wings are black.). Test : remplacez par it is." },
            },
            {
              heading: "Un exemple de présentation : le koala",
              paragraphs: [
                "Voici une présentation complète : « This is a koala. It's a mammal from Australia. It lives in eucalyptus forests, in the east of Australia. It eats eucalyptus leaves. It has got grey fur, big round ears and a big black nose. It can climb trees very well. It sleeps most of the day. Its baby lives in its mother's pouch. »",
                "Remarquez l'ordre : la famille, le milieu, la nourriture, l'apparence, les capacités, puis un détail étonnant (a fun fact). Par exemple, on appelle parfois le koala « koala bear », mais ce n'est pas un ours : c'est un marsupial, un mammifère dont le petit grandit dans une poche, comme le kangourou.",
              ],
            },
          ],
          keyPoints: [
            "Cinq questions : What is it? Where does it live? What does it eat? What does it look like? What can it do?",
            "It + verbe + -s : it lives, it eats ; négation : it doesn't eat.",
            "It has got (it's got) four legs, a long tail, grey fur.",
            "It can climb ; it can't fly.",
            "it's = it is / it has ; its = son, sa, ses (its tail).",
          ],
          example: {
            statement: "Voici la fiche de l'ours polaire : mammifère ; vit dans l'Arctique ; mange des phoques (seals) ; a une épaisse fourrure blanche et un nez noir ; sait très bien nager. Rédigez sa présentation en anglais en cinq phrases.",
            solution: [
              "La famille : « The polar bear is a mammal. »",
              "Le milieu, avec le -s de la troisième personne : « It lives in the Arctic. »",
              "La nourriture : « It eats seals. »",
              "L'apparence avec has got : « It has got thick white fur and a black nose. »",
              "La capacité avec can : « It can swim very well. »",
              "Réponse : « The polar bear is a mammal. It lives in the Arctic. It eats seals. It has got thick white fur and a black nose. It can swim very well. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe entre parenthèses au présent simple : a) A giraffe (live) in the savannah. b) It (eat) leaves. c) An owl (fly) at night. d) A koala (sleep) most of the day. e) A penguin (not fly). f) An elephant (have got) a long trunk.",
              hint: "Le sujet est toujours un animal au singulier : le verbe prend un -s. Attention à fly, à la négation et à have got.",
              solution: [
                "a) A giraffe lives in the savannah.",
                "b) It eats leaves.",
                "c) An owl flies at night (consonne + y → -ies).",
                "d) A koala sleeps most of the day.",
                "e) A penguin doesn't fly (doesn't + verbe de base).",
                "f) An elephant has got a long trunk (have got → has got).",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec it's ou its : a) This is a fox. ___ a wild animal. b) ___ tail is long and red. c) ___ got pointed ears. d) The bird is in ___ nest. e) ___ very cold in the Arctic. f) My dog loves ___ ball.",
              hint: "Remplacez le blanc par it is ou it has : si la phrase a du sens, écrivez it's ; sinon, its.",
              solution: [
                "a) It's a wild animal (it is).",
                "b) Its tail is long and red (sa queue).",
                "c) It's got pointed ears (it has got).",
                "d) The bird is in its nest (son nid).",
                "e) It's very cold in the Arctic (it is).",
                "f) My dog loves its ball (sa balle).",
              ],
            },
            {
              level: 3,
              statement: "Défi. À partir de cette fiche, présentez le kangourou en anglais en sept phrases au moins : mammifère (un marsupial) ; vit en Australie ; herbivore, mange de l'herbe et des feuilles ; a de grandes pattes arrière très fortes et une longue queue ; se déplace en sautant, très vite ; la femelle porte son petit (a joey) dans sa poche. Utilisez au moins une négation, une fois its et une fois it's.",
              hint: "Suivez l'ordre du cours : famille, milieu, nourriture, apparence, capacités, fait étonnant. Pour la négation, pensez à ce qu'un herbivore ne mange pas.",
              solution: [
                "La famille : « This is a kangaroo. It's a mammal: it's a marsupial. »",
                "Le milieu : « It lives in Australia. »",
                "La nourriture et la négation : « It's a herbivore: it eats grass and leaves. It doesn't eat meat. »",
                "L'apparence : « It has got very strong back legs and a long tail. »",
                "La capacité : « It can jump very fast. »",
                "Le fait étonnant, avec its : « The female carries its baby, called a joey, in its pouch. »",
                "Vérifier : verbes à la troisième personne avec -s (lives, eats, carries), doesn't + verbe de base, it's = it is, its = son, sa, ses.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque question sur l'ours polaire à la bonne réponse.",
            pairs: [
              { left: "What is it?", right: "It's a mammal." },
              { left: "Where does it live?", right: "It lives in the Arctic." },
              { left: "What does it eat?", right: "It eats seals." },
              { left: "What does it look like?", right: "It has got thick white fur." },
              { left: "What can it do?", right: "It can swim very well." },
            ],
          },
          quiz: [
            {
              q: "Complétez : « A camel ___ in the desert. »",
              options: ["live", "living", "lives", "is live"],
              answer: 2,
              why: "Le sujet est a camel, une troisième personne du singulier : le verbe prend un -s.",
            },
            {
              q: "Complétez : « The elephant uses ___ trunk to drink. »",
              options: ["its", "it's", "it is"],
              answer: 0,
              why: "On veut dire « sa trompe » : c'est l'adjectif possessif its, sans apostrophe.",
            },
            {
              q: "Comment appelle-t-on un animal qui ne mange que des plantes ?",
              options: ["a carnivore", "an omnivore", "a mammal", "a herbivore"],
              answer: 3,
              why: "Un herbivore mange des plantes ; un carnivore mange de la viande ; un omnivore mange les deux.",
            },
            {
              q: "Quelle phrase est correcte ?",
              options: ["A penguin don't fly.", "A penguin can't fly.", "A penguin can't flies.", "A penguin doesn't flies."],
              answer: 1,
              why: "Can't est suivi du verbe de base, sans -s.",
            },
            {
              q: "Quelle question demande à quoi ressemble un animal ?",
              options: ["What does it eat?", "What can it do?", "What does it look like?", "What does it like eating?"],
              answer: 2,
              why: "What does it look like? signifie « À quoi ressemble-t-il ? ».",
            },
          ],
          trap: "Oublier le -s de la troisième personne avec it (« It live in Australia ») ou confondre it's (it is) et its (son, sa, ses).",
          method: "Préparez votre présentation avec les cinq questions de la fiche d'identité : une phrase par question. Relisez ensuite en vérifiant chaque verbe après it (un -s ?) et chaque its ou it's (le test du it is).",
        },
      ],
    },
  ],
}
