import type { UnitContent } from '../types'

export const CONTENT: UnitContent = {
  unit: 'hggsp-1re',
  chapters: [
    /* ==================================================================== */
    /* THÈME 4 · AXE 2 · LIBERTÉ OU CONTRÔLE DE L'INFORMATION                */
    /* ==================================================================== */
    {
      id: 'liberte-controle-information',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'liberte-presse',
          title: 'La liberté de la presse, un combat politique',
          minutes: 30,
          objectives: [
            "Expliquer comment la liberté de la presse a été conquise en France, de la Déclaration de 1789 à la loi du 29 juillet 1881.",
            "Identifier les moments où le pouvoir a restreint cette liberté (Empire, Restauration, Second Empire) et les résistances qu'il a rencontrées.",
            "Analyser le rôle politique de la presse comme contre-pouvoir, à partir de l'affaire Dreyfus.",
            "Présenter le cadre actuel de la liberté de la presse et ses limites fixées par la loi.",
          ],
          course: [
            {
              heading: "Sous l'Ancien Régime : une presse sous privilège et sous censure",
              paragraphs: [
                "Dans la France monarchique, publier est une activité étroitement surveillée. Un imprimeur ne peut exercer qu'avec l'autorisation du roi, et chaque livre doit obtenir un privilège après examen par des censeurs royaux : c'est la censure préalable, qui contrôle le texte avant sa diffusion. Le premier périodique français, la Gazette de Théophraste Renaudot, paraît en 1631 avec la protection de Richelieu : elle diffuse les nouvelles que le pouvoir souhaite voir circuler.",
                "Les idées nouvelles circulent pourtant. Les philosophes des Lumières font imprimer leurs ouvrages à l'étranger, notamment aux Provinces-Unies, ou les diffusent sous le manteau. L'Encyclopédie de Diderot et d'Alembert (1751-1772) voit son privilège révoqué en 1759, mais sa publication se poursuit grâce à des protections dans l'administration. La revendication d'une libre expression devient ainsi l'un des grands combats des Lumières.",
              ],
              box: { label: "Définition", text: "Censure : contrôle exercé par une autorité (État, Église) sur le contenu des publications, des spectacles ou des médias, afin d'en interdire tout ou partie. Elle est préalable quand elle s'exerce avant la diffusion, répressive quand elle sanctionne après." },
            },
            {
              heading: "1789-1881 : un siècle d'avancées et de reculs",
              paragraphs: [
                "La Déclaration des droits de l'homme et du citoyen du 26 août 1789 proclame, à son article 11, que la libre communication des pensées et des opinions est l'un des droits les plus précieux de l'homme : tout citoyen peut parler, écrire et imprimer librement, sauf à répondre de l'abus de cette liberté dans les cas prévus par la loi. Des centaines de journaux naissent, comme L'Ami du peuple de Marat. Mais dès la Terreur, puis sous le Directoire, des journaux sont interdits et des journalistes poursuivis.",
                "Napoléon Bonaparte contrôle étroitement la presse : l'arrêté du 17 janvier 1800 ne laisse subsister que treize journaux politiques à Paris, et en 1811 il n'en reste que quatre, surveillés par la police. La Restauration hésite entre libéralisation et répression. En juillet 1830, les ordonnances de Charles X suspendent la liberté de la presse : les journalistes libéraux, dont Adolphe Thiers au National, publient une protestation, et Paris se soulève lors des Trois Glorieuses (27-29 juillet 1830), qui renversent le roi. La presse a donc contribué à une révolution.",
                "Sous le Second Empire, le décret du 17 février 1852 impose l'autorisation préalable pour créer un journal, un cautionnement (une somme d'argent déposée en garantie) et un système d'avertissements qui peut conduire à la suspension. La loi du 11 mai 1868 assouplit ce régime en supprimant l'autorisation préalable. C'est la Troisième République qui fait de la liberté de la presse un principe durable.",
              ],
            },
            {
              heading: "La loi du 29 juillet 1881, texte fondateur",
              paragraphs: [
                "La loi du 29 juillet 1881 sur la liberté de la presse s'ouvre par un article bref : « L'imprimerie et la librairie sont libres. » Elle supprime l'autorisation préalable, le cautionnement et la censure. Pour publier un journal, une simple déclaration suffit, qui indique le nom du directeur de la publication, responsable devant la justice. La loi crée aussi le droit de réponse, qui permet à une personne mise en cause dans un article d'y répondre dans le même journal.",
                "La liberté n'est pas absolue : la loi définit limitativement des délits de presse, comme la diffamation (imputer un fait précis qui porte atteinte à l'honneur d'une personne), l'injure ou la provocation à commettre des crimes. Elle a été complétée depuis, par exemple par la loi Pleven de 1972, qui punit la provocation à la haine ou à la discrimination raciale, et par la loi Gayssot de 1990, qui réprime la contestation des crimes contre l'humanité. La logique reste celle de 1789 : la liberté est la règle, la sanction intervient après coup, devant un juge.",
              ],
              box: { label: "À retenir", text: "Loi du 29 juillet 1881 : « L'imprimerie et la librairie sont libres. » Plus d'autorisation préalable ni de cautionnement ; un directeur de la publication responsable ; un droit de réponse ; des délits de presse définis par la loi et jugés après publication." },
            },
            {
              heading: "La presse, contre-pouvoir : de l'affaire Dreyfus à aujourd'hui",
              paragraphs: [
                "Le 13 janvier 1898, Émile Zola publie dans le journal L'Aurore une lettre ouverte au président de la République, sous le titre « J'accuse... ! », où il dénonce l'injustice faite au capitaine Dreyfus, condamné à tort pour trahison. Zola est poursuivi pour diffamation et condamné, mais son texte relance l'affaire et divise la France entre dreyfusards et antidreyfusards. L'épisode montre la puissance politique de la presse, capable d'alerter l'opinion contre une décision de l'État.",
                "Au XXe siècle, cette liberté est suspendue pendant les guerres et sous l'Occupation. À la Libération, les ordonnances de 1944, notamment celle du 26 août 1944, interdisent les journaux qui ont continué de paraître sous l'Occupation et veulent garantir l'indépendance de la presse face aux puissances d'argent. Le Monde naît en décembre 1944 et l'Agence France-Presse la même année ; la loi du 10 janvier 1957 garantit l'indépendance de l'AFP.",
                "La liberté de la presse est aujourd'hui protégée par des textes internationaux, comme l'article 19 de la Déclaration universelle des droits de l'homme (1948), et par le droit français, qui protège le secret des sources des journalistes depuis la loi du 4 janvier 2010. Elle reste un combat : l'association Reporters sans frontières, fondée en 1985, publie chaque année un classement mondial de la liberté de la presse, et l'attentat contre la rédaction de Charlie Hebdo, le 7 janvier 2015, qui fait douze morts, a rappelé que la libre expression peut être visée par la violence.",
              ],
            },
          ],
          keyPoints: [
            "Ancien Régime : privilège royal et censure préalable ; la Gazette de Renaudot (1631) sert le pouvoir.",
            "1789 : article 11 de la DDHC, la libre communication des pensées est un droit, sauf abus défini par la loi.",
            "Reculs : Napoléon (4 journaux à Paris en 1811), ordonnances de juillet 1830, décret de 1852 du Second Empire.",
            "Loi du 29 juillet 1881 : « L'imprimerie et la librairie sont libres » ; déclaration simple, droit de réponse, délits définis.",
            "Contre-pouvoir : « J'accuse... ! » de Zola dans L'Aurore, 13 janvier 1898.",
            "Aujourd'hui : DUDH article 19 (1948), secret des sources (2010), classement de RSF ; une liberté encadrée par la loi.",
          ],
          example: {
            statement: "Expliquez pourquoi la liberté de la presse est un enjeu politique en France au XIXe siècle.",
            solution: [
              "Définir : la liberté de la presse est le droit de publier sans autorisation ni contrôle préalable, sous réserve de répondre des abus devant la justice.",
              "Montrer qu'elle est proclamée comme un droit fondamental : l'article 11 de la DDHC (1789) en fait l'un des droits les plus précieux de l'homme.",
              "Montrer que chaque régime autoritaire la restreint, parce qu'une presse libre permet de critiquer le pouvoir : Napoléon réduit les journaux parisiens à quatre en 1811, le Second Empire impose l'autorisation préalable en 1852.",
              "Montrer qu'elle peut renverser un régime : les ordonnances de juillet 1830, qui suspendent la liberté de la presse, provoquent les Trois Glorieuses et la chute de Charles X.",
              "Montrer que son établissement durable accompagne l'enracinement de la République : la loi du 29 juillet 1881 fonde le régime libéral encore en vigueur.",
              "Conclusion : la liberté de la presse est un enjeu politique parce qu'elle conditionne la critique des gouvernants et la formation d'une opinion publique ; son histoire suit celle des régimes, autoritaires ou libéraux.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les mesures suivantes en deux colonnes, « restriction » ou « libéralisation » de la presse, et datez-les : la Déclaration des droits de l'homme et du citoyen ; les ordonnances de Charles X ; le décret impérial créant l'autorisation préalable et les avertissements ; la loi qui proclame que l'imprimerie et la librairie sont libres ; la loi qui supprime l'autorisation préalable sous le Second Empire ; l'arrêté de Bonaparte qui ne laisse que treize journaux politiques à Paris.",
              hint: "Repérez d'abord les trois régimes autoritaires du siècle (Consulat et Empire, fin de la Restauration, Second Empire) : ils restreignent la presse.",
              solution: [
                "Restriction : l'arrêté de Bonaparte du 17 janvier 1800 (treize journaux politiques à Paris) ; les ordonnances de Charles X de juillet 1830 ; le décret du 17 février 1852 (autorisation préalable, cautionnement, avertissements).",
                "Libéralisation : la DDHC du 26 août 1789 (article 11) ; la loi du 11 mai 1868, qui supprime l'autorisation préalable ; la loi du 29 juillet 1881.",
                "Bilan : la liberté proclamée en 1789 n'est installée durablement qu'en 1881, sous la Troisième République, après un siècle d'alternance entre ouverture et contrôle.",
              ],
            },
            {
              level: 2,
              statement: "La loi du 29 juillet 1881 et l'article 11 de la DDHC reposent sur la même logique. Expliquez laquelle en vous appuyant sur l'expression « sauf à répondre de l'abus de cette liberté » (DDHC) et sur la notion de délit de presse. Donnez deux exemples d'abus sanctionnés aujourd'hui.",
              hint: "Distinguez un contrôle qui s'exerce avant la publication et une sanction qui intervient après, devant un juge.",
              solution: [
                "Les deux textes posent la liberté comme règle : on peut publier sans demander d'autorisation et sans être soumis à un censeur.",
                "Ils prévoient une responsabilité après coup : celui qui abuse de cette liberté en répond devant la justice, dans des cas prévus par la loi. C'est un régime répressif et non préventif.",
                "La loi de 1881 précise ces abus sous forme de délits de presse et désigne un responsable, le directeur de la publication.",
                "Exemples d'abus sanctionnés : la diffamation (imputer un fait précis qui porte atteinte à l'honneur d'une personne) ; la provocation à la haine ou à la discrimination raciale (loi Pleven de 1972) ; la contestation de crimes contre l'humanité (loi Gayssot de 1990).",
                "Conclusion : la liberté de la presse n'est pas illimitée, mais ses limites sont fixées par la loi et appliquées par un juge indépendant, jamais par l'administration avant publication.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « La liberté de la presse en France, une conquête politique (1789-1945) ». Rédigez une introduction complète (accroche, définitions, problématique, annonce du plan) et un plan détaillé en deux ou trois parties avec des exemples datés.",
              hint: "Un plan chronologique convient ici, à condition que chaque partie ait une idée directrice et ne soit pas une simple liste de dates.",
              solution: [
                "Accroche : le 13 janvier 1898, L'Aurore publie « J'accuse... ! » d'Émile Zola ; un journal peut alors mettre en accusation l'état-major et le gouvernement, ce qui aurait été impossible un siècle plus tôt.",
                "Définitions : la liberté de la presse est le droit de publier sans autorisation ni censure préalable ; une conquête suppose un combat, des acteurs et des reculs.",
                "Problématique : comment la liberté de la presse, proclamée en 1789, devient-elle un principe durable de la vie politique française, malgré les tentatives répétées de contrôle ?",
                "I. Un droit proclamé mais fragile (1789-1852) : article 11 de la DDHC ; floraison de journaux révolutionnaires puis répression sous la Terreur ; contrôle napoléonien (1800, 1811) ; ordonnances de 1830 et rôle des journalistes dans les Trois Glorieuses.",
                "II. Du contrôle impérial à la loi de 1881 (1852-1881) : décret de 1852 (autorisation, cautionnement, avertissements) ; loi de 1868 ; la Troisième République adopte la loi du 29 juillet 1881, texte libéral fondé sur la responsabilité a posteriori.",
                "III. Une liberté exercée, contestée et refondée (1881-1945) : la presse contre-pouvoir avec l'affaire Dreyfus ; lois de 1893-1894 contre les anarchistes ; censure pendant la Première Guerre mondiale ; presse collaborationniste sous l'Occupation ; ordonnances de 1944 et naissance du Monde.",
                "Conclusion : la liberté de la presse s'impose avec la République, mais reste suspendue en temps de guerre ; elle se prolonge aujourd'hui par de nouveaux enjeux (indépendance économique, protection des sources, Internet).",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire de la liberté de la presse en France dans l'ordre chronologique.",
            items: [
              "Parution de la Gazette de Théophraste Renaudot",
              "Article 11 de la Déclaration des droits de l'homme et du citoyen",
              "Bonaparte réduit à treize les journaux politiques parisiens",
              "Les ordonnances de Charles X provoquent les Trois Glorieuses",
              "Le décret impérial impose l'autorisation préalable",
              "Loi sur la liberté de la presse de la Troisième République",
              "Zola publie « J'accuse... ! » dans L'Aurore",
            ],
          },
          quiz: [
            {
              q: "Quel est le premier article de la loi du 29 juillet 1881 ?",
              options: ["« Tout citoyen peut publier sous réserve d'une autorisation du préfet »", "« L'imprimerie et la librairie sont libres »", "« La presse est placée sous la protection de l'État »", "« Nul journal ne paraît sans cautionnement »"],
              answer: 1,
              why: "La loi de 1881 commence par poser le principe de liberté ; elle supprime justement l'autorisation préalable et le cautionnement.",
            },
            {
              q: "Quel événement suit directement les ordonnances de juillet 1830 qui suspendent la liberté de la presse ?",
              options: ["Le coup d'État du 2 décembre 1851", "La Commune de Paris", "La prise de la Bastille", "Les Trois Glorieuses"],
              answer: 3,
              why: "Les journalistes protestent et Paris se soulève du 27 au 29 juillet 1830 : Charles X est renversé.",
            },
            {
              q: "Dans quel journal Émile Zola publie-t-il « J'accuse... ! » le 13 janvier 1898 ?",
              options: ["L'Aurore", "Le Petit Journal", "Le Figaro", "Le Monde"],
              answer: 0,
              why: "La lettre ouverte paraît dans L'Aurore, dont Georges Clemenceau est alors l'éditorialiste ; Le Monde n'est créé qu'en 1944.",
            },
            {
              q: "Qu'appelle-t-on la censure préalable ?",
              options: ["Une amende infligée après un procès pour diffamation", "Le droit de réponse d'une personne citée", "Le contrôle d'un texte avant sa diffusion", "La saisie d'un journal par un juge après parution"],
              answer: 2,
              why: "La censure préalable examine le texte avant sa publication ; le régime de 1881 la remplace par une responsabilité après publication.",
            },
            {
              q: "Quel texte international de 1948 protège la liberté d'opinion et d'expression ?",
              options: ["La Convention européenne de sauvegarde des droits de l'homme", "La Déclaration universelle des droits de l'homme", "La Charte des Nations unies signée à San Francisco", "La Charte de l'Atlantique"],
              answer: 1,
              why: "L'article 19 de la Déclaration universelle des droits de l'homme, adoptée le 10 décembre 1948, protège le droit de chercher, recevoir et répandre des informations.",
            },
          ],
          trap: "Croire que la liberté de la presse est acquise définitivement en 1789 : la Déclaration la proclame, mais elle est restreinte sous l'Empire, la Restauration et le Second Empire, et ne devient durable qu'avec la loi du 29 juillet 1881.",
          method: "Construisez une frise à deux étages : en haut les textes de liberté (1789, 1868, 1881, 1944), en bas les textes de contrôle (1800, 1811, 1830, 1852). Dans une copie, associez toujours une date, un texte et le régime politique qui l'adopte.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'information-controlee',
          title: 'Information, censure et propagande',
          minutes: 30,
          objectives: [
            "Définir et distinguer censure, propagande et désinformation.",
            "Analyser le contrôle de l'information en temps de guerre, à partir de la Première Guerre mondiale.",
            "Expliquer comment les régimes totalitaires et autoritaires contrôlent l'information, du XXe siècle à aujourd'hui.",
            "Identifier les formes de résistance à l'information contrôlée (radios étrangères, presse clandestine, samizdat).",
          ],
          course: [
            {
              heading: "Censure, propagande, désinformation : trois notions à distinguer",
              paragraphs: [
                "Contrôler l'information peut prendre deux formes complémentaires. La censure consiste à empêcher : elle interdit, coupe ou supprime des informations jugées dangereuses par le pouvoir. La propagande consiste à imposer : elle diffuse massivement et de manière organisée un message destiné à orienter les opinions et les comportements. Un régime qui contrôle l'information combine presque toujours les deux, en faisant taire les voix discordantes et en saturant l'espace public de son propre discours.",
                "La désinformation est la diffusion volontaire d'informations fausses ou trompeuses pour manipuler un adversaire ou une population. Le mot vient du russe dezinformatsiya, utilisé par les services soviétiques pendant la guerre froide. Il ne faut pas la confondre avec la mésinformation, qui est la diffusion d'une erreur sans intention de tromper. Toutes ces pratiques posent la même question politique : qui a le droit de décider de ce que les citoyens peuvent savoir ?",
              ],
              box: { label: "Définition", text: "Propagande : action organisée visant à diffuser une idéologie ou un message pour influencer l'opinion, par tous les moyens de communication (presse, affiches, radio, cinéma, réseaux). Censure : interdiction ou suppression d'informations par une autorité." },
            },
            {
              heading: "La guerre, temps du contrôle : l'exemple de 1914-1918",
              paragraphs: [
                "Dès le début de la Première Guerre mondiale, la France adopte la loi du 5 août 1914 qui réprime les indiscrétions de la presse en temps de guerre, et un bureau de la presse contrôle les journaux. Les articles censurés laissent parfois des espaces blancs dans les pages. Les Français surnomment la censure « Anastasie », personnage caricatural armé de grands ciseaux. Il s'agit d'abord de ne pas renseigner l'ennemi, mais aussi de maintenir le moral de l'arrière.",
                "La presse diffuse alors un discours patriotique optimiste qui minimise les pertes et caricature l'ennemi : les soldats appellent ce discours le « bourrage de crâne », car il contraste avec la réalité qu'ils vivent dans les tranchées. Pour contourner la censure, certains journaux misent sur l'humour : Le Canard enchaîné, lancé en 1915 puis relancé en 1916, se moque de la censure et des fausses nouvelles. Les journaux de tranchées, rédigés par les soldats eux-mêmes, offrent aussi une autre vision du front.",
              ],
              box: { label: "Repère", text: "« Bourrage de crâne » : expression née pendant la Grande Guerre pour désigner la propagande patriotique de la presse, jugée mensongère par les combattants. « Anastasie » : surnom populaire et satirique de la censure." },
            },
            {
              heading: "Les régimes totalitaires : un monopole de l'information",
              paragraphs: [
                "Les régimes totalitaires du XXe siècle veulent contrôler non seulement les actes, mais aussi les pensées. En Russie, dès novembre 1917, un décret des bolcheviks ferme la presse d'opposition ; en 1922 est créée la Glavlit, administration chargée de la censure, et la Pravda, organe du Parti communiste, devient la voix officielle. Dans l'Allemagne nazie, Joseph Goebbels dirige à partir de mars 1933 un ministère de l'Éducation du peuple et de la Propagande ; des livres sont brûlés publiquement le 10 mai 1933, et un poste de radio bon marché, le Volksempfänger, permet de diffuser les discours du régime dans les foyers.",
                "La propagande totalitaire utilise tous les médias : affiches, actualités cinématographiques, grands rassemblements filmés, comme le congrès nazi de Nuremberg mis en scène par Leni Riefenstahl dans Le Triomphe de la volonté (1935). Elle construit le culte du chef, désigne des ennemis et efface ce qui dérange : en URSS, des photographies officielles sont retouchées pour faire disparaître des dirigeants tombés en disgrâce.",
                "Face à ce monopole, l'information circule autrement. Pendant la Seconde Guerre mondiale, les Français écoutent clandestinement la BBC, d'où le général de Gaulle lance son appel du 18 juin 1940 et où l'émission « Les Français parlent aux Français » dénonce la propagande de Radio-Paris, contrôlée par l'occupant. Pendant la guerre froide, les radios occidentales (Voice of America, Radio Free Europe à partir de 1950) émettent vers le bloc soviétique, qui les brouille ; des dissidents recopient à la main et font circuler des textes interdits, le samizdat.",
              ],
            },
            {
              heading: "Le contrôle de l'information dans les démocraties et aujourd'hui",
              paragraphs: [
                "Les démocraties ne sont pas à l'abri de la tentation du contrôle. En France, pendant la guerre d'Algérie, des journaux et des livres sont saisis : La Question d'Henri Alleg, qui dénonce la torture, paraît en février 1958 et est saisi le mois suivant. De 1964 à 1974, l'Office de radiodiffusion-télévision française (ORTF) détient le monopole de la radio et de la télévision publiques sous la tutelle du gouvernement. Le monopole d'État sur l'audiovisuel prend fin avec la loi du 29 juillet 1982, et une autorité indépendante, aujourd'hui l'Arcom, régule le secteur.",
                "Dans les conflits récents, le contrôle prend des formes nouvelles : pendant la guerre du Golfe (1991), les journalistes sont regroupés en « pools » encadrés par l'armée ; en 2003, en Irak, ils sont intégrés aux unités américaines (embedded journalists). Dans les régimes autoritaires actuels, la censure reste massive : en Russie, une loi du 4 mars 2022 punit de lourdes peines de prison la diffusion de « fausses informations » sur l'armée, et les derniers médias indépendants sont suspendus ; en Chine, le « Grand pare-feu » filtre l'accès à Internet. Le prix Nobel de la paix 2021, attribué aux journalistes Maria Ressa (Philippines) et Dmitri Mouratov (Russie), a récompensé ce combat pour la liberté d'expression.",
              ],
              box: { label: "À retenir", text: "Contrôler l'information, c'est censurer (faire taire) et faire de la propagande (imposer un discours). Les régimes totalitaires en font un monopole ; les démocraties la limitent en temps de guerre ; les citoyens y résistent par des canaux parallèles." },
            },
          ],
          keyPoints: [
            "Censure : empêcher la diffusion ; propagande : imposer un message ; désinformation : tromper volontairement.",
            "1914-1918 : loi du 5 août 1914, « Anastasie », « bourrage de crâne » ; Le Canard enchaîné (1915-1916) s'en moque.",
            "Régimes totalitaires : Glavlit et Pravda en URSS ; ministère de Goebbels (1933), autodafés, Volksempfänger.",
            "Résistances : BBC et « Les Français parlent aux Français », radios occidentales de la guerre froide, samizdat.",
            "En démocratie : saisies pendant la guerre d'Algérie (La Question, 1958), monopole de l'ORTF jusqu'en 1974, fin du monopole en 1982.",
            "Aujourd'hui : loi russe du 4 mars 2022, « Grand pare-feu » chinois ; Nobel de la paix 2021 à Ressa et Mouratov.",
          ],
          example: {
            statement: "Montrez que la Première Guerre mondiale est un moment de contrôle de l'information en France, alors que la loi de 1881 garantit la liberté de la presse.",
            solution: [
              "Rappeler le cadre : depuis 1881, la presse est libre, sans censure préalable.",
              "Montrer la rupture : la loi du 5 août 1914 et le bureau de la presse rétablissent un contrôle avant publication ; les articles coupés laissent des blancs.",
              "Expliquer les motifs : ne pas renseigner l'ennemi et maintenir le moral de l'arrière, dans une guerre totale qui mobilise toute la société.",
              "Montrer la dimension de propagande : la presse minimise les pertes et diabolise l'ennemi, ce que les soldats appellent le « bourrage de crâne ».",
              "Nuancer : la critique subsiste par l'humour (Le Canard enchaîné, 1915-1916) et par les journaux de tranchées.",
              "Conclusion : en temps de guerre, même une démocratie suspend en partie la liberté de la presse, ce qui montre que l'équilibre entre liberté et contrôle est un débat politique permanent.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chaque pratique, indiquez s'il s'agit de censure, de propagande ou de résistance à l'information contrôlée : (a) un article coupé laisse un espace blanc dans un journal de 1915 ; (b) un film met en scène un grand rassemblement du parti nazi ; (c) un dissident soviétique recopie à la main un roman interdit ; (d) un régime brouille les émissions d'une radio étrangère ; (e) des affiches montrent le chef de l'État en père bienveillant de la nation ; (f) une famille écoute la BBC en 1942 dans la France occupée.",
              hint: "La censure retire, la propagande ajoute un message officiel, la résistance fait circuler ce que le pouvoir veut cacher.",
              solution: [
                "Censure : (a) l'article coupé de 1915 et (d) le brouillage des radios étrangères, qui empêchent l'accès à une information.",
                "Propagande : (b) le film du congrès nazi (Le Triomphe de la volonté, 1935) et (e) les affiches du culte du chef, qui imposent un message.",
                "Résistance : (c) le samizdat et (f) l'écoute clandestine de la BBC, qui permettent d'accéder à une autre information.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en une dizaine de lignes pourquoi les régimes totalitaires ne se contentent pas de la censure et développent une propagande de masse. Appuyez-vous sur deux exemples précis, l'un soviétique et l'autre nazi.",
              hint: "Pensez à l'objectif du totalitarisme : obtenir l'adhésion de toute la société, pas seulement son silence.",
              solution: [
                "La censure supprime les opinions contraires, mais elle ne suffit pas : un régime totalitaire veut obtenir l'adhésion active de la population et former un homme nouveau.",
                "Il lui faut donc occuper tout l'espace de l'information et imposer une vision du monde : le chef, l'idéologie, les ennemis désignés.",
                "Exemple soviétique : la Glavlit censure à partir de 1922, tandis que la Pravda, organe du Parti, diffuse la ligne officielle ; les photographies sont retouchées pour effacer les dirigeants disgraciés, ce qui réécrit l'histoire.",
                "Exemple nazi : dès mars 1933, le ministère de Goebbels contrôle presse, radio et cinéma ; les autodafés du 10 mai 1933 détruisent les livres jugés hostiles, et le Volksempfänger fait entrer la voix du régime dans chaque foyer.",
                "Conclusion : censure et propagande sont les deux faces d'un même monopole de l'information, indispensable à un pouvoir qui prétend contrôler les consciences.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document (description) : en 1958, les éditions de Minuit publient La Question, récit dans lequel le journaliste Henri Alleg raconte les tortures qu'il a subies en Algérie de la part de militaires français ; le livre est saisi par les autorités en mars 1958, mais il continue de circuler, notamment grâce à une réédition en Suisse. Consigne : en analysant ce document, montrez que le contrôle de l'information existe aussi en démocratie et qu'il rencontre des limites.",
              hint: "Présentez le document (nature, auteur, date, contexte), puis organisez votre réponse en deux temps : le contrôle, ses limites. Mobilisez vos connaissances sur la loi de 1881 et sur la guerre d'Algérie.",
              solution: [
                "Présentation : il s'agit d'un témoignage publié en 1958 par Henri Alleg, journaliste militant de l'indépendance algérienne, pendant la guerre d'Algérie (1954-1962), sous la Quatrième République finissante.",
                "Le contrôle : la saisie du livre montre que l'État démocratique, au nom de l'ordre public et du moral de l'armée, empêche la diffusion d'informations qui le mettent en cause ; d'autres journaux sont saisis pendant ce conflit, et l'audiovisuel est alors sous monopole public.",
                "Le contexte explique ce contrôle : la guerre d'Algérie n'est pas officiellement une guerre (on parle d'« événements »), et la torture pratiquée par une partie de l'armée est niée par les autorités.",
                "Les limites : la loi de 1881 et la tradition libérale rendent la censure contestée ; le livre circule malgré la saisie, réédité à l'étranger, et des intellectuels dénoncent la torture ; le débat public n'est donc pas supprimé.",
                "Portée et limite du document : c'est un témoignage direct, précieux, mais écrit par une victime engagée, qu'il faut croiser avec d'autres sources ; la reconnaissance officielle de la torture en Algérie viendra beaucoup plus tard.",
                "Conclusion : même une démocratie peut restreindre l'information en temps de guerre, mais le pluralisme, la circulation internationale des textes et la mobilisation de l'opinion limitent l'efficacité de ce contrôle, à la différence des régimes totalitaires.",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la censure et la propagande.",
            statements: [
              { text: "La propagande consiste surtout à faire disparaître des informations.", true: false, why: "C'est la censure qui supprime ; la propagande diffuse et impose un message." },
              { text: "« Anastasie » est le surnom satirique de la censure.", true: true, why: "Elle est représentée en vieille femme armée de ciseaux, notamment pendant la Grande Guerre." },
              { text: "Le Canard enchaîné a été fondé après la Seconde Guerre mondiale.", true: false, why: "Il est lancé en 1915 puis relancé en 1916, en pleine Première Guerre mondiale." },
              { text: "Les démocraties n'ont jamais pratiqué la censure.", true: false, why: "La France censure la presse en 1914-1918 et saisit des publications pendant la guerre d'Algérie." },
              { text: "Le samizdat désigne des textes interdits recopiés et diffusés clandestinement en URSS.", true: true, why: "C'est l'un des moyens par lesquels les dissidents contournent la censure soviétique." },
              { text: "La désinformation et la mésinformation sont synonymes.", true: false, why: "La désinformation est volontaire ; la mésinformation est une erreur diffusée sans intention de tromper." },
              { text: "Le monopole d'État sur l'audiovisuel prend fin en France en 1982.", true: true, why: "La loi du 29 juillet 1982 met fin au monopole et crée une autorité de régulation indépendante." },
            ],
          },
          quiz: [
            {
              q: "Qui dirige le ministère de la Propagande dans l'Allemagne nazie à partir de 1933 ?",
              options: ["Heinrich Himmler", "Hermann Göring", "Joseph Goebbels", "Rudolf Hess"],
              answer: 2,
              why: "Joseph Goebbels dirige le ministère de l'Éducation du peuple et de la Propagande créé en mars 1933.",
            },
            {
              q: "Que désigne l'expression « bourrage de crâne » pendant la Première Guerre mondiale ?",
              options: ["Une propagande de presse jugée mensongère", "L'entraînement intensif des nouvelles recrues", "Les blessures à la tête causées par les obus", "La censure du courrier envoyé par les soldats"],
              answer: 0,
              why: "Les combattants dénoncent ainsi le décalage entre l'optimisme des journaux et la réalité des tranchées.",
            },
            {
              q: "Quel livre d'Henri Alleg dénonçant la torture est saisi en 1958 ?",
              options: ["J'accuse", "La Peste", "Les Damnés de la terre", "La Question"],
              answer: 3,
              why: "La Question, publié en février 1958 par les éditions de Minuit, est saisi le mois suivant.",
            },
            {
              q: "D'où le général de Gaulle lance-t-il son appel du 18 juin 1940 ?",
              options: ["De l'antenne de Radio-Paris", "De la BBC, à Londres", "D'une radio installée à Alger", "Des studios de Radio Free Europe"],
              answer: 1,
              why: "L'appel est diffusé par la BBC, qui devient la voix de la France libre ; Radio-Paris est contrôlée par l'occupant.",
            },
            {
              q: "Quelle administration est chargée de la censure en URSS à partir de 1922 ?",
              options: ["La Pravda", "Le Komintern", "La Glavlit", "Le Politburo"],
              answer: 2,
              why: "La Glavlit contrôle les publications ; la Pravda est le journal du Parti, qui diffuse la ligne officielle.",
            },
          ],
          trap: "Réduire le contrôle de l'information aux dictatures : les démocraties aussi censurent, surtout en temps de guerre (1914-1918, guerre d'Algérie) ; la différence tient au fait que ce contrôle y reste contesté, limité et soumis au droit.",
          method: "Pour analyser un document de propagande, posez quatre questions : qui parle (émetteur), à qui (destinataire), avec quel message et par quels procédés (images, slogans, répétition), dans quel but. Ajoutez toujours ce que le document cache : c'est souvent là que se trouve la censure.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'information-internet',
          title: 'L’information à l’heure d’Internet',
          minutes: 35,
          objectives: [
            "Expliquer comment Internet et les réseaux sociaux transforment la production, la diffusion et la réception de l'information.",
            "Analyser les nouveaux enjeux du débat entre liberté et contrôle : lanceurs d'alerte, infox, ingérences, censure numérique.",
            "Identifier les réponses des États et de l'Union européenne pour réguler l'information en ligne.",
            "Mettre en œuvre une démarche critique pour vérifier une information trouvée en ligne.",
          ],
          course: [
            {
              heading: "Une révolution de l'information : tous producteurs, tous diffuseurs",
              paragraphs: [
                "Avec le Web, inventé par Tim Berners-Lee au CERN entre 1989 et 1991, puis avec les réseaux sociaux (Facebook en 2004, YouTube en 2005, Twitter en 2006, devenu X en 2023) et les smartphones, chacun peut publier, commenter et partager une information instantanément et à l'échelle mondiale. Les médias traditionnels perdent leur rôle exclusif de « gardiens » de l'information : le journalisme citoyen apparaît, des témoins filment et diffusent eux-mêmes les événements.",
                "Cette horizontalité peut servir la liberté. Lors des printemps arabes, commencés en Tunisie en décembre 2010 après l'immolation de Mohamed Bouazizi, des vidéos diffusées sur les réseaux sociaux contournent la censure et contribuent à la mobilisation. Les lanceurs d'alerte s'appuient aussi sur Internet : WikiLeaks, fondé en 2006 par Julian Assange, publie en 2010 des centaines de milliers de documents militaires et diplomatiques américains ; en 2013, Edward Snowden révèle, avec la presse, l'ampleur de la surveillance électronique menée par l'agence américaine NSA.",
              ],
              box: { label: "Définition", text: "Lanceur d'alerte : personne qui révèle, dans l'intérêt général, des informations sur des faits illégaux ou dangereux dont elle a eu connaissance, souvent dans le cadre de son travail. La France les protège par la loi Sapin II (2016), renforcée en 2022." },
            },
            {
              heading: "Les nouveaux dangers : infox, bulles de filtres, ingérences",
              paragraphs: [
                "Internet facilite aussi la circulation de fausses informations, ou infox (en anglais fake news). Leur diffusion est accélérée par le fonctionnement des plateformes : les algorithmes de recommandation mettent en avant les contenus qui suscitent le plus de réactions, souvent les plus choquants. L'essayiste américain Eli Pariser a décrit en 2011 la « bulle de filtres » : chaque internaute reçoit surtout des contenus conformes à ses goûts et à ses opinions, ce qui peut enfermer dans des chambres d'écho et polariser le débat public.",
                "L'information devient un enjeu géopolitique. Des États mènent des campagnes de désinformation pour influencer les élections d'autres pays, comme lors de l'élection présidentielle américaine de 2016. En 2018, le scandale Cambridge Analytica révèle que les données de dizaines de millions d'utilisateurs de Facebook ont été exploitées à des fins de ciblage politique. Depuis 2022, l'intelligence artificielle générative permet de fabriquer des textes, des images et des vidéos truquées très réalistes (deepfakes), ce qui rend la vérification encore plus nécessaire.",
              ],
            },
            {
              heading: "Réguler sans censurer : les réponses des États",
              paragraphs: [
                "Les régimes autoritaires répondent par le contrôle : la Chine filtre Internet avec son « Grand pare-feu » et impose ses propres plateformes ; la Russie bloque des réseaux sociaux occidentaux depuis 2022 ; l'Iran coupe régulièrement l'accès à Internet lors des manifestations, comme en 2019 et en 2022. Le contrôle numérique permet aussi la surveillance des citoyens.",
                "Les démocraties cherchent un équilibre difficile entre liberté d'expression et lutte contre les abus. En France, la loi du 22 décembre 2018 relative à la lutte contre la manipulation de l'information permet à un juge, pendant les trois mois qui précèdent une élection nationale, de faire cesser en urgence la diffusion massive de fausses informations ; le service Viginum, créé en 2021, détecte les ingérences numériques étrangères. Mais en 2020, le Conseil constitutionnel a censuré l'essentiel de la loi Avia contre la haine en ligne, jugeant qu'elle portait une atteinte excessive à la liberté d'expression.",
                "L'Union européenne a adopté le règlement général sur la protection des données (RGPD, applicable depuis 2018) puis le règlement sur les services numériques (Digital Services Act, adopté en 2022 et pleinement applicable depuis février 2024), qui oblige les très grandes plateformes à évaluer les risques qu'elles font peser sur le débat public, à retirer rapidement les contenus illicites signalés et à rendre leurs algorithmes plus transparents. Aux États-Unis, au contraire, la section 230 d'une loi de 1996 protège largement les plateformes de toute responsabilité pour les contenus publiés par leurs utilisateurs.",
              ],
              box: { label: "Repère", text: "Loi française du 22 décembre 2018 contre la manipulation de l'information ; Viginum (2021) ; RGPD (2018) ; Digital Services Act européen (2022, pleinement applicable en 2024)." },
            },
            {
              heading: "Le citoyen face à l'information : une démarche critique",
              paragraphs: [
                "Face à cette abondance, le citoyen doit apprendre à vérifier. Plusieurs rédactions ont créé des cellules de vérification des faits (fact-checking), et l'éducation aux médias et à l'information est confiée en France au CLEMI, créé en 1983. La démarche repose sur quelques réflexes : identifier la source et son auteur, chercher l'information dans d'autres médias fiables (lecture latérale), dater le document, vérifier l'origine d'une image par une recherche inversée, distinguer un fait d'une opinion et repérer les contenus sponsorisés.",
                "Le débat politique fondamental reste celui qui traverse tout le thème : une société libre a besoin d'une information plurielle et indépendante, mais la liberté d'expression peut être détournée pour manipuler. Qui doit tracer la limite : l'État, le juge, les plateformes privées ou les citoyens eux-mêmes ? La suspension du compte du président Donald Trump par Twitter en janvier 2021, après l'assaut du Capitole, a montré que des entreprises privées disposent désormais d'un pouvoir considérable sur l'espace public.",
              ],
              box: { label: "À retenir", text: "Vérifier une information : qui parle ? quand ? d'où vient l'image ? d'autres sources fiables confirment-elles ? est-ce un fait ou une opinion ? À l'heure d'Internet, l'esprit critique est une compétence civique." },
            },
          ],
          keyPoints: [
            "Internet et les réseaux sociaux font de chacun un producteur et un diffuseur d'information ; les médias perdent leur monopole.",
            "Une arme de liberté : printemps arabes (2010-2011), WikiLeaks (2010), révélations d'Edward Snowden (2013).",
            "De nouveaux dangers : infox, algorithmes, bulles de filtres (Eli Pariser, 2011), ingérences, Cambridge Analytica (2018), deepfakes.",
            "Régimes autoritaires : filtrage (« Grand pare-feu » chinois), blocages, coupures d'Internet.",
            "Démocraties : loi française du 22 décembre 2018, Viginum (2021), RGPD (2018), Digital Services Act (2022) ; loi Avia censurée en 2020.",
            "Réflexes de vérification : source, date, lecture latérale, recherche inversée d'image, fait ou opinion.",
          ],
          example: {
            statement: "Une vidéo partagée des milliers de fois sur un réseau social prétend montrer une manifestation violente « hier soir à Lyon ». Indiquez la démarche pour vérifier cette information.",
            solution: [
              "Identifier la source : qui a publié la vidéo en premier ? Un média reconnu, un compte anonyme, un compte créé récemment ?",
              "Chercher la date et le lieu réels : faire une recherche inversée à partir d'une capture d'écran pour voir si les images ont déjà circulé auparavant, ailleurs ou à une autre date.",
              "Examiner les indices internes : panneaux, langue parlée, météo, bâtiments reconnaissables qui confirment ou non qu'il s'agit de Lyon.",
              "Pratiquer la lecture latérale : des médias fiables ou des cellules de vérification ont-ils rapporté cet événement ?",
              "Distinguer le fait de son interprétation : même authentique, la vidéo peut être sortie de son contexte par un commentaire orienté.",
              "Conclusion : ne partager la vidéo qu'après avoir confirmé son origine ; à défaut, la considérer comme une information non vérifiée.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque date à l'événement correspondant et indiquez pour chacun s'il illustre plutôt la liberté de l'information ou son contrôle : 2010 ; 2013 ; 2018 (France) ; 2020 ; 2022 (Union européenne). Événements : adoption du Digital Services Act ; publication par WikiLeaks de documents diplomatiques américains ; révélations d'Edward Snowden sur la NSA ; loi contre la manipulation de l'information ; censure de l'essentiel de la loi Avia par le Conseil constitutionnel.",
              hint: "Les lanceurs d'alerte révèlent ; les lois régulent ; le Conseil constitutionnel protège les libertés contre une loi trop restrictive.",
              solution: [
                "2010 : WikiLeaks publie des documents diplomatiques américains ; liberté de l'information (révélation par des lanceurs d'alerte).",
                "2013 : Edward Snowden révèle la surveillance de la NSA ; liberté de l'information, qui met au jour un contrôle massif exercé par un État.",
                "2018 : loi du 22 décembre 2018 contre la manipulation de l'information ; régulation (contrôle encadré par le juge).",
                "2020 : le Conseil constitutionnel censure l'essentiel de la loi Avia ; protection de la liberté d'expression.",
                "2022 : adoption du Digital Services Act ; régulation des plateformes par l'Union européenne.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en une dizaine de lignes pourquoi les réseaux sociaux favorisent la diffusion des infox. Utilisez les notions d'algorithme de recommandation, de bulle de filtres et de chambre d'écho, et proposez deux réponses possibles.",
              hint: "Partez du modèle économique des plateformes : elles vivent de la publicité, donc du temps que les utilisateurs passent sur leurs contenus.",
              solution: [
                "Les plateformes tirent leurs revenus de la publicité : elles ont intérêt à maximiser le temps passé et les interactions.",
                "Leurs algorithmes de recommandation mettent donc en avant les contenus qui suscitent le plus de réactions (colère, peur, indignation), ce qui avantage souvent les contenus sensationnels ou faux.",
                "La bulle de filtres (Eli Pariser, 2011) enferme chaque utilisateur dans des contenus qui confirment ses opinions ; les chambres d'écho amplifient les mêmes messages au sein de groupes homogènes, où une infox est rarement contredite.",
                "La rapidité du partage empêche la vérification : une fausse information circule souvent plus vite que son démenti.",
                "Réponses possibles : la régulation, par exemple le Digital Services Act qui impose aux très grandes plateformes d'évaluer ces risques et d'expliquer leurs algorithmes ; l'éducation aux médias (CLEMI) et la vérification des faits par les rédactions.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Internet a-t-il rendu l'information plus libre ? ». Rédigez l'introduction et un plan détaillé en deux ou trois parties, avec des exemples précis et datés.",
              hint: "Évitez une réponse par oui ou non : montrez que la liberté a progressé, mais que de nouvelles formes de contrôle et de manipulation sont apparues.",
              solution: [
                "Accroche : en décembre 2010, des vidéos filmées au téléphone en Tunisie contournent la censure et contribuent à la chute du président Ben Ali en janvier 2011.",
                "Définitions : Internet est le réseau mondial d'ordinateurs, dont le Web et les réseaux sociaux sont des usages ; une information libre est produite et diffusée sans censure, de manière plurielle, et accessible à tous.",
                "Problématique : en permettant à chacun de produire et de diffuser l'information, Internet a-t-il libéré l'information ou a-t-il créé de nouvelles formes de contrôle et de manipulation ?",
                "I. Une libération de l'information : fin du monopole des grands médias ; journalisme citoyen ; printemps arabes ; lanceurs d'alerte (WikiLeaks 2010, Snowden 2013) ; accès mondial aux sources.",
                "II. De nouvelles menaces : infox et algorithmes ; bulles de filtres ; ingérences étrangères (élection américaine de 2016) ; exploitation des données (Cambridge Analytica, 2018) ; deepfakes ; censure et surveillance numériques dans les régimes autoritaires (Chine, Russie, Iran) ; pouvoir des plateformes privées (suspension du compte de Donald Trump en 2021).",
                "III. Un équilibre à construire : régulation démocratique (loi de 2018, Viginum, RGPD, Digital Services Act) ; limites posées par le juge (loi Avia censurée en 2020) ; éducation aux médias et vérification des faits.",
                "Conclusion : Internet a élargi la liberté d'expression mais a déplacé le débat entre liberté et contrôle ; l'enjeu n'est plus seulement la censure par l'État, mais aussi la manipulation et le pouvoir des plateformes.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion de l'information numérique à sa définition.",
            pairs: [
              { left: "Infox", right: "Fausse information diffusée, souvent pour tromper ou faire réagir" },
              { left: "Bulle de filtres", right: "Isolement de l'internaute dans des contenus conformes à ses goûts, sélectionnés par les algorithmes" },
              { left: "Lanceur d'alerte", right: "Personne qui révèle dans l'intérêt général des faits illégaux ou dangereux" },
              { left: "Deepfake", right: "Image ou vidéo truquée de manière réaliste grâce à l'intelligence artificielle" },
              { left: "Lecture latérale", right: "Vérifier une information en consultant d'autres sources plutôt qu'en restant sur la page" },
              { left: "Digital Services Act", right: "Règlement européen qui impose des obligations aux grandes plateformes" },
            ],
          },
          quiz: [
            {
              q: "Qui a décrit en 2011 la notion de « bulle de filtres » ?",
              options: ["Tim Berners-Lee", "Edward Snowden", "Julian Assange", "Eli Pariser"],
              answer: 3,
              why: "L'essayiste américain Eli Pariser a popularisé cette expression pour décrire l'effet des algorithmes de personnalisation.",
            },
            {
              q: "Que permet la loi française du 22 décembre 2018 ?",
              options: ["De bloquer l'ensemble des réseaux sociaux pendant toute la durée des campagnes électorales", "De saisir un juge contre les infox massives avant une élection nationale", "D'interdire la diffusion en France de tous les médias étrangers", "D'abroger la loi de 1881 sur la liberté de la presse"],
              answer: 1,
              why: "Pendant les trois mois précédant une élection nationale, un juge des référés peut ordonner en urgence l'arrêt de la diffusion de fausses informations.",
            },
            {
              q: "Quelle révélation a faite Edward Snowden en 2013 ?",
              options: ["La surveillance électronique massive pratiquée par la NSA", "Le scandale Cambridge Analytica", "Les documents diplomatiques publiés par WikiLeaks en 2010", "La création du Grand pare-feu chinois"],
              answer: 0,
              why: "Ancien sous-traitant de la NSA, Snowden a transmis à des journalistes des documents sur les programmes de surveillance américains.",
            },
            {
              q: "Pourquoi le Conseil constitutionnel a-t-il censuré l'essentiel de la loi Avia en 2020 ?",
              options: ["Parce qu'elle était jugée contraire au droit de l'Union européenne", "Parce qu'elle n'avait pas été votée par le Sénat", "Pour atteinte excessive à la liberté d'expression", "Parce qu'elle autorisait la haine en ligne"],
              answer: 2,
              why: "Les obligations de retrait très rapide sous peine de sanctions risquaient de pousser les plateformes à supprimer aussi des contenus licites.",
            },
            {
              q: "Quel réflexe permet de vérifier si une photographie a déjà circulé dans un autre contexte ?",
              options: ["Compter le nombre de partages", "La recherche inversée d'image", "Lire les commentaires", "Vérifier la qualité de l'image"],
              answer: 1,
              why: "La recherche inversée retrouve les publications antérieures de la même image, avec leur date et leur contexte d'origine.",
            },
          ],
          trap: "Opposer simplement un Internet de liberté à des médias anciens contrôlés : Internet élargit la liberté d'expression, mais il permet aussi la censure, la surveillance et la manipulation, et confie un grand pouvoir à des plateformes privées.",
          method: "Dans une dissertation sur l'information numérique, distinguez toujours trois acteurs du contrôle (les États, les plateformes privées, les citoyens) et pour chacun un exemple daté ; vous éviterez ainsi une copie qui ne parlerait que de fausses informations.",
        },
      ],
    },
    /* ==================================================================== */
    /* THÈME 5 · INTRODUCTION ET AXE 1 · POUVOIR POLITIQUE ET RELIGION       */
    /* ==================================================================== */
    {
      id: 'pouvoir-religion',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'etats-religions-monde',
          title: 'États et religions dans le monde actuel',
          minutes: 30,
          objectives: [
            "Décrire la diversité religieuse du monde actuel et sa répartition géographique.",
            "Distinguer les grands modèles de relations entre États et religions : théocratie, religion d'État, coopération, séparation, contrôle.",
            "Définir les notions de théocratie, religion d'État, laïcité et sécularisation.",
            "Expliquer pourquoi les religions restent un enjeu politique et géopolitique au XXIe siècle.",
          ],
          course: [
            {
              heading: "Un monde marqué par la diversité religieuse",
              paragraphs: [
                "Une religion associe des croyances (en une ou plusieurs divinités, ou en un ordre sacré du monde), des rites, une communauté de fidèles et, souvent, des institutions et des autorités religieuses. Selon le Pew Research Center (données de 2020 publiées en 2025), la population mondiale compte environ 29 % de chrétiens, 26 % de musulmans, 24 % de personnes sans affiliation religieuse, 15 % d'hindous et 4 % de bouddhistes, le reste se partageant entre de nombreuses autres religions.",
                "Ces religions sont inégalement réparties. Le christianisme domine en Amérique, en Europe et en Afrique subsaharienne ; l'islam s'étend du Maroc à l'Indonésie, le pays qui compte le plus de musulmans ; l'hindouisme est concentré en Inde et au Népal ; le bouddhisme en Asie de l'Est et du Sud-Est. Les personnes sans religion sont particulièrement nombreuses en Chine et en Europe occidentale.",
                "Au XXe siècle, beaucoup de sociologues, dans le prolongement de Max Weber et de son idée de « désenchantement du monde », pensaient que la modernisation ferait reculer partout la religion. Les faits ont nuancé cette thèse : révolution islamique en Iran (1979), poids des évangéliques aux États-Unis, essor des nationalismes religieux. Le politologue Gilles Kepel a parlé dès 1991 d'une « revanche de Dieu », et le sociologue américain Peter Berger a lui-même révisé à la fin des années 1990 la théorie de la sécularisation qu'il avait défendue.",
              ],
            },
            {
              heading: "Cinq grands modèles de relations entre États et religions",
              paragraphs: [
                "Dans une théocratie ou un État confessionnel, le pouvoir s'exerce au nom de Dieu et la loi religieuse inspire ou constitue la loi de l'État. En Iran, depuis 1979, un Guide suprême religieux domine les institutions ; en Arabie saoudite, la Loi fondamentale de 1992 fait du Coran et de la Sunna la constitution du royaume ; au Vatican, le pape est à la fois chef de l'Église catholique et souverain de l'État.",
                "D'autres États ont une religion d'État ou une Église établie, sans être des théocraties. Au Royaume-Uni, le monarque est gouverneur suprême de l'Église d'Angleterre ; au Danemark, la Constitution fait de l'Église évangélique luthérienne l'Église nationale soutenue par l'État ; au Maroc, l'islam est religion de l'État et le roi porte le titre de Commandeur des croyants. Un troisième modèle est celui de la coopération : en Allemagne, les Églises reconnues perçoivent un impôt collecté par l'État ; en Italie, les accords du Latran (1929, révisés en 1984) organisent les relations avec l'Église catholique.",
                "Le modèle de la séparation distingue juridiquement l'État et les religions : France (loi de 1905), États-Unis (premier amendement de 1791), Mexique (Constitution de 1917). Enfin, certains États contrôlent étroitement les religions, voire promeuvent l'athéisme : en Chine, le Parti communiste, officiellement athée, ne reconnaît que cinq religions (bouddhisme, taoïsme, islam, catholicisme, protestantisme), encadrées par des associations patriotiques ; en Corée du Nord, la liberté religieuse est quasi inexistante.",
              ],
              box: { label: "À retenir", text: "Théocratie (Iran, Vatican, Arabie saoudite) ; religion d'État ou Église établie (Royaume-Uni, Danemark, Maroc) ; coopération (Allemagne, Italie) ; séparation (France, États-Unis, Mexique) ; contrôle des religions (Chine, Corée du Nord)." },
            },
            {
              heading: "Des notions pour analyser : laïcité et sécularisation",
              paragraphs: [
                "Il faut distinguer deux processus. La sécularisation est un processus social : la religion perd de son influence sur la vie des individus et de la société (baisse de la pratique, autonomie de la science, de la morale, de la vie privée). La laïcisation est un processus politique et juridique : l'État se rend indépendant des religions et garantit la liberté de conscience. Les deux ne vont pas forcément ensemble : le Royaume-Uni, très sécularisé, conserve une Église établie, tandis que les États-Unis, qui séparent l'État et les Églises, restent une société très religieuse.",
                "La liberté de religion est reconnue par l'article 18 de la Déclaration universelle des droits de l'homme (1948), qui inclut la liberté de changer de religion. Mais elle est inégalement respectée : dans plusieurs pays, l'apostasie (le fait de renier sa religion) ou le blasphème sont lourdement punis, et des minorités religieuses sont persécutées, comme les Rohingyas musulmans en Birmanie, chassés en masse en 2017, ou les Ouïghours dans la région chinoise du Xinjiang.",
              ],
              box: { label: "Définition", text: "Sécularisation : recul de l'influence de la religion dans la société et dans la vie des individus. Laïcisation : processus par lequel l'État et les institutions publiques deviennent indépendants des religions. Théocratie : régime où le pouvoir est exercé au nom de Dieu, souvent par des religieux." },
            },
            {
              heading: "Les religions, un enjeu géopolitique",
              paragraphs: [
                "Les religions sont aussi des instruments de puissance et d'influence. Le Saint-Siège entretient des relations diplomatiques avec la plupart des États du monde et dispose d'un statut d'observateur permanent à l'ONU : le pape exerce une influence morale sans armée. L'Arabie saoudite, puissance sunnite gardienne des lieux saints de La Mecque et de Médine, et l'Iran, puissance chiite, s'affrontent indirectement au Moyen-Orient, notamment au Yémen ; la Russie s'appuie sur l'Église orthodoxe pour affirmer son influence.",
                "Les religions sont souvent mobilisées dans les conflits, mais il faut se garder d'y voir des « guerres de religion » au sens strict : les conflits d'Irlande du Nord, du Proche-Orient ou du Cachemire mêlent des enjeux territoriaux, nationaux, sociaux et politiques, dans lesquels l'appartenance religieuse sert de marqueur d'identité. Analyser les relations entre États et religions, c'est donc croiser l'histoire, la géographie, la science politique et la géopolitique, comme le demande le thème 5.",
              ],
            },
          ],
          keyPoints: [
            "Monde actuel (Pew, données 2020) : environ 29 % de chrétiens, 26 % de musulmans, 24 % sans religion, 15 % d'hindous, 4 % de bouddhistes.",
            "La thèse d'une disparition du religieux avec la modernité est nuancée : Iran 1979, « revanche de Dieu » (Kepel, 1991).",
            "Cinq modèles : théocratie, religion d'État ou Église établie, coopération, séparation, contrôle des religions.",
            "Sécularisation (processus social) et laïcisation (processus politique et juridique) ne vont pas toujours ensemble.",
            "Liberté de religion : article 18 de la DUDH (1948), inégalement respectée (Rohingyas, Ouïghours).",
            "Les religions sont des instruments d'influence (Saint-Siège, rivalité Arabie saoudite et Iran) et des marqueurs d'identité dans les conflits.",
          ],
          example: {
            statement: "Montrez, à partir de deux exemples, qu'un État peut avoir une religion officielle sans être une théocratie.",
            solution: [
              "Définir : une théocratie est un régime où le pouvoir est exercé au nom de Dieu et où la loi religieuse fonde la loi de l'État ; une religion d'État est une religion reconnue officiellement et liée aux institutions.",
              "Premier exemple, le Royaume-Uni : le monarque est gouverneur suprême de l'Église d'Angleterre, et des évêques siègent à la Chambre des lords.",
              "Mais le pouvoir y repose sur la souveraineté du Parlement élu, les lois ne dérivent pas de textes religieux et la liberté religieuse est garantie : ce n'est pas une théocratie.",
              "Second exemple, le Danemark : la Constitution fait de l'Église évangélique luthérienne l'Église nationale soutenue par l'État, mais le régime est une démocratie parlementaire et la société est très sécularisée.",
              "Contraste avec l'Iran, où le Guide suprême, religieux, domine les institutions et où la loi doit être conforme à l'islam.",
              "Conclusion : la religion d'État exprime un lien historique et symbolique entre l'État et une Église ; la théocratie fait de la religion le fondement même du pouvoir.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Classez les États suivants dans les cinq modèles du cours (théocratie, religion d'État ou Église établie, coopération, séparation, contrôle) et justifiez chaque fois en une phrase : Iran, Royaume-Uni, Allemagne, France, Chine, Maroc, États-Unis, Vatican.",
              hint: "Demandez-vous qui détient le pouvoir et au nom de quoi, puis si une religion est officiellement liée à l'État.",
              solution: [
                "Théocratie : l'Iran (un Guide suprême religieux domine les institutions depuis 1979) et le Vatican (le pape est souverain de l'État).",
                "Religion d'État ou Église établie : le Royaume-Uni (le monarque est gouverneur suprême de l'Église d'Angleterre) et le Maroc (l'islam est religion de l'État, le roi est Commandeur des croyants).",
                "Coopération : l'Allemagne (impôt d'Église collecté par l'État pour les Églises reconnues).",
                "Séparation : la France (loi de 1905) et les États-Unis (premier amendement de 1791).",
                "Contrôle : la Chine (Parti officiellement athée, cinq religions reconnues et encadrées).",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en une dizaine de lignes la différence entre sécularisation et laïcisation, en l'illustrant par les cas du Royaume-Uni et des États-Unis.",
              hint: "L'une concerne la société et les comportements, l'autre l'État et le droit : un pays peut connaître l'une sans l'autre.",
              solution: [
                "La sécularisation est un processus social : la religion perd de son influence sur les comportements, les croyances et les normes collectives (baisse de la pratique, autonomie de la morale et de la science).",
                "La laïcisation est un processus politique et juridique : l'État se sépare des religions, ne se fonde plus sur elles et garantit la liberté de conscience.",
                "Le Royaume-Uni est une société très sécularisée, où la pratique religieuse est faible, mais l'État n'est pas laïcisé : l'Église d'Angleterre reste établie et le monarque en est le gouverneur suprême.",
                "Les États-Unis présentent la situation inverse : le premier amendement (1791) interdit au Congrès d'établir une religion, mais la société reste très religieuse et la religion est très présente dans la vie publique.",
                "Conclusion : sécularisation et laïcisation sont deux processus distincts, qui peuvent se combiner (cas de la France) ou se dissocier.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : article 36 de la Constitution de la République populaire de Chine (1982), résumé et traduit. Les citoyens jouissent de la liberté de croyance religieuse ; nul ne peut les contraindre à croire ou à ne pas croire ; l'État protège les « activités religieuses normales » ; nul ne peut utiliser la religion pour troubler l'ordre public, nuire à la santé des citoyens ou entraver le système éducatif de l'État ; les organisations religieuses ne doivent pas être soumises à une domination étrangère. Consigne : montrez que ce texte proclame la liberté religieuse tout en organisant le contrôle des religions par l'État.",
              hint: "Repérez les expressions qui limitent la liberté proclamée (« normales », « domination étrangère ») et confrontez-les à vos connaissances sur la situation des religions en Chine.",
              solution: [
                "Présentation : il s'agit d'un article de la Constitution chinoise de 1982, adoptée sous Deng Xiaoping, dans un État dirigé par un Parti communiste officiellement athée.",
                "La liberté proclamée : le texte reconnaît la liberté de croire ou de ne pas croire, conformément en apparence à l'article 18 de la DUDH.",
                "Le contrôle organisé : l'État ne protège que les activités religieuses « normales », c'est-à-dire celles qu'il juge acceptables ; il se réserve donc de définir la religion autorisée. La référence à l'ordre public et au système éducatif lui permet de limiter toute pratique jugée dangereuse.",
                "Le refus de la « domination étrangère » vise notamment l'Église catholique, liée à Rome, et le bouddhisme tibétain, dont le chef spirituel, le dalaï-lama, est en exil depuis 1959 : seules cinq religions sont reconnues et encadrées par des associations patriotiques.",
                "Confrontation avec les connaissances : persécution des Ouïghours musulmans au Xinjiang, politique de « sinisation » des religions, accord provisoire de 2018 entre la Chine et le Saint-Siège sur la nomination des évêques, qui montre que l'État veut contrôler jusqu'au choix des responsables religieux.",
                "Limite du document : un texte constitutionnel dit la norme officielle, non la pratique réelle ; il faut le croiser avec des rapports d'ONG ou de chercheurs.",
                "Conclusion : la Chine illustre le modèle du contrôle, où la liberté religieuse est proclamée mais subordonnée à l'autorité du Parti et de l'État.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque État au modèle de relation entre État et religions qui le caractérise.",
            pairs: [
              { left: "Iran", right: "Théocratie dirigée par un Guide suprême religieux" },
              { left: "Royaume-Uni", right: "Église établie dont le monarque est gouverneur suprême" },
              { left: "Allemagne", right: "Coopération : impôt d'Église collecté par l'État" },
              { left: "France", right: "Séparation des Églises et de l'État depuis 1905" },
              { left: "Chine", right: "Contrôle de cinq religions reconnues par un Parti athée" },
              { left: "Maroc", right: "Islam religion d'État, roi Commandeur des croyants" },
            ],
          },
          quiz: [
            {
              q: "Selon le Pew Research Center (données de 2020), quelle est la religion la plus répandue dans le monde ?",
              options: ["L'islam", "L'hindouisme", "Le christianisme", "La religion traditionnelle chinoise"],
              answer: 2,
              why: "Environ 29 % de la population mondiale est chrétienne, devant les musulmans (environ 26 %).",
            },
            {
              q: "Quel est le pays qui compte le plus de musulmans au monde ?",
              options: ["L'Indonésie", "L'Arabie saoudite", "L'Iran", "La Turquie"],
              answer: 0,
              why: "L'Indonésie, en Asie du Sud-Est, est le pays le plus peuplé de musulmans ; l'islam n'est pas seulement une religion du Moyen-Orient.",
            },
            {
              q: "Que désigne la sécularisation ?",
              options: ["La séparation juridique de l'État et des Églises par la loi", "Le recul de l'influence de la religion dans la société", "Le passage d'une religion à une autre", "La domination du clergé sur les institutions de l'État"],
              answer: 1,
              why: "La sécularisation est un processus social ; la séparation juridique relève de la laïcisation.",
            },
            {
              q: "Qui a parlé en 1991 d'une « revanche de Dieu » ?",
              options: ["Max Weber", "Peter Berger", "Alexis de Tocqueville", "Gilles Kepel"],
              answer: 3,
              why: "Gilles Kepel désigne ainsi le retour des religions dans la vie politique depuis les années 1970.",
            },
            {
              q: "Dans quel État l'Église établie a-t-elle pour gouverneur suprême le monarque ?",
              options: ["Le Danemark", "La République d'Irlande", "Le Royaume-Uni", "La Confédération suisse"],
              answer: 2,
              why: "Le souverain britannique est gouverneur suprême de l'Église d'Angleterre ; au Danemark l'Église luthérienne est nationale, mais ce titre est propre au Royaume-Uni.",
            },
          ],
          trap: "Confondre religion d'État et théocratie, ou sécularisation et laïcisation : un État peut avoir une Église officielle tout en étant une démocratie sécularisée (Royaume-Uni, Danemark), et un État séparé des Églises peut gouverner une société très religieuse (États-Unis).",
          method: "Pour classer un État, posez trois questions dans l'ordre : au nom de quoi le pouvoir s'exerce-t-il ? une religion est-elle officiellement liée à l'État ? quelle liberté les autres croyances ont-elles ? Notez ensuite un texte précis (constitution, loi) qui justifie votre réponse.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'pouvoir-religion-histoire',
          title: 'Pouvoir et religion : des liens historiques traditionnels',
          minutes: 35,
          objectives: [
            "Expliquer comment la religion a servi à légitimer le pouvoir politique, de l'Antiquité à l'époque moderne.",
            "Analyser les relations et les rivalités entre pouvoir spirituel et pouvoir temporel en Occident médiéval (pape et empereur).",
            "Identifier d'autres formes d'union du politique et du religieux : le calife en islam, le roi sacré en France.",
            "Expliquer comment, à l'époque moderne, les États imposent la religion du souverain puis se heurtent à la question de la tolérance.",
          ],
          course: [
            {
              heading: "Légitimer le pouvoir par le sacré : l'exemple romain",
              paragraphs: [
                "Dans la plupart des sociétés anciennes, le pouvoir politique se présente comme voulu par les dieux. En Égypte, le pharaon porte le titre de « fils de Rê » ; en Chine, l'empereur, « Fils du Ciel », gouverne par le mandat céleste, qu'il peut perdre s'il gouverne mal. À Rome, Octave reçoit en 27 avant J.-C. le titre d'Augustus, chargé d'une valeur religieuse, et devient en 12 avant J.-C. grand pontife (pontifex maximus), chef de la religion publique. Les empereurs défunts peuvent être divinisés, et un culte impérial se développe dans tout l'Empire.",
                "Ce culte est un acte de loyauté politique : refuser de sacrifier pour l'empereur, c'est se montrer mauvais sujet. Les chrétiens, qui refusent, sont persécutés de façon intermittente, puis de façon générale sous Dèce (250) et Dioclétien (à partir de 303). Le basculement vient avec Constantin : après sa victoire du pont Milvius (312), il accorde avec Licinius la liberté de culte aux chrétiens par l'édit de Milan (313) et convoque le concile de Nicée (325). Théodose fait du christianisme nicéen la religion officielle par l'édit de Thessalonique (380), puis interdit les cultes païens en 391-392.",
              ],
              box: { label: "Définition", text: "Légitimité : qualité d'un pouvoir reconnu comme juste et accepté par ceux qui lui obéissent. Le pouvoir peut tirer sa légitimité de la religion (droit divin), de la tradition, ou du consentement du peuple." },
            },
            {
              heading: "Le pape et l'empereur : deux pouvoirs pour une chrétienté",
              paragraphs: [
                "Dans l'Occident chrétien, le pape Gélase Ier écrit en 494 à l'empereur que le monde est gouverné par deux pouvoirs : l'autorité sacrée des pontifes (auctoritas) et la puissance royale (potestas). Les deux collaborent : le roi franc Pépin le Bref est sacré en 751, puis par le pape Étienne II en 754 ; le jour de Noël 800, le pape Léon III couronne Charlemagne empereur à Rome, et en 962 Otton Ier fonde le Saint-Empire romain germanique. Le sacre fait du souverain l'élu de Dieu, mais suggère aussi que l'Église le fait roi.",
                "La rivalité éclate lors de la querelle des investitures. Le pape Grégoire VII affirme en 1075, dans les Dictatus papae, la supériorité du pouvoir pontifical ; la même année, il interdit aux laïcs de donner l'investiture aux évêques. L'empereur Henri IV refuse ; excommunié, il doit venir s'humilier devant le pape à Canossa en janvier 1077. Le concordat de Worms (1122) établit un compromis : l'investiture spirituelle des évêques revient à l'Église, l'investiture temporelle à l'empereur. Au début du XIVe siècle, le conflit entre Boniface VIII et le roi de France Philippe le Bel (bulle Unam sanctam, 1302, attentat d'Anagni, 1303) montre que les rois s'affirment désormais face au pape.",
                "En Orient, l'Empire byzantin associe plus étroitement les deux pouvoirs : l'empereur intervient dans les affaires de l'Église, ce que l'on a appelé, d'un terme moderne, le césaropapisme. La rupture de 1054 entre Rome et Constantinople sépare durablement chrétiens d'Occident et chrétiens orthodoxes.",
              ],
              box: { label: "Repère", text: "494 : Gélase distingue auctoritas et potestas. 800 : couronnement de Charlemagne. 1075 : Dictatus papae. 1077 : Canossa. 1122 : concordat de Worms. 1302 : bulle Unam sanctam." },
            },
            {
              heading: "Le roi sacré et le calife : d'autres alliances du politique et du religieux",
              paragraphs: [
                "En France, le roi est sacré à Reims, en souvenir du baptême de Clovis par l'évêque Remi, à la fin du Ve ou au début du VIe siècle. Oint d'une huile sainte, il devient un personnage sacré, réputé capable de guérir les malades des écrouelles en les touchant : l'historien Marc Bloch a étudié cette croyance dans Les Rois thaumaturges (1924). Le roi est « très chrétien » et protecteur de l'Église, mais il n'est pas prêtre : le pouvoir spirituel reste celui du clergé.",
                "Dans le monde musulman, le calife (khalifa, « successeur » ou « lieutenant ») succède au prophète Muhammad à la tête de la communauté des croyants et porte le titre de Commandeur des croyants. Il n'a pas d'autorité pour définir le dogme, qui relève des savants religieux, les oulémas, mais il garantit l'application de la loi religieuse. Le califat omeyyade de Damas (661-750) puis abbasside de Bagdad (750-1258) incarne cette union ; les sultans ottomans s'en réclament à leur tour, jusqu'à son abolition par la République turque le 3 mars 1924.",
              ],
            },
            {
              heading: "Réformes et États modernes : la religion du prince",
              paragraphs: [
                "Au XVIe siècle, les Réformes protestantes brisent l'unité de la chrétienté occidentale et renforcent le pouvoir des princes sur les Églises. En Angleterre, l'Acte de suprématie de 1534 fait d'Henri VIII le chef de l'Église d'Angleterre, détachée de Rome. Dans le Saint-Empire, la paix d'Augsbourg (1555) laisse chaque prince choisir entre catholicisme et luthéranisme pour ses sujets, principe résumé plus tard par la formule latine cujus regio, ejus religio (à chaque pays la religion de son prince).",
                "En France, après les guerres de Religion, l'édit de Nantes (1598) d'Henri IV accorde une tolérance limitée aux protestants. Louis XIV, roi absolu de droit divin, la juge contraire à l'unité du royaume et révoque l'édit en 1685 (édit de Fontainebleau). L'évêque Bossuet théorise cette monarchie : le roi tient son pouvoir de Dieu seul et n'en rend compte qu'à lui. La Déclaration des quatre articles (1682) affirme en même temps l'indépendance du roi de France face au pape : c'est le gallicanisme. Ces liens traditionnels seront remis en cause par les Lumières et les révolutions, ce qu'étudie l'axe 2.",
              ],
              box: { label: "À retenir", text: "Jusqu'au XVIIIe siècle, la religion légitime le pouvoir (sacre, droit divin, califat) et l'État impose souvent la religion du souverain (cujus regio, ejus religio, révocation de l'édit de Nantes). Mais pouvoir spirituel et pouvoir temporel restent rivaux autant qu'alliés." },
            },
          ],
          keyPoints: [
            "Rome : Auguste grand pontife (12 av. J.-C.), culte impérial ; Constantin et l'édit de Milan (313) ; Théodose et l'édit de Thessalonique (380).",
            "Gélase (494) : deux pouvoirs, l'autorité sacrée des pontifes et la puissance royale.",
            "Querelle des investitures : Dictatus papae (1075), Canossa (1077), concordat de Worms (1122).",
            "France : sacre à Reims, roi thaumaturge (Marc Bloch, 1924), monarchie de droit divin (Bossuet), gallicanisme (1682).",
            "Islam : le calife, successeur du Prophète et Commandeur des croyants ; califat aboli en 1924.",
            "Époque moderne : Acte de suprématie (1534), paix d'Augsbourg (1555), édit de Nantes (1598) révoqué en 1685.",
          ],
          example: {
            statement: "Expliquez en quoi la querelle des investitures (1075-1122) révèle à la fois l'alliance et la rivalité du pouvoir spirituel et du pouvoir temporel.",
            solution: [
              "Définir : le pouvoir spirituel est celui de l'Église sur les âmes ; le pouvoir temporel celui des rois et de l'empereur sur les affaires terrestres ; l'investiture est la remise de sa charge à un évêque.",
              "Rappeler l'alliance : depuis Gélase (494), les deux pouvoirs sont censés collaborer ; le pape couronne l'empereur (Charlemagne en 800, Otton Ier en 962), et les évêques sont aussi des seigneurs au service de l'empereur.",
              "Montrer la rivalité : en 1075, Grégoire VII affirme dans les Dictatus papae la supériorité du pape et, la même année, interdit l'investiture par les laïcs ; Henri IV refuse et est excommunié.",
              "Montrer le rapport de force : à Canossa, en janvier 1077, l'empereur doit faire pénitence pour être relevé de l'excommunication, ce qui montre la puissance de l'arme spirituelle.",
              "Montrer le compromis : le concordat de Worms (1122) partage l'investiture, spirituelle pour l'Église, temporelle pour l'empereur.",
              "Conclusion : la querelle montre que, dans la chrétienté médiévale, les deux pouvoirs ont besoin l'un de l'autre mais se disputent la primauté ; elle amorce une distinction entre le religieux et le politique.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque personnage à son rôle dans l'histoire des relations entre pouvoir et religion, avec une date : Constantin ; Théodose ; Gélase Ier ; Grégoire VII ; Henri VIII ; Louis XIV.",
              hint: "Quatre sont des souverains de l'Antiquité ou de l'époque moderne, deux sont des papes ; cherchez pour chacun le texte qu'il a promulgué ou écrit.",
              solution: [
                "Constantin : édit de Milan (313), qui accorde la liberté de culte aux chrétiens ; il convoque aussi le concile de Nicée (325).",
                "Théodose : édit de Thessalonique (380), qui fait du christianisme nicéen la religion officielle de l'Empire.",
                "Gélase Ier : lettre de 494 qui distingue l'autorité sacrée des pontifes et la puissance royale.",
                "Grégoire VII : Dictatus papae (1075), qui affirme la supériorité du pape ; il ouvre la querelle des investitures.",
                "Henri VIII : Acte de suprématie (1534), qui fait du roi le chef de l'Église d'Angleterre.",
                "Louis XIV : révocation de l'édit de Nantes (1685), au nom de l'unité religieuse du royaume.",
              ],
            },
            {
              level: 2,
              statement: "Comparez le roi de France sacré et le calife abbasside : en quoi tirent-ils leur légitimité de la religion ? Quelles sont les limites de leur pouvoir religieux ? Répondez en un paragraphe organisé d'une dizaine de lignes.",
              hint: "Ni l'un ni l'autre n'est un chef religieux qui définit le dogme : cherchez qui détient cette autorité dans chaque cas.",
              solution: [
                "Points communs : tous deux tirent leur légitimité de la religion. Le roi de France est sacré à Reims et oint d'une huile sainte, il est réputé thaumaturge ; le calife est le successeur du Prophète et Commandeur des croyants.",
                "Tous deux protègent la religion : le roi « très chrétien » défend l'Église, le calife garantit l'application de la loi religieuse et la défense de l'islam.",
                "Limites : le roi n'est pas prêtre, le pouvoir spirituel appartient au clergé et au pape, avec lequel il peut entrer en conflit (Philippe le Bel contre Boniface VIII) ; le calife ne définit pas le dogme, qui relève des oulémas.",
                "Différence : en Occident, l'Église est une institution distincte et hiérarchisée face au roi ; en islam, il n'y a pas d'Église, et le calife incarne l'unité de la communauté, politique et religieuse à la fois.",
                "Conclusion : dans les deux cas, la religion légitime le pouvoir sans que le souverain détienne toute l'autorité religieuse.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « Pouvoir politique et religion, de l'Antiquité au XVIIe siècle : une alliance sans conflits ? ». Rédigez l'introduction et un plan détaillé en deux ou trois parties, appuyé sur des exemples précis et datés.",
              hint: "Le sujet invite à nuancer : l'alliance est réelle (légitimation, protection), mais les conflits de primauté sont nombreux.",
              solution: [
                "Accroche : en janvier 1077, l'empereur Henri IV attend plusieurs jours, en pénitent, devant le château de Canossa pour obtenir le pardon du pape Grégoire VII.",
                "Définitions : le pouvoir politique (temporel) gouverne la société ; la religion, et le pouvoir spirituel qui en découle, encadre les croyances ; une alliance suppose un intérêt mutuel.",
                "Problématique : si religion et pouvoir politique se soutiennent mutuellement pendant des siècles, cette alliance ne cache-t-elle pas une rivalité pour la primauté ?",
                "I. Une alliance traditionnelle : la religion légitime le pouvoir (pontificat d'Auguste, culte impérial, sacre de Pépin et couronnement de Charlemagne, roi thaumaturge, califat, droit divin selon Bossuet) ; le pouvoir protège et impose la religion (édit de Thessalonique en 380, cujus regio ejus religio en 1555, révocation de l'édit de Nantes en 1685).",
                "II. Des rivalités pour la primauté : persécutions des chrétiens qui refusent le culte impérial ; querelle des investitures (1075-1122) ; Boniface VIII contre Philippe le Bel (1302-1303) ; affirmation des États face au pape (Acte de suprématie en 1534, gallicanisme en 1682).",
                "III. Des sujets pris entre deux fidélités : les minorités religieuses face à la religion du prince (protestants français après 1685) ; la question de la tolérance (édit de Nantes, 1598), qui annonce les débats des Lumières.",
                "Conclusion : l'alliance du trône et de l'autel est la règle, mais elle est traversée de conflits qui préparent, à partir du XVIIIe siècle, la distinction entre l'État et les religions.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes des relations entre pouvoir et religion dans l'ordre chronologique.",
            items: [
              "Auguste devient grand pontife",
              "Édit de Milan accordé par Constantin et Licinius",
              "Édit de Thessalonique de Théodose",
              "Couronnement de Charlemagne par le pape Léon III",
              "L'empereur Henri IV s'humilie à Canossa",
              "Acte de suprématie d'Henri VIII",
              "Révocation de l'édit de Nantes par Louis XIV",
            ],
          },
          quiz: [
            {
              q: "Quel édit accorde en 313 la liberté de culte aux chrétiens ?",
              options: ["L'édit de Thessalonique", "L'édit de Milan", "L'édit de Nantes", "L'édit de Fontainebleau"],
              answer: 1,
              why: "L'édit de Milan (313) de Constantin et Licinius accorde la tolérance ; l'édit de Thessalonique (380) fait du christianisme la religion officielle.",
            },
            {
              q: "Quel compromis met fin à la querelle des investitures en 1122 ?",
              options: ["La paix d'Augsbourg", "La bulle Unam sanctam", "Le concordat de Worms", "Le concile de Nicée"],
              answer: 2,
              why: "Le concordat de Worms partage l'investiture : spirituelle pour l'Église, temporelle pour l'empereur.",
            },
            {
              q: "Que signifie la formule cujus regio, ejus religio ?",
              options: ["À chaque pays la religion de son prince", "Le roi est l'élu de Dieu", "L'Église est au-dessus des rois", "Chaque sujet choisit librement sa propre religion"],
              answer: 0,
              why: "Elle résume le principe de la paix d'Augsbourg (1555) : les sujets suivent la religion de leur souverain.",
            },
            {
              q: "Que désigne le titre de calife ?",
              options: ["Le chef des savants religieux qui définit le dogme", "Le gouverneur d'une province de l'Empire ottoman", "Un juge religieux chargé d'appliquer la loi islamique", "Le successeur du Prophète à la tête des croyants"],
              answer: 3,
              why: "Le calife succède à Muhammad à la tête de la communauté ; le dogme relève des oulémas, pas du calife.",
            },
            {
              q: "Qui a étudié la croyance au pouvoir de guérison des rois dans Les Rois thaumaturges (1924) ?",
              options: ["Bossuet", "Marc Bloch", "Montesquieu", "Max Weber"],
              answer: 1,
              why: "L'historien Marc Bloch y analyse le toucher des écrouelles par les rois de France et d'Angleterre.",
            },
          ],
          trap: "Croire que le pape et le roi ou l'empereur ne font qu'un au Moyen Âge : dans l'Occident chrétien, le pouvoir spirituel et le pouvoir temporel sont distincts et souvent rivaux (querelle des investitures), même s'ils se légitiment mutuellement.",
          method: "Classez vos exemples en deux colonnes : « la religion au service du pouvoir » (sacre, culte impérial, droit divin) et « le pouvoir au service de la religion » (édit de Thessalonique, révocation de l'édit de Nantes), puis ajoutez une troisième colonne pour les conflits. Vous disposerez d'un plan prêt pour une dissertation.",
        },
      ],
    },
    /* ==================================================================== */
    /* THÈME 5 · AXE 2 · ÉTATS ET RELIGIONS : UNE INÉGALE SÉCULARISATION     */
    /* ==================================================================== */
    {
      id: 'secularisation',
      lessons: [
        /* ------------------------------------------------------------------ */
        {
          id: 'secularisation-laicite',
          title: 'Sécularisation et laïcisation : des chemins différents',
          minutes: 35,
          objectives: [
            "Définir et distinguer sécularisation, laïcisation et laïcité.",
            "Expliquer les étapes de la laïcisation en France, de la Révolution à la loi du 9 décembre 1905.",
            "Comparer le modèle français avec d'autres chemins : la laïcité autoritaire de la Turquie kémaliste, la séparation américaine, l'Église établie britannique.",
            "Analyser un texte fondateur : les articles 1 et 2 de la loi de 1905.",
          ],
          course: [
            {
              heading: "Deux processus distincts, nés des Lumières",
              paragraphs: [
                "À partir du XVIIe siècle, les guerres de Religion conduisent des penseurs à séparer la politique de la religion. Dans sa Lettre sur la tolérance (1689), John Locke soutient que le gouvernement civil doit s'occuper des biens terrestres et non du salut des âmes. Voltaire, dans son Traité sur la tolérance (1763), écrit à l'occasion de l'affaire Calas, dénonce le fanatisme. L'idée progresse que l'État doit garantir la liberté de conscience au lieu d'imposer une foi.",
                "Le sociologue Jean Baubérot propose de distinguer deux processus. La sécularisation est un processus social : la religion perd progressivement de son emprise sur les comportements, les savoirs et les normes, et devient une affaire de choix individuel. La laïcisation est un processus politique : l'État et les institutions publiques (école, état civil, hôpital) se détachent des religions, deviennent neutres et garantissent la liberté de conscience et l'égalité des citoyens quelles que soient leurs convictions.",
              ],
              box: { label: "Définition", text: "Laïcité : principe d'organisation de l'État qui repose sur la séparation de l'État et des cultes, la neutralité de l'État à l'égard des religions, la liberté de conscience et le libre exercice des cultes dans les limites de l'ordre public, et l'égalité de tous devant la loi quelles que soient leurs croyances." },
            },
            {
              heading: "La France : une laïcisation conflictuelle (1789-1905)",
              paragraphs: [
                "La Révolution rompt avec la monarchie de droit divin. La Déclaration de 1789 reconnaît la liberté d'opinions, « même religieuses » (article 10). La Constitution civile du clergé (1790) divise les catholiques ; le 20 septembre 1792, l'état civil est confié aux municipalités et le divorce est autorisé. Le Concordat signé en 1801 par Bonaparte et le pape Pie VII rétablit la paix religieuse : le catholicisme y est reconnu comme la religion de la grande majorité des Français, et l'État rémunère les ministres des cultes reconnus (catholique, puis protestants et, plus tard, juif).",
                "Sous la Troisième République, les républicains veulent soustraire l'école à l'influence de l'Église. Les lois Ferry rendent l'école primaire gratuite (1881), puis obligatoire et laïque (28 mars 1882) ; la loi Goblet (1886) confie l'enseignement public à un personnel laïque ; la loi Naquet rétablit le divorce en 1884. Dans un climat d'affrontement entre républicains et catholiques, aggravé par l'affaire Dreyfus, la France rompt ses relations diplomatiques avec le Saint-Siège en 1904.",
                "La loi du 9 décembre 1905, préparée par le député Aristide Briand, sépare les Églises et l'État. Son article 1 dispose : « La République assure la liberté de conscience. Elle garantit le libre exercice des cultes sous les seules restrictions édictées ci-après dans l'intérêt de l'ordre public. » Son article 2 ajoute : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » Le pape Pie X condamne la loi en 1906 et les inventaires des biens d'Église provoquent des heurts, avant un apaisement progressif. La laïcité devient un principe constitutionnel en 1946, puis à l'article 1 de la Constitution de 1958. L'Alsace et la Moselle, allemandes en 1905, ont conservé le régime concordataire.",
              ],
              box: { label: "Repère", text: "1789 : article 10 de la DDHC. 1801 : Concordat. 1881-1882 : lois Ferry. 1886 : loi Goblet. 9 décembre 1905 : loi de séparation des Églises et de l'État. 1958 : « La France est une République indivisible, laïque, démocratique et sociale » (article 1)." },
            },
            {
              heading: "La Turquie : une laïcité imposée par le haut",
              paragraphs: [
                "Après la défaite de l'Empire ottoman, Mustafa Kemal fonde la République de Turquie le 29 octobre 1923. Pour moderniser le pays sur le modèle européen, il abolit le califat le 3 mars 1924, ferme les confréries religieuses en 1925, adopte en 1926 un code civil inspiré du code suisse, qui interdit la polygamie, supprime en 1928 la mention de l'islam comme religion de l'État et impose l'alphabet latin. En 1937, la laïcité est inscrite dans la Constitution.",
                "Cette laïcité est autoritaire et ne repose pas sur une séparation : dès 1924, la Présidence des affaires religieuses (Diyanet) place l'islam sunnite sous la tutelle de l'État, qui rémunère les imams et contrôle les prêches. Imposée par une élite à une société restée très religieuse, elle est remise en cause par l'AKP, le parti islamo-conservateur au pouvoir depuis 2002 : sous Recep Tayyip Erdoğan, le Diyanet est devenu un instrument de diffusion d'un islam conservateur, et l'ancienne basilique Sainte-Sophie, musée depuis 1934, a été reconvertie en mosquée en 2020.",
              ],
            },
            {
              heading: "États-Unis et Royaume-Uni : séparation sans sécularisation, sécularisation sans séparation",
              paragraphs: [
                "Aux États-Unis, le premier amendement à la Constitution (1791) interdit au Congrès de faire une loi établissant une religion ou en interdisant le libre exercice. Thomas Jefferson parle en 1802 d'un « mur de séparation » entre l'Église et l'État. Pourtant, cette séparation protège d'abord la liberté des Églises, nombreuses et concurrentes, et la société reste très religieuse : la devise officielle « In God We Trust » est adoptée en 1956, et le sociologue Robert Bellah a décrit en 1967 une « religion civile » américaine, qui donne une dimension sacrée à la nation.",
                "Le Royaume-Uni suit le chemin inverse. L'Église d'Angleterre reste l'Église établie : le monarque en est le gouverneur suprême, vingt-six évêques siègent à la Chambre des lords, et le couronnement de Charles III a eu lieu en 2023 à l'abbaye de Westminster, présidé par l'archevêque de Cantorbéry. Mais la société est profondément sécularisée : au recensement de 2021 en Angleterre et au pays de Galles, les chrétiens ne représentent plus que 46 % de la population et 37 % des habitants se déclarent sans religion. Il n'y a donc pas un modèle unique, mais des chemins variés selon l'histoire de chaque pays.",
              ],
              box: { label: "À retenir", text: "France : laïcisation et sécularisation, au terme d'un conflit. Turquie : laïcité imposée par le haut, avec contrôle de l'islam par l'État. États-Unis : séparation, mais société très religieuse. Royaume-Uni : Église établie, mais société très sécularisée." },
            },
          ],
          keyPoints: [
            "Sécularisation : recul social de la religion ; laïcisation : détachement de l'État et des institutions à l'égard des religions.",
            "France : Concordat (1801), lois Ferry (1881-1882), loi Goblet (1886), loi de séparation du 9 décembre 1905, laïcité constitutionnelle (1946, 1958).",
            "Loi de 1905 : liberté de conscience et libre exercice des cultes (article 1) ; aucun culte reconnu, salarié ni subventionné (article 2).",
            "Turquie : abolition du califat (1924), code civil (1926), laïcité dans la Constitution (1937), mais islam contrôlé par le Diyanet.",
            "États-Unis : premier amendement (1791) et « mur de séparation », mais religion civile et forte religiosité.",
            "Royaume-Uni : Église d'Angleterre établie, mais société très sécularisée (recensement de 2021).",
          ],
          example: {
            statement: "Expliquez pourquoi la laïcité turque instaurée par Mustafa Kemal diffère de la laïcité française de 1905.",
            solution: [
              "Rappeler le modèle français : la loi de 1905 sépare les Églises et l'État ; la République ne reconnaît ni ne subventionne aucun culte, mais garantit la liberté de conscience et le libre exercice des cultes.",
              "Présenter le modèle turc : Mustafa Kemal abolit le califat (1924), adopte un code civil laïque (1926), retire l'islam de la Constitution (1928) et inscrit la laïcité en 1937.",
              "Montrer la différence principale : en Turquie, l'État ne se sépare pas de la religion, il la contrôle ; le Diyanet, créé en 1924, encadre l'islam sunnite, rémunère les imams et surveille les prêches.",
              "Montrer la différence d'origine : en France, la laïcité est l'aboutissement d'un long conflit politique dans une société déjà en voie de sécularisation ; en Turquie, elle est imposée rapidement par une élite à une société restée très religieuse.",
              "Montrer les conséquences : la laïcité turque est contestée et réinterprétée par l'AKP depuis 2002, comme le montre la reconversion de Sainte-Sophie en mosquée en 2020.",
              "Conclusion : la laïcité française est une séparation qui garantit la neutralité de l'État ; la laïcité kémaliste est un contrôle autoritaire de la religion au service de la modernisation.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Pour chacune des mesures suivantes, indiquez s'il s'agit d'une étape de laïcisation, et précisez le pays et la date : la création d'un état civil tenu par les municipalités ; l'abolition du califat ; la loi rendant l'école primaire publique obligatoire et laïque ; l'adoption d'un code civil inspiré du code suisse ; la loi de séparation des Églises et de l'État ; l'adoption de la devise « In God We Trust ».",
              hint: "Une mesure de laïcisation retire à la religion un rôle public (état civil, école, droit) ; l'une des mesures va en sens inverse.",
              solution: [
                "État civil confié aux municipalités : France, 20 septembre 1792 ; laïcisation.",
                "Abolition du califat : Turquie, 3 mars 1924 ; laïcisation.",
                "École primaire obligatoire et laïque : France, loi Ferry du 28 mars 1882 ; laïcisation.",
                "Code civil inspiré du code suisse : Turquie, 1926 ; laïcisation du droit de la famille.",
                "Loi de séparation des Églises et de l'État : France, 9 décembre 1905 ; laïcisation.",
                "« In God We Trust » : États-Unis, 1956 ; ce n'est pas une laïcisation, mais l'affirmation d'une religion civile dans un État pourtant séparé des Églises.",
              ],
            },
            {
              level: 2,
              statement: "Le Royaume-Uni a une Église établie et les États-Unis séparent l'État et les Églises. Pourtant, la société britannique est plus sécularisée que la société américaine. Expliquez ce paradoxe en une dizaine de lignes, en mobilisant les notions de sécularisation et de laïcisation.",
              hint: "Ne confondez pas le statut juridique des religions et la place réelle de la religion dans la vie des habitants.",
              solution: [
                "La laïcisation concerne le droit et les institutions ; la sécularisation concerne la société et les croyances : ces deux processus peuvent évoluer séparément.",
                "Au Royaume-Uni, l'Église d'Angleterre reste établie (le monarque en est le gouverneur suprême, des évêques siègent à la Chambre des lords) : l'État n'est pas laïcisé. Mais la pratique religieuse a fortement reculé et, au recensement de 2021 en Angleterre et au pays de Galles, 37 % des habitants se déclarent sans religion.",
                "Aux États-Unis, le premier amendement (1791) interdit d'établir une religion : l'État est séparé des Églises. Mais cette séparation a d'abord protégé la liberté et la concurrence des Églises, ce qui a favorisé une vitalité religieuse durable.",
                "La religion reste très présente dans la vie publique américaine (devise de 1956, religion civile décrite par Robert Bellah en 1967).",
                "Conclusion : le statut juridique des religions ne détermine pas à lui seul leur poids dans la société ; il faut toujours distinguer laïcisation et sécularisation.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : loi du 9 décembre 1905 concernant la séparation des Églises et de l'État, articles 1 et 2. Article 1 : « La République assure la liberté de conscience. Elle garantit le libre exercice des cultes sous les seules restrictions édictées ci-après dans l'intérêt de l'ordre public. » Article 2 (début) : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » L'article 2 prévoit ensuite que les dépenses d'aumônerie peuvent être prises en charge pour assurer le libre exercice des cultes dans les établissements publics fermés, comme les lycées, les hospices et les prisons. Consigne : présentez le document, expliquez les principes qu'il établit et montrez sa portée.",
              hint: "Situez la loi dans le conflit entre républicains et catholiques ; montrez que l'article 1 donne des garanties et que l'article 2 opère la séparation ; expliquez le sens de l'exception des aumôneries.",
              solution: [
                "Présentation : texte législatif adopté sous la Troisième République, préparé par Aristide Briand, au terme d'un conflit entre républicains et Église catholique (lois Ferry, affaire Dreyfus, rupture avec le Saint-Siège en 1904).",
                "Article 1 : la loi commence par des garanties ; la liberté de conscience (croire ou ne pas croire) et le libre exercice des cultes sont assurés, avec pour seule limite l'ordre public. La séparation n'est donc pas dirigée contre les religions.",
                "Article 2 : il met fin au régime concordataire de 1801 ; l'État ne reconnaît plus de cultes officiels, ne paie plus les ministres des cultes et ne finance plus les cultes. C'est le principe de neutralité de l'État.",
                "L'exception des aumôneries montre la cohérence du texte : là où les personnes ne peuvent pas sortir (internats, hôpitaux, prisons), l'État finance l'aumônerie pour garantir concrètement la liberté de culte affirmée à l'article 1.",
                "Portée : la loi est d'abord condamnée par le pape Pie X (1906) et provoque la crise des inventaires, puis s'impose ; la laïcité devient constitutionnelle (1946, 1958). Limite : elle ne s'applique pas en Alsace-Moselle, restée sous le régime concordataire.",
                "Conclusion : ces deux articles fondent une laïcité de séparation et de liberté, qui distingue la France des modèles de contrôle (Turquie) ou d'Église établie (Royaume-Uni).",
              ],
            },
          ],
          game: {
            kind: 'truefalse',
            prompt: "Vrai ou faux ? Testez vos connaissances sur la sécularisation et la laïcisation.",
            statements: [
              { text: "Sécularisation et laïcisation désignent exactement le même processus.", true: false, why: "La sécularisation est sociale (recul de la religion dans la société), la laïcisation est politique et juridique." },
              { text: "La loi de 1905 interdit la pratique religieuse dans l'espace public.", true: false, why: "Son article 1 garantit au contraire le libre exercice des cultes, avec pour seule limite l'ordre public." },
              { text: "L'Alsace et la Moselle relèvent encore aujourd'hui du régime concordataire.", true: true, why: "Allemandes en 1905, elles n'ont pas été soumises à la loi de séparation et ont conservé le Concordat." },
              { text: "En Turquie, l'État kémaliste contrôle l'islam par le Diyanet.", true: true, why: "La laïcité turque est un contrôle de la religion par l'État, non une séparation." },
              { text: "Les États-Unis ont une Église officielle protestante.", true: false, why: "Le premier amendement (1791) interdit au Congrès d'établir une religion." },
              { text: "Le monarque britannique est gouverneur suprême de l'Église d'Angleterre.", true: true, why: "L'Église d'Angleterre est une Église établie, liée à la Couronne depuis l'Acte de suprématie de 1534." },
              { text: "La laïcité figure à l'article 1 de la Constitution de 1958.", true: true, why: "« La France est une République indivisible, laïque, démocratique et sociale. »" },
            ],
          },
          quiz: [
            {
              q: "Que dispose l'article 2 de la loi du 9 décembre 1905 ?",
              options: ["La République reconnaît et finance quatre cultes officiels sur tout son territoire", "La République interdit toute manifestation religieuse sur la voie publique", "La République rémunère les prêtres catholiques", "La République ne reconnaît, ne salarie ni ne subventionne aucun culte"],
              answer: 3,
              why: "Cet article met fin au régime concordataire de 1801 : l'État cesse de reconnaître et de financer les cultes.",
            },
            {
              q: "Quelle institution turque, créée en 1924, place l'islam sous la tutelle de l'État ?",
              options: ["Le Diyanet", "Le califat", "L'AKP", "La Grande Assemblée nationale"],
              answer: 0,
              why: "La Présidence des affaires religieuses (Diyanet) rémunère les imams et contrôle les prêches.",
            },
            {
              q: "Quel texte ouvre la laïcisation de l'école en France ?",
              options: ["Le Concordat de 1801", "Les lois Ferry de 1881-1882", "La loi Falloux de 1850", "La Constitution civile du clergé"],
              answer: 1,
              why: "Les lois Ferry rendent l'école primaire publique gratuite, obligatoire et laïque ; la loi Falloux avait au contraire renforcé la place de l'Église.",
            },
            {
              q: "Qui a parlé d'une « religion civile » américaine en 1967 ?",
              options: ["Thomas Jefferson", "Alexis de Tocqueville", "Robert Bellah", "John Locke"],
              answer: 2,
              why: "Le sociologue Robert Bellah désigne ainsi les croyances et rituels qui donnent une dimension sacrée à la nation américaine.",
            },
            {
              q: "En quelle année la laïcité est-elle inscrite dans la Constitution turque ?",
              options: ["1923", "1924", "1928", "1937"],
              answer: 3,
              why: "La République est proclamée en 1923, le califat aboli en 1924, l'islam retiré de la Constitution en 1928, et la laïcité inscrite en 1937.",
            },
          ],
          trap: "Croire que la laïcité française est hostile aux religions ou qu'elle les chasse de l'espace public : la loi de 1905 garantit d'abord la liberté de conscience et le libre exercice des cultes ; c'est l'État, et non la société, qui doit être neutre.",
          method: "Pour comparer des modèles, construisez un tableau à trois lignes (statut juridique des religions, place de la religion dans la société, origine historique du modèle) et une colonne par pays : France, Turquie, États-Unis, Royaume-Uni. Le tableau fait apparaître d'un coup d'œil la distinction entre laïcisation et sécularisation.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'religion-vie-politique',
          title: 'La religion dans la vie politique d’États contemporains',
          minutes: 30,
          objectives: [
            "Analyser la place de la religion dans la vie politique des États-Unis, État séparé des Églises.",
            "Expliquer le fonctionnement de la République islamique d'Iran, théocratie née de la révolution de 1979.",
            "Identifier comment des pouvoirs contemporains mobilisent la religion au service d'un projet national (Russie, Turquie, Israël).",
            "Comparer ces situations pour montrer l'inégale sécularisation des États.",
          ],
          course: [
            {
              heading: "Les États-Unis : une nation séparée des Églises mais « sous Dieu »",
              paragraphs: [
                "Les États-Unis séparent l'État et les Églises depuis le premier amendement (1791), mais la religion occupe une place centrale dans la vie publique. Pendant la guerre froide, pour se distinguer de l'URSS officiellement athée, le Congrès ajoute en 1954 les mots « under God » au serment d'allégeance au drapeau, puis adopte en 1956 la devise « In God We Trust ». Les présidents prêtent traditionnellement serment sur une Bible et terminent souvent leurs discours en appelant la bénédiction de Dieu sur l'Amérique.",
                "La Cour suprême veille pourtant à la séparation : en 1962, l'arrêt Engel v. Vitale interdit la prière officielle dans les écoles publiques. En réaction à ces décisions et à la libéralisation des mœurs, une droite religieuse se mobilise à partir de la fin des années 1970 : l'association Moral Majority, fondée en 1979 par le pasteur Jerry Falwell, encourage les évangéliques à voter, majoritairement pour le Parti républicain. L'avortement, légalisé au niveau fédéral par l'arrêt Roe v. Wade (1973), devient un enjeu majeur : le 24 juin 2022, l'arrêt Dobbs v. Jackson renverse Roe et rend aux États fédérés le pouvoir de l'interdire.",
              ],
              box: { label: "Repère", text: "États-Unis : premier amendement (1791) ; « under God » (1954) ; « In God We Trust » (1956) ; Engel v. Vitale (1962) ; Roe v. Wade (1973) ; Moral Majority (1979) ; Dobbs v. Jackson (2022)." },
            },
            {
              heading: "L'Iran : une théocratie née d'une révolution",
              paragraphs: [
                "En 1979, une révolution renverse le chah Mohammad Reza Pahlavi, dont le régime autoritaire avait mené une modernisation à l'occidentale. L'ayatollah Rouhollah Khomeini, revenu d'exil le 1er février 1979, fait proclamer la République islamique après un référendum au printemps 1979, puis adopter une Constitution en décembre 1979. Celle-ci repose sur le principe du velayat-e faqih, la « tutelle du juriste-théologien » : en l'absence de l'imam caché attendu par les chiites duodécimains, le pouvoir doit être guidé par un religieux compétent en droit islamique.",
                "Le Guide suprême, désigné par une Assemblée des experts composée de religieux élus, commande les forces armées et domine les institutions ; Ali Khamenei a succédé à Khomeini en 1989. Le président et le Parlement sont élus au suffrage universel, mais le Conseil des gardiens de la Constitution, composé de douze membres dont six religieux nommés par le Guide, vérifie la conformité des lois à l'islam et filtre les candidatures. La société iranienne conteste ce système : mouvement vert après l'élection présidentielle de 2009, manifestations de 2022 après la mort de Mahsa Amini, arrêtée par la police des mœurs pour un voile jugé mal porté, sous le slogan « Femme, vie, liberté ».",
              ],
              box: { label: "Définition", text: "Velayat-e faqih : « tutelle du juriste-théologien », principe théorisé par Khomeini selon lequel un religieux spécialiste du droit islamique doit exercer l'autorité suprême. Il fonde le pouvoir du Guide suprême dans la Constitution iranienne de 1979." },
            },
            {
              heading: "La religion au service du projet national : Russie, Turquie, Israël",
              paragraphs: [
                "Dans plusieurs États dont la Constitution n'est pas religieuse, les dirigeants mobilisent la religion pour renforcer l'identité nationale et leur légitimité. La Constitution russe de 1993 proclame un État laïque, mais une loi de 1997 reconnaît le rôle particulier de l'orthodoxie dans l'histoire de la Russie, et la révision constitutionnelle de 2020 évoque la foi en Dieu transmise par les ancêtres. Le patriarche Kirill, élu en 2009, soutient le pouvoir de Vladimir Poutine, y compris la guerre contre l'Ukraine lancée en 2022.",
                "En Turquie, l'AKP au pouvoir depuis 2002 a renforcé le rôle du Diyanet et la place de l'islam dans l'éducation et dans le discours politique, tout en conservant formellement la laïcité dans la Constitution. En Israël, défini comme un État juif et démocratique, il n'existe pas de mariage civil célébré dans le pays : le mariage relève des autorités religieuses de chaque communauté. Les partis religieux pèsent dans les coalitions gouvernementales, et la loi fondamentale de 2018 définit Israël comme l'État-nation du peuple juif.",
                "Ces exemples montrent que la sécularisation n'est ni universelle ni linéaire. La religion peut être le fondement du pouvoir (Iran), un marqueur d'identité nationale mobilisé par l'État (Russie, Turquie, Israël, et l'Inde étudiée dans la leçon suivante), ou un acteur de la compétition démocratique dans un État séparé des Églises (États-Unis).",
              ],
            },
          ],
          keyPoints: [
            "États-Unis : séparation (1791) mais religion civile ; « under God » (1954), « In God We Trust » (1956).",
            "Droite religieuse : Moral Majority (1979) ; l'avortement comme enjeu, de Roe v. Wade (1973) à Dobbs v. Jackson (2022).",
            "Iran : révolution de 1979, velayat-e faqih, Guide suprême, Conseil des gardiens ; contestation de 2009 et de 2022 (« Femme, vie, liberté »).",
            "Russie : État laïque (1993), mais orthodoxie valorisée (loi de 1997, révision de 2020) ; patriarche Kirill soutien du pouvoir.",
            "Turquie (AKP depuis 2002) et Israël (État juif et démocratique, loi de 2018) : la religion comme marqueur national.",
            "La sécularisation est inégale : religion fondement du pouvoir, ressource identitaire, ou acteur du débat démocratique.",
          ],
          example: {
            statement: "Montrez que la République islamique d'Iran combine des institutions religieuses et des institutions élues, et expliquez lesquelles dominent.",
            solution: [
              "Présenter le contexte : la révolution de 1979 renverse le chah ; Khomeini fait adopter en décembre 1979 une Constitution fondée sur le velayat-e faqih.",
              "Identifier les institutions élues : le président de la République et le Parlement sont élus au suffrage universel ; l'Assemblée des experts est elle aussi élue.",
              "Identifier les institutions religieuses : le Guide suprême, religieux, commande les armées et oriente la politique ; le Conseil des gardiens, dont six membres sont des religieux nommés par le Guide, contrôle les lois et les candidatures.",
              "Montrer la hiérarchie : les candidats aux élections sont filtrés par le Conseil des gardiens, et toute loi doit être conforme à l'islam ; les institutions religieuses encadrent donc les institutions élues.",
              "Nuancer : les élections restent un lieu d'expression et de contestation (2009), et la société proteste contre les règles religieuses imposées (2022).",
              "Conclusion : l'Iran est une théocratie dotée d'institutions électives, où l'autorité religieuse du Guide l'emporte sur la souveraineté populaire.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "Associez chaque élément à l'État concerné (États-Unis, Iran, Russie, Israël) et indiquez en quelques mots ce qu'il révèle de la place de la religion : le Conseil des gardiens ; l'arrêt Dobbs v. Jackson ; le patriarche Kirill ; l'absence de mariage civil célébré dans le pays ; la devise « In God We Trust » ; le velayat-e faqih.",
              hint: "Deux éléments concernent l'Iran et deux les États-Unis.",
              solution: [
                "Conseil des gardiens : Iran ; des religieux contrôlent les lois et les candidatures.",
                "Velayat-e faqih : Iran ; le pouvoir suprême appartient à un religieux, fondement théocratique du régime.",
                "Dobbs v. Jackson (2022) : États-Unis ; une question morale portée par la droite religieuse transforme le droit.",
                "« In God We Trust » (1956) : États-Unis ; religion civile dans un État séparé des Églises.",
                "Patriarche Kirill : Russie ; l'Église orthodoxe soutient le pouvoir politique.",
                "Absence de mariage civil célébré dans le pays : Israël ; le statut personnel relève des autorités religieuses.",
              ],
            },
            {
              level: 2,
              statement: "Comparez la place de la religion dans la vie politique des États-Unis et de l'Iran. Répondez en un paragraphe organisé d'une dizaine de lignes, en distinguant le statut juridique de la religion et son influence réelle.",
              hint: "Dans les deux pays la religion pèse lourd, mais par des voies opposées : l'une passe par les institutions, l'autre par les électeurs et la société.",
              solution: [
                "Statut juridique opposé : aux États-Unis, le premier amendement interdit d'établir une religion et la Cour suprême veille à la séparation (Engel v. Vitale, 1962) ; en Iran, la Constitution de 1979 fait de l'islam chiite le fondement de l'État et confie l'autorité suprême à un religieux.",
                "Influence réelle forte dans les deux cas : aux États-Unis, la religion civile (« In God We Trust ») et la mobilisation électorale des évangéliques depuis la Moral Majority (1979) pèsent sur les grands débats, comme l'avortement (Dobbs v. Jackson, 2022).",
                "En Iran, l'influence passe par les institutions : le Guide suprême et le Conseil des gardiens encadrent les élus et imposent des normes religieuses à la société.",
                "Différence essentielle : aux États-Unis, la religion est un acteur parmi d'autres d'un débat démocratique pluraliste ; en Iran, elle est imposée par l'État, et la contestation (2009, 2022) est réprimée.",
                "Conclusion : un État séparé des Églises peut gouverner une société très religieuse, tandis qu'une théocratie peut se heurter à une société qui se sécularise.",
              ],
            },
            {
              level: 3,
              statement: "Sujet de dissertation (type bac) : « La religion, un instrument au service du pouvoir dans les États contemporains ? ». Rédigez l'introduction et un plan détaillé en deux ou trois parties, appuyé sur au moins trois États étudiés.",
              hint: "Montrez que la religion est souvent instrumentalisée, mais qu'elle peut aussi être une force autonome, voire une force d'opposition.",
              solution: [
                "Accroche : en 2022, le patriarche Kirill de Moscou soutient publiquement la guerre lancée par la Russie contre l'Ukraine.",
                "Définitions : la religion est un ensemble de croyances, de rites et d'institutions ; un instrument est un moyen utilisé pour atteindre un but, ici la légitimation du pouvoir ou l'affirmation d'une identité nationale.",
                "Problématique : dans des États qui se disent pour la plupart laïques ou séparés des Églises, la religion est-elle surtout utilisée par les gouvernants, ou conserve-t-elle une force propre qui peut aussi les contester ?",
                "I. Une ressource mobilisée par les pouvoirs : Russie (orthodoxie valorisée, loi de 1997, révision de 2020, soutien de Kirill) ; Turquie (Diyanet, reconversion de Sainte-Sophie en 2020) ; Inde (nationalisme hindou) ; Israël (État juif, loi de 2018).",
                "II. Une religion fondement du pouvoir : l'Iran depuis 1979, où le religieux ne sert pas seulement le pouvoir mais le détient (velayat-e faqih, Guide suprême, Conseil des gardiens).",
                "III. Une force autonome, parfois contestataire : aux États-Unis, la droite religieuse agit comme un groupe de pression dans le jeu démocratique (Moral Majority, Dobbs v. Jackson) ; ailleurs, des croyants s'opposent au pouvoir, et la société iranienne conteste la théocratie (2009, 2022).",
                "Conclusion : la religion est souvent instrumentalisée, mais elle reste un acteur politique à part entière ; la diversité des situations montre l'inégale sécularisation des États contemporains.",
              ],
            },
          ],
          game: {
            kind: 'pairs',
            prompt: "Associez chaque notion ou institution à sa définition.",
            pairs: [
              { left: "Guide suprême", right: "Religieux qui détient l'autorité suprême en Iran depuis 1979" },
              { left: "Conseil des gardiens", right: "Institution iranienne qui contrôle les lois et filtre les candidatures" },
              { left: "Moral Majority", right: "Association de la droite religieuse américaine fondée en 1979" },
              { left: "Dobbs v. Jackson", right: "Arrêt de 2022 qui renverse Roe v. Wade sur l'avortement" },
              { left: "Religion civile", right: "Croyances et rituels qui donnent une dimension sacrée à la nation" },
              { left: "Patriarche Kirill", right: "Chef de l'Église orthodoxe russe, soutien du pouvoir" },
            ],
          },
          quiz: [
            {
              q: "Quelle expression est ajoutée en 1954 au serment d'allégeance américain ?",
              options: ["« under God »", "« In God We Trust »", "« One nation »", "« E pluribus unum »"],
              answer: 0,
              why: "« under God » est ajouté en 1954 ; « In God We Trust » devient la devise officielle en 1956.",
            },
            {
              q: "Sur quel principe repose le pouvoir du Guide suprême iranien ?",
              options: ["La séparation des pouvoirs", "Le califat", "Le velayat-e faqih", "La souveraineté nationale"],
              answer: 2,
              why: "La « tutelle du juriste-théologien » confie l'autorité suprême à un religieux spécialiste du droit islamique.",
            },
            {
              q: "Quel arrêt de la Cour suprême américaine renverse Roe v. Wade en 2022 ?",
              options: ["Engel v. Vitale", "Brown v. Board of Education", "Marbury v. Madison", "Dobbs v. Jackson"],
              answer: 3,
              why: "L'arrêt Dobbs v. Jackson du 24 juin 2022 rend aux États fédérés le pouvoir d'interdire l'avortement.",
            },
            {
              q: "Que dit la Constitution russe de 1993 sur la religion ?",
              options: ["Elle fait de l'orthodoxie la religion d'État", "Elle proclame un État laïque", "Elle interdit les cultes non chrétiens", "Elle confie le pouvoir au patriarche"],
              answer: 1,
              why: "La Constitution de 1993 proclame un État laïque, même si la loi de 1997 et la révision de 2020 valorisent l'orthodoxie.",
            },
            {
              q: "Quel événement déclenche en Iran le mouvement « Femme, vie, liberté » en 2022 ?",
              options: ["La réélection contestée du président Mahmoud Ahmadinejad", "La mort de Mahsa Amini, arrêtée par la police des mœurs", "La mort de l'ayatollah Khomeini", "L'annonce de la fermeture de toutes les universités du pays"],
              answer: 1,
              why: "Mahsa Amini meurt en septembre 2022 après avoir été arrêtée pour un voile jugé mal porté ; la réélection contestée renvoie au mouvement vert de 2009.",
            },
          ],
          trap: "Confondre séparation juridique et absence de religion dans la vie politique : les États-Unis séparent l'État et les Églises, mais la religion y pèse fortement sur les élections et les grands débats ; à l'inverse, un régime religieux comme l'Iran peut gouverner une société qui se sécularise.",
          method: "Pour chaque État étudié, retenez une fiche en trois lignes : le texte qui fixe le statut de la religion (avec sa date), un acteur religieux qui pèse sur le pouvoir, un événement récent daté. Ces trois éléments suffisent à construire un paragraphe argumenté.",
        },
        /* ------------------------------------------------------------------ */
        {
          id: 'etat-religions-inde',
          title: 'État et religions en Inde',
          minutes: 35,
          objectives: [
            "Décrire la diversité religieuse de l'Inde et ses origines historiques.",
            "Expliquer le modèle séculier inscrit dans la Constitution de 1950 et ce qui le distingue de la laïcité française.",
            "Analyser la montée du nationalisme hindou (hindutva) et ses effets sur les minorités religieuses.",
            "Mobiliser cette étude de cas pour discuter de l'inégale sécularisation des États.",
          ],
          course: [
            {
              heading: "Une mosaïque religieuse",
              paragraphs: [
                "L'Inde, pays le plus peuplé du monde depuis 2023 avec plus de 1,4 milliard d'habitants, est le berceau de plusieurs religions : l'hindouisme, le bouddhisme, le jaïnisme et le sikhisme. Selon le dernier recensement publié, celui de 2011, la population compte 79,8 % d'hindous, 14,2 % de musulmans, 2,3 % de chrétiens, 1,7 % de sikhs, 0,7 % de bouddhistes et 0,4 % de jaïns. Les musulmans, environ 200 millions de personnes, forment l'une des plus grandes populations musulmanes du monde, bien qu'ils soient une minorité dans le pays.",
                "Cette diversité a une géographie : les sikhs sont concentrés au Pendjab, les chrétiens sont nombreux dans le Nord-Est et au Kerala, et le Jammu-et-Cachemire était le seul État fédéré à majorité musulmane. L'hindouisme lui-même est très divers et s'accompagne d'un système social hiérarchisé, les castes, dont les plus bas échelons, les intouchables (aujourd'hui appelés dalits), ont longtemps subi des discriminations religieuses et sociales.",
              ],
            },
            {
              heading: "Un État séculier né dans la violence de la Partition",
              paragraphs: [
                "Pendant la lutte pour l'indépendance contre la domination britannique, le Congrès national indien de Gandhi et de Nehru défend une nation indienne ouverte à toutes les religions, tandis que la Ligue musulmane de Muhammad Ali Jinnah réclame un État pour les musulmans. En août 1947, l'Empire britannique des Indes est partagé entre l'Inde et le Pakistan. La Partition s'accompagne de violences entre hindous, sikhs et musulmans qui font, selon les estimations, plusieurs centaines de milliers à un million de morts, et de l'exode d'environ 10 à 15 millions de personnes. Le 30 janvier 1948, Gandhi est assassiné par Nathuram Godse, un nationaliste hindou qui lui reprochait sa politique envers les musulmans.",
                "La Constitution, élaborée par un comité présidé par B. R. Ambedkar et entrée en vigueur le 26 janvier 1950, ne donne aucune religion officielle à l'Inde. Elle garantit l'égalité devant la loi sans discrimination de religion, abolit l'intouchabilité (article 17) et assure la liberté de conscience et de pratique religieuse (articles 25 à 28). Le mot « séculier » (secular) est ajouté au préambule en 1976 par le 42e amendement, sous le gouvernement d'Indira Gandhi.",
                "Le sécularisme indien n'est pas une séparation à la française. Il repose sur l'égal respect de toutes les religions et sur une « distance de principe » qui permet à l'État d'intervenir dans les affaires religieuses pour les réformer ou les soutenir : l'État réforme le droit hindou de la famille par les lois de 1955-1956, administre de nombreux temples dans certains États fédérés, mais laisse chaque grande communauté régie par son propre droit personnel en matière de mariage, de divorce et d'héritage. L'article 44 fixe pour objectif un code civil uniforme, longtemps resté lettre morte.",
              ],
              box: { label: "À retenir", text: "Sécularisme indien : pas de religion d'État, liberté religieuse (articles 25 à 28), égal respect de toutes les religions ; mais l'État peut intervenir dans les affaires religieuses, et des droits personnels différents s'appliquent selon la religion." },
            },
            {
              heading: "La montée du nationalisme hindou",
              paragraphs: [
                "Le nationalisme hindou s'appuie sur l'idéologie de l'hindutva (« l'hindouité »), formulée par V. D. Savarkar en 1923 : la nation indienne serait d'abord hindoue, et les musulmans et les chrétiens, dont les lieux saints sont hors de l'Inde, n'y appartiendraient pleinement qu'en acceptant cette culture. Cette idéologie est portée par le RSS, organisation fondée en 1925, et par son bras politique, le Bharatiya Janata Party (BJP), créé en 1980.",
                "Le BJP progresse en mobilisant autour d'Ayodhya, où se trouvait la mosquée de Babur, construite au XVIe siècle, que les nationalistes hindous affirment bâtie sur le lieu de naissance du dieu Ram. Le 6 décembre 1992, des militants hindous la détruisent, ce qui provoque des émeutes meurtrières. En 2002, au Gujarat, dirigé par Narendra Modi, des violences antimusulmanes font plus d'un millier de morts après l'incendie d'un train de pèlerins hindous à Godhra.",
                "Narendra Modi devient Premier ministre en 2014 et est reconduit en 2019 et en 2024. En 2019, la Cour suprême attribue le site d'Ayodhya à la construction d'un temple de Ram, consacré par Modi le 22 janvier 2024 ; le gouvernement supprime l'autonomie du Jammu-et-Cachemire (article 370) et fait adopter une loi sur la citoyenneté (Citizenship Amendment Act) qui facilite la naturalisation des réfugiés non musulmans venus du Pakistan, du Bangladesh et d'Afghanistan, mais exclut les musulmans, ce qui provoque de vastes manifestations. La même année, une loi pénalise la répudiation instantanée (triple talaq), déjà invalidée par la Cour suprême en 2017.",
              ],
              box: { label: "Définition", text: "Hindutva : idéologie nationaliste qui définit l'identité indienne par l'appartenance à la culture hindoue. Elle est portée par le RSS (1925) et le BJP (1980) et s'oppose à la conception pluraliste de la nation défendue par Gandhi et Nehru." },
            },
            {
              heading: "Un modèle séculier en débat",
              paragraphs: [
                "Pour de nombreux chercheurs, l'Inde glisse d'une démocratie séculière vers une démocratie majoritaire où la majorité hindoue impose sa définition de la nation : le politiste Christophe Jaffrelot parle de « démocratie ethnique » dans L'Inde de Modi (2019). Plusieurs États fédérés ont adopté des lois limitant les conversions religieuses, et l'Uttarakhand a voté en 2024 un code civil uniforme, présenté comme une mesure d'égalité mais critiqué par une partie des musulmans comme une remise en cause de leur droit personnel.",
                "Le sécularisme garde pourtant des appuis. La Constitution n'a pas été modifiée sur ce point, la Cour suprême reste un recours, le fédéralisme permet à des États dirigés par d'autres partis de mener d'autres politiques, et les élections de 2024 ont privé le BJP de la majorité absolue, l'obligeant à gouverner avec des alliés. L'histoire indienne montre aussi que les tensions ne concernent pas que les musulmans : en 1984, après l'assaut de l'armée contre le Temple d'or d'Amritsar, sanctuaire sikh occupé par des séparatistes, la Première ministre Indira Gandhi est assassinée par ses gardes du corps sikhs, et des émeutes antisikhs font des milliers de morts.",
                "L'Inde illustre ainsi l'inégale sécularisation des États : un État constitutionnellement séculier, dans une société très religieuse, où la religion est devenue un enjeu central de la compétition politique et de la définition de la nation.",
              ],
            },
          ],
          keyPoints: [
            "Recensement de 2011 : 79,8 % d'hindous, 14,2 % de musulmans, 2,3 % de chrétiens, 1,7 % de sikhs.",
            "Partition de 1947 entre l'Inde et le Pakistan : violences massives ; Gandhi assassiné par un nationaliste hindou (30 janvier 1948).",
            "Constitution de 1950 (Ambedkar) : pas de religion d'État, articles 25 à 28 ; « séculier » ajouté au préambule en 1976.",
            "Sécularisme indien : égal respect des religions et intervention possible de l'État ; droits personnels selon la religion.",
            "Hindutva : Savarkar (1923), RSS (1925), BJP (1980) ; destruction de la mosquée d'Ayodhya (1992), violences du Gujarat (2002).",
            "Modi Premier ministre (2014, 2019, 2024) : article 370 et loi sur la citoyenneté (2019), temple de Ram (2024).",
          ],
          example: {
            statement: "Montrez en quoi le sécularisme indien diffère de la laïcité française.",
            solution: [
              "Point commun : dans les deux pays, l'État n'a pas de religion officielle et garantit la liberté de conscience (articles 25 à 28 de la Constitution indienne, article 1 de la loi française de 1905).",
              "Première différence, la séparation : la France sépare l'État et les cultes, qu'elle ne reconnaît ni ne subventionne ; l'Inde pratique une « distance de principe » qui permet à l'État d'intervenir dans les affaires religieuses, par exemple en administrant des temples.",
              "Deuxième différence, le droit : en France, la même loi civile s'applique à tous ; en Inde, le mariage, le divorce et l'héritage relèvent de droits personnels différents selon la religion, malgré l'objectif d'un code civil uniforme (article 44).",
              "Troisième différence, la finalité : la laïcité française est née d'un conflit avec l'Église catholique ; le sécularisme indien est né de la nécessité de faire coexister des communautés après la Partition de 1947.",
              "Conclusion : le sécularisme indien est fondé sur l'égal respect des religions plutôt que sur la séparation ; il est aujourd'hui contesté par le nationalisme hindou.",
            ],
          },
          exercises: [
            {
              level: 1,
              statement: "À partir des données du recensement indien de 2011 (hindous 79,8 %, musulmans 14,2 %, chrétiens 2,3 %, sikhs 1,7 %, bouddhistes 0,7 %, jaïns 0,4 %), calculez la part des personnes qui ne sont ni hindoues ni musulmanes, puis estimez le nombre de musulmans dans une population arrondie à 1,4 milliard d'habitants en supposant que leur part est restée la même. Concluez sur la notion de minorité.",
              hint: "Additionnez les parts des quatre autres religions recensées ; pour l'estimation, multipliez 1,4 milliard par 14,2 %.",
              solution: [
                "Autres religions recensées : 2,3 + 1,7 + 0,7 + 0,4 = 5,1 % de la population ; les 100 - 79,8 - 14,2 - 5,1 = 0,9 % restants regroupent les autres croyances et les personnes qui n'ont pas déclaré de religion.",
                "Personnes ni hindoues ni musulmanes : 100 - 79,8 - 14,2 = 6 % de la population.",
                "Estimation du nombre de musulmans : 1 400 000 000 × 0,142 = 198 800 000, soit environ 200 millions de personnes (estimation, car la part a pu évoluer depuis 2011).",
                "Conclusion : les musulmans sont une minorité en Inde (environ un habitant sur sept), mais cette minorité est l'une des plus grandes populations musulmanes du monde ; le mot minorité désigne un rapport de nombre dans un pays, pas une petite population.",
              ],
            },
            {
              level: 2,
              statement: "Expliquez en une dizaine de lignes comment l'affaire d'Ayodhya est devenue un symbole de la montée du nationalisme hindou, de 1992 à 2024.",
              hint: "Suivez trois étapes datées : la destruction, la décision de justice, la consécration du temple, et montrez à chaque fois le rôle du BJP.",
              solution: [
                "Ayodhya abritait une mosquée construite au XVIe siècle, à l'époque de l'empereur moghol Babur, sur un site que les nationalistes hindous présentent comme le lieu de naissance du dieu Ram.",
                "Le BJP et les organisations liées au RSS font de la construction d'un temple de Ram un objectif politique mobilisateur, qui associe l'identité nationale à l'hindouisme (hindutva).",
                "Le 6 décembre 1992, des militants hindous détruisent la mosquée, ce qui provoque des émeutes meurtrières entre hindous et musulmans.",
                "En 2019, la Cour suprême attribue le site à la construction d'un temple et accorde aux musulmans un autre terrain pour une mosquée.",
                "Le 22 janvier 2024, le Premier ministre Narendra Modi consacre lui-même le temple : le chef d'un gouvernement d'un État séculier préside une cérémonie religieuse.",
                "Conclusion : Ayodhya résume le passage d'une revendication militante à une politique assumée par l'État, et symbolise la remise en cause du sécularisme par le nationalisme hindou.",
              ],
            },
            {
              level: 3,
              statement: "Étude critique de document (type bac). Document : préambule de la Constitution indienne, en vigueur depuis le 26 janvier 1950, modifié en 1976 (traduction) : le peuple de l'Inde déclare avoir résolu de constituer l'Inde en une république souveraine, socialiste, séculière et démocratique, et d'assurer à tous ses citoyens la justice sociale, économique et politique, la liberté de pensée, d'expression, de croyance, de foi et de culte, l'égalité de statut et des chances, et la fraternité garantissant la dignité de l'individu et l'unité de la nation. Consigne : présentez le document, expliquez le modèle d'État qu'il définit, puis montrez que ce modèle est aujourd'hui remis en cause.",
              hint: "Rappelez que les mots « socialiste » et « séculière » ont été ajoutés en 1976 ; confrontez ensuite le texte aux politiques menées depuis 2014.",
              solution: [
                "Présentation : préambule de la Constitution entrée en vigueur le 26 janvier 1950, rédigée par une assemblée constituante dont le comité de rédaction était présidé par B. R. Ambedkar, après la Partition de 1947 ; il est complété en 1976 par le 42e amendement, qui ajoute les mots « socialiste » et « séculière ».",
                "Le modèle défini : une république démocratique où le pouvoir vient du peuple ; un État séculier, sans religion officielle ; la liberté de croyance, de foi et de culte ; l'égalité des citoyens et la fraternité, conditions de l'unité d'une nation religieusement diverse.",
                "Contexte : ce choix répond aux violences de la Partition et à l'assassinat de Gandhi (1948) ; il reflète la conception pluraliste de la nation défendue par Nehru, contre la théorie des deux nations qui a justifié la création du Pakistan.",
                "Remise en cause : le nationalisme hindou (hindutva) définit la nation par l'hindouisme ; depuis 2014, les gouvernements de Narendra Modi suppriment l'autonomie du Cachemire et adoptent une loi sur la citoyenneté qui exclut les musulmans (2019), et le Premier ministre consacre le temple d'Ayodhya (2024).",
                "Nuance et limite du document : le texte constitutionnel n'a pas été modifié et reste invoqué devant la Cour suprême et par l'opposition ; mais un préambule énonce des principes et ne dit rien de la pratique réelle, qu'il faut étudier par d'autres sources.",
                "Conclusion : le préambule fonde un sécularisme d'égal respect entre les religions, aujourd'hui contesté par une conception majoritaire de la nation : l'Inde illustre l'inégale sécularisation des États.",
              ],
            },
          ],
          game: {
            kind: 'order',
            prompt: "Remettez ces étapes de l'histoire des relations entre l'État et les religions en Inde dans l'ordre chronologique.",
            items: [
              "Fondation du RSS, organisation nationaliste hindoue",
              "Partition de l'Empire britannique des Indes entre l'Inde et le Pakistan",
              "Entrée en vigueur de la Constitution de l'Inde",
              "Ajout du mot « séculier » au préambule par le 42e amendement",
              "Destruction de la mosquée d'Ayodhya",
              "Narendra Modi devient Premier ministre",
              "Consécration du temple de Ram à Ayodhya",
            ],
          },
          quiz: [
            {
              q: "Quelle est la part des hindous dans la population indienne selon le recensement de 2011 ?",
              options: ["Environ 60 %", "Environ 98 %", "Environ 50 %", "Environ 80 %"],
              answer: 3,
              why: "Le recensement de 2011 compte 79,8 % d'hindous et 14,2 % de musulmans.",
            },
            {
              q: "Qui assassine Gandhi le 30 janvier 1948 ?",
              options: ["Un nationaliste hindou", "Un séparatiste sikh", "Un militant de la Ligue musulmane", "Un soldat britannique"],
              answer: 0,
              why: "Nathuram Godse, nationaliste hindou, reprochait à Gandhi sa politique envers les musulmans ; ce sont des gardes du corps sikhs qui tuent Indira Gandhi en 1984.",
            },
            {
              q: "En quelle année le mot « séculier » est-il ajouté au préambule de la Constitution indienne ?",
              options: ["1947", "1950", "1976", "2014"],
              answer: 2,
              why: "Le 42e amendement, adopté en 1976 sous Indira Gandhi, ajoute les mots « socialiste » et « séculière ».",
            },
            {
              q: "Que désigne l'hindutva ?",
              options: ["Une caste de prêtres chargés des rites dans les temples", "Une idéologie nationaliste fondée sur l'hindouité", "Un texte sacré de l'hindouisme rédigé en sanskrit", "Le code civil uniforme prévu par la Constitution"],
              answer: 1,
              why: "Formulée par Savarkar en 1923, l'hindutva est l'idéologie du RSS et du BJP.",
            },
            {
              q: "Quelle mesure de 2019 est critiquée pour exclure les musulmans ?",
              options: ["Le Citizenship Amendment Act sur la citoyenneté", "La fondation du parti nationaliste hindou BJP", "Le 42e amendement ajoutant le mot « séculier »", "L'abolition de l'intouchabilité par l'article 17"],
              answer: 0,
              why: "Elle facilite la naturalisation de réfugiés de plusieurs religions venus de trois pays voisins, mais pas celle des musulmans.",
            },
          ],
          trap: "Assimiler le sécularisme indien à la laïcité française : l'Inde n'a pas de religion d'État, mais elle ne sépare pas l'État des religions ; elle reconnaît des droits personnels selon la religion et intervient dans les affaires religieuses.",
          method: "Pour un objet de travail conclusif, préparez une frise en trois temps (1947-1950 : fondation du modèle ; 1980-2002 : montée de l'hindutva ; depuis 2014 : politiques du BJP) et reliez chaque date à une notion du thème (sécularisation, laïcisation, nationalisme religieux). Vous pourrez ainsi utiliser l'Inde comme exemple dans toute dissertation du thème 5.",
        },
      ],
    },
  ],
}
