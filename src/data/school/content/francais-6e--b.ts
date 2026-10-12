import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'francais-6e',
  chapters: [
    /* ================================================================== */
    /* LE VERBE ET SA CONJUGAISON                                           */
    /* ================================================================== */
    {
      id: 'verbe-conjugaison',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'verbe-infinitif-groupe',
          title: 'Le verbe : infinitif, radical, terminaison et groupe',
          minutes: 25,
          objectives: [
            "Identifier le verbe conjugué dans une phrase.",
            "Retrouver l'infinitif d'un verbe conjugué.",
            "Distinguer le radical et la terminaison d'un verbe.",
            "Classer un verbe dans son groupe.",
          ],
          course: [
            {
              heading: "Reconnaître un verbe",
              paragraphs: [
                "Le verbe est le mot qui exprime une action (courir, manger, écrire) ou un état (être, sembler, devenir, rester). Dans la phrase « Léa range sa chambre », le verbe est « range » : il dit ce que fait Léa. Dans « Le ciel paraît gris », le verbe « paraît » ne décrit pas une action mais un état.",
                "Le verbe est le seul mot de la phrase qui change de forme selon le moment où se passe l'action. Pour le trouver, changez le temps de la phrase avec « hier » ou « demain » : « Aujourd'hui, Léa range sa chambre » devient « Hier, Léa rangeait sa chambre » et « Demain, Léa rangera sa chambre ». Le mot qui a changé est le verbe.",
                "Le verbe change aussi selon la personne qui fait l'action : je range, nous rangeons, ils rangent. Enfin, à un temps simple, on peut l'encadrer par « ne... pas » : « Léa ne range pas sa chambre ».",
              ],
              box: { label: "Repère", text: "Trois tests pour trouver le verbe conjugué : 1) changer le temps (hier, demain) ; 2) changer la personne (je, nous, ils) ; 3) l'encadrer par « ne... pas ». Le mot qui change ou qui se laisse encadrer est le verbe." },
            },
            {
              heading: "L'infinitif : le nom du verbe",
              paragraphs: [
                "Quand un verbe n'est pas conjugué, il est à l'infinitif. C'est sous cette forme qu'on le trouve dans le dictionnaire : pour comprendre « rangeait », on cherche « ranger ». L'infinitif est en quelque sorte le nom du verbe.",
                "Pour retrouver l'infinitif d'un verbe conjugué, placez « il faut » devant lui et cherchez la forme qui convient : « elle prend » donne « il faut prendre » ; « nous finissons » donne « il faut finir » ; « vous voyez » donne « il faut voir ».",
                "Les infinitifs se terminent par -er (chanter), -ir (finir, partir), -re (prendre, croire) ou -oir (voir, pouvoir). Un verbe peut aussi rester à l'infinitif dans une phrase, après un autre verbe ou après une préposition : « Je veux partir », « Il apprend à nager ».",
              ],
              box: { label: "Définition", text: "L'infinitif est la forme non conjuguée du verbe, celle que l'on trouve dans le dictionnaire. Il se termine par -er, -ir, -re ou -oir." },
            },
            {
              heading: "Le radical et la terminaison",
              paragraphs: [
                "Un verbe conjugué se compose de deux parties. Le radical porte le sens du verbe : dans « nous chantons », le radical est « chant- ». La terminaison change selon la personne et le temps : ici, « -ons ».",
                "Pour les verbes en -er comme chanter, on trouve le radical en retirant la terminaison de l'infinitif : chanter donne chant-. Ce radical reste en général le même à tous les temps : je chante, je chantais, je chanterai. Pour d'autres verbes, le radical change : venir donne je viens, nous venons, ils viennent, je viendrai. Il faut alors apprendre ces formes.",
                "Ce découpage est très utile en orthographe. Le radical se prononce et s'écrit souvent de la même façon ; c'est la terminaison qui pose problème. Pour la choisir, demandez-vous toujours qui fait l'action (la personne) et quand elle a lieu (le temps).",
              ],
              box: { label: "Définition", text: "Le radical est la partie du verbe qui porte le sens (chant-). La terminaison est la partie qui varie selon la personne et le temps (-ons, -ait, -erai)." },
            },
            {
              heading: "Les trois groupes de verbes",
              paragraphs: [
                "On classe les verbes en trois groupes, selon leur infinitif et leur conjugaison. Le 1er groupe réunit les verbes dont l'infinitif se termine par -er : chanter, jouer, manger, appeler. C'est le groupe le plus nombreux, et presque tous les verbes nouveaux y entrent, comme « cliquer » ou « télécharger ». Seul « aller » n'en fait pas partie, car sa conjugaison est très irrégulière : je vais, nous irons.",
                "Le 2e groupe réunit les verbes en -ir qui font -issons avec « nous » au présent et -issant au participe présent : finir (nous finissons, en finissant), choisir, grandir, obéir, rougir. Ce test du « nous » permet de les reconnaître sans hésiter.",
                "Le 3e groupe réunit tous les autres verbes : les verbes en -ir qui ne font pas -issons (partir : nous partons ; venir : nous venons ; courir : nous courons), les verbes en -oir (voir, pouvoir, vouloir), les verbes en -re (prendre, faire, dire) et le verbe aller. Les verbes être et avoir, appelés auxiliaires, sont souvent étudiés à part, car leur conjugaison est très irrégulière.",
              ],
              box: { label: "Règle", text: "1er groupe : infinitif en -er (sauf aller). 2e groupe : infinitif en -ir et « nous ...issons » au présent (finir, nous finissons). 3e groupe : tous les autres verbes (partir, voir, prendre, aller...)." },
            },
          ],
          keyPoints: [
            "Le verbe exprime une action ou un état ; il change de forme selon le temps et la personne.",
            "Pour le trouver : changer le temps (hier, demain), changer la personne, ou l'encadrer par « ne... pas ».",
            "L'infinitif est la forme non conjuguée, celle du dictionnaire : il faut chanter, il faut prendre.",
            "Un verbe conjugué = radical (le sens) + terminaison (la personne et le temps).",
            "1er groupe : -er (sauf aller). 2e groupe : -ir avec « nous finissons ». 3e groupe : tous les autres.",
          ],
          example: {
            statement: "Dans la phrase « Chaque matin, mon frère choisit un livre et part à l'école », relevez les verbes conjugués, donnez leur infinitif et leur groupe.",
            solution: [
              "Trouver les verbes : en mettant la phrase au passé (« Chaque matin, mon frère choisissait un livre et partait à l'école »), deux mots changent : « choisit » et « part ». Ce sont les verbes conjugués.",
              "Trouver les infinitifs avec « il faut » : « il faut choisir », « il faut partir ». Les infinitifs sont choisir et partir.",
              "Choisir se termine par -ir. Test du « nous » : nous choisissons. On entend -issons : choisir est du 2e groupe.",
              "Partir se termine aussi par -ir. Test du « nous » : nous partons, sans -issons : partir est du 3e groupe.",
              "Réponse : « choisit » (infinitif choisir, 2e groupe) et « part » (infinitif partir, 3e groupe).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'infinitif de chacun de ces verbes conjugués : a) nous mangeons ; b) elle grandit ; c) vous prenez ; d) ils voient ; e) je vais ; f) tu dors.",
              hint: "Placez « il faut » devant le verbe et cherchez la forme qui convient : « il faut... ».",
              solution: [
                "a) nous mangeons : il faut manger. Infinitif : manger.",
                "b) elle grandit : il faut grandir. Infinitif : grandir.",
                "c) vous prenez : il faut prendre. Infinitif : prendre.",
                "d) ils voient : il faut voir. Infinitif : voir.",
                "e) je vais : il faut aller. Infinitif : aller. Le radical ne ressemble pas du tout à l'infinitif : c'est pour cela qu'aller est un verbe irrégulier.",
                "f) tu dors : il faut dormir. Infinitif : dormir.",
              ],
            },
            {
              level: 2,
              statement: "Classez ces verbes dans leur groupe : jouer, réussir, venir, aller, bondir, croire, sortir, voyager, recevoir, rougir.",
              hint: "Pour les verbes en -ir, conjuguez-les avec « nous » au présent : si vous entendez « -issons », c'est le 2e groupe. N'oubliez pas le cas particulier d'aller.",
              solution: [
                "1er groupe (infinitif en -er) : jouer, voyager. Aller se termine par -er, mais il n'appartient pas au 1er groupe.",
                "2e groupe (-ir et « nous ...issons ») : réussir (nous réussissons), bondir (nous bondissons), rougir (nous rougissons).",
                "3e groupe : venir (nous venons, sans -issons), sortir (nous sortons, sans -issons), croire (en -re), recevoir (en -oir) et aller.",
                "Résultat : 1er groupe : jouer, voyager ; 2e groupe : réussir, bondir, rougir ; 3e groupe : venir, aller, croire, sortir, recevoir.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce petit texte, écrit pour l'exercice : « Le soir tombe sur le village. Les enfants rentrent en courant, car l'orage approche. Grand-mère ferme les volets et allume une bougie. Tout le monde attend en silence. » a) Relevez les six verbes conjugués. b) Pour chacun, donnez l'infinitif, le radical et le groupe. c) Un mot du texte est une forme d'un verbe, mais il n'est pas conjugué : lequel ?",
              hint: "Utilisez le test de « hier » pour trouver les verbes conjugués. Pour la question c, cherchez un mot qui ressemble à un verbe mais qui ne change pas quand on change la personne.",
              solution: [
                "a) Au passé, le texte devient : « Le soir tombait... Les enfants rentraient... l'orage approchait. Grand-mère fermait... et allumait... Tout le monde attendait. » Les six verbes conjugués sont : tombe, rentrent, approche, ferme, allume, attend.",
                "b) tombe : tomber, radical tomb-, 1er groupe. rentrent : rentrer, radical rentr-, 1er groupe. approche : approcher, radical approch-, 1er groupe.",
                "b) suite : ferme : fermer, radical ferm-, 1er groupe. allume : allumer, radical allum-, 1er groupe. attend : attendre, radical attend-, 3e groupe (infinitif en -re).",
                "c) Le mot « courant », dans « en courant », est une forme du verbe courir (le participe présent). Il ne change pas avec la personne : « Nous rentrons en courant », « Ils rentrent en courant ». Il n'est donc pas conjugué.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Infinitif", right: "La forme non conjuguée du verbe, celle du dictionnaire" },
              { left: "Radical", right: "La partie du verbe qui porte le sens" },
              { left: "Terminaison", right: "La partie du verbe qui change selon la personne et le temps" },
              { left: "1er groupe", right: "Les verbes en -er, sauf aller" },
              { left: "2e groupe", right: "Les verbes en -ir qui font « nous ...issons »" },
              { left: "3e groupe", right: "Tous les autres verbes, dont aller" },
            ],
          },
          quiz: [
            { q: "Quel est l'infinitif de « nous buvons » ?", options: ["Buver", "Boire", "Buvoir", "Bouvoir"], answer: 1, why: "On dit « il faut boire ». Le radical change beaucoup selon la personne (je bois, nous buvons) : boire est un verbe du 3e groupe." },
            { q: "À quel groupe appartient le verbe « aller » ?", options: ["Au 1er groupe", "Au 2e groupe", "Au 3e groupe"], answer: 2, why: "Malgré son infinitif en -er, aller est du 3e groupe, car sa conjugaison est irrégulière (je vais, nous irons)." },
            { q: "Dans « nous dansions », quelle est la terminaison ?", options: ["-ions", "dans-", "-sions", "nous"], answer: 0, why: "Le radical est « dans- », comme dans l'infinitif danser ; la terminaison qui varie est « -ions »." },
            { q: "Quel verbe est du 2e groupe ?", options: ["Sortir", "Courir", "Obéir", "Venir"], answer: 2, why: "On dit « nous obéissons » : le verbe fait -issons avec « nous ». Sortir, courir et venir font nous sortons, nous courons, nous venons." },
            { q: "Quel test permet de reconnaître le verbe conjugué ?", options: ["Changer le temps avec « hier »", "Lui ajouter un déterminant devant", "Chercher le mot le plus long de la phrase", "Le remplacer par un nom propre"], answer: 0, why: "Le verbe est le seul mot qui change quand on change le temps de la phrase." },
          ],
          trap: "Croire qu'un verbe en -ir est forcément du 2e groupe : partir, venir, courir ou dormir sont du 3e groupe. Seul le test « nous ...issons » permet de trancher.",
          method: "Pour trouver le groupe d'un verbe, procédez toujours dans le même ordre : retrouvez l'infinitif avec « il faut », regardez sa terminaison, puis, pour un verbe en -ir, faites le test « nous ...issons ». Apprenez l'exception par cœur : aller est du 3e groupe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'present-futur',
          title: 'Le présent et le futur de l\'indicatif',
          minutes: 30,
          objectives: [
            "Conjuguer les verbes des trois groupes au présent et au futur de l'indicatif.",
            "Mémoriser les formes des verbes irréguliers les plus fréquents (être, avoir, aller, faire, dire).",
            "Identifier les emplois du présent et du futur dans une phrase.",
          ],
          course: [
            {
              heading: "Le présent : à quoi sert-il ?",
              paragraphs: [
                "Le présent de l'indicatif exprime d'abord ce qui se passe au moment où l'on parle : « Je lis en ce moment. » Mais il a d'autres emplois. Il exprime une habitude : « Le mercredi, je fais du judo. » Il exprime aussi une vérité générale, toujours vraie : « L'eau bout à 100 °C. »",
                "Dans un récit au passé, l'auteur emploie parfois le présent pour rendre une scène plus vivante, comme si elle se déroulait sous les yeux du lecteur : « Il marchait dans la nuit. Soudain, une ombre surgit devant lui. » On l'appelle le présent de narration.",
              ],
              box: { label: "À retenir", text: "Le présent exprime : ce qui se passe maintenant (je lis), une habitude (le mercredi, je fais du judo), une vérité générale (l'eau bout à 100 °C), ou une action rendue vivante dans un récit (présent de narration)." },
            },
            {
              heading: "Les terminaisons du présent",
              paragraphs: [
                "Au 1er groupe, les terminaisons sont : -e, -es, -e, -ons, -ez, -ent. Je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent. Attention aux verbes en -cer et en -ger : pour garder le même son devant -ons, on écrit nous lançons (avec une cédille) et nous mangeons (avec un e).",
                "Au 2e groupe, les terminaisons sont : -is, -is, -it, -issons, -issez, -issent. Je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent.",
                "Au 3e groupe, les terminaisons les plus fréquentes sont -s, -s, -t, -ons, -ez, -ent : je pars, tu pars, il part, nous partons, vous partez, ils partent. Quelques familles ont des terminaisons propres : -x, -x, -t pour pouvoir, vouloir et valoir (je peux, tu veux, il vaut) ; -ds, -ds, -d pour la plupart des verbes en -dre (je prends, il prend ; je réponds, il répond) ; -e, -es, -e pour ouvrir, offrir et cueillir (j'ouvre, tu ouvres, il ouvre).",
              ],
              box: { label: "Règle", text: "Présent. 1er groupe : -e, -es, -e, -ons, -ez, -ent. 2e groupe : -is, -is, -it, -issons, -issez, -issent. 3e groupe, le plus souvent : -s, -s, -t, -ons, -ez, -ent (parfois -x, -x, -t ou -ds, -ds, -d)." },
            },
            {
              heading: "Les verbes irréguliers à connaître par cœur",
              paragraphs: [
                "Certains verbes très fréquents ont un présent irrégulier. Être : je suis, tu es, il est, nous sommes, vous êtes, ils sont. Avoir : j'ai, tu as, il a, nous avons, vous avez, ils ont. Aller : je vais, tu vas, il va, nous allons, vous allez, ils vont.",
                "Faire : je fais, tu fais, il fait, nous faisons, vous faites, ils font. Dire : je dis, tu dis, il dit, nous disons, vous dites, ils disent. Remarquez « vous faites » et « vous dites » : avec « vous êtes », ce sont les rares formes en -tes du présent. On n'écrit donc jamais « vous faisez » ni « vous disez ».",
                "D'autres verbes changent de radical selon la personne : venir (je viens, nous venons, ils viennent), prendre (je prends, nous prenons, ils prennent), pouvoir (je peux, nous pouvons, ils peuvent), vouloir (je veux, nous voulons, ils veulent).",
              ],
            },
            {
              heading: "Le futur simple",
              paragraphs: [
                "Le futur simple exprime une action qui aura lieu plus tard : « Demain, nous visiterons le musée. » Il sert aussi à faire des prévisions, des promesses ou des projets : « Il pleuvra ce soir », « Je vous aiderai ».",
                "Ses terminaisons sont les mêmes pour tous les verbes : -ai, -as, -a, -ons, -ez, -ont. Pour les verbes en -er et en -ir, on les ajoute en général à l'infinitif : je chanterai, tu finiras, il partira. Pour les verbes en -re, on retire le e final : prendre donne je prendrai, dire donne je dirai. On entend toujours le son [r] juste avant la terminaison.",
                "Certains verbes ont un radical irrégulier au futur, qu'il faut apprendre : être (je serai), avoir (j'aurai), aller (j'irai), faire (je ferai), venir (je viendrai), voir (je verrai), pouvoir (je pourrai), vouloir (je voudrai), savoir (je saurai), devoir (je devrai), courir (je courrai), envoyer (j'enverrai). Attention aussi aux verbes en -ier, -uer et -ouer : on garde le e de l'infinitif, même s'il ne s'entend pas (je crierai, il continuera, nous jouerons).",
              ],
              box: { label: "Formule", text: "Futur simple = radical du futur (souvent l'infinitif) + -ai, -as, -a, -ons, -ez, -ont. Je jouerai, tu finiras, il prendra, nous serons, vous aurez, ils iront." },
            },
          ],
          keyPoints: [
            "Présent : ce qui se passe maintenant, une habitude, une vérité générale, ou une scène rendue vivante dans un récit.",
            "Présent du 1er groupe : -e, -es, -e, -ons, -ez, -ent ; du 2e groupe : -is, -is, -it, -issons, -issez, -issent.",
            "3e groupe : le plus souvent -s, -s, -t ; mais je peux, je veux (-x) et je prends, il prend (-ds, -d).",
            "Par cœur : je suis, j'ai, je vais, je fais ; vous êtes, vous faites, vous dites.",
            "Futur : -ai, -as, -a, -ons, -ez, -ont, toujours précédées du son [r] : je chanterai, je prendrai.",
            "Radicaux irréguliers du futur : je serai, j'aurai, j'irai, je ferai, je viendrai, je verrai, je pourrai.",
          ],
          example: {
            statement: "Conjuguez les verbes entre parenthèses au présent, puis réécrivez la phrase au futur : « Nous (partir) en vacances et Léo (prendre) le train. »",
            solution: [
              "Identifier les verbes : partir et prendre sont deux verbes du 3e groupe.",
              "Présent de partir avec « nous » : nous partons (terminaison -ons).",
              "Présent de prendre à la 3e personne du singulier : Léo prend (terminaison -d, comme la plupart des verbes en -dre).",
              "Phrase au présent : « Nous partons en vacances et Léo prend le train. »",
              "Futur : partir garde son infinitif (nous partirons) ; prendre perd son e final (il prendra).",
              "Phrase au futur : « Nous partirons en vacances et Léo prendra le train. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au présent de l'indicatif : a) jouer (nous) ; b) réfléchir (ils) ; c) commencer (nous) ; d) avoir (vous) ; e) faire (vous) ; f) pouvoir (je).",
              hint: "Repérez d'abord le groupe du verbe. Pour « commencer », pensez à la cédille devant o ; pour « faire », souvenez-vous de la forme irrégulière en -tes.",
              solution: [
                "a) jouer, 1er groupe : nous jouons.",
                "b) réfléchir, 2e groupe : ils réfléchissent.",
                "c) commencer, verbe en -cer : nous commençons (la cédille garde le son [s] devant o).",
                "d) avoir, irrégulier : vous avez.",
                "e) faire, irrégulier : vous faites.",
                "f) pouvoir, terminaison en -x : je peux.",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez ce texte au futur simple : « Demain, je me lève tôt. Nous allons à la plage, nous faisons un château de sable et mes cousins viennent nous voir. Le soir, tout le monde est fatigué. »",
              hint: "Repérez les cinq verbes conjugués. Quatre d'entre eux ont un radical irrégulier au futur : vérifiez-les dans la liste du cours.",
              solution: [
                "Les cinq verbes conjugués sont : me lève (se lever), allons (aller), faisons (faire), viennent (venir), est (être).",
                "Se lever est un verbe en -er : on part de l'infinitif. Attention à l'accent grave, comme au présent : je me lèverai.",
                "Aller donne nous irons ; faire donne nous ferons ; venir donne ils viendront ; être donne il sera.",
                "Texte au futur : « Demain, je me lèverai tôt. Nous irons à la plage, nous ferons un château de sable et mes cousins viendront nous voir. Le soir, tout le monde sera fatigué. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Chaque phrase contient une erreur de conjugaison. Trouvez-la, corrigez-la et expliquez la règle. a) Vous disez toujours la vérité. b) Demain, je jourai au football. c) Il prent son vélo. d) Nous mangons des crêpes. e) Ils voirront la mer cet été. f) Je veux bien venir, mais tu peut venir aussi.",
              hint: "Pour chaque phrase, demandez-vous d'abord à quel temps est le verbe, puis comparez la forme écrite avec les règles et les verbes irréguliers du cours.",
              solution: [
                "a) « Vous dites » : au présent, dire a une forme irrégulière en -tes à la 2e personne du pluriel, comme faire (vous faites) et être (vous êtes).",
                "b) « je jouerai » : au futur, les verbes en -ouer, -uer et -ier gardent le e de l'infinitif, même s'il ne s'entend pas.",
                "c) « Il prend » : la plupart des verbes en -dre gardent le d à la 3e personne du singulier du présent.",
                "d) « Nous mangeons » : les verbes en -ger prennent un e devant -ons pour garder le son « je ».",
                "e) « Ils verront » : voir a un radical irrégulier au futur, verr-.",
                "f) « tu peux » : pouvoir prend un x aux deux premières personnes du singulier du présent (je peux, tu peux, il peut).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le présent et le futur.",
            statements: [
              { text: "Au présent, on écrit « vous faites ».", true: true, why: "Faire a une forme irrégulière en -tes : vous faites, comme vous dites et vous êtes." },
              { text: "« Nous mangons » est correct.", true: false, why: "Les verbes en -ger prennent un e devant -ons : nous mangeons." },
              { text: "Au futur, toutes les terminaisons sont précédées du son [r].", true: true, why: "Je chanterai, je finirai, je prendrai, je serai : le son [r] est toujours là." },
              { text: "Dans « L'eau gèle à 0 °C », le présent exprime une habitude.", true: false, why: "C'est une vérité générale, toujours vraie, et non une habitude." },
              { text: "Le futur de « voir » est « je voirai ».", true: false, why: "Voir a un radical irrégulier au futur : je verrai." },
              { text: "Au présent, « il prend » s'écrit avec un d final.", true: true, why: "La plupart des verbes en -dre gardent le d : il prend, il répond." },
              { text: "Le futur de « jouer » s'écrit « je jouerai ».", true: true, why: "On garde le e de l'infinitif, même s'il ne s'entend pas." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme correcte ?", options: ["Vous faisez", "Vous faites", "Vous fesez", "Vous faitez"], answer: 1, why: "Faire a une forme irrégulière à la 2e personne du pluriel du présent : vous faites." },
            { q: "Quel est le futur de « aller » à la 1re personne du singulier ?", options: ["J'allerai", "J'aillerai", "J'irais", "J'irai"], answer: 3, why: "Aller a un radical irrégulier au futur, ir- : j'irai, tu iras, il ira." },
            { q: "Dans « Le soleil se lève à l'est », quel est l'emploi du présent ?", options: ["Une vérité générale", "Une action en cours", "Le présent de narration", "Un ordre"], answer: 0, why: "Cette phrase est toujours vraie, quel que soit le moment où on la dit : c'est une vérité générale." },
            { q: "Comment écrit-on « commencer » avec « nous » au présent ?", options: ["Nous commencons", "Nous commenssons", "Nous commençons", "Nous commenceons"], answer: 2, why: "Devant o, la cédille permet de garder le son [s] : nous commençons." },
            { q: "Quelle forme est au futur simple ?", options: ["Il prend", "Il prenait", "Il prit", "Il prendra"], answer: 3, why: "« Il prendra » porte la terminaison -a du futur, précédée du son [r]." },
          ],
          trap: "Oublier le e des verbes en -ier, -uer et -ouer au futur (« je jourai » au lieu de « je jouerai »), ou écrire « vous faisez » et « vous disez » au lieu de « vous faites » et « vous dites ».",
          method: "Apprenez les verbes irréguliers par petits groupes (être, avoir, aller, puis faire, dire, venir) en les récitant à voix haute, puis écrivez-les de mémoire et corrigez-vous avec le cours. Pour vérifier un futur, cherchez toujours le son [r] avant la terminaison.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'imparfait-passe-simple',
          title: 'L\'imparfait et le passé simple dans le récit',
          minutes: 30,
          objectives: [
            "Conjuguer les verbes à l'imparfait et au passé simple de l'indicatif.",
            "Distinguer les emplois de l'imparfait et du passé simple dans un récit.",
            "Employer ces deux temps pour écrire un récit au passé.",
          ],
          course: [
            {
              heading: "Deux temps pour raconter au passé",
              paragraphs: [
                "Dans les contes, les mythes et les romans, le récit au passé emploie souvent deux temps qui travaillent ensemble : l'imparfait et le passé simple. Comparez : « Il pleuvait depuis le matin. Soudain, quelqu'un frappa à la porte. » Le premier verbe installe le décor ; le second fait avancer l'histoire.",
                "Le passé simple exprime les actions de premier plan : des actions brèves, achevées, qui se succèdent et font avancer le récit (« Il entra, posa son sac et s'assit »). L'imparfait exprime l'arrière-plan : les descriptions, les actions qui durent, les habitudes (« La maison était silencieuse ; chaque soir, le vieil homme lisait près du feu »).",
                "On peut comparer un récit à une pièce de théâtre : l'imparfait peint le décor et l'ambiance, le passé simple montre ce que font les personnages sur le devant de la scène. Une action longue à l'imparfait est souvent interrompue par une action brève au passé simple : « Je dormais quand le téléphone sonna. »",
              ],
              box: { label: "À retenir", text: "Imparfait : arrière-plan (décor, description, action qui dure, habitude). Passé simple : premier plan (actions brèves, achevées, successives, qui font avancer l'histoire)." },
            },
            {
              heading: "Conjuguer l'imparfait",
              paragraphs: [
                "L'imparfait se forme sur le radical du verbe à la 1re personne du pluriel du présent, auquel on ajoute les terminaisons -ais, -ais, -ait, -ions, -iez, -aient. Ces terminaisons sont les mêmes pour tous les verbes. Nous chantons donne je chantais ; nous finissons donne je finissais ; nous prenons donne je prenais ; nous faisons donne je faisais.",
                "Seul le verbe être fait exception : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. Attention aux verbes en -cer et en -ger : je lançais, je mangeais (cédille et e devant a). Et attention aux verbes en -ier : nous crions donne nous criions, vous criiez, avec deux i qui se suivent.",
              ],
              box: { label: "Formule", text: "Imparfait = radical de « nous » au présent + -ais, -ais, -ait, -ions, -iez, -aient. Nous finissons donne je finissais. Seule exception : être (j'étais)." },
            },
            {
              heading: "Conjuguer le passé simple",
              paragraphs: [
                "Le passé simple a plusieurs séries de terminaisons. Tous les verbes en -er, y compris aller, prennent : -ai, -as, -a, -âmes, -âtes, -èrent. Je chantai, tu chantas, il chanta, nous chantâmes, vous chantâtes, ils chantèrent ; il alla, ils allèrent.",
                "Les verbes du 2e groupe et beaucoup de verbes du 3e groupe prennent : -is, -is, -it, -îmes, -îtes, -irent. Il finit, ils finirent ; il prit, ils prirent ; il fit, ils firent ; il dit, ils dirent ; il vit, ils virent ; il mit, ils mirent ; il partit, ils partirent.",
                "D'autres verbes du 3e groupe prennent : -us, -us, -ut, -ûmes, -ûtes, -urent. C'est le cas d'être (il fut, ils furent), d'avoir (il eut, ils eurent), de pouvoir (il put), de vouloir (il voulut), de savoir (il sut), de courir (il courut) et de lire (il lut). Enfin, venir et tenir forment une série à part : il vint, ils vinrent ; il tint, ils tinrent.",
              ],
              box: { label: "Règle", text: "Passé simple. Verbes en -er : -ai, -as, -a, -âmes, -âtes, -èrent. Finir, prendre, faire... : -is, -is, -it, -îmes, -îtes, -irent. Être, avoir, pouvoir... : -us, -us, -ut, -ûmes, -ûtes, -urent. Venir, tenir : -ins, -ins, -int, -înmes, -întes, -inrent." },
            },
            {
              heading: "Ne pas confondre les deux temps",
              paragraphs: [
                "À la 1re personne du singulier des verbes en -er, l'imparfait et le passé simple se prononcent presque de la même façon : je chantais (imparfait), je chantai (passé simple). Pour choisir, remplacez « je » par « il » : si vous pouvez dire « il chantait », c'est l'imparfait (-ais) ; si vous pouvez dire « il chanta », c'est le passé simple (-ai).",
                "Autre piège : au singulier, les verbes du 2e groupe ont la même forme au présent et au passé simple. « Il finit » peut être un présent ou un passé simple. C'est le reste du texte qui permet de trancher : dans un récit au passé, entouré d'autres verbes au passé simple, « il finit » est un passé simple.",
              ],
            },
          ],
          keyPoints: [
            "Imparfait : arrière-plan du récit (décor, description, habitude, action qui dure).",
            "Passé simple : premier plan (actions brèves et successives qui font avancer l'histoire).",
            "Imparfait = radical de « nous » au présent + -ais, -ais, -ait, -ions, -iez, -aient ; seule exception : j'étais.",
            "Passé simple des verbes en -er : -ai, -as, -a, -âmes, -âtes, -èrent (ils chantèrent).",
            "Autres passés simples : il finit, il prit (-it) ; il fut, il eut, il put (-ut) ; il vint, il tint (-int).",
            "Je chantais ou je chantai ? Remplacez « je » par « il » : il chantait (imparfait) ou il chanta (passé simple).",
          ],
          example: {
            statement: "Mettez les verbes entre parenthèses à l'imparfait ou au passé simple, en justifiant : « La nuit (être) noire et le vent (souffler). Tout à coup, le loup (sortir) du bois et (s'approcher) de la cabane. »",
            solution: [
              "Repérer le rôle de chaque verbe : « être noire » et « souffler » décrivent le décor ; « sortir » et « s'approcher » sont des actions soudaines et successives, annoncées par « Tout à coup ».",
              "Décor, donc imparfait : la nuit était noire (exception être : ét-) ; le vent soufflait (nous soufflons, radical souffl- + -ait).",
              "Actions de premier plan, donc passé simple : le loup sortit (verbe du 3e groupe en -it) ; il s'approcha (verbe en -er : -a).",
              "Réponse : « La nuit était noire et le vent soufflait. Tout à coup, le loup sortit du bois et s'approcha de la cabane. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez à l'imparfait : a) regarder (je) ; b) grandir (nous) ; c) être (vous) ; d) manger (il) ; e) faire (ils). Puis conjuguez au passé simple, à la 3e personne du singulier et du pluriel : f) marcher ; g) prendre ; h) avoir.",
              hint: "Pour l'imparfait, partez de la forme « nous » du présent. Pour le passé simple, repérez d'abord la série du verbe : -a, -it ou -ut.",
              solution: [
                "a) nous regardons, radical regard- : je regardais.",
                "b) nous grandissons, radical grandiss- : nous grandissions.",
                "c) être est l'exception : vous étiez.",
                "d) nous mangeons, radical mange- (le e garde le son « je » devant a) : il mangeait.",
                "e) nous faisons, radical fais- : ils faisaient.",
                "f) marcher, verbe en -er : il marcha, ils marchèrent.",
                "g) prendre, série en -it : il prit, ils prirent.",
                "h) avoir, série en -ut : il eut, ils eurent.",
              ],
            },
            {
              level: 2,
              statement: "Dans ce texte, écrit pour l'exercice, relevez les verbes à l'imparfait et ceux au passé simple, puis expliquez le rôle de chaque temps : « Le château dominait la vallée. Ses tours semblaient toucher le ciel. Un matin, un chevalier arriva au pied des remparts. Il descendit de cheval et frappa trois coups à la porte. »",
              hint: "Les verbes à l'imparfait se terminent ici par -ait ou -aient. Demandez-vous ensuite si chaque verbe décrit le décor ou raconte une action.",
              solution: [
                "Verbes à l'imparfait : dominait, semblaient. Ils décrivent le décor (le château, ses tours) : c'est l'arrière-plan.",
                "Verbes au passé simple : arriva, descendit, frappa. Ce sont des actions brèves qui se succèdent, introduites par « Un matin » : c'est le premier plan.",
                "Remarque : « toucher » est à l'infinitif, ce n'est pas un verbe conjugué.",
                "Conclusion : l'imparfait installe le cadre de l'histoire, puis le passé simple lance l'action avec l'arrivée du chevalier.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Réécrivez ce texte au passé, en employant l'imparfait et le passé simple : « Il est minuit. La forêt est silencieuse et les arbres projettent des ombres inquiétantes. Soudain, un cri déchire le silence. Mathis se lève, prend sa lampe et sort de la tente. » Justifiez le choix du temps pour chaque verbe.",
              hint: "Séparez d'abord les verbes du décor (avant « Soudain ») et les actions qui se succèdent (après « Soudain »). Vérifiez les passés simples de prendre et de sortir dans le cours.",
              solution: [
                "Avant « Soudain », les verbes décrivent le décor : ils se mettent à l'imparfait. Il est devient il était ; la forêt est devient la forêt était ; les arbres projettent devient les arbres projetaient (nous projetons, radical projet-).",
                "Après « Soudain », les verbes sont des actions brèves et successives : ils se mettent au passé simple. Un cri déchire devient un cri déchira (verbe en -er) ; Mathis se lève devient Mathis se leva.",
                "Prendre et sortir appartiennent à la série en -it : Mathis prit sa lampe et sortit de la tente.",
                "Texte réécrit : « Il était minuit. La forêt était silencieuse et les arbres projetaient des ombres inquiétantes. Soudain, un cri déchira le silence. Mathis se leva, prit sa lampe et sortit de la tente. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque infinitif à son passé simple (3e personne du singulier).",
            pairs: [
              { left: "Être", right: "Il fut" },
              { left: "Avoir", right: "Il eut" },
              { left: "Venir", right: "Il vint" },
              { left: "Prendre", right: "Il prit" },
              { left: "Aller", right: "Il alla" },
              { left: "Voir", right: "Il vit" },
            ],
          },
          quiz: [
            { q: "Quelle forme est à l'imparfait ?", options: ["Ils partirent", "Ils partaient", "Ils partiront", "Ils partent"], answer: 1, why: "La terminaison -aient est celle de l'imparfait à la 3e personne du pluriel." },
            { q: "Quel est le passé simple de « être » à la 3e personne du singulier ?", options: ["Il était", "Il eut", "Il fut", "Il serait"], answer: 2, why: "Être appartient à la série en -ut : il fut. « Il était » est l'imparfait, « il eut » le passé simple d'avoir." },
            { q: "Dans un récit, quel temps sert surtout à décrire le décor ?", options: ["Le passé simple", "Le futur simple", "L'imparfait"], answer: 2, why: "L'imparfait exprime l'arrière-plan : le décor, les descriptions, les actions qui durent." },
            { q: "Quel est le passé simple de « marcher » à la 3e personne du pluriel ?", options: ["Ils marchèrent", "Ils marchairent", "Ils marchirent", "Ils marchérent"], answer: 0, why: "Les verbes en -er font -èrent, avec un accent grave, à la 3e personne du pluriel du passé simple." },
            { q: "« Je dormais quand le réveil sonna. » Que montre le passé simple « sonna » ?", options: ["Une action brève qui interrompt", "Une habitude qui se répète chaque jour", "La description du décor de la scène"], answer: 0, why: "Le passé simple exprime ici une action brève de premier plan, qui interrompt l'action longue à l'imparfait." },
          ],
          trap: "Confondre je chantais (imparfait) et je chantai (passé simple), ou mettre au passé simple des verbes de description : un décor se décrit à l'imparfait (« la mer était calme »).",
          method: "Avant de conjuguer, classez chaque verbe du récit dans l'une des deux colonnes : décor (imparfait) ou action de premier plan (passé simple). Pour vérifier une terminaison en -ai ou en -ais, remplacez « je » par « il » : il chanta ou il chantait.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'passe-compose-imperatif',
          title: 'Le passé composé et l\'impératif présent',
          minutes: 30,
          objectives: [
            "Conjuguer un verbe au passé composé avec l'auxiliaire être ou avoir.",
            "Former le participe passé d'un verbe et l'accorder avec le sujet quand l'auxiliaire est être.",
            "Conjuguer un verbe à l'impératif présent pour exprimer un ordre ou un conseil.",
          ],
          course: [
            {
              heading: "Le passé composé : un temps composé",
              paragraphs: [
                "Le passé composé est un temps composé : il est formé de deux mots. Le premier est un auxiliaire, être ou avoir, conjugué au présent ; le second est le participe passé du verbe. Dans « J'ai mangé », « ai » est l'auxiliaire avoir au présent et « mangé » est le participe passé du verbe manger.",
                "Le passé composé exprime une action passée et terminée : « Hier, nous avons visité le château. » Il est très employé à l'oral, dans les conversations, les lettres et les récits où l'on raconte ce que l'on a vécu. Dans un récit littéraire au passé, c'est plutôt le passé simple qui exprime les actions.",
              ],
              box: { label: "Formule", text: "Passé composé = auxiliaire être ou avoir au présent + participe passé du verbe. J'ai chanté, tu as fini, elle est partie, nous avons pris." },
            },
            {
              heading: "Former le participe passé",
              paragraphs: [
                "Les verbes en -er ont un participe passé en -é : chanter donne chanté, jouer donne joué, aller donne allé. Les verbes du 2e groupe ont un participe passé en -i : finir donne fini, choisir donne choisi.",
                "Les verbes du 3e groupe ont des participes passés variés, qu'il faut apprendre : partir (parti), venir (venu), voir (vu), vouloir (voulu), avoir (eu), être (été), prendre (pris), mettre (mis), faire (fait), dire (dit), écrire (écrit), ouvrir (ouvert), naître (né), mourir (mort).",
                "Pour trouver la lettre finale muette d'un participe passé, mettez-le au féminin : « pris » donne « prise », on entend le s ; « fait » donne « faite », on entend le t. Et pour ne pas confondre « mangé » et « manger », remplacez le verbe par vendre : « il a vendu » (participe passé, donc -é) ; « il va vendre » (infinitif, donc -er).",
              ],
              box: { label: "Méthode", text: "-é ou -er ? Remplacez par vendu ou vendre. « J'ai vendu » : j'ai mangé. « Je vais vendre » : je vais manger." },
            },
            {
              heading: "Être ou avoir ? L'accord du participe passé",
              paragraphs: [
                "La plupart des verbes se conjuguent avec l'auxiliaire avoir : j'ai mangé, elle a fini, nous avons pris. Quelques verbes qui expriment un déplacement ou un changement d'état se conjuguent avec être : aller, venir, arriver, partir, entrer, sortir, monter, descendre, tomber, rester, naître, mourir, devenir, retourner. Les verbes pronominaux, comme se lever, se conjuguent aussi avec être : je me suis levé.",
                "Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet, comme un adjectif : « Léo est parti », « Léa est partie », « Mes amis sont partis », « Mes sœurs sont parties ».",
                "Avec l'auxiliaire avoir, le participe passé ne s'accorde jamais avec le sujet : « Léa a mangé », « Mes sœurs ont mangé ». Vous découvrirez plus tard un cas particulier d'accord avec avoir ; pour l'instant, retenez qu'on n'accorde pas avec le sujet. Remarque : monter, descendre, sortir et entrer prennent avoir quand ils sont suivis d'un complément d'objet : « J'ai monté les valises. »",
              ],
              box: { label: "Règle", text: "Avec être, le participe passé s'accorde avec le sujet : elles sont venues. Avec avoir, il ne s'accorde pas avec le sujet : elles ont chanté." },
            },
            {
              heading: "L'impératif présent : donner un ordre ou un conseil",
              paragraphs: [
                "L'impératif sert à donner un ordre, un conseil, une consigne ou à faire une demande : « Ferme la porte », « Prenons le bus », « Ne courez pas dans le couloir ». Il n'a que trois personnes : la 2e personne du singulier, la 1re et la 2e personne du pluriel. Le sujet n'est jamais exprimé.",
                "Ses terminaisons ressemblent à celles du présent. Pour les verbes en -er, la 2e personne du singulier n'a pas de s : chante, chantons, chantez (alors qu'au présent on écrit « tu chantes »). C'est la même chose pour ouvrir, offrir et cueillir : ouvre, offre, cueille. Les autres verbes gardent le s : finis, finissons, finissez ; prends, prenons, prenez ; fais, faisons, faites.",
                "Quatre verbes très fréquents sont irréguliers : être (sois, soyons, soyez), avoir (aie, ayons, ayez), savoir (sache, sachons, sachez) et aller (va, allons, allez). Devant « en » et « y », on ajoute un s pour faciliter la prononciation : « Vas-y », « Manges-en ».",
              ],
              box: { label: "Règle", text: "Impératif : trois personnes, sans sujet. Verbes en -er : pas de s à la 2e personne du singulier (range ta chambre). Autres verbes : finis, prends, fais. Irréguliers : sois, aie, sache, va." },
            },
          ],
          keyPoints: [
            "Passé composé = être ou avoir au présent + participe passé : j'ai joué, elle est venue.",
            "Participes passés : -é (verbes en -er), -i (2e groupe), formes variées au 3e groupe (pris, fait, venu, vu).",
            "Avec être, le participe passé s'accorde avec le sujet ; avec avoir, jamais avec le sujet.",
            "-é ou -er ? Remplacez par vendu ou vendre.",
            "Impératif : trois personnes, pas de sujet ; range, rangeons, rangez (pas de s pour les verbes en -er).",
            "Impératifs irréguliers : sois, aie, sache, va.",
          ],
          example: {
            statement: "Mettez les verbes au passé composé : « Mes cousines (arriver) hier soir. Elles (apporter) un gâteau. »",
            solution: [
              "Arriver exprime un déplacement : il se conjugue avec être. L'auxiliaire au présent avec « elles » est « sont ».",
              "Participe passé d'arriver : arrivé. Avec être, il s'accorde avec le sujet « mes cousines », féminin pluriel : arrivées.",
              "Apporter se conjugue avec avoir : elles ont. Participe passé : apporté. Avec avoir, il ne s'accorde pas avec le sujet.",
              "Réponse : « Mes cousines sont arrivées hier soir. Elles ont apporté un gâteau. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le participe passé de ces verbes : a) danser ; b) grandir ; c) prendre ; d) venir ; e) faire ; f) voir ; g) être ; h) écrire.",
              hint: "Pour un participe passé terminé par une consonne muette, mettez-le au féminin pour l'entendre (une lettre écrite).",
              solution: [
                "a) danser (verbe en -er) : dansé.",
                "b) grandir (2e groupe) : grandi.",
                "c) prendre : pris (au féminin, prise : on entend le s).",
                "d) venir : venu. e) faire : fait (au féminin, faite : on entend le t).",
                "f) voir : vu. g) être : été.",
                "h) écrire : écrit (au féminin, écrite : on entend le t).",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez les verbes au passé composé, en choisissant le bon auxiliaire et en accordant si nécessaire : a) Lina (tomber) dans l'escalier. b) Nous (finir) nos devoirs. c) Les garçons (sortir) dans la cour. d) Mes parents (acheter) une voiture. e) Ma grand-mère (naître) en 1960.",
              hint: "Demandez-vous d'abord si le verbe exprime un déplacement ou un changement d'état (auxiliaire être). Si l'auxiliaire est être, cherchez le genre et le nombre du sujet.",
              solution: [
                "a) Tomber se conjugue avec être ; le sujet Lina est féminin singulier : Lina est tombée dans l'escalier.",
                "b) Finir se conjugue avec avoir : nous avons fini nos devoirs (pas d'accord avec le sujet).",
                "c) Sortir, sans complément d'objet, se conjugue avec être ; le sujet est masculin pluriel : les garçons sont sortis dans la cour.",
                "d) Acheter se conjugue avec avoir : mes parents ont acheté une voiture.",
                "e) Naître se conjugue avec être ; le sujet est féminin singulier : ma grand-mère est née en 1960.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Voici des conseils pour une sortie scolaire, écrits avec « il faut » : « Il faut être à l'heure. Il faut avoir une gourde. Il faut prendre un pull. Il ne faut pas aller seul au bord de l'eau. Il faut écouter les accompagnateurs. » a) Réécrivez chaque conseil à l'impératif, à la 2e personne du singulier. b) Réécrivez-les ensuite à la 2e personne du pluriel.",
              hint: "Être et avoir sont irréguliers à l'impératif. Aller et écouter se terminent par -er : ils ne prennent pas de s à la 2e personne du singulier.",
              solution: [
                "Repérer les verbes : être, avoir, prendre, aller (à la forme négative), écouter.",
                "a) 2e personne du singulier : « Sois à l'heure. Aie une gourde. Prends un pull. Ne va pas seul au bord de l'eau. Écoute les accompagnateurs. »",
                "Vérifier : « sois » et « aie » sont les formes irrégulières d'être et d'avoir ; « va » et « écoute » n'ont pas de s ; « prends » garde son s.",
                "b) 2e personne du pluriel : « Soyez à l'heure. Ayez une gourde. Prenez un pull. N'allez pas seuls au bord de l'eau. Écoutez les accompagnateurs. »",
                "Remarque : à la forme négative, « ne... pas » encadre le verbe à l'impératif, et « seul » s'accorde avec les personnes à qui l'on parle (seuls).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Passé composé et impératif.",
            statements: [
              { text: "Le passé composé est formé d'un auxiliaire et d'un participe passé.", true: true, why: "Auxiliaire être ou avoir au présent + participe passé : j'ai joué." },
              { text: "Dans « Elles ont chanté », le participe passé doit s'accorder avec « elles ».", true: false, why: "Avec avoir, le participe passé ne s'accorde jamais avec le sujet." },
              { text: "« Aller » se conjugue avec l'auxiliaire être au passé composé.", true: true, why: "Aller exprime un déplacement : je suis allé, elle est allée." },
              { text: "À l'impératif, on écrit « Ranges ta chambre ! ».", true: false, why: "Les verbes en -er n'ont pas de s à la 2e personne du singulier de l'impératif : range." },
              { text: "L'impératif n'a que trois personnes.", true: true, why: "La 2e personne du singulier, la 1re et la 2e personne du pluriel : range, rangeons, rangez." },
              { text: "Le participe passé de « prendre » est « prit ».", true: false, why: "Le participe passé est « pris » (une chose prise) ; « il prit » est un passé simple." },
              { text: "À l'impératif, le verbe être donne « sois, soyons, soyez ».", true: true, why: "C'est une conjugaison irrégulière à apprendre par cœur." },
            ],
          },
          quiz: [
            { q: "Quel auxiliaire emploie-t-on avec « venir » au passé composé ?", options: ["Avoir", "Être", "Aller", "Faire"], answer: 1, why: "Venir exprime un déplacement : il se conjugue avec être (je suis venu, elle est venue)." },
            { q: "Quelle phrase est correctement accordée ?", options: ["Les filles ont mangées", "Les filles sont venues", "Les filles sont venu", "Les filles ont venues"], answer: 1, why: "Venir se conjugue avec être, donc le participe passé s'accorde avec le sujet féminin pluriel : venues." },
            { q: "Quelle est la 2e personne du singulier de l'impératif de « chanter » ?", options: ["Chante", "Chantes", "Chanté", "Chantons"], answer: 0, why: "Les verbes en -er ne prennent pas de s à la 2e personne du singulier de l'impératif." },
            { q: "Quel est le participe passé de « mettre » ?", options: ["Mettu", "Mettré", "Mit", "Mis"], answer: 3, why: "On dit « il a mis », et au féminin « mise » : on entend le s." },
            { q: "Complétez : « Il a ... son goûter. »", options: ["manger", "mangé", "mangez", "mangeait"], answer: 1, why: "Après l'auxiliaire avoir, on écrit le participe passé : on dirait « il a vendu », donc « mangé »." },
          ],
          trap: "Écrire -er à la place de -é après l'auxiliaire (« il a manger » au lieu de « il a mangé »), ou accorder le participe passé avec le sujet quand l'auxiliaire est avoir (« elles ont mangées »).",
          method: "Pour vérifier un participe passé en -é, remplacez le verbe par vendre : si vous dites « vendu », écrivez -é. Regardez ensuite l'auxiliaire : avec être, cherchez le sujet et accordez ; avec avoir, n'accordez pas avec le sujet.",
        },
      ],
    },
    /* ================================================================== */
    /* RENCONTRER DES MONSTRES                                              */
    /* ================================================================== */
    {
      id: 'monstres',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'monstres-mythes',
          title: 'Les monstres des mythes et des contes',
          minutes: 30,
          objectives: [
            "Identifier ce qui rend une créature monstrueuse dans un mythe ou un conte.",
            "Connaître quelques grandes figures de monstres de la mythologie grecque et des contes.",
            "Analyser le rôle du monstre face au héros dans un récit.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'un monstre ?",
              paragraphs: [
                "Le mot « monstre » vient du latin monstrum, qui désignait un prodige, c'est-à-dire un événement extraordinaire, un signe envoyé par les dieux pour avertir les hommes. Aujourd'hui, un monstre est une créature dont l'apparence ou le comportement sort de l'ordinaire et provoque la peur.",
                "Dans les récits, le monstre se reconnaît souvent à son corps. Il peut mélanger l'humain et l'animal (une tête de taureau sur un corps d'homme), avoir une taille démesurée (les géants, les ogres), posséder des parties du corps en trop ou en moins (plusieurs têtes, un seul œil), ou avoir un pouvoir terrifiant (un regard qui tue, un souffle de feu).",
                "Le monstre se reconnaît aussi à ce qu'il fait : il dévore, il enlève, il garde un trésor ou un passage, il menace une ville entière. Il vit souvent dans un lieu à l'écart, sombre ou difficile d'accès : une caverne, un labyrinthe, une forêt profonde, un château isolé.",
              ],
              box: { label: "Définition", text: "Un monstre est une créature hors du commun, par son corps (mélange d'humain et d'animal, taille démesurée, parties en trop ou en moins) ou par ses pouvoirs, qui inspire la peur et menace les hommes." },
            },
            {
              heading: "Les monstres de la mythologie grecque",
              paragraphs: [
                "Le Minotaure a un corps d'homme et une tête de taureau. Le roi Minos l'enferme en Crète dans le Labyrinthe, un palais aux couloirs si compliqués qu'on ne peut pas en sortir. La ville d'Athènes doit lui livrer régulièrement des jeunes gens qu'il dévore. Le héros Thésée le tue, puis retrouve la sortie grâce au fil que lui a donné Ariane, la fille de Minos.",
                "Méduse est l'une des trois Gorgones : elle a des serpents à la place des cheveux, et son regard change en pierre quiconque la regarde. Le héros Persée lui tranche la tête sans la regarder en face, en observant son reflet dans un bouclier poli comme un miroir, prêté par la déesse Athéna.",
                "L'Hydre de Lerne est un serpent à plusieurs têtes : quand on en coupe une, d'autres repoussent. Héraclès (Hercule chez les Romains) en vient à bout en brûlant les cous coupés. La Sphinge (qu'on appelle aussi le Sphinx), qui a un corps de lion, une tête de femme et des ailes, pose une énigme aux voyageurs près de la ville de Thèbes et dévore ceux qui ne trouvent pas la réponse ; Œdipe résout son énigme. Enfin, dans l'Odyssée d'Homère, le Cyclope Polyphème est un géant qui n'a qu'un œil au milieu du front.",
              ],
              box: { label: "Repère", text: "Minotaure : homme à tête de taureau, vaincu par Thésée. Méduse : chevelure de serpents, regard qui pétrifie, vaincue par Persée. Hydre de Lerne : têtes qui repoussent, vaincue par Héraclès. Sphinge (ou Sphinx) : énigme résolue par Œdipe. Polyphème : Cyclope trompé par Ulysse." },
            },
            {
              heading: "Les monstres des contes",
              paragraphs: [
                "Les contes merveilleux ont aussi leurs monstres. L'ogre est un géant qui mange de la chair humaine, surtout celle des enfants. Dans Le Petit Poucet de Charles Perrault (1697), l'ogre veut dévorer Poucet et ses six frères ; le plus petit des garçons le trompe et lui prend ses bottes de sept lieues, qui permettent de faire d'immenses enjambées. Dans Le Chat botté, du même auteur, le chat rusé pousse un ogre à se changer en souris, puis le mange.",
                "On rencontre encore dans les contes des loups qui parlent, des dragons qui gardent une princesse ou un trésor, des sorcières qui veulent manger les enfants, comme dans Hansel et Gretel, un conte recueilli par les frères Grimm. Ces créatures vivent souvent au cœur d'une forêt, lieu dangereux où l'on se perd.",
              ],
            },
            {
              heading: "Le rôle du monstre dans le récit",
              paragraphs: [
                "Dans un mythe comme dans un conte, le monstre est d'abord une épreuve pour le héros. En l'affrontant, le héros montre ses qualités : le courage et la force (Héraclès face à l'Hydre), mais aussi l'intelligence et la ruse (Ulysse face à Polyphème, Poucet face à l'ogre). Le héros est souvent aidé : un objet magique, un conseil, un dieu ou un autre personnage, comme Ariane avec son fil.",
                "Vaincre le monstre permet de rétablir l'ordre : la ville est délivrée, les enfants sont sauvés, le héros revient grandi. Les monstres donnent aussi une forme aux peurs humaines : la peur d'être dévoré, de se perdre, de ce qui est inconnu ou différent. En lisant ces histoires, on apprend que ces peurs peuvent être surmontées.",
              ],
              box: { label: "À retenir", text: "Le monstre est une épreuve qui révèle les qualités du héros (courage, force, ruse). Sa défaite rétablit l'ordre. Il représente souvent les peurs des hommes." },
            },
          ],
          keyPoints: [
            "Monstre vient du latin monstrum : un prodige, un signe envoyé par les dieux.",
            "Un monstre se reconnaît à son corps (mélange, taille, parties en trop ou en moins), à ses pouvoirs et à ses actes.",
            "Mythologie grecque : le Minotaure (Thésée), Méduse (Persée), l'Hydre de Lerne (Héraclès), la Sphinge (Œdipe), Polyphème (Ulysse).",
            "Contes : l'ogre du Petit Poucet et du Chat botté (Charles Perrault), les loups, les dragons, les sorcières.",
            "Le monstre est une épreuve qui révèle le courage ou la ruse du héros ; sa défaite rétablit l'ordre.",
          ],
          example: {
            statement: "Lisez ce résumé, écrit pour l'exercice : « Régulièrement, Athènes devait envoyer en Crète de jeunes Athéniens, qui étaient enfermés dans le Labyrinthe et dévorés par le Minotaure, un être à corps d'homme et à tête de taureau. Le jeune Thésée se porta volontaire. Ariane, la fille du roi, lui donna une pelote de fil. Thésée tua le monstre et sortit du Labyrinthe en suivant le fil. » Qu'est-ce qui fait du Minotaure un monstre ? Quel est son rôle dans le récit ?",
            solution: [
              "Relever son apparence : il a « un corps d'homme et une tête de taureau ». Il mélange l'humain et l'animal, ce qui est un signe de monstruosité.",
              "Relever ses actes : il dévore de jeunes Athéniens. Il est donc dangereux et menace toute une ville.",
              "Relever son lieu : il est enfermé dans le Labyrinthe, un lieu à l'écart dont on ne sait pas sortir.",
              "Son rôle : il est l'épreuve du héros. Thésée montre son courage en se portant volontaire, et il réussit grâce à l'aide d'Ariane.",
              "Réponse : le Minotaure est un monstre par son corps mi-homme mi-taureau, par sa cruauté et par son lieu de vie ; dans le récit, il sert d'épreuve qui révèle le courage de Thésée, et sa mort délivre Athènes.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun de ces monstres, dites ce qui le rend monstrueux (son corps ou son pouvoir) et nommez le héros qui l'affronte : a) le Minotaure ; b) Méduse ; c) l'Hydre de Lerne ; d) Polyphème ; e) l'ogre du Petit Poucet.",
              hint: "Relisez la partie du cours sur la mythologie grecque et celle sur les contes. Pour chaque monstre, cherchez ce qui n'est pas « normal » dans son corps ou ce qu'il sait faire.",
              solution: [
                "a) Le Minotaure : corps d'homme et tête de taureau, il dévore des jeunes gens. Héros : Thésée.",
                "b) Méduse : des serpents à la place des cheveux, un regard qui change en pierre. Héros : Persée.",
                "c) L'Hydre de Lerne : un serpent à plusieurs têtes qui repoussent quand on les coupe. Héros : Héraclès.",
                "d) Polyphème : un Cyclope, un géant qui n'a qu'un œil au milieu du front. Héros : Ulysse.",
                "e) L'ogre : un géant qui mange les enfants. Héros : le Petit Poucet.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce résumé, écrit pour l'exercice : « Le roi Polydecte mit le jeune Persée au défi de lui rapporter la tête de Méduse. Tous ceux qui avaient croisé le regard de la Gorgone avaient été changés en statues de pierre. La déesse Athéna prêta au jeune homme un bouclier brillant. Persée s'approcha de Méduse endormie à reculons, en regardant son reflet dans le bouclier, et lui trancha la tête. » 1. Quel est le pouvoir de Méduse ? 2. Pourquoi Persée regarde-t-il dans le bouclier ? 3. Quelles qualités du héros cette épreuve révèle-t-elle ?",
              hint: "Pour la question 2, demandez-vous ce qui arriverait à Persée s'il regardait Méduse en face. Pour la question 3, pensez à la fois au courage et à l'intelligence.",
              solution: [
                "1. Méduse change en pierre ceux qui croisent son regard : le texte parle de « statues de pierre ».",
                "2. Persée regarde le reflet de Méduse dans le bouclier pour ne pas croiser directement son regard : ainsi, il n'est pas changé en pierre.",
                "3. L'épreuve révèle le courage de Persée, qui ose s'approcher du monstre, et son intelligence, puisqu'il trouve un moyen de ne pas la regarder en face. Il bénéficie aussi de l'aide d'une déesse, Athéna.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Comparez deux rencontres avec un monstre : Thésée face au Minotaure et le Petit Poucet face à l'ogre. a) Quel est le danger dans chaque cas ? b) Comment chaque héros triomphe-t-il : par la force ou par la ruse ? c) Quel point commun ont ces deux récits ? d) Rédigez un paragraphe de quatre ou cinq phrases pour dire lequel des deux héros vous semble le plus admirable, en justifiant.",
              hint: "Rappelez-vous que Thésée tue le monstre puis utilise le fil d'Ariane, alors que Poucet trompe l'ogre et s'empare de ses bottes. Pour la question d, donnez votre avis, puis appuyez-le sur au moins un argument précis tiré de l'histoire.",
              solution: [
                "a) Dans les deux cas, le monstre dévore les humains : le Minotaure mange les jeunes Athéniens, l'ogre veut manger Poucet et ses frères.",
                "b) Thésée triomphe surtout par la force et le courage : il combat et tue le Minotaure. Il ajoute une ruse, le fil d'Ariane, pour sortir du Labyrinthe. Poucet, lui, est le plus petit et le plus faible : il triomphe uniquement par la ruse, en trompant l'ogre et en lui prenant ses bottes de sept lieues.",
                "c) Point commun : le héros est jeune, il affronte un monstre plus fort que lui, et sa victoire sauve d'autres personnes (les Athéniens, ses frères).",
                "d) Exemple de paragraphe : « À mon avis, le Petit Poucet est le héros le plus admirable. En effet, il est petit et faible, alors que Thésée est un prince fort et entraîné au combat. Poucet ne peut compter que sur son intelligence. Grâce à sa ruse, il sauve ses six frères sans jamais combattre. Il prouve ainsi que l'on n'a pas besoin d'être fort pour vaincre un monstre. »",
                "Toute autre réponse est acceptée si elle donne un avis clair et le justifie par des éléments exacts des deux histoires.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque monstre à sa description.",
            pairs: [
              { left: "Le Minotaure", right: "Un homme à tête de taureau, enfermé dans le Labyrinthe" },
              { left: "Méduse", right: "Une Gorgone aux cheveux de serpents, dont le regard pétrifie" },
              { left: "L'Hydre de Lerne", right: "Un serpent dont les têtes coupées repoussent" },
              { left: "La Sphinge", right: "Un corps de lion, une tête de femme, et une énigme à résoudre" },
              { left: "Polyphème", right: "Un Cyclope, géant qui n'a qu'un œil" },
              { left: "L'ogre", right: "Un géant des contes qui mange les enfants" },
            ],
          },
          quiz: [
            { q: "Quel héros tue le Minotaure ?", options: ["Persée", "Héraclès", "Thésée", "Ulysse"], answer: 2, why: "Thésée tue le Minotaure dans le Labyrinthe, puis en sort grâce au fil d'Ariane." },
            { q: "Que se passe-t-il quand on croise le regard de Méduse ?", options: ["On est changé en pierre", "On devient aveugle pour toujours", "On s'endort pour cent ans", "On perd la mémoire"], answer: 0, why: "Le regard de Méduse pétrifie, c'est-à-dire qu'il change en pierre : c'est pourquoi Persée observe son reflet." },
            { q: "Le mot latin monstrum désignait d'abord :", options: ["un animal sauvage qui vit dans les forêts", "un prodige envoyé par les dieux", "un géant qui dévore les hommes"], answer: 1, why: "Monstrum désignait un prodige, un signe extraordinaire par lequel les dieux avertissaient les hommes." },
            { q: "Qui a écrit Le Petit Poucet ?", options: ["Jean de La Fontaine", "Les frères Grimm", "Homère", "Charles Perrault"], answer: 3, why: "Le Petit Poucet fait partie des contes publiés par Charles Perrault en 1697." },
            { q: "Dans un récit, le monstre sert souvent à :", options: ["raconter l'histoire à la place du héros", "mettre le héros à l'épreuve", "décrire le paysage pendant tout le récit", "faire rire le lecteur à chaque page"], answer: 1, why: "Le monstre est une épreuve : en l'affrontant, le héros révèle son courage, sa force ou sa ruse." },
          ],
          trap: "Se contenter d'écrire qu'un monstre « fait peur », sans relever précisément ce qui le rend monstrueux (corps, pouvoirs, actes) ni expliquer son rôle d'épreuve pour le héros.",
          method: "Pour analyser un monstre, posez-vous trois questions et répondez à chacune par une phrase appuyée sur un mot du texte : à quoi ressemble-t-il ? que fait-il ? comment le héros en triomphe-t-il ?",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'portrait-monstre',
          title: 'Décrire un monstre : l\'art du portrait',
          minutes: 35,
          objectives: [
            "Distinguer le portrait physique et le portrait moral d'un personnage.",
            "Repérer les outils de la description : vocabulaire précis, adjectifs, compléments du nom, comparaisons.",
            "Rédiger le portrait organisé d'un monstre.",
          ],
          course: [
            {
              heading: "Portrait physique et portrait moral",
              paragraphs: [
                "Faire le portrait d'un personnage, c'est le décrire pour que le lecteur puisse se le représenter. Le portrait physique décrit son apparence : sa taille, sa silhouette, sa tête, ses yeux, sa peau, ses membres, sa voix, sa démarche, son odeur. Le portrait moral décrit son caractère et ses sentiments : il est cruel, rusé, solitaire, jaloux, triste ou généreux.",
                "Dans un récit, les deux portraits sont souvent mêlés. Le portrait moral peut être dit directement (« Il était cruel ») ou se deviner à travers les gestes et les paroles du personnage (« Il ricana en écrasant la fleur sous sa patte »). Le lecteur comprend alors seul ce que pense ou ressent le monstre.",
              ],
              box: { label: "Définition", text: "Le portrait physique décrit l'apparence d'un personnage (corps, visage, voix, démarche). Le portrait moral décrit son caractère et ses sentiments." },
            },
            {
              heading: "Organiser la description",
              paragraphs: [
                "Un bon portrait n'est pas une liste de détails jetés au hasard : il suit un ordre, pour que le lecteur construise l'image peu à peu. On peut aller de la tête aux pieds, de l'ensemble vers les détails (d'abord la silhouette géante, puis les griffes), ou de loin vers près, en suivant le regard du personnage qui découvre le monstre.",
                "Pour guider le lecteur, employez des indications de lieu : en haut, au-dessus, au milieu du front, sur son dos, le long de sa colonne, au bout de ses bras. Variez aussi les verbes, au lieu de répéter « il a » ou « il est » : se dresser, porter, se terminer par, être couvert de, se hérisser, pendre, briller.",
              ],
              box: { label: "Méthode", text: "Choisissez un ordre et tenez-le : de la tête aux pieds, de l'ensemble aux détails, ou de loin vers près. Guidez le lecteur avec des indications de lieu et des verbes variés." },
            },
            {
              heading: "Les outils pour enrichir le portrait",
              paragraphs: [
                "Utilisez des noms précis pour le corps du monstre : une gueule, des crocs, des griffes, des serres, des écailles, une crinière, des ailes membraneuses, une carapace. Enrichissez ces noms avec des adjectifs (des crocs jaunâtres, des griffes acérées) et des compléments du nom (une gueule aux dents noires, des ailes de chauve-souris).",
                "La comparaison rapproche deux éléments grâce à un outil de comparaison : comme, tel, pareil à, semblable à, ressembler à, aussi... que, plus... que. Dans « Ses yeux brillaient comme des braises », on compare les yeux (le comparé) à des braises (le comparant) avec l'outil « comme ». La comparaison aide le lecteur à imaginer ce qu'il n'a jamais vu à partir de ce qu'il connaît.",
                "Pensez enfin à faire appel à tous les sens, et pas seulement à la vue : l'ouïe (un grognement sourd, une voix caverneuse), l'odorat (une odeur de soufre), le toucher (une peau froide et gluante). L'exagération (une bouche si grande qu'elle aurait avalé une maison) renforce l'impression de démesure.",
              ],
              box: { label: "Définition", text: "La comparaison rapproche un comparé et un comparant à l'aide d'un outil de comparaison (comme, tel, pareil à, semblable à). Exemple : « sa peau était dure comme la pierre »." },
            },
            {
              heading: "Le portrait dans le récit",
              paragraphs: [
                "Dans un récit au passé, le portrait s'écrit surtout à l'imparfait, le temps de la description et de l'arrière-plan : « Le dragon dormait sur son trésor. Ses écailles luisaient dans l'ombre. » Le passé simple reprend ensuite pour l'action : « Soudain, il ouvrit un œil. »",
                "Le portrait n'est jamais neutre : l'auteur choisit ses mots pour produire un effet sur le lecteur. Des mots qui évoquent la saleté, le froid, l'obscurité ou la taille immense font naître la peur ou le dégoût. Des détails inattendus (un monstre terrifiant qui porte un nœud papillon) peuvent au contraire faire sourire.",
              ],
              box: { label: "À retenir", text: "Dans un récit au passé, le portrait s'écrit à l'imparfait. Le choix des mots crée un effet : peur, dégoût, ou parfois sourire." },
            },
          ],
          keyPoints: [
            "Portrait physique : l'apparence (corps, visage, voix, odeur). Portrait moral : le caractère et les sentiments.",
            "Un portrait suit un ordre : de la tête aux pieds, de l'ensemble aux détails, ou de loin vers près.",
            "Enrichir les noms : noms précis, adjectifs (des griffes acérées), compléments du nom (une gueule aux crocs noirs).",
            "La comparaison : comparé + outil (comme, tel, pareil à) + comparant : des yeux comme des braises.",
            "Faire appel à plusieurs sens : vue, ouïe, odorat, toucher.",
            "Dans un récit au passé, le portrait s'écrit à l'imparfait.",
          ],
          example: {
            statement: "Lisez ce portrait, écrit pour la leçon : « Au fond de la grotte se dressait une créature immense. Son corps de serpent, couvert d'écailles vertes et gluantes, s'enroulait autour d'un rocher. Sa tête, plus grosse qu'un tonneau, portait deux cornes tordues. Ses yeux jaunes brillaient comme des lanternes, et de sa gueule aux crocs noirs s'échappait une odeur de poisson pourri. » Analysez ce portrait : ordre suivi, outils de la description, sens sollicités, effet produit.",
            solution: [
              "L'ordre : le portrait va de l'ensemble (« une créature immense ») vers les détails : le corps, puis la tête, les cornes, les yeux et la gueule.",
              "Les noms enrichis : des adjectifs (immense, vertes, gluantes, tordues, jaunes, noirs) et des compléments du nom (« de serpent », « aux crocs noirs », « de poisson pourri »).",
              "Les comparaisons : « plus grosse qu'un tonneau » et « brillaient comme des lanternes » (comparé : ses yeux ; outil : comme ; comparant : des lanternes).",
              "Les sens : la vue (couleurs, formes), le toucher (gluantes), l'odorat (l'odeur de poisson pourri).",
              "Le temps : les verbes (se dressait, s'enroulait, portait, brillaient, s'échappait) sont à l'imparfait, temps de la description.",
              "L'effet : la taille démesurée, l'aspect gluant et l'odeur font naître la peur et le dégoût. C'est un portrait physique : le caractère du monstre n'est pas encore décrit.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces éléments en deux colonnes, portrait physique et portrait moral : des griffes acérées ; cruel ; une peau couverte d'écailles ; rusé ; un œil unique au milieu du front ; solitaire ; une voix rauque ; jaloux de son trésor.",
              hint: "Demandez-vous si l'élément se voit ou s'entend (le physique) ou s'il concerne le caractère et les sentiments (le moral). Attention, la voix fait partie du physique.",
              solution: [
                "Portrait physique : des griffes acérées ; une peau couverte d'écailles ; un œil unique au milieu du front ; une voix rauque.",
                "Portrait moral : cruel ; rusé ; solitaire ; jaloux de son trésor.",
                "Remarque : une voix rauque s'entend, elle appartient donc au portrait physique, même si elle ne se voit pas.",
              ],
            },
            {
              level: 2,
              statement: "Enrichissez chacune de ces phrases plates en utilisant au moins un adjectif, un complément du nom et une comparaison, puis indiquez les outils employés : a) Le monstre avait des dents. b) Il avait des yeux. c) Sa peau était épaisse.",
              hint: "Ajoutez des adjectifs avant ou après le nom, un complément introduit par « de » ou « à », et une comparaison avec « comme » ou « semblable à ». Vous pouvez aussi remplacer « avait » par un verbe plus précis.",
              solution: [
                "a) Exemple : « Le monstre montrait des dents jaunes et pointues comme des poignards. » Adjectifs : jaunes, pointues ; comparaison : comme des poignards ; verbe précis : montrait.",
                "b) Exemple : « Il roulait de petits yeux rouges de colère, qui brillaient comme des braises. » Adjectifs : petits, rouges ; complément : de colère ; comparaison : comme des braises.",
                "c) Exemple : « Sa peau de crapaud, épaisse et grise, était dure comme l'écorce d'un vieux chêne. » Complément du nom : de crapaud ; adjectifs : épaisse, grise ; comparaison : dure comme l'écorce.",
                "Toute réponse est juste si elle contient les trois outils demandés et si la phrase reste correcte et lisible.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez le portrait d'un monstre que vous inventez, en huit à dix lignes, comme s'il apparaissait dans un récit au passé. Contraintes : 1) votre monstre mélange au moins deux animaux ; 2) le portrait suit un ordre clair ; 3) il contient au moins deux comparaisons ; 4) il fait appel à trois sens ; 5) il se termine par un trait de caractère du monstre ; 6) les verbes de description sont à l'imparfait.",
              hint: "Faites d'abord un brouillon : dessinez rapidement votre monstre, notez ses parties de haut en bas, puis cherchez une comparaison pour deux d'entre elles. Relisez à la fin avec la liste des six contraintes.",
              solution: [
                "Étape 1, le brouillon : choisir les animaux (un ours et une chauve-souris, par exemple), l'ordre (de loin vers près, puis de la tête aux pieds) et le trait de caractère final (la timidité, pour surprendre).",
                "Étape 2, exemple de portrait : « Au sommet de la colline se dressait une silhouette énorme, aussi haute qu'un sapin. De près, on voyait une tête d'ours couverte d'un pelage noir et rêche, d'où sortaient deux oreilles pointues de chauve-souris. Ses yeux, ronds comme des soucoupes, clignaient sans cesse. De larges ailes de cuir pendaient sur son dos et claquaient au moindre souffle de vent. Ses pattes se terminaient par des griffes aussi longues que des couteaux de cuisine. Une odeur de champignon mouillé flottait autour de lui. Pourtant, quand il aperçut les enfants, ce géant timide se cacha derrière un rocher. »",
                "Étape 3, la vérification : deux animaux (ours, chauve-souris) ; un ordre (de loin vers près, puis de la tête aux pattes) ; des comparaisons (aussi haute qu'un sapin, ronds comme des soucoupes, aussi longues que des couteaux) ; trois sens (la vue, l'ouïe avec « claquaient », l'odorat avec « une odeur de champignon ») ; un trait de caractère (timide) ; des verbes de description à l'imparfait (se dressait, voyait, clignaient, pendaient...), le dernier verbe au passé simple marquant le retour à l'action.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les secrets du portrait.",
            statements: [
              { text: "Le portrait physique décrit l'apparence du personnage.", true: true, why: "Il décrit le corps, le visage, la voix, la démarche." },
              { text: "L'adjectif « cruel » appartient au portrait physique.", true: false, why: "La cruauté est un trait de caractère : elle relève du portrait moral." },
              { text: "Dans « des yeux comme des braises », « comme » est un outil de comparaison.", true: true, why: "Il relie le comparé (les yeux) au comparant (des braises)." },
              { text: "Dans un récit au passé, un portrait s'écrit surtout au passé simple.", true: false, why: "La description appartient à l'arrière-plan : elle s'écrit à l'imparfait." },
              { text: "Un portrait doit suivre un ordre pour que le lecteur se représente le monstre.", true: true, why: "Un ordre clair (de la tête aux pieds, par exemple) permet de construire l'image peu à peu." },
              { text: "Pour décrire un monstre, on ne peut faire appel qu'à la vue.", true: false, why: "L'ouïe, l'odorat et le toucher rendent le portrait plus vivant." },
              { text: "Dans « une gueule aux crocs noirs », « aux crocs noirs » complète le nom « gueule ».", true: true, why: "C'est un complément du nom, introduit par « aux » (à les)." },
            ],
          },
          quiz: [
            { q: "Quel élément appartient au portrait moral ?", options: ["Des cornes recourbées", "Une queue de dragon", "Un caractère jaloux", "Une peau verdâtre"], answer: 2, why: "La jalousie est un trait de caractère ; les cornes, la queue et la peau décrivent l'apparence." },
            { q: "Dans « Ses yeux brillaient comme des lanternes », quel est l'outil de comparaison ?", options: ["ses yeux", "brillaient", "comme", "des lanternes"], answer: 2, why: "« Comme » relie le comparé (ses yeux) au comparant (des lanternes)." },
            { q: "À quel temps écrit-on surtout un portrait dans un récit au passé ?", options: ["Au passé simple", "À l'imparfait", "Au futur simple", "Au passé composé"], answer: 1, why: "L'imparfait est le temps de la description et de l'arrière-plan." },
            { q: "Quelle expression fait appel à l'odorat ?", options: ["Une odeur de soufre", "Un grognement sourd", "Des écailles glacées", "Un regard perçant"], answer: 0, why: "L'odeur se perçoit avec le nez : c'est l'odorat. Le grognement relève de l'ouïe, les écailles glacées du toucher." },
            { q: "Quel ordre de description est le plus clair ?", options: ["Passer d'un détail à l'autre au hasard", "Commencer par les pieds puis le caractère, puis le nez", "Aller de la tête aux pieds", "Décrire uniquement ce qu'il mange"], answer: 2, why: "Un ordre régulier, comme de la tête aux pieds, permet au lecteur de construire l'image peu à peu." },
          ],
          trap: "Écrire une liste désordonnée de détails en répétant « il a » et « il est » (« il a des cornes, il est méchant, il a des griffes »), sans ordre, sans verbes variés et sans comparaison.",
          method: "Avant de rédiger, dessinez rapidement le monstre au brouillon et numérotez ses parties dans l'ordre où vous allez les décrire. Associez à chaque partie un adjectif ou une comparaison, puis relisez en traquant les « il a » pour les remplacer par des verbes précis.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'humanite-monstre',
          title: 'Le monstre est-il toujours celui que l\'on croit ?',
          minutes: 30,
          objectives: [
            "Comprendre qu'un personnage ne se réduit pas à son apparence.",
            "Identifier le point de vue à travers lequel un personnage monstrueux est présenté.",
            "Exprimer un avis sur un personnage et le justifier par des éléments du texte.",
          ],
          course: [
            {
              heading: "L'apparence ne dit pas tout : La Belle et la Bête",
              paragraphs: [
                "Dans le conte La Belle et la Bête, dans la version de Jeanne-Marie Leprince de Beaumont (1757), un marchand cueille une rose dans le jardin d'un château pour sa fille cadette, Belle. Le maître des lieux, une Bête effrayante, exige qu'il meure ou que l'une de ses filles vienne à sa place. Belle accepte de partir vivre au château.",
                "Peu à peu, Belle découvre que la Bête est bonne, douce et généreuse. Chaque soir, la Bête lui demande de l'épouser, et chaque soir Belle refuse, car elle ne voit en elle qu'un monstre. À la fin, Belle comprend qu'elle l'aime pour sa bonté : la Bête redevient alors un prince, qu'une méchante fée avait transformé.",
                "Dans ce conte, les vrais méchants ne sont pas ceux que l'on croit : ce sont les deux sœurs de Belle, belles mais jalouses et cruelles, qui la retiennent plus longtemps que promis, en espérant que la Bête, furieuse, la dévorera. À la fin, elles sont changées en statues. Le conte enseigne qu'il faut juger les êtres sur leur cœur et leurs actes, non sur leur apparence.",
              ],
              box: { label: "À retenir", text: "Un être peut avoir une apparence monstrueuse et un cœur généreux, comme la Bête ; à l'inverse, un être beau peut se conduire de façon monstrueuse, comme les sœurs de Belle." },
            },
            {
              heading: "Des monstres rejetés",
              paragraphs: [
                "Dans le roman Frankenstein, de l'Anglaise Mary Shelley (1818), le jeune savant Victor Frankenstein fabrique un être vivant. Horrifié par la laideur de sa créature, il l'abandonne. Partout où elle va, la créature est repoussée, frappée, chassée, alors qu'elle cherchait de l'affection. Seule et désespérée, elle devient violente et se venge de son créateur. Attention : Frankenstein est le nom du savant, pas celui de la créature, qui n'a pas de nom.",
                "Dans Notre-Dame de Paris, de Victor Hugo (1831), Quasimodo est le sonneur de cloches de la cathédrale. Bossu, borgne, devenu sourd à cause des cloches, il est moqué et maltraité par la foule. Pourtant, il se montre capable d'une grande tendresse et d'un grand dévouement envers la jeune Esmeralda, qui a été bonne avec lui.",
                "Ces œuvres posent une question : est-on monstrueux par nature, ou le devient-on parce que les autres nous rejettent ? Elles invitent le lecteur à se demander qui est le plus monstrueux : celui qui est différent, ou ceux qui le repoussent.",
              ],
            },
            {
              heading: "Le point de vue change le regard",
              paragraphs: [
                "Le point de vue, c'est le regard à travers lequel l'histoire est racontée. Si l'on suit un villageois terrifié, le géant qui s'approche paraît menaçant. Si l'on suit le géant lui-même, on découvre peut-être qu'il est perdu, qu'il a faim ou qu'il cherche simplement un ami.",
                "Beaucoup d'auteurs d'aujourd'hui racontent les vieilles histoires du point de vue du monstre : on entend alors sa solitude, sa peur ou sa tristesse. Le lecteur fait ainsi l'expérience de l'autre : il se met à la place de celui qui est différent. Il fait aussi l'expérience de soi : il se demande comment il réagit, lui, devant ce qui lui fait peur ou ce qui ne lui ressemble pas.",
              ],
              box: { label: "Définition", text: "Le point de vue est le regard à travers lequel les faits sont racontés : celui d'un personnage (« je » ou « il ») ou celui d'un narrateur qui sait tout. Changer de point de vue change l'image que le lecteur se fait d'un personnage." },
            },
            {
              heading: "Juger un personnage : l'apparence et les actes",
              paragraphs: [
                "Pour juger un personnage, il faut distinguer ce qu'il est en apparence et ce qu'il fait. Le mot « monstrueux » peut qualifier un corps (une créature monstrueuse) mais aussi un acte (un mensonge monstrueux, une jalousie monstrueuse). Un humain d'apparence ordinaire peut donc avoir un comportement monstrueux.",
                "Quand vous donnez votre avis sur un personnage, à l'oral ou à l'écrit, formulez-le clairement (« À mon avis, la Bête n'est pas un vrai monstre »), puis justifiez-le par un argument et un exemple précis tiré du texte (« car elle traite Belle avec bonté : elle lui offre un château et la laisse partir voir son père »).",
              ],
            },
          ],
          keyPoints: [
            "Un personnage ne se réduit pas à son apparence : il faut aussi regarder ses actes.",
            "La Belle et la Bête (Leprince de Beaumont, 1757) : la Bête est bonne, les sœurs de Belle sont jalouses et cruelles.",
            "Frankenstein (Mary Shelley, 1818) : Frankenstein est le savant ; sa créature sans nom devient violente parce qu'elle est rejetée.",
            "Quasimodo (Notre-Dame de Paris, Victor Hugo, 1831) : un être difforme, moqué, mais capable de tendresse.",
            "Le point de vue (le regard qui raconte) change l'image que l'on se fait du monstre.",
            "Pour juger un personnage : un avis clair + un argument + un exemple tiré du texte.",
          ],
          example: {
            statement: "Dans La Belle et la Bête, qui est le plus monstrueux : la Bête ou les sœurs de Belle ? Répondez par un court paragraphe argumenté.",
            solution: [
              "Distinguer apparence et actes. La Bête a une apparence monstrueuse, mais ses actes sont bons : elle accueille Belle dans son château, la traite avec respect et la laisse partir voir son père.",
              "Les sœurs ont une belle apparence, mais leurs actes sont mauvais : par jalousie, elles retiennent Belle plus longtemps que promis, en espérant que la Bête, furieuse, la dévorera.",
              "Formuler l'avis : ce sont les sœurs qui se conduisent de façon monstrueuse.",
              "Réponse rédigée : « Les sœurs de Belle sont plus monstrueuses que la Bête. En effet, la Bête a l'air effrayante, mais elle se montre généreuse et respectueuse envers Belle. Au contraire, les sœurs, malgré leur beauté, sont jalouses : elles retiennent Belle en espérant que la Bête, furieuse, la dévorera. Le conte montre ainsi que la monstruosité se trouve dans les actes et non dans l'apparence. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacun de ces personnages, dites si son apparence est monstrueuse, puis si son comportement est monstrueux, en justifiant en quelques mots : a) la Bête ; b) les sœurs de Belle ; c) l'ogre du Petit Poucet ; d) Quasimodo.",
              hint: "Faites deux colonnes : « apparence » et « comportement ». Un personnage peut être monstrueux dans une seule colonne, dans les deux ou dans aucune.",
              solution: [
                "a) La Bête : apparence monstrueuse (une bête effrayante) ; comportement bon (elle est douce et généreuse avec Belle).",
                "b) Les sœurs de Belle : apparence non monstrueuse (elles sont belles) ; comportement monstrueux (jalouses, elles retiennent Belle en espérant que la Bête la dévorera).",
                "c) L'ogre : apparence monstrueuse (un géant) et comportement monstrueux (il veut manger des enfants).",
                "d) Quasimodo : apparence jugée monstrueuse (bossu, borgne) ; comportement bon (il est dévoué à Esmeralda). Ce sont plutôt ceux qui se moquent de lui qui se conduisent mal.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte, écrit pour l'exercice : « Au bord du village vivait un géant au visage couvert de cicatrices. Les enfants lui lançaient des pierres et les parents fermaient leurs volets quand il passait. Un jour de crue, une petite fille tomba dans la rivière. Les villageois criaient sur la berge, mais personne n'osait plonger. Le géant entra dans l'eau glacée, saisit l'enfant et la déposa doucement dans l'herbe. Puis il repartit sans un mot. » 1. Comment les villageois voient-ils le géant ? 2. Qu'est-ce qui montre que ce regard est injuste ? 3. Qui se conduit de façon monstrueuse au début du texte ?",
              hint: "Relevez les actions des villageois au début, puis l'action du géant pendant la crue. Comparez-les.",
              solution: [
                "1. Les villageois voient le géant comme un monstre à cause de son apparence (« visage couvert de cicatrices ») : les enfants lui lancent des pierres et les parents ferment leurs volets.",
                "2. Le géant sauve la petite fille alors que personne n'ose plonger. Il agit avec courage et douceur (« la déposa doucement »), et il repart sans rien demander : il est bon et modeste.",
                "3. Au début, ce sont les villageois qui se conduisent mal : ils rejettent et blessent un être qui ne leur a fait aucun mal. Le texte montre que le monstre n'est pas celui que l'on croit.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Réécrivez la scène du sauvetage de l'exercice précédent du point de vue du géant, à la 1re personne (« je »), en six à huit lignes. Votre texte doit faire comprendre ce que ressent le géant quand on lui lance des pierres, puis quand il voit la petite fille tomber à l'eau. Écrivez au passé, avec l'imparfait et le passé simple.",
              hint: "Mettez-vous à la place du géant : que pense-t-il des villageois ? a-t-il peur, est-il triste, en colère ? Employez des verbes de sentiment (je ressentais, je compris, j'hésitai) et gardez l'imparfait pour ce qui dure et le passé simple pour les actions.",
              solution: [
                "Étape 1 : choisir les sentiments du géant. Par exemple : la tristesse d'être rejeté, puis la peur pour l'enfant, enfin le soulagement.",
                "Étape 2 : passer à la 1re personne et garder les faits de l'histoire (les pierres, la crue, le plongeon, le départ silencieux).",
                "Étape 3, exemple de texte : « Chaque fois que je traversais le village, les pierres pleuvaient sur mon dos. Je ne répondais jamais : je savais que mon visage leur faisait peur. Ce jour-là, la rivière grondait. Soudain, j'entendis un cri et je vis une petite robe rouge emportée par le courant. Je n'hésitai pas : j'entrai dans l'eau glacée et je saisis l'enfant. Elle tremblait contre moi, aussi légère qu'un oiseau. Je la posai dans l'herbe et je repartis vite, avant qu'elle ne voie mon visage et se mette à pleurer. »",
                "Étape 4, vérification : le texte est à la 1re personne ; il exprime les sentiments du géant (résignation, peur pour l'enfant, crainte d'effrayer) ; l'imparfait décrit ce qui dure (traversais, pleuvaient, grondait) et le passé simple les actions (entendis, vis, entrai, saisis, posai, repartis).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes du conte La Belle et la Bête (version de Leprince de Beaumont).",
            items: [
              "Le père de Belle cueille une rose dans le jardin de la Bête.",
              "La Bête exige qu'il meure ou que l'une de ses filles vienne à sa place.",
              "Belle s'installe au château et découvre la bonté de la Bête.",
              "Belle obtient la permission d'aller voir sa famille et promet de revenir.",
              "Retenue par ses sœurs, elle rêve que la Bête se meurt et revient au château.",
              "Belle déclare qu'elle veut épouser la Bête, qui redevient un prince.",
            ],
          },
          quiz: [
            { q: "Dans le roman de Mary Shelley, qui s'appelle Frankenstein ?", options: ["La créature fabriquée", "Le savant Victor", "Le chef du village", "Le chien du savant"], answer: 1, why: "Victor Frankenstein est le savant qui fabrique la créature ; celle-ci n'a pas de nom." },
            { q: "Pourquoi les sœurs de Belle sont-elles punies à la fin du conte ?", options: ["Elles sont jalouses et méchantes", "Elles ont tué la Bête", "Elles ont volé la rose du jardin", "Elles refusent de se marier"], answer: 0, why: "Par jalousie, elles ont retenu Belle en espérant que la Bête, furieuse, la dévore : elles sont changées en statues." },
            { q: "Qui est Quasimodo dans Notre-Dame de Paris de Victor Hugo ?", options: ["Un loup-garou de Paris la nuit", "Un roi cruel du Moyen Âge", "Le sonneur de cloches"], answer: 2, why: "Quasimodo est le sonneur de cloches de Notre-Dame : bossu et moqué, il est pourtant capable de tendresse." },
            { q: "Le point de vue d'un récit, c'est :", options: ["le lieu où se passe toute l'histoire", "le regard qui nous montre les faits", "la morale donnée à la fin du récit"], answer: 1, why: "Le point de vue est le regard à travers lequel les faits sont racontés ; il change l'image que l'on se fait des personnages." },
            { q: "Que montre l'histoire de la créature de Frankenstein ?", options: ["Que la science est toujours mauvaise", "Que les monstres n'existent pas", "Que la laideur rend méchant", "Que le rejet peut rendre violent"], answer: 3, why: "La créature cherchait de l'affection ; c'est le rejet de tous qui la rend violente, et non sa laideur elle-même." },
          ],
          trap: "Juger un personnage seulement sur son apparence, ou confondre Victor Frankenstein, le savant, avec la créature sans nom qu'il a fabriquée.",
          method: "Pour juger un personnage, faites deux colonnes au brouillon : « ce qu'il paraît » (son apparence) et « ce qu'il fait » (ses actes). Appuyez votre avis sur la colonne des actes, avec au moins un exemple précis tiré du texte.",
        },
      ],
    },
    /* ================================================================== */
    /* LE GROUPE NOMINAL ET SES ACCORDS                                     */
    /* ================================================================== */
    {
      id: 'groupe-nominal',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'nom-determinant',
          title: 'Le nom et le déterminant',
          minutes: 30,
          objectives: [
            "Identifier les noms communs et les noms propres dans une phrase.",
            "Reconnaître le genre et le nombre d'un nom.",
            "Identifier les déterminants : articles, déterminants possessifs et démonstratifs.",
            "Distinguer les homophones « ces » et « ses ».",
          ],
          course: [
            {
              heading: "Le nom commun et le nom propre",
              paragraphs: [
                "Le nom sert à désigner un être (une fille, un chien), une chose (une table, un vélo), un lieu (une ville), mais aussi une idée ou un sentiment qu'on ne peut pas toucher (le courage, la peur, l'amitié). Pour reconnaître un nom commun, essayez de placer « un », « une » ou « le » devant : « un courage » se dit, « un joli » ne se dit pas. Courage est un nom, joli n'en est pas un.",
                "Le nom propre désigne un être ou un lieu unique : une personne (Léa, Victor Hugo), un animal (Médor), une ville (Marseille), un pays (la France), un fleuve (la Loire). Il commence toujours par une majuscule. Les prénoms et les noms de ville s'emploient le plus souvent sans déterminant.",
              ],
              box: { label: "Définition", text: "Le nom commun désigne un être, une chose ou une idée de façon générale (un chien, la peur). Le nom propre désigne un être ou un lieu unique et commence par une majuscule (Léa, Marseille)." },
            },
            {
              heading: "Le genre et le nombre du nom",
              paragraphs: [
                "Chaque nom a un genre : il est masculin (un bureau, le soleil) ou féminin (une table, la lune). Le genre d'un nom de chose ne s'explique pas, il s'apprend : on dit « un arbre » mais « une fleur ». En cas de doute, le dictionnaire l'indique par n.m. (nom masculin) ou n.f. (nom féminin). Pour les êtres vivants, le nom change souvent de forme : un lion, une lionne ; un acteur, une actrice.",
                "Le nom a aussi un nombre : il est au singulier quand il désigne un seul élément (un chat) et au pluriel quand il en désigne plusieurs (des chats). Au pluriel, il prend le plus souvent un s, qui ne s'entend pas : c'est le déterminant qui permet souvent de savoir, à l'oral, si l'on parle d'un ou de plusieurs éléments.",
              ],
            },
            {
              heading: "Le déterminant et les articles",
              paragraphs: [
                "Le déterminant est un petit mot placé avant le nom, qu'il introduit. Il indique le genre et le nombre du nom : « la » annonce un nom féminin singulier, « les » un nom pluriel. Un nom commun est presque toujours précédé d'un déterminant. Le déterminant et le nom forment ensemble le groupe nominal minimal : le chat, une idée, mes amis.",
                "Les articles sont les déterminants les plus fréquents. Les articles définis (le, la, l', les) présentent un élément connu ou précis : « le chat de Léa ». Les articles indéfinis (un, une, des) présentent un élément non précisé : « un chat miaule dehors ». Les articles partitifs (du, de la, de l') présentent une quantité qu'on ne compte pas : « du pain », « de la confiture », « de l'eau ».",
                "Attention aux articles définis contractés : « à » et « de » se soudent avec « le » et « les ». À + le donne au (je vais au marché) ; à + les donne aux (je parle aux élèves) ; de + le donne du (la queue du chat) ; de + les donne des (le bruit des vagues). Pour reconnaître un « du » partitif, remplacez-le par « un peu de » : « je mange du pain » devient « je mange un peu de pain ». Si c'est impossible, c'est un « du » contracté.",
              ],
              box: { label: "Repère", text: "Articles définis : le, la, l', les. Articles indéfinis : un, une, des. Articles partitifs : du, de la, de l'. Articles définis contractés : au (à + le), aux (à + les), du (de + le), des (de + les)." },
            },
            {
              heading: "Les déterminants possessifs, démonstratifs et les autres",
              paragraphs: [
                "Le déterminant possessif indique à qui appartient l'être ou la chose : mon, ton, son, ma, ta, sa, mes, tes, ses, notre, votre, leur, nos, vos, leurs. « Leur » s'emploie quand il y a plusieurs possesseurs et une seule chose (leur maison), « leurs » quand il y a plusieurs choses (leurs maisons). Devant un nom féminin qui commence par une voyelle, on emploie mon, ton, son pour faciliter la prononciation : mon amie, son épée.",
                "Le déterminant démonstratif sert à montrer ou à reprendre ce dont on a déjà parlé : ce, cet, cette, ces. On emploie « cet » devant un nom masculin qui commence par une voyelle ou un h muet : ce chêne, mais cet arbre, cet homme.",
                "Ne confondez pas « ses » et « ces ». « Ses » est possessif : « Léo range ses affaires » (les affaires de Léo) ; au singulier, il devient son ou sa. « Ces » est démonstratif : « Regardez ces nuages » (on les montre) ; au singulier, il devient ce, cet ou cette.",
                "Il existe d'autres déterminants : les numéraux, qui indiquent un nombre précis (deux, trois, cent), les indéfinis comme chaque, plusieurs, quelques, aucun, et les interrogatifs ou exclamatifs : quel, quelle, quels, quelles (« Quel livre lisez-vous ? », « Quelle belle journée ! »).",
              ],
              box: { label: "Règle", text: "Ses ou ces ? Mettez le groupe au singulier. Son ou sa : écrivez ses (possessif). Ce, cet ou cette : écrivez ces (démonstratif)." },
            },
          ],
          keyPoints: [
            "Le nom commun accepte un déterminant (un courage) ; le nom propre désigne un être ou un lieu unique et prend une majuscule.",
            "Chaque nom a un genre (masculin ou féminin) et un nombre (singulier ou pluriel).",
            "Le déterminant introduit le nom et indique son genre et son nombre ; déterminant + nom = groupe nominal minimal.",
            "Articles : définis (le, la, l', les), indéfinis (un, une, des), partitifs (du, de la, de l') ; contractés : au, aux, du, des.",
            "Possessifs : mon, ta, ses, leur... Démonstratifs : ce, cet, cette, ces.",
            "Ses ou ces ? Au singulier : son ou sa donne ses ; ce ou cette donne ces.",
          ],
          example: {
            statement: "Relevez et classez les déterminants de cette phrase : « Ce matin, Léa a donné du pain aux canards de l'étang et une pomme à son frère. »",
            solution: [
              "Repérer les noms communs : matin, pain, canards, étang, pomme, frère. Léa est un nom propre, sans déterminant.",
              "« Ce » (ce matin) : déterminant démonstratif, masculin singulier.",
              "« du » (du pain) : on peut dire « un peu de pain », c'est donc un article partitif.",
              "« aux » (aux canards) : article défini contracté, à + les. « l' » (de l'étang) : article défini élidé devant une voyelle ; « de » est ici une préposition.",
              "« une » (une pomme) : article indéfini, féminin singulier. « son » (son frère) : déterminant possessif, masculin singulier.",
              "Réponse : six déterminants : ce (démonstratif), du (article partitif), aux (article défini contracté), l' (article défini), une (article indéfini), son (possessif).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Relevez les noms de cette phrase et dites s'ils sont communs ou propres. Pour les noms communs, indiquez leur genre et leur nombre : « Le petit Nathan regarde les étoiles avec sa grand-mère depuis la terrasse de leur maison à Lyon. »",
              hint: "Un nom commun accepte un déterminant devant lui ; un nom propre commence par une majuscule. Attention : « petit » n'est pas un nom.",
              solution: [
                "Nathan : nom propre (un prénom). Lyon : nom propre (un nom de ville).",
                "étoiles : nom commun, féminin pluriel (les étoiles).",
                "grand-mère : nom commun, féminin singulier (sa grand-mère).",
                "terrasse : nom commun, féminin singulier (la terrasse). maison : nom commun, féminin singulier (leur maison).",
                "« petit » n'est pas un nom : il dit comment est Nathan, c'est un adjectif.",
              ],
            },
            {
              level: 2,
              statement: "Relevez les onze déterminants de ce texte, écrit pour l'exercice, et donnez la classe de chacun : « Cet après-midi, nous sommes allés au parc avec mes cousins. Chaque enfant avait apporté un ballon ou des billes. Ma tante a sorti du chocolat et de la limonade de son sac. Quelle belle journée ! »",
              hint: "Cherchez les petits mots placés juste avant un nom (parfois un adjectif s'intercale, comme dans « Quelle belle journée »). Pour « du » et « de la », essayez de les remplacer par « un peu de ».",
              solution: [
                "Cet (cet après-midi) : déterminant démonstratif. au (au parc) : article défini contracté, à + le. mes (mes cousins) : déterminant possessif.",
                "Chaque (chaque enfant) : déterminant indéfini. un (un ballon) : article indéfini. des (des billes) : article indéfini, pluriel de « une bille ».",
                "Ma (ma tante) : déterminant possessif. du (du chocolat) : article partitif, car on peut dire « un peu de chocolat ». de la (de la limonade) : article partitif.",
                "son (son sac) : déterminant possessif ; « de », juste avant, est une préposition. Quelle (quelle belle journée) : déterminant exclamatif.",
                "Total : onze déterminants (Cet, au, mes, Chaque, un, des, Ma, du, de la, son, Quelle).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Choisissez le déterminant qui convient et justifiez : a) Le chevalier nettoie (ces / ses) armes avant le tournoi. b) Regardez (ces / ses) nuages noirs qui arrivent ! c) (Ce / Cet / Cette) arbre a plus de cent ans. d) Je vous présente (ma / mon) amie Inès. e) Nous parlons (du / de le) voyage. f) Le chat boit (du / de l') eau. g) Dans « J'ai mangé du gâteau et j'ai parlé du film », lequel des deux « du » est un article partitif ?",
              hint: "Pour « ces » et « ses », mettez le groupe au singulier. Pour « cet », regardez la première lettre du nom. Pour la question g, essayez de remplacer chaque « du » par « un peu de ».",
              solution: [
                "a) ses : il s'agit des armes du chevalier ; au singulier, on dirait « son arme ».",
                "b) ces : on montre les nuages ; au singulier, on dirait « ce nuage ».",
                "c) Cet : arbre est un nom masculin qui commence par une voyelle.",
                "d) mon : devant un nom féminin qui commence par une voyelle, on emploie mon pour éviter la rencontre de deux voyelles (mon amie).",
                "e) du : « de le » se contracte toujours en « du » (on parle de quelque chose : de + le voyage).",
                "f) de l' : article partitif devant un nom qui commence par une voyelle (une quantité d'eau qu'on ne compte pas).",
                "g) « du gâteau » peut devenir « un peu de gâteau » : c'est l'article partitif. « parlé du film » ne peut pas devenir « parlé un peu de film » : c'est l'article contracté (de + le film).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque déterminant souligné à sa classe.",
            pairs: [
              { left: "la (la lune)", right: "Article défini" },
              { left: "une (une étoile)", right: "Article indéfini" },
              { left: "de la (de la confiture)", right: "Article partitif" },
              { left: "au (au marché)", right: "Article défini contracté (à + le)" },
              { left: "leurs (leurs vélos)", right: "Déterminant possessif" },
              { left: "cet (cet oiseau)", right: "Déterminant démonstratif" },
            ],
          },
          quiz: [
            { q: "Quel mot est un déterminant possessif ?", options: ["leurs", "cette", "des", "chaque"], answer: 0, why: "« Leurs » indique à qui appartiennent les choses (leurs vélos) : c'est un possessif. « Cette » est démonstratif, « des » est un article, « chaque » un indéfini." },
            { q: "Dans « la queue du chat », que représente « du » ?", options: ["un article partitif (un peu de)", "l'article contracté de + le", "un déterminant possessif"], answer: 1, why: "On ne peut pas dire « la queue un peu de chat » : « du » est ici la contraction de « de + le »." },
            { q: "Quel déterminant convient : « ... oiseau chante » ?", options: ["Ce", "Cet", "Cette", "Ces"], answer: 1, why: "Oiseau est un nom masculin singulier qui commence par une voyelle : on écrit cet oiseau." },
            { q: "Quels sont le genre et le nombre de « des fleurs » ?", options: ["Masculin singulier", "Masculin pluriel", "Féminin singulier", "Féminin pluriel"], answer: 3, why: "On dit « une fleur » : le nom est féminin. Le déterminant « des » indique le pluriel." },
            { q: "Quel mot est un nom commun ?", options: ["Marseille", "joyeux", "courage", "doucement"], answer: 2, why: "On peut dire « le courage » : c'est un nom commun. Marseille est un nom propre, joyeux un adjectif, doucement un adverbe." },
          ],
          trap: "Confondre « ces » (démonstratif : on montre) et « ses » (possessif : qui appartient à quelqu'un), ou prendre le « du » et le « des » contractés (de + le, de + les) pour des articles partitif ou indéfini.",
          method: "Pour choisir entre « ces » et « ses », mettez le groupe nominal au singulier : si vous obtenez ce, cet ou cette, écrivez « ces » ; si vous obtenez son ou sa, écrivez « ses ». Pour un « du », essayez « un peu de » : si cela marche, c'est un partitif.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'expansions-nom',
          title: 'Enrichir le nom : adjectif et complément du nom',
          minutes: 30,
          objectives: [
            "Identifier le nom noyau d'un groupe nominal.",
            "Repérer les expansions du nom : l'adjectif épithète et le complément du nom.",
            "Enrichir un groupe nominal pour rendre une description plus précise.",
          ],
          course: [
            {
              heading: "Le groupe nominal et son nom noyau",
              paragraphs: [
                "Un groupe nominal (GN) est un groupe de mots organisé autour d'un nom, qu'on appelle le nom noyau. Le groupe nominal minimal contient seulement un déterminant et un nom : « un chat ». Le groupe nominal étendu contient d'autres mots qui donnent des précisions sur le nom : « un petit chat noir de gouttière ».",
                "Les mots ajoutés autour du nom noyau sont les expansions du nom. On peut les supprimer sans que la phrase devienne incorrecte : « Un petit chat noir de gouttière dort sur le mur » devient « Un chat dort sur le mur ». La phrase est moins précise, mais elle reste correcte. C'est le test de suppression : ce qui reste est le déterminant et le nom noyau.",
              ],
              box: { label: "Définition", text: "Le groupe nominal est organisé autour d'un nom noyau. GN minimal : déterminant + nom (un chat). GN étendu : déterminant + nom + expansions (un petit chat noir de gouttière). Les expansions peuvent être supprimées." },
            },
            {
              heading: "L'adjectif épithète",
              paragraphs: [
                "L'adjectif qualificatif précise une qualité du nom : sa couleur, sa taille, sa forme, son âge, son caractère. Quand il est placé directement à côté du nom, avant ou après lui, on dit qu'il est épithète : « un vieux château », « une porte grinçante ». Un même nom peut avoir plusieurs adjectifs épithètes : « une grande maison abandonnée », « un ciel gris et froid ».",
                "Ne confondez pas l'adjectif épithète et l'adjectif attribut du sujet. Dans « Le château est vieux », l'adjectif « vieux » est séparé du nom par le verbe être : il est attribut du sujet. Dans « Le vieux château domine la vallée », il est collé au nom : il est épithète.",
                "La place de l'adjectif peut parfois changer le sens : « un grand homme » est un homme célèbre et admiré, « un homme grand » est un homme de grande taille. De même, « un ancien château » a été un château autrefois mais sert aujourd'hui à autre chose, alors qu'« un château ancien » est un château très vieux.",
              ],
              box: { label: "Règle", text: "L'adjectif épithète est placé directement avant ou après le nom qu'il qualifie (une porte grinçante). Séparé du sujet par un verbe comme être, l'adjectif est attribut du sujet (la porte est grinçante)." },
            },
            {
              heading: "Le complément du nom",
              paragraphs: [
                "Le complément du nom est un groupe de mots introduit par une préposition (de, à, en, pour, sans, avec...) qui complète le nom noyau. Il se compose le plus souvent d'un nom ou d'un groupe nominal : « une tasse de thé », « un moulin à vent », « une statue en marbre », « un sac sans fond », « le vélo de Léa ». Il peut aussi être un verbe à l'infinitif (« une machine à laver ») ou un adverbe (« les gens d'ici »).",
                "Le complément du nom apporte toutes sortes de précisions : la matière (une table en bois), le contenu (un verre d'eau), l'usage (une cuillère à soupe), l'appartenance (le cartable de Tom), une caractéristique (une fille aux cheveux roux). Attention : « au » et « aux » contiennent la préposition « à » (au = à + le, aux = à + les).",
                "Le complément du nom peut lui-même contenir un nom avec un adjectif : dans « une fille aux cheveux roux », le complément du nom est « aux cheveux roux », et à l'intérieur, l'adjectif « roux » qualifie « cheveux ».",
              ],
              box: { label: "Définition", text: "Le complément du nom est un groupe introduit par une préposition (de, à, en, pour, sans...) qui complète le nom noyau : une tasse de thé, un moulin à vent, une statue en marbre." },
            },
            {
              heading: "Enrichir les noms pour mieux décrire",
              paragraphs: [
                "Les expansions du nom sont très utiles pour écrire une description ou un portrait : elles rendent les noms plus précis et aident le lecteur à imaginer. Comparez « Un monstre sortit de la grotte » et « Un monstre gigantesque aux écailles vertes sortit de la grotte obscure ». On peut combiner adjectifs et compléments du nom, mais sans trop en accumuler : un groupe nominal trop chargé devient difficile à lire.",
                "Vous rencontrerez aussi des noms complétés par un groupe qui commence par « qui » : « un dragon qui crache du feu ». C'est une autre expansion du nom, que vous étudierez plus en détail par la suite. Cette année, retenez surtout l'adjectif épithète et le complément du nom.",
              ],
              box: { label: "À retenir", text: "Deux expansions du nom à connaître : l'adjectif épithète (un monstre gigantesque) et le complément du nom introduit par une préposition (un monstre aux écailles vertes)." },
            },
          ],
          keyPoints: [
            "GN minimal : déterminant + nom (un chat). GN étendu : avec des expansions (un petit chat noir de gouttière).",
            "Le nom noyau est le nom principal du GN ; les expansions peuvent être supprimées (test de suppression).",
            "Adjectif épithète : placé directement avant ou après le nom (un vieux château, une porte grinçante).",
            "Adjectif attribut : séparé du sujet par le verbe être (le château est vieux).",
            "Complément du nom : introduit par une préposition (de, à, en, sans...) : une tasse de thé, un moulin à vent.",
          ],
          example: {
            statement: "Analysez le groupe nominal « une vieille horloge en bois aux aiguilles dorées » : donnez le nom noyau et la nature de chaque expansion.",
            solution: [
              "Test de suppression : on peut réduire le groupe à « une horloge ». Le déterminant est « une » et le nom noyau est « horloge ».",
              "« vieille » est un adjectif qualificatif placé juste avant le nom : c'est un adjectif épithète.",
              "« en bois » est introduit par la préposition « en » : c'est un complément du nom (il indique la matière).",
              "« aux aiguilles dorées » est introduit par « aux » (à + les) : c'est un complément du nom (il indique une caractéristique). À l'intérieur, « dorées » est un adjectif épithète du nom « aiguilles ».",
              "Réponse : nom noyau horloge ; expansions : vieille (adjectif épithète), en bois et aux aiguilles dorées (compléments du nom).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque groupe nominal, donnez le nom noyau, puis relevez les expansions en précisant s'il s'agit d'un adjectif épithète ou d'un complément du nom : a) un gâteau au chocolat ; b) la petite maison blanche ; c) une robe en soie ; d) le chien de mon voisin ; e) une grosse valise sans roulettes.",
              hint: "Supprimez tout ce qui peut l'être : il reste le déterminant et le nom noyau. Si l'expansion commence par une préposition (de, à, au, en, sans), c'est un complément du nom.",
              solution: [
                "a) Noyau : gâteau. « au chocolat » : complément du nom (au = à + le).",
                "b) Noyau : maison. « petite » et « blanche » : adjectifs épithètes.",
                "c) Noyau : robe. « en soie » : complément du nom (la matière).",
                "d) Noyau : chien. « de mon voisin » : complément du nom (l'appartenance). Attention : « voisin » n'est pas le noyau, il fait partie du complément.",
                "e) Noyau : valise. « grosse » : adjectif épithète ; « sans roulettes » : complément du nom.",
              ],
            },
            {
              level: 2,
              statement: "Enrichissez chaque groupe nominal avec les expansions demandées : a) un dragon (deux adjectifs épithètes) ; b) une épée (un complément du nom qui indique la matière) ; c) un château (un adjectif épithète et un complément du nom) ; d) des yeux (un adjectif épithète et un complément du nom qui contient une comparaison avec un animal).",
              hint: "Pour le complément du nom, commencez par une préposition : en, de, à, aux. Pour la matière, pensez au métal, au bois, à la pierre. Pour la question d, pensez à l'expression « des yeux de... ».",
              solution: [
                "a) Exemple : « un énorme dragon rouge ». Adjectifs épithètes : énorme (avant le nom) et rouge (après le nom).",
                "b) Exemple : « une épée en acier » ou « une épée d'or ». Le complément du nom indique la matière.",
                "c) Exemple : « un château sombre aux tours pointues ». Adjectif épithète : sombre ; complément du nom : aux tours pointues.",
                "d) Exemple : « des yeux jaunes de chat ». Adjectif épithète : jaunes ; complément du nom : de chat, qui compare ces yeux à ceux d'un chat.",
                "Toute réponse est juste si elle respecte les expansions demandées et si le groupe nominal est correctement accordé.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce texte, écrit pour l'exercice : « Le vieux pêcheur du village regardait la mer immense. Le ciel était gris et lourd. Soudain, une petite voile blanche apparut près d'un rocher noir. Les enfants du port couraient vers la jetée de pierre. » a) Relevez six groupes nominaux étendus ; pour chacun, donnez le nom noyau et la nature des expansions. b) Dans la deuxième phrase, « gris » et « lourd » sont-ils épithètes ? Justifiez. c) Réécrivez la première phrase en ne gardant que des groupes nominaux minimaux, puis dites ce que le lecteur perd.",
              hint: "Pour la question a, cherchez les noms entourés d'adjectifs ou suivis d'une préposition. Pour la question b, regardez si l'adjectif touche le nom ou s'il en est séparé par un verbe.",
              solution: [
                "a) « Le vieux pêcheur du village » : noyau pêcheur ; vieux (épithète), du village (complément du nom). « la mer immense » : noyau mer ; immense (épithète).",
                "a) suite : « une petite voile blanche » : noyau voile ; petite et blanche (épithètes). « un rocher noir » : noyau rocher ; noir (épithète).",
                "a) suite : « Les enfants du port » : noyau enfants ; du port (complément du nom). « la jetée de pierre » : noyau jetée ; de pierre (complément du nom, la matière).",
                "b) Non : « gris » et « lourd » sont séparés du nom « ciel » par le verbe « était ». Ce sont des attributs du sujet, pas des épithètes.",
                "c) Avec des groupes nominaux minimaux : « Le pêcheur regardait la mer. » La phrase reste correcte, mais le lecteur perd des informations : l'âge du pêcheur (vieux), son origine (du village) et l'étendue de la mer (immense). Les expansions rendaient la scène plus précise et plus facile à imaginer.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces groupes nominaux dans l'ordre, du plus simple au plus enrichi : chaque étape ajoute une expansion.",
            items: [
              "un dragon",
              "un dragon rouge",
              "un énorme dragon rouge",
              "un énorme dragon rouge aux ailes de cuir",
              "un énorme dragon rouge aux ailes de cuir et aux yeux d'or",
            ],
          },
          quiz: [
            { q: "Quel est le nom noyau du groupe « la clé rouillée du vieux coffre » ?", options: ["clé", "rouillée", "coffre", "vieux"], answer: 0, why: "En supprimant les expansions, il reste « la clé » : clé est le noyau. « du vieux coffre » est un complément du nom." },
            { q: "Dans « une tasse de thé », quelle est la nature de « de thé » ?", options: ["un adjectif épithète", "un complément du nom", "un déterminant", "un verbe"], answer: 1, why: "« de thé » est introduit par la préposition « de » et complète le nom « tasse » : c'est un complément du nom." },
            { q: "Dans « Le ciel est bleu », quelle est la fonction de « bleu » ?", options: ["épithète du nom ciel", "complément du nom ciel", "attribut du sujet ciel"], answer: 2, why: "« bleu » est séparé du nom « ciel » par le verbe être : il est attribut du sujet, et non épithète." },
            { q: "Quel groupe nominal contient un complément du nom ?", options: ["une belle journée", "un ciel très bleu", "les petits enfants", "un moulin à vent"], answer: 3, why: "« à vent » est introduit par la préposition « à » : c'est un complément du nom. Les autres groupes contiennent des adjectifs." },
            { q: "À quoi sert le test de suppression ?", options: ["Trouver le verbe conjugué de la phrase", "Mettre tout le groupe nominal au pluriel", "Repérer les expansions du nom"], answer: 2, why: "Les expansions peuvent être supprimées sans rendre la phrase incorrecte : ce qui reste, c'est le déterminant et le nom noyau." },
          ],
          trap: "Prendre le nom du complément pour le nom noyau (dans « le chien de mon voisin », le noyau est « chien », pas « voisin »), ou appeler épithète un adjectif séparé du nom par le verbe être, qui est en réalité attribut du sujet.",
          method: "Pour analyser un groupe nominal, supprimez d'abord tout ce qui peut l'être : il reste le déterminant et le nom noyau. Puis classez chaque mot supprimé : un adjectif collé au nom est épithète ; un groupe qui commence par une préposition est complément du nom.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'accords-gn',
          title: 'Accorder dans le groupe nominal : genre et nombre',
          minutes: 35,
          objectives: [
            "Accorder le déterminant et l'adjectif avec le nom en genre et en nombre.",
            "Former le féminin des noms et des adjectifs.",
            "Former le pluriel des noms et des adjectifs, y compris les pluriels particuliers.",
            "Vérifier les accords dans un texte en identifiant le nom noyau.",
          ],
          course: [
            {
              heading: "La chaîne d'accord dans le groupe nominal",
              paragraphs: [
                "Dans le groupe nominal, c'est le nom noyau qui commande. Il donne son genre (masculin ou féminin) et son nombre (singulier ou pluriel) au déterminant et aux adjectifs qui l'accompagnent : on dit qu'ils s'accordent avec lui. « Un petit chat gris » devient « une petite chatte grise » au féminin, et « des petites chattes grises » au féminin pluriel.",
                "À l'oral, la plupart des marques d'accord ne s'entendent pas : « des petites chattes grises » se prononce presque comme « une petite chatte grise ». Il faut donc réfléchir pour écrire. Le déterminant est un bon indice : « les », « des », « mes », « ces » annoncent un pluriel ; « la », « une », « cette » annoncent un féminin.",
                "L'adjectif s'accorde avec le nom qu'il qualifie, même quand il en est un peu éloigné. Dans « une boîte de crayons neufs », ce sont les crayons qui sont neufs : l'adjectif s'accorde avec « crayons » (masculin pluriel). Le complément du nom, lui, garde son propre nombre selon le sens : « des pots de confiture », « un panier de pommes ».",
              ],
              box: { label: "Règle", text: "Dans le groupe nominal, le déterminant et l'adjectif s'accordent en genre et en nombre avec le nom qu'ils accompagnent : une petite chatte grise, des petits chats gris." },
            },
            {
              heading: "Former le féminin",
              paragraphs: [
                "En général, on forme le féminin d'un nom ou d'un adjectif en ajoutant un e : un ami, une amie ; grand, grande ; joli, jolie. Si le mot se termine déjà par un e, il ne change pas : un élève, une élève ; rapide, jeune, calme.",
                "Certaines terminaisons changent : -er donne -ère (léger, légère ; boulanger, boulangère) ; -en et -on doublent le n (ancien, ancienne ; bon, bonne ; lion, lionne) ; -el double le l (cruel, cruelle) ; -et donne en général -ette (muet, muette), sauf quelques adjectifs comme complet, complète ; inquiet, inquiète ; secret, secrète ; -eux donne -euse (heureux, heureuse) ; -f donne -ve (neuf, neuve ; sportif, sportive).",
                "Les noms en -eur font souvent -euse (un chanteur, une chanteuse) ou -rice (un acteur, une actrice). Quelques adjectifs sont irréguliers et s'apprennent par cœur : beau, belle ; nouveau, nouvelle ; vieux, vieille ; blanc, blanche ; doux, douce ; long, longue ; gentil, gentille ; fou, folle. Enfin, certains noms ont un mot différent au féminin : un homme, une femme ; un garçon, une fille ; un oncle, une tante.",
              ],
              box: { label: "Règle", text: "Féminin : on ajoute un e (grand, grande). Cas particuliers : -er/-ère, -en/-enne, -on/-onne, -el/-elle, -et/-ette, -eux/-euse, -f/-ve, -eur/-euse ou -rice. Irréguliers : belle, nouvelle, vieille, blanche, douce, longue." },
            },
            {
              heading: "Former le pluriel",
              paragraphs: [
                "En général, on forme le pluriel en ajoutant un s : un livre, des livres ; grand, grands. Les mots terminés par s, x ou z ne changent pas : une souris, des souris ; un prix, des prix ; un nez, des nez ; un chat gris, des chats gris ; un enfant heureux, des enfants heureux.",
                "Les mots en -au, -eau et -eu prennent un x : un tuyau, des tuyaux ; un bateau, des bateaux ; un jeu, des jeux ; beau, beaux. Exceptions : des pneus, des landaus, et l'adjectif bleu (des yeux bleus). Les mots en -al font -aux : un cheval, des chevaux ; loyal, loyaux. Exceptions : des bals, des carnavals, des chacals, des festivals, des récitals, des régals, et les adjectifs banal, fatal, natal, naval (banals, navals...).",
                "Les mots en -ou prennent un s (des clous, des trous), sauf sept noms qui prennent un x : bijou, caillou, chou, genou, hibou, joujou, pou. Les mots en -ail prennent un s (des rails, des détails), sauf quelques-uns qui font -aux : travail, travaux ; vitrail, vitraux ; corail, coraux ; émail, émaux. Enfin, un œil donne des yeux.",
              ],
              box: { label: "Règle", text: "Pluriel : on ajoute un s. S, x, z : pas de changement. -au, -eau, -eu : x (sauf pneus, landaus, bleus). -al : -aux (sauf bals, carnavals, festivals...). -ou : s, sauf bijoux, cailloux, choux, genoux, hiboux, joujoux, poux. Un œil, des yeux." },
            },
            {
              heading: "Vérifier ses accords",
              paragraphs: [
                "Pour vérifier un groupe nominal, procédez toujours dans le même ordre. Trouvez le nom noyau. Cherchez son genre et son nombre, en vous aidant du déterminant et du sens. Vérifiez ensuite le déterminant, puis chaque adjectif, en vous demandant : « Qui est... ? » (Qui est neuf ? les crayons.)",
                "Quand un adjectif qualifie plusieurs noms, il se met au pluriel. Si ces noms sont de genres différents, l'adjectif se met au masculin pluriel : « une veste et un pantalon noirs », « une fille et un garçon polis ». Pour que la phrase sonne bien, on place en général le nom masculin juste avant l'adjectif.",
              ],
              box: { label: "Méthode", text: "1) Trouver le nom noyau. 2) Trouver son genre et son nombre. 3) Accorder le déterminant. 4) Accorder chaque adjectif en demandant « qui est... ? »." },
            },
          ],
          keyPoints: [
            "Le nom noyau commande : le déterminant et l'adjectif prennent son genre et son nombre.",
            "Féminin : + e (grand, grande) ; -er/-ère, -on/-onne, -el/-elle, -eux/-euse, -f/-ve ; irréguliers : belle, vieille, blanche.",
            "Pluriel : + s ; s, x, z invariables ; -au, -eau, -eu : x (sauf pneus, bleus) ; -al : -aux (sauf bals, festivals...).",
            "Sept noms en -ou prennent un x : bijoux, cailloux, choux, genoux, hiboux, joujoux, poux.",
            "Un adjectif qui qualifie un nom masculin et un nom féminin se met au masculin pluriel.",
            "Pour vérifier un adjectif, demandez-vous « qui est... ? » pour retrouver le nom qu'il qualifie.",
          ],
          example: {
            statement: "Mettez ces groupes nominaux au pluriel : « le beau hibou gris », « le travail manuel », « le nouveau festival musical ».",
            solution: [
              "« le beau hibou gris » : le déterminant devient les ; beau, en -eau, prend un x : beaux ; hibou fait partie des sept noms en -ou qui prennent un x : hiboux ; gris se termine par s et ne change pas. Résultat : « les beaux hiboux gris ».",
              "« le travail manuel » : travail fait partie des noms en -ail qui font -aux : travaux ; manuel prend un s : manuels. Résultat : « les travaux manuels ».",
              "« le nouveau festival musical » : nouveau, en -eau, prend un x : nouveaux ; festival est une exception en -al : festivals ; musical suit la règle en -al : musicaux. Résultat : « les nouveaux festivals musicaux ».",
              "Vérification : dans chaque groupe, le déterminant, le nom et les adjectifs sont bien au pluriel, et le genre masculin est conservé.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez ces groupes nominaux au féminin : a) un acteur célèbre ; b) un boulanger matinal ; c) un lion cruel ; d) un voisin inquiet ; e) un chanteur heureux ; f) un vieux chien.",
              hint: "Transformez d'abord le déterminant (un devient une), puis le nom, puis chaque adjectif. Repérez les terminaisons qui changent : -eur, -er, -on, -el, -et, -eux.",
              solution: [
                "a) une actrice célèbre (célèbre se termine déjà par e).",
                "b) une boulangère matinale (-er donne -ère ; matinal prend un e).",
                "c) une lionne cruelle (le n et le l sont doublés).",
                "d) une voisine inquiète (inquiet fait partie des exceptions en -et : -ète).",
                "e) une chanteuse heureuse (-eur donne -euse, -eux donne -euse).",
                "f) une vieille chienne (vieux est irrégulier : vieille ; chien double le n : chienne).",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces groupes nominaux au pluriel : a) le genou écorché ; b) un oiseau original ; c) le pneu crevé ; d) un bijou précieux ; e) le vitrail ancien ; f) mon œil fatigué ; g) le carnaval joyeux.",
              hint: "Pour chaque mot, demandez-vous par quelles lettres il se termine (-ou, -eau, -eu, -al, -ail, -x) et vérifiez s'il fait partie des exceptions du cours.",
              solution: [
                "a) les genoux écorchés : genou fait partie des sept noms en -ou qui prennent un x.",
                "b) des oiseaux originaux : -eau prend un x ; l'adjectif original, en -al, fait -aux.",
                "c) les pneus crevés : pneu est une exception, il prend un s.",
                "d) des bijoux précieux : bijou prend un x ; précieux se termine déjà par x et ne change pas.",
                "e) les vitraux anciens : vitrail fait -aux ; ancien prend un s.",
                "f) mes yeux fatigués : un œil donne des yeux ; le possessif mon devient mes.",
                "g) les carnavals joyeux : carnaval est une exception en -al, il prend un s ; joyeux ne change pas.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Ce texte, écrit pour l'exercice, contient neuf erreurs d'accord dans les groupes nominaux. Retrouvez-les, corrigez-les et justifiez chaque correction : « Dans la forêt sombres, deux petit renard roux chassaient des souris grise. Leur mère, une renarde attentif, surveillait ses petits près des vieux chênes. Soudain, des chasseurs bruyant arrivèrent avec leurs chevals et leurs chiens méchant. Les renards se cachèrent sous les feuilles mort. »",
              hint: "Pour chaque groupe nominal, trouvez le nom noyau, son genre et son nombre (aidez-vous du déterminant), puis vérifiez le nom lui-même et chaque adjectif. Attention : certains mots sont déjà corrects.",
              solution: [
                "1) « la forêt sombres » devient « la forêt sombre » : forêt est au singulier (la).",
                "2) et 3) « deux petit renard » devient « deux petits renards » : le déterminant numéral deux indique un pluriel, le nom et l'adjectif prennent un s. « roux » se termine par x : il est déjà correct au pluriel.",
                "4) « des souris grise » devient « des souris grises » : souris est féminin pluriel (des) ; le nom ne change pas, mais l'adjectif prend un s.",
                "5) « une renarde attentif » devient « une renarde attentive » : le nom est féminin, et -f donne -ve.",
                "6) « des chasseurs bruyant » devient « des chasseurs bruyants » : chasseurs est masculin pluriel.",
                "7) et 8) « leurs chevals » devient « leurs chevaux » (-al donne -aux) ; « leurs chiens méchant » devient « leurs chiens méchants » (masculin pluriel).",
                "9) « les feuilles mort » devient « les feuilles mortes » : feuilles est féminin pluriel, l'adjectif prend -es.",
                "Mots corrects à ne pas toucher : « Leur mère » (une seule mère), « ses petits », « des vieux chênes » (ici, des = de + les).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les accords dans le groupe nominal.",
            statements: [
              { text: "On écrit « des chevaux » mais « des festivals ».", true: true, why: "Les mots en -al font -aux, mais festival fait partie des exceptions qui prennent un s." },
              { text: "Le pluriel de « un pneu » est « des pneux ».", true: false, why: "Pneu est une exception : des pneus." },
              { text: "Dans « des souris grises », le nom « souris » ne change pas au pluriel.", true: true, why: "Les noms terminés par s, x ou z ne changent pas au pluriel." },
              { text: "Le féminin de « inquiet » est « inquiette ».", true: false, why: "Inquiet est une exception : inquiète, avec un accent grave et un seul t." },
              { text: "On écrit « une veste et un pantalon noirs ».", true: true, why: "L'adjectif qui qualifie un nom masculin et un nom féminin se met au masculin pluriel." },
              { text: "Le pluriel de « genou » prend un s.", true: false, why: "Genou fait partie des sept noms en -ou qui prennent un x : des genoux." },
              { text: "Dans « une boîte de crayons neufs », « neufs » s'accorde avec « crayons ».", true: true, why: "Ce sont les crayons qui sont neufs : l'adjectif s'accorde avec le nom qu'il qualifie." },
              { text: "Le féminin de « vieux » est « vieuse ».", true: false, why: "Vieux est irrégulier : son féminin est vieille." },
            ],
          },
          quiz: [
            { q: "Quel est le pluriel de « un travail difficile » ?", options: ["des travails difficiles", "des travaux difficiles", "des travaux difficile", "des travail difficiles"], answer: 1, why: "Travail fait partie des noms en -ail qui font -aux ; l'adjectif difficile prend un s." },
            { q: "Quel est le féminin de « un chanteur heureux » ?", options: ["une chanteuse heureuse", "une chantrice heureuse", "une chanteuse heureux", "une chanteure heureuse"], answer: 0, why: "Chanteur fait chanteuse, et les adjectifs en -eux font -euse : heureuse." },
            { q: "Quel groupe nominal est bien accordé ?", options: ["des caillous pointus", "des cailloux pointu", "des caillou pointus", "des cailloux pointus"], answer: 3, why: "Caillou fait partie des sept noms en -ou qui prennent un x, et l'adjectif pointu prend un s." },
            { q: "Complétez : « une veste et un pantalon ... »", options: ["neuve", "neufs", "neuves", "neuf"], answer: 1, why: "L'adjectif qualifie deux noms, dont un masculin : il se met au masculin pluriel, neufs." },
            { q: "Quel nom ne change pas au pluriel ?", options: ["un clou", "un journal", "un nez", "un jeu"], answer: 2, why: "Les noms terminés par s, x ou z ne changent pas : des nez. On écrit des clous, des journaux, des jeux." },
          ],
          trap: "Oublier les marques d'accord qui ne s'entendent pas (« deux petit renard » au lieu de « deux petits renards »), ou accorder l'adjectif avec le complément du nom au lieu du nom qu'il qualifie vraiment.",
          method: "Relisez chaque groupe nominal en trois temps : trouvez le nom noyau ; regardez son déterminant pour connaître son genre et son nombre ; puis vérifiez chaque adjectif en vous demandant « qui est... ? ». Apprenez les listes d'exceptions (bijoux, cailloux...) en les récitant à voix haute.",
        },
      ],
    },
  ],
}
