import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'espagnol-tle',
  chapters: [
    {
      id: 'communication',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'medios-informacion',
          title: 'Médias et information : s\'informer, vérifier',
          minutes: 30,
          objectives: [
            "Comprendre des documents de presse hispaniques en identifiant leur nature, leur source et leur intention.",
            "Mobiliser le lexique des médias, de l'information et de la désinformation.",
            "Exprimer la certitude, la probabilité et le doute avec l'indicatif ou le subjonctif.",
            "Vérifier une information selon une démarche critique et en rendre compte en espagnol.",
          ],
          course: [
            {
              heading: "Le paysage médiatique et son vocabulaire",
              paragraphs: [
                "La presse écrite (« la prensa ») comprend les quotidiens (« los diarios » ou « los periódicos »), les hebdomadaires (« los semanarios ») et les magazines (« las revistas »). En Espagne, de grands titres comme El País, El Mundo, ABC ou La Vanguardia côtoient une presse régionale très lue ; en Amérique latine, on peut citer Clarín en Argentine, El Tiempo en Colombie ou La Jornada au Mexique. La radio et la télévision publiques espagnoles sont regroupées dans RTVE. Aujourd'hui, une grande partie de l'information circule en ligne : « los medios digitales », « las redes sociales », « los pódcast ».",
                "Un article de presse a une anatomie précise : « la portada » (la une), « el titular » (le titre), « la entradilla » (le chapeau, qui résume l'essentiel), « el cuerpo de la noticia » (le corps de l'article), « el pie de foto » (la légende) et « la fuente » (la source). On distingue les genres d'information, comme « la noticia » (un fait, rapporté de façon neutre), « el reportaje » et « la entrevista », et les genres d'opinion, comme « el editorial » (la position du journal), « la columna » ou « la tribuna ». Une bonne noticia répond aux questions ¿qué?, ¿quién?, ¿cuándo?, ¿dónde?, ¿cómo? et ¿por qué?",
              ],
              box: { label: "Vocabulaire", text: "el periódico : le journal · la portada : la une · el titular : le titre · la entradilla : le chapeau · el periodista : le journaliste · la fuente : la source · el editorial : l'éditorial (la editorial : la maison d'édition) · la actualidad : l'actualité · el telediario : le journal télévisé · el lector : le lecteur" },
            },
            {
              heading: "La désinformation : de quoi parle-t-on ?",
              paragraphs: [
                "Pour désigner les « fake news », l'espagnol dispose de termes propres, que la Fundéu RAE (fondation qui conseille sur le bon usage de la langue) recommande d'employer : « noticia falsa » et, surtout en Espagne, « bulo » (canular, fausse rumeur). « La desinformación » désigne la diffusion volontaire d'informations fausses ou trompeuses ; « el rumor » est une information non vérifiée ; « el montaje » est un trucage. On parle aussi de « posverdad » (post-vérité) : le dictionnaire de la RAE l'a intégré et le définit, en substance, comme une déformation délibérée de la réalité qui joue sur les croyances et les émotions pour influencer l'opinion.",
                "Pourquoi les bulos circulent-ils si vite ? Ils jouent sur les émotions fortes (la peur, l'indignation), ils se partagent en un geste, et les algorithmes des réseaux favorisent les contenus qui font réagir. Chacun risque alors de s'enfermer dans « una burbuja de filtros » ou « una cámara de eco », où il ne voit que ce qui confirme ses idées. Pour y répondre, des médias spécialisés dans la vérification (« los verificadores », ou fact-checkers) se sont développés : Maldita.es, Newtral ou EFE Verifica en Espagne, Chequeado en Argentine.",
              ],
              box: { label: "À retenir", text: "Une noticia rapporte un fait vérifié ; un bulo est une fausse nouvelle qui se fait passer pour vraie. Le titre accrocheur qui pousse à cliquer s'appelle « clickbait », ou « ciberanzuelo » en espagnol." },
            },
            {
              heading: "Vérifier une information : la méthode",
              paragraphs: [
                "Avant de croire ou de partager une information, posez-vous quatre questions. ¿Quién lo dice? : un média reconnu, une institution, une cuenta anónima ? ¿Cuándo? : une vieille nouvelle peut être recyclée comme si elle était récente. ¿Qué dicen otros medios? : si aucun média sérieux ne reprend une information spectaculaire, méfiance. ¿Qué emoción busca provocar? : un titre en majuscules, des points d'exclamation et l'ordre de partager vite (« ¡Compártelo! ») sont des signaux d'alerte.",
                "Pour les images, la recherche inversée (« la búsqueda inversa de imágenes ») permet de retrouver l'origine d'une photo et sa date de première publication. Pour les vidéos, il faut se méfier des montages et des contenus générés par l'intelligence artificielle. Les verbes utiles : « contrastar la información » (recouper), « comprobar » et « verificar » (vérifier), « confirmar », « desmentir » (démentir), « difundir » et « compartir » (diffuser, partager), « viralizarse » (devenir viral). Une source digne de confiance est « una fuente fiable » ou « fidedigna ».",
              ],
              box: { label: "Méthode", text: "¿Quién lo dice? ¿Cuándo? ¿Qué dicen otros medios? ¿Qué emoción busca provocar? Puis : vérifier l'image (búsqueda inversa), comparer avec un média reconnu ou un verificador, et ne partager qu'après." },
            },
            {
              heading: "Exprimer la certitude et le doute",
              paragraphs: [
                "Les expressions de certitude sont suivies de l'indicatif : « Es cierto que », « Es verdad que », « Está claro que », « Es evidente que », « Estoy seguro de que », « Creo que » : « Es evidente que esta foto es antigua ». Dès qu'on les nie, elles expriment le doute et appellent le subjonctif : « No es cierto que la foto sea reciente », « No creo que esta web sea fiable ». Le doute et la possibilité sont toujours au subjonctif : « Dudo que », « Es posible que », « Es probable que », « Puede que » : « Puede que el vídeo esté manipulado ».",
                "« Quizá(s) », « tal vez » et « probablemente », placés avant le verbe, acceptent les deux modes : l'indicatif présente l'idée comme probable (« Quizás es un bulo »), le subjonctif renforce le doute (« Quizás sea un bulo »). « A lo mejor » est toujours suivi de l'indicatif : « A lo mejor es falso ». Pour rapporter une information non confirmée, la presse emploie « al parecer », « según fuentes oficiales », « supuestamente » ou « presuntamente » (pour une personne non jugée). Le conditionnel de rumeur (« el ministro habría dimitido ») est fréquent dans les journaux, mais les guides de style le déconseillent comme un gallicisme : préférez « al parecer, el ministro ha dimitido ».",
              ],
              box: { label: "Règle", text: "Certitude (es cierto que, está claro que, creo que) + indicatif. Certitude niée (no es cierto que, no creo que), doute (dudo que) et possibilité (es posible que, puede que) + subjonctif. A lo mejor + indicatif ; quizás, tal vez + indicatif ou subjonctif." },
            },
          ],
          keyPoints: [
            "Presse : la portada (la une), el titular, la entradilla, la fuente ; el editorial exprime la position du journal.",
            "Bulo ou noticia falsa : fausse nouvelle ; desinformación : diffusion volontaire de fausses informations.",
            "Vérifier : ¿quién lo dice?, ¿cuándo?, ¿qué dicen otros medios?, ¿qué emoción busca provocar?",
            "Contrastar (recouper), comprobar, desmentir (démentir), una fuente fiable.",
            "Certitude + indicatif ; certitude niée, doute et possibilité + subjonctif : « No creo que sea verdad ».",
            "A lo mejor + indicatif ; quizás et tal vez acceptent les deux modes.",
          ],
          example: {
            statement: "Un camarade vous transfère ce message (texte écrit pour l'exercice) : « ¡URGENTE! El Gobierno va a prohibir los patinetes en todas las ciudades a partir del lunes. ¡Compártelo antes de que lo borren! » Expliquez en français pourquoi il faut s'en méfier, puis rédigez en espagnol trois phrases pour réagir : une de doute, une de possibilité, une de certitude.",
            solution: [
              "Repérer les signaux d'alerte : majuscules et points d'exclamation (« ¡URGENTE! »), aucune source citée (quel ministère ? quel texte ?), une mesure spectaculaire annoncée pour une date très proche, et un appel à partager vite qui suggère une censure (« antes de que lo borren »).",
              "Conclure : le message cherche à provoquer l'inquiétude et le partage immédiat, pas à informer. Il faut le vérifier avant de le diffuser.",
              "Phrase de doute, avec une certitude niée suivie du subjonctif : « No creo que esta noticia sea verdadera, porque no cita ninguna fuente ».",
              "Phrase de possibilité, avec « es posible que » + subjonctif : « Es posible que sea un bulo ».",
              "Phrase de certitude, avec « está claro que » + indicatif : « Está claro que hay que comprobarla en un medio reconocido antes de compartirla ».",
              "Réponse : le message présente tous les traits d'un bulo ; réaction : « No creo que esta noticia sea verdadera. Es posible que sea un bulo. Está claro que hay que comprobarla antes de compartirla. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe entre parenthèses au présent de l'indicatif ou du subjonctif : a) Es cierto que la noticia (ser) falsa. b) No creo que esta web (ser) fiable. c) Dudo que el periodista (conocer) la fuente. d) Está claro que los bulos (circular) más rápido que los desmentidos. e) A lo mejor el vídeo (estar) manipulado. f) Es posible que la cuenta (tener) miles de seguidores falsos. g) Puede que la información (venir) de una fuente anónima.",
              hint: "Demandez-vous si l'expression affirme une certitude (indicatif) ou si elle exprime un doute, une possibilité ou une certitude niée (subjonctif). « A lo mejor » est un cas à part.",
              solution: [
                "a) « Es cierto que » affirme une certitude : indicatif, « es ».",
                "b) « No creo que » est une opinion niée : subjonctif, « sea ».",
                "c) « Dudo que » exprime le doute : subjonctif de « conocer », irrégulier en -zc- comme au présent « conozco » : « conozca ».",
                "d) « Está claro que » affirme une certitude : indicatif, « circulan ».",
                "e) « A lo mejor » est toujours suivi de l'indicatif : « está ».",
                "f) « Es posible que » exprime une possibilité : subjonctif, « tenga » (formé sur « tengo »).",
                "g) « Puede que » exprime une possibilité : subjonctif, « venga » (formé sur « vengo »).",
                "Réponses : a) es ; b) sea ; c) conozca ; d) circulan ; e) está ; f) tenga ; g) venga.",
              ],
            },
            {
              level: 2,
              statement: "Voici un message viral (texte écrit pour l'exercice) : « ¡ÚLTIMA HORA! Un estudio demuestra que el chocolate cura la gripe. Los médicos no quieren que lo sepas. ¡Comparte este mensaje antes de que lo borren! » a) Relevez en français quatre indices qui doivent vous alerter. b) Écrivez en espagnol trois étapes de vérification, en commençant par « Primero », « Luego » et « Por último ». c) Donnez votre avis en une phrase avec « no creo que ».",
              hint: "Pensez à la source (quel estudio ? quels médicos ?), au ton, à l'argument du complot et à l'appel au partage. Pour les étapes, reprenez les quatre questions de la méthode et les verbes comprobar, buscar, contrastar.",
              solution: [
                "a) Indices : un titre alarmiste en majuscules (« ¡ÚLTIMA HORA! ») ; une source vague (on ne sait ni quelle étude, ni qui l'a menée, ni quand) ; une affirmation extraordinaire présentée comme sûre (« demuestra que... cura ») ; l'idée d'un complot (« los médicos no quieren que lo sepas ») ; un appel pressant au partage qui suggère une censure.",
                "b) « Primero, compruebo quién ha publicado el mensaje y si cita una fuente fiable. Luego, busco el estudio en internet y contrasto la información con medios reconocidos o con un verificador como Maldita.es o Chequeado. Por último, si nadie confirma la noticia, no la comparto. »",
                "c) Avis : « No creo que el chocolate cure la gripe : es probablemente un bulo. » (« cure » est le subjonctif de « curar », exigé par « no creo que »).",
                "Bilan : le message réunit les traits typiques d'un bulo ; la démarche consiste à identifier la source, à recouper, puis à décider de ne pas partager.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce texte (texte écrit pour l'exercice), puis répondez. « Lucía tiene diecisiete años y vive en Valencia. No compra el periódico y casi nunca ve el telediario: se informa con vídeos cortos en las redes sociales. “Es rápido, gratis y me lo explican con palabras sencillas”, dice. Su profesor de historia está preocupado. Según él, los vídeos mezclan información y opinión, y muchas veces no citan ninguna fuente. Además, el algoritmo enseña a cada usuario lo que ya le gusta, y así es difícil descubrir otros puntos de vista. Lucía reconoce que una vez compartió un bulo sobre un concierto cancelado. Desde entonces, antes de compartir una noticia, comprueba si aparece en un medio reconocido. Para los especialistas en educación mediática, la solución no es prohibir las redes, sino aprender a contrastar la información en clase. » a) Comment Lucía s'informe-t-elle et pourquoi ? b) Quelles critiques son professeur formule-t-il ? c) Qu'a changé l'expérience du bulo ? d) Quelle solution proposent les spécialistes ? e) Expression (120 à 150 mots, en espagnol) : « ¿Se puede estar bien informado gracias a las redes sociales? » Employez au moins deux expressions de certitude ou de doute.",
              hint: "Pour les questions de compréhension, cherchez les connecteurs (además, según él, desde entonces, no... sino). Pour l'expression, suivez un plan en trois temps : avantages, limites, réponse nuancée, et réutilisez le lexique de la leçon.",
              solution: [
                "a) Lucía ne lit pas la presse et regarde rarement le journal télévisé : elle s'informe par de courtes vidéos sur les réseaux sociaux, parce que c'est rapide, gratuit et expliqué simplement.",
                "b) Selon son professeur, ces vidéos mélangent information et opinion, citent rarement leurs sources, et l'algorithme montre à chacun ce qu'il aime déjà, ce qui empêche de découvrir d'autres points de vue (la bulle de filtres).",
                "c) Après avoir partagé une fausse nouvelle sur un concert annulé, Lucía vérifie désormais qu'une information est reprise par un média reconnu avant de la partager.",
                "d) Les spécialistes de l'éducation aux médias ne veulent pas interdire les réseaux (« no... sino ») : ils proposent d'apprendre en classe à recouper l'information.",
                "e) Exemple de production : « Hoy muchos jóvenes se informan sobre todo en las redes sociales. Es cierto que tienen ventajas: son rápidas, gratuitas y explican la actualidad con un lenguaje sencillo. Además, permiten seguir lo que pasa en el mundo en tiempo real. Sin embargo, no creo que basten para estar bien informado. Por un lado, muchos vídeos no citan sus fuentes y mezclan hechos y opiniones. Por otro lado, el algoritmo nos encierra en una burbuja: solo vemos lo que ya pensamos. Es posible que una noticia viral sea un bulo, como le pasó a Lucía. Por eso, en mi opinión, las redes pueden ser una puerta de entrada a la información, pero hay que contrastarla siempre con medios reconocidos. En definitiva, informarse bien exige tiempo y espíritu crítico. »",
                "Vérification : environ 125 mots ; certitude + indicatif (« es cierto que tienen ») ; opinion niée et possibilité + subjonctif (« no creo que basten », « es posible que sea ») ; plan clair avec connecteurs (además, sin embargo, por un lado, por otro lado, por eso, en definitiva).",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du journalisme à sa traduction.",
            pairs: [
              { left: "la portada", right: "la une" },
              { left: "el titular", right: "le titre d'un article" },
              { left: "la entradilla", right: "le chapeau" },
              { left: "el bulo", right: "la fausse nouvelle" },
              { left: "contrastar", right: "recouper" },
              { left: "desmentir", right: "démentir" },
            ],
          },
          quiz: [
            { q: "Complétez : « No creo que esta página ... fiable. »", options: ["es", "sea", "será", "fue"], answer: 1, why: "« No creo que » est une opinion niée, qui exprime le doute : elle appelle le subjonctif, « sea »." },
            { q: "Que signifie « desmentir una noticia » ?", options: ["la publier en une", "la partager massivement", "la traduire en anglais", "la démentir"], answer: 3, why: "« Desmentir » signifie démentir, déclarer qu'une information est fausse." },
            { q: "Quelle expression est toujours suivie de l'indicatif ?", options: ["A lo mejor", "Es posible que", "Dudo que", "No es cierto que"], answer: 0, why: "« A lo mejor » (peut-être) se construit toujours avec l'indicatif : « A lo mejor es un bulo ». Les trois autres appellent le subjonctif." },
            { q: "« El editorial » désigne :", options: ["la maison d'édition du journal", "le courrier envoyé par les lecteurs", "la position officielle du journal", "le titre principal de la une"], answer: 2, why: "« El editorial » (masculin) est l'article qui exprime la position du journal ; « la editorial » (féminin) est la maison d'édition." },
            { q: "Quelle démarche permet de savoir si une photo virale est ancienne ?", options: ["compter ses partages", "une recherche inversée d'image", "lire les commentaires", "regarder le nombre de « me gusta »"], answer: 1, why: "La recherche inversée (« búsqueda inversa ») retrouve les premières publications d'une image et donc sa date et son contexte d'origine." },
          ],
          trap: "Mettre l'indicatif après une certitude niée ou un doute : « no creo que es verdad » au lieu de « no creo que sea verdad ». Autre confusion fréquente : « el editorial » (l'éditorial) et « la editorial » (la maison d'édition).",
          method: "Devant chaque information, posez-vous en espagnol les quatre questions : ¿Quién lo dice? ¿Cuándo? ¿Qué dicen otros medios? ¿Qué emoción busca provocar? Pour choisir le mode, demandez-vous si l'expression affirme (indicatif) ou si elle doute, nie ou envisage (subjonctif).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'convencer',
          title: 'Convaincre : discours et publicité',
          minutes: 30,
          objectives: [
            "Identifier les procédés de l'argumentation et de la persuasion dans un discours ou une publicité.",
            "Analyser l'image, le texte et le slogan d'une publicité en espagnol.",
            "Employer l'impératif affirmatif et négatif, avec les pronoms, pour inciter et conseiller.",
            "Rédiger un court discours pour convaincre un public.",
          ],
          course: [
            {
              heading: "Convaincre et persuader",
              paragraphs: [
                "L'espagnol distingue « convencer », qui s'adresse à la raison par des arguments, des exemples et des liens logiques, et « persuadir », qui agit plutôt sur les émotions et les valeurs. Depuis Aristote, on décrit trois leviers de la parole qui convainc : le logos (« el razonamiento », la force des arguments), l'ethos (l'image et la crédibilité de l'orateur) et le pathos (les émotions suscitées chez le public). Un bon discours combine les trois. Vocabulaire : « el orador » (l'orateur), « el público » ou « el auditorio », « dirigirse a » (s'adresser à), « apelar a las emociones ».",
                "Le monde hispanique offre de grands exemples. En 1931, devant les Cortes constituantes de la Deuxième République, la députée Clara Campoamor défendit le droit de vote des femmes : selon elle, une République fondée sur l'égalité ne pouvait pas exclure la moitié des citoyens. Elle s'opposait à Victoria Kent, elle aussi députée, qui voulait reporter cette réforme. Le suffrage féminin fut approuvé le 1er octobre 1931, et les Espagnoles votèrent pour la première fois aux élections générales de 1933. Le 11 septembre 1973, pendant le coup d'État au Chili, le président Salvador Allende adressa un dernier message à la radio : il y refusait de démissionner, remerciait les travailleurs et affirmait sa confiance dans un avenir de liberté.",
              ],
              box: { label: "Repère", text: "Logos : convaincre par la raison (arguments, exemples, chiffres vérifiés). Ethos : inspirer confiance (compétence, sincérité). Pathos : émouvoir (peur, espoir, indignation, fierté). Convencer : la raison ; persuadir : les émotions." },
            },
            {
              heading: "Les procédés rhétoriques",
              paragraphs: [
                "Quelques figures reviennent dans tous les discours. « La anáfora » répète un mot en tête de phrases successives : « Queremos un país libre. Queremos un país justo. » « El ternario » regroupe trois éléments, rythme qui marque la mémoire : « libre, justo y solidario ». « La pregunta retórica » n'attend pas de réponse et oblige le public à réfléchir : « ¿Vamos a quedarnos de brazos cruzados? ». « La antítesis » oppose deux idées : « No es el final, es el principio ». « La gradación » monte en intensité. « El apóstrofe » interpelle le public : « Compañeros », « Queridos amigos ». Le « nosotros » inclusif crée une communauté entre l'orateur et son auditoire.",
                "L'argumentation s'organise avec des connecteurs : « en primer lugar », « además », « no solo... sino también », « es más » (bien plus), « por eso », « por consiguiente », « sin embargo ». Les verbes de l'argumentation sont précieux pour analyser un discours : « afirmar », « defender », « rechazar » (rejeter), « reivindicar » (revendiquer), « denunciar », « exigir » (exiger), « animar a » (encourager à).",
              ],
              box: { label: "Vocabulaire", text: "la anáfora · el ternario · la pregunta retórica · la antítesis · la gradación · la metáfora · el apóstrofe (l'interpellation) · el orador · el auditorio · reivindicar : revendiquer · rechazar : rejeter · exigir : exiger · animar a : encourager à" },
            },
            {
              heading: "Lire une publicité",
              paragraphs: [
                "Une publicité (« un anuncio ») associe une image et un texte. On y trouve « el eslogan » (la phrase choc), « la marca » et « el logotipo », « el producto » et parfois un court texte argumentatif. Il faut toujours identifier le destinataire (« el público objetivo ») et l'intention : vendre un produit (publicité commerciale) ou faire changer un comportement (« campaña de sensibilización », souvent institutionnelle : sécurité routière, santé, environnement). Pour décrire l'image : « en primer plano » (au premier plan), « en segundo plano », « al fondo » (à l'arrière-plan), « a la izquierda », « a la derecha », « en el centro ».",
                "Les procédés les plus fréquents sont le tutoiement du lecteur, qui crée une proximité, l'impératif (« Descúbrelo », « No esperes más »), la question rhétorique, les superlatifs et les comparaisons (« el más rápido », « más que nunca »), les jeux de mots (« los juegos de palabras »), l'humour, l'émotion et l'appel à une personne célèbre. Analyser une publicité, c'est montrer comment l'image et le texte travaillent ensemble pour produire un effet sur le destinataire, et garder un regard critique : la publicité cherche à séduire plus qu'à informer.",
              ],
            },
            {
              heading: "L'impératif, verbe de l'incitation",
              paragraphs: [
                "À l'affirmatif, la forme « tú » est celle de la 3e personne du singulier du présent : « habla », « come », « vive » ; la forme « vosotros » remplace le -r de l'infinitif par -d : « hablad », « comed », « vivid ». Huit verbes ont un impératif « tú » irrégulier : decir → di, hacer → haz, ir → ve, poner → pon, salir → sal, ser → sé, tener → ten, venir → ven. Les formes « usted », « ustedes » et « nosotros » sont celles du subjonctif présent : « hable », « hablen », « hablemos ».",
                "À la forme négative, toutes les personnes prennent le subjonctif présent : « no hables », « no comas », « no habléis », « no hablen ». Les pronoms se soudent à la fin de l'impératif affirmatif, et un accent écrit garde la place de l'accent tonique : « cómpralo », « dímelo », « pruébelo ». À la forme négative, ils se placent devant le verbe : « no lo compres », « no me lo digas ». Avec un verbe pronominal, la forme « nosotros » perd son -s (« vámonos ») et la forme « vosotros » perd son -d (« levantaos »).",
              ],
              box: { label: "Règle", text: "Affirmatif : habla (tú), hable (usted), hablemos, hablad, hablen. Négatif : no hables, no hable, no hablemos, no habléis, no hablen. Irréguliers (tú) : di, haz, ve, pon, sal, sé, ten, ven. Pronoms : cómpralo, mais no lo compres." },
            },
          ],
          keyPoints: [
            "Convencer : par la raison (logos) ; persuadir : par les émotions (pathos) ; l'ethos est la crédibilité de l'orateur.",
            "Procédés : anáfora, ternario, pregunta retórica, antítesis, gradación, apóstrofe, « nosotros » inclusif.",
            "Publicité : eslogan, marca, logotipo, público objetivo ; décrire l'image (en primer plano, al fondo).",
            "Impératif « tú » = 3e personne du présent ; irréguliers : di, haz, ve, pon, sal, sé, ten, ven.",
            "Usted, ustedes, nosotros et tout le négatif : subjonctif présent (pruebe, no esperes, no pierdan).",
            "Pronoms soudés à l'affirmatif avec accent (cómpralo), placés devant au négatif (no lo compres).",
          ],
          example: {
            statement: "Analysez cette publicité (document écrit pour l'exercice) : sur l'image, au premier plan, une jeune femme souriante roule à vélo ; à l'arrière-plan, une longue file de voitures est bloquée dans un embouteillage. Texte : « ¿Cansado de los atascos? Muévete en bici. Muévete por tu salud. Muévete por tu ciudad. » En bas : le logo de la mairie. Identifiez le type de publicité, le destinataire, les procédés et l'intention.",
            solution: [
              "Type : le logo de la mairie montre qu'il s'agit d'une campagne institutionnelle de sensibilisation, et non d'une publicité commerciale : rien n'est vendu.",
              "Destinataire : les automobilistes de la ville, interpellés au « tú » (« ¿Cansado...? », « tu salud », « tu ciudad »), ce qui crée une relation de proximité.",
              "Image : l'opposition entre le premier plan (le vélo, la liberté, le sourire) et l'arrière-plan (les voitures immobiles) forme une antithèse visuelle.",
              "Texte : une question rhétorique en accroche ; l'impératif affirmatif « muévete » (mover + te, avec accent écrit) ; une anaphore et un ternaire (« Muévete » trois fois) ; un jeu sur le verbe, qui signifie à la fois se déplacer et agir (« moverse por » : se mobiliser pour).",
              "Intention : faire changer un comportement en associant le vélo à trois bénéfices (gagner du temps, être en bonne santé, améliorer la ville). Le pathos (le plaisir, l'agacement des embouteillages) l'emporte sur le logos.",
              "Réponse : campagne institutionnelle qui cherche à persuader les automobilistes de prendre le vélo, par l'antithèse visuelle, la question rhétorique, l'impératif et l'anaphore ternaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Mettez le verbe entre parenthèses à l'impératif : a) (tú, descubrir) nuestra nueva aplicación. b) (usted, probar) el nuevo modelo sin compromiso. c) No (tú, esperar) más. d) (vosotros, venir) a la jornada de puertas abiertas. e) (tú, hacer) deporte cada día. f) (tú, comprar + lo) hoy. g) No (ustedes, perder) esta oportunidad.",
              hint: "Repérez la personne et la forme (affirmative ou négative). Pour « usted », « ustedes » et toutes les formes négatives, partez du subjonctif présent. Attention aux verbes à diphtongue (probar, perder) et aux irréguliers en « tú ».",
              solution: [
                "a) « tú » affirmatif = 3e personne du présent : « Descubre nuestra nueva aplicación ».",
                "b) « usted » = subjonctif présent ; « probar » diphtongue (o → ue) : « Pruebe el nuevo modelo sin compromiso ».",
                "c) Négatif = subjonctif : « No esperes más ».",
                "d) « vosotros » affirmatif : infinitif dont le -r devient -d : « Venid a la jornada de puertas abiertas ».",
                "e) « hacer » a un impératif « tú » irrégulier : « Haz deporte cada día ».",
                "f) Pronom soudé à l'affirmatif, accent écrit sur l'ancienne syllabe tonique : « Cómpralo hoy ».",
                "g) Négatif « ustedes » = subjonctif ; « perder » diphtongue (e → ie) : « No pierdan esta oportunidad ».",
                "Réponses : a) Descubre ; b) Pruebe ; c) esperes ; d) Venid ; e) Haz ; f) Cómpralo ; g) pierdan.",
              ],
            },
            {
              level: 2,
              statement: "Une agence de tourisme veut adapter son annonce à un public plus âgé, qu'elle vouvoie. Réécrivez le texte en passant de « tú » à « usted » : « Descubre nuestra región. Ven en tren, deja el coche en casa y disfruta del paisaje. No pierdas tiempo en los atascos: reserva tu billete hoy y vívelo. » Puis expliquez en français pourquoi la plupart des publicités espagnoles préfèrent le « tú ».",
              hint: "Toutes les formes « usted » de l'impératif sont au subjonctif présent. N'oubliez ni le possessif (tu → su), ni le pronom soudé et son accent écrit.",
              solution: [
                "« Descubre » → subjonctif de descubrir, « Descubra » ; « Ven » → venir, subjonctif « venga » : « Venga en tren ».",
                "« deja » → « deje » ; « disfruta » → « disfrute » ; « No pierdas » → « No pierda » (diphtongue e → ie conservée).",
                "« reserva tu billete » → « reserve su billete » (le possessif suit la personne) ; « vívelo » → « vívalo » (pronom soudé, accent écrit maintenu sur « ví »).",
                "Texte réécrit : « Descubra nuestra región. Venga en tren, deje el coche en casa y disfrute del paisaje. No pierda tiempo en los atascos: reserve su billete hoy y vívalo. »",
                "Explication : en Espagne, le tutoiement est très répandu dans la vie quotidienne, et la publicité l'emploie pour créer une impression de proximité et de complicité avec le lecteur ; le vouvoiement, plus distant, est réservé à des cibles ou des contextes plus formels.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Vous vous présentez à l'élection des délégués de votre lycée, dans un établissement espagnol. Rédigez en espagnol le discours que vous prononcerez devant vos camarades (130 à 160 mots) pour les convaincre de voter pour vous et, surtout, de voter. Vous emploierez : un apóstrofe, une pregunta retórica, une anáfora, un ternario, le « nosotros » inclusif et au moins trois impératifs (dont un négatif), en vous adressant à vos camarades avec « vosotros ».",
              hint: "Suivez un plan en trois temps : capter l'attention (apóstrofe et pregunta retórica), présenter vos propositions (anáfora « Quiero... »), appeler à l'action (impératifs). À la forme « vosotros », l'affirmatif se termine en -d (votad) et le négatif prend le subjonctif (no os quedéis).",
              solution: [
                "Étape 1, l'accroche : apostrophe (« Queridos compañeros ») et question rhétorique qui part d'une frustration partagée.",
                "Étape 2, les propositions : une anaphore (« Quiero... ») et un ternaire (« más abierto, más verde y más justo »), chaque fois avec un exemple concret.",
                "Étape 3, la concession et le « nosotros » : reconnaître les limites du rôle de délégué, puis affirmer la force du groupe.",
                "Étape 4, l'appel à l'action : impératifs affirmatifs (participad, proponed, votad) et négatif (no os quedéis callados).",
                "Exemple de production : « Queridos compañeros: ¿estáis cansados de que nadie escuche vuestras ideas? Yo también. Por eso me presento como delegado. Quiero un instituto más abierto, más verde y más justo. Más abierto, porque las salas deben estar disponibles también a la hora de comer; más verde, porque necesitamos papeleras de reciclaje en cada pasillo; más justo, porque cada clase merece ser escuchada. Quiero una cafetería con productos de la región. Quiero un club de debate donde todos puedan hablar. Quiero, sobre todo, que vuestras propuestas lleguen al consejo escolar. Es verdad que un delegado no puede cambiarlo todo solo, pero juntos podemos conseguir mucho: nosotros somos el instituto. Por eso, no os quedéis callados. Participad en las reuniones, proponed vuestras ideas y, el jueves, votad. Votad por mí si creéis en este proyecto, pero, sobre todo, votad: cada voto cuenta. ¡Construyamos juntos el instituto que queremos! »",
                "Vérification : environ 140 mots ; apóstrofe (Queridos compañeros), pregunta retórica, anáfora (Quiero x4), ternario (abierto, verde, justo), nosotros inclusif (juntos podemos, nosotros somos, construyamos) ; impératifs : participad, proponed, votad, construyamos, et le négatif « no os quedéis » ; subjonctif après « cansados de que » (escuche).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Rhétorique, publicité et impératif.",
            statements: [
              { text: "« No compres » est l'impératif négatif de « compra ».", true: true, why: "L'impératif négatif se forme avec le subjonctif présent : no compres." },
              { text: "Avec « usted », l'impératif affirmatif de « probar » est « prueba ».", true: false, why: "« Usted » prend le subjonctif : « pruebe ». « Prueba » est la forme « tú »." },
              { text: "« Haz » est l'impératif de « hacer » à la 2e personne du singulier.", true: true, why: "Hacer fait partie des huit verbes irréguliers à l'impératif « tú » : haz." },
              { text: "À l'impératif négatif, le pronom se soude à la fin du verbe : « no cómpralo ».", true: false, why: "Au négatif, le pronom se place devant le verbe : « no lo compres »." },
              { text: "L'ethos désigne l'appel aux émotions du public.", true: false, why: "C'est le pathos ; l'ethos est l'image et la crédibilité de l'orateur." },
              { text: "Une anaphore répète un même mot en tête de phrases successives.", true: true, why: "Exemple : « Queremos un país libre. Queremos un país justo. »" },
              { text: "« Convencer » s'adresse surtout à la raison, « persuadir » plutôt aux émotions.", true: true, why: "On convainc par des arguments, on persuade en touchant la sensibilité." },
              { text: "Clara Campoamor s'opposa au droit de vote des femmes en 1931.", true: false, why: "Elle le défendit devant les Cortes ; c'est Victoria Kent qui voulait en reporter l'application." },
            ],
          },
          quiz: [
            { q: "Quel est l'impératif de « decir » à la 2e personne du singulier ?", options: ["dice", "diga", "dime", "di"], answer: 3, why: "« Decir » a un impératif « tú » irrégulier : « di ». « Diga » est la forme « usted »." },
            { q: "Comment dire « ne l'achète pas » (tú) ?", options: ["No lo compres.", "No cómpralo.", "No lo compras.", "No compres lo."], answer: 0, why: "Au négatif : subjonctif présent et pronom placé devant le verbe." },
            { q: "Une « pregunta retórica » est :", options: ["une vraie demande d'information", "une question qui n'attend pas de réponse", "une question posée par le public après le discours", "une question écrite en latin"], answer: 1, why: "La question rhétorique n'attend pas de réponse : elle oriente la réflexion du public vers la réponse que veut l'orateur." },
            { q: "Quel levier rhétorique repose sur la crédibilité de l'orateur ?", options: ["le pathos", "le logos", "l'ethos", "le kairos"], answer: 2, why: "L'ethos est l'image de l'orateur (compétence, sincérité) ; le pathos touche les émotions, le logos la raison." },
            { q: "Comment dit-on « venez » à un groupe que l'on vouvoie (ustedes) ?", options: ["Venid", "Vienen", "Venís", "Vengan"], answer: 3, why: "« Ustedes » prend le subjonctif présent : « vengan ». « Venid » s'adresse à des personnes que l'on tutoie (vosotros)." },
          ],
          trap: "Employer l'indicatif ou l'infinitif à l'impératif négatif (« no compras », « no comprar ») au lieu du subjonctif « no compres », et oublier l'accent écrit quand on soude des pronoms : « cómpralo », « dímelo ».",
          method: "Analysez une publicité en trois temps : ce que je vois (l'image, ses plans), ce que je lis (le slogan, les procédés), ce que l'on veut me faire faire (l'intention). Pour former un impératif négatif ou de politesse, partez toujours du subjonctif présent.",
        },
      ],
    },
    {
      id: 'citoyennete-mondes-virtuels',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'ciudadania-digital',
          title: 'Être citoyen à l\'ère du numérique',
          minutes: 30,
          objectives: [
            "Identifier les droits et les devoirs du citoyen dans l'espace numérique.",
            "Mobiliser le lexique de l'identité numérique, des données personnelles et des risques en ligne.",
            "Exprimer l'obligation, la nécessité et le conseil avec « hay que », « tener que », « deber » et « es necesario que » + subjonctif.",
            "Rédiger un texte argumenté sur un enjeu de citoyenneté numérique.",
          ],
          course: [
            {
              heading: "Qu'est-ce que la citoyenneté numérique ?",
              paragraphs: [
                "« La ciudadanía digital » désigne la capacité à utiliser le numérique de façon responsable, critique et sûre, en connaissant ses droits et ses devoirs. Chacun possède une « identidad digital » (l'image que l'on donne de soi en ligne : profils, publications, photos) et laisse une « huella digital » (une trace numérique) : ce qui est publié peut être copié, capturé (« una captura de pantalla ») et retrouvé des années plus tard. Protéger sa vie privée (« la privacidad ») passe par des gestes simples : une « contraseña » solide, des réglages de confidentialité (« la configuración de privacidad ») et de la prudence avant de publier.",
                "Être citoyen en ligne, c'est aussi respecter les autres. La « netiqueta » rassemble les règles de politesse sur internet. Certains comportements sont graves, voire punis par la loi : « el ciberacoso » (le cyberharcèlement), « el discurso de odio » (les propos haineux), « la suplantación de identidad » (l'usurpation d'identité), la diffusion d'images d'une personne sans son accord. Il faut enfin se protéger des escroqueries comme « el phishing » (l'hameçonnage) et d'un usage excessif des écrans.",
              ],
              box: { label: "Vocabulaire", text: "la huella digital : la trace numérique · la identidad digital · los datos personales · la contraseña : le mot de passe · el perfil : le profil · el ciberacoso : le cyberharcèlement · el discurso de odio : les propos haineux · la suplantación de identidad : l'usurpation d'identité · borrar : effacer · denunciar : signaler, porter plainte" },
            },
            {
              heading: "Un cadre juridique : les droits numériques",
              paragraphs: [
                "Dans l'Union européenne, le Règlement général sur la protection des données (RGPD, en espagnol « Reglamento General de Protección de Datos ») s'applique depuis le 25 mai 2018. Il reconnaît à chacun des droits sur ses données : le droit d'accès, de rectification, d'opposition, de portabilité, et le droit d'effacement (« derecho de supresión »), souvent appelé « derecho al olvido » (droit à l'oubli). En Espagne, c'est l'Agencia Española de Protección de Datos (AEPD) qui veille au respect de ces règles, comme la CNIL en France.",
                "L'Espagne a complété ce cadre par la loi organique 3/2018 de protection des données personnelles et de garantie des droits numériques (LOPDGDD). Elle fixe à 14 ans l'âge à partir duquel un mineur peut consentir seul au traitement de ses données (15 ans en France) et reconnaît des droits numériques, comme le droit à la déconnexion des salariés ou le droit à une éducation au numérique. En 2021, le gouvernement espagnol a aussi présenté une « Carta de Derechos Digitales », texte d'orientation sans valeur contraignante.",
              ],
              box: { label: "Repère", text: "25 mai 2018 : application du RGPD dans l'Union européenne. 2018 : en Espagne, loi organique 3/2018 (LOPDGDD), consentement seul aux données dès 14 ans. 2021 : Carta de Derechos Digitales (non contraignante). Autorité espagnole : la AEPD." },
            },
            {
              heading: "Les grands enjeux : fracture numérique, algorithmes, intelligence artificielle",
              paragraphs: [
                "« La brecha digital » (la fracture numérique) désigne les inégalités face au numérique : inégalités d'accès (connexion insuffisante dans certaines zones rurales, coût des équipements) et inégalités d'usage (difficultés de certaines personnes âgées face à l'administration en ligne, « la administración electrónica », par exemple pour prendre un rendez-vous). Quand les démarches publiques passent par internet, la fracture numérique devient une question d'égalité entre citoyens, en Espagne comme en Amérique latine.",
                "Les algorithmes choisissent une part de ce que nous voyons en ligne et peuvent nous enfermer dans « una burbuja de filtros ». L'intelligence artificielle générative (« la inteligencia artificial generativa ») produit textes, images et voix : elle pose des questions d'auteur, de désinformation et de biais (« los sesgos algorítmicos »). L'Union européenne a adopté en 2024 un règlement sur l'intelligence artificielle, qui encadre ses usages selon leur niveau de risque. Être citoyen à l'ère numérique, c'est donc aussi comprendre ces outils pour en garder le contrôle.",
              ],
            },
            {
              heading: "Exprimer l'obligation et le conseil",
              paragraphs: [
                "Trois tournures avec l'infinitif expriment l'obligation. « Hay que » est impersonnel (il faut) : « Hay que proteger los datos ». « Tener que » est personnel (devoir, être obligé de) : « Tengo que cambiar mi contraseña ». « Deber » exprime plutôt une obligation morale : « Debemos respetar a los demás en las redes ». Attention à la négation : « no hay que » signifie il ne faut pas, alors que « no tener que » signifie ne pas être obligé de : « No tienes que publicar todo » (tu n'es pas obligé de tout publier).",
                "Quand l'obligation ou le conseil porte sur une personne précise, on emploie une expression suivie de « que » et du subjonctif : « Es necesario que », « Es importante que », « Es fundamental que », « Es imprescindible que », « Conviene que », « Te aconsejo que », « Te recomiendo que », et le but avec « para que » : « Es importante que protejas tus datos ». Sans sujet précis, ces expressions prennent l'infinitif : « Es importante proteger los datos ». Le subjonctif présent se forme sur la 1re personne du présent (tengo → tenga) et garde les modifications orthographiques : proteger → proteja, publicar → publique, pagar → pague.",
              ],
              box: { label: "Règle", text: "Hay que + infinitif (impersonnel) ; tener que + infinitif (personnel) ; deber + infinitif (obligation morale). Es necesario / importante / fundamental que, conviene que, te aconsejo que, para que + subjonctif. No hay que : il ne faut pas ; no tener que : ne pas être obligé de." },
            },
          ],
          keyPoints: [
            "Huella digital (trace), identidad digital, datos personales, privacidad, contraseña.",
            "Risques : ciberacoso, discurso de odio, suplantación de identidad, phishing.",
            "RGPD depuis le 25 mai 2018 ; droit à l'oubli ; en Espagne, la AEPD et la loi 3/2018 (consentement seul dès 14 ans).",
            "Brecha digital : inégalités d'accès et d'usage ; algorithmes, burbuja de filtros, sesgos de la IA.",
            "Hay que (impersonnel), tener que (personnel), deber (moral) + infinitif.",
            "Es importante que, conviene que, para que + subjonctif ; no hay que ≠ no tener que.",
          ],
          example: {
            statement: "Rédigez en espagnol trois règles pour le « decálogo » de citoyenneté numérique d'un lycée, adressées aux élèves de seconde (que vous tutoyez), en employant trois structures différentes : « hay que », « tener que » ou « deber », et « es importante que » + subjonctif.",
            solution: [
              "Règle 1, impersonnelle, avec « hay que » + infinitif : « Hay que pensar antes de publicar: lo que subes a internet deja huella ».",
              "Règle 2, personnelle, avec « deber » + infinitif (obligation morale) : « Debes respetar a los demás: el ciberacoso es una forma de violencia ».",
              "Règle 3, avec un sujet précis après « que », donc subjonctif : « Es importante que uses contraseñas diferentes y que no las compartas con nadie ». « Usar » donne « uses » et « compartir » donne « compartas ».",
              "Vérification : trois structures distinctes, le subjonctif est employé seulement après « es importante que », et chaque règle est justifiée par une courte explication.",
              "Réponse : « Hay que pensar antes de publicar. Debes respetar a los demás. Es importante que uses contraseñas diferentes y que no las compartas con nadie. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe au présent du subjonctif : a) Es importante que (tú, proteger) tus datos personales. b) Es necesario que los jóvenes (aprender) a reconocer el ciberacoso. c) Conviene que (nosotros, cambiar) las contraseñas con frecuencia. d) Te aconsejo que no (publicar) tu dirección en las redes. e) Es fundamental que las plataformas (ser) más transparentes. f) Los profesores explican los riesgos para que nadie (sufrir) en silencio.",
              hint: "Partez de la 1re personne du présent de l'indicatif, puis inversez la voyelle (-ar → -e, -er et -ir → -a). Attention aux modifications orthographiques : g devient j devant a, c devient qu devant e.",
              solution: [
                "a) « proteger » : protejo → que tú protejas (g → j devant a).",
                "b) « aprender » : aprendo → que ellos aprendan.",
                "c) « cambiar » : cambio → que nosotros cambiemos.",
                "d) « publicar » : publico → que tú publiques (c → qu devant e).",
                "e) « ser » est irrégulier : que ellas sean.",
                "f) « para que » exprime le but et appelle le subjonctif : « sufrir » → que nadie sufra.",
                "Réponses : a) protejas ; b) aprendan ; c) cambiemos ; d) publiques ; e) sean ; f) sufra.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce message posté sur un forum (texte écrit pour l'exercice) : « Hola, soy Marcos y tengo quince años. Un compañero ha publicado en un grupo una foto mía sin mi permiso y ahora todos se ríen de mí en los comentarios. No quiero contárselo a mis padres porque me da vergüenza. ¿Qué hago? » a) Résumez la situation en français en deux phrases. b) Rédigez une réponse en espagnol (60 à 80 mots) qui donne quatre conseils, chacun avec une structure différente.",
              hint: "Identifiez le problème (diffusion d'une image sans accord, moqueries) et le blocage (la honte). Pour la réponse, variez : hay que + infinitif, es importante que + subjonctif, te aconsejo que + subjonctif, impératif négatif.",
              solution: [
                "a) Marcos, quinze ans, est victime de moqueries en ligne : un camarade a publié une photo de lui sans son accord dans un groupe, et les commentaires se moquent de lui. Il a honte et n'ose pas en parler à ses parents.",
                "b) Structure de la réponse : empathie, puis quatre conseils (parler à un adulte, garder des preuves, demander le retrait, ne pas répondre), puis un encouragement.",
                "Exemple de réponse : « Hola, Marcos: siento mucho lo que te pasa, y no es culpa tuya. Es importante que hables con un adulto de confianza, tus padres o un profesor. Además, hay que guardar capturas de pantalla de los comentarios, porque son pruebas. Te aconsejo que pidas a la red social que retire la foto: tienes derecho a hacerlo. Y no respondas a las burlas, porque eso alimenta el conflicto. ¡Ánimo! »",
                "Vérification : environ 70 mots ; quatre structures distinctes (es importante que hables, hay que guardar, te aconsejo que pidas, no respondas) ; « pidas » est le subjonctif de « pedir » (e → i).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez cette tribune (texte écrit pour l'exercice), puis répondez. « Cada día aceptamos sin leer las condiciones de uso de aplicaciones que conocen nuestros gustos, nuestros horarios y nuestros amigos. Nos llamamos ciudadanos, pero en internet a menudo solo somos usuarios. Ser ciudadano digital no significa desconectarse, sino comprender: saber quién recoge nuestros datos, para qué y con qué derecho. Las leyes europeas nos dan herramientas, como el derecho al olvido, pero pocas personas las utilizan. Por eso, la escuela no debe limitarse a enseñar a usar los ordenadores: tiene que formar a personas capaces de decidir. » a) Quelle opposition l'auteur établit-il entre « ciudadanos » et « usuarios » ? b) Selon lui, que signifie être citoyen numérique ? c) Quel paradoxe souligne-t-il à propos des lois ? d) Quel rôle attribue-t-il à l'école ? e) Expression (130 à 160 mots) : « ¿Qué debe hacer la escuela para formar ciudadanos digitales? » Employez au moins quatre structures d'obligation ou de conseil, dont deux avec le subjonctif.",
              hint: "Repérez les tournures « no... sino » et « no debe limitarse a... : tiene que... », qui portent la thèse. Pour l'expression, proposez trois actions concrètes, chacune avec une structure différente, puis concluez.",
              solution: [
                "a) Le citoyen comprend et décide ; l'utilisateur consomme passivement des services dont il accepte les conditions sans les lire. Pour l'auteur, en ligne nous sommes souvent réduits au rôle d'utilisateurs.",
                "b) Être citoyen numérique, ce n'est pas se déconnecter mais comprendre : savoir qui collecte nos données, dans quel but et sur quelle base légale.",
                "c) Les lois européennes donnent des outils, comme le droit à l'oubli, mais peu de personnes s'en servent : les droits existent sans être exercés.",
                "d) L'école ne doit pas seulement apprendre à se servir d'un ordinateur ; elle doit former des personnes capables de décider par elles-mêmes.",
                "e) Exemple de production : « Hoy los jóvenes pasan muchas horas conectados, pero eso no los convierte en ciudadanos digitales: saber usar un móvil no significa comprender cómo funciona internet. En mi opinión, la escuela tiene que asumir tres misiones. En primer lugar, es necesario que los alumnos aprendan a proteger sus datos: hay que explicarles qué es la huella digital y cómo funciona el derecho al olvido. En segundo lugar, conviene que los profesores enseñen a contrastar la información, porque los bulos circulan más rápido que la verdad. Por último, la escuela debe luchar contra el ciberacoso: es fundamental que cada alumno sepa a quién pedir ayuda y que nadie mire hacia otro lado cuando un compañero sufre. Por supuesto, la familia también tiene un papel, pero la escuela es el único lugar donde todos los jóvenes reciben la misma formación. Así, no formaremos solo usuarios, sino ciudadanos libres y responsables. »",
                "Vérification : environ 145 mots ; structures : tiene que asumir, es necesario que aprendan, hay que explicarles, conviene que enseñen, debe luchar, es fundamental que sepa y que nadie mire (quatre subjonctifs) ; plan en trois arguments et conclusion qui reprend l'opposition usuarios / ciudadanos.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque expression espagnole à son équivalent français.",
            pairs: [
              { left: "la huella digital", right: "la trace numérique" },
              { left: "la brecha digital", right: "la fracture numérique" },
              { left: "el ciberacoso", right: "le cyberharcèlement" },
              { left: "la contraseña", right: "le mot de passe" },
              { left: "el derecho al olvido", right: "le droit à l'oubli" },
              { left: "la suplantación de identidad", right: "l'usurpation d'identité" },
            ],
          },
          quiz: [
            { q: "« No hay que publicar tus datos » signifie :", options: ["Il ne faut pas publier tes données.", "Tu n'es pas obligé de publier tes données.", "Il n'y a pas de données à publier.", "On ne peut jamais publier de données."], answer: 0, why: "« No hay que » exprime une interdiction (il ne faut pas) ; « no tienes que » signifierait « tu n'es pas obligé de »." },
            { q: "Complétez : « Es importante que (tú) ... tus contraseñas. »", options: ["cambias", "cambies", "cambiar", "cambiarás"], answer: 1, why: "« Es importante que » suivi d'un sujet précis appelle le subjonctif présent : « cambies »." },
            { q: "En Espagne, selon la loi de 2018, à partir de quel âge un mineur peut-il consentir seul au traitement de ses données ?", options: ["12 ans", "16 ans", "14 ans", "18 ans"], answer: 2, why: "La loi organique 3/2018 fixe ce seuil à 14 ans en Espagne ; il est de 15 ans en France." },
            { q: "La « brecha digital » désigne :", options: ["une faille de sécurité dans un logiciel", "les inégalités face au numérique", "le piratage d'un compte personnel", "la panne générale d'un réseau"], answer: 1, why: "La fracture numérique regroupe les inégalités d'accès (équipement, connexion) et d'usage (compétences)." },
            { q: "Quelle phrase exprime une obligation personnelle ?", options: ["Hay que leer las condiciones.", "Es importante leer las condiciones.", "Conviene leer las condiciones.", "Tengo que leer las condiciones."], answer: 3, why: "« Tener que » est conjugué à une personne précise (yo) ; « hay que » est impersonnel, et les deux autres sont des conseils généraux." },
          ],
          trap: "Confondre « no hay que » (il ne faut pas) et « no tener que » (ne pas être obligé de), et oublier le subjonctif après « es importante que », « conviene que » ou « para que » : on écrit « es importante que protejas », et non « que proteges ».",
          method: "Devant une expression d'obligation ou de conseil, demandez-vous si un sujet précis suit « que » : si oui, subjonctif (« Es importante que protejas... ») ; sinon, infinitif (« Es importante proteger... »). Apprenez le lexique par couples : publicar / borrar, público / privado, conectarse / desconectarse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'movilizaciones',
          title: 'Mobilisations et engagement en ligne',
          minutes: 35,
          objectives: [
            "Présenter des mobilisations citoyennes du monde hispanique et le rôle qu'y ont joué les réseaux sociaux.",
            "Mobiliser le lexique de l'engagement, de la protestation et de l'action collective.",
            "Exprimer et nuancer une opinion : « creo que » + indicatif, « no creo que » + subjonctif, « aunque » + indicatif ou subjonctif.",
            "Argumenter sur les forces et les limites de l'engagement en ligne.",
          ],
          course: [
            {
              heading: "Le vocabulaire de l'action collective",
              paragraphs: [
                "Dans la rue, on peut « convocar una manifestación » (appeler à manifester), organiser « una concentración » (un rassemblement statique), « una acampada » (un campement), « una huelga » (une grève) ou « una marcha ». Les manifestants brandissent « pancartas » et scandent « lemas » (des slogans) ; ils « reivindican » (revendiquent), « exigen », « protestan contra » ou « se movilizan por » une cause. « Salir a la calle » signifie descendre dans la rue.",
                "En ligne, l'engagement prend d'autres formes : « el ciberactivismo », « la recogida de firmas » ou « la petición en línea » (la pétition), « la etiqueta » (le hashtag, terme que la Fundéu RAE recommande en espagnol), le partage de vidéos qui documentent un abus. Un contenu qui se répand très vite « se viraliza ». On critique parfois « el activismo de sofá » ou « clictivismo » : un engagement qui se réduit à un « me gusta » ou à une signature, sans action concrète.",
              ],
              box: { label: "Vocabulaire", text: "convocar : appeler à · la manifestación · la concentración : le rassemblement · la acampada : le campement · la huelga : la grève · la pancarta : la banderole · el lema : le slogan · reivindicar : revendiquer · la recogida de firmas : la pétition · la etiqueta : le hashtag · el activismo de sofá : l'engagement de canapé" },
            },
            {
              heading: "Espagne, 2011 : le mouvement 15-M",
              paragraphs: [
                "Le 15 mai 2011, des manifestations ont lieu dans de nombreuses villes d'Espagne, à l'appel de la plateforme ¡Democracia Real Ya!, qui s'est fait connaître par internet et les réseaux sociaux. Le contexte est celui de la crise économique : chômage très élevé, en particulier chez les jeunes, et défiance envers les responsables politiques. Après la manifestation, des participants s'installent sur la Puerta del Sol, à Madrid : l'acampada dure plusieurs semaines, organisée en assemblées (« asambleas ») et en commissions. On appelle ce mouvement le 15-M ou le mouvement des « indignados ».",
                "Ses slogans les plus connus, comme « No nos representan » ou « Democracia real ya », dénoncent une représentation politique jugée confisquée et réclament plus de transparence et de participation. Les réseaux ont servi à convoquer, à coordonner et à diffuser en direct, mais la force du mouvement est venue de l'occupation physique des places. Dans les années suivantes, de nouveaux partis, comme Podemos, fondé en 2014, se sont réclamés en partie de son esprit.",
              ],
              box: { label: "Repère", text: "15 mai 2011 : manifestations dans toute l'Espagne, puis acampada de la Puerta del Sol à Madrid. Mouvement des « indignados » ou 15-M. Slogans : « No nos representan », « Democracia real ya »." },
            },
            {
              heading: "Amérique latine : Ni Una Menos et l'estallido social chilien",
              paragraphs: [
                "En Argentine, le 3 juin 2015, une immense marche a lieu à Buenos Aires et dans d'autres villes contre les féminicides (« los feminicidios » ou « femicidios ») et les violences de genre (« la violencia de género »). L'appel, lancé sur les réseaux par des journalistes, des écrivaines et des militantes, est porté par une expression devenue hashtag : #NiUnaMenos (pas une de moins). Le mouvement s'est ensuite étendu à de nombreux pays d'Amérique latine, et il organise depuis des mobilisations régulières.",
                "Au Chili, en octobre 2019, une hausse du prix du ticket de métro à Santiago provoque des fraudes massives organisées par des lycéens, qui sautent les tourniquets. La protestation s'étend à tout le pays : c'est « el estallido social » (l'explosion sociale). Le slogan « No son 30 pesos, son 30 años » montre que la colère dépasse le prix du ticket : elle vise trois décennies d'inégalités depuis le retour de la démocratie. Un plébiscite approuve en octobre 2020 l'élaboration d'une nouvelle Constitution, mais les deux projets proposés sont rejetés par référendum, en 2022 puis en 2023.",
              ],
            },
            {
              heading: "Forces et limites de l'engagement en ligne",
              paragraphs: [
                "Les réseaux offrent aux mouvements la rapidité, un faible coût, une grande visibilité et une organisation horizontale, sans chef ni parti. Un téléphone suffit pour filmer et dénoncer un abus. Ils permettent aussi à des causes ignorées par les grands médias de trouver un public, et à des mobilisations de se répondre d'un pays à l'autre, comme l'a montré Ni Una Menos.",
                "Mais l'engagement en ligne a ses limites : il peut rester superficiel (« activismo de sofá »), retomber aussi vite qu'il est apparu, être parasité par des bulos, exposer les militants au harcèlement ou à la surveillance, et dépendre de plateformes privées dont les algorithmes décident de la visibilité des messages. Les exemples du 15-M, de Ni Una Menos ou du Chili montrent que les réseaux sont surtout efficaces lorsqu'ils conduisent à une action dans la rue, dans les associations ou dans les urnes.",
              ],
            },
            {
              heading: "Exprimer et nuancer une opinion",
              paragraphs: [
                "Les verbes d'opinion affirmatifs sont suivis de l'indicatif : « Creo que », « Pienso que », « Opino que », « Me parece que », « Estoy convencido de que » : « Creo que las redes son útiles ». À la forme négative, ils appellent le subjonctif : « No creo que las redes basten », « No me parece que sea justo ».",
                "Pour concéder, « aunque » se construit avec l'indicatif quand on reconnaît un fait réel (« Aunque las redes ayudan, no bastan » : elles aident, je l'admets) et avec le subjonctif quand il s'agit d'une hypothèse (« Aunque llueva, iremos » : même s'il pleut) ou d'un fait que l'on juge sans importance. Autres outils : « a pesar de » + nom ou infinitif, « si bien » + indicatif (bien que, pour un fait reconnu), « por mucho que » + subjonctif (on a beau), et les connecteurs « sin embargo » et « no obstante » (cependant).",
              ],
              box: { label: "Règle", text: "Creo / pienso / me parece que + indicatif ; no creo / no pienso / no me parece que + subjonctif. Aunque + indicatif : fait admis ; aunque + subjonctif : hypothèse (même si). Por mucho que + subjonctif : on a beau." },
            },
          ],
          keyPoints: [
            "Vocabulaire : convocar, manifestación, concentración, acampada, huelga, pancarta, lema, recogida de firmas, etiqueta.",
            "15-M : 15 mai 2011, Espagne, acampada de la Puerta del Sol, « indignados », « No nos representan ».",
            "Ni Una Menos : Argentine, 3 juin 2015, contre les féminicides ; étendu à l'Amérique latine.",
            "Chili, octobre 2019 : estallido social, « No son 30 pesos, son 30 años » ; plébiscite de 2020, projets rejetés en 2022 et 2023.",
            "Forces : rapidité, visibilité, horizontalité ; limites : activismo de sofá, bulos, harcèlement, dépendance aux plateformes.",
            "Creo que + indicatif, no creo que + subjonctif ; aunque + indicatif (fait) ou subjonctif (hypothèse).",
          ],
          example: {
            statement: "a) Reliez les deux idées par « aunque » en choisissant le mode, et justifiez : « Las redes sociales permiten movilizarse muy rápido (fait reconnu). Un clic no sustituye la acción en la calle. » b) Même consigne : « Quizá llueva mañana (hypothèse). Iremos a la concentración. » c) Mettez à la forme négative : « Creo que el activismo en línea es suficiente. »",
            solution: [
              "a) La rapidité des réseaux est un fait réel que l'on concède : « aunque » + indicatif.",
              "Phrase : « Aunque las redes sociales permiten movilizarse muy rápido, un clic no sustituye la acción en la calle. »",
              "b) La pluie est seulement envisagée : « aunque » + subjonctif présent (« llueva »), au sens de « même si ».",
              "Phrase : « Aunque llueva mañana, iremos a la concentración. »",
              "c) Un verbe d'opinion à la forme négative appelle le subjonctif : « es » devient « sea ».",
              "Phrase : « No creo que el activismo en línea sea suficiente. »",
              "Réponses : a) Aunque las redes sociales permiten... ; b) Aunque llueva mañana... ; c) No creo que el activismo en línea sea suficiente.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Conjuguez le verbe à l'indicatif ou au subjonctif : a) Creo que las redes sociales (ser) útiles para informar. b) No pienso que un « me gusta » (cambiar) el mundo. c) Aunque mañana (llover), iremos a la concentración (la pluie est incertaine). d) Aunque el 15-M (empezar) en 2011, sus debates siguen vivos (c'est un fait). e) Me parece que la petición ya (tener) muchas firmas. f) Por mucho que (tú, firmar) peticiones, nada cambiará si no votas.",
              hint: "Opinion affirmative : indicatif ; opinion niée : subjonctif. Pour « aunque », demandez-vous s'il s'agit d'un fait admis ou d'une hypothèse. « Por mucho que » appelle toujours le subjonctif.",
              solution: [
                "a) Opinion affirmative : indicatif présent, « son ».",
                "b) Opinion niée : subjonctif présent, « cambie ».",
                "c) Hypothèse (même s'il pleut) : subjonctif, « llueva ».",
                "d) Fait réel et passé : indicatif, au passé simple, « empezó ».",
                "e) Opinion affirmative : indicatif, « tiene ».",
                "f) « Por mucho que » + subjonctif : « firmes ».",
                "Réponses : a) son ; b) cambie ; c) llueva ; d) empezó ; e) tiene ; f) firmes.",
              ],
            },
            {
              level: 2,
              statement: "Lisez ce témoignage (personnage fictif, texte écrit pour l'exercice), puis répondez en français. « Me llamo Valentina, vivo en Rosario (Argentina) y tengo veinticinco años. En 2015, cuando tenía catorce, vi en las redes la convocatoria de Ni Una Menos. Al principio pensé que solo era una etiqueta más, pero mi madre me llevó a la marcha y descubrí a miles de personas que pedían lo mismo que yo: vivir sin miedo. Hoy dirijo una pequeña asociación que da talleres sobre la violencia de género en los institutos. Las redes nos ayudan a convocar y a contar lo que hacemos, aunque también recibimos insultos y amenazas. Para mí, un tuit puede abrir una puerta, pero el cambio se construye cara a cara. » a) Comment Valentina a-t-elle connu le mouvement et quelle a été sa première impression ? b) Qu'a-t-elle découvert à la marche ? c) Que fait-elle aujourd'hui ? d) Quels sont, selon elle, l'apport et le revers des réseaux ? e) Expliquez la dernière phrase. f) Relevez la proposition concessive et justifiez le mode du verbe.",
              hint: "Suivez les marqueurs de temps (en 2015, al principio, hoy). Pour la question f), cherchez « aunque » et demandez-vous si le fait est réel ou hypothétique.",
              solution: [
                "a) Elle a vu l'appel à manifester sur les réseaux en 2015, à quatorze ans ; elle a d'abord cru qu'il s'agissait d'un hashtag de plus, sans conséquence.",
                "b) Accompagnée par sa mère, elle a découvert des milliers de personnes qui réclamaient la même chose qu'elle : vivre sans peur.",
                "c) Elle dirige une petite association qui anime des ateliers sur les violences de genre dans les lycées.",
                "d) Les réseaux l'aident à mobiliser et à faire connaître les actions de l'association ; mais ils l'exposent aussi aux insultes et aux menaces.",
                "e) Un message en ligne peut éveiller une conscience ou ouvrir une porte, mais le changement réel se construit par la rencontre, en face à face, comme la marche et les ateliers.",
                "f) « aunque también recibimos insultos y amenazas » : indicatif, car les insultes et menaces sont un fait réel que Valentina reconnaît.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Expression écrite (150 à 180 mots) : « ¿Puede el activismo en línea cambiar la sociedad? » Vous présenterez les forces et les limites de l'engagement en ligne, en vous appuyant sur au moins un exemple précis du monde hispanique étudié dans la leçon, et vous emploierez au moins deux verbes d'opinion (dont un à la forme négative) et deux tournures concessives.",
              hint: "Plan possible : introduction avec la question ; une partie sur les forces avec un exemple (Ni Una Menos ou le 15-M) ; une partie sur les limites ; une conclusion nuancée. Vérifiez le mode après chaque « no creo que » et chaque « aunque ».",
              solution: [
                "Étape 1 : poser le sujet et annoncer la nuance (oui, mais à certaines conditions).",
                "Étape 2 : les forces, avec un exemple daté : Ni Una Menos (Argentine, 2015) ou le 15-M (Espagne, 2011).",
                "Étape 3 : les limites (activismo de sofá, bulos, harcèlement), puis la conclusion qui répond à la question.",
                "Exemple de production : « Hoy basta un teléfono para firmar una petición o compartir una etiqueta. Pero ¿puede el activismo en línea cambiar la sociedad? Creo que las redes son una herramienta poderosa. Permiten convocar a miles de personas en pocas horas, sin dinero y sin partido. En 2011, por ejemplo, el 15-M llenó las plazas de España gracias a convocatorias difundidas en internet. En 2015, en Argentina, la etiqueta #NiUnaMenos llevó a una multitud a la calle contra los feminicidios, y el movimiento se extendió a toda América Latina. Sin embargo, no creo que un clic sea suficiente. Por mucho que compartamos mensajes, nada cambia si nadie actúa después. Además, las redes difunden bulos y exponen a los activistas a insultos. Aunque internet no sustituye la acción colectiva, puede ser su punto de partida. En definitiva, el activismo en línea cambia la sociedad cuando sale de la pantalla y se convierte en compromiso real: en la calle, en las asociaciones y en las urnas. »",
                "Vérification : environ 160 mots ; opinions : creo que son (indicatif), no creo que sea (subjonctif) ; concessions : por mucho que compartamos (subjonctif), aunque no sustituye (indicatif, fait admis) ; exemple daté et précis ; conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Mobilisations et expression de l'opinion.",
            statements: [
              { text: "Le mouvement 15-M est né en Espagne le 15 mai 2011.", true: true, why: "Son nom vient de cette date : 15 de mayo, 15-M." },
              { text: "Les « indignados » ont installé un campement sur la Puerta del Sol, à Madrid.", true: true, why: "L'acampada de Sol a duré plusieurs semaines après la manifestation du 15 mai." },
              { text: "Ni Una Menos est né au Chili pour protester contre la hausse du prix du métro.", true: false, why: "Ni Una Menos est né en Argentine en 2015 contre les féminicides ; le métro de Santiago concerne le Chili en 2019." },
              { text: "« No creo que » est suivi de l'indicatif.", true: false, why: "Un verbe d'opinion nié appelle le subjonctif : « No creo que sea verdad »." },
              { text: "« Aunque llueva » signifie « même s'il pleut » : la pluie est une hypothèse.", true: true, why: "Aunque + subjonctif présente le fait comme envisagé, non comme réel." },
              { text: "L'« activismo de sofá » désigne un engagement limité à quelques clics.", true: true, why: "On parle aussi de « clictivismo » : signer ou aimer sans agir concrètement." },
              { text: "Dans ce contexte, « una concentración » désigne un moment de réflexion silencieuse.", true: false, why: "Il s'agit d'un rassemblement statique de personnes dans un lieu public." },
              { text: "Au Chili, le plébiscite de 2020 a approuvé l'élaboration d'une nouvelle Constitution, mais les deux projets ont ensuite été rejetés.", true: true, why: "Les projets ont été rejetés par référendum en 2022 puis en 2023." },
            ],
          },
          quiz: [
            { q: "Complétez : « No creo que las redes ... suficientes. »", options: ["son", "sean", "serán", "estén"], answer: 1, why: "Opinion niée : subjonctif ; et « suficiente » est une caractéristique, d'où « ser » : « sean »." },
            { q: "Dans quel pays le mouvement Ni Una Menos est-il né en 2015 ?", options: ["en Argentine", "au Mexique", "en Colombie", "au Venezuela"], answer: 0, why: "La première grande marche a eu lieu le 3 juin 2015 à Buenos Aires et dans d'autres villes argentines." },
            { q: "« Aunque las redes ayudan, no bastan » : pourquoi l'indicatif ?", options: ["« aunque » impose toujours l'indicatif", "la phrase exprime une hypothèse", "l'aide des réseaux est un fait admis", "le sujet du verbe est pluriel"], answer: 2, why: "Avec l'indicatif, « aunque » concède un fait réel ; avec le subjonctif, il exprimerait une hypothèse." },
            { q: "Que dénonce le slogan chilien « No son 30 pesos, son 30 años » ?", options: ["la hausse du ticket de métro uniquement", "trois décennies d'inégalités", "l'âge minimum pour voter", "trente ans de dictature"], answer: 1, why: "Les 30 pesos de hausse ne sont que le déclencheur : le slogan vise trente ans d'inégalités depuis le retour de la démocratie en 1990." },
            { q: "Quel mot désigne un rassemblement statique de manifestants ?", options: ["la huelga", "la recogida de firmas", "la concentración", "la pancarta"], answer: 2, why: "« Una concentración » est un rassemblement en un lieu ; « la huelga » est la grève, « la pancarta » la banderole." },
          ],
          trap: "Mettre l'indicatif après une opinion niée (« no creo que es » au lieu de « no creo que sea »), ou employer systématiquement le subjonctif après « aunque » : quand on concède un fait réel et admis, « aunque » se construit avec l'indicatif.",
          method: "Pour chaque mobilisation, préparez une fiche de quatre lignes en espagnol : ¿Dónde y cuándo? ¿Quién? ¿Qué se pedía? ¿Qué papel tuvieron las redes? Vous disposerez ainsi d'exemples précis et datés pour argumenter à l'écrit comme à l'oral.",
        },
      ],
    },
    {
      id: 'metissages',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'mestizaje-historia',
          title: 'Le métissage dans l\'histoire de l\'Amérique hispanique',
          minutes: 35,
          objectives: [
            "Situer les grandes étapes de la conquête et de la colonisation de l'Amérique hispanique.",
            "Définir le métissage et ses formes : mélange des populations, des cultures et des croyances (syncrétisme).",
            "Analyser les représentations du métissage, de la société des castes aux penseurs du XXe siècle.",
            "Raconter des faits historiques en espagnol avec le passé simple (indefinido), l'imparfait et le plus-que-parfait.",
          ],
          course: [
            {
              heading: "Trois mondes se rencontrent",
              paragraphs: [
                "Le 12 octobre 1492, Christophe Colomb (Cristóbal Colón) atteint une île des Bahamas, Guanahani, qu'il rebaptise San Salvador. Commence alors la conquête. Hernán Cortés débarque sur la côte du Mexique en 1519 ; allié à des peuples hostiles aux Mexicas (les Aztèques), comme les Tlaxcaltèques, il s'empare de leur capitale, Tenochtitlan, le 13 août 1521. En 1532, Francisco Pizarro capture l'Inca Atahualpa à Cajamarca, au Pérou, et l'Empire inca s'effondre dans les années qui suivent.",
                "La rencontre est brutale : guerres, travail forcé (notamment dans le cadre de « la encomienda ») et surtout épidémies, comme la variole (« la viruela »), provoquent un effondrement démographique des populations indigènes. Le dominicain Bartolomé de las Casas dénonce ces violences, en particulier dans sa Brevísima relación de la destrucción de las Indias (1552). Pour remplacer la main-d'œuvre, la traite transatlantique (« la trata ») déporte des millions d'Africains réduits en esclavage vers les Amériques, notamment vers les Caraïbes, la Nouvelle-Grenade (où Carthagène des Indes est un grand port négrier) et le Pérou. Trois mondes, indigène, européen et africain, se trouvent ainsi mêlés par la violence.",
              ],
              box: { label: "Repère", text: "12 octobre 1492 : arrivée de Colomb aux Bahamas · 1519 : débarquement de Cortés au Mexique · 13 août 1521 : chute de Tenochtitlan · 1532 : capture d'Atahualpa à Cajamarca · 1552 : Brevísima relación de Las Casas · 1810-1825 : indépendances" },
            },
            {
              heading: "Le métissage : définitions et syncrétisme",
              paragraphs: [
                "« El mestizaje » désigne le mélange des populations et celui des cultures : langues, croyances, musiques, cuisines, arts. La société coloniale a nommé ces mélanges : « mestizo » (né d'un parent espagnol et d'un parent indigène), « mulato » (d'un parent espagnol et d'un parent africain), « zambo » (d'un parent indigène et d'un parent africain). Un « criollo » est un descendant d'Espagnols né en Amérique, un « peninsular » un Espagnol né dans la péninsule. Ces catégories sont historiques : plusieurs, comme « mulato » ou « zambo », sont aujourd'hui ressenties comme péjoratives, et l'on parle plutôt de « pueblos indígenas » ou « originarios » et de « afrodescendientes ».",
                "Le métissage est aussi religieux : c'est le syncrétisme (« el sincretismo »), la fusion de croyances. Selon la tradition, la Vierge de Guadalupe apparut en 1531 à un indigène, Juan Diego, sur la colline du Tepeyac, près de Mexico, lieu où l'on vénérait auparavant une divinité mexica ; la « Morenita », à la peau sombre, est devenue un symbole de l'identité mexicaine. Le Día de Muertos mêle des rites préhispaniques et les fêtes catholiques de la Toussaint et des défunts (1er et 2 novembre). À Cuba, la santería associe des divinités yorubas (les orishas) à des saints catholiques.",
              ],
              box: { label: "Vocabulaire", text: "el mestizaje : le métissage · el mestizo · el criollo : descendant d'Espagnols né en Amérique · el peninsular : Espagnol né en Espagne · los pueblos originarios : les peuples autochtones · los afrodescendientes · la trata : la traite · el sincretismo : le syncrétisme · la conquista · la colonia : l'époque coloniale" },
            },
            {
              heading: "La société des castes et les figures du métissage",
              paragraphs: [
                "La société coloniale est hiérarchisée selon l'origine : au sommet, les péninsulaires, puis les créoles, les métis, les indigènes, et enfin les Africains réduits en esclavage et de nombreuses catégories mixtes appelées « castas ». Au XVIIIe siècle, en Nouvelle-Espagne (le Mexique colonial), des peintres réalisent des séries de « cuadros de castas » : chaque toile montre un père, une mère et leur enfant, avec une inscription qui nomme le mélange, par exemple « De español e india, mestizo ». Ces images ne sont pas de simples portraits : elles mettent en scène une hiérarchie sociale.",
                "Deux figures incarnent ce métissage. La Malinche (Malintzin, baptisée doña Marina), jeune femme nahua offerte aux Espagnols en 1519, devient l'interprète et la conseillère de Cortés ; leur fils, Martín Cortés, est souvent présenté comme l'un des premiers métis. Son image reste ambivalente au Mexique : traîtresse pour les uns (le « malinchismo » désigne la préférence pour l'étranger), mère fondatrice pour d'autres. L'Inca Garcilaso de la Vega (Cuzco, 1539 ; Cordoue, 1616), fils d'un capitaine espagnol et d'une princesse inca, Chimpu Ocllo, publie en 1609 les Comentarios reales de los Incas, où il raconte l'histoire de ses ancêtres maternels ; il y revendique avec fierté le nom de « mestizo ».",
              ],
            },
            {
              heading: "Penser le métissage aux XIXe et XXe siècles",
              paragraphs: [
                "Les indépendances (1810-1825) sont conduites surtout par des créoles, comme Simón Bolívar ou José de San Martín ; au Mexique, le prêtre Miguel Hidalgo lance l'insurrection le 16 septembre 1810. Les nouvelles nations cherchent ensuite leur identité. En 1925, le Mexicain José Vasconcelos publie La raza cósmica, essai qui célèbre le métissage comme l'avenir de l'humanité, une « cinquième race » née du mélange de toutes les autres. Après la révolution mexicaine, les muralistes, comme Diego Rivera, peignent un passé indigène et métis sur les murs des bâtiments publics.",
                "Cette célébration a été critiquée : l'éloge du métissage a parfois masqué la discrimination des peuples indigènes et afrodescendants. Le débat se voit encore dans le nom du 12 octobre : en Espagne, c'est la Fête nationale (« Fiesta Nacional », ou Día de la Hispanidad) ; le Venezuela l'a rebaptisé en 2002 « Día de la Resistencia Indígena », et l'Argentine en 2010 « Día del Respeto a la Diversidad Cultural ». La mémoire de la conquête reste un sujet vivant.",
              ],
            },
            {
              heading: "Raconter l'histoire : indefinido, imperfecto, pluscuamperfecto",
              paragraphs: [
                "Le passé simple (« pretérito indefinido ») rapporte les événements achevés qui font avancer le récit : « Cortés llegó a México en 1519 », « Tenochtitlan cayó en 1521 ». L'imparfait (« imperfecto ») décrit le décor, les situations et les habitudes : « Tenochtitlan era una ciudad enorme », « Los mexicas dominaban gran parte del centro de México ». Le plus-que-parfait (« pluscuamperfecto » : haber à l'imparfait + participe passé) marque un fait antérieur à un autre fait passé : « Cuando Cortés llegó, Malintzin ya había aprendido la lengua maya ».",
              ],
              box: { label: "Règle", text: "Indefinido : événement ponctuel, achevé (llegó, conquistó, publicó). Imperfecto : description, cadre, habitude (era, vivía, hablaba). Pluscuamperfecto : había, habías, había, habíamos, habíais, habían + participe : antériorité (había llegado)." },
            },
          ],
          keyPoints: [
            "1492 : arrivée de Colomb ; 1519-1521 : conquête de l'Empire mexica par Cortés ; 1532 : capture d'Atahualpa par Pizarro.",
            "Trois mondes mêlés : indigène, européen, africain (traite transatlantique) ; effondrement démographique indigène.",
            "Mestizo, mulato, zambo, criollo, peninsular : des catégories coloniales, dont certaines sont aujourd'hui péjoratives.",
            "Syncrétisme : Vierge de Guadalupe, Día de Muertos, santería cubaine.",
            "Figures : la Malinche ; l'Inca Garcilaso, Comentarios reales (1609) ; Vasconcelos, La raza cósmica (1925).",
            "Indefinido (événements), imperfecto (décor, habitudes), pluscuamperfecto (antériorité : había + participe).",
          ],
          example: {
            statement: "Conjuguez les verbes au temps du passé qui convient : « Malintzin, una joven nahua que (vivir) entre los mayas, (hablar) náhuatl y maya. Cuando Cortés (llegar) a la costa en 1519, ella ya (aprender) varias lenguas. Pronto (convertirse) en su intérprete. »",
            solution: [
              "« que (vivir) entre los mayas » : situation qui dure, élément du décor → imparfait : « vivía ».",
              "« (hablar) náhuatl y maya » : capacité durable, description → imparfait : « hablaba ».",
              "« Cuando Cortés (llegar) » : événement ponctuel, daté → indefinido : « llegó ».",
              "« ella ya (aprender) varias lenguas » : action antérieure à l'arrivée de Cortés, soulignée par « ya » → plus-que-parfait : « había aprendido ».",
              "« Pronto (convertirse) en su intérprete » : événement qui fait avancer le récit → indefinido : « se convirtió ».",
              "Réponse : « Malintzin, una joven nahua que vivía entre los mayas, hablaba náhuatl y maya. Cuando Cortés llegó a la costa en 1519, ella ya había aprendido varias lenguas. Pronto se convirtió en su intérprete. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec le mot qui convient : mestizo, criollo, peninsular, mulato, sincretismo. a) En la época colonial, el hijo de un padre español y de una madre indígena era llamado ... b) Un descendiente de españoles nacido en América era un ... c) Un español nacido en España que vivía en América era un ... d) El hijo de un padre español y de una madre africana era llamado ... e) La fusión de creencias indígenas, africanas y católicas se llama ...",
              hint: "Distinguez ce qui relève du mélange des origines (mestizo, mulato), du lieu de naissance (criollo, peninsular) et des croyances (sincretismo).",
              solution: [
                "a) Parent espagnol et parent indigène : « mestizo ».",
                "b) Descendant d'Espagnols, mais né en Amérique : « criollo ».",
                "c) Né dans la péninsule Ibérique : « peninsular ».",
                "d) Parent espagnol et parent africain : « mulato » (terme colonial, aujourd'hui ressenti comme péjoratif).",
                "e) Fusion de croyances : « sincretismo ».",
                "Réponses : a) mestizo ; b) criollo ; c) peninsular ; d) mulato ; e) sincretismo.",
              ],
            },
            {
              level: 2,
              statement: "Conjuguez les verbes au passé (indefinido, imperfecto ou pluscuamperfecto) et justifiez chaque choix : « El Inca Garcilaso de la Vega (nacer) en Cuzco en 1539. Su padre (ser) un capitán español y su madre (pertenecer) a la nobleza inca. De niño, (escuchar) a menudo las historias que le (contar) sus parientes maternos. En 1560 (viajar) a España, de donde nunca (volver). Cuando (publicar) los Comentarios reales en 1609, (pasar) ya casi cincuenta años lejos de su tierra. »",
              hint: "Une date précise et un événement unique appellent l'indefinido ; une description ou une habitude (« de niño », « a menudo »), l'imparfait ; une durée écoulée avant un autre fait passé, le plus-que-parfait.",
              solution: [
                "« nació » : événement unique et daté (indefinido).",
                "« era » et « pertenecía » : description de ses parents, situation durable (imparfait).",
                "« escuchaba » et « contaban » : habitude de l'enfance, soulignée par « de niño » et « a menudo » (imparfait).",
                "« viajó » : événement daté (indefinido) ; « volvió » : fait achevé, vu dans sa globalité (indefinido, « nunca volvió »).",
                "« publicó » : événement daté (indefinido) ; « habían pasado » : durée écoulée avant la publication (plus-que-parfait). Vérification : de 1560 à 1609, 49 ans, d'où « casi cincuenta años ».",
                "Réponse : nació, era, pertenecía, escuchaba, contaban, viajó, volvió, publicó, habían pasado.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce panneau de musée (texte écrit pour l'exercice), puis répondez. « Esta serie de dieciséis cuadros fue pintada en la Nueva España en el siglo XVIII. En cada lienzo aparece una familia: un padre, una madre y un hijo, con una inscripción que indica el origen de cada uno, por ejemplo “De español e india, mestizo”. En los primeros cuadros, las familias llevan ropa elegante y viven en casas ricas; en los últimos, la ropa es más sencilla y los oficios más humildes. Estas imágenes no eran un simple retrato de la sociedad: transmitían una jerarquía en la que el lugar de cada persona dependía de su origen. Hoy nos invitan a reflexionar: ¿el mestizaje fue un encuentro o una imposición? » a) Que représente chaque tableau ? b) Comment la série montre-t-elle une hiérarchie ? c) Pourquoi le panneau affirme-t-il que ces images n'étaient pas un simple portrait de la société ? d) Expression (130 à 160 mots, en espagnol) : répondez à la question finale du panneau en vous appuyant sur au moins deux exemples précis de la leçon, et employez les trois temps du passé.",
              hint: "Pour b), comparez les premiers et les derniers tableaux (vêtements, maisons, métiers). Pour d), construisez une réponse nuancée : la violence de la conquête d'un côté, la création de cultures nouvelles de l'autre.",
              solution: [
                "a) Chaque toile montre une famille (père, mère, enfant) avec une inscription qui nomme l'origine de chacun et le mélange qui en résulte.",
                "b) La série descend l'échelle sociale : les premières familles portent des vêtements élégants et vivent dans des maisons riches ; les dernières ont des vêtements simples et des métiers modestes.",
                "c) Parce qu'elles diffusaient une vision hiérarchique : la place de chaque personne dans la société dépendait de son origine. Elles servaient à justifier un ordre social, pas seulement à le décrire.",
                "d) Exemple de production : « Creo que el mestizaje fue, al principio, una imposición. Cuando los españoles llegaron a América, los pueblos indígenas ya habían construido grandes civilizaciones, como la de los mexicas. La conquista fue violenta: muchos indígenas murieron por las guerras, el trabajo forzado y las epidemias, y millones de africanos fueron llevados a la fuerza como esclavos. Además, la sociedad colonial era muy jerárquica, como muestran los cuadros de castas. Sin embargo, de esta historia dolorosa nacieron culturas nuevas. El Inca Garcilaso, hijo de un capitán español y de una princesa inca, se presentaba con orgullo como mestizo. La Virgen de Guadalupe o el Día de Muertos mezclan creencias indígenas y católicas. En definitiva, el mestizaje fue a la vez una herida y una riqueza: no hay que olvidar la violencia, pero tampoco la creatividad de los pueblos que lo vivieron. »",
                "Vérification : environ 140 mots ; indefinido (llegaron, fue, murieron, nacieron), imperfecto (era, se presentaba), pluscuamperfecto (habían construido) ; deux exemples précis (cuadros de castas, Garcilaso, Guadalupe) ; conclusion nuancée.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces événements dans l'ordre chronologique.",
            items: [
              "Llegada de Cristóbal Colón a una isla de las Bahamas",
              "Caída de Tenochtitlan, capital de los mexicas",
              "Captura del inca Atahualpa en Cajamarca",
              "Publicación de los Comentarios reales del Inca Garcilaso",
              "Inicio de la insurrección de Miguel Hidalgo en México",
              "Publicación de La raza cósmica de José Vasconcelos",
            ],
          },
          quiz: [
            { q: "En quelle année tombe Tenochtitlan, la capitale des Mexicas ?", options: ["1492", "1532", "1521", "1810"], answer: 2, why: "Cortés, arrivé en 1519, prend Tenochtitlan le 13 août 1521 ; 1532 est la capture d'Atahualpa." },
            { q: "Un « criollo », à l'époque coloniale, est :", options: ["un descendant d'Espagnols né en Amérique", "un indigène converti au catholicisme", "un Espagnol né dans la péninsule Ibérique", "un enfant né d'un parent indigène et d'un parent africain"], answer: 0, why: "Le criollo est né en Amérique de parents d'origine espagnole ; le péninsulaire est né en Espagne." },
            { q: "Qui a écrit les Comentarios reales de los Incas (1609) ?", options: ["Bartolomé de las Casas", "José Vasconcelos", "Hernán Cortés", "l'Inca Garcilaso"], answer: 3, why: "Fils d'un capitaine espagnol et d'une princesse inca, l'Inca Garcilaso y raconte l'histoire de ses ancêtres maternels." },
            { q: "Le syncrétisme religieux, c'est :", options: ["l'interdiction d'une religion", "la fusion de plusieurs croyances", "la conversion forcée d'un peuple", "la séparation de l'Église et de l'État"], answer: 1, why: "Le syncrétisme mêle des croyances d'origines différentes, comme dans le Día de Muertos ou la santería cubaine." },
            { q: "Complétez : « Cuando Cortés llegó, Malintzin ya ... la lengua maya. »", options: ["aprendió", "había aprendido", "aprendía", "habría aprendido"], answer: 1, why: "L'apprentissage est antérieur à l'arrivée de Cortés, elle-même passée : plus-que-parfait, « había aprendido »." },
          ],
          trap: "Présenter le métissage comme une rencontre paisible, en oubliant la violence de la conquête et de la traite ; ou, à l'inverse, oublier les cultures nouvelles qui en sont nées. En grammaire, employer l'imparfait pour un événement daté et unique : on écrit « Cortés llegó en 1519 », et non « llegaba ».",
          method: "Construisez une frise à trois couleurs (monde indigène, européen, africain) avec les dates clés : 1492, 1519-1521, 1532, 1609, 1810, 1925. Pour chaque date, écrivez une phrase à l'indefinido, puis ajoutez une phrase de contexte à l'imparfait : vous saurez ainsi raconter l'histoire à l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'culturas-mestizas',
          title: 'Musiques, langues et cuisines métissées',
          minutes: 30,
          objectives: [
            "Présenter des musiques nées du métissage et identifier leurs racines.",
            "Repérer dans la langue espagnole les apports de l'arabe et des langues amérindiennes.",
            "Expliquer comment les échanges entre l'Ancien et le Nouveau Monde ont transformé les cuisines.",
            "Employer les pronoms relatifs (que, quien, donde, lo que, cuyo) pour définir et décrire.",
          ],
          course: [
            {
              heading: "Des musiques nées du mélange",
              paragraphs: [
                "Le « son cubano » naît à la fin du XIXe siècle dans l'est de Cuba (l'Oriente) : il associe la guitare et les formes chantées venues d'Espagne aux percussions d'origine africaine (bongos, claves, maracas). Il est l'une des racines de la salsa, qui se forme à New York dans les années 1960 et 1970 autour de musiciens portoricains et cubains, avec des artistes comme la Cubaine Celia Cruz, surnommée la Reine de la salsa, ou le Panaméen Rubén Blades. En 1997, l'album Buena Vista Social Club fait redécouvrir le son cubain dans le monde entier.",
                "Le tango apparaît à la fin du XIXe siècle sur les rives du Río de la Plata, à Buenos Aires et à Montevideo : il mêle les musiques des immigrés européens, la habanera, la milonga et des rythmes d'origine africaine comme le candombe ; son instrument emblématique, le bandonéon, vient d'Allemagne. L'UNESCO l'a inscrit au patrimoine culturel immatériel en 2009. La cumbia, née sur la côte caraïbe de la Colombie, réunit des flûtes indigènes (les gaitas), des tambours africains et des chants d'origine espagnole. En Espagne, le flamenco, né en Andalousie avec un rôle essentiel des gitans, est inscrit par l'UNESCO en 2010. Plus récemment, le reggaeton est né au Panama et à Porto Rico dans les années 1990.",
              ],
              box: { label: "Repère", text: "Son : est de Cuba, fin XIXe · Salsa : New York, années 1960-1970 · Tango : Río de la Plata, fin XIXe, UNESCO 2009 · Cumbia : côte caraïbe colombienne · Flamenco : Andalousie, UNESCO 2010 · Reggaeton : Panama et Porto Rico, années 1990" },
            },
            {
              heading: "Une langue métissée",
              paragraphs: [
                "L'espagnol porte la trace de ses contacts. Les arabismes, hérités d'Al-Andalus, commencent souvent par « al- » ou « a- », l'article arabe : « almohada » (oreiller), « alcalde » (maire), « algodón » (coton), « aceite » (huile), « azúcar », « arroz », « ajedrez » (échecs). « Ojalá » vient d'une expression arabe qui signifie « si Dieu le veut ». Les mots venus d'Amérique (« indigenismos ») sont nombreux : du taïno (Caraïbes) viennent « canoa », « huracán », « hamaca », « maíz » ; du nahuatl (Mexique), « chocolate », « tomate », « aguacate », « chicle », « cacahuete » ; du quechua (Andes), « papa » (pomme de terre), « cóndor », « llama », « puma », « pampa ». Beaucoup sont passés en français : chocolat, tomate, ouragan, hamac.",
                "Aujourd'hui, l'espagnol vit aux côtés de nombreuses langues. Au Paraguay, la Constitution de 1992 fait du guarani une langue officielle avec l'espagnol, et une grande partie de la population le parle ; le mélange des deux langues porte un nom, le « jopara ». La Constitution bolivienne de 2009 reconnaît comme officielles l'espagnol et 36 langues des peuples indigènes ; au Pérou, le quechua et l'aymara sont officiels dans les zones où ils prédominent. Aux États-Unis, le contact avec l'anglais produit le « spanglish » : « parquear el carro » (garer la voiture), « llamar para atrás » (calque de « to call back »).",
              ],
              box: { label: "À retenir", text: "Arabe : almohada, alcalde, aceite, azúcar, ojalá. Taïno : canoa, huracán, hamaca, maíz. Nahuatl : chocolate, tomate, aguacate, chicle. Quechua : papa, cóndor, llama, pampa. Paraguay : espagnol et guarani officiels." },
            },
            {
              heading: "Des cuisines métissées",
              paragraphs: [
                "Après 1492, l'échange colombien (« el intercambio colombino ») transforme les tables des deux continents. L'Amérique donne au monde le maïs, la pomme de terre, la tomate, le cacao, la vanille, le piment (« el chile » ou « el ají »), l'avocat et la dinde (« el pavo »). L'Europe apporte en Amérique le blé, la vigne, l'olivier, les agrumes, la canne à sucre, et des animaux comme les vaches, les porcs, les poules et les chevaux. La cuisine espagnole elle-même est métissée : le gazpacho tel qu'on le connaît aujourd'hui repose sur la tomate et le poivron, venus d'Amérique, et la tortilla de patatas sur la pomme de terre andine.",
                "Au Mexique, le mole poblano, sauce de la région de Puebla, associe des piments et du cacao américains à des épices venues d'Europe et d'Asie, comme la cannelle ; la cuisine traditionnelle mexicaine est inscrite au patrimoine immatériel de l'UNESCO depuis 2010. Au Pérou, le ceviche (poisson cru mariné dans le jus de citron vert, avec piment et oignon) unit des produits locaux et des agrumes arrivés avec les Espagnols. L'immigration chinoise, à partir du XIXe siècle, a donné la cuisine « chifa », et l'immigration japonaise, à partir de 1899, la cuisine « nikkei ».",
              ],
            },
            {
              heading: "Les pronoms relatifs pour définir et décrire",
              paragraphs: [
                "« Que » est le relatif le plus courant, pour les personnes comme pour les choses : « El tango es un baile que nació en el Río de la Plata ». « Quien » (« quienes » au pluriel) ne s'emploie que pour des personnes, surtout après une préposition ou entre virgules : « Celia Cruz, quien nació en La Habana, triunfó en Nueva York » ; « la cantante de quien te hablé ». Après une préposition, on emploie aussi « el que, la que, los que, las que » : « la ciudad en la que vivo ». « Donde » renvoie à un lieu : « el barrio donde nació el tango ».",
                "« Lo que » traduit « ce que » ou « ce qui » : « Lo que me gusta del son es su ritmo ». « Cuyo, cuya, cuyos, cuyas » traduit « dont » quand il exprime la possession, et s'accorde avec le nom qui suit (la chose possédée), jamais avec le possesseur : « un plato cuyo origen es peruano », « una música cuyas raíces son africanas ». Ailleurs, « dont » se traduit selon la préposition du verbe : « la canción de la que te hablo » (la chanson dont je te parle).",
              ],
              box: { label: "Règle", text: "que : personnes et choses · quien(es) : personnes, après préposition ou entre virgules · el / la / los / las que : après préposition · donde : lieu · lo que : ce que, ce qui · cuyo / cuya / cuyos / cuyas + nom : dont (possession), accordé avec le nom qui suit." },
            },
          ],
          keyPoints: [
            "Musiques métisses : son cubain, salsa, tango (UNESCO 2009), cumbia, flamenco (UNESCO 2010), reggaeton.",
            "Arabismes en « al- » (almohada, alcalde) ; indigenismos : chocolate, tomate (nahuatl), papa, cóndor (quechua), huracán (taïno).",
            "Paraguay : guarani et espagnol officiels ; Bolivie : 36 langues indigènes officielles (2009).",
            "Échange colombien : maïs, pomme de terre, tomate, cacao vers l'Europe ; blé, vigne, bétail vers l'Amérique.",
            "Plats métissés : mole poblano, ceviche, cuisines chifa et nikkei au Pérou.",
            "Relatifs : que, quien, donde, lo que ; cuyo s'accorde avec le nom qui suit (cuyas raíces).",
          ],
          example: {
            statement: "Rédigez en espagnol une courte présentation de la cumbia à partir de ces notes, en employant au moins trois pronoms relatifs différents : née sur la côte caraïbe de la Colombie ; racines indigènes (les flûtes appelées gaitas), africaines (les tambours) et espagnoles (le chant) ; aujourd'hui dansée dans toute l'Amérique latine, avec des versions locales, par exemple en Argentine.",
            solution: [
              "Définir avec « que » : « La cumbia es una música que nació en la costa caribe de Colombia ».",
              "Exprimer la possession avec « cuyo », accordé avec « raíces » (féminin pluriel) : « Es un género cuyas raíces son indígenas, africanas y españolas ».",
              "Ajouter une précision entre virgules avec « que » : « las gaitas, que son flautas indígenas, se mezclan con los tambores africanos y con el canto de origen español ».",
              "Introduire une idée avec « lo que » et un lieu avec « donde » : « Lo que más sorprende es su difusión: hoy se baila en toda América Latina, por ejemplo en Argentina, donde existen versiones locales ».",
              "Réponse : « La cumbia es una música que nació en la costa caribe de Colombia. Es un género cuyas raíces son indígenas, africanas y españolas: las gaitas, que son flautas indígenas, se mezclan con los tambores africanos y con el canto de origen español. Lo que más sorprende es su difusión: hoy se baila en toda América Latina, por ejemplo en Argentina, donde existen versiones locales. »",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez avec le relatif qui convient : que, quien, donde, lo que, cuyo, cuya, cuyos. a) La salsa es una música ... se formó en Nueva York. b) Celia Cruz, ... nació en La Habana, fue llamada la Reina de la Salsa. c) Paraguay es un país ... se hablan el español y el guaraní. d) El mole es un plato ... ingredientes vienen de varios continentes. e) ... más me gusta de la cocina peruana es su variedad. f) Es una canción ... letra mezcla el inglés y el español.",
              hint: "Regardez ce qui suit le blanc : un nom possédé appelle une forme de « cuyo » accordée avec ce nom ; un lieu appelle « donde » ; une idée vague (ce que) appelle « lo que ».",
              solution: [
                "a) Antécédent « una música » (chose), relatif sujet : « que ».",
                "b) Antécédent « Celia Cruz » (personne), entre virgules : « quien » (« que » est aussi possible).",
                "c) Antécédent « un país » (lieu) : « donde » (ou « en el que »).",
                "d) Possession, accord avec « ingredientes » (masculin pluriel) : « cuyos ».",
                "e) Sens de « ce que » : « Lo que ».",
                "f) Possession, accord avec « letra » (féminin singulier) : « cuya ».",
                "Réponses : a) que ; b) quien ; c) donde ; d) cuyos ; e) Lo que ; f) cuya.",
              ],
            },
            {
              level: 2,
              statement: "a) Classez ces mots selon leur langue d'origine (arabe, nahuatl, quechua, taïno) : almohada, chocolate, papa, huracán, aceite, tomate, cóndor, ojalá, hamaca. b) Reliez ensuite chaque paire de phrases par un relatif : 1) El ceviche es un plato. Su origen es peruano. 2) Buenos Aires es una ciudad. En esta ciudad nació el tango. 3) El guaraní es una lengua. Muchos paraguayos hablan esta lengua todos los días.",
              hint: "Les mots en « al- » ou « a- » viennent souvent de l'arabe ; pensez à la région d'origine de chaque produit ou animal. Pour b), « su » devient une forme de « cuyo », « en esta ciudad » devient « donde ».",
              solution: [
                "a) Arabe : almohada, aceite, ojalá. Nahuatl : chocolate, tomate. Quechua : papa, cóndor. Taïno : huracán, hamaca.",
                "b1) « Su origen » exprime la possession, « origen » est masculin singulier : « El ceviche es un plato cuyo origen es peruano ».",
                "b2) « En esta ciudad » désigne un lieu : « Buenos Aires es una de las ciudades donde nació el tango » (le tango est né à Buenos Aires et à Montevideo, d'où « una de las ciudades »).",
                "b3) « Esta lengua » est complément d'objet : « El guaraní es una lengua que muchos paraguayos hablan todos los días ».",
                "Bilan : trois arabismes, deux mots de chacune des trois langues amérindiennes, et trois relatifs différents (cuyo, donde, que).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce billet de blog (personnage fictif, texte écrit pour l'exercice), puis répondez. « Me llamo Rodrigo y soy cocinero en Lima. Mi abuela, cuyos padres llegaron de China, me enseñó a saltear verduras en el wok; mi abuelo, que era de Ayacucho, me enseñó a respetar la papa, de la que existen miles de variedades en Perú. En mi restaurante sirvo un arroz chaufa, plato chifa que nació de la mezcla de la cocina china y de los productos peruanos, y un ceviche con un toque de salsa de soja, como hacen los cocineros nikkei. Algunos clientes me dicen que traiciono la tradición. Yo les respondo que la cocina peruana siempre ha sido mestiza: el limón llegó con los españoles, el arroz también, pero los inmigrantes chinos lo convirtieron en un plato de todos los días, y el ají ya estaba aquí antes que todos. Para mí, una tradición que no cambia es una tradición que muere. » a) D'où vient la famille de Rodrigo ? b) Présentez les deux plats qu'il sert et les mélanges qu'ils réalisent. c) Quel reproche lui fait-on et comment y répond-il ? d) Expliquez la dernière phrase. e) Expression (130 à 160 mots, en espagnol) : « ¿El mestizaje cultural amenaza las tradiciones o las enriquece? » Appuyez-vous sur au moins deux exemples de la leçon (musique, langue ou cuisine) et employez au moins trois relatifs différents.",
              hint: "Pour c), repérez les trois exemples historiques donnés par Rodrigo (le citron, le riz, le piment). Pour e), vous pouvez concéder que certaines traditions disparaissent avant de montrer que le mélange crée du nouveau.",
              solution: [
                "a) Sa grand-mère est fille d'immigrés chinois ; son grand-père était originaire d'Ayacucho, dans les Andes péruviennes.",
                "b) L'arroz chaufa, plat de la cuisine chifa, né de la rencontre entre la cuisine chinoise et les produits péruviens ; un ceviche relevé de sauce soja, à la manière de la cuisine nikkei (nippo-péruvienne).",
                "c) Des clients l'accusent de trahir la tradition. Il répond que la cuisine péruvienne a toujours été métissée : le citron et le riz sont arrivés avec les Espagnols, les immigrés chinois ont fait du riz un plat quotidien, et le piment était déjà là.",
                "d) Une tradition vivante se transforme au contact des autres ; celle qui refuse tout changement se fige et finit par disparaître.",
                "e) Exemple de production : « Algunas personas piensan que el mestizaje cultural destruye las tradiciones. Es verdad que, cuando dos culturas se mezclan, algunas costumbres cambian o desaparecen. Sin embargo, creo que el mestizaje enriquece mucho más de lo que destruye. El tango, por ejemplo, es una música que nació de la mezcla de ritmos africanos, de la habanera y de las canciones de los inmigrantes europeos; hoy es un símbolo de Argentina y de Uruguay. La cumbia colombiana, que une flautas indígenas y tambores africanos, se baila hoy en todo el continente. Lo mismo ocurre con la cocina peruana, cuyos platos más famosos, como el ceviche o el arroz chaufa, mezclan productos y técnicas de varios continentes. Incluso la lengua española, en la que usamos palabras árabes como “almohada” o náhuatl como “chocolate”, es el resultado de muchos encuentros. En definitiva, lo que amenaza una tradición no es el mestizaje, sino el olvido. »",
                "Vérification : environ 150 mots ; relatifs : que, cuyos, en la que, lo que ; exemples précis (tango, cocina peruana, arabismos) ; concession (es verdad que..., sin embargo) et conclusion nette.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque musique à son lieu de naissance.",
            pairs: [
              { left: "el tango", right: "les rives du Río de la Plata" },
              { left: "el son", right: "l'est de Cuba" },
              { left: "la salsa", right: "New York, avec des musiciens caribéens" },
              { left: "la cumbia", right: "la côte caraïbe de la Colombie" },
              { left: "el flamenco", right: "l'Andalousie" },
              { left: "el reguetón", right: "le Panama et Porto Rico" },
            ],
          },
          quiz: [
            { q: "De quelle langue vient le mot « chocolate » ?", options: ["du quechua", "du nahuatl", "de l'arabe", "du taïno"], answer: 1, why: "« Chocolate » vient du nahuatl, la langue des Mexicas, comme « tomate » et « aguacate »." },
            { q: "Complétez : « Es un plato ... ingredientes vienen de tres continentes. »", options: ["cuyo", "que", "donde", "cuyos"], answer: 3, why: "« Cuyo » s'accorde avec le nom qui suit : « ingredientes » est masculin pluriel, d'où « cuyos »." },
            { q: "Où le tango est-il né ?", options: ["au bord du Río de la Plata", "dans les quartiers de La Havane", "dans les villes d'Andalousie", "sur la côte caraïbe colombienne"], answer: 0, why: "Le tango naît à la fin du XIXe siècle à Buenos Aires et à Montevideo, sur les deux rives du Río de la Plata." },
            { q: "Lequel de ces produits est arrivé en Amérique avec les Européens ?", options: ["la pomme de terre", "le cacao", "le blé", "la tomate"], answer: 2, why: "Le blé vient de l'Ancien Monde ; la pomme de terre, le cacao et la tomate sont d'origine américaine." },
            { q: "Au Paraguay, quelles langues sont officielles ?", options: ["l'espagnol seulement", "l'espagnol et le quechua", "le guarani seulement", "l'espagnol et le guarani"], answer: 3, why: "La Constitution paraguayenne de 1992 fait de l'espagnol et du guarani les deux langues officielles." },
          ],
          trap: "Accorder « cuyo » avec le possesseur au lieu du nom qui le suit : on écrit « un plato cuyas recetas », car « cuyas » s'accorde avec « recetas ». Autre piège : croire que le métissage concerne seulement l'Amérique, alors que l'espagnol et la cuisine d'Espagne sont eux aussi le fruit de mélanges.",
          method: "Construisez un tableau à trois colonnes (musiques, mots, plats) et, pour chaque élément, notez en espagnol son origine dans une phrase avec un relatif : « El tango es un baile que nació... », « La papa es una palabra que viene del quechua ». Vous aurez ainsi des exemples prêts pour l'écrit et l'oral.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'espana-encrucijada',
          title: 'L\'Espagne, carrefour des cultures',
          minutes: 35,
          objectives: [
            "Situer les grandes étapes du peuplement et des influences culturelles de la péninsule Ibérique.",
            "Présenter l'héritage d'Al-Andalus et la coexistence, souvent conflictuelle, des trois cultures.",
            "Identifier les traces de ces influences dans la langue, l'art, la cuisine et la diversité linguistique actuelle.",
            "Exprimer le changement avec « ponerse », « volverse », « hacerse », « convertirse en », « llegar a ser » et « quedarse ».",
          ],
          course: [
            {
              heading: "Des Ibères aux Wisigoths",
              paragraphs: [
                "La péninsule Ibérique a toujours été un lieu de passage. Aux Ibères et aux Celtes (dont le mélange, au centre, a donné les Celtibères) s'ajoutent des peuples venus de la Méditerranée : les Phéniciens fondent Gadir (Cadix), les Grecs Emporion (Empúries, en Catalogne), les Carthaginois Qart Hadasht (Carthagène). En 218 av. J.-C., pendant la deuxième guerre punique, les Romains débarquent à Emporion : la péninsule devient la province romaine d'Hispania pendant environ six siècles.",
                "Rome laisse un héritage immense : le latin, d'où viennent le castillan, le catalan et le galicien ; le droit ; les routes ; des monuments comme l'aqueduc de Ségovie ou le théâtre de Mérida. Le philosophe Sénèque est né à Cordoue, l'empereur Trajan à Itálica, près de Séville. Au Ve siècle, les Wisigoths s'installent dans la péninsule ; au VIe siècle, leur royaume a pour capitale Tolède, et en 589 le roi Récarède se convertit au catholicisme.",
              ],
              box: { label: "Repère", text: "218 av. J.-C. : débarquement romain à Emporion · Hispania romaine pendant environ six siècles · Ve siècle : arrivée des Wisigoths · VIe siècle : Tolède, capitale du royaume wisigoth · 589 : conversion de Récarède au catholicisme" },
            },
            {
              heading: "Al-Andalus (711-1492)",
              paragraphs: [
                "En 711, des troupes musulmanes venues d'Afrique du Nord, menées par Tariq, traversent le détroit (le nom de Gibraltar vient de l'arabe « Yabal Tariq », la montagne de Tariq) et battent le roi wisigoth Rodrigue. En quelques années, elles contrôlent la plus grande partie de la péninsule, qu'elles appellent Al-Andalus. En 929, Abderramán III proclame le califat de Cordoue : la ville, avec sa grande mosquée et la cité palatiale de Medina Azahara, devient l'une des plus grandes et des plus brillantes d'Europe.",
                "Al-Andalus est un foyer de savoir : on y traduit et commente les auteurs grecs, on y développe la médecine, l'astronomie, l'agronomie. Deux philosophes nés à Cordoue au XIIe siècle en sont le symbole : le musulman Averroès (Ibn Rushd), commentateur d'Aristote, et le juif Maïmonide, philosophe et médecin. Pendant ce temps, les royaumes chrétiens du Nord progressent vers le sud : c'est ce qu'on appelle la Reconquista (prise de Tolède en 1085, victoire de Las Navas de Tolosa en 1212). Le royaume nasride de Grenade est le dernier État musulman de la péninsule.",
              ],
            },
            {
              heading: "Trois cultures : échanges et ruptures",
              paragraphs: [
                "Pendant des siècles, chrétiens, musulmans et juifs ont vécu sur le même territoire. L'historien Américo Castro a popularisé le mot « convivencia » pour désigner cette coexistence ; les historiens la nuancent aujourd'hui : il y eut de vrais échanges, mais aussi des hiérarchies, des tensions et des violences. À Tolède, aux XIIe et XIIIe siècles, des traducteurs des trois cultures font passer en latin, puis en castillan, des œuvres arabes et grecques ; le roi Alphonse X le Sage (qui règne de 1252 à 1284) encourage ce travail et fait du castillan une langue de savoir. L'art mudéjar, art de style islamique réalisé dans les royaumes chrétiens, témoigne aussi de ce mélange.",
                "1492 marque une rupture. Le 2 janvier, Grenade se rend aux Rois catholiques, Isabelle de Castille et Ferdinand d'Aragon. Le 31 mars, un décret expulse les juifs qui refusent le baptême : ces Séfarades (« Sefarad » est le nom hébreu de l'Espagne) emportent dans leur exil, au Maroc ou dans l'Empire ottoman, leur langue, le judéo-espagnol. Entre 1609 et 1614, sous Philippe III, ce sont les morisques, descendants de musulmans convertis, qui sont expulsés. En 2015, une loi espagnole a ouvert l'accès à la nationalité aux descendants des Séfarades.",
              ],
              box: { label: "Repère", text: "711 : arrivée des musulmans · 929 : califat de Cordoue · 1085 : prise de Tolède · XIIIe siècle : Alphonse X le Sage · 2 janvier 1492 : chute de Grenade · 31 mars 1492 : expulsion des juifs · 1609-1614 : expulsion des morisques" },
            },
            {
              heading: "Un héritage vivant, une Espagne plurielle",
              paragraphs: [
                "L'héritage d'Al-Andalus se lit dans la langue (des milliers d'arabismes : « aceite », « azúcar », « alcalde », « almohada ») et dans la carte : le Guadalquivir vient de « al-wadi al-kabir », le grand fleuve ; « Alcalá », nom de plusieurs villes, vient de « al-qal'a », la forteresse. Il se voit dans l'architecture (l'Alhambra de Grenade, la mosquée-cathédrale de Cordoue, l'art mudéjar) et se goûte dans la cuisine, avec des produits diffusés par les Arabes comme le riz, le safran (« el azafrán »), l'aubergine (« la berenjena ») ou les agrumes.",
                "L'Espagne d'aujourd'hui reste plurielle. Selon l'article 3 de la Constitution de 1978, le castillan est la langue officielle de l'État, et les autres langues d'Espagne sont co-officielles dans leurs communautés autonomes : le catalan (appelé valencien dans la Communauté valencienne), le galicien, le basque (« euskera », langue antérieure à l'arrivée des Romains et sans lien avec le latin) et l'aranais (l'occitan du Val d'Aran), en Catalogne. Depuis la fin du XXe siècle, l'Espagne, longtemps terre d'émigration, est aussi devenue une terre d'immigration, notamment depuis l'Amérique latine, le Maroc et la Roumanie.",
              ],
            },
            {
              heading: "Exprimer le changement : les verbes de « devenir »",
              paragraphs: [
                "L'espagnol n'a pas un seul verbe pour « devenir » : il choisit selon le type de changement. « Ponerse » + adjectif : changement passager d'humeur ou d'aspect (« se puso rojo », « se puso nervioso »). « Volverse » + adjectif : changement profond, souvent inattendu, de caractère (« se volvió desconfiado »). « Hacerse » : changement progressif ou volontaire, de profession, de religion, d'idées (« se hizo médico », « se hizo rico »). « Convertirse en » + nom : transformation complète (« Córdoba se convirtió en la capital de un califato »). « Llegar a ser » : aboutissement d'un long effort (« el castellano llegó a ser una lengua de cultura »). « Quedarse » : état qui résulte d'un événement, souvent une perte (« se quedó ciego », « se quedó sin trabajo »).",
              ],
              box: { label: "Règle", text: "ponerse : passager (se puso triste) · volverse : profond, inattendu (se volvió loco) · hacerse : progressif ou volontaire (se hizo abogado) · convertirse en + nom : transformation · llegar a ser : aboutissement · quedarse : résultat, perte (se quedó sordo). Attention : convertirse a + religion (se convirtió al cristianismo)." },
            },
          ],
          keyPoints: [
            "Phéniciens (Gadir), Grecs, Carthaginois, puis Romains dès 218 av. J.-C. : le latin donne le castillan.",
            "711 : arrivée des musulmans ; 929 : califat de Cordoue ; Averroès et Maïmonide, philosophes cordouans.",
            "Tolède : traductions des XIIe et XIIIe siècles, Alphonse X le Sage ; art mudéjar ; « convivencia » nuancée.",
            "1492 : chute de Grenade et expulsion des juifs (Séfarades) ; 1609-1614 : expulsion des morisques.",
            "Héritage : arabismes, toponymes (Guadalquivir), Alhambra ; langues co-officielles : catalan, galicien, basque, aranais.",
            "Devenir : ponerse (passager), volverse (profond), hacerse (volontaire), convertirse en, llegar a ser, quedarse.",
          ],
          example: {
            statement: "Complétez avec le verbe de changement qui convient, conjugué au passé simple : a) Con Abderramán III, Córdoba ... la capital de un califato. b) Al ver la Alhambra, el turista ... muy contento. c) Tras la conquista de Granada, muchos musulmanes ... cristianos. d) Gracias a Alfonso X, el castellano ... una lengua de cultura.",
            solution: [
              "a) Transformation complète, suivie d'un nom : « convertirse en » → « se convirtió en la capital de un califato ».",
              "b) Émotion passagère : « ponerse » → « se puso muy contento ».",
              "c) Changement de religion : « hacerse » + adjectif → « se hicieron cristianos » (on pourrait dire aussi « se convirtieron al cristianismo »).",
              "d) Aboutissement d'un long processus : « llegar a ser » → « llegó a ser una lengua de cultura ».",
              "Réponses : a) se convirtió en ; b) se puso ; c) se hicieron ; d) llegó a ser.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Choisissez entre ponerse, volverse, hacerse et quedarse, et conjuguez au temps indiqué : a) Cuando habla en público, Pablo siempre ... rojo (présent). b) Después del accidente, mi abuelo ... ciego (passé simple). c) Mi prima estudió mucho y ... médica (passé simple). d) Al oír la noticia, todos ... tristes (passé simple). e) Con la fama, el cantante ... muy arrogante (passé simple). f) Tras el cierre de la fábrica, muchos vecinos ... sin trabajo (passé simple).",
              hint: "Demandez-vous si le changement est passager (ponerse), profond et inattendu (volverse), voulu ou progressif (hacerse), ou s'il s'agit de l'état laissé par un événement (quedarse).",
              solution: [
                "a) Changement passager et visible : « se pone rojo ».",
                "b) État résultant d'un événement, une perte : « se quedó ciego ».",
                "c) Changement de profession obtenu par l'effort : « se hizo médica ».",
                "d) Émotion passagère : « se pusieron tristes ».",
                "e) Changement profond de caractère : « se volvió muy arrogante ».",
                "f) Résultat, perte : « se quedaron sin trabajo ».",
                "Réponses : a) se pone ; b) se quedó ; c) se hizo ; d) se pusieron ; e) se volvió ; f) se quedaron.",
              ],
            },
            {
              level: 2,
              statement: "Traduisez en espagnol, au passé simple : a) En 711, des troupes musulmanes traversèrent le détroit. b) En 929, Cordoue devint la capitale d'un califat. c) Au XIIIe siècle, Tolède devint un grand centre de traduction. d) En 1492, les Rois catholiques prirent Grenade et les juifs furent expulsés. e) Beaucoup de juifs se convertirent au christianisme pour pouvoir rester.",
              hint: "Pour « devenir » suivi d'un nom, pensez à « convertirse en » ou à « llegar a ser ». Pour une conversion religieuse, la préposition change : « convertirse a ». Pour la voix passive, employez « ser » au passé simple et accordez le participe.",
              solution: [
                "a) « En 711, tropas musulmanas cruzaron el estrecho. »",
                "b) Transformation suivie d'un nom : « En 929, Córdoba se convirtió en la capital de un califato. »",
                "c) « En el siglo XIII, Toledo se convirtió en un gran centro de traducción » (ou « llegó a ser », pour insister sur l'aboutissement).",
                "d) Voix passive, participe accordé avec « los judíos » : « En 1492, los Reyes Católicos tomaron Granada y los judíos fueron expulsados. »",
                "e) Conversion religieuse, préposition « a » contractée avec l'article : « Muchos judíos se convirtieron al cristianismo para poder quedarse. »",
                "Vérification : convertirse en (devenir) et convertirse a (se convertir à une religion) ne doivent pas être confondus.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ces paroles d'une guide (personnage fictif, texte écrit pour l'exercice), puis répondez. « Bienvenidos a Toledo. Durante siglos, en estas calles vivieron cristianos, musulmanes y judíos. Miren esta antigua mezquita: después de la conquista cristiana se convirtió en iglesia, pero conserva sus arcos de herradura. Un poco más lejos, una de las antiguas sinagogas fue construida por albañiles musulmanes para la comunidad judía. En el siglo XIII, Toledo llegó a ser un gran centro de traducción, donde sabios de las tres culturas trabajaban juntos. Pero no hay que idealizar ese pasado: hubo también desconfianza, leyes injustas y, en 1492, la expulsión de los judíos. Cuando visiten la ciudad, recuerden las dos caras de esta historia. » a) Quels exemples de mélange culturel la guide donne-t-elle ? b) Pourquoi dit-elle qu'il ne faut pas idéaliser ce passé ? c) Relevez deux verbes de changement et expliquez leur emploi. d) Expression (130 à 160 mots, en espagnol) : « ¿En qué sentido se puede decir que España es un país mestizo? » Appuyez-vous sur trois époques au moins et employez deux verbes de changement.",
              hint: "Pour d), suivez l'ordre chronologique (Rome, Al-Andalus, aujourd'hui) et terminez par une nuance. Les verbes « convertirse en » et « llegar a ser » sont faciles à placer dans un récit historique.",
              solution: [
                "a) Une mosquée devenue église qui garde ses arcs en fer à cheval ; une synagogue bâtie par des maçons musulmans pour la communauté juive ; l'école de traduction où travaillaient des savants des trois cultures.",
                "b) Parce que la coexistence a aussi connu la méfiance, des lois injustes et, en 1492, l'expulsion des juifs : la « convivencia » n'était pas une harmonie parfaite.",
                "c) « se convirtió en iglesia » : transformation complète, suivie d'un nom ; « llegó a ser un gran centro de traducción » : aboutissement d'un long processus.",
                "d) Exemple de production : « España es un país mestizo porque su historia es una historia de encuentros. Primero, los romanos llevaron el latín, que con los siglos se convirtió en el castellano, el catalán y el gallego. Después, durante casi ocho siglos, Al-Andalus transformó la península: Córdoba llegó a ser una de las ciudades más brillantes de Europa, y hoy usamos miles de palabras de origen árabe, como “aceite” o “almohada”. En Toledo, cristianos, musulmanes y judíos tradujeron juntos los saberes antiguos, y el arte mudéjar mezcló estilos islámicos y cristianos. Sin embargo, este mestizaje no fue siempre pacífico: en 1492 los judíos fueron expulsados, y luego los moriscos. Hoy, España sigue siendo plural: tiene varias lenguas oficiales y acoge a inmigrantes de América Latina, de Marruecos o de Rumanía. En definitiva, su riqueza nace de la mezcla, aunque esta historia tenga también páginas oscuras. »",
                "Vérification : environ 140 mots ; trois époques (Rome, Al-Andalus, aujourd'hui) ; verbes de changement : se convirtió en, llegó a ser ; nuance finale avec « aunque » + subjonctif (fait reconnu mais présenté comme n'annulant pas la thèse).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de la péninsule dans l'ordre chronologique.",
            items: [
              "Los romanos desembarcan en Emporion",
              "El rey visigodo Recaredo se convierte al catolicismo",
              "Tropas musulmanas cruzan el estrecho",
              "Abderramán III proclama el califato de Córdoba",
              "Alfonso X el Sabio impulsa la traducción en castellano",
              "Caída de Granada y expulsión de los judíos",
              "Expulsión de los moriscos",
            ],
          },
          quiz: [
            { q: "En quelle année des troupes musulmanes traversent-elles le détroit de Gibraltar ?", options: ["en 1492", "en 929", "en 711", "en 1085"], answer: 2, why: "711 marque le début d'Al-Andalus ; 929 est la proclamation du califat, 1085 la prise de Tolède, 1492 la chute de Grenade." },
            { q: "« Se puso nervioso » exprime :", options: ["un changement passager", "un changement de profession", "un changement définitif de caractère", "une perte irréversible"], answer: 0, why: "« Ponerse » exprime un changement passager d'humeur ou d'aspect." },
            { q: "Que signifie le nom « Guadalquivir », d'origine arabe ?", options: ["la rivière blanche", "le grand fleuve", "la forteresse", "la ville haute"], answer: 1, why: "Il vient de « al-wadi al-kabir », le grand fleuve ; « la forteresse » est le sens de « Alcalá »." },
            { q: "Quelle langue co-officielle d'Espagne n'est pas issue du latin ?", options: ["le catalan", "le galicien", "l'aranais", "le basque"], answer: 3, why: "Le basque (euskera) est antérieur à l'arrivée des Romains et n'a pas de lien de parenté avec le latin." },
            { q: "Quel roi a encouragé au XIIIe siècle les traductions et fait du castillan une langue de savoir ?", options: ["Alphonse X le Sage", "Abderramán III de Cordoue", "Philippe III d'Espagne", "Ferdinand d'Aragon"], answer: 0, why: "Alphonse X le Sage, roi de Castille de 1252 à 1284, a soutenu les traducteurs de Tolède et l'usage savant du castillan." },
          ],
          trap: "Traduire « devenir » toujours par « convertirse en » : le verbe dépend du changement (« se puso triste », « se hizo médica », « se quedó ciego »). Et présenter la « convivencia » comme une harmonie parfaite, alors que la coexistence des trois cultures a aussi connu hiérarchies, violences et expulsions.",
          method: "Associez chaque verbe de changement à un exemple historique mémorisé : « Córdoba se convirtió en la capital de un califato », « el castellano llegó a ser una lengua de cultura ». Une frise en espagnol (218 a. C., 711, 929, 1085, 1492, 1609) vous servira aussi de plan pour l'oral.",
        },
      ],
    },
    {
      id: 'evaluations',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'evaluacion-escrita',
          title: 'Compréhension et expression écrites : méthode',
          minutes: 35,
          objectives: [
            "Identifier les attentes de l'évaluation des langues vivantes en fin de cycle terminal (niveaux B1 et B2).",
            "Rendre compte d'un document écrit en espagnol, en français ou en espagnol, de manière fidèle et structurée.",
            "Rédiger une expression écrite argumentée et organisée par des connecteurs.",
            "Relire sa copie à l'aide d'une grille des erreurs les plus fréquentes.",
          ],
          course: [
            {
              heading: "Ce qui est évalué en langues vivantes",
              paragraphs: [
                "Au baccalauréat général, les langues vivantes A et B relèvent du contrôle continu : ce sont vos moyennes annuelles de Première et de Terminale qui comptent, avec un coefficient 6 pour chaque langue. En Terminale, votre lycée organise une évaluation qui porte sur les activités langagières (compréhension de l'écrit et de l'oral, expression écrite et orale) et une attestation indique le niveau atteint selon le Cadre européen commun de référence pour les langues (CECRL). Les modalités précises (durée, documents, longueur des productions) sont fixées par les textes officiels et rappelées par votre professeur. Sur Dojoburo, le contrôle de fin de Terminale propose une épreuve d'une heure : des questions sur tout le programme, puis deux exercices corrigés.",
                "Le niveau visé en fin de cycle terminal est B1 pour la langue vivante B et B2 pour la langue vivante A. Au niveau B1, vous comprenez les points essentiels d'un texte clair sur un sujet familier, vous racontez un événement et vous exposez brièvement vos raisons ou vos opinions. Au niveau B2, vous comprenez l'essentiel de textes plus complexes et vous défendez un point de vue en présentant avantages et inconvénients. Rendre compte en français d'un document espagnol relève de la médiation : il s'agit de transmettre fidèlement un contenu d'une langue à l'autre.",
              ],
              box: { label: "Repère", text: "LVB : niveau B1 visé ; LVA : niveau B2. Activités évaluées : compréhension de l'écrit et de l'oral, expression écrite et orale, et médiation (rendre compte d'un document). Contrôle continu : coefficient 6 par langue vivante." },
            },
            {
              heading: "Comprendre un document écrit",
              paragraphs: [
                "Avant de lire, exploitez le paratexte : titre, chapeau, source, date, auteur, nature du document (article de presse, extrait de roman, tribune, entretien). Formulez des hypothèses. Lisez une première fois pour le sens global en répondant aux questions ¿quién?, ¿qué?, ¿dónde?, ¿cuándo?, ¿por qué?, ¿cómo?, sans vous arrêter aux mots inconnus. Relisez ensuite en surlignant les idées principales et les connecteurs (pero, sin embargo, además, por eso), qui montrent la structure du texte.",
                "Pour un mot inconnu, servez-vous du contexte, des mots transparents et des familles de mots : -ción correspond à -tion (la educación), -dad à -té (la libertad), -mente à -ment (rápidamente). Méfiez-vous des faux amis : « embarazada » (enceinte), « constipado » (enrhumé), « el éxito » (le succès), « largo » (long), « contestar » (répondre), « quitar » (enlever), « el suceso » (l'événement, le fait divers), « la carta » (la lettre), « el vaso » (le verre), « salir » (sortir).",
              ],
              box: { label: "Faux amis", text: "embarazada : enceinte · constipado : enrhumé · el éxito : le succès · largo : long · contestar : répondre · quitar : enlever · el suceso : le fait divers · la carta : la lettre · el vaso : le verre · discutir : se disputer, débattre" },
            },
            {
              heading: "Rendre compte : présenter, reformuler, dégager l'intention",
              paragraphs: [
                "Un compte rendu, en français ou en espagnol selon la consigne, doit être fidèle, organisé et reformulé. Présentez d'abord le document (nature, source, date, thème), puis restituez les idées principales dans un ordre logique, enfin dégagez l'intention de l'auteur (informer, dénoncer, convaincre, émouvoir). Ne recopiez pas de phrases entières, ne suivez pas le texte ligne à ligne, et n'ajoutez pas votre avis si la consigne ne le demande pas.",
                "En espagnol, quelques formules structurent le compte rendu : « Se trata de un artículo publicado en... el... », « El texto trata de » ou « aborda » (traite de), « El autor denuncia, critica, defiende, pone de relieve (met en relief)... », « En primer lugar..., luego..., por último... », « En definitiva, el autor quiere mostrar que... ».",
              ],
              box: { label: "Méthode", text: "1) Présenter : nature, source, date, thème. 2) Restituer les idées principales dans un ordre logique, en reformulant. 3) Dégager l'intention de l'auteur. Pas de copie de phrases, pas d'avis personnel non demandé." },
            },
            {
              heading: "Rédiger une expression écrite argumentée",
              paragraphs: [
                "Lisez le sujet deux fois et repérez la forme demandée : « artículo », « carta », « correo electrónico », « entrada de blog », « discurso », « diálogo », « ensayo ». Chaque forme a ses codes. Une lettre commence par le lieu et la date (« Lyon, 12 de octubre de 2026 ») et une formule d'appel suivie de deux-points : « Estimado señor: » (formel), « Querida Ana: » (familier) ; elle se termine par « Atentamente » (formel), « Un saludo » ou « Un abrazo » (familier). Un article a un titre ; un discours s'adresse à un public. Au brouillon, notez vos idées, choisissez un plan et prévoyez un exemple précis pour chaque argument, de préférence tiré des axes étudiés.",
                "Rédigez une introduction qui pose la question, deux ou trois paragraphes qui développent chacun une idée, et une conclusion qui répond clairement. Les connecteurs font la différence : pour commencer, « En primer lugar », « Para empezar » ; pour ajouter, « Además », « Asimismo » ; pour opposer, « Sin embargo », « No obstante », « En cambio » ; pour la conséquence, « Por eso », « Por lo tanto », « Así que » ; pour illustrer, « Por ejemplo », « Es decir » ; pour conclure, « En conclusión », « En definitiva », « Para concluir ».",
              ],
              box: { label: "À retenir", text: "Une idée par paragraphe, un exemple par idée, un connecteur à chaque transition. Respectez la forme et la longueur demandées : trop court, la copie ne montre pas assez ; trop long, elle multiplie les erreurs." },
            },
            {
              heading: "Relire avec la grille des erreurs fréquentes",
              paragraphs: [
                "Les erreurs les plus fréquentes des francophones sont connues : « ser » et « estar » (« está cansado », « es de Madrid ») ; l'accord de « gustar » (« me gustan las series ») ; le « a » devant un complément d'objet qui désigne une personne (« Veo a mi profesora ») ; « muy » devant un adjectif ou un adverbe, « mucho » avec un nom ou un verbe (« muy interesante », « mucha gente », « me gusta mucho ») ; l'apocope devant un nom masculin singulier (« un buen libro », « el primer día », « algún problema ») et « gran » devant tout nom singulier (« una gran ciudad »).",
                "Vérifiez aussi le genre des noms qui diffère du français (« el problema », « el tema », « el sistema », « la leche », « la sangre », « la nariz », « el dolor », « el color »), le subjonctif après « cuando » pour un futur (« Cuando sea mayor ») et après « para que », l'accent écrit sur les interrogatifs (qué, cómo, dónde, por qué) et sur les mots qui en demandent un, et « hace » pour « il y a » dans le temps (« hace dos años »).",
              ],
              box: { label: "Méthode", text: "Trois relectures, trois objectifs : 1) le sens et la structure ; 2) les verbes (temps, modes, accords, ser ou estar) ; 3) les accents, les apocopes, le « a » devant une personne, muy ou mucho, le genre des noms." },
            },
          ],
          keyPoints: [
            "Contrôle continu, coefficient 6 par langue ; niveaux visés : B1 en LVB, B2 en LVA.",
            "Comprendre : paratexte, hypothèses, lecture globale (¿quién?, ¿qué?...), lecture détaillée, faux amis.",
            "Compte rendu : présenter, reformuler les idées dans un ordre logique, dégager l'intention, sans recopier.",
            "Expression : respecter la forme (carta : « Estimado señor: », « Atentamente »), un plan, des exemples, des connecteurs.",
            "Connecteurs : además, sin embargo, en cambio, por eso, por lo tanto, por ejemplo, en definitiva.",
            "Relire en trois passages : sens, verbes, puis accents, apocopes, « a » personnel, muy ou mucho, genre.",
          ],
          example: {
            statement: "Lisez ce court article (texte écrit pour l'exercice), puis rédigez en français un compte rendu de 60 à 80 mots. « En los últimos años, vecinos de varias ciudades españolas han salido a la calle para protestar contra el turismo masivo. Denuncian que los pisos turísticos hacen subir los alquileres y que muchos jóvenes ya no pueden vivir en su barrio. Los comerciantes, en cambio, recuerdan que el turismo crea empleo y da vida al centro. Algunos ayuntamientos han empezado a limitar las nuevas licencias de pisos turísticos. El debate sigue abierto: ¿cómo acoger a los visitantes sin expulsar a los habitantes? »",
            solution: [
              "Identifier la nature et le thème : un article de presse sur les protestations contre le tourisme de masse dans des villes espagnoles.",
              "Repérer les idées dans l'ordre : les protestations des habitants ; leur argument (les logements touristiques font monter les loyers et chassent les jeunes) ; l'argument contraire des commerçants (emploi, vie du centre), signalé par « en cambio » ; la réaction de certaines mairies ; une question ouverte.",
              "Dégager l'intention : le journaliste expose un débat de façon équilibrée et termine par une question, sans trancher.",
              "Rédiger en reformulant, sans traduire mot à mot, et compter les mots.",
              "Réponse : « Cet article de presse évoque la contestation du tourisme de masse dans plusieurs villes espagnoles. Les habitants reprochent aux logements touristiques de faire grimper les loyers, au point que de nombreux jeunes ne peuvent plus habiter leur quartier. Les commerçants soulignent au contraire que le tourisme crée des emplois et anime les centres-villes. Certaines mairies commencent à restreindre les nouveaux logements touristiques. Le journaliste présente un débat équilibré : comment accueillir les visiteurs sans chasser les habitants ? » (environ 75 mots)",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Traduisez en français ces phrases qui contiennent des faux amis : a) Mi hermana está embarazada. b) Estoy constipado desde el lunes. c) La película tuvo mucho éxito. d) El viaje fue muy largo. e) No contestó a mi carta. f) Quitó el vaso de la mesa.",
              hint: "Ne vous fiez pas à la ressemblance avec le français : relisez l'encadré « Faux amis » et vérifiez que votre traduction a un sens dans la phrase.",
              solution: [
                "a) « embarazada » signifie enceinte : « Ma sœur est enceinte. »",
                "b) « constipado » signifie enrhumé : « Je suis enrhumé depuis lundi. »",
                "c) « el éxito » signifie le succès : « Le film a eu beaucoup de succès. »",
                "d) « largo » signifie long : « Le voyage a été très long. »",
                "e) « contestar » signifie répondre et « la carta » la lettre : « Il n'a pas répondu à ma lettre. »",
                "f) « quitar » signifie enlever et « el vaso » le verre : « Il a enlevé le verre de la table. »",
              ],
            },
            {
              level: 2,
              statement: "Ce paragraphe d'élève contient six erreurs. Retrouvez-les, corrigez-les et justifiez chaque correction : « Ayer, mi amigo y yo hemos ido a un concierto. Era un grande concierto y me gustó mucho las canciones. El cantante era muy nervioso al principio, pero luego cantó muy bien. Al salir, vimos mi profesora de español. El problema es que la sala estaba mucho llena. »",
              hint: "Passez la grille des erreurs fréquentes : temps du passé avec « ayer », apocope, accord de « gustar », ser ou estar, « a » devant une personne, muy ou mucho. Une expression du texte qui ressemble à une erreur est correcte : laquelle ?",
              solution: [
                "1) « hemos ido » → « fuimos » : avec « ayer », action passée achevée dans un temps révolu, l'espagnol d'Espagne emploie le passé simple.",
                "2) « un grande concierto » → « un gran concierto » : « grande » devient « gran » devant un nom singulier.",
                "3) « me gustó mucho las canciones » → « me gustaron mucho las canciones » : le sujet de « gustar » est « las canciones », pluriel.",
                "4) « era muy nervioso » → « estaba muy nervioso » : il s'agit d'un état passager (au début du concert), donc « estar ».",
                "5) « vimos mi profesora » → « vimos a mi profesora » : « a » devant un complément d'objet qui désigne une personne.",
                "6) « mucho llena » → « muy llena » : devant un adjectif, on emploie « muy ».",
                "Piège évité : « El problema » est correct, car « problema » est masculin en espagnol.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Lisez ce document (texte écrit pour l'exercice ; personnages et données fictifs), puis répondez. « Hace dos años, Clara y Javier, de treinta años, dejaron su piso de Madrid para instalarse en un pueblo de Soria de ciento veinte habitantes. Ella es diseñadora gráfica y trabaja a distancia; él ha abierto una pequeña panadería. “Aquí tenemos tiempo, silencio y una casa con jardín por lo que pagábamos por un estudio en la ciudad”, explica Clara. Pero no todo es fácil: la conexión a internet falla a menudo, el médico solo pasa dos veces por semana y la escuela más cercana está a veinte kilómetros. Los vecinos mayores están encantados: hacía años que no nacía un niño en el pueblo, y la pareja espera su primer hijo. Para el alcalde, el teletrabajo puede ser una oportunidad para la España vaciada, aunque advierte que sin servicios públicos los recién llegados no se quedarán. » a) Qui sont Clara et Javier et qu'ont-ils fait ? b) Quels avantages et quelles difficultés de leur nouvelle vie le texte présente-t-il ? c) Pourquoi les habitants âgés sont-ils heureux ? d) Quelle est la position du maire ? e) Expression (130 à 160 mots, en espagnol) : « ¿Puede el teletrabajo salvar los pueblos de la España vaciada? »",
              hint: "Pour b), séparez les deux listes grâce à « Pero no todo es fácil ». Pour d), le connecteur « aunque » introduit une réserve. Pour e), faites un plan en trois temps (avantages, conditions, réponse) et relisez avec la grille.",
              solution: [
                "a) Un couple de trentenaires qui a quitté son appartement madrilène il y a deux ans pour s'installer dans un village de 120 habitants de la province de Soria ; elle est graphiste en télétravail, il a ouvert une boulangerie.",
                "b) Avantages : du temps, du calme, une maison avec jardin pour le prix d'un studio en ville. Difficultés : une connexion internet peu fiable, un médecin présent deux fois par semaine seulement, une école à vingt kilomètres.",
                "c) Parce qu'aucun enfant n'était né au village depuis des années et que le couple attend son premier enfant : c'est un signe de renouveau.",
                "d) Il voit dans le télétravail une chance pour l'Espagne rurale dépeuplée, mais il prévient que, sans services publics, les nouveaux habitants ne resteront pas.",
                "e) Exemple de production : « Muchos pueblos de España pierden habitantes desde hace décadas. ¿Puede el teletrabajo cambiar esta situación? En primer lugar, es cierto que ofrece una oportunidad nueva: hoy un diseñador o un programador puede trabajar desde cualquier lugar con una buena conexión. Además, en el campo la vivienda es más barata y la vida más tranquila, como muestra el ejemplo de Clara y Javier. Sin embargo, no creo que el teletrabajo sea suficiente. Para que una familia se quede, es necesario que haya médicos, escuelas y transporte. Si la conexión falla o si la escuela está lejos, los recién llegados se irán. Por eso, las administraciones tienen que invertir en servicios públicos. En definitiva, el teletrabajo puede ayudar a salvar los pueblos, pero solo si va acompañado de una verdadera política para el medio rural. »",
                "Vérification : environ 135 mots ; plan clair (avantages, limites, conditions, conclusion) ; connecteurs variés ; subjonctifs justifiés (no creo que sea, para que se quede, es necesario que haya) ; un exemple tiré du document.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre les étapes de travail d'une épreuve de compréhension et d'expression écrites.",
            items: [
              "Lire le paratexte et formuler des hypothèses",
              "Faire une première lecture globale (¿quién?, ¿qué?, ¿dónde?, ¿cuándo?)",
              "Relire en détail en surlignant les idées et les connecteurs",
              "Répondre aux questions ou rédiger le compte rendu",
              "Analyser le sujet d'expression et faire un plan au brouillon",
              "Rédiger l'expression écrite avec des connecteurs",
              "Relire la copie avec la grille des erreurs fréquentes",
            ],
          },
          quiz: [
            { q: "Que signifie « estar embarazada » ?", options: ["être embarrassée", "être gênée par la chaleur", "être enceinte", "être en retard"], answer: 2, why: "« Embarazada » est un faux ami : il signifie enceinte. Être embarrassé se dit « estar avergonzado » ou « sentirse incómodo »." },
            { q: "Quel niveau du CECRL est visé en fin de Terminale pour la langue vivante B ?", options: ["A2", "B2", "C1", "B1"], answer: 3, why: "Le niveau visé est B1 pour la LVB et B2 pour la LVA." },
            { q: "Quelle formule convient pour commencer une lettre formelle en espagnol ?", options: ["Estimado señor:", "¡Hola, compañero!", "Querido amigo mío,", "Un abrazo fuerte:"], answer: 0, why: "« Estimado señor: » est la formule d'appel formelle, suivie de deux-points ; « Un abrazo » sert à conclure une lettre familière." },
            { q: "Quelle phrase est correcte ?", options: ["Es un grande problema.", "Es una gran problema.", "Es un gran problema.", "Es un problema muy grande mucho."], answer: 2, why: "« Problema » est masculin, et « grande » devient « gran » devant un nom singulier." },
            { q: "Dans un compte rendu, il faut avant tout :", options: ["donner son avis dès la première phrase", "reformuler les idées essentielles", "recopier les phrases clés du texte", "traduire le texte ligne à ligne"], answer: 1, why: "Le compte rendu restitue fidèlement les idées principales avec ses propres mots, sans copier ni traduire mot à mot." },
          ],
          trap: "Se laisser piéger par les faux amis (« embarazada », « constipado », « éxito ») et recopier des phrases du texte au lieu de reformuler. Autre erreur fréquente : employer « muy » avec un verbe ou un nom (« me gusta muy ») au lieu de « mucho » (« me gusta mucho », « mucha gente »).",
          method: "Gardez dix minutes pour trois relectures ciblées : 1) le sens et la structure ; 2) les verbes (temps, modes, accords, ser ou estar) ; 3) les accents, les apocopes, le « a » devant un complément de personne, muy ou mucho et le genre des noms.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'evaluacion-oral',
          title: 'Expression orale : présenter et défendre un point de vue',
          minutes: 30,
          objectives: [
            "Présenter un document ou un axe du programme en prise de parole en continu.",
            "Défendre un point de vue en espagnol en l'organisant et en l'illustrant d'exemples précis.",
            "Interagir avec l'examinateur : faire répéter, reformuler, nuancer, gagner du temps.",
            "Améliorer sa prononciation : accent tonique, jota, r et rr, voyelles.",
          ],
          course: [
            {
              heading: "L'expression orale : ce qui est attendu",
              paragraphs: [
                "L'expression orale fait partie des activités évaluées en fin de cycle terminal. Elle comprend en général un temps de préparation, une prise de parole en continu, où vous présentez un document ou un axe du programme étudié en classe, puis un temps d'interaction avec l'examinateur, qui vous pose des questions et vous fait préciser votre propos. La durée de chaque phase est fixée par les textes officiels et rappelée par votre professeur.",
                "Au niveau B1, attendu en LVB, vous devez vous exprimer de façon simple et cohérente, raconter, décrire, donner votre avis et le justifier brièvement. Au niveau B2, vous argumentez de manière plus développée et nuancée. Dans les deux cas, l'examinateur apprécie une présentation organisée, des exemples précis, une langue correcte, une prononciation intelligible et la capacité à réagir. Une présentation récitée par cœur se repère tout de suite et ne permet pas de montrer cette capacité.",
              ],
              box: { label: "Repère", text: "Prise de parole en continu (présenter, argumenter), puis interaction (répondre, réagir, nuancer). Critères : organisation, argumentation, richesse et correction de la langue, prononciation, réactivité. B1 en LVB, B2 en LVA." },
            },
            {
              heading: "Construire sa présentation",
              paragraphs: [
                "L'introduction présente le document ou le thème et l'axe : « Voy a presentar un documento que trata de... », « Este tema se relaciona con el eje Ciudadanía y mundos virtuales ». Elle pose ensuite une problématique (« ¿Hasta qué punto...? », « ¿En qué medida...? ») et annonce le plan : « En primer lugar..., luego..., para terminar... ». Le développement comprend deux ou trois parties, chacune appuyée sur un exemple précis : un document étudié, un fait daté, une œuvre. La conclusion répond à la problématique et ouvre : « Para concluir, diría que... », « En definitiva... ».",
                "Au brouillon, n'écrivez pas de phrases complètes, sauf l'accroche et la conclusion : notez des mots-clés, vos exemples et vos connecteurs. Pour décrire une image, structurez l'espace : « en primer plano », « al fondo », « a la izquierda », « en el centro ». Pour présenter un texte : « Se trata de un artículo publicado en... », « El autor denuncia... ».",
              ],
              box: { label: "Méthode", text: "Accroche, thème et axe, problématique (¿Hasta qué punto...?), annonce du plan, partie 1 avec exemple, partie 2 avec exemple, conclusion qui répond et ouvre. Des mots-clés au brouillon, jamais un texte à lire." },
            },
            {
              heading: "Défendre un point de vue",
              paragraphs: [
                "Pour donner votre avis : « En mi opinión », « Desde mi punto de vista », « A mi juicio », « Creo que » + indicatif, « No creo que » + subjonctif. Pour marquer l'accord ou le désaccord : « Estoy de acuerdo con... », « No estoy de acuerdo con... », « Comparto la opinión de... ». Pour nuancer : « Es cierto que..., pero... », « Por un lado..., por otro (lado)... », « Depende de... », « Hasta cierto punto ». Pour illustrer : « Por ejemplo », « Es el caso de... », « Lo vemos con... ».",
                "Un point de vue convainc quand il s'appuie sur des connaissances précises : le mouvement 15-M (2011), Ni Una Menos (2015), l'Inca Garcilaso, l'école des traducteurs de Tolède... Réutilisez les exemples de vos cours d'espagnol de l'année : ils montrent à l'examinateur que vous maîtrisez les axes du programme. Variez les structures : subjonctif après une opinion niée, « aunque », hypothèses avec « si ».",
              ],
            },
            {
              heading: "Interagir avec l'examinateur",
              paragraphs: [
                "Adressez-vous à l'examinateur avec « usted ». Si vous n'avez pas compris : « ¿Podría repetir la pregunta, por favor? », « ¿Qué quiere decir con...? », « Si he entendido bien, usted me pregunta si... ». Pour gagner quelques secondes de réflexion : « Es una pregunta interesante », « Déjeme pensar un momento », « A ver... », « Bueno, pues... ». Pour vous corriger : « Perdón, quería decir... ». Si un mot vous manque, contournez-le par une périphrase : « Es una cosa que sirve para... », « Es una persona que... ».",
                "Les questions de l'examinateur ne sont pas des pièges : elles vous donnent l'occasion de développer, de préciser un exemple ou d'exprimer un avis personnel. Répondez par des phrases complètes et justifiées (« Sí, creo que sí, porque... ») plutôt que par « sí » ou « no ». Ne restez jamais silencieux : demandez une précision, puis répondez. L'autocorrection est un signe de maîtrise.",
              ],
              box: { label: "À retenir", text: "Faire répéter : ¿Podría repetir la pregunta, por favor? · Gagner du temps : Déjeme pensar un momento · Nuancer : Es cierto que..., pero... · Se corriger : Perdón, quería decir... · Contourner un mot : Es una cosa que sirve para..." },
            },
            {
              heading: "La voix : prononciation et accent tonique",
              paragraphs: [
                "Chaque mot espagnol a une syllabe accentuée, et l'accent écrit (la tilde) suit des règles. Un mot terminé par une voyelle, -n ou -s est accentué naturellement sur l'avant-dernière syllabe (« joven », « examen », « casa ») ; sinon, sur la dernière (« ciudad », « hablar »). La tilde marque les exceptions : « canción », « después » (accent sur la dernière syllabe malgré -n ou -s), « árbol », « fácil » (avant-dernière syllabe malgré la consonne finale), et tous les mots accentués sur l'antépénultième : « música », « jóvenes », « exámenes ».",
                "La jota (j, et g devant e ou i) se prononce au fond de la gorge : « jamón », « gente ». Le r simple est un battement léger (« pero », « caro »), le rr et le r initial sont roulés (« perro », « carro », « Roma »). Le b et le v se prononcent de la même façon, le h est muet, et le u se dit « ou ». Les voyelles sont toujours prononcées clairement, sans nasalisation : « un » se dit « oun ». Le z et le c devant e ou i se prononcent comme le th anglais dans la plupart de l'Espagne, et comme un s en Amérique latine (le « seseo ») : les deux sont corrects.",
              ],
              box: { label: "Règle", text: "Fin en voyelle, -n, -s : accent naturel sur l'avant-dernière syllabe (joven) ; autre fin : sur la dernière (ciudad). Tilde pour les exceptions (canción, árbol) et toujours sur l'antépénultième (música). Pero / perro, caro / carro : r simple ou roulé." },
            },
          ],
          keyPoints: [
            "Prise de parole en continu puis interaction ; B1 en LVB, B2 en LVA ; ne jamais réciter.",
            "Plan : accroche, axe, problématique (¿Hasta qué punto...?), deux ou trois parties avec exemples, conclusion.",
            "Avis : en mi opinión, desde mi punto de vista, a mi juicio ; nuance : es cierto que..., pero...",
            "Interaction au « usted » : ¿Podría repetir la pregunta? ; déjeme pensar un momento ; perdón, quería decir...",
            "Accent : fin en voyelle, -n, -s → avant-dernière syllabe ; tilde pour les exceptions et les esdrújulas (música).",
            "Sons : jota (jamón, gente), r simple ou roulé (pero / perro), b = v, h muet, voyelles nettes.",
          ],
          example: {
            statement: "Vous préparez une présentation de deux à trois minutes sur la question « ¿Las redes sociales favorecen el compromiso de los jóvenes? » (axe Ciudadanía y mundos virtuales). Rédigez en espagnol votre introduction complète, puis donnez en mots-clés le plan de votre développement et votre conclusion.",
            solution: [
              "Accroche : partir d'un fait précis et daté : « En 2015, en Argentina, una simple etiqueta, #NiUnaMenos, llevó a miles de personas a la calle ».",
              "Thème, axe et problématique : « Este ejemplo se relaciona con el eje Ciudadanía y mundos virtuales. Me pregunto hasta qué punto las redes sociales favorecen el compromiso de los jóvenes ».",
              "Annonce du plan : « En primer lugar, veremos que las redes facilitan la movilización; luego, analizaremos sus límites ».",
              "Plan en mots-clés : I. Facilitar : convocar rápido, gratis, visibilidad ; ejemplos : Ni Una Menos (2015), 15-M (2011). II. Límites : activismo de sofá, bulos, acoso ; un clic no basta.",
              "Conclusion rédigée : « Para concluir, creo que las redes son una puerta de entrada al compromiso, pero no lo sustituyen: el cambio real se construye fuera de la pantalla ».",
              "Réponse : introduction en trois phrases (accroche, problématique, plan), plan en mots-clés, conclusion qui répond à la question en la nuançant.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Placez l'accent écrit quand il est nécessaire et justifiez : cancion, arbol, musica, joven, jovenes, examen, examenes, facil, ciudad, despues.",
              hint: "Prononcez chaque mot à voix haute pour trouver la syllabe accentuée, puis regardez la dernière lettre : voyelle, -n ou -s, ou autre consonne. Un mot accentué sur l'antépénultième porte toujours une tilde.",
              solution: [
                "« canción » : accent sur la dernière syllabe alors que le mot finit par -n → tilde.",
                "« árbol » : accent sur l'avant-dernière syllabe alors que le mot finit par -l → tilde ; de même « fácil ».",
                "« música », « jóvenes », « exámenes » : accent sur l'antépénultième → toujours une tilde.",
                "« joven » et « examen » : accent sur l'avant-dernière syllabe et fin en -n → règle normale, pas de tilde (mais leurs pluriels en prennent une, car l'accent recule d'un rang).",
                "« ciudad » : accent sur la dernière syllabe et fin en -d → règle normale, pas de tilde.",
                "« después » : accent sur la dernière syllabe alors que le mot finit par -s → tilde.",
                "Réponses : canción, árbol, música, joven, jóvenes, examen, exámenes, fácil, ciudad, después.",
              ],
            },
            {
              level: 2,
              statement: "Que dites-vous en espagnol, en vous adressant à l'examinateur avec « usted », dans chacune de ces situations ? a) Vous n'avez pas entendu la question. b) Vous ne comprenez pas le mot « brecha » qu'il vient d'employer. c) Vous avez besoin de quelques secondes pour réfléchir. d) Il affirme : « Las redes sociales solo sirven para perder el tiempo », et vous êtes en partie d'accord. e) Vous venez de dire « Ayer he ido al museo » et vous voulez vous corriger.",
              hint: "Utilisez les formules de l'encadré « À retenir », conjuguez à la forme « usted » (podría, quiere decir, déjeme) et, pour la nuance, la structure « Es cierto que..., pero... ».",
              solution: [
                "a) « Perdone, ¿podría repetir la pregunta, por favor? »",
                "b) « ¿Qué quiere decir con “brecha”? No conozco esta palabra. »",
                "c) « Es una pregunta interesante... Déjeme pensar un momento. »",
                "d) « Es cierto que a veces perdemos mucho tiempo en las redes, pero no estoy totalmente de acuerdo: también sirven para informarse y para movilizarse, como mostró el movimiento Ni Una Menos. »",
                "e) « Perdón, quería decir: ayer fui al museo. » (avec « ayer », l'espagnol d'Espagne emploie le passé simple).",
              ],
            },
            {
              level: 3,
              statement: "Défi. Préparez une présentation de trois minutes sur le sujet : « ¿Es el mestizaje una riqueza para el mundo hispánico? » (axe 6). a) Rédigez le plan en mots-clés. b) Rédigez la présentation complète, telle que vous pourriez la dire (180 à 220 mots), avec au moins trois exemples précis tirés des leçons de l'axe 6. c) Imaginez deux questions de l'examinateur et vos réponses.",
              hint: "Choisissez des exemples dans des domaines différents (histoire, musique, langue, cuisine). Annoncez votre plan, nuancez avec « Es cierto que..., pero... », et préparez des questions qui vous font préciser un exemple ou réagir à une objection.",
              solution: [
                "a) Plan : Accroche : el 12 de octubre, una fecha con varios nombres. Problemática : ¿hasta qué punto el mestizaje es una riqueza? I. Una historia dolorosa : conquista, epidemias, trata, sociedad de castas. II. Una riqueza viva : el tango, la cumbia ; palabras árabes y náhuatl ; el ceviche, el mole. Conclusión : una herida y una riqueza.",
                "b) Exemple de présentation : « El 12 de octubre se llama Fiesta Nacional en España, pero Día de la Resistencia Indígena en Venezuela: esta diferencia muestra que el mestizaje es un tema sensible. Me pregunto hasta qué punto es una riqueza para el mundo hispánico. En primer lugar, hay que recordar que nació de una historia violenta. Después de 1492, muchos indígenas murieron por las guerras y las epidemias, y millones de africanos fueron llevados a América como esclavos. La sociedad colonial era muy jerárquica, como muestran los cuadros de castas. Sin embargo, de estos encuentros nacieron culturas nuevas. El tango, por ejemplo, mezcla ritmos africanos, la habanera y las canciones de los inmigrantes europeos. La lengua española también es mestiza: decimos “almohada”, que viene del árabe, y “chocolate”, que viene del náhuatl. Y en la cocina peruana, el ceviche une productos andinos y limones llegados con los españoles. Es cierto que el mestizaje no borra las injusticias del pasado, pero creo que hoy es la mayor riqueza del mundo hispánico. Para concluir, diría que es a la vez una herida y una fuerza: hay que recordar la primera para valorar la segunda. »",
                "c) Question 1 : « ¿Por qué dice que el mestizaje es una herida? » Réponse : « Porque nació de la conquista y de la esclavitud: no fue un encuentro entre iguales. Por eso algunos países han cambiado el nombre del 12 de octubre. »",
                "Question 2 : « ¿Existe también el mestizaje en España? » Réponse : « Sí, claro. Durante casi ocho siglos, en Al-Andalus, convivieron cristianos, musulmanes y judíos, y el español conserva miles de palabras de origen árabe, como “aceite” o “alcalde”. »",
                "Vérification : environ 185 mots pour la présentation ; plan annoncé ; cinq exemples précis (12 de octubre, cuadros de castas, tango, palabras, ceviche) ; nuance avec « Es cierto que..., pero... » ; réponses complètes et justifiées.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque formule à sa fonction dans l'échange oral.",
            pairs: [
              { left: "¿Podría repetir la pregunta, por favor?", right: "faire répéter" },
              { left: "Déjeme pensar un momento.", right: "gagner du temps" },
              { left: "Es cierto que..., pero...", right: "concéder puis nuancer" },
              { left: "Desde mi punto de vista...", right: "donner son avis" },
              { left: "Para concluir, diría que...", right: "conclure" },
              { left: "Perdón, quería decir...", right: "se corriger" },
            ],
          },
          quiz: [
            { q: "Quel mot porte un accent écrit ?", options: ["joven", "examen", "árbol", "ciudad"], answer: 2, why: "« Árbol » est accentué sur l'avant-dernière syllabe mais se termine par -l : il prend une tilde. Les trois autres suivent la règle normale." },
            { q: "Comment demander poliment à l'examinateur de répéter ?", options: ["¿Podría repetir, por favor?", "¡Repite otra vez la pregunta!", "¿Qué estás diciendo ahora tú?", "No entiendo nada de lo que dice."], answer: 0, why: "On vouvoie l'examinateur (« usted ») et le conditionnel « podría » rend la demande polie." },
            { q: "Dans « perro », le double r se prononce :", options: ["comme le r simple de « pero »", "roulé, en vibrations", "comme un r français guttural", "comme la jota de « jamón »"], answer: 1, why: "Le rr est roulé, avec plusieurs battements de la langue ; le r simple de « pero » n'en a qu'un." },
            { q: "Quel connecteur sert à conclure ?", options: ["Sin embargo", "Por un lado", "En definitiva", "Por consiguiente"], answer: 2, why: "« En definitiva » signifie en définitive ; « sin embargo » oppose, « por un lado » ouvre une alternative, « por consiguiente » exprime une conséquence." },
            { q: "Pendant l'interaction, que faire si un mot vous manque ?", options: ["vous taire et attendre la question suivante", "le dire en français sans rien ajouter", "abandonner la réponse et changer de sujet", "le contourner par une périphrase"], answer: 3, why: "Une périphrase (« Es una cosa que sirve para... ») permet de continuer à communiquer : c'est une compétence évaluée." },
          ],
          trap: "Lire ou réciter un texte entièrement rédigé : l'examinateur l'entend immédiatement et la présentation perd en naturel. Autre erreur : rester muet face à une question au lieu de demander une reformulation ou de gagner du temps avec une formule.",
          method: "Au brouillon, n'écrivez que des mots-clés, vos exemples et vos connecteurs, avec l'accroche et la conclusion rédigées. Entraînez-vous à voix haute en vous enregistrant et en vous chronométrant, puis réécoutez-vous en vérifiant l'accent tonique des mots longs et la différence entre r et rr.",
        },
      ],
    },
  ],
}
