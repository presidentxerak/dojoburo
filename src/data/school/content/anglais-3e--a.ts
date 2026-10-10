import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'anglais-3e',
  chapters: [
    {
      id: 'school-life',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'school-systems',
          title: 'Les systèmes scolaires britannique et américain',
          minutes: 30,
          objectives: [
            "Décrire les grandes étapes de la scolarité en Angleterre et aux États-Unis.",
            "Mobiliser le lexique de l'école en anglais britannique et en anglais américain.",
            "Comparer le système scolaire français avec les systèmes anglophones.",
          ],
          course: [
            {
              heading: "L'école en Angleterre : de Reception à la sixth form",
              paragraphs: [
                "Le Royaume-Uni réunit quatre nations (England, Scotland, Wales, Northern Ireland) et chacune organise son propre système scolaire. Ce cours décrit le système de l'Angleterre, le plus souvent étudié. Les enfants entrent à la primary school vers 4 ou 5 ans, dans une classe appelée Reception, puis passent de Year 1 à Year 6.",
                "À 11 ans, ils entrent à la secondary school, en Year 7 (l'équivalent de notre 6e). Les classes sont numérotées en continu depuis le primaire : Year 7, Year 8, Year 9, Year 10, Year 11. À la fin de Year 11, vers 16 ans, les élèves passent les GCSEs (General Certificate of Secondary Education), un examen dans chaque matière étudiée.",
                "Ensuite, beaucoup d'élèves continuent deux ans en sixth form (Year 12 et Year 13), dans leur école ou dans un college, et passent les A levels (Advanced levels) vers 18 ans. Les A levels, en général trois matières choisies, permettent d'entrer à l'université. En Angleterre, les jeunes doivent rester en formation jusqu'à 18 ans : à l'école, en apprentissage (apprenticeship) ou en formation professionnelle.",
              ],
              box: { label: "Repère", text: "6e = Year 7 ; 5e = Year 8 ; 4e = Year 9 ; 3e = Year 10 ; 2nde = Year 11 (GCSEs) ; 1re = Year 12 ; Tle = Year 13 (A levels)." },
            },
            {
              heading: "La vie quotidienne dans une école anglaise",
              paragraphs: [
                "Dans la plupart des écoles anglaises, même publiques, les élèves portent un uniforme (a school uniform) : souvent un blazer aux couleurs de l'école, une chemise, une cravate (a tie) et un pull (a jumper). La journée commence souvent par l'assembly (un rassemblement de l'école ou d'un niveau) ou par un moment avec le form tutor, le professeur qui suit une classe. L'école est dirigée par le headteacher.",
                "De nombreuses écoles sont divisées en houses (maisons) qui s'affrontent dans des compétitions sportives ou culturelles et gagnent des points. L'année scolaire compte trois trimestres (terms) : autumn term, spring term et summer term, chacun coupé par une semaine de vacances, la half-term. À midi, les élèves mangent un school dinner à la cantine ou apportent un packed lunch.",
                "Il existe plusieurs types d'écoles. La grande majorité des élèves vont dans des state schools, gratuites. Dans certaines régions, les grammar schools sélectionnent leurs élèves à 11 ans par un examen, le eleven-plus. Les independent schools (ou private schools) sont payantes ; paradoxalement, les plus anciennes et les plus célèbres, comme Eton ou Harrow, sont appelées public schools. Beaucoup d'entre elles sont des boarding schools (internats).",
              ],
              box: { label: "Attention", text: "Une « public school » britannique est une école privée et payante (Eton, Harrow). Une école publique gratuite se dit « state school » au Royaume-Uni et « public school » aux États-Unis." },
            },
            {
              heading: "L'école aux États-Unis : de kindergarten à la graduation",
              paragraphs: [
                "Aux États-Unis, l'éducation est organisée par chaque État et par des school districts : les règles varient donc d'un endroit à l'autre. En général, les enfants entrent en kindergarten à 5 ans, puis vont à l'elementary school (de la 1st grade à la 5th grade), à la middle school (6th, 7th et 8th grades), et enfin à la high school (de la 9th à la 12th grade).",
                "Les élèves de high school ont un nom selon leur année : freshman (9th grade), sophomore (10th grade), junior (11th grade) et senior (12th grade). L'année de senior se termine par la graduation, une cérémonie où les élèves, en toge et chapeau carré (cap and gown), reçoivent leur high school diploma. Les notes vont de A (excellent) à F (fail), et la moyenne s'appelle le GPA (Grade Point Average).",
                "La vie scolaire américaine a ses symboles : le yellow school bus, les casiers (lockers) dans les couloirs, la cafeteria, le homeroom (la classe de rattachement) et de nombreuses activités extrascolaires (extracurricular activities) : équipes de sport, club de théâtre, orchestre (the band). L'année se termine souvent par le prom, le bal de fin d'année, et par le yearbook, l'album des élèves. Dans la plupart des public schools, il n'y a pas d'uniforme.",
              ],
              box: { label: "Repère", text: "6e = 6th grade ; 5e = 7th grade ; 4e = 8th grade ; 3e = 9th grade (freshman year, première année de high school) ; 2nde = 10th grade ; 1re = 11th grade ; Tle = 12th grade." },
            },
            {
              heading: "Le lexique : anglais britannique et anglais américain",
              paragraphs: [
                "Certains mots changent d'un côté à l'autre de l'Atlantique. Emploi du temps : timetable (UK), schedule (US). Récréation : break (UK), recess (US). Chef d'établissement : headteacher (UK), principal (US). Note : mark (UK), grade (US). Gomme : rubber (UK), eraser (US). Mathématiques : maths (UK), math (US). Vacances : holidays (UK), vacation (US). Cantine : canteen (UK), cafeteria (US).",
                "Attention aux faux amis. « Passer un examen » se dit to take an exam (en anglais britannique, on dit aussi to sit an exam). To pass an exam signifie « réussir un examen », et to fail an exam « échouer à un examen ». De même, a college en Angleterre peut être un établissement pour les 16-18 ans, alors qu'aux États-Unis college désigne l'université.",
                "Quelques mots utiles partout : a subject (une matière), homework (les devoirs, indénombrable : some homework, jamais « homeworks »), a classmate (un camarade de classe), detention (une retenue), the playground (la cour), a lesson ou a class (un cours), to be good at (être bon en) : I'm good at history.",
              ],
              box: { label: "À retenir", text: "To take (UK : to sit) an exam = passer un examen. To pass an exam = réussir. To fail an exam = échouer. Homework est indénombrable : I have a lot of homework." },
            },
          ],
          keyPoints: [
            "Angleterre : primary school (Reception, Years 1 à 6), secondary school (Years 7 à 11), sixth form (Years 12 et 13).",
            "GCSEs à 16 ans (fin de Year 11), A levels à 18 ans (fin de Year 13).",
            "États-Unis : elementary school, middle school, high school (grades 9 à 12) ; freshman, sophomore, junior, senior.",
            "La 3e correspond à Year 10 en Angleterre et à la 9th grade aux États-Unis.",
            "Une public school britannique est privée et payante ; une public school américaine est publique et gratuite.",
            "UK / US : timetable / schedule, break / recess, headteacher / principal, mark / grade.",
            "To pass an exam = réussir ; passer un examen = to take an exam.",
          ],
          example: {
            statement: "Un élève français entre en 3e. À quelle classe cela correspond-il en Angleterre et aux États-Unis ? Présentez-le en deux phrases en anglais, avec le vocabulaire de chaque pays.",
            solution: [
              "Repérer la place de la 3e : c'est la quatrième année du collège, l'année des 14-15 ans.",
              "En Angleterre, la 6e correspond à Year 7 : la 3e correspond donc à Year 10, en secondary school, un an avant les GCSEs.",
              "Aux États-Unis, la 6e correspond à la 6th grade : la 3e correspond donc à la 9th grade, la première année de high school. L'élève est un freshman.",
              "Rédiger avec le conditionnel puisque c'est une hypothèse : « In England, he would be in Year 10 at secondary school, one year before his GCSEs. »",
              "Réponse : « In England, he would be in Year 10 at secondary school, one year before his GCSEs. In the USA, he would be a freshman in 9th grade, in his first year of high school. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'équivalent américain de chacun de ces mots britanniques : a) timetable ; b) break ; c) headteacher ; d) mark ; e) rubber ; f) holidays.",
              hint: "Relisez la dernière partie du cours : pour chaque mot, pensez à une série ou un film américain qui se passe dans un lycée.",
              solution: [
                "a) timetable → schedule (l'emploi du temps).",
                "b) break → recess (la récréation).",
                "c) headteacher → principal (le chef d'établissement).",
                "d) mark → grade (la note).",
                "e) rubber → eraser (la gomme).",
                "f) holidays → vacation (les vacances).",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte puis répondez aux questions en français. « Hi, I'm Olivia. I'm 15 and I live in Leeds, in the north of England. I'm in Year 10 at a state secondary school. I wear a uniform: a black blazer, a white shirt and a striped tie. School starts at 8.45 with form time or assembly. My favourite subject is history, but I'm not very good at maths. At the end of next year, I'm going to take my GCSEs. After that, I'd like to go to sixth form and study three A levels. » 1) Dans quelle classe et dans quel type d'école est Olivia ? 2) Décrivez son uniforme. 3) Quand passera-t-elle ses GCSEs et à quel âge environ ? 4) À quelle classe française correspond sa classe actuelle ? 5) Que veut-elle faire ensuite ?",
              hint: "Cherchez les mots-clés Year, school, GCSEs, sixth form, et servez-vous du tableau des équivalences.",
              solution: [
                "1) Elle est en Year 10, dans une state secondary school, c'est-à-dire un établissement secondaire public et gratuit.",
                "2) Elle porte un blazer noir, une chemise blanche et une cravate rayée (« striped tie »).",
                "3) Elle passera ses GCSEs à la fin de l'année prochaine, donc à la fin de Year 11, vers 16 ans.",
                "4) Year 10 correspond à la 3e.",
                "5) Elle veut aller en sixth form et préparer trois A levels, l'examen qui permet d'entrer à l'université.",
              ],
            },
            {
              level: 3,
              statement: "Écrivez un e-mail de 80 à 100 mots à un correspondant américain, Jake, qui est en 9th grade. Comparez votre collège et sa high school : donnez au moins quatre différences (uniforme, horaires ou repas, notes, examen de fin d'année), utilisez le vocabulaire américain et terminez par une question.",
              hint: "Organisez votre e-mail : une formule d'ouverture, une phrase de présentation, quatre différences reliées par but, while ou however, puis une question et une formule de fin.",
              solution: [
                "Choisir les différences : pas d'uniforme dans les deux cas mais pas de casiers en France, notes sur 20 contre lettres de A à F, déjeuner à la cantine, brevet en fin de 3e contre graduation en fin de 12th grade.",
                "Exemple de production : « Hi Jake, I'm in 3e, the last year of collège, so it's like your 9th grade. Like you, I don't wear a uniform, but we don't have lockers. Our grades are out of 20, while yours go from A to F. At lunchtime, I eat in the cafeteria, but we only have one hour. On Wednesday afternoons, we usually have no classes. At the end of the year, I'm going to take an exam called the brevet. You will graduate from high school in 12th grade, right? What extracurricular activities do you do? Bye, Lucas »",
                "Vérifier : vocabulaire américain (grades, cafeteria, extracurricular activities), comparaisons avec but, while et like, une question finale.",
                "Résultat : un e-mail d'environ 95 mots qui présente quatre différences et se termine par une question.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur l'école en Angleterre et aux États-Unis.",
            statements: [
              { text: "In England, Year 7 is the first year of secondary school.", true: true, why: "Les élèves entrent à la secondary school à 11 ans, en Year 7, l'équivalent de la 6e." },
              { text: "A British « public school » is a free state school.", true: false, why: "C'est l'inverse : une public school britannique, comme Eton, est une école privée et payante." },
              { text: "In the USA, a sophomore is a student in 10th grade.", true: true, why: "Freshman (9th), sophomore (10th), junior (11th), senior (12th)." },
              { text: "English pupils take their GCSEs at 18, at the end of Year 13.", true: false, why: "Les GCSEs se passent vers 16 ans, à la fin de Year 11 ; à 18 ans, ce sont les A levels." },
              { text: "Most American public schools require a uniform.", true: false, why: "La plupart des public schools américaines n'imposent pas d'uniforme, contrairement aux écoles anglaises." },
              { text: "« To pass an exam » means « passer un examen ».", true: false, why: "To pass an exam signifie « réussir » ; passer un examen se dit « to take an exam »." },
              { text: "In American schools, grades often go from A to F.", true: true, why: "A est la meilleure note, F (fail) signifie l'échec." },
            ],
          },
          quiz: [
            { q: "In England, pupils take their GCSEs at the end of...", options: ["Year 6", "Year 13", "Year 11", "Year 9"], answer: 2, why: "Les GCSEs terminent Year 11, vers 16 ans ; Year 13 se termine par les A levels." },
            { q: "An American student in 12th grade is called a...", options: ["senior", "freshman", "junior", "sophomore"], answer: 0, why: "Le senior est en dernière année de high school, la 12th grade, juste avant la graduation." },
            { q: "What is the American word for « break » at school?", options: ["lunch", "recess", "timetable", "term"], answer: 1, why: "La récréation se dit break en anglais britannique et recess en anglais américain." },
            { q: "Which French class corresponds to Year 10 in England?", options: ["la 4e", "la 2nde", "la 5e", "la 3e"], answer: 3, why: "Year 7 = 6e, donc Year 10 = 3e." },
            { q: "Eton is a famous British...", options: ["free state comprehensive school", "independent boarding school", "American high school"], answer: 1, why: "Eton est un internat privé et payant, que les Britanniques appellent une public school." },
          ],
          trap: "Confondre « to pass an exam » (réussir) avec « passer un examen » (to take an exam), ou croire qu'une « public school » britannique est une école publique et gratuite.",
          method: "Construisez un tableau à trois colonnes (France, Angleterre, États-Unis) avec une ligne par âge, de 11 à 18 ans : vous retrouverez chaque équivalence d'un coup d'œil et retiendrez le lexique en contexte.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'present-perfect',
          title: 'Le present perfect : bilan et expérience',
          minutes: 35,
          objectives: [
            "Former le present perfect (have / has + participe passé) à toutes les formes.",
            "Employer le present perfect pour faire un bilan et parler d'une expérience.",
            "Distinguer le present perfect du prétérit (past simple).",
            "Utiliser correctement for, since, ever, never, just, already et yet.",
          ],
          course: [
            {
              heading: "La formation du present perfect",
              paragraphs: [
                "Le present perfect se forme avec l'auxiliaire have (has à la 3e personne du singulier) suivi du participe passé du verbe. Pour les verbes réguliers, le participe passé se termine en -ed : work → worked, play → played, study → studied. Pour les verbes irréguliers, il faut l'apprendre : be → been, go → gone, see → seen, do → done, eat → eaten, write → written, take → taken, meet → met, buy → bought.",
                "À l'oral et dans les textes familiers, on contracte l'auxiliaire : I've, you've, we've, they've, he's, she's, it's. Attention, 's peut signifier is ou has : dans « She's finished », 's = has, car il est suivi d'un participe passé. À la forme négative, on ajoute not à l'auxiliaire : haven't, hasn't. À la forme interrogative, on inverse l'auxiliaire et le sujet : Have you finished? Has she called? Les réponses courtes reprennent l'auxiliaire : Yes, I have. / No, she hasn't.",
              ],
              box: { label: "Formule", text: "Sujet + have / has + participe passé. I have (I've) visited London. She has never been to Wales. Have you finished? Yes, I have. / No, I haven't." },
            },
            {
              heading: "Le bilan : un lien entre le passé et le présent",
              paragraphs: [
                "Le present perfect relie une action passée au moment présent : ce qui compte, c'est le résultat visible maintenant, pas la date. « I've lost my keys » : je n'ai pas mes clés en ce moment, je ne peux pas entrer. « She has broken her arm » : elle a le bras dans le plâtre aujourd'hui. On parle de bilan, comme quand on fait les comptes à la fin d'une période.",
                "Trois petits mots accompagnent souvent ce bilan. Just (« venir de ») se place entre l'auxiliaire et le participe : « I've just finished my homework » (je viens de finir mes devoirs). Already (déjà) se place au même endroit dans les phrases affirmatives : « We've already visited the museum. » Yet (déjà, dans une question ; pas encore, dans une négation) se place en fin de phrase : « Have you finished yet? » « I haven't finished yet. »",
                "On utilise aussi le present perfect pour faire le bilan d'une période qui n'est pas terminée : this year, this week, today, so far (jusqu'à présent). « This year, I have read five novels » : l'année n'est pas finie, le compte peut encore augmenter.",
              ],
            },
            {
              heading: "L'expérience : ever, never, been ou gone",
              paragraphs: [
                "Le present perfect sert à parler de ce que l'on a vécu (ou non) au cours de sa vie, sans préciser quand. Ever (déjà, une fois dans sa vie) s'emploie dans les questions : « Have you ever been to Scotland? » Never (jamais) s'emploie dans les phrases affirmatives, sans autre négation : « I have never eaten sushi. » On ne dit pas « I haven't never ».",
                "Distinguez been et gone. « He has been to New York » : il y est allé et il est revenu, c'est une expérience. « He has gone to New York » : il est parti à New York et il y est encore (ou il est en route). Enfin, on trouve souvent ever après un superlatif : « It's the best film I have ever seen » (le meilleur film que j'aie jamais vu).",
              ],
              box: { label: "À retenir", text: "Have you ever + participe passé ? = Avez-vous déjà... ? I have never + participe passé = Je n'ai jamais... Been to = allé et revenu ; gone to = parti là-bas." },
            },
            {
              heading: "For et since : une situation qui dure encore",
              paragraphs: [
                "Quand une situation a commencé dans le passé et dure encore aujourd'hui, le français utilise le présent avec « depuis » : « J'habite ici depuis trois ans. » L'anglais utilise le present perfect : « I have lived here for three years. » La question correspondante est « How long have you lived here? » (Depuis combien de temps habitez-vous ici ?).",
                "For introduit une durée : for three years, for two weeks, for a long time, for ages. Since introduit le point de départ, une date ou un moment précis : since 2020, since Monday, since September, since I was ten. Pour une action en cours qui se prolonge, on trouve aussi le present perfect en be + -ing : « I have been learning English for four years. »",
              ],
              box: { label: "Règle", text: "For + durée (for two years, for a long time). Since + point de départ (since 2022, since September, since I was ten). « Depuis » + présent en français = present perfect en anglais." },
            },
            {
              heading: "Present perfect ou prétérit ?",
              paragraphs: [
                "Le prétérit (past simple) s'emploie quand l'action est située à un moment passé et terminé, précisé ou évident : yesterday, last week, last summer, two years ago, in 2019, when I was a child. « I visited London last summer » : on donne la date. « I have visited London » : c'est une expérience, la date n'a pas d'importance. Une question qui commence par When? appelle toujours le prétérit : « When did you visit London? »",
                "Dans une conversation, on commence souvent par le present perfect pour annoncer une expérience, puis on passe au prétérit pour donner les détails : « Have you ever been to London? Yes, I have. I went there in 2023 with my class. We visited the British Museum and we took the Tube. »",
              ],
              box: { label: "À retenir", text: "Moment passé précisé et terminé (yesterday, ago, last, in 2019, When...?) → prétérit. Pas de date, bilan, expérience, situation qui dure encore (for, since) → present perfect." },
            },
          ],
          keyPoints: [
            "Present perfect = have / has + participe passé (worked, been, seen, done...).",
            "Bilan : l'action passée a un résultat présent (I've lost my keys).",
            "Expérience sans date : Have you ever...? I have never...",
            "Just, already : entre l'auxiliaire et le participe ; yet : en fin de question ou de négation.",
            "For + durée, since + point de départ : « depuis » + présent en français.",
            "Moment passé daté (yesterday, ago, last, in 2019) : prétérit, jamais present perfect.",
          ],
          example: {
            statement: "Complétez avec le present perfect ou le prétérit, puis justifiez votre choix. 1) I ___ (never / see) snow. 2) We ___ (move) to Lyon in 2021. 3) We ___ (live) in Lyon since 2021. 4) Look! Tom ___ (just / break) the window.",
            solution: [
              "1) Aucune date, on parle d'une expérience de vie, avec never : « I have never seen snow. » (see → seen)",
              "2) In 2021 est une date passée et terminée : prétérit. « We moved to Lyon in 2021. »",
              "3) Since 2021 indique une situation qui a commencé en 2021 et dure encore : « We have lived in Lyon since 2021. »",
              "4) Look! montre un résultat visible maintenant, et just signifie « venir de » : « Tom has just broken the window. » (break → broken)",
              "Réponses : have never seen ; moved ; have lived ; has just broken.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez ces phrases au present perfect. a) she / visit / Edinburgh. b) they / not / finish / their project. c) you / ever / meet / a famous person ? d) I / already / do / my homework. e) he / just / leave.",
              hint: "Have ou has selon le sujet, puis le participe passé ; ever, already et just se placent entre l'auxiliaire et le participe.",
              solution: [
                "a) She has visited Edinburgh. (verbe régulier : visited)",
                "b) They haven't finished their project.",
                "c) Have you ever met a famous person? (meet → met)",
                "d) I have already done my homework. (do → done)",
                "e) He has just left. (leave → left)",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en anglais en choisissant for ou since. a) J'apprends l'anglais depuis quatre ans. b) Elle est dans ce collège depuis septembre. c) Nous nous connaissons depuis l'école primaire. d) Il n'a pas plu depuis deux semaines.",
              hint: "Repérez d'abord si « depuis » est suivi d'une durée (for) ou d'un point de départ (since). Le verbe se met au present perfect.",
              solution: [
                "a) Quatre ans est une durée : « I have learnt English for four years. » (ou « I have been learning English for four years »).",
                "b) Septembre est un point de départ : « She has been at this school since September. »",
                "c) L'école primaire est un point de départ : « We have known each other since primary school. »",
                "d) Deux semaines est une durée : « It hasn't rained for two weeks. »",
              ],
            },
            {
              level: 3,
              statement: "Bilan de fin de trimestre : écrivez 6 à 8 phrases sur ce que vous avez fait (ou pas encore fait) depuis la rentrée. Employez au moins une fois just, already, yet, never et ever, et ajoutez une phrase au prétérit avec une date précise.",
              hint: "Pensez à vos cours, à vos sorties et à vos activités. Pour la phrase au prétérit, choisissez un marqueur comme last week ou in October.",
              solution: [
                "Lister des idées : une sortie, un livre lu, un exposé, une note, une activité, un objectif pas encore atteint.",
                "Exemple : « Since September, I have worked hard in English. I have already read two novels in class and I have just finished a presentation about London. I have never been so busy! I haven't chosen my work experience placement yet. Have you ever done a work placement? Last week, we went to a museum with our history teacher. So far, it has been a great term. »",
                "Vérifier : chaque present perfect n'a pas de date ; la seule date (last week) est au prétérit (went) ; just et already sont avant le participe, yet est en fin de phrase.",
                "Résultat : 8 phrases correctes qui emploient just, already, yet, never et ever, plus un prétérit daté.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque verbe irrégulier à son participe passé.",
            pairs: [
              { left: "go", right: "gone" },
              { left: "see", right: "seen" },
              { left: "write", right: "written" },
              { left: "be", right: "been" },
              { left: "eat", right: "eaten" },
              { left: "buy", right: "bought" },
            ],
          },
          quiz: [
            { q: "Choose the correct sentence.", options: ["I have seen this film last week.", "I saw this film last week.", "I have see this film last week.", "I did saw this film last week."], answer: 1, why: "Last week est un moment passé et terminé : il faut le prétérit saw." },
            { q: "She has lived in Bristol ___ 2019.", options: ["for", "during", "ago", "since"], answer: 3, why: "2019 est un point de départ : since." },
            { q: "I haven't finished my homework ___.", options: ["yet", "already", "ever", "since"], answer: 0, why: "Yet se place en fin de phrase négative et signifie « pas encore »." },
            { q: "« He has gone to London » means that...", options: ["he went to London and came back", "he will go to London soon", "he is away, in London", "he lived in London as a child"], answer: 2, why: "Gone indique qu'il est parti et qu'il est encore là-bas ; been indiquerait qu'il est revenu." },
            { q: "Which word goes with the past simple, not the present perfect?", options: ["never", "ago", "just", "yet"], answer: 1, why: "Ago situe l'action dans un passé daté et terminé (two years ago) : il impose le prétérit." },
          ],
          trap: "Employer le present perfect avec un marqueur de passé terminé (« I have seen him yesterday ») ou traduire « depuis » par un présent (« I live here since 2020 » au lieu de « I have lived here since 2020 »).",
          method: "Avant de choisir le temps, cherchez un marqueur de temps dans la phrase : s'il date l'action dans un passé terminé (yesterday, ago, last, in + année), prenez le prétérit ; sinon, demandez-vous si l'action a un lien avec le présent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'talk-about-future',
          title: 'Parler de son avenir : « will », « going to » et projets',
          minutes: 30,
          objectives: [
            "Exprimer des projets et des intentions avec « be going to ».",
            "Faire des prédictions, des promesses et prendre des décisions avec « will ».",
            "Parler de son avenir scolaire et professionnel (orientation, métiers, rêves).",
          ],
          course: [
            {
              heading: "« Will » : prédire, promettre, décider sur le moment",
              paragraphs: [
                "Will est un auxiliaire modal : il est suivi de la base verbale, sans « to », et ne prend jamais de -s. La forme est la même à toutes les personnes : I will, she will, they will. On le contracte souvent en 'll (I'll, she'll). La négation est will not, contractée en won't. À l'interrogatif, on inverse : Will you come?",
                "Will sert d'abord à faire une prédiction fondée sur une opinion ou une croyance, souvent avec I think, I'm sure, probably ou maybe : « I think robots will do many jobs in the future. » Il sert aussi à prendre une décision au moment où l'on parle : « The phone is ringing. I'll answer it! » Enfin, il exprime une promesse ou une proposition : « I'll help you with your project. » « I won't tell anyone. »",
              ],
              box: { label: "Formule", text: "Sujet + will ('ll) + base verbale. Négation : won't + base verbale. Pas de « to » ni de « -s » : She will become a vet (et non « She wills become » ni « will to become »)." },
            },
            {
              heading: "« Be going to » : l'intention et l'évidence",
              paragraphs: [
                "Be going to se forme avec be conjugué (am, is, are) + going to + base verbale : « I'm going to study medicine. » La négation porte sur be : « She isn't going to change school. » À l'interrogatif, on inverse be et le sujet : « Are you going to apply to a lycée professionnel? »",
                "On emploie be going to pour une intention, un projet décidé avant le moment où l'on parle : « I've thought about it a lot: I'm going to be a nurse. » On l'emploie aussi pour une prédiction fondée sur un indice présent, visible : « Look at those black clouds! It's going to rain. »",
                "Comparez : « I'll call him » (je viens de le décider) et « I'm going to call him tonight » (c'était prévu). La différence ne tient pas à la date, mais au moment où la décision a été prise.",
              ],
            },
            {
              heading: "Le présent en -ing pour les rendez-vous, et le présent après when",
              paragraphs: [
                "Pour un projet déjà organisé, avec une date, une heure ou un lieu fixés, on utilise le présent en be + -ing : « I'm meeting the careers adviser on Monday at 10. » « We're leaving for London on Friday. » C'est comme si le rendez-vous était déjà noté dans l'agenda.",
                "Après les conjonctions de temps when, as soon as, before, after et until, l'anglais n'utilise pas will mais le présent simple, même pour parler de l'avenir : « When I'm older, I'll travel around the world. » « As soon as I get my brevet, I'll celebrate with my friends. » Le français, lui, met un futur : « Quand je serai plus grand ».",
              ],
              box: { label: "Règle", text: "Après when, as soon as, before, after, until : présent simple pour parler du futur. When I leave school, I'll study engineering (et non « When I will leave »)." },
            },
            {
              heading: "Parler de ses projets d'avenir",
              paragraphs: [
                "Pour parler de son orientation et de ses rêves, plusieurs expressions sont utiles : I want to become / to be, I'd like to work as, I hope to, I plan to, I'm thinking of + V-ing (I'm thinking of studying art), I dream of + V-ing (I dream of becoming a pilot), My dream is to. Pour justifier : because I love animals, because I'm good at science, because I'd like to help people.",
                "Quelques métiers : a vet (vétérinaire), a nurse (infirmier, infirmière), an engineer (ingénieur), a lawyer (avocat), a mechanic (mécanicien), a chef (chef cuisinier), a firefighter (pompier), a computer programmer (programmeur), a teacher, a journalist. Après la 3e, on peut aller au lycée général et technologique (a general high school) ou au lycée professionnel (a vocational high school), ou encore faire un apprentissage (to do an apprenticeship).",
              ],
              box: { label: "À retenir", text: "En anglais, on met un article devant un métier : I want to be an engineer. She works as a nurse. En français, on dit « Je veux être ingénieur », sans article." },
            },
          ],
          keyPoints: [
            "Will + base verbale : prédiction (avec I think), décision immédiate, promesse ; négation won't.",
            "Be going to + base verbale : intention décidée avant ou prédiction appuyée sur un indice visible.",
            "Présent en -ing : rendez-vous ou projet déjà organisé (I'm meeting him on Monday).",
            "Après when, as soon as, before, after, until : présent simple, jamais will.",
            "Un article devant les métiers : I want to be a vet.",
            "Pour ses rêves : I hope to, I'd like to, I dream of + V-ing.",
          ],
          example: {
            statement: "Choisissez will, be going to ou le présent en -ing, et justifiez. 1) A: I'm thirsty. B: Wait, I ___ (get) you a glass of water. 2) I ___ (study) law: I've already chosen my university. 3) Look at the sky! It ___ (snow). 4) We ___ (visit) the careers fair on Thursday at 2 pm: we've booked our places.",
            solution: [
              "1) B décide au moment où il parle, en réaction à A : décision spontanée → « I'll get you a glass of water. »",
              "2) Le choix est fait depuis longtemps (I've already chosen) : intention → « I'm going to study law. »",
              "3) Le ciel est un indice visible : prédiction appuyée sur un indice → « It's going to snow. »",
              "4) Un jour, une heure et une réservation : rendez-vous organisé → « We're visiting the careers fair on Thursday at 2 pm. » (« We're going to visit » serait aussi accepté.)",
              "Réponses : 'll get ; am going to study ; is going to snow ; are visiting.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez chaque phrase à la forme négative, puis à la forme interrogative. a) She will be a pilot. b) They are going to move to Canada. c) You'll call me tonight.",
              hint: "Avec will, la négation est won't et on inverse will et le sujet. Avec be going to, c'est be qui porte la négation et l'inversion.",
              solution: [
                "a) She won't be a pilot. / Will she be a pilot?",
                "b) They aren't going to move to Canada. / Are they going to move to Canada?",
                "c) You won't call me tonight. / Will you call me tonight?",
              ],
            },
            {
              level: 2,
              statement: "Corrigez l'erreur de chaque phrase et expliquez-la. a) When I will be 18, I will learn to drive. b) He wants to be engineer. c) I think it will to rain tomorrow. d) She wills study in Dublin. e) I'm going study art.",
              hint: "Cinq règles sont en jeu : le présent après when, l'article devant un métier, will sans « to », will sans « -s », et going to complet.",
              solution: [
                "a) When I am 18, I will learn to drive. Après when, on met le présent.",
                "b) He wants to be an engineer. Il faut un article devant un métier (an devant une voyelle).",
                "c) I think it will rain tomorrow. Will est suivi de la base verbale sans « to ».",
                "d) She will study in Dublin. Will ne prend jamais de -s.",
                "e) I'm going to study art. Il ne faut pas oublier « to » dans going to.",
              ],
            },
            {
              level: 3,
              statement: "« My future » : écrivez un texte de 80 à 100 mots sur votre avenir. Employez be going to pour vos projets proches, will pour au moins deux prédictions, le présent en -ing pour un rendez-vous, une phrase avec when + présent et une expression de rêve (I dream of, I hope to).",
              hint: "Suivez l'ordre du temps : l'année prochaine, après le lycée, dans dix ans. Cochez chaque structure demandée quand vous l'avez utilisée.",
              solution: [
                "Plan : le rendez-vous proche, le projet pour l'an prochain, les études, le métier rêvé, une prédiction sur le monde.",
                "Exemple : « I'm meeting the careers adviser next Tuesday. Next year, I'm going to start at the lycée général, and I'm going to choose science subjects because I'm good at biology. When I finish school, I'll probably study at university in Montpellier. I dream of becoming a vet, because I love animals and I like helping people. I hope to work in the countryside. I think it will be hard, but I'm sure I won't give up. Maybe one day I'll have my own clinic! »",
                "Vérifier : going to pour les projets, will pour les prédictions (I'll probably, I think it will, I won't give up), présent en -ing pour le rendez-vous, when + présent (When I finish), article devant le métier (a vet).",
                "Résultat : un texte d'environ 95 mots qui utilise toutes les structures du futur demandées.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes du parcours imaginé par Sam.",
            items: [
              "This year, Sam is in 3e and he's working hard.",
              "Next June, he is going to take the brevet exams.",
              "In September, he will start at the lycée général.",
              "At 18, he is going to take the bac.",
              "After the bac, he hopes to study engineering at university.",
              "In about ten years, he will probably work as an engineer in Canada.",
            ],
          },
          quiz: [
            { q: "The phone is ringing. « Don't move, I ___ it! »", options: ["am going to answer", "'ll answer", "answer", "answered"], answer: 1, why: "C'est une décision prise au moment où l'on parle : will." },
            { q: "Look at that car! It ___ crash!", options: ["will", "is going", "is going to", "wills"], answer: 2, why: "Un indice visible annonce la suite : be going to. « Is going » sans « to » est incomplet." },
            { q: "When I ___ 18, I'll learn to drive.", options: ["will be", "am going to be", "be", "am"], answer: 3, why: "Après when, on emploie le présent simple pour parler du futur." },
            { q: "Choose the correct sentence.", options: ["I want to be a lawyer.", "I want to be lawyer.", "I want be a lawyer.", "I want to being a lawyer."], answer: 0, why: "Want est suivi de to + base verbale, et un métier prend un article." },
            { q: "« I'm meeting my teacher at 5 pm tomorrow. » This sentence expresses...", options: ["a past habit", "a spontaneous decision", "a fixed arrangement", "a prediction without evidence"], answer: 2, why: "Le présent en -ing avec une heure précise exprime un rendez-vous déjà organisé." },
          ],
          trap: "Mettre « will » après « when » (« When I will be older ») ou oublier l'article devant un métier (« I want to be doctor »).",
          method: "Pour choisir la forme du futur, posez-vous une question : la décision a-t-elle été prise avant de parler (going to), au moment où je parle (will), ou s'agit-il d'un rendez-vous fixé avec une date (présent en -ing) ?",
        },
      ],
    },
    {
      id: 'standing-up',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'civil-rights',
          title: 'Le mouvement des droits civiques aux États-Unis',
          minutes: 35,
          objectives: [
            "Situer dans le temps les grandes étapes du mouvement des droits civiques (1954-1968).",
            "Identifier les figures majeures du mouvement et leurs modes d'action.",
            "Mobiliser le lexique de la lutte pour l'égalité et pour les droits.",
            "Présenter en anglais un événement ou une personnalité du mouvement.",
          ],
          course: [
            {
              heading: "Le contexte : la ségrégation dans le Sud",
              paragraphs: [
                "Après la guerre de Sécession (the Civil War, 1861-1865), l'esclavage est aboli aux États-Unis par le 13e amendement de la Constitution (1865). Mais à la fin du XIXe siècle, les États du Sud adoptent des lois appelées Jim Crow laws, qui imposent la ségrégation raciale : écoles, bus, restaurants, toilettes et fontaines séparés, avec des panneaux « Whites only » et « Colored ».",
                "En 1896, dans l'arrêt Plessy v. Ferguson, la Cour suprême accepte le principe « separate but equal » (séparés mais égaux). En réalité, les écoles et les services réservés aux Afro-Américains sont presque toujours plus pauvres. Dans le Sud, des obstacles comme les tests d'alphabétisation (literacy tests) ou une taxe à payer pour voter (poll tax) empêchent aussi la plupart des Afro-Américains de voter, et la violence raciste, notamment celle du Ku Klux Klan, fait régner la peur.",
              ],
              box: { label: "Définition", text: "Segregation : séparation imposée par la loi entre Blancs et Noirs dans les lieux publics. Civil rights : les droits civiques, ceux de tout citoyen (voter, être jugé équitablement, avoir accès aux mêmes écoles et aux mêmes services)." },
            },
            {
              heading: "L'école, premier champ de bataille",
              paragraphs: [
                "Le 17 mai 1954, dans l'arrêt Brown v. Board of Education of Topeka, la Cour suprême déclare que la ségrégation dans les écoles publiques est contraire à la Constitution (unconstitutional) : des écoles séparées ne peuvent pas être égales. C'est une victoire juridique majeure, obtenue grâce aux avocats de la NAACP, une association de défense des droits des Afro-Américains.",
                "L'application est difficile. En septembre 1957, à Little Rock (Arkansas), neuf lycéens noirs, les Little Rock Nine, veulent entrer à Central High School. Le gouverneur de l'État envoie la Garde nationale pour les en empêcher, et une foule hostile les insulte. Le président Eisenhower envoie alors des troupes fédérales pour les protéger et leur permettre d'aller en cours.",
                "En 1960, à La Nouvelle-Orléans, Ruby Bridges, 6 ans, devient la première élève noire de l'école élémentaire William Frantz, jusque-là réservée aux Blancs. Elle entre à l'école escortée par des U.S. marshals (policiers fédéraux). Le peintre Norman Rockwell a représenté cette scène dans un tableau célèbre, The Problem We All Live With (1964).",
              ],
            },
            {
              heading: "Rosa Parks, Martin Luther King et la non-violence",
              paragraphs: [
                "Le 1er décembre 1955, à Montgomery (Alabama), Rosa Parks, couturière et militante de la NAACP, refuse de céder sa place à un passager blanc dans un bus. Elle est arrêtée. La communauté noire de la ville lance alors un boycott des bus : pendant 381 jours, des milliers de personnes marchent ou s'organisent pour ne plus prendre le bus. Le mouvement est dirigé par un jeune pasteur de 26 ans, Martin Luther King Jr. Fin 1956, la Cour suprême déclare la ségrégation dans les bus contraire à la Constitution.",
                "Inspiré par Gandhi, King défend la non-violence (nonviolence) : boycotts, marches, sit-ins, désobéissance civile. En février 1960, à Greensboro (Caroline du Nord), quatre étudiants noirs s'assoient au comptoir d'un restaurant réservé aux Blancs et refusent de partir : les sit-ins se répandent dans tout le Sud. En 1961, les Freedom Riders voyagent ensemble, Noirs et Blancs, dans des bus inter-États pour contester la ségrégation, malgré de violentes attaques.",
                "Le 28 août 1963, la marche sur Washington pour l'emploi et la liberté réunit environ 250 000 personnes. Devant le Lincoln Memorial, King prononce son discours le plus célèbre, dans lequel il répète « I have a dream » et décrit une Amérique où ses enfants seraient jugés sur leur caractère et non sur la couleur de leur peau. En 1964, il reçoit le prix Nobel de la paix.",
              ],
              box: { label: "Repère", text: "1954 : arrêt Brown. 1955-1956 : boycott des bus de Montgomery. 1957 : Little Rock Nine. 1960 : sit-ins de Greensboro. 1963 : marche sur Washington. 1964 : Civil Rights Act. 1965 : Voting Rights Act. 1968 : assassinat de King." },
            },
            {
              heading: "Les victoires, les autres voix et l'héritage",
              paragraphs: [
                "Le 2 juillet 1964, le président Lyndon B. Johnson signe le Civil Rights Act, qui interdit la ségrégation dans les lieux publics et les discriminations à l'embauche fondées sur la race, la couleur, la religion, le sexe ou l'origine nationale. En mars 1965, les marches de Selma à Montgomery pour le droit de vote sont violemment réprimées (« Bloody Sunday », le 7 mars). En août 1965, le Voting Rights Act interdit les pratiques qui empêchaient les Afro-Américains de voter.",
                "Tous les militants ne partagent pas la stratégie de King. Malcolm X, figure de la Nation of Islam puis indépendant, critique la non-violence, défend la fierté noire et le droit à l'autodéfense ; il est assassiné en février 1965. Martin Luther King est assassiné le 4 avril 1968 à Memphis (Tennessee). Depuis 1986, les États-Unis lui rendent hommage par un jour férié fédéral, le Martin Luther King Jr. Day, le troisième lundi de janvier. Des mouvements actuels, comme Black Lives Matter (né en 2013), montrent que la lutte contre le racisme continue.",
              ],
              box: { label: "Vocabulaire", text: "to fight for equality, a right, to protest, a protester, a boycott, a march, a sit-in, nonviolence, to vote, a law, to ban (interdire), to be arrested, racism, injustice, freedom." },
            },
          ],
          keyPoints: [
            "Jim Crow laws : lois de ségrégation dans le Sud ; « separate but equal » (Plessy v. Ferguson, 1896).",
            "1954 : l'arrêt Brown v. Board of Education déclare la ségrégation scolaire contraire à la Constitution.",
            "1955 : Rosa Parks refuse de céder sa place à Montgomery ; boycott des bus de 381 jours.",
            "Martin Luther King défend la non-violence : boycotts, sit-ins, marches ; « I have a dream » (Washington, 1963).",
            "1964 : Civil Rights Act ; 1965 : Voting Rights Act.",
            "Malcolm X, autre voix du mouvement, assassiné en 1965 ; King assassiné à Memphis en 1968.",
          ],
          example: {
            statement: "Présentez Rosa Parks en anglais en quatre ou cinq phrases au prétérit : qui elle était, quand et où se passe l'événement, ce qu'elle a fait, et ce qui en a résulté.",
            solution: [
              "Who? « Rosa Parks was an African American seamstress and a civil rights activist. »",
              "When and where? « On December 1st, 1955, she was on a bus in Montgomery, Alabama. »",
              "What? « She refused to give up her seat to a white passenger, so she was arrested. »",
              "Consequences? « Black people organised a boycott of the buses which lasted 381 days. In 1956, the Supreme Court declared segregation on buses unconstitutional. »",
              "Réponse : cinq phrases reliées par so et which, avec des verbes au prétérit (was, refused, organised, lasted, declared).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à son événement. Dates : 1954, 1955, 1963, 1964, 1968. Événements : a) Martin Luther King is assassinated. b) The March on Washington takes place. c) The Supreme Court bans segregation in public schools. d) Rosa Parks refuses to give up her seat. e) President Johnson signs the Civil Rights Act.",
              hint: "Commencez par les deux décisions de justice et de loi (1954 et 1964), puis placez les autres autour.",
              solution: [
                "1954 → c) l'arrêt Brown v. Board of Education.",
                "1955 → d) Rosa Parks à Montgomery.",
                "1963 → b) la marche sur Washington.",
                "1964 → e) le Civil Rights Act.",
                "1968 → a) l'assassinat de Martin Luther King.",
              ],
            },
            {
              level: 2,
              statement: "Lisez le texte, puis dites si les affirmations sont right ou wrong et justifiez par une citation. « In September 1957, nine Black teenagers tried to enter Central High School in Little Rock, Arkansas. Three years earlier, the Supreme Court had declared segregation in public schools unconstitutional, but the governor of Arkansas sent soldiers of the National Guard to stop them. An angry crowd shouted at the students. President Eisenhower finally sent federal troops to protect them, and they were able to attend classes. They became known as the Little Rock Nine. » 1) The students were adults. 2) The governor helped the students. 3) The Supreme Court decision came before 1957. 4) The federal government protected the students.",
              hint: "Pour chaque affirmation, retrouvez la phrase du texte qui en parle et comparez les mots exactement.",
              solution: [
                "1) Wrong : « nine Black teenagers » (ce sont des adolescents).",
                "2) Wrong : « the governor of Arkansas sent soldiers of the National Guard to stop them ».",
                "3) Right : « Three years earlier, the Supreme Court had declared segregation in public schools unconstitutional » (en 1954).",
                "4) Right : « President Eisenhower finally sent federal troops to protect them ».",
              ],
            },
            {
              level: 3,
              statement: "Imaginez que vous avez participé à la marche sur Washington, le 28 août 1963. Écrivez une page de journal intime (80 à 100 mots) au prétérit : pourquoi vous êtes venu(e), ce que vous avez vu et entendu, ce que vous avez ressenti. Ne recopiez pas le discours de King : résumez-le avec vos mots.",
              hint: "Commencez par « Dear Diary, today... ». Utilisez le vocabulaire de la leçon (crowd, march, rights, equality, nonviolence) et des adjectifs de sentiment (proud, moved, hopeful).",
              solution: [
                "Plan : la raison de la venue, le voyage et la foule, le discours, les sentiments, l'espoir pour l'avenir.",
                "Exemple : « Dear Diary, today I marched in Washington with my parents. We left Atlanta by bus very early because we wanted to fight for our rights. When we arrived, I couldn't believe my eyes: there was an enormous crowd, Black and white people together. Everybody was singing and holding signs about jobs and freedom. In the afternoon, Martin Luther King spoke in front of the Lincoln Memorial. He talked about his dream of a country where all children would be equal. I felt proud and hopeful. I will never forget this day. »",
                "Vérifier : verbes au prétérit (marched, left, wanted, arrived, spoke, felt), discours résumé et non cité, vocabulaire de la lutte (rights, freedom, equal).",
                "Résultat : une page de journal d'environ 100 mots, au prétérit, cohérente avec les faits de 1963.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "The Supreme Court accepts the principle « separate but equal » (Plessy v. Ferguson).",
              "The Supreme Court bans segregation in public schools (Brown v. Board of Education).",
              "Rosa Parks refuses to give up her seat on a bus in Montgomery.",
              "The Little Rock Nine enter Central High School under federal protection.",
              "Martin Luther King gives his famous speech at the March on Washington.",
              "President Johnson signs the Civil Rights Act.",
              "Martin Luther King is assassinated in Memphis.",
            ],
          },
          quiz: [
            { q: "Where did Rosa Parks refuse to give up her seat in 1955?", options: ["Little Rock", "Memphis", "Washington", "Montgomery"], answer: 3, why: "L'événement a lieu à Montgomery, en Alabama, et déclenche le boycott des bus." },
            { q: "What did the Supreme Court decide in Brown v. Board of Education (1954)?", options: ["Black Americans obtained the right to vote.", "School segregation was unconstitutional.", "Buses had to remain segregated.", "Slavery was abolished in the South."], answer: 1, why: "L'arrêt Brown déclare que des écoles séparées ne peuvent pas être égales : la ségrégation scolaire est contraire à la Constitution." },
            { q: "Which method did Martin Luther King defend?", options: ["nonviolence", "armed struggle", "emigration to Africa"], answer: 0, why: "Inspiré par Gandhi, King prônait la non-violence : boycotts, marches, sit-ins." },
            { q: "In what year was the Civil Rights Act signed?", options: ["1955", "1968", "1964", "1957"], answer: 2, why: "Le président Lyndon B. Johnson l'a signé le 2 juillet 1964." },
            { q: "What is a « boycott »?", options: ["a law that bans racial discrimination at work", "a refusal to use a service, as a protest", "a famous speech given in front of a crowd", "a peaceful march"], answer: 1, why: "Boycotter, c'est refuser collectivement d'utiliser un service ou d'acheter un produit pour protester, comme les bus de Montgomery." },
          ],
          trap: "Croire que Rosa Parks ou Martin Luther King ont agi seuls et en un jour : le mouvement est une lutte collective de plus de dix ans, et Rosa Parks était une militante engagée, pas seulement une passagère fatiguée.",
          method: "Faites une frise de 1954 à 1968 et notez pour chaque date un lieu, une personne et un verbe d'action en anglais (to refuse, to march, to sign) : vous pourrez raconter chaque événement en une phrase au prétérit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'past-simple-continuous',
          title: 'Raconter au passé : past simple et past continuous',
          minutes: 35,
          objectives: [
            "Former le prétérit simple des verbes réguliers et irréguliers, à toutes les formes.",
            "Former et employer le past continuous (was / were + V-ing) pour décrire une action en cours dans le passé.",
            "Combiner les deux temps avec when et while pour raconter un événement.",
          ],
          course: [
            {
              heading: "Le prétérit simple : la formation",
              paragraphs: [
                "Les verbes réguliers ajoutent -ed à la base verbale : walk → walked, arrive → arrived (seulement -d si la base finit par -e), study → studied (y précédé d'une consonne devient -ied), stop → stopped (la consonne finale est doublée après une voyelle courte accentuée). La forme est la même à toutes les personnes.",
                "La terminaison -ed se prononce de trois façons : /t/ après un son sourd comme /k/, /p/, /s/, /ʃ/, /f/ (walked, stopped, washed, laughed) ; /d/ après un son sonore (played, called, lived) ; /ɪd/ après /t/ ou /d/ (wanted, decided). Les verbes irréguliers ont une forme à apprendre : go → went, see → saw, take → took, have → had, come → came, make → made, tell → told, stand → stood, give → gave, catch → caught.",
                "À la forme négative et interrogative, on utilise l'auxiliaire did suivi de la base verbale : « She didn't go to school. » « Did she go to school? » Le verbe be fait exception : was / were, wasn't / weren't, « Were you tired? ».",
              ],
              box: { label: "Formule", text: "Affirmation : base + -ed ou forme irrégulière (I walked, I went). Négation : didn't + base (I didn't go). Question : Did + sujet + base ? (Did you go?) Après did, jamais de -ed ni de forme irrégulière." },
            },
            {
              heading: "Les emplois du prétérit simple",
              paragraphs: [
                "Le prétérit simple exprime une action terminée, située à un moment passé précis ou évident : « Rosa Parks refused to give up her seat in 1955. » Il s'emploie avec des marqueurs comme yesterday, last week, two days ago, in 1963, when I was a child. Il correspond le plus souvent au passé composé ou au passé simple du français.",
                "C'est le temps principal du récit : il présente une succession d'actions, l'une après l'autre. « She got on the bus, paid her fare and sat down. » Chaque verbe fait avancer l'histoire d'un pas.",
              ],
            },
            {
              heading: "Le past continuous : l'action en cours",
              paragraphs: [
                "Le past continuous se forme avec was ou were suivi du verbe en -ing : I was reading, you were reading, she was reading, they were reading. Négation : wasn't / weren't + V-ing. Question : « Was he sleeping? » Il décrit une action en train de se dérouler à un moment du passé : « At 8 pm yesterday, I was doing my homework. » Il correspond souvent à l'imparfait ou à « être en train de ».",
                "Dans un récit, il sert à planter le décor, à décrire l'arrière-plan : « It was raining and people were hurrying home. » Les verbes d'état (know, like, love, want, believe, understand, belong, need) ne s'emploient normalement pas à la forme en -ing : on dit « I knew the answer » et non « I was knowing the answer ».",
              ],
              box: { label: "Formule", text: "Sujet + was / were + V-ing. I was walking. They were talking. She wasn't listening. Were you sleeping?" },
            },
            {
              heading: "Raconter : when, while, during",
              paragraphs: [
                "On combine souvent les deux temps : une action longue au past continuous est interrompue par une action brève au prétérit simple. « I was walking home when it started to rain. » While (pendant que) introduit en général l'action longue : « While she was reading, the phone rang. » Deux actions longues simultanées sont toutes les deux au past continuous : « While I was cooking, my brother was watching TV. »",
                "Le choix du temps change le sens. « When he arrived, we were having dinner » : le dîner avait déjà commencé à son arrivée. « When he arrived, we had dinner » : on a dîné après son arrivée. Enfin, ne confondez pas while, suivi d'une proposition avec un verbe, et during (pendant), suivi d'un nom : « during the film », « during the holidays ».",
              ],
              box: { label: "Règle", text: "Action longue (décor) : past continuous. Action brève qui l'interrompt : prétérit simple. While + proposition (while I was sleeping) ; during + nom (during the night)." },
            },
          ],
          keyPoints: [
            "Prétérit simple : base + -ed ou forme irrégulière ; négation et question avec did + base.",
            "-ed se prononce /t/ (walked), /d/ (played) ou /ɪd/ (wanted).",
            "Past continuous : was / were + V-ing, pour une action en cours ou le décor d'un récit.",
            "Action longue au past continuous interrompue par une action brève au prétérit : I was walking when it started to rain.",
            "While + proposition, during + nom.",
            "Pas de forme en -ing avec les verbes d'état (know, like, want, understand).",
          ],
          example: {
            statement: "Mettez les verbes au prétérit simple ou au past continuous : « On 1 December 1955, Rosa Parks (1. go) home after work. She (2. sit) on the bus when the driver (3. order) her to give up her seat. She (4. refuse). While the passengers (5. watch), two police officers (6. arrive) and (7. arrest) her. »",
            solution: [
              "1) Le trajet est le décor de l'histoire : « was going home » (le prétérit « went home » est aussi possible).",
              "2) et 3) Une action longue interrompue par une action brève : « She was sitting on the bus when the driver ordered her to give up her seat. »",
              "4) Une action brève et terminée qui fait avancer le récit : « She refused. »",
              "5) While introduit l'action longue : « While the passengers were watching ».",
              "6) et 7) Deux actions brèves successives : « two police officers arrived and arrested her ».",
              "Réponses : was going ; was sitting ; ordered ; refused ; were watching ; arrived ; arrested.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "1) Donnez le prétérit de : start, cry, plan, go, buy, think. 2) Classez selon la prononciation de -ed (/t/, /d/ ou /ɪd/) : started, cried, planned, stopped, needed, laughed.",
              hint: "Attention à l'orthographe de cry et de plan, et retenez que /ɪd/ n'apparaît qu'après les sons /t/ et /d/.",
              solution: [
                "1) started, cried (y → ied), planned (n doublé), went, bought, thought.",
                "2) /t/ : stopped, laughed (après /p/ et /f/, sons sourds).",
                "/d/ : cried, planned (après une voyelle et /n/, sons sonores).",
                "/ɪd/ : started, needed (après /t/ et /d/).",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec when ou while et mettez les verbes au temps qui convient. a) I ___ (walk) to school ___ I ___ (see) an accident. b) ___ we ___ (play) football, it ___ (start) to rain. c) My mother ___ (cook) ___ my father ___ (read) the newspaper. d) ___ the teacher ___ (come) in, everybody ___ (stop) talking.",
              hint: "Repérez dans chaque phrase l'action longue et l'action brève. Deux actions longues simultanées : past continuous pour les deux.",
              solution: [
                "a) I was walking to school when I saw an accident. (action longue interrompue)",
                "b) While we were playing football, it started to rain.",
                "c) My mother was cooking while my father was reading the newspaper. (deux actions longues simultanées)",
                "d) When the teacher came in, everybody stopped talking. (deux actions brèves successives)",
              ],
            },
            {
              level: 3,
              statement: "Racontez en 80 à 100 mots un souvenir, vrai ou inventé : un jour où quelque chose d'inattendu s'est produit au collège. Plantez d'abord le décor au past continuous, puis racontez les actions au prétérit simple. Utilisez when et while au moins une fois chacun, et un verbe d'état au prétérit.",
              hint: "Commencez par le temps qu'il faisait et ce que faisaient les élèves (past continuous), puis l'événement (prétérit), puis la fin de l'histoire.",
              solution: [
                "Plan : le décor (météo, cours, activité des élèves), l'événement inattendu, la réaction, la fin.",
                "Exemple : « It was a cold Monday morning. It was snowing outside and we were having a maths test. While the teacher was walking between the desks, a small bird flew into the classroom through the open window. Everybody screamed. When the bird landed on the board, the teacher stopped the test. My friend Inès slowly opened the door and the bird escaped into the corridor. Nobody knew what to do, so we all laughed. In the end, we finished the test the next day! »",
                "Vérifier : décor au past continuous (was snowing, were having, was walking), événements au prétérit (flew, screamed, landed, stopped, opened, escaped), when et while employés, verbe d'état au prétérit (knew).",
                "Résultat : un récit d'environ 95 mots qui combine correctement les deux temps.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases et ces règles sont-elles correctes ?",
            statements: [
              { text: "« I was knowing the answer. » is correct.", true: false, why: "Know est un verbe d'état : on dit « I knew the answer »." },
              { text: "« Did you went to the party? » is correct.", true: false, why: "Après did, on met la base verbale : « Did you go to the party? »" },
              { text: "« While I was sleeping, the phone rang. » is correct.", true: true, why: "While introduit l'action longue au past continuous, interrompue par une action brève au prétérit." },
              { text: "The -ed of « wanted » is pronounced /ɪd/.", true: true, why: "Après /t/ ou /d/, -ed se prononce /ɪd/." },
              { text: "The past continuous is formed with did + V-ing.", true: false, why: "Il se forme avec was ou were + V-ing." },
              { text: "The past simple of « catch » is « catched ».", true: false, why: "Catch est irrégulier : caught." },
              { text: "« When he arrived, we were having dinner » means that dinner had already started.", true: true, why: "Le past continuous montre que le dîner était en cours au moment de son arrivée." },
            ],
          },
          quiz: [
            { q: "Choose the correct question.", options: ["Did you saw the match?", "Did you see the match?", "Do you saw the match?", "Were you see the match?"], answer: 1, why: "Did est suivi de la base verbale see." },
            { q: "I ___ TV when the lights went out.", options: ["watched", "am watching", "was watching", "were watching"], answer: 2, why: "L'action longue en cours est au past continuous, avec was pour I." },
            { q: "___ the film, I fell asleep.", options: ["While", "During", "When", "Since"], answer: 1, why: "During est suivi d'un nom (the film) ; while serait suivi d'une proposition (while I was watching the film)." },
            { q: "Which verb is NOT normally used in the past continuous?", options: ["walk", "rain", "play", "know"], answer: 3, why: "Know est un verbe d'état, qui ne se met normalement pas à la forme en -ing." },
            { q: "How is the -ed of « stopped » pronounced?", options: ["/t/", "/d/", "/ɪd/"], answer: 0, why: "Après le son sourd /p/, -ed se prononce /t/." },
          ],
          trap: "Mettre le verbe au prétérit après did (« Did you went? », « She didn't saw ») ou employer le past continuous avec un verbe d'état (« I was knowing »).",
          method: "Pour un récit, dessinez une ligne du temps : le décor et les actions longues (past continuous) sont des bandes, les événements brefs (prétérit simple) sont des points qui les coupent.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'express-opinion',
          title: 'Exprimer et justifier son opinion',
          minutes: 30,
          objectives: [
            "Exprimer son opinion de manière nuancée en anglais.",
            "Justifier son point de vue à l'aide d'arguments, d'exemples et de connecteurs logiques.",
            "Exprimer son accord ou son désaccord dans un échange.",
            "Rédiger un court texte argumenté : prendre position, argumenter, conclure.",
          ],
          course: [
            {
              heading: "Donner son avis",
              paragraphs: [
                "Pour donner son opinion, on dispose de nombreuses expressions : I think (that), I believe (that), In my opinion, In my view, As far as I'm concerned, Personally, I feel that, It seems to me that. Pour demander l'avis de quelqu'un : What do you think about...? What's your opinion on...? Do you agree?",
                "On peut nuancer la force de son opinion. Opinion forte : I'm sure that, I'm convinced that, I strongly believe that. Opinion prudente : I'm not sure, maybe, perhaps, I suppose, It depends. Évitez les calques du français comme « according to me » (on dit In my opinion) ou « in my mind » (qui signifie « dans ma tête »). N'accumulez pas non plus deux expressions : « In my opinion, I think » est redondant.",
              ],
              box: { label: "Règle", text: "On dit « In my opinion » ou « I think that », et non « According to me ». According to s'emploie pour rapporter l'avis d'un autre : according to the article, according to scientists." },
            },
            {
              heading: "Être d'accord ou pas",
              paragraphs: [
                "En anglais, « être d'accord » se dit avec un verbe : to agree. On dit donc « I agree with you » ou « I agree with this idea », et jamais « I am agree ». Au négatif : « I don't agree » ou « I disagree ». Pour nuancer : I totally agree, I partly agree, That's true, but..., I see your point, but..., You may be right, but...",
                "Pour prendre position pour ou contre : I'm for / I'm in favour of + nom ou V-ing ; I'm against + nom ou V-ing. « I'm in favour of school uniforms. » « I'm against wearing a uniform. » Après une préposition (of, against), le verbe se met en -ing.",
              ],
              box: { label: "Attention", text: "« Je suis d'accord » = I agree (verbe). Ne dites jamais « I am agree ». Négation : I don't agree ou I disagree. I'm against + V-ing : I'm against wearing a uniform." },
            },
            {
              heading: "Justifier : arguments, exemples et connecteurs",
              paragraphs: [
                "Une opinion doit être justifiée. Cause : because + proposition (because it saves time), because of + nom (because of the noise), since, as. Conséquence : so, that's why, as a result. Exemple : for example, for instance, such as. Ajout : first, firstly, secondly, moreover, what's more, besides, also. Opposition et concession : but, however, on the other hand, although, even if. Conclusion : to conclude, in conclusion, all in all.",
                "Voici un exemple de paragraphe : « I'm in favour of school uniforms. Firstly, they create equality between students, because nobody can see who has expensive clothes. Moreover, they save time in the morning. However, some students feel they can't express their personality. All in all, I think uniforms are a good idea. »",
              ],
              box: { label: "Repère", text: "Ajouter : firstly, moreover, besides. Opposer : however, on the other hand, although. Causer : because, because of, since. Conclure : to conclude, all in all. Illustrer : for example, for instance." },
            },
            {
              heading: "Construire un texte argumenté",
              paragraphs: [
                "Un texte argumenté court suit un plan simple. Introduction : présentez le sujet et annoncez votre position. Développement : deux ou trois arguments, chacun justifié et illustré par un exemple. Concession : reconnaissez un argument opposé (« Of course, some people think that... However... »). Conclusion : reformulez votre opinion avec une autre expression qu'au début.",
                "Les sujets liés à l'école se prêtent bien à ce travail : Should school uniforms be compulsory? Should homework be banned? Should mobile phones be allowed at school? Pour ce dernier sujet, sachez qu'en France une loi du 3 août 2018 interdit l'usage du téléphone portable dans les écoles et les collèges, sauf pour un usage pédagogique ou des exceptions prévues par le règlement intérieur.",
              ],
            },
          ],
          keyPoints: [
            "Donner son avis : I think that, In my opinion, As far as I'm concerned, Personally.",
            "Être d'accord : I agree / I disagree, jamais « I am agree ».",
            "I'm in favour of / I'm against + nom ou V-ing.",
            "Because + proposition, because of + nom.",
            "Connecteurs : firstly, moreover (ajout) ; however, although (opposition) ; to conclude (conclusion).",
            "Une idée, une justification, un exemple ; une concession avant la conclusion.",
          ],
          example: {
            statement: "Sujet : « Should homework be banned? » Rédigez un paragraphe de cinq ou six phrases qui donne votre opinion, justifiée par deux arguments, avec une concession.",
            solution: [
              "Choisir sa position : contre l'interdiction, car les devoirs aident à retenir les leçons.",
              "Trouver deux arguments et un exemple : retenir le cours, devenir autonome ; exemple : apprendre son vocabulaire.",
              "Trouver une concession : trop de devoirs fatigue les élèves.",
              "Rédiger avec des connecteurs : « In my opinion, homework shouldn't be banned. Firstly, it helps us remember what we learnt in class: for example, learning vocabulary at home is essential. Moreover, it teaches us to work on our own. However, I agree that too much homework can make students tired. To conclude, I think we need homework, but not too much. »",
              "Résultat : six phrases, une opinion claire, deux arguments (firstly, moreover), un exemple (for example), une concession (however) et une conclusion (to conclude).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Corrigez chaque phrase et expliquez l'erreur. a) I am agree with you. b) According to me, uniforms are useless. c) I'm against to wear a uniform. d) It's a good idea because of it saves time. e) In my opinion, I think that phones are useful.",
              hint: "Cherchez les calques du français, la forme du verbe après une préposition, et la différence entre because et because of.",
              solution: [
                "a) I agree with you. Agree est un verbe : pas de « am ».",
                "b) In my opinion, uniforms are useless. According to sert à rapporter l'avis d'un autre.",
                "c) I'm against wearing a uniform. Après la préposition against, le verbe se met en -ing.",
                "d) It's a good idea because it saves time. Because of est suivi d'un nom, because d'une proposition.",
                "e) In my opinion, phones are useful (ou : I think that phones are useful). Les deux expressions ensemble sont redondantes.",
              ],
            },
            {
              level: 2,
              statement: "Complétez le texte avec les connecteurs suivants, chacun une seule fois : however, because, firstly, to conclude, for example, moreover. « (1) ___, phones distract students during lessons. (2) ___, some pupils check their messages instead of listening. (3) ___, phones can lead to cyberbullying in the playground. (4) ___, phones can be useful (5) ___ students can look up information quickly. (6) ___, I think phones should only be allowed for educational activities. »",
              hint: "Repérez le rôle de chaque phrase : premier argument, exemple, deuxième argument, opposition, cause, conclusion.",
              solution: [
                "(1) Firstly : le premier argument.",
                "(2) For example : la phrase illustre le premier argument.",
                "(3) Moreover : un deuxième argument s'ajoute.",
                "(4) However : la phrase introduit un argument opposé.",
                "(5) because : suivi d'une proposition qui donne la cause.",
                "(6) To conclude : la conclusion reprend la position.",
              ],
            },
            {
              level: 3,
              statement: "« Should school uniforms be compulsory in French schools? » Écrivez un texte argumenté de 100 à 120 mots : introduction avec votre position, deux arguments justifiés et illustrés, une concession, une conclusion.",
              hint: "Utilisez des expressions différentes pour donner votre avis au début et à la fin, et au moins cinq connecteurs différents.",
              solution: [
                "Plan possible (position contre) : introduction ; argument 1 : la liberté d'exprimer sa personnalité ; argument 2 : le coût pour les familles ; concession : l'égalité entre élèves ; conclusion.",
                "Exemple : « Some people think that French students should wear a uniform, like in Britain. Personally, I'm against this idea. Firstly, clothes are a way to express our personality: for instance, I like choosing my own style every morning. Moreover, uniforms can be expensive, because families have to buy blazers, shirts and ties. Of course, I understand that uniforms can reduce differences between rich and poor students. However, students can still show their differences with their shoes, their bags or their phones. To conclude, as far as I'm concerned, uniforms shouldn't be compulsory, but schools could ask students to wear simple clothes. »",
                "Vérifier : position annoncée (Personally, I'm against) et reformulée (as far as I'm concerned), connecteurs variés (firstly, for instance, moreover, because, however, to conclude), une concession (Of course...).",
                "Résultat : un texte d'environ 115 mots, structuré et argumenté.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque expression française à son équivalent anglais.",
            pairs: [
              { left: "À mon avis", right: "In my opinion" },
              { left: "Je suis d'accord", right: "I agree" },
              { left: "Cependant", right: "However" },
              { left: "C'est pourquoi", right: "That's why" },
              { left: "Par exemple", right: "For instance" },
              { left: "De plus", right: "Moreover" },
            ],
          },
          quiz: [
            { q: "Which expression is correct?", options: ["I am agree.", "I'm agree with you.", "I agree.", "I am agreeing with."], answer: 2, why: "Agree est un verbe : « I agree », sans « am »." },
            { q: "Which connector introduces a contrast?", options: ["moreover", "however", "so", "for example"], answer: 1, why: "However introduit une opposition ; moreover ajoute, so introduit une conséquence." },
            { q: "« I'm against ___ phones at school. »", options: ["to use", "use", "used", "using"], answer: 3, why: "Après la préposition against, le verbe se met en -ing." },
            { q: "Choose the most natural way to give your opinion.", options: ["In my opinion, homework is useful.", "According to me, homework is useful.", "In my mind, homework is useful."], answer: 0, why: "« According to me » et « in my mind » sont des calques du français ; on dit « In my opinion »." },
            { q: "« It's useful ___ it saves time. »", options: ["because of", "that's why", "because", "however"], answer: 2, why: "Because est suivi d'une proposition (it saves time) ; because of serait suivi d'un nom." },
          ],
          trap: "Dire « I am agree » (calque de « je suis d'accord ») ou confondre because, suivi d'une proposition, et because of, suivi d'un nom.",
          method: "Pour chaque argument, appliquez la règle « une idée, une justification, un exemple » : I think that... because... For instance... Votre opinion devient solide et facile à suivre.",
        },
      ],
    },
    /* ================================================================== */
    {
      id: 'leaving-home',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ellis-island',
          title: 'Ellis Island et l\'immigration vers les États-Unis',
          minutes: 30,
          objectives: [
            "Situer dans le temps et dans l'espace Ellis Island et la grande vague d'immigration vers les États-Unis (1892-1954).",
            "Identifier les raisons du départ (push factors) et les espoirs de l'arrivée (pull factors) des immigrants.",
            "Mobiliser le lexique du voyage et de la migration pour raconter le parcours d'un immigrant.",
            "Rédiger un court récit au passé à partir du point de vue d'un personnage.",
          ],
          course: [
            {
              heading: "Ellis Island : la porte de l'Amérique",
              paragraphs: [
                "Ellis Island est une petite île située dans la baie de New York, tout près de la statue de la Liberté, offerte par la France et inaugurée en 1886. De 1892 à 1954, l'île accueille le principal centre fédéral d'inspection des immigrants des États-Unis. Plus de 12 millions de personnes y sont passées : c'est pourquoi on la surnomme « the Gateway to America », la porte de l'Amérique.",
                "La plupart des immigrants arrivent d'Europe : d'Irlande, d'Italie, d'Allemagne, de Grande-Bretagne, mais aussi d'Europe de l'Est (empire russe, Autriche-Hongrie), dont de nombreuses familles juives. La traversée de l'Atlantique en bateau à vapeur dure en général entre une et deux semaines. Les passagers de première et de deuxième classe sont contrôlés à bord ; ceux de troisième classe, entassés dans l'entrepont (steerage), sont conduits en bac jusqu'à Ellis Island.",
              ],
              box: { label: "Repère", text: "1886 : inauguration de la statue de la Liberté. 1892 : ouverture d'Ellis Island. 1907 : année record. 1924 : l'Immigration Act impose des quotas par pays d'origine. 1954 : fermeture du centre. 1990 : ouverture du musée de l'immigration." },
            },
            {
              heading: "Pourquoi partir ? Push and pull factors",
              paragraphs: [
                "Les historiens distinguent les facteurs qui poussent à quitter son pays (push factors) et ceux qui attirent vers le pays d'accueil (pull factors). Parmi les push factors : la pauvreté (poverty), la famine (famine), le manque de terres ou de travail (unemployment), les persécutions religieuses ou politiques (persecution), la guerre (war). On dit alors que les migrants « fled their country » (to flee, fled, fled : fuir).",
                "Les pull factors sont la promesse de travail dans les usines et les chantiers des villes américaines, la liberté (freedom), la possibilité de posséder une terre, et l'espoir d'une vie meilleure pour ses enfants. On parle de « the land of opportunity » et de « the American Dream », l'idée que chacun peut réussir par son travail. Sur le socle de la statue de la Liberté, un poème d'Emma Lazarus, « The New Colossus » (1883), accueille ces « huddled masses yearning to breathe free », les foules qui aspirent à respirer librement.",
              ],
              box: { label: "À retenir", text: "Push factors : poverty, famine, war, persecution, unemployment. Pull factors : jobs, freedom, land, a better life, the American Dream. To emigrate : quitter son pays. To immigrate : s'installer dans un nouveau pays." },
            },
            {
              heading: "L'arrivée : l'inspection",
              paragraphs: [
                "À Ellis Island, les immigrants montent un grand escalier jusqu'à la salle d'enregistrement (the Registry Room, ou Great Hall). Des médecins les observent pendant la montée et inscrivent à la craie une lettre sur le manteau de ceux qui semblent malades (par exemple E pour les yeux, H pour le cœur). Les personnes marquées passent un examen plus complet ; certaines sont mises en quarantaine.",
                "Ensuite, un inspecteur, souvent aidé d'un interprète, pose une série de questions : nom, pays d'origine, métier, argent possédé, destination, présence d'un parent déjà installé. Pour la grande majorité, tout se passe en quelques heures et environ 2 % seulement sont renvoyés dans leur pays. Mais ce refus séparait parfois des familles, d'où l'autre surnom de l'île : « the Island of Tears », l'île des larmes.",
              ],
            },
            {
              heading: "Le lexique pour raconter",
              paragraphs: [
                "Verbes utiles : to leave (left, left) : partir, quitter ; to cross the ocean : traverser l'océan ; to board a ship : embarquer ; to land / to arrive : débarquer, arriver ; to settle : s'installer ; to be sent back / to be deported : être renvoyé ; to start a new life : commencer une nouvelle vie.",
                "Noms et adjectifs : an immigrant (celui qui arrive), an emigrant (celui qui part), a newcomer (un nouvel arrivant), the crossing (la traversée), luggage (les bagages, indénombrable), a suitcase (une valise), homesick (qui a le mal du pays), hopeful (plein d'espoir), exhausted (épuisé), frightened (effrayé), crowded (bondé). Exemple : « After a long crossing, the exhausted family finally landed in New York. »",
              ],
            },
          ],
          keyPoints: [
            "Ellis Island, dans la baie de New York, a été le principal centre d'immigration des États-Unis de 1892 à 1954.",
            "Plus de 12 millions d'immigrants, surtout européens, y sont passés : « the Gateway to America ».",
            "Push factors : poverty, famine, war, persecution. Pull factors : jobs, freedom, the American Dream.",
            "Inspection médicale et interrogatoire ; environ 2 % de refus : « the Island of Tears ».",
            "1924 : l'Immigration Act limite l'immigration par des quotas ; 1990 : ouverture du musée.",
            "To emigrate : quitter son pays ; to immigrate : s'installer dans un autre pays.",
          ],
          example: {
            statement: "Lisez ce court texte, puis répondez en anglais aux questions. « In 1907, Giulia, aged 16, left her village in southern Italy with her little brother. Their father had found a job in a factory in New York. After twelve days on a crowded ship, they landed at Ellis Island. A doctor looked at their eyes, then an inspector asked them many questions. That evening, they took a ferry to Manhattan, where their father was waiting for them. » 1) Where did Giulia come from? 2) Why did she leave? 3) How long did the crossing last? 4) What happened at Ellis Island? 5) Was she sent back?",
            solution: [
              "1) Repérer le lieu de départ : « She came from a village in southern Italy. »",
              "2) Chercher la cause : le père a trouvé un travail. « She left because her father had found a job in a factory in New York. » C'est un pull factor : le travail.",
              "3) Repérer la durée : « The crossing lasted twelve days. »",
              "4) Relever les deux étapes de l'inspection : « A doctor examined their eyes and an inspector asked them questions. »",
              "5) Déduire la réponse de la fin du texte : « No, she wasn't. She took a ferry to Manhattan and joined her father. »",
              "Réponse : des phrases complètes au prétérit, qui reprennent les informations du texte sans le recopier mot à mot.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque mot anglais à sa traduction, puis classez les causes en push factors ou pull factors. Mots : poverty, freedom, famine, persecution, jobs, a better life. Traductions : la liberté, la famine, la pauvreté, une vie meilleure, la persécution, des emplois.",
              hint: "Un push factor pousse à partir (ce qui va mal dans le pays d'origine) ; un pull factor attire (ce que l'on espère trouver).",
              solution: [
                "Traductions : poverty = la pauvreté ; freedom = la liberté ; famine = la famine ; persecution = la persécution ; jobs = des emplois ; a better life = une vie meilleure.",
                "Push factors : poverty, famine, persecution (ce qui pousse à quitter son pays).",
                "Pull factors : freedom, jobs, a better life (ce qui attire aux États-Unis).",
              ],
            },
            {
              level: 2,
              statement: "Complétez le texte avec les mots suivants, en conjuguant les verbes au prétérit si nécessaire : crossing, to land, to leave, crowded, luggage, to settle, homesick. « Patrick ___ Ireland in 1905 with very little ___ : just one small suitcase. The ___ was long and difficult because the ship was very ___. When he ___ at Ellis Island, he felt hopeful. A few years later, he ___ in Boston, but he often felt ___ and thought about his family. »",
              hint: "Repérez la nature du mot attendu : après « the », un nom ; après « was very », un adjectif ; après un sujet, un verbe au prétérit.",
              solution: [
                "« Patrick left Ireland » : to leave, irrégulier, prétérit left.",
                "« with very little luggage » : nom indénombrable, sans -s.",
                "« The crossing was long » et « the ship was very crowded ».",
                "« When he landed at Ellis Island » : verbe régulier, prétérit en -ed.",
                "« he settled in Boston, but he often felt homesick ».",
                "Réponses dans l'ordre : left ; luggage ; crossing ; crowded ; landed ; settled ; homesick.",
              ],
            },
            {
              level: 3,
              statement: "Vous êtes un jeune immigrant arrivé à Ellis Island en 1910. Écrivez à votre famille restée en Europe une lettre de 80 à 100 mots. Racontez la traversée, l'arrivée et l'inspection, et dites ce que vous ressentez. Employez le prétérit, au moins trois mots du lexique de la leçon et au moins un push ou pull factor.",
              hint: "Organisez la lettre en trois temps : la traversée (the crossing), l'inspection (the doctors, the questions), vos sentiments et vos projets (I feel... I hope...).",
              solution: [
                "Plan : formule d'appel ; la traversée ; l'arrivée et l'inspection ; sentiments et projets ; formule de fin.",
                "Exemple : « Dear Mum and Dad, I finally arrived in America last week! The crossing was terrible: the ship was crowded and many passengers were seasick. When we landed at Ellis Island, I was frightened. A doctor examined my eyes and an inspector asked me a lot of questions about my job and my money. Luckily, I passed the inspection. Now I live with cousin Marco in New York and I'm looking for a job. I miss you and sometimes I feel homesick, but I hope I can send you money soon. Love, Antonio »",
                "Vérifier : prétérit pour les faits passés (arrived, was, landed, examined, asked, passed), lexique (crossing, crowded, landed, homesick, frightened), pull factor (trouver un travail, envoyer de l'argent).",
                "Résultat : une lettre d'environ 95 mots, au passé, qui raconte un parcours d'immigrant cohérent avec l'histoire.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire d'Ellis Island dans l'ordre chronologique.",
            items: [
              "1886 : inauguration de la statue de la Liberté dans la baie de New York",
              "1892 : ouverture du centre d'immigration d'Ellis Island",
              "1907 : année record pour l'immigration à Ellis Island",
              "1924 : l'Immigration Act impose des quotas par pays d'origine",
              "1954 : fermeture du centre d'Ellis Island",
              "1990 : ouverture du musée de l'immigration d'Ellis Island",
            ],
          },
          quiz: [
            { q: "Where is Ellis Island?", options: ["In San Francisco Bay", "In New York Harbor", "In Boston", "On the Mississippi River"], answer: 1, why: "Ellis Island se trouve dans la baie de New York, près de la statue de la Liberté." },
            { q: "Which of these is a push factor?", options: ["freedom", "jobs in factories", "the American Dream", "famine"], answer: 3, why: "La famine pousse à quitter son pays ; les trois autres attirent vers les États-Unis (pull factors)." },
            { q: "When did Ellis Island close?", options: ["1954", "1892", "1924", "1990"], answer: 0, why: "Le centre a fonctionné de 1892 à 1954 ; il est devenu un musée en 1990." },
            { q: "Why was Ellis Island called « the Island of Tears »?", options: ["Because it often rained there", "Because the crossing from Europe was long and dangerous", "Because some immigrants were refused and sent back", "Because the island was sinking"], answer: 2, why: "Une petite partie des immigrants, environ 2 %, était renvoyée, ce qui séparait parfois des familles." },
            { q: "« To settle » means:", options: ["s'installer", "prendre le bateau", "fuir", "traverser"], answer: 0, why: "To settle signifie s'installer ; prendre le bateau se dit to board a ship, fuir to flee, traverser to cross." },
          ],
          trap: "Croire que la majorité des immigrants était refusée à Ellis Island : en réalité, environ 2 % seulement étaient renvoyés. Autre piège : confondre to emigrate (quitter son pays) et to immigrate (s'installer dans un autre).",
          method: "Pour retenir le parcours, construisez une carte mentale en anglais avec trois branches : before (push factors), the journey (crossing, inspection), after (settle, a new life). Racontez-la ensuite à voix haute en une minute, au prétérit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'past-perfect',
          title: 'Le past perfect : l\'antériorité dans le récit',
          minutes: 30,
          objectives: [
            "Former le past perfect (had + participe passé) à toutes les formes.",
            "Employer le past perfect pour exprimer l'antériorité d'une action par rapport à un moment du passé.",
            "Distinguer, dans un récit, le prétérit simple et le past perfect.",
          ],
          course: [
            {
              heading: "La formation",
              paragraphs: [
                "Le past perfect se forme avec l'auxiliaire had (prétérit de have), identique à toutes les personnes, suivi du participe passé du verbe : I had finished, she had left, they had arrived. À l'oral, had se contracte en 'd : « I'd seen », « they'd gone ».",
                "Le participe passé des verbes réguliers se termine en -ed (worked, decided, travelled). Pour les verbes irréguliers, c'est la troisième colonne de la liste : go, went, gone ; see, saw, seen ; leave, left, left ; take, took, taken ; write, wrote, written ; be, was / were, been ; buy, bought, bought ; find, found, found.",
                "À la forme négative, on ajoute not : had not, contracté en hadn't (« She hadn't seen the sea before »). À la forme interrogative, had passe devant le sujet : « Had they eaten when you arrived? » Réponses courtes : « Yes, they had. » / « No, they hadn't. »",
              ],
              box: { label: "Formule", text: "Sujet + had + participe passé. Négation : hadn't + participe passé. Question : Had + sujet + participe passé ? Exemple : He had left. He hadn't left. Had he left?" },
            },
            {
              heading: "L'emploi : un passé dans le passé",
              paragraphs: [
                "Dans un récit au prétérit, le past perfect indique qu'une action a eu lieu avant une autre action passée. Il correspond au plus-que-parfait français (« j'avais fini »). Exemple : « When the ship arrived in New York, Giulia had been at sea for twelve days. » Le moment de référence est l'arrivée (prétérit) ; les douze jours en mer sont antérieurs (past perfect).",
                "Comparez : « When we got to the station, the train left » : nous arrivons, puis le train part, nous le voyons partir. « When we got to the station, the train had left » : le train était déjà parti avant notre arrivée, nous l'avons raté. Le temps choisi change l'ordre des événements.",
                "Le past perfect sert aussi au retour en arrière (flashback) dans un récit : « She looked at the old photo. Her grandfather had taken it in 1912, just before he left Ireland. » On l'emploie enfin pour dire qu'une chose n'était jamais arrivée avant un moment passé : « It was the first time I had seen the Statue of Liberty. »",
              ],
              box: { label: "Règle", text: "Action 1 (la plus ancienne) : past perfect. Action 2 (le moment de référence) : prétérit simple. When I arrived (2), the film had started (1)." },
            },
            {
              heading: "Les marqueurs et les nuances",
              paragraphs: [
                "Le past perfect apparaît souvent avec : already (déjà), just (venir de), never... before (jamais auparavant), by the time (au moment où, avant que), after (après que), before (avant que), until (jusqu'à ce que). Exemples : « By the time the police arrived, the thief had escaped. » « She had just left when you called. »",
                "Avec after et before, l'ordre des actions est déjà clair grâce à la conjonction : le prétérit simple est alors souvent accepté (« After he finished his homework, he went out »). Le past perfect insiste sur le fait que la première action était terminée : « After he had finished his homework, he went out. »",
                "Ne mettez pas de past perfect dans une simple suite d'actions racontées dans l'ordre : « He got up, had a shower and left the house » est au prétérit simple, car chaque action suit la précédente. Le past perfect n'est utile que lorsque l'on revient en arrière.",
              ],
            },
          ],
          keyPoints: [
            "Past perfect : had + participe passé, à toutes les personnes (contraction 'd).",
            "Négation : hadn't + participe passé ; question : Had + sujet + participe passé ?",
            "Il exprime une action antérieure à un moment du passé : c'est le plus-que-parfait.",
            "When I arrived, the train had left : le train était parti avant mon arrivée.",
            "Marqueurs : already, just, never... before, by the time, after, before.",
            "Une suite d'actions dans l'ordre se raconte au prétérit simple, pas au past perfect.",
          ],
          example: {
            statement: "Mettez les verbes entre parenthèses au prétérit simple ou au past perfect : « When Anna (1. arrive) at Ellis Island in 1912, she was exhausted. She (2. never / travel) so far before. She (3. leave) her village three weeks earlier. Her brother (4. emigrate) to America two years before, and he (5. send) her a ticket. When she finally (6. see) him on the ferry pier, she (7. cry) with joy. »",
            solution: [
              "1) Moment de référence du récit : « When Anna arrived » (prétérit).",
              "2) Expérience jamais vécue avant ce moment : « She had never travelled so far before » (past perfect avec never... before).",
              "3) Action antérieure à l'arrivée, marquée par « three weeks earlier » : « She had left her village ».",
              "4) et 5) Deux actions encore plus anciennes, racontées en retour en arrière : « Her brother had emigrated » ; « he had sent her a ticket ».",
              "6) et 7) Retour au fil du récit, actions successives : « When she finally saw him, she cried with joy. »",
              "Réponses : arrived ; had never travelled ; had left ; had emigrated ; had sent ; saw ; cried.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez ces phrases au past perfect, à la forme demandée. a) I / finish / my homework (affirmative). b) They / see / the ocean (negative). c) She / lose / her passport (affirmative). d) you / eat / before the film (question). e) We / buy / the tickets (affirmative).",
              hint: "Had ne change jamais ; cherchez le participe passé dans la troisième colonne pour les verbes irréguliers.",
              solution: [
                "a) I had finished my homework. (régulier : finished)",
                "b) They hadn't seen the ocean. (see, saw, seen)",
                "c) She had lost her passport. (lose, lost, lost)",
                "d) Had you eaten before the film? (eat, ate, eaten)",
                "e) We had bought the tickets. (buy, bought, bought)",
              ],
            },
            {
              level: 2,
              statement: "Reliez chaque paire de phrases en une seule, avec la conjonction donnée, et mettez au past perfect l'action la plus ancienne. a) The ship left. We arrived at the port. (when) b) He saved money for two years. He bought a ticket for New York. (after) c) She never spoke English. She arrived in the USA. (before) d) The film started. We got to the cinema. (by the time)",
              hint: "Repérez quelle action s'est produite en premier : c'est elle qui passe au past perfect. L'autre reste au prétérit.",
              solution: [
                "a) When we arrived at the port, the ship had left. (le bateau est parti avant notre arrivée)",
                "b) After he had saved money for two years, he bought a ticket for New York.",
                "c) She had never spoken English before she arrived in the USA.",
                "d) By the time we got to the cinema, the film had started.",
              ],
            },
            {
              level: 3,
              statement: "Compréhension et expression. Lisez : « In 1920, Sam opened a small bakery in Brooklyn. He had arrived from Poland ten years earlier with no money. » 1) Quelle action s'est produite en premier ? Justifiez par le temps employé. 2) Continuez l'histoire de Sam en 60 à 80 mots : racontez ce qu'il fait en 1920 (prétérit) et revenez sur ses premières années en Amérique (past perfect). Employez au moins trois past perfect, dont un avec never... before.",
              hint: "Ancrez le récit en 1920 au prétérit, puis utilisez had + participe passé pour tout ce qui précède cette date.",
              solution: [
                "1) Sam est d'abord arrivé de Pologne (1910), puis il a ouvert sa boulangerie (1920) : « had arrived » est au past perfect, donc antérieur à « opened », au prétérit.",
                "2) Exemple : « On the first day, many customers came to the bakery and Sam felt proud. Life had not been easy. When he arrived, he had never seen such a big city before. He had worked in a factory for six years and he had learnt English at night school. He had also saved every cent. That evening, he wrote to his mother, who had stayed in Poland, to tell her the good news. »",
                "Vérifier : moment de référence au prétérit (came, felt, arrived, wrote) ; antériorité au past perfect (had not been, had never seen... before, had worked, had learnt, had saved, had stayed).",
                "Résultat : un récit d'environ 75 mots qui articule clairement les deux temps.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases et ces règles sont-elles correctes ?",
            statements: [
              { text: "The past perfect is formed with had + past participle.", true: true, why: "C'est la formule, identique à toutes les personnes." },
              { text: "« She had went home. » is correct.", true: false, why: "Il faut le participe passé : « She had gone home. »" },
              { text: "« When I arrived, the bus had left » means I saw the bus leave.", true: false, why: "Le bus était déjà parti avant mon arrivée : je l'ai raté." },
              { text: "The past perfect often corresponds to the French plus-que-parfait.", true: true, why: "« I had finished » se traduit par « j'avais fini »." },
              { text: "« He woke up, had breakfast and had left. » is a good way to tell a sequence of actions.", true: false, why: "Des actions successives racontées dans l'ordre restent au prétérit simple : « He woke up, had breakfast and left. »" },
              { text: "« It was the first time I had seen snow. » is correct.", true: true, why: "Après « It was the first time », on emploie le past perfect pour une expérience nouvelle dans le passé." },
              { text: "In the question form, we say « Did you had finished? ».", true: false, why: "La question se forme en inversant had et le sujet : « Had you finished? »" },
            ],
          },
          quiz: [
            { q: "By the time we arrived, the concert ___.", options: ["has started", "had started", "started", "was starting"], answer: 1, why: "By the time marque un moment passé : le concert avait commencé avant notre arrivée." },
            { q: "Choose the correct negative form.", options: ["She didn't had seen it.", "She hadn't saw it.", "She hadn't seen it.", "She not had seen it."], answer: 2, why: "Négation : hadn't + participe passé (seen)." },
            { q: "« I'd left » means:", options: ["I had left", "I would left", "I did left"], answer: 0, why: "Suivi d'un participe passé, 'd est la contraction de had." },
            { q: "Which sentence shows that the action happened BEFORE the other?", options: ["When I called, she left.", "When I called, she was leaving.", "When I call, she leaves.", "When I called, she had left."], answer: 3, why: "Le past perfect « had left » montre qu'elle était partie avant mon appel." },
            { q: "What is the past participle of « take »?", options: ["took", "taked", "taken", "take"], answer: 2, why: "Take, took, taken : le participe passé est taken." },
          ],
          trap: "Employer le prétérit à la place du participe passé après had (« I had went », « she had saw »), ou mettre au past perfect une suite d'actions racontées dans l'ordre.",
          method: "Avant de choisir le temps, tracez une flèche du temps et placez-y les actions : celle qui est avant le moment de référence du récit prend had + participe passé. Révisez chaque semaine dix verbes irréguliers par leurs trois colonnes, à voix haute.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'used-to',
          title: 'Parler d\'habitudes passées avec « used to »',
          minutes: 25,
          objectives: [
            "Employer used to + base verbale pour évoquer une habitude ou un état passé révolu.",
            "Former la négation et la question de used to avec did.",
            "Distinguer used to, would et be used to + V-ing.",
            "Comparer une situation passée et une situation présente (then and now).",
          ],
          course: [
            {
              heading: "Used to : ce qui était vrai autrefois",
              paragraphs: [
                "Used to + base verbale exprime une habitude passée ou une situation passée qui n'est plus vraie aujourd'hui. Il correspond souvent à l'imparfait français ou à « avoir l'habitude de » au passé. Exemples : « My grandparents used to live in Ireland » (ils n'y vivent plus) ; « I used to play with dolls » (je ne le fais plus).",
                "La forme est la même à toutes les personnes : I used to, she used to, they used to. Le verbe qui suit est toujours à la base verbale : « He used to work in a factory », jamais « used to worked ». Prononciation : on dit /ˈjuːstə/, avec un s sourd, comme dans « juice ».",
              ],
              box: { label: "Formule", text: "Sujet + used to + base verbale. She used to live in Dublin. Négation : didn't use to + base. Question : Did + sujet + use to + base ?" },
            },
            {
              heading: "Négation et question",
              paragraphs: [
                "Comme pour tout verbe au prétérit, la négation et la question se forment avec did. Après did, used perd son d : « I didn't use to like vegetables. » « Did you use to walk to school? » Réponses courtes : « Yes, I did. » / « No, I didn't. » On peut aussi dire « I never used to like vegetables ».",
                "Attention, used to n'existe qu'au passé. Pour une habitude présente, on emploie le présent simple, souvent avec un adverbe de fréquence : « I usually walk to school » (d'habitude, je vais à pied au collège). On ne dit pas « I use to walk ».",
              ],
            },
            {
              heading: "Used to, would et le prétérit simple",
              paragraphs: [
                "Pour des actions répétées dans le passé, on peut aussi employer would + base verbale, surtout dans un récit de souvenirs : « Every Sunday, my grandmother would bake a cake. » Mais would ne s'emploie pas pour un état : on dit « I used to have long hair » et non « I would have long hair ».",
                "Used to ne s'emploie pas avec un nombre précis de fois ou une durée précise : on dit « I went to London three times » et « She lived in Italy for five years », au prétérit simple. Used to insiste sur le contraste entre autrefois et aujourd'hui.",
              ],
            },
            {
              heading: "Ne pas confondre : be used to + V-ing",
              paragraphs: [
                "Be used to + nom ou V-ing signifie « être habitué à » : « I'm used to getting up early » (j'ai l'habitude de me lever tôt, cela ne me gêne pas). Get used to + nom ou V-ing signifie « s'habituer à » : « When she moved to London, she had to get used to driving on the left. »",
                "Dans ces deux expressions, to est une préposition : il est donc suivi d'un nom ou d'un verbe en -ing, et be ou get se conjuguent à tous les temps (I'm used to, I was used to, I'll get used to). Avec used to seul (habitude passée), to fait partie de la forme verbale et il est suivi de la base verbale.",
              ],
              box: { label: "À retenir", text: "I used to live in Paris : j'habitais à Paris (plus maintenant). I'm used to living in Paris : je suis habitué à vivre à Paris. I'm getting used to living in Paris : je m'habitue à vivre à Paris." },
            },
          ],
          keyPoints: [
            "Used to + base verbale : habitude ou état passé révolu (« I used to live in Rome »).",
            "Négation : didn't use to ; question : Did you use to... ?",
            "Pas de used to au présent : pour une habitude actuelle, présent simple + usually.",
            "Would + base : actions répétées dans un souvenir, jamais pour un état.",
            "Be used to + V-ing : être habitué à ; get used to + V-ing : s'habituer à.",
            "Nombre de fois ou durée précise : prétérit simple (I went there twice).",
          ],
          example: {
            statement: "Comparez la vie de Maria, arrivée d'Italie à New York en 1905, avant et après son départ, en écrivant une phrase avec used to et une phrase au présent pour chaque élément : a) live in a small village / live in a big city ; b) work on a farm / work in a clothing factory ; c) not speak English / take English lessons.",
            solution: [
              "Repérer ce qui appartient au passé révolu (avant le départ) : c'est cette partie qui prend used to.",
              "a) « Maria used to live in a small village. Now she lives in a big city. »",
              "b) « She used to work on a farm. Now she works in a clothing factory. »",
              "c) Négation avec did et use sans d : « She didn't use to speak English. Now she takes English lessons. »",
              "Vérifier : base verbale après used to, -s du présent à la troisième personne (lives, works, takes).",
              "Réponse : trois paires de phrases qui opposent then (used to) et now (présent simple).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec la bonne forme de used to (affirmative, négative ou interrogative) et le verbe entre parenthèses. a) When I was little, I ___ (be) afraid of dogs. b) My dad ___ (not / like) coffee, but now he drinks it every day. c) ___ you ___ (go) to the beach on holiday? d) There ___ (be) a cinema in this street, but it closed.",
              hint: "Affirmative : used to + base. Négative et question : did + use to + base.",
              solution: [
                "a) When I was little, I used to be afraid of dogs.",
                "b) My dad didn't use to like coffee, but now he drinks it every day.",
                "c) Did you use to go to the beach on holiday?",
                "d) There used to be a cinema in this street, but it closed.",
              ],
            },
            {
              level: 2,
              statement: "Choisissez la forme correcte et justifiez. a) I used to / am used to wake up at 7, but now I wake up at 6. b) She lived / used to live in Canada for three years. c) Don't worry, you'll soon get used to wear / wearing a uniform. d) When we were children, we would / used to have a big dog.",
              hint: "Demandez-vous à chaque fois : habitude révolue, durée précise, ou fait d'être habitué ? Et would ne s'emploie pas pour un état.",
              solution: [
                "a) I used to wake up at 7 : habitude passée qui a changé (but now...).",
                "b) She lived in Canada for three years : durée précise, donc prétérit simple.",
                "c) you'll soon get used to wearing a uniform : get used to est suivi d'un verbe en -ing.",
                "d) we used to have a big dog : have (posséder) est ici un état, would est impossible.",
              ],
            },
            {
              level: 3,
              statement: "Un immigrant irlandais installé à Boston en 1910 compare sa vie d'avant et sa vie actuelle. Écrivez son témoignage fictif en 70 à 90 mots. Employez au moins trois fois used to (dont une négation), une fois would pour une action répétée, et une fois be used to ou get used to.",
              hint: "Opposez deux colonnes : in Ireland (used to, would) et in Boston (présent simple), puis évoquez ce à quoi il a dû s'habituer.",
              solution: [
                "Plan : la vie en Irlande (used to, would) ; la vie à Boston (présent) ; l'adaptation (get used to / be used to).",
                "Exemple : « In Ireland, I used to live on a small farm with my parents. We didn't use to have much money and we often went hungry. Every evening, my mother would tell us old stories by the fire. Now I live in Boston and I work in a shoe factory. The streets are noisy and crowded, and at first it was hard to get used to living in such a big city. Now I'm used to it, but I still miss the green hills. »",
                "Vérifier : used to + base (used to live), négation (didn't use to have), would pour l'action répétée (would tell), get used to + V-ing (get used to living), be used to + pronom (I'm used to it).",
                "Résultat : un témoignage d'environ 85 mots qui oppose then et now.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque phrase anglaise à sa traduction.",
            pairs: [
              { left: "I used to live in Rome.", right: "J'habitais à Rome (avant)." },
              { left: "I'm used to living in Rome.", right: "Je suis habitué à vivre à Rome." },
              { left: "I'm getting used to living in Rome.", right: "Je m'habitue à vivre à Rome." },
              { left: "I didn't use to like Rome.", right: "Avant, je n'aimais pas Rome." },
              { left: "Did you use to live in Rome?", right: "Est-ce que vous habitiez à Rome avant ?" },
              { left: "I usually go to Rome in May.", right: "D'habitude, je vais à Rome en mai." },
            ],
          },
          quiz: [
            { q: "When I was a child, I ___ in the countryside.", options: ["use to live", "used to living", "used to live", "was used to live"], answer: 2, why: "Habitude ou état passé révolu : used to + base verbale." },
            { q: "Choose the correct question.", options: ["Did you used to play football?", "Did you use to play football?", "Used you to play football?"], answer: 1, why: "Après did, on emploie la base use, sans d." },
            { q: "« I'm used to ___ early. »", options: ["get up", "getting up", "got up", "will get up"], answer: 1, why: "Dans be used to, to est une préposition : il est suivi d'un verbe en -ing." },
            { q: "Which sentence is NOT correct?", options: ["We would go fishing every Sunday with our grandfather.", "I used to have a bike.", "I would have long hair when I was young.", "She used to be shy."], answer: 2, why: "Would ne s'emploie pas pour un état (avoir les cheveux longs) : on dit « I used to have long hair »." },
            { q: "How do you talk about a present habit?", options: ["I usually walk to school.", "I use to walk to school.", "I'm used to walk to school.", "I used to walking to school."], answer: 0, why: "Used to n'existe qu'au passé ; une habitude présente s'exprime au présent simple, souvent avec usually." },
          ],
          trap: "Confondre used to + base verbale (habitude passée) et be used to + V-ing (être habitué à), ou écrire « Did you used to » et « I use to » au présent.",
          method: "Faites deux colonnes, then et now, sur un sujet personnel (votre enfance, votre quartier) et écrivez une phrase par ligne : used to à gauche, présent simple à droite. Relisez en vérifiant la base verbale après used to.",
        },
      ],
    },
    /* ================================================================== */
    {
      id: 'around-the-world',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'travel-plans',
          title: 'Organiser un voyage : réserver, demander son chemin',
          minutes: 30,
          objectives: [
            "Réserver une chambre ou un billet en formulant des demandes polies (I'd like..., Could I...?).",
            "Présenter un projet de voyage avec le présent en be + V-ing et going to.",
            "Demander son chemin et indiquer un itinéraire avec les prépositions de lieu.",
            "Mobiliser le lexique de la gare, de l'aéroport et de l'hôtel.",
          ],
          course: [
            {
              heading: "Réserver : les demandes polies",
              paragraphs: [
                "Pour réserver, on emploie des formules polies : « I'd like to book a double room for two nights, please » (je voudrais réserver une chambre double pour deux nuits) ; « Could I have a return ticket to Oxford, please? » ; « Do you have any rooms available on 12 July? » ; « How much is it per night? » ; « Is breakfast included? » ; « Can I pay by card? ». I'd like est la contraction de I would like : plus poli que « I want ».",
                "Le vocabulaire de l'hôtel : a single room (chambre simple), a double room (chambre double), a twin room (deux lits séparés), a booking ou a reservation (une réservation), to check in / to check out (arriver / quitter l'hôtel), the reception (l'accueil), fully booked (complet). Pour les billets, les Britanniques disent a single (un aller simple) et a return (un aller-retour) ; les Américains disent a one-way ticket et a round-trip ticket.",
              ],
              box: { label: "À retenir", text: "I'd like to book... Could I have...? Do you have...? How much is it? Is breakfast included? Can I pay by card? Aller simple : a single (GB), a one-way ticket (US). Aller-retour : a return (GB), a round-trip ticket (US)." },
            },
            {
              heading: "Parler de ses projets de voyage",
              paragraphs: [
                "Pour un projet déjà organisé (billets achetés, hôtel réservé), on emploie le présent en be + V-ing : « We're flying to Dublin on Saturday. We're staying at a small hotel near the river. » Pour une intention, on emploie going to : « I'm going to visit the Book of Kells at Trinity College. » Pour une décision prise sur le moment, will : « It's raining. I'll take a taxi. »",
                "Pour les horaires de transports, on emploie le présent simple, car il s'agit d'un programme fixe : « The train leaves at 10.15 and arrives at 11.30. » Les moyens de transport s'introduisent avec by : by train, by bus, by plane, by car, by boat ; mais on dit on foot (à pied). On dit aussi « to take the train », « to catch a bus » (attraper un bus), « to miss the plane » (rater l'avion).",
              ],
              box: { label: "Règle", text: "Projet organisé : be + V-ing (We're leaving tomorrow). Intention : going to. Décision immédiate : will. Horaire : présent simple (The plane takes off at 9). By train, by car, mais on foot." },
            },
            {
              heading: "Demander et indiquer son chemin",
              paragraphs: [
                "Pour demander : « Excuse me, how do I get to the station? » ; « Could you tell me the way to the museum, please? » ; « Is there a bank near here? » ; « Is it far? ». La question indirecte « Could you tell me where the museum is? » garde l'ordre sujet + verbe, sans inversion.",
                "Pour indiquer : go straight on (GB) ou go straight ahead (tout droit) ; turn left / turn right (tournez à gauche, à droite) ; take the first street on the left (prenez la première rue à gauche) ; go past the church (passez devant l'église) ; cross the bridge (traversez le pont) ; go along the street (suivez la rue) ; it's on your left (c'est sur votre gauche). Aux États-Unis, on compte souvent en blocks : « Walk two blocks. »",
                "Pour situer un lieu : next to (à côté de), opposite (en face de), between... and... (entre... et...), behind (derrière), in front of (devant), on the corner of (au coin de), at the end of the street (au bout de la rue). Pour la distance : « It's a five-minute walk » (c'est à cinq minutes à pied), « It's about two kilometres from here ».",
              ],
            },
            {
              heading: "À la gare et à l'aéroport",
              paragraphs: [
                "Vocabulaire utile : the platform (le quai), the gate (la porte d'embarquement), a boarding pass (une carte d'embarquement), the departures / the arrivals (les départs, les arrivées), delayed (retardé), cancelled (annulé, écrit canceled aux États-Unis), the timetable (les horaires), to board (embarquer), luggage (les bagages). Luggage est indénombrable : on dit « my luggage is heavy » et « a piece of luggage », jamais « luggages ».",
              ],
            },
          ],
          keyPoints: [
            "Réserver poliment : I'd like to book..., Could I have...?, Is breakfast included?",
            "Aller simple : single (GB), one-way (US) ; aller-retour : return (GB), round-trip (US).",
            "Projet organisé : be + V-ing ; horaires : présent simple (The train leaves at 10).",
            "Demander son chemin : How do I get to...? Could you tell me the way to...?",
            "Indiquer : go straight on, turn left, take the second street on the right, it's opposite the park.",
            "By train, by plane, mais on foot ; luggage est indénombrable.",
          ],
          example: {
            statement: "Vous êtes devant la gare, dans King Street. En sortant, vous pouvez aller à gauche ou à droite. À droite, la première rue à gauche s'appelle Park Road. Dans Park Road, le parc est sur la gauche ; le musée est sur la droite, en face du parc ; la cathédrale est au bout de la rue. Un touriste vous demande : « Excuse me, how do I get to the museum? » Répondez-lui, puis indiquez-lui le chemin de la cathédrale.",
            solution: [
              "Première étape, la direction en sortant de la gare : « Turn right into King Street. »",
              "Deuxième étape, la rue à prendre : « Take the first street on the left. That's Park Road. »",
              "Troisième étape, situer le musée : « Go straight on. The museum is on your right, opposite the park. »",
              "Pour la cathédrale, on prolonge l'itinéraire : « Go straight on to the end of Park Road. The cathedral is at the end of the street. »",
              "Conclure poliment : « It's not far, it's about a five-minute walk. You're welcome! »",
              "Réponse : un itinéraire découpé en étapes, à l'impératif, avec des repères (opposite, on your right, at the end of).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en anglais. a) Je voudrais réserver une chambre double pour deux nuits. b) Un aller-retour pour Londres, s'il vous plaît (anglais britannique). c) Le petit-déjeuner est-il compris ? d) Excusez-moi, comment va-t-on à la gare ? e) Tournez à gauche, puis allez tout droit.",
              hint: "Pensez aux formules polies I'd like et Excuse me, et à l'impératif sans sujet pour indiquer un chemin.",
              solution: [
                "a) I'd like to book a double room for two nights, please.",
                "b) A return ticket to London, please. (ou : Could I have a return to London, please?)",
                "c) Is breakfast included?",
                "d) Excuse me, how do I get to the station?",
                "e) Turn left, then go straight on.",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce dialogue au guichet d'une gare britannique avec : like, return, leaves, platform, much, by. Clerk : « Good morning. Can I help you? » Traveller : « Yes, I'd ___ a ticket to Oxford, please. » Clerk : « Single or ___? » Traveller : « Return, please. I'm coming back tomorrow. What time is the next train? » Clerk : « It ___ at 10.15 from ___ 4. » Traveller : « How ___ is it? » Clerk : « That's 24 pounds 50. » Traveller : « Can I pay ___ card? » Clerk : « Of course. »",
              hint: "Repérez les expressions toutes faites : I'd like, single or return, how much, pay by card. Un horaire se dit au présent simple.",
              solution: [
                "« I'd like a ticket to Oxford » : demande polie.",
                "« Single or return? » : aller simple ou aller-retour.",
                "« It leaves at 10.15 from platform 4 » : horaire au présent simple (troisième personne, -s) et quai.",
                "« How much is it? » : demander le prix.",
                "« Can I pay by card? » : payer par carte.",
                "Réponses dans l'ordre : like ; return ; leaves ; platform ; much ; by.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite. Vous partez avec votre famille à Édimbourg du 14 au 17 avril. Écrivez un courriel de 60 à 80 mots à la réception du « Castle View Hotel » pour réserver. Précisez : le nombre de personnes et de chambres, les dates, une question sur le prix, une question sur le petit-déjeuner, et demandez comment aller de la gare à l'hôtel.",
              hint: "Structure d'un courriel formel : Dear Sir or Madam, l'objet de votre message (I'm writing to...), vos demandes, une formule de politesse (I look forward to hearing from you. Yours faithfully, ...).",
              solution: [
                "Plan : formule d'appel ; objet ; détails de la réservation ; questions ; formule finale.",
                "Exemple : « Dear Sir or Madam, I'm writing to book two rooms at your hotel for my family. We are four people: my parents, my sister and me. We would like a double room and a twin room from 14 to 17 April, so for three nights. Could you tell me how much it is per night? Is breakfast included? Finally, how do we get to the hotel from the station? Is it a long walk? I look forward to hearing from you. Yours faithfully, Léa Martin »",
                "Vérifier : formules polies (I'd like / We would like, Could you tell me...?), dates et nombre de nuits cohérents (du 14 au 17 avril : trois nuits), vocabulaire de l'hôtel (double room, twin room, breakfast included).",
                "Résultat : un courriel d'environ 80 mots, poli et complet.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre ce dialogue à la réception d'un hôtel.",
            items: [
              "Receptionist: Good evening, welcome to the Grand Hotel. How can I help you?",
              "Guest: Hello, I'd like to book a double room for two nights, please.",
              "Receptionist: Certainly. When would you like to arrive?",
              "Guest: On Friday. How much is it per night?",
              "Receptionist: It's 90 pounds per night, breakfast included.",
              "Guest: Perfect. Can I pay by card?",
              "Receptionist: Of course. Could I have your name, please?",
            ],
          },
          quiz: [
            { q: "In British English, a ticket to go and come back is:", options: ["a single", "a one-way", "a return", "a double"], answer: 2, why: "Un aller-retour se dit a return en anglais britannique (a round-trip ticket en américain)." },
            { q: "Which sentence is correct?", options: ["My luggages are heavy.", "My luggage is heavy.", "My luggage are heavy.", "My luggages is heavy."], answer: 1, why: "Luggage est indénombrable : pas de -s, verbe au singulier." },
            { q: "« Could you tell me where ___? »", options: ["is the station", "the station is", "does the station is", "the station"], answer: 1, why: "Dans une question indirecte, on garde l'ordre sujet + verbe : where the station is." },
            { q: "We ___ to Dublin next Saturday: the tickets are booked.", options: ["are flying", "fly", "flew", "would fly"], answer: 0, why: "Projet organisé et déjà fixé : présent en be + V-ing." },
            { q: "« Opposite the park » means:", options: ["à côté du parc", "derrière le parc", "au bout du parc", "en face du parc"], answer: 3, why: "Opposite signifie en face de ; à côté de se dit next to, derrière se dit behind." },
          ],
          trap: "Mettre un -s à luggage ou dire « by foot » au lieu de « on foot », et inverser le sujet dans une question indirecte (« Could you tell me where is the station? »).",
          method: "Entraînez-vous avec un vrai plan de ville (celui de votre quartier ou d'une ville anglophone) : choisissez un départ et une arrivée, puis décrivez l'itinéraire à voix haute en trois ou quatre étapes, avec un repère à chaque fois.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'describe-places',
          title: 'Décrire un lieu : comparatifs et superlatifs',
          minutes: 30,
          objectives: [
            "Décrire un lieu (ville, paysage, monument) avec un lexique précis et des adjectifs variés.",
            "Former et employer le comparatif de supériorité, d'infériorité et d'égalité.",
            "Former et employer le superlatif, y compris avec les adjectifs irréguliers.",
          ],
          course: [
            {
              heading: "Décrire un lieu",
              paragraphs: [
                "Pour situer un lieu : « Edinburgh is in the south-east of Scotland » ; « It's on the coast » (sur la côte) ; « It's located in the north of England ». Pour le décrire : « There is a castle on a hill » ; « There are many parks » ; « It's famous for its festival » (célèbre pour). Pour donner une impression : « It looks peaceful » (cela a l'air paisible).",
                "Adjectifs utiles : crowded (bondé), lively (animé), quiet / peaceful (calme), noisy (bruyant), polluted (pollué), ancient (très ancien), modern, huge (immense), tiny (minuscule), breathtaking (à couper le souffle), picturesque (pittoresque). Noms : a skyscraper (un gratte-ciel), the countryside (la campagne), a harbour (un port), a landscape (un paysage), the suburbs (la banlieue), a landmark (un monument emblématique).",
              ],
            },
            {
              heading: "Le comparatif",
              paragraphs: [
                "Adjectifs courts (une syllabe, ou deux syllabes terminées par -y) : on ajoute -er, suivi de than. « London is bigger than Edinburgh. » Orthographe : la consonne finale est doublée après une voyelle courte (big, bigger ; hot, hotter) ; on ajoute seulement -r après un -e (nice, nicer ; large, larger) ; le y devient -ier (busy, busier ; easy, easier).",
                "Adjectifs longs (deux syllabes ou plus, sauf ceux en -y) : more + adjectif + than. « This museum is more interesting than the zoo. » « Travelling by train is more comfortable than travelling by bus. » Quelques adjectifs de deux syllabes acceptent les deux formes (quiet : quieter ou more quiet).",
                "Irréguliers : good, better ; bad, worse ; far, farther ou further. Infériorité : less + adjectif + than (« The village is less crowded than the city »), ou, plus naturellement avec un adjectif court, not as + adjectif + as (« The village isn't as big as the city »). Égalité : as + adjectif + as (« Lyon is as beautiful as Bordeaux »). Pour renforcer : much, far, a lot + comparatif (« much bigger ») ; pour nuancer : a bit, slightly.",
              ],
              box: { label: "Règle", text: "Court : adjectif + -er + than (cheaper than). Long : more + adjectif + than (more expensive than). Irréguliers : good, better ; bad, worse ; far, farther / further. Égalité : as... as. Infériorité : less... than, not as... as." },
            },
            {
              heading: "Le superlatif",
              paragraphs: [
                "Adjectifs courts : the + adjectif + -est, avec les mêmes règles d'orthographe (the biggest, the nicest, the busiest). Adjectifs longs : the most + adjectif (the most beautiful). Irréguliers : the best, the worst, the farthest ou the furthest. Le superlatif est toujours précédé de the (ou d'un possessif : « my best friend »).",
                "Le lieu ou le groupe de référence s'introduit par in pour un lieu (« Alaska is the largest state in the USA » ; « Ben Nevis is the highest mountain in the UK ») et par of pour un ensemble (« the oldest of the three hotels »). Il se combine souvent avec le present perfect et ever : « It's the most beautiful place I have ever visited » (le plus bel endroit que j'aie jamais visité).",
              ],
              box: { label: "Formule", text: "Court : the + adjectif + -est (the cheapest). Long : the most + adjectif (the most expensive). The best, the worst, the farthest. In + lieu (in the world), of + groupe (of the three)." },
            },
            {
              heading: "Pour aller plus loin",
              paragraphs: [
                "Pour une évolution, on répète le comparatif : « The city is getting bigger and bigger » (de plus en plus grande) ; « Travelling is becoming more and more expensive ». Pour deux évolutions liées : « The more you travel, the more you learn » (plus vous voyagez, plus vous apprenez) ; « The higher you climb, the colder it gets ».",
              ],
            },
          ],
          keyPoints: [
            "Comparatif court : -er + than (bigger than) ; long : more + adjectif + than (more modern than).",
            "Superlatif court : the + -est (the biggest) ; long : the most + adjectif (the most famous).",
            "Orthographe : big, bigger ; nice, nicer ; busy, busier.",
            "Irréguliers : good, better, the best ; bad, worse, the worst ; far, farther, the farthest.",
            "Égalité : as... as ; infériorité : less... than ou not as... as.",
            "Superlatif + in pour un lieu (the biggest city in the world), + of pour un groupe.",
          ],
          example: {
            statement: "Comparez deux villes fictives à partir de ces données, en écrivant trois comparatifs et un superlatif. Greenville : 50 000 habitants, 12 musées, plage à 2 km. Rockport : 200 000 habitants, 5 musées, plage à 30 km. Bayside : 20 000 habitants, 1 musée, plage à 500 m.",
            solution: [
              "Repérer, pour chaque critère, l'adjectif adapté : big (habitants), interesting ou rich in museums (musées), close to ou far from (distance de la plage).",
              "Comparatif d'un adjectif court : « Rockport is bigger than Greenville. » (big, bigger : consonne doublée)",
              "Comparatif avec far : « Rockport is farther from the beach than Greenville. »",
              "Infériorité : « Bayside isn't as big as Greenville. »",
              "Superlatif sur les trois villes : « Bayside is the closest to the beach of the three towns » ; ou « Greenville has the most museums. »",
              "Réponse : quatre phrases correctes, avec than après le comparatif et the devant le superlatif.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le comparatif et le superlatif de : cheap, hot, easy, beautiful, good, modern, bad.",
              hint: "Comptez les syllabes, vérifiez la dernière lettre, et pensez aux trois irréguliers.",
              solution: [
                "cheap : cheaper, the cheapest. hot : hotter, the hottest (t doublé).",
                "easy : easier, the easiest (y devient i).",
                "beautiful : more beautiful, the most beautiful. modern : more modern, the most modern.",
                "good : better, the best. bad : worse, the worst.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez une phrase au comparatif ou au superlatif avec les éléments donnés. a) London / big / Edinburgh. b) Alaska / large state / the USA (superlatif). c) A plane / fast / a train. d) Vatican City / small country / the world (superlatif). e) The countryside / noisy / the city (infériorité). f) This hotel / good / the hotel we stayed in last year.",
              hint: "Comparatif : than. Superlatif : the + in. Infériorité : not as... as ou less... than. Good est irrégulier.",
              solution: [
                "a) London is bigger than Edinburgh.",
                "b) Alaska is the largest state in the USA.",
                "c) A plane is faster than a train.",
                "d) Vatican City is the smallest country in the world.",
                "e) The countryside isn't as noisy as the city. (ou : The countryside is less noisy than the city.)",
                "f) This hotel is better than the hotel we stayed in last year.",
              ],
            },
            {
              level: 3,
              statement: "Votre famille hésite entre trois hôtels fictifs. Sea View Hotel : 120 livres la nuit, à 200 m de la plage, construit en 1990, note 4 sur 5. City Lodge : 80 livres, à 2 km de la plage, construit en 2015, note 3 sur 5. Old Mill Inn : 95 livres, à 800 m de la plage, construit en 1850, note 5 sur 5. Rédigez un paragraphe de 60 à 80 mots qui compare les hôtels (au moins deux comparatifs et trois superlatifs) et recommande l'un d'eux en justifiant.",
              hint: "Utilisez cheap, expensive, close to, far from, old, modern, good. Un superlatif compare les trois hôtels ; un comparatif en compare deux.",
              solution: [
                "Repérer les extrêmes : le moins cher (City Lodge, 80), le plus cher (Sea View, 120) ; le plus proche de la plage (Sea View, 200 m), le plus loin (City Lodge, 2 km) ; le plus ancien (Old Mill, 1850), le plus moderne (City Lodge, 2015) ; le mieux noté (Old Mill, 5 sur 5).",
                "Exemple : « The City Lodge is the cheapest and the most modern hotel, but it is the farthest from the beach. The Sea View Hotel is the closest to the beach, but it is more expensive than the other two. The Old Mill Inn is the oldest and it has the best rating. It is cheaper than the Sea View and closer to the beach than the City Lodge. In my opinion, the Old Mill Inn is the best choice. »",
                "Vérifier les comparaisons : 95 < 120 (cheaper than the Sea View, vrai) ; 800 m < 2 km (closer than the City Lodge, vrai) ; 5 sur 5 est la meilleure note (the best rating, vrai).",
                "Résultat : un paragraphe d'environ 80 mots, exact par rapport aux données, avec une recommandation justifiée.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque adjectif à son comparatif et à son superlatif.",
            pairs: [
              { left: "good", right: "better, the best" },
              { left: "bad", right: "worse, the worst" },
              { left: "big", right: "bigger, the biggest" },
              { left: "busy", right: "busier, the busiest" },
              { left: "far", right: "farther, the farthest" },
              { left: "expensive", right: "more expensive, the most expensive" },
            ],
          },
          quiz: [
            { q: "New York is ___ than Boston.", options: ["more big", "bigger", "biggest", "the bigger"], answer: 1, why: "Big est un adjectif court : big, bigger (consonne doublée), suivi de than." },
            { q: "It's the most beautiful beach ___ the world.", options: ["of", "than", "at", "in"], answer: 3, why: "Après un superlatif, un lieu s'introduit par in : in the world." },
            { q: "What is the comparative of « bad »?", options: ["worse", "badder", "more bad", "worst"], answer: 0, why: "Bad est irrégulier : bad, worse, the worst." },
            { q: "« The village isn't ___ the city. »", options: ["as noisy than", "so noisy than", "as noisy as", "noisier as"], answer: 2, why: "La comparaison d'égalité ou sa négation se construit avec as... as." },
            { q: "Choose the correct sentence.", options: ["This is the most cheap hotel.", "This is the cheapest hotel.", "This is the more cheap hotel.", "This is cheapest hotel."], answer: 1, why: "Cheap est court : the cheapest, toujours avec the." },
          ],
          trap: "Cumuler les deux formes (« more bigger », « the most cheapest »), oublier the devant le superlatif, ou employer « that » au lieu de « than » après un comparatif.",
          method: "Avant d'écrire, comptez les syllabes de l'adjectif : une syllabe ou une fin en -y, c'est -er / -est ; sinon, more / the most. Apprenez par cœur les trois irréguliers (good, bad, far) comme une petite chanson : good, better, best.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'conditional',
          title: 'Faire des hypothèses : « if » et le conditionnel',
          minutes: 35,
          objectives: [
            "Exprimer une vérité générale avec if + présent simple (zero conditional).",
            "Exprimer une condition réalisable avec if + présent simple, will + base verbale (first conditional).",
            "Formuler une hypothèse irréelle ou un conseil avec if + prétérit, would + base verbale (second conditional).",
            "Choisir la structure adaptée selon le degré de probabilité de l'hypothèse.",
          ],
          course: [
            {
              heading: "Vérités générales : zero conditional",
              paragraphs: [
                "Pour dire ce qui se produit toujours quand une condition est remplie (lois de la nature, habitudes), on emploie le présent simple dans les deux propositions : « If you heat ice, it melts. » « If I'm late, my mother gets worried. » If a ici le sens de « chaque fois que » et peut souvent être remplacé par when.",
              ],
              box: { label: "Formule", text: "Zero conditional : If + présent simple, présent simple. If you mix blue and yellow, you get green." },
            },
            {
              heading: "Une condition réalisable : first conditional",
              paragraphs: [
                "Pour une situation future possible et réaliste, on emploie if + présent simple, puis will + base verbale dans la proposition principale : « If it rains tomorrow, we will visit the museum. » « If you don't hurry, you'll miss the train. » La règle d'or : jamais de will juste après if. On ne dit pas « If it will rain ».",
                "La principale peut aussi contenir un modal (can, may, must) ou un impératif : « If you go to London, you can visit the British Museum. » « If you get lost, call me. » Unless signifie « à moins que », c'est-à-dire « if... not » : « Unless you book now, there won't be any seats left » équivaut à « If you don't book now, there won't be any seats left ».",
                "La même règle s'applique après when, as soon as (dès que), before, after et until dans une phrase au futur : « I'll call you when I arrive in Dublin. » « As soon as we get to the hotel, we'll go to the beach. » La différence : when présente l'événement comme certain, if comme possible.",
              ],
              box: { label: "Règle", text: "First conditional : If + présent simple, will + base verbale. If you study, you will pass. Jamais de will après if, when, as soon as. Unless = if... not." },
            },
            {
              heading: "Une hypothèse irréelle : second conditional",
              paragraphs: [
                "Pour imaginer une situation irréelle ou peu probable, dans le présent ou le futur, on emploie if + prétérit, puis would + base verbale : « If I had more money, I would travel around the world » (je n'ai pas assez d'argent, c'est une hypothèse). « If I won the lottery, I'd buy a house in Australia. » Le prétérit, ici, ne renvoie pas au passé : il marque l'irréel, comme l'imparfait français après si.",
                "Avec be, on emploie were à toutes les personnes dans la langue soignée : « If I were rich... », « If she were here... ». La formule « If I were you, I would... » sert à donner un conseil : « If I were you, I'd take the train » (à votre place, je prendrais le train). Would se contracte en 'd et sa négation est wouldn't. On peut remplacer would par could (pourrait) ou might (pourrait peut-être) : « If I spoke Spanish, I could work in Mexico. »",
              ],
              box: { label: "Formule", text: "Second conditional : If + prétérit, would + base verbale. If I lived in London, I would visit the museums every week. Conseil : If I were you, I'd..." },
            },
            {
              heading: "Construire et ponctuer la phrase",
              paragraphs: [
                "La proposition en if peut se placer en premier ou en second. Quand elle est en premier, on met une virgule : « If it rains, we'll stay at home. » Quand elle est en second, pas de virgule : « We'll stay at home if it rains. » Le sens ne change pas.",
                "Pour aller plus loin, le third conditional exprime un regret sur le passé, une hypothèse qui ne peut plus se réaliser : if + past perfect, would have + participe passé. « If we had left earlier, we wouldn't have missed the plane » (si nous étions partis plus tôt, nous n'aurions pas raté l'avion). Attention : 'd peut être had (« If I'd known ») ou would (« I'd go ») ; c'est le verbe qui suit qui permet de trancher.",
              ],
            },
          ],
          keyPoints: [
            "Zero conditional : If + présent, présent (vérité générale : If you heat ice, it melts).",
            "First conditional : If + présent, will + base (réalisable : If it rains, we'll stay at home).",
            "Jamais de will après if, when, as soon as, unless.",
            "Second conditional : If + prétérit, would + base (irréel : If I had wings, I would fly).",
            "If I were you, I'd... : donner un conseil ; were à toutes les personnes.",
            "Unless = if... not ; virgule seulement quand la proposition en if vient en premier.",
          ],
          example: {
            statement: "Complétez chaque phrase avec la structure qui convient et justifiez votre choix. a) If you (freeze) water, it (turn) into ice. b) If the weather (be) nice tomorrow, we (go) to the beach. c) If I (live) in New York, I (go) to Central Park every day. d) Your ticket is very expensive. If I (be) you, I (take) the bus.",
            solution: [
              "a) Vérité générale, toujours vraie : zero conditional. « If you freeze water, it turns into ice. »",
              "b) Situation future possible : first conditional, présent après if et will dans la principale. « If the weather is nice tomorrow, we will go to the beach. »",
              "c) Je n'habite pas à New York : hypothèse irréelle, second conditional. « If I lived in New York, I would go to Central Park every day. »",
              "d) Conseil : If I were you + would. « If I were you, I would take the bus. »",
              "Réponses : freeze, turns ; is, will go ; lived, would go ; were, would take.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez les verbes entre parenthèses et indiquez le type de conditionnel (zero, first ou second). a) If it (rain) tomorrow, we (stay) at home. b) If you (heat) water to 100 °C, it (boil). c) If I (be) rich, I (buy) a boat. d) If she (not / hurry), she (miss) the plane. e) If I (have) wings, I (fly) to Australia.",
              hint: "Demandez-vous : est-ce toujours vrai (zero), possible (first) ou imaginaire (second) ?",
              solution: [
                "a) If it rains tomorrow, we will stay at home. (first : situation possible)",
                "b) If you heat water to 100 °C, it boils. (zero : vérité générale)",
                "c) If I were rich, I would buy a boat. (second : hypothèse irréelle)",
                "d) If she doesn't hurry, she will miss the plane. (first : avertissement réaliste)",
                "e) If I had wings, I would fly to Australia. (second : situation impossible)",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez chaque phrase avec la structure indiquée. a) I don't have a passport, so I can't go to the USA. (If I...) b) If you don't book now, there won't be any seats left. (Unless...) c) Mon ami hésite à partir en Écosse en hiver ; conseillez-lui d'emporter un manteau chaud. (If I were you...) d) Complétez : « If we miss the last train, ___. » e) Corrigez l'erreur : « If it will be sunny, we will go hiking. »",
              hint: "Une situation présente réelle (a) devient une hypothèse irréelle au second conditional : on inverse l'affirmation et la négation.",
              solution: [
                "a) If I had a passport, I could go to the USA. (ou : I would be able to go)",
                "b) Unless you book now, there won't be any seats left.",
                "c) If I were you, I would take a warm coat.",
                "d) Exemple : If we miss the last train, we will take a taxi. (first conditional : présent après if, will dans la principale)",
                "e) If it is sunny, we will go hiking. (pas de will après if)",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite. « If you could travel anywhere in the world, where would you go and why? » Répondez en 70 à 90 mots. Employez au moins quatre fois le second conditional, une fois le first conditional (pour un projet réel) et une fois un comparatif ou un superlatif.",
              hint: "Commencez par reprendre la question (If I could travel anywhere, I would go to...), donnez deux ou trois raisons, puis terminez par un projet réaliste au first conditional.",
              solution: [
                "Plan : la destination imaginée ; deux ou trois activités et raisons (second conditional) ; un projet réaliste (first conditional).",
                "Exemple : « If I could travel anywhere in the world, I would go to New Zealand. I would visit the mountains and the lakes, which are some of the most beautiful landscapes in the world. If I had enough time, I would also go to Australia to see kangaroos. I would take lots of photos and I would try to improve my English. It's very far, so it's not possible now. But if I save money, I will go there one day! »",
                "Vérifier : second conditional (would go, would visit, If I had... I would go, would take, would try), first conditional (if I save money, I will go), superlatif (the most beautiful), pas de would ni de will après if.",
                "Résultat : une réponse d'environ 85 mots qui distingue clairement l'irréel et le possible.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases et ces règles sont-elles correctes ?",
            statements: [
              { text: "« If it will rain, we will stay at home. » is correct.", true: false, why: "Pas de will après if : « If it rains, we will stay at home. »" },
              { text: "« If I were you, I would apologize. » is a way to give advice.", true: true, why: "If I were you, I'd... signifie « à votre place, je... »." },
              { text: "In « If I had more time, I would read more », the speaker has a lot of time.", true: false, why: "Le second conditional marque l'irréel : la personne n'a pas assez de temps." },
              { text: "« Unless you hurry » means « if you don't hurry ».", true: true, why: "Unless équivaut à if... not." },
              { text: "« If you heat ice, it melts. » is a zero conditional.", true: true, why: "C'est une vérité générale : présent simple dans les deux propositions." },
              { text: "In the second conditional, we use would after if.", true: false, why: "Après if, on emploie le prétérit (If I had...) ; would se place dans la principale." },
              { text: "« We'll stay at home, if it rains. » needs a comma.", true: false, why: "La virgule s'emploie quand la proposition en if vient en premier ; ici, elle est en second, donc sans virgule." },
            ],
          },
          quiz: [
            { q: "If you ___ hard, you will pass your exam.", options: ["will work", "work", "worked", "would work"], answer: 1, why: "First conditional : présent simple après if, will dans la principale." },
            { q: "If I ___ a car, I would drive to Scotland.", options: ["had", "have", "will have", "would have"], answer: 0, why: "Second conditional : prétérit après if (je n'ai pas de voiture)." },
            { q: "Which sentence gives advice?", options: ["If I am you, I go.", "If I was you, I will go.", "If I were you, I would go.", "If I would be you, I would go."], answer: 2, why: "La formule du conseil est If I were you, I would..." },
            { q: "« I'll call you as soon as I ___ at the airport. »", options: ["will arrive", "would arrive", "arrived", "arrive"], answer: 3, why: "Après as soon as, comme après if et when, on emploie le présent pour parler du futur." },
            { q: "« If we had left earlier, we wouldn't have missed the plane. » This sentence expresses:", options: ["a general truth", "a regret about the past", "a real plan for tomorrow"], answer: 1, why: "C'est un third conditional (if + past perfect, would have + participe passé) : un regret sur le passé." },
          ],
          trap: "Mettre will ou would juste après if (« If it will rain », « If I would have money ») : comme en français après « si », la proposition en if ne contient ni futur ni conditionnel.",
          method: "Avant d'écrire une phrase avec if, posez-vous une seule question : est-ce réel et possible, ou imaginaire ? Possible : présent + will. Imaginaire : prétérit + would. Puis relisez en vérifiant qu'aucun will ni would ne suit directement if.",
        },
      ],
    },
  ],
}
