import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-2nde',
  chapters: [
    /* ==================================================================== */
    /* COMPRENDRE ET S'EXPRIMER : LES MÉTHODES                              */
    /* ==================================================================== */
    {
      id: 'activites-langagieres',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'comprehension-orale',
          title: "Comprendre un document audio ou vidéo",
          minutes: 30,
          objectives: [
            "Identifier la nature, la source et le thème d'un document audio ou vidéo.",
            "Repérer les informations essentielles d'un message clair en langue standard (niveau B1).",
            "Mobiliser des stratégies d'écoute : anticiper, s'appuyer sur les mots accentués, prendre des notes.",
            "Rendre compte, en français ou en anglais, de ce que l'on a compris.",
          ],
          course: [
            {
              heading: "Comprendre l'oral en seconde : le niveau B1",
              paragraphs: [
                "Le Cadre européen commun de référence pour les langues (CECRL), publié par le Conseil de l'Europe en 2001, décrit six niveaux de compétence, de A1 à C2. En seconde, le niveau visé en langue vivante A est le niveau B1, celui de l'« utilisateur indépendant » ; le niveau B2 est visé en fin de terminale. Au niveau B1, vous comprenez les points essentiels d'un message clair, en langue standard, sur des sujets familiers (l'école, les loisirs, la vie quotidienne), ainsi que l'essentiel de nombreuses émissions de radio ou de télévision quand on parle de façon assez lente et distincte.",
                "Les documents étudiés en classe sont souvent authentiques : extrait de journal télévisé, interview, podcast, bande-annonce, vlog, publicité, discours. Ils sont conçus pour des anglophones et non pour des élèves : le débit est naturel, les accents sont variés, il y a parfois de la musique ou des bruits de fond. Votre objectif n'est donc pas de tout comprendre, mais de reconstruire le sens à partir de ce que vous repérez, comme on reconstitue un puzzle à partir de quelques pièces bien placées.",
              ],
              box: { label: "Repère", text: "CECRL : A1 et A2 (utilisateur élémentaire), B1 et B2 (utilisateur indépendant), C1 et C2 (utilisateur expérimenté). Langue vivante A : B1 visé en fin de seconde, B2 en fin de terminale." },
            },
            {
              heading: "Avant et pendant l'écoute : une méthode",
              paragraphs: [
                "Avant d'écouter, exploitez tout ce qui vous est donné : le titre, la source (chaîne, radio, site), la date, l'image ou la vignette de la vidéo. Formulez des hypothèses et rassemblez le vocabulaire probable. Si le titre est « Teens and part-time jobs », attendez-vous à entendre earn money, pocket money, a weekend job, a wage (un salaire), a boss, experience, et peut-être une opposition entre l'argent gagné et le temps perdu pour les devoirs.",
                "La première écoute est globale : quelle est la nature du document (interview, reportage, publicité) ? Combien de personnes parlent, et qui sont-elles ? De quoi parlent-elles, où, quand et pourquoi ? Ce sont les « 5 W » : Who? What? Where? When? Why? Les écoutes suivantes servent à affiner : noms propres, chiffres, dates, exemples, et la position de chaque locuteur.",
                "Prenez des notes en anglais, sans faire de phrases : des mots-clés, des abréviations et des symboles (↑ pour une hausse, ↓ pour une baisse, → pour une conséquence, ≠ pour une opposition). Laissez de la place pour compléter à l'écoute suivante. Repérez surtout les connecteurs, qui annoncent la direction du propos : but et however (opposition), so (conséquence), because (cause), actually (en fait, pour corriger une idée), on the other hand (d'un autre côté).",
              ],
              box: { label: "Méthode", text: "1. Anticiper : titre, source, image, vocabulaire attendu. 2. Première écoute : qui parle, de quoi, à qui, dans quel but ? 3. Écoutes suivantes : chiffres, exemples, connecteurs, opinions. 4. Relier ses notes et reconstruire le sens." },
            },
            {
              heading: "Les pièges de l'anglais oral",
              paragraphs: [
                "L'anglais est une langue accentuelle : dans une phrase, les mots porteurs de sens (noms, verbes, adjectifs, adverbes, négations) sont accentués, tandis que les mots grammaticaux (articles, prépositions, pronoms, auxiliaires) sont réduits. Dans « I'm GOING to MEET my FRIENDS at the STATION », seuls les mots en majuscules s'entendent nettement, et ils suffisent à comprendre le message. Suivez donc les syllabes accentuées plutôt que de chercher chaque petit mot.",
                "Les mots grammaticaux ont des formes faibles, prononcées avec la voyelle réduite /ə/ (le schwa) : to se dit /tə/, of /əv/, and /ən/, can /kən/. Au contraire, can't est accentué et garde une voyelle pleine (/kɑːnt/ en anglais britannique) : c'est souvent cette différence de voyelle, plus que le t final, qui distingue « I can come » de « I can't come ». Les contractions sont fréquentes : I'd (I would ou I had), he's (he is ou he has), et à l'oral familier gonna (going to) ou wanna (want to).",
                "Attention aux nombres : thirteen, fourteen, fifteen sont accentués sur la deuxième syllabe (thir-TEEN), alors que thirty, forty, fifty le sont sur la première (THIR-ty). Les accents varient aussi : en anglais américain, le r placé après une voyelle se prononce (car, party), alors qu'il est muet en anglais britannique standard ; et le t entre deux voyelles ressemble souvent à un d rapide (water, better, city).",
              ],
              box: { label: "À retenir", text: "Les mots de sens sont accentués, les mots grammaticaux sont réduits au schwa /ə/. Can est faible (/kən/), can't est accentué. Thirteen est accentué à la fin, thirty au début." },
            },
            {
              heading: "Rendre compte de ce que vous avez compris",
              paragraphs: [
                "Un compte rendu n'est ni une liste de mots entendus ni une traduction mot à mot. Présentez d'abord le document (sa nature, sa source si elle est connue, son thème), puis les idées principales dans un ordre logique, illustrées par quelques détails précis (un chiffre, un exemple, un nom), et enfin le point de vue ou le ton des personnes qui parlent. Selon la consigne, il est rédigé en français ou en anglais.",
                "N'ajoutez rien que vous n'avez pas entendu : mieux vaut un compte rendu court et juste qu'un texte long rempli d'hypothèses. En anglais, variez les verbes pour rapporter les propos : the journalist explains, the teenager says, she complains (se plaint), he suggests (suggère), they disagree (ne sont pas d'accord).",
              ],
              box: { label: "Vocabulaire", text: "A news report (un reportage), an interview, a podcast, a trailer (une bande-annonce), an advert ou a commercial (une publicité), a speech (un discours), a documentary (un documentaire), a vlog." },
            },
          ],
          keyPoints: [
            "Niveau visé en fin de seconde (langue vivante A) : B1, comprendre les points essentiels d'un message clair sur un sujet familier.",
            "Anticiper avant d'écouter : titre, source, image, vocabulaire attendu, hypothèses.",
            "Première écoute globale (les 5 W), écoutes suivantes pour les détails, les chiffres et les opinions.",
            "Suivre les mots accentués ; les mots grammaticaux sont réduits au schwa /ə/.",
            "Pièges : can (/kən/) et can't (accentué), thirteen et thirty, 's (is ou has), 'd (would ou had).",
            "Compte rendu : présentation du document, idées principales, détails, point de vue, sans rien inventer.",
          ],
          example: {
            statement: "Voici la transcription d'un court reportage (document inventé pour l'entraînement) : « Good evening. In Bristol, a secondary school has decided to start lessons at ten o'clock instead of half past eight. The head teacher, Mrs Patel, says that students are less tired and more focused in class. But some parents are not happy: they leave for work early and don't want their children alone at home. » Identifiez la nature du document, le thème et les points de vue, puis rédigez un compte rendu de trois phrases en français.",
            solution: [
              "Nature : un reportage d'information télévisé ou radiophonique (« Good evening » est la formule d'ouverture d'un journal du soir).",
              "Thème : un établissement secondaire de Bristol commence désormais les cours à 10 heures au lieu de 8 h 30.",
              "Premier point de vue : la directrice, Mrs Patel, est favorable : les élèves sont moins fatigués et plus concentrés.",
              "Second point de vue, annoncé par « But » : certains parents sont mécontents, car ils partent tôt au travail et ne veulent pas laisser leurs enfants seuls.",
              "Réponse : « Ce reportage présente une école secondaire de Bristol qui a décidé de commencer les cours à 10 heures au lieu de 8 h 30. Selon la directrice, les élèves sont moins fatigués et plus attentifs. Certains parents s'y opposent pourtant, car ils partent travailler tôt et ne veulent pas laisser leurs enfants seuls à la maison. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Ces phrases contiennent des formes contractées entendues à l'oral. Réécrivez-les en toutes lettres : a) I'd love to come. b) She's finished her homework. c) He's late again. d) We'd already left when he called. e) They'll be here soon. f) I'm gonna tell her.",
              hint: "Regardez le mot qui suit la contraction : un participe passé après 's indique has, après 'd il indique had ; une base verbale après 'd indique would.",
              solution: [
                "a) 'd + base verbale (love) = would : « I would love to come. »",
                "b) 's + participe passé (finished) = has : « She has finished her homework. »",
                "c) 's + adjectif (late) = is : « He is late again. »",
                "d) 'd + participe passé (left) = had : « We had already left when he called. »",
                "e) 'll = will : « They will be here soon. »",
                "f) gonna = going to : « I am going to tell her. »",
              ],
            },
            {
              level: 2,
              statement: "Transcription d'un vlog (document inventé pour l'entraînement) : « Hi guys, welcome back to my channel! So today I want to talk about my weekend job. I've been working at a café in Leeds for six months now. I work every Saturday from nine to three, and I earn about fifty pounds a day. At first, I was really nervous, I kept dropping cups! But now I actually love it. The only problem is that I have less time for homework, so on Sundays I have to study all day. Would I recommend it? Yes, but only if your grades don't suffer. » 1) Quelle est la nature du document et qui parle ? 2) Où, quand et depuis combien de temps la jeune fille travaille-t-elle ? 3) Combien gagne-t-elle ? 4) Comment ses sentiments ont-ils évolué, et quel mot marque ce changement ? 5) Quel inconvénient cite-t-elle, et à quelle condition recommande-t-elle ce type d'emploi ?",
              hint: "Repérez les connecteurs (At first, But, so, but only if) : ils découpent le propos en étapes.",
              solution: [
                "1) C'est un vlog : une jeune fille s'adresse à ses abonnés (« Hi guys, welcome back to my channel ») pour parler de son emploi du week-end.",
                "2) Elle travaille dans un café à Leeds, tous les samedis de 9 heures à 15 heures, depuis six mois (« for six months »).",
                "3) Elle gagne environ cinquante livres par jour (« about fifty pounds a day »).",
                "4) Au début, elle était très nerveuse et laissait tomber des tasses ; maintenant, elle adore ce travail. Le changement est marqué par « But now », renforcé par « actually ».",
                "5) Elle a moins de temps pour ses devoirs et doit travailler tout le dimanche. Elle recommande ce type d'emploi seulement si les résultats scolaires n'en souffrent pas (« only if your grades don't suffer »).",
              ],
            },
            {
              level: 3,
              statement: "Transcription d'un reportage radio (document inventé pour l'entraînement, données fictives) : « Since September, students at Hillside Academy, in Cardiff, have had to leave their phones in lockers during the whole school day. According to the head teacher, Mr Evans, the number of fights in the playground has fallen by fifteen per cent, and students talk to each other more at lunchtime. Yet not everyone is convinced. Some students say the rule treats them like children, and several parents worry that they cannot contact their kids in an emergency. » 1) Rendez compte de ce document en français, en 60 à 80 mots. 2) Quel mot annonce le changement de point de vue ? 3) Quel nombre faut-il bien distinguer d'un nombre proche, et pourquoi ?",
              hint: "Suivez le plan : situation (la règle), effets positifs selon le directeur, critiques des élèves puis des parents.",
              solution: [
                "Repérer la structure : la mesure (téléphones dans des casiers toute la journée depuis septembre), les effets positifs selon le directeur, puis les critiques introduites par « Yet ».",
                "1) Proposition : « Ce reportage présente une mesure prise depuis septembre au lycée Hillside Academy, à Cardiff : les élèves doivent laisser leur téléphone dans un casier toute la journée. Selon le directeur, M. Evans, les bagarres dans la cour ont diminué de 15 % et les élèves se parlent davantage au déjeuner. Cependant, certains élèves trouvent qu'on les traite comme des enfants, et des parents craignent de ne pas pouvoir les joindre en cas d'urgence. » (environ 75 mots)",
                "2) C'est « Yet » (pourtant, cependant), qui introduit les critiques.",
                "3) Fifteen (15), accentué sur la deuxième syllabe (fif-TEEN), ne doit pas être confondu avec fifty (50), accentué sur la première (FIF-ty). Une baisse de 50 % des bagarres serait une tout autre information.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les stratégies d'écoute.",
            statements: [
              { text: "Au niveau B1, il faut comprendre chaque mot d'un document pour en saisir le sens.", true: false, why: "Le niveau B1 demande de comprendre les points essentiels d'un message clair, pas chaque mot." },
              { text: "Les noms, les verbes et les adjectifs sont généralement accentués à l'oral.", true: true, why: "Ce sont les mots porteurs de sens ; les mots grammaticaux sont réduits." },
              { text: "Dans « He'd finished », 'd signifie would.", true: false, why: "'d suivi d'un participe passé (finished) signifie had." },
              { text: "Thirteen est accentué sur la deuxième syllabe, thirty sur la première.", true: true, why: "Thir-TEEN, mais THIR-ty : l'accent permet de les distinguer." },
              { text: "En anglais américain, le r de car se prononce.", true: true, why: "L'anglais américain prononce le r après une voyelle, contrairement à l'anglais britannique standard." },
              { text: "Il vaut mieux prendre ses notes en phrases complètes et en français.", true: false, why: "On note des mots-clés en anglais, avec des abréviations et des symboles, pour ne rien perdre de la suite." },
              { text: "La première écoute sert surtout à identifier la nature du document, les locuteurs et le thème.", true: true, why: "C'est l'écoute globale ; les détails viennent aux écoutes suivantes." },
            ],
          },
          quiz: [
            { q: "In « She's gone home », 's stands for...", options: ["is", "has", "was", "does"], answer: 1, why: "'s suivi d'un participe passé (gone) est la contraction de has : present perfect." },
            { q: "Which word is stressed in « I want to see the film »?", options: ["to", "the", "I", "see"], answer: 3, why: "See est un verbe lexical, porteur de sens ; to, the et I sont des mots grammaticaux réduits." },
            { q: "A « trailer » is...", options: ["a short advert for a film", "a long interview with an actor", "a weekly radio news programme"], answer: 0, why: "A trailer est une bande-annonce, courte vidéo qui présente un film à venir." },
            { q: "Where is the stress in « fifteen »?", options: ["on the first syllable", "on both syllables equally", "on the second syllable"], answer: 2, why: "Fif-TEEN est accentué sur la seconde syllabe ; FIF-ty, au contraire, sur la première." },
            { q: "Before listening, the most useful thing to do is to...", options: ["try to write down every word you hear", "use the title and the source", "translate the instructions into French"], answer: 1, why: "Le titre et la source permettent d'anticiper le thème et le vocabulaire." },
          ],
          trap: "Se bloquer sur un mot inconnu et perdre toute la suite du document, au lieu de le laisser passer, de continuer à suivre les mots accentués et de revenir au passage difficile à l'écoute suivante.",
          method: "Chaque semaine, écoutez un document court (une à deux minutes) d'un média anglophone : une première fois sans rien noter, une deuxième fois en prenant des notes, puis résumez-le à voix haute en trois phrases avant de vérifier avec la transcription ou les sous-titres anglais.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'comprehension-ecrite',
          title: "Comprendre un texte écrit : stratégies de lecture",
          minutes: 30,
          objectives: [
            "Identifier la nature d'un texte et exploiter le paratexte : titre, source, date, auteur.",
            "Mettre en œuvre des stratégies de lecture : lecture globale (skimming) et recherche ciblée (scanning).",
            "Inférer le sens des mots inconnus grâce au contexte, aux mots transparents et à la formation des mots.",
            "Repérer l'organisation d'un texte, les reprises pronominales et les points de vue exprimés.",
          ],
          course: [
            {
              heading: "Avant de lire : identifier le document",
              paragraphs: [
                "Avant même de lire le texte, observez ce qui l'entoure : c'est le paratexte. Le titre, la source (journal, site, roman), la date, le nom de l'auteur, une illustration ou une légende vous disent déjà beaucoup. Un article de presse a un titre accrocheur (headline), souvent un chapeau qui résume l'essentiel, et cite des personnes entre guillemets. Un extrait de roman présente un narrateur, des personnages, un cadre (setting) et des événements. Un billet de blog est écrit à la première personne, sur un ton personnel.",
                "À partir de ces indices, formulez des hypothèses : de quoi le texte va-t-il parler ? S'agit-il d'informer, de raconter, de convaincre, de faire rire ? Quel vocabulaire peut-on attendre ? Cette étape prend une minute, mais elle prépare votre cerveau à reconnaître les mots et les idées, exactement comme regarder l'image d'une boîte de puzzle aide à placer les pièces.",
              ],
              box: { label: "Vocabulaire", text: "A headline (un titre de presse), an article, an extract ou an excerpt (un extrait), a novel (un roman), a narrator (un narrateur), a character (un personnage), the setting (le cadre), a blog post (un billet de blog)." },
            },
            {
              heading: "Lire en plusieurs passages : skimming et scanning",
              paragraphs: [
                "La première lecture est rapide et globale : c'est le skimming. Vous parcourez le texte sans vous arrêter sur les mots inconnus, en regardant surtout le début et la fin des paragraphes, pour répondre aux 5 W : Who? What? Where? When? Why? À la fin de cette lecture, vous devez pouvoir dire en une phrase de quoi parle le texte.",
                "La deuxième lecture est ciblée : c'est le scanning. Vous cherchez une information précise, comme on cherche un nom dans une liste : une date, un chiffre, un nom propre, un lieu. Les majuscules, les chiffres et les guillemets attirent l'œil et vous guident. Enfin, une lecture détaillée permet de relier les idées entre elles grâce aux connecteurs (however, because, so, although) et de comprendre le point de vue de l'auteur ou des personnages.",
                "Soyez attentif aux reprises : les pronoms (he, she, it, they, this, which, who) renvoient à un mot déjà cité. Dans « The school banned phones. This decision angered many students, who protested », this decision reprend l'interdiction, et who renvoie aux élèves. Identifier ce que reprend chaque pronom est une question fréquente en évaluation.",
              ],
              box: { label: "Méthode", text: "1. Paratexte et hypothèses. 2. Skimming : idée générale et 5 W. 3. Scanning : informations précises (noms, dates, chiffres). 4. Lecture détaillée : connecteurs, reprises, points de vue." },
            },
            {
              heading: "Deviner le sens des mots inconnus",
              paragraphs: [
                "Vous n'avez pas besoin de connaître tous les mots. Le contexte aide souvent : dans « She was so exhausted that she fell asleep on the bus », la conséquence (s'endormir) permet de deviner que exhausted signifie épuisé. Beaucoup de mots sont transparents, car l'anglais a emprunté des milliers de mots au français et au latin : environment, decision, important, to protest, a solution.",
                "Méfiez-vous en revanche des faux amis, qui ressemblent à un mot français sans en avoir le sens : actually (en fait), eventually (finalement), sensible (raisonnable, alors que sensible se dit sensitive), library (bibliothèque), to attend (assister à), to pretend (faire semblant), a lecture (un cours magistral, une conférence), a journey (un trajet, un voyage).",
                "Décomposez enfin les mots longs : préfixes et suffixes changent le sens d'une racine connue. Unbelievable = un- (contraire) + believe (croire) + -able (que l'on peut) : incroyable. Homeless = home + -less (sans) : sans abri. Les mots composés se lisent de droite à gauche : a school bus est un bus scolaire, a bus school serait une école de bus.",
              ],
              box: { label: "Règle", text: "Préfixes : un-, in-, dis- (contraire), re- (à nouveau), mis- (mal), over- (trop). Suffixes : -less (sans), -ful (plein de), -ness (nom de qualité), -er (celui qui fait), -able (que l'on peut), -ly (adverbe)." },
            },
            {
              heading: "Comprendre l'implicite et le point de vue",
              paragraphs: [
                "Un texte ne dit pas tout. Pour comprendre ce que pense l'auteur ou ce que ressent un personnage, relevez les indices : les adjectifs (brilliant, awful, worrying), les adverbes (sadly, luckily, surprisingly), les modaux (it might work, they should stop), la ponctuation (un point d'exclamation, une question) et les actions (« she slammed the door » montre la colère sans la nommer).",
                "Dans un récit, distinguez le narrateur et l'auteur : un narrateur à la première personne (I) donne un point de vue subjectif et limité, un narrateur à la troisième personne (he, she) peut tout savoir des personnages. Dans un article, distinguez les faits, vérifiables, et les opinions, introduites par des verbes comme claim, believe ou argue. Justifiez toujours vos réponses par une courte citation du texte.",
              ],
            },
          ],
          keyPoints: [
            "Observer le paratexte (titre, source, date, auteur, image) et formuler des hypothèses avant de lire.",
            "Skimming : lecture rapide pour l'idée générale ; scanning : recherche d'une information précise.",
            "Les pronoms (it, they, this, which, who) reprennent un mot déjà cité : identifier ce qu'ils remplacent.",
            "Deviner le sens par le contexte, les mots transparents et la formation des mots (un-, -less, -ful, -ness).",
            "Faux amis : actually (en fait), eventually (finalement), sensible (raisonnable), library (bibliothèque).",
            "Justifier chaque réponse par une courte citation du texte.",
          ],
          example: {
            statement: "Lisez ce court article (texte inventé pour l'entraînement) : « TEENS TURN THE PAGE. Book sales among young readers have risen unexpectedly this year, according to a report by Read On, a reading charity. Many teenagers say they discovered novels through short videos on social media. “I used to think reading was boring,” admits Chloe, 15. “Now I read every night.” However, some librarians remain cautious: the same few titles are recommended again and again. » 1) Quelle est la nature du texte et son idée principale ? 2) Expliquez unexpectedly. 3) Que pensent les bibliothécaires ?",
            solution: [
              "Paratexte : un titre en majuscules, court et imagé (turn the page, tourner la page) : c'est un article de presse.",
              "1) Idée principale : les ventes de livres chez les jeunes lecteurs ont augmenté, en partie grâce aux vidéos courtes des réseaux sociaux.",
              "2) Unexpectedly = un- (contraire) + expect (s'attendre à) + -ed + -ly (adverbe) : de façon inattendue. L'augmentation surprend.",
              "3) Le connecteur « However » annonce une nuance : les bibliothécaires restent prudents (« cautious »), car ce sont toujours les mêmes titres qui sont recommandés.",
              "Réponse : un article de presse sur la hausse inattendue des ventes de livres chez les adolescents, portée par les réseaux sociaux, que les bibliothécaires accueillent avec prudence.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez ces phrases en français en évitant les faux amis : a) Actually, I don't like coffee. b) She eventually found her keys. c) He's a very sensible boy. d) I attended the meeting yesterday. e) We studied at the library. f) He pretended to be ill.",
              hint: "Aucun de ces mots (actually, eventually, sensible, attended, library, pretended) ne signifie ce que sa ressemblance avec le français laisse croire.",
              solution: [
                "a) « En fait, je n'aime pas le café. » (actually = en fait, et non actuellement, qui se dit currently ou at the moment)",
                "b) « Elle a fini par retrouver ses clés. » (eventually = finalement, au bout du compte)",
                "c) « C'est un garçon très raisonnable. » (sensible = raisonnable ; sensible se dit sensitive)",
                "d) « J'ai assisté à la réunion hier. » (to attend = assister à ; attendre se dit to wait for)",
                "e) « Nous avons étudié à la bibliothèque. » (library = bibliothèque ; librairie se dit bookshop)",
                "f) « Il a fait semblant d'être malade. » (to pretend = faire semblant ; prétendre se dit to claim)",
              ],
            },
            {
              level: 2,
              statement: "Décomposez chaque mot (préfixe, racine, suffixe), donnez sa nature et proposez une traduction : a) careless b) kindness c) disagree d) misunderstanding e) rewrite f) powerful g) uncomfortable h) teenager.",
              hint: "Cherchez d'abord la racine que vous connaissez, puis le sens de ce qui s'ajoute avant et après.",
              solution: [
                "a) care (soin) + -less (sans) : adjectif, négligent, insouciant.",
                "b) kind (gentil) + -ness (qualité) : nom, la gentillesse.",
                "c) dis- (contraire) + agree (être d'accord) : verbe, ne pas être d'accord.",
                "d) mis- (mal) + understand (comprendre) + -ing : nom, un malentendu.",
                "e) re- (à nouveau) + write (écrire) : verbe, réécrire.",
                "f) power (pouvoir, puissance) + -ful (plein de) : adjectif, puissant.",
                "g) un- (contraire) + comfort (confort) + -able : adjectif, inconfortable, mal à l'aise.",
                "h) teen (de thirteen à nineteen) + -age + -er (personne) : nom, un adolescent, une adolescente.",
              ],
            },
            {
              level: 3,
              statement: "Lisez cet extrait de récit (texte inventé pour l'entraînement) : « On my first morning at Oakfield High, I stood at the gate for a full minute, pretending to read my phone. Everyone seemed to know where to go. Then a tall girl with a green backpack stopped in front of me. “You're new, aren't you?” she said. I nodded, too embarrassed to speak. “Don't worry, it was the same for me last year. Come on, I'll show you the way.” As we walked in, I realised my hands had stopped shaking. » 1) Qui est le narrateur et à quelle personne le récit est-il écrit ? 2) Où et quand se passe la scène ? 3) Quels sentiments le narrateur éprouve-t-il au début ? Justifiez par deux indices. 4) Que reprend « it » dans « it was the same for me » ? 5) Comment les sentiments évoluent-ils à la fin, et par quel détail ?",
              hint: "Les sentiments ne sont pas toujours nommés : cherchez les gestes (pretending, nodded, hands shaking) et ce qu'ils révèlent.",
              solution: [
                "1) Le narrateur est un nouvel élève qui raconte sa propre histoire : le récit est à la première personne (I, my, me).",
                "2) La scène se passe devant puis dans le lycée Oakfield High, le premier matin du narrateur (« On my first morning »).",
                "3) Il est gêné et anxieux : il fait semblant de lire son téléphone (« pretending to read my phone »), il est trop embarrassé pour parler (« too embarrassed to speak ») et ses mains tremblaient, comme le révèle la dernière phrase.",
                "4) « It » reprend la situation d'être nouveau dans l'établissement : la jeune fille a vécu la même chose l'année précédente.",
                "5) Il est rassuré : ses mains ont cessé de trembler (« my hands had stopped shaking »). Le sentiment n'est pas nommé, il est montré par un détail physique.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque faux ami anglais à son vrai sens en français.",
            pairs: [
              { left: "actually", right: "en fait" },
              { left: "eventually", right: "finalement" },
              { left: "sensible", right: "raisonnable" },
              { left: "library", right: "bibliothèque" },
              { left: "to attend", right: "assister à" },
              { left: "to pretend", right: "faire semblant" },
            ],
          },
          quiz: [
            { q: "Reading a text quickly to get the general idea is called...", options: ["scanning", "skimming", "translating", "summarising"], answer: 1, why: "Le skimming est la lecture globale ; le scanning est la recherche d'une information précise." },
            { q: "« Homeless » means...", options: ["having no home", "staying at home", "missing home a lot"], answer: 0, why: "Le suffixe -less signifie sans : homeless, sans abri." },
            { q: "« She eventually agreed » means...", options: ["she maybe agreed", "she agreed at once", "she finally agreed"], answer: 2, why: "Eventually est un faux ami : il signifie finalement, au bout du compte, et non éventuellement." },
            { q: "In « The school banned phones. This angered students », « This » refers to...", options: ["the school", "the phones", "the students", "the ban"], answer: 3, why: "This reprend toute l'idée précédente : la décision d'interdire les téléphones." },
            { q: "Which word means « a person who reads »?", options: ["reading", "reader", "readable"], answer: 1, why: "Le suffixe -er désigne la personne qui fait l'action : a reader, un lecteur." },
          ],
          trap: "Traduire un mot d'après sa ressemblance avec le français (actually compris comme « actuellement », sensible comme « sensible ») au lieu de vérifier que le sens obtenu est cohérent avec le contexte.",
          method: "Après chaque lecture, cachez le texte et écrivez de mémoire une phrase qui le résume en anglais ; si vous n'y arrivez pas, refaites un skimming en lisant la première et la dernière phrase de chaque paragraphe.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'expression-ecrite-orale',
          title: "S'exprimer à l'écrit et à l'oral : raconter et argumenter",
          minutes: 35,
          objectives: [
            "Raconter un événement passé de façon structurée, avec les temps du récit.",
            "Argumenter : exposer un point de vue, l'illustrer et le nuancer à l'aide de connecteurs logiques.",
            "Prendre la parole en continu et en interaction : réagir, demander une précision, exprimer son accord ou son désaccord.",
            "Relire sa production pour corriger les erreurs les plus fréquentes.",
          ],
          course: [
            {
              heading: "Raconter : les temps du récit",
              paragraphs: [
                "Le temps principal du récit est le prétérit, qui présente des actions passées, terminées et datées. Les verbes réguliers prennent -ed (walked, decided, stopped), les verbes irréguliers ont une forme à apprendre (went, saw, took, felt). Le prétérit s'emploie avec des marqueurs comme yesterday, last week, in 2020, two years ago. À la forme négative et interrogative, on utilise did et la base verbale : « I didn't see him. Did you call her? »",
                "Le prétérit en be + -ing (was ou were + verbe en -ing) décrit une action en cours à un moment du passé : il pose le décor ou montre une action interrompue. « I was walking home when it started to rain » : la marche était en cours, la pluie l'interrompt. While introduit souvent l'action en cours : « While we were waiting, the lights went out. »",
                "Le past perfect (had + participe passé) indique qu'une action est antérieure à un autre moment du passé : « When I arrived, the film had already started » (le film a commencé avant mon arrivée). C'est l'équivalent du plus-que-parfait français. Il permet de faire un retour en arrière dans un récit.",
              ],
              box: { label: "Règle", text: "Prétérit : action passée terminée (I left). Was/were + -ing : action en cours dans le passé (I was leaving when...). Had + participe passé : action antérieure à un autre fait passé (I had left before he came)." },
            },
            {
              heading: "Organiser un récit vivant",
              paragraphs: [
                "Un bon récit répond aux 5 W dès le début (qui, quoi, où, quand, pourquoi), puis enchaîne les événements dans l'ordre grâce aux connecteurs chronologiques : at first (au début), then (puis), next, after that (ensuite), suddenly (soudain), meanwhile (pendant ce temps), eventually ou in the end (finalement), finally (enfin, en dernier). Attention : at the end of signifie « à la fin de » (at the end of the day), alors que in the end signifie « finalement ».",
                "Pour rendre le récit vivant, exprimez les sentiments (I was terrified, relieved, proud), donnez des détails concrets et variez les phrases. Le discours direct anime la scène : « “Watch out!” my brother shouted. » Le discours indirect le résume : « My brother told me to watch out. » Terminez par une chute ou une réflexion : ce que vous avez ressenti, ce que vous en avez appris.",
              ],
              box: { label: "Vocabulaire", text: "At first, then, next, after that, suddenly, meanwhile, while, as soon as (dès que), eventually, in the end (finalement), finally (enfin). Sentiments : relieved (soulagé), proud (fier), ashamed (honteux), scared (effrayé), thrilled (ravi)." },
            },
            {
              heading: "Argumenter : construire un point de vue",
              paragraphs: [
                "Un texte argumentatif répond à une question en défendant une position. L'introduction reformule la question et annonce le plan. Chaque paragraphe développe un argument, illustré par un exemple précis. Une concession reconnaît un argument opposé avant de le réfuter : « Admittedly, uniforms are expensive. However, they cost less than fashionable clothes. » La conclusion donne votre opinion de façon claire et nuancée.",
                "Les connecteurs logiques montrent la structure du raisonnement : firstly, secondly, finally pour énumérer ; moreover, furthermore, what's more pour ajouter ; however, yet, although, on the other hand pour opposer ; because, since, as pour la cause ; so, therefore, as a result pour la conséquence ; for instance, for example, such as pour illustrer ; to conclude, all in all pour conclure.",
                "Pour donner votre avis : I think, I believe, in my opinion, in my view, as far as I'm concerned (en ce qui me concerne), I'm convinced that. Pour dire votre accord : I agree with this idea, I disagree. Retenez que agree est un verbe : on dit « I agree », jamais « I am agree ».",
              ],
              box: { label: "À retenir", text: "Ajouter : moreover, what's more. Opposer : however, although, on the other hand. Cause : because, since. Conséquence : so, therefore. Exemple : for instance. Concéder : admittedly, it is true that... but. Conclure : to conclude." },
            },
            {
              heading: "À l'oral : en continu et en interaction",
              paragraphs: [
                "En prise de parole en continu, vous parlez seul quelques minutes (présenter un document, raconter, défendre une idée). Préparez des notes en mots-clés, jamais un texte rédigé à lire, et un plan en trois temps. Parlez lentement, regardez votre auditoire et accentuez les mots importants. Pour gagner une seconde de réflexion, utilisez des mots de liaison naturels : well, let me think, actually, you know.",
                "En interaction, vous échangez avec un ou plusieurs interlocuteurs : il faut écouter, réagir et relancer. Demandez une précision (Could you repeat that, please? What do you mean by...?), exprimez votre accord (I totally agree, That's a good point) ou votre désaccord poli (I see what you mean, but... I'm not sure about that). Posez aussi des questions à votre interlocuteur (What about you? Don't you think that...?) : c'est ce qui fait vivre l'échange.",
              ],
              box: { label: "Expressions", text: "Could you say that again, please? What do you mean by...? I see your point, but... I couldn't agree more. I'm afraid I disagree. That's true, however... What do you think?" },
            },
            {
              heading: "Relire et corriger",
              paragraphs: [
                "Gardez cinq minutes pour relire avec une grille. Le -s de la troisième personne du singulier au présent simple (she lives, he doesn't live). La cohérence des temps dans un récit (ne pas passer du prétérit au présent sans raison). La place de l'adjectif, toujours invariable et avant le nom (a big red car, jamais « a car red »). Les indénombrables (information, advice, homework, news n'ont pas de pluriel). Et people, qui est un pluriel : « people are ».",
              ],
            },
          ],
          keyPoints: [
            "Récit : prétérit pour les actions, was/were + -ing pour le décor ou l'action interrompue, had + participe passé pour un fait antérieur.",
            "Connecteurs chronologiques : at first, then, after that, suddenly, eventually (finalement).",
            "Argumentation : introduction, arguments illustrés, concession (admittedly... however), conclusion nuancée.",
            "Opinion : in my opinion, as far as I'm concerned ; on dit « I agree », jamais « I am agree ».",
            "Oral en continu : notes en mots-clés et plan ; en interaction : réagir, demander une précision, relancer.",
            "Relire : -s de la 3e personne, temps, adjectif invariable avant le nom, people are, information sans s.",
          ],
          example: {
            statement: "Rédigez en anglais un court récit (60 à 80 mots) à partir de ces notes en français : la semaine dernière, en rentrant du lycée à vélo ; il commence à pleuvoir ; vous glissez et tombez ; un inconnu vous aide ; vous vous rendez compte que vous aviez oublié votre téléphone au lycée ; vous êtes soulagé d'arriver chez vous.",
            solution: [
              "Repérer les temps : l'action en cours (rentrer à vélo) au prétérit en be + -ing, les événements au prétérit, l'oubli (antérieur) au past perfect.",
              "Choisir les connecteurs : last week, while, suddenly, then, when, in the end.",
              "Ajouter les sentiments : scared, relieved.",
              "Rédiger : « Last week, I was cycling home from school when it started to rain. Suddenly, my bike slipped and I fell on the road. I was scared and my knee hurt. Then a stranger stopped and helped me to stand up. When I wanted to call my mum, I realised I had left my phone at school! In the end, I rode home slowly, soaked but relieved. »",
              "Vérifier : environ 70 mots, un prétérit en be + -ing (was cycling), des prétérits (started, slipped, fell, stopped, realised, rode), un past perfect (had left), des connecteurs chronologiques.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez les verbes entre parenthèses au prétérit simple, au prétérit en be + -ing ou au past perfect : a) I (read) a book when the phone (ring). b) Yesterday we (go) to the cinema. c) When we (arrive) at the station, the train (already leave). d) While she (cook), her brother (lay) the table. e) He (not, see) the film before, so he (enjoy) it.",
              hint: "Demandez-vous pour chaque verbe : action terminée, action en cours, ou action antérieure à une autre ?",
              solution: [
                "a) « I was reading a book when the phone rang. » (lecture en cours, interrompue par la sonnerie)",
                "b) « Yesterday we went to the cinema. » (action terminée, datée par yesterday)",
                "c) « When we arrived at the station, the train had already left. » (le départ du train précède l'arrivée)",
                "d) « While she was cooking, her brother was laying the table. » (deux actions en cours en même temps ; « her brother laid the table » est aussi possible)",
                "e) « He hadn't seen the film before, so he enjoyed it. » (le fait de ne pas l'avoir vu est antérieur au plaisir de le voir)",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce paragraphe avec les connecteurs suivants, chacun une fois : However, Moreover, because, For instance, Therefore, Although. « Many teenagers spend hours on video games. (1) ___ some adults see this as a waste of time, games can be useful. (2) ___, some games teach history or strategy. (3) ___, playing online helps young people make friends. (4) ___, too much screen time is bad for sleep (5) ___ the light of screens keeps the brain awake. (6) ___, players should set themselves time limits. » (texte inventé)",
              hint: "Cherchez la fonction de chaque phrase : concession, exemple, ajout, opposition, cause, conséquence.",
              solution: [
                "(1) Although : concession dans une phrase complexe (« Bien que certains adultes... »).",
                "(2) For instance : la phrase donne un exemple de l'utilité des jeux.",
                "(3) Moreover : ajout d'un second argument favorable.",
                "(4) However : opposition, on passe à un inconvénient.",
                "(5) because : cause du manque de sommeil.",
                "(6) Therefore : conséquence logique, la recommandation finale.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite. « Should secondary school students wear a uniform? » Rédigez un texte argumenté de 120 à 150 mots en anglais, avec une introduction, deux arguments illustrés, une concession et une conclusion personnelle.",
              hint: "Au Royaume-Uni, l'uniforme est porté dans la grande majorité des établissements secondaires : vous pouvez partir de cet exemple. Pensez à l'égalité, au coût, à la liberté d'expression.",
              solution: [
                "Plan : introduction (l'uniforme est la règle dans la plupart des écoles britanniques, pas en France) ; argument 1 : égalité entre élèves ; argument 2 : sentiment d'appartenance et gain de temps ; concession : liberté d'expression et coût ; conclusion nuancée.",
                "Proposition : « In most British secondary schools, students wear a uniform, whereas in France they can usually wear what they want. Should French schools follow the British example? Firstly, a uniform makes students more equal: nobody is judged for wearing cheap or unfashionable clothes. Secondly, it creates a sense of belonging to the school. What's more, students do not waste time choosing their clothes every morning. Admittedly, a uniform limits self-expression, and teenagers often want to show their personality through their style. It can also be expensive for some families. However, schools could offer second-hand uniforms and allow personal accessories. To conclude, I believe that a simple and cheap uniform would do more good than harm, as long as students can still express themselves in other ways. »",
                "Vérifier : environ 145 mots, connecteurs variés (Firstly, Secondly, What's more, Admittedly, However, To conclude), un avis clair (I believe), aucune faute du type « I am agree » ni « informations ».",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la rédaction d'un texte argumenté.",
            items: [
              "Analyser la question et chercher des idées pour et contre",
              "Rédiger l'introduction : reformuler la question",
              "Développer un premier argument illustré par un exemple",
              "Ajouter un second argument introduit par Moreover",
              "Concéder un argument opposé (Admittedly...) puis le nuancer",
              "Conclure en donnant son opinion",
              "Relire : temps, accords, -s de la 3e personne",
            ],
          },
          quiz: [
            { q: "Choose the correct sentence.", options: ["I am agree with you.", "I agree with you.", "I am agreeing you."], answer: 1, why: "Agree est un verbe : « I agree with you ». « I am agree » est un calque du français." },
            { q: "« I ___ TV when you called. »", options: ["was watching", "watched", "have watched", "had watch"], answer: 0, why: "L'action en cours (regarder la télévision) est interrompue par l'appel : prétérit en be + -ing." },
            { q: "Which connector introduces a consequence?", options: ["although", "for instance", "therefore", "moreover"], answer: 2, why: "Therefore signifie donc, par conséquent ; although concède, for instance illustre, moreover ajoute." },
            { q: "« When I got to the party, Tom ___ . »", options: ["already left", "has already left", "was already leave", "had already left"], answer: 3, why: "Le départ de Tom est antérieur à mon arrivée : past perfect, had + participe passé." },
            { q: "In a discussion, « I see your point, but... » is used to...", options: ["agree completely", "ask for a repetition", "disagree politely"], answer: 2, why: "On reconnaît l'argument de l'autre avant d'exprimer poliment un désaccord." },
          ],
          trap: "Écrire « I am agree » au lieu de « I agree », et passer sans raison du prétérit au présent au milieu d'un récit.",
          method: "Avant de rédiger, notez votre plan en quatre lignes (introduction, deux arguments, concession, conclusion) et le connecteur qui ouvrira chaque paragraphe ; après la rédaction, relisez une fois uniquement pour les verbes (temps et -s de la 3e personne).",
        },
      ],
    },
    /* ==================================================================== */
    /* REPRÉSENTATION DE SOI ET RAPPORT À AUTRUI                            */
    /* ==================================================================== */
    {
      id: 'soi-autrui',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'identite-who-am-i',
          title: "Parler de soi et de son identité : « Who am I? »",
          minutes: 30,
          objectives: [
            "Se présenter et parler de son identité : origines, langues, goûts, valeurs.",
            "Décrire l'apparence et la personnalité d'une personne avec un lexique précis.",
            "Distinguer « What is he like? », « What does he look like? » et « What does he like? ».",
            "Réfléchir aux identités multiples dans les sociétés anglophones.",
          ],
          course: [
            {
              heading: "L'identité : de quoi est-elle faite ?",
              paragraphs: [
                "Le mot identity vient du latin idem, « le même » : votre identité, c'est ce qui fait que vous restez la même personne au fil du temps, et ce qui vous distingue des autres. Elle a plusieurs composantes : un nom, un âge, une famille, des origines (background, roots), une ou plusieurs nationalités, des langues, des croyances, des goûts, des valeurs, et les groupes auxquels on se sent appartenir (to belong to).",
                "L'identité n'est pas fixée une fois pour toutes : elle se construit au contact des autres, dans la famille, à l'école, entre amis, et aujourd'hui aussi en ligne. C'est pourquoi l'axe du programme associe la représentation de soi et le rapport à autrui. Les adolescents oscillent souvent entre deux désirs : s'intégrer au groupe (to fit in) et se distinguer (to stand out). La pression des pairs (peer pressure) pousse à se conformer, l'envie d'être soi pousse à s'affirmer.",
                "La littérature anglaise a donné une formule célèbre à cette exigence : dans Hamlet de Shakespeare, Polonius conseille à son fils Laertes « to thine own self be true », c'est-à-dire « sois fidèle à toi-même ». Thine est une forme ancienne de your, que l'on ne rencontre plus que dans les textes anciens.",
              ],
              box: { label: "Vocabulaire", text: "Background (origines, milieu), roots (racines), to belong to (appartenir à), a sense of belonging (un sentiment d'appartenance), to fit in (s'intégrer), to stand out (se démarquer), peer pressure (la pression des pairs), self-confidence (la confiance en soi)." },
            },
            {
              heading: "Des identités multiples dans le monde anglophone",
              paragraphs: [
                "Dans les pays anglophones, beaucoup de personnes revendiquent plusieurs appartenances à la fois. Aux États-Unis, on parle de « hyphenated Americans » pour ceux qui associent une origine et la nationalité américaine : Irish-American, Italian-American, Mexican-American. L'usage récent abandonne souvent le trait d'union (African American, Asian American). Au Royaume-Uni, on rencontre des expressions comme British Asian ou Black British, et beaucoup d'habitants se sentent à la fois Scottish ou Welsh et British.",
                "Le roman de Zadie Smith White Teeth (2000) suit à Londres les familles d'Archie Jones, un Anglais, et de son ami Samad Iqbal, venu du Bangladesh. Il montre comment leurs enfants, nés en Angleterre, cherchent leur place entre la culture de leurs parents et celle de leur pays de naissance. Cette question traverse de nombreuses œuvres anglophones : peut-on appartenir pleinement à deux cultures, ou faut-il choisir ?",
              ],
              box: { label: "À retenir", text: "Une identité est plurielle : on peut se sentir à la fois Scottish et British, ou Irish-American. Pour en parler : I'm half French, half English. I feel both... I consider myself... My roots are in..." },
            },
            {
              heading: "Décrire quelqu'un : apparence, personnalité, goûts",
              paragraphs: [
                "Trois questions se ressemblent mais n'ont pas le même sens. « What does he look like? » porte sur l'apparence physique : « He's tall and slim, he has curly dark hair and brown eyes. » « What is he like? » porte sur la personnalité : « He's funny and generous, but a bit stubborn. » « What does he like? » porte sur les goûts : « He likes rap music and skateboarding. » Enfin, « How is he? » demande des nouvelles de sa santé.",
                "Pour l'apparence, on dit « she has long dark hair » (hair est indénombrable : pas de -s, pas d'article) et « he has blue eyes », jamais « the eyes blue ». L'adjectif est invariable et se place avant le nom. Pour la personnalité, constituez-vous un lexique précis : outgoing (sociable), shy (timide), reliable (fiable), stubborn (têtu), easy-going (facile à vivre), moody (lunatique), hard-working (travailleur), open-minded (ouvert d'esprit), self-confident (sûr de soi), generous.",
                "Les adjectifs composés sont très fréquents : blue-eyed (aux yeux bleus), kind-hearted (au grand cœur), well-known (célèbre), good-looking (beau). Dans un adjectif composé avec un nombre, le nom reste au singulier, car un adjectif ne prend jamais de -s : a ten-year-old girl (une fille de dix ans), a two-hour film.",
              ],
              box: { label: "Règle", text: "What does he look like? : l'apparence. What is he like? : la personnalité. What does he like? : les goûts. How is he? : la santé. Adjectif invariable avant le nom : a ten-year-old boy, jamais « ten-years-old »." },
            },
            {
              heading: "Parler de soi : les outils",
              paragraphs: [
                "Pour vous présenter, variez les structures : I was born in... (je suis né à), I grew up in... (j'ai grandi à), I'm from..., I'd describe myself as... (je me décrirais comme), I consider myself... (je me considère comme), What matters most to me is... (ce qui compte le plus pour moi, c'est). Pour vos goûts : I'm into (j'adore, je suis passionné de), I'm keen on, I'm fond of, suivis d'un nom ou d'un verbe en -ing (« I'm into drawing »), et I can't stand (je ne supporte pas).",
                "Le présent simple exprime ce qui est vrai de façon permanente ou habituelle : « I live in Lyon. I play the guitar. » N'oubliez pas le -s de la troisième personne (« my sister plays »). Les adverbes de fréquence (always, often, sometimes, never) se placent avant le verbe lexical mais après be : « I often read », « I'm always late ». Illustrez toujours un trait de caractère par un exemple : « I'm quite stubborn: once I've decided something, I never give up. »",
                "Attention aux mots en self- : self-confidence (la confiance en soi), self-esteem (l'estime de soi), self-image (l'image de soi), self-portrait (l'autoportrait). Mais selfish signifie égoïste, et n'a rien d'un compliment.",
              ],
            },
          ],
          keyPoints: [
            "Identity vient du latin idem (le même) : origines, langues, goûts, valeurs, appartenances.",
            "To fit in (s'intégrer) et to stand out (se démarquer) ; peer pressure, la pression des pairs.",
            "Identités multiples : Irish-American, British Asian, se sentir à la fois Scottish et British.",
            "What does he look like? (apparence), What is he like? (personnalité), What does he like? (goûts).",
            "She has long dark hair, he has blue eyes ; adjectif invariable : a ten-year-old boy.",
            "Se présenter : I grew up in, I'd describe myself as, I'm into + nom ou -ing, I can't stand.",
          ],
          example: {
            statement: "À partir de ces notes en français, rédigez en anglais une description de 50 à 70 mots de Liam, un correspondant irlandais (personnage inventé) : 16 ans, né à Dublin, vit à Cork ; grand, cheveux roux courts, yeux verts ; drôle et sociable, mais un peu têtu ; adore la musique traditionnelle irlandaise et joue du violon ; ne supporte pas l'injustice.",
            solution: [
              "Organiser en trois blocs : identité et origines, apparence (What does he look like?), personnalité et goûts (What is he like? What does he like?).",
              "Vérifier les pièges : a sixteen-year-old boy (sans -s), he has short red hair (sans -s ni article), he has green eyes.",
              "Choisir les structures : he was born in, he's into + nom, he can't stand.",
              "Rédiger : « Liam is a sixteen-year-old Irish boy. He was born in Dublin, but he lives in Cork now. He's tall and he has short red hair and green eyes. He's funny and outgoing, but a bit stubborn: he never changes his mind! He's really into traditional Irish music and he plays the fiddle. He can't stand injustice. »",
              "Vérifier : environ 60 mots, le -s de la 3e personne partout (lives, has, plays, changes), un exemple qui illustre un trait de caractère.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque question à la bonne réponse : a) What does she look like? b) What is she like? c) What does she like? d) How is she? Réponses : 1) She's fine, thanks. 2) She likes skateboarding and comics. 3) She's tall with short red hair. 4) She's funny and very generous.",
              hint: "Look like : l'apparence ; be like : la personnalité ; like (verbe) : les goûts ; how : la santé.",
              solution: [
                "a) → 3 : look like porte sur l'apparence physique (grande, cheveux roux courts).",
                "b) → 4 : be like porte sur la personnalité (drôle, généreuse).",
                "c) → 2 : le verbe like porte sur les goûts (skateboard, bandes dessinées).",
                "d) → 1 : how is she? demande des nouvelles (elle va bien).",
              ],
            },
            {
              level: 2,
              statement: "Transformez chaque groupe de mots en utilisant un adjectif composé : a) a girl with blue eyes b) a man with a kind heart c) a student who works hard d) a walk that lasts two hours e) a boy who is ten years old f) a person with an open mind.",
              hint: "Le nom devient la deuxième partie de l'adjectif, souvent avec -ed ; avec un nombre, le nom reste au singulier.",
              solution: [
                "a) a blue-eyed girl",
                "b) a kind-hearted man",
                "c) a hard-working student",
                "d) a two-hour walk (hour sans -s, car l'adjectif est invariable)",
                "e) a ten-year-old boy (year sans -s)",
                "f) an open-minded person (an devant le son voyelle de open)",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite. Vous postulez pour un échange scolaire avec un lycée britannique. Rédigez en anglais votre présentation « Who am I? » de 120 à 140 mots : origines et lieu de vie, apparence, deux traits de personnalité illustrés par un exemple, goûts, ce qui compte le plus pour vous.",
              hint: "Suivez un ordre logique (identité, apparence, personnalité, goûts, valeurs) et illustrez chaque trait de caractère par un fait concret.",
              solution: [
                "Plan : 1) identité et origines ; 2) apparence ; 3) deux traits illustrés ; 4) goûts ; 5) valeurs et projet. Un ton naturel mais soigné, puisqu'il s'agit d'une candidature.",
                "Proposition (élève inventé) : « My name is Inès, I'm fifteen and I live in Marseille, in the south of France. My mother is French and my father is Moroccan, so I grew up speaking French and a little Arabic, and I feel I belong to both cultures. I'm quite small, I have long curly black hair and brown eyes. People say I'm outgoing: I love meeting new people, and I organised a charity concert at my school last year. I'm also a bit impatient, I hate waiting in queues! In my free time, I'm into photography and basketball, and I can't stand staying indoors all weekend. What matters most to me is honesty and respect. I would love to discover British school life and improve my English. »",
                "Vérifier : environ 135 mots, des structures variées (I grew up, I feel I belong, I'm into, I can't stand, what matters most to me), deux traits illustrés (outgoing, impatient), hair sans -s, le -s de la 3e personne (my mother is, people say).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque adjectif de personnalité à sa traduction.",
            pairs: [
              { left: "outgoing", right: "sociable, extraverti" },
              { left: "shy", right: "timide" },
              { left: "reliable", right: "fiable" },
              { left: "stubborn", right: "têtu" },
              { left: "easy-going", right: "facile à vivre" },
              { left: "selfish", right: "égoïste" },
            ],
          },
          quiz: [
            { q: "« What is your brother like? » asks about his...", options: ["physical appearance", "favourite hobbies", "personality", "age"], answer: 2, why: "Be like porte sur la personnalité ; look like porterait sur l'apparence." },
            { q: "Choose the correct sentence.", options: ["She has long dark hair.", "She has the hair long and dark.", "She has long darks hairs."], answer: 0, why: "Hair est indénombrable (pas de -s) et l'adjectif, invariable, se place avant le nom." },
            { q: "A person who is « open-minded »...", options: ["never changes their opinion", "talks a lot about themselves", "is always very busy", "accepts different ideas"], answer: 3, why: "Open-minded signifie ouvert d'esprit : on accepte les idées et les modes de vie différents." },
            { q: "Which compound adjective is correct?", options: ["a ten-years-old boy", "a ten-year-old boy", "a ten-years-olds boy"], answer: 1, why: "Un adjectif ne prend jamais de -s en anglais : a ten-year-old boy." },
            { q: "« Shy » is the opposite of...", options: ["outgoing", "reliable", "stubborn", "generous"], answer: 0, why: "Shy (timide) s'oppose à outgoing (sociable, extraverti)." },
          ],
          trap: "Confondre « What is he like? » (la personnalité) et « What does he look like? » (l'apparence), et accorder les adjectifs (« a ten-years-old boy », « longs hairs ») alors qu'ils sont toujours invariables.",
          method: "Pour chaque adjectif de personnalité appris, écrivez une phrase d'exemple qui le prouve (« He's reliable: he always keeps his promises ») : vous retiendrez le mot et vous aurez des exemples prêts pour l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'image-de-soi-en-ligne',
          title: "L'image de soi en ligne : « Selfies and social media »",
          minutes: 35,
          objectives: [
            "Mobiliser le lexique des réseaux sociaux et de l'image de soi.",
            "Situer le phénomène du selfie dans l'histoire de l'autoportrait.",
            "Exprimer l'écart entre apparence et réalité avec look, seem, appear et as if.",
            "Argumenter sur les effets des réseaux sociaux sur l'estime de soi.",
          ],
          course: [
            {
              heading: "De l'autoportrait au selfie",
              paragraphs: [
                "Se représenter soi-même n'a rien de nouveau. Des peintres comme Rembrandt, au XVIIe siècle, ou Frida Kahlo, au XXe siècle, ont réalisé de nombreux autoportraits, pour s'observer, se mettre en scène ou affirmer leur identité. En 1839, l'Américain Robert Cornelius réalise à Philadelphie l'un des tout premiers portraits photographiques d'une personne : c'est un autoportrait.",
                "Le mot selfie vient de self (soi) avec le suffixe familier -ie. Son premier emploi connu remonte à 2002, sur un forum en ligne australien. Le phénomène explose au début des années 2010, avec les smartphones équipés d'une caméra frontale et l'essor de réseaux sociaux fondés sur l'image, comme Instagram, lancé en 2010. En 2013, Oxford Dictionaries élit selfie « mot de l'année » (Word of the Year).",
              ],
              box: { label: "Repère", text: "1839 : autoportrait photographique de Robert Cornelius. 2002 : premier emploi connu du mot selfie (Australie). 2010 : lancement d'Instagram. 2013 : selfie, « Word of the Year » d'Oxford Dictionaries." },
            },
            {
              heading: "Une image soigneusement construite",
              paragraphs: [
                "Sur les réseaux sociaux, on ne montre pas sa vie telle qu'elle est : on la met en scène. On choisit la meilleure photo parmi des dizaines, on la retouche (to edit), on ajoute un filtre, on publie les moments heureux et on cache le reste. Le résultat est un fil soigneusement composé (a curated feed) et une identité numérique (an online persona) qui peut s'éloigner beaucoup de la personne réelle. Des publications « Instagram vs reality » comparent d'ailleurs une photo posée et la même scène sans mise en scène.",
                "Deux œuvres éclairent ce phénomène. Dans Les Métamorphoses du poète latin Ovide, le jeune Narcisse tombe amoureux de son propre reflet dans l'eau : il a donné son nom au narcissisme (narcissism). Dans The Picture of Dorian Gray (1890) d'Oscar Wilde, le héros reste jeune et beau tandis que son portrait, caché, vieillit et s'enlaidit à sa place. Une image parfaite peut ainsi dissimuler une réalité tout autre.",
              ],
              box: { label: "Vocabulaire", text: "To post (publier), a follower (un abonné), a like, a feed (un fil d'actualité), a filter (un filtre), to edit (retoucher), an influencer, to go viral (faire le buzz), to scroll (faire défiler), a profile picture (une photo de profil)." },
            },
            {
              heading: "Estime de soi et pression sociale",
              paragraphs: [
                "Les réseaux sociaux peuvent fragiliser l'estime de soi (self-esteem). En se comparant sans cesse à des images retouchées, certains adolescents développent une image négative de leur corps (body image). Le nombre de likes devient une forme de validation, et la peur de rater quelque chose, le FOMO (fear of missing out), pousse à rester connecté. Le cyberharcèlement (cyberbullying), qui poursuit la victime jusque chez elle, est un autre danger.",
                "Les réseaux ont pourtant des aspects positifs : ils permettent de s'exprimer, de créer, de garder le contact avec des proches éloignés et de trouver une communauté qui partage ses passions. Le mouvement body positivity, par exemple, encourage à montrer des corps réels et variés. Tout dépend donc de l'usage : utiliser les réseaux, ou se laisser utiliser par eux.",
                "Les pouvoirs publics réagissent. Aux États-Unis, une loi de 1998 sur la protection des données des enfants (le Children's Online Privacy Protection Act) explique pourquoi la plupart des plateformes fixent à 13 ans l'âge minimum d'inscription. Au Royaume-Uni, l'Online Safety Act de 2023 impose aux plateformes de protéger les mineurs contre les contenus dangereux. En Australie, une loi votée fin 2024 et appliquée depuis décembre 2025 interdit aux moins de 16 ans d'avoir un compte sur les principaux réseaux sociaux.",
              ],
              box: { label: "À retenir", text: "Self-esteem (estime de soi), body image (image du corps), peer pressure, FOMO (fear of missing out), cyberbullying (cyberharcèlement), screen time (temps d'écran), a digital detox (une pause numérique)." },
            },
            {
              heading: "Langue : dire l'écart entre apparence et réalité",
              paragraphs: [
                "Look se construit avec un adjectif : « She looks happy » (elle a l'air heureuse). Look like se construit avec un nom ou un pronom : « He looks like a film star » (il ressemble à une star de cinéma). On ne dit donc jamais « she looks like happy ». Seem s'emploie avec un adjectif ou avec to + base verbale : « They seem relaxed. She seems to have a perfect life. » Appear (to be) est plus soutenu : « He appears to be confident. »",
                "As if et as though introduisent une proposition complète : « She smiles as if everything were perfect » (comme si tout était parfait). Pour une situation irréelle, on emploie le prétérit, et were est possible à toutes les personnes dans un registre soutenu. Pour opposer l'apparence et la réalité, utilisez but in reality, actually (en fait), whereas (alors que) ou behind the smile : « She looks confident in her pictures, but in reality she is very shy. »",
              ],
              box: { label: "Règle", text: "Look + adjectif (she looks tired). Look like + nom (he looks like his dad). Seem + adjectif ou seem to + base verbale (they seem to be happy). As if + proposition au prétérit pour l'irréel (as if he were famous)." },
            },
          ],
          keyPoints: [
            "De l'autoportrait (Rembrandt, Frida Kahlo, Robert Cornelius en 1839) au selfie, « Word of the Year » d'Oxford Dictionaries en 2013.",
            "En ligne, l'image est mise en scène : filtres, retouches, curated feed, online persona.",
            "Risques : estime de soi fragilisée, body image, FOMO, cyberbullying ; atouts : expression, créativité, lien.",
            "Règles : 13 ans sur la plupart des plateformes (loi américaine de 1998), Online Safety Act (2023), moins de 16 ans exclus en Australie.",
            "Look + adjectif, look like + nom, seem to + base verbale, as if + proposition.",
          ],
          example: {
            statement: "Situation inventée : sur un réseau social, une adolescente publie une photo d'elle, souriante, sur une plage au coucher du soleil, avec la légende « Best day ever! ». Elle confie plus tard à une amie qu'il faisait froid, qu'elle a pris quarante photos avant d'en choisir une et qu'elle a ajouté un filtre. Décrivez en anglais, en quatre phrases, la photo et son écart avec la réalité, en employant look, seem, as if et un connecteur d'opposition.",
            solution: [
              "Décrire l'apparence avec look + adjectif et seem : she looks happy, the evening seems perfect.",
              "Exprimer l'irréel avec as if + prétérit : as if she were on holiday in the tropics.",
              "Opposer la réalité avec but in reality ou actually.",
              "Rédiger : « In the picture, the girl looks really happy and relaxed. The evening seems perfect, as if she were on holiday somewhere warm. But in reality, it was cold, and she took forty pictures before choosing this one. Actually, the beautiful colours of the sunset come from a filter. »",
              "Vérifier : look + adjectif (looks happy), seem + adjectif (seems perfect), as if + prétérit (were), connecteurs d'opposition (But in reality, Actually).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec look, look like ou seem to, à la forme correcte : a) You ___ tired today. b) In this picture, he ___ a famous actor. c) She ___ know everyone at the party. d) That cake ___ delicious. e) This photo ___ a painting. f) He ___ have changed a lot since last year.",
              hint: "Après le blanc, un adjectif appelle look, un nom appelle look like, une base verbale appelle seem to.",
              solution: [
                "a) « You look tired today. » (adjectif tired)",
                "b) « In this picture, he looks like a famous actor. » (nom actor)",
                "c) « She seems to know everyone at the party. » (base verbale know)",
                "d) « That cake looks delicious. » (adjectif delicious)",
                "e) « This photo looks like a painting. » (nom painting)",
                "f) « He seems to have changed a lot since last year. » (seem to + have + participe passé pour un fait passé)",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce texte avec les mots suivants, chacun une fois : followers, filter, scroll, self-esteem, posted, cyberbullying. « Maya, 16, used to (1) ___ through her feed for hours every night. She had two thousand (2) ___ and checked her likes all the time. She never (3) ___ a picture without adding a (4) ___ first. When some classmates started writing cruel comments under her photos, it became (5) ___. Her (6) ___ was so low that she decided to take a break from social media. » (texte inventé)",
              hint: "Cherchez la nature du mot attendu : un verbe après used to, un nom après a, un participe passé après never.",
              solution: [
                "(1) scroll : used to + base verbale, faire défiler son fil.",
                "(2) followers : des abonnés.",
                "(3) posted : prétérit, elle ne publiait jamais une photo...",
                "(4) filter : un filtre.",
                "(5) cyberbullying : des commentaires cruels répétés en ligne, c'est du cyberharcèlement.",
                "(6) self-esteem : son estime de soi était si basse qu'elle a fait une pause.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite. « Do social media make teenagers feel worse about themselves? » Rédigez un texte argumenté de 140 à 160 mots en anglais. Employez au moins une fois look ou seem, et une fois as if.",
              hint: "Construisez un plan nuancé : les risques (comparaison, likes, FOMO), puis les atouts (expression, communauté), puis votre position sur un usage raisonné.",
              solution: [
                "Plan : 1) des effets négatifs réels (comparaison avec des images retouchées, dépendance aux likes) ; 2) des aspects positifs (expression de soi, communautés, soutien) ; 3) position : tout dépend de l'usage, qui s'apprend.",
                "Proposition : « Many teenagers spend hours scrolling through pictures of people who look perfect. It is no surprise that some of them end up feeling worse about themselves. Most images are carefully edited, yet young users compare their real lives with these fake ones, as if everyone else were always happy and beautiful. Moreover, likes can become a kind of drug: when a post gets few reactions, its author may feel rejected. However, social media are not only harmful. They allow teenagers to express their creativity, to keep in touch with friends and to find people who share their passions. Some movements, such as body positivity, even help them accept themselves. In my opinion, social media do not automatically damage self-esteem: it depends on how they are used. Schools and parents should teach young people to recognise edited images and to take regular breaks. »",
                "Vérifier : environ 155 mots, look (people who look perfect) et as if (as if everyone else were), connecteurs (yet, Moreover, However, In my opinion), une position nuancée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : selfies et réseaux sociaux.",
            statements: [
              { text: "Le mot selfie a été inventé aux États-Unis en 2013.", true: false, why: "Son premier emploi connu date de 2002, sur un forum australien ; 2013 est l'année où il devient « Word of the Year »." },
              { text: "Dans Les Métamorphoses d'Ovide, Narcisse tombe amoureux de son propre reflet.", true: true, why: "C'est l'origine du mot narcissisme." },
              { text: "« She looks like happy » est une phrase correcte.", true: false, why: "Look se construit directement avec un adjectif : « She looks happy ». Look like est suivi d'un nom." },
              { text: "Instagram a été lancé en 2010.", true: true, why: "Le réseau est lancé en octobre 2010, au moment où les smartphones se dotent de caméras frontales." },
              { text: "FOMO signifie « fear of missing out », la peur de rater quelque chose.", true: true, why: "C'est l'angoisse de manquer un événement ou une information, qui pousse à rester connecté." },
              { text: "Au Royaume-Uni, aucune loi n'encadre les réseaux sociaux.", true: false, why: "L'Online Safety Act de 2023 impose aux plateformes de protéger les mineurs contre les contenus dangereux." },
              { text: "Dans The Picture of Dorian Gray, c'est le portrait qui vieillit à la place du héros.", true: true, why: "Dorian reste jeune tandis que son portrait caché porte les marques du temps et de ses fautes." },
            ],
          },
          quiz: [
            { q: "In which year did « selfie » become Oxford Dictionaries' Word of the Year?", options: ["2002", "2010", "2013", "2016"], answer: 2, why: "Selfie est élu mot de l'année en 2013 ; son premier emploi connu date de 2002." },
            { q: "FOMO stands for...", options: ["follow our main offers", "fear of missing out", "free online media options"], answer: 1, why: "Fear of missing out : la peur de rater quelque chose, qui pousse à vérifier sans cesse son téléphone." },
            { q: "Choose the correct sentence.", options: ["She looks happy in this photo.", "She looks like happy in this photo.", "She is looking like happy in this photo."], answer: 0, why: "Look + adjectif : she looks happy. Look like n'est suivi que d'un nom ou d'un pronom." },
            { q: "« He talks as if he ___ famous. »", options: ["be", "being", "to be", "was"], answer: 3, why: "As if introduit une proposition complète ; pour l'irréel, on emploie le prétérit (was, ou were dans un registre soutenu)." },
            { q: "In the myth told by Ovid, Narcissus fell in love with...", options: ["the nymph Echo", "his own reflection", "a statue he had made"], answer: 1, why: "Narcisse s'éprend de son propre reflet dans l'eau ; c'est la nymphe Écho qui l'aimait sans retour." },
          ],
          trap: "Écrire « she looks like happy » au lieu de « she looks happy » : look se construit avec un adjectif, look like seulement avec un nom ou un pronom.",
          method: "Pour argumenter sur les réseaux sociaux, préparez à l'avance un tableau à deux colonnes (drawbacks, advantages) avec trois idées et un exemple précis par colonne : vous pourrez ainsi nuancer votre réponse à l'écrit comme à l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'amitie-prejuges',
          title: "Amitié, préjugés et rapport à l'autre",
          minutes: 35,
          objectives: [
            "Mobiliser le lexique de l'amitié, des préjugés et des stéréotypes.",
            "Distinguer stéréotype, préjugé et discrimination.",
            "Employer les verbes à particule (phrasal verbs) qui décrivent les relations.",
            "S'appuyer sur des œuvres anglophones pour réfléchir au regard porté sur l'autre.",
          ],
          course: [
            {
              heading: "Les mots de l'amitié",
              paragraphs: [
                "L'anglais distingue plusieurs degrés : a best friend (un meilleur ami), a close friend (un ami proche), a friend, an acquaintance (une simple connaissance). À l'oral familier, on entend mate en Grande-Bretagne et buddy aux États-Unis. On dit to make friends (se faire des amis), jamais « to do friends ». Les qualités d'un ami : loyal (fidèle), trustworthy (digne de confiance), supportive (qui soutient), caring (attentionné).",
                "Les relations s'expriment souvent avec des verbes à particule : to get on (well) with someone (bien s'entendre avec quelqu'un), to hang out with (traîner, passer du temps avec), to fall out with (se brouiller avec), to make up (se réconcilier), to let someone down (laisser tomber, décevoir quelqu'un). Le proverbe « A friend in need is a friend indeed » rappelle que c'est dans les difficultés que l'on reconnaît ses vrais amis.",
              ],
              box: { label: "Vocabulaire", text: "To make friends, to get on with, to hang out with, to fall out with, to make up, to trust (faire confiance), to let someone down (décevoir), loyal, trustworthy, supportive, an acquaintance (une connaissance)." },
            },
            {
              heading: "Stéréotypes, préjugés, discrimination",
              paragraphs: [
                "Un stéréotype (a stereotype) est une image simplifiée et figée d'un groupe, appliquée à tous ses membres : « All teenagers are lazy. » Un préjugé (a prejudice), comme le mot l'indique, est un jugement porté avant de connaître : une opinion, souvent négative, sur une personne à cause du groupe auquel elle appartient. La discrimination est un acte : traiter quelqu'un de façon injuste à cause de son origine, de son sexe, de sa religion, de son handicap ou de son orientation sexuelle. En Grande-Bretagne, l'Equality Act de 2010 l'interdit.",
                "On passe ainsi de la pensée (le stéréotype) à l'attitude (le préjugé), puis à l'action (la discrimination). Comment briser cette chaîne ? Le psychologue américain Gordon Allport, dans The Nature of Prejudice (1954), a montré que des contacts réguliers entre membres de groupes différents, dans des conditions d'égalité et autour d'objectifs communs, peuvent réduire les préjugés. L'amitié est l'une des formes de ce contact : il est difficile de mépriser un groupe quand on y compte un ami.",
              ],
              box: { label: "Définition", text: "Stereotype : image simplifiée d'un groupe. Prejudice : jugement porté avant de connaître. Discrimination : traitement injuste fondé sur l'appartenance à un groupe. Bias : parti pris, souvent inconscient." },
            },
            {
              heading: "Ce que disent les œuvres",
              paragraphs: [
                "Dans Pride and Prejudice (1813) de Jane Austen, dont le premier titre était First Impressions, Elizabeth Bennet juge Mr Darcy orgueilleux et désagréable dès leur première rencontre, tandis que lui méprise la famille d'Elizabeth, de rang inférieur. Chacun devra dépasser son orgueil et ses préjugés pour voir l'autre tel qu'il est.",
                "Dans To Kill a Mockingbird (1960) de Harper Lee, prix Pulitzer en 1961, la jeune Scout raconte son enfance dans une petite ville de l'Alabama des années 1930. Son père, l'avocat Atticus Finch, défend Tom Robinson, un homme noir accusé à tort par une jeune femme blanche, face aux préjugés racistes de la ville. Atticus apprend à sa fille qu'on ne comprend vraiment quelqu'un qu'en considérant les choses de son point de vue, comme si l'on se glissait dans sa peau. Les enfants découvrent aussi que leur voisin Boo Radley, qu'ils craignaient à cause des rumeurs, est en réalité leur protecteur.",
                "Plus récemment, le roman Wonder (2012) de R. J. Palacio raconte l'entrée au collège d'August Pullman, un garçon de dix ans né avec une malformation du visage. Certains élèves le rejettent, d'autres apprennent à le connaître et deviennent ses amis. L'histoire est racontée par plusieurs narrateurs, ce qui oblige le lecteur à changer de point de vue. L'anglais a une expression pour cela : to put yourself in someone's shoes (se mettre à la place de quelqu'un). Et un proverbe : « Don't judge a book by its cover ».",
              ],
              box: { label: "Repère", text: "Pride and Prejudice, Jane Austen (1813). To Kill a Mockingbird, Harper Lee (1960, prix Pulitzer 1961). Wonder, R. J. Palacio (2012). The Nature of Prejudice, Gordon Allport (1954)." },
            },
            {
              heading: "Langue : les verbes à particule",
              paragraphs: [
                "Un phrasal verb associe un verbe et une particule (up, down, out, on, off, for...), et le sens de l'ensemble est souvent impossible à deviner à partir des mots : to look up to someone signifie admirer quelqu'un, to look down on someone signifie le mépriser, to stand up for someone signifie le défendre, to get over something signifie s'en remettre, to make something up signifie l'inventer.",
                "Certains verbes à particule sont séparables : le complément peut se placer avant ou après la particule (« She let her friends down » ou « She let down her friends »), mais un pronom se place obligatoirement entre le verbe et la particule : « She let them down », jamais « she let down them ». D'autres, surtout ceux qui ont deux particules, ne se séparent jamais : « I get on with her », « We look up to him », « She stood up for me ».",
              ],
              box: { label: "Règle", text: "Verbe séparable + pronom : le pronom se place au milieu (let them down, make it up). Verbes à deux particules : jamais séparés (get on with her, look up to him, stand up for me)." },
            },
          ],
          keyPoints: [
            "To make friends (jamais « do »), get on with, fall out with, make up, let someone down.",
            "Stéréotype (image figée) → préjugé (jugement avant de connaître) → discrimination (acte injuste).",
            "Allport (1954) : le contact entre groupes, à égalité et autour d'objectifs communs, réduit les préjugés.",
            "Œuvres : Pride and Prejudice (1813), To Kill a Mockingbird (1960), Wonder (2012).",
            "To put yourself in someone's shoes ; « Don't judge a book by its cover ».",
            "Pronom entre le verbe et la particule : let them down ; get on with, look up to ne se séparent jamais.",
          ],
          example: {
            statement: "Pour chaque phrase, dites s'il s'agit d'un stéréotype, d'un préjugé ou d'une discrimination, et justifiez (situations inventées) : a) « Teenagers are all addicted to their phones. » b) « I won't talk to the new boy: he comes from a rough area, so he must be violent. » c) « The restaurant refused to hire Amir because of his name. »",
            solution: [
              "Rappeler les critères : le stéréotype est une généralisation sur un groupe ; le préjugé est un jugement sur une personne précise avant de la connaître ; la discrimination est un acte qui la désavantage.",
              "a) Stéréotype : on attribue la même caractéristique à tous les adolescents (« all »), sans exception.",
              "b) Préjugé : le locuteur juge un garçon qu'il ne connaît pas à partir de son quartier d'origine (« so he must be violent »), et ce préjugé le pousse à l'éviter.",
              "c) Discrimination : un traitement injuste (un refus d'embauche) fondé sur l'origine supposée du nom, interdit en Grande-Bretagne par l'Equality Act de 2010.",
              "Réponse : a) stéréotype, b) préjugé, c) discrimination.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le verbe à particule qui convient, à la forme correcte : get on with, fall out, make up, look up to, let down, stand up for. a) I really ___ my older sister: she's my role model. b) Tom and Jack ___ over a girl last month, but they ___ yesterday. c) Do you ___ your parents? d) When the others laughed at her, Sam ___ her. e) You promised to come and you didn't: you ___ me ___.",
              hint: "Repérez le temps de chaque phrase (présent, prétérit) et cherchez le sens : admirer, se brouiller, se réconcilier, s'entendre, défendre, décevoir.",
              solution: [
                "a) « I really look up to my older sister » : admirer (présent simple).",
                "b) « Tom and Jack fell out over a girl last month, but they made up yesterday » : se brouiller, puis se réconcilier (prétérit, avec last month et yesterday).",
                "c) « Do you get on with your parents? » : bien s'entendre avec.",
                "d) « Sam stood up for her » : prendre sa défense (prétérit irrégulier stand, stood).",
                "e) « You let me down » : décevoir ; le pronom me se place entre let et down.",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en anglais : a) Je m'entends très bien avec mon frère. b) Elle s'est fait des amis rapidement. c) Ne jugez pas les gens sur leur apparence. d) Il défend toujours ses amis. e) Mettez-vous à sa place (à elle). f) Ils se sont disputés, puis ils se sont réconciliés.",
              hint: "Pensez aux phrasal verbs du cours et à l'expression avec shoes ; se faire des amis se dit avec make.",
              solution: [
                "a) « I get on very well with my brother. »",
                "b) « She made friends quickly. » (make friends, jamais « do friends »)",
                "c) « Don't judge people by their appearance. » (ou « by their looks »)",
                "d) « He always stands up for his friends. » (adverbe always avant le verbe, -s de la 3e personne)",
                "e) « Put yourself in her shoes. »",
                "f) « They fell out, then they made up. »",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite. « Can friendship overcome prejudice? » Rédigez un texte argumenté de 140 à 160 mots en anglais, en vous appuyant sur au moins une œuvre étudiée dans le cours et en employant au moins deux phrasal verbs.",
              hint: "Partez d'un exemple littéraire précis, élargissez avec l'idée d'Allport sur le contact, puis nuancez : l'amitié ne suffit pas toujours, la loi et l'éducation comptent aussi.",
              solution: [
                "Plan : 1) les préjugés naissent souvent de l'ignorance de l'autre ; 2) l'amitié permet de connaître l'autre (Wonder, Allport) ; 3) nuance : l'amitié ne suffit pas contre des préjugés collectifs (To Kill a Mockingbird) ; conclusion.",
                "Proposition : « Prejudice often comes from ignorance: we judge people we have never really met. That is why friendship can be a powerful way to overcome it. In R. J. Palacio's novel Wonder, many pupils look down on August because of his face. But when Jack and Summer start hanging out with him, they discover a funny and brave boy, and they stand up for him. The psychologist Gordon Allport made a similar point in 1954: contact between different groups, on equal terms, reduces prejudice. However, friendship is not always enough. In To Kill a Mockingbird, Atticus Finch shows great respect for Tom Robinson, but he cannot change the racism of a whole town. Individual friendships cannot replace fair laws and education. To conclude, I believe friendship is a first step: it teaches us to put ourselves in other people's shoes, but society must take the next steps. »",
                "Vérifier : environ 160 mots, deux œuvres citées avec précision, des phrasal verbs (look down on, hang out with, stand up for), une concession introduite par However, une conclusion personnelle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque verbe à particule à son sens.",
            pairs: [
              { left: "to get on with", right: "s'entendre avec" },
              { left: "to fall out with", right: "se brouiller avec" },
              { left: "to make up", right: "se réconcilier" },
              { left: "to look up to", right: "admirer" },
              { left: "to look down on", right: "mépriser" },
              { left: "to stand up for", right: "défendre, prendre le parti de" },
            ],
          },
          quiz: [
            { q: "« To look up to someone » means to...", options: ["admire them", "despise them", "search for them", "visit them"], answer: 0, why: "Look up to signifie admirer ; look down on signifie au contraire mépriser." },
            { q: "A « prejudice » is...", options: ["a fair judgement based on facts", "an opinion formed without real knowledge", "a law that protects minorities from abuse"], answer: 1, why: "Un préjugé est un jugement porté avant de connaître la personne, souvent à cause de son groupe." },
            { q: "Who wrote To Kill a Mockingbird?", options: ["Jane Austen", "R. J. Palacio", "Harper Lee", "Zadie Smith"], answer: 2, why: "Harper Lee publie To Kill a Mockingbird en 1960 et reçoit le prix Pulitzer en 1961." },
            { q: "« We fell out last week, but we've made up. » This means they...", options: ["met for the very first time last week", "stopped being friends for good", "went on a long trip together", "argued, then became friends again"], answer: 3, why: "To fall out : se brouiller ; to make up : se réconcilier." },
            { q: "Choose the correct sentence.", options: ["She stood him up for.", "She stood up for him.", "She stood for up him."], answer: 1, why: "Stand up for a deux particules et ne se sépare jamais : le complément se place à la fin." },
          ],
          trap: "Confondre stéréotype, préjugé et discrimination, et placer le pronom après la particule d'un verbe séparable (« she let down them » au lieu de « she let them down »).",
          method: "Apprenez les phrasal verbs par paires de sens opposés (look up to et look down on, fall out et make up) et toujours dans une phrase complète : le contexte fixe le sens bien mieux qu'une liste.",
        },
      ],
    },
    /* ==================================================================== */
    /* VIVRE ENTRE GÉNÉRATIONS                                              */
    /* ==================================================================== */
    {
      id: 'generations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'modeles-familiaux',
          title: "Les modèles familiaux dans le monde anglophone",
          minutes: 30,
          objectives: [
            "Nommer les membres de la famille et les différents types de familles en anglais.",
            "Décrire l'évolution des modèles familiaux dans le monde anglophone depuis les années 1950.",
            "Employer correctement le génitif (cas possessif) en 's.",
            "Comparer des modèles familiaux et exprimer une opinion nuancée.",
          ],
          course: [
            {
              heading: "Le vocabulaire de la famille",
              paragraphs: [
                "Attention d'abord à un faux ami : parents désigne uniquement le père et la mère ; pour parler de la famille au sens large (oncles, cousins, grands-parents), on dit relatives. Les frères et sœurs sont des siblings, un enfant unique est an only child, des jumeaux sont twins. On parle de grandparents, de great-grandparents (arrière-grands-parents), d'uncle et d'aunt, de nephew (neveu) et de niece (nièce), et de cousin pour un cousin comme pour une cousine.",
                "La belle-famille par alliance se forme avec -in-law : mother-in-law (belle-mère, mère du conjoint), brother-in-law (beau-frère), the in-laws (les beaux-parents). La famille recomposée se forme avec step- et half- : le nouveau mari de votre mère est votre stepfather, son fils né d'une autre union est votre stepbrother, et un frère qui a un seul parent en commun avec vous est votre half-brother. Une famille d'accueil est a foster family, un enfant adopté an adopted child, un parrain a godfather.",
              ],
              box: { label: "Règle", text: "In-law : par mariage (mother-in-law, la mère du conjoint). Step- : par remariage d'un parent, sans lien de sang (stepmother, stepsister). Half- : un seul parent en commun (half-brother, half-sister)." },
            },
            {
              heading: "Des familles plus diverses depuis les années 1950",
              paragraphs: [
                "Après la Seconde Guerre mondiale, aux États-Unis comme au Royaume-Uni, la famille nucléaire (nuclear family) est présentée comme le modèle : un couple marié et ses enfants, avec un père qui gagne l'argent du foyer (the breadwinner) et une mère au foyer (a housewife). Les séries télévisées américaines de la fin des années 1950, comme Leave It to Beaver, diffusent cette image idéale de la famille de banlieue.",
                "Depuis les années 1960 et 1970, les modèles se sont diversifiés. Les divorces sont devenus plus faciles et plus fréquents (au Royaume-Uni, le Divorce Reform Act de 1969 en est une étape), beaucoup de couples vivent ensemble sans être mariés (cohabiting couples), les familles monoparentales (single-parent ou lone-parent families) et recomposées (blended families ou stepfamilies) se sont multipliées. Les couples de même sexe ont obtenu le droit de se marier : au Canada en 2005, en Angleterre et au pays de Galles en 2014, dans tous les États-Unis en 2015 avec l'arrêt Obergefell v. Hodges de la Cour suprême.",
                "La série américaine Modern Family (2009 à 2020) a mis en scène cette diversité à travers trois foyers d'une même famille : Jay, remarié avec une femme plus jeune, Gloria, dont il élève le fils ; sa fille Claire, mariée et mère de trois enfants ; et son fils Mitchell, qui élève avec son mari Cameron une petite fille adoptée.",
              ],
              box: { label: "Repère", text: "Années 1950 : idéal de la famille nucléaire. 1969 : Divorce Reform Act (Royaume-Uni). Mariage pour les couples de même sexe : Canada 2005, Angleterre et pays de Galles 2014, États-Unis 2015 (Obergefell v. Hodges)." },
            },
            {
              heading: "Familles élargies et générations sous le même toit",
              paragraphs: [
                "Dans de nombreuses cultures du monde anglophone, la famille élargie (the extended family) reste centrale. En Inde, la tradition de la joint family réunit plusieurs générations sous un même toit : les grands-parents, leurs fils, leurs belles-filles et leurs petits-enfants. Chez les Maoris de Nouvelle-Zélande, la whānau désigne la famille élargie, qui joue un grand rôle dans l'éducation des enfants. Dans de nombreuses cultures aborigènes d'Australie, les sœurs de la mère peuvent aussi être appelées « mère ».",
                "Au Royaume-Uni et aux États-Unis aussi, les foyers multigénérationnels (multigenerational households) reviennent, souvent pour des raisons économiques : le coût du logement pousse de jeunes adultes à rester chez leurs parents ou à y revenir après leurs études. On parle de boomerang generation, la « génération boomerang », qui part puis revient. Des grands-parents gardent aussi leurs petits-enfants pendant que les parents travaillent.",
              ],
              box: { label: "Vocabulaire", text: "Nuclear family (famille nucléaire), extended family (famille élargie), single-parent family (famille monoparentale), blended family (famille recomposée), cohabiting couple (couple non marié), same-sex couple, breadwinner (soutien de famille), to raise children (élever des enfants)." },
            },
            {
              heading: "Langue : le génitif en 's",
              paragraphs: [
                "Pour exprimer l'appartenance ou la relation entre personnes, l'anglais place le possesseur en premier, suivi de 's, puis de ce qui est possédé, sans article : « my mother's car » (la voiture de ma mère), « Jack's sister » (la sœur de Jack). Avec un pluriel en -s, on ajoute seulement l'apostrophe : « my parents' house » (la maison de mes parents). Avec un pluriel irrégulier, on ajoute 's : « the children's room », « women's rights ».",
                "Quand deux personnes possèdent ensemble, seul le dernier nom prend 's : « Tom and Anna's son » (leur fils commun). Avec un nom composé, 's se place à la fin : « my brother-in-law's flat ». Le génitif s'emploie aussi avec des expressions de temps (« today's news », « a week's holiday ») et peut se passer du nom quand il désigne un lieu connu : « at my grandmother's » (chez ma grand-mère). En revanche, pour les objets, on préfère of : « the end of the film », « the door of the house ».",
              ],
              box: { label: "Règle", text: "Possesseur + 's + possédé, sans article : my sister's bike. Pluriel en -s : apostrophe seule (my parents' car). Pluriel irrégulier : 's (the children's toys). Possession commune : Tom and Anna's son. Chez : at my aunt's." },
            },
          ],
          keyPoints: [
            "Parents = le père et la mère ; relatives = la famille au sens large ; siblings = frères et sœurs.",
            "In-law (par mariage), step- (par remariage, sans lien de sang), half- (un seul parent en commun).",
            "Années 1950 : idéal de la famille nucléaire ; ensuite divorces, couples non mariés, familles monoparentales et recomposées.",
            "Mariage des couples de même sexe : Canada 2005, Angleterre et pays de Galles 2014, États-Unis 2015.",
            "Famille élargie : joint family (Inde), whānau (Maoris) ; retour des foyers multigénérationnels, boomerang generation.",
            "Génitif : my mother's car, my parents' house, the children's room, at my grandmother's.",
          ],
          example: {
            statement: "Voici une famille (personnages inventés) : Peter et Mary ont deux enfants, Jack et Emma. Emma est mariée à David ; ils ont une fille, Lily. Jack a divorcé, puis s'est remarié avec Sarah, qui avait déjà un fils, Tom. Jack et Sarah ont ensuite eu une fille, Rose. Rédigez en anglais, avec le génitif, cinq phrases qui précisent : ce que Lily est pour Jack, ce que Tom est pour Jack, ce que Rose est pour Tom, ce que David est pour Peter, ce que Peter est pour Lily.",
            solution: [
              "Lily est la fille d'Emma, sœur de Jack : « Lily is Jack's niece. »",
              "Tom est le fils de Sarah, la seconde femme de Jack, sans lien de sang avec lui : « Tom is Jack's stepson. »",
              "Rose et Tom ont la même mère (Sarah) mais pas le même père : « Rose is Tom's half-sister. »",
              "David a épousé Emma, la fille de Peter : « David is Peter's son-in-law. »",
              "Peter est le père d'Emma, mère de Lily : « Peter is Lily's grandfather. »",
              "Vérifier : chaque phrase suit l'ordre possesseur + 's + relation, sans article (jamais « the niece of Jack » dans ce cas).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Réécrivez avec le génitif quand c'est possible : a) the car of my father b) the bedroom of the children c) the house of my parents d) the son of Tom and Anna (leur fils commun) e) the news of today f) the wife of my brother-in-law g) the end of the film.",
              hint: "Repérez si le possesseur est singulier, pluriel en -s ou pluriel irrégulier ; pour un objet, on garde généralement of.",
              solution: [
                "a) my father's car",
                "b) the children's bedroom (pluriel irrégulier : 's)",
                "c) my parents' house (pluriel en -s : apostrophe seule)",
                "d) Tom and Anna's son (possession commune : 's sur le dernier nom)",
                "e) today's news (expression de temps)",
                "f) my brother-in-law's wife (nom composé : 's à la fin)",
                "g) the end of the film : on garde of, car le possesseur est un objet.",
              ],
            },
            {
              level: 2,
              statement: "Trouvez le mot anglais qui correspond à chaque définition : a) my mother's sister b) my aunt's children c) my husband's mother d) my father's son, born to his second wife (I am the child of his first wife) e) my stepmother's daughter from her first marriage f) my brother's daughter g) a child who has no brothers or sisters.",
              hint: "Demandez-vous à chaque fois si le lien passe par le sang, par le mariage (in-law) ou par un remariage (step-), et si l'on partage un ou deux parents (half-).",
              solution: [
                "a) my aunt (ma tante)",
                "b) my cousins (mes cousins, au masculin comme au féminin)",
                "c) my mother-in-law (ma belle-mère, mère du conjoint)",
                "d) my half-brother : nous avons le même père mais pas la même mère.",
                "e) my stepsister : aucun parent en commun, nous sommes liés par le remariage.",
                "f) my niece (ma nièce)",
                "g) an only child (un enfant unique)",
              ],
            },
            {
              level: 3,
              statement: "Lisez cet article (texte inventé pour l'entraînement) : « UNDER ONE ROOF. When Priya Shah, 27, lost her job in Leicester last year, she moved back in with her parents. She is far from alone: with rents rising, many young adults in Britain cannot afford to leave the family home. In the Shah household, three generations now share the same house, since Priya's grandmother joined them after her husband died. “Some evenings it's chaos,” Priya laughs, “but my grandma cooks, my dad helps me with job applications, and I teach Grandma how to video-call her sisters in India.” Sociologists point out, however, that young adults who cannot leave home may feel they are losing their independence. » 1) Pourquoi Priya est-elle revenue chez ses parents ? 2) Qui vit dans la maison ? 3) Trouvez l'expression qui signifie « ne pas avoir les moyens de ». 4) Qu'apporte chaque génération aux autres ? 5) Quelle réserve est exprimée, et par qui ? 6) En 60 à 80 mots, répondez en anglais : « Would you like to live with three generations under one roof? »",
              hint: "Pour la question 4, relevez les trois propositions reliées par « but » et « and » dans la citation de Priya.",
              solution: [
                "1) Elle a perdu son emploi à Leicester l'année dernière ; plus largement, la hausse des loyers empêche beaucoup de jeunes adultes de quitter le foyer familial.",
                "2) Trois générations : Priya, ses parents et sa grand-mère, venue vivre avec eux après la mort de son mari.",
                "3) « cannot afford to » (to afford : avoir les moyens de).",
                "4) La grand-mère cuisine, le père aide Priya à rédiger ses candidatures, et Priya apprend à sa grand-mère à faire des appels vidéo avec ses sœurs restées en Inde : chacun apporte quelque chose.",
                "5) Des sociologues (« Sociologists point out ») soulignent que les jeunes adultes qui ne peuvent pas partir risquent de se sentir privés de leur indépendance. « however » marque l'opposition.",
                "6) Proposition : « I think I would enjoy it, at least for a while. Living with my grandparents would allow me to hear their stories and learn from their experience, and they would feel less lonely. However, sharing a house with so many people can be stressful: there is less privacy and more arguments about noise or chores. In my opinion, it can work if everyone has their own space and respects the others' habits. » (environ 75 mots)",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque mot de la famille à sa traduction.",
            pairs: [
              { left: "relatives", right: "les membres de la famille" },
              { left: "siblings", right: "frères et sœurs" },
              { left: "stepfather", right: "beau-père (nouveau mari de la mère)" },
              { left: "half-sister", right: "demi-sœur" },
              { left: "mother-in-law", right: "belle-mère (mère du conjoint)" },
              { left: "an only child", right: "un enfant unique" },
            ],
          },
          quiz: [
            { q: "Your father's new wife is your...", options: ["mother-in-law", "half-sister", "godmother", "stepmother"], answer: 3, why: "Step- marque un lien créé par le remariage d'un parent ; mother-in-law est la mère du conjoint." },
            { q: "« Relatives » means...", options: ["your father and mother only", "your close friends and neighbours", "members of your family"], answer: 2, why: "Relatives désigne la famille au sens large ; parents ne désigne que le père et la mère." },
            { q: "Choose the correct form for « the room of my two sisters ».", options: ["my sisters' room", "my sister's room", "my sisters's room", "the room's my sisters"], answer: 0, why: "Avec un pluriel en -s, on ajoute seulement l'apostrophe : my sisters' room. My sister's room renverrait à une seule sœur." },
            { q: "Since when have same-sex couples been able to marry in England and Wales?", options: ["1967", "1998", "2005", "2014"], answer: 3, why: "Les premiers mariages ont eu lieu en 2014 ; le Canada l'avait permis dès 2005." },
            { q: "A family in which one parent raises the children alone is a...", options: ["blended family", "nuclear family", "lone-parent family", "traditional extended family"], answer: 2, why: "On dit lone-parent ou single-parent family ; une blended family est une famille recomposée." },
          ],
          trap: "Traduire « mes parents » par relatives ou « ma famille » par my parents, et oublier que l'apostrophe seule suffit après un pluriel en -s (« my parents' house », pas « my parents's house »).",
          method: "Dessinez votre propre arbre généalogique (réel ou inventé) et écrivez sous chaque personne une phrase au génitif (« Lucie is my mother's sister, she's my aunt ») : vous fixez à la fois le vocabulaire et la règle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'generation-gap',
          title: "Parents et adolescents : « The generation gap »",
          minutes: 35,
          objectives: [
            "Mobiliser le lexique des relations et des conflits entre parents et adolescents.",
            "Exprimer la permission, l'obligation et l'interdiction avec let, make, be allowed to, have to et mustn't.",
            "Situer la notion de « generation gap » et quelques-unes de ses représentations culturelles.",
            "Argumenter et négocier en interaction en confrontant les points de vue.",
          ],
          course: [
            {
              heading: "Le fossé des générations : une notion née dans les années 1960",
              paragraphs: [
                "L'expression generation gap se répand dans les années 1960, aux États-Unis et au Royaume-Uni. Une jeunesse nombreuse, née après la guerre, rejette alors une partie des valeurs de ses parents, marqués par la crise économique des années 1930 et par la Seconde Guerre mondiale : c'est l'époque de la contre-culture, du rock, du mouvement pour les droits civiques et des manifestations contre la guerre du Vietnam. Le fossé porte sur les goûts, mais aussi sur les valeurs et la vision du monde.",
                "Depuis, on désigne chaque génération par un nom, avec des bornes qui varient selon les sources. Celles du Pew Research Center, un institut américain, sont souvent reprises : la Silent Generation (1928 à 1945), les Baby Boomers (1946 à 1964), la Generation X (1965 à 1980, nom popularisé par le roman de Douglas Coupland en 1991), les Millennials ou Generation Y (1981 à 1996) et la Generation Z (1997 à 2012), suivie de la Generation Alpha. En 2019, la formule moqueuse « OK boomer », lancée par de jeunes internautes pour couper court aux critiques de leurs aînés, est devenue virale.",
              ],
              box: { label: "Repère", text: "Bornes du Pew Research Center : Silent Generation (1928-1945), Baby Boomers (1946-1964), Generation X (1965-1980), Millennials (1981-1996), Generation Z (1997-2012), puis Generation Alpha." },
            },
            {
              heading: "Parents et adolescents : les sujets de friction",
              paragraphs: [
                "Les désaccords portent souvent sur les mêmes sujets : l'heure de retour le soir (the curfew), le temps d'écran (screen time), les tâches ménagères (chores), l'argent de poche (pocket money au Royaume-Uni, an allowance aux États-Unis), les devoirs, les amis, les vêtements, les sorties. Un adolescent peut trouver ses parents trop stricts (strict), trop protecteurs (overprotective), ou se plaindre qu'ils le harcèlent de reproches (they nag him). Les parents, eux, peuvent priver de sortie (to ground someone) ou confisquer un téléphone.",
                "Ces tensions sont en partie normales : l'adolescence est l'âge où l'on revendique son autonomie (independence) et son intimité (privacy), tandis que les parents restent responsables de la sécurité de leurs enfants. Le conflit n'empêche pas l'attachement, et la confiance (trust) se construit souvent par la négociation : des règles discutées, des libertés accordées progressivement. On parle de helicopter parents pour des parents qui « survolent » sans cesse la vie de leurs enfants et décident de tout à leur place.",
              ],
              box: { label: "Vocabulaire", text: "Curfew (heure limite de retour), chores (tâches ménagères), pocket money (argent de poche), to be grounded (être privé de sortie), to nag (harceler de reproches), strict, lenient (indulgent), to rebel (se rebeller), to trust (faire confiance), to argue (se disputer)." },
            },
            {
              heading: "Le conflit des générations dans les œuvres",
              paragraphs: [
                "Le roman de J. D. Salinger The Catcher in the Rye (1951) donne la parole à Holden Caulfield, un adolescent de seize ans renvoyé de son lycée, qui erre quelques jours à New York. Il rejette le monde des adultes, qu'il juge hypocrite : son mot favori pour le décrire est phony (faux, hypocrite). Le livre est devenu un symbole de la révolte adolescente.",
                "Au cinéma, Rebel Without a Cause (La Fureur de vivre, 1955), de Nicholas Ray, fait de James Dean l'icône d'une jeunesse incomprise par ses parents. Plus récemment, Lady Bird (2017), de Greta Gerwig, raconte la dernière année de lycée d'une jeune fille de Sacramento, en Californie, en conflit permanent avec une mère qui l'aime profondément mais la critique sans cesse. Ces œuvres montrent que le conflit des générations est aussi une histoire d'amour maladroite.",
              ],
            },
            {
              heading: "Langue : permission, obligation, interdiction",
              paragraphs: [
                "Let et make sont suivis d'un complément et de la base verbale, sans to : « My parents let me stay out until eleven » (ils me laissent sortir), « They make me do the dishes » (ils me font faire la vaisselle, ils m'obligent à). Au passif, make prend to : « I was made to apologise » (on m'a obligé à m'excuser). Allow, lui, se construit avec to : « They allow me to go out. » Au passif, be allowed to exprime la permission à tous les temps : « I'm not allowed to use my phone at dinner. I wasn't allowed to go to the party. »",
                "Have to exprime une obligation qui vient de l'extérieur (une règle) : « I have to be home by ten. » Must exprime une obligation ressentie ou imposée par celui qui parle : « I must study harder. » Au négatif, le sens change complètement : mustn't exprime l'interdiction (« You mustn't smoke here », c'est interdit), alors que don't have to exprime l'absence d'obligation (« You don't have to come », ce n'est pas obligatoire).",
              ],
              box: { label: "Règle", text: "Let / make + complément + base verbale (let me go, make me do). Passif : I was made to do. Allow + complément + to (allow me to go) ; be allowed to. Mustn't = interdiction ; don't have to = pas d'obligation." },
            },
          ],
          keyPoints: [
            "Generation gap : expression répandue dans les années 1960, avec la contre-culture et le refus des valeurs des parents.",
            "Pew Research Center : Baby Boomers (1946-1964), Generation X (1965-1980), Millennials (1981-1996), Generation Z (1997-2012).",
            "Sujets de friction : curfew, screen time, chores, pocket money ; to be grounded, to nag, strict, overprotective.",
            "Œuvres : The Catcher in the Rye (1951), Rebel Without a Cause (1955), Lady Bird (2017).",
            "Let / make + base verbale sans to ; allow + to ; passif : I was made to, I'm allowed to.",
            "Mustn't = interdiction ; don't have to = absence d'obligation.",
          ],
          example: {
            statement: "Voici les règles de la maison de Sam, 15 ans (données fictives) : rentrer avant 22 heures le samedi ; pas de téléphone à table ; promener le chien chaque soir ; peut inviter des amis le samedi après-midi ; pas obligé de faire son lit le week-end. Rédigez cinq phrases en anglais, du point de vue de Sam, en employant let, make, be allowed to, mustn't et don't have to.",
            solution: [
              "Associer chaque règle à la structure adaptée : une obligation imposée (make), une interdiction (mustn't ou not allowed to), une permission (let, allowed to), une absence d'obligation (don't have to).",
              "« I have to be home by 10 pm on Saturdays. » (obligation venue de l'extérieur, la règle des parents)",
              "« I mustn't use my phone at the table. » (interdiction ; on peut dire aussi « I'm not allowed to use my phone at the table »)",
              "« My parents make me walk the dog every evening. » (make + complément + base verbale, sans to)",
              "« They let me invite friends on Saturday afternoons. » (let + complément + base verbale)",
              "« I don't have to make my bed at the weekend. » (absence d'obligation, et non interdiction)",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec les mots suivants, chacun une fois : curfew, chores, grounded, pocket money, nag, strict. a) My parents are very ___: I can't go out during the week. b) I get ten pounds of ___ a week. c) I came home at midnight, so I'm ___ for a week. d) My ___ is 10 pm on Saturdays. e) Washing up and taking out the rubbish are my daily ___. f) My mum always ___s me about my messy room.",
              hint: "Cherchez la nature du mot attendu : un adjectif après are very, un nom après of ou my, un participe après I'm, un verbe après always.",
              solution: [
                "a) strict : ils sont très stricts.",
                "b) pocket money : dix livres d'argent de poche par semaine.",
                "c) grounded : privé de sortie pendant une semaine.",
                "d) curfew : l'heure limite de retour est 22 heures le samedi.",
                "e) chores : les tâches ménagères quotidiennes.",
                "f) nags : elle me harcèle de reproches au sujet de ma chambre en désordre.",
              ],
            },
            {
              level: 2,
              statement: "Corrigez l'erreur dans chaque phrase et expliquez-la : a) My parents let me to go to the concert. b) My dad made me to tidy my room. c) I'm not allow to stay up late. d) You don't have to cheat in an exam! (le sens voulu est « c'est interdit ») e) They don't allow me go out on school nights. f) Last year, I must wear a uniform.",
              hint: "Vérifiez trois points : la présence ou l'absence de to après let, make et allow ; la forme allowed ; le sens de mustn't et de don't have to.",
              solution: [
                "a) « My parents let me go to the concert. » Let est suivi de la base verbale, sans to.",
                "b) « My dad made me tidy my room. » Make à l'actif se construit sans to.",
                "c) « I'm not allowed to stay up late. » Au passif, il faut le participe passé allowed.",
                "d) « You mustn't cheat in an exam! » Pour une interdiction, on emploie mustn't ; don't have to signifie « ce n'est pas obligatoire ».",
                "e) « They don't allow me to go out on school nights. » Allow se construit avec to.",
                "f) « Last year, I had to wear a uniform. » Must n'a pas de prétérit : on emploie had to.",
              ],
            },
            {
              level: 3,
              statement: "Interaction écrite. Rédigez en anglais un dialogue de 12 à 16 répliques entre Jess, 16 ans, et sa mère. Jess veut aller à une fête samedi soir et rentrer à 1 heure du matin ; sa mère trouve que c'est trop tard. Elles finissent par trouver un compromis. Employez au moins trois structures du cours (let, make, be allowed to, have to, mustn't, don't have to) et des expressions d'interaction (accord, désaccord, demande de précision).",
              hint: "Un bon dialogue de négociation avance par étapes : la demande, le refus argumenté, les questions, une proposition, une contre-proposition, l'accord.",
              solution: [
                "Structure : demande de Jess, refus de la mère, questions de précision, arguments de Jess, inquiétudes de la mère, proposition de compromis, accord avec conditions.",
                "Proposition : « Jess: Mum, can I go to Chloe's party on Saturday? Mum: Where is it, and what time does it finish? Jess: At her house. It finishes at one, so I'd like to stay until the end. Mum: One in the morning? No way, that's far too late. Jess: But everyone's allowed to stay! Mum: I'm not everyone's mother. How would you get home? Jess: Chloe's dad could drive us. Mum: What do you mean by “us”? Jess: Me and Léa. She lives next door. Mum: I see. Well, I'm not happy about one o'clock. Jess: What about midnight, then? Mum: Midnight is fine, but you have to text me when you arrive and you mustn't leave the party alone. Jess: Deal! So you'll let me go? Mum: Yes, I'll let you go. And you don't have to wake me up when you get back. »",
                "Vérifier : 16 répliques, plusieurs structures du cours (allowed to, have to, mustn't, let me go, don't have to), des expressions d'interaction (What do you mean by...?, I see, What about...?, No way, Deal!), un compromis final.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les générations dans l'ordre chronologique, de la plus ancienne à la plus récente.",
            items: [
              "Silent Generation",
              "Baby Boomers",
              "Generation X",
              "Millennials (Generation Y)",
              "Generation Z",
              "Generation Alpha",
            ],
          },
          quiz: [
            { q: "« My parents let me ___ out until 11 pm. »", options: ["go", "to go", "going", "gone"], answer: 0, why: "Let + complément + base verbale, sans to : let me go." },
            { q: "Which sentence expresses a prohibition?", options: ["You don't have to wear a tie at the party.", "You needn't come early tomorrow.", "You mustn't use your phone.", "You can leave whenever you want."], answer: 2, why: "Mustn't exprime l'interdiction ; don't have to et needn't expriment l'absence d'obligation." },
            { q: "According to the Pew Research Center, Baby Boomers were born...", options: ["between 1928 and 1945", "between 1965 and 1980", "between 1981 and 1996", "between 1946 and 1964"], answer: 3, why: "Les Baby Boomers sont nés pendant le baby-boom de l'après-guerre, de 1946 à 1964." },
            { q: "In the UK, « pocket money » is money...", options: ["parents give their children", "you keep in a savings account", "you earn with a part-time job"], answer: 0, why: "Pocket money (allowance aux États-Unis) est l'argent de poche donné par les parents." },
            { q: "« I was made ___ for being rude. »", options: ["apologise", "apologising", "to apologise", "for apologising"], answer: 2, why: "À l'actif, make se construit sans to ; au passif, il prend to : I was made to apologise." },
          ],
          trap: "Ajouter to après let ou make à l'actif (« let me to go », « made me to tidy »), et employer don't have to pour une interdiction alors qu'il signifie « ce n'est pas obligatoire ».",
          method: "Pour choisir entre mustn't et don't have to, traduisez mentalement : si vous pensez « il ne faut pas, c'est interdit », c'est mustn't ; si vous pensez « ce n'est pas la peine, ce n'est pas obligatoire », c'est don't have to.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'transmettre',
          title: "Transmettre : mémoire, traditions et valeurs",
          minutes: 35,
          objectives: [
            "Mobiliser le lexique de la mémoire, de l'héritage et de la transmission.",
            "Présenter quelques fêtes et traditions du monde anglophone et expliquer leur origine.",
            "Évoquer des habitudes passées avec used to et would, et les distinguer de be used to.",
            "Expliquer le rôle de la transmission entre les générations.",
          ],
          course: [
            {
              heading: "Transmettre : le lexique",
              paragraphs: [
                "Trois mots traduisent « héritage ». Heritage désigne le patrimoine culturel transmis par une communauté (cultural heritage, national heritage). Legacy désigne ce qu'une personne ou une époque laisse derrière elle (the legacy of the British Empire). Inheritance désigne l'héritage matériel reçu à la mort de quelqu'un (to inherit, hériter). On transmet avec to pass down, to hand down ou to pass on : « This recipe has been handed down from generation to generation. »",
                "Nos ancêtres sont nos ancestors, nos descendants nos descendants, nos racines nos roots ; l'arbre généalogique est a family tree, et un objet de famille transmis de génération en génération est a family heirloom. Les coutumes sont des customs, les valeurs des values. Attention à deux pièges : memory signifie la mémoire ou un souvenir (« childhood memories »), alors qu'a souvenir est un objet rapporté de voyage ; et to remember (se souvenir) ne se confond pas avec to remind (rappeler quelque chose à quelqu'un) : « This song reminds me of my grandfather. »",
              ],
              box: { label: "Vocabulaire", text: "Heritage (patrimoine), legacy (héritage laissé), inheritance (héritage matériel), to inherit, to pass down, to hand down, ancestors, roots, a family tree, a family heirloom, customs, values, memories (souvenirs)." },
            },
            {
              heading: "Fêtes et traditions du monde anglophone",
              paragraphs: [
                "Aux États-Unis, Thanksgiving se célèbre le quatrième jeudi de novembre : les familles se réunissent autour d'une dinde, en souvenir du repas de récolte partagé en 1621 par les colons de Plymouth, les Pilgrims, et les Wampanoag, un peuple amérindien. Au Canada, Thanksgiving tombe le deuxième lundi d'octobre. Juneteenth, le 19 juin, rappelle le jour de 1865 où les esclaves de Galveston, au Texas, ont appris qu'ils étaient libres ; c'est un jour férié fédéral depuis 2021.",
                "Au Royaume-Uni, Bonfire Night, le 5 novembre, commémore l'échec du Gunpowder Plot de 1605 : un groupe de conspirateurs catholiques, dont Guy Fawkes, voulait faire sauter le Parlement et le roi Jacques Ier. On allume des feux de joie et on tire des feux d'artifice. En Écosse, Burns Night, le 25 janvier, honore le poète national Robert Burns (1759-1796) par un dîner où l'on sert le haggis. Le 17 mars, St Patrick's Day célèbre le saint patron de l'Irlande, bien au-delà de l'île.",
                "Le 11 novembre, jour de l'armistice de 1918, Remembrance Day rend hommage aux soldats morts à la guerre, au Royaume-Uni et dans le Commonwealth. On porte un coquelicot rouge (a poppy), symbole inspiré du poème In Flanders Fields (1915) du Canadien John McCrae, et l'on observe deux minutes de silence à 11 heures. En Australie et en Nouvelle-Zélande, Anzac Day, le 25 avril, commémore le débarquement de Gallipoli en 1915.",
              ],
              box: { label: "Repère", text: "17 mars : St Patrick's Day. 25 avril : Anzac Day. 19 juin : Juneteenth. 5 novembre : Bonfire Night (Gunpowder Plot, 1605). 11 novembre : Remembrance Day. 4e jeudi de novembre : Thanksgiving (États-Unis). 25 janvier : Burns Night." },
            },
            {
              heading: "Mémoire familiale et récits transmis",
              paragraphs: [
                "Avant l'écriture, et souvent encore aujourd'hui, la transmission passe par la parole : on parle de tradition orale (oral tradition) et de storytelling. Les peuples aborigènes d'Australie transmettent depuis des millénaires, par des récits, des chants et des danses, les histoires du Dreaming, qui expliquent la création du monde et relient chaque groupe à son territoire. Chez les Maoris de Nouvelle-Zélande, la whakapapa, la généalogie, se récite et rattache chaque personne à ses ancêtres.",
                "En 1976, l'écrivain afro-américain Alex Haley publie Roots, où il retrace l'histoire de sa famille jusqu'à Kunta Kinte, un jeune homme enlevé en Gambie au XVIIIe siècle et réduit en esclavage en Amérique. L'adaptation télévisée de 1977 connaît un succès immense et pousse de nombreux Américains à rechercher leurs origines, même si l'exactitude des recherches généalogiques de Haley a ensuite été discutée.",
                "Aujourd'hui, la recherche des origines passe aussi par les sites de généalogie, les tests ADN ou des émissions comme Who Do You Think You Are?, diffusée par la BBC depuis 2004. Aux États-Unis, le projet StoryCorps, lancé en 2003, enregistre des conversations entre proches (des petits-enfants interrogeant leurs grands-parents, par exemple) et les conserve à la Bibliothèque du Congrès.",
              ],
            },
            {
              heading: "Langue : used to, would, be used to",
              paragraphs: [
                "Used to + base verbale exprime une habitude ou un état passés qui ne sont plus vrais aujourd'hui : « My grandmother used to live on a farm » (elle vivait dans une ferme, ce n'est plus le cas). À la forme négative et interrogative, on emploie did et use, sans d : « She didn't use to work. Did you use to play outside? » Would + base verbale exprime aussi une action répétée dans le passé, souvent dans un récit nostalgique : « Every summer, we would go to the seaside. » Mais would ne s'emploie pas pour un état : on dit « I used to have a dog », jamais « I would have a dog » dans ce sens.",
                "Ne confondez pas avec be used to + nom ou verbe en -ing, qui signifie « être habitué à » : « I'm used to getting up early » (j'ai l'habitude de me lever tôt). Get used to + nom ou -ing signifie « s'habituer à » : « She is getting used to life in London. » Ici, to est une préposition, d'où la forme en -ing.",
              ],
              box: { label: "Règle", text: "Used to + base verbale : habitude ou état passés, révolus (I used to live in Leeds). Would + base verbale : action répétée dans le passé, jamais un état. Be used to + -ing : être habitué à. Get used to + -ing : s'habituer à." },
            },
          ],
          keyPoints: [
            "Heritage (patrimoine), legacy (héritage laissé), inheritance (héritage matériel) ; to pass down, to hand down.",
            "Memory = mémoire ou souvenir ; a souvenir = un objet rapporté de voyage ; remind ≠ remember.",
            "Thanksgiving (4e jeudi de novembre), Juneteenth (19 juin), Bonfire Night (5 novembre), Remembrance Day (11 novembre, poppy).",
            "Tradition orale : Dreaming des Aborigènes, whakapapa des Maoris ; Roots d'Alex Haley (1976).",
            "Used to + base verbale : habitude ou état révolus ; would : action répétée, jamais un état.",
            "Be used to + -ing : être habitué à ; get used to + -ing : s'habituer à.",
          ],
          example: {
            statement: "Vous avez interrogé votre grand-mère (personnage inventé) sur son enfance. Notes : vivait dans un petit village du pays de Galles ; pas de télévision à la maison ; chaque dimanche, toute la famille se réunissait chez ses grands-parents ; son grand-père racontait des histoires en gallois ; aujourd'hui, elle vit à Cardiff et elle a l'habitude d'utiliser une tablette. Rédigez un paragraphe de 60 à 80 mots en anglais avec used to, would et be used to.",
            solution: [
              "Repérer les états passés (vivre au village, ne pas avoir de télévision) : used to, et non would.",
              "Repérer les actions répétées (les réunions du dimanche, les histoires) : would ou used to.",
              "Repérer l'habitude actuelle (utiliser une tablette) : be used to + -ing.",
              "Rédiger : « When my grandmother was a child, she used to live in a small village in Wales. Her family didn't use to have a television. Every Sunday, the whole family would meet at her grandparents' house, and her grandfather would tell stories in Welsh. She still remembers them today. Now she lives in Cardiff, and she is used to using a tablet to video-call us! »",
              "Vérifier : environ 70 mots, used to pour les états (used to live, didn't use to have), would pour les actions répétées (would meet, would tell), be used to + -ing (is used to using).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec used to, would, be used to ou get used to à la forme correcte (parfois deux réponses sont possibles) : a) My grandfather ___ work in a coal mine. b) Every Sunday, Grandma ___ make a huge roast. c) I ___ have long hair, but I cut it last year. d) She moved to London last month, so she ___ (not) the noise yet. e) It took me months to ___ driving on the left. f) ___ you ___ play outside when you were young?",
              hint: "Distinguez un état (used to seulement), une action répétée (used to ou would) et une habitude présente ou en cours d'acquisition (be used to, get used to, suivis d'un nom ou d'un -ing).",
              solution: [
                "a) « My grandfather used to work in a coal mine. » (situation passée révolue ; would work est possible mais moins naturel pour un emploi durable)",
                "b) « Every Sunday, Grandma would make (ou used to make) a huge roast. » (action répétée)",
                "c) « I used to have long hair. » (état passé : would est impossible)",
                "d) « She isn't used to the noise yet. » (être habitué à + nom)",
                "e) « It took me months to get used to driving on the left. » (s'habituer à + -ing)",
                "f) « Did you use to play outside when you were young? » (interrogative avec did et use, sans d)",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce témoignage (texte inventé pour l'entraînement) : « Every 25 January, my family holds a Burns supper. When I was little, my grandad would always recite Burns's “Address to a Haggis” while my dad cut the haggis open with a knife. We would eat it with neeps and tatties, which are mashed turnips and potatoes. Grandad died two years ago, so now I read the poem. At first I was terrified, but I'm getting used to it. I'm not sure I'll pass the tradition on to my own children, but I hope I will. » 1) Quelle tradition est décrite et quand a-t-elle lieu ? 2) Quel rôle jouait le grand-père ? 3) Que mange-t-on ? 4) Quel changement a eu lieu et pourquoi ? 5) Relevez une forme exprimant une action répétée dans le passé et une forme signifiant « s'habituer à ». 6) Que signifie « pass the tradition on » ?",
              hint: "Repérez les formes avec would, getting used to et le phrasal verb avec pass ; Burns Night a lieu le 25 janvier.",
              solution: [
                "1) Un Burns supper, le dîner écossais organisé le 25 janvier en l'honneur du poète Robert Burns.",
                "2) Il récitait toujours le poème de Burns « Address to a Haggis » pendant que le père ouvrait le haggis au couteau.",
                "3) Du haggis, accompagné de neeps and tatties, c'est-à-dire de purée de navets et de pommes de terre.",
                "4) Le grand-père est mort il y a deux ans : c'est désormais le narrateur qui lit le poème.",
                "5) Action répétée : « would always recite » ou « We would eat ». S'habituer : « I'm getting used to it ».",
                "6) To pass on : transmettre. Le narrateur n'est pas sûr de transmettre la tradition à ses enfants, mais il l'espère.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite. « Are traditions still important for young people today? » Rédigez un texte argumenté de 140 à 160 mots en anglais. Appuyez-vous sur au moins un exemple précis du monde anglophone et employez used to ou would au moins une fois.",
              hint: "Opposez deux idées (les traditions relient les générations et donnent des repères ; certaines semblent dépassées ou imposées), puis montrez qu'une tradition vivante évolue avec chaque génération.",
              solution: [
                "Plan : 1) les traditions créent un lien entre générations et un sentiment d'appartenance (exemple : Thanksgiving, Remembrance Day) ; 2) certaines paraissent dépassées ou commerciales ; 3) position : les traditions survivent quand chaque génération se les approprie.",
                "Proposition : « In a fast-changing world, some people think traditions belong to the past. Yet they still matter to many young people. First, traditions bring generations together. In the United States, Thanksgiving is one of the few days when grandparents, parents and teenagers sit at the same table. Second, they help us remember. Every November, millions of Britons wear a poppy for Remembrance Day, and many young people wear one too, in memory of soldiers they never knew. However, some traditions can feel old-fashioned or too commercial, and teenagers may follow them only because they have to. My grandparents used to spend Christmas Eve at church, for instance, whereas my family simply shares a meal. To conclude, I believe traditions remain important as long as each generation is free to adapt them: a tradition that never changes eventually dies. »",
                "Vérifier : environ 155 mots, deux exemples précis (Thanksgiving, Remembrance Day), used to (used to spend), des connecteurs (Yet, First, Second, However, To conclude), une position nuancée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : traditions et transmission.",
            statements: [
              { text: "Thanksgiving est célébré le même jour aux États-Unis et au Canada.", true: false, why: "Le quatrième jeudi de novembre aux États-Unis, le deuxième lundi d'octobre au Canada." },
              { text: "Bonfire Night commémore l'échec d'un complot visant à faire sauter le Parlement en 1605.", true: true, why: "C'est le Gunpowder Plot, auquel participait Guy Fawkes." },
              { text: "Le coquelicot porté en novembre rend hommage aux soldats morts à la guerre.", true: true, why: "Il est inspiré du poème In Flanders Fields (1915) de John McCrae." },
              { text: "On peut dire « I would have a dog » pour « j'avais un chien autrefois ».", true: false, why: "Would ne s'emploie pas pour un état : on dit « I used to have a dog »." },
              { text: "Juneteenth est un jour férié fédéral aux États-Unis depuis 2021.", true: true, why: "Il rappelle le 19 juin 1865, quand les esclaves de Galveston, au Texas, apprirent leur libération." },
              { text: "En anglais, a souvenir désigne d'abord un souvenir dans la mémoire.", true: false, why: "A souvenir est un objet rapporté de voyage ; un souvenir dans la mémoire se dit a memory." },
              { text: "« I'm used to getting up early » signifie « j'ai l'habitude de me lever tôt ».", true: true, why: "Be used to + -ing exprime une habitude actuelle ; used to + base verbale renverrait au passé." },
            ],
          },
          quiz: [
            { q: "Bonfire Night, on 5 November, commemorates...", options: ["the end of the First World War in 1918", "the coronation of King James I", "the arrival of the Pilgrims in America", "the failed Gunpowder Plot"], answer: 3, why: "Le 5 novembre rappelle l'échec du complot des poudres de 1605 contre le roi et le Parlement." },
            { q: "« When I was a child, I ___ in a small village. » (I don't live there now.)", options: ["used to live", "would live", "am used to living", "use to live"], answer: 0, why: "Pour un état passé révolu, on emploie used to + base verbale ; would ne s'emploie pas pour un état." },
            { q: "« She's used to ___ early. »", options: ["get up", "got up", "getting up", "have got up"], answer: 2, why: "Dans be used to, to est une préposition : elle est suivie d'un verbe en -ing." },
            { q: "A « family heirloom » is...", options: ["an object passed down in a family", "a family tree drawn by a child", "the oldest living member of a family"], answer: 0, why: "Un heirloom est un objet de famille transmis de génération en génération." },
            { q: "On Remembrance Day, people wear...", options: ["a white rose", "a shamrock", "a red poppy", "a daffodil"], answer: 2, why: "Le coquelicot rouge (poppy) rappelle les champs de bataille de la Première Guerre mondiale." },
          ],
          trap: "Employer would pour un état passé (« I would have long hair ») au lieu de used to, et confondre used to + base verbale (habitude passée) avec be used to + -ing (être habitué à).",
          method: "Interrogez un grand-parent ou une personne âgée sur son enfance, prenez des notes, puis rédigez son portrait en anglais en vérifiant pour chaque verbe s'il s'agit d'un état (used to) ou d'une action répétée (would ou used to).",
        },
      ],
    },
  ],
}
