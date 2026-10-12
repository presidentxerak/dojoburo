import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'espagnol-4e',
  chapters: [
    {
      id: 'contar-pasado',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'preterito-perfecto',
          title: 'Le passé composé : le pretérito perfecto',
          minutes: 30,
          objectives: [
            "Former le pretérito perfecto avec l'auxiliaire « haber » et le participe passé.",
            "Reconnaître et employer les participes passés irréguliers les plus fréquents.",
            "Raconter ce que l'on a fait aujourd'hui ou cette semaine avec les marqueurs de temps adaptés.",
          ],
          course: [
            {
              heading: "À quoi sert le pretérito perfecto ?",
              paragraphs: [
                "Le pretérito perfecto ressemble beaucoup au passé composé français : « he comido » signifie « j'ai mangé ». En Espagne, on l'emploie pour une action passée qui se situe dans une période de temps qui n'est pas encore terminée au moment où l'on parle : aujourd'hui, ce matin, cette semaine, cette année.",
                "Exemples : « Hoy he comido en la cantina. » (Aujourd'hui, j'ai mangé à la cantine.) « Esta semana hemos tenido dos exámenes. » (Cette semaine, nous avons eu deux contrôles.) La journée et la semaine ne sont pas finies : c'est pourquoi on choisit le pretérito perfecto.",
                "On l'emploie aussi pour parler d'une expérience, sans dire quand elle a eu lieu : « ¿Alguna vez has visitado México? » (Avez-vous déjà visité le Mexique ?) « Nunca he comido paella. » (Je n'ai jamais mangé de paella.) Attention : dans une grande partie de l'Amérique latine, on emploie plutôt un autre temps, le pretérito indefinido, que vous étudierez dans la leçon suivante.",
              ],
              box: { label: "Repère", text: "Marqueurs de temps du pretérito perfecto : hoy (aujourd'hui), esta mañana (ce matin), esta tarde (cet après-midi), esta semana (cette semaine), este mes (ce mois-ci), este año (cette année), ya (déjà), todavía no (pas encore), nunca (jamais), alguna vez (déjà, une fois)." },
            },
            {
              heading: "La formation : haber + participe passé",
              paragraphs: [
                "Le pretérito perfecto est un temps composé de deux mots. Le premier est l'auxiliaire « haber » conjugué au présent : he, has, ha, hemos, habéis, han. Le second est le participe passé du verbe que l'on veut conjuguer.",
                "Le participe passé régulier se forme à partir du radical (l'infinitif sans sa terminaison). Pour les verbes en -ar, on ajoute -ado : hablar donne hablado. Pour les verbes en -er et en -ir, on ajoute -ido : comer donne comido, vivir donne vivido.",
                "Exemple complet avec « visitar » : he visitado, has visitado, ha visitado, hemos visitado, habéis visitado, han visitado. Seul l'auxiliaire change avec la personne ; le participe reste le même.",
              ],
              box: { label: "Règle", text: "Haber au présent : yo he, tú has, él / ella / usted ha, nosotros hemos, vosotros habéis, ellos / ellas / ustedes han. Participe passé : -ar → -ado (hablado) ; -er et -ir → -ido (comido, vivido)." },
            },
            {
              heading: "Trois règles qui changent du français",
              paragraphs: [
                "Première règle : l'auxiliaire est toujours « haber », jamais « ser » ni « estar ». En français, on dit « je suis allé », mais en espagnol on dit « he ido ». De même, « elle est arrivée » se dit « ha llegado ».",
                "Deuxième règle : le participe passé ne s'accorde jamais. Il se termine toujours par -o. On dit « Ana ha llegado » et « las chicas han llegado », même si le sujet est féminin ou pluriel.",
                "Troisième règle : on ne sépare jamais « haber » du participe. La négation et les pronoms se placent donc avant l'auxiliaire : « No he comido » (je n'ai pas mangé), « Lo he visto » (je l'ai vu), « Me he duchado » (je me suis douché).",
              ],
              box: { label: "À retenir", text: "Toujours haber (he ido, et non soy ido). Participe invariable en -o (Ana se ha levantado). Rien entre haber et le participe : no, me, te, se, lo, la se placent avant (No me he levantado)." },
            },
            {
              heading: "Les participes passés irréguliers",
              paragraphs: [
                "Quelques verbes très fréquents ont un participe passé irrégulier. Il faut les apprendre par cœur : hacer → hecho (fait), decir → dicho (dit), ver → visto (vu), escribir → escrito (écrit), poner → puesto (mis), volver → vuelto (revenu), abrir → abierto (ouvert), romper → roto (cassé), morir → muerto (mort).",
                "D'autres participes sont réguliers mais prennent un accent écrit pour que le i se prononce bien séparé : leer → leído, oír → oído, traer → traído. Enfin, « ir » et « ser » sont réguliers au participe : ido et sido. Exemple : « Esta mañana he hecho los deberes y he escrito un correo a mi abuela. »",
              ],
            },
          ],
          keyPoints: [
            "Pretérito perfecto = haber au présent (he, has, ha, hemos, habéis, han) + participe passé.",
            "Participe régulier : -ar → -ado ; -er et -ir → -ido.",
            "On l'emploie avec hoy, esta mañana, esta semana, este año, ya, nunca, alguna vez.",
            "Toujours haber, jamais ser ni estar : he ido, ha llegado.",
            "Le participe ne s'accorde pas et ne se sépare jamais de haber : No lo he visto.",
            "Irréguliers : hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto, muerto.",
          ],
          example: {
            statement: "Traduisez en espagnol : « Ce matin, je me suis levé à sept heures et j'ai pris mon petit-déjeuner. Je n'ai pas encore fait mes devoirs. »",
            solution: [
              "« Ce matin » (esta mañana) est une période qui n'est pas terminée : on choisit le pretérito perfecto.",
              "« Je me suis levé » : verbe pronominal « levantarse ». Le pronom « me » se place avant l'auxiliaire, et l'auxiliaire est « haber », pas « ser » : me he levantado.",
              "« J'ai pris mon petit-déjeuner » : verbe « desayunar », participe régulier en -ado : he desayunado.",
              "« Je n'ai pas encore fait » : « todavía no » se place avant l'auxiliaire, et « hacer » a un participe irrégulier : todavía no he hecho.",
              "Réponse : « Esta mañana me he levantado a las siete y he desayunado. Todavía no he hecho los deberes. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au pretérito perfecto : a) (yo) comer ; b) (tú) terminar ; c) (ella) vivir ; d) (nosotros) jugar ; e) (vosotros) beber ; f) (ellos) visitar.",
              hint: "Choisissez d'abord la forme de haber qui correspond à la personne, puis ajoutez -ado pour un verbe en -ar et -ido pour un verbe en -er ou en -ir.",
              solution: [
                "a) yo → he ; comer est en -er → comido : he comido.",
                "b) tú → has ; terminar est en -ar → terminado : has terminado.",
                "c) ella → ha ; vivir est en -ir → vivido : ha vivido.",
                "d) nosotros → hemos ; jugar est en -ar → jugado : hemos jugado.",
                "e) vosotros → habéis ; beber est en -er → bebido : habéis bebido.",
                "f) ellos → han ; visitar est en -ar → visitado : han visitado.",
              ],
            },
            {
              level: 2,
              statement: "Complétez au pretérito perfecto. Attention aux participes irréguliers. a) Esta mañana (yo, hacer) ___ los deberes. b) ¿(Tú, ver) ___ la película? c) Mis padres (abrir) ___ la ventana. d) Hoy Lucía (escribir) ___ un correo. e) Esta tarde (nosotros, volver) ___ tarde. f) ¿Qué (vosotros, decir) ___?",
              hint: "Les six verbes ont un participe irrégulier : hacer, ver, abrir, escribir, volver, decir. Récitez la liste du cours avant de commencer.",
              solution: [
                "a) hacer → hecho : Esta mañana he hecho los deberes.",
                "b) ver → visto : ¿Has visto la película?",
                "c) abrir → abierto ; « mis padres » = ellos : Mis padres han abierto la ventana.",
                "d) escribir → escrito : Hoy Lucía ha escrito un correo.",
                "e) volver → vuelto : Esta tarde hemos vuelto tarde.",
                "f) decir → dicho : ¿Qué habéis dicho?",
              ],
            },
            {
              level: 3,
              statement: "Défi : chaque phrase contient une erreur. Corrigez-la et expliquez la règle. a) Hoy soy ido al cine. b) (Une fille parle) Esta mañana me he levantada temprano. c) He no comido en la cantina. d) Este año he escribido muchos poemas. e) ¿El museo? Hemos visitado lo esta semana.",
              hint: "Vérifiez quatre points : l'auxiliaire, l'accord du participe, la place de la négation et des pronoms, les participes irréguliers.",
              solution: [
                "a) L'auxiliaire est toujours haber : Hoy he ido al cine.",
                "b) Le participe ne s'accorde jamais : Esta mañana me he levantado temprano.",
                "c) La négation se place avant haber : No he comido en la cantina.",
                "d) Le participe de escribir est irrégulier : Este año he escrito muchos poemas.",
                "e) Le pronom se place avant haber, on ne l'accroche pas au participe : ¿El museo? Lo hemos visitado esta semana.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque infinitif à son participe passé irrégulier.",
            pairs: [
              { left: "hacer", right: "hecho" },
              { left: "ver", right: "visto" },
              { left: "decir", right: "dicho" },
              { left: "escribir", right: "escrito" },
              { left: "poner", right: "puesto" },
              { left: "volver", right: "vuelto" },
            ],
          },
          quiz: [
            { q: "Complétez : « Hoy (yo) ___ al parque. »", options: ["he ido", "soy ido", "ha ido", "he ida"], answer: 0, why: "Le pretérito perfecto se forme toujours avec haber ; à la 1re personne, c'est « he ». Le participe « ido » reste invariable." },
            { q: "Quel est le participe passé de « escribir » ?", options: ["escribido", "escrito", "escribiendo", "escrido"], answer: 1, why: "« Escribir » a un participe irrégulier : escrito. « Escribiendo » est le gérondif." },
            { q: "Quel marqueur de temps s'emploie avec le pretérito perfecto en Espagne ?", options: ["ayer", "el año pasado", "en 2019", "esta semana"], answer: 3, why: "« Esta semana » désigne une période qui n'est pas terminée. Les trois autres marqueurs renvoient à un passé terminé." },
            { q: "Une fille dit : « Esta mañana me he ___ temprano. »", options: ["levantada", "levantado", "levantar", "levantando"], answer: 1, why: "Au pretérito perfecto, le participe ne s'accorde jamais : il se termine toujours par -o." },
            { q: "Quelle phrase est correcte ?", options: ["He no comido.", "He comido no.", "No he comido."], answer: 2, why: "On ne sépare jamais haber du participe : la négation se place avant l'auxiliaire." },
          ],
          trap: "Calquer le français « je suis allé » et écrire « soy ido » : en espagnol, l'auxiliaire est toujours haber (he ido). Autre erreur fréquente : accorder le participe (« se ha levantada ») alors qu'il reste toujours en -o.",
          method: "Apprenez les participes irréguliers par paires à voix haute (hacer, hecho ; decir, dicho ; ver, visto...) puis, chaque soir pendant une semaine, écrivez trois phrases qui commencent par « Hoy he... » pour raconter votre journée.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'preterito-indefinido',
          title: 'Le pretérito indefinido des verbes réguliers',
          minutes: 35,
          objectives: [
            "Conjuguer les verbes réguliers en -ar, en -er et en -ir au pretérito indefinido.",
            "Écrire correctement les accents et les changements d'orthographe (jugué, busqué, empecé).",
            "Choisir entre le pretérito indefinido et le pretérito perfecto selon le marqueur de temps.",
          ],
          course: [
            {
              heading: "À quoi sert le pretérito indefinido ?",
              paragraphs: [
                "Le pretérito indefinido sert à raconter une action passée et terminée, située dans une période de temps elle aussi terminée : hier, le week-end dernier, l'année dernière, en 2015. Il correspond souvent au passé composé français dans la conversation (« hier, j'ai mangé ») et au passé simple dans les récits écrits (« il mangea »).",
                "Exemples : « Ayer comí en casa de mis abuelos. » (Hier, j'ai mangé chez mes grands-parents.) « El año pasado mi hermana viajó a Perú. » (L'année dernière, ma sœur a voyagé au Pérou.) C'est le temps principal du récit au passé en espagnol.",
              ],
              box: { label: "Repère", text: "Marqueurs du pretérito indefinido : ayer (hier), anteayer (avant-hier), anoche (hier soir), el lunes pasado (lundi dernier), la semana pasada (la semaine dernière), el mes pasado, el año pasado, hace tres días (il y a trois jours), en 2015." },
            },
            {
              heading: "Les terminaisons des verbes réguliers",
              paragraphs: [
                "On enlève la terminaison de l'infinitif et on ajoute les terminaisons du pretérito indefinido. Verbes en -ar (hablar) : hablé, hablaste, habló, hablamos, hablasteis, hablaron.",
                "Les verbes en -er et en -ir ont exactement les mêmes terminaisons. Comer : comí, comiste, comió, comimos, comisteis, comieron. Vivir : viví, viviste, vivió, vivimos, vivisteis, vivieron.",
                "Regardez bien les accents : la 1re et la 3e personne du singulier portent un accent écrit sur la dernière syllabe (hablé, habló, comí, comió). Cet accent est indispensable, car il change le sens : « hablo » signifie « je parle » (présent), alors que « habló » signifie « il a parlé » (passé).",
              ],
              box: { label: "Règle", text: "-ar : -é, -aste, -ó, -amos, -asteis, -aron (hablé, hablaste, habló, hablamos, hablasteis, hablaron). -er et -ir : -í, -iste, -ió, -imos, -isteis, -ieron (comí, comiste, comió, comimos, comisteis, comieron)." },
            },
            {
              heading: "Les changements d'orthographe à la 1re personne",
              paragraphs: [
                "Certains verbes réguliers changent une lettre à la 1re personne du singulier, uniquement pour garder le même son. Les verbes en -car prennent -qué : buscar → busqué, tocar → toqué, sacar → saqué. Les verbes en -gar prennent -gué : jugar → jugué, llegar → llegué, pagar → pagué. Les verbes en -zar prennent -cé : empezar → empecé, cruzar → crucé.",
                "Les autres personnes ne changent pas : buscaste, buscó ; jugaste, jugó ; empezaste, empezó. Bonne nouvelle : les verbes à diphtongue du présent en -ar et en -er ne diphtonguent pas au pretérito indefinido. On dit « jugué » (et non « juegué »), « volví » (et non « vuelví »), « pensé » (et non « piensé »).",
              ],
              box: { label: "Attention", text: "Certains verbes très fréquents sont irréguliers au pretérito indefinido (ser, ir, hacer, tener, estar, dormir...). Vous les étudierez en 3e. Cette leçon ne concerne que les verbes réguliers." },
            },
            {
              heading: "Indefinido ou perfecto ?",
              paragraphs: [
                "En Espagne, on choisit le temps selon la période dont on parle. Si la période est terminée (ayer, el sábado pasado), on emploie le pretérito indefinido : « Ayer desayuné a las ocho. » Si la période n'est pas terminée (hoy, esta semana), on emploie le pretérito perfecto : « Hoy he desayunado a las ocho. »",
                "Dans une grande partie de l'Amérique latine, on emploie le pretérito indefinido dans les deux cas : un Mexicain dira volontiers « Hoy desayuné a las ocho ». Les deux usages sont corrects ; en classe, suivez l'usage d'Espagne et repérez bien le marqueur de temps.",
                "Dernier détail : pour les verbes en -ar et en -ir, la forme « nosotros » est la même au présent et au pretérito indefinido (hablamos, vivimos). C'est le contexte qui indique le temps : « Ayer hablamos con el profesor. » Pour les verbes en -er, les formes sont différentes : comemos (présent), comimos (passé).",
              ],
            },
          ],
          keyPoints: [
            "Pretérito indefinido = action passée dans une période terminée (ayer, anoche, el año pasado).",
            "-ar : -é, -aste, -ó, -amos, -asteis, -aron.",
            "-er et -ir : -í, -iste, -ió, -imos, -isteis, -ieron.",
            "Accent obligatoire : hablo (je parle) ≠ habló (il a parlé).",
            "1re personne : -car → -qué, -gar → -gué, -zar → -cé (busqué, jugué, empecé).",
            "Hoy, esta semana → perfecto ; ayer, la semana pasada → indefinido (usage d'Espagne).",
          ],
          example: {
            statement: "Conjuguez les verbes entre parenthèses au pretérito indefinido : « Ayer (yo, llegar) ___ tarde al colegio y (comer) ___ en la cantina con Marta. Ella (escribir) ___ un mensaje a su madre. »",
            solution: [
              "Le marqueur « ayer » indique une période terminée : on emploie le pretérito indefinido.",
              "« Llegar » à la 1re personne : terminaison -é, et le g devient gu pour garder le son [g] : llegué.",
              "« Comer » à la 1re personne : terminaison -í : comí.",
              "« Escribir » à la 3e personne (ella) : terminaison -ió : escribió.",
              "Réponse : « Ayer llegué tarde al colegio y comí en la cantina con Marta. Ella escribió un mensaje a su madre. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez au pretérito indefinido : a) (yo) trabajar ; b) (tú) comer ; c) (él) escribir ; d) (nosotros) bailar ; e) (vosotros) beber ; f) (ellas) abrir.",
              hint: "Repérez si le verbe est en -ar ou en -er / -ir, puis choisissez la terminaison de la bonne personne. N'oubliez pas les accents à la 1re et à la 3e personne du singulier.",
              solution: [
                "a) trabajar, -ar, yo → -é : trabajé.",
                "b) comer, -er, tú → -iste : comiste.",
                "c) escribir, -ir, él → -ió : escribió.",
                "d) bailar, -ar, nosotros → -amos : bailamos.",
                "e) beber, -er, vosotros → -isteis : bebisteis.",
                "f) abrir, -ir, ellas → -ieron : abrieron.",
              ],
            },
            {
              level: 2,
              statement: "Mettez les verbes au pretérito indefinido : « Ayer, Marta (llegar) ___ a casa a las cinco. (Comer) ___ un bocadillo y (escribir) ___ a su amiga. Yo (jugar) ___ al fútbol con mi hermano. Por la noche, Marta y sus padres (cenar) ___ juntos y (mirar) ___ una película. »",
              hint: "Cherchez le sujet de chaque verbe. « Marta y sus padres » équivaut à « ellos ». Pour « jugar » à la 1re personne, pensez au changement d'orthographe.",
              solution: [
                "Marta (ella) + llegar : llegó (le changement g → gu ne concerne que « yo »).",
                "Marta + comer : comió ; Marta + escribir : escribió.",
                "Yo + jugar : jugué (g → gu devant é ; pas de diphtongue au passé).",
                "Marta y sus padres (ellos) + cenar : cenaron ; + mirar : miraron.",
                "Texte : « Ayer, Marta llegó a casa a las cinco. Comió un bocadillo y escribió a su amiga. Yo jugué al fútbol con mi hermano. Por la noche, Marta y sus padres cenaron juntos y miraron una película. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : choisissez entre pretérito perfecto et pretérito indefinido (usage d'Espagne), puis conjuguez. a) Ayer (yo, visitar) ___ el museo. b) Hoy (nosotros, comer) ___ paella. c) El año pasado mis primos (viajar) ___ a México. d) Esta semana (tú, no estudiar) ___ nada. e) Anoche Pablo (volver) ___ tarde. f) En 2010 mi madre (empezar) ___ a trabajar.",
              hint: "Soulignez d'abord le marqueur de temps : la période est-elle terminée (indefinido) ou non (perfecto) ? Puis vérifiez la personne et les accents.",
              solution: [
                "a) « Ayer » : période terminée → indefinido : visité.",
                "b) « Hoy » : période non terminée → perfecto : hemos comido.",
                "c) « El año pasado » : terminé → indefinido, ellos : viajaron.",
                "d) « Esta semana » : non terminée → perfecto, la négation avant haber : no has estudiado.",
                "e) « Anoche » : terminé → indefinido ; pas de diphtongue au passé : volvió.",
                "f) « En 2010 » : terminé → indefinido, 3e personne, donc sans changement d'orthographe : empezó.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur le pretérito indefinido.",
            statements: [
              { text: "« Hablo » et « habló » ont le même sens.", true: false, why: "« Hablo » est au présent (je parle) ; « habló » est au passé (il a parlé). L'accent change le sens." },
              { text: "Les verbes en -er et en -ir ont les mêmes terminaisons au pretérito indefinido.", true: true, why: "Comí, comiste, comió... et viví, viviste, vivió... : ce sont les mêmes terminaisons." },
              { text: "« Comimos » a la même forme au présent et au passé.", true: false, why: "Pour les verbes en -er, le présent est « comemos » et le passé « comimos ». Seuls les verbes en -ar et en -ir ont la même forme." },
              { text: "On écrit « jugué » avec un u pour garder le son [g].", true: true, why: "Devant e, le g se prononcerait comme la jota ; le u permet de garder le son [g]." },
              { text: "On emploie le pretérito indefinido avec « ayer » et « el año pasado ».", true: true, why: "Ces marqueurs désignent une période terminée." },
              { text: "En Espagne, on dit « Este año viajé a Roma ».", true: false, why: "« Este año » n'est pas terminé : en Espagne, on dit « Este año he viajado a Roma »." },
              { text: "« Volver » donne « vuelví » à la 1re personne.", true: false, why: "La diphtongue du présent disparaît au pretérito indefinido : on dit « volví »." },
            ],
          },
          quiz: [
            { q: "Complétez : « Ayer (ellos) ___ en un restaurante. »", options: ["comen", "comieron", "comiron", "han comido"], answer: 1, why: "« Ayer » demande le pretérito indefinido ; à la 3e personne du pluriel, les verbes en -er prennent -ieron." },
            { q: "Quelle est la forme de « llegar » à la 1re personne du singulier ?", options: ["llegé", "llegó", "llegué", "llegaste"], answer: 2, why: "À la 1re personne, le g devient gu devant é : llegué. « Llegó » correspond à « él » et « llegaste » à « tú »." },
            { q: "Comment traduire « hier, il a parlé » ?", options: ["Ayer habló.", "Ayer hablo.", "Ayer habla.", "Ayer hablé."], answer: 0, why: "« Il » correspond à la 3e personne : habló, avec un accent sur le o. « Hablé » signifie « j'ai parlé »." },
            { q: "Quel marqueur de temps demande le pretérito indefinido ?", options: ["hoy", "esta mañana", "anoche", "nunca"], answer: 2, why: "« Anoche » (hier soir) désigne une période terminée. Les autres s'emploient avec le pretérito perfecto." },
            { q: "« Vivisteis » : quel est le sujet ?", options: ["vosotros", "nosotros", "ellos", "tú"], answer: 0, why: "La terminaison -isteis correspond à « vosotros ». Nosotros donnerait « vivimos »." },
          ],
          trap: "Oublier l'accent écrit à la 1re et à la 3e personne du singulier : sans accent, « hablo » est un présent (je parle) et non un passé. Autre erreur : garder la diphtongue du présent et écrire « juegué » ou « vuelví » au lieu de « jugué » et « volví ».",
          method: "Récitez les deux séries de terminaisons comme une comptine (é, aste, ó, amos, asteis, aron ; í, iste, ió, imos, isteis, ieron), puis entourez toujours le marqueur de temps d'une phrase avant de choisir entre perfecto et indefinido.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'contar-fin-de-semana',
          title: 'Raconter un week-end ou un voyage',
          minutes: 30,
          objectives: [
            "Rédiger un court récit au passé en organisant les actions dans l'ordre chronologique.",
            "Employer les connecteurs de temps (primero, luego, después, por la tarde, al final).",
            "Exprimer son opinion sur un moment passé (me gustó, me encantó, lo pasé bien).",
          ],
          course: [
            {
              heading: "Le plan d'un récit : quand, où, avec qui, quoi",
              paragraphs: [
                "Raconter un week-end ou un voyage, c'est répondre à quelques questions simples. Dans la première phrase, on situe le récit : cuándo (quand), dónde (où), con quién (avec qui). Exemple : « El sábado pasado, fui a la playa con mis primos. »",
                "Ensuite, on raconte les actions dans l'ordre où elles se sont passées, de la plus ancienne à la plus récente. Enfin, on termine par une phrase qui donne son opinion ou son impression : « ¡Lo pasé genial! » (Je me suis super bien amusé !).",
              ],
              box: { label: "Méthode", text: "1. Situer : cuándo, dónde, con quién. 2. Raconter les actions dans l'ordre, avec des connecteurs. 3. Conclure avec une opinion. Un bon récit court tient en six à dix phrases." },
            },
            {
              heading: "Les connecteurs et les marqueurs de temps",
              paragraphs: [
                "Les connecteurs relient les actions et montrent leur ordre. Pour commencer : primero (d'abord). Pour continuer : luego, después (ensuite, après), más tarde (plus tard), entonces (alors), al día siguiente (le lendemain). Pour finir : al final, por último (enfin, pour finir).",
                "On précise aussi le moment de la journée : por la mañana (le matin), por la tarde (l'après-midi), por la noche (le soir), a las diez (à dix heures). Et le jour : el sábado pasado (samedi dernier), el domingo por la tarde (dimanche après-midi), el verano pasado (l'été dernier).",
              ],
              box: { label: "À retenir", text: "Primero → luego / después / más tarde / entonces → al final / por último. Por la mañana, por la tarde, por la noche. El sábado pasado, el verano pasado, al día siguiente." },
            },
            {
              heading: "Les verbes utiles au pretérito indefinido",
              paragraphs: [
                "Le récit d'un week-end terminé se fait au pretérito indefinido. Voici des verbes réguliers très utiles : levantarse (me levanté), desayunar (desayuné), pasear (paseé), visitar (visité), montar en bici (monté en bici), nadar (nadé), jugar (jugué), comprar (compré), sacar fotos (saqué fotos), comer (comí), salir (salí), volver (volví), quedarse en casa (me quedé en casa), descansar (descansé).",
                "Pour un voyage : viajar en tren, en avión, en coche (viajé), llegar (llegué), probar platos típicos (probé), conocer una ciudad (conocí). Avec « nosotros », les formes en -ar et en -ir ressemblent au présent : « Visitamos el museo ». C'est le marqueur de temps (el sábado pasado) qui montre que l'on parle du passé.",
              ],
              box: { label: "Repère", text: "Deux formes irrégulières très fréquentes, à apprendre telles quelles pour l'instant : « fui » (je suis allé, verbe ir) et « fue » (ce fut, c'était, verbe ser). Exemple : Fui a Madrid. Fue un viaje muy bonito." },
            },
            {
              heading: "Donner son opinion sur un moment passé",
              paragraphs: [
                "Pour dire ce que l'on a aimé, on met « gustar » et « encantar » au passé, à la 3e personne : « Me gustó la excursión » (l'excursion m'a plu), « Me gustaron los museos » (les musées m'ont plu), « Me encantó la comida » (j'ai adoré la nourriture). Comme au présent, le verbe s'accorde avec la chose aimée.",
                "Pour dire comment on s'est senti : « Lo pasé bien » (je me suis bien amusé), « Lo pasé genial » ou « fenomenal » (super bien), « Lo pasé fatal » (très mal). On peut aussi dire « Fue un día estupendo » (ce fut une journée formidable) ou « No me gustó nada » (cela ne m'a pas plu du tout).",
              ],
            },
          ],
          keyPoints: [
            "Situer le récit dès la première phrase : cuándo, dónde, con quién.",
            "Raconter dans l'ordre : primero, luego, después, más tarde, al final.",
            "Week-end terminé → pretérito indefinido : me levanté, jugué, comí, salí.",
            "Me gustó / me encantó + nom singulier ; me gustaron / me encantaron + nom pluriel.",
            "Lo pasé bien, genial, fenomenal ; lo pasé fatal.",
            "Fui (je suis allé) et fue (ce fut) : deux formes à apprendre par cœur.",
          ],
          example: {
            statement: "À partir de ces notes, rédigez cinq phrases en espagnol : samedi matin, se lever tard ; samedi après-midi, jouer au basket avec Hugo ; samedi soir, dîner chez les grands-parents ; dimanche, se reposer et regarder une série ; avis : très bien.",
            solution: [
              "Le week-end est terminé : on emploie le pretérito indefinido, à la 1re personne (yo).",
              "Samedi matin : « El sábado pasado me levanté tarde. » (levantarse → me levanté).",
              "Après-midi et soir : « Por la tarde, jugué al baloncesto con Hugo. » (jugar → jugué). « Por la noche, cené en casa de mis abuelos. »",
              "Dimanche : « El domingo descansé y miré una serie. »",
              "Opinion : « ¡Lo pasé muy bien! »",
              "Réponse : « El sábado pasado me levanté tarde. Por la tarde, jugué al baloncesto con Hugo. Por la noche, cené en casa de mis abuelos. El domingo descansé y miré una serie. ¡Lo pasé muy bien! »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez ce récit avec les mots suivants : primero, después, por la noche, al final. « El domingo pasado, ___ desayuné con mis padres. ___, paseamos por el parque. ___, cenamos pizza. ___, ¡lo pasé muy bien! »",
              hint: "Repérez le connecteur qui ouvre le récit, celui qui le conclut, et celui qui indique le moment du repas du soir.",
              solution: [
                "Le récit commence par la première action : primero.",
                "La deuxième action suit : después.",
                "Le dîner a lieu le soir : por la noche.",
                "La phrase d'opinion conclut : al final.",
                "Texte : « El domingo pasado, primero desayuné con mis padres. Después, paseamos por el parque. Por la noche, cenamos pizza. Al final, ¡lo pasé muy bien! »",
              ],
            },
            {
              level: 2,
              statement: "Mettez les verbes au pretérito indefinido : « El sábado pasado, (yo, viajar) ___ a Sevilla con mi clase. (Nosotros, visitar) ___ la catedral y (comer) ___ tapas. Mi amiga Lola (comprar) ___ un abanico. Por la tarde, (yo, sacar) ___ muchas fotos y por la noche (nosotros, volver) ___ en tren. » (récit inventé pour l'exercice)",
              hint: "Identifiez la personne de chaque verbe. Attention au verbe en -car à la 1re personne, et rappelez-vous que volver ne diphtongue pas au passé.",
              solution: [
                "yo + viajar : viajé.",
                "nosotros + visitar : visitamos ; nosotros + comer : comimos.",
                "Lola (ella) + comprar : compró.",
                "yo + sacar : saqué (c → qu devant é pour garder le son [k]).",
                "nosotros + volver : volvimos.",
                "Texte : « El sábado pasado, viajé a Sevilla con mi clase. Visitamos la catedral y comimos tapas. Mi amiga Lola compró un abanico. Por la tarde, saqué muchas fotos y por la noche volvimos en tren. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : racontez en huit à dix phrases un voyage de l'été dernier (réel ou imaginaire). Contraintes : situer le récit dans la première phrase ; employer au moins trois connecteurs et deux moments de la journée ; employer au moins cinq verbes au pretérito indefinido, dont un verbe en -car ou en -gar à la 1re personne ; terminer par une opinion.",
              hint: "Préparez d'abord une liste de notes en français dans l'ordre chronologique, puis transformez chaque note en phrase. Relisez en vérifiant les accents (visité, comí, llegó).",
              solution: [
                "Phrase d'ouverture (cuándo, dónde, con quién) : « El verano pasado, viajé a Barcelona con mi familia. »",
                "Arrivée : « Llegamos en tren el lunes por la mañana. »",
                "Actions dans l'ordre : « Primero, visitamos la Sagrada Familia: me encantó. Después, paseamos por las Ramblas y comimos paella. »",
                "Le lendemain : « Al día siguiente, nadé en la playa y jugué al voleibol con mi hermano. Por la noche, cenamos en una terraza. »",
                "Fin du voyage et opinion : « Al final, volvimos a casa el sábado. ¡Lo pasé genial! »",
                "Vérification : connecteurs (primero, después, al día siguiente, al final) ; moments (por la mañana, por la noche) ; verbes au passé (viajé, llegamos, visitamos, comimos, nadé, jugué, cenamos, volvimos) ; « jugué » est le verbe en -gar ; opinion finale.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez la journée de Carlos dans l'ordre chronologique.",
            items: [
              "A las nueve, me levanté.",
              "A las diez, desayuné con mi familia.",
              "A las doce, monté en bici con mis primos.",
              "Por la tarde, visité un museo.",
              "Por la noche, cené en casa.",
              "A las once de la noche, me acosté.",
            ],
          },
          quiz: [
            { q: "Que signifie « Lo pasé fatal » ?", options: ["Ça s'est très bien passé.", "Ça s'est très mal passé.", "C'était le dernier jour.", "Je suis passé vite."], answer: 1, why: "« Pasarlo fatal » signifie passer un très mauvais moment. Le contraire est « pasarlo genial »." },
            { q: "Quel connecteur sert à conclure un récit ?", options: ["primero", "luego", "al final", "más tarde"], answer: 2, why: "« Al final » signifie « enfin, pour finir ». « Primero » ouvre le récit ; « luego » et « más tarde » le font avancer." },
            { q: "Complétez : « El sábado pasado (yo) ___ con mis amigos. »", options: ["salí", "salió", "salgo", "he salido"], answer: 0, why: "« El sábado pasado » est une période terminée : pretérito indefinido, 1re personne : salí." },
            { q: "Comment dire « je suis allé à la plage » ?", options: ["Fui a la playa.", "Soy ido a la playa.", "Fue a la playa."], answer: 0, why: "« Fui » est la forme de « ir » à la 1re personne. « Fue » correspond à la 3e personne (il est allé)." },
            { q: "Que faut-il préciser dès la première phrase d'un récit ?", options: ["le prix du voyage", "quand, où et avec qui", "la météo de la semaine", "le nom de l'hôtel"], answer: 1, why: "La première phrase situe le récit : cuándo, dónde, con quién." },
          ],
          trap: "Écrire « Me gustó los museos » : « gustar » s'accorde avec la chose aimée, il faut donc « Me gustaron los museos ». Autre erreur : aligner des phrases sans connecteurs, ce qui donne une liste d'actions et non un vrai récit.",
          method: "Avant d'écrire, notez en français les actions dans l'ordre sur une ligne du temps (matin, après-midi, soir), puis associez un connecteur différent à chaque étape. Relisez enfin en entourant chaque verbe pour vérifier qu'il est bien au passé.",
        },
      ],
    },
    {
      id: 'mundo-hispanico',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'fiestas-espana',
          title: 'Fêtes d\'Espagne : las Fallas, la Semana Santa',
          minutes: 30,
          objectives: [
            "Présenter deux grandes fêtes d'Espagne : las Fallas de Valencia et la Semana Santa.",
            "Employer le vocabulaire de la fête (el desfile, la procesión, los fuegos artificiales, el traje tradicional).",
            "Décrire une fête au présent avec la tournure « se celebra », « se queman ».",
          ],
          course: [
            {
              heading: "Las Fallas de Valencia",
              paragraphs: [
                "Les Fallas sont la grande fête de Valence (Valencia), sur la côte est de l'Espagne. Elles ont lieu chaque année en mars et atteignent leur sommet du 15 au 19 mars, jour de la Saint-Joseph (San José), le patron des charpentiers. Selon la tradition, la fête viendrait d'une vieille coutume des charpentiers, qui brûlaient à la fin de l'hiver des morceaux de bois et des objets dont ils n'avaient plus besoin.",
                "Une « falla » est un énorme monument en bois, en carton et en polystyrène, peint de couleurs vives. Il est composé de grandes figures appelées « ninots ». Les fallas sont souvent humoristiques : elles se moquent de l'actualité, des personnalités célèbres ou des défauts de la société. Chaque quartier prépare la sienne pendant des mois.",
                "Plusieurs moments de la fête portent un nom en valencien, la langue régionale parlée à Valence avec l'espagnol. La « mascletà » est un spectacle de pétards très bruyant, chaque jour à 14 h du 1er au 19 mars, sur la place de l'Hôtel de Ville. La « plantà », vers le 15 mars, est l'installation des fallas dans les rues. Les 17 et 18 mars, les « falleras » et les « falleros », en costume traditionnel, offrent des fleurs à la Vierge : c'est la « Ofrenda ». Enfin, la nuit du 19 mars, c'est la « cremà » : on brûle toutes les fallas.",
                "Une seule figure échappe aux flammes chaque année : le « ninot indultat » (le ninot gracié), choisi par le vote du public. Il rejoint le musée des Fallas (el Museo Fallero). Depuis 2016, les Fallas sont inscrites par l'UNESCO au patrimoine culturel immatériel de l'humanité.",
              ],
              box: { label: "À retenir", text: "Las Fallas : Valencia, en marzo (del 15 al 19). Una falla : un monument satirique fait de ninots. La mascletà : les pétards de 14 h. La Ofrenda : les fleurs offertes à la Vierge. La cremà : la nuit du 19 mars, on brûle les fallas. Le ninot indultat est sauvé par le vote du public." },
            },
            {
              heading: "La Semana Santa",
              paragraphs: [
                "La Semana Santa (la Semaine sainte) est une fête religieuse catholique. Elle rappelle les derniers jours de la vie de Jésus selon la tradition chrétienne : sa passion, sa mort et sa résurrection. Elle va du dimanche des Rameaux (el Domingo de Ramos) au dimanche de Pâques (el Domingo de Resurrección). Sa date change chaque année : elle tombe en mars ou en avril.",
                "Pendant cette semaine, des processions défilent dans les rues de nombreuses villes. Elles sont organisées par des confréries (« cofradías » ou « hermandades »). Les « pasos » sont de grands chars décorés qui portent des sculptures religieuses, parfois très anciennes. En Andalousie, ils sont portés par des « costaleros », cachés sous le char. Les « nazarenos » défilent aussi, vêtus d'une longue tunique et d'un « capirote », une haute capuche pointue qui cache le visage : c'est un costume de pénitent porté en Espagne depuis des siècles.",
                "Les villes les plus célèbres pour leur Semana Santa sont Séville et Málaga, en Andalousie, mais aussi Valladolid et Zamora, en Castille. À Séville, on entend parfois une « saeta » : un chant religieux très émouvant, de style flamenco, chanté depuis un balcon au passage d'un paso. À la maison, on prépare des « torrijas » : des tranches de pain trempées dans du lait, puis frites et sucrées.",
              ],
              box: { label: "Vocabulaire", text: "la procesión (la procession), el paso (le char), el costalero (le porteur), el nazareno (le pénitent), la cofradía (la confrérie), la saeta (le chant religieux), las torrijas (le pain perdu espagnol)." },
            },
            {
              heading: "Décrire une fête en espagnol",
              paragraphs: [
                "Pour présenter une fête, on emploie le présent et la tournure « se + verbe à la 3e personne », qui correspond au « on » français. « Las Fallas se celebran en Valencia » signifie « on fête les Fallas à Valence ». Le verbe s'accorde avec le nom : « se celebra una fiesta » (singulier), « se celebran las Fallas » et « se queman los ninots » (pluriel).",
                "Mots utiles : la fiesta (la fête), el desfile (le défilé), desfilar (défiler), los fuegos artificiales (le feu d'artifice), los petardos (les pétards), el traje tradicional (le costume traditionnel), quemar (brûler), celebrar (fêter, célébrer). Une phrase très utile : « La gente sale a la calle » (les gens sortent dans la rue). Exemple : « En Semana Santa, la gente sale a la calle para ver las procesiones. »",
              ],
              box: { label: "Règle", text: "Se celebra + nom singulier ; se celebran + nom pluriel. Ejemplos : En marzo se celebran las Fallas. La noche del 19 de marzo se queman las fallas. En Sevilla se canta una saeta." },
            },
          ],
          keyPoints: [
            "Las Fallas : Valencia, en mars, du 15 au 19 ; la cremà a lieu la nuit du 19 mars.",
            "Une falla est un monument satirique fait de ninots ; un seul ninot est sauvé (el ninot indultat).",
            "La Semana Santa : fête religieuse, du Domingo de Ramos au Domingo de Resurrección, en mars ou en avril.",
            "Processions : pasos portés par les costaleros, nazarenos avec leur capirote, saetas.",
            "Pour décrire : se celebra + singulier, se celebran + pluriel.",
          ],
          example: {
            statement: "Présentez les Fallas en quatre phrases en espagnol : où, quand, ce que l'on voit dans les rues, ce qui se passe à la fin.",
            solution: [
              "Où : on emploie la tournure en « se », au pluriel car « las Fallas » est pluriel : « Las Fallas se celebran en Valencia, en España. »",
              "Quand : « Se celebran en marzo, del 15 al 19. »",
              "Ce que l'on voit : « En las calles hay fallas: son monumentos enormes con ninots. »",
              "La fin : « La noche del 19 de marzo se queman las fallas: es la cremà. »",
              "Réponse : « Las Fallas se celebran en Valencia, en España. Se celebran en marzo, del 15 al 19. En las calles hay fallas: son monumentos enormes con ninots. La noche del 19 de marzo se queman las fallas: es la cremà. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Répondez en espagnol par une phrase complète. a) ¿Dónde se celebran las Fallas? b) ¿En qué mes se celebran? c) ¿Qué pasa la noche del 19 de marzo? d) ¿Quiénes llevan los pasos en Andalucía?",
              hint: "Reprenez les mots de la question dans votre réponse : « ¿Dónde se celebran...? » → « Se celebran en... ».",
              solution: [
                "a) Las Fallas se celebran en Valencia.",
                "b) Se celebran en marzo.",
                "c) La noche del 19 de marzo se queman las fallas: es la cremà.",
                "d) En Andalucía, los costaleros llevan los pasos.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte (inventé pour l'exercice), puis répondez en français. « Me llamo Rocío, tengo trece años y vivo en Sevilla. Para mí, la Semana Santa es una semana muy especial. Cada tarde, salgo a la calle con mi familia para ver las procesiones. Mi hermano mayor es costalero: lleva un paso con otros chicos. Los nazarenos caminan despacio y en silencio. Una noche, una señora canta una saeta desde su balcón. En casa, mi abuela prepara torrijas. » a) Où vit Rocío et quel âge a-t-elle ? b) Que fait-elle chaque après-midi ? c) Quel est le rôle de son frère ? d) Comment marchent les nazarenos ? e) Que se passe-t-il une nuit, et que prépare la grand-mère ?",
              hint: "Cherchez dans le texte les mots de chaque question : « vivo », « cada tarde », « mi hermano », « los nazarenos », « una noche », « mi abuela ».",
              solution: [
                "a) Rocío vit à Séville et elle a treize ans (« tengo trece años y vivo en Sevilla »).",
                "b) Chaque après-midi, elle sort dans la rue avec sa famille pour voir les processions.",
                "c) Son grand frère est costalero : il porte un paso avec d'autres garçons.",
                "d) Les nazarenos marchent lentement et en silence (« despacio y en silencio »).",
                "e) Une nuit, une dame chante une saeta depuis son balcon. La grand-mère prépare des torrijas.",
              ],
            },
            {
              level: 3,
              statement: "Défi : vous écrivez à votre correspondant espagnol, Álvaro, pour lui présenter la Semana Santa. Écrivez six à huit phrases en espagnol. Contraintes : dire où et quand elle a lieu ; employer au moins deux tournures avec « se » ; employer au moins quatre mots du vocabulaire de la leçon ; terminer par ce que vous voulez voir un jour (« Quiero ver... »).",
              hint: "Faites d'abord une liste de mots-clés (procesión, paso, costalero, nazareno, saeta, torrijas), puis construisez une phrase pour chacun. Vérifiez l'accord de « se celebra » ou « se celebran ».",
              solution: [
                "Ouverture : « Hola, Álvaro: hoy te presento la Semana Santa. »",
                "Où et quand : « Se celebra en toda España, en marzo o en abril, la semana que termina con el Domingo de Resurrección. »",
                "Les processions : « En Sevilla y en Málaga, las cofradías organizan procesiones. Los costaleros llevan los pasos y los nazarenos llevan un capirote. »",
                "Autres traditions : « A veces se canta una saeta desde un balcón. También se comen torrijas, un dulce típico. »",
                "Fin : « Quiero ver las procesiones de Sevilla un día. ¡Un abrazo! »",
                "Vérification : deux tournures en « se » (se celebra, se canta, se comen) ; vocabulaire (procesiones, pasos, costaleros, nazarenos, saeta, torrijas) ; « se comen » est au pluriel car « torrijas » est pluriel.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les grands moments des Fallas dans l'ordre chronologique.",
            items: [
              "Les artistes construisent les fallas pendant des mois.",
              "Les mascletàs commencent : chaque jour à 14 h, à partir du 1er mars.",
              "La plantà : on installe les fallas dans les rues, vers le 15 mars.",
              "La Ofrenda : on offre des fleurs à la Vierge, les 17 et 18 mars.",
              "La cremà : on brûle les fallas, la nuit du 19 mars.",
            ],
          },
          quiz: [
            { q: "Dans quelle ville se déroulent les Fallas ?", options: ["Sevilla", "Madrid", "Pamplona", "Valencia"], answer: 3, why: "Les Fallas sont la grande fête de Valence, au mois de mars." },
            { q: "Que se passe-t-il pendant la « cremà » ?", options: ["On offre des fleurs.", "On défile en costume.", "On brûle les fallas.", "On mange des torrijas."], answer: 2, why: "La cremà a lieu la nuit du 19 mars : on brûle toutes les fallas, sauf le ninot indultat." },
            { q: "Quand a lieu la Semana Santa ?", options: ["le 19 mars", "en mars ou en avril", "le 2 novembre", "chaque mois de juillet"], answer: 1, why: "La date de la Semana Santa dépend de celle de Pâques : elle change chaque année et tombe en mars ou en avril." },
            { q: "Qui porte les « pasos » en Andalousie ?", options: ["los ninots", "los costaleros", "los fuegos artificiales", "las falleras"], answer: 1, why: "Les costaleros, cachés sous le char, portent les pasos pendant les processions." },
            { q: "Qu'est-ce qu'une « saeta » ?", options: ["un chant religieux", "un gâteau de Pâques", "un pétard géant", "un costume"], answer: 0, why: "La saeta est un chant religieux de style flamenco, chanté au passage d'une procession." },
          ],
          trap: "Confondre les deux fêtes : les Fallas sont une fête populaire de Valence, en mars, où l'on brûle des monuments ; la Semana Santa est une fête religieuse célébrée dans toute l'Espagne, avec des processions. Autre erreur : écrire « se celebra las Fallas » au lieu de « se celebran las Fallas ».",
          method: "Faites une fiche d'identité pour chaque fête avec cinq rubriques en espagnol (¿Dónde? ¿Cuándo? ¿Qué es? ¿Qué se hace? Palabras clave), puis entraînez-vous à la présenter à voix haute en une minute, sans regarder vos notes.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'dia-de-muertos',
          title: 'Le Día de Muertos au Mexique',
          minutes: 30,
          objectives: [
            "Présenter le Día de Muertos : ses dates, ses origines et son sens.",
            "Nommer en espagnol les éléments d'une ofrenda.",
            "Distinguer le Día de Muertos d'Halloween et réagir avec ses propres mots.",
          ],
          course: [
            {
              heading: "Une fête pour se souvenir des morts",
              paragraphs: [
                "Le Día de Muertos (le jour des Morts) est l'une des fêtes les plus importantes du Mexique. Elle a lieu principalement le 1er et le 2 novembre. Selon la tradition, les âmes des défunts reviennent ces jours-là rendre visite à leur famille : le 1er novembre est consacré aux enfants disparus (« los angelitos », les petits anges), le 2 novembre aux adultes.",
                "Ce n'est pas une fête triste. Les familles se souviennent de leurs proches disparus avec de la musique, des fleurs, de la nourriture et beaucoup de couleurs. On rend la mort familière, et on s'en moque même avec humour. Le Día de Muertos est inscrit par l'UNESCO au patrimoine culturel immatériel de l'humanité depuis 2008.",
              ],
              box: { label: "Repère", text: "El Día de Muertos : México, el 1 y el 2 de noviembre. El 1 : los niños (los angelitos). El 2 : los adultos. Patrimonio cultural inmaterial de la humanidad (UNESCO, 2008)." },
            },
            {
              heading: "Des origines indiennes et chrétiennes",
              paragraphs: [
                "Cette fête mélange deux traditions. Bien avant l'arrivée des Espagnols, les peuples du Mexique, comme les Mexicas (les Aztèques), honoraient déjà leurs morts lors de grandes fêtes. Au XVIe siècle, les Espagnols ont apporté la religion catholique, avec deux fêtes du début de novembre : la Toussaint (Todos los Santos, le 1er novembre) et le jour des défunts (el Día de los Fieles Difuntos, le 2 novembre).",
                "Les deux traditions se sont mêlées pour donner le Día de Muertos d'aujourd'hui. On le célèbre dans tout le Mexique, et il est particulièrement connu dans certaines régions, comme l'État d'Oaxaca ou l'État de Michoacán, autour du lac de Pátzcuaro.",
              ],
            },
            {
              heading: "L'ofrenda : un autel pour accueillir les défunts",
              paragraphs: [
                "Dans les maisons, les familles installent une « ofrenda » (une offrande), qu'on appelle aussi « altar » : une table décorée, souvent sur plusieurs niveaux. On y pose les photos des défunts et des bougies (las velas) pour éclairer leur chemin. On la couvre de fleurs de « cempasúchil », de grosses fleurs d'un orange vif : selon la tradition, leur couleur et leur parfum guident les âmes jusqu'à la maison.",
                "On y dépose aussi les plats et les boissons préférés des défunts, de l'eau, du sel, du « pan de muerto » (une brioche ronde décorée de formes d'os), des « calaveras de azúcar » (des têtes de mort en sucre, sur le front desquelles on écrit un prénom) et du « papel picado », du papier de couleur découpé en motifs.",
                "Beaucoup de familles vont aussi au cimetière (el cementerio). Elles nettoient et décorent les tombes (las tumbas) avec des fleurs et des bougies ; certaines y passent la nuit, en musique, pour tenir compagnie à leurs défunts.",
              ],
              box: { label: "Vocabulaire", text: "la ofrenda / el altar (l'autel), la vela (la bougie), la flor de cempasúchil, el pan de muerto, la calavera de azúcar (la tête de mort en sucre), el papel picado, el cementerio (le cimetière), la tumba (la tombe), los difuntos (les défunts), recordar (se souvenir de)." },
            },
            {
              heading: "La Catrina, Halloween et Coco",
              paragraphs: [
                "Le symbole le plus connu de la fête est la « Catrina » : un squelette de femme élégante, coiffée d'un grand chapeau à fleurs. Elle a été créée au début du XXe siècle par le graveur mexicain José Guadalupe Posada, pour se moquer des Mexicains qui voulaient imiter les modes européennes. Le peintre Diego Rivera l'a rendue célèbre en la plaçant au centre d'une grande peinture murale en 1947. Aujourd'hui, beaucoup de personnes se maquillent en Catrina pour la fête.",
                "Le Día de Muertos n'est pas un « Halloween mexicain ». Halloween, venue des pays de langue anglaise, joue avec la peur, les monstres et les déguisements effrayants. Le Día de Muertos est une fête familiale du souvenir : on ne cherche pas à faire peur, on accueille les défunts avec amour. Le film d'animation « Coco » (studio Pixar, 2017) a fait connaître cette fête dans le monde entier.",
              ],
              box: { label: "À retenir", text: "La Catrina : créée par José Guadalupe Posada au début du XXe siècle, rendue célèbre par Diego Rivera (1947). Día de Muertos ≠ Halloween : on ne cherche pas à faire peur, on se souvient des défunts avec joie." },
            },
          ],
          keyPoints: [
            "Día de Muertos : Mexique, 1er novembre (les enfants) et 2 novembre (les adultes).",
            "Une fête joyeuse du souvenir, inscrite au patrimoine immatériel de l'UNESCO en 2008.",
            "Origines : traditions des peuples du Mexique (Mexicas) + fêtes catholiques de la Toussaint.",
            "L'ofrenda : fotos, velas, flores de cempasúchil, pan de muerto, calaveras de azúcar, papel picado.",
            "La Catrina : créée par José Guadalupe Posada, rendue célèbre par Diego Rivera.",
            "Ce n'est pas Halloween : on ne cherche pas à faire peur.",
          ],
          example: {
            statement: "Un camarade vous demande : « ¿Qué se pone en una ofrenda? » Répondez en espagnol en citant au moins cinq éléments, et le rôle de deux d'entre eux.",
            solution: [
              "On reprend la tournure de la question : « se pone » + singulier, « se ponen » + pluriel.",
              "Photos et bougies, avec leur rôle : « En una ofrenda se ponen fotos de los difuntos. Se ponen velas para iluminar su camino. »",
              "Les fleurs, avec leur rôle : « Se ponen flores de cempasúchil: su color naranja guía a las almas. »",
              "La nourriture : « Se pone pan de muerto y se ponen calaveras de azúcar con nombres. »",
              "Réponse : « En una ofrenda se ponen fotos de los difuntos. Se ponen velas para iluminar su camino. Se ponen flores de cempasúchil: su color naranja guía a las almas. Se pone pan de muerto y se ponen calaveras de azúcar con nombres. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en français : a) la vela ; b) la calavera de azúcar ; c) el cementerio ; d) la tumba ; e) los difuntos ; f) recordar.",
              hint: "Relisez l'encadré « Vocabulaire » du cours. Plusieurs mots ressemblent au français : cementerio, tumba, difuntos.",
              solution: [
                "a) la vela : la bougie.",
                "b) la calavera de azúcar : la tête de mort en sucre.",
                "c) el cementerio : le cimetière.",
                "d) la tumba : la tombe.",
                "e) los difuntos : les défunts, les morts.",
                "f) recordar : se souvenir de.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce texte (inventé pour l'exercice), puis répondez en français. « Me llamo Diego y vivo en Oaxaca, en México. A finales de octubre, mi familia y yo ponemos la ofrenda en el salón. Ponemos la foto de mi abuelo Pedro, velas y muchas flores de cempasúchil. También ponemos chocolate y tamales, la comida favorita del abuelo. El 2 de noviembre, vamos al cementerio. Limpiamos la tumba, la decoramos con flores y escuchamos música. No es un día triste: recordamos al abuelo con alegría. » a) Où vit Diego ? b) Quand sa famille installe-t-elle l'ofrenda, et où ? c) Citez trois éléments posés sur l'ofrenda. d) Que fait la famille le 2 novembre ? e) Recopiez la phrase qui montre que ce n'est pas une fête triste.",
              hint: "Repérez les dates (« a finales de octubre », « el 2 de noviembre ») et les verbes à la forme « nosotros » : ponemos, vamos, limpiamos, decoramos, escuchamos, recordamos.",
              solution: [
                "a) Diego vit à Oaxaca, au Mexique.",
                "b) La famille installe l'ofrenda à la fin du mois d'octobre, dans le salon (« en el salón »).",
                "c) Par exemple : la photo du grand-père Pedro, des bougies, des fleurs de cempasúchil (on peut aussi citer le chocolat et les tamales).",
                "d) Le 2 novembre, la famille va au cimetière : elle nettoie la tombe, la décore avec des fleurs et écoute de la musique.",
                "e) « No es un día triste: recordamos al abuelo con alegría. »",
              ],
            },
            {
              level: 3,
              statement: "Défi : un camarade affirme : « El Día de Muertos es el Halloween mexicano: es una fiesta para dar miedo. » En cinq phrases en espagnol, expliquez-lui pourquoi il se trompe. Employez au moins une tournure avec « se » et trois mots du vocabulaire de l'ofrenda.",
              hint: "Commencez par dire « No, ... ». Donnez ensuite les dates, le sens de la fête, ce que l'on met sur l'ofrenda, puis la différence avec Halloween.",
              solution: [
                "Contredire : « No, el Día de Muertos no es Halloween. »",
                "Les dates : « Es una fiesta mexicana que se celebra el 1 y el 2 de noviembre. »",
                "Le sens : « No es para dar miedo: las familias recuerdan a sus muertos con alegría. »",
                "L'ofrenda : « En casa se pone una ofrenda con fotos, velas, flores de cempasúchil y la comida favorita de los difuntos. »",
                "La différence : « Halloween es una fiesta de los países de lengua inglesa, con monstruos y disfraces que dan miedo. »",
                "Vérification : tournures en « se » (se celebra, se pone) ; vocabulaire de l'ofrenda (fotos, velas, flores de cempasúchil, difuntos).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Ce que vous savez du Día de Muertos.",
            statements: [
              { text: "Le Día de Muertos se célèbre surtout le 1er et le 2 novembre.", true: true, why: "Le 1er novembre est consacré aux enfants, le 2 novembre aux adultes." },
              { text: "C'est une fête triste, où l'on pleure en silence.", true: false, why: "C'est une fête joyeuse du souvenir, avec de la musique, des fleurs et de la nourriture." },
              { text: "Les fleurs de cempasúchil sont d'un orange vif.", true: true, why: "Selon la tradition, leur couleur et leur parfum guident les âmes des défunts." },
              { text: "La Catrina a été inventée par le studio Pixar pour le film Coco.", true: false, why: "Elle a été créée par le graveur José Guadalupe Posada au début du XXe siècle, bien avant Coco (2017)." },
              { text: "La fête mêle des traditions indiennes et catholiques.", true: true, why: "Les Mexicas honoraient déjà leurs morts ; les Espagnols ont apporté la Toussaint et le jour des défunts." },
              { text: "Le Día de Muertos est la version mexicaine d'Halloween.", true: false, why: "Halloween joue avec la peur ; le Día de Muertos est une fête familiale du souvenir." },
              { text: "Sur une calavera de azúcar, on écrit parfois un prénom.", true: true, why: "On écrit souvent sur le front de la tête de mort en sucre le prénom d'un défunt ou d'un proche." },
            ],
          },
          quiz: [
            { q: "Quand se célèbre principalement le Día de Muertos ?", options: ["le 31 octobre seulement", "le 19 mars", "les 1er et 2 novembre", "à Pâques"], answer: 2, why: "Le Día de Muertos a lieu surtout le 1er novembre (les enfants) et le 2 novembre (les adultes)." },
            { q: "Que signifie « la vela » ?", options: ["la bougie", "la fleur", "le crâne", "le cimetière"], answer: 0, why: "« La vela » est la bougie : on l'allume pour éclairer le chemin des défunts." },
            { q: "Qui a créé le personnage de la Catrina ?", options: ["le peintre Diego Rivera, en 1947", "le studio Pixar, pour le film Coco", "les Mexicas, avant la conquête", "le graveur José Guadalupe Posada"], answer: 3, why: "La Catrina est née des gravures de José Guadalupe Posada ; Diego Rivera l'a ensuite rendue célèbre." },
            { q: "Selon la tradition, à quoi servent les fleurs de cempasúchil ?", options: ["à faire peur aux enfants", "à guider les âmes", "à décorer les sapins", "à parfumer le pan de muerto"], answer: 1, why: "Leur couleur orange vif et leur parfum sont censés guider les âmes des défunts jusqu'à l'ofrenda." },
            { q: "Quel élément ne fait PAS partie d'une ofrenda ?", options: ["las velas", "el papel picado", "un huevo de Pascua", "las fotos de los difuntos"], answer: 2, why: "L'œuf de Pâques appartient à une autre fête. Les bougies, le papel picado et les photos sont posés sur l'ofrenda." },
          ],
          trap: "Présenter le Día de Muertos comme un « Halloween mexicain » ou comme une fête triste : c'est une fête familiale et joyeuse du souvenir, qui ne cherche pas à faire peur. Autre erreur : écrire « el Día de los Muertos se celebra el 31 de octubre » au lieu du 1er et du 2 novembre.",
          method: "Dessinez une ofrenda sur une feuille et écrivez le nom espagnol de chaque élément à côté (la vela, la foto, la flor de cempasúchil, el pan de muerto...). Cachez ensuite les mots et retrouvez-les de mémoire : le vocabulaire visuel se retient beaucoup mieux.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'comparar',
          title: 'Comparer : más... que, menos... que, tan... como',
          minutes: 30,
          objectives: [
            "Comparer deux personnes, deux lieux ou deux fêtes avec « más... que », « menos... que » et « tan... como ».",
            "Exprimer l'égalité de quantité avec « tanto, tanta, tantos, tantas... como ».",
            "Employer les comparatifs irréguliers « mejor », « peor », « mayor » et « menor ».",
          ],
          course: [
            {
              heading: "Plus ou moins : más... que, menos... que",
              paragraphs: [
                "Pour dire qu'une chose est « plus... que » une autre, on emploie más + adjectif + que : « México es más grande que España. » Pour dire « moins... que », on emploie menos + adjectif + que : « El tren es menos rápido que el avión. »",
                "L'adjectif s'accorde toujours avec le nom auquel il se rapporte : « Mi hermana es más alta que mi hermano. » « Las Fallas son más ruidosas que la Semana Santa. » La même construction fonctionne avec un adverbe (« Ana habla más despacio que Luis ») ou avec un nom (« Tengo más libros que tú »).",
                "Avec un verbe, on place « más que » ou « menos que » juste après le verbe : « Pablo estudia más que yo » (Pablo étudie plus que moi). Attention : après « que », on emploie les pronoms sujets yo, tú, él, ella : « más alto que yo », « menos rápido que tú ».",
              ],
              box: { label: "Règle", text: "más + adjectif, adverbe ou nom + que = plus... que. menos + adjectif, adverbe ou nom + que = moins... que. Verbe + más que / menos que. Ejemplos : México es más grande que España. El autobús es menos caro que el taxi." },
            },
            {
              heading: "L'égalité : tan... como, tanto... como",
              paragraphs: [
                "Pour dire « aussi... que », on emploie tan + adjectif ou adverbe + como : « Lucía es tan simpática como su hermana. » « Corres tan rápido como yo. » Attention : pour l'égalité, on n'emploie pas « que » mais « como ».",
                "Pour comparer des quantités (« autant de... que »), on emploie tanto + nom + como, et « tanto » s'accorde avec le nom qui suit : tanto dinero (masculin singulier), tanta paciencia (féminin singulier), tantos amigos (masculin pluriel), tantas fiestas (féminin pluriel). Exemple : « Valencia no tiene tantos habitantes como Madrid. »",
                "Avec un verbe, on dit simplement « tanto como », qui ne change pas, placé après le verbe : « Duermo tanto como mi hermano » (je dors autant que mon frère).",
              ],
              box: { label: "À retenir", text: "tan + adjectif ou adverbe + como = aussi... que. tanto / tanta / tantos / tantas + nom + como = autant de... que. Verbe + tanto como = autant que. Avec tan et tanto, toujours como, jamais que." },
            },
            {
              heading: "Les comparatifs irréguliers et « más de »",
              paragraphs: [
                "Quatre comparatifs ont une forme spéciale. Bueno (bon) et bien deviennent mejor (meilleur, mieux) ; malo (mauvais) et mal deviennent peor (pire, plus mal). Pour l'âge, on dit mayor (plus âgé) et menor (plus jeune) : « Mi hermano es mayor que yo. » « Cantas mejor que yo. »",
                "Ces formes sont les mêmes au masculin et au féminin, et prennent -es au pluriel : « Estas fiestas son mejores que las otras. » « Mis primas son menores que yo. » Pour parler de la taille et non de l'âge, on garde « más grande » et « más pequeño » : « Mi casa es más grande que tu casa. »",
                "Dernier point : devant un nombre, « plus de » se dit « más de », et non « más que » : « El Teide mide más de 3000 metros » (le Teide, aux Canaries, mesure 3715 m). « En mi clase hay más de veinte alumnos. »",
              ],
              box: { label: "Attention", text: "bueno / bien → mejor ; malo / mal → peor ; mayor (plus âgé) ; menor (plus jeune). Pluriel : mejores, peores, mayores, menores. On ne dit jamais « más mejor ». Devant un nombre : más de (más de 3000 metros)." },
            },
          ],
          keyPoints: [
            "más... que (plus... que) ; menos... que (moins... que).",
            "tan + adjectif + como (aussi... que) : avec l'égalité, como et jamais que.",
            "tanto, tanta, tantos, tantas + nom + como : tanto s'accorde avec le nom.",
            "mejor, peor, mayor (âge), menor (âge) ; pluriel en -es ; jamais « más mejor ».",
            "Après que ou como : yo, tú (más alto que yo).",
            "Devant un nombre : más de (más de veinte alumnos).",
          ],
          example: {
            statement: "Données fictives. Ana : 14 ans, 1,58 m, deux frères, 16 sur 20 en espagnol. Pablo : 13 ans, 1,58 m, deux frères, 12 sur 20 en espagnol. Écrivez quatre phrases de comparaison en espagnol : l'âge, la taille, les frères, la note.",
            solution: [
              "L'âge : 14 ans > 13 ans. Pour l'âge, on emploie le comparatif irrégulier « mayor » : « Ana es mayor que Pablo. »",
              "La taille : 1,58 m = 1,58 m, c'est une égalité avec un adjectif : tan + adjectif + como, et « alta » s'accorde avec Ana : « Ana es tan alta como Pablo. »",
              "Les frères : égalité de quantité avec un nom masculin pluriel (hermanos) → tantos : « Ana tiene tantos hermanos como Pablo. »",
              "La note : 16 > 12, une meilleure note → mejor : « Ana tiene mejor nota en español que Pablo. »",
              "Réponse : « Ana es mayor que Pablo. Ana es tan alta como Pablo. Ana tiene tantos hermanos como Pablo. Ana tiene mejor nota en español que Pablo. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec « que » ou « como ». a) Pedro es más alto ___ Ana. b) Ana es tan simpática ___ Lucía. c) Tengo tantos libros ___ tú. d) Este libro es menos interesante ___ el otro. e) Mi perro es tan grande ___ el perro de Marta. f) Juego mejor ___ mi hermano.",
              hint: "Regardez le mot qui ouvre la comparaison : más, menos et mejor vont avec « que » ; tan et tanto vont avec « como ».",
              solution: [
                "a) más → que : Pedro es más alto que Ana.",
                "b) tan → como : Ana es tan simpática como Lucía.",
                "c) tantos → como : Tengo tantos libros como tú.",
                "d) menos → que : Este libro es menos interesante que el otro.",
                "e) tan → como : Mi perro es tan grande como el perro de Marta.",
                "f) mejor → que : Juego mejor que mi hermano.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Écrivez une phrase de comparaison avec la structure indiquée. a) El autobús: 2 euros ; el taxi: 15 euros (barato, más... que). b) Marta: 12 años ; Luis: 15 años (menor). c) Pilar: 3 hermanas ; Rosa: 3 hermanas (tanto... como). d) Película A: 8/10 ; película B: 4/10 (bueno). e) Carmen y Diego corren a 10 km/h (tan... como). f) Hoy: 20 °C ; ayer: 25 °C (menos calor... que).",
              hint: "Pour c), « hermanas » est féminin pluriel : accordez « tanto ». Pour d), « bueno » a un comparatif irrégulier.",
              solution: [
                "a) 2 euros < 15 euros, donc l'autobus est plus bon marché : El autobús es más barato que el taxi.",
                "b) 12 ans < 15 ans : Marta es menor que Luis.",
                "c) 3 = 3, nom féminin pluriel → tantas : Pilar tiene tantas hermanas como Rosa.",
                "d) 8/10 > 4/10, bueno → mejor : La película A es mejor que la película B.",
                "e) même vitesse, avec un adverbe → tan... como : Carmen corre tan rápido como Diego.",
                "f) 20 °C < 25 °C : Hoy hace menos calor que ayer.",
              ],
            },
            {
              level: 3,
              statement: "Défi : voici deux fiches. Las Fallas : Valencia (España), en marzo, cinco días principales (del 15 al 19), petardos y fuego. El Día de Muertos : México, en noviembre, dos días principales (el 1 y el 2), ofrendas, flores y velas, fiesta familiar. Écrivez cinq phrases en espagnol qui comparent les deux fêtes. Employez une fois chacune de ces structures : más... que ; menos... que ; tanto(s) ou tanta(s)... como (à la forme négative) ; tan... como ; mejor ou peor (pour donner votre opinion).",
              hint: "Appuyez-vous sur les chiffres des fiches (cinq jours, deux jours) pour les comparaisons de quantité. Pour l'opinion, commencez par « Para mí, ... ».",
              solution: [
                "más... que (cinq jours contre deux) : « Las Fallas duran más días que el Día de Muertos. »",
                "menos... que (des bougies et des fleurs, pas de pétards) : « El Día de Muertos es menos ruidoso que las Fallas. »",
                "tantos... como, à la forme négative (« días » est masculin pluriel) : « El Día de Muertos no tiene tantos días principales como las Fallas. »",
                "tan... como (opinion personnelle) : « Para mí, el Día de Muertos es tan interesante como las Fallas. »",
                "mejor (opinion personnelle) : « Para mí, el Día de Muertos es mejor que las Fallas para estar en familia. »",
                "Vérification : chaque structure est employée une fois ; « ruidoso » et « interesante » s'accordent avec « el Día de Muertos » (masculin singulier).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque comparaison espagnole à sa traduction.",
            pairs: [
              { left: "más alto que", right: "plus grand que" },
              { left: "menos caro que", right: "moins cher que" },
              { left: "tan rápido como", right: "aussi rapide que" },
              { left: "tanto dinero como", right: "autant d'argent que" },
              { left: "mejor que", right: "meilleur que" },
              { left: "mayor que", right: "plus âgé que" },
            ],
          },
          quiz: [
            { q: "Complétez : « Ana es tan alta ___ su madre. »", options: ["como", "que", "de", "tanto"], answer: 0, why: "Pour l'égalité, « tan » va toujours avec « como »." },
            { q: "« Mi hermano tiene 16 años y yo tengo 13. » Mi hermano es ___ que yo.", options: ["menor", "más grande de", "mayor", "tan mayor"], answer: 2, why: "Pour l'âge, « plus âgé » se dit « mayor ». « Menor » signifie « plus jeune »." },
            { q: "Comment dire « autant d'amies que » ?", options: ["tantos amigas como", "tantas amigas como", "tan amigas como", "tantas amigas que"], answer: 1, why: "Devant un nom, on emploie « tanto » accordé : « amigas » est féminin pluriel, donc « tantas... como »." },
            { q: "Quelle phrase est correcte ?", options: ["Es más mejor que yo.", "Es más alto que mí.", "Es tan alto que yo.", "Es más alto que yo."], answer: 3, why: "« Más... que » suivi du pronom sujet « yo ». « Más mejor » n'existe pas et « tan » demande « como »." },
            { q: "Comment dire « Le Teide mesure plus de 3000 mètres » ?", options: ["El Teide mide más que 3000 metros.", "El Teide mide tan 3000 metros.", "El Teide mide más de 3000 metros."], answer: 2, why: "Devant un nombre, « plus de » se dit « más de »." },
          ],
          trap: "Employer « que » après « tan » ou « tanto » (« tan alto que ») : pour l'égalité, on dit toujours « como ». Autre erreur fréquente : dire « más mejor », qui n'existe pas, car « mejor » contient déjà l'idée de « más ».",
          method: "Retenez deux familles : « más », « menos », « mejor », « peor », « mayor », « menor » vont avec « que » ; « tan » et « tanto » vont avec « como ». Pour vous entraîner, comparez chaque jour deux objets de votre chambre ou deux membres de votre famille à voix haute.",
        },
      ],
    },
  ],
}
