import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'espagnol-4e',
  chapters: [
    {
      id: 'presentarse',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ser-estar',
          title: 'Ser et estar',
          minutes: 30,
          objectives: [
            "Conjuguer ser et estar au présent de l'indicatif.",
            "Choisir entre ser et estar pour présenter une personne, la situer et dire comment elle va.",
            "Comprendre le changement de sens de certains adjectifs selon le verbe employé (ser listo, estar listo).",
            "Se présenter et présenter quelqu'un en répondant à des questions simples.",
          ],
          course: [
            {
              heading: "Deux verbes pour un seul « être »",
              paragraphs: [
                "En français, un seul verbe sert à dire ce qu'est une personne, où elle se trouve et comment elle va : le verbe être. L'espagnol, lui, partage ce travail entre deux verbes. « Ser » dit ce qu'est une personne ou une chose : son identité, son origine, son caractère. « Estar » dit où elle se trouve et dans quel état elle est à un moment donné.",
                "Comparez : « Soy Lucía » (je suis Lucía : c'est mon identité) et « Estoy en casa » (je suis à la maison : c'est l'endroit où je me trouve). Ou encore : « Pablo es simpático » (c'est son caractère) et « Pablo está cansado » (il est fatigué aujourd'hui, ce n'est qu'un état passager).",
                "Les deux verbes sont irréguliers au présent. Apprenez-les par cœur, car ils reviennent dans presque toutes les phrases. Remarquez les accents écrits de « estar » : estás, está, están.",
              ],
              box: { label: "Conjugaison", text: "ser : soy, eres, es, somos, sois, son. estar : estoy, estás, está, estamos, estáis, están. Usted et ustedes se conjuguent comme él et ellos : usted es, ustedes están." },
            },
            {
              heading: "Les emplois de « ser » : ce que l'on est",
              paragraphs: [
                "On emploie « ser » pour l'identité et la nationalité : « Soy Marcos », « Somos franceses ». Pour l'origine, on ajoute « de » : « Es de Sevilla » (il est de Séville). Pour la profession, on n'emploie pas d'article, contrairement à l'anglais : « Mi madre es médica », « Mi tío es profesor ».",
                "On emploie aussi « ser » pour décrire le caractère et l'apparence durable d'une personne : « Ana es alta y muy simpática ». Il sert encore à dire l'heure et la date : « Son las cinco », « Es la una », « Hoy es martes ». Enfin, il indique la matière et le possesseur : « La mesa es de madera » (la table est en bois), « El libro es de Pablo » (le livre est à Pablo).",
                "Une règle simple vous aidera beaucoup : devant un nom, on emploie toujours « ser ». On dit « Madrid es una ciudad grande », « Es mi hermano », jamais « está una ciudad ». Petite exception utile : pour dire où a lieu un événement, on emploie aussi « ser » : « La fiesta es en casa de Ana ».",
              ],
              box: { label: "Règle", text: "ser : identité (soy Lucía), nationalité et origine (es de Sevilla), profession (es médica), caractère et description (es alta), heure et date (son las cinco, hoy es lunes), matière et possession (es de madera, es de Pablo). Devant un nom : toujours ser." },
            },
            {
              heading: "Les emplois de « estar » : où l'on est et comment l'on va",
              paragraphs: [
                "On emploie « estar » pour situer une personne, un objet ou un lieu : « ¿Dónde estás? Estoy en el colegio », « Madrid está en el centro de España », « Mis llaves están en la mesa ». Même une ville ou un monument, qui ne bougent pourtant jamais, se situent avec « estar ».",
                "On emploie aussi « estar » pour un état, une humeur ou une situation qui peut changer : « Estoy cansado » (je suis fatigué), « Mi hermana está enferma » (ma sœur est malade), « Estamos contentos », « La puerta está abierta » (la porte est ouverte). C'est aussi le verbe de la santé : « ¿Cómo estás? Estoy bien, gracias ». Les adverbes « bien » et « mal » s'emploient toujours avec « estar ».",
              ],
              box: { label: "Repère", text: "Un moyen de s'en souvenir : estar ressemble à « état » et sert aussi pour l'endroit. Estar = état et endroit (estoy cansado, estoy en casa). Ser = ce que l'on est (soy francés, soy simpático)." },
            },
            {
              heading: "Quand l'adjectif change de sens",
              paragraphs: [
                "Certains adjectifs changent de sens selon le verbe. « Ser listo » veut dire être intelligent, mais « estar listo » veut dire être prêt. « Ser aburrido » veut dire être ennuyeux, mais « estar aburrido » veut dire s'ennuyer. « Ser malo » veut dire être méchant ou mauvais, mais « estar malo » veut dire être malade.",
                "Un exemple amusant : « Este chico es rico » signifie que ce garçon est riche, tandis que « Esta paella está rica » signifie que cette paella est délicieuse. Le choix du verbe n'est donc pas un détail : il change le message.",
              ],
              box: { label: "À retenir", text: "ser listo (intelligent) / estar listo (prêt) ; ser aburrido (ennuyeux) / estar aburrido (qui s'ennuie) ; ser malo (méchant) / estar malo (malade) ; ser rico (riche) / estar rico (délicieux)." },
            },
          ],
          keyPoints: [
            "ser : soy, eres, es, somos, sois, son. estar : estoy, estás, está, estamos, estáis, están.",
            "ser : identité, nationalité, origine, profession, caractère, heure et date, matière, possession.",
            "estar : lieu (estoy en casa, Madrid está en España) et état passager (estoy cansado).",
            "Devant un nom, toujours ser : es una ciudad, es mi amigo.",
            "Bien et mal vont avec estar : estoy bien.",
            "Ser listo (intelligent) / estar listo (prêt) ; ser rico (riche) / estar rico (délicieux).",
          ],
          example: {
            statement: "Complétez avec ser ou estar conjugué, puis justifiez chaque choix : « ¡Hola! (1) ... Marcos. (2) ... de Sevilla, pero ahora (3) ... en París con mi familia. Hoy (4) ... muy contento porque (5) ... mi cumpleaños. »",
            solution: [
              "(1) Il s'agit de l'identité : ser → « Soy Marcos ».",
              "(2) Il s'agit de l'origine (ser + de) : « Soy de Sevilla ».",
              "(3) Il s'agit du lieu où il se trouve : estar → « estoy en París ».",
              "(4) « Contento » décrit un état du moment : estar → « estoy muy contento ».",
              "(5) Le verbe est suivi d'un nom (mi cumpleaños) : ser → « es mi cumpleaños ».",
              "Réponse : « ¡Hola! Soy Marcos. Soy de Sevilla, pero ahora estoy en París con mi familia. Hoy estoy muy contento porque es mi cumpleaños. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe entre parenthèses au présent : a) Nosotros (ser) franceses. b) ¿Tú (ser) de Madrid? c) Mis padres (estar) en el trabajo. d) Yo (estar) cansada. e) Vosotros (ser) muy simpáticos. f) La biblioteca (estar) cerca del colegio.",
              hint: "Repérez le sujet de chaque phrase, puis cherchez la bonne personne dans les conjugaisons de ser et de estar.",
              solution: [
                "a) nosotros → « Nosotros somos franceses ».",
                "b) tú → « ¿Tú eres de Madrid? ».",
                "c) mis padres = ellos → « Mis padres están en el trabajo ».",
                "d) yo → « Yo estoy cansada ».",
                "e) vosotros → « Vosotros sois muy simpáticos ».",
                "f) la biblioteca = ella → « La biblioteca está cerca del colegio ».",
              ],
            },
            {
              level: 2,
              statement: "Choisissez ser ou estar, conjuguez-le et justifiez : a) Lima ... la capital de Perú. b) Lima ... en Perú. c) Mi hermana ... enferma hoy. d) Mi hermana ... médica. e) ... las nueve y media. f) ¡Mmm! Esta sopa ... muy rica. g) ¿Dónde ... mis zapatillas?",
              hint: "Demandez-vous à chaque fois : est-ce une identité, une origine, une profession, une heure (ser) ou un lieu, un état du moment (estar) ? Attention à la phrase f.",
              solution: [
                "a) « la capital » est un nom : « Lima es la capital de Perú ».",
                "b) C'est une localisation : « Lima está en Perú ».",
                "c) C'est un état passager (hoy) : « Mi hermana está enferma hoy ».",
                "d) C'est une profession : « Mi hermana es médica ».",
                "e) C'est l'heure, au pluriel : « Son las nueve y media ».",
                "f) On parle du goût de cette soupe : « Esta sopa está muy rica » (délicieuse). Avec ser, elle serait « riche », ce qui n'a pas de sens ici.",
                "g) C'est une localisation, sujet pluriel : « ¿Dónde están mis zapatillas? ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : ce message de Clara contient cinq erreurs d'emploi de ser et estar. Trouvez-les, corrigez-les et justifiez chaque correction. « ¡Hola! Estoy Clara y estoy francesa. Soy de Lyon, pero ahora soy en Barcelona con mis abuelos. Mis abuelos son muy simpáticos y su casa es muy grande. Barcelona está una ciudad preciosa. Hoy soy un poco cansada. ¿Y tú, cómo estás? »",
              hint: "Relisez chaque verbe en vous demandant : identité, nationalité, nom qui suit (ser) ou lieu, état du moment (estar) ? Quatre verbes du message sont déjà corrects.",
              solution: [
                "« Estoy Clara » → « Soy Clara » : c'est l'identité.",
                "« estoy francesa » → « soy francesa » : c'est la nationalité.",
                "« soy en Barcelona » → « estoy en Barcelona » : c'est le lieu où elle se trouve.",
                "« Barcelona está una ciudad preciosa » → « Barcelona es una ciudad preciosa » : le verbe est suivi d'un nom.",
                "« Hoy soy un poco cansada » → « Hoy estoy un poco cansada » : la fatigue est un état passager.",
                "Les phrases « Soy de Lyon », « son muy simpáticos », « es muy grande » et « ¿cómo estás? » sont correctes : origine, caractère, description durable et santé.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes ?",
            statements: [
              { text: "« Soy en el colegio. »", true: false, why: "Pour un lieu, on emploie estar : « Estoy en el colegio »." },
              { text: "« Mi padre es enfermero. »", true: true, why: "La profession se dit avec ser, et sans article." },
              { text: "« Madrid está la capital de España. »", true: false, why: "Devant un nom, toujours ser : « Madrid es la capital de España »." },
              { text: "« Hoy estoy muy cansado. »", true: true, why: "La fatigue est un état passager : estar." },
              { text: "« Son las tres y cuarto. »", true: true, why: "L'heure se dit avec ser, au pluriel à partir de deux heures." },
              { text: "« ¡La tortilla es muy rica! » veut dire que la tortilla est délicieuse.", true: false, why: "Pour le goût d'un plat, on dit « está muy rica » ; « ser rico » signifie être riche." },
              { text: "« Estoy listo » signifie « je suis prêt ».", true: true, why: "Estar listo = être prêt ; ser listo = être intelligent." },
              { text: "« Somos de Francia » utilise estar.", true: false, why: "« Somos » est une forme de ser, qui exprime ici l'origine." },
            ],
          },
          quiz: [
            { q: "Complétez : « Mis amigos ... en la playa. »", options: ["son", "están", "es", "estamos"], answer: 1, why: "C'est un lieu, et le sujet est « mis amigos » (ellos) : están." },
            { q: "Quelle phrase est correcte ?", options: ["Ana está colombiana.", "Ana es en Bogotá.", "Ana está de Bogotá.", "Ana es colombiana."], answer: 3, why: "La nationalité s'exprime avec ser : « Ana es colombiana »." },
            { q: "« Estoy aburrido » signifie :", options: ["Je m'ennuie.", "Je suis ennuyeux.", "Je suis fatigué."], answer: 0, why: "Estar aburrido = s'ennuyer (état) ; ser aburrido = être ennuyeux (caractère)." },
            { q: "Comment dit-on « Il est une heure » ?", options: ["Está la una.", "Son la una.", "Es la una.", "Está una hora."], answer: 2, why: "L'heure se dit avec ser ; « la una » est singulier, donc « es »." },
            { q: "Quel verbe faut-il dans « La reunión ... en el gimnasio » ?", options: ["está", "es", "son"], answer: 1, why: "Pour dire où a lieu un événement (une réunion, une fête), on emploie ser." },
          ],
          trap: "Employer « ser » pour un lieu (« soy en casa ») ou « estar » devant un nom (« está una ciudad ») : un lieu demande estar, un nom demande toujours ser. Autre erreur fréquente : oublier l'accent de « está » et « están ».",
          method: "Avant de choisir, posez-vous deux questions. Le verbe est-il suivi d'un nom, d'une origine, d'une profession ou d'une heure ? Alors ser. Parle-t-on d'un endroit ou d'un état qui peut changer demain ? Alors estar. Récitez ensuite les deux conjugaisons à voix haute, en les alternant (soy, estoy ; eres, estás...).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'presente-irregulares',
          title: 'Le présent des verbes irréguliers et à diphtongue',
          minutes: 35,
          objectives: [
            "Conjuguer au présent les verbes à diphtongue (e → ie, o → ue) et les verbes en e → i.",
            "Conjuguer les verbes irréguliers à la première personne (hago, pongo, salgo, conozco...).",
            "Employer au présent les verbes très fréquents tener, venir, decir et ir.",
            "Repérer un verbe irrégulier dans une phrase et retrouver son infinitif.",
          ],
          course: [
            {
              heading: "Les verbes à diphtongue : la règle de la botte",
              paragraphs: [
                "Une diphtongue est un groupe de deux voyelles prononcées d'une seule émission de voix, comme « ie » ou « ue ». Certains verbes transforment la voyelle de leur radical en diphtongue quand cette voyelle porte l'accent tonique. Le e devient ie : querer (vouloir) → quiero ; pensar (penser) → pienso ; empezar (commencer) → empiezo ; preferir → prefiero ; entender (comprendre) → entiendo.",
                "Le o devient ue : poder (pouvoir) → puedo ; dormir → duermo ; volver (revenir) → vuelvo ; contar (raconter, compter) → cuento ; encontrar (trouver) → encuentro. Un seul verbe change son u en ue : jugar (jouer) → juego, juegas, juega.",
                "La diphtongue apparaît à toutes les personnes sauf nosotros et vosotros, car à ces deux personnes l'accent tonique tombe sur la terminaison : queremos, queréis ; podemos, podéis. Si vous écrivez les six personnes en deux colonnes et entourez celles qui changent, le dessin forme une botte : on l'appelle souvent « la règle de la botte ». Les terminaisons, elles, restent régulières.",
              ],
              box: { label: "Conjugaison", text: "querer : quiero, quieres, quiere, queremos, queréis, quieren. poder : puedo, puedes, puede, podemos, podéis, pueden. jugar : juego, juegas, juega, jugamos, jugáis, juegan." },
            },
            {
              heading: "Les verbes en e → i",
              paragraphs: [
                "Quelques verbes en -ir changent le e de leur radical en i, avec la même règle de la botte : pedir (demander, commander) → pido, pides, pide, pedimos, pedís, piden. Suivent le même modèle : servir (servir) → sirvo ; repetir (répéter) → repito ; vestirse (s'habiller) → me visto ; seguir (suivre, continuer) → sigo.",
                "Attention à ne pas confondre : « pedir » change e en i, alors que « preferir » change e en ie. Dans les manuels, on signale souvent ces verbes ainsi : preferir (ie), dormir (ue), pedir (i). Prenez l'habitude de noter cette petite indication dans votre carnet de vocabulaire.",
              ],
              box: { label: "Règle", text: "e → ie (querer : quiero), o → ue (poder : puedo), u → ue (jugar : juego), e → i (pedir : pido), à toutes les personnes sauf nosotros et vosotros (queremos, podemos, jugamos, pedimos)." },
            },
            {
              heading: "Les verbes irréguliers à la première personne",
              paragraphs: [
                "D'autres verbes ne sont irréguliers qu'à la première personne du singulier (yo). Beaucoup prennent un g : hacer (faire) → hago ; poner (mettre) → pongo ; salir (sortir) → salgo ; traer (apporter) → traigo. Les autres personnes sont régulières : haces, hace, hacemos ; pones, pone, ponemos.",
                "Les verbes en -cer et -cir précédés d'une voyelle prennent -zco : conocer (connaître) → conozco ; conducir (conduire) → conduzco ; traducir (traduire) → traduzco. Retenez aussi : dar (donner) → doy ; ver (voir) → veo ; saber (savoir) → sé, avec un accent pour le distinguer du pronom « se ».",
              ],
              box: { label: "À retenir", text: "hago, pongo, salgo, traigo ; conozco, conduzco ; doy, veo, sé. Seule la personne yo est irrégulière : haces, pones, sales, conoces, das, ves, sabes." },
            },
            {
              heading: "Les verbes qui cumulent les irrégularités",
              paragraphs: [
                "Trois verbes très fréquents combinent un g à la première personne et une diphtongue ou un changement de voyelle aux autres personnes. tener (avoir) : tengo, tienes, tiene, tenemos, tenéis, tienen. venir (venir) : vengo, vienes, viene, venimos, venís, vienen. decir (dire) : digo, dices, dice, decimos, decís, dicen.",
                "Enfin, le verbe « ir » (aller) est entièrement irrégulier : voy, vas, va, vamos, vais, van. Ces verbes servent tous les jours : « Tengo catorce años », « Vengo del colegio », « ¿Qué dices? », « Voy al cine ». Ils méritent d'être sus parfaitement.",
              ],
              box: { label: "Conjugaison", text: "tener : tengo, tienes, tiene, tenemos, tenéis, tienen. venir : vengo, vienes, viene, venimos, venís, vienen. decir : digo, dices, dice, decimos, decís, dicen. ir : voy, vas, va, vamos, vais, van." },
            },
          ],
          keyPoints: [
            "Diphtongue quand la voyelle porte l'accent : e → ie (quiero), o → ue (puedo), u → ue (juego).",
            "Règle de la botte : nosotros et vosotros ne changent pas (queremos, podéis).",
            "e → i pour pedir, servir, repetir, vestirse, seguir : pido, sirvo, repito.",
            "Irrégularité en yo seulement : hago, pongo, salgo, traigo, conozco, doy, veo, sé.",
            "tener (tengo, tienes), venir (vengo, vienes), decir (digo, dices) cumulent deux irrégularités.",
            "ir : voy, vas, va, vamos, vais, van.",
          ],
          example: {
            statement: "Conjuguez au présent à la personne demandée : a) dormir (nosotros) ; b) dormir (ella) ; c) pedir (yo) ; d) tener (tú) ; e) conocer (yo).",
            solution: [
              "a) dormir est un verbe en o → ue, mais nosotros échappe à la diphtongue : « dormimos ».",
              "b) À la 3e personne, l'accent tombe sur le radical : o → ue : « duerme ».",
              "c) pedir est un verbe en e → i : « pido ».",
              "d) tener prend une diphtongue aux personnes accentuées sur le radical : « tienes ».",
              "e) conocer est un verbe en -cer précédé d'une voyelle : « conozco ».",
              "Réponse : dormimos, duerme, pido, tienes, conozco.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au présent : a) querer (yo) ; b) poder (ellos) ; c) jugar (nosotros) ; d) empezar (la clase) ; e) volver (tú) ; f) preferir (vosotros).",
              hint: "Appliquez la règle de la botte : la diphtongue apparaît partout sauf avec nosotros et vosotros.",
              solution: [
                "a) quiero.",
                "b) pueden.",
                "c) jugamos (nosotros : pas de diphtongue).",
                "d) la clase = ella : empieza.",
                "e) vuelves.",
                "f) preferís (vosotros : pas de diphtongue).",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce récit avec les verbes conjugués au présent : « Por la mañana, (yo, salir) de casa a las ocho. (Yo, poner) mis libros en la mochila y (yo, ir) al colegio con mi hermano. Él (decir) que no (tener) ganas. En el comedor, (yo, pedir) un zumo de naranja y por la tarde (nosotros, volver) a casa en autobús. »",
              hint: "Repérez les verbes irréguliers seulement en yo (salir, poner), les verbes à diphtongue ou en e → i, et les verbes qui cumulent les irrégularités.",
              solution: [
                "salir (yo) : « salgo ».",
                "poner (yo) : « Pongo ».",
                "ir (yo) : « voy ».",
                "decir (él) : « dice ».",
                "tener (él) : « tiene » (tener ganas = avoir envie).",
                "pedir (yo) : « pido ».",
                "volver (nosotros) : « volvemos », sans diphtongue.",
                "Texte : « Por la mañana, salgo de casa a las ocho. Pongo mis libros en la mochila y voy al colegio con mi hermano. Él dice que no tiene ganas. En el comedor, pido un zumo de naranja y por la tarde volvemos a casa en autobús. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : passez ce texte de la 1re personne du pluriel (nosotros) à la 1re personne du singulier (yo), puis à la 3e personne du singulier (ella). « Los sábados, dormimos hasta las diez. Después hacemos los deberes, jugamos al baloncesto y por la tarde vemos una película. Conocemos bien el barrio y siempre volvemos a casa a pie. »",
              hint: "Pour yo, pensez aux irrégularités de première personne (hago, veo, conozco) et aux diphtongues. Pour ella, seules les diphtongues comptent.",
              solution: [
                "Avec yo : dormir → duermo ; hacer → hago ; jugar → juego ; ver → veo ; conocer → conozco ; volver → vuelvo.",
                "Texte avec yo : « Los sábados, duermo hasta las diez. Después hago los deberes, juego al baloncesto y por la tarde veo una película. Conozco bien el barrio y siempre vuelvo a casa a pie. »",
                "Avec ella : duerme, hace, juega, ve, conoce, vuelve (hacer, ver et conocer sont réguliers à cette personne).",
                "Texte avec ella : « Los sábados, duerme hasta las diez. Después hace los deberes, juega al baloncesto y por la tarde ve una película. Conoce bien el barrio y siempre vuelve a casa a pie. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque infinitif à sa forme de la 1re personne du singulier (yo).",
            pairs: [
              { left: "poder", right: "puedo" },
              { left: "pedir", right: "pido" },
              { left: "hacer", right: "hago" },
              { left: "conocer", right: "conozco" },
              { left: "jugar", right: "juego" },
              { left: "saber", right: "sé" },
            ],
          },
          quiz: [
            { q: "Quelle est la forme correcte de « querer » avec nosotros ?", options: ["quieremos", "queremos", "quiero", "quieren"], answer: 1, why: "Avec nosotros, l'accent tombe sur la terminaison : pas de diphtongue." },
            { q: "Complétez : « Yo ... la mesa. » (poner)", options: ["pono", "pongo", "pone", "puengo"], answer: 1, why: "Poner est irrégulier à la 1re personne seulement : pongo." },
            { q: "Comment conjugue-t-on « jugar » avec ellos ?", options: ["juegan", "jugan", "juguen", "jueguen"], answer: 0, why: "Jugar change son u en ue aux personnes accentuées sur le radical : juegan." },
            { q: "Quel verbe change e en i (et non en ie) ?", options: ["pensar", "querer", "preferir", "pedir"], answer: 3, why: "Pedir fait pido, pides, pide ; les trois autres prennent la diphtongue ie." },
            { q: "« Vienes » est une forme du verbe :", options: ["ver", "vivir", "venir"], answer: 2, why: "Venir : vengo, vienes, viene. Ver fait ves et vivir fait vives." },
          ],
          trap: "Mettre la diphtongue partout, y compris avec nosotros et vosotros (« quieremos », « puedéis ») : à ces deux personnes, le radical ne change pas. Autre erreur fréquente : écrire « tieno » ou « teno » au lieu de « tengo ».",
          method: "Notez chaque nouveau verbe avec son indication entre parenthèses, par exemple « dormir (ue) », « pedir (i) », « hacer (hago) ». Pour réviser, écrivez la conjugaison en deux colonnes et entourez les formes qui changent : si vous obtenez bien la forme d'une botte, votre conjugaison est juste.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'describir-personas',
          title: 'Décrire une personne : physique et caractère',
          minutes: 30,
          objectives: [
            "Décrire le physique d'une personne avec ser, tener et llevar.",
            "Décrire le caractère d'une personne avec des adjectifs variés.",
            "Accorder les adjectifs en genre et en nombre.",
            "Nuancer une description avec muy, bastante, un poco, demasiado.",
          ],
          course: [
            {
              heading: "Le physique : ser, tener et llevar",
              paragraphs: [
                "Pour décrire l'allure générale d'une personne, on emploie « ser » suivi d'un adjectif : « Es alto » (il est grand), « Es baja » (elle est petite), « Es delgado » (il est mince), « Es moreno » (il est brun), « Es rubia » (elle est blonde), « Es pelirrojo » (il est roux). On peut dire aussi « Es de estatura media » (il est de taille moyenne).",
                "Pour les cheveux et les yeux, on emploie « tener » : « Tiene el pelo largo, corto, rizado o liso » (les cheveux longs, courts, frisés ou raides), « Tiene los ojos azules, verdes, marrones o negros ». Remarquez l'article : on dit « tiene el pelo », « tiene los ojos », comme en français. « Tener » sert aussi pour l'âge : « Tiene trece años ».",
                "Pour ce que l'on porte, on emploie « llevar » : « Lleva gafas » (il porte des lunettes), « Lleva barba » (il a une barbe), « Lleva bigote » (une moustache), « Lleva una camiseta roja ». Pour décrire quelqu'un avec respect, on évite les adjectifs blessants : on préfère « Es fuerte » (il est costaud) à un mot moqueur.",
              ],
              box: { label: "À retenir", text: "Ser + adjectif : es alto, bajo, delgado, moreno, rubio, pelirrojo. Tener : tiene el pelo largo, los ojos verdes, trece años. Llevar : lleva gafas, barba, una gorra." },
            },
            {
              heading: "Le caractère",
              paragraphs: [
                "Le caractère se décrit avec « ser », car il fait partie de la personne : « Mi amiga es simpática y divertida » (sympathique et drôle). Voici des adjectifs utiles : amable (aimable), alegre (gai), generoso (généreux), trabajador (travailleur), hablador (bavard), tímido (timide), serio (sérieux), tranquilo (calme), valiente (courageux), curioso (curieux).",
                "Pour les défauts : antipático (antipathique), perezoso (paresseux), egoísta (égoïste), nervioso (nerveux), mentiroso (menteur), maleducado (mal élevé). Attention aux faux amis : « simpático » signifie sympathique, mais « sensible » signifie sensible au sens d'émotif, et « gracioso » signifie drôle, amusant, et non gracieux.",
              ],
            },
            {
              heading: "L'accord des adjectifs",
              paragraphs: [
                "Les adjectifs en -o font leur féminin en -a : alto → alta, simpático → simpática. Les adjectifs en -e ou en consonne ne changent pas au féminin : un chico amable, una chica amable ; un chico joven, una chica joven. Les adjectifs de nationalité et ceux en -or ajoutent un -a : francés → francesa, español → española, trabajador → trabajadora, hablador → habladora.",
                "Au pluriel, on ajoute -s après une voyelle (altos, amables) et -es après une consonne (jóvenes, trabajadores). Le z final devient c : feliz → felices. Si le groupe mélange garçons et filles, l'adjectif se met au masculin pluriel : « Pablo y Lucía son simpáticos ». Notez les accents : « joven » n'en a pas, mais « jóvenes » en prend un pour garder l'accent tonique au même endroit.",
              ],
              box: { label: "Règle", text: "-o → -a (alto, alta). -e et consonne : invariables en genre (amable, joven). Nationalité et -or : + a (francesa, trabajadora). Pluriel : + s après voyelle, + es après consonne, z → ces (feliz, felices)." },
            },
            {
              heading: "Nuancer et organiser un portrait",
              paragraphs: [
                "Pour nuancer, on place un adverbe devant l'adjectif : « muy » (très), « bastante » (assez), « un poco » (un peu), « demasiado » (trop). « Un poco » s'emploie surtout devant une qualité jugée négative : « Es un poco tímido ». Pour une qualité positive, on dit plutôt « bastante » : « Es bastante trabajador ». Pour relier les idées : « y » (et), « pero » (mais), « también » (aussi).",
                "Un bon portrait suit un ordre clair : d'abord qui est la personne (nom, âge, lien avec vous), puis son physique (silhouette, cheveux, yeux, ce qu'elle porte), enfin son caractère, avec un exemple concret. Par exemple : « Mi primo Hugo tiene quince años. Es alto y moreno, tiene los ojos negros y lleva gafas. Es muy divertido, pero un poco perezoso: ¡duerme hasta mediodía! ».",
              ],
              box: { label: "Repère", text: "Ordre d'un portrait : identité (nom, âge, lien) → physique (ser, tener, llevar) → caractère (ser + adjectif nuancé) → un exemple concret." },
            },
          ],
          keyPoints: [
            "Silhouette avec ser : es alto, bajo, delgado, moreno, rubio.",
            "Cheveux, yeux et âge avec tener : tiene el pelo rizado, los ojos azules, doce años.",
            "Ce que l'on porte avec llevar : lleva gafas, barba, una gorra.",
            "Accord : alto/alta ; amable et joven invariables en genre ; francés/francesa ; trabajador/trabajadora.",
            "Pluriel : + s ou + es, z → ces (felices). Groupe mixte : masculin pluriel.",
            "Nuancer : muy, bastante, un poco (défauts), demasiado.",
          ],
          example: {
            statement: "Traduisez : « Ma sœur est petite et blonde. Elle a les cheveux frisés et porte des lunettes. Elle est très travailleuse mais un peu timide. »",
            solution: [
              "« petite et blonde » : silhouette avec ser, adjectifs au féminin : « Mi hermana es baja y rubia ».",
              "« les cheveux frisés » : tener + article : « Tiene el pelo rizado ».",
              "« porte des lunettes » : llevar, sans article : « lleva gafas ».",
              "« très travailleuse » : trabajador → trabajadora : « Es muy trabajadora ».",
              "« un peu timide » : défaut léger, « un poco » : « pero un poco tímida ».",
              "Réponse : « Mi hermana es baja y rubia. Tiene el pelo rizado y lleva gafas. Es muy trabajadora, pero un poco tímida. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez l'adjectif à la forme qui convient : a) Mi madre es (alto). b) Mis amigas son (simpático). c) Lucía es (francés). d) Mis abuelos son (amable). e) Marta es (trabajador). f) Los niños son (feliz).",
              hint: "Regardez le genre et le nombre du sujet, puis la terminaison de l'adjectif : -o, -e, consonne, nationalité, -or ou -z.",
              solution: [
                "a) féminin singulier : « alta ».",
                "b) féminin pluriel : « simpáticas ».",
                "c) nationalité au féminin : « francesa » (sans accent au féminin).",
                "d) adjectif en -e, pluriel : « amables ».",
                "e) adjectif en -or au féminin : « trabajadora ».",
                "f) z → ces au pluriel : « felices ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec ser, tener ou llevar au présent : « Mi profesor de español (1) ... de Valencia. (2) ... alto y delgado. (3) ... el pelo corto y gris, y (4) ... barba. Siempre (5) ... una chaqueta azul. (6) ... cuarenta años. (7) ... muy paciente. »",
              hint: "Ser pour l'origine, la silhouette et le caractère ; tener pour les cheveux et l'âge ; llevar pour ce que l'on porte (vêtements, barbe, lunettes).",
              solution: [
                "(1) origine : « es de Valencia ».",
                "(2) silhouette : « Es alto y delgado ».",
                "(3) cheveux : « Tiene el pelo corto y gris ».",
                "(4) barbe : « lleva barba ».",
                "(5) vêtement : « lleva una chaqueta azul ».",
                "(6) âge : « Tiene cuarenta años ».",
                "(7) caractère : « Es muy paciente ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici la fiche d'un personnage inventé (données fictives). Rédigez son portrait en espagnol en cinq phrases au moins, dans l'ordre identité, physique, caractère, exemple. Fiche : Valentina, 14 ans, cousine du narrateur, vit à Buenos Aires ; grande, mince ; cheveux longs et raides, noirs ; yeux verts ; porte toujours une casquette ; drôle, bavarde, un peu désordonnée (desordenada) ; elle fait rire tout le monde.",
              hint: "Utilisez ser, tener et llevar, accordez tous les adjectifs au féminin, et nuancez le défaut avec « un poco ».",
              solution: [
                "Identité : « Mi prima Valentina tiene catorce años y vive en Buenos Aires. »",
                "Silhouette : « Es alta y delgada. »",
                "Cheveux, yeux, accessoire : « Tiene el pelo largo, liso y negro, y los ojos verdes. Siempre lleva una gorra. »",
                "Caractère, avec nuance : « Es muy graciosa y habladora, pero un poco desordenada. »",
                "Exemple concret : « ¡Siempre hace reír a todo el mundo! »",
                "Vérification : tous les adjectifs sont au féminin (alta, delgada, graciosa, habladora, desordenada) ; « pelo » et « ojos » ont leur article.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque adjectif à son contraire.",
            pairs: [
              { left: "alto", right: "bajo" },
              { left: "simpático", right: "antipático" },
              { left: "trabajador", right: "perezoso" },
              { left: "largo", right: "corto" },
              { left: "tímido", right: "hablador" },
              { left: "rizado", right: "liso" },
            ],
          },
          quiz: [
            { q: "Comment dit-on « il a les yeux bleus » ?", options: ["Es los ojos azules.", "Está con los ojos azules.", "Tiene los ojos azules.", "Está los ojos azules."], answer: 2, why: "Pour les yeux et les cheveux, on emploie tener avec l'article : tiene los ojos azules." },
            { q: "Quel est le féminin de « hablador » ?", options: ["habladora", "habladra", "hablador", "habladera"], answer: 0, why: "Les adjectifs en -or ajoutent un -a au féminin : habladora." },
            { q: "« Lleva gafas » signifie :", options: ["Il a des yeux clairs.", "Il porte des lunettes.", "Il a une grande barbe noire."], answer: 1, why: "Llevar = porter ; gafas = lunettes." },
            { q: "Quel est le pluriel de « joven » ?", options: ["jovens", "joven", "jovenes", "jóvenes"], answer: 3, why: "Après une consonne, on ajoute -es, et l'accent écrit garde l'accent tonique sur « jó » : jóvenes." },
            { q: "« Es muy gracioso » signifie :", options: ["Il est très drôle.", "Il est très gracieux.", "Il est très gracié.", "Il est très gras."], answer: 0, why: "Gracioso est un faux ami : il signifie drôle, amusant." },
          ],
          trap: "Employer « ser » pour les cheveux ou les yeux (« es los ojos azules ») au lieu de « tener », ou « llevar » pour la silhouette (« lleva alto »). Autre erreur : laisser l'adjectif au masculin après un sujet féminin (« mi madre es alto »).",
          method: "Préparez une grille à trois colonnes, ser, tener et llevar, et rangez-y chaque mot de vocabulaire appris. Pour décrire quelqu'un, piochez au moins un mot dans chaque colonne, puis relisez en vérifiant l'accord de chaque adjectif avec la personne décrite.",
        },
      ],
    },
    {
      id: 'gustos-ocio',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'gustar-encantar',
          title: 'Exprimer ses goûts : gustar, encantar, preferir',
          minutes: 30,
          objectives: [
            "Exprimer ses goûts et ses dégoûts avec gustar, encantar, interesar et aburrir, en accordant le verbe.",
            "Employer le pronom et le renforcement qui conviennent (a mí me, a ti te, a él le...) pour parler des goûts des autres.",
            "Exprimer une préférence avec preferir et gustar más.",
            "Présenter ses goûts en continu en les hiérarchisant et en les justifiant.",
          ],
          course: [
            {
              heading: "Rappel : gustar se construit « à l'envers »",
              paragraphs: [
                "Vous l'avez vu en 5e : « gustar » signifie « plaire ». Dans « Me gusta el cine », le sujet est « el cine » (ce qui plaît) et la personne est indiquée par un pronom placé devant le verbe : me, te, le, nos, os, les. Le verbe s'accorde donc avec ce qui plaît : « Me gusta la música », « Me gusta leer », mais « Me gustan los cómics ».",
                "Pour préciser de qui l'on parle, on ajoute « a » suivi d'un nom ou d'un pronom tonique, en gardant le pronom : « A Lucía le gusta el teatro », « A mis padres les gustan los viajes », « A mí me gusta nadar, ¿y a ti? ». On ne supprime jamais le petit pronom : « A Lucía gusta el teatro » est incorrect.",
              ],
              box: { label: "À retenir", text: "(a mí) me gusta(n) ; (a ti) te gusta(n) ; (a él, a ella, a usted) le gusta(n) ; (a nosotros) nos gusta(n) ; (a vosotros) os gusta(n) ; (a ellos, a ellas, a ustedes) les gusta(n)." },
            },
            {
              heading: "Les verbes qui se construisent comme gustar",
              paragraphs: [
                "Plusieurs verbes suivent exactement le même modèle. « Encantar » signifie adorer : « Me encanta el chocolate », « Nos encantan las vacaciones ». Comme il exprime déjà le plus haut degré, on ne lui ajoute jamais « mucho ». « Interesar » signifie intéresser : « Me interesa la historia », « ¿Te interesan los animales? ». « Aburrir » signifie ennuyer : « Me aburren los documentales » (les documentaires m'ennuient).",
                "Pour dire que l'on déteste quelque chose, on emploie au contraire un verbe ordinaire, dont la personne est le sujet : « odiar » ou « detestar ». On dit « Odio los lunes » (je déteste les lundis), « Mi hermano detesta el brócoli ». Ces deux verbes sont réguliers : odio, odias, odia, odiamos, odiáis, odian.",
              ],
              box: { label: "Repère", text: "Du plus fort au plus faible : me encanta > me gusta mucho > me gusta bastante > no me gusta mucho > no me gusta nada > odio. Le « no » se place devant le pronom : no me gusta." },
            },
            {
              heading: "Exprimer une préférence : preferir et gustar más",
              paragraphs: [
                "« Preferir » (préférer) est un verbe à diphtongue e → ie : prefiero, prefieres, prefiere, preferimos, preferís, prefieren. Contrairement à gustar, c'est un verbe ordinaire : la personne est le sujet. On dit donc « Prefiero el baloncesto » et jamais « me prefiere ». On peut le faire suivre d'un nom ou d'un infinitif : « Prefiero leer ».",
                "Pour comparer deux choses, on emploie « preferir... a... » : « Prefiero el cine al teatro » (a + el = al), « Mis padres prefieren la montaña a la playa ». On peut aussi dire « gustar más... que... » : « Me gusta más el verano que el invierno » (j'aime mieux l'été que l'hiver). Attention : avec preferir on emploie « a », avec gustar más on emploie « que ».",
              ],
              box: { label: "Règle", text: "preferir A a B : prefiero el té al café. gustar más A que B : me gusta más el té que el café. Preferir se conjugue comme un verbe ordinaire (yo prefiero) ; gustar garde le pronom (me gusta más)." },
            },
            {
              heading: "Présenter ses goûts en continu",
              paragraphs: [
                "Pour parler de vos goûts pendant une minute, organisez vos idées : ce que vous adorez, ce que vous aimez, ce que vous n'aimez pas, en donnant chaque fois une raison avec « porque » (parce que). Deux tournures très utiles permettent de hiérarchiser : « Lo que más me gusta es... » (ce que j'aime le plus, c'est...) et « Lo que menos me gusta es... » (ce que j'aime le moins, c'est...).",
                "Exemple : « Lo que más me gusta es la música: me encanta el rap porque las letras son interesantes. También me gusta bastante dibujar. Prefiero los deportes individuales a los deportes de equipo. Lo que menos me gusta es ordenar mi habitación: ¡odio hacerlo! ». Variez les verbes : votre présentation sera plus vivante.",
              ],
            },
          ],
          keyPoints: [
            "Gustar, encantar, interesar, aburrir : pronom + verbe accordé avec ce qui plaît (me encantan los gatos).",
            "On garde toujours le pronom : a Lucía le gusta, a mis padres les gustan.",
            "Me encanta = j'adore, jamais « me encanta mucho ».",
            "Preferir (ie) et odiar sont des verbes ordinaires : prefiero, odio.",
            "Preferir A a B ; gustar más A que B.",
            "Lo que más me gusta es... ; lo que menos me gusta es...",
          ],
          example: {
            statement: "Traduisez : « Ma mère adore les films d'aventures, mais mon père préfère les documentaires. Moi, ce que j'aime le plus, c'est lire. »",
            solution: [
              "« Ma mère adore les films d'aventures » : encantar, pronom « le » (a mi madre), « las películas » est pluriel : « A mi madre le encantan las películas de aventuras ».",
              "« mon père préfère les documentaires » : preferir est un verbe ordinaire, à la 3e personne, avec diphtongue : « mi padre prefiere los documentales ».",
              "« Moi, ce que j'aime le plus, c'est lire » : « A mí, lo que más me gusta es leer ».",
              "Réponse : « A mi madre le encantan las películas de aventuras, pero mi padre prefiere los documentales. A mí, lo que más me gusta es leer. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le pronom et la forme du verbe qui conviennent : a) A mí (encantar) los videojuegos. b) A mi hermano (interesar) la historia. c) A nosotros no (gustar) nada madrugar. d) ¿A ti (aburrir) las matemáticas? e) A mis amigos (gustar) el fútbol.",
              hint: "Trouvez d'abord le pronom grâce à « a mí, a mi hermano, a nosotros... », puis regardez si ce qui plaît est singulier, pluriel ou un infinitif.",
              solution: [
                "a) « A mí me encantan los videojuegos » (pluriel).",
                "b) « A mi hermano le interesa la historia » (singulier).",
                "c) « A nosotros no nos gusta nada madrugar » (infinitif : singulier).",
                "d) « ¿A ti te aburren las matemáticas? » (pluriel).",
                "e) « A mis amigos les gusta el fútbol » (singulier).",
              ],
            },
            {
              level: 2,
              statement: "Formez des phrases avec preferir... a... : a) yo / el té / el café ; b) mis padres / la montaña / la playa ; c) nosotros / el baloncesto / el fútbol ; d) vosotros / leer / ver la tele. Puis récrivez la phrase a) avec gustar más... que...",
              hint: "Conjuguez preferir à la bonne personne (attention à la règle de la botte) et pensez à la contraction a + el = al.",
              solution: [
                "a) « Prefiero el té al café » (a + el café = al café).",
                "b) « Mis padres prefieren la montaña a la playa ».",
                "c) « Preferimos el baloncesto al fútbol » (nosotros : pas de diphtongue).",
                "d) « Preferís leer a ver la tele » (vosotros : pas de diphtongue).",
                "Phrase a) avec gustar más : « Me gusta más el té que el café ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : ce texte d'un élève contient cinq erreurs. Trouvez-les, corrigez-les et expliquez chaque correction. « Yo gusto mucho la música. Me encanta mucho el rap y me gusta los conciertos. Mi hermana prefiere el pop. A ella le interesan el teatro. Yo prefiero el rap que el pop. »",
              hint: "Vérifiez pour chaque verbe : est-ce un verbe « à l'envers » (pronom + accord avec ce qui plaît) ou un verbe ordinaire ? Vérifiez aussi la construction de preferir.",
              solution: [
                "« Yo gusto mucho la música » → « Me gusta mucho la música » : avec gustar, la personne est un pronom.",
                "« Me encanta mucho el rap » → « Me encanta el rap » : encantar ne prend pas « mucho ».",
                "« me gusta los conciertos » → « me gustan los conciertos » : « los conciertos » est pluriel.",
                "« A ella le interesan el teatro » → « A ella le interesa el teatro » : « el teatro » est singulier.",
                "« Yo prefiero el rap que el pop » → « Yo prefiero el rap al pop » : preferir se construit avec « a » (a + el = al).",
                "La phrase « Mi hermana prefiere el pop » est correcte.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression espagnole à sa traduction.",
            pairs: [
              { left: "Me encanta", right: "J'adore" },
              { left: "Me interesa", right: "Ça m'intéresse" },
              { left: "Me aburre", right: "Ça m'ennuie" },
              { left: "Prefiero", right: "Je préfère" },
              { left: "Odio", right: "Je déteste" },
              { left: "No me gusta nada", right: "Je n'aime pas du tout" },
            ],
          },
          quiz: [
            { q: "Complétez : « A mis abuelos ... los paseos por el campo. »", options: ["le gusta", "les gustan", "les gusta", "se les gusta"], answer: 1, why: "Pronom « les » pour mis abuelos, et « gustan » car « los paseos » est pluriel." },
            { q: "Quelle phrase signifie « j'adore danser » ?", options: ["Me encanta bailar.", "Me encantan bailar.", "Yo encanto bailar.", "Me encanta mucho bailar."], answer: 0, why: "Encantar se construit comme gustar, au singulier devant un infinitif, et sans « mucho »." },
            { q: "Comment dit-on « je préfère la plage » ?", options: ["Me prefiero la playa.", "Me prefiere la playa.", "Prefiero la playa.", "Prefero la playa."], answer: 2, why: "Preferir est un verbe ordinaire à diphtongue : yo prefiero." },
            { q: "« Me aburren los documentales » signifie :", options: ["Les documentaires m'intéressent.", "Je déteste les documentaires.", "Les documentaires m'ennuient."], answer: 2, why: "Aburrir signifie ennuyer ; il s'accorde avec « los documentales »." },
            { q: "Quelle phrase est correcte ?", options: ["Prefiero el cine al teatro.", "Prefiero el cine que el teatro.", "Me prefiero el cine al teatro.", "Prefiero el cine del teatro."], answer: 0, why: "On dit « preferir A a B » : prefiero el cine al teatro (a + el = al)." },
          ],
          trap: "Mélanger les deux familles de verbes : dire « yo gusto » ou « me prefiere ». Gustar, encantar, interesar et aburrir prennent un pronom et s'accordent avec ce qui plaît ; preferir, odiar et detestar ont la personne pour sujet. Autre erreur : « me encanta mucho ».",
          method: "Classez les verbes en deux colonnes : « verbes à l'envers » (gustar, encantar, interesar, aburrir) et « verbes ordinaires » (preferir, odiar, detestar). Pour un verbe à l'envers, soulignez ce qui plaît avant d'écrire la terminaison ; pour un verbe ordinaire, soulignez le sujet.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ocio-deporte',
          title: 'Parler de ses loisirs et du sport',
          minutes: 30,
          objectives: [
            "Nommer ses loisirs et ses sports avec le verbe qui convient (jugar a, tocar, hacer, ir a).",
            "Indiquer la fréquence d'une activité (siempre, a menudo, a veces, nunca, soler + infinitif).",
            "Présenter ses loisirs en continu pendant une minute en disant quoi, quand, où, avec qui et pourquoi.",
            "Citer quelques repères sur le sport dans le monde hispanique.",
          ],
          course: [
            {
              heading: "« Jouer » : jugar a ou tocar ?",
              paragraphs: [
                "Le français emploie le verbe « jouer » pour un sport, un jeu et un instrument de musique. L'espagnol distingue deux verbes. Pour un sport ou un jeu, on dit « jugar a » : jugar al fútbol, al baloncesto, al tenis, al ajedrez (aux échecs), a las cartas, a los videojuegos. N'oubliez pas la contraction a + el = al.",
                "Pour un instrument de musique, on dit « tocar » (toucher) sans préposition : tocar la guitarra, el piano, la batería (la batterie), el violín, la flauta. Rappelez-vous que jugar est un verbe à diphtongue u → ue : juego, juegas, juega, jugamos, jugáis, juegan.",
              ],
              box: { label: "Règle", text: "jugar a + sport ou jeu : juego al fútbol, juego a los videojuegos. tocar + instrument : toco la guitarra, toco el piano. Jamais « juego la guitarra »." },
            },
            {
              heading: "Les autres verbes des loisirs",
              paragraphs: [
                "Avec « hacer », on parle d'une activité en général : hacer deporte (faire du sport), hacer natación (faire de la natation), hacer judo, hacer senderismo (faire de la randonnée), hacer fotos. On peut aussi dire « practicar un deporte ». Avec « ir a », on indique où l'on va : ir a la piscina, al gimnasio, al cine, al polideportivo (au complexe sportif).",
                "D'autres verbes sont utiles : nadar (nager), correr (courir), patinar (faire du patin ou du roller), bailar (danser), montar en bici (faire du vélo), montar a caballo (faire du cheval), leer, dibujar (dessiner), ver series, escuchar música, salir con los amigos. En Espagne, on dit aussi « quedar con los amigos » pour retrouver ses amis.",
                "Pour le sport en club : el equipo (l'équipe), el partido (le match), el entrenamiento (l'entraînement), entrenar (s'entraîner), ganar (gagner), perder (perdre, verbe à diphtongue : pierdo). Par exemple : « Juego en un equipo de balonmano y entrenamos dos veces a la semana ».",
              ],
            },
            {
              heading: "Dire la fréquence",
              paragraphs: [
                "Pour dire à quelle fréquence vous faites une activité, classez les adverbes du plus fréquent au plus rare : siempre (toujours), casi siempre (presque toujours), a menudo (souvent), a veces (parfois), casi nunca (presque jamais), nunca (jamais). Pour être précis : todos los días (tous les jours), todos los sábados, los fines de semana, una vez a la semana (une fois par semaine), dos veces al mes (deux fois par mois).",
                "Attention à la place de « nunca » : placé devant le verbe, il s'emploie seul (« Nunca veo la tele ») ; placé après le verbe, il exige « no » devant le verbe (« No veo nunca la tele »). Enfin, le verbe « soler » (o → ue) suivi d'un infinitif signifie « avoir l'habitude de » : « Suelo correr los domingos », « Solemos ir a la playa en verano ».",
              ],
              box: { label: "À retenir", text: "siempre > casi siempre > a menudo > a veces > casi nunca > nunca. Nunca veo la tele = No veo nunca la tele. Soler + infinitif : suelo jugar (d'habitude je joue)." },
            },
            {
              heading: "Le sport dans le monde hispanique",
              paragraphs: [
                "Le football est le sport le plus suivi en Espagne comme en Amérique latine. Le championnat espagnol s'appelle « la Liga » ; ses clubs les plus connus sont le Real Madrid et le FC Barcelona. L'équipe d'Espagne masculine a remporté la Coupe du monde en 2010, et l'équipe féminine en 2023. L'Argentine a gagné la Coupe du monde masculine trois fois : en 1978, en 1986 et en 2022.",
                "D'autres sports font la fierté du monde hispanique : le tennis, avec le joueur espagnol Rafael Nadal, quatorze fois vainqueur du tournoi de Roland-Garros, ou la pelote basque (« la pelota vasca »), jouée au Pays basque avec la main ou avec une raquette, contre un mur appelé « el frontón ».",
              ],
            },
            {
              heading: "Présenter ses loisirs en continu",
              paragraphs: [
                "Pour parler une minute de vos loisirs, répondez à cinq questions dans l'ordre : ¿Qué haces? (quoi), ¿Cuándo? (quand, avec la fréquence), ¿Dónde? (où), ¿Con quién? (avec qui) et ¿Por qué te gusta? (pourquoi). Par exemple : « Juego al fútbol en el club de mi pueblo con mis amigos. Entrenamos los martes y los jueves y solemos jugar un partido el sábado. Me encanta porque es un deporte de equipo ».",
              ],
              box: { label: "Repère", text: "Plan d'une présentation : ¿Qué? → ¿Cuándo? → ¿Dónde? → ¿Con quién? → ¿Por qué? Variez les verbes (jugar, tocar, hacer, ir) et utilisez au moins deux expressions de fréquence." },
            },
          ],
          keyPoints: [
            "jugar a + sport ou jeu (juego al tenis) ; tocar + instrument (toco el piano).",
            "hacer deporte, natación, judo, senderismo ; ir a la piscina, al cine.",
            "Fréquence : siempre, casi siempre, a menudo, a veces, casi nunca, nunca.",
            "Nunca devant le verbe sans « no » ; après le verbe avec « no » : no juego nunca.",
            "Soler + infinitif = avoir l'habitude de : suelo nadar los sábados.",
            "Présenter : ¿Qué? ¿Cuándo? ¿Dónde? ¿Con quién? ¿Por qué?",
          ],
          example: {
            statement: "Présentez en espagnol les loisirs de Daniel (données fictives) : il joue au basket deux fois par semaine dans l'équipe du collège, il joue de la guitare le week-end, et il ne va jamais à la piscine parce qu'il n'aime pas l'eau froide.",
            solution: [
              "Le basket est un sport : jugar a + al : « Daniel juega al baloncesto dos veces a la semana en el equipo del colegio ».",
              "La guitare est un instrument : tocar, sans préposition : « Los fines de semana, toca la guitarra ».",
              "« ne... jamais » : nunca devant le verbe, sans « no » : « Nunca va a la piscina ».",
              "« il n'aime pas l'eau froide » : pronom « le », gusta (singulier) ; « agua » est féminin mais prend l'article « el » : « porque no le gusta el agua fría ».",
              "Réponse : « Daniel juega al baloncesto dos veces a la semana en el equipo del colegio. Los fines de semana, toca la guitarra. Nunca va a la piscina porque no le gusta el agua fría. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec jugar, tocar ou hacer conjugué au présent : a) Mi hermano ... al tenis. b) Yo ... el piano. c) Nosotros ... deporte todos los días. d) ¿Tú ... a los videojuegos? e) Mis primas ... la batería. f) Yo ... judo los miércoles.",
              hint: "Un sport ou un jeu avec « a » : jugar. Un instrument : tocar. Une activité en général : hacer. Pensez à la diphtongue de jugar et à la forme hago.",
              solution: [
                "a) sport : « Mi hermano juega al tenis ».",
                "b) instrument : « Yo toco el piano ».",
                "c) activité générale : « Nosotros hacemos deporte todos los días ».",
                "d) jeu : « ¿Tú juegas a los videojuegos? ».",
                "e) instrument : « Mis primas tocan la batería ».",
                "f) activité, 1re personne irrégulière : « Yo hago judo los miércoles ».",
              ],
            },
            {
              level: 2,
              statement: "Traduisez : a) Je vais souvent à la piscine. b) Nous ne jouons jamais aux cartes (deux traductions). c) Ma sœur fait de la randonnée une fois par mois. d) D'habitude, je vais au cinéma le samedi (employez soler).",
              hint: "Pour « jamais », pensez aux deux places possibles de nunca. Pour « le samedi » au sens de « chaque samedi », on emploie l'article pluriel : los sábados.",
              solution: [
                "a) « Voy a menudo a la piscina » (ou « A menudo voy a la piscina »).",
                "b) « Nunca jugamos a las cartas » ou « No jugamos nunca a las cartas ».",
                "c) « Mi hermana hace senderismo una vez al mes ».",
                "d) soler (o → ue) + infinitif : « Suelo ir al cine los sábados ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : préparez une présentation orale d'environ une minute (8 à 10 phrases) sur les loisirs d'Irene, une collégienne de Salamanque (données fictives). Elle fait de la natation le lundi et le jeudi au complexe sportif, joue du violon dans l'orchestre du collège, retrouve souvent ses amies le samedi, ne joue presque jamais aux jeux vidéo et adore la natation parce que cela la détend (relajar). Suivez le plan du cours et employez soler au moins une fois.",
              hint: "Suivez l'ordre ¿Qué? ¿Cuándo? ¿Dónde? ¿Con quién? ¿Por qué? Attention : natation avec hacer, violon avec tocar, jeux vidéo avec jugar a.",
              solution: [
                "Présentation : « Irene tiene trece años y vive en Salamanca. »",
                "Quoi, quand, où : « Hace natación los lunes y los jueves en el polideportivo. »",
                "Instrument : « También toca el violín en la orquesta del colegio. »",
                "Amis et fréquence : « Los sábados suele quedar con sus amigas: a menudo van al cine o al parque. »",
                "Fréquence négative : « Casi nunca juega a los videojuegos. »",
                "Pourquoi : « Le encanta la natación porque la relaja. »",
                "Vérification : trois verbes différents (hacer, tocar, jugar a), au moins deux expressions de fréquence (los lunes, a menudo, casi nunca), soler + infinitif, et une raison avec porque.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces adverbes de fréquence, du plus fréquent au plus rare.",
            items: ["siempre", "casi siempre", "a menudo", "a veces", "casi nunca", "nunca"],
          },
          quiz: [
            { q: "Comment dit-on « je joue de la guitare » ?", options: ["Juego a la guitarra.", "Toco la guitarra.", "Hago la guitarra.", "Juego la guitarra."], answer: 1, why: "Pour un instrument de musique, on emploie tocar, sans préposition." },
            { q: "Complétez : « Los domingos jugamos ... fútbol. »", options: ["el", "a", "en", "al"], answer: 3, why: "Jugar a + el fútbol donne « al fútbol » par contraction." },
            { q: "« Suelo correr por la mañana » signifie :", options: ["Je cours rarement le matin.", "J'ai l'habitude de courir le matin.", "Je ne cours jamais le matin, je préfère le soir.", "Je cours seul le matin."], answer: 1, why: "Soler + infinitif exprime l'habitude : d'habitude, je cours le matin." },
            { q: "Quelle phrase est correcte ?", options: ["Nunca voy al gimnasio.", "No nunca voy al gimnasio.", "Voy nunca al gimnasio."], answer: 0, why: "Devant le verbe, nunca s'emploie seul ; après le verbe, il faut « no » : no voy nunca." },
            { q: "Quelle équipe nationale a remporté la Coupe du monde féminine de football en 2023 ?", options: ["l'Argentine", "le Mexique", "l'Espagne", "la Colombie"], answer: 2, why: "L'équipe d'Espagne féminine a gagné la Coupe du monde en 2023, treize ans après l'équipe masculine (2010)." },
          ],
          trap: "Traduire « jouer de la guitare » par « jugar a la guitarra » : pour un instrument, on emploie « tocar ». Autre erreur fréquente : écrire « no nunca » devant le verbe ; « nunca » placé devant le verbe s'emploie seul.",
          method: "Préparez votre présentation sur une fiche avec seulement cinq mots-clés, un par question (¿Qué? ¿Cuándo? ¿Dónde? ¿Con quién? ¿Por qué?). Entraînez-vous à voix haute en vous chronométrant : visez une minute sans lire de phrases toutes faites.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tambien-tampoco',
          title: 'Exprimer l\'accord et le désaccord : también, tampoco',
          minutes: 25,
          objectives: [
            "Exprimer l'accord avec también et tampoco, selon que la phrase de départ est affirmative ou négative.",
            "Exprimer le désaccord avec sí et no.",
            "Choisir entre « yo también » et « a mí también » selon la construction du verbe.",
            "Réagir et dialoguer en donnant son avis (estar de acuerdo, tener razón, creo que...).",
          ],
          course: [
            {
              heading: "Aussi, non plus : también et tampoco",
              paragraphs: [
                "Pour dire que vous êtes dans la même situation que votre interlocuteur, deux mots suffisent. Si sa phrase est affirmative, répondez avec « también » (aussi) : « Tengo un perro. » « Yo también. » (moi aussi). Si sa phrase est négative, répondez avec « tampoco » (non plus) : « No tengo hermanos. » « Yo tampoco. » (moi non plus).",
                "Pour dire que vous êtes dans la situation contraire, vous répondez avec « no » ou « sí ». À une phrase affirmative, on répond « Yo no » (pas moi) : « Tengo un perro. » « Yo no. ». À une phrase négative, on répond « Yo sí » (moi si) : « No tengo hermanos. » « Yo sí, tengo dos. ». Le mot « sí » porte un accent quand il signifie « oui ».",
              ],
              box: { label: "Règle", text: "Phrase affirmative : accord = también ; désaccord = no. Phrase négative : accord = tampoco ; désaccord = sí. Exemples : Juego al tenis. Yo también / Yo no. No juego al tenis. Yo tampoco / Yo sí." },
            },
            {
              heading: "« Yo también » ou « a mí también » ?",
              paragraphs: [
                "La réponse reprend la construction du verbe de départ. Avec un verbe ordinaire, dont la personne est le sujet (jugar, tener, ir, ser, preferir...), on répond avec un pronom sujet : « Yo también », « Yo tampoco », « Yo sí », « Yo no ». Avec un verbe qui se construit comme gustar (encantar, interesar, aburrir), on répond avec « a mí » : « A mí también », « A mí tampoco », « A mí sí », « A mí no ».",
                "Comparez : « Voy al cine. » « Yo también. » mais « Me gusta el cine. » « A mí también. ». La même règle vaut pour les autres personnes : « Mi hermano también » (verbe ordinaire), « A mi hermano tampoco » (verbe comme gustar), « Nosotros sí », « A nosotros no ».",
              ],
              box: { label: "À retenir", text: "Verbe ordinaire → yo también, yo tampoco, yo sí, yo no. Verbe comme gustar → a mí también, a mí tampoco, a mí sí, a mí no." },
            },
            {
              heading: "Tampoco dans une phrase complète",
              paragraphs: [
                "« Tampoco » fonctionne comme « nunca ». Placé devant le verbe, il s'emploie seul : « Yo tampoco voy a la fiesta », « Tampoco me gusta el té ». Placé après le verbe, il exige « no » devant le verbe : « No voy a la fiesta tampoco », « No me gusta tampoco el té ». En revanche, « tampoco no » placé devant le verbe est une faute.",
                "Pour rejeter deux choses à la fois, on emploie « ni... ni... » (ni... ni...) avec « no » devant le verbe : « No juego ni al tenis ni al fútbol », « No tengo ni perro ni gato ».",
              ],
            },
            {
              heading: "Donner son avis et réagir",
              paragraphs: [
                "Pour dialoguer, vous pouvez aussi réagir à une opinion. Pour approuver : « Estoy de acuerdo » (je suis d'accord), « Estoy de acuerdo contigo » (avec toi), « Tienes razón » (tu as raison), « ¡Claro! » (bien sûr). Pour désapprouver : « No estoy de acuerdo », « No tienes razón », « ¡Qué va! » (familier : pas du tout !). Pour nuancer : « Depende » (ça dépend).",
                "Pour introduire votre propre avis : « Creo que... » (je crois que), « Pienso que... » (je pense que, avec la diphtongue de pensar), « Para mí... » (pour moi). Pour répondre brièvement à une question : « Creo que sí » (je crois que oui), « Creo que no » (je crois que non). Remarquez « estar de acuerdo » : on dit toujours « estoy de acuerdo », avec estar.",
              ],
              box: { label: "À retenir", text: "Estoy de acuerdo (contigo) / No estoy de acuerdo. Tienes razón. ¡Claro! ¡Qué va! Depende. Creo que... Pienso que... Para mí... Creo que sí / Creo que no." },
            },
          ],
          keyPoints: [
            "Affirmative : también (accord), no (désaccord). Négative : tampoco (accord), sí (désaccord).",
            "Verbe ordinaire : yo también, yo tampoco. Verbe comme gustar : a mí también, a mí tampoco.",
            "Tampoco devant le verbe sans « no » ; après le verbe avec « no ».",
            "No... ni... ni... : no juego ni al tenis ni al fútbol.",
            "Estoy de acuerdo, tienes razón, creo que sí, creo que no, para mí...",
          ],
          example: {
            statement: "Réagissez à chaque phrase de votre ami Lucas : a) « Me encanta el baloncesto. » (vous êtes d'accord) ; b) « No juego al tenis. » (vous êtes d'accord) ; c) « Prefiero el verano. » (vous n'êtes pas d'accord) ; d) « No me gustan las verduras. » (vous n'êtes pas d'accord).",
            solution: [
              "a) Phrase affirmative, verbe comme gustar, accord : « A mí también ».",
              "b) Phrase négative, verbe ordinaire, accord : « Yo tampoco ».",
              "c) Phrase affirmative, verbe ordinaire, désaccord : « Yo no, prefiero el invierno ».",
              "d) Phrase négative, verbe comme gustar, désaccord : « A mí sí, me encantan ».",
              "Réponse : a) A mí también. b) Yo tampoco. c) Yo no. d) A mí sí.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec también ou tampoco pour exprimer l'accord : a) « Me gusta el chocolate. » « A mí ... » b) « No tengo hermanos. » « Yo ... » c) « Vivo en un piso. » « Yo ... » d) « No me interesa la política. » « A mí ... » e) « No sé nadar. » « Yo ... »",
              hint: "Regardez seulement si la phrase de départ contient « no » : si oui, tampoco ; sinon, también.",
              solution: [
                "a) Phrase affirmative : « A mí también ».",
                "b) Phrase négative : « Yo tampoco ».",
                "c) Phrase affirmative : « Yo también ».",
                "d) Phrase négative : « A mí tampoco ».",
                "e) Phrase négative : « Yo tampoco ».",
              ],
            },
            {
              level: 2,
              statement: "Réagissez comme indiqué, en choisissant entre « yo » et « a mí » : a) « Juego al fútbol. » (d'accord) b) « Me aburren los museos. » (pas d'accord) c) « No voy al cine los lunes. » (d'accord) d) « No me gusta madrugar. » (pas d'accord) e) « Soy muy puntual. » (pas d'accord) f) « Mis amigos prefieren el rap. » (votre frère est d'accord ; commencez par « Mi hermano »).",
              hint: "Deux questions à chaque fois : la phrase est-elle affirmative ou négative ? Le verbe se construit-il comme gustar ?",
              solution: [
                "a) Affirmative, verbe ordinaire, accord : « Yo también ».",
                "b) Affirmative, aburrir se construit comme gustar, désaccord : « A mí no ».",
                "c) Négative, verbe ordinaire, accord : « Yo tampoco ».",
                "d) Négative, gustar, désaccord : « A mí sí ».",
                "e) Affirmative, ser est un verbe ordinaire, désaccord : « Yo no ».",
                "f) Affirmative, preferir est un verbe ordinaire, accord : « Mi hermano también ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : votre correspondante mexicaine, Ximena, vous écrit (données fictives) : « No me gusta nada el invierno. Me encantan los animales. No hago deporte. Creo que los deberes son inútiles. » Répondez à chacune de ses phrases en exprimant l'accord ou le désaccord avec la bonne construction, et complétez chaque réaction par une courte justification. Pour la dernière, donnez votre avis avec une expression du cours.",
              hint: "Les deux premières phrases emploient des verbes comme gustar (a mí), la troisième un verbe ordinaire (yo). Pour la quatrième, pensez à estar de acuerdo, tener razón, creo que, para mí.",
              solution: [
                "1) Phrase négative avec gustar. Accord : « A mí tampoco, prefiero el verano. » Désaccord : « A mí sí, me encanta la nieve. »",
                "2) Phrase affirmative avec encantar. Accord : « A mí también, tengo un perro y dos gatos. » Désaccord : « A mí no, me dan miedo los perros. »",
                "3) Phrase négative avec un verbe ordinaire. Accord : « Yo tampoco, prefiero leer. » Désaccord : « Yo sí, juego al balonmano tres veces a la semana. »",
                "4) Avis : « No estoy de acuerdo contigo: para mí, los deberes son útiles para aprender. » ou « Tienes razón, creo que hay demasiados deberes. »",
                "Vérification : a mí avec les verbes comme gustar, yo avec les verbes ordinaires ; tampoco et sí après une phrase négative, también et no après une phrase affirmative.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces réactions sont-elles correctes ?",
            statements: [
              { text: "À « Juego al tenis », on répond « moi aussi » par « A mí también ».", true: false, why: "Jugar est un verbe ordinaire : on répond « Yo también »." },
              { text: "« No me gusta el queso. » « A mí tampoco. » exprime l'accord.", true: true, why: "Phrase négative et verbe gustar : a mí tampoco = moi non plus." },
              { text: "« Tampoco » signifie « non plus ».", true: true, why: "Tampoco répond à une phrase négative : yo tampoco = moi non plus." },
              { text: "« Yo tampoco no voy » est correct.", true: false, why: "Devant le verbe, tampoco s'emploie seul : « Yo tampoco voy »." },
              { text: "« No voy tampoco » est correct.", true: true, why: "Après le verbe, tampoco exige « no » devant le verbe." },
              { text: "Pour contredire « No me gustan los lunes », on dit « A mí no ».", true: false, why: "Pour contredire une phrase négative, on dit « A mí sí »." },
              { text: "« Tienes razón » signifie « tu as raison ».", true: true, why: "Tener razón = avoir raison." },
            ],
          },
          quiz: [
            { q: "Votre amie dit : « No tengo móvil. » Vous non plus. Vous répondez :", options: ["Yo también.", "A mí tampoco.", "Yo tampoco.", "Yo sí."], answer: 2, why: "Phrase négative et verbe ordinaire (tener) : yo tampoco." },
            { q: "« Me encanta el chocolate. » Vous n'êtes pas d'accord. Vous dites :", options: ["A mí no.", "Yo no.", "A mí sí.", "A mí tampoco."], answer: 0, why: "Phrase affirmative et verbe comme gustar : on contredit avec « a mí no »." },
            { q: "Quelle phrase est correcte ?", options: ["Tampoco no me gusta.", "No me gusta tampoco.", "No tampoco me gusta."], answer: 1, why: "Après le verbe, tampoco exige « no » devant le verbe ; devant le verbe, il s'emploie seul." },
            { q: "Comment dit-on « je suis d'accord avec toi » ?", options: ["Soy completamente de acuerdo contigo.", "Tengo acuerdo contigo.", "Estoy de acuerdo contigo.", "Estoy de acuerdo con tú."], answer: 2, why: "On dit « estar de acuerdo », et « avec toi » se dit « contigo »." },
            { q: "« ¡Qué va! » sert à :", options: ["approuver avec enthousiasme", "contredire familièrement", "saluer un ami", "demander l'heure"], answer: 1, why: "« ¡Qué va! » est une façon familière de dire « pas du tout ! »." },
          ],
          trap: "Répondre « yo también » à une phrase négative au lieu de « yo tampoco », ou « a mí también » après un verbe ordinaire comme jugar ou tener. Autre erreur : « tampoco no » devant le verbe.",
          method: "Avant de réagir, faites un double contrôle en deux secondes : y a-t-il un « no » dans la phrase entendue (también ou tampoco) ? Le verbe est-il comme gustar (a mí) ou ordinaire (yo) ? Entraînez-vous à deux : l'un dit une phrase sur ses goûts ou ses habitudes, l'autre réagit le plus vite possible.",
        },
      ],
    },
    {
      id: 'colegio-vida-diaria',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'rutina-diaria',
          title: 'La journée : verbes pronominaux et heure',
          minutes: 35,
          objectives: [
            "Demander et dire l'heure (¿Qué hora es?, ¿A qué hora...?).",
            "Conjuguer au présent les verbes pronominaux de la routine, y compris ceux à diphtongue.",
            "Placer correctement le pronom réfléchi (me levanto, quiero levantarme).",
            "Raconter sa journée en ordonnant les actions avec des connecteurs de temps.",
          ],
          course: [
            {
              heading: "Dire l'heure",
              paragraphs: [
                "Pour demander l'heure, on dit « ¿Qué hora es? ». Pour répondre, on emploie le verbe ser et l'article féminin, car on sous-entend le mot « hora » : « Es la una » (il est une heure), au singulier, puis au pluriel pour toutes les autres heures : « Son las dos », « Son las diez ». On peut ajouter « en punto » pour une heure pile : « Son las ocho en punto ».",
                "Jusqu'à la demie, on ajoute les minutes avec « y » : « Son las tres y diez » (3 h 10), « Son las tres y cuarto » (3 h 15), « Son las tres y media » (3 h 30). Après la demie, on part de l'heure suivante et on retire les minutes avec « menos » : « Son las cuatro menos veinte » (3 h 40), « Son las cuatro menos cuarto » (3 h 45), « Es la una menos diez » (12 h 50).",
              ],
              box: { label: "Règle", text: "Es la una (1 h). Son las dos, las tres... + y cinco, y cuarto, y media (jusqu'à la demie). Après la demie : heure suivante + menos : son las cinco menos cuarto (4 h 45). En punto = pile." },
            },
            {
              heading: "À quelle heure ? Les moments de la journée",
              paragraphs: [
                "Pour demander à quelle heure a lieu une action, on dit « ¿A qué hora...? » et on répond avec « a la » ou « a las » : « ¿A qué hora empieza la clase? A las ocho y media », « Como a la una ». Pour préciser le moment, on ajoute après l'heure « de la mañana » (du matin), « de la tarde » (de l'après-midi) ou « de la noche » (du soir) : « a las nueve de la noche ».",
                "Sans heure précise, on emploie « por » : « por la mañana » (le matin), « por la tarde » (l'après-midi), « por la noche » (le soir). On dit aussi « al mediodía » (à midi) et « a medianoche » (à minuit). Pour les horaires officiels, comme ceux des trains, on utilise souvent les 24 heures : « El tren sale a las 18:30 » (a las dieciocho treinta).",
                "Repère culturel : en Espagne, on mange plus tard qu'en France. Le déjeuner (« la comida ») a souvent lieu vers 14 h et le dîner (« la cena ») vers 21 h, voire plus tard. Le mot « comer » signifie manger mais aussi déjeuner : « Como a las dos » veut dire « je déjeune à 14 h ».",
              ],
              box: { label: "À retenir", text: "Avec une heure : a las cinco de la tarde. Sans heure : por la tarde. ¿A qué hora...? → a la una, a las siete. Al mediodía, a medianoche." },
            },
            {
              heading: "Les verbes pronominaux de la routine",
              paragraphs: [
                "Les actions de la journée sont souvent exprimées par des verbes pronominaux : levantarse (se lever), ducharse (se doucher), lavarse los dientes (se brosser les dents), peinarse (se coiffer). Plusieurs ont une diphtongue ou un changement de voyelle : despertarse (ie) → me despierto ; acostarse (ue) → me acuesto ; dormirse (ue) → me duermo ; vestirse (i) → me visto. Attention : « desayunar » (prendre le petit déjeuner) n'est pas pronominal : « desayuno a las siete ».",
                "Au présent, le pronom réfléchi se place devant le verbe conjugué : me, te, se, nos, os, se. Avec un infinitif, il se soude à la fin de l'infinitif : « Quiero levantarme tarde », « Antes de ducharme, desayuno ». On peut aussi le placer devant le verbe conjugué : « Me quiero levantar tarde » est également correct. Pour les parties du corps, on emploie l'article et non le possessif : « me lavo los dientes », « se peina el pelo ».",
              ],
              box: { label: "Conjugaison", text: "acostarse : me acuesto, te acuestas, se acuesta, nos acostamos, os acostáis, se acuestan. vestirse : me visto, te vistes, se viste, nos vestimos, os vestís, se visten." },
            },
            {
              heading: "Raconter sa journée",
              paragraphs: [
                "Pour raconter votre journée dans l'ordre, utilisez des connecteurs de temps : primero (d'abord), luego et después (ensuite, puis), más tarde (plus tard), por último ou al final (enfin). Vous pouvez aussi employer « antes de » (avant de) et « después de » (après) suivis d'un infinitif : « Después de comer, hago los deberes ».",
                "Exemple : « Primero, me despierto a las siete menos cuarto. Luego me levanto, me ducho y me visto. Desayuno a las siete y media y salgo de casa a las ocho. Por la tarde, después de clase, hago los deberes. Ceno a las ocho y media y, por último, me acuesto a las diez. »",
              ],
            },
          ],
          keyPoints: [
            "¿Qué hora es? Es la una ; son las dos, las tres...",
            "y cuarto, y media jusqu'à la demie ; ensuite heure suivante + menos : las cinco menos cuarto = 4 h 45.",
            "a las ocho de la mañana (heure précise) / por la mañana (sans heure).",
            "Pronominaux : me despierto (ie), me acuesto (ue), me visto (i), me levanto, me ducho.",
            "Pronom devant le verbe conjugué, soudé à l'infinitif : quiero levantarme.",
            "Connecteurs : primero, luego, después, más tarde, por último ; antes de, después de + infinitif.",
          ],
          example: {
            statement: "Écrivez en espagnol, avec les heures en toutes lettres : « Je me réveille à 6 h 45 et je me lève à 7 h. Je me douche puis je m'habille. Je me couche à 22 h 15. »",
            solution: [
              "6 h 45 est après la demie : on part de 7 h et on retire un quart : « a las siete menos cuarto ». Despertarse a une diphtongue : « me despierto ».",
              "7 h pile : « me levanto a las siete (en punto) ».",
              "Ducharse est régulier ; vestirse change e en i : « me ducho y luego me visto ».",
              "22 h 15 : « a las diez y cuarto de la noche ». Acostarse a une diphtongue : « me acuesto ».",
              "Réponse : « Me despierto a las siete menos cuarto y me levanto a las siete. Me ducho y luego me visto. Me acuesto a las diez y cuarto de la noche. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez l'heure en toutes lettres, en commençant par « Es » ou « Son » : a) 8 h 00 ; b) 1 h 30 ; c) 9 h 15 ; d) 4 h 45 ; e) 10 h 35 ; f) 12 h 50.",
              hint: "Après la demie, partez de l'heure suivante et retirez les minutes avec « menos ». Une heure (même « la una menos... ») demande « Es ».",
              solution: [
                "a) « Son las ocho (en punto) ».",
                "b) « Es la una y media ».",
                "c) « Son las nueve y cuarto ».",
                "d) 4 h 45 = 5 h moins le quart : « Son las cinco menos cuarto ».",
                "e) 10 h 35 = 11 h moins 25 : « Son las once menos veinticinco ».",
                "f) 12 h 50 = 1 h moins 10 : « Es la una menos diez ».",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez le verbe pronominal au présent : a) Mi padre (despertarse) a las seis. b) Nosotros (acostarse) tarde los sábados. c) ¿A qué hora (levantarse) tú? d) Mis hermanas (vestirse) muy rápido. e) Yo (lavarse) los dientes después de desayunar. f) Vosotros (dormirse) en el sofá.",
              hint: "N'oubliez pas le pronom réfléchi devant le verbe, et appliquez la règle de la botte pour despertarse (ie), acostarse (ue), vestirse (i) et dormirse (ue).",
              solution: [
                "a) « Mi padre se despierta a las seis » (e → ie).",
                "b) « Nosotros nos acostamos tarde los sábados » (nosotros : pas de diphtongue).",
                "c) « ¿A qué hora te levantas tú? ».",
                "d) « Mis hermanas se visten muy rápido » (e → i).",
                "e) « Yo me lavo los dientes después de desayunar ».",
                "f) « Vosotros os dormís en el sofá » (vosotros : pas de diphtongue).",
              ],
            },
            {
              level: 3,
              statement: "Défi : racontez la journée d'Inés à la 3e personne (données fictives), avec les heures en toutes lettres et au moins quatre connecteurs différents. 7 h 10 : elle se réveille ; 7 h 20 : elle se lève et se douche ; 7 h 40 : petit déjeuner ; 8 h 05 : elle part au collège ; 14 h 30 : elle rentre et déjeune ; 17 h : devoirs ; 21 h 30 : dîner ; 22 h 45 : elle se couche.",
              hint: "Attention aux heures après la demie (7 h 40, 22 h 45) et aux verbes : despertarse (ie), salir de casa, volver (ue), comer, cenar, acostarse (ue).",
              solution: [
                "« Primero, Inés se despierta a las siete y diez. »",
                "« Luego, a las siete y veinte, se levanta y se ducha. »",
                "« Desayuna a las ocho menos veinte y sale de casa para ir al instituto a las ocho y cinco. »",
                "« Después, a las dos y media de la tarde, vuelve a casa y come. »",
                "« Más tarde, a las cinco, hace los deberes. Cena a las nueve y media de la noche y, por último, se acuesta a las once menos cuarto. »",
                "Vérification : 7 h 40 = las ocho menos veinte ; 22 h 45 = las once menos cuarto ; connecteurs employés : primero, luego, después, más tarde, por último.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez la journée de Pablo dans l'ordre chronologique, en lisant bien les heures.",
            items: [
              "Me despierto a las siete menos cuarto.",
              "Me levanto a las siete.",
              "Desayuno a las siete y cuarto.",
              "Salgo de casa a las ocho menos veinte.",
              "Como a la una y media.",
              "Hago los deberes a las cinco y media de la tarde.",
              "Me acuesto a las diez de la noche.",
            ],
          },
          quiz: [
            { q: "Comment dit-on 3 h 45 ?", options: ["Son las tres y cuarto.", "Son las cuatro y cuarto de la tarde.", "Son las cuatro menos cuarto.", "Son las tres menos cuarto."], answer: 2, why: "Après la demie, on part de l'heure suivante (las cuatro) et on retire un quart (menos cuarto)." },
            { q: "Complétez : « Mis padres ... a las seis. » (despertarse)", options: ["se despiertan", "nos despertamos", "despiertan", "se despertan"], answer: 0, why: "Pronom « se » pour ellos, et diphtongue e → ie à cette personne : se despiertan." },
            { q: "Où placer le pronom ? « Quiero ... temprano. »", options: ["me levantar", "levantarme", "levantar me", "levantarse"], answer: 1, why: "Avec un infinitif, le pronom se soude à la fin : quiero levantarme." },
            { q: "Quand emploie-t-on « por la tarde » ?", options: ["avec une heure précise : a las cinco por la tarde", "sans heure précise : por la tarde hago deporte", "uniquement après minuit"], answer: 1, why: "Avec une heure précise, on dit « de la tarde » ; sans heure, « por la tarde »." },
            { q: "Que signifie « Me lavo los dientes » ?", options: ["Je me lave les mains.", "Je lave mes dents de lait.", "Je m'habille.", "Je me brosse les dents."], answer: 3, why: "Lavarse los dientes = se brosser les dents ; on emploie l'article (los) et non le possessif." },
          ],
          trap: "Dire « son las tres menos cuarto » pour 3 h 45, alors que cela signifie 2 h 45 : après la demie, on part de l'heure suivante, « son las cuatro menos cuarto ». Autre erreur : oublier le pronom réfléchi (« levanto a las siete ») ou dire « son la una ».",
          method: "Entraînez-vous avec une horloge à aiguilles : la moitié droite du cadran (de l'heure pile à la demie) se dit avec « y », la moitié gauche (après la demie) avec l'heure suivante et « menos ». Pendant une semaine, dites l'heure en espagnol chaque fois que vous regardez une montre.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'colegio-hispano',
          title: 'Le collège en Espagne et en Amérique latine',
          minutes: 30,
          objectives: [
            "Utiliser le vocabulaire du collège : lieux, matières, emploi du temps, notes.",
            "Décrire son emploi du temps et son collège.",
            "Comparer l'organisation de l'école en France, en Espagne et dans quelques pays d'Amérique latine.",
            "Repérer dans un document oral les informations clés : horaires, jours, matières.",
          ],
          course: [
            {
              heading: "Le vocabulaire du collège",
              paragraphs: [
                "Les lieux : el instituto (l'établissement secondaire), el aula (la salle de classe ; féminin, mais « el » devant le a accentué), la biblioteca, el patio (la cour), el comedor (la cantine), el gimnasio. Les personnes : el profesor, la profesora, el alumno, la alumna, el director, la directora, los compañeros de clase (les camarades).",
                "Les objets : la mochila (le sac), el cuaderno (le cahier), el libro, el estuche (la trousse), el bolígrafo ou el boli (le stylo), la regla, la goma (la gomme), la pizarra (le tableau). Les actions : estudiar, aprender, hacer los deberes, sacar buenas notas (avoir de bonnes notes), aprobar un examen (réussir un examen, verbe en ue : apruebo) et suspender un examen (échouer à un examen).",
              ],
              box: { label: "À retenir", text: "el instituto, el aula, el patio, el comedor, el recreo (la récréation), el horario (l'emploi du temps), la asignatura (la matière), los deberes, la nota, aprobar (réussir) / suspender (échouer)." },
            },
            {
              heading: "Les matières et l'emploi du temps",
              paragraphs: [
                "Les matières (las asignaturas) : las matemáticas, la lengua (le cours d'espagnol pour les élèves espagnols), el inglés, el francés, la historia, la geografía, la biología, la física y química, la tecnología, la música, la educación física. Comme les jours de la semaine, les noms de matières s'écrivent sans majuscule en espagnol.",
                "Pour décrire votre emploi du temps : « Los lunes tengo matemáticas a primera hora » (le lundi, en première heure), « Las clases empiezan a las ocho y media y terminan a las cinco », « El recreo dura quince minutos », « Mi asignatura preferida es la historia porque el profesor es muy interesante ». Remarquez : « el lunes » désigne un lundi précis, « los lunes » signifie tous les lundis.",
              ],
              box: { label: "Repère", text: "Los lunes tengo inglés de las nueve a las diez. Las clases empiezan a... y terminan a... Mi asignatura preferida es... porque... Se escribe sin mayúscula : el martes, la historia." },
            },
            {
              heading: "L'école en Espagne",
              paragraphs: [
                "En Espagne, les enfants vont d'abord à l'école primaire (la Educación Primaria), de 6 à 12 ans, dans un « colegio ». Ensuite vient la ESO (Educación Secundaria Obligatoria), qui dure quatre ans, de 12 à 16 ans, en général dans un « instituto ». Un élève de 4e en France a donc à peu près l'âge d'un élève de « segundo de ESO ». Après la ESO, les élèves peuvent préparer le Bachillerato, en deux ans, ou suivre une formation professionnelle.",
                "Les notes vont de 0 à 10 et il faut 5 pour réussir. On dit d'un élève qu'il « aprueba » (il réussit) ou qu'il « suspende » (il échoue). Une très bonne note, 9 ou 10, est un « sobresaliente ». Dans beaucoup d'instituts, les cours ont lieu en journée continue, le matin et jusqu'au début de l'après-midi, puis les élèves déjeunent chez eux. L'année scolaire va de septembre à juin. L'uniforme est rare dans les établissements publics, mais fréquent dans de nombreux établissements privés.",
              ],
            },
            {
              heading: "L'école en Amérique latine",
              paragraphs: [
                "L'organisation varie selon les pays. Au Mexique, après l'école primaire, les élèves vont trois ans à « la secundaria », de 12 à 15 ans environ, puis à « la preparatoria » ou au « bachillerato ». Dans de nombreux pays d'Amérique latine, l'uniforme est courant ; en Argentine, les élèves des écoles primaires publiques portent souvent une blouse blanche, « el guardapolvo blanco ».",
                "Dans les pays de l'hémisphère sud, comme l'Argentine, le Chili ou l'Uruguay, les saisons sont inversées par rapport à l'Europe : l'année scolaire commence en mars et se termine en décembre, et les grandes vacances ont lieu pendant l'été austral, de décembre à février. Dans plusieurs pays, certaines écoles accueillent deux groupes d'élèves différents dans la même journée : le « turno de mañana » (le matin) et le « turno de tarde » (l'après-midi).",
              ],
            },
            {
              heading: "Comprendre un document oral sur l'école",
              paragraphs: [
                "Quand vous écoutez un élève hispanophone parler de son collège, ne cherchez pas à tout comprendre. Avant l'écoute, faites la liste des mots que vous risquez d'entendre (asignaturas, horario, recreo, notas). À la première écoute, repérez qui parle, d'où il vient et son âge. À la deuxième, notez les nombres, les heures et les jours. À la troisième, cherchez ce qu'il aime ou n'aime pas, grâce à « me gusta », « me encanta », « odio » ou « prefiero ».",
              ],
              box: { label: "Méthode", text: "Écoute 1 : qui ? où ? Écoute 2 : chiffres, heures, jours, matières. Écoute 3 : opinions (me gusta, prefiero, odio) et raisons (porque). Notez des mots-clés, pas des phrases." },
            },
          ],
          keyPoints: [
            "el aula, el recreo, el horario, la asignatura, los deberes, sacar buenas notas.",
            "aprobar (ue) = réussir un examen ; suspender = échouer.",
            "Espagne : Primaria (6-12 ans), ESO (12-16 ans, 4 ans), puis Bachillerato (2 ans).",
            "Notes de 0 à 10, il faut 5 pour réussir ; sobresaliente = 9 ou 10.",
            "Hémisphère sud (Argentine, Chili, Uruguay) : année scolaire de mars à décembre.",
            "Los lunes = tous les lundis ; jours et matières sans majuscule.",
          ],
          example: {
            statement: "Lisez cette présentation (données fictives) et répondez en français : à quelle classe française correspond celle de Sofía ? Quels sont ses horaires ? Quelle est sa matière préférée ? « Me llamo Sofía, tengo trece años y estoy en segundo de ESO en un instituto de Zaragoza. Las clases empiezan a las ocho y media y terminan a las dos y media. Tenemos un recreo de media hora a las once. Mi asignatura preferida es la biología, pero odio las matemáticas. »",
            solution: [
              "« segundo de ESO » : deuxième année de la ESO, élèves de 13 à 14 ans, ce qui correspond à peu près à la 4e en France.",
              "« empiezan a las ocho y media y terminan a las dos y media » : les cours ont lieu de 8 h 30 à 14 h 30 (journée continue).",
              "« un recreo de media hora a las once » : une récréation de 30 minutes à 11 h.",
              "« Mi asignatura preferida es la biología, pero odio las matemáticas » : elle préfère la biologie et déteste les mathématiques.",
              "Réponse : Sofía est en « segundo de ESO », l'équivalent de la 4e ; elle a cours de 8 h 30 à 14 h 30, avec une récréation de 30 minutes à 11 h ; sa matière préférée est la biologie.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol, avec l'article : a) la cantine ; b) la récréation ; c) l'emploi du temps ; d) les devoirs ; e) réussir un examen ; f) la trousse ; g) la matière.",
              hint: "Relisez l'encadré « À retenir » de la première partie. Attention aux faux amis : « el horario » et « la asignatura ».",
              solution: [
                "a) el comedor.",
                "b) el recreo.",
                "c) el horario.",
                "d) los deberes.",
                "e) aprobar un examen.",
                "f) el estuche.",
                "g) la asignatura.",
              ],
            },
            {
              level: 2,
              statement: "Décrivez en espagnol, en cinq phrases, le lundi de Hugo (données fictives) : 8 h 30 à 9 h 30 mathématiques ; 9 h 30 à 10 h 30 espagnol ; récréation de 10 h 30 à 10 h 45 ; 10 h 45 à 12 h 45 éducation physique ; cantine à 12 h 45 ; fin des cours à 16 h 30.",
              hint: "Utilisez « de las... a las... » pour une durée, « los lunes » pour une habitude, et pensez aux heures après la demie (10 h 45, 12 h 45).",
              solution: [
                "« Los lunes, Hugo tiene matemáticas de las ocho y media a las nueve y media. »",
                "« Luego tiene español de las nueve y media a las diez y media. »",
                "« El recreo es de las diez y media a las once menos cuarto. »",
                "« Después tiene educación física de las once menos cuarto a la una menos cuarto. »",
                "« Come en el comedor a la una menos cuarto y las clases terminan a las cuatro y media. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : votre correspondant de Valencia, Álex, vous demande comment est votre collège. Écrivez-lui un message de six à huit phrases en espagnol : votre classe et son équivalent en Espagne, vos horaires, la cantine, votre matière préférée avec une raison, les notes en France (sur 20) et en Espagne (sur 10), et l'uniforme.",
              hint: "Réutilisez le vocabulaire du cours (horario, comedor, asignatura, notas) et reliez vos phrases avec pero, también, porque. Comparez avec « En Francia... pero en España... ».",
              solution: [
                "« ¡Hola, Álex! Estoy en “quatrième”, que corresponde más o menos a segundo de ESO en España. »",
                "« Las clases empiezan a las ocho y terminan a las cinco de la tarde. »",
                "« Como en el comedor del colegio a mediodía, con mis amigos. »",
                "« Mi asignatura preferida es la historia porque me encantan las películas sobre el pasado. »",
                "« En Francia, las notas van de 0 a 20, pero en España van de 0 a 10. »",
                "« En mi colegio no llevamos uniforme. ¿Y tú? ¡Hasta pronto! »",
                "Vérification : chaque demande du sujet est traitée ; horaires écrits en toutes lettres ; asignatura, comedor et notas employés correctement.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? L'école dans le monde hispanique.",
            statements: [
              { text: "En Espagne, la ESO dure quatre ans.", true: true, why: "La ESO va de 12 à 16 ans, en quatre années (de primero a cuarto de ESO)." },
              { text: "Un élève de 4e en France a à peu près l'âge d'un élève de « segundo de ESO ».", true: true, why: "Tous deux ont environ 13 à 14 ans." },
              { text: "En Espagne, les notes vont de 0 à 20.", true: false, why: "Elles vont de 0 à 10 ; il faut 5 pour réussir." },
              { text: "En Argentine et au Chili, l'année scolaire commence en mars.", true: true, why: "Dans l'hémisphère sud, les saisons sont inversées : l'année scolaire va de mars à décembre." },
              { text: "Dans les établissements publics espagnols, l'uniforme est obligatoire partout.", true: false, why: "L'uniforme est rare dans le public ; il est surtout porté dans de nombreux établissements privés." },
              { text: "« Suspender un examen » signifie réussir un examen.", true: false, why: "Suspender = échouer ; réussir se dit aprobar." },
              { text: "« El recreo » désigne la récréation.", true: true, why: "El recreo est la pause entre les cours." },
            ],
          },
          quiz: [
            { q: "Comment dit-on « l'emploi du temps » ?", options: ["el tiempo libre", "el horario", "el empleo", "la hora"], answer: 1, why: "L'emploi du temps se dit « el horario » ; « el tiempo libre » est le temps libre." },
            { q: "« Aprobar un examen » signifie :", options: ["échouer à un examen", "préparer un examen", "corriger un examen", "réussir un examen"], answer: 3, why: "Aprobar = réussir ; le contraire est suspender." },
            { q: "En Espagne, quelle note faut-il au minimum pour réussir ?", options: ["5 sur 10", "10 sur 20", "12 sur 20", "4 sur 10"], answer: 0, why: "Les notes vont de 0 à 10 et il faut 5 pour réussir (aprobado)." },
            { q: "La ESO accueille les élèves de :", options: ["6 à 12 ans", "12 à 16 ans", "16 à 18 ans", "3 à 6 ans"], answer: 1, why: "La Educación Secundaria Obligatoria dure quatre ans, de 12 à 16 ans." },
            { q: "Dans quel pays l'année scolaire commence-t-elle en mars ?", options: ["en Espagne", "au Mexique", "au Chili", "en France"], answer: 2, why: "Le Chili est dans l'hémisphère sud : l'année scolaire va de mars à décembre." },
          ],
          trap: "Confondre « aprobar » (réussir) et « suspender » (échouer), ou croire que « el colegio » et « el instituto » désignent la même chose : en Espagne, la ESO se fait en général dans un instituto. Autre erreur : mettre une majuscule aux jours et aux matières.",
          method: "Pour retenir les différences entre les pays, faites un tableau à trois colonnes (France, Espagne, Amérique latine) et quatre lignes : âges et classes, horaires, notes, uniforme et calendrier. Complétez-le en espagnol avec les mots du cours, puis cachez une colonne et récitez-la.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'obligacion',
          title: 'Exprimer l\'obligation : tener que, hay que',
          minutes: 25,
          objectives: [
            "Exprimer une obligation personnelle avec tener que + infinitif.",
            "Exprimer une obligation générale ou une règle avec hay que + infinitif.",
            "Exprimer l'interdiction et la permission (no hay que, está prohibido, se puede, no se puede).",
            "Rédiger le règlement d'un lieu et parler de ses obligations quotidiennes.",
          ],
          course: [
            {
              heading: "Tener que + infinitif : une obligation personnelle",
              paragraphs: [
                "Pour dire qu'une personne précise doit faire quelque chose, on emploie « tener que » suivi d'un infinitif. Seul « tener » se conjugue : tengo que, tienes que, tiene que, tenemos que, tenéis que, tienen que. Par exemple : « Tengo que hacer los deberes » (je dois faire mes devoirs), « Mi hermana tiene que ir al médico », « ¿Qué tienes que hacer hoy? ».",
                "Avec un verbe pronominal, le pronom se soude à l'infinitif : « Tengo que levantarme a las siete ». Ne confondez pas « tener » (avoir) et « tener que » (devoir) : « Tengo un examen » (j'ai un examen), « Tengo que estudiar » (je dois étudier). On peut aussi employer « deber » + infinitif, sans « que », pour un devoir moral : « Debemos respetar a los demás » (nous devons respecter les autres).",
              ],
              box: { label: "Règle", text: "tener que + infinitif = devoir (obligation d'une personne précise) : tengo que estudiar, tenemos que salir. Seul tener se conjugue ; l'infinitif ne change pas." },
            },
            {
              heading: "Hay que + infinitif : une obligation générale",
              paragraphs: [
                "Pour exprimer une règle qui vaut pour tout le monde, on emploie « hay que » suivi d'un infinitif : « Hay que llegar puntual » (il faut arriver à l'heure), « Para aprobar, hay que estudiar » (pour réussir, il faut étudier). « Hay que » est impersonnel : il n'a pas de sujet et ne se conjugue jamais. C'est l'équivalent du français « il faut ».",
                "Ne confondez pas « hay » et « hay que ». « Hay » suivi d'un nom signifie « il y a » : « Hay veinticinco alumnos en mi clase ». « Hay que » suivi d'un infinitif signifie « il faut » : « Hay que escuchar al profesor ». Comparez aussi : « Tengo que estudiar » (moi, je dois étudier) et « Hay que estudiar » (il faut étudier, c'est vrai pour tous).",
              ],
              box: { label: "À retenir", text: "hay + nom = il y a (hay un parque). hay que + infinitif = il faut (hay que estudiar). tener que + infinitif = devoir, pour une personne précise (tengo que estudiar)." },
            },
            {
              heading: "Interdire et permettre",
              paragraphs: [
                "Pour une interdiction, on peut dire « No hay que » + infinitif (il ne faut pas) : « No hay que correr en los pasillos ». Plus fort : « Está prohibido » + infinitif (il est interdit de) : « Está prohibido usar el móvil en clase ». Sur les panneaux, on lit simplement « Prohibido fumar » (interdit de fumer).",
                "Pour la permission, on emploie « se puede » + infinitif (on peut, c'est permis) et « no se puede » (on ne peut pas) : « En el patio se puede jugar al fútbol », « No se puede comer en clase », « ¿Se puede entrar? » (peut-on entrer ?). Enfin, « no tener que » exprime l'absence d'obligation : « Los sábados no tengo que madrugar » (le samedi, je ne suis pas obligé de me lever tôt).",
              ],
              box: { label: "Repère", text: "Interdiction : no hay que, está prohibido, no se puede + infinitif. Permission : se puede + infinitif. Pas d'obligation : no tengo que + infinitif." },
            },
            {
              heading: "Le règlement du collège et les tâches à la maison",
              paragraphs: [
                "Voici un exemple de règlement : « Normas del instituto: Hay que llegar puntual. Hay que respetar a los profesores y a los compañeros. Está prohibido usar el móvil en clase. No se puede comer en el aula. En el recreo, se puede jugar en el patio. ». Remarquez le « a » devant « los profesores » : en espagnol, on place « a » devant un complément d'objet qui désigne une personne.",
                "À la maison aussi, on a des obligations : « Tengo que hacer la cama » (faire mon lit), « Mi hermano tiene que poner la mesa » (mettre la table), « Tenemos que sacar la basura » (sortir la poubelle), « Tengo que ordenar mi habitación » (ranger ma chambre), « Tengo que pasear al perro » (promener le chien).",
              ],
            },
          ],
          keyPoints: [
            "tener que + infinitif = devoir (personne précise) : tengo que estudiar.",
            "hay que + infinitif = il faut (règle générale, invariable) : hay que estudiar.",
            "hay + nom = il y a ; hay que + infinitif = il faut.",
            "Interdiction : no hay que, está prohibido, no se puede + infinitif.",
            "Permission : se puede + infinitif. Pas d'obligation : no tengo que + infinitif.",
            "Le pronom se soude à l'infinitif : tengo que levantarme.",
          ],
          example: {
            statement: "Traduisez : « Ce soir, je dois ranger ma chambre. Au collège, il faut respecter les professeurs et il est interdit d'utiliser le portable. »",
            solution: [
              "« je dois ranger » : obligation personnelle → tener que, 1re personne : « Esta noche tengo que ordenar mi habitación ».",
              "« il faut respecter les professeurs » : règle générale → hay que ; « a » devant un complément qui désigne des personnes : « En el colegio hay que respetar a los profesores ».",
              "« il est interdit d'utiliser le portable » : « está prohibido usar el móvil ».",
              "Réponse : « Esta noche tengo que ordenar mi habitación. En el colegio hay que respetar a los profesores y está prohibido usar el móvil. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec tener que conjugué : a) Yo ... estudiar. b) Mis hermanos ... sacar la basura. c) ¿Tú ... ir al médico? d) Nosotros ... levantarnos temprano. e) Vosotros ... hacer la cama. f) Mi padre ... trabajar el sábado.",
              hint: "Conjuguez tener (tengo, tienes, tiene, tenemos, tenéis, tienen) et n'oubliez pas « que ».",
              solution: [
                "a) « Yo tengo que estudiar ».",
                "b) « Mis hermanos tienen que sacar la basura ».",
                "c) « ¿Tú tienes que ir al médico? ».",
                "d) « Nosotros tenemos que levantarnos temprano ».",
                "e) « Vosotros tenéis que hacer la cama ».",
                "f) « Mi padre tiene que trabajar el sábado ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec hay, hay que ou tener que conjugué : a) En la biblioteca ... hablar bajo. b) Mañana (yo) ... ir al dentista. c) En mi barrio ... un parque muy grande. d) Para ser médico, ... estudiar muchos años. e) Mi madre ... trabajar el domingo. f) En el comedor ... muchos alumnos.",
              hint: "Devant un nom : hay. Devant un infinitif : hay que si c'est une règle pour tout le monde, tener que si une personne précise est concernée.",
              solution: [
                "a) Règle générale : « En la biblioteca hay que hablar bajo ».",
                "b) Obligation personnelle (yo) : « Mañana tengo que ir al dentista ».",
                "c) Devant un nom : « En mi barrio hay un parque muy grande ».",
                "d) Règle générale : « Para ser médico, hay que estudiar muchos años ».",
                "e) Obligation personnelle (mi madre) : « Mi madre tiene que trabajar el domingo ».",
                "f) Devant un nom : « En el comedor hay muchos alumnos ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : vous êtes animateur d'un camp de vacances en Espagne (« un campamento de verano »). Rédigez en espagnol le règlement du camp en six phrases, en employant au moins une fois chacune de ces tournures : hay que, no hay que, está prohibido, se puede, no se puede. Ajoutez une phrase sur ce que vous, l'animateur, devez faire (tener que).",
              hint: "Pensez aux horaires (levantarse, acostarse), au repas, à la piscine, au téléphone, au respect des autres. N'oubliez pas que hay que ne se conjugue pas.",
              solution: [
                "« Hay que levantarse a las ocho y acostarse a las diez y media. »",
                "« No hay que gritar en las habitaciones por la noche. »",
                "« Está prohibido salir del campamento sin un monitor. »",
                "« Se puede nadar en la piscina por la tarde. »",
                "« No se puede usar el móvil durante las actividades. »",
                "« Yo tengo que acompañar a los chicos a la piscina y tengo que preparar los juegos. »",
                "Vérification : hay que et se puede restent invariables ; « tener que » est conjugué à la 1re personne ; le pronom est soudé à l'infinitif (levantarse, acostarse).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque phrase espagnole à sa traduction.",
            pairs: [
              { left: "Tengo que estudiar.", right: "Je dois étudier." },
              { left: "Hay que estudiar.", right: "Il faut étudier." },
              { left: "Hay un examen.", right: "Il y a un examen." },
              { left: "No se puede entrar.", right: "On ne peut pas entrer." },
              { left: "Está prohibido fumar.", right: "Il est interdit de fumer." },
              { left: "No tengo que madrugar.", right: "Je ne suis pas obligé de me lever tôt." },
            ],
          },
          quiz: [
            { q: "Complétez : « Mañana mis padres ... trabajar. »", options: ["tienen que", "tienen de", "hay que tener", "tiene que"], answer: 0, why: "Obligation de personnes précises (ellos) : tienen que + infinitif." },
            { q: "Quelle phrase exprime une règle générale ?", options: ["Tengo que estudiar.", "Hay que estudiar.", "Hay estudiar.", "Tiene estudiar."], answer: 1, why: "Hay que + infinitif exprime une obligation qui vaut pour tout le monde." },
            { q: "« Está prohibido usar el móvil » signifie :", options: ["Le portable est interdit aux adultes seulement.", "Il faut utiliser le portable.", "Il est interdit d'utiliser le portable.", "On peut utiliser le portable."], answer: 2, why: "Está prohibido + infinitif = il est interdit de." },
            { q: "Comment dit-on « je dois me lever tôt » ?", options: ["Tengo levantarme temprano.", "Hay que me levantar temprano.", "Tengo que me levantar temprano.", "Tengo que levantarme temprano."], answer: 3, why: "Tener que + infinitif, et le pronom se soude à l'infinitif : levantarme." },
            { q: "Que signifie « hay » lorsqu'il est suivi d'un nom ?", options: ["il faut", "il y a", "il doit", "on peut"], answer: 1, why: "Hay + nom = il y a (hay un parque) ; hay que + infinitif = il faut." },
          ],
          trap: "Oublier « que » (« tengo estudiar ») ou conjuguer « hay que » (« han que »). Autre confusion fréquente : employer « hay que » pour une personne précise, alors qu'il faut « tener que » : « Mañana tengo que ir al dentista ».",
          method: "Pour choisir, posez-vous une question : qui doit le faire ? Si c'est une personne précise (moi, mon frère, nous), employez tener que conjugué. Si c'est tout le monde, employez hay que. Puis vérifiez que l'infinitif suit bien « que ».",
        },
      ],
    },
    {
      id: 'ciudad-viajes',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'orientarse-ciudad',
          title: 'Se repérer en ville : hay, estar et les prépositions de lieu',
          minutes: 30,
          objectives: [
            "Nommer les principaux lieux de la ville.",
            "Distinguer hay (ce qui existe) et estar (où se trouve un élément connu).",
            "Situer un lieu avec les prépositions de lieu (al lado de, enfrente de, entre... y...).",
            "Demander son chemin et comprendre ou donner un itinéraire simple.",
          ],
          course: [
            {
              heading: "Les lieux de la ville",
              paragraphs: [
                "Pour parler de la ville (la ciudad) ou du village (el pueblo), voici les lieux les plus utiles : la calle (la rue), la plaza (la place), el ayuntamiento (la mairie), la estación de tren (la gare), la parada de autobús (l'arrêt de bus), el museo, la iglesia (l'église), la catedral, el mercado (le marché), el supermercado, la panadería (la boulangerie), la farmacia, el hospital, el banco, el parque, la biblioteca, el polideportivo (le complexe sportif), el cine, el centro comercial et la oficina de turismo (l'office de tourisme).",
                "Repère culturel : beaucoup de villes espagnoles ont une « plaza mayor », une grande place centrale souvent entourée d'arcades, où l'on se retrouve, où l'on se promène et où ont lieu les fêtes. Parmi les plus célèbres figurent celles de Madrid et de Salamanque.",
              ],
            },
            {
              heading: "Hay ou estar ?",
              paragraphs: [
                "« Hay » signifie « il y a ». Il sert à dire qu'une chose existe, sans la connaître ni la désigner précisément. Il est invariable et se place devant un article indéfini (un, una), un nombre, un nom pluriel sans article, ou un mot de quantité : « Hay un museo », « Hay dos parques », « Hay tiendas », « Hay muchos turistas ». Pour demander : « ¿Hay una farmacia por aquí? » (y a-t-il une pharmacie par ici ?).",
                "« Estar » sert à situer une chose précise, que l'on connaît déjà. Il s'emploie avec un article défini (el, la, los, las), un nom propre, un possessif ou un démonstratif : « El museo está en la plaza », « Mi casa está cerca del parque », « La Alhambra está en Granada ». Pour demander : « ¿Dónde está la estación? ». Ne dites jamais « hay el museo » : avec l'article défini, il faut estar.",
              ],
              box: { label: "Règle", text: "hay (invariable) + un, una, un nombre, un pluriel sans article, mucho : hay un banco, hay dos cines. estar + el, la, los, las, un nom propre, mi, tu... : el banco está en la plaza, Toledo está cerca de Madrid." },
            },
            {
              heading: "Les prépositions de lieu",
              paragraphs: [
                "Pour situer un lieu, on emploie estar suivi d'une préposition : cerca de (près de), lejos de (loin de), al lado de (à côté de), enfrente de (en face de), delante de (devant), detrás de (derrière), entre... y... (entre... et...), en (dans, sur, à), a la derecha de (à droite de), a la izquierda de (à gauche de), en la esquina (au coin), al final de la calle (au bout de la rue).",
                "Attention aux contractions : de + el = del, a + el = al. On dit « al lado del cine », « enfrente del hospital », mais « al lado de la iglesia ». Pour une distance, on emploie « a » : « La estación está a diez minutos a pie » (à dix minutes à pied), « El pueblo está a dos kilómetros ».",
              ],
              box: { label: "À retenir", text: "cerca de / lejos de ; al lado de ; enfrente de ; delante de / detrás de ; entre... y... ; a la derecha / a la izquierda ; en la esquina. Contractions : del, al. Distance : está a cinco minutos." },
            },
            {
              heading: "Demander et indiquer le chemin",
              paragraphs: [
                "Pour demander poliment son chemin : « Perdón, ¿dónde está la catedral, por favor? », « ¿Hay un banco por aquí? », « ¿Cómo se va a la estación? » (comment va-t-on à la gare ?), « ¿Está lejos? ». Si vous ne comprenez pas : « ¿Puede repetir, por favor? ».",
                "Pour indiquer un chemin, les Espagnols emploient très souvent le présent : « Sigues todo recto » (tu continues tout droit, de seguir), « giras a la derecha » (tu tournes à droite), « tomas la segunda calle a la izquierda » (tu prends la deuxième rue à gauche), « cruzas la plaza » (tu traverses la place). Avec une personne que l'on vouvoie, on emploie la 3e personne : « Usted sigue todo recto y gira a la izquierda ». Vous étudierez plus tard une autre façon de donner des consignes, l'impératif.",
              ],
              box: { label: "Exemple", text: "¿Dónde está el museo, por favor? Sigues todo recto, tomas la primera calle a la derecha y el museo está al final de la calle, enfrente del parque. Está a cinco minutos a pie." },
            },
          ],
          keyPoints: [
            "hay = il y a (invariable) : hay un museo, hay dos parques, hay muchas tiendas.",
            "estar situe un élément précis : el museo está en la plaza ; ¿dónde está la estación?",
            "Jamais « hay el... » : avec l'article défini, on emploie estar.",
            "cerca de, lejos de, al lado de, enfrente de, delante de, detrás de, entre... y...",
            "de + el = del ; a + el = al : al lado del cine.",
            "Itinéraire au présent : sigues todo recto, giras a la derecha, tomas la segunda calle.",
          ],
          example: {
            statement: "Complétez avec hay ou estar conjugué, et traduisez les mots entre parenthèses : « En mi pueblo (1) ... una plaza muy bonita. El ayuntamiento (2) ... en la plaza, (3) (en face de) la iglesia. También (4) ... dos supermercados. Mi casa (5) ... (à côté de) el parque. »",
            solution: [
              "(1) « una plaza » : article indéfini, on dit que la chose existe → « hay ».",
              "(2) « El ayuntamiento » : article défini, on le situe → « está ».",
              "(3) « en face de » → « enfrente de la iglesia » (pas de contraction devant « la »).",
              "(4) « dos supermercados » : un nombre → « hay ».",
              "(5) « Mi casa » : possessif → « está » ; « à côté de » + « el parque » → « al lado del parque » (de + el = del).",
              "Réponse : « En mi pueblo hay una plaza muy bonita. El ayuntamiento está en la plaza, enfrente de la iglesia. También hay dos supermercados. Mi casa está al lado del parque. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec hay, está ou están : a) En mi calle ... una panadería. b) La panadería ... al lado del banco. c) ¿Dónde ... los servicios? d) En el centro ... muchas tiendas. e) Madrid ... en el centro de España. f) ¿... un cajero automático por aquí?",
              hint: "Regardez le mot qui suit : article indéfini, nombre, quantité (hay) ou article défini, nom propre (estar). Accordez estar avec son sujet.",
              solution: [
                "a) « una panadería » : « hay ».",
                "b) « La panadería » : « está ».",
                "c) « los servicios », pluriel défini : « están ».",
                "d) « muchas tiendas » : quantité, « hay ».",
                "e) « Madrid », nom propre : « está ».",
                "f) « un cajero » : « ¿Hay un cajero automático por aquí? ».",
              ],
            },
            {
              level: 2,
              statement: "Traduisez : a) La pharmacie est en face de l'hôpital. b) Le parc est derrière le collège. c) La gare est loin du centre. d) Il y a un café entre la banque et le cinéma. e) La bibliothèque est au coin de la rue, à droite.",
              hint: "Choisissez d'abord entre hay et estar, puis la préposition. Pensez à la contraction de + el = del.",
              solution: [
                "a) « La farmacia está enfrente del hospital ».",
                "b) « El parque está detrás del colegio ».",
                "c) « La estación está lejos del centro ».",
                "d) « Hay un café entre el banco y el cine ».",
                "e) « La biblioteca está en la esquina, a la derecha ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : un touriste vous demande à la sortie de la gare : « ¿Hay un museo por aquí? ». Voici le plan (données fictives) : en sortant de la gare, la calle Mayor part tout droit ; la première rue à gauche est la calle del Sol, la deuxième est la calle de la Luna ; le musée est au bout de la calle de la Luna, à droite, en face d'un parc ; il faut environ dix minutes à pied. Répondez-lui d'abord en le tutoyant, puis récrivez l'itinéraire en le vouvoyant (usted).",
              hint: "Commencez par répondre à la question avec « hay ». Donnez l'itinéraire au présent (seguir, tomar, girar), situez le musée avec estar et une préposition, et indiquez la distance avec « a ».",
              solution: [
                "Réponse à la question : « Sí, hay un museo muy cerca. »",
                "Itinéraire avec tú : « Sigues todo recto por la calle Mayor y tomas la segunda calle a la izquierda, la calle de la Luna. »",
                "Situation et distance : « El museo está al final de la calle, a la derecha, enfrente de un parque. Está a diez minutos a pie. »",
                "Avec usted (3e personne) : « Usted sigue todo recto por la calle Mayor y toma la segunda calle a la izquierda, la calle de la Luna. El museo está al final de la calle, a la derecha, enfrente de un parque. »",
                "Vérification : hay pour annoncer qu'un musée existe, puis está pour le situer ; seguir fait « sigues » et « sigue » (e → i) ; la calle del Sol est la première rue, on ne la prend pas.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes ?",
            statements: [
              { text: "« Hay el museo en la plaza. »", true: false, why: "Avec l'article défini, on emploie estar : « El museo está en la plaza »." },
              { text: "« Hay muchos turistas en verano. »", true: true, why: "Hay devant un mot de quantité : il y a beaucoup de touristes." },
              { text: "« ¿Dónde está la estación? »", true: true, why: "On cherche un lieu précis (la estación) : estar." },
              { text: "« El banco está enfrente de el cine. »", true: false, why: "De + el se contracte : « enfrente del cine »." },
              { text: "« Enfrente de » signifie « en face de ».", true: true, why: "Enfrente de = en face de ; delante de = devant." },
              { text: "Au pluriel, on dit « han dos parques ».", true: false, why: "Hay est invariable : « hay dos parques »." },
              { text: "« Mi casa está cerca del colegio. »", true: true, why: "Possessif → estar ; de + el = del." },
            ],
          },
          quiz: [
            { q: "Complétez : « En mi barrio ... dos parques. »", options: ["está", "están", "son", "hay"], answer: 3, why: "Devant un nombre, on dit que la chose existe : hay, invariable." },
            { q: "Complétez : « ¿Dónde ... la oficina de turismo? »", options: ["está", "hay", "es", "están"], answer: 0, why: "On situe un lieu précis (la oficina) au singulier : está." },
            { q: "« Detrás de » signifie :", options: ["devant", "à côté de", "derrière", "en face de"], answer: 2, why: "Detrás de = derrière ; delante de = devant." },
            { q: "Quelle phrase est correcte ?", options: ["Hay la farmacia al lado del banco.", "La farmacia hay al lado del banco.", "La farmacia está al lado de el banco.", "La farmacia está al lado del banco."], answer: 3, why: "Un lieu précis se situe avec estar, et de + el se contracte en del." },
            { q: "Pour indiquer le chemin à un ami, on peut dire :", options: ["Sigues todo recto y giras a la derecha.", "Estás todo recto y hay la calle a la derecha.", "Eres todo recto y está a la derecha."], answer: 0, why: "On donne souvent un itinéraire au présent : seguir (sigues) et girar (giras)." },
          ],
          trap: "Dire « hay el museo » ou « el museo hay en la plaza » : hay annonce qu'une chose existe (hay un museo), estar situe une chose précise (el museo está en la plaza). Autre erreur fréquente : oublier la contraction « del » (« al lado de el cine »).",
          method: "Avant de choisir, regardez le petit mot devant le nom : un, una, un nombre ou rien au pluriel, c'est hay ; el, la, los, las, mi ou un nom propre, c'est estar. Pour réviser les prépositions, décrivez à voix haute votre chambre ou votre rue en cinq phrases.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ir-a-infinitivo',
          title: 'Parler de ses projets : ir a + infinitif',
          minutes: 25,
          objectives: [
            "Former le futur proche avec ir a + infinitif.",
            "Situer un projet dans le temps avec des marqueurs (mañana, la semana que viene, el próximo verano...).",
            "Exprimer une intention ou une envie avec pensar, querer et tener ganas de + infinitif.",
            "Présenter ses projets en continu (week-end, vacances, avenir).",
          ],
          course: [
            {
              heading: "Former le futur proche",
              paragraphs: [
                "Pour parler d'un projet ou d'une action qui va se produire bientôt, l'espagnol emploie, comme le français, le verbe « aller » suivi d'un infinitif. Mais il ajoute toujours la préposition « a » entre les deux : ir + a + infinitif. « Voy a viajar » (je vais voyager), « ¿Vas a venir? » (tu vas venir ?), « Va a llover » (il va pleuvoir).",
                "Seul le verbe « ir » se conjugue, au présent : voy, vas, va, vamos, vais, van. L'infinitif ne change pas. À la forme négative, « no » se place devant ir : « No voy a salir esta noche ». Pour demander à quelqu'un ses projets : « ¿Qué vas a hacer este fin de semana? ».",
              ],
              box: { label: "Règle", text: "ir (voy, vas, va, vamos, vais, van) + a + infinitif. Vamos a comer. No voy a salir. N'oubliez jamais le « a » : « voy salir » est incorrect." },
            },
            {
              heading: "Les marqueurs du futur",
              paragraphs: [
                "Pour dire quand aura lieu le projet, on emploie des marqueurs de temps : esta tarde (cet après-midi), esta noche (ce soir), mañana (demain), mañana por la mañana (demain matin), pasado mañana (après-demain), este fin de semana (ce week-end), el sábado que viene (samedi prochain), la semana que viene ou la próxima semana (la semaine prochaine), el año que viene (l'année prochaine), el próximo verano (l'été prochain), dentro de dos días (dans deux jours).",
                "Ces marqueurs se placent en général au début ou à la fin de la phrase : « La semana que viene vamos a ir a la playa » ou « Vamos a ir a la playa la semana que viene ». Notez que « mañana » a deux sens : « demain » et « le matin » ; « mañana por la mañana » signifie donc « demain matin ».",
              ],
              box: { label: "À retenir", text: "esta tarde, esta noche, mañana, pasado mañana, este fin de semana, el lunes que viene, la semana que viene = la próxima semana, el año que viene, el próximo verano, dentro de + durée." },
            },
            {
              heading: "Le futur proche avec un verbe pronominal",
              paragraphs: [
                "Avec un verbe pronominal, le pronom peut se placer de deux façons : soudé à la fin de l'infinitif, « Voy a levantarme tarde », ou devant le verbe ir conjugué, « Me voy a levantar tarde ». Les deux phrases sont correctes et ont le même sens. En revanche, le pronom ne se place jamais entre « a » et l'infinitif : « voy a me levantar » est faux.",
                "Attention aussi aux verbes pronominaux en français qui ne le sont pas en espagnol, et inversement. « Se promener » se dit « pasear » ou « dar un paseo », sans pronom : « Vamos a pasear por el parque ». Enfin, « ¡Vamos a + infinitif! » sert aussi à proposer une action à faire ensemble tout de suite : « ¡Vamos a comer! » (allons manger !).",
              ],
            },
            {
              heading: "Exprimer une intention ou une envie",
              paragraphs: [
                "Pour un projet plus lointain ou moins sûr, on peut employer d'autres verbes suivis d'un infinitif. « Pensar » (ie) + infinitif signifie « avoir l'intention de » : « Pienso estudiar medicina » (j'ai l'intention d'étudier la médecine). « Querer » (ie) + infinitif signifie « vouloir » : « Quiero ser veterinaria ». « Tener ganas de » + infinitif signifie « avoir envie de » : « Tengo ganas de conocer México ».",
                "L'espagnol possède aussi un futur simple (je voyagerai), que vous étudierez plus tard. Pour parler de vos projets à l'oral, le futur proche suffit très bien : c'est un temps très employé dans la conversation pour parler de ce que l'on va faire.",
              ],
              box: { label: "Exemple", text: "El próximo verano voy a ir a Andalucía con mi familia. Vamos a viajar en tren y vamos a visitar Sevilla. Más tarde, pienso estudiar idiomas porque quiero ser guía turística." },
            },
          ],
          keyPoints: [
            "Futur proche : ir conjugué + a + infinitif : voy a viajar, vamos a comer.",
            "Négation devant ir : no voy a salir.",
            "Marqueurs : mañana, pasado mañana, la semana que viene, el próximo verano, dentro de dos días.",
            "Pronom soudé à l'infinitif ou devant ir : voy a levantarme = me voy a levantar.",
            "Intention : pienso + infinitif ; volonté : quiero + infinitif ; envie : tengo ganas de + infinitif.",
          ],
          example: {
            statement: "Traduisez : « Ce week-end, je vais rendre visite à mes grands-parents. Samedi, nous allons nous promener dans le parc et dimanche mes cousins vont jouer au football. »",
            solution: [
              "« je vais rendre visite à mes grands-parents » : voy a + visitar ; « a » devant un complément qui désigne des personnes : « Este fin de semana voy a visitar a mis abuelos ».",
              "« nous allons nous promener » : vamos a + pasear, qui n'est pas pronominal en espagnol : « El sábado vamos a pasear por el parque ».",
              "« mes cousins vont jouer au football » : van a + jugar al fútbol : « el domingo mis primos van a jugar al fútbol ».",
              "Réponse : « Este fin de semana voy a visitar a mis abuelos. El sábado vamos a pasear por el parque y el domingo mis primos van a jugar al fútbol. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Formez des phrases au futur proche : a) yo / estudiar ; b) mis padres / comprar un coche ; c) nosotros / ver una película ; d) ¿tú / salir esta noche? ; e) vosotros / viajar a Perú ; f) mi hermana / no venir.",
              hint: "Conjuguez ir à la bonne personne, ajoutez « a », puis l'infinitif sans le changer. La négation se place devant ir.",
              solution: [
                "a) « Voy a estudiar ».",
                "b) « Mis padres van a comprar un coche ».",
                "c) « Vamos a ver una película ».",
                "d) « ¿Vas a salir esta noche? ».",
                "e) « Vais a viajar a Perú ».",
                "f) « Mi hermana no va a venir ».",
              ],
            },
            {
              level: 2,
              statement: "Récrivez chaque phrase au futur proche en remplaçant « hoy » par le marqueur indiqué : a) Hoy juego al tenis (mañana). b) Hoy mis amigos van al cine (el sábado que viene). c) Hoy me levanto temprano (pasado mañana) : donnez les deux places possibles du pronom. d) Hoy no hacemos deberes (este fin de semana).",
              hint: "Gardez la même personne, conjuguez ir au présent et mettez le verbe de la phrase à l'infinitif. En b), le verbe ir devient lui-même un infinitif.",
              solution: [
                "a) « Mañana voy a jugar al tenis ».",
                "b) « El sábado que viene mis amigos van a ir al cine » (« van a ir » est correct : aller + aller).",
                "c) « Pasado mañana voy a levantarme temprano » ou « Pasado mañana me voy a levantar temprano ».",
                "d) « Este fin de semana no vamos a hacer deberes ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : écrivez à votre correspondant un message de six à huit phrases sur vos projets pour l'été prochain (vous pouvez inventer). Indiquez la destination, les personnes qui vous accompagnent, le moyen de transport, au moins deux activités, une prévision sur le temps qu'il va faire, puis un projet pour plus tard avec pensar ou querer.",
              hint: "Employez le futur proche à plusieurs personnes (yo, nosotros), au moins deux marqueurs de temps différents, et « va a hacer calor » pour la prévision.",
              solution: [
                "« ¡Hola, Diego! El próximo verano voy a ir a Galicia con mis padres y mi hermano pequeño. »",
                "« Vamos a viajar en coche y vamos a dormir en un camping cerca de la playa. »",
                "« Por la mañana voy a hacer surf y por la tarde vamos a visitar Santiago de Compostela. »",
                "« Creo que no va a hacer mucho calor, pero va a ser genial. »",
                "« Dentro de unos años pienso viajar a Argentina, porque quiero conocer la Patagonia. »",
                "« ¿Y tú? ¿Qué vas a hacer este verano? ¡Un abrazo! »",
                "Vérification : ir est conjugué (voy, vamos, va) et toujours suivi de « a » ; marqueurs employés : el próximo verano, por la mañana, dentro de unos años ; intention avec pienso et quiero.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque marqueur de temps à sa traduction.",
            pairs: [
              { left: "mañana", right: "demain" },
              { left: "pasado mañana", right: "après-demain" },
              { left: "la semana que viene", right: "la semaine prochaine" },
              { left: "esta noche", right: "ce soir" },
              { left: "dentro de dos días", right: "dans deux jours" },
              { left: "el año que viene", right: "l'année prochaine" },
            ],
          },
          quiz: [
            { q: "Complétez : « Mañana (yo) ... visitar el museo. »", options: ["voy", "voy de", "voy a", "vamos a"], answer: 2, why: "Futur proche : ir conjugué (voy) + a + infinitif." },
            { q: "Quelle phrase signifie « nous n'allons pas sortir » ?", options: ["Vamos a no salir.", "No vamos salir.", "Vamos no a salir.", "No vamos a salir."], answer: 3, why: "La négation se place devant ir, et le « a » reste indispensable." },
            { q: "« Pasado mañana » signifie :", options: ["après-demain", "hier", "demain matin", "la semaine passée"], answer: 0, why: "Pasado mañana = après-demain ; demain matin se dit « mañana por la mañana »." },
            { q: "Quelle forme est correcte ?", options: ["Voy ducharme.", "Voy a me duchar.", "Me voy a duchar me.", "Voy a ducharme."], answer: 3, why: "Le pronom se soude à l'infinitif (voy a ducharme) ou se place devant ir (me voy a duchar)." },
            { q: "« Pienso viajar a México » exprime :", options: ["une obligation", "un souvenir", "une intention", "une interdiction"], answer: 2, why: "Pensar + infinitif signifie « avoir l'intention de »." },
          ],
          trap: "Oublier la préposition « a » (« voy viajar »), calque du français « je vais voyager ». Autre erreur : placer le pronom entre « a » et l'infinitif (« voy a me levantar ») au lieu de « voy a levantarme » ou « me voy a levantar ».",
          method: "Pour vérifier une phrase au futur proche, cherchez les trois éléments dans l'ordre : ir conjugué, « a », infinitif. Entraînez-vous chaque soir en disant à voix haute trois choses que vous allez faire le lendemain : « Mañana voy a... ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'preparar-viaje',
          title: 'Préparer un voyage dans un pays hispanophone',
          minutes: 35,
          objectives: [
            "Utiliser le vocabulaire du voyage : transports, documents, hébergement.",
            "Demander poliment une information ou un service (horaire, prix, réservation).",
            "Réagir et dialoguer dans une situation de voyage (gare, hôtel, office de tourisme).",
            "Organiser un itinéraire dans un pays hispanophone en citant quelques lieux célèbres.",
          ],
          course: [
            {
              heading: "Les transports et les documents",
              paragraphs: [
                "Pour dire comment on voyage, on emploie « en » : viajar en avión (en avion), en tren, en autobús, en barco (en bateau), en coche (en voiture). Seule exception : « a pie » (à pied). Les lieux : el aeropuerto, la estación de tren, la estación de autobuses. À la gare : el billete (le billet ; en Amérique latine, on dit souvent « el boleto »), de ida (aller simple), de ida y vuelta (aller-retour), el andén (le quai), la salida (le départ), la llegada (l'arrivée).",
                "Les bagages et les documents : la maleta (la valise), la mochila (le sac à dos), el equipaje (les bagages), el pasaporte, el documento de identidad (la pièce d'identité). Pour un citoyen français, une carte d'identité valide suffit pour aller en Espagne, qui fait partie de l'Union européenne ; pour les pays d'Amérique latine, il faut en général un passeport. Un mineur qui voyage sans ses parents a aussi besoin d'une autorisation : renseignez-vous toujours avant de partir.",
              ],
              box: { label: "À retenir", text: "en avión, en tren, en autobús, en coche, mais a pie. el billete (Espagne) = el boleto (Amérique latine). de ida / de ida y vuelta. el andén, la salida, la llegada, la maleta, el pasaporte." },
            },
            {
              heading: "Se loger et payer",
              paragraphs: [
                "Pour dormir : el hotel, el albergue juvenil (l'auberge de jeunesse), el camping, la casa rural (le gîte). On réserve (reservar) une habitación individual (une chambre simple) ou doble (double), por noche (par nuit), con desayuno (avec petit déjeuner). On demande : « ¿Hay habitaciones libres? » (avez-vous des chambres libres ?), « ¿El desayuno está incluido? ».",
                "Pour payer, il faut connaître la monnaie du pays : l'Espagne utilise l'euro ; le Mexique, le peso mexicain ; l'Argentine, le peso argentin ; la Colombie, le peso colombien ; le Pérou, le sol. Pour demander un prix : « ¿Cuánto cuesta? » (combien ça coûte ?) ou « ¿Cuánto es? » (c'est combien ?). On répond : « Cuesta veinte euros », « Son cincuenta euros ».",
              ],
            },
            {
              heading: "Demander poliment",
              paragraphs: [
                "En voyage, on s'adresse le plus souvent à des adultes inconnus : on les vouvoie avec « usted », conjugué à la 3e personne. Commencez par saluer (« Buenos días », « Buenas tardes ») et terminez par « gracias ». Formules utiles : « Perdón, ¿me puede ayudar, por favor? » (pouvez-vous m'aider ?), « ¿Puede repetir, por favor? », « ¿A qué hora sale el tren para Sevilla? », « ¿De qué andén sale? », « ¿A qué hora llega? ».",
                "Pour demander quelque chose, dites « Quiero... , por favor » ou, plus poliment, « Quisiera... » (je voudrais) : « Quisiera un billete de ida y vuelta para Toledo ». « Quisiera » est une forme de querer que vous étudierez plus tard : pour l'instant, apprenez-la comme une formule de politesse, l'équivalent de « je voudrais ».",
              ],
              box: { label: "Dialogue", text: "Buenos días. Quisiera un billete de ida y vuelta para Toledo, por favor. / ¿Para hoy? / Sí. ¿A qué hora sale el próximo tren? / A las once y cuarto, del andén 4. / ¿Cuánto cuesta? / Son veinte euros. / Gracias." },
            },
            {
              heading: "Quelques destinations du monde hispanique",
              paragraphs: [
                "En Espagne, on peut visiter l'Alhambra de Grenade, un ensemble de palais et de jardins construit par les souverains musulmans d'al-Andalus, ou la Sagrada Familia de Barcelone, la grande basilique à laquelle l'architecte Antoni Gaudí a consacré une grande partie de sa vie, et dont la construction a commencé en 1882. Au Mexique, près de Mexico, le site de Teotihuacán abrite les pyramides du Soleil et de la Lune. Au Pérou, dans les Andes, se trouve le Machu Picchu, une cité inca. En Argentine, en Patagonie, on admire le glacier Perito Moreno.",
                "Pour organiser un itinéraire, utilisez les dates (el + nombre + de + mois, sans majuscule : « el 3 de julio »), le futur proche et les transports : « El 3 de julio vamos a llegar a Madrid en avión. El 4 vamos a ir a Toledo en tren ». Pensez aussi aux saisons : en juillet, c'est l'été en Espagne et au Mexique, mais l'hiver en Argentine et au Chili.",
              ],
              box: { label: "Repère", text: "Espagne : l'Alhambra (Grenade), la Sagrada Familia (Barcelone, Gaudí). Mexique : Teotihuacán. Pérou : le Machu Picchu. Argentine : le glacier Perito Moreno (Patagonie)." },
            },
          ],
          keyPoints: [
            "en avión, en tren, en autobús, en coche ; a pie.",
            "billete (Espagne) / boleto (Amérique latine) ; de ida y vuelta = aller-retour.",
            "andén (quai), salida (départ), llegada (arrivée), maleta (valise).",
            "Politesse : usted, por favor, gracias ; ¿Me puede ayudar? ; Quisiera... = je voudrais.",
            "¿Cuánto cuesta? ¿A qué hora sale el tren? ¿Hay habitaciones libres?",
            "Monnaies : euro (Espagne), peso (Mexique, Argentine, Colombie), sol (Pérou).",
          ],
          example: {
            statement: "Vous êtes à la gare de Madrid. Demandez poliment deux billets aller-retour pour Toledo, l'heure de départ du prochain train et le prix. Écrivez vos quatre répliques.",
            solution: [
              "On salue, en vouvoyant l'employé : « Buenos días. »",
              "On demande les billets avec la formule polie : « Quisiera dos billetes de ida y vuelta para Toledo, por favor. »",
              "On demande l'heure de départ avec salir : « ¿A qué hora sale el próximo tren? »",
              "On demande le prix : « ¿Cuánto cuestan? » (deux billets, donc pluriel) ou « ¿Cuánto es? ».",
              "On termine par « Muchas gracias. ».",
              "Réponse : « Buenos días. Quisiera dos billetes de ida y vuelta para Toledo, por favor. ¿A qué hora sale el próximo tren? ¿Cuánto es? Muchas gracias. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol : a) un aller-retour ; b) le quai ; c) l'arrivée ; d) la valise ; e) l'auberge de jeunesse ; f) une chambre double ; g) le départ.",
              hint: "Relisez les encadrés des deux premières parties du cours. Attention : « la salida » est le départ.",
              solution: [
                "a) un billete de ida y vuelta.",
                "b) el andén.",
                "c) la llegada.",
                "d) la maleta.",
                "e) el albergue juvenil.",
                "f) una habitación doble.",
                "g) la salida.",
              ],
            },
            {
              level: 2,
              statement: "Écrivez la question qui correspond à chaque réponse : a) « El tren sale a las diez y cuarto. » b) « La habitación cuesta treinta euros por noche. » c) « Sí, hay un albergue juvenil cerca de la catedral. » d) « La oficina de turismo está en la plaza Mayor. » e) « Sí, claro, ¿qué necesita? »",
              hint: "Repérez l'information donnée (heure, prix, existence, lieu, aide) et choisissez le mot interrogatif : ¿A qué hora...? ¿Cuánto...? ¿Hay...? ¿Dónde...? ¿Me puede...?",
              solution: [
                "a) Une heure : « ¿A qué hora sale el tren? ».",
                "b) Un prix : « ¿Cuánto cuesta la habitación? ».",
                "c) L'existence : « ¿Hay un albergue juvenil por aquí? ».",
                "d) Un lieu précis : « ¿Dónde está la oficina de turismo? ».",
                "e) Une demande d'aide : « Perdón, ¿me puede ayudar, por favor? ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : votre classe prépare un voyage de quatre jours en Andalousie (données fictives). 3 juillet : arrivée à Séville en avion et visite de la ville ; 4 juillet : train pour Cordoue ; 5 juillet : bus pour Grenade, nuit en auberge de jeunesse ; 6 juillet : visite de l'Alhambra le matin, retour en avion l'après-midi. Rédigez le programme en espagnol au futur proche (nosotros), puis écrivez le message à l'auberge pour réserver deux chambres doubles pour la nuit du 5 juillet et demander le prix.",
              hint: "Une phrase par jour, avec la date (el 3 de julio), ir a + infinitif et le moyen de transport (en avión, en tren, en autobús). Pour le message, vouvoyez et employez « Quisiera ».",
              solution: [
                "« El 3 de julio vamos a llegar a Sevilla en avión y vamos a visitar la ciudad. »",
                "« El 4 de julio vamos a ir a Córdoba en tren. »",
                "« El 5 de julio vamos a viajar a Granada en autobús y vamos a dormir en un albergue juvenil. »",
                "« El 6 de julio, por la mañana, vamos a visitar la Alhambra y por la tarde vamos a volver a Francia en avión. »",
                "Message : « Buenos días: quisiera reservar dos habitaciones dobles para la noche del 5 de julio. ¿Cuánto cuesta por noche? ¿El desayuno está incluido? Muchas gracias. »",
                "Vérification : ir conjugué à nosotros (vamos) + a + infinitif ; mois sans majuscule ; « en » devant chaque moyen de transport ; politesse (quisiera, gracias).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique le voyage d'Ana au Pérou (données fictives), en lisant bien les dates.",
            items: [
              "El dos de agosto salimos de París en avión.",
              "El tres de agosto visitamos Lima, la capital de Perú.",
              "El cinco de agosto llegamos a Cuzco en avión.",
              "El siete de agosto subimos a Machu Picchu.",
              "El diez de agosto visitamos el lago Titicaca.",
              "El doce de agosto volvemos a Francia.",
            ],
          },
          quiz: [
            { q: "Comment dit-on « un aller-retour » ?", options: ["un billete de ida y vuelta", "un billete de vuelta", "un billete de salida y llegada", "un billete de ida"], answer: 0, why: "De ida = aller ; de ida y vuelta = aller-retour." },
            { q: "Quelle monnaie utilise-t-on au Pérou ?", options: ["l'euro", "le peso", "le dollar", "le sol"], answer: 3, why: "La monnaie du Pérou est le sol ; le peso est utilisé notamment au Mexique, en Argentine et en Colombie." },
            { q: "Quelle phrase permet de demander poliment de l'aide à un adulte inconnu ?", options: ["¿Me ayudas, tío?", "¡Ayúdame!", "¿Me puede ayudar, por favor?", "¿Tú me puedes ayudar ahora mismo, chico?"], answer: 2, why: "On vouvoie un adulte inconnu : poder à la 3e personne (puede), avec « por favor »." },
            { q: "À la gare, « la salida » signifie :", options: ["le départ", "l'arrivée", "le quai", "le guichet"], answer: 0, why: "La salida = le départ ; la llegada = l'arrivée ; el andén = le quai." },
            { q: "Dans quel pays se trouve le Machu Picchu ?", options: ["au Mexique", "en Bolivie", "en Argentine", "au Pérou"], answer: 3, why: "Le Machu Picchu est une cité inca située dans les Andes, au Pérou." },
          ],
          trap: "Dire « en pie » au lieu de « a pie », ou tutoyer un employé (« ¿Me puedes ayudar? ») au lieu de le vouvoyer (« ¿Me puede ayudar? »). Autre confusion fréquente : « la salida » (le départ) et « la llegada » (l'arrivée).",
          method: "Préparez votre voyage comme un jeu de rôle : écrivez sur des cartes les situations (gare, hôtel, office de tourisme) et, pour chacune, trois questions polies avec usted. Entraînez-vous à deux, l'un joue l'employé, l'autre le voyageur, puis échangez les rôles.",
        },
      ],
    },
  ],
}
