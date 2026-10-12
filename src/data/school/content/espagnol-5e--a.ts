import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'espagnol-5e',
  chapters: [
    {
      id: 'premiers-pas',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'saluer',
          title: 'Saluer et prendre congé : « ¡Hola! », « ¡Adiós! »',
          minutes: 20,
          objectives: [
            "Saluer une personne en choisissant la formule adaptée au moment de la journée.",
            "Demander à quelqu'un comment il va et répondre simplement.",
            "Prendre congé avec la formule qui convient.",
            "Distinguer le tutoiement (« tú ») et le vouvoiement (« usted ») en espagnol.",
          ],
          course: [
            {
              heading: "Dire bonjour selon le moment de la journée",
              paragraphs: [
                "Le mot le plus simple pour saluer est « ¡Hola! » (bonjour, salut). Il convient à tout moment de la journée et avec presque tout le monde. Attention : le h ne se prononce jamais en espagnol, on dit donc « ola ».",
                "Pour être un peu plus poli, on choisit la formule selon l'heure. « Buenos días » s'emploie le matin, jusqu'au déjeuner. « Buenas tardes » s'emploie l'après-midi, jusqu'à la tombée de la nuit. « Buenas noches » s'emploie le soir, à la fois pour dire bonsoir et pour dire bonne nuit. En Espagne, on déjeune tard (vers 14 h), si bien que l'on peut encore dire « buenos días » à 13 h.",
                "Ces formules sont au pluriel : on dit « buenos días » et non « buen día » en Espagne. Remarquez aussi que « día » est masculin (buenos), alors que « tarde » et « noche » sont féminins (buenas). On combine souvent les deux : « ¡Hola, buenos días! ».",
              ],
              box: { label: "À retenir", text: "¡Hola! : bonjour, salut (à tout moment). Buenos días : bonjour (le matin). Buenas tardes : bonjour (l'après-midi). Buenas noches : bonsoir, bonne nuit." },
            },
            {
              heading: "Demander des nouvelles et répondre",
              paragraphs: [
                "Après le bonjour, on demande souvent comment va la personne. Entre amis, on dit « ¿Qué tal? » (ça va ?) ou « ¿Cómo estás? » (comment vas-tu ?). On répond : « Muy bien » (très bien), « Bien » (bien), « Regular » (comme ci, comme ça), « Mal » (mal). On ajoute volontiers « gracias » (merci) et on renvoie la question : « Bien, gracias, ¿y tú? » (bien, merci, et toi ?).",
                "Quand on rencontre quelqu'un pour la première fois, on dit « Encantado » si l'on est un garçon, « Encantada » si l'on est une fille (enchanté, enchantée), ou « Mucho gusto » (très heureux de vous connaître), qui ne change pas.",
              ],
              box: { label: "Règle", text: "En espagnol, une question commence par « ¿ » et finit par « ? » ; une exclamation commence par « ¡ » et finit par « ! ». Exemples : ¿Qué tal? ; ¡Hola! Le signe renversé annonce dès le début le ton de la phrase." },
            },
            {
              heading: "Tutoyer ou vouvoyer : « tú » et « usted »",
              paragraphs: [
                "Comme en français, l'espagnol distingue deux façons de s'adresser à quelqu'un. On emploie « tú » avec un ami, un camarade ou un membre de sa famille : « ¿Cómo estás? ». On emploie « usted » avec un adulte que l'on ne connaît pas, un professeur ou une personne âgée : « ¿Cómo está usted? ».",
                "Particularité importante : « usted » se conjugue comme « él » et « ella », c'est-à-dire à la troisième personne du singulier. On dit donc « usted está », « usted tiene ». En Espagne, les jeunes se tutoient très vite, et même beaucoup d'adultes entre eux.",
              ],
            },
            {
              heading: "Prendre congé et saluer à la manière hispanique",
              paragraphs: [
                "Pour dire au revoir, on dit « ¡Adiós! ». On précise souvent quand on se reverra : « ¡Hasta luego! » (à plus tard), « ¡Hasta mañana! » (à demain), « ¡Hasta pronto! » (à bientôt), « ¡Hasta el lunes! » (à lundi). En Amérique latine, on entend aussi très souvent « ¡Chao! » ou « ¡Chau! », emprunté à l'italien.",
                "Les gestes comptent aussi. En Espagne, entre amis et en famille, on fait deux bises (« dos besos »), une sur chaque joue. En Amérique latine, on fait le plus souvent une seule bise. Entre adultes qui ne se connaissent pas, on se serre la main (« dar la mano »).",
              ],
              box: { label: "À retenir", text: "¡Adiós! : au revoir. ¡Hasta luego! : à plus tard. ¡Hasta mañana! : à demain. ¡Hasta pronto! : à bientôt. ¡Chao! : salut (Amérique latine)." },
            },
          ],
          keyPoints: [
            "¡Hola! convient à tout moment ; le h ne se prononce pas.",
            "Buenos días (le matin), buenas tardes (l'après-midi), buenas noches (le soir et la nuit).",
            "¿Qué tal? / ¿Cómo estás? → Muy bien, bien, regular, mal.",
            "Tú pour un ami ; usted pour un adulte inconnu, conjugué comme él : ¿Cómo está usted?",
            "¡Adiós!, ¡Hasta luego!, ¡Hasta mañana!, ¡Hasta pronto!",
            "Une question s'ouvre avec ¿ et une exclamation avec ¡.",
          ],
          example: {
            statement: "Il est 16 h. Vous croisez votre voisine, Señora García, que vous connaissez peu. Saluez-la, demandez-lui comment elle va, puis prenez congé en lui disant à demain.",
            solution: [
              "Il est 16 h, c'est l'après-midi : on choisit « Buenas tardes ».",
              "On s'adresse à une adulte que l'on connaît peu : on la vouvoie avec « usted ».",
              "« Usted » se conjugue à la 3e personne : « ¿Cómo está usted? » (et non « ¿Cómo estás? »).",
              "Pour dire « à demain », on emploie « Hasta mañana ». On n'oublie pas les signes renversés.",
              "Réponse : « ¡Buenas tardes, señora García! ¿Cómo está usted? [...] ¡Hasta mañana! »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez la formule de salutation qui convient : a) 8 h, en arrivant au collège ; b) 15 h, chez le médecin ; c) 22 h, avant d'aller dormir ; d) à n'importe quelle heure, avec un copain.",
              hint: "Repérez d'abord le moment de la journée : matin, après-midi ou soir. Une formule convient à toute heure.",
              solution: [
                "a) Le matin : « Buenos días ».",
                "b) L'après-midi : « Buenas tardes ».",
                "c) Le soir, avant de dormir : « Buenas noches ».",
                "d) À toute heure, entre amis : « ¡Hola! ».",
              ],
            },
            {
              level: 2,
              statement: "Remettez ce dialogue dans l'ordre et recopiez-le avec la bonne ponctuation : a) Bien gracias y tú ; b) Hola Marta qué tal ; c) Hasta luego Pablo ; d) Muy bien Adiós Marta.",
              hint: "Un dialogue commence par une salutation et finit par un au revoir. Ajoutez ¿ ? autour des questions et ¡ ! autour des exclamations.",
              solution: [
                "Le dialogue commence par la salutation et la question : « ¡Hola, Marta! ¿Qué tal? » (b).",
                "Marta répond et renvoie la question : « Bien, gracias, ¿y tú? » (a).",
                "Pablo répond puis prend congé : « Muy bien. ¡Adiós, Marta! » (d).",
                "Marta prend congé à son tour : « ¡Hasta luego, Pablo! » (c).",
                "Ordre final : b, a, d, c.",
              ],
            },
            {
              level: 3,
              statement: "Défi : écrivez deux mini-dialogues de quatre répliques. Dans le premier, vous rencontrez votre ami Diego à 10 h. Dans le second, vous rencontrez à 18 h le nouveau professeur, Señor Ruiz, pour la première fois. Utilisez à chaque fois une salutation, une question sur la santé, une réponse et une formule pour prendre congé.",
              hint: "Avec Diego, on tutoie (tú, estás) ; avec le professeur, on vouvoie (usted, está). Pensez à « Encantado » ou « Encantada » pour une première rencontre.",
              solution: [
                "Dialogue 1 (le matin, entre amis, tutoiement) : « ¡Hola, Diego! ¿Qué tal? » / « Muy bien, ¿y tú? » / « Regular... ¡Hasta luego! » / « ¡Adiós! ».",
                "Dialogue 2 (18 h, c'est encore l'après-midi en Espagne ; adulte inconnu, vouvoiement) : « Buenas tardes, señor Ruiz. Encantado. » / « Mucho gusto. » / « ¿Cómo está usted? » / « Muy bien, gracias. ¡Hasta mañana! ».",
                "Vérification : « estás » avec tú, « está » avec usted ; signes ¿ et ¡ au début des questions et des exclamations ; « Encantada » si c'est une élève qui parle.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque formule espagnole à sa traduction.",
            pairs: [
              { left: "Buenos días", right: "Bonjour (le matin)" },
              { left: "Buenas noches", right: "Bonsoir, bonne nuit" },
              { left: "¿Qué tal?", right: "Ça va ?" },
              { left: "Hasta mañana", right: "À demain" },
              { left: "Hasta luego", right: "À plus tard" },
              { left: "Encantada", right: "Enchantée" },
            ],
          },
          quiz: [
            { q: "Il est 15 h. Quelle formule employez-vous ?", options: ["Buenos días", "Buenas tardes", "Buenas noches", "Hasta mañana"], answer: 1, why: "L'après-midi, on dit « buenas tardes ». « Buenos días » s'emploie le matin et « buenas noches » le soir." },
            { q: "Comment demander à un adulte inconnu comment il va ?", options: ["¿Cómo estás?", "¿Qué tal estás tú, amigo?", "¿Y tú?", "¿Cómo está usted?"], answer: 3, why: "Avec un adulte que l'on ne connaît pas, on vouvoie : « usted » se conjugue à la 3e personne, « está »." },
            { q: "Que signifie « ¡Hasta pronto! » ?", options: ["À bientôt !", "À demain !", "Bonne nuit !"], answer: 0, why: "« Pronto » signifie bientôt. « À demain » se dit « hasta mañana »." },
            { q: "Laquelle de ces phrases est correctement ponctuée ?", options: ["Qué tal?", "¿Qué tal?", "¿Qué tal¿", "Qué tal¿"], answer: 1, why: "Une question espagnole s'ouvre avec le point d'interrogation renversé « ¿ » et se ferme avec « ? »." },
            { q: "Une fille rencontre quelqu'un pour la première fois. Elle dit :", options: ["Encantado.", "Regular.", "Encantada.", "Adiós."], answer: 2, why: "« Encantado » s'accorde avec la personne qui parle : une fille dit « encantada »." },
          ],
          trap: "Dire « buenas días » ou « buenos tardes » : « día » est masculin (buenos días), « tarde » et « noche » sont féminins (buenas tardes, buenas noches). Autre erreur : oublier le signe renversé au début d'une question ou d'une exclamation.",
          method: "Associez chaque formule à un moment précis de votre journée : en vous levant, pensez « buenos días » ; en rentrant du collège, « buenas tardes » ; en vous couchant, « buenas noches ». Saluez à voix haute à chaque fois pendant une semaine : les formules deviendront automatiques.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'alphabet-prononciation',
          title: "L'alphabet, la prononciation et l'accent tonique",
          minutes: 30,
          objectives: [
            "Épeler un mot en espagnol avec le nom des lettres de l'alphabet.",
            "Prononcer correctement les sons propres à l'espagnol (jota, ñ, rr, ll, z).",
            "Repérer la syllabe accentuée d'un mot grâce aux règles de l'accent tonique.",
            "Expliquer le rôle de l'accent écrit.",
          ],
          course: [
            {
              heading: "L'alphabet espagnol",
              paragraphs: [
                "L'alphabet espagnol compte 27 lettres : les 26 lettres de l'alphabet français, plus la lettre « ñ » (eñe), placée juste après le n. On la trouve dans des mots très courants : « España », « el año » (l'année), « el niño » (l'enfant), « mañana » (demain).",
                "Les lettres sont féminines : on dit « la a », « la be ». Voici leur nom : a, be, ce, de, e, efe, ge, hache, i, jota, ka, ele, eme, ene, eñe, o, pe, cu, erre, ese, te, u, uve, uve doble, equis, ye, zeta. Pour épeler votre prénom, vous dites par exemple : « Hugo : hache, u, ge, o ».",
                "On rencontre aussi « ch » (che), « ll » (doble ele) et « rr » (doble erre). Ce sont des groupes de deux lettres qui forment un seul son, mais ils ne comptent pas comme des lettres de l'alphabet.",
              ],
              box: { label: "Repère", text: "27 lettres : les 26 lettres du français + la « ñ ». Les lettres sont féminines (la jota, la eñe). Les signes ¿ et ¡ et l'accent écrit (´) font partie de l'orthographe." },
            },
            {
              heading: "Les sons propres à l'espagnol",
              paragraphs: [
                "Les voyelles se prononcent toujours de la même façon : a, e (toujours « é »), i, o, u (toujours « ou »). « Luna » se dit « louna », « leche » se dit « létché ». Chaque voyelle se prononce, même en fin de mot : « noche » se dit « notché », jamais « noch ».",
                "Plusieurs consonnes surprennent un francophone. La « j », et la « g » devant e ou i, se prononcent comme un « r » raclé du fond de la gorge : « jamón », « la gente », « el gigante ». Le « h » est muet : « hola » se dit « ola ». La « ñ » se prononce comme « gn » dans montagne. Le « ch » se dit « tch » : « chocolate ». Le « ll » se prononce le plus souvent comme un « y » : « la calle » (la rue) se dit « la cayé ».",
                "Le « r » est roulé : un seul battement de langue au milieu d'un mot (« pero », mais), plusieurs battements pour « rr » et pour un « r » en début de mot (« perro », chien ; « Roma »). Le « v » se prononce comme un « b ». Enfin, la « z », et la « c » devant e ou i, se prononcent dans la plus grande partie de l'Espagne comme le « th » anglais, la langue entre les dents (« zapato », « cinco ») ; en Amérique latine et dans le sud de l'Espagne, on les prononce « s ».",
              ],
              box: { label: "À retenir", text: "j, ge, gi : son raclé (jamón, gente). h : muet (hola). ñ : gn (España). ch : tch (chico). ll : y (calle). rr : r roulé fort (perro). u : ou (luna). e : é (leche). z, ce, ci : th anglais en Espagne, s en Amérique latine." },
            },
            {
              heading: "L'accent tonique : deux règles simples",
              paragraphs: [
                "En espagnol, chaque mot a une syllabe prononcée plus fort que les autres : c'est l'accent tonique. Le bien placer est indispensable pour être compris. Deux règles permettent de le trouver.",
                "Règle 1 : un mot terminé par une voyelle, par « n » ou par « s » est accentué sur l'avant-dernière syllabe : CA-sa, ma-ÑA-na, JO-ven, LU-nes. Règle 2 : un mot terminé par une autre consonne est accentué sur la dernière syllabe : ha-BLAR, pa-PEL, ciu-DAD, re-LOJ.",
              ],
              box: { label: "Règle", text: "Terminé par une voyelle, n ou s → accent sur l'avant-dernière syllabe (casa, joven, lunes). Terminé par une autre consonne → accent sur la dernière syllabe (hablar, papel). Sinon, un accent écrit indique la syllabe accentuée." },
            },
            {
              heading: "L'accent écrit : quand le mot ne suit pas la règle",
              paragraphs: [
                "Quand un mot ne respecte pas ces deux règles, on place un accent écrit (toujours dans le même sens : á, é, í, ó, ú) sur la voyelle de la syllabe accentuée. « Café » finit par une voyelle mais s'accentue sur la dernière syllabe : il faut un accent. « Canción » finit par n mais s'accentue sur la dernière syllabe : accent. « Árbol » et « lápiz » finissent par une consonne autre que n ou s mais s'accentuent sur l'avant-dernière syllabe : accent.",
                "Les mots accentués sur l'antépénultième syllabe (la troisième en partant de la fin) portent toujours un accent écrit : « música », « teléfono », « sábado ». L'accent écrit sert aussi à distinguer deux mots qui s'écrivent pareil : « tú » (toi, tu) et « tu » (ton, ta) ; « sí » (oui) et « si » (si). Les mots interrogatifs en portent un : « ¿qué? », « ¿cómo? », « ¿dónde? ».",
              ],
            },
          ],
          keyPoints: [
            "27 lettres : l'alphabet français + la ñ.",
            "Voyelles : e se dit « é », u se dit « ou » ; toutes les voyelles se prononcent.",
            "j, ge, gi : son raclé ; h muet ; ll comme y ; rr très roulé ; v comme b.",
            "Mot terminé par voyelle, n ou s → accent sur l'avant-dernière syllabe.",
            "Mot terminé par une autre consonne → accent sur la dernière syllabe.",
            "L'accent écrit signale une exception (café, árbol, música) ou distingue deux mots (tú / tu).",
          ],
          example: {
            statement: "Indiquez la syllabe accentuée de « amigo », « comer », « canción » et « lápiz », et expliquez pourquoi deux d'entre eux portent un accent écrit.",
            solution: [
              "« amigo » finit par une voyelle : règle 1, accent sur l'avant-dernière syllabe, a-MI-go. Pas d'accent écrit.",
              "« comer » finit par r, une consonne autre que n ou s : règle 2, accent sur la dernière syllabe, co-MER. Pas d'accent écrit.",
              "« canción » finit par n : la règle 1 voudrait CAN-cion. Or on prononce can-CIÓN : le mot ne suit pas la règle, il faut un accent écrit sur le o.",
              "« lápiz » finit par z : la règle 2 voudrait la-PIZ. Or on prononce LÁ-piz : exception, d'où l'accent écrit sur le a.",
              "Réponse : a-MI-go, co-MER (réguliers) ; can-CIÓN, LÁ-piz (exceptions signalées par l'accent écrit).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Épelez en espagnol, avec le nom des lettres : a) SOL ; b) HIJO ; c) AÑO ; d) VIZCAYA.",
              hint: "Rappelez-vous : h = hache, j = jota, ñ = eñe, v = uve, z = zeta, y = ye.",
              solution: [
                "a) SOL : ese, o, ele.",
                "b) HIJO : hache, i, jota, o.",
                "c) AÑO : a, eñe, o.",
                "d) VIZCAYA : uve, i, zeta, ce, a, ye, a.",
              ],
            },
            {
              level: 2,
              statement: "Pour chaque mot, soulignez la syllabe accentuée et dites quelle règle s'applique : a) ventana ; b) reloj ; c) examen ; d) azul ; e) zapatos.",
              hint: "Regardez d'abord la dernière lettre du mot : voyelle, n ou s, ou une autre consonne ?",
              solution: [
                "a) ven-TA-na : finit par une voyelle, règle 1 (avant-dernière syllabe).",
                "b) re-LOJ : finit par j, règle 2 (dernière syllabe).",
                "c) e-XA-men : finit par n, règle 1 (avant-dernière syllabe). Pas d'accent écrit au singulier.",
                "d) a-ZUL : finit par l, règle 2 (dernière syllabe).",
                "e) za-PA-tos : finit par s, règle 1 (avant-dernière syllabe).",
              ],
            },
            {
              level: 3,
              statement: "Défi : ces mots sont écrits sans leur accent écrit. On vous indique entre parenthèses la syllabe prononcée plus fort. Ajoutez l'accent seulement s'il est nécessaire et justifiez : a) arbol (AR) ; b) cafe (FE) ; c) mesa (ME) ; d) sabado (SA) ; e) animal (MAL) ; f) facil (FA).",
              hint: "Comparez la prononciation donnée avec ce que prévoit la règle. Si elles coïncident, pas d'accent ; sinon, accent sur la voyelle de la syllabe forte.",
              solution: [
                "a) arbol finit par l : la règle 2 prévoit ar-BOL, or on dit AR-bol → accent : « árbol ».",
                "b) cafe finit par une voyelle : la règle 1 prévoit CA-fe, or on dit ca-FE → accent : « café ».",
                "c) mesa : la règle 1 prévoit ME-sa, c'est bien la prononciation → pas d'accent : « mesa ».",
                "d) sabado : accent sur l'antépénultième syllabe, toujours un accent écrit → « sábado ».",
                "e) animal finit par l : la règle 2 prévoit a-ni-MAL, c'est la prononciation → pas d'accent : « animal ».",
                "f) facil finit par l : la règle 2 prévoit fa-CIL, or on dit FA-cil → accent : « fácil ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la prononciation espagnole.",
            statements: [
              { text: "En espagnol, le h de « hola » se prononce comme en anglais.", true: false, why: "Le h est toujours muet en espagnol : on dit « ola »." },
              { text: "L'alphabet espagnol contient la lettre ñ.", true: true, why: "La ñ (eñe) est la 27e lettre, placée après le n : España, año." },
              { text: "Le u de « luna » se prononce comme le u de « lune ».", true: false, why: "Le u espagnol se prononce « ou » : « louna »." },
              { text: "« Perro » (chien) et « pero » (mais) se prononcent de la même façon.", true: false, why: "Le rr est roulé fort, avec plusieurs battements ; le r simple n'en a qu'un. Les deux mots sont donc bien distincts à l'oral." },
              { text: "« Joven » est accentué sur la syllabe JO.", true: true, why: "Il finit par n : l'accent tombe sur l'avant-dernière syllabe, JO-ven." },
              { text: "Tous les mots espagnols portent un accent écrit.", true: false, why: "L'accent écrit n'apparaît que sur les mots qui ne suivent pas les deux règles de l'accent tonique." },
              { text: "En Amérique latine, le z de « zapato » se prononce comme un s.", true: true, why: "C'est le « seseo », général en Amérique latine. Dans la plus grande partie de l'Espagne, on le prononce comme le th anglais." },
            ],
          },
          quiz: [
            { q: "Combien de lettres compte l'alphabet espagnol ?", options: ["26", "28", "27", "30"], answer: 2, why: "Les 26 lettres du français, plus la ñ : 27 lettres. Ch, ll et rr ne sont pas des lettres de l'alphabet." },
            { q: "Comment se prononce le « j » de « jamón » ?", options: ["Comme le j français de « jardin »", "Comme un r raclé de la gorge", "Comme un y", "Il est muet"], answer: 1, why: "La jota est un son raclé, produit au fond de la gorge." },
            { q: "Où tombe l'accent tonique de « hablan » ?", options: ["Sur la syllabe LAN", "Sur les deux syllabes", "Sur la syllabe HA"], answer: 2, why: "Le mot finit par n : l'accent tombe sur l'avant-dernière syllabe, HA-blan." },
            { q: "Quel mot doit porter un accent écrit ?", options: ["musica", "mesa", "papel", "ventana"], answer: 0, why: "« Música » est accentué sur l'antépénultième syllabe : il porte toujours un accent écrit." },
            { q: "Quelle est la différence entre « tú » et « tu » ?", options: ["« tu » est la forme polie de « tú » devant un adulte", "Aucune, ce sont deux orthographes", "« tú » est un pluriel", "« tú » : toi ; « tu » : ton"], answer: 3, why: "L'accent écrit distingue deux mots : « tú » est le pronom sujet (toi, tu), « tu » est le possessif (ton, ta)." },
          ],
          trap: "Prononcer le u « u » à la française et le e muet : en espagnol, u se dit toujours « ou » et le e final se prononce « é » (noche = « notché »). Autre erreur fréquente : mettre l'accent tonique sur la dernière syllabe de tous les mots, comme en français.",
          method: "Pour chaque nouveau mot, lisez-le à voix haute en tapant dans vos mains sur la syllabe forte. Puis vérifiez avec les deux règles : voyelle, n ou s → avant-dernière syllabe ; autre consonne → dernière syllabe. Si la prononciation ne colle pas à la règle, c'est qu'il y a un accent écrit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'monde-hispanique',
          title: 'Où parle-t-on espagnol dans le monde ?',
          minutes: 25,
          objectives: [
            "Situer les principaux pays où l'espagnol est langue officielle.",
            "Nommer quelques pays, capitales et nationalités du monde hispanique.",
            "Dire d'où l'on vient et quelle est sa nationalité avec « ser de ».",
            "Comprendre pourquoi l'espagnol est présent sur plusieurs continents.",
          ],
          course: [
            {
              heading: "Une langue parlée sur plusieurs continents",
              paragraphs: [
                "L'espagnol est né en Espagne, dans la région de Castille : c'est pourquoi on l'appelle aussi « el castellano » (le castillan). À partir de 1492, les explorateurs et les colons espagnols l'ont emporté en Amérique, où il est devenu la langue de la majorité des habitants.",
                "Aujourd'hui, l'espagnol est la langue officielle de 20 pays. Selon l'Instituto Cervantes, l'organisme public espagnol chargé de diffuser la langue, il est la langue maternelle d'environ 500 millions de personnes, ce qui en fait la deuxième langue maternelle du monde après le chinois mandarin. On le parle aussi beaucoup aux États-Unis, où des dizaines de millions d'habitants sont hispanophones.",
              ],
              box: { label: "Définition", text: "Hispanophone (en espagnol « hispanohablante ») : qui parle espagnol. Le monde hispanique désigne l'ensemble des pays et des peuples de langue espagnole." },
            },
            {
              heading: "Les pays hispanophones",
              paragraphs: [
                "En Europe : l'Espagne (capitale Madrid). En Afrique : la Guinée équatoriale. En Amérique du Nord : le Mexique (capitale Ciudad de México), le pays hispanophone le plus peuplé du monde.",
                "En Amérique centrale et dans les Caraïbes : le Guatemala, le Honduras, le Salvador, le Nicaragua, le Costa Rica, le Panama, Cuba (capitale La Habana) et la République dominicaine. À Porto Rico, territoire associé aux États-Unis, l'espagnol est aussi langue officielle.",
                "En Amérique du Sud : la Colombie (Bogotá), le Venezuela (Caracas), l'Équateur (Quito), le Pérou (Lima), la Bolivie, le Chili (Santiago), l'Argentine (Buenos Aires), le Paraguay (Asunción) et l'Uruguay (Montevideo). Attention : au Brésil, la langue officielle est le portugais, et non l'espagnol.",
              ],
              box: { label: "Repère", text: "20 pays : 1 en Europe (Espagne), 1 en Afrique (Guinée équatoriale), 18 en Amérique (Mexique, 8 pays d'Amérique centrale et des Caraïbes, 9 pays d'Amérique du Sud). Le Brésil parle portugais." },
            },
            {
              heading: "Dire d'où l'on vient : « ser de » et les nationalités",
              paragraphs: [
                "Pour demander à quelqu'un d'où il vient, on dit « ¿De dónde eres? » (d'où es-tu ?). On répond avec le verbe « ser » suivi de « de » et du nom du lieu : « Soy de Francia » (je viens de France), « Soy de Lyon ». Pour parler d'une autre personne : « Lucía es de Colombia ».",
                "On peut aussi donner sa nationalité : « Soy francés » (garçon), « Soy francesa » (fille). Les adjectifs de nationalité s'écrivent avec une minuscule et ont une forme féminine : español / española, mexicano / mexicana, argentino / argentina, colombiano / colombiana, chileno / chilena. Les noms de pays, eux, prennent une majuscule : España, México.",
              ],
              box: { label: "Règle", text: "¿De dónde eres? → Soy de + lieu (Soy de Francia). Nationalité : Soy + adjectif accordé, avec une minuscule (Soy francés, soy francesa ; ella es mexicana)." },
            },
            {
              heading: "L'Espagne, un pays de plusieurs langues",
              paragraphs: [
                "En Espagne, le castillan est la langue officielle de tout le pays, mais d'autres langues sont officielles dans certaines régions, à côté du castillan : le catalan en Catalogne, le galicien en Galice, le basque (« el euskera ») au Pays basque. En Amérique latine aussi, l'espagnol côtoie des langues indigènes, comme le quechua au Pérou et en Bolivie, le guarani au Paraguay ou le nahuatl au Mexique.",
                "D'un pays à l'autre, l'espagnol change un peu : la prononciation, certains mots, certaines formules. Mais tous les hispanophones se comprennent très bien, un peu comme un Français, un Québécois et un Belge.",
              ],
            },
          ],
          keyPoints: [
            "L'espagnol, ou castillan, est langue officielle de 20 pays, sur trois continents.",
            "Environ 500 millions de locuteurs natifs selon l'Instituto Cervantes.",
            "Le Mexique est le pays hispanophone le plus peuplé ; au Brésil, on parle portugais.",
            "¿De dónde eres? → Soy de Francia.",
            "Nationalités avec une minuscule et accordées : francés / francesa, mexicano / mexicana.",
            "En Espagne, le catalan, le galicien et le basque sont aussi officiels dans leur région.",
          ],
          example: {
            statement: "Présentez Mateo et Valentina en une phrase chacun : Mateo vient de Buenos Aires, Valentina vient de Bogotá. Donnez leur pays et leur nationalité.",
            solution: [
              "Buenos Aires est la capitale de l'Argentine ; Bogotá est la capitale de la Colombie.",
              "Pour dire d'où vient une autre personne, on emploie « es de » (3e personne de ser).",
              "Mateo est un garçon : argentino. Valentina est une fille : colombiana (minuscule, accord au féminin).",
              "Réponse : « Mateo es de Buenos Aires, en Argentina: es argentino. Valentina es de Bogotá, en Colombia: es colombiana. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque capitale à son pays : Lima, Madrid, Santiago, La Habana, Caracas. Pays : Cuba, Chili, Pérou, Venezuela, Espagne.",
              hint: "Aidez-vous de la liste du cours, classée par continent.",
              solution: [
                "Lima : capitale du Pérou.",
                "Madrid : capitale de l'Espagne.",
                "Santiago : capitale du Chili.",
                "La Habana : capitale de Cuba.",
                "Caracas : capitale du Venezuela.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec « soy », « eres » ou « es », puis accordez l'adjectif de nationalité entre parenthèses : a) Yo ... de París, ... (francés) [une fille parle]. b) ¿De dónde ... tú? c) Carlos ... de México, ... (mexicano). d) Ana ... de Madrid, ... (español).",
              hint: "Ser au présent : yo soy, tú eres, él / ella es. Un adjectif en -o fait -a au féminin ; « francés » et « español » ajoutent un -a (et francés perd son accent).",
              solution: [
                "a) « Yo soy de París, soy francesa. » (une fille : francés → francesa, l'accent disparaît).",
                "b) « ¿De dónde eres tú? »",
                "c) « Carlos es de México, es mexicano. »",
                "d) « Ana es de Madrid, es española. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : un camarade affirme : « On parle espagnol dans toute l'Amérique du Sud, et en Espagne on ne parle que l'espagnol. » Corrigez ses deux erreurs en deux ou trois phrases en français, puis écrivez en espagnol une phrase qui dit d'où vous venez et votre nationalité.",
              hint: "Pensez au plus grand pays d'Amérique du Sud, et aux langues régionales d'Espagne.",
              solution: [
                "Erreur 1 : au Brésil, le plus grand pays d'Amérique du Sud, la langue officielle est le portugais (il en va de même pour quelques autres territoires, comme la Guyane, qui est française). L'espagnol n'est donc pas parlé dans toute l'Amérique du Sud.",
                "Erreur 2 : en Espagne, le castillan est officiel partout, mais le catalan, le galicien et le basque sont aussi officiels dans leur région.",
                "Phrase en espagnol, par exemple : « Soy de Nantes, en Francia: soy francés » (ou « soy francesa » pour une fille).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque pays à sa capitale.",
            pairs: [
              { left: "España", right: "Madrid" },
              { left: "Argentina", right: "Buenos Aires" },
              { left: "Colombia", right: "Bogotá" },
              { left: "Perú", right: "Lima" },
              { left: "Cuba", right: "La Habana" },
              { left: "Uruguay", right: "Montevideo" },
            ],
          },
          quiz: [
            { q: "Dans lequel de ces pays l'espagnol n'est-il PAS la langue officielle ?", options: ["Chile", "Brasil", "Paraguay", "Ecuador"], answer: 1, why: "Au Brésil, la langue officielle est le portugais." },
            { q: "Quel est le pays hispanophone le plus peuplé ?", options: ["España", "Argentina", "Colombia", "México"], answer: 3, why: "Le Mexique compte plus de 120 millions d'habitants, bien plus que l'Espagne, l'Argentine ou la Colombie." },
            { q: "Comment dit-on « D'où viens-tu ? » ?", options: ["¿De dónde eres?", "¿Cómo te llamas?", "¿Qué tal estás hoy?"], answer: 0, why: "« ¿De dónde eres? » demande l'origine ; on répond « Soy de... »." },
            { q: "Une fille de Mexico dit :", options: ["Soy Mexicano.", "Soy mexicano.", "Soy mexicana.", "Es Mexicana."], answer: 2, why: "La nationalité s'accorde au féminin et s'écrit avec une minuscule ; « yo » se conjugue « soy »." },
            { q: "Dans quel pays d'Afrique l'espagnol est-il langue officielle ?", options: ["Le Maroc", "La République centrafricaine", "La Guinée équatoriale"], answer: 2, why: "La Guinée équatoriale, ancienne colonie espagnole, est le seul pays d'Afrique dont l'espagnol est langue officielle." },
          ],
          trap: "Écrire les nationalités avec une majuscule (« Soy Francés ») comme en anglais : en espagnol, l'adjectif de nationalité prend une minuscule, seuls les noms de pays et de villes prennent une majuscule. Autre erreur : croire que l'on parle espagnol au Brésil.",
          method: "Dessinez de mémoire une carte simplifiée de l'Amérique et de l'Europe, puis placez-y les pays hispanophones avec leur capitale. Vérifiez avec le cours et recommencez le lendemain : une carte que l'on a dessinée soi-même se retient bien mieux qu'une liste.",
        },
      ],
    },
    {
      id: 'portrait',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'se-presenter',
          title: 'Se présenter : « llamarse », « tener », les nombres',
          minutes: 30,
          objectives: [
            "Se présenter : dire son nom, son âge et où l'on habite.",
            "Conjuguer au présent « llamarse » et « tener ».",
            "Compter et écrire les nombres de 0 à 100.",
            "Poser les questions de présentation et y répondre.",
          ],
          course: [
            {
              heading: "Dire son nom : le verbe « llamarse »",
              paragraphs: [
                "Pour dire comment on s'appelle, on utilise le verbe « llamarse » (s'appeler). C'est un verbe pronominal, comme en français : le petit pronom (me, te, se...) se place devant le verbe. « Me llamo Inés » signifie « je m'appelle Inès ». Pour demander le nom d'un camarade : « ¿Cómo te llamas? » (comment t'appelles-tu ?). Pour parler d'une autre personne : « Mi amigo se llama Leo ».",
                "On peut aussi répondre plus simplement avec le verbe « ser » : « Soy Inés » (je suis Inès). Pour le nom de famille, on dit « el apellido ». Dans les pays hispaniques, chacun porte en général deux noms de famille : le premier nom du père, puis le premier nom de la mère. Le peintre Pablo Ruiz Picasso tenait ainsi « Ruiz » de son père et « Picasso » de sa mère.",
              ],
              box: { label: "Conjugaison", text: "llamarse : (yo) me llamo, (tú) te llamas, (él, ella, usted) se llama, (nosotros) nos llamamos, (vosotros) os llamáis, (ellos, ellas, ustedes) se llaman." },
            },
            {
              heading: "Dire son âge : le verbe « tener »",
              paragraphs: [
                "En espagnol comme en français, on « a » un âge : on emploie donc le verbe « tener » (avoir) suivi de « años ». « Tengo doce años » signifie « j'ai douze ans ». La question est : « ¿Cuántos años tienes? » (quel âge as-tu ?, littéralement « combien d'années as-tu ? »).",
                "« Tener » est irrégulier : son radical change à plusieurs personnes. Il faut l'apprendre par cœur, car il sert sans cesse : pour l'âge, mais aussi pour la famille (« tengo un hermano »), les objets ou la description (« tengo los ojos verdes »).",
                "Pour dire où l'on habite, on emploie « vivir en » : « Vivo en Toulouse » (j'habite à Toulouse). La question est « ¿Dónde vives? ». Notez qu'on emploie « en » devant une ville, là où le français dit « à ».",
              ],
              box: { label: "Conjugaison", text: "tener : tengo, tienes, tiene, tenemos, tenéis, tienen. Âge : Tengo + nombre + años (Tengo trece años). Question : ¿Cuántos años tienes?" },
            },
            {
              heading: "Les nombres de 0 à 30",
              paragraphs: [
                "De 0 à 15, les nombres sont à apprendre un par un : cero, uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, diez, once, doce, trece, catorce, quince.",
                "De 16 à 19, on soude « dieci » (dix et) au chiffre : dieciséis, diecisiete, dieciocho, diecinueve. De 21 à 29, on soude « veinti » : veintiuno, veintidós, veintitrés, veinticuatro, veinticinco, veintiséis, veintisiete, veintiocho, veintinueve. Attention aux accents écrits sur dieciséis, veintidós, veintitrés et veintiséis.",
                "Devant un nom masculin, « uno » perd son o : « un hermano » (un frère), « veintiún años » (vingt et un ans). Devant un nom féminin, il devient « una » : « una hermana », « veintiuna chicas ».",
              ],
              box: { label: "À retenir", text: "0 cero, 1 uno, 2 dos, 3 tres, 4 cuatro, 5 cinco, 6 seis, 7 siete, 8 ocho, 9 nueve, 10 diez, 11 once, 12 doce, 13 trece, 14 catorce, 15 quince, 16 dieciséis, 20 veinte, 22 veintidós, 30 treinta." },
            },
            {
              heading: "Les dizaines jusqu'à 100",
              paragraphs: [
                "Les dizaines sont : treinta (30), cuarenta (40), cincuenta (50), sesenta (60), setenta (70), ochenta (80), noventa (90) et cien (100). À partir de 31, on relie la dizaine et l'unité par « y » (et), en trois mots séparés : treinta y uno (31), cuarenta y cinco (45), noventa y nueve (99).",
                "Comparez avec le français : l'espagnol est plus régulier, car il n'a pas de « soixante-dix » ni de « quatre-vingts ». 70 se dit simplement « setenta » et 80 « ochenta ». Méfiez-vous des faux amis : « seis » (6) et « siete » (7) se ressemblent, tout comme « sesenta » (60) et « setenta » (70).",
              ],
              box: { label: "Règle", text: "De 16 à 29 : un seul mot (dieciocho, veinticinco). À partir de 31 : dizaine + y + unité, en trois mots (treinta y dos, sesenta y siete). 100 : cien." },
            },
          ],
          keyPoints: [
            "Me llamo... / ¿Cómo te llamas? (llamarse, verbe pronominal).",
            "Tengo + nombre + años / ¿Cuántos años tienes? (jamais « soy doce años »).",
            "tener : tengo, tienes, tiene, tenemos, tenéis, tienen.",
            "Vivo en + ville / ¿Dónde vives?",
            "16 à 29 en un mot (dieciséis, veintidós) ; à partir de 31 en trois mots (treinta y uno).",
            "70 setenta, 80 ochenta, 90 noventa, 100 cien.",
          ],
          example: {
            statement: "Traduisez cette présentation : « Bonjour ! Je m'appelle Léa, j'ai douze ans et j'habite à Lille. Mon frère s'appelle Tom, il a dix-sept ans. »",
            solution: [
              "« Bonjour ! » : « ¡Hola! », avec les deux points d'exclamation.",
              "« Je m'appelle Léa » : llamarse à la 1re personne, « me llamo Léa ».",
              "« j'ai douze ans » : tener + años, « tengo doce años ».",
              "« j'habite à Lille » : vivir en, « vivo en Lille ».",
              "« Mon frère s'appelle Tom, il a dix-sept ans » : « Mi hermano se llama Tom, tiene diecisiete años » (3e personne : se llama, tiene).",
              "Réponse : « ¡Hola! Me llamo Léa, tengo doce años y vivo en Lille. Mi hermano se llama Tom, tiene diecisiete años. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez en lettres : a) 14 ; b) 16 ; c) 23 ; d) 38 ; e) 75 ; f) 100.",
              hint: "Pour 16 et 23, un seul mot (attention aux accents) ; pour 38 et 75, trois mots reliés par « y ».",
              solution: [
                "a) 14 : catorce.",
                "b) 16 : dieciséis (accent sur le é).",
                "c) 23 : veintitrés (accent sur le é).",
                "d) 38 : treinta y ocho.",
                "e) 75 : setenta y cinco.",
                "f) 100 : cien.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec la bonne forme de « llamarse » ou de « tener » : a) Yo ... Pablo y ... once años. b) ¿Cómo ... tú? c) Mi hermana ... Sara y ... veinte años. d) Nosotros ... dos perros.",
              hint: "Repérez le sujet de chaque phrase, puis choisissez la personne : yo, tú, ella ou nosotros. N'oubliez pas le pronom de « llamarse ».",
              solution: [
                "a) « Yo me llamo Pablo y tengo once años. »",
                "b) « ¿Cómo te llamas tú? »",
                "c) « Mi hermana se llama Sara y tiene veinte años. »",
                "d) « Nosotros tenemos dos perros. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici la fiche d'un correspondant (données fictives). Nombre : Javier. Apellidos : Moreno Díaz. Edad : 13. Ciudad : Valencia. Hermanos : 2 (Lucía, 9 años ; Andrés, 15 años). Rédigez en espagnol sa présentation à la première personne, comme s'il parlait, en écrivant tous les nombres en lettres. Puis calculez, en espagnol, l'âge total des trois enfants.",
              hint: "Utilisez me llamo, tengo... años, vivo en, tengo dos hermanos. Pour l'addition : « trece más nueve más quince son... ».",
              solution: [
                "Présentation : « ¡Hola! Me llamo Javier Moreno Díaz. Tengo trece años y vivo en Valencia. Tengo dos hermanos: mi hermana se llama Lucía y tiene nueve años, y mi hermano se llama Andrés y tiene quince años. »",
                "Calcul : 13 + 9 + 15 = 37. Vérification : 13 + 9 = 22, et 22 + 15 = 37.",
                "En espagnol : « Trece más nueve más quince son treinta y siete. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Rangez ces nombres du plus petit au plus grand.",
            items: ["siete", "doce", "dieciséis", "veinte", "veintiocho", "setenta", "noventa y uno"],
          },
          quiz: [
            { q: "Comment dit-on « j'ai treize ans » ?", options: ["Soy trece años.", "Tengo trece años.", "Tengo treinta años.", "Me llamo trece años."], answer: 1, why: "On emploie « tener » pour l'âge, comme « avoir » en français. « Treinta » signifie 30." },
            { q: "Quel nombre correspond à « sesenta y cuatro » ?", options: ["74", "46", "64", "54"], answer: 2, why: "Sesenta = 60, cuatro = 4 : 64. Ne confondez pas sesenta (60) et setenta (70)." },
            { q: "Complétez : « ¿Cómo ... llamas? »", options: ["te", "se", "me"], answer: 0, why: "Avec tú, le pronom de llamarse est « te » : ¿Cómo te llamas?" },
            { q: "Comment écrit-on 22 ?", options: ["veinte y dos", "veintidos", "vientidós", "veintidós"], answer: 3, why: "De 21 à 29, le nombre s'écrit en un seul mot, et « veintidós » porte un accent écrit." },
            { q: "Quelle forme de « tener » va avec « ellos » ?", options: ["tenemos", "tienen", "tiene", "tenéis"], answer: 1, why: "Tener à la 3e personne du pluriel : ellos tienen." },
          ],
          trap: "Dire « Soy doce años » en traduisant mot à mot « je suis » : l'âge s'exprime avec « tener » (Tengo doce años). Autre piège fréquent : écrire « veinte y dos » en trois mots, alors que de 16 à 29 les nombres s'écrivent en un seul mot (veintidós).",
          method: "Entraînez-vous aux nombres avec ce qui vous entoure : lisez en espagnol, dans votre tête, les numéros de bus, les prix ou les pages de vos livres. Pour les conjugaisons, récitez « tengo, tienes, tiene, tenemos, tenéis, tienen » en comptant sur vos doigts, une personne par doigt.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'se-decrire',
          title: 'Se décrire : « ser » et l\'accord des adjectifs',
          minutes: 30,
          objectives: [
            "Conjuguer le verbe « ser » au présent.",
            "Décrire l'apparence physique et le caractère d'une personne.",
            "Accorder les adjectifs en genre et en nombre.",
            "Employer « tener » et « llevar » pour décrire les cheveux, les yeux et les accessoires.",
          ],
          course: [
            {
              heading: "Le verbe « ser » pour dire comment on est",
              paragraphs: [
                "Pour décrire une personne, on emploie le plus souvent le verbe « ser » (être). Il sert à donner les caractéristiques qui définissent quelqu'un : sa taille, son allure, son caractère, sa nationalité. « Soy alto y simpático » (je suis grand et sympathique). « Mi hermana es tímida » (ma sœur est timide).",
                "« Ser » est irrégulier, comme « être » en français. Apprenez-le par cœur. Comme en espagnol on omet souvent le pronom sujet, c'est la terminaison du verbe qui indique qui parle : « Es rubio » signifie « il est blond » ; « Somos amigos », « nous sommes amis ».",
              ],
              box: { label: "Conjugaison", text: "ser : (yo) soy, (tú) eres, (él, ella, usted) es, (nosotros) somos, (vosotros) sois, (ellos, ellas, ustedes) son." },
            },
            {
              heading: "Le vocabulaire du portrait",
              paragraphs: [
                "Le physique : alto (grand), bajo (petit), delgado (mince), fuerte (costaud), guapo (beau), joven (jeune), mayor (âgé, plus âgé). Les cheveux : moreno (brun), rubio (blond), pelirrojo (roux). Le mot « moreno » peut aussi désigner une peau mate.",
                "Le caractère : simpático (sympathique), antipático (antipathique), alegre (joyeux), divertido (drôle), serio (sérieux), tímido (timide), trabajador (travailleur), perezoso (paresseux), inteligente, generoso, amable (aimable). Pour nuancer, on ajoute « muy » (très), « bastante » (assez) ou « un poco » (un peu) : « Soy muy alegre pero un poco perezoso ».",
              ],
            },
            {
              heading: "L'accord des adjectifs",
              paragraphs: [
                "L'adjectif s'accorde en genre (masculin, féminin) et en nombre (singulier, pluriel) avec le nom qu'il décrit. Au féminin : un adjectif en -o prend -a (alto → alta, simpático → simpática). Un adjectif en -e ne change pas (alegre, inteligente). La plupart des adjectifs terminés par une consonne ne changent pas non plus (joven, azul, gris, feliz). Exceptions : les adjectifs de nationalité et ceux en -or ajoutent un -a (español → española, trabajador → trabajadora).",
                "Au pluriel : on ajoute -s après une voyelle (alto → altos, alegre → alegres) et -es après une consonne (joven → jóvenes, azul → azules). Le z devient c : feliz → felices. Quand on décrit un groupe de garçons et de filles, l'adjectif se met au masculin pluriel : « Mis primos son altos » (mes cousins et cousines sont grands).",
              ],
              box: { label: "Règle", text: "Féminin : -o → -a (alto, alta) ; -e et la plupart des consonnes : invariable (alegre, joven) ; nationalité et -or : + a (francesa, trabajadora). Pluriel : voyelle + s (altas), consonne + es (jóvenes), z → ces (felices)." },
            },
            {
              heading: "Les cheveux, les yeux et les lunettes",
              paragraphs: [
                "Pour les cheveux et les yeux, on emploie « tener » avec l'article défini : « Tengo el pelo largo » (j'ai les cheveux longs), « Tiene el pelo corto y rizado » (il a les cheveux courts et frisés), « Tenemos los ojos azules » (nous avons les yeux bleus). Attention : en espagnol, « el pelo » (les cheveux) est un nom singulier.",
                "Les adjectifs utiles : largo (long), corto (court), liso (raide), rizado (frisé) ; pour les yeux : azules, verdes, negros, marrones. Pour un accessoire ou un vêtement que l'on porte, on emploie « llevar » : « Llevo gafas » (je porte des lunettes), « Lleva barba » (il porte la barbe).",
              ],
              box: { label: "À retenir", text: "Ser + adjectif : Soy alta. Tener + el pelo / los ojos + adjectif : Tengo el pelo rizado y los ojos verdes. Llevar : Llevo gafas." },
            },
          ],
          keyPoints: [
            "ser : soy, eres, es, somos, sois, son.",
            "Ser + adjectif pour décrire : Es alto y simpático.",
            "Féminin : -o → -a ; -e et la plupart des consonnes invariables ; nationalité et -or + a.",
            "Pluriel : voyelle + s, consonne + es (joven → jóvenes), z → ces.",
            "Tengo el pelo corto / los ojos azules ; llevo gafas.",
            "Muy, bastante, un poco pour nuancer.",
          ],
          example: {
            statement: "Décrivez en espagnol votre amie Clara : elle est grande, mince et brune, elle a les cheveux longs et les yeux verts, et elle est très drôle.",
            solution: [
              "Clara est une fille : les adjectifs en -o passent au féminin (alta, delgada, morena, divertida).",
              "On emploie « es » (3e personne de ser) pour la taille, l'allure et le caractère.",
              "Pour les cheveux et les yeux, on emploie « tiene » + article : « el pelo largo », « los ojos verdes » (verde est invariable en genre, il prend seulement un -s).",
              "« Très drôle » : « muy divertida ».",
              "Réponse : « Mi amiga Clara es alta, delgada y morena. Tiene el pelo largo y los ojos verdes. Es muy divertida. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez « ser » : a) Yo ... tímido. b) Tú ... simpática. c) Nosotros ... altos. d) Ellas ... alegres. e) Mi padre ... serio.",
              hint: "Les formes à placer : soy, eres, es, somos, son.",
              solution: [
                "a) Yo soy tímido.",
                "b) Tú eres simpática.",
                "c) Nosotros somos altos.",
                "d) Ellas son alegres.",
                "e) Mi padre es serio.",
              ],
            },
            {
              level: 2,
              statement: "Accordez l'adjectif entre parenthèses : a) Mi hermana es (rubio). b) Mis abuelos son (simpático). c) Lucía es (trabajador). d) Mis amigas son (joven). e) Mi madre es (inteligente).",
              hint: "Cherchez d'abord le genre et le nombre du nom, puis la terminaison de l'adjectif : -o, -e ou consonne.",
              solution: [
                "a) hermana, féminin singulier : « rubia ».",
                "b) abuelos, masculin pluriel : « simpáticos ».",
                "c) Lucía, féminin singulier ; adjectif en -or : « trabajadora ».",
                "d) amigas, féminin pluriel ; « joven » ne change pas au féminin, pluriel en -es avec accent : « jóvenes ».",
                "e) madre, féminin singulier ; adjectif en -e invariable : « inteligente ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : un camarade a écrit ce portrait, qui contient quatre erreurs. Trouvez-les et corrigez-les : « Mi prima Elena es alto y simpática. Tiene los pelos largos y los ojos azul. Es española y es muy trabajador. »",
              hint: "Vérifiez chaque adjectif (Elena est une fille) et souvenez-vous que « el pelo » est singulier en espagnol.",
              solution: [
                "Erreur 1 : « alto » doit s'accorder avec Elena : « alta ».",
                "Erreur 2 : « los pelos largos » : en espagnol, les cheveux se disent au singulier : « el pelo largo ».",
                "Erreur 3 : « los ojos azul » : l'adjectif doit être au pluriel ; après une consonne on ajoute -es : « azules ».",
                "Erreur 4 : « trabajador » doit prendre un -a au féminin : « trabajadora ».",
                "Texte corrigé : « Mi prima Elena es alta y simpática. Tiene el pelo largo y los ojos azules. Es española y es muy trabajadora. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Vérifiez vos accords et vos conjugaisons.",
            statements: [
              { text: "« Mi madre es alegra » est correct.", true: false, why: "Les adjectifs en -e ne changent pas au féminin : « mi madre es alegre »." },
              { text: "Le pluriel de « joven » est « jóvenes ».", true: true, why: "Après une consonne, on ajoute -es ; l'accent écrit garde la syllabe forte : JÓ-ve-nes." },
              { text: "Pour dire « il a les cheveux courts », on dit « tiene el pelo corto ».", true: true, why: "On emploie tener et « el pelo », un nom singulier en espagnol." },
              { text: "« Nosotros son altos » est correct.", true: false, why: "Avec nosotros, ser se conjugue « somos » : nosotros somos altos." },
              { text: "Le féminin de « trabajador » est « trabajadora ».", true: true, why: "Les adjectifs en -or ajoutent un -a au féminin." },
              { text: "Pour un groupe de garçons et de filles, l'adjectif se met au féminin pluriel.", true: false, why: "Pour un groupe mixte, on emploie le masculin pluriel : mis primos son simpáticos." },
            ],
          },
          quiz: [
            { q: "Complétez : « Tú ... muy simpático. »", options: ["es", "soy", "eres", "sois"], answer: 2, why: "Ser à la 2e personne du singulier : tú eres." },
            { q: "Quel est le féminin de « español » ?", options: ["española", "españolo", "español", "españala"], answer: 0, why: "Les adjectifs de nationalité terminés par une consonne ajoutent -a au féminin." },
            { q: "Comment dit-on « j'ai les yeux verts » ?", options: ["Soy los ojos verdes.", "Tengo ojos verde.", "Llevo los ojos verdes.", "Tengo los ojos verdes."], answer: 3, why: "On emploie tener + article + nom + adjectif accordé au pluriel." },
            { q: "Quel est le pluriel de « feliz » ?", options: ["felizs", "felices", "felizes"], answer: 1, why: "Au pluriel, z devient c devant -es : felices." },
            { q: "« Llevo gafas » signifie :", options: ["Je porte des lunettes.", "J'ai les yeux gris.", "Je suis grand.", "J'ai de longs cheveux."], answer: 0, why: "« Llevar » signifie porter (un accessoire, un vêtement) et « las gafas » sont les lunettes." },
          ],
          trap: "Oublier d'accorder l'adjectif avec une fille ou un pluriel (« mi hermana es alto ») ou, à l'inverse, mettre un -a à un adjectif en -e (« alegra »). Autre erreur fréquente : dire « los pelos » pour les cheveux, alors qu'en espagnol on dit « el pelo » au singulier.",
          method: "Pour chaque adjectif, apprenez directement ses quatre formes en les récitant : alto, alta, altos, altas. Puis entraînez-vous à décrire trois personnes que vous connaissez bien (un garçon, une fille, un groupe) : vous verrez vite si vos accords sont justes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'la-familia',
          title: 'Présenter sa famille : les possessifs',
          minutes: 30,
          objectives: [
            "Nommer les membres de la famille en espagnol.",
            "Employer les adjectifs possessifs (mi, su, nuestro, vuestro...) et les accorder.",
            "Présenter sa famille en donnant le nom, l'âge et un trait de chaque personne.",
          ],
          course: [
            {
              heading: "Le vocabulaire de la famille",
              paragraphs: [
                "La famille se dit « la familia ». Les parents : el padre (le père), la madre (la mère), los padres (les parents). Les enfants : el hijo (le fils), la hija (la fille), los hijos (les enfants). La fratrie : el hermano (le frère), la hermana (la sœur), los hermanos (les frères et sœurs).",
                "La famille élargie : el abuelo, la abuela, los abuelos (les grands-parents) ; el tío, la tía (l'oncle, la tante) ; el primo, la prima (le cousin, la cousine). On parle aussi souvent des animaux de compagnie : el perro (le chien), el gato (le chat), la mascota (l'animal de compagnie). Dans la vie de tous les jours, on dit volontiers « papá » et « mamá ».",
                "Remarquez que le masculin pluriel désigne un groupe mixte : « los hermanos » peut signifier « les frères » ou « les frères et sœurs », « los padres » signifie « les parents » (le père et la mère). Pour dire que l'on est enfant unique, on dit « Soy hijo único » ou « Soy hija única ».",
              ],
              box: { label: "Attention", text: "« Los padres » signifie les parents (père et mère). « Los parientes » désigne les membres de la famille au sens large (les proches), et non les parents." },
            },
            {
              heading: "Les adjectifs possessifs",
              paragraphs: [
                "Pour dire à qui appartient quelque chose ou qui est un membre de la famille, on emploie un adjectif possessif devant le nom : « mi madre » (ma mère), « tu hermano » (ton frère). À la différence du français, on ne met jamais d'article devant le possessif : on dit « mi padre », jamais « el mi padre ».",
                "Pour je, tu et il ou elle, le possessif a une seule forme au singulier, qu'il s'agisse d'un nom masculin ou féminin : « mi padre » et « mi madre ». Il prend un -s au pluriel : « mis padres », « tus primos », « sus abuelos ».",
                "Pour nous et vous (vosotros), le possessif varie en genre et en nombre : nuestro, nuestra, nuestros, nuestras ; vuestro, vuestra, vuestros, vuestras. « Nuestra casa » (notre maison), « vuestros perros » (vos chiens).",
              ],
              box: { label: "À retenir", text: "mi / mis (mon, ma, mes) ; tu / tus (ton, ta, tes) ; su / sus (son, sa, ses ; leur, leurs ; votre, vos avec usted) ; nuestro, -a, -os, -as (notre, nos) ; vuestro, -a, -os, -as (votre, vos)." },
            },
            {
              heading: "Avec quoi le possessif s'accorde-t-il ?",
              paragraphs: [
                "Le possessif s'accorde avec ce qui est possédé, et non avec le possesseur. « Nuestra abuela » : on met nuestra au féminin parce que « abuela » est féminin, même si le possesseur (nous) comprend des garçons. « Mis primos » : on met mis au pluriel parce qu'il y a plusieurs cousins, même s'il n'y a qu'un possesseur (moi).",
                "« Su » et « sus » ont plusieurs sens : son, sa, ses (à lui, à elle), mais aussi leur, leurs (à eux, à elles) et votre, vos quand on vouvoie avec usted. C'est le contexte qui permet de comprendre : « Ana y su hermano » (Ana et son frère) ; « Mis tíos y sus hijos » (mon oncle et ma tante et leurs enfants).",
                "Pour indiquer le possesseur avec un nom, on utilise « de » : « el perro de mi hermana » (le chien de ma sœur), « la casa de los abuelos ».",
              ],
            },
          ],
          keyPoints: [
            "los padres = les parents ; los hermanos = les frères et sœurs ; los abuelos = les grands-parents.",
            "Pas d'article devant le possessif : mi padre (et non el mi padre).",
            "mi, tu, su : une seule forme au singulier, + s au pluriel (mis, tus, sus).",
            "nuestro et vuestro s'accordent en genre et en nombre : nuestra madre, vuestros tíos.",
            "Le possessif s'accorde avec ce qui est possédé, pas avec le possesseur.",
            "su / sus : son, sa, ses, mais aussi leur(s) et votre, vos (usted).",
          ],
          example: {
            statement: "Traduisez : « Nos grands-parents habitent à Séville. Notre grand-mère s'appelle Carmen. Ma sœur et son chien vivent avec nous. »",
            solution: [
              "« Nos grands-parents » : abuelos est masculin pluriel → « nuestros abuelos ». Ils habitent : « viven en Sevilla ».",
              "« Notre grand-mère » : abuela est féminin singulier → « nuestra abuela se llama Carmen ».",
              "« Ma sœur » : « mi hermana » (pas d'article). « son chien » : un seul chien → « su perro ».",
              "« vivent avec nous » : « viven con nosotros ».",
              "Réponse : « Nuestros abuelos viven en Sevilla. Nuestra abuela se llama Carmen. Mi hermana y su perro viven con nosotros. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le mot de la famille : a) La madre de mi madre es mi ... b) El hermano de mi padre es mi ... c) La hija de mi tía es mi ... d) El hijo de mis padres es mi ...",
              hint: "Dessinez un petit arbre généalogique pour vous aider.",
              solution: [
                "a) La mère de ma mère est ma grand-mère : « mi abuela ».",
                "b) Le frère de mon père est mon oncle : « mi tío ».",
                "c) La fille de ma tante est ma cousine : « mi prima ».",
                "d) Le fils de mes parents (si ce n'est pas moi) est mon frère : « mi hermano ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le possessif qui convient : a) (mes) ... abuelos son simpáticos. b) (notre) ... casa es grande. c) ¿Cómo se llama (ta) ... hermana? d) Pedro y (ses) ... primos. e) (votre, vosotros) ... madre es profesora.",
              hint: "Regardez le nom qui suit : est-il masculin ou féminin, singulier ou pluriel ? C'est lui qui commande l'accord.",
              solution: [
                "a) « Mis abuelos son simpáticos. »",
                "b) casa est féminin : « Nuestra casa es grande. »",
                "c) « ¿Cómo se llama tu hermana? »",
                "d) primos est pluriel : « Pedro y sus primos. »",
                "e) madre est féminin : « Vuestra madre es profesora. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici la famille de Sofía (données fictives). Son père, Luis, 45 ans, sérieux ; sa mère, Marta, 43 ans, drôle ; son frère Hugo, 10 ans ; sa chatte, Nube. Rédigez en espagnol le texte de Sofía qui présente sa famille (cinq phrases environ), puis réécrivez la première phrase comme si Sofía et Hugo parlaient ensemble.",
              hint: "Sofía parle : mi padre, mi madre, mi hermano. Quand elle parle avec son frère : nuestro padre, nuestra madre. Pensez aux nombres en lettres et à l'accord des adjectifs.",
              solution: [
                "Texte : « Me llamo Sofía. Mi padre se llama Luis, tiene cuarenta y cinco años y es serio. Mi madre se llama Marta, tiene cuarenta y tres años y es divertida. Mi hermano se llama Hugo y tiene diez años. Nuestra gata se llama Nube. »",
                "Vérification : cuarenta y cinco (45) et cuarenta y tres (43) en trois mots ; « divertida » au féminin ; « gata » pour une chatte.",
                "Réécriture avec « nous » : « Nuestro padre se llama Luis, tiene cuarenta y cinco años y es serio. » (nuestro au masculin singulier, car padre est masculin singulier).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot espagnol à sa traduction.",
            pairs: [
              { left: "los padres", right: "les parents" },
              { left: "los abuelos", right: "les grands-parents" },
              { left: "la tía", right: "la tante" },
              { left: "el primo", right: "le cousin" },
              { left: "nuestra hija", right: "notre fille" },
              { left: "sus hermanos", right: "ses frères et sœurs" },
            ],
          },
          quiz: [
            { q: "Que signifie « mis padres » ?", options: ["mes parents", "mes pères", "mes proches", "mes grands-parents"], answer: 0, why: "« Los padres » désigne le père et la mère, c'est-à-dire les parents." },
            { q: "Complétez : « ... casa es bonita » (notre).", options: ["Nuestro", "Nuestras", "Nuestra", "Nuestros"], answer: 2, why: "« Casa » est féminin singulier : nuestra." },
            { q: "Quelle phrase est correcte ?", options: ["El mi hermano es alto.", "Mi hermano es alto.", "Mis hermano es alto."], answer: 1, why: "Pas d'article devant le possessif, et « mi » au singulier devant un nom singulier." },
            { q: "« Ana y sus primos » signifie :", options: ["Ana et leurs cousins", "Ana et mes cousins", "Ana et nos cousins", "Ana et ses cousins"], answer: 3, why: "« Sus » renvoie ici à Ana : ses cousins. Le -s s'accorde avec « primos », au pluriel." },
            { q: "Comment dit-on « la sœur de mon père » en un mot ?", options: ["mi tía", "mi prima", "mi abuela", "mi hermana"], answer: 0, why: "La sœur du père (ou de la mère) est la tante : la tía." },
          ],
          trap: "Accorder le possessif avec le possesseur au lieu de l'objet possédé, ou mettre un article devant (« la mi madre »). Autre confusion classique : traduire « parents » par « parientes », qui désigne les proches en général ; les parents se disent « los padres ».",
          method: "Dessinez votre arbre généalogique et écrivez sous chaque personne une phrase en espagnol : « Mi abuela se llama..., tiene... años, es... ». Relisez ensuite chaque possessif en vous demandant : quel est le nom qui suit, et est-il singulier ou pluriel ?",
        },
      ],
    },
    {
      id: 'ecole-loisirs',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'el-instituto',
          title: 'Le collège : matières, jours et heures',
          minutes: 30,
          objectives: [
            "Nommer les matières, les lieux et les personnes du collège.",
            "Dire les jours de la semaine et les employer avec l'article.",
            "Demander et dire l'heure.",
            "Présenter son emploi du temps.",
          ],
          course: [
            {
              heading: "Le collège en Espagne et son vocabulaire",
              paragraphs: [
                "En Espagne, l'enseignement secondaire obligatoire s'appelle « la ESO » (Educación Secundaria Obligatoria). Il dure quatre ans, de 12 à 16 ans, et se suit dans un établissement appelé « el instituto ». Votre classe de 5e correspond à peu près à « primero de la ESO » (1.º ESO). Le mot « el colegio » désigne plutôt l'école primaire, ou un établissement privé.",
                "Au collège, on trouve : el profesor, la profesora (le professeur), el alumno, la alumna (l'élève), los compañeros (les camarades), la clase (la classe, le cours), el recreo (la récréation), el comedor (la cantine), la biblioteca (le CDI, la bibliothèque), el patio (la cour), el horario (l'emploi du temps), los deberes (les devoirs).",
              ],
              box: { label: "Repère", text: "5e en France ≈ 1.º de la ESO en Espagne (12 à 13 ans). La ESO compte quatre années (de 1.º à 4.º) et se suit dans un « instituto »." },
            },
            {
              heading: "Les matières",
              paragraphs: [
                "Les matières se disent « las asignaturas ». En voici les principales : las matemáticas, la lengua (l'espagnol, langue maternelle des élèves espagnols), el inglés, el francés, la historia, la geografía, la biología y geología (les SVT), la física y química, la tecnología, la música, la educación física (l'EPS) et la educación plástica (les arts plastiques).",
                "Les noms de matières s'emploient avec l'article : « Me encanta la historia », « Tengo matemáticas a las diez » (après « tener », on peut omettre l'article). Pour dire sa matière préférée : « Mi asignatura preferida es el inglés ». Les noms de langues, de matières et de jours s'écrivent avec une minuscule.",
              ],
            },
            {
              heading: "Les jours de la semaine",
              paragraphs: [
                "La semaine commence le lundi : lunes, martes, miércoles, jueves, viernes, sábado, domingo. Ces noms sont masculins et s'écrivent avec une minuscule. Le week-end se dit « el fin de semana ».",
                "Devant un jour, on n'emploie pas de préposition, mais l'article : « el lunes » signifie « lundi (prochain) » ou « ce lundi-là » ; « los lunes » signifie « le lundi, tous les lundis ». « Los martes tengo música » : j'ai musique le mardi. Lunes, martes, miércoles, jueves et viernes ne changent pas au pluriel (los viernes) ; sábado et domingo prennent un -s (los sábados, los domingos).",
              ],
              box: { label: "Règle", text: "el lunes = lundi (un lundi précis). los lunes = le lundi, chaque lundi. Jamais de préposition : « el martes voy al cine » (et non « en martes »)." },
            },
            {
              heading: "Demander et dire l'heure",
              paragraphs: [
                "Pour demander l'heure : « ¿Qué hora es? ». On répond avec « ser » et l'article féminin (on sous-entend « la hora ») : « Es la una » (il est une heure), au singulier ; puis « Son las dos », « Son las tres », au pluriel.",
                "Pour les minutes, on ajoute « y » jusqu'à la demie : « Son las ocho y diez » (8 h 10), « y cuarto » (et quart), « y media » (et demie). Après la demie, on part de l'heure suivante et on retire avec « menos » : « Son las nueve menos cuarto » (8 h 45), « Son las once menos veinte » (10 h 40).",
                "Pour dire à quelle heure a lieu quelque chose, on emploie « a » : « ¿A qué hora es la clase de inglés? » « A las nueve. » Pour un horaire de début et de fin : « de ocho a nueve » (de 8 h à 9 h). Pour préciser le moment : « de la mañana » (du matin), « de la tarde » (de l'après-midi).",
              ],
              box: { label: "À retenir", text: "¿Qué hora es? Es la una. Son las dos. y cuarto (15), y media (30), menos cuarto (moins le quart). ¿A qué hora...? A las ocho. De nueve a diez." },
            },
          ],
          keyPoints: [
            "el instituto, la asignatura, el horario, el recreo, el comedor, los deberes.",
            "La 5e française correspond à peu près à 1.º de la ESO.",
            "lunes, martes, miércoles, jueves, viernes, sábado, domingo : masculins, minuscule.",
            "el lunes (ce lundi) / los lunes (chaque lundi), sans préposition.",
            "Es la una / Son las dos ; y cuarto, y media, menos cuarto.",
            "¿A qué hora...? → A las ocho.",
          ],
          example: {
            statement: "Traduisez : « Le jeudi, j'ai anglais de huit heures et demie à neuf heures et demie. Ma matière préférée est la musique. »",
            solution: [
              "« Le jeudi » (tous les jeudis) : article pluriel, sans préposition : « los jueves ».",
              "« j'ai anglais » : « tengo inglés » (après tener, l'article peut tomber).",
              "« de huit heures et demie à neuf heures et demie » : « de ocho y media a nueve y media » (on peut aussi dire « de las ocho y media a las nueve y media »).",
              "« Ma matière préférée est la musique » : « mi asignatura preferida es la música ».",
              "Réponse : « Los jueves tengo inglés de ocho y media a nueve y media. Mi asignatura preferida es la música. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Écrivez l'heure en espagnol : a) 1 h 00 ; b) 3 h 15 ; c) 7 h 30 ; d) 10 h 45 ; e) 12 h 10.",
              hint: "Une heure : « es la una » ; les autres heures : « son las... ». Pour 10 h 45, partez de 11 h.",
              solution: [
                "a) Es la una.",
                "b) Son las tres y cuarto.",
                "c) Son las siete y media.",
                "d) Son las once menos cuarto.",
                "e) Son las doce y diez.",
              ],
            },
            {
              level: 2,
              statement: "Voici un extrait d'emploi du temps (données fictives). Lunes : 8:00 matemáticas, 9:00 inglés, 10:00 recreo, 10:30 historia. Miércoles : 8:00 educación física, 10:30 música. Répondez en espagnol par une phrase complète : a) ¿A qué hora es la clase de inglés el lunes? b) ¿Qué asignatura tienes los miércoles a las ocho? c) ¿A qué hora es el recreo?",
              hint: "Reprenez les mots de la question dans votre réponse et écrivez l'heure avec « a las... ».",
              solution: [
                "a) « La clase de inglés es a las nueve. »",
                "b) « Los miércoles a las ocho tengo educación física. »",
                "c) « El recreo es a las diez. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : un élève espagnol a cours le lundi de 8 h 30 à 14 h 30. Il a une récréation de 30 minutes. a) Combien de temps passe-t-il en cours ce jour-là ? b) Rédigez en espagnol trois phrases sur votre propre lundi : l'heure du premier cours, une matière que vous avez et votre matière préférée.",
              hint: "Calculez d'abord la durée totale entre 8 h 30 et 14 h 30, puis retirez la récréation. Pour les phrases, utilisez « los lunes », « a las... » et « mi asignatura preferida es... ».",
              solution: [
                "a) De 8 h 30 à 14 h 30, il s'écoule 6 heures. On retire 30 minutes de récréation : 6 h - 30 min = 5 h 30 de cours.",
                "En espagnol : « Tiene cinco horas y media de clase. »",
                "b) Exemple : « Los lunes, la primera clase es a las ocho. A las diez tengo francés. Mi asignatura preferida es la educación física. »",
                "Vérification : « los lunes » sans préposition, « a las » + heure, matière avec article après « es ».",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les jours de la semaine dans l'ordre, du premier au dernier.",
            items: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
          },
          quiz: [
            { q: "Comment dit-on « il est une heure » ?", options: ["Son la una.", "Es la una.", "Es las una.", "Son las uno."], answer: 1, why: "Une heure est au singulier : « es la una »." },
            { q: "« Son las seis menos cuarto » signifie :", options: ["6 h 15", "6 h 45", "5 h 45", "5 h 15"], answer: 2, why: "On part de six heures et on retire un quart d'heure : 5 h 45." },
            { q: "Comment dit-on « le samedi, je vais au cinéma » (chaque samedi) ?", options: ["Los sábados voy al cine.", "En sábado voy al cine.", "Los Sábados voy en el cine.", "Sábado voy en cine."], answer: 0, why: "Pour une habitude, on emploie l'article pluriel, sans préposition et avec une minuscule : los sábados." },
            { q: "Que désigne « el recreo » ?", options: ["la cantine", "l'emploi du temps", "la cour", "la récréation"], answer: 3, why: "« El recreo » est la récréation. La cantine se dit « el comedor » et la cour « el patio »." },
            { q: "Comment dit-on « les devoirs » ?", options: ["las clases", "los deberes", "las asignaturas"], answer: 1, why: "Les devoirs à faire à la maison sont « los deberes »." },
          ],
          trap: "Mettre une majuscule ou une préposition devant les jours (« en Lunes ») : en espagnol, les jours s'écrivent en minuscule et s'emploient avec l'article (el lunes, los lunes). Pour l'heure, attention au singulier de « es la una » face au pluriel « son las dos ».",
          method: "Recopiez votre emploi du temps réel en espagnol (jours, heures, matières) et affichez-le près de votre bureau. Chaque matin, dites à voix haute ce que vous avez : « Hoy es martes. A las ocho tengo matemáticas. » En une semaine, jours, heures et matières seront acquis.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'gustar',
          title: 'Dire ce que l\'on aime : « me gusta », « me gustan »',
          minutes: 25,
          objectives: [
            "Exprimer ses goûts avec « gustar » et « encantar ».",
            "Accorder « gusta » ou « gustan » avec ce qui plaît.",
            "Employer le pronom qui convient à chaque personne (me, le, nos, os, les...).",
            "Réagir aux goûts d'un autre : « a mí también », « a mí tampoco ».",
          ],
          course: [
            {
              heading: "« Gustar » : ce qui plaît est le sujet",
              paragraphs: [
                "Pour dire « j'aime », l'espagnol emploie le verbe « gustar », qui signifie « plaire ». « Me gusta el chocolate » veut dire mot à mot « le chocolat me plaît ». Le sujet du verbe n'est donc pas la personne, mais la chose qui plaît. La personne est indiquée par un pronom placé devant le verbe : me (à moi), te (à toi), le (à lui, à elle)...",
                "Conséquence importante : le verbe s'accorde avec ce qui plaît. Si c'est un nom singulier ou un verbe à l'infinitif, on met « gusta » : « Me gusta la música », « Me gusta bailar », et même « Me gusta leer y nadar ». Si c'est un nom pluriel, on met « gustan » : « Me gustan los videojuegos », « Me gustan las matemáticas ».",
              ],
              box: { label: "Règle", text: "me gusta + nom singulier ou infinitif (Me gusta el fútbol, me gusta cantar). me gustan + nom pluriel (Me gustan los gatos). Le nom garde son article : me gusta el cine." },
            },
            {
              heading: "Les pronoms et le renforcement « a mí, a ti »",
              paragraphs: [
                "Le pronom change selon la personne à qui la chose plaît : me (yo), te (tú), le (él, ella, usted), nos (nosotros), os (vosotros), les (ellos, ellas, ustedes). « ¿Te gusta el deporte? » (aimes-tu le sport ?) ; « A mi hermano le gustan los perros » (mon frère aime les chiens) ; « Nos gusta la playa » (nous aimons la plage).",
                "On ajoute souvent « a mí », « a ti », « a él », « a nosotros »... pour insister ou pour préciser de qui l'on parle : « A mí me gusta el rap, pero a ella le gusta el reguetón ». Attention à l'accent : « mí » (moi) en porte un, alors que « ti » n'en a pas.",
              ],
              box: { label: "À retenir", text: "(a mí) me gusta ; (a ti) te gusta ; (a él, a ella, a usted) le gusta ; (a nosotros) nos gusta ; (a vosotros) os gusta ; (a ellos, a ellas, a ustedes) les gusta. Pluriel : me gustan, te gustan..." },
            },
            {
              heading: "Nuancer et réagir",
              paragraphs: [
                "Pour nuancer : « Me gusta mucho » (j'aime beaucoup), « Me gusta bastante » (j'aime assez), « No me gusta » (je n'aime pas), « No me gusta nada » (je n'aime pas du tout). Le « no » se place devant le pronom. « Me encanta » (j'adore) se construit exactement comme gustar : « Me encantan los tacos ». Avec « encantar », on n'ajoute pas « mucho ».",
                "Pour réagir aux goûts de quelqu'un : si vous êtes d'accord avec une phrase affirmative, dites « A mí también » (moi aussi) ; si vous êtes d'accord avec une phrase négative, dites « A mí tampoco » (moi non plus). Si vous n'êtes pas d'accord : « A mí no » (pas moi) ou « A mí sí » (moi si).",
              ],
              box: { label: "Exemples", text: "Me gusta el cine. A mí también. / No me gusta el té. A mí tampoco. / Me gusta el fútbol. A mí no. / No me gustan los lunes. A mí sí." },
            },
          ],
          keyPoints: [
            "Gustar signifie « plaire » : ce qui plaît est le sujet.",
            "me gusta + singulier ou infinitif ; me gustan + pluriel.",
            "Pronoms : me, te, le, nos, os, les (jamais « yo gusto »).",
            "Le nom garde son article : me gusta el chocolate.",
            "No me gusta nada = je n'aime pas du tout ; me encanta(n) = j'adore.",
            "A mí también (moi aussi) / a mí tampoco (moi non plus).",
          ],
          example: {
            statement: "Traduisez : « J'adore les chats, mais ma sœur n'aime pas les animaux. Nous aimons danser. »",
            solution: [
              "« J'adore les chats » : « los gatos » est pluriel → « me encantan los gatos ».",
              "« ma sœur n'aime pas les animaux » : 3e personne → pronom « le » ; « los animales » est pluriel → « a mi hermana no le gustan los animales ».",
              "« Nous aimons danser » : pronom « nos » ; infinitif → singulier : « nos gusta bailar ».",
              "Réponse : « Me encantan los gatos, pero a mi hermana no le gustan los animales. Nos gusta bailar. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec « gusta » ou « gustan » : a) Me ... el chocolate. b) Me ... las hamburguesas. c) ¿Te ... leer? d) No me ... los lunes. e) Me ... nadar y correr.",
              hint: "Regardez ce qui suit : un nom pluriel demande « gustan » ; un nom singulier ou un ou plusieurs infinitifs demandent « gusta ».",
              solution: [
                "a) el chocolate, singulier : « Me gusta el chocolate. »",
                "b) las hamburguesas, pluriel : « Me gustan las hamburguesas. »",
                "c) leer, infinitif : « ¿Te gusta leer? »",
                "d) los lunes, pluriel : « No me gustan los lunes. »",
                "e) deux infinitifs, toujours singulier : « Me gusta nadar y correr. »",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec le bon pronom et la bonne forme : a) A nosotros (gustar) la música. b) A mis padres (gustar) los viajes. c) A ti (encantar) los perros. d) A Pablo no (gustar) el fútbol.",
              hint: "Cherchez d'abord le pronom grâce à « a nosotros, a ti... », puis accordez le verbe avec ce qui plaît.",
              solution: [
                "a) « A nosotros nos gusta la música. »",
                "b) « A mis padres les gustan los viajes. »",
                "c) « A ti te encantan los perros. »",
                "d) « A Pablo no le gusta el fútbol. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : réagissez à chaque phrase de votre correspondante avec « a mí también », « a mí tampoco », « a mí sí » ou « a mí no », selon vos vrais goûts, puis écrivez une phrase qui donne votre avis. a) Me encanta el chocolate. b) No me gustan los deportes de equipo. c) Me gustan las películas de terror. Enfin, corrigez cette phrase : « Yo gusto mucho los videojuegos. »",
              hint: "Phrase affirmative : d'accord = también, pas d'accord = no. Phrase négative : d'accord = tampoco, pas d'accord = sí.",
              solution: [
                "a) Phrase affirmative. D'accord : « A mí también, me encanta. » Pas d'accord : « A mí no, no me gusta. »",
                "b) Phrase négative. D'accord : « A mí tampoco, prefiero el tenis. » Pas d'accord : « A mí sí, me gusta mucho el baloncesto. »",
                "c) Phrase affirmative. D'accord : « A mí también. » Pas d'accord : « A mí no, me dan miedo. »",
                "Correction : la personne n'est pas le sujet de gustar ; il faut le pronom « me » et accorder avec « los videojuegos », au pluriel : « Me gustan mucho los videojuegos. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes ?",
            statements: [
              { text: "« Me gustan los gatos. »", true: true, why: "« Los gatos » est pluriel : gustan." },
              { text: "« Me gusta leer y escuchar música » s'écrit avec « gusta ».", true: true, why: "Avec des infinitifs, même plusieurs, on emploie toujours gusta." },
              { text: "« Yo gusto el fútbol. »", true: false, why: "La personne s'exprime par un pronom : « me gusta el fútbol »." },
              { text: "« Me gusta chocolate. »", true: false, why: "Le nom garde son article : « me gusta el chocolate »." },
              { text: "Pour répondre « moi non plus » à « No me gusta el té », on dit « A mí también ».", true: false, why: "Pour être d'accord avec une phrase négative, on dit « a mí tampoco »." },
              { text: "« A ellos les gusta la playa. »", true: true, why: "Pour ellos, le pronom est « les », et « la playa » est singulier : gusta." },
              { text: "« Me encanta mucho el cine » est la meilleure façon de dire « j'adore le cinéma ».", true: false, why: "« Encantar » exprime déjà une forte intensité : on dit simplement « me encanta el cine »." },
            ],
          },
          quiz: [
            { q: "Complétez : « Me ... las fresas. »", options: ["gusta", "gusto", "gustan", "gustas"], answer: 2, why: "« Las fresas » est pluriel : me gustan." },
            { q: "Comment dit-on « il aime nager » ?", options: ["Le gusta nadar.", "Él gusta nadar.", "Le gustan nadar.", "Se gusta nadar."], answer: 0, why: "Pronom « le » pour él, et « gusta » devant un infinitif." },
            { q: "Votre ami dit : « No me gusta el fútbol. » Vous êtes d'accord. Vous répondez :", options: ["A mí también.", "A mí sí.", "A mí tampoco.", "Yo no gusto."], answer: 2, why: "Pour approuver une phrase négative, on dit « a mí tampoco » (moi non plus)." },
            { q: "Quel pronom correspond à « a nosotros » ?", options: ["os", "les", "me", "nos"], answer: 3, why: "A nosotros nos gusta... ; « os » correspond à vosotros." },
            { q: "« No me gusta nada » signifie :", options: ["Je n'aime rien du tout.", "Je n'aime pas du tout.", "J'aime un tout petit peu."], answer: 1, why: "« Nada » renforce la négation : je n'aime pas du tout (la chose dont on parle)." },
          ],
          trap: "Traduire mot à mot « j'aime » par « yo gusto » : avec gustar, la personne est un pronom (me, le, nos...) et le verbe s'accorde avec ce qui plaît. Autre erreur fréquente : écrire « me gusta los perros » au lieu de « me gustan los perros ».",
          method: "Avant d'écrire « gusta » ou « gustan », posez-vous la question : qu'est-ce qui plaît ? Soulignez ce mot. S'il est au pluriel, mettez « gustan » ; s'il est au singulier ou à l'infinitif, mettez « gusta ». Puis vérifiez que le nom a bien son article.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'present-reguliers',
          title: 'Les loisirs : le présent des verbes réguliers',
          minutes: 30,
          objectives: [
            "Conjuguer au présent les verbes réguliers en -ar, -er et -ir.",
            "Nommer des activités de loisirs en espagnol.",
            "Dire ce que l'on fait et à quelle fréquence.",
          ],
          course: [
            {
              heading: "Trois groupes de verbes",
              paragraphs: [
                "En espagnol, tous les verbes à l'infinitif se terminent par -ar, -er ou -ir : hablar (parler), comer (manger), vivir (vivre, habiter). Pour conjuguer un verbe régulier au présent, on enlève cette terminaison pour garder le radical (habl-, com-, viv-), puis on ajoute la terminaison qui correspond à la personne.",
                "Comme la terminaison indique déjà qui fait l'action, on n'emploie le pronom sujet (yo, tú, él...) que pour insister ou pour éviter une confusion. « Hablo español » suffit pour dire « je parle espagnol ». Rappel : « usted » et « ustedes » se conjuguent comme « él » et « ellos ».",
              ],
            },
            {
              heading: "Les terminaisons du présent",
              paragraphs: [
                "Verbes en -ar, sur le modèle de hablar : hablo, hablas, habla, hablamos, habláis, hablan. Verbes en -er, sur le modèle de comer : como, comes, come, comemos, coméis, comen. Verbes en -ir, sur le modèle de vivir : vivo, vives, vive, vivimos, vivís, viven.",
                "Observez les ressemblances : la 1re personne du singulier finit toujours par -o. Les verbes en -er et en -ir ont les mêmes terminaisons, sauf pour nosotros (-emos / -imos) et vosotros (-éis / -ís). Les formes de vosotros portent un accent écrit : habláis, coméis, vivís.",
              ],
              box: { label: "Conjugaison", text: "-ar : -o, -as, -a, -amos, -áis, -an (hablo). -er : -o, -es, -e, -emos, -éis, -en (como). -ir : -o, -es, -e, -imos, -ís, -en (vivo)." },
            },
            {
              heading: "Les loisirs",
              paragraphs: [
                "Verbes réguliers en -ar : escuchar música (écouter de la musique), bailar (danser), cantar (chanter), nadar (nager), patinar (faire du patin, du skate), dibujar (dessiner), montar en bici (faire du vélo), tocar la guitarra (jouer de la guitare), practicar deporte (faire du sport), chatear con amigos (discuter en ligne). En -er : leer (lire), correr (courir), aprender (apprendre). En -ir : escribir (écrire), subir fotos (publier des photos).",
                "Attention : deux verbes de loisirs très courants ne sont pas réguliers. « Jugar » (jouer à un jeu, à un sport) fait « juego, juegas... » et « hacer » (faire) fait « hago » à la 1re personne. Vous les étudierez dans le chapitre sur le quotidien. Notez aussi que « jouer d'un instrument » se dit « tocar » : « toco el piano ».",
              ],
            },
            {
              heading: "Dire à quelle fréquence",
              paragraphs: [
                "Pour préciser quand et combien de fois on pratique une activité : siempre (toujours), a menudo (souvent), a veces (parfois), nunca (jamais), todos los días (tous les jours), los fines de semana (le week-end), por la tarde (l'après-midi, le soir).",
                "« Nunca » se place souvent devant le verbe, sans « no » : « Nunca bailo » (je ne danse jamais). S'il est après le verbe, il faut « no » devant : « No bailo nunca ». Les autres expressions se placent librement, souvent en début ou en fin de phrase : « Los sábados nado en la piscina ».",
              ],
              box: { label: "À retenir", text: "siempre, a menudo, a veces, nunca. Nunca bailo = No bailo nunca (je ne danse jamais)." },
            },
          ],
          keyPoints: [
            "Radical + terminaison : habl-o, com-o, viv-o.",
            "hablar : hablo, hablas, habla, hablamos, habláis, hablan.",
            "comer : como, comes, come, comemos, coméis, comen.",
            "vivir : vivo, vives, vive, vivimos, vivís, viven.",
            "Le pronom sujet est le plus souvent omis.",
            "jugar et hacer sont irréguliers ; jouer d'un instrument = tocar.",
            "siempre, a menudo, a veces, nunca (nunca bailo = no bailo nunca).",
          ],
          example: {
            statement: "Conjuguez et traduisez : « Le week-end, nous écoutons de la musique et mon frère lit des bandes dessinées. Je n'écris jamais. »",
            solution: [
              "« nous écoutons » : escuchar, verbe en -ar, nosotros → « escuchamos ».",
              "« mon frère lit » : leer, verbe en -er, 3e personne → « lee ». Les bandes dessinées : « los cómics ».",
              "« Je n'écris jamais » : escribir, verbe en -ir, yo → « escribo » ; « nunca » devant le verbe, sans « no ».",
              "« Le week-end » : « los fines de semana ».",
              "Réponse : « Los fines de semana escuchamos música y mi hermano lee cómics. Nunca escribo. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe au présent : a) yo (bailar) ; b) tú (comer) ; c) ella (escribir) ; d) nosotros (nadar) ; e) vosotros (leer) ; f) ellos (vivir).",
              hint: "Repérez le groupe (-ar, -er, -ir), enlevez la terminaison de l'infinitif, puis ajoutez celle de la personne.",
              solution: [
                "a) yo bailo.",
                "b) tú comes.",
                "c) ella escribe.",
                "d) nosotros nadamos.",
                "e) vosotros leéis (radical le- + -éis, avec l'accent).",
                "f) ellos viven.",
              ],
            },
            {
              level: 2,
              statement: "Complétez le texte avec les verbes au présent : « Me llamo Irene. Los sábados (yo, montar) en bici con mi padre. Mis amigas (patinar) en el parque. Mi hermano y yo (aprender) a tocar la guitarra. ¿Y tú? ¿(Practicar) un deporte? »",
              hint: "Attention aux sujets : « mis amigas » est pluriel (ellas), « mi hermano y yo » équivaut à nosotros.",
              solution: [
                "« monto » : montar, yo → monto.",
                "« patinan » : patinar, ellas → patinan.",
                "« aprendemos » : aprender, nosotros → aprendemos.",
                "« practicas » : practicar, tú → practicas.",
                "Texte : « Me llamo Irene. Los sábados monto en bici con mi padre. Mis amigas patinan en el parque. Mi hermano y yo aprendemos a tocar la guitarra. ¿Y tú? ¿Practicas un deporte? »",
              ],
            },
            {
              level: 3,
              statement: "Défi : rédigez en espagnol un petit texte de 50 mots environ sur vos loisirs. Employez au moins un verbe en -ar, un en -er et un en -ir, une personne autre que « yo », deux expressions de fréquence, et une phrase avec « nunca ».",
              hint: "Construisez une liste avant d'écrire : trois verbes (un par groupe), deux fréquences, une personne de votre entourage.",
              solution: [
                "Exemple : « En mi tiempo libre escucho música todos los días. A menudo leo novelas de aventuras. Los fines de semana mi mejor amiga y yo patinamos en el parque. A veces escribo historias. Mi hermano practica atletismo, pero yo nunca corro con él. »",
                "Vérification : -ar (escucho, patinamos, practica), -er (leo, corro), -ir (escribo) ; autres personnes : nosotros (patinamos), él (practica) ; fréquences : todos los días, a menudo, a veces ; « nunca » devant le verbe sans « no ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque sujet au verbe correctement conjugué.",
            pairs: [
              { left: "yo (cantar)", right: "canto" },
              { left: "tú (correr)", right: "corres" },
              { left: "ella (escribir)", right: "escribe" },
              { left: "nosotros (vivir)", right: "vivimos" },
              { left: "vosotros (bailar)", right: "bailáis" },
              { left: "ellos (aprender)", right: "aprenden" },
            ],
          },
          quiz: [
            { q: "Quelle est la forme de « comer » avec « nosotros » ?", options: ["comimos", "comamos", "comemos", "comen"], answer: 2, why: "Les verbes en -er font -emos à nosotros : comemos." },
            { q: "« Vivís » correspond à quelle personne ?", options: ["vosotros", "ellos", "nosotros", "tú"], answer: 0, why: "-ís est la terminaison de vosotros pour les verbes en -ir." },
            { q: "Comment dit-on « je joue de la guitare » ?", options: ["Juego la guitarra.", "Toco la guitarra.", "Hago guitarra.", "Practico la guitarra."], answer: 1, why: "Pour un instrument, on emploie « tocar » : toco la guitarra." },
            { q: "Quelle phrase signifie « je ne nage jamais » ?", options: ["Nado siempre.", "No nado a veces.", "Nunca no nado.", "No nado nunca."], answer: 3, why: "Avec « nunca » après le verbe, il faut « no » devant : no nado nunca (ou bien : nunca nado)." },
            { q: "Complétez : « Mis amigos ... en la piscina. » (nadar)", options: ["nada", "nadamos", "nadan"], answer: 2, why: "« Mis amigos » équivaut à ellos : nadan." },
          ],
          trap: "Mélanger les terminaisons des groupes, par exemple « comamos » ou « vivemos » : les verbes en -er font -emos et ceux en -ir font -imos. Autre erreur : traduire « jouer d'un instrument » par « jugar » ; on dit « tocar ».",
          method: "Apprenez une seule série de terminaisons par jour (-ar, puis -er, puis -ir), en la récitant avec un verbe que vous aimez. Ensuite, pour vérifier une forme, refaites le chemin : infinitif → groupe → radical → terminaison de la personne.",
        },
      ],
    },
    {
      id: 'quotidien',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'casa-ciudad',
          title: 'Ma maison, ma ville : « hay » et « estar »',
          minutes: 30,
          objectives: [
            "Décrire sa maison et son quartier avec le vocabulaire du logement et de la ville.",
            "Employer « hay » pour dire ce qui existe dans un lieu.",
            "Employer « estar » pour situer un lieu ou un objet précis.",
            "Utiliser les prépositions de lieu (cerca de, al lado de...) et les contractions al et del.",
          ],
          course: [
            {
              heading: "La maison et la ville : le vocabulaire",
              paragraphs: [
                "Le logement : la casa (la maison), el piso (l'appartement, en Espagne), el edificio (l'immeuble). Les pièces : la cocina (la cuisine), el salón (le salon), el dormitorio ou la habitación (la chambre), el cuarto de baño (la salle de bains), el jardín (le jardin), la terraza (la terrasse). Les meubles : la cama (le lit), la mesa (la table), la silla (la chaise), el armario (l'armoire), el sofá (le canapé).",
                "La ville : la ciudad (la ville), el pueblo (le village), el barrio (le quartier), la calle (la rue), la plaza (la place), el ayuntamiento (la mairie), el mercado (le marché), la estación (la gare), la biblioteca, el cine, la piscina (la piscine), el polideportivo (le complexe sportif), la tienda (le magasin), la panadería (la boulangerie). On dit « vivo en un piso » ou « vivo en una casa » ; « vivo en el campo » (à la campagne) ou « en la ciudad ».",
              ],
            },
            {
              heading: "« Hay » : dire ce qui existe",
              paragraphs: [
                "« Hay » signifie « il y a ». C'est une forme invariable : elle ne change jamais, que ce qui suit soit singulier ou pluriel. « En mi barrio hay un parque » (il y a un parc) ; « En mi calle hay dos panaderías » (il y a deux boulangeries).",
                "« Hay » présente quelque chose de nouveau ou d'indéterminé. Il est donc suivi d'un article indéfini (un, una, unos, unas), d'un nombre, d'un mot de quantité (mucho, poco) ou d'un nom sans article. On ne met jamais « el, la, los, las » après « hay ». « En mi pueblo hay muchas tiendas. » À la forme négative, on emploie souvent le nom sans article : « No hay cine » (il n'y a pas de cinéma).",
              ],
              box: { label: "Règle", text: "hay + un, una, unos, unas / nombre / mucho, poco / nom sans article. Hay est invariable : hay un parque, hay tres parques. Jamais « hay el parque »." },
            },
            {
              heading: "« Estar » : situer quelque chose de précis",
              paragraphs: [
                "Pour dire où se trouve un lieu ou un objet précis, déjà connu, on emploie le verbe « estar » : « El parque está cerca de mi casa » (le parc est près de chez moi) ; « ¿Dónde está la estación? » (où est la gare ?) ; « Madrid está en el centro de España ». Le sujet est alors un nom avec article défini (el, la, los, las), un possessif ou un nom propre.",
                "Comparez : « Hay una biblioteca en mi barrio » (je vous apprends qu'il en existe une) ; « La biblioteca está en la plaza » (je vous dis où elle se trouve). Ne confondez pas non plus « ser » et « estar » : on dit « Mi casa es grande » (description) mais « Mi casa está en el centro » (localisation).",
              ],
              box: { label: "Conjugaison", text: "estar : estoy, estás, está, estamos, estáis, están. Estar sert à situer : La piscina está al lado del colegio. Il sert aussi à dire comment on va : Estoy bien." },
            },
            {
              heading: "Les prépositions de lieu",
              paragraphs: [
                "Pour situer avec précision : cerca de (près de), lejos de (loin de), al lado de (à côté de), enfrente de (en face de), delante de (devant), detrás de (derrière), entre... y... (entre... et...), a la derecha de (à droite de), a la izquierda de (à gauche de), en el centro (au centre), en (dans, sur).",
                "Attention aux contractions obligatoires : de + el = del, et a + el = al. On écrit donc « cerca del mercado » (et non « cerca de el mercado ») et « al lado del cine ». Il n'y a pas de contraction avec « la » : « cerca de la plaza », « al lado de la iglesia ».",
              ],
              box: { label: "Règle", text: "de + el = del (cerca del parque). a + el = al (voy al cine). Pas de contraction avec la, los, las : cerca de la plaza, al lado de los cines." },
            },
          ],
          keyPoints: [
            "hay (invariable) + un, una, un nombre ou rien : hay un parque, hay dos cines.",
            "Jamais d'article défini après hay.",
            "estar pour situer un lieu précis : la estación está en el centro.",
            "estar : estoy, estás, está, estamos, estáis, están.",
            "ser pour décrire (es grande), estar pour situer (está lejos).",
            "cerca de, lejos de, al lado de, enfrente de ; de + el = del, a + el = al.",
          ],
          example: {
            statement: "Traduisez : « Dans mon quartier, il y a une piscine et deux parcs. La piscine est à côté du collège. Ma maison est petite et elle est loin du centre. »",
            solution: [
              "« il y a une piscine et deux parcs » : nouvelle information, article indéfini et nombre → « hay una piscina y dos parques ».",
              "« La piscine est à côté du collège » : lieu précis (article défini) → estar : « la piscina está al lado del colegio » (de + el = del).",
              "« Ma maison est petite » : description → ser : « mi casa es pequeña ».",
              "« elle est loin du centre » : localisation → estar : « está lejos del centro ».",
              "Réponse : « En mi barrio hay una piscina y dos parques. La piscina está al lado del colegio. Mi casa es pequeña y está lejos del centro. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec « hay » ou « está / están » : a) En mi ciudad ... un museo. b) El museo ... en la plaza. c) ¿Dónde ... los servicios? d) En la calle ... muchas tiendas. e) Mis abuelos ... en el jardín.",
              hint: "Article indéfini, nombre ou quantité → hay. Article défini, possessif ou nom propre → estar.",
              solution: [
                "a) « un museo » : article indéfini → « hay ».",
                "b) « El museo » : article défini → « está ».",
                "c) « los servicios » : défini et pluriel → « están ».",
                "d) « muchas tiendas » : quantité → « hay ».",
                "e) « Mis abuelos » : possessif, pluriel → « están ».",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec « de », « del », « de la », « al » ou « a la » : a) El cine está cerca ... mercado. b) Vivo lejos ... ciudad. c) La panadería está al lado ... banco. d) Los sábados voy ... piscina. e) Los domingos voy ... parque.",
              hint: "Repérez le genre du nom : devant un nom masculin singulier, de + el et a + el se contractent.",
              solution: [
                "a) mercado est masculin : « cerca del mercado ».",
                "b) ciudad est féminin : « lejos de la ciudad ».",
                "c) banco est masculin : « al lado del banco ».",
                "d) piscina est féminin : « voy a la piscina ».",
                "e) parque est masculin : « voy al parque ».",
              ],
            },
            {
              level: 3,
              statement: "Défi : observez ce plan de quartier (données fictives). Dans la calle Mayor, on trouve, de gauche à droite : la biblioteca, el colegio, la panadería. En face du colegio se trouve el parque. Rédigez en espagnol quatre phrases : deux avec « hay », deux avec « estar » et une préposition de lieu. Vérifiez chaque contraction.",
              hint: "Commencez par « En la calle Mayor hay... », puis situez les lieux les uns par rapport aux autres : entre, al lado de, enfrente de.",
              solution: [
                "Avec hay : « En la calle Mayor hay una biblioteca, un colegio y una panadería. » / « En el barrio hay un parque. »",
                "Avec estar : « El colegio está entre la biblioteca y la panadería. »",
                "« El parque está enfrente del colegio. » (de + el = del).",
                "Autres réponses possibles : « La panadería está a la derecha del colegio » ; « La biblioteca está al lado del colegio. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ces phrases sont-elles correctes ?",
            statements: [
              { text: "« En mi barrio hay dos cines. »", true: true, why: "Hay est invariable et se place devant un nombre." },
              { text: "« En mi barrio hay el cine. »", true: false, why: "On ne met jamais d'article défini après hay : « hay un cine » ou « el cine está en mi barrio »." },
              { text: "« La estación está cerca de el parque. »", true: false, why: "De + el se contracte obligatoirement : « cerca del parque »." },
              { text: "« Mi casa es grande y está en el centro. »", true: true, why: "Ser pour décrire (grande), estar pour situer (en el centro)." },
              { text: "« Hay » change au pluriel : « hayn tres tiendas ».", true: false, why: "Hay est invariable : « hay tres tiendas »." },
              { text: "« Voy al mercado » contient la contraction de a + el.", true: true, why: "A + el = al : voy al mercado." },
            ],
          },
          quiz: [
            { q: "Complétez : « En mi pueblo ... una iglesia muy antigua. »", options: ["está", "es", "hay", "están"], answer: 2, why: "Article indéfini « una » : on présente quelque chose de nouveau avec hay." },
            { q: "Complétez : « ¿Dónde ... el supermercado? »", options: ["está", "hay", "es", "estoy"], answer: 0, why: "On cherche un lieu précis (article défini) : estar, à la 3e personne, « está »." },
            { q: "Comment dit-on « à côté du cinéma » ?", options: ["al lado de el cine", "a lado del cine", "al lado del cine", "al lado la cine"], answer: 2, why: "« Al lado de » + « el cine » : de + el se contracte en del." },
            { q: "Que signifie « Vivo en un piso » ?", options: ["J'habite à un étage.", "J'habite dans un appartement.", "J'habite dans un petit village.", "J'habite une maison individuelle."], answer: 1, why: "En Espagne, « el piso » désigne un appartement (et aussi un étage, selon le contexte)." },
            { q: "Quelle phrase est correcte ?", options: ["Mi casa está grande.", "Mi casa hay en el centro del barrio.", "Mi casa es en el centro.", "Mi casa está en el centro."], answer: 3, why: "Pour situer, on emploie estar : mi casa está en el centro. Pour décrire, on dirait « mi casa es grande »." },
          ],
          trap: "Mettre un article défini après « hay » (« hay el parque ») ou employer « hay » pour situer un lieu précis : on dit « hay un parque » mais « el parque está cerca ». Autre oubli fréquent : écrire « de el » ou « a el » au lieu des contractions « del » et « al ».",
          method: "Avant de choisir, regardez le mot qui suit : un, una, un nombre ou rien → hay ; el, la, mi, un nom propre → estar. Pour vous entraîner, décrivez le trajet de chez vous au collège en cinq phrases, en alternant les deux structures.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'jornada',
          title: 'Une journée ordinaire : quelques verbes irréguliers',
          minutes: 35,
          objectives: [
            "Raconter sa journée ordinaire en suivant l'ordre des actions.",
            "Conjuguer au présent les verbes pronominaux de la routine.",
            "Conjuguer quelques verbes irréguliers courants : ir, hacer, jugar, empezar, volver, acostarse.",
            "Utiliser des connecteurs de temps (primero, luego, después, por la tarde...).",
          ],
          course: [
            {
              heading: "Les verbes pronominaux de la routine",
              paragraphs: [
                "Beaucoup de verbes de la journée sont pronominaux : despertarse (se réveiller), levantarse (se lever), ducharse (se doucher), lavarse los dientes (se brosser les dents), vestirse (s'habiller), acostarse (se coucher). À l'infinitif, le pronom « se » est soudé à la fin du verbe.",
                "Au présent, le pronom se place devant le verbe conjugué et change avec la personne : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Pour les parties du corps, on emploie l'article et non le possessif : « me lavo los dientes » (je me brosse les dents), « se lava el pelo » (il se lave les cheveux).",
              ],
              box: { label: "Conjugaison", text: "levantarse : me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Le pronom (me, te, se, nos, os, se) se place devant le verbe conjugué." },
            },
            {
              heading: "Les verbes qui changent de voyelle",
              paragraphs: [
                "Certains verbes changent la voyelle de leur radical quand elle porte l'accent tonique, c'est-à-dire à toutes les personnes sauf nosotros et vosotros. On parle de verbes à diphtongue. Le e devient ie : empezar (commencer) → empiezo, empiezas, empieza, empezamos, empezáis, empiezan ; despertarse → me despierto.",
                "Le o devient ue : volver (revenir, rentrer) → vuelvo, vuelves, vuelve, volvemos, volvéis, vuelven ; acostarse → me acuesto. Un seul verbe change son u en ue : jugar (jouer) → juego, juegas, juega, jugamos, jugáis, juegan. Les terminaisons, elles, restent régulières.",
              ],
              box: { label: "Règle", text: "e → ie (empezar : empiezo), o → ue (volver : vuelvo), u → ue (jugar : juego) à toutes les personnes sauf nosotros et vosotros (empezamos, volvemos, jugamos)." },
            },
            {
              heading: "Deux verbes très irréguliers : « ir » et « hacer »",
              paragraphs: [
                "Le verbe « ir » (aller) est complètement irrégulier : voy, vas, va, vamos, vais, van. On l'emploie avec « a » devant le lieu : « Voy al instituto » (a + el = al), « Vamos a la piscina ». On précise le moyen de transport avec « en » : en autobús, en coche (en voiture), en bici, mais « a pie » (à pied).",
                "Le verbe « hacer » (faire) n'est irrégulier qu'à la 1re personne : hago, haces, hace, hacemos, hacéis, hacen. Il sert pour « hacer los deberes » (faire ses devoirs), « hacer deporte », « hacer la cama ». Le verbe « salir » (sortir) suit le même modèle : salgo, sales, sale... « Salgo de casa a las ocho. »",
              ],
              box: { label: "Conjugaison", text: "ir : voy, vas, va, vamos, vais, van. hacer : hago, haces, hace, hacemos, hacéis, hacen. salir : salgo, sales, sale, salimos, salís, salen." },
            },
            {
              heading: "Raconter sa journée dans l'ordre",
              paragraphs: [
                "Pour organiser votre récit, utilisez des connecteurs : primero (d'abord), luego et después (ensuite, après), más tarde (plus tard), al final (à la fin). Et des moments : por la mañana (le matin), a mediodía (à midi), por la tarde (l'après-midi), por la noche (le soir, la nuit).",
                "Voici une journée type : « Me despierto a las siete. Primero me ducho y luego desayuno. Salgo de casa a las ocho y voy al instituto en autobús. Las clases empiezan a las ocho y media. Vuelvo a casa a las cinco. Por la tarde hago los deberes y juego con mi hermano. Me acuesto a las diez. »",
              ],
            },
          ],
          keyPoints: [
            "Verbes pronominaux : me levanto, te levantas, se levanta (pronom devant le verbe).",
            "e → ie : empiezo ; o → ue : vuelvo, me acuesto ; u → ue : juego.",
            "La diphtongue disparaît avec nosotros et vosotros : empezamos, volvemos, jugamos.",
            "ir : voy, vas, va, vamos, vais, van ; ir a + lieu (voy al instituto).",
            "hacer : hago ; salir : salgo (irréguliers à la 1re personne seulement).",
            "Connecteurs : primero, luego, después, por la tarde, al final.",
          ],
          example: {
            statement: "Conjuguez et traduisez : « Le matin, mon père se réveille à six heures. Nous partons de la maison à huit heures. Je rentre à cinq heures et je joue au football. »",
            solution: [
              "« mon père se réveille » : despertarse, e → ie, 3e personne → « mi padre se despierta ».",
              "« Nous partons de la maison » : salir, nosotros, régulier à cette personne → « salimos de casa ».",
              "« Je rentre » : volver, o → ue → « vuelvo ».",
              "« je joue au football » : jugar, u → ue, et jugar + a + el = al → « juego al fútbol ».",
              "Réponse : « Por la mañana, mi padre se despierta a las seis. Salimos de casa a las ocho. Vuelvo a las cinco y juego al fútbol. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au présent : a) yo (ir) ; b) tú (hacer) ; c) ella (volver) ; d) nosotros (jugar) ; e) ellos (empezar) ; f) yo (acostarse).",
              hint: "Pensez aux trois cas : verbe totalement irrégulier (ir), irrégulier à la 1re personne (hacer), verbe à diphtongue (sauf nosotros et vosotros).",
              solution: [
                "a) yo voy.",
                "b) tú haces (seule la 1re personne de hacer est irrégulière).",
                "c) ella vuelve (o → ue).",
                "d) nosotros jugamos (pas de diphtongue avec nosotros).",
                "e) ellos empiezan (e → ie).",
                "f) yo me acuesto (o → ue, pronom devant le verbe).",
              ],
            },
            {
              level: 2,
              statement: "Complétez le texte de Daniel avec les verbes au présent : « Por la mañana (yo, despertarse) a las siete. Primero (yo, ducharse) y luego (yo, desayunar). Mi hermana y yo (ir) al instituto a pie. Las clases (empezar) a las ocho. Por la tarde (yo, hacer) los deberes. »",
              hint: "Attention : « mi hermana y yo » équivaut à nosotros ; « las clases » équivaut à ellas.",
              solution: [
                "« me despierto » (despertarse, e → ie).",
                "« me ducho » (ducharse, régulier).",
                "« desayuno » (régulier).",
                "« vamos » (ir, nosotros).",
                "« empiezan » (empezar, ellas, e → ie).",
                "« hago » (hacer, yo).",
                "Texte : « Por la mañana me despierto a las siete. Primero me ducho y luego desayuno. Mi hermana y yo vamos al instituto a pie. Las clases empiezan a las ocho. Por la tarde hago los deberes. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : Lucía se lève à 7 h 15 et met 20 minutes à se préparer. Elle marche ensuite 25 minutes jusqu'au collège. a) À quelle heure arrive-t-elle ? Écrivez l'heure en espagnol. b) Racontez sa matinée en espagnol à la 3e personne, en cinq phrases, avec au moins deux verbes irréguliers et deux connecteurs.",
              hint: "Additionnez les durées étape par étape. Pour le récit, utilisez se levanta, sale, va, empieza et des connecteurs comme primero, luego, después.",
              solution: [
                "a) 7 h 15 + 20 min = 7 h 35 ; 7 h 35 + 25 min = 8 h 00. Elle arrive à huit heures : « Llega a las ocho. »",
                "b) Exemple : « Lucía se levanta a las siete y cuarto. Primero se ducha y se lava los dientes. Luego desayuna con su madre. Después sale de casa y va al instituto a pie. Llega a las ocho y las clases empiezan a las ocho y cuarto. »",
                "Vérification : deux verbes irréguliers, « va » (ir) et « empiezan » (empezar, e → ie) ; « sale » est la 3e personne de salir, régulière (seul « salgo » est irrégulier) ; verbes pronominaux avec « se » ; connecteurs primero, luego, después.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez la journée de Pablo dans l'ordre, du matin au soir.",
            items: [
              "Me despierto a las siete.",
              "Me levanto a las siete y cuarto.",
              "Desayuno a las siete y media.",
              "Voy al instituto a las ocho.",
              "Vuelvo a casa a las cinco.",
              "Hago los deberes a las seis.",
              "Me acuesto a las diez.",
            ],
          },
          quiz: [
            { q: "Quelle est la forme correcte de « volver » avec « yo » ?", options: ["volvo", "vuelvo", "vuelvó", "volvió"], answer: 1, why: "Volver diphtongue o en ue quand le radical est accentué : vuelvo." },
            { q: "Complétez : « Nosotros ... al baloncesto. » (jugar)", options: ["juegamos", "jugan", "jugamos", "juegan"], answer: 2, why: "Avec nosotros, pas de diphtongue : jugamos." },
            { q: "Quelle est la 1re personne de « hacer » ?", options: ["hago", "haco", "hace", "hazo"], answer: 0, why: "Hacer est irrégulier à la 1re personne : hago. Les autres formes sont régulières." },
            { q: "Comment dit-on « je me couche à dix heures » ?", options: ["Yo acuesto me a las diez.", "Me acosto a las diez.", "Me acuesto a la diez.", "Me acuesto a las diez."], answer: 3, why: "Acostarse : pronom me, diphtongue o → ue, et « a las diez » au pluriel." },
            { q: "Comment dit-on « nous allons au collège à pied » ?", options: ["Vamos al instituto a pie.", "Vamos a el instituto en pie.", "Vamos en instituto a pie."], answer: 0, why: "Ir à la 1re personne du pluriel : vamos ; a + el = al ; « à pied » se dit « a pie »." },
          ],
          trap: "Appliquer la diphtongue à toutes les personnes (« juegamos », « vuelvemos ») : avec nosotros et vosotros, le radical ne change pas. Autre erreur fréquente : oublier le pronom des verbes pronominaux (« levanto a las siete » au lieu de « me levanto »).",
          method: "Classez les verbes dans trois boîtes : les complètement irréguliers (ir), ceux qui ne changent qu'avec « yo » (hago, salgo), ceux qui diphtonguent (empiezo, vuelvo, juego). Pour les derniers, dessinez une « botte » dans le tableau de conjugaison : les quatre formes à l'intérieur diphtonguent, nosotros et vosotros restent dehors.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'tiempo-estaciones',
          title: 'Le temps qu\'il fait et les saisons',
          minutes: 25,
          objectives: [
            "Dire le temps qu'il fait avec « hace », « hay », « está » et les verbes llover et nevar.",
            "Nommer les mois et les saisons, et dire la date.",
            "Comprendre un bulletin météo simple.",
            "Expliquer pourquoi les saisons sont inversées dans l'hémisphère sud.",
          ],
          course: [
            {
              heading: "Quel temps fait-il ?",
              paragraphs: [
                "La question est « ¿Qué tiempo hace? » (quel temps fait-il ?). Comme en français, on emploie souvent le verbe « hacer » : hace sol (il fait soleil), hace calor (il fait chaud), hace frío (il fait froid), hace viento (il y a du vent), hace buen tiempo (il fait beau), hace mal tiempo (il fait mauvais).",
                "Pour la pluie et la neige, on emploie des verbes à part entière : llueve (il pleut), du verbe llover, et nieva (il neige), du verbe nevar. On dit aussi : está nublado (c'est nuageux), hay niebla (il y a du brouillard), hay tormenta (il y a de l'orage). Pour la température : « Hace veinte grados » (il fait vingt degrés), « Hace cinco grados bajo cero » (il fait moins cinq degrés).",
              ],
              box: { label: "À retenir", text: "hace sol, calor, frío, viento, buen tiempo, mal tiempo. llueve (llover), nieva (nevar). está nublado. hay niebla, hay tormenta." },
            },
            {
              heading: "« Mucho » et non « muy »",
              paragraphs: [
                "Dans « hace calor » ou « hace frío », les mots « calor » et « frío » sont des noms (la chaleur, le froid). Pour dire « il fait très chaud », on ne peut donc pas employer « muy », qui accompagne un adjectif : on dit « hace mucho calor », « hace mucho frío », « hace mucho viento ». Attention : « el calor » est masculin en espagnol, alors que « la chaleur » est féminin en français.",
                "En revanche, « muy » s'emploie devant un adjectif ou un adverbe : « hace muy buen tiempo », « está muy nublado ». Pour la pluie : « llueve mucho » (il pleut beaucoup).",
              ],
              box: { label: "Règle", text: "mucho + nom : hace mucho calor, hace mucho frío, hace mucho viento. muy + adjectif : hace muy buen tiempo, está muy nublado." },
            },
            {
              heading: "Les mois, les saisons et la date",
              paragraphs: [
                "Les mois : enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre. Ils s'écrivent avec une minuscule. Les saisons : la primavera (le printemps), el verano (l'été), el otoño (l'automne), el invierno (l'hiver). « En verano hace calor » ; « en invierno nieva en la montaña ».",
                "Pour dire la date, on emploie « el » + nombre + « de » + mois : « Hoy es el doce de octubre » (aujourd'hui, c'est le 12 octobre). Pour le premier jour du mois, on dit souvent « el uno » (en Amérique latine aussi « el primero »). Le 12 octobre est d'ailleurs la fête nationale de l'Espagne. Pour demander la date : « ¿Qué día es hoy? ».",
              ],
            },
            {
              heading: "Des saisons inversées au sud de l'équateur",
              paragraphs: [
                "En Espagne et au Mexique, situés dans l'hémisphère nord comme la France, l'été va de juin à septembre et l'hiver de décembre à mars. Mais en Argentine, au Chili ou en Uruguay, situés dans l'hémisphère sud, les saisons sont inversées : en décembre, c'est l'été, et en juillet, c'est l'hiver. À Buenos Aires, on fête donc Noël en plein été, souvent par une forte chaleur.",
                "Cela s'explique par l'inclinaison de l'axe de la Terre : quand l'hémisphère nord est penché vers le Soleil (notre été), l'hémisphère sud en est détourné (son hiver), et inversement six mois plus tard.",
              ],
              box: { label: "Repère", text: "Hémisphère nord (Espagne, Mexique) : verano en julio. Hémisphère sud (Argentina, Chile, Uruguay) : verano en enero, invierno en julio." },
            },
          ],
          keyPoints: [
            "¿Qué tiempo hace? → hace sol, calor, frío, viento, buen tiempo, mal tiempo.",
            "llueve (llover), nieva (nevar), está nublado, hay niebla, hay tormenta.",
            "hace mucho calor (et non « muy calor ») : calor et frío sont des noms.",
            "Mois et saisons en minuscule : la primavera, el verano, el otoño, el invierno.",
            "La date : Hoy es el doce de octubre.",
            "Dans l'hémisphère sud, les saisons sont inversées : en Argentine, l'été est en décembre.",
          ],
          example: {
            statement: "Traduisez ce bulletin météo : « Aujourd'hui, le 3 février, il fait très froid à Madrid : il fait deux degrés. Il neige dans les montagnes. À Buenos Aires, il fait beau et très chaud. »",
            solution: [
              "« Aujourd'hui, le 3 février » : « Hoy, el tres de febrero » (minuscule au mois).",
              "« il fait très froid » : frío est un nom → « hace mucho frío ». « il fait deux degrés » : « hace dos grados ».",
              "« Il neige dans les montagnes » : verbe nevar → « nieva en las montañas ».",
              "« À Buenos Aires, il fait beau et très chaud » : en février, c'est l'été dans l'hémisphère sud → « hace buen tiempo y hace mucho calor ».",
              "Réponse : « Hoy, el tres de febrero, hace mucho frío en Madrid: hace dos grados. Nieva en las montañas. En Buenos Aires hace buen tiempo y hace mucho calor. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol : a) il fait soleil ; b) il pleut ; c) il fait froid ; d) c'est nuageux ; e) il y a du vent.",
              hint: "Trois expressions avec « hace », une avec « está », et un verbe à part entière.",
              solution: [
                "a) Hace sol.",
                "b) Llueve.",
                "c) Hace frío.",
                "d) Está nublado.",
                "e) Hace viento.",
              ],
            },
            {
              level: 2,
              statement: "Corrigez les erreurs : a) Hace muy calor en agosto. b) En Invierno, nieva. c) Hoy es 14 Julio. d) Hace mucho buen tiempo.",
              hint: "Rappelez-vous : mucho + nom, muy + adjectif ; minuscules aux saisons et aux mois ; la date se construit avec el ... de ...",
              solution: [
                "a) « calor » est un nom : « Hace mucho calor en agosto. »",
                "b) Les saisons s'écrivent en minuscule : « En invierno, nieva. »",
                "c) Il faut l'article, « de » et la minuscule : « Hoy es el catorce de julio. »",
                "d) « buen » est un adjectif : « Hace muy buen tiempo. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : votre correspondant vit à Santiago du Chili. Vous lui écrivez le 15 janvier. a) Quelle saison est-ce chez vous, en France, et chez lui ? Justifiez. b) Rédigez en espagnol trois phrases : la date, le temps chez vous, et une question sur le temps chez lui.",
              hint: "La France est dans l'hémisphère nord, le Chili dans l'hémisphère sud. Pour la question : « ¿Qué tiempo hace en Santiago? ».",
              solution: [
                "a) En France (hémisphère nord), le 15 janvier, c'est l'hiver. Au Chili (hémisphère sud), les saisons sont inversées : c'est l'été.",
                "b) « Hoy es el quince de enero. Aquí hace mucho frío y llueve. ¿Qué tiempo hace en Santiago? ¿Hace calor? »",
                "Vérification : minuscule à « enero », « mucho frío » (nom), « llueve » sans « hace ».",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression à sa traduction.",
            pairs: [
              { left: "Hace calor", right: "Il fait chaud" },
              { left: "Llueve", right: "Il pleut" },
              { left: "Nieva", right: "Il neige" },
              { left: "Está nublado", right: "C'est nuageux" },
              { left: "el otoño", right: "l'automne" },
              { left: "el invierno", right: "l'hiver" },
            ],
          },
          quiz: [
            { q: "Comment dit-on « il fait très froid » ?", options: ["Hace muy frío.", "Está mucho frío.", "Hace mucho frío.", "Es mucho frío."], answer: 2, why: "« Frío » est ici un nom : on emploie « mucho », et le verbe hacer." },
            { q: "Que signifie « la primavera » ?", options: ["le printemps", "l'été", "l'automne", "la promenade"], answer: 0, why: "La primavera est le printemps ; l'été se dit « el verano »." },
            { q: "Comment dit-on « il pleut » ?", options: ["Hace lluvia.", "Llueve.", "Está llover.", "Hay llueve."], answer: 1, why: "On emploie le verbe llover conjugué : llueve." },
            { q: "En juillet, à Buenos Aires, c'est...", options: ["l'été", "le printemps", "l'automne", "l'hiver"], answer: 3, why: "L'Argentine est dans l'hémisphère sud : les saisons sont inversées, juillet est en hiver." },
            { q: "Comment écrit-on le 5 mai ?", options: ["el cinco de mayo", "el cinco Mayo", "cinco del mes de Mayo"], answer: 0, why: "La date se construit avec el + nombre + de + mois, et le mois s'écrit en minuscule." },
          ],
          trap: "Dire « hace muy calor » ou « hace muy frío » : calor et frío sont des noms, il faut « mucho ». Autre erreur fréquente : traduire « il pleut » par « hace lluvia » au lieu du verbe « llueve ».",
          method: "Chaque matin, regardez par la fenêtre et dites à voix haute la date et le temps en espagnol : « Hoy es el... de... Hace... ». En quelques semaines, vous connaîtrez les mois et les expressions météo sans effort.",
        },
      ],
    },
    {
      id: 'reel-imaginaire',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'personnage-imaginaire',
          title: 'Décrire un personnage ou un animal imaginaire',
          minutes: 30,
          objectives: [
            "Nommer les parties du corps d'une personne et d'un animal.",
            "Décrire une créature imaginaire avec ser, tener et les couleurs accordées.",
            "Comparer avec más... que, menos... que, tan... como.",
            "Découvrir des créatures imaginaires du monde hispanique : les alebrijes, Quetzalcóatl, les géants de don Quichotte.",
          ],
          course: [
            {
              heading: "Le corps et les animaux : le vocabulaire",
              paragraphs: [
                "Le corps (« el cuerpo ») : la cabeza (la tête), la cara (le visage), los ojos (les yeux), la nariz (le nez), la boca (la bouche), las orejas (les oreilles), los dientes (les dents), el cuello (le cou), los brazos (les bras), las manos (les mains), las piernas (les jambes), los pies (les pieds).",
                "Pour un animal ou une créature : la cola (la queue), las alas (les ailes), las patas (les pattes), los cuernos (les cornes), las plumas (les plumes), las escamas (les écailles), el pico (le bec), las garras (les griffes). Et quelques animaux : el dragón, la serpiente (le serpent), el águila (l'aigle), el león, el caballo (le cheval), el pájaro (l'oiseau). Attention : « el ala » et « el águila » sont des noms féminins ; on emploie « el » au singulier parce qu'ils commencent par un a accentué, mais on dit « las alas » et « un águila blanca ».",
              ],
            },
            {
              heading: "Décrire une créature : ser, tener et les couleurs",
              paragraphs: [
                "On décrit une créature comme une personne : « ser » pour ses caractéristiques (« Es enorme y muy simpático »), « tener » pour les parties du corps (« Tiene tres ojos y una cola larga »). Avec « tener », on n'emploie pas d'article quand on compte ou quand on présente un élément (« tiene dos cabezas », « tiene alas ») ; on emploie l'article défini quand on décrit une partie du corps avec un adjectif, comme pour les cheveux (« tiene la cabeza roja »). On peut aussi dire « parece » (il ressemble à) : « Parece un dragón ».",
                "Les couleurs sont des adjectifs : elles se placent après le nom et s'accordent. Rojo, amarillo, blanco, negro prennent les quatre formes (rojo, roja, rojos, rojas). Verde, azul et gris ne changent qu'au pluriel (verdes, azules, grises). Rosa et naranja restent le plus souvent invariables. « Tiene la cabeza roja, las alas azules y los ojos amarillos. » Pour dire « de toutes les couleurs », on dit « de muchos colores ».",
              ],
              box: { label: "Règle", text: "ser + adjectif : es grande. tener + partie du corps : tiene cuatro patas. La couleur se place après le nom et s'accorde : una cola roja, unos cuernos negros, unas alas verdes." },
            },
            {
              heading: "Comparer",
              paragraphs: [
                "Pour comparer deux êtres, on emploie trois structures. Supériorité : « más + adjectif + que » : « El dragón es más grande que el caballo ». Infériorité : « menos + adjectif + que » : « El gato es menos rápido que el águila ». Égalité : « tan + adjectif + como » : « Mi monstruo es tan alto como una casa ».",
                "Quelques comparatifs sont irréguliers : « mejor » (meilleur, mieux) et « peor » (pire). « Este alebrije es mejor que el otro. » On ne dit pas « más bueno ».",
              ],
              box: { label: "À retenir", text: "más... que (plus... que), menos... que (moins... que), tan... como (aussi... que). mejor (meilleur), peor (pire)." },
            },
            {
              heading: "Des créatures du monde hispanique",
              paragraphs: [
                "Au Mexique, les alebrijes sont des sculptures de créatures fantastiques aux couleurs vives, mélangeant plusieurs animaux : un corps de lion avec des ailes de papillon, une tête de chien avec des cornes... Selon le récit qu'en faisait leur créateur, l'artisan Pedro Linares, de Mexico, ces créatures lui sont apparues en rêve pendant une maladie, dans les années 1930. Il les a ensuite fabriquées en papier mâché ; dans la région d'Oaxaca, des artisans les sculptent aujourd'hui dans le bois.",
                "Dans les civilisations anciennes du Mexique, Quetzalcóatl, « le serpent à plumes », était une grande divinité, représentée comme un serpent couvert de plumes. En Espagne, le roman de Cervantès « Don Quijote de la Mancha » (1605) joue avec la frontière entre le réel et l'imaginaire : le héros croit voir des géants là où il n'y a que des moulins à vent, et il les attaque.",
              ],
            },
          ],
          keyPoints: [
            "Corps : la cabeza, los ojos, la boca, los brazos, las piernas ; animal : la cola, las alas, las patas, los cuernos.",
            "ser pour décrire (es enorme), tener pour les parties du corps (tiene tres ojos).",
            "La couleur suit le nom et s'accorde : una cola roja, unas alas azules.",
            "más... que, menos... que, tan... como ; mejor, peor.",
            "Alebrijes : créatures fantastiques mexicaines, créées par Pedro Linares.",
            "Quetzalcóatl : le serpent à plumes ; don Quijote prend des moulins pour des géants.",
          ],
          example: {
            statement: "Décrivez en espagnol cette créature imaginaire : elle a la tête d'un aigle et le corps d'un cheval ; elle a deux grandes ailes vertes et une longue queue rouge ; elle est plus rapide que le vent.",
            solution: [
              "Les parties du corps avec tener : « tiene la cabeza de un águila y el cuerpo de un caballo ».",
              "Les ailes : féminin pluriel, couleur après le nom : « dos alas grandes y verdes » (verde prend seulement un -s).",
              "La queue : « una cola larga y roja » (féminin singulier).",
              "La comparaison de supériorité : « es más rápida que el viento » (créature est féminin : rápida).",
              "Réponse : « Es una criatura fantástica. Tiene la cabeza de un águila y el cuerpo de un caballo. Tiene dos alas grandes y verdes y una cola larga y roja. Es más rápida que el viento. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol : a) trois yeux ; b) une queue noire ; c) des ailes blanches ; d) quatre pattes ; e) un nez rouge.",
              hint: "La couleur se place après le nom et s'accorde : regardez le genre et le nombre du nom.",
              solution: [
                "a) tres ojos.",
                "b) una cola negra.",
                "c) unas alas blancas.",
                "d) cuatro patas.",
                "e) una nariz roja (« la nariz » est féminin en espagnol).",
              ],
            },
            {
              level: 2,
              statement: "Comparez avec la structure indiquée : a) el elefante / el ratón : grande (+). b) la tortuga / el conejo : rápido (-). c) mi dragón / una montaña : alto (=). d) este alebrije / el otro : bueno (+).",
              hint: "(+) más... que ; (-) menos... que ; (=) tan... como. Attention : « bueno » a un comparatif irrégulier.",
              solution: [
                "a) « El elefante es más grande que el ratón. »",
                "b) « La tortuga es menos rápida que el conejo. » (tortuga est féminin : rápida).",
                "c) « Mi dragón es tan alto como una montaña. »",
                "d) « Este alebrije es mejor que el otro. » (et non « más bueno »).",
              ],
            },
            {
              level: 3,
              statement: "Défi : inventez votre propre alebrije, mélange d'au moins deux animaux. Décrivez-le en espagnol en cinq phrases : son nom, son corps (avec au moins trois parties et trois couleurs accordées), son caractère, une comparaison et ce qu'il aime.",
              hint: "Utilisez se llama, tiene, es, más... que et le gusta / le gustan. Vérifiez chaque accord de couleur.",
              solution: [
                "Exemple : « Mi alebrije se llama Fuego. Tiene la cabeza de un gato, el cuerpo de una serpiente y dos alas naranja. Tiene los ojos verdes y una cola larga y amarilla. Es muy simpático pero un poco perezoso. Es más grande que un autobús y le gustan los tacos. »",
                "Vérification des accords : los ojos verdes (pluriel), una cola larga y amarilla (féminin singulier), dos alas naranja (naranja invariable, « naranjas » est aussi accepté).",
                "Vérification de la grammaire : tiene pour le corps, es pour le caractère, más... que pour la comparaison, le gustan + pluriel (los tacos).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances.",
            statements: [
              { text: "« La cola » signifie la queue d'un animal.", true: true, why: "La cola est la queue ; les ailes se disent las alas." },
              { text: "On écrit « unas alas rojos ».", true: false, why: "« Alas » est féminin pluriel : unas alas rojas." },
              { text: "« Tan grande como » exprime l'égalité.", true: true, why: "Tan... como signifie aussi... que." },
              { text: "Les alebrijes sont des créatures fantastiques de la tradition artisanale mexicaine.", true: true, why: "Ces sculptures colorées sont nées au Mexique, avec l'artisan Pedro Linares." },
              { text: "Pour dire « meilleur », on dit « más bueno ».", true: false, why: "Le comparatif de bueno est irrégulier : mejor." },
              { text: "Quetzalcóatl est représenté comme un dragon à trois têtes.", true: false, why: "Quetzalcóatl est le serpent à plumes des civilisations anciennes du Mexique." },
              { text: "Dans le roman de Cervantès, don Quijote prend des moulins à vent pour des géants.", true: true, why: "C'est l'épisode le plus célèbre du roman, publié en 1605." },
            ],
          },
          quiz: [
            { q: "Comment dit-on « il a deux têtes » ?", options: ["Es dos cabezas.", "Tiene dos cabezas.", "Hay dos cabezas.", "Lleva dos cabezas encima."], answer: 1, why: "Pour les parties du corps, on emploie tener : tiene dos cabezas." },
            { q: "Quelle phrase est correctement accordée ?", options: ["Tiene una cola negro.", "Tiene unos ojos amarilla.", "Tiene las alas blancas.", "Tiene la nariz rojo."], answer: 2, why: "« Alas » est féminin pluriel : blancas. Les autres couleurs ne sont pas accordées avec le nom." },
            { q: "« El ratón es menos grande que el gato » signifie :", options: ["La souris est aussi grande que le chat.", "La souris est plus grande que le chat.", "La souris est moins grande que le chat."], answer: 2, why: "Menos... que exprime l'infériorité : moins... que." },
            { q: "Que signifie « las alas » ?", options: ["les ailes", "les pattes", "les griffes", "les plumes"], answer: 0, why: "Las alas sont les ailes. Les pattes se disent las patas, les plumes las plumas." },
            { q: "Qui a créé les premiers alebrijes, selon la tradition ?", options: ["Diego Rivera", "Miguel de Cervantes", "Frida Kahlo", "Pedro Linares"], answer: 3, why: "L'artisan Pedro Linares, de Mexico, racontait avoir vu ces créatures en rêve dans les années 1930." },
          ],
          trap: "Oublier d'accorder la couleur avec le nom (« una cola rojo ») ou la placer avant le nom comme on le fait parfois en français : en espagnol, la couleur suit le nom et s'accorde en genre et en nombre. Autre erreur : employer « ser » pour les parties du corps (« es tres ojos ») au lieu de « tener ».",
          method: "Dessinez votre créature avant d'écrire, puis légendez chaque partie du dessin en espagnol avec sa couleur accordée (« la cola roja »). Rédigez ensuite votre description à partir des légendes : vous aurez déjà tout le vocabulaire sous les yeux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'leyenda',
          title: 'Lire une légende du monde hispanique',
          minutes: 35,
          objectives: [
            "Identifier les caractéristiques d'une légende : personnages, lieu, merveilleux, explication du monde.",
            "Comprendre un récit simple en espagnol en s'appuyant sur les mots transparents et les connecteurs.",
            "Résumer une légende en quelques phrases au présent.",
            "Découvrir une légende mexicaine : Popocatépetl et Iztaccíhuatl.",
          ],
          course: [
            {
              heading: "Qu'est-ce qu'une légende ?",
              paragraphs: [
                "Une légende (« una leyenda ») est un récit traditionnel, transmis d'abord oralement, de génération en génération. Elle se rattache souvent à un lieu réel (une montagne, un lac, une ville) et mêle des faits imaginaires, parfois merveilleux (des dieux, des métamorphoses), à la réalité. Elle cherche souvent à expliquer l'origine de quelque chose : un paysage, un nom, une coutume.",
                "Le monde hispanique est riche en légendes. Au Mexique, la légende de « La Llorona » raconte l'histoire d'une femme qui pleure ses enfants la nuit. En Colombie, la légende de « El Dorado » est née d'une cérémonie des Muiscas, au cours de laquelle un chef couvert de poudre d'or jetait des offrandes dans un lac ; les conquérants espagnols ont ensuite cherché en vain une cité d'or.",
              ],
              box: { label: "Définition", text: "Une légende est un récit traditionnel, d'abord oral, lié à un lieu ou à un personnage réel, qui mêle réel et imaginaire et prétend souvent expliquer l'origine de quelque chose." },
            },
            {
              heading: "Une légende mexicaine : les deux volcans",
              paragraphs: [
                "Au sud-est de Mexico se dressent deux volcans voisins : le Popocatépetl, qui signifie en nahuatl « la montagne qui fume », toujours actif, et l'Iztaccíhuatl, « la femme blanche », dont la silhouette enneigée fait penser à une femme endormie. Voici une version simplifiée, rédigée pour cette leçon, de la légende qui les explique (il en existe plusieurs versions).",
                "« Hace muchos siglos, en el valle de México, vive una princesa muy bella: se llama Iztaccíhuatl. Está enamorada de Popocatépetl, un guerrero joven y valiente. El padre de la princesa acepta la boda con una condición: Popocatépetl tiene que ganar una guerra lejos de allí. El guerrero sale para la guerra. »",
                "« Un día, un rival celoso anuncia una noticia falsa: Popocatépetl está muerto. La princesa, muy triste, muere de pena. Cuando Popocatépetl vuelve victorioso, encuentra a su amada muerta. Lleva su cuerpo a la montaña, se arrodilla a su lado con una antorcha y la vigila. Los dioses los transforman en dos volcanes. Hoy, el Popocatépetl todavía echa humo: es la antorcha del guerrero. »",
              ],
              box: { label: "Vocabulaire", text: "hace muchos siglos : il y a bien des siècles. enamorada de : amoureuse de. el guerrero : le guerrier. la boda : le mariage. tiene que : il doit. celoso : jaloux. muere de pena : meurt de chagrin. se arrodilla : s'agenouille. la antorcha : la torche. echa humo : fume." },
            },
            {
              heading: "Comprendre un récit en espagnol",
              paragraphs: [
                "Pour comprendre un texte sans connaître tous les mots, appuyez-vous d'abord sur les mots transparents, qui ressemblent au français : princesa, guerrero (guerrier), victorioso, transforman, volcanes. Puis repérez les personnages (qui ?), le lieu (où ?), le moment (quand ?) et le problème (quoi ?).",
                "Les connecteurs vous guident dans l'ordre des événements : « hace muchos siglos » ou « había una vez » (il était une fois) ouvrent le récit ; « un día » (un jour) annonce un événement ; « cuando » (quand), « luego », « después » (ensuite) font avancer l'histoire ; « pero » (mais) annonce une opposition ; « hoy » (aujourd'hui) ramène au présent et à l'explication finale.",
              ],
            },
            {
              heading: "Raconter et résumer au présent",
              paragraphs: [
                "Dans cette version, la légende est racontée au présent : c'est le présent de narration, qui rend le récit plus vivant. Vous pouvez l'utiliser pour résumer une histoire : « La princesa ama al guerrero. El guerrero sale para la guerra. »",
                "Un bon résumé reprend seulement les étapes essentielles, dans l'ordre : la situation de départ, l'événement qui déclenche l'histoire, les péripéties, la fin, et l'explication. Il tient en cinq ou six phrases courtes, avec des connecteurs.",
              ],
              box: { label: "Méthode", text: "Résumer une légende : 1) qui, où, quand ; 2) le problème ; 3) les péripéties ; 4) la fin ; 5) ce que la légende explique. Phrases courtes, au présent, avec des connecteurs." },
            },
          ],
          keyPoints: [
            "Une légende est un récit traditionnel et oral, lié à un lieu réel, qui mêle réel et imaginaire.",
            "Elle explique souvent l'origine de quelque chose : ici, deux volcans.",
            "Popocatépetl : « la montagne qui fume » ; Iztaccíhuatl : « la femme blanche ».",
            "Mots transparents et connecteurs (un día, cuando, pero, hoy) aident à comprendre.",
            "On peut raconter et résumer au présent de narration.",
          ],
          example: {
            statement: "D'après le texte de la leçon, répondez en espagnol : a) ¿Quién es Iztaccíhuatl? b) ¿Qué condición pone el padre? c) ¿Por qué muere la princesa?",
            solution: [
              "a) On cherche la phrase de présentation : « vive una princesa muy bella: se llama Iztaccíhuatl ». Réponse : « Iztaccíhuatl es una princesa muy bella. »",
              "b) On repère le mot « condición » : « Popocatépetl tiene que ganar una guerra ». Réponse : « Popocatépetl tiene que ganar una guerra. »",
              "c) « Por qué » appelle une cause, introduite par « porque » : un rival annonce une fausse nouvelle. Réponse : « Muere de pena porque un rival anuncia que Popocatépetl está muerto. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Retrouvez dans le texte de la leçon le mot espagnol qui correspond à : a) guerrier ; b) jaloux ; c) la torche ; d) le mariage ; e) fausse.",
              hint: "Cherchez d'abord les mots transparents, puis utilisez l'encadré de vocabulaire.",
              solution: [
                "a) guerrier : « el guerrero ».",
                "b) jaloux : « celoso ».",
                "c) la torche : « la antorcha ».",
                "d) le mariage : « la boda ».",
                "e) fausse : « falsa » (una noticia falsa).",
              ],
            },
            {
              level: 2,
              statement: "Vrai ou faux ? Justifiez en citant le texte de la leçon : a) Popocatépetl es un rey anciano. b) El padre acepta la boda sin condiciones. c) La princesa muere de pena. d) Hoy el Popocatépetl echa humo.",
              hint: "Pour chaque affirmation, retrouvez la phrase du texte qui en parle et comparez mot à mot.",
              solution: [
                "a) Faux : « Popocatépetl, un guerrero joven y valiente » : c'est un jeune guerrier, pas un vieux roi.",
                "b) Faux : « acepta la boda con una condición » : il pose une condition.",
                "c) Vrai : « La princesa, muy triste, muere de pena. »",
                "d) Vrai : « Hoy, el Popocatépetl todavía echa humo. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : résumez la légende en espagnol, au présent, en cinq phrases maximum, avec au moins trois connecteurs. Puis expliquez en une phrase en français ce que cette légende cherche à expliquer.",
              hint: "Suivez la méthode : situation de départ, problème, péripéties, fin, explication. Connecteurs possibles : hace muchos siglos, un día, cuando, luego, hoy.",
              solution: [
                "Résumé : « Hace muchos siglos, una princesa ama a un guerrero. Un día, el guerrero sale para la guerra y un rival anuncia que está muerto. La princesa muere de pena. Cuando el guerrero vuelve, lleva su cuerpo a la montaña y la vigila con una antorcha. Hoy, los dos son volcanes. »",
                "Vérification : cinq phrases au présent, connecteurs « hace muchos siglos », « un día », « cuando », « hoy ».",
                "Explication : la légende explique l'origine des deux volcans voisins, la forme de femme endormie de l'Iztaccíhuatl et la fumée du Popocatépetl.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les étapes de la légende dans l'ordre.",
            items: [
              "Iztaccíhuatl y Popocatépetl están enamorados.",
              "El padre pone una condición: ganar una guerra.",
              "Popocatépetl sale para la guerra.",
              "Un rival celoso anuncia una noticia falsa.",
              "La princesa muere de pena.",
              "Popocatépetl vuelve y lleva a la princesa a la montaña.",
              "Los dioses los transforman en volcanes.",
            ],
          },
          quiz: [
            { q: "Que signifie « Popocatépetl » en nahuatl ?", options: ["la femme blanche", "la montagne qui fume", "le guerrier courageux", "le grand lac"], answer: 1, why: "Popocatépetl signifie « la montagne qui fume » ; Iztaccíhuatl signifie « la femme blanche »." },
            { q: "Quelle est une caractéristique d'une légende ?", options: ["Elle est écrite par un journaliste.", "Elle raconte toujours un fait historique vérifié.", "Elle est toujours drôle.", "Elle se rattache souvent à un lieu réel."], answer: 3, why: "Une légende mêle réel et imaginaire, et se rattache souvent à un lieu ou à un personnage réel." },
            { q: "Que signifie « Un día, un rival celoso anuncia una noticia falsa » ?", options: ["Un jour, un rival jaloux annonce une fausse nouvelle.", "Un jour, un ami triste annonce une bonne nouvelle.", "Chaque jour, un rival très célèbre annonce une nouvelle."], answer: 0, why: "« Celoso » signifie jaloux et « falsa » fausse ; « un día » signifie un jour." },
            { q: "Quel connecteur annonce une opposition ?", options: ["cuando", "luego", "pero", "hoy"], answer: 2, why: "« Pero » signifie mais. « Cuando » signifie quand, « luego » ensuite, « hoy » aujourd'hui." },
            { q: "Selon la légende, que représente la fumée du Popocatépetl ?", options: ["la colère des dieux", "la torche du guerrier", "les larmes de la princesse"], answer: 1, why: "Le guerrier veille la princesse avec une torche : la fumée du volcan serait cette torche." },
          ],
          trap: "Vouloir traduire chaque mot du texte avant de le comprendre, et se bloquer au premier mot inconnu. Il faut d'abord repérer les mots transparents, les personnages et les connecteurs, puis deviner le sens global. Autre erreur : prendre la légende pour un récit historique vrai.",
          method: "Lisez le texte trois fois : une première fois pour repérer les personnages et le lieu, une deuxième fois pour souligner les connecteurs et numéroter les étapes, une troisième fois pour vérifier le sens des mots difficiles avec le vocabulaire. Résumez ensuite chaque étape en une phrase.",
        },
      ],
    },
    {
      id: 'mexique',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mexique-carte',
          title: 'Le Mexique : un pays, une capitale, des paysages',
          minutes: 30,
          objectives: [
            "Situer le Mexique, sa capitale et ses pays voisins sur une carte.",
            "Nommer les grands paysages du Mexique en espagnol.",
            "Utiliser les points cardinaux pour situer un lieu (al norte de, en el sur de).",
            "Identifier quelques repères de l'histoire et de la culture mexicaines.",
          ],
          course: [
            {
              heading: "Un grand pays d'Amérique du Nord",
              paragraphs: [
                "Le Mexique (« México », officiellement « los Estados Unidos Mexicanos ») se trouve en Amérique du Nord. Il a une frontière avec les États-Unis au nord, et avec le Guatemala et le Belize au sud-est. Il est bordé par l'océan Pacifique à l'ouest, et par le golfe du Mexique et la mer des Caraïbes à l'est. Sa superficie, d'environ 2 millions de km², représente environ trois fois et demie celle de la France métropolitaine.",
                "Avec environ 126 millions d'habitants au recensement de 2020, c'est le pays hispanophone le plus peuplé du monde. C'est une république fédérale composée de 32 entités : 31 États et la ville de Mexico. Sa monnaie est le peso mexicain. Notez que « México » s'écrit avec un x, mais se prononce avec le son de la jota : « Méjico ».",
              ],
              box: { label: "Repère", text: "Capitale : Ciudad de México (CDMX). Habitants : los mexicanos, las mexicanas. Monnaie : el peso. Langue officielle de fait : el español, à côté de 68 langues indigènes reconnues, comme le nahuatl et le maya." },
            },
            {
              heading: "Des paysages très variés",
              paragraphs: [
                "Le Mexique offre presque tous les paysages : de grandes chaînes de montagnes (la Sierra Madre Occidental et la Sierra Madre Oriental), des volcans (el Popocatépetl, el Pico de Orizaba, le plus haut sommet du pays), des déserts au nord (el desierto de Sonora, el desierto de Chihuahua), de la forêt tropicale au sud (la selva de Chiapas), et des milliers de kilomètres de plages (las playas de Cancún, de Acapulco).",
                "Deux longues presqu'îles s'avancent dans la mer : la péninsule de Basse-Californie (« Baja California ») au nord-ouest et la péninsule du Yucatán au sud-est. Vocabulaire utile : la montaña, el volcán, el desierto, la selva, la playa, el río (le fleuve), el mar, la costa (la côte), la península.",
              ],
            },
            {
              heading: "Situer avec les points cardinaux",
              paragraphs: [
                "Les points cardinaux sont : el norte (le nord), el sur (le sud), el este (l'est), el oeste (l'ouest). On combine aussi : el noroeste, el sureste... Pour situer un lieu à l'intérieur d'un pays, on dit « en el norte de » : « Monterrey está en el norte de México ». Pour situer un lieu par rapport à un autre, à l'extérieur, on dit « al norte de » : « Estados Unidos está al norte de México ».",
                "On utilise « estar » pour situer, ou « se encuentra » (se trouve) : « La Ciudad de México está en el centro del país » ; « Cancún se encuentra en el sureste ». Et on emploie « hay » pour présenter ce qui existe : « En el norte hay desiertos ».",
              ],
              box: { label: "Règle", text: "en el norte de : à l'intérieur (Chihuahua está en el norte de México). al norte de : à l'extérieur (Estados Unidos está al norte de México). al = a + el." },
            },
            {
              heading: "Quelques repères d'histoire et de culture",
              paragraphs: [
                "Avant l'arrivée des Espagnols, de grandes civilisations se sont développées sur ce territoire : les Mayas, dans le sud et le Yucatán (la cité de Chichén Itzá), et les Aztèques, ou Mexicas, qui fondent en 1325 leur capitale, Tenochtitlan, sur un lac. Le conquistador Hernán Cortés s'en empare en 1521 ; Mexico est construite sur ses ruines. Le Mexique devient une colonie espagnole, puis proclame son indépendance au terme d'une guerre commencée le 16 septembre 1810 et achevée en 1821. Le 16 septembre est la fête nationale.",
                "Le drapeau mexicain est vert, blanc et rouge. En son centre, un aigle posé sur un cactus (« un nopal ») dévore un serpent : selon la tradition aztèque, c'est le signe que les Mexicas devaient attendre pour fonder leur ville. L'espagnol du Mexique a aussi gardé des mots du nahuatl, passés ensuite en français : « el tomate », « el aguacate » (l'avocat), « el chile » (le piment).",
              ],
            },
          ],
          keyPoints: [
            "México : capitale Ciudad de México, environ 126 millions d'habitants (2020), monnaie el peso.",
            "Voisins : Estados Unidos au nord, Guatemala et Belice au sud-est ; océan Pacifique et golfe du Mexique.",
            "Paysages : montañas, volcanes, desiertos al norte, selva al sur, playas, penínsulas.",
            "en el norte de (à l'intérieur) / al norte de (à l'extérieur).",
            "Mayas et Aztèques ; Tenochtitlan (1325), conquête en 1521, indépendance commencée le 16 septembre 1810.",
            "Drapeau : un aigle sur un nopal dévorant un serpent.",
          ],
          example: {
            statement: "Traduisez : « Le Mexique est en Amérique du Nord. Les États-Unis sont au nord du Mexique. Dans le nord du pays, il y a des déserts, et dans le sud, il y a la forêt tropicale. »",
            solution: [
              "« Le Mexique est en Amérique du Nord » : situer → estar : « México está en América del Norte » (de + el = del).",
              "« Les États-Unis sont au nord du Mexique » : à l'extérieur → « al norte de » : « Estados Unidos está al norte de México » (en espagnol, Estados Unidos s'emploie souvent sans article et au singulier).",
              "« Dans le nord du pays, il y a des déserts » : à l'intérieur → « en el norte del país hay desiertos ».",
              "« dans le sud, il y a la forêt tropicale » : « en el sur hay selva » (ou « hay una selva tropical » : pas d'article défini après hay).",
              "Réponse : « México está en América del Norte. Estados Unidos está al norte de México. En el norte del país hay desiertos y en el sur hay selva. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol : a) le désert ; b) la forêt tropicale ; c) la plage ; d) le volcan ; e) le sud ; f) l'ouest.",
              hint: "Tous ces mots se trouvent dans la leçon ; attention au genre de chaque nom.",
              solution: [
                "a) el desierto.",
                "b) la selva.",
                "c) la playa.",
                "d) el volcán.",
                "e) el sur.",
                "f) el oeste.",
              ],
            },
            {
              level: 2,
              statement: "Complétez avec « en el » ou « al » : a) Guatemala está ... sureste de México. b) Cancún está ... sureste de México. c) Baja California está ... noroeste del país. d) Estados Unidos está ... norte de México.",
              hint: "Demandez-vous si le lieu se trouve à l'intérieur du Mexique (en el) ou en dehors (al).",
              solution: [
                "a) Le Guatemala est un autre pays : « Guatemala está al sureste de México. »",
                "b) Cancún est une ville du Mexique : « Cancún está en el sureste de México. »",
                "c) La Basse-Californie fait partie du Mexique : « Baja California está en el noroeste del país. »",
                "d) Les États-Unis sont un autre pays : « Estados Unidos está al norte de México. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : a) Tenochtitlan est fondée en 1325 et prise par Cortés en 1521. Combien d'années la cité aztèque a-t-elle existé avant la conquête ? b) La guerre d'indépendance commence en 1810 et s'achève en 1821 : combien de temps dure-t-elle ? c) Rédigez en espagnol une fiche de présentation du Mexique en quatre phrases : situation, capitale, deux paysages, un repère d'histoire.",
              hint: "Pour les durées, faites une soustraction. Pour la fiche, utilisez está, hay, la capital es et une date.",
              solution: [
                "a) 1521 - 1325 = 196. La cité a existé environ 196 ans avant la conquête.",
                "b) 1821 - 1810 = 11. La guerre d'indépendance dure environ onze ans.",
                "c) Exemple : « México está en América del Norte, al sur de Estados Unidos. La capital es la Ciudad de México. En el norte hay desiertos y en el sur hay selva. Los aztecas fundan Tenochtitlan en 1325. »",
                "Vérification : al sur de (à l'extérieur), hay + nom sans article, majuscules aux noms propres.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque élément à ce qui le caractérise.",
            pairs: [
              { left: "Ciudad de México", right: "la capitale" },
              { left: "el peso", right: "la monnaie" },
              { left: "Chichén Itzá", right: "une cité maya" },
              { left: "Tenochtitlan", right: "la capitale aztèque" },
              { left: "el Popocatépetl", right: "un volcan actif" },
              { left: "el 16 de septiembre", right: "la fête nationale" },
            ],
          },
          quiz: [
            { q: "Quel pays se trouve au nord du Mexique ?", options: ["Guatemala", "Estados Unidos", "Canadá", "Belice"], answer: 1, why: "Le Mexique a une longue frontière avec les États-Unis, au nord. Le Guatemala et le Belize sont au sud-est." },
            { q: "Comment dit-on « dans le sud du Mexique » ?", options: ["al sur de México", "en el sur de México", "al sur del país de México"], answer: 1, why: "Pour un lieu situé à l'intérieur du pays, on dit « en el sur de »." },
            { q: "Que représente le centre du drapeau mexicain ?", options: ["un soleil et une étoile", "un volcan qui fume", "un aigle, un cactus et un serpent", "une pyramide maya entourée de jaguars"], answer: 2, why: "Selon la tradition aztèque, c'est le signe qui indiquait aux Mexicas où fonder Tenochtitlan." },
            { q: "Quelle est la monnaie du Mexique ?", options: ["el peso", "el euro", "el dólar", "el real"], answer: 0, why: "La monnaie mexicaine est le peso." },
            { q: "Quel mot espagnol vient du nahuatl ?", options: ["la montaña", "la playa", "el desierto", "el aguacate"], answer: 3, why: "« Aguacate » (avocat) vient du nahuatl, la langue des Aztèques, comme « tomate » et « chile »." },
          ],
          trap: "Confondre « al norte de » et « en el norte de » : « al norte de México » désigne un lieu en dehors du Mexique, « en el norte de México » un lieu à l'intérieur. Autre erreur : prononcer le x de « México » comme un x français ; il se prononce comme une jota.",
          method: "Dessinez une carte simplifiée du Mexique et placez-y, en espagnol, la capitale, les voisins, les océans et trois paysages. Puis entraînez-vous à la décrire à voix haute en cinq phrases avec « está », « hay » et les points cardinaux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dia-de-muertos',
          title: 'Une fête mexicaine : « el Día de Muertos »',
          minutes: 25,
          objectives: [
            "Présenter le Día de Muertos : dates, sens et traditions.",
            "Nommer les éléments d'une ofrenda en espagnol.",
            "Comparer cette fête avec la Toussaint en France et avec Halloween.",
            "Décrire une tradition avec « se celebra », « la gente pone ».",
          ],
          course: [
            {
              heading: "Une fête pour se souvenir des défunts",
              paragraphs: [
                "Le « Día de Muertos » (jour des Morts) est l'une des fêtes les plus importantes du Mexique. Elle se célèbre principalement le 1er et le 2 novembre. Selon la tradition, les âmes des défunts reviennent ces jours-là rendre visite à leur famille : le 1er novembre est souvent consacré aux enfants disparus, le 2 novembre aux adultes.",
                "Ce n'est pas une fête triste : c'est un moment pour se souvenir des personnes aimées, avec des fleurs, de la musique, de la nourriture et parfois de l'humour. Elle mêle des traditions des peuples indigènes du Mexique, bien antérieures à la conquête, et les fêtes catholiques de la Toussaint et du jour des défunts apportées par les Espagnols. L'UNESCO l'a inscrite en 2008 sur la liste du patrimoine culturel immatériel de l'humanité.",
              ],
              box: { label: "Repère", text: "Día de Muertos : 1er et 2 novembre, au Mexique. Fête du souvenir, colorée et joyeuse, née de la rencontre entre traditions indigènes et fêtes catholiques. Patrimoine culturel immatériel de l'UNESCO (2008)." },
            },
            {
              heading: "L'ofrenda, l'autel des défunts",
              paragraphs: [
                "Dans les maisons, les familles préparent une « ofrenda » (une offrande), un autel décoré pour accueillir les âmes. On y pose des photos des défunts (« las fotos »), des bougies (« las velas ») pour éclairer leur chemin, et des fleurs orange de « cempasúchil », une espèce de tagète (en français, la rose d'Inde), dont la couleur et le parfum doivent guider les âmes. Des pétales forment parfois un chemin jusqu'à la porte.",
                "On y ajoute la nourriture et les boissons préférées des défunts, du « pan de muerto » (un pain sucré décoré de formes d'os), des « calaveras de azúcar » (des têtes de mort en sucre, parfois avec le prénom de quelqu'un sur le front), et du « papel picado », du papier de couleur découpé en motifs. Dans les cimetières, les familles nettoient et décorent les tombes, et passent parfois la nuit à veiller, en musique.",
              ],
              box: { label: "Vocabulaire", text: "la ofrenda : l'autel, l'offrande. las velas : les bougies. las flores de cempasúchil : les fleurs orange. el pan de muerto : le pain des morts. la calavera : la tête de mort. el papel picado : le papier découpé. el cementerio : le cimetière. los difuntos : les défunts." },
            },
            {
              heading: "La Catrina et l'humour face à la mort",
              paragraphs: [
                "Le symbole le plus connu de la fête est « la Catrina », un squelette de femme élégante, coiffée d'un grand chapeau à fleurs. Elle a été dessinée au début du XXe siècle par le graveur mexicain José Guadalupe Posada, qui se moquait des Mexicains reniant leurs origines pour imiter les modes européennes ; le peintre Diego Rivera lui a ensuite donné son nom et l'a rendue célèbre. Aujourd'hui, beaucoup de Mexicains se maquillent en Catrina pour la fête.",
                "On écrit aussi des « calaveritas literarias », de petits poèmes humoristiques où l'on imagine la mort venant chercher un ami ou une personnalité. Le film d'animation « Coco » (Pixar, 2017) s'est inspiré de ces traditions et les a fait connaître dans le monde entier.",
              ],
            },
            {
              heading: "Comparer et décrire une tradition",
              paragraphs: [
                "En France, la Toussaint (le 1er novembre) est aussi un moment où l'on pense aux défunts : on dépose souvent des chrysanthèmes sur les tombes, mais dans une ambiance plus recueillie. Halloween, le 31 octobre, vient des pays anglophones : on s'y déguise pour faire peur et réclamer des bonbons. Le Día de Muertos n'est ni l'un ni l'autre : c'est une fête familiale du souvenir, joyeuse et colorée.",
                "Pour décrire une tradition, on emploie la tournure « se » + verbe à la 3e personne, qui correspond au « on » français : « El Día de Muertos se celebra el 1 y el 2 de noviembre » (on le célèbre). Ou bien « la gente » (les gens), suivi d'un verbe au singulier : « La gente pone flores en las tumbas » (les gens mettent des fleurs).",
              ],
              box: { label: "Règle", text: "se + verbe à la 3e personne = on : se celebra (on célèbre), se come pan de muerto (on mange). La gente + verbe au singulier : la gente visita los cementerios." },
            },
          ],
          keyPoints: [
            "Día de Muertos : 1er et 2 novembre, fête mexicaine du souvenir des défunts.",
            "Ce n'est ni Halloween ni une fête triste : c'est une fête familiale, joyeuse et colorée.",
            "L'ofrenda : fotos, velas, flores de cempasúchil, pan de muerto, calaveras de azúcar, papel picado.",
            "La Catrina : squelette élégant dessiné par José Guadalupe Posada, nommé et popularisé par Diego Rivera.",
            "Patrimoine culturel immatériel de l'UNESCO depuis 2008.",
            "se celebra = on célèbre ; la gente pone (verbe au singulier).",
          ],
          example: {
            statement: "Traduisez : « Au Mexique, on célèbre le Día de Muertos en novembre. Les gens mettent des fleurs orange et des bougies sur l'ofrenda. »",
            solution: [
              "« on célèbre » : tournure se + verbe à la 3e personne : « se celebra ».",
              "« en novembre » : « en noviembre » (minuscule).",
              "« Les gens mettent » : « la gente » est un nom singulier en espagnol → verbe au singulier : « la gente pone ».",
              "« des fleurs orange et des bougies » : « flores naranjas y velas » (naranja peut aussi rester invariable : « flores naranja ») ; « sur l'ofrenda » : « en la ofrenda ».",
              "Réponse : « En México, el Día de Muertos se celebra en noviembre. La gente pone flores naranjas y velas en la ofrenda. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en français : a) las velas ; b) el pan de muerto ; c) la calavera ; d) el cementerio ; e) los difuntos.",
              hint: "Aidez-vous de l'encadré de vocabulaire et des mots transparents (cementerio, difuntos).",
              solution: [
                "a) les bougies.",
                "b) le pain des morts.",
                "c) la tête de mort.",
                "d) le cimetière.",
                "e) les défunts.",
              ],
            },
            {
              level: 2,
              statement: "Mettez le verbe à la bonne forme (tournure avec « se » ou « la gente ») : a) El Día de Muertos (celebrarse) en México. b) La gente (visitar) los cementerios. c) En la ofrenda (ponerse) fotos y velas. d) La gente (comer) pan de muerto.",
              hint: "Avec « se », le verbe s'accorde avec ce qui suit ou précède : fotos y velas est pluriel. « La gente » demande toujours un verbe au singulier.",
              solution: [
                "a) « El Día de Muertos se celebra en México. »",
                "b) « La gente visita los cementerios. » (singulier).",
                "c) « En la ofrenda se ponen fotos y velas. » (pluriel, car fotos y velas est pluriel).",
                "d) « La gente come pan de muerto. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : un camarade pense que « le Día de Muertos, c'est le Halloween mexicain ». En français, expliquez-lui en trois arguments pourquoi c'est faux. Puis écrivez en espagnol trois phrases qui décrivent la fête, avec au moins un « se » + verbe et un « la gente ».",
              hint: "Pensez aux dates, au but de la fête (faire peur ou se souvenir) et à son origine.",
              solution: [
                "Argument 1 : les dates diffèrent : Halloween a lieu le 31 octobre, le Día de Muertos surtout les 1er et 2 novembre.",
                "Argument 2 : le but diffère : Halloween cherche à faire peur et à jouer ; le Día de Muertos sert à se souvenir des défunts de la famille et à les accueillir.",
                "Argument 3 : l'origine diffère : Halloween vient des pays anglophones ; le Día de Muertos mêle traditions indigènes du Mexique et fêtes catholiques.",
                "En espagnol : « El Día de Muertos se celebra el 1 y el 2 de noviembre. La gente pone una ofrenda con fotos, velas y flores. Es una fiesta alegre para recordar a los muertos. »",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Que savez-vous du Día de Muertos ?",
            statements: [
              { text: "Le Día de Muertos est le nom mexicain d'Halloween.", true: false, why: "C'est une fête différente : on y accueille le souvenir des défunts de la famille, sans chercher à faire peur." },
              { text: "Il se célèbre principalement le 1er et le 2 novembre.", true: true, why: "Le 1er novembre est souvent dédié aux enfants, le 2 aux adultes." },
              { text: "Les fleurs de cempasúchil sont orange.", true: true, why: "Leur couleur et leur parfum doivent guider les âmes jusqu'à l'ofrenda." },
              { text: "C'est une fête triste, où l'on doit rester silencieux.", true: false, why: "C'est une fête colorée, avec de la musique, de la nourriture et de l'humour." },
              { text: "La Catrina a été dessinée par José Guadalupe Posada.", true: true, why: "Ce graveur l'a créée au début du XXe siècle ; Diego Rivera l'a ensuite rendue célèbre." },
              { text: "On dit « la gente ponen flores ».", true: false, why: "« La gente » est un nom singulier : la gente pone flores." },
              { text: "L'UNESCO a inscrit cette fête au patrimoine culturel immatériel de l'humanité.", true: true, why: "Elle a été inscrite sur la liste en 2008." },
            ],
          },
          quiz: [
            { q: "Que désigne « la ofrenda » ?", options: ["un déguisement de squelette", "un défilé", "l'autel des défunts", "un cimetière"], answer: 2, why: "L'ofrenda est l'autel décoré où l'on dépose photos, bougies, fleurs et nourriture pour les défunts." },
            { q: "Que sont les « calaveras de azúcar » ?", options: ["des têtes de mort en sucre", "des bougies parfumées à la cannelle", "des fleurs orange", "des pains sucrés"], answer: 0, why: "« Calavera » signifie tête de mort et « azúcar » sucre." },
            { q: "Comment traduire « on célèbre la fête » ?", options: ["Celebran la fiesta yo.", "Se celebra la fiesta.", "La gente celebran la fiesta."], answer: 1, why: "La tournure « se » + verbe à la 3e personne correspond au « on » français." },
            { q: "Quel artiste a donné son nom à la Catrina et l'a rendue célèbre ?", options: ["Pablo Picasso", "Frida Kahlo", "Salvador Dalí", "Diego Rivera"], answer: 3, why: "Diego Rivera a nommé et popularisé la Catrina, dessinée à l'origine par José Guadalupe Posada." },
            { q: "À quoi servent les bougies de l'ofrenda ?", options: ["à faire peur aux enfants", "à éclairer le chemin des âmes", "à cuire le pan de muerto sur l'autel", "à chasser les visiteurs"], answer: 1, why: "Selon la tradition, les bougies et les fleurs guident les âmes des défunts jusqu'à leur famille." },
          ],
          trap: "Confondre le Día de Muertos avec Halloween : ce n'est pas une fête pour faire peur, mais une fête familiale du souvenir, joyeuse et colorée. En langue, attention à « la gente », qui est singulier en espagnol : on dit « la gente pone », pas « la gente ponen ».",
          method: "Pour retenir le vocabulaire, dessinez une ofrenda sur trois étages et légendez chaque objet en espagnol (las velas, las fotos, el pan de muerto...). Puis présentez-la oralement en une minute avec « En la ofrenda hay... » et « La gente pone... ».",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'cocina-mexicana',
          title: 'La cuisine mexicaine : commander au restaurant',
          minutes: 30,
          objectives: [
            "Nommer des plats, des ingrédients et des boissons de la cuisine mexicaine.",
            "Commander au restaurant avec les formules de politesse (para mí, quiero, quisiera, la cuenta).",
            "Conjuguer « querer » au présent et exprimer la faim, la soif et un avis sur un plat.",
            "Distinguer la tortilla mexicaine et la tortilla espagnole.",
          ],
          course: [
            {
              heading: "Le maïs, base de la cuisine mexicaine",
              paragraphs: [
                "La cuisine mexicaine repose sur le maïs (« el maíz »), cultivé au Mexique depuis des milliers d'années, sur les haricots (« los frijoles ») et sur les piments (« los chiles »). En 2010, l'UNESCO a inscrit la cuisine traditionnelle mexicaine sur la liste du patrimoine culturel immatériel de l'humanité.",
                "Avec la farine de maïs, on prépare des galettes fines : « las tortillas ». On les garnit pour faire « los tacos » (des tortillas pliées garnies de viande, de légumes ou de sauce), « las quesadillas » (des tortillas garnies de fromage fondu, « el queso ») ou « las enchiladas » (des tortillas roulées et nappées de sauce au piment). Attention : en Espagne, « una tortilla » désigne une omelette aux pommes de terre, la « tortilla española », qui n'a rien à voir.",
              ],
              box: { label: "Attention", text: "Au Mexique, la tortilla est une galette de maïs (ou de blé). En Espagne, la tortilla est une omelette aux pommes de terre (tortilla de patatas). Même mot, deux plats différents." },
            },
            {
              heading: "Plats, sauces et boissons",
              paragraphs: [
                "D'autres plats célèbres : « el guacamole » (une purée d'avocat, « el aguacate », avec de la tomate, de l'oignon et du citron vert), « los tamales » (une pâte de maïs cuite à la vapeur dans une feuille), « el pozole » (une soupe de maïs), et « el mole », une sauce épaisse à base de piments, d'épices et parfois de chocolat, dont la version de Puebla (« mole poblano ») est très connue.",
                "Pour boire, on commande souvent « un agua fresca » : « agua de jamaica » (à l'hibiscus) ou « agua de horchata » (au riz et à la cannelle). Pour donner son avis : « ¡Está muy rico! » (c'est très bon !), « Pica mucho » (ça pique beaucoup), « No pica » (ça ne pique pas). On demande prudemment : « ¿Pica? ».",
              ],
              box: { label: "Vocabulaire", text: "el maíz, la tortilla, los tacos, el queso, los frijoles, el chile, el aguacate, el pollo (le poulet), la carne (la viande), el arroz (le riz), el postre (le dessert), la bebida (la boisson). ¡Está rico! Pica mucho." },
            },
            {
              heading: "Le verbe « querer » et les besoins",
              paragraphs: [
                "Pour dire ce que l'on veut, on emploie « querer » (vouloir), qui diphtongue son e en ie, comme « empezar » : quiero, quieres, quiere, queremos, queréis, quieren. « Quiero unos tacos, por favor. » Pour être plus poli, on dit « Quisiera... » (je voudrais), une forme toute faite à retenir.",
                "Pour exprimer la faim et la soif, l'espagnol emploie « tener », comme le français emploie « avoir » : « Tengo hambre » (j'ai faim), « Tengo sed » (j'ai soif). Pour dire « j'ai très faim », on dit « tengo mucha hambre », car « hambre » est un nom féminin (de même : « tengo mucha sed »).",
              ],
              box: { label: "Conjugaison", text: "querer : quiero, quieres, quiere, queremos, queréis, quieren. Tengo hambre (j'ai faim), tengo sed (j'ai soif). Quisiera... (je voudrais) : forme polie." },
            },
            {
              heading: "Commander au restaurant",
              paragraphs: [
                "Au Mexique, le serveur s'appelle « el mesero » ou « la mesera » (en Espagne : « el camarero », « la camarera »). Il demande : « ¿Qué van a pedir? » ou « ¿Qué desean? » (que désirez-vous ?). On répond : « Para mí, unas enchiladas, por favor » (pour moi...), « Quiero un agua de jamaica ». Le serveur peut demander : « ¿Algo más? » (autre chose ?).",
                "À la fin du repas : « La cuenta, por favor » (l'addition, s'il vous plaît), « ¿Cuánto es? » (combien est-ce ?). Le serveur répond par exemple : « Son noventa pesos ». On n'oublie pas « por favor » et « gracias ». Avec un serveur, on emploie « usted » : « ¿Me trae la carta, por favor? » (vous m'apportez la carte, s'il vous plaît ?).",
              ],
              box: { label: "À retenir", text: "Una mesa para dos, por favor. La carta, por favor. Para mí... / Quiero... / Quisiera... ¿Algo más? La cuenta, por favor. ¿Cuánto es?" },
            },
          ],
          keyPoints: [
            "Base : el maíz, los frijoles, los chiles ; cuisine inscrite par l'UNESCO en 2010.",
            "tacos, quesadillas, enchiladas : à base de tortillas de maïs ; guacamole, mole, tamales.",
            "La tortilla mexicaine est une galette ; la tortilla española est une omelette.",
            "querer : quiero, quieres, quiere, queremos, queréis, quieren ; quisiera = je voudrais.",
            "Tengo hambre, tengo sed ; ¡Está rico! ; ¿Pica?",
            "Para mí..., ¿Algo más?, La cuenta, por favor, ¿Cuánto es?",
          ],
          example: {
            statement: "Vous êtes au restaurant à Mexico avec votre sœur. Commandez pour vous deux : pour vous des tacos au poulet, pour votre sœur une quesadilla, et deux eaux d'hibiscus. Demandez si les tacos piquent, puis demandez l'addition.",
            solution: [
              "On salue et on commande en employant « para mí » : « Buenas tardes. Para mí, unos tacos de pollo, por favor. »",
              "Pour la sœur, on utilise « para mi hermana » : « Y para mi hermana, una quesadilla. »",
              "Les boissons : « Y dos aguas de jamaica. » (« agua » est féminin, mais on dit « un agua » au singulier ; au pluriel, « dos aguas »).",
              "La question : « ¿Los tacos pican? » (pican au pluriel, car le sujet est « los tacos »).",
              "À la fin : « La cuenta, por favor. ¿Cuánto es? »",
              "Réponse complète : « Buenas tardes. Para mí, unos tacos de pollo, por favor, y para mi hermana, una quesadilla. Y dos aguas de jamaica. ¿Los tacos pican? [...] La cuenta, por favor. ¿Cuánto es? »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez « querer » au présent : a) yo ... ; b) tú ... ; c) mi padre ... ; d) nosotros ... ; e) ellas ...",
              hint: "Querer diphtongue e → ie à toutes les personnes sauf nosotros et vosotros.",
              solution: [
                "a) yo quiero.",
                "b) tú quieres.",
                "c) mi padre quiere.",
                "d) nosotros queremos (pas de diphtongue).",
                "e) ellas quieren.",
              ],
            },
            {
              level: 2,
              statement: "Remettez dans l'ordre ce dialogue au restaurant : a) Son ochenta pesos. b) Buenas tardes, ¿qué desean? c) Para mí, unas enchiladas y un agua de horchata. d) ¿Algo más? e) No, gracias. La cuenta, por favor. ¿Cuánto es?",
              hint: "Le serveur salue en premier ; la question du prix vient juste avant la réponse sur le montant.",
              solution: [
                "Le serveur accueille : b) « Buenas tardes, ¿qué desean? »",
                "Le client commande : c) « Para mí, unas enchiladas y un agua de horchata. »",
                "Le serveur demande s'il veut autre chose : d) « ¿Algo más? »",
                "Le client refuse et demande l'addition : e) « No, gracias. La cuenta, por favor. ¿Cuánto es? »",
                "Le serveur donne le prix : a) « Son ochenta pesos. »",
                "Ordre : b, c, d, e, a.",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici un extrait de carte (données fictives). Tacos de pollo : 45 pesos. Quesadilla de queso : 35 pesos. Guacamole : 30 pesos. Agua de jamaica : 20 pesos. a) Vous commandez des tacos, un guacamole et une eau d'hibiscus : combien payez-vous ? Écrivez la réponse en lettres, en espagnol. b) Vous avez 100 pesos : combien vous reste-t-il ? c) Rédigez votre commande en espagnol (trois répliques au moins), avec « quisiera » ou « para mí ».",
              hint: "Additionnez les trois prix, puis soustrayez le total de 100. Écrivez les nombres avec les dizaines et « y ».",
              solution: [
                "a) 45 + 30 + 20 = 95 pesos. En lettres : « noventa y cinco pesos ». Vérification : 45 + 30 = 75, puis 75 + 20 = 95.",
                "b) 100 - 95 = 5. Il vous reste cinco pesos.",
                "c) Exemple : « Buenas tardes. Quisiera unos tacos de pollo y un guacamole, por favor. » / « ¿Y para tomar? » / « Un agua de jamaica. » / [...] / « La cuenta, por favor. » / « Son noventa y cinco pesos. »",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les phrases d'un repas au restaurant.",
            items: [
              "Buenas tardes, una mesa para dos, por favor.",
              "La carta, por favor.",
              "Para mí, unas enchiladas y un agua de horchata.",
              "¡Mmm, está muy rico!",
              "La cuenta, por favor.",
              "Gracias, ¡hasta luego!",
            ],
          },
          quiz: [
            { q: "Au Mexique, qu'est-ce qu'une tortilla ?", options: ["une omelette aux pommes de terre", "une galette de maïs", "une soupe", "un dessert"], answer: 1, why: "Au Mexique, la tortilla est une galette de maïs ; en Espagne, c'est une omelette aux pommes de terre." },
            { q: "Comment dit-on « l'addition, s'il vous plaît » ?", options: ["La carta, por favor.", "La mesa, por favor.", "La cuenta, por favor.", "El mesero, por favor."], answer: 2, why: "« La cuenta » est l'addition ; « la carta » est le menu." },
            { q: "Comment dit-on « j'ai faim » ?", options: ["Tengo hambre.", "Soy hambre.", "Estoy hambre.", "Hago hambre."], answer: 0, why: "Comme en français, on emploie « avoir » : tener hambre." },
            { q: "Quelle est la forme de « querer » avec « nosotros » ?", options: ["quieremos", "queremos", "quieren", "queramos"], answer: 1, why: "Avec nosotros, pas de diphtongue : queremos." },
            { q: "Que signifie « ¡Pica mucho! » ?", options: ["C'est très bon !", "C'est beaucoup trop cher !", "J'ai très soif !", "Ça pique beaucoup !"], answer: 3, why: "Picar se dit d'un plat épicé : pica mucho, ça pique beaucoup." },
          ],
          trap: "Croire que la tortilla mexicaine et la tortilla espagnole sont le même plat : au Mexique, c'est une galette de maïs ; en Espagne, une omelette aux pommes de terre. En langue, attention à « querer » : la diphtongue disparaît avec nosotros (queremos, et non « quieremos »).",
          method: "Jouez la scène du restaurant à deux, à voix haute : l'un est le mesero, l'autre le client, puis échangez les rôles. Préparez avant une petite carte avec des prix inventés en pesos, pour vous entraîner aussi aux nombres.",
        },
      ],
    },
  ],
}
