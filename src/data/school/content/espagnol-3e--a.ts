import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'espagnol-3e',
  chapters: [
    {
      id: 'vida-jovenes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'jovenes-mundo-hispano',
          title: 'La vie des jeunes en Espagne et en Amérique latine',
          minutes: 30,
          objectives: [
            "Comprendre un document simple sur la vie quotidienne et scolaire d'un adolescent espagnol ou latino-américain.",
            "Mobiliser le lexique de l'école, des horaires et des loisirs.",
            "Décrire sa propre journée en disant l'heure et en utilisant les verbes pronominaux.",
            "Comparer la vie des jeunes en France et dans le monde hispanophone.",
          ],
          course: [
            {
              heading: "L'école en Espagne : la ESO et le bachillerato",
              paragraphs: [
                "En Espagne, après l'école primaire (« la primaria », de 6 à 12 ans), les élèves entrent à « la ESO » (Educación Secundaria Obligatoria). Elle dure quatre années, de 12 à 16 ans, et se suit dans un « instituto ». Votre classe de 3e correspond à peu près à « tercero de la ESO » (3.º ESO). Après la ESO, les élèves peuvent préparer en deux ans « el bachillerato » (l'équivalent du lycée général) ou suivre une formation professionnelle.",
                "Les notes vont de 0 à 10. On dit « aprobar » quand on réussit (à partir de 5) et « suspender » quand on échoue : « He aprobado matemáticas, pero he suspendido inglés ». Les meilleures notes sont qualifiées de « notable » (7 ou 8) et de « sobresaliente » (9 ou 10).",
                "Dans beaucoup d'« institutos », les cours ont lieu le matin, sans longue pause méridienne, et se terminent vers 14 h ou 15 h : c'est la « jornada continua ». Les élèves déjeunent ensuite chez eux. En général, il n'y a pas d'uniforme dans les établissements publics, mais il est fréquent dans les établissements privés.",
              ],
              box: { label: "Vocabulaire", text: "el instituto : le collège-lycée · el curso : l'année scolaire, la classe · la asignatura : la matière · el horario : l'emploi du temps · el recreo : la récréation · los deberes : les devoirs · la nota : la note · aprobar / suspender : réussir / échouer · el examen : le contrôle, l'examen" },
            },
            {
              heading: "L'école en Amérique latine",
              paragraphs: [
                "En Amérique latine, l'organisation varie d'un pays à l'autre, mais certains traits reviennent souvent. L'uniforme (« el uniforme ») est courant, y compris dans les écoles publiques, par exemple au Mexique, au Pérou ou au Chili. En Argentine, les élèves du primaire public portent souvent une blouse blanche, « el guardapolvo ».",
                "Dans plusieurs pays, faute de places suffisantes, les établissements accueillent deux groupes d'élèves dans la journée : un « turno mañana » (le matin) et un « turno tarde » (l'après-midi). Enfin, dans les pays de l'hémisphère sud comme l'Argentine ou le Chili, l'année scolaire commence en mars et se termine en décembre, car les grandes vacances tombent pendant l'été austral, de décembre à février.",
              ],
              box: { label: "Repère", text: "Le vocabulaire change parfois d'une rive à l'autre de l'Atlantique : le téléphone portable se dit « el móvil » en Espagne et « el celular » en Amérique latine ; l'ordinateur se dit « el ordenador » en Espagne et « la computadora » en Amérique latine." },
            },
            {
              heading: "Le quotidien et les loisirs",
              paragraphs: [
                "Les horaires des repas sont plus tardifs en Espagne qu'en France : on déjeune (« comer ») vers 14 h ou 15 h et on dîne (« cenar ») vers 21 h. Le petit-déjeuner se dit « el desayuno » (verbe « desayunar »). Attention : en Espagne, « la comida » désigne le repas de midi, et « comer » signifie à la fois manger et déjeuner.",
                "Pour parler des loisirs (« el tiempo libre »), retenez ces expressions : « quedar con los amigos » (retrouver ses amis), « hacer deporte », « jugar al fútbol », « jugar a los videojuegos », « ir al cine », « escuchar música », « chatear en las redes sociales », « salir el fin de semana ». Le verbe « jugar » se construit avec « a » : « juego al baloncesto ».",
              ],
            },
            {
              heading: "Décrire sa journée : l'heure et les verbes pronominaux",
              paragraphs: [
                "Pour demander l'heure : « ¿Qué hora es? ». On répond « Es la una » pour une heure, puis « Son las dos, son las tres... » au pluriel. On ajoute « y cuarto » (et quart), « y media » (et demie), « menos cuarto » (moins le quart) : « Son las ocho y media » (8 h 30), « Son las nueve menos cuarto » (8 h 45). Pour dire à quelle heure on fait quelque chose : « a las siete », « a la una ».",
                "Beaucoup de verbes de la routine sont pronominaux : « levantarse » (se lever), « ducharse » (se doucher), « vestirse » (s'habiller), « acostarse » (se coucher). Le pronom se place devant le verbe conjugué : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Certains verbes changent de radical : « acostarse » donne « me acuesto », « vestirse » donne « me visto ».",
              ],
              box: { label: "Règle", text: "Es la una (une heure, singulier) ; son las dos, son las tres... (pluriel). Le pronom réfléchi (me, te, se, nos, os, se) se place devant le verbe conjugué : « Me levanto a las siete y me acuesto a las diez »." },
            },
          ],
          keyPoints: [
            "La ESO : enseignement secondaire obligatoire espagnol, 4 ans, de 12 à 16 ans ; la 3e française correspond à 3.º de la ESO.",
            "Notes sur 10 : aprobar (réussir, à partir de 5) et suspender (échouer).",
            "En Amérique latine : uniforme fréquent, classes du matin ou de l'après-midi (turnos), année scolaire de mars à décembre dans l'hémisphère sud.",
            "En Espagne, on déjeune vers 14 h ou 15 h (comer) et on dîne vers 21 h (cenar).",
            "Es la una / Son las dos ; y cuarto, y media, menos cuarto.",
            "Verbes pronominaux : me levanto, me ducho, me acuesto (pronom devant le verbe).",
          ],
          example: {
            statement: "Traduisez en espagnol : « Je me lève à sept heures et quart. Les cours commencent à huit heures et demie. Ma matière préférée est l'histoire. »",
            solution: [
              "« Je me lève » : verbe pronominal « levantarse » à la 1re personne du singulier, pronom devant le verbe : « me levanto ».",
              "« à sept heures et quart » : « a las siete y cuarto » (pluriel, car il est plus d'une heure).",
              "« Les cours commencent » : « empezar » change son radical e en ie : « las clases empiezan ».",
              "« à huit heures et demie » : « a las ocho y media ».",
              "« Ma matière préférée est l'histoire » : « mi asignatura preferida es la historia » (l'article est conservé devant le nom de la matière).",
              "Réponse : « Me levanto a las siete y cuarto. Las clases empiezan a las ocho y media. Mi asignatura preferida es la historia. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez l'heure en toutes lettres en espagnol, en commençant par « Es » ou « Son » : a) 1 h 00 ; b) 10 h 15 ; c) 4 h 30 ; d) 6 h 45.",
              hint: "Une heure est au singulier (es la...) ; à partir de deux heures, on passe au pluriel (son las...). Pour 6 h 45, on dit « 7 heures moins le quart ».",
              solution: [
                "a) 1 h 00 : « Es la una ».",
                "b) 10 h 15 : « Son las diez y cuarto ».",
                "c) 4 h 30 : « Son las cuatro y media ».",
                "d) 6 h 45 : on part de l'heure suivante et on retire un quart : « Son las siete menos cuarto ».",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte puis répondez en français. « Me llamo Lucía, tengo catorce años y vivo en Sevilla. Estoy en tercero de la ESO. Me levanto a las siete y media y voy al instituto en bici. Las clases terminan a las tres. Como en casa con mi familia y por la tarde hago los deberes. Los sábados quedo con mis amigas para ir al cine. » a) Dans quelle classe est Lucía ? b) Comment va-t-elle au collège ? c) Où et quand déjeune-t-elle ? d) Que fait-elle le samedi ?",
              hint: "Repérez les mots transparents (instituto, clases, cine) et rappelez-vous que « comer » signifie aussi déjeuner.",
              solution: [
                "a) « Estoy en tercero de la ESO » : Lucía est en 3.º de la ESO, l'équivalent de la 3e en France.",
                "b) « Voy al instituto en bici » : elle va au collège à vélo.",
                "c) « Las clases terminan a las tres. Como en casa con mi familia » : elle déjeune chez elle, en famille, après la fin des cours, donc après 15 h.",
                "d) « Los sábados quedo con mis amigas para ir al cine » : le samedi, elle retrouve ses amies pour aller au cinéma.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 60 mots) : un correspondant mexicain vous demande comment se passe une journée d'école en France. Décrivez votre journée (lever, horaires, matières, déjeuner, loisirs) et comparez-la avec celle d'un élève espagnol.",
              hint: "Utilisez au moins trois verbes pronominaux, deux heures précises et un connecteur de comparaison (en cambio, pero, también).",
              solution: [
                "Plan : 1) le matin (lever, trajet) ; 2) les cours et le déjeuner ; 3) l'après-midi et les loisirs ; 4) une comparaison avec l'Espagne.",
                "Proposition : « Hola, Diego: Me levanto a las siete, me ducho y desayuno. Las clases empiezan a las ocho y terminan a las cinco. Como en el comedor del colegio a las doce. Mi asignatura preferida es la historia. Por la tarde hago los deberes y juego al fútbol. En España, en cambio, las clases terminan a las tres y los alumnos comen en casa. ¡Hasta pronto! »",
                "Vérification : verbes pronominaux (me levanto, me ducho), heures au pluriel (a las siete), « jugar al fútbol » avec « a », connecteur de comparaison (en cambio). Le texte compte environ 60 mots.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot espagnol à sa traduction.",
            pairs: [
              { left: "el horario", right: "l'emploi du temps" },
              { left: "la asignatura", right: "la matière" },
              { left: "el recreo", right: "la récréation" },
              { left: "los deberes", right: "les devoirs" },
              { left: "suspender", right: "échouer (à un examen)" },
              { left: "quedar con los amigos", right: "retrouver ses amis" },
            ],
          },
          quiz: [
            { q: "Comment dit-on « les devoirs » en espagnol ?", options: ["las notas", "los deberes", "el recreo", "las asignaturas"], answer: 1, why: "« Los deberes » désigne le travail à faire à la maison. « Las notas » sont les notes, « el recreo » la récréation." },
            { q: "En Espagne, la ESO correspond à...", options: ["l'école primaire, de 6 à 12 ans", "l'université, après 18 ans", "le lycée, de 16 à 18 ans", "le secondaire obligatoire, de 12 à 16 ans"], answer: 3, why: "La Educación Secundaria Obligatoria dure quatre ans, de 12 à 16 ans ; le lycée correspond au bachillerato." },
            { q: "« Son las ocho y media » signifie :", options: ["Il est 8 h 30.", "Il est 8 h 15.", "Il est 7 h 30.", "Il est 8 h 45."], answer: 0, why: "« Y media » ajoute une demi-heure : huit heures et demie." },
            { q: "En Argentine et au Chili, l'année scolaire commence...", options: ["en septembre", "en janvier", "en mars"], answer: 2, why: "Dans l'hémisphère sud, les grandes vacances ont lieu pendant l'été austral (décembre à février) : l'année scolaire commence en mars." },
            { q: "Quelle phrase traduit correctement « je me lève à sept heures » ?", options: ["Levanto a las siete.", "Me levanto a las siete.", "Me levanto a la siete.", "Yo levanto me a las siete."], answer: 1, why: "Le pronom réfléchi se place devant le verbe conjugué, et l'heure est au pluriel : « a las siete »." },
          ],
          trap: "Dire « Son la una » ou « Es las dos » : une heure est au singulier (es la una), toutes les autres heures au pluriel (son las dos, son las tres). Autre erreur fréquente : oublier le pronom réfléchi (« levanto a las siete » au lieu de « me levanto »).",
          method: "Apprenez le vocabulaire par petits groupes thématiques (l'école, les repas, les loisirs) et réutilisez-le aussitôt dans une phrase sur votre propre vie : « Mi asignatura preferida es... », « Me levanto a las... ». Un mot employé pour parler de soi se retient beaucoup mieux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'preterito-perfecto',
          title: 'Le passé composé : le « pretérito perfecto »',
          minutes: 30,
          objectives: [
            "Conjuguer un verbe au pretérito perfecto avec l'auxiliaire « haber » et le participe passé.",
            "Former les participes passés réguliers et mémoriser les principaux participes irréguliers.",
            "Employer le pretérito perfecto avec les marqueurs de temps qui le déclenchent.",
            "Raconter ce que l'on a fait aujourd'hui ou cette semaine.",
          ],
          course: [
            {
              heading: "La formation : haber + participe passé",
              paragraphs: [
                "Le pretérito perfecto est un temps composé, comme le passé composé français. Il se forme avec l'auxiliaire « haber » conjugué au présent, suivi du participe passé du verbe. En espagnol, on utilise toujours « haber », jamais « ser » ni « estar », même pour les verbes de mouvement : « he ido » (je suis allé), « ha llegado » (il est arrivé).",
                "Le participe passé régulier se forme ainsi : les verbes en -ar prennent -ado (hablar → hablado), les verbes en -er et en -ir prennent -ido (comer → comido, vivir → vivido). Quand le radical se termine par une voyelle, on met un accent écrit : leer → leído, traer → traído, oír → oído, creer → creído.",
              ],
              box: { label: "Formule", text: "haber au présent : he, has, ha, hemos, habéis, han + participe passé (-ado pour -ar, -ido pour -er et -ir). Exemple : he hablado, has comido, ha vivido, hemos hablado, habéis comido, han vivido." },
            },
            {
              heading: "Les participes passés irréguliers",
              paragraphs: [
                "Quelques verbes très fréquents ont un participe passé irrégulier, qu'il faut apprendre par cœur : hacer → hecho, decir → dicho, ver → visto, escribir → escrito, poner → puesto, volver → vuelto, abrir → abierto, romper → roto, morir → muerto, descubrir → descubierto, resolver → resuelto.",
                "Les verbes composés suivent le même modèle que leur verbe de base : deshacer → deshecho, devolver → devuelto, describir → descrito, componer → compuesto. Ainsi, si vous connaissez « escrito », vous savez aussi former « descrito ».",
              ],
              box: { label: "À retenir", text: "hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto, descubierto, resuelto. Astuce : récitez-les toujours dans le même ordre, comme une liste de courses." },
            },
            {
              heading: "Trois règles de construction",
              paragraphs: [
                "1) Le participe passé est invariable avec « haber » : il ne s'accorde jamais, ni en genre ni en nombre. « Las chicas han llegado », « Mi madre ha salido ». 2) L'auxiliaire et le participe sont inséparables : on ne glisse rien entre eux. On écrit « ¿Has comido? » et jamais « ¿Has tú comido? ».",
                "3) Les pronoms se placent devant l'auxiliaire : « Me he levantado tarde » (je me suis levé tard), « Lo he visto » (je l'ai vu), « No se lo he dicho » (je ne le lui ai pas dit). La négation « no » se place elle aussi devant l'ensemble : « No he terminado ».",
              ],
            },
            {
              heading: "Quand l'employer ?",
              paragraphs: [
                "En Espagne, le pretérito perfecto exprime une action passée qui se situe dans une période encore en cours au moment où l'on parle ou qui garde un lien avec le présent. Il est déclenché par des marqueurs comme : hoy (aujourd'hui), esta mañana (ce matin), esta semana (cette semaine), este año (cette année), últimamente (ces derniers temps), ya (déjà), todavía no (pas encore), nunca (jamais), alguna vez (déjà, une fois).",
                "Exemples : « Esta mañana he desayunado un zumo de naranja » ; « ¿Has estado alguna vez en México? » ; « Todavía no he hecho los deberes ». En revanche, pour une période terminée (ayer, el año pasado, en 2020), on utilise un autre temps du passé, le pretérito indefinido, étudié dans le chapitre suivant. Dans la plupart des pays d'Amérique latine, on emploie d'ailleurs souvent l'indefinido là où l'Espagne emploie le perfecto.",
              ],
              box: { label: "Repère", text: "Période non terminée ou lien avec le présent (hoy, esta semana, este año, ya, todavía no, nunca) → pretérito perfecto. Période terminée (ayer, la semana pasada, en 2020) → pretérito indefinido." },
            },
          ],
          keyPoints: [
            "Pretérito perfecto = haber au présent (he, has, ha, hemos, habéis, han) + participe passé.",
            "Participe régulier : -ado (verbes en -ar), -ido (verbes en -er, -ir).",
            "Irréguliers : hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto.",
            "Le participe ne s'accorde pas ; haber et le participe sont inséparables ; les pronoms se placent devant haber.",
            "Toujours haber, même pour les verbes de mouvement : he ido, ha llegado.",
            "Marqueurs : hoy, esta mañana, esta semana, este año, ya, todavía no, nunca, alguna vez.",
          ],
          example: {
            statement: "Mettez au pretérito perfecto : « Hoy (yo, levantarse) tarde y (nosotros, hacer) los deberes. »",
            solution: [
              "Le marqueur « hoy » indique une période non terminée : on emploie le pretérito perfecto.",
              "« levantarse », 1re personne du singulier : auxiliaire « he », participe régulier « levantado », pronom « me » placé devant l'auxiliaire : « me he levantado ».",
              "« hacer », 1re personne du pluriel : auxiliaire « hemos », participe irrégulier « hecho » : « hemos hecho ».",
              "Réponse : « Hoy me he levantado tarde y hemos hecho los deberes. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au pretérito perfecto, à la personne indiquée : a) hablar (tú) ; b) comer (ellos) ; c) vivir (nosotros) ; d) leer (yo) ; e) salir (vosotros).",
              hint: "Choisissez la bonne forme de « haber », puis ajoutez -ado ou -ido. Pensez à l'accent de « leído ».",
              solution: [
                "a) hablar, tú : « has hablado ».",
                "b) comer, ellos : « han comido ».",
                "c) vivir, nosotros : « hemos vivido ».",
                "d) leer, yo : le radical se termine par une voyelle, donc accent : « he leído ».",
                "e) salir, vosotros : « habéis salido ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le verbe au pretérito perfecto (attention aux participes irréguliers) : a) Esta semana mi hermano ... (romper) su móvil. b) ¿Vosotros ... (ver) la nueva película? c) Todavía no (yo) ... (escribir) el correo. d) Mis padres ... (volver) de Madrid esta mañana. e) ¿Qué te ... (decir) el profesor hoy?",
              hint: "Les cinq verbes ont un participe irrégulier : roto, visto, escrito, vuelto, dicho.",
              solution: [
                "a) « ha roto » : Esta semana mi hermano ha roto su móvil.",
                "b) « habéis visto » : ¿Vosotros habéis visto la nueva película?",
                "c) « he escrito » : Todavía no he escrito el correo.",
                "d) « han vuelto » : Mis padres han vuelto de Madrid esta mañana.",
                "e) « ha dicho » : ¿Qué te ha dicho el profesor hoy? Le pronom « te » reste devant l'auxiliaire.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, 50 à 60 mots) : c'est vendredi soir. Écrivez un message à un ami espagnol pour lui raconter votre semaine au collège. Employez au moins cinq verbes au pretérito perfecto, dont trois participes irréguliers, et trois marqueurs de temps différents.",
              hint: "Partez des marqueurs (esta semana, hoy, ya, todavía no) et pensez à des actions concrètes : un contrôle, un film, un message, un livre.",
              solution: [
                "Liste des verbes choisis : he tenido, he hecho (irrégulier), he visto (irrégulier), he escrito (irrégulier), he aprobado, no he terminado.",
                "Proposition : « ¡Hola, Pablo! Esta semana ha sido muy intensa. He tenido un examen de matemáticas y lo he aprobado. Hoy he hecho una presentación en clase de historia. Esta tarde he visto una película con mi hermana y te he escrito este mensaje. Pero todavía no he terminado mi libro. ¿Y tú, qué has hecho? Un abrazo. »",
                "Vérification : participes irréguliers (hecho, visto, escrito), pronoms devant l'auxiliaire (lo he aprobado, te he escrito), marqueurs (esta semana, hoy, esta tarde, todavía no), participes invariables.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le pretérito perfecto.",
            statements: [
              { text: "« Je suis allé au cinéma » se traduit par « He ido al cine ».", true: true, why: "En espagnol, l'auxiliaire est toujours « haber », même pour les verbes de mouvement." },
              { text: "On écrit « Las chicas han llegadas ».", true: false, why: "Le participe passé est invariable avec « haber » : « las chicas han llegado »." },
              { text: "Le participe passé de « ver » est « visto ».", true: true, why: "« Ver » fait partie des participes irréguliers : visto." },
              { text: "On peut dire « ¿Has tú comido? ».", true: false, why: "L'auxiliaire et le participe sont inséparables : « ¿Has comido tú? » ou « ¿Tú has comido? »." },
              { text: "Le marqueur « ayer » appelle le pretérito perfecto.", true: false, why: "« Ayer » renvoie à une période terminée : on emploie le pretérito indefinido (ayer comí...)." },
              { text: "« Je l'ai vu » se traduit par « Lo he visto ».", true: true, why: "Le pronom complément se place devant l'auxiliaire." },
            ],
          },
          quiz: [
            { q: "Conjuguez « comer » à la 1re personne du pluriel du pretérito perfecto.", options: ["habemos comido", "hemos comida", "hemos comido", "han comido"], answer: 2, why: "L'auxiliaire est « hemos » et le participe régulier des verbes en -er est en -ido, invariable." },
            { q: "Quel est le participe passé de « hacer » ?", options: ["hecho", "hacido", "hizo", "echado"], answer: 0, why: "« Hacer » a un participe irrégulier : hecho. « Hizo » est une forme du pretérito indefinido." },
            { q: "Quel marqueur de temps appelle le pretérito perfecto ?", options: ["ayer", "en 2010", "el año pasado", "esta mañana"], answer: 3, why: "« Esta mañana » désigne une période de la journée en cours, encore liée au présent." },
            { q: "Comment traduire « je l'ai vu » ?", options: ["He lo visto.", "Lo he visto.", "He visto lo.", "Lo visto he."], answer: 1, why: "Le pronom complément se place devant l'auxiliaire « haber »." },
            { q: "Complétez : « Las chicas han ... (llegar) ».", options: ["llegadas", "llegados", "llegado", "llegando"], answer: 2, why: "Avec « haber », le participe passé reste invariable." },
          ],
          trap: "Accorder le participe passé (« las chicas han llegadas ») ou employer « ser » comme auxiliaire sur le modèle du français (« soy ido ») : en espagnol, l'auxiliaire est toujours « haber » et le participe reste invariable.",
          method: "Pour choisir entre pretérito perfecto et pretérito indefinido, cherchez d'abord le marqueur de temps dans la phrase : s'il désigne une période qui n'est pas finie (hoy, esta semana, este año), choisissez le perfecto. Soulignez ce marqueur avant de conjuguer.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'obligacion-consejo',
          title: 'Exprimer l\'obligation et donner un conseil',
          minutes: 25,
          objectives: [
            "Exprimer une obligation personnelle avec « tener que » et une obligation impersonnelle avec « hay que ».",
            "Donner un conseil avec « deberías » et « te aconsejo ».",
            "Exprimer une interdiction et l'absence d'obligation.",
            "Rédiger le règlement d'un établissement ou des conseils à un camarade.",
          ],
          course: [
            {
              heading: "L'obligation personnelle : tener que + infinitif",
              paragraphs: [
                "Pour dire qu'une personne précise doit faire quelque chose, on emploie « tener que » suivi de l'infinitif. Le verbe « tener » est irrégulier au présent : tengo, tienes, tiene, tenemos, tenéis, tienen. Exemples : « Tengo que estudiar para el examen » (je dois réviser pour le contrôle) ; « Mis hermanos tienen que ayudar en casa ».",
                "On peut aussi utiliser « deber » + infinitif (debo, debes, debe, debemos, debéis, deben), qui exprime plutôt un devoir moral : « Debemos respetar a los demás » (nous devons respecter les autres). Attention : « deber » se construit directement avec l'infinitif, sans « que » ni « de ».",
              ],
              box: { label: "Règle", text: "tener que + infinitif : obligation d'une personne précise (Tengo que salir). deber + infinitif, sans préposition : devoir moral (Debes decir la verdad)." },
            },
            {
              heading: "L'obligation impersonnelle : hay que + infinitif",
              paragraphs: [
                "Pour une obligation générale, qui concerne tout le monde, on emploie « hay que » + infinitif : c'est l'équivalent de « il faut ». « Hay que » est invariable et ne se conjugue pas avec un sujet. Exemples : « En el instituto hay que llegar a la hora » (au collège, il faut arriver à l'heure) ; « Hay que proteger el medio ambiente ».",
                "D'autres tournures impersonnelles ont le même sens : « es necesario » + infinitif (il est nécessaire de), « es obligatorio » + infinitif (il est obligatoire de), « hace falta » + infinitif (il faut). Exemple : « Es obligatorio llevar el uniforme ».",
              ],
            },
            {
              heading: "L'interdiction et l'absence d'obligation",
              paragraphs: [
                "Pour interdire, on emploie « está prohibido » + infinitif (il est interdit de), « no se puede » + infinitif (on ne peut pas), ou « no hay que » + infinitif (il ne faut pas). Exemples : « Está prohibido usar el móvil en clase » ; « No se puede comer en la biblioteca » ; « No hay que gritar en los pasillos ».",
                "Attention au faux ami : « no tener que » ne signifie pas « ne pas devoir » au sens d'une interdiction, mais « ne pas être obligé de ». « No tienes que venir » veut dire « tu n'es pas obligé de venir ». Pour une interdiction adressée à quelqu'un, on dira plutôt « no puedes venir ».",
              ],
              box: { label: "À retenir", text: "Interdiction : está prohibido / no se puede / no hay que + infinitif. Absence d'obligation : no tener que + infinitif (No tienes que venir = tu n'es pas obligé de venir)." },
            },
            {
              heading: "Donner un conseil",
              paragraphs: [
                "Pour conseiller poliment, on emploie le conditionnel du verbe « deber » : debería, deberías, debería, deberíamos, deberíais, deberían, suivi de l'infinitif. « Deberías dormir más » (tu devrais dormir davantage) ; « Deberíais leer este libro ». On peut aussi dire « te aconsejo » + infinitif (je te conseille de) : « Te aconsejo hacer deporte ».",
                "D'autres formules sont très utiles à l'oral : « ¿Por qué no...? » (pourquoi ne pas...?) : « ¿Por qué no hablas con tu profesor? » ; « lo mejor es » + infinitif (le mieux, c'est de) : « Lo mejor es organizarse con una agenda ». Ces tournures sont plus douces qu'une obligation directe avec « tienes que ».",
              ],
              box: { label: "Formule", text: "Conseil : deberías + infinitif (tu devrais) ; te aconsejo + infinitif (je te conseille de) ; ¿Por qué no + présent? ; lo mejor es + infinitif." },
            },
          ],
          keyPoints: [
            "tener que + infinitif : obligation personnelle (tengo, tienes, tiene, tenemos, tenéis, tienen).",
            "hay que + infinitif : obligation impersonnelle, invariable (il faut).",
            "deber + infinitif, sans « que » ni « de » : devoir moral.",
            "Interdiction : está prohibido, no se puede, no hay que + infinitif.",
            "No tener que = ne pas être obligé de.",
            "Conseil : deberías + infinitif, te aconsejo + infinitif, ¿por qué no...?",
          ],
          example: {
            statement: "Votre ami espagnol Álvaro a de mauvaises notes et se couche tous les soirs à minuit. Écrivez-lui deux conseils et rappelez-lui une obligation.",
            solution: [
              "Premier conseil, avec le conditionnel de « deber » : « Deberías acostarte más temprano » (le pronom « te » s'attache à l'infinitif).",
              "Second conseil, avec « te aconsejo » : « Te aconsejo hacer los deberes cada día ».",
              "Obligation personnelle avec « tener que » : « Tienes que estudiar para aprobar los exámenes ».",
              "Réponse : « Álvaro, deberías acostarte más temprano y te aconsejo hacer los deberes cada día. Tienes que estudiar para aprobar los exámenes. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez « tener que » au présent à la personne indiquée, puis traduisez : a) (yo) ... trabajar ; b) (nosotros) ... salir ; c) (ellas) ... estudiar ; d) (tú) ... llamar a tu abuela.",
              hint: "Tener : tengo, tienes, tiene, tenemos, tenéis, tienen. N'oubliez pas « que ».",
              solution: [
                "a) « Tengo que trabajar » : je dois travailler.",
                "b) « Tenemos que salir » : nous devons sortir.",
                "c) « Tienen que estudiar » : elles doivent étudier.",
                "d) « Tienes que llamar a tu abuela » : tu dois appeler ta grand-mère (le « a » devant un complément désignant une personne).",
              ],
            },
            {
              level: 2,
              statement: "Choisissez la bonne tournure (hay que, tienes que, deberías, está prohibido, no tienes que) : a) En la piscina ... llevar gorro. b) Estás cansado: ... descansar un poco. c) ... fumar en el instituto. d) Mañana es domingo: ... levantarte temprano. e) Pedro, ... terminar tu exposición antes del viernes, es obligatorio.",
              hint: "Demandez-vous si la phrase vise tout le monde (impersonnel), une personne (obligation ou conseil), ou si elle interdit.",
              solution: [
                "a) Règle générale : « En la piscina hay que llevar gorro ».",
                "b) Conseil : « Estás cansado: deberías descansar un poco ».",
                "c) Interdiction : « Está prohibido fumar en el instituto ».",
                "d) Absence d'obligation : « Mañana es domingo: no tienes que levantarte temprano » (tu n'es pas obligé de te lever tôt).",
                "e) Obligation personnelle : « Pedro, tienes que terminar tu exposición antes del viernes ».",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 60 mots) : un élève espagnol arrive dans votre collège pour un échange. Rédigez pour lui le règlement du collège et ajoutez deux conseils personnels pour qu'il s'intègre bien. Utilisez au moins quatre tournures différentes.",
              hint: "Combinez hay que, está prohibido, no se puede, tienes que, deberías, te aconsejo.",
              solution: [
                "Organisation : d'abord les règles générales (impersonnelles), puis les obligations qui le concernent, enfin deux conseils.",
                "Proposition : « Bienvenido a nuestro colegio. Hay que llegar a las ocho en punto. Está prohibido usar el móvil en clase y no se puede comer en las aulas. Tienes que llevar siempre tu carné de alumno. Te aconsejo apuntarte al club de fútbol y deberías hablar francés con tus compañeros para progresar. ¡Ya verás, te va a gustar! »",
                "Vérification : six tournures différentes (hay que, está prohibido, no se puede, tienes que, te aconsejo, deberías), toutes suivies de l'infinitif.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque tournure espagnole à son sens.",
            pairs: [
              { left: "Hay que estudiar.", right: "Il faut étudier." },
              { left: "Tengo que estudiar.", right: "Je dois étudier." },
              { left: "Deberías estudiar.", right: "Tu devrais étudier." },
              { left: "No tienes que estudiar.", right: "Tu n'es pas obligé d'étudier." },
              { left: "Está prohibido gritar.", right: "Il est interdit de crier." },
              { left: "Te aconsejo leer.", right: "Je te conseille de lire." },
            ],
          },
          quiz: [
            { q: "Comment traduire « il faut étudier » (règle générale) ?", options: ["Tengo que estudiar.", "Debo estudiar.", "Tienes estudiar.", "Hay que estudiar."], answer: 3, why: "« Hay que » + infinitif exprime une obligation impersonnelle, valable pour tout le monde." },
            { q: "Quelle phrase donne un conseil poliment à un ami ?", options: ["Hay dormir más.", "Deberías dormir más.", "Debes que dormir más.", "Tienes dormir más."], answer: 1, why: "Le conditionnel « deberías » + infinitif adoucit l'obligation et en fait un conseil. « Deber » ne prend pas « que »." },
            { q: "« No tienes que venir » signifie :", options: ["Tu n'es pas obligé de venir.", "Tu ne dois surtout pas venir.", "Tu ne peux pas venir.", "Tu n'as pas envie de venir."], answer: 0, why: "« No tener que » exprime l'absence d'obligation, pas une interdiction." },
            { q: "Conjuguez « tener » à la 2e personne du singulier du présent.", options: ["tenes", "tienas", "tienes", "teneis"], answer: 2, why: "« Tener » diphtongue (e devient ie) aux personnes accentuées sur le radical : tienes." },
            { q: "Quelle phrase exprime une interdiction ?", options: ["Hay que llevar el uniforme del instituto.", "No se puede usar el móvil.", "Te aconsejo leer más en casa.", "Tienes que hacer los deberes."], answer: 1, why: "« No se puede » + infinitif signifie « on ne peut pas » : c'est une interdiction." },
          ],
          trap: "Traduire « tu ne dois pas venir » par « no tienes que venir » : cette phrase signifie « tu n'es pas obligé de venir ». Autre erreur fréquente : ajouter « que » ou « de » après « deber » (« debes que estudiar »), alors que « deber » se construit directement avec l'infinitif.",
          method: "Classez les tournures dans un tableau à trois colonnes (obligation, interdiction, conseil) et apprenez pour chacune un exemple lié à votre vie au collège. Avant de répondre, demandez-vous toujours : est-ce que je parle à tout le monde (hay que) ou à une personne précise (tienes que, deberías) ?",
        },
      ],
    },
    {
      id: 'emigrar',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'migraciones',
          title: 'Les migrations dans le monde hispanique',
          minutes: 30,
          objectives: [
            "Situer les grandes vagues de migration qui ont marqué l'Espagne et l'Amérique latine.",
            "Mobiliser le lexique du voyage, de la frontière et de l'exil.",
            "Comprendre un témoignage de migrant et en dégager les causes et les sentiments.",
            "Exprimer une opinion simple sur l'accueil des migrants.",
          ],
          course: [
            {
              heading: "L'Espagne, terre d'émigration puis d'immigration",
              paragraphs: [
                "Entre la fin du XIXe siècle et 1930, plusieurs millions d'Espagnols, souvent originaires de Galice, des Asturies ou des Canaries, partent vers l'Amérique pour fuir la pauvreté : Argentine, Cuba, Uruguay, Mexique. En Argentine, on appelle encore familièrement « gallegos » les Espagnols, parce que beaucoup venaient de Galice.",
                "À la fin de la guerre civile espagnole (1936-1939), au début de l'année 1939, près d'un demi-million de républicains fuient vers la France : c'est « la Retirada ». Beaucoup sont d'abord enfermés dans des camps sur les plages du Roussillon, comme à Argelès-sur-Mer. Le Mexique du président Lázaro Cárdenas accueille aussi des milliers d'exilés. Ensuite, sous la dictature de Franco (1939-1975), surtout dans les années 1960, de nombreux Espagnols émigrent pour travailler en France, en Allemagne ou en Suisse.",
                "À partir de la fin des années 1990, la situation s'inverse : l'Espagne devient un pays d'immigration et accueille des travailleurs venus du Maroc, de Roumanie, d'Équateur ou de Colombie. Après la crise économique de 2008, de nombreux jeunes Espagnols diplômés partent à leur tour chercher du travail à l'étranger.",
              ],
              box: { label: "Repère", text: "Fin XIXe-1930 : émigration massive vers l'Amérique. 1939 : la Retirada, exil des républicains en France. Années 1960 : émigration de travail vers l'Europe du Nord. Années 2000 : l'Espagne devient terre d'immigration. Après 2008 : départ de jeunes diplômés." },
            },
            {
              heading: "De l'Amérique latine vers les États-Unis et l'Europe",
              paragraphs: [
                "La frontière entre le Mexique et les États-Unis mesure plus de 3 000 km. Chaque année, des migrants mexicains et centraméricains (du Guatemala, du Honduras, du Salvador) tentent de la franchir pour trouver du travail et une vie plus sûre : c'est la poursuite du « sueño americano ». Une partie de la frontière est fermée par un mur ou des barrières. Aux États-Unis, la population d'origine hispanique dépasse aujourd'hui 60 millions de personnes, soit près d'un habitant sur cinq selon le recensement de 2020.",
                "Depuis le milieu des années 2010, la crise politique et économique au Venezuela a poussé plus de sept millions de personnes à quitter le pays, selon les Nations unies, surtout vers la Colombie, le Pérou, le Brésil, le Chili ou l'Espagne. Par ailleurs, des migrants africains tentent de rejoindre l'Espagne en traversant le détroit de Gibraltar (14 km dans sa partie la plus étroite) ou l'océan Atlantique jusqu'aux îles Canaries, à bord de petites embarcations appelées « pateras » ou « cayucos ».",
              ],
            },
            {
              heading: "Le lexique de la migration",
              paragraphs: [
                "Distinguez bien les deux points de vue : « emigrar » (émigrer, quitter son pays) et « el/la emigrante » ; « inmigrar » (immigrer, s'installer dans un autre pays) et « el/la inmigrante ». On parle aussi de « el exilio » (l'exil) et de « el exiliado » (l'exilé) quand le départ est forcé par une guerre ou une dictature.",
                "Pour dire les causes du départ : « huir de la guerra, de la violencia, de la pobreza » (fuir), « buscar trabajo », « buscar una vida mejor ». Pour le voyage : « cruzar la frontera » (traverser la frontière), « el viaje », « la maleta » (la valise), « los papeles » (les papiers), « estar sin papeles ». Pour les sentiments : « echar de menos » (regretter, ressentir le manque : « echo de menos a mi familia »), « la nostalgia », « el desarraigo » (le déracinement), « la esperanza » (l'espoir), « el miedo » (la peur).",
              ],
              box: { label: "Vocabulaire", text: "emigrar / inmigrar · la frontera · cruzar · el exilio · huir (de) · buscar trabajo · una vida mejor · los papeles · la acogida (l'accueil) · acoger (accueillir) · la integración · echar de menos (regretter, s'ennuyer de) · la nostalgia · el desarraigo" },
            },
            {
              heading: "Parler d'un témoignage et donner son avis",
              paragraphs: [
                "Face à un témoignage de migrant, posez-vous quatre questions : ¿Quién? (qui part ?), ¿De dónde a dónde? (d'où vers où ?), ¿Por qué? (pour quelles raisons ?), ¿Qué siente? (quels sentiments exprime-t-il ?). Pour présenter les causes, utilisez « porque » (parce que) ou « a causa de » (à cause de) : « Salió de su país a causa de la violencia ».",
                "Pour donner votre avis, employez « creo que » (je crois que), « pienso que » (je pense que), « para mí » (pour moi) suivis de l'indicatif : « Creo que es muy difícil dejar a su familia » ; « Para mí, hay que ayudar a los inmigrantes a aprender la lengua ». Nuancez avec « pero » (mais) ou « sin embargo » (cependant).",
              ],
            },
          ],
          keyPoints: [
            "Fin XIXe-1930 : des millions d'Espagnols émigrent vers l'Amérique, surtout depuis la Galice et les Canaries.",
            "1939 : la Retirada, près d'un demi-million de républicains espagnols fuient en France ; le Mexique accueille aussi des exilés.",
            "Années 1960 : émigration de travail vers la France, l'Allemagne, la Suisse ; depuis la fin des années 1990, l'Espagne est un pays d'immigration.",
            "Frontière Mexique-États-Unis : plus de 3 000 km ; plus de 60 millions d'Hispaniques aux États-Unis (2020).",
            "emigrar (partir) / inmigrar (arriver) ; echar de menos : ressentir le manque.",
            "Analyser un témoignage : ¿Quién? ¿De dónde a dónde? ¿Por qué? ¿Qué siente?",
          ],
          example: {
            statement: "Lisez ce témoignage (texte d'entraînement) et résumez-le en français en répondant aux quatre questions de méthode. « Me llamo Andrés, soy de Caracas. Hace dos años, salí de Venezuela con mi madre porque no había trabajo ni medicinas. Cruzamos Colombia en autobús y llegamos a Lima. Ahora estudio en un colegio peruano, pero echo de menos a mis abuelos. »",
            solution: [
              "¿Quién? Andrés, un jeune Vénézuélien de Caracas, parti avec sa mère.",
              "¿De dónde a dónde? Du Venezuela vers le Pérou (Lima), en traversant la Colombie en autocar, il y a deux ans.",
              "¿Por qué? « Porque no había trabajo ni medicinas » : à cause du manque de travail et de médicaments, c'est-à-dire de la crise économique.",
              "¿Qué siente? « Echo de menos a mis abuelos » : il ressent le manque de ses grands-parents restés au pays, donc de la nostalgie, même s'il est scolarisé.",
              "Résumé : Andrés a quitté le Venezuela il y a deux ans avec sa mère à cause de la crise ; installé à Lima, il va à l'école mais ses grands-parents lui manquent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol : a) la frontière ; b) chercher du travail ; c) l'exil ; d) l'accueil ; e) traverser ; f) une vie meilleure.",
              hint: "Tous ces mots figurent dans l'encadré de vocabulaire. Attention au genre : « frontera » est féminin.",
              solution: [
                "a) la frontera ; b) buscar trabajo ; c) el exilio ; d) la acogida ; e) cruzar ; f) una vida mejor.",
                "Remarque : « mejor » est invariable en genre (una vida mejor, un futuro mejor).",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le mot qui convient (emigrar, inmigrantes, echa de menos, frontera, huir) : a) Muchos jóvenes españoles decidieron ... a Alemania después de 2008. b) Carmen vive en Francia, pero ... su pueblo de Andalucía. c) Los ... necesitan aprender la lengua del país de acogida. d) En 1939, miles de republicanos tuvieron que ... de España. e) La ... entre México y Estados Unidos es muy larga.",
              hint: "Lisez chaque phrase en entier : la personne part-elle, arrive-t-elle, ou exprime-t-elle un sentiment ?",
              solution: [
                "a) « emigrar » : les jeunes quittent l'Espagne, on adopte donc le point de vue du départ.",
                "b) « echa de menos » : Carmen ressent le manque de son village.",
                "c) « inmigrantes » : il s'agit de personnes arrivées dans le pays d'accueil.",
                "d) « huir » : les républicains ont dû fuir l'Espagne.",
                "e) « frontera » : la frontière entre le Mexique et les États-Unis mesure plus de 3 000 km.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 70 mots) : imaginez que vous êtes un jeune Espagnol qui émigre en France en 1965 pour travailler. Écrivez une courte lettre à votre famille : dites pourquoi vous êtes parti, ce que vous faites et ce que vous ressentez. Terminez par votre opinion sur votre décision.",
              hint: "Utilisez le présent pour votre situation actuelle, « porque » pour les causes, « echo de menos » pour les sentiments et « creo que » pour l'opinion.",
              solution: [
                "Plan : formule d'appel ; les raisons du départ ; la vie en France ; les sentiments ; l'opinion ; formule finale.",
                "Proposition : « Querida familia: Estoy en Lyon desde hace un mes. Me fui de Galicia porque no había trabajo en el pueblo. Ahora trabajo en una fábrica de coches y vivo con otros españoles. No hablo bien francés y echo mucho de menos a mamá y la comida de casa. Sin embargo, creo que tomé una buena decisión: aquí gano dinero para ayudaros. Un abrazo muy fuerte, Manuel. »",
                "Vérification : formule d'appel suivie de deux points (Querida familia:), cause avec « porque », sentiment avec « echo de menos », opinion avec « creo que » et nuance avec « sin embargo ».",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique ces grandes étapes des migrations espagnoles.",
            items: [
              "Fin du XIXe siècle à 1930 : des millions d'Espagnols partent vers l'Amérique (Argentine, Cuba...).",
              "1939 : la Retirada, des centaines de milliers de républicains fuient en France.",
              "Années 1960 : des Espagnols émigrent pour travailler en France, en Allemagne et en Suisse.",
              "1975 : la mort de Franco met fin à la dictature.",
              "Années 2000 : l'Espagne accueille de nombreux immigrés venus du Maroc, de Roumanie ou d'Équateur.",
              "Après la crise de 2008 : de jeunes diplômés espagnols partent travailler à l'étranger.",
            ],
          },
          quiz: [
            { q: "Que signifie « echar de menos » ?", options: ["jeter quelque chose à la poubelle", "ressentir le manque", "faire quelque chose de moins", "chercher du travail"], answer: 1, why: "« Echo de menos a mi familia » signifie « ma famille me manque »." },
            { q: "Une « patera » est...", options: ["un document délivré à la frontière", "un camp d'accueil pour les réfugiés", "une petite barque", "un permis de travail temporaire"], answer: 2, why: "Les « pateras » sont de petites embarcations utilisées pour traverser le détroit de Gibraltar ou rejoindre les Canaries." },
            { q: "En 1939, à la fin de la guerre civile, de nombreux républicains espagnols se réfugient...", options: ["en France", "aux États-Unis", "en Argentine", "au Maroc"], answer: 0, why: "C'est la Retirada : près d'un demi-million de personnes franchissent les Pyrénées au début de 1939." },
            { q: "« Inmigrar » signifie...", options: ["quitter son pays pour vivre ailleurs", "voyager quelques jours en touriste", "s'installer dans un pays étranger"], answer: 2, why: "« Inmigrar » adopte le point de vue du pays d'arrivée ; « emigrar » celui du pays de départ." },
            { q: "Dans les années 1960, beaucoup d'Espagnols émigrent...", options: ["vers l'Amérique latine, pour fuir une guerre mondiale", "vers l'Afrique du Nord, pour y faire du commerce", "vers l'Asie, pour y faire leurs études", "vers la France et l'Allemagne, pour travailler"], answer: 3, why: "Sous la dictature de Franco, l'émigration économique se dirige vers les pays industriels d'Europe du Nord." },
          ],
          trap: "Confondre « emigrar » et « inmigrar » : on émigre d'un pays (on le quitte) et on immigre dans un pays (on y arrive). Une même personne est « emigrante » pour son pays d'origine et « inmigrante » pour son pays d'accueil.",
          method: "Pour tout document sur la migration, remplissez une petite grille à quatre cases (¿Quién? ¿De dónde a dónde? ¿Por qué? ¿Qué siente?) avant de rédiger votre réponse : vous ne pourrez rien oublier d'essentiel.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'preterito-indefinido',
          title: 'Raconter au passé : le « pretérito indefinido »',
          minutes: 35,
          objectives: [
            "Conjuguer les verbes réguliers au pretérito indefinido.",
            "Mémoriser les principaux verbes irréguliers (ser, ir, tener, estar, hacer, decir, poder, poner, venir, dar, ver).",
            "Employer l'indefinido pour raconter des actions achevées dans un passé terminé.",
            "Raconter le parcours d'une personne au passé.",
          ],
          course: [
            {
              heading: "Les verbes réguliers",
              paragraphs: [
                "Le pretérito indefinido est un temps simple. Il exprime une action achevée, située dans un passé terminé. On le traduit en français par le passé composé ou par le passé simple : « Ayer comí paella » (hier, j'ai mangé de la paella). Les verbes en -er et en -ir ont les mêmes terminaisons.",
                "Verbes en -ar (hablar) : hablé, hablaste, habló, hablamos, hablasteis, hablaron. Verbes en -er et -ir (comer, vivir) : comí, comiste, comió, comimos, comisteis, comieron ; viví, viviste, vivió, vivimos, vivisteis, vivieron. L'accent écrit sur la 1re et la 3e personne du singulier est indispensable : « hablo » (je parle, présent) n'a pas le même sens que « habló » (il a parlé).",
              ],
              box: { label: "Formule", text: "-ar : -é, -aste, -ó, -amos, -asteis, -aron. -er / -ir : -í, -iste, -ió, -imos, -isteis, -ieron. Exemple : llegué, llegaste, llegó... ; salí, saliste, salió..." },
            },
            {
              heading: "Les verbes irréguliers les plus fréquents",
              paragraphs: [
                "« Ser » et « ir » ont exactement la même forme : fui, fuiste, fue, fuimos, fuisteis, fueron. C'est le contexte qui permet de comprendre : « Fui a Madrid » (je suis allé à Madrid), « Fue un viaje largo » (ce fut un long voyage). « Dar » et « ver » prennent les terminaisons des verbes en -er, sans accent : di, diste, dio, dimos, disteis, dieron ; vi, viste, vio, vimos, visteis, vieron.",
                "De nombreux verbes ont un radical irrégulier et des terminaisons particulières, sans accent écrit : -e, -iste, -o, -imos, -isteis, -ieron. Tener → tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron. Sur le même modèle : estar → estuve, poder → pude, poner → puse, saber → supe, querer → quise, venir → vine, hacer → hice (mais « hizo » à la 3e personne, avec un z). Quand le radical se termine par j, la 3e personne du pluriel perd le i : decir → dije, dijo, dijeron ; traer → traje, trajo, trajeron.",
              ],
              box: { label: "À retenir", text: "ser / ir : fui, fuiste, fue, fuimos, fuisteis, fueron. tener : tuve. estar : estuve. hacer : hice, hizo. decir : dije, dijeron. poder : pude. poner : puse. venir : vine. querer : quise. saber : supe. Pas d'accent sur ces formes : tuvo, hizo, dijo." },
            },
            {
              heading: "Les modifications orthographiques et les changements de voyelle",
              paragraphs: [
                "À la 1re personne du singulier, certains verbes changent d'orthographe pour garder la même prononciation : -car → -qué (buscar → busqué, sacar → saqué), -gar → -gué (llegar → llegué, jugar → jugué), -zar → -cé (cruzar → crucé, empezar → empecé). Les verbes dont le radical se termine par une voyelle transforment le i en y à la 3e personne : leer → leyó, leyeron ; oír → oyó, oyeron ; caer → cayó.",
                "Les verbes en -ir qui changent de voyelle au présent changent aussi aux 3es personnes de l'indefinido : e → i (pedir → pidió, pidieron ; sentir → sintió, sintieron) et o → u (dormir → durmió, durmieron ; morir → murió, murieron). En revanche, les verbes en -ar et en -er ne changent pas : pensar → pensó, volver → volvió.",
              ],
            },
            {
              heading: "Quand employer l'indefinido ?",
              paragraphs: [
                "L'indefinido sert à raconter des actions achevées, situées dans une période terminée, souvent les unes après les autres. Il est appelé par des marqueurs comme : ayer (hier), anteayer (avant-hier), anoche (hier soir), la semana pasada, el mes pasado, el año pasado, hace dos años (il y a deux ans), en 1939, el 12 de octubre de 1492, un día, de repente (soudain).",
                "Exemple de récit : « Mi abuelo salió de Galicia en 1955. Cruzó el océano en barco, llegó a Buenos Aires y trabajó durante diez años en un restaurante. » Chaque verbe est une étape achevée du récit. Comparez : « Esta semana he viajado » (période en cours : pretérito perfecto) et « La semana pasada viajé » (période terminée : indefinido).",
              ],
              box: { label: "Repère", text: "Période terminée (ayer, anoche, el año pasado, hace + durée, en + année) → pretérito indefinido. Période en cours (hoy, esta semana, este año) → pretérito perfecto, surtout en Espagne." },
            },
          ],
          keyPoints: [
            "Réguliers en -ar : -é, -aste, -ó, -amos, -asteis, -aron ; en -er/-ir : -í, -iste, -ió, -imos, -isteis, -ieron.",
            "Accent indispensable : hablo (je parle) n'est pas habló (il a parlé).",
            "ser et ir : fui, fuiste, fue, fuimos, fuisteis, fueron.",
            "Radicaux irréguliers sans accent : tuve, estuve, pude, puse, hice (hizo), dije (dijeron), vine, quise, supe.",
            "llegué, busqué, crucé ; leyó, oyó ; pidió, durmió (3es personnes).",
            "Marqueurs : ayer, anoche, el año pasado, hace dos años, en 1939.",
          ],
          example: {
            statement: "Mettez ce récit au pretérito indefinido : « En 1960, mi abuela (salir) de Andalucía. (Ir) a Francia en tren y (encontrar) trabajo en París. Allí (conocer) a mi abuelo. »",
            solution: [
              "Le marqueur « en 1960 » situe le récit dans un passé terminé : on emploie l'indefinido, à la 3e personne du singulier.",
              "« salir » (verbe en -ir régulier) : « salió ».",
              "« ir » (irrégulier) : « fue ».",
              "« encontrar » (en -ar, sans changement de voyelle à l'indefinido) : « encontró ».",
              "« conocer » (en -er régulier à ce temps) : « conoció ».",
              "Réponse : « En 1960, mi abuela salió de Andalucía. Fue a Francia en tren y encontró trabajo en París. Allí conoció a mi abuelo. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au pretérito indefinido : a) trabajar (yo) ; b) comer (ella) ; c) vivir (nosotros) ; d) viajar (ellos) ; e) aprender (tú) ; f) llegar (yo).",
              hint: "Repérez le groupe du verbe (-ar ou -er/-ir) et n'oubliez pas les accents. Pour « llegar », pensez à la modification orthographique.",
              solution: [
                "a) trabajé ; b) comió ; c) vivimos ; d) viajaron ; e) aprendiste.",
                "f) « llegar » à la 1re personne : on ajoute un u pour garder le son [g] devant e : « llegué ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec les verbes irréguliers au pretérito indefinido : a) Ayer (nosotros, ir) ... al museo. b) El año pasado mi hermano (tener) ... un accidente. c) ¿Qué (hacer) ... tú el sábado? d) Mis padres me (decir) ... la verdad. e) Anoche (yo, estar) ... en casa de Lucía. f) Mi tío (pedir) ... un café.",
              hint: "ir : fuimos ; tener : tuv- ; hacer : hic- ; decir : dij- (sans i à la 3e personne du pluriel) ; estar : estuv- ; pedir : e devient i à la 3e personne.",
              solution: [
                "a) « fuimos » : Ayer fuimos al museo.",
                "b) « tuvo » : El año pasado mi hermano tuvo un accidente (pas d'accent).",
                "c) « hiciste » : ¿Qué hiciste tú el sábado?",
                "d) « dijeron » : Mis padres me dijeron la verdad (et non « dijieron »).",
                "e) « estuve » : Anoche estuve en casa de Lucía.",
                "f) « pidió » : Mi tío pidió un café (changement e → i à la 3e personne).",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 70 mots) : racontez au pretérito indefinido le parcours d'une migrante imaginaire, Rosa, qui a quitté le Mexique pour les États-Unis il y a dix ans. Employez au moins six verbes différents, dont trois irréguliers, et trois marqueurs de temps.",
              hint: "Suivez l'ordre du voyage : le départ, la traversée, l'arrivée, le travail, une rencontre. Marqueurs utiles : hace diez años, un día, después, al final.",
              solution: [
                "Verbes choisis : decidió, salió, fue (irrégulier), tuvo (irrégulier), cruzó, llegó, encontró, hizo (irrégulier), pudo (irrégulier).",
                "Proposition : « Hace diez años, Rosa decidió dejar su pueblo de Oaxaca porque no había trabajo. Un día, salió de su casa con una pequeña maleta. Fue en autobús hasta la frontera y tuvo mucho miedo cuando la cruzó. Después llegó a Los Ángeles, encontró trabajo en un restaurante e hizo muchos amigos. Al final, pudo traer a sus hijos. »",
                "Vérification : verbes irréguliers sans accent (fue, tuvo, hizo, pudo), marqueurs (hace diez años, un día, después, al final). « No había trabajo » est à l'imparfait, car c'est une description de la situation (voir la leçon suivante). Remarque : « y » devient « e » devant un mot commençant par le son [i] (e hizo).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque infinitif à sa 3e personne du singulier au pretérito indefinido.",
            pairs: [
              { left: "tener", right: "tuvo" },
              { left: "hacer", right: "hizo" },
              { left: "ir", right: "fue" },
              { left: "decir", right: "dijo" },
              { left: "pedir", right: "pidió" },
              { left: "leer", right: "leyó" },
            ],
          },
          quiz: [
            { q: "Quelle est la 1re personne du singulier de « hablar » au pretérito indefinido ?", options: ["hablo", "hablé", "hablaba", "he hablado"], answer: 1, why: "Les verbes en -ar prennent -é à la 1re personne. « Hablo » est le présent et « hablaba » l'imparfait." },
            { q: "Complétez : « Ayer (yo) ... a mi abuela » (visitar).", options: ["visité", "visito", "visitó", "he visitado"], answer: 0, why: "« Ayer » appelle l'indefinido ; à la 1re personne du singulier : visité. « Visitó » correspond à la 3e personne." },
            { q: "Quelle est la 3e personne du singulier de « hacer » au pretérito indefinido ?", options: ["hació", "hizó", "hice", "hizo"], answer: 3, why: "« Hacer » a un radical irrégulier et s'écrit avec un z à la 3e personne, sans accent : hizo." },
            { q: "« Fueron » peut être une forme de...", options: ["ser et ir", "ir uniquement", "estar uniquement", "ser uniquement"], answer: 0, why: "À l'indefinido, « ser » et « ir » ont les mêmes formes ; seul le contexte permet de les distinguer." },
            { q: "Quel marqueur appelle le pretérito indefinido ?", options: ["esta misma mañana", "este año", "el lunes pasado", "todavía no"], answer: 2, why: "« El lunes pasado » désigne un moment terminé ; les autres marqueurs appellent plutôt le pretérito perfecto." },
          ],
          trap: "Oublier l'accent écrit : « hablo » (je parle, présent) et « habló » (il a parlé) sont deux formes différentes. À l'inverse, on met à tort un accent sur les formes à radical irrégulier : on écrit « tuvo », « hizo », « dijo », « fue », sans accent.",
          method: "Apprenez les irréguliers par familles qui partagent la même voyelle : u (tuve, estuve, pude, puse, supe), i (hice, vine, quise, dije). Récitez à voix haute la conjugaison complète d'un verbe par famille, puis vérifiez à l'écrit les accents.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'imperfecto',
          title: 'Décrire au passé : l\'imparfait',
          minutes: 30,
          objectives: [
            "Conjuguer les verbes réguliers et les trois verbes irréguliers (ser, ir, ver) à l'imparfait.",
            "Employer l'imparfait pour décrire une situation passée, une habitude ou une action en cours.",
            "Distinguer l'imparfait (le décor) du pretérito indefinido (l'événement) dans un récit.",
            "Décrire la vie d'autrefois d'une personne.",
          ],
          course: [
            {
              heading: "La formation de l'imparfait",
              paragraphs: [
                "L'imparfait (« pretérito imperfecto ») est l'un des temps les plus réguliers de l'espagnol. Verbes en -ar (hablar) : hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban. Seule la 1re personne du pluriel porte un accent écrit : hablábamos.",
                "Verbes en -er et en -ir (comer, vivir) : comía, comías, comía, comíamos, comíais, comían ; vivía, vivías, vivía, vivíamos, vivíais, vivían. Ici, toutes les formes portent un accent sur le í. Remarquez que la 1re et la 3e personne du singulier sont identiques (yo hablaba, él hablaba) : on ajoute le sujet quand il y a un risque de confusion.",
              ],
              box: { label: "Formule", text: "-ar : -aba, -abas, -aba, -ábamos, -abais, -aban. -er / -ir : -ía, -ías, -ía, -íamos, -íais, -ían. Même les verbes irréguliers au présent sont réguliers ici : tener → tenía, hacer → hacía, poder → podía." },
            },
            {
              heading: "Seulement trois verbes irréguliers",
              paragraphs: [
                "Trois verbes seulement sont irréguliers à l'imparfait. Ser : era, eras, era, éramos, erais, eran. Ir : iba, ibas, iba, íbamos, ibais, iban. Ver : veía, veías, veía, veíamos, veíais, veían (le e du radical est conservé).",
                "Tous les autres verbes, même ceux qui sont très irréguliers à d'autres temps, sont réguliers à l'imparfait : « tener » donne « tenía », « decir » donne « decía », « estar » donne « estaba ». C'est une excellente nouvelle pour vos récits.",
              ],
              box: { label: "À retenir", text: "ser : era, eras, era, éramos, erais, eran. ir : iba, ibas, iba, íbamos, ibais, iban. ver : veía, veías, veía, veíamos, veíais, veían." },
            },
            {
              heading: "Les trois emplois de l'imparfait",
              paragraphs: [
                "1) La description d'une situation passée : le décor, le temps qu'il faisait, l'heure, l'âge, l'aspect physique, les sentiments. « Eran las diez de la noche. Hacía frío. Mi abuelo tenía veinte años, era alto y llevaba un sombrero. Estaba triste. »",
                "2) L'habitude, ce qui se répétait dans le passé, souvent avec des marqueurs comme antes (avant), de niño (enfant), cuando era pequeño (quand j'étais petit), siempre, todos los días, a menudo, normalmente : « Cuando vivía en Ecuador, mi madre iba al mercado todos los días ».",
                "3) L'action en cours, souvent interrompue par un événement : « Mientras cenábamos, sonó el teléfono » (pendant que nous dînions, le téléphone a sonné). Pour insister sur le déroulement, on peut aussi employer « estar » à l'imparfait + gérondif : « Estaba leyendo cuando llegó mi hermano ».",
              ],
            },
            {
              heading: "Imparfait ou pretérito indefinido ?",
              paragraphs: [
                "Dans un récit, les deux temps travaillent ensemble, comme au théâtre : l'imparfait plante le décor et décrit ce qui durait, l'indefinido fait avancer l'action avec des événements ponctuels et achevés. « Hacía sol y los niños jugaban en la plaza (décor). De repente, empezó a llover (événement). »",
                "La correspondance avec le français est en général simple : l'imparfait espagnol se traduit par l'imparfait français, l'indefinido par le passé composé ou le passé simple. « Cuando llegó a Francia, mi abuelo no hablaba francés » : quand mon grand-père est arrivé en France (événement), il ne parlait pas français (situation).",
              ],
              box: { label: "Règle", text: "Imparfait : description, habitude, action en cours (le décor). Pretérito indefinido : action ponctuelle, achevée, qui fait avancer le récit (l'événement). Mientras + imparfait ; de repente, un día + indefinido." },
            },
          ],
          keyPoints: [
            "-ar : -aba, -abas, -aba, -ábamos, -abais, -aban.",
            "-er/-ir : -ía, -ías, -ía, -íamos, -íais, -ían (accent sur toutes les formes).",
            "Trois irréguliers seulement : ser (era), ir (iba), ver (veía).",
            "Emplois : description, habitude (antes, de niño, siempre), action en cours (mientras).",
            "Imparfait = le décor ; indefinido = l'événement qui fait avancer le récit.",
          ],
          example: {
            statement: "Choisissez entre l'imparfait et l'indefinido : « Cuando (yo, ser) pequeño, (vivir) en Bogotá. Un día, mi padre (encontrar) trabajo en Madrid y (nosotros, mudarse) a España. »",
            solution: [
              "« Cuando (ser) pequeño » : description d'une période de la vie, donc imparfait : « era ».",
              "« (vivir) en Bogotá » : situation qui durait à cette époque, donc imparfait : « vivía ».",
              "« Un día, mi padre (encontrar) » : le marqueur « un día » introduit un événement ponctuel : indefinido, « encontró ».",
              "« (nosotros, mudarse) a España » : événement achevé qui fait avancer le récit : indefinido, « nos mudamos ».",
              "Réponse : « Cuando era pequeño, vivía en Bogotá. Un día, mi padre encontró trabajo en Madrid y nos mudamos a España. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez à l'imparfait : a) jugar (yo) ; b) tener (nosotros) ; c) ir (ellos) ; d) ser (tú) ; e) ver (ella) ; f) estudiar (nosotros).",
              hint: "Seuls ser, ir et ver sont irréguliers. Attention à l'accent de la 1re personne du pluriel des verbes en -ar.",
              solution: [
                "a) jugaba ; b) teníamos ; c) iban ; d) eras ; e) veía.",
                "f) « estudiábamos » : la 1re personne du pluriel des verbes en -ar prend un accent sur le a.",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en espagnol : a) Quand j'étais petit, j'allais à l'école à pied. b) Il faisait froid et il pleuvait. c) Ma grand-mère était très gentille et elle parlait trois langues. d) Pendant que nous regardions la télévision, mon père est arrivé.",
              hint: "Repérez dans chaque phrase ce qui est description ou habitude (imparfait) et ce qui est un événement ponctuel (indefinido). « Hacer frío » sert à parler du froid.",
              solution: [
                "a) Habitude passée : « Cuando era pequeño, iba al colegio a pie (andando) ».",
                "b) Description du temps : « Hacía frío y llovía ».",
                "c) Description de la personne : « Mi abuela era muy simpática (amable) y hablaba tres idiomas ».",
                "d) Action en cours (imparfait) interrompue par un événement (indefinido) : « Mientras veíamos la televisión, llegó mi padre ».",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 70 mots) : vous avez interrogé votre grand-père, arrivé d'Espagne en France dans les années 1960. Décrivez sa vie avant le départ (son village, sa famille, ses habitudes) à l'imparfait, puis racontez son départ en deux ou trois phrases à l'indefinido.",
              hint: "Première partie : era, vivía, tenía, iba, trabajaba. Deuxième partie, introduite par « un día » : decidió, salió, llegó.",
              solution: [
                "Organisation : décor et habitudes à l'imparfait, puis événements du départ à l'indefinido.",
                "Proposition : « Mi abuelo vivía en un pequeño pueblo de Extremadura. Su familia era pobre y tenía cinco hijos. Todos los días, mi abuelo se levantaba a las seis y trabajaba en el campo con su padre. Por la noche, iba a la plaza con sus amigos. Un día de 1962, decidió buscar trabajo en Francia. Salió en tren y llegó a Burdeos tres días después. »",
                "Vérification : imparfaits de description et d'habitude (vivía, era, tenía, se levantaba, trabajaba, iba), indefinidos des événements introduits par « un día » (decidió, salió, llegó).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? L'imparfait et son emploi.",
            statements: [
              { text: "« Tener » est irrégulier à l'imparfait.", true: false, why: "« Tener » est régulier à l'imparfait : tenía, tenías, tenía..." },
              { text: "À l'imparfait, « ir » se conjugue iba, ibas, iba, íbamos, ibais, iban.", true: true, why: "« Ir » fait partie des trois seuls verbes irréguliers à ce temps, avec « ser » et « ver »." },
              { text: "On écrit « hablabamos » sans accent.", true: false, why: "La 1re personne du pluriel des verbes en -ar porte un accent : hablábamos." },
              { text: "Dans « Mientras dormía, sonó el teléfono », « dormía » décrit une action en cours.", true: true, why: "L'imparfait exprime l'action qui se déroulait, interrompue par l'événement « sonó »." },
              { text: "Pour dire « un jour, il est parti », on emploie l'imparfait : « un día salía ».", true: false, why: "« Un día » introduit un événement ponctuel : on emploie l'indefinido, « un día salió »." },
              { text: "L'imparfait sert à décrire l'âge, l'heure et le temps qu'il faisait dans le passé.", true: true, why: "« Tenía diez años », « eran las ocho », « hacía calor » : ce sont des descriptions." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme de « cantar » à l'imparfait, 1re personne du pluriel ?", options: ["cantabamos", "cantamos", "cantábamos", "cantíamos"], answer: 2, why: "Les verbes en -ar prennent -ábamos, avec un accent sur le a." },
            { q: "Quelle est la forme de « ser » à l'imparfait, 1re personne du singulier ?", options: ["fui", "seía", "sería", "era"], answer: 3, why: "« Ser » est irrégulier : era, eras, era, éramos, erais, eran. « Fui » est l'indefinido, « sería » le conditionnel." },
            { q: "Dans « De niño, jugaba en la calle », l'imparfait exprime...", options: ["une habitude dans le passé", "une action ponctuelle achevée", "une action future", "un ordre"], answer: 0, why: "« De niño » indique une période de la vie pendant laquelle l'action se répétait." },
            { q: "Complétez : « Mientras (yo) ... (cenar), sonó el teléfono ».", options: ["cené", "cenaba", "ceno"], answer: 1, why: "« Mientras » introduit une action en cours, à l'imparfait, interrompue par l'événement « sonó »." },
            { q: "Quels sont les trois seuls verbes irréguliers à l'imparfait ?", options: ["tener, hacer, decir", "estar, poder, querer", "ser, ir, ver", "ir, venir, salir"], answer: 2, why: "Tous les verbes sont réguliers à l'imparfait sauf ser (era), ir (iba) et ver (veía)." },
          ],
          trap: "Employer l'imparfait pour un événement ponctuel introduit par « un día » ou « de repente » (« un día llegaba ») : l'événement qui fait avancer le récit se met à l'indefinido (« un día llegó »). L'imparfait est réservé au décor, aux habitudes et aux actions en cours.",
          method: "Avant de conjuguer un verbe dans un récit, posez-vous une question : est-ce que cela décrit la situation (le décor) ou est-ce que cela fait avancer l'histoire (l'événement) ? Dans le premier cas, imparfait ; dans le second, indefinido. Soulignez de deux couleurs différentes les deux types de verbes.",
        },
      ],
    },
    {
      id: 'fiestas-tradiciones',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fiestas-hispanas',
          title: 'Fêtes et traditions hispaniques',
          minutes: 30,
          objectives: [
            "Identifier les grandes fêtes de l'Espagne et de l'Amérique latine et les situer dans le temps et dans l'espace.",
            "Mobiliser le lexique de la fête et des traditions.",
            "Présenter une fête en employant « se celebra », « tiene lugar » et les dates.",
            "Comparer une fête hispanique avec une fête de son propre pays.",
          ],
          course: [
            {
              heading: "Les grandes fêtes de l'Espagne",
              paragraphs: [
                "« Las Fallas » ont lieu à Valencia (Valence) au mois de mars, jusqu'au 19 mars, jour de la Saint-Joseph (San José). Les habitants construisent d'immenses monuments de bois et de carton peint, « las fallas », composés de personnages appelés « ninots ». Dans la nuit du 19 mars, presque tous sont brûlés : c'est « la cremà ». Cette fête est inscrite au patrimoine culturel immatériel de l'UNESCO.",
                "« Los Sanfermines » se déroulent à Pamplona (Pampelune), en Navarre, du 6 au 14 juillet. La fête s'ouvre le 6 juillet à midi par « el chupinazo », une fusée lancée depuis le balcon de l'hôtel de ville. Chaque matin, des coureurs habillés de blanc avec un foulard rouge courent devant les taureaux dans les rues : ce sont « los encierros ». L'écrivain américain Ernest Hemingway a rendu cette fête célèbre dans le monde entier.",
                "Pendant « la Semana Santa », la semaine qui précède Pâques, des processions religieuses parcourent les rues, notamment à Sevilla (Séville) et à Málaga. Les confréries (« las cofradías ») portent de lourds chars décorés, « los pasos », et certains participants, « los nazarenos », portent une longue tunique et un capuchon pointu. Enfin, à la fin du mois d'août, la petite ville de Buñol organise « la Tomatina », une gigantesque bataille de tomates.",
              ],
              box: { label: "Vocabulaire", text: "la fiesta : la fête · celebrar : célébrer, fêter · el desfile : le défilé · la procesión : la procession · disfrazarse : se déguiser · el disfraz : le déguisement · los fuegos artificiales : le feu d'artifice · el traje típico : le costume traditionnel · la tradición : la tradition" },
            },
            {
              heading: "Noël et le Nouvel An en Espagne",
              paragraphs: [
                "En Espagne, les enfants reçoivent traditionnellement leurs cadeaux le 6 janvier, jour des Rois mages (« el Día de Reyes »). La veille au soir, le 5 janvier, les Rois Melchor, Gaspar et Baltasar défilent dans les villes sur des chars : c'est « la cabalgata de Reyes ». Le 6 janvier, on mange « el roscón de Reyes », une brioche en couronne qui cache une petite figurine.",
                "Le soir du 31 décembre, « la Nochevieja », les Espagnols mangent douze grains de raisin (« las doce uvas »), un à chaque coup des douze coups de minuit. Beaucoup suivent à la télévision les cloches de l'horloge de la Puerta del Sol, à Madrid. Selon la tradition, celui qui réussit à manger ses douze raisins à temps aura de la chance toute l'année.",
              ],
            },
            {
              heading: "Le Día de Muertos et l'Inti Raymi",
              paragraphs: [
                "Au Mexique, « el Día de Muertos » se célèbre le 1er et le 2 novembre. Selon la tradition, les âmes des défunts reviennent rendre visite à leur famille. On prépare chez soi un autel, « la ofrenda », avec les photos des disparus, leurs plats préférés, des bougies, du « pan de muerto » (une brioche spéciale), des crânes en sucre (« calaveras de azúcar ») et des fleurs orange, « las flores de cempasúchil ». Ce n'est pas une fête triste : on se souvient des morts avec joie et humour. Elle est inscrite au patrimoine culturel immatériel de l'UNESCO.",
                "L'un des symboles de cette fête est « la Catrina », un squelette de femme élégante coiffée d'un grand chapeau, inventé par le graveur mexicain José Guadalupe Posada au début du XXe siècle. Au Pérou, à Cusco, on célèbre le 24 juin « el Inti Raymi », la fête du Soleil héritée des Incas, au moment du solstice d'hiver de l'hémisphère sud.",
              ],
              box: { label: "Repère", text: "Le Día de Muertos (Mexique) n'est pas Halloween : il ne s'agit pas de faire peur, mais d'accueillir et d'honorer les défunts de la famille autour d'une « ofrenda »." },
            },
            {
              heading: "Présenter une fête en espagnol",
              paragraphs: [
                "Pour présenter une fête, on emploie souvent le « se » impersonnel : « La Tomatina se celebra en Buñol » (la Tomatina est célébrée à Buñol), « En Nochevieja se comen doce uvas ». Le verbe s'accorde avec le nom qui suit : « se come el roscón » (singulier), « se comen las uvas » (pluriel). On peut aussi dire « tiene lugar » (a lieu) : « Las Fallas tienen lugar en marzo ».",
                "Pour donner la date, on dit « el + nombre + de + mois », sans majuscule au mois : « el 6 de enero », « el 2 de noviembre ». Le mot « gente » (les gens) est singulier en espagnol : « la gente baila en la calle », « la gente se disfraza ».",
              ],
              box: { label: "Règle", text: "Se celebra + nom singulier ; se celebran + nom pluriel. Les mois s'écrivent sans majuscule : el 19 de marzo. « La gente » est suivi d'un verbe au singulier : la gente canta." },
            },
          ],
          keyPoints: [
            "Las Fallas : Valencia, en mars, jusqu'au 19 mars ; les monuments sont brûlés (la cremà).",
            "Los Sanfermines : Pamplona, du 6 au 14 juillet ; encierros (course devant les taureaux).",
            "Semana Santa : processions avant Pâques (Sevilla, Málaga) ; Tomatina : Buñol, fin août.",
            "Día de Reyes : 6 janvier, cadeaux et roscón ; Nochevieja : douze raisins aux douze coups de minuit.",
            "Día de Muertos : Mexique, 1er et 2 novembre, ofrenda, calaveras, cempasúchil ; Inti Raymi : Cusco, 24 juin.",
            "Se celebra (singulier) / se celebran (pluriel) ; el 6 de enero (mois sans majuscule) ; la gente + verbe au singulier.",
          ],
          example: {
            statement: "Présentez en trois phrases en espagnol la fête des Rois mages en Espagne (date, ce que font les enfants, ce que l'on mange).",
            solution: [
              "La date : « El Día de Reyes se celebra el 6 de enero » (« se celebra » au singulier car le sujet « el Día de Reyes » est singulier ; mois sans majuscule).",
              "La veille : « La noche del 5 de enero, los Reyes Magos desfilan en la cabalgata ».",
              "Les enfants : « Los niños reciben regalos » (« recibir », 3e personne du pluriel).",
              "Le repas : « Se come el roscón de Reyes » (singulier, car « el roscón » est singulier).",
              "Réponse : « El Día de Reyes se celebra el 6 de enero. Los niños reciben regalos de los Reyes Magos. Ese día se come el roscón de Reyes. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec le mot qui convient : uvas, Valencia, noviembre, 6, Pamplona. a) Las Fallas se celebran en ... b) El Día de Muertos se celebra el 1 y el 2 de ... c) Los niños españoles reciben regalos el ... de enero. d) En Nochevieja, se comen doce ... e) Los encierros tienen lugar en ...",
              hint: "Reprenez les repères du cours : une ville pour Las Fallas, une ville pour les encierros, un mois pour le Mexique.",
              solution: [
                "a) Las Fallas se celebran en Valencia.",
                "b) El Día de Muertos se celebra el 1 y el 2 de noviembre.",
                "c) Los niños españoles reciben regalos el 6 de enero, jour des Rois mages.",
                "d) En Nochevieja, se comen doce uvas.",
                "e) Los encierros tienen lugar en Pamplona, pendant les Sanfermines.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte puis répondez en français. « Me llamo Valeria y vivo en Oaxaca, en México. El 1 de noviembre, mi familia prepara una ofrenda en el salón. Ponemos la foto de mi abuelo, flores de cempasúchil, velas y pan de muerto. A mi abuelo le gustaba mucho el chocolate, por eso también ponemos una taza de chocolate. Por la noche, vamos al cementerio y cantamos. No es un día triste: recordamos a nuestros muertos con alegría. » a) Que prépare la famille de Valeria ? b) Citez trois objets placés sur l'autel. c) Pourquoi y met-on du chocolat ? d) Quel est l'état d'esprit de la famille ?",
              hint: "« Ponemos » vient de « poner » (mettre). « Le gustaba » signifie « il aimait ». « Alegría » signifie « joie ».",
              solution: [
                "a) « Mi familia prepara una ofrenda en el salón » : la famille prépare un autel (une ofrenda) dans le salon.",
                "b) Sur l'autel : la photo du grand-père, des fleurs de cempasúchil, des bougies (velas) et du pain des morts (trois de ces éléments suffisent).",
                "c) « A mi abuelo le gustaba mucho el chocolate, por eso... » : on met du chocolat parce que le grand-père l'aimait beaucoup ; on offre aux défunts ce qu'ils aimaient.",
                "d) « No es un día triste: recordamos a nuestros muertos con alegría » : la famille n'est pas triste, elle se souvient de ses morts avec joie.",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 70 mots) : votre correspondant espagnol vous demande de lui présenter une fête française que vous aimez (le 14 juillet, Noël, la fête de la musique...). Indiquez la date, ce que fait la gente, ce que l'on mange ou ce que l'on voit, puis comparez avec une fête espagnole.",
              hint: "Employez au moins deux fois « se » + verbe (se celebra, se come, se ven), la date avec « el ... de ... » et un connecteur de comparaison (como, en cambio, también).",
              solution: [
                "Plan : 1) nom et date de la fête ; 2) ce que font les gens ; 3) ce que l'on voit ou mange ; 4) comparaison avec une fête espagnole ; 5) votre avis.",
                "Proposition : « Hola, Pablo: Mi fiesta preferida es el 14 de julio, la fiesta nacional de Francia. Se celebra en todo el país. Por la mañana, hay un gran desfile militar en París. Por la noche, la gente baila en la calle y se ven fuegos artificiales. Es como la Nochevieja en España, pero no se comen uvas. En cambio, mucha gente hace un pícnic con sus amigos. ¡Me encanta esta fiesta! Un abrazo. »",
                "Vérification : « se celebra » (singulier), « se ven fuegos artificiales » (pluriel), « la gente baila » (verbe au singulier), date « el 14 de julio » sans majuscule, connecteurs « como » et « en cambio ». Environ 70 mots.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque fête à son lieu et à sa date.",
            pairs: [
              { left: "Las Fallas", right: "Valencia, en mars" },
              { left: "Los Sanfermines", right: "Pamplona, du 6 au 14 juillet" },
              { left: "La Tomatina", right: "Buñol, fin août" },
              { left: "El Día de Muertos", right: "Mexique, 1er et 2 novembre" },
              { left: "El Inti Raymi", right: "Cusco, 24 juin" },
              { left: "El Día de Reyes", right: "Espagne, 6 janvier" },
            ],
          },
          quiz: [
            { q: "Que mange-t-on en Espagne aux douze coups de minuit, le 31 décembre ?", options: ["douze grains de raisin", "un roscón de Reyes", "du pan de muerto", "des tomates"], answer: 0, why: "En Nochevieja, la tradition est de manger « las doce uvas », une à chaque coup de minuit." },
            { q: "Comment s'appelle l'autel préparé pour le Día de Muertos ?", options: ["el paso", "la ofrenda", "la falla", "el desfile"], answer: 1, why: "« La ofrenda » réunit les photos des défunts, des fleurs, des bougies et des plats. « El paso » est le char de la Semana Santa." },
            { q: "Choisissez la phrase correcte.", options: ["La gente bailan en la calle.", "Las doce uvas se come en Nochevieja.", "Las Fallas se celebran en marzo.", "El Día de Reyes se celebra el 6 de Enero."], answer: 2, why: "« Las Fallas » est pluriel, donc « se celebran ». « La gente » demande un verbe au singulier, « las uvas » un verbe au pluriel, et les mois n'ont pas de majuscule." },
            { q: "Que se passe-t-il le 19 mars à Valencia ?", options: ["la course devant les taureaux", "la bataille de tomates", "la cabalgata de Reyes", "les fallas sont brûlées"], answer: 3, why: "Dans la nuit du 19 mars, jour de San José, les fallas sont brûlées : c'est « la cremà »." },
            { q: "Où les encierros ont-ils lieu ?", options: ["à Pamplona", "à Sevilla", "à Buñol"], answer: 0, why: "Les encierros font partie des Sanfermines, à Pamplona (Navarre), du 7 au 14 juillet au matin." },
          ],
          trap: "Écrire « la gente bailan » ou « las uvas se come » : « la gente » (les gens) est un nom singulier en espagnol et demande un verbe au singulier, tandis que le verbe précédé de « se » s'accorde avec le nom qui le suit (se comen las uvas). Autre erreur : mettre une majuscule aux mois (« el 6 de Enero »).",
          method: "Pour retenir les fêtes, construisez une frise de l'année (de janvier à décembre) et placez-y chaque fête avec son lieu et un mot-clé : enero, Reyes, roscón ; marzo, Fallas, cremà ; julio, Sanfermines, encierros... Récitez-la à voix haute en espagnol : « En marzo, se celebran las Fallas en Valencia ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'civilizaciones-precolombinas',
          title: 'Les civilisations précolombiennes',
          minutes: 30,
          objectives: [
            "Situer dans l'espace et dans le temps les civilisations maya, aztèque et inca.",
            "Mobiliser le lexique de l'histoire, des peuples et de la conquête.",
            "Raconter un fait historique au passé et lire une date en espagnol.",
            "Identifier l'héritage précolombien dans la langue et la culture actuelles.",
          ],
          course: [
            {
              heading: "Les Mayas",
              paragraphs: [
                "On appelle « civilisations précolombiennes » les civilisations qui existaient en Amérique avant l'arrivée de Christophe Colomb (« Cristóbal Colón ») en 1492. Les Mayas (« los mayas ») vivaient dans le sud-est du Mexique actuel (péninsule du Yucatán, Chiapas), au Guatemala, au Belize, au Honduras et au Salvador. Leur période la plus brillante, dite classique, s'étend environ de 250 à 900 après J.-C.",
                "Les Mayas n'ont jamais formé un empire unifié, mais un ensemble de cités-États rivales, comme Tikal (Guatemala), Palenque (Mexique) ou Copán (Honduras). Ils ont construit des pyramides et des temples, inventé une écriture faite de glyphes, utilisé le zéro et élaboré des calendriers très précis grâce à l'observation des astres. Aujourd'hui, plusieurs millions de personnes parlent encore des langues mayas, notamment au Guatemala et au Mexique.",
              ],
            },
            {
              heading: "Les Aztèques",
              paragraphs: [
                "Les Aztèques, qui se nommaient eux-mêmes « los mexicas », ont fondé vers 1325 leur capitale, « Tenochtitlan », sur une île du lac Texcoco, dans la vallée de Mexico. Selon la légende, leur dieu leur avait annoncé qu'ils devaient s'installer là où ils verraient un aigle posé sur un cactus (« un nopal »), en train de dévorer un serpent. Cette scène figure aujourd'hui au centre du drapeau mexicain.",
                "Les Aztèques parlaient le « náhuatl ». Ils cultivaient le maïs sur des jardins flottants, « las chinampas », et dominaient au XVe siècle un vaste empire qui prélevait des tributs sur les peuples voisins. En 1519, le conquistador espagnol Hernán Cortés arrive au Mexique, où règne l'empereur Moctezuma. Allié à des peuples ennemis des Aztèques, comme les Tlaxcaltèques, il s'empare de Tenochtitlan en 1521. La ville de Mexico est construite sur ses ruines.",
              ],
            },
            {
              heading: "Les Incas",
              paragraphs: [
                "Les Incas (« los incas ») ont dominé au XVe et au début du XVIe siècle un immense empire dans la cordillère des Andes, le « Tahuantinsuyo », qui s'étendait du sud de la Colombie actuelle jusqu'au centre du Chili. Sa capitale était Cusco, au Pérou. Les Incas parlaient le « quechua », encore parlé par des millions de personnes, et vénéraient le Soleil, « Inti ».",
                "Les Incas ont construit un vaste réseau de routes, cultivé les pentes des montagnes grâce à des terrasses (« los andenes ») et compté à l'aide des « quipus », des cordelettes à nœuds. La cité de Machu Picchu a été bâtie vers le milieu du XVe siècle. En 1532, le conquistador Francisco Pizarro capture l'empereur Atahualpa à Cajamarca ; Atahualpa est exécuté en 1533 et l'empire passe sous la domination espagnole.",
              ],
              box: { label: "Repère", text: "Mayas : période classique vers 250-900 (Mexique, Amérique centrale). Aztèques : Tenochtitlan fondée vers 1325, conquise par Cortés en 1521. Incas : capitale Cusco, conquête par Pizarro à partir de 1532. Arrivée de Colomb : 12 octobre 1492." },
            },
            {
              heading: "Raconter l'histoire en espagnol et l'héritage précolombien",
              paragraphs: [
                "Pour raconter l'histoire, on emploie l'indefinido pour les événements datés (« Cortés llegó a México en 1519 ») et l'imparfait pour décrire les modes de vie (« Los incas vivían en los Andes y hablaban quechua »). Les années se lisent comme des nombres : 1492 se dit « mil cuatrocientos noventa y dos », 1521 « mil quinientos veintiuno ». Les siècles s'écrivent en chiffres romains et se lisent comme des nombres cardinaux : « el siglo XV » se dit « el siglo quince ».",
                "De nombreux mots espagnols, et français, viennent des langues amérindiennes. Du náhuatl : « chocolate », « tomate », « aguacate » (avocat), « chicle ». Du quechua : « papa » (la pomme de terre, en Amérique latine), « cóndor », « llama », « puma ». Le maïs, la pomme de terre, la tomate et le cacao ont été découverts par les Européens en Amérique. Le 12 octobre est en Espagne la « Fiesta Nacional » ; en Amérique latine, cette date porte des noms différents selon les pays, et certains la consacrent aux peuples autochtones et à leur résistance.",
              ],
              box: { label: "À retenir", text: "Événement daté : indefinido (Colón llegó en 1492). Description, habitude : imparfait (los mayas construían pirámides). Les centaines irrégulières : quinientos (500), setecientos (700), novecientos (900)." },
            },
          ],
          keyPoints: [
            "Précolombien : avant l'arrivée de Colomb en Amérique, le 12 octobre 1492.",
            "Mayas : cités-États (Tikal, Palenque, Copán), glyphes, zéro, calendriers ; période classique vers 250-900.",
            "Aztèques (mexicas) : Tenochtitlan fondée vers 1325, náhuatl, chinampas ; conquête par Hernán Cortés (1519-1521).",
            "Incas : capitale Cusco, quechua, quipus, Machu Picchu ; Pizarro capture Atahualpa en 1532.",
            "Indefinido pour l'événement daté, imparfait pour la description ; 1492 = mil cuatrocientos noventa y dos.",
            "Mots hérités : chocolate, tomate, aguacate (náhuatl) ; papa, cóndor, llama (quechua).",
          ],
          example: {
            statement: "Traduisez en espagnol : « Les Aztèques vivaient à Tenochtitlan. En 1519, Hernán Cortés arriva au Mexique. » Puis écrivez l'année 1519 en toutes lettres.",
            solution: [
              "« Les Aztèques vivaient » : c'est une description du mode de vie, donc l'imparfait : « Los aztecas vivían ».",
              "« à Tenochtitlan » : « en Tenochtitlan » (en espagnol, « en » pour le lieu où l'on est).",
              "« En 1519, Hernán Cortés arriva » : événement daté, donc l'indefinido de « llegar » : « llegó ».",
              "« au Mexique » : avec un verbe de mouvement, on emploie « a » : « llegó a México ».",
              "1519 : mil (1000) + quinientos (500) + diecinueve (19) = « mil quinientos diecinueve ».",
              "Réponse : « Los aztecas vivían en Tenochtitlan. En 1519, Hernán Cortés llegó a México. » ; 1519 = mil quinientos diecinueve.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque élément, indiquez s'il se rapporte aux Mayas, aux Aztèques ou aux Incas : a) Cusco ; b) Tenochtitlan ; c) Tikal ; d) le quechua ; e) le náhuatl ; f) les quipus.",
              hint: "Rappelez-vous les régions : le Yucatán et l'Amérique centrale pour les Mayas, la vallée de Mexico pour les Aztèques, les Andes pour les Incas.",
              solution: [
                "a) Cusco : capitale des Incas (Pérou).",
                "b) Tenochtitlan : capitale des Aztèques, fondée vers 1325.",
                "c) Tikal : cité maya du Guatemala.",
                "d) Le quechua : langue des Incas.",
                "e) Le náhuatl : langue des Aztèques.",
                "f) Les quipus : cordelettes à nœuds utilisées par les Incas pour compter.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez ces années en toutes lettres en espagnol : a) 1325 ; b) 1492 ; c) 1521 ; d) 1532. Puis conjuguez le verbe entre parenthèses au temps qui convient (indefinido ou imparfait) : e) « Los incas (cultivar) papas en los Andes. » f) « En 1492, Colón (llegar) a América. »",
              hint: "Attention aux centaines irrégulières : 300 = trescientos, 400 = cuatrocientos, 500 = quinientos. Un événement daté se met à l'indefinido, une habitude à l'imparfait.",
              solution: [
                "a) 1325 : mil trescientos veinticinco.",
                "b) 1492 : mil cuatrocientos noventa y dos.",
                "c) 1521 : mil quinientos veintiuno.",
                "d) 1532 : mil quinientos treinta y dos.",
                "e) Une habitude, un mode de vie : imparfait, « Los incas cultivaban papas en los Andes ».",
                "f) Un événement daté (« en 1492 ») : indefinido, « En 1492, Colón llegó a América ».",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 70 mots) : pour un exposé, rédigez en espagnol une courte présentation des Aztèques. Indiquez où ils vivaient, leur capitale, leur langue, une de leurs techniques, puis racontez en deux phrases l'arrivée de Cortés et la chute de Tenochtitlan.",
              hint: "Décrivez à l'imparfait (vivían, hablaban, cultivaban), puis racontez à l'indefinido (llegó, conquistó). Vérifiez les dates : 1519 et 1521.",
              solution: [
                "Plan : 1) description à l'imparfait (lieu, capitale, langue, technique) ; 2) récit à l'indefinido (1519, 1521) ; 3) une phrase sur ce qu'il en reste aujourd'hui.",
                "Proposition : « Los aztecas vivían en el centro de México. Su capital era Tenochtitlan, una ciudad construida en una isla del lago Texcoco. Hablaban náhuatl y cultivaban maíz en las chinampas, unos jardines flotantes. En 1519, el conquistador Hernán Cortés llegó a México. En 1521, los españoles y sus aliados conquistaron Tenochtitlan. Hoy, la capital de México está construida sobre sus ruinas. »",
                "Vérification : imparfait pour la description (vivían, era, hablaban, cultivaban), indefinido pour les événements datés (llegó, conquistaron), « llegar a » avec un lieu. Environ 70 mots.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Période classique des Mayas (vers 250-900)",
              "Fondation de Tenochtitlan par les Aztèques (vers 1325)",
              "Construction de Machu Picchu par les Incas (vers le milieu du XVe siècle)",
              "Arrivée de Christophe Colomb en Amérique (1492)",
              "Arrivée d'Hernán Cortés au Mexique (1519)",
              "Chute de Tenochtitlan (1521)",
              "Capture d'Atahualpa par Francisco Pizarro (1532)",
            ],
          },
          quiz: [
            { q: "Quelle était la capitale de l'empire inca ?", options: ["Tenochtitlan", "Tikal", "Cusco", "Palenque"], answer: 2, why: "Cusco, au Pérou, était la capitale du Tahuantinsuyo. Tenochtitlan était aztèque ; Tikal et Palenque sont des cités mayas." },
            { q: "Quel conquistador s'est emparé de Tenochtitlan en 1521 ?", options: ["Hernán Cortés", "Francisco Pizarro", "Cristóbal Colón"], answer: 0, why: "Hernán Cortés arrive au Mexique en 1519 et prend Tenochtitlan en 1521 ; Pizarro a conquis l'empire inca." },
            { q: "Comment écrit-on 1492 en espagnol ?", options: ["mil cuatrocientos nueve y dos", "un mil cuatrocientos noventa y dos", "mil cuatrocientos noventa dos", "mil cuatrocientos noventa y dos"], answer: 3, why: "On dit « mil » sans « un », et « y » relie les dizaines et les unités : noventa y dos." },
            { q: "Quel mot espagnol vient du náhuatl, la langue des Aztèques ?", options: ["cóndor", "aguacate", "papa", "llama"], answer: 1, why: "« Aguacate » vient du náhuatl. « Cóndor », « papa » et « llama » viennent du quechua." },
            { q: "Choisissez la phrase correcte.", options: ["Los mayas observaban los astros.", "En 1532, Pizarro capturaba a Atahualpa.", "Los incas hablaron quechua cada día.", "En 1492, Colón llegaba a América."], answer: 0, why: "L'observation des astres est une habitude, donc l'imparfait. Les événements datés (1532, 1492) demandent l'indefinido : capturó, llegó." },
          ],
          trap: "Confondre les trois civilisations, par exemple placer les Incas au Mexique ou les Aztèques au Pérou. Retenez : Mayas au Yucatán et en Amérique centrale, Aztèques dans la vallée de Mexico, Incas dans les Andes avec Cusco pour capitale. Autre erreur : employer l'imparfait pour un événement daté (« en 1521, Cortés conquistaba »).",
          method: "Faites une fiche en trois colonnes (mayas, aztecas, incas) avec, pour chacune, le lieu, la capitale ou une cité, la langue, une invention et la date de la conquête. Puis entraînez-vous à lire les dates à voix haute en espagnol : c'est souvent ce qui manque à l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'futuro',
          title: 'Parler de l\'avenir : le futur',
          minutes: 30,
          objectives: [
            "Conjuguer les verbes réguliers et irréguliers au futur simple.",
            "Exprimer un projet proche avec « ir a + infinitif ».",
            "Parler de ses projets d'avenir et faire des hypothèses avec « si + présent, futur ».",
            "Employer les marqueurs temporels de l'avenir.",
          ],
          course: [
            {
              heading: "Le futur simple des verbes réguliers",
              paragraphs: [
                "Le futur simple (« el futuro ») se forme sur l'infinitif complet, auquel on ajoute les terminaisons -é, -ás, -á, -emos, -éis, -án. Ces terminaisons sont les mêmes pour les trois groupes de verbes (-ar, -er, -ir). Exemple avec « hablar » : hablaré, hablarás, hablará, hablaremos, hablaréis, hablarán. Avec « comer » : comeré, comerás... Avec « vivir » : viviré, vivirás...",
                "Toutes les formes portent un accent écrit, sauf la 1re personne du pluriel : « hablaremos », « viviremos ». Comme en français, le futur sert à parler d'actions à venir, à faire des prévisions et des promesses : « Mañana lloverá en el norte » (demain, il pleuvra dans le nord), « Te llamaré esta noche » (je t'appellerai ce soir).",
              ],
              box: { label: "Formule", text: "Infinitif + é, ás, á, emos, éis, án. Estudiar : estudiaré, estudiarás, estudiará, estudiaremos, estudiaréis, estudiarán." },
            },
            {
              heading: "Les verbes irréguliers au futur",
              paragraphs: [
                "Quelques verbes très courants modifient leur radical, mais gardent les mêmes terminaisons. Certains perdent la voyelle de l'infinitif : poder donne « podr- » (podré), saber « sabr- » (sabré), querer « querr- » (querré), haber « habr- » (habrá). D'autres remplacent cette voyelle par un « d » : tener donne « tendr- » (tendré), poner « pondr- » (pondré), salir « saldr- » (saldré), venir « vendr- » (vendré).",
                "Deux verbes ont un radical court : hacer donne « har- » (haré, harás...) et decir « dir- » (diré, dirás...). Les verbes composés suivent le même modèle : « mantener » donne « mantendré », « deshacer » donne « desharé ». La forme « habrá » est le futur de « hay » : « Habrá mucha gente » (il y aura beaucoup de monde).",
              ],
              box: { label: "À retenir", text: "tener : tendré · poner : pondré · salir : saldré · venir : vendré · poder : podré · saber : sabré · querer : querré · hacer : haré · decir : diré · hay : habrá" },
            },
            {
              heading: "Le futur proche : ir a + infinitif",
              paragraphs: [
                "Pour un projet proche ou une intention déjà décidée, on emploie souvent « ir a + infinitif », comme le futur proche français : « Voy a estudiar esta tarde » (je vais étudier cet après-midi), « Vamos a viajar a Perú en julio ». Le verbe « ir » se conjugue au présent : voy, vas, va, vamos, vais, van, et il ne faut pas oublier la préposition « a ».",
                "Les marqueurs de l'avenir aident à choisir le temps : « mañana » (demain), « pasado mañana » (après-demain), « la semana que viene » ou « la próxima semana » (la semaine prochaine), « el año que viene », « dentro de dos años » (dans deux ans), « en el futuro », « algún día » (un jour).",
              ],
            },
            {
              heading: "Parler de ses projets : si et cuando",
              paragraphs: [
                "Pour une hypothèse réalisable, on emploie comme en français « si + présent, futur » : « Si apruebo el examen, iré a la playa » (si je réussis l'examen, j'irai à la plage). Ne mettez jamais de futur après « si » : on ne dit pas « si aprobaré ».",
                "Attention à une différence importante avec le français : après « cuando » qui renvoie à l'avenir, l'espagnol n'emploie pas le futur mais le subjonctif présent. « Quand je serai grand, je serai médecin » se dit « Cuando sea mayor, seré médico ». Apprenez cette phrase comme une expression toute faite : vous étudierez le subjonctif plus tard.",
              ],
              box: { label: "Règle", text: "Si + présent, futur : « Si hace sol, saldremos ». Cuando + subjonctif présent (et non futur) : « Cuando sea mayor, viviré en Madrid »." },
            },
          ],
          keyPoints: [
            "Futur simple : infinitif + é, ás, á, emos, éis, án (les mêmes pour -ar, -er, -ir).",
            "Accent écrit sur toutes les formes sauf « nosotros » : hablaré, hablaremos.",
            "Irréguliers : tendré, pondré, saldré, vendré, podré, sabré, querré, haré, diré ; hay donne habrá.",
            "Futur proche : ir (voy, vas, va...) + a + infinitif : « Voy a viajar ».",
            "Si + présent, futur : « Si llueve, me quedaré en casa ».",
            "« Quand je serai grand » : « Cuando sea mayor » (subjonctif, jamais « cuando seré »).",
          ],
          example: {
            statement: "Traduisez en espagnol : « L'année prochaine, j'irai au lycée. Je ferai du théâtre et j'aurai de nouveaux amis. »",
            solution: [
              "« L'année prochaine » : « el año que viene » (ou « el próximo año »).",
              "« j'irai au lycée » : futur de « ir », régulier : « iré » ; « au lycée » : « al instituto » (en Espagne, le même établissement accueille collège et lycée).",
              "« Je ferai du théâtre » : « hacer » est irrégulier au futur (radical « har- ») : « haré teatro ».",
              "« j'aurai de nouveaux amis » : « tener » au futur (radical « tendr- ») : « tendré nuevos amigos ».",
              "Réponse : « El año que viene, iré al instituto. Haré teatro y tendré nuevos amigos. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au futur simple : a) viajar (yo) ; b) comer (nosotros) ; c) escribir (ellos) ; d) tener (tú) ; e) hacer (usted) ; f) salir (vosotros).",
              hint: "Partez de l'infinitif complet pour les réguliers. Pour les irréguliers, retrouvez le radical (tendr-, har-, saldr-) puis ajoutez la terminaison.",
              solution: [
                "a) viajar, yo : viajaré.",
                "b) comer, nosotros : comeremos (sans accent).",
                "c) escribir, ellos : escribirán.",
                "d) tener, tú : radical tendr- : tendrás.",
                "e) hacer, usted (3e personne du singulier) : radical har- : hará.",
                "f) salir, vosotros : radical saldr- : saldréis.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le temps qui convient (présent ou futur) : a) Si (hacer) buen tiempo mañana, (ir, nosotros) a la playa. b) Si (aprobar, yo) el examen, mis padres (estar) contentos. c) Si no (estudiar, tú), no (poder) ir a la universidad.",
              hint: "Après « si », toujours le présent ; dans la proposition principale, le futur. Attention : « poder » est irrégulier au futur.",
              solution: [
                "a) « Si hace buen tiempo mañana, iremos a la playa » : présent après « si » (hace), futur de « ir » (iremos).",
                "b) « Si apruebo el examen, mis padres estarán contentos » : « aprobar » change son radical o en ue au présent (apruebo) ; futur régulier « estarán ».",
                "c) « Si no estudias, no podrás ir a la universidad » : présent « estudias », futur irrégulier de « poder » : « podrás ».",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 80 mots) : sur un forum espagnol, des jeunes parlent de leur avenir. Écrivez votre message : ce que vous allez faire l'été prochain, ce que vous ferez dans dix ans (études, métier, lieu de vie) et une hypothèse avec « si ».",
              hint: "Utilisez « ir a + infinitif » pour l'été prochain, le futur simple pour dans dix ans (avec au moins deux verbes irréguliers) et « si + présent, futur ». Vous pouvez placer « Cuando sea mayor » comme expression toute faite.",
              solution: [
                "Plan : 1) l'été prochain avec « ir a » ; 2) dans dix ans avec le futur simple ; 3) une hypothèse avec « si » ; 4) une conclusion.",
                "Proposition : « ¡Hola a todos! El verano que viene, voy a trabajar en un camping y voy a ahorrar dinero. Dentro de diez años, viviré en Barcelona. Estudiaré biología y seré veterinaria, porque me encantan los animales. Tendré un piso pequeño cerca del mar y haré deporte todos los días. Si tengo tiempo, viajaré a Argentina y aprenderé a bailar tango. Cuando sea mayor, ¡seré muy feliz! »",
                "Vérification : « voy a trabajar », « voy a ahorrar » (futur proche) ; futurs réguliers (viviré, estudiaré, viajaré, aprenderé) et irréguliers (tendré, haré) ; « si tengo tiempo, viajaré » (présent après si) ; « cuando sea mayor » avec le subjonctif. Environ 80 mots.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : le futur en espagnol.",
            statements: [
              { text: "Le futur de « tener » à la 1re personne est « teneré ».", true: false, why: "« Tener » est irrégulier : son radical est « tendr- », d'où « tendré »." },
              { text: "Les terminaisons du futur sont les mêmes pour les verbes en -ar, -er et -ir.", true: true, why: "On ajoute toujours -é, -ás, -á, -emos, -éis, -án à l'infinitif." },
              { text: "« Hablaremos » s'écrit sans accent.", true: true, why: "La 1re personne du pluriel est la seule forme du futur sans accent écrit." },
              { text: "On peut dire « Si lloverá, me quedaré en casa ».", true: false, why: "Après « si », on emploie le présent : « Si llueve, me quedaré en casa »." },
              { text: "« Quand je serai grand » se dit « Cuando seré mayor ».", true: false, why: "Après « cuando » tourné vers l'avenir, l'espagnol emploie le subjonctif : « Cuando sea mayor »." },
              { text: "« Voy a estudiar » exprime un projet proche.", true: true, why: "« Ir a + infinitif » correspond au futur proche français : je vais étudier." },
              { text: "Le futur de « hay » est « habrá ».", true: true, why: "« Hay » vient de « haber », dont le radical au futur est « habr- »." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme correcte de « hacer » au futur, 1re personne du singulier ?", options: ["haceré", "haré", "haga", "hacré"], answer: 1, why: "« Hacer » a un radical court au futur : « har- », d'où « haré »." },
            { q: "Complétez : « Mañana (yo) ... a mi abuela. »", options: ["visitaré", "visitare", "visitaría", "visito a"], answer: 0, why: "Futur régulier : infinitif + é, avec accent écrit : visitaré." },
            { q: "Choisissez la phrase correcte.", options: ["Si tendré tiempo, iré al cine.", "Si tengo tiempo, iré al cine.", "Si tengo tiempo, ir al cine.", "Si tenga tiempo, iré al cine."], answer: 1, why: "Après « si », on emploie le présent de l'indicatif (tengo), et le futur dans la principale (iré)." },
            { q: "Comment dit-on « nous allons voyager » ?", options: ["vamos viajar", "iremos viajar", "vamos a viajar"], answer: 2, why: "Le futur proche se construit avec « ir » au présent + a + infinitif : vamos a viajar." },
            { q: "Quel est le futur de « poder » pour « ellos » ?", options: ["poderán", "puedrán", "pudieron", "podrán"], answer: 3, why: "« Poder » perd le « e » de l'infinitif : radical « podr- », d'où « podrán »." },
          ],
          trap: "Traduire mot à mot « quand je serai grand » par « cuando seré mayor » : en espagnol, « cuando » tourné vers l'avenir est suivi du subjonctif présent (« cuando sea mayor »), et « si » est suivi du présent (« si tengo tiempo »), jamais du futur. Autre erreur : régulariser les irréguliers (« teneré », « haceré », « saliré »).",
          method: "Apprenez les irréguliers du futur par familles : ceux qui perdent une voyelle (podré, sabré, querré, habrá), ceux qui prennent un « d » (tendré, pondré, saldré, vendré) et les deux radicaux courts (haré, diré). Pour vérifier une forme, demandez-vous : est-ce que j'ai bien l'infinitif (ou le radical irrégulier) suivi de la terminaison accentuée ?",
        },
      ],
    },
    {
      id: 'arte-expresion',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'arte-hispano',
          title: 'Les artistes du monde hispanique : décrire un tableau',
          minutes: 35,
          objectives: [
            "Identifier quelques grands artistes du monde hispanique et une de leurs œuvres.",
            "Décrire un tableau en situant les éléments dans l'espace (en primer plano, al fondo...).",
            "Employer « hay » et « estar » ainsi que « estar + gérondif » pour décrire une scène.",
            "Exprimer une interprétation et une réaction personnelle face à une œuvre.",
          ],
          course: [
            {
              heading: "Quelques grands peintres espagnols",
              paragraphs: [
                "Diego Velázquez (XVIIe siècle) était le peintre du roi Philippe IV. Dans « Las Meninas » (1656), conservé au musée du Prado à Madrid, il représente l'infante Marguerite au centre, entourée de ses demoiselles d'honneur (« las meninas »), et il se peint lui-même à gauche, devant une grande toile ; au fond, un miroir reflète le roi et la reine.",
                "Francisco de Goya a peint en 1814 « El 3 de mayo de 1808 en Madrid », aussi appelé « Los fusilamientos » (Prado). On y voit des soldats français fusiller des Madrilènes qui s'étaient soulevés contre l'occupation napoléonienne ; au centre, un homme en chemise blanche lève les bras, éclairé par une lanterne. Au XXe siècle, Pablo Picasso peint « Guernica » (1937, musée Reina Sofía, Madrid) après le bombardement de la ville basque de Guernica, le 26 avril 1937, pendant la guerre civile espagnole. Le tableau, en noir, blanc et gris, dénonce la violence de la guerre.",
                "Salvador Dalí, figure du surréalisme, a peint « La persistencia de la memoria » (1931), célèbre pour ses montres molles qui semblent fondre dans un paysage désertique. Le surréalisme cherche à représenter le monde des rêves.",
              ],
            },
            {
              heading: "Quelques grands artistes d'Amérique latine",
              paragraphs: [
                "Au Mexique, Frida Kahlo (1907-1954) a peint de nombreux autoportraits (« autorretratos ») dans lesquels elle exprime sa souffrance physique, après un grave accident d'autobus, mais aussi son attachement à la culture mexicaine : vêtements traditionnels, fleurs, animaux. Son mari, Diego Rivera, est l'un des maîtres du muralisme mexicain : il a peint sur les murs de bâtiments publics de grandes fresques qui racontent l'histoire du Mexique et la vie du peuple.",
                "Le Colombien Fernando Botero (1932-2023) est reconnaissable entre tous : il peint et sculpte des personnages et des objets aux formes très volumineuses. Ses œuvres mêlent souvent l'humour et la critique de la société.",
              ],
              box: { label: "Vocabulaire", text: "el cuadro : le tableau · el pintor, la pintora : le peintre · el retrato : le portrait · el autorretrato : l'autoportrait · el paisaje : le paysage · el mural : la peinture murale · los colores vivos / oscuros : les couleurs vives / sombres · la luz : la lumière · la sombra : l'ombre" },
            },
            {
              heading: "Situer les éléments d'un tableau",
              paragraphs: [
                "Pour décrire un tableau, on commence par sa nature et son sujet : « Es un cuadro de Frida Kahlo. Es un autorretrato. El cuadro representa a una mujer... ». Puis on situe les éléments : « en primer plano » (au premier plan), « en segundo plano » (au second plan), « al fondo » (à l'arrière-plan), « en el centro », « a la izquierda », « a la derecha », « arriba » (en haut), « abajo » (en bas).",
                "Deux verbes servent à localiser. « Hay » (il y a) présente un élément nouveau, avec un article indéfini, un nombre ou sans article : « Al fondo hay una iglesia », « Hay tres hombres ». « Estar » situe un élément déjà connu, avec un article défini : « La iglesia está al fondo », « Los soldados están a la derecha ».",
              ],
              box: { label: "Règle", text: "Hay + un, una, unos, dos, muchos... ou nom sans article : « Hay un caballo ». El, la, los, las + estar : « El caballo está a la izquierda ». On ne dit jamais « hay el caballo »." },
            },
            {
              heading: "Décrire une action et donner son avis",
              paragraphs: [
                "Pour décrire ce que font les personnages, on emploie « estar + gérondif ». Le gérondif se forme avec -ando pour les verbes en -ar (mirar : mirando) et -iendo pour les verbes en -er et -ir (comer : comiendo, escribir : escribiendo). Quelques gérondifs sont irréguliers : leer donne « leyendo », dormir « durmiendo ». Exemple : « Un hombre está levantando los brazos », « La niña está mirando al pintor ».",
                "Pour interpréter et réagir, utilisez : « parece que » (on dirait que), « el pintor quiere mostrar / denunciar... » (le peintre veut montrer / dénoncer), « me llama la atención... » (ce qui attire mon attention, c'est...), « me impresiona » (cela m'impressionne), « creo que », « me gusta porque... ». Exemple : « En Guernica, Picasso quiere denunciar la violencia de la guerra. Me llama la atención el caballo que grita en el centro ».",
              ],
            },
          ],
          keyPoints: [
            "Velázquez : Las Meninas (1656, Prado) ; Goya : El 3 de mayo de 1808 (1814, Prado) ; Picasso : Guernica (1937, Reina Sofía).",
            "Dalí : surréalisme, montres molles ; Frida Kahlo : autoportraits ; Diego Rivera : muralisme ; Botero : formes volumineuses.",
            "Se situer : en primer plano, en segundo plano, al fondo, en el centro, a la izquierda, a la derecha, arriba, abajo.",
            "Hay + article indéfini ou nombre ; article défini + estar.",
            "Estar + gérondif (-ando, -iendo) pour décrire une action en cours : está mirando.",
            "Réagir : parece que, el pintor quiere denunciar, me llama la atención, me impresiona.",
          ],
          example: {
            statement: "Décrivez en trois phrases en espagnol ce tableau imaginaire : au premier plan, une jeune fille lit un livre ; au fond, il y a une montagne ; à droite se trouve un chien.",
            solution: [
              "Premier élément, une action en cours : « En primer plano, una chica está leyendo un libro » (gérondif irrégulier de leer : leyendo).",
              "Deuxième élément, nouveau, introduit par un article indéfini : on emploie « hay » : « Al fondo hay una montaña ».",
              "Troisième élément : « à droite se trouve un chien ». C'est un élément nouveau : « A la derecha hay un perro ». (Si le chien avait déjà été mentionné, on dirait : « El perro está a la derecha ».)",
              "Réponse : « En primer plano, una chica está leyendo un libro. Al fondo hay una montaña. A la derecha hay un perro. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec « hay » ou la bonne forme de « estar » : a) En el centro ... una mujer. b) La mujer ... sentada. c) A la izquierda ... dos niños. d) Los niños ... jugando. e) Al fondo ... un árbol.",
              hint: "Regardez l'article : un article indéfini ou un nombre appelle « hay » ; un article défini appelle « está » ou « están ».",
              solution: [
                "a) « una mujer » (article indéfini) : « En el centro hay una mujer ».",
                "b) « la mujer » (article défini, singulier) : « La mujer está sentada ».",
                "c) « dos niños » (nombre) : « A la izquierda hay dos niños ».",
                "d) « los niños » (article défini, pluriel) : « Los niños están jugando ».",
                "e) « un árbol » (article indéfini) : « Al fondo hay un árbol ».",
              ],
            },
            {
              level: 2,
              statement: "Mettez au gérondif avec « estar » au présent (3e personne) : a) un hombre / pintar ; b) los soldados / disparar (tirer) ; c) la niña / comer ; d) unas mujeres / escribir ; e) el perro / dormir.",
              hint: "-ar donne -ando, -er et -ir donnent -iendo. « Dormir » a un gérondif irrégulier (o devient u).",
              solution: [
                "a) « Un hombre está pintando ».",
                "b) « Los soldados están disparando » (pluriel : están).",
                "c) « La niña está comiendo ».",
                "d) « Unas mujeres están escribiendo ».",
                "e) « El perro está durmiendo » (gérondif irrégulier de dormir).",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 80 mots) : présentez en espagnol « Guernica » de Picasso pour un exposé. Donnez l'auteur, la date, le contexte, décrivez deux ou trois éléments (le cheval au centre, une femme qui crie à gauche avec un enfant dans les bras, une lampe en haut), les couleurs, puis votre réaction.",
              hint: "Suivez l'ordre : présentation, contexte (indefinido), description (hay, estar, gérondif), interprétation (quiere denunciar), réaction (me llama la atención, me impresiona).",
              solution: [
                "Plan : 1) présentation de l'œuvre ; 2) contexte historique ; 3) description située ; 4) couleurs et interprétation ; 5) réaction personnelle.",
                "Proposition : « Guernica es un cuadro de Pablo Picasso. Lo pintó en 1937, después del bombardeo de la ciudad de Guernica durante la guerra civil española. En el centro hay un caballo que grita. A la izquierda, una mujer está llorando con un niño en los brazos. Arriba hay una lámpara. Los colores son el negro, el blanco y el gris. Picasso quiere denunciar la violencia de la guerra. Me impresiona mucho porque el cuadro muestra el dolor de las víctimas. »",
                "Vérification : « hay » avec un article indéfini, « está llorando » (estar + gérondif), indefinido pour le contexte (pintó), formules d'interprétation et de réaction. Environ 80 mots.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque artiste à son œuvre ou à son style.",
            pairs: [
              { left: "Diego Velázquez", right: "Las Meninas (1656)" },
              { left: "Francisco de Goya", right: "El 3 de mayo de 1808 en Madrid" },
              { left: "Pablo Picasso", right: "Guernica (1937)" },
              { left: "Salvador Dalí", right: "Les montres molles, le surréalisme" },
              { left: "Frida Kahlo", right: "De nombreux autoportraits" },
              { left: "Fernando Botero", right: "Des personnages aux formes volumineuses" },
            ],
          },
          quiz: [
            { q: "Que signifie « al fondo » ?", options: ["au premier plan", "à gauche", "à l'arrière-plan", "en bas"], answer: 2, why: "« Al fondo » désigne l'arrière-plan. Le premier plan se dit « en primer plano »." },
            { q: "Choisissez la phrase correcte.", options: ["Hay el perro a la derecha.", "El perro hay a la derecha.", "Un perro está a la derecha.", "Hay un perro a la derecha."], answer: 3, why: "« Hay » s'emploie avec un article indéfini ; avec l'article défini, on dirait « el perro está a la derecha »." },
            { q: "Quel événement « Guernica » de Picasso dénonce-t-il ?", options: ["le bombardement d'une ville basque en 1937", "la conquête du Mexique", "l'invasion napoléonienne de 1808"], answer: 0, why: "Picasso a peint Guernica après le bombardement de la ville, le 26 avril 1937, pendant la guerre civile espagnole. 1808 correspond au tableau de Goya." },
            { q: "Quel est le gérondif de « leer » ?", options: ["leendo", "leyendo", "leiendo", "leando"], answer: 1, why: "Entre deux voyelles, le « i » de -iendo devient « y » : leyendo." },
            { q: "Quelle artiste mexicaine est célèbre pour ses autoportraits ?", options: ["Frida Kahlo", "Diego Velázquez", "Fernando Botero", "Salvador Dalí"], answer: 0, why: "Frida Kahlo (1907-1954) a peint de nombreux autoportraits. Velázquez et Dalí sont espagnols, Botero colombien." },
          ],
          trap: "Employer « hay » avec un article défini (« hay el árbol ») ou « estar » avec un article indéfini (« un árbol está ») : on présente un élément nouveau avec « hay un... » et on situe un élément connu avec « el... está ». Autre erreur : décrire sans situer, en oubliant les repères « en primer plano », « al fondo », « a la izquierda ».",
          method: "Décrivez toujours un tableau dans le même ordre, comme un zoom : 1) la présentation (auteur, titre, date, genre) ; 2) la description, du premier plan à l'arrière-plan, puis de gauche à droite ; 3) les couleurs et la lumière ; 4) l'interprétation (el pintor quiere...) ; 5) votre réaction. Ce plan vous évite d'oublier une partie à l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gustos-opiniones',
          title: 'Exprimer ses goûts et son opinion',
          minutes: 30,
          objectives: [
            "Exprimer ses goûts et ses préférences avec « gustar », « encantar » et « preferir ».",
            "Réagir aux goûts d'un autre (a mí también, a mí tampoco...).",
            "Donner et justifier son opinion avec « creo que », « me parece », « estoy de acuerdo ».",
            "Nuancer et argumenter avec des connecteurs simples.",
          ],
          course: [
            {
              heading: "Le verbe « gustar » et ses semblables",
              paragraphs: [
                "« Gustar » ne se construit pas comme « aimer » en français. Mot à mot, « me gusta el cine » signifie « le cinéma me plaît » : le sujet du verbe est la chose aimée. Le verbe se met donc au singulier devant un nom singulier ou un infinitif (« me gusta la música », « me gusta bailar ») et au pluriel devant un nom pluriel (« me gustan los videojuegos »).",
                "La personne qui aime est indiquée par un pronom : me, te, le, nos, os, les. « Le gusta » signifie « il ou elle aime ». Pour insister ou préciser, on ajoute « a + pronom » ou « a + nom » : « A mí me gusta el fútbol, pero a mi hermana le gusta el tenis ». Plusieurs verbes se construisent de la même façon : « encantar » (adorer), « interesar » (intéresser), « molestar » (déranger, agacer), « aburrir » (ennuyer), « doler » (faire mal).",
              ],
              box: { label: "Règle", text: "me / te / le / nos / os / les + gusta + nom singulier ou infinitif ; + gustan + nom pluriel. « Me encanta » exprime déjà un goût très fort : on ne dit jamais « me encanta muy » ni « me muy gusta »." },
            },
            {
              heading: "Graduer ses goûts et ses préférences",
              paragraphs: [
                "On peut graduer ses goûts : « me encanta » (j'adore), « me gusta mucho », « me gusta », « no me gusta mucho », « no me gusta nada » (je n'aime pas du tout). Pour dire ce que l'on déteste, on emploie des verbes à construction normale : « odio » ou « detesto los lunes ». Pour exprimer une préférence : « prefiero » (de « preferir », qui change son radical e en ie) : « Prefiero la playa a la montaña ».",
                "Pour mettre en valeur ce que vous aimez le plus : « Lo que más me gusta es viajar » (ce que j'aime le plus, c'est voyager). Pour une envie du moment, on dit en Espagne « me apetece » : « Me apetece un helado » (j'ai envie d'une glace).",
              ],
            },
            {
              heading: "Réagir aux goûts des autres",
              paragraphs: [
                "Pour réagir à ce que dit quelqu'un, l'espagnol emploie quatre petites réponses. Si l'autre dit « Me gusta el rap » : « A mí también » (moi aussi) si vous êtes d'accord, « A mí no » (pas moi) si vous n'êtes pas d'accord. Si l'autre dit « No me gusta el rap » : « A mí tampoco » (moi non plus) si vous êtes d'accord, « A mí sí » (moi si) si vous n'êtes pas d'accord.",
                "Avec un verbe à construction normale, on emploie « yo » : « Odio madrugar. Yo también ». « Prefiero el cine. Yo no, prefiero el teatro ».",
              ],
              box: { label: "À retenir", text: "Phrase affirmative : a mí también (d'accord) / a mí no (pas d'accord). Phrase négative : a mí tampoco (d'accord) / a mí sí (pas d'accord)." },
            },
            {
              heading: "Donner et justifier son opinion",
              paragraphs: [
                "Pour donner votre opinion : « creo que », « pienso que », « me parece que » (je trouve que), suivis de l'indicatif ; « en mi opinión », « para mí », « a mi parecer » ; « me parece + adjectif » (« me parece interesante »). Pour réagir à l'opinion des autres : « estoy de acuerdo con... » (je suis d'accord avec), « no estoy de acuerdo », « tienes razón » (tu as raison). Attention : « no creo que » est suivi du subjonctif ; à votre niveau, préférez « creo que no... ».",
                "Une opinion se justifie : « porque », « ya que » (puisque). Pour ajouter un argument : « además » (de plus) ; pour opposer : « pero », « sin embargo » (cependant) ; pour conclure : « por eso » (c'est pourquoi). Exemple : « Creo que las redes sociales son útiles porque podemos hablar con amigos lejanos. Sin embargo, me parece peligroso pasar demasiado tiempo en el móvil ».",
              ],
            },
          ],
          keyPoints: [
            "Me gusta + nom singulier ou infinitif ; me gustan + nom pluriel.",
            "Pronoms : me, te, le, nos, os, les ; insistance : a mí, a ti, a él, a mi madre...",
            "Encantar, interesar, molestar, aburrir se construisent comme gustar ; jamais « me encanta muy ».",
            "Graduer : me encanta, me gusta mucho, no me gusta nada ; prefiero, odio.",
            "Réagir : a mí también / a mí no ; a mí tampoco / a mí sí.",
            "Opinion : creo que, pienso que, me parece, en mi opinión ; justifier avec porque, además, sin embargo, por eso.",
          ],
          example: {
            statement: "Traduisez en espagnol : « Mon frère aime les jeux vidéo, mais moi, je préfère lire. Je trouve que la lecture est plus intéressante. »",
            solution: [
              "« Mon frère aime les jeux vidéo » : c'est « los videojuegos » qui plaît, nom pluriel, donc « gustan » ; la personne est « mi hermano », d'où « a mi hermano le gustan los videojuegos ».",
              "« mais moi, je préfère lire » : « preferir » change son radical e en ie : « pero yo prefiero leer ».",
              "« Je trouve que » : « me parece que » ou « creo que », suivi de l'indicatif.",
              "« la lecture est plus intéressante » : « la lectura es más interesante ».",
              "Réponse : « A mi hermano le gustan los videojuegos, pero yo prefiero leer. Me parece que la lectura es más interesante. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec « gusta » ou « gustan » : a) Me ... los animales. b) ¿Te ... bailar? c) A Carlos le ... la pizza. d) Nos ... las películas de terror. e) A mis padres les ... viajar y leer.",
              hint: "Cherchez ce qui plaît : un nom pluriel demande « gustan » ; un nom singulier ou un infinitif (même deux) demande « gusta ».",
              solution: [
                "a) « los animales », pluriel : « Me gustan los animales ».",
                "b) « bailar », infinitif : « ¿Te gusta bailar? ».",
                "c) « la pizza », singulier : « A Carlos le gusta la pizza ».",
                "d) « las películas », pluriel : « Nos gustan las películas de terror ».",
                "e) deux infinitifs, « viajar y leer » : le verbe reste au singulier : « A mis padres les gusta viajar y leer ».",
              ],
            },
            {
              level: 2,
              statement: "Réagissez à chaque phrase avec « a mí también », « a mí tampoco », « a mí sí » ou « a mí no », en suivant l'indication entre parenthèses. a) Me encanta el chocolate. (vous êtes d'accord) b) No me gusta madrugar. (vous êtes d'accord) c) Me gustan los deportes de riesgo. (vous n'êtes pas d'accord) d) No me interesa la política. (vous n'êtes pas d'accord)",
              hint: "Regardez d'abord si la phrase est affirmative ou négative, puis si vous êtes d'accord ou non.",
              solution: [
                "a) Phrase affirmative, accord : « A mí también ».",
                "b) Phrase négative, accord : « A mí tampoco ».",
                "c) Phrase affirmative, désaccord : « A mí no ».",
                "d) Phrase négative, désaccord : « A mí sí ».",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 80 mots) : sur un forum, la question est « ¿Hay que prohibir el móvil en el instituto? ». Donnez votre opinion, justifiez-la avec deux arguments, présentez un argument opposé et concluez.",
              hint: "Organisez votre message : opinion (creo que, en mi opinión), deux arguments (porque, además), un argument opposé (sin embargo), une conclusion (por eso). Employez au moins une fois un verbe comme « gustar » ou « molestar ».",
              solution: [
                "Plan : 1) opinion ; 2) premier argument ; 3) deuxième argument ; 4) argument opposé ; 5) conclusion.",
                "Proposition : « En mi opinión, hay que prohibir el móvil en clase. Creo que los alumnos trabajan mejor sin el móvil porque no se distraen con las redes sociales. Además, en el recreo, es más divertido hablar con los amigos. Sin embargo, a veces el móvil es útil para buscar información o para llamar a los padres. A mí me molesta ver a mis amigos siempre con el móvil. Por eso, estoy de acuerdo con la prohibición en clase, pero no en todo el instituto. »",
                "Vérification : expressions d'opinion (en mi opinión, creo que + indicatif, estoy de acuerdo), connecteurs (porque, además, sin embargo, por eso), verbe à construction de « gustar » (me molesta ver). Environ 85 mots.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : les goûts et l'opinion.",
            statements: [
              { text: "On dit « Me gustan los libros ».", true: true, why: "« Los libros » est pluriel : le verbe « gustar » s'accorde au pluriel." },
              { text: "On dit « Me gustan bailar y cantar ».", true: false, why: "Devant des infinitifs, même plusieurs, « gustar » reste au singulier : « Me gusta bailar y cantar »." },
              { text: "« Me encanta muy el cine » est correct.", true: false, why: "« Encantar » exprime déjà un goût très fort ; « muy » ne s'emploie pas avec un verbe. On dit « Me encanta el cine »." },
              { text: "Pour répondre « moi non plus » à « No me gusta el café », on dit « A mí tampoco ».", true: true, why: "« Tampoco » marque l'accord avec une phrase négative." },
              { text: "« Le gusta » peut signifier « il aime » ou « elle aime ».", true: true, why: "« Le » renvoie à la 3e personne du singulier (él, ella, usted)." },
              { text: "« Creo que » est suivi du subjonctif.", true: false, why: "« Creo que » est suivi de l'indicatif : « Creo que es útil ». C'est « no creo que » qui demande le subjonctif." },
              { text: "Pour dire « je préfère », on dit « prefiero ».", true: true, why: "« Preferir » change son radical e en ie au présent : prefiero, prefieres, prefiere." },
            ],
          },
          quiz: [
            { q: "Complétez : « A mis amigos les ... los conciertos. »", options: ["gusta", "gustan", "gustamos", "gustas"], answer: 1, why: "Ce qui plaît, « los conciertos », est pluriel : gustan. « Les » indique que ce sont les amis qui aiment." },
            { q: "Votre ami dit « No me gusta el invierno ». Vous n'aimez pas non plus l'hiver. Vous répondez :", options: ["A mí también.", "A mí sí.", "A mí no.", "A mí tampoco."], answer: 3, why: "Pour être d'accord avec une phrase négative, on emploie « tampoco » : moi non plus." },
            { q: "Quelle expression sert à ajouter un argument ?", options: ["sin embargo", "por eso", "además", "pero"], answer: 2, why: "« Además » signifie « de plus ». « Sin embargo » et « pero » opposent, « por eso » conclut." },
            { q: "Choisissez la phrase correcte.", options: ["Me parece interesante este libro.", "Yo gusto este libro.", "Me encanta mucho muy este libro.", "Me gustan este libro."], answer: 0, why: "« Me parece + adjectif » exprime une opinion. Les autres phrases construisent mal « gustar » ou « encantar »." },
            { q: "Que signifie « Lo que más me gusta es viajar » ?", options: ["Je n'aime pas voyager.", "Ce que j'aime le plus, c'est voyager.", "J'aime un peu voyager.", "Je voyage souvent."], answer: 1, why: "« Lo que más me gusta » signifie « ce qui me plaît le plus »." },
          ],
          trap: "Construire « gustar » comme « aimer » (« yo gusto el cine ») ou oublier l'accord avec la chose aimée (« me gusta los videojuegos ») : c'est la chose aimée qui est le sujet, donc « me gustan los videojuegos ». Autre confusion fréquente : répondre « a mí también » à une phrase négative au lieu de « a mí tampoco ».",
          method: "Avant d'écrire « gusta » ou « gustan », soulignez ce qui plaît et demandez-vous s'il est singulier, pluriel ou s'il s'agit d'un infinitif. Pour l'opinion, préparez une petite boîte à outils de six expressions (creo que, me parece, en mi opinión, porque, además, sin embargo) et obligez-vous à toutes les placer dans vos productions.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'imperativo',
          title: 'Donner un ordre ou une consigne : l\'impératif',
          minutes: 30,
          objectives: [
            "Former l'impératif affirmatif aux personnes tú, vosotros, usted et ustedes.",
            "Mémoriser les impératifs irréguliers les plus fréquents.",
            "Placer correctement les pronoms avec l'impératif (levántate, dímelo).",
            "Former l'impératif négatif pour exprimer une interdiction ou un conseil.",
          ],
          course: [
            {
              heading: "L'impératif affirmatif : tú et vosotros",
              paragraphs: [
                "L'impératif sert à donner un ordre, une consigne, un conseil ou une recette. À la 2e personne du singulier (tú), l'impératif régulier a la même forme que la 3e personne du singulier du présent : hablar donne « habla », comer « come », escribir « escribe ». Les verbes à diphtongue la conservent : cerrar donne « cierra », volver « vuelve », pedir « pide ».",
                "À la 2e personne du pluriel (vosotros), on remplace le « r » final de l'infinitif par un « d » : « hablad », « comed », « escribid », « id » (ir). Cette forme s'emploie en Espagne ; en Amérique latine, on s'adresse à plusieurs personnes avec « ustedes ». Les consignes de votre manuel sont souvent à l'impératif : « lee », « escucha », « contesta », « completa », « relaciona ».",
              ],
              box: { label: "Formule", text: "tú : 3e personne du singulier du présent (habla, come, escribe). vosotros : infinitif dont le r devient d (hablad, comed, escribid)." },
            },
            {
              heading: "Huit impératifs irréguliers à connaître",
              paragraphs: [
                "Huit verbes très courants ont un impératif irrégulier à la personne « tú » : tener donne « ten », poner « pon », salir « sal », venir « ven », hacer « haz », decir « di », ir « ve », ser « sé ». Exemples : « Ven aquí » (viens ici), « Haz los deberes » (fais tes devoirs), « Di la verdad » (dis la vérité), « Sé amable » (sois aimable).",
                "À la personne « vosotros », ces verbes restent réguliers : tened, poned, salid, venid, haced, decid, id, sed.",
              ],
              box: { label: "À retenir", text: "tener : ten · poner : pon · salir : sal · venir : ven · hacer : haz · decir : di · ir : ve · ser : sé" },
            },
            {
              heading: "Le vouvoiement : usted et ustedes",
              paragraphs: [
                "Pour s'adresser poliment à quelqu'un (usted) ou à plusieurs personnes (ustedes), l'impératif emprunte les formes du subjonctif présent : les verbes en -ar prennent un « e », les verbes en -er et -ir prennent un « a ». Hablar donne « hable » (usted) et « hablen » (ustedes) ; comer donne « coma », « coman » ; escribir donne « escriba », « escriban ».",
                "Ces formes se construisent sur la 1re personne du présent : tengo donne « tenga », hago « haga », digo « diga », salgo « salga », pongo « ponga », vengo « venga ». Ir donne « vaya » et ser « sea ». Exemples : « Pase usted » (entrez), « Abran el libro, por favor » (ouvrez le livre, s'il vous plaît).",
              ],
            },
            {
              heading: "Les pronoms et l'impératif négatif",
              paragraphs: [
                "À l'impératif affirmatif, les pronoms se placent après le verbe et s'y attachent (enclise). Il faut souvent ajouter un accent écrit pour conserver l'accent tonique : « levántate » (lève-toi), « siéntese » (asseyez-vous), « dímelo » (dis-le-moi), « cómelo » (mange-le). À la personne « vosotros », le « d » tombe devant « os » : « levantaos », « sentaos ».",
                "L'impératif négatif se forme avec « no » + subjonctif présent, à toutes les personnes. Pour « tú », on ajoute un « s » à la forme de « usted » : « no hables », « no comas », « no escribas », « no hagas », « no digas », « no vayas ». Pour « vosotros » : « no habléis », « no comáis ». Au négatif, les pronoms se placent devant le verbe : « no te levantes », « no lo comas ».",
              ],
              box: { label: "Règle", text: "Affirmatif : pronom attaché après le verbe (siéntate). Négatif : no + pronom + subjonctif présent (no te sientes). Habla / no hables ; come / no comas ; haz / no hagas." },
            },
          ],
          keyPoints: [
            "Tú : forme de la 3e personne du présent (habla, come, cierra).",
            "Vosotros : infinitif avec r remplacé par d (hablad, comed).",
            "Irréguliers (tú) : ten, pon, sal, ven, haz, di, ve, sé.",
            "Usted / ustedes : subjonctif présent (hable, hablen, coma, coman, tenga, haga, vaya).",
            "Affirmatif : pronom après le verbe, avec accent si besoin (levántate, dímelo) ; levantaos.",
            "Négatif : no + subjonctif présent, pronom devant (no hables, no te levantes).",
          ],
          example: {
            statement: "Votre petit frère se prépare pour l'école. Donnez-lui trois ordres en espagnol : se lever, faire son lit, ne pas oublier son sac (« olvidar la mochila »).",
            solution: [
              "On s'adresse à un enfant de la famille : on emploie « tú ».",
              "« Se lever » : levantarse, 3e personne du présent « levanta », pronom attaché après le verbe, accent pour garder l'accent tonique sur « van » : « ¡Levántate! ».",
              "« Faire ton lit » : hacer est irrégulier à l'impératif : « ¡Haz la cama! ».",
              "« Ne pas oublier » : impératif négatif, no + subjonctif présent ; olvidar donne « olvide » (usted), donc « no olvides » pour tú : « ¡No olvides la mochila! ».",
              "Réponse : « ¡Levántate! ¡Haz la cama! ¡No olvides la mochila! »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez les verbes à l'impératif affirmatif, à la personne « tú » : a) escuchar ; b) leer ; c) abrir ; d) cerrar ; e) poner ; f) venir.",
              hint: "Prenez la 3e personne du singulier du présent, sauf pour les huit irréguliers.",
              solution: [
                "a) escuchar : « escucha ».",
                "b) leer : « lee ».",
                "c) abrir : « abre ».",
                "d) cerrar (e devient ie au présent) : « cierra ».",
                "e) poner (irrégulier) : « pon ».",
                "f) venir (irrégulier) : « ven ».",
              ],
            },
            {
              level: 2,
              statement: "Mettez ces ordres à la forme négative (personne « tú ») : a) Habla en clase. b) Come chicle. c) Escribe en la mesa. d) Sal de casa. e) Haz ruido.",
              hint: "Partez de la forme de politesse (usted) au subjonctif, construite sur la 1re personne du présent, puis ajoutez un « s ».",
              solution: [
                "a) hablar : usted « hable », donc « No hables en clase ».",
                "b) comer : usted « coma », donc « No comas chicle ».",
                "c) escribir : usted « escriba », donc « No escribas en la mesa ».",
                "d) salir : 1re personne « salgo », usted « salga », donc « No salgas de casa ».",
                "e) hacer : 1re personne « hago », usted « haga », donc « No hagas ruido ».",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, environ 50 mots) : vous rédigez les règles de vie d'une classe hispanophone accueillie dans votre collège. Écrivez au moins six consignes adressées à « vosotros » : trois à l'affirmatif et trois au négatif, dont une avec un verbe pronominal.",
              hint: "Affirmatif : infinitif avec r remplacé par d (escuchad, levantad la mano), et « sentaos » pour un verbe pronominal. Négatif : no + subjonctif (no habléis, no comáis).",
              solution: [
                "Affirmatif (vosotros) : r devient d. Négatif : no + subjonctif présent en -éis (verbes en -ar) ou -áis (verbes en -er, -ir).",
                "Proposition : « Normas de la clase: 1. Llegad a la hora. 2. Sentaos en silencio. 3. Levantad la mano para hablar. 4. Respetad a los compañeros. 5. No comáis en clase. 6. No uséis el móvil. 7. No habléis cuando habla el profesor. 8. No olvidéis los deberes. »",
                "Vérification : « sentaos » perd le « d » devant « os » ; « no comáis » (comer, -er) ; « no uséis », « no habléis », « no olvidéis » (-ar). Le texte compte huit consignes, soit environ 50 mots.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque infinitif à son impératif irrégulier (tú).",
            pairs: [
              { left: "tener", right: "ten" },
              { left: "hacer", right: "haz" },
              { left: "decir", right: "di" },
              { left: "ir", right: "ve" },
              { left: "salir", right: "sal" },
              { left: "ser", right: "sé" },
            ],
          },
          quiz: [
            { q: "Quel est l'impératif de « poner » pour « tú » ?", options: ["pone", "pon", "pona", "ponga"], answer: 1, why: "« Poner » fait partie des huit irréguliers : « pon ». « Ponga » est la forme de « usted »." },
            { q: "Comment dit-on « asseyez-vous » à plusieurs amis (vosotros) ?", options: ["sentados", "sentaros", "sentaos", "sentad os"], answer: 2, why: "À la personne « vosotros », le « d » final tombe devant le pronom « os » : sentaos." },
            { q: "Quelle est la forme négative de « habla » ?", options: ["no habla", "no hablas", "no hablad", "no hables"], answer: 3, why: "L'impératif négatif se forme avec le subjonctif présent : no hables." },
            { q: "Choisissez la phrase correcte.", options: ["Dímelo, por favor.", "Me lo di, por favor.", "No dímelo.", "Di me lo, por favor."], answer: 0, why: "À l'affirmatif, les pronoms s'attachent après le verbe, avec un accent : dímelo. Au négatif, on dirait « no me lo digas »." },
            { q: "Pour dire poliment « entrez » à une seule personne (usted), on dit :", options: ["pasa", "pase", "pasad"], answer: 1, why: "La forme « usted » emprunte le subjonctif présent : pasar donne « pase »." },
          ],
          trap: "Former l'impératif négatif avec la forme affirmative (« no habla », « no come ») : l'interdiction se forme toujours avec le subjonctif présent (« no hables », « no comas »). Autre erreur : placer le pronom avant le verbe à l'affirmatif (« te levanta ») au lieu de l'attacher après (« levántate »).",
          method: "Apprenez les huit irréguliers avec une phrase-repère : « Ven, haz, di, ten, pon, sal, ve, sé ». Pour le négatif, suivez toujours le même chemin : 1re personne du présent (hago), forme de « usted » (haga), puis ajout du « s » pour « tú » (no hagas). Vérifiez enfin la place du pronom : après à l'affirmatif, devant au négatif.",
        },
      ],
    },
    {
      id: 'comunicar',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'comprender-oral',
          title: 'Comprendre un document audio ou vidéo',
          minutes: 25,
          objectives: [
            "Anticiper le contenu d'un document audio ou vidéo à partir du titre, de l'image et de la consigne.",
            "Identifier la situation de communication : qui parle, à qui, de quoi, où et quand.",
            "Repérer des informations précises : nombres, dates, mots transparents, connecteurs, temps des verbes.",
            "Rendre compte en français de ce que l'on a compris, de façon organisée.",
          ],
          course: [
            {
              heading: "Avant d'écouter : anticiper",
              paragraphs: [
                "Comprendre un document oral ne commence pas avec le son. Lisez d'abord attentivement la consigne et le titre, observez l'image ou les premières secondes de la vidéo, puis demandez-vous de quel type de document il s'agit : une conversation, une interview (« una entrevista »), un bulletin météo, une publicité (« un anuncio »), un reportage, un message sur un répondeur...",
                "Formulez ensuite des hypothèses : quel est le thème ? quels mots espagnols risquez-vous d'entendre ? Si le titre est « Un día en el instituto », attendez-vous à entendre « clases », « horario », « profesor », « recreo ». En mobilisant ce vocabulaire à l'avance, votre cerveau le reconnaîtra plus facilement pendant l'écoute.",
              ],
            },
            {
              heading: "Première écoute : le sens général",
              paragraphs: [
                "Lors de la première écoute, ne cherchez pas à tout comprendre et ne bloquez pas sur un mot inconnu. Concentrez-vous sur la situation de communication : combien de personnes parlent ? Qui sont-elles (âge, lien entre elles) ? De quoi parlent-elles ? Où sont-elles ? Le ton de la voix vous renseigne aussi : une personne peut être « contenta », « enfadada » (fâchée), « triste » ou « sorprendida ».",
                "Les bruits de fond sont des indices précieux : de la musique, des voitures, des annonces dans une gare, des cris d'enfants dans une cour de récréation. Notez rapidement ces premières informations, en français ou en espagnol, sous forme de mots-clés.",
              ],
              box: { label: "Méthode", text: "Les questions de la première écoute : ¿Quién? (qui) · ¿Qué? (quoi) · ¿Dónde? (où) · ¿Cuándo? (quand) · ¿Por qué? (pourquoi). Notez des mots-clés, pas des phrases." },
            },
            {
              heading: "Écoutes suivantes : les détails",
              paragraphs: [
                "Aux écoutes suivantes, cherchez les détails. Appuyez-vous sur les mots transparents, proches du français (« la música », « el problema », « importante »), mais méfiez-vous des faux amis : « embarazada » signifie « enceinte », « constipado » signifie « enrhumé », « éxito » signifie « succès », « contestar » signifie « répondre ».",
                "Soyez attentif aux nombres et aux dates, souvent demandés : ne confondez pas « dos » (2) et « doce » (12), « seis » (6) et « siete » (7), « sesenta » (60) et « setenta » (70). Repérez la négation (« no », « nunca », « nadie »), qui change le sens d'une phrase, les connecteurs (« pero », « porque », « sin embargo »), qui organisent les idées, et le temps des verbes, qui indique si l'on parle du passé (« fui », « estuve ») ou de l'avenir (« iré », « voy a ir »).",
              ],
              box: { label: "Repère", text: "Faux amis fréquents : embarazada (enceinte) · constipado (enrhumé) · éxito (succès) · contestar (répondre) · largo (long) · la carta (la lettre) · salir (sortir)." },
            },
            {
              heading: "Rendre compte de ce que l'on a compris",
              paragraphs: [
                "Pour rendre compte d'un document, on répond en français, en phrases complètes, en suivant un ordre logique : la situation (qui, où, quand), puis les informations principales, puis les détails. On ne traduit pas mot à mot : on restitue le sens. Si une information n'est qu'une déduction, signalez-le (« il semble que », « on peut supposer que »).",
                "Le niveau visé en fin de 3e est le niveau A2 du Cadre européen commun de référence pour les langues (CECRL) : il s'agit de comprendre l'essentiel d'un message simple et clair, prononcé lentement, sur un sujet familier. Comprendre la moitié des mots suffit souvent pour comprendre l'essentiel.",
              ],
            },
          ],
          keyPoints: [
            "Avant l'écoute : lire la consigne, observer titre et image, identifier le type de document, anticiper le vocabulaire.",
            "Première écoute : sens général (¿quién?, ¿qué?, ¿dónde?, ¿cuándo?), ton des voix, bruits de fond.",
            "Écoutes suivantes : détails, nombres, dates, négations, connecteurs, temps des verbes.",
            "S'appuyer sur les mots transparents mais se méfier des faux amis (embarazada, constipado, éxito).",
            "Rendre compte en français, en phrases, de la situation vers les détails, sans traduire mot à mot.",
          ],
          example: {
            statement: "Voici la transcription d'un message laissé sur un répondeur : « Hola, Lucas, soy Marta. Te llamo porque el sábado es mi cumpleaños. Voy a hacer una fiesta en mi casa a las ocho de la tarde. ¿Puedes traer tu guitarra? Llámame antes del jueves. ¡Un beso! » Rendez compte du message en français.",
            solution: [
              "Le type de document : un message sur un répondeur, donc une seule personne parle.",
              "Qui parle et à qui : « soy Marta » : c'est Marta qui appelle Lucas.",
              "Pourquoi : « te llamo porque el sábado es mi cumpleaños » : samedi, c'est l'anniversaire de Marta.",
              "Les détails : « una fiesta en mi casa a las ocho de la tarde » : une fête chez elle à 20 h ; « ¿Puedes traer tu guitarra? » : elle demande à Lucas d'apporter sa guitare.",
              "La consigne finale : « Llámame antes del jueves » : il doit la rappeler avant jeudi.",
              "Réponse : Marta appelle Lucas pour l'inviter à la fête de son anniversaire, samedi à 20 h, chez elle. Elle lui demande d'apporter sa guitare et de la rappeler avant jeudi.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Voici des nombres entendus dans un document. Écrivez-les en chiffres : a) doce ; b) sesenta y siete ; c) setenta y seis ; d) quince ; e) doscientos cincuenta ; f) mil novecientos noventa.",
              hint: "Attention aux paires piégeuses : sesenta (60) et setenta (70), seis (6) et siete (7), dos (2) et doce (12).",
              solution: [
                "a) doce : 12.",
                "b) sesenta y siete : 60 + 7 = 67.",
                "c) setenta y seis : 70 + 6 = 76.",
                "d) quince : 15.",
                "e) doscientos cincuenta : 200 + 50 = 250.",
                "f) mil novecientos noventa : 1000 + 900 + 90 = 1990.",
              ],
            },
            {
              level: 2,
              statement: "Document d'entraînement (transcription d'un bulletin à la radio) : « Buenos días. Hoy, lunes, hace mucho calor en el sur de España: en Sevilla, vamos a tener treinta y ocho grados. En el norte, en cambio, va a llover por la tarde. Mañana, martes, las temperaturas van a bajar en todo el país. » a) De quel type de document s'agit-il ? b) Quel temps fait-il à Sevilla aujourd'hui ? c) Que se passera-t-il dans le nord ? d) Que va-t-il se passer mardi ?",
              hint: "Repérez les mots du temps qu'il fait (calor, llover, grados, temperaturas) et les marqueurs de temps (hoy, por la tarde, mañana).",
              solution: [
                "a) On parle du temps et des températures, avec « hoy » et « mañana » : c'est un bulletin météo.",
                "b) « Hace mucho calor en el sur... en Sevilla, vamos a tener treinta y ocho grados » : il fait très chaud à Séville, avec 38 degrés.",
                "c) « En el norte, en cambio, va a llover por la tarde » : il va pleuvoir dans le nord l'après-midi (« en cambio » marque l'opposition avec le sud).",
                "d) « Mañana, martes, las temperaturas van a bajar en todo el país » : mardi, les températures vont baisser dans tout le pays.",
              ],
            },
            {
              level: 3,
              statement: "Document d'entraînement (transcription d'une interview) : « Periodista: Sofía, tienes quince años y eres voluntaria. ¿Qué haces? Sofía: Los sábados por la mañana ayudo en un comedor social de mi barrio, en Valencia. Preparo comidas para personas que no tienen dinero. Empecé hace un año con mi madre. Periodista: ¿Por qué lo haces? Sofía: Porque me gusta ayudar y conozco a gente muy interesante. Al principio era difícil, pero ahora estoy muy contenta. » Rendez compte en français de ce document en cinq ou six phrases.",
              hint: "Suivez l'ordre : type de document et personnes, ce que fait Sofía (où, quand), depuis quand et avec qui, ses raisons, son évolution (al principio... pero ahora...).",
              solution: [
                "Situation : il s'agit d'une interview entre un journaliste et Sofía, une jeune fille de quinze ans qui fait du bénévolat.",
                "Activité : le samedi matin, elle aide dans un restaurant solidaire (« comedor social ») de son quartier, à Valence ; elle prépare des repas pour des personnes qui n'ont pas d'argent.",
                "Depuis quand : « Empecé hace un año con mi madre » : elle a commencé il y a un an, avec sa mère.",
                "Raisons : « porque me gusta ayudar y conozco a gente muy interesante » : elle aime aider et rencontre des gens très intéressants.",
                "Évolution : « Al principio era difícil, pero ahora estoy muy contenta » : au début c'était difficile, mais maintenant elle est très heureuse.",
                "Compte rendu : Dans cette interview, Sofía, quinze ans, explique qu'elle est bénévole à Valence. Le samedi matin, elle aide dans un restaurant solidaire de son quartier où elle prépare des repas pour des personnes pauvres. Elle a commencé il y a un an avec sa mère. Elle le fait parce qu'elle aime aider et qu'elle rencontre des gens intéressants. Au début, c'était difficile, mais aujourd'hui elle est très contente.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes pour comprendre un document audio.",
            items: [
              "Lire la consigne et le titre, observer l'image",
              "Identifier le type de document et formuler des hypothèses",
              "Première écoute : repérer qui parle, de quoi, où et quand",
              "Écoutes suivantes : relever les détails (nombres, dates, connecteurs)",
              "Vérifier ses hypothèses et compléter ses notes",
              "Rédiger le compte rendu en français, de la situation vers les détails",
            ],
          },
          quiz: [
            { q: "Que faut-il faire lors de la première écoute ?", options: ["traduire chaque mot", "comprendre la situation générale", "noter tous les nombres et toutes les dates", "rédiger le compte rendu"], answer: 1, why: "La première écoute sert à saisir la situation : qui parle, de quoi, où et quand. Les détails viennent ensuite." },
            { q: "Que signifie « constipado » ?", options: ["constipé", "fatigué", "fâché", "enrhumé"], answer: 3, why: "C'est un faux ami : « estar constipado » signifie être enrhumé." },
            { q: "Vous entendez « setenta ». Quel nombre est-ce ?", options: ["70", "60", "17"], answer: 0, why: "« Setenta » vaut 70 ; « sesenta » vaut 60 et « diecisiete » vaut 17." },
            { q: "Dans un document, vous entendez « Fuimos a la playa ». De quand parle-t-on ?", options: ["du présent", "de l'avenir", "du passé", "d'une habitude actuelle"], answer: 2, why: "« Fuimos » est l'indefinido de « ir » : l'action est passée et achevée." },
            { q: "Quel connecteur annonce une opposition ?", options: ["porque", "además", "por eso", "sin embargo"], answer: 3, why: "« Sin embargo » signifie « cependant ». « Porque » donne une cause, « además » ajoute, « por eso » conclut." },
          ],
          trap: "Vouloir tout comprendre dès la première écoute et s'arrêter sur le premier mot inconnu : on perd alors la suite du document. Autre erreur fréquente : se fier à un faux ami (« embarazada » n'a rien à voir avec « embarrassée ») ou confondre des nombres proches comme « sesenta » et « setenta ».",
          method: "Entraînez-vous chaque semaine avec un document court (une minute) : bande-annonce, bulletin météo, interview. Écoutez-le trois fois en suivant toujours les mêmes étapes (situation, détails, vérification), notez des mots-clés dans un tableau ¿quién? / ¿qué? / ¿dónde? / ¿cuándo? / ¿por qué?, puis résumez en français en trois phrases.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'hablar-continuo',
          title: 'Prendre la parole en continu',
          minutes: 30,
          objectives: [
            "Préparer une prise de parole en continu à partir de notes et d'un plan.",
            "Structurer son propos avec des connecteurs (primero, luego, además, sin embargo, para terminar).",
            "Utiliser des stratégies pour gagner du temps, se corriger et contourner un mot inconnu.",
            "Prononcer correctement les sons propres à l'espagnol et placer l'accent tonique.",
          ],
          course: [
            {
              heading: "Préparer sa prise de parole",
              paragraphs: [
                "Parler en continu, c'est s'exprimer seul pendant une ou deux minutes : se présenter, présenter un document, raconter une expérience ou défendre un projet. Cela se prépare. Commencez par noter toutes vos idées en vrac, puis choisissez-en trois ou quatre et organisez-les en un plan simple : introduction, développement, conclusion.",
                "Ne rédigez pas tout votre texte pour le lire : un texte lu est monotone et vous empêche de regarder votre public. Écrivez plutôt des mots-clés et les verbes déjà conjugués dont vous aurez besoin (« fui », « me gusta », « voy a... »). Entraînez-vous ensuite à voix haute, en vous chronométrant.",
              ],
            },
            {
              heading: "Structurer son propos",
              paragraphs: [
                "L'introduction annonce le sujet : « Hoy voy a hablar de... » (aujourd'hui, je vais parler de...), « Os voy a presentar... » (je vais vous présenter, à des camarades). Le développement s'appuie sur des connecteurs : « primero » ou « en primer lugar » (d'abord), « luego », « después » (ensuite), « además » (de plus), « por otra parte » (d'autre part), « sin embargo » (cependant), « por eso » (c'est pourquoi).",
                "La conclusion résume ou donne votre avis : « para terminar » (pour finir), « en conclusión », « en resumen ». Vous pouvez finir en remerciant : « Gracias por vuestra atención » (à des camarades) ou « Gracias por su atención » (à un jury ou à des adultes que l'on vouvoie).",
              ],
              box: { label: "À retenir", text: "Introduction : Hoy voy a hablar de... · Développement : primero, luego, después, además, sin embargo, por eso · Conclusion : para terminar, en conclusión · Remerciement : gracias por vuestra atención." },
            },
            {
              heading: "Gagner du temps et se corriger",
              paragraphs: [
                "Tous les locuteurs hésitent, même en langue maternelle. Plutôt que de dire « euh » ou de passer au français, utilisez les petits mots espagnols qui laissent le temps de réfléchir : « pues » (eh bien), « bueno », « a ver » (voyons), « es decir » (c'est-à-dire), « o sea » (enfin, je veux dire).",
                "Si un mot vous manque, contournez-le : décrivez la chose (« es una cosa que sirve para... », « es una persona que... ») ou utilisez un mot de sens proche. Si vous vous trompez, corrigez-vous simplement : « perdón, quiero decir... » (pardon, je veux dire...). Ces stratégies sont valorisées, car elles montrent que vous savez communiquer.",
              ],
            },
            {
              heading: "La prononciation et l'accent tonique",
              paragraphs: [
                "Quelques sons sont propres à l'espagnol : la « jota » (j, et g devant e et i : « jardín », « gente ») se prononce au fond de la gorge ; le « rr » (et le r en début de mot) est roulé : « perro », « rojo » ; le « ñ » se prononce comme « gn » dans « montagne » : « España ». Le « h » ne se prononce jamais : « hablar ». Le « b » et le « v » se prononcent de la même façon. Le « z » (et le c devant e et i) se prononce, dans la plus grande partie de l'Espagne, en plaçant la langue entre les dents ; en Amérique latine, il se prononce comme un « s » : les deux prononciations sont correctes.",
                "En espagnol, chaque mot a une syllabe plus forte, l'accent tonique. Les mots terminés par une voyelle, un « n » ou un « s » sont accentués sur l'avant-dernière syllabe (« ca-sa », « ha-blan ») ; les autres, sur la dernière (« ciu-dad », « ha-blar »). Si un mot ne suit pas cette règle, l'accent est écrit : « canción », « árbol », « música ».",
              ],
              box: { label: "Règle", text: "Mot terminé par voyelle, n ou s : accent tonique sur l'avant-dernière syllabe (examen, joven). Autre consonne finale : sur la dernière (reloj, comer). Exception à la règle : accent écrit (lápiz, café, música)." },
            },
          ],
          keyPoints: [
            "Préparer : idées, plan en trois parties, mots-clés et verbes conjugués ; ne pas lire un texte rédigé.",
            "Introduction : Hoy voy a hablar de... ; conclusion : para terminar, en conclusión.",
            "Connecteurs : primero, luego, después, además, sin embargo, por eso.",
            "Gagner du temps : pues, bueno, a ver, es decir ; contourner un mot : es una cosa que sirve para...",
            "Sons : jota, rr roulé, ñ, h muet, b et v identiques ; z et ce/ci prononcés « th » en Espagne, « s » en Amérique latine.",
            "Accent tonique : voyelle, n, s : avant-dernière syllabe ; autre consonne : dernière ; sinon accent écrit.",
          ],
          example: {
            statement: "Vous devez vous présenter en espagnol pendant une minute. Préparez vos notes : le plan et les phrases-clés.",
            solution: [
              "Introduction : « Hola, me llamo Inés y hoy voy a presentarme. »",
              "Partie 1, l'identité : « Tengo catorce años y vivo en Lyon, en el sureste de Francia. Estoy en tercero. »",
              "Partie 2, la famille et les goûts, avec des connecteurs : « Primero, vivo con mis padres y mi hermano pequeño. Además, me encanta el baloncesto y juego dos veces por semana. »",
              "Partie 3, un projet, au futur : « El año que viene, iré al instituto y voy a estudiar mucho, porque quiero ser periodista. »",
              "Conclusion : « Para terminar, me gusta mucho el español porque quiero viajar a México. Gracias por vuestra atención. »",
              "Conseil : sur votre fiche, ne gardez que les mots-clés (14 años, Lyon, baloncesto, periodista, México) et les verbes conjugués, puis entraînez-vous à voix haute.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces expressions selon qu'elles servent à introduire, à enchaîner les idées ou à conclure : para terminar, hoy voy a hablar de, luego, en conclusión, además, primero, os voy a presentar, sin embargo.",
              hint: "Demandez-vous à quel moment de l'exposé chaque expression peut apparaître : au début, au milieu ou à la fin.",
              solution: [
                "Introduire : « hoy voy a hablar de », « os voy a presentar ».",
                "Enchaîner les idées : « primero », « luego », « además », « sin embargo ».",
                "Conclure : « para terminar », « en conclusión ».",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque mot, indiquez la syllabe qui porte l'accent tonique et expliquez pourquoi : a) hablan ; b) ciudad ; c) árbol ; d) examen ; e) reloj ; f) canción.",
              hint: "Regardez la dernière lettre (voyelle, n, s ou autre consonne), puis vérifiez si le mot porte un accent écrit.",
              solution: [
                "a) hablan : terminé par n, accent sur l'avant-dernière syllabe : HA-blan.",
                "b) ciudad : terminé par d, accent sur la dernière : ciu-DAD.",
                "c) árbol : terminé par l, il devrait être accentué sur la dernière, mais l'accent écrit indique la première : ÁR-bol.",
                "d) examen : terminé par n, accent sur l'avant-dernière : e-XA-men (sans accent écrit).",
                "e) reloj : terminé par j, accent sur la dernière : re-LOJ.",
                "f) canción : terminé par n, il devrait être accentué sur l'avant-dernière, mais l'accent écrit indique la dernière : can-CIÓN.",
              ],
            },
            {
              level: 3,
              statement: "Expression orale en continu (niveau A2, environ une minute) : présentez votre ville ou votre village à un groupe de jeunes espagnols en visite. Préparez votre plan et rédigez les phrases-clés que vous pourriez dire : situation, ce qu'il y a à voir et à faire, ce que vous aimez ou n'aimez pas, un conseil.",
              hint: "Plan en trois parties, au moins quatre connecteurs, « hay » pour présenter les lieux, une expression de goût et un conseil à l'impératif (visitad, id a...).",
              solution: [
                "Plan : 1) introduction et situation ; 2) ce qu'il y a à voir et à faire ; 3) votre avis ; 4) conseil et conclusion.",
                "Introduction : « Hola a todos. Hoy os voy a presentar mi ciudad, Nantes. Está en el oeste de Francia, cerca del océano Atlántico. »",
                "Développement : « Primero, en el centro hay un castillo muy bonito. Además, hay muchos parques y un río, el Loira. Los fines de semana, los jóvenes van al cine o juegan al fútbol en los parques. »",
                "Avis : « Me encanta mi ciudad porque es muy dinámica. Sin embargo, no me gusta el tiempo: llueve mucho en invierno. »",
                "Conclusion et conseil : « Para terminar, si venís en verano, id a la playa, que está a una hora en coche. Gracias por vuestra atención. »",
                "Vérification : connecteurs (primero, además, sin embargo, para terminar), « hay » pour les lieux, goûts (me encanta, no me gusta), impératif vosotros (id) et « si + présent ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux : prendre la parole en espagnol.",
            statements: [
              { text: "Pour bien parler en continu, il vaut mieux lire un texte entièrement rédigé.", true: false, why: "Un texte lu est monotone et coupe le contact avec le public : on parle à partir de mots-clés." },
              { text: "« Pues » et « a ver » permettent de gagner du temps sans passer au français.", true: true, why: "Ce sont des mots de remplissage naturels en espagnol, comme « eh bien » et « voyons »." },
              { text: "Le « h » de « hablar » se prononce.", true: false, why: "Le « h » espagnol est toujours muet : on dit « ablar »." },
              { text: "Prononcer le « z » comme un « s » est une faute.", true: false, why: "C'est la prononciation de l'Amérique latine et de certaines régions d'Espagne : elle est tout à fait correcte." },
              { text: "« Examen » est accentué sur l'avant-dernière syllabe.", true: true, why: "Il se termine par un « n » : l'accent tonique tombe sur l'avant-dernière syllabe, e-XA-men." },
              { text: "Si un mot vous manque, vous pouvez le décrire : « es una cosa que sirve para... ».", true: true, why: "Contourner un mot inconnu est une stratégie de communication valorisée." },
              { text: "« Para terminar » sert à introduire le sujet.", true: false, why: "« Para terminar » annonce la conclusion ; pour introduire, on dit « Hoy voy a hablar de... »." },
            ],
          },
          quiz: [
            { q: "Quelle expression sert à introduire un exposé ?", options: ["Para terminar, quiero decir que...", "Sin embargo, no estoy seguro de...", "Hoy voy a hablar de...", "Por eso..."], answer: 2, why: "« Hoy voy a hablar de » annonce le sujet. « Para terminar » conclut, « sin embargo » oppose, « por eso » tire une conséquence." },
            { q: "Comment se prononce le « ñ » de « España » ?", options: ["comme « gn » dans « montagne »", "comme un simple « n », comme dans « nager »", "comme « ni » dans « nid »"], answer: 0, why: "Le « ñ » correspond au son « gn » du français." },
            { q: "Quel mot porte l'accent tonique sur la dernière syllabe ?", options: ["joven", "casa", "hablan", "comer"], answer: 3, why: "« Comer » se termine par un « r » : l'accent tonique tombe sur la dernière syllabe. Les autres finissent par une voyelle ou un « n »." },
            { q: "Vous ne trouvez plus le mot « tenedor » (fourchette). Que dites-vous ?", options: ["Es una cosa que sirve para comer.", "Je ne connais pas ce mot en espagnol.", "Es un fourchette.", "No."], answer: 0, why: "Décrire la chose permet de continuer à communiquer sans passer au français." },
            { q: "Pour remercier un jury que l'on vouvoie, on dit :", options: ["Gracias por vuestra atención.", "Gracias por su atención.", "Gracias por tu atención."], answer: 1, why: "« Su » correspond à « usted » ou « ustedes », la forme de politesse ; « vuestra » s'adresse à des camarades." },
          ],
          trap: "Écrire tout son texte puis le lire ou le réciter par cœur sans regarder le public : la moindre hésitation fait perdre le fil. Autre erreur fréquente : passer au français dès qu'un mot manque, au lieu de le contourner (« es una cosa que sirve para... ») ou d'utiliser « pues » et « a ver » pour gagner du temps.",
          method: "Préparez une fiche de mots-clés au format d'une carte, avec trois couleurs (introduction, développement, conclusion), puis enregistrez-vous avec votre téléphone. En vous réécoutant, vérifiez trois points : la durée, la présence d'au moins quatre connecteurs et la prononciation de la jota, du rr et de l'accent tonique.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'escribir-mensaje',
          title: 'Écrire un message ou un court récit',
          minutes: 35,
          objectives: [
            "Rédiger un message, un courriel ou une lettre en respectant les codes (formules d'appel et de fin, tú ou usted).",
            "Respecter la ponctuation et les majuscules propres à l'espagnol.",
            "Raconter une expérience passée en enchaînant les événements avec des connecteurs chronologiques.",
            "Relire et corriger sa production à l'aide d'une grille.",
          ],
          course: [
            {
              heading: "Les codes du message et de la lettre",
              paragraphs: [
                "Dans un message amical, on tutoie (« tú ») et on commence par « Hola, Marta: », « Querido Juan: » ou « Querida Ana: ». En espagnol, la formule d'appel d'une lettre ou d'un courriel est suivie de deux-points, et non d'une virgule. On termine par « Un abrazo » (je t'embrasse, littéralement une accolade), « Besos », « Hasta pronto » ou « Escríbeme pronto » (écris-moi vite).",
                "Dans un message formel (à un hôtel, à une école, à un adulte inconnu), on vouvoie avec « usted » et on écrit « Estimado señor: », « Estimada señora López: ». On termine par « Atentamente » (veuillez agréer...) ou « Un saludo cordial ». Dans une lettre, on indique en haut le lieu et la date : « Lyon, 10 de octubre de 2026 ». Dans un courriel, l'objet se dit « el asunto ».",
              ],
              box: { label: "Repère", text: "Amical : Hola, Pablo: / Querida Ana: ... Un abrazo, besos, hasta pronto. Formel : Estimado señor: ... Atentamente, un saludo cordial. Date : Lyon, 10 de octubre de 2026." },
            },
            {
              heading: "La ponctuation et les majuscules",
              paragraphs: [
                "L'espagnol encadre les questions et les exclamations par deux signes : un signe renversé au début et un signe normal à la fin : « ¿Qué tal estás? », « ¡Qué bien! ». Le signe d'ouverture se place là où commence réellement la question : « Y tú, ¿qué haces? ». On ne met pas d'espace avant le point d'interrogation ou d'exclamation.",
                "Les jours, les mois, les nationalités et les langues s'écrivent sans majuscule : « el lunes », « en agosto », « mis amigos franceses », « hablo español ». Seuls les noms propres (personnes, villes, pays) et le premier mot de la phrase prennent une majuscule.",
              ],
              box: { label: "Règle", text: "¿...? et ¡...! : un signe renversé au début, un signe normal à la fin. Pas de majuscule aux jours, mois, nationalités et langues : el sábado, en julio, los españoles, el inglés." },
            },
            {
              heading: "Raconter une expérience passée",
              paragraphs: [
                "Pour raconter, situez d'abord l'histoire dans le temps : « ayer » (hier), « el fin de semana pasado », « el verano pasado », « hace dos años » (il y a deux ans). Puis enchaînez les événements avec des connecteurs chronologiques : « primero » (d'abord), « luego », « después » (ensuite), « más tarde » (plus tard), « entonces » (alors), « de repente » (soudain), « al final », « por fin » (enfin).",
                "Choisissez bien vos temps : l'indefinido pour les événements qui font avancer l'histoire (« fuimos », « visitamos », « de repente empezó a llover »), l'imparfait pour le décor et les descriptions (« hacía sol », « el hotel era grande »). Pour une action qui s'est produite aujourd'hui ou cette semaine, en Espagne, on emploie souvent le pretérito perfecto : « Esta mañana he visto a Marta ». Terminez par une réaction : « Fue una experiencia inolvidable » (ce fut une expérience inoubliable), « Lo pasé muy bien » (je me suis bien amusé).",
              ],
            },
            {
              heading: "Relire et corriger",
              paragraphs: [
                "Gardez toujours quelques minutes pour relire votre texte avec une grille. Vérifiez d'abord que vous avez respecté la consigne : destinataire, nombre de mots, toutes les questions traitées. Puis contrôlez la langue : accords (« las ciudades bonitas »), terminaisons des verbes et accents écrits (« visité », « fue »), choix entre « ser » et « estar », construction de « gustar ».",
                "Enfin, vérifiez la ponctuation (les signes ¿ et ¡), les majuscules et les connecteurs : un bon texte en compte plusieurs et les varie. Relisez une fois pour le sens, une fois pour les verbes et une fois pour l'orthographe : on ne repère pas tout en une seule lecture.",
              ],
            },
          ],
          keyPoints: [
            "Amical : Hola, Pablo: / Querida Ana: ... Un abrazo ; formel : Estimado señor: ... Atentamente (usted).",
            "Formule d'appel suivie de deux-points ; lieu et date : Lyon, 10 de octubre de 2026.",
            "¿...? et ¡...! ; pas de majuscule aux jours, mois, nationalités et langues.",
            "Connecteurs : primero, luego, después, más tarde, de repente, al final, por fin.",
            "Indefinido pour les événements, imparfait pour le décor ; réagir : fue una experiencia inolvidable.",
            "Relire trois fois : consigne et sens, verbes, orthographe et ponctuation.",
          ],
          example: {
            statement: "Corrigez la ponctuation et les majuscules de ce début de message : « hola Pablo, que tal estas? el Sábado fui a la playa con mis amigos Franceses. »",
            solution: [
              "La formule d'appel prend une majuscule et est suivie de deux-points : « Hola, Pablo: ».",
              "La question est encadrée par deux signes, et « qué » interrogatif porte un accent : « ¿Qué tal estás? » (« estás » porte aussi un accent écrit).",
              "Le jour s'écrit sans majuscule, mais la phrase commence par une majuscule : « El sábado fui a la playa ».",
              "La nationalité s'écrit sans majuscule : « mis amigos franceses ».",
              "Réponse : « Hola, Pablo: ¿Qué tal estás? El sábado fui a la playa con mis amigos franceses. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, choisissez la formule d'appel et la formule finale qui conviennent : a) un courriel à votre correspondante Lucía ; b) une lettre au directeur d'un hôtel de Madrid pour réserver une chambre ; c) un message à votre cousin Javier.",
              hint: "Demandez-vous si vous tutoyez ou si vous vouvoyez le destinataire.",
              solution: [
                "a) Une amie, on la tutoie : « Querida Lucía: » ou « Hola, Lucía: » ... « Un abrazo » ou « Besos ».",
                "b) Un adulte inconnu, dans un cadre officiel, on le vouvoie avec « usted » : « Estimado señor: » ... « Atentamente ».",
                "c) Un membre de la famille : « Querido Javier: » ou « Hola, Javier: » ... « Un abrazo » ou « Hasta pronto ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce récit avec les connecteurs suivants : al final, primero, de repente, después. « El sábado pasado, fui a Madrid con mi clase. (1) ... visitamos el museo del Prado. (2) ... comimos en un parque. (3) ... empezó a llover y corrimos hasta el autobús. (4) ... volvimos al hotel muy cansados, pero contentos. »",
              hint: "Suivez la chronologie : le premier événement, la suite, l'événement inattendu, la fin.",
              solution: [
                "(1) « Primero » : c'est le premier événement de la journée.",
                "(2) « Después » : la suite de la journée.",
                "(3) « De repente » : un événement soudain et inattendu, la pluie.",
                "(4) « Al final » : la fin de la journée.",
                "Texte complet : « El sábado pasado, fui a Madrid con mi clase. Primero visitamos el museo del Prado. Después comimos en un parque. De repente empezó a llover y corrimos hasta el autobús. Al final volvimos al hotel muy cansados, pero contentos. »",
              ],
            },
            {
              level: 3,
              statement: "Expression écrite (niveau A2, 80 à 100 mots) : vous écrivez un courriel à votre correspondant(e) espagnol(e) pour lui raconter un voyage ou une sortie que vous avez faits l'été dernier : où, avec qui, ce que vous avez fait, un incident ou une surprise, et ce que vous en avez pensé. Terminez en lui posant une question.",
              hint: "Respectez les codes (formule d'appel avec deux-points, formule finale), situez dans le temps (el verano pasado), utilisez l'indefinido pour les événements et l'imparfait pour le décor, au moins quatre connecteurs et une question avec ¿...?.",
              solution: [
                "Plan : 1) formule d'appel et phrase d'accueil ; 2) où et avec qui ; 3) les activités dans l'ordre ; 4) l'incident ; 5) votre impression ; 6) une question et la formule finale.",
                "Proposition : « Hola, Carmen: ¿Qué tal? Te escribo para contarte mi viaje. El verano pasado, fui a los Pirineos con mi familia. Hacía sol y el paisaje era precioso. Primero, hicimos una excursión en la montaña. Después, nos bañamos en un lago. De repente, vimos un oso a lo lejos. ¡Qué miedo! Al final, el oso se fue y volvimos al pueblo. Fue una experiencia inolvidable. ¿Y tú, qué hiciste el verano pasado? Escríbeme pronto. Un abrazo, Léa »",
                "Vérification : formule d'appel avec deux-points ; indefinido pour les événements (fui, hicimos, nos bañamos, vimos, se fue, volvimos) ; imparfait pour le décor (hacía, era) ; connecteurs (primero, después, de repente, al final) ; signes ¿ et ¡ ; question finale. Environ 85 mots.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque connecteur espagnol à sa traduction.",
            pairs: [
              { left: "primero", right: "d'abord" },
              { left: "luego", right: "ensuite" },
              { left: "de repente", right: "soudain" },
              { left: "más tarde", right: "plus tard" },
              { left: "por fin", right: "enfin" },
              { left: "hace dos años", right: "il y a deux ans" },
            ],
          },
          quiz: [
            { q: "Quelle formule d'appel convient pour écrire au directeur d'une école ?", options: ["Querido amigo:", "¡Hola, tío!", "Estimado señor:", "Besos:"], answer: 2, why: "Dans un message formel, on écrit « Estimado señor: » et on vouvoie avec « usted »." },
            { q: "Quelle phrase est correctement écrite ?", options: ["El Lunes voy a Madrid.", "Hablo Español y Francés.", "¿Vienes el sábado?", "Vienes el sábado?"], answer: 2, why: "La question est encadrée par ¿ et ?, et le jour n'a pas de majuscule. Les langues et les jours s'écrivent en minuscules." },
            { q: "Quel connecteur introduit un événement soudain ?", options: ["de repente", "primero", "al final", "luego"], answer: 0, why: "« De repente » signifie « soudain ». « Primero » ouvre le récit, « luego » enchaîne, « al final » conclut." },
            { q: "Complétez : « El verano pasado ... a Italia con mis padres. »", options: ["voy", "iba cada día", "he ido", "fui"], answer: 3, why: "« El verano pasado » situe un événement achevé dans un passé révolu : on emploie l'indefinido, « fui »." },
            { q: "Quelle formule finale convient à un message pour un ami ?", options: ["Atentamente", "Un abrazo", "Un saludo cordial"], answer: 1, why: "« Un abrazo » est une formule amicale. « Atentamente » et « Un saludo cordial » s'emploient dans un message formel." },
          ],
          trap: "Oublier le point d'interrogation ou d'exclamation renversé en début de phrase (« Qué tal? » au lieu de « ¿Qué tal? ») et mettre une majuscule aux jours, aux mois, aux nationalités ou aux langues comme en anglais (« el Lunes », « hablo Español »). Autre erreur : mélanger « tú » et « usted » dans un même message.",
          method: "Préparez une grille de relecture de cinq lignes que vous recopiez sous chaque production : 1) consigne respectée (destinataire, longueur) ; 2) formules d'appel et de fin ; 3) temps des verbes et accents ; 4) accords et ser / estar ; 5) ponctuation (¿ ¡) et majuscules. Cochez chaque ligne seulement après l'avoir vérifiée.",
        },
      ],
    },
  ],
}
