import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'espagnol-1re',
  chapters: [
    {
      id: 'nuancer-argumenter',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'presente-subjuntivo',
          title: 'Le présent du subjonctif : souhaiter, conseiller, douter',
          minutes: 35,
          objectives: [
            "Conjuguer au présent du subjonctif les verbes réguliers, les verbes à diphtongue ou à affaiblissement et les principaux irréguliers.",
            "Employer le subjonctif après les verbes de souhait, de conseil, de demande et de sentiment.",
            "Distinguer l'indicatif et le subjonctif après les verbes d'opinion affirmatifs ou négatifs et après les expressions de doute.",
            "Exprimer un souhait avec « ojalá » et une action future avec « cuando » suivi du subjonctif.",
          ],
          course: [
            {
              heading: "Le mode du non-certain : former le présent du subjonctif",
              paragraphs: [
                "Le subjonctif (el subjuntivo) est le mode de ce qui n'est pas présenté comme un fait certain : un souhait, un conseil, une demande, un sentiment, un doute, une action qui n'a pas encore eu lieu. L'indicatif, au contraire, affirme une réalité. Comparez « Sé que vienes » (je sais que tu viens : un fait) et « Quiero que vengas » (je veux que tu viennes : un souhait). Le présent du subjonctif s'emploie surtout dans une proposition subordonnée introduite par « que », quand le verbe principal est au présent, au futur ou à l'impératif.",
                "Pour le former, partez de la première personne du singulier du présent de l'indicatif, retirez le « -o » final et ajoutez les terminaisons du subjonctif. Les verbes en -ar prennent la voyelle « e », les verbes en -er et en -ir prennent la voyelle « a » : c'est l'échange des voyelles. Hablar (hablo) donne hable, hables, hable, hablemos, habléis, hablen. Comer (como) donne coma, comas, coma, comamos, comáis, coman. Vivir (vivo) donne viva, vivas, viva, vivamos, viváis, vivan.",
              ],
              box: { label: "Règle", text: "Verbes en -ar → -e, -es, -e, -emos, -éis, -en (hable). Verbes en -er et -ir → -a, -as, -a, -amos, -áis, -an (coma, viva). Point de départ : la forme « yo » du présent de l'indicatif sans le « -o » (tengo → tenga, hago → haga)." },
            },
            {
              heading: "Les irrégularités : radical, orthographe et six verbes à part",
              paragraphs: [
                "Grâce à la règle de la forme « yo », beaucoup d'irrégularités se transmettent à toute la conjugaison : tener (tengo) → tenga, tengas, tenga, tengamos, tengáis, tengan ; hacer (hago) → haga ; decir (digo) → diga ; poner (pongo) → ponga ; salir (salgo) → salga ; venir (vengo) → venga ; traer (traigo) → traiga ; conocer (conozco) → conozca ; ver (veo) → vea.",
                "Les verbes à diphtongue gardent la diphtongue sous l'accent tonique, donc partout sauf à « nosotros » et « vosotros » : pensar → piense, pienses, piense, pensemos, penséis, piensen ; poder → pueda, podamos ; volver → vuelva, volvamos. Les verbes en -ir à affaiblissement (e → i) le gardent à toutes les personnes : pedir → pida, pidamos ; seguir → siga ; repetir → repita. Sentir et dormir combinent les deux : sienta, sintamos ; duerma, durmamos.",
                "L'orthographe s'adapte pour conserver le son du radical : buscar → busque, llegar → llegue, empezar → empiece, coger → coja. Enfin, six verbes ne suivent pas la règle de la forme « yo » et s'apprennent par cœur : ser → sea, estar → esté, ir → vaya, haber → haya, saber → sepa, dar → dé.",
              ],
              box: { label: "Repère", text: "Les six irréguliers : ser (sea), estar (esté, estés, esté, estemos, estéis, estén), ir (vaya), haber (haya), saber (sepa), dar (dé, des, dé, demos, deis, den). L'accent écrit de « dé » le distingue de la préposition « de »." },
            },
            {
              heading: "Souhaiter, conseiller, demander, ressentir",
              paragraphs: [
                "On emploie le subjonctif après un verbe de volonté ou de souhait (querer que, desear que, preferir que, esperar que), de conseil ou de demande (aconsejar que, recomendar que, pedir que, prohibir que, permitir que) et de sentiment (me alegra que, me molesta que, me da miedo que, me sorprende que). Exemples : « Quiero que me escuches », « Te aconsejo que estudies cada día », « Me alegra que estés aquí ».",
                "Le subjonctif n'apparaît que si les deux verbes ont des sujets différents. Si le sujet est le même, on emploie l'infinitif, comme en français : « Quiero ir a Bogotá » (je veux aller), mais « Quiero que vayas a Bogotá » (je veux que tu ailles). Attention à « esperar que » : le français dit « j'espère que tu vas bien » à l'indicatif, l'espagnol exige le subjonctif : « Espero que estés bien ».",
                "Pour un souhait isolé, on utilise « ojalá » (mot d'origine arabe, « si Dieu le veut ») suivi du subjonctif : « ¡Ojalá apruebe el examen! » (pourvu que je réussisse l'examen). Le verbe « decir » change de sens selon le mode : « Mi madre dice que viene » (elle annonce qu'elle vient : information, indicatif) ; « Mi madre me dice que venga » (elle me demande de venir : ordre, subjonctif).",
              ],
              box: { label: "Règle", text: "Verbe de souhait, de conseil, de demande ou de sentiment + que + subjonctif, si les sujets sont différents : « Te pido que me ayudes ». Même sujet : infinitif : « Quiero ayudarte ». Toujours : espero que + subjonctif, ojalá + subjonctif." },
            },
            {
              heading: "Douter et parler d'une action à venir",
              paragraphs: [
                "Les verbes d'opinion à la forme affirmative (creer que, pensar que, parecer que) sont suivis de l'indicatif : « Creo que tienes razón ». À la forme négative, ils sont suivis du subjonctif, car l'opinion devient un doute : « No creo que tengas razón ». Les expressions de doute et de possibilité appellent aussi le subjonctif : dudar que, es posible que, es probable que, puede que : « Dudo que llueva mañana ».",
                "Après « cuando » et les autres conjonctions de temps (en cuanto, hasta que, mientras), l'espagnol emploie le présent du subjonctif pour une action future, là où le français met un futur : « Cuando sea mayor, seré ingeniera » (quand je serai grande). Pour un fait habituel, on garde l'indicatif : « Cuando llueve, me quedo en casa ». Enfin, « para que » (pour que) et « antes de que » (avant que) sont toujours suivis du subjonctif : « Te lo explico para que lo entiendas ».",
              ],
              box: { label: "À retenir", text: "Creo que + indicatif ; no creo que + subjonctif. Cuando + subjonctif pour une action future (jamais « cuando seré »). Para que, antes de que, ojalá, espero que : toujours le subjonctif." },
            },
          ],
          keyPoints: [
            "Le subjonctif présente une action comme souhaitée, conseillée, ressentie ou incertaine ; l'indicatif présente un fait.",
            "Formation : forme « yo » du présent sans « -o » + échange des voyelles (-ar → e ; -er, -ir → a) : hablo → hable, tengo → tenga.",
            "Diphtongue partout sauf à nosotros et vosotros (piense, pensemos) ; e → i à toutes les personnes pour pedir (pida, pidamos).",
            "Six irréguliers à connaître : sea, esté, vaya, haya, sepa, dé.",
            "Souhait, conseil, demande, sentiment + que + subjonctif si les sujets diffèrent ; même sujet : infinitif.",
            "No creo que, dudo que, es posible que, ojalá, espero que, para que + subjonctif ; cuando + subjonctif pour une action future.",
          ],
          example: {
            statement: "Traduisez en espagnol en justifiant le mode de chaque verbe : a) J'espère que tu vas bien. b) Mes parents me conseillent de faire mes devoirs. c) Je ne crois pas que ce soit facile. d) Quand j'aurai dix-huit ans, je voyagerai en Amérique latine. e) Pourvu qu'il fasse beau demain !",
            solution: [
              "a) « Esperar que » exige le subjonctif, contrairement au français ; « aller bien » se dit « estar bien » : « Espero que estés bien ».",
              "b) « Aconsejar » est un verbe de conseil et les sujets diffèrent (mes parents, moi) : subjonctif de hacer (hago → haga) : « Mis padres me aconsejan que haga los deberes ».",
              "c) « No creo que » : opinion niée, donc subjonctif ; ser → sea : « No creo que sea fácil ».",
              "d) Action future après « cuando » : présent du subjonctif dans la subordonnée, futur dans la principale ; tener (tengo) → tenga : « Cuando tenga dieciocho años, viajaré a América Latina ».",
              "e) Souhait isolé : « ojalá » + subjonctif ; hacer → haga : « ¡Ojalá haga buen tiempo mañana! ».",
              "Réponse : a) Espero que estés bien. b) Mis padres me aconsejan que haga los deberes. c) No creo que sea fácil. d) Cuando tenga dieciocho años, viajaré a América Latina. e) ¡Ojalá haga buen tiempo mañana!",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au présent du subjonctif : a) hablar (tú) b) tener (nosotros) c) pensar (ellos) d) pedir (nosotros) e) ser (yo) f) ir (vosotros) g) buscar (usted) h) dormir (nosotros).",
              hint: "Partez de la forme « yo » du présent de l'indicatif, sauf pour ser et ir, qui font partie des six irréguliers. Pour les diphtongues, regardez où tombe l'accent tonique.",
              solution: [
                "a) hablo → hable : « hables ». b) tengo → tenga : « tengamos ».",
                "c) pienso → piense ; l'accent tombe sur le radical à « ellos », la diphtongue reste : « piensen ».",
                "d) pido → pida ; les verbes en -ir à affaiblissement gardent le « i » partout : « pidamos ».",
                "e) Irrégulier : « sea ». f) Irrégulier : vaya → « vayáis ».",
                "g) busco → busque (le « c » devient « qu » devant « e » pour garder le son [k]) : « busque ».",
                "h) duermo → duerma ; à « nosotros », pas de diphtongue mais o → u : « durmamos ».",
                "Réponses : a) hables b) tengamos c) piensen d) pidamos e) sea f) vayáis g) busque h) durmamos.",
              ],
            },
            {
              level: 2,
              statement: "Indicatif ou subjonctif ? Conjuguez le verbe entre parenthèses au présent : a) Creo que el proyecto (ser) útil. b) No creo que el proyecto (ser) útil. c) Te pido que me (ayudar, tú). d) Sé que (tener, tú) razón. e) Cuando (llegar, yo) a casa, te llamaré. f) Es importante que todos (participar). g) Mi madre dice que (venir, ella) mañana. h) Mi madre me dice que (venir, yo) temprano.",
              hint: "Demandez-vous chaque fois si la principale affirme un fait (indicatif) ou exprime un souhait, un ordre, un doute, un jugement ou une action future (subjonctif).",
              solution: [
                "a) Opinion affirmative : indicatif, « es ». b) Opinion niée : subjonctif, « sea ».",
                "c) Demande, sujets différents : subjonctif, « ayudes ». d) « Saber que » affirme un fait : indicatif, « tienes ».",
                "e) Action future après « cuando » : subjonctif, « llegue ». f) Jugement impersonnel : subjonctif, « participen ».",
                "g) « Decir » rapporte une information : indicatif, « viene ». h) « Decir » exprime un ordre : subjonctif, « venga ».",
                "Réponses : a) es b) sea c) ayudes d) tienes e) llegue f) participen g) viene h) venga.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Mateo, votre correspondant de Lima, hésite à venir passer un trimestre dans votre lycée : il a peur de ne pas comprendre le français et de se sentir seul. Répondez-lui en espagnol (80 à 100 mots) : exprimez votre joie, rassurez-le, donnez-lui au moins deux conseils et formulez un souhait. Employez au moins six subjonctifs, avec au moins quatre déclencheurs différents (sentiment, doute, conseil, cuando, ojalá, espero que...).",
              hint: "Prévoyez une phrase par fonction : la joie (me alegra que), le doute qui rassure (no creo que), deux conseils (te aconsejo que, es importante que), l'avenir (cuando), le souhait (ojalá, espero que).",
              solution: [
                "Étape 1, la structure : salutation, réaction (joie et compréhension), réassurance, conseils, projet commun, souhait, formule finale.",
                "Étape 2, les déclencheurs choisis : me alegra que, entiendo que, no creo que, te aconsejo que, cuando, es importante que, quiero que, ojalá, espero que.",
                "Exemple de production : « ¡Hola, Mateo! Me alegra mucho que pienses en hacer un intercambio en Francia. Entiendo que tengas miedo, pero no creo que sea tan difícil como imaginas. Te aconsejo que hables con tus profesores y que prepares bien tu viaje. Cuando llegues a Lyon, mi familia te esperará en la estación. Es importante que traigas ropa de abrigo, porque en invierno hace frío. Quiero que conozcas a mis amigos y que descubras la ciudad. ¡Ojalá puedas venir en enero! Espero que me contestes pronto. Un abrazo, Clara »",
                "Vérification : environ 85 mots ; onze subjonctifs (pienses, tengas, sea, hables, prepares, llegues, traigas, conozcas, descubras, puedas, contestes) après huit déclencheurs différents ; le futur « esperará » est bien dans la principale, et non après « cuando ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos réflexes sur le subjonctif.",
            statements: [
              { text: "« Espero que » est suivi de l'indicatif, comme « j'espère que » en français.", true: false, why: "En espagnol, « esperar que » exige le subjonctif : « Espero que estés bien »." },
              { text: "« Cuando sea mayor » signifie « quand je serai grand ».", true: true, why: "Après « cuando », une action future se dit au présent du subjonctif." },
              { text: "Au subjonctif, « pensar » donne « piensemos » à la personne « nosotros ».", true: false, why: "La diphtongue disparaît hors de l'accent tonique : « pensemos »." },
              { text: "Dans « Quiero que vengas », les deux verbes ont le même sujet.", true: false, why: "Les sujets diffèrent (yo, tú) : c'est pourquoi on emploie « que » + subjonctif. Avec le même sujet : « Quiero venir »." },
              { text: "« No creo que sea verdad » est une phrase correcte.", true: true, why: "Un verbe d'opinion à la forme négative est suivi du subjonctif." },
              { text: "Le présent du subjonctif de « ir » est « vaya ».", true: true, why: "« Ir » fait partie des six irréguliers : vaya, vayas, vaya, vayamos, vayáis, vayan." },
              { text: "« Mi padre dice que llegue tarde » annonce que le père arrivera tard.", true: false, why: "Pour une information, on emploie l'indicatif : « dice que llega tarde ». Le subjonctif transforme la phrase en ordre." },
            ],
          },
          quiz: [
            { q: "Quelle est la forme de « tener » au présent du subjonctif, 1re personne du pluriel ?", options: ["tenemos", "tengamos", "tenamos", "tengemos"], answer: 1, why: "On part de « tengo » : tenga, tengas, tenga, tengamos, tengáis, tengan." },
            { q: "Complétez : « Cuando ... a Madrid, te llamaré. »", options: ["llegue", "llegaré", "llego", "llegara"], answer: 0, why: "Pour une action future après « cuando », on emploie le présent du subjonctif, jamais le futur." },
            { q: "Quelle phrase est correcte ?", options: ["Creo que tengas razón.", "No creo que tienes razón.", "Dudo que tienes razón.", "No creo que tengas razón."], answer: 3, why: "Opinion niée et doute appellent le subjonctif ; « creo que » à la forme affirmative appelle l'indicatif." },
            { q: "Complétez : « Te aconsejo que ... más agua. » (beber)", options: ["bebes", "bebas", "beba", "bebe"], answer: 1, why: "Conseil adressé à « tú » (te) avec des sujets différents : subjonctif, 2e personne : « bebas »." },
            { q: "Quelle est la forme de « dar » au présent du subjonctif, 3e personne du singulier ?", options: ["dé", "da", "de", "dea"], answer: 0, why: "« Dar » est irrégulier : dé, des, dé... L'accent distingue « dé » de la préposition « de »." },
          ],
          trap: "Calquer le français : « espero que estás bien » au lieu de « espero que estés bien », et « cuando seré mayor » au lieu de « cuando sea mayor ». Après « esperar que » et après « cuando » pour une action future, l'espagnol exige le subjonctif.",
          method: "Classez les déclencheurs du subjonctif sur une fiche en trois colonnes (souhait et conseil, sentiment, doute et futur) et ajoutez en rouge les deux pièges, « espero que » et « cuando ». Pour conjuguer, dites d'abord la forme « yo » du présent, puis échangez la voyelle.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'imperativo-defensa',
          title: 'L\'impératif et la défense : conseiller et interdire',
          minutes: 30,
          objectives: [
            "Former l'impératif affirmatif aux personnes tú, vosotros, usted, ustedes et nosotros, y compris les huit irréguliers à « tú ».",
            "Former la défense (impératif négatif) à partir du présent du subjonctif.",
            "Placer correctement les pronoms (soudés au verbe à l'affirmatif, devant le verbe au négatif) et l'accent écrit.",
            "Conseiller, recommander et interdire en variant les structures (deberías, te aconsejo que, hay que, prohibido).",
          ],
          course: [
            {
              heading: "Donner un ordre ou un conseil : l'impératif affirmatif",
              paragraphs: [
                "L'impératif sert à donner un ordre, une consigne, un conseil ou une invitation. Il existe à cinq personnes : tú, vosotros (en Espagne), usted, ustedes et nosotros (« faisons »). À la personne « tú », on emploie la forme de la 3e personne du singulier du présent de l'indicatif : hablar → habla, comer → come, escribir → escribe. Les diphtongues et l'affaiblissement se conservent : pensar → piensa, volver → vuelve, pedir → pide.",
                "À la personne « vosotros », on remplace le « -r » de l'infinitif par « -d » : hablad, comed, escribid, y compris pour les verbes irréguliers (haced, id, decid). Aux personnes « usted », « ustedes » et « nosotros », on emprunte les formes du présent du subjonctif : hable, hablen, hablemos ; coma, coman, comamos. En Amérique latine, où « vosotros » ne s'emploie pas, « ustedes » sert pour tous les ordres au pluriel : « Chicos, siéntense ». À la personne « nosotros », le verbe « ir » emploie en général « vamos » : « ¡Vamos a la playa! ».",
              ],
              box: { label: "Règle", text: "Tú : 3e personne du singulier du présent (habla, come). Vosotros : infinitif avec « -d » (hablad, comed). Usted, ustedes, nosotros : présent du subjonctif (hable, hablen, hablemos)." },
            },
            {
              heading: "Huit impératifs irréguliers à la personne « tú »",
              paragraphs: [
                "Huit verbes très fréquents ont un impératif court et irrégulier à la personne « tú » : decir → di, hacer → haz, ir → ve, poner → pon, salir → sal, ser → sé, tener → ten, venir → ven. Ces formes se retrouvent dans les verbes composés : mantener → mantén, obtener → obtén, proponer → propón, deshacer → deshaz. L'accent écrit de « sé » (sois) le distingue du pronom « se ».",
                "Aux autres personnes, ces verbes suivent la règle générale : vosotros (decid, haced, id, poned, salid, sed, tened, venid) et formes du subjonctif pour usted, ustedes et nosotros (diga, haga, vaya, ponga, salga, sea, tenga, venga). Pour les mémoriser, récitez-les par paires de sens : « di y haz » (dire et faire), « ve y ven » (va et viens), « pon y ten » (mets et tiens), « sal y sé » (sors et sois).",
              ],
              box: { label: "Repère", text: "di (decir) · haz (hacer) · ve (ir) · pon (poner) · sal (salir) · sé (ser) · ten (tener) · ven (venir)." },
            },
            {
              heading: "La défense : interdire avec « no » + subjonctif",
              paragraphs: [
                "La défense (l'impératif négatif) se forme, à toutes les personnes, avec « no » suivi du présent du subjonctif. Aucune forme propre de l'impératif ne se place après « no » : « Habla » devient « No hables », « Comed » devient « No comáis », « Ven » devient « No vengas », « Di » devient « No digas », « Haz » devient « No hagas », « Ve » devient « No vayas ». Aux personnes « usted », « ustedes » et « nosotros », il suffit d'ajouter « no » : « No hable », « No coman », « No salgamos ».",
                "La défense sert à interdire, mais aussi à rassurer ou à mettre en garde : « No te preocupes » (ne t'inquiète pas), « No te olvides de la crema solar », « No tengáis miedo ». On peut la renforcer avec « nunca » ou « jamás » : « No digas nunca eso » ou, avec l'adverbe en tête, « Nunca digas eso ».",
              ],
              box: { label: "Règle", text: "Défense = no + présent du subjonctif, à toutes les personnes : no hables, no habléis, no hable, no hablen, no hablemos. Jamais « no habla » ni « no hablad »." },
            },
            {
              heading: "La place des pronoms et l'accent écrit",
              paragraphs: [
                "À l'impératif affirmatif, les pronoms compléments et réfléchis se soudent à la fin du verbe (enclise), le complément indirect avant le direct : « Dime », « Dímelo », « Levántate », « Cómpralo », « Escríbanos ». Pour conserver l'accent tonique du verbe, on ajoute souvent un accent écrit : « levanta » + « te » devient « levántate ». À « nosotros », le « -s » final tombe devant « nos » : « levantémonos », « vámonos ». À « vosotros », le « -d » tombe devant « os » : « levantaos », « sentaos » (exception : « idos »).",
                "À la défense, les pronoms se placent avant le verbe, après « no » : « No te levantes », « No me lo digas », « No se preocupe », « No os sentéis ». Comparez « Cuéntamelo » (raconte-le-moi) et « No me lo cuentes » (ne me le raconte pas). Quand « le » ou « les » précède « lo », « la », « los » ou « las », il devient « se » : « Dáselo a tu madre », « No se lo des ».",
              ],
              box: { label: "À retenir", text: "Affirmatif : pronoms après le verbe et soudés (dímelo, siéntese). Défense : pronoms avant le verbe (no me lo digas, no se siente). Nosotros + nos : sentémonos ; vosotros + os : sentaos." },
            },
            {
              heading: "Conseiller et interdire autrement",
              paragraphs: [
                "L'impératif peut sembler brusque ; l'espagnol offre d'autres tournures pour conseiller : « Deberías dormir más » (tu devrais), « Te aconsejo que » ou « Te recomiendo que » suivi du subjonctif, « Es mejor que » suivi du subjonctif. Pour une obligation générale, on emploie « hay que » + infinitif (« Hay que reciclar ») ; pour une obligation personnelle, « tener que » + infinitif (« Tienes que descansar »).",
                "Sur les panneaux et dans les règlements, l'interdiction est souvent impersonnelle : « Prohibido fumar », « Se prohíbe el uso del móvil », « Está prohibido bañarse », « Prohibida la entrada a menores », « No pisar el césped » (infinitif précédé de « no »). Dans un mode d'emploi ou une recette, on trouve aussi l'infinitif : « Agitar antes de usar ».",
              ],
              box: { label: "Vocabulaire", text: "Deberías + infinitif (conseil) · Te aconsejo que + subjonctif · Es mejor que + subjonctif · Hay que + infinitif (obligation générale) · Tener que + infinitif (obligation personnelle) · Prohibido, se prohíbe (interdiction)." },
            },
          ],
          keyPoints: [
            "Impératif affirmatif : tú = 3e personne du présent (habla) ; vosotros = infinitif en « -d » (hablad) ; usted, ustedes, nosotros = subjonctif.",
            "Huit irréguliers à tú : di, haz, ve, pon, sal, sé, ten, ven.",
            "Défense = no + présent du subjonctif à toutes les personnes : no digas, no hagáis, no vaya.",
            "Pronoms soudés après le verbe à l'affirmatif (dímelo, levántate), placés avant le verbe à la défense (no me lo digas).",
            "Sentémonos (le « -s » tombe), sentaos (le « -d » tombe) ; le / les + lo devient se lo.",
            "Autres façons de conseiller ou d'interdire : deberías, te aconsejo que + subjonctif, hay que, prohibido + infinitif.",
          ],
          example: {
            statement: "Mettez à la défense (forme négative) les ordres suivants : a) Sal ahora. b) Hazlo. c) Siéntense aquí. d) Decídselo. e) Vámonos.",
            solution: [
              "a) « Sal » est l'impératif de salir à tú ; la défense prend le subjonctif (salgo → salga) : « No salgas ahora ».",
              "b) « Hazlo » : hacer à tú avec le pronom « lo » ; à la défense, le pronom passe devant : « No lo hagas ».",
              "c) « Siéntense » : sentarse à ustedes ; on garde le subjonctif et le pronom passe devant : « No se sienten aquí ».",
              "d) « Decídselo » : decir à vosotros + se + lo ; subjonctif à vosotros (digáis), pronoms devant : « No se lo digáis ».",
              "e) « Vámonos » : irse à nosotros ; subjonctif (vayamos) et pronom devant : « No nos vayamos ».",
              "Réponse : a) No salgas ahora. b) No lo hagas. c) No se sienten aquí. d) No se lo digáis. e) No nos vayamos.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez l'impératif affirmatif à la personne « tú », puis la défense correspondante : a) tener paciencia b) salir de casa c) hacer los deberes d) venir conmigo e) decir la verdad f) ser así g) ir al médico h) poner la mesa. (Exercice de forme : le sens de chaque consigne importe peu.)",
              hint: "Les huit verbes sont les irréguliers de la leçon. Pour la défense, partez de la forme « yo » du présent (tengo, salgo...) ou des irréguliers du subjonctif (sea, vaya).",
              solution: [
                "a) Ten paciencia / No tengas paciencia. b) Sal de casa / No salgas de casa.",
                "c) Haz los deberes / No hagas los deberes. d) Ven conmigo / No vengas conmigo.",
                "e) Di la verdad / No digas la verdad. f) Sé así / No seas así (ser → sea, seas : irrégulier du subjonctif).",
                "g) Ve al médico / No vayas al médico. h) Pon la mesa / No pongas la mesa.",
                "Réponses : ten, sal, haz, ven, di, sé, ve, pon ; no tengas, no salgas, no hagas, no vengas, no digas, no seas, no vayas, no pongas.",
              ],
            },
            {
              level: 2,
              statement: "Donnez l'impératif affirmatif puis la défense, en plaçant correctement les pronoms : a) levantarse temprano (tú) b) decírselo (usted) c) sentarse (vosotros) d) irse (nosotros) e) comprarlo (ustedes).",
              hint: "À l'affirmatif, soudez les pronoms et vérifiez l'accent écrit ; à la défense, prenez le subjonctif et placez les pronoms entre « no » et le verbe.",
              solution: [
                "a) Levanta + te → « Levántate temprano » (accent pour garder l'accent tonique sur « van ») ; défense : « No te levantes temprano ».",
                "b) Diga + se + lo → « Dígaselo » ; défense : « No se lo diga ».",
                "c) Sentad + os : le « -d » tombe → « Sentaos » ; défense : « No os sentéis ».",
                "d) Vamos + nos : le « -s » tombe → « Vámonos » ; défense : « No nos vayamos ».",
                "e) Compren + lo → « Cómprenlo » ; défense : « No lo compren ».",
                "Réponses : Levántate / No te levantes ; Dígaselo / No se lo diga ; Sentaos / No os sentéis ; Vámonos / No nos vayamos ; Cómprenlo / No lo compren.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un camarade part pour la première fois à Cusco, au Pérou, ville située à environ 3400 mètres d'altitude. Rédigez-lui en espagnol un message de conseils (80 à 100 mots). Employez au moins trois impératifs affirmatifs dont un irrégulier, trois défenses, un pronom soudé au verbe et deux autres façons de conseiller (deberías, te aconsejo que, hay que...).",
              hint: "Pensez aux effets de l'altitude (fatigue, maux de tête, soleil fort, nuits froides) et alternez ce qu'il faut faire et ce qu'il faut éviter.",
              solution: [
                "Étape 1, les idées : se reposer le premier jour, boire beaucoup d'eau, ne pas courir, se protéger du soleil, prévoir des vêtements chauds, visiter tôt.",
                "Étape 2, les formes : impératifs (descansa, bebe, ponte, mándame), défenses (no corras, no tomes, no te asustes, no te olvides), autres conseils (deberías, te aconsejo que + subjonctif).",
                "Exemple de production : « ¡Hola, Lucas! Como vas a Cusco por primera vez, te doy algunos consejos. Cusco está a unos 3400 metros de altitud, así que el primer día descansa y no corras. Bebe mucha agua y no tomes alcohol. Si te duele la cabeza, no te asustes: es el mal de altura, que allí llaman soroche. Deberías probar el mate de coca, que se ofrece a menudo a los viajeros. Ponte crema solar, porque el sol es muy fuerte en altura, y no te olvides de una chaqueta: por la noche hace frío. Te aconsejo que visites la ciudad despacio. ¡Y mándame muchas fotos! Un abrazo. »",
                "Vérification : environ 100 mots ; impératifs affirmatifs : descansa, bebe, ponte (irrégulier, avec pronom soudé), mándame (pronom soudé et accent) ; défenses : no corras, no tomes, no te asustes, no te olvides ; autres conseils : deberías probar, te aconsejo que visites.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque ordre à sa défense.",
            pairs: [
              { left: "Dímelo.", right: "No me lo digas." },
              { left: "Siéntate.", right: "No te sientes." },
              { left: "Hazlo.", right: "No lo hagas." },
              { left: "Vete.", right: "No te vayas." },
              { left: "Levantaos.", right: "No os levantéis." },
              { left: "Póngaselo.", right: "No se lo ponga." },
            ],
          },
          quiz: [
            { q: "Quel est l'impératif de « hacer » à la personne « tú » ?", options: ["hace", "haz", "haga", "hazte"], answer: 1, why: "« Hacer » fait partie des huit irréguliers : « haz »." },
            { q: "Quelle est la défense de « Ven aquí » (tú) ?", options: ["No ven aquí.", "No vienes aquí.", "No vengas aquí.", "No venga aquí."], answer: 2, why: "La défense prend le présent du subjonctif : vengo → venga, 2e personne « vengas ». « No venga » correspond à « usted »." },
            { q: "Comment dit-on « asseyons-nous » ?", options: ["Sentémonos.", "Sentemosnos.", "Nos sentemos.", "Sentámonos."], answer: 0, why: "Devant « nos », le « -s » de « sentemos » tombe, et l'accent écrit marque la syllabe tonique." },
            { q: "Dans « No se lo digas », où sont placés les pronoms ?", options: ["Au choix, avant ou après le verbe.", "Après le verbe, soudés à lui, comme à l'affirmatif.", "Avant le verbe, car c'est une défense."], answer: 2, why: "À la défense, les pronoms se placent entre « no » et le verbe." },
            { q: "Sur un panneau, que signifie « Prohibido pisar el césped » ?", options: ["Il est obligatoire d'arroser la pelouse chaque jour.", "La pelouse est réservée aux habitants du quartier.", "Ne coupez pas la pelouse.", "Il est interdit de marcher sur la pelouse."], answer: 3, why: "« Prohibido » + infinitif exprime une interdiction impersonnelle ; « pisar » signifie marcher sur, fouler." },
          ],
          trap: "Employer la forme de l'impératif après « no » : « no habla », « no di », « no hazlo » au lieu de « no hables », « no digas », « no lo hagas ». La défense se forme toujours avec le présent du subjonctif, et les pronoms passent devant le verbe.",
          method: "Pour chaque ordre, posez-vous deux questions : affirmatif ou négatif ? quelle personne ? Affirmatif à tú ou vosotros : forme propre de l'impératif ; dans tous les autres cas (usted, ustedes, nosotros et toute défense) : subjonctif. Avec des pronoms soudés, comptez les syllabes pour placer l'accent écrit.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'opinar-argumentar',
          title: 'Donner son opinion et argumenter',
          minutes: 30,
          objectives: [
            "Exprimer une opinion avec des tournures variées et choisir le mode (indicatif ou subjonctif) qui convient.",
            "Exprimer l'accord, le désaccord et la nuance dans un échange.",
            "Organiser une argumentation à l'aide de connecteurs logiques (addition, cause, conséquence, opposition, concession, conclusion).",
            "Rédiger un paragraphe argumenté de niveau B1, avec une ouverture vers le niveau B2.",
          ],
          course: [
            {
              heading: "Donner son opinion : les tournures et le mode",
              paragraphs: [
                "Pour exprimer une opinion, variez les tournures : « Creo que », « Pienso que », « Opino que », « Considero que », « Me parece que », « Estoy convencido de que », toutes suivies de l'indicatif : « Creo que las redes sociales son útiles ». Vous pouvez aussi placer une locution en tête de phrase : « En mi opinión », « A mi juicio », « Desde mi punto de vista », « Para mí », « A mi parecer » : « Desde mi punto de vista, el deporte es fundamental ».",
                "À la forme négative, ces verbes sont suivis du subjonctif, car l'énoncé exprime un doute ou un refus : « No creo que las redes sociales sean peligrosas », « No me parece que sea justo ». Pour demander l'avis de quelqu'un : « ¿Qué opinas de...? », « ¿Qué piensas sobre...? », « ¿Y a ti qué te parece? ». Notez la préposition obligatoire dans « estar convencido de que ».",
              ],
              box: { label: "Règle", text: "Creo que, pienso que, me parece que, opino que + indicatif. No creo que, no pienso que, no me parece que + subjonctif. Locutions : en mi opinión, a mi juicio, desde mi punto de vista, para mí." },
            },
            {
              heading: "Les expressions impersonnelles : certitude ou jugement ?",
              paragraphs: [
                "Après une expression de certitude (es verdad que, es cierto que, es evidente que, es obvio que, está claro que, no hay duda de que), on emploie l'indicatif, car on affirme un fait : « Está claro que el clima está cambiando ». Si la certitude est niée, on passe au subjonctif : « No es verdad que todos los jóvenes sean individualistas ».",
                "Après une expression de jugement, de nécessité ou de possibilité (es necesario que, es importante que, es normal que, es lógico que, es increíble que, es una pena que, es posible que, es probable que), on emploie le subjonctif, même quand le fait est réel : on ne l'affirme pas, on le commente. « Es una pena que tantos jóvenes abandonen sus pueblos », « Es necesario que los gobiernos actúen ». Sans sujet précis, on garde l'infinitif : « Es importante reciclar ».",
              ],
              box: { label: "À retenir", text: "Es verdad, es cierto, es evidente, está claro que + indicatif (on affirme). Es necesario, importante, normal, posible, una pena que + subjonctif (on juge). Sans sujet particulier : es importante + infinitif." },
            },
            {
              heading: "Réagir : accord, désaccord et nuance",
              paragraphs: [
                "Pour marquer l'accord : « Estoy de acuerdo contigo », « Tienes razón », « Comparto tu opinión », « Por supuesto », « Desde luego ». Pour marquer le désaccord : « No estoy de acuerdo », « No comparto tu punto de vista », « Al contrario », « No es así ». On dit toujours « estar de acuerdo » (jamais « ser de acuerdo »), et « estar de acuerdo con alguien » ou « con algo ».",
                "La nuance distingue une opinion argumentée d'une affirmation brutale. Concédez d'abord un point, puis opposez votre idée : « Es cierto que internet facilita el acceso a la información; sin embargo, también difunde noticias falsas ». D'autres outils : « Depende de... », « Hasta cierto punto », « No del todo », « Por un lado..., por otro (lado)... ». Distinguez « pero » (mais) et « sino » (mais, pour rectifier après une négation) : « No es un problema técnico sino político ».",
              ],
              box: { label: "Repère", text: "Aunque + indicatif : fait reconnu (« Aunque llueve, salgo » : il pleut, je sors quand même). Aunque + subjonctif : hypothèse (« Aunque llueva, saldré » : même s'il pleut). Pero : mais ; sino : mais au contraire, après une négation." },
            },
            {
              heading: "Organiser l'argumentation : les connecteurs",
              paragraphs: [
                "Un texte argumentatif suit un plan clair : une introduction qui présente le sujet et pose la question, deux ou trois arguments illustrés par des exemples, une concession qui reconnaît la valeur d'un argument contraire, puis une conclusion qui répond à la question. Les connecteurs rendent ce plan visible pour le lecteur ou l'auditeur.",
                "Pour ajouter : además, también, incluso, por otra parte. Pour la cause : porque, ya que, puesto que, como (en tête de phrase : « Como no tenía dinero, no viajó »). Pour la conséquence : por eso, por lo tanto, así que, de modo que. Pour opposer : pero, sin embargo, en cambio, no obstante. Pour illustrer : por ejemplo, es decir. Pour organiser : en primer lugar, en segundo lugar, luego, por último. Pour conclure : en conclusión, para terminar, en definitiva.",
              ],
              box: { label: "Méthode", text: "Introducción (tema y pregunta) → argumento 1 + ejemplo → argumento 2 + ejemplo → concesión (es cierto que..., sin embargo...) → conclusión (en conclusión, creo que...)." },
            },
          ],
          keyPoints: [
            "Creo que, pienso que, me parece que + indicatif ; à la forme négative : subjonctif (no creo que sea).",
            "Certitude affirmée (es evidente que, está claro que) + indicatif ; jugement, nécessité, possibilité (es importante que, es posible que) + subjonctif.",
            "On dit « estoy de acuerdo con... », jamais « soy de acuerdo ».",
            "Nuancer : es cierto que..., sin embargo... ; por un lado..., por otro... ; hasta cierto punto.",
            "Pero = mais ; sino = mais au contraire, après une négation (no es caro sino barato).",
            "Plan : introduction, arguments avec exemples, concession, conclusion, reliés par des connecteurs variés.",
          ],
          example: {
            statement: "Rédigez un paragraphe argumenté de 80 à 100 mots pour répondre à la question : « ¿Hay que prohibir el móvil en el instituto? »",
            solution: [
              "Analyser la question : elle appelle un oui ou un non, mais une réponse nuancée est plus convaincante (oui pendant les cours, non pendant les pauses).",
              "Construire le plan : présentation du sujet, opinion, deux arguments, concession, conclusion.",
              "Choisir les connecteurs : en primer lugar, por eso, además, es cierto que... sin embargo, en conclusión.",
              "Choisir les structures : « en mi opinión » + indicatif ; « no creo que » + subjonctif ; « es importante que » + subjonctif.",
              "Réponse : « Hoy en día, muchos alumnos tienen un móvil. ¿Hay que prohibirlo en el instituto? En mi opinión, sí, durante las clases. En primer lugar, el móvil distrae a los alumnos, por eso aprenden menos. Además, a veces favorece el acoso en las redes sociales. Es cierto que puede ser una herramienta útil, por ejemplo para buscar información; sin embargo, los ordenadores del instituto cumplen esa función. En conclusión, no creo que sea necesario prohibirlo en el recreo, pero es importante que los alumnos lo guarden en clase. » (environ 90 mots)",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe entre parenthèses au présent de l'indicatif ou du subjonctif : a) Creo que la tecnología nos (ayudar). b) No pienso que los jóvenes (leer) menos que antes. c) Es evidente que el clima (cambiar). d) Es necesario que el gobierno (actuar). e) Me parece que tú (tener) razón. f) No es cierto que todo el mundo (poder) viajar.",
              hint: "Opinion ou certitude affirmée : indicatif. Opinion niée, certitude niée, jugement ou nécessité : subjonctif.",
              solution: [
                "a) Opinion affirmative : indicatif, « ayuda ». b) Opinion niée : subjonctif, « lean ».",
                "c) Certitude affirmée : indicatif, « cambia » (ou « está cambiando »). d) Nécessité : subjonctif, « actúe » (avec accent écrit sur le « ú »).",
                "e) Opinion affirmative : indicatif, « tienes ». f) Certitude niée : subjonctif, « pueda ».",
                "Réponses : a) ayuda b) lean c) cambia d) actúe e) tienes f) pueda.",
              ],
            },
            {
              level: 2,
              statement: "Complétez ce texte (texte écrit pour l'exercice) avec les connecteurs suivants, chacun employé une fois : además, aunque, como, en conclusión, por ejemplo, sin embargo. « (1) ... el tráfico contamina el aire, muchas ciudades quieren limitar el uso del coche. (2) ..., algunas calles del centro se han vuelto peatonales. Los vecinos respiran mejor; (3) ..., hay menos ruido. (4) ..., los comerciantes temen perder clientes. (5) ... la medida no guste a todos, parece necesaria. (6) ..., el coche ya no puede ser el rey de la ciudad. »",
              hint: "Identifiez la relation logique entre chaque phrase et la précédente : cause, exemple, ajout, opposition, concession, conclusion.",
              solution: [
                "(1) La proposition donne la cause, placée en tête de phrase : « Como ».",
                "(2) Les rues piétonnes illustrent la limitation du trafic : « Por ejemplo ». (3) Un second avantage s'ajoute au premier : « además ».",
                "(4) Les commerçants s'opposent à la mesure : « Sin embargo ». (5) Concession suivie du subjonctif « guste » : « Aunque ».",
                "(6) La dernière phrase tire le bilan : « En conclusión ».",
                "Réponses : 1 Como ; 2 Por ejemplo ; 3 además ; 4 Sin embargo ; 5 Aunque ; 6 En conclusión.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Sur le forum d'un lycée partenaire de Séville, on vous demande : « ¿Las redes sociales acercan o alejan a las personas? ». Rédigez une contribution argumentée de 120 à 150 mots. Exigences : une opinion clairement formulée, deux arguments illustrés par un exemple, une concession, une conclusion, au moins cinq connecteurs différents et deux subjonctifs justifiés.",
              hint: "Rédigez d'abord le plan en espagnol en cinq lignes, puis choisissez un connecteur pour chaque transition avant d'écrire.",
              solution: [
                "Plan : introduction et question ; opinion (nous rapprochent, avec modération) ; argument 1 (garder le contact) ; argument 2 (trouver des personnes qui partagent nos passions) ; concession (l'excès isole) ; conclusion.",
                "Introduction : « Las redes sociales forman parte de nuestra vida diaria. Pero ¿nos acercan o nos alejan de los demás? Desde mi punto de vista, nos acercan, a condición de usarlas con moderación. »",
                "Arguments : « En primer lugar, permiten mantener el contacto con personas que viven lejos: gracias a una videollamada, puedo hablar con mi prima que estudia en Sevilla. Además, ayudan a encontrar a gente que comparte nuestras pasiones, como la música o el deporte. »",
                "Concession : « Es cierto que algunos jóvenes pasan horas delante de la pantalla y ya no hablan con su familia; sin embargo, la culpa no es de la herramienta sino del uso que hacemos de ella. Por eso es importante que aprendamos a desconectarnos. »",
                "Conclusion : « En conclusión, no creo que las redes sociales sean un peligro en sí mismas: todo depende de nosotros. »",
                "Vérification : environ 140 mots ; connecteurs : pero, en primer lugar, además, es cierto que, sin embargo, sino, por eso, en conclusión ; subjonctifs : « aprendamos » (après « es importante que ») et « sean » (après « no creo que »).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes d'un paragraphe argumenté.",
            items: [
              "Presentar el tema y plantear la pregunta",
              "Dar su opinión (la tesis)",
              "Desarrollar un primer argumento con un ejemplo",
              "Añadir un segundo argumento (además...)",
              "Hacer una concesión (es cierto que..., sin embargo...)",
              "Concluir respondiendo a la pregunta",
            ],
          },
          quiz: [
            { q: "Complétez : « No creo que el proyecto ... útil. »", options: ["es", "sea", "será", "está"], answer: 1, why: "Un verbe d'opinion à la forme négative est suivi du subjonctif : « sea »." },
            { q: "Quelle phrase est correcte ?", options: ["Soy de acuerdo contigo.", "Tengo de acuerdo contigo.", "Estoy de acuerdo a ti.", "Estoy de acuerdo contigo."], answer: 3, why: "L'expression est « estar de acuerdo con alguien » ; « con » + « ti » devient « contigo »." },
            { q: "Complétez : « Es evidente que el clima ... cambiando. »", options: ["está", "esté", "estuviera"], answer: 0, why: "Une certitude affirmée (es evidente que) est suivie de l'indicatif." },
            { q: "Quel connecteur exprime la conséquence ?", options: ["sin embargo", "por eso", "aunque", "puesto que"], answer: 1, why: "« Por eso » signifie « c'est pourquoi » ; « puesto que » exprime la cause, « sin embargo » l'opposition, « aunque » la concession." },
            { q: "Complétez : « No es un problema económico ... político. »", options: ["pero", "si no", "sin", "sino"], answer: 3, why: "Après une négation, pour rectifier, on emploie « sino » (mais au contraire)." },
          ],
          trap: "Mettre le subjonctif après « creo que » ou l'indicatif après « no creo que », et dire « soy de acuerdo » par calque du français. On écrit « Creo que es » (on affirme), « No creo que sea » (on doute), et toujours « estoy de acuerdo ».",
          method: "Avant de rédiger, notez votre plan en cinq lignes (tesis, argumento 1, argumento 2, concesión, conclusión) et choisissez un connecteur pour chaque transition. À la relecture, entourez chaque « que » et demandez-vous si vous affirmez un fait (indicatif) ou si vous jugez, doutez ou souhaitez (subjonctif).",
        },
      ],
    },
    {
      id: 'innovations-responsabilite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'tecnologia-sociedad',
          title: 'Technologies et société dans le monde hispanique',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique des technologies numériques et de leurs usages (las redes sociales, la brecha digital, el teletrabajo, la inteligencia artificial).",
            "Situer quelques inventeurs espagnols et leurs innovations (Torres Quevedo, Isaac Peral, Juan de la Cierva).",
            "Analyser les effets du numérique sur la société : inclusion, fracture numérique, droit à la déconnexion.",
            "Exprimer une opinion nuancée sur les avantages et les risques d'une technologie.",
          ],
          course: [
            {
              heading: "Des inventeurs espagnols en avance sur leur temps",
              paragraphs: [
                "L'axe 4 du programme invite à interroger le progrès scientifique et technique et la responsabilité qu'il implique. Le monde hispanique y a toute sa place, avec des inventeurs souvent méconnus en France. Leonardo Torres Quevedo (1852-1936), ingénieur espagnol, présente en 1903 le « Telekino », l'un des premiers systèmes de commande à distance par ondes radio. Il construit aussi « El Ajedrecista » (1912), un automate capable de jouer seul une finale d'échecs (roi et tour contre roi), souvent cité comme un ancêtre des machines « intelligentes ».",
                "Torres Quevedo conçoit également le téléphérique qui franchit le tourbillon du Niagara, côté canadien, inauguré en 1916 et toujours en service. Isaac Peral (1851-1895), marin et ingénieur, met à l'eau en 1888 un sous-marin à propulsion électrique armé de torpilles. Juan de la Cierva (1895-1936) invente l'autogire, dont le premier vol réussi a lieu en 1923 : un appareil à voilure tournante qui a ouvert la voie à l'hélicoptère.",
              ],
              box: { label: "Repère", text: "1888 : sous-marin électrique d'Isaac Peral · 1903 : Telekino de Torres Quevedo · 1912 : El Ajedrecista · 1916 : téléphérique du Niagara (Torres Quevedo) · 1923 : premier vol de l'autogire de Juan de la Cierva." },
            },
            {
              heading: "Le numérique au quotidien : les mots pour en parler",
              paragraphs: [
                "Le vocabulaire varie d'une rive à l'autre de l'Atlantique : el móvil (Espagne) ou el celular (Amérique latine), el ordenador (Espagne) ou la computadora (Amérique latine), el vídeo (Espagne) ou el video (Amérique latine). Mots communs : la pantalla (l'écran), la red (le réseau), las redes sociales, la aplicación, el algoritmo, la nube (le cloud), la contraseña (le mot de passe), los datos personales. Verbes : descargar (télécharger), subir (mettre en ligne), compartir (partager), navegar, conectarse, desconectarse, engancharse (devenir accro).",
                "Le numérique a transformé le travail (el teletrabajo, qui s'est beaucoup développé pendant la pandémie de 2020), le commerce (el comercio electrónico, las compras en línea), les démarches bancaires (la banca en línea), l'école (las clases a distancia) et les relations (las videollamadas). Il pose aussi de nouvelles questions : la adicción a las pantallas, el ciberacoso, las noticias falsas (en Espagne, on parle aussi de « bulos »), la protección de la vida privada.",
              ],
              box: { label: "Vocabulaire", text: "la brecha digital : la fracture numérique · el teletrabajo : le télétravail · el ciberacoso : le cyberharcèlement · los bulos, las noticias falsas : les fausses informations · la desconexión digital : la déconnexion · la inteligencia artificial (la IA)." },
            },
            {
              heading: "La fracture numérique : qui reste à l'écart ?",
              paragraphs: [
                "La « brecha digital » désigne les inégalités face au numérique. Elle a deux dimensions : l'accès (avoir un appareil, une connexion de qualité, un forfait abordable) et les usages (savoir se servir des outils, comprendre leurs risques). En Amérique latine, les zones rurales, andines ou amazoniennes sont souvent moins bien connectées que les grandes villes ; partout, les personnes âgées et les foyers modestes sont les plus exposés au risque d'exclusion.",
                "En Espagne, la fracture générationnelle a provoqué une mobilisation remarquée. Au début de l'année 2022, la pétition en ligne d'un médecin retraité de Valence, Carlos San Juan, intitulée « Soy mayor, no idiota » (je suis âgé, pas idiot), dénonce la fermeture des agences et la réduction des guichets bancaires, qui obligent les personnes âgées à tout faire sur une application. Elle recueille des centaines de milliers de signatures, et les banques s'engagent alors auprès du gouvernement à renforcer l'accueil en personne.",
              ],
              box: { label: "Définition", text: "La brecha digital (fracture numérique) : l'ensemble des inégalités d'accès aux outils numériques (équipement, connexion) et de compétences pour les utiliser. Elle peut être territoriale (ville et campagne), générationnelle ou sociale." },
            },
            {
              heading: "Encadrer la technologie : droits et responsabilités",
              paragraphs: [
                "Face aux technologies, les sociétés hispaniques inventent aussi des règles. En Espagne, la loi organique 3/2018 sur la protection des données personnelles et la garantie des droits numériques reconnaît notamment aux salariés un droit à la déconnexion numérique : ne pas avoir à répondre aux messages professionnels en dehors du temps de travail. Comme membre de l'Union européenne, l'Espagne applique aussi le règlement européen sur l'intelligence artificielle adopté en 2024, et elle a créé en 2023 une agence de supervision de l'IA, l'AESIA, installée à La Corogne.",
                "Ces débats rejoignent la question de la responsabilité : qui répond des erreurs d'un algorithme ? Comment protéger les mineurs sur les réseaux sociaux ? Pour en parler en espagnol, mobilisez les tournures de l'opinion et de la nuance : « Es cierto que la tecnología facilita la vida; sin embargo, es necesario que se respete la vida privada », « No creo que la inteligencia artificial sustituya a los profesores ».",
              ],
              box: { label: "À retenir", text: "Ventajas : permite, facilita, ahorra tiempo, acerca a las personas. Riesgos : aísla, engancha, vigila, excluye, difunde bulos. Nuancer : es cierto que..., sin embargo... ; no creo que + subjonctif." },
            },
          ],
          keyPoints: [
            "Torres Quevedo : Telekino (1903), El Ajedrecista (1912), téléphérique du Niagara (1916). Isaac Peral : sous-marin électrique (1888). Juan de la Cierva : autogire (1923).",
            "Espagne / Amérique latine : el móvil / el celular ; el ordenador / la computadora ; el vídeo / el video.",
            "La brecha digital : inégalités d'accès et d'usages, territoriales, générationnelles ou sociales.",
            "« Soy mayor, no idiota » (2022) : mobilisation espagnole contre l'exclusion numérique des personnes âgées.",
            "Espagne : droit à la déconnexion numérique (loi organique 3/2018) ; agence de supervision de l'IA (AESIA, 2023).",
            "Pour débattre : avantages (permite, facilita) et risques (aísla, engancha), reliés par sin embargo, en cambio.",
          ],
          example: {
            statement: "Lisez ce témoignage (texte écrit pour l'exercice) : « Mi abuela Carmen tiene 82 años y vive sola en un pueblo de Teruel. Durante años, no quiso saber nada de internet. Pero el banco del pueblo cerró y su médico empezó a dar las citas por una aplicación. Al principio, se sentía perdida y enfadada. Ahora, gracias a un taller de la biblioteca, hace videollamadas con sus nietos cada domingo. Dice que la tecnología no es ni buena ni mala: “depende de que alguien te enseñe”. » 1) Qui parle, et de qui ? 2) Pourquoi la grand-mère a-t-elle dû utiliser internet ? 3) Comment son attitude a-t-elle évolué ? 4) Quel est son avis, et quel lien faites-vous avec la « brecha digital » ?",
            solution: [
              "1) Un petit-enfant (« mi abuela ») parle de sa grand-mère, Carmen, 82 ans, qui vit seule dans un village de la province de Teruel.",
              "2) Elle y a été contrainte : la banque du village a fermé et son médecin donne désormais les rendez-vous par une application.",
              "3) Au début, elle se sentait perdue et en colère (« perdida y enfadada ») ; grâce à un atelier de la bibliothèque, elle fait maintenant des appels vidéo avec ses petits-enfants chaque dimanche. Les connecteurs « Pero », « Al principio » et « Ahora » marquent ces étapes.",
              "4) Pour elle, la technologie n'est ni bonne ni mauvaise : tout dépend de l'accompagnement (« depende de que » + subjonctif « enseñe »).",
              "Réponse : ce témoignage illustre la fracture numérique générationnelle et territoriale (une personne âgée dans un village sans banque) et montre qu'elle se réduit par la formation, et pas seulement par l'équipement.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol d'Espagne, puis donnez la variante d'Amérique latine quand elle existe : a) le téléphone portable b) l'ordinateur c) télécharger une application d) mettre une vidéo en ligne e) le mot de passe f) le cyberharcèlement.",
              hint: "Attention aux deux verbes de sens opposé : l'un fait descendre le fichier vers vous, l'autre le fait monter vers internet.",
              solution: [
                "a) el móvil (Espagne) / el celular (Amérique latine). b) el ordenador / la computadora.",
                "c) descargar una aplicación (identique des deux côtés de l'Atlantique).",
                "d) subir un vídeo (Espagne) / subir un video (Amérique latine, sans accent écrit).",
                "e) la contraseña. f) el ciberacoso.",
                "Réponses : el móvil / el celular ; el ordenador / la computadora ; descargar una aplicación ; subir un vídeo / un video ; la contraseña ; el ciberacoso.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte (texte écrit pour l'exercice ; le village est fictif) : « En la escuela de Villa Esperanza, un pequeño pueblo del altiplano boliviano, los alumnos esperaban este momento desde hacía años: por fin tienen internet gracias a una antena satelital. La maestra, Rosa Mamani, está entusiasmada: “Ahora mis alumnos pueden visitar museos del mundo entero sin salir del aula”. Sin embargo, no todos los padres comparten su alegría. Don Felipe, agricultor, teme que sus hijos pasen demasiado tiempo delante de la pantalla y que olviden las tradiciones del pueblo. La maestra le responde que la escuela enseñará a usar internet con responsabilidad. » 1) Où se passe la scène et quel changement est présenté ? 2) Quel est le point de vue de la maîtresse ? 3) Quelle crainte exprime Don Felipe ? Relevez et justifiez les deux subjonctifs. 4) Quel connecteur introduit l'opposition ? 5) Comment la maîtresse répond-elle à cette crainte ?",
              hint: "Repérez les personnages, puis classez leurs propos en avantages et en risques.",
              solution: [
                "1) Dans l'école d'un petit village de l'Altiplano bolivien : l'école reçoit enfin internet grâce à une antenne satellite, ce qui réduit la fracture numérique territoriale.",
                "2) La maîtresse est enthousiaste (« entusiasmada ») : internet ouvre le monde aux élèves, qui peuvent visiter des musées sans quitter la classe.",
                "3) Don Felipe craint que ses enfants passent trop de temps devant l'écran et oublient les traditions. « Pasen » et « olviden » sont au subjonctif parce qu'ils suivent « temer que », verbe de crainte (sentiment).",
                "4) « Sin embargo » introduit l'opposition entre la joie de la maîtresse et la réserve de certains parents.",
                "5) Elle répond que l'école apprendra à utiliser internet de façon responsable : le problème n'est pas l'outil mais son usage.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez pour le journal de votre lycée un article de 120 à 150 mots intitulé « ¿El teletrabajo, un progreso para todos? ». Présentez le sujet, donnez votre opinion, développez des avantages et des limites avec des exemples, et concluez. Employez au moins quatre connecteurs et deux subjonctifs.",
              hint: "Construisez l'article autour de « por un lado... por otro lado... » et réutilisez une notion précise du cours (la desconexión digital, la brecha digital).",
              solution: [
                "Plan : introduction et question ; avantages (temps, argent, vie hors des grandes villes) ; limites (métiers impossibles à distance, isolement, difficulté à se déconnecter) ; conclusion nuancée.",
                "Introduction : « Desde la pandemia de 2020, muchas empresas permiten a sus empleados trabajar desde casa. ¿Es un progreso para todos? En mi opinión, es un avance, pero no para todo el mundo. »",
                "Avantages : « Por un lado, el teletrabajo ahorra tiempo y dinero: los trabajadores no pasan horas en el transporte. Además, permite vivir lejos de las grandes ciudades, por ejemplo en un pueblo, lo que puede ayudar a frenar la despoblación rural. »",
                "Limites : « Por otro lado, no todos los empleos pueden hacerse a distancia: un médico o un camarero tienen que estar presentes. Además, algunos teletrabajadores se sienten aislados o no consiguen desconectar. Por eso es importante que se respete el derecho a la desconexión digital. »",
                "Conclusion : « En conclusión, no creo que el teletrabajo sea la solución para todos, pero puede mejorar la vida de muchas personas si se organiza bien. »",
                "Vérification : environ 140 mots ; connecteurs : por un lado, además, por ejemplo, por otro lado, por eso, en conclusión ; subjonctifs : « se respete » (es importante que) et « sea » (no creo que) ; « si se organiza » : présent de l'indicatif après « si ».",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Technologies et société dans le monde hispanique.",
            statements: [
              { text: "Leonardo Torres Quevedo a présenté en 1903 le Telekino, un système de commande à distance par radio.", true: true, why: "Le Telekino est l'un des premiers systèmes de télécommande par ondes radio." },
              { text: "En Amérique latine, on dit plutôt « el celular » que « el móvil ».", true: true, why: "« El móvil » est le mot d'Espagne ; « el celular » est le mot courant en Amérique latine." },
              { text: "La « brecha digital » ne concerne que l'accès à une connexion internet.", true: false, why: "Elle concerne aussi les compétences et les usages : avoir une connexion ne suffit pas pour savoir s'en servir." },
              { text: "Juan de la Cierva a inventé le sous-marin électrique.", true: false, why: "Le sous-marin électrique est celui d'Isaac Peral (1888) ; Juan de la Cierva a inventé l'autogire (1923)." },
              { text: "« Subir una foto » signifie mettre une photo en ligne.", true: true, why: "« Subir » : faire monter vers internet ; « descargar » : télécharger." },
              { text: "« Soy mayor, no idiota » était le nom d'une application bancaire pour les seniors.", true: false, why: "C'est le titre d'une pétition lancée par un médecin retraité contre l'exclusion numérique des personnes âgées." },
              { text: "En Espagne, la loi reconnaît aux salariés un droit à la déconnexion numérique.", true: true, why: "La loi organique 3/2018 reconnaît ce droit : ne pas répondre aux messages professionnels hors du temps de travail." },
            ],
          },
          quiz: [
            { q: "Qui a conçu « El Ajedrecista », automate joueur d'échecs ?", options: ["Isaac Peral", "Juan de la Cierva", "Torres Quevedo", "Ramón y Cajal"], answer: 2, why: "Leonardo Torres Quevedo a construit « El Ajedrecista » (1912), qui jouait seul une finale roi et tour contre roi." },
            { q: "En Amérique latine, « la computadora » désigne :", options: ["la calculatrice", "l'ordinateur", "le téléphone portable", "la tablette"], answer: 1, why: "En Espagne, on dit « el ordenador » ; en Amérique latine, « la computadora »." },
            { q: "Que signifie « la brecha digital » ?", options: ["la panne d'internet", "le piratage informatique", "la dépendance aux écrans", "la fracture numérique"], answer: 3, why: "« Brecha » signifie brèche, fossé : ce sont les inégalités face au numérique." },
            { q: "Le droit à la déconnexion numérique, en Espagne, permet aux salariés de :", options: ["ne pas répondre au travail hors de leurs horaires", "supprimer leurs comptes sur tous les réseaux sociaux", "refuser d'utiliser un ordinateur au bureau"], answer: 0, why: "Ce droit protège le temps de repos : les salariés n'ont pas à répondre aux messages professionnels hors du temps de travail." },
            { q: "Complétez : « No creo que la inteligencia artificial ... a los profesores. »", options: ["sustituye", "sustituya", "sustituirá", "sustituyendo"], answer: 1, why: "« No creo que » exprime un doute : il est suivi du subjonctif." },
          ],
          trap: "Réduire la fracture numérique à une question d'équipement, et mélanger les variantes dans un même texte (« el móvil » et « la computadora »). La « brecha digital » touche aussi les compétences ; choisissez une variante de l'espagnol et gardez-la.",
          method: "Construisez une carte mentale en deux branches, « ventajas » et « riesgos », avec pour chacune trois verbes et un exemple précis tiré du cours (Torres Quevedo, « Soy mayor, no idiota », le droit à la déconnexion). Un exemple concret rend votre argumentation crédible.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'progreso-etica',
          title: 'Progrès scientifique et questions éthiques',
          minutes: 35,
          objectives: [
            "Mobiliser le lexique de la recherche scientifique, de la bioéthique et de la responsabilité.",
            "Présenter quelques figures et débats du monde hispanique : Ramón y Cajal, Severo Ochoa, la loi espagnole sur l'euthanasie, les neurodroits au Chili.",
            "Exprimer une hypothèse, une réserve ou une recommandation (si + présent, conditionnel, subjonctif après une expression de jugement).",
            "Construire une argumentation nuancée sur les limites du progrès scientifique.",
          ],
          course: [
            {
              heading: "Une tradition scientifique hispanique",
              paragraphs: [
                "Santiago Ramón y Cajal (1852-1934), médecin espagnol, reçoit en 1906 le prix Nobel de physiologie ou médecine, partagé avec l'Italien Camillo Golgi. Grâce au microscope et à des techniques de coloration, il montre que le système nerveux est formé de cellules distinctes, les neurones, qui communiquent entre elles : c'est l'un des fondements des neurosciences modernes. Ses dessins de neurones, d'une grande précision, sont encore reproduits aujourd'hui.",
                "D'autres scientifiques hispaniques ont reçu le prix Nobel : Severo Ochoa, né en Espagne et devenu citoyen américain, en 1959, pour ses travaux sur la synthèse biologique de l'ARN ; les Argentins Bernardo Houssay (médecine, 1947), Luis Federico Leloir (chimie, 1970) et César Milstein (médecine, 1984), qui a contribué à mettre au point la production des anticorps monoclonaux. Plusieurs ont fait une partie de leur carrière à l'étranger : la « fuga de cerebros » (fuite des cerveaux) reste un sujet de débat en Espagne et en Amérique latine.",
              ],
              box: { label: "Repère", text: "1906 : Nobel de Ramón y Cajal (les neurones) · 1947 : Bernardo Houssay · 1959 : Severo Ochoa (l'ARN) · 1970 : Luis Federico Leloir · 1984 : César Milstein (les anticorps monoclonaux)." },
            },
            {
              heading: "La bioéthique : le débat sur la mort dans la dignité",
              paragraphs: [
                "La bioéthique étudie les questions morales posées par les progrès de la médecine et de la biologie. En Espagne, le cas de Ramón Sampedro, marin galicien devenu tétraplégique après un accident de plongeon en 1968, a ouvert un débat national : il a réclamé pendant des années, jusque devant les tribunaux, le droit de mourir dans la dignité, et il est mort en 1998, aidé par une amie. Le film « Mar adentro » d'Alejandro Amenábar (2004), qui raconte son combat, a reçu l'Oscar du meilleur film étranger.",
                "En 2021, l'Espagne adopte une loi organique qui encadre l'euthanasie : une personne majeure atteinte d'une maladie grave et incurable, ou d'une souffrance grave, chronique et invalidante, peut la demander selon une procédure stricte, avec plusieurs demandes et des contrôles médicaux. En Colombie, la Cour constitutionnelle avait reconnu dès 1997 le droit de mourir dans la dignité. Les défenseurs de ces lois invoquent la liberté et la dignité ; leurs opposants craignent des pressions sur les personnes vulnérables et demandent d'abord le développement des soins palliatifs.",
              ],
              box: { label: "Vocabulaire", text: "la muerte digna : la mort dans la dignité · la eutanasia · los cuidados paliativos : les soins palliatifs · el ensayo clínico : l'essai clinique · el dilema ético · la dignidad · la libertad de elegir · el avance, el descubrimiento, el investigador." },
            },
            {
              heading: "Génétique et neurosciences : de nouvelles frontières",
              paragraphs: [
                "Le microbiologiste espagnol Francisco Mojica, de l'université d'Alicante, a étudié dès les années 1990 des séquences d'ADN répétées chez des micro-organismes, qu'il a contribué à nommer CRISPR. Ces recherches ont ouvert la voie aux « ciseaux génétiques » (CRISPR-Cas9), qui permettent de modifier l'ADN avec précision. Les espoirs sont immenses (soigner des maladies génétiques, obtenir des plantes plus résistantes), mais modifier l'ADN d'embryons humains, transmissible aux descendants, soulève de graves questions éthiques.",
                "Les neurotechnologies (interfaces cerveau-machine, casques qui enregistrent l'activité cérébrale) posent un autre défi : protéger la pensée elle-même. En 2021, le Chili est devenu le premier pays à inscrire dans sa Constitution la protection de l'activité cérébrale et de l'intégrité mentale face aux progrès des neurotechnologies : on parle de « neuroderechos » (neurodroits). Cette initiative est suivie avec attention par d'autres pays et par des organisations internationales.",
              ],
              box: { label: "À retenir", text: "Les grandes questions : ¿Todo lo que es posible es deseable? ¿Quién pone los límites? ¿Quién es responsable? Exemples : euthanasie (Espagne, 2021), édition génétique (CRISPR), neurodroits (Chili, 2021)." },
            },
            {
              heading: "La langue de l'hypothèse et de la réserve",
              paragraphs: [
                "Pour envisager une conséquence possible, employez « si » + présent de l'indicatif, puis un présent ou un futur : « Si modificamos los genes, podremos curar enfermedades ». Après « si » de condition, on n'emploie jamais le futur ni le présent du subjonctif. Pour formuler un conseil ou une réserve avec prudence, utilisez le conditionnel : « Habría que debatir antes de legislar », « Sería peligroso no poner límites », « Los científicos deberían informar a la sociedad ».",
                "Pour exprimer une condition ou une crainte : « siempre que » (à condition que), « es necesario que », « me preocupa que », tous suivis du subjonctif : « La ciencia es útil siempre que respete la dignidad humana », « Me preocupa que las empresas usen nuestros datos cerebrales ». Ouverture vers le niveau B2 : pour une hypothèse peu probable ou imaginaire, « si » + imparfait du subjonctif, puis conditionnel : « Si pudiéramos elegir los genes de un bebé, ¿sería ético? ».",
              ],
              box: { label: "Règle", text: "Si + présent → présent ou futur (si investigamos, curaremos). Conditionnel pour conseiller ou nuancer (habría que, sería mejor, deberían). Siempre que, es necesario que, me preocupa que + subjonctif. Jamais « si » + futur ni « si » + présent du subjonctif." },
            },
          ],
          keyPoints: [
            "Ramón y Cajal, Nobel 1906 : le système nerveux est formé de neurones distincts. Severo Ochoa, Nobel 1959 : la synthèse biologique de l'ARN.",
            "« La fuga de cerebros » : le départ des chercheurs vers l'étranger.",
            "Espagne : loi sur l'euthanasie (2021) ; Ramón Sampedro et le film « Mar adentro » (Amenábar, 2004).",
            "CRISPR : Francisco Mojica (Alicante) étudie ces séquences dès les années 1990 ; l'édition génétique des embryons pose des questions éthiques.",
            "Chili, 2021 : protection constitutionnelle de l'activité cérébrale et de l'intégrité mentale (neuroderechos).",
            "Si + présent → futur ; conditionnel pour nuancer (habría que, deberían) ; siempre que, me preocupa que + subjonctif.",
          ],
          example: {
            statement: "Lisez ces deux messages d'un forum (textes écrits pour l'exercice). Présentez en français les deux positions, puis donnez la vôtre en espagnol en une phrase nuancée. Lucía : « Si la ciencia puede curar enfermedades genéticas, hay que dejarla avanzar sin miedo. » Andrés : « No estoy en contra de la ciencia, pero me preocupa que se fabriquen bebés a la carta. Habría que poner límites claros. »",
            solution: [
              "Lucía est favorable à la recherche sans réserve : elle pose une condition (« si » + présent : « si la ciencia puede ») et en tire une obligation (« hay que dejarla avanzar »).",
              "Andrés a une position nuancée : il concède d'abord qu'il n'est pas contre la science (« No estoy en contra de la ciencia, pero »), puis exprime une crainte (« me preocupa que » + subjonctif « se fabriquen ») et recommande des limites au conditionnel (« habría que »).",
              "Synthèse en français : Lucía défend la liberté de la recherche au nom de la guérison des maladies génétiques ; Andrés, sans rejeter la science, redoute les « bébés à la carte » et réclame des limites claires.",
              "Pour donner votre avis, reprenez une structure de la leçon : « siempre que » + subjonctif permet d'accepter la recherche tout en posant une condition.",
              "Réponse : « Creo que la investigación genética es necesaria, siempre que no se use para elegir las características de un bebé. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec les mots suivants : investigadores, descubrimiento, ensayo clínico, cuidados paliativos, límites, dilema. a) El ... de Ramón y Cajal cambió la neurología. b) Muchos ... españoles trabajan en el extranjero. c) Antes de vender un medicamento, hay que hacer un ... d) Los ... alivian el dolor de los enfermos graves. e) Elegir entre dos valores importantes es un ... f) ¿Debe la ciencia tener ...?",
              hint: "Repérez l'article ou l'accord : « el », « un », « muchos », « los » indiquent le genre et le nombre du mot manquant.",
              solution: [
                "a) « El descubrimiento » (la découverte, masculin singulier). b) « Muchos investigadores » (masculin pluriel).",
                "c) « un ensayo clínico » (un essai clinique). d) « Los cuidados paliativos ».",
                "e) « un dilema » (mot masculin malgré sa finale en -a). f) « límites ».",
                "Réponses : a) descubrimiento b) investigadores c) ensayo clínico d) cuidados paliativos e) dilema f) límites.",
              ],
            },
            {
              level: 2,
              statement: "Complétez ou traduisez avec la structure indiquée : a) Si (investigar, nosotros) más, (curar, nosotros) más enfermedades. (si + présent, puis futur) b) Les scientifiques devraient informer la société. (conditionnel de deber) c) Il faudrait débattre avant de légiférer. (haber que au conditionnel) d) Me preocupa que las empresas (usar) nuestros datos. e) La ciencia es útil siempre que (respetar) la dignidad humana. f) Ouverture B2 : Si (ser) posible elegir los genes, ¿(ser) ético? (si + imparfait du subjonctif, puis conditionnel)",
              hint: "Après « si » de condition : présent de l'indicatif. Après « me preocupa que » et « siempre que » : subjonctif.",
              solution: [
                "a) « Si investigamos más, curaremos más enfermedades. »",
                "b) « Los científicos deberían informar a la sociedad. » (conditionnel de deber : debería, deberías, debería, deberíamos, deberíais, deberían)",
                "c) « Habría que debatir antes de legislar. »",
                "d) Crainte : subjonctif, « usen ». e) Condition avec « siempre que » : subjonctif, « respete ».",
                "f) « Si fuera posible elegir los genes, ¿sería ético? » (fuera : imparfait du subjonctif de ser ; sería : conditionnel)",
                "Réponses : a) investigamos, curaremos b) deberían informar c) Habría que debatir d) usen e) respete f) fuera, sería.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Pour un débat organisé en classe, rédigez une contribution de 130 à 160 mots : « ¿Debe la ciencia tener límites? ». Appuyez-vous sur au moins un exemple réel du cours. Employez une hypothèse avec « si », un conditionnel, un subjonctif après une expression de crainte ou de jugement, et une concession.",
              hint: "Partez d'une question générale (¿todo lo que es posible es deseable?), puis choisissez un ou deux exemples précis : les neurodroits au Chili, l'édition génétique.",
              solution: [
                "Plan : introduction (les bienfaits de la science, puis la question) ; argument 1 (les neurotechnologies, exemple du Chili) ; argument 2 (l'édition génétique des embryons) ; concession ; conclusion avec une proposition.",
                "Introduction : « Gracias a la ciencia, hoy vivimos más tiempo y curamos enfermedades que antes eran mortales. Pero ¿todo lo que es posible es deseable? En mi opinión, la ciencia debe avanzar, aunque con límites claros. »",
                "Arguments : « En primer lugar, si dejamos que todo sea posible, algunas técnicas podrán usarse contra las personas. Por ejemplo, las neurotecnologías podrían leer nuestra actividad cerebral; por eso Chile protegió en su Constitución, en 2021, la integridad mental. Además, modificar los genes de un embrión cambiaría también a sus descendientes: me preocupa que se fabriquen bebés a la carta. »",
                "Concession et conclusion : « Es cierto que poner límites puede frenar descubrimientos útiles; sin embargo, no se trata de prohibir la investigación sino de vigilar sus aplicaciones. En conclusión, habría que crear comités éticos internacionales para que los ciudadanos participen en estas decisiones. »",
                "Vérification : environ 150 mots ; hypothèse « si dejamos » + futur « podrán » ; conditionnels « podrían », « cambiaría », « habría que » ; subjonctifs « sea », « se fabriquen », « participen » ; concession « Es cierto que... sin embargo » ; exemple réel : les neurodroits au Chili.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque nom à ce qui l'a rendu célèbre.",
            pairs: [
              { left: "Santiago Ramón y Cajal", right: "Les neurones, prix Nobel 1906" },
              { left: "Severo Ochoa", right: "La synthèse de l'ARN, prix Nobel 1959" },
              { left: "César Milstein", right: "Les anticorps monoclonaux, prix Nobel 1984" },
              { left: "Francisco Mojica", right: "Les séquences CRISPR" },
              { left: "Alejandro Amenábar", right: "Le film « Mar adentro »" },
              { left: "Le Chili, 2021", right: "Les neurodroits dans la Constitution" },
            ],
          },
          quiz: [
            { q: "Pour quels travaux Ramón y Cajal a-t-il reçu le prix Nobel en 1906 ?", options: ["le vaccin contre la rage", "ses travaux sur les neurones", "la synthèse biologique de l'ARN", "la découverte de la pénicilline"], answer: 1, why: "Il a montré que le système nerveux est formé de cellules distinctes, les neurones." },
            { q: "Complétez : « Si investigamos más, ... nuevas curas. »", options: ["encontremos", "encontraremos", "encontraríamos", "encontráramos"], answer: 1, why: "Si + présent de l'indicatif dans la condition, futur dans la conséquence." },
            { q: "Que raconte le film « Mar adentro » (2004) ?", options: ["le voyage d'un sous-marin espagnol", "l'exil d'un chercheur en Amérique", "le combat de Ramón Sampedro", "la vie d'un village de pêcheurs galiciens"], answer: 2, why: "Le film d'Alejandro Amenábar raconte le combat de Ramón Sampedro, tétraplégique, pour mourir dans la dignité." },
            { q: "Quel pays a inscrit en 2021 la protection de l'activité cérébrale dans sa Constitution ?", options: ["le Chili", "l'Espagne", "le Mexique", "l'Argentine"], answer: 0, why: "Le Chili a été le premier pays à protéger constitutionnellement l'intégrité mentale face aux neurotechnologies." },
            { q: "Quelle phrase est correcte ?", options: ["Si habrá límites, la ciencia será más segura.", "Si haya límites, la ciencia será más segura.", "Si hay límites, la ciencia será más segura."], answer: 2, why: "Après « si » de condition, on emploie le présent de l'indicatif, jamais le futur ni le présent du subjonctif." },
          ],
          trap: "Mettre un futur ou un présent du subjonctif après « si » (« si habrá », « si haya »), par confusion avec « cuando ». Après « si » de condition, employez le présent de l'indicatif (« si hay límites ») ou, pour une hypothèse peu probable, l'imparfait du subjonctif.",
          method: "Pour chaque débat éthique, préparez une fiche en trois lignes : un exemple réel (pays, date, personne), l'argument pour, l'argument contre. À l'écrit comme à l'oral, présentez les deux positions avant de donner la vôtre : c'est ce qu'on attend d'une argumentation nuancée.",
        },
      ],
    },
    {
      id: 'humain-nature',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'agua-recurso',
          title: 'L\'eau, une ressource disputée',
          minutes: 30,
          objectives: [
            "Mobiliser le lexique de l'eau et de ses usages (la sequía, el regadío, el embalse, el acuífero, el trasvase).",
            "Présenter des conflits liés à l'eau en Espagne et en Amérique latine (transfert Tajo-Segura, Doñana, guerre de l'eau de Cochabamba, Chili).",
            "Expliquer comment l'accès à l'eau est devenu un droit et un enjeu politique (Uruguay en 2004, ONU en 2010).",
            "Exprimer l'inquiétude, l'urgence et la proposition (me preocupa que, es urgente que + subjonctif, habría que + infinitif).",
          ],
          course: [
            {
              heading: "L'eau en Espagne : une ressource inégalement répartie",
              paragraphs: [
                "L'Espagne présente un fort contraste entre une « España húmeda », au nord (Galice, Asturies, Cantabrie, Pays basque), aux pluies abondantes, et une « España seca », au centre et au sud-est, où les sécheresses (las sequías) sont fréquentes. Pour stocker l'eau, le pays a construit au XXe siècle un très grand nombre de barrages et de réservoirs (los embalses). L'agriculture irriguée (el regadío) est de loin le premier consommateur d'eau : elle produit des fruits et des légumes vendus dans toute l'Europe.",
                "Pour répondre au manque d'eau, plusieurs solutions sont débattues : les transferts d'eau entre bassins (los trasvases), le dessalement de l'eau de mer (las desaladoras, nombreuses sur la côte méditerranéenne), la réutilisation des eaux usées traitées (las aguas depuradas) et les économies, notamment l'irrigation au goutte-à-goutte (el riego por goteo). Chaque solution a un coût économique, énergétique ou écologique.",
              ],
              box: { label: "Vocabulaire", text: "el agua (nom féminin : el agua potable, las aguas) · la sequía : la sécheresse · la escasez : la pénurie · el embalse : le réservoir · el regadío : l'agriculture irriguée · el acuífero : la nappe d'eau souterraine · el trasvase : le transfert d'eau · la desaladora : l'usine de dessalement." },
            },
            {
              heading: "Des conflits en Espagne : partager l'eau",
              paragraphs: [
                "Le transfert Tajo-Segura, en service depuis 1979, conduit une partie de l'eau du cours supérieur du Tage vers le bassin du Segura, dans le sud-est (Murcie, Alicante, Almería). Il a permis le développement d'une agriculture intensive très productive, mais il oppose depuis des décennies les régions qui reçoivent l'eau et celles qui la cèdent, comme la Castille-La Manche. Au début des années 2000, un projet de grand transfert de l'Èbre vers la côte méditerranéenne a provoqué de fortes manifestations en Aragon et en Catalogne ; il a été abandonné en 2004.",
                "Les zones humides souffrent aussi. Doñana, en Andalousie, parc national depuis 1969 et inscrit au patrimoine mondial de l'Unesco en 1994, voit son aquifère surexploité, notamment par des puits, parfois illégaux, qui irriguent les cultures de fruits rouges. La lagune côtière du Mar Menor, à Murcie, polluée par les nitrates d'origine agricole, a connu des épisodes de mortalité massive de poissons ; en 2022, une loi issue d'une initiative populaire lui a reconnu la personnalité juridique, une première en Europe.",
              ],
              box: { label: "Repère", text: "1969 : création du parc national de Doñana · 1979 : mise en service du transfert Tajo-Segura · 2004 : abandon du transfert de l'Èbre · 2022 : personnalité juridique du Mar Menor." },
            },
            {
              heading: "En Amérique latine : l'eau, bien commun ou marchandise ?",
              paragraphs: [
                "En 2000, à Cochabamba, en Bolivie, la gestion de l'eau de la ville est confiée à un consortium privé international, Aguas del Tunari, et les tarifs augmentent fortement. Habitants, paysans et syndicats, réunis dans une « Coordinadora », manifestent pendant des semaines : c'est la « guerra del agua ». En avril 2000, le gouvernement met fin au contrat. Le film « También la lluvia » d'Icíar Bollaín (2010) évoque ces événements à travers le tournage d'un film sur Christophe Colomb.",
                "Au Chili, le Code des eaux de 1981, adopté sous la dictature de Pinochet, a créé des droits d'usage de l'eau privés, qui peuvent être achetés et vendus séparément de la terre. Dans des vallées touchées par la sécheresse, comme la province de Petorca, des habitants ont dénoncé le fait que de grandes plantations d'avocatiers disposaient d'eau alors qu'eux-mêmes étaient approvisionnés par camions-citernes. Une réforme adoptée en 2022 a donné la priorité à la consommation humaine.",
                "L'accès à l'eau est aussi devenu un droit. En 2004, les Uruguayens ont approuvé par plébiscite une réforme constitutionnelle qui fait de l'accès à l'eau potable et à l'assainissement un droit humain fondamental et réserve ce service à des organismes publics. En 2010, l'Assemblée générale des Nations unies, sur une proposition de la Bolivie, a reconnu le droit à l'eau potable et à l'assainissement comme un droit de l'homme.",
              ],
              box: { label: "Définition", text: "Un bien commun : une ressource partagée dont l'usage concerne toute la collectivité. Le débat oppose ceux qui voient l'eau comme un bien commun et un droit, et ceux qui défendent sa gestion par le marché pour financer les infrastructures." },
            },
            {
              heading: "Exprimer l'inquiétude et proposer des solutions",
              paragraphs: [
                "Pour exprimer l'inquiétude : « Me preocupa que », « Temo que », « Me da miedo que », « Es alarmante que », suivis du subjonctif : « Me preocupa que los acuíferos se sequen ». Pour exprimer l'urgence et l'obligation : « Es urgente que », « Es necesario que » + subjonctif, ou « Hay que » + infinitif : « Es urgente que reduzcamos el consumo », « Hay que reutilizar el agua ».",
                "Pour proposer avec prudence, employez le conditionnel : « Habría que modernizar el riego », « Sería mejor cultivar productos que necesiten menos agua », « Podríamos instalar sistemas de goteo ». Pour envisager les conséquences : « Si no hacemos nada, los ríos se secarán ». Pour présenter deux intérêts opposés : « Por un lado, los agricultores necesitan agua; por otro, hay que proteger los ecosistemas ».",
              ],
              box: { label: "Règle", text: "Me preocupa que, temo que, es urgente que, es necesario que + subjonctif. Hay que + infinitif. Habría que, sería mejor, podríamos + infinitif (proposer). Si no hacemos nada + futur (conséquence)." },
            },
          ],
          keyPoints: [
            "« El agua » est un nom féminin : el agua fría, las aguas (« el » devant un « a » tonique).",
            "España húmeda au nord, España seca au centre et au sud-est ; le regadío est le premier consommateur d'eau.",
            "Transfert Tajo-Segura (1979) : conflit entre les régions qui cèdent l'eau et celles qui la reçoivent.",
            "Doñana (aquifère surexploité) et le Mar Menor (personnalité juridique en 2022) : des écosystèmes menacés.",
            "Cochabamba, 2000 : la guerra del agua contre la privatisation ; film « También la lluvia » (Icíar Bollaín, 2010).",
            "Uruguay (2004) et ONU (2010) : l'accès à l'eau devient un droit humain.",
            "Me preocupa que, es urgente que + subjonctif ; habría que, sería mejor + infinitif pour proposer.",
          ],
          example: {
            statement: "Lisez ces deux témoignages (textes écrits pour l'exercice). Antonio, agriculteur à Murcie : « Sin el trasvase, mi familia no podría vivir de la tierra. Gracias a esta agua producimos lechugas y limones para toda Europa. » Marta, habitante d'un village au bord d'un réservoir de la tête du Tage : « Cuando se llevan el agua, el embalse se queda casi vacío y los turistas dejan de venir. Me preocupa que nuestro pueblo muera. » 1) Présentez les deux points de vue. 2) Relevez les marques linguistiques de chaque point de vue. 3) Rédigez en espagnol une phrase qui résume le conflit de façon équilibrée.",
            solution: [
              "1) Antonio défend le transfert Tajo-Segura : sans lui, l'agriculture irriguée qui fait vivre sa famille serait impossible. Marta s'y oppose : le transfert vide le réservoir de son village, ce qui fait fuir les touristes et menace l'économie locale.",
              "2) Antonio : une hypothèse au conditionnel (« no podría vivir ») et un argument économique (« para toda Europa »). Marta : une conséquence concrète (« el embalse se queda casi vacío ») et une crainte avec « me preocupa que » + subjonctif « muera ».",
              "3) Pour équilibrer, on présente les deux intérêts avec « por un lado... por otro... ».",
              "Réponse : « Por un lado, los agricultores del sureste necesitan el agua del trasvase para vivir; por otro, los pueblos que la ceden temen perder su economía y su futuro. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec : sequía, embalse, regadío, acuífero, potable, desaladora. a) Cuando no llueve durante meses, hay una ... b) El agua de los ríos se guarda en un ... c) El ... de Doñana está sobreexplotado. d) Una ... transforma el agua del mar en agua dulce. e) En algunas zonas rurales, todavía falta agua ... f) El ... consume mucha agua para producir frutas y verduras.",
              hint: "Repérez le genre de l'article (una, un, el) et le sens de la phrase : stockage, manque, nappe souterraine, eau de mer, eau à boire, agriculture.",
              solution: [
                "a) Un manque de pluie prolongé : « una sequía ». b) Le lieu de stockage : « un embalse ».",
                "c) La nappe d'eau souterraine : « El acuífero ». d) L'usine qui dessale l'eau de mer : « Una desaladora ».",
                "e) L'eau que l'on peut boire : « agua potable ». f) L'agriculture irriguée : « El regadío ».",
                "Réponses : a) sequía b) embalse c) acuífero d) desaladora e) potable f) regadío.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez le verbe entre parenthèses ou laissez-le à l'infinitif : a) Me preocupa que el nivel de los embalses (bajar) cada verano. b) Es urgente que los gobiernos (tomar) medidas. c) Hay que (ahorrar) agua. d) Habría que (modernizar) el riego. e) Si no (hacer, nosotros) nada, los ríos (secarse). f) Temo que el Mar Menor no (recuperarse).",
              hint: "Après une expression de crainte ou d'urgence suivie de « que » : subjonctif. Après « hay que » et « habría que » : infinitif. Après « si » : présent de l'indicatif.",
              solution: [
                "a) Crainte (me preocupa que) : subjonctif, « baje ». b) Urgence (es urgente que) : subjonctif, « tomen ».",
                "c) « Hay que » + infinitif : « ahorrar ». d) « Habría que » + infinitif : « modernizar ».",
                "e) « Si » + présent de l'indicatif, puis futur : « hacemos », « se secarán ».",
                "f) Crainte (temo que) : subjonctif, « se recupere ».",
                "Réponses : a) baje b) tomen c) ahorrar d) modernizar e) hacemos, se secarán f) se recupere.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce texte (texte écrit pour l'exercice ; lieu imaginaire, données fictives) : « En el valle de San Isidro, en el centro de Chile, casi no llueve desde hace años. En las colinas, las plantaciones de paltas siguen verdes gracias a pozos muy profundos. Abajo, en el pueblo, las familias reciben el agua en camiones cisterna: cincuenta litros por persona y por día. “No estamos contra los agricultores”, explica Elena, presidenta de una asociación de vecinos, “pero el agua para beber debe ser lo primero”. El dueño de una plantación responde que da trabajo a cien personas del valle y que respeta la ley. » 1) Résumez la situation en français en trois phrases. 2) Écrivez au maire une lettre formelle en espagnol (90 à 110 mots) : exprimez votre inquiétude, reconnaissez l'argument des agriculteurs et proposez deux solutions.",
              hint: "« La palta » est le mot employé au Chili, au Pérou et en Argentine pour l'avocat (« el aguacate » en Espagne et au Mexique). Dans une lettre formelle, vouvoyez avec « usted » et employez « Estimado señor alcalde » et « Atentamente ».",
              solution: [
                "1) Résumé : dans une vallée chilienne frappée par une longue sécheresse, les plantations d'avocatiers restent irriguées grâce à des puits profonds, tandis que les habitants du village sont approvisionnés par camions-citernes. Une représentante des habitants affirme que l'eau potable doit passer en premier. Un propriétaire répond qu'il crée des emplois et respecte la loi.",
                "2) Plan de la lettre : formule d'appel ; présentation ; inquiétude (me preocupa que + subjonctif) ; concession (los agricultores dan trabajo; sin embargo...) ; deux propositions (es urgente que, habría que, podríamos) ; formule finale.",
                "Exemple de lettre : « Estimado señor alcalde: Le escribo como joven vecino del valle de San Isidro. Me preocupa mucho que las familias del pueblo dependan de los camiones cisterna mientras las plantaciones siguen regando sus árboles. No estamos contra los agricultores, que dan trabajo a muchas personas; sin embargo, el agua para beber debe ser la prioridad. Por eso, es urgente que la municipalidad controle el uso de los pozos. Además, habría que ayudar a los agricultores a instalar sistemas de riego por goteo, que consumen menos agua. Espero que tenga en cuenta estas propuestas. Atentamente, Lucas Martin »",
                "Vérification : environ 95 mots ; registre formel (le escribo, tenga en cuenta) ; au Chili, la commune est « la municipalidad » ; subjonctifs justifiés : dependan (me preocupa que), controle (es urgente que), tenga (espero que) ; deux propositions : contrôle des puits, goutte-à-goutte.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Création du parc national de Doñana",
              "Mise en service du transfert Tajo-Segura",
              "Adoption du Code des eaux chilien",
              "Guerra del agua à Cochabamba",
              "Plébiscite uruguayen sur le droit à l'eau",
              "Reconnaissance du droit à l'eau par l'ONU",
              "Personnalité juridique du Mar Menor",
            ],
          },
          quiz: [
            { q: "Que signifie « el regadío » ?", options: ["la sécheresse prolongée", "la pluie d'orage", "le barrage hydroélectrique", "l'agriculture irriguée"], answer: 3, why: "« El regadío » désigne les terres et l'agriculture irriguées, de « regar » (arroser, irriguer)." },
            { q: "Comment appelle-t-on le conflit de Cochabamba en 2000 ?", options: ["la guerra del agua", "une grande inondation", "la construction d'un barrage", "un tremblement de terre"], answer: 0, why: "La « guerra del agua » a opposé les habitants à la privatisation du service de l'eau, jusqu'à la rupture du contrat en avril 2000." },
            { q: "Quelle phrase est correcte ?", options: ["La agua está fría.", "El agua está frío.", "El agua está fría.", "La agua está frío."], answer: 2, why: "« Agua » est féminin : l'adjectif est féminin (fría), mais l'article est « el » devant le « a » tonique." },
            { q: "Complétez : « Es urgente que los gobiernos ... medidas. »", options: ["toman", "tomen", "tomarán", "tomar"], answer: 1, why: "« Es urgente que » exprime un jugement d'urgence : il est suivi du subjonctif." },
            { q: "Quel pays a inscrit en 2004, par plébiscite, le droit à l'eau dans sa Constitution ?", options: ["le Chili", "l'Espagne", "l'Uruguay", "la Bolivie"], answer: 2, why: "En 2004, les Uruguayens ont approuvé une réforme constitutionnelle faisant de l'accès à l'eau un droit humain fondamental." },
          ],
          trap: "Écrire « la agua » ou « el agua está frío ». « Agua » est un nom féminin qui prend l'article « el » au singulier parce qu'il commence par un « a » tonique ; l'adjectif reste féminin (el agua fría) et le pluriel reprend « las » (las aguas).",
          method: "Pour chaque conflit de l'eau, faites une fiche ¿Quién? ¿Dónde? ¿Cuándo? ¿Por qué? et notez les deux camps en présence. Dans une expression écrite ou orale, présentez toujours les deux intérêts (por un lado..., por otro...) avant de proposer une solution au conditionnel.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'proteger-biodiversidad',
          title: 'Protéger la biodiversité : de l\'Amazonie à la Patagonie',
          minutes: 35,
          objectives: [
            "Mobiliser le lexique de la biodiversité et de sa protection (la especie en peligro de extinción, la deforestación, el parque nacional, la reserva).",
            "Situer et caractériser de grands espaces naturels hispano-américains : l'Amazonie, les Galápagos, les Andes, la Patagonie.",
            "Expliquer des réponses juridiques et citoyennes : droits de la nature en Équateur, fleuve Atrato et Amazonie colombienne sujets de droits, défenseurs de l'environnement.",
            "Exprimer le but avec « para » + infinitif et « para que » + subjonctif pour proposer des mesures.",
          ],
          course: [
            {
              heading: "L'Amazonie : une forêt partagée et menacée",
              paragraphs: [
                "La forêt amazonienne (la selva amazónica, la Amazonía) s'étend sur neuf pays et territoires : le Brésil, qui en possède la plus grande partie, cinq pays hispanophones (la Bolivie, la Colombie, l'Équateur, le Pérou, le Venezuela), ainsi que le Guyana, le Suriname et la Guyane française. C'est la plus grande forêt tropicale du monde et l'un des plus grands réservoirs de biodiversité de la planète ; elle stocke d'énormes quantités de carbone et joue un rôle majeur dans le cycle de l'eau du continent.",
                "Elle est menacée par la déforestation (la deforestación), liée à l'élevage, à l'agriculture, à l'exploitation illégale du bois (la tala ilegal), à l'orpaillage illégal (la minería ilegal), qui pollue les rivières au mercure, et aux incendies (los incendios). Ces menaces touchent aussi les peuples autochtones qui y vivent. Le romancier chilien Luis Sepúlveda, dans « Un viejo que leía novelas de amor » (1989), met en scène un vieil homme de l'Amazonie équatorienne, qui a appris des Shuars à respecter la forêt, face à des étrangers qui la saccagent.",
              ],
              box: { label: "Vocabulaire", text: "la selva : la forêt tropicale · la especie en peligro de extinción : l'espèce menacée d'extinction · la deforestación · la tala ilegal : l'abattage illégal · la minería ilegal · el guardaparque : le garde du parc · el ecosistema · la biodiversidad." },
            },
            {
              heading: "Des Galápagos aux Andes : des espèces uniques",
              paragraphs: [
                "Les îles Galápagos, archipel volcanique de l'Équateur dans le Pacifique, abritent de nombreuses espèces endémiques : tortues géantes, iguanes marins, pinsons. Charles Darwin y a fait escale en 1835, et ses observations ont nourri sa théorie de l'évolution. Parc national depuis 1959, l'archipel fait partie en 1978 des tout premiers sites inscrits au patrimoine mondial de l'Unesco ; le tourisme y est strictement encadré.",
                "Dans les Andes, le condor des Andes (el cóndor andino), l'un des plus grands oiseaux volants du monde, figure sur les armoiries de la Bolivie, du Chili, de la Colombie et de l'Équateur. La vigogne (la vicuña), cousine sauvage du lama, a été menacée par la chasse pour sa laine très fine ; des programmes de protection ont permis de reconstituer ses populations, et elle figure sur les armoiries du Pérou.",
              ],
              box: { label: "Définition", text: "Une espèce endémique : une espèce qui ne vit naturellement que dans une région donnée. Les Galápagos comptent de nombreuses espèces endémiques, comme les iguanes marins ou les tortues géantes." },
            },
            {
              heading: "La Patagonie : glaciers, steppe et océan",
              paragraphs: [
                "La Patagonie, partagée entre l'Argentine et le Chili, s'étend au sud du continent jusqu'à la Terre de Feu : glaciers, fjords, steppe balayée par le vent. Le parc national Los Glaciares, en Argentine, inscrit au patrimoine mondial en 1981, abrite le glacier Perito Moreno. Au Chili, le parc national Torres del Paine est célèbre pour ses sommets de granite. Sur la côte atlantique argentine, la péninsule de Valdés, inscrite en 1999, accueille la baleine franche australe, des éléphants de mer et des colonies de manchots de Magellan.",
                "La protection y prend des formes variées : création de parcs nationaux, réintroduction d'espèces, encadrement du tourisme. Les Américains Douglas et Kristine Tompkins ont acheté de vastes terres au Chili et en Argentine, puis en ont fait don aux États pour créer ou agrandir des parcs nationaux. Le cerf huemul (el huemul), présent sur les armoiries du Chili aux côtés du condor, reste une espèce en danger.",
              ],
              box: { label: "Repère", text: "Patrimoine mondial de l'Unesco : Galápagos (1978), Los Glaciares (1981), péninsule de Valdés (1999). Sur les armoiries : condor (Bolivie, Chili, Colombie, Équateur), huemul (Chili), vigogne (Pérou)." },
            },
            {
              heading: "Donner des droits à la nature",
              paragraphs: [
                "En 2008, l'Équateur est devenu le premier pays à reconnaître dans sa Constitution des droits à la nature, appelée aussi Pacha Mama : le droit d'exister et de se régénérer. En Colombie, la Cour constitutionnelle a reconnu en 2016 le fleuve Atrato comme sujet de droits, et la Cour suprême a fait de même en 2018 pour l'Amazonie colombienne, à la suite d'une action en justice menée par des enfants et des jeunes. En 2023, une majorité d'Équatoriens a voté par référendum l'arrêt de l'exploitation pétrolière dans une zone du parc national Yasuní.",
                "Défendre la nature peut coûter cher. La Hondurienne Berta Cáceres, militante du peuple lenca opposée à un projet de barrage sur le fleuve Gualcarque, a reçu en 2015 le prix Goldman pour l'environnement ; elle a été assassinée en 2016. En 2024, la Colombie a accueilli à Cali la COP16, la conférence des Nations unies sur la diversité biologique.",
              ],
              box: { label: "À retenir", text: "Équateur, 2008 : droits de la nature dans la Constitution. Colombie : fleuve Atrato (2016) et Amazonie colombienne (2018) sujets de droits. Équateur, 2023 : référendum sur le pétrole du Yasuní." },
            },
            {
              heading: "Proposer des mesures : exprimer le but",
              paragraphs: [
                "Pour proposer une mesure et son objectif, l'espagnol emploie « para » + infinitif quand le sujet ne change pas ou reste général : « Hay que plantar árboles para frenar la erosión ». Si la seconde action a un autre sujet, on emploie « para que » + subjonctif : « Los gobiernos deben crear reservas para que los jaguares sobrevivan ». Dans un registre plus soutenu : « con el fin de » + infinitif, « a fin de que » + subjonctif.",
                "Verbes utiles : proteger, conservar, preservar, reforestar, prohibir, sancionar, vigilar, concienciar (sensibiliser, en Espagne ; « concientizar » en Amérique latine), extinguirse (disparaître, pour une espèce). Pour poser un dilemme : « ¿Cómo conciliar el desarrollo económico y la protección de la naturaleza? ».",
              ],
              box: { label: "Règle", text: "Para + infinitif : même sujet ou sujet général (hay que proteger la selva para conservar la biodiversidad). Para que + subjonctif : sujet différent (hay que crear reservas para que los animales sobrevivan)." },
            },
          ],
          keyPoints: [
            "L'Amazonie s'étend sur neuf pays et territoires, dont cinq hispanophones : Bolivie, Colombie, Équateur, Pérou, Venezuela.",
            "Menaces : deforestación, tala ilegal, minería ilegal, incendios ; elles touchent aussi les peuples autochtones.",
            "Galápagos (Équateur) : espèces endémiques, escale de Darwin en 1835, patrimoine mondial en 1978.",
            "Patagonie : Los Glaciares (Perito Moreno), Torres del Paine, péninsule de Valdés ; huemul et condor sur les armoiries du Chili.",
            "Droits de la nature : Équateur (Constitution de 2008), Colombie (fleuve Atrato en 2016, Amazonie en 2018).",
            "Para + infinitif (même sujet) ; para que + subjonctif (sujet différent).",
          ],
          example: {
            statement: "Complétez avec « para » + infinitif ou « para que » + subjonctif, et justifiez : a) Hay que limitar el turismo ... (proteger) las islas. b) Los guardaparques vigilan ... nadie (cazar) vicuñas. c) Los científicos estudian los glaciares ... (entender) el cambio climático. d) Hay que reforestar ... los animales (encontrar) refugio.",
            solution: [
              "a) Le sujet reste général (on limite, on protège) : « para proteger las islas ».",
              "b) Les gardes surveillent, mais le sujet de « cazar » est « nadie » : sujet différent, donc « para que nadie cace vicuñas » (cazar → cace, le « z » devient « c » devant « e »).",
              "c) Les scientifiques étudient et comprennent : même sujet, « para entender el cambio climático ».",
              "d) On reboise, mais ce sont les animaux qui trouvent refuge : « para que los animales encuentren refugio » (encontrar → encuentre, diphtongue).",
              "Réponse : a) para proteger b) para que nadie cace c) para entender d) para que los animales encuentren.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol : a) l'espèce menacée d'extinction b) la déforestation c) l'abattage illégal d) le garde du parc e) reboiser f) sensibiliser (deux variantes).",
              hint: "Plusieurs mots ressemblent au français ; attention à « tala » (abattage) et aux deux variantes de « sensibiliser ».",
              solution: [
                "a) la especie en peligro de extinción. b) la deforestación.",
                "c) la tala ilegal. d) el guardaparque (on rencontre aussi « el guardaparques »).",
                "e) reforestar. f) concienciar (Espagne) ou concientizar (Amérique latine).",
                "Réponses : la especie en peligro de extinción, la deforestación, la tala ilegal, el guardaparque, reforestar, concienciar / concientizar.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce témoignage (texte écrit pour l'exercice) : « Me llamo Ignacio y soy guardaparque en la Patagonia chilena desde hace quince años. Cuando empecé, casi no veíamos huemules; hoy vemos algunos más, porque controlamos a los perros y a los cazadores. Pero tengo miedo de que el turismo crezca sin control: cada verano llegan más visitantes, y algunos dejan basura o salen de los senderos. No quiero que se prohíba el turismo, porque gracias a él los jóvenes del pueblo tienen trabajo. Lo que pido es que los visitantes respeten las normas. » 1) Qui parle, où et depuis quand ? 2) Comment la situation du huemul a-t-elle évolué, et pourquoi ? 3) Quelle crainte Ignacio exprime-t-il ? Relevez le subjonctif et justifiez-le. 4) Veut-il interdire le tourisme ? Pourquoi ? 5) Que demande-t-il ?",
              hint: "Repérez les marqueurs de temps (cuando empecé, hoy) et les verbes qui expriment un sentiment ou une demande.",
              solution: [
                "1) Ignacio, garde d'un parc de la Patagonie chilienne, exerce ce métier depuis quinze ans (« desde hace quince años »).",
                "2) À ses débuts, on ne voyait presque pas de huemuls ; on en voit un peu plus aujourd'hui grâce au contrôle des chiens et des chasseurs.",
                "3) Il craint que le tourisme augmente sans contrôle (déchets, sorties des sentiers). « Crezca » (de crecer) est au subjonctif après « tener miedo de que », expression de crainte.",
                "4) Non (« No quiero que se prohíba el turismo ») : le tourisme fait travailler les jeunes du village. « Se prohíba » est au subjonctif après « no quiero que ».",
                "5) Il demande que les visiteurs respectent les règles (« pido que » + subjonctif « respeten »).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Préparez par écrit une prise de parole en continu d'environ deux minutes (140 à 160 mots) : présentez un espace naturel étudié dans la leçon, la menace qui pèse sur lui et une réponse apportée, puis donnez votre avis sur la question « ¿Se puede conciliar el desarrollo y la protección de la naturaleza? ».",
              hint: "Annoncez votre sujet (Hoy voy a hablar de...), suivez quatre étapes (lieu, menace, réponse, opinion) et utilisez au moins un « para que » + subjonctif.",
              solution: [
                "Choix : le parc national Yasuní, en Équateur, car il réunit un espace, une menace (le pétrole) et une réponse démocratique (le référendum de 2023).",
                "Présentation et menace : « Hoy voy a hablar del parque nacional Yasuní, en la Amazonía ecuatoriana. Es uno de los lugares con más biodiversidad del planeta y allí viven también pueblos indígenas. El problema es que bajo la selva hay petróleo, una riqueza importante para la economía del país. Explotarlo significa abrir carreteras y pozos, lo que provoca deforestación y contaminación. »",
                "Réponse et avis : « En 2023, los ecuatorianos votaron en un referéndum para dejar el petróleo bajo tierra en una parte del parque. Me parece una decisión valiente, porque demuestra que la protección de la naturaleza también puede ser una elección democrática. »",
                "Nuance et conclusion : « Sin embargo, es cierto que el país necesita recursos. Por eso, creo que la comunidad internacional debería ayudar a los países amazónicos para que puedan proteger la selva sin renunciar a su desarrollo. En conclusión, conciliar desarrollo y naturaleza es difícil, pero no imposible. »",
                "Vérification : environ 150 mots ; plan en quatre étapes ; « para que puedan » (sujet différent) ; opinion (me parece, creo que) et concession (sin embargo, es cierto que) ; faits conformes au cours.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque lieu à sa description.",
            pairs: [
              { left: "Las Galápagos", right: "Archipel équatorien aux nombreuses espèces endémiques" },
              { left: "El Perito Moreno", right: "Glacier du parc Los Glaciares, en Argentine" },
              { left: "La península Valdés", right: "Baleines franches australes et manchots de Magellan" },
              { left: "El Yasuní", right: "Parc amazonien d'Équateur, référendum de 2023" },
              { left: "El río Atrato", right: "Fleuve colombien reconnu sujet de droits en 2016" },
              { left: "Torres del Paine", right: "Parc national de la Patagonie chilienne" },
            ],
          },
          quiz: [
            { q: "Combien de pays hispanophones partagent la forêt amazonienne ?", options: ["deux", "trois", "cinq", "neuf"], answer: 2, why: "La Bolivie, la Colombie, l'Équateur, le Pérou et le Venezuela ; l'Amazonie s'étend en tout sur neuf pays et territoires." },
            { q: "Quel pays a, le premier, reconnu des droits à la nature dans sa Constitution, en 2008 ?", options: ["l'Équateur", "la Colombie", "le Pérou", "le Chili"], answer: 0, why: "La Constitution équatorienne de 2008 reconnaît des droits à la nature, ou Pacha Mama." },
            { q: "Complétez : « Hay que crear reservas para que los jaguares ... »", options: ["sobreviven", "sobrevivir", "sobrevivan", "sobrevivirán"], answer: 2, why: "Le sujet change (on crée, les jaguars survivent) : « para que » + subjonctif." },
            { q: "Que signifie « una especie endémica » ?", options: ["une espèce disparue depuis peu", "une espèce importée par l'homme", "une espèce élevée par les paysans", "une espèce propre à une région"], answer: 3, why: "Une espèce endémique ne vit naturellement que dans une région donnée, comme les iguanes marins des Galápagos." },
            { q: "Qui était Berta Cáceres ?", options: ["une militante lenca du Honduras", "une ancienne présidente du Chili", "une romancière argentine célèbre", "une biologiste espagnole"], answer: 0, why: "Militante du peuple lenca opposée à un barrage, prix Goldman en 2015, elle a été assassinée en 2016." },
          ],
          trap: "Employer « para » + infinitif quand le sujet change (« para los animales sobrevivir ») : si la seconde action a un autre sujet, il faut « para que » + subjonctif : « para que los animales sobrevivan ».",
          method: "Associez chaque espace naturel à une carte mentale à quatre branches : localisation, espèce emblématique, menace, mesure de protection. Pour l'oral, entraînez-vous à présenter un espace en quatre phrases, une par branche, puis ajoutez votre avis.",
        },
      ],
    },
    {
      id: 'espace-andin',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'cordillera-andes',
          title: 'La cordillère des Andes : un espace d\'altitude',
          minutes: 30,
          objectives: [
            "Situer la cordillère des Andes, les pays qu'elle traverse et ses grands repères (Aconcagua, Altiplano, lac Titicaca, salar d'Uyuni).",
            "Décrire l'étagement des milieux et des activités en fonction de l'altitude (los pisos térmicos).",
            "Mobiliser le lexique du relief, du climat et de l'adaptation à l'altitude (la cordillera, el altiplano, el páramo, la puna, el soroche).",
            "Comparer à l'aide des comparatifs et des superlatifs (más... que, tan... como, el más alto de, altísimo).",
          ],
          course: [
            {
              heading: "Une colonne vertébrale de plus de 7 000 kilomètres",
              paragraphs: [
                "La cordillère des Andes (la cordillera de los Andes) longe toute la façade pacifique de l'Amérique du Sud sur plus de 7 000 kilomètres, du Venezuela jusqu'à la Terre de Feu : c'est la plus longue chaîne de montagnes continentale du monde. Elle traverse sept pays : le Venezuela, la Colombie, l'Équateur, le Pérou, la Bolivie, le Chili et l'Argentine. L'axe 6 du programme la présente comme la « colonne vertébrale » du continent, parce qu'elle structure le relief, les climats, le peuplement et l'histoire de ces pays.",
                "Les Andes sont une chaîne jeune et active, née de la subduction de la plaque de Nazca, une plaque océanique, sous la plaque sud-américaine. Cela explique les nombreux volcans (le Cotopaxi, en Équateur, par exemple) et les séismes fréquents : celui de Valdivia, au Chili, en 1960, est le plus puissant jamais enregistré. Le point culminant, l'Aconcagua (6 961 m), en Argentine, est le plus haut sommet du monde hors d'Asie. Le Chimborazo, en Équateur (6 263 m), a une autre particularité : à cause du renflement de la Terre à l'équateur, son sommet est le point de la surface terrestre le plus éloigné du centre de la planète.",
              ],
              box: { label: "Repère", text: "Sept pays : Venezuela, Colombia, Ecuador, Perú, Bolivia, Chile, Argentina. Plus de 7 000 km de long. Point culminant : l'Aconcagua (6 961 m, Argentine). Origine : subduction de la plaque de Nazca sous la plaque sud-américaine." },
            },
            {
              heading: "L'Altiplano et les grands repères des Andes centrales",
              paragraphs: [
                "Dans les Andes centrales, entre deux cordillères, s'étend l'Altiplano, un haut plateau situé en moyenne à plus de 3 500 mètres d'altitude et partagé entre le Pérou, la Bolivie, le Chili et l'Argentine. On y trouve le lac Titicaca (à environ 3 800 m), partagé entre le Pérou et la Bolivie, souvent présenté comme le plus haut lac navigable du monde ; les Uros y vivent sur des îles flottantes faites de roseaux (la totora). Plus au sud, le salar d'Uyuni, en Bolivie, est le plus grand désert de sel du monde ; son sous-sol contient d'importantes réserves de lithium.",
                "Les villes andines sont souvent très hautes. La Paz, siège du gouvernement bolivien (la capitale constitutionnelle est Sucre), se trouve à plus de 3 600 mètres ; Quito, capitale de l'Équateur, à environ 2 850 mètres ; Bogotá, capitale de la Colombie, à environ 2 600 mètres ; Cusco, ancienne capitale des Incas, à environ 3 400 mètres. À l'ouest, le désert d'Atacama, au Chili, compte parmi les régions les plus arides de la planète.",
              ],
              box: { label: "Vocabulaire", text: "la cordillera : la chaîne de montagnes · la cumbre, la cima : le sommet · el altiplano : le haut plateau · el volcán · el terremoto, el sismo : le séisme · el salar : le désert de sel · el glaciar · el valle : la vallée · la ladera : le versant." },
            },
            {
              heading: "Les étages : vivre selon l'altitude",
              paragraphs: [
                "Dans les Andes tropicales, le climat et la végétation changent avec l'altitude : on parle d'étages, les « pisos térmicos ». À titre indicatif : la « tierra caliente » (en dessous de 1 000 m environ) porte des cultures tropicales comme la banane ou la canne à sucre ; la « tierra templada » (jusqu'à 2 000 m environ) convient au café et au maïs ; la « tierra fría » (de 2 000 à 3 000 m environ) aux pommes de terre et aux céréales, et accueille de grandes villes comme Bogotá ou Quito. Plus haut s'étendent les prairies d'altitude, le « páramo » humide au nord, la « puna » plus sèche au centre, domaine de l'élevage, puis les neiges éternelles.",
                "Les sociétés andines ont su tirer parti de cette diversité. L'anthropologue John Murra a montré que les communautés exploitaient plusieurs étages à la fois pour obtenir des produits variés : c'est le « contrôle vertical » des étages écologiques. La pomme de terre (la papa), domestiquée dans les Andes, y existe en milliers de variétés ; les paysans la conservent sous forme de « chuño », séchée par le gel et le soleil. Les terrasses de culture (los andenes) retiennent la terre et l'eau sur les pentes.",
              ],
              box: { label: "À retenir", text: "De bas en haut : tierra caliente (banane, canne à sucre) → tierra templada (café, maïs) → tierra fría (pomme de terre, céréales, villes) → páramo ou puna (élevage) → nieves perpetuas. Les limites varient selon la latitude et l'exposition." },
            },
            {
              heading: "S'adapter à l'altitude et comparer",
              paragraphs: [
                "En altitude, la pression de l'air est plus faible et chaque inspiration apporte moins d'oxygène : le voyageur qui monte trop vite peut souffrir du mal des montagnes, appelé « soroche » dans les Andes (maux de tête, fatigue, essoufflement, nausées). On conseille de monter progressivement, de se reposer et de boire beaucoup ; dans les pays andins, on offre souvent une infusion de feuilles de coca (el mate de coca). Les populations qui vivent en altitude depuis des générations présentent des adaptations physiologiques à ce milieu.",
                "Les Andes sont le domaine des camélidés sud-américains : deux espèces domestiques, le lama (la llama), utilisé pour le transport et la laine, et l'alpaga (la alpaca), élevé pour sa laine fine ; deux espèces sauvages, la vigogne (la vicuña) et le guanaco. Pour parler de ces records et de ces contrastes, l'espagnol utilise les comparatifs et les superlatifs : « El Aconcagua es más alto que el Chimborazo », « El Chimborazo no es tan alto como el Aconcagua », « El Titicaca es el lago navegable más alto del mundo ».",
              ],
              box: { label: "Règle", text: "Supériorité : más + adjectif + que. Infériorité : menos + adjectif + que. Égalité : tan + adjectif + como. Superlatif : el, la, los, las más + adjectif + de (el más alto del mundo). Superlatif absolu : altísimo (très haut). Irréguliers : mayor, menor, mejor, peor." },
            },
          ],
          keyPoints: [
            "Les Andes : plus de 7 000 km et sept pays, du Venezuela à la Terre de Feu ; la plus longue chaîne continentale du monde.",
            "Origine : subduction de la plaque de Nazca ; volcans et séismes (Valdivia, 1960).",
            "Aconcagua (6 961 m) : plus haut sommet hors d'Asie ; Altiplano, lac Titicaca, salar d'Uyuni (lithium).",
            "La Paz, siège du gouvernement bolivien, à plus de 3 600 m ; Sucre est la capitale constitutionnelle.",
            "Pisos térmicos : tierra caliente, templada, fría, puis páramo ou puna, puis neiges éternelles.",
            "Soroche : mal des montagnes. Camélidés : llama, alpaca (domestiques) ; vicuña, guanaco (sauvages).",
            "Comparer : más / menos... que, tan... como, el más... de, -ísimo.",
          ],
          example: {
            statement: "À partir des données du cours, rédigez en espagnol quatre phrases : a) un comparatif de supériorité entre l'Aconcagua (6 961 m) et le Chimborazo (6 263 m) ; b) un comparatif d'égalité à la forme négative avec les mêmes sommets ; c) un superlatif sur le lac Titicaca ; d) un superlatif absolu sur le désert d'Atacama.",
            solution: [
              "a) Supériorité : más + adjectif + que : « El Aconcagua es más alto que el Chimborazo ».",
              "b) Égalité niée : no + tan + adjectif + como : « El Chimborazo no es tan alto como el Aconcagua ».",
              "c) Superlatif relatif : article + nom + más + adjectif + de (contracté en « del » devant « el ») : « El Titicaca es el lago navegable más alto del mundo ».",
              "d) Superlatif absolu : on ajoute « -ísimo » à l'adjectif sans sa voyelle finale : árido → aridísimo : « El desierto de Atacama es aridísimo ».",
              "Réponse : a) El Aconcagua es más alto que el Chimborazo. b) El Chimborazo no es tan alto como el Aconcagua. c) El Titicaca es el lago navegable más alto del mundo. d) El desierto de Atacama es aridísimo.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec : cordillera, altiplano, salar, soroche, volcán, terremoto. a) Los Andes son la ... continental más larga del mundo. b) El ... es una extensa meseta situada a más de 3 500 metros. c) Uyuni es el ... más grande del mundo. d) Cuando llegué a La Paz, me dolía la cabeza: era el ... e) El Cotopaxi es un ... de Ecuador. f) En 1960, un fuerte ... sacudió Valdivia, en Chile.",
              hint: "Chaque mot correspond à une notion du cours : la chaîne, le plateau, le désert de sel, le mal des montagnes, la montagne qui crache de la lave, le séisme.",
              solution: [
                "a) La chaîne de montagnes : « cordillera ». b) Le haut plateau : « altiplano ».",
                "c) Le désert de sel : « salar ». d) Le mal des montagnes : « soroche ».",
                "e) Le Cotopaxi est un volcan : « volcán ». f) Le séisme de 1960 : « terremoto ».",
                "Réponses : a) cordillera b) altiplano c) salar d) soroche e) volcán f) terremoto.",
              ],
            },
            {
              level: 2,
              statement: "Classez ces étages du plus bas au plus haut et associez à chacun une production ou une activité : la puna, la tierra templada, las nieves perpetuas, la tierra caliente, la tierra fría. Rédigez ensuite deux phrases comparatives en espagnol sur ces étages.",
              hint: "Retenez l'ordre logique de la température : du chaud au froid, puis la prairie d'altitude et enfin la neige.",
              solution: [
                "1) La tierra caliente : la banane (el plátano) et la canne à sucre (la caña de azúcar).",
                "2) La tierra templada : le café et le maïs. 3) La tierra fría : la pomme de terre (la papa), les céréales et de grandes villes.",
                "4) La puna : l'élevage des lamas et des alpagas. 5) Las nieves perpetuas : pas de culture, la neige et les glaciers.",
                "Phrases possibles : « La tierra fría está más alta que la tierra templada » ; « En la puna hace más frío que en la tierra caliente » ; « La tierra templada no es tan calurosa como la tierra caliente ».",
                "Réponse : tierra caliente → tierra templada → tierra fría → puna → nieves perpetuas.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce récit (texte écrit pour l'exercice) : « Llegamos al aeropuerto de El Alto a las seis de la mañana. Al bajar del avión, sentí que me faltaba el aire y que el corazón me latía muy rápido. Un señor del aeropuerto me sonrió: “Es el soroche, señorita. Tome un mate de coca y camine despacio”. Desde El Alto, vimos La Paz abajo, en un valle inmenso, y al fondo las cumbres nevadas de la cordillera Real. Nunca había visto un paisaje tan impresionante. » 1) Où et quand la narratrice arrive-t-elle ? 2) Quels symptômes ressent-elle, et comment s'appelle ce mal ? 3) Quel conseil reçoit-elle ? À quelle forme sont « tome » et « camine » ? 4) Rédigez une carte postale de 80 à 100 mots racontant votre arrivée dans une ville andine, avec deux comparatifs et un superlatif.",
              hint: "Pour la carte postale, racontez au passé (llegué, tomé, vi), décrivez avec l'imparfait (hacía frío) et comparez votre ville d'arrivée avec une ville que vous connaissez.",
              solution: [
                "1) À l'aéroport d'El Alto, sur l'Altiplano au-dessus de La Paz, à six heures du matin.",
                "2) Elle manque d'air et son cœur bat très vite : c'est le soroche, le mal des montagnes.",
                "3) On lui conseille de boire une infusion de coca et de marcher lentement. « Tome » et « camine » sont des impératifs à la personne « usted », qui empruntent les formes du subjonctif (tomar → tome, caminar → camine) : l'homme la vouvoie (« señorita »).",
                "4) Exemple de carte postale : « ¡Hola, familia! Os escribo desde Cusco, la antigua capital de los incas. Llegué ayer en avión desde Lima. Cusco está mucho más alto que Lima: a unos 3400 metros. El primer día me dolió la cabeza, pero tomé un mate de coca y descansé. La ciudad es preciosa: las calles son más estrechas que en Francia y los muros incas son impresionantes. Ayer subí a una colina y vi la ciudad entera: ¡es el paisaje más bonito que he visto en mi vida! Mañana visitaremos el Valle Sagrado. Besos, Inès »",
                "Vérification : environ 95 mots ; comparatifs : « más alto que Lima », « más estrechas que en Francia » ; superlatif : « el paisaje más bonito que he visto » ; récit au pretérito indefinido (llegué, me dolió, tomé, subí, vi).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? La cordillère des Andes.",
            statements: [
              { text: "La cordillère des Andes traverse sept pays.", true: true, why: "Venezuela, Colombie, Équateur, Pérou, Bolivie, Chili et Argentine." },
              { text: "L'Aconcagua se trouve au Pérou.", true: false, why: "L'Aconcagua (6 961 m) se trouve en Argentine, dans la province de Mendoza." },
              { text: "La Paz est le siège du gouvernement bolivien.", true: true, why: "La Paz accueille le gouvernement ; la capitale constitutionnelle de la Bolivie est Sucre." },
              { text: "Le « soroche » est une danse traditionnelle andine.", true: false, why: "C'est le nom andin du mal des montagnes, dû au manque d'oxygène en altitude." },
              { text: "La vigogne est un camélidé domestique utilisé pour le transport.", true: false, why: "La vigogne est sauvage ; c'est le lama qui sert d'animal de bât." },
              { text: "Le lac Titicaca est partagé entre le Pérou et la Bolivie.", true: true, why: "Il se trouve sur l'Altiplano, à environ 3 800 m, à la frontière des deux pays." },
              { text: "Dans la « tierra caliente », on cultive surtout la pomme de terre.", true: false, why: "La pomme de terre est la culture de la « tierra fría » ; la « tierra caliente » porte la banane et la canne à sucre." },
              { text: "Les Andes sont nées de la subduction de la plaque de Nazca sous la plaque sud-américaine.", true: true, why: "Cette subduction explique aussi les volcans et les séismes de la cordillère." },
            ],
          },
          quiz: [
            { q: "Quel est le point culminant des Andes ?", options: ["le Chimborazo", "l'Aconcagua", "le Cotopaxi", "l'Illimani"], answer: 1, why: "L'Aconcagua (6 961 m), en Argentine, est le plus haut sommet des Amériques et du monde hors d'Asie." },
            { q: "Complétez : « El Titicaca es el lago navegable más alto ... mundo. »", options: ["que el", "como el", "del", "en el"], answer: 2, why: "Le superlatif relatif se construit avec « de » : de + el = « del »." },
            { q: "Que désigne « el soroche » ?", options: ["une flûte de roseau andine", "un vent glacial de la puna", "un plat à base de maïs", "le mal des montagnes"], answer: 3, why: "Le soroche est le mal des montagnes : maux de tête, fatigue, essoufflement en altitude." },
            { q: "Quelle est la capitale constitutionnelle de la Bolivie ?", options: ["Sucre", "La Paz", "Cochabamba", "Santa Cruz"], answer: 0, why: "Sucre est la capitale constitutionnelle ; La Paz est le siège du gouvernement." },
            { q: "Comment dit-on « le Chimborazo est moins haut que l'Aconcagua » ?", options: ["El Chimborazo es tan alto que el Aconcagua.", "El Chimborazo es menos alto que el Aconcagua.", "El Chimborazo es menos alto como el Aconcagua."], answer: 1, why: "L'infériorité se construit avec « menos + adjectif + que » ; « como » s'emploie seulement avec « tan »." },
          ],
          trap: "Mélanger les structures du comparatif : « más alto como » ou « tan alto que ». La supériorité et l'infériorité se construisent avec « que » (más alto que), l'égalité avec « como » (tan alto como). Autre confusion fréquente : présenter La Paz comme la capitale officielle de la Bolivie, alors que c'est Sucre.",
          method: "Dessinez un profil en coupe des Andes tropicales, de la côte pacifique jusqu'aux sommets : notez sur chaque étage son nom espagnol, une culture ou une activité et une ville. Ce schéma vous servira pour présenter l'axe 6 à l'oral en une minute.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'herencia-inca',
          title: 'L\'héritage inca et les cultures andines',
          minutes: 35,
          objectives: [
            "Situer l'Empire inca (el Tahuantinsuyo) dans l'espace et dans le temps, de son expansion au XVe siècle à la conquête espagnole.",
            "Expliquer l'organisation de la société inca (ayllu, mita, quipus, Qhapaq Ñan) et son rapport au territoire andin.",
            "Identifier les héritages incas et andins encore vivants (le quechua, l'Inti Raymi, la Pachamama, les terrasses de culture).",
            "Raconter un épisode historique au passé en distinguant le pretérito indefinido et l'imperfecto.",
          ],
          course: [
            {
              heading: "Le Tawantinsuyu, un empire des Andes",
              paragraphs: [
                "L'Empire inca s'appelait en quechua Tawantinsuyu (en espagnol Tahuantinsuyo), « les quatre régions réunies » : il était divisé en quatre « suyus » autour de sa capitale, Cusco. D'abord un petit peuple de la région de Cusco, les Incas ont formé un immense empire en moins d'un siècle, surtout à partir du règne de Pachacútec, vers 1438, puis sous ses successeurs Túpac Yupanqui et Huayna Cápac. À son apogée, au début du XVIe siècle, il s'étendait du sud de l'actuelle Colombie jusqu'au centre du Chili et au nord-ouest de l'Argentine.",
                "Le souverain, le Sapa Inca, était considéré comme le fils du Soleil (Inti), principal dieu de l'empire. La langue de l'administration, le quechua (runa simi, « la langue des hommes »), a été diffusée dans tout le territoire. Les Incas ne connaissaient pas l'écriture alphabétique, mais ils utilisaient les quipus, des ensembles de cordelettes nouées qui servaient à enregistrer des nombres (recensements, tributs, réserves) et peut-être d'autres informations.",
              ],
              box: { label: "Repère", text: "Tawantinsuyu : « les quatre régions réunies » · capitale : Cusco · expansion : à partir de Pachacútec (vers 1438) · langue : le quechua · souverain : le Sapa Inca, fils du Soleil (Inti)." },
            },
            {
              heading: "Une société organisée pour maîtriser la montagne",
              paragraphs: [
                "La cellule de base était l'ayllu, une communauté de familles qui partageaient des terres et s'entraidaient selon le principe de réciprocité (l'ayni). L'État prélevait un tribut en travail, la mita : chaque communauté fournissait à tour de rôle des travailleurs pour construire des routes, des terrasses et des temples, servir dans l'armée ou cultiver les terres de l'Inca et du Soleil. Les récoltes étaient stockées dans des greniers (las qollqas) répartis dans tout l'empire, ce qui permettait de faire face aux mauvaises années.",
                "Le réseau de routes, le Qhapaq Ñan (« le chemin principal »), long d'environ 30 000 kilomètres, reliait Cusco aux quatre régions ; des coureurs relayeurs, les chasquis, y portaient les messages, et des relais (los tambos) accueillaient les voyageurs. Il est inscrit depuis 2014 au patrimoine mondial de l'Unesco, au nom de six pays. Les Incas ont aussi aménagé des terrasses de culture (los andenes) et des ensembles de pierres ajustées sans mortier, comme Sacsayhuamán ou Machu Picchu, édifié au XVe siècle et révélé au monde par l'explorateur américain Hiram Bingham en 1911.",
              ],
              box: { label: "Vocabulaire", text: "el ayllu : la communauté · el ayni : la réciprocité · la mita : le travail dû à l'État · el quipu : les cordelettes nouées · el chasqui : le messager · el Qhapaq Ñan : le réseau de routes · los andenes : les terrasses · la qollqa : le grenier." },
            },
            {
              heading: "La conquête espagnole",
              paragraphs: [
                "Lorsque les Espagnols arrivent, l'empire sort d'une guerre civile entre deux fils de Huayna Cápac, Huáscar et Atahualpa, qui l'a emporté. Le 16 novembre 1532, à Cajamarca, Francisco Pizarro et moins de deux cents hommes capturent Atahualpa par surprise. L'Inca promet de remplir une salle d'or, et deux fois d'argent, pour obtenir sa libération ; la rançon est livrée, mais il est exécuté en 1533. En 1535, Pizarro fonde Lima, sur la côte, qui deviendra la capitale de la vice-royauté du Pérou.",
                "La résistance inca se poursuit dans la région de Vilcabamba jusqu'en 1572, date de l'exécution de Túpac Amaru Ier. Sous la colonisation, la mita est détournée au profit des mines, notamment celle d'argent de Potosí. En 1780, José Gabriel Condorcanqui, qui prend le nom de Túpac Amaru II, mène une grande rébellion contre les abus coloniaux ; il est exécuté à Cusco en 1781.",
              ],
              box: { label: "Repère", text: "Vers 1438 : début du règne de Pachacútec · 1532 : capture d'Atahualpa à Cajamarca · 1533 : exécution d'Atahualpa · 1535 : fondation de Lima · 1572 : fin de la résistance de Vilcabamba · 1780-1781 : rébellion de Túpac Amaru II." },
            },
            {
              heading: "Des héritages vivants",
              paragraphs: [
                "Deux auteurs du début du XVIIe siècle ont transmis la mémoire andine. L'Inca Garcilaso de la Vega, fils d'un capitaine espagnol et d'une princesse inca, publie en 1609 les « Comentarios reales de los incas », qui présentent l'empire de ses ancêtres maternels. Felipe Guamán Poma de Ayala adresse au roi d'Espagne une longue chronique, « Nueva corónica y buen gobierno » (vers 1615), illustrée de plusieurs centaines de dessins qui dénoncent les abus de la colonisation.",
                "Le quechua est aujourd'hui parlé par plusieurs millions de personnes, surtout au Pérou, en Bolivie et en Équateur (où l'on dit kichwa), et l'aymara est parlé autour du lac Titicaca. L'espagnol a emprunté au quechua de nombreux mots : cóndor, puma, llama, papa, pampa, cancha, choclo (l'épi de maïs). À Cusco, l'Inti Raymi, la fête du Soleil liée au solstice de juin, est reconstituée chaque 24 juin depuis 1944. Dans les Andes, on rend encore hommage à la Pachamama, la Terre-Mère, par des offrandes, notamment au mois d'août.",
                "Pour raconter cette histoire, distinguez les deux passés : le pretérito indefinido pour les actions ponctuelles et datées qui font avancer le récit (« Pizarro capturó a Atahualpa en 1532 »), l'imperfecto pour le décor, les descriptions et les habitudes (« Los chasquis llevaban mensajes por los caminos »).",
              ],
              box: { label: "À retenir", text: "Indefinido : actions ponctuelles (capturó, fundó, publicó). Imperfecto : décor et habitudes (era, había, llevaban). Mots venus du quechua : cóndor, puma, llama, papa, pampa, cancha, choclo." },
            },
          ],
          keyPoints: [
            "Tawantinsuyu (Tahuantinsuyo) : « les quatre régions réunies », capitale Cusco, expansion à partir de Pachacútec (vers 1438).",
            "Organisation : ayllu (communauté), ayni (réciprocité), mita (travail dû à l'État), quipus, Qhapaq Ñan (routes) et chasquis.",
            "1532 : capture d'Atahualpa à Cajamarca ; 1535 : fondation de Lima ; 1572 : fin de la résistance de Vilcabamba.",
            "1780-1781 : rébellion de Túpac Amaru II contre les abus coloniaux.",
            "Garcilaso de la Vega, « Comentarios reales » (1609) ; Guamán Poma, « Nueva corónica y buen gobierno » (vers 1615).",
            "Héritages : quechua, Inti Raymi (24 juin), Pachamama, andenes ; mots : cóndor, puma, papa, pampa.",
          ],
          example: {
            statement: "Conjuguez les verbes au pretérito indefinido ou à l'imperfecto et justifiez : « El 16 de noviembre de 1532, Atahualpa (llegar) a la plaza de Cajamarca. (Ser) la tarde y miles de hombres lo (acompañar). Los españoles (estar) escondidos en los edificios que (rodear) la plaza. De repente, (atacar) y (capturar) al Inca. »",
            solution: [
              "« llegó » : action ponctuelle et datée qui fait avancer le récit, donc indefinido.",
              "« Era » la tarde, miles de hombres lo « acompañaban » : décor et description de la scène, donc imperfecto.",
              "Los españoles « estaban » escondidos en los edificios que « rodeaban » la plaza : situation au moment de l'action et description du lieu, donc imperfecto.",
              "De repente, « atacaron » y « capturaron » al Inca : actions soudaines et successives, annoncées par « de repente », donc indefinido.",
              "Réponse : llegó, Era, acompañaban, estaban, rodeaban, atacaron, capturaron.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec : Cusco, quechua, quipus, chasquis, Cajamarca, Qhapaq Ñan. a) La capital del Tahuantinsuyo era ... b) La lengua de la administración inca era el ... c) Para registrar números, los incas usaban los ... d) Los ... llevaban mensajes corriendo. e) El ... era una red de caminos de unos 30 000 kilómetros. f) Atahualpa fue capturado en ...",
              hint: "Relisez les encadrés « Repère » et « Vocabulaire » : chaque mot y figure.",
              solution: [
                "a) Cusco, capitale de l'empire. b) el quechua (runa simi).",
                "c) los quipus, cordelettes nouées. d) Los chasquis, coureurs relayeurs.",
                "e) El Qhapaq Ñan, réseau de routes. f) Cajamarca, le 16 novembre 1532.",
                "Réponses : a) Cusco b) quechua c) quipus d) chasquis e) Qhapaq Ñan f) Cajamarca.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez les verbes au pretérito indefinido ou à l'imperfecto : « En la época de los incas, los chasquis (correr) por los caminos y (llevar) mensajes de un tambo a otro. Cada uno (recorrer) unos kilómetros y (pasar) el mensaje al siguiente. Siglos después, en 1911, el explorador Hiram Bingham (llegar) a Machu Picchu con la ayuda de campesinos de la zona, que ya (conocer) el lugar. Las ruinas (estar) cubiertas de vegetación. Bingham (publicar) fotos que (dar) a conocer el sitio en todo el mundo. »",
              hint: "Habitudes et descriptions : imperfecto ; actions ponctuelles et datées : indefinido. « Dar » est irrégulier à l'indefinido (di, diste, dio, dimos, disteis, dieron).",
              solution: [
                "Habitudes de l'époque inca : « corrían », « llevaban », « recorría », « pasaba » (imperfecto).",
                "Action datée (1911) : « llegó » (indefinido).",
                "Situation antérieure et description : « conocían », « estaban » (imperfecto).",
                "Actions ponctuelles : « publicó », « dieron » (indefinido ; le sujet de « dieron » est « fotos »).",
                "Réponses : corrían, llevaban, recorría, pasaba, llegó, conocían, estaban, publicó, dieron.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez pour un blog de voyage un article de 130 à 160 mots racontant un séjour à Cusco pendant l'Inti Raymi. Racontez au passé (indefinido et imperfecto) et présentez au moins trois héritages incas ou andins étudiés dans la leçon.",
              hint: "Alternez récit (nos levantamos, visitamos) et description (hacía frío, el cielo estaba despejado) ; choisissez trois héritages précis : l'Inti Raymi, les andenes, la Pachamama, le quechua.",
              solution: [
                "Plan : arrivée et contexte ; la fête de l'Inti Raymi ; une visite (le Valle Sagrado et ses terrasses) ; une rencontre (la Pachamama) ; bilan personnel.",
                "Récit de la fête : « El verano pasado, viajé a Cusco con mi familia para asistir al Inti Raymi. El 24 de junio, nos levantamos muy temprano. Hacía frío, pero el cielo estaba despejado. En la explanada de Sacsayhuamán, cientos de actores vestidos con trajes tradicionales representaron la fiesta del Sol, en quechua. Fue impresionante. »",
                "Visite et rencontre : « Al día siguiente, visitamos el Valle Sagrado. Allí descubrí los andenes, unas terrazas que los incas construyeron para cultivar en las montañas y que los campesinos todavía usan. En un mercado, una señora me explicó que en agosto hacen ofrendas a la Pachamama, la Madre Tierra. »",
                "Bilan : « Antes del viaje, pensaba que la cultura inca pertenecía al pasado. Ahora sé que sigue viva: en la lengua, en las fiestas y en la relación con la tierra. »",
                "Vérification : environ 150 mots ; indefinido pour les actions (viajé, nos levantamos, representaron, visitamos, descubrí, explicó), imperfecto pour le décor et l'état d'esprit (hacía, estaba, pensaba, pertenecía) ; héritages : Inti Raymi et quechua, andenes, Pachamama.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique, du plus ancien au plus récent.",
            items: [
              "Début du règne de Pachacútec",
              "Capture d'Atahualpa à Cajamarca",
              "Fondation de Lima par Pizarro",
              "Exécution de Túpac Amaru Ier, fin de la résistance de Vilcabamba",
              "Publication des « Comentarios reales » de Garcilaso",
              "Rébellion de Túpac Amaru II",
              "Arrivée de Hiram Bingham à Machu Picchu",
            ],
          },
          quiz: [
            { q: "Que signifie « Tawantinsuyu » ?", options: ["le grand chemin royal de l'Inca", "la ville sacrée du Soleil", "les quatre régions réunies", "la terre des condors"], answer: 2, why: "L'empire était divisé en quatre « suyus » réunis autour de Cusco." },
            { q: "À quoi servaient les quipus ?", options: ["à enregistrer des nombres", "à transporter l'eau des sources", "à jouer de la musique sacrée", "à tisser les vêtements de l'Inca"], answer: 0, why: "Ces cordelettes nouées servaient à compter : recensements, tributs, réserves des greniers." },
            { q: "Où et quand Atahualpa a-t-il été capturé ?", options: ["à Cusco en 1535", "à Cajamarca en 1532", "à Lima en 1533", "à Vilcabamba en 1572"], answer: 1, why: "Francisco Pizarro a capturé Atahualpa à Cajamarca le 16 novembre 1532." },
            { q: "Complétez : « Los chasquis ... mensajes por los caminos del imperio. » (une habitude)", options: ["llevaron", "llevan", "llevarán", "llevaban"], answer: 3, why: "Une habitude dans le passé s'exprime à l'imperfecto." },
            { q: "Lequel de ces mots espagnols vient du quechua ?", options: ["la papa", "el tomate", "el maíz", "el chocolate"], answer: 0, why: "« Papa » vient du quechua ; « tomate » et « chocolate » viennent du nahuatl (Mexique), « maíz » du taïno (Caraïbes)." },
          ],
          trap: "Employer le pretérito indefinido pour un décor ou une habitude (« los chasquis llevaron mensajes cada día ») : ce qui se répétait ou servait de cadre se dit à l'imperfecto (llevaban) ; l'indefinido est réservé aux actions ponctuelles et datées (capturaron a Atahualpa en 1532).",
          method: "Construisez une frise chronologique de 1438 à 1911 avec sept dates, et écrivez sous chacune une phrase en espagnol au pretérito indefinido. Relisez-la à voix haute : vous réviserez à la fois les repères historiques et les formes verbales.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'andes-hoy',
          title: 'Les pays andins aujourd\'hui : enjeux et défis',
          minutes: 30,
          objectives: [
            "Présenter les grands enjeux actuels des pays andins : ressources minières et lithium, eau et glaciers, villes et migrations.",
            "Expliquer la place des peuples autochtones dans les sociétés andines (État plurinational, « buen vivir »).",
            "Mobiliser le lexique de l'économie, du développement et des conflits socio-environnementaux.",
            "Exprimer la cause, la conséquence et l'opposition pour analyser un enjeu (debido a, por lo tanto, mientras que).",
          ],
          course: [
            {
              heading: "Des pays riches de leur sous-sol",
              paragraphs: [
                "Depuis l'époque coloniale, les Andes sont associées aux richesses minières : l'argent du Cerro Rico de Potosí, exploité à partir de 1545, a enrichi la monarchie espagnole au prix du travail forcé des populations indigènes. Aujourd'hui encore, les mines tiennent une grande place dans l'économie : le Chili est le premier producteur mondial de cuivre, et le Pérou compte parmi les grands producteurs de cuivre, d'or et d'argent.",
                "Les salars de l'Argentine, de la Bolivie et du Chili, surnommés le « triangle du lithium », concentrent une grande partie des réserves mondiales de ce métal, indispensable aux batteries des téléphones et des voitures électriques. C'est un paradoxe de la transition énergétique : l'extraction consomme de grandes quantités d'eau dans des régions désertiques, et des communautés indigènes demandent à être consultées. Les projets miniers provoquent ainsi de nombreux conflits socio-environnementaux (los conflictos socioambientales).",
              ],
              box: { label: "Vocabulaire", text: "la minería : l'activité minière · el yacimiento : le gisement · el cobre : le cuivre · el litio : le lithium · la plata : l'argent (métal) · la empresa minera · la consulta previa : la consultation préalable · el conflicto socioambiental." },
            },
            {
              heading: "L'eau et les glaciers face au changement climatique",
              paragraphs: [
                "Les glaciers tropicaux des Andes reculent rapidement avec le réchauffement climatique. Le glacier de Chacaltaya, en Bolivie, qui accueillait une piste de ski parmi les plus hautes du monde, a pratiquement disparu à la fin des années 2000. Or de nombreuses villes et campagnes andines dépendent en partie de l'eau des glaciers et des páramos, surtout pendant la saison sèche : c'est le cas de La Paz et d'El Alto, de Quito ou de Lima, sur la côte désertique.",
                "Les Andes subissent aussi des catastrophes naturelles (séismes, éruptions, glissements de terrain) et les effets du phénomène El Niño, qui provoque pluies torrentielles et inondations sur la côte du Pérou et de l'Équateur, et sécheresses ailleurs. L'adaptation passe par de nouveaux réservoirs, par la protection des páramos, qui retiennent l'eau comme des éponges, et par la remise en usage de techniques anciennes, comme les terrasses ou les canaux préhispaniques.",
              ],
              box: { label: "Définition", text: "El Niño : réchauffement périodique des eaux de surface du Pacifique équatorial, qui dérègle le climat. Il apporte des pluies torrentielles sur la côte du Pérou et de l'Équateur et des sécheresses dans d'autres régions." },
            },
            {
              heading: "Des sociétés en mutation : villes, migrations, inégalités",
              paragraphs: [
                "Depuis le milieu du XXe siècle, l'exode rural a fait grandir très vite les villes andines, où vit aujourd'hui la majorité de la population. El Alto, sur l'Altiplano au-dessus de La Paz, est devenue l'une des plus grandes villes de Bolivie, peuplée en grande partie de migrants aymaras venus des campagnes. Depuis 2014, un réseau de téléphériques urbains, « Mi Teleférico », relie El Alto et La Paz. Ces villes concentrent les opportunités, mais aussi les inégalités, l'économie informelle et les quartiers précaires.",
                "Les pays andins sont aussi des terres de départ et d'accueil. Depuis le milieu des années 2010, plusieurs millions de Vénézuéliens ont quitté leur pays en crise, en majorité vers d'autres pays d'Amérique latine, notamment la Colombie, le Pérou, l'Équateur et le Chili. Leur accueil pose des questions d'intégration, de travail et de droits, et suscite selon les cas solidarité ou rejet.",
              ],
              box: { label: "Définition", text: "L'exode rural (el éxodo rural) : le départ massif des habitants des campagnes vers les villes. L'économie informelle (la economía informal) : les activités non déclarées (vente ambulante, petits métiers), sans protection sociale." },
            },
            {
              heading: "Reconnaître les peuples autochtones",
              paragraphs: [
                "Les pays andins comptent d'importantes populations autochtones, quechuas et aymaras notamment. Longtemps marginalisées, elles se sont organisées en mouvements puissants, comme la CONAIE en Équateur. En 2006, Evo Morales, d'origine aymara, devient président de la Bolivie, premier président indigène du pays ; la Constitution de 2009 fait de la Bolivie un « État plurinational », qui reconnaît les nations et les langues indigènes.",
                "Les Constitutions de l'Équateur (2008) et de la Bolivie (2009) se réfèrent au « buen vivir », traduction du quechua « sumak kawsay » et de l'aymara « suma qamaña » : une conception du bien-être fondée sur l'harmonie avec la communauté et la nature plutôt que sur la seule croissance économique. Ces principes nourrissent les débats sur le modèle de développement : comment exploiter les ressources sans détruire les territoires ni ignorer ceux qui y vivent ?",
                "Pour analyser ces enjeux en espagnol, reliez les faits par des connecteurs : la cause (porque, ya que, debido a, a causa de), la conséquence (por lo tanto, por eso, así que, lo que provoca) et l'opposition (mientras que, en cambio, sin embargo). Exemple : « Debido al calentamiento global, los glaciares retroceden; por lo tanto, falta agua en la estación seca ».",
              ],
              box: { label: "Règle", text: "Debido a, a causa de + nom (debido al calor). Porque, ya que + verbe conjugué (porque hace calor). Por lo tanto, por eso, así que : conséquence. Mientras que : opposition entre deux faits (alors que)." },
            },
          ],
          keyPoints: [
            "Mines : argent de Potosí (à partir de 1545) ; aujourd'hui cuivre (le Chili, premier producteur mondial), or, argent, lithium.",
            "« Triangle du lithium » : salars d'Argentine, de Bolivie et du Chili ; extraction gourmande en eau, conflictos socioambientales.",
            "Les glaciers tropicaux reculent (Chacaltaya) : menace sur l'eau de La Paz, d'El Alto, de Quito, de Lima.",
            "El Niño : réchauffement périodique du Pacifique ; pluies torrentielles sur la côte du Pérou et de l'Équateur.",
            "Exode rural et grandes villes (El Alto, Mi Teleférico depuis 2014) ; migration vénézuélienne depuis le milieu des années 2010.",
            "Bolivie : Evo Morales (2006), État plurinational (2009) ; buen vivir (sumak kawsay) dans les Constitutions de l'Équateur et de la Bolivie.",
            "Cause : debido a, ya que ; conséquence : por lo tanto ; opposition : mientras que, en cambio.",
          ],
          example: {
            statement: "Analysez ce document (texte écrit pour l'exercice), présenté comme un article de presse : « El litio divide a las comunidades del salar. En el norte de Argentina, una empresa minera quiere ampliar la extracción de litio en un salar. El gobierno provincial defiende el proyecto, ya que traerá empleo e inversiones. En cambio, varias comunidades indígenas denuncian que no fueron consultadas y temen que la mina consuma el agua que necesitan para sus animales. “No estamos en contra del progreso, pero el agua es la vida”, afirma una dirigente comunitaria. » Identifiez la nature du document, l'enjeu, les acteurs et leurs arguments, et les connecteurs qui structurent le texte.",
            solution: [
              "Nature : un article de presse, avec un titre qui annonce un conflit (« divide ») et un témoignage cité entre guillemets.",
              "Enjeu : l'agrandissement d'une exploitation de lithium dans un salar du nord de l'Argentine, c'est-à-dire un conflit socio-environnemental autour de l'eau.",
              "Acteurs et arguments : le gouvernement provincial soutient le projet pour l'emploi et les investissements ; des communautés indigènes s'y opposent parce qu'elles n'ont pas été consultées et craignent pour l'eau de leurs troupeaux.",
              "Connecteurs : « ya que » introduit la cause (l'argument économique) ; « En cambio » marque l'opposition entre les deux camps ; « pero » nuance la position de la dirigeante, qui n'est pas hostile au progrès.",
              "Langue : « temen que » est suivi du subjonctif « consuma », car il exprime une crainte.",
              "Réponse : cet article présente un conflit entre développement économique (emploi, investissements) et droits des communautés (consultation, accès à l'eau), typique des enjeux miniers du triangle du lithium.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en espagnol : a) le cuivre b) le gisement c) l'exode rural d) l'économie informelle e) la consultation préalable f) le réchauffement climatique.",
              hint: "Plusieurs termes figurent dans les encadrés ; pour f), pensez à « calentar » (chauffer).",
              solution: [
                "a) el cobre. b) el yacimiento.",
                "c) el éxodo rural. d) la economía informal.",
                "e) la consulta previa. f) el calentamiento global (ou el calentamiento climático).",
                "Réponses : el cobre, el yacimiento, el éxodo rural, la economía informal, la consulta previa, el calentamiento global.",
              ],
            },
            {
              level: 2,
              statement: "Reliez chaque paire de phrases avec le connecteur indiqué, en adaptant la phrase si nécessaire : a) Los glaciares retroceden. Falta agua en la estación seca. (por lo tanto) b) Muchos jóvenes dejan el campo. No encuentran trabajo. (ya que) c) La minería trae dinero. Contamina los ríos. (sin embargo) d) El Alto crece rápidamente. Algunos pueblos se vacían. (mientras que) e) El calentamiento global. Los glaciares desaparecen. (debido a) f) El litio es necesario para las baterías. Su demanda aumenta. (como)",
              hint: "« Debido a » est suivi d'un nom (attention à la contraction a + el = al) ; « como » causal se place en tête de phrase.",
              solution: [
                "a) Conséquence : « Los glaciares retroceden; por lo tanto, falta agua en la estación seca. »",
                "b) Cause : « Muchos jóvenes dejan el campo, ya que no encuentran trabajo. »",
                "c) Opposition : « La minería trae dinero; sin embargo, contamina los ríos. »",
                "d) Opposition entre deux faits simultanés : « El Alto crece rápidamente, mientras que algunos pueblos se vacían. »",
                "e) Cause avec un nom : « Debido al calentamiento global, los glaciares desaparecen. »",
                "f) Cause en tête de phrase : « Como el litio es necesario para las baterías, su demanda aumenta. »",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un texte argumentatif de 150 à 170 mots : « El litio, ¿una oportunidad o una amenaza para los países andinos? ». Présentez le sujet, développez les deux points de vue, prenez position et concluez. Employez au moins trois connecteurs de cause ou de conséquence, un connecteur d'opposition et un subjonctif.",
              hint: "Appuyez-vous sur des faits du cours (triangle du lithium, consommation d'eau, consultation des communautés) et sur une comparaison historique avec Potosí.",
              solution: [
                "Plan : introduction (le lithium, les réserves andines, la question) ; avantages ; risques ; conclusion nuancée avec une condition.",
                "Introduction : « El litio es indispensable para las baterías de los coches eléctricos y de los móviles. Como Argentina, Bolivia y Chile tienen grandes reservas en sus salares, muchos lo llaman el «oro blanco». Pero ¿es una oportunidad o una amenaza para estos países? »",
                "Avantages : « Por un lado, el litio puede traer inversiones, empleo y dinero para construir escuelas y hospitales. Además, contribuye a la transición energética, ya que permite reducir el uso del petróleo. »",
                "Risques : « Por otro lado, su extracción consume mucha agua en regiones muy secas, lo que perjudica a las comunidades indígenas que viven de la ganadería. Por eso, es necesario que estas comunidades sean consultadas antes de cada proyecto. »",
                "Conclusion : « En conclusión, creo que el litio es una oportunidad, siempre que su explotación respete el agua y a las personas. Si no, repetirá la historia de Potosí: una riqueza que no benefició a sus habitantes. »",
                "Vérification : environ 160 mots ; cause : como, ya que ; conséquence : lo que, por eso ; opposition : por un lado... por otro lado ; subjonctifs : « sean consultadas » (es necesario que), « respete » (siempre que).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque notion à sa définition.",
            pairs: [
              { left: "El buen vivir", right: "L'harmonie avec la communauté et la nature (sumak kawsay)" },
              { left: "El Estado plurinacional", right: "La Bolivie depuis la Constitution de 2009" },
              { left: "El triángulo del litio", right: "Les salars d'Argentine, de Bolivie et du Chili" },
              { left: "Mi Teleférico", right: "Les téléphériques urbains entre La Paz et El Alto" },
              { left: "El Niño", right: "Un réchauffement périodique des eaux du Pacifique" },
              { left: "El Cerro Rico", right: "La montagne d'argent de Potosí" },
            ],
          },
          quiz: [
            { q: "Quel pays est le premier producteur mondial de cuivre ?", options: ["le Pérou", "le Chili", "la Bolivie", "l'Équateur"], answer: 1, why: "Le Chili est le premier producteur mondial de cuivre ; le Pérou figure aussi parmi les grands producteurs." },
            { q: "Que désigne le « triangle du lithium » ?", options: ["les salars de trois pays andins", "trois grandes mines d'argent de Potosí", "trois volcans actifs de l'Équateur"], answer: 0, why: "Ce sont les salars d'Argentine, de Bolivie et du Chili, qui concentrent une grande partie des réserves mondiales de lithium." },
            { q: "Que signifie le « buen vivir » des Constitutions de l'Équateur et de la Bolivie ?", options: ["la croissance économique à tout prix", "le droit de chacun à vivre en ville", "le confort matériel de toutes les familles urbaines", "l'harmonie avec la communauté et la nature"], answer: 3, why: "Traduction du quechua « sumak kawsay », le buen vivir fonde le bien-être sur l'équilibre avec la communauté et la nature." },
            { q: "Complétez : « ... calentamiento global, los glaciares retroceden. »", options: ["Debido al", "Por lo tanto", "Sin embargo", "Mientras que"], answer: 0, why: "« Debido a » introduit une cause et se construit avec un nom (a + el = al)." },
            { q: "Qui est devenu en 2006 le premier président indigène de la Bolivie ?", options: ["Rafael Correa", "Alberto Fujimori", "Evo Morales", "Túpac Amaru II"], answer: 2, why: "Evo Morales, d'origine aymara, a présidé la Bolivie de 2006 à 2019." },
          ],
          trap: "Construire « debido a » ou « a causa de » avec un verbe conjugué (« debido a hace calor ») ou oublier la contraction (« debido a el ») : ces locutions sont suivies d'un nom (debido al calor) ; devant un verbe conjugué, employez « porque » ou « ya que ».",
          method: "Pour analyser un enjeu, remplissez la grille « causas, consecuencias, actores, soluciones » : une ligne par case, avec un connecteur à chaque fois. Elle vous donne immédiatement le plan d'un exposé oral ou d'un paragraphe argumenté.",
        },
      ],
    },
    {
      id: 'evaluations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'comprender-documento',
          title: 'Comprendre un document écrit ou audio : méthode',
          minutes: 30,
          objectives: [
            "Identifier la nature, la source, le thème et la situation d'énonciation d'un document écrit ou audio.",
            "Repérer les informations essentielles, les points de vue et l'articulation logique d'un document de niveau B1, avec une ouverture vers le niveau B2.",
            "Reconnaître les principales variantes de l'espagnol oral (seseo, yeísmo, voseo, aspiration du « s »).",
            "Rendre compte d'un document en français ou en espagnol, de façon organisée et fidèle (médiation).",
          ],
          course: [
            {
              heading: "Ce qui est attendu en première",
              paragraphs: [
                "En première, les langues vivantes comptent au baccalauréat par le contrôle continu : ce sont les moyennes de vos bulletins de première et de terminale qui sont prises en compte. Dojoburo vous propose en outre, en fin d'année, un contrôle de fin de première (des questions sur le programme, puis deux exercices corrigés). Les activités langagières travaillées sont la réception (comprendre l'écrit et l'oral), la production (s'exprimer en continu), l'interaction (dialoguer) et la médiation (transmettre à quelqu'un le contenu d'un document).",
                "Le Cadre européen commun de référence pour les langues (CECRL) fixe les niveaux visés en fin de terminale : B1 pour la langue vivante B, B2 pour la langue vivante A. Au niveau B1, vous comprenez les points essentiels d'un document clair, en langue standard, sur un sujet familier, ainsi que des récits et l'expression d'opinions. Au niveau B2, vous suivez une argumentation plus complexe et vous percevez le point de vue de l'auteur et l'implicite.",
              ],
              box: { label: "Repère", text: "Réception : comprendre l'écrit et l'oral. Production : s'exprimer en continu. Interaction : dialoguer. Médiation : transmettre le contenu d'un document à un destinataire. Niveaux visés en fin de terminale : B1 (LVB), B2 (LVA)." },
            },
            {
              heading: "Comprendre un document écrit : du paratexte au sens",
              paragraphs: [
                "Commencez par le paratexte : titre, chapeau, source (journal, site, roman), date, nom de l'auteur, illustration. Ils permettent de formuler des hypothèses sur le thème et le point de vue. Lisez ensuite le texte une première fois sans vous arrêter, pour répondre aux questions de base : ¿Quién? ¿Qué? ¿Dónde? ¿Cuándo? ¿Por qué? ¿Cómo? Une deuxième lecture, crayon en main, sert à repérer les idées principales, les exemples, les chiffres et les connecteurs (pero, sin embargo, por eso, además) qui révèlent la structure du texte.",
                "Face à un mot inconnu, ne vous bloquez pas : appuyez-vous sur les mots transparents (la contaminación, el gobierno), sur les familles de mots (llover, la lluvia, lluvioso) et sur le contexte. Méfiez-vous des faux amis : « embarazada » signifie enceinte, « constipado » enrhumé, « largo » long, « el éxito » le succès, « exprimir » presser (un fruit), « contestar » répondre, et « realizar » effectuer (se rendre compte se dit « darse cuenta »).",
              ],
              box: { label: "Vocabulaire", text: "Faux amis : embarazada (enceinte) · constipado (enrhumé) · largo (long) · el éxito (le succès) · exprimir (presser) · contestar (répondre) · realizar (effectuer) · la carpeta (la chemise, le classeur)." },
            },
            {
              heading: "Comprendre un document audio : anticiper et reconnaître les accents",
              paragraphs: [
                "Avant l'écoute, exploitez le titre et la consigne, et mobilisez le lexique attendu. La première écoute est globale : nature du document (reportage, interview, débat, publicité), nombre de locuteurs, thème, ton. Les écoutes suivantes servent aux détails. Prenez des notes en espagnol, en abrégé, avec des symboles (↑ hausse, ↓ baisse, → conséquence, ≠ opposition), en laissant de l'espace pour compléter.",
                "L'espagnol est langue officielle dans une vingtaine de pays, avec des accents variés qu'il faut savoir reconnaître. En Amérique latine, aux Canaries et dans une partie de l'Andalousie, on pratique le « seseo » : « z », et « c » devant e et i, se prononcent [s] (« cerveza » sonne « servesa »). Le « yeísmo », très répandu, prononce « ll » comme « y ». En Argentine et en Uruguay, « ll » et « y » sonnent souvent comme le « ch » français (« yo » sonne « cho »), et l'on emploie le « voseo » : « vos tenés », « vos sos » au lieu de « tú tienes », « tú eres ».",
                "Dans les Caraïbes et en Andalousie, le « s » en fin de syllabe est souvent aspiré ou disparaît (« lo' niño' »). Rappelez-vous aussi qu'en Amérique latine, « vosotros » ne s'emploie pas : « ustedes » sert pour tout pluriel, familier ou poli (« ¿Ustedes vienen? »). Ces variations ne gênent plus la compréhension une fois qu'on les connaît : elles font la richesse d'une langue parlée par plusieurs centaines de millions de personnes.",
              ],
              box: { label: "Repère", text: "Seseo : cerveza → [servesa]. Yeísmo : calle → [caye]. Río de la Plata : yo → [cho] ; voseo : vos tenés, vos sos. Aspiration : los niños → [loh niñoh]. Amérique latine : ustedes au lieu de vosotros." },
            },
            {
              heading: "Rendre compte d'un document : la médiation",
              paragraphs: [
                "Rendre compte, ce n'est ni traduire mot à mot, ni ajouter vos propres idées. Commencez par présenter le document (« Se trata de un artículo publicado en... », « Este documento es un reportaje sobre... »), puis exposez les idées principales dans un ordre logique, avec quelques détails précis, et terminez par le point de vue de l'auteur ou des personnes interrogées. Selon la consigne, le compte rendu se fait en français ou en espagnol.",
                "La médiation consiste à adapter ce compte rendu à un destinataire précis : expliquer à un camarade, à vos parents ou à un correspondant ce que dit un document, en simplifiant sans déformer. Variez les verbes pour rapporter les propos : explica, afirma, cuenta, subraya, denuncia, critica, propone, advierte (met en garde), lamenta. Avec un verbe introducteur au passé, pensez à la concordance des temps : « Dijo que estaba preocupado ».",
              ],
              box: { label: "Méthode", text: "1. Présenter le document (nature, source, date, thème). 2. Exposer les idées principales dans l'ordre logique. 3. Ajouter quelques détails précis. 4. Donner le point de vue de l'auteur ou des personnes citées. 5. Vérifier : rien d'inventé, rien d'essentiel oublié." },
            },
          ],
          keyPoints: [
            "Quatre activités : réception, production, interaction, médiation. Niveaux visés en fin de terminale : B1 (LVB), B2 (LVA).",
            "Écrit : paratexte, lecture globale (¿quién? ¿qué? ¿dónde? ¿cuándo? ¿por qué?), puis idées principales et connecteurs.",
            "Mot inconnu : transparence, famille de mots, contexte ; attention aux faux amis (embarazada, constipado, largo).",
            "Audio : anticiper, première écoute globale, notes en espagnol avec des symboles.",
            "Variantes : seseo, yeísmo, voseo (vos tenés), aspiration du « s » ; ustedes en Amérique latine.",
            "Compte rendu : présenter, idées principales, détails, point de vue ; ni traduction mot à mot ni invention.",
          ],
          example: {
            statement: "Lisez cet article (texte écrit pour l'exercice, présenté comme publié dans une revue scolaire) : « Volver al pueblo. Algunos jóvenes españoles deciden instalarse en pueblos de la llamada “España vaciada”. Es el caso de Laura, de 27 años, diseñadora gráfica, que dejó Madrid el año pasado para vivir en un pueblo de Soria. “Aquí trabajo a distancia, pago menos alquiler y conozco a todos mis vecinos”, cuenta. Sin embargo, no todo es fácil: la conexión a internet falla a veces y el médico solo viene dos días por semana. Aun así, Laura no piensa volver a la ciudad. » Identifiez la nature du document, le thème, la personne présentée, les avantages et les difficultés, puis rendez compte du texte en français en 50 à 60 mots.",
            solution: [
              "Nature et thème : un court article de revue, au titre explicite (« Volver al pueblo ») ; il traite de jeunes qui s'installent dans l'« España vaciada », les zones rurales dépeuplées de l'Espagne.",
              "Personne présentée : Laura, 27 ans, graphiste, qui a quitté Madrid l'an dernier pour un village de la province de Soria (¿quién?, ¿qué?, ¿dónde?, ¿cuándo?).",
              "Avantages, cités par Laura : le télétravail, un loyer plus bas, des relations de voisinage.",
              "Difficultés, introduites par « Sin embargo » : une connexion internet irrégulière et un médecin présent deux jours par semaine seulement. « Aun así » (malgré tout) annonce la conclusion : elle ne veut pas revenir en ville.",
              "Réponse : « Cet article présente Laura, graphiste de 27 ans, qui a quitté Madrid pour un village de la province de Soria, dans l'Espagne dépeuplée. Elle apprécie le télétravail, un loyer plus faible et la proximité avec ses voisins. Elle reconnaît des difficultés, une connexion internet irrégulière et un médecin rarement présent, mais ne compte pas revenir en ville. » (environ 60 mots)",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez ces phrases en évitant les pièges des faux amis : a) Mi hermana está embarazada. b) Estoy constipado. c) La película fue un éxito. d) El camino es muy largo. e) Contesta a la pregunta. f) Me di cuenta de mi error.",
              hint: "Aucun de ces mots ne signifie ce que sa ressemblance avec le français laisse croire, sauf « error ».",
              solution: [
                "a) Ma sœur est enceinte (et non « embarrassée », qui se dit « avergonzada » ou « incómoda »).",
                "b) Je suis enrhumé. c) Le film a été un succès (« éxito » ne signifie pas « sortie », qui se dit « salida »).",
                "d) Le chemin est très long (« large » se dit « ancho »). e) Réponds à la question.",
                "f) Je me suis rendu compte de mon erreur (« darse cuenta de »).",
                "Réponses : enceinte, enrhumé, succès, long, réponds, je me suis rendu compte.",
              ],
            },
            {
              level: 2,
              statement: "Ces phrases transcrivent l'oral de différents pays hispanophones. Nommez le phénomène, puis réécrivez chaque phrase en espagnol standard d'Espagne : a) « Vos tenés razón, che. » (Buenos Aires) b) « ¿Ustedes quieren venir? » (à deux amis, à Bogotá) c) « Lo' niño' etán en la ecuela. » (La Havane) d) « La sapatilla está debajo de la cama. » (Lima, transcription phonétique) e) « ¿Vos sos de Montevideo? »",
              hint: "Quatre phénomènes à reconnaître : le voseo, l'emploi de « ustedes » pour le pluriel familier, l'aspiration ou la perte du « s », le seseo.",
              solution: [
                "a) Voseo rioplatense (« vos tenés ») et interjection « che » : « Tú tienes razón ».",
                "b) En Amérique latine, « ustedes » sert aussi au pluriel familier ; en Espagne, entre amis : « ¿Vosotros queréis venir? ».",
                "c) Aspiration ou perte du « s » en fin de syllabe : « Los niños están en la escuela ».",
                "d) Seseo : le « z » se prononce [s] ; l'orthographe est « zapatilla » : « La zapatilla está debajo de la cama ».",
                "e) Voseo (« vos sos ») : « ¿Tú eres de Montevideo? ».",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez la transcription de cette interview radio (texte écrit pour l'exercice, données fictives) : « Periodista: Hoy estamos con Martina, de diecisiete años, que organiza cada sábado una limpieza de la costa del Río de la Plata. Martina, ¿cómo empezó todo? Martina: Mirá, un día fui a caminar con mi abuelo y vimos la orilla llena de plásticos. Me dio mucha bronca. Entonces publiqué un mensaje en las redes y el sábado siguiente vinieron veinte chicos. Periodista: ¿Y ahora? Martina: Ahora somos más de cien. Pero ojo, limpiar no alcanza: si vos seguís comprando botellas de plástico, el problema vuelve. Hay que cambiar los hábitos. » 1) Relevez trois marques de l'espagnol du Río de la Plata. 2) Rendez compte de l'interview en espagnol, en 80 à 100 mots.",
              hint: "Pour le compte rendu, présentez le document, racontez l'origine du projet au passé, donnez la situation actuelle, puis le message de Martina. Remplacez les mots régionaux par des mots standard.",
              solution: [
                "1) « Mirá » (impératif de « vos », au lieu de « mira ») ; « vos seguís » (voseo, au lieu de « tú sigues ») ; « bronca » (colère, en Argentine et en Uruguay) ; « no alcanza » (ne suffit pas).",
                "2) Plan : présentation (entrevista radiofónica, Martina, 17 años) ; origine (paseo con su abuelo, plásticos, mensaje en las redes) ; situación actual (más de cien voluntarios) ; mensaje (cambiar los hábitos).",
                "Exemple de compte rendu : « Se trata de una entrevista radiofónica, probablemente argentina o uruguaya, con Martina, una joven de diecisiete años. Martina cuenta que un día, mientras paseaba con su abuelo, vio la orilla del Río de la Plata llena de plásticos. Indignada, publicó un mensaje en las redes sociales y el sábado siguiente veinte jóvenes participaron en una limpieza. Hoy el grupo tiene más de cien miembros. Sin embargo, Martina subraya que limpiar no basta: según ella, el problema volverá si seguimos comprando botellas de plástico y no cambiamos nuestros hábitos. »",
                "Vérification : environ 95 mots ; document présenté ; verbes de compte rendu (cuenta, subraya) ; passés corrects (paseaba : décor ; vio, publicó, participaron : actions) ; mots régionaux remplacés (bronca → indignada, no alcanza → no basta) ; aucune information ajoutée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de la compréhension d'un document.",
            items: [
              "Observer le paratexte : titre, source, date, illustration",
              "Formuler des hypothèses sur le thème",
              "Première lecture ou écoute globale : ¿quién? ¿qué? ¿dónde?",
              "Deuxième lecture ou écoute : idées principales, exemples, connecteurs",
              "Repérer le point de vue et le ton",
              "Rédiger le compte rendu en présentant d'abord le document",
              "Relire : rien d'inventé, rien d'essentiel oublié",
            ],
          },
          quiz: [
            { q: "Que signifie « Estoy constipado » ?", options: ["Je suis constipé.", "Je suis enrhumé.", "Je suis fatigué.", "Je suis en retard."], answer: 1, why: "« Constipado » est un faux ami : il signifie enrhumé." },
            { q: "« Vos tenés razón » correspond, en espagnol d'Espagne, à :", options: ["Tú tienes razón.", "Vosotros tenéis razón.", "Usted tiene razón.", "Ellos tienen razón."], answer: 0, why: "Le voseo remplace « tú » par « vos » avec des formes verbales propres : vos tenés = tú tienes." },
            { q: "Le « seseo » consiste à :", options: ["prononcer « ll » comme « y »", "aspirer le « s » à la fin des mots", "employer « vos » à la place de « tú »", "dire [s] pour « z » et « ce, ci »"], answer: 3, why: "Avec le seseo, « cerveza » se prononce « servesa » : c'est la norme en Amérique latine." },
            { q: "Dans un compte rendu, que faut-il faire en premier ?", options: ["présenter le document", "donner son opinion", "traduire la première phrase", "citer le dernier paragraphe"], answer: 0, why: "On présente d'abord la nature, la source et le thème du document, avant les idées principales." },
            { q: "Quel niveau est visé en fin de terminale pour la langue vivante B ?", options: ["A2", "B1", "B2", "C1"], answer: 1, why: "Le niveau B1 est visé pour la LVB, le niveau B2 pour la LVA." },
          ],
          trap: "Traduire mot à mot et tomber dans les faux amis (« embarazada » ne signifie pas « embarrassée »), ou ajouter au compte rendu des idées absentes du document. On rend compte de ce que dit le texte, avec ses propres mots, sans rien inventer.",
          method: "Entraînez-vous chaque semaine avec un document authentique court (article d'un journal en ligne hispanique, reportage radio de deux minutes) : notez les réponses à ¿quién? ¿qué? ¿dónde? ¿cuándo? ¿por qué?, puis résumez-le à voix haute en quatre phrases. Variez les pays pour vous habituer aux accents.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'expresarse',
          title: 'S\'exprimer à l\'écrit et à l\'oral : méthode',
          minutes: 30,
          objectives: [
            "Analyser une consigne d'expression (type de texte, destinataire, registre, longueur) et construire un plan.",
            "Rédiger un texte cohérent et articulé (courriel, lettre, article, texte argumentatif) en mobilisant les structures de la première.",
            "Prendre la parole en continu et en interaction, avec des stratégies pour gagner du temps, reformuler et relancer l'échange.",
            "Relire sa production à l'aide d'une grille des erreurs fréquentes (accents, accords, ser et estar, modes).",
          ],
          course: [
            {
              heading: "Lire la consigne : quatre questions avant d'écrire",
              paragraphs: [
                "Avant d'écrire une ligne, analysez la consigne en quatre questions. Quel type de texte ? (un courriel, une lettre, un article, un dialogue, un récit, un texte argumentatif). À qui ? (un ami, un professeur, un maire, les lecteurs d'un journal). Quel registre ? (familier avec « tú », soutenu avec « usted »). Quelle longueur ? Respectez le nombre de mots demandé, à environ 10 % près : un texte trop court ne développe pas assez, un texte trop long accumule les erreurs.",
                "Chaque type de texte a ses codes. Courriel ou lettre amicale : « Querido Pablo: » ou « ¡Hola! », puis « Un abrazo », « Besos », « Hasta pronto ». Lettre formelle : « Estimado señor: », « Estimada señora López: », puis « Atentamente » ou « Un cordial saludo ». Article : un titre, une introduction qui accroche, des paragraphes. Texte argumentatif : une problématique, des arguments, une concession et une conclusion. Notez qu'en espagnol, la formule d'appel d'une lettre est suivie de deux-points.",
              ],
              box: { label: "Repère", text: "Familier : Querido/a... · ¡Hola! · Un abrazo, besos. Formel : Estimado/a señor/a... · Le escribo para... · Atentamente, Un cordial saludo. La formule d'appel est suivie de deux-points : « Querida Ana: »." },
            },
            {
              heading: "Construire et rédiger",
              paragraphs: [
                "Faites un plan rapide en espagnol (des mots-clés, pas des phrases) : introduction, deux ou trois parties, conclusion. Pensez directement en espagnol à partir des structures que vous maîtrisez, plutôt que de traduire des phrases françaises complexes : une phrase simple et correcte vaut mieux qu'une phrase ambitieuse et fautive. Reliez vos idées par des connecteurs variés (además, sin embargo, por eso, en conclusión) et évitez de répéter le même verbe.",
                "Pour atteindre le niveau B1 et viser le B2, montrez la richesse de votre langue : alternez les temps du passé (indefinido et imperfecto), employez le subjonctif après ses déclencheurs (es importante que, no creo que, cuando pour le futur), le conditionnel pour nuancer (habría que, me gustaría), des comparatifs, et le lexique des axes du programme (la brecha digital, el regadío, el buen vivir). Un exemple précis tiré du cours (une date, un lieu, une œuvre) rend votre texte plus convaincant.",
              ],
              box: { label: "Méthode", text: "1. Analyser la consigne (type, destinataire, registre, longueur). 2. Chercher des idées en espagnol. 3. Faire un plan. 4. Rédiger avec des connecteurs. 5. Garder dix minutes pour relire avec la grille des erreurs." },
            },
            {
              heading: "Prendre la parole : en continu et en interaction",
              paragraphs: [
                "Pour une prise de parole en continu (présenter un document, un sujet, un projet), annoncez votre plan (« Voy a hablar de... », « Primero..., luego..., por último... »), illustrez chaque idée et concluez (« Para terminar, ... »). Parlez à partir de quelques mots-clés, jamais d'un texte rédigé que vous liriez. Articulez : toutes les voyelles se prononcent nettement, le « r » simple est roulé brièvement et le « rr » plus longuement, la « j » (et le « g » devant e, i) se prononce dans la gorge, et « b » et « v » se prononcent de la même façon.",
                "En interaction, il faut savoir réagir et relancer : « ¿Qué opinas tú? », « Estoy de acuerdo contigo, pero... », « ¿Puedes repetir, por favor? », « ¿Qué quieres decir con...? ». Pour gagner du temps sans rester muet, utilisez les mots de liaison de l'oral : « Bueno... », « Pues... », « A ver... », « Es que... », « O sea... ». Si un mot vous manque, contournez-le : « Es una cosa que sirve para... », « Es como un... », ou reformulez avec « es decir ».",
              ],
              box: { label: "Vocabulaire", text: "Gagner du temps : bueno, pues, a ver, es que, o sea. Demander : ¿Puedes repetir? ¿Qué quieres decir? Reformuler : es decir, mejor dicho, o sea. Contourner un mot : es una cosa que sirve para..., es una persona que..." },
            },
            {
              heading: "Se relire : la grille des erreurs fréquentes",
              paragraphs: [
                "Gardez du temps pour relire en vous concentrant sur une catégorie d'erreurs à la fois. Les accents écrits : les mots accentués sur l'avant-avant-dernière syllabe en portent toujours un (música, teléfono, rápido), comme de nombreuses formes de l'indefinido (llegó, comí, habló) et les interrogatifs (qué, cómo, dónde, cuándo). La ponctuation : « ¿ » et « ¡ » ouvrent les questions et les exclamations. Les accords : genre et nombre des adjectifs, « gusta » ou « gustan ».",
                "Vérifiez aussi les verbes : « ser » pour l'identité et les caractéristiques, « estar » pour l'état et la localisation (« Está preocupado », « La Paz está en Bolivia ») ; le subjonctif après ses déclencheurs ; « hay » pour « il y a ». Traquez enfin les calques du français : « darse cuenta » (et non « realizar ») pour « se rendre compte », « esperar » (et non « atender », qui signifie s'occuper de) pour « attendre », « tener ... años » pour l'âge, « estar de acuerdo » pour « être d'accord ».",
              ],
              box: { label: "À retenir", text: "Grille de relecture : 1. accents et ¿ ¡ ; 2. accords (genre, nombre, gusta ou gustan) ; 3. ser ou estar ; 4. indicatif ou subjonctif ; 5. temps du passé ; 6. faux amis et calques (darse cuenta, esperar, estar de acuerdo)." },
            },
          ],
          keyPoints: [
            "Consigne : type de texte, destinataire, registre (tú ou usted), longueur (à 10 % près).",
            "Lettre formelle : Estimado/a...: ... Atentamente. Lettre amicale : Querido/a...: ... Un abrazo.",
            "Plan en espagnol, phrases simples et correctes, connecteurs variés, un exemple précis tiré du cours.",
            "Richesse attendue : passés, subjonctif, conditionnel, comparatifs, lexique des axes.",
            "Oral : annoncer le plan, parler à partir de mots-clés ; en interaction, réagir, relancer, reformuler (es decir, o sea).",
            "Relecture par catégories : accents, accords, ser et estar, modes, temps, faux amis.",
          ],
          example: {
            statement: "Analysez la consigne suivante et proposez un plan détaillé, sans rédiger le texte : « Tu instituto organiza un concurso de artículos para la revista escolar. Escribe un artículo de 120 a 150 palabras: ¿Hay que limitar el número de turistas en Machu Picchu? »",
            solution: [
              "Type de texte : un article de revue scolaire ; il faut donc un titre, une introduction qui accroche et des paragraphes.",
              "Destinataires : les élèves et les professeurs du lycée ; registre courant, sans familiarité excessive. Longueur : 120 à 150 mots, soit quatre paragraphes courts.",
              "Nature de la question : fermée (oui ou non) mais à nuancer ; elle relève de l'axe 6 (l'espace andin) et de l'axe 5 (l'être humain et la nature).",
              "Plan : 1) Introduction : Machu Picchu, site inca du XVe siècle inscrit au patrimoine mondial de l'Unesco en 1983, attire des visiteurs du monde entier ; question posée. 2) Pour limiter : protéger les ruines et l'environnement de la montagne. 3) Concession : le tourisme fait vivre de nombreuses familles de la région. 4) Conclusion nuancée : limiter et organiser les visites plutôt que les interdire.",
              "Outils à placer : es cierto que..., sin embargo... ; es necesario que + subjonctif ; habría que + infinitif ; para que + subjonctif ; lexique : el patrimonio, los visitantes, las ruinas, proteger, la economía local.",
              "Réponse : un article titré en quatre paragraphes (introduction, argument, concession, conclusion nuancée), au registre courant, de 120 à 150 mots, avec au moins deux subjonctifs et un conditionnel.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Chaque phrase contient une erreur fréquente. Corrigez-la et nommez l'erreur : a) Soy de acuerdo con tu opinión. b) Me gusta mucho los viajes. c) La Paz es en Bolivia. d) Espero que vienes pronto. e) Realicé que había un error. f) Cuando seré mayor, viviré en Chile.",
              hint: "Passez chaque phrase à la grille de relecture : ser ou estar, accord de « gustar », mode après le déclencheur, faux ami, cuando + futur.",
              solution: [
                "a) Expression figée avec « estar » : « Estoy de acuerdo con tu opinión ».",
                "b) Accord de « gustar » avec un nom pluriel : « Me gustan mucho los viajes ».",
                "c) Localisation : « estar » : « La Paz está en Bolivia ».",
                "d) « Esperar que » + subjonctif : « Espero que vengas pronto ».",
                "e) Faux ami : « Me di cuenta de que había un error ».",
                "f) « Cuando » + subjonctif pour le futur : « Cuando sea mayor, viviré en Chile ».",
              ],
            },
            {
              level: 2,
              statement: "Réécrivez ce message dans un registre formel, pour l'adresser à la directrice d'une auberge de jeunesse de Cusco : « ¡Hola! Soy Léo. ¿Tienes una habitación libre para tres personas del 2 al 5 de julio? ¿Cuánto cuesta? Contéstame pronto. ¡Besos! »",
              hint: "Changez la formule d'appel et la formule finale, passez de « tú » à « usted » et adoucissez les demandes avec le conditionnel (podría).",
              solution: [
                "Formule d'appel formelle suivie de deux-points : « Estimada señora: ».",
                "Présentation et objet : « Me llamo Léo Durand y le escribo para saber si tiene una habitación libre para tres personas del 2 al 5 de julio. » (« le » et « tiene » : vouvoiement avec « usted »)",
                "Question adoucie au conditionnel : « ¿Podría indicarme también el precio por noche? » au lieu de « ¿Cuánto cuesta? ».",
                "Remerciement à la place de l'ordre « Contéstame pronto » : « Le agradezco de antemano su respuesta. »",
                "Formule finale : « Atentamente, Léo Durand » au lieu de « ¡Besos! ».",
                "Réponse : « Estimada señora: Me llamo Léo Durand y le escribo para saber si tiene una habitación libre para tres personas del 2 al 5 de julio. ¿Podría indicarme también el precio por noche? Le agradezco de antemano su respuesta. Atentamente, Léo Durand »",
              ],
            },
            {
              level: 3,
              statement: "Défi de fin d'année. Pour la revue du lycée, rédigez un texte de 150 à 180 mots : « ¿Qué tema estudiado este año en la clase de español te ha parecido más importante y por qué? ». Appuyez-vous sur des exemples précis du cours, organisez votre texte avec des connecteurs, employez au moins deux subjonctifs, un conditionnel et les deux passés.",
              hint: "Choisissez un seul thème et justifiez-le par deux arguments illustrés, puis faites une concession en citant un autre thème de l'année. Relisez avec la grille des erreurs.",
              solution: [
                "Plan : introduction (les thèmes de l'année, le choix) ; argument 1 (une question vitale, exemples espagnols) ; argument 2 (une question politique, exemple bolivien) ; concession (un autre thème) et proposition ; conclusion.",
                "Introduction et argument 1 : « Este año, en la clase de español, hemos estudiado temas muy variados: la tecnología, la ética, los Andes... Pero el tema que me ha parecido más importante es el agua. En primer lugar, porque es una cuestión vital: sin agua no hay vida ni agricultura. Antes pensaba que era un problema lejano; ahora sé que en España también existen conflictos, por ejemplo en torno a Doñana o al trasvase Tajo-Segura. »",
                "Argument 2 : « Además, este tema muestra que el agua es una cuestión política. En el año 2000, los habitantes de Cochabamba, en Bolivia, se movilizaron contra la privatización del agua y consiguieron que el gobierno anulara el contrato. »",
                "Concession et conclusion : « Es cierto que otros temas, como la inteligencia artificial, son muy actuales; sin embargo, creo que el agua nos concierne a todos. Por eso, me gustaría que en mi instituto organizáramos una campaña para ahorrar agua. En conclusión, este tema me ha enseñado que cada gota cuenta. »",
                "Vérification : environ 170 mots ; exemples précis du cours (Doñana, Tajo-Segura, Cochabamba 2000) ; passés : imperfecto (pensaba, era), indefinido (se movilizaron, consiguieron), et pretérito perfecto pour « este año » (hemos estudiado) ; conditionnel : me gustaría ; subjonctifs à l'imparfait, ouverture vers le B2 : « anulara » (après consiguieron que) et « organizáramos » (après me gustaría que).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Les règles de l'expression écrite et orale.",
            statements: [
              { text: "Dans une lettre formelle, on peut terminer par « Atentamente ».", true: true, why: "« Atentamente » et « Un cordial saludo » sont les formules finales de la lettre formelle." },
              { text: "En espagnol, la formule d'appel d'une lettre est suivie d'une virgule : « Querido Pablo, ».", true: false, why: "Elle est suivie de deux-points : « Querido Pablo: »." },
              { text: "Pour gagner du temps à l'oral, on peut dire « Bueno... », « Pues... » ou « A ver... ».", true: true, why: "Ces mots de liaison permettent de réfléchir sans rester muet." },
              { text: "« Realizar » signifie « se rendre compte ».", true: false, why: "« Realizar » signifie effectuer ; « se rendre compte » se dit « darse cuenta »." },
              { text: "Lors d'une prise de parole en continu, il vaut mieux lire un texte entièrement rédigé.", true: false, why: "On parle à partir de quelques mots-clés : la lecture d'un texte rédigé rend la parole artificielle." },
              { text: "Les formes « llegó » et « comí » portent un accent écrit.", true: true, why: "Les 1re et 3e personnes du singulier de l'indefinido régulier sont accentuées sur la dernière syllabe et portent un accent écrit." },
              { text: "« La Paz es en Bolivia » est correct.", true: false, why: "La localisation s'exprime avec « estar » : « La Paz está en Bolivia »." },
              { text: "Dépasser largement le nombre de mots demandé est toujours valorisé.", true: false, why: "Il faut respecter la longueur à environ 10 % près : un texte trop long multiplie les erreurs." },
            ],
          },
          quiz: [
            { q: "Quelle formule convient pour commencer une lettre au directeur d'une entreprise ?", options: ["Querido amigo mío:", "¡Hola, señor director!", "Estimado señor:", "Un abrazo muy fuerte:"], answer: 2, why: "« Estimado señor: » est la formule d'appel formelle, suivie de deux-points." },
            { q: "Comment dit-on « je me suis rendu compte de mon erreur » ?", options: ["Realicé mi error.", "Me di cuenta de mi error.", "Me rendí cuenta de mi error.", "Me realicé de mi error."], answer: 1, why: "« Se rendre compte » se dit « darse cuenta de » ; « realizar » est un faux ami." },
            { q: "Quelle expression permet de reformuler à l'oral ?", options: ["es decir", "sin embargo", "por lo tanto", "ya que"], answer: 0, why: "« Es decir » (c'est-à-dire) introduit une reformulation ; les autres expriment l'opposition, la conséquence ou la cause." },
            { q: "Complétez : « La Paz ... en Bolivia. »", options: ["es", "hay", "tiene", "está"], answer: 3, why: "La localisation d'un lieu s'exprime avec « estar »." },
            { q: "Combien de mots écrire pour une consigne de « 120 a 150 palabras » ?", options: ["environ 60, pour limiter les erreurs", "entre 120 et 150", "au moins 300, pour montrer son niveau", "le plus possible"], answer: 1, why: "On respecte la fourchette demandée, à environ 10 % près." },
          ],
          trap: "Traduire mentalement des phrases françaises complexes et produire des calques (« realizar » pour « se rendre compte », « soy de acuerdo »), ou sauter la relecture. Écrivez directement en espagnol avec les structures que vous maîtrisez, et gardez du temps pour relire avec la grille.",
          method: "Constituez votre boîte à outils sur une fiche : dix connecteurs, cinq déclencheurs du subjonctif, cinq formules d'opinion, les formules de lettre et vos cinq erreurs les plus fréquentes. Relisez-la avant chaque évaluation et cochez chaque outil quand vous l'avez employé.",
        },
      ],
    },
  ],
}
