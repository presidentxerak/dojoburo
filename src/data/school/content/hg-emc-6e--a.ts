import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hg-emc-6e',
  chapters: [
    {
      id: 'debuts-humanite',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'reperes-temps',
          title: 'Se repérer dans le temps : frise, siècles et millénaires',
          minutes: 25,
          objectives: [
            "Dater un événement avant ou après Jésus-Christ et le placer sur une frise chronologique.",
            "Identifier le siècle et le millénaire auxquels appartient une date.",
            "Calculer une durée entre deux dates.",
            "Ordonner les grandes périodes de l'histoire, de la Préhistoire à l'époque contemporaine.",
          ],
          course: [
            {
              heading: "Dater un événement : avant et après Jésus-Christ",
              paragraphs: [
                "Pour dater les événements, il faut un point de départ commun. En France, comme dans une grande partie du monde, on compte les années à partir de la naissance de Jésus-Christ. Ce calendrier a été mis au point au VIe siècle par un moine, Denys le Petit, à partir de la date qu'il pensait être celle de cette naissance. On parle aussi d'années « avant notre ère » et « de notre ère ».",
                "Les années après Jésus-Christ (apr. J.-C.) se comptent normalement : 1789, 2026. Les années avant Jésus-Christ (av. J.-C.) se comptent à rebours, en remontant le temps : l'an 500 av. J.-C. est plus ancien que l'an 100 av. J.-C. Avant J.-C., plus le nombre est grand, plus l'événement est éloigné de nous.",
                "Attention : l'année 0 n'existe pas. On passe directement de l'an 1 av. J.-C. à l'an 1 apr. J.-C. D'autres calendriers existent : le calendrier musulman commence en 622 de notre ère, année de l'Hégire, et le calendrier juif a lui aussi son propre point de départ.",
              ],
              box: { label: "Règle", text: "Après J.-C., les années augmentent quand on avance dans le temps. Avant J.-C., elles diminuent : 3000 av. J.-C. est plus ancien que 1000 av. J.-C. L'année 0 n'existe pas." },
            },
            {
              heading: "Siècles et millénaires",
              paragraphs: [
                "Un siècle est une période de 100 ans. On l'écrit en chiffres romains : le Ier siècle va de l'an 1 à l'an 100, le IIe siècle de 101 à 200, et nous vivons au XXIe siècle, qui va de 2001 à 2100. Pour trouver le siècle d'une date, on enlève les deux derniers chiffres et on ajoute 1 : 1515 donne 15 + 1 = 16, donc le XVIe siècle. Exception : une année qui se termine par 00 est la dernière de son siècle, donc 1900 appartient au XIXe siècle.",
                "La règle est la même avant J.-C., mais en comptant à rebours. L'année 753 av. J.-C., date légendaire de la fondation de Rome, appartient au VIIIe siècle av. J.-C., qui va de 800 à 701 av. J.-C. L'année 52 av. J.-C., celle de la bataille d'Alésia, appartient au Ier siècle av. J.-C.",
                "Un millénaire est une période de 1 000 ans. Le IIIe millénaire a commencé le 1er janvier 2001. Pour trouver le millénaire, on enlève les trois derniers chiffres et on ajoute 1 : l'année 3300 av. J.-C. appartient au IVe millénaire av. J.-C., qui va de 4000 à 3001 av. J.-C.",
              ],
              box: { label: "Repère", text: "Chiffres romains : I = 1, V = 5, X = 10, L = 50, C = 100, M = 1 000. Un signe placé avant un signe plus grand se retranche : IV = 4, IX = 9, XIV = 14, XIX = 19, XXI = 21." },
            },
            {
              heading: "Calculer une durée",
              paragraphs: [
                "Si les deux dates sont après J.-C., on soustrait la plus petite à la plus grande. De la Révolution française (1789) à 2026, il s'est écoulé 2026 - 1789 = 237 ans.",
                "Si les deux dates sont avant J.-C., on soustrait aussi la plus petite à la plus grande. De l'invention de l'écriture (vers 3300 av. J.-C.) à la construction de la pyramide de Khéops (vers 2560 av. J.-C.), il s'est écoulé environ 3300 - 2560 = 740 ans.",
                "Si une date est avant J.-C. et l'autre après, on additionne les deux nombres. De la bataille d'Alésia (52 av. J.-C.) à la fin de l'Empire romain d'Occident (476 apr. J.-C.), il s'est écoulé 52 + 476 = 528 ans environ. Le résultat est juste à un an près, puisque l'année 0 n'existe pas.",
              ],
              box: { label: "Méthode", text: "Deux dates du même côté de J.-C. : on soustrait. Une date de chaque côté : on additionne. Vérifiez toujours que le résultat est logique en plaçant les deux dates sur une frise." },
            },
            {
              heading: "La frise chronologique et les grandes périodes",
              paragraphs: [
                "Une frise chronologique est une ligne orientée de gauche (le passé) à droite (le présent). Elle a une échelle régulière, par exemple 1 cm pour 100 ans. On y place des dates, qui sont des points, et des périodes, qui sont des bandes de couleur.",
                "Les historiens découpent le passé en grandes périodes. La Préhistoire va de l'apparition des premiers humains à l'invention de l'écriture, vers 3300 av. J.-C. L'Antiquité dure jusqu'à la fin de l'Empire romain d'Occident, en 476. Le Moyen Âge va de 476 à 1492, année de l'arrivée de Christophe Colomb en Amérique. Les Temps modernes vont de 1492 à la Révolution française, en 1789. L'époque contemporaine commence en 1789 et dure jusqu'à aujourd'hui.",
                "Ces limites sont des conventions choisies par les historiens : rien n'a changé du jour au lendemain en 476 ou en 1492. La Préhistoire est de très loin la période la plus longue : elle dure environ 3 millions d'années, contre environ 5 300 ans pour toutes les autres périodes réunies. Pour la représenter, il faut une autre échelle ou une frise coupée.",
              ],
              box: { label: "À retenir", text: "Préhistoire (jusque vers 3300 av. J.-C.), Antiquité (jusqu'en 476), Moyen Âge (476-1492), Temps modernes (1492-1789), époque contemporaine (depuis 1789)." },
            },
          ],
          keyPoints: [
            "On compte les années avant et après la naissance de Jésus-Christ ; l'année 0 n'existe pas.",
            "Avant J.-C., plus le nombre est grand, plus la date est ancienne.",
            "Siècle d'une date : on enlève les deux derniers chiffres et on ajoute 1 (1515 : XVIe siècle), sauf pour les années en 00 (1900 : XIXe siècle).",
            "Un millénaire dure 1 000 ans : nous vivons au IIIe millénaire, commencé en 2001.",
            "Durée : on soustrait si les deux dates sont du même côté de J.-C., on additionne sinon.",
            "Périodes : Préhistoire, Antiquité (jusqu'en 476), Moyen Âge (476-1492), Temps modernes (1492-1789), époque contemporaine.",
          ],
          example: {
            statement: "La bataille d'Alésia a lieu en 52 av. J.-C. et la fin de l'Empire romain d'Occident en 476 apr. J.-C. À quel siècle appartient chaque date ? Combien de temps sépare ces deux événements ?",
            solution: [
              "52 av. J.-C. : on enlève les deux derniers chiffres, il reste 0, et 0 + 1 = 1. C'est le Ier siècle av. J.-C., qui va de 100 à 1 av. J.-C.",
              "476 apr. J.-C. : on enlève les deux derniers chiffres, il reste 4, et 4 + 1 = 5. C'est le Ve siècle, qui va de 401 à 500.",
              "Les deux dates sont de part et d'autre de la naissance de Jésus-Christ : on additionne, 52 + 476 = 528.",
              "Réponse : Alésia appartient au Ier siècle av. J.-C., la fin de l'Empire romain d'Occident au Ve siècle apr. J.-C., et environ 528 ans les séparent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le siècle de chacune de ces dates : a) 1492 ; b) 1900 ; c) 2026 ; d) 476 ; e) 753 av. J.-C.",
              hint: "Enlevez les deux derniers chiffres et ajoutez 1, sauf si l'année se termine par 00.",
              solution: [
                "a) 1492 : 14 + 1 = 15, donc XVe siècle.",
                "b) 1900 se termine par 00 : c'est la dernière année du XIXe siècle.",
                "c) 2026 : 20 + 1 = 21, donc XXIe siècle.",
                "d) 476 : 4 + 1 = 5, donc Ve siècle.",
                "e) 753 av. J.-C. : 7 + 1 = 8, donc VIIIe siècle av. J.-C.",
              ],
            },
            {
              level: 2,
              statement: "Calculez les durées suivantes. a) De la Révolution française (1789) à 2026. b) De la construction de la pyramide de Khéops (vers 2560 av. J.-C.) à la conquête de l'Égypte par Alexandre le Grand (332 av. J.-C.). c) De la fondation légendaire de Rome (753 av. J.-C.) à la fin de l'Empire romain d'Occident (476 apr. J.-C.).",
              hint: "Repérez d'abord de quel côté de la naissance de Jésus-Christ se trouve chaque date : soustraction ou addition ?",
              solution: [
                "a) Deux dates après J.-C. : on soustrait, 2026 - 1789 = 237 ans.",
                "b) Deux dates avant J.-C. : on soustrait, 2560 - 332 = 2 228 ans environ.",
                "c) Une date avant et une date après J.-C. : on additionne, 753 + 476 = 1 229 ans environ (à un an près, car il n'y a pas d'année 0).",
                "Résultat : 237 ans, environ 2 228 ans et environ 1 229 ans.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Vous construisez une frise de 3500 av. J.-C. à 2000 apr. J.-C., avec une échelle de 1 cm pour 500 ans. a) Quelle sera la longueur de la frise ? b) À quelle distance du début de la frise placez-vous l'invention de l'écriture (vers 3300 av. J.-C.), la naissance de Jésus-Christ, puis l'année 1492 ? c) Comparez la durée de l'Antiquité (de 3300 av. J.-C. à 476) et celle du Moyen Âge (de 476 à 1492). d) Avec la même échelle, quelle longueur faudrait-il pour représenter les 3 millions d'années de la Préhistoire ?",
              hint: "Calculez d'abord les durées en années, puis divisez par 500 pour obtenir des centimètres. Pour d), rappelez-vous que 100 cm = 1 m.",
              solution: [
                "a) Durée totale : 3500 + 2000 = 5 500 ans. Longueur : 5 500 ÷ 500 = 11 cm.",
                "b) Écriture : 3500 - 3300 = 200 ans après le début, soit 200 ÷ 500 = 0,4 cm. Naissance de Jésus-Christ : 3 500 ans après le début, soit 3 500 ÷ 500 = 7 cm. Année 1492 : 3500 + 1492 = 4 992 ans après le début, soit 4 992 ÷ 500 ≈ 10 cm.",
                "c) Antiquité : 3300 + 476 = 3 776 ans environ. Moyen Âge : 1492 - 476 = 1 016 ans. L'Antiquité est presque quatre fois plus longue que le Moyen Âge.",
                "d) 3 000 000 ÷ 500 = 6 000 cm, soit 60 m : la frise ne tiendrait pas dans la classe.",
                "Conclusion : la frise mesure 11 cm ; on y place l'écriture à 0,4 cm, la naissance de Jésus-Christ à 7 cm et 1492 à environ 10 cm. Pour la Préhistoire, il faut changer d'échelle.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez les grandes périodes et leurs débuts dans l'ordre chronologique.",
            items: [
              "Apparition des premiers humains en Afrique (il y a environ 3 millions d'années)",
              "Invention de l'écriture, début de l'Antiquité (vers 3300 av. J.-C.)",
              "Fin de l'Empire romain d'Occident, début du Moyen Âge (476)",
              "Arrivée de Christophe Colomb en Amérique, début des Temps modernes (1492)",
              "Révolution française, début de l'époque contemporaine (1789)",
            ],
          },
          quiz: [
            {
              q: "À quel siècle appartient l'année 1789 ?",
              options: ["Au XVIIe siècle", "Au XVIIIe siècle", "Au XIXe siècle", "Au XVIIIe siècle av. J.-C."],
              answer: 1,
              why: "On enlève les deux derniers chiffres (17) et on ajoute 1 : 1789 appartient au XVIIIe siècle.",
            },
            {
              q: "Quelle date est la plus ancienne ?",
              options: ["100 av. J.-C.", "50 apr. J.-C.", "500 apr. J.-C.", "500 av. J.-C."],
              answer: 3,
              why: "Avant J.-C., plus le nombre est grand, plus la date est éloignée de nous : 500 av. J.-C. est la plus ancienne.",
            },
            {
              q: "Combien d'années séparent 300 av. J.-C. et 200 apr. J.-C. ?",
              options: ["Environ 500 ans", "Environ 100 ans", "Environ 300 ans", "Environ 1 000 ans"],
              answer: 0,
              why: "Une date est avant J.-C. et l'autre après : on additionne, 300 + 200 = 500 ans environ.",
            },
            {
              q: "Quel événement marque, par convention, la fin de la Préhistoire ?",
              options: ["L'apparition de l'agriculture", "La maîtrise du feu", "L'invention de l'écriture", "La fondation de Rome"],
              answer: 2,
              why: "La Préhistoire s'achève avec l'invention de l'écriture, vers 3300 av. J.-C. ; l'Antiquité commence alors.",
            },
            {
              q: "Quand le XXIe siècle a-t-il commencé ?",
              options: ["Le 1er janvier 2000", "Le 1er janvier 2001", "Le 1er janvier 2100", "Le 1er janvier 1901"],
              answer: 1,
              why: "Un siècle commence par une année en 01 : le XXIe siècle va de 2001 à 2100.",
            },
          ],
          trap: "Oublier que l'on compte à rebours avant J.-C. et croire que 500 av. J.-C. est plus récent que 100 av. J.-C. ; ou se tromper d'un siècle avec les années en 00, comme 1900, qui appartient au XIXe siècle.",
          method: "Avant tout calcul, tracez une petite frise au brouillon et placez-y les dates avec J.-C. au milieu : vous voyez tout de suite s'il faut soustraire ou additionner, et vous pouvez vérifier que votre résultat est vraisemblable.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'premiers-humains',
          title: 'Les débuts de l\'humanité',
          minutes: 30,
          objectives: [
            "Identifier les sources qui permettent de connaître la Préhistoire.",
            "Situer dans le temps et dans l'espace l'apparition des premiers humains en Afrique.",
            "Expliquer comment les humains ont peuplé la Terre par des migrations successives.",
            "Décrire le mode de vie des chasseurs-cueilleurs du Paléolithique.",
          ],
          course: [
            {
              heading: "Comment connaît-on la Préhistoire ?",
              paragraphs: [
                "La Préhistoire est la période qui précède l'invention de l'écriture. Les êtres humains de cette époque n'ont laissé aucun texte : pour les connaître, les scientifiques étudient les traces qu'ils ont laissées dans le sol.",
                "Les archéologues fouillent les sites avec beaucoup de soin. Ils trouvent des fossiles (os et dents devenus pierre ou conservés dans la roche), des outils, des restes de foyers, des os d'animaux mangés, des bijoux et des peintures. Les paléoanthropologues étudient les fossiles humains, et des laboratoires mesurent l'âge des objets : c'est la datation.",
                "Ces connaissances ne sont jamais définitives. Chaque nouvelle découverte peut changer ce que l'on sait : c'est pourquoi les dates de la Préhistoire sont toujours données de façon approximative, avec le mot « environ ».",
              ],
              box: { label: "Définition", text: "Fossile : reste d'un être vivant (os, dent, coquille) ou trace de son activité, conservé dans les roches. Archéologue : scientifique qui étudie le passé à partir des traces matérielles laissées par les êtres humains." },
            },
            {
              heading: "Les premiers humains apparaissent en Afrique",
              paragraphs: [
                "Les êtres humains et les grands singes actuels, comme les chimpanzés, ont des ancêtres communs qui vivaient en Afrique il y a plusieurs millions d'années. Les plus anciens fossiles de la lignée humaine ont été trouvés en Afrique : Toumaï, découvert au Tchad en 2001, a vécu il y a environ 7 millions d'années, et Lucy, une australopithèque découverte en Éthiopie en 1974, il y a environ 3,2 millions d'années. Lucy marchait déjà debout, sur ses deux jambes : elle était bipède.",
                "Le genre Homo, celui auquel nous appartenons, apparaît en Afrique de l'Est il y a environ 2,5 à 3 millions d'années. Ces premiers humains fabriquent des outils en taillant des pierres. Plus tard, Homo erectus, plus grand, fabrique des bifaces, des pierres taillées sur les deux faces.",
              ],
              box: { label: "À retenir", text: "L'être humain ne descend pas du singe actuel : les humains et les grands singes ont des ancêtres communs. Le berceau de l'humanité est l'Afrique." },
            },
            {
              heading: "Des migrations qui peuplent toute la Terre",
              paragraphs: [
                "Les humains se déplacent sans cesse pour trouver de la nourriture et suivre les animaux. Il y a près de 2 millions d'années, Homo erectus sort d'Afrique et gagne l'Asie, puis l'Europe. En Europe et au Proche-Orient vit plus tard l'homme de Néandertal, adapté au froid.",
                "Notre espèce, Homo sapiens, apparaît en Afrique il y a environ 300 000 ans : les plus anciens fossiles connus ont été trouvés au Maroc. Sapiens sort à son tour d'Afrique, atteint l'Australie il y a au moins 50 000 ans en traversant la mer, puis l'Europe il y a environ 45 000 ans. Néandertal disparaît il y a environ 40 000 ans, mais les deux espèces ont eu des enfants ensemble : beaucoup d'humains actuels portent une petite part de gènes néandertaliens.",
                "Pendant les périodes glaciaires, le niveau des mers est plus bas qu'aujourd'hui. Des terres émergées relient alors l'Asie et l'Amérique : c'est par ce passage, la Béringie, que des humains arrivent en Amérique, il y a au moins 15 000 ans. Aujourd'hui, tous les êtres humains appartiennent à la même espèce, Homo sapiens.",
              ],
              box: { label: "Définition", text: "Migration : déplacement d'êtres humains d'un territoire vers un autre pour s'y installer. Depuis ses débuts, l'histoire de l'humanité est une histoire de migrations." },
            },
            {
              heading: "La vie des chasseurs-cueilleurs du Paléolithique",
              paragraphs: [
                "Le Paléolithique, ou âge de la pierre taillée, est la plus longue période de la Préhistoire. Les humains vivent en petits groupes nomades : ils se déplacent au fil des saisons. Ils chassent (rennes, chevaux, bisons, mammouths), pêchent et cueillent des fruits, des racines et des graines. Ils s'abritent dans des huttes ou à l'entrée des grottes, mais ne vivent pas au fond des cavernes.",
                "La maîtrise du feu, il y a environ 400 000 ans, change la vie : le feu réchauffe, éclaire, protège des animaux et permet de cuire les aliments. Les outils se perfectionnent : lames, pointes de sagaie, harpons, aiguilles en os pour coudre des vêtements en peau.",
                "Les hommes de la Préhistoire ont aussi une vie artistique et des croyances. Ils peignent et gravent des animaux sur les parois des grottes, comme à Chauvet, en Ardèche (environ 36 000 ans), ou à Lascaux, en Dordogne (environ 18 000 ans), découverte en 1940 par des adolescents. Ils enterrent certains morts dans des sépultures, parfois avec des objets.",
              ],
              box: { label: "Repère", text: "Vers 7 millions d'années : Toumaï. Vers 3,2 millions d'années : Lucy. Vers 2,5 à 3 millions d'années : genre Homo. Vers 400 000 ans : maîtrise du feu. Vers 300 000 ans : Homo sapiens. Vers 36 000 ans : grotte Chauvet. Vers 18 000 ans : Lascaux." },
            },
          ],
          keyPoints: [
            "La Préhistoire se connaît grâce aux traces étudiées par les archéologues : fossiles, outils, foyers, peintures.",
            "Le berceau de l'humanité est l'Afrique : Toumaï (environ 7 millions d'années), Lucy (environ 3,2 millions d'années).",
            "Les humains ont peuplé toute la Terre par des migrations : Homo erectus sort d'Afrique il y a près de 2 millions d'années.",
            "Homo sapiens apparaît en Afrique il y a environ 300 000 ans ; c'est la seule espèce humaine aujourd'hui.",
            "Au Paléolithique, les humains sont des chasseurs-cueilleurs nomades qui taillent la pierre et maîtrisent le feu (environ 400 000 ans).",
            "Art pariétal : Chauvet (environ 36 000 ans), Lascaux (environ 18 000 ans).",
          ],
          example: {
            statement: "Expliquez en quelques phrases pourquoi on dit que l'histoire de l'humanité est aussi une histoire de migrations.",
            solution: [
              "Rappeler où apparaissent les premiers humains : en Afrique, il y a environ 2,5 à 3 millions d'années.",
              "Montrer une première migration : il y a près de 2 millions d'années, Homo erectus quitte l'Afrique et s'installe en Asie et en Europe.",
              "Montrer une deuxième vague : Homo sapiens, apparu en Afrique il y a environ 300 000 ans, peuple ensuite tous les continents, jusqu'à l'Australie puis l'Amérique par la Béringie.",
              "Donner les causes : les humains se déplacent pour trouver de la nourriture, suivre les animaux et s'adapter aux changements du climat.",
              "Conclure : partis d'Afrique, les humains ont peuplé toute la Terre en se déplaçant ; les migrations sont donc présentes depuis les débuts de l'humanité.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque nom à sa description. Noms : Lucy ; Homo sapiens ; Lascaux ; biface ; Béringie. Descriptions : 1) pierre taillée sur les deux faces ; 2) grotte ornée de Dordogne, peinte il y a environ 18 000 ans ; 3) australopithèque bipède découverte en Éthiopie ; 4) passage entre l'Asie et l'Amérique pendant les périodes glaciaires ; 5) notre espèce, apparue en Afrique il y a environ 300 000 ans.",
              hint: "Commencez par les mots que vous connaissez le mieux, puis procédez par élimination.",
              solution: [
                "Lucy : 3) australopithèque bipède découverte en Éthiopie.",
                "Homo sapiens : 5) notre espèce, apparue en Afrique il y a environ 300 000 ans.",
                "Lascaux : 2) grotte ornée de Dordogne.",
                "Biface : 1) pierre taillée sur les deux faces.",
                "Béringie : 4) passage entre l'Asie et l'Amérique.",
              ],
            },
            {
              level: 2,
              statement: "Un camarade affirme : « Les hommes préhistoriques vivaient au fond des cavernes et l'homme descend du singe. » Corrigez ces deux erreurs en expliquant ce que disent les scientifiques.",
              hint: "Pour chaque erreur, rappelez ce qu'ont montré les fouilles et les fossiles.",
              solution: [
                "Première erreur : les humains de la Préhistoire ne vivaient pas au fond des grottes, qui sont sombres et humides. Ils vivaient dans des huttes ou des abris, parfois à l'entrée des grottes. Les fonds de grottes, comme à Lascaux, étaient surtout ornés de peintures.",
                "Deuxième erreur : l'homme ne descend pas des singes actuels. Les humains et les grands singes, comme les chimpanzés, ont des ancêtres communs qui vivaient en Afrique il y a plusieurs millions d'années ; ensuite, chaque lignée a évolué de son côté.",
                "Conclusion : les connaissances sur la Préhistoire viennent des fouilles et des fossiles, et elles contredisent ces deux idées reçues.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Imaginez que toute l'histoire de l'humanité, depuis l'apparition du genre Homo il y a environ 3 millions d'années (valeur arrondie), tienne dans une seule journée de 24 heures, de minuit à minuit. a) Combien d'années représente une heure ? une minute (arrondissez à l'unité) ? b) À quelle heure apparaît Homo sapiens (il y a 300 000 ans) ? c) À quelle heure environ sont peintes les grottes de Lascaux (il y a 18 000 ans) ? d) À quelle heure environ l'écriture est-elle inventée (il y a environ 5 300 ans) ? Que montre ce calcul ?",
              hint: "Divisez 3 000 000 par 24 pour une heure, puis par 60 pour une minute. Comptez ensuite le temps à retirer à minuit.",
              solution: [
                "a) Une heure : 3 000 000 ÷ 24 = 125 000 ans. Une minute : 125 000 ÷ 60 ≈ 2 083 ans.",
                "b) 300 000 ÷ 125 000 = 2,4 heures, soit 2 h 24 min avant minuit : Homo sapiens apparaît vers 21 h 36.",
                "c) 18 000 ÷ 2 083 ≈ 8,6 minutes avant minuit : Lascaux est peinte vers 23 h 51.",
                "d) 5 300 ÷ 2 083 ≈ 2,5 minutes avant minuit : l'écriture apparaît vers 23 h 57 et demie.",
                "Conclusion : la Préhistoire occupe presque toute la journée, et tout ce qui est écrit dans les livres d'histoire tient dans les deux ou trois dernières minutes.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Démêlez les idées reçues sur les débuts de l'humanité.",
            statements: [
              { text: "Les plus anciens fossiles de la lignée humaine ont été trouvés en Afrique.", true: true, why: "Toumaï (Tchad) et Lucy (Éthiopie) font de l'Afrique le berceau de l'humanité." },
              { text: "L'homme descend du chimpanzé.", true: false, why: "Humains et chimpanzés ont des ancêtres communs, mais nous ne descendons pas d'une espèce de singe actuelle." },
              { text: "Les hommes du Paléolithique vivaient au fond des grottes.", true: false, why: "Ils vivaient dans des huttes ou à l'entrée des grottes ; les fonds de grottes servaient surtout aux peintures." },
              { text: "Homo sapiens et Néandertal ont vécu à la même époque.", true: true, why: "Ils se sont côtoyés en Europe et au Proche-Orient, et ont même eu des enfants ensemble." },
              { text: "Les humains ont maîtrisé le feu il y a environ 400 000 ans.", true: true, why: "C'est l'ordre de grandeur donné par les fouilles : le feu sert à se chauffer, s'éclairer, se protéger et cuire." },
              { text: "Les premiers humains sont arrivés en Amérique en bateau depuis l'Europe.", true: false, why: "Ils sont venus d'Asie, par la Béringie, un passage qui reliait les deux continents pendant les périodes glaciaires." },
              { text: "Aujourd'hui, il existe plusieurs espèces humaines sur la Terre.", true: false, why: "Tous les humains actuels appartiennent à une seule espèce : Homo sapiens." },
            ],
          },
          quiz: [
            {
              q: "Sur quel continent les premiers humains sont-ils apparus ?",
              options: ["En Asie", "En Europe", "En Afrique", "En Amérique"],
              answer: 2,
              why: "Les plus anciens fossiles de la lignée humaine, comme Toumaï et Lucy, ont été découverts en Afrique.",
            },
            {
              q: "Qu'est-ce qu'un biface ?",
              options: ["Une pierre taillée sur ses deux faces", "Un animal chassé au Paléolithique", "Une peinture d'animal sur la paroi d'une grotte", "Une hutte en peaux de bêtes"],
              answer: 0,
              why: "Le biface est un outil de pierre taillée sur les deux faces, fabriqué notamment par Homo erectus.",
            },
            {
              q: "Il y a combien de temps environ Homo sapiens est-il apparu ?",
              options: ["10 000 ans", "3 millions d'années", "40 000 ans", "300 000 ans"],
              answer: 3,
              why: "Les plus anciens fossiles de Homo sapiens, trouvés au Maroc, ont environ 300 000 ans.",
            },
            {
              q: "Comment les humains sont-ils arrivés en Amérique ?",
              options: ["Par un passage terrestre depuis l'Asie", "En traversant l'océan Atlantique depuis l'Afrique", "En traversant l'Europe à pied", "Par l'Australie, à la nage"],
              answer: 0,
              why: "Pendant les périodes glaciaires, la mer était plus basse : la Béringie reliait l'Asie à l'Amérique.",
            },
            {
              q: "Comment vivaient les humains du Paléolithique ?",
              options: ["En villages d'agriculteurs", "En nomades, de chasse et de cueillette", "Dans des villes entourées de murailles", "En éleveurs de moutons"],
              answer: 1,
              why: "Au Paléolithique, les humains sont des chasseurs-cueilleurs nomades ; l'agriculture et l'élevage n'apparaissent qu'au Néolithique.",
            },
          ],
          trap: "Croire que « l'homme descend du singe » : les humains et les grands singes actuels ont des ancêtres communs, mais aucun singe d'aujourd'hui n'est notre ancêtre.",
          method: "Pour retenir les ordres de grandeur, classez les dates par unité : les millions d'années (Toumaï, Lucy, genre Homo), les centaines de milliers d'années (feu, Homo sapiens), puis les dizaines de milliers d'années (Chauvet, Lascaux, arrivée en Amérique).",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'revolution-neolithique',
          title: 'La « révolution » néolithique',
          minutes: 30,
          objectives: [
            "Situer dans le temps et dans l'espace les débuts de l'agriculture et de l'élevage.",
            "Décrire les transformations du mode de vie au Néolithique : sédentarisation, villages, nouvelles techniques.",
            "Expliquer les conséquences de ces changements sur les sociétés.",
            "Discuter l'emploi du mot « révolution » pour qualifier le Néolithique.",
          ],
          course: [
            {
              heading: "Des chasseurs-cueilleurs aux agriculteurs-éleveurs",
              paragraphs: [
                "Il y a environ 12 000 ans, la dernière période glaciaire se termine : le climat se réchauffe. Au Proche-Orient, dans une région en forme d'arc appelée le Croissant fertile (aujourd'hui en Israël, en Palestine, au Liban, en Syrie, en Irak et au sud-est de la Turquie), des groupes humains commencent à semer et à récolter des céréales sauvages, vers 10 000 av. J.-C.",
                "Peu à peu, ils sélectionnent les plus belles graines de blé et d'orge, cultivent des lentilles et des pois : c'est l'agriculture. Ils apprivoisent aussi des animaux sauvages et les font se reproduire sous leur contrôle : chèvres, moutons, porcs, puis bœufs. C'est l'élevage. Plantes et animaux sont domestiqués.",
              ],
              box: { label: "Définition", text: "Néolithique : « âge de la pierre nouvelle » (pierre polie). Période de la Préhistoire, qui commence vers 10 000 av. J.-C. au Proche-Orient, pendant laquelle les humains deviennent agriculteurs et éleveurs, et se sédentarisent." },
            },
            {
              heading: "Plusieurs foyers dans le monde",
              paragraphs: [
                "Le Proche-Orient n'est pas le seul lieu où naît l'agriculture. D'autres sociétés l'inventent de leur côté, sans contact entre elles, quelques milliers d'années plus tard : en Chine avec le riz et le millet, en Amérique avec le maïs au Mexique et la pomme de terre dans les Andes, en Afrique avec le sorgho, ou encore en Nouvelle-Guinée.",
                "Depuis le Proche-Orient, l'agriculture se diffuse vers l'Europe. Ce sont surtout des agriculteurs venus d'Anatolie (l'actuelle Turquie) qui migrent et apportent avec eux leurs graines, leurs animaux et leurs techniques. L'agriculture atteint le territoire de la France actuelle vers 6000 à 5000 av. J.-C. Le Néolithique est donc lui aussi une histoire de migrations.",
              ],
              box: { label: "Repère", text: "Vers 10 000 av. J.-C. : débuts de l'agriculture et de l'élevage au Proche-Orient. Vers 6000 à 5000 av. J.-C. : arrivée de l'agriculture sur le territoire de la France actuelle." },
            },
            {
              heading: "Une nouvelle façon de vivre",
              paragraphs: [
                "Pour surveiller leurs champs et leurs troupeaux, les humains restent au même endroit : ils se sédentarisent. Ils construisent des villages de maisons en bois, en terre ou en pierre, avec des greniers pour stocker les récoltes. Certains villages deviennent grands : Çatal Höyük, en Turquie actuelle, compte plusieurs milliers d'habitants vers 7000 av. J.-C.",
                "De nouvelles techniques apparaissent. Les haches en pierre polie permettent de défricher les forêts pour créer des champs. La poterie en argile cuite sert à conserver et à cuire les aliments. Le tissage de la laine et du lin permet de fabriquer des vêtements. Plus tard, les humains apprennent aussi à travailler les métaux, d'abord le cuivre.",
                "En Europe de l'Ouest, des sociétés néolithiques dressent de grandes pierres : les mégalithes. Les menhirs sont des pierres dressées, les dolmens des tombes collectives faites de grandes dalles. À Carnac, en Bretagne, des milliers de menhirs sont alignés.",
              ],
              box: { label: "Définition", text: "Sédentarisation : passage d'une vie nomade, où l'on se déplace sans cesse, à une vie sédentaire, où l'on habite toute l'année au même endroit." },
            },
            {
              heading: "Une « révolution » ? Des conséquences considérables",
              paragraphs: [
                "Les conséquences sont immenses. Grâce aux réserves de nourriture, la population augmente fortement. Certains habitants n'ont plus besoin de produire leur nourriture et se spécialisent : potiers, tisserands, puis artisans du métal. Mais la vie n'est pas plus facile pour autant : le travail des champs est dur, une mauvaise récolte provoque la famine, et la vie près des animaux favorise certaines maladies.",
                "Les sociétés deviennent plus inégales : certaines tombes sont beaucoup plus riches que d'autres, signe que des chefs apparaissent. Les terres et les réserves deviennent des richesses que l'on défend : les archéologues trouvent des villages protégés par des palissades et des traces de combats.",
                "On parle de « révolution » néolithique parce que le mode de vie des humains change profondément. Mais les historiens mettent ce mot entre guillemets : ce changement est très lent, il s'étale sur plusieurs milliers d'années, et pendant longtemps des chasseurs-cueilleurs vivent à côté des premiers agriculteurs.",
              ],
              box: { label: "À retenir", text: "Le mot « révolution » souligne l'ampleur du changement (agriculture, élevage, sédentarité). Les guillemets rappellent qu'il ne s'agit pas d'un changement brutal, mais d'une transformation lente, sur des millénaires." },
            },
          ],
          keyPoints: [
            "Vers 10 000 av. J.-C., au Proche-Orient (Croissant fertile), les humains inventent l'agriculture et l'élevage.",
            "L'agriculture naît aussi ailleurs, de façon indépendante : Chine (riz), Amérique (maïs), Afrique (sorgho).",
            "Elle se diffuse en Europe avec des agriculteurs migrants et atteint la France actuelle vers 6000 à 5000 av. J.-C.",
            "Les humains se sédentarisent : villages, greniers, poterie, pierre polie, tissage, mégalithes.",
            "Conséquences : hausse de la population, spécialisation, mais aussi inégalités, conflits, famines.",
            "« Révolution » entre guillemets : un changement profond mais lent, sur plusieurs millénaires.",
          ],
          example: {
            statement: "Comparez le mode de vie des humains au Paléolithique et au Néolithique en trois points : l'alimentation, l'habitat, les outils.",
            solution: [
              "Alimentation : au Paléolithique, les humains chassent, pêchent et cueillent ; au Néolithique, ils produisent leur nourriture grâce à l'agriculture et à l'élevage.",
              "Habitat : au Paléolithique, ils sont nomades et vivent dans des abris temporaires ; au Néolithique, ils sont sédentaires et habitent des villages permanents avec des greniers.",
              "Outils : au Paléolithique, ils taillent la pierre ; au Néolithique, ils polissent aussi la pierre (haches pour défricher) et fabriquent des poteries.",
              "Conclusion : les humains passent d'une économie de prédation (prendre ce que la nature offre) à une économie de production (produire leur nourriture).",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les éléments suivants selon qu'ils caractérisent le Paléolithique ou le Néolithique : nomadisme ; village ; poterie ; chasse au renne ; hache en pierre polie ; cueillette ; élevage de moutons ; biface en pierre taillée ; grenier.",
              hint: "Demandez-vous si l'élément suppose de rester au même endroit et de produire sa nourriture.",
              solution: [
                "Paléolithique : nomadisme ; chasse au renne ; cueillette ; biface en pierre taillée.",
                "Néolithique : village ; poterie ; hache en pierre polie ; élevage de moutons ; grenier.",
                "Remarque : la chasse et la cueillette continuent au Néolithique, mais elles ne sont plus la principale source de nourriture.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en quatre ou cinq lignes pourquoi les historiens écrivent le mot « révolution » entre guillemets quand ils parlent du Néolithique.",
              hint: "Une révolution est en général un changement rapide et profond. Le Néolithique est-il profond ? Est-il rapide ?",
              solution: [
                "Le changement est profond : les humains deviennent agriculteurs et éleveurs, se sédentarisent, construisent des villages et inventent de nouvelles techniques. Leur mode de vie est bouleversé, d'où le mot « révolution ».",
                "Mais le changement n'est pas rapide : il s'étale sur plusieurs milliers d'années, et des chasseurs-cueilleurs continuent longtemps à vivre à côté des agriculteurs.",
                "Conclusion : les guillemets signalent que le mot est utile pour montrer l'ampleur du changement, mais qu'il ne faut pas imaginer une transformation brutale.",
              ],
            },
            {
              level: 3,
              statement: "Défi (données fictives et simplifiées). Pour se nourrir, un groupe de chasseurs-cueilleurs a besoin d'environ 10 km² de territoire par personne, alors qu'une communauté d'agriculteurs a besoin d'environ 0,5 km² par personne. a) Combien de personnes peuvent vivre sur un territoire de 200 km² avec chacun de ces modes de vie ? b) Combien de fois plus de personnes l'agriculture permet-elle de nourrir ? c) Expliquez ce que ce calcul montre sur les conséquences du Néolithique, puis citez un inconvénient de ce nouveau mode de vie.",
              hint: "Divisez la surface du territoire par la surface nécessaire à une personne.",
              solution: [
                "a) Chasseurs-cueilleurs : 200 ÷ 10 = 20 personnes. Agriculteurs : 200 ÷ 0,5 = 400 personnes.",
                "b) 400 ÷ 20 = 20 : sur le même territoire, l'agriculture permet de nourrir 20 fois plus de personnes.",
                "c) Ce calcul montre que l'agriculture produit beaucoup plus de nourriture sur une même surface : c'est pourquoi la population augmente fortement au Néolithique et que des villages de plusieurs milliers d'habitants apparaissent.",
                "Inconvénient : les agriculteurs dépendent de leurs récoltes ; si elles sont mauvaises, la famine menace. On peut aussi citer le travail plus dur, les maladies venues des animaux ou l'apparition des inégalités et des conflits.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot du Néolithique à sa définition.",
            pairs: [
              { left: "Sédentarisation", right: "Fait d'habiter toute l'année au même endroit" },
              { left: "Domestication", right: "Fait de contrôler la reproduction d'une plante ou d'un animal" },
              { left: "Croissant fertile", right: "Région du Proche-Orient où naît l'agriculture" },
              { left: "Pierre polie", right: "Technique qui donne des haches pour défricher" },
              { left: "Dolmen", right: "Tombe collective faite de grandes dalles de pierre" },
              { left: "Grenier", right: "Bâtiment où l'on stocke les récoltes" },
            ],
          },
          quiz: [
            {
              q: "Où l'agriculture apparaît-elle en premier, vers 10 000 av. J.-C. ?",
              options: ["En Gaule", "Au Proche-Orient", "En Égypte", "En Amérique du Nord"],
              answer: 1,
              why: "Les premières traces d'agriculture se trouvent dans le Croissant fertile, au Proche-Orient.",
            },
            {
              q: "Que signifie « se sédentariser » ?",
              options: ["Chasser en groupe", "Changer de campement à chaque nouvelle saison", "Habiter au même endroit toute l'année", "Peindre dans les grottes"],
              answer: 2,
              why: "Se sédentariser, c'est abandonner la vie nomade pour vivre de façon permanente au même endroit.",
            },
            {
              q: "Quel outil caractérise le Néolithique ?",
              options: ["La hache en pierre polie", "Le biface", "Le harpon en os", "La pointe de sagaie en bois de renne"],
              answer: 0,
              why: "Néolithique veut dire « pierre nouvelle » : la pierre polie sert à fabriquer des haches pour défricher.",
            },
            {
              q: "Pourquoi met-on le mot « révolution » entre guillemets ?",
              options: ["Parce que le changement est resté sans aucune importance", "Parce qu'il y a eu une guerre", "Parce que le mot vient du latin", "Parce que le changement a duré des millénaires"],
              answer: 3,
              why: "Le changement est profond mais lent : il s'étale sur plusieurs milliers d'années.",
            },
            {
              q: "Laquelle de ces conséquences est liée au Néolithique ?",
              options: ["L'apparition de l'écriture", "Une forte hausse de la population", "La disparition de toutes les famines", "La fin des inégalités"],
              answer: 1,
              why: "La production de nourriture permet à la population d'augmenter, mais elle s'accompagne d'inégalités et de famines en cas de mauvaise récolte.",
            },
          ],
          trap: "Imaginer que les humains sont devenus agriculteurs partout et d'un seul coup : l'agriculture apparaît à des dates différentes selon les régions, et le passage au Néolithique dure des milliers d'années.",
          method: "Pour comparer deux périodes, faites un tableau à deux colonnes (Paléolithique, Néolithique) et à plusieurs lignes (alimentation, habitat, outils, société) : vous verrez d'un coup d'œil ce qui change.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'premiers-etats-ecritures',
          title: 'Premiers États, premières écritures',
          minutes: 35,
          objectives: [
            "Situer dans le temps et dans l'espace les premiers États, en Mésopotamie et en Égypte.",
            "Définir un État et identifier ses caractéristiques : territoire, pouvoir, lois, impôts, administration.",
            "Expliquer pourquoi l'écriture a été inventée et à quoi elle sert.",
          ],
          course: [
            {
              heading: "Les premières villes, entre le Tigre et l'Euphrate",
              paragraphs: [
                "La Mésopotamie, dont le nom signifie « pays entre les fleuves », se trouve entre le Tigre et l'Euphrate, principalement dans l'actuel Irak. Le climat y est sec, mais les habitants creusent des canaux pour irriguer leurs champs. Les récoltes sont abondantes et produisent des surplus, c'est-à-dire plus de nourriture que ce qui est nécessaire pour vivre.",
                "Ces surplus permettent à des villages de grandir et de devenir des villes. Vers 3000 av. J.-C., Uruk compte plusieurs dizaines de milliers d'habitants. Chaque ville est une cité-État : elle domine les campagnes qui l'entourent, possède des remparts, un temple et un roi. Au centre de la ville s'élève une ziggourat, une grande tour à étages dédiée aux dieux.",
              ],
              box: { label: "Définition", text: "Cité-État : ville indépendante qui gouverne les campagnes autour d'elle, avec son propre roi, ses dieux et ses lois. Ziggourat : tour à étages construite en briques au cœur des cités de Mésopotamie." },
            },
            {
              heading: "L'invention de l'écriture",
              paragraphs: [
                "Dans les temples et les palais, il faut compter les sacs de grain, les têtes de bétail, les impôts versés par les paysans. Vers 3300 av. J.-C., à Uruk, les Mésopotamiens inventent l'écriture pour tenir ces comptes. Ils dessinent d'abord de petits dessins, les pictogrammes, sur des tablettes d'argile fraîche.",
                "Peu à peu, les dessins sont remplacés par des signes formés de petits traits en forme de clous, imprimés dans l'argile avec un roseau taillé, le calame : c'est l'écriture cunéiforme. Elle sert ensuite à écrire des lois, des lettres, des prières, des récits comme l'épopée de Gilgamesh, roi légendaire d'Uruk.",
                "En Égypte, une autre écriture apparaît vers 3200 av. J.-C. : les hiéroglyphes, gravés sur les monuments ou tracés à l'encre sur du papyrus. Peu de gens savent lire et écrire : ce sont les scribes, des fonctionnaires très respectés. L'invention de l'écriture marque, par convention, la fin de la Préhistoire et le début de l'Histoire.",
              ],
              box: { label: "Repère", text: "Vers 3300 av. J.-C. : écriture cunéiforme en Mésopotamie. Vers 3200 av. J.-C. : hiéroglyphes en Égypte. 1822 : le Français Champollion déchiffre les hiéroglyphes grâce à la pierre de Rosette." },
            },
            {
              heading: "Qu'est-ce qu'un État ?",
              paragraphs: [
                "Un État est une forme d'organisation politique. Il possède un territoire avec des limites, une population, et un pouvoir qui commande à tous. Pour gouverner, ce pouvoir édicte des lois, lève des impôts, entretient une armée et s'appuie sur une administration composée de fonctionnaires, comme les scribes.",
                "En Mésopotamie, certains rois réunissent plusieurs cités sous leur autorité. Vers 1750 av. J.-C., Hammurabi, roi de Babylone, fait graver ses lois sur une grande stèle de pierre, aujourd'hui conservée au musée du Louvre. Ce code prévoit des peines précises pour chaque faute ; certaines suivent la loi du talion, résumée par la formule « œil pour œil ». Le roi s'y présente comme choisi par les dieux pour faire régner la justice.",
              ],
              box: { label: "Définition", text: "État : organisation politique qui exerce son pouvoir sur un territoire et une population, grâce à des lois, des impôts, une armée et une administration." },
            },
            {
              heading: "L'Égypte des pharaons, un État au bord du Nil",
              paragraphs: [
                "L'Égypte est un pays de désert traversé par le Nil. Chaque année, la crue du fleuve dépose sur ses rives un limon noir et fertile. L'historien grec Hérodote présentait pour cette raison l'Égypte comme un « don du Nil ». Vers 3100 av. J.-C., la vallée du Nil est unifiée en un seul royaume, dirigé par un roi : le pharaon.",
                "Le pharaon est considéré comme un dieu vivant, intermédiaire entre les dieux et les hommes. Il possède tous les pouvoirs. Des scribes mesurent les champs, calculent et collectent les impôts, payés en nature (grain, bétail), et organisent les grands travaux : canaux, temples et pyramides.",
                "Les pyramides de Gizeh sont les tombeaux de pharaons. La plus grande, celle de Khéops, est construite vers 2560 av. J.-C. Ces chantiers immenses montrent la puissance de l'État égyptien : il faut nourrir, loger et encadrer des milliers d'ouvriers, organisés en équipes.",
              ],
              box: { label: "À retenir", text: "Agriculture irriguée, surplus, villes, pouvoir d'un roi, administration de scribes et écriture : en Mésopotamie comme en Égypte, ces éléments se renforcent mutuellement et donnent naissance aux premiers États." },
            },
          ],
          keyPoints: [
            "Mésopotamie (entre le Tigre et l'Euphrate) : irrigation, surplus, premières villes et cités-États comme Uruk.",
            "Vers 3300 av. J.-C. : invention de l'écriture cunéiforme à Uruk, d'abord pour compter ; vers 3200 av. J.-C. : hiéroglyphes en Égypte.",
            "L'écriture marque la fin de la Préhistoire et le début de l'Histoire.",
            "Un État : un territoire, une population, un pouvoir, des lois, des impôts, une armée, une administration.",
            "Vers 1750 av. J.-C. : code de Hammurabi, roi de Babylone, gravé sur une stèle.",
            "Égypte : unifiée vers 3100 av. J.-C., dirigée par le pharaon, dieu vivant ; pyramide de Khéops vers 2560 av. J.-C.",
          ],
          example: {
            statement: "Montrez que l'Égypte des pharaons est un État, en vous appuyant sur trois caractéristiques.",
            solution: [
              "Rappeler la définition : un État est une organisation politique qui exerce son pouvoir sur un territoire et une population.",
              "Un territoire et un pouvoir : depuis l'unification, vers 3100 av. J.-C., la vallée du Nil forme un seul royaume dirigé par le pharaon, qui possède tous les pouvoirs.",
              "Des impôts et une administration : les scribes mesurent les champs, comptent les récoltes et collectent les impôts payés en nature.",
              "Des grands travaux : l'État organise la construction des canaux, des temples et des pyramides, comme celle de Khéops vers 2560 av. J.-C.",
              "Conclusion : avec un territoire, un chef, des impôts, une administration et de grands chantiers, l'Égypte des pharaons est bien un État.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec le bon mot : cunéiforme ; scribe ; pharaon ; ziggourat ; papyrus. a) L'écriture de Mésopotamie, en forme de clous, s'appelle l'écriture ... b) Le roi d'Égypte, considéré comme un dieu vivant, est le ... c) Le fonctionnaire qui sait lire, écrire et compter est le ... d) Les Égyptiens écrivent sur une feuille faite de roseaux, le ... e) La grande tour à étages d'une cité mésopotamienne est la ...",
              hint: "Repérez dans chaque phrase l'indice qui renvoie à la Mésopotamie ou à l'Égypte.",
              solution: [
                "a) cunéiforme.",
                "b) pharaon.",
                "c) scribe.",
                "d) papyrus.",
                "e) ziggourat.",
              ],
            },
            {
              level: 2,
              statement: "Description d'un document : la stèle du code de Hammurabi est un bloc de pierre noire de plus de deux mètres de haut. En haut, une sculpture montre le roi Hammurabi debout devant le dieu de la justice, assis sur un trône. En dessous, des lois sont gravées en écriture cunéiforme ; elles fixent les peines pour les vols, les coups et blessures, et règlent les mariages et le commerce. Questions : a) Qui a fait graver cette stèle, où et vers quelle date ? b) Que montre la sculpture sur l'origine du pouvoir du roi ? c) Quelles caractéristiques d'un État ce document permet-il d'identifier ?",
              hint: "Pensez à la définition de l'État : qui commande, au nom de qui, et avec quels moyens ?",
              solution: [
                "a) La stèle a été gravée à la demande de Hammurabi, roi de Babylone, en Mésopotamie, vers 1750 av. J.-C.",
                "b) Le roi se tient devant le dieu de la justice : la sculpture montre que son pouvoir vient des dieux, qui l'ont chargé de faire régner la justice.",
                "c) On identifie un pouvoir (le roi), des lois écrites qui s'appliquent à toute la population, et une justice organisée. L'usage de l'écriture suppose aussi des scribes, donc une administration.",
                "Conclusion : la stèle montre un État organisé, dirigé par un roi qui gouverne par la loi au nom des dieux.",
              ],
            },
            {
              level: 3,
              statement: "Défi. a) Calculez combien de temps s'est écoulé entre les débuts de l'agriculture (vers 10 000 av. J.-C.) et l'invention de l'écriture (vers 3300 av. J.-C.). b) Calculez combien de temps s'est écoulé entre le code de Hammurabi (vers 1750 av. J.-C.) et 2026. c) Rédigez un paragraphe de cinq à six lignes qui explique comment l'agriculture a conduit à la naissance des villes, des États et de l'écriture.",
              hint: "Pour c), enchaînez les étapes avec des connecteurs logiques : grâce à, donc, c'est pourquoi, alors.",
              solution: [
                "a) Deux dates avant J.-C. : 10 000 - 3 300 = 6 700 ans environ.",
                "b) Une date avant et une date après J.-C. : 1 750 + 2 026 = 3 776 ans environ.",
                "c) Paragraphe possible : grâce à l'irrigation, les agriculteurs de Mésopotamie et d'Égypte produisent des surplus. Ces réserves permettent de nourrir des artisans, des prêtres et des soldats : les villages grandissent et deviennent des villes. Des rois prennent le pouvoir, lèvent des impôts et font des lois : ce sont les premiers États. Pour compter les récoltes et les impôts, il faut garder des traces : c'est pourquoi l'écriture est inventée, vers 3300 av. J.-C.",
                "Résultat : environ 6 700 ans séparent l'agriculture de l'écriture, et environ 3 776 ans nous séparent du code de Hammurabi.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes dans l'ordre chronologique.",
            items: [
              "Débuts de l'agriculture au Proche-Orient (vers 10 000 av. J.-C.)",
              "Invention de l'écriture cunéiforme à Uruk (vers 3300 av. J.-C.)",
              "Unification de l'Égypte sous l'autorité d'un pharaon (vers 3100 av. J.-C.)",
              "Construction de la pyramide de Khéops (vers 2560 av. J.-C.)",
              "Code de Hammurabi, roi de Babylone (vers 1750 av. J.-C.)",
              "Déchiffrement des hiéroglyphes par Champollion (1822)",
            ],
          },
          quiz: [
            {
              q: "Pourquoi l'écriture a-t-elle d'abord été inventée en Mésopotamie ?",
              options: ["Pour écrire des poèmes", "Pour compter les biens et les impôts", "Pour envoyer des lettres aux pays voisins", "Pour décorer les tombeaux"],
              answer: 1,
              why: "Les premières tablettes d'Uruk sont des comptes : sacs de grain, bétail, impôts. Les textes littéraires viennent plus tard.",
            },
            {
              q: "Entre quels fleuves se trouve la Mésopotamie ?",
              options: ["Le Nil et le Jourdain", "Le Rhin et le Danube", "Le Tigre et l'Euphrate", "Le Gange et le Brahmapoutre"],
              answer: 2,
              why: "Mésopotamie signifie « pays entre les fleuves » : le Tigre et l'Euphrate, dans l'actuel Irak.",
            },
            {
              q: "Qui sont les scribes ?",
              options: ["Des fonctionnaires qui savent écrire et compter", "Des prêtres qui dirigent la construction des pyramides", "Des soldats du pharaon", "Des paysans qui cultivent le blé"],
              answer: 0,
              why: "Les scribes tiennent les comptes, calculent les impôts et rédigent les documents de l'État.",
            },
            {
              q: "Vers quelle date l'Égypte est-elle unifiée sous l'autorité d'un pharaon ?",
              options: ["Vers 10 000 av. J.-C.", "Vers 1750 av. J.-C.", "Vers 476 apr. J.-C.", "Vers 3100 av. J.-C."],
              answer: 3,
              why: "Vers 3100 av. J.-C., la vallée du Nil forme un seul royaume dirigé par un pharaon.",
            },
            {
              q: "Lequel de ces éléments n'est pas une caractéristique d'un État ?",
              options: ["Des impôts", "Une grotte ornée", "Des lois", "Un territoire délimité"],
              answer: 1,
              why: "Un État a un territoire, des lois, des impôts et une administration ; les grottes ornées datent du Paléolithique, bien avant les États.",
            },
          ],
          trap: "Croire que l'écriture a été inventée pour raconter des histoires : elle sert d'abord à compter et à administrer (récoltes, impôts), et la littérature vient plus tard.",
          method: "Pour expliquer la naissance des États, retenez une chaîne de causes et récitez-la dans l'ordre : agriculture irriguée, surplus, villes, rois, impôts et lois, besoin de compter, écriture.",
        },
      ],
    },
    {
      id: 'representer-interet-general',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'delegues',
          title: "Élire et être délégué de classe",
          minutes: 25,
          objectives: [
            "Expliquer le rôle des délégués de classe et des autres représentants des élèves au collège.",
            "Identifier les étapes d'une élection de délégués : candidature, campagne, vote, dépouillement.",
            "Distinguer majorité absolue et majorité relative pour lire le résultat d'une élection.",
            "Argumenter pour présenter une candidature au service de la classe.",
          ],
          course: [
            {
              heading: "Le délégué, un représentant de la classe",
              paragraphs: [
                "Au début de l'année, chaque classe du collège élit ses délégués. Ce sont des élèves de la classe choisis par leurs camarades pour les représenter, c'est-à-dire pour parler et agir en leur nom auprès des adultes : le professeur principal, les autres professeurs, le conseiller principal d'éducation (CPE) et la direction du collège.",
                "Chaque classe élit deux délégués titulaires et deux délégués suppléants. Les suppléants remplacent les titulaires quand ceux-ci sont absents ou empêchés. Les délégués sont élus pour toute l'année scolaire.",
                "Être délégué, ce n'est pas devenir le chef de la classe, ni le surveillant de ses camarades. Le délégué est un porte-parole : il écoute, transmet les questions et les propositions, puis rapporte à la classe ce qui a été dit. C'est aussi un médiateur, qui aide à apaiser les désaccords.",
              ],
              box: { label: "Définition", text: "Représenter : parler et agir au nom d'un groupe, après avoir été choisi par lui. Délégué de classe : élève élu par ses camarades pour représenter la classe pendant l'année scolaire." },
            },
            {
              heading: "Les missions du délégué",
              paragraphs: [
                "Le délégué fait le lien entre les élèves et les adultes. Si la classe rencontre une difficulté (trop de contrôles le même jour, un conflit, une question sur l'emploi du temps), il en parle avec le professeur principal ou le CPE. Il peut aussi porter des propositions : organiser une sortie, améliorer la vie dans la cour, lancer une action solidaire.",
                "Le délégué participe au conseil de classe, qui se réunit à la fin de chaque trimestre ou semestre. Autour de la table se trouvent les professeurs, un membre de la direction, des représentants des parents et les délégués des élèves. On y parle du travail de la classe et de chaque élève. Avant le conseil, le délégué recueille l'avis de ses camarades ; après, il leur rend compte de ce qui a été dit, sans répéter ce qui est confidentiel.",
                "Au-delà de la classe, les délégués se réunissent en assemblée et peuvent être élus dans d'autres instances du collège : le conseil d'administration, qui vote les grandes décisions du collège comme le règlement intérieur, ou le conseil de la vie collégienne, qui fait des propositions sur la vie quotidienne des élèves. Il existe aussi des éco-délégués, qui mènent des actions pour l'environnement.",
              ],
              box: { label: "À retenir", text: "Le délégué représente la classe, porte la parole de ses camarades, participe au conseil de classe et rend compte à la classe. Il agit dans l'intérêt de tous, pas pour lui-même ni seulement pour ses amis." },
            },
            {
              heading: "Comment se déroule l'élection ?",
              paragraphs: [
                "Tous les élèves de la classe sont électeurs (ils peuvent voter) et éligibles (ils peuvent être candidats). Ceux qui le souhaitent se déclarent candidats. Pendant la campagne, chacun présente ses idées et explique pourquoi il veut représenter la classe : c'est sa profession de foi.",
                "Le vote ressemble à une vraie élection. Il est secret : chaque élève écrit son choix sur un bulletin, le plie et le dépose dans l'urne sans le montrer. Il est personnel : personne ne peut voter à la place d'un autre. Vient ensuite le dépouillement : on ouvre l'urne et on compte les voix devant la classe.",
                "On met de côté les bulletins blancs (sans aucun nom) et les bulletins nuls (par exemple illisibles, ou portant le nom d'un élève qui n'est pas candidat). Les bulletins restants sont les suffrages exprimés. Au premier tour, il faut obtenir la majorité absolue, c'est-à-dire plus de la moitié des suffrages exprimés. Si personne ne l'obtient, on organise un second tour, où la majorité relative suffit : celui qui a le plus de voix est élu.",
              ],
              box: { label: "Règle", text: "Majorité absolue : plus de la moitié des suffrages exprimés. Avec 24 suffrages exprimés, la moitié est 12 : il faut donc au moins 13 voix. Majorité relative : le plus grand nombre de voix, même sans dépasser la moitié." },
            },
            {
              heading: "Un apprentissage de la démocratie",
              paragraphs: [
                "L'élection des délégués permet d'apprendre la vie démocratique : choisir ses représentants, débattre, accepter le résultat du vote même quand son candidat n'a pas gagné. Le délégué élu représente toute la classe, y compris les élèves qui n'ont pas voté pour lui.",
                "Un bon délégué n'est pas forcément l'élève le plus populaire ni le meilleur de la classe. Il doit être disponible, savoir écouter, s'exprimer calmement, garder pour lui les informations confidentielles et défendre l'intérêt de la classe plutôt que celui de ses amis. Au début de l'année, les délégués reçoivent souvent une formation pour les aider dans leur rôle.",
              ],
              box: { label: "Repère", text: "Électeur : personne qui a le droit de voter. Éligible : personne qui a le droit d'être élue. Suffrage : voix donnée lors d'un vote. Urne : boîte où l'on dépose les bulletins. Dépouillement : comptage des bulletins." },
            },
          ],
          keyPoints: [
            "Chaque classe élit pour l'année deux délégués titulaires et deux suppléants.",
            "Le délégué est un porte-parole et un médiateur, pas un chef ni un surveillant.",
            "Il participe au conseil de classe, puis rend compte à la classe sans trahir ce qui est confidentiel.",
            "Le vote est secret et personnel ; les bulletins blancs et nuls ne font pas partie des suffrages exprimés.",
            "Premier tour : majorité absolue (plus de la moitié des suffrages exprimés). Second tour : majorité relative (le plus de voix).",
            "Une fois élu, le délégué représente toute la classe, même ceux qui n'ont pas voté pour lui.",
          ],
          example: {
            statement: "Données fictives. Dans une classe de 26 élèves, 25 élèves votent au premier tour. On compte 1 bulletin blanc. Résultats : Inès 11 voix, Malo 8 voix, Sacha 5 voix. Inès est-elle élue dès le premier tour ?",
            solution: [
              "Calculer les suffrages exprimés : on retire le bulletin blanc des 25 bulletins, soit 25 - 1 = 24 suffrages exprimés.",
              "Vérifier : 11 + 8 + 5 = 24. Le total des voix correspond bien aux suffrages exprimés.",
              "Calculer le seuil de la majorité absolue : la moitié de 24 est 12 ; il faut donc plus de 12 voix, c'est-à-dire au moins 13 voix.",
              "Comparer : Inès a 11 voix, moins que 13. Elle n'a pas la majorité absolue.",
              "Réponse : Inès n'est pas élue au premier tour, même si elle arrive en tête. Il faut organiser un second tour, où la majorité relative suffira.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez chaque phrase avec le bon mot : électeur ; éligible ; urne ; suppléant ; dépouillement ; conseil de classe. a) Un élève qui a le droit de voter est un ... b) Un élève qui a le droit d'être candidat est ... c) On dépose son bulletin dans l'... d) Le comptage des bulletins s'appelle le ... e) Le délégué qui remplace un titulaire absent est le ... f) La réunion de fin de trimestre où l'on parle du travail des élèves est le ...",
              hint: "Relisez l'encadré « Repère » du cours et les missions du délégué.",
              solution: [
                "a) électeur.",
                "b) éligible.",
                "c) urne.",
                "d) dépouillement.",
                "e) suppléant.",
                "f) conseil de classe.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Une classe compte 27 élèves ; 26 votent au premier tour. Le dépouillement donne 1 bulletin blanc, 1 bulletin nul, Léa 12 voix, Noah 9 voix et Jade 3 voix. a) Combien d'élèves n'ont pas voté ? b) Combien y a-t-il de suffrages exprimés ? c) Léa est-elle élue au premier tour ? Justifiez. d) Au second tour, avec 24 suffrages exprimés, Léa obtient 13 voix et Noah 11 voix. Qui est élu ?",
              hint: "Retirez les bulletins blancs et nuls avant tout calcul, puis cherchez la moitié des suffrages exprimés.",
              solution: [
                "a) 27 - 26 = 1 élève n'a pas voté.",
                "b) 26 - 1 - 1 = 24 suffrages exprimés. Vérification : 12 + 9 + 3 = 24.",
                "c) La moitié de 24 est 12. Léa a exactement 12 voix : ce n'est pas plus de la moitié. Elle n'a pas la majorité absolue et n'est donc pas élue au premier tour.",
                "d) Au second tour, la majorité relative suffit. Léa a 13 voix, Noah 11 : Léa a le plus de voix.",
                "Résultat : 1 abstention, 24 suffrages exprimés, pas d'élu au premier tour, Léa élue au second tour.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Un candidat a écrit ces promesses : 1) « Je supprimerai les contrôles du vendredi. » 2) « Je transmettrai vos questions au professeur principal. » 3) « Je défendrai seulement mes amis. » 4) « Je proposerai une collecte pour une association. » 5) « Je raconterai à tout le monde ce qui a été dit sur chaque élève au conseil de classe. » a) Quelles promesses un délégué peut-il tenir ? Lesquelles sont impossibles ou contraires à son rôle ? Justifiez. b) Rédigez une profession de foi de six à huit lignes pour votre propre candidature, avec trois propositions réalistes.",
              hint: "Demandez-vous pour chaque promesse : le délégué a-t-il ce pouvoir ? Agit-il pour toute la classe ? Respecte-t-il la confidentialité ?",
              solution: [
                "Promesse 1 : impossible. Le délégué n'a pas le pouvoir de décider des contrôles ; il peut seulement signaler aux professeurs une surcharge de travail.",
                "Promesse 2 : possible. C'est le cœur de son rôle de porte-parole.",
                "Promesse 3 : contraire à son rôle. Le délégué représente toute la classe, pas un groupe d'amis.",
                "Promesse 4 : possible. Il peut proposer une action solidaire, qui sera discutée avec les adultes et la classe.",
                "Promesse 5 : contraire à son rôle. Ce qui concerne un élève en particulier au conseil de classe est confidentiel ; le délégué rend compte de l'avis général sur la classe.",
                "b) Exemple de profession de foi : « Je me présente pour être votre délégué parce que j'aime écouter et que je sais parler calmement. Si je suis élu, je ferai remonter vos questions au professeur principal chaque mois. Je préparerai chaque conseil de classe en vous demandant votre avis. Je proposerai aussi une action pour mieux trier les déchets du collège. Je représenterai toute la classe, que vous ayez voté pour moi ou non. »",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot de l'élection à sa définition.",
            pairs: [
              { left: "Électeur", right: "Personne qui a le droit de voter" },
              { left: "Éligible", right: "Personne qui a le droit d'être élue" },
              { left: "Suppléant", right: "Délégué qui remplace le titulaire absent" },
              { left: "Dépouillement", right: "Comptage des bulletins après le vote" },
              { left: "Suffrages exprimés", right: "Bulletins valables, sans les blancs ni les nuls" },
              { left: "Majorité absolue", right: "Plus de la moitié des suffrages exprimés" },
            ],
          },
          quiz: [
            {
              q: "Combien de délégués titulaires chaque classe élit-elle ?",
              options: ["Un seul", "Deux", "Quatre", "Toute la classe"],
              answer: 1,
              why: "Chaque classe élit deux délégués titulaires, ainsi que deux suppléants qui les remplacent en cas d'absence.",
            },
            {
              q: "Avec 20 suffrages exprimés, combien de voix faut-il au minimum pour avoir la majorité absolue ?",
              options: ["10 voix", "20 voix", "11 voix", "Le plus grand nombre de voix"],
              answer: 2,
              why: "La moitié de 20 est 10 ; il faut plus de la moitié, donc au moins 11 voix.",
            },
            {
              q: "Que fait le délégué au conseil de classe ?",
              options: ["Il décide seul des notes de ses camarades", "Il punit les élèves bavards", "Il remplace le professeur principal", "Il exprime l'avis de la classe"],
              answer: 3,
              why: "Le délégué est un porte-parole : il exprime l'avis de la classe, puis rend compte à ses camarades.",
            },
            {
              q: "Pourquoi le vote est-il secret ?",
              options: ["Pour voter librement, sans pression", "Pour gagner du temps au dépouillement", "Parce que les résultats ne sont jamais annoncés", "Pour que le professeur choisisse à la place des élèves"],
              answer: 0,
              why: "Le secret du vote protège la liberté de chacun : personne ne peut savoir ni influencer ce que l'on a choisi.",
            },
            {
              q: "Comment appelle-t-on un bulletin qui ne porte aucun nom ?",
              options: ["Un bulletin nul", "Un suffrage exprimé", "Un bulletin blanc", "Un bulletin suppléant"],
              answer: 2,
              why: "Un bulletin sans aucun nom est un bulletin blanc ; comme les bulletins nuls, il ne compte pas dans les suffrages exprimés.",
            },
          ],
          trap: "Confondre majorité absolue et majorité relative : un candidat qui obtient exactement la moitié des suffrages exprimés n'a pas la majorité absolue, il en faut plus de la moitié. Autre erreur fréquente : oublier de retirer les bulletins blancs et nuls avant de calculer.",
          method: "Pour lire un résultat d'élection, suivez toujours le même ordre : nombre de votants, moins les blancs et les nuls, ce qui donne les suffrages exprimés ; puis la moitié des suffrages exprimés ; enfin, comparez chaque score à ce seuil.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'interet-general',
          title: "Intérêt général et intérêts particuliers",
          minutes: 25,
          objectives: [
            "Définir l'intérêt général et le distinguer des intérêts particuliers.",
            "Identifier des situations où l'intérêt général et des intérêts particuliers s'opposent.",
            "Expliquer comment les services publics et les citoyens engagés servent l'intérêt général.",
            "Argumenter dans un débat en tenant compte de l'intérêt de tous.",
          ],
          course: [
            {
              heading: "Intérêt particulier et intérêt général",
              paragraphs: [
                "Un intérêt particulier est ce qui est avantageux pour une personne ou pour un petit groupe. Vouloir la place près de la fenêtre, souhaiter des frites tous les jours à la cantine, désirer une place de stationnement devant sa maison : ce sont des intérêts particuliers. Ils sont normaux, car chacun a des besoins et des envies.",
                "L'intérêt général est ce qui est bon pour l'ensemble d'une communauté : la classe, le collège, la commune, le pays. Ce n'est pas l'addition de tous les désirs de chacun, ni forcément ce que veut le plus grand nombre à un moment donné. C'est ce qui permet à tous de bien vivre ensemble, aujourd'hui et demain, en pensant aussi aux plus fragiles.",
              ],
              box: { label: "Définition", text: "Intérêt particulier : ce qui profite à une personne ou à un groupe. Intérêt général : ce qui profite à l'ensemble de la communauté, au-delà des intérêts de chacun." },
            },
            {
              heading: "Quand les intérêts s'opposent",
              paragraphs: [
                "Prenons un exemple. Une commune veut transformer une rue en piste cyclable avec des trottoirs plus larges. Les parents d'élèves sont satisfaits, car le chemin de l'école sera plus sûr. Certains commerçants s'inquiètent, car leurs clients ne pourront plus se garer devant la boutique. Chaque groupe défend son intérêt particulier, et chacun a de bonnes raisons.",
                "Pour décider, il faut écouter tous les points de vue, débattre, puis chercher ce qui sert le mieux l'ensemble des habitants, sans ignorer ceux qui subissent des inconvénients. On trouve souvent un compromis : par exemple, garder quelques places pour les livraisons. Dans une démocratie, ce sont les représentants élus, ici le conseil municipal, qui tranchent après ce débat, et ils en rendent compte aux citoyens.",
                "Au collège aussi, les intérêts s'opposent parfois. Un élève qui bavarde suit son envie du moment, mais il gêne le droit de toute la classe à apprendre. Le règlement intérieur fixe des règles qui protègent l'intérêt de toute la communauté scolaire.",
              ],
              box: { label: "À retenir", text: "Servir l'intérêt général ne veut pas dire ignorer les intérêts particuliers : il faut les écouter, les comparer et chercher la solution la plus juste pour tous." },
            },
            {
              heading: "Les services publics au service de tous",
              paragraphs: [
                "L'État et les collectivités territoriales (communes, départements, régions) organisent des services publics : l'école, les hôpitaux, la police et la gendarmerie, les pompiers, l'entretien des routes, la collecte des déchets, les bibliothèques. Ils répondent aux besoins de toute la population et sont ouverts à tous, sans distinction.",
                "Ces services sont financés en grande partie par les impôts. La Déclaration des droits de l'homme et du citoyen de 1789 prévoit déjà que chacun contribue aux dépenses communes selon ses moyens. Ainsi, une personne sans enfant paie aussi pour l'école, car l'instruction de tous les enfants est utile à toute la société. Les agents publics, qui travaillent dans ces services, doivent servir l'intérêt général et non leur intérêt personnel.",
              ],
              box: { label: "Définition", text: "Service public : activité organisée par l'État ou par une collectivité pour répondre à un besoin de toute la population, par exemple l'école, la santé ou la sécurité." },
            },
            {
              heading: "S'engager pour les autres",
              paragraphs: [
                "Servir l'intérêt général n'est pas réservé aux élus et aux agents publics. Beaucoup de citoyens s'engagent librement, sans être payés : ce sont les bénévoles. Ils agissent dans des associations qui distribuent des repas, aident aux devoirs, protègent la nature ou entraînent des jeunes dans un club de sport. En France, la grande majorité des sapeurs-pompiers sont des volontaires, qui ont un autre métier à côté.",
                "Au collège, on peut aussi s'engager : être délégué ou éco-délégué, participer au conseil de la vie collégienne, aider un camarade en difficulté, prendre soin du matériel commun. Plus tard, les jeunes de 16 à 25 ans peuvent faire un service civique, une mission utile à la société, par exemple dans une association ou une collectivité.",
              ],
              box: { label: "Repère", text: "Bénévole : personne qui donne de son temps gratuitement. Association : groupe de personnes réunies autour d'un projet commun, sans chercher à faire des bénéfices ; en France, la liberté d'association est garantie par la loi de 1901." },
            },
          ],
          keyPoints: [
            "Intérêt particulier : ce qui profite à une personne ou à un groupe.",
            "Intérêt général : ce qui profite à toute la communauté, aujourd'hui et demain.",
            "Quand les intérêts s'opposent, on débat et on cherche un compromis ; les élus tranchent et rendent des comptes.",
            "Les services publics (école, hôpital, pompiers, police...) servent l'intérêt général et sont financés par les impôts.",
            "Bénévoles, volontaires, délégués : chacun peut s'engager au service des autres.",
          ],
          example: {
            statement: "Une commune possède un terrain libre près du collège. Trois projets sont proposés : A) un parking réservé aux habitants d'un immeuble voisin ; B) un gymnase ouvert aux écoles, au collège et aux clubs de sport ; C) un magasin qui appartiendrait à une seule entreprise. Quel projet sert le mieux l'intérêt général ? Justifiez.",
            solution: [
              "Identifier à qui profite chaque projet. A profite seulement aux habitants d'un immeuble. C profite surtout à une entreprise, même s'il peut créer quelques emplois.",
              "B profite à un grand nombre d'habitants : les élèves des écoles et du collège, les membres des clubs, et donc beaucoup de familles de la commune.",
              "Repérer les inconvénients : B coûtera de l'argent public et les habitants de l'immeuble perdront l'espoir d'un parking. On peut chercher un compromis, par exemple quelques places de stationnement à côté du gymnase.",
              "Réponse : le projet B sert le mieux l'intérêt général, car il répond à un besoin partagé par toute la commune ; les projets A et C servent surtout des intérêts particuliers.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque situation, dites s'il s'agit surtout d'un intérêt particulier ou de l'intérêt général. a) Un élève veut s'asseoir à côté de son meilleur ami. b) La commune installe un passage piéton devant l'école. c) Un habitant veut que le bus s'arrête juste devant chez lui. d) Le collège organise la collecte des piles usagées. e) Une famille souhaite agrandir sa maison. f) L'hôpital ouvre un service d'urgences pour enfants.",
              hint: "Demandez-vous à qui profite chaque action : à une personne, ou à toute une communauté ?",
              solution: [
                "a) Intérêt particulier : cela ne concerne que l'élève et son ami.",
                "b) Intérêt général : la sécurité de tous les enfants et de leurs parents.",
                "c) Intérêt particulier : cela profite surtout à cet habitant.",
                "d) Intérêt général : la protection de l'environnement profite à tous.",
                "e) Intérêt particulier : cela concerne une seule famille.",
                "f) Intérêt général : tous les enfants de la région peuvent être soignés.",
              ],
            },
            {
              level: 2,
              statement: "Une commune veut agrandir l'école primaire, devenue trop petite, en construisant sur une partie du terrain de football municipal. Le club de football proteste : il perdrait un terrain d'entraînement. Les parents d'élèves sont favorables. a) Quels sont les acteurs et leurs intérêts ? b) Pourquoi le projet de la commune peut-il être considéré comme d'intérêt général ? c) Proposez un compromis. d) Qui prendra la décision finale ?",
              hint: "Faites un petit tableau : qui ? que veut-il ? pourquoi ? Puis cherchez une solution qui prenne en compte les deux camps.",
              solution: [
                "a) La commune veut accueillir tous les enfants dans de bonnes conditions. Les parents veulent des classes moins chargées pour leurs enfants. Le club veut garder son terrain pour ses entraînements.",
                "b) L'école est un service public qui concerne tous les enfants de la commune, aujourd'hui et dans les années à venir : l'agrandir répond à un besoin de toute la population.",
                "c) Compromis possible : la commune construit sur une petite partie du terrain et aide le club à aménager un autre terrain, ou lui réserve plus de créneaux dans le gymnase.",
                "d) La décision finale revient au conseil municipal, élu par les habitants, après avoir écouté les différents points de vue.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Préparez un débat sur la question : « Faut-il interdire les voitures devant le collège aux heures d'entrée et de sortie des élèves ? » a) Donnez deux arguments pour et deux arguments contre, en précisant quel intérêt chacun défend. b) Rédigez une conclusion de quatre à cinq lignes qui donne votre avis en tenant compte de l'intérêt général.",
              hint: "Pensez à la sécurité, à la pollution, mais aussi aux parents qui travaillent loin, aux élèves en situation de handicap et aux riverains.",
              solution: [
                "Arguments pour : 1) la sécurité des élèves, qui traversent la rue nombreux à ces heures (intérêt général) ; 2) moins de pollution et de bruit devant le collège (intérêt général, santé de tous).",
                "Arguments contre : 1) des parents qui travaillent loin perdraient du temps pour déposer leur enfant (intérêt particulier légitime) ; 2) les élèves en situation de handicap ont besoin d'être déposés tout près (intérêt de personnes fragiles, qu'il faut protéger).",
                "Conclusion possible : interdire les voitures aux heures d'entrée et de sortie sert l'intérêt général, car la sécurité et la santé des élèves passent en premier. Mais cette règle doit prévoir des exceptions pour les élèves en situation de handicap et s'accompagner de solutions, comme une zone de dépose un peu plus loin et des trajets à pied ou à vélo mieux sécurisés.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos idées sur l'intérêt général.",
            statements: [
              { text: "L'intérêt général, c'est l'addition de tous les désirs individuels.", true: false, why: "Les désirs de chacun peuvent s'opposer ; l'intérêt général est ce qui profite à toute la communauté." },
              { text: "Avoir des intérêts particuliers est interdit.", true: false, why: "Les intérêts particuliers sont normaux ; ils doivent seulement être conciliés avec l'intérêt de tous." },
              { text: "Les services publics sont financés en grande partie par les impôts.", true: true, why: "Les impôts payés par les habitants et les entreprises financent l'école, les hôpitaux, la sécurité..." },
              { text: "Une personne sans enfant ne paie rien pour l'école publique.", true: false, why: "Elle paie des impôts, qui financent l'école : l'instruction de tous est utile à toute la société." },
              { text: "Un bénévole donne de son temps sans être payé.", true: true, why: "Le bénévolat est un engagement libre et gratuit, souvent dans une association." },
              { text: "Dans une commune, c'est le conseil municipal élu qui tranche entre les intérêts.", true: true, why: "Les élus décident au nom des habitants, après le débat, et doivent leur rendre des comptes." },
            ],
          },
          quiz: [
            {
              q: "Lequel de ces projets sert le mieux l'intérêt général ?",
              options: ["Une piscine privée pour une famille", "Un nouvel hôpital", "Un parking réservé à un immeuble", "Une boutique de luxe"],
              answer: 1,
              why: "Un hôpital est un service public qui peut soigner toute la population.",
            },
            {
              q: "Qu'est-ce qu'un intérêt particulier ?",
              options: ["Ce qui profite à une personne ou à un groupe", "Ce que le maire décide pour l'ensemble de sa commune", "Une règle du collège", "Un impôt"],
              answer: 0,
              why: "Un intérêt particulier est l'avantage d'une personne ou d'un groupe, par opposition à celui de toute la communauté.",
            },
            {
              q: "Comment sont financés en grande partie les services publics ?",
              options: ["Par les dons des élèves", "Par les associations", "Par les impôts", "Par la vente de billets de loterie"],
              answer: 2,
              why: "Les impôts, payés selon les moyens de chacun, financent l'école, les hôpitaux, la sécurité et bien d'autres services.",
            },
            {
              q: "Quand deux intérêts s'opposent, que faut-il chercher en priorité ?",
              options: ["Donner raison à celui qui crie le plus fort", "Tirer au sort", "Abandonner le projet dans tous les cas", "Un compromis juste pour tous"],
              answer: 3,
              why: "On écoute chaque point de vue et on cherche un compromis qui serve au mieux toute la communauté.",
            },
            {
              q: "Comment appelle-t-on une personne qui s'engage gratuitement dans une association ?",
              options: ["Un fonctionnaire", "Un bénévole", "Un délégué", "Un électeur"],
              answer: 1,
              why: "Le bénévole donne son temps sans être payé, par exemple pour aider aux devoirs ou distribuer des repas.",
            },
          ],
          trap: "Croire que l'intérêt général est simplement ce que veut la majorité, ou l'addition des envies de chacun : il s'agit de ce qui profite à toute la communauté, y compris aux plus fragiles et aux générations futures.",
          method: "Face à une situation, posez-vous trois questions : qui est concerné ? à qui la décision profite-t-elle ? qui en subirait les inconvénients ? Si la décision profite à tous, ou protège ceux qui en ont le plus besoin, elle sert l'intérêt général.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vote-representation',
          title: "Voter et être représenté dans une démocratie",
          minutes: 30,
          objectives: [
            "Expliquer ce qu'est une démocratie représentative et le rôle des représentants élus.",
            "Identifier les conditions pour voter en France et les principes du vote : universel, égal, libre et secret.",
            "Citer les principales élections et les représentants qu'elles désignent, de la commune à l'État.",
            "Comprendre que voter est un droit et un devoir civique.",
          ],
          course: [
            {
              heading: "La démocratie, le pouvoir du peuple",
              paragraphs: [
                "Le mot démocratie vient du grec dêmos, le peuple, et kratos, le pouvoir : c'est un régime politique où le pouvoir appartient au peuple, c'est-à-dire à l'ensemble des citoyens. Dans l'Athènes antique, que vous étudierez cette année, les citoyens votaient eux-mêmes les lois en assemblée : c'était une démocratie directe.",
                "Dans un grand pays comme la France, des dizaines de millions de citoyens ne peuvent pas se réunir pour discuter chaque loi. Ils élisent donc des représentants, qui décident en leur nom pendant une durée limitée : c'est la démocratie représentative. La Constitution de la Ve République, adoptée en 1958, affirme dans son article 3 : « La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum. »",
                "Le référendum est un vote où les citoyens répondent eux-mêmes par oui ou par non à une question. C'est une forme de démocratie directe, qui existe aussi en France mais reste rare.",
              ],
              box: { label: "Définition", text: "Démocratie : régime politique où le pouvoir appartient aux citoyens. Démocratie représentative : les citoyens élisent des représentants qui décident en leur nom pour une durée limitée." },
            },
            {
              heading: "Qui peut voter, et comment ?",
              paragraphs: [
                "En France, pour voter, il faut avoir la nationalité française, avoir au moins 18 ans, être inscrit sur les listes électorales et ne pas avoir été privé de ses droits civiques par un juge. Les jeunes qui ont fait leur recensement sont inscrits automatiquement à 18 ans. Les citoyens des autres pays de l'Union européenne qui habitent en France peuvent voter aux élections municipales et européennes.",
                "Ce droit a été conquis peu à peu. Le suffrage universel masculin est établi en 1848. Les femmes obtiennent le droit de vote en 1944 et votent pour la première fois en 1945. En 1974, l'âge de la majorité, et donc du droit de vote, passe de 21 à 18 ans.",
                "Selon la Constitution, le suffrage est universel, égal et secret : tous les citoyens qui remplissent les conditions peuvent voter, chaque voix compte autant que les autres, et personne ne doit connaître le choix d'un électeur. Le vote est aussi libre : personne ne peut être forcé à voter pour quelqu'un. Le jour du vote, l'électeur prend des bulletins et une enveloppe, passe dans l'isoloir, glisse l'enveloppe dans l'urne transparente et signe la liste d'émargement.",
              ],
              box: { label: "Règle", text: "Pour voter en France : être de nationalité française, avoir 18 ans, être inscrit sur les listes électorales, jouir de ses droits civiques. Le suffrage est universel, égal et secret." },
            },
            {
              heading: "De la commune à l'État : qui élit-on ?",
              paragraphs: [
                "Dans la commune, les électeurs élisent le conseil municipal pour 6 ans ; les conseillers municipaux élisent ensuite le maire. Le maire et son conseil s'occupent de la vie quotidienne : écoles primaires, cantines, rues, équipements sportifs, état civil. C'est l'élection la plus proche des habitants.",
                "Au niveau national, les citoyens élisent le président de la République pour 5 ans, au suffrage universel direct. Ils élisent aussi les 577 députés, pour 5 ans : ils siègent à l'Assemblée nationale et votent les lois avec les sénateurs. Les sénateurs, eux, ne sont pas élus directement par les citoyens, mais par des élus, comme les conseillers municipaux : c'est un suffrage indirect.",
                "Il existe aussi des élections pour le département et la région, tous les 6 ans, et les élections européennes, qui désignent tous les 5 ans les députés français au Parlement européen.",
              ],
              box: { label: "Repère", text: "Conseil municipal : 6 ans, il élit le maire. Président de la République : 5 ans, suffrage universel direct. Députés (577) : 5 ans. Sénateurs : élus par des élus. Députés européens : 5 ans." },
            },
            {
              heading: "Voter, un droit et un devoir civique",
              paragraphs: [
                "En France, le vote n'est pas obligatoire, mais c'est un devoir civique : en votant, chacun participe aux choix qui concernent tout le monde. Quand un électeur inscrit ne vote pas, on parle d'abstention. Une forte abstention affaiblit la démocratie, car les élus sont alors choisis par une partie seulement des citoyens.",
                "Être représenté ne veut pas dire tout laisser faire aux élus. Les citoyens peuvent les rencontrer, leur écrire, s'informer de leurs décisions, signer des pétitions ou manifester pacifiquement. Les élus doivent rendre des comptes : s'ils déçoivent, les électeurs peuvent en choisir d'autres à l'élection suivante. Dans beaucoup de communes, un conseil municipal des jeunes permet même aux collégiens de proposer des projets.",
              ],
              box: { label: "À retenir", text: "Voter est un droit conquis au fil de l'histoire et un devoir civique. Les élus représentent tous les citoyens, qui gardent le pouvoir de les juger à l'élection suivante." },
            },
          ],
          keyPoints: [
            "Démocratie : le pouvoir appartient au peuple. En France, il s'exerce surtout par des représentants élus (démocratie représentative).",
            "Pour voter : nationalité française, 18 ans, inscription sur les listes électorales, droits civiques.",
            "Dates : suffrage universel masculin en 1848, vote des femmes en 1944 (premier vote en 1945), majorité à 18 ans en 1974.",
            "Le suffrage est universel, égal et secret ; le vote est libre.",
            "Commune : conseil municipal (6 ans), qui élit le maire. Pays : président (5 ans), 577 députés (5 ans), sénateurs élus par des élus.",
            "Voter n'est pas obligatoire mais c'est un devoir civique ; ne pas voter, c'est s'abstenir.",
          ],
          example: {
            statement: "Expliquez la différence entre démocratie directe et démocratie représentative, en donnant un exemple de chacune.",
            solution: [
              "Rappeler la définition commune : dans une démocratie, le pouvoir appartient aux citoyens.",
              "Démocratie directe : les citoyens décident eux-mêmes. Exemples : dans l'Athènes antique, les citoyens votaient les lois en assemblée ; en France aujourd'hui, le référendum permet aux citoyens de répondre eux-mêmes à une question.",
              "Démocratie représentative : les citoyens élisent des représentants qui décident en leur nom. Exemple : les électeurs élisent les 577 députés, qui votent les lois à l'Assemblée nationale.",
              "Conclusion : la différence tient à qui prend la décision, les citoyens eux-mêmes ou leurs représentants élus. La France est surtout une démocratie représentative, avec une part de démocratie directe grâce au référendum.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Complétez : a) Pour voter en France, il faut avoir au moins ... ans. b) Le maire est élu par ... c) Le président de la République est élu pour ... ans. d) Les ... siègent à l'Assemblée nationale. e) Les femmes votent pour la première fois en France en ... f) Ne pas voter quand on est inscrit s'appelle l'...",
              hint: "Relisez les encadrés « Règle » et « Repère » du cours.",
              solution: [
                "a) 18 ans.",
                "b) le conseil municipal.",
                "c) 5 ans.",
                "d) députés.",
                "e) 1945.",
                "f) abstention.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Dans la commune de Valbourg, 10 000 électeurs sont inscrits. Le jour de l'élection municipale, 6 000 votent. On compte 200 bulletins blancs ou nuls. La liste A obtient 3 100 voix et la liste B 2 700 voix. a) Combien d'électeurs se sont abstenus ? b) Sur 100 inscrits, combien ont voté ? c) Combien y a-t-il de suffrages exprimés ? d) Une liste a-t-elle obtenu la majorité absolue ?",
              hint: "Abstentions = inscrits - votants. Suffrages exprimés = votants - blancs et nuls. Pour b), divisez par 100 les deux nombres.",
              solution: [
                "a) 10 000 - 6 000 = 4 000 électeurs se sont abstenus.",
                "b) 6 000 votants sur 10 000 inscrits, c'est 60 sur 100 : la participation est de 60 %, et l'abstention de 40 %.",
                "c) 6 000 - 200 = 5 800 suffrages exprimés. Vérification : 3 100 + 2 700 = 5 800.",
                "d) La moitié de 5 800 est 2 900. La liste A a 3 100 voix, plus que 2 900 : elle a la majorité absolue.",
                "Résultat : 4 000 abstentions, 60 % de participation, 5 800 suffrages exprimés ; la liste A remporte l'élection avec la majorité absolue et aura la majorité au conseil municipal.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Votre cousin de 18 ans vous dit : « Je ne vais pas voter, ma voix toute seule ne changera rien. » Rédigez une réponse argumentée de huit à dix lignes pour le convaincre. Utilisez au moins un argument historique, un argument sur le fonctionnement de la démocratie et un exemple concret de décision prise par des élus.",
              hint: "Pensez aux dates de conquête du droit de vote, au rôle des élus et à ce que décide une commune au quotidien.",
              solution: [
                "Argument historique : le droit de vote a été conquis peu à peu ; les hommes l'obtiennent pour tous en 1848, les femmes seulement en 1944. Des citoyens se sont battus pour ce droit : ne pas l'utiliser, c'est le négliger.",
                "Argument sur la démocratie : chaque voix compte autant que les autres et une élection se joue parfois à quelques voix. Si beaucoup de citoyens raisonnaient ainsi, les élus sont choisis par une petite partie de la population, et la démocratie s'affaiblit.",
                "Exemple concret : le conseil municipal décide de la cantine, des équipements sportifs, de l'entretien des rues. Voter, c'est donner son avis sur ces choix qui touchent la vie de tous les jours.",
                "Conclusion possible : voter n'est pas obligatoire, mais c'est un devoir civique ; en votant, on participe aux décisions au lieu de les laisser aux autres.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez dans l'ordre chronologique les étapes de la conquête du droit de vote en France.",
            items: [
              "Révolution française et Déclaration des droits de l'homme et du citoyen (1789)",
              "Suffrage universel masculin (1848)",
              "Droit de vote accordé aux femmes (1944)",
              "Premier vote des femmes en France (1945)",
              "Constitution de la Ve République (1958)",
              "Droit de vote à 18 ans au lieu de 21 ans (1974)",
            ],
          },
          quiz: [
            {
              q: "Que signifie le mot « démocratie » ?",
              options: ["Le pouvoir d'un seul", "Le pouvoir du peuple", "Le pouvoir des plus riches", "Le pouvoir des dieux"],
              answer: 1,
              why: "Démocratie vient du grec dêmos, le peuple, et kratos, le pouvoir.",
            },
            {
              q: "Qui élit le maire d'une commune ?",
              options: ["Le président de la République", "Les députés", "Les conseillers municipaux", "Le préfet"],
              answer: 2,
              why: "Les électeurs élisent le conseil municipal, puis les conseillers municipaux élisent le maire.",
            },
            {
              q: "En quelle année les femmes obtiennent-elles le droit de vote en France ?",
              options: ["1944", "1789", "1848", "1974"],
              answer: 0,
              why: "Les femmes obtiennent le droit de vote en 1944 et votent pour la première fois en 1945.",
            },
            {
              q: "Combien y a-t-il de députés à l'Assemblée nationale ?",
              options: ["100", "348", "1 000", "577"],
              answer: 3,
              why: "L'Assemblée nationale compte 577 députés, élus pour 5 ans au suffrage universel direct.",
            },
            {
              q: "Comment appelle-t-on le fait, pour un électeur inscrit, de ne pas voter ?",
              options: ["Le suffrage", "L'abstention", "Le référendum", "L'émargement"],
              answer: 1,
              why: "Ne pas voter quand on est inscrit, c'est s'abstenir ; une forte abstention affaiblit la démocratie.",
            },
          ],
          trap: "Croire que les citoyens élisent directement le maire ou les sénateurs : le maire est élu par le conseil municipal, et les sénateurs par des élus. Autre confusion fréquente : penser que le vote est obligatoire en France, alors qu'il est un droit et un devoir civique.",
          method: "Pour retenir les élections, construisez un tableau à quatre colonnes : qui est élu, par qui, pour combien de temps, pour quoi faire. Récitez-le en partant de la commune, la plus proche de vous, jusqu'à l'État.",
        },
      ],
    },
    {
      id: 'habiter-metropole',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'metropoles-habitants',
          title: "Les métropoles et leurs habitants",
          minutes: 30,
          objectives: [
            "Définir une ville, une métropole et une mégapole, et localiser de grandes métropoles sur un planisphère.",
            "Décrire l'organisation d'une métropole : centre, banlieues, espaces périurbains.",
            "Expliquer pourquoi les métropoles attirent de nombreux habitants.",
            "Comparer une métropole d'un pays riche et une métropole d'un pays émergent.",
          ],
          course: [
            {
              heading: "Un monde de plus en plus urbain",
              paragraphs: [
                "Une ville est un espace où vivent de nombreux habitants, dans des immeubles et des maisons proches les uns des autres, et où l'on travaille surtout dans le commerce, les services et l'industrie, plutôt que dans l'agriculture. Les habitants des villes sont appelés des citadins.",
                "Selon l'Organisation des Nations unies (ONU), plus de la moitié de l'humanité vit en ville depuis la fin des années 2000. Cette part continue d'augmenter, et l'ONU estime qu'environ deux humains sur trois pourraient vivre en ville en 2050. En France aussi, la grande majorité de la population vit dans une ville ou dans les communes qui l'entourent.",
                "En géographie, habiter ne veut pas seulement dire avoir un logement. Habiter un lieu, c'est y vivre au quotidien : s'y loger, y travailler, s'y déplacer, s'y divertir. Dans ce chapitre, vous allez découvrir comment les êtres humains habitent les très grandes villes.",
              ],
              box: { label: "Définition", text: "Urbanisation : augmentation de la part de la population qui vit en ville. Citadin : habitant d'une ville." },
            },
            {
              heading: "Qu'est-ce qu'une métropole ?",
              paragraphs: [
                "Une métropole est une très grande ville qui concentre une population nombreuse, beaucoup d'emplois et des fonctions importantes : sièges d'entreprises, banques, universités, grands hôpitaux, musées, aéroport international. Elle attire et organise un vaste territoire autour d'elle, et parfois le monde entier. En France, le mot désigne aussi un regroupement de communes autour d'une grande ville, comme la Métropole de Lyon.",
                "Les métropoles de plus de 10 millions d'habitants sont appelées des mégapoles. Tokyo, au Japon, compte plus de 30 millions d'habitants avec ses banlieues. Les mégapoles sont nombreuses en Asie (Delhi, Shanghai, Mumbai, Jakarta), mais on en trouve aussi en Amérique (Mexico, São Paulo, New York) et en Afrique (Le Caire, Lagos).",
                "En France, Paris est la seule métropole de rang mondial : elle rayonne sur toute la planète par ses entreprises, sa culture et son tourisme. Lyon, Marseille, Lille ou Toulouse sont des métropoles plus petites, qui dominent leur région.",
              ],
              box: { label: "Définition", text: "Métropole : très grande ville qui concentre les habitants, les emplois et les fonctions de commandement, et qui attire un vaste territoire. Mégapole : métropole de plus de 10 millions d'habitants." },
            },
            {
              heading: "L'organisation d'une métropole",
              paragraphs: [
                "Au centre se trouve souvent le quartier le plus ancien, avec des monuments, des commerces, des lieux de pouvoir et de culture. Beaucoup de métropoles ont aussi un quartier d'affaires, couvert de tours de bureaux, appelé CBD (de l'anglais central business district) : c'est Manhattan à New York, ou La Défense, à l'ouest de Paris.",
                "Autour du centre s'étendent les banlieues : ce sont des communes qui touchent la ville-centre, avec des grands ensembles d'immeubles, des quartiers de pavillons, des zones industrielles et commerciales. La ville-centre et ses banlieues forment l'agglomération, un espace bâti continu.",
                "Plus loin, dans l'espace périurbain, la ville se mêle à la campagne : lotissements de maisons individuelles, villages qui grandissent, zones commerciales au bord des routes. Beaucoup d'habitants y vivent et vont chaque jour travailler dans l'agglomération. Quand la ville s'étend ainsi sur les champs et les forêts, on parle d'étalement urbain.",
              ],
              box: { label: "Repère", text: "Du centre vers l'extérieur : centre-ville et quartier d'affaires, puis banlieues (avec la ville-centre, elles forment l'agglomération), puis espace périurbain, puis espace rural." },
            },
            {
              heading: "Pourquoi les métropoles attirent-elles ?",
              paragraphs: [
                "Les métropoles attirent parce qu'elles offrent des emplois nombreux et variés, des écoles, des universités, des hôpitaux et des loisirs. Des habitants des campagnes s'y installent pour trouver du travail et une vie meilleure : c'est l'exode rural. Des migrants venus d'autres pays y arrivent aussi. Enfin, dans de nombreux pays, il naît en ville plus d'enfants qu'il ne meurt de personnes, ce qui fait encore grandir la population.",
                "Mumbai, en Inde, en est un exemple. C'est la capitale économique du pays, avec un grand port, la bourse, des sièges d'entreprises et les studios de cinéma de Bollywood. Son agglomération compte environ 20 millions d'habitants, et de nouveaux arrivants viennent de toute l'Inde. Beaucoup ne trouvent pas de logement et s'installent dans des bidonvilles, comme Dharavi, l'un des plus grands d'Asie : sur environ 2 km², des centaines de milliers de personnes y vivent et y travaillent.",
                "Dans les pays riches, comme la France, les métropoles grandissent plus lentement et presque tous les habitants ont accès à l'eau courante et à l'électricité. Dans beaucoup de pays émergents ou pauvres, les métropoles grandissent très vite et les inégalités sont plus visibles : des tours modernes côtoient des quartiers sans eau courante ni égouts.",
              ],
              box: { label: "Définition", text: "Exode rural : départ des habitants des campagnes vers les villes. Bidonville : quartier d'habitations précaires, construites avec des matériaux de récupération, souvent sans eau courante ni égouts." },
            },
          ],
          keyPoints: [
            "Depuis la fin des années 2000, plus de la moitié de l'humanité vit en ville.",
            "Habiter, c'est vivre un lieu au quotidien : s'y loger, y travailler, s'y déplacer, s'y divertir.",
            "Métropole : très grande ville qui concentre habitants, emplois et fonctions de commandement. Mégapole : plus de 10 millions d'habitants.",
            "Organisation : centre et quartier d'affaires (CBD), banlieues, espace périurbain ; l'étalement urbain grignote les campagnes.",
            "Les métropoles attirent grâce aux emplois et aux services : exode rural, migrations, naissances.",
            "Mumbai (environ 20 millions d'habitants) : capitale économique de l'Inde, mais aussi de grands bidonvilles comme Dharavi.",
          ],
          example: {
            statement: "Décrivez l'organisation d'une métropole, du centre vers l'extérieur, en donnant pour chaque espace un exemple de ce que l'on y trouve.",
            solution: [
              "Le centre : le quartier ancien, avec des monuments, des commerces, des lieux de pouvoir et de culture, et souvent un quartier d'affaires couvert de tours de bureaux (par exemple La Défense, à l'ouest de Paris).",
              "Les banlieues : des communes qui touchent la ville-centre, avec des grands ensembles, des pavillons, des zones industrielles et commerciales. Avec la ville-centre, elles forment l'agglomération.",
              "L'espace périurbain : plus loin, des lotissements et des villages qui grandissent au milieu des champs ; ses habitants vont chaque jour travailler dans l'agglomération.",
              "Conclusion : une métropole est organisée en auréoles autour de son centre, et elle s'étend de plus en plus loin sur les campagnes, c'est l'étalement urbain.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Donnez le mot qui correspond à chaque définition. a) Habitant d'une ville. b) Métropole de plus de 10 millions d'habitants. c) Quartier de tours de bureaux. d) Communes qui touchent la ville-centre. e) Espace où la ville se mêle à la campagne. f) Départ des habitants des campagnes vers les villes.",
              hint: "Tous ces mots se trouvent dans les encadrés du cours.",
              solution: [
                "a) Un citadin.",
                "b) Une mégapole.",
                "c) Un quartier d'affaires (ou CBD).",
                "d) Les banlieues.",
                "e) L'espace périurbain.",
                "f) L'exode rural.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. La métropole imaginaire de Novaville comptait 2 millions d'habitants en 1980 et 8 millions en 2020. a) Combien de fois sa population a-t-elle été multipliée ? b) De combien d'habitants a-t-elle augmenté en tout ? c) Combien d'habitants en plus, en moyenne, chaque année ? d) Et chaque jour (arrondissez à l'unité, avec 365 jours par an) ? e) Donnez deux raisons qui peuvent expliquer une croissance aussi rapide.",
              hint: "Calculez d'abord la durée entre 1980 et 2020, puis divisez l'augmentation par le nombre d'années.",
              solution: [
                "a) 8 ÷ 2 = 4 : la population a été multipliée par 4.",
                "b) 8 000 000 - 2 000 000 = 6 000 000 habitants en plus.",
                "c) 2020 - 1980 = 40 ans ; 6 000 000 ÷ 40 = 150 000 habitants en plus par an.",
                "d) 150 000 ÷ 365 ≈ 411 habitants en plus par jour.",
                "e) L'exode rural (des habitants des campagnes viennent chercher du travail) et les naissances plus nombreuses que les décès ; on peut aussi citer l'arrivée de migrants d'autres pays.",
                "Résultat : la population a été multipliée par 4, soit environ 150 000 habitants de plus chaque année et environ 411 chaque jour.",
              ],
            },
            {
              level: 3,
              statement: "Défi. À l'aide du cours, comparez Paris et Mumbai dans un paragraphe de huit à dix lignes. Présentez d'abord leurs points communs (rôle dans leur pays, activités, attraction), puis leurs différences (rythme de croissance, conditions de logement, inégalités).",
              hint: "Construisez d'abord au brouillon un tableau à deux colonnes, Paris et Mumbai, puis rédigez avec des connecteurs : comme, de même, en revanche, alors que.",
              solution: [
                "Points communs : Paris et Mumbai sont deux métropoles qui dominent leur pays. Ce sont des centres économiques, avec des sièges d'entreprises, une bourse et des activités culturelles connues dans le monde entier (la mode et les musées à Paris, le cinéma de Bollywood à Mumbai). Toutes deux attirent des habitants venus de tout le pays et de l'étranger.",
                "Différences : Mumbai, avec environ 20 millions d'habitants, est une mégapole qui grandit très vite, alors que la croissance de Paris est plus lente. À Mumbai, beaucoup de nouveaux arrivants ne trouvent pas de logement et vivent dans des bidonvilles comme Dharavi, sans eau courante ; à Paris, presque tous les logements ont l'eau et l'électricité, même si se loger y coûte très cher.",
                "Conclusion : les deux villes sont des métropoles puissantes, mais à Mumbai les inégalités entre quartiers sont beaucoup plus visibles qu'à Paris.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Classez ces espaces du centre de la métropole vers l'extérieur.",
            items: [
              "Centre-ville : monuments, commerces et quartier d'affaires",
              "Banlieues : grands ensembles, pavillons, zones d'activités",
              "Espace périurbain : lotissements et villages au milieu des champs",
              "Espace rural : campagnes éloignées de la métropole",
            ],
          },
          quiz: [
            {
              q: "Qu'est-ce qu'une mégapole ?",
              options: ["Une ville de plus de 10 millions d'habitants", "Un quartier de bureaux", "Une ville de moins de 10 000 habitants entourée de champs", "Un village périurbain"],
              answer: 0,
              why: "On appelle mégapoles les métropoles qui dépassent 10 millions d'habitants, comme Tokyo ou Mumbai.",
            },
            {
              q: "Comment appelle-t-on l'extension de la ville sur les campagnes ?",
              options: ["L'exode rural", "L'urbanisation des côtes", "L'étalement urbain", "La sédentarisation"],
              answer: 2,
              why: "Quand la ville gagne sur les champs et les forêts, avec des lotissements et des zones commerciales, on parle d'étalement urbain.",
            },
            {
              q: "Dans quel pays se trouve la métropole de Mumbai ?",
              options: ["En Chine", "En Inde", "Au Brésil", "Au Nigeria"],
              answer: 1,
              why: "Mumbai est la capitale économique de l'Inde, avec son port, sa bourse et les studios de Bollywood.",
            },
            {
              q: "Où se trouve le quartier d'affaires de La Défense ?",
              options: ["Au centre de la ville de Lyon", "À Marseille", "Au sud de Lille", "À l'ouest de Paris"],
              answer: 3,
              why: "La Défense est le grand quartier d'affaires de la métropole parisienne, à l'ouest de Paris.",
            },
            {
              q: "Laquelle de ces raisons explique l'attraction des métropoles ?",
              options: ["Les logements y sont très bon marché", "Elles offrent de nombreux emplois", "Il n'y a jamais d'embouteillages", "On y cultive beaucoup de céréales"],
              answer: 1,
              why: "Les métropoles concentrent les emplois et les services ; en revanche, les logements y sont souvent chers.",
            },
          ],
          trap: "Croire qu'une métropole n'est qu'une ville très peuplée : une métropole se reconnaît aussi à ses fonctions de commandement (entreprises, universités, pouvoir) et à son influence sur un vaste territoire.",
          method: "Pour décrire une métropole, partez toujours du centre et avancez vers l'extérieur : centre, banlieues, espace périurbain. Pour chaque espace, donnez ce que l'on y voit et ce que l'on y fait.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'vivre-metropole',
          title: "Se loger, travailler et se déplacer dans une métropole",
          minutes: 30,
          objectives: [
            "Décrire les difficultés pour se loger dans une métropole et les inégalités entre quartiers.",
            "Identifier les lieux de travail d'une métropole et les mobilités quotidiennes de ses habitants.",
            "Expliquer les problèmes liés aux déplacements : embouteillages, temps de trajet, pollution.",
            "Comparer les manières d'habiter une métropole selon les habitants.",
          ],
          course: [
            {
              heading: "Se loger : un défi quotidien",
              paragraphs: [
                "Dans une métropole, il y a beaucoup d'habitants et peu de place : les logements sont chers, surtout au centre. Les familles aux revenus modestes doivent souvent s'éloigner vers les banlieues ou l'espace périurbain, où les loyers et les maisons coûtent moins cher, ou bien se contenter d'un petit appartement.",
                "Les quartiers sont donc inégaux. Certains, aisés, ont de grands appartements, des parcs et des commerces de luxe. D'autres concentrent des habitants pauvres et des logements dégradés. Pour aider les ménages modestes, l'État et les communes font construire des logements sociaux, dont le loyer est plus bas. En France, la loi SRU, votée en 2000, impose à de nombreuses communes d'avoir une part minimale de logements sociaux.",
                "Dans les métropoles des pays pauvres ou émergents, une partie des habitants n'a pas les moyens de louer un logement. À Mumbai, des centaines de milliers de personnes vivent dans des bidonvilles faits de tôle et de briques, souvent sans eau courante ni égouts. À l'opposé, certains habitants très riches vivent dans des quartiers fermés et surveillés.",
              ],
              box: { label: "Définition", text: "Logement social : logement construit avec l'aide de l'État ou des communes, loué moins cher à des ménages aux revenus modestes. Ségrégation : séparation des habitants dans des quartiers différents selon leurs revenus." },
            },
            {
              heading: "Travailler dans une métropole",
              paragraphs: [
                "Les métropoles offrent beaucoup d'emplois, surtout dans les services : commerces, banques, administrations, hôpitaux, écoles, transports, tourisme. Les bureaux se concentrent dans les quartiers d'affaires, comme La Défense, à l'ouest de Paris, où travaillent des dizaines de milliers de salariés. D'autres emplois se trouvent dans les zones industrielles et commerciales des banlieues, près des autoroutes et des aéroports.",
                "Dans les métropoles des pays émergents, une partie des habitants travaille dans le secteur informel : des emplois non déclarés, sans contrat ni protection, comme les vendeurs de rue, les petits ateliers ou les livreurs. À Dharavi, par exemple, de nombreux ateliers recyclent le plastique, travaillent le cuir ou fabriquent des poteries.",
              ],
              box: { label: "Définition", text: "Secteur informel : ensemble des activités non déclarées, sans contrat de travail ni protection sociale, comme la vente dans la rue ou les petits ateliers." },
            },
            {
              heading: "Se déplacer : les mobilités quotidiennes",
              paragraphs: [
                "Comme beaucoup d'habitants vivent loin de leur travail ou de leur lieu d'études, des millions de personnes font chaque jour l'aller-retour entre leur domicile et ces lieux : ce sont les mobilités quotidiennes, aussi appelées navettes. Elles se font à pied, à vélo, en voiture, en bus, en tramway, en métro ou en train de banlieue, comme le RER en Île-de-France.",
                "Ces déplacements posent des problèmes : embouteillages aux heures de pointe, transports en commun bondés, longs temps de trajet, pollution de l'air et bruit. À Mumbai, les trains de banlieue transportent plusieurs millions de voyageurs par jour, si serrés que certains voyagent accrochés aux portes.",
                "Pour y répondre, les métropoles développent les transports en commun. Autour de Paris, le Grand Paris Express prévoit environ 200 km de nouvelles lignes de métro automatique et 68 gares, pour relier les banlieues entre elles sans passer par le centre. Beaucoup de villes créent aussi des pistes cyclables et des lignes de tramway.",
              ],
              box: { label: "Définition", text: "Mobilités quotidiennes (ou navettes) : déplacements de chaque jour entre le domicile et le lieu de travail ou d'études. Heures de pointe : moments de la journée où les déplacements sont les plus nombreux." },
            },
            {
              heading: "Des habitants qui ne vivent pas la métropole de la même façon",
              paragraphs: [
                "Une cadre qui habite près de son bureau dans le centre, un ouvrier qui vit en banlieue lointaine et part avant l'aube, un étudiant en colocation, une famille installée dans un lotissement périurbain avec deux voitures : tous habitent la même métropole, mais pas de la même manière. Leur logement, leur temps de trajet et leurs loisirs sont très différents.",
                "Ces différences dépendent surtout des revenus, mais aussi des choix de vie. Certaines familles préfèrent une maison avec un jardin, même loin du centre ; d'autres choisissent un petit appartement pour être près de tout. Les pouvoirs publics cherchent à réduire les inégalités en rapprochant les logements, les emplois et les transports.",
              ],
              box: { label: "À retenir", text: "Dans une métropole, se loger, travailler et se déplacer sont liés : plus on habite loin du centre, plus les trajets sont longs. Les manières d'habiter dépendent beaucoup des revenus." },
            },
          ],
          keyPoints: [
            "Les logements sont chers au centre : les ménages modestes s'éloignent vers les banlieues et l'espace périurbain.",
            "Les quartiers sont inégaux ; les logements sociaux aident les ménages modestes (loi SRU de 2000).",
            "Les emplois se concentrent dans les quartiers d'affaires et les zones d'activités ; dans les pays émergents, beaucoup travaillent dans le secteur informel.",
            "Mobilités quotidiennes : allers-retours domicile-travail, sources d'embouteillages, de fatigue et de pollution.",
            "Solutions : transports en commun (Grand Paris Express : environ 200 km de lignes et 68 gares), pistes cyclables, tramways.",
          ],
          example: {
            statement: "Données fictives. Thomas habite avec sa famille une maison avec jardin dans un lotissement périurbain, à 35 km du centre de la métropole où il travaille. Chaque matin, il met 1 h 10 en voiture pour aller au bureau. Expliquez pourquoi Thomas habite si loin, puis présentez les inconvénients de cette situation.",
            solution: [
              "Pourquoi si loin : au centre, les logements sont chers et petits ; dans l'espace périurbain, Thomas a pu acheter une maison avec un jardin pour un prix plus bas.",
              "Premier inconvénient : le temps de trajet. 1 h 10 à l'aller et autant au retour, soit 2 h 20 par jour passées sur la route.",
              "Deuxième inconvénient : le coût et la pollution. La voiture coûte cher en carburant et en entretien, et elle pollue l'air ; aux heures de pointe, Thomas est pris dans les embouteillages.",
              "Conclusion : Thomas gagne de l'espace et paie son logement moins cher, mais il perd beaucoup de temps et dépend de sa voiture : c'est le choix de nombreux habitants périurbains.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez ces éléments dans trois colonnes, « Se loger », « Travailler », « Se déplacer » : logement social ; RER ; quartier d'affaires ; bidonville ; heures de pointe ; vendeur de rue ; lotissement périurbain ; piste cyclable ; zone industrielle.",
              hint: "Demandez-vous si chaque élément concerne l'endroit où l'on vit, l'endroit où l'on gagne sa vie, ou le trajet entre les deux.",
              solution: [
                "Se loger : logement social ; bidonville ; lotissement périurbain.",
                "Travailler : quartier d'affaires ; vendeur de rue ; zone industrielle.",
                "Se déplacer : RER ; heures de pointe ; piste cyclable.",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Sarah habite en banlieue et met 50 minutes pour aller travailler, et autant pour revenir. Elle travaille 5 jours par semaine, 46 semaines par an. a) Combien de minutes passe-t-elle dans les transports par semaine ? Convertissez en heures et minutes. b) Combien d'heures par an ? c) Une nouvelle ligne de métro réduit son trajet à 30 minutes dans chaque sens. Combien d'heures gagne-t-elle par an ?",
              hint: "Un aller-retour, c'est deux trajets. Pour convertir des minutes en heures, divisez par 60.",
              solution: [
                "a) Par jour : 50 × 2 = 100 minutes. Par semaine : 100 × 5 = 500 minutes, soit 8 h 20 min (car 8 × 60 = 480, et il reste 20 minutes).",
                "b) Par an : 500 × 46 = 23 000 minutes. 23 000 ÷ 60 ≈ 383,3 : environ 383 heures, soit à peu près 16 journées entières de 24 heures.",
                "c) Nouveau temps par an : 30 × 2 × 5 × 46 = 13 800 minutes, soit 230 heures. Gain : 23 000 - 13 800 = 9 200 minutes, soit environ 153 heures par an.",
                "Résultat : 8 h 20 min par semaine, environ 383 heures par an ; la nouvelle ligne lui fait gagner environ 153 heures par an.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Rédigez un paragraphe d'une dizaine de lignes pour répondre à la question : « Pourquoi est-il difficile de se loger, de travailler et de se déplacer à Mumbai ? » Organisez votre réponse en trois parties, une pour chaque verbe, et terminez par une phrase de conclusion.",
              hint: "Réutilisez les mots du cours : bidonville, secteur informel, trains de banlieue, heures de pointe.",
              solution: [
                "Se loger : Mumbai attire chaque année de nombreux nouveaux habitants venus de toute l'Inde. Les logements sont trop peu nombreux et trop chers, si bien que beaucoup s'installent dans des bidonvilles comme Dharavi, faits de tôle et de briques, souvent sans eau courante ni égouts.",
                "Travailler : la ville offre des emplois dans les bureaux, le port ou le cinéma, mais ils ne suffisent pas pour tous. Une grande partie des habitants travaille dans le secteur informel, sans contrat ni protection : vendeurs de rue, ateliers de recyclage ou de poterie.",
                "Se déplacer : les trains de banlieue transportent plusieurs millions de voyageurs par jour ; aux heures de pointe, ils sont tellement bondés que certains voyagent accrochés aux portes. Les routes sont encombrées et l'air est pollué.",
                "Conclusion : la croissance très rapide de Mumbai dépasse les logements, les emplois et les transports disponibles, ce qui rend la vie quotidienne difficile pour beaucoup d'habitants.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Reliez chaque mot à sa définition.",
            pairs: [
              { left: "Logement social", right: "Logement loué moins cher aux ménages modestes" },
              { left: "Navette", right: "Aller-retour quotidien entre domicile et travail" },
              { left: "Heures de pointe", right: "Moments où les déplacements sont les plus nombreux" },
              { left: "Secteur informel", right: "Emplois non déclarés, sans contrat ni protection" },
              { left: "RER", right: "Train qui relie Paris et sa banlieue" },
              { left: "Ségrégation", right: "Séparation des habitants selon leurs revenus" },
            ],
          },
          quiz: [
            {
              q: "Pourquoi beaucoup de familles modestes habitent-elles loin du centre ?",
              options: ["Parce que le centre est interdit aux familles", "Parce que les logements y sont moins chers", "Parce qu'il n'y a pas d'écoles au centre", "Parce que les trajets y sont plus courts"],
              answer: 1,
              why: "Au centre, les logements sont chers ; plus loin, en banlieue ou dans l'espace périurbain, ils coûtent moins cher.",
            },
            {
              q: "Qu'est-ce qu'une navette, en géographie ?",
              options: ["Un aller-retour quotidien domicile-travail", "Un bus réservé aux touristes qui visitent la ville", "Une fusée spatiale", "Un quartier de bureaux"],
              answer: 0,
              why: "La navette, ou mobilité quotidienne, est le trajet fait chaque jour entre le domicile et le lieu de travail ou d'études.",
            },
            {
              q: "Combien de gares le Grand Paris Express prévoit-il ?",
              options: ["8", "680", "68", "6"],
              answer: 2,
              why: "Le Grand Paris Express prévoit environ 200 km de lignes de métro automatique et 68 gares autour de Paris.",
            },
            {
              q: "Lequel de ces emplois appartient au secteur informel ?",
              options: ["Une infirmière qui travaille à l'hôpital public", "Un employé de banque", "Un professeur de collège", "Un vendeur de rue non déclaré"],
              answer: 3,
              why: "Le secteur informel regroupe les emplois non déclarés, sans contrat ni protection, comme la vente dans la rue.",
            },
            {
              q: "Quel est le but des logements sociaux ?",
              options: ["Loger les ménages modestes", "Remplacer les écoles", "Loger les touristes", "Attirer de nouvelles entreprises étrangères"],
              answer: 0,
              why: "Les logements sociaux, loués moins cher, permettent aux ménages modestes de se loger, y compris près des emplois.",
            },
          ],
          trap: "Étudier séparément le logement, le travail et les transports : dans une métropole, ils sont liés, car l'endroit où l'on peut se loger décide de la longueur des trajets jusqu'au travail.",
          method: "Pour décrire la vie d'un habitant d'une métropole, répondez à trois questions dans l'ordre : où loge-t-il et pourquoi ? où travaille-t-il ? comment et en combien de temps se déplace-t-il ? Puis concluez sur les avantages et les difficultés.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'ville-de-demain',
          title: "La ville de demain",
          minutes: 30,
          objectives: [
            "Identifier les défis que les métropoles doivent relever : pollution, déchets, étalement urbain, chaleur, inégalités.",
            "Définir le développement durable et la ville durable.",
            "Décrire des aménagements qui rendent la ville plus durable, à partir d'exemples.",
            "Imaginer et justifier un aménagement pour la ville de demain.",
          ],
          course: [
            {
              heading: "Des métropoles face à de grands défis",
              paragraphs: [
                "Les métropoles concentrent les habitants et les activités, donc aussi les problèmes. La circulation automobile et le chauffage des bâtiments polluent l'air. Les habitants produisent d'énormes quantités de déchets et consomment beaucoup d'eau et d'énergie. L'étalement urbain fait disparaître des terres agricoles et des espaces naturels.",
                "Le réchauffement climatique ajoute un défi. En été, le béton, le goudron et le manque d'arbres empêchent la ville de se rafraîchir la nuit : il peut y faire plusieurs degrés de plus que dans la campagne voisine. On parle d'îlot de chaleur urbain. Pendant les canicules, cette chaleur est dangereuse, surtout pour les personnes âgées et les jeunes enfants.",
              ],
              box: { label: "Définition", text: "Îlot de chaleur urbain : zone de la ville où la température est plus élevée que dans la campagne voisine, à cause du béton, du goudron, de la circulation et du manque de végétation." },
            },
            {
              heading: "Le développement durable et la ville durable",
              paragraphs: [
                "Le développement durable est un développement qui répond aux besoins des personnes d'aujourd'hui sans empêcher les générations futures de répondre aux leurs. Cette idée a été popularisée en 1987 par un rapport rédigé pour l'ONU, appelé le rapport Brundtland, du nom de la femme politique norvégienne qui l'a dirigé.",
                "Le développement durable repose sur trois piliers : protéger l'environnement ; permettre une économie qui crée des emplois et des richesses ; assurer la justice sociale, c'est-à-dire que chacun ait accès à un logement, aux transports et aux services. Une ville durable cherche à concilier ces trois piliers, pour que tous ses habitants vivent bien aujourd'hui comme demain.",
              ],
              box: { label: "Définition", text: "Ville durable : ville qui cherche à protéger l'environnement, à offrir des emplois et à permettre à tous ses habitants de bien vivre, aujourd'hui et pour les générations futures." },
            },
            {
              heading: "Des solutions déjà à l'œuvre",
              paragraphs: [
                "Pour réduire la pollution, les villes favorisent les mobilités douces, comme la marche et le vélo, et les transports en commun. À Paris, les voies sur berge de la Seine, autrefois parcourues par les voitures, ont été transformées en promenades pour piétons et cyclistes. Copenhague, au Danemark, est célèbre pour ses nombreuses pistes cyclables : une grande partie de ses habitants va au travail ou à l'école à vélo.",
                "Pour lutter contre la chaleur, on plante des arbres, on crée des parcs et on végétalise des toits et des cours d'école. À Paris, des cours d'écoles et de collèges, autrefois entièrement goudronnées, sont transformées en « cours Oasis », plus vertes et plus fraîches.",
                "Des quartiers entiers sont construits ou rénovés selon ces principes : ce sont des écoquartiers. Le quartier Vauban, à Fribourg-en-Brisgau en Allemagne, construit sur une ancienne caserne, accueille environ 5 000 habitants : les voitures y sont peu nombreuses, les maisons sont bien isolées et beaucoup de toits portent des panneaux solaires. En France, le quartier de la Confluence, à Lyon, a été aménagé sur d'anciens terrains industriels.",
              ],
              box: { label: "Définition", text: "Écoquartier : quartier conçu pour limiter son impact sur l'environnement (énergie, eau, déchets, transports) tout en offrant des logements variés, des commerces et des espaces verts." },
            },
            {
              heading: "Imaginer la ville de demain",
              paragraphs: [
                "Certaines villes misent sur les nouvelles technologies : capteurs qui règlent l'éclairage ou les feux de circulation, applications pour trouver un vélo ou un bus, compteurs qui mesurent la consommation d'énergie. On parle de ville intelligente. Mais la technologie ne suffit pas : elle coûte cher et consomme elle-même de l'énergie.",
                "Construire la ville de demain, c'est surtout faire des choix : bâtir sur des friches, ces terrains abandonnés, plutôt que sur des champs ; rénover et isoler les vieux bâtiments ; rapprocher logements, emplois et commerces pour réduire les trajets ; garder des logements accessibles à tous. Les habitants peuvent participer à ces choix, par exemple lors de réunions de concertation organisées par leur commune, ou dans un conseil municipal des jeunes.",
              ],
              box: { label: "À retenir", text: "La ville de demain doit être plus verte, moins polluante, plus économe en terres et en énergie, et ouverte à tous. Elle se construit avec les habitants." },
            },
          ],
          keyPoints: [
            "Défis des métropoles : pollution, déchets, consommation d'énergie, étalement urbain, îlots de chaleur, inégalités.",
            "Développement durable : répondre aux besoins d'aujourd'hui sans empêcher les générations futures de répondre aux leurs (rapport Brundtland, 1987).",
            "Trois piliers : environnement, économie, justice sociale.",
            "Solutions : mobilités douces et transports en commun, arbres et cours végétalisées, écoquartiers (Vauban, Confluence).",
            "Construire sur des friches, rénover, rapprocher logements et emplois, associer les habitants.",
          ],
          example: {
            statement: "Présentez trois aménagements qui rendent une ville plus durable, et dites à quel pilier du développement durable chacun répond surtout.",
            solution: [
              "Rappeler les trois piliers : environnement, économie, justice sociale.",
              "Premier aménagement : une ligne de tramway. Elle réduit la circulation automobile et la pollution (environnement) et permet aux habitants des quartiers éloignés d'accéder aux emplois (justice sociale).",
              "Deuxième aménagement : la végétalisation d'une cour d'école. Elle rafraîchit l'air en été et accueille la biodiversité (environnement).",
              "Troisième aménagement : un écoquartier construit sur une friche, avec des logements sociaux, des bureaux et des commerces. Il crée des emplois (économie), loge des familles modestes (justice sociale) et évite de bâtir sur des champs (environnement).",
              "Conclusion : un aménagement est d'autant plus durable qu'il répond à plusieurs piliers à la fois.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque action, indiquez le pilier du développement durable auquel elle répond surtout (environnement, économie ou justice sociale) : a) planter des arbres dans une rue ; b) construire des logements sociaux près du centre ; c) installer une entreprise qui crée 300 emplois dans un quartier ; d) trier et recycler les déchets ; e) rendre les bus gratuits pour les personnes aux revenus modestes ; f) isoler les vieux immeubles pour consommer moins d'énergie.",
              hint: "Demandez-vous si l'action protège la nature, crée des richesses et des emplois, ou aide les personnes qui en ont le plus besoin.",
              solution: [
                "a) Environnement.",
                "b) Justice sociale.",
                "c) Économie.",
                "d) Environnement.",
                "e) Justice sociale.",
                "f) Environnement (et aussi économie, car les habitants paient moins de chauffage).",
              ],
            },
            {
              level: 2,
              statement: "Données fictives. Dans un collège de 500 élèves, 200 viennent en voiture, 200 en bus et 100 à pied ou à vélo. a) Quelle part des élèves vient en voiture ? Donnez une fraction simplifiée et un pourcentage. b) La commune crée une piste cyclable sécurisée : 60 élèves qui venaient en voiture viennent désormais à vélo. Combien d'élèves viennent maintenant en voiture, et à pied ou à vélo ? c) Calculez les nouveaux pourcentages. d) Pourquoi cet aménagement va-t-il dans le sens d'une ville durable ?",
              hint: "Une part se calcule en divisant le nombre d'élèves concernés par le nombre total d'élèves.",
              solution: [
                "a) 200 sur 500, soit 200/500 = 2/5. En pourcentage : 2/5 = 40/100 = 40 %.",
                "b) En voiture : 200 - 60 = 140 élèves. À pied ou à vélo : 100 + 60 = 160 élèves. En bus : toujours 200. Vérification : 140 + 200 + 160 = 500.",
                "c) Voiture : 140/500 = 28/100 = 28 %. À pied ou à vélo : 160/500 = 32/100 = 32 %. Bus : 200/500 = 40 %.",
                "d) Il y a 60 voitures de moins devant le collège chaque matin (si chaque voiture amène un seul élève) : moins de pollution, moins d'embouteillages et plus de sécurité. Les élèves font aussi de l'exercice.",
                "Résultat : la part des élèves venant en voiture passe de 40 % à 28 %, celle des élèves à pied ou à vélo de 20 % à 32 %.",
              ],
            },
            {
              level: 3,
              statement: "Défi. Données fictives. Votre métropole possède une friche industrielle de 4 hectares (1 hectare = 10 000 m²). Le conseil municipal propose de la partager ainsi : la moitié pour des logements (dont des logements sociaux), 30 % pour un parc, et le reste pour une école et des commerces. a) Calculez la surface de chaque partie en m². b) Proposez deux aménagements précis pour rendre ce nouveau quartier durable. c) Justifiez votre projet en montrant qu'il répond aux trois piliers du développement durable.",
              hint: "Convertissez d'abord les hectares en m², puis calculez la moitié et 30 % de cette surface.",
              solution: [
                "a) Surface totale : 4 × 10 000 = 40 000 m². Logements : 40 000 ÷ 2 = 20 000 m². Parc : 30 % de 40 000 = 40 000 × 30 ÷ 100 = 12 000 m². École et commerces : 40 000 - 20 000 - 12 000 = 8 000 m².",
                "b) Exemples d'aménagements : des immeubles bien isolés avec des panneaux solaires sur les toits ; un arrêt de tramway et des pistes cyclables qui relient le quartier au centre ; une cour d'école végétalisée ; un tri des déchets dans chaque immeuble.",
                "c) Environnement : on construit sur une friche et non sur des champs, le parc rafraîchit l'air, les transports en commun réduisent la pollution. Économie : les commerces créent des emplois et le chantier fait travailler des entreprises. Justice sociale : les logements sociaux permettent à des familles modestes d'habiter le quartier, près d'une école et des transports.",
                "Résultat : 20 000 m² de logements, 12 000 m² de parc et 8 000 m² pour l'école et les commerces, dans un quartier qui répond aux trois piliers.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Imaginez la ville de demain.",
            statements: [
              { text: "Il fait souvent plus chaud la nuit en ville qu'à la campagne voisine.", true: true, why: "Le béton et le goudron gardent la chaleur : c'est l'îlot de chaleur urbain." },
              { text: "Le développement durable ne concerne que la protection de la nature.", true: false, why: "Il repose sur trois piliers : environnement, économie et justice sociale." },
              { text: "Construire sur une friche limite l'étalement urbain.", true: true, why: "On réutilise un terrain déjà urbanisé au lieu de bâtir sur des champs ou des forêts." },
              { text: "La technologie suffit à rendre une ville durable.", true: false, why: "Les capteurs et applications aident, mais il faut aussi changer l'aménagement et les habitudes, et la technologie consomme elle-même de l'énergie." },
              { text: "Un écoquartier doit aussi offrir des logements accessibles aux familles modestes.", true: true, why: "La justice sociale est l'un des trois piliers du développement durable." },
              { text: "Planter des arbres en ville n'a aucun effet sur la température.", true: false, why: "Les arbres font de l'ombre et rafraîchissent l'air ; c'est pourquoi on végétalise rues et cours d'école." },
              { text: "Les habitants peuvent participer aux choix d'aménagement de leur ville.", true: true, why: "Les communes organisent des réunions de concertation, et il existe des conseils municipaux des jeunes." },
            ],
          },
          quiz: [
            {
              q: "Quels sont les trois piliers du développement durable ?",
              options: ["La ville, la campagne, la montagne et la mer", "Environnement, économie, justice sociale", "Voiture, bus, vélo", "Eau, air, terre"],
              answer: 1,
              why: "Le développement durable concilie la protection de l'environnement, une économie qui crée des emplois et la justice sociale.",
            },
            {
              q: "Qu'est-ce qu'un îlot de chaleur urbain ?",
              options: ["Une plage aménagée en ville", "Une île tropicale", "Un quartier où toutes les maisons sont chauffées au bois", "Une zone de la ville plus chaude que la campagne"],
              answer: 3,
              why: "Le béton, le goudron et le manque d'arbres rendent certaines zones de la ville plus chaudes, surtout la nuit.",
            },
            {
              q: "Où se trouve l'écoquartier Vauban ?",
              options: ["À Lyon, en France", "Dans le centre de Copenhague, au Danemark", "À Fribourg-en-Brisgau, en Allemagne", "À Mumbai, en Inde"],
              answer: 2,
              why: "Le quartier Vauban a été construit à Fribourg-en-Brisgau, en Allemagne, sur une ancienne caserne.",
            },
            {
              q: "Qu'appelle-t-on une friche ?",
              options: ["Un terrain abandonné", "Un champ de blé", "Une forêt protégée", "Un quartier de bureaux"],
              answer: 0,
              why: "Une friche est un terrain abandonné, souvent un ancien site industriel, que l'on peut réaménager sans prendre de terres agricoles.",
            },
            {
              q: "Lequel de ces moyens de transport est une mobilité douce ?",
              options: ["Le camion", "Le vélo", "L'avion", "La moto"],
              answer: 1,
              why: "La marche et le vélo sont des mobilités douces : ils ne polluent pas et ne consomment pas de carburant.",
            },
          ],
          trap: "Réduire la ville durable à « une ville avec des arbres » : le développement durable a trois piliers, et un aménagement qui chasse les familles modestes ou ne crée aucun emploi n'est pas vraiment durable.",
          method: "Pour justifier un aménagement, vérifiez-le avec les trois piliers comme une liste : protège-t-il l'environnement ? crée-t-il des emplois ou des richesses ? profite-t-il à tous les habitants, y compris les plus modestes ? Plus il coche de cases, plus il est durable.",
        },
      ],
    },
  ],
}
